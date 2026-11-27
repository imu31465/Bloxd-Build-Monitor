export const id = 92;
export const ids = [92, 220];
export const modules = {
  35024: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      EverythingMenu: () => XV
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1270),
      qR = GR(1468),
      iR = GR(2278),
      fR = GR(1590),
      VR = GR(1179),
      KR = GR(1378);

    function wR(RR) {
      let {
        items: JR,
        link: GR,
        onClick: yR,
        selectedItemId: tR,
        className: wR,
        padStartsOnTab: rR = !0
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), aR = (0, VR.h)(), LR = [];
      for (const uR of JR) {
        var nR;
        const RR = LR[LR.length - 1];
        var UR;
        if (RR && RR.title === (null !== (nR = uR.section) && void 0 !== nR ? nR : null)) RR.items.push(uR);
        else LR.push({
          title: null !== (UR = uR.section) && void 0 !== UR ? UR : null,
          items: [uR]
        })
      }
      return (0, KR.jsxs)("div", {
        className: uR()("MenuSideBarBody", wR),
        "data-pad-tabs": "2",
        children: [LR.map(((RR, JR) => {
          var GR;
          return (0, KR.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [RR.title && (0, KR.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: eR(RR.title)
            }), RR.items.map((RR => {
              var JR;
              const GR = !!RR.iconElement || !!RR.faIcon;
              return (0, KR.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": tR === RR.id ? "true" : void 0,
                "data-pad-default-focus": rR && tR === RR.id || void 0,
                className: uR()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: tR === RR.id
                }),
                onClick: () => {
                  yR(RR.id)
                },
                children: [GR && (0, KR.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (JR = RR.iconElement) && void 0 !== JR ? JR : (0, KR.jsx)(qR.d, {
                    name: RR.faIcon
                  })
                }), (!aR || !GR) && (0, KR.jsx)("div", {
                  children: eR(RR.title)
                }), RR.redDot && (0, KR.jsx)(iR.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, RR.id)
            }))]
          }, null !== (GR = RR.title) && void 0 !== GR ? GR : JR)
        })), GR && (0, KR.jsxs)("div", {
          ...(0, fR.bb)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: GR.onClick,
          children: [(0, KR.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, KR.jsx)(qR.d, {
              name: GR.faIcon
            })
          }), (0, KR.jsx)("div", {
            children: eR(GR.title)
          }), (0, KR.jsx)(qR.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var rR = GR(3037),
      eR = GR(1196),
      aR = GR(3465),
      LR = GR(4352),
      nR = GR(103),
      UR = GR(2134),
      WR = GR(3204),
      AR = GR(3210),
      CR = GR(1867),
      XR = GR(1465),
      MR = GR(6037),
      BR = GR(25),
      lR = GR(35029);

    function pR(RR) {
      let {
        setApplySettingsCallback: JR
      } = RR;
      const {
        clientEscMenuOptions: GR
      } = (0, BR.o)(["clientEscMenuOptions"]), [tR, uR] = (0, yR.useState)(!1), [ZR, qR] = (0, yR.useState)(!1), [iR, VR] = (0, yR.useState)(6400), [wR, rR] = (0, yR.useState)(3600), [eR, aR] = (0, yR.useState)(!1), [LR, nR] = (0, yR.useState)(!1);

      function UR(RR) {
        const JR = "screenshot" === RR ? qR : uR;
        JR(!0);
        const GR = eR ? "normals" : LR ? "depth" : null;
        lR.devTools.downloadScene(RR, {
          width: iR,
          height: wR,
          colouring: GR
        }).catch((RR => {
          console.error("Couldn't download the scene", RR)
        })).finally((() => {
          JR(!1)
        }))
      }
      return (0, KR.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, KR.jsx)(MR.e, {
          label: "Disable Ambient Occlusion",
          checked: GR.disableAmbientOcclusion,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              disableAmbientOcclusion: RR
            }), JR((() => MR.m))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), lR.devTools.supports("ambientLight") && (0, KR.jsx)(MR.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: GR.ambientLightIntensity,
          onChange: RR => {
            lR.devTools.setAmbientLightIntensity(RR).then((() => {
              BR.d.setClientEscMenuOptions({
                ambientLightIntensity: RR
              })
            })).catch((RR => {
              console.error("Couldn't set the ambient light", RR)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), lR.devTools.supports("weaponRaycasts") && (0, KR.jsx)(MR.e, {
          label: "Show Weapon Raycasts",
          checked: GR.showWeaponRaycasts,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              showWeaponRaycasts: RR
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), lR.devTools.supports("sceneDownload") && (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, KR.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, KR.jsx)(MR.e, {
              label: "Apply normal-based coloring",
              checked: eR,
              onClick: RR => {
                aR(RR), RR && nR(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, KR.jsx)(MR.e, {
              label: "Apply depth-based coloring",
              checked: LR,
              onClick: RR => {
                nR(RR), RR && aR(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, KR.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, KR.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, KR.jsx)(CR.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (RR, JR) => {
                  const GR = parseInt(RR) || 6400;
                  VR(GR)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: iR.toString()
              }), (0, KR.jsx)("span", {
                children: "X"
              }), (0, KR.jsx)(CR.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (RR, JR) => {
                  const GR = parseInt(RR) || 3600;
                  rR(GR)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: wR.toString()
              })]
            }), (0, KR.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, KR.jsxs)(fR.g, {
                onClick: () => {
                  UR("screenshot")
                },
                disabled: ZR,
                children: [ZR && (0, KR.jsx)(XR.d, {}), "Download Screenshot"]
              }), (0, KR.jsxs)(fR.g, {
                onClick: () => {
                  UR("glb")
                },
                disabled: tR,
                children: [tR && (0, KR.jsx)(XR.d, {}), "Download GLB"]
              })]
            })]
          }), (0, KR.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var gR = GR(134),
      bR = GR(1201),
      vR = GR(35035),
      OR = GR(4155),
      xR = GR(1663),
      NR = GR(1359),
      DR = GR(1328),
      HR = GR(2248),
      oR = GR(1647),
      cR = GR(377),
      PR = GR(645),
      IR = GR(3314),
      mR = GR(3322);
    const zR = "store:retiredRankEnds";

    function SR(RR) {
      let {
        until: JR,
        className: GR
      } = RR;
      const {
        t: yR,
        selectedLanguage: tR
      } = (0, ZR.A)(), uR = new Date(JR).toLocaleDateString((0, ZR.n)(tR.code, zR), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, KR.jsx)("span", {
        className: GR,
        children: yR(zR, {
          date: uR
        })
      })
    }
    var jR = GR(3217),
      dR = GR(4186),
      ER = GR(4180),
      YR = GR(216),
      kR = GR(1803),
      QR = GR(1343),
      FR = GR(4198);

    function TR(RR, JR, GR) {
      const yR = PR.r[(0, PR.l)(PR.r, JR)],
        tR = void 0 === yR ? void 0 : (0, YR.b)(RR.entitlements, yR.entitlementId);
      return void 0 === tR || null === tR.expiresAt || (0, ER.g)(tR) <= GR ? null : tR.willRenew && null === tR.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(tR.expiresAt, GR)
      } : {
        renews: !1,
        at: (0, ER.g)(tR)
      }
    }
    var sR = GR(4171),
      hR = GR(4175);
    const RJ = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function JJ(RR) {
      return RR instanceof dR.d && "storeUnavailable" === RR.code ? (console.warn("Billing: the store didn't take a subscription change:", RR), "store:subscriptionStoreUnavailable") : RR instanceof dR.d && "subscriptionActionUnavailable" === RR.code ? (console.warn("Billing: a subscription action billing no longer offers:", RR), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", RR), "store:subscriptionChangeFailed")
    }
    async function GJ() {
      try {
        var RR;
        const {
          offering: JR
        } = await (0, hR.getBillingClient)().getOfferings((0, IR.l)(PR.h.id).placementId);
        return null !== (RR = null === JR || void 0 === JR ? void 0 : JR.packages.find(sR.isPricedPackage)) && void 0 !== RR ? RR : null
      } catch (JR) {
        return console.warn("Billing: loading the rank plan's price failed:", JR), null
      }
    }

    function yJ(RR) {
      const {
        userContext: JR
      } = (0, eR.d)(), {
        superRankInfo: GR
      } = JR, tR = (0, jR.usePurchasesAllowed)(), uR = (0, cR.wc)(GR), ZR = RR && tR && (uR || JR.ranksMayChange), [qR, iR] = (0, yR.useState)(null), [fR, VR] = (0, yR.useState)(!1), [KR, wR] = (0, yR.useState)(!1), [rR, aR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        if (!ZR) return;
        let RR = !1;
        const GR = () => {
          Promise.all([(0, hR.getBillingClient)().getSubscriptions(), GJ()]).then((GR => {
            let [yR, tR] = GR;
            RR || (iR({
              for: JR,
              answer: yR,
              pkg: tR
            }), VR(!1))
          }), (JR => {
            console.error("Billing: loading the player's subscriptions failed:", JR), RR || VR(!0)
          }))
        };
        GR();
        const yR = kR.e.addRefetchListener("billing", GR);
        return () => {
          RR = !0, yR()
        }
      }), [ZR, JR]);
      const LR = ZR && uR && null !== qR && qR.for === JR ? function(RR, JR, GR, yR) {
        var tR;
        const {
          customerInfo: uR,
          actions: ZR
        } = RR, qR = PR.r[(0, PR.l)(PR.r, JR)], iR = void 0 === qR ? void 0 : (0, YR.b)(uR.entitlements, qR.entitlementId), fR = TR(uR, JR, yR);
        if (void 0 === iR || null === fR) return null;
        const VR = Object.entries(uR.subscriptions).find((RR => {
          let [, JR] = RR;
          return JR.productId === iR.productId && JR.store === iR.store && !(0, ER.m)(JR.status)
        }));
        if (void 0 === VR) return null;
        const [KR, wR] = VR, rR = (null === GR || void 0 === GR ? void 0 : GR.productId) === wR.productId && wR.store === (0, jR.getBillingStore)();
        return {
          key: KR,
          tierId: JR,
          info: wR,
          actions: null !== (tR = (0, YR.b)(ZR, KR)) && void 0 !== tR ? tR : RJ,
          date: fR,
          pkg: rR ? GR : null
        }
      }(qR.answer, GR.tier, qR.pkg, Date.now()) : null;
      return {
        subscription: LR,
        loadFailed: ZR && uR && fR,
        busy: KR,
        errorKey: rR,
        change: async function(RR) {
          if (null === LR || KR) return;
          wR(!0), aR(null);
          const GR = (0, hR.getBillingClient)();
          try {
            const yR = await ("cancel" === RR ? GR.cancelSubscription(LR.key) : GR.resumeSubscription(LR.key));
            iR({
              for: JR,
              answer: yR,
              pkg: LR.pkg
            }), (0, FR.d)()
          } catch (yR) {
            aR(JJ(yR))
          } finally {
            wR(!1)
          }
        },
        openManagePage: async function() {
          if (null === LR || KR) return;
          const RR = window.open("", "_blank");
          wR(!0), aR(null);
          try {
            const JR = await (0, hR.getBillingClient)().subscriptionManagementUrl(LR.key, QR.g.get().getCurrentLanguageCode());
            null === RR ? window.open(JR, "_blank", "noopener") : (RR.opener = null, RR.location.href = JR)
          } catch (JR) {
            null === RR || void 0 === RR || RR.close(), aR(JJ(JR))
          } finally {
            wR(!1)
          }
        }
      }
    }
    var tJ = GR(1493),
      uJ = GR(4227);

    function ZJ(RR, JR) {
      return new Date(RR).toLocaleDateString(JR, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function qJ(RR) {
      let {
        showing: JR,
        className: GR
      } = RR;
      const {
        t: yR,
        selectedLanguage: tR
      } = (0, ZR.A)(), {
        subscription: iR,
        loadFailed: VR,
        busy: wR,
        errorKey: rR,
        change: eR,
        openManagePage: aR
      } = yJ(JR);
      if (VR) return (0, KR.jsx)("div", {
        className: uR()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", GR),
        children: yR("store:subscriptionLoadFailed")
      });
      if (null === iR) return null;
      const {
        date: LR,
        info: nR,
        actions: UR,
        pkg: WR
      } = iR, AR = LR.renews ? "store:renewsOn" : "store:endsOn", CR = ZJ(LR.at, (0, ZR.n)(tR.code, AR)), XR = yR((0, IR.l)(iR.tierId).nameKey), MR = null !== nR.billingIssueDetectedAt;
      return (0, KR.jsxs)("div", {
        className: uR()("RankSubscriptionManage", GR),
        children: [(0, KR.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [yR(AR, {
            date: CR
          }), LR.renews && null !== WR && (0, jR.subscriptionsSold)() && (0, KR.jsxs)(KR.Fragment, {
            children: [" \xb7 ", yR("store:pricePerMonth", {
              price: (0, uJ.d)(WR)
            })]
          })]
        }), MR && (0, KR.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, KR.jsx)(qR.d, {
            name: "triangle-exclamation"
          }), " ", yR("store:paymentFailing", {
            rank: XR
          })]
        }), (0, KR.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [UR.manage && (0, KR.jsx)(fR.i, {
            disabled: wR,
            onClick: () => {
              aR()
            },
            children: yR(MR ? "store:updatePayment" : "payments:manageSubscription")
          }), UR.resume && (0, KR.jsx)(fR.g, {
            loading: wR,
            onClick: () => {
              eR("resume")
            },
            children: yR("store:resumeSubscription")
          }), UR.cancel && (0, KR.jsx)(fR.M, {
            loading: wR,
            onClick: () => {
              (async function(RR, JR, GR) {
                const yR = Date.now() >= RR.info.currentPeriodEnd;
                return !0 === await tJ.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: yR ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: JR
                    },
                    subtitle: {
                      rank: JR,
                      date: GR
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(iR, XR, ZJ(nR.currentPeriodEnd, (0, ZR.n)(tR.code, "store:cancelKeepsUntil"))).then((RR => {
                RR && eR("cancel")
              }))
            },
            children: yR("store:cancelSubscription")
          })]
        }), null !== rR && (0, KR.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: yR(rR)
        })]
      })
    }
    var iJ = GR(3213),
      fJ = GR(3810),
      VJ = GR(1825);
    async function KJ() {
      try {
        return function(RR) {
          const JR = new Map;
          for (const {
              store: GR,
              status: yR,
              autoRenewStatus: tR,
              managementUrl: uR
            }
            of Object.values(RR.subscriptions)) !(0, ER.i)(GR) || (0, ER.m)(yR) || "willNotRenew" === tR || JR.has(GR) || JR.set(GR, null !== uR && void 0 !== uR ? uR : ER.o[GR]);
          return Array.from(JR, (RR => {
            let [JR, GR] = RR;
            return {
              store: JR,
              managementUrl: GR
            }
          }))
        }(await (0, VJ.k)((0, hR.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (RR) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", RR), null
      }
    }

    function wJ(RR) {
      const {
        t: JR,
        selectedLanguage: GR
      } = (0, ZR.A)(), {
        userContext: tR
      } = (0, eR.d)(), {
        superRankInfo: uR
      } = tR, qR = (0, jR.usePurchasesAllowed)(), iR = RR && ((0, cR.wc)(uR) || tR.ranksMayChange) && qR, {
        accountId: fR,
        data: VR
      } = (0, fJ.h)(FR.c, iR);
      if ((0, yR.useEffect)((() => {
          if (iR) return FR.c.watchAccount(), kR.e.addRefetchListener("billing", (RR => {
            "reconnected" === RR ? FR.c.refreshAfterReconnect() : FR.c.refresh()
          }))
        }), [iR]), !iR || !(0, cR.wc)(uR) || null === VR || fR !== tR.whamm) return null;
      const KR = TR(VR, uR.tier, Date.now());
      if (null === KR) return null;
      const wR = KR.renews ? "store:renewsOn" : "store:endsOn",
        rR = (0, ZR.f)(GR.code, wR, KR.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        aR = (0, jR.getBillingStore)(),
        LR = null !== aR && (0, ER.i)(aR) ? function(RR, JR) {
          var GR;
          const yR = Object.values(RR.subscriptions).find((RR => RR.store === JR && !(0, ER.m)(RR.status)));
          return void 0 === yR ? null : null !== (GR = yR.managementUrl) && void 0 !== GR ? GR : ER.o[JR]
        }(VR, aR) : null;
      return {
        text: JR(wR, {
          date: rR
        }),
        manageUrl: LR
      }
    }
    var rJ = GR(1501),
      eJ = GR(1304),
      aJ = GR(5766),
      LJ = GR(1618),
      nJ = GR(5013),
      UJ = GR(3410);

    function WJ(RR) {
      let {
        showing: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        data: yR,
        failed: tR
      } = (0, fJ.h)(nJ.g, JR);
      return 0 === (null === yR || void 0 === yR ? void 0 : yR.length) || null === yR && !tR ? null : (0, KR.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, KR.jsx)("div", {
          className: "AccountSettingsLabel",
          children: GR("paymentHistory:title")
        }), null === yR && tR && (0, KR.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: GR("paymentHistory:loadFailed")
        }), null !== yR && (0, KR.jsx)("ul", {
          className: "PaymentHistoryList",
          children: yR.map((RR => (0, KR.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, KR.jsx)(UJ.d, {
              entry: RR
            }), (0, KR.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, KR.jsx)("div", {
                children: (0, UJ.i)(GR, RR)
              }), (0, KR.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(RR.at).toLocaleDateString(), "number" === typeof RR.orderId && ` \xb7 ${GR("paymentHistory:order",{orderId:RR.orderId})}`]
              })]
            })]
          }, (0, nJ.e)(RR))))
        })]
      })
    }
    var AJ = GR(3225),
      CJ = GR(2344);

    function XJ() {
      (0, CJ.e)({
        titleKey: "payments:logInToRestore"
      })
    }

    function MJ(RR) {
      let {
        status: JR
      } = RR;
      switch (JR) {
        case "restored":
          return (0, FR.d)(), {
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

    function BJ() {
      const RR = (0, hR.usePageBillingClient)(),
        {
          userContext: JR
        } = (0, eR.d)(),
        [GR, tR] = (0, yR.useState)(!1),
        [uR, ZR] = (0, yR.useState)(null);
      return {
        restoring: GR,
        notice: uR,
        restore: () => {
          JR.isLoggedIn() ? (tR(!0), ZR(null), RR.restorePurchases().then(MJ, (RR => RR instanceof dR.d && "loginRequired" === RR.code ? (XJ(), null) : function(RR) {
            return RR instanceof dR.d && "storeBusy" === RR.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", RR), (0, FR.d)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(RR))).then(ZR).finally((() => {
            tR(!1)
          }))) : XJ()
        }
      }
    }

    function lJ(RR) {
      let {
        restoring: JR,
        notice: GR,
        restore: tR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)(), iR = (0, jR.usePurchasesAllowed)(), VR = (0, jR.getBillingStore)(), wR = (0, yR.useRef)(null);
      return (0, yR.useEffect)((() => {
        var RR;
        null === (RR = wR.current) || void 0 === RR || RR.scrollIntoView({
          block: "nearest"
        })
      }), [GR]), iR && (0, AJ.e)(VR) ? (0, KR.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, KR.jsx)(fR.i, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: JR,
          onClick: tR,
          children: qR("payments:restorePurchases")
        }), null !== GR && (0, KR.jsx)("div", {
          ref: wR,
          className: uR()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: GR.failed
          }),
          children: qR(GR.key)
        })]
      }) : null
    }
    var pJ = GR(2098),
      gJ = GR(1341),
      bJ = GR(1282),
      vJ = GR(1444),
      OJ = GR(359),
      xJ = GR(3604);
    const NJ = {
      appStore: {
        name: "App Store",
        ...OJ.Vb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...OJ.Vb.googlePlay
      },
      discord: {
        name: "Discord",
        ...OJ.Vb.discord
      }
    };

    function DJ(RR) {
      let {
        warning: JR,
        subscriptions: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return null !== GR && 0 === GR.length ? (0, KR.jsx)(KR.Fragment, {
        children: yR(JR)
      }) : (0, KR.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [yR(JR), null === GR && (0, KR.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: yR("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== GR && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: yR("auth:deleteAccountStoreSubscriptions")
          }), (0, KR.jsx)(xJ.d, {
            className: "DeleteAccountSubtitleLinks",
            links: GR.map((RR => {
              let {
                store: JR,
                managementUrl: GR
              } = RR;
              return {
                ...NJ[JR],
                url: GR
              }
            }))
          })]
        })]
      })
    }
    var HJ = GR(5482);

    function oJ(RR) {
      let {
        showing: JR
      } = RR;
      const {
        userContext: GR,
        isUserContextUpdating: tR
      } = (0, eR.d)(), {
        t: uR
      } = (0, ZR.A)(), [qR, iR] = (0, yR.useState)(!1), [VR, wR] = (0, yR.useState)(null), rR = (0, yR.useRef)(JR);
      (0, yR.useEffect)((() => (rR.current = JR, () => {
        rR.current = !1
      })), [JR]);
      const aR = tR || qR;
      return (0, KR.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, KR.jsxs)(fR.M, {
          onClick: async function() {
            if (!qR) {
              iR(!0);
              try {
                const RR = await async function() {
                  const [RR, JR] = await Promise.all([(0, pJ.c)(GR.availableUserContextTypes) ? KJ() : [], PJ(GR)]);
                  if (!rR.current) return gJ.e.ok();
                  const yR = (0, NR.e)(GR.getPlayerName(), !nR.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await tJ.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: yR
                        }
                      },
                      subtitle: (0, KR.jsx)(DJ, {
                        warning: cJ(GR.isLoggedIn(), JR),
                        subscriptions: RR
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: JR ? uR("auth:deleteAccountTypedConfirm", {
                        playerName: yR
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return gJ.e.ok();
                  const tR = await (0, bR.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: BR.d.get("gameState")
                  }, {
                    retries: 3
                  }, GR.getMetricsCookies());
                  if (tR.error) return gJ.e.error(tR.error);
                  (0, gR.isDiscordClient)() && (await vJ.l.discordActivity()).exit("User deleted their account");
                  return HJ.e.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, bR.forgetStoredGuestAccount)(GR.whamm), (0, bR.forceGlobalSignOut)(!0), gJ.e.ok()
                }(), JR = RR.isError() ? RR.asError().message : null;
                wR(JR)
              } catch (RR) {
                console.error("Failed to delete account:", RR), wR(uR("auth:genericDeleteAccountError"))
              }
              iR(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: aR,
          children: [aR && (0, KR.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, KR.jsx)(XR.d, {})
          }), uR("auth:deleteAccount")]
        }), VR && (0, KR.jsx)("div", {
          className: "DeleteAccountError",
          children: VR
        })]
      })
    }

    function cJ(RR, JR) {
      return (0, gR.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : RR ? "auth:deleteAccountLossWarning" : JR ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function PJ(RR) {
      try {
        const {
          accountCreatedAt: JR
        } = await (0, VJ.k)(oR.c.getPlayerProfile(RR, {
          lowerCaseName: RR.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== JR && Date.now() - JR >= 7 * cR.i
      } catch (JR) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", JR), !0
      }
    }
    var IJ = GR(4939),
      mJ = GR(4949),
      zJ = GR(4945);

    function SJ(RR) {
      let {
        showing: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        data: yR,
        failed: tR
      } = (0, fJ.h)(IJ.d, JR), uR = null === yR ? null : (0, IJ.f)(yR);
      return (0, KR.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, KR.jsx)("div", {
          className: "AccountSettingsLabel",
          children: GR("settingsMenu:blockedAndIgnoredPlayers")
        }), null === uR && !tR && (0, KR.jsx)(XR.d, {}), null === uR && tR && (0, KR.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [GR("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, KR.jsx)(fR.g, {
            className: "SmallTextLight",
            onClick: () => {
              IJ.d.refresh()
            },
            children: GR("general:tryAgain")
          })]
        }), 0 === (null === uR || void 0 === uR ? void 0 : uR.length) && (0, KR.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: GR("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== uR && uR.length > 0 && (0, KR.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: uR.map((RR => {
            let {
              name: JR,
              exclusion: yR
            } = RR;
            const tR = zJ.i[yR];
            return (0, KR.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, KR.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: JR
              }), (0, KR.jsx)(fR.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, mJ.f)(tR, JR, {
                    chatMessage: null
                  })
                },
                children: GR(zJ.l[tR].text)
              })]
            }, JR)
          }))
        })]
      })
    }
    const jJ = (0, yR.memo)((function(RR) {
      var JR, GR;
      let {
        showing: tR,
        inGame: iR
      } = RR;
      const {
        t: VR,
        selectedLanguage: wR
      } = (0, ZR.A)(), {
        hideSocialLocationFrom: aR
      } = (0, BR.o)(["hideSocialLocationFrom"]), LR = (0, jR.usePurchasesAllowed)(), UR = BJ(), WR = (0, rR.b)(), {
        userContext: AR,
        isUserContextUpdating: lR
      } = (0, eR.d)(), [pR, zR] = (0, yR.useState)(null !== (JR = AR.getPlayerName()) && void 0 !== JR ? JR : ""), [dR, ER] = (0, yR.useState)(null), {
        purchasing: YR,
        outcome: kR,
        purchase: QR
      } = (0, OR.c)("/super-rank-welcome"), FR = (0, cR.ic)((0, ZR.n)(wR.code, "general:timeLeft"), AR.superRankInfo), TR = null === (GR = wJ(tR)) || void 0 === GR ? void 0 : GR.text, sR = Date.now(), hR = (0, mR.i)(sR), RJ = (0, IR.v)(sR), JJ = (0, mR.g)(sR), GJ = (0, IR.l)(hR.id), yJ = JJ && (0, KR.jsxs)(fR.n, {
        className: "AccountSettingsSuperRankProlong",
        onClick: () => {
          (0, iJ.m)({
            mode: "gift",
            source: "accountSettings",
            openItem: "superRank"
          })
        },
        children: [(0, KR.jsx)(qR.d, {
          name: "bolt"
        }), VR(GJ.giftKey)]
      }), tJ = (0, IR.h)(AR.getPlayerRanks(), sR), uJ = (0, IR.o)(AR.superRankInfo, sR), ZJ = hR.id !== PR.t.id, fJ = ZJ && !tJ && (0, cR.wc)(AR.superRankInfo) ? AR.superRankInfo : null, VJ = FR ? VR("general:timeLeft", {
        time: FR
      }) : !(ZJ && LR) && TR, [KJ, nJ] = (0, yR.useState)(!1), [UJ, AJ] = (0, yR.useState)(!1), CJ = (0, yR.useRef)(null), XJ = (0, yR.useRef)(null), MJ = (0, HR.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), pJ = null === MJ, gJ = null !== MJ && void 0 !== MJ ? MJ : [], bJ = AR !== bR.NULL_USER_CONTEXT && !AR.isLoggedIn(), vJ = bJ && 0 !== (null === MJ || void 0 === MJ ? void 0 : MJ.length), [OJ, xJ] = (0, yR.useState)([]), [NJ, DJ] = (0, yR.useState)(!1), HJ = AR.playerHasRank("youtuber"), cJ = (0, yR.useCallback)((() => oR.c.getPlayerProfile(AR, {
        lowerCaseName: AR.getPlayerName().toLowerCase()
      }).then((RR => {
        xJ(RR.socialLinks)
      })).catch((RR => {
        console.error("Failed to refresh social links", RR)
      }))), [AR]);

      function PJ(RR) {
        RR !== pR && ((0, NR.m)(RR) ? (RR = (0, NR.q)(RR), ER(VR("homePage:nameCharacters"))) : ER(null), CJ.current && (CJ.current.value = RR), zR(RR))
      }
      return (0, yR.useEffect)((() => (!0 === tR ? (clearInterval(XJ.current), XJ.current = setInterval(WR, 1e3)) : clearInterval(XJ.current), () => {
        clearInterval(XJ.current)
      })), [tR, WR]), (0, yR.useEffect)((() => {
        var RR;
        zR(null !== (RR = AR.getPlayerName()) && void 0 !== RR ? RR : "")
      }), [AR]), (0, yR.useEffect)((() => {
        if (!tR || !HJ || lR) return;
        let RR = !1;
        return DJ(!0), xJ([]), oR.c.getPlayerProfile(AR, {
          lowerCaseName: AR.getPlayerName().toLowerCase()
        }).then((JR => {
          RR || xJ(JR.socialLinks)
        })).catch((RR => {
          console.error("Failed to load social links", RR)
        })).finally((() => {
          RR || DJ(!1)
        })), () => {
          RR = !0
        }
      }), [tR, HJ, lR, AR]), (0, KR.jsxs)("div", {
        className: uR()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: iR
        }),
        children: [iR && (0, KR.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: VR("settingsMenu:accountSettingsInGameWarning")
        }), (0, KR.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, KR.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [VR("homePage:discordNamePopupTitle"), (0, KR.jsxs)(xR.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, DR.d)({
                name: AR.getPlayerName()
              }),
              onClick: () => {
                BR.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, KR.jsx)(qR.d, {
                name: "arrow-up-right-from-square"
              }), " ", VR("profileCard:viewProfile")]
            })]
          }), (0, KR.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, KR.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [nR.featureFlags.canChangeName && (0, KR.jsx)(CR.b, {
                className: "EnterName",
                placeholderText: VR("homePage:enterName"),
                maxLength: NR.i,
                defaultValue: pR,
                onValueChange: RR => {
                  PJ(RR)
                },
                forcedText: KJ || !nR.featureFlags.canChangeName ? pR : null,
                blurOnEnter: !0,
                domRef: CJ
              }), (0, KR.jsx)(fR.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  PJ((0, NR.g)())
                },
                children: (0, KR.jsx)(qR.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !nR.featureFlags.canChangeName && (0, KR.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, NR.e)(pR, !nR.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, KR.jsx)(fR.g, {
              className: "ChooseNameButton",
              disabled: KJ || pR === AR.getPlayerName(),
              onClick: () => {
                pR.length < NR.j ? ER(VR("homePage:changeNameMinLengthError", {
                  length: NR.j
                })) : pR.length > NR.i ? ER(VR("homePage:changeNameMaxLengthError", {
                  length: NR.i
                })) : (nJ(!0), ER(null), (0, vR.f)(AR, pR).then((RR => {
                  nJ(!1), "taken" === RR.outcome ? ER(VR("homePage:nameTaken")) : "refused" === RR.outcome ? ER(RR.message) : "failed" === RR.outcome && ER(VR((0, vR.e)(RR.failure)))
                })))
              },
              children: VR("general:choose")
            })]
          }), dR && (0, KR.jsx)("div", {
            className: "ChooseAccNameError",
            children: dR
          })]
        }), (0, KR.jsx)(MR.e, {
          label: (() => {
            if ((0, eJ.k)(aR)) {
              const RR = (0, ZR.n)(wR.code, "general:timeLeft"),
                JR = (0, cR.Z)(RR, Date.now(), aR + eJ.j);
              return `${VR("settingsMenu:hideSocialLocation")} (${VR("general:timeLeft",{time:JR})})`
            }
            return VR("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const RR = !(0, eJ.k)(aR);
            (0, LJ.reportAnalyticsClick)({
              id: "social.hide_location",
              value: RR ? "on" : "off"
            }), AJ(!0), oR.c.setHideSocialLocation(AR, RR).then((() => {
              BR.d.set({
                hideSocialLocationFrom: RR ? Date.now() : null
              })
            })).finally((() => {
              AJ(!1)
            }))
          },
          checked: (0, eJ.k)(aR),
          disabled: UJ
        }), HJ && (0, KR.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, KR.jsx)("div", {
            className: "AccountSettingsLabel",
            children: VR("settingsMenu:socialLinks")
          }), NJ && (0, KR.jsx)(XR.d, {}), !NJ && (0, KR.jsx)(aJ.e, {
            socialLinks: OJ,
            editable: !0,
            userContext: AR,
            onLinksUpdated: cJ
          })]
        }), (0, KR.jsxs)("div", {
          className: "SettingBox",
          children: [(0, KR.jsx)("div", {
            className: "AccountSettingsLabel",
            children: VR(vJ ? "auth:loginOrSwitchAccount" : "auth:login")
          }), pJ && (0, KR.jsx)(XR.d, {}), !pJ && 0 === gJ.length && (0, KR.jsx)("div", {
            className: "NoLoginOptions",
            children: VR("auth:noLoginOptions")
          }), !pJ && gJ.length > 0 && "crazygames" !== gR.siteUsed && (0, KR.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: gJ
          }), !pJ && gJ.length > 0 && "crazygames" === gR.siteUsed && (0, KR.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [gJ[0], gJ.length > 1 && (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, KR.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: VR("auth:legacyLoginOptions")
                }), (0, KR.jsx)(rJ.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: VR("auth:legacyLoginOptionsInfo")
                })]
              }), (0, KR.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: gJ.slice(1)
              })]
            })]
          }), nR.featureFlags.useLogin && (null !== AR.loggedInInfo || AR.isLoggedIn()) && (0, KR.jsxs)(KR.Fragment, {
            children: [(0, KR.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, KR.jsxs)(fR.M, {
              onClick: () => {
                (0, bR.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, KR.jsx)(qR.d, {
                name: "right-from-bracket"
              }), VR("auth:signOut")]
            })]
          })]
        }), null !== fJ && (0, KR.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, KR.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, KR.jsx)(IR.g, {
              tierId: fJ.tier
            })
          }), (0, KR.jsx)(qJ, {
            showing: tR
          })]
        }), !tJ && LR && (0, KR.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, KR.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, KR.jsx)(IR.g, {
              tierId: hR.id
            })
          }), null !== uJ && (0, KR.jsx)(SR, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: uJ
          }), (0, KR.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, KR.jsxs)(fR.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, iJ.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, KR.jsx)(qR.d, {
                name: "bolt"
              }), VR(null !== uJ ? "store:upgradeToHyperRank" : GJ.getKey)]
            }), yJ]
          }), (0, KR.jsx)(lJ, {
            ...UR
          })]
        }), tJ && (0, KR.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, KR.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, KR.jsx)(IR.g, {
              tierId: hR.id
            }), VJ && (0, KR.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", VJ, ")"]
            })]
          }), ZJ && (0, KR.jsx)(qJ, {
            showing: tR
          }), LR && JJ && (0, KR.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, cR.wc)(AR.superRankInfo) && (0, KR.jsxs)(fR.n, {
              className: "AccountSettingsSuperRankProlong",
              loading: YR,
              onClick: () => {
                QR(RJ.id, null)
              },
              children: [(0, KR.jsx)(qR.d, {
                name: "bolt"
              }), VR("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: RJ.product.days,
                price: RJ.price
              })]
            }), yJ]
          }), kR && (0, KR.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: VR(kR.translationKey)
          }), (0, KR.jsx)(lJ, {
            ...UR
          })]
        }), (0, KR.jsx)(WJ, {
          showing: tR
        }), nR.featureFlags.useSocialFeatures && (0, KR.jsx)(SJ, {
          showing: tR
        }), (0, KR.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, KR.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, KR.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: VR(dJ(bJ, vJ))
            }), (0, gR.isDiscordClient)() && (0, KR.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: VR("auth:discordActivityKickWarning")
            }), (0, KR.jsx)(oJ, {
              showing: tR
            })]
          }), (0, KR.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: VR(bJ ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function dJ(RR, JR) {
      return RR ? JR ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var EJ = GR(35044),
      YJ = GR(4375),
      kJ = GR(1570),
      QJ = GR(2173),
      FJ = GR(10241),
      TJ = GR(35047);

    function sJ() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, QJ.i)("localPlayerAlive") ? (0, KR.jsx)(FJ.b, {
        icon: "camera-alt",
        title: RR("screenshotMode:title"),
        sub: RR("screenshotMode:entrySub"),
        onClick: TJ.e
      }) : null
    }
    var hJ = GR(35059);
    const RG = (0, yR.memo)((function(RR) {
        let {
          inGame: JR
        } = RR;
        const {
          t: GR,
          selectedLanguage: yR
        } = (0, ZR.A)(), {
          clientEscMenuOptions: tR,
          showDebugOverlay: uR,
          isTouchScreen: qR
        } = (0, BR.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), iR = (0, aR.f)("hideCoordinates");
        let fR = "settingsMenu:showCoordinates",
          VR = "settingsMenu:showChunkCoordinates";

        function wR(RR) {
          const JR = new Intl.DisplayNames([RR], {
            type: "language"
          }).of(RR);
          return JR.charAt(0).toUpperCase() + JR.slice(1)
        }
        return iR && (fR = "settingsMenu:showCoordinatesHidden", VR = "settingsMenu:showChunkCoordinatesHidden"), (0, KR.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [JR && nR.featureFlags.canUseInviteLinks && (0, KR.jsxs)("div", {
            className: "SettingBox",
            children: [(0, KR.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: GR("settingsMenu:inviteLink")
            }), (0, KR.jsx)(EJ.h, {})]
          }), (0, KR.jsxs)("div", {
            className: "SettingBox",
            children: [(0, KR.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: GR("settingsMenu:language")
            }), (0, KR.jsx)(YJ.e, {
              options: Object.entries(ZR.j).map((RR => {
                let [JR, GR] = RR;
                return {
                  label: (0, KR.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, KR.jsx)("img", {
                      src: GR.flagImg,
                      alt: "flag"
                    }), (0, KR.jsxs)("span", {
                      children: [wR(JR), " ", (0, KR.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", JR, ")"]
                      })]
                    })]
                  }),
                  value: JR
                }
              })),
              value: yR.code,
              onChange: RR => {
                QR.g.get().setCurrentLanguage(RR.value)
              }
            })]
          }), JR && qR && (0, hJ.b)() && (0, KR.jsx)(sJ, {}), !(0, nR.isMobileApp)() && (0, kJ.l)() && nR.featureFlags.useForceRotateForceFullscreenOverlay && (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:disableFullscreenMode"),
            checked: tR.disableFullscreen,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                disableFullscreen: RR
              })
            }
          }), (0, KR.jsx)(MR.e, {
            label: GR(fR),
            checked: tR.showCoordinates,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showCoordinates: RR
              })
            },
            disabled: iR
          }), (0, KR.jsx)(MR.e, {
            label: GR(VR),
            checked: tR.showChunkCoordinates,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showChunkCoordinates: RR
              })
            },
            disabled: iR
          }), (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showFps"),
            checked: tR.showFPS,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showFPS: RR
              })
            }
          }), (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:disableBunnyHopping"),
            checked: tR.disableBunnyHopping,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                disableBunnyHopping: RR
              })
            }
          }), (0, vJ.x)() && (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showChat"),
            checked: tR.showChat,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showChat: RR
              })
            }
          }), (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showDebugOverlay"),
            checked: uR,
            onClick: RR => {
              BR.d.set({
                showDebugOverlay: RR
              })
            }
          }), nR.featureFlags.useSocialFeatures && (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showFriendOnlineToasts"),
            checked: tR.showFriendOnlineToasts,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showFriendOnlineToasts: RR
              })
            }
          }), (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showNewItemIndicator"),
            checked: tR.showNewItemIndicator,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showNewItemIndicator: RR
              })
            }
          }), (0, KR.jsx)(MR.e, {
            label: GR("settingsMenu:showTeamSymbols"),
            checked: tR.showTeamSymbols,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showTeamSymbols: RR
              })
            },
            circleInfoText: GR("settingsMenu:showTeamSymbolsInfo")
          })]
        })
      })),
      JG = (0, yR.memo)((function() {
        const {
          t: RR
        } = (0, ZR.A)(), {
          soundVolume: JR,
          musicVolume: GR,
          clientEscMenuOptions: yR
        } = (0, BR.o)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
        return (0, KR.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, KR.jsx)(MR.i, {
            name: RR("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: GR,
            onChange: RR => {
              BR.d.set({
                musicVolume: Math.round(100 * RR) / 100
              })
            },
            format: RR => RR.toFixed(2)
          }), (0, KR.jsx)(MR.i, {
            name: RR("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: JR,
            onChange: RR => {
              BR.d.set({
                soundVolume: Math.round(100 * RR) / 100
              })
            },
            format: RR => RR.toFixed(2)
          }), (0, KR.jsx)(MR.e, {
            label: RR("settingsMenu:showSoundDirections"),
            checked: yR.showSoundDirections,
            onClick: RR => {
              BR.d.setClientEscMenuOptions({
                showSoundDirections: RR
              })
            },
            circleInfoText: RR("settingsMenu:showSoundDirectionsInfo")
          })]
        })
      }));
    var GG = GR(773),
      yG = GR(1581),
      tG = GR(3403),
      uG = GR(3391),
      ZG = GR(4829);
    const qG = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function iG() {
      const {
        t: RR
      } = (0, ZR.A)(), JR = (0, ZG.d)(), {
        mobilePushNotificationsCanAsk: GR
      } = (0, BR.o)(["mobilePushNotificationsCanAsk"]), [tR, uR] = (0, yR.useState)(null), [qR, iR] = (0, yR.useState)(!1), [VR, wR] = (0, yR.useState)(null), [rR, eR] = (0, yR.useState)(!1), aR = (0, yR.useCallback)((() => {
        (0, tG.d)().then((RR => {
          JR.current && (uR(RR), iR(!1))
        })).catch((RR => {
          console.error("Failed to load push notification targets:", RR), JR.current && iR(!0)
        }))
      }), [JR]), LR = (0, yR.useCallback)((() => {
        (0, uG.g)().then((RR => {
          JR.current && wR((() => RR))
        }))
      }), [JR]);
      (0, yR.useEffect)((() => {
        aR()
      }), [aR]), (0, yR.useEffect)((() => {
        LR()
      }), [LR, GR]), (0, yG.f)(tG.g, aR);
      const nR = null === tR ? [] : Object.keys(qG).filter((RR => tR[RR] > 0));
      return (0, KR.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, KR.jsx)("div", {
          className: "SliderText",
          children: RR("notificationSettings:pushNotifications")
        }), null === tR && qR && (0, KR.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: RR("notificationSettings:pushTargetsLoadFailed")
        }), null !== tR && 0 === nR.length && (0, KR.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: RR("notificationSettings:pushTargetsNone")
        }), nR.length > 0 && (0, KR.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: nR.map((JR => {
            var GR;
            return (0, KR.jsx)("li", {
              children: RR(qG[JR], {
                count: null !== (GR = null === tR || void 0 === tR ? void 0 : tR[JR]) && void 0 !== GR ? GR : 0
              })
            }, JR)
          }))
        }), null !== VR && (0, KR.jsx)(fR.g, {
          className: "PushNotificationSettingsButton",
          loading: rR,
          onClick: () => {
            eR(!0), VR().catch((RR => {
              console.error("Failed to turn on push notifications:", RR)
            })).finally((() => {
              JR.current && (eR(!1), LR())
            }))
          },
          children: RR("notificationSettings:pushTurnOn")
        })]
      })
    }
    var fG = GR(3637),
      VG = GR(3379),
      KG = GR(2068),
      wG = GR(46);
    async function rG() {
      return "dailyDropReminderAsked_" + (await bR.userContextManager.getCurrentUserContext()).whamm
    }

    function eG(RR) {
      return async function(RR) {
        if (RR.remindersOn || (0, BR.h)(BR.d.get("gameState"))) return null;
        const JR = await rG();
        if (null !== wG.i.getItem(JR)) return null;
        const [GR, yR] = await Promise.all([(0, uG.g)().catch((RR => (console.error("Couldn't tell whether this device can take push notifications:", RR), null))), aG()]);
        if (null === GR && !yR) return null;
        if (null !== GR && ((0, VG.e)() || (0, uG.h)())) return null;
        return {
          askedKey: JR,
          requester: GR
        }
      }(RR).catch((RR => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", RR), null)))
    }

    function aG() {
      return (0, tG.d)().then((RR => RR.app + RR.browser + RR.msnPlay > 0), (RR => (console.error("Couldn't tell where push notifications reach this account:", RR), !0)))
    }
    async function LG(RR) {
      const JR = (0, fG.C)({
          remindersOn: !0
        }),
        GR = null === RR ? Promise.resolve() : RR(),
        [yR, tR] = await Promise.allSettled([JR, GR]);
      "rejected" === yR.status && console.error("Failed to turn on Lucky Skin Block reminders:", yR.reason), "rejected" === tR.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", tR.reason), "rejected" !== yR.status && "rejected" !== tR.status || KG.j.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const nG = {
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
      UG = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function WG(RR) {
      let {
        setting: JR,
        value: GR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)(), qR = (0, ZG.d)(), [iR, fR] = (0, yR.useState)(null), [VR, wR] = (0, yR.useState)(!1), [rR, eR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        "remindersOn" === JR && (0, uG.g)().then((RR => {
          qR.current && eR((() => RR))
        }), (RR => {
          console.error("Couldn't tell whether this device can take push notifications:", RR)
        }))
      }), [JR, qR]), (0, KR.jsx)(MR.e, {
        className: uR()({
          DailyDropSettingFailed: VR
        }),
        label: tR(UG[JR].label),
        checked: null !== iR && void 0 !== iR ? iR : GR,
        note: VR ? tR("dailyDrop:settingFailed") : void 0,
        onClick: RR => {
          null === iR && (fR(RR), wR(!1), RR && null !== rR && rR().catch((RR => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", RR)
          })), (0, fG.y)("daily_drop.setting", `${UG[JR].reportAs}_${RR?"on":"off"}`), "remindersOn" === JR && rG().then((RR => {
            wG.i.setItem(RR, !0)
          }), (RR => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", RR)
          })), (0, fG.C)("hidden" === JR ? {
            hidden: RR
          } : {
            remindersOn: RR
          }).catch((RR => {
            console.error(`Failed to save the Lucky Skin Block's ${JR} setting:`, RR), qR.current && wR(!0)
          })).finally((() => {
            qR.current && fR(null)
          })))
        }
      })
    }
    const AG = (0, yR.memo)((function() {
      const {
        t: RR
      } = (0, ZR.A)(), {
        clientEscMenuOptions: JR
      } = (0, BR.o)(["clientEscMenuOptions"]), {
        userContext: GR
      } = (0, eR.d)(), yR = GR.dailyDrop;
      return (0, KR.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [nR.featureFlags.useSocialFeatures && (0, KR.jsx)(MR.g, {
          label: RR("notificationSettings:friendRequests"),
          options: GG.d.map((JR => ({
            value: JR,
            label: RR(nG[JR].label)
          }))),
          value: JR.friendRequestNotifications,
          onChange: RR => {
            BR.d.setClientEscMenuOptions({
              friendRequestNotifications: RR
            })
          },
          circleInfoText: (0, KR.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: GG.d.map((JR => (0, KR.jsxs)("div", {
              children: [(0, KR.jsx)("b", {
                children: RR(nG[JR].label)
              }), ": ", RR(nG[JR].info)]
            }, JR)))
          })
        }), null !== yR && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(WG, {
            setting: "remindersOn",
            value: yR.remindersOn
          }), (0, KR.jsx)(WG, {
            setting: "hidden",
            value: yR.hidden
          })]
        }), (0, KR.jsx)(iG, {})]
      })
    }));
    var CG = GR(5313),
      XG = GR(203),
      MG = GR(342),
      BG = GR(7802),
      lG = GR(4776),
      pG = GR(35064),
      gG = GR(679),
      bG = GR(32);
    var vG = GR(709),
      OG = GR(5145);
    const xG = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function NG(RR) {
      return xG.has(RR) ? UR.gameBridge.lookup("zW", null) : null
    }

    function DG(RR) {
      if (!(0, gG.I)(BR.d.get("clientEscMenuOptions")[RR])) return BR.d.get("clientEscMenuOptions")[RR];
      const JR = NG(RR);
      return null !== JR ? JR[xG.get(RR)] : wG.i.getItem(RR)
    }

    function HG(RR, JR) {
      if ("useTouchControls" === RR) return void(0, OG.b)(JR);
      RR in BR.d.get("clientEscMenuOptions") && BR.d.setClientEscMenuOptions({
        [RR]: JR
      });
      const GR = NG(RR);
      null !== GR && UR.gameBridge.send("setChunkAddDistance", {
        ...GR,
        [xG.get(RR)]: JR
      }), wG.i.setItem(RR, JR)
    }
    var oG = GR(5224),
      cG = GR(35067),
      PG = GR(35072),
      IG = GR(5310),
      mG = GR(35094);

    function zG(RR) {
      var JR, tR, qR, iR;
      let {
        minChunkAddDist: fR,
        getValue: VR,
        onChange: wR,
        setApplySettingsCallback: rR
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), {
        clientEscMenuOptions: LR
      } = (0, BR.o)(["clientEscMenuOptions", "showDistantNametags"]), UR = (0, yR.useRef)(VR("showFog")), WR = (0, yR.useRef)(LR.antiAliasing), AR = (0, yR.useRef)(LR.useWebGpu), [CR, XR] = (0, yR.useState)(null), [pR, gR] = (0, yR.useState)(!1), [bR, vR] = (0, yR.useState)((() => (0, lG.h)(nR.featureFlags.settings.canUseShaderPacks))), [OR] = (0, yR.useState)((() => BR.d.isWebGpuDefaultOff())), [xR] = (0, yR.useState)(MG.j), [NR, DR] = (0, yR.useState)(!1);
      (0, yR.useEffect)((() => {
        const RR = () => {
          DR((0, PG.p)())
        };
        return RR(), (0, PG.v)(RR)
      }), []), (0, yG.f)("appManagerUpdated|clientEscMenuOptions", (() => {
        DR((0, PG.p)())
      }));
      const [HR] = (0, yR.useState)((() => !0 === wG.i.getItem(OJ.jc))), [oR] = (0, yR.useState)((() => BR.d.isWebGpuOnStored()));
      (0, yR.useEffect)((() => {
        let RR = !1;
        return (0, nR.hasUsableWebGpuAdapter)().then((async JR => {
          const GR = HR || oR,
            yR = !JR && vG.G && await (0, mG.f)(GR);
          RR || (XR(JR || yR), gR(yR))
        })), (0, lG.o)(nR.featureFlags.settings.canUseShaderPacks) && (0, BG.d)().then((async JR => {
          const yR = null !== JR && await async function(RR) {
            const [{
              isShaderPackActive: JR
            }, {
              loadPageShaderPackCompiler: yR
            }] = await Promise.all([GR.e(160).then((() => GR(7800))), Promise.all([GR.e(91), GR.e(157), GR.e(159)]).then((() => GR(7756)))]);
            return JR(RR, await yR())
          }(JR);
          RR || vR(yR)
        })), () => {
          RR = !0
        }
      }), [HR, oR]);
      const cR = (!(bR && !HR) || !pR) && CR,
        PR = function(RR, JR, GR, yR, tR) {
          return (0, pG.b)(GR, yR) && !0 === JR ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== JR ? "settingsMenu:newWebGpu" : tR ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: RR && !1 !== JR,
            disabled: !0 !== JR
          }
        }(LR.useWebGpu, cR, bR, OR, xR),
        IR = (LR.useWebGpu || (0, pG.b)(bR, OR)) && bR && !0 === cR,
        mR = (0, aR.f)("lightingOverride"),
        zR = !(0, gG.I)(mR);
      let SR = "settingsMenu:enableLighting";
      zR && (SR = mR ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const jR = RR => {
          var JR, GR, yR;
          const tR = null !== (JR = RR.showFog) && void 0 !== JR ? JR : VR("showFog"),
            uR = null !== (GR = RR.antiAliasing) && void 0 !== GR ? GR : LR.antiAliasing,
            ZR = null !== (yR = RR.useWebGpu) && void 0 !== yR ? yR : LR.useWebGpu,
            qR = !vG.G && tR !== UR.current || uR !== WR.current || ZR !== AR.current;
          rR(qR ? () => MR.m : null)
        },
        dR = (0, aR.f)("fogChunkDistanceOverride"),
        ER = (0, aR.f)("fogBlockDistanceOverride"),
        YR = !(0, gG.I)(dR) || !(0, gG.I)(ER),
        kR = YR ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [QR, FR] = (0, CG.f)(fR),
        [TR, sR] = (0, IG.l)(fR),
        hR = eR("settingsMenu:chunkLoadDistanceDeviceLimit"),
        RJ = TR < QR,
        JJ = Math.min(null !== (JR = VR("chunkHorizAddDist")) && void 0 !== JR ? JR : fR[0], TR),
        GJ = !YR && function(RR, JR) {
          return !0 === RR.showFog && RR.fogChunkDistance > JR
        }(LR, JJ);
      return (0, KR.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, KR.jsx)(MR.i, {
          name: eR("settingsMenu:horizontalChunkLoadDistance"),
          min: fR[0],
          max: QR,
          selectableMax: TR,
          cappedNote: hR,
          step: 1,
          initValue: JJ,
          onChange: RR => {
            !0 === VR("showFog") && RR < VR("fogChunkDistance") && wR("fogChunkDistance", RR), wR("chunkHorizAddDist", RR), bG.n.JK("updatedChunkLoadDist")
          },
          circleInfoText: eR("settingsMenu:chunkLoadDistanceInfo")
        }), (0, KR.jsx)(MR.i, {
          name: eR("settingsMenu:verticalChunkLoadDistance"),
          min: fR[1],
          max: FR,
          selectableMax: sR,
          cappedNote: RJ ? void 0 : hR,
          step: 1,
          initValue: Math.min(null !== (tR = VR("chunkVertAddDist")) && void 0 !== tR ? tR : fR[1], sR),
          onChange: RR => {
            wR("chunkVertAddDist", RR), bG.n.JK("updatedChunkLoadDist")
          },
          circleInfoText: eR("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:chunkFadeIn"),
          checked: LR.chunkFadeIn,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              chunkFadeIn: RR
            })
          },
          circleInfoText: eR("settingsMenu:chunkFadeInInfo")
        }), lR.devTools.supports("chunkBorders") && (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:showChunkBorders"),
          checked: LR.showChunkBorders,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              showChunkBorders: RR
            })
          },
          circleInfoText: eR("settingsMenu:showChunkBordersInfo")
        }), (0, KR.jsx)(MR.e, {
          label: eR(SR),
          checked: LR.enableLighting,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              enableLighting: RR
            })
          },
          disabled: zR
        }), (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, KR.jsx)(MR.e, {
            label: eR(kR),
            checked: LR.showFog,
            onClick: RR => {
              jR({
                showFog: RR
              }), BR.d.setClientEscMenuOptions({
                showFog: RR
              })
            },
            disabled: YR,
            className: uR()({
              SettingBoxWarning: GJ
            })
          }), (0, KR.jsx)(MR.i, {
            name: eR("settingsMenu:fogChunkDistance"),
            min: fR[0],
            max: XG.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (qR = LR.fogChunkDistance) && void 0 !== qR ? qR : fR[0],
            onChange: RR => {
              BR.d.setClientEscMenuOptions({
                fogChunkDistance: RR
              }), bG.n.JK("fogChunkDistanceChanged", RR)
            },
            circleInfoText: eR("settingsMenu:fogChunkDistanceInfo"),
            disabled: YR || !1 === VR("showFog"),
            className: uR()({
              SettingBoxWarning: GJ
            })
          }), GJ && (0, KR.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: eR("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !vG.G && (0, KR.jsx)(MR.e, {
          label: eR(IR ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !IR && LR.disableTexAtlas,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              disableTexAtlas: RR
            })
          },
          circleInfoText: eR("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: IR
        }), (0, KR.jsx)(MR.i, {
          name: eR("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: LR.cameraFOV,
          onChange: RR => {
            BR.d.setClientEscMenuOptions({
              cameraFOV: RR
            })
          }
        }), (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:disableViewBobbing"),
          checked: LR.disableBobbing,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              disableBobbing: RR
            })
          },
          circleInfoText: eR("settingsMenu:disableViewBobbingInfo")
        }), (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:antiAliasing"),
          checked: LR.antiAliasing,
          onClick: RR => {
            jR({
              antiAliasing: RR
            }), (0, oG.i)("antiAliasing"), BR.d.setClientEscMenuOptions({
              antiAliasing: RR
            })
          },
          circleInfoText: eR("settingsMenu:antiAliasingInfo")
        }), (0, KR.jsx)(MR.i, {
          name: eR("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (iR = LR.pixelScale) && void 0 !== iR ? iR : 1,
          onChange: RR => {
            (RR !== BR.d.get("clientEscMenuOptions").pixelScale || (0, PG.m)()) && (0, oG.i)("pixelScale"), BR.d.setClientEscMenuOptions({
              pixelScale: RR
            })
          },
          circleInfoText: eR("settingsMenu:pixelScaleInfo"),
          note: NR ? eR("settingsMenu:pixelScaleLowered") : void 0,
          format: RR => `${RR}x`
        }), (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:pixelSmoothing"),
          checked: LR.pixelSmoothing,
          onClick: RR => {
            BR.d.setClientEscMenuOptions({
              pixelSmoothing: RR
            })
          },
          circleInfoText: eR("settingsMenu:pixelSmoothingInfo")
        }), vG.G && (0, KR.jsx)(MR.e, {
          label: eR("settingsMenu:distantNametags"),
          checked: (0, cG.d)(),
          onClick: RR => {
            BR.d.set({
              showDistantNametags: RR
            })
          },
          circleInfoText: eR("settingsMenu:distantNametagsInfo")
        }), (0, KR.jsx)(MR.e, {
          label: eR(PR.translationKey),
          checked: PR.checked,
          onClick: RR => {
            jR({
              useWebGpu: RR
            }), BR.d.setClientEscMenuOptions({
              useWebGpu: RR
            })
          },
          circleInfoText: eR("settingsMenu:newWebGpuInfo"),
          disabled: PR.disabled
        })]
      })
    }
    var SG = GR(5218),
      jG = GR(10215),
      dG = GR(35099),
      EG = GR(10227),
      YG = GR(10273),
      kG = GR(35106);
    const QG = {
        color: 16777215,
        name: "white"
      },
      FG = {
        color: 0,
        name: "black"
      },
      TG = [QG, {
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
      }, FG],
      sG = [FG, QG];

    function hG(RR) {
      return `${RR} px`
    }

    function Ry(RR) {
      return `${RR}%`
    }

    function Jy(RR) {
      let {
        settings: JR,
        onChange: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)(), tR = (RR, yR) => {
        GR((0, kG.w)(JR, RR, yR))
      }, uR = function(RR, GR) {
        let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hG;
        const {
          min: uR,
          max: ZR,
          step: qR
        } = kG.d[RR];
        return (0, KR.jsx)(MR.i, {
          name: GR,
          min: uR,
          max: ZR,
          step: qR,
          initValue: JR[RR],
          format: yR,
          onChange: JR => {
            tR(RR, JR)
          }
        }, RR)
      }, qR = (RR, GR, uR) => (0, KR.jsx)(YG.b, {
        label: RR,
        value: (0, kG.j)(JR[GR]),
        swatches: uR.map((RR => {
          let {
            color: JR,
            name: GR
          } = RR;
          return {
            colour: (0, kG.j)(JR),
            label: yR(`crosshairSettings:color_${GR}`)
          }
        })),
        customLabel: yR("crosshairSettings:customColor"),
        onChange: RR => {
          const JR = (0, kG.p)(RR);
          null !== JR && tR(GR, JR)
        }
      }), iR = ["lines", "dot", "circle"].filter((RR => JR[RR])), fR = (RR, GR, yR) => (0, KR.jsx)(MR.e, {
        label: GR,
        checked: JR[RR],
        disabled: 1 === iR.length && iR[0] === RR,
        circleInfoText: yR,
        onClick: JR => {
          tR(RR, JR)
        }
      }, RR), VR = "shapes" === JR.style;
      return (0, KR.jsxs)(KR.Fragment, {
        children: [(0, KR.jsx)(MR.g, {
          label: yR("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: yR("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: yR("crosshairSettings:styleShapes")
          }],
          value: JR.style,
          onChange: RR => {
            tR("style", RR)
          }
        }), qR(yR("crosshairSettings:color"), "color", TG), uR("opacity", yR("crosshairSettings:opacity"), Ry), !VR && uR("size", yR("crosshairSettings:size"), Ry), VR && (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fR("lines", yR("crosshairSettings:lines")), JR.lines && uR("lineLength", yR("crosshairSettings:lineLength")), JR.lines && uR("lineThickness", yR("crosshairSettings:lineThickness")), JR.lines && uR("gap", yR("crosshairSettings:gap")), JR.lines && fR("tStyle", yR("crosshairSettings:tStyle"))]
        }), VR && (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fR("dot", yR("crosshairSettings:dot")), JR.dot && uR("dotSize", yR("crosshairSettings:dotSize"))]
        }), VR && (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [fR("circle", yR("crosshairSettings:circle")), JR.circle && uR("circleRadius", yR("crosshairSettings:circleRadius")), JR.circle && uR("circleThickness", yR("crosshairSettings:circleThickness"))]
        }), (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [uR("outline", yR("crosshairSettings:outline"), (RR => RR > 0 ? hG(RR) : yR("crosshairSettings:off"))), JR.outline > 0 && qR(yR("crosshairSettings:outlineColor"), "outlineColor", sG)]
        }), fR("growOnClick", yR("crosshairSettings:growOnClick")), VR && fR("forGuns", yR("crosshairSettings:forGuns"), yR("crosshairSettings:forGunsInfo"))]
      })
    }
    var Gy = GR(83),
      yy = GR(1366),
      ty = GR(14020),
      uy = GR(15168),
      Zy = GR(16520),
      qy = GR(17051);
    const iy = ["sky", "grass", "stone", "sand", "snow", "night"],
      fy = "4rem";

    function Vy(RR) {
      return {
        backgroundImage: `url(${RR})`,
        backgroundSize: `${fy} ${fy}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Ky(RR) {
      return {
        ...(() => {
          switch (RR) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Vy(ty);
            case "stone":
              return Vy(uy);
            case "sand":
              return Vy(Zy);
            case "snow":
              return Vy(qy);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function wy(RR) {
      return Object.freeze({
        ...kG.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...RR
      })
    }
    const ry = [{
        id: "default",
        settings: kG.e
      }, {
        id: "cross",
        settings: wy({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: wy({
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
        settings: wy({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: wy({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: wy({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: wy({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: wy({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      ey = ["growOnClick", "forGuns"];
    var ay = GR(35111);

    function Ly(RR) {
      let {
        label: JR,
        selected: GR,
        onClick: yR,
        className: tR,
        style: ZR,
        children: qR
      } = RR;
      return (0, KR.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": GR,
        title: JR,
        "aria-label": JR,
        "data-pad-focusable": !0,
        className: uR()("CrosshairBackdropSwatch", tR, {
          Selected: GR
        }),
        style: ZR,
        onClick: yR,
        children: qR
      })
    }

    function ny(RR) {
      let {
        backdrop: JR,
        onChange: GR,
        game: yR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": tR("crosshairSettings:background"),
        children: [yR && (0, KR.jsx)(Ly, {
          label: tR("crosshairSettings:bg_game"),
          selected: yR.selected,
          onClick: yR.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, KR.jsx)(qR.d, {
            name: "cube"
          })
        }), iy.map((RR => (0, KR.jsx)(Ly, {
          label: tR(`crosshairSettings:bg_${RR}`),
          selected: !(null !== yR && void 0 !== yR && yR.selected) && RR === JR,
          style: Ky(RR),
          onClick: () => {
            GR(RR)
          }
        }, RR)))]
      })
    }

    function Uy(RR) {
      let {
        settings: JR,
        touch: GR,
        backdrop: yR,
        onChange: tR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)(), iR = function(RR) {
        var JR;
        return null !== (JR = ry.find((JR => (0, kG.t)(JR.settings, RR, ey)))) && void 0 !== JR ? JR : null
      }(JR);
      return (0, KR.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": qR("crosshairSettings:presets"),
        children: ry.map((RR => {
          const ZR = (null === iR || void 0 === iR ? void 0 : iR.id) === RR.id;
          return (0, KR.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": ZR,
            "data-pad-focusable": !0,
            className: uR()("CrosshairPreset", {
              Selected: ZR
            }),
            onClick: () => {
              tR(function(RR, JR) {
                return {
                  ...JR.settings,
                  growOnClick: RR.growOnClick,
                  forGuns: RR.forGuns
                }
              }(JR, RR))
            },
            children: [(0, KR.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Ky(yR),
              children: (0, KR.jsx)(ay.d, {
                settings: RR.settings,
                touch: GR,
                inPreview: !0
              })
            }), (0, KR.jsx)("div", {
              className: "CrosshairPresetName",
              children: qR(`crosshairSettings:preset_${RR.id}`)
            })]
          }, RR.id)
        }))
      })
    }
    var Wy = GR(1859);

    function Ay(RR, JR) {
      const [GR, tR] = (0, yR.useState)(!1), uR = () => {
        tR(!1)
      }, [ZR, qR] = (0, yR.useState)(!1), iR = (0, yR.useRef)({
        growOnClick: RR.growOnClick,
        forGuns: RR.forGuns
      });
      (0, yR.useEffect)((() => {
        const JR = iR.current;
        iR.current = {
          growOnClick: RR.growOnClick,
          forGuns: RR.forGuns
        }, (RR.growOnClick && !JR.growOnClick || RR.forGuns && !JR.forGuns) && qR(!0)
      }), [RR.growOnClick, RR.forGuns]), (0, yR.useEffect)((() => {
        if (!ZR) return;
        const RR = setTimeout((() => {
          qR(!1)
        }), 600);
        return () => {
          clearTimeout(RR)
        }
      }), [ZR]);
      const fR = GR || ZR;
      return {
        view: {
          pressed: fR,
          spread: fR && RR.forGuns && !RR.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: RR => {
            !RR.target.closest(JR) && (0, Wy.b)(RR.currentTarget, RR.pointerId) && tR(!0)
          },
          onPointerUp: uR,
          onPointerCancel: uR,
          onLostPointerCapture: uR
        }
      }
    }

    function Cy(RR) {
      let {
        settings: JR,
        touch: GR,
        backdrop: yR,
        className: tR,
        children: ZR,
        label: qR
      } = RR;
      const iR = Ay(JR, ".CrosshairStageControls");
      return (0, KR.jsxs)("div", {
        className: uR()("CrosshairStage", tR),
        style: Ky(yR),
        ...iR.handlers,
        children: [(0, KR.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": qR,
          children: (0, KR.jsx)(ay.d, {
            settings: JR,
            touch: GR,
            inPreview: !0,
            ...iR.view
          })
        }), ZR]
      })
    }
    const Xy = "crosshairFullScreen";

    function My(RR) {
      let {
        settings: JR,
        touch: GR,
        backdrop: tR,
        onBackdrop: iR,
        inGame: VR,
        onChange: wR,
        onClose: rR
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), aR = (0, yR.useRef)(null);
      (0, yy.u)("popup", aR, rR),
      function(RR) {
        const JR = (0, yR.useRef)(RR);
        JR.current = RR, (0, yR.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Xy]: !0
          }, "");
          let RR = !1;
          const GR = () => {
            RR = !0, JR.current()
          };
          return window.addEventListener("popstate", GR), () => {
            var JR;
            window.removeEventListener("popstate", GR), !RR && null !== (JR = window.history.state) && void 0 !== JR && JR[Xy] && window.history.back()
          }
        }), [])
      }(rR);
      const LR = (0, yR.useRef)(rR);
      LR.current = rR, (0, yR.useEffect)((() => {
        function RR(RR) {
          "Escape" === RR.key && (RR.stopPropagation(), LR.current())
        }
        return window.addEventListener("keydown", RR, !0), () => {
          window.removeEventListener("keydown", RR, !0)
        }
      }), []);
      const nR = Ay(JR, ".CrosshairFullScreenPanel"),
        [UR, WR] = (0, yR.useState)(!0),
        AR = UR && VR;
      (0, yR.useEffect)((() => {
        if (AR) return BR.d.set({
          crosshairGameView: !0
        }), () => {
          BR.d.set({
            crosshairGameView: !1
          })
        }
      }), [AR]);
      const [CR, XR] = (0, yR.useState)(!0);
      return (0, Gy.createPortal)((0, KR.jsxs)("div", {
        ref: aR,
        className: "CrosshairFullScreen",
        style: AR ? void 0 : Ky(tR),
        ...nR.handlers,
        children: [(0, KR.jsx)(ay.d, {
          settings: JR,
          touch: GR,
          inEditor: !0,
          ...nR.view
        }), (0, KR.jsxs)("div", {
          className: uR()("CrosshairFullScreenPanel", {
            Collapsed: !CR
          }),
          children: [(0, KR.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, KR.jsx)(ny, {
              backdrop: tR,
              onChange: RR => {
                WR(!1), iR(RR)
              },
              game: VR ? {
                selected: AR,
                onSelect: () => {
                  WR(!0)
                }
              } : void 0
            }), (0, KR.jsx)(fR.U, {
              className: "CrosshairPanelToggle",
              ariaLabel: eR(CR ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                XR(!CR)
              },
              children: (0, KR.jsx)(qR.d, {
                name: CR ? "caret-up" : "pen"
              })
            }), (0, KR.jsx)(fR.g, {
              className: "CrosshairFullScreenDone",
              onClick: rR,
              padDefaultFocus: !0,
              children: eR("crosshairSettings:done")
            })]
          }), CR && (0, KR.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, KR.jsx)(Uy, {
              settings: JR,
              touch: GR,
              backdrop: tR,
              onChange: wR
            }), (0, KR.jsx)(Jy, {
              settings: JR,
              onChange: wR
            })]
          })]
        })]
      }), document.body)
    }
    var By = GR(3791),
      ly = GR(35122);

    function py(RR) {
      let {
        settings: JR,
        onChange: GR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)(), iR = (0, ly.h)(JR), [VR, wR] = (0, By.h)(), [rR, eR] = (0, yR.useState)(!1), aR = (0, yR.useRef)(null), [LR, nR] = (0, By.h)(), [UR, WR] = (0, yR.useState)(!1);
      return (0, KR.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, KR.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, KR.jsxs)(fR.U, {
            className: uR()("CrosshairCopy", {
              ActiveSecondaryButton: VR
            }),
            onClick: () => {
              (0, By.d)(iR, {
                useShareSheet: !1,
                onOutcome: RR => {
                  eR("failed" === RR), "copied" === RR && wR()
                }
              })
            },
            children: [(0, KR.jsx)(qR.d, {
              name: VR ? "check" : "copy"
            }), " ", tR(VR ? "general:copied" : "crosshairSettings:copy")]
          }), (0, KR.jsx)(CR.b, {
            className: "CrosshairPaste",
            domRef: aR,
            ariaLabel: tR("crosshairSettings:paste"),
            placeholderText: tR("crosshairSettings:paste"),
            onValueChange: RR => {
              const JR = (0, ly.f)(RR);
              WR(!JR && RR.trim().length >= ly.e), JR && (GR(JR), aR.current.value = "", nR())
            }
          })]
        }), rR && (0, KR.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: iR,
          "aria-label": tR("crosshairSettings:copy"),
          onFocus: RR => {
            RR.currentTarget.select()
          }
        }), (0, KR.jsxs)("div", {
          "aria-live": "polite",
          children: [UR && (0, KR.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: tR("crosshairSettings:pasteInvalid")
          }), LR && !UR && (0, KR.jsx)("div", {
            className: "CrosshairShareNote",
            children: tR("crosshairSettings:applied")
          })]
        })]
      })
    }
    var gy = GR(35124);
    let by = "sky";

    function vy(RR) {
      let {
        showing: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        isTouchScreen: tR,
        gameState: uR,
        clientEscMenuOptions: iR
      } = (0, BR.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), VR = (0, gy.f)(), [wR, rR] = (0, yR.useState)(by), eR = RR => {
        by = RR, rR(RR)
      }, [aR, LR] = (0, yR.useState)(!1);
      return (0, yR.useEffect)((() => {
        JR || LR(!1)
      }), [JR]), (0, KR.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, KR.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, KR.jsx)(Cy, {
            className: "CrosshairPreviewStage",
            settings: VR,
            touch: tR,
            backdrop: wR,
            label: GR("crosshairSettings:preview"),
            children: (0, KR.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, KR.jsx)(ny, {
                backdrop: wR,
                onChange: eR
              }), (0, KR.jsxs)(fR.U, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  LR(!0)
                },
                children: [(0, KR.jsx)(qR.d, {
                  name: "expand"
                }), " ", GR("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, KR.jsx)("div", {
          className: "SettingBox",
          children: (0, KR.jsx)(Uy, {
            settings: VR,
            touch: tR,
            backdrop: wR,
            onChange: gy.d
          })
        }), (0, KR.jsx)(py, {
          settings: VR,
          onChange: gy.d
        }), tR && (0, KR.jsx)(EG.c, {
          note: (0, dG.i)(tR, iR.touchActionButtons) ? GR("crosshairSettings:touchNote") : void 0
        }), (0, KR.jsx)(Jy, {
          settings: VR,
          onChange: gy.d
        }), aR && (0, KR.jsx)(My, {
          settings: VR,
          touch: tR,
          backdrop: wR,
          onBackdrop: eR,
          inGame: "inGame" === uR,
          onChange: gy.d,
          onClose: () => {
            LR(!1)
          }
        })]
      })
    }
    var Oy = GR(10223),
      xy = GR(1542),
      Ny = GR(6035),
      Dy = GR(35131),
      Hy = GR(5028),
      oy = GR(2186),
      cy = GR(775);
    const Py = (0, yR.memo)((function() {
      const {
        clientEscMenuOptions: RR
      } = (0, BR.o)(["clientEscMenuOptions"]), {
        recording: JR,
        clipping: GR,
        hasClipBuffer: tR
      } = (0, QJ.i)("replayRecorder"), ZR = (0, QJ.e)("connectedGame", (RR => RR.replay)), qR = (0, Hy.k)(), iR = !1 === (0, aR.f)("canRecordReplays");
      (0, yR.useEffect)((() => {
        UR.gameBridge.send("setRecorderPrefs", {
          clipping: RR.enableClipping,
          clipSeconds: RR.clipDurationSeconds
        })
      }), [RR.enableClipping, RR.clipDurationSeconds]);
      const VR = qR || ZR,
        wR = !VR && !iR,
        rR = JR || wR,
        eR = wR,
        LR = eR && GR && !JR;

      function nR() {
        rR && UR.gameBridge.send("toggleRecording", null)
      }
      return (0, KR.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, KR.jsxs)("div", {
          className: "SettingBox",
          children: [(0, KR.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: JR ? (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsxs)(fR.M, {
                className: "ReplayViewerCategoryButton",
                onClick: nR,
                disabled: !rR,
                children: [(0, KR.jsx)("span", {
                  children: "Stop Recording"
                }), (0, KR.jsx)(oy.c, {
                  noaAction: "recordGame"
                })]
              }), (0, KR.jsx)(Dy.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, KR.jsxs)(fR.g, {
              className: "ReplayViewerCategoryButton",
              onClick: nR,
              disabled: !rR,
              children: [(0, KR.jsx)("span", {
                children: "Start Recording"
              }), (0, KR.jsx)(oy.c, {
                noaAction: "recordGame"
              })]
            })
          }), iR && (0, KR.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), VR && !JR && (0, KR.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, KR.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, KR.jsx)(MR.e, {
            label: "Enable clipping",
            checked: RR.enableClipping,
            disabled: !eR,
            onClick: function(RR) {
              eR && BR.d.setClientEscMenuOptions({
                enableClipping: RR
              })
            },
            className: uR()({
              SettingBoxDisabled: !eR
            })
          }), (0, KR.jsx)(MR.i, {
            name: "Clip duration (seconds)",
            min: cy.i,
            max: cy.e,
            step: cy.b,
            initValue: RR.clipDurationSeconds,
            onChange: function(RR) {
              BR.d.setClientEscMenuOptions({
                clipDurationSeconds: RR
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !eR || !RR.enableClipping
          })]
        }), (0, KR.jsxs)("div", {
          className: "SettingBox",
          children: [(0, KR.jsxs)(fR.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              LR && UR.gameBridge.send("saveClip", null)
            },
            disabled: !LR,
            children: [(0, KR.jsx)("span", {
              children: "Record clip"
            }), (0, KR.jsx)(oy.c, {
              noaAction: "recordClip"
            })]
          }), RR.enableClipping && !tR && eR && !JR && (0, KR.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), JR && (0, KR.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, KR.jsxs)("div", {
          className: "SettingBox",
          children: [(0, KR.jsxs)(fR.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Hy.h)(!0), BR.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: qR,
            children: [(0, KR.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, KR.jsx)(oy.c, {
              noaAction: "replayViewerOpen"
            })]
          }), qR && (0, KR.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, KR.jsxs)("div", {
          className: "SettingBox",
          children: [(0, KR.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, KR.jsx)("iframe", {
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
    var Iy = GR(2102);
    const my = {
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
        icon: () => (0, KR.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, KR.jsx)("path", {
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
      Be: {
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

    function zy() {
      return Promise.all([GR.e(91), GR.e(157), GR.e(156), GR.e(153)]).then((() => GR(42603))).then((RR => ({
        default: RR.ShaderPackCategory
      })), (RR => (console.error("Failed to load the shader pack settings", RR), {
        default: Sy
      })))
    }

    function Sy() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, KR.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: RR("shaderPack:tabLoadFailed")
      })
    }
    var jy = GR(1532),
      dy = GR(188);
    const Ey = /party\s*voice/i;
    let Yy = !1;

    function ky(RR) {
      return Object.keys(RR).some((RR => RR.startsWith("__reactFiber$")))
    }
    const Qy = ".MenuSideBarBody, .MenuSideBarSection";

    function Fy(RR) {
      var JR;
      return (null !== (JR = RR.textContent) && void 0 !== JR ? JR : "").replace(/\s+/g, " ").trim()
    }

    function Ty(RR) {
      for (const JR of function(RR) {
          const JR = new Set;
          for (const GR of RR.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) JR.add(GR);
          for (const GR of [RR, ...RR.querySelectorAll(Qy)])
            for (const RR of GR.children) JR.add(RR);
          return [...JR]
        }(RR))
        if (!ky(JR) || !JR.matches(Qy) && Ey.test(Fy(JR))) return JR;
      return null
    }

    function sy(RR) {
      return RR.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const hy = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function Rt(RR) {
      const JR = document.createTreeWalker(RR, NodeFilter.SHOW_TEXT, {
        acceptNode: RR => {
          var JR, GR;
          return hy.has(null !== (JR = null === (GR = RR.parentElement) || void 0 === GR ? void 0 : GR.tagName.toUpperCase()) && void 0 !== JR ? JR : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let uR = JR.nextNode(); null !== uR; uR = JR.nextNode()) {
        var GR;
        const RR = (null !== (GR = uR.textContent) && void 0 !== GR ? GR : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== RR) {
          var yR, tR;
          return (null !== (yR = null === (tR = RR.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === tR ? void 0 : tR[0]) && void 0 !== yR ? yR : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function Jt(RR, JR) {
      const GR = sy(JR).slice(0, 40) || "blank";
      return `${(sy(RR.toLowerCase())||"none").slice(0,Math.max(23,dy.fb-1-GR.length))}:${GR}`.slice(0, dy.fb)
    }
    const Gt = (0, yR.lazy)((() => GR.e(308).then((() => GR(42584))).then((RR => ({
        default: RR.BloxdInformation
      }))))),
      yt = (0, yR.lazy)(zy);

    function tt(RR) {
      return RR ? "general" : "account"
    }
    const ut = new Map,
      Zt = (0, yR.memo)((function(RR) {
        let {
          show: JR,
          setBeforeResumeCallback: GR
        } = RR;
        (0, LR.e)();
        const {
          gameState: tR,
          openSettingsCategory: uR
        } = (0, BR.o)(["gameState", "openSettingsCategory"]), {
          userContext: iR
        } = (0, eR.d)(), {
          t: VR
        } = (0, ZR.A)(), CR = (0, rR.b)(), XR = (0, aR.f)("minChunkAddDist"), MR = "inGame" === tR, [lR, bR] = (0, yR.useState)(tt(MR)), [vR, OR] = (0, yR.useState)(null), [xR, NR] = (0, yR.useState)([]), DR = (0, yR.useRef)(function() {
          const RR = new Date,
            JR = 6 * (RR.getMonth() + RR.getDate()) % OJ.x.length;
          return [...OJ.x, ...OJ.x].slice(JR, JR + 6)
        }()), HR = (0, yR.useRef)(null), oR = (0, yR.useRef)(null), cR = (0, yG.h)(xy.k, (0, xy.d)()), PR = Object.keys(my).filter((RR => {
          switch (RR) {
            case "replayViewer":
              return MR;
            case "developerTools":
              return iR.playerHasRank("developer") || !1;
            case "texturePack":
              return nR.featureFlags.settings.canChangeTexturePack;
            case "Be":
              return nR.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return nR.featureFlags.useSocialFeatures || null !== iR.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== gR.siteUsed;
            case "controller":
              return nR.featureFlags.useControllerSupport && (cR || "controller" === lR);
            default:
              return !0
          }
        }));
        (0, yG.f)("toggleFullCoordinateOverlay", (() => {
          const RR = DG("showCoordinates") && DG("showChunkCoordinates") && DG("showFPS");
          HG("showCoordinates", !RR), HG("showChunkCoordinates", !RR), HG("showFPS", !RR), CR()
        })), (0, yG.f)("updatedChunkLoadDist", (() => {
          CR()
        })), (0, yR.useEffect)((() => {
          if (OR(null), null === BR.d.get("openSettingsCategory")) {
            const RR = (0, jy.j)() ? ut.get(MR) : void 0;
            bR(RR && PR.includes(RR) ? RR : tt(MR))
          }
        }), [JR]), (0, yR.useEffect)((() => {
          if (JR && oR.current) return function(RR) {
            if (Yy) return () => {};
            let JR = null,
              GR = null;
            const yR = () => {
                var RR;
                null !== GR && (clearTimeout(GR), GR = null), null === (RR = JR) || void 0 === RR || RR.disconnect(), JR = null
              },
              tR = () => {
                const JR = Ty(RR);
                null !== JR && (Yy = !0, yR(), (0, LJ.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: Jt(window.location.hostname, Rt(JR))
                }))
              };
            return GR = setTimeout((() => {
              GR = null, tR(), Yy || (JR = new MutationObserver(tR), JR.observe(RR, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), yR
          }(oR.current)
        }), [JR]), (0, yR.useEffect)((() => {
          null !== uR && (bR(uR), ut.set(MR, uR), BR.d.set({
            openSettingsCategory: null
          }))
        }), [uR, MR]), (0, yR.useLayoutEffect)((() => {
          HR.current && (HR.current.scrollTop = 0)
        }), [lR, JR]), (0, yR.useEffect)((() => {
          "updateLog" === lR && (0, AR.b)().then(NR)
        }), [lR]), (0, yR.useEffect)((() => {
          if ((0, gG.I)(XR)) return;
          const [RR, JR] = (0, SG.g)(), [GR, yR] = (0, CG.f)(XR), tR = (0, Iy.e)(XR[0], RR, GR), uR = (0, Iy.e)(XR[1], JR, yR);
          UR.gameBridge.send("setChunkAddDistance", {
            horizontal: tR,
            vertical: uR
          })
        }), [XR]);
        const IR = (0, yR.useCallback)((async () => {
          vR && (await vR(), OR(null))
        }), [vR]);

        function mR() {
          BR.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, yR.useEffect)((() => {
          GR((() => IR))
        }), [IR, GR]), (0, KR.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: JR ? {} : {
            display: "none"
          },
          children: [(0, KR.jsx)("div", {
            ref: oR,
            className: "MenuSideBar",
            children: (0, KR.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, KR.jsx)(wR, {
                items: PR.map((RR => {
                  const JR = my[RR].icon;
                  return {
                    id: RR,
                    faIcon: "string" === typeof JR ? JR : void 0,
                    iconElement: "string" === typeof JR ? void 0 : (0, KR.jsx)(JR, {}),
                    title: VR(my[RR].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: lR,
                onClick: RR => {
                  !async function(RR) {
                    await IR(), bR(RR), ut.set(MR, RR)
                  }(RR)
                }
              })
            })
          }), (0, KR.jsxs)("div", {
            ref: HR,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === lR && (0, KR.jsx)(jJ, {
              showing: JR,
              inGame: MR
            }), "general" === lR && (0, KR.jsx)(RG, {
              inGame: MR
            }), "audio" === lR && (0, KR.jsx)(JG, {}), "notifications" === lR && (0, KR.jsx)(AG, {}), "graphics" === lR && (0, KR.jsx)(zG, {
              minChunkAddDist: null !== XR && void 0 !== XR ? XR : [2, 2],
              getValue: DG,
              onChange: HG,
              setApplySettingsCallback: OR
            }), "controls" === lR && (0, KR.jsx)(jG.f, {}), "crosshair" === lR && (0, KR.jsx)(vy, {
              showing: JR
            }), "controller" === lR && nR.featureFlags.useControllerSupport && (0, KR.jsx)(Oy.d, {}), nR.featureFlags.settings.canChangeTexturePack && "texturePack" === lR && (0, KR.jsx)(Ny.e, {
              setApplySettingsCallback: OR
            }), nR.featureFlags.settings.canUseShaderPacks && "Be" === lR && (0, KR.jsx)(yR.Suspense, {
              fallback: null,
              children: (0, KR.jsx)(yt, {
                setApplySettingsCallback: OR
              })
            }), "updateLog" === lR && (0, KR.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, KR.jsx)("div", {
                className: "UpdateLogsContainer",
                children: xR.map(((RR, JR) => (0, KR.jsx)(WR.c, {
                  updateLog: RR,
                  index: JR,
                  close: mR
                }, JR)))
              })
            }), "information" === lR && (0, KR.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, KR.jsx)(yR.Suspense, {
                fallback: null,
                children: (0, KR.jsx)(Gt, {})
              })
            }), "alternativeDomains" === lR && (0, KR.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, KR.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: VR("settingsMenu:unblockedDomainsDescription")
              }), (0, KR.jsx)("div", {
                className: "AlternativeDomainsList",
                children: DR.current.map((RR => (0, KR.jsxs)(fR.g, {
                  onClick: () => {
                    window.open(`https://${RR}`)
                  },
                  children: [(0, KR.jsx)(qR.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", RR]
                }, RR)))
              })]
            }), "replayViewer" === lR && (0, KR.jsx)(Py, {}), "developerTools" === lR && (0, KR.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, KR.jsx)(pR, {
                setApplySettingsCallback: OR
              })
            }), null !== vR && (0, KR.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, KR.jsx)(fR.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: IR,
                children: VR("general:apply")
              })
            })]
          })]
        })
      }));
    var qt = GR(3728),
      it = GR(1727),
      ft = GR(3283),
      Vt = GR(5134);
    const Kt = (0, yR.lazy)((() => Promise.resolve().then((() => GR(5463))).then((RR => (RR.needGameClientAfterPaint(), (0, qt.c)((RR => RR.loadCharacterCustomisationUI()), (RR => RR.CharacterCustomisationUI))))))),
      wt = "openCustomisationTab";

    function rt(RR) {
      var JR, GR, tR;
      let {
        show: uR
      } = RR;
      const {
        userContext: ZR
      } = (0, eR.d)(), qR = (0, jR.usePurchasesAllowed)(), iR = (0, yR.useRef)(null);
      var fR, VR;
      ZR !== bR.NULL_USER_CONTEXT && (null === (JR = iR.current) || void 0 === JR ? void 0 : JR.whamm) !== ZR.whamm && (iR.current = {
        whamm: ZR.whamm,
        mountKey: (null !== (fR = null === (VR = iR.current) || void 0 === VR ? void 0 : VR.mountKey) && void 0 !== fR ? fR : -1) + 1
      });
      const [rR, aR] = (0, yR.useState)("characters");
      if ((0, yG.f)(wt, aR), !uR) return null;
      const LR = null !== (0, it.i)(Date.now()),
        nR = ZR.getOwnedCosmeticPacks(),
        UR = OJ.Mb.filter((RR => "pet" === RR || "aura" === RR ? LR || (0, ft.p)(RR).some((JR => JR !== `${RR}_none` && (0, ft.G)(RR, JR, nR))) : "cape" !== RR && "nameColour" !== RR || (0, PR.e)(ZR.getPlayerRanks()) || qR)).map((RR => ({
          id: RR,
          faIcon: OJ.E[RR],
          title: OJ.I[RR],
          redDot: !1
        })));
      return (0, KR.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, KR.jsx)("div", {
          className: "MenuSideBar",
          children: (0, KR.jsx)(wR, {
            items: UR,
            selectedItemId: rR,
            onClick: RR => {
              aR(RR)
            }
          })
        }), (0, KR.jsx)("div", {
          className: "MenuBody",
          children: (0, KR.jsx)(yR.Suspense, {
            fallback: (0, KR.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, KR.jsx)(XR.d, {})
            }),
            children: (0, KR.jsx)(Kt, {
              selectedTab: rR,
              noWebGlFallback: Lt
            }, null !== (GR = null === (tR = iR.current) || void 0 === tR ? void 0 : tR.mountKey) && void 0 !== GR ? GR : 0)
          })
        })]
      })
    }

    function et() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, KR.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: RR((0, Vt.d)((0, Vt.b)()))
      })
    }
    const Lt = (0, KR.jsx)(et, {});
    var nt = GR(1605),
      Ut = GR(1614),
      Wt = GR(35140),
      At = GR(5338),
      Ct = GR(4728),
      Xt = GR(4822),
      Mt = GR(10125),
      Bt = GR(35143),
      lt = GR(35155),
      pt = GR(2123),
      gt = GR(2105),
      bt = GR(5792),
      vt = GR(1351),
      Ot = GR(1317),
      xt = GR(1850),
      Nt = GR(10199),
      Dt = GR(3473),
      Ht = GR(3479);

    function ot(RR) {
      return RR ? Object.keys(RR).sort(((JR, GR) => {
        var yR, tR, uR, ZR;
        const qR = (null !== (yR = null === (tR = RR[GR]) || void 0 === tR ? void 0 : tR.sortPriority) && void 0 !== yR ? yR : 0) - (null !== (uR = null === (ZR = RR[JR]) || void 0 === ZR ? void 0 : ZR.sortPriority) && void 0 !== uR ? uR : 0);
        return 0 !== qR ? qR : JR.localeCompare(GR)
      })) : []
    }
    const ct = [{
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

    function Pt(RR) {
      for (const {
          threshold: JR,
          suffix: GR
        }
        of ct)
        if (RR >= JR) {
          const yR = RR / JR;
          return yR >= 100 ? `${Math.floor(yR)}${GR}` : yR >= 10 ? `${yR.toFixed(1).replace(/\.0$/,"")}${GR}` : `${yR.toFixed(2).replace(/\.?0+$/,"")}${GR}`
        } return String(RR)
    }
    var It = GR(4250);
    const mt = {
        normal: "0.8em",
        big: "1em"
      },
      zt = (0, yR.memo)((function(RR) {
        let {
          item: JR,
          amount: GR = 0,
          size: yR = "normal",
          tier: tR = null
        } = RR;
        return (0, KR.jsx)("div", {
          className: uR()("SmpSlot", `SmpSlot-${yR}`),
          children: JR && (0, KR.jsx)(pt.b, {
            itemName: JR,
            amount: GR > 1 ? GR : 0,
            amountFontSize: mt[yR],
            enchantmentTier: tR
          })
        })
      }));

    function St(RR) {
      let {
        amount: JR,
        exact: GR = !1,
        className: yR
      } = RR;
      return (0, KR.jsxs)("span", {
        className: uR()("SmpGold", yR),
        children: [(0, KR.jsx)("span", {
          className: "SmpCoin",
          children: (0, KR.jsx)(pt.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), GR ? JR.toLocaleString("en-US") : Pt(JR)]
      })
    }

    function jt(RR) {
      let {
        count: JR = 5,
        grid: GR = !1
      } = RR;
      return (0, KR.jsx)("div", {
        className: GR ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: JR
        }, ((RR, JR) => (0, KR.jsxs)("div", {
          className: uR()(GR ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, KR.jsx)("div", {
            className: uR()("SmpSlot", GR ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, KR.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, KR.jsx)("b", {}), (0, KR.jsx)("small", {})]
          }), (0, KR.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, JR)))
      })
    }

    function dt(RR) {
      let {
        title: JR,
        children: GR
      } = RR;
      return (0, KR.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, KR.jsx)("b", {
          children: JR
        }), GR && (0, KR.jsx)("small", {
          children: GR
        })]
      })
    }

    function Et(RR) {
      let {
        entry: JR
      } = RR;
      return (0, KR.jsx)(dt, {
        title: (0, KR.jsx)(gt.c, {
          text: JR.item.customTitle
        }),
        children: (0, KR.jsx)(gt.c, {
          text: JR.item.description
        })
      })
    }

    function Yt(RR) {
      return (0, KR.jsx)(It.c, {
        ...RR,
        className: uR()("SmpChoice", RR.className),
        reselectable: !0
      })
    }

    function kt() {
      return (0, KR.jsx)("span", {
        className: "SmpLoader",
        children: (0, KR.jsx)(XR.d, {})
      })
    }

    function Qt(RR) {
      let {
        value: JR,
        onChange: GR,
        min: tR = 1,
        max: uR,
        step: ZR = 1,
        label: qR
      } = RR;
      const iR = (0, yR.useRef)(null),
        fR = (0, yR.useRef)(JR);
      fR.current = JR;
      const [VR, wR] = (0, yR.useState)(null), rR = RR => Math.max(tR, Math.min(uR, Math.floor(RR))), eR = RR => {
        const JR = fR.current,
          yR = "function" === typeof ZR ? ZR(JR, RR) : ZR,
          tR = rR(JR + yR * RR);
        fR.current = tR, GR(tR)
      };
      (0, yR.useEffect)((() => {
        if (null === VR) return;
        let RR;
        const JR = () => {
            wR(null)
          },
          GR = setTimeout((() => {
            RR = setInterval((() => {
              eR(VR);
              const RR = fR.current;
              (VR > 0 ? RR >= uR : RR <= tR) && JR()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", JR), window.addEventListener("pointercancel", JR), window.addEventListener("blur", JR), () => {
          clearTimeout(GR), clearInterval(RR), window.removeEventListener("pointerup", JR), window.removeEventListener("pointercancel", JR), window.removeEventListener("blur", JR)
        }
      }), [VR]), (0, yR.useEffect)((() => {
        const RR = iR.current;
        RR && document.activeElement !== RR && RR.value !== String(JR) && (RR.value = String(JR))
      }), [JR]), (0, yR.useEffect)((() => {
        const RR = iR.current;
        if (!RR) return;
        const JR = () => {
          RR.value = String(fR.current)
        };
        return RR.addEventListener("blur", JR), () => {
          RR.removeEventListener("blur", JR)
        }
      }), []);
      const aR = RR => (0, KR.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${RR>0?"More":"Less"} ${qR}`,
        disabled: RR > 0 ? JR >= uR : JR <= tR,
        onPointerDown: JR => {
          0 === JR.button && (eR(RR), wR(RR))
        },
        onKeyDown: JR => {
          "Enter" !== JR.key && " " !== JR.key || eR(RR)
        },
        onContextMenu: RR => {
          RR.preventDefault()
        },
        children: RR > 0 ? "+" : "\u2212"
      });
      return (0, KR.jsxs)("div", {
        className: "SmpStepper",
        children: [aR(-1), (0, KR.jsx)(CR.b, {
          className: "SmpStepperInput",
          domRef: iR,
          defaultValue: String(JR),
          ariaLabel: qR,
          type: "text",
          blurOnEnter: !0,
          onValueChange: RR => {
            const JR = RR.replace(/[^\d]/g, "");
            iR.current && JR !== RR && (iR.current.value = JR), "" !== JR && GR(rR(Number(JR)))
          }
        }), aR(1)]
      })
    }

    function Ft(RR) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, RR))) - 1))
    }
    var Tt = GR(35162),
      st = GR(1336);
    const ht = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    st.x, cR.Cc.length;
    new Map;
    var Ru = GR(4555);

    function Ju(RR, JR) {
      var GR;
      return JR && (null === (GR = RR[JR]) || void 0 === GR ? void 0 : GR.smp) || null
    }

    function Gu(RR, JR) {
      const GR = [];
      for (const tR of ot(RR)) {
        var yR;
        const uR = RR[tR];
        (null === (yR = uR.smp) || void 0 === yR ? void 0 : yR.kind) === JR && GR.push({
          key: tR,
          item: uR,
          meta: uR.smp
        })
      }
      return GR
    }

    function yu(RR, JR) {
      var GR;
      return null !== (GR = Gu(RR, JR)[0]) && void 0 !== GR ? GR : null
    }
    const tu = "50% 0% 50% 0%",
      uu = [{
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

    function Zu(RR) {
      const JR = RR - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: GR,
          suffix: yR
        }
        of uu)
        if (JR >= GR) return `${Math.floor(JR/GR)}${yR}`;
      return "<1s"
    }

    function qu(RR) {
      const JR = RR.map(Mt.f),
        GR = [];
      return JR.forEach(((RR, yR) => {
        const tR = function(RR) {
            const JR = RR.match(/\d+/);
            return JR ? Number(JR[0]) : 0
          }(RR),
          uR = yR === JR.length - 1;
        (uR || 1 === tR || 10 === tR || 100 === tR) && GR.push({
          label: RR,
          quantity: tR,
          isAll: uR
        })
      })), GR
    }
    let iu = null;

    function fu(RR, JR) {
      const GR = JR.trim().toLowerCase();
      if (!GR) return [];
      const yR = RR => {
          if (RR === GR) return 0;
          if (RR.startsWith(GR)) return 1;
          const JR = RR.indexOf(GR);
          return -1 === JR ? -1 : 2 + JR
        },
        tR = [];
      for (const qR of RR) {
        const RR = [yR(qR.lowerLabel), yR(qR.lowerName)].filter((RR => -1 !== RR));
        RR.length && tR.push({
          item: qR,
          rank: Math.min(...RR)
        })
      }
      if (tR.length > 0) return tR.sort(((RR, JR) => RR.rank - JR.rank)).map((RR => RR.item));
      const uR = [...GR],
        ZR = RR => {
          let JR = 0;
          for (const GR of uR) {
            if (JR = RR.indexOf(GR, JR), -1 === JR) return !1;
            JR++
          }
          return !0
        };
      return RR.filter((RR => ZR(RR.lowerLabel) || ZR(RR.lowerName)))
    }

    function Vu(RR, JR) {
      var GR;
      return null !== (GR = null === RR || void 0 === RR ? void 0 : RR[JR]) && void 0 !== GR ? GR : JR
    }

    function Ku(RR, JR) {
      const GR = RR.userInput;
      return void 0 !== JR && "dropdown" === (null === GR || void 0 === GR ? void 0 : GR.type) && GR.dropdownOptions.map(Mt.f).includes(JR) ? JR : function(RR) {
        const JR = RR.userInput;
        if ("dropdown" !== (null === JR || void 0 === JR ? void 0 : JR.type) || 0 === JR.dropdownOptions.length) return null;
        const GR = JR.dropdownOptions.map(Mt.f);
        return JR.initialValue && GR.includes(JR.initialValue) ? JR.initialValue : GR[GR.length - 1]
      }(RR)
    }

    function wu(RR) {
      return void 0 === RR ? "" : JSON.stringify(RR)
    }
    const ru = (0, yR.createContext)(null);

    function eu() {
      return (0, yR.useContext)(ru)
    }
    var au = GR(3815);
    const Lu = (0, yR.memo)((function(RR) {
        let {
          name: JR,
          label: GR,
          onPick: yR
        } = RR;
        return (0, KR.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: GR,
          onClick: () => {
            yR(JR)
          },
          children: [(0, KR.jsx)(zt, {
            item: JR,
            size: "big"
          }), (0, KR.jsx)("span", {
            children: GR
          })]
        })
      })),
      nu = (0, yR.memo)((function(RR) {
        let {
          items: JR,
          query: GR,
          onPick: tR
        } = RR;
        const {
          t: uR
        } = (0, ZR.A)(), [qR, iR] = (0, yR.useState)(new Set), fR = (0, yR.useMemo)((() => function(RR) {
          const JR = new Map;
          for (const GR of RR) {
            let RR = JR.get(GR.category);
            RR || (RR = [], JR.set(GR.category, RR)), RR.push(GR)
          }
          return [...ht, "other"].filter((RR => JR.has(RR))).map((RR => ({
            category: RR,
            items: JR.get(RR)
          })))
        }(JR)), [JR]), VR = (0, yR.useMemo)((() => fu(JR, GR).slice(0, 60)), [JR, GR]);
        return GR.trim() ? 0 === VR.length ? (0, KR.jsx)(dt, {
          title: uR("smpShop:noItemsFound", {
            query: GR.trim()
          }),
          children: uR("smpShop:tryShorterName")
        }) : (0, KR.jsx)(au.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: tu,
          observerUpdateDeps: [GR],
          children: VR.map((RR => (0, KR.jsx)(Lu, {
            name: RR.name,
            label: RR.label,
            onPick: tR
          }, RR.name)))
        }) : (0, KR.jsx)(KR.Fragment, {
          children: fR.map((RR => {
            let {
              category: JR,
              items: GR
            } = RR;
            const yR = qR.has(JR) || GR.length <= 48,
              ZR = yR ? GR : GR.slice(0, 48);
            return (0, KR.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, KR.jsxs)("h4", {
                children: [uR("other" === JR ? "smpShop:otherItems" : `creativeInventory:${JR}`), !yR && (0, KR.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    iR(new Set([...qR, JR]))
                  },
                  children: uR("smpShop:showAll", {
                    count: GR.length
                  })
                })]
              }), (0, KR.jsx)(au.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: tu,
                observerUpdateDeps: [yR],
                children: ZR.map((RR => (0, KR.jsx)(Lu, {
                  name: RR.name,
                  label: RR.label,
                  onPick: tR
                }, RR.name)))
              })]
            }, JR)
          }))
        })
      }));

    function Uu(RR, JR) {
      const {
        searched: GR,
        shown: tR,
        searchFor: uR,
        loading: ZR
      } = function(RR, JR) {
        var GR;
        const tR = eu(),
          [uR, ZR] = (0, yR.useState)(void 0),
          qR = (0, yR.useRef)(void 0),
          iR = (0, yR.useRef)(0),
          fR = (0, yR.useRef)(void 0),
          VR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.meta.item) && void 0 !== GR ? GR : null,
          KR = !!RR && tR.isPending(RR.key);
        (0, yR.useEffect)((() => {
          if (!RR || KR || !JR || void 0 === uR || uR === VR) return;
          const GR = uR === qR.current && tR.gaveUpAt(RR.key) > iR.current && fR.current !== uR;
          (uR !== qR.current || GR) && tR.act(RR.key, null !== uR && void 0 !== uR ? uR : "*", GR) && (GR && (fR.current = uR), qR.current = uR, iR.current = Date.now())
        }), [RR, KR, JR, uR, VR, tR]);
        const wR = (0, yR.useCallback)((RR => {
            qR.current = void 0, fR.current = void 0, ZR(RR)
          }), []),
          rR = void 0 !== uR && uR !== VR && (KR || qR.current !== uR);
        return {
          searched: VR,
          shown: rR ? uR : VR,
          searchFor: wR,
          loading: rR || KR || null !== VR && !JR
        }
      }(RR, JR), qR = (0, yR.useMemo)((() => function() {
        var RR;
        let JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const tR = `${(0,Ru.f)()}\x1f${JR.join("\x1e")}\x1f${GR.join("\x1e")}\x1f${JSON.stringify(yR)}`;
        if ((null === (RR = iu) || void 0 === RR ? void 0 : RR.key) === tR) return iu.items;
        const uR = new Set(GR),
          ZR = new Set,
          qR = [],
          iR = (RR, JR) => {
            var GR;
            if (!RR || ZR.has(RR) || uR.has(RR)) return;
            ZR.add(RR);
            const tR = null !== (GR = yR[RR]) && void 0 !== GR ? GR : RR;
            qR.push({
              name: RR,
              label: tR,
              lowerLabel: tR.toLowerCase(),
              lowerName: RR.toLowerCase(),
              category: JR
            })
          };
        for (const VR of (0, Tt.creativeItemIds)()) {
          var fR;
          (0, Tt.itemIsDisabled)(VR, !0, !0, !1) || (0, Tt.showOnlyInCreativeSearch)(VR) || iR((0, Ru.c)(VR), null !== (fR = (0, Tt.creativeCategoryOf)(VR)) && void 0 !== fR ? fR : "other")
        }
        for (const VR of JR) iR(VR, "other");
        return iu = {
          key: tR,
          items: qR
        }, qR
      }(null === RR || void 0 === RR ? void 0 : RR.meta.extra, null === RR || void 0 === RR ? void 0 : RR.meta.excluded, null === RR || void 0 === RR ? void 0 : RR.meta.names)), [null === RR || void 0 === RR ? void 0 : RR.meta.extra, null === RR || void 0 === RR ? void 0 : RR.meta.excluded, null === RR || void 0 === RR ? void 0 : RR.meta.names]), [iR, fR] = (0, yR.useState)(""), [VR, KR] = (0, yR.useState)(0), [wR, rR] = (0, yR.useState)("recent"), eR = (0, yR.useCallback)((RR => {
        fR(""), KR((RR => RR + 1)), uR(RR)
      }), [uR]), aR = "browse" === wR || "" !== iR.trim();
      return {
        searched: GR,
        shown: tR,
        searchFor: uR,
        loading: ZR,
        catalogue: qR,
        names: null === RR || void 0 === RR ? void 0 : RR.meta.names,
        query: iR,
        setQuery: fR,
        searchBoxKey: VR,
        pickItem: eR,
        setView: rR,
        browsing: aR
      }
    }

    function Wu(RR) {
      let {
        browser: JR,
        children: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)(), tR = eu();
      return (0, KR.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, KR.jsx)("div", {
          className: "SmpSearch",
          children: (0, KR.jsx)(CR.b, {
            className: "SmpSearchInput",
            placeholderText: yR("smpShop:searchPlaceholder"),
            defaultValue: JR.query,
            onValueChange: RR => {
              JR.setQuery(RR), JR.searched && RR.trim() && JR.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const RR = fu(JR.catalogue, JR.query)[0];
              RR ? JR.pickItem(RR.name) : JR.query.trim() && tR.notify(yR("smpShop:noItemsFound", {
                query: JR.query.trim()
              }))
            }
          }, JR.searchBoxKey)
        }), GR]
      })
    }

    function Au(RR) {
      let {
        browser: JR,
        recentLabel: GR,
        children: yR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, KR.jsx)(Yt, {
          options: [{
            value: "recent",
            label: GR
          }, {
            value: "browse",
            label: tR("smpShop:browseItems")
          }],
          value: JR.browsing ? "browse" : "recent",
          onChange: JR.setView,
          ariaLabel: tR("smpShop:show")
        }), !JR.browsing && yR]
      })
    }

    function Cu(RR) {
      let {
        item: JR,
        names: GR,
        summary: yR,
        onBack: tR,
        children: uR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, KR.jsx)(fR.d, {
          className: "SmpBackButton",
          onClick: tR,
          children: qR("general:back")
        }), (0, KR.jsx)(zt, {
          item: JR,
          size: "big"
        }), (0, KR.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, KR.jsx)("b", {
            children: Vu(GR, JR)
          }), yR && (0, KR.jsx)("small", {
            children: yR
          })]
        }), uR]
      })
    }

    function Xu(RR) {
      let {
        browser: JR,
        className: GR,
        action: yR,
        above: tR,
        list: ZR,
        summary: qR,
        recentLabel: iR,
        listControls: fR,
        onBack: VR
      } = RR;
      return (0, KR.jsxs)("div", {
        className: uR()("SmpScreen", GR),
        children: [(0, KR.jsx)(Wu, {
          browser: JR,
          children: yR
        }), JR.shown && (0, KR.jsx)(Cu, {
          item: JR.shown,
          names: JR.names,
          summary: !JR.loading && qR,
          onBack: () => {
            null === VR || void 0 === VR || VR(), JR.searchFor(null)
          },
          children: fR
        }), tR, JR.shown ? ZR : (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(Au, {
            browser: JR,
            recentLabel: iR,
            children: fR
          }), JR.browsing ? (0, KR.jsx)(nu, {
            items: JR.catalogue,
            query: JR.query,
            onPick: JR.pickItem
          }) : ZR]
        })]
      })
    }

    function Mu(RR, JR) {
      const GR = RR.map((RR => {
        let {
          meta: JR
        } = RR;
        return JR.pricePerItem
      }));
      return "min" === JR ? Math.min(...GR) : Math.max(...GR)
    }
    var Bu = GR(7717);
    const lu = (0, yR.memo)((function(RR) {
      var JR;
      const {
        t: GR
      } = (0, ZR.A)(), yR = null === RR.seller, tR = RR.quantity * RR.pricePerItem;
      return (0, KR.jsxs)("div", {
        className: RR.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, KR.jsx)(zt, {
          item: RR.item,
          amount: RR.quantity,
          size: RR.grid ? "big" : "normal",
          tier: RR.tier
        }), (0, KR.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, KR.jsx)("b", {
            children: (0, KR.jsx)(gt.c, {
              text: null !== (JR = RR.title) && void 0 !== JR ? JR : `${RR.quantity}x ${RR.item}`
            })
          }), (0, KR.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, KR.jsx)("span", {
              children: yR ? GR("smpShop:you") : (0, KR.jsx)(gt.c, {
                text: [{
                  entityName: RR.seller
                }]
              })
            }), (0, KR.jsx)("span", {
              children: GR("smpShop:timeLeft", {
                time: Zu(RR.expiresAt)
              })
            })]
          })]
        }), (0, KR.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, KR.jsx)(St, {
            amount: RR.pricePerItem
          }), (0, KR.jsx)("small", {
            children: GR("smpShop:each")
          })]
        }), (0, KR.jsx)(fR.g, {
          className: "SmpBuyButton",
          disabled: yR || !RR.canAfford && !RR.busy,
          loading: RR.busy,
          onClick: () => {
            RR.onBuy(RR.itemKey)
          },
          children: yR ? GR("smpShop:yours") : (0, KR.jsx)(St, {
            amount: tR
          })
        })]
      })
    }));

    function pu(RR) {
      let {
        view: JR,
        onChange: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return (0, KR.jsx)(It.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: yR("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, KR.jsx)(qR.d, {
            name: "list"
          }),
          ariaLabel: yR("smpShop:listView")
        }, {
          value: "grid",
          label: (0, KR.jsx)(qR.d, {
            name: "grid-2"
          }),
          ariaLabel: yR("smpShop:gridView")
        }],
        value: JR,
        onChange: GR
      })
    }

    function gu(RR) {
      let {
        entries: JR,
        view: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)(), tR = eu(), uR = "grid" === GR;
      return (0, KR.jsxs)(KR.Fragment, {
        children: [!uR && (0, KR.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, KR.jsx)("span", {}), (0, KR.jsx)("span", {
            children: yR("smpShop:columnItem")
          }), (0, KR.jsx)("span", {
            children: yR("smpShop:columnPriceEach")
          }), (0, KR.jsx)("span", {
            children: yR("smpShop:columnTotal")
          })]
        }), (0, KR.jsx)(au.d, {
          lazyLoadedClassName: uR ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: tu,
          observerUpdateDeps: [JR.length],
          children: JR.map((RR => {
            var JR, GR;
            let {
              key: yR,
              item: ZR,
              meta: qR
            } = RR;
            const iR = qR.quantity * qR.pricePerItem;
            return (0, KR.jsx)(lu, {
              itemKey: yR,
              item: qR.item,
              title: ZR.customTitle,
              quantity: qR.quantity,
              pricePerItem: qR.pricePerItem,
              seller: qR.seller,
              expiresAt: qR.expiresAt,
              tier: null !== (JR = null === (GR = ZR.enchant) || void 0 === GR ? void 0 : GR.tier) && void 0 !== JR ? JR : null,
              busy: tR.isPending(yR) || null !== qR.seller && !1 === ZR.canBuy,
              canAfford: tR.canAfford(ZR, iR),
              grid: uR,
              onBuy: tR.act
            }, yR)
          }))
        }, GR)]
      })
    }
    const bu = [1, 10, 100],
      vu = [1, 10, 100, 999];

    function Ou(RR) {
      var JR, GR, tR, iR, VR, wR, rR, eR, aR, LR;
      const {
        t: nR
      } = (0, ZR.A)(), UR = eu(), {
        creator: WR,
        mode: AR
      } = RR, [XR, MR] = (0, yR.useState)(null !== (JR = null === WR || void 0 === WR ? void 0 : WR.meta.item) && void 0 !== JR ? JR : null), [BR, lR] = (0, yR.useState)(1), [pR, gR] = (0, yR.useState)(0), [bR, vR] = (0, yR.useState)(""), [OR, xR] = (0, yR.useState)(0), NR = (0, yR.useRef)(XR), DR = (0, yR.useRef)(!1), [HR, oR] = (0, yR.useState)(!1), cR = null !== (GR = null === WR || void 0 === WR ? void 0 : WR.meta.item) && void 0 !== GR ? GR : null, PR = null !== (tR = null === WR || void 0 === WR ? void 0 : WR.meta.owned) && void 0 !== tR ? tR : 0;
      (0, yR.useEffect)((() => {
        RR.searching || null === cR || cR === NR.current || (NR.current = cR, DR.current = !1, MR(cR), gR(0), lR("list" === AR ? Math.max(1, PR) : 1))
      }), [cR, RR.searching]);
      const IR = !!WR && !!XR && WR.meta.item === XR,
        mR = IR ? WR.meta.owned : null !== (iR = null === (VR = RR.inventory) || void 0 === VR || null === (wR = VR.find((RR => RR.item === XR))) || void 0 === wR ? void 0 : wR.quantity) && void 0 !== iR ? iR : 0,
        zR = "list" === AR ? Math.max(1, mR) : 45954,
        SR = null !== (rR = RR.prices[0]) && void 0 !== rR ? rR : null,
        jR = RR.prices.length ? Math.round(RR.prices.reduce(((RR, JR) => RR + JR), 0) / RR.prices.length) : null,
        dR = null === (eR = RR.inventory) || void 0 === eR || null === (aR = eR.find((RR => RR.item === XR))) || void 0 === aR ? void 0 : aR.sellPrice;
      (0, yR.useEffect)((() => {
        var RR;
        IR && (lR((RR => "list" === AR ? Math.min(Math.max(1, RR), Math.max(1, mR)) : RR)), DR.current || gR(null !== (RR = null !== SR && void 0 !== SR ? SR : jR) && void 0 !== RR ? RR : Math.max(1, null !== dR && void 0 !== dR ? dR : 1)))
      }), [IR, mR, XR, SR, jR]);
      const ER = RR => {
          DR.current = !0, gR(RR)
        },
        YR = JR => {
          var GR, yR, tR;
          NR.current = JR, DR.current = !1, oR(!1), vR(""), xR((RR => RR + 1)), MR(JR), gR(0), lR("list" === AR && null !== (GR = null === (yR = RR.inventory) || void 0 === yR || null === (tR = yR.find((RR => RR.item === JR))) || void 0 === tR ? void 0 : tR.quantity) && void 0 !== GR ? GR : 1), (null === WR || void 0 === WR ? void 0 : WR.meta.item) !== JR && RR.onPickItem(JR)
        },
        kR = BR * pR,
        QR = "list" === AR && null !== WR && void 0 !== WR && WR.meta.fee ? function(RR, JR) {
          const GR = Math.max(0, JR - RR.taxFreeAllowance);
          return Math.ceil(Math.round(GR * RR.rate * 1e6) / 1e6)
        }(WR.meta.fee, kR) : 0,
        FR = !!WR && UR.isPending(WR.key),
        TR = IR && !RR.searching && BR >= 1 && pR >= 1 && ("order" === AR || mR >= BR) && !FR,
        sR = !!XR && !IR && !RR.searching && BR >= 1 && pR >= 1,
        hR = () => {
          TR ? UR.act(WR.key, `${BR}|${pR}`) : sR && (RR.onPickItem(XR), oR(!0))
        };
      (0, yR.useEffect)((() => {
        HR && IR && !RR.searching && (oR(!1), hR())
      }), [HR, IR, RR.searching]);
      const RJ = !!XR && !IR && (RR.searching || HR),
        JJ = XR ? Vu(RR.names, XR) : "",
        GJ = (0, yR.useMemo)((() => fu(RR.catalogue, bR).slice(0, 8)), [RR.catalogue, bR]),
        yJ = ("list" === AR ? bu.filter((RR => RR < mR)) : vu).map((RR => ({
          value: RR,
          label: String(RR)
        })));
      "list" === AR && mR > 0 && yJ.push({
        value: mR,
        label: nR("smpShop:all", {
          count: mR
        })
      });
      const tJ = [];
      return null !== SR && (SR > 1 && tJ.push({
        value: SR - 1,
        label: nR("smpShop:undercut", {
          price: Pt(SR - 1)
        })
      }), tJ.push({
        value: SR,
        label: nR("smpShop:lowest", {
          price: Pt(SR)
        })
      })), null !== jR && jR !== SR && tJ.push({
        value: jR,
        label: nR("smpShop:average", {
          price: Pt(jR)
        })
      }), (0, KR.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, KR.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, KR.jsx)("b", {
            children: nR("list" === AR ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, KR.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": nR("smpShop:close"),
            onClick: RR.onClose,
            children: (0, KR.jsx)(qR.d, {
              name: "xmark"
            })
          })]
        }), "list" === AR && (0, KR.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (LR = RR.inventory) && void 0 !== LR && LR.length ? RR.inventory.map((RR => {
            let {
              item: JR,
              quantity: GR
            } = RR;
            return (0, KR.jsx)("button", {
              type: "button",
              title: JR,
              className: uR()("SmpPickerSlot", {
                SmpPickerSlotOn: JR === XR
              }),
              onClick: () => {
                YR(JR)
              },
              children: (0, KR.jsx)(zt, {
                item: JR,
                amount: GR
              })
            }, JR)
          })) : (0, KR.jsx)("span", {
            className: "SmpMuted",
            children: nR("smpShop:nothingToList")
          })
        }), ("list" === AR || !XR) && (0, KR.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, KR.jsx)(CR.b, {
            className: "SmpSearchInput",
            placeholderText: nR("list" === AR ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: bR,
            onValueChange: vR,
            blurOnEnter: !0,
            onEnter: () => {
              GJ[0] && YR(GJ[0].name)
            }
          }, OR), GJ.length > 0 && (0, KR.jsx)("div", {
            className: "SmpPicker",
            children: GJ.map((RR => {
              let {
                name: JR
              } = RR;
              return (0, KR.jsx)("button", {
                type: "button",
                title: JR,
                className: uR()("SmpPickerSlot", {
                  SmpPickerSlotOn: JR === XR
                }),
                onClick: () => {
                  YR(JR)
                },
                children: (0, KR.jsx)(zt, {
                  item: JR
                })
              }, JR)
            }))
          })]
        }), XR && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsxs)("div", {
            className: "SmpPickedName",
            children: [JJ, RJ && (0, KR.jsx)(kt, {})]
          }), (0, KR.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, KR.jsxs)("div", {
              className: "SmpField",
              children: [(0, KR.jsxs)("span", {
                children: [nR("smpShop:quantity"), "list" === AR && IR && (0, KR.jsx)("small", {
                  children: nR("smpShop:youHave", {
                    count: mR
                  })
                })]
              }), (0, KR.jsx)(Qt, {
                value: BR,
                onChange: lR,
                max: zR,
                label: nR("smpShop:quantity")
              }), (0, KR.jsx)(Yt, {
                options: yJ,
                value: BR,
                onChange: lR,
                ariaLabel: nR("smpShop:quantity")
              })]
            }), (0, KR.jsxs)("div", {
              className: "SmpField",
              children: [(0, KR.jsx)("span", {
                children: nR("smpShop:pricePerItem")
              }), (0, KR.jsx)(Qt, {
                value: Math.max(1, pR),
                onChange: ER,
                max: 9999999,
                step: Ft,
                label: nR("smpShop:pricePerItem")
              }), (0, KR.jsx)(Yt, {
                options: tJ,
                value: pR,
                onChange: ER,
                ariaLabel: nR("smpShop:pricePerItem")
              })]
            })]
          }), "list" === AR && (0, KR.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, KR.jsxs)("span", {
              children: [nR("smpShop:youGet"), " ", (0, KR.jsx)(St, {
                amount: Math.max(0, kR - QR),
                exact: !0
              })]
            }), (0, KR.jsx)("small", {
              children: QR > 0 ? nR("smpShop:listingFee", {
                fee: QR.toLocaleString("en-US")
              }) : nR("smpShop:listingRules")
            })]
          }), (0, KR.jsx)(fR.r, {
            className: "SmpSubmit",
            disabled: !TR && !sR && !FR,
            loading: FR || RJ || IR && RR.searching,
            onClick: hR,
            children: "list" === AR ? nR("smpShop:listButton", {
              count: BR,
              item: JJ
            }) : (0, KR.jsxs)(KR.Fragment, {
              children: [nR("smpShop:orderButton", {
                count: BR,
                item: JJ
              }), " ", pR >= 1 && (0, KR.jsx)(St, {
                amount: kR
              })]
            })
          })]
        })]
      })
    }

    function xu() {
      var RR;
      const {
        t: JR
      } = (0, ZR.A)(), GR = eu(), tR = null === (RR = GR.shopInfo[GR.categoryKey]) || void 0 === RR ? void 0 : RR.items, uR = yu(tR, "search"), qR = yu(tR, "creator"), iR = Gu(tR, "enchantedCreator"), VR = Gu(tR, "listing"), wR = yu(tR, "empty"), rR = Uu(uR, VR.length > 0 || null !== wR), {
        searched: eR,
        shown: aR,
        loading: LR
      } = rR, [nR, UR] = (0, yR.useState)(!1), [WR, AR] = function() {
        const [RR, JR] = (0, Bu.e)("smpMarketView", "list");
        return ["grid" === RR ? "grid" : "list", JR]
      }(), CR = "grid" === WR, XR = (0, yR.useMemo)((() => VR.filter((RR => {
        let {
          meta: JR
        } = RR;
        return null !== JR.seller && JR.item === eR
      })).map((RR => {
        let {
          meta: JR
        } = RR;
        return JR.pricePerItem
      })).sort(((RR, JR) => RR - JR))), [VR, eR]), MR = (0, yR.useMemo)((() => {
        const RR = new Set(rR.catalogue.map((RR => {
          let {
            name: JR
          } = RR;
          return JR
        })));
        return function(RR) {
          for (const JR in RR)
            if ("sell" === RR[JR].smp) return Gu(RR[JR].items, "sell").filter((RR => {
              let {
                item: JR
              } = RR;
              return !JR.enchant
            })).map((RR => {
              let {
                meta: JR
              } = RR;
              return {
                item: JR.item,
                quantity: JR.quantity,
                sellPrice: JR.pricePerItem
              }
            }));
          return []
        }(GR.shopInfo).filter((JR => {
          let {
            item: GR
          } = JR;
          return RR.has(GR)
        }))
      }), [GR.shopInfo, rR.catalogue]);
      return (0, KR.jsx)(Xu, {
        browser: rR,
        className: "SmpMarketTab",
        recentLabel: JR("smpShop:recentlyListed"),
        action: (0, KR.jsx)(fR.r, {
          className: "SmpSellButton",
          onClick: () => {
            UR((RR => !RR))
          },
          children: JR("smpShop:sell")
        }),
        above: nR && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(Ou, {
            mode: "list",
            creator: qR,
            inventory: MR,
            catalogue: rR.catalogue,
            names: rR.names,
            searching: LR,
            prices: XR,
            onPickItem: rR.searchFor,
            onClose: () => {
              UR(!1)
            }
          }), iR.length > 0 && (0, KR.jsx)(Nu, {
            entries: iR
          })]
        }),
        listControls: (0, KR.jsx)(pu, {
          view: WR,
          onChange: AR
        }),
        summary: aR && (VR.length > 0 ? JR(1 === VR.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: VR.length,
          price: Pt(Mu(VR, "min"))
        }) : JR("smpShop:noOneSelling", {
          item: Vu(rR.names, aR)
        })),
        list: LR ? (0, KR.jsx)(jt, {
          grid: CR
        }) : VR.length > 0 ? (0, KR.jsx)(gu, {
          entries: VR,
          view: WR
        }) : wR ? (0, KR.jsx)(Et, {
          entry: wR
        }) : (0, KR.jsx)(jt, {
          count: 3,
          grid: CR
        })
      })
    }

    function Nu(RR) {
      let {
        entries: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), tR = eu(), [uR, qR] = (0, yR.useState)({});
      return (0, KR.jsx)("div", {
        className: "SmpList",
        children: JR.map((RR => {
          var JR, yR, ZR;
          let {
            key: iR,
            item: VR,
            meta: wR
          } = RR;
          const rR = null !== (JR = uR[iR]) && void 0 !== JR ? JR : 1;
          return (0, KR.jsxs)("div", {
            className: "SmpRow",
            children: [(0, KR.jsx)(zt, {
              item: wR.item,
              amount: wR.quantity,
              tier: null !== (yR = null === (ZR = VR.enchant) || void 0 === ZR ? void 0 : ZR.tier) && void 0 !== yR ? yR : null
            }), (0, KR.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, KR.jsx)("b", {
                children: (0, KR.jsx)(gt.c, {
                  text: VR.customTitle
                })
              }), (0, KR.jsx)("small", {
                children: GR("smpShop:enchantedListing")
              })]
            }), (0, KR.jsx)(Qt, {
              value: rR,
              onChange: RR => {
                qR({
                  ...uR,
                  [iR]: RR
                })
              },
              max: 9999999,
              step: Ft,
              label: GR("smpShop:pricePerItem")
            }), (0, KR.jsxs)(fR.r, {
              loading: tR.isPending(iR),
              onClick: () => {
                tR.act(iR, String(rR))
              },
              children: [GR("smpShop:list"), " ", (0, KR.jsx)(St, {
                amount: rR
              })]
            })]
          }, iR)
        }))
      })
    }
    const Du = (0, yR.memo)((function(RR) {
      let {
        itemKey: JR,
        item: GR,
        quantity: yR,
        pricePerItem: tR,
        tier: ZR,
        selected: qR,
        onSelect: iR
      } = RR;
      return (0, KR.jsxs)("button", {
        type: "button",
        className: uR()("SmpInventorySlot", {
          SmpInventorySlotOn: qR
        }),
        title: GR,
        onClick: () => {
          iR(JR)
        },
        children: [(0, KR.jsx)(zt, {
          item: GR,
          amount: yR,
          tier: ZR
        }), (0, KR.jsx)(St, {
          amount: tR
        })]
      })
    }));

    function Hu() {
      var RR;
      const {
        t: JR
      } = (0, ZR.A)(), GR = eu(), tR = null === (RR = GR.shopInfo[GR.categoryKey]) || void 0 === RR ? void 0 : RR.items, qR = Gu(tR, "sell"), iR = yu(tR, "empty"), [fR, VR] = (0, yR.useState)(null), [wR, rR] = (0, yR.useState)({}), eR = qR.find((RR => {
        let {
          key: JR
        } = RR;
        return JR === fR
      }));
      return 0 === qR.length ? (0, KR.jsx)("div", {
        className: "SmpScreen",
        children: (0, KR.jsx)(dt, {
          title: iR ? (0, KR.jsx)(gt.c, {
            text: iR.item.customTitle
          }) : JR("smpShop:nothingToSell"),
          children: iR && (0, KR.jsx)(gt.c, {
            text: iR.item.description
          })
        })
      }) : (0, KR.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, KR.jsx)("div", {
          className: "SmpInventoryGrid",
          children: qR.map((RR => {
            var JR, GR;
            let {
              key: yR,
              item: tR,
              meta: uR
            } = RR;
            return (0, KR.jsx)(Du, {
              itemKey: yR,
              item: uR.item,
              quantity: uR.quantity,
              pricePerItem: uR.pricePerItem,
              tier: null !== (JR = null === (GR = tR.enchant) || void 0 === GR ? void 0 : GR.tier) && void 0 !== JR ? JR : null,
              selected: yR === fR,
              onSelect: VR
            }, yR)
          }))
        }), (0, KR.jsx)("div", {
          className: uR()("SmpSellBar", {
            SmpSellBarIdle: !eR
          }),
          children: eR ? (0, KR.jsx)(ou, {
            entry: eR,
            choice: Ku(eR.item, wR[eR.key]),
            onChoose: RR => {
              rR({
                ...wR,
                [eR.key]: RR
              })
            }
          }) : (0, KR.jsx)("span", {
            className: "SmpMuted",
            children: JR("smpShop:tapToSell")
          })
        })]
      })
    }

    function ou(RR) {
      var JR, GR, yR, tR;
      let {
        entry: uR,
        choice: qR,
        onChoose: iR
      } = RR;
      const {
        t: VR
      } = (0, ZR.A)(), wR = eu(), {
        key: rR,
        item: eR,
        meta: aR
      } = uR, LR = qu("dropdown" === (null === (JR = eR.userInput) || void 0 === JR ? void 0 : JR.type) ? eR.userInput.dropdownOptions : []), nR = null === qR ? 0 : -(0, Mt.e)(eR, qR);
      return (0, KR.jsxs)(KR.Fragment, {
        children: [(0, KR.jsx)(zt, {
          item: aR.item,
          amount: aR.quantity,
          tier: null !== (GR = null === (yR = eR.enchant) || void 0 === yR ? void 0 : yR.tier) && void 0 !== GR ? GR : null
        }), (0, KR.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, KR.jsx)("b", {
            children: (0, KR.jsx)(gt.c, {
              text: null !== (tR = eR.customTitle) && void 0 !== tR ? tR : aR.item
            })
          }), (0, KR.jsx)("small", {
            children: VR("smpShop:sellEach", {
              count: aR.quantity
            })
          })]
        }), (0, KR.jsx)(Yt, {
          options: LR.map((RR => {
            let {
              label: JR,
              quantity: GR,
              isAll: yR
            } = RR;
            return {
              value: JR,
              label: yR ? VR("smpShop:all", {
                count: GR
              }) : String(GR)
            }
          })),
          value: qR,
          onChange: iR,
          ariaLabel: VR("smpShop:quantity")
        }), (0, KR.jsxs)(fR.r, {
          loading: wR.isPending(rR),
          disabled: null === qR,
          onClick: () => {
            wR.act(rR, qR)
          },
          children: [VR("smpShop:sellButton"), " ", (0, KR.jsx)(St, {
            amount: nR
          })]
        })]
      })
    }

    function cu() {
      var RR;
      const {
        t: JR
      } = (0, ZR.A)(), GR = eu(), yR = null === (RR = GR.shopInfo[GR.categoryKey]) || void 0 === RR ? void 0 : RR.items, tR = Gu(yR, "collect"), uR = Gu(yR, "myListing"), qR = (RR, JR) => GR.isPending(RR) || !1 === JR.canBuy;
      return (0, KR.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, KR.jsx)("h3", {
          className: "SmpSectionTitle",
          children: JR("smpShop:readyToCollect")
        }), tR.length > 0 ? (0, KR.jsx)("div", {
          className: "SmpList",
          children: tR.map((RR => {
            var yR, tR;
            let {
              key: uR,
              item: ZR,
              meta: iR
            } = RR;
            return (0, KR.jsxs)("div", {
              className: "SmpRow",
              children: [(0, KR.jsx)(zt, {
                item: "sold" === iR.type ? "Gold Coin" : iR.item,
                amount: "sold" === iR.type ? 0 : iR.quantity,
                tier: null !== (yR = null === (tR = ZR.enchant) || void 0 === tR ? void 0 : tR.tier) && void 0 !== yR ? yR : null
              }), (0, KR.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, KR.jsx)("b", {
                  children: (0, KR.jsx)(gt.c, {
                    text: ZR.customTitle
                  })
                }), (0, KR.jsx)("small", {
                  children: (0, KR.jsx)(gt.c, {
                    text: ZR.description
                  })
                })]
              }), (0, KR.jsx)(fR.n, {
                loading: qR(uR, ZR),
                onClick: () => {
                  GR.act(uR)
                },
                children: JR("smpShop:collect")
              })]
            }, uR)
          }))
        }) : (0, KR.jsx)(dt, {
          title: JR("smpShop:nothingToCollect"),
          children: JR("smpShop:nothingToCollectHint")
        }), (0, KR.jsx)("h3", {
          className: "SmpSectionTitle",
          children: JR("smpShop:activeListings", {
            count: uR.length
          })
        }), uR.length > 0 ? (0, KR.jsx)("div", {
          className: "SmpList",
          children: uR.map((RR => {
            var yR, tR;
            let {
              key: uR,
              item: ZR,
              meta: iR
            } = RR;
            return (0, KR.jsxs)("div", {
              className: "SmpRow",
              children: [(0, KR.jsx)(zt, {
                item: iR.item,
                amount: iR.quantity,
                tier: null !== (yR = null === (tR = ZR.enchant) || void 0 === tR ? void 0 : tR.tier) && void 0 !== yR ? yR : null
              }), (0, KR.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, KR.jsx)("b", {
                  children: (0, KR.jsx)(gt.c, {
                    text: ZR.customTitle
                  })
                }), (0, KR.jsx)("small", {
                  children: JR("smpShop:timeLeft", {
                    time: Zu(iR.expiresAt)
                  })
                })]
              }), (0, KR.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, KR.jsx)(St, {
                  amount: iR.pricePerItem
                }), (0, KR.jsx)("small", {
                  children: JR("smpShop:each")
                })]
              }), (0, KR.jsx)(fR.M, {
                loading: qR(uR, ZR),
                onClick: () => {
                  GR.act(uR)
                },
                children: JR("smpShop:cancel")
              })]
            }, uR)
          }))
        }) : (0, KR.jsx)(dt, {
          title: JR("smpShop:noActiveListings"),
          children: JR("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Pu(RR) {
      let {
        done: JR,
        of: GR
      } = RR;
      return (0, KR.jsx)("span", {
        className: "SmpProgress",
        children: (0, KR.jsx)("i", {
          style: {
            width: `${Math.min(100,JR/Math.max(1,GR)*100)}%`
          }
        })
      })
    }

    function Iu(RR) {
      var JR, GR, yR;
      let {
        entry: tR,
        choice: uR,
        onChoose: qR
      } = RR;
      const {
        t: iR
      } = (0, ZR.A)(), VR = eu(), {
        key: wR,
        item: rR,
        meta: eR
      } = tR, aR = "dropdown" === (null === (JR = rR.userInput) || void 0 === JR ? void 0 : JR.type) ? rR.userInput.dropdownOptions : [], LR = !0 === eR.processing, nR = null !== eR.creator && (eR.owned > 0 || LR), UR = nR && eR.owned > 0 ? qu(aR) : [], WR = null === uR ? 0 : null !== (GR = null === (yR = UR.find((RR => RR.label === uR))) || void 0 === yR ? void 0 : yR.quantity) && void 0 !== GR ? GR : 0;
      return (0, KR.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, KR.jsx)(zt, {
          item: eR.item
        }), (0, KR.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, KR.jsx)("b", {
            children: (0, KR.jsx)(gt.c, {
              text: rR.customTitle
            })
          }), (0, KR.jsxs)("small", {
            children: [(0, KR.jsx)(St, {
              amount: eR.pricePerItem
            }), " ", iR("smpShop:each"), " \xb7", " ", null === eR.creator ? iR("smpShop:you") : (0, KR.jsx)(gt.c, {
              text: [{
                entityName: eR.creator
              }]
            })]
          }), (0, KR.jsx)(Pu, {
            done: eR.delivered,
            of: eR.wanted
          })]
        }), nR ? (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(Yt, {
            options: UR.map((RR => {
              let {
                label: JR,
                quantity: GR,
                isAll: yR
              } = RR;
              return {
                value: JR,
                label: yR ? iR("smpShop:max", {
                  count: GR
                }) : String(GR)
              }
            })),
            value: uR,
            onChange: qR,
            ariaLabel: iR("smpShop:quantity")
          }), (0, KR.jsxs)(fR.r, {
            loading: VR.isPending(wR) || LR,
            disabled: null === uR,
            onClick: () => {
              VR.act(wR, uR)
            },
            children: [iR("smpShop:deliver"), " ", (0, KR.jsx)(St, {
              amount: WR * eR.pricePerItem
            })]
          })]
        }) : (0, KR.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === eR.creator ? iR("smpShop:yourOrder") : iR("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function mu() {
      var RR;
      const {
        t: JR
      } = (0, ZR.A)(), GR = eu(), tR = null === (RR = GR.shopInfo[GR.categoryKey]) || void 0 === RR ? void 0 : RR.items, uR = yu(tR, "search"), qR = yu(tR, "creator"), iR = Gu(tR, "order"), VR = yu(tR, "empty"), wR = Uu(uR, iR.length > 0 || null !== VR), [rR, eR] = (0, yR.useState)(!1), [aR, LR] = (0, yR.useState)({});
      return (0, KR.jsx)(Xu, {
        browser: wR,
        recentLabel: JR("smpShop:recentOrders"),
        action: (0, KR.jsx)(fR.r, {
          onClick: () => {
            eR((RR => !RR))
          },
          children: JR("smpShop:createOrder")
        }),
        above: rR && (0, KR.jsx)(Ou, {
          mode: "order",
          creator: qR,
          catalogue: wR.catalogue,
          names: wR.names,
          searching: wR.loading,
          prices: [],
          onPickItem: wR.searchFor,
          onClose: () => {
            eR(!1)
          }
        }),
        onBack: () => {
          eR(!1)
        },
        summary: iR.length > 0 && JR(1 === iR.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: iR.length,
          price: Pt(Mu(iR, "max"))
        }),
        list: wR.loading ? (0, KR.jsx)(jt, {}) : iR.length > 0 ? (0, KR.jsx)(au.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: tu,
          observerUpdateDeps: [iR.length],
          children: iR.map((RR => (0, KR.jsx)(Iu, {
            entry: RR,
            choice: Ku(RR.item, aR[RR.key]),
            onChoose: JR => {
              LR({
                ...aR,
                [RR.key]: JR
              })
            }
          }, RR.key)))
        }) : VR ? (0, KR.jsx)(Et, {
          entry: VR
        }) : (0, KR.jsx)(jt, {
          count: 3
        })
      })
    }

    function zu() {
      var RR;
      const {
        t: JR
      } = (0, ZR.A)(), GR = eu(), yR = Gu(null === (RR = GR.shopInfo[GR.categoryKey]) || void 0 === RR ? void 0 : RR.items, "myOrder");
      return 0 === yR.length ? (0, KR.jsx)("div", {
        className: "SmpScreen",
        children: (0, KR.jsx)(dt, {
          title: JR("smpShop:noOrders"),
          children: JR("smpShop:noOrdersHint")
        })
      }) : (0, KR.jsx)("div", {
        className: "SmpScreen",
        children: (0, KR.jsx)("div", {
          className: "SmpList",
          children: yR.map((RR => {
            let {
              key: yR,
              item: tR,
              meta: uR
            } = RR;
            const ZR = GR.isPending(yR) || !1 === tR.canBuy;
            return (0, KR.jsxs)("div", {
              className: "SmpRow",
              children: [(0, KR.jsx)(zt, {
                item: uR.item,
                amount: uR.collectable
              }), (0, KR.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, KR.jsx)("b", {
                  children: (0, KR.jsx)(gt.c, {
                    text: tR.customTitle
                  })
                }), (0, KR.jsxs)("small", {
                  children: [(0, KR.jsx)(St, {
                    amount: uR.pricePerItem
                  }), " ", JR("smpShop:each"), uR.collectable > 0 && ` \xb7 ${JR("smpShop:readyCount",{count:uR.collectable})}`]
                }), (0, KR.jsx)(Pu, {
                  done: uR.delivered,
                  of: uR.wanted
                })]
              }), uR.collectable > 0 ? (0, KR.jsx)(fR.n, {
                loading: ZR,
                onClick: () => {
                  GR.act(yR)
                },
                children: JR("smpShop:collectCount", {
                  count: uR.collectable
                })
              }) : (0, KR.jsx)(fR.M, {
                loading: ZR,
                onClick: () => {
                  GR.act(yR)
                },
                children: JR("smpShop:cancel")
              })]
            }, yR)
          }))
        })
      })
    }
    const Su = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ju = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function du(RR, JR) {
      let GR = !1;
      const yR = {};
      for (const tR in RR) JR(tR, RR[tR]) ? yR[tR] = RR[tR] : GR = !0;
      return GR ? yR : RR
    }

    function Eu(RR) {
      var JR, GR, tR, iR;
      const {
        show: fR,
        shopInfo: VR,
        selectedCategoryKey: wR
      } = RR, {
        t: rR
      } = (0, ZR.A)(), eR = null !== wR && void 0 !== wR ? wR : "", aR = Ju(VR, eR), LR = null === (JR = VR[eR]) || void 0 === JR ? void 0 : JR.items, nR = null !== aR, [UR, WR] = (0, yR.useState)({}), [AR, CR] = (0, yR.useState)([]), [XR, MR] = (0, yR.useState)(!1), [BR, lR] = (0, yR.useState)(null), [, pR] = (0, yR.useState)(0), gR = (0, yR.useRef)(0), bR = (0, yR.useRef)({}), vR = (0, yR.useRef)({
        items: LR,
        pending: UR,
        shopInfo: VR,
        active: nR,
        show: fR,
        canAfford: RR.canAfford,
        buy: RR.buy
      });
      vR.current = {
        items: LR,
        pending: UR,
        shopInfo: VR,
        active: nR,
        show: fR,
        canAfford: RR.canAfford,
        buy: RR.buy
      };
      const OR = (0, yR.useCallback)((RR => {
        gR.current++;
        const JR = gR.current;
        CR((GR => [{
          id: JR,
          text: RR
        }, ...GR].slice(0, 8))), lR(JR)
      }), []);
      (0, yR.useEffect)((() => {
        if (null === BR) return;
        const RR = setTimeout((() => {
          lR(null)
        }), 3e3);
        return () => {
          clearTimeout(RR)
        }
      }), [BR]), (0, yR.useEffect)((() => {
        const JR = RR.message;
        if (!JR) return;
        const {
          shopInfo: GR,
          active: yR,
          items: tR
        } = vR.current, uR = null !== JR.categoryKey ? null !== Ju(GR, JR.categoryKey) : yR;
        (uR || yR) && OR(JR.text), uR && WR((RR => du(RR, (RR => {
          var JR, GR;
          return !Su.has(null === tR || void 0 === tR || null === (JR = tR[RR]) || void 0 === JR || null === (GR = JR.smp) || void 0 === GR ? void 0 : GR.kind)
        }))))
      }), [RR.message, OR]), (0, yR.useEffect)((() => {
        WR((RR => du(RR, ((RR, JR) => wu(null === LR || void 0 === LR ? void 0 : LR[RR]) === JR.snapshot))))
      }), [VR, LR]);
      const xR = Object.keys(UR).length > 0;
      (0, yR.useEffect)((() => {
        if (!xR) return;
        const RR = setInterval((() => {
          const {
            pending: RR,
            items: JR,
            show: GR
          } = vR.current;
          if (!GR) return;
          pR((RR => RR + 1));
          const yR = Date.now(),
            tR = Object.keys(RR).filter((GR => yR - RR[GR].at >= 12e3 && wu(null === JR || void 0 === JR ? void 0 : JR[GR]) === RR[GR].snapshot));
          if (0 === tR.length) return;
          const uR = tR.some((GR => {
            var yR, tR;
            return "search" !== (null === JR || void 0 === JR || null === (yR = JR[GR]) || void 0 === yR || null === (tR = yR.smp) || void 0 === tR ? void 0 : tR.kind) || RR[GR].resend
          }));
          for (const ZR of tR) bR.current[ZR] = yR;
          WR((RR => du(RR, (RR => !tR.includes(RR))))), uR && OR(rR("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(RR)
        }
      }), [xR]), (0, yR.useEffect)((() => {
        WR({})
      }), [eR]), (0, yR.useEffect)((() => {
        fR || MR(!1)
      }), [fR]);
      const NR = (0, yR.useCallback)((function(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: yR,
            pending: tR,
            canAfford: uR,
            buy: ZR
          } = vR.current, qR = null === yR || void 0 === yR ? void 0 : yR[RR];
          if (!qR || RR in tR || !1 === qR.canBuy) return !1;
          if (!uR(qR, (0, Mt.e)(qR, JR))) return !1;
          ZR(RR, qR, JR);
          const iR = {
            snapshot: wu(qR),
            at: Date.now(),
            resend: GR
          };
          return vR.current.pending = {
            ...vR.current.pending,
            [RR]: iR
          }, WR((JR => ({
            ...JR,
            [RR]: iR
          }))), !0
        }), []),
        DR = (0, yR.useMemo)((() => ({
          shopInfo: VR,
          categoryKey: eR,
          canAfford: RR.canAfford,
          isPending: RR => RR in UR,
          gaveUpAt: RR => {
            var JR;
            return null !== (JR = bR.current[RR]) && void 0 !== JR ? JR : 0
          },
          act: NR,
          notify: OR
        })), [VR, eR, RR.canAfford, UR, NR, OR]),
        HR = Math.min(...Object.values(UR).map((RR => RR.at))),
        oR = xR && Date.now() - HR > 1500,
        cR = AR.length > 1,
        PR = null !== (GR = null === (tR = VR[eR]) || void 0 === tR ? void 0 : tR.customTitle) && void 0 !== GR ? GR : eR,
        IR = null === (iR = VR[eR]) || void 0 === iR ? void 0 : iR.description;
      let mR = null;
      return "market" === aR ? mR = (0, KR.jsx)(xu, {}) : "sell" === aR ? mR = (0, KR.jsx)(Hu, {}) : "collect" === aR ? mR = (0, KR.jsx)(cu, {}) : "orders" === aR ? mR = (0, KR.jsx)(mu, {}) : "myOrders" === aR && (mR = (0, KR.jsx)(zu, {})), (0, KR.jsx)(ru.Provider, {
        value: DR,
        children: (0, KR.jsx)("div", {
          className: "SmpShopHost",
          hidden: !nR,
          children: (0, KR.jsxs)("div", {
            className: "SmpShop",
            children: [(0, KR.jsx)("header", {
              className: "SmpHeader",
              children: (0, KR.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, KR.jsxs)("h2", {
                  children: [aR && (0, KR.jsx)(qR.d, {
                    name: ju[aR]
                  }), rR(PR)]
                }), IR && (0, KR.jsx)("p", {
                  children: (0, KR.jsx)(gt.c, {
                    text: IR
                  })
                })]
              })
            }), (0, KR.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: fR && mR
            }), (0, KR.jsxs)("button", {
              type: "button",
              className: uR()("SmpStatus", {
                SmpStatusWaiting: xR,
                SmpStatusFresh: !xR && null !== BR,
                SmpStatusHasHistory: cR
              }),
              "aria-live": "polite",
              "aria-expanded": cR ? XR : void 0,
              onClick: () => {
                cR && MR((RR => !RR))
              },
              children: [xR ? (0, KR.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, KR.jsx)(kt, {}), rR(oR ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : AR[0] ? (0, KR.jsx)("span", {
                className: "SmpStatusText",
                children: (0, KR.jsx)(gt.c, {
                  text: AR[0].text
                })
              }, AR[0].id) : (0, KR.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: rR("smpShop:ready")
              }), cR && (0, KR.jsx)("small", {
                children: rR("smpShop:recentMessages", {
                  count: AR.length
                })
              })]
            }), XR && cR && (0, KR.jsx)("div", {
              className: "SmpStatusHistory",
              children: AR.map((RR => (0, KR.jsx)("div", {
                children: (0, KR.jsx)(gt.c, {
                  text: RR.text
                })
              }, RR.id)))
            })]
          })
        })
      })
    }
    var Yu = GR(2163),
      ku = GR(35166);
    const Qu = "\x1floadout";

    function Fu(RR) {
      const JR = [];
      for (const GR in RR) {
        const yR = RR[GR].loadout;
        yR && JR.push({
          categoryKey: GR,
          config: yR
        })
      }
      return JR.sort(((RR, JR) => Tu(RR.config) - Tu(JR.config)))
    }

    function Tu(RR) {
      return "gun" === RR.slot ? 0 : RR.tier
    }

    function su(RR) {
      const JR = [];
      for (const GR of ot(RR)) RR[GR].loadout ? JR.includes(Qu) || JR.push(Qu) : JR.push(GR);
      return JR
    }

    function hu(RR, JR) {
      const GR = [];
      for (const yR in RR) {
        const tR = RR[yR].loadout;
        (null === tR || void 0 === tR ? void 0 : tR.kind) === JR && GR.push({
          key: yR,
          item: RR[yR],
          meta: tR
        })
      }
      return GR.sort(((RR, JR) => {
        const GR = JZ(RR.meta) - JZ(JR.meta);
        return 0 !== GR ? GR : RR.meta.free !== JR.meta.free ? RR.meta.free ? -1 : 1 : RR.key.localeCompare(JR.key)
      }))
    }
    const RZ = ["assaultRifle", "battleRifle", "smg", "shotgun", "marksman", "sniper", "machineGun", "pistol", "machinePistol"];

    function JZ(RR) {
      return "gun" === RR.kind ? RZ.indexOf(RR.gunClass) : 0
    }
    const GZ = ["damage", "fireRate", "accuracy"];

    function yZ(RR, JR) {
      var GR, yR, tR;
      const uR = ku.e[RR];
      if (!uR) return null;
      const ZR = {
        ...uR,
        ...JR
      };
      return {
        damage: ZR.damage * (null !== (GR = ZR.shotPelletCount) && void 0 !== GR ? GR : 1),
        fireRate: tZ(ZR.fireRate, null !== (yR = ZR.burstCount) && void 0 !== yR ? yR : 1, null !== (tR = ZR.burstDelay) && void 0 !== tR ? tR : 0),
        accuracy: -(ZR.altInaccuracyStanding + ZR.altInaccuracyFromShot),
        clipSize: ZR.clipSize
      }
    }

    function tZ(RR, JR, GR) {
      return 6e4 * JR / (6e4 / RR + (JR - 1) * GR)
    }

    function uZ(RR, JR, GR, yR) {
      if ("accuracy" !== RR) return GR <= 0 ? 1 : JR / GR;
      const tR = Math.sqrt(-yR) - Math.sqrt(-GR);
      return tR <= 0 ? 1 : 1 - (Math.sqrt(-JR) - Math.sqrt(-GR)) / tR * .94
    }

    function ZZ(RR) {
      let {
        iconName: JR
      } = RR;
      return UR.gameBridge.lookup("isItemName", JR) ? (0, KR.jsx)(pt.b, {
        itemName: JR,
        amount: 1
      }) : (0, KR.jsx)(qR.d, {
        name: JR,
        className: "2x"
      })
    }
    const qZ = {
      assaultRifle: "loadoutShop:classAssaultRifle",
      battleRifle: "loadoutShop:classBattleRifle",
      smg: "loadoutShop:classSmg",
      shotgun: "loadoutShop:classShotgun",
      marksman: "loadoutShop:classMarksman",
      sniper: "loadoutShop:classSniper",
      machineGun: "loadoutShop:classMachineGun",
      pistol: "loadoutShop:classPistol",
      machinePistol: "loadoutShop:classMachinePistol"
    };

    function iZ(RR) {
      let {
        entry: JR,
        stats: GR,
        bars: yR,
        compared: tR,
        buy: iR,
        canAfford: fR,
        currency: VR
      } = RR;
      const {
        t: wR
      } = (0, ZR.A)(), {
        meta: rR
      } = JR;
      return (0, KR.jsxs)("div", {
        className: uR()("LoadoutCard", "LoadoutGunCard", {
          LoadoutCardEquipped: rR.equipped,
          LoadoutCardLocked: !rR.unlocked
        }),
        children: [!rR.unlocked && (0, KR.jsx)(qR.d, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, KR.jsx)("div", {
          className: "LoadoutGunArt",
          children: (0, KR.jsx)(pt.b, {
            itemName: rR.gun,
            amount: 0,
            gunTransform: "none"
          })
        }), (0, KR.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, KR.jsx)("b", {
            children: JR.key
          }), (0, KR.jsxs)("small", {
            children: [wR(qZ[rR.gunClass]), GR && (0, KR.jsxs)(KR.Fragment, {
              children: [" \xb7 ", wR("loadoutShop:rounds", {
                count: GR.clipSize
              })]
            })]
          })]
        }), GR && yR && (0, KR.jsx)("div", {
          className: "LoadoutStats",
          children: GZ.map((RR => {
            const JR = tR ? function(RR, JR) {
              const GR = Math.max(Math.abs(RR), Math.abs(JR), 1);
              return Math.abs(RR - JR) / GR < .05 ? null : RR > JR ? "better" : "worse"
            }(GR[RR], tR[RR]) : null;
            return (0, KR.jsxs)("div", {
              className: "LoadoutStat",
              children: [(0, KR.jsx)("span", {
                children: wR(`loadoutShop:${RR}`)
              }), (0, KR.jsx)("div", {
                className: "LoadoutBar",
                children: (0, KR.jsx)("i", {
                  className: uR()({
                    LoadoutBarBetter: "better" === JR,
                    LoadoutBarWorse: "worse" === JR
                  }),
                  style: {
                    width: 100 * yR[RR] + "%"
                  }
                })
              })]
            }, RR)
          }))
        }), (0, KR.jsx)(VZ, {
          entry: JR,
          buy: iR,
          canAfford: fR,
          currency: VR
        })]
      })
    }

    function fZ(RR) {
      let {
        entry: JR,
        buy: GR,
        canAfford: yR,
        currency: tR
      } = RR;
      const {
        meta: ZR
      } = JR;
      return (0, KR.jsxs)("div", {
        className: uR()("LoadoutCard", "LoadoutPerkCard", {
          LoadoutCardEquipped: ZR.equipped,
          LoadoutCardLocked: !ZR.unlocked
        }),
        children: [!ZR.unlocked && (0, KR.jsx)(qR.d, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, KR.jsx)("div", {
          className: "LoadoutPerkIcon",
          children: (0, KR.jsx)(qR.d, {
            name: ZR.icon
          })
        }), (0, KR.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, KR.jsx)("b", {
            children: JR.key
          }), (0, KR.jsx)("small", {
            children: ZR.description
          })]
        }), (0, KR.jsx)(VZ, {
          entry: JR,
          buy: GR,
          canAfford: yR,
          currency: tR
        })]
      })
    }

    function VZ(RR) {
      let {
        entry: JR,
        buy: GR,
        canAfford: yR,
        currency: tR
      } = RR;
      const {
        t: iR
      } = (0, ZR.A)(), {
        meta: VR,
        item: wR
      } = JR, rR = () => {
        GR(JR.key, wR)
      };
      return (0, KR.jsxs)("div", {
        className: "LoadoutCardFoot",
        children: [VR.equipped && (0, KR.jsxs)("span", {
          className: "LoadoutCardState LoadoutCardStateEquipped",
          children: [(0, KR.jsx)(qR.d, {
            name: "check"
          }), iR("loadoutShop:equipped")]
        }), VR.unlocked && !VR.equipped && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)("span", {
            className: "LoadoutCardState",
            children: VR.free ? iR("loadoutShop:free") : iR("loadoutShop:owned")
          }), (0, KR.jsx)(fR.g, {
            className: "LoadoutCardButton",
            disabled: !yR,
            onClick: rR,
            children: iR("loadoutShop:equip")
          })]
        }), !VR.unlocked && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsxs)("span", {
            className: uR()("LoadoutPrice", {
              LoadoutPriceShort: !yR
            }),
            children: [tR && (0, KR.jsx)("span", {
              className: "LoadoutPriceIcon",
              style: {
                color: tR.iconColour
              },
              children: (0, KR.jsx)(ZZ, {
                iconName: tR.icon
              })
            }), wR.cost]
          }), (0, KR.jsx)(fR.n, {
            className: "LoadoutCardButton",
            disabled: !yR,
            onClick: rR,
            children: iR("loadoutShop:unlock")
          })]
        })]
      })
    }

    function KZ(RR) {
      let {
        shopInfo: JR,
        selectedCategoryKey: GR,
        selectCategory: tR,
        buy: uR,
        canAfford: qR,
        currencyAmounts: iR
      } = RR;
      const {
        t: fR
      } = (0, ZR.A)(), VR = Fu(JR), {
        loadout: wR,
        items: rR
      } = JR[GR], eR = RR => qR(RR, (0, Mt.e)(RR, null)), aR = {
        buy: (RR, JR) => {
          eR(JR) && uR(RR, JR)
        },
        affordable: eR,
        currencyAmounts: iR
      };
      return (0, KR.jsx)("div", {
        className: "LoadoutShopHost",
        children: (0, KR.jsxs)("div", {
          className: "LoadoutShop",
          children: [(0, KR.jsxs)("header", {
            className: "LoadoutHeader",
            children: [(0, KR.jsx)("h2", {
              children: fR("loadoutShop:title")
            }), (0, KR.jsx)("p", {
              children: fR("loadoutShop:subtitle")
            })]
          }), (0, KR.jsx)("nav", {
            className: "LoadoutSlots",
            "data-pad-tabs": "3",
            children: VR.map((RR => {
              var uR, ZR;
              const {
                config: qR
              } = RR;
              return (0, KR.jsxs)(yR.Fragment, {
                children: ["perk" === qR.slot && (0, KR.jsx)(rZ, {
                  points: qR.points,
                  reached: (null !== (uR = null === iR || void 0 === iR || null === (ZR = iR[qR.pointsCurrency]) || void 0 === ZR ? void 0 : ZR.amount) && void 0 !== uR ? uR : 0) >= qR.points
                }), (0, KR.jsx)(eZ, {
                  slot: RR,
                  items: JR[RR.categoryKey].items,
                  selected: RR.categoryKey === GR,
                  onClick: () => {
                    tR(RR.categoryKey)
                  }
                })]
              }, RR.categoryKey)
            }))
          }), (0, KR.jsxs)("main", {
            className: "LoadoutPicker",
            "data-pad-initial-area": !0,
            children: ["gun" === (null === wR || void 0 === wR ? void 0 : wR.slot) && (0, KR.jsx)(LZ, {
              items: rR,
              ...aR
            }), "perk" === (null === wR || void 0 === wR ? void 0 : wR.slot) && (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsx)("p", {
                className: "LoadoutPickerNote",
                children: fR("loadoutShop:tierPicker", {
                  tier: wR.tier,
                  points: wR.points
                })
              }), (0, KR.jsx)("div", {
                className: "LoadoutPerkGrid",
                children: hu(rR, "perk").map((RR => (0, KR.jsx)(fZ, {
                  entry: RR,
                  buy: aR.buy,
                  canAfford: eR(RR.item),
                  currency: wZ(iR, RR.item)
                }, RR.key)))
              })]
            })]
          })]
        })
      })
    }

    function wZ(RR, JR) {
      return JR.currency ? null === RR || void 0 === RR ? void 0 : RR[JR.currency] : void 0
    }

    function rZ(RR) {
      let {
        points: JR,
        reached: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: uR()("LoadoutStep", {
          LoadoutStepReached: GR
        }),
        title: yR("loadoutShop:pointsTooltip", {
          points: JR
        }),
        children: [(0, KR.jsx)(qR.d, {
          name: "arrow-right",
          className: "LoadoutStepArrow"
        }), (0, KR.jsxs)("span", {
          children: [GR && (0, KR.jsx)(qR.d, {
            name: "check"
          }), yR("loadoutShop:points", {
            points: JR
          })]
        })]
      })
    }

    function eZ(RR) {
      let {
        slot: JR,
        items: GR,
        selected: yR,
        onClick: tR
      } = RR;
      const {
        t: iR
      } = (0, ZR.A)(), {
        config: fR
      } = JR, VR = "gun" === fR.slot ? aZ(hu(GR, "gun")) : aZ(hu(GR, "perk")), wR = "gun" === fR.slot ? iR("loadoutShop:gun") : iR("loadoutShop:tier", {
        tier: fR.tier
      });
      return (0, KR.jsxs)("button", {
        type: "button",
        className: uR()("LoadoutSlot", {
          LoadoutSlotSelected: yR,
          LoadoutSlotEmpty: !VR
        }),
        "data-pad-tab": !0,
        "data-pad-selected": yR ? "true" : void 0,
        "aria-pressed": yR,
        onClick: tR,
        children: [(0, KR.jsxs)("span", {
          className: "LoadoutSlotArt",
          children: ["gun" === (null === VR || void 0 === VR ? void 0 : VR.meta.kind) && (0, KR.jsx)(pt.b, {
            itemName: VR.meta.gun,
            amount: 0,
            gunTransform: "none"
          }), "perk" === (null === VR || void 0 === VR ? void 0 : VR.meta.kind) && (0, KR.jsx)(qR.d, {
            name: VR.meta.icon
          }), !VR && (0, KR.jsx)(qR.d, {
            name: "plus"
          })]
        }), (0, KR.jsxs)("span", {
          className: "LoadoutSlotText",
          children: [(0, KR.jsx)("small", {
            children: wR
          }), (0, KR.jsx)("b", {
            children: VR ? VR.key : iR("gun" === fR.slot ? "loadoutShop:noGun" : "loadoutShop:noPerk")
          })]
        })]
      })
    }

    function aZ(RR) {
      var JR;
      return null !== (JR = RR.find((RR => RR.meta.equipped))) && void 0 !== JR ? JR : null
    }

    function LZ(RR) {
      let {
        items: JR,
        buy: GR,
        affordable: yR,
        currencyAmounts: tR
      } = RR;
      const {
        t: uR
      } = (0, ZR.A)(), qR = hu(JR, "gun"), iR = aZ(qR), fR = {};
      for (const {
          meta: ZR
        }
        of qR) {
        const RR = Yu.c.get(`${ZR.gun}GunStats`),
          JR = yZ(ZR.gun, RR);
        JR && (fR[ZR.gun] = JR)
      }
      const VR = function(RR) {
          const JR = {},
            GR = {};
          for (const tR of GZ) {
            JR[tR] = -1 / 0, GR[tR] = 1 / 0;
            for (const yR in RR) JR[tR] = Math.max(JR[tR], RR[yR][tR]), GR[tR] = Math.min(GR[tR], RR[yR][tR])
          }
          const yR = {};
          for (const tR in RR) {
            yR[tR] = {};
            for (const uR of GZ) yR[tR][uR] = Math.max(.06, uZ(uR, RR[tR][uR], JR[uR], GR[uR]))
          }
          return yR
        }(fR),
        wR = iR ? fR[iR.meta.gun] : void 0,
        [rR, eR] = uR("loadoutShop:comparing", {
          gun: "\x01"
        }).split("\x01");
      return (0, KR.jsxs)(KR.Fragment, {
        children: [iR && (0, KR.jsxs)("p", {
          className: "LoadoutPickerNote",
          children: [rR, (0, KR.jsx)("b", {
            className: "LoadoutGold",
            children: iR.key
          }), eR]
        }), (0, KR.jsx)("div", {
          className: "LoadoutGunGrid",
          children: qR.map((RR => (0, KR.jsx)(iZ, {
            entry: RR,
            stats: fR[RR.meta.gun],
            bars: VR[RR.meta.gun],
            compared: RR.meta.equipped ? void 0 : wR,
            buy: GR,
            canAfford: yR(RR.item),
            currency: wZ(tR, RR.item)
          }, RR.key)))
        })]
      })
    }
    var nZ = GR(35174),
      UZ = GR(35172);

    function WZ(RR) {
      let {
        currency: JR,
        info: GR,
        smaller: tR,
        show: ZR
      } = RR;
      const qR = (0, yR.useRef)(null);
      (0, UZ.h)(JR, qR, ZR);
      const iR = (0, UZ.l)(JR, GR.amount);
      return (0, KR.jsxs)("div", {
        className: uR()("ShopCurrencyDiv", {
          SmallText: tR
        }),
        children: [(0, KR.jsxs)("div", {
          className: "ShopCurrencyDetails",
          children: [(0, KR.jsx)("div", {
            ref: qR,
            className: "ShopCurrencyAmtIcon",
            style: {
              color: GR.iconColour
            },
            children: (0, KR.jsx)(ZZ, {
              iconName: GR.icon
            })
          }), "\xa0", (0, nZ.e)(iR, 6)]
        }), void 0 !== GR.subtext && GR.subtext.length > 0 && (0, KR.jsx)("div", {
          className: "ShopCurrencySubtext",
          children: (0, KR.jsx)(gt.c, {
            text: GR.subtext
          })
        })]
      })
    }
    class AZ {
      constructor(RR) {
        this.info = RR
      }
      static fromShopInfo(RR) {
        const JR = {};
        for (const GR in RR) {
          const yR = !0 === RR[GR].redDot && !0 !== RR[GR].forceRemoveRedDot;
          JR[GR] = {
            redDot: yR,
            items: {}
          };
          for (const tR in RR[GR].items) {
            const yR = RR[GR].items[tR],
              uR = !0 === yR.redDot && !0 !== yR.forceRemoveRedDot;
            JR[GR].items[tR] = {
              redDot: uR
            }
          }
        }
        return new AZ(JR)
      }
      anyCategoryHasRedDots() {
        for (const RR in this.info)
          if (this.categoryHasRedDot(RR)) return !0;
        return !1
      }
      doesCategoryExist(RR) {
        return !(0, gG.I)(this.info[RR])
      }
      categoryHasRedDot(RR) {
        return !0 === this.info[RR].redDot
      }
      updateCategoryRedDot(RR, JR) {
        this.info[RR].redDot = JR
      }
      doesItemExist(RR, JR) {
        return this.doesCategoryExist(RR) && !(0, gG.I)(this.info[RR].items[JR])
      }
      itemHasRedDot(RR, JR) {
        return !0 === this.info[RR].items[JR].redDot
      }
      updateItemRedDot(RR, JR, GR) {
        this.info[RR].items[JR].redDot = GR
      }
      shallowCopy() {
        return new AZ(this.info)
      }
    }

    function CZ(RR, JR) {
      return `${RR}\x1f${JR}`
    }

    function XZ(RR, JR, GR) {
      const yR = AZ.fromShopInfo(RR);
      for (const qR in RR) {
        var tR;
        if (GR.doesCategoryExist(qR)) {
          (null === (tR = JR[qR]) || void 0 === tR ? void 0 : tR.redDot) === RR[qR].redDot && yR.updateCategoryRedDot(qR, GR.categoryHasRedDot(qR));
          for (const tR in RR[qR].items) {
            var uR, ZR;
            GR.doesItemExist(qR, tR) && ((null === (uR = JR[qR]) || void 0 === uR || null === (ZR = uR.items[tR]) || void 0 === ZR ? void 0 : ZR.redDot) === RR[qR].items[tR].redDot && yR.updateItemRedDot(qR, tR, GR.itemHasRedDot(qR, tR)))
          }
        }
      }
      return yR
    }

    function MZ(RR, JR, GR, yR) {
      if (null !== JR && !yR) return JR;
      if (null === GR || !RR[GR]) {
        const JR = ot(RR);
        return JR.length > 0 ? JR[0] : null
      }
      return GR
    }

    function BZ(RR, JR, GR) {
      if ((0, gG.I)(RR) || 0 === Object.keys(RR).length) return {
        shopInfo: {},
        redDotInfo: AZ.fromShopInfo({}),
        selectedCategoryKey: null
      };
      const {
        shopInfo: yR,
        autoSelectCategory: tR
      } = function(RR) {
        const JR = gR.siteUsedData[gR.siteUsed].adConfig.showRewardedAds,
          GR = {};
        let yR = null;
        for (const tR in RR) {
          const uR = RR[tR],
            ZR = {};
          let qR = !1;
          for (const RR in uR.items) {
            const GR = uR.items[RR];
            (0, Mt.n)(GR, JR) && (ZR[RR] = GR, qR = !0)
          }
          qR && (GR[tR] = {
            ...uR,
            items: ZR
          }, !0 === uR.autoSelectCategory && (yR = tR))
        }
        return {
          shopInfo: GR,
          autoSelectCategory: yR
        }
      }(RR);
      return {
        shopInfo: yR,
        redDotInfo: XZ(yR, JR.shopInfo, JR.redDotInfo),
        selectedCategoryKey: MZ(yR, tR, JR.selectedCategoryKey, GR)
      }
    }

    function lZ(RR, JR, GR, yR, tR) {
      const uR = {},
        ZR = (RR, JR, ZR, qR) => {
          var iR, fR;
          const VR = CZ(RR, JR),
            KR = null !== (iR = GR[VR]) && void 0 !== iR ? iR : GR[JR];
          if (null !== (fR = qR.userInput) && void 0 !== fR && fR.type) switch (qR.userInput.type) {
            case "dropdown": {
              var wR;
              const RR = !KR || !qR.userInput.dropdownOptions.some((RR => (0, Mt.f)(RR) === KR)),
                JR = qR.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === ZR || void 0 === ZR || null === (wR = ZR.userInput) || void 0 === wR ? void 0 : wR.type) || JSON.stringify(ZR.userInput.dropdownOptions) !== JSON.stringify(qR.userInput.dropdownOptions)),
                GR = qR.userInput,
                yR = !(0, gG.I)(GR.initialValue) && GR.dropdownOptions.some((RR => (0, Mt.f)(RR) === GR.initialValue));
              var rR;
              if (RR || JR)
                if (yR) uR[VR] = null !== (rR = qR.userInput.initialValue) && void 0 !== rR ? rR : null;
                else qR.userInput.dropdownOptions.length > 0 ? uR[VR] = (0, Mt.f)(qR.userInput.dropdownOptions[0]) : uR[VR] = null;
              else uR[VR] = KR;
              return
            }
            case "text":
            case "number":
              var eR, aR, LR;
              if ((null === ZR || void 0 === ZR ? void 0 : ZR.userInput) !== qR.userInput) uR[VR] = null !== (eR = null !== (aR = qR.userInput.initialValue) && void 0 !== aR ? aR : KR) && void 0 !== eR ? eR : "";
              else uR[VR] = null !== (LR = null !== KR && void 0 !== KR ? KR : qR.userInput.initialValue) && void 0 !== LR ? LR : "";
              return;
            case "color":
              var nR, UR, WR;
              if ((null === ZR || void 0 === ZR ? void 0 : ZR.userInput) !== qR.userInput) uR[VR] = null !== (nR = null !== (UR = qR.userInput.initialValue) && void 0 !== UR ? UR : KR) && void 0 !== nR ? nR : "#000000";
              else uR[VR] = null !== (WR = null !== KR && void 0 !== KR ? KR : qR.userInput.initialValue) && void 0 !== WR ? WR : "#000000";
              return;
            case "player": {
              const RR = (0, Mt.j)(yR, tR, qR.userInput);
              return void(KR && RR.includes(KR) ? uR[VR] = KR : uR[VR] = RR.length > 0 ? RR[0] : null)
            }
          }
        };
      for (const iR in RR)
        for (const GR in RR[iR].items) {
          var qR;
          const yR = RR[iR].items[GR];
          ZR(iR, GR, null === (qR = JR[iR]) || void 0 === qR ? void 0 : qR.items[GR], yR)
        }
      return uR
    }

    function pZ(RR, JR) {
      return !(0, gG.I)(JR) && !(0, gG.I)(RR) && JR in RR
    }
    const gZ = (0, yR.memo)((function(RR) {
      var JR, GR;
      let {
        show: tR
      } = RR;
      const ZR = (0, QJ.e)("players", DZ),
        qR = (0, QJ.e)("players", HZ),
        VR = (0, Dt.c)(),
        [rR, eR] = (0, yR.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: AZ.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        LR = (0, yR.useRef)(""),
        nR = (0, yR.useRef)(null),
        WR = (0, yR.useRef)(null),
        AR = (0, yR.useRef)(0),
        CR = (0, yR.useRef)(void 0),
        XR = (0, yR.useRef)(null),
        MR = (0, yR.useRef)(rR),
        lR = (0, yR.useRef)(null),
        pR = rR.redDotInfo.anyCategoryHasRedDots(),
        [gR, bR] = (0, yR.useState)(null),
        vR = (0, yR.useRef)(!1);
      let OR = !1,
        xR = 0,
        NR = 0;
      if (rR.currencyAmounts) {
        for (const RR in rR.currencyAmounts) {
          var DR;
          const JR = rR.currencyAmounts[RR];
          JR.hidden || (xR++, (null === (DR = JR.subtext) || void 0 === DR ? void 0 : DR.length) > 0 && NR++)
        }
        OR = xR + NR > 4
      }(0, yR.useEffect)((() => {
        bG.n.JK("showShopIconRedDot", pR, !0)
      }), [pR]), (0, yR.useEffect)((() => {
        UR.gameBridge.send("setShopOpen", tR), tR || (clearTimeout(CR.current), eR((RR => RR.awaitingPurchase ? {
          ...RR,
          awaitingPurchase: !1
        } : RR)))
      }), [tR]), (0, yR.useEffect)((() => () => {
        UR.gameBridge.send("setShopOpen", !1), clearTimeout(CR.current)
      }), []), (0, yR.useEffect)((() => {
        MR.current = rR
      }), [rR]), (0, yR.useEffect)((() => {
        if (null === gR) return;
        return (0, xt.c)("pointerdown", (RR => {
          const JR = RR.target;
          null !== JR && void 0 !== JR && JR.closest(".ShopItem") || bR(null)
        }))
      }), [gR]);
      const HR = RR => {
          eR((JR => ({
            ...JR,
            ...RR
          })))
        },
        oR = RR => {
          var JR;
          clearTimeout(null === (JR = rR.onBoughtInfo) || void 0 === JR ? void 0 : JR.timeout);
          const GR = setTimeout((() => {
            HR({
              onBoughtInfo: null
            })
          }), 3e3);
          LR.current = RR, HR({
            onBoughtInfo: {
              text: RR,
              timeout: GR,
              categoryKey: nR.current
            }
          })
        },
        PR = RR => {
          const JR = BZ(RR, rR, !0);
          return 0 === Object.keys(JR.shopInfo).length && BR.d.set({
            openEverythingMenuName: null
          }), {
            ...JR,
            userInputsPerItem: lZ(JR.shopInfo, rR.shopInfo, rR.userInputsPerItem, ZR, qR)
          }
        },
        IR = () => {
          var RR;
          return null !== (RR = lR.current) && void 0 !== RR ? RR : rR
        },
        mR = RR => {
          const JR = IR(),
            GR = BZ(RR, JR, !1);
          lR.current = GR;
          const yR = GR.redDotInfo.anyCategoryHasRedDots();
          yR !== JR.redDotInfo.anyCategoryHasRedDots() && bG.n.JK("showShopIconRedDot", yR, !0)
        },
        zR = () => {
          const RR = lR.current;
          null !== RR && (lR.current = null, eR((JR => {
            const GR = lZ(RR.shopInfo, JR.shopInfo, JR.userInputsPerItem, ZR, qR);
            return {
              ...JR,
              ...RR,
              userInputsPerItem: GR
            }
          })))
        },
        SR = (RR, JR, GR) => {
          const yR = rR.selectedCategoryKey,
            tR = CZ(yR, RR),
            uR = null !== GR && void 0 !== GR ? GR : rR.userInputsPerItem[tR],
            ZR = {
              categoryKey: yR,
              itemKey: RR,
              userInput: uR
            };
          if (nR.current = yR, JR.isRewardedAd) {
            if (Date.now() - AR.current < 5e3) return;
            (0, vJ.eb)((() => {
              var GR, yR, uR;
              console.log("bought rewarded ad");
              const qR = lR.current,
                iR = (null !== qR && void 0 !== qR ? qR : MR.current).shopInfo,
                fR = ZR.categoryKey ? null === (GR = iR[ZR.categoryKey]) || void 0 === GR ? void 0 : GR.items[RR] : null;
              if (!fR || !fR.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              if (!((null === (yR = JR.userInput) || void 0 === yR ? void 0 : yR.type) === (null === fR || void 0 === fR || null === (uR = fR.userInput) || void 0 === uR ? void 0 : uR.type))) return void console.warn("Shop item input type changed, early out");
              const {
                shopInfo: VR,
                userInputsPerItem: KR
              } = MR.current, wR = ER.current;
              ZR.userInput = (null === qR ? KR : lZ(qR.shopInfo, VR, KR, wR.playerIds, wR.localPlayerId))[tR], UR.gameBridge.send("buyShopItem", ZR), JR.onBoughtMessage && oR(JR.onBoughtMessage)
            })), AR.current = Date.now()
          } else {
            UR.gameBridge.send("buyShopItem", ZR), HR({
              awaitingPurchase: !0
            }), clearTimeout(CR.current), CR.current = setTimeout((() => {
              XR.current = null, HR({
                awaitingPurchase: !1
              })
            }), 1e3);
            const RR = (0, Mt.e)(JR, uR);
            if (XR.current = null, !isNaN(RR) && pZ(rR.currencyAmounts, JR.currency)) {
              0 !== RR && (XR.current = {
                currency: JR.currency,
                amountBefore: rR.currencyAmounts[JR.currency].amount
              });
              const GR = {
                ...rR.currencyAmounts
              };
              GR[JR.currency].amount -= RR, HR({
                currencyAmounts: GR
              })
            }
            JR.onBoughtMessage && oR(JR.onBoughtMessage)
          }
        },
        jR = (RR, JR) => {
          if (null === JR || !RR.shopInfo[JR]) return RR;
          let GR = RR.redDotInfo;
          return GR.categoryHasRedDot(JR) && (GR.updateCategoryRedDot(JR, !1), GR = GR.shallowCopy()), {
            ...RR,
            selectedCategoryKey: JR,
            redDotInfo: GR
          }
        },
        dR = RR => {
          zR(), eR((JR => jR(JR, RR)))
        };
      (0, yG.f)(Nt.i, (() => {
        zR(), eR((RR => {
          const JR = (0, Nt.m)(ot(RR.shopInfo), RR.selectedCategoryKey, (JR => (0, Nt.g)(RR.shopInfo[JR].items)));
          return JR === RR.selectedCategoryKey ? RR : jR(RR, JR)
        }))
      })), (0, yG.f)("showShopFromServer", (RR => {
        let {
          toggle: JR,
          OJ: GR
        } = RR;
        const yR = 0 !== Object.keys(IR().shopInfo).length;
        GR && dR(GR), !yR || JR && tR ? BR.d.set({
          openEverythingMenuName: null
        }) : BR.d.set({
          openEverythingMenuName: OJ.o.SHOP
        })
      })), (0, yG.f)("closeShopOnDamaged", (() => {
        tR && BR.d.set({
          openEverythingMenuName: null
        })
      })), (0, yG.f)("overShopInfo", (RR => {
        oR(RR)
      })), (0, aR.e)("currencyAmounts", (RR => {
        var JR;
        const GR = XR.current;
        GR && (null === RR || void 0 === RR || null === (JR = RR[GR.currency]) || void 0 === JR ? void 0 : JR.amount) === GR.amountBefore ? HR({
          currencyAmounts: RR
        }) : (XR.current = null, HR({
          currencyAmounts: RR,
          awaitingPurchase: !1
        }))
      })), (0, aR.e)("shopInfo", (RR => {
        tR ? HR({
          ...PR(RR),
          awaitingPurchase: !1
        }) : mR(RR)
      })), (0, yR.useLayoutEffect)((() => {
        tR && zR()
      }), [tR]);
      const ER = (0, yR.useRef)({
        playerIds: ZR,
        localPlayerId: qR
      });
      (0, yR.useEffect)((() => {
        ER.current.playerIds === ZR && ER.current.localPlayerId === qR || (ER.current = {
          playerIds: ZR,
          localPlayerId: qR
        }, tR ? eR((RR => {
          const JR = PR(RR.shopInfo);
          return {
            ...RR,
            ...JR
          }
        })) : mR(IR().shopInfo))
      }), [ZR, qR]);
      const YR = rR.selectedCategoryKey,
        kR = (RR, JR) => {
          var GR, yR;
          return (isNaN(JR) || (0, gG.I)(RR.currency) || pZ(rR.currencyAmounts, RR.currency) && JR <= rR.currencyAmounts[RR.currency].amount) && (null === (GR = RR.canBuy) || void 0 === GR || GR) && !(null !== (yR = RR.hidden) && void 0 !== yR && yR)
        },
        QR = (RR, JR) => {
          var GR, yR, tR;
          const ZR = CZ(YR, RR),
            qR = rR.shopInfo[YR].items[RR],
            VR = rR.userInputsPerItem[ZR],
            wR = (0, Mt.e)(qR, VR),
            eR = kR(qR, wR),
            aR = qR.enchant,
            LR = aR ? (0, cR.rb)(null !== (GR = qR.customTitle) && void 0 !== GR ? GR : RR, {
              colour: cR.kb[aR.tier]
            }) : null !== (yR = qR.customTitle) && void 0 !== yR ? yR : RR,
            nR = JR => {
              const GR = null !== JR && void 0 !== JR ? JR : VR,
                yR = void 0 !== JR ? (0, Mt.e)(qR, JR) : wR;
              kR(qR, yR) && null !== GR && SR(RR, qR, JR);
              let tR = rR.redDotInfo;
              tR.itemHasRedDot(YR, RR) && (tR.updateItemRedDot(YR, RR, !1), tR = tR.shallowCopy()), HR({
                redDotInfo: tR
              })
            };
          return (0, KR.jsxs)("div", {
            className: uR()("ShopItem", {
              ShopItemNoInput: !qR.userInput,
              ShopItemNoInputCanBuy: !qR.userInput && eR,
              ShopItemNoInputSelected: qR.isSelected,
              ShopItemEnchant: !!aR
            }),
            "data-pad-focusable": !qR.userInput || void 0,
            "data-pad-unavailable": !qR.userInput && !eR || void 0,
            "data-pad-repeat": null !== (tR = (0, Nt.c)(qR)) && void 0 !== tR ? tR : void 0,
            "data-pad-repeat-wait": rR.awaitingPurchase || void 0,
            onClick: () => {
              if (aR && vR.current) {
                if (gR !== ZR) return void bR(ZR);
                bR(null)
              }
              qR.userInput || nR()
            },
            onPointerDown: RR => {
              aR && (vR.current = (0, lt.w)(RR))
            },
            onPointerEnter: RR => {
              aR && !(0, lt.w)(RR) && bR(ZR)
            },
            onPointerLeave: RR => {
              aR && !(0, lt.w)(RR) && bR((RR => RR === ZR ? null : RR))
            },
            style: {
              zIndex: Object.keys(rR.shopInfo[YR].items).length - JR
            },
            children: [rR.redDotInfo.itemHasRedDot(YR, RR) && (0, KR.jsx)(iR.c, {
              top: "-6px",
              right: "-6px"
            }), qR.badge && (0, KR.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, KR.jsx)("div", {
                className: uR()("ShopBadgeMain", qR.badge.type),
                children: (0, KR.jsx)(gt.c, {
                  text: qR.badge.text
                })
              })
            }), (0, KR.jsx)("div", {
              className: "ShopItemLeft",
              children: qR.image && (0, KR.jsx)(bZ, {
                item: qR,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, KR.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, KR.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, KR.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, KR.jsx)(gt.c, {
                    text: LR
                  })
                }), (0, KR.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, KR.jsx)(gt.c, {
                    text: qR.description
                  })
                })]
              }), qR.userInput && (0, KR.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: RR => {
                  RR.stopPropagation()
                },
                children: [(0, KR.jsx)(xZ, {
                  item: qR,
                  currInput: VR,
                  updateInput: JR => {
                    ((RR, JR, GR) => {
                      const yR = CZ(RR, JR),
                        tR = {
                          ...rR.userInputsPerItem
                        };
                      tR[yR] = GR, HR({
                        userInputsPerItem: tR
                      })
                    })(YR, RR, JR)
                  },
                  onSubmit: RR => {
                    nR(RR)
                  }
                }), ("dropdown" !== qR.userInput.type || !qR.userInput.autoSubmit) && (0, KR.jsx)(fR.g, {
                  className: "ItemCostButton",
                  disabled: !eR && null !== VR,
                  onClick: () => {
                    nR()
                  },
                  children: (0, KR.jsx)(OZ, {
                    item: qR,
                    cost: wR,
                    currencyAmounts: rR.currencyAmounts
                  })
                })]
              })]
            }), !qR.userInput && (0, KR.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, KR.jsx)(OZ, {
                item: qR,
                cost: wR,
                currencyAmounts: rR.currencyAmounts
              })
            }), aR && gR === ZR && (0, KR.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, KR.jsx)(gt.c, {
                text: LR
              }), (0, KR.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, KR.jsx)(gt.c, {
                  text: (0, Bt.d)("", aR.enchantments, aR.enchantmentData)
                })
              })]
            })]
          }, ZR)
        },
        FR = function(RR) {
          for (const JR in RR)
            if (RR[JR].smp) return !0;
          return !1
        }(rR.shopInfo),
        TR = Ju(rR.shopInfo, YR),
        sR = function(RR, JR) {
          var GR;
          return !!JR && !(null === (GR = RR[JR]) || void 0 === GR || !GR.loadout)
        }(rR.shopInfo, YR),
        hR = (0, KR.jsx)("div", {
          className: uR()("ShopOnBoughtInfo", {
            ShopOnBoughtInfoShow: null !== rR.onBoughtInfo
          }),
          children: (0, KR.jsx)(gt.c, {
            text: LR.current
          })
        });
      return (0, KR.jsx)(Ct.d, {
        className: "Menu ShopBody",
        show: tR,
        children: 0 !== Object.keys(rR.shopInfo).length && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, KR.jsx)(wR, {
              items: su(rR.shopInfo).map((RR => {
                var JR;
                return RR === Qu ? {
                  id: RR,
                  title: "loadoutShop:title",
                  redDot: !1
                } : {
                  id: RR,
                  title: null !== (JR = rR.shopInfo[RR].customTitle) && void 0 !== JR ? JR : RR,
                  redDot: rR.redDotInfo.categoryHasRedDot(RR)
                }
              })),
              link: VR ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Ht.f)({
                    page: (0, Ht.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: sR ? Qu : YR,
              onClick: RR => {
                RR !== Qu ? dR(RR) : sR || dR(Fu(rR.shopInfo)[0].categoryKey)
              },
              padStartsOnTab: (0, Nt.f)(YR)
            }), (0, KR.jsx)("div", {
              className: "MenuSideBarFooter",
              children: rR.currencyAmounts && Object.keys(rR.currencyAmounts).map((RR => {
                const JR = rR.currencyAmounts[RR];
                return JR.hidden ? null : (0, KR.jsx)(WZ, {
                  currency: RR,
                  info: JR,
                  smaller: OR,
                  show: tR
                }, RR)
              }))
            })]
          }), (0, KR.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [FR && (0, KR.jsx)(Eu, {
              show: tR,
              shopInfo: rR.shopInfo,
              selectedCategoryKey: YR,
              buy: (RR, JR, GR) => {
                SR(RR, JR, GR)
              },
              canAfford: kR,
              message: rR.onBoughtInfo
            }), sR && tR && (0, KR.jsxs)(KR.Fragment, {
              children: [hR, (0, KR.jsx)(KZ, {
                shopInfo: rR.shopInfo,
                selectedCategoryKey: YR,
                selectCategory: dR,
                buy: SR,
                canAfford: kR,
                currencyAmounts: rR.currencyAmounts
              })]
            }), null === TR && !sR && (0, KR.jsxs)(KR.Fragment, {
              children: [hR, (0, KR.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, KR.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (JR = rR.shopInfo[YR]) || void 0 === JR ? void 0 : JR.description) && (0, KR.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, KR.jsx)(gt.c, {
                      text: rR.shopInfo[YR].description
                    })
                  }), tR && (0, KR.jsx)("div", {
                    className: "ShopItems",
                    ref: WR,
                    "data-pad-initial-area": !0,
                    children: ot(null === (GR = rR.shopInfo[YR]) || void 0 === GR ? void 0 : GR.items).map(((RR, JR) => QR(RR, JR)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function bZ(RR) {
      let {
        item: JR,
        minWidth: GR,
        minHeight: yR
      } = RR;
      const {
        image: tR,
        schematicId: uR,
        imageColour: ZR
      } = JR;
      if (uR) return (0, KR.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${GR}rem`,
          height: `${yR}rem`
        },
        children: (0, KR.jsx)(bt.e, {
          game: {
            schematicId: uR
          }
        })
      });
      var iR, fR;
      if ((0, pt.c)(tR)) return (0, KR.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${GR}rem`,
          height: "0",
          minHeight: `${yR}rem`
        },
        children: (0, KR.jsx)(pt.b, {
          itemName: tR,
          amount: null !== (iR = JR.amount) && void 0 !== iR ? iR : 0,
          amountFontSize: yR / 4 + "rem",
          enchantmentTier: null === (fR = JR.enchant) || void 0 === fR ? void 0 : fR.tier
        })
      });
      const VR = tR.slice(-4);
      return ".jpg" === VR || ".png" === VR ? (0, KR.jsx)(vZ, {
        image: tR,
        minWidth: GR
      }) : (0, KR.jsx)(qR.d, {
        name: tR,
        className: "SelectedItemImage",
        style: {
          color: ZR
        }
      })
    }

    function vZ(RR) {
      let {
        image: JR,
        minWidth: GR
      } = RR;
      const {
        gameNameWithVariation: yR
      } = (0, QJ.i)("connectedGame"), tR = JR.endsWith(".jpg");
      return (0, KR.jsx)("img", {
        className: uR()({
          ShopPixelImage: !tR
        }),
        style: {
          width: `${tR?1.6*GR:GR}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,cR.Sb)(yR)}/${JR}`,
        alt: JR,
        draggable: !1
      })
    }

    function OZ(RR) {
      let {
        item: JR,
        cost: GR,
        currencyAmounts: yR
      } = RR;
      const tR = !isNaN(GR) && 0 !== GR && pZ(yR, JR.currency);
      let uR = null;
      return JR.buyButtonText ? uR = JR.buyButtonText : tR ? (uR = GR, JR.sell && (uR = -1 * GR), uR = uR.toString()) : 0 === GR ? uR = "Free" : JR.isRewardedAd && (uR = "Watch ad"), (0, gG.I)(uR) || " " === uR ? null : (0, KR.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [tR && (0, KR.jsx)("div", {
          style: {
            color: yR[JR.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, KR.jsx)(ZZ, {
            iconName: yR[JR.currency].icon
          })
        }), (0, KR.jsx)("div", {
          className: "BuyItemCost",
          children: (0, KR.jsx)(gt.c, {
            text: uR
          })
        })]
      })
    }

    function xZ(RR) {
      let {
        item: JR,
        currInput: GR,
        updateInput: tR,
        onSubmit: uR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)(), iR = (0, yR.useRef)(null);
      if ((0, yR.useEffect)((() => {
          const RR = iR.current;
          RR && RR.value !== GR && document.activeElement !== RR && (RR.value = null !== GR && void 0 !== GR ? GR : "")
        }), [GR]), !JR.userInput) return null;
      let fR = JR.userInput;
      if (nR.featureFlags.sanitizeShopInput && "text" === JR.userInput.type && (fR = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === fR.type || "number" === fR.type) {
        var VR, wR;
        console.assert(void 0 !== GR, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(JR)}`);
        const RR = "text" === fR.type && fR.wordCharsOnly;
        return (0, KR.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, KR.jsx)(CR.b, {
            className: "ShopItemUserInputText",
            placeholderText: qR(fR.placeholderText),
            defaultValue: GR,
            domRef: iR,
            onValueChange: (JR, GR) => {
              !0 === RR && (JR = (0, Ot.ab)(JR)), iR.current.value = JR, tR(JR)
            },
            onEnter: uR,
            type: fR.type
          }, (null !== (VR = fR.initialValue) && void 0 !== VR ? VR : "") + (null !== (wR = fR.placeholderText) && void 0 !== wR ? wR : ""))
        })
      }
      if ("dropdown" === fR.type) {
        console.assert(void 0 !== GR, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(JR)}`);
        const RR = fR.autoSubmit;
        return (0, KR.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, KR.jsx)(YJ.e, {
            options: fR.dropdownOptions.map((RR => (0, Mt.f)(RR))),
            value: GR,
            onChange: JR => {
              let {
                value: GR
              } = JR;
              tR(GR), RR && uR(GR)
            }
          })
        })
      }
      return "player" === fR.type ? (0, KR.jsx)(NZ, {
        userInput: fR,
        currInput: GR,
        updateInput: tR
      }) : "color" === fR.type ? (0, KR.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, KR.jsx)("input", {
          type: "color",
          value: GR,
          onChange: RR => {
            tR(RR.target.value)
          }
        })
      }) : null
    }

    function NZ(RR) {
      let {
        userInput: JR,
        currInput: GR,
        updateInput: yR
      } = RR;
      const tR = (0, QJ.i)("players"),
        uR = (0, QJ.i)("hiddenPlayerNames"),
        ZR = (0, Mt.j)(tR.ids, tR.localId, JR);
      return (0, KR.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, KR.jsx)(YJ.e, {
          options: ZR.map((RR => {
            const {
              name: JR
            } = tR.byId[RR];
            return {
              value: RR,
              label: null === JR ? "" : (0, vt.e)(JR, uR)
            }
          })),
          value: GR,
          onChange: RR => {
            let {
              value: JR
            } = RR;
            yR(JR)
          }
        })
      })
    }

    function DZ(RR) {
      let {
        ids: JR
      } = RR;
      return JR
    }

    function HZ(RR) {
      let {
        localId: JR
      } = RR;
      return JR
    }
    var oZ = GR(1800);
    const cZ = (0, GR(1547).j)((RR => RR.PadLobbyShortcuts)),
      PZ = (0, yR.lazy)((() => Promise.resolve().then((() => GR(5463))).then((RR => ({
        default: RR.Lobbyleaderboard
      }))))),
      IZ = (0, yR.lazy)((() => GR.e(253).then((() => GR(42608))).then((RR => ({
        default: RR.LobbyManageView
      })))));

    function mZ(RR) {
      let {
        show: JR
      } = RR;
      return JR ? (0, KR.jsx)(zZ, {}) : null
    }

    function zZ() {
      const RR = (0, Dt.c)();
      return (0, KR.jsxs)(KR.Fragment, {
        children: [(0, KR.jsx)(cZ, {}), (0, KR.jsxs)(yR.Suspense, {
          fallback: (0, KR.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, KR.jsx)(XR.d, {})
          }),
          children: [RR && (0, KR.jsx)(IZ, {
            leaderboard: (0, KR.jsx)(PZ, {})
          }), !RR && (0, KR.jsx)(PZ, {})]
        })]
      })
    }
    var SZ = GR(1716),
      jZ = GR(3329),
      dZ = GR(1943),
      EZ = GR(4214),
      YZ = GR(3804),
      kZ = GR(1642),
      QZ = GR(1594),
      FZ = GR(4150),
      TZ = GR(4161),
      sZ = GR(4293),
      hZ = GR(3301);
    const Rq = "storeRecentGiftRecipients",
      Jq = new Map;

    function Gq() {
      try {
        const RR = wG.i.getItem(Rq);
        return Array.isArray(RR) ? RR.filter((RR => "string" === typeof(null === RR || void 0 === RR ? void 0 : RR.name) && RR.name.length > 0)).map((RR => ({
          name: RR.name,
          cosmetics: RR.cosmetics && "object" === typeof RR.cosmetics ? RR.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function yq(RR, JR) {
      var GR;
      const [tR, uR] = (0, yR.useState)(""), [ZR, qR] = (0, yR.useState)("search"), [iR, fR] = (0, yR.useState)(null), [VR, KR] = (0, yR.useState)(null), wR = (0, yR.useRef)(null), rR = (0, yR.useRef)(null);
      (0, yR.useEffect)((() => () => {
        wR.current && clearTimeout(wR.current)
      }), []), (0, yR.useEffect)((() => {
        JR || LR()
      }), [JR]);
      const eR = null !== (GR = null === iR || void 0 === iR ? void 0 : iR.name) && void 0 !== GR ? GR : null;

      function aR() {
        wR.current && (clearTimeout(wR.current), wR.current = null)
      }

      function LR() {
        aR(), uR(""), qR("search"), fR(null)
      }(0, yR.useEffect)((() => {
        if (null === eR || RR === bR.NULL_USER_CONTEXT) return;
        const JR = eR.toLowerCase();
        if (JR === RR.getPlayerName().toLowerCase()) return void KR({
          name: eR,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const GR = Jq.get(JR);
        if (GR) return void KR({
          name: eR,
          result: GR
        });
        let yR = !1;
        return async function(RR, JR) {
          try {
            const GR = await (0, bR.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: JR
            }, {
              retries: 1
            }, RR.getMetricsCookies());
            if ("boolean" !== typeof(null === GR || void 0 === GR ? void 0 : GR.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(GR)}`);
            return GR
          } catch (GR) {
            return console.error("Failed to look up gift recipient:", GR), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(RR, eR).catch((RR => (console.error("Gift recipient lookup failed:", RR), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((RR => {
          !0 !== RR.giftRecipientFound && "store:giftRecipientLookupFailed" === RR.giftRecipientError || Jq.set(JR, RR), yR || KR({
            name: eR,
            result: RR
          })
        })), () => {
          yR = !0
        }
      }), [eR, RR]);
      const nR = (0, yR.useMemo)((() => {
        const RR = tR.trim();
        if (!RR) return {
          status: "none"
        };
        if (!iR || iR.name !== RR || (null === VR || void 0 === VR ? void 0 : VR.name) !== iR.name) return {
          status: "pending",
          name: RR
        };
        const JR = VR.result;
        return !1 === JR.giftRecipientFound ? {
          status: "error",
          name: iR.name,
          error: JR.giftRecipientError
        } : {
          status: "found",
          name: JR.giftRecipientName,
          ownedPacks: JR.giftRecipientOwnedPacks,
          hasSuperRank: JR.giftRecipientHasSuperRank,
          isSubscriber: JR.giftRecipientIsSubscriber
        }
      }), [tR, iR, VR]);
      (0, yR.useEffect)((() => {
        "found" === nR.status && "typed" === (null === iR || void 0 === iR ? void 0 : iR.source) && rR.current !== nR.name && (rR.current = nR.name, (0, LJ.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [nR, iR]);
      const UR = (null === VR || void 0 === VR ? void 0 : VR.name) === (null === iR || void 0 === iR ? void 0 : iR.name) ? null === VR || void 0 === VR ? void 0 : VR.result : null,
        WR = !0 === (null === UR || void 0 === UR ? void 0 : UR.giftRecipientFound) ? UR.giftRecipientCosmetics : null;
      return {
        query: tR,
        via: ZR,
        recipient: nR,
        recipientCosmetics: WR,
        type: function(RR) {
          uR(RR), qR("search"), aR();
          const JR = RR.trim();
          JR ? wR.current = setTimeout((() => {
            fR({
              name: JR,
              source: "typed"
            })
          }), 400) : fR(null)
        },
        choose: function(RR, JR) {
          aR(), uR(RR), qR("typed" === JR ? "search" : "prefilled" === JR ? "prefilled" : "suggestion"), fR({
            name: RR,
            source: JR
          }), "typed" !== JR && "prefilled" !== JR && (0, LJ.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: JR
          })
        },
        clear: LR,
        recordGift: function(RR, JR) {
          ! function(RR) {
            Jq.delete(RR.toLowerCase())
          }(RR), KR((GR => {
            if (!GR || GR.name.toLowerCase() !== RR.toLowerCase() || !0 !== GR.result.giftRecipientFound || "superRank" === JR) return GR;
            const yR = GR.result.giftRecipientOwnedPacks;
            return {
              ...GR,
              result: {
                ...GR.result,
                giftRecipientOwnedPacks: yR.includes(JR) ? yR : [...yR, JR]
              }
            }
          }))
        }
      }
    }
    var tq = GR(3292),
      uq = GR(5474),
      Zq = GR(271),
      qq = GR(4051);
    const iq = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var fq = GR(3240),
      Vq = GR(656),
      Kq = GR(3361),
      wq = GR(3713);

    function rq(RR) {
      let {
        cosmetics: JR
      } = RR;
      return (0, KR.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, KR.jsx)(Kq.c, {
          cosmetics: JR
        })
      })
    }

    function eq(RR, JR) {
      var GR, yR;
      const tR = null !== (GR = RR.friend) && void 0 !== GR ? GR : {
        isError: !1,
        name: RR.name,
        ranks: [],
        cosmetics: null !== (yR = RR.cosmetics) && void 0 !== yR ? yR : {},
        nameColour: Vq.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return JR ? {
        ...tR,
        cosmetics: JR
      } : tR
    }

    function aq(RR) {
      let {
        pending: JR
      } = RR;
      return (0, KR.jsx)("span", {
        className: "StoreRecipientLoader",
        children: JR && (0, KR.jsx)(XR.d, {})
      })
    }

    function Lq(RR) {
      var JR;
      let {
        selfName: GR,
        giftRecipient: tR,
        suggestionsVersion: iR,
        pulseSignal: VR,
        disabled: wR
      } = RR;
      const {
        t: rR
      } = (0, ZR.A)(), eR = (0, kR.k)(), aR = (0, yR.useRef)(null), LR = (0, yR.useRef)(null), {
        query: UR,
        via: WR,
        recipient: AR,
        recipientCosmetics: XR
      } = tR, MR = (0, hZ.i)(UR), BR = (0, yR.useMemo)((() => {
        const RR = nR.featureFlags.useSocialFeatures ? eR.friends.filter((RR => !RR.isError)) : [];
        return (0, hZ.g)({
          onlineFriends: (0, kR.f)(RR),
          recentRecipients: Gq(),
          friends: RR,
          selfName: GR,
          max: 8
        })
      }), [eR.friends, GR, iR]), lR = UR.trim().toLowerCase(), pR = "search" !== WR && lR ? BR.find((RR => RR.name.toLowerCase() === lR)) : void 0, gR = pR && "prefilled" === WR ? [pR, ...BR.filter((RR => RR !== pR))] : BR, bR = "" !== lR && !pR, vR = bR ? UR : "", OR = gR.length > 0;
      (0, yR.useEffect)((() => {
        aR.current && aR.current.value !== vR && (aR.current.value = vR)
      }), [vR]), (0, yR.useEffect)((() => {
        aR.current && (aR.current.disabled = wR)
      }), [wR, VR]);
      const xR = (0, yR.useRef)(0);

      function DR() {
        "self" !== MR && (0, LJ.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), tR.clear()
      }

      function HR(RR) {
        var JR, GR;
        if (wR) return;
        if (" " === RR.key || "Enter" === RR.key) return RR.preventDefault(), void RR.currentTarget.click();
        const yR = Array.from(null !== (JR = null === (GR = LR.current) || void 0 === GR ? void 0 : GR.querySelectorAll("[role=radio]")) && void 0 !== JR ? JR : []),
          tR = yR.indexOf(RR.currentTarget);
        let uR;
        "ArrowRight" === RR.key || "ArrowDown" === RR.key ? uR = yR[(tR + 1) % yR.length] : "ArrowLeft" === RR.key || "ArrowUp" === RR.key ? uR = yR[(tR - 1 + yR.length) % yR.length] : "Home" === RR.key ? uR = yR[0] : "End" === RR.key && (uR = yR[yR.length - 1]), uR && (RR.preventDefault(), uR.focus(), uR.click())
      }(0, yR.useEffect)((() => {
        var RR;
        VR > xR.current && !wR && (xR.current = VR, null === (RR = aR.current) || void 0 === RR || RR.focus())
      }), [VR, wR]);
      const oR = "self" === MR,
        cR = null !== (JR = null === pR || void 0 === pR ? void 0 : pR.name) && void 0 !== JR ? JR : null,
        PR = "error" === AR.status ? AR.error : null,
        IR = "store:giftRecipientLookupFailed" === PR;
      return (0, KR.jsxs)("div", {
        className: uR()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: wR,
          StoreRecipientStripNoChips: !OR
        }),
        children: [(0, KR.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: rR("store:buyingFor")
        }), (0, KR.jsxs)("div", {
          ref: LR,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": rR("store:whoIsItFor"),
          children: [(0, KR.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": oR,
            tabIndex: wR || !oR && null !== cR ? -1 : 0,
            className: uR()("StoreRecipientMe", {
              StoreRecipientChecked: oR
            }),
            onClick: () => {
              wR || DR()
            },
            onKeyDown: HR,
            children: [(0, KR.jsx)(qR.d, {
              name: "user"
            }), " ", rR("store:me")]
          }), OR && (0, KR.jsx)("div", {
            className: "StoreRecipientChips",
            children: gR.map((RR => {
              const JR = RR === pR;
              return (0, KR.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": JR,
                tabIndex: !wR && JR ? 0 : -1,
                title: RR.name,
                className: uR()("StoreRecipientChip", {
                  StoreRecipientChecked: JR
                }),
                onClick: () => {
                  wR || function(RR) {
                    "gift" !== MR && (0, LJ.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), tR.choose(RR.name, RR.kind)
                  }(RR)
                },
                onKeyDown: HR,
                children: (0, KR.jsx)(wq.h, {
                  playerSocialPreview: eq(RR, JR ? XR : null),
                  opensProfileCard: !1,
                  isFriend: null !== RR.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== RR.friend,
                  status: null === RR.friend ? null : void 0,
                  trailing: JR ? (0, KR.jsx)(aq, {
                    pending: "pending" === AR.status
                  }) : void 0
                })
              }, RR.name)
            }))
          })]
        }), (0, KR.jsxs)("div", {
          className: uR()("StoreRecipientSearch", {
            StoreRecipientChecked: bR,
            StoreRecipientSearchPulse: VR > 0 && !bR,
            StoreRecipientSearchError: null !== PR && !IR
          }),
          onClick: () => {
            var RR;
            null === (RR = aR.current) || void 0 === RR || RR.focus()
          },
          children: [bR && "found" === AR.status && XR && (0, KR.jsx)(rq, {
            cosmetics: XR
          }), !(bR && "found" === AR.status && XR) && (0, KR.jsx)(qR.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, KR.jsx)(CR.b, {
            className: "StoreRecipientSearchInput",
            domRef: aR,
            placeholderText: rR("store:searchName"),
            defaultValue: vR,
            maxLength: NR.i,
            onValueChange: function(RR) {
              "gift" !== MR && RR.trim() && (0, LJ.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), tR.type(RR)
            },
            onEnter: () => {
              var RR;
              const JR = null === (RR = aR.current) || void 0 === RR ? void 0 : RR.value.trim();
              JR && tR.choose(JR, "typed")
            },
            blurOnEnter: !0
          }), bR && (0, KR.jsx)(aq, {
            pending: "pending" === AR.status
          }), bR && (0, KR.jsx)("div", {
            ...(0, fR.bb)({
              disabled: wR
            }),
            "aria-label": rR("store:clearRecipient"),
            title: rR("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: RR => {
              RR.stopPropagation(), wR || DR()
            },
            children: (0, KR.jsx)(qR.d, {
              name: "xmark"
            })
          })]
        }, VR), PR && (0, KR.jsx)("div", {
          className: uR()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: IR
          }),
          role: "status",
          children: rR(PR)
        })]
      })
    }
    var nq = GR(3172),
      Uq = GR(3413),
      Wq = GR(3724),
      Aq = GR(4884),
      Cq = GR(3243),
      Xq = GR(4326),
      Mq = GR(4332),
      Bq = GR(4296);
    const lq = [Vq.v.yellow, Vq.v.green, Vq.v.aqua, Vq.v.blue, Vq.v.purple, Vq.v.red];

    function pq(RR) {
      return "needsRecipient" === RR || "lookingUp" === RR || "gift" === RR || "recipientOwns" === RR || "recipientSharesOwned" === RR || "recipientSubscribed" === RR
    }

    function gq(RR) {
      const {
        onKeyDown: JR,
        ...GR
      } = (0, fR.bb)();
      return {
        ...GR,
        "aria-label": RR,
        onKeyDown: RR => {
          RR.target === RR.currentTarget && (null === JR || void 0 === JR || JR(RR))
        }
      }
    }

    function bq(RR) {
      let {
        text: JR
      } = RR;
      return (0, KR.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(JR).map(((RR, JR) => (0, KR.jsx)("span", {
          style: {
            color: lq[JR % lq.length]
          },
          children: RR
        }, JR)))
      })
    }
    const vq = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Oq(RR) {
      let {
        state: JR,
        item: GR,
        price: yR,
        busy: tR,
        highlight: iR = !1,
        secondary: VR = !1,
        onAct: wR,
        onNeedRecipient: rR,
        onLogin: eR
      } = RR;
      const {
        t: aR
      } = (0, ZR.A)(), LR = "superRank" === GR ? (0, IR.v)(Date.now()).product.days : null, nR = "superRank" === GR && "hyper" === (0, IR.s)(Date.now()).look ? fR.u : fR.n, UR = VR ? fR.i : nR, WR = RR => null === LR ? aR(RR ? "general:gift" : "general:buy") : aR(RR ? "store:giftDays" : "store:buyDays", {
        days: LR
      }), AR = (RR, JR) => {
        const GR = (0, KR.jsxs)(KR.Fragment, {
          children: [null === RR && (0, KR.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== RR && (0, KR.jsx)("span", {
            className: "StoreCtaLabel",
            title: RR,
            children: RR
          })]
        });
        return null !== LR ? (0, KR.jsxs)(KR.Fragment, {
          children: [JR && (0, KR.jsx)("span", {
            className: "StoreCtaIcon",
            children: JR
          }), GR, (0, KR.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, KR.jsx)(Uq.b, {
              amount: yR
            })]
          })]
        }) : (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsxs)("span", {
            className: "StoreCtaLead",
            children: [GR, "\xb7"]
          }), (0, KR.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [JR, (0, KR.jsx)(Uq.b, {
              amount: yR
            })]
          })]
        })
      };
      let CR;
      switch (JR) {
        case "pending":
          CR = (0, KR.jsx)(nR, {
            className: "StoreCtaButton",
            disabled: !0,
            children: AR(null)
          });
          break;
        case "login":
          CR = (0, KR.jsx)(UR, {
            className: "StoreCtaButton",
            onClick: eR,
            children: AR(WR(!1))
          });
          break;
        case "owned":
          CR = (0, KR.jsx)(fR.i, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, nq.b)("store")
            },
            children: (0, KR.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, KR.jsx)(qR.d, {
                name: "shirt"
              }), " ", aR("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          CR = (0, KR.jsx)(nR, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, KR.jsx)("span", {
              className: "StoreCtaLabel",
              children: aR(vq[JR])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          CR = (0, KR.jsx)(nR, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === JR || null === yR,
            loading: "lookingUp" === JR || tR,
            onClick: wR,
            analyticsClick: {
              id: "store.gift",
              value: GR
            },
            children: AR(WR(!0), hZ.b)
          });
          break;
        case "buy":
        case "recharge":
          CR = (0, KR.jsx)(UR, {
            className: "StoreCtaButton",
            loading: tR,
            disabled: null === yR,
            onClick: wR,
            analyticsClick: {
              id: "store.buy",
              value: GR
            },
            children: AR(WR(!1))
          })
      }
      return (0, KR.jsx)("div", {
        className: uR()("StoreCta", {
          StoreCtaHighlight: iR,
          StoreCtaLabelFirst: null !== LR
        }),
        onClick: RR => {
          RR.stopPropagation(), "needsRecipient" === JR && rR()
        },
        children: CR
      })
    }
    const xq = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Nq(RR) {
      var JR;
      let {
        pack: GR,
        state: tR,
        busy: iR,
        onOpen: fR,
        onAct: VR,
        onNeedRecipient: wR,
        onLogin: rR
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), aR = SZ.b[GR], LR = FZ.j[GR], nR = (0, fq.k)(GR), UR = (0, yR.useRef)(null);
      (0, Xq.n)(GR, UR);
      const WR = pq(tR),
        AR = null !== (JR = aR.displayName) && void 0 !== JR ? JR : GR,
        CR = (0, Aq.e)((() => {
          (0, Wq.g)();
          const RR = (0, Xq.f)(GR);
          void 0 !== RR && (0, Cq.g)((0, Xq.e)(RR))
        })),
        [XR] = (0, yR.useState)(qq.i);
      return (0, KR.jsxs)("div", {
        className: uR()("StoreTile StorePackTile", xq[aR.tier], {
          StorePackTileOwned: "owned" === tR,
          StorePackTileRecipientOwns: "recipientOwns" === tR,
          StoreTileGift: WR
        }),
        ...gq(AR),
        ref: UR,
        "data-store-item": GR,
        onClick: fR,
        onPointerMove: RR => {
          "mouse" !== RR.pointerType || 0 === RR.movementX && 0 === RR.movementY || XR || CR.start()
        },
        onPointerLeave: CR.cancel,
        children: [LR && (0, KR.jsx)(LR, {
          simple: !0
        }), (0, KR.jsx)("div", {
          className: "StorePackCharacters",
          children: nR.map((RR => (0, KR.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,fq.g)(RR)})`
            }
          }, RR)))
        }), (0, KR.jsx)("div", {
          className: "StoreTileScrim"
        }), WR && (0, KR.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, KR.jsx)(Bq.c, {
          pack: GR,
          className: uR()({
            PackAnimatedBadgeBesideRibbon: WR
          })
        }), (0, KR.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, KR.jsx)("div", {
            className: "StoreTileTitle",
            children: AR
          }), (0, KR.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, KR.jsx)(Mq.b, {
              tier: aR.tier
            }), " \xb7 ", eR("store:itemCount", {
              count: (0, ft.j)(GR)
            }), "owned" === tR && (0, KR.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, KR.jsx)(qR.d, {
                name: "check"
              }), " ", eR("general:owned")]
            })]
          }), (0, KR.jsx)(Oq, {
            state: tR,
            item: GR,
            price: (0, jZ.f)(GR),
            busy: iR,
            onAct: VR,
            onNeedRecipient: wR,
            onLogin: rR
          })]
        })]
      })
    }
    var Dq = GR(1724),
      Hq = GR(4937),
      oq = GR(4360),
      cq = GR(5041),
      Pq = GR(35176),
      Iq = GR(4955);
    const mq = {
      cape: PR.h.cape
    };

    function zq(RR) {
      var JR, GR;
      let {
        wearer: tR,
        active: qR,
        tryOn: iR = mq,
        framing: fR = "store",
        glow: VR = !0,
        turnable: wR = !1,
        className: rR
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), aR = (0, yR.useRef)(null), [LR] = (0, yR.useState)(qq.i), nR = function(RR) {
        const [JR, GR] = (0, yR.useState)(!1);
        return (0, yR.useEffect)((() => {
          const JR = new IntersectionObserver((RR => {
            GR(RR[RR.length - 1].isIntersecting)
          }));
          return JR.observe(RR.current), () => {
            JR.disconnect()
          }
        }), [RR]), JR
      }(aR), UR = (0, Iq.f)("storeRank"), WR = null !== (JR = tR.name) && void 0 !== JR ? JR : eR(tR.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), AR = null !== (GR = tR.cosmetics) && void 0 !== GR ? GR : {}, CR = `${WR}|${JSON.stringify(AR)}`, XR = qR && nR && !LR && !UR, [MR, BR] = (0, yR.useState)(null);
      XR || null === MR || BR(null);
      const lR = XR && MR === CR;
      return (0, KR.jsxs)("div", {
        ref: aR,
        className: uR()("HyperRankStage", rR, {
          HyperRankStageDrawn: lR
        }),
        children: [VR && (0, KR.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, KR.jsx)(IR.c, {
          className: "HyperRankStageStandIn"
        }), XR && (0, KR.jsx)(Sq, {
          name: WR,
          cosmetics: AR,
          tryOn: iR,
          framing: fR,
          turnable: wR,
          onDrawn: () => {
            BR(CR)
          }
        }, CR), (0, KR.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function Sq(RR) {
      let {
        name: JR,
        cosmetics: GR,
        tryOn: tR,
        framing: ZR,
        turnable: qR,
        onDrawn: iR
      } = RR;
      const fR = (0, yR.useRef)(null),
        VR = (0, yR.useRef)(0),
        wR = (0, yR.useRef)(null),
        rR = (0, yR.useMemo)((() => {
          var RR;
          return {
            name: JR,
            ranks: [PR.h.rank],
            nameColour: null !== (RR = GR.nameColour) && void 0 !== RR ? RR : Vq.c
          }
        }), [JR, GR.nameColour]),
        eR = RR => {
          var JR;
          (null === (JR = wR.current) || void 0 === JR ? void 0 : JR.pointerId) === RR.pointerId && (wR.current = null)
        },
        aR = qR ? {
          onPointerDown: RR => {
            0 === RR.button && (wR.current = {
              pointerId: RR.pointerId,
              x: RR.clientX
            }, RR.currentTarget.setPointerCapture(RR.pointerId))
          },
          onPointerMove: RR => {
            var JR;
            const GR = wR.current;
            (null === GR || void 0 === GR ? void 0 : GR.pointerId) === RR.pointerId && (VR.current -= (RR.clientX - GR.x) * Pq.e, GR.x = RR.clientX, null === (JR = fR.current) || void 0 === JR || JR.turnCamera(VR.current))
          },
          onPointerUp: eR,
          onPointerCancel: eR
        } : {};
      return (0, KR.jsx)("div", {
        className: uR()("HyperRankStageLive", {
          HyperRankStageTurnable: qR
        }),
        ...aR,
        children: (0, KR.jsx)(yR.Suspense, {
          fallback: null,
          children: (0, KR.jsx)(Wq.e, {
            ref: fR,
            owner: "storeRank",
            framing: ZR,
            forcedCosmetics: tR,
            nametag: rR,
            onReady: () => {
              var RR;
              null === (RR = fR.current) || void 0 === RR || RR.setAllCosmetics(GR)
            },
            onDrawn: iR
          })
        })
      })
    }
    var jq = GR(5043);

    function dq(RR) {
      var JR;
      return null !== (JR = (0, it.i)(RR)) && void 0 !== JR ? JR : it.n[it.n.length - 1]
    }

    function Eq(RR, JR) {
      return RR.tiers.flatMap((RR => {
        var GR;
        return null !== (GR = RR[JR]) && void 0 !== GR ? GR : []
      }))
    }

    function Yq(RR) {
      const JR = Eq(RR, "hyper");
      return JR.filter((RR => "cosmetic" === RR.kind && !(0, cq.q)(RR, JR)))
    }

    function kq(RR, JR) {
      const GR = Eq(RR, JR).find((RR => "xpBoost" === RR.kind));
      return "xpBoost" === (null === GR || void 0 === GR ? void 0 : GR.kind) ? GR : null
    }

    function Qq(RR) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, KR.jsx)(bq, {
          text: RR("store:colourfulNames")
        }),
        detail: RR("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: RR("store:perkCapes"),
        detail: RR("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: RR("store:perkNametag", {
          rank: RR((0, IR.l)(PR.h.id).nameKey)
        }),
        detail: RR("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: RR("store:perkNoAdverts"),
        detail: RR("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: RR("store:perkFriends", {
          count: (0, eJ.d)([PR.h.rank])
        }),
        detail: RR("store:perkFriendsDetail", {
          count: (0, eJ.d)([])
        })
      }]
    }

    function Fq() {
      const {
        t: RR
      } = (0, ZR.A)(), JR = [{
        id: "battlePass",
        icon: "crown",
        title: RR("store:perkBattlePassTrack")
      }, ...Qq(RR)];
      return (0, KR.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: JR.map((RR => (0, KR.jsxs)("li", {
          children: [(0, KR.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, KR.jsx)(qR.d, {
              name: RR.icon
            })
          }), RR.title]
        }, RR.id)))
      })
    }

    function Tq() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, KR.jsx)(sq, {}), Qq(RR).map((RR => (0, KR.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, KR.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, KR.jsx)(qR.d, {
              name: RR.icon
            })
          }), (0, KR.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, KR.jsx)("b", {
              children: RR.title
            }), (0, KR.jsx)("small", {
              children: RR.detail
            })]
          })]
        }, RR.id)))]
      })
    }

    function sq() {
      const {
        t: RR,
        selectedLanguage: JR
      } = (0, ZR.A)(), GR = dq(Date.now()), yR = Yq(GR), tR = function(RR) {
        return Yq(RR).filter((RR => null !== (0, cq.o)(RR) || null !== (0, cq.p)(RR))).reverse()
      }(GR).slice(0, 4), uR = kq(GR, "hyper"), iR = kq(GR, "free"), fR = (0, ZR.f)(JR.code, "store:battlePassTiersEnds", GR.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, KR.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, KR.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, KR.jsx)(qR.d, {
            name: "crown"
          })
        }), (0, KR.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, KR.jsx)("b", {
            children: RR("store:battlePassSeason", {
              season: GR.seasonNumber
            })
          }), (0, KR.jsx)("small", {
            children: RR("store:battlePassTiersEnds", {
              tiers: GR.tierCount,
              date: fR
            })
          })]
        }), (0, KR.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, KR.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === yR.length ? RR("store:battlePassOneCosmetic") : RR("store:battlePassCosmetics", {
              count: yR.length
            })
          }), (0, KR.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [tR.map((JR => (0, KR.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, cq.f)(JR, RR),
              children: (0, KR.jsx)(jq.e, {
                reward: JR
              })
            }, JR.id))), yR.length > tR.length && (0, KR.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: RR("store:battlePassMore", {
                count: yR.length - tR.length
              })
            })]
          })]
        }), (0, KR.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [uR && iR && (0, KR.jsxs)("li", {
            children: [(0, KR.jsx)(qR.d, {
              name: "angles-up"
            }), RR("store:battlePassXp", {
              multiplier: uR.multiplier,
              minutes: uR.minutes,
              freeMinutes: iR.minutes
            })]
          }), (0, KR.jsxs)("li", {
            children: [(0, KR.jsx)(qR.d, {
              name: "lock-open"
            }), RR("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }
    const hq = ["snowmanSet", "skis", "reindeerPet"];

    function Ri() {
      const RR = dq(Date.now()),
        JR = {};
      let GR = 0;
      for (const tR of RR.tiers) {
        const RR = tR.hyper;
        var yR;
        if ("cosmetic" === (null === RR || void 0 === RR ? void 0 : RR.kind) && hq.includes(RR.id)) Object.assign(JR, null === (yR = (0, cq.k)(RR)) || void 0 === yR ? void 0 : yR.cosmetics), GR++
      }
      return GR < hq.length && console.warn(`Hyper Rank's page wears ${GR} of its ${hq.length} rewards: ${RR.seasonId} lacks the others`), {
        ...JR,
        cape: PR.h.cape
      }
    }

    function Ji(RR) {
      let {
        wearer: JR
      } = RR;
      const GR = (0, yR.useMemo)(Ri, []);
      return (0, KR.jsx)(zq, {
        className: "HyperRankShowcase",
        wearer: JR,
        active: !0,
        tryOn: GR,
        framing: "showcase",
        glow: !1,
        turnable: !0
      })
    }
    const Gi = GR.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function yi() {
      (0, Cq.g)(Gi, {
        lowPriority: !1
      })
    }

    function ti() {
      const {
        t: RR
      } = (0, ZR.A)(), [JR, GR] = (0, yR.useState)("starting"), tR = (0, yR.useRef)(null), uR = (0, ZG.d)(), iR = (0, yR.useRef)(null), VR = (0, yR.useCallback)((() => {
        const RR = tR.current;
        null !== RR.error && RR.load();
        const JR = RR.play();
        iR.current = JR, JR.catch((RR => {
          (0, Hq.e)("Failed to play Super Rank video", RR), uR.current && iR.current === JR && GR("failed")
        }))
      }), [uR]);
      return (0, yR.useEffect)((() => {
        const RR = tR.current;
        let JR;

        function GR() {
          clearTimeout(JR), JR = setTimeout(VR, 3e3)
        }
        return VR(), RR.addEventListener("ended", GR), () => {
          clearTimeout(JR), RR.removeEventListener("ended", GR)
        }
      }), [VR]), (0, KR.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, KR.jsx)("video", {
          ref: tR,
          src: `${bJ.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: Gi,
          muted: !0,
          playsInline: !0,
          controls: "playing" === JR,
          onPlaying: () => {
            GR("playing")
          },
          onError: () => {
            GR("failed")
          }
        }), ("failed" === JR || "loading" === JR) && (0, KR.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, KR.jsx)(fR.g, {
            ariaLabel: RR("general:play"),
            loading: "loading" === JR,
            onClick: () => {
              GR("loading"), VR()
            },
            touchPressOn: "pointerup",
            children: (0, KR.jsx)(qR.d, {
              name: "play"
            })
          })
        })]
      })
    }

    function ui(RR) {
      let {
        tierId: JR,
        wearer: GR,
        onBack: yR,
        cta: tR,
        recipient: qR,
        afterCta: iR
      } = RR;
      const {
        t: VR
      } = (0, ZR.A)(), wR = "hyper" === (0, IR.l)(JR).look;
      return (0, KR.jsxs)("div", {
        className: uR()("StoreSuperRankDetail", {
          StoreHyperRankDetail: wR
        }),
        children: [(0, KR.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, KR.jsx)(fR.d, {
            className: "StoreDetailBackButton",
            onClick: yR,
            padBack: !0,
            children: VR("general:back")
          }), (0, KR.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, KR.jsx)(IR.g, {
              tierId: JR
            })
          }), qR]
        }), (0, KR.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [wR && (0, KR.jsx)(Ji, {
            wearer: GR
          }), !wR && (0, KR.jsx)(ti, {}), (0, KR.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [wR && (0, KR.jsx)(Tq, {}), !wR && (0, KR.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, KR.jsx)(oq.b, {
                tierId: JR
              })
            }), (0, KR.jsxs)("div", {
              className: "StoreTileActions",
              children: [tR, iR]
            })]
          })]
        })]
      })
    }
    var Zi = GR(4231),
      qi = GR(3731);

    function ii() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, KR.jsx)("div", {
        className: "SmallTextBold",
        children: RR("payments:legalDocumentLoadFailed")
      })
    }
    const fi = (0, yR.lazy)((() => (0, qi.b)(Promise.all([GR.e(146), GR.e(711)]).then((() => GR(7654))), (RR => RR.default), ii))),
      Vi = (0, yR.lazy)((() => (0, qi.b)(GR.e(148).then((() => GR(7675))), (RR => RR.default), ii)));

    function Ki(RR, JR) {
      RR.preventDefault(), tJ.NotificationProvider.showCustomPopup({
        body: (0, KR.jsx)("div", {
          className: "AppLegalDocument",
          children: (0, KR.jsx)(yR.Suspense, {
            fallback: (0, KR.jsx)(XR.d, {}),
            children: (0, KR.jsx)(JR, {})
          })
        }),
        middleScreenPopupClassName: "AppLegalDocumentPopup",
        unlockPointerKey: "appLegalDocument"
      })
    }

    function wi(RR) {
      let {
        price: JR,
        perks: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [GR, (0, KR.jsx)("div", {
          className: "SmallTextLight",
          children: yR("payments:subscriptionRenewsMonthly", {
            price: JR
          })
        }), (0, KR.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: ["mobileIos" === gR.siteUsed && (0, KR.jsx)("a", {
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            target: "_blank",
            rel: "noreferrer",
            children: yR("payments:appleTermsOfUse")
          }), "mobileIos" !== gR.siteUsed && (0, KR.jsx)("a", {
            href: "/terms-of-service",
            onClick: RR => {
              Ki(RR, Vi)
            },
            children: yR("homePage:termsOfService")
          }), (0, KR.jsx)("a", {
            href: "/privacy-policy",
            onClick: RR => {
              Ki(RR, fi)
            },
            children: yR("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var ri = GR(4305),
      ei = GR(4307),
      ai = GR(4191);

    function Li(RR) {
      const {
        userContext: JR
      } = (0, eR.d)(), {
        purchaseUnderWay: GR,
        notice: tR,
        subscribe: uR
      } = (0, ai.e)(), [ZR, qR] = (0, yR.useState)(null), [iR, fR] = (0, yR.useState)(0), VR = (0, ZG.d)(), KR = JR !== bR.NULL_USER_CONTEXT, wR = KR && (JR.mayBuy() || (0, jR.guestsMayBuy)()), rR = null !== ZR && ZR.loadedFor === JR ? ZR.offer : null, aR = null === tR || void 0 === tR ? void 0 : tR.pendingIntentId, LR = (0, yR.useRef)(aR);

      function nR() {
        fR((RR => RR + 1))
      }
      return (0, yR.useEffect)((() => {
        void 0 !== LR.current && void 0 === aR && nR(), LR.current = aR
      }), [aR]), (0, yR.useEffect)((() => {
        if (!KR) return;
        let GR = !1;
        return async function(RR, JR) {
          const {
            offering: GR
          } = await (0, hR.getBillingClient)().getOfferings(RR), yR = null === GR || void 0 === GR ? void 0 : GR.packages.find(sR.isPricedPackage);
          return void 0 === yR ? {
            kind: "unavailable"
          } : JR ? {
            kind: "loaded",
            pkg: yR,
            preview: await (0, ei.f)(yR.productId)
          } : {
            kind: "loaded",
            pkg: yR,
            preview: {
              kind: "none"
            }
          }
        }(RR, wR).catch((JR => (console.error(`Billing: loading the ${RR} subscription or its preview failed:`, JR), {
          kind: "loadFailed"
        }))).then((RR => {
          GR || qR((GR => "loadFailed" === RR.kind && (null === GR || void 0 === GR ? void 0 : GR.loadedFor) === JR ? GR : {
            loadedFor: JR,
            offer: RR
          }))
        })), () => {
          GR = !0
        }
      }), [RR, JR, KR, wR, iR]), {
        offer: rR,
        purchaseUnderWay: GR,
        notice: tR,
        pendingIntentId: aR,
        mountedRef: VR,
        checkOut: async function(RR) {
          const GR = await uR(RR);
          VR.current && ("unknownPackage" === GR.kind && qR({
            loadedFor: JR,
            offer: {
              kind: "unavailable"
            }
          }), nR())
        }
      }
    }

    function ni(RR) {
      let {
        onOfferedChange: JR
      } = RR;
      return (0, jR.usePurchasesAllowed)() && (0, jR.subscriptionsSold)() ? (0, KR.jsx)(Ui, {
        onOfferedChange: JR
      }) : null
    }

    function Ui(RR) {
      let {
        onOfferedChange: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        offer: tR,
        purchaseUnderWay: uR,
        notice: qR,
        pendingIntentId: iR,
        mountedRef: VR,
        checkOut: wR
      } = Li((0, IR.l)(PR.h.id).placementId), [rR, eR] = (0, yR.useState)(!1), aR = null === tR || "loaded" === tR.kind && "refused" !== tR.preview.kind;
      if ((0, yR.useEffect)((() => {
          JR(aR)
        }), [aR]), null === tR || "unavailable" === tR.kind) return null;
      if ("loadFailed" === tR.kind) return (0, KR.jsx)(Zi.j, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: LR,
        preview: UR
      } = tR;
      if ("refused" === UR.kind) return (0, KR.jsx)(Zi.j, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(UR.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const WR = (0, uJ.d)(LR);
      return (0, KR.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: RR => {
          RR.stopPropagation()
        },
        children: [(0, KR.jsx)(Zi.j, {
          notice: qR,
          className: "SmallTextBold"
        }), (0, KR.jsx)(Zi.c, {
          className: "SmallTextBold"
        }), (0, KR.jsx)("div", {
          className: "StoreCta",
          children: (0, KR.jsx)(fR.u, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(RR, JR) {
                if ("refund" === JR.kind) {
                  eR(!0);
                  const RR = await (0, ri.e)(JR, null);
                  if (!VR.current) return;
                  if (eR(!1), !RR) return
                }
                await wR(RR)
              }(LR, UR)
            },
            disabled: void 0 !== iR,
            loading: uR || rR,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, KR.jsx)("span", {
              className: "StoreCtaLabel",
              children: GR("payments:subscribeContinue", {
                price: WR
              })
            })
          })
        }), (0, nR.isMobileApp)() && (0, KR.jsx)(wi, {
          price: WR,
          perks: (0, KR.jsx)(Fq, {})
        })]
      })
    }

    function Wi() {
      const {
        t: RR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, KR.jsxs)("li", {
          children: [(0, KR.jsx)(qR.d, {
            name: "check"
          }), (0, KR.jsx)(bq, {
            text: RR("store:colourfulNames")
          })]
        }), (0, KR.jsxs)("li", {
          children: [(0, KR.jsx)(qR.d, {
            name: "check"
          }), RR("store:perkCapes")]
        }), (0, KR.jsxs)("li", {
          children: [(0, KR.jsx)(qR.d, {
            name: "check"
          }), RR("store:perkNoAdverts")]
        }), (0, KR.jsxs)("li", {
          children: [(0, KR.jsx)(qR.d, {
            name: "check"
          }), RR("store:perkFriends", {
            count: (0, eJ.d)(["super"])
          })]
        })]
      })
    }

    function Ai(RR, JR) {
      return 1 === JR ? RR("store:oneDayLeft") : RR("store:daysLeft", {
        days: JR
      })
    }

    function Ci(RR) {
      let {
        daysLeft: JR,
        totalDays: GR,
        urgent: yR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)(), qR = GR > 0 ? Math.min(1, Math.max(.03, JR / GR)) : 1;
      return (0, KR.jsxs)("div", {
        className: uR()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: yR
        }),
        children: [(0, KR.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: Ai(tR, JR)
        }), (0, KR.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, KR.jsx)("i", {
            style: {
              width: 100 * qR + "%"
            }
          })
        })]
      })
    }

    function Xi(RR) {
      var JR;
      let {
        state: GR,
        urgent: tR,
        daysLeft: qR,
        totalDays: iR,
        recipientHasSuperRank: fR,
        busy: VR,
        highlight: wR,
        onOpen: rR,
        onAct: aR,
        onNeedRecipient: LR,
        onLogin: UR,
        wearer: WR,
        live: AR,
        onWake: CR
      } = RR;
      const {
        t: XR
      } = (0, ZR.A)(), {
        userContext: MR
      } = (0, eR.d)(), BR = Date.now(), lR = (0, IR.s)(BR), pR = "hyper" === lR.look, gR = pR ? void 0 : yi, bR = pq(GR), vR = (0, IR.v)(BR), {
        days: OR
      } = vR.product, xR = XR("store:recipientHasSuperRank", {
        giftDays: OR
      }), NR = null === (JR = wJ("subscribed" === GR)) || void 0 === JR ? void 0 : JR.text, DR = bR ? null : (0, IR.o)(MR.superRankInfo, BR), HR = pR && !bR && "subscribed" !== GR && "pending" !== GR && (0, jR.subscriptionsSold)() && !(0, nR.isMobileApp)(), [oR, cR] = (0, yR.useState)(!0);
      return (0, KR.jsxs)("div", {
        className: uR()("StoreTile StoreSuperRankTile", {
          StoreTileGift: bR,
          StoreSuperRankTileUrgent: "recharge" === GR && tR,
          StoreSuperRankTileWithChip: fR,
          StoreSuperRankTileGiftReady: "gift" === GR,
          StoreHyperRankTile: pR
        }),
        ...gq(XR(lR.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: gR,
        onFocus: gR,
        onPointerMove: RR => {
          !pR || AR || "mouse" !== RR.pointerType || 0 === RR.movementX && 0 === RR.movementY || CR()
        },
        onClick: rR,
        children: [pR && (0, KR.jsx)(zq, {
          className: "StoreHyperRankTileStage",
          wearer: WR,
          active: AR
        }), !pR && (0, KR.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${lR.artUrl})`
          }
        }), bR && (0, KR.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, KR.jsxs)("div", {
          className: "StoreTileContent",
          children: [fR && (0, KR.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: xR,
            children: xR
          }), (0, KR.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, KR.jsx)(IR.g, {
              tierId: (0, mR.i)(BR).id
            })
          }), bR && (0, KR.jsx)("div", {
            className: "StoreTilePitch",
            children: XR("store:giftPitch", {
              days: OR
            })
          }), pR && ("buy" === GR || "login" === GR) && null === DR && (0, KR.jsx)("div", {
            className: "StoreTilePitch",
            children: XR("store:hyperHook")
          }), "recharge" === GR && (0, KR.jsx)(Ci, {
            daysLeft: qR,
            totalDays: iR,
            urgent: tR
          }), NR && (0, KR.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, KR.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: NR
            })
          }), null !== DR && (0, KR.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, KR.jsx)(SR, {
              className: "StoreSuperRankDaysLeft",
              until: DR
            })
          }), pR && (0, KR.jsx)(Fq, {}), !pR && (0, KR.jsx)(Wi, {}), (0, KR.jsxs)("div", {
            className: "StoreTileActions",
            children: [HR && (0, KR.jsx)(ni, {
              onOfferedChange: cR
            }), (0, Dq.e)(vR.product.tierId, BR) && (0, KR.jsx)(Oq, {
              state: GR,
              item: "superRank",
              price: vR.price,
              busy: VR,
              highlight: wR,
              secondary: HR && oR,
              onAct: aR,
              onNeedRecipient: LR,
              onLogin: UR
            }), "needsRecipient" === GR && (0, KR.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: XR("store:pickRecipientFirst")
            }), "recharge" === GR && tR && (0, KR.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === qR ? XR("store:endsInOneDay") : XR("store:endsInDays", {
                days: qR
              })
            })]
          })]
        })]
      })
    }
    var Mi = GR(1709),
      Bi = GR(1597),
      li = GR(4913);

    function gi() {
      return (0, KR.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var bi = GR(1487),
      vi = GR(1718),
      Oi = GR(35193);

    function xi(RR) {
      let {
        character: JR,
        drawn: GR,
        onDrawn: tR
      } = RR;
      const ZR = (0, yR.useRef)(null),
        qR = (0, Oi.e)(JR);
      return (0, KR.jsx)("div", {
        className: uR()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: GR
        }),
        children: (0, KR.jsx)(yR.Suspense, {
          fallback: null,
          children: (0, KR.jsx)(Wq.e, {
            ref: ZR,
            framing: "store",
            turntableFromYaw: GR ? qR.yaw : null,
            onReady: () => {
              var RR, GR;
              null === (RR = ZR.current) || void 0 === RR || RR.setOrbit(qR), null === (GR = ZR.current) || void 0 === GR || GR.setAllCosmetics(vi.b[JR].cosmetics)
            },
            onDrawn: tR
          })
        })
      })
    }
    var Ni = GR(4303);
    const Di = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Hi = new Set(["wildSpirits"]);

    function oi(RR) {
      var JR;
      let {
        tile: GR,
        design: tR,
        canGoLive: iR,
        live: fR,
        busy: VR,
        highlight: wR,
        onLiveStart: rR,
        onLiveEnd: eR,
        onOpen: aR,
        onAct: LR,
        onNeedRecipient: nR,
        onLogin: UR
      } = RR;
      const {
        t: WR
      } = (0, ZR.A)(), {
        pack: AR,
        state: CR
      } = GR, XR = SZ.b[AR], MR = (0, SZ.c)(AR), BR = (0, fq.h)(AR), lR = FZ.j[BR], pR = Hi.has(BR), {
        tier: gR
      } = XR, bR = (0, Ni.f)(AR), vR = "legendary" === gR || "mythic" === gR, OR = (0, yR.useRef)(null);
      (0, bi.b)(OR, "epic" === gR || vR || pR);
      const [NR, DR] = (0, yR.useState)(!1);
      return !fR && NR && DR(!1), (0, KR.jsxs)("div", {
        ref: OR,
        className: uR()("StoreCharacterCard", `StoreCharacterCard${tR}`, Di[gR], {
          StoreCharacterCardOwned: "owned" === CR || "recipientOwns" === CR,
          StoreCharacterCardGift: pq(CR),
          StoreCharacterCardItem: void 0 === MR
        }),
        onPointerMove: RR => {
          "mouse" !== RR.pointerType || 0 === RR.movementX && 0 === RR.movementY || !iR || fR || void 0 === MR || rR()
        },
        onPointerLeave: eR,
        children: [(0, KR.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: lR && (0, KR.jsx)(lR, {
            simple: !0
          })
        }), vR && (0, KR.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, KR.jsxs)(xR.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Mi.g)({
            kind: "pack",
            pack: AR
          }, Date.now()),
          "data-store-item": AR,
          onClick: RR => {
            (0, Bi.e)(RR) && (RR.preventDefault(), aR())
          },
          children: [(0, KR.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, KR.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, KR.jsx)("div", {
              className: uR()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: NR
              }),
              style: {
                backgroundImage: `url(${(0,fq.o)(AR)})`
              }
            }), fR && void 0 !== MR && (0, KR.jsx)(xi, {
              character: MR,
              drawn: NR,
              onDrawn: () => {
                DR(!0)
              }
            })]
          }), (0, KR.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (JR = XR.displayName) && void 0 !== JR ? JR : AR
          }), (0, KR.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, KR.jsx)(Mq.b, {
              tier: gR
            }), bR && (0, KR.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, KR.jsx)(qR.d, {
                name: "film"
              }), WR("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, KR.jsx)("div", {
          className: "StoreCharacterScrim"
        }), pR && (0, KR.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, KR.jsx)(gi, {})
        }), (0, KR.jsx)(Bq.c, {
          pack: AR,
          iconOnly: !0,
          className: uR()({
            PackAnimatedBadgeBelowOwned: "owned" === CR
          })
        }), "owned" === CR && (0, KR.jsx)("span", {
          className: "StoreCharacterOwned",
          title: WR("general:owned"),
          "aria-label": WR("general:owned"),
          children: (0, KR.jsx)(qR.d, {
            name: "check"
          })
        }), (0, KR.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, KR.jsx)(Oq, {
            state: CR,
            item: AR,
            price: (0, jZ.f)(AR),
            busy: VR,
            highlight: wR,
            onAct: LR,
            onNeedRecipient: nR,
            onLogin: UR
          })
        })]
      })
    }

    function ci(RR) {
      let {
        tiles: JR,
        busy: GR,
        highlightItem: tR,
        onOpen: uR,
        onAct: ZR,
        onNeedRecipient: qR,
        onLogin: iR,
        livePack: fR,
        setLivePack: VR
      } = RR;
      const wR = (0, li.s)("storeCharacterCardFoil"),
        rR = (0, li.s)("storeCharacterCardSpotlight"),
        eR = wR ? "Foil" : rR ? "Spotlight" : "Showcase",
        [aR] = (0, yR.useState)(qq.i);
      return (0, KR.jsx)("div", {
        className: "StoreCharacterGrid",
        children: JR.map((RR => (0, KR.jsx)(oi, {
          tile: RR,
          design: eR,
          canGoLive: !aR,
          live: fR === RR.pack,
          busy: GR,
          highlight: tR === RR.pack,
          onLiveStart: () => {
            VR(RR.pack)
          },
          onLiveEnd: () => {
            VR((JR => JR === RR.pack ? null : JR))
          },
          onOpen: () => {
            uR(RR.pack)
          },
          onAct: () => {
            ZR(RR.pack)
          },
          onNeedRecipient: qR,
          onLogin: () => {
            iR(RR.pack)
          }
        }, RR.pack)))
      })
    }
    var Pi = GR(35204);

    function Ii(RR) {
      let {
        title: JR
      } = RR;
      return (0, KR.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, KR.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: JR
        })
      })
    }

    function mi(RR) {
      let {
        mountAtOnce: JR,
        children: GR
      } = RR;
      const tR = (0, yR.useRef)(null),
        [uR, ZR] = (0, yR.useState)(JR),
        qR = (0, Pi.e)();
      return (0, yR.useLayoutEffect)((() => {
        const RR = tR.current;
        RR && RR.getBoundingClientRect().top < RR.parentElement.getBoundingClientRect().bottom && ZR(!0)
      }), []), uR || qR ? (0, KR.jsx)(KR.Fragment, {
        children: GR
      }) : (0, KR.jsx)("div", {
        ref: tR
      })
    }

    function zi(RR) {
      let {
        layout: JR,
        mountAtOnce: GR,
        bundleGift: tR,
        superRankTotalDays: uR,
        busy: qR,
        highlightItem: iR,
        onOpen: fR,
        onAct: VR,
        onNeedRecipient: wR,
        onLogin: rR,
        dailyDropTile: eR,
        dealBanner: aR,
        rankWearer: LR
      } = RR;
      const {
        t: nR
      } = (0, ZR.A)(), UR = JR.packs.filter((RR => void 0 === (0, SZ.c)(RR.pack) && !(0, SZ.h)(RR.pack))), WR = JR.packs.filter((RR => void 0 !== (0, SZ.c)(RR.pack))), AR = JR.packs.filter((RR => (0, SZ.h)(RR.pack))), [CR, XR] = (0, yR.useState)(null), [MR, lR] = (0, yR.useState)(!1), {
        gameState: pR
      } = (0, BR.o)(["gameState"]), gR = null === CR && (MR || "inGame" === pR);
      return (0, KR.jsxs)(KR.Fragment, {
        children: [(0, KR.jsx)(uJ.c, {
          className: "StoreSuperGems",
          gift: tR,
          highlightSku: iR,
          leadingTile: eR,
          afterLeadingTile: aR
        }), null !== JR.superRank && (0, KR.jsxs)(KR.Fragment, {
          children: [(0, KR.jsx)(Ii, {
            title: nR("store:rank")
          }), (0, KR.jsx)(Xi, {
            state: JR.superRank.state,
            urgent: JR.superRank.urgent,
            daysLeft: JR.superRankDaysLeft,
            totalDays: uR,
            recipientHasSuperRank: JR.recipientHasSuperRank,
            wearer: LR,
            live: gR,
            onWake: () => {
              lR(!0)
            },
            busy: qR,
            highlight: "superRank" === iR,
            onOpen: () => {
              fR("superRank")
            },
            onAct: () => {
              VR("superRank")
            },
            onNeedRecipient: wR,
            onLogin: () => {
              rR("superRank")
            }
          })]
        }), (0, KR.jsxs)(mi, {
          mountAtOnce: GR,
          children: [(0, KR.jsx)(Ii, {
            title: nR("store:bundles")
          }), (0, KR.jsx)("div", {
            className: "StorePackGrid",
            children: UR.map((RR => (0, KR.jsx)(Nq, {
              pack: RR.pack,
              state: RR.state,
              busy: qR,
              onOpen: () => {
                fR(RR.pack)
              },
              onAct: () => {
                VR(RR.pack)
              },
              onNeedRecipient: wR,
              onLogin: () => {
                rR(RR.pack)
              }
            }, RR.pack)))
          }), (0, KR.jsxs)(mi, {
            mountAtOnce: GR,
            children: [(0, KR.jsx)(Ii, {
              title: nR("store:characters")
            }), (0, KR.jsx)(ci, {
              tiles: WR,
              busy: qR,
              highlightItem: iR,
              onOpen: fR,
              onAct: VR,
              onNeedRecipient: wR,
              onLogin: rR,
              livePack: CR,
              setLivePack: XR
            }), AR.length > 0 && (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsx)(Ii, {
                title: nR("store:premiumItems")
              }), (0, KR.jsx)(ci, {
                tiles: AR,
                busy: qR,
                highlightItem: iR,
                onOpen: fR,
                onAct: VR,
                onNeedRecipient: wR,
                onLogin: rR,
                livePack: CR,
                setLivePack: XR
              })]
            })]
          })]
        })]
      })
    }

    function Si(RR) {
      let {
        giftName: JR,
        onChooseRecipient: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return JR ? (0, KR.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: yR("store:giftFor", {
          name: JR
        }),
        children: [hZ.b, " ", yR("store:giftFor", {
          name: JR
        })]
      }) : (0, KR.jsxs)("div", {
        ...(0, fR.bb)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: GR,
        children: [hZ.b, " ", yR("store:chooseRecipient")]
      })
    }

    function ji(RR) {
      return (0, mR.c)(Date.now()) ? (0, KR.jsx)(Ei, {
        ...RR
      }) : (0, KR.jsx)(di, {
        ...RR
      })
    }

    function di(RR) {
      let {
        state: JR,
        wearer: GR,
        mode: yR,
        giftName: tR,
        busy: uR,
        highlight: qR,
        purchaseError: iR,
        onBack: fR,
        onChooseRecipient: VR,
        onAct: wR,
        onLogin: rR
      } = RR;
      const {
        t: eR
      } = (0, ZR.A)(), aR = wJ("gift" !== yR);
      return (0, KR.jsx)(ui, {
        tierId: PR.t.id,
        wearer: GR,
        onBack: fR,
        recipient: "gift" === yR && (0, KR.jsx)(Si, {
          giftName: tR,
          onChooseRecipient: VR
        }),
        cta: (0, KR.jsx)(Oq, {
          state: JR,
          item: "superRank",
          price: (0, IR.v)(Date.now()).price,
          busy: uR,
          highlight: qR,
          onAct: wR,
          onNeedRecipient: VR,
          onLogin: rR
        }),
        afterCta: (0, KR.jsxs)(KR.Fragment, {
          children: [aR && (0, KR.jsx)("span", {
            className: "StoreTileNote",
            children: aR.text
          }), (null === aR || void 0 === aR ? void 0 : aR.manageUrl) && (0, KR.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: aR.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: eR("payments:manageSubscription")
          }), iR && (0, KR.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: eR(iR)
          })]
        })
      })
    }

    function Ei(RR) {
      let {
        state: JR,
        daysLeft: GR,
        wearer: tR,
        mode: uR,
        giftName: qR,
        busy: iR,
        highlight: fR,
        purchaseError: VR,
        onBack: wR,
        onChooseRecipient: rR,
        onAct: aR,
        onLogin: LR
      } = RR;
      const {
        t: nR
      } = (0, ZR.A)(), {
        userContext: UR
      } = (0, eR.d)(), WR = Date.now(), AR = "gift" !== uR, CR = AR && "subscribed" === JR, XR = AR ? (0, IR.o)(UR.superRankInfo, WR) : null, MR = AR && !CR && "pending" !== JR && (0, jR.subscriptionsSold)(), [BR, lR] = (0, yR.useState)(!0);
      return (0, KR.jsx)(ui, {
        tierId: PR.h.id,
        wearer: tR,
        onBack: wR,
        recipient: !AR && (0, KR.jsx)(Si, {
          giftName: qR,
          onChooseRecipient: rR
        }),
        cta: (0, KR.jsxs)(KR.Fragment, {
          children: [null !== XR && (0, KR.jsx)(SR, {
            className: "StoreTileNote StoreDetailNote",
            until: XR
          }), "recharge" === JR && GR > 0 && (0, KR.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: Ai(nR, GR)
          }), MR && (0, KR.jsx)(ni, {
            onOfferedChange: lR
          }), AR && (0, KR.jsx)(qJ, {
            showing: !0
          }), !CR && (0, Dq.e)(PR.h.id, WR) && (0, KR.jsx)(Oq, {
            state: JR,
            item: "superRank",
            price: (0, IR.v)(WR).price,
            busy: iR,
            highlight: fR,
            secondary: MR && BR,
            onAct: aR,
            onNeedRecipient: rR,
            onLogin: LR
          })]
        }),
        afterCta: VR && (0, KR.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: nR(VR)
        })
      })
    }

    function Yi() {}

    function ki() {
      return "true" !== new URLSearchParams(window.location.search).get("tempSubscription") ? null : (0, KR.jsx)("div", {
        className: "StoreTempSubscribe",
        children: (0, KR.jsx)(ni, {
          onOfferedChange: Yi
        })
      })
    }
    var Qi = GR(3653);

    function Fi(RR) {
      let {
        state: JR,
        view: GR,
        claiming: tR,
        onOpen: qR
      } = RR;
      const {
        t: VR
      } = (0, ZR.A)(), wR = (0, yR.useRef)(null), rR = "ready" === GR.kind;
      return (0, bi.b)(wR, rR), (0, KR.jsxs)("div", {
        ref: wR,
        className: uR()("DailyDropTile", {
          DailyDropTileReady: rR
        }),
        children: [rR && (0, KR.jsx)(iR.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, KR.jsx)("div", {
          className: "DailyDropTileTitle",
          children: VR("dailyDrop:name")
        }), (0, KR.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, KR.jsx)(Qi.c, {
            className: "DailyDropTileBlock"
          }), (0, KR.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, KR.jsx)("span", {
              children: VR("dailyDrop:basicItems")
            }), " ", (0, KR.jsx)("span", {
              children: VR("dailyDrop:collected", {
                count: JR.collected.length,
                total: JR.total
              })
            })]
          })]
        }), "ready" === GR.kind && (0, KR.jsx)(fR.n, {
          className: "DailyDropTileOpen",
          onClick: qR,
          loading: tR,
          children: VR("dailyDrop:open")
        }), "waiting" === GR.kind && (0, KR.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: VR("dailyDrop:nextIn", {
            count: GR.hours
          })
        })]
      })
    }
    var Ti = GR(3178);
    const si = Math.PI / 180;

    function Rf(RR) {
      return RR / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Jf(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const yR = (RR / (2 * Math.PI / GR) % GR + GR) % GR;
      let tR = null,
        uR = 1 / 0;
      for (let ZR = 0; ZR < GR; ZR++) {
        if (!JR[ZR]) continue;
        const RR = Math.abs(ZR - yR),
          qR = Math.min(RR, GR - RR);
        qR < uR && (tR = ZR, uR = qR)
      }
      return tR
    }

    function Gf(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const yR = Jf(RR, JR, GR);
      if (null === yR) return RR;
      const tR = Rf(yR, GR) - RR;
      return RR + tR - 2 * Math.PI * Math.round(tR / (2 * Math.PI))
    }
    const yf = 32;

    function tf(RR) {
      if (0 === RR.width || 0 === RR.height) return !0;
      const JR = document.createElement("canvas");
      JR.width = yf, JR.height = yf;
      const GR = JR.getContext("2d", {
        willReadFrequently: !0
      });
      if (!GR) return !0;
      GR.drawImage(RR, 0, 0, yf, yf);
      const {
        data: yR
      } = GR.getImageData(0, 0, yf, yf);
      for (let tR = 3; tR < yR.length; tR += 4)
        if (yR[tR] > 0) return !1;
      return !0
    }

    function uf(RR) {
      RR.width = 0, RR.height = 0
    }

    function Zf() {
      return "hidden" === document.visibilityState
    }
    async function qf(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 1e3;
      for (;;) {
        await (Zf() ? new Promise((RR => {
          const JR = () => {
            Zf() || (document.removeEventListener("visibilitychange", JR), RR())
          };
          document.addEventListener("visibilitychange", JR)
        })) : Promise.resolve());
        const GR = Math.min(JR(), 1e3);
        if (GR <= 0) return null;
        const yR = await RR.captureFrame(GR);
        if (null !== yR || !Zf()) return null !== yR && tf(yR) ? (uf(yR), null) : yR
      }
    }
    async function ff(RR, JR) {
      const GR = performance.now();
      let yR = 0,
        tR = Zf() ? GR : null;
      const uR = () => {
          Zf() ? tR ??= performance.now() : null !== tR && (yR += performance.now() - tR, tR = null)
        },
        ZR = () => {
          const RR = performance.now();
          return 3e3 - (RR - GR - yR - (null === tR ? 0 : RR - tR))
        };
      document.addEventListener("visibilitychange", uR);
      try {
        let GR = await qf(RR);
        for (; null === GR && JR() && ZR() > 0;) GR = await qf(RR, ZR);
        return GR
      } finally {
        document.removeEventListener("visibilitychange", uR)
      }
    }

    function Vf(RR) {
      let {
        cosmetics: JR
      } = RR;
      return (0, KR.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, KR.jsx)(Kq.c, {
          cosmetics: JR
        })
      })
    }

    function Kf(RR) {
      let {
        worn: JR,
        ft: GR,
        Vt: tR,
        prompting: iR,
        className: fR
      } = RR;
      const {
        t: VR
      } = (0, ZR.A)(), wR = (0, yR.useRef)(null), [rR, eR] = (0, yR.useState)(null), [aR, LR] = (0, yR.useState)(!1), [nR, UR] = (0, yR.useState)(!1), WR = (0, yR.useRef)([]), AR = (0, yR.useRef)(null), CR = (0, yR.useRef)(0), MR = (0, yR.useRef)(null), BR = (0, yR.useRef)(!0), lR = (0, yR.useCallback)((() => {
        const RR = AR.current,
          JR = WR.current,
          GR = Jf(CR.current, JR),
          yR = null === GR ? null : JR[GR],
          tR = null === RR || void 0 === RR ? void 0 : RR.getContext("2d");
        RR && yR && tR && (RR.width === yR.width && RR.height === yR.height || (RR.width = yR.width, RR.height = yR.height), tR.clearRect(0, 0, RR.width, RR.height), tR.drawImage(yR, 0, 0))
      }), []);
      async function pR(RR, JR) {
        const GR = performance.now(),
          yR = () => wR.current === RR;
        let tR = 0;
        for (const uR of function() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const JR = [],
              GR = new Set;
            for (let yR = RR / 2; yR >= 1 && Number.isInteger(yR); yR /= 2)
              for (let tR = 0; tR < RR; tR += yR) GR.has(tR) || (GR.add(tR), JR.push(tR));
            for (let yR = 0; yR < RR; yR++) GR.has(yR) || JR.push(yR);
            return JR
          }()) {
          if (!yR()) break;
          RR.turnCamera(Rf(uR));
          const GR = 0 === uR ? await ff(JR, yR) : await qf(JR);
          if (!yR()) {
            null !== GR && uf(GR);
            break
          }
          if (null !== GR) WR.current[uR] = GR, tR++, 0 === uR && eR("stills");
          else if (0 === uR) break
        }
        tR > 0 && console.info(`Lucky Skin Block's Before: ${tR} stills in ${Math.round(performance.now()-GR)} ms`)
      }

      function gR(RR) {
        var JR, GR;
        (null === (JR = MR.current) || void 0 === JR ? void 0 : JR.pointerId) === RR.pointerId && (MR.current = null, BR.current || (CR.current = Gf(CR.current, WR.current), lR(), null === (GR = wR.current) || void 0 === GR || GR.turnCamera(CR.current)))
      }(0, yR.useEffect)((() => {
        "stills" === rR && lR()
      }), [rR, lR]), (0, yR.useEffect)((() => () => {
        for (const RR of WR.current) RR && uf(RR);
        WR.current = []
      }), []);
      const bR = iR && !nR,
        vR = bR ? {
          onPointerDown: RR => {
            null === MR.current && (RR.currentTarget.setPointerCapture(RR.pointerId), MR.current = {
              pointerId: RR.pointerId,
              startX: RR.clientX,
              startTurn: CR.current
            })
          },
          onPointerMove: RR => {
            const JR = MR.current;
            var GR;
            null !== JR && JR.pointerId === RR.pointerId && (CR.current = JR.startTurn - (RR.clientX - JR.startX) * si, lR(), BR.current || null === (GR = wR.current) || void 0 === GR || GR.turnCamera(CR.current))
          },
          onPointerUp: gR,
          onPointerCancel: gR
        } : {};
      return (0, KR.jsxs)("div", {
        className: uR()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: bR
        }, fR),
        children: [(0, KR.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, KR.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...vR,
            children: ["stills" === rR && (0, KR.jsx)("canvas", {
              ref: AR,
              className: "DailyDropRevealBeforeStill"
            }), "head" === rR && (0, KR.jsx)(Vf, {
              cosmetics: JR
            }), null === rR && (0, KR.jsx)(XR.d, {})]
          }), (0, KR.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: VR("dailyDrop:before")
          })]
        }), (0, KR.jsx)(qR.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, KR.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, KR.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, KR.jsx)("div", {
              className: uR()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: aR
              }),
              children: (0, KR.jsx)(yR.Suspense, {
                fallback: null,
                children: (0, KR.jsx)(Wq.e, {
                  onNoWebGl: () => {
                    eR("head"), UR(!0)
                  },
                  ref: wR,
                  onReady: () => {
                    var RR, GR;
                    null === (RR = wR.current) || void 0 === RR || RR.resetCamera(), null === (GR = wR.current) || void 0 === GR || GR.setAllCosmetics(JR)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        const RR = wR.current;
                        if (!RR) return;
                        const JR = RR.getDevTools();
                        try {
                          JR && await pR(RR, JR)
                        } catch (uR) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", uR)
                        } finally {
                          BR.current = !1
                        }
                        if (wR.current !== RR) return;
                        WR.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), (0, fG.y)("daily_drop.before_head", "no_front_still"), eR("head")), null === MR.current && (CR.current = Gf(CR.current, WR.current)), RR.turnCamera(CR.current), lR(), RR.updateCosmetic(GR, tR);
                        const yR = new Promise((RR => {
                          setTimeout(RR, 1e4)
                        }));
                        await Promise.race([RR.ensureReadyForCapture(GR), yR]).catch((RR => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", RR)
                        })), wR.current === RR && LR(!0)
                      }()
                    }))
                  }
                })
              })
            }), nR && (st.R.includes(GR) ? (0, KR.jsx)(Vf, {
              cosmetics: {
                ...JR,
                [GR]: tR
              }
            }) : (0, KR.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,Ti.m)(GR,tR).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !aR && !nR && (0, KR.jsx)(XR.d, {}), (0, KR.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...vR
            })]
          }), (0, KR.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: VR("dailyDrop:after")
          })]
        })]
      })
    }
    const wf = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      rf = {
        opening: 900,
        shrinking: 700
      };

    function ef(RR) {
      let {
        drop: JR,
        onClose: GR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)(), {
        userContext: iR
      } = (0, eR.d)(), {
        state: VR,
        view: wR
      } = (0, fG.F)(), [rR, aR] = (0, yR.useState)("closed"), [LR] = (0, yR.useState)((() => ({
        ...iR.getPlayerCosmetics()
      }))), [nR] = (0, yR.useState)((() => (0, fG.j)(JR, LR))), [UR, WR] = (0, yR.useState)(!1), [AR, CR] = (0, yR.useState)(!1), [XR] = (0, yR.useState)((() => null === VR ? Promise.resolve(null) : eG(VR))), [MR, lR] = (0, yR.useState)(null), pR = (0, ZG.d)(), {
        gameState: gR
      } = (0, BR.o)(["gameState"]);
      async function bR() {
        const RR = await XR;
        pR.current && (null === RR ? (GR(), async function(RR) {
          let JR = null;
          try {
            const GR = await rG();
            null === RR || RR.remindersOn || null !== wG.i.getItem(GR) || (JR = GR)
          } catch (yR) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", yR)
          }
          if (null === JR) return void await (0, VG.k)("dailyDrop");
          const GR = JR;
          await (0, VG.k)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              wG.i.setItem(GR, !0), LG(null)
            }
          })
        }(VR)) : ((0, VG.h)(), lR(RR), aR("remind")))
      }

      function vR(RR) {
        null !== MR && function(RR, JR) {
          wG.i.setItem(RR.askedKey, !0), (0, uG.k)(), (0, fG.y)("daily_drop.remind", JR ? "yes" : "no"), JR && LG(RR.requester)
        }(MR, RR), GR()
      }(0, yR.useEffect)((() => {
        (0, fG.y)("daily_drop.reveal_step", rR)
      }), [rR]), (0, yR.useEffect)((() => {
        const RR = rf[rR];
        if (void 0 === RR) return;
        const JR = setTimeout((() => {
          aR(wf[rR])
        }), RR);
        return () => {
          clearTimeout(JR)
        }
      }), [rR]);
      const OR = tR(`dailyDrop:kind_${nR.ft}`),
        xR = VR && tR("dailyDrop:collected", {
          count: VR.collected.length,
          total: VR.total
        }),
        NR = "revealed" === rR || "shrinking" === rR,
        DR = "equip" !== rR && "remind" !== rR;
      return (0, KR.jsx)(At.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === rR ? () => {
          vR(!1)
        } : GR,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, KR.jsxs)("div", {
          className: uR()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === rR,
            DailyDropRevealShrinking: "shrinking" === rR,
            DailyDropRevealFiguresShown: "shrinking" === rR || "equip" === rR || "remind" === rR
          }),
          children: [(0, KR.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, KR.jsx)(Kf, {
              className: "DailyDropRevealStageFigures",
              worn: LR,
              ft: nR.ft,
              Vt: nR.Vt,
              prompting: !DR
            }), ("closed" === rR || "opening" === rR) && (0, KR.jsx)(Qi.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === rR
            }), NR && (0, KR.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, KR.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Ti.m)(nR.ft,nR.Vt).previewTex}.png`,
                alt: OR,
                draggable: !1
              })
            })]
          }), DR && (0, KR.jsxs)(KR.Fragment, {
            children: [(0, KR.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, KR.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: NR ? OR : tR("dailyDrop:name")
              }), "closed" === rR && (0, KR.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: tR("dailyDrop:tapToOpen")
              }), "revealed" === rR && (0, KR.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: tR("dailyDrop:tapToContinue")
              })]
            }), (0, KR.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": tR("closed" === rR ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                aR(wf[rR])
              }
            })]
          }), "equip" === rR && (0, KR.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, KR.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: OR
            }), (0, KR.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: tR("dailyDrop:equipQuestion")
            }), (0, KR.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, KR.jsx)(fR.g, {
                className: "DailyDropRevealButton",
                disabled: UR,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, fG.y)("daily_drop.not_now", JR), bR()
                },
                children: tR("dailyDrop:notNow")
              }), (0, KR.jsx)(fR.g, {
                className: "DailyDropRevealButton",
                loading: UR,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, fG.y)("daily_drop.equip", JR), WR(!0), CR(!1);
                    try {
                      await (0, fG.g)(iR, nR.ft, nR.Vt)
                    } catch (RR) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", RR), WR(!1), void CR(!0)
                    }
                    await bR()
                  }()
                },
                children: tR("dailyDrop:equip")
              })]
            }), AR && (0, KR.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: tR("dailyDrop:equipFailed")
            }), !(0, BR.h)(gR) && (0, KR.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: UR,
              onClick: () => {
                var RR;
                (0, fG.y)("daily_drop.customise", JR), RR = nR.ft, bG.n.JK(wt, RR), BR.d.set({
                  openEverythingMenuName: OJ.o.CUSTOMISATION
                }), GR()
              },
              children: [tR("dailyDrop:customise"), " ", (0, KR.jsx)(qR.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), xR && (0, KR.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [xR, "waiting" === (null === wR || void 0 === wR ? void 0 : wR.kind) && ` \xb7 ${tR("dailyDrop:nextInInline",{count:wR.hours})}`]
            })]
          }), "remind" === rR && (0, KR.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, KR.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: tR("dailyDrop:remindTitle")
            }), (0, KR.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: tR("dailyDrop:remindSubtitle")
            }), (0, KR.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, KR.jsx)(fR.g, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  vR(!1)
                },
                children: tR("dailyDrop:remindNo")
              }), (0, KR.jsx)(fR.n, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  vR(!0)
                },
                children: tR("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function af(RR, JR) {
      const {
        t: GR
      } = (0, ZR.A)(), tR = function(RR, JR) {
        const {
          state: GR,
          view: tR
        } = (0, fG.F)(), [uR, ZR] = (0, yR.useState)(!1), [qR, iR] = (0, yR.useState)(!1), [fR, VR] = (0, yR.useState)(null), KR = (0, yR.useRef)(null), wR = (0, yR.useRef)(!1), rR = JR && "ready" === (null === tR || void 0 === tR ? void 0 : tR.kind);
        (0, yR.useEffect)((() => {
          RR ? rR && !wR.current && (wR.current = !0, (0, fG.y)("daily_drop.shown", "tile")) : wR.current = !1
        }), [RR, rR]), (0, yR.useEffect)((() => {
          RR || (nR(), iR(!1))
        }), [RR]);
        const eR = RR && null === fR && !(0, fG.u)(tR);
        (0, yR.useEffect)((() => {
          eR && BR.d.set({
            openEverythingMenuName: OJ.o.CUSTOMISATION
          })
        }), [eR]);
        const aR = (0, yR.useRef)(!1),
          LR = (0, yR.useRef)(RR);

        function nR() {
          null !== KR.current && (KR.current = null, VR(null))
        }
        return LR.current = RR, {
          state: GR,
          view: tR,
          claiming: uR,
          claimFailed: qR,
          reveal: fR,
          open: async function() {
            if (!aR.current) {
              aR.current = !0, ZR(!0), iR(!1);
              try {
                const {
                  state: RR,
                  drop: JR
                } = await (0, fG.e)();
                if (null === RR || null === JR) return;
                if (!LR.current) return;
                (0, fG.y)("daily_drop.open", JR), KR.current = {
                  state: RR,
                  drop: JR
                }, VR(KR.current)
              } catch (RR) {
                console.error("Failed to claim the Lucky Skin Block", RR), LR.current && iR(!0)
              } finally {
                aR.current = !1, ZR(!1)
              }
            }
          },
          closeReveal: nR
        }
      }(RR, JR);
      return {
        shown: (0, fG.u)(tR.view) || null !== tR.reveal,
        tile: tR.state && tR.view && (0, KR.jsx)(Fi, {
          state: tR.state,
          view: tR.view,
          claiming: tR.claiming,
          onOpen: tR.open
        }),
        claimFailed: tR.claimFailed && (0, KR.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: GR("dailyDrop:claimFailed")
        }),
        reveal: tR.reveal && (0, KR.jsx)(ef, {
          drop: tR.reveal.drop,
          onClose: tR.closeReveal
        })
      }
    }

    function Lf(RR) {
      let {
        show: JR
      } = RR;
      const GR = af(JR, JR);
      return (0, iJ.D)(JR && GR.shown, (0, iJ.E)(), (RR => {
        (0, fG.y)("daily_drop.store_only_open", RR)
      })), JR && GR.shown ? (0, KR.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [GR.claimFailed, GR.tile && (0, KR.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: GR.tile
        }), GR.reveal]
      }) : null
    }
    var nf = GR(3663),
      Uf = GR(35208),
      Wf = GR(35218);

    function Af(RR) {
      let {
        view: JR,
        highlight: GR,
        scrollSignal: tR,
        onScrolledIntoView: uR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)(), {
        purchaseUnderWay: iR,
        notice: fR,
        needsLogin: VR,
        buyPack: wR
      } = (0, Wf.f)("banner");
      (0, nf.L)(JR.arm, "banner");
      const rR = (0, yR.useRef)(null);
      return (0, yR.useEffect)((() => {
        var RR;
        tR > 0 && (null === (RR = rR.current) || void 0 === RR || RR.scrollIntoView({
          block: "nearest"
        }), uR())
      }), [tR]), (0, KR.jsxs)("div", {
        ref: rR,
        className: "NewPlayerDealBanner",
        children: [(0, KR.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, KR.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: qR("newPlayerDeal:title")
          }), (0, KR.jsx)(Uf.b, {
            endsAt: JR.endsAt
          })]
        }), (0, KR.jsx)(Uf.d, {
          view: JR,
          needsLogin: VR,
          busy: iR,
          highlight: GR,
          onBuy: RR => {
            wR(JR, RR)
          }
        }), (0, KR.jsx)(Zi.j, {
          notice: fR,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    GR(35211);
    var Cf = GR(3670);

    function Xf(RR) {
      let {
        wallet: JR,
        close: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, KR.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, KR.jsx)("span", {
            children: yR("newPlayerDeal:giftable")
          }), (0, KR.jsx)(Uq.b, {
            amount: (0, YZ.b)(JR)
          }), (0, KR.jsx)("span", {
            children: yR("newPlayerDeal:ungiftable")
          }), (0, KR.jsx)(Uq.b, {
            amount: JR.ungiftable
          })]
        }), (0, KR.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: yR("newPlayerDeal:ungiftableWhy")
        }), (0, KR.jsx)(fR.n, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: GR,
          children: yR("general:ok")
        })]
      })
    }

    function Mf(RR) {
      tJ.NotificationProvider.showCustomPopup({
        body: JR => (0, KR.jsx)(Xf, {
          wallet: RR,
          close: JR
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const Bf = {
      kind: "board"
    };
    let lf = !1;

    function pf(RR) {
      return "found" === RR.status || "error" === RR.status && "store:giftRecipientLookupFailed" === RR.error ? RR.name : null
    }(0, iJ.u)(sR.prefetchBillingOfferings);
    const gf = (0, yR.memo)((function(RR) {
      var JR;
      let {
        show: tR
      } = RR;
      const {
        t: qR
      } = (0, ZR.A)(), {
        userContext: iR
      } = (0, eR.d)(), fR = (0, jR.usePurchasesAllowed)(), VR = iR !== bR.NULL_USER_CONTEXT, wR = yq(iR, tR), [rR, aR] = (0, LR.e)(), {
        page: nR,
        urlMode: UR,
        goTo: WR
      } = (0, tq.e)(), AR = function(RR) {
        return "superRank" === RR.kind ? "superRank" : "pack" === RR.kind ? RR.pack : null
      }(nR), {
        openEverythingMenuName: CR,
        gameState: XR
      } = (0, BR.o)(["openEverythingMenuName", "gameState"]), MR = null !== CR, lR = "landingPage" === XR;
      ! function(RR, JR) {
        const [tR] = (0, yR.useState)(qq.i), [uR, ZR] = (0, yR.useState)(!1);
        tR && JR && !uR && ZR(!0);
        const qR = (0, jy.s)(),
          iR = tR && uR && RR && !qR;
        (0, yR.useEffect)((() => {
          if (!iR) return;
          let RR = null,
            JR = null,
            yR = null;
          const tR = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, hR.getBillingClient)().purchaseUnderWay,
            uR = () => {
              var GR;
              null === (GR = yR) || void 0 === GR || GR(), yR = null, null !== RR && (clearTimeout(RR), RR = null), null !== JR && (clearTimeout(JR), JR = null)
            },
            ZR = () => {
              (0, uq.p)(!1), (0, uq.n)(!1), uR(), RR = setTimeout((() => {
                RR = null, yR = (0, Zq.e)((() => {
                  yR = null, tR() ? ZR() : ((0, uq.p)(!0), JR = setTimeout((() => {
                    JR = null, yR = (0, Zq.e)((() => {
                      yR = null, tR() ? ZR() : (0, uq.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => GR(5463))).then((RR => {
                    RR.startBackgroundGameSetup()
                  }), (RR => {
                    console.warn("Background game setup: its chunk failed to load", RR)
                  })))
                }))
              }), 2e3)
            };
          for (const GR of iq) window.addEventListener(GR, ZR, {
            capture: !0,
            passive: !0
          });
          return ZR(), () => {
            for (const RR of iq) window.removeEventListener(RR, ZR, {
              capture: !0
            });
            uR(), (0, uq.p)(!1), (0, uq.n)(!1)
          }
        }), [iR])
      }(tR && MR && lR, "pack" === nR.kind), (0, yR.useEffect)((() => {
        MR && (0, sR.prefetchBillingOfferings)()
      }), [MR]), (0, yR.useEffect)((() => {
        MR && !tR && lR && (0, fq.p)()
      }), [MR, tR, lR]);
      const [pR, gR] = (0, yR.useState)(0), [vR, OR] = (0, yR.useState)(null), [xR, NR] = (0, yR.useState)(null), [DR, HR] = (0, yR.useState)(null), [oR, cR] = (0, yR.useState)(null), [PR, zR] = (0, yR.useState)(0), SR = (0, yR.useRef)(null), dR = (0, yR.useRef)(null), ER = (0, yR.useRef)(null), YR = (0, yR.useRef)(!1), kR = (0, iJ.E)(), QR = (0, yR.useRef)(0);

      function FR() {
        gR((RR => RR + 1))
      }(0, yR.useEffect)((() => {
        if (tR) {
          if (lf = !0, (0, iJ.k)(), kR && kR.seq !== QR.current) {
            var RR;
            QR.current = kR.seq, "loginResume" !== kR.source && (0, iJ.A)();
            const JR = (0, iJ.b)(kR);
            UR || WR(JR), cR(null !== (RR = kR.highlight) && void 0 !== RR ? RR : null);
            const GR = "newPlayerDeal" === kR.source || "loginResume" === kR.source && void 0 !== kR.highlight && (0, nf.e)(iR).includes(kR.highlight);
            zR((RR => GR ? RR + 1 : 0)), NR(null), "gift" === kR.mode && kR.giftRecipientName ? wR.choose(kR.giftRecipientName, "prefilled") : wR.clear(), "gift" !== kR.mode || kR.giftRecipientName || FR()
          }
        } else zR(0)
      }), [tR, kR]), (0, iJ.D)(tR, kR, (RR => {
        (0, LJ.reportAnalyticsClick)({
          id: "store.open",
          value: RR
        })
      }));
      const TR = (0, nf.K)(),
        RJ = null !== oR && null === TR && null === (0, nf.g)((0, nf.b)(iR)) && (0, nf.e)(iR).includes(oR);
      (0, yR.useEffect)((() => {
        if (!oR) return;
        const RR = setTimeout((() => {
          cR(null)
        }), RJ ? 15e3 : 4e3);
        return () => {
          clearTimeout(RR)
        }
      }), [oR, RJ]), (0, yR.useLayoutEffect)((() => {
        const RR = SR.current;
        if (!tR || !RR) return dR.current = null, void(ER.current = null);
        var JR;
        if (AR) dR.current = AR, null === (JR = RR.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === JR || JR.focus();
        else if (dR.current) {
          const JR = ER.current;
          null !== JR && (RR.scrollTop = JR);
          const GR = RR.querySelector(`[data-store-item="${dR.current}"]`);
          if (GR) {
            const yR = GR.getBoundingClientRect(),
              tR = RR.getBoundingClientRect();
            GR.focus({
              preventScroll: null !== JR && yR.bottom > tR.top && yR.top < tR.bottom
            })
          }
          dR.current = null
        }
      }), [AR, tR]), (0, yR.useEffect)((() => {
        NR(null)
      }), [wR.query]), (0, yR.useEffect)((() => {
        if (!DR) return;
        const RR = setTimeout((() => {
          HR(null)
        }), 8e3);
        return () => {
          clearTimeout(RR)
        }
      }), [DR]);
      const JJ = iR.superRankInfo,
        GJ = iR.isLoggedIn() || (0, jR.guestsMayBuy)(),
        yJ = iR.getOwnedCosmeticPacks(),
        tJ = (0, hZ.i)(wR.query),
        uJ = (0, hZ.d)({
          mode: tJ,
          loggedIn: VR ? GJ : null,
          superRankInfo: JJ,
          soldTierId: (0, IR.v)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: yJ,
          packs: SZ.p,
          recipient: wR.recipient
        });
      (0, yR.useEffect)((() => {
        if (!GJ || !tR) return;
        const RR = (0, nf.e)(iR),
          JR = (0, iJ.A)((JR => !RR.includes(JR.item))),
          GR = JR && (0, hZ.h)(JR, SZ.p);
        JR && GR && ((0, LJ.reportAnalyticsClick)({
          id: "store.login_resume",
          value: JR.item
        }), (0, iJ.m)(GR))
      }), [GJ, tR]);
      const ZJ = tR && "gift" === tJ,
        qJ = (0, yR.useRef)(ZJ);
      qJ.current = ZJ;
      const fJ = "none" !== wR.recipient.status,
        VJ = (0, yR.useRef)(!1);
      (0, yR.useEffect)((() => {
        ZJ ? fJ && !VJ.current && (VJ.current = !0, async function(RR) {
          var JR;
          if ("gift" === (null === (JR = (0, Cf.i)()) || void 0 === JR ? void 0 : JR.show)) return void Mf(Cf.b);
          const GR = await (0, YZ.f)();
          null !== GR && GR.ungiftable > 0 && RR() && Mf(GR)
        }((() => qJ.current))) : VJ.current = !1
      }), [ZJ, fJ]);
      const KJ = (0, hZ.l)({
        superRankDaysLeft: uJ.superRankDaysLeft,
        openedThisSession: lf || tR,
        seenNewItems: (0, iJ.g)()
      });
      (0, yR.useEffect)((() => {
        (0, iJ.y)(KJ)
      }), [KJ]);
      const wJ = "self" === tJ,
        rJ = af(tR, tR && wJ && "board" === nR.kind);
      if (!tR || !fR) return null;
      const eJ = aR > rR && rR <= 700,
        aJ = !eJ && aR <= 420,
        nJ = "gift" === tJ ? pf(wR.recipient) : null,
        UJ = null !== vR,
        WJ = "gift" === tJ ? {
          name: nJ,
          cosmetics: wR.recipientCosmetics,
          gift: !0
        } : {
          name: VR && iR.getPlayerName() || null,
          cosmetics: iR.getPlayerCosmetics(),
          gift: !1
        };

      function AJ(RR) {
        (0, EZ.c)(RR, "gift" === tJ ? wR.query.trim() : null)
      }

      function CJ(RR, JR) {
        (0, LJ.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${JR?"gift":"self"}:${RR}`
        }), JR && (wR.recordGift(JR.name, RR), XJ(JR))
      }

      function XJ(RR) {
        ! function(RR) {
          try {
            wG.i.setItem(Rq, (0, hZ.u)(Gq(), RR))
          } catch {}
        }({
          name: RR.name,
          cosmetics: RR.cosmetics
        }), WR(Bf), HR((JR => {
          var GR;
          return {
            name: RR.name,
            seq: (null !== (GR = null === JR || void 0 === JR ? void 0 : JR.seq) && void 0 !== GR ? GR : 0) + 1
          }
        }))
      }
      async function MJ(RR) {
        var JR, GR;
        if (YR.current) return;
        if (!GJ) return void AJ(RR);
        NR(null), cR(null);
        const yR = "gift" === tJ ? {
          name: pf(wR.recipient),
          cosmetics: wR.recipientCosmetics
        } : null;
        if (yR && !yR.name) return void FR();
        const tR = "superRank" === RR ? (0, IR.v)(Date.now()).id : (0, jZ.b)(RR);
        YR.current = !0;
        const uR = await (0, TZ.b)(tR, null !== (JR = null === yR || void 0 === yR ? void 0 : yR.name) && void 0 !== JR ? JR : null);
        if (YR.current = !1, !uR) return;
        OR(RR);
        const ZR = await YZ.g.purchase(tR, null !== (GR = null === yR || void 0 === yR ? void 0 : yR.name) && void 0 !== GR ? GR : null, uR);
        OR(null), ZR ? NR(ZR) : (CJ(RR, yR), yR && (0, sZ.g)(tR, uR, yR.name), yR || (await (0, kZ.flushClientAnalyticsEvents)(), (0, dZ.refreshWithoutConfirmation)("superRank" === RR ? "/super-rank-welcome" : `/pack-welcome/${RR}`)))
      }
      const BJ = uR()("Store", {
        StoreGift: "gift" === tJ,
        StorePortrait: eJ,
        StoreCompact: aJ
      });
      if ("pack" === nR.kind) {
        const RR = nR.pack,
          JR = uJ.packs.find((JR => JR.pack === RR));
        return (0, KR.jsx)("div", {
          ref: SR,
          className: "CosmeticShopContainer",
          children: (0, KR.jsx)(FZ.f, {
            pack: RR,
            onBack: () => {
              WR(Bf)
            },
            onPurchased: JR => {
              CJ(RR, JR ? {
                name: JR,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === tJ && nJ && JR && (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsx)(Oq, {
                state: JR.state,
                item: RR,
                price: (lJ = RR, "superRank" === lJ ? (0, IR.v)(Date.now()).price : (0, jZ.f)(lJ)),
                busy: UJ,
                onAct: () => {
                  MJ(RR)
                },
                onNeedRecipient: () => {
                  WR(Bf), FR()
                },
                onLogin: () => {
                  AJ(RR)
                },
                highlight: oR === RR
              }), xR && (0, KR.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: qR(xR)
              })]
            }),
            ownedPacks: yJ,
            startAsGift: "gift" === tJ,
            initialGiftRecipient: "gift" === tJ ? null !== nJ && void 0 !== nJ ? nJ : wR.query.trim() : "",
            highlightCta: oR === RR
          }, RR)
        })
      }
      var lJ;
      return "superRank" === nR.kind && null !== uJ.superRank ? (0, KR.jsx)("div", {
        ref: SR,
        className: uR()(BJ, "StoreDetailView"),
        children: (0, KR.jsx)(ji, {
          state: uJ.superRank.state,
          daysLeft: uJ.superRankDaysLeft,
          wearer: WJ,
          mode: tJ,
          giftName: nJ,
          busy: UJ,
          highlight: "superRank" === oR,
          purchaseError: xR,
          onBack: () => {
            WR(Bf)
          },
          onChooseRecipient: () => {
            WR(Bf), FR()
          },
          onAct: () => {
            MJ("superRank")
          },
          onLogin: () => {
            AJ("superRank")
          }
        })
      }) : (0, KR.jsxs)("div", {
        ref: SR,
        className: BJ,
        onScroll: RR => {
          ER.current = RR.currentTarget.scrollTop
        },
        children: [(0, KR.jsx)("div", {
          className: "StoreTopRow",
          children: (0, KR.jsx)(Lq, {
            selfName: VR ? iR.getPlayerName() : "",
            giftRecipient: wR,
            suggestionsVersion: null !== (JR = null === DR || void 0 === DR ? void 0 : DR.seq) && void 0 !== JR ? JR : 0,
            pulseSignal: pR,
            disabled: UJ || !VR
          })
        }), DR && (0, KR.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            HR(null)
          },
          children: [(0, KR.jsx)(QZ.b, {
            showSignal: DR.seq
          }), hZ.b, " ", qR("store:giftSent", {
            name: DR.name
          })]
        }, DR.seq), !DR && xR && (0, KR.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: qR(xR)
        }), wJ && rJ.claimFailed, (0, KR.jsx)(zi, {
          layout: uJ,
          mountAtOnce: null !== dR.current,
          bundleGift: "gift" === tJ ? {
            recipientName: nJ,
            lookingUp: "pending" === wR.recipient.status,
            busy: UJ,
            onNeedRecipient: FR,
            onSent: RR => {
              (0, LJ.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), XJ({
                name: RR,
                cosmetics: wR.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, hZ.m)(JJ),
          busy: UJ,
          highlightItem: oR,
          onOpen: function(RR) {
            (0, LJ.reportAnalyticsClick)({
              id: "store.item_open",
              value: RR
            }), WR((0, iJ.d)(RR))
          },
          onAct: MJ,
          onNeedRecipient: FR,
          onLogin: AJ,
          dailyDropTile: wJ && rJ.tile,
          rankWearer: WJ,
          dealBanner: "self" === tJ && null !== TR && (0, KR.jsx)(Af, {
            view: TR,
            highlight: oR,
            scrollSignal: PR,
            onScrolledIntoView: () => {
              zR(0)
            }
          })
        }), "gift" !== tJ && !(0, mR.c)(Date.now()) && (0, KR.jsx)(ki, {}), rJ.reveal]
      })
    }));
    var bf = GR(3795),
      vf = GR(10194),
      Of = GR(9992),
      xf = GR(3902),
      Nf = GR(3706),
      Df = GR(3747),
      Hf = GR(3761),
      of = GR(3763),
      Pf = GR(3848),
      If = GR(3828),
      mf = GR(3347),
      zf = GR(3416),
      Sf = GR(3370),
      jf = GR(2242),
      df = GR(3772),
      Ef = GR(3422);

    function Yf(RR) {
      let {
        show: JR
      } = RR;
      return JR ? (0, KR.jsx)(kf, {}) : null
    }

    function kf() {
      const {
        t: RR
      } = (0, ZR.A)(), {
        followsLeader: JR
      } = (0, Nf.d)(), {
        loading: GR,
        friends: tR,
        requests: iR,
        invites: VR
      } = (0, kR.k)(), {
        userContext: wR
      } = (0, eR.d)(), [rR, aR] = (0, yR.useState)(Ef.n);
      (0, yR.useEffect)((() => {
        (0, Ef.d)()
      }), []);
      const LR = iR.map((RR => RR.name)),
        {
          state: nR,
          recentRequesters: UR
        } = (0, If.n)(),
        WR = new Map([...("loaded" === nR.status ? nR.recentPlayers : []).map((RR => [RR.preview.name, RR])), ...UR.map((RR => [RR.name, RR]))]),
        AR = (0, yR.useRef)(null),
        [MR, BR] = (0, yR.useState)(""),
        [lR, pR] = (0, yR.useState)("Enter"),
        [gR, bR] = (0, yR.useState)(null);

      function vR() {
        MR && (pR("Loading"), (0, Sf.j)(MR, "social_menu").then((RR => {
          if (AR.current) switch (RR.kind) {
            case "sent":
              pR("Success");
              break;
            case "becameFriends":
              pR("BecameFriends");
              break;
            case "failed":
              bR(RR.message), pR("Error")
          }
        })))
      }
      return (0, yR.useEffect)((() => {
        if ("Enter" === lR || "Loading" === lR) return;
        const RR = setTimeout((() => {
          AR.current.value = "", BR(""), pR("Enter")
        }), "Success" === lR ? 1e3 : 4e3);
        return () => {
          clearTimeout(RR)
        }
      }), [lR]), (0, KR.jsx)("div", {
        className: "SocialMenu",
        children: (0, KR.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, KR.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, KR.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, KR.jsx)(of.c, {
                label: RR("socialBar:addFriend")
              }), (0, KR.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, KR.jsxs)("div", {
                  className: uR()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${lR}`]: !0
                  }),
                  children: ["Loading" === lR && (0, KR.jsx)(XR.d, {}), "Success" === lR && (0, KR.jsx)(qR.d, {
                    name: "check"
                  }), "BecameFriends" === lR && (0, KR.jsx)(KR.Fragment, {
                    children: RR("socialBar:nowFriends", {
                      playerName: MR
                    })
                  }), "Error" === lR && gR && (0, KR.jsx)(KR.Fragment, {
                    children: RR(gR.translationKey, gR.params)
                  })]
                }), (0, KR.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, KR.jsx)(CR.b, {
                    className: "PlayerSearchInput",
                    placeholderText: RR("socialBar:enterPlayerName"),
                    domRef: AR,
                    onValueChange: RR => {
                      BR((0, NR.q)(RR)), AR.current.value = (0, NR.q)(RR)
                    },
                    onEnter: () => {
                      MR && (0, LJ.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), vR()
                    }
                  }), (0, KR.jsxs)(fR.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      vR()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, KR.jsx)(qR.d, {
                      name: "user-plus"
                    }), " ", RR("socialBar:sendRequest")]
                  })]
                })]
              }), (0, KR.jsx)(df.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), VR.length > 0 && (0, KR.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, KR.jsx)(of.c, {
                label: RR("socialBar:invites"),
                meta: VR.length
              }), VR.map((JR => (0, KR.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, KR.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, KR.jsx)(mf.d, {
                    invite: JR
                  })
                }), (0, KR.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, KR.jsx)(mf.e, {
                    invite: JR
                  })
                }), (0, KR.jsx)(fR.n, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, zf.d)(JR)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${JR.destination.kind}`
                  },
                  children: RR("general:join")
                }), (0, KR.jsx)(rJ.h, {
                  tooltipInner: (0, KR.jsx)(KR.Fragment, {
                    children: RR("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, KR.jsx)(fR.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === rR || void 0 === rR ? void 0 : rR.kind) && rR.inviteId === JR.id,
                    onClick: () => {
                      kR.e.declineInvite(JR.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${JR.destination.kind}`
                    },
                    children: (0, KR.jsx)(qR.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, JR.id)))]
            }), (0, KR.jsxs)("div", {
              className: uR()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !GR && 0 === iR.length
              }),
              children: [(0, KR.jsx)(of.c, {
                label: (0, KR.jsxs)(KR.Fragment, {
                  children: [(0, KR.jsx)(qR.d, {
                    name: jf.c
                  }), " ", RR("socialBar:requests")]
                }),
                meta: (0, KR.jsxs)(KR.Fragment, {
                  children: [iR.length, iR.length === eJ.n && (0, KR.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: RR("socialBar:limitReached")
                  })]
                })
              }), GR && (0, KR.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, KR.jsx)(XR.d, {})
              }), !GR && 0 === iR.length && (0, KR.jsx)("div", {
                className: "SocialMenuEmpty",
                children: RR("socialBar:noFriendRequests")
              }), !GR && iR.length > 0 && (0, KR.jsx)("div", {
                className: "PlayerRows",
                children: (0, KR.jsx)(au.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [iR],
                  children: iR.map(((JR, GR) => {
                    const yR = WR.get(JR.name);
                    return (0, KR.jsxs)(Hf.g, {
                      playerSocialPreview: JR,
                      zIndex: iR.length - GR,
                      padDefaultFocus: (0, Ef.j)(rR, JR.name, GR),
                      status: yR && (0, KR.jsx)(Pf.e, {
                        gameNameWithVariation: yR.gameNameWithVariation,
                        isPrivateLobby: yR.isPrivateLobby
                      }),
                      children: [(0, KR.jsx)(rJ.h, {
                        tooltipInner: (0, KR.jsx)(KR.Fragment, {
                          children: RR("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, KR.jsx)(fR.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            aR((0, Ef.g)(LR, GR)), (0, Sf.f)(JR.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, KR.jsx)(qR.d, {
                            name: "check"
                          })
                        })
                      }), (0, KR.jsx)(rJ.h, {
                        tooltipInner: (0, KR.jsx)(KR.Fragment, {
                          children: RR("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, KR.jsx)(fR.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            aR((0, Ef.g)(LR, GR)), (0, Sf.f)(JR.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, KR.jsx)(qR.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${JR.name}_${JR.isError}`)
                  }))
                })
              })]
            }), (0, KR.jsx)(Pf.k, {})]
          }), (0, KR.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, KR.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, KR.jsx)(of.c, {
                label: RR("socialBar:party")
              }), (0, KR.jsx)(Df.b, {})]
            }), (0, KR.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, KR.jsx)(of.c, {
                label: (0, KR.jsxs)(KR.Fragment, {
                  children: [(0, KR.jsx)(qR.d, {
                    name: jf.b
                  }), " ", RR("socialBar:friends")]
                }),
                meta: (0, KR.jsxs)(KR.Fragment, {
                  children: [tR.length, tR.length >= (0, eJ.d)(wR.getPlayerRanks()) && (0, KR.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: RR("socialBar:limitReached")
                  })]
                })
              }), GR && (0, KR.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, KR.jsx)(XR.d, {})
              }), !GR && 0 === tR.length && (0, KR.jsx)("div", {
                className: "SocialMenuEmpty",
                children: RR("socialBar:noFriends")
              }), !GR && tR.length > 0 && (0, KR.jsx)("div", {
                className: "PlayerRows",
                children: (0, KR.jsx)(au.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [tR],
                  children: tR.map(((RR, GR) => (0, KR.jsx)(Hf.g, {
                    playerSocialPreview: RR,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: RR => {
                      kR.e.removeFriendFromState(RR)
                    },
                    zIndex: tR.length - GR,
                    children: (0, KR.jsx)(Hf.e, {
                      friend: RR,
                      followsLeader: JR,
                      analyticsSurface: "social_menu"
                    })
                  }, `${RR.name}_${RR.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Qf = GR(3621),
      Ff = GR(4970),
      Tf = GR(2046),
      sf = GR(4964),
      hf = GR(4978);

    function RV(RR) {
      let {
        count: JR,
        claiming: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return 0 === JR ? null : (0, KR.jsx)(fR.n, {
        className: "SeasonPassClaimAllButton",
        loading: GR,
        onClick: () => {
          Ff.h.claimAll().catch((RR => {
            console.error("Failed to claim all season pass rewards", RR)
          }))
        },
        children: yR("seasonPass:claimAll", {
          count: JR
        })
      })
    }

    function JV(RR) {
      let {
        view: JR,
        claiming: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)(), {
        userContext: tR
      } = (0, eR.d)(), {
        config: uR,
        state: iR,
        tier: fR,
        xpIntoTier: VR,
        xpForNextTier: wR
      } = JR, rR = Date.now(), aR = (0, hf.l)(JR, rR), LR = fR >= uR.tierCount, nR = aR && !LR && wR > 0, UR = wR > 0 && !LR ? Math.min(100, VR / wR * 100) : 100, WR = iR.xpToday >= uR.maxXpPerDay, AR = null !== JR.xpBoost && JR.xpBoost.endsAtMs > rR && !WR ? JR.xpBoost : null;
      return (0, KR.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, KR.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, KR.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: yR("seasonPass:title", {
              season: iR.seasonNumber
            })
          })
        }), (0, KR.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, KR.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, KR.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: yR("seasonPass:tier"),
              "aria-label": `${yR("seasonPass:tier")} ${fR}`,
              children: fR
            }), (0, KR.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(UR),
              children: [(0, KR.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${UR}%`
                }
              }), (0, KR.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [LR && yR("seasonPass:passComplete"), nR && yR("seasonPass:xpProgress", {
                  xp: VR,
                  xpForNextTier: wR
                })]
              })]
            }), nR && (0, KR.jsxs)(KR.Fragment, {
              children: [(0, KR.jsx)(qR.d, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, KR.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: fR + 1
              })]
            })]
          }), (0, KR.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, KR.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, KR.jsx)(qR.d, {
                name: "hourglass"
              }), " ", aR ? yR("seasonPass:endsIn", {
                time: (0, sf.e)((JR.endsAtMs - rR) / 6e4)
              }) : (0, cq.c)(JR.claimEndsAtMs, yR, rR)]
            }), aR && !LR && (0, KR.jsx)("span", {
              className: WR ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: WR ? yR("seasonPass:dailyCapReached") : yR("seasonPass:dailyXp", {
                xp: iR.xpToday,
                cap: uR.maxXpPerDay
              })
            }), aR && !LR && AR && (0, KR.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, KR.jsx)(qR.d, {
                name: "angles-up"
              }), " ", yR("seasonPass:xpBoostActive", {
                multiplier: AR.multiplier,
                time: (0, sf.e)(Math.ceil((AR.endsAtMs - rR) / 6e4))
              })]
            }), aR && !LR && !WR && !AR && (0, KR.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: yR("seasonPass:playToEarn")
            }), tR.type === Tf.e.ANONYMOUS && (0, KR.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: yR("seasonPass:logInToKeep")
            })]
          })]
        }), (0, KR.jsx)(RV, {
          count: JR.claimable.length,
          claiming: GR
        })]
      })
    }
    var GV = GR(4315),
      yV = GR(4324);

    function tV(RR) {
      return null !== (0, cq.p)(RR) || null !== (0, cq.k)(RR)
    }
    let uV = null;

    function ZV() {
      var RR;
      null === (RR = uV) || void 0 === RR || RR.tearDownNotification()
    }

    function qV(RR) {
      let {
        reward: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)(), {
        userContext: yR
      } = (0, eR.d)(), tR = (0, cq.p)(JR);
      return (0, KR.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, KR.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, cq.f)(JR, GR)
        }), null !== tR && (0, KR.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, KR.jsx)(GV.b, {
            profileEffect: tR,
            name: yR.getPlayerName(),
            cosmetics: yR.getPlayerCosmetics()
          })
        }), null === tR && (0, KR.jsx)(iV, {
          reward: JR
        })]
      })
    }

    function iV(RR) {
      let {
        reward: JR
      } = RR;
      const {
        userContext: GR
      } = (0, eR.d)(), tR = (0, yR.useRef)(null), {
        previewEmote: uR,
        playEmote: ZR
      } = (0, yV.e)(), qR = (0, yR.useMemo)((() => (0, cq.k)(JR)), [JR]), iR = qR.emote;
      return (0, KR.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, KR.jsx)(yR.Suspense, {
          fallback: (0, KR.jsx)(XR.d, {}),
          children: (0, KR.jsx)(Wq.e, {
            ref: tR,
            framing: "store",
            forcedCosmetics: qR.cosmetics,
            wq: uR.id,
            emotePlaySeq: uR.seq,
            onReady: () => {
              var RR, JR;
              null === (RR = tR.current) || void 0 === RR || RR.resetCamera(), null === (JR = tR.current) || void 0 === JR || JR.setAllCosmetics(GR.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== iR && ZR(iR)
            }
          })
        })
      })
    }

    function fV(RR) {
      let {
        waitingCount: JR
      } = RR;
      const {
        t: GR
      } = (0, ZR.A)();
      return (0, jR.usePurchasesAllowed)() ? (0, KR.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [JR > 0 && (0, KR.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === JR ? GR("seasonPass:hyperRewardWaiting") : GR("seasonPass:hyperRewardsWaiting", {
            count: JR
          })
        }), (0, KR.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, KR.jsxs)(fR.u, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, iJ.m)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, KR.jsx)(IR.c, {}), " ", GR("homePage:getHyperRank")]
          }), JR > 0 && (0, KR.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: JR
          })]
        })]
      }) : null
    }
    var VV = GR(35221);

    function KV(RR) {
      let {
        stub: JR,
        name: GR
      } = RR;
      const {
        t: yR
      } = (0, ZR.A)();
      return (0, KR.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, KR.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: JR
        }), (0, KR.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, KR.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: yR("seasonPass:trackTicketPass")
          }), (0, KR.jsx)("span", {
            className: "SeasonPassTicketName",
            children: GR
          })]
        })]
      })
    }

    function wV(RR) {
      var JR, GR;
      let {
        view: tR,
        claimingKeys: uR,
        hyperWaitingCount: iR,
        onClaim: fR
      } = RR;
      const {
        t: VR
      } = (0, ZR.A)(), wR = (0, yR.useRef)(null), {
        config: rR,
        tier: eR,
        xpIntoTier: aR,
        xpForNextTier: LR,
        state: nR
      } = tR, UR = (0, hf.l)(tR), WR = (0, yR.useRef)(!1), AR = null !== (JR = null === (GR = tR.claimable[0]) || void 0 === GR ? void 0 : GR.tier) && void 0 !== JR ? JR : Math.min(eR + 1, rR.tierCount);
      (0, yR.useLayoutEffect)((() => {
        if (WR.current) return;
        const RR = wR.current,
          JR = RR.querySelector(`[data-tier="${AR}"]`).getBoundingClientRect(),
          GR = RR.getBoundingClientRect();
        RR.scrollLeft += JR.left - GR.left - .3 * RR.clientWidth, RR.scrollTop += JR.top - GR.top - .3 * RR.clientHeight
      }), [AR]), (0, yR.useEffect)((() => {
        const RR = wR.current;

        function JR(JR) {
          WR.current = !0, Math.abs(JR.deltaY) <= Math.abs(JR.deltaX) || RR.scrollWidth <= RR.clientWidth || (JR.preventDefault(), RR.scrollLeft += JR.deltaY)
        }
        return RR.addEventListener("wheel", JR, {
          passive: !1
        }), () => {
          RR.removeEventListener("wheel", JR)
        }
      }), []);
      const CR = LR > 0 ? aR / LR : 1;
      return (0, KR.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, KR.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, KR.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, KR.jsx)(KV, {
              stub: (0, KR.jsx)(IR.c, {}),
              name: VR("seasonPass:hyperTrack")
            }), !nR.hasHyperRank && (0, KR.jsx)(fV, {
              waitingCount: iR
            })]
          }), (0, KR.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, KR.jsx)(KV, {
              stub: (0, KR.jsx)(qR.d, {
                name: "star"
              }),
              name: VR("seasonPass:freeTrack")
            }), (0, KR.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: VR("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, KR.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: wR,
          onPointerDown: () => {
            WR.current = !0
          },
          children: (0, KR.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: rR.tiers.map((RR => {
              const JR = RR.tier,
                GR = function(RR, JR, GR) {
                  if (RR <= JR) return "reached";
                  return GR && RR === JR + 1 ? "earning" : "locked"
                }(JR, eR, UR),
                yR = "earning" === GR;
              return (0, KR.jsx)(rV, {
                tierRewards: RR,
                nodeState: GR,
                progress: yR ? CR : 0,
                freeState: tR.tileState({
                  tier: JR,
                  track: "free"
                }),
                hyperState: tR.tileState({
                  tier: JR,
                  track: "hyper"
                }),
                freeClaiming: uR.has((0, hf.p)({
                  tier: JR,
                  track: "free"
                })),
                hyperClaiming: uR.has((0, hf.p)({
                  tier: JR,
                  track: "hyper"
                })),
                hasHyperRank: nR.hasHyperRank,
                onClaim: fR
              }, JR)
            }))
          })
        })]
      })
    }
    const rV = (0, yR.memo)((function(RR) {
      let {
        tierRewards: JR,
        nodeState: GR,
        progress: yR,
        freeState: tR,
        hyperState: ZR,
        freeClaiming: qR,
        hyperClaiming: iR,
        hasHyperRank: fR,
        onClaim: VR
      } = RR;
      const {
        tier: wR
      } = JR;
      return (0, KR.jsxs)("div", {
        className: uR()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== GR
        }),
        "data-tier": wR,
        children: [(0, KR.jsx)(eV, {
          tier: wR,
          track: "hyper",
          reward: JR.hyper,
          tileState: ZR,
          claiming: iR,
          padlock: !fR && "claimed" !== ZR,
          onClaim: VR
        }), (0, KR.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, KR.jsx)("span", {
            className: uR()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === GR
            }),
            children: "earning" === GR && (0, KR.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * yR + "%"
              }
            })
          }), (0, KR.jsx)("span", {
            className: uR()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === GR
            })
          }), (0, KR.jsx)(VV.e, {
            tier: wR,
            state: GR,
            progress: yR
          })]
        }), (0, KR.jsx)(eV, {
          tier: wR,
          track: "free",
          reward: JR.free,
          tileState: tR,
          claiming: qR,
          padlock: !1,
          onClaim: VR
        })]
      })
    }));

    function eV(RR) {
      let {
        tier: JR,
        track: GR,
        reward: yR,
        tileState: tR,
        claiming: uR,
        padlock: ZR,
        onClaim: qR
      } = RR;
      return yR ? (0, KR.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GR}`,
        children: (0, KR.jsx)(jq.g, {
          reward: yR,
          tileState: tR,
          track: GR,
          size: "large",
          onClaim: () => {
            qR({
              tier: JR,
              track: GR
            })
          },
          claiming: uR,
          padlock: ZR,
          onPreview: tV(yR) ? () => {
            ! function(RR) {
              const JR = tJ.NotificationProvider.showCustomPopup({
                body: (0, KR.jsx)(qV, {
                  reward: RR
                })
              });
              uV = JR, JR.getResult().finally((() => {
                uV === JR && (uV = null)
              }))
            }(yR)
          } : void 0
        })
      }) : (0, KR.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${GR}`
      })
    }

    function aV(RR) {
      let {
        show: JR
      } = RR;
      return JR ? (0, KR.jsx)(LV, {}) : null
    }

    function LV() {
      const {
        t: RR
      } = (0, ZR.A)(), JR = (0, Ff.k)();
      return (0, yR.useEffect)((() => ZV), []), (0, KR.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === JR.status && (0, KR.jsx)(XR.d, {}), "error" === JR.status && (0, KR.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, KR.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: RR("seasonPass:errorLoad")
          }), (0, KR.jsx)(fR.g, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              Ff.h.retry()
            },
            children: RR("seasonPass:retry")
          })]
        }), "noSeason" === JR.status && (0, KR.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, KR.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, cq.d)(RR)
          })
        }), "loaded" === JR.status && (0, KR.jsx)(nV, {
          view: JR.view,
          claimingKeys: JR.claimingKeys
        })]
      })
    }

    function nV(RR) {
      let {
        view: JR,
        claimingKeys: GR
      } = RR;
      const yR = JR.config.tiers.filter((RR => "needsHyper" === JR.tileState({
          tier: RR.tier,
          track: "hyper"
        }))).length,
        tR = GR.size > 0;
      return (0, KR.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, KR.jsx)(JV, {
          view: JR,
          claiming: tR
        }), (0, KR.jsx)(wV, {
          view: JR,
          claimingKeys: GR,
          hyperWaitingCount: yR,
          onClaim: UV
        }), (0, KR.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, KR.jsx)(RV, {
            count: JR.claimable.length,
            claiming: tR
          }), !JR.state.hasHyperRank && (0, KR.jsx)(fV, {
            waitingCount: yR
          })]
        })]
      })
    }

    function UV(RR) {
      Ff.h.claim(RR).catch((RR => {
        console.error("Failed to claim season pass reward", RR)
      }))
    }
    var WV = GR(5581);
    var AV = GR(4096);
    const CV = RR => {
        let {
          action: JR,
          padAction: GR
        } = RR;
        const {
          isTouchScreen: yR
        } = (0, BR.o)(["isTouchScreen"]), tR = (0, jy.s)();
        return yR && !tR ? null : (0, KR.jsx)(oy.c, {
          className: "EverythingMenuTabKey",
          noaAction: JR,
          padHidesKey: !0,
          padMenuShortcut: GR
        })
      },
      XV = (0, yR.memo)((function() {
        const {
          t: RR
        } = (0, ZR.A)(), {
          gameState: JR,
          openEverythingMenuName: GR,
          crosshairGameView: tR,
          everythingMenuOverLoadingScreen: qR
        } = (0, BR.o)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: iR
        } = (0, eR.d)(), VR = (0, it.i)(Date.now()), wR = (0, jR.usePurchasesAllowed)(), rR = (0, iJ.H)(), {
          view: aR
        } = (0, fG.F)(), LR = "dot" === rR || null === rR && "ready" === (null === aR || void 0 === aR ? void 0 : aR.kind), UR = (RR, JR) => (0, KR.jsx)(CV, {
          action: RR,
          padAction: JR
        }), [WR, AR] = (0, yR.useState)(null), CR = (0, yR.useRef)(null), XR = (0, yR.useRef)(null);
        (0, yR.useEffect)((() => {
          var RR;
          const JR = null === (RR = XR.current) || void 0 === RR ? void 0 : RR.querySelector(".EverythingMenuTabActive");
          null === JR || void 0 === JR || JR.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [GR]);
        const MR = {
            ..."inGame" === JR ? {} : (0, fR.bb)({
              focusOnClick: !1
            }),
            ...nt.f
          },
          lR = RR => {
            const JR = (0, Ut.f)((JR => {
              (0, fR.$)(JR.currentTarget), BR.d.set({
                openEverythingMenuName: RR
              })
            }), "pointerup");
            return {
              ...MR,
              onPointerDown: RR => {
                MR.onPointerDown(RR), JR.onPointerDown(RR)
              },
              onPointerUp: RR => {
                MR.onPointerUp(RR), JR.onPointerUp(RR)
              },
              onClick: JR.onClick
            }
          },
          pR = null !== GR;
        (0, yR.useEffect)((() => {
          GR === OJ.o.CUSTOMISATION ? (0, LJ.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, nq.d)()
          }) : null === GR && BR.d.get("everythingMenuOverLoadingScreen") && BR.d.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [GR]);
        const bR = GR !== OJ.o.COSMETIC_SHOP && !tR;
        async function vR() {
          await async function() {
            if (!WR) return;
            await WR(), AR(null)
          }(), BR.d.set({
            openEverythingMenuName: null
          })
        }
        const OR = (0, yR.useRef)(null),
          xR = (0, yR.useCallback)((() => null !== OR.current && (0, Of.f)(OR.current)), []);

        function NR() {
          xR() || vR()
        }(0, yR.useEffect)((() => (0, oZ.t)(xR)), [xR]);
        const DR = (0, yR.useMemo)((() => "inGame" === JR ? {
            text: RR("settingsMenu:exitGame"),
            onClick: () => {
              (0, vf.e)()
            }
          } : (0, gR.isDiscordClient)() ? {
            text: RR("settingsMenu:exitGame"),
            onClick: () => {
              vJ.l.discordActivity().then((RR => {
                RR.exit("User exited the game")
              }))
            }
          } : null), [JR, RR]),
          HR = pR && !tR,
          oR = "inGame" !== JR,
          cR = HR && oR;
        (0, yR.useLayoutEffect)((() => {
          if (cR) return BR.d.set({
            menuCoversPage: !0
          }), () => {
            BR.d.set({
              menuCoversPage: !1
            })
          }
        }), [cR]);
        const PR = (0, yR.useRef)(null);
        ! function(RR, JR) {
          (0, yR.useEffect)((() => {
            var GR;
            const yR = (0, WV.c)();
            if (!JR || null === yR || !(0, WV.b)({
                site: gR.siteUsed,
                isMobileApp: (0, nR.isMobileApp)(),
                isTouchScreen: BR.d.get("isTouchScreen")
              })) return;
            const tR = null === (GR = RR.current) || void 0 === GR ? void 0 : GR.querySelector(".EverythingMenuBackButton");
            return tR ? yR(tR) : void 0
          }), [RR, JR])
        }(PR, HR && !(0, oZ.i)(GR) && "inGame" === JR);
        const IR = (0, KR.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: NR,
          children: (0, KR.jsx)(fR.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, KR.jsx)(Wt.b, {
          showing: pR,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: GR === OJ.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === JR,
          children: (0, KR.jsx)(Ct.d, {
            className: uR()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: qR
            }),
            show: HR,
            children: (0, KR.jsx)(At.e, {
              close: NR,
              togglePointerLock: !1,
              children: (0, KR.jsxs)("div", {
                className: "EverythingMenu",
                ref: PR,
                children: [!(0, oZ.i)(GR) && (0, KR.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, KR.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [DR && (0, KR.jsx)(fR.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        DR.onClick()
                      },
                      children: DR.text
                    }), pR && wR && (0, KR.jsx)("div", {
                      ...MR,
                      className: "EverythingMenuWallet",
                      title: RR("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, iJ.m)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, KR.jsx)(bf.f, {})
                    })]
                  }), (0, KR.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: XR,
                    "data-pad-tabs": "1",
                    children: [(0, KR.jsxs)("div", {
                      ...lR(OJ.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.SETTINGS ? "true" : void 0,
                      className: uR()("EverythingMenuTab", {
                        EverythingMenuTabActive: GR === OJ.o.SETTINGS
                      }),
                      children: [RR("general:settings"), UR("OpenSettings", "pause")]
                    }), (0, KR.jsxs)("div", {
                      ...lR(OJ.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.CUSTOMISATION ? "true" : void 0,
                      className: uR()("EverythingMenuTab", {
                        EverythingMenuTabActive: GR === OJ.o.CUSTOMISATION
                      }),
                      children: [RR("general:player"), UR("OpenCharacterCustomization")]
                    }), nR.featureFlags.useSocialFeatures && (0, KR.jsxs)("div", {
                      ...lR(OJ.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.SOCIAL ? "true" : void 0,
                      className: uR()("EverythingMenuTab", {
                        EverythingMenuTabActive: GR === OJ.o.SOCIAL
                      }),
                      ...(0, LJ.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, GR === OJ.o.SOCIAL),
                      children: [RR("socialBar:social"), (0, KR.jsx)(Qf.b, {})]
                    }), VR && (0, KR.jsx)("div", {
                      ...lR(OJ.o.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.SEASON_PASS ? "true" : void 0,
                      className: uR()("EverythingMenuTab", {
                        EverythingMenuTabActive: GR === OJ.o.SEASON_PASS
                      }),
                      children: RR("seasonPass:title", {
                        season: VR.seasonNumber
                      })
                    }), (0, fG.u)(aR) && (0, KR.jsxs)("div", {
                      ...lR(OJ.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.COSMETIC_SHOP ? "true" : void 0,
                      className: uR()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: GR === OJ.o.COSMETIC_SHOP
                      }),
                      children: [(0, KR.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: RR("store:title")
                      }), "new" === rR && (0, KR.jsx)(gi, {}), LR && (0, KR.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === JR && (0, KR.jsxs)("div", {
                      ...lR(OJ.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": GR === OJ.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: uR()("EverythingMenuTab", {
                        EverythingMenuTabActive: GR === OJ.o.LOBBY_LEADERBOARD
                      }),
                      children: [RR("general:lobby"), UR("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, KR.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: IR
                  })]
                }), (0, oZ.i)(GR) && IR, (0, KR.jsxs)("div", {
                  ref: OR,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": oR ? "1" : "0.85"
                  },
                  children: [(0, KR.jsx)(Zt, {
                    show: GR === OJ.o.SETTINGS,
                    setBeforeResumeCallback: AR
                  }), (0, KR.jsx)(rt, {
                    show: GR === OJ.o.CUSTOMISATION
                  }), (0, KR.jsx)(yR.Suspense, {
                    fallback: null,
                    children: (0, KR.jsx)(gZ, {
                      show: GR === OJ.o.SHOP
                    })
                  }), (0, KR.jsx)(mZ, {
                    show: GR === OJ.o.LOBBY_LEADERBOARD
                  }), wR && (0, KR.jsx)(gf, {
                    show: GR === OJ.o.COSMETIC_SHOP
                  }), !wR && (0, KR.jsx)(Lf, {
                    show: GR === OJ.o.COSMETIC_SHOP
                  }), (0, KR.jsx)(Yf, {
                    show: GR === OJ.o.SOCIAL
                  }), (0, KR.jsx)(aV, {
                    show: GR === OJ.o.SEASON_PASS
                  })]
                }), !(0, nR.isMobileApp)() && (0, AV.i)() && (0, Xt.i)(iR.getPlayerRanks()) && (0, KR.jsx)(Ct.d, {
                  ref: CR,
                  className: "EverythingMenuBannerDiv",
                  show: bR,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, KR.jsx)(xf.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: CR
                    },
                    showing: pR && bR,
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
  35143: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(377),
      tR = GR(35150);

    function uR(RR, JR, GR) {
      const uR = Object.entries(JR).sort(((RR, JR) => JR[1] - RR[1])),
        ZR = (0, yR.rb)(RR);
      ZR.push(RR ? "\n\n" : "\n");
      for (const [tR, eR] of uR) {
        var qR, iR, fR;
        const RR = null !== (qR = null === GR || void 0 === GR || null === (iR = GR[tR]) || void 0 === iR ? void 0 : iR.icon) && void 0 !== qR ? qR : `${tR} Enchantment`;
        ZR.push({
          icon: RR,
          style: {
            fontSize: "1.5rem"
          }
        }), ZR.push({
          str: `${tR} ${null!==(fR=(0,yR.J)(eR))&&void 0!==fR?fR:eR}\n`
        })
      }
      ZR.push({
        str: "\n"
      });
      for (const [yR, eR] of uR) {
        var VR, KR, wR, rR;
        const RR = null !== (VR = null === GR || void 0 === GR || null === (KR = GR[yR]) || void 0 === KR ? void 0 : KR.icon) && void 0 !== VR ? VR : `${yR} Enchantment`,
          JR = null !== (wR = null === GR || void 0 === GR || null === (rR = GR[yR]) || void 0 === rR ? void 0 : rR.description) && void 0 !== wR ? wR : (0, tR.o)(yR);
        ZR.push({
          icon: RR,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), ZR.push({
          str: JR,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), ZR.push({
          str: "\n"
        })
      }
      return ZR
    }
  },
  35155: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      h: () => UR,
      l: () => LR,
      n: () => iR,
      q: () => nR,
      t: () => VR,
      w: () => wR,
      x: () => aR,
      y: () => KR
    });
    var yR = GR(359),
      tR = GR(679),
      uR = GR(377),
      ZR = GR(3004),
      qR = GR(35143);

    function iR(RR, JR) {
      var GR;
      let {
        player: yR,
        chestOrCreative: tR
      } = RR;
      var uR;
      return JR < yR.length ? null !== (uR = yR[JR]) && void 0 !== uR ? uR : null : null !== (GR = tR[JR - yR.length]) && void 0 !== GR ? GR : null
    }

    function fR(RR) {
      var JR;
      return null !== (JR = RR.amount) && void 0 !== JR ? JR : 0
    }

    function VR(RR) {
      return 0 === RR.button || void 0 === RR.button
    }

    function KR(RR) {
      return !!RR.shiftKey
    }

    function wR(RR) {
      return "touches" in RR || "touch" === RR.pointerType || "pen" === RR.pointerType
    }
    const rR = new Set,
      eR = 50;

    function aR(RR, JR) {
      var GR;
      const yR = null === (GR = RR[JR]) || void 0 === GR ? void 0 : GR.displayName;
      return (0, tR.I)(yR) ? "string" !== typeof JR ? "" : (!rR.has(JR) && rR.size < eR && (rR.add(JR), console.warn(`No item called "${JR}", so its hover shows the name as given`)), JR) : yR
    }

    function LR(RR, JR, GR) {
      var iR, fR, VR, KR, wR, rR, eR, LR, nR, UR, WR, AR, CR, XR;
      const MR = RR.attributes,
        BR = null !== (iR = null === (fR = JR[RR.name]) || void 0 === fR ? void 0 : fR.rootName) && void 0 !== iR ? iR : RR.name,
        lR = null !== (VR = null !== (KR = MR.customDisplayName) && void 0 !== KR ? KR : null === (wR = JR[RR.name]) || void 0 === wR ? void 0 : wR.displayName) && void 0 !== VR ? VR : aR(JR, BR);
      let pR = lR;
      const gR = null === (rR = MR.customAttributes) || void 0 === rR ? void 0 : rR.enchantmentTier;
      gR && (pR = (0, uR.rb)(lR, {
        colour: uR.kb[gR]
      }));
      const bR = null !== (eR = null !== (LR = null !== (nR = function(RR, JR) {
        var GR;
        if (void 0 === RR || null !== (GR = JR.customAttributes) && void 0 !== GR && GR.author) return RR;
        const tR = (0, yR.dc)(RR);
        return tR.every((RR => "string" === typeof RR)) ? RR : tR.map((RR => "string" === typeof RR ? RR : {
          icon: RR.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(MR.customDescription, MR)) && void 0 !== nR ? nR : null === (UR = JR[RR.name]) || void 0 === UR ? void 0 : UR.description) && void 0 !== LR ? LR : null === (WR = JR[BR]) || void 0 === WR ? void 0 : WR.description) && void 0 !== eR ? eR : "";
      let vR = bR;
      if (null !== (AR = MR.customAttributes) && void 0 !== AR && AR.enchantments) vR = (0, qR.d)(bR, MR.customAttributes.enchantments, MR.customAttributes.enchantmentData);
      else if (GR[BR]) vR = (0, uR.rb)(bR), vR.push({
        str: "\n"
      }), vR.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (CR = MR.customAttributes) && void 0 !== CR && CR.mobSettings) {
        var OR, xR;
        const RR = MR.customAttributes.mobSettings;
        var NR, DR;
        if (vR = [], (0, tR.I)(MR.customAttributes.health) || (vR.push({
            str: "\n"
          }), vR.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), vR.push({
            str: " "
          }), vR.push({
            str: MR.customAttributes.health.toString()
          }), (0, tR.I)(RR.maxHealth) || (vR.push({
            str: "/"
          }), vR.push({
            str: RR.maxHealth.toString()
          }))), !(0, tR.I)(RR.attackDamage) && RR.attackDamage > 0 && (vR.push({
            str: "\n"
          }), vR.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), vR.push({
            str: " "
          }), vR.push({
            str: RR.attackDamage.toString()
          })), !(0, tR.I)(RR.secondaryAttackDamage) && RR.secondaryAttackDamage > 0 && (vR.push({
            str: "\n"
          }), vR.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), vR.push({
            str: " "
          }), vR.push({
            str: RR.secondaryAttackDamage.toString()
          })), (0, tR.I)(RR.baseRunningSpeed) || (vR.push({
            str: "\n"
          }), vR.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), vR.push({
            str: " "
          }), vR.push({
            str: RR.baseRunningSpeed.toFixed(2)
          })), "Saddled" === RR.metaInfo) vR.push({
          str: "\n"
        }), vR.push({
          str: {
            translationKey: "general:has"
          }
        }), vR.push({
          str: " "
        }), vR.push({
          icon: null !== (NR = null === (DR = RR.tameInfo) || void 0 === DR ? void 0 : DR.saddleItemName) && void 0 !== NR ? NR : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (vR.push({
            str: "\n"
          }), vR.push({
            str: "\n"
          }), RR.petInfo && null !== (OR = RR.tameInfo) && void 0 !== OR && OR.supportsFriendship) {
          const JR = ZR.e.getIconsFromFriendshipPoints(RR.petInfo.friendshipPoints);
          for (const RR of JR) vR.push({
            icon: RR,
            style: {
              fontSize: "1.5em"
            }
          });
          vR.push({
            str: "\n"
          });
          const GR = ZR.e.getMobHungerLevel(RR.petInfo.lastFedAt);
          for (const RR of ZR.e.hungerLevelIcons[GR]) vR.push({
            icon: RR,
            style: {
              fontSize: "1.5em"
            }
          });
          vR.push({
            str: " "
          }), vR.push({
            str: ZR.e.hungerLevelTranslations[GR],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (RR.tameInfo && null !== (xR = RR.tameInfo) && void 0 !== xR && xR.supportsFriendship) {
          var HR, oR;
          let JR = null !== (HR = RR.tameInfo.likedFoods) && void 0 !== HR ? HR : [];
          vR.push({
            str: "\n"
          }), vR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: ZR.e.feedTextColours[ZR.e.MobFoodType.Superliked]
            }
          }), vR.push({
            str: " "
          }), null !== (oR = RR.petInfo) && void 0 !== oR && oR.superlikedFoodKnown ? (vR.push({
            icon: RR.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), JR = JR.filter((JR => JR !== RR.petInfo.superlikedFood))) : vR.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), vR.push({
            str: "\n"
          }), vR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: ZR.e.feedTextColours[ZR.e.MobFoodType.Liked]
            }
          }), vR.push({
            str: " "
          });
          for (const RR of JR) vR.push({
            icon: RR,
            style: {
              fontSize: "1.5em"
            }
          });
          vR.push({
            str: "\n"
          }), vR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: ZR.e.feedTextColours[ZR.e.MobFoodType.Neutral]
            }
          }), vR.push({
            str: " "
          });
          for (const GR of null !== (cR = RR.tameInfo.neutralFoods) && void 0 !== cR ? cR : []) {
            var cR;
            vR.push({
              icon: GR,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          vR.push({
            str: "\n"
          }), vR.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: ZR.e.feedTextColours[ZR.e.MobFoodType.Disliked]
            }
          }), vR.push({
            str: " "
          });
          for (const GR of null !== (PR = RR.tameInfo.dislikedFoods) && void 0 !== PR ? PR : []) {
            var PR;
            vR.push({
              icon: GR,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        vR.length > 0 ? (vR.shift(), vR.unshift(...(0, uR.rb)(bR))) : vR = (0, uR.rb)(bR)
      }
      return {
        name: pR,
        desc: vR,
        fontStyle: null !== (XR = MR.customAttributes) && void 0 !== XR && XR.author ? "italic" : "normal"
      }
    }

    function nR(RR, JR, GR, yR) {
      const tR = iR(RR, GR),
        uR = iR(RR, yR);
      if (!tR) return !1;
      const ZR = JR[tR.name].armourReduction,
        qR = JR[uR.name].armourReduction;
      if (qR === ZR) {
        var fR, VR, KR, wR;
        const RR = null !== (fR = null === (VR = tR.attributes.customAttributes) || void 0 === VR ? void 0 : VR.enchantmentTier) && void 0 !== fR ? fR : "Tier 0",
          JR = null !== (KR = null === (wR = uR.attributes.customAttributes) || void 0 === wR ? void 0 : wR.enchantmentTier) && void 0 !== KR ? KR : "Tier 0";
        return parseInt(RR.replace("Tier ", "")) >= parseInt(JR.replace("Tier ", ""))
      }
      return ZR > qR
    }

    function UR(RR) {
      let JR;
      if ("number" === typeof RR) {
        const GR = document.querySelector(`[data-inven-idx="${RR}"]`);
        if (!GR) return null;
        JR = GR.getBoundingClientRect()
      } else JR = RR.getBoundingClientRect();
      return {
        x: JR.left + JR.width / 2,
        y: JR.top + JR.height / 2
      }
    }
  },
  35044: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      h: () => nR,
      j: () => UR
    });
    var yR = GR(66),
      tR = GR(5138),
      uR = GR(1270),
      ZR = GR(3791),
      qR = GR(1590),
      iR = GR(1378);

    function fR(RR) {
      let {
        text: JR
      } = RR;
      const {
        t: GR
      } = (0, uR.A)(), [yR, fR] = (0, ZR.h)();
      return (0, iR.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, iR.jsx)("div", {
          className: "CopyTextRowText",
          children: JR
        }), (0, iR.jsx)(qR.g, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, tR.e)(JR).catch((RR => {
              console.error("Failed to copy text:", RR)
            })), fR()
          },
          disabled: yR,
          children: GR(yR ? "general:copied" : "general:copy")
        })]
      })
    }
    var VR = GR(1444),
      KR = GR(5338),
      wR = GR(3351),
      rR = GR(103),
      eR = GR(2173),
      aR = GR(1465);

    function LR(RR) {
      let {
        show: JR,
        onClose: GR
      } = RR;
      const {
        requestedGameNameWithVariation: yR,
        lobbyName: tR,
        shownLobbyName: uR
      } = (0, eR.i)("connectedGame"), ZR = (0, wR.e)(yR, tR, !1);
      return rR.featureFlags.canUseInviteLinks && (0, iR.jsx)(KR.e, {
        show: JR,
        close: GR,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, iR.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, iR.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, iR.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, iR.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === ZR ? (0, iR.jsx)(aR.d, {}) : ZR, (0, iR.jsx)("br", {}), "Lobby Name: ", uR, (0, iR.jsx)("br", {}), (0, iR.jsx)("br", {}), (0, iR.jsx)("br", {}), (0, iR.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, iR.jsx)(nR, {})]
        })
      })
    }

    function nR() {
      var RR;
      const JR = null !== (RR = UR(rR.featureFlags.canUseInviteLinks)) && void 0 !== RR ? RR : "Loading Link...";
      return rR.featureFlags.canUseInviteLinks && (0, iR.jsx)(fR, {
        text: JR
      })
    }

    function UR(RR) {
      const [JR, GR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        if (!RR) return;
        let JR = !0;
        return (0, VR.B)().then((RR => {
          JR && GR(RR)
        })).catch((RR => {
          console.error("Failed to get invite link:", RR)
        })), () => {
          JR = !1
        }
      }), [RR]), JR
    }
  },
  35208: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      d: () => LR
    });
    GR(35211);
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1270),
      qR = GR(1590),
      iR = GR(3690),
      fR = GR(1468),
      VR = GR(3413),
      KR = GR(4227),
      wR = GR(3240),
      rR = GR(1378);

    function eR(RR) {
      let {
        endsAt: JR,
        className: GR
      } = RR;
      return (0, rR.jsxs)("span", {
        className: uR()("NewPlayerDealClock", GR),
        children: [(0, rR.jsx)(fR.d, {
          name: "hourglass"
        }), (0, rR.jsx)(iR.g, {
          toTime: JR
        })]
      })
    }

    function aR(RR) {
      let {
        offered: JR,
        needsLogin: GR,
        busy: yR,
        highlight: tR,
        onBuy: iR
      } = RR;
      const {
        t: fR
      } = (0, ZR.A)(), {
        pack: eR
      } = JR, aR = (0, KR.d)(JR.package);
      return (0, rR.jsxs)("div", {
        className: uR()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: tR
        }),
        children: [(0, rR.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, rR.jsx)("img", {
            src: wR.b[JR.tier],
            alt: "",
            draggable: !1
          }), (0, rR.jsx)("span", {
            className: "NewPlayerDealTag",
            children: fR("newPlayerDeal:tag")
          })]
        }), (0, rR.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, rR.jsx)(VR.b, {
            className: "NewPlayerDealPackAmount",
            amount: eR.gems
          }), (0, rR.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: fR("newPlayerDeal:split", {
              usual: eR.usualGems.toLocaleString(),
              bonus: (eR.gems - eR.usualGems).toLocaleString()
            })
          })]
        }), (0, rR.jsx)(qR.n, {
          className: "NewPlayerDealBuy",
          loading: yR,
          onClick: iR,
          ariaLabel: fR("newPlayerDeal:buyLabel", {
            amount: eR.gems.toLocaleString(),
            price: aR
          }),
          children: fR(GR ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: aR
          })
        })]
      })
    }

    function LR(RR) {
      let {
        view: JR,
        needsLogin: GR,
        busy: tR,
        highlight: qR,
        onBuy: iR
      } = RR;
      const {
        t: fR
      } = (0, ZR.A)();
      return (0, rR.jsxs)("div", {
        className: uR()("NewPlayerDealPacks", JR.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [JR.packs.map(((RR, JR) => (0, rR.jsxs)(yR.Fragment, {
          children: [JR > 0 && (0, rR.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, rR.jsx)("i", {})
          }), (0, rR.jsx)(aR, {
            offered: RR,
            needsLogin: GR,
            busy: tR,
            highlight: qR === RR.pack.packageId,
            onBuy: () => {
              iR(RR)
            }
          })]
        }, RR.pack.packageId))), (0, rR.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, rR.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: fR("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35218: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => lR,
      f: () => gR
    });
    GR(35211);
    var yR = GR(4224),
      tR = GR(1618),
      uR = GR(3217),
      ZR = GR(4214),
      qR = GR(4191),
      iR = GR(4216),
      fR = GR(4175),
      VR = GR(1270),
      KR = GR(1493),
      wR = GR(1196),
      rR = GR(1590),
      eR = GR(1468),
      aR = GR(3413),
      LR = GR(3804),
      nR = GR(3663),
      UR = GR(3670),
      WR = GR(3674),
      AR = GR(1378);
    const CR = new iR.d(fR.getBillingClient, fR.addPurchaseRecordListener);
    let XR = !1;

    function MR(RR, JR) {
      null !== RR && (0, nR.k)(RR) || ((0, tR.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${JR.pack.packageId}`
      }), null !== RR && (0, nR.m)(RR), lR(JR.pack.gems))
    }

    function BR(RR, JR, GR) {
      const tR = (0, nR.b)(JR);
      switch (RR.kind) {
        case "completed":
          MR(tR, GR);
          break;
        case "pending":
          uR = RR.intentId, ZR = () => {
            LR.g.refresh(), MR(tR, GR)
          }, XR || (XR = !0, CR.listen()), CR.follow(uR, ZR);
          break;
        case "unknownPackage":
          (0, nR.H)(JR, null);
          break;
        case "failed":
          RR.errorKey === yR.d.newPlayerDealUnavailable && (0, nR.H)(JR, null)
      }
      var uR, ZR
    }

    function lR(RR) {
      KR.NotificationProvider.showCustomPopup({
        body: JR => (0, AR.jsx)(pR, {
          gems: RR,
          close: JR
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function pR(RR) {
      let {
        gems: JR,
        close: GR
      } = RR;
      const {
        t: yR
      } = (0, VR.A)();
      return (0, AR.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, AR.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, AR.jsx)(eR.d, {
            name: "circle-check"
          }), (0, AR.jsx)(aR.b, {
            amount: JR
          }), (0, AR.jsx)("span", {
            children: yR("newPlayerDeal:added")
          })]
        }), (0, AR.jsx)(rR.n, {
          className: "NewPlayerDealAddedOk",
          onClick: GR,
          children: yR("general:ok")
        })]
      })
    }

    function gR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR.c;
      const {
        userContext: GR
      } = (0, wR.d)(), {
        purchaseUnderWay: yR,
        notice: tR,
        buy: iR
      } = (0, qR.e)(JR), fR = (0, UR.i)(), VR = GR.mayBuy() || (0, uR.guestsMayBuy)(), KR = null === fR ? !VR : fR.guest && !GR.isLoggedIn();
      return {
        purchaseUnderWay: yR,
        notice: tR,
        needsLogin: KR,
        buyPack: function(yR, tR) {
          (0, nR.v)("new_player_deal.buy", (0, WR.d)(yR.arm, RR, tR.pack.packageId)), null === fR ? iR(function(RR) {
            return {
              sku: RR.pack.packageId,
              tier: RR.tier,
              amount: RR.pack.gems,
              bonusPercent: 0,
              package: RR.package
            }
          }(tR), null, {
            followPending: !1
          }).then((RR => {
            BR(RR, GR, tR)
          })) : KR ? JR(tR.pack.packageId, null) : MR((0, nR.b)(GR), tR)
        }
      }
    }
  },
  35131: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(2173),
      qR = GR(1378);

    function iR(RR) {
      const JR = Math.floor(RR / 3600),
        GR = Math.floor(RR % 3600 / 60),
        yR = Math.floor(RR % 60),
        tR = `${GR.toString().padStart(2,"0")}:${yR.toString().padStart(2,"0")}`;
      return JR > 0 ? `${JR}:${tR}` : tR
    }
    const fR = (0, yR.memo)((function(RR) {
      let {
        className: JR
      } = RR;
      const {
        recording: GR,
        clipping: yR,
        seconds: tR
      } = (0, ZR.i)("replayRecorder");
      return GR || yR ? (0, qR.jsxs)("div", {
        className: uR()("RecordingIndicator", {
          RecordingIndicatorClipping: !GR
        }, JR),
        "data-camera-keeper": "",
        children: [(0, qR.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, qR.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: GR ? "REC" : "CLIP"
        }), GR && (0, qR.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: iR(tR)
        })]
      }) : null
    }))
  },
  35221: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1378);
    const ZR = 21,
      qR = 2 * Math.PI * ZR;

    function iR(RR) {
      let {
        tier: JR,
        state: GR,
        progress: yR,
        size: iR = "large"
      } = RR;
      const fR = tR()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === iR,
        SeasonPassTierNodeLarge: "large" === iR,
        SeasonPassTierNodeReached: "reached" === GR,
        SeasonPassTierNodeEarning: "earning" === GR
      });
      if ("earning" !== GR || "large" === iR) return (0, uR.jsx)("span", {
        className: fR,
        children: (0, uR.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: JR
        })
      });
      const VR = Math.max(0, Math.min(1, yR));
      return (0, uR.jsxs)("span", {
        className: fR,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * VR),
        children: [(0, uR.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, uR.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, uR.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: ZR
          }), (0, uR.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: ZR,
            strokeDasharray: `${VR*qR} ${qR}`,
            transform: "rotate(-90 28 28)"
          }), (0, uR.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, uR.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: JR
        })]
      })
    }
  },
  5766: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5434),
      ZR = GR(1270),
      qR = GR(1468),
      iR = GR(1590),
      fR = GR(1647),
      VR = GR(1493),
      KR = GR(3606),
      wR = GR(1378);
    const rR = {
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

    function eR(RR) {
      let {
        platform: JR
      } = RR;
      const GR = "youtube" === JR;
      return (0, wR.jsxs)("span", {
        className: tR()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: GR
        }),
        children: [GR && (0, wR.jsx)(KR.e, {
          variant: "white"
        }), !GR && (0, wR.jsx)(qR.d, {
          name: rR[JR].icon,
          kit: "brands"
        })]
      })
    }

    function aR(RR) {
      let {
        platform: JR,
        link: GR,
        editable: yR,
        userContext: tR,
        onLinksUpdated: KR
      } = RR;
      const {
        t: aR
      } = (0, ZR.A)(), LR = rR[JR];
      if (!GR && !yR) return null;

      function nR() {
        var RR;
        if (!tR || !KR) return;
        VR.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: LR.name
            }
          },
          prefixText: uR.u[JR],
          placeholderText: "playBloxd",
          initialValue: null !== (RR = null === GR || void 0 === GR ? void 0 : GR.handle) && void 0 !== RR ? RR : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: GR ? "general:remove" : void 0
        }).getResult().then((async RR => {
          if ("notificationTornDown" !== RR && null !== RR) try {
            "submit" === RR.type ? await fR.c.setSocialLink(tR, JR, RR.value) : await fR.c.clearSocialLink(tR, JR), KR()
          } catch (GR) {
            console.error("Failed to update social link", GR), VR.NotificationProvider.showAlertPopup({
              title: GR.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (GR) {
        const RR = `@${GR.handle}`;
        return (0, wR.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: LR.color
          },
          href: GR.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, wR.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, wR.jsx)(eR, {
              platform: JR
            }), (0, wR.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, wR.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: RR
              })
            })]
          }), yR && (0, wR.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, iR.bb)({
              stopPropagation: !0
            }),
            onClick: RR => {
              RR.stopPropagation(), RR.preventDefault(), nR()
            },
            children: (0, wR.jsx)(qR.d, {
              name: "pen-to-square"
            })
          }), !yR && (0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, wR.jsx)(qR.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, wR.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: LR.color
        },
        ...(0, iR.bb)(),
        onClick: () => {
          nR()
        },
        children: [(0, wR.jsx)(eR, {
          platform: JR
        }), (0, wR.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: LR.name
          }), (0, wR.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: aR("homePage:profileSocialLinkAdd")
          })]
        }), (0, wR.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, wR.jsx)(qR.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function LR(RR) {
      let {
        socialLinks: JR,
        editable: GR = !1,
        userContext: yR,
        onLinksUpdated: tR
      } = RR;
      if (!GR && 0 === JR.length) return null;
      const ZR = new Map(JR.map((RR => [RR.platform, RR]))),
        qR = GR ? uR.r : JR.map((RR => RR.platform));
      return (0, wR.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, wR.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: qR.map((RR => (0, wR.jsx)(aR, {
            platform: RR,
            link: ZR.get(RR),
            editable: GR,
            userContext: yR,
            onLinksUpdated: tR
          }, RR)))
        })
      })
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  35204: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(4757);

    function uR() {
      const [RR, JR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        let RR = !0;
        return (0, tR.h)().then((() => {
          RR && JR(!0)
        })), () => {
          RR = !1
        }
      }), []), RR
    }
  },
  7717: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(46);

    function uR(RR, JR) {
      var GR;
      const [uR, ZR] = (0, yR.useState)(null !== (GR = tR.i.getItem(RR)) && void 0 !== GR ? GR : JR);
      return [uR, JR => {
        tR.i.setItem(RR, JR), ZR(JR)
      }]
    }
  },
  35111: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => aR,
      e: () => eR
    });
    GR(35113);
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(35106);

    function qR(RR, JR) {
      return Math.max(1, Math.round(RR * JR))
    }

    function iR(RR, JR) {
      const GR = JR * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        yR = function(RR, JR) {
          if (RR.lines) return qR(RR.lineThickness, JR) % 2;
          if (RR.dot) return qR(RR.dotSize, JR) % 2;
          return fR(RR, JR) % 2
        }(RR, JR),
        tR = VR(RR.lineThickness * GR, yR),
        uR = qR(RR.lineLength, GR),
        ZR = Math.round(RR.gap * GR),
        iR = RR.outline > 0 ? qR(RR.outline, GR) : 0,
        wR = [];
      if (RR.lines && (wR.push({
          x: tR + ZR,
          y: 0,
          w: uR,
          h: tR,
          arm: "right"
        }), wR.push({
          x: -ZR - uR,
          y: 0,
          w: uR,
          h: tR,
          arm: "left"
        }), wR.push({
          x: 0,
          y: tR + ZR,
          w: tR,
          h: uR,
          arm: "down"
        }), RR.tStyle || wR.push({
          x: 0,
          y: -ZR - uR,
          w: tR,
          h: uR,
          arm: "up"
        }), 0 === ZR && wR.push({
          x: 0,
          y: 0,
          w: tR,
          h: tR
        })), RR.dot) {
        const JR = VR(RR.dotSize * GR, yR),
          uR = RR.lines && 0 === ZR && RR.dotSize > RR.lineThickness ? Math.max(JR, tR + 2) : JR,
          qR = (tR - uR) / 2;
        wR.push({
          x: qR,
          y: qR,
          w: uR,
          h: uR
        })
      }
      const rR = wR.map((RR => ({
        ...RR,
        x: RR.x - iR,
        y: RR.y - iR,
        w: RR.w + 2 * iR,
        h: RR.h + 2 * iR
      })));
      let eR = null,
        aR = null;
      if (RR.circle) {
        const JR = qR(RR.circleThickness, GR),
          uR = function(RR, JR) {
            return RR + (RR % 2 === JR ? 0 : 1)
          }(fR(RR, GR), yR),
          ZR = (tR - uR) / 2;
        eR = KR(ZR, uR, JR), iR > 0 && (aR = KR(ZR - iR, uR + 2 * iR, JR + 2 * iR))
      }
      return {
        cell: tR,
        fills: wR,
        outlines: iR > 0 ? rR : [],
        ring: eR,
        ringOutline: aR
      }
    }

    function fR(RR, JR) {
      return Math.round(RR.circleRadius * JR * 2 + qR(RR.circleThickness, JR))
    }

    function VR(RR, JR) {
      return Math.max(2 - JR, 2 * Math.round((RR - JR) / 2) + JR)
    }

    function KR(RR, JR, GR) {
      const yR = 2 * GR >= JR - 1;
      return {
        x: RR,
        y: RR,
        size: JR,
        border: Math.min(GR, Math.floor(JR / 2)),
        filled: yR
      }
    }
    var wR = GR(1378);
    const rR = 1.4;

    function eR(RR, JR) {
      return RR && JR ? `scale(${rR})` : "scale(1)"
    }

    function aR(RR) {
      return "classic" === RR.settings.style ? (0, wR.jsx)(UR, {
        ...RR
      }) : (0, wR.jsx)(lR, {
        ...RR
      })
    }
    const LR = .125;

    function nR(RR, JR) {
      const GR = {};
      if (RR.color !== ZR.e.color && (GR.color = (0, ZR.j)(RR.color)), RR.opacity !== ZR.e.opacity && (GR.opacity = RR.opacity / 100), RR.outline !== ZR.e.outline || RR.outlineColor !== ZR.e.outlineColor) {
        const JR = RR.outline,
          yR = (0, ZR.j)(RR.outlineColor);
        GR.textShadow = JR > 0 ? `-${JR}px 0 ${yR}, 0 ${JR}px ${yR}, ${JR}px 0 ${yR}, 0 -${JR}px ${yR}` : "none"
      }
      if (RR.size !== ZR.e.size) {
        const yR = RR.size / 100;
        GR.fontSize = JR ? `calc(max(1.3rem, 18px) * ${yR})` : `calc(1.3rem * ${yR})`, GR.marginTop = `-${LR}em`, GR.transformOrigin = `50% calc(50% + ${LR}em)`
      }
      return GR
    }

    function UR(RR) {
      let {
        settings: JR,
        touch: GR,
        inPreview: yR,
        inEditor: uR,
        pressed: ZR = !1,
        pressRef: qR
      } = RR;
      return (0, wR.jsx)("div", {
        className: tR()("Crosshair", {
          Touch: GR,
          CrosshairInPreview: yR,
          CrosshairInEditor: uR || yR
        }),
        ref: qR,
        style: {
          transform: eR(ZR, JR.growOnClick),
          ...nR(JR, GR)
        },
        children: "+"
      })
    }

    function WR(RR, JR) {
      return RR / JR + "px"
    }

    function AR(RR, JR, GR, yR) {
      return {
        ...MR(RR, JR, GR),
        width: WR(RR.w, GR),
        height: WR(RR.h, GR),
        background: yR
      }
    }

    function CR(RR, JR, GR) {
      return {
        left: WR(RR.x, JR),
        top: WR(RR.y, JR),
        width: WR(RR.size, JR),
        height: WR(RR.size, JR),
        borderWidth: WR(RR.border, JR),
        borderColor: GR,
        background: RR.filled ? GR : void 0
      }
    }
    const XR = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function MR(RR, JR, GR) {
      const [yR, tR] = RR.arm ? XR[RR.arm] : [0, 0], uR = Math.round(JR * GR);
      return {
        left: WR(RR.x + yR * uR, GR),
        top: WR(RR.y + tR * uR, GR)
      }
    }

    function BR(RR) {
      return RR.arm ? {
        "data-arm": RR.arm,
        "data-x": RR.x,
        "data-y": RR.y
      } : {}
    }

    function lR(RR) {
      let {
        settings: JR,
        inPreview: GR,
        inEditor: yR,
        pressed: qR = !1,
        spread: fR,
        spreadRef: VR
      } = RR;
      const KR = (0, uR.useRef)(null),
        {
          box: eR,
          dpr: aR
        } = function(RR) {
          const [JR, GR] = (0, uR.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, uR.useLayoutEffect)((() => {
            const JR = RR.current;
            if (!JR) return;
            const yR = () => {
              const RR = JR.getBoundingClientRect(),
                yR = window.devicePixelRatio || 1;
              GR((JR => JR.dpr === yR && JR.box.left === RR.left && JR.box.top === RR.top && JR.box.width === RR.width && JR.box.height === RR.height ? JR : {
                box: {
                  left: RR.left,
                  top: RR.top,
                  width: RR.width,
                  height: RR.height
                },
                dpr: yR
              }))
            };
            yR();
            const tR = new ResizeObserver(yR);
            return tR.observe(JR), window.addEventListener("resize", yR), window.addEventListener("scroll", yR, !0), () => {
              tR.disconnect(), window.removeEventListener("resize", yR), window.removeEventListener("scroll", yR, !0)
            }
          }), [RR]), JR
        }(KR),
        LR = (0, uR.useRef)(aR);
      LR.current = aR;
      const nR = iR(JR, aR, qR && JR.growOnClick ? rR : 1),
        UR = function(RR, JR, GR) {
          const yR = Math.round((RR.left + RR.width / 2) * GR - JR / 2),
            tR = Math.round((RR.top + RR.height / 2) * GR - JR / 2);
          return {
            x: yR / GR - RR.left,
            y: tR / GR - RR.top
          }
        }(eR, nR.cell, aR),
        WR = (0, ZR.j)(JR.color),
        XR = (0, ZR.j)(JR.outlineColor),
        lR = (0, uR.useRef)(0);
      (0, uR.useLayoutEffect)((() => {
        if (VR) return VR.current = RR => {
          var JR;
          lR.current = RR, null === (JR = KR.current) || void 0 === JR || JR.querySelectorAll("[data-arm]").forEach((JR => {
            Object.assign(JR.style, MR(function(RR) {
              return {
                x: Number(RR.dataset.x),
                y: Number(RR.dataset.y),
                arm: RR.dataset.arm
              }
            }(JR), RR, LR.current))
          }))
        }, () => {
          VR.current = null
        }
      }), [VR]);
      const pR = null !== fR && void 0 !== fR ? fR : lR.current;
      return (0, wR.jsx)("div", {
        ref: KR,
        className: tR()("CrosshairShapes", {
          CrosshairInPreview: GR,
          CrosshairInEditor: yR || GR,
          CrosshairSpreads: void 0 !== VR
        }),
        children: (0, wR.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: UR.x,
            top: UR.y,
            opacity: JR.opacity / 100
          },
          children: (0, wR.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [nR.ringOutline && (0, wR.jsx)("div", {
              className: "CrosshairRing",
              style: CR(nR.ringOutline, aR, XR)
            }), nR.outlines.map(((RR, JR) => (0, wR.jsx)("div", {
              className: "CrosshairPart",
              ...BR(RR),
              style: AR(RR, pR, aR, XR)
            }, `o${JR}`))), nR.ring && (0, wR.jsx)("div", {
              className: "CrosshairRing",
              style: CR(nR.ring, aR, WR)
            }), nR.fills.map(((RR, JR) => (0, wR.jsx)("div", {
              className: "CrosshairPart",
              ...BR(RR),
              style: AR(RR, pR, aR, WR)
            }, `f${JR}`)))]
          })
        })
      })
    }
  },
  35122: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => LR,
      h: () => aR
    });
    var yR = GR(35106);
    const tR = "XH1-",
      uR = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      ZR = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      qR = ["color", "outlineColor"],
      iR = 1 + 3 * qR.length + ZR.length + 1,
      fR = Math.ceil(8 * iR / Math.log2(62)),
      VR = tR.length + fR;

    function KR(RR) {
      let JR = 90;
      for (const GR of RR) JR = 31 * JR + GR & 255;
      return JR
    }
    const wR = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      rR = BigInt(wR.length);

    function eR(RR, JR) {
      let GR = 0n;
      for (const tR of RR) {
        const RR = wR.indexOf(tR);
        if (RR < 0) return null;
        GR = GR * rR + BigInt(RR)
      }
      if (GR >> BigInt(8 * JR) !== 0n) return null;
      const yR = [];
      for (let tR = 0; tR < JR; tR++) yR.unshift(Number(0xffn & GR)), GR >>= 8n;
      return yR
    }

    function aR(RR) {
      let JR = "shapes" === RR.style ? 1 : 0;
      uR.forEach(((GR, yR) => {
        RR[GR] && (JR |= 1 << yR + 1)
      }));
      const GR = [JR];
      for (const tR of qR) {
        const JR = (0, yR.f)(tR, RR[tR]);
        GR.push(JR >> 16 & 255, JR >> 8 & 255, 255 & JR)
      }
      for (const tR of ZR) {
        const {
          min: JR,
          step: uR
        } = yR.d[tR];
        GR.push(Math.round(((0, yR.f)(tR, RR[tR]) - JR) / uR))
      }
      return GR.push(KR(GR)), tR + function(RR, JR) {
        let GR = 0n;
        for (const tR of RR) GR = GR << 8n | BigInt(tR);
        let yR = "";
        for (let tR = 0; tR < JR; tR++) yR = wR[Number(GR % rR)] + yR, GR /= rR;
        return yR
      }(GR, fR)
    }

    function LR(RR) {
      for (const JR of RR.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${fR}})`, "gi"))) {
        const RR = nR(eR(JR[1], iR));
        if (RR) return RR
      }
      return null
    }

    function nR(RR) {
      if (!RR || RR.length !== iR || KR(RR.slice(0, -1)) !== RR[RR.length - 1]) return null;
      const JR = RR[0],
        GR = {
          ...yR.e,
          style: 1 & JR ? "shapes" : "classic"
        };
      uR.forEach(((RR, yR) => {
        GR[RR] = 0 !== (JR & 1 << yR + 1)
      }));
      let tR = 1;
      for (const yR of qR) GR[yR] = RR[tR] << 16 | RR[tR + 1] << 8 | RR[tR + 2], tR += 3;
      for (const uR of ZR) {
        const {
          min: JR,
          step: ZR
        } = yR.d[uR];
        GR[uR] = (0, yR.f)(uR, JR + RR[tR] * ZR), tR++
      }
      return GR
    }
  },
  35106: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      e: () => tR,
      f: () => uR,
      j: () => fR,
      m: () => iR,
      p: () => VR,
      t: () => qR,
      w: () => ZR
    });
    const yR = {
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
      tR = Object.freeze({
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

    function uR(RR, JR) {
      var GR;
      const {
        min: uR,
        max: ZR,
        step: qR
      } = yR[RR];
      if (!Number.isFinite(JR)) return tR[RR];
      const iR = (null !== (GR = String(qR).split(".")[1]) && void 0 !== GR ? GR : "").length,
        fR = Number((Math.round(JR / qR) * qR).toFixed(iR));
      return Math.min(ZR, Math.max(uR, fR))
    }

    function ZR(RR, JR, GR) {
      const yR = "number" === typeof GR ? uR(JR, GR) : GR;
      return {
        ...RR,
        [JR]: yR
      }
    }

    function qR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(tR).every((yR => GR.includes(yR) || RR[yR] === JR[yR]))
    }

    function iR(RR) {
      return qR(RR, tR)
    }

    function fR(RR) {
      return `#${RR.toString(16).padStart(6,"0")}`
    }

    function VR(RR) {
      const JR = /^#?([0-9a-f]{6})$/i.exec(RR.trim());
      return JR ? parseInt(JR[1], 16) : null
    }
  },
  35124: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      f: () => wR
    });
    var yR = GR(66),
      tR = GR(46),
      uR = GR(35122),
      ZR = GR(35106);
    const qR = "crosshairCode";
    let iR = null;
    const fR = new Set;

    function VR() {
      if (null === iR) {
        var RR;
        const JR = tR.i.getItem(qR);
        iR = null !== (RR = "string" === typeof JR ? (0, uR.f)(JR) : null) && void 0 !== RR ? RR : ZR.e
      }
      return iR
    }

    function KR(RR) {
      iR = RR, (0, ZR.m)(RR) ? tR.i.removeItem(qR) : tR.i.setItem(qR, (0, uR.h)(RR));
      for (const JR of fR) JR()
    }

    function wR() {
      const [RR, JR] = (0, yR.useState)(VR);
      return (0, yR.useEffect)((() => {
        const RR = () => {
          JR(VR())
        };
        return RR(), GR = RR, fR.add(GR), () => {
          fR.delete(GR)
        };
        var GR
      }), []), RR
    }
  },
  35172: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      h: () => ZR,
      l: () => uR
    });
    var yR = GR(66);
    const tR = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(RR) {
        var JR;
        return null !== (JR = this.inFlight.get(RR)) && void 0 !== JR ? JR : 0
      }
      setInFlight(RR, JR) {
        this.getInFlight(RR) !== JR && (this.inFlight.set(RR, JR), this.notify())
      }
      subscribe(RR) {
        return this.listeners.add(RR), () => {
          this.listeners.delete(RR)
        }
      }
      getLanding(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = this.landings.get(RR)) || void 0 === GR ? void 0 : GR.at(-1)) && void 0 !== JR ? JR : null
      }
      hasLanding(RR, JR) {
        var GR, yR;
        return null !== (GR = null === (yR = this.landings.get(RR)) || void 0 === yR ? void 0 : yR.includes(JR)) && void 0 !== GR && GR
      }
      addLanding(RR, JR) {
        var GR;
        const yR = null !== (GR = this.landings.get(RR)) && void 0 !== GR ? GR : [];
        return this.landings.set(RR, [...yR, JR]), this.notify(), () => {
          this.landings.set(RR, this.landings.get(RR).filter((RR => RR !== JR))), this.notify()
        }
      }
      notify() {
        for (const RR of this.listeners) RR()
      }
    };

    function uR(RR, JR) {
      const [GR, uR] = (0, yR.useState)((() => tR.getInFlight(RR)));
      return (0, yR.useLayoutEffect)((() => {
        const JR = () => {
          uR(tR.getInFlight(RR))
        };
        return JR(), tR.subscribe(JR)
      }), [RR]), Math.max(0, JR - GR)
    }

    function ZR(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, yR.useLayoutEffect)((() => {
        if (GR) return tR.addLanding(RR, JR.current)
      }), [RR, JR, GR])
    }
  },
  35054: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      h: () => yR
    });
    const yR = "image/jpeg",
      tR = "jpg"
  },
  35059: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => iR,
      e: () => fR,
      f: () => VR
    });
    var yR = GR(1879),
      tR = GR(4479),
      uR = GR(103),
      ZR = GR(1963),
      qR = GR(35054);

    function iR() {
      return !(0, uR.isMobileApp)() || yR.c.supports("photos")
    }
    async function fR(RR) {
      var JR, GR;
      if ((0, uR.isMobileApp)()) {
        const {
          saved: JR
        } = await yR.c.request("photos.save", {
          data: await (0, tR.e)(RR),
          mimeType: qR.h
        });
        return JR ? "saved" : "denied"
      }
      return (0, uR.isIOS)() && null !== (JR = (GR = navigator).canShare) && void 0 !== JR && JR.call(GR, {
        files: [RR]
      }) ? VR(RR) : ((0, ZR.e)(RR, RR.name), "saved")
    }
    async function VR(RR) {
      try {
        return await navigator.share({
          files: [RR]
        }), "shared"
      } catch (JR) {
        if (JR instanceof DOMException && "AbortError" === JR.name) return "xR";
        if (JR instanceof DOMException && "NotAllowedError" === JR.name) return "needsTap";
        throw JR
      }
    }
  },
  35047: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => eR,
      e: () => aR,
      h: () => LR,
      i: () => nR
    });
    var yR = GR(25),
      tR = GR(35029),
      uR = GR(1800),
      ZR = GR(35051);
    const qR = 64,
      iR = 8;
    async function fR(RR) {
      try {
        const JR = await createImageBitmap(RR, {
          resizeWidth: qR,
          resizeHeight: qR,
          resizeQuality: "high"
        });
        try {
          const RR = document.createElement("canvas");
          RR.width = qR, RR.height = qR;
          const GR = RR.getContext("2d", {
            willReadFrequently: !0
          });
          return GR.drawImage(JR, 0, 0, qR, qR),
            function(RR) {
              for (let JR = 0; JR < RR.length; JR += 4)
                if (RR[JR] > iR || RR[JR + 1] > iR || RR[JR + 2] > iR) return !1;
              return !0
            }(GR.getImageData(0, 0, qR, qR).data)
        } finally {
          JR.close()
        }
      } catch (JR) {
        return console.warn("Screenshot mode: couldn't check whether a photo is blank", JR), !1
      }
    }
    var VR = GR(35054);
    const KR = 8294400,
      wR = .92,
      rR = 3;
    class eR extends Error {
      constructor(RR) {
        super(`The photo came out blank ${RR} times`), this.name = "BlankPhotoError"
      }
    }

    function aR() {
      (0, uR.e)(), yR.d.set({
        screenshotMode: !0
      })
    }

    function LR() {
      yR.d.set({
        screenshotMode: !1
      })
    }
    async function nR() {
      const RR = performance.now(),
        JR = await async function(RR, JR) {
          let GR = 0;
          for (; GR < rR;) {
            let tR;
            try {
              tR = await RR()
            } catch (yR) {
              if (0 === GR) throw yR;
              return {
                outcome: "failed",
                error: yR,
                blanks: GR
              }
            }
            if (!await JR(tR)) return {
              outcome: "saved",
              blob: tR,
              blanks: GR
            };
            GR++
          }
          return {
            outcome: "refused",
            blanks: GR
          }
        }((async () => {
          const {
            width: RR,
            height: JR,
            scale: GR
          } = function(RR, JR, GR) {
            const yR = Math.max(1, RR),
              tR = Math.max(1, JR),
              uR = Math.min(Math.max(1, GR), Math.sqrt(KR / (yR * tR)));
            return {
              width: Math.round(yR * uR),
              height: Math.round(tR * uR),
              scale: uR
            }
          }(window.innerWidth, window.innerHeight, window.devicePixelRatio);
          return (await tR.devTools.capturePhoto(RR, JR, {
            scale: GR,
            type: VR.h,
            quality: wR
          })).blob
        }), fR);
      if (JR.blanks > 0) {
        const yR = (0, ZR.d)();
        GR.e(309).then((() => GR(42594))).then((GR => {
          let {
            reportBlankPhoto: tR
          } = GR;
          tR(JR.blanks, JR.outcome, RR, yR)
        })).catch((RR => {
          console.warn("Screenshot mode: couldn't report a blank photo", RR)
        }))
      }
      switch (JR.outcome) {
        case "saved":
          return new File([JR.blob], function(RR) {
            const JR = RR => String(RR).padStart(2, "0"),
              GR = `${RR.getFullYear()}${JR(RR.getMonth()+1)}${JR(RR.getDate())}`,
              yR = `${JR(RR.getHours())}${JR(RR.getMinutes())}${JR(RR.getSeconds())}`;
            return `bloxd-${GR}-${yR}.${VR.e}`
          }(new Date), {
            type: VR.h
          });
        case "refused":
          throw new eR(JR.blanks);
        case "failed":
          throw JR.error
      }
    }
  },
  35099: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => tR
    });
    var yR = GR(25);

    function tR(RR, JR) {
      return RR && !JR
    }

    function uR() {
      return tR(yR.d.get("isTouchScreen"), yR.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5581: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => uR,
      e: () => tR
    });
    let yR = null;

    function tR(RR) {
      yR = RR
    }

    function uR() {
      return yR
    }

    function ZR(RR) {
      return "bloxd" === RR.site && !RR.isMobileApp && !RR.isTouchScreen
    }
  },
  35031: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = new Set(["chunkBorders"])
  },
  35029: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ALL_DEV_TOOLS: () => ZR,
      coreDevTools: () => fR,
      devTools: () => iR
    });
    var yR = GR(709),
      tR = GR(1397),
      uR = GR(35031);
    const ZR = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function qR() {
      const {
        noaDevTools: RR
      } = await GR.e(269).then((() => GR(42590)));
      return RR
    }
    const iR = new class {
        constructor() {
          this.loadHost = qR, this.tools = ZR
        }
        setHost(RR) {
          this.tools = null === RR ? ZR : RR.tools, this.loadHost = null === RR ? qR : async () => RR
        }
        supports(RR) {
          return this.tools.has(RR)
        }
        async downloadScene(RR, JR) {
          const GR = await this.loadHost();
          await GR.downloadScene(RR, JR)
        }
        async setAmbientLightIntensity(RR) {
          const JR = await this.loadHost();
          await JR.setAmbientLightIntensity(RR)
        }
        async capturePhoto(RR, JR, GR) {
          return (await this.loadHost()).capturePhoto(RR, JR, GR)
        }
      },
      fR = {
        tools: uR.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    yR.G && iR.setHost(fR), (0, tR.E)((() => {
      iR.setHost(fR)
    }))
  },
  35195: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => tR,
      l: () => KR
    });
    var yR = GR(1718);

    function tR(RR) {
      var JR;
      return {
        ...qR.store,
        yaw: qR.store.yaw + (null !== (JR = yR.b[RR].previewYaw) && void 0 !== JR ? JR : 0)
      }
    }
    const uR = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      ZR = {
        ...uR,
        radius: 33,
        target: [0, 3.9, 0]
      },
      qR = {
        player: uR,
        store: ZR,
        showcase: {
          ...ZR,
          target: [0, 1.9, 0]
        }
      };

    function iR(RR, JR) {
      RR instanceof Promise ? RR.then(JR).catch((RR => {
        console.error("Couldn't open the preview", RR)
      })) : JR(RR)
    }
    class fR {
      constructor(RR) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height), null !== this.view && RR.show(this.view))
        }))
      }
      show(RR) {
        var JR;
        this.view = RR, null === (JR = this.opened) || void 0 === JR || JR.show(RR)
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    class VR {
      constructor(RR) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(RR).then((RR => RR.ready)), iR(RR, (RR => {
          this.closed ? RR.close() : (this.opened = RR, null !== this.size && RR.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var RR, JR;
        return null !== (RR = null === (JR = this.opened) || void 0 === JR ? void 0 : JR.isReady()) && void 0 !== RR && RR
      }
      setCosmetic(RR, JR) {
        var GR;
        null === (GR = this.opened) || void 0 === GR || GR.setCosmetic(RR, JR)
      }
      setNametag(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setNametag(RR)
      }
      playEmote(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.playEmote(RR)
      }
      setOrbit(RR) {
        var JR;
        null === (JR = this.opened) || void 0 === JR || JR.setOrbit(RR)
      }
      resetCamera() {
        var RR;
        null === (RR = this.opened) || void 0 === RR || RR.resetCamera()
      }
      async untilDrawn(RR) {
        var JR;
        await this.ready, await (null === (JR = this.opened) || void 0 === JR ? void 0 : JR.untilDrawn(RR))
      }
      resize(RR, JR) {
        var GR;
        this.size = {
          width: RR,
          height: JR
        }, null === (GR = this.opened) || void 0 === GR || GR.resize(RR, JR)
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.opened) || void 0 === RR || RR.close(), this.opened = null
      }
    }
    const KR = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(RR) {
        this.host = RR
      }
      setDefaultHost(RR) {
        this.makeDefault = RR
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(RR) {
        return new fR(this.current().openMob(RR))
      }
      openPet(RR) {
        return new fR(this.current().openPet(RR))
      }
      openMobLineup(RR) {
        return new fR(this.current().openMobLineup(RR))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(RR, JR) {
        return new VR(this.current().openCharacter(RR, JR))
      }
    }
  },
  35193: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.e,
      e: () => yR.i,
      g: () => yR.l
    });
    var yR = GR(35195);
    class tR {
      constructor(RR) {
        this.load = RR, this.loaded = null, this.loading = null
      }
      run(RR) {
        return null !== this.loaded ? RR(this.loaded) : (this.loading ??= this.load().then((RR => (this.loaded = RR, RR)), (RR => {
          throw this.loading = null, RR
        })), this.loading.then(RR))
      }
    }
    class uR {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(310)]).then((() => GR(42616))))), this.characterScene = new tR((() => Promise.all([GR.e(85), GR.e(264), GR.e(263), GR.e(289), GR.e(113), GR.e(290), GR.e(89), GR.e(86), GR.e(287), GR.e(87), GR.e(88), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(311), GR.e(177), GR.e(260), GR.e(278), GR.e(292), GR.e(295), GR.e(91), GR.e(224), GR.e(252), GR.e(266), GR.e(112), GR.e(124), GR.e(257), GR.e(142), GR.e(90), GR.e(122), GR.e(279), GR.e(184)]).then((() => GR(42729)))))
      }
      openMob(RR) {
        return this.mobScene.run((JR => JR.openMobPreview(RR)))
      }
      openPet(RR) {
        return this.mobScene.run((JR => JR.openPetPreview(RR)))
      }
      openMobLineup(RR) {
        return this.mobScene.run((JR => JR.openMobLineupPreview(RR)))
      }
      openCharacter(RR, JR) {
        return this.characterScene.run((GR => GR.openCharacterPreview(RR, JR)))
      }
    }
    yR.l.setDefaultHost((() => new uR))
  },
  7802: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => uR
    });
    var yR = GR(46);
    const tR = "shaderPack";
    async function uR() {
      var RR;
      let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (RR = await yR.g.getItem(tR, JR)) && void 0 !== RR ? RR : null
    }
  },
  35064: (RR, JR, GR) => {
    function yR(RR, JR) {
      return RR && !JR
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  35085: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(1406);

    function tR() {
      var RR, JR;
      return null !== (RR = null === (JR = screen.orientation) || void 0 === JR ? void 0 : JR.type) && void 0 !== RR ? RR : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const uR = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && tR() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = tR(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, yR.ma)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const RR of this.resizers) RR()
          }
        }), 1e3)
      }
      heldSizer(RR) {
        let JR = !1;
        return () => {
          if (JR && this.isHeld()) return null;
          const GR = RR();
          return JR ||= null !== GR, GR
        }
      }
      onRelease(RR) {
        return this.resizers.add(RR), () => {
          this.resizers.delete(RR)
        }
      }
    }
  },
  35035: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR,
      e: () => fR,
      f: () => aR,
      j: () => eR
    });
    var yR = GR(163),
      tR = GR(1359),
      uR = GR(1282),
      ZR = GR(1201),
      qR = GR(1939);
    const iR = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function fR(RR) {
      return iR[RR]
    }

    function VR(RR) {
      return (0, qR.b)(RR) ? "outdated" : RR instanceof yR.d ? 429 === RR.httpCode ? "busy" : "server" : "offline"
    }

    function KR(RR, JR, GR) {
      return (0, ZR.postJsonWithMetricsCookiesAndJsonResponse)(`${uR.clientSideServerUrls.indexUrl}${JR}`, GR, {
        retries: 3
      }, RR.getMetricsCookies()).catch((RR => (console.error("Bad response from the server when trying to change name:", JR, RR), {
        outcome: "failed",
        failure: VR(RR)
      })))
    }

    function wR(RR) {
      return "outcome" in RR && "failed" === RR.outcome
    }

    function rR(RR) {
      return console.error("Error when trying to get with new name from DB", RR), {
        outcome: "refused",
        message: RR
      }
    }
    async function eR(RR) {
      const JR = await KR(RR, "/index/name/random", {});
      return wR(JR) ? JR : "err" in JR ? rR(JR.err) : (RR.setPlayerName(JR.name), {
        outcome: "changed",
        name: JR.name
      })
    }
    async function aR(RR, JR) {
      const GR = await KR(RR, "/index/name/update", {
        name: JR
      });
      return wR(GR) ? GR : "err" in GR ? rR(GR.err) : GR.nameExists ? {
        outcome: "taken"
      } : (RR.setPlayerName(JR), {
        outcome: "changed",
        name: JR
      })
    }

    function LR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const yR = 1 === JR ? 1 : 10 ** (JR - 1),
        uR = String(yR + Math.floor(GR() * (10 ** JR - yR)));
      return `${RR.slice(0,tR.i-JR)}${uR}`
    }
    const nR = [1, 2, 3, 4];
    async function UR(RR, JR) {
      const GR = await aR(RR, JR);
      if ("taken" !== GR.outcome) return GR;
      for (const yR of nR) {
        const GR = LR(JR, yR),
          tR = await aR(RR, GR);
        if ("taken" !== tR.outcome) return tR
      }
      return {
        outcome: "taken"
      }
    }
  },
  35051: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => tR
    });
    let yR = null;

    function tR() {
      yR = performance.now()
    }

    function uR() {
      return yR
    }
  },
  35067: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      h: () => iR
    });
    var yR = GR(25);
    const tR = 24,
      uR = "farNametags",
      ZR = 1e5;

    function qR() {
      var RR;
      return null === (RR = yR.d.get("showDistantNametags")) || void 0 === RR || RR
    }

    function iR() {
      var RR;
      return null !== (RR = function() {
        const RR = new URLSearchParams(window.location.search).get(uR),
          JR = null === RR || "" === RR ? NaN : Number(RR);
        return Number.isFinite(JR) && JR >= 0 ? Math.min(JR, ZR) : null
      }()) && void 0 !== RR ? RR : qR() ? 0 : tR
    }
  },
  35176: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      i: () => VR
    });
    const yR = .01,
      tR = .08,
      uR = .01,
      ZR = 5,
      qR = 100,
      iR = 40,
      fR = 800;

    function VR(RR) {
      const {
        canvas: JR
      } = RR;
      let GR = null;
      const VR = RR => {
          var yR;
          GR = {
            pointer: RR.pointerId,
            x: RR.clientX,
            y: RR.clientY
          }, null === (yR = JR.setPointerCapture) || void 0 === yR || yR.call(JR, RR.pointerId)
        },
        KR = JR => {
          var tR;
          const ZR = RR.orbit;
          if ((null === (tR = GR) || void 0 === tR ? void 0 : tR.pointer) !== JR.pointerId || null === ZR) return;
          const qR = JR.clientX - GR.x,
            iR = JR.clientY - GR.y;
          GR = {
            ...GR,
            x: JR.clientX,
            y: JR.clientY
          }, RR.setOrbit({
            alpha: ZR.alpha - qR * yR,
            beta: Math.min(Math.PI - uR, Math.max(uR, ZR.beta - iR * yR)),
            radius: ZR.radius
          })
        },
        wR = RR => {
          var JR;
          (null === (JR = GR) || void 0 === JR ? void 0 : JR.pointer) === RR.pointerId && (GR = null)
        },
        rR = JR => {
          const GR = RR.orbit;
          if (null === GR) return;
          JR.preventDefault();
          const yR = JR.deltaY * (JR.deltaMode === WheelEvent.DOM_DELTA_LINE ? iR : JR.deltaMode === WheelEvent.DOM_DELTA_PAGE ? fR : 1),
            uR = Math.min(qR, Math.max(ZR, GR.radius + yR * tR));
          RR.setOrbit({
            ...GR,
            radius: uR
          })
        };
      return JR.style.touchAction = "none", JR.addEventListener("pointerdown", VR), JR.addEventListener("pointermove", KR), JR.addEventListener("pointerup", wR), JR.addEventListener("pointercancel", wR), JR.addEventListener("wheel", rR, {
        passive: !1
      }), () => {
        JR.removeEventListener("pointerdown", VR), JR.removeEventListener("pointermove", KR), JR.removeEventListener("pointerup", wR), JR.removeEventListener("pointercancel", wR), JR.removeEventListener("wheel", rR)
      }
    }
  },
  35094: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      f: () => KR,
      i: () => VR
    });
    var yR = GR(279),
      tR = GR(103),
      uR = GR(132),
      ZR = GR(127),
      qR = GR(706);
    const iR = new Set(["mali_bifrost"]);

    function fR() {
      if (qR.e) return;
      const RR = (0, tR.pageOperatingSystem)();
      if ("android" !== RR && "windows" !== RR || (0, qR.c)("webgl_default")) return;
      if ("windows" === RR) return RR => "qualcomm" === (0, tR.normaliseGpuVendor)((0, ZR.b)(RR).vendor);
      const JR = (0, uR.o)(),
        GR = null === JR ? (0, yR.u)() : (0, yR.k)(JR.vendor, JR.renderer);
      return null !== GR && iR.has(GR) ? RR => (0, yR.q)((0, ZR.b)(RR).vendor, GR) : void 0
    }

    function VR(RR, JR) {
      return RR ? () => !0 : JR()
    }
    async function KR(RR) {
      try {
        const JR = VR(RR, fR),
          GR = navigator.gpu;
        if (void 0 === JR || void 0 === GR) return !1;
        const yR = await (0, ZR.i)(GR, {
          seed: !1,
          compatibility: JR
        });
        return "string" !== typeof yR && yR.compatibility && !(0, ZR.e)(yR.adapter)
      } catch (JR) {
        return console.error("WebGPU compatibility-mode adapter request failed.", JR), !1
      }
    }
  },
  35174: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => ZR
    });
    const yR = [{
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

    function tR(RR) {
      let JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof RR) {
        if (!Number.isFinite(RR)) return "0";
        if (Math.abs(RR) < 100) {
          const JR = RR < 0 ? "-" : "",
            GR = Math.abs(RR);
          return GR >= 10 ? `${JR}${GR.toFixed(1).replace(/\.0$/,"")}` : `${JR}${GR.toFixed(2).replace(/\.?0+$/,"")}`
        }
        JR = BigInt(Math.floor(RR))
      } else JR = RR;
      const tR = JR < 0n ? -JR : JR,
        uR = JR < 0n ? "-" : "",
        ZR = tR.toString();
      if (ZR.length <= GR) return `${uR}${ZR}`;
      const qR = 3 * Math.floor((ZR.length - 1) / 3);
      if (qR < 3) return `${uR}${ZR}`;
      if (qR > 3 * yR.length) {
        const RR = ZR[0],
          JR = ZR.slice(1, 3).replace(/0+$/, "");
        return `${uR}${JR?`${RR}.${JR}`:RR}e${ZR.length-1}`
      }
      const {
        threshold: iR,
        suffix: fR
      } = yR[yR.length - qR / 3], VR = tR / iR, KR = Number(1000n * (tR % iR) / iR), wR = Number(VR) + KR / 1e3;
      let rR;
      return rR = wR >= 100 ? Math.floor(wR).toString() : wR >= 10 ? wR.toFixed(1).replace(/\.0$/, "") : wR.toFixed(2).replace(/\.?0+$/, ""), `${uR}${rR}${fR}`
    }
    const uR = yR.map((RR => {
      let {
        threshold: JR,
        suffix: GR
      } = RR;
      return {
        threshold: Number(JR),
        suffix: GR
      }
    })).filter((RR => {
      let {
        threshold: JR
      } = RR;
      return Number.isFinite(JR)
    }));

    function ZR(RR) {
      const JR = Math.abs(RR),
        GR = RR < 0 ? "-" : "";
      for (const {
          threshold: yR,
          suffix: tR
        }
        of uR)
        if (JR >= yR) {
          const RR = JR / yR;
          if (RR >= 1e3) return `${GR}${JR.toExponential(2).replace("e+","e")}`;
          let uR;
          return uR = RR >= 100 ? Math.floor(RR).toString() : RR >= 10 ? RR.toFixed(1).replace(/\.0$/, "") : RR.toFixed(2).replace(/\.?0+$/, ""), `${GR}${uR}${tR}`
        } return `${GR}${JR}`
    }
  },
  35150: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      i: () => wR,
      k: () => KR,
      o: () => ZR,
      r: () => fR,
      v: () => iR
    });
    var yR = GR(377);
    const tR = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      uR = {
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

    function ZR(RR) {
      var JR;
      return null !== (JR = uR[RR]) && void 0 !== JR ? JR : {
        translationKey: ""
      }
    }
    const qR = {
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

    function iR(RR) {
      return tR.includes(RR)
    }

    function fR(RR) {
      var JR;
      return !0 === (null === RR || void 0 === RR || null === (JR = RR.customAttributes) || void 0 === JR ? void 0 : JR.cannotEnchant)
    }

    function VR(RR, JR) {
      const {
        max: GR
      } = qR[RR].at(-1);
      return JR <= GR
    }

    function KR(RR) {
      const JR = Math.sin(RR / 80),
        GR = RR => {
          if (RR <= 0) return 0;
          if (RR > 1) return 1;
          let JR = 0;
          const GR = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let yR = 0; yR < GR.length; yR++) {
            JR += (yR % 2 === 0 ? 1 : -1) * GR[yR] * Math.pow(RR, 2 + yR) / (2 + yR)
          }
          return 72 * JR
        },
        yR = .3 - .78 * JR,
        tR = .5 - .78 * JR,
        uR = .6 - .7 * JR,
        ZR = .8 - .6 * JR;
      let qR = GR(yR),
        iR = GR(tR) - qR,
        fR = GR(uR) - iR - qR,
        VR = GR(ZR) - fR - iR - qR;
      yR < .041 && (iR /= 1 - qR, fR /= 1 - qR, VR /= 1 - qR, qR = 0), tR < .041 && (qR /= 1 - iR, fR /= 1 - iR, VR /= 1 - iR, iR = 0), uR < .041 && (qR /= 1 - fR, iR /= 1 - fR, VR /= 1 - fR, fR = 0), ZR < .041 && (qR /= 1 - VR, iR /= 1 - VR, fR /= 1 - VR, VR = 0);
      return {
        commonProb: qR,
        uncommonProb: iR,
        rareProb: fR,
        epicProb: VR,
        legendaryProb: 1 - (VR + fR + iR + qR)
      }
    }

    function wR(RR, JR) {
      const {
        min: GR,
        max: tR
      } = qR[RR][JR], uR = yR.e.sampleUniformIntDistribution(GR, tR, "includeMax");
      return {
        ...KR(uR),
        level: uR
      }
    }
  },
  35113: () => {},
  35211: () => {},
  14020: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  15168: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16520: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  17051: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);