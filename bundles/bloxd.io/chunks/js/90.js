export const id = 90;
export const ids = [90];
export const modules = {
  34660: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      EverythingMenu: () => gJ
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1175),
      jB = GB(1383),
      yB = GB(2167),
      JB = GB(1485),
      MB = GB(1106),
      PB = GB(1282);

    function zB(BB) {
      let {
        items: OB,
        link: GB,
        onClick: YB,
        selectedItemId: DB,
        className: zB,
        padStartsOnTab: lB = !0
      } = BB;
      const {
        t: pB
      } = (0, oB.H)(), qB = (0, MB.g)(), ZB = [];
      for (const QB of OB) {
        var NB;
        const BB = ZB[ZB.length - 1];
        var RB;
        if (BB && BB.title === (null !== (NB = QB.section) && void 0 !== NB ? NB : null)) BB.items.push(QB);
        else ZB.push({
          title: null !== (RB = QB.section) && void 0 !== RB ? RB : null,
          items: [QB]
        })
      }
      return (0, PB.jsxs)("div", {
        className: QB()("MenuSideBarBody", zB),
        "data-pad-tabs": "2",
        children: [ZB.map(((BB, OB) => {
          var GB;
          return (0, PB.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [BB.title && (0, PB.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: pB(BB.title)
            }), BB.items.map((BB => {
              var OB;
              const GB = !!BB.iconElement || !!BB.faIcon;
              return (0, PB.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": DB === BB.id ? "true" : void 0,
                "data-pad-default-focus": lB && DB === BB.id || void 0,
                className: QB()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: DB === BB.id
                }),
                onClick: () => {
                  YB(BB.id)
                },
                children: [GB && (0, PB.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (OB = BB.iconElement) && void 0 !== OB ? OB : (0, PB.jsx)(jB.b, {
                    name: BB.faIcon
                  })
                }), (!qB || !GB) && (0, PB.jsx)("div", {
                  children: pB(BB.title)
                }), BB.redDot && (0, PB.jsx)(yB.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, BB.id)
            }))]
          }, null !== (GB = BB.title) && void 0 !== GB ? GB : OB)
        })), GB && (0, PB.jsxs)("div", {
          ...(0, JB.db)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: GB.onClick,
          children: [(0, PB.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, PB.jsx)(jB.b, {
              name: GB.faIcon
            })
          }), (0, PB.jsx)("div", {
            children: pB(GB.title)
          }), (0, PB.jsx)(jB.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var lB = GB(2839),
      pB = GB(1112),
      qB = GB(2653),
      ZB = GB(3528),
      NB = GB(92),
      RB = GB(2023),
      WB = GB(2420),
      AB = GB(2429),
      VB = GB(1735),
      SB = GB(1375),
      nB = GB(5480),
      UB = GB(16),
      fB = GB(34668);

    function kB(BB) {
      let {
        setApplySettingsCallback: OB
      } = BB;
      const {
        clientEscMenuOptions: GB
      } = (0, UB.o)(["clientEscMenuOptions"]), [DB, QB] = (0, YB.useState)(!1), [oB, jB] = (0, YB.useState)(!1), [yB, MB] = (0, YB.useState)(6400), [zB, lB] = (0, YB.useState)(3600), [pB, qB] = (0, YB.useState)(!1), [ZB, NB] = (0, YB.useState)(!1);

      function RB(BB) {
        const OB = "screenshot" === BB ? jB : QB;
        OB(!0);
        const GB = pB ? "normals" : ZB ? "depth" : null;
        fB.devTools.downloadScene(BB, {
          width: yB,
          height: zB,
          colouring: GB
        }).catch((BB => {
          console.error("Couldn't download the scene", BB)
        })).finally((() => {
          OB(!1)
        }))
      }
      return (0, PB.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, PB.jsx)(nB.c, {
          label: "Disable Ambient Occlusion",
          checked: GB.disableAmbientOcclusion,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              disableAmbientOcclusion: BB
            }), OB((() => nB.g))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), fB.devTools.supports("ambientLight") && (0, PB.jsx)(nB.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: GB.ambientLightIntensity,
          onChange: BB => {
            fB.devTools.setAmbientLightIntensity(BB).then((() => {
              UB.c.setClientEscMenuOptions({
                ambientLightIntensity: BB
              })
            })).catch((BB => {
              console.error("Couldn't set the ambient light", BB)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), fB.devTools.supports("weaponRaycasts") && (0, PB.jsx)(nB.c, {
          label: "Show Weapon Raycasts",
          checked: GB.showWeaponRaycasts,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              showWeaponRaycasts: BB
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), fB.devTools.supports("sceneDownload") && (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, PB.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, PB.jsx)(nB.c, {
              label: "Apply normal-based coloring",
              checked: pB,
              onClick: BB => {
                qB(BB), BB && NB(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, PB.jsx)(nB.c, {
              label: "Apply depth-based coloring",
              checked: ZB,
              onClick: BB => {
                NB(BB), BB && qB(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, PB.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, PB.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, PB.jsx)(VB.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, OB) => {
                  const GB = parseInt(BB) || 6400;
                  MB(GB)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: yB.toString()
              }), (0, PB.jsx)("span", {
                children: "X"
              }), (0, PB.jsx)(VB.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, OB) => {
                  const GB = parseInt(BB) || 3600;
                  lB(GB)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: zB.toString()
              })]
            }), (0, PB.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, PB.jsxs)(JB.f, {
                onClick: () => {
                  RB("screenshot")
                },
                disabled: oB,
                children: [oB && (0, PB.jsx)(SB.b, {}), "Download Screenshot"]
              }), (0, PB.jsxs)(JB.f, {
                onClick: () => {
                  RB("glb")
                },
                disabled: DB,
                children: [DB && (0, PB.jsx)(SB.b, {}), "Download GLB"]
              })]
            })]
          }), (0, PB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var dB = GB(120),
      KB = GB(1121),
      uB = GB(34683),
      mB = GB(3376),
      IB = GB(1560),
      FB = GB(1262),
      iB = GB(1234),
      LB = GB(2141),
      gB = GB(1540),
      rB = GB(353),
      XB = GB(1620),
      wB = GB(615),
      EB = GB(2516);
    const cB = "store:retiredRankEnds";

    function hB(BB) {
      let {
        until: OB,
        className: GB
      } = BB;
      const {
        t: YB,
        selectedLanguage: DB
      } = (0, oB.H)(), QB = new Date(OB).toLocaleDateString((0, oB.s)(DB.code, cB), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, PB.jsx)("span", {
        className: GB,
        children: YB(cB, {
          date: QB
        })
      })
    }
    var aB = GB(2444),
      eB = GB(3403),
      TB = GB(3400),
      bB = GB(204),
      CB = GB(1705),
      HB = GB(1253),
      vB = GB(3421);

    function sB(BB, OB, GB) {
      const YB = wB.p[(0, wB.i)(wB.p, OB)],
        DB = void 0 === YB ? void 0 : (0, bB.c)(BB.entitlements, YB.entitlementId);
      return void 0 === DB || null === DB.expiresAt || (0, TB.e)(DB) <= GB ? null : DB.willRenew && null === DB.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(DB.expiresAt, GB)
      } : {
        renews: !1,
        at: (0, TB.e)(DB)
      }
    }
    var xB = GB(3393),
      tB = GB(3396);
    const BO = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function OO(BB) {
      return BB instanceof eB.c && "storeUnavailable" === BB.code ? (console.warn("Billing: the store didn't take a subscription change:", BB), "store:subscriptionStoreUnavailable") : BB instanceof eB.c && "subscriptionActionUnavailable" === BB.code ? (console.warn("Billing: a subscription action billing no longer offers:", BB), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", BB), "store:subscriptionChangeFailed")
    }
    async function GO() {
      try {
        var BB;
        const {
          offering: OB
        } = await (0, tB.getBillingClient)().getOfferings((0, EB.u)(Date.now()).placementId);
        return null !== (BB = null === OB || void 0 === OB ? void 0 : OB.packages.find(xB.isPricedPackage)) && void 0 !== BB ? BB : null
      } catch (OB) {
        return console.warn("Billing: loading the rank plan's price failed:", OB), null
      }
    }

    function YO(BB) {
      const {
        userContext: OB
      } = (0, pB.d)(), {
        superRankInfo: GB
      } = OB, DB = (0, aB.usePurchasesAllowed)(), QB = (0, rB.Oc)(GB), oB = BB && DB && (QB || OB.ranksMayChange), [jB, yB] = (0, YB.useState)(null), [JB, MB] = (0, YB.useState)(!1), [PB, zB] = (0, YB.useState)(!1), [lB, qB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        if (!oB) return;
        let BB = !1;
        const GB = () => {
          Promise.all([(0, tB.getBillingClient)().getSubscriptions(), GO()]).then((GB => {
            let [YB, DB] = GB;
            BB || (yB({
              for: OB,
              answer: YB,
              pkg: DB
            }), MB(!1))
          }), (OB => {
            console.error("Billing: loading the player's subscriptions failed:", OB), BB || MB(!0)
          }))
        };
        GB();
        const YB = CB.b.addRefetchListener("billing", GB);
        return () => {
          BB = !0, YB()
        }
      }), [oB, OB]);
      const ZB = oB && QB && null !== jB && jB.for === OB ? function(BB, OB, GB, YB) {
        var DB;
        const {
          customerInfo: QB,
          actions: oB
        } = BB, jB = wB.p[(0, wB.i)(wB.p, OB)], yB = void 0 === jB ? void 0 : (0, bB.c)(QB.entitlements, jB.entitlementId), JB = sB(QB, OB, YB);
        if (void 0 === yB || null === JB) return null;
        const MB = Object.entries(QB.subscriptions).find((BB => {
          let [, OB] = BB;
          return OB.productId === yB.productId && OB.store === yB.store && !(0, TB.i)(OB.status)
        }));
        if (void 0 === MB) return null;
        const [PB, zB] = MB;
        return {
          key: PB,
          tierId: OB,
          info: zB,
          actions: null !== (DB = (0, bB.c)(oB, PB)) && void 0 !== DB ? DB : BO,
          date: JB,
          pkg: (null === GB || void 0 === GB ? void 0 : GB.productId) === zB.productId ? GB : null
        }
      }(jB.answer, GB.tier, jB.pkg, Date.now()) : null;
      return {
        subscription: ZB,
        loadFailed: oB && QB && JB,
        busy: PB,
        errorKey: lB,
        change: async function(BB) {
          if (null === ZB || PB) return;
          zB(!0), qB(null);
          const GB = (0, tB.getBillingClient)();
          try {
            const YB = await ("cancel" === BB ? GB.cancelSubscription(ZB.key) : GB.resumeSubscription(ZB.key));
            yB({
              for: OB,
              answer: YB,
              pkg: ZB.pkg
            }), (0, vB.g)()
          } catch (YB) {
            qB(OO(YB))
          } finally {
            zB(!1)
          }
        },
        openManagePage: async function() {
          if (null === ZB || PB) return;
          const BB = window.open("", "_blank");
          zB(!0), qB(null);
          try {
            const OB = await (0, tB.getBillingClient)().subscriptionManagementUrl(ZB.key, HB.e.get().getCurrentLanguageCode());
            null === BB ? window.open(OB, "_blank", "noopener") : (BB.opener = null, BB.location.href = OB)
          } catch (OB) {
            null === BB || void 0 === BB || BB.close(), qB(OO(OB))
          } finally {
            zB(!1)
          }
        }
      }
    }
    var DO = GB(1400),
      QO = GB(3451);

    function oO(BB, OB) {
      return new Date(BB).toLocaleDateString(OB, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function jO(BB) {
      let {
        showing: OB,
        className: GB
      } = BB;
      const {
        t: YB,
        selectedLanguage: DB
      } = (0, oB.H)(), {
        subscription: yB,
        loadFailed: MB,
        busy: zB,
        errorKey: lB,
        change: pB,
        openManagePage: qB
      } = YO(OB);
      if (MB) return (0, PB.jsx)("div", {
        className: QB()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", GB),
        children: YB("store:subscriptionLoadFailed")
      });
      if (null === yB) return null;
      const {
        date: ZB,
        info: NB,
        actions: RB,
        pkg: WB
      } = yB, AB = ZB.renews ? "store:renewsOn" : "store:endsOn", VB = oO(ZB.at, (0, oB.s)(DB.code, AB)), SB = YB((0, EB.m)(yB.tierId).nameKey), nB = null !== NB.billingIssueDetectedAt;
      return (0, PB.jsxs)("div", {
        className: QB()("RankSubscriptionManage", GB),
        children: [(0, PB.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [YB(AB, {
            date: VB
          }), ZB.renews && null !== WB && (0, aB.subscriptionsSold)() && (0, PB.jsxs)(PB.Fragment, {
            children: [" \xb7 ", YB("store:pricePerMonth", {
              price: (0, QO.g)(WB)
            })]
          })]
        }), nB && (0, PB.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, PB.jsx)(jB.b, {
            name: "triangle-exclamation"
          }), " ", YB("store:paymentFailing", {
            rank: SB
          })]
        }), (0, PB.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [RB.manage && (0, PB.jsx)(JB.j, {
            disabled: zB,
            onClick: () => {
              qB()
            },
            children: YB(nB ? "store:updatePayment" : "payments:manageSubscription")
          }), RB.resume && (0, PB.jsx)(JB.f, {
            loading: zB,
            onClick: () => {
              pB("resume")
            },
            children: YB("store:resumeSubscription")
          }), RB.cancel && (0, PB.jsx)(JB.Q, {
            loading: zB,
            onClick: () => {
              (async function(BB, OB, GB) {
                const YB = Date.now() >= BB.info.currentPeriodEnd;
                return !0 === await DO.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: YB ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: OB
                    },
                    subtitle: {
                      rank: OB,
                      date: GB
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(yB, SB, oO(NB.currentPeriodEnd, (0, oB.s)(DB.code, "store:cancelKeepsUntil"))).then((BB => {
                BB && pB("cancel")
              }))
            },
            children: YB("store:cancelSubscription")
          })]
        }), null !== lB && (0, PB.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: YB(lB)
        })]
      })
    }
    var yO = GB(2437),
      JO = GB(2974),
      MO = GB(1896);
    async function PO() {
      try {
        return function(BB) {
          const OB = new Map;
          for (const {
              store: GB,
              status: YB,
              autoRenewStatus: DB,
              managementUrl: QB
            }
            of Object.values(BB.subscriptions)) !(0, TB.h)(GB) || (0, TB.i)(YB) || "willNotRenew" === DB || OB.has(GB) || OB.set(GB, null !== QB && void 0 !== QB ? QB : TB.m[GB]);
          return Array.from(OB, (BB => {
            let [OB, GB] = BB;
            return {
              store: OB,
              managementUrl: GB
            }
          }))
        }(await (0, MO.h)((0, tB.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (BB) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", BB), null
      }
    }

    function zO(BB) {
      const {
        t: OB,
        selectedLanguage: GB
      } = (0, oB.H)(), {
        userContext: DB
      } = (0, pB.d)(), {
        superRankInfo: QB
      } = DB, jB = (0, aB.usePurchasesAllowed)(), yB = BB && ((0, rB.Oc)(QB) || DB.ranksMayChange) && jB, {
        accountId: JB,
        data: MB
      } = (0, JO.h)(vB.c, yB);
      if ((0, YB.useEffect)((() => {
          if (yB) return vB.c.watchAccount(), CB.b.addRefetchListener("billing", (BB => {
            "reconnected" === BB ? vB.c.refreshAfterReconnect() : vB.c.refresh()
          }))
        }), [yB]), !yB || !(0, rB.Oc)(QB) || null === MB || JB !== DB.whamm) return null;
      const PB = sB(MB, QB.tier, Date.now());
      if (null === PB) return null;
      const zB = PB.renews ? "store:renewsOn" : "store:endsOn",
        lB = (0, oB.f)(GB.code, zB, PB.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        qB = (0, aB.getBillingStore)(),
        ZB = null !== qB && (0, TB.h)(qB) ? function(BB, OB) {
          var GB;
          const YB = Object.values(BB.subscriptions).find((BB => BB.store === OB && !(0, TB.i)(BB.status)));
          return void 0 === YB ? null : null !== (GB = YB.managementUrl) && void 0 !== GB ? GB : TB.m[OB]
        }(MB, qB) : null;
      return {
        text: OB(zB, {
          date: lB
        }),
        manageUrl: ZB
      }
    }
    var lO = GB(1405),
      pO = GB(1204),
      qO = GB(5377),
      ZO = GB(1516),
      NO = GB(4096),
      RO = GB(2590);

    function WO(BB) {
      let {
        showing: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), {
        data: YB,
        failed: DB
      } = (0, JO.h)(NO.h, OB);
      return 0 === (null === YB || void 0 === YB ? void 0 : YB.length) || null === YB && !DB ? null : (0, PB.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, PB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: GB("paymentHistory:title")
        }), null === YB && DB && (0, PB.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: GB("paymentHistory:loadFailed")
        }), null !== YB && (0, PB.jsx)("ul", {
          className: "PaymentHistoryList",
          children: YB.map((BB => (0, PB.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, PB.jsx)(RO.c, {
              entry: BB
            }), (0, PB.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, PB.jsx)("div", {
                children: (0, RO.h)(GB, BB)
              }), (0, PB.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(BB.at).toLocaleDateString(), "number" === typeof BB.orderId && ` \xb7 ${GB("paymentHistory:order",{orderId:BB.orderId})}`]
              })]
            })]
          }, (0, NO.e)(BB))))
        })]
      })
    }
    var AO = GB(2448),
      VO = GB(2241);

    function SO() {
      (0, VO.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function nO(BB) {
      let {
        status: OB
      } = BB;
      switch (OB) {
        case "restored":
          return (0, vB.g)(), {
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

    function UO() {
      const BB = (0, tB.usePageBillingClient)(),
        {
          userContext: OB
        } = (0, pB.d)(),
        [GB, DB] = (0, YB.useState)(!1),
        [QB, oB] = (0, YB.useState)(null);
      return {
        restoring: GB,
        notice: QB,
        restore: () => {
          OB.isLoggedIn() ? (DB(!0), oB(null), BB.restorePurchases().then(nO, (BB => BB instanceof eB.c && "loginRequired" === BB.code ? (SO(), null) : function(BB) {
            return BB instanceof eB.c && "storeBusy" === BB.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", BB), (0, vB.g)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(BB))).then(oB).finally((() => {
            DB(!1)
          }))) : SO()
        }
      }
    }

    function fO(BB) {
      let {
        restoring: OB,
        notice: GB,
        restore: DB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), yB = (0, aB.usePurchasesAllowed)(), MB = (0, aB.getBillingStore)(), zB = (0, YB.useRef)(null);
      return (0, YB.useEffect)((() => {
        var BB;
        null === (BB = zB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        })
      }), [GB]), yB && (0, AO.d)(MB) ? (0, PB.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, PB.jsx)(JB.j, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: OB,
          onClick: DB,
          children: jB("payments:restorePurchases")
        }), null !== GB && (0, PB.jsx)("div", {
          ref: zB,
          className: QB()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: GB.failed
          }),
          children: jB(GB.key)
        })]
      }) : null
    }
    var kO = GB(1991),
      dO = GB(1246),
      KO = GB(1186),
      uO = GB(1338),
      mO = GB(331),
      IO = GB(2712);
    const FO = {
      appStore: {
        name: "App Store",
        ...mO.bc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...mO.bc.googlePlay
      },
      discord: {
        name: "Discord",
        ...mO.bc.discord
      }
    };

    function iO(BB) {
      let {
        warning: OB,
        subscriptions: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return null !== GB && 0 === GB.length ? (0, PB.jsx)(PB.Fragment, {
        children: YB(OB)
      }) : (0, PB.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [YB(OB), null === GB && (0, PB.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: YB("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== GB && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: YB("auth:deleteAccountStoreSubscriptions")
          }), (0, PB.jsx)(IO.b, {
            className: "DeleteAccountSubtitleLinks",
            links: GB.map((BB => {
              let {
                store: OB,
                managementUrl: GB
              } = BB;
              return {
                ...FO[OB],
                url: GB
              }
            }))
          })]
        })]
      })
    }
    var LO = GB(5090);

    function gO(BB) {
      let {
        showing: OB
      } = BB;
      const {
        userContext: GB,
        isUserContextUpdating: DB
      } = (0, pB.d)(), {
        t: QB
      } = (0, oB.H)(), [jB, yB] = (0, YB.useState)(!1), [MB, zB] = (0, YB.useState)(null), lB = (0, YB.useRef)(OB);
      (0, YB.useEffect)((() => (lB.current = OB, () => {
        lB.current = !1
      })), [OB]);
      const qB = DB || jB;
      return (0, PB.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, PB.jsxs)(JB.Q, {
          onClick: async function() {
            if (!jB) {
              yB(!0);
              try {
                const BB = await async function() {
                  const [BB, OB] = await Promise.all([(0, kO.e)(GB.availableUserContextTypes) ? PO() : [], XO(GB)]);
                  if (!lB.current) return dO.c.ok();
                  const YB = (0, FB.e)(GB.getPlayerName(), !NB.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await DO.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: YB
                        }
                      },
                      subtitle: (0, PB.jsx)(iO, {
                        warning: rO(GB.isLoggedIn(), OB),
                        subscriptions: BB
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: OB ? QB("auth:deleteAccountTypedConfirm", {
                        playerName: YB
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return dO.c.ok();
                  const DB = await (0, KB.postJsonWithMetricsCookiesAndJsonResponse)(`${KO.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: UB.c.get("gameState")
                  }, {
                    retries: 3
                  }, GB.getMetricsCookies());
                  if (DB.error) return dO.c.error(DB.error);
                  (0, dB.isDiscordClient)() && (await uO.i.discordActivity()).exit("User deleted their account");
                  return LO.b.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, KB.forgetStoredGuestAccount)(GB.whamm), (0, KB.forceGlobalSignOut)(!0), dO.c.ok()
                }(), OB = BB.isError() ? BB.asError().message : null;
                zB(OB)
              } catch (BB) {
                console.error("Failed to delete account:", BB), zB(QB("auth:genericDeleteAccountError"))
              }
              yB(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: qB,
          children: [qB && (0, PB.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, PB.jsx)(SB.b, {})
          }), QB("auth:deleteAccount")]
        }), MB && (0, PB.jsx)("div", {
          className: "DeleteAccountError",
          children: MB
        })]
      })
    }

    function rO(BB, OB) {
      return (0, dB.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : BB ? "auth:deleteAccountLossWarning" : OB ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function XO(BB) {
      try {
        const {
          accountCreatedAt: OB
        } = await (0, MO.h)(gB.b.getPlayerProfile(BB, {
          lowerCaseName: BB.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== OB && Date.now() - OB >= 7 * rB.g
      } catch (OB) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", OB), !0
      }
    }
    var wO = GB(4031),
      EO = GB(4050),
      cO = GB(4041);

    function hO(BB) {
      let {
        showing: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), {
        data: YB,
        failed: DB
      } = (0, JO.h)(wO.d, OB), QB = null === YB ? null : (0, wO.f)(YB);
      return (0, PB.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, PB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: GB("settingsMenu:blockedAndIgnoredPlayers")
        }), null === QB && !DB && (0, PB.jsx)(SB.b, {}), null === QB && DB && (0, PB.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [GB("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, PB.jsx)(JB.f, {
            className: "SmallTextLight",
            onClick: () => {
              wO.d.refresh()
            },
            children: GB("general:tryAgain")
          })]
        }), 0 === (null === QB || void 0 === QB ? void 0 : QB.length) && (0, PB.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: GB("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== QB && QB.length > 0 && (0, PB.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: QB.map((BB => {
            let {
              name: OB,
              exclusion: YB
            } = BB;
            const DB = cO.f[YB];
            return (0, PB.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, PB.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: OB
              }), (0, PB.jsx)(JB.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, EO.c)(DB, OB, {
                    chatMessage: null
                  })
                },
                children: GB(cO.g[DB].text)
              })]
            }, OB)
          }))
        })]
      })
    }
    var aO = GB(5107),
      eO = GB(3799),
      TO = GB(34688);

    function bO(BB) {
      let {
        userContext: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)();
      return eO.d && (0, aO.i)() && OB !== KB.NULL_USER_CONTEXT ? (0, PB.jsxs)("div", {
        className: "SettingBox",
        children: [(0, PB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: GB("settingsMenu:playerId")
        }), (0, PB.jsx)(TO.c, {
          text: (0, aO.f)(OB)
        })]
      }) : null
    }
    const CO = (0, YB.memo)((function(BB) {
      var OB, GB;
      let {
        showing: DB,
        inGame: yB
      } = BB;
      const {
        t: MB,
        selectedLanguage: zB
      } = (0, oB.H)(), {
        hideSocialLocationFrom: qB
      } = (0, UB.o)(["hideSocialLocationFrom"]), ZB = (0, aB.usePurchasesAllowed)(), RB = UO(), WB = (0, lB.c)(), {
        userContext: AB,
        isUserContextUpdating: fB
      } = (0, pB.d)(), [kB, cB] = (0, YB.useState)(null !== (OB = AB.getPlayerName()) && void 0 !== OB ? OB : ""), [eB, TB] = (0, YB.useState)(null), {
        purchasing: bB,
        outcome: CB,
        purchase: HB
      } = (0, mB.d)("/super-rank-welcome"), vB = (0, rB.rc)((0, oB.s)(zB.code, "general:timeLeft"), AB.superRankInfo), sB = null === (GB = zO(DB)) || void 0 === GB ? void 0 : GB.text, xB = Date.now(), tB = (0, XB.e)(xB), BO = (0, EB.x)(xB), OO = (0, EB.m)(tB.id), GO = (0, EB.k)(AB.getPlayerRanks(), xB), YO = (0, EB.q)(AB.superRankInfo, xB), DO = tB.id !== wB.s.id, QO = DO && !GO && (0, rB.Oc)(AB.superRankInfo) ? AB.superRankInfo : null, oO = vB ? MB("general:timeLeft", {
        time: vB
      }) : !(DO && ZB) && sB, [JO, MO] = (0, YB.useState)(!1), [PO, NO] = (0, YB.useState)(!1), RO = (0, YB.useRef)(null), AO = (0, YB.useRef)(null), VO = (0, LB.c)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), SO = null === VO, nO = null !== VO && void 0 !== VO ? VO : [], kO = AB !== KB.NULL_USER_CONTEXT && !AB.isLoggedIn(), dO = kO && 0 !== (null === VO || void 0 === VO ? void 0 : VO.length), [KO, uO] = (0, YB.useState)([]), [mO, IO] = (0, YB.useState)(!1), FO = AB.playerHasRank("youtuber"), iO = (0, YB.useCallback)((() => gB.b.getPlayerProfile(AB, {
        lowerCaseName: AB.getPlayerName().toLowerCase()
      }).then((BB => {
        uO(BB.socialLinks)
      })).catch((BB => {
        console.error("Failed to refresh social links", BB)
      }))), [AB]);

      function LO(BB) {
        BB !== kB && ((0, FB.s)(BB) ? (BB = (0, FB.u)(BB), TB(MB("homePage:nameCharacters"))) : TB(null), RO.current && (RO.current.value = BB), cB(BB))
      }
      return (0, YB.useEffect)((() => (!0 === DB ? (clearInterval(AO.current), AO.current = setInterval(WB, 1e3)) : clearInterval(AO.current), () => {
        clearInterval(AO.current)
      })), [DB, WB]), (0, YB.useEffect)((() => {
        var BB;
        cB(null !== (BB = AB.getPlayerName()) && void 0 !== BB ? BB : "")
      }), [AB]), (0, YB.useEffect)((() => {
        if (!DB || !FO || fB) return;
        let BB = !1;
        return IO(!0), uO([]), gB.b.getPlayerProfile(AB, {
          lowerCaseName: AB.getPlayerName().toLowerCase()
        }).then((OB => {
          BB || uO(OB.socialLinks)
        })).catch((BB => {
          console.error("Failed to load social links", BB)
        })).finally((() => {
          BB || IO(!1)
        })), () => {
          BB = !0
        }
      }), [DB, FO, fB, AB]), (0, PB.jsxs)("div", {
        className: QB()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: yB
        }),
        children: [yB && (0, PB.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: MB("settingsMenu:accountSettingsInGameWarning")
        }), (0, PB.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, PB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [MB("homePage:discordNamePopupTitle"), (0, PB.jsxs)(IB.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, iB.j)({
                name: AB.getPlayerName()
              }),
              onClick: () => {
                UB.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, PB.jsx)(jB.b, {
                name: "arrow-up-right-from-square"
              }), " ", MB("profileCard:viewProfile")]
            })]
          }), (0, PB.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, PB.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [NB.featureFlags.canChangeName && (0, PB.jsx)(VB.b, {
                className: "EnterName",
                placeholderText: MB("homePage:enterName"),
                maxLength: FB.l,
                defaultValue: kB,
                onValueChange: BB => {
                  LO(BB)
                },
                forcedText: JO || !NB.featureFlags.canChangeName ? kB : null,
                blurOnEnter: !0,
                domRef: RO
              }), (0, PB.jsx)(JB.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  LO((0, FB.h)())
                },
                children: (0, PB.jsx)(jB.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !NB.featureFlags.canChangeName && (0, PB.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, FB.e)(kB, !NB.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, PB.jsx)(JB.f, {
              className: "ChooseNameButton",
              disabled: JO || kB === AB.getPlayerName(),
              onClick: () => {
                kB.length < FB.o ? TB(MB("homePage:changeNameMinLengthError", {
                  length: FB.o
                })) : kB.length > FB.l ? TB(MB("homePage:changeNameMaxLengthError", {
                  length: FB.l
                })) : (MO(!0), TB(null), (0, uB.f)(AB, kB).then((BB => {
                  MO(!1), "taken" === BB.outcome ? TB(MB("homePage:nameTaken")) : "refused" === BB.outcome ? TB(BB.message) : "failed" === BB.outcome && TB(MB((0, uB.e)(BB.failure)))
                })))
              },
              children: MB("general:choose")
            })]
          }), eB && (0, PB.jsx)("div", {
            className: "ChooseAccNameError",
            children: eB
          })]
        }), (0, PB.jsx)(bO, {
          userContext: AB
        }), (0, PB.jsx)(nB.c, {
          label: (() => {
            if ((0, pO.n)(qB)) {
              const BB = (0, oB.s)(zB.code, "general:timeLeft"),
                OB = (0, rB.eb)(BB, Date.now(), qB + pO.k);
              return `${MB("settingsMenu:hideSocialLocation")} (${MB("general:timeLeft",{time:OB})})`
            }
            return MB("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const BB = !(0, pO.n)(qB);
            (0, ZO.reportAnalyticsClick)({
              id: "social.hide_location",
              value: BB ? "on" : "off"
            }), NO(!0), gB.b.setHideSocialLocation(AB, BB).then((() => {
              UB.c.set({
                hideSocialLocationFrom: BB ? Date.now() : null
              })
            })).finally((() => {
              NO(!1)
            }))
          },
          checked: (0, pO.n)(qB),
          disabled: PO
        }), FO && (0, PB.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, PB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: MB("settingsMenu:socialLinks")
          }), mO && (0, PB.jsx)(SB.b, {}), !mO && (0, PB.jsx)(qO.b, {
            socialLinks: KO,
            editable: !0,
            userContext: AB,
            onLinksUpdated: iO
          })]
        }), (0, PB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: MB(dO ? "auth:loginOrSwitchAccount" : "auth:login")
          }), SO && (0, PB.jsx)(SB.b, {}), !SO && 0 === nO.length && (0, PB.jsx)("div", {
            className: "NoLoginOptions",
            children: MB("auth:noLoginOptions")
          }), !SO && nO.length > 0 && "crazygames" !== dB.siteUsed && (0, PB.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: nO
          }), !SO && nO.length > 0 && "crazygames" === dB.siteUsed && (0, PB.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [nO[0], nO.length > 1 && (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, PB.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: MB("auth:legacyLoginOptions")
                }), (0, PB.jsx)(lO.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: MB("auth:legacyLoginOptionsInfo")
                })]
              }), (0, PB.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: nO.slice(1)
              })]
            })]
          }), NB.featureFlags.useLogin && (null !== AB.loggedInInfo || AB.isLoggedIn()) && (0, PB.jsxs)(PB.Fragment, {
            children: [(0, PB.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, PB.jsxs)(JB.Q, {
              onClick: () => {
                (0, KB.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, PB.jsx)(jB.b, {
                name: "right-from-bracket"
              }), MB("auth:signOut")]
            })]
          })]
        }), null !== QO && (0, PB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, PB.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, PB.jsx)(EB.h, {
              tierId: QO.tier
            })
          }), (0, PB.jsx)(jO, {
            showing: DB
          })]
        }), !GO && ZB && (0, PB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, PB.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, PB.jsx)(EB.h, {
              tierId: tB.id
            })
          }), null !== YO && (0, PB.jsx)(hB, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: YO
          }), (0, PB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, PB.jsxs)(JB.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, yO.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, PB.jsx)(jB.b, {
                name: "bolt"
              }), MB(null !== YO ? "store:upgradeToHyperRank" : OO.getKey)]
            }), (0, PB.jsxs)(JB.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, yO.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, PB.jsx)(jB.b, {
                name: "bolt"
              }), MB(OO.giftKey)]
            })]
          }), (0, PB.jsx)(fO, {
            ...RB
          })]
        }), GO && (0, PB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, PB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, PB.jsx)(EB.h, {
              tierId: tB.id
            }), oO && (0, PB.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", oO, ")"]
            })]
          }), DO && (0, PB.jsx)(jO, {
            showing: DB
          }), ZB && (0, PB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, rB.Oc)(AB.superRankInfo) && (0, PB.jsxs)(JB.q, {
              className: "AccountSettingsSuperRankProlong",
              loading: bB,
              onClick: () => {
                HB(BO.id, null)
              },
              children: [(0, PB.jsx)(jB.b, {
                name: "bolt"
              }), MB("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: BO.product.days,
                price: BO.price
              })]
            }), (0, PB.jsxs)(JB.q, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, yO.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, PB.jsx)(jB.b, {
                name: "bolt"
              }), MB(OO.giftKey)]
            })]
          }), CB && (0, PB.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: MB(CB.translationKey)
          }), (0, PB.jsx)(fO, {
            ...RB
          })]
        }), (0, PB.jsx)(WO, {
          showing: DB
        }), NB.featureFlags.useSocialFeatures && (0, PB.jsx)(hO, {
          showing: DB
        }), (0, PB.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, PB.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, PB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: MB(HO(kO, dO))
            }), (0, dB.isDiscordClient)() && (0, PB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: MB("auth:discordActivityKickWarning")
            }), (0, PB.jsx)(gO, {
              showing: DB
            })]
          }), (0, PB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: MB(kO ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function HO(BB, OB) {
      return BB ? OB ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var vO = GB(34693),
      sO = GB(3544),
      xO = GB(1468),
      tO = GB(2063),
      BG = GB(9547),
      OG = GB(34702);

    function GG() {
      const {
        t: BB
      } = (0, oB.H)();
      return (0, tO.g)("localPlayerAlive") ? (0, PB.jsx)(BG.d, {
        icon: "camera-alt",
        title: BB("screenshotMode:title"),
        sub: BB("screenshotMode:entrySub"),
        onClick: OG.d
      }) : null
    }
    var YG = GB(34713);
    const DG = (0, YB.memo)((function(BB) {
        let {
          inGame: OB
        } = BB;
        const {
          t: GB,
          selectedLanguage: YB
        } = (0, oB.H)(), {
          clientEscMenuOptions: DB,
          showDebugOverlay: QB,
          isTouchScreen: jB
        } = (0, UB.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), yB = (0, qB.g)("hideCoordinates");
        let JB = "settingsMenu:showCoordinates",
          MB = "settingsMenu:showChunkCoordinates";

        function zB(BB) {
          const OB = new Intl.DisplayNames([BB], {
            type: "language"
          }).of(BB);
          return OB.charAt(0).toUpperCase() + OB.slice(1)
        }
        return yB && (JB = "settingsMenu:showCoordinatesHidden", MB = "settingsMenu:showChunkCoordinatesHidden"), (0, PB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [OB && NB.featureFlags.canUseInviteLinks && (0, PB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, PB.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: GB("settingsMenu:inviteLink")
            }), (0, PB.jsx)(vO.e, {})]
          }), (0, PB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, PB.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: GB("settingsMenu:language")
            }), (0, PB.jsx)(sO.c, {
              options: Object.entries(oB.l).map((BB => {
                let [OB, GB] = BB;
                return {
                  label: (0, PB.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, PB.jsx)("img", {
                      src: GB.flagImg,
                      alt: "flag"
                    }), (0, PB.jsxs)("span", {
                      children: [zB(OB), " ", (0, PB.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", OB, ")"]
                      })]
                    })]
                  }),
                  value: OB
                }
              })),
              value: YB.code,
              onChange: BB => {
                HB.e.get().setCurrentLanguage(BB.value)
              }
            })]
          }), OB && jB && (0, YG.d)() && (0, PB.jsx)(GG, {}), !(0, NB.isMobileApp)() && (0, xO.h)() && NB.featureFlags.useForceRotateForceFullscreenOverlay && (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:disableFullscreenMode"),
            checked: DB.disableFullscreen,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                disableFullscreen: BB
              })
            }
          }), (0, PB.jsx)(nB.c, {
            label: GB(JB),
            checked: DB.showCoordinates,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showCoordinates: BB
              })
            },
            disabled: yB
          }), (0, PB.jsx)(nB.c, {
            label: GB(MB),
            checked: DB.showChunkCoordinates,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showChunkCoordinates: BB
              })
            },
            disabled: yB
          }), (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:showFps"),
            checked: DB.showFPS,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showFPS: BB
              })
            }
          }), (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:disableBunnyHopping"),
            checked: DB.disableBunnyHopping,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                disableBunnyHopping: BB
              })
            }
          }), (0, uO.s)() && (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:showChat"),
            checked: DB.showChat,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showChat: BB
              })
            }
          }), (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:showDebugOverlay"),
            checked: QB,
            onClick: BB => {
              UB.c.set({
                showDebugOverlay: BB
              })
            }
          }), NB.featureFlags.useSocialFeatures && (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:showFriendOnlineToasts"),
            checked: DB.showFriendOnlineToasts,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showFriendOnlineToasts: BB
              })
            }
          }), (0, PB.jsx)(nB.c, {
            label: GB("settingsMenu:showNewItemIndicator"),
            checked: DB.showNewItemIndicator,
            onClick: BB => {
              UB.c.setClientEscMenuOptions({
                showNewItemIndicator: BB
              })
            }
          })]
        })
      })),
      QG = (0, YB.memo)((function() {
        const {
          t: BB
        } = (0, oB.H)(), {
          soundVolume: OB,
          musicVolume: GB
        } = (0, UB.o)(["soundVolume", "musicVolume"]);
        return (0, PB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, PB.jsx)(nB.f, {
            name: BB("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: GB,
            onChange: BB => {
              UB.c.set({
                musicVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          }), (0, PB.jsx)(nB.f, {
            name: BB("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: OB,
            onChange: BB => {
              UB.c.set({
                soundVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          })]
        })
      }));
    var oG = GB(729),
      jG = GB(1480),
      yG = GB(2586),
      JG = GB(2578),
      MG = GB(3928);
    const PG = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function zG() {
      const {
        t: BB
      } = (0, oB.H)(), OB = (0, MG.c)(), {
        mobilePushNotificationsCanAsk: GB
      } = (0, UB.o)(["mobilePushNotificationsCanAsk"]), [DB, QB] = (0, YB.useState)(null), [jB, yB] = (0, YB.useState)(!1), [MB, zB] = (0, YB.useState)(null), [lB, pB] = (0, YB.useState)(!1), qB = (0, YB.useCallback)((() => {
        (0, yG.c)().then((BB => {
          OB.current && (QB(BB), yB(!1))
        })).catch((BB => {
          console.error("Failed to load push notification targets:", BB), OB.current && yB(!0)
        }))
      }), [OB]), ZB = (0, YB.useCallback)((() => {
        (0, JG.c)().then((BB => {
          OB.current && zB((() => BB))
        }))
      }), [OB]);
      (0, YB.useEffect)((() => {
        qB()
      }), [qB]), (0, YB.useEffect)((() => {
        ZB()
      }), [ZB, GB]), (0, jG.f)(yG.k, qB);
      const NB = null === DB ? [] : Object.keys(PG).filter((BB => DB[BB] > 0));
      return (0, PB.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, PB.jsx)("div", {
          className: "SliderText",
          children: BB("notificationSettings:pushNotifications")
        }), null === DB && jB && (0, PB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsLoadFailed")
        }), null !== DB && 0 === NB.length && (0, PB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsNone")
        }), NB.length > 0 && (0, PB.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: NB.map((OB => {
            var GB;
            return (0, PB.jsx)("li", {
              children: BB(PG[OB], {
                count: null !== (GB = null === DB || void 0 === DB ? void 0 : DB[OB]) && void 0 !== GB ? GB : 0
              })
            }, OB)
          }))
        }), null !== MB && (0, PB.jsx)(JB.f, {
          className: "PushNotificationSettingsButton",
          loading: lB,
          onClick: () => {
            pB(!0), MB().catch((BB => {
              console.error("Failed to turn on push notifications:", BB)
            })).finally((() => {
              OB.current && (pB(!1), ZB())
            }))
          },
          children: BB("notificationSettings:pushTurnOn")
        })]
      })
    }
    var lG = GB(2771),
      pG = GB(2572),
      qG = GB(1964),
      ZG = GB(31);
    async function NG() {
      return "dailyDropReminderAsked_" + (await KB.userContextManager.getCurrentUserContext()).whamm
    }

    function RG(BB) {
      return async function(BB) {
        if (BB.remindersOn || (0, UB.g)(UB.c.get("gameState"))) return null;
        const OB = await NG();
        if (null !== ZG.g.getItem(OB)) return null;
        const [GB, YB] = await Promise.all([(0, JG.c)().catch((BB => (console.error("Couldn't tell whether this device can take push notifications:", BB), null))), WG()]);
        if (null === GB && !YB) return null;
        if (null !== GB && ((0, pG.e)() || (0, JG.d)())) return null;
        return {
          askedKey: OB,
          requester: GB
        }
      }(BB).catch((BB => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", BB), null)))
    }

    function WG() {
      return (0, yG.c)().then((BB => BB.app + BB.browser + BB.msnPlay > 0), (BB => (console.error("Couldn't tell where push notifications reach this account:", BB), !0)))
    }
    async function AG(BB) {
      const OB = (0, lG.y)({
          remindersOn: !0
        }),
        GB = null === BB ? Promise.resolve() : BB(),
        [YB, DB] = await Promise.allSettled([OB, GB]);
      "rejected" === YB.status && console.error("Failed to turn on Lucky Skin Block reminders:", YB.reason), "rejected" === DB.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", DB.reason), "rejected" !== YB.status && "rejected" !== DB.status || qG.d.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const VG = {
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
      SG = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function nG(BB) {
      let {
        setting: OB,
        value: GB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), jB = (0, MG.c)(), [yB, JB] = (0, YB.useState)(null), [MB, zB] = (0, YB.useState)(!1), [lB, pB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        "remindersOn" === OB && (0, JG.c)().then((BB => {
          jB.current && pB((() => BB))
        }), (BB => {
          console.error("Couldn't tell whether this device can take push notifications:", BB)
        }))
      }), [OB, jB]), (0, PB.jsx)(nB.c, {
        className: QB()({
          DailyDropSettingFailed: MB
        }),
        label: DB(SG[OB].label),
        checked: null !== yB && void 0 !== yB ? yB : GB,
        note: MB ? DB("dailyDrop:settingFailed") : void 0,
        onClick: BB => {
          null === yB && (JB(BB), zB(!1), BB && null !== lB && lB().catch((BB => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", BB)
          })), (0, lG.v)("daily_drop.setting", `${SG[OB].reportAs}_${BB?"on":"off"}`), "remindersOn" === OB && NG().then((BB => {
            ZG.g.setItem(BB, !0)
          }), (BB => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", BB)
          })), (0, lG.y)("hidden" === OB ? {
            hidden: BB
          } : {
            remindersOn: BB
          }).catch((BB => {
            console.error(`Failed to save the Lucky Skin Block's ${OB} setting:`, BB), jB.current && zB(!0)
          })).finally((() => {
            jB.current && JB(null)
          })))
        }
      })
    }
    const UG = (0, YB.memo)((function() {
      const {
        t: BB
      } = (0, oB.H)(), {
        clientEscMenuOptions: OB
      } = (0, UB.o)(["clientEscMenuOptions"]), {
        userContext: GB
      } = (0, pB.d)(), YB = GB.dailyDrop;
      return (0, PB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [NB.featureFlags.useSocialFeatures && (0, PB.jsx)(nB.d, {
          label: BB("notificationSettings:friendRequests"),
          options: oG.d.map((OB => ({
            value: OB,
            label: BB(VG[OB].label)
          }))),
          value: OB.friendRequestNotifications,
          onChange: BB => {
            UB.c.setClientEscMenuOptions({
              friendRequestNotifications: BB
            })
          },
          circleInfoText: (0, PB.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: oG.d.map((OB => (0, PB.jsxs)("div", {
              children: [(0, PB.jsx)("b", {
                children: BB(VG[OB].label)
              }), ": ", BB(VG[OB].info)]
            }, OB)))
          })
        }), null !== YB && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)(nG, {
            setting: "remindersOn",
            value: YB.remindersOn
          }), (0, PB.jsx)(nG, {
            setting: "hidden",
            value: YB.hidden
          })]
        }), (0, PB.jsx)(zG, {})]
      })
    }));
    var fG = GB(4914),
      kG = GB(192),
      dG = GB(320),
      KG = GB(7198),
      uG = GB(3885),
      mG = GB(34717),
      IG = GB(641),
      FG = GB(25);
    var iG = GB(662),
      LG = GB(4785);
    const gG = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function rG(BB) {
      return gG.has(BB) ? RB.gameBridge.lookup("bR", null) : null
    }

    function XG(BB) {
      if (!(0, IG.Q)(UB.c.get("clientEscMenuOptions")[BB])) return UB.c.get("clientEscMenuOptions")[BB];
      const OB = rG(BB);
      return null !== OB ? OB[gG.get(BB)] : ZG.g.getItem(BB)
    }

    function wG(BB, OB) {
      if ("useTouchControls" === BB) return void(0, LG.d)(OB);
      BB in UB.c.get("clientEscMenuOptions") && UB.c.setClientEscMenuOptions({
        [BB]: OB
      });
      const GB = rG(BB);
      null !== GB && RB.gameBridge.send("setChunkAddDistance", {
        ...GB,
        [gG.get(BB)]: OB
      }), ZG.g.setItem(BB, OB)
    }
    var EG = GB(4851),
      cG = GB(34722),
      hG = GB(34725),
      aG = GB(4912),
      eG = GB(34746);

    function TG(BB) {
      var OB, DB, jB, yB;
      let {
        minChunkAddDist: JB,
        getValue: MB,
        onChange: zB,
        setApplySettingsCallback: lB
      } = BB;
      const {
        t: pB
      } = (0, oB.H)(), {
        clientEscMenuOptions: ZB
      } = (0, UB.o)(["clientEscMenuOptions", "showDistantNametags"]), RB = (0, YB.useRef)(MB("showFog")), WB = (0, YB.useRef)(ZB.antiAliasing), AB = (0, YB.useRef)(ZB.useWebGpu), [VB, SB] = (0, YB.useState)(null), [kB, dB] = (0, YB.useState)(!1), [KB, uB] = (0, YB.useState)((() => (0, uG.f)(NB.featureFlags.settings.canUseShaderPacks))), [mB] = (0, YB.useState)((() => UB.c.isWebGpuDefaultOff())), [IB] = (0, YB.useState)(dG.l), [FB, iB] = (0, YB.useState)(!1);
      (0, YB.useEffect)((() => {
        const BB = () => {
          iB((0, hG.s)())
        };
        return BB(), (0, hG.A)(BB)
      }), []), (0, jG.f)("appManagerUpdated|clientEscMenuOptions", (() => {
        iB((0, hG.s)())
      }));
      const [LB] = (0, YB.useState)((() => !0 === ZG.g.getItem(mO.nc))), [gB] = (0, YB.useState)((() => UB.c.isWebGpuOnStored()));
      (0, YB.useEffect)((() => {
        let BB = !1;
        return (0, NB.hasUsableWebGpuAdapter)().then((async OB => {
          const GB = LB || gB,
            YB = !OB && iG.D && await (0, eG.e)(GB);
          BB || (SB(OB || YB), dB(YB))
        })), (0, uG.n)(NB.featureFlags.settings.canUseShaderPacks) && (0, KG.e)().then((async OB => {
          const YB = null !== OB && await async function(BB) {
            const [{
              isShaderPackActive: OB
            }, {
              loadPageShaderPackCompiler: YB
            }] = await Promise.all([GB.e(153).then((() => GB(7193))), Promise.all([GB.e(89), GB.e(149), GB.e(152)]).then((() => GB(7159)))]);
            return OB(BB, await YB())
          }(OB);
          BB || uB(YB)
        })), () => {
          BB = !0
        }
      }), [LB, gB]);
      const rB = (!(KB && !LB) || !kB) && VB,
        XB = function(BB, OB, GB, YB, DB) {
          return (0, mG.b)(GB, YB) && !0 === OB ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== OB ? "settingsMenu:newWebGpu" : DB ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: BB && !1 !== OB,
            disabled: !0 !== OB
          }
        }(ZB.useWebGpu, rB, KB, mB, IB),
        wB = (ZB.useWebGpu || (0, mG.b)(KB, mB)) && KB && !0 === rB,
        EB = (0, qB.g)("lightingOverride"),
        cB = !(0, IG.Q)(EB);
      let hB = "settingsMenu:enableLighting";
      cB && (hB = EB ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const aB = BB => {
          var OB, GB, YB;
          const DB = null !== (OB = BB.showFog) && void 0 !== OB ? OB : MB("showFog"),
            QB = null !== (GB = BB.antiAliasing) && void 0 !== GB ? GB : ZB.antiAliasing,
            oB = null !== (YB = BB.useWebGpu) && void 0 !== YB ? YB : ZB.useWebGpu,
            jB = !iG.D && DB !== RB.current || QB !== WB.current || oB !== AB.current;
          lB(jB ? () => nB.g : null)
        },
        eB = (0, qB.g)("fogChunkDistanceOverride"),
        TB = (0, qB.g)("fogBlockDistanceOverride"),
        bB = !(0, IG.Q)(eB) || !(0, IG.Q)(TB),
        CB = bB ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [HB, vB] = (0, fG.g)(JB),
        [sB, xB] = (0, aG.d)(JB),
        tB = pB("settingsMenu:chunkLoadDistanceDeviceLimit"),
        BO = sB < HB,
        OO = Math.min(null !== (OB = MB("chunkHorizAddDist")) && void 0 !== OB ? OB : JB[0], sB),
        GO = !bB && function(BB, OB) {
          return !0 === BB.showFog && BB.fogChunkDistance > OB
        }(ZB, OO);
      return (0, PB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, PB.jsx)(nB.f, {
          name: pB("settingsMenu:horizontalChunkLoadDistance"),
          min: JB[0],
          max: HB,
          selectableMax: sB,
          cappedNote: tB,
          step: 1,
          initValue: OO,
          onChange: BB => {
            !0 === MB("showFog") && BB < MB("fogChunkDistance") && zB("fogChunkDistance", BB), zB("chunkHorizAddDist", BB), FG.o.tM("updatedChunkLoadDist")
          },
          circleInfoText: pB("settingsMenu:chunkLoadDistanceInfo")
        }), (0, PB.jsx)(nB.f, {
          name: pB("settingsMenu:verticalChunkLoadDistance"),
          min: JB[1],
          max: vB,
          selectableMax: xB,
          cappedNote: BO ? void 0 : tB,
          step: 1,
          initValue: Math.min(null !== (DB = MB("chunkVertAddDist")) && void 0 !== DB ? DB : JB[1], xB),
          onChange: BB => {
            zB("chunkVertAddDist", BB), FG.o.tM("updatedChunkLoadDist")
          },
          circleInfoText: pB("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:chunkFadeIn"),
          checked: ZB.chunkFadeIn,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              chunkFadeIn: BB
            })
          },
          circleInfoText: pB("settingsMenu:chunkFadeInInfo")
        }), fB.devTools.supports("chunkBorders") && (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:showChunkBorders"),
          checked: ZB.showChunkBorders,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              showChunkBorders: BB
            })
          },
          circleInfoText: pB("settingsMenu:showChunkBordersInfo")
        }), (0, PB.jsx)(nB.c, {
          label: pB(hB),
          checked: ZB.enableLighting,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              enableLighting: BB
            })
          },
          disabled: cB
        }), (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, PB.jsx)(nB.c, {
            label: pB(CB),
            checked: ZB.showFog,
            onClick: BB => {
              aB({
                showFog: BB
              }), UB.c.setClientEscMenuOptions({
                showFog: BB
              })
            },
            disabled: bB,
            className: QB()({
              SettingBoxWarning: GO
            })
          }), (0, PB.jsx)(nB.f, {
            name: pB("settingsMenu:fogChunkDistance"),
            min: JB[0],
            max: kG.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (jB = ZB.fogChunkDistance) && void 0 !== jB ? jB : JB[0],
            onChange: BB => {
              UB.c.setClientEscMenuOptions({
                fogChunkDistance: BB
              }), FG.o.tM("fogChunkDistanceChanged", BB)
            },
            circleInfoText: pB("settingsMenu:fogChunkDistanceInfo"),
            disabled: bB || !1 === MB("showFog"),
            className: QB()({
              SettingBoxWarning: GO
            })
          }), GO && (0, PB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: pB("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !iG.D && (0, PB.jsx)(nB.c, {
          label: pB(wB ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !wB && ZB.disableTexAtlas,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              disableTexAtlas: BB
            })
          },
          circleInfoText: pB("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: wB
        }), (0, PB.jsx)(nB.f, {
          name: pB("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: ZB.cameraFOV,
          onChange: BB => {
            UB.c.setClientEscMenuOptions({
              cameraFOV: BB
            })
          }
        }), (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:disableViewBobbing"),
          checked: ZB.disableBobbing,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              disableBobbing: BB
            })
          },
          circleInfoText: pB("settingsMenu:disableViewBobbingInfo")
        }), (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:antiAliasing"),
          checked: ZB.antiAliasing,
          onClick: BB => {
            aB({
              antiAliasing: BB
            }), (0, EG.i)("antiAliasing"), UB.c.setClientEscMenuOptions({
              antiAliasing: BB
            })
          },
          circleInfoText: pB("settingsMenu:antiAliasingInfo")
        }), (0, PB.jsx)(nB.f, {
          name: pB("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (yB = ZB.pixelScale) && void 0 !== yB ? yB : 1,
          onChange: BB => {
            (BB !== UB.c.get("clientEscMenuOptions").pixelScale || (0, hG.r)()) && (0, EG.i)("pixelScale"), UB.c.setClientEscMenuOptions({
              pixelScale: BB
            })
          },
          circleInfoText: pB("settingsMenu:pixelScaleInfo"),
          note: FB ? pB("settingsMenu:pixelScaleLowered") : void 0,
          format: BB => `${BB}x`
        }), (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:pixelSmoothing"),
          checked: ZB.pixelSmoothing,
          onClick: BB => {
            UB.c.setClientEscMenuOptions({
              pixelSmoothing: BB
            })
          },
          circleInfoText: pB("settingsMenu:pixelSmoothingInfo")
        }), iG.D && (0, PB.jsx)(nB.c, {
          label: pB("settingsMenu:distantNametags"),
          checked: (0, cG.c)(),
          onClick: BB => {
            UB.c.set({
              showDistantNametags: BB
            })
          },
          circleInfoText: pB("settingsMenu:distantNametagsInfo")
        }), (0, PB.jsx)(nB.c, {
          label: pB(XB.translationKey),
          checked: XB.checked,
          onClick: BB => {
            aB({
              useWebGpu: BB
            }), UB.c.setClientEscMenuOptions({
              useWebGpu: BB
            })
          },
          circleInfoText: pB("settingsMenu:newWebGpuInfo"),
          disabled: XB.disabled
        })]
      })
    }
    var bG = GB(4848),
      CG = GB(9529),
      HG = GB(34755),
      vG = GB(9540),
      sG = GB(34757);
    const xG = {
        color: 16777215,
        name: "white"
      },
      tG = {
        color: 0,
        name: "black"
      },
      BY = [xG, {
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
      }, tG],
      OY = [tG, xG];

    function GY(BB) {
      return `${BB} px`
    }

    function YY(BB) {
      return `${BB}%`
    }

    function DY(BB) {
      let {
        label: OB,
        value: GB,
        swatches: YB,
        onChange: DB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), yB = !YB.some((BB => BB.color === GB));
      return (0, PB.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, PB.jsx)("div", {
          className: "SliderText",
          children: OB
        }), (0, PB.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": OB,
          children: [YB.map((BB => {
            let {
              color: OB,
              name: YB
            } = BB;
            return (0, PB.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": OB === GB,
              "aria-label": jB(`crosshairSettings:color_${YB}`),
              "data-pad-focusable": !0,
              className: QB()("CrosshairSwatch", {
                Selected: OB === GB
              }),
              style: {
                background: (0, sG.l)(OB)
              },
              onClick: () => {
                DB(OB)
              }
            }, OB)
          })), (0, PB.jsx)("label", {
            className: QB()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: yB
            }),
            style: yB ? {
              background: (0, sG.l)(GB)
            } : void 0,
            title: jB("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, PB.jsx)("input", {
              type: "color",
              "aria-label": jB("crosshairSettings:customColor"),
              value: (0, sG.l)(GB),
              onChange: BB => {
                const OB = (0, sG.t)(BB.target.value);
                null !== OB && DB(OB)
              }
            })
          })]
        })]
      })
    }

    function QY(BB) {
      let {
        settings: OB,
        onChange: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)(), DB = (BB, YB) => {
        GB((0, sG.w)(OB, BB, YB))
      }, QB = function(BB, GB) {
        let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GY;
        const {
          min: QB,
          max: oB,
          step: jB
        } = sG.c[BB];
        return (0, PB.jsx)(nB.f, {
          name: GB,
          min: QB,
          max: oB,
          step: jB,
          initValue: OB[BB],
          format: YB,
          onChange: OB => {
            DB(BB, OB)
          }
        }, BB)
      }, jB = ["lines", "dot", "circle"].filter((BB => OB[BB])), yB = (BB, GB, YB) => (0, PB.jsx)(nB.c, {
        label: GB,
        checked: OB[BB],
        disabled: 1 === jB.length && jB[0] === BB,
        circleInfoText: YB,
        onClick: OB => {
          DB(BB, OB)
        }
      }, BB), JB = "shapes" === OB.style;
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(0, PB.jsx)(nB.d, {
          label: YB("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: YB("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: YB("crosshairSettings:styleShapes")
          }],
          value: OB.style,
          onChange: BB => {
            DB("style", BB)
          }
        }), (0, PB.jsx)(DY, {
          label: YB("crosshairSettings:color"),
          value: OB.color,
          swatches: BY,
          onChange: BB => {
            DB("color", BB)
          }
        }), QB("opacity", YB("crosshairSettings:opacity"), YY), !JB && QB("size", YB("crosshairSettings:size"), YY), JB && (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [yB("lines", YB("crosshairSettings:lines")), OB.lines && QB("lineLength", YB("crosshairSettings:lineLength")), OB.lines && QB("lineThickness", YB("crosshairSettings:lineThickness")), OB.lines && QB("gap", YB("crosshairSettings:gap")), OB.lines && yB("tStyle", YB("crosshairSettings:tStyle"))]
        }), JB && (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [yB("dot", YB("crosshairSettings:dot")), OB.dot && QB("dotSize", YB("crosshairSettings:dotSize"))]
        }), JB && (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [yB("circle", YB("crosshairSettings:circle")), OB.circle && QB("circleRadius", YB("crosshairSettings:circleRadius")), OB.circle && QB("circleThickness", YB("crosshairSettings:circleThickness"))]
        }), (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QB("outline", YB("crosshairSettings:outline"), (BB => BB > 0 ? GY(BB) : YB("crosshairSettings:off"))), OB.outline > 0 && (0, PB.jsx)(DY, {
            label: YB("crosshairSettings:outlineColor"),
            value: OB.outlineColor,
            swatches: OY,
            onChange: BB => {
              DB("outlineColor", BB)
            }
          })]
        }), yB("growOnClick", YB("crosshairSettings:growOnClick")), JB && yB("forGuns", YB("crosshairSettings:forGuns"), YB("crosshairSettings:forGunsInfo"))]
      })
    }
    var oY = GB(70),
      jY = GB(1268),
      yY = GB(13542),
      JY = GB(14703),
      MY = GB(16057),
      PY = GB(16603);
    const zY = ["sky", "grass", "stone", "sand", "snow", "night"],
      lY = "4rem";

    function pY(BB) {
      return {
        backgroundImage: `url(${BB})`,
        backgroundSize: `${lY} ${lY}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function qY(BB) {
      return {
        ...(() => {
          switch (BB) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return pY(yY);
            case "stone":
              return pY(JY);
            case "sand":
              return pY(MY);
            case "snow":
              return pY(PY);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function ZY(BB) {
      return Object.freeze({
        ...sG.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...BB
      })
    }
    const NY = [{
        id: "default",
        settings: sG.d
      }, {
        id: "cross",
        settings: ZY({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: ZY({
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
        settings: ZY({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: ZY({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: ZY({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: ZY({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: ZY({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      RY = ["growOnClick", "forGuns"];
    var WY = GB(34765);

    function AY(BB) {
      let {
        label: OB,
        selected: GB,
        onClick: YB,
        className: DB,
        style: oB,
        children: jB
      } = BB;
      return (0, PB.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": GB,
        title: OB,
        "aria-label": OB,
        "data-pad-focusable": !0,
        className: QB()("CrosshairBackdropSwatch", DB, {
          Selected: GB
        }),
        style: oB,
        onClick: YB,
        children: jB
      })
    }

    function VY(BB) {
      let {
        backdrop: OB,
        onChange: GB,
        game: YB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": DB("crosshairSettings:background"),
        children: [YB && (0, PB.jsx)(AY, {
          label: DB("crosshairSettings:bg_game"),
          selected: YB.selected,
          onClick: YB.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, PB.jsx)(jB.b, {
            name: "cube"
          })
        }), zY.map((BB => (0, PB.jsx)(AY, {
          label: DB(`crosshairSettings:bg_${BB}`),
          selected: !(null !== YB && void 0 !== YB && YB.selected) && BB === OB,
          style: qY(BB),
          onClick: () => {
            GB(BB)
          }
        }, BB)))]
      })
    }

    function SY(BB) {
      let {
        settings: OB,
        touch: GB,
        backdrop: YB,
        onChange: DB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), yB = function(BB) {
        var OB;
        return null !== (OB = NY.find((OB => (0, sG.v)(OB.settings, BB, RY)))) && void 0 !== OB ? OB : null
      }(OB);
      return (0, PB.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": jB("crosshairSettings:presets"),
        children: NY.map((BB => {
          const oB = (null === yB || void 0 === yB ? void 0 : yB.id) === BB.id;
          return (0, PB.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": oB,
            "data-pad-focusable": !0,
            className: QB()("CrosshairPreset", {
              Selected: oB
            }),
            onClick: () => {
              DB(function(BB, OB) {
                return {
                  ...OB.settings,
                  growOnClick: BB.growOnClick,
                  forGuns: BB.forGuns
                }
              }(OB, BB))
            },
            children: [(0, PB.jsx)("div", {
              className: "CrosshairPresetStage",
              style: qY(YB),
              children: (0, PB.jsx)(WY.c, {
                settings: BB.settings,
                touch: GB,
                inPreview: !0
              })
            }), (0, PB.jsx)("div", {
              className: "CrosshairPresetName",
              children: jB(`crosshairSettings:preset_${BB.id}`)
            })]
          }, BB.id)
        }))
      })
    }
    var nY = GB(1733);

    function UY(BB, OB) {
      const [GB, DB] = (0, YB.useState)(!1), QB = () => {
        DB(!1)
      }, [oB, jB] = (0, YB.useState)(!1), yB = (0, YB.useRef)({
        growOnClick: BB.growOnClick,
        forGuns: BB.forGuns
      });
      (0, YB.useEffect)((() => {
        const OB = yB.current;
        yB.current = {
          growOnClick: BB.growOnClick,
          forGuns: BB.forGuns
        }, (BB.growOnClick && !OB.growOnClick || BB.forGuns && !OB.forGuns) && jB(!0)
      }), [BB.growOnClick, BB.forGuns]), (0, YB.useEffect)((() => {
        if (!oB) return;
        const BB = setTimeout((() => {
          jB(!1)
        }), 600);
        return () => {
          clearTimeout(BB)
        }
      }), [oB]);
      const JB = GB || oB;
      return {
        view: {
          pressed: JB,
          spread: JB && BB.forGuns && !BB.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: BB => {
            !BB.target.closest(OB) && (0, nY.c)(BB.currentTarget, BB.pointerId) && DB(!0)
          },
          onPointerUp: QB,
          onPointerCancel: QB,
          onLostPointerCapture: QB
        }
      }
    }

    function fY(BB) {
      let {
        settings: OB,
        touch: GB,
        backdrop: YB,
        className: DB,
        children: oB,
        label: jB
      } = BB;
      const yB = UY(OB, ".CrosshairStageControls");
      return (0, PB.jsxs)("div", {
        className: QB()("CrosshairStage", DB),
        style: qY(YB),
        ...yB.handlers,
        children: [(0, PB.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": jB,
          children: (0, PB.jsx)(WY.c, {
            settings: OB,
            touch: GB,
            inPreview: !0,
            ...yB.view
          })
        }), oB]
      })
    }
    const kY = "crosshairFullScreen";

    function dY(BB) {
      let {
        settings: OB,
        touch: GB,
        backdrop: DB,
        onBackdrop: yB,
        inGame: MB,
        onChange: zB,
        onClose: lB
      } = BB;
      const {
        t: pB
      } = (0, oB.H)(), qB = (0, YB.useRef)(null);
      (0, jY.v)("popup", qB, lB),
      function(BB) {
        const OB = (0, YB.useRef)(BB);
        OB.current = BB, (0, YB.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [kY]: !0
          }, "");
          let BB = !1;
          const GB = () => {
            BB = !0, OB.current()
          };
          return window.addEventListener("popstate", GB), () => {
            var OB;
            window.removeEventListener("popstate", GB), !BB && null !== (OB = window.history.state) && void 0 !== OB && OB[kY] && window.history.back()
          }
        }), [])
      }(lB);
      const ZB = (0, YB.useRef)(lB);
      ZB.current = lB, (0, YB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), ZB.current())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), []);
      const NB = UY(OB, ".CrosshairFullScreenPanel"),
        [RB, WB] = (0, YB.useState)(!0),
        AB = RB && MB;
      (0, YB.useEffect)((() => {
        if (AB) return UB.c.set({
          crosshairGameView: !0
        }), () => {
          UB.c.set({
            crosshairGameView: !1
          })
        }
      }), [AB]);
      const [VB, SB] = (0, YB.useState)(!0);
      return (0, oY.createPortal)((0, PB.jsxs)("div", {
        ref: qB,
        className: "CrosshairFullScreen",
        style: AB ? void 0 : qY(DB),
        ...NB.handlers,
        children: [(0, PB.jsx)(WY.c, {
          settings: OB,
          touch: GB,
          inEditor: !0,
          ...NB.view
        }), (0, PB.jsxs)("div", {
          className: QB()("CrosshairFullScreenPanel", {
            Collapsed: !VB
          }),
          children: [(0, PB.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, PB.jsx)(VY, {
              backdrop: DB,
              onChange: BB => {
                WB(!1), yB(BB)
              },
              game: MB ? {
                selected: AB,
                onSelect: () => {
                  WB(!0)
                }
              } : void 0
            }), (0, PB.jsx)(JB.Z, {
              className: "CrosshairPanelToggle",
              ariaLabel: pB(VB ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                SB(!VB)
              },
              children: (0, PB.jsx)(jB.b, {
                name: VB ? "caret-up" : "pen"
              })
            }), (0, PB.jsx)(JB.f, {
              className: "CrosshairFullScreenDone",
              onClick: lB,
              padDefaultFocus: !0,
              children: pB("crosshairSettings:done")
            })]
          }), VB && (0, PB.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, PB.jsx)(SY, {
              settings: OB,
              touch: GB,
              backdrop: DB,
              onChange: zB
            }), (0, PB.jsx)(QY, {
              settings: OB,
              onChange: zB
            })]
          })]
        })]
      }), document.body)
    }
    var KY = GB(2953),
      uY = GB(34773);

    function mY(BB) {
      let {
        settings: OB,
        onChange: GB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), yB = (0, uY.g)(OB), [MB, zB] = (0, KY.j)(), [lB, pB] = (0, YB.useState)(!1), qB = (0, YB.useRef)(null), [ZB, NB] = (0, KY.j)(), [RB, WB] = (0, YB.useState)(!1);
      return (0, PB.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, PB.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, PB.jsxs)(JB.Z, {
            className: QB()("CrosshairCopy", {
              ActiveSecondaryButton: MB
            }),
            onClick: () => {
              (0, KY.h)(yB, {
                useShareSheet: !1,
                onOutcome: BB => {
                  pB("failed" === BB), "copied" === BB && zB()
                }
              })
            },
            children: [(0, PB.jsx)(jB.b, {
              name: MB ? "check" : "copy"
            }), " ", DB(MB ? "general:copied" : "crosshairSettings:copy")]
          }), (0, PB.jsx)(VB.b, {
            className: "CrosshairPaste",
            domRef: qB,
            ariaLabel: DB("crosshairSettings:paste"),
            placeholderText: DB("crosshairSettings:paste"),
            onValueChange: BB => {
              const OB = (0, uY.d)(BB);
              WB(!OB && BB.trim().length >= uY.b), OB && (GB(OB), qB.current.value = "", NB())
            }
          })]
        }), lB && (0, PB.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: yB,
          "aria-label": DB("crosshairSettings:copy"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, PB.jsxs)("div", {
          "aria-live": "polite",
          children: [RB && (0, PB.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: DB("crosshairSettings:pasteInvalid")
          }), ZB && !RB && (0, PB.jsx)("div", {
            className: "CrosshairShareNote",
            children: DB("crosshairSettings:applied")
          })]
        })]
      })
    }
    var IY = GB(34777);
    let FY = "sky";

    function iY(BB) {
      let {
        showing: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), {
        isTouchScreen: DB,
        gameState: QB,
        clientEscMenuOptions: yB
      } = (0, UB.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), MB = (0, IY.f)(), [zB, lB] = (0, YB.useState)(FY), pB = BB => {
        FY = BB, lB(BB)
      }, [qB, ZB] = (0, YB.useState)(!1);
      return (0, YB.useEffect)((() => {
        OB || ZB(!1)
      }), [OB]), (0, PB.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, PB.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, PB.jsx)(fY, {
            className: "CrosshairPreviewStage",
            settings: MB,
            touch: DB,
            backdrop: zB,
            label: GB("crosshairSettings:preview"),
            children: (0, PB.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, PB.jsx)(VY, {
                backdrop: zB,
                onChange: pB
              }), (0, PB.jsxs)(JB.Z, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  ZB(!0)
                },
                children: [(0, PB.jsx)(jB.b, {
                  name: "expand"
                }), " ", GB("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, PB.jsx)("div", {
          className: "SettingBox",
          children: (0, PB.jsx)(SY, {
            settings: MB,
            touch: DB,
            backdrop: zB,
            onChange: IY.b
          })
        }), (0, PB.jsx)(mY, {
          settings: MB,
          onChange: IY.b
        }), DB && (0, PB.jsx)(vG.d, {
          note: (0, HG.h)(DB, yB.touchActionButtons) ? GB("crosshairSettings:touchNote") : void 0
        }), (0, PB.jsx)(QY, {
          settings: MB,
          onChange: IY.b
        }), qB && (0, PB.jsx)(dY, {
          settings: MB,
          touch: DB,
          backdrop: zB,
          onBackdrop: pB,
          inGame: "inGame" === QB,
          onChange: IY.b,
          onClose: () => {
            ZB(!1)
          }
        })]
      })
    }
    var LY = GB(9535),
      gY = GB(1443),
      rY = GB(5478),
      XY = GB(34785),
      wY = GB(4678),
      EY = GB(2076),
      cY = GB(738);
    const hY = (0, YB.memo)((function() {
      const {
        clientEscMenuOptions: BB
      } = (0, UB.o)(["clientEscMenuOptions"]), {
        recording: OB,
        clipping: GB,
        hasClipBuffer: DB
      } = (0, tO.g)("replayRecorder"), oB = (0, tO.f)("connectedGame", (BB => BB.replay)), jB = (0, wY.k)(), yB = !1 === (0, qB.g)("canRecordReplays");
      (0, YB.useEffect)((() => {
        RB.gameBridge.send("setRecorderPrefs", {
          clipping: BB.enableClipping,
          clipSeconds: BB.clipDurationSeconds
        })
      }), [BB.enableClipping, BB.clipDurationSeconds]);
      const MB = jB || oB,
        zB = !MB && !yB,
        lB = OB || zB,
        pB = zB,
        ZB = pB && GB && !OB;

      function NB() {
        lB && RB.gameBridge.send("toggleRecording", null)
      }
      return (0, PB.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, PB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PB.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: OB ? (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsxs)(JB.Q, {
                className: "ReplayViewerCategoryButton",
                onClick: NB,
                disabled: !lB,
                children: [(0, PB.jsx)("span", {
                  children: "Stop Recording"
                }), (0, PB.jsx)(EY.c, {
                  noaAction: "recordGame"
                })]
              }), (0, PB.jsx)(XY.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, PB.jsxs)(JB.f, {
              className: "ReplayViewerCategoryButton",
              onClick: NB,
              disabled: !lB,
              children: [(0, PB.jsx)("span", {
                children: "Start Recording"
              }), (0, PB.jsx)(EY.c, {
                noaAction: "recordGame"
              })]
            })
          }), yB && (0, PB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), MB && !OB && (0, PB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, PB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, PB.jsx)(nB.c, {
            label: "Enable clipping",
            checked: BB.enableClipping,
            disabled: !pB,
            onClick: function(BB) {
              pB && UB.c.setClientEscMenuOptions({
                enableClipping: BB
              })
            },
            className: QB()({
              SettingBoxDisabled: !pB
            })
          }), (0, PB.jsx)(nB.f, {
            name: "Clip duration (seconds)",
            min: cY.f,
            max: cY.e,
            step: cY.b,
            initValue: BB.clipDurationSeconds,
            onChange: function(BB) {
              UB.c.setClientEscMenuOptions({
                clipDurationSeconds: BB
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !pB || !BB.enableClipping
          })]
        }), (0, PB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PB.jsxs)(JB.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              ZB && RB.gameBridge.send("saveClip", null)
            },
            disabled: !ZB,
            children: [(0, PB.jsx)("span", {
              children: "Record clip"
            }), (0, PB.jsx)(EY.c, {
              noaAction: "recordClip"
            })]
          }), BB.enableClipping && !DB && pB && !OB && (0, PB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), OB && (0, PB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, PB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PB.jsxs)(JB.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, wY.j)(!0), UB.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: jB,
            children: [(0, PB.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, PB.jsx)(EY.c, {
              noaAction: "replayViewerOpen"
            })]
          }), jB && (0, PB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, PB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PB.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, PB.jsx)("iframe", {
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
    var aY = GB(1998);
    const eY = {
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
        icon: () => (0, PB.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, PB.jsx)("path", {
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
      zp: {
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

    function TY() {
      return Promise.all([GB.e(89), GB.e(149), GB.e(148), GB.e(144)]).then((() => GB(42069))).then((BB => ({
        default: BB.ShaderPackCategory
      })), (BB => (console.error("Failed to load the shader pack settings", BB), {
        default: bY
      })))
    }

    function bY() {
      const {
        t: BB
      } = (0, oB.H)();
      return (0, PB.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: BB("shaderPack:tabLoadFailed")
      })
    }
    var CY = GB(1434),
      HY = GB(186);
    const vY = /party\s*voice/i;
    let sY = !1;

    function xY(BB) {
      return Object.keys(BB).some((BB => BB.startsWith("__reactFiber$")))
    }
    const tY = ".MenuSideBarBody, .MenuSideBarSection";

    function BD(BB) {
      var OB;
      return (null !== (OB = BB.textContent) && void 0 !== OB ? OB : "").replace(/\s+/g, " ").trim()
    }

    function OD(BB) {
      for (const OB of function(BB) {
          const OB = new Set;
          for (const GB of BB.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) OB.add(GB);
          for (const GB of [BB, ...BB.querySelectorAll(tY)])
            for (const BB of GB.children) OB.add(BB);
          return [...OB]
        }(BB))
        if (!xY(OB) || !OB.matches(tY) && vY.test(BD(OB))) return OB;
      return null
    }

    function GD(BB) {
      return BB.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const YD = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function DD(BB) {
      const OB = document.createTreeWalker(BB, NodeFilter.SHOW_TEXT, {
        acceptNode: BB => {
          var OB, GB;
          return YD.has(null !== (OB = null === (GB = BB.parentElement) || void 0 === GB ? void 0 : GB.tagName.toUpperCase()) && void 0 !== OB ? OB : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let QB = OB.nextNode(); null !== QB; QB = OB.nextNode()) {
        var GB;
        const BB = (null !== (GB = QB.textContent) && void 0 !== GB ? GB : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== BB) {
          var YB, DB;
          return (null !== (YB = null === (DB = BB.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === DB ? void 0 : DB[0]) && void 0 !== YB ? YB : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function QD(BB, OB) {
      const GB = GD(OB).slice(0, 40) || "blank";
      return `${(GD(BB.toLowerCase())||"none").slice(0,Math.max(23,HY.X-1-GB.length))}:${GB}`.slice(0, HY.X)
    }
    const oD = (0, YB.lazy)((() => GB.e(302).then((() => GB(42060))).then((BB => ({
        default: BB.BloxdInformation
      }))))),
      jD = (0, YB.lazy)(TY);

    function yD(BB) {
      return BB ? "general" : "account"
    }
    const JD = new Map,
      MD = (0, YB.memo)((function(BB) {
        let {
          show: OB,
          setBeforeResumeCallback: GB
        } = BB;
        (0, ZB.e)();
        const {
          gameState: DB,
          openSettingsCategory: QB
        } = (0, UB.o)(["gameState", "openSettingsCategory"]), {
          userContext: yB
        } = (0, pB.d)(), {
          t: MB
        } = (0, oB.H)(), VB = (0, lB.c)(), SB = (0, qB.g)("minChunkAddDist"), nB = "inGame" === DB, [fB, KB] = (0, YB.useState)(yD(nB)), [uB, mB] = (0, YB.useState)(null), [IB, FB] = (0, YB.useState)([]), iB = (0, YB.useRef)(function() {
          const BB = new Date,
            OB = 6 * (BB.getMonth() + BB.getDate()) % mO.z.length;
          return [...mO.z, ...mO.z].slice(OB, OB + 6)
        }()), LB = (0, YB.useRef)(null), gB = (0, YB.useRef)(null), rB = (0, jG.i)(gY.g, (0, gY.b)()), XB = Object.keys(eY).filter((BB => {
          switch (BB) {
            case "replayViewer":
              return nB;
            case "developerTools":
              return yB.playerHasRank("developer") || !1;
            case "texturePack":
              return NB.featureFlags.settings.canChangeTexturePack;
            case "zp":
              return NB.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return NB.featureFlags.useSocialFeatures || null !== yB.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== dB.siteUsed;
            case "controller":
              return NB.featureFlags.useControllerSupport && (rB || "controller" === fB);
            default:
              return !0
          }
        }));
        (0, jG.f)("toggleFullCoordinateOverlay", (() => {
          const BB = XG("showCoordinates") && XG("showChunkCoordinates") && XG("showFPS");
          wG("showCoordinates", !BB), wG("showChunkCoordinates", !BB), wG("showFPS", !BB), VB()
        })), (0, jG.f)("updatedChunkLoadDist", (() => {
          VB()
        })), (0, YB.useEffect)((() => {
          if (mB(null), null === UB.c.get("openSettingsCategory")) {
            const BB = (0, CY.j)() ? JD.get(nB) : void 0;
            KB(BB && XB.includes(BB) ? BB : yD(nB))
          }
        }), [OB]), (0, YB.useEffect)((() => {
          if (OB && gB.current) return function(BB) {
            if (sY) return () => {};
            let OB = null,
              GB = null;
            const YB = () => {
                var BB;
                null !== GB && (clearTimeout(GB), GB = null), null === (BB = OB) || void 0 === BB || BB.disconnect(), OB = null
              },
              DB = () => {
                const OB = OD(BB);
                null !== OB && (sY = !0, YB(), (0, ZO.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: QD(window.location.hostname, DD(OB))
                }))
              };
            return GB = setTimeout((() => {
              GB = null, DB(), sY || (OB = new MutationObserver(DB), OB.observe(BB, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), YB
          }(gB.current)
        }), [OB]), (0, YB.useEffect)((() => {
          null !== QB && (KB(QB), JD.set(nB, QB), UB.c.set({
            openSettingsCategory: null
          }))
        }), [QB, nB]), (0, YB.useLayoutEffect)((() => {
          LB.current && (LB.current.scrollTop = 0)
        }), [fB, OB]), (0, YB.useEffect)((() => {
          "updateLog" === fB && (0, AB.c)().then(FB)
        }), [fB]), (0, YB.useEffect)((() => {
          if ((0, IG.Q)(SB)) return;
          const [BB, OB] = (0, bG.h)(), [GB, YB] = (0, fG.g)(SB), DB = (0, aY.f)(SB[0], BB, GB), QB = (0, aY.f)(SB[1], OB, YB);
          RB.gameBridge.send("setChunkAddDistance", {
            horizontal: DB,
            vertical: QB
          })
        }), [SB]);
        const wB = (0, YB.useCallback)((async () => {
          uB && (await uB(), mB(null))
        }), [uB]);

        function EB() {
          UB.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, YB.useEffect)((() => {
          GB((() => wB))
        }), [wB, GB]), (0, PB.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: OB ? {} : {
            display: "none"
          },
          children: [(0, PB.jsx)("div", {
            ref: gB,
            className: "MenuSideBar",
            children: (0, PB.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, PB.jsx)(zB, {
                items: XB.map((BB => {
                  const OB = eY[BB].icon;
                  return {
                    id: BB,
                    faIcon: "string" === typeof OB ? OB : void 0,
                    iconElement: "string" === typeof OB ? void 0 : (0, PB.jsx)(OB, {}),
                    title: MB(eY[BB].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: fB,
                onClick: BB => {
                  !async function(BB) {
                    await wB(), KB(BB), JD.set(nB, BB)
                  }(BB)
                }
              })
            })
          }), (0, PB.jsxs)("div", {
            ref: LB,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === fB && (0, PB.jsx)(CO, {
              showing: OB,
              inGame: nB
            }), "general" === fB && (0, PB.jsx)(DG, {
              inGame: nB
            }), "audio" === fB && (0, PB.jsx)(QG, {}), "notifications" === fB && (0, PB.jsx)(UG, {}), "graphics" === fB && (0, PB.jsx)(TG, {
              minChunkAddDist: null !== SB && void 0 !== SB ? SB : [2, 2],
              getValue: XG,
              onChange: wG,
              setApplySettingsCallback: mB
            }), "controls" === fB && (0, PB.jsx)(CG.f, {}), "crosshair" === fB && (0, PB.jsx)(iY, {
              showing: OB
            }), "controller" === fB && NB.featureFlags.useControllerSupport && (0, PB.jsx)(LY.d, {}), NB.featureFlags.settings.canChangeTexturePack && "texturePack" === fB && (0, PB.jsx)(rY.e, {
              setApplySettingsCallback: mB
            }), NB.featureFlags.settings.canUseShaderPacks && "zp" === fB && (0, PB.jsx)(YB.Suspense, {
              fallback: null,
              children: (0, PB.jsx)(jD, {
                setApplySettingsCallback: mB
              })
            }), "updateLog" === fB && (0, PB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PB.jsx)("div", {
                className: "UpdateLogsContainer",
                children: IB.map(((BB, OB) => (0, PB.jsx)(WB.d, {
                  updateLog: BB,
                  index: OB,
                  close: EB
                }, OB)))
              })
            }), "information" === fB && (0, PB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PB.jsx)(YB.Suspense, {
                fallback: null,
                children: (0, PB.jsx)(oD, {})
              })
            }), "alternativeDomains" === fB && (0, PB.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, PB.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: MB("settingsMenu:unblockedDomainsDescription")
              }), (0, PB.jsx)("div", {
                className: "AlternativeDomainsList",
                children: iB.current.map((BB => (0, PB.jsxs)(JB.f, {
                  onClick: () => {
                    window.open(`https://${BB}`)
                  },
                  children: [(0, PB.jsx)(jB.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", BB]
                }, BB)))
              })]
            }), "replayViewer" === fB && (0, PB.jsx)(hY, {}), "developerTools" === fB && (0, PB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PB.jsx)(kB, {
                setApplySettingsCallback: mB
              })
            }), null !== uB && (0, PB.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, PB.jsx)(JB.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: wB,
                children: MB("general:apply")
              })
            })]
          })]
        })
      }));
    var PD = GB(2895),
      zD = GB(1624),
      lD = GB(2496),
      pD = GB(4764);
    const qD = (0, YB.lazy)((() => Promise.resolve().then((() => GB(5082))).then((BB => (BB.needGameClientAfterPaint(), (0, PD.c)((BB => BB.loadCharacterCustomisationUI()), (BB => BB.CharacterCustomisationUI))))))),
      ZD = "openCustomisationTab";

    function ND(BB) {
      var OB, GB, DB;
      let {
        show: QB
      } = BB;
      const {
        userContext: oB
      } = (0, pB.d)(), jB = (0, aB.usePurchasesAllowed)(), yB = (0, YB.useRef)(null);
      var JB, MB;
      oB !== KB.NULL_USER_CONTEXT && (null === (OB = yB.current) || void 0 === OB ? void 0 : OB.whamm) !== oB.whamm && (yB.current = {
        whamm: oB.whamm,
        mountKey: (null !== (JB = null === (MB = yB.current) || void 0 === MB ? void 0 : MB.mountKey) && void 0 !== JB ? JB : -1) + 1
      });
      const [lB, qB] = (0, YB.useState)("characters");
      if ((0, jG.f)(ZD, qB), !QB) return null;
      const ZB = null !== (0, zD.h)(Date.now()),
        NB = oB.getOwnedCosmeticPacks(),
        RB = mO.Ub.filter((BB => "pet" === BB || "aura" === BB ? ZB || (0, lD.n)(BB).some((OB => OB !== `${BB}_none` && (0, lD.x)(BB, OB, NB))) : "cape" !== BB && "nameColour" !== BB || (0, wB.e)(oB.getPlayerRanks()) || jB)).map((BB => ({
          id: BB,
          faIcon: mO.G[BB],
          title: mO.I[BB],
          redDot: !1
        })));
      return (0, PB.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, PB.jsx)("div", {
          className: "MenuSideBar",
          children: (0, PB.jsx)(zB, {
            items: RB,
            selectedItemId: lB,
            onClick: BB => {
              qB(BB)
            }
          })
        }), (0, PB.jsx)("div", {
          className: "MenuBody",
          children: (0, PB.jsx)(YB.Suspense, {
            fallback: (0, PB.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, PB.jsx)(SB.b, {})
            }),
            children: (0, PB.jsx)(qD, {
              selectedTab: lB,
              noWebGlFallback: WD
            }, null !== (GB = null === (DB = yB.current) || void 0 === DB ? void 0 : DB.mountKey) && void 0 !== GB ? GB : 0)
          })
        })]
      })
    }

    function RD() {
      const {
        t: BB
      } = (0, oB.H)();
      return (0, PB.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: BB((0, pD.f)((0, pD.d)()))
      })
    }
    const WD = (0, PB.jsx)(RD, {});
    var AD = GB(1508),
      VD = GB(1510),
      SD = GB(34790),
      nD = GB(4946),
      UD = GB(3843),
      fD = GB(3922),
      kD = GB(34815),
      dD = GB(9448),
      KD = GB(34794),
      uD = GB(34807),
      mD = GB(2012),
      ID = GB(2e3),
      FD = GB(5392),
      iD = GB(1260),
      LD = GB(1217),
      gD = GB(1730),
      rD = GB(9513),
      XD = GB(2663),
      wD = GB(2666);

    function ED(BB) {
      return BB ? Object.keys(BB).sort(((OB, GB) => {
        var YB, DB, QB, oB;
        const jB = (null !== (YB = null === (DB = BB[GB]) || void 0 === DB ? void 0 : DB.sortPriority) && void 0 !== YB ? YB : 0) - (null !== (QB = null === (oB = BB[OB]) || void 0 === oB ? void 0 : oB.sortPriority) && void 0 !== QB ? QB : 0);
        return 0 !== jB ? jB : OB.localeCompare(GB)
      })) : []
    }
    const cD = [{
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

    function hD(BB) {
      for (const {
          threshold: OB,
          suffix: GB
        }
        of cD)
        if (BB >= OB) {
          const YB = BB / OB;
          return YB >= 100 ? `${Math.floor(YB)}${GB}` : YB >= 10 ? `${YB.toFixed(1).replace(/\.0$/,"")}${GB}` : `${YB.toFixed(2).replace(/\.?0+$/,"")}${GB}`
        } return String(BB)
    }
    var aD = GB(5512);
    const eD = {
        normal: "0.8em",
        big: "1em"
      },
      TD = (0, YB.memo)((function(BB) {
        let {
          item: OB,
          amount: GB = 0,
          size: YB = "normal",
          tier: DB = null
        } = BB;
        return (0, PB.jsx)("div", {
          className: QB()("SmpSlot", `SmpSlot-${YB}`),
          children: OB && (0, PB.jsx)(mD.c, {
            itemName: OB,
            amount: GB > 1 ? GB : 0,
            amountFontSize: eD[YB],
            enchantmentTier: DB
          })
        })
      }));

    function bD(BB) {
      let {
        amount: OB,
        exact: GB = !1,
        className: YB
      } = BB;
      return (0, PB.jsxs)("span", {
        className: QB()("SmpGold", YB),
        children: [(0, PB.jsx)("span", {
          className: "SmpCoin",
          children: (0, PB.jsx)(mD.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), GB ? OB.toLocaleString("en-US") : hD(OB)]
      })
    }

    function CD(BB) {
      let {
        count: OB = 5,
        grid: GB = !1
      } = BB;
      return (0, PB.jsx)("div", {
        className: GB ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: OB
        }, ((BB, OB) => (0, PB.jsxs)("div", {
          className: QB()(GB ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, PB.jsx)("div", {
            className: QB()("SmpSlot", GB ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, PB.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, PB.jsx)("b", {}), (0, PB.jsx)("small", {})]
          }), (0, PB.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, OB)))
      })
    }

    function HD(BB) {
      let {
        title: OB,
        children: GB
      } = BB;
      return (0, PB.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, PB.jsx)("b", {
          children: OB
        }), GB && (0, PB.jsx)("small", {
          children: GB
        })]
      })
    }

    function vD(BB) {
      let {
        entry: OB
      } = BB;
      return (0, PB.jsx)(HD, {
        title: (0, PB.jsx)(ID.b, {
          text: OB.item.customTitle
        }),
        children: (0, PB.jsx)(ID.b, {
          text: OB.item.description
        })
      })
    }

    function sD(BB) {
      return (0, PB.jsx)(aD.c, {
        ...BB,
        className: QB()("SmpChoice", BB.className),
        reselectable: !0
      })
    }

    function xD() {
      return (0, PB.jsx)("span", {
        className: "SmpLoader",
        children: (0, PB.jsx)(SB.b, {})
      })
    }

    function tD(BB) {
      let {
        value: OB,
        onChange: GB,
        min: DB = 1,
        max: QB,
        step: oB = 1,
        label: jB
      } = BB;
      const yB = (0, YB.useRef)(null),
        JB = (0, YB.useRef)(OB);
      JB.current = OB;
      const [MB, zB] = (0, YB.useState)(null), lB = BB => Math.max(DB, Math.min(QB, Math.floor(BB))), pB = BB => {
        const OB = JB.current,
          YB = "function" === typeof oB ? oB(OB, BB) : oB,
          DB = lB(OB + YB * BB);
        JB.current = DB, GB(DB)
      };
      (0, YB.useEffect)((() => {
        if (null === MB) return;
        let BB;
        const OB = () => {
            zB(null)
          },
          GB = setTimeout((() => {
            BB = setInterval((() => {
              pB(MB);
              const BB = JB.current;
              (MB > 0 ? BB >= QB : BB <= DB) && OB()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", OB), window.addEventListener("pointercancel", OB), window.addEventListener("blur", OB), () => {
          clearTimeout(GB), clearInterval(BB), window.removeEventListener("pointerup", OB), window.removeEventListener("pointercancel", OB), window.removeEventListener("blur", OB)
        }
      }), [MB]), (0, YB.useEffect)((() => {
        const BB = yB.current;
        BB && document.activeElement !== BB && BB.value !== String(OB) && (BB.value = String(OB))
      }), [OB]), (0, YB.useEffect)((() => {
        const BB = yB.current;
        if (!BB) return;
        const OB = () => {
          BB.value = String(JB.current)
        };
        return BB.addEventListener("blur", OB), () => {
          BB.removeEventListener("blur", OB)
        }
      }), []);
      const qB = BB => (0, PB.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${BB>0?"More":"Less"} ${jB}`,
        disabled: BB > 0 ? OB >= QB : OB <= DB,
        onPointerDown: OB => {
          0 === OB.button && (pB(BB), zB(BB))
        },
        onKeyDown: OB => {
          "Enter" !== OB.key && " " !== OB.key || pB(BB)
        },
        onContextMenu: BB => {
          BB.preventDefault()
        },
        children: BB > 0 ? "+" : "\u2212"
      });
      return (0, PB.jsxs)("div", {
        className: "SmpStepper",
        children: [qB(-1), (0, PB.jsx)(VB.b, {
          className: "SmpStepperInput",
          domRef: yB,
          defaultValue: String(OB),
          ariaLabel: jB,
          type: "text",
          blurOnEnter: !0,
          onValueChange: BB => {
            const OB = BB.replace(/[^\d]/g, "");
            yB.current && OB !== BB && (yB.current.value = OB), "" !== OB && GB(lB(Number(OB)))
          }
        }), qB(1)]
      })
    }

    function BQ(BB) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, BB))) - 1))
    }
    var OQ = GB(34813),
      GQ = GB(1238);
    const YQ = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    GQ.x, rB.Vc.length;
    new Map;
    var DQ = GB(3708);

    function QQ(BB, OB) {
      var GB;
      return OB && (null === (GB = BB[OB]) || void 0 === GB ? void 0 : GB.smp) || null
    }

    function oQ(BB, OB) {
      const GB = [];
      for (const DB of ED(BB)) {
        var YB;
        const QB = BB[DB];
        (null === (YB = QB.smp) || void 0 === YB ? void 0 : YB.kind) === OB && GB.push({
          key: DB,
          item: QB,
          meta: QB.smp
        })
      }
      return GB
    }

    function jQ(BB, OB) {
      var GB;
      return null !== (GB = oQ(BB, OB)[0]) && void 0 !== GB ? GB : null
    }
    const yQ = "50% 0% 50% 0%",
      JQ = [{
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

    function MQ(BB) {
      const OB = BB - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: GB,
          suffix: YB
        }
        of JQ)
        if (OB >= GB) return `${Math.floor(OB/GB)}${YB}`;
      return "<1s"
    }

    function PQ(BB) {
      const OB = BB.map(dD.f),
        GB = [];
      return OB.forEach(((BB, YB) => {
        const DB = function(BB) {
            const OB = BB.match(/\d+/);
            return OB ? Number(OB[0]) : 0
          }(BB),
          QB = YB === OB.length - 1;
        (QB || 1 === DB || 10 === DB || 100 === DB) && GB.push({
          label: BB,
          quantity: DB,
          isAll: QB
        })
      })), GB
    }
    let zQ = null;

    function lQ(BB, OB) {
      const GB = OB.trim().toLowerCase();
      if (!GB) return [];
      const YB = BB => {
          if (BB === GB) return 0;
          if (BB.startsWith(GB)) return 1;
          const OB = BB.indexOf(GB);
          return -1 === OB ? -1 : 2 + OB
        },
        DB = [];
      for (const jB of BB) {
        const BB = [YB(jB.lowerLabel), YB(jB.lowerName)].filter((BB => -1 !== BB));
        BB.length && DB.push({
          item: jB,
          rank: Math.min(...BB)
        })
      }
      if (DB.length > 0) return DB.sort(((BB, OB) => BB.rank - OB.rank)).map((BB => BB.item));
      const QB = [...GB],
        oB = BB => {
          let OB = 0;
          for (const GB of QB) {
            if (OB = BB.indexOf(GB, OB), -1 === OB) return !1;
            OB++
          }
          return !0
        };
      return BB.filter((BB => oB(BB.lowerLabel) || oB(BB.lowerName)))
    }

    function pQ(BB, OB) {
      var GB;
      return null !== (GB = null === BB || void 0 === BB ? void 0 : BB[OB]) && void 0 !== GB ? GB : OB
    }

    function qQ(BB, OB) {
      const GB = BB.userInput;
      return void 0 !== OB && "dropdown" === (null === GB || void 0 === GB ? void 0 : GB.type) && GB.dropdownOptions.map(dD.f).includes(OB) ? OB : function(BB) {
        const OB = BB.userInput;
        if ("dropdown" !== (null === OB || void 0 === OB ? void 0 : OB.type) || 0 === OB.dropdownOptions.length) return null;
        const GB = OB.dropdownOptions.map(dD.f);
        return OB.initialValue && GB.includes(OB.initialValue) ? OB.initialValue : GB[GB.length - 1]
      }(BB)
    }

    function ZQ(BB) {
      return void 0 === BB ? "" : JSON.stringify(BB)
    }
    const NQ = (0, YB.createContext)(null);

    function RQ() {
      return (0, YB.useContext)(NQ)
    }
    var WQ = GB(2987);
    const AQ = (0, YB.memo)((function(BB) {
        let {
          name: OB,
          label: GB,
          onPick: YB
        } = BB;
        return (0, PB.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: GB,
          onClick: () => {
            YB(OB)
          },
          children: [(0, PB.jsx)(TD, {
            item: OB,
            size: "big"
          }), (0, PB.jsx)("span", {
            children: GB
          })]
        })
      })),
      VQ = (0, YB.memo)((function(BB) {
        let {
          items: OB,
          query: GB,
          onPick: DB
        } = BB;
        const {
          t: QB
        } = (0, oB.H)(), [jB, yB] = (0, YB.useState)(new Set), JB = (0, YB.useMemo)((() => function(BB) {
          const OB = new Map;
          for (const GB of BB) {
            let BB = OB.get(GB.category);
            BB || (BB = [], OB.set(GB.category, BB)), BB.push(GB)
          }
          return [...YQ, "other"].filter((BB => OB.has(BB))).map((BB => ({
            category: BB,
            items: OB.get(BB)
          })))
        }(OB)), [OB]), MB = (0, YB.useMemo)((() => lQ(OB, GB).slice(0, 60)), [OB, GB]);
        return GB.trim() ? 0 === MB.length ? (0, PB.jsx)(HD, {
          title: QB("smpShop:noItemsFound", {
            query: GB.trim()
          }),
          children: QB("smpShop:tryShorterName")
        }) : (0, PB.jsx)(WQ.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: yQ,
          observerUpdateDeps: [GB],
          children: MB.map((BB => (0, PB.jsx)(AQ, {
            name: BB.name,
            label: BB.label,
            onPick: DB
          }, BB.name)))
        }) : (0, PB.jsx)(PB.Fragment, {
          children: JB.map((BB => {
            let {
              category: OB,
              items: GB
            } = BB;
            const YB = jB.has(OB) || GB.length <= 48,
              oB = YB ? GB : GB.slice(0, 48);
            return (0, PB.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, PB.jsxs)("h4", {
                children: [QB("other" === OB ? "smpShop:otherItems" : `creativeInventory:${OB}`), !YB && (0, PB.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    yB(new Set([...jB, OB]))
                  },
                  children: QB("smpShop:showAll", {
                    count: GB.length
                  })
                })]
              }), (0, PB.jsx)(WQ.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: yQ,
                observerUpdateDeps: [YB],
                children: oB.map((BB => (0, PB.jsx)(AQ, {
                  name: BB.name,
                  label: BB.label,
                  onPick: DB
                }, BB.name)))
              })]
            }, OB)
          }))
        })
      }));

    function SQ(BB, OB) {
      const {
        searched: GB,
        shown: DB,
        searchFor: QB,
        loading: oB
      } = function(BB, OB) {
        var GB;
        const DB = RQ(),
          [QB, oB] = (0, YB.useState)(void 0),
          jB = (0, YB.useRef)(void 0),
          yB = (0, YB.useRef)(0),
          JB = (0, YB.useRef)(void 0),
          MB = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.meta.item) && void 0 !== GB ? GB : null,
          PB = !!BB && DB.isPending(BB.key);
        (0, YB.useEffect)((() => {
          if (!BB || PB || !OB || void 0 === QB || QB === MB) return;
          const GB = QB === jB.current && DB.gaveUpAt(BB.key) > yB.current && JB.current !== QB;
          (QB !== jB.current || GB) && DB.act(BB.key, null !== QB && void 0 !== QB ? QB : "*", GB) && (GB && (JB.current = QB), jB.current = QB, yB.current = Date.now())
        }), [BB, PB, OB, QB, MB, DB]);
        const zB = (0, YB.useCallback)((BB => {
            jB.current = void 0, JB.current = void 0, oB(BB)
          }), []),
          lB = void 0 !== QB && QB !== MB && (PB || jB.current !== QB);
        return {
          searched: MB,
          shown: lB ? QB : MB,
          searchFor: zB,
          loading: lB || PB || null !== MB && !OB
        }
      }(BB, OB), jB = (0, YB.useMemo)((() => function() {
        var BB;
        let OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const DB = `${(0,DQ.k)()}\x1f${OB.join("\x1e")}\x1f${GB.join("\x1e")}\x1f${JSON.stringify(YB)}`;
        if ((null === (BB = zQ) || void 0 === BB ? void 0 : BB.key) === DB) return zQ.items;
        const QB = new Set(GB),
          oB = new Set,
          jB = [],
          yB = (BB, OB) => {
            var GB;
            if (!BB || oB.has(BB) || QB.has(BB)) return;
            oB.add(BB);
            const DB = null !== (GB = YB[BB]) && void 0 !== GB ? GB : BB;
            jB.push({
              name: BB,
              label: DB,
              lowerLabel: DB.toLowerCase(),
              lowerName: BB.toLowerCase(),
              category: OB
            })
          };
        for (const MB of (0, OQ.creativeItemIds)()) {
          var JB;
          (0, OQ.itemIsDisabled)(MB, !0, !0, !1) || (0, OQ.showOnlyInCreativeSearch)(MB) || yB((0, DQ.g)(MB), null !== (JB = (0, OQ.creativeCategoryOf)(MB)) && void 0 !== JB ? JB : "other")
        }
        for (const MB of OB) yB(MB, "other");
        return zQ = {
          key: DB,
          items: jB
        }, jB
      }(null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names)), [null === BB || void 0 === BB ? void 0 : BB.meta.extra, null === BB || void 0 === BB ? void 0 : BB.meta.excluded, null === BB || void 0 === BB ? void 0 : BB.meta.names]), [yB, JB] = (0, YB.useState)(""), [MB, PB] = (0, YB.useState)(0), [zB, lB] = (0, YB.useState)("recent"), pB = (0, YB.useCallback)((BB => {
        JB(""), PB((BB => BB + 1)), QB(BB)
      }), [QB]), qB = "browse" === zB || "" !== yB.trim();
      return {
        searched: GB,
        shown: DB,
        searchFor: QB,
        loading: oB,
        catalogue: jB,
        names: null === BB || void 0 === BB ? void 0 : BB.meta.names,
        query: yB,
        setQuery: JB,
        searchBoxKey: MB,
        pickItem: pB,
        setView: lB,
        browsing: qB
      }
    }

    function nQ(BB) {
      let {
        browser: OB,
        children: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)(), DB = RQ();
      return (0, PB.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, PB.jsx)("div", {
          className: "SmpSearch",
          children: (0, PB.jsx)(VB.b, {
            className: "SmpSearchInput",
            placeholderText: YB("smpShop:searchPlaceholder"),
            defaultValue: OB.query,
            onValueChange: BB => {
              OB.setQuery(BB), OB.searched && BB.trim() && OB.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const BB = lQ(OB.catalogue, OB.query)[0];
              BB ? OB.pickItem(BB.name) : OB.query.trim() && DB.notify(YB("smpShop:noItemsFound", {
                query: OB.query.trim()
              }))
            }
          }, OB.searchBoxKey)
        }), GB]
      })
    }

    function UQ(BB) {
      let {
        browser: OB,
        recentLabel: GB,
        children: YB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, PB.jsx)(sD, {
          options: [{
            value: "recent",
            label: GB
          }, {
            value: "browse",
            label: DB("smpShop:browseItems")
          }],
          value: OB.browsing ? "browse" : "recent",
          onChange: OB.setView,
          ariaLabel: DB("smpShop:show")
        }), !OB.browsing && YB]
      })
    }

    function fQ(BB) {
      let {
        item: OB,
        names: GB,
        summary: YB,
        onBack: DB,
        children: QB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, PB.jsx)(JB.c, {
          className: "SmpBackButton",
          onClick: DB,
          children: jB("general:back")
        }), (0, PB.jsx)(TD, {
          item: OB,
          size: "big"
        }), (0, PB.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, PB.jsx)("b", {
            children: pQ(GB, OB)
          }), YB && (0, PB.jsx)("small", {
            children: YB
          })]
        }), QB]
      })
    }

    function kQ(BB) {
      let {
        browser: OB,
        className: GB,
        action: YB,
        above: DB,
        list: oB,
        summary: jB,
        recentLabel: yB,
        listControls: JB,
        onBack: MB
      } = BB;
      return (0, PB.jsxs)("div", {
        className: QB()("SmpScreen", GB),
        children: [(0, PB.jsx)(nQ, {
          browser: OB,
          children: YB
        }), OB.shown && (0, PB.jsx)(fQ, {
          item: OB.shown,
          names: OB.names,
          summary: !OB.loading && jB,
          onBack: () => {
            null === MB || void 0 === MB || MB(), OB.searchFor(null)
          },
          children: JB
        }), DB, OB.shown ? oB : (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)(UQ, {
            browser: OB,
            recentLabel: yB,
            children: JB
          }), OB.browsing ? (0, PB.jsx)(VQ, {
            items: OB.catalogue,
            query: OB.query,
            onPick: OB.pickItem
          }) : oB]
        })]
      })
    }

    function dQ(BB, OB) {
      const GB = BB.map((BB => {
        let {
          meta: OB
        } = BB;
        return OB.pricePerItem
      }));
      return "min" === OB ? Math.min(...GB) : Math.max(...GB)
    }
    var KQ = GB(7122);
    const uQ = (0, YB.memo)((function(BB) {
      var OB;
      const {
        t: GB
      } = (0, oB.H)(), YB = null === BB.seller, DB = BB.quantity * BB.pricePerItem;
      return (0, PB.jsxs)("div", {
        className: BB.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, PB.jsx)(TD, {
          item: BB.item,
          amount: BB.quantity,
          size: BB.grid ? "big" : "normal",
          tier: BB.tier
        }), (0, PB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, PB.jsx)("b", {
            children: (0, PB.jsx)(ID.b, {
              text: null !== (OB = BB.title) && void 0 !== OB ? OB : `${BB.quantity}x ${BB.item}`
            })
          }), (0, PB.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, PB.jsx)("span", {
              children: YB ? GB("smpShop:you") : (0, PB.jsx)(ID.b, {
                text: [{
                  entityName: BB.seller
                }]
              })
            }), (0, PB.jsx)("span", {
              children: GB("smpShop:timeLeft", {
                time: MQ(BB.expiresAt)
              })
            })]
          })]
        }), (0, PB.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, PB.jsx)(bD, {
            amount: BB.pricePerItem
          }), (0, PB.jsx)("small", {
            children: GB("smpShop:each")
          })]
        }), (0, PB.jsx)(JB.f, {
          className: "SmpBuyButton",
          disabled: YB || !BB.canAfford && !BB.busy,
          loading: BB.busy,
          onClick: () => {
            BB.onBuy(BB.itemKey)
          },
          children: YB ? GB("smpShop:yours") : (0, PB.jsx)(bD, {
            amount: DB
          })
        })]
      })
    }));

    function mQ(BB) {
      let {
        view: OB,
        onChange: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return (0, PB.jsx)(aD.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: YB("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, PB.jsx)(jB.b, {
            name: "list"
          }),
          ariaLabel: YB("smpShop:listView")
        }, {
          value: "grid",
          label: (0, PB.jsx)(jB.b, {
            name: "grid-2"
          }),
          ariaLabel: YB("smpShop:gridView")
        }],
        value: OB,
        onChange: GB
      })
    }

    function IQ(BB) {
      let {
        entries: OB,
        view: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)(), DB = RQ(), QB = "grid" === GB;
      return (0, PB.jsxs)(PB.Fragment, {
        children: [!QB && (0, PB.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, PB.jsx)("span", {}), (0, PB.jsx)("span", {
            children: YB("smpShop:columnItem")
          }), (0, PB.jsx)("span", {
            children: YB("smpShop:columnPriceEach")
          }), (0, PB.jsx)("span", {
            children: YB("smpShop:columnTotal")
          })]
        }), (0, PB.jsx)(WQ.b, {
          lazyLoadedClassName: QB ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: yQ,
          observerUpdateDeps: [OB.length],
          children: OB.map((BB => {
            var OB, GB;
            let {
              key: YB,
              item: oB,
              meta: jB
            } = BB;
            const yB = jB.quantity * jB.pricePerItem;
            return (0, PB.jsx)(uQ, {
              itemKey: YB,
              item: jB.item,
              title: oB.customTitle,
              quantity: jB.quantity,
              pricePerItem: jB.pricePerItem,
              seller: jB.seller,
              expiresAt: jB.expiresAt,
              tier: null !== (OB = null === (GB = oB.enchant) || void 0 === GB ? void 0 : GB.tier) && void 0 !== OB ? OB : null,
              busy: DB.isPending(YB) || null !== jB.seller && !1 === oB.canBuy,
              canAfford: DB.canAfford(oB, yB),
              grid: QB,
              onBuy: DB.act
            }, YB)
          }))
        }, GB)]
      })
    }
    const FQ = [1, 10, 100],
      iQ = [1, 10, 100, 999];

    function LQ(BB) {
      var OB, GB, DB, yB, MB, zB, lB, pB, qB, ZB;
      const {
        t: NB
      } = (0, oB.H)(), RB = RQ(), {
        creator: WB,
        mode: AB
      } = BB, [SB, nB] = (0, YB.useState)(null !== (OB = null === WB || void 0 === WB ? void 0 : WB.meta.item) && void 0 !== OB ? OB : null), [UB, fB] = (0, YB.useState)(1), [kB, dB] = (0, YB.useState)(0), [KB, uB] = (0, YB.useState)(""), [mB, IB] = (0, YB.useState)(0), FB = (0, YB.useRef)(SB), iB = (0, YB.useRef)(!1), [LB, gB] = (0, YB.useState)(!1), rB = null !== (GB = null === WB || void 0 === WB ? void 0 : WB.meta.item) && void 0 !== GB ? GB : null, XB = null !== (DB = null === WB || void 0 === WB ? void 0 : WB.meta.owned) && void 0 !== DB ? DB : 0;
      (0, YB.useEffect)((() => {
        BB.searching || null === rB || rB === FB.current || (FB.current = rB, iB.current = !1, nB(rB), dB(0), fB("list" === AB ? Math.max(1, XB) : 1))
      }), [rB, BB.searching]);
      const wB = !!WB && !!SB && WB.meta.item === SB,
        EB = wB ? WB.meta.owned : null !== (yB = null === (MB = BB.inventory) || void 0 === MB || null === (zB = MB.find((BB => BB.item === SB))) || void 0 === zB ? void 0 : zB.quantity) && void 0 !== yB ? yB : 0,
        cB = "list" === AB ? Math.max(1, EB) : 45954,
        hB = null !== (lB = BB.prices[0]) && void 0 !== lB ? lB : null,
        aB = BB.prices.length ? Math.round(BB.prices.reduce(((BB, OB) => BB + OB), 0) / BB.prices.length) : null,
        eB = null === (pB = BB.inventory) || void 0 === pB || null === (qB = pB.find((BB => BB.item === SB))) || void 0 === qB ? void 0 : qB.sellPrice;
      (0, YB.useEffect)((() => {
        var BB;
        wB && (fB((BB => "list" === AB ? Math.min(Math.max(1, BB), Math.max(1, EB)) : BB)), iB.current || dB(null !== (BB = null !== hB && void 0 !== hB ? hB : aB) && void 0 !== BB ? BB : Math.max(1, null !== eB && void 0 !== eB ? eB : 1)))
      }), [wB, EB, SB, hB, aB]);
      const TB = BB => {
          iB.current = !0, dB(BB)
        },
        bB = OB => {
          var GB, YB, DB;
          FB.current = OB, iB.current = !1, gB(!1), uB(""), IB((BB => BB + 1)), nB(OB), dB(0), fB("list" === AB && null !== (GB = null === (YB = BB.inventory) || void 0 === YB || null === (DB = YB.find((BB => BB.item === OB))) || void 0 === DB ? void 0 : DB.quantity) && void 0 !== GB ? GB : 1), (null === WB || void 0 === WB ? void 0 : WB.meta.item) !== OB && BB.onPickItem(OB)
        },
        CB = UB * kB,
        HB = "list" === AB && null !== WB && void 0 !== WB && WB.meta.fee ? function(BB, OB) {
          const GB = Math.max(0, OB - BB.taxFreeAllowance);
          return Math.ceil(Math.round(GB * BB.rate * 1e6) / 1e6)
        }(WB.meta.fee, CB) : 0,
        vB = !!WB && RB.isPending(WB.key),
        sB = wB && !BB.searching && UB >= 1 && kB >= 1 && ("order" === AB || EB >= UB) && !vB,
        xB = !!SB && !wB && !BB.searching && UB >= 1 && kB >= 1,
        tB = () => {
          sB ? RB.act(WB.key, `${UB}|${kB}`) : xB && (BB.onPickItem(SB), gB(!0))
        };
      (0, YB.useEffect)((() => {
        LB && wB && !BB.searching && (gB(!1), tB())
      }), [LB, wB, BB.searching]);
      const BO = !!SB && !wB && (BB.searching || LB),
        OO = SB ? pQ(BB.names, SB) : "",
        GO = (0, YB.useMemo)((() => lQ(BB.catalogue, KB).slice(0, 8)), [BB.catalogue, KB]),
        YO = ("list" === AB ? FQ.filter((BB => BB < EB)) : iQ).map((BB => ({
          value: BB,
          label: String(BB)
        })));
      "list" === AB && EB > 0 && YO.push({
        value: EB,
        label: NB("smpShop:all", {
          count: EB
        })
      });
      const DO = [];
      return null !== hB && (hB > 1 && DO.push({
        value: hB - 1,
        label: NB("smpShop:undercut", {
          price: hD(hB - 1)
        })
      }), DO.push({
        value: hB,
        label: NB("smpShop:lowest", {
          price: hD(hB)
        })
      })), null !== aB && aB !== hB && DO.push({
        value: aB,
        label: NB("smpShop:average", {
          price: hD(aB)
        })
      }), (0, PB.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, PB.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, PB.jsx)("b", {
            children: NB("list" === AB ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, PB.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": NB("smpShop:close"),
            onClick: BB.onClose,
            children: (0, PB.jsx)(jB.b, {
              name: "xmark"
            })
          })]
        }), "list" === AB && (0, PB.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (ZB = BB.inventory) && void 0 !== ZB && ZB.length ? BB.inventory.map((BB => {
            let {
              item: OB,
              quantity: GB
            } = BB;
            return (0, PB.jsx)("button", {
              type: "button",
              title: OB,
              className: QB()("SmpPickerSlot", {
                SmpPickerSlotOn: OB === SB
              }),
              onClick: () => {
                bB(OB)
              },
              children: (0, PB.jsx)(TD, {
                item: OB,
                amount: GB
              })
            }, OB)
          })) : (0, PB.jsx)("span", {
            className: "SmpMuted",
            children: NB("smpShop:nothingToList")
          })
        }), ("list" === AB || !SB) && (0, PB.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, PB.jsx)(VB.b, {
            className: "SmpSearchInput",
            placeholderText: NB("list" === AB ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: KB,
            onValueChange: uB,
            blurOnEnter: !0,
            onEnter: () => {
              GO[0] && bB(GO[0].name)
            }
          }, mB), GO.length > 0 && (0, PB.jsx)("div", {
            className: "SmpPicker",
            children: GO.map((BB => {
              let {
                name: OB
              } = BB;
              return (0, PB.jsx)("button", {
                type: "button",
                title: OB,
                className: QB()("SmpPickerSlot", {
                  SmpPickerSlotOn: OB === SB
                }),
                onClick: () => {
                  bB(OB)
                },
                children: (0, PB.jsx)(TD, {
                  item: OB
                })
              }, OB)
            }))
          })]
        }), SB && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsxs)("div", {
            className: "SmpPickedName",
            children: [OO, BO && (0, PB.jsx)(xD, {})]
          }), (0, PB.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, PB.jsxs)("div", {
              className: "SmpField",
              children: [(0, PB.jsxs)("span", {
                children: [NB("smpShop:quantity"), "list" === AB && wB && (0, PB.jsx)("small", {
                  children: NB("smpShop:youHave", {
                    count: EB
                  })
                })]
              }), (0, PB.jsx)(tD, {
                value: UB,
                onChange: fB,
                max: cB,
                label: NB("smpShop:quantity")
              }), (0, PB.jsx)(sD, {
                options: YO,
                value: UB,
                onChange: fB,
                ariaLabel: NB("smpShop:quantity")
              })]
            }), (0, PB.jsxs)("div", {
              className: "SmpField",
              children: [(0, PB.jsx)("span", {
                children: NB("smpShop:pricePerItem")
              }), (0, PB.jsx)(tD, {
                value: Math.max(1, kB),
                onChange: TB,
                max: 9999999,
                step: BQ,
                label: NB("smpShop:pricePerItem")
              }), (0, PB.jsx)(sD, {
                options: DO,
                value: kB,
                onChange: TB,
                ariaLabel: NB("smpShop:pricePerItem")
              })]
            })]
          }), "list" === AB && (0, PB.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, PB.jsxs)("span", {
              children: [NB("smpShop:youGet"), " ", (0, PB.jsx)(bD, {
                amount: Math.max(0, CB - HB),
                exact: !0
              })]
            }), (0, PB.jsx)("small", {
              children: HB > 0 ? NB("smpShop:listingFee", {
                fee: HB.toLocaleString("en-US")
              }) : NB("smpShop:listingRules")
            })]
          }), (0, PB.jsx)(JB.v, {
            className: "SmpSubmit",
            disabled: !sB && !xB && !vB,
            loading: vB || BO || wB && BB.searching,
            onClick: tB,
            children: "list" === AB ? NB("smpShop:listButton", {
              count: UB,
              item: OO
            }) : (0, PB.jsxs)(PB.Fragment, {
              children: [NB("smpShop:orderButton", {
                count: UB,
                item: OO
              }), " ", kB >= 1 && (0, PB.jsx)(bD, {
                amount: CB
              })]
            })
          })]
        })]
      })
    }

    function gQ() {
      var BB;
      const {
        t: OB
      } = (0, oB.H)(), GB = RQ(), DB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, QB = jQ(DB, "search"), jB = jQ(DB, "creator"), yB = oQ(DB, "enchantedCreator"), MB = oQ(DB, "listing"), zB = jQ(DB, "empty"), lB = SQ(QB, MB.length > 0 || null !== zB), {
        searched: pB,
        shown: qB,
        loading: ZB
      } = lB, [NB, RB] = (0, YB.useState)(!1), [WB, AB] = function() {
        const [BB, OB] = (0, KQ.e)("smpMarketView", "list");
        return ["grid" === BB ? "grid" : "list", OB]
      }(), VB = "grid" === WB, SB = (0, YB.useMemo)((() => MB.filter((BB => {
        let {
          meta: OB
        } = BB;
        return null !== OB.seller && OB.item === pB
      })).map((BB => {
        let {
          meta: OB
        } = BB;
        return OB.pricePerItem
      })).sort(((BB, OB) => BB - OB))), [MB, pB]), nB = (0, YB.useMemo)((() => {
        const BB = new Set(lB.catalogue.map((BB => {
          let {
            name: OB
          } = BB;
          return OB
        })));
        return function(BB) {
          for (const OB in BB)
            if ("sell" === BB[OB].smp) return oQ(BB[OB].items, "sell").filter((BB => {
              let {
                item: OB
              } = BB;
              return !OB.enchant
            })).map((BB => {
              let {
                meta: OB
              } = BB;
              return {
                item: OB.item,
                quantity: OB.quantity,
                sellPrice: OB.pricePerItem
              }
            }));
          return []
        }(GB.shopInfo).filter((OB => {
          let {
            item: GB
          } = OB;
          return BB.has(GB)
        }))
      }), [GB.shopInfo, lB.catalogue]);
      return (0, PB.jsx)(kQ, {
        browser: lB,
        className: "SmpMarketTab",
        recentLabel: OB("smpShop:recentlyListed"),
        action: (0, PB.jsx)(JB.v, {
          className: "SmpSellButton",
          onClick: () => {
            RB((BB => !BB))
          },
          children: OB("smpShop:sell")
        }),
        above: NB && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)(LQ, {
            mode: "list",
            creator: jB,
            inventory: nB,
            catalogue: lB.catalogue,
            names: lB.names,
            searching: ZB,
            prices: SB,
            onPickItem: lB.searchFor,
            onClose: () => {
              RB(!1)
            }
          }), yB.length > 0 && (0, PB.jsx)(rQ, {
            entries: yB
          })]
        }),
        listControls: (0, PB.jsx)(mQ, {
          view: WB,
          onChange: AB
        }),
        summary: qB && (MB.length > 0 ? OB(1 === MB.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: MB.length,
          price: hD(dQ(MB, "min"))
        }) : OB("smpShop:noOneSelling", {
          item: pQ(lB.names, qB)
        })),
        list: ZB ? (0, PB.jsx)(CD, {
          grid: VB
        }) : MB.length > 0 ? (0, PB.jsx)(IQ, {
          entries: MB,
          view: WB
        }) : zB ? (0, PB.jsx)(vD, {
          entry: zB
        }) : (0, PB.jsx)(CD, {
          count: 3,
          grid: VB
        })
      })
    }

    function rQ(BB) {
      let {
        entries: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), DB = RQ(), [QB, jB] = (0, YB.useState)({});
      return (0, PB.jsx)("div", {
        className: "SmpList",
        children: OB.map((BB => {
          var OB, YB, oB;
          let {
            key: yB,
            item: MB,
            meta: zB
          } = BB;
          const lB = null !== (OB = QB[yB]) && void 0 !== OB ? OB : 1;
          return (0, PB.jsxs)("div", {
            className: "SmpRow",
            children: [(0, PB.jsx)(TD, {
              item: zB.item,
              amount: zB.quantity,
              tier: null !== (YB = null === (oB = MB.enchant) || void 0 === oB ? void 0 : oB.tier) && void 0 !== YB ? YB : null
            }), (0, PB.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, PB.jsx)("b", {
                children: (0, PB.jsx)(ID.b, {
                  text: MB.customTitle
                })
              }), (0, PB.jsx)("small", {
                children: GB("smpShop:enchantedListing")
              })]
            }), (0, PB.jsx)(tD, {
              value: lB,
              onChange: BB => {
                jB({
                  ...QB,
                  [yB]: BB
                })
              },
              max: 9999999,
              step: BQ,
              label: GB("smpShop:pricePerItem")
            }), (0, PB.jsxs)(JB.v, {
              loading: DB.isPending(yB),
              onClick: () => {
                DB.act(yB, String(lB))
              },
              children: [GB("smpShop:list"), " ", (0, PB.jsx)(bD, {
                amount: lB
              })]
            })]
          }, yB)
        }))
      })
    }
    const XQ = (0, YB.memo)((function(BB) {
      let {
        itemKey: OB,
        item: GB,
        quantity: YB,
        pricePerItem: DB,
        tier: oB,
        selected: jB,
        onSelect: yB
      } = BB;
      return (0, PB.jsxs)("button", {
        type: "button",
        className: QB()("SmpInventorySlot", {
          SmpInventorySlotOn: jB
        }),
        title: GB,
        onClick: () => {
          yB(OB)
        },
        children: [(0, PB.jsx)(TD, {
          item: GB,
          amount: YB,
          tier: oB
        }), (0, PB.jsx)(bD, {
          amount: DB
        })]
      })
    }));

    function wQ() {
      var BB;
      const {
        t: OB
      } = (0, oB.H)(), GB = RQ(), DB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, jB = oQ(DB, "sell"), yB = jQ(DB, "empty"), [JB, MB] = (0, YB.useState)(null), [zB, lB] = (0, YB.useState)({}), pB = jB.find((BB => {
        let {
          key: OB
        } = BB;
        return OB === JB
      }));
      return 0 === jB.length ? (0, PB.jsx)("div", {
        className: "SmpScreen",
        children: (0, PB.jsx)(HD, {
          title: yB ? (0, PB.jsx)(ID.b, {
            text: yB.item.customTitle
          }) : OB("smpShop:nothingToSell"),
          children: yB && (0, PB.jsx)(ID.b, {
            text: yB.item.description
          })
        })
      }) : (0, PB.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, PB.jsx)("div", {
          className: "SmpInventoryGrid",
          children: jB.map((BB => {
            var OB, GB;
            let {
              key: YB,
              item: DB,
              meta: QB
            } = BB;
            return (0, PB.jsx)(XQ, {
              itemKey: YB,
              item: QB.item,
              quantity: QB.quantity,
              pricePerItem: QB.pricePerItem,
              tier: null !== (OB = null === (GB = DB.enchant) || void 0 === GB ? void 0 : GB.tier) && void 0 !== OB ? OB : null,
              selected: YB === JB,
              onSelect: MB
            }, YB)
          }))
        }), (0, PB.jsx)("div", {
          className: QB()("SmpSellBar", {
            SmpSellBarIdle: !pB
          }),
          children: pB ? (0, PB.jsx)(EQ, {
            entry: pB,
            choice: qQ(pB.item, zB[pB.key]),
            onChoose: BB => {
              lB({
                ...zB,
                [pB.key]: BB
              })
            }
          }) : (0, PB.jsx)("span", {
            className: "SmpMuted",
            children: OB("smpShop:tapToSell")
          })
        })]
      })
    }

    function EQ(BB) {
      var OB, GB, YB, DB;
      let {
        entry: QB,
        choice: jB,
        onChoose: yB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = RQ(), {
        key: lB,
        item: pB,
        meta: qB
      } = QB, ZB = PQ("dropdown" === (null === (OB = pB.userInput) || void 0 === OB ? void 0 : OB.type) ? pB.userInput.dropdownOptions : []), NB = null === jB ? 0 : -(0, dD.b)(pB, jB);
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(0, PB.jsx)(TD, {
          item: qB.item,
          amount: qB.quantity,
          tier: null !== (GB = null === (YB = pB.enchant) || void 0 === YB ? void 0 : YB.tier) && void 0 !== GB ? GB : null
        }), (0, PB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, PB.jsx)("b", {
            children: (0, PB.jsx)(ID.b, {
              text: null !== (DB = pB.customTitle) && void 0 !== DB ? DB : qB.item
            })
          }), (0, PB.jsx)("small", {
            children: MB("smpShop:sellEach", {
              count: qB.quantity
            })
          })]
        }), (0, PB.jsx)(sD, {
          options: ZB.map((BB => {
            let {
              label: OB,
              quantity: GB,
              isAll: YB
            } = BB;
            return {
              value: OB,
              label: YB ? MB("smpShop:all", {
                count: GB
              }) : String(GB)
            }
          })),
          value: jB,
          onChange: yB,
          ariaLabel: MB("smpShop:quantity")
        }), (0, PB.jsxs)(JB.v, {
          loading: zB.isPending(lB),
          disabled: null === jB,
          onClick: () => {
            zB.act(lB, jB)
          },
          children: [MB("smpShop:sellButton"), " ", (0, PB.jsx)(bD, {
            amount: NB
          })]
        })]
      })
    }

    function cQ() {
      var BB;
      const {
        t: OB
      } = (0, oB.H)(), GB = RQ(), YB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, DB = oQ(YB, "collect"), QB = oQ(YB, "myListing"), jB = (BB, OB) => GB.isPending(BB) || !1 === OB.canBuy;
      return (0, PB.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, PB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: OB("smpShop:readyToCollect")
        }), DB.length > 0 ? (0, PB.jsx)("div", {
          className: "SmpList",
          children: DB.map((BB => {
            var YB, DB;
            let {
              key: QB,
              item: oB,
              meta: yB
            } = BB;
            return (0, PB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, PB.jsx)(TD, {
                item: "sold" === yB.type ? "Gold Coin" : yB.item,
                amount: "sold" === yB.type ? 0 : yB.quantity,
                tier: null !== (YB = null === (DB = oB.enchant) || void 0 === DB ? void 0 : DB.tier) && void 0 !== YB ? YB : null
              }), (0, PB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, PB.jsx)("b", {
                  children: (0, PB.jsx)(ID.b, {
                    text: oB.customTitle
                  })
                }), (0, PB.jsx)("small", {
                  children: (0, PB.jsx)(ID.b, {
                    text: oB.description
                  })
                })]
              }), (0, PB.jsx)(JB.q, {
                loading: jB(QB, oB),
                onClick: () => {
                  GB.act(QB)
                },
                children: OB("smpShop:collect")
              })]
            }, QB)
          }))
        }) : (0, PB.jsx)(HD, {
          title: OB("smpShop:nothingToCollect"),
          children: OB("smpShop:nothingToCollectHint")
        }), (0, PB.jsx)("h3", {
          className: "SmpSectionTitle",
          children: OB("smpShop:activeListings", {
            count: QB.length
          })
        }), QB.length > 0 ? (0, PB.jsx)("div", {
          className: "SmpList",
          children: QB.map((BB => {
            var YB, DB;
            let {
              key: QB,
              item: oB,
              meta: yB
            } = BB;
            return (0, PB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, PB.jsx)(TD, {
                item: yB.item,
                amount: yB.quantity,
                tier: null !== (YB = null === (DB = oB.enchant) || void 0 === DB ? void 0 : DB.tier) && void 0 !== YB ? YB : null
              }), (0, PB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, PB.jsx)("b", {
                  children: (0, PB.jsx)(ID.b, {
                    text: oB.customTitle
                  })
                }), (0, PB.jsx)("small", {
                  children: OB("smpShop:timeLeft", {
                    time: MQ(yB.expiresAt)
                  })
                })]
              }), (0, PB.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, PB.jsx)(bD, {
                  amount: yB.pricePerItem
                }), (0, PB.jsx)("small", {
                  children: OB("smpShop:each")
                })]
              }), (0, PB.jsx)(JB.Q, {
                loading: jB(QB, oB),
                onClick: () => {
                  GB.act(QB)
                },
                children: OB("smpShop:cancel")
              })]
            }, QB)
          }))
        }) : (0, PB.jsx)(HD, {
          title: OB("smpShop:noActiveListings"),
          children: OB("smpShop:noActiveListingsHint")
        })]
      })
    }

    function hQ(BB) {
      let {
        done: OB,
        of: GB
      } = BB;
      return (0, PB.jsx)("span", {
        className: "SmpProgress",
        children: (0, PB.jsx)("i", {
          style: {
            width: `${Math.min(100,OB/Math.max(1,GB)*100)}%`
          }
        })
      })
    }

    function aQ(BB) {
      var OB, GB, YB;
      let {
        entry: DB,
        choice: QB,
        onChoose: jB
      } = BB;
      const {
        t: yB
      } = (0, oB.H)(), MB = RQ(), {
        key: zB,
        item: lB,
        meta: pB
      } = DB, qB = "dropdown" === (null === (OB = lB.userInput) || void 0 === OB ? void 0 : OB.type) ? lB.userInput.dropdownOptions : [], ZB = !0 === pB.processing, NB = null !== pB.creator && (pB.owned > 0 || ZB), RB = NB && pB.owned > 0 ? PQ(qB) : [], WB = null === QB ? 0 : null !== (GB = null === (YB = RB.find((BB => BB.label === QB))) || void 0 === YB ? void 0 : YB.quantity) && void 0 !== GB ? GB : 0;
      return (0, PB.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, PB.jsx)(TD, {
          item: pB.item
        }), (0, PB.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, PB.jsx)("b", {
            children: (0, PB.jsx)(ID.b, {
              text: lB.customTitle
            })
          }), (0, PB.jsxs)("small", {
            children: [(0, PB.jsx)(bD, {
              amount: pB.pricePerItem
            }), " ", yB("smpShop:each"), " \xb7", " ", null === pB.creator ? yB("smpShop:you") : (0, PB.jsx)(ID.b, {
              text: [{
                entityName: pB.creator
              }]
            })]
          }), (0, PB.jsx)(hQ, {
            done: pB.delivered,
            of: pB.wanted
          })]
        }), NB ? (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)(sD, {
            options: RB.map((BB => {
              let {
                label: OB,
                quantity: GB,
                isAll: YB
              } = BB;
              return {
                value: OB,
                label: YB ? yB("smpShop:max", {
                  count: GB
                }) : String(GB)
              }
            })),
            value: QB,
            onChange: jB,
            ariaLabel: yB("smpShop:quantity")
          }), (0, PB.jsxs)(JB.v, {
            loading: MB.isPending(zB) || ZB,
            disabled: null === QB,
            onClick: () => {
              MB.act(zB, QB)
            },
            children: [yB("smpShop:deliver"), " ", (0, PB.jsx)(bD, {
              amount: WB * pB.pricePerItem
            })]
          })]
        }) : (0, PB.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === pB.creator ? yB("smpShop:yourOrder") : yB("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function eQ() {
      var BB;
      const {
        t: OB
      } = (0, oB.H)(), GB = RQ(), DB = null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, QB = jQ(DB, "search"), jB = jQ(DB, "creator"), yB = oQ(DB, "order"), MB = jQ(DB, "empty"), zB = SQ(QB, yB.length > 0 || null !== MB), [lB, pB] = (0, YB.useState)(!1), [qB, ZB] = (0, YB.useState)({});
      return (0, PB.jsx)(kQ, {
        browser: zB,
        recentLabel: OB("smpShop:recentOrders"),
        action: (0, PB.jsx)(JB.v, {
          onClick: () => {
            pB((BB => !BB))
          },
          children: OB("smpShop:createOrder")
        }),
        above: lB && (0, PB.jsx)(LQ, {
          mode: "order",
          creator: jB,
          catalogue: zB.catalogue,
          names: zB.names,
          searching: zB.loading,
          prices: [],
          onPickItem: zB.searchFor,
          onClose: () => {
            pB(!1)
          }
        }),
        onBack: () => {
          pB(!1)
        },
        summary: yB.length > 0 && OB(1 === yB.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: yB.length,
          price: hD(dQ(yB, "max"))
        }),
        list: zB.loading ? (0, PB.jsx)(CD, {}) : yB.length > 0 ? (0, PB.jsx)(WQ.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: yQ,
          observerUpdateDeps: [yB.length],
          children: yB.map((BB => (0, PB.jsx)(aQ, {
            entry: BB,
            choice: qQ(BB.item, qB[BB.key]),
            onChoose: OB => {
              ZB({
                ...qB,
                [BB.key]: OB
              })
            }
          }, BB.key)))
        }) : MB ? (0, PB.jsx)(vD, {
          entry: MB
        }) : (0, PB.jsx)(CD, {
          count: 3
        })
      })
    }

    function TQ() {
      var BB;
      const {
        t: OB
      } = (0, oB.H)(), GB = RQ(), YB = oQ(null === (BB = GB.shopInfo[GB.categoryKey]) || void 0 === BB ? void 0 : BB.items, "myOrder");
      return 0 === YB.length ? (0, PB.jsx)("div", {
        className: "SmpScreen",
        children: (0, PB.jsx)(HD, {
          title: OB("smpShop:noOrders"),
          children: OB("smpShop:noOrdersHint")
        })
      }) : (0, PB.jsx)("div", {
        className: "SmpScreen",
        children: (0, PB.jsx)("div", {
          className: "SmpList",
          children: YB.map((BB => {
            let {
              key: YB,
              item: DB,
              meta: QB
            } = BB;
            const oB = GB.isPending(YB) || !1 === DB.canBuy;
            return (0, PB.jsxs)("div", {
              className: "SmpRow",
              children: [(0, PB.jsx)(TD, {
                item: QB.item,
                amount: QB.collectable
              }), (0, PB.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, PB.jsx)("b", {
                  children: (0, PB.jsx)(ID.b, {
                    text: DB.customTitle
                  })
                }), (0, PB.jsxs)("small", {
                  children: [(0, PB.jsx)(bD, {
                    amount: QB.pricePerItem
                  }), " ", OB("smpShop:each"), QB.collectable > 0 && ` \xb7 ${OB("smpShop:readyCount",{count:QB.collectable})}`]
                }), (0, PB.jsx)(hQ, {
                  done: QB.delivered,
                  of: QB.wanted
                })]
              }), QB.collectable > 0 ? (0, PB.jsx)(JB.q, {
                loading: oB,
                onClick: () => {
                  GB.act(YB)
                },
                children: OB("smpShop:collectCount", {
                  count: QB.collectable
                })
              }) : (0, PB.jsx)(JB.Q, {
                loading: oB,
                onClick: () => {
                  GB.act(YB)
                },
                children: OB("smpShop:cancel")
              })]
            }, YB)
          }))
        })
      })
    }
    const bQ = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      CQ = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function HQ(BB, OB) {
      let GB = !1;
      const YB = {};
      for (const DB in BB) OB(DB, BB[DB]) ? YB[DB] = BB[DB] : GB = !0;
      return GB ? YB : BB
    }

    function vQ(BB) {
      var OB, GB, DB, yB;
      const {
        show: JB,
        shopInfo: MB,
        selectedCategoryKey: zB
      } = BB, {
        t: lB
      } = (0, oB.H)(), pB = null !== zB && void 0 !== zB ? zB : "", qB = QQ(MB, pB), ZB = null === (OB = MB[pB]) || void 0 === OB ? void 0 : OB.items, NB = null !== qB, [RB, WB] = (0, YB.useState)({}), [AB, VB] = (0, YB.useState)([]), [SB, nB] = (0, YB.useState)(!1), [UB, fB] = (0, YB.useState)(null), [, kB] = (0, YB.useState)(0), dB = (0, YB.useRef)(0), KB = (0, YB.useRef)({}), uB = (0, YB.useRef)({
        items: ZB,
        pending: RB,
        shopInfo: MB,
        active: NB,
        canAfford: BB.canAfford,
        buy: BB.buy
      });
      uB.current = {
        items: ZB,
        pending: RB,
        shopInfo: MB,
        active: NB,
        canAfford: BB.canAfford,
        buy: BB.buy
      };
      const mB = (0, YB.useCallback)((BB => {
        dB.current++;
        const OB = dB.current;
        VB((GB => [{
          id: OB,
          text: BB
        }, ...GB].slice(0, 8))), fB(OB)
      }), []);
      (0, YB.useEffect)((() => {
        if (null === UB) return;
        const BB = setTimeout((() => {
          fB(null)
        }), 3e3);
        return () => {
          clearTimeout(BB)
        }
      }), [UB]), (0, YB.useEffect)((() => {
        const OB = BB.message;
        if (!OB) return;
        const {
          shopInfo: GB,
          active: YB,
          items: DB
        } = uB.current, QB = null !== OB.categoryKey ? null !== QQ(GB, OB.categoryKey) : YB;
        (QB || YB) && mB(OB.text), QB && WB((BB => HQ(BB, (BB => {
          var OB, GB;
          return !bQ.has(null === DB || void 0 === DB || null === (OB = DB[BB]) || void 0 === OB || null === (GB = OB.smp) || void 0 === GB ? void 0 : GB.kind)
        }))))
      }), [BB.message, mB]), (0, YB.useEffect)((() => {
        WB((BB => HQ(BB, ((BB, OB) => ZQ(null === ZB || void 0 === ZB ? void 0 : ZB[BB]) === OB.snapshot))))
      }), [MB, ZB]);
      const IB = Object.keys(RB).length > 0;
      (0, YB.useEffect)((() => {
        if (!IB) return;
        const BB = setInterval((() => {
          kB((BB => BB + 1));
          const BB = Date.now(),
            {
              pending: OB,
              items: GB
            } = uB.current,
            YB = Object.keys(OB).filter((GB => BB - OB[GB].at >= 12e3));
          if (0 === YB.length) return;
          const DB = YB.some((BB => {
            var YB, DB;
            return "search" !== (null === GB || void 0 === GB || null === (YB = GB[BB]) || void 0 === YB || null === (DB = YB.smp) || void 0 === DB ? void 0 : DB.kind) || OB[BB].resend
          }));
          for (const QB of YB) KB.current[QB] = BB;
          WB((BB => HQ(BB, (BB => !YB.includes(BB))))), DB && mB(lB("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(BB)
        }
      }), [IB]), (0, YB.useEffect)((() => {
        WB({})
      }), [pB]), (0, YB.useEffect)((() => {
        JB || nB(!1)
      }), [JB]);
      const FB = (0, YB.useCallback)((function(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: YB,
            pending: DB,
            canAfford: QB,
            buy: oB
          } = uB.current, jB = null === YB || void 0 === YB ? void 0 : YB[BB];
          if (!jB || BB in DB || !1 === jB.canBuy) return !1;
          if (!QB(jB, (0, dD.b)(jB, OB))) return !1;
          oB(BB, jB, OB);
          const yB = {
            snapshot: ZQ(jB),
            at: Date.now(),
            resend: GB
          };
          return uB.current.pending = {
            ...uB.current.pending,
            [BB]: yB
          }, WB((OB => ({
            ...OB,
            [BB]: yB
          }))), !0
        }), []),
        iB = (0, YB.useMemo)((() => ({
          shopInfo: MB,
          categoryKey: pB,
          canAfford: BB.canAfford,
          isPending: BB => BB in RB,
          gaveUpAt: BB => {
            var OB;
            return null !== (OB = KB.current[BB]) && void 0 !== OB ? OB : 0
          },
          act: FB,
          notify: mB
        })), [MB, pB, BB.canAfford, RB, FB, mB]),
        LB = Math.min(...Object.values(RB).map((BB => BB.at))),
        gB = IB && Date.now() - LB > 1500,
        rB = AB.length > 1,
        XB = null !== (GB = null === (DB = MB[pB]) || void 0 === DB ? void 0 : DB.customTitle) && void 0 !== GB ? GB : pB,
        wB = null === (yB = MB[pB]) || void 0 === yB ? void 0 : yB.description;
      let EB = null;
      return "market" === qB ? EB = (0, PB.jsx)(gQ, {}) : "sell" === qB ? EB = (0, PB.jsx)(wQ, {}) : "collect" === qB ? EB = (0, PB.jsx)(cQ, {}) : "orders" === qB ? EB = (0, PB.jsx)(eQ, {}) : "myOrders" === qB && (EB = (0, PB.jsx)(TQ, {})), (0, PB.jsx)(NQ.Provider, {
        value: iB,
        children: (0, PB.jsx)("div", {
          className: "SmpShopHost",
          hidden: !NB,
          children: (0, PB.jsxs)("div", {
            className: "SmpShop",
            children: [(0, PB.jsx)("header", {
              className: "SmpHeader",
              children: (0, PB.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, PB.jsxs)("h2", {
                  children: [qB && (0, PB.jsx)(jB.b, {
                    name: CQ[qB]
                  }), lB(XB)]
                }), wB && (0, PB.jsx)("p", {
                  children: (0, PB.jsx)(ID.b, {
                    text: wB
                  })
                })]
              })
            }), (0, PB.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: JB && EB
            }), (0, PB.jsxs)("button", {
              type: "button",
              className: QB()("SmpStatus", {
                SmpStatusWaiting: IB,
                SmpStatusFresh: !IB && null !== UB,
                SmpStatusHasHistory: rB
              }),
              "aria-live": "polite",
              "aria-expanded": rB ? SB : void 0,
              onClick: () => {
                rB && nB((BB => !BB))
              },
              children: [IB ? (0, PB.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, PB.jsx)(xD, {}), lB(gB ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : AB[0] ? (0, PB.jsx)("span", {
                className: "SmpStatusText",
                children: (0, PB.jsx)(ID.b, {
                  text: AB[0].text
                })
              }, AB[0].id) : (0, PB.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: lB("smpShop:ready")
              }), rB && (0, PB.jsx)("small", {
                children: lB("smpShop:recentMessages", {
                  count: AB.length
                })
              })]
            }), SB && rB && (0, PB.jsx)("div", {
              className: "SmpStatusHistory",
              children: AB.map((BB => (0, PB.jsx)("div", {
                children: (0, PB.jsx)(ID.b, {
                  text: BB.text
                })
              }, BB.id)))
            })]
          })
        })
      })
    }
    class sQ {
      constructor(BB) {
        this.info = BB
      }
      static fromShopInfo(BB) {
        const OB = {};
        for (const GB in BB) {
          const YB = !0 === BB[GB].redDot && !0 !== BB[GB].forceRemoveRedDot;
          OB[GB] = {
            redDot: YB,
            items: {}
          };
          for (const DB in BB[GB].items) {
            const YB = BB[GB].items[DB],
              QB = !0 === YB.redDot && !0 !== YB.forceRemoveRedDot;
            OB[GB].items[DB] = {
              redDot: QB
            }
          }
        }
        return new sQ(OB)
      }
      anyCategoryHasRedDots() {
        for (const BB in this.info)
          if (this.categoryHasRedDot(BB)) return !0;
        return !1
      }
      doesCategoryExist(BB) {
        return !(0, IG.Q)(this.info[BB])
      }
      categoryHasRedDot(BB) {
        return !0 === this.info[BB].redDot
      }
      updateCategoryRedDot(BB, OB) {
        this.info[BB].redDot = OB
      }
      doesItemExist(BB, OB) {
        return this.doesCategoryExist(BB) && !(0, IG.Q)(this.info[BB].items[OB])
      }
      itemHasRedDot(BB, OB) {
        return !0 === this.info[BB].items[OB].redDot
      }
      updateItemRedDot(BB, OB, GB) {
        this.info[BB].items[OB].redDot = GB
      }
      shallowCopy() {
        return new sQ(this.info)
      }
    }

    function xQ(BB, OB) {
      return `${BB}\x1f${OB}`
    }

    function tQ(BB, OB) {
      return !(0, IG.Q)(OB) && !(0, IG.Q)(BB) && OB in BB
    }
    const Bo = (0, YB.memo)((function(BB) {
      var OB, GB;
      let {
        show: DB
      } = BB;
      const oB = (0, tO.f)("players", oo),
        jB = (0, tO.f)("players", jo),
        MB = (0, XD.b)(),
        [lB, pB] = (0, YB.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: sQ.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        ZB = (0, YB.useRef)(""),
        NB = (0, YB.useRef)(null),
        WB = (0, YB.useRef)(null),
        AB = (0, YB.useRef)(0),
        VB = (0, YB.useRef)(void 0),
        SB = (0, YB.useRef)(null),
        nB = (0, YB.useRef)(lB),
        fB = lB.redDotInfo.anyCategoryHasRedDots(),
        [kB, KB] = (0, YB.useState)(null),
        uB = (0, YB.useRef)(!1);
      let mB = !1,
        IB = 0,
        FB = 0;
      if (lB.currencyAmounts) {
        for (const BB in lB.currencyAmounts) {
          var iB;
          const OB = lB.currencyAmounts[BB];
          OB.hidden || (IB++, (null === (iB = OB.subtext) || void 0 === iB ? void 0 : iB.length) > 0 && FB++)
        }
        mB = IB + FB > 4
      }(0, YB.useEffect)((() => {
        FG.o.tM("showShopIconRedDot", fB, !0)
      }), [fB]), (0, YB.useEffect)((() => {
        RB.gameBridge.send("setShopOpen", DB), DB || (clearTimeout(VB.current), pB((BB => BB.awaitingPurchase ? {
          ...BB,
          awaitingPurchase: !1
        } : BB)))
      }), [DB]), (0, YB.useEffect)((() => () => {
        RB.gameBridge.send("setShopOpen", !1), clearTimeout(VB.current)
      }), []), (0, YB.useEffect)((() => {
        nB.current = lB
      }), [lB]), (0, YB.useEffect)((() => {
        if (null === kB) return;
        return (0, gD.c)("pointerdown", (BB => {
          const OB = BB.target;
          null !== OB && void 0 !== OB && OB.closest(".ShopItem") || KB(null)
        }))
      }), [kB]);
      const LB = BB => {
          pB((OB => ({
            ...OB,
            ...BB
          })))
        },
        gB = BB => {
          var OB;
          clearTimeout(null === (OB = lB.onBoughtInfo) || void 0 === OB ? void 0 : OB.timeout);
          const GB = setTimeout((() => {
            LB({
              onBoughtInfo: null
            })
          }), 3e3);
          ZB.current = BB, LB({
            onBoughtInfo: {
              text: BB,
              timeout: GB,
              categoryKey: NB.current
            }
          })
        },
        XB = BB => {
          const {
            shopInfo: OB,
            userInputsPerItem: GB,
            redDotInfo: YB,
            autoSelectCategory: QB
          } = function(BB, OB, GB, YB, DB, QB) {
            if ((0, IG.Q)(BB) || 0 === Object.keys(BB).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: sQ.fromShopInfo({}),
              autoSelectCategory: null
            };
            const oB = dB.siteUsedData[dB.siteUsed].adConfig.showRewardedAds,
              jB = {};
            let yB = null;
            for (const ZB in BB) {
              const OB = BB[ZB],
                GB = {};
              let YB = !1;
              for (const BB in OB.items) {
                const DB = OB.items[BB];
                (0, dD.h)(DB, oB) && (GB[BB] = DB, YB = !0)
              }
              YB && (jB[ZB] = {
                ...OB,
                items: GB
              }, !0 === OB.autoSelectCategory && (yB = ZB))
            }
            const JB = {},
              MB = (BB, OB, YB, oB) => {
                var jB, yB;
                const MB = xQ(BB, OB),
                  PB = null !== (jB = GB[MB]) && void 0 !== jB ? jB : GB[OB];
                if (null !== (yB = oB.userInput) && void 0 !== yB && yB.type) switch (oB.userInput.type) {
                  case "dropdown": {
                    var zB;
                    const BB = !PB || !oB.userInput.dropdownOptions.some((BB => (0, dD.f)(BB) === PB)),
                      OB = oB.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === YB || void 0 === YB || null === (zB = YB.userInput) || void 0 === zB ? void 0 : zB.type) || JSON.stringify(YB.userInput.dropdownOptions) !== JSON.stringify(oB.userInput.dropdownOptions)),
                      GB = oB.userInput,
                      DB = !(0, IG.Q)(GB.initialValue) && GB.dropdownOptions.some((BB => (0, dD.f)(BB) === GB.initialValue));
                    var lB;
                    return void(BB || OB ? DB ? JB[MB] = null !== (lB = oB.userInput.initialValue) && void 0 !== lB ? lB : null : oB.userInput.dropdownOptions.length > 0 ? JB[MB] = (0, dD.f)(oB.userInput.dropdownOptions[0]) : JB[MB] = null : JB[MB] = PB)
                  }
                  case "text":
                  case "number":
                    var pB, qB, ZB;
                    return void((null === YB || void 0 === YB ? void 0 : YB.userInput) !== oB.userInput ? JB[MB] = null !== (pB = null !== (qB = oB.userInput.initialValue) && void 0 !== qB ? qB : PB) && void 0 !== pB ? pB : "" : JB[MB] = null !== (ZB = null !== PB && void 0 !== PB ? PB : oB.userInput.initialValue) && void 0 !== ZB ? ZB : "");
                  case "color":
                    var NB, RB, WB;
                    return void((null === YB || void 0 === YB ? void 0 : YB.userInput) !== oB.userInput ? JB[MB] = null !== (NB = null !== (RB = oB.userInput.initialValue) && void 0 !== RB ? RB : PB) && void 0 !== NB ? NB : "#000000" : JB[MB] = null !== (WB = null !== PB && void 0 !== PB ? PB : oB.userInput.initialValue) && void 0 !== WB ? WB : "#000000");
                  case "player": {
                    const BB = (0, dD.g)(DB, QB, oB.userInput);
                    return void(PB && BB.includes(PB) ? JB[MB] = PB : JB[MB] = BB.length > 0 ? BB[0] : null)
                  }
                }
              };
            for (const ZB in jB)
              for (const BB in jB[ZB].items) {
                var PB;
                const GB = jB[ZB].items[BB];
                MB(ZB, BB, null === (PB = OB[ZB]) || void 0 === PB ? void 0 : PB.items[BB], GB)
              }
            const zB = sQ.fromShopInfo(jB);
            for (const ZB in jB) {
              var lB;
              if (YB.doesCategoryExist(ZB)) {
                (null === (lB = OB[ZB]) || void 0 === lB ? void 0 : lB.redDot) === jB[ZB].redDot && zB.updateCategoryRedDot(ZB, YB.categoryHasRedDot(ZB));
                for (const BB in jB[ZB].items) {
                  var pB, qB;
                  YB.doesItemExist(ZB, BB) && (null === (pB = OB[ZB]) || void 0 === pB || null === (qB = pB.items[BB]) || void 0 === qB ? void 0 : qB.redDot) === jB[ZB].items[BB].redDot && zB.updateItemRedDot(ZB, BB, YB.itemHasRedDot(ZB, BB))
                }
              }
            }
            return {
              shopInfo: jB,
              userInputsPerItem: JB,
              redDotInfo: zB,
              autoSelectCategory: yB
            }
          }(BB, lB.shopInfo, lB.userInputsPerItem, lB.redDotInfo, oB, jB), yB = {
            shopInfo: OB,
            userInputsPerItem: GB,
            redDotInfo: YB
          };
          if (null === QB || DB)
            if (OB[lB.selectedCategoryKey]) yB.selectedCategoryKey = lB.selectedCategoryKey;
            else {
              const BB = ED(OB);
              yB.selectedCategoryKey = BB.length > 0 ? BB[0] : null
            }
          else yB.selectedCategoryKey = QB;
          return 0 === Object.keys(OB).length && DB && UB.c.set({
            openEverythingMenuName: null
          }), yB
        },
        wB = (BB, OB, GB) => {
          const YB = lB.selectedCategoryKey,
            DB = xQ(YB, BB),
            QB = null !== GB && void 0 !== GB ? GB : lB.userInputsPerItem[DB],
            oB = {
              categoryKey: YB,
              itemKey: BB,
              userInput: QB
            };
          if (NB.current = YB, OB.isRewardedAd) {
            if (Date.now() - AB.current < 5e3) return;
            (0, uO.V)((() => {
              var GB, YB, QB;
              console.log("bought rewarded ad");
              const jB = oB.categoryKey ? null === (GB = nB.current.shopInfo[oB.categoryKey]) || void 0 === GB ? void 0 : GB.items[BB] : null;
              if (!jB || !jB.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (YB = OB.userInput) || void 0 === YB ? void 0 : YB.type) === (null === jB || void 0 === jB || null === (QB = jB.userInput) || void 0 === QB ? void 0 : QB.type) ? (oB.userInput = nB.current.userInputsPerItem[DB], RB.gameBridge.send("buyShopItem", oB), OB.onBoughtMessage && gB(OB.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), AB.current = Date.now()
          } else {
            RB.gameBridge.send("buyShopItem", oB), LB({
              awaitingPurchase: !0
            }), clearTimeout(VB.current), VB.current = setTimeout((() => {
              SB.current = null, LB({
                awaitingPurchase: !1
              })
            }), 1e3);
            const BB = (0, dD.b)(OB, QB);
            if (SB.current = null, !isNaN(BB) && tQ(lB.currencyAmounts, OB.currency)) {
              0 !== BB && (SB.current = {
                currency: OB.currency,
                amountBefore: lB.currencyAmounts[OB.currency].amount
              });
              const GB = {
                ...lB.currencyAmounts
              };
              GB[OB.currency].amount -= BB, LB({
                currencyAmounts: GB
              })
            }
            OB.onBoughtMessage && gB(OB.onBoughtMessage)
          }
        },
        EB = (BB, OB) => {
          if (null === OB || !BB.shopInfo[OB]) return BB;
          let GB = BB.redDotInfo;
          return GB.categoryHasRedDot(OB) && (GB.updateCategoryRedDot(OB, !1), GB = GB.shallowCopy()), {
            ...BB,
            selectedCategoryKey: OB,
            redDotInfo: GB
          }
        },
        cB = BB => {
          pB((OB => EB(OB, BB)))
        };
      (0, jG.f)(rD.k, (() => {
        pB((BB => {
          const OB = (0, rD.o)(ED(BB.shopInfo), BB.selectedCategoryKey, (OB => (0, rD.j)(BB.shopInfo[OB].items)));
          return OB === BB.selectedCategoryKey ? BB : EB(BB, OB)
        }))
      })), (0, jG.f)("showShopFromServer", (BB => {
        let {
          toggle: OB,
          kO: GB
        } = BB;
        GB && cB(GB), 0 === Object.keys(lB.shopInfo).length || OB && DB ? UB.c.set({
          openEverythingMenuName: null
        }) : UB.c.set({
          openEverythingMenuName: mO.p.SHOP
        })
      })), (0, jG.f)("closeShopOnDamaged", (() => {
        DB && UB.c.set({
          openEverythingMenuName: null
        })
      })), (0, jG.f)("overShopInfo", (BB => {
        gB(BB)
      })), (0, qB.f)("currencyAmounts", (BB => {
        var OB;
        const GB = SB.current;
        GB && (null === BB || void 0 === BB || null === (OB = BB[GB.currency]) || void 0 === OB ? void 0 : OB.amount) === GB.amountBefore ? LB({
          currencyAmounts: BB
        }) : (SB.current = null, LB({
          currencyAmounts: BB,
          awaitingPurchase: !1
        }))
      })), (0, qB.f)("shopInfo", (BB => {
        LB({
          ...XB(BB),
          awaitingPurchase: !1
        })
      }));
      const hB = (0, YB.useRef)({
        playerIds: oB,
        localPlayerId: jB
      });
      (0, YB.useEffect)((() => {
        hB.current.playerIds === oB && hB.current.localPlayerId === jB || (hB.current = {
          playerIds: oB,
          localPlayerId: jB
        }, pB((BB => {
          const OB = XB(BB.shopInfo);
          return {
            ...BB,
            ...OB
          }
        })))
      }), [oB, jB]);
      const aB = lB.selectedCategoryKey,
        eB = (BB, OB) => {
          var GB, YB;
          return (isNaN(OB) || (0, IG.Q)(BB.currency) || tQ(lB.currencyAmounts, BB.currency) && OB <= lB.currencyAmounts[BB.currency].amount) && (null === (GB = BB.canBuy) || void 0 === GB || GB) && !(null !== (YB = BB.hidden) && void 0 !== YB && YB)
        },
        TB = (BB, OB) => {
          var GB, YB, DB;
          const oB = xQ(aB, BB),
            jB = lB.shopInfo[aB].items[BB],
            MB = lB.userInputsPerItem[oB],
            zB = (0, dD.b)(jB, MB),
            pB = eB(jB, zB),
            qB = jB.enchant,
            ZB = qB ? (0, rB.zb)(null !== (GB = jB.customTitle) && void 0 !== GB ? GB : BB, {
              colour: rB.ub[qB.tier]
            }) : null !== (YB = jB.customTitle) && void 0 !== YB ? YB : BB,
            NB = OB => {
              const GB = null !== OB && void 0 !== OB ? OB : MB,
                YB = void 0 !== OB ? (0, dD.b)(jB, OB) : zB;
              eB(jB, YB) && null !== GB && wB(BB, jB, OB);
              let DB = lB.redDotInfo;
              DB.itemHasRedDot(aB, BB) && (DB.updateItemRedDot(aB, BB, !1), DB = DB.shallowCopy()), LB({
                redDotInfo: DB
              })
            };
          return (0, PB.jsxs)("div", {
            className: QB()("ShopItem", {
              ShopItemNoInput: !jB.userInput,
              ShopItemNoInputCanBuy: !jB.userInput && pB,
              ShopItemNoInputSelected: jB.isSelected,
              ShopItemEnchant: !!qB
            }),
            "data-pad-focusable": !jB.userInput || void 0,
            "data-pad-unavailable": !jB.userInput && !pB || void 0,
            "data-pad-repeat": null !== (DB = (0, rD.d)(jB)) && void 0 !== DB ? DB : void 0,
            "data-pad-repeat-wait": lB.awaitingPurchase || void 0,
            onClick: () => {
              if (qB && uB.current) {
                if (kB !== oB) return void KB(oB);
                KB(null)
              }
              jB.userInput || NB()
            },
            onPointerDown: BB => {
              qB && (uB.current = (0, uD.t)(BB))
            },
            onPointerEnter: BB => {
              qB && !(0, uD.t)(BB) && KB(oB)
            },
            onPointerLeave: BB => {
              qB && !(0, uD.t)(BB) && KB((BB => BB === oB ? null : BB))
            },
            style: {
              zIndex: Object.keys(lB.shopInfo[aB].items).length - OB
            },
            children: [lB.redDotInfo.itemHasRedDot(aB, BB) && (0, PB.jsx)(yB.c, {
              top: "-6px",
              right: "-6px"
            }), jB.badge && (0, PB.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, PB.jsx)("div", {
                className: QB()("ShopBadgeMain", jB.badge.type),
                children: (0, PB.jsx)(ID.b, {
                  text: jB.badge.text
                })
              })
            }), (0, PB.jsx)("div", {
              className: "ShopItemLeft",
              children: jB.image && (0, PB.jsx)(Oo, {
                item: jB,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, PB.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, PB.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, PB.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, PB.jsx)(ID.b, {
                    text: ZB
                  })
                }), (0, PB.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, PB.jsx)(ID.b, {
                    text: jB.description
                  })
                })]
              }), jB.userInput && (0, PB.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: BB => {
                  BB.stopPropagation()
                },
                children: [(0, PB.jsx)(Do, {
                  item: jB,
                  currInput: MB,
                  updateInput: OB => {
                    ((BB, OB, GB) => {
                      const YB = xQ(BB, OB),
                        DB = {
                          ...lB.userInputsPerItem
                        };
                      DB[YB] = GB, LB({
                        userInputsPerItem: DB
                      })
                    })(aB, BB, OB)
                  },
                  onSubmit: BB => {
                    NB(BB)
                  }
                }), ("dropdown" !== jB.userInput.type || !jB.userInput.autoSubmit) && (0, PB.jsx)(JB.f, {
                  className: "ItemCostButton",
                  disabled: !pB && null !== MB,
                  onClick: () => {
                    NB()
                  },
                  children: (0, PB.jsx)(Yo, {
                    item: jB,
                    cost: zB,
                    currencyAmounts: lB.currencyAmounts
                  })
                })]
              })]
            }), !jB.userInput && (0, PB.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, PB.jsx)(Yo, {
                item: jB,
                cost: zB,
                currencyAmounts: lB.currencyAmounts
              })
            }), qB && kB === oB && (0, PB.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, PB.jsx)(ID.b, {
                text: ZB
              }), (0, PB.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, PB.jsx)(ID.b, {
                  text: (0, KD.d)("", qB.enchantments, qB.enchantmentData)
                })
              })]
            })]
          }, oB)
        },
        bB = function(BB) {
          for (const OB in BB)
            if (BB[OB].smp) return !0;
          return !1
        }(lB.shopInfo),
        CB = QQ(lB.shopInfo, aB);
      return (0, PB.jsx)(UD.b, {
        className: "Menu ShopBody",
        show: DB,
        children: 0 !== Object.keys(lB.shopInfo).length && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, PB.jsx)(zB, {
              items: ED(lB.shopInfo).map((BB => {
                var OB;
                return {
                  id: BB,
                  title: null !== (OB = lB.shopInfo[BB].customTitle) && void 0 !== OB ? OB : BB,
                  redDot: lB.redDotInfo.categoryHasRedDot(BB)
                }
              })),
              link: MB ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, wD.f)({
                    page: (0, wD.c)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: aB,
              onClick: cB,
              padStartsOnTab: (0, rD.g)(aB)
            }), (0, PB.jsx)("div", {
              className: "MenuSideBarFooter",
              children: lB.currencyAmounts && Object.keys(lB.currencyAmounts).map((BB => {
                var OB;
                const GB = lB.currencyAmounts[BB];
                return GB.hidden ? null : (0, PB.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (mB ? "SmallText" : ""),
                  children: [(0, PB.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, PB.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: GB.iconColour
                      },
                      children: (0, PB.jsx)(yo, {
                        iconName: GB.icon
                      })
                    }), "\xa0", (0, kD.d)(GB.amount, 6)]
                  }), (null === (OB = GB.subtext) || void 0 === OB ? void 0 : OB.length) > 0 && (0, PB.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, PB.jsx)(ID.b, {
                      text: GB.subtext
                    })
                  })]
                }, BB)
              }))
            })]
          }), (0, PB.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [bB && (0, PB.jsx)(vQ, {
              show: DB,
              shopInfo: lB.shopInfo,
              selectedCategoryKey: aB,
              buy: (BB, OB, GB) => {
                wB(BB, OB, GB)
              },
              canAfford: eB,
              message: lB.onBoughtInfo
            }), null === CB && (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsx)("div", {
                className: QB()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== lB.onBoughtInfo
                }),
                children: (0, PB.jsx)(ID.b, {
                  text: ZB.current
                })
              }), (0, PB.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, PB.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (OB = lB.shopInfo[aB]) || void 0 === OB ? void 0 : OB.description) && (0, PB.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, PB.jsx)(ID.b, {
                      text: lB.shopInfo[aB].description
                    })
                  }), DB && (0, PB.jsx)("div", {
                    className: "ShopItems",
                    ref: WB,
                    "data-pad-initial-area": !0,
                    children: ED(null === (GB = lB.shopInfo[aB]) || void 0 === GB ? void 0 : GB.items).map(((BB, OB) => TB(BB, OB)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Oo(BB) {
      let {
        item: OB,
        minWidth: GB,
        minHeight: YB
      } = BB;
      const {
        image: DB,
        schematicId: QB,
        imageColour: oB
      } = OB;
      if (QB) return (0, PB.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${GB}rem`,
          height: `${YB}rem`
        },
        children: (0, PB.jsx)(FD.d, {
          game: {
            schematicId: QB
          }
        })
      });
      var yB, JB;
      if ((0, mD.d)(DB)) return (0, PB.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${GB}rem`,
          height: "0",
          minHeight: `${YB}rem`
        },
        children: (0, PB.jsx)(mD.c, {
          itemName: DB,
          amount: null !== (yB = OB.amount) && void 0 !== yB ? yB : 0,
          amountFontSize: YB / 4 + "rem",
          enchantmentTier: null === (JB = OB.enchant) || void 0 === JB ? void 0 : JB.tier
        })
      });
      const MB = DB.slice(-4);
      return ".jpg" === MB || ".png" === MB ? (0, PB.jsx)(Go, {
        image: DB,
        minWidth: GB
      }) : (0, PB.jsx)(jB.b, {
        name: DB,
        className: "SelectedItemImage",
        style: {
          color: oB
        }
      })
    }

    function Go(BB) {
      let {
        image: OB,
        minWidth: GB
      } = BB;
      const {
        gameNameWithVariation: YB
      } = (0, tO.g)("connectedGame"), DB = OB.endsWith(".jpg");
      return (0, PB.jsx)("img", {
        className: QB()({
          ShopPixelImage: !DB
        }),
        style: {
          width: `${DB?1.6*GB:GB}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,rB.ac)(YB)}/${OB}`,
        alt: OB,
        draggable: !1
      })
    }

    function Yo(BB) {
      let {
        item: OB,
        cost: GB,
        currencyAmounts: YB
      } = BB;
      const DB = !isNaN(GB) && 0 !== GB && tQ(YB, OB.currency);
      let QB = null;
      return OB.buyButtonText ? QB = OB.buyButtonText : DB ? (QB = GB, OB.sell && (QB = -1 * GB), QB = QB.toString()) : 0 === GB ? QB = "Free" : OB.isRewardedAd && (QB = "Watch ad"), (0, IG.Q)(QB) || " " === QB ? null : (0, PB.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [DB && (0, PB.jsx)("div", {
          style: {
            color: YB[OB.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, PB.jsx)(yo, {
            iconName: YB[OB.currency].icon
          })
        }), (0, PB.jsx)("div", {
          className: "BuyItemCost",
          children: (0, PB.jsx)(ID.b, {
            text: QB
          })
        })]
      })
    }

    function Do(BB) {
      let {
        item: OB,
        currInput: GB,
        updateInput: DB,
        onSubmit: QB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), yB = (0, YB.useRef)(null);
      if ((0, YB.useEffect)((() => {
          const BB = yB.current;
          BB && BB.value !== GB && document.activeElement !== BB && (BB.value = null !== GB && void 0 !== GB ? GB : "")
        }), [GB]), !OB.userInput) return null;
      let JB = OB.userInput;
      if (NB.featureFlags.sanitizeShopInput && "text" === OB.userInput.type && (JB = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === JB.type || "number" === JB.type) {
        var MB, zB;
        console.assert(void 0 !== GB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(OB)}`);
        const BB = "text" === JB.type && JB.wordCharsOnly;
        return (0, PB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, PB.jsx)(VB.b, {
            className: "ShopItemUserInputText",
            placeholderText: jB(JB.placeholderText),
            defaultValue: GB,
            domRef: yB,
            onValueChange: (OB, GB) => {
              !0 === BB && (OB = (0, LD.nb)(OB)), yB.current.value = OB, DB(OB)
            },
            onEnter: QB,
            type: JB.type
          }, (null !== (MB = JB.initialValue) && void 0 !== MB ? MB : "") + (null !== (zB = JB.placeholderText) && void 0 !== zB ? zB : ""))
        })
      }
      if ("dropdown" === JB.type) {
        console.assert(void 0 !== GB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(OB)}`);
        const BB = JB.autoSubmit;
        return (0, PB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, PB.jsx)(sO.c, {
            options: JB.dropdownOptions.map((BB => (0, dD.f)(BB))),
            value: GB,
            onChange: OB => {
              let {
                value: GB
              } = OB;
              DB(GB), BB && QB(GB)
            }
          })
        })
      }
      return "player" === JB.type ? (0, PB.jsx)(Qo, {
        userInput: JB,
        currInput: GB,
        updateInput: DB
      }) : "color" === JB.type ? (0, PB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, PB.jsx)("input", {
          type: "color",
          value: GB,
          onChange: BB => {
            DB(BB.target.value)
          }
        })
      }) : null
    }

    function Qo(BB) {
      let {
        userInput: OB,
        currInput: GB,
        updateInput: YB
      } = BB;
      const DB = (0, tO.g)("players"),
        QB = (0, tO.g)("hiddenPlayerNames"),
        oB = (0, dD.g)(DB.ids, DB.localId, OB);
      return (0, PB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, PB.jsx)(sO.c, {
          options: oB.map((BB => {
            const {
              name: OB
            } = DB.byId[BB];
            return {
              value: BB,
              label: null === OB ? "" : (0, iD.g)(OB, QB)
            }
          })),
          value: GB,
          onChange: BB => {
            let {
              value: OB
            } = BB;
            YB(OB)
          }
        })
      })
    }

    function oo(BB) {
      let {
        ids: OB
      } = BB;
      return OB
    }

    function jo(BB) {
      let {
        localId: OB
      } = BB;
      return OB
    }

    function yo(BB) {
      let {
        iconName: OB
      } = BB;
      return RB.gameBridge.lookup("isItemName", OB) ? (0, PB.jsx)(mD.c, {
        itemName: OB,
        amount: 1
      }) : (0, PB.jsx)(jB.b, {
        name: OB,
        className: "2x"
      })
    }
    var Jo = GB(1699);
    const Mo = (0, GB(1450).h)((BB => BB.PadLobbyShortcuts)),
      Po = (0, YB.lazy)((() => Promise.resolve().then((() => GB(5082))).then((BB => ({
        default: BB.Lobbyleaderboard
      }))))),
      zo = (0, YB.lazy)((() => GB.e(246).then((() => GB(42073))).then((BB => ({
        default: BB.LobbyManageView
      })))));

    function po(BB) {
      let {
        show: OB
      } = BB;
      return OB ? (0, PB.jsx)(qo, {}) : null
    }

    function qo() {
      const BB = (0, XD.b)();
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(0, PB.jsx)(Mo, {}), (0, PB.jsxs)(YB.Suspense, {
          fallback: (0, PB.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, PB.jsx)(SB.b, {})
          }),
          children: [BB && (0, PB.jsx)(zo, {
            leaderboard: (0, PB.jsx)(Po, {})
          }), !BB && (0, PB.jsx)(Po, {})]
        })]
      })
    }
    var Zo = GB(1606),
      No = GB(2524),
      Ro = GB(1822),
      Wo = GB(3435),
      Ao = GB(2965),
      Vo = GB(1535),
      So = GB(1493),
      no = GB(3370),
      Uo = GB(3380),
      fo = GB(2505);
    const ko = "storeRecentGiftRecipients",
      Ko = new Map;

    function uo() {
      try {
        const BB = ZG.g.getItem(ko);
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.name) && BB.name.length > 0)).map((BB => ({
          name: BB.name,
          cosmetics: BB.cosmetics && "object" === typeof BB.cosmetics ? BB.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function mo(BB, OB) {
      var GB;
      const [DB, QB] = (0, YB.useState)(""), [oB, jB] = (0, YB.useState)("search"), [yB, JB] = (0, YB.useState)(null), [MB, PB] = (0, YB.useState)(null), zB = (0, YB.useRef)(null), lB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => () => {
        zB.current && clearTimeout(zB.current)
      }), []), (0, YB.useEffect)((() => {
        OB || ZB()
      }), [OB]);
      const pB = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.name) && void 0 !== GB ? GB : null;

      function qB() {
        zB.current && (clearTimeout(zB.current), zB.current = null)
      }

      function ZB() {
        qB(), QB(""), jB("search"), JB(null)
      }(0, YB.useEffect)((() => {
        if (null === pB || BB === KB.NULL_USER_CONTEXT) return;
        const OB = pB.toLowerCase();
        if (OB === BB.getPlayerName().toLowerCase()) return void PB({
          name: pB,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const GB = Ko.get(OB);
        if (GB) return void PB({
          name: pB,
          result: GB
        });
        let YB = !1;
        return async function(BB, OB) {
          try {
            const GB = await (0, KB.postJsonWithMetricsCookiesAndJsonResponse)(`${KO.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: OB
            }, {
              retries: 1
            }, BB.getMetricsCookies());
            if ("boolean" !== typeof(null === GB || void 0 === GB ? void 0 : GB.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(GB)}`);
            return GB
          } catch (GB) {
            return console.error("Failed to look up gift recipient:", GB), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(BB, pB).catch((BB => (console.error("Gift recipient lookup failed:", BB), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((BB => {
          !0 !== BB.giftRecipientFound && "store:giftRecipientLookupFailed" === BB.giftRecipientError || Ko.set(OB, BB), YB || PB({
            name: pB,
            result: BB
          })
        })), () => {
          YB = !0
        }
      }), [pB, BB]);
      const NB = (0, YB.useMemo)((() => {
        const BB = DB.trim();
        if (!BB) return {
          status: "none"
        };
        if (!yB || yB.name !== BB || (null === MB || void 0 === MB ? void 0 : MB.name) !== yB.name) return {
          status: "pending",
          name: BB
        };
        const OB = MB.result;
        return !1 === OB.giftRecipientFound ? {
          status: "error",
          name: yB.name,
          error: OB.giftRecipientError
        } : {
          status: "found",
          name: OB.giftRecipientName,
          ownedPacks: OB.giftRecipientOwnedPacks,
          hasSuperRank: OB.giftRecipientHasSuperRank,
          isSubscriber: OB.giftRecipientIsSubscriber
        }
      }), [DB, yB, MB]);
      (0, YB.useEffect)((() => {
        "found" === NB.status && "typed" === (null === yB || void 0 === yB ? void 0 : yB.source) && lB.current !== NB.name && (lB.current = NB.name, (0, ZO.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [NB, yB]);
      const RB = (null === MB || void 0 === MB ? void 0 : MB.name) === (null === yB || void 0 === yB ? void 0 : yB.name) ? null === MB || void 0 === MB ? void 0 : MB.result : null,
        WB = !0 === (null === RB || void 0 === RB ? void 0 : RB.giftRecipientFound) ? RB.giftRecipientCosmetics : null;
      return {
        query: DB,
        via: oB,
        recipient: NB,
        recipientCosmetics: WB,
        type: function(BB) {
          QB(BB), jB("search"), qB();
          const OB = BB.trim();
          OB ? zB.current = setTimeout((() => {
            JB({
              name: OB,
              source: "typed"
            })
          }), 400) : JB(null)
        },
        choose: function(BB, OB) {
          qB(), QB(BB), jB("typed" === OB ? "search" : "prefilled" === OB ? "prefilled" : "suggestion"), JB({
            name: BB,
            source: OB
          }), "typed" !== OB && "prefilled" !== OB && (0, ZO.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: OB
          })
        },
        clear: ZB,
        recordGift: function(BB, OB) {
          ! function(BB) {
            Ko.delete(BB.toLowerCase())
          }(BB), PB((GB => {
            if (!GB || GB.name.toLowerCase() !== BB.toLowerCase() || !0 !== GB.result.giftRecipientFound || "superRank" === OB) return GB;
            const YB = GB.result.giftRecipientOwnedPacks;
            return {
              ...GB,
              result: {
                ...GB.result,
                giftRecipientOwnedPacks: YB.includes(OB) ? YB : [...YB, OB]
              }
            }
          }))
        }
      }
    }
    var Io = GB(2498),
      Fo = GB(5088),
      io = GB(244),
      Lo = GB(3257);
    const go = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var ro = GB(2454),
      Xo = GB(627),
      wo = GB(2554),
      Eo = GB(2874);

    function co(BB) {
      let {
        cosmetics: OB
      } = BB;
      return (0, PB.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, PB.jsx)(wo.b, {
          cosmetics: OB
        })
      })
    }

    function ho(BB, OB) {
      var GB, YB;
      const DB = null !== (GB = BB.friend) && void 0 !== GB ? GB : {
        isError: !1,
        name: BB.name,
        ranks: [],
        cosmetics: null !== (YB = BB.cosmetics) && void 0 !== YB ? YB : {},
        nameColour: Xo.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return OB ? {
        ...DB,
        cosmetics: OB
      } : DB
    }

    function ao(BB) {
      let {
        pending: OB
      } = BB;
      return (0, PB.jsx)("span", {
        className: "StoreRecipientLoader",
        children: OB && (0, PB.jsx)(SB.b, {})
      })
    }

    function eo(BB) {
      var OB;
      let {
        selfName: GB,
        giftRecipient: DB,
        suggestionsVersion: yB,
        pulseSignal: MB,
        disabled: zB
      } = BB;
      const {
        t: lB
      } = (0, oB.H)(), pB = (0, CB.h)(), qB = (0, YB.useRef)(null), ZB = (0, YB.useRef)(null), {
        query: RB,
        via: WB,
        recipient: AB,
        recipientCosmetics: SB
      } = DB, nB = (0, fo.q)(RB), UB = (0, YB.useMemo)((() => {
        const BB = NB.featureFlags.useSocialFeatures ? pB.friends.filter((BB => !BB.isError)) : [];
        return (0, fo.l)({
          onlineFriends: (0, CB.c)(BB),
          recentRecipients: uo(),
          friends: BB,
          selfName: GB,
          max: 8
        })
      }), [pB.friends, GB, yB]), fB = RB.trim().toLowerCase(), kB = "search" !== WB && fB ? UB.find((BB => BB.name.toLowerCase() === fB)) : void 0, dB = kB && "prefilled" === WB ? [kB, ...UB.filter((BB => BB !== kB))] : UB, KB = "" !== fB && !kB, uB = KB ? RB : "", mB = dB.length > 0;
      (0, YB.useEffect)((() => {
        qB.current && qB.current.value !== uB && (qB.current.value = uB)
      }), [uB]), (0, YB.useEffect)((() => {
        qB.current && (qB.current.disabled = zB)
      }), [zB, MB]);
      const IB = (0, YB.useRef)(0);

      function iB() {
        "self" !== nB && (0, ZO.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), DB.clear()
      }

      function LB(BB) {
        var OB, GB;
        if (zB) return;
        if (" " === BB.key || "Enter" === BB.key) return BB.preventDefault(), void BB.currentTarget.click();
        const YB = Array.from(null !== (OB = null === (GB = ZB.current) || void 0 === GB ? void 0 : GB.querySelectorAll("[role=radio]")) && void 0 !== OB ? OB : []),
          DB = YB.indexOf(BB.currentTarget);
        let QB;
        "ArrowRight" === BB.key || "ArrowDown" === BB.key ? QB = YB[(DB + 1) % YB.length] : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? QB = YB[(DB - 1 + YB.length) % YB.length] : "Home" === BB.key ? QB = YB[0] : "End" === BB.key && (QB = YB[YB.length - 1]), QB && (BB.preventDefault(), QB.focus(), QB.click())
      }(0, YB.useEffect)((() => {
        var BB;
        MB > IB.current && !zB && (IB.current = MB, null === (BB = qB.current) || void 0 === BB || BB.focus())
      }), [MB, zB]);
      const gB = "self" === nB,
        rB = null !== (OB = null === kB || void 0 === kB ? void 0 : kB.name) && void 0 !== OB ? OB : null,
        XB = "error" === AB.status ? AB.error : null,
        wB = "store:giftRecipientLookupFailed" === XB;
      return (0, PB.jsxs)("div", {
        className: QB()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: zB,
          StoreRecipientStripNoChips: !mB
        }),
        children: [(0, PB.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: lB("store:buyingFor")
        }), (0, PB.jsxs)("div", {
          ref: ZB,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": lB("store:whoIsItFor"),
          children: [(0, PB.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": gB,
            tabIndex: zB || !gB && null !== rB ? -1 : 0,
            className: QB()("StoreRecipientMe", {
              StoreRecipientChecked: gB
            }),
            onClick: () => {
              zB || iB()
            },
            onKeyDown: LB,
            children: [(0, PB.jsx)(jB.b, {
              name: "user"
            }), " ", lB("store:me")]
          }), mB && (0, PB.jsx)("div", {
            className: "StoreRecipientChips",
            children: dB.map((BB => {
              const OB = BB === kB;
              return (0, PB.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": OB,
                tabIndex: !zB && OB ? 0 : -1,
                title: BB.name,
                className: QB()("StoreRecipientChip", {
                  StoreRecipientChecked: OB
                }),
                onClick: () => {
                  zB || function(BB) {
                    "gift" !== nB && (0, ZO.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), DB.choose(BB.name, BB.kind)
                  }(BB)
                },
                onKeyDown: LB,
                children: (0, PB.jsx)(Eo.g, {
                  playerSocialPreview: ho(BB, OB ? SB : null),
                  opensProfileCard: !1,
                  isFriend: null !== BB.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== BB.friend,
                  status: null === BB.friend ? null : void 0,
                  trailing: OB ? (0, PB.jsx)(ao, {
                    pending: "pending" === AB.status
                  }) : void 0
                })
              }, BB.name)
            }))
          })]
        }), (0, PB.jsxs)("div", {
          className: QB()("StoreRecipientSearch", {
            StoreRecipientChecked: KB,
            StoreRecipientSearchPulse: MB > 0 && !KB,
            StoreRecipientSearchError: null !== XB && !wB
          }),
          onClick: () => {
            var BB;
            null === (BB = qB.current) || void 0 === BB || BB.focus()
          },
          children: [KB && "found" === AB.status && SB && (0, PB.jsx)(co, {
            cosmetics: SB
          }), !(KB && "found" === AB.status && SB) && (0, PB.jsx)(jB.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, PB.jsx)(VB.b, {
            className: "StoreRecipientSearchInput",
            domRef: qB,
            placeholderText: lB("store:searchName"),
            defaultValue: uB,
            maxLength: FB.l,
            onValueChange: function(BB) {
              "gift" !== nB && BB.trim() && (0, ZO.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), DB.type(BB)
            },
            onEnter: () => {
              var BB;
              const OB = null === (BB = qB.current) || void 0 === BB ? void 0 : BB.value.trim();
              OB && DB.choose(OB, "typed")
            },
            blurOnEnter: !0
          }), KB && (0, PB.jsx)(ao, {
            pending: "pending" === AB.status
          }), KB && (0, PB.jsx)("div", {
            ...(0, JB.db)({
              disabled: zB
            }),
            "aria-label": lB("store:clearRecipient"),
            title: lB("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: BB => {
              BB.stopPropagation(), zB || iB()
            },
            children: (0, PB.jsx)(jB.b, {
              name: "xmark"
            })
          })]
        }, MB), XB && (0, PB.jsx)("div", {
          className: QB()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: wB
          }),
          role: "status",
          children: lB(XB)
        })]
      })
    }
    var To = GB(2386),
      bo = GB(2598),
      Co = GB(2893),
      Ho = GB(3976),
      vo = GB(2457),
      so = GB(3506),
      xo = GB(3508),
      to = GB(3470);
    const Bj = [Xo.v.yellow, Xo.v.green, Xo.v.aqua, Xo.v.blue, Xo.v.purple, Xo.v.red];

    function Oj(BB) {
      return "needsRecipient" === BB || "lookingUp" === BB || "gift" === BB || "recipientOwns" === BB || "recipientSharesOwned" === BB || "recipientSubscribed" === BB
    }

    function Gj(BB) {
      const {
        onKeyDown: OB,
        ...GB
      } = (0, JB.db)();
      return {
        ...GB,
        "aria-label": BB,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && (null === OB || void 0 === OB || OB(BB))
        }
      }
    }

    function Yj(BB) {
      let {
        text: OB
      } = BB;
      return (0, PB.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(OB).map(((BB, OB) => (0, PB.jsx)("span", {
          style: {
            color: Bj[OB % Bj.length]
          },
          children: BB
        }, OB)))
      })
    }
    const Dj = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Qj(BB) {
      let {
        state: OB,
        item: GB,
        price: YB,
        busy: DB,
        highlight: yB = !1,
        secondary: MB = !1,
        onAct: zB,
        onNeedRecipient: lB,
        onLogin: pB
      } = BB;
      const {
        t: qB
      } = (0, oB.H)(), ZB = "superRank" === GB ? (0, EB.x)(Date.now()).product.days : null, NB = "superRank" === GB && "hyper" === (0, EB.u)(Date.now()).look ? JB.w : JB.q, RB = MB ? JB.j : NB, WB = BB => null === ZB ? qB(BB ? "general:gift" : "general:buy") : qB(BB ? "store:giftDays" : "store:buyDays", {
        days: ZB
      }), AB = (BB, OB) => {
        const GB = (0, PB.jsxs)(PB.Fragment, {
          children: [null === BB && (0, PB.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== BB && (0, PB.jsx)("span", {
            className: "StoreCtaLabel",
            title: BB,
            children: BB
          })]
        });
        return null !== ZB ? (0, PB.jsxs)(PB.Fragment, {
          children: [OB && (0, PB.jsx)("span", {
            className: "StoreCtaIcon",
            children: OB
          }), GB, (0, PB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, PB.jsx)(bo.b, {
              amount: YB
            })]
          })]
        }) : (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsxs)("span", {
            className: "StoreCtaLead",
            children: [GB, "\xb7"]
          }), (0, PB.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [OB, (0, PB.jsx)(bo.b, {
              amount: YB
            })]
          })]
        })
      };
      let VB;
      switch (OB) {
        case "pending":
          VB = (0, PB.jsx)(NB, {
            className: "StoreCtaButton",
            disabled: !0,
            children: AB(null)
          });
          break;
        case "login":
          VB = (0, PB.jsx)(RB, {
            className: "StoreCtaButton",
            onClick: pB,
            children: AB(WB(!1))
          });
          break;
        case "owned":
          VB = (0, PB.jsx)(JB.j, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, To.e)("store")
            },
            children: (0, PB.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, PB.jsx)(jB.b, {
                name: "shirt"
              }), " ", qB("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          VB = (0, PB.jsx)(NB, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, PB.jsx)("span", {
              className: "StoreCtaLabel",
              children: qB(Dj[OB])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          VB = (0, PB.jsx)(NB, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === OB || null === YB,
            loading: "lookingUp" === OB || DB,
            onClick: zB,
            analyticsClick: {
              id: "store.gift",
              value: GB
            },
            children: AB(WB(!0), fo.e)
          });
          break;
        case "buy":
        case "recharge":
          VB = (0, PB.jsx)(RB, {
            className: "StoreCtaButton",
            loading: DB,
            disabled: null === YB,
            onClick: zB,
            analyticsClick: {
              id: "store.buy",
              value: GB
            },
            children: AB(WB(!1))
          })
      }
      return (0, PB.jsx)("div", {
        className: QB()("StoreCta", {
          StoreCtaHighlight: yB,
          StoreCtaLabelFirst: null !== ZB
        }),
        onClick: BB => {
          BB.stopPropagation(), "needsRecipient" === OB && lB()
        },
        children: VB
      })
    }
    const oj = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function jj(BB) {
      var OB;
      let {
        pack: GB,
        state: DB,
        busy: yB,
        onOpen: JB,
        onAct: MB,
        onNeedRecipient: zB,
        onLogin: lB
      } = BB;
      const {
        t: pB
      } = (0, oB.H)(), qB = Zo.d[GB], ZB = no.k[GB], NB = (0, ro.o)(GB), RB = (0, YB.useRef)(null);
      (0, so.i)(GB, RB);
      const WB = Oj(DB),
        AB = null !== (OB = qB.displayName) && void 0 !== OB ? OB : GB,
        VB = (0, Ho.e)((() => {
          (0, Co.f)();
          const BB = (0, so.e)(GB);
          void 0 !== BB && (0, vo.l)((0, so.c)(BB))
        })),
        [SB] = (0, YB.useState)(Lo.h);
      return (0, PB.jsxs)("div", {
        className: QB()("StoreTile StorePackTile", oj[qB.tier], {
          StorePackTileOwned: "owned" === DB,
          StorePackTileRecipientOwns: "recipientOwns" === DB,
          StoreTileGift: WB
        }),
        ...Gj(AB),
        ref: RB,
        "data-store-item": GB,
        onClick: JB,
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || SB || VB.start()
        },
        onPointerLeave: VB.cancel,
        children: [ZB && (0, PB.jsx)(ZB, {
          simple: !0
        }), (0, PB.jsx)("div", {
          className: "StorePackCharacters",
          children: NB.map((BB => (0, PB.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,ro.j)(BB)})`
            }
          }, BB)))
        }), (0, PB.jsx)("div", {
          className: "StoreTileScrim"
        }), WB && (0, PB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, PB.jsx)(to.c, {
          pack: GB,
          className: QB()({
            PackAnimatedBadgeBesideRibbon: WB
          })
        }), (0, PB.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, PB.jsx)("div", {
            className: "StoreTileTitle",
            children: AB
          }), (0, PB.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, PB.jsx)(xo.e, {
              tier: qB.tier
            }), " \xb7 ", pB("store:itemCount", {
              count: (0, lD.i)(GB)
            }), "owned" === DB && (0, PB.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, PB.jsx)(jB.b, {
                name: "check"
              }), " ", pB("general:owned")]
            })]
          }), (0, PB.jsx)(Qj, {
            state: DB,
            item: GB,
            price: (0, No.c)(GB),
            busy: yB,
            onAct: MB,
            onNeedRecipient: zB,
            onLogin: lB
          })]
        })]
      })
    }
    var yj = GB(4024),
      Jj = GB(3534),
      Mj = GB(4684),
      Pj = GB(4056);
    const zj = {
      cape: wB.f.cape
    };

    function lj(BB) {
      var OB, GB;
      let {
        wearer: DB,
        active: jB,
        tryOn: yB = zj,
        className: JB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = (0, YB.useRef)(null), [lB] = (0, YB.useState)(Lo.h), pB = function(BB) {
        const [OB, GB] = (0, YB.useState)(!1);
        return (0, YB.useEffect)((() => {
          const OB = new IntersectionObserver((BB => {
            GB(BB[BB.length - 1].isIntersecting)
          }));
          return OB.observe(BB.current), () => {
            OB.disconnect()
          }
        }), [BB]), OB
      }(zB), qB = (0, Pj.e)("storeRank"), ZB = null !== (OB = DB.name) && void 0 !== OB ? OB : MB(DB.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), NB = null !== (GB = DB.cosmetics) && void 0 !== GB ? GB : {}, RB = `${ZB}|${JSON.stringify(NB)}`, WB = jB && pB && !lB && !qB, [AB, VB] = (0, YB.useState)(null);
      WB || null === AB || VB(null);
      const SB = WB && AB === RB;
      return (0, PB.jsxs)("div", {
        ref: zB,
        className: QB()("HyperRankStage", JB, {
          HyperRankStageDrawn: SB
        }),
        children: [(0, PB.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, PB.jsx)(EB.c, {
          className: "HyperRankStageStandIn"
        }), WB && (0, PB.jsx)(pj, {
          name: ZB,
          cosmetics: NB,
          tryOn: yB,
          onDrawn: () => {
            VB(RB)
          }
        }, RB), (0, PB.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function pj(BB) {
      let {
        name: OB,
        cosmetics: GB,
        tryOn: DB,
        onDrawn: QB
      } = BB;
      const oB = (0, YB.useRef)(null),
        jB = (0, YB.useMemo)((() => {
          var BB;
          return {
            name: OB,
            ranks: [wB.f.rank],
            nameColour: null !== (BB = GB.nameColour) && void 0 !== BB ? BB : Xo.b
          }
        }), [OB, GB.nameColour]);
      return (0, PB.jsx)("div", {
        className: "HyperRankStageLive",
        children: (0, PB.jsx)(YB.Suspense, {
          fallback: null,
          children: (0, PB.jsx)(Co.b, {
            ref: oB,
            owner: "storeRank",
            framing: "store",
            forcedCosmetics: DB,
            nametag: jB,
            onReady: () => {
              var BB;
              null === (BB = oB.current) || void 0 === BB || BB.setAllCosmetics(GB)
            },
            onDrawn: QB
          })
        })
      })
    }
    var qj = GB(4688);

    function Zj(BB) {
      var OB;
      return null !== (OB = (0, zD.h)(BB)) && void 0 !== OB ? OB : zD.m[zD.m.length - 1]
    }

    function Nj(BB, OB) {
      return BB.tiers.flatMap((BB => {
        var GB;
        return null !== (GB = BB[OB]) && void 0 !== GB ? GB : []
      }))
    }

    function Rj(BB) {
      return Nj(BB, "hyper").filter((BB => "cosmetic" === BB.kind))
    }

    function Wj(BB, OB) {
      const GB = Nj(BB, OB).find((BB => "xpBoost" === BB.kind));
      return "xpBoost" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? GB : null
    }

    function Aj(BB) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, PB.jsx)(Yj, {
          text: BB("store:colourfulNames")
        }),
        detail: BB("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: BB("store:perkCapes"),
        detail: BB("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: BB("store:perkNametag", {
          rank: BB((0, EB.m)(wB.f.id).nameKey)
        }),
        detail: BB("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: BB("store:perkNoAdverts"),
        detail: BB("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: BB("store:perkFriends", {
          count: (0, pO.e)([wB.f.rank])
        }),
        detail: BB("store:perkFriendsDetail", {
          count: (0, pO.e)([])
        })
      }]
    }

    function Vj() {
      const {
        t: BB
      } = (0, oB.H)(), OB = [{
        id: "battlePass",
        icon: "crown",
        title: BB("store:perkBattlePassTrack")
      }, ...Aj(BB)];
      return (0, PB.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: OB.map((BB => (0, PB.jsxs)("li", {
          children: [(0, PB.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, PB.jsx)(jB.b, {
              name: BB.icon
            })
          }), BB.title]
        }, BB.id)))
      })
    }

    function Sj() {
      const {
        t: BB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, PB.jsx)(nj, {}), Aj(BB).map((BB => (0, PB.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, PB.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, PB.jsx)(jB.b, {
              name: BB.icon
            })
          }), (0, PB.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, PB.jsx)("b", {
              children: BB.title
            }), (0, PB.jsx)("small", {
              children: BB.detail
            })]
          })]
        }, BB.id)))]
      })
    }

    function nj() {
      const {
        t: BB,
        selectedLanguage: OB
      } = (0, oB.H)(), GB = Zj(Date.now()), YB = Rj(GB), DB = function(BB) {
        return Rj(BB).filter((BB => null !== (0, Mj.o)(BB) || null !== (0, Mj.s)(BB))).reverse()
      }(GB).slice(0, 4), QB = Wj(GB, "hyper"), yB = Wj(GB, "free"), JB = (0, oB.f)(OB.code, "store:battlePassTiersEnds", GB.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, PB.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, PB.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, PB.jsx)(jB.b, {
            name: "crown"
          })
        }), (0, PB.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, PB.jsx)("b", {
            children: BB("store:battlePassSeason", {
              season: GB.seasonNumber
            })
          }), (0, PB.jsx)("small", {
            children: BB("store:battlePassTiersEnds", {
              tiers: GB.tierCount,
              date: JB
            })
          })]
        }), (0, PB.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, PB.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === YB.length ? BB("store:battlePassOneCosmetic") : BB("store:battlePassCosmetics", {
              count: YB.length
            })
          }), (0, PB.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [DB.map((OB => (0, PB.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, Mj.g)(OB, BB),
              children: (0, PB.jsx)(qj.c, {
                reward: OB
              })
            }, OB.id))), YB.length > DB.length && (0, PB.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: BB("store:battlePassMore", {
                count: YB.length - DB.length
              })
            })]
          })]
        }), (0, PB.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [QB && yB && (0, PB.jsxs)("li", {
            children: [(0, PB.jsx)(jB.b, {
              name: "angles-up"
            }), BB("store:battlePassXp", {
              multiplier: QB.multiplier,
              minutes: QB.minutes,
              freeMinutes: yB.minutes
            })]
          }), (0, PB.jsxs)("li", {
            children: [(0, PB.jsx)(jB.b, {
              name: "lock-open"
            }), BB("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }

    function Uj(BB, OB) {
      return Object.keys(BB.cosmetics).some((BB => BB in OB.cosmetics))
    }

    function fj(BB) {
      let {
        wearer: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), DB = (0, YB.useMemo)((() => function(BB) {
        const OB = Zj(Date.now()).tiers.flatMap((OB => {
          const GB = OB.hyper;
          if ("cosmetic" !== (null === GB || void 0 === GB ? void 0 : GB.kind) || "profileEffect" === GB.cosmeticKind || "pet" === GB.cosmeticKind || null === (0, Mj.o)(GB)) return [];
          const YB = (0, Mj.l)(GB);
          return null !== YB && Object.keys(YB.cosmetics).length > 0 ? [{
            id: GB.id,
            label: (0, Mj.g)(GB, BB),
            cosmetics: YB.cosmetics
          }] : []
        }));
        return [{
          id: "cape",
          label: BB("store:tryOnCape"),
          cosmetics: {
            cape: wB.f.cape
          }
        }, ...OB.reverse().slice(0, 3)]
      }(GB)), [GB]), [jB, yB] = (0, YB.useState)((() => {
        const [BB, ...OB] = DB, GB = OB.find((OB => !Uj(OB, BB)));
        return new Set([BB.id, ...GB ? [GB.id] : []])
      })), JB = (0, YB.useMemo)((() => {
        const BB = {};
        for (const OB of DB) jB.has(OB.id) && Object.assign(BB, OB.cosmetics);
        return BB
      }), [DB, jB]);
      return (0, PB.jsxs)("div", {
        className: "HyperRankShowcase",
        children: [(0, PB.jsx)(lj, {
          className: "HyperRankShowcaseStage",
          wearer: OB,
          active: !0,
          tryOn: JB
        }), (0, PB.jsx)("div", {
          className: "HyperRankTryOn",
          children: DB.map((BB => {
            const OB = jB.has(BB.id);
            return (0, PB.jsx)("button", {
              type: "button",
              className: QB()("HyperRankTryOnChip", {
                HyperRankTryOnChipOn: OB
              }),
              title: BB.label,
              "aria-pressed": OB,
              "data-pad-key": `tryOn:${BB.id}`,
              ...(0, ZO.getAnalyticsClickAttributes)({
                id: "store.try_on",
                value: `${OB?"off":"on"}:${BB.id}`
              }),
              onClick: () => {
                yB((OB => {
                  if (OB.has(BB.id)) {
                    const GB = new Set(OB);
                    return GB.delete(BB.id), GB
                  }
                  return new Set([BB.id, ...DB.filter((GB => OB.has(GB.id) && !Uj(GB, BB))).map((BB => BB.id))])
                }))
              },
              children: BB.label
            }, BB.id)
          }))
        })]
      })
    }
    const kj = GB.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function dj() {
      (0, vo.l)(kj, {
        lowPriority: !1
      })
    }

    function Kj() {
      const {
        t: BB
      } = (0, oB.H)(), [OB, GB] = (0, YB.useState)("starting"), DB = (0, YB.useRef)(null), QB = (0, MG.c)(), yB = (0, YB.useRef)(null), MB = (0, YB.useCallback)((() => {
        const BB = DB.current;
        null !== BB.error && BB.load();
        const OB = BB.play();
        yB.current = OB, OB.catch((BB => {
          (0, yj.d)("Failed to play Super Rank video", BB), QB.current && yB.current === OB && GB("failed")
        }))
      }), [QB]);
      return (0, YB.useEffect)((() => {
        const BB = DB.current;
        let OB;

        function GB() {
          clearTimeout(OB), OB = setTimeout(MB, 3e3)
        }
        return MB(), BB.addEventListener("ended", GB), () => {
          clearTimeout(OB), BB.removeEventListener("ended", GB)
        }
      }), [MB]), (0, PB.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, PB.jsx)("video", {
          ref: DB,
          src: `${KO.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: kj,
          muted: !0,
          playsInline: !0,
          controls: "playing" === OB,
          onPlaying: () => {
            GB("playing")
          },
          onError: () => {
            GB("failed")
          }
        }), ("failed" === OB || "loading" === OB) && (0, PB.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, PB.jsx)(JB.f, {
            ariaLabel: BB("general:play"),
            loading: "loading" === OB,
            onClick: () => {
              GB("loading"), MB()
            },
            touchPressOn: "pointerup",
            children: (0, PB.jsx)(jB.b, {
              name: "play"
            })
          })
        })]
      })
    }

    function uj(BB) {
      let {
        tierId: OB,
        wearer: GB,
        onBack: YB,
        cta: DB,
        recipient: jB,
        afterCta: yB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = "hyper" === (0, EB.m)(OB).look;
      return (0, PB.jsxs)("div", {
        className: QB()("StoreSuperRankDetail", {
          StoreHyperRankDetail: zB
        }),
        children: [(0, PB.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, PB.jsx)(JB.c, {
            className: "StoreDetailBackButton",
            onClick: YB,
            padBack: !0,
            children: MB("general:back")
          }), (0, PB.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, PB.jsx)(EB.h, {
              tierId: OB
            })
          }), jB]
        }), (0, PB.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [zB && (0, PB.jsx)(fj, {
            wearer: GB
          }), !zB && (0, PB.jsx)(Kj, {}), (0, PB.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [zB && (0, PB.jsx)(Sj, {}), !zB && (0, PB.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, PB.jsx)(Jj.b, {
                tierId: OB
              })
            }), (0, PB.jsxs)("div", {
              className: "StoreTileActions",
              children: [DB, yB]
            })]
          })]
        })]
      })
    }
    var mj = GB(3458);

    function Ij(BB) {
      let {
        price: OB,
        perks: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [GB, (0, PB.jsx)("div", {
          className: "SmallTextLight",
          children: YB("payments:subscriptionRenewsMonthly", {
            price: OB
          })
        }), (0, PB.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, PB.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: YB("homePage:termsOfService")
          }), (0, PB.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: YB("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var Fj = GB(3483),
      ij = GB(3488),
      Lj = GB(3409);

    function gj(BB) {
      const {
        userContext: OB
      } = (0, pB.d)(), {
        purchaseUnderWay: GB,
        notice: DB,
        subscribe: QB
      } = (0, Lj.c)(), [oB, jB] = (0, YB.useState)(null), [yB, JB] = (0, YB.useState)(0), MB = (0, MG.c)(), PB = OB !== KB.NULL_USER_CONTEXT, zB = PB && (OB.mayBuy() || (0, aB.guestsMayBuy)()), lB = null !== oB && oB.loadedFor === OB ? oB.offer : null, qB = null === DB || void 0 === DB ? void 0 : DB.pendingIntentId, ZB = (0, YB.useRef)(qB);

      function NB() {
        JB((BB => BB + 1))
      }
      return (0, YB.useEffect)((() => {
        void 0 !== ZB.current && void 0 === qB && NB(), ZB.current = qB
      }), [qB]), (0, YB.useEffect)((() => {
        if (!PB) return;
        let GB = !1;
        return async function(BB, OB) {
          const {
            offering: GB
          } = await (0, tB.getBillingClient)().getOfferings(BB), YB = null === GB || void 0 === GB ? void 0 : GB.packages.find(xB.isPricedPackage);
          if (void 0 === YB) return {
            kind: "unavailable"
          };
          if (!OB) return {
            kind: "loaded",
            pkg: YB,
            preview: {
              kind: "none"
            }
          };
          try {
            return {
              kind: "loaded",
              pkg: YB,
              preview: await (0, ij.c)(YB.productId)
            }
          } catch (DB) {
            if ((0, ij.e)(DB)) return {
              kind: "unavailable"
            };
            throw DB
          }
        }(BB, zB).catch((OB => (console.error(`Billing: loading the ${BB} subscription or its preview failed:`, OB), {
          kind: "loadFailed"
        }))).then((BB => {
          GB || jB((GB => "loadFailed" === BB.kind && (null === GB || void 0 === GB ? void 0 : GB.loadedFor) === OB ? GB : {
            loadedFor: OB,
            offer: BB
          }))
        })), () => {
          GB = !0
        }
      }), [BB, OB, PB, zB, yB]), {
        offer: lB,
        purchaseUnderWay: GB,
        notice: DB,
        pendingIntentId: qB,
        mountedRef: MB,
        checkOut: async function(BB) {
          const GB = await QB(BB);
          MB.current && ("unknownPackage" === GB.kind && jB({
            loadedFor: OB,
            offer: {
              kind: "unavailable"
            }
          }), NB())
        }
      }
    }

    function rj(BB) {
      let {
        onOfferedChange: OB
      } = BB;
      return (0, aB.usePurchasesAllowed)() && (0, aB.subscriptionsSold)() ? (0, PB.jsx)(Xj, {
        onOfferedChange: OB
      }) : null
    }

    function Xj(BB) {
      let {
        onOfferedChange: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), {
        offer: DB,
        purchaseUnderWay: QB,
        notice: jB,
        pendingIntentId: yB,
        mountedRef: MB,
        checkOut: zB
      } = gj((0, EB.m)(wB.f.id).placementId), [lB, pB] = (0, YB.useState)(!1), qB = null === DB || "loaded" === DB.kind && "refused" !== DB.preview.kind;
      if ((0, YB.useEffect)((() => {
          OB(qB)
        }), [qB]), null === DB || "unavailable" === DB.kind) return null;
      if ("loadFailed" === DB.kind) return (0, PB.jsx)(mj.i, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: ZB,
        preview: RB
      } = DB;
      if ("refused" === RB.kind) return (0, PB.jsx)(mj.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(RB.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const WB = (0, QO.g)(ZB);
      return (0, PB.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: BB => {
          BB.stopPropagation()
        },
        children: [(0, PB.jsx)(mj.i, {
          notice: jB,
          className: "SmallTextBold"
        }), (0, PB.jsx)(mj.d, {
          className: "SmallTextBold"
        }), (0, PB.jsx)("div", {
          className: "StoreCta",
          children: (0, PB.jsx)(JB.w, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(BB, OB) {
                if ("refund" === OB.kind) {
                  pB(!0);
                  const BB = await (0, Fj.c)(OB, null);
                  if (!MB.current) return;
                  if (pB(!1), !BB) return
                }
                await zB(BB)
              }(ZB, RB)
            },
            disabled: void 0 !== yB,
            loading: QB || lB,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, PB.jsx)("span", {
              className: "StoreCtaLabel",
              children: GB("payments:subscribeContinue", {
                price: WB
              })
            })
          })
        }), (0, NB.isMobileApp)() && (0, PB.jsx)(Ij, {
          price: WB,
          perks: (0, PB.jsx)(Vj, {})
        })]
      })
    }

    function wj() {
      const {
        t: BB
      } = (0, oB.H)();
      return (0, PB.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, PB.jsxs)("li", {
          children: [(0, PB.jsx)(jB.b, {
            name: "check"
          }), (0, PB.jsx)(Yj, {
            text: BB("store:colourfulNames")
          })]
        }), (0, PB.jsxs)("li", {
          children: [(0, PB.jsx)(jB.b, {
            name: "check"
          }), BB("store:perkCapes")]
        }), (0, PB.jsxs)("li", {
          children: [(0, PB.jsx)(jB.b, {
            name: "check"
          }), BB("store:perkNoAdverts")]
        }), (0, PB.jsxs)("li", {
          children: [(0, PB.jsx)(jB.b, {
            name: "check"
          }), BB("store:perkFriends", {
            count: (0, pO.e)(["super"])
          })]
        })]
      })
    }

    function Ej(BB, OB) {
      return 1 === OB ? BB("store:oneDayLeft") : BB("store:daysLeft", {
        days: OB
      })
    }

    function cj(BB) {
      let {
        daysLeft: OB,
        totalDays: GB,
        urgent: YB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), jB = GB > 0 ? Math.min(1, Math.max(.03, OB / GB)) : 1;
      return (0, PB.jsxs)("div", {
        className: QB()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: YB
        }),
        children: [(0, PB.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: Ej(DB, OB)
        }), (0, PB.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, PB.jsx)("i", {
            style: {
              width: 100 * jB + "%"
            }
          })
        })]
      })
    }

    function hj(BB) {
      var OB;
      let {
        state: GB,
        urgent: DB,
        daysLeft: jB,
        totalDays: yB,
        recipientHasSuperRank: JB,
        busy: MB,
        highlight: zB,
        onOpen: lB,
        onAct: qB,
        onNeedRecipient: ZB,
        onLogin: RB,
        wearer: WB,
        live: AB,
        onWake: VB
      } = BB;
      const {
        t: SB
      } = (0, oB.H)(), {
        userContext: nB
      } = (0, pB.d)(), UB = Date.now(), fB = (0, EB.u)(UB), kB = "hyper" === fB.look, dB = kB ? void 0 : dj, KB = Oj(GB), uB = (0, EB.x)(UB), {
        days: mB
      } = uB.product, IB = SB("store:recipientHasSuperRank", {
        giftDays: mB
      }), FB = null === (OB = zO("subscribed" === GB)) || void 0 === OB ? void 0 : OB.text, iB = KB ? null : (0, EB.q)(nB.superRankInfo, UB), LB = kB && !KB && "subscribed" !== GB && "pending" !== GB && (0, aB.subscriptionsSold)() && !(0, NB.isMobileApp)(), [gB, rB] = (0, YB.useState)(!0);
      return (0, PB.jsxs)("div", {
        className: QB()("StoreTile StoreSuperRankTile", {
          StoreTileGift: KB,
          StoreSuperRankTileUrgent: "recharge" === GB && DB,
          StoreSuperRankTileWithChip: JB,
          StoreSuperRankTileGiftReady: "gift" === GB,
          StoreHyperRankTile: kB
        }),
        ...Gj(SB(fB.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: dB,
        onFocus: dB,
        onPointerMove: BB => {
          !kB || AB || "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || VB()
        },
        onClick: lB,
        children: [kB && (0, PB.jsx)(lj, {
          className: "StoreHyperRankTileStage",
          wearer: WB,
          active: AB
        }), !kB && (0, PB.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${fB.artUrl})`
          }
        }), KB && (0, PB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, PB.jsxs)("div", {
          className: "StoreTileContent",
          children: [JB && (0, PB.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: IB,
            children: IB
          }), (0, PB.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, PB.jsx)(EB.h, {
              tierId: (0, XB.e)(UB).id
            })
          }), KB && (0, PB.jsx)("div", {
            className: "StoreTilePitch",
            children: SB("store:giftPitch", {
              days: mB
            })
          }), kB && ("buy" === GB || "login" === GB) && null === iB && (0, PB.jsx)("div", {
            className: "StoreTilePitch",
            children: SB("store:hyperHook")
          }), "recharge" === GB && (0, PB.jsx)(cj, {
            daysLeft: jB,
            totalDays: yB,
            urgent: DB
          }), FB && (0, PB.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, PB.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: FB
            })
          }), null !== iB && (0, PB.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, PB.jsx)(hB, {
              className: "StoreSuperRankDaysLeft",
              until: iB
            })
          }), kB && (0, PB.jsx)(Vj, {}), !kB && (0, PB.jsx)(wj, {}), (0, PB.jsxs)("div", {
            className: "StoreTileActions",
            children: [LB && (0, PB.jsx)(rj, {
              onOfferedChange: rB
            }), (0, PB.jsx)(Qj, {
              state: GB,
              item: "superRank",
              price: uB.price,
              busy: MB,
              highlight: zB,
              secondary: LB && gB,
              onAct: qB,
              onNeedRecipient: ZB,
              onLogin: RB
            }), "needsRecipient" === GB && (0, PB.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: SB("store:pickRecipientFirst")
            }), "recharge" === GB && DB && (0, PB.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === jB ? SB("store:endsInOneDay") : SB("store:endsInDays", {
                days: jB
              })
            })]
          })]
        })]
      })
    }
    var aj = GB(1598),
      ej = GB(1499),
      Tj = GB(4004);

    function bj() {
      return (0, PB.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Cj = GB(1398),
      Hj = GB(1611),
      vj = GB(34828);

    function sj(BB) {
      let {
        character: OB,
        drawn: GB,
        onDrawn: DB
      } = BB;
      const oB = (0, YB.useRef)(null),
        jB = (0, vj.e)(OB);
      return (0, PB.jsx)("div", {
        className: QB()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: GB
        }),
        children: (0, PB.jsx)(YB.Suspense, {
          fallback: null,
          children: (0, PB.jsx)(Co.b, {
            ref: oB,
            framing: "store",
            turntableFromYaw: GB ? jB.yaw : null,
            onReady: () => {
              var BB, GB;
              null === (BB = oB.current) || void 0 === BB || BB.setOrbit(jB), null === (GB = oB.current) || void 0 === GB || GB.setAllCosmetics(Hj.d[OB].cosmetics)
            },
            onDrawn: DB
          })
        })
      })
    }
    var xj = GB(3479);
    const tj = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      By = new Set(["wildSpirits"]);

    function Oy(BB) {
      var OB;
      let {
        tile: GB,
        design: DB,
        canGoLive: yB,
        live: JB,
        busy: MB,
        highlight: zB,
        onLiveStart: lB,
        onLiveEnd: pB,
        onOpen: qB,
        onAct: ZB,
        onNeedRecipient: NB,
        onLogin: RB
      } = BB;
      const {
        t: WB
      } = (0, oB.H)(), {
        pack: AB,
        state: VB
      } = GB, SB = Zo.d[AB], nB = (0, Zo.h)(AB), UB = (0, ro.l)(AB), fB = no.k[UB], kB = By.has(UB), {
        tier: dB
      } = SB, KB = (0, xj.h)(AB), uB = "legendary" === dB || "mythic" === dB, mB = (0, YB.useRef)(null);
      (0, Cj.b)(mB, "epic" === dB || uB || kB);
      const [FB, iB] = (0, YB.useState)(!1);
      return !JB && FB && iB(!1), (0, PB.jsxs)("div", {
        ref: mB,
        className: QB()("StoreCharacterCard", `StoreCharacterCard${DB}`, tj[dB], {
          StoreCharacterCardOwned: "owned" === VB || "recipientOwns" === VB,
          StoreCharacterCardGift: Oj(VB),
          StoreCharacterCardItem: void 0 === nB
        }),
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || !yB || JB || void 0 === nB || lB()
        },
        onPointerLeave: pB,
        children: [(0, PB.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: fB && (0, PB.jsx)(fB, {
            simple: !0
          })
        }), uB && (0, PB.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, PB.jsxs)(IB.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, aj.h)({
            kind: "pack",
            pack: AB
          }, Date.now()),
          "data-store-item": AB,
          onClick: BB => {
            (0, ej.d)(BB) && (BB.preventDefault(), qB())
          },
          children: [(0, PB.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, PB.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, PB.jsx)("div", {
              className: QB()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: FB
              }),
              style: {
                backgroundImage: `url(${(0,ro.r)(AB)})`
              }
            }), JB && void 0 !== nB && (0, PB.jsx)(sj, {
              character: nB,
              drawn: FB,
              onDrawn: () => {
                iB(!0)
              }
            })]
          }), (0, PB.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (OB = SB.displayName) && void 0 !== OB ? OB : AB
          }), (0, PB.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, PB.jsx)(xo.e, {
              tier: dB
            }), KB && (0, PB.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, PB.jsx)(jB.b, {
                name: "film"
              }), WB("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, PB.jsx)("div", {
          className: "StoreCharacterScrim"
        }), kB && (0, PB.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, PB.jsx)(bj, {})
        }), (0, PB.jsx)(to.c, {
          pack: AB,
          iconOnly: !0,
          className: QB()({
            PackAnimatedBadgeBelowOwned: "owned" === VB
          })
        }), "owned" === VB && (0, PB.jsx)("span", {
          className: "StoreCharacterOwned",
          title: WB("general:owned"),
          "aria-label": WB("general:owned"),
          children: (0, PB.jsx)(jB.b, {
            name: "check"
          })
        }), (0, PB.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, PB.jsx)(Qj, {
            state: VB,
            item: AB,
            price: (0, No.c)(AB),
            busy: MB,
            highlight: zB,
            onAct: ZB,
            onNeedRecipient: NB,
            onLogin: RB
          })
        })]
      })
    }

    function Gy(BB) {
      let {
        tiles: OB,
        busy: GB,
        highlightItem: DB,
        onOpen: QB,
        onAct: oB,
        onNeedRecipient: jB,
        onLogin: yB,
        livePack: JB,
        setLivePack: MB
      } = BB;
      const zB = (0, Tj.q)("storeCharacterCardFoil"),
        lB = (0, Tj.q)("storeCharacterCardSpotlight"),
        pB = zB ? "Foil" : lB ? "Spotlight" : "Showcase",
        [qB] = (0, YB.useState)(Lo.h);
      return (0, PB.jsx)("div", {
        className: "StoreCharacterGrid",
        children: OB.map((BB => (0, PB.jsx)(Oy, {
          tile: BB,
          design: pB,
          canGoLive: !qB,
          live: JB === BB.pack,
          busy: GB,
          highlight: DB === BB.pack,
          onLiveStart: () => {
            MB(BB.pack)
          },
          onLiveEnd: () => {
            MB((OB => OB === BB.pack ? null : OB))
          },
          onOpen: () => {
            QB(BB.pack)
          },
          onAct: () => {
            oB(BB.pack)
          },
          onNeedRecipient: jB,
          onLogin: () => {
            yB(BB.pack)
          }
        }, BB.pack)))
      })
    }
    var Yy = GB(34834);

    function Dy(BB) {
      let {
        title: OB
      } = BB;
      return (0, PB.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, PB.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: OB
        })
      })
    }

    function Qy(BB) {
      let {
        mountAtOnce: OB,
        children: GB
      } = BB;
      const DB = (0, YB.useRef)(null),
        [QB, oB] = (0, YB.useState)(OB),
        jB = (0, Yy.d)();
      return (0, YB.useLayoutEffect)((() => {
        const BB = DB.current;
        BB && BB.getBoundingClientRect().top < BB.parentElement.getBoundingClientRect().bottom && oB(!0)
      }), []), QB || jB ? (0, PB.jsx)(PB.Fragment, {
        children: GB
      }) : (0, PB.jsx)("div", {
        ref: DB
      })
    }

    function oy(BB) {
      let {
        layout: OB,
        mountAtOnce: GB,
        bundleGift: DB,
        superRankTotalDays: QB,
        busy: jB,
        highlightItem: yB,
        onOpen: JB,
        onAct: MB,
        onNeedRecipient: zB,
        onLogin: lB,
        dailyDropTile: pB,
        dealBanner: qB,
        rankWearer: ZB
      } = BB;
      const {
        t: NB
      } = (0, oB.H)(), RB = OB.packs.filter((BB => void 0 === (0, Zo.h)(BB.pack) && !(0, Zo.m)(BB.pack))), WB = OB.packs.filter((BB => void 0 !== (0, Zo.h)(BB.pack))), AB = OB.packs.filter((BB => (0, Zo.m)(BB.pack))), [VB, SB] = (0, YB.useState)(null), [nB, fB] = (0, YB.useState)(!1), {
        gameState: kB
      } = (0, UB.o)(["gameState"]), dB = null === VB && (nB || "inGame" === kB);
      return (0, PB.jsxs)(PB.Fragment, {
        children: [(0, PB.jsx)(QO.d, {
          className: "StoreSuperGems",
          gift: DB,
          highlightSku: yB,
          leadingTile: pB,
          afterLeadingTile: qB
        }), (0, PB.jsx)(Dy, {
          title: NB("store:rank")
        }), (0, PB.jsx)(hj, {
          state: OB.superRank.state,
          urgent: OB.superRank.urgent,
          daysLeft: OB.superRankDaysLeft,
          totalDays: QB,
          recipientHasSuperRank: OB.recipientHasSuperRank,
          wearer: ZB,
          live: dB,
          onWake: () => {
            fB(!0)
          },
          busy: jB,
          highlight: "superRank" === yB,
          onOpen: () => {
            JB("superRank")
          },
          onAct: () => {
            MB("superRank")
          },
          onNeedRecipient: zB,
          onLogin: () => {
            lB("superRank")
          }
        }), (0, PB.jsxs)(Qy, {
          mountAtOnce: GB,
          children: [(0, PB.jsx)(Dy, {
            title: NB("store:bundles")
          }), (0, PB.jsx)("div", {
            className: "StorePackGrid",
            children: RB.map((BB => (0, PB.jsx)(jj, {
              pack: BB.pack,
              state: BB.state,
              busy: jB,
              onOpen: () => {
                JB(BB.pack)
              },
              onAct: () => {
                MB(BB.pack)
              },
              onNeedRecipient: zB,
              onLogin: () => {
                lB(BB.pack)
              }
            }, BB.pack)))
          }), (0, PB.jsxs)(Qy, {
            mountAtOnce: GB,
            children: [(0, PB.jsx)(Dy, {
              title: NB("store:characters")
            }), (0, PB.jsx)(Gy, {
              tiles: WB,
              busy: jB,
              highlightItem: yB,
              onOpen: JB,
              onAct: MB,
              onNeedRecipient: zB,
              onLogin: lB,
              livePack: VB,
              setLivePack: SB
            }), AB.length > 0 && (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsx)(Dy, {
                title: NB("store:premiumItems")
              }), (0, PB.jsx)(Gy, {
                tiles: AB,
                busy: jB,
                highlightItem: yB,
                onOpen: JB,
                onAct: MB,
                onNeedRecipient: zB,
                onLogin: lB,
                livePack: VB,
                setLivePack: SB
              })]
            })]
          })]
        })]
      })
    }

    function jy(BB) {
      let {
        giftName: OB,
        onChooseRecipient: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return OB ? (0, PB.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: YB("store:giftFor", {
          name: OB
        }),
        children: [fo.e, " ", YB("store:giftFor", {
          name: OB
        })]
      }) : (0, PB.jsxs)("div", {
        ...(0, JB.db)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: GB,
        children: [fo.e, " ", YB("store:chooseRecipient")]
      })
    }

    function yy(BB) {
      return (0, XB.c)(Date.now()) ? (0, PB.jsx)(My, {
        ...BB
      }) : (0, PB.jsx)(Jy, {
        ...BB
      })
    }

    function Jy(BB) {
      let {
        state: OB,
        wearer: GB,
        mode: YB,
        giftName: DB,
        busy: QB,
        highlight: jB,
        purchaseError: yB,
        onBack: JB,
        onChooseRecipient: MB,
        onAct: zB,
        onLogin: lB
      } = BB;
      const {
        t: pB
      } = (0, oB.H)(), qB = zO("gift" !== YB);
      return (0, PB.jsx)(uj, {
        tierId: wB.s.id,
        wearer: GB,
        onBack: JB,
        recipient: "gift" === YB && (0, PB.jsx)(jy, {
          giftName: DB,
          onChooseRecipient: MB
        }),
        cta: (0, PB.jsx)(Qj, {
          state: OB,
          item: "superRank",
          price: (0, EB.x)(Date.now()).price,
          busy: QB,
          highlight: jB,
          onAct: zB,
          onNeedRecipient: MB,
          onLogin: lB
        }),
        afterCta: (0, PB.jsxs)(PB.Fragment, {
          children: [qB && (0, PB.jsx)("span", {
            className: "StoreTileNote",
            children: qB.text
          }), (null === qB || void 0 === qB ? void 0 : qB.manageUrl) && (0, PB.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: qB.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: pB("payments:manageSubscription")
          }), yB && (0, PB.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: pB(yB)
          })]
        })
      })
    }

    function My(BB) {
      let {
        state: OB,
        daysLeft: GB,
        wearer: DB,
        mode: QB,
        giftName: jB,
        busy: yB,
        highlight: JB,
        purchaseError: MB,
        onBack: zB,
        onChooseRecipient: lB,
        onAct: qB,
        onLogin: ZB
      } = BB;
      const {
        t: NB
      } = (0, oB.H)(), {
        userContext: RB
      } = (0, pB.d)(), WB = Date.now(), AB = "gift" !== QB, VB = AB && "subscribed" === OB, SB = AB ? (0, EB.q)(RB.superRankInfo, WB) : null, nB = AB && !VB && "pending" !== OB && (0, aB.subscriptionsSold)(), [UB, fB] = (0, YB.useState)(!0);
      return (0, PB.jsx)(uj, {
        tierId: wB.f.id,
        wearer: DB,
        onBack: zB,
        recipient: !AB && (0, PB.jsx)(jy, {
          giftName: jB,
          onChooseRecipient: lB
        }),
        cta: (0, PB.jsxs)(PB.Fragment, {
          children: [null !== SB && (0, PB.jsx)(hB, {
            className: "StoreTileNote StoreDetailNote",
            until: SB
          }), "recharge" === OB && GB > 0 && (0, PB.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: Ej(NB, GB)
          }), nB && (0, PB.jsx)(rj, {
            onOfferedChange: fB
          }), AB && (0, PB.jsx)(jO, {
            showing: !0
          }), !VB && (0, PB.jsx)(Qj, {
            state: OB,
            item: "superRank",
            price: (0, EB.x)(WB).price,
            busy: yB,
            highlight: JB,
            secondary: nB && UB,
            onAct: qB,
            onNeedRecipient: lB,
            onLogin: ZB
          })]
        }),
        afterCta: MB && (0, PB.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: NB(MB)
        })
      })
    }

    function Py(BB, OB) {
      const GB = Math.max(1, Math.round(OB / rB.g));
      return [1 === GB ? `${BB}OneDay` : BB, {
        days: GB.toLocaleString()
      }]
    }

    function zy() {
      const BB = (0, aB.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && BB && (0, aB.subscriptionsSold)() ? (0, PB.jsx)(ly, {}) : null
    }

    function ly() {
      const {
        t: BB
      } = (0, oB.H)(), {
        offer: OB,
        purchaseUnderWay: GB,
        notice: DB,
        pendingIntentId: QB,
        checkOut: jB
      } = gj((0, EB.m)(wB.s.id).placementId), [yB, MB] = (0, YB.useState)(!1);
      if ((0, YB.useEffect)((() => {
          MB(!1)
        }), [OB]), null === OB) return null;
      if ("loaded" !== OB.kind) return (0, PB.jsx)(mj.i, {
        notice: {
          kind: "error",
          key: "unavailable" === OB.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: zB,
        preview: lB
      } = OB;
      if ("refused" === lB.kind) return (0, PB.jsx)(mj.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(lB.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const pB = (0, QO.g)(zB),
        qB = (0, NB.isMobileApp)() && (0, PB.jsx)(Ij, {
          price: pB,
          perks: (0, PB.jsx)(wj, {})
        });
      if (yB && "refund" === lB.kind) {
        const {
          refundedMs: OB,
          forfeitedMs: YB,
          premiumCurrency: DB
        } = lB, QB = YB + (0 === DB ? OB : 0), [oB, yB] = Py("payments:subscribeRefundsGemRank", OB), [ZB, NB] = Py("payments:subscribeForfeitsGemRank", QB);
        return (0, PB.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, PB.jsx)("div", {
            children: BB("payments:subscribeEndsGemRank")
          }), DB > 0 && (0, PB.jsx)("div", {
            children: BB(oB, {
              ...yB,
              amount: DB.toLocaleString()
            })
          }), QB > 0 && (0, PB.jsx)("div", {
            children: BB(ZB, NB)
          }), (0, PB.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, PB.jsx)(JB.j, {
              onClick: () => {
                MB(!1)
              },
              children: BB("general:cancel")
            }), (0, PB.jsx)(JB.q, {
              onClick: () => {
                MB(!1), jB(zB)
              },
              loading: GB,
              children: BB("payments:subscribeContinue", {
                price: pB
              })
            })]
          }), qB]
        })
      }
      return (0, PB.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, PB.jsx)(mj.i, {
          notice: DB,
          className: "SmallTextBold"
        }), (0, PB.jsx)(mj.d, {
          className: "SmallTextBold"
        }), (0, PB.jsx)(JB.q, {
          onClick: () => {
            "refund" === lB.kind ? MB(!0) : jB(zB)
          },
          disabled: void 0 !== QB,
          loading: GB,
          children: BB("payments:subscribeToSuperRank", {
            price: pB
          })
        }), qB]
      })
    }
    var py = GB(2795);

    function qy(BB) {
      let {
        state: OB,
        view: GB,
        claiming: DB,
        onOpen: jB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = (0, YB.useRef)(null), lB = "ready" === GB.kind;
      return (0, Cj.b)(zB, lB), (0, PB.jsxs)("div", {
        ref: zB,
        className: QB()("DailyDropTile", {
          DailyDropTileReady: lB
        }),
        children: [lB && (0, PB.jsx)(yB.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, PB.jsx)("div", {
          className: "DailyDropTileTitle",
          children: MB("dailyDrop:name")
        }), (0, PB.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, PB.jsx)(py.c, {
            className: "DailyDropTileBlock"
          }), (0, PB.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: MB("dailyDrop:collected", {
              count: OB.collected.length,
              total: OB.total
            })
          })]
        }), "ready" === GB.kind && (0, PB.jsx)(JB.q, {
          className: "DailyDropTileOpen",
          onClick: jB,
          loading: DB,
          children: MB("dailyDrop:open")
        }), "waiting" === GB.kind && (0, PB.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: MB("dailyDrop:nextIn", {
            count: GB.hours
          })
        })]
      })
    }
    var Zy = GB(2392);
    const Ny = Math.PI / 180;

    function Ry(BB) {
      return BB / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Wy(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const YB = (BB / (2 * Math.PI / GB) % GB + GB) % GB;
      let DB = null,
        QB = 1 / 0;
      for (let oB = 0; oB < GB; oB++) {
        if (!OB[oB]) continue;
        const BB = Math.abs(oB - YB),
          jB = Math.min(BB, GB - BB);
        jB < QB && (DB = oB, QB = jB)
      }
      return DB
    }

    function Ay(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const YB = Wy(BB, OB, GB);
      if (null === YB) return BB;
      const DB = Ry(YB, GB) - BB;
      return BB + DB - 2 * Math.PI * Math.round(DB / (2 * Math.PI))
    }
    const Vy = 32;

    function Sy(BB) {
      if (0 === BB.width || 0 === BB.height) return !0;
      const OB = document.createElement("canvas");
      OB.width = Vy, OB.height = Vy;
      const GB = OB.getContext("2d", {
        willReadFrequently: !0
      });
      if (!GB) return !0;
      GB.drawImage(BB, 0, 0, Vy, Vy);
      const {
        data: YB
      } = GB.getImageData(0, 0, Vy, Vy);
      for (let DB = 3; DB < YB.length; DB += 4)
        if (YB[DB] > 0) return !1;
      return !0
    }

    function ny(BB) {
      const OB = document.createElement("canvas");
      OB.width = BB.width, OB.height = BB.height;
      const GB = OB.getContext("2d");
      return GB ? (GB.drawImage(BB, 0, 0), OB) : null
    }

    function Uy(BB) {
      let {
        cosmetics: OB
      } = BB;
      return (0, PB.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, PB.jsx)(wo.b, {
          cosmetics: OB
        })
      })
    }

    function fy(BB) {
      let {
        worn: OB,
        UB: GB,
        fB: DB,
        prompting: yB,
        className: JB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = (0, YB.useRef)(null), [lB, pB] = (0, YB.useState)(null), [qB, ZB] = (0, YB.useState)(!1), [NB, RB] = (0, YB.useState)(!1), WB = (0, YB.useRef)([]), AB = (0, YB.useRef)(null), VB = (0, YB.useRef)(0), nB = (0, YB.useRef)(null), UB = (0, YB.useRef)(!0), fB = (0, YB.useCallback)((() => {
        const BB = AB.current,
          OB = WB.current,
          GB = Wy(VB.current, OB),
          YB = null === GB ? null : OB[GB],
          DB = null === BB || void 0 === BB ? void 0 : BB.getContext("2d");
        BB && YB && DB && (BB.width === YB.width && BB.height === YB.height || (BB.width = YB.width, BB.height = YB.height), DB.clearRect(0, 0, BB.width, BB.height), DB.drawImage(YB, 0, 0))
      }), []);
      async function kB(BB, OB) {
        const GB = performance.now();
        let YB = 0;
        for (const DB of function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const OB = [],
              GB = new Set;
            for (let YB = BB / 2; YB >= 1 && Number.isInteger(YB); YB /= 2)
              for (let DB = 0; DB < BB; DB += YB) GB.has(DB) || (GB.add(DB), OB.push(DB));
            for (let YB = 0; YB < BB; YB++) GB.has(YB) || OB.push(YB);
            return OB
          }()) {
          if (zB.current !== BB) break;
          if (0 !== DB && (BB.turnCamera(Ry(DB)), await new Promise((BB => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  BB()
                }))
              }))
            })), zB.current !== BB)) break;
          const GB = Sy(OB) ? null : ny(OB);
          if (null !== GB) WB.current[DB] = GB, YB++, 0 === DB && pB("stills");
          else if (0 === DB) break
        }
        YB > 0 && console.info(`Lucky Skin Block's Before: ${YB} stills in ${Math.round(performance.now()-GB)} ms`)
      }

      function dB(BB) {
        var OB, GB;
        (null === (OB = nB.current) || void 0 === OB ? void 0 : OB.pointerId) === BB.pointerId && (nB.current = null, UB.current || (VB.current = Ay(VB.current, WB.current), fB(), null === (GB = zB.current) || void 0 === GB || GB.turnCamera(VB.current)))
      }(0, YB.useEffect)((() => {
        "stills" === lB && fB()
      }), [lB, fB]), (0, YB.useEffect)((() => () => {
        for (const BB of WB.current) BB && (BB.width = 0, BB.height = 0);
        WB.current = []
      }), []);
      const KB = yB && !NB,
        uB = KB ? {
          onPointerDown: BB => {
            null === nB.current && (BB.currentTarget.setPointerCapture(BB.pointerId), nB.current = {
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startTurn: VB.current
            })
          },
          onPointerMove: BB => {
            const OB = nB.current;
            var GB;
            null !== OB && OB.pointerId === BB.pointerId && (VB.current = OB.startTurn - (BB.clientX - OB.startX) * Ny, fB(), UB.current || null === (GB = zB.current) || void 0 === GB || GB.turnCamera(VB.current))
          },
          onPointerUp: dB,
          onPointerCancel: dB
        } : {};
      return (0, PB.jsxs)("div", {
        className: QB()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: KB
        }, JB),
        children: [(0, PB.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, PB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...uB,
            children: ["stills" === lB && (0, PB.jsx)("canvas", {
              ref: AB,
              className: "DailyDropRevealBeforeStill"
            }), "head" === lB && (0, PB.jsx)(Uy, {
              cosmetics: OB
            }), null === lB && (0, PB.jsx)(SB.b, {})]
          }), (0, PB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: MB("dailyDrop:before")
          })]
        }), (0, PB.jsx)(jB.b, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, PB.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, PB.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, PB.jsx)("div", {
              className: QB()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: qB
              }),
              children: (0, PB.jsx)(YB.Suspense, {
                fallback: null,
                children: (0, PB.jsx)(Co.b, {
                  onNoWebGl: () => {
                    pB("head"), RB(!0)
                  },
                  ref: zB,
                  onReady: () => {
                    var BB, GB;
                    null === (BB = zB.current) || void 0 === BB || BB.resetCamera(), null === (GB = zB.current) || void 0 === GB || GB.setAllCosmetics(OB)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var BB;
                        const OB = zB.current;
                        if (!OB) return;
                        const YB = null === (BB = OB.getDevTools()) || void 0 === BB ? void 0 : BB.canvas();
                        try {
                          YB && await kB(OB, YB)
                        } catch (oB) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", oB)
                        } finally {
                          UB.current = !1
                        }
                        if (zB.current !== OB) return;
                        WB.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), pB("head")), null === nB.current && (VB.current = Ay(VB.current, WB.current)), OB.turnCamera(VB.current), fB(), OB.updateCosmetic(GB, DB);
                        const QB = new Promise((BB => {
                          setTimeout(BB, 1e4)
                        }));
                        await Promise.race([OB.ensureReadyForCapture(GB), QB]).catch((BB => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", BB)
                        })), zB.current === OB && ZB(!0)
                      }()
                    }))
                  }
                })
              })
            }), NB && (GQ.O.includes(GB) ? (0, PB.jsx)(Uy, {
              cosmetics: {
                ...OB,
                [GB]: DB
              }
            }) : (0, PB.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,Zy.n)(GB,DB).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !qB && !NB && (0, PB.jsx)(SB.b, {}), (0, PB.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...uB
            })]
          }), (0, PB.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: MB("dailyDrop:after")
          })]
        })]
      })
    }
    const ky = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      dy = {
        opening: 900,
        shrinking: 700
      };

    function Ky(BB) {
      let {
        drop: OB,
        onClose: GB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), {
        userContext: yB
      } = (0, pB.d)(), {
        state: MB,
        view: zB
      } = (0, lG.B)(), [lB, qB] = (0, YB.useState)("closed"), [ZB] = (0, YB.useState)((() => ({
        ...yB.getPlayerCosmetics()
      }))), [NB] = (0, YB.useState)((() => (0, lG.k)(OB, ZB))), [RB, WB] = (0, YB.useState)(!1), [AB, VB] = (0, YB.useState)(!1), [SB] = (0, YB.useState)((() => null === MB ? Promise.resolve(null) : RG(MB))), [nB, fB] = (0, YB.useState)(null), kB = (0, MG.c)(), {
        gameState: dB
      } = (0, UB.o)(["gameState"]);
      async function KB() {
        const BB = await SB;
        kB.current && (null === BB ? (GB(), async function(BB) {
          let OB = null;
          try {
            const GB = await NG();
            null === BB || BB.remindersOn || null !== ZG.g.getItem(GB) || (OB = GB)
          } catch (YB) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", YB)
          }
          if (null === OB) return void await (0, pG.k)("dailyDrop");
          const GB = OB;
          await (0, pG.k)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              ZG.g.setItem(GB, !0), AG(null)
            }
          })
        }(MB)) : ((0, pG.g)(), fB(BB), qB("remind")))
      }

      function uB(BB) {
        null !== nB && function(BB, OB) {
          ZG.g.setItem(BB.askedKey, !0), (0, JG.g)(), (0, lG.v)("daily_drop.remind", OB ? "yes" : "no"), OB && AG(BB.requester)
        }(nB, BB), GB()
      }(0, YB.useEffect)((() => {
        (0, lG.v)("daily_drop.reveal_step", lB)
      }), [lB]), (0, YB.useEffect)((() => {
        const BB = dy[lB];
        if (void 0 === BB) return;
        const OB = setTimeout((() => {
          qB(ky[lB])
        }), BB);
        return () => {
          clearTimeout(OB)
        }
      }), [lB]);
      const mB = DB(`dailyDrop:kind_${NB.UB}`),
        IB = MB && DB("dailyDrop:collected", {
          count: MB.collected.length,
          total: MB.total
        }),
        FB = "revealed" === lB || "shrinking" === lB,
        iB = "equip" !== lB && "remind" !== lB;
      return (0, PB.jsx)(nD.d, {
        className: "DailyDropRevealScreen",
        close: "remind" === lB ? () => {
          uB(!1)
        } : GB,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, PB.jsxs)("div", {
          className: QB()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === lB,
            DailyDropRevealShrinking: "shrinking" === lB,
            DailyDropRevealFiguresShown: "shrinking" === lB || "equip" === lB || "remind" === lB
          }),
          children: [(0, PB.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, PB.jsx)(fy, {
              className: "DailyDropRevealStageFigures",
              worn: ZB,
              UB: NB.UB,
              fB: NB.fB,
              prompting: !iB
            }), ("closed" === lB || "opening" === lB) && (0, PB.jsx)(py.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === lB
            }), FB && (0, PB.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, PB.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Zy.n)(NB.UB,NB.fB).previewTex}.png`,
                alt: mB,
                draggable: !1
              })
            })]
          }), iB && (0, PB.jsxs)(PB.Fragment, {
            children: [(0, PB.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, PB.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: FB ? mB : DB("dailyDrop:name")
              }), "closed" === lB && (0, PB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: DB("dailyDrop:tapToOpen")
              }), "revealed" === lB && (0, PB.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: DB("dailyDrop:tapToContinue")
              })]
            }), (0, PB.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": DB("closed" === lB ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                qB(ky[lB])
              }
            })]
          }), "equip" === lB && (0, PB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, PB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: mB
            }), (0, PB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: DB("dailyDrop:equipQuestion")
            }), (0, PB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, PB.jsx)(JB.f, {
                className: "DailyDropRevealButton",
                disabled: RB,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, lG.v)("daily_drop.not_now", OB), KB()
                },
                children: DB("dailyDrop:notNow")
              }), (0, PB.jsx)(JB.f, {
                className: "DailyDropRevealButton",
                loading: RB,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, lG.v)("daily_drop.equip", OB), WB(!0), VB(!1);
                    try {
                      await (0, lG.h)(yB, NB.UB, NB.fB)
                    } catch (BB) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", BB), WB(!1), void VB(!0)
                    }
                    await KB()
                  }()
                },
                children: DB("dailyDrop:equip")
              })]
            }), AB && (0, PB.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: DB("dailyDrop:equipFailed")
            }), !(0, UB.g)(dB) && (0, PB.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: RB,
              onClick: () => {
                var BB;
                (0, lG.v)("daily_drop.customise", OB), BB = NB.UB, FG.o.tM(ZD, BB), UB.c.set({
                  openEverythingMenuName: mO.p.CUSTOMISATION
                }), GB()
              },
              children: [DB("dailyDrop:customise"), " ", (0, PB.jsx)(jB.b, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), IB && (0, PB.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [IB, "waiting" === (null === zB || void 0 === zB ? void 0 : zB.kind) && ` \xb7 ${DB("dailyDrop:nextInInline",{count:zB.hours})}`]
            })]
          }), "remind" === lB && (0, PB.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, PB.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: DB("dailyDrop:remindTitle")
            }), (0, PB.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: DB("dailyDrop:remindSubtitle")
            }), (0, PB.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, PB.jsx)(JB.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  uB(!1)
                },
                children: DB("dailyDrop:remindNo")
              }), (0, PB.jsx)(JB.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  uB(!0)
                },
                children: DB("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function uy(BB, OB) {
      const {
        t: GB
      } = (0, oB.H)(), DB = function(BB, OB) {
        const {
          state: GB,
          view: DB
        } = (0, lG.B)(), [QB, oB] = (0, YB.useState)(!1), [jB, yB] = (0, YB.useState)(!1), [JB, MB] = (0, YB.useState)(null), PB = (0, YB.useRef)(null), zB = (0, YB.useRef)(!1), lB = OB && "ready" === (null === DB || void 0 === DB ? void 0 : DB.kind);
        (0, YB.useEffect)((() => {
          BB ? lB && !zB.current && (zB.current = !0, (0, lG.v)("daily_drop.shown", "tile")) : zB.current = !1
        }), [BB, lB]), (0, YB.useEffect)((() => {
          BB || (NB(), yB(!1))
        }), [BB]);
        const pB = BB && null === JB && !(0, lG.t)(DB);
        (0, YB.useEffect)((() => {
          pB && UB.c.set({
            openEverythingMenuName: mO.p.CUSTOMISATION
          })
        }), [pB]);
        const qB = (0, YB.useRef)(!1),
          ZB = (0, YB.useRef)(BB);

        function NB() {
          null !== PB.current && (PB.current = null, MB(null))
        }
        return ZB.current = BB, {
          state: GB,
          view: DB,
          claiming: QB,
          claimFailed: jB,
          reveal: JB,
          open: async function() {
            if (!qB.current) {
              qB.current = !0, oB(!0), yB(!1);
              try {
                const {
                  state: BB,
                  drop: OB
                } = await (0, lG.d)();
                if (null === BB || null === OB) return;
                if (!ZB.current) return;
                (0, lG.v)("daily_drop.open", OB), PB.current = {
                  state: BB,
                  drop: OB
                }, MB(PB.current)
              } catch (BB) {
                console.error("Failed to claim the Lucky Skin Block", BB), ZB.current && yB(!0)
              } finally {
                qB.current = !1, oB(!1)
              }
            }
          },
          closeReveal: NB
        }
      }(BB, OB);
      return {
        shown: (0, lG.t)(DB.view) || null !== DB.reveal,
        tile: DB.state && DB.view && (0, PB.jsx)(qy, {
          state: DB.state,
          view: DB.view,
          claiming: DB.claiming,
          onOpen: DB.open
        }),
        claimFailed: DB.claimFailed && (0, PB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: GB("dailyDrop:claimFailed")
        }),
        reveal: DB.reveal && (0, PB.jsx)(Ky, {
          drop: DB.reveal.drop,
          onClose: DB.closeReveal
        })
      }
    }

    function my(BB) {
      let {
        show: OB
      } = BB;
      const GB = uy(OB, OB);
      return (0, yO.E)(OB && GB.shown, (0, yO.G)(), (BB => {
        (0, lG.v)("daily_drop.store_only_open", BB)
      })), OB && GB.shown ? (0, PB.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [GB.claimFailed, GB.tile && (0, PB.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: GB.tile
        }), GB.reveal]
      }) : null
    }
    var Iy = GB(2807),
      Fy = GB(34838),
      iy = GB(34845);

    function Ly(BB) {
      let {
        view: OB,
        highlight: GB,
        scrollSignal: DB,
        onScrolledIntoView: QB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), {
        purchaseUnderWay: yB,
        notice: JB,
        needsLogin: MB,
        buyPack: zB
      } = (0, iy.c)("banner");
      (0, Iy.T)(OB.arm, "banner");
      const lB = (0, YB.useRef)(null);
      return (0, YB.useEffect)((() => {
        var BB;
        DB > 0 && (null === (BB = lB.current) || void 0 === BB || BB.scrollIntoView({
          block: "nearest"
        }), QB())
      }), [DB]), (0, PB.jsxs)("div", {
        ref: lB,
        className: "NewPlayerDealBanner",
        children: [(0, PB.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, PB.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: jB("newPlayerDeal:title")
          }), (0, PB.jsx)(Fy.d, {
            endsAt: OB.endsAt
          })]
        }), (0, PB.jsx)(Fy.g, {
          view: OB,
          needsLogin: MB,
          busy: yB,
          highlight: GB,
          onBuy: BB => {
            zB(OB, BB)
          }
        }), (0, PB.jsx)(mj.i, {
          notice: JB,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    GB(34842);
    var gy = GB(2814);

    function ry(BB) {
      let {
        wallet: OB,
        close: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return (0, PB.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, PB.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, PB.jsx)("span", {
            children: YB("newPlayerDeal:giftable")
          }), (0, PB.jsx)(bo.b, {
            amount: (0, Ao.b)(OB)
          }), (0, PB.jsx)("span", {
            children: YB("newPlayerDeal:ungiftable")
          }), (0, PB.jsx)(bo.b, {
            amount: OB.ungiftable
          })]
        }), (0, PB.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: YB("newPlayerDeal:ungiftableWhy")
        }), (0, PB.jsx)(JB.q, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: GB,
          children: YB("general:ok")
        })]
      })
    }

    function Xy(BB) {
      DO.NotificationProvider.showCustomPopup({
        body: OB => (0, PB.jsx)(ry, {
          wallet: BB,
          close: OB
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const wy = {
      kind: "board"
    };
    let Ey = !1;

    function cy(BB) {
      return "found" === BB.status || "error" === BB.status && "store:giftRecipientLookupFailed" === BB.error ? BB.name : null
    }(0, yO.x)(xB.prefetchBillingOfferings);
    const hy = (0, YB.memo)((function(BB) {
      var OB;
      let {
        show: DB
      } = BB;
      const {
        t: jB
      } = (0, oB.H)(), {
        userContext: yB
      } = (0, pB.d)(), JB = (0, aB.usePurchasesAllowed)(), MB = yB !== KB.NULL_USER_CONTEXT, zB = mo(yB, DB), [lB, qB] = (0, ZB.e)(), {
        page: NB,
        urlMode: RB,
        goTo: WB
      } = (0, Io.f)(), AB = function(BB) {
        return "superRank" === BB.kind ? "superRank" : "pack" === BB.kind ? BB.pack : null
      }(NB), {
        openEverythingMenuName: VB,
        gameState: SB
      } = (0, UB.o)(["openEverythingMenuName", "gameState"]), nB = null !== VB;
      ! function(BB, OB) {
        const [DB] = (0, YB.useState)(Lo.h), [QB, oB] = (0, YB.useState)(!1);
        DB && OB && !QB && oB(!0);
        const jB = (0, CY.s)(),
          yB = DB && QB && BB && !jB;
        (0, YB.useEffect)((() => {
          if (!yB) return;
          let BB = null,
            OB = null,
            YB = null;
          const DB = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, tB.getBillingClient)().purchaseUnderWay,
            QB = () => {
              var GB;
              null === (GB = YB) || void 0 === GB || GB(), YB = null, null !== BB && (clearTimeout(BB), BB = null), null !== OB && (clearTimeout(OB), OB = null)
            },
            oB = () => {
              (0, Fo.k)(!1), (0, Fo.i)(!1), QB(), BB = setTimeout((() => {
                BB = null, YB = (0, io.b)((() => {
                  YB = null, DB() ? oB() : ((0, Fo.k)(!0), OB = setTimeout((() => {
                    OB = null, YB = (0, io.b)((() => {
                      YB = null, DB() ? oB() : (0, Fo.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => GB(5082))).then((BB => {
                    BB.startBackgroundGameSetup()
                  }), (BB => {
                    console.warn("Background game setup: its chunk failed to load", BB)
                  })))
                }))
              }), 2e3)
            };
          for (const GB of go) window.addEventListener(GB, oB, {
            capture: !0,
            passive: !0
          });
          return oB(), () => {
            for (const BB of go) window.removeEventListener(BB, oB, {
              capture: !0
            });
            QB(), (0, Fo.k)(!1), (0, Fo.i)(!1)
          }
        }), [yB])
      }(DB && nB, "pack" === NB.kind);
      const fB = "landingPage" === SB;
      (0, YB.useEffect)((() => {
        nB && (0, xB.prefetchBillingOfferings)()
      }), [nB]), (0, YB.useEffect)((() => {
        nB && !DB && fB && (0, ro.v)()
      }), [nB, DB, fB]);
      const [kB, dB] = (0, YB.useState)(0), [uB, mB] = (0, YB.useState)(null), [IB, FB] = (0, YB.useState)(null), [iB, LB] = (0, YB.useState)(null), [gB, rB] = (0, YB.useState)(null), [wB, cB] = (0, YB.useState)(0), hB = (0, YB.useRef)(null), eB = (0, YB.useRef)(null), TB = (0, YB.useRef)(null), bB = (0, YB.useRef)(!1), CB = (0, yO.G)(), HB = (0, YB.useRef)(0);

      function vB() {
        dB((BB => BB + 1))
      }(0, YB.useEffect)((() => {
        if (DB) {
          if (Ey = !0, (0, yO.n)(), CB && CB.seq !== HB.current) {
            var BB;
            HB.current = CB.seq, "loginResume" !== CB.source && (0, yO.B)();
            const OB = (0, yO.d)(CB);
            RB || WB(OB), rB(null !== (BB = CB.highlight) && void 0 !== BB ? BB : null);
            const GB = "newPlayerDeal" === CB.source || "loginResume" === CB.source && void 0 !== CB.highlight && (0, Iy.g)(yB).includes(CB.highlight);
            cB((BB => GB ? BB + 1 : 0)), FB(null), "gift" === CB.mode && CB.giftRecipientName ? zB.choose(CB.giftRecipientName, "prefilled") : zB.clear(), "gift" !== CB.mode || CB.giftRecipientName || vB()
          }
        } else cB(0)
      }), [DB, CB]), (0, yO.E)(DB, CB, (BB => {
        (0, ZO.reportAnalyticsClick)({
          id: "store.open",
          value: BB
        })
      }));
      const sB = (0, Iy.S)(),
        BO = null !== gB && null === sB && null === (0, Iy.h)((0, Iy.c)(yB)) && (0, Iy.g)(yB).includes(gB);
      (0, YB.useEffect)((() => {
        if (!gB) return;
        const BB = setTimeout((() => {
          rB(null)
        }), BO ? 15e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [gB, BO]), (0, YB.useLayoutEffect)((() => {
        const BB = hB.current;
        if (!DB || !BB) return eB.current = null, void(TB.current = null);
        var OB;
        if (AB) eB.current = AB, null === (OB = BB.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === OB || OB.focus();
        else if (eB.current) {
          const OB = TB.current;
          null !== OB && (BB.scrollTop = OB);
          const GB = BB.querySelector(`[data-store-item="${eB.current}"]`);
          if (GB) {
            const YB = GB.getBoundingClientRect(),
              DB = BB.getBoundingClientRect();
            GB.focus({
              preventScroll: null !== OB && YB.bottom > DB.top && YB.top < DB.bottom
            })
          }
          eB.current = null
        }
      }), [AB, DB]), (0, YB.useEffect)((() => {
        FB(null)
      }), [zB.query]), (0, YB.useEffect)((() => {
        if (!iB) return;
        const BB = setTimeout((() => {
          LB(null)
        }), 8e3);
        return () => {
          clearTimeout(BB)
        }
      }), [iB]);
      const OO = yB.superRankInfo,
        GO = yB.isLoggedIn() || (0, aB.guestsMayBuy)(),
        YO = yB.getOwnedCosmeticPacks(),
        DO = (0, fo.q)(zB.query),
        QO = (0, fo.i)({
          mode: DO,
          loggedIn: MB ? GO : null,
          superRankInfo: OO,
          soldTierId: (0, EB.x)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: YO,
          packs: Zo.u,
          recipient: zB.recipient
        });
      (0, YB.useEffect)((() => {
        if (!GO || !DB) return;
        const BB = (0, Iy.g)(yB),
          OB = (0, yO.B)((OB => !BB.includes(OB.item))),
          GB = OB && (0, fo.n)(OB, Zo.u);
        OB && GB && ((0, ZO.reportAnalyticsClick)({
          id: "store.login_resume",
          value: OB.item
        }), (0, yO.p)(GB))
      }), [GO, DB]);
      const oO = DB && "gift" === DO,
        jO = (0, YB.useRef)(oO);
      jO.current = oO;
      const JO = "none" !== zB.recipient.status,
        MO = (0, YB.useRef)(!1);
      (0, YB.useEffect)((() => {
        oO ? JO && !MO.current && (MO.current = !0, async function(BB) {
          var OB;
          if ("gift" === (null === (OB = (0, gy.j)()) || void 0 === OB ? void 0 : OB.show)) return void Xy(gy.b);
          const GB = await (0, Ao.f)();
          null !== GB && GB.ungiftable > 0 && BB() && Xy(GB)
        }((() => jO.current))) : MO.current = !1
      }), [oO, JO]);
      const PO = (0, fo.t)({
        superRankDaysLeft: QO.superRankDaysLeft,
        openedThisSession: Ey || DB,
        seenNewItems: (0, yO.j)()
      });
      (0, YB.useEffect)((() => {
        (0, yO.A)(PO)
      }), [PO]);
      const zO = "self" === DO,
        lO = uy(DB, DB && zO && "board" === NB.kind);
      if (!DB || !JB) return null;
      const pO = qB > lB && lB <= 700,
        qO = !pO && qB <= 420,
        NO = "gift" === DO ? cy(zB.recipient) : null,
        RO = null !== uB,
        WO = "gift" === DO ? {
          name: NO,
          cosmetics: zB.recipientCosmetics,
          gift: !0
        } : {
          name: MB && yB.getPlayerName() || null,
          cosmetics: yB.getPlayerCosmetics(),
          gift: !1
        };

      function AO(BB) {
        (0, Wo.e)(BB, "gift" === DO ? zB.query.trim() : null)
      }

      function VO(BB, OB) {
        (0, ZO.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${OB?"gift":"self"}:${BB}`
        }), OB && (zB.recordGift(OB.name, BB), SO(OB))
      }

      function SO(BB) {
        ! function(BB) {
          try {
            ZG.g.setItem(ko, (0, fo.E)(uo(), BB))
          } catch {}
        }({
          name: BB.name,
          cosmetics: BB.cosmetics
        }), WB(wy), LB((OB => {
          var GB;
          return {
            name: BB.name,
            seq: (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.seq) && void 0 !== GB ? GB : 0) + 1
          }
        }))
      }
      async function nO(BB) {
        var OB, GB;
        if (bB.current) return;
        if (!GO) return void AO(BB);
        FB(null), rB(null);
        const YB = "gift" === DO ? {
          name: cy(zB.recipient),
          cosmetics: zB.recipientCosmetics
        } : null;
        if (YB && !YB.name) return void vB();
        const DB = "superRank" === BB ? (0, EB.x)(Date.now()).id : (0, No.b)(BB);
        bB.current = !0;
        const QB = await (0, Uo.d)(DB, null !== (OB = null === YB || void 0 === YB ? void 0 : YB.name) && void 0 !== OB ? OB : null);
        if (bB.current = !1, !QB) return;
        mB(BB);
        const oB = await Ao.h.purchase(DB, null !== (GB = null === YB || void 0 === YB ? void 0 : YB.name) && void 0 !== GB ? GB : null);
        mB(null), oB ? FB(oB) : (VO(BB, YB), YB || (await (0, Vo.flushClientAnalyticsEvents)(), (0, Ro.refreshWithoutConfirmation)("superRank" === BB ? "/super-rank-welcome" : `/pack-welcome/${BB}`)))
      }
      const UO = QB()("Store", {
        StoreGift: "gift" === DO,
        StorePortrait: pO,
        StoreCompact: qO
      });
      if ("pack" === NB.kind) {
        const BB = NB.pack,
          OB = QO.packs.find((OB => OB.pack === BB));
        return (0, PB.jsx)("div", {
          ref: hB,
          className: "CosmeticShopContainer",
          children: (0, PB.jsx)(no.f, {
            pack: BB,
            onBack: () => {
              WB(wy)
            },
            onPurchased: OB => {
              VO(BB, OB ? {
                name: OB,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === DO && NO && OB && (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsx)(Qj, {
                state: OB.state,
                item: BB,
                price: (fO = BB, "superRank" === fO ? (0, EB.x)(Date.now()).price : (0, No.c)(fO)),
                busy: RO,
                onAct: () => {
                  nO(BB)
                },
                onNeedRecipient: () => {
                  WB(wy), vB()
                },
                onLogin: () => {
                  AO(BB)
                },
                highlight: gB === BB
              }), IB && (0, PB.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: jB(IB)
              })]
            }),
            ownedPacks: YO,
            startAsGift: "gift" === DO,
            initialGiftRecipient: "gift" === DO ? null !== NO && void 0 !== NO ? NO : zB.query.trim() : "",
            highlightCta: gB === BB
          }, BB)
        })
      }
      var fO;
      return "superRank" === NB.kind ? (0, PB.jsx)("div", {
        ref: hB,
        className: QB()(UO, "StoreDetailView"),
        children: (0, PB.jsx)(yy, {
          state: QO.superRank.state,
          daysLeft: QO.superRankDaysLeft,
          wearer: WO,
          mode: DO,
          giftName: NO,
          busy: RO,
          highlight: "superRank" === gB,
          purchaseError: IB,
          onBack: () => {
            WB(wy)
          },
          onChooseRecipient: () => {
            WB(wy), vB()
          },
          onAct: () => {
            nO("superRank")
          },
          onLogin: () => {
            AO("superRank")
          }
        })
      }) : (0, PB.jsxs)("div", {
        ref: hB,
        className: UO,
        onScroll: BB => {
          TB.current = BB.currentTarget.scrollTop
        },
        children: [(0, PB.jsx)("div", {
          className: "StoreTopRow",
          children: (0, PB.jsx)(eo, {
            selfName: MB ? yB.getPlayerName() : "",
            giftRecipient: zB,
            suggestionsVersion: null !== (OB = null === iB || void 0 === iB ? void 0 : iB.seq) && void 0 !== OB ? OB : 0,
            pulseSignal: kB,
            disabled: RO || !MB
          })
        }), iB && (0, PB.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            LB(null)
          },
          children: [(0, PB.jsx)(So.c, {
            showSignal: iB.seq
          }), fo.e, " ", jB("store:giftSent", {
            name: iB.name
          })]
        }, iB.seq), !iB && IB && (0, PB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: jB(IB)
        }), zO && lO.claimFailed, (0, PB.jsx)(oy, {
          layout: QO,
          mountAtOnce: null !== eB.current,
          bundleGift: "gift" === DO ? {
            recipientName: NO,
            lookingUp: "pending" === zB.recipient.status,
            busy: RO,
            onNeedRecipient: vB,
            onSent: BB => {
              (0, ZO.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), SO({
                name: BB,
                cosmetics: zB.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, fo.x)(OO),
          busy: RO,
          highlightItem: gB,
          onOpen: function(BB) {
            (0, ZO.reportAnalyticsClick)({
              id: "store.item_open",
              value: BB
            }), WB((0, yO.f)(BB))
          },
          onAct: nO,
          onNeedRecipient: vB,
          onLogin: AO,
          dailyDropTile: zO && lO.tile,
          rankWearer: WO,
          dealBanner: "self" === DO && null !== sB && (0, PB.jsx)(Ly, {
            view: sB,
            highlight: gB,
            scrollSignal: wB,
            onScrolledIntoView: () => {
              cB(0)
            }
          })
        }), "gift" !== DO && !(0, XB.c)(Date.now()) && (0, PB.jsx)(zy, {}), lO.reveal]
      })
    }));
    var ay = GB(2956),
      ey = GB(9506),
      Ty = GB(9344),
      by = GB(3066),
      Cy = GB(2861),
      Hy = GB(2914),
      vy = GB(2928),
      sy = GB(2932),
      xy = GB(3004),
      ty = GB(2991),
      BJ = GB(2535),
      OJ = GB(2604),
      GJ = GB(2560),
      YJ = GB(2139),
      DJ = GB(2936),
      QJ = GB(2613);

    function oJ(BB) {
      let {
        show: OB
      } = BB;
      return OB ? (0, PB.jsx)(jJ, {}) : null
    }

    function jJ() {
      const {
        t: BB
      } = (0, oB.H)(), {
        followsLeader: OB
      } = (0, Cy.d)(), {
        loading: GB,
        friends: DB,
        requests: yB,
        invites: MB
      } = (0, CB.h)(), {
        userContext: zB
      } = (0, pB.d)(), [lB, qB] = (0, YB.useState)(QJ.i);
      (0, YB.useEffect)((() => {
        (0, QJ.b)()
      }), []);
      const ZB = yB.map((BB => BB.name)),
        {
          state: NB,
          recentRequesters: RB
        } = (0, ty.k)(),
        WB = new Map([...("loaded" === NB.status ? NB.recentPlayers : []).map((BB => [BB.preview.name, BB])), ...RB.map((BB => [BB.name, BB]))]),
        AB = (0, YB.useRef)(null),
        [nB, UB] = (0, YB.useState)(""),
        [fB, kB] = (0, YB.useState)("Enter"),
        [dB, KB] = (0, YB.useState)(null);

      function uB() {
        nB && (kB("Loading"), (0, GJ.e)(nB, "social_menu").then((BB => {
          if (AB.current) switch (BB.kind) {
            case "sent":
              kB("Success");
              break;
            case "becameFriends":
              kB("BecameFriends");
              break;
            case "failed":
              KB(BB.message), kB("Error")
          }
        })))
      }
      return (0, YB.useEffect)((() => {
        if ("Enter" === fB || "Loading" === fB) return;
        const BB = setTimeout((() => {
          AB.current.value = "", UB(""), kB("Enter")
        }), "Success" === fB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [fB]), (0, PB.jsx)("div", {
        className: "SocialMenu",
        children: (0, PB.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, PB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, PB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, PB.jsx)(sy.d, {
                label: BB("socialBar:addFriend")
              }), (0, PB.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, PB.jsxs)("div", {
                  className: QB()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${fB}`]: !0
                  }),
                  children: ["Loading" === fB && (0, PB.jsx)(SB.b, {}), "Success" === fB && (0, PB.jsx)(jB.b, {
                    name: "check"
                  }), "BecameFriends" === fB && (0, PB.jsx)(PB.Fragment, {
                    children: BB("socialBar:nowFriends", {
                      playerName: nB
                    })
                  }), "Error" === fB && dB && (0, PB.jsx)(PB.Fragment, {
                    children: BB(dB.translationKey, dB.params)
                  })]
                }), (0, PB.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, PB.jsx)(VB.b, {
                    className: "PlayerSearchInput",
                    placeholderText: BB("socialBar:enterPlayerName"),
                    domRef: AB,
                    onValueChange: BB => {
                      UB((0, FB.u)(BB)), AB.current.value = (0, FB.u)(BB)
                    },
                    onEnter: () => {
                      nB && (0, ZO.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), uB()
                    }
                  }), (0, PB.jsxs)(JB.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      uB()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, PB.jsx)(jB.b, {
                      name: "user-plus"
                    }), " ", BB("socialBar:sendRequest")]
                  })]
                })]
              }), (0, PB.jsx)(DJ.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), MB.length > 0 && (0, PB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, PB.jsx)(sy.d, {
                label: BB("socialBar:invites"),
                meta: MB.length
              }), MB.map((OB => (0, PB.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, PB.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, PB.jsx)(BJ.c, {
                    invite: OB
                  })
                }), (0, PB.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, PB.jsx)(BJ.d, {
                    invite: OB
                  })
                }), (0, PB.jsx)(JB.q, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, OJ.d)(OB)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${OB.destination.kind}`
                  },
                  children: BB("general:join")
                }), (0, PB.jsx)(lO.g, {
                  tooltipInner: (0, PB.jsx)(PB.Fragment, {
                    children: BB("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, PB.jsx)(JB.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === lB || void 0 === lB ? void 0 : lB.kind) && lB.inviteId === OB.id,
                    onClick: () => {
                      CB.b.declineInvite(OB.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${OB.destination.kind}`
                    },
                    children: (0, PB.jsx)(jB.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, OB.id)))]
            }), (0, PB.jsxs)("div", {
              className: QB()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !GB && 0 === yB.length
              }),
              children: [(0, PB.jsx)(sy.d, {
                label: (0, PB.jsxs)(PB.Fragment, {
                  children: [(0, PB.jsx)(jB.b, {
                    name: YJ.e
                  }), " ", BB("socialBar:requests")]
                }),
                meta: (0, PB.jsxs)(PB.Fragment, {
                  children: [yB.length, yB.length === pO.q && (0, PB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), GB && (0, PB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, PB.jsx)(SB.b, {})
              }), !GB && 0 === yB.length && (0, PB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriendRequests")
              }), !GB && yB.length > 0 && (0, PB.jsx)("div", {
                className: "PlayerRows",
                children: (0, PB.jsx)(WQ.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [yB],
                  children: yB.map(((OB, GB) => {
                    const YB = WB.get(OB.name);
                    return (0, PB.jsxs)(vy.e, {
                      playerSocialPreview: OB,
                      zIndex: yB.length - GB,
                      padDefaultFocus: (0, QJ.h)(lB, OB.name, GB),
                      status: YB && (0, PB.jsx)(xy.c, {
                        gameNameWithVariation: YB.gameNameWithVariation,
                        isPrivateLobby: YB.isPrivateLobby
                      }),
                      children: [(0, PB.jsx)(lO.g, {
                        tooltipInner: (0, PB.jsx)(PB.Fragment, {
                          children: BB("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, PB.jsx)(JB.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            qB((0, QJ.f)(ZB, GB)), (0, GJ.c)(OB.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, PB.jsx)(jB.b, {
                            name: "check"
                          })
                        })
                      }), (0, PB.jsx)(lO.g, {
                        tooltipInner: (0, PB.jsx)(PB.Fragment, {
                          children: BB("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, PB.jsx)(JB.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            qB((0, QJ.f)(ZB, GB)), (0, GJ.c)(OB.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, PB.jsx)(jB.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${OB.name}_${OB.isError}`)
                  }))
                })
              })]
            }), (0, PB.jsx)(xy.j, {})]
          }), (0, PB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, PB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, PB.jsx)(sy.d, {
                label: BB("socialBar:party")
              }), (0, PB.jsx)(Hy.d, {})]
            }), (0, PB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, PB.jsx)(sy.d, {
                label: (0, PB.jsxs)(PB.Fragment, {
                  children: [(0, PB.jsx)(jB.b, {
                    name: YJ.b
                  }), " ", BB("socialBar:friends")]
                }),
                meta: (0, PB.jsxs)(PB.Fragment, {
                  children: [DB.length, DB.length >= (0, pO.e)(zB.getPlayerRanks()) && (0, PB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), GB && (0, PB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, PB.jsx)(SB.b, {})
              }), !GB && 0 === DB.length && (0, PB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriends")
              }), !GB && DB.length > 0 && (0, PB.jsx)("div", {
                className: "PlayerRows",
                children: (0, PB.jsx)(WQ.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [DB],
                  children: DB.map(((BB, GB) => (0, PB.jsx)(vy.e, {
                    playerSocialPreview: BB,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: BB => {
                      CB.b.removeFriendFromState(BB)
                    },
                    zIndex: DB.length - GB,
                    children: (0, PB.jsx)(vy.d, {
                      friend: BB,
                      followsLeader: OB,
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
    var yJ = GB(2753),
      JJ = GB(4065),
      MJ = GB(1938),
      PJ = GB(4062),
      zJ = GB(4067);

    function lJ(BB) {
      let {
        count: OB,
        claiming: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return 0 === OB ? null : (0, PB.jsx)(JB.q, {
        className: "SeasonPassClaimAllButton",
        loading: GB,
        onClick: () => {
          JJ.g.claimAll().catch((BB => {
            console.error("Failed to claim all season pass rewards", BB)
          }))
        },
        children: YB("seasonPass:claimAll", {
          count: OB
        })
      })
    }

    function pJ(BB) {
      let {
        view: OB,
        claiming: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)(), {
        userContext: DB
      } = (0, pB.d)(), {
        config: QB,
        state: yB,
        tier: JB,
        xpIntoTier: MB,
        xpForNextTier: zB
      } = OB, lB = Date.now(), qB = (0, zJ.h)(OB, lB), ZB = JB >= QB.tierCount, NB = qB && !ZB && zB > 0, RB = zB > 0 && !ZB ? Math.min(100, MB / zB * 100) : 100, WB = yB.xpToday >= QB.maxXpPerDay, AB = null !== OB.xpBoost && OB.xpBoost.endsAtMs > lB && !WB ? OB.xpBoost : null;
      return (0, PB.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, PB.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, PB.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: YB("seasonPass:title", {
              season: yB.seasonNumber
            })
          })
        }), (0, PB.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, PB.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, PB.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: YB("seasonPass:tier"),
              "aria-label": `${YB("seasonPass:tier")} ${JB}`,
              children: JB
            }), (0, PB.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(RB),
              children: [(0, PB.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${RB}%`
                }
              }), (0, PB.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [ZB && YB("seasonPass:passComplete"), NB && YB("seasonPass:xpProgress", {
                  xp: MB,
                  xpForNextTier: zB
                })]
              })]
            }), NB && (0, PB.jsxs)(PB.Fragment, {
              children: [(0, PB.jsx)(jB.b, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, PB.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: JB + 1
              })]
            })]
          }), (0, PB.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, PB.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, PB.jsx)(jB.b, {
                name: "hourglass"
              }), " ", qB ? YB("seasonPass:endsIn", {
                time: (0, PJ.e)((OB.endsAtMs - lB) / 6e4)
              }) : (0, Mj.c)(OB.claimEndsAtMs, YB, lB)]
            }), qB && !ZB && (0, PB.jsx)("span", {
              className: WB ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: WB ? YB("seasonPass:dailyCapReached") : YB("seasonPass:dailyXp", {
                xp: yB.xpToday,
                cap: QB.maxXpPerDay
              })
            }), qB && !ZB && AB && (0, PB.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, PB.jsx)(jB.b, {
                name: "angles-up"
              }), " ", YB("seasonPass:xpBoostActive", {
                multiplier: AB.multiplier,
                time: (0, PJ.e)(Math.ceil((AB.endsAtMs - lB) / 6e4))
              })]
            }), qB && !ZB && !WB && !AB && (0, PB.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: YB("seasonPass:playToEarn")
            }), DB.type === MJ.b.ANONYMOUS && (0, PB.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: YB("seasonPass:logInToKeep")
            })]
          })]
        }), (0, PB.jsx)(lJ, {
          count: OB.claimable.length,
          claiming: GB
        })]
      })
    }
    var qJ = GB(3494),
      ZJ = GB(3497);

    function NJ(BB) {
      return null !== (0, Mj.s)(BB) || null !== (0, Mj.l)(BB)
    }
    let RJ = null;

    function WJ() {
      var BB;
      null === (BB = RJ) || void 0 === BB || BB.tearDownNotification()
    }

    function AJ(BB) {
      let {
        reward: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)(), {
        userContext: YB
      } = (0, pB.d)(), DB = (0, Mj.s)(OB);
      return (0, PB.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, PB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, Mj.g)(OB, GB)
        }), null !== DB && (0, PB.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, PB.jsx)(qJ.c, {
            profileEffect: DB,
            name: YB.getPlayerName(),
            cosmetics: YB.getPlayerCosmetics()
          })
        }), null === DB && (0, PB.jsx)(VJ, {
          reward: OB
        })]
      })
    }

    function VJ(BB) {
      let {
        reward: OB
      } = BB;
      const {
        userContext: GB
      } = (0, pB.d)(), DB = (0, YB.useRef)(null), {
        previewEmote: QB,
        playEmote: oB
      } = (0, ZJ.c)(), jB = (0, YB.useMemo)((() => (0, Mj.l)(OB)), [OB]), yB = jB.emote;
      return (0, PB.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, PB.jsx)(YB.Suspense, {
          fallback: (0, PB.jsx)(SB.b, {}),
          children: (0, PB.jsx)(Co.b, {
            ref: DB,
            framing: "store",
            forcedCosmetics: jB.cosmetics,
            NM: QB.id,
            emotePlaySeq: QB.seq,
            onReady: () => {
              var BB, OB;
              null === (BB = DB.current) || void 0 === BB || BB.resetCamera(), null === (OB = DB.current) || void 0 === OB || OB.setAllCosmetics(GB.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== yB && oB(yB)
            }
          })
        })
      })
    }

    function SJ(BB) {
      let {
        waitingCount: OB
      } = BB;
      const {
        t: GB
      } = (0, oB.H)();
      return (0, aB.usePurchasesAllowed)() ? (0, PB.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [OB > 0 && (0, PB.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === OB ? GB("seasonPass:hyperRewardWaiting") : GB("seasonPass:hyperRewardsWaiting", {
            count: OB
          })
        }), (0, PB.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, PB.jsxs)(JB.w, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, yO.p)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, PB.jsx)(EB.c, {}), " ", GB("homePage:getHyperRank")]
          }), OB > 0 && (0, PB.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: OB
          })]
        })]
      }) : null
    }
    var nJ = GB(34848);

    function UJ(BB) {
      let {
        stub: OB,
        name: GB
      } = BB;
      const {
        t: YB
      } = (0, oB.H)();
      return (0, PB.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, PB.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: OB
        }), (0, PB.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, PB.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: YB("seasonPass:trackTicketPass")
          }), (0, PB.jsx)("span", {
            className: "SeasonPassTicketName",
            children: GB
          })]
        })]
      })
    }

    function fJ(BB) {
      var OB, GB;
      let {
        view: DB,
        claimingKeys: QB,
        hyperWaitingCount: yB,
        onClaim: JB
      } = BB;
      const {
        t: MB
      } = (0, oB.H)(), zB = (0, YB.useRef)(null), {
        config: lB,
        tier: pB,
        xpIntoTier: qB,
        xpForNextTier: ZB,
        state: NB
      } = DB, RB = (0, zJ.h)(DB), WB = (0, YB.useRef)(!1), AB = null !== (OB = null === (GB = DB.claimable[0]) || void 0 === GB ? void 0 : GB.tier) && void 0 !== OB ? OB : Math.min(pB + 1, lB.tierCount);
      (0, YB.useLayoutEffect)((() => {
        if (WB.current) return;
        const BB = zB.current,
          OB = BB.querySelector(`[data-tier="${AB}"]`).getBoundingClientRect(),
          GB = BB.getBoundingClientRect();
        BB.scrollLeft += OB.left - GB.left - .3 * BB.clientWidth, BB.scrollTop += OB.top - GB.top - .3 * BB.clientHeight
      }), [AB]), (0, YB.useEffect)((() => {
        const BB = zB.current;

        function OB(OB) {
          WB.current = !0, Math.abs(OB.deltaY) <= Math.abs(OB.deltaX) || BB.scrollWidth <= BB.clientWidth || (OB.preventDefault(), BB.scrollLeft += OB.deltaY)
        }
        return BB.addEventListener("wheel", OB, {
          passive: !1
        }), () => {
          BB.removeEventListener("wheel", OB)
        }
      }), []);
      const VB = ZB > 0 ? qB / ZB : 1;
      return (0, PB.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, PB.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, PB.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, PB.jsx)(UJ, {
              stub: (0, PB.jsx)(EB.c, {}),
              name: MB("seasonPass:hyperTrack")
            }), !NB.hasHyperRank && (0, PB.jsx)(SJ, {
              waitingCount: yB
            })]
          }), (0, PB.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, PB.jsx)(UJ, {
              stub: (0, PB.jsx)(jB.b, {
                name: "star"
              }),
              name: MB("seasonPass:freeTrack")
            }), (0, PB.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: MB("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, PB.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: zB,
          onPointerDown: () => {
            WB.current = !0
          },
          children: (0, PB.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: lB.tiers.map((BB => {
              const OB = BB.tier,
                GB = function(BB, OB, GB) {
                  if (BB <= OB) return "reached";
                  return GB && BB === OB + 1 ? "earning" : "locked"
                }(OB, pB, RB),
                YB = "earning" === GB;
              return (0, PB.jsx)(kJ, {
                tierRewards: BB,
                nodeState: GB,
                progress: YB ? VB : 0,
                freeState: DB.tileState({
                  tier: OB,
                  track: "free"
                }),
                hyperState: DB.tileState({
                  tier: OB,
                  track: "hyper"
                }),
                freeClaiming: QB.has((0, zJ.i)({
                  tier: OB,
                  track: "free"
                })),
                hyperClaiming: QB.has((0, zJ.i)({
                  tier: OB,
                  track: "hyper"
                })),
                hasHyperRank: NB.hasHyperRank,
                onClaim: JB
              }, OB)
            }))
          })
        })]
      })
    }
    const kJ = (0, YB.memo)((function(BB) {
      let {
        tierRewards: OB,
        nodeState: GB,
        progress: YB,
        freeState: DB,
        hyperState: oB,
        freeClaiming: jB,
        hyperClaiming: yB,
        hasHyperRank: JB,
        onClaim: MB
      } = BB;
      const {
        tier: zB
      } = OB;
      return (0, PB.jsxs)("div", {
        className: QB()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== GB
        }),
        "data-tier": zB,
        children: [(0, PB.jsx)(dJ, {
          tier: zB,
          track: "hyper",
          reward: OB.hyper,
          tileState: oB,
          claiming: yB,
          padlock: !JB && "claimed" !== oB,
          onClaim: MB
        }), (0, PB.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, PB.jsx)("span", {
            className: QB()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === GB
            }),
            children: "earning" === GB && (0, PB.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * YB + "%"
              }
            })
          }), (0, PB.jsx)("span", {
            className: QB()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === GB
            })
          }), (0, PB.jsx)(nJ.c, {
            tier: zB,
            state: GB,
            progress: YB
          })]
        }), (0, PB.jsx)(dJ, {
          tier: zB,
          track: "free",
          reward: OB.free,
          tileState: DB,
          claiming: jB,
          padlock: !1,
          onClaim: MB
        })]
      })
    }));

    function dJ(BB) {
      let {
        tier: OB,
        track: GB,
        reward: YB,
        tileState: DB,
        claiming: QB,
        padlock: oB,
        onClaim: jB
      } = BB;
      return YB ? (0, PB.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GB}`,
        children: (0, PB.jsx)(qj.f, {
          reward: YB,
          tileState: DB,
          track: GB,
          size: "large",
          onClaim: () => {
            jB({
              tier: OB,
              track: GB
            })
          },
          claiming: QB,
          padlock: oB,
          onPreview: NJ(YB) ? () => {
            ! function(BB) {
              const OB = DO.NotificationProvider.showCustomPopup({
                body: (0, PB.jsx)(AJ, {
                  reward: BB
                })
              });
              RJ = OB, OB.getResult().finally((() => {
                RJ === OB && (RJ = null)
              }))
            }(YB)
          } : void 0
        })
      }) : (0, PB.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GB}`
      })
    }

    function KJ(BB) {
      let {
        show: OB
      } = BB;
      return OB ? (0, PB.jsx)(uJ, {}) : null
    }

    function uJ() {
      const {
        t: BB
      } = (0, oB.H)(), OB = (0, JJ.h)();
      return (0, YB.useEffect)((() => WJ), []), (0, PB.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === OB.status && (0, PB.jsx)(SB.b, {}), "error" === OB.status && (0, PB.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, PB.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: BB("seasonPass:errorLoad")
          }), (0, PB.jsx)(JB.f, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              JJ.g.retry()
            },
            children: BB("seasonPass:retry")
          })]
        }), "noSeason" === OB.status && (0, PB.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, PB.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, Mj.f)(BB)
          })
        }), "loaded" === OB.status && (0, PB.jsx)(mJ, {
          view: OB.view,
          claimingKeys: OB.claimingKeys
        })]
      })
    }

    function mJ(BB) {
      let {
        view: OB,
        claimingKeys: GB
      } = BB;
      const YB = OB.config.tiers.filter((BB => "needsHyper" === OB.tileState({
          tier: BB.tier,
          track: "hyper"
        }))).length,
        DB = GB.size > 0;
      return (0, PB.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, PB.jsx)(pJ, {
          view: OB,
          claiming: DB
        }), (0, PB.jsx)(fJ, {
          view: OB,
          claimingKeys: GB,
          hyperWaitingCount: YB,
          onClaim: IJ
        }), (0, PB.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, PB.jsx)(lJ, {
            count: OB.claimable.length,
            claiming: DB
          }), !OB.state.hasHyperRank && (0, PB.jsx)(SJ, {
            waitingCount: YB
          })]
        })]
      })
    }

    function IJ(BB) {
      JJ.g.claim(BB).catch((BB => {
        console.error("Failed to claim season pass reward", BB)
      }))
    }
    var FJ = GB(5181);
    var iJ = GB(3299);
    const LJ = BB => {
        let {
          action: OB,
          padAction: GB
        } = BB;
        const {
          isTouchScreen: YB
        } = (0, UB.o)(["isTouchScreen"]), DB = (0, CY.s)();
        return YB && !DB ? null : (0, PB.jsx)(EY.c, {
          className: "EverythingMenuTabKey",
          noaAction: OB,
          padHidesKey: !0,
          padMenuShortcut: GB
        })
      },
      gJ = (0, YB.memo)((function() {
        const {
          t: BB
        } = (0, oB.H)(), {
          gameState: OB,
          openEverythingMenuName: GB,
          crosshairGameView: DB,
          everythingMenuOverLoadingScreen: jB
        } = (0, UB.o)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: yB
        } = (0, pB.d)(), MB = (0, zD.h)(Date.now()), zB = (0, aB.usePurchasesAllowed)(), lB = (0, yO.I)(), {
          view: qB
        } = (0, lG.B)(), ZB = "dot" === lB || null === lB && "ready" === (null === qB || void 0 === qB ? void 0 : qB.kind), RB = (BB, OB) => (0, PB.jsx)(LJ, {
          action: BB,
          padAction: OB
        }), [WB, AB] = (0, YB.useState)(null), VB = (0, YB.useRef)(null), SB = (0, YB.useRef)(null);
        (0, YB.useEffect)((() => {
          var BB;
          const OB = null === (BB = SB.current) || void 0 === BB ? void 0 : BB.querySelector(".EverythingMenuTabActive");
          null === OB || void 0 === OB || OB.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [GB]);
        const nB = {
            ..."inGame" === OB ? {} : (0, JB.db)({
              focusOnClick: !1
            }),
            ...AD.i
          },
          fB = BB => {
            const OB = (0, VD.g)((OB => {
              (0, JB.cb)(OB.currentTarget), UB.c.set({
                openEverythingMenuName: BB
              })
            }), "pointerup");
            return {
              ...nB,
              onPointerDown: BB => {
                nB.onPointerDown(BB), OB.onPointerDown(BB)
              },
              onPointerUp: BB => {
                nB.onPointerUp(BB), OB.onPointerUp(BB)
              },
              onClick: OB.onClick
            }
          },
          kB = null !== GB;
        (0, YB.useEffect)((() => {
          GB === mO.p.CUSTOMISATION ? (0, ZO.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, To.i)()
          }) : null === GB && UB.c.get("everythingMenuOverLoadingScreen") && UB.c.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [GB]);
        const KB = GB !== mO.p.COSMETIC_SHOP && !DB;
        async function uB() {
          await async function() {
            if (!WB) return;
            await WB(), AB(null)
          }(), UB.c.set({
            openEverythingMenuName: null
          })
        }
        const mB = (0, YB.useRef)(null),
          IB = (0, YB.useCallback)((() => null !== mB.current && (0, Ty.f)(mB.current)), []);

        function FB() {
          IB() || uB()
        }(0, YB.useEffect)((() => (0, Jo.w)(IB)), [IB]);
        const iB = (0, YB.useMemo)((() => "inGame" === OB ? {
            text: BB("settingsMenu:exitGame"),
            onClick: () => {
              (0, ey.c)()
            }
          } : (0, dB.isDiscordClient)() ? {
            text: BB("settingsMenu:exitGame"),
            onClick: () => {
              uO.i.discordActivity().then((BB => {
                BB.exit("User exited the game")
              }))
            }
          } : null), [OB, BB]),
          LB = kB && !DB,
          gB = "inGame" !== OB,
          rB = LB && gB;
        (0, YB.useLayoutEffect)((() => {
          if (rB) return UB.c.set({
            menuCoversPage: !0
          }), () => {
            UB.c.set({
              menuCoversPage: !1
            })
          }
        }), [rB]);
        const XB = (0, YB.useRef)(null);
        ! function(BB, OB) {
          (0, YB.useEffect)((() => {
            var GB;
            const YB = (0, FJ.g)();
            if (!OB || null === YB || !(0, FJ.c)({
                site: dB.siteUsed,
                isMobileApp: (0, NB.isMobileApp)(),
                isTouchScreen: UB.c.get("isTouchScreen")
              })) return;
            const DB = null === (GB = BB.current) || void 0 === GB ? void 0 : GB.querySelector(".EverythingMenuBackButton");
            return DB ? YB(DB) : void 0
          }), [BB, OB])
        }(XB, LB && !(0, Jo.m)(GB) && "inGame" === OB);
        const wB = (0, PB.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: FB,
          children: (0, PB.jsx)(JB.m, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, PB.jsx)(SD.d, {
          showing: kB,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: GB === mO.p.SHOP,
          doGameplayStartStopOnShow: "inGame" === OB,
          children: (0, PB.jsx)(UD.b, {
            className: QB()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: jB
            }),
            show: LB,
            children: (0, PB.jsx)(nD.d, {
              close: FB,
              togglePointerLock: !1,
              children: (0, PB.jsxs)("div", {
                className: "EverythingMenu",
                ref: XB,
                children: [!(0, Jo.m)(GB) && (0, PB.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, PB.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [iB && (0, PB.jsx)(JB.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        iB.onClick()
                      },
                      children: iB.text
                    }), kB && zB && (0, PB.jsx)("div", {
                      ...nB,
                      className: "EverythingMenuWallet",
                      title: BB("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, yO.p)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, PB.jsx)(ay.f, {})
                    })]
                  }), (0, PB.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: SB,
                    "data-pad-tabs": "1",
                    children: [(0, PB.jsxs)("div", {
                      ...fB(mO.p.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.SETTINGS ? "true" : void 0,
                      className: QB()("EverythingMenuTab", {
                        EverythingMenuTabActive: GB === mO.p.SETTINGS
                      }),
                      children: [BB("general:settings"), RB("OpenSettings", "pause")]
                    }), (0, PB.jsxs)("div", {
                      ...fB(mO.p.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.CUSTOMISATION ? "true" : void 0,
                      className: QB()("EverythingMenuTab", {
                        EverythingMenuTabActive: GB === mO.p.CUSTOMISATION
                      }),
                      children: [BB("general:player"), RB("OpenCharacterCustomization")]
                    }), NB.featureFlags.useSocialFeatures && (0, PB.jsxs)("div", {
                      ...fB(mO.p.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.SOCIAL ? "true" : void 0,
                      className: QB()("EverythingMenuTab", {
                        EverythingMenuTabActive: GB === mO.p.SOCIAL
                      }),
                      ...(0, ZO.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, GB === mO.p.SOCIAL),
                      children: [BB("socialBar:social"), (0, PB.jsx)(yJ.c, {})]
                    }), MB && (0, PB.jsx)("div", {
                      ...fB(mO.p.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.SEASON_PASS ? "true" : void 0,
                      className: QB()("EverythingMenuTab", {
                        EverythingMenuTabActive: GB === mO.p.SEASON_PASS
                      }),
                      children: BB("seasonPass:title", {
                        season: MB.seasonNumber
                      })
                    }), (0, lG.t)(qB) && (0, PB.jsxs)("div", {
                      ...fB(mO.p.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.COSMETIC_SHOP ? "true" : void 0,
                      className: QB()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: GB === mO.p.COSMETIC_SHOP
                      }),
                      children: [(0, PB.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: BB("store:title")
                      }), "new" === lB && (0, PB.jsx)(bj, {}), ZB && (0, PB.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === OB && (0, PB.jsxs)("div", {
                      ...fB(mO.p.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": GB === mO.p.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: QB()("EverythingMenuTab", {
                        EverythingMenuTabActive: GB === mO.p.LOBBY_LEADERBOARD
                      }),
                      children: [BB("general:lobby"), RB("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, PB.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: wB
                  })]
                }), (0, Jo.m)(GB) && wB, (0, PB.jsxs)("div", {
                  ref: mB,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": gB ? "1" : "0.85"
                  },
                  children: [(0, PB.jsx)(MD, {
                    show: GB === mO.p.SETTINGS,
                    setBeforeResumeCallback: AB
                  }), (0, PB.jsx)(ND, {
                    show: GB === mO.p.CUSTOMISATION
                  }), (0, PB.jsx)(YB.Suspense, {
                    fallback: null,
                    children: (0, PB.jsx)(Bo, {
                      show: GB === mO.p.SHOP
                    })
                  }), (0, PB.jsx)(po, {
                    show: GB === mO.p.LOBBY_LEADERBOARD
                  }), zB && (0, PB.jsx)(hy, {
                    show: GB === mO.p.COSMETIC_SHOP
                  }), !zB && (0, PB.jsx)(my, {
                    show: GB === mO.p.COSMETIC_SHOP
                  }), (0, PB.jsx)(oJ, {
                    show: GB === mO.p.SOCIAL
                  }), (0, PB.jsx)(KJ, {
                    show: GB === mO.p.SEASON_PASS
                  })]
                }), !(0, NB.isMobileApp)() && (0, iJ.m)() && (0, fD.f)(yB.getPlayerRanks()) && (0, PB.jsx)(UD.b, {
                  ref: VB,
                  className: "EverythingMenuBannerDiv",
                  show: KB,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, PB.jsx)(by.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: VB
                    },
                    showing: kB && KB,
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
  34838: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      g: () => ZB
    });
    GB(34842);
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1175),
      jB = GB(1485),
      yB = GB(2831),
      JB = GB(1383),
      MB = GB(2598),
      PB = GB(3451),
      zB = GB(2454),
      lB = GB(1282);

    function pB(BB) {
      let {
        endsAt: OB,
        className: GB
      } = BB;
      return (0, lB.jsxs)("span", {
        className: QB()("NewPlayerDealClock", GB),
        children: [(0, lB.jsx)(JB.b, {
          name: "hourglass"
        }), (0, lB.jsx)(yB.e, {
          toTime: OB
        })]
      })
    }

    function qB(BB) {
      let {
        offered: OB,
        needsLogin: GB,
        busy: YB,
        highlight: DB,
        onBuy: yB
      } = BB;
      const {
        t: JB
      } = (0, oB.H)(), {
        pack: pB
      } = OB, qB = (0, PB.g)(OB.package);
      return (0, lB.jsxs)("div", {
        className: QB()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: DB
        }),
        children: [(0, lB.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, lB.jsx)("img", {
            src: zB.e[OB.tier],
            alt: "",
            draggable: !1
          }), (0, lB.jsx)("span", {
            className: "NewPlayerDealTag",
            children: JB("newPlayerDeal:tag")
          })]
        }), (0, lB.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, lB.jsx)(MB.b, {
            className: "NewPlayerDealPackAmount",
            amount: pB.gems
          })
        }), (0, lB.jsx)(jB.q, {
          className: "NewPlayerDealBuy",
          loading: YB,
          onClick: yB,
          ariaLabel: JB("newPlayerDeal:buyLabel", {
            amount: pB.gems.toLocaleString(),
            price: qB
          }),
          children: JB(GB ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: qB
          })
        })]
      })
    }

    function ZB(BB) {
      let {
        view: OB,
        needsLogin: GB,
        busy: DB,
        highlight: jB,
        onBuy: yB
      } = BB;
      const {
        t: JB
      } = (0, oB.H)();
      return (0, lB.jsxs)("div", {
        className: QB()("NewPlayerDealPacks", OB.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [OB.packs.map(((BB, OB) => (0, lB.jsxs)(YB.Fragment, {
          children: [OB > 0 && (0, lB.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, lB.jsx)("i", {})
          }), (0, lB.jsx)(qB, {
            offered: BB,
            needsLogin: GB,
            busy: DB,
            highlight: jB === BB.pack.packageId,
            onBuy: () => {
              yB(BB)
            }
          })]
        }, BB.pack.packageId))), (0, lB.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, lB.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: JB("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34845: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => fB,
      c: () => dB
    });
    GB(34842);
    var YB = GB(3442),
      DB = GB(1516),
      QB = GB(2444),
      oB = GB(3435),
      jB = GB(3409),
      yB = GB(3437),
      JB = GB(3396),
      MB = GB(1175),
      PB = GB(1400),
      zB = GB(1112),
      lB = GB(1485),
      pB = GB(1383),
      qB = GB(2598),
      ZB = GB(2965),
      NB = GB(2807),
      RB = GB(2814),
      WB = GB(2822),
      AB = GB(1282);
    const VB = new yB.d(JB.getBillingClient, JB.addPurchaseRecordListener);
    let SB = !1;

    function nB(BB, OB) {
      null !== BB && (0, NB.p)(BB) || ((0, DB.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${OB.pack.packageId}`
      }), null !== BB && (0, NB.r)(BB), fB(OB.pack.gems))
    }

    function UB(BB, OB, GB) {
      const DB = (0, NB.c)(OB);
      switch (BB.kind) {
        case "completed":
          nB(DB, GB);
          break;
        case "pending":
          QB = BB.intentId, oB = () => {
            ZB.h.refresh(), nB(DB, GB)
          }, SB || (SB = !0, VB.listen()), VB.follow(QB, oB);
          break;
        case "unknownPackage":
          (0, NB.M)(OB, null);
          break;
        case "failed":
          BB.errorKey === YB.e.newPlayerDealUnavailable && (0, NB.M)(OB, null)
      }
      var QB, oB
    }

    function fB(BB) {
      PB.NotificationProvider.showCustomPopup({
        body: OB => (0, AB.jsx)(kB, {
          gems: BB,
          close: OB
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function kB(BB) {
      let {
        gems: OB,
        close: GB
      } = BB;
      const {
        t: YB
      } = (0, MB.H)();
      return (0, AB.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, AB.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, AB.jsx)(pB.b, {
            name: "circle-check"
          }), (0, AB.jsx)(qB.b, {
            amount: OB
          }), (0, AB.jsx)("span", {
            children: YB("newPlayerDeal:added")
          })]
        }), (0, AB.jsx)(lB.q, {
          className: "NewPlayerDealAddedOk",
          onClick: GB,
          children: YB("general:ok")
        })]
      })
    }

    function dB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.e;
      const {
        userContext: GB
      } = (0, zB.d)(), {
        purchaseUnderWay: YB,
        notice: DB,
        buy: yB
      } = (0, jB.c)(OB), JB = (0, RB.j)(), MB = GB.mayBuy() || (0, QB.guestsMayBuy)(), PB = null === JB ? !MB : JB.guest && !GB.isLoggedIn();
      return {
        purchaseUnderWay: YB,
        notice: DB,
        needsLogin: PB,
        buyPack: function(YB, DB) {
          (0, NB.D)("new_player_deal.buy", (0, WB.b)(YB.arm, BB, DB.pack.packageId)), null === JB ? yB(function(BB) {
            return {
              sku: BB.pack.packageId,
              tier: BB.tier,
              amount: BB.pack.gems,
              bonusPercent: 0,
              package: BB.package
            }
          }(DB), null, {
            followPending: !1
          }).then((BB => {
            UB(BB, GB, DB)
          })) : PB ? OB(DB.pack.packageId, null) : nB((0, NB.c)(GB), DB)
        }
      }
    }
  },
  5377: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5061),
      oB = GB(1175),
      jB = GB(1383),
      yB = GB(1485),
      JB = GB(1540),
      MB = GB(1400),
      PB = GB(2719),
      zB = GB(1282);
    const lB = {
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

    function pB(BB) {
      let {
        platform: OB
      } = BB;
      const GB = "youtube" === OB;
      return (0, zB.jsxs)("span", {
        className: DB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: GB
        }),
        children: [GB && (0, zB.jsx)(PB.c, {
          variant: "white"
        }), !GB && (0, zB.jsx)(jB.b, {
          name: lB[OB].icon,
          kit: "brands"
        })]
      })
    }

    function qB(BB) {
      let {
        platform: OB,
        link: GB,
        editable: YB,
        userContext: DB,
        onLinksUpdated: PB
      } = BB;
      const {
        t: qB
      } = (0, oB.H)(), ZB = lB[OB];
      if (!GB && !YB) return null;

      function NB() {
        var BB;
        if (!DB || !PB) return;
        MB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ZB.name
            }
          },
          prefixText: QB.r[OB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === GB || void 0 === GB ? void 0 : GB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: GB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await JB.b.setSocialLink(DB, OB, BB.value) : await JB.b.clearSocialLink(DB, OB), PB()
          } catch (GB) {
            console.error("Failed to update social link", GB), MB.NotificationProvider.showAlertPopup({
              title: GB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (GB) {
        const BB = `@${GB.handle}`;
        return (0, zB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ZB.color
          },
          href: GB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, zB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, zB.jsx)(pB, {
              platform: OB
            }), (0, zB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, zB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), YB && (0, zB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, yB.db)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), NB()
            },
            children: (0, zB.jsx)(jB.b, {
              name: "pen-to-square"
            })
          }), !YB && (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, zB.jsx)(jB.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, zB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ZB.color
        },
        ...(0, yB.db)(),
        onClick: () => {
          NB()
        },
        children: [(0, zB.jsx)(pB, {
          platform: OB
        }), (0, zB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ZB.name
          }), (0, zB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: qB("homePage:profileSocialLinkAdd")
          })]
        }), (0, zB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, zB.jsx)(jB.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ZB(BB) {
      let {
        socialLinks: OB,
        editable: GB = !1,
        userContext: YB,
        onLinksUpdated: DB
      } = BB;
      if (!GB && 0 === OB.length) return null;
      const oB = new Map(OB.map((BB => [BB.platform, BB]))),
        jB = GB ? QB.q : OB.map((BB => BB.platform));
      return (0, zB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, zB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: jB.map((BB => (0, zB.jsx)(qB, {
            platform: BB,
            link: oB.get(BB),
            editable: GB,
            userContext: YB,
            onLinksUpdated: DB
          }, BB)))
        })
      })
    }
  },
  34834: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(56),
      DB = GB(3873);

    function QB() {
      const [BB, OB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, DB.e)().then((() => {
          BB && OB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  34765: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => qB,
      g: () => pB
    });
    GB(34769);
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(34757);

    function jB(BB, OB) {
      return Math.max(1, Math.round(BB * OB))
    }

    function yB(BB, OB) {
      const GB = OB * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        YB = function(BB, OB) {
          if (BB.lines) return jB(BB.lineThickness, OB) % 2;
          if (BB.dot) return jB(BB.dotSize, OB) % 2;
          return JB(BB, OB) % 2
        }(BB, OB),
        DB = MB(BB.lineThickness * GB, YB),
        QB = jB(BB.lineLength, GB),
        oB = Math.round(BB.gap * GB),
        yB = BB.outline > 0 ? jB(BB.outline, GB) : 0,
        zB = [];
      if (BB.lines && (zB.push({
          x: DB + oB,
          y: 0,
          w: QB,
          h: DB,
          arm: "right"
        }), zB.push({
          x: -oB - QB,
          y: 0,
          w: QB,
          h: DB,
          arm: "left"
        }), zB.push({
          x: 0,
          y: DB + oB,
          w: DB,
          h: QB,
          arm: "down"
        }), BB.tStyle || zB.push({
          x: 0,
          y: -oB - QB,
          w: DB,
          h: QB,
          arm: "up"
        }), 0 === oB && zB.push({
          x: 0,
          y: 0,
          w: DB,
          h: DB
        })), BB.dot) {
        const OB = MB(BB.dotSize * GB, YB),
          QB = BB.lines && 0 === oB && BB.dotSize > BB.lineThickness ? Math.max(OB, DB + 2) : OB,
          jB = (DB - QB) / 2;
        zB.push({
          x: jB,
          y: jB,
          w: QB,
          h: QB
        })
      }
      const lB = zB.map((BB => ({
        ...BB,
        x: BB.x - yB,
        y: BB.y - yB,
        w: BB.w + 2 * yB,
        h: BB.h + 2 * yB
      })));
      let pB = null,
        qB = null;
      if (BB.circle) {
        const OB = jB(BB.circleThickness, GB),
          QB = function(BB, OB) {
            return BB + (BB % 2 === OB ? 0 : 1)
          }(JB(BB, GB), YB),
          oB = (DB - QB) / 2;
        pB = PB(oB, QB, OB), yB > 0 && (qB = PB(oB - yB, QB + 2 * yB, OB + 2 * yB))
      }
      return {
        cell: DB,
        fills: zB,
        outlines: yB > 0 ? lB : [],
        ring: pB,
        ringOutline: qB
      }
    }

    function JB(BB, OB) {
      return Math.round(BB.circleRadius * OB * 2 + jB(BB.circleThickness, OB))
    }

    function MB(BB, OB) {
      return Math.max(2 - OB, 2 * Math.round((BB - OB) / 2) + OB)
    }

    function PB(BB, OB, GB) {
      const YB = 2 * GB >= OB - 1;
      return {
        x: BB,
        y: BB,
        size: OB,
        border: Math.min(GB, Math.floor(OB / 2)),
        filled: YB
      }
    }
    var zB = GB(1282);
    const lB = 1.4;

    function pB(BB, OB) {
      return BB && OB ? `scale(${lB})` : "scale(1)"
    }

    function qB(BB) {
      return "classic" === BB.settings.style ? (0, zB.jsx)(RB, {
        ...BB
      }) : (0, zB.jsx)(fB, {
        ...BB
      })
    }
    const ZB = .125;

    function NB(BB, OB) {
      const GB = {};
      if (BB.color !== oB.d.color && (GB.color = (0, oB.l)(BB.color)), BB.opacity !== oB.d.opacity && (GB.opacity = BB.opacity / 100), BB.outline !== oB.d.outline || BB.outlineColor !== oB.d.outlineColor) {
        const OB = BB.outline,
          YB = (0, oB.l)(BB.outlineColor);
        GB.textShadow = OB > 0 ? `-${OB}px 0 ${YB}, 0 ${OB}px ${YB}, ${OB}px 0 ${YB}, 0 -${OB}px ${YB}` : "none"
      }
      if (BB.size !== oB.d.size) {
        const YB = BB.size / 100;
        GB.fontSize = OB ? `calc(max(1.3rem, 18px) * ${YB})` : `calc(1.3rem * ${YB})`, GB.marginTop = `-${ZB}em`, GB.transformOrigin = `50% calc(50% + ${ZB}em)`
      }
      return GB
    }

    function RB(BB) {
      let {
        settings: OB,
        touch: GB,
        inPreview: YB,
        inEditor: QB,
        pressed: oB = !1,
        pressRef: jB
      } = BB;
      return (0, zB.jsx)("div", {
        className: DB()("Crosshair", {
          Touch: GB,
          CrosshairInPreview: YB,
          CrosshairInEditor: QB || YB
        }),
        ref: jB,
        style: {
          transform: pB(oB, OB.growOnClick),
          ...NB(OB, GB)
        },
        children: "+"
      })
    }

    function WB(BB, OB) {
      return BB / OB + "px"
    }

    function AB(BB, OB, GB, YB) {
      return {
        ...nB(BB, OB, GB),
        width: WB(BB.w, GB),
        height: WB(BB.h, GB),
        background: YB
      }
    }

    function VB(BB, OB, GB) {
      return {
        left: WB(BB.x, OB),
        top: WB(BB.y, OB),
        width: WB(BB.size, OB),
        height: WB(BB.size, OB),
        borderWidth: WB(BB.border, OB),
        borderColor: GB,
        background: BB.filled ? GB : void 0
      }
    }
    const SB = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function nB(BB, OB, GB) {
      const [YB, DB] = BB.arm ? SB[BB.arm] : [0, 0], QB = Math.round(OB * GB);
      return {
        left: WB(BB.x + YB * QB, GB),
        top: WB(BB.y + DB * QB, GB)
      }
    }

    function UB(BB) {
      return BB.arm ? {
        "data-arm": BB.arm,
        "data-x": BB.x,
        "data-y": BB.y
      } : {}
    }

    function fB(BB) {
      let {
        settings: OB,
        inPreview: GB,
        inEditor: YB,
        pressed: jB = !1,
        spread: JB,
        spreadRef: MB
      } = BB;
      const PB = (0, QB.useRef)(null),
        {
          box: pB,
          dpr: qB
        } = function(BB) {
          const [OB, GB] = (0, QB.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, QB.useLayoutEffect)((() => {
            const OB = BB.current;
            if (!OB) return;
            const YB = () => {
              const BB = OB.getBoundingClientRect(),
                YB = window.devicePixelRatio || 1;
              GB((OB => OB.dpr === YB && OB.box.left === BB.left && OB.box.top === BB.top && OB.box.width === BB.width && OB.box.height === BB.height ? OB : {
                box: {
                  left: BB.left,
                  top: BB.top,
                  width: BB.width,
                  height: BB.height
                },
                dpr: YB
              }))
            };
            YB();
            const DB = new ResizeObserver(YB);
            return DB.observe(OB), window.addEventListener("resize", YB), window.addEventListener("scroll", YB, !0), () => {
              DB.disconnect(), window.removeEventListener("resize", YB), window.removeEventListener("scroll", YB, !0)
            }
          }), [BB]), OB
        }(PB),
        ZB = (0, QB.useRef)(qB);
      ZB.current = qB;
      const NB = yB(OB, qB, jB && OB.growOnClick ? lB : 1),
        RB = function(BB, OB, GB) {
          const YB = Math.round((BB.left + BB.width / 2) * GB - OB / 2),
            DB = Math.round((BB.top + BB.height / 2) * GB - OB / 2);
          return {
            x: YB / GB - BB.left,
            y: DB / GB - BB.top
          }
        }(pB, NB.cell, qB),
        WB = (0, oB.l)(OB.color),
        SB = (0, oB.l)(OB.outlineColor),
        fB = (0, QB.useRef)(0);
      (0, QB.useLayoutEffect)((() => {
        if (MB) return MB.current = BB => {
          var OB;
          fB.current = BB, null === (OB = PB.current) || void 0 === OB || OB.querySelectorAll("[data-arm]").forEach((OB => {
            Object.assign(OB.style, nB(function(BB) {
              return {
                x: Number(BB.dataset.x),
                y: Number(BB.dataset.y),
                arm: BB.dataset.arm
              }
            }(OB), BB, ZB.current))
          }))
        }, () => {
          MB.current = null
        }
      }), [MB]);
      const kB = null !== JB && void 0 !== JB ? JB : fB.current;
      return (0, zB.jsx)("div", {
        ref: PB,
        className: DB()("CrosshairShapes", {
          CrosshairInPreview: GB,
          CrosshairInEditor: YB || GB,
          CrosshairSpreads: void 0 !== MB
        }),
        children: (0, zB.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: RB.x,
            top: RB.y,
            opacity: OB.opacity / 100
          },
          children: (0, zB.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [NB.ringOutline && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: VB(NB.ringOutline, qB, SB)
            }), NB.outlines.map(((BB, OB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...UB(BB),
              style: AB(BB, kB, qB, SB)
            }, `o${OB}`))), NB.ring && (0, zB.jsx)("div", {
              className: "CrosshairRing",
              style: VB(NB.ring, qB, WB)
            }), NB.fills.map(((BB, OB) => (0, zB.jsx)("div", {
              className: "CrosshairPart",
              ...UB(BB),
              style: AB(BB, kB, qB, WB)
            }, `f${OB}`)))]
          })
        })
      })
    }
  },
  34773: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => ZB,
      g: () => qB
    });
    var YB = GB(34757);
    const DB = "XH1-",
      QB = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      oB = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      jB = ["color", "outlineColor"],
      yB = 1 + 3 * jB.length + oB.length + 1,
      JB = Math.ceil(8 * yB / Math.log2(62)),
      MB = DB.length + JB;

    function PB(BB) {
      let OB = 90;
      for (const GB of BB) OB = 31 * OB + GB & 255;
      return OB
    }
    const zB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      lB = BigInt(zB.length);

    function pB(BB, OB) {
      let GB = 0n;
      for (const DB of BB) {
        const BB = zB.indexOf(DB);
        if (BB < 0) return null;
        GB = GB * lB + BigInt(BB)
      }
      if (GB >> BigInt(8 * OB) !== 0n) return null;
      const YB = [];
      for (let DB = 0; DB < OB; DB++) YB.unshift(Number(0xffn & GB)), GB >>= 8n;
      return YB
    }

    function qB(BB) {
      let OB = "shapes" === BB.style ? 1 : 0;
      QB.forEach(((GB, YB) => {
        BB[GB] && (OB |= 1 << YB + 1)
      }));
      const GB = [OB];
      for (const DB of jB) {
        const OB = (0, YB.h)(DB, BB[DB]);
        GB.push(OB >> 16 & 255, OB >> 8 & 255, 255 & OB)
      }
      for (const DB of oB) {
        const {
          min: OB,
          step: QB
        } = YB.c[DB];
        GB.push(Math.round(((0, YB.h)(DB, BB[DB]) - OB) / QB))
      }
      return GB.push(PB(GB)), DB + function(BB, OB) {
        let GB = 0n;
        for (const DB of BB) GB = GB << 8n | BigInt(DB);
        let YB = "";
        for (let DB = 0; DB < OB; DB++) YB = zB[Number(GB % lB)] + YB, GB /= lB;
        return YB
      }(GB, JB)
    }

    function ZB(BB) {
      for (const OB of BB.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${JB}})`, "gi"))) {
        const BB = NB(pB(OB[1], yB));
        if (BB) return BB
      }
      return null
    }

    function NB(BB) {
      if (!BB || BB.length !== yB || PB(BB.slice(0, -1)) !== BB[BB.length - 1]) return null;
      const OB = BB[0],
        GB = {
          ...YB.d,
          style: 1 & OB ? "shapes" : "classic"
        };
      QB.forEach(((BB, YB) => {
        GB[BB] = 0 !== (OB & 1 << YB + 1)
      }));
      let DB = 1;
      for (const YB of jB) GB[YB] = BB[DB] << 16 | BB[DB + 1] << 8 | BB[DB + 2], DB += 3;
      for (const QB of oB) {
        const {
          min: OB,
          step: oB
        } = YB.c[QB];
        GB[QB] = (0, YB.h)(QB, OB + BB[DB] * oB), DB++
      }
      return GB
    }
  },
  34757: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      d: () => DB,
      h: () => QB,
      l: () => JB,
      p: () => yB,
      t: () => MB,
      v: () => jB,
      w: () => oB
    });
    const YB = {
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
      DB = Object.freeze({
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

    function QB(BB, OB) {
      var GB;
      const {
        min: QB,
        max: oB,
        step: jB
      } = YB[BB];
      if (!Number.isFinite(OB)) return DB[BB];
      const yB = (null !== (GB = String(jB).split(".")[1]) && void 0 !== GB ? GB : "").length,
        JB = Number((Math.round(OB / jB) * jB).toFixed(yB));
      return Math.min(oB, Math.max(QB, JB))
    }

    function oB(BB, OB, GB) {
      const YB = "number" === typeof GB ? QB(OB, GB) : GB;
      return {
        ...BB,
        [OB]: YB
      }
    }

    function jB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(DB).every((YB => GB.includes(YB) || BB[YB] === OB[YB]))
    }

    function yB(BB) {
      return jB(BB, DB)
    }

    function JB(BB) {
      return `#${BB.toString(16).padStart(6,"0")}`
    }

    function MB(BB) {
      const OB = /^#?([0-9a-f]{6})$/i.exec(BB.trim());
      return OB ? parseInt(OB[1], 16) : null
    }
  },
  34777: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      f: () => zB
    });
    var YB = GB(56),
      DB = GB(31),
      QB = GB(34773),
      oB = GB(34757);
    const jB = "crosshairCode";
    let yB = null;
    const JB = new Set;

    function MB() {
      if (null === yB) {
        var BB;
        const OB = DB.g.getItem(jB);
        yB = null !== (BB = "string" === typeof OB ? (0, QB.d)(OB) : null) && void 0 !== BB ? BB : oB.d
      }
      return yB
    }

    function PB(BB) {
      yB = BB, (0, oB.p)(BB) ? DB.g.removeItem(jB) : DB.g.setItem(jB, (0, QB.g)(BB));
      for (const OB of JB) OB()
    }

    function zB() {
      const [BB, OB] = (0, YB.useState)(MB);
      return (0, YB.useEffect)((() => {
        const BB = () => {
          OB(MB())
        };
        return BB(), GB = BB, JB.add(GB), () => {
          JB.delete(GB)
        };
        var GB
      }), []), BB
    }
  },
  34755: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      h: () => DB
    });
    var YB = GB(16);

    function DB(BB, OB) {
      return BB && !OB
    }

    function QB() {
      return DB(YB.c.get("isTouchScreen"), YB.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5181: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      g: () => QB,
      k: () => DB
    });
    let YB = null;

    function DB(BB) {
      YB = BB
    }

    function QB() {
      return YB
    }

    function oB(BB) {
      return "bloxd" === BB.site && !BB.isMobileApp && !BB.isTouchScreen
    }
  },
  34717: (BB, OB, GB) => {
    function YB(BB, OB) {
      return BB && !OB
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  34737: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(1308);

    function DB() {
      var BB, OB;
      return null !== (BB = null === (OB = screen.orientation) || void 0 === OB ? void 0 : OB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const QB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && DB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = DB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, YB.kq)(new Error("Game view size held for 60 s"))
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
        let OB = !1;
        return () => {
          if (OB && this.isHeld()) return null;
          const GB = BB();
          return OB ||= null !== GB, GB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  34683: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => RB,
      e: () => JB,
      f: () => qB,
      g: () => pB
    });
    var YB = GB(162),
      DB = GB(1262),
      QB = GB(1186),
      oB = GB(1121),
      jB = GB(1813);
    const yB = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function JB(BB) {
      return yB[BB]
    }

    function MB(BB) {
      return (0, jB.b)(BB) ? "outdated" : BB instanceof YB.d ? 429 === BB.httpCode ? "busy" : "server" : "offline"
    }

    function PB(BB, OB, GB) {
      return (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${QB.clientSideServerUrls.indexUrl}${OB}`, GB, {
        retries: 3
      }, BB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to change name:", OB, BB), {
        outcome: "failed",
        failure: MB(BB)
      })))
    }

    function zB(BB) {
      return "outcome" in BB && "failed" === BB.outcome
    }

    function lB(BB) {
      return console.error("Error when trying to get with new name from DB", BB), {
        outcome: "refused",
        message: BB
      }
    }
    async function pB(BB) {
      const OB = await PB(BB, "/index/name/random", {});
      return zB(OB) ? OB : "err" in OB ? lB(OB.err) : (BB.setPlayerName(OB.name), {
        outcome: "changed",
        name: OB.name
      })
    }
    async function qB(BB, OB) {
      const GB = await PB(BB, "/index/name/update", {
        name: OB
      });
      return zB(GB) ? GB : "err" in GB ? lB(GB.err) : GB.nameExists ? {
        outcome: "taken"
      } : (BB.setPlayerName(OB), {
        outcome: "changed",
        name: OB
      })
    }

    function ZB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const YB = 1 === OB ? 1 : 10 ** (OB - 1),
        QB = String(YB + Math.floor(GB() * (10 ** OB - YB)));
      return `${BB.slice(0,DB.l-OB)}${QB}`
    }
    const NB = [1, 2, 3, 4];
    async function RB(BB, OB) {
      const GB = await qB(BB, OB);
      if ("taken" !== GB.outcome) return GB;
      for (const YB of NB) {
        const GB = ZB(OB, YB),
          DB = await qB(BB, GB);
        if ("taken" !== DB.outcome) return DB
      }
      return {
        outcome: "taken"
      }
    }
  },
  34722: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => yB
    });
    var YB = GB(16);
    const DB = 24,
      QB = "farNametags",
      oB = 1e5;

    function jB() {
      var BB;
      return null === (BB = YB.c.get("showDistantNametags")) || void 0 === BB || BB
    }

    function yB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(QB),
          OB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(OB) && OB >= 0 ? Math.min(OB, oB) : null
      }()) && void 0 !== BB ? BB : jB() ? 0 : DB
    }
  },
  34746: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      e: () => PB,
      i: () => MB
    });
    var YB = GB(258),
      DB = GB(92),
      QB = GB(118),
      oB = GB(116),
      jB = GB(656);
    const yB = new Set(["mali_bifrost"]);

    function JB() {
      if (jB.f) return;
      const BB = (0, DB.pageOperatingSystem)();
      if ("android" !== BB && "windows" !== BB || (0, jB.c)("webgl_default")) return;
      if ("windows" === BB) return BB => "qualcomm" === (0, DB.normaliseGpuVendor)((0, oB.e)(BB).vendor);
      const OB = (0, QB.o)(),
        GB = null === OB ? (0, YB.r)() : (0, YB.f)(OB.vendor, OB.renderer);
      return null !== GB && yB.has(GB) ? BB => (0, YB.m)((0, oB.e)(BB).vendor, GB) : void 0
    }

    function MB(BB, OB) {
      return BB ? () => !0 : OB()
    }
    async function PB(BB) {
      try {
        const OB = MB(BB, JB),
          GB = navigator.gpu;
        if (void 0 === OB || void 0 === GB) return !1;
        const YB = await (0, oB.r)(GB, {
          seed: !1,
          compatibility: OB
        });
        return "string" !== typeof YB && YB.compatibility && !(0, oB.k)(YB.adapter)
      } catch (OB) {
        return console.error("WebGPU compatibility-mode adapter request failed.", OB), !1
      }
    }
  },
  34815: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      g: () => oB
    });
    const YB = [{
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

    function DB(BB) {
      let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const OB = BB < 0 ? "-" : "",
            GB = Math.abs(BB);
          return GB >= 10 ? `${OB}${GB.toFixed(1).replace(/\.0$/,"")}` : `${OB}${GB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        OB = BigInt(Math.floor(BB))
      } else OB = BB;
      const DB = OB < 0n ? -OB : OB,
        QB = OB < 0n ? "-" : "",
        oB = DB.toString();
      if (oB.length <= GB) return `${QB}${oB}`;
      const jB = 3 * Math.floor((oB.length - 1) / 3);
      if (jB < 3) return `${QB}${oB}`;
      if (jB > 3 * YB.length) {
        const BB = oB[0],
          OB = oB.slice(1, 3).replace(/0+$/, "");
        return `${QB}${OB?`${BB}.${OB}`:BB}e${oB.length-1}`
      }
      const {
        threshold: yB,
        suffix: JB
      } = YB[YB.length - jB / 3], MB = DB / yB, PB = Number(1000n * (DB % yB) / yB), zB = Number(MB) + PB / 1e3;
      let lB;
      return lB = zB >= 100 ? Math.floor(zB).toString() : zB >= 10 ? zB.toFixed(1).replace(/\.0$/, "") : zB.toFixed(2).replace(/\.?0+$/, ""), `${QB}${lB}${JB}`
    }
    const QB = YB.map((BB => {
      let {
        threshold: OB,
        suffix: GB
      } = BB;
      return {
        threshold: Number(OB),
        suffix: GB
      }
    })).filter((BB => {
      let {
        threshold: OB
      } = BB;
      return Number.isFinite(OB)
    }));

    function oB(BB) {
      const OB = Math.abs(BB),
        GB = BB < 0 ? "-" : "";
      for (const {
          threshold: YB,
          suffix: DB
        }
        of QB)
        if (OB >= YB) {
          const BB = OB / YB;
          if (BB >= 1e3) return `${GB}${OB.toExponential(2).replace("e+","e")}`;
          let QB;
          return QB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${GB}${QB}${DB}`
        } return `${GB}${OB}`
    }
  },
  34799: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      f: () => zB,
      g: () => PB,
      h: () => oB,
      i: () => JB,
      m: () => yB
    });
    var YB = GB(353);
    const DB = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      QB = {
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

    function oB(BB) {
      var OB;
      return null !== (OB = QB[BB]) && void 0 !== OB ? OB : {
        translationKey: ""
      }
    }
    const jB = {
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

    function yB(BB) {
      return DB.includes(BB)
    }

    function JB(BB) {
      var OB;
      return !0 === (null === BB || void 0 === BB || null === (OB = BB.customAttributes) || void 0 === OB ? void 0 : OB.cannotEnchant)
    }

    function MB(BB, OB) {
      const {
        max: GB
      } = jB[BB].at(-1);
      return OB <= GB
    }

    function PB(BB) {
      const OB = Math.sin(BB / 80),
        GB = BB => {
          if (BB <= 0) return 0;
          if (BB > 1) return 1;
          let OB = 0;
          const GB = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let YB = 0; YB < GB.length; YB++) {
            OB += (YB % 2 === 0 ? 1 : -1) * GB[YB] * Math.pow(BB, 2 + YB) / (2 + YB)
          }
          return 72 * OB
        },
        YB = .3 - .78 * OB,
        DB = .5 - .78 * OB,
        QB = .6 - .7 * OB,
        oB = .8 - .6 * OB;
      let jB = GB(YB),
        yB = GB(DB) - jB,
        JB = GB(QB) - yB - jB,
        MB = GB(oB) - JB - yB - jB;
      YB < .041 && (yB /= 1 - jB, JB /= 1 - jB, MB /= 1 - jB, jB = 0), DB < .041 && (jB /= 1 - yB, JB /= 1 - yB, MB /= 1 - yB, yB = 0), QB < .041 && (jB /= 1 - JB, yB /= 1 - JB, MB /= 1 - JB, JB = 0), oB < .041 && (jB /= 1 - MB, yB /= 1 - MB, JB /= 1 - MB, MB = 0);
      return {
        commonProb: jB,
        uncommonProb: yB,
        rareProb: JB,
        epicProb: MB,
        legendaryProb: 1 - (MB + JB + yB + jB)
      }
    }

    function zB(BB, OB) {
      const {
        min: GB,
        max: DB
      } = jB[BB][OB], QB = YB.b.sampleUniformIntDistribution(GB, DB, "includeMax");
      return {
        ...PB(QB),
        level: QB
      }
    }
  },
  34769: () => {},
  34842: () => {},
  13542: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14703: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16057: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16603: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);