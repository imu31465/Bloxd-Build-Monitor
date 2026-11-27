export const id = 92;
export const ids = [92, 220];
export const modules = {
  35111: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      EverythingMenu: () => Kt
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1172),
      LW = OW(1391),
      cW = OW(2180),
      wW = OW(1532),
      tW = OW(1095),
      ZW = OW(1283);

    function xW(WW) {
      let {
        items: iW,
        link: OW,
        onClick: mW,
        selectedItemId: EW,
        className: xW,
        padStartsOnTab: lW = !0
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), bW = (0, tW.h)(), jW = [];
      for (const NW of iW) {
        var UW;
        const WW = jW[jW.length - 1];
        var kW;
        if (WW && WW.title === (null !== (UW = NW.section) && void 0 !== UW ? UW : null)) WW.items.push(NW);
        else jW.push({
          title: null !== (kW = NW.section) && void 0 !== kW ? kW : null,
          items: [NW]
        })
      }
      return (0, ZW.jsxs)("div", {
        className: NW()("MenuSideBarBody", xW),
        "data-pad-tabs": "2",
        children: [jW.map(((WW, iW) => {
          var OW;
          return (0, ZW.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [WW.title && (0, ZW.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: AW(WW.title)
            }), WW.items.map((WW => {
              var iW;
              const OW = !!WW.iconElement || !!WW.faIcon;
              return (0, ZW.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": EW === WW.id ? "true" : void 0,
                "data-pad-default-focus": lW && EW === WW.id || void 0,
                className: NW()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: EW === WW.id
                }),
                onClick: () => {
                  mW(WW.id)
                },
                children: [OW && (0, ZW.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (iW = WW.iconElement) && void 0 !== iW ? iW : (0, ZW.jsx)(LW.c, {
                    name: WW.faIcon
                  })
                }), (!bW || !OW) && (0, ZW.jsx)("div", {
                  children: AW(WW.title)
                }), WW.redDot && (0, ZW.jsx)(cW.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, WW.id)
            }))]
          }, null !== (OW = WW.title) && void 0 !== OW ? OW : iW)
        })), OW && (0, ZW.jsxs)("div", {
          ...(0, wW.fb)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: OW.onClick,
          children: [(0, ZW.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, ZW.jsx)(LW.c, {
              name: OW.faIcon
            })
          }), (0, ZW.jsx)("div", {
            children: AW(OW.title)
          }), (0, ZW.jsx)(LW.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var lW = OW(2959),
      AW = OW(1107),
      bW = OW(3332),
      jW = OW(4275),
      UW = OW(100),
      kW = OW(2037),
      sW = OW(3118),
      MW = OW(3122),
      KW = OW(1782),
      SW = OW(1383),
      YW = OW(5910),
      yW = OW(25),
      TW = OW(35114);

    function JW(WW) {
      let {
        setApplySettingsCallback: iW
      } = WW;
      const {
        clientEscMenuOptions: OW
      } = (0, yW.p)(["clientEscMenuOptions"]), [EW, NW] = (0, mW.useState)(!1), [PW, LW] = (0, mW.useState)(!1), [cW, tW] = (0, mW.useState)(6400), [xW, lW] = (0, mW.useState)(3600), [AW, bW] = (0, mW.useState)(!1), [jW, UW] = (0, mW.useState)(!1);

      function kW(WW) {
        const iW = "screenshot" === WW ? LW : NW;
        iW(!0);
        const OW = AW ? "normals" : jW ? "depth" : null;
        TW.devTools.downloadScene(WW, {
          width: cW,
          height: xW,
          colouring: OW
        }).catch((WW => {
          console.error("Couldn't download the scene", WW)
        })).finally((() => {
          iW(!1)
        }))
      }
      return (0, ZW.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, ZW.jsx)(YW.e, {
          label: "Disable Ambient Occlusion",
          checked: OW.disableAmbientOcclusion,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              disableAmbientOcclusion: WW
            }), iW((() => YW.n))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), TW.devTools.supports("ambientLight") && (0, ZW.jsx)(YW.k, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: OW.ambientLightIntensity,
          onChange: WW => {
            TW.devTools.setAmbientLightIntensity(WW).then((() => {
              yW.d.setClientEscMenuOptions({
                ambientLightIntensity: WW
              })
            })).catch((WW => {
              console.error("Couldn't set the ambient light", WW)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), TW.devTools.supports("weaponRaycasts") && (0, ZW.jsx)(YW.e, {
          label: "Show Weapon Raycasts",
          checked: OW.showWeaponRaycasts,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              showWeaponRaycasts: WW
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), TW.devTools.supports("sceneDownload") && (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZW.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, ZW.jsx)(YW.e, {
              label: "Apply normal-based coloring",
              checked: AW,
              onClick: WW => {
                bW(WW), WW && UW(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, ZW.jsx)(YW.e, {
              label: "Apply depth-based coloring",
              checked: jW,
              onClick: WW => {
                UW(WW), WW && bW(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, ZW.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, ZW.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, ZW.jsx)(KW.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (WW, iW) => {
                  const OW = parseInt(WW) || 6400;
                  tW(OW)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: cW.toString()
              }), (0, ZW.jsx)("span", {
                children: "X"
              }), (0, ZW.jsx)(KW.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (WW, iW) => {
                  const OW = parseInt(WW) || 3600;
                  lW(OW)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: xW.toString()
              })]
            }), (0, ZW.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, ZW.jsxs)(wW.f, {
                onClick: () => {
                  kW("screenshot")
                },
                disabled: PW,
                children: [PW && (0, ZW.jsx)(SW.d, {}), "Download Screenshot"]
              }), (0, ZW.jsxs)(wW.f, {
                onClick: () => {
                  kW("glb")
                },
                disabled: EW,
                children: [EW && (0, ZW.jsx)(SW.d, {}), "Download GLB"]
              })]
            })]
          }), (0, ZW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var hW = OW(136),
      HW = OW(1111),
      nW = OW(35118),
      uW = OW(4060),
      oW = OW(1605),
      dW = OW(1259),
      eW = OW(1223),
      vW = OW(2146),
      gW = OW(1584),
      DW = OW(344),
      VW = OW(614),
      pW = OW(3210),
      fW = OW(3214);
    const CW = "store:retiredRankEnds";

    function XW(WW) {
      let {
        until: iW,
        className: OW
      } = WW;
      const {
        t: mW,
        selectedLanguage: EW
      } = (0, PW.B)(), NW = new Date(iW).toLocaleDateString((0, PW.k)(EW.code, CW), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, ZW.jsx)("span", {
        className: OW,
        children: mW(CW, {
          date: NW
        })
      })
    }
    var BW = OW(3132),
      qW = OW(4096),
      RW = OW(4092),
      GW = OW(192),
      IW = OW(1736),
      aW = OW(1244),
      rW = OW(4115);

    function zW(WW, iW, OW) {
      const mW = VW.p[(0, VW.m)(VW.p, iW)],
        EW = void 0 === mW ? void 0 : (0, GW.c)(WW.entitlements, mW.entitlementId);
      return void 0 === EW || null === EW.expiresAt || (0, RW.f)(EW) <= OW ? null : EW.willRenew && null === EW.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(EW.expiresAt, OW)
      } : {
        renews: !1,
        at: (0, RW.f)(EW)
      }
    }
    var FW = OW(4076),
      QW = OW(4085);
    const Wi = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function ii(WW) {
      return WW instanceof qW.c && "storeUnavailable" === WW.code ? (console.warn("Billing: the store didn't take a subscription change:", WW), "store:subscriptionStoreUnavailable") : WW instanceof qW.c && "subscriptionActionUnavailable" === WW.code ? (console.warn("Billing: a subscription action billing no longer offers:", WW), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", WW), "store:subscriptionChangeFailed")
    }
    async function Oi() {
      try {
        var WW;
        const {
          offering: iW
        } = await (0, QW.getBillingClient)().getOfferings((0, pW.l)(VW.g.id).placementId);
        return null !== (WW = null === iW || void 0 === iW ? void 0 : iW.packages.find(FW.isPricedPackage)) && void 0 !== WW ? WW : null
      } catch (iW) {
        return console.warn("Billing: loading the rank plan's price failed:", iW), null
      }
    }

    function mi(WW) {
      const {
        userContext: iW
      } = (0, AW.e)(), {
        superRankInfo: OW
      } = iW, EW = (0, BW.usePurchasesAllowed)(), NW = (0, DW.sc)(OW), PW = WW && EW && (NW || iW.ranksMayChange), [LW, cW] = (0, mW.useState)(null), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(!1), [lW, bW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        if (!PW) return;
        let WW = !1;
        const OW = () => {
          Promise.all([(0, QW.getBillingClient)().getSubscriptions(), Oi()]).then((OW => {
            let [mW, EW] = OW;
            WW || (cW({
              for: iW,
              answer: mW,
              pkg: EW
            }), tW(!1))
          }), (iW => {
            console.error("Billing: loading the player's subscriptions failed:", iW), WW || tW(!0)
          }))
        };
        OW();
        const mW = IW.e.addRefetchListener("billing", OW);
        return () => {
          WW = !0, mW()
        }
      }), [PW, iW]);
      const jW = PW && NW && null !== LW && LW.for === iW ? function(WW, iW, OW, mW) {
        var EW;
        const {
          customerInfo: NW,
          actions: PW
        } = WW, LW = VW.p[(0, VW.m)(VW.p, iW)], cW = void 0 === LW ? void 0 : (0, GW.c)(NW.entitlements, LW.entitlementId), wW = zW(NW, iW, mW);
        if (void 0 === cW || null === wW) return null;
        const tW = Object.entries(NW.subscriptions).find((WW => {
          let [, iW] = WW;
          return iW.productId === cW.productId && iW.store === cW.store && !(0, RW.l)(iW.status)
        }));
        if (void 0 === tW) return null;
        const [ZW, xW] = tW, lW = (null === OW || void 0 === OW ? void 0 : OW.productId) === xW.productId && xW.store === (0, BW.getBillingStore)();
        return {
          key: ZW,
          tierId: iW,
          info: xW,
          actions: null !== (EW = (0, GW.c)(PW, ZW)) && void 0 !== EW ? EW : Wi,
          date: wW,
          pkg: lW ? OW : null
        }
      }(LW.answer, OW.tier, LW.pkg, Date.now()) : null;
      return {
        subscription: jW,
        loadFailed: PW && NW && wW,
        busy: ZW,
        errorKey: lW,
        change: async function(WW) {
          if (null === jW || ZW) return;
          xW(!0), bW(null);
          const OW = (0, QW.getBillingClient)();
          try {
            const mW = await ("cancel" === WW ? OW.cancelSubscription(jW.key) : OW.resumeSubscription(jW.key));
            cW({
              for: iW,
              answer: mW,
              pkg: jW.pkg
            }), (0, rW.f)()
          } catch (mW) {
            bW(ii(mW))
          } finally {
            xW(!1)
          }
        },
        openManagePage: async function() {
          if (null === jW || ZW) return;
          const WW = window.open("", "_blank");
          xW(!0), bW(null);
          try {
            const iW = await (0, QW.getBillingClient)().subscriptionManagementUrl(jW.key, aW.e.get().getCurrentLanguageCode());
            null === WW ? window.open(iW, "_blank", "noopener") : (WW.opener = null, WW.location.href = iW)
          } catch (iW) {
            null === WW || void 0 === WW || WW.close(), bW(ii(iW))
          } finally {
            xW(!1)
          }
        }
      }
    }
    var Ei = OW(1422),
      Ni = OW(4147);

    function Pi(WW, iW) {
      return new Date(WW).toLocaleDateString(iW, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function Li(WW) {
      let {
        showing: iW,
        className: OW
      } = WW;
      const {
        t: mW,
        selectedLanguage: EW
      } = (0, PW.B)(), {
        subscription: cW,
        loadFailed: tW,
        busy: xW,
        errorKey: lW,
        change: AW,
        openManagePage: bW
      } = mi(iW);
      if (tW) return (0, ZW.jsx)("div", {
        className: NW()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", OW),
        children: mW("store:subscriptionLoadFailed")
      });
      if (null === cW) return null;
      const {
        date: jW,
        info: UW,
        actions: kW,
        pkg: sW
      } = cW, MW = jW.renews ? "store:renewsOn" : "store:endsOn", KW = Pi(jW.at, (0, PW.k)(EW.code, MW)), SW = mW((0, pW.l)(cW.tierId).nameKey), YW = null !== UW.billingIssueDetectedAt;
      return (0, ZW.jsxs)("div", {
        className: NW()("RankSubscriptionManage", OW),
        children: [(0, ZW.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [mW(MW, {
            date: KW
          }), jW.renews && null !== sW && (0, BW.subscriptionsSold)() && (0, ZW.jsxs)(ZW.Fragment, {
            children: [" \xb7 ", mW("store:pricePerMonth", {
              price: (0, Ni.e)(sW)
            })]
          })]
        }), YW && (0, ZW.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, ZW.jsx)(LW.c, {
            name: "triangle-exclamation"
          }), " ", mW("store:paymentFailing", {
            rank: SW
          })]
        }), (0, ZW.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [kW.manage && (0, ZW.jsx)(wW.h, {
            disabled: xW,
            onClick: () => {
              bW()
            },
            children: mW(YW ? "store:updatePayment" : "payments:manageSubscription")
          }), kW.resume && (0, ZW.jsx)(wW.f, {
            loading: xW,
            onClick: () => {
              AW("resume")
            },
            children: mW("store:resumeSubscription")
          }), kW.cancel && (0, ZW.jsx)(wW.O, {
            loading: xW,
            onClick: () => {
              (async function(WW, iW, OW) {
                const mW = Date.now() >= WW.info.currentPeriodEnd;
                return !0 === await Ei.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: mW ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: iW
                    },
                    subtitle: {
                      rank: iW,
                      date: OW
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(cW, SW, Pi(UW.currentPeriodEnd, (0, PW.k)(EW.code, "store:cancelKeepsUntil"))).then((WW => {
                WW && AW("cancel")
              }))
            },
            children: mW("store:cancelSubscription")
          })]
        }), null !== lW && (0, ZW.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: mW(lW)
        })]
      })
    }
    var ci = OW(3125),
      wi = OW(3702),
      ti = OW(1755);
    async function Zi() {
      try {
        return function(WW) {
          const iW = new Map;
          for (const {
              store: OW,
              status: mW,
              autoRenewStatus: EW,
              managementUrl: NW
            }
            of Object.values(WW.subscriptions)) !(0, RW.j)(OW) || (0, RW.l)(mW) || "willNotRenew" === EW || iW.has(OW) || iW.set(OW, null !== NW && void 0 !== NW ? NW : RW.o[OW]);
          return Array.from(iW, (WW => {
            let [iW, OW] = WW;
            return {
              store: iW,
              managementUrl: OW
            }
          }))
        }(await (0, ti.o)((0, QW.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (WW) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", WW), null
      }
    }

    function xi(WW) {
      const {
        t: iW,
        selectedLanguage: OW
      } = (0, PW.B)(), {
        userContext: EW
      } = (0, AW.e)(), {
        superRankInfo: NW
      } = EW, LW = (0, BW.usePurchasesAllowed)(), cW = WW && ((0, DW.sc)(NW) || EW.ranksMayChange) && LW, {
        accountId: wW,
        data: tW
      } = (0, wi.g)(rW.e, cW);
      if ((0, mW.useEffect)((() => {
          if (cW) return rW.e.watchAccount(), IW.e.addRefetchListener("billing", (WW => {
            "reconnected" === WW ? rW.e.refreshAfterReconnect() : rW.e.refresh()
          }))
        }), [cW]), !cW || !(0, DW.sc)(NW) || null === tW || wW !== EW.whamm) return null;
      const ZW = zW(tW, NW.tier, Date.now());
      if (null === ZW) return null;
      const xW = ZW.renews ? "store:renewsOn" : "store:endsOn",
        lW = (0, PW.e)(OW.code, xW, ZW.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        bW = (0, BW.getBillingStore)(),
        jW = null !== bW && (0, RW.j)(bW) ? function(WW, iW) {
          var OW;
          const mW = Object.values(WW.subscriptions).find((WW => WW.store === iW && !(0, RW.l)(WW.status)));
          return void 0 === mW ? null : null !== (OW = mW.managementUrl) && void 0 !== OW ? OW : RW.o[iW]
        }(tW, bW) : null;
      return {
        text: iW(xW, {
          date: lW
        }),
        manageUrl: jW
      }
    }
    var li = OW(1434),
      Ai = OW(1201),
      bi = OW(5643),
      ji = OW(1556),
      Ui = OW(4906),
      ki = OW(3285);

    function si(WW) {
      let {
        showing: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        data: mW,
        failed: EW
      } = (0, wi.g)(Ui.f, iW);
      return 0 === (null === mW || void 0 === mW ? void 0 : mW.length) || null === mW && !EW ? null : (0, ZW.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, ZW.jsx)("div", {
          className: "AccountSettingsLabel",
          children: OW("paymentHistory:title")
        }), null === mW && EW && (0, ZW.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: OW("paymentHistory:loadFailed")
        }), null !== mW && (0, ZW.jsx)("ul", {
          className: "PaymentHistoryList",
          children: mW.map((WW => (0, ZW.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, ZW.jsx)(ki.b, {
              entry: WW
            }), (0, ZW.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, ZW.jsx)("div", {
                children: (0, ki.i)(OW, WW)
              }), (0, ZW.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(WW.at).toLocaleDateString(), "number" === typeof WW.orderId && ` \xb7 ${OW("paymentHistory:order",{orderId:WW.orderId})}`]
              })]
            })]
          }, (0, Ui.b)(WW))))
        })]
      })
    }
    var Mi = OW(3135),
      Ki = OW(2257);

    function Si() {
      (0, Ki.e)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Yi(WW) {
      let {
        status: iW
      } = WW;
      switch (iW) {
        case "restored":
          return (0, rW.f)(), {
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

    function yi() {
      const WW = (0, QW.usePageBillingClient)(),
        {
          userContext: iW
        } = (0, AW.e)(),
        [OW, EW] = (0, mW.useState)(!1),
        [NW, PW] = (0, mW.useState)(null);
      return {
        restoring: OW,
        notice: NW,
        restore: () => {
          iW.isLoggedIn() ? (EW(!0), PW(null), WW.restorePurchases().then(Yi, (WW => WW instanceof qW.c && "loginRequired" === WW.code ? (Si(), null) : function(WW) {
            return WW instanceof qW.c && "storeBusy" === WW.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", WW), (0, rW.f)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(WW))).then(PW).finally((() => {
            EW(!1)
          }))) : Si()
        }
      }
    }

    function Ti(WW) {
      let {
        restoring: iW,
        notice: OW,
        restore: EW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)(), cW = (0, BW.usePurchasesAllowed)(), tW = (0, BW.getBillingStore)(), xW = (0, mW.useRef)(null);
      return (0, mW.useEffect)((() => {
        var WW;
        null === (WW = xW.current) || void 0 === WW || WW.scrollIntoView({
          block: "nearest"
        })
      }), [OW]), cW && (0, Mi.e)(tW) ? (0, ZW.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, ZW.jsx)(wW.h, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: iW,
          onClick: EW,
          children: LW("payments:restorePurchases")
        }), null !== OW && (0, ZW.jsx)("div", {
          ref: xW,
          className: NW()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: OW.failed
          }),
          children: LW(OW.key)
        })]
      }) : null
    }
    var Ji = OW(2008),
      Hi = OW(1239),
      ni = OW(1185),
      ui = OW(1339),
      oi = OW(327),
      di = OW(3474);
    const ei = {
      appStore: {
        name: "App Store",
        ...oi.bc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...oi.bc.googlePlay
      },
      discord: {
        name: "Discord",
        ...oi.bc.discord
      }
    };

    function vi(WW) {
      let {
        warning: iW,
        subscriptions: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return null !== OW && 0 === OW.length ? (0, ZW.jsx)(ZW.Fragment, {
        children: mW(iW)
      }) : (0, ZW.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [mW(iW), null === OW && (0, ZW.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: mW("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== OW && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: mW("auth:deleteAccountStoreSubscriptions")
          }), (0, ZW.jsx)(di.e, {
            className: "DeleteAccountSubtitleLinks",
            links: OW.map((WW => {
              let {
                store: iW,
                managementUrl: OW
              } = WW;
              return {
                ...ei[iW],
                url: OW
              }
            }))
          })]
        })]
      })
    }
    var gi = OW(5378);

    function Di(WW) {
      let {
        showing: iW
      } = WW;
      const {
        userContext: OW,
        isUserContextUpdating: EW
      } = (0, AW.e)(), {
        t: NW
      } = (0, PW.B)(), [LW, cW] = (0, mW.useState)(!1), [tW, xW] = (0, mW.useState)(null), lW = (0, mW.useRef)(iW);
      (0, mW.useEffect)((() => (lW.current = iW, () => {
        lW.current = !1
      })), [iW]);
      const bW = EW || LW;
      return (0, ZW.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, ZW.jsxs)(wW.O, {
          onClick: async function() {
            if (!LW) {
              cW(!0);
              try {
                const WW = await async function() {
                  const [WW, iW] = await Promise.all([(0, Ji.e)(OW.availableUserContextTypes) ? Zi() : [], fi(OW)]);
                  if (!lW.current) return Hi.b.ok();
                  const mW = (0, dW.b)(OW.getPlayerName(), !UW.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Ei.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: mW
                        }
                      },
                      subtitle: (0, ZW.jsx)(vi, {
                        warning: Vi(OW.isLoggedIn(), iW),
                        subscriptions: WW
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: iW ? NW("auth:deleteAccountTypedConfirm", {
                        playerName: mW
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Hi.b.ok();
                  const EW = await (0, HW.postJsonWithMetricsCookiesAndJsonResponse)(`${ni.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: yW.d.get("gameState")
                  }, {
                    retries: 3
                  }, OW.getMetricsCookies());
                  if (EW.error) return Hi.b.error(EW.error);
                  (0, hW.isDiscordClient)() && (await ui.h.discordActivity()).exit("User deleted their account");
                  return gi.e.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, HW.forgetStoredGuestAccount)(OW.whamm), (0, HW.forceGlobalSignOut)(!0), Hi.b.ok()
                }(), iW = WW.isError() ? WW.asError().message : null;
                xW(iW)
              } catch (WW) {
                console.error("Failed to delete account:", WW), xW(NW("auth:genericDeleteAccountError"))
              }
              cW(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: bW,
          children: [bW && (0, ZW.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, ZW.jsx)(SW.d, {})
          }), NW("auth:deleteAccount")]
        }), tW && (0, ZW.jsx)("div", {
          className: "DeleteAccountError",
          children: tW
        })]
      })
    }

    function Vi(WW, iW) {
      return (0, hW.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : WW ? "auth:deleteAccountLossWarning" : iW ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function fi(WW) {
      try {
        const {
          accountCreatedAt: iW
        } = await (0, ti.o)(gW.e.getPlayerProfile(WW, {
          lowerCaseName: WW.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== iW && Date.now() - iW >= 7 * DW.k
      } catch (iW) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", iW), !0
      }
    }
    var Ci = OW(4827),
      Xi = OW(4841),
      Bi = OW(4839);

    function qi(WW) {
      let {
        showing: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        data: mW,
        failed: EW
      } = (0, wi.g)(Ci.d, iW), NW = null === mW ? null : (0, Ci.g)(mW);
      return (0, ZW.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, ZW.jsx)("div", {
          className: "AccountSettingsLabel",
          children: OW("settingsMenu:blockedAndIgnoredPlayers")
        }), null === NW && !EW && (0, ZW.jsx)(SW.d, {}), null === NW && EW && (0, ZW.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [OW("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, ZW.jsx)(wW.f, {
            className: "SmallTextLight",
            onClick: () => {
              Ci.d.refresh()
            },
            children: OW("general:tryAgain")
          })]
        }), 0 === (null === NW || void 0 === NW ? void 0 : NW.length) && (0, ZW.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: OW("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== NW && NW.length > 0 && (0, ZW.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: NW.map((WW => {
            let {
              name: iW,
              exclusion: mW
            } = WW;
            const EW = Bi.d[mW];
            return (0, ZW.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, ZW.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: iW
              }), (0, ZW.jsx)(wW.h, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Xi.d)(EW, iW, {
                    chatMessage: null
                  })
                },
                children: OW(Bi.g[EW].text)
              })]
            }, iW)
          }))
        })]
      })
    }
    const Ri = (0, mW.memo)((function(WW) {
      var iW, OW;
      let {
        showing: EW,
        inGame: cW
      } = WW;
      const {
        t: tW,
        selectedLanguage: xW
      } = (0, PW.B)(), {
        hideSocialLocationFrom: bW
      } = (0, yW.p)(["hideSocialLocationFrom"]), jW = (0, BW.usePurchasesAllowed)(), kW = yi(), sW = (0, lW.b)(), {
        userContext: MW,
        isUserContextUpdating: TW
      } = (0, AW.e)(), [JW, CW] = (0, mW.useState)(null !== (iW = MW.getPlayerName()) && void 0 !== iW ? iW : ""), [qW, RW] = (0, mW.useState)(null), {
        purchasing: GW,
        outcome: IW,
        purchase: aW
      } = (0, uW.e)("/super-rank-welcome"), rW = (0, DW.ec)((0, PW.k)(xW.code, "general:timeLeft"), MW.superRankInfo), zW = null === (OW = xi(EW)) || void 0 === OW ? void 0 : OW.text, FW = Date.now(), QW = (0, fW.j)(FW), Wi = (0, pW.p)(FW), ii = (0, fW.h)(FW), Oi = (0, pW.l)(QW.id), mi = ii && (0, ZW.jsxs)(wW.n, {
        className: "AccountSettingsSuperRankProlong",
        onClick: () => {
          (0, ci.o)({
            mode: "gift",
            source: "accountSettings",
            openItem: "superRank"
          })
        },
        children: [(0, ZW.jsx)(LW.c, {
          name: "bolt"
        }), tW(Oi.giftKey)]
      }), Ei = (0, pW.h)(MW.getPlayerRanks(), FW), Ni = (0, pW.m)(MW.superRankInfo, FW), Pi = QW.id !== VW.s.id, wi = Pi && !Ei && (0, DW.sc)(MW.superRankInfo) ? MW.superRankInfo : null, ti = rW ? tW("general:timeLeft", {
        time: rW
      }) : !(Pi && jW) && zW, [Zi, Ui] = (0, mW.useState)(!1), [ki, Mi] = (0, mW.useState)(!1), Ki = (0, mW.useRef)(null), Si = (0, mW.useRef)(null), Yi = (0, vW.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Ji = null === Yi, Hi = null !== Yi && void 0 !== Yi ? Yi : [], ni = MW !== HW.NULL_USER_CONTEXT && !MW.isLoggedIn(), ui = ni && 0 !== (null === Yi || void 0 === Yi ? void 0 : Yi.length), [oi, di] = (0, mW.useState)([]), [ei, vi] = (0, mW.useState)(!1), gi = MW.playerHasRank("youtuber"), Vi = (0, mW.useCallback)((() => gW.e.getPlayerProfile(MW, {
        lowerCaseName: MW.getPlayerName().toLowerCase()
      }).then((WW => {
        di(WW.socialLinks)
      })).catch((WW => {
        console.error("Failed to refresh social links", WW)
      }))), [MW]);

      function fi(WW) {
        WW !== JW && ((0, dW.l)(WW) ? (WW = (0, dW.p)(WW), RW(tW("homePage:nameCharacters"))) : RW(null), Ki.current && (Ki.current.value = WW), CW(WW))
      }
      return (0, mW.useEffect)((() => (!0 === EW ? (clearInterval(Si.current), Si.current = setInterval(sW, 1e3)) : clearInterval(Si.current), () => {
        clearInterval(Si.current)
      })), [EW, sW]), (0, mW.useEffect)((() => {
        var WW;
        CW(null !== (WW = MW.getPlayerName()) && void 0 !== WW ? WW : "")
      }), [MW]), (0, mW.useEffect)((() => {
        if (!EW || !gi || TW) return;
        let WW = !1;
        return vi(!0), di([]), gW.e.getPlayerProfile(MW, {
          lowerCaseName: MW.getPlayerName().toLowerCase()
        }).then((iW => {
          WW || di(iW.socialLinks)
        })).catch((WW => {
          console.error("Failed to load social links", WW)
        })).finally((() => {
          WW || vi(!1)
        })), () => {
          WW = !0
        }
      }), [EW, gi, TW, MW]), (0, ZW.jsxs)("div", {
        className: NW()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: cW
        }),
        children: [cW && (0, ZW.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: tW("settingsMenu:accountSettingsInGameWarning")
        }), (0, ZW.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, ZW.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [tW("homePage:discordNamePopupTitle"), (0, ZW.jsxs)(oW.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, eW.i)({
                name: MW.getPlayerName()
              }),
              onClick: () => {
                yW.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, ZW.jsx)(LW.c, {
                name: "arrow-up-right-from-square"
              }), " ", tW("profileCard:viewProfile")]
            })]
          }), (0, ZW.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, ZW.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [UW.featureFlags.canChangeName && (0, ZW.jsx)(KW.b, {
                className: "EnterName",
                placeholderText: tW("homePage:enterName"),
                maxLength: dW.f,
                defaultValue: JW,
                onValueChange: WW => {
                  fi(WW)
                },
                forcedText: Zi || !UW.featureFlags.canChangeName ? JW : null,
                blurOnEnter: !0,
                domRef: Ki
              }), (0, ZW.jsx)(wW.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  fi((0, dW.d)())
                },
                children: (0, ZW.jsx)(LW.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !UW.featureFlags.canChangeName && (0, ZW.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, dW.b)(JW, !UW.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, ZW.jsx)(wW.f, {
              className: "ChooseNameButton",
              disabled: Zi || JW === MW.getPlayerName(),
              onClick: () => {
                JW.length < dW.j ? RW(tW("homePage:changeNameMinLengthError", {
                  length: dW.j
                })) : JW.length > dW.f ? RW(tW("homePage:changeNameMaxLengthError", {
                  length: dW.f
                })) : (Ui(!0), RW(null), (0, nW.l)(MW, JW).then((WW => {
                  Ui(!1), "taken" === WW.outcome ? RW(tW("homePage:nameTaken")) : "refused" === WW.outcome ? RW(WW.message) : "failed" === WW.outcome && RW(tW((0, nW.i)(WW.failure)))
                })))
              },
              children: tW("general:choose")
            })]
          }), qW && (0, ZW.jsx)("div", {
            className: "ChooseAccNameError",
            children: qW
          })]
        }), (0, ZW.jsx)(YW.e, {
          label: (() => {
            if ((0, Ai.l)(bW)) {
              const WW = (0, PW.k)(xW.code, "general:timeLeft"),
                iW = (0, DW.$)(WW, Date.now(), bW + Ai.j);
              return `${tW("settingsMenu:hideSocialLocation")} (${tW("general:timeLeft",{time:iW})})`
            }
            return tW("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const WW = !(0, Ai.l)(bW);
            (0, ji.reportAnalyticsClick)({
              id: "social.hide_location",
              value: WW ? "on" : "off"
            }), Mi(!0), gW.e.setHideSocialLocation(MW, WW).then((() => {
              yW.d.set({
                hideSocialLocationFrom: WW ? Date.now() : null
              })
            })).finally((() => {
              Mi(!1)
            }))
          },
          checked: (0, Ai.l)(bW),
          disabled: ki
        }), gi && (0, ZW.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, ZW.jsx)("div", {
            className: "AccountSettingsLabel",
            children: tW("settingsMenu:socialLinks")
          }), ei && (0, ZW.jsx)(SW.d, {}), !ei && (0, ZW.jsx)(bi.d, {
            socialLinks: oi,
            editable: !0,
            userContext: MW,
            onLinksUpdated: Vi
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZW.jsx)("div", {
            className: "AccountSettingsLabel",
            children: tW(ui ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Ji && (0, ZW.jsx)(SW.d, {}), !Ji && 0 === Hi.length && (0, ZW.jsx)("div", {
            className: "NoLoginOptions",
            children: tW("auth:noLoginOptions")
          }), !Ji && Hi.length > 0 && "crazygames" !== hW.siteUsed && (0, ZW.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Hi
          }), !Ji && Hi.length > 0 && "crazygames" === hW.siteUsed && (0, ZW.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Hi[0], Hi.length > 1 && (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, ZW.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: tW("auth:legacyLoginOptions")
                }), (0, ZW.jsx)(li.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: tW("auth:legacyLoginOptionsInfo")
                })]
              }), (0, ZW.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Hi.slice(1)
              })]
            })]
          }), UW.featureFlags.useLogin && (null !== MW.loggedInInfo || MW.isLoggedIn()) && (0, ZW.jsxs)(ZW.Fragment, {
            children: [(0, ZW.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, ZW.jsxs)(wW.O, {
              onClick: () => {
                (0, HW.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, ZW.jsx)(LW.c, {
                name: "right-from-bracket"
              }), tW("auth:signOut")]
            })]
          })]
        }), null !== wi && (0, ZW.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ZW.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, ZW.jsx)(pW.f, {
              tierId: wi.tier
            })
          }), (0, ZW.jsx)(Li, {
            showing: EW
          })]
        }), !Ei && jW && (0, ZW.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ZW.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, ZW.jsx)(pW.f, {
              tierId: QW.id
            })
          }), null !== Ni && (0, ZW.jsx)(XW, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: Ni
          }), (0, ZW.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, ZW.jsxs)(wW.n, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, ci.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ZW.jsx)(LW.c, {
                name: "bolt"
              }), tW(null !== Ni ? "store:upgradeToHyperRank" : Oi.getKey)]
            }), mi]
          }), (0, ZW.jsx)(Ti, {
            ...kW
          })]
        }), Ei && (0, ZW.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ZW.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, ZW.jsx)(pW.f, {
              tierId: QW.id
            }), ti && (0, ZW.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", ti, ")"]
            })]
          }), Pi && (0, ZW.jsx)(Li, {
            showing: EW
          }), jW && ii && (0, ZW.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, DW.sc)(MW.superRankInfo) && (0, ZW.jsxs)(wW.n, {
              className: "AccountSettingsSuperRankProlong",
              loading: GW,
              onClick: () => {
                aW(Wi.id, null)
              },
              children: [(0, ZW.jsx)(LW.c, {
                name: "bolt"
              }), tW("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Wi.product.days,
                price: Wi.price
              })]
            }), mi]
          }), IW && (0, ZW.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: tW(IW.translationKey)
          }), (0, ZW.jsx)(Ti, {
            ...kW
          })]
        }), (0, ZW.jsx)(si, {
          showing: EW
        }), UW.featureFlags.useSocialFeatures && (0, ZW.jsx)(qi, {
          showing: EW
        }), (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, ZW.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, ZW.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: tW(Gi(ni, ui))
            }), (0, hW.isDiscordClient)() && (0, ZW.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: tW("auth:discordActivityKickWarning")
            }), (0, ZW.jsx)(Di, {
              showing: EW
            })]
          }), (0, ZW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: tW(ni ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Gi(WW, iW) {
      return WW ? iW ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Ii = OW(35121),
      ai = OW(4292),
      ri = OW(1515),
      zi = OW(2075),
      Fi = OW(10122),
      Qi = OW(35124);

    function WO() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, zi.g)("localPlayerAlive") ? (0, ZW.jsx)(Fi.e, {
        icon: "camera-alt",
        title: WW("screenshotMode:title"),
        sub: WW("screenshotMode:entrySub"),
        onClick: Qi.e
      }) : null
    }
    var iO = OW(35146);
    const OO = (0, mW.memo)((function(WW) {
        let {
          inGame: iW
        } = WW;
        const {
          t: OW,
          selectedLanguage: mW
        } = (0, PW.B)(), {
          clientEscMenuOptions: EW,
          showDebugOverlay: NW,
          isTouchScreen: LW
        } = (0, yW.p)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), cW = (0, bW.e)("hideCoordinates");
        let wW = "settingsMenu:showCoordinates",
          tW = "settingsMenu:showChunkCoordinates";

        function xW(WW) {
          const iW = new Intl.DisplayNames([WW], {
            type: "language"
          }).of(WW);
          return iW.charAt(0).toUpperCase() + iW.slice(1)
        }
        return cW && (wW = "settingsMenu:showCoordinatesHidden", tW = "settingsMenu:showChunkCoordinatesHidden"), (0, ZW.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [iW && UW.featureFlags.canUseInviteLinks && (0, ZW.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ZW.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: OW("settingsMenu:inviteLink")
            }), (0, ZW.jsx)(Ii.i, {})]
          }), (0, ZW.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ZW.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: OW("settingsMenu:language")
            }), (0, ZW.jsx)(ai.e, {
              options: Object.entries(PW.h).map((WW => {
                let [iW, OW] = WW;
                return {
                  label: (0, ZW.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, ZW.jsx)("img", {
                      src: OW.flagImg,
                      alt: "flag"
                    }), (0, ZW.jsxs)("span", {
                      children: [xW(iW), " ", (0, ZW.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", iW, ")"]
                      })]
                    })]
                  }),
                  value: iW
                }
              })),
              value: mW.code,
              onChange: WW => {
                aW.e.get().setCurrentLanguage(WW.value)
              }
            })]
          }), iW && LW && (0, iO.d)() && (0, ZW.jsx)(WO, {}), !(0, UW.isMobileApp)() && (0, ri.j)() && UW.featureFlags.useForceRotateForceFullscreenOverlay && (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:disableFullscreenMode"),
            checked: EW.disableFullscreen,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                disableFullscreen: WW
              })
            }
          }), (0, ZW.jsx)(YW.e, {
            label: OW(wW),
            checked: EW.showCoordinates,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showCoordinates: WW
              })
            },
            disabled: cW
          }), (0, ZW.jsx)(YW.e, {
            label: OW(tW),
            checked: EW.showChunkCoordinates,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showChunkCoordinates: WW
              })
            },
            disabled: cW
          }), (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showFps"),
            checked: EW.showFPS,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showFPS: WW
              })
            }
          }), (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:disableBunnyHopping"),
            checked: EW.disableBunnyHopping,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                disableBunnyHopping: WW
              })
            }
          }), (0, ui.w)() && (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showChat"),
            checked: EW.showChat,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showChat: WW
              })
            }
          }), (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showDebugOverlay"),
            checked: NW,
            onClick: WW => {
              yW.d.set({
                showDebugOverlay: WW
              })
            }
          }), UW.featureFlags.useSocialFeatures && (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showFriendOnlineToasts"),
            checked: EW.showFriendOnlineToasts,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showFriendOnlineToasts: WW
              })
            }
          }), (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showNewItemIndicator"),
            checked: EW.showNewItemIndicator,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showNewItemIndicator: WW
              })
            }
          }), (0, ZW.jsx)(YW.e, {
            label: OW("settingsMenu:showTeamSymbols"),
            checked: EW.showTeamSymbols,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showTeamSymbols: WW
              })
            },
            circleInfoText: OW("settingsMenu:showTeamSymbolsInfo")
          })]
        })
      })),
      mO = (0, mW.memo)((function() {
        const {
          t: WW
        } = (0, PW.B)(), {
          soundVolume: iW,
          musicVolume: OW,
          clientEscMenuOptions: mW
        } = (0, yW.p)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
        return (0, ZW.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, ZW.jsx)(YW.k, {
            name: WW("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: OW,
            onChange: WW => {
              yW.d.set({
                musicVolume: Math.round(100 * WW) / 100
              })
            },
            format: WW => WW.toFixed(2)
          }), (0, ZW.jsx)(YW.k, {
            name: WW("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: iW,
            onChange: WW => {
              yW.d.set({
                soundVolume: Math.round(100 * WW) / 100
              })
            },
            format: WW => WW.toFixed(2)
          }), (0, ZW.jsx)(YW.e, {
            label: WW("settingsMenu:showSoundDirections"),
            checked: mW.showSoundDirections,
            onClick: WW => {
              yW.d.setClientEscMenuOptions({
                showSoundDirections: WW
              })
            },
            circleInfoText: WW("settingsMenu:showSoundDirectionsInfo")
          })]
        })
      }));
    var EO = OW(724),
      NO = OW(1526),
      PO = OW(3279),
      LO = OW(3270),
      cO = OW(4723);
    const wO = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function tO() {
      const {
        t: WW
      } = (0, PW.B)(), iW = (0, cO.c)(), {
        mobilePushNotificationsCanAsk: OW
      } = (0, yW.p)(["mobilePushNotificationsCanAsk"]), [EW, NW] = (0, mW.useState)(null), [LW, cW] = (0, mW.useState)(!1), [tW, xW] = (0, mW.useState)(null), [lW, AW] = (0, mW.useState)(!1), bW = (0, mW.useCallback)((() => {
        (0, PO.e)().then((WW => {
          iW.current && (NW(WW), cW(!1))
        })).catch((WW => {
          console.error("Failed to load push notification targets:", WW), iW.current && cW(!0)
        }))
      }), [iW]), jW = (0, mW.useCallback)((() => {
        (0, LO.h)().then((WW => {
          iW.current && xW((() => WW))
        }))
      }), [iW]);
      (0, mW.useEffect)((() => {
        bW()
      }), [bW]), (0, mW.useEffect)((() => {
        jW()
      }), [jW, OW]), (0, NO.e)(PO.i, bW);
      const UW = null === EW ? [] : Object.keys(wO).filter((WW => EW[WW] > 0));
      return (0, ZW.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, ZW.jsx)("div", {
          className: "SliderText",
          children: WW("notificationSettings:pushNotifications")
        }), null === EW && LW && (0, ZW.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: WW("notificationSettings:pushTargetsLoadFailed")
        }), null !== EW && 0 === UW.length && (0, ZW.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: WW("notificationSettings:pushTargetsNone")
        }), UW.length > 0 && (0, ZW.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: UW.map((iW => {
            var OW;
            return (0, ZW.jsx)("li", {
              children: WW(wO[iW], {
                count: null !== (OW = null === EW || void 0 === EW ? void 0 : EW[iW]) && void 0 !== OW ? OW : 0
              })
            }, iW)
          }))
        }), null !== tW && (0, ZW.jsx)(wW.f, {
          className: "PushNotificationSettingsButton",
          loading: lW,
          onClick: () => {
            AW(!0), tW().catch((WW => {
              console.error("Failed to turn on push notifications:", WW)
            })).finally((() => {
              iW.current && (AW(!1), jW())
            }))
          },
          children: WW("notificationSettings:pushTurnOn")
        })]
      })
    }
    var ZO = OW(3524),
      xO = OW(3265),
      lO = OW(1977),
      AO = OW(39);
    async function bO() {
      return "dailyDropReminderAsked_" + (await HW.userContextManager.getCurrentUserContext()).whamm
    }

    function jO(WW) {
      return async function(WW) {
        if (WW.remindersOn || (0, yW.e)(yW.d.get("gameState"))) return null;
        const iW = await bO();
        if (null !== AO.i.getItem(iW)) return null;
        const [OW, mW] = await Promise.all([(0, LO.h)().catch((WW => (console.error("Couldn't tell whether this device can take push notifications:", WW), null))), UO()]);
        if (null === OW && !mW) return null;
        if (null !== OW && ((0, xO.d)() || (0, LO.k)())) return null;
        return {
          askedKey: iW,
          requester: OW
        }
      }(WW).catch((WW => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", WW), null)))
    }

    function UO() {
      return (0, PO.e)().then((WW => WW.app + WW.browser + WW.msnPlay > 0), (WW => (console.error("Couldn't tell where push notifications reach this account:", WW), !0)))
    }
    async function kO(WW) {
      const iW = (0, ZO.x)({
          remindersOn: !0
        }),
        OW = null === WW ? Promise.resolve() : WW(),
        [mW, EW] = await Promise.allSettled([iW, OW]);
      "rejected" === mW.status && console.error("Failed to turn on Lucky Skin Block reminders:", mW.reason), "rejected" === EW.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", EW.reason), "rejected" !== mW.status && "rejected" !== EW.status || lO.g.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const sO = {
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
      MO = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function KO(WW) {
      let {
        setting: iW,
        value: OW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)(), LW = (0, cO.c)(), [cW, wW] = (0, mW.useState)(null), [tW, xW] = (0, mW.useState)(!1), [lW, AW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        "remindersOn" === iW && (0, LO.h)().then((WW => {
          LW.current && AW((() => WW))
        }), (WW => {
          console.error("Couldn't tell whether this device can take push notifications:", WW)
        }))
      }), [iW, LW]), (0, ZW.jsx)(YW.e, {
        className: NW()({
          DailyDropSettingFailed: tW
        }),
        label: EW(MO[iW].label),
        checked: null !== cW && void 0 !== cW ? cW : OW,
        note: tW ? EW("dailyDrop:settingFailed") : void 0,
        onClick: WW => {
          null === cW && (wW(WW), xW(!1), WW && null !== lW && lW().catch((WW => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", WW)
          })), (0, ZO.v)("daily_drop.setting", `${MO[iW].reportAs}_${WW?"on":"off"}`), "remindersOn" === iW && bO().then((WW => {
            AO.i.setItem(WW, !0)
          }), (WW => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", WW)
          })), (0, ZO.x)("hidden" === iW ? {
            hidden: WW
          } : {
            remindersOn: WW
          }).catch((WW => {
            console.error(`Failed to save the Lucky Skin Block's ${iW} setting:`, WW), LW.current && xW(!0)
          })).finally((() => {
            LW.current && wW(null)
          })))
        }
      })
    }
    const SO = (0, mW.memo)((function() {
      const {
        t: WW
      } = (0, PW.B)(), {
        clientEscMenuOptions: iW
      } = (0, yW.p)(["clientEscMenuOptions"]), {
        userContext: OW
      } = (0, AW.e)(), mW = OW.dailyDrop;
      return (0, ZW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [UW.featureFlags.useSocialFeatures && (0, ZW.jsx)(YW.h, {
          label: WW("notificationSettings:friendRequests"),
          options: EO.b.map((iW => ({
            value: iW,
            label: WW(sO[iW].label)
          }))),
          value: iW.friendRequestNotifications,
          onChange: WW => {
            yW.d.setClientEscMenuOptions({
              friendRequestNotifications: WW
            })
          },
          circleInfoText: (0, ZW.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: EO.b.map((iW => (0, ZW.jsxs)("div", {
              children: [(0, ZW.jsx)("b", {
                children: WW(sO[iW].label)
              }), ": ", WW(sO[iW].info)]
            }, iW)))
          })
        }), null !== mW && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(KO, {
            setting: "remindersOn",
            value: mW.remindersOn
          }), (0, ZW.jsx)(KO, {
            setting: "hidden",
            value: mW.hidden
          })]
        }), (0, ZW.jsx)(tO, {})]
      })
    }));
    var YO = OW(5211),
      yO = OW(182),
      TO = OW(315),
      JO = OW(7659),
      hO = OW(4666),
      HO = OW(35150),
      nO = OW(643),
      uO = OW(27);
    var oO = OW(671),
      dO = OW(5049);
    const eO = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function vO(WW) {
      return eO.has(WW) ? kW.gameBridge.lookup("YM", null) : null
    }

    function gO(WW) {
      if (!(0, nO.K)(yW.d.get("clientEscMenuOptions")[WW])) return yW.d.get("clientEscMenuOptions")[WW];
      const iW = vO(WW);
      return null !== iW ? iW[eO.get(WW)] : AO.i.getItem(WW)
    }

    function DO(WW, iW) {
      if ("useTouchControls" === WW) return void(0, dO.e)(iW);
      WW in yW.d.get("clientEscMenuOptions") && yW.d.setClientEscMenuOptions({
        [WW]: iW
      });
      const OW = vO(WW);
      null !== OW && kW.gameBridge.send("setChunkAddDistance", {
        ...OW,
        [eO.get(WW)]: iW
      }), AO.i.setItem(WW, iW)
    }
    var VO = OW(5129),
      pO = OW(35157),
      fO = OW(35159),
      CO = OW(5203),
      XO = OW(35175);

    function BO(WW) {
      var iW, EW, LW, cW;
      let {
        minChunkAddDist: wW,
        getValue: tW,
        onChange: xW,
        setApplySettingsCallback: lW
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), {
        clientEscMenuOptions: jW
      } = (0, yW.p)(["clientEscMenuOptions", "showDistantNametags"]), kW = (0, mW.useRef)(tW("showFog")), sW = (0, mW.useRef)(jW.antiAliasing), MW = (0, mW.useRef)(jW.useWebGpu), [KW, SW] = (0, mW.useState)(null), [JW, hW] = (0, mW.useState)(!1), [HW, nW] = (0, mW.useState)((() => (0, hO.c)(UW.featureFlags.settings.canUseShaderPacks))), [uW] = (0, mW.useState)((() => yW.d.isWebGpuDefaultOff())), [oW] = (0, mW.useState)(TO.l), [dW, eW] = (0, mW.useState)(!1);
      (0, mW.useEffect)((() => {
        const WW = () => {
          eW((0, fO.t)())
        };
        return WW(), (0, fO.C)(WW)
      }), []), (0, NO.e)("appManagerUpdated|clientEscMenuOptions", (() => {
        eW((0, fO.t)())
      }));
      const [vW] = (0, mW.useState)((() => !0 === AO.i.getItem(oi.pc))), [gW] = (0, mW.useState)((() => yW.d.isWebGpuOnStored()));
      (0, mW.useEffect)((() => {
        let WW = !1;
        return (0, UW.hasUsableWebGpuAdapter)().then((async iW => {
          const OW = vW || gW,
            mW = !iW && oO.K && await (0, XO.g)(OW);
          WW || (SW(iW || mW), hW(mW))
        })), (0, hO.i)(UW.featureFlags.settings.canUseShaderPacks) && (0, JO.g)().then((async iW => {
          const mW = null !== iW && await async function(WW) {
            const [{
              isShaderPackActive: iW
            }, {
              loadPageShaderPackCompiler: mW
            }] = await Promise.all([OW.e(160).then((() => OW(7656))), Promise.all([OW.e(91), OW.e(157), OW.e(159)]).then((() => OW(7621)))]);
            return iW(WW, await mW())
          }(iW);
          WW || nW(mW)
        })), () => {
          WW = !0
        }
      }), [vW, gW]);
      const DW = (!(HW && !vW) || !JW) && KW,
        VW = function(WW, iW, OW, mW, EW) {
          return (0, HO.c)(OW, mW) && !0 === iW ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== iW ? "settingsMenu:newWebGpu" : EW ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: WW && !1 !== iW,
            disabled: !0 !== iW
          }
        }(jW.useWebGpu, DW, HW, uW, oW),
        pW = (jW.useWebGpu || (0, HO.c)(HW, uW)) && HW && !0 === DW,
        fW = (0, bW.e)("lightingOverride"),
        CW = !(0, nO.K)(fW);
      let XW = "settingsMenu:enableLighting";
      CW && (XW = fW ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const BW = WW => {
          var iW, OW, mW;
          const EW = null !== (iW = WW.showFog) && void 0 !== iW ? iW : tW("showFog"),
            NW = null !== (OW = WW.antiAliasing) && void 0 !== OW ? OW : jW.antiAliasing,
            PW = null !== (mW = WW.useWebGpu) && void 0 !== mW ? mW : jW.useWebGpu,
            LW = !oO.K && EW !== kW.current || NW !== sW.current || PW !== MW.current;
          lW(LW ? () => YW.n : null)
        },
        qW = (0, bW.e)("fogChunkDistanceOverride"),
        RW = (0, bW.e)("fogBlockDistanceOverride"),
        GW = !(0, nO.K)(qW) || !(0, nO.K)(RW),
        IW = GW ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [aW, rW] = (0, YO.h)(wW),
        [zW, FW] = (0, CO.i)(wW),
        QW = AW("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Wi = zW < aW,
        ii = Math.min(null !== (iW = tW("chunkHorizAddDist")) && void 0 !== iW ? iW : wW[0], zW),
        Oi = !GW && function(WW, iW) {
          return !0 === WW.showFog && WW.fogChunkDistance > iW
        }(jW, ii);
      return (0, ZW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, ZW.jsx)(YW.k, {
          name: AW("settingsMenu:horizontalChunkLoadDistance"),
          min: wW[0],
          max: aW,
          selectableMax: zW,
          cappedNote: QW,
          step: 1,
          initValue: ii,
          onChange: WW => {
            !0 === tW("showFog") && WW < tW("fogChunkDistance") && xW("fogChunkDistance", WW), xW("chunkHorizAddDist", WW), uO.l.iZ("updatedChunkLoadDist")
          },
          circleInfoText: AW("settingsMenu:chunkLoadDistanceInfo")
        }), (0, ZW.jsx)(YW.k, {
          name: AW("settingsMenu:verticalChunkLoadDistance"),
          min: wW[1],
          max: rW,
          selectableMax: FW,
          cappedNote: Wi ? void 0 : QW,
          step: 1,
          initValue: Math.min(null !== (EW = tW("chunkVertAddDist")) && void 0 !== EW ? EW : wW[1], FW),
          onChange: WW => {
            xW("chunkVertAddDist", WW), uO.l.iZ("updatedChunkLoadDist")
          },
          circleInfoText: AW("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:chunkFadeIn"),
          checked: jW.chunkFadeIn,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              chunkFadeIn: WW
            })
          },
          circleInfoText: AW("settingsMenu:chunkFadeInInfo")
        }), TW.devTools.supports("chunkBorders") && (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:showChunkBorders"),
          checked: jW.showChunkBorders,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              showChunkBorders: WW
            })
          },
          circleInfoText: AW("settingsMenu:showChunkBordersInfo")
        }), (0, ZW.jsx)(YW.e, {
          label: AW(XW),
          checked: jW.enableLighting,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              enableLighting: WW
            })
          },
          disabled: CW
        }), (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZW.jsx)(YW.e, {
            label: AW(IW),
            checked: jW.showFog,
            onClick: WW => {
              BW({
                showFog: WW
              }), yW.d.setClientEscMenuOptions({
                showFog: WW
              })
            },
            disabled: GW,
            className: NW()({
              SettingBoxWarning: Oi
            })
          }), (0, ZW.jsx)(YW.k, {
            name: AW("settingsMenu:fogChunkDistance"),
            min: wW[0],
            max: yO.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (LW = jW.fogChunkDistance) && void 0 !== LW ? LW : wW[0],
            onChange: WW => {
              yW.d.setClientEscMenuOptions({
                fogChunkDistance: WW
              }), uO.l.iZ("fogChunkDistanceChanged", WW)
            },
            circleInfoText: AW("settingsMenu:fogChunkDistanceInfo"),
            disabled: GW || !1 === tW("showFog"),
            className: NW()({
              SettingBoxWarning: Oi
            })
          }), Oi && (0, ZW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: AW("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !oO.K && (0, ZW.jsx)(YW.e, {
          label: AW(pW ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !pW && jW.disableTexAtlas,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              disableTexAtlas: WW
            })
          },
          circleInfoText: AW("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: pW
        }), (0, ZW.jsx)(YW.k, {
          name: AW("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: jW.cameraFOV,
          onChange: WW => {
            yW.d.setClientEscMenuOptions({
              cameraFOV: WW
            })
          }
        }), (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:disableViewBobbing"),
          checked: jW.disableBobbing,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              disableBobbing: WW
            })
          },
          circleInfoText: AW("settingsMenu:disableViewBobbingInfo")
        }), (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:antiAliasing"),
          checked: jW.antiAliasing,
          onClick: WW => {
            BW({
              antiAliasing: WW
            }), (0, VO.h)("antiAliasing"), yW.d.setClientEscMenuOptions({
              antiAliasing: WW
            })
          },
          circleInfoText: AW("settingsMenu:antiAliasingInfo")
        }), (0, ZW.jsx)(YW.k, {
          name: AW("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (cW = jW.pixelScale) && void 0 !== cW ? cW : 1,
          onChange: WW => {
            (WW !== yW.d.get("clientEscMenuOptions").pixelScale || (0, fO.q)()) && (0, VO.h)("pixelScale"), yW.d.setClientEscMenuOptions({
              pixelScale: WW
            })
          },
          circleInfoText: AW("settingsMenu:pixelScaleInfo"),
          note: dW ? AW("settingsMenu:pixelScaleLowered") : void 0,
          format: WW => `${WW}x`
        }), (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:pixelSmoothing"),
          checked: jW.pixelSmoothing,
          onClick: WW => {
            yW.d.setClientEscMenuOptions({
              pixelSmoothing: WW
            })
          },
          circleInfoText: AW("settingsMenu:pixelSmoothingInfo")
        }), oO.K && (0, ZW.jsx)(YW.e, {
          label: AW("settingsMenu:distantNametags"),
          checked: (0, pO.b)(),
          onClick: WW => {
            yW.d.set({
              showDistantNametags: WW
            })
          },
          circleInfoText: AW("settingsMenu:distantNametagsInfo")
        }), (0, ZW.jsx)(YW.e, {
          label: AW(VW.translationKey),
          checked: VW.checked,
          onClick: WW => {
            BW({
              useWebGpu: WW
            }), yW.d.setClientEscMenuOptions({
              useWebGpu: WW
            })
          },
          circleInfoText: AW("settingsMenu:newWebGpuInfo"),
          disabled: VW.disabled
        })]
      })
    }
    var qO = OW(5126),
      RO = OW(10092),
      GO = OW(35177),
      IO = OW(10104),
      aO = OW(10158),
      rO = OW(35181);
    const zO = {
        color: 16777215,
        name: "white"
      },
      FO = {
        color: 0,
        name: "black"
      },
      QO = [zO, {
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
      }, FO],
      Wm = [FO, zO];

    function im(WW) {
      return `${WW} px`
    }

    function Om(WW) {
      return `${WW}%`
    }

    function mm(WW) {
      let {
        settings: iW,
        onChange: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)(), EW = (WW, mW) => {
        OW((0, rO.A)(iW, WW, mW))
      }, NW = function(WW, OW) {
        let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : im;
        const {
          min: NW,
          max: PW,
          step: LW
        } = rO.e[WW];
        return (0, ZW.jsx)(YW.k, {
          name: OW,
          min: NW,
          max: PW,
          step: LW,
          initValue: iW[WW],
          format: mW,
          onChange: iW => {
            EW(WW, iW)
          }
        }, WW)
      }, LW = (WW, OW, NW) => (0, ZW.jsx)(aO.b, {
        label: WW,
        value: (0, rO.m)(iW[OW]),
        swatches: NW.map((WW => {
          let {
            color: iW,
            name: OW
          } = WW;
          return {
            colour: (0, rO.m)(iW),
            label: mW(`crosshairSettings:color_${OW}`)
          }
        })),
        customLabel: mW("crosshairSettings:customColor"),
        onChange: WW => {
          const iW = (0, rO.t)(WW);
          null !== iW && EW(OW, iW)
        }
      }), cW = ["lines", "dot", "circle"].filter((WW => iW[WW])), wW = (WW, OW, mW) => (0, ZW.jsx)(YW.e, {
        label: OW,
        checked: iW[WW],
        disabled: 1 === cW.length && cW[0] === WW,
        circleInfoText: mW,
        onClick: iW => {
          EW(WW, iW)
        }
      }, WW), tW = "shapes" === iW.style;
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [(0, ZW.jsx)(YW.h, {
          label: mW("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: mW("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: mW("crosshairSettings:styleShapes")
          }],
          value: iW.style,
          onChange: WW => {
            EW("style", WW)
          }
        }), LW(mW("crosshairSettings:color"), "color", QO), NW("opacity", mW("crosshairSettings:opacity"), Om), !tW && NW("size", mW("crosshairSettings:size"), Om), tW && (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wW("lines", mW("crosshairSettings:lines")), iW.lines && NW("lineLength", mW("crosshairSettings:lineLength")), iW.lines && NW("lineThickness", mW("crosshairSettings:lineThickness")), iW.lines && NW("gap", mW("crosshairSettings:gap")), iW.lines && wW("tStyle", mW("crosshairSettings:tStyle"))]
        }), tW && (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wW("dot", mW("crosshairSettings:dot")), iW.dot && NW("dotSize", mW("crosshairSettings:dotSize"))]
        }), tW && (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [wW("circle", mW("crosshairSettings:circle")), iW.circle && NW("circleRadius", mW("crosshairSettings:circleRadius")), iW.circle && NW("circleThickness", mW("crosshairSettings:circleThickness"))]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [NW("outline", mW("crosshairSettings:outline"), (WW => WW > 0 ? im(WW) : mW("crosshairSettings:off"))), iW.outline > 0 && LW(mW("crosshairSettings:outlineColor"), "outlineColor", Wm)]
        }), wW("growOnClick", mW("crosshairSettings:growOnClick")), tW && wW("forGuns", mW("crosshairSettings:forGuns"), mW("crosshairSettings:forGunsInfo"))]
      })
    }
    var Em = OW(80),
      Nm = OW(1269),
      Pm = OW(13952),
      Lm = OW(15078),
      cm = OW(16479),
      wm = OW(17016);
    const tm = ["sky", "grass", "stone", "sand", "snow", "night"],
      Zm = "4rem";

    function xm(WW) {
      return {
        backgroundImage: `url(${WW})`,
        backgroundSize: `${Zm} ${Zm}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function lm(WW) {
      return {
        ...(() => {
          switch (WW) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return xm(Pm);
            case "stone":
              return xm(Lm);
            case "sand":
              return xm(cm);
            case "snow":
              return xm(wm);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Am(WW) {
      return Object.freeze({
        ...rO.g,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...WW
      })
    }
    const bm = [{
        id: "default",
        settings: rO.g
      }, {
        id: "cross",
        settings: Am({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Am({
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
        settings: Am({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Am({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Am({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Am({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Am({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      jm = ["growOnClick", "forGuns"];
    var Um = OW(35190);

    function km(WW) {
      let {
        label: iW,
        selected: OW,
        onClick: mW,
        className: EW,
        style: PW,
        children: LW
      } = WW;
      return (0, ZW.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": OW,
        title: iW,
        "aria-label": iW,
        "data-pad-focusable": !0,
        className: NW()("CrosshairBackdropSwatch", EW, {
          Selected: OW
        }),
        style: PW,
        onClick: mW,
        children: LW
      })
    }

    function sm(WW) {
      let {
        backdrop: iW,
        onChange: OW,
        game: mW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": EW("crosshairSettings:background"),
        children: [mW && (0, ZW.jsx)(km, {
          label: EW("crosshairSettings:bg_game"),
          selected: mW.selected,
          onClick: mW.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, ZW.jsx)(LW.c, {
            name: "cube"
          })
        }), tm.map((WW => (0, ZW.jsx)(km, {
          label: EW(`crosshairSettings:bg_${WW}`),
          selected: !(null !== mW && void 0 !== mW && mW.selected) && WW === iW,
          style: lm(WW),
          onClick: () => {
            OW(WW)
          }
        }, WW)))]
      })
    }

    function Mm(WW) {
      let {
        settings: iW,
        touch: OW,
        backdrop: mW,
        onChange: EW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)(), cW = function(WW) {
        var iW;
        return null !== (iW = bm.find((iW => (0, rO.w)(iW.settings, WW, jm)))) && void 0 !== iW ? iW : null
      }(iW);
      return (0, ZW.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": LW("crosshairSettings:presets"),
        children: bm.map((WW => {
          const PW = (null === cW || void 0 === cW ? void 0 : cW.id) === WW.id;
          return (0, ZW.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": PW,
            "data-pad-focusable": !0,
            className: NW()("CrosshairPreset", {
              Selected: PW
            }),
            onClick: () => {
              EW(function(WW, iW) {
                return {
                  ...iW.settings,
                  growOnClick: WW.growOnClick,
                  forGuns: WW.forGuns
                }
              }(iW, WW))
            },
            children: [(0, ZW.jsx)("div", {
              className: "CrosshairPresetStage",
              style: lm(mW),
              children: (0, ZW.jsx)(Um.b, {
                settings: WW.settings,
                touch: OW,
                inPreview: !0
              })
            }), (0, ZW.jsx)("div", {
              className: "CrosshairPresetName",
              children: LW(`crosshairSettings:preset_${WW.id}`)
            })]
          }, WW.id)
        }))
      })
    }
    var Km = OW(1776);

    function Sm(WW, iW) {
      const [OW, EW] = (0, mW.useState)(!1), NW = () => {
        EW(!1)
      }, [PW, LW] = (0, mW.useState)(!1), cW = (0, mW.useRef)({
        growOnClick: WW.growOnClick,
        forGuns: WW.forGuns
      });
      (0, mW.useEffect)((() => {
        const iW = cW.current;
        cW.current = {
          growOnClick: WW.growOnClick,
          forGuns: WW.forGuns
        }, (WW.growOnClick && !iW.growOnClick || WW.forGuns && !iW.forGuns) && LW(!0)
      }), [WW.growOnClick, WW.forGuns]), (0, mW.useEffect)((() => {
        if (!PW) return;
        const WW = setTimeout((() => {
          LW(!1)
        }), 600);
        return () => {
          clearTimeout(WW)
        }
      }), [PW]);
      const wW = OW || PW;
      return {
        view: {
          pressed: wW,
          spread: wW && WW.forGuns && !WW.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: WW => {
            !WW.target.closest(iW) && (0, Km.e)(WW.currentTarget, WW.pointerId) && EW(!0)
          },
          onPointerUp: NW,
          onPointerCancel: NW,
          onLostPointerCapture: NW
        }
      }
    }

    function Ym(WW) {
      let {
        settings: iW,
        touch: OW,
        backdrop: mW,
        className: EW,
        children: PW,
        label: LW
      } = WW;
      const cW = Sm(iW, ".CrosshairStageControls");
      return (0, ZW.jsxs)("div", {
        className: NW()("CrosshairStage", EW),
        style: lm(mW),
        ...cW.handlers,
        children: [(0, ZW.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": LW,
          children: (0, ZW.jsx)(Um.b, {
            settings: iW,
            touch: OW,
            inPreview: !0,
            ...cW.view
          })
        }), PW]
      })
    }
    const ym = "crosshairFullScreen";

    function Tm(WW) {
      let {
        settings: iW,
        touch: OW,
        backdrop: EW,
        onBackdrop: cW,
        inGame: tW,
        onChange: xW,
        onClose: lW
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), bW = (0, mW.useRef)(null);
      (0, Nm.r)("popup", bW, lW),
      function(WW) {
        const iW = (0, mW.useRef)(WW);
        iW.current = WW, (0, mW.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ym]: !0
          }, "");
          let WW = !1;
          const OW = () => {
            WW = !0, iW.current()
          };
          return window.addEventListener("popstate", OW), () => {
            var iW;
            window.removeEventListener("popstate", OW), !WW && null !== (iW = window.history.state) && void 0 !== iW && iW[ym] && window.history.back()
          }
        }), [])
      }(lW);
      const jW = (0, mW.useRef)(lW);
      jW.current = lW, (0, mW.useEffect)((() => {
        function WW(WW) {
          "Escape" === WW.key && (WW.stopPropagation(), jW.current())
        }
        return window.addEventListener("keydown", WW, !0), () => {
          window.removeEventListener("keydown", WW, !0)
        }
      }), []);
      const UW = Sm(iW, ".CrosshairFullScreenPanel"),
        [kW, sW] = (0, mW.useState)(!0),
        MW = kW && tW;
      (0, mW.useEffect)((() => {
        if (MW) return yW.d.set({
          crosshairGameView: !0
        }), () => {
          yW.d.set({
            crosshairGameView: !1
          })
        }
      }), [MW]);
      const [KW, SW] = (0, mW.useState)(!0);
      return (0, Em.createPortal)((0, ZW.jsxs)("div", {
        ref: bW,
        className: "CrosshairFullScreen",
        style: MW ? void 0 : lm(EW),
        ...UW.handlers,
        children: [(0, ZW.jsx)(Um.b, {
          settings: iW,
          touch: OW,
          inEditor: !0,
          ...UW.view
        }), (0, ZW.jsxs)("div", {
          className: NW()("CrosshairFullScreenPanel", {
            Collapsed: !KW
          }),
          children: [(0, ZW.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, ZW.jsx)(sm, {
              backdrop: EW,
              onChange: WW => {
                sW(!1), cW(WW)
              },
              game: tW ? {
                selected: MW,
                onSelect: () => {
                  sW(!0)
                }
              } : void 0
            }), (0, ZW.jsx)(wW.Z, {
              className: "CrosshairPanelToggle",
              ariaLabel: AW(KW ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                SW(!KW)
              },
              children: (0, ZW.jsx)(LW.c, {
                name: KW ? "caret-up" : "pen"
              })
            }), (0, ZW.jsx)(wW.f, {
              className: "CrosshairFullScreenDone",
              onClick: lW,
              padDefaultFocus: !0,
              children: AW("crosshairSettings:done")
            })]
          }), KW && (0, ZW.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, ZW.jsx)(Mm, {
              settings: iW,
              touch: OW,
              backdrop: EW,
              onChange: xW
            }), (0, ZW.jsx)(mm, {
              settings: iW,
              onChange: xW
            })]
          })]
        })]
      }), document.body)
    }
    var Jm = OW(3687),
      hm = OW(35205);

    function Hm(WW) {
      let {
        settings: iW,
        onChange: OW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)(), cW = (0, hm.h)(iW), [tW, xW] = (0, Jm.j)(), [lW, AW] = (0, mW.useState)(!1), bW = (0, mW.useRef)(null), [jW, UW] = (0, Jm.j)(), [kW, sW] = (0, mW.useState)(!1);
      return (0, ZW.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, ZW.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, ZW.jsxs)(wW.Z, {
            className: NW()("CrosshairCopy", {
              ActiveSecondaryButton: tW
            }),
            onClick: () => {
              (0, Jm.g)(cW, {
                useShareSheet: !1,
                onOutcome: WW => {
                  AW("failed" === WW), "copied" === WW && xW()
                }
              })
            },
            children: [(0, ZW.jsx)(LW.c, {
              name: tW ? "check" : "copy"
            }), " ", EW(tW ? "general:copied" : "crosshairSettings:copy")]
          }), (0, ZW.jsx)(KW.b, {
            className: "CrosshairPaste",
            domRef: bW,
            ariaLabel: EW("crosshairSettings:paste"),
            placeholderText: EW("crosshairSettings:paste"),
            onValueChange: WW => {
              const iW = (0, hm.e)(WW);
              sW(!iW && WW.trim().length >= hm.c), iW && (OW(iW), bW.current.value = "", UW())
            }
          })]
        }), lW && (0, ZW.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: cW,
          "aria-label": EW("crosshairSettings:copy"),
          onFocus: WW => {
            WW.currentTarget.select()
          }
        }), (0, ZW.jsxs)("div", {
          "aria-live": "polite",
          children: [kW && (0, ZW.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: EW("crosshairSettings:pasteInvalid")
          }), jW && !kW && (0, ZW.jsx)("div", {
            className: "CrosshairShareNote",
            children: EW("crosshairSettings:applied")
          })]
        })]
      })
    }
    var nm = OW(35209);
    let um = "sky";

    function om(WW) {
      let {
        showing: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        isTouchScreen: EW,
        gameState: NW,
        clientEscMenuOptions: cW
      } = (0, yW.p)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), tW = (0, nm.g)(), [xW, lW] = (0, mW.useState)(um), AW = WW => {
        um = WW, lW(WW)
      }, [bW, jW] = (0, mW.useState)(!1);
      return (0, mW.useEffect)((() => {
        iW || jW(!1)
      }), [iW]), (0, ZW.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, ZW.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, ZW.jsx)(Ym, {
            className: "CrosshairPreviewStage",
            settings: tW,
            touch: EW,
            backdrop: xW,
            label: OW("crosshairSettings:preview"),
            children: (0, ZW.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, ZW.jsx)(sm, {
                backdrop: xW,
                onChange: AW
              }), (0, ZW.jsxs)(wW.Z, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  jW(!0)
                },
                children: [(0, ZW.jsx)(LW.c, {
                  name: "expand"
                }), " ", OW("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, ZW.jsx)("div", {
          className: "SettingBox",
          children: (0, ZW.jsx)(Mm, {
            settings: tW,
            touch: EW,
            backdrop: xW,
            onChange: nm.d
          })
        }), (0, ZW.jsx)(Hm, {
          settings: tW,
          onChange: nm.d
        }), EW && (0, ZW.jsx)(IO.c, {
          note: (0, GO.d)(EW, cW.touchActionButtons) ? OW("crosshairSettings:touchNote") : void 0
        }), (0, ZW.jsx)(mm, {
          settings: tW,
          onChange: nm.d
        }), bW && (0, ZW.jsx)(Tm, {
          settings: tW,
          touch: EW,
          backdrop: xW,
          onBackdrop: AW,
          inGame: "inGame" === NW,
          onChange: nm.d,
          onClose: () => {
            jW(!1)
          }
        })]
      })
    }
    var dm = OW(10101),
      em = OW(1472),
      gm = OW(5903),
      Dm = OW(35213),
      Vm = OW(4920),
      pm = OW(2080),
      fm = OW(727);
    const Cm = (0, mW.memo)((function() {
      const {
        clientEscMenuOptions: WW
      } = (0, yW.p)(["clientEscMenuOptions"]), {
        recording: iW,
        clipping: OW,
        hasClipBuffer: EW
      } = (0, zi.g)("replayRecorder"), PW = (0, zi.f)("connectedGame", (WW => WW.replay)), LW = (0, Vm.m)(), cW = !1 === (0, bW.e)("canRecordReplays");
      (0, mW.useEffect)((() => {
        kW.gameBridge.send("setRecorderPrefs", {
          clipping: WW.enableClipping,
          clipSeconds: WW.clipDurationSeconds
        })
      }), [WW.enableClipping, WW.clipDurationSeconds]);
      const tW = LW || PW,
        xW = !tW && !cW,
        lW = iW || xW,
        AW = xW,
        jW = AW && OW && !iW;

      function UW() {
        lW && kW.gameBridge.send("toggleRecording", null)
      }
      return (0, ZW.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, ZW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: iW ? (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsxs)(wW.O, {
                className: "ReplayViewerCategoryButton",
                onClick: UW,
                disabled: !lW,
                children: [(0, ZW.jsx)("span", {
                  children: "Stop Recording"
                }), (0, ZW.jsx)(pm.e, {
                  noaAction: "recordGame"
                })]
              }), (0, ZW.jsx)(Dm.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, ZW.jsxs)(wW.f, {
              className: "ReplayViewerCategoryButton",
              onClick: UW,
              disabled: !lW,
              children: [(0, ZW.jsx)("span", {
                children: "Start Recording"
              }), (0, ZW.jsx)(pm.e, {
                noaAction: "recordGame"
              })]
            })
          }), cW && (0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), tW && !iW && (0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ZW.jsx)(YW.e, {
            label: "Enable clipping",
            checked: WW.enableClipping,
            disabled: !AW,
            onClick: function(WW) {
              AW && yW.d.setClientEscMenuOptions({
                enableClipping: WW
              })
            },
            className: NW()({
              SettingBoxDisabled: !AW
            })
          }), (0, ZW.jsx)(YW.k, {
            name: "Clip duration (seconds)",
            min: fm.j,
            max: fm.h,
            step: fm.c,
            initValue: WW.clipDurationSeconds,
            onChange: function(WW) {
              yW.d.setClientEscMenuOptions({
                clipDurationSeconds: WW
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !AW || !WW.enableClipping
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZW.jsxs)(wW.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              jW && kW.gameBridge.send("saveClip", null)
            },
            disabled: !jW,
            children: [(0, ZW.jsx)("span", {
              children: "Record clip"
            }), (0, ZW.jsx)(pm.e, {
              noaAction: "recordClip"
            })]
          }), WW.enableClipping && !EW && AW && !iW && (0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), iW && (0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZW.jsxs)(wW.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Vm.j)(!0), yW.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: LW,
            children: [(0, ZW.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, ZW.jsx)(pm.e, {
              noaAction: "replayViewerOpen"
            })]
          }), LW && (0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ZW.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, ZW.jsx)("iframe", {
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
    var Xm = OW(2012);
    const Bm = {
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
        icon: () => (0, ZW.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, ZW.jsx)("path", {
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
      kA: {
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

    function qm() {
      return Promise.all([OW.e(91), OW.e(157), OW.e(156), OW.e(153)]).then((() => OW(42556))).then((WW => ({
        default: WW.ShaderPackCategory
      })), (WW => (console.error("Failed to load the shader pack settings", WW), {
        default: Rm
      })))
    }

    function Rm() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, ZW.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: WW("shaderPack:tabLoadFailed")
      })
    }
    var Gm = OW(1459),
      Im = OW(172);
    const am = /party\s*voice/i;
    let rm = !1;

    function zm(WW) {
      return Object.keys(WW).some((WW => WW.startsWith("__reactFiber$")))
    }
    const Fm = ".MenuSideBarBody, .MenuSideBarSection";

    function Qm(WW) {
      var iW;
      return (null !== (iW = WW.textContent) && void 0 !== iW ? iW : "").replace(/\s+/g, " ").trim()
    }

    function WE(WW) {
      for (const iW of function(WW) {
          const iW = new Set;
          for (const OW of WW.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) iW.add(OW);
          for (const OW of [WW, ...WW.querySelectorAll(Fm)])
            for (const WW of OW.children) iW.add(WW);
          return [...iW]
        }(WW))
        if (!zm(iW) || !iW.matches(Fm) && am.test(Qm(iW))) return iW;
      return null
    }

    function iE(WW) {
      return WW.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const OE = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function mE(WW) {
      const iW = document.createTreeWalker(WW, NodeFilter.SHOW_TEXT, {
        acceptNode: WW => {
          var iW, OW;
          return OE.has(null !== (iW = null === (OW = WW.parentElement) || void 0 === OW ? void 0 : OW.tagName.toUpperCase()) && void 0 !== iW ? iW : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let NW = iW.nextNode(); null !== NW; NW = iW.nextNode()) {
        var OW;
        const WW = (null !== (OW = NW.textContent) && void 0 !== OW ? OW : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== WW) {
          var mW, EW;
          return (null !== (mW = null === (EW = WW.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === EW ? void 0 : EW[0]) && void 0 !== mW ? mW : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function EE(WW, iW) {
      const OW = iE(iW).slice(0, 40) || "blank";
      return `${(iE(WW.toLowerCase())||"none").slice(0,Math.max(23,Im.ab-1-OW.length))}:${OW}`.slice(0, Im.ab)
    }
    const NE = (0, mW.lazy)((() => OW.e(308).then((() => OW(42541))).then((WW => ({
        default: WW.BloxdInformation
      }))))),
      PE = (0, mW.lazy)(qm);

    function LE(WW) {
      return WW ? "general" : "account"
    }
    const cE = new Map,
      wE = (0, mW.memo)((function(WW) {
        let {
          show: iW,
          setBeforeResumeCallback: OW
        } = WW;
        (0, jW.d)();
        const {
          gameState: EW,
          openSettingsCategory: NW
        } = (0, yW.p)(["gameState", "openSettingsCategory"]), {
          userContext: cW
        } = (0, AW.e)(), {
          t: tW
        } = (0, PW.B)(), KW = (0, lW.b)(), SW = (0, bW.e)("minChunkAddDist"), YW = "inGame" === EW, [TW, HW] = (0, mW.useState)(LE(YW)), [nW, uW] = (0, mW.useState)(null), [oW, dW] = (0, mW.useState)([]), eW = (0, mW.useRef)(function() {
          const WW = new Date,
            iW = 6 * (WW.getMonth() + WW.getDate()) % oi.t.length;
          return [...oi.t, ...oi.t].slice(iW, iW + 6)
        }()), vW = (0, mW.useRef)(null), gW = (0, mW.useRef)(null), DW = (0, NO.g)(em.f, (0, em.b)()), VW = Object.keys(Bm).filter((WW => {
          switch (WW) {
            case "replayViewer":
              return YW;
            case "developerTools":
              return cW.playerHasRank("developer") || !1;
            case "texturePack":
              return UW.featureFlags.settings.canChangeTexturePack;
            case "kA":
              return UW.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return UW.featureFlags.useSocialFeatures || null !== cW.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== hW.siteUsed;
            case "controller":
              return UW.featureFlags.useControllerSupport && (DW || "controller" === TW);
            default:
              return !0
          }
        }));
        (0, NO.e)("toggleFullCoordinateOverlay", (() => {
          const WW = gO("showCoordinates") && gO("showChunkCoordinates") && gO("showFPS");
          DO("showCoordinates", !WW), DO("showChunkCoordinates", !WW), DO("showFPS", !WW), KW()
        })), (0, NO.e)("updatedChunkLoadDist", (() => {
          KW()
        })), (0, mW.useEffect)((() => {
          if (uW(null), null === yW.d.get("openSettingsCategory")) {
            const WW = (0, Gm.k)() ? cE.get(YW) : void 0;
            HW(WW && VW.includes(WW) ? WW : LE(YW))
          }
        }), [iW]), (0, mW.useEffect)((() => {
          if (iW && gW.current) return function(WW) {
            if (rm) return () => {};
            let iW = null,
              OW = null;
            const mW = () => {
                var WW;
                null !== OW && (clearTimeout(OW), OW = null), null === (WW = iW) || void 0 === WW || WW.disconnect(), iW = null
              },
              EW = () => {
                const iW = WE(WW);
                null !== iW && (rm = !0, mW(), (0, ji.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: EE(window.location.hostname, mE(iW))
                }))
              };
            return OW = setTimeout((() => {
              OW = null, EW(), rm || (iW = new MutationObserver(EW), iW.observe(WW, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), mW
          }(gW.current)
        }), [iW]), (0, mW.useEffect)((() => {
          null !== NW && (HW(NW), cE.set(YW, NW), yW.d.set({
            openSettingsCategory: null
          }))
        }), [NW, YW]), (0, mW.useLayoutEffect)((() => {
          vW.current && (vW.current.scrollTop = 0)
        }), [TW, iW]), (0, mW.useEffect)((() => {
          "updateLog" === TW && (0, MW.c)().then(dW)
        }), [TW]), (0, mW.useEffect)((() => {
          if ((0, nO.K)(SW)) return;
          const [WW, iW] = (0, qO.i)(), [OW, mW] = (0, YO.h)(SW), EW = (0, Xm.f)(SW[0], WW, OW), NW = (0, Xm.f)(SW[1], iW, mW);
          kW.gameBridge.send("setChunkAddDistance", {
            horizontal: EW,
            vertical: NW
          })
        }), [SW]);
        const pW = (0, mW.useCallback)((async () => {
          nW && (await nW(), uW(null))
        }), [nW]);

        function fW() {
          yW.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, mW.useEffect)((() => {
          OW((() => pW))
        }), [pW, OW]), (0, ZW.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: iW ? {} : {
            display: "none"
          },
          children: [(0, ZW.jsx)("div", {
            ref: gW,
            className: "MenuSideBar",
            children: (0, ZW.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, ZW.jsx)(xW, {
                items: VW.map((WW => {
                  const iW = Bm[WW].icon;
                  return {
                    id: WW,
                    faIcon: "string" === typeof iW ? iW : void 0,
                    iconElement: "string" === typeof iW ? void 0 : (0, ZW.jsx)(iW, {}),
                    title: tW(Bm[WW].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: TW,
                onClick: WW => {
                  !async function(WW) {
                    await pW(), HW(WW), cE.set(YW, WW)
                  }(WW)
                }
              })
            })
          }), (0, ZW.jsxs)("div", {
            ref: vW,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === TW && (0, ZW.jsx)(Ri, {
              showing: iW,
              inGame: YW
            }), "general" === TW && (0, ZW.jsx)(OO, {
              inGame: YW
            }), "audio" === TW && (0, ZW.jsx)(mO, {}), "notifications" === TW && (0, ZW.jsx)(SO, {}), "graphics" === TW && (0, ZW.jsx)(BO, {
              minChunkAddDist: null !== SW && void 0 !== SW ? SW : [2, 2],
              getValue: gO,
              onChange: DO,
              setApplySettingsCallback: uW
            }), "controls" === TW && (0, ZW.jsx)(RO.h, {}), "crosshair" === TW && (0, ZW.jsx)(om, {
              showing: iW
            }), "controller" === TW && UW.featureFlags.useControllerSupport && (0, ZW.jsx)(dm.c, {}), UW.featureFlags.settings.canChangeTexturePack && "texturePack" === TW && (0, ZW.jsx)(gm.c, {
              setApplySettingsCallback: uW
            }), UW.featureFlags.settings.canUseShaderPacks && "kA" === TW && (0, ZW.jsx)(mW.Suspense, {
              fallback: null,
              children: (0, ZW.jsx)(PE, {
                setApplySettingsCallback: uW
              })
            }), "updateLog" === TW && (0, ZW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZW.jsx)("div", {
                className: "UpdateLogsContainer",
                children: oW.map(((WW, iW) => (0, ZW.jsx)(sW.d, {
                  updateLog: WW,
                  index: iW,
                  close: fW
                }, iW)))
              })
            }), "information" === TW && (0, ZW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZW.jsx)(mW.Suspense, {
                fallback: null,
                children: (0, ZW.jsx)(NE, {})
              })
            }), "alternativeDomains" === TW && (0, ZW.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, ZW.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: tW("settingsMenu:unblockedDomainsDescription")
              }), (0, ZW.jsx)("div", {
                className: "AlternativeDomainsList",
                children: eW.current.map((WW => (0, ZW.jsxs)(wW.f, {
                  onClick: () => {
                    window.open(`https://${WW}`)
                  },
                  children: [(0, ZW.jsx)(LW.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", WW]
                }, WW)))
              })]
            }), "replayViewer" === TW && (0, ZW.jsx)(Cm, {}), "developerTools" === TW && (0, ZW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ZW.jsx)(JW, {
                setApplySettingsCallback: uW
              })
            }), null !== nW && (0, ZW.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, ZW.jsx)(wW.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: pW,
                children: tW("general:apply")
              })
            })]
          })]
        })
      }));
    var tE = OW(3634),
      ZE = OW(1664),
      xE = OW(3184),
      lE = OW(5033);
    const AE = (0, mW.lazy)((() => Promise.resolve().then((() => OW(5361))).then((WW => (WW.needGameClientAfterPaint(), (0, tE.c)((WW => WW.loadCharacterCustomisationUI()), (WW => WW.CharacterCustomisationUI))))))),
      bE = "openCustomisationTab";

    function jE(WW) {
      var iW, OW, EW;
      let {
        show: NW
      } = WW;
      const {
        userContext: PW
      } = (0, AW.e)(), LW = (0, BW.usePurchasesAllowed)(), cW = (0, mW.useRef)(null);
      var wW, tW;
      PW !== HW.NULL_USER_CONTEXT && (null === (iW = cW.current) || void 0 === iW ? void 0 : iW.whamm) !== PW.whamm && (cW.current = {
        whamm: PW.whamm,
        mountKey: (null !== (wW = null === (tW = cW.current) || void 0 === tW ? void 0 : tW.mountKey) && void 0 !== wW ? wW : -1) + 1
      });
      const [lW, bW] = (0, mW.useState)("characters");
      if ((0, NO.e)(bE, bW), !NW) return null;
      const jW = null !== (0, ZE.e)(Date.now()),
        UW = PW.getOwnedCosmeticPacks(),
        kW = oi.Yb.filter((WW => "pet" === WW || "aura" === WW ? jW || (0, xE.s)(WW).some((iW => iW !== `${WW}_none` && (0, xE.I)(WW, iW, UW))) : "cape" !== WW && "nameColour" !== WW || (0, VW.e)(PW.getPlayerRanks()) || LW)).map((WW => ({
          id: WW,
          faIcon: oi.z[WW],
          title: oi.D[WW],
          redDot: !1
        })));
      return (0, ZW.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, ZW.jsx)("div", {
          className: "MenuSideBar",
          children: (0, ZW.jsx)(xW, {
            items: kW,
            selectedItemId: lW,
            onClick: WW => {
              bW(WW)
            }
          })
        }), (0, ZW.jsx)("div", {
          className: "MenuBody",
          children: (0, ZW.jsx)(mW.Suspense, {
            fallback: (0, ZW.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, ZW.jsx)(SW.d, {})
            }),
            children: (0, ZW.jsx)(AE, {
              selectedTab: lW,
              noWebGlFallback: kE
            }, null !== (OW = null === (EW = cW.current) || void 0 === EW ? void 0 : EW.mountKey) && void 0 !== OW ? OW : 0)
          })
        })]
      })
    }

    function UE() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, ZW.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: WW((0, lE.f)((0, lE.b)()))
      })
    }
    const kE = (0, ZW.jsx)(UE, {});
    var sE = OW(1546),
      ME = OW(1551),
      KE = OW(35220),
      SE = OW(5238),
      YE = OW(4626),
      yE = OW(4712),
      TE = OW(10006),
      JE = OW(35223),
      hE = OW(35229),
      HE = OW(2032),
      nE = OW(2021),
      uE = OW(5668),
      oE = OW(1255),
      dE = OW(1217),
      eE = OW(1774),
      vE = OW(10071),
      gE = OW(3339),
      DE = OW(3348);

    function VE(WW) {
      return WW ? Object.keys(WW).sort(((iW, OW) => {
        var mW, EW, NW, PW;
        const LW = (null !== (mW = null === (EW = WW[OW]) || void 0 === EW ? void 0 : EW.sortPriority) && void 0 !== mW ? mW : 0) - (null !== (NW = null === (PW = WW[iW]) || void 0 === PW ? void 0 : PW.sortPriority) && void 0 !== NW ? NW : 0);
        return 0 !== LW ? LW : iW.localeCompare(OW)
      })) : []
    }
    const pE = [{
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

    function fE(WW) {
      for (const {
          threshold: iW,
          suffix: OW
        }
        of pE)
        if (WW >= iW) {
          const mW = WW / iW;
          return mW >= 100 ? `${Math.floor(mW)}${OW}` : mW >= 10 ? `${mW.toFixed(1).replace(/\.0$/,"")}${OW}` : `${mW.toFixed(2).replace(/\.?0+$/,"")}${OW}`
        } return String(WW)
    }
    var CE = OW(4171);
    const XE = {
        normal: "0.8em",
        big: "1em"
      },
      BE = (0, mW.memo)((function(WW) {
        let {
          item: iW,
          amount: OW = 0,
          size: mW = "normal",
          tier: EW = null
        } = WW;
        return (0, ZW.jsx)("div", {
          className: NW()("SmpSlot", `SmpSlot-${mW}`),
          children: iW && (0, ZW.jsx)(HE.b, {
            itemName: iW,
            amount: OW > 1 ? OW : 0,
            amountFontSize: XE[mW],
            enchantmentTier: EW
          })
        })
      }));

    function qE(WW) {
      let {
        amount: iW,
        exact: OW = !1,
        className: mW
      } = WW;
      return (0, ZW.jsxs)("span", {
        className: NW()("SmpGold", mW),
        children: [(0, ZW.jsx)("span", {
          className: "SmpCoin",
          children: (0, ZW.jsx)(HE.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), OW ? iW.toLocaleString("en-US") : fE(iW)]
      })
    }

    function RE(WW) {
      let {
        count: iW = 5,
        grid: OW = !1
      } = WW;
      return (0, ZW.jsx)("div", {
        className: OW ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: iW
        }, ((WW, iW) => (0, ZW.jsxs)("div", {
          className: NW()(OW ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, ZW.jsx)("div", {
            className: NW()("SmpSlot", OW ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, ZW.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, ZW.jsx)("b", {}), (0, ZW.jsx)("small", {})]
          }), (0, ZW.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, iW)))
      })
    }

    function GE(WW) {
      let {
        title: iW,
        children: OW
      } = WW;
      return (0, ZW.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, ZW.jsx)("b", {
          children: iW
        }), OW && (0, ZW.jsx)("small", {
          children: OW
        })]
      })
    }

    function IE(WW) {
      let {
        entry: iW
      } = WW;
      return (0, ZW.jsx)(GE, {
        title: (0, ZW.jsx)(nE.d, {
          text: iW.item.customTitle
        }),
        children: (0, ZW.jsx)(nE.d, {
          text: iW.item.description
        })
      })
    }

    function aE(WW) {
      return (0, ZW.jsx)(CE.c, {
        ...WW,
        className: NW()("SmpChoice", WW.className),
        reselectable: !0
      })
    }

    function rE() {
      return (0, ZW.jsx)("span", {
        className: "SmpLoader",
        children: (0, ZW.jsx)(SW.d, {})
      })
    }

    function zE(WW) {
      let {
        value: iW,
        onChange: OW,
        min: EW = 1,
        max: NW,
        step: PW = 1,
        label: LW
      } = WW;
      const cW = (0, mW.useRef)(null),
        wW = (0, mW.useRef)(iW);
      wW.current = iW;
      const [tW, xW] = (0, mW.useState)(null), lW = WW => Math.max(EW, Math.min(NW, Math.floor(WW))), AW = WW => {
        const iW = wW.current,
          mW = "function" === typeof PW ? PW(iW, WW) : PW,
          EW = lW(iW + mW * WW);
        wW.current = EW, OW(EW)
      };
      (0, mW.useEffect)((() => {
        if (null === tW) return;
        let WW;
        const iW = () => {
            xW(null)
          },
          OW = setTimeout((() => {
            WW = setInterval((() => {
              AW(tW);
              const WW = wW.current;
              (tW > 0 ? WW >= NW : WW <= EW) && iW()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", iW), window.addEventListener("pointercancel", iW), window.addEventListener("blur", iW), () => {
          clearTimeout(OW), clearInterval(WW), window.removeEventListener("pointerup", iW), window.removeEventListener("pointercancel", iW), window.removeEventListener("blur", iW)
        }
      }), [tW]), (0, mW.useEffect)((() => {
        const WW = cW.current;
        WW && document.activeElement !== WW && WW.value !== String(iW) && (WW.value = String(iW))
      }), [iW]), (0, mW.useEffect)((() => {
        const WW = cW.current;
        if (!WW) return;
        const iW = () => {
          WW.value = String(wW.current)
        };
        return WW.addEventListener("blur", iW), () => {
          WW.removeEventListener("blur", iW)
        }
      }), []);
      const bW = WW => (0, ZW.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${WW>0?"More":"Less"} ${LW}`,
        disabled: WW > 0 ? iW >= NW : iW <= EW,
        onPointerDown: iW => {
          0 === iW.button && (AW(WW), xW(WW))
        },
        onKeyDown: iW => {
          "Enter" !== iW.key && " " !== iW.key || AW(WW)
        },
        onContextMenu: WW => {
          WW.preventDefault()
        },
        children: WW > 0 ? "+" : "\u2212"
      });
      return (0, ZW.jsxs)("div", {
        className: "SmpStepper",
        children: [bW(-1), (0, ZW.jsx)(KW.b, {
          className: "SmpStepperInput",
          domRef: cW,
          defaultValue: String(iW),
          ariaLabel: LW,
          type: "text",
          blurOnEnter: !0,
          onValueChange: WW => {
            const iW = WW.replace(/[^\d]/g, "");
            cW.current && iW !== WW && (cW.current.value = iW), "" !== iW && OW(lW(Number(iW)))
          }
        }), bW(1)]
      })
    }

    function FE(WW) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, WW))) - 1))
    }
    var QE = OW(35231),
      WN = OW(1230);
    const iN = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    WN.q, DW.yc.length;
    new Map;
    var ON = OW(4454);

    function mN(WW, iW) {
      var OW;
      return iW && (null === (OW = WW[iW]) || void 0 === OW ? void 0 : OW.smp) || null
    }

    function EN(WW, iW) {
      const OW = [];
      for (const EW of VE(WW)) {
        var mW;
        const NW = WW[EW];
        (null === (mW = NW.smp) || void 0 === mW ? void 0 : mW.kind) === iW && OW.push({
          key: EW,
          item: NW,
          meta: NW.smp
        })
      }
      return OW
    }

    function NN(WW, iW) {
      var OW;
      return null !== (OW = EN(WW, iW)[0]) && void 0 !== OW ? OW : null
    }
    const PN = "50% 0% 50% 0%",
      LN = [{
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

    function cN(WW) {
      const iW = WW - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: OW,
          suffix: mW
        }
        of LN)
        if (iW >= OW) return `${Math.floor(iW/OW)}${mW}`;
      return "<1s"
    }

    function wN(WW) {
      const iW = WW.map(TE.c),
        OW = [];
      return iW.forEach(((WW, mW) => {
        const EW = function(WW) {
            const iW = WW.match(/\d+/);
            return iW ? Number(iW[0]) : 0
          }(WW),
          NW = mW === iW.length - 1;
        (NW || 1 === EW || 10 === EW || 100 === EW) && OW.push({
          label: WW,
          quantity: EW,
          isAll: NW
        })
      })), OW
    }
    let tN = null;

    function ZN(WW, iW) {
      const OW = iW.trim().toLowerCase();
      if (!OW) return [];
      const mW = WW => {
          if (WW === OW) return 0;
          if (WW.startsWith(OW)) return 1;
          const iW = WW.indexOf(OW);
          return -1 === iW ? -1 : 2 + iW
        },
        EW = [];
      for (const LW of WW) {
        const WW = [mW(LW.lowerLabel), mW(LW.lowerName)].filter((WW => -1 !== WW));
        WW.length && EW.push({
          item: LW,
          rank: Math.min(...WW)
        })
      }
      if (EW.length > 0) return EW.sort(((WW, iW) => WW.rank - iW.rank)).map((WW => WW.item));
      const NW = [...OW],
        PW = WW => {
          let iW = 0;
          for (const OW of NW) {
            if (iW = WW.indexOf(OW, iW), -1 === iW) return !1;
            iW++
          }
          return !0
        };
      return WW.filter((WW => PW(WW.lowerLabel) || PW(WW.lowerName)))
    }

    function xN(WW, iW) {
      var OW;
      return null !== (OW = null === WW || void 0 === WW ? void 0 : WW[iW]) && void 0 !== OW ? OW : iW
    }

    function lN(WW, iW) {
      const OW = WW.userInput;
      return void 0 !== iW && "dropdown" === (null === OW || void 0 === OW ? void 0 : OW.type) && OW.dropdownOptions.map(TE.c).includes(iW) ? iW : function(WW) {
        const iW = WW.userInput;
        if ("dropdown" !== (null === iW || void 0 === iW ? void 0 : iW.type) || 0 === iW.dropdownOptions.length) return null;
        const OW = iW.dropdownOptions.map(TE.c);
        return iW.initialValue && OW.includes(iW.initialValue) ? iW.initialValue : OW[OW.length - 1]
      }(WW)
    }

    function AN(WW) {
      return void 0 === WW ? "" : JSON.stringify(WW)
    }
    const bN = (0, mW.createContext)(null);

    function jN() {
      return (0, mW.useContext)(bN)
    }
    var UN = OW(3714);
    const kN = (0, mW.memo)((function(WW) {
        let {
          name: iW,
          label: OW,
          onPick: mW
        } = WW;
        return (0, ZW.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: OW,
          onClick: () => {
            mW(iW)
          },
          children: [(0, ZW.jsx)(BE, {
            item: iW,
            size: "big"
          }), (0, ZW.jsx)("span", {
            children: OW
          })]
        })
      })),
      sN = (0, mW.memo)((function(WW) {
        let {
          items: iW,
          query: OW,
          onPick: EW
        } = WW;
        const {
          t: NW
        } = (0, PW.B)(), [LW, cW] = (0, mW.useState)(new Set), wW = (0, mW.useMemo)((() => function(WW) {
          const iW = new Map;
          for (const OW of WW) {
            let WW = iW.get(OW.category);
            WW || (WW = [], iW.set(OW.category, WW)), WW.push(OW)
          }
          return [...iN, "other"].filter((WW => iW.has(WW))).map((WW => ({
            category: WW,
            items: iW.get(WW)
          })))
        }(iW)), [iW]), tW = (0, mW.useMemo)((() => ZN(iW, OW).slice(0, 60)), [iW, OW]);
        return OW.trim() ? 0 === tW.length ? (0, ZW.jsx)(GE, {
          title: NW("smpShop:noItemsFound", {
            query: OW.trim()
          }),
          children: NW("smpShop:tryShorterName")
        }) : (0, ZW.jsx)(UN.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [OW],
          children: tW.map((WW => (0, ZW.jsx)(kN, {
            name: WW.name,
            label: WW.label,
            onPick: EW
          }, WW.name)))
        }) : (0, ZW.jsx)(ZW.Fragment, {
          children: wW.map((WW => {
            let {
              category: iW,
              items: OW
            } = WW;
            const mW = LW.has(iW) || OW.length <= 48,
              PW = mW ? OW : OW.slice(0, 48);
            return (0, ZW.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, ZW.jsxs)("h4", {
                children: [NW("other" === iW ? "smpShop:otherItems" : `creativeInventory:${iW}`), !mW && (0, ZW.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    cW(new Set([...LW, iW]))
                  },
                  children: NW("smpShop:showAll", {
                    count: OW.length
                  })
                })]
              }), (0, ZW.jsx)(UN.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: PN,
                observerUpdateDeps: [mW],
                children: PW.map((WW => (0, ZW.jsx)(kN, {
                  name: WW.name,
                  label: WW.label,
                  onPick: EW
                }, WW.name)))
              })]
            }, iW)
          }))
        })
      }));

    function MN(WW, iW) {
      const {
        searched: OW,
        shown: EW,
        searchFor: NW,
        loading: PW
      } = function(WW, iW) {
        var OW;
        const EW = jN(),
          [NW, PW] = (0, mW.useState)(void 0),
          LW = (0, mW.useRef)(void 0),
          cW = (0, mW.useRef)(0),
          wW = (0, mW.useRef)(void 0),
          tW = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.meta.item) && void 0 !== OW ? OW : null,
          ZW = !!WW && EW.isPending(WW.key);
        (0, mW.useEffect)((() => {
          if (!WW || ZW || !iW || void 0 === NW || NW === tW) return;
          const OW = NW === LW.current && EW.gaveUpAt(WW.key) > cW.current && wW.current !== NW;
          (NW !== LW.current || OW) && EW.act(WW.key, null !== NW && void 0 !== NW ? NW : "*", OW) && (OW && (wW.current = NW), LW.current = NW, cW.current = Date.now())
        }), [WW, ZW, iW, NW, tW, EW]);
        const xW = (0, mW.useCallback)((WW => {
            LW.current = void 0, wW.current = void 0, PW(WW)
          }), []),
          lW = void 0 !== NW && NW !== tW && (ZW || LW.current !== NW);
        return {
          searched: tW,
          shown: lW ? NW : tW,
          searchFor: xW,
          loading: lW || ZW || null !== tW && !iW
        }
      }(WW, iW), LW = (0, mW.useMemo)((() => function() {
        var WW;
        let iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const EW = `${(0,ON.f)()}\x1f${iW.join("\x1e")}\x1f${OW.join("\x1e")}\x1f${JSON.stringify(mW)}`;
        if ((null === (WW = tN) || void 0 === WW ? void 0 : WW.key) === EW) return tN.items;
        const NW = new Set(OW),
          PW = new Set,
          LW = [],
          cW = (WW, iW) => {
            var OW;
            if (!WW || PW.has(WW) || NW.has(WW)) return;
            PW.add(WW);
            const EW = null !== (OW = mW[WW]) && void 0 !== OW ? OW : WW;
            LW.push({
              name: WW,
              label: EW,
              lowerLabel: EW.toLowerCase(),
              lowerName: WW.toLowerCase(),
              category: iW
            })
          };
        for (const tW of (0, QE.creativeItemIds)()) {
          var wW;
          (0, QE.itemIsDisabled)(tW, !0, !0, !1) || (0, QE.showOnlyInCreativeSearch)(tW) || cW((0, ON.d)(tW), null !== (wW = (0, QE.creativeCategoryOf)(tW)) && void 0 !== wW ? wW : "other")
        }
        for (const tW of iW) cW(tW, "other");
        return tN = {
          key: EW,
          items: LW
        }, LW
      }(null === WW || void 0 === WW ? void 0 : WW.meta.extra, null === WW || void 0 === WW ? void 0 : WW.meta.excluded, null === WW || void 0 === WW ? void 0 : WW.meta.names)), [null === WW || void 0 === WW ? void 0 : WW.meta.extra, null === WW || void 0 === WW ? void 0 : WW.meta.excluded, null === WW || void 0 === WW ? void 0 : WW.meta.names]), [cW, wW] = (0, mW.useState)(""), [tW, ZW] = (0, mW.useState)(0), [xW, lW] = (0, mW.useState)("recent"), AW = (0, mW.useCallback)((WW => {
        wW(""), ZW((WW => WW + 1)), NW(WW)
      }), [NW]), bW = "browse" === xW || "" !== cW.trim();
      return {
        searched: OW,
        shown: EW,
        searchFor: NW,
        loading: PW,
        catalogue: LW,
        names: null === WW || void 0 === WW ? void 0 : WW.meta.names,
        query: cW,
        setQuery: wW,
        searchBoxKey: tW,
        pickItem: AW,
        setView: lW,
        browsing: bW
      }
    }

    function KN(WW) {
      let {
        browser: iW,
        children: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)(), EW = jN();
      return (0, ZW.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, ZW.jsx)("div", {
          className: "SmpSearch",
          children: (0, ZW.jsx)(KW.b, {
            className: "SmpSearchInput",
            placeholderText: mW("smpShop:searchPlaceholder"),
            defaultValue: iW.query,
            onValueChange: WW => {
              iW.setQuery(WW), iW.searched && WW.trim() && iW.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const WW = ZN(iW.catalogue, iW.query)[0];
              WW ? iW.pickItem(WW.name) : iW.query.trim() && EW.notify(mW("smpShop:noItemsFound", {
                query: iW.query.trim()
              }))
            }
          }, iW.searchBoxKey)
        }), OW]
      })
    }

    function SN(WW) {
      let {
        browser: iW,
        recentLabel: OW,
        children: mW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, ZW.jsx)(aE, {
          options: [{
            value: "recent",
            label: OW
          }, {
            value: "browse",
            label: EW("smpShop:browseItems")
          }],
          value: iW.browsing ? "browse" : "recent",
          onChange: iW.setView,
          ariaLabel: EW("smpShop:show")
        }), !iW.browsing && mW]
      })
    }

    function YN(WW) {
      let {
        item: iW,
        names: OW,
        summary: mW,
        onBack: EW,
        children: NW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, ZW.jsx)(wW.b, {
          className: "SmpBackButton",
          onClick: EW,
          children: LW("general:back")
        }), (0, ZW.jsx)(BE, {
          item: iW,
          size: "big"
        }), (0, ZW.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, ZW.jsx)("b", {
            children: xN(OW, iW)
          }), mW && (0, ZW.jsx)("small", {
            children: mW
          })]
        }), NW]
      })
    }

    function yN(WW) {
      let {
        browser: iW,
        className: OW,
        action: mW,
        above: EW,
        list: PW,
        summary: LW,
        recentLabel: cW,
        listControls: wW,
        onBack: tW
      } = WW;
      return (0, ZW.jsxs)("div", {
        className: NW()("SmpScreen", OW),
        children: [(0, ZW.jsx)(KN, {
          browser: iW,
          children: mW
        }), iW.shown && (0, ZW.jsx)(YN, {
          item: iW.shown,
          names: iW.names,
          summary: !iW.loading && LW,
          onBack: () => {
            null === tW || void 0 === tW || tW(), iW.searchFor(null)
          },
          children: wW
        }), EW, iW.shown ? PW : (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(SN, {
            browser: iW,
            recentLabel: cW,
            children: wW
          }), iW.browsing ? (0, ZW.jsx)(sN, {
            items: iW.catalogue,
            query: iW.query,
            onPick: iW.pickItem
          }) : PW]
        })]
      })
    }

    function TN(WW, iW) {
      const OW = WW.map((WW => {
        let {
          meta: iW
        } = WW;
        return iW.pricePerItem
      }));
      return "min" === iW ? Math.min(...OW) : Math.max(...OW)
    }
    var JN = OW(7583);
    const hN = (0, mW.memo)((function(WW) {
      var iW;
      const {
        t: OW
      } = (0, PW.B)(), mW = null === WW.seller, EW = WW.quantity * WW.pricePerItem;
      return (0, ZW.jsxs)("div", {
        className: WW.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, ZW.jsx)(BE, {
          item: WW.item,
          amount: WW.quantity,
          size: WW.grid ? "big" : "normal",
          tier: WW.tier
        }), (0, ZW.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZW.jsx)("b", {
            children: (0, ZW.jsx)(nE.d, {
              text: null !== (iW = WW.title) && void 0 !== iW ? iW : `${WW.quantity}x ${WW.item}`
            })
          }), (0, ZW.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, ZW.jsx)("span", {
              children: mW ? OW("smpShop:you") : (0, ZW.jsx)(nE.d, {
                text: [{
                  entityName: WW.seller
                }]
              })
            }), (0, ZW.jsx)("span", {
              children: OW("smpShop:timeLeft", {
                time: cN(WW.expiresAt)
              })
            })]
          })]
        }), (0, ZW.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, ZW.jsx)(qE, {
            amount: WW.pricePerItem
          }), (0, ZW.jsx)("small", {
            children: OW("smpShop:each")
          })]
        }), (0, ZW.jsx)(wW.f, {
          className: "SmpBuyButton",
          disabled: mW || !WW.canAfford && !WW.busy,
          loading: WW.busy,
          onClick: () => {
            WW.onBuy(WW.itemKey)
          },
          children: mW ? OW("smpShop:yours") : (0, ZW.jsx)(qE, {
            amount: EW
          })
        })]
      })
    }));

    function HN(WW) {
      let {
        view: iW,
        onChange: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return (0, ZW.jsx)(CE.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: mW("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, ZW.jsx)(LW.c, {
            name: "list"
          }),
          ariaLabel: mW("smpShop:listView")
        }, {
          value: "grid",
          label: (0, ZW.jsx)(LW.c, {
            name: "grid-2"
          }),
          ariaLabel: mW("smpShop:gridView")
        }],
        value: iW,
        onChange: OW
      })
    }

    function nN(WW) {
      let {
        entries: iW,
        view: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)(), EW = jN(), NW = "grid" === OW;
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [!NW && (0, ZW.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, ZW.jsx)("span", {}), (0, ZW.jsx)("span", {
            children: mW("smpShop:columnItem")
          }), (0, ZW.jsx)("span", {
            children: mW("smpShop:columnPriceEach")
          }), (0, ZW.jsx)("span", {
            children: mW("smpShop:columnTotal")
          })]
        }), (0, ZW.jsx)(UN.e, {
          lazyLoadedClassName: NW ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [iW.length],
          children: iW.map((WW => {
            var iW, OW;
            let {
              key: mW,
              item: PW,
              meta: LW
            } = WW;
            const cW = LW.quantity * LW.pricePerItem;
            return (0, ZW.jsx)(hN, {
              itemKey: mW,
              item: LW.item,
              title: PW.customTitle,
              quantity: LW.quantity,
              pricePerItem: LW.pricePerItem,
              seller: LW.seller,
              expiresAt: LW.expiresAt,
              tier: null !== (iW = null === (OW = PW.enchant) || void 0 === OW ? void 0 : OW.tier) && void 0 !== iW ? iW : null,
              busy: EW.isPending(mW) || null !== LW.seller && !1 === PW.canBuy,
              canAfford: EW.canAfford(PW, cW),
              grid: NW,
              onBuy: EW.act
            }, mW)
          }))
        }, OW)]
      })
    }
    const uN = [1, 10, 100],
      oN = [1, 10, 100, 999];

    function dN(WW) {
      var iW, OW, EW, cW, tW, xW, lW, AW, bW, jW;
      const {
        t: UW
      } = (0, PW.B)(), kW = jN(), {
        creator: sW,
        mode: MW
      } = WW, [SW, YW] = (0, mW.useState)(null !== (iW = null === sW || void 0 === sW ? void 0 : sW.meta.item) && void 0 !== iW ? iW : null), [yW, TW] = (0, mW.useState)(1), [JW, hW] = (0, mW.useState)(0), [HW, nW] = (0, mW.useState)(""), [uW, oW] = (0, mW.useState)(0), dW = (0, mW.useRef)(SW), eW = (0, mW.useRef)(!1), [vW, gW] = (0, mW.useState)(!1), DW = null !== (OW = null === sW || void 0 === sW ? void 0 : sW.meta.item) && void 0 !== OW ? OW : null, VW = null !== (EW = null === sW || void 0 === sW ? void 0 : sW.meta.owned) && void 0 !== EW ? EW : 0;
      (0, mW.useEffect)((() => {
        WW.searching || null === DW || DW === dW.current || (dW.current = DW, eW.current = !1, YW(DW), hW(0), TW("list" === MW ? Math.max(1, VW) : 1))
      }), [DW, WW.searching]);
      const pW = !!sW && !!SW && sW.meta.item === SW,
        fW = pW ? sW.meta.owned : null !== (cW = null === (tW = WW.inventory) || void 0 === tW || null === (xW = tW.find((WW => WW.item === SW))) || void 0 === xW ? void 0 : xW.quantity) && void 0 !== cW ? cW : 0,
        CW = "list" === MW ? Math.max(1, fW) : 45954,
        XW = null !== (lW = WW.prices[0]) && void 0 !== lW ? lW : null,
        BW = WW.prices.length ? Math.round(WW.prices.reduce(((WW, iW) => WW + iW), 0) / WW.prices.length) : null,
        qW = null === (AW = WW.inventory) || void 0 === AW || null === (bW = AW.find((WW => WW.item === SW))) || void 0 === bW ? void 0 : bW.sellPrice;
      (0, mW.useEffect)((() => {
        var WW;
        pW && (TW((WW => "list" === MW ? Math.min(Math.max(1, WW), Math.max(1, fW)) : WW)), eW.current || hW(null !== (WW = null !== XW && void 0 !== XW ? XW : BW) && void 0 !== WW ? WW : Math.max(1, null !== qW && void 0 !== qW ? qW : 1)))
      }), [pW, fW, SW, XW, BW]);
      const RW = WW => {
          eW.current = !0, hW(WW)
        },
        GW = iW => {
          var OW, mW, EW;
          dW.current = iW, eW.current = !1, gW(!1), nW(""), oW((WW => WW + 1)), YW(iW), hW(0), TW("list" === MW && null !== (OW = null === (mW = WW.inventory) || void 0 === mW || null === (EW = mW.find((WW => WW.item === iW))) || void 0 === EW ? void 0 : EW.quantity) && void 0 !== OW ? OW : 1), (null === sW || void 0 === sW ? void 0 : sW.meta.item) !== iW && WW.onPickItem(iW)
        },
        IW = yW * JW,
        aW = "list" === MW && null !== sW && void 0 !== sW && sW.meta.fee ? function(WW, iW) {
          const OW = Math.max(0, iW - WW.taxFreeAllowance);
          return Math.ceil(Math.round(OW * WW.rate * 1e6) / 1e6)
        }(sW.meta.fee, IW) : 0,
        rW = !!sW && kW.isPending(sW.key),
        zW = pW && !WW.searching && yW >= 1 && JW >= 1 && ("order" === MW || fW >= yW) && !rW,
        FW = !!SW && !pW && !WW.searching && yW >= 1 && JW >= 1,
        QW = () => {
          zW ? kW.act(sW.key, `${yW}|${JW}`) : FW && (WW.onPickItem(SW), gW(!0))
        };
      (0, mW.useEffect)((() => {
        vW && pW && !WW.searching && (gW(!1), QW())
      }), [vW, pW, WW.searching]);
      const Wi = !!SW && !pW && (WW.searching || vW),
        ii = SW ? xN(WW.names, SW) : "",
        Oi = (0, mW.useMemo)((() => ZN(WW.catalogue, HW).slice(0, 8)), [WW.catalogue, HW]),
        mi = ("list" === MW ? uN.filter((WW => WW < fW)) : oN).map((WW => ({
          value: WW,
          label: String(WW)
        })));
      "list" === MW && fW > 0 && mi.push({
        value: fW,
        label: UW("smpShop:all", {
          count: fW
        })
      });
      const Ei = [];
      return null !== XW && (XW > 1 && Ei.push({
        value: XW - 1,
        label: UW("smpShop:undercut", {
          price: fE(XW - 1)
        })
      }), Ei.push({
        value: XW,
        label: UW("smpShop:lowest", {
          price: fE(XW)
        })
      })), null !== BW && BW !== XW && Ei.push({
        value: BW,
        label: UW("smpShop:average", {
          price: fE(BW)
        })
      }), (0, ZW.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, ZW.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, ZW.jsx)("b", {
            children: UW("list" === MW ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, ZW.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": UW("smpShop:close"),
            onClick: WW.onClose,
            children: (0, ZW.jsx)(LW.c, {
              name: "xmark"
            })
          })]
        }), "list" === MW && (0, ZW.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (jW = WW.inventory) && void 0 !== jW && jW.length ? WW.inventory.map((WW => {
            let {
              item: iW,
              quantity: OW
            } = WW;
            return (0, ZW.jsx)("button", {
              type: "button",
              title: iW,
              className: NW()("SmpPickerSlot", {
                SmpPickerSlotOn: iW === SW
              }),
              onClick: () => {
                GW(iW)
              },
              children: (0, ZW.jsx)(BE, {
                item: iW,
                amount: OW
              })
            }, iW)
          })) : (0, ZW.jsx)("span", {
            className: "SmpMuted",
            children: UW("smpShop:nothingToList")
          })
        }), ("list" === MW || !SW) && (0, ZW.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, ZW.jsx)(KW.b, {
            className: "SmpSearchInput",
            placeholderText: UW("list" === MW ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: HW,
            onValueChange: nW,
            blurOnEnter: !0,
            onEnter: () => {
              Oi[0] && GW(Oi[0].name)
            }
          }, uW), Oi.length > 0 && (0, ZW.jsx)("div", {
            className: "SmpPicker",
            children: Oi.map((WW => {
              let {
                name: iW
              } = WW;
              return (0, ZW.jsx)("button", {
                type: "button",
                title: iW,
                className: NW()("SmpPickerSlot", {
                  SmpPickerSlotOn: iW === SW
                }),
                onClick: () => {
                  GW(iW)
                },
                children: (0, ZW.jsx)(BE, {
                  item: iW
                })
              }, iW)
            }))
          })]
        }), SW && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsxs)("div", {
            className: "SmpPickedName",
            children: [ii, Wi && (0, ZW.jsx)(rE, {})]
          }), (0, ZW.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, ZW.jsxs)("div", {
              className: "SmpField",
              children: [(0, ZW.jsxs)("span", {
                children: [UW("smpShop:quantity"), "list" === MW && pW && (0, ZW.jsx)("small", {
                  children: UW("smpShop:youHave", {
                    count: fW
                  })
                })]
              }), (0, ZW.jsx)(zE, {
                value: yW,
                onChange: TW,
                max: CW,
                label: UW("smpShop:quantity")
              }), (0, ZW.jsx)(aE, {
                options: mi,
                value: yW,
                onChange: TW,
                ariaLabel: UW("smpShop:quantity")
              })]
            }), (0, ZW.jsxs)("div", {
              className: "SmpField",
              children: [(0, ZW.jsx)("span", {
                children: UW("smpShop:pricePerItem")
              }), (0, ZW.jsx)(zE, {
                value: Math.max(1, JW),
                onChange: RW,
                max: 9999999,
                step: FE,
                label: UW("smpShop:pricePerItem")
              }), (0, ZW.jsx)(aE, {
                options: Ei,
                value: JW,
                onChange: RW,
                ariaLabel: UW("smpShop:pricePerItem")
              })]
            })]
          }), "list" === MW && (0, ZW.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, ZW.jsxs)("span", {
              children: [UW("smpShop:youGet"), " ", (0, ZW.jsx)(qE, {
                amount: Math.max(0, IW - aW),
                exact: !0
              })]
            }), (0, ZW.jsx)("small", {
              children: aW > 0 ? UW("smpShop:listingFee", {
                fee: aW.toLocaleString("en-US")
              }) : UW("smpShop:listingRules")
            })]
          }), (0, ZW.jsx)(wW.s, {
            className: "SmpSubmit",
            disabled: !zW && !FW && !rW,
            loading: rW || Wi || pW && WW.searching,
            onClick: QW,
            children: "list" === MW ? UW("smpShop:listButton", {
              count: yW,
              item: ii
            }) : (0, ZW.jsxs)(ZW.Fragment, {
              children: [UW("smpShop:orderButton", {
                count: yW,
                item: ii
              }), " ", JW >= 1 && (0, ZW.jsx)(qE, {
                amount: IW
              })]
            })
          })]
        })]
      })
    }

    function eN() {
      var WW;
      const {
        t: iW
      } = (0, PW.B)(), OW = jN(), EW = null === (WW = OW.shopInfo[OW.categoryKey]) || void 0 === WW ? void 0 : WW.items, NW = NN(EW, "search"), LW = NN(EW, "creator"), cW = EN(EW, "enchantedCreator"), tW = EN(EW, "listing"), xW = NN(EW, "empty"), lW = MN(NW, tW.length > 0 || null !== xW), {
        searched: AW,
        shown: bW,
        loading: jW
      } = lW, [UW, kW] = (0, mW.useState)(!1), [sW, MW] = function() {
        const [WW, iW] = (0, JN.d)("smpMarketView", "list");
        return ["grid" === WW ? "grid" : "list", iW]
      }(), KW = "grid" === sW, SW = (0, mW.useMemo)((() => tW.filter((WW => {
        let {
          meta: iW
        } = WW;
        return null !== iW.seller && iW.item === AW
      })).map((WW => {
        let {
          meta: iW
        } = WW;
        return iW.pricePerItem
      })).sort(((WW, iW) => WW - iW))), [tW, AW]), YW = (0, mW.useMemo)((() => {
        const WW = new Set(lW.catalogue.map((WW => {
          let {
            name: iW
          } = WW;
          return iW
        })));
        return function(WW) {
          for (const iW in WW)
            if ("sell" === WW[iW].smp) return EN(WW[iW].items, "sell").filter((WW => {
              let {
                item: iW
              } = WW;
              return !iW.enchant
            })).map((WW => {
              let {
                meta: iW
              } = WW;
              return {
                item: iW.item,
                quantity: iW.quantity,
                sellPrice: iW.pricePerItem
              }
            }));
          return []
        }(OW.shopInfo).filter((iW => {
          let {
            item: OW
          } = iW;
          return WW.has(OW)
        }))
      }), [OW.shopInfo, lW.catalogue]);
      return (0, ZW.jsx)(yN, {
        browser: lW,
        className: "SmpMarketTab",
        recentLabel: iW("smpShop:recentlyListed"),
        action: (0, ZW.jsx)(wW.s, {
          className: "SmpSellButton",
          onClick: () => {
            kW((WW => !WW))
          },
          children: iW("smpShop:sell")
        }),
        above: UW && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(dN, {
            mode: "list",
            creator: LW,
            inventory: YW,
            catalogue: lW.catalogue,
            names: lW.names,
            searching: jW,
            prices: SW,
            onPickItem: lW.searchFor,
            onClose: () => {
              kW(!1)
            }
          }), cW.length > 0 && (0, ZW.jsx)(vN, {
            entries: cW
          })]
        }),
        listControls: (0, ZW.jsx)(HN, {
          view: sW,
          onChange: MW
        }),
        summary: bW && (tW.length > 0 ? iW(1 === tW.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: tW.length,
          price: fE(TN(tW, "min"))
        }) : iW("smpShop:noOneSelling", {
          item: xN(lW.names, bW)
        })),
        list: jW ? (0, ZW.jsx)(RE, {
          grid: KW
        }) : tW.length > 0 ? (0, ZW.jsx)(nN, {
          entries: tW,
          view: sW
        }) : xW ? (0, ZW.jsx)(IE, {
          entry: xW
        }) : (0, ZW.jsx)(RE, {
          count: 3,
          grid: KW
        })
      })
    }

    function vN(WW) {
      let {
        entries: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), EW = jN(), [NW, LW] = (0, mW.useState)({});
      return (0, ZW.jsx)("div", {
        className: "SmpList",
        children: iW.map((WW => {
          var iW, mW, PW;
          let {
            key: cW,
            item: tW,
            meta: xW
          } = WW;
          const lW = null !== (iW = NW[cW]) && void 0 !== iW ? iW : 1;
          return (0, ZW.jsxs)("div", {
            className: "SmpRow",
            children: [(0, ZW.jsx)(BE, {
              item: xW.item,
              amount: xW.quantity,
              tier: null !== (mW = null === (PW = tW.enchant) || void 0 === PW ? void 0 : PW.tier) && void 0 !== mW ? mW : null
            }), (0, ZW.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, ZW.jsx)("b", {
                children: (0, ZW.jsx)(nE.d, {
                  text: tW.customTitle
                })
              }), (0, ZW.jsx)("small", {
                children: OW("smpShop:enchantedListing")
              })]
            }), (0, ZW.jsx)(zE, {
              value: lW,
              onChange: WW => {
                LW({
                  ...NW,
                  [cW]: WW
                })
              },
              max: 9999999,
              step: FE,
              label: OW("smpShop:pricePerItem")
            }), (0, ZW.jsxs)(wW.s, {
              loading: EW.isPending(cW),
              onClick: () => {
                EW.act(cW, String(lW))
              },
              children: [OW("smpShop:list"), " ", (0, ZW.jsx)(qE, {
                amount: lW
              })]
            })]
          }, cW)
        }))
      })
    }
    const gN = (0, mW.memo)((function(WW) {
      let {
        itemKey: iW,
        item: OW,
        quantity: mW,
        pricePerItem: EW,
        tier: PW,
        selected: LW,
        onSelect: cW
      } = WW;
      return (0, ZW.jsxs)("button", {
        type: "button",
        className: NW()("SmpInventorySlot", {
          SmpInventorySlotOn: LW
        }),
        title: OW,
        onClick: () => {
          cW(iW)
        },
        children: [(0, ZW.jsx)(BE, {
          item: OW,
          amount: mW,
          tier: PW
        }), (0, ZW.jsx)(qE, {
          amount: EW
        })]
      })
    }));

    function DN() {
      var WW;
      const {
        t: iW
      } = (0, PW.B)(), OW = jN(), EW = null === (WW = OW.shopInfo[OW.categoryKey]) || void 0 === WW ? void 0 : WW.items, LW = EN(EW, "sell"), cW = NN(EW, "empty"), [wW, tW] = (0, mW.useState)(null), [xW, lW] = (0, mW.useState)({}), AW = LW.find((WW => {
        let {
          key: iW
        } = WW;
        return iW === wW
      }));
      return 0 === LW.length ? (0, ZW.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZW.jsx)(GE, {
          title: cW ? (0, ZW.jsx)(nE.d, {
            text: cW.item.customTitle
          }) : iW("smpShop:nothingToSell"),
          children: cW && (0, ZW.jsx)(nE.d, {
            text: cW.item.description
          })
        })
      }) : (0, ZW.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, ZW.jsx)("div", {
          className: "SmpInventoryGrid",
          children: LW.map((WW => {
            var iW, OW;
            let {
              key: mW,
              item: EW,
              meta: NW
            } = WW;
            return (0, ZW.jsx)(gN, {
              itemKey: mW,
              item: NW.item,
              quantity: NW.quantity,
              pricePerItem: NW.pricePerItem,
              tier: null !== (iW = null === (OW = EW.enchant) || void 0 === OW ? void 0 : OW.tier) && void 0 !== iW ? iW : null,
              selected: mW === wW,
              onSelect: tW
            }, mW)
          }))
        }), (0, ZW.jsx)("div", {
          className: NW()("SmpSellBar", {
            SmpSellBarIdle: !AW
          }),
          children: AW ? (0, ZW.jsx)(VN, {
            entry: AW,
            choice: lN(AW.item, xW[AW.key]),
            onChoose: WW => {
              lW({
                ...xW,
                [AW.key]: WW
              })
            }
          }) : (0, ZW.jsx)("span", {
            className: "SmpMuted",
            children: iW("smpShop:tapToSell")
          })
        })]
      })
    }

    function VN(WW) {
      var iW, OW, mW, EW;
      let {
        entry: NW,
        choice: LW,
        onChoose: cW
      } = WW;
      const {
        t: tW
      } = (0, PW.B)(), xW = jN(), {
        key: lW,
        item: AW,
        meta: bW
      } = NW, jW = wN("dropdown" === (null === (iW = AW.userInput) || void 0 === iW ? void 0 : iW.type) ? AW.userInput.dropdownOptions : []), UW = null === LW ? 0 : -(0, TE.b)(AW, LW);
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [(0, ZW.jsx)(BE, {
          item: bW.item,
          amount: bW.quantity,
          tier: null !== (OW = null === (mW = AW.enchant) || void 0 === mW ? void 0 : mW.tier) && void 0 !== OW ? OW : null
        }), (0, ZW.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZW.jsx)("b", {
            children: (0, ZW.jsx)(nE.d, {
              text: null !== (EW = AW.customTitle) && void 0 !== EW ? EW : bW.item
            })
          }), (0, ZW.jsx)("small", {
            children: tW("smpShop:sellEach", {
              count: bW.quantity
            })
          })]
        }), (0, ZW.jsx)(aE, {
          options: jW.map((WW => {
            let {
              label: iW,
              quantity: OW,
              isAll: mW
            } = WW;
            return {
              value: iW,
              label: mW ? tW("smpShop:all", {
                count: OW
              }) : String(OW)
            }
          })),
          value: LW,
          onChange: cW,
          ariaLabel: tW("smpShop:quantity")
        }), (0, ZW.jsxs)(wW.s, {
          loading: xW.isPending(lW),
          disabled: null === LW,
          onClick: () => {
            xW.act(lW, LW)
          },
          children: [tW("smpShop:sellButton"), " ", (0, ZW.jsx)(qE, {
            amount: UW
          })]
        })]
      })
    }

    function pN() {
      var WW;
      const {
        t: iW
      } = (0, PW.B)(), OW = jN(), mW = null === (WW = OW.shopInfo[OW.categoryKey]) || void 0 === WW ? void 0 : WW.items, EW = EN(mW, "collect"), NW = EN(mW, "myListing"), LW = (WW, iW) => OW.isPending(WW) || !1 === iW.canBuy;
      return (0, ZW.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, ZW.jsx)("h3", {
          className: "SmpSectionTitle",
          children: iW("smpShop:readyToCollect")
        }), EW.length > 0 ? (0, ZW.jsx)("div", {
          className: "SmpList",
          children: EW.map((WW => {
            var mW, EW;
            let {
              key: NW,
              item: PW,
              meta: cW
            } = WW;
            return (0, ZW.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZW.jsx)(BE, {
                item: "sold" === cW.type ? "Gold Coin" : cW.item,
                amount: "sold" === cW.type ? 0 : cW.quantity,
                tier: null !== (mW = null === (EW = PW.enchant) || void 0 === EW ? void 0 : EW.tier) && void 0 !== mW ? mW : null
              }), (0, ZW.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZW.jsx)("b", {
                  children: (0, ZW.jsx)(nE.d, {
                    text: PW.customTitle
                  })
                }), (0, ZW.jsx)("small", {
                  children: (0, ZW.jsx)(nE.d, {
                    text: PW.description
                  })
                })]
              }), (0, ZW.jsx)(wW.n, {
                loading: LW(NW, PW),
                onClick: () => {
                  OW.act(NW)
                },
                children: iW("smpShop:collect")
              })]
            }, NW)
          }))
        }) : (0, ZW.jsx)(GE, {
          title: iW("smpShop:nothingToCollect"),
          children: iW("smpShop:nothingToCollectHint")
        }), (0, ZW.jsx)("h3", {
          className: "SmpSectionTitle",
          children: iW("smpShop:activeListings", {
            count: NW.length
          })
        }), NW.length > 0 ? (0, ZW.jsx)("div", {
          className: "SmpList",
          children: NW.map((WW => {
            var mW, EW;
            let {
              key: NW,
              item: PW,
              meta: cW
            } = WW;
            return (0, ZW.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZW.jsx)(BE, {
                item: cW.item,
                amount: cW.quantity,
                tier: null !== (mW = null === (EW = PW.enchant) || void 0 === EW ? void 0 : EW.tier) && void 0 !== mW ? mW : null
              }), (0, ZW.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZW.jsx)("b", {
                  children: (0, ZW.jsx)(nE.d, {
                    text: PW.customTitle
                  })
                }), (0, ZW.jsx)("small", {
                  children: iW("smpShop:timeLeft", {
                    time: cN(cW.expiresAt)
                  })
                })]
              }), (0, ZW.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, ZW.jsx)(qE, {
                  amount: cW.pricePerItem
                }), (0, ZW.jsx)("small", {
                  children: iW("smpShop:each")
                })]
              }), (0, ZW.jsx)(wW.O, {
                loading: LW(NW, PW),
                onClick: () => {
                  OW.act(NW)
                },
                children: iW("smpShop:cancel")
              })]
            }, NW)
          }))
        }) : (0, ZW.jsx)(GE, {
          title: iW("smpShop:noActiveListings"),
          children: iW("smpShop:noActiveListingsHint")
        })]
      })
    }

    function fN(WW) {
      let {
        done: iW,
        of: OW
      } = WW;
      return (0, ZW.jsx)("span", {
        className: "SmpProgress",
        children: (0, ZW.jsx)("i", {
          style: {
            width: `${Math.min(100,iW/Math.max(1,OW)*100)}%`
          }
        })
      })
    }

    function CN(WW) {
      var iW, OW, mW;
      let {
        entry: EW,
        choice: NW,
        onChoose: LW
      } = WW;
      const {
        t: cW
      } = (0, PW.B)(), tW = jN(), {
        key: xW,
        item: lW,
        meta: AW
      } = EW, bW = "dropdown" === (null === (iW = lW.userInput) || void 0 === iW ? void 0 : iW.type) ? lW.userInput.dropdownOptions : [], jW = !0 === AW.processing, UW = null !== AW.creator && (AW.owned > 0 || jW), kW = UW && AW.owned > 0 ? wN(bW) : [], sW = null === NW ? 0 : null !== (OW = null === (mW = kW.find((WW => WW.label === NW))) || void 0 === mW ? void 0 : mW.quantity) && void 0 !== OW ? OW : 0;
      return (0, ZW.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, ZW.jsx)(BE, {
          item: AW.item
        }), (0, ZW.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ZW.jsx)("b", {
            children: (0, ZW.jsx)(nE.d, {
              text: lW.customTitle
            })
          }), (0, ZW.jsxs)("small", {
            children: [(0, ZW.jsx)(qE, {
              amount: AW.pricePerItem
            }), " ", cW("smpShop:each"), " \xb7", " ", null === AW.creator ? cW("smpShop:you") : (0, ZW.jsx)(nE.d, {
              text: [{
                entityName: AW.creator
              }]
            })]
          }), (0, ZW.jsx)(fN, {
            done: AW.delivered,
            of: AW.wanted
          })]
        }), UW ? (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(aE, {
            options: kW.map((WW => {
              let {
                label: iW,
                quantity: OW,
                isAll: mW
              } = WW;
              return {
                value: iW,
                label: mW ? cW("smpShop:max", {
                  count: OW
                }) : String(OW)
              }
            })),
            value: NW,
            onChange: LW,
            ariaLabel: cW("smpShop:quantity")
          }), (0, ZW.jsxs)(wW.s, {
            loading: tW.isPending(xW) || jW,
            disabled: null === NW,
            onClick: () => {
              tW.act(xW, NW)
            },
            children: [cW("smpShop:deliver"), " ", (0, ZW.jsx)(qE, {
              amount: sW * AW.pricePerItem
            })]
          })]
        }) : (0, ZW.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === AW.creator ? cW("smpShop:yourOrder") : cW("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function XN() {
      var WW;
      const {
        t: iW
      } = (0, PW.B)(), OW = jN(), EW = null === (WW = OW.shopInfo[OW.categoryKey]) || void 0 === WW ? void 0 : WW.items, NW = NN(EW, "search"), LW = NN(EW, "creator"), cW = EN(EW, "order"), tW = NN(EW, "empty"), xW = MN(NW, cW.length > 0 || null !== tW), [lW, AW] = (0, mW.useState)(!1), [bW, jW] = (0, mW.useState)({});
      return (0, ZW.jsx)(yN, {
        browser: xW,
        recentLabel: iW("smpShop:recentOrders"),
        action: (0, ZW.jsx)(wW.s, {
          onClick: () => {
            AW((WW => !WW))
          },
          children: iW("smpShop:createOrder")
        }),
        above: lW && (0, ZW.jsx)(dN, {
          mode: "order",
          creator: LW,
          catalogue: xW.catalogue,
          names: xW.names,
          searching: xW.loading,
          prices: [],
          onPickItem: xW.searchFor,
          onClose: () => {
            AW(!1)
          }
        }),
        onBack: () => {
          AW(!1)
        },
        summary: cW.length > 0 && iW(1 === cW.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: cW.length,
          price: fE(TN(cW, "max"))
        }),
        list: xW.loading ? (0, ZW.jsx)(RE, {}) : cW.length > 0 ? (0, ZW.jsx)(UN.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: PN,
          observerUpdateDeps: [cW.length],
          children: cW.map((WW => (0, ZW.jsx)(CN, {
            entry: WW,
            choice: lN(WW.item, bW[WW.key]),
            onChoose: iW => {
              jW({
                ...bW,
                [WW.key]: iW
              })
            }
          }, WW.key)))
        }) : tW ? (0, ZW.jsx)(IE, {
          entry: tW
        }) : (0, ZW.jsx)(RE, {
          count: 3
        })
      })
    }

    function BN() {
      var WW;
      const {
        t: iW
      } = (0, PW.B)(), OW = jN(), mW = EN(null === (WW = OW.shopInfo[OW.categoryKey]) || void 0 === WW ? void 0 : WW.items, "myOrder");
      return 0 === mW.length ? (0, ZW.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZW.jsx)(GE, {
          title: iW("smpShop:noOrders"),
          children: iW("smpShop:noOrdersHint")
        })
      }) : (0, ZW.jsx)("div", {
        className: "SmpScreen",
        children: (0, ZW.jsx)("div", {
          className: "SmpList",
          children: mW.map((WW => {
            let {
              key: mW,
              item: EW,
              meta: NW
            } = WW;
            const PW = OW.isPending(mW) || !1 === EW.canBuy;
            return (0, ZW.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ZW.jsx)(BE, {
                item: NW.item,
                amount: NW.collectable
              }), (0, ZW.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ZW.jsx)("b", {
                  children: (0, ZW.jsx)(nE.d, {
                    text: EW.customTitle
                  })
                }), (0, ZW.jsxs)("small", {
                  children: [(0, ZW.jsx)(qE, {
                    amount: NW.pricePerItem
                  }), " ", iW("smpShop:each"), NW.collectable > 0 && ` \xb7 ${iW("smpShop:readyCount",{count:NW.collectable})}`]
                }), (0, ZW.jsx)(fN, {
                  done: NW.delivered,
                  of: NW.wanted
                })]
              }), NW.collectable > 0 ? (0, ZW.jsx)(wW.n, {
                loading: PW,
                onClick: () => {
                  OW.act(mW)
                },
                children: iW("smpShop:collectCount", {
                  count: NW.collectable
                })
              }) : (0, ZW.jsx)(wW.O, {
                loading: PW,
                onClick: () => {
                  OW.act(mW)
                },
                children: iW("smpShop:cancel")
              })]
            }, mW)
          }))
        })
      })
    }
    const qN = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      RN = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function GN(WW, iW) {
      let OW = !1;
      const mW = {};
      for (const EW in WW) iW(EW, WW[EW]) ? mW[EW] = WW[EW] : OW = !0;
      return OW ? mW : WW
    }

    function IN(WW) {
      var iW, OW, EW, cW;
      const {
        show: wW,
        shopInfo: tW,
        selectedCategoryKey: xW
      } = WW, {
        t: lW
      } = (0, PW.B)(), AW = null !== xW && void 0 !== xW ? xW : "", bW = mN(tW, AW), jW = null === (iW = tW[AW]) || void 0 === iW ? void 0 : iW.items, UW = null !== bW, [kW, sW] = (0, mW.useState)({}), [MW, KW] = (0, mW.useState)([]), [SW, YW] = (0, mW.useState)(!1), [yW, TW] = (0, mW.useState)(null), [, JW] = (0, mW.useState)(0), hW = (0, mW.useRef)(0), HW = (0, mW.useRef)({}), nW = (0, mW.useRef)({
        items: jW,
        pending: kW,
        shopInfo: tW,
        active: UW,
        show: wW,
        canAfford: WW.canAfford,
        buy: WW.buy
      });
      nW.current = {
        items: jW,
        pending: kW,
        shopInfo: tW,
        active: UW,
        show: wW,
        canAfford: WW.canAfford,
        buy: WW.buy
      };
      const uW = (0, mW.useCallback)((WW => {
        hW.current++;
        const iW = hW.current;
        KW((OW => [{
          id: iW,
          text: WW
        }, ...OW].slice(0, 8))), TW(iW)
      }), []);
      (0, mW.useEffect)((() => {
        if (null === yW) return;
        const WW = setTimeout((() => {
          TW(null)
        }), 3e3);
        return () => {
          clearTimeout(WW)
        }
      }), [yW]), (0, mW.useEffect)((() => {
        const iW = WW.message;
        if (!iW) return;
        const {
          shopInfo: OW,
          active: mW,
          items: EW
        } = nW.current, NW = null !== iW.categoryKey ? null !== mN(OW, iW.categoryKey) : mW;
        (NW || mW) && uW(iW.text), NW && sW((WW => GN(WW, (WW => {
          var iW, OW;
          return !qN.has(null === EW || void 0 === EW || null === (iW = EW[WW]) || void 0 === iW || null === (OW = iW.smp) || void 0 === OW ? void 0 : OW.kind)
        }))))
      }), [WW.message, uW]), (0, mW.useEffect)((() => {
        sW((WW => GN(WW, ((WW, iW) => AN(null === jW || void 0 === jW ? void 0 : jW[WW]) === iW.snapshot))))
      }), [tW, jW]);
      const oW = Object.keys(kW).length > 0;
      (0, mW.useEffect)((() => {
        if (!oW) return;
        const WW = setInterval((() => {
          const {
            pending: WW,
            items: iW,
            show: OW
          } = nW.current;
          if (!OW) return;
          JW((WW => WW + 1));
          const mW = Date.now(),
            EW = Object.keys(WW).filter((OW => mW - WW[OW].at >= 12e3 && AN(null === iW || void 0 === iW ? void 0 : iW[OW]) === WW[OW].snapshot));
          if (0 === EW.length) return;
          const NW = EW.some((OW => {
            var mW, EW;
            return "search" !== (null === iW || void 0 === iW || null === (mW = iW[OW]) || void 0 === mW || null === (EW = mW.smp) || void 0 === EW ? void 0 : EW.kind) || WW[OW].resend
          }));
          for (const PW of EW) HW.current[PW] = mW;
          sW((WW => GN(WW, (WW => !EW.includes(WW))))), NW && uW(lW("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(WW)
        }
      }), [oW]), (0, mW.useEffect)((() => {
        sW({})
      }), [AW]), (0, mW.useEffect)((() => {
        wW || YW(!1)
      }), [wW]);
      const dW = (0, mW.useCallback)((function(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: mW,
            pending: EW,
            canAfford: NW,
            buy: PW
          } = nW.current, LW = null === mW || void 0 === mW ? void 0 : mW[WW];
          if (!LW || WW in EW || !1 === LW.canBuy) return !1;
          if (!NW(LW, (0, TE.b)(LW, iW))) return !1;
          PW(WW, LW, iW);
          const cW = {
            snapshot: AN(LW),
            at: Date.now(),
            resend: OW
          };
          return nW.current.pending = {
            ...nW.current.pending,
            [WW]: cW
          }, sW((iW => ({
            ...iW,
            [WW]: cW
          }))), !0
        }), []),
        eW = (0, mW.useMemo)((() => ({
          shopInfo: tW,
          categoryKey: AW,
          canAfford: WW.canAfford,
          isPending: WW => WW in kW,
          gaveUpAt: WW => {
            var iW;
            return null !== (iW = HW.current[WW]) && void 0 !== iW ? iW : 0
          },
          act: dW,
          notify: uW
        })), [tW, AW, WW.canAfford, kW, dW, uW]),
        vW = Math.min(...Object.values(kW).map((WW => WW.at))),
        gW = oW && Date.now() - vW > 1500,
        DW = MW.length > 1,
        VW = null !== (OW = null === (EW = tW[AW]) || void 0 === EW ? void 0 : EW.customTitle) && void 0 !== OW ? OW : AW,
        pW = null === (cW = tW[AW]) || void 0 === cW ? void 0 : cW.description;
      let fW = null;
      return "market" === bW ? fW = (0, ZW.jsx)(eN, {}) : "sell" === bW ? fW = (0, ZW.jsx)(DN, {}) : "collect" === bW ? fW = (0, ZW.jsx)(pN, {}) : "orders" === bW ? fW = (0, ZW.jsx)(XN, {}) : "myOrders" === bW && (fW = (0, ZW.jsx)(BN, {})), (0, ZW.jsx)(bN.Provider, {
        value: eW,
        children: (0, ZW.jsx)("div", {
          className: "SmpShopHost",
          hidden: !UW,
          children: (0, ZW.jsxs)("div", {
            className: "SmpShop",
            children: [(0, ZW.jsx)("header", {
              className: "SmpHeader",
              children: (0, ZW.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, ZW.jsxs)("h2", {
                  children: [bW && (0, ZW.jsx)(LW.c, {
                    name: RN[bW]
                  }), lW(VW)]
                }), pW && (0, ZW.jsx)("p", {
                  children: (0, ZW.jsx)(nE.d, {
                    text: pW
                  })
                })]
              })
            }), (0, ZW.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: wW && fW
            }), (0, ZW.jsxs)("button", {
              type: "button",
              className: NW()("SmpStatus", {
                SmpStatusWaiting: oW,
                SmpStatusFresh: !oW && null !== yW,
                SmpStatusHasHistory: DW
              }),
              "aria-live": "polite",
              "aria-expanded": DW ? SW : void 0,
              onClick: () => {
                DW && YW((WW => !WW))
              },
              children: [oW ? (0, ZW.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, ZW.jsx)(rE, {}), lW(gW ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : MW[0] ? (0, ZW.jsx)("span", {
                className: "SmpStatusText",
                children: (0, ZW.jsx)(nE.d, {
                  text: MW[0].text
                })
              }, MW[0].id) : (0, ZW.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: lW("smpShop:ready")
              }), DW && (0, ZW.jsx)("small", {
                children: lW("smpShop:recentMessages", {
                  count: MW.length
                })
              })]
            }), SW && DW && (0, ZW.jsx)("div", {
              className: "SmpStatusHistory",
              children: MW.map((WW => (0, ZW.jsx)("div", {
                children: (0, ZW.jsx)(nE.d, {
                  text: WW.text
                })
              }, WW.id)))
            })]
          })
        })
      })
    }
    var aN = OW(2061),
      rN = OW(35236);
    const zN = "\x1floadout";

    function FN(WW) {
      const iW = [];
      for (const OW in WW) {
        const mW = WW[OW].loadout;
        mW && iW.push({
          categoryKey: OW,
          config: mW
        })
      }
      return iW.sort(((WW, iW) => QN(WW.config) - QN(iW.config)))
    }

    function QN(WW) {
      return "gun" === WW.slot ? 0 : WW.tier
    }

    function WP(WW) {
      const iW = [];
      for (const OW of VE(WW)) WW[OW].loadout ? iW.includes(zN) || iW.push(zN) : iW.push(OW);
      return iW
    }

    function iP(WW, iW) {
      const OW = [];
      for (const mW in WW) {
        const EW = WW[mW].loadout;
        (null === EW || void 0 === EW ? void 0 : EW.kind) === iW && OW.push({
          key: mW,
          item: WW[mW],
          meta: EW
        })
      }
      return OW.sort(((WW, iW) => {
        const OW = mP(WW.meta) - mP(iW.meta);
        return 0 !== OW ? OW : WW.meta.free !== iW.meta.free ? WW.meta.free ? -1 : 1 : WW.key.localeCompare(iW.key)
      }))
    }
    const OP = ["assaultRifle", "battleRifle", "smg", "shotgun", "marksman", "sniper", "machineGun", "pistol", "machinePistol"];

    function mP(WW) {
      return "gun" === WW.kind ? OP.indexOf(WW.gunClass) : 0
    }
    const EP = ["damage", "fireRate", "accuracy"];

    function NP(WW, iW) {
      var OW, mW, EW;
      const NW = rN.c[WW];
      if (!NW) return null;
      const PW = {
        ...NW,
        ...iW
      };
      return {
        damage: PW.damage * (null !== (OW = PW.shotPelletCount) && void 0 !== OW ? OW : 1),
        fireRate: PP(PW.fireRate, null !== (mW = PW.burstCount) && void 0 !== mW ? mW : 1, null !== (EW = PW.burstDelay) && void 0 !== EW ? EW : 0),
        accuracy: -(PW.altInaccuracyStanding + PW.altInaccuracyFromShot),
        clipSize: PW.clipSize
      }
    }

    function PP(WW, iW, OW) {
      return 6e4 * iW / (6e4 / WW + (iW - 1) * OW)
    }

    function LP(WW, iW, OW, mW) {
      if ("accuracy" !== WW) return OW <= 0 ? 1 : iW / OW;
      const EW = Math.sqrt(-mW) - Math.sqrt(-OW);
      return EW <= 0 ? 1 : 1 - (Math.sqrt(-iW) - Math.sqrt(-OW)) / EW * .94
    }

    function cP(WW) {
      let {
        iconName: iW
      } = WW;
      return kW.gameBridge.lookup("isItemName", iW) ? (0, ZW.jsx)(HE.b, {
        itemName: iW,
        amount: 1
      }) : (0, ZW.jsx)(LW.c, {
        name: iW,
        className: "2x"
      })
    }
    const wP = {
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

    function tP(WW) {
      let {
        entry: iW,
        stats: OW,
        bars: mW,
        compared: EW,
        buy: cW,
        canAfford: wW,
        currency: tW
      } = WW;
      const {
        t: xW
      } = (0, PW.B)(), {
        meta: lW
      } = iW;
      return (0, ZW.jsxs)("div", {
        className: NW()("LoadoutCard", "LoadoutGunCard", {
          LoadoutCardEquipped: lW.equipped,
          LoadoutCardLocked: !lW.unlocked
        }),
        children: [!lW.unlocked && (0, ZW.jsx)(LW.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, ZW.jsx)("div", {
          className: "LoadoutGunArt",
          children: (0, ZW.jsx)(HE.b, {
            itemName: lW.gun,
            amount: 0,
            gunTransform: "none"
          })
        }), (0, ZW.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, ZW.jsx)("b", {
            children: iW.key
          }), (0, ZW.jsxs)("small", {
            children: [xW(wP[lW.gunClass]), OW && (0, ZW.jsxs)(ZW.Fragment, {
              children: [" \xb7 ", xW("loadoutShop:rounds", {
                count: OW.clipSize
              })]
            })]
          })]
        }), OW && mW && (0, ZW.jsx)("div", {
          className: "LoadoutStats",
          children: EP.map((WW => {
            const iW = EW ? function(WW, iW) {
              const OW = Math.max(Math.abs(WW), Math.abs(iW), 1);
              return Math.abs(WW - iW) / OW < .05 ? null : WW > iW ? "better" : "worse"
            }(OW[WW], EW[WW]) : null;
            return (0, ZW.jsxs)("div", {
              className: "LoadoutStat",
              children: [(0, ZW.jsx)("span", {
                children: xW(`loadoutShop:${WW}`)
              }), (0, ZW.jsx)("div", {
                className: "LoadoutBar",
                children: (0, ZW.jsx)("i", {
                  className: NW()({
                    LoadoutBarBetter: "better" === iW,
                    LoadoutBarWorse: "worse" === iW
                  }),
                  style: {
                    width: 100 * mW[WW] + "%"
                  }
                })
              })]
            }, WW)
          }))
        }), (0, ZW.jsx)(xP, {
          entry: iW,
          buy: cW,
          canAfford: wW,
          currency: tW
        })]
      })
    }

    function ZP(WW) {
      let {
        entry: iW,
        buy: OW,
        canAfford: mW,
        currency: EW
      } = WW;
      const {
        meta: PW
      } = iW;
      return (0, ZW.jsxs)("div", {
        className: NW()("LoadoutCard", "LoadoutPerkCard", {
          LoadoutCardEquipped: PW.equipped,
          LoadoutCardLocked: !PW.unlocked
        }),
        children: [!PW.unlocked && (0, ZW.jsx)(LW.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, ZW.jsx)("div", {
          className: "LoadoutPerkIcon",
          children: (0, ZW.jsx)(LW.c, {
            name: PW.icon
          })
        }), (0, ZW.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, ZW.jsx)("b", {
            children: iW.key
          }), (0, ZW.jsx)("small", {
            children: PW.description
          })]
        }), (0, ZW.jsx)(xP, {
          entry: iW,
          buy: OW,
          canAfford: mW,
          currency: EW
        })]
      })
    }

    function xP(WW) {
      let {
        entry: iW,
        buy: OW,
        canAfford: mW,
        currency: EW
      } = WW;
      const {
        t: cW
      } = (0, PW.B)(), {
        meta: tW,
        item: xW
      } = iW, lW = () => {
        OW(iW.key, xW)
      };
      return (0, ZW.jsxs)("div", {
        className: "LoadoutCardFoot",
        children: [tW.equipped && (0, ZW.jsxs)("span", {
          className: "LoadoutCardState LoadoutCardStateEquipped",
          children: [(0, ZW.jsx)(LW.c, {
            name: "check"
          }), cW("loadoutShop:equipped")]
        }), tW.unlocked && !tW.equipped && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)("span", {
            className: "LoadoutCardState",
            children: tW.free ? cW("loadoutShop:free") : cW("loadoutShop:owned")
          }), (0, ZW.jsx)(wW.f, {
            className: "LoadoutCardButton",
            disabled: !mW,
            onClick: lW,
            children: cW("loadoutShop:equip")
          })]
        }), !tW.unlocked && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsxs)("span", {
            className: NW()("LoadoutPrice", {
              LoadoutPriceShort: !mW
            }),
            children: [EW && (0, ZW.jsx)("span", {
              className: "LoadoutPriceIcon",
              style: {
                color: EW.iconColour
              },
              children: (0, ZW.jsx)(cP, {
                iconName: EW.icon
              })
            }), xW.cost]
          }), (0, ZW.jsx)(wW.n, {
            className: "LoadoutCardButton",
            disabled: !mW,
            onClick: lW,
            children: cW("loadoutShop:unlock")
          })]
        })]
      })
    }

    function lP(WW) {
      let {
        shopInfo: iW,
        selectedCategoryKey: OW,
        selectCategory: EW,
        buy: NW,
        canAfford: LW,
        currencyAmounts: cW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)(), tW = FN(iW), {
        loadout: xW,
        items: lW
      } = iW[OW], AW = WW => LW(WW, (0, TE.b)(WW, null)), bW = {
        buy: (WW, iW) => {
          AW(iW) && NW(WW, iW)
        },
        affordable: AW,
        currencyAmounts: cW
      };
      return (0, ZW.jsx)("div", {
        className: "LoadoutShopHost",
        children: (0, ZW.jsxs)("div", {
          className: "LoadoutShop",
          children: [(0, ZW.jsxs)("header", {
            className: "LoadoutHeader",
            children: [(0, ZW.jsx)("h2", {
              children: wW("loadoutShop:title")
            }), (0, ZW.jsx)("p", {
              children: wW("loadoutShop:subtitle")
            })]
          }), (0, ZW.jsx)("nav", {
            className: "LoadoutSlots",
            "data-pad-tabs": "3",
            children: tW.map((WW => {
              var NW, PW;
              const {
                config: LW
              } = WW;
              return (0, ZW.jsxs)(mW.Fragment, {
                children: ["perk" === LW.slot && (0, ZW.jsx)(bP, {
                  points: LW.points,
                  reached: (null !== (NW = null === cW || void 0 === cW || null === (PW = cW[LW.pointsCurrency]) || void 0 === PW ? void 0 : PW.amount) && void 0 !== NW ? NW : 0) >= LW.points
                }), (0, ZW.jsx)(jP, {
                  slot: WW,
                  items: iW[WW.categoryKey].items,
                  selected: WW.categoryKey === OW,
                  onClick: () => {
                    EW(WW.categoryKey)
                  }
                })]
              }, WW.categoryKey)
            }))
          }), (0, ZW.jsxs)("main", {
            className: "LoadoutPicker",
            "data-pad-initial-area": !0,
            children: ["gun" === (null === xW || void 0 === xW ? void 0 : xW.slot) && (0, ZW.jsx)(kP, {
              items: lW,
              ...bW
            }), "perk" === (null === xW || void 0 === xW ? void 0 : xW.slot) && (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsx)("p", {
                className: "LoadoutPickerNote",
                children: wW("loadoutShop:tierPicker", {
                  tier: xW.tier,
                  points: xW.points
                })
              }), (0, ZW.jsx)("div", {
                className: "LoadoutPerkGrid",
                children: iP(lW, "perk").map((WW => (0, ZW.jsx)(ZP, {
                  entry: WW,
                  buy: bW.buy,
                  canAfford: AW(WW.item),
                  currency: AP(cW, WW.item)
                }, WW.key)))
              })]
            })]
          })]
        })
      })
    }

    function AP(WW, iW) {
      return iW.currency ? null === WW || void 0 === WW ? void 0 : WW[iW.currency] : void 0
    }

    function bP(WW) {
      let {
        points: iW,
        reached: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: NW()("LoadoutStep", {
          LoadoutStepReached: OW
        }),
        title: mW("loadoutShop:pointsTooltip", {
          points: iW
        }),
        children: [(0, ZW.jsx)(LW.c, {
          name: "arrow-right",
          className: "LoadoutStepArrow"
        }), (0, ZW.jsxs)("span", {
          children: [OW && (0, ZW.jsx)(LW.c, {
            name: "check"
          }), mW("loadoutShop:points", {
            points: iW
          })]
        })]
      })
    }

    function jP(WW) {
      let {
        slot: iW,
        items: OW,
        selected: mW,
        onClick: EW
      } = WW;
      const {
        t: cW
      } = (0, PW.B)(), {
        config: wW
      } = iW, tW = "gun" === wW.slot ? UP(iP(OW, "gun")) : UP(iP(OW, "perk")), xW = "gun" === wW.slot ? cW("loadoutShop:gun") : cW("loadoutShop:tier", {
        tier: wW.tier
      });
      return (0, ZW.jsxs)("button", {
        type: "button",
        className: NW()("LoadoutSlot", {
          LoadoutSlotSelected: mW,
          LoadoutSlotEmpty: !tW
        }),
        "data-pad-tab": !0,
        "data-pad-selected": mW ? "true" : void 0,
        "aria-pressed": mW,
        onClick: EW,
        children: [(0, ZW.jsxs)("span", {
          className: "LoadoutSlotArt",
          children: ["gun" === (null === tW || void 0 === tW ? void 0 : tW.meta.kind) && (0, ZW.jsx)(HE.b, {
            itemName: tW.meta.gun,
            amount: 0,
            gunTransform: "none"
          }), "perk" === (null === tW || void 0 === tW ? void 0 : tW.meta.kind) && (0, ZW.jsx)(LW.c, {
            name: tW.meta.icon
          }), !tW && (0, ZW.jsx)(LW.c, {
            name: "plus"
          })]
        }), (0, ZW.jsxs)("span", {
          className: "LoadoutSlotText",
          children: [(0, ZW.jsx)("small", {
            children: xW
          }), (0, ZW.jsx)("b", {
            children: tW ? tW.key : cW("gun" === wW.slot ? "loadoutShop:noGun" : "loadoutShop:noPerk")
          })]
        })]
      })
    }

    function UP(WW) {
      var iW;
      return null !== (iW = WW.find((WW => WW.meta.equipped))) && void 0 !== iW ? iW : null
    }

    function kP(WW) {
      let {
        items: iW,
        buy: OW,
        affordable: mW,
        currencyAmounts: EW
      } = WW;
      const {
        t: NW
      } = (0, PW.B)(), LW = iP(iW, "gun"), cW = UP(LW), wW = {};
      for (const {
          meta: PW
        }
        of LW) {
        const WW = aN.d.get(`${PW.gun}GunStats`),
          iW = NP(PW.gun, WW);
        iW && (wW[PW.gun] = iW)
      }
      const tW = function(WW) {
          const iW = {},
            OW = {};
          for (const EW of EP) {
            iW[EW] = -1 / 0, OW[EW] = 1 / 0;
            for (const mW in WW) iW[EW] = Math.max(iW[EW], WW[mW][EW]), OW[EW] = Math.min(OW[EW], WW[mW][EW])
          }
          const mW = {};
          for (const EW in WW) {
            mW[EW] = {};
            for (const NW of EP) mW[EW][NW] = Math.max(.06, LP(NW, WW[EW][NW], iW[NW], OW[NW]))
          }
          return mW
        }(wW),
        xW = cW ? wW[cW.meta.gun] : void 0,
        [lW, AW] = NW("loadoutShop:comparing", {
          gun: "\x01"
        }).split("\x01");
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [cW && (0, ZW.jsxs)("p", {
          className: "LoadoutPickerNote",
          children: [lW, (0, ZW.jsx)("b", {
            className: "LoadoutGold",
            children: cW.key
          }), AW]
        }), (0, ZW.jsx)("div", {
          className: "LoadoutGunGrid",
          children: LW.map((WW => (0, ZW.jsx)(tP, {
            entry: WW,
            stats: wW[WW.meta.gun],
            bars: tW[WW.meta.gun],
            compared: WW.meta.equipped ? void 0 : xW,
            buy: OW,
            canAfford: mW(WW.item),
            currency: AP(EW, WW.item)
          }, WW.key)))
        })]
      })
    }
    var sP = OW(35243),
      MP = OW(35240);

    function KP(WW) {
      let {
        currency: iW,
        info: OW,
        smaller: EW,
        show: PW
      } = WW;
      const LW = (0, mW.useRef)(null);
      (0, MP.c)(iW, LW, PW);
      const cW = (0, MP.f)(iW, OW.amount);
      return (0, ZW.jsxs)("div", {
        className: NW()("ShopCurrencyDiv", {
          SmallText: EW
        }),
        children: [(0, ZW.jsxs)("div", {
          className: "ShopCurrencyDetails",
          children: [(0, ZW.jsx)("div", {
            ref: LW,
            className: "ShopCurrencyAmtIcon",
            style: {
              color: OW.iconColour
            },
            children: (0, ZW.jsx)(cP, {
              iconName: OW.icon
            })
          }), "\xa0", (0, sP.e)(cW, 6)]
        }), void 0 !== OW.subtext && OW.subtext.length > 0 && (0, ZW.jsx)("div", {
          className: "ShopCurrencySubtext",
          children: (0, ZW.jsx)(nE.d, {
            text: OW.subtext
          })
        })]
      })
    }
    class SP {
      constructor(WW) {
        this.info = WW
      }
      static fromShopInfo(WW) {
        const iW = {};
        for (const OW in WW) {
          const mW = !0 === WW[OW].redDot && !0 !== WW[OW].forceRemoveRedDot;
          iW[OW] = {
            redDot: mW,
            items: {}
          };
          for (const EW in WW[OW].items) {
            const mW = WW[OW].items[EW],
              NW = !0 === mW.redDot && !0 !== mW.forceRemoveRedDot;
            iW[OW].items[EW] = {
              redDot: NW
            }
          }
        }
        return new SP(iW)
      }
      anyCategoryHasRedDots() {
        for (const WW in this.info)
          if (this.categoryHasRedDot(WW)) return !0;
        return !1
      }
      doesCategoryExist(WW) {
        return !(0, nO.K)(this.info[WW])
      }
      categoryHasRedDot(WW) {
        return !0 === this.info[WW].redDot
      }
      updateCategoryRedDot(WW, iW) {
        this.info[WW].redDot = iW
      }
      doesItemExist(WW, iW) {
        return this.doesCategoryExist(WW) && !(0, nO.K)(this.info[WW].items[iW])
      }
      itemHasRedDot(WW, iW) {
        return !0 === this.info[WW].items[iW].redDot
      }
      updateItemRedDot(WW, iW, OW) {
        this.info[WW].items[iW].redDot = OW
      }
      shallowCopy() {
        return new SP(this.info)
      }
    }

    function YP(WW, iW) {
      return `${WW}\x1f${iW}`
    }

    function yP(WW, iW, OW) {
      const mW = SP.fromShopInfo(WW);
      for (const LW in WW) {
        var EW;
        if (OW.doesCategoryExist(LW)) {
          (null === (EW = iW[LW]) || void 0 === EW ? void 0 : EW.redDot) === WW[LW].redDot && mW.updateCategoryRedDot(LW, OW.categoryHasRedDot(LW));
          for (const EW in WW[LW].items) {
            var NW, PW;
            OW.doesItemExist(LW, EW) && ((null === (NW = iW[LW]) || void 0 === NW || null === (PW = NW.items[EW]) || void 0 === PW ? void 0 : PW.redDot) === WW[LW].items[EW].redDot && mW.updateItemRedDot(LW, EW, OW.itemHasRedDot(LW, EW)))
          }
        }
      }
      return mW
    }

    function TP(WW, iW, OW, mW) {
      if (null !== iW && !mW) return iW;
      if (null === OW || !WW[OW]) {
        const iW = VE(WW);
        return iW.length > 0 ? iW[0] : null
      }
      return OW
    }

    function JP(WW, iW, OW) {
      if ((0, nO.K)(WW) || 0 === Object.keys(WW).length) return {
        shopInfo: {},
        redDotInfo: SP.fromShopInfo({}),
        selectedCategoryKey: null
      };
      const {
        shopInfo: mW,
        autoSelectCategory: EW
      } = function(WW) {
        const iW = hW.siteUsedData[hW.siteUsed].adConfig.showRewardedAds,
          OW = {};
        let mW = null;
        for (const EW in WW) {
          const NW = WW[EW],
            PW = {};
          let LW = !1;
          for (const WW in NW.items) {
            const OW = NW.items[WW];
            (0, TE.g)(OW, iW) && (PW[WW] = OW, LW = !0)
          }
          LW && (OW[EW] = {
            ...NW,
            items: PW
          }, !0 === NW.autoSelectCategory && (mW = EW))
        }
        return {
          shopInfo: OW,
          autoSelectCategory: mW
        }
      }(WW);
      return {
        shopInfo: mW,
        redDotInfo: yP(mW, iW.shopInfo, iW.redDotInfo),
        selectedCategoryKey: TP(mW, EW, iW.selectedCategoryKey, OW)
      }
    }

    function hP(WW, iW, OW, mW, EW) {
      const NW = {},
        PW = (WW, iW, PW, LW) => {
          var cW, wW;
          const tW = YP(WW, iW),
            ZW = null !== (cW = OW[tW]) && void 0 !== cW ? cW : OW[iW];
          if (null !== (wW = LW.userInput) && void 0 !== wW && wW.type) switch (LW.userInput.type) {
            case "dropdown": {
              var xW;
              const WW = !ZW || !LW.userInput.dropdownOptions.some((WW => (0, TE.c)(WW) === ZW)),
                iW = LW.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === PW || void 0 === PW || null === (xW = PW.userInput) || void 0 === xW ? void 0 : xW.type) || JSON.stringify(PW.userInput.dropdownOptions) !== JSON.stringify(LW.userInput.dropdownOptions)),
                OW = LW.userInput,
                mW = !(0, nO.K)(OW.initialValue) && OW.dropdownOptions.some((WW => (0, TE.c)(WW) === OW.initialValue));
              var lW;
              if (WW || iW)
                if (mW) NW[tW] = null !== (lW = LW.userInput.initialValue) && void 0 !== lW ? lW : null;
                else LW.userInput.dropdownOptions.length > 0 ? NW[tW] = (0, TE.c)(LW.userInput.dropdownOptions[0]) : NW[tW] = null;
              else NW[tW] = ZW;
              return
            }
            case "text":
            case "number":
              var AW, bW, jW;
              if ((null === PW || void 0 === PW ? void 0 : PW.userInput) !== LW.userInput) NW[tW] = null !== (AW = null !== (bW = LW.userInput.initialValue) && void 0 !== bW ? bW : ZW) && void 0 !== AW ? AW : "";
              else NW[tW] = null !== (jW = null !== ZW && void 0 !== ZW ? ZW : LW.userInput.initialValue) && void 0 !== jW ? jW : "";
              return;
            case "color":
              var UW, kW, sW;
              if ((null === PW || void 0 === PW ? void 0 : PW.userInput) !== LW.userInput) NW[tW] = null !== (UW = null !== (kW = LW.userInput.initialValue) && void 0 !== kW ? kW : ZW) && void 0 !== UW ? UW : "#000000";
              else NW[tW] = null !== (sW = null !== ZW && void 0 !== ZW ? ZW : LW.userInput.initialValue) && void 0 !== sW ? sW : "#000000";
              return;
            case "player": {
              const WW = (0, TE.d)(mW, EW, LW.userInput);
              return void(ZW && WW.includes(ZW) ? NW[tW] = ZW : NW[tW] = WW.length > 0 ? WW[0] : null)
            }
          }
        };
      for (const cW in WW)
        for (const OW in WW[cW].items) {
          var LW;
          const mW = WW[cW].items[OW];
          PW(cW, OW, null === (LW = iW[cW]) || void 0 === LW ? void 0 : LW.items[OW], mW)
        }
      return NW
    }

    function HP(WW, iW) {
      return !(0, nO.K)(iW) && !(0, nO.K)(WW) && iW in WW
    }
    const nP = (0, mW.memo)((function(WW) {
      var iW, OW;
      let {
        show: EW
      } = WW;
      const PW = (0, zi.f)("players", gP),
        LW = (0, zi.f)("players", DP),
        tW = (0, gE.c)(),
        [lW, AW] = (0, mW.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: SP.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        jW = (0, mW.useRef)(""),
        UW = (0, mW.useRef)(null),
        sW = (0, mW.useRef)(null),
        MW = (0, mW.useRef)(0),
        KW = (0, mW.useRef)(void 0),
        SW = (0, mW.useRef)(null),
        YW = (0, mW.useRef)(lW),
        TW = (0, mW.useRef)(null),
        JW = lW.redDotInfo.anyCategoryHasRedDots(),
        [hW, HW] = (0, mW.useState)(null),
        nW = (0, mW.useRef)(!1);
      let uW = !1,
        oW = 0,
        dW = 0;
      if (lW.currencyAmounts) {
        for (const WW in lW.currencyAmounts) {
          var eW;
          const iW = lW.currencyAmounts[WW];
          iW.hidden || (oW++, (null === (eW = iW.subtext) || void 0 === eW ? void 0 : eW.length) > 0 && dW++)
        }
        uW = oW + dW > 4
      }(0, mW.useEffect)((() => {
        uO.l.iZ("showShopIconRedDot", JW, !0)
      }), [JW]), (0, mW.useEffect)((() => {
        kW.gameBridge.send("setShopOpen", EW), EW || (clearTimeout(KW.current), AW((WW => WW.awaitingPurchase ? {
          ...WW,
          awaitingPurchase: !1
        } : WW)))
      }), [EW]), (0, mW.useEffect)((() => () => {
        kW.gameBridge.send("setShopOpen", !1), clearTimeout(KW.current)
      }), []), (0, mW.useEffect)((() => {
        YW.current = lW
      }), [lW]), (0, mW.useEffect)((() => {
        if (null === hW) return;
        return (0, eE.e)("pointerdown", (WW => {
          const iW = WW.target;
          null !== iW && void 0 !== iW && iW.closest(".ShopItem") || HW(null)
        }))
      }), [hW]);
      const vW = WW => {
          AW((iW => ({
            ...iW,
            ...WW
          })))
        },
        gW = WW => {
          var iW;
          clearTimeout(null === (iW = lW.onBoughtInfo) || void 0 === iW ? void 0 : iW.timeout);
          const OW = setTimeout((() => {
            vW({
              onBoughtInfo: null
            })
          }), 3e3);
          jW.current = WW, vW({
            onBoughtInfo: {
              text: WW,
              timeout: OW,
              categoryKey: UW.current
            }
          })
        },
        VW = WW => {
          const iW = JP(WW, lW, !0);
          return 0 === Object.keys(iW.shopInfo).length && yW.d.set({
            openEverythingMenuName: null
          }), {
            ...iW,
            userInputsPerItem: hP(iW.shopInfo, lW.shopInfo, lW.userInputsPerItem, PW, LW)
          }
        },
        pW = () => {
          var WW;
          return null !== (WW = TW.current) && void 0 !== WW ? WW : lW
        },
        fW = WW => {
          const iW = pW(),
            OW = JP(WW, iW, !1);
          TW.current = OW;
          const mW = OW.redDotInfo.anyCategoryHasRedDots();
          mW !== iW.redDotInfo.anyCategoryHasRedDots() && uO.l.iZ("showShopIconRedDot", mW, !0)
        },
        CW = () => {
          const WW = TW.current;
          null !== WW && (TW.current = null, AW((iW => {
            const OW = hP(WW.shopInfo, iW.shopInfo, iW.userInputsPerItem, PW, LW);
            return {
              ...iW,
              ...WW,
              userInputsPerItem: OW
            }
          })))
        },
        XW = (WW, iW, OW) => {
          const mW = lW.selectedCategoryKey,
            EW = YP(mW, WW),
            NW = null !== OW && void 0 !== OW ? OW : lW.userInputsPerItem[EW],
            PW = {
              categoryKey: mW,
              itemKey: WW,
              userInput: NW
            };
          if (UW.current = mW, iW.isRewardedAd) {
            if (Date.now() - MW.current < 5e3) return;
            (0, ui.Y)((() => {
              var OW, mW, NW;
              console.log("bought rewarded ad");
              const LW = TW.current,
                cW = (null !== LW && void 0 !== LW ? LW : YW.current).shopInfo,
                wW = PW.categoryKey ? null === (OW = cW[PW.categoryKey]) || void 0 === OW ? void 0 : OW.items[WW] : null;
              if (!wW || !wW.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              if (!((null === (mW = iW.userInput) || void 0 === mW ? void 0 : mW.type) === (null === wW || void 0 === wW || null === (NW = wW.userInput) || void 0 === NW ? void 0 : NW.type))) return void console.warn("Shop item input type changed, early out");
              const {
                shopInfo: tW,
                userInputsPerItem: ZW
              } = YW.current, xW = RW.current;
              PW.userInput = (null === LW ? ZW : hP(LW.shopInfo, tW, ZW, xW.playerIds, xW.localPlayerId))[EW], kW.gameBridge.send("buyShopItem", PW), iW.onBoughtMessage && gW(iW.onBoughtMessage)
            })), MW.current = Date.now()
          } else {
            kW.gameBridge.send("buyShopItem", PW), vW({
              awaitingPurchase: !0
            }), clearTimeout(KW.current), KW.current = setTimeout((() => {
              SW.current = null, vW({
                awaitingPurchase: !1
              })
            }), 1e3);
            const WW = (0, TE.b)(iW, NW);
            if (SW.current = null, !isNaN(WW) && HP(lW.currencyAmounts, iW.currency)) {
              0 !== WW && (SW.current = {
                currency: iW.currency,
                amountBefore: lW.currencyAmounts[iW.currency].amount
              });
              const OW = {
                ...lW.currencyAmounts
              };
              OW[iW.currency].amount -= WW, vW({
                currencyAmounts: OW
              })
            }
            iW.onBoughtMessage && gW(iW.onBoughtMessage)
          }
        },
        BW = (WW, iW) => {
          if (null === iW || !WW.shopInfo[iW]) return WW;
          let OW = WW.redDotInfo;
          return OW.categoryHasRedDot(iW) && (OW.updateCategoryRedDot(iW, !1), OW = OW.shallowCopy()), {
            ...WW,
            selectedCategoryKey: iW,
            redDotInfo: OW
          }
        },
        qW = WW => {
          CW(), AW((iW => BW(iW, WW)))
        };
      (0, NO.e)(vE.i, (() => {
        CW(), AW((WW => {
          const iW = (0, vE.k)(VE(WW.shopInfo), WW.selectedCategoryKey, (iW => (0, vE.g)(WW.shopInfo[iW].items)));
          return iW === WW.selectedCategoryKey ? WW : BW(WW, iW)
        }))
      })), (0, NO.e)("showShopFromServer", (WW => {
        let {
          toggle: iW,
          ni: OW
        } = WW;
        const mW = 0 !== Object.keys(pW().shopInfo).length;
        OW && qW(OW), !mW || iW && EW ? yW.d.set({
          openEverythingMenuName: null
        }) : yW.d.set({
          openEverythingMenuName: oi.m.SHOP
        })
      })), (0, NO.e)("closeShopOnDamaged", (() => {
        EW && yW.d.set({
          openEverythingMenuName: null
        })
      })), (0, NO.e)("overShopInfo", (WW => {
        gW(WW)
      })), (0, bW.d)("currencyAmounts", (WW => {
        var iW;
        const OW = SW.current;
        OW && (null === WW || void 0 === WW || null === (iW = WW[OW.currency]) || void 0 === iW ? void 0 : iW.amount) === OW.amountBefore ? vW({
          currencyAmounts: WW
        }) : (SW.current = null, vW({
          currencyAmounts: WW,
          awaitingPurchase: !1
        }))
      })), (0, bW.d)("shopInfo", (WW => {
        EW ? vW({
          ...VW(WW),
          awaitingPurchase: !1
        }) : fW(WW)
      })), (0, mW.useLayoutEffect)((() => {
        EW && CW()
      }), [EW]);
      const RW = (0, mW.useRef)({
        playerIds: PW,
        localPlayerId: LW
      });
      (0, mW.useEffect)((() => {
        RW.current.playerIds === PW && RW.current.localPlayerId === LW || (RW.current = {
          playerIds: PW,
          localPlayerId: LW
        }, EW ? AW((WW => {
          const iW = VW(WW.shopInfo);
          return {
            ...WW,
            ...iW
          }
        })) : fW(pW().shopInfo))
      }), [PW, LW]);
      const GW = lW.selectedCategoryKey,
        IW = (WW, iW) => {
          var OW, mW;
          return (isNaN(iW) || (0, nO.K)(WW.currency) || HP(lW.currencyAmounts, WW.currency) && iW <= lW.currencyAmounts[WW.currency].amount) && (null === (OW = WW.canBuy) || void 0 === OW || OW) && !(null !== (mW = WW.hidden) && void 0 !== mW && mW)
        },
        aW = (WW, iW) => {
          var OW, mW, EW;
          const PW = YP(GW, WW),
            LW = lW.shopInfo[GW].items[WW],
            tW = lW.userInputsPerItem[PW],
            xW = (0, TE.b)(LW, tW),
            AW = IW(LW, xW),
            bW = LW.enchant,
            jW = bW ? (0, DW.ob)(null !== (OW = LW.customTitle) && void 0 !== OW ? OW : WW, {
              colour: DW.kb[bW.tier]
            }) : null !== (mW = LW.customTitle) && void 0 !== mW ? mW : WW,
            UW = iW => {
              const OW = null !== iW && void 0 !== iW ? iW : tW,
                mW = void 0 !== iW ? (0, TE.b)(LW, iW) : xW;
              IW(LW, mW) && null !== OW && XW(WW, LW, iW);
              let EW = lW.redDotInfo;
              EW.itemHasRedDot(GW, WW) && (EW.updateItemRedDot(GW, WW, !1), EW = EW.shallowCopy()), vW({
                redDotInfo: EW
              })
            };
          return (0, ZW.jsxs)("div", {
            className: NW()("ShopItem", {
              ShopItemNoInput: !LW.userInput,
              ShopItemNoInputCanBuy: !LW.userInput && AW,
              ShopItemNoInputSelected: LW.isSelected,
              ShopItemEnchant: !!bW
            }),
            "data-pad-focusable": !LW.userInput || void 0,
            "data-pad-unavailable": !LW.userInput && !AW || void 0,
            "data-pad-repeat": null !== (EW = (0, vE.c)(LW)) && void 0 !== EW ? EW : void 0,
            "data-pad-repeat-wait": lW.awaitingPurchase || void 0,
            onClick: () => {
              if (bW && nW.current) {
                if (hW !== PW) return void HW(PW);
                HW(null)
              }
              LW.userInput || UW()
            },
            onPointerDown: WW => {
              bW && (nW.current = (0, hE.v)(WW))
            },
            onPointerEnter: WW => {
              bW && !(0, hE.v)(WW) && HW(PW)
            },
            onPointerLeave: WW => {
              bW && !(0, hE.v)(WW) && HW((WW => WW === PW ? null : WW))
            },
            style: {
              zIndex: Object.keys(lW.shopInfo[GW].items).length - iW
            },
            children: [lW.redDotInfo.itemHasRedDot(GW, WW) && (0, ZW.jsx)(cW.b, {
              top: "-6px",
              right: "-6px"
            }), LW.badge && (0, ZW.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, ZW.jsx)("div", {
                className: NW()("ShopBadgeMain", LW.badge.type),
                children: (0, ZW.jsx)(nE.d, {
                  text: LW.badge.text
                })
              })
            }), (0, ZW.jsx)("div", {
              className: "ShopItemLeft",
              children: LW.image && (0, ZW.jsx)(uP, {
                item: LW,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, ZW.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, ZW.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, ZW.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, ZW.jsx)(nE.d, {
                    text: jW
                  })
                }), (0, ZW.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, ZW.jsx)(nE.d, {
                    text: LW.description
                  })
                })]
              }), LW.userInput && (0, ZW.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: WW => {
                  WW.stopPropagation()
                },
                children: [(0, ZW.jsx)(eP, {
                  item: LW,
                  currInput: tW,
                  updateInput: iW => {
                    ((WW, iW, OW) => {
                      const mW = YP(WW, iW),
                        EW = {
                          ...lW.userInputsPerItem
                        };
                      EW[mW] = OW, vW({
                        userInputsPerItem: EW
                      })
                    })(GW, WW, iW)
                  },
                  onSubmit: WW => {
                    UW(WW)
                  }
                }), ("dropdown" !== LW.userInput.type || !LW.userInput.autoSubmit) && (0, ZW.jsx)(wW.f, {
                  className: "ItemCostButton",
                  disabled: !AW && null !== tW,
                  onClick: () => {
                    UW()
                  },
                  children: (0, ZW.jsx)(dP, {
                    item: LW,
                    cost: xW,
                    currencyAmounts: lW.currencyAmounts
                  })
                })]
              })]
            }), !LW.userInput && (0, ZW.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, ZW.jsx)(dP, {
                item: LW,
                cost: xW,
                currencyAmounts: lW.currencyAmounts
              })
            }), bW && hW === PW && (0, ZW.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, ZW.jsx)(nE.d, {
                text: jW
              }), (0, ZW.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, ZW.jsx)(nE.d, {
                  text: (0, JE.d)("", bW.enchantments, bW.enchantmentData)
                })
              })]
            })]
          }, PW)
        },
        rW = function(WW) {
          for (const iW in WW)
            if (WW[iW].smp) return !0;
          return !1
        }(lW.shopInfo),
        zW = mN(lW.shopInfo, GW),
        FW = function(WW, iW) {
          var OW;
          return !!iW && !(null === (OW = WW[iW]) || void 0 === OW || !OW.loadout)
        }(lW.shopInfo, GW),
        QW = (0, ZW.jsx)("div", {
          className: NW()("ShopOnBoughtInfo", {
            ShopOnBoughtInfoShow: null !== lW.onBoughtInfo
          }),
          children: (0, ZW.jsx)(nE.d, {
            text: jW.current
          })
        });
      return (0, ZW.jsx)(YE.b, {
        className: "Menu ShopBody",
        show: EW,
        children: 0 !== Object.keys(lW.shopInfo).length && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, ZW.jsx)(xW, {
              items: WP(lW.shopInfo).map((WW => {
                var iW;
                return WW === zN ? {
                  id: WW,
                  title: "loadoutShop:title",
                  redDot: !1
                } : {
                  id: WW,
                  title: null !== (iW = lW.shopInfo[WW].customTitle) && void 0 !== iW ? iW : WW,
                  redDot: lW.redDotInfo.categoryHasRedDot(WW)
                }
              })),
              link: tW ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, DE.g)({
                    page: (0, DE.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: FW ? zN : GW,
              onClick: WW => {
                WW !== zN ? qW(WW) : FW || qW(FN(lW.shopInfo)[0].categoryKey)
              },
              padStartsOnTab: (0, vE.e)(GW)
            }), (0, ZW.jsx)("div", {
              className: "MenuSideBarFooter",
              children: lW.currencyAmounts && Object.keys(lW.currencyAmounts).map((WW => {
                const iW = lW.currencyAmounts[WW];
                return iW.hidden ? null : (0, ZW.jsx)(KP, {
                  currency: WW,
                  info: iW,
                  smaller: uW,
                  show: EW
                }, WW)
              }))
            })]
          }), (0, ZW.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [rW && (0, ZW.jsx)(IN, {
              show: EW,
              shopInfo: lW.shopInfo,
              selectedCategoryKey: GW,
              buy: (WW, iW, OW) => {
                XW(WW, iW, OW)
              },
              canAfford: IW,
              message: lW.onBoughtInfo
            }), FW && EW && (0, ZW.jsxs)(ZW.Fragment, {
              children: [QW, (0, ZW.jsx)(lP, {
                shopInfo: lW.shopInfo,
                selectedCategoryKey: GW,
                selectCategory: qW,
                buy: XW,
                canAfford: IW,
                currencyAmounts: lW.currencyAmounts
              })]
            }), null === zW && !FW && (0, ZW.jsxs)(ZW.Fragment, {
              children: [QW, (0, ZW.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, ZW.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (iW = lW.shopInfo[GW]) || void 0 === iW ? void 0 : iW.description) && (0, ZW.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, ZW.jsx)(nE.d, {
                      text: lW.shopInfo[GW].description
                    })
                  }), EW && (0, ZW.jsx)("div", {
                    className: "ShopItems",
                    ref: sW,
                    "data-pad-initial-area": !0,
                    children: VE(null === (OW = lW.shopInfo[GW]) || void 0 === OW ? void 0 : OW.items).map(((WW, iW) => aW(WW, iW)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function uP(WW) {
      let {
        item: iW,
        minWidth: OW,
        minHeight: mW
      } = WW;
      const {
        image: EW,
        schematicId: NW,
        imageColour: PW
      } = iW;
      if (NW) return (0, ZW.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${OW}rem`,
          height: `${mW}rem`
        },
        children: (0, ZW.jsx)(uE.b, {
          game: {
            schematicId: NW
          }
        })
      });
      var cW, wW;
      if ((0, HE.d)(EW)) return (0, ZW.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${OW}rem`,
          height: "0",
          minHeight: `${mW}rem`
        },
        children: (0, ZW.jsx)(HE.b, {
          itemName: EW,
          amount: null !== (cW = iW.amount) && void 0 !== cW ? cW : 0,
          amountFontSize: mW / 4 + "rem",
          enchantmentTier: null === (wW = iW.enchant) || void 0 === wW ? void 0 : wW.tier
        })
      });
      const tW = EW.slice(-4);
      return ".jpg" === tW || ".png" === tW ? (0, ZW.jsx)(oP, {
        image: EW,
        minWidth: OW
      }) : (0, ZW.jsx)(LW.c, {
        name: EW,
        className: "SelectedItemImage",
        style: {
          color: PW
        }
      })
    }

    function oP(WW) {
      let {
        image: iW,
        minWidth: OW
      } = WW;
      const {
        gameNameWithVariation: mW
      } = (0, zi.g)("connectedGame"), EW = iW.endsWith(".jpg");
      return (0, ZW.jsx)("img", {
        className: NW()({
          ShopPixelImage: !EW
        }),
        style: {
          width: `${EW?1.6*OW:OW}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,DW.Tb)(mW)}/${iW}`,
        alt: iW,
        draggable: !1
      })
    }

    function dP(WW) {
      let {
        item: iW,
        cost: OW,
        currencyAmounts: mW
      } = WW;
      const EW = !isNaN(OW) && 0 !== OW && HP(mW, iW.currency);
      let NW = null;
      return iW.buyButtonText ? NW = iW.buyButtonText : EW ? (NW = OW, iW.sell && (NW = -1 * OW), NW = NW.toString()) : 0 === OW ? NW = "Free" : iW.isRewardedAd && (NW = "Watch ad"), (0, nO.K)(NW) || " " === NW ? null : (0, ZW.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [EW && (0, ZW.jsx)("div", {
          style: {
            color: mW[iW.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, ZW.jsx)(cP, {
            iconName: mW[iW.currency].icon
          })
        }), (0, ZW.jsx)("div", {
          className: "BuyItemCost",
          children: (0, ZW.jsx)(nE.d, {
            text: NW
          })
        })]
      })
    }

    function eP(WW) {
      let {
        item: iW,
        currInput: OW,
        updateInput: EW,
        onSubmit: NW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)(), cW = (0, mW.useRef)(null);
      if ((0, mW.useEffect)((() => {
          const WW = cW.current;
          WW && WW.value !== OW && document.activeElement !== WW && (WW.value = null !== OW && void 0 !== OW ? OW : "")
        }), [OW]), !iW.userInput) return null;
      let wW = iW.userInput;
      if (UW.featureFlags.sanitizeShopInput && "text" === iW.userInput.type && (wW = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === wW.type || "number" === wW.type) {
        var tW, xW;
        console.assert(void 0 !== OW, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(iW)}`);
        const WW = "text" === wW.type && wW.wordCharsOnly;
        return (0, ZW.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, ZW.jsx)(KW.b, {
            className: "ShopItemUserInputText",
            placeholderText: LW(wW.placeholderText),
            defaultValue: OW,
            domRef: cW,
            onValueChange: (iW, OW) => {
              !0 === WW && (iW = (0, dE.pb)(iW)), cW.current.value = iW, EW(iW)
            },
            onEnter: NW,
            type: wW.type
          }, (null !== (tW = wW.initialValue) && void 0 !== tW ? tW : "") + (null !== (xW = wW.placeholderText) && void 0 !== xW ? xW : ""))
        })
      }
      if ("dropdown" === wW.type) {
        console.assert(void 0 !== OW, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(iW)}`);
        const WW = wW.autoSubmit;
        return (0, ZW.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, ZW.jsx)(ai.e, {
            options: wW.dropdownOptions.map((WW => (0, TE.c)(WW))),
            value: OW,
            onChange: iW => {
              let {
                value: OW
              } = iW;
              EW(OW), WW && NW(OW)
            }
          })
        })
      }
      return "player" === wW.type ? (0, ZW.jsx)(vP, {
        userInput: wW,
        currInput: OW,
        updateInput: EW
      }) : "color" === wW.type ? (0, ZW.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, ZW.jsx)("input", {
          type: "color",
          value: OW,
          onChange: WW => {
            EW(WW.target.value)
          }
        })
      }) : null
    }

    function vP(WW) {
      let {
        userInput: iW,
        currInput: OW,
        updateInput: mW
      } = WW;
      const EW = (0, zi.g)("players"),
        NW = (0, zi.g)("hiddenPlayerNames"),
        PW = (0, TE.d)(EW.ids, EW.localId, iW);
      return (0, ZW.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, ZW.jsx)(ai.e, {
          options: PW.map((WW => {
            const {
              name: iW
            } = EW.byId[WW];
            return {
              value: WW,
              label: null === iW ? "" : (0, oE.g)(iW, NW)
            }
          })),
          value: OW,
          onChange: WW => {
            let {
              value: iW
            } = WW;
            mW(iW)
          }
        })
      })
    }

    function gP(WW) {
      let {
        ids: iW
      } = WW;
      return iW
    }

    function DP(WW) {
      let {
        localId: iW
      } = WW;
      return iW
    }
    var VP = OW(1729);
    const pP = (0, OW(1479).l)((WW => WW.PadLobbyShortcuts)),
      fP = (0, mW.lazy)((() => Promise.resolve().then((() => OW(5361))).then((WW => ({
        default: WW.Lobbyleaderboard
      }))))),
      CP = (0, mW.lazy)((() => OW.e(253).then((() => OW(42561))).then((WW => ({
        default: WW.LobbyManageView
      })))));

    function XP(WW) {
      let {
        show: iW
      } = WW;
      return iW ? (0, ZW.jsx)(BP, {}) : null
    }

    function BP() {
      const WW = (0, gE.c)();
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [(0, ZW.jsx)(pP, {}), (0, ZW.jsxs)(mW.Suspense, {
          fallback: (0, ZW.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, ZW.jsx)(SW.d, {})
          }),
          children: [WW && (0, ZW.jsx)(CP, {
            leaderboard: (0, ZW.jsx)(fP, {})
          }), !WW && (0, ZW.jsx)(fP, {})]
        })]
      })
    }
    var qP = OW(1653),
      RP = OW(3216),
      GP = OW(1856),
      IP = OW(4126),
      aP = OW(3697),
      rP = OW(1576),
      zP = OW(1536),
      FP = OW(4058),
      QP = OW(4066),
      WL = OW(4217),
      iL = OW(3200);
    const OL = "storeRecentGiftRecipients",
      mL = new Map;

    function EL() {
      try {
        const WW = AO.i.getItem(OL);
        return Array.isArray(WW) ? WW.filter((WW => "string" === typeof(null === WW || void 0 === WW ? void 0 : WW.name) && WW.name.length > 0)).map((WW => ({
          name: WW.name,
          cosmetics: WW.cosmetics && "object" === typeof WW.cosmetics ? WW.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function NL(WW, iW) {
      var OW;
      const [EW, NW] = (0, mW.useState)(""), [PW, LW] = (0, mW.useState)("search"), [cW, wW] = (0, mW.useState)(null), [tW, ZW] = (0, mW.useState)(null), xW = (0, mW.useRef)(null), lW = (0, mW.useRef)(null);
      (0, mW.useEffect)((() => () => {
        xW.current && clearTimeout(xW.current)
      }), []), (0, mW.useEffect)((() => {
        iW || jW()
      }), [iW]);
      const AW = null !== (OW = null === cW || void 0 === cW ? void 0 : cW.name) && void 0 !== OW ? OW : null;

      function bW() {
        xW.current && (clearTimeout(xW.current), xW.current = null)
      }

      function jW() {
        bW(), NW(""), LW("search"), wW(null)
      }(0, mW.useEffect)((() => {
        if (null === AW || WW === HW.NULL_USER_CONTEXT) return;
        const iW = AW.toLowerCase();
        if (iW === WW.getPlayerName().toLowerCase()) return void ZW({
          name: AW,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const OW = mL.get(iW);
        if (OW) return void ZW({
          name: AW,
          result: OW
        });
        let mW = !1;
        return async function(WW, iW) {
          try {
            const OW = await (0, HW.postJsonWithMetricsCookiesAndJsonResponse)(`${ni.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: iW
            }, {
              retries: 1
            }, WW.getMetricsCookies());
            if ("boolean" !== typeof(null === OW || void 0 === OW ? void 0 : OW.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(OW)}`);
            return OW
          } catch (OW) {
            return console.error("Failed to look up gift recipient:", OW), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(WW, AW).catch((WW => (console.error("Gift recipient lookup failed:", WW), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((WW => {
          !0 !== WW.giftRecipientFound && "store:giftRecipientLookupFailed" === WW.giftRecipientError || mL.set(iW, WW), mW || ZW({
            name: AW,
            result: WW
          })
        })), () => {
          mW = !0
        }
      }), [AW, WW]);
      const UW = (0, mW.useMemo)((() => {
        const WW = EW.trim();
        if (!WW) return {
          status: "none"
        };
        if (!cW || cW.name !== WW || (null === tW || void 0 === tW ? void 0 : tW.name) !== cW.name) return {
          status: "pending",
          name: WW
        };
        const iW = tW.result;
        return !1 === iW.giftRecipientFound ? {
          status: "error",
          name: cW.name,
          error: iW.giftRecipientError
        } : {
          status: "found",
          name: iW.giftRecipientName,
          ownedPacks: iW.giftRecipientOwnedPacks,
          hasSuperRank: iW.giftRecipientHasSuperRank,
          isSubscriber: iW.giftRecipientIsSubscriber
        }
      }), [EW, cW, tW]);
      (0, mW.useEffect)((() => {
        "found" === UW.status && "typed" === (null === cW || void 0 === cW ? void 0 : cW.source) && lW.current !== UW.name && (lW.current = UW.name, (0, ji.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [UW, cW]);
      const kW = (null === tW || void 0 === tW ? void 0 : tW.name) === (null === cW || void 0 === cW ? void 0 : cW.name) ? null === tW || void 0 === tW ? void 0 : tW.result : null,
        sW = !0 === (null === kW || void 0 === kW ? void 0 : kW.giftRecipientFound) ? kW.giftRecipientCosmetics : null;
      return {
        query: EW,
        via: PW,
        recipient: UW,
        recipientCosmetics: sW,
        type: function(WW) {
          NW(WW), LW("search"), bW();
          const iW = WW.trim();
          iW ? xW.current = setTimeout((() => {
            wW({
              name: iW,
              source: "typed"
            })
          }), 400) : wW(null)
        },
        choose: function(WW, iW) {
          bW(), NW(WW), LW("typed" === iW ? "search" : "prefilled" === iW ? "prefilled" : "suggestion"), wW({
            name: WW,
            source: iW
          }), "typed" !== iW && "prefilled" !== iW && (0, ji.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: iW
          })
        },
        clear: jW,
        recordGift: function(WW, iW) {
          ! function(WW) {
            mL.delete(WW.toLowerCase())
          }(WW), ZW((OW => {
            if (!OW || OW.name.toLowerCase() !== WW.toLowerCase() || !0 !== OW.result.giftRecipientFound || "superRank" === iW) return OW;
            const mW = OW.result.giftRecipientOwnedPacks;
            return {
              ...OW,
              result: {
                ...OW.result,
                giftRecipientOwnedPacks: mW.includes(iW) ? mW : [...mW, iW]
              }
            }
          }))
        }
      }
    }
    var PL = OW(3193),
      LL = OW(5371),
      cL = OW(232),
      wL = OW(3953);
    const tL = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var ZL = OW(3147),
      xL = OW(625),
      lL = OW(3247),
      AL = OW(3610);

    function bL(WW) {
      let {
        cosmetics: iW
      } = WW;
      return (0, ZW.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, ZW.jsx)(lL.e, {
          cosmetics: iW
        })
      })
    }

    function jL(WW, iW) {
      var OW, mW;
      const EW = null !== (OW = WW.friend) && void 0 !== OW ? OW : {
        isError: !1,
        name: WW.name,
        ranks: [],
        cosmetics: null !== (mW = WW.cosmetics) && void 0 !== mW ? mW : {},
        nameColour: xL.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return iW ? {
        ...EW,
        cosmetics: iW
      } : EW
    }

    function UL(WW) {
      let {
        pending: iW
      } = WW;
      return (0, ZW.jsx)("span", {
        className: "StoreRecipientLoader",
        children: iW && (0, ZW.jsx)(SW.d, {})
      })
    }

    function kL(WW) {
      var iW;
      let {
        selfName: OW,
        giftRecipient: EW,
        suggestionsVersion: cW,
        pulseSignal: tW,
        disabled: xW
      } = WW;
      const {
        t: lW
      } = (0, PW.B)(), AW = (0, IW.l)(), bW = (0, mW.useRef)(null), jW = (0, mW.useRef)(null), {
        query: kW,
        via: sW,
        recipient: MW,
        recipientCosmetics: SW
      } = EW, YW = (0, iL.m)(kW), yW = (0, mW.useMemo)((() => {
        const WW = UW.featureFlags.useSocialFeatures ? AW.friends.filter((WW => !WW.isError)) : [];
        return (0, iL.h)({
          onlineFriends: (0, IW.h)(WW),
          recentRecipients: EL(),
          friends: WW,
          selfName: OW,
          max: 8
        })
      }), [AW.friends, OW, cW]), TW = kW.trim().toLowerCase(), JW = "search" !== sW && TW ? yW.find((WW => WW.name.toLowerCase() === TW)) : void 0, hW = JW && "prefilled" === sW ? [JW, ...yW.filter((WW => WW !== JW))] : yW, HW = "" !== TW && !JW, nW = HW ? kW : "", uW = hW.length > 0;
      (0, mW.useEffect)((() => {
        bW.current && bW.current.value !== nW && (bW.current.value = nW)
      }), [nW]), (0, mW.useEffect)((() => {
        bW.current && (bW.current.disabled = xW)
      }), [xW, tW]);
      const oW = (0, mW.useRef)(0);

      function eW() {
        "self" !== YW && (0, ji.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), EW.clear()
      }

      function vW(WW) {
        var iW, OW;
        if (xW) return;
        if (" " === WW.key || "Enter" === WW.key) return WW.preventDefault(), void WW.currentTarget.click();
        const mW = Array.from(null !== (iW = null === (OW = jW.current) || void 0 === OW ? void 0 : OW.querySelectorAll("[role=radio]")) && void 0 !== iW ? iW : []),
          EW = mW.indexOf(WW.currentTarget);
        let NW;
        "ArrowRight" === WW.key || "ArrowDown" === WW.key ? NW = mW[(EW + 1) % mW.length] : "ArrowLeft" === WW.key || "ArrowUp" === WW.key ? NW = mW[(EW - 1 + mW.length) % mW.length] : "Home" === WW.key ? NW = mW[0] : "End" === WW.key && (NW = mW[mW.length - 1]), NW && (WW.preventDefault(), NW.focus(), NW.click())
      }(0, mW.useEffect)((() => {
        var WW;
        tW > oW.current && !xW && (oW.current = tW, null === (WW = bW.current) || void 0 === WW || WW.focus())
      }), [tW, xW]);
      const gW = "self" === YW,
        DW = null !== (iW = null === JW || void 0 === JW ? void 0 : JW.name) && void 0 !== iW ? iW : null,
        VW = "error" === MW.status ? MW.error : null,
        pW = "store:giftRecipientLookupFailed" === VW;
      return (0, ZW.jsxs)("div", {
        className: NW()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: xW,
          StoreRecipientStripNoChips: !uW
        }),
        children: [(0, ZW.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: lW("store:buyingFor")
        }), (0, ZW.jsxs)("div", {
          ref: jW,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": lW("store:whoIsItFor"),
          children: [(0, ZW.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": gW,
            tabIndex: xW || !gW && null !== DW ? -1 : 0,
            className: NW()("StoreRecipientMe", {
              StoreRecipientChecked: gW
            }),
            onClick: () => {
              xW || eW()
            },
            onKeyDown: vW,
            children: [(0, ZW.jsx)(LW.c, {
              name: "user"
            }), " ", lW("store:me")]
          }), uW && (0, ZW.jsx)("div", {
            className: "StoreRecipientChips",
            children: hW.map((WW => {
              const iW = WW === JW;
              return (0, ZW.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": iW,
                tabIndex: !xW && iW ? 0 : -1,
                title: WW.name,
                className: NW()("StoreRecipientChip", {
                  StoreRecipientChecked: iW
                }),
                onClick: () => {
                  xW || function(WW) {
                    "gift" !== YW && (0, ji.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), EW.choose(WW.name, WW.kind)
                  }(WW)
                },
                onKeyDown: vW,
                children: (0, ZW.jsx)(AL.g, {
                  playerSocialPreview: jL(WW, iW ? SW : null),
                  opensProfileCard: !1,
                  isFriend: null !== WW.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== WW.friend,
                  status: null === WW.friend ? null : void 0,
                  trailing: iW ? (0, ZW.jsx)(UL, {
                    pending: "pending" === MW.status
                  }) : void 0
                })
              }, WW.name)
            }))
          })]
        }), (0, ZW.jsxs)("div", {
          className: NW()("StoreRecipientSearch", {
            StoreRecipientChecked: HW,
            StoreRecipientSearchPulse: tW > 0 && !HW,
            StoreRecipientSearchError: null !== VW && !pW
          }),
          onClick: () => {
            var WW;
            null === (WW = bW.current) || void 0 === WW || WW.focus()
          },
          children: [HW && "found" === MW.status && SW && (0, ZW.jsx)(bL, {
            cosmetics: SW
          }), !(HW && "found" === MW.status && SW) && (0, ZW.jsx)(LW.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, ZW.jsx)(KW.b, {
            className: "StoreRecipientSearchInput",
            domRef: bW,
            placeholderText: lW("store:searchName"),
            defaultValue: nW,
            maxLength: dW.f,
            onValueChange: function(WW) {
              "gift" !== YW && WW.trim() && (0, ji.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), EW.type(WW)
            },
            onEnter: () => {
              var WW;
              const iW = null === (WW = bW.current) || void 0 === WW ? void 0 : WW.value.trim();
              iW && EW.choose(iW, "typed")
            },
            blurOnEnter: !0
          }), HW && (0, ZW.jsx)(UL, {
            pending: "pending" === MW.status
          }), HW && (0, ZW.jsx)("div", {
            ...(0, wW.fb)({
              disabled: xW
            }),
            "aria-label": lW("store:clearRecipient"),
            title: lW("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: WW => {
              WW.stopPropagation(), xW || eW()
            },
            children: (0, ZW.jsx)(LW.c, {
              name: "xmark"
            })
          })]
        }, tW), VW && (0, ZW.jsx)("div", {
          className: NW()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: pW
          }),
          role: "status",
          children: lW(VW)
        })]
      })
    }
    var sL = OW(3079),
      ML = OW(3291),
      KL = OW(3627),
      SL = OW(4779),
      YL = OW(3153),
      yL = OW(4261),
      TL = OW(4264),
      JL = OW(4226);
    const hL = [xL.C.yellow, xL.C.green, xL.C.aqua, xL.C.blue, xL.C.purple, xL.C.red];

    function HL(WW) {
      return "needsRecipient" === WW || "lookingUp" === WW || "gift" === WW || "recipientOwns" === WW || "recipientSharesOwned" === WW || "recipientSubscribed" === WW
    }

    function nL(WW) {
      const {
        onKeyDown: iW,
        ...OW
      } = (0, wW.fb)();
      return {
        ...OW,
        "aria-label": WW,
        onKeyDown: WW => {
          WW.target === WW.currentTarget && (null === iW || void 0 === iW || iW(WW))
        }
      }
    }

    function uL(WW) {
      let {
        text: iW
      } = WW;
      return (0, ZW.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(iW).map(((WW, iW) => (0, ZW.jsx)("span", {
          style: {
            color: hL[iW % hL.length]
          },
          children: WW
        }, iW)))
      })
    }
    const oL = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function dL(WW) {
      let {
        state: iW,
        item: OW,
        price: mW,
        busy: EW,
        highlight: cW = !1,
        secondary: tW = !1,
        onAct: xW,
        onNeedRecipient: lW,
        onLogin: AW
      } = WW;
      const {
        t: bW
      } = (0, PW.B)(), jW = "superRank" === OW ? (0, pW.p)(Date.now()).product.days : null, UW = "superRank" === OW && "hyper" === (0, pW.o)(Date.now()).look ? wW.v : wW.n, kW = tW ? wW.h : UW, sW = WW => null === jW ? bW(WW ? "general:gift" : "general:buy") : bW(WW ? "store:giftDays" : "store:buyDays", {
        days: jW
      }), MW = (WW, iW) => {
        const OW = (0, ZW.jsxs)(ZW.Fragment, {
          children: [null === WW && (0, ZW.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== WW && (0, ZW.jsx)("span", {
            className: "StoreCtaLabel",
            title: WW,
            children: WW
          })]
        });
        return null !== jW ? (0, ZW.jsxs)(ZW.Fragment, {
          children: [iW && (0, ZW.jsx)("span", {
            className: "StoreCtaIcon",
            children: iW
          }), OW, (0, ZW.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, ZW.jsx)(ML.c, {
              amount: mW
            })]
          })]
        }) : (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsxs)("span", {
            className: "StoreCtaLead",
            children: [OW, "\xb7"]
          }), (0, ZW.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [iW, (0, ZW.jsx)(ML.c, {
              amount: mW
            })]
          })]
        })
      };
      let KW;
      switch (iW) {
        case "pending":
          KW = (0, ZW.jsx)(UW, {
            className: "StoreCtaButton",
            disabled: !0,
            children: MW(null)
          });
          break;
        case "login":
          KW = (0, ZW.jsx)(kW, {
            className: "StoreCtaButton",
            onClick: AW,
            children: MW(sW(!1))
          });
          break;
        case "owned":
          KW = (0, ZW.jsx)(wW.h, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, sL.d)("store")
            },
            children: (0, ZW.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, ZW.jsx)(LW.c, {
                name: "shirt"
              }), " ", bW("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          KW = (0, ZW.jsx)(UW, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, ZW.jsx)("span", {
              className: "StoreCtaLabel",
              children: bW(oL[iW])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          KW = (0, ZW.jsx)(UW, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === iW || null === mW,
            loading: "lookingUp" === iW || EW,
            onClick: xW,
            analyticsClick: {
              id: "store.gift",
              value: OW
            },
            children: MW(sW(!0), iL.d)
          });
          break;
        case "buy":
        case "recharge":
          KW = (0, ZW.jsx)(kW, {
            className: "StoreCtaButton",
            loading: EW,
            disabled: null === mW,
            onClick: xW,
            analyticsClick: {
              id: "store.buy",
              value: OW
            },
            children: MW(sW(!1))
          })
      }
      return (0, ZW.jsx)("div", {
        className: NW()("StoreCta", {
          StoreCtaHighlight: cW,
          StoreCtaLabelFirst: null !== jW
        }),
        onClick: WW => {
          WW.stopPropagation(), "needsRecipient" === iW && lW()
        },
        children: KW
      })
    }
    const eL = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function vL(WW) {
      var iW;
      let {
        pack: OW,
        state: EW,
        busy: cW,
        onOpen: wW,
        onAct: tW,
        onNeedRecipient: xW,
        onLogin: lW
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), bW = qP.e[OW], jW = FP.m[OW], UW = (0, ZL.l)(OW), kW = (0, mW.useRef)(null);
      (0, yL.l)(OW, kW);
      const sW = HL(EW),
        MW = null !== (iW = bW.displayName) && void 0 !== iW ? iW : OW,
        KW = (0, SL.b)((() => {
          (0, KL.i)();
          const WW = (0, yL.f)(OW);
          void 0 !== WW && (0, YL.f)((0, yL.d)(WW))
        })),
        [SW] = (0, mW.useState)(wL.g);
      return (0, ZW.jsxs)("div", {
        className: NW()("StoreTile StorePackTile", eL[bW.tier], {
          StorePackTileOwned: "owned" === EW,
          StorePackTileRecipientOwns: "recipientOwns" === EW,
          StoreTileGift: sW
        }),
        ...nL(MW),
        ref: kW,
        "data-store-item": OW,
        onClick: wW,
        onPointerMove: WW => {
          "mouse" !== WW.pointerType || 0 === WW.movementX && 0 === WW.movementY || SW || KW.start()
        },
        onPointerLeave: KW.cancel,
        children: [jW && (0, ZW.jsx)(jW, {
          simple: !0
        }), (0, ZW.jsx)("div", {
          className: "StorePackCharacters",
          children: UW.map((WW => (0, ZW.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,ZL.g)(WW)})`
            }
          }, WW)))
        }), (0, ZW.jsx)("div", {
          className: "StoreTileScrim"
        }), sW && (0, ZW.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ZW.jsx)(JL.d, {
          pack: OW,
          className: NW()({
            PackAnimatedBadgeBesideRibbon: sW
          })
        }), (0, ZW.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, ZW.jsx)("div", {
            className: "StoreTileTitle",
            children: MW
          }), (0, ZW.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, ZW.jsx)(TL.c, {
              tier: bW.tier
            }), " \xb7 ", AW("store:itemCount", {
              count: (0, xE.m)(OW)
            }), "owned" === EW && (0, ZW.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, ZW.jsx)(LW.c, {
                name: "check"
              }), " ", AW("general:owned")]
            })]
          }), (0, ZW.jsx)(dL, {
            state: EW,
            item: OW,
            price: (0, RP.i)(OW),
            busy: cW,
            onAct: tW,
            onNeedRecipient: xW,
            onLogin: lW
          })]
        })]
      })
    }
    var gL = OW(1662),
      DL = OW(4825),
      VL = OW(4279),
      pL = OW(4934),
      fL = OW(35247),
      CL = OW(4846);
    const XL = {
      cape: VW.g.cape
    };

    function BL(WW) {
      var iW, OW;
      let {
        wearer: EW,
        active: LW,
        tryOn: cW = XL,
        framing: wW = "store",
        glow: tW = !0,
        turnable: xW = !1,
        className: lW
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), bW = (0, mW.useRef)(null), [jW] = (0, mW.useState)(wL.g), UW = function(WW) {
        const [iW, OW] = (0, mW.useState)(!1);
        return (0, mW.useEffect)((() => {
          const iW = new IntersectionObserver((WW => {
            OW(WW[WW.length - 1].isIntersecting)
          }));
          return iW.observe(WW.current), () => {
            iW.disconnect()
          }
        }), [WW]), iW
      }(bW), kW = (0, CL.d)("storeRank"), sW = null !== (iW = EW.name) && void 0 !== iW ? iW : AW(EW.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), MW = null !== (OW = EW.cosmetics) && void 0 !== OW ? OW : {}, KW = `${sW}|${JSON.stringify(MW)}`, SW = LW && UW && !jW && !kW, [YW, yW] = (0, mW.useState)(null);
      SW || null === YW || yW(null);
      const TW = SW && YW === KW;
      return (0, ZW.jsxs)("div", {
        ref: bW,
        className: NW()("HyperRankStage", lW, {
          HyperRankStageDrawn: TW
        }),
        children: [tW && (0, ZW.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, ZW.jsx)(pW.b, {
          className: "HyperRankStageStandIn"
        }), SW && (0, ZW.jsx)(qL, {
          name: sW,
          cosmetics: MW,
          tryOn: cW,
          framing: wW,
          turnable: xW,
          onDrawn: () => {
            yW(KW)
          }
        }, KW), (0, ZW.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function qL(WW) {
      let {
        name: iW,
        cosmetics: OW,
        tryOn: EW,
        framing: PW,
        turnable: LW,
        onDrawn: cW
      } = WW;
      const wW = (0, mW.useRef)(null),
        tW = (0, mW.useRef)(0),
        xW = (0, mW.useRef)(null),
        lW = (0, mW.useMemo)((() => {
          var WW;
          return {
            name: iW,
            ranks: [VW.g.rank],
            nameColour: null !== (WW = OW.nameColour) && void 0 !== WW ? WW : xL.d
          }
        }), [iW, OW.nameColour]),
        AW = WW => {
          var iW;
          (null === (iW = xW.current) || void 0 === iW ? void 0 : iW.pointerId) === WW.pointerId && (xW.current = null)
        },
        bW = LW ? {
          onPointerDown: WW => {
            0 === WW.button && (xW.current = {
              pointerId: WW.pointerId,
              x: WW.clientX
            }, WW.currentTarget.setPointerCapture(WW.pointerId))
          },
          onPointerMove: WW => {
            var iW;
            const OW = xW.current;
            (null === OW || void 0 === OW ? void 0 : OW.pointerId) === WW.pointerId && (tW.current -= (WW.clientX - OW.x) * fL.b, OW.x = WW.clientX, null === (iW = wW.current) || void 0 === iW || iW.turnCamera(tW.current))
          },
          onPointerUp: AW,
          onPointerCancel: AW
        } : {};
      return (0, ZW.jsx)("div", {
        className: NW()("HyperRankStageLive", {
          HyperRankStageTurnable: LW
        }),
        ...bW,
        children: (0, ZW.jsx)(mW.Suspense, {
          fallback: null,
          children: (0, ZW.jsx)(KL.e, {
            ref: wW,
            owner: "storeRank",
            framing: PW,
            forcedCosmetics: EW,
            nametag: lW,
            onReady: () => {
              var WW;
              null === (WW = wW.current) || void 0 === WW || WW.setAllCosmetics(OW)
            },
            onDrawn: cW
          })
        })
      })
    }
    var RL = OW(4940);

    function GL(WW) {
      var iW;
      return null !== (iW = (0, ZE.e)(WW)) && void 0 !== iW ? iW : ZE.j[ZE.j.length - 1]
    }

    function IL(WW, iW) {
      return WW.tiers.flatMap((WW => {
        var OW;
        return null !== (OW = WW[iW]) && void 0 !== OW ? OW : []
      }))
    }

    function aL(WW) {
      const iW = IL(WW, "hyper");
      return iW.filter((WW => "cosmetic" === WW.kind && !(0, pL.w)(WW, iW)))
    }

    function rL(WW, iW) {
      const OW = IL(WW, iW).find((WW => "xpBoost" === WW.kind));
      return "xpBoost" === (null === OW || void 0 === OW ? void 0 : OW.kind) ? OW : null
    }

    function zL(WW) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, ZW.jsx)(uL, {
          text: WW("store:colourfulNames")
        }),
        detail: WW("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: WW("store:perkCapes"),
        detail: WW("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: WW("store:perkNametag", {
          rank: WW((0, pW.l)(VW.g.id).nameKey)
        }),
        detail: WW("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: WW("store:perkNoAdverts"),
        detail: WW("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: WW("store:perkFriends", {
          count: (0, Ai.e)([VW.g.rank])
        }),
        detail: WW("store:perkFriendsDetail", {
          count: (0, Ai.e)([])
        })
      }]
    }

    function FL() {
      const {
        t: WW
      } = (0, PW.B)(), iW = [{
        id: "battlePass",
        icon: "crown",
        title: WW("store:perkBattlePassTrack")
      }, ...zL(WW)];
      return (0, ZW.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: iW.map((WW => (0, ZW.jsxs)("li", {
          children: [(0, ZW.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, ZW.jsx)(LW.c, {
              name: WW.icon
            })
          }), WW.title]
        }, WW.id)))
      })
    }

    function QL() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, ZW.jsx)(Wc, {}), zL(WW).map((WW => (0, ZW.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, ZW.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, ZW.jsx)(LW.c, {
              name: WW.icon
            })
          }), (0, ZW.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, ZW.jsx)("b", {
              children: WW.title
            }), (0, ZW.jsx)("small", {
              children: WW.detail
            })]
          })]
        }, WW.id)))]
      })
    }

    function Wc() {
      const {
        t: WW,
        selectedLanguage: iW
      } = (0, PW.B)(), OW = GL(Date.now()), mW = aL(OW), EW = function(WW) {
        return aL(WW).filter((WW => null !== (0, pL.t)(WW) || null !== (0, pL.v)(WW))).reverse()
      }(OW).slice(0, 4), NW = rL(OW, "hyper"), cW = rL(OW, "free"), wW = (0, PW.e)(iW.code, "store:battlePassTiersEnds", OW.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, ZW.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, ZW.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, ZW.jsx)(LW.c, {
            name: "crown"
          })
        }), (0, ZW.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, ZW.jsx)("b", {
            children: WW("store:battlePassSeason", {
              season: OW.seasonNumber
            })
          }), (0, ZW.jsx)("small", {
            children: WW("store:battlePassTiersEnds", {
              tiers: OW.tierCount,
              date: wW
            })
          })]
        }), (0, ZW.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, ZW.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === mW.length ? WW("store:battlePassOneCosmetic") : WW("store:battlePassCosmetics", {
              count: mW.length
            })
          }), (0, ZW.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [EW.map((iW => (0, ZW.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, pL.k)(iW, WW),
              children: (0, ZW.jsx)(RL.e, {
                reward: iW
              })
            }, iW.id))), mW.length > EW.length && (0, ZW.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: WW("store:battlePassMore", {
                count: mW.length - EW.length
              })
            })]
          })]
        }), (0, ZW.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [NW && cW && (0, ZW.jsxs)("li", {
            children: [(0, ZW.jsx)(LW.c, {
              name: "angles-up"
            }), WW("store:battlePassXp", {
              multiplier: NW.multiplier,
              minutes: NW.minutes,
              freeMinutes: cW.minutes
            })]
          }), (0, ZW.jsxs)("li", {
            children: [(0, ZW.jsx)(LW.c, {
              name: "lock-open"
            }), WW("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }
    const ic = ["snowmanSet", "skis", "reindeerPet"];

    function Oc() {
      const WW = GL(Date.now()),
        iW = {};
      let OW = 0;
      for (const EW of WW.tiers) {
        const WW = EW.hyper;
        var mW;
        if ("cosmetic" === (null === WW || void 0 === WW ? void 0 : WW.kind) && ic.includes(WW.id)) Object.assign(iW, null === (mW = (0, pL.p)(WW)) || void 0 === mW ? void 0 : mW.cosmetics), OW++
      }
      return OW < ic.length && console.warn(`Hyper Rank's page wears ${OW} of its ${ic.length} rewards: ${WW.seasonId} lacks the others`), {
        ...iW,
        cape: VW.g.cape
      }
    }

    function mc(WW) {
      let {
        wearer: iW
      } = WW;
      const OW = (0, mW.useMemo)(Oc, []);
      return (0, ZW.jsx)(BL, {
        className: "HyperRankShowcase",
        wearer: iW,
        active: !0,
        tryOn: OW,
        framing: "showcase",
        glow: !1,
        turnable: !0
      })
    }
    const Ec = OW.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Nc() {
      (0, YL.f)(Ec, {
        lowPriority: !1
      })
    }

    function Pc() {
      const {
        t: WW
      } = (0, PW.B)(), [iW, OW] = (0, mW.useState)("starting"), EW = (0, mW.useRef)(null), NW = (0, cO.c)(), cW = (0, mW.useRef)(null), tW = (0, mW.useCallback)((() => {
        const WW = EW.current;
        null !== WW.error && WW.load();
        const iW = WW.play();
        cW.current = iW, iW.catch((WW => {
          (0, DL.c)("Failed to play Super Rank video", WW), NW.current && cW.current === iW && OW("failed")
        }))
      }), [NW]);
      return (0, mW.useEffect)((() => {
        const WW = EW.current;
        let iW;

        function OW() {
          clearTimeout(iW), iW = setTimeout(tW, 3e3)
        }
        return tW(), WW.addEventListener("ended", OW), () => {
          clearTimeout(iW), WW.removeEventListener("ended", OW)
        }
      }), [tW]), (0, ZW.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, ZW.jsx)("video", {
          ref: EW,
          src: `${ni.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: Ec,
          muted: !0,
          playsInline: !0,
          controls: "playing" === iW,
          onPlaying: () => {
            OW("playing")
          },
          onError: () => {
            OW("failed")
          }
        }), ("failed" === iW || "loading" === iW) && (0, ZW.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, ZW.jsx)(wW.f, {
            ariaLabel: WW("general:play"),
            loading: "loading" === iW,
            onClick: () => {
              OW("loading"), tW()
            },
            touchPressOn: "pointerup",
            children: (0, ZW.jsx)(LW.c, {
              name: "play"
            })
          })
        })]
      })
    }

    function Lc(WW) {
      let {
        tierId: iW,
        wearer: OW,
        onBack: mW,
        cta: EW,
        recipient: LW,
        afterCta: cW
      } = WW;
      const {
        t: tW
      } = (0, PW.B)(), xW = "hyper" === (0, pW.l)(iW).look;
      return (0, ZW.jsxs)("div", {
        className: NW()("StoreSuperRankDetail", {
          StoreHyperRankDetail: xW
        }),
        children: [(0, ZW.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, ZW.jsx)(wW.b, {
            className: "StoreDetailBackButton",
            onClick: mW,
            padBack: !0,
            children: tW("general:back")
          }), (0, ZW.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, ZW.jsx)(pW.f, {
              tierId: iW
            })
          }), LW]
        }), (0, ZW.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [xW && (0, ZW.jsx)(mc, {
            wearer: OW
          }), !xW && (0, ZW.jsx)(Pc, {}), (0, ZW.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [xW && (0, ZW.jsx)(QL, {}), !xW && (0, ZW.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, ZW.jsx)(VL.b, {
                tierId: iW
              })
            }), (0, ZW.jsxs)("div", {
              className: "StoreTileActions",
              children: [EW, cW]
            })]
          })]
        })]
      })
    }
    var cc = OW(4155),
      wc = OW(3637);

    function tc() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, ZW.jsx)("div", {
        className: "SmallTextBold",
        children: WW("payments:legalDocumentLoadFailed")
      })
    }
    const Zc = (0, mW.lazy)((() => (0, wc.b)(Promise.all([OW.e(146), OW.e(711)]).then((() => OW(7519))), (WW => WW.default), tc))),
      xc = (0, mW.lazy)((() => (0, wc.b)(OW.e(148).then((() => OW(7541))), (WW => WW.default), tc)));

    function lc(WW, iW) {
      WW.preventDefault(), Ei.NotificationProvider.showCustomPopup({
        body: (0, ZW.jsx)("div", {
          className: "AppLegalDocument",
          children: (0, ZW.jsx)(mW.Suspense, {
            fallback: (0, ZW.jsx)(SW.d, {}),
            children: (0, ZW.jsx)(iW, {})
          })
        }),
        middleScreenPopupClassName: "AppLegalDocumentPopup",
        unlockPointerKey: "appLegalDocument"
      })
    }

    function Ac(WW) {
      let {
        price: iW,
        perks: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [OW, (0, ZW.jsx)("div", {
          className: "SmallTextLight",
          children: mW("payments:subscriptionRenewsMonthly", {
            price: iW
          })
        }), (0, ZW.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: ["mobileIos" === hW.siteUsed && (0, ZW.jsx)("a", {
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            target: "_blank",
            rel: "noreferrer",
            children: mW("payments:appleTermsOfUse")
          }), "mobileIos" !== hW.siteUsed && (0, ZW.jsx)("a", {
            href: "/terms-of-service",
            onClick: WW => {
              lc(WW, xc)
            },
            children: mW("homePage:termsOfService")
          }), (0, ZW.jsx)("a", {
            href: "/privacy-policy",
            onClick: WW => {
              lc(WW, Zc)
            },
            children: mW("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var bc = OW(4240),
      jc = OW(4247),
      Uc = OW(4105);

    function kc(WW) {
      const {
        userContext: iW
      } = (0, AW.e)(), {
        purchaseUnderWay: OW,
        notice: EW,
        subscribe: NW
      } = (0, Uc.b)(), [PW, LW] = (0, mW.useState)(null), [cW, wW] = (0, mW.useState)(0), tW = (0, cO.c)(), ZW = iW !== HW.NULL_USER_CONTEXT, xW = ZW && (iW.mayBuy() || (0, BW.guestsMayBuy)()), lW = null !== PW && PW.loadedFor === iW ? PW.offer : null, bW = null === EW || void 0 === EW ? void 0 : EW.pendingIntentId, jW = (0, mW.useRef)(bW);

      function UW() {
        wW((WW => WW + 1))
      }
      return (0, mW.useEffect)((() => {
        void 0 !== jW.current && void 0 === bW && UW(), jW.current = bW
      }), [bW]), (0, mW.useEffect)((() => {
        if (!ZW) return;
        let OW = !1;
        return async function(WW, iW) {
          const {
            offering: OW
          } = await (0, QW.getBillingClient)().getOfferings(WW), mW = null === OW || void 0 === OW ? void 0 : OW.packages.find(FW.isPricedPackage);
          return void 0 === mW ? {
            kind: "unavailable"
          } : iW ? {
            kind: "loaded",
            pkg: mW,
            preview: await (0, jc.g)(mW.productId)
          } : {
            kind: "loaded",
            pkg: mW,
            preview: {
              kind: "none"
            }
          }
        }(WW, xW).catch((iW => (console.error(`Billing: loading the ${WW} subscription or its preview failed:`, iW), {
          kind: "loadFailed"
        }))).then((WW => {
          OW || LW((OW => "loadFailed" === WW.kind && (null === OW || void 0 === OW ? void 0 : OW.loadedFor) === iW ? OW : {
            loadedFor: iW,
            offer: WW
          }))
        })), () => {
          OW = !0
        }
      }), [WW, iW, ZW, xW, cW]), {
        offer: lW,
        purchaseUnderWay: OW,
        notice: EW,
        pendingIntentId: bW,
        mountedRef: tW,
        checkOut: async function(WW) {
          const OW = await NW(WW);
          tW.current && ("unknownPackage" === OW.kind && LW({
            loadedFor: iW,
            offer: {
              kind: "unavailable"
            }
          }), UW())
        }
      }
    }

    function sc(WW) {
      let {
        onOfferedChange: iW
      } = WW;
      return (0, BW.usePurchasesAllowed)() && (0, BW.subscriptionsSold)() ? (0, ZW.jsx)(Mc, {
        onOfferedChange: iW
      }) : null
    }

    function Mc(WW) {
      let {
        onOfferedChange: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        offer: EW,
        purchaseUnderWay: NW,
        notice: LW,
        pendingIntentId: cW,
        mountedRef: tW,
        checkOut: xW
      } = kc((0, pW.l)(VW.g.id).placementId), [lW, AW] = (0, mW.useState)(!1), bW = null === EW || "loaded" === EW.kind && "refused" !== EW.preview.kind;
      if ((0, mW.useEffect)((() => {
          iW(bW)
        }), [bW]), null === EW || "unavailable" === EW.kind) return null;
      if ("loadFailed" === EW.kind) return (0, ZW.jsx)(cc.e, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: jW,
        preview: kW
      } = EW;
      if ("refused" === kW.kind) return (0, ZW.jsx)(cc.e, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(kW.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const sW = (0, Ni.e)(jW);
      return (0, ZW.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: WW => {
          WW.stopPropagation()
        },
        children: [(0, ZW.jsx)(cc.e, {
          notice: LW,
          className: "SmallTextBold"
        }), (0, ZW.jsx)(cc.b, {
          className: "SmallTextBold"
        }), (0, ZW.jsx)("div", {
          className: "StoreCta",
          children: (0, ZW.jsx)(wW.v, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(WW, iW) {
                if ("refund" === iW.kind) {
                  AW(!0);
                  const WW = await (0, bc.e)(iW, null);
                  if (!tW.current) return;
                  if (AW(!1), !WW) return
                }
                await xW(WW)
              }(jW, kW)
            },
            disabled: void 0 !== cW,
            loading: NW || lW,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, ZW.jsx)("span", {
              className: "StoreCtaLabel",
              children: OW("payments:subscribeContinue", {
                price: sW
              })
            })
          })
        }), (0, UW.isMobileApp)() && (0, ZW.jsx)(Ac, {
          price: sW,
          perks: (0, ZW.jsx)(FL, {})
        })]
      })
    }

    function Kc() {
      const {
        t: WW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, ZW.jsxs)("li", {
          children: [(0, ZW.jsx)(LW.c, {
            name: "check"
          }), (0, ZW.jsx)(uL, {
            text: WW("store:colourfulNames")
          })]
        }), (0, ZW.jsxs)("li", {
          children: [(0, ZW.jsx)(LW.c, {
            name: "check"
          }), WW("store:perkCapes")]
        }), (0, ZW.jsxs)("li", {
          children: [(0, ZW.jsx)(LW.c, {
            name: "check"
          }), WW("store:perkNoAdverts")]
        }), (0, ZW.jsxs)("li", {
          children: [(0, ZW.jsx)(LW.c, {
            name: "check"
          }), WW("store:perkFriends", {
            count: (0, Ai.e)(["super"])
          })]
        })]
      })
    }

    function Sc(WW, iW) {
      return 1 === iW ? WW("store:oneDayLeft") : WW("store:daysLeft", {
        days: iW
      })
    }

    function Yc(WW) {
      let {
        daysLeft: iW,
        totalDays: OW,
        urgent: mW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)(), LW = OW > 0 ? Math.min(1, Math.max(.03, iW / OW)) : 1;
      return (0, ZW.jsxs)("div", {
        className: NW()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: mW
        }),
        children: [(0, ZW.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: Sc(EW, iW)
        }), (0, ZW.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, ZW.jsx)("i", {
            style: {
              width: 100 * LW + "%"
            }
          })
        })]
      })
    }

    function yc(WW) {
      var iW;
      let {
        state: OW,
        urgent: EW,
        daysLeft: LW,
        totalDays: cW,
        recipientHasSuperRank: wW,
        busy: tW,
        highlight: xW,
        onOpen: lW,
        onAct: bW,
        onNeedRecipient: jW,
        onLogin: kW,
        wearer: sW,
        live: MW,
        onWake: KW
      } = WW;
      const {
        t: SW
      } = (0, PW.B)(), {
        userContext: YW
      } = (0, AW.e)(), yW = Date.now(), TW = (0, pW.o)(yW), JW = "hyper" === TW.look, hW = JW ? void 0 : Nc, HW = HL(OW), nW = (0, pW.p)(yW), {
        days: uW
      } = nW.product, oW = SW("store:recipientHasSuperRank", {
        giftDays: uW
      }), dW = null === (iW = xi("subscribed" === OW)) || void 0 === iW ? void 0 : iW.text, eW = HW ? null : (0, pW.m)(YW.superRankInfo, yW), vW = JW && !HW && "subscribed" !== OW && "pending" !== OW && (0, BW.subscriptionsSold)() && !(0, UW.isMobileApp)(), [gW, DW] = (0, mW.useState)(!0);
      return (0, ZW.jsxs)("div", {
        className: NW()("StoreTile StoreSuperRankTile", {
          StoreTileGift: HW,
          StoreSuperRankTileUrgent: "recharge" === OW && EW,
          StoreSuperRankTileWithChip: wW,
          StoreSuperRankTileGiftReady: "gift" === OW,
          StoreHyperRankTile: JW
        }),
        ...nL(SW(TW.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: hW,
        onFocus: hW,
        onPointerMove: WW => {
          !JW || MW || "mouse" !== WW.pointerType || 0 === WW.movementX && 0 === WW.movementY || KW()
        },
        onClick: lW,
        children: [JW && (0, ZW.jsx)(BL, {
          className: "StoreHyperRankTileStage",
          wearer: sW,
          active: MW
        }), !JW && (0, ZW.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${TW.artUrl})`
          }
        }), HW && (0, ZW.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ZW.jsxs)("div", {
          className: "StoreTileContent",
          children: [wW && (0, ZW.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: oW,
            children: oW
          }), (0, ZW.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, ZW.jsx)(pW.f, {
              tierId: (0, fW.j)(yW).id
            })
          }), HW && (0, ZW.jsx)("div", {
            className: "StoreTilePitch",
            children: SW("store:giftPitch", {
              days: uW
            })
          }), JW && ("buy" === OW || "login" === OW) && null === eW && (0, ZW.jsx)("div", {
            className: "StoreTilePitch",
            children: SW("store:hyperHook")
          }), "recharge" === OW && (0, ZW.jsx)(Yc, {
            daysLeft: LW,
            totalDays: cW,
            urgent: EW
          }), dW && (0, ZW.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, ZW.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: dW
            })
          }), null !== eW && (0, ZW.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, ZW.jsx)(XW, {
              className: "StoreSuperRankDaysLeft",
              until: eW
            })
          }), JW && (0, ZW.jsx)(FL, {}), !JW && (0, ZW.jsx)(Kc, {}), (0, ZW.jsxs)("div", {
            className: "StoreTileActions",
            children: [vW && (0, ZW.jsx)(sc, {
              onOfferedChange: DW
            }), (0, gL.f)(nW.product.tierId, yW) && (0, ZW.jsx)(dL, {
              state: OW,
              item: "superRank",
              price: nW.price,
              busy: tW,
              highlight: xW,
              secondary: vW && gW,
              onAct: bW,
              onNeedRecipient: jW,
              onLogin: kW
            }), "needsRecipient" === OW && (0, ZW.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: SW("store:pickRecipientFirst")
            }), "recharge" === OW && EW && (0, ZW.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === LW ? SW("store:endsInOneDay") : SW("store:endsInDays", {
                days: LW
              })
            })]
          })]
        })]
      })
    }
    var Tc = OW(1649),
      Jc = OW(1544),
      hc = OW(4802);

    function Hc() {
      return (0, ZW.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var nc = OW(1414),
      uc = OW(1659),
      oc = OW(35264);

    function dc(WW) {
      let {
        character: iW,
        drawn: OW,
        onDrawn: EW
      } = WW;
      const PW = (0, mW.useRef)(null),
        LW = (0, oc.e)(iW);
      return (0, ZW.jsx)("div", {
        className: NW()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: OW
        }),
        children: (0, ZW.jsx)(mW.Suspense, {
          fallback: null,
          children: (0, ZW.jsx)(KL.e, {
            ref: PW,
            framing: "store",
            turntableFromYaw: OW ? LW.yaw : null,
            onReady: () => {
              var WW, OW;
              null === (WW = PW.current) || void 0 === WW || WW.setOrbit(LW), null === (OW = PW.current) || void 0 === OW || OW.setAllCosmetics(uc.e[iW].cosmetics)
            },
            onDrawn: EW
          })
        })
      })
    }
    var ec = OW(4231);
    const vc = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      gc = new Set(["wildSpirits"]);

    function Dc(WW) {
      var iW;
      let {
        tile: OW,
        design: EW,
        canGoLive: cW,
        live: wW,
        busy: tW,
        highlight: xW,
        onLiveStart: lW,
        onLiveEnd: AW,
        onOpen: bW,
        onAct: jW,
        onNeedRecipient: UW,
        onLogin: kW
      } = WW;
      const {
        t: sW
      } = (0, PW.B)(), {
        pack: MW,
        state: KW
      } = OW, SW = qP.e[MW], YW = (0, qP.g)(MW), yW = (0, ZL.j)(MW), TW = FP.m[yW], JW = gc.has(yW), {
        tier: hW
      } = SW, HW = (0, ec.e)(MW), nW = "legendary" === hW || "mythic" === hW, uW = (0, mW.useRef)(null);
      (0, nc.b)(uW, "epic" === hW || nW || JW);
      const [dW, eW] = (0, mW.useState)(!1);
      return !wW && dW && eW(!1), (0, ZW.jsxs)("div", {
        ref: uW,
        className: NW()("StoreCharacterCard", `StoreCharacterCard${EW}`, vc[hW], {
          StoreCharacterCardOwned: "owned" === KW || "recipientOwns" === KW,
          StoreCharacterCardGift: HL(KW),
          StoreCharacterCardItem: void 0 === YW
        }),
        onPointerMove: WW => {
          "mouse" !== WW.pointerType || 0 === WW.movementX && 0 === WW.movementY || !cW || wW || void 0 === YW || lW()
        },
        onPointerLeave: AW,
        children: [(0, ZW.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: TW && (0, ZW.jsx)(TW, {
            simple: !0
          })
        }), nW && (0, ZW.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, ZW.jsxs)(oW.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Tc.g)({
            kind: "pack",
            pack: MW
          }, Date.now()),
          "data-store-item": MW,
          onClick: WW => {
            (0, Jc.d)(WW) && (WW.preventDefault(), bW())
          },
          children: [(0, ZW.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, ZW.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, ZW.jsx)("div", {
              className: NW()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: dW
              }),
              style: {
                backgroundImage: `url(${(0,ZL.q)(MW)})`
              }
            }), wW && void 0 !== YW && (0, ZW.jsx)(dc, {
              character: YW,
              drawn: dW,
              onDrawn: () => {
                eW(!0)
              }
            })]
          }), (0, ZW.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (iW = SW.displayName) && void 0 !== iW ? iW : MW
          }), (0, ZW.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, ZW.jsx)(TL.c, {
              tier: hW
            }), HW && (0, ZW.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, ZW.jsx)(LW.c, {
                name: "film"
              }), sW("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, ZW.jsx)("div", {
          className: "StoreCharacterScrim"
        }), JW && (0, ZW.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, ZW.jsx)(Hc, {})
        }), (0, ZW.jsx)(JL.d, {
          pack: MW,
          iconOnly: !0,
          className: NW()({
            PackAnimatedBadgeBelowOwned: "owned" === KW
          })
        }), "owned" === KW && (0, ZW.jsx)("span", {
          className: "StoreCharacterOwned",
          title: sW("general:owned"),
          "aria-label": sW("general:owned"),
          children: (0, ZW.jsx)(LW.c, {
            name: "check"
          })
        }), (0, ZW.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, ZW.jsx)(dL, {
            state: KW,
            item: MW,
            price: (0, RP.i)(MW),
            busy: tW,
            highlight: xW,
            onAct: jW,
            onNeedRecipient: UW,
            onLogin: kW
          })
        })]
      })
    }

    function Vc(WW) {
      let {
        tiles: iW,
        busy: OW,
        highlightItem: EW,
        onOpen: NW,
        onAct: PW,
        onNeedRecipient: LW,
        onLogin: cW,
        livePack: wW,
        setLivePack: tW
      } = WW;
      const xW = (0, hc.q)("storeCharacterCardFoil"),
        lW = (0, hc.q)("storeCharacterCardSpotlight"),
        AW = xW ? "Foil" : lW ? "Spotlight" : "Showcase",
        [bW] = (0, mW.useState)(wL.g);
      return (0, ZW.jsx)("div", {
        className: "StoreCharacterGrid",
        children: iW.map((WW => (0, ZW.jsx)(Dc, {
          tile: WW,
          design: AW,
          canGoLive: !bW,
          live: wW === WW.pack,
          busy: OW,
          highlight: EW === WW.pack,
          onLiveStart: () => {
            tW(WW.pack)
          },
          onLiveEnd: () => {
            tW((iW => iW === WW.pack ? null : iW))
          },
          onOpen: () => {
            NW(WW.pack)
          },
          onAct: () => {
            PW(WW.pack)
          },
          onNeedRecipient: LW,
          onLogin: () => {
            cW(WW.pack)
          }
        }, WW.pack)))
      })
    }
    var pc = OW(35272);

    function fc(WW) {
      let {
        title: iW
      } = WW;
      return (0, ZW.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, ZW.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: iW
        })
      })
    }

    function Cc(WW) {
      let {
        mountAtOnce: iW,
        children: OW
      } = WW;
      const EW = (0, mW.useRef)(null),
        [NW, PW] = (0, mW.useState)(iW),
        LW = (0, pc.c)();
      return (0, mW.useLayoutEffect)((() => {
        const WW = EW.current;
        WW && WW.getBoundingClientRect().top < WW.parentElement.getBoundingClientRect().bottom && PW(!0)
      }), []), NW || LW ? (0, ZW.jsx)(ZW.Fragment, {
        children: OW
      }) : (0, ZW.jsx)("div", {
        ref: EW
      })
    }

    function Xc(WW) {
      let {
        layout: iW,
        mountAtOnce: OW,
        bundleGift: EW,
        superRankTotalDays: NW,
        busy: LW,
        highlightItem: cW,
        onOpen: wW,
        onAct: tW,
        onNeedRecipient: xW,
        onLogin: lW,
        dailyDropTile: AW,
        dealBanner: bW,
        rankWearer: jW
      } = WW;
      const {
        t: UW
      } = (0, PW.B)(), kW = iW.packs.filter((WW => void 0 === (0, qP.g)(WW.pack) && !(0, qP.j)(WW.pack))), sW = iW.packs.filter((WW => void 0 !== (0, qP.g)(WW.pack))), MW = iW.packs.filter((WW => (0, qP.j)(WW.pack))), [KW, SW] = (0, mW.useState)(null), [YW, TW] = (0, mW.useState)(!1), {
        gameState: JW
      } = (0, yW.p)(["gameState"]), hW = null === KW && (YW || "inGame" === JW);
      return (0, ZW.jsxs)(ZW.Fragment, {
        children: [(0, ZW.jsx)(Ni.b, {
          className: "StoreSuperGems",
          gift: EW,
          highlightSku: cW,
          leadingTile: AW,
          afterLeadingTile: bW
        }), null !== iW.superRank && (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(fc, {
            title: UW("store:rank")
          }), (0, ZW.jsx)(yc, {
            state: iW.superRank.state,
            urgent: iW.superRank.urgent,
            daysLeft: iW.superRankDaysLeft,
            totalDays: NW,
            recipientHasSuperRank: iW.recipientHasSuperRank,
            wearer: jW,
            live: hW,
            onWake: () => {
              TW(!0)
            },
            busy: LW,
            highlight: "superRank" === cW,
            onOpen: () => {
              wW("superRank")
            },
            onAct: () => {
              tW("superRank")
            },
            onNeedRecipient: xW,
            onLogin: () => {
              lW("superRank")
            }
          })]
        }), (0, ZW.jsxs)(Cc, {
          mountAtOnce: OW,
          children: [(0, ZW.jsx)(fc, {
            title: UW("store:bundles")
          }), (0, ZW.jsx)("div", {
            className: "StorePackGrid",
            children: kW.map((WW => (0, ZW.jsx)(vL, {
              pack: WW.pack,
              state: WW.state,
              busy: LW,
              onOpen: () => {
                wW(WW.pack)
              },
              onAct: () => {
                tW(WW.pack)
              },
              onNeedRecipient: xW,
              onLogin: () => {
                lW(WW.pack)
              }
            }, WW.pack)))
          }), (0, ZW.jsxs)(Cc, {
            mountAtOnce: OW,
            children: [(0, ZW.jsx)(fc, {
              title: UW("store:characters")
            }), (0, ZW.jsx)(Vc, {
              tiles: sW,
              busy: LW,
              highlightItem: cW,
              onOpen: wW,
              onAct: tW,
              onNeedRecipient: xW,
              onLogin: lW,
              livePack: KW,
              setLivePack: SW
            }), MW.length > 0 && (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsx)(fc, {
                title: UW("store:premiumItems")
              }), (0, ZW.jsx)(Vc, {
                tiles: MW,
                busy: LW,
                highlightItem: cW,
                onOpen: wW,
                onAct: tW,
                onNeedRecipient: xW,
                onLogin: lW,
                livePack: KW,
                setLivePack: SW
              })]
            })]
          })]
        })]
      })
    }

    function Bc(WW) {
      let {
        giftName: iW,
        onChooseRecipient: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return iW ? (0, ZW.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: mW("store:giftFor", {
          name: iW
        }),
        children: [iL.d, " ", mW("store:giftFor", {
          name: iW
        })]
      }) : (0, ZW.jsxs)("div", {
        ...(0, wW.fb)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: OW,
        children: [iL.d, " ", mW("store:chooseRecipient")]
      })
    }

    function qc(WW) {
      return (0, fW.e)(Date.now()) ? (0, ZW.jsx)(Gc, {
        ...WW
      }) : (0, ZW.jsx)(Rc, {
        ...WW
      })
    }

    function Rc(WW) {
      let {
        state: iW,
        wearer: OW,
        mode: mW,
        giftName: EW,
        busy: NW,
        highlight: LW,
        purchaseError: cW,
        onBack: wW,
        onChooseRecipient: tW,
        onAct: xW,
        onLogin: lW
      } = WW;
      const {
        t: AW
      } = (0, PW.B)(), bW = xi("gift" !== mW);
      return (0, ZW.jsx)(Lc, {
        tierId: VW.s.id,
        wearer: OW,
        onBack: wW,
        recipient: "gift" === mW && (0, ZW.jsx)(Bc, {
          giftName: EW,
          onChooseRecipient: tW
        }),
        cta: (0, ZW.jsx)(dL, {
          state: iW,
          item: "superRank",
          price: (0, pW.p)(Date.now()).price,
          busy: NW,
          highlight: LW,
          onAct: xW,
          onNeedRecipient: tW,
          onLogin: lW
        }),
        afterCta: (0, ZW.jsxs)(ZW.Fragment, {
          children: [bW && (0, ZW.jsx)("span", {
            className: "StoreTileNote",
            children: bW.text
          }), (null === bW || void 0 === bW ? void 0 : bW.manageUrl) && (0, ZW.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: bW.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: AW("payments:manageSubscription")
          }), cW && (0, ZW.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: AW(cW)
          })]
        })
      })
    }

    function Gc(WW) {
      let {
        state: iW,
        daysLeft: OW,
        wearer: EW,
        mode: NW,
        giftName: LW,
        busy: cW,
        highlight: wW,
        purchaseError: tW,
        onBack: xW,
        onChooseRecipient: lW,
        onAct: bW,
        onLogin: jW
      } = WW;
      const {
        t: UW
      } = (0, PW.B)(), {
        userContext: kW
      } = (0, AW.e)(), sW = Date.now(), MW = "gift" !== NW, KW = MW && "subscribed" === iW, SW = MW ? (0, pW.m)(kW.superRankInfo, sW) : null, YW = MW && !KW && "pending" !== iW && (0, BW.subscriptionsSold)(), [yW, TW] = (0, mW.useState)(!0);
      return (0, ZW.jsx)(Lc, {
        tierId: VW.g.id,
        wearer: EW,
        onBack: xW,
        recipient: !MW && (0, ZW.jsx)(Bc, {
          giftName: LW,
          onChooseRecipient: lW
        }),
        cta: (0, ZW.jsxs)(ZW.Fragment, {
          children: [null !== SW && (0, ZW.jsx)(XW, {
            className: "StoreTileNote StoreDetailNote",
            until: SW
          }), "recharge" === iW && OW > 0 && (0, ZW.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: Sc(UW, OW)
          }), YW && (0, ZW.jsx)(sc, {
            onOfferedChange: TW
          }), MW && (0, ZW.jsx)(Li, {
            showing: !0
          }), !KW && (0, gL.f)(VW.g.id, sW) && (0, ZW.jsx)(dL, {
            state: iW,
            item: "superRank",
            price: (0, pW.p)(sW).price,
            busy: cW,
            highlight: wW,
            secondary: YW && yW,
            onAct: bW,
            onNeedRecipient: lW,
            onLogin: jW
          })]
        }),
        afterCta: tW && (0, ZW.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: UW(tW)
        })
      })
    }

    function Ic() {}

    function ac() {
      return "true" !== new URLSearchParams(window.location.search).get("tempSubscription") ? null : (0, ZW.jsx)("div", {
        className: "StoreTempSubscribe",
        children: (0, ZW.jsx)(sc, {
          onOfferedChange: Ic
        })
      })
    }
    var rc = OW(3546);

    function zc(WW) {
      let {
        state: iW,
        view: OW,
        claiming: EW,
        onOpen: LW
      } = WW;
      const {
        t: tW
      } = (0, PW.B)(), xW = (0, mW.useRef)(null), lW = "ready" === OW.kind;
      return (0, nc.b)(xW, lW), (0, ZW.jsxs)("div", {
        ref: xW,
        className: NW()("DailyDropTile", {
          DailyDropTileReady: lW
        }),
        children: [lW && (0, ZW.jsx)(cW.b, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, ZW.jsx)("div", {
          className: "DailyDropTileTitle",
          children: tW("dailyDrop:name")
        }), (0, ZW.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, ZW.jsx)(rc.b, {
            className: "DailyDropTileBlock"
          }), (0, ZW.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, ZW.jsx)("span", {
              children: tW("dailyDrop:basicItems")
            }), " ", (0, ZW.jsx)("span", {
              children: tW("dailyDrop:collected", {
                count: iW.collected.length,
                total: iW.total
              })
            })]
          })]
        }), "ready" === OW.kind && (0, ZW.jsx)(wW.n, {
          className: "DailyDropTileOpen",
          onClick: LW,
          loading: EW,
          children: tW("dailyDrop:open")
        }), "waiting" === OW.kind && (0, ZW.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: tW("dailyDrop:nextIn", {
            count: OW.hours
          })
        })]
      })
    }
    var Fc = OW(3083);
    const Qc = Math.PI / 180;

    function Ww(WW) {
      return WW / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function iw(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const mW = (WW / (2 * Math.PI / OW) % OW + OW) % OW;
      let EW = null,
        NW = 1 / 0;
      for (let PW = 0; PW < OW; PW++) {
        if (!iW[PW]) continue;
        const WW = Math.abs(PW - mW),
          LW = Math.min(WW, OW - WW);
        LW < NW && (EW = PW, NW = LW)
      }
      return EW
    }

    function Ow(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const mW = iw(WW, iW, OW);
      if (null === mW) return WW;
      const EW = Ww(mW, OW) - WW;
      return WW + EW - 2 * Math.PI * Math.round(EW / (2 * Math.PI))
    }
    const mw = 32;

    function Ew(WW) {
      if (0 === WW.width || 0 === WW.height) return !0;
      const iW = document.createElement("canvas");
      iW.width = mw, iW.height = mw;
      const OW = iW.getContext("2d", {
        willReadFrequently: !0
      });
      if (!OW) return !0;
      OW.drawImage(WW, 0, 0, mw, mw);
      const {
        data: mW
      } = OW.getImageData(0, 0, mw, mw);
      for (let EW = 3; EW < mW.length; EW += 4)
        if (mW[EW] > 0) return !1;
      return !0
    }

    function Nw(WW) {
      WW.width = 0, WW.height = 0
    }

    function Pw() {
      return "hidden" === document.visibilityState
    }
    async function Lw(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 1e3;
      for (;;) {
        await (Pw() ? new Promise((WW => {
          const iW = () => {
            Pw() || (document.removeEventListener("visibilitychange", iW), WW())
          };
          document.addEventListener("visibilitychange", iW)
        })) : Promise.resolve());
        const OW = Math.min(iW(), 1e3);
        if (OW <= 0) return null;
        const mW = await WW.captureFrame(OW);
        if (null !== mW || !Pw()) return null !== mW && Ew(mW) ? (Nw(mW), null) : mW
      }
    }
    async function ww(WW, iW) {
      const OW = performance.now();
      let mW = 0,
        EW = Pw() ? OW : null;
      const NW = () => {
          Pw() ? EW ??= performance.now() : null !== EW && (mW += performance.now() - EW, EW = null)
        },
        PW = () => {
          const WW = performance.now();
          return 3e3 - (WW - OW - mW - (null === EW ? 0 : WW - EW))
        };
      document.addEventListener("visibilitychange", NW);
      try {
        let OW = await Lw(WW);
        for (; null === OW && iW() && PW() > 0;) OW = await Lw(WW, PW);
        return OW
      } finally {
        document.removeEventListener("visibilitychange", NW)
      }
    }

    function tw(WW) {
      let {
        cosmetics: iW
      } = WW;
      return (0, ZW.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, ZW.jsx)(lL.e, {
          cosmetics: iW
        })
      })
    }

    function Zw(WW) {
      let {
        worn: iW,
        NE: OW,
        PE: EW,
        prompting: cW,
        className: wW
      } = WW;
      const {
        t: tW
      } = (0, PW.B)(), xW = (0, mW.useRef)(null), [lW, AW] = (0, mW.useState)(null), [bW, jW] = (0, mW.useState)(!1), [UW, kW] = (0, mW.useState)(!1), sW = (0, mW.useRef)([]), MW = (0, mW.useRef)(null), KW = (0, mW.useRef)(0), YW = (0, mW.useRef)(null), yW = (0, mW.useRef)(!0), TW = (0, mW.useCallback)((() => {
        const WW = MW.current,
          iW = sW.current,
          OW = iw(KW.current, iW),
          mW = null === OW ? null : iW[OW],
          EW = null === WW || void 0 === WW ? void 0 : WW.getContext("2d");
        WW && mW && EW && (WW.width === mW.width && WW.height === mW.height || (WW.width = mW.width, WW.height = mW.height), EW.clearRect(0, 0, WW.width, WW.height), EW.drawImage(mW, 0, 0))
      }), []);
      async function JW(WW, iW) {
        const OW = performance.now(),
          mW = () => xW.current === WW;
        let EW = 0;
        for (const NW of function() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const iW = [],
              OW = new Set;
            for (let mW = WW / 2; mW >= 1 && Number.isInteger(mW); mW /= 2)
              for (let EW = 0; EW < WW; EW += mW) OW.has(EW) || (OW.add(EW), iW.push(EW));
            for (let mW = 0; mW < WW; mW++) OW.has(mW) || iW.push(mW);
            return iW
          }()) {
          if (!mW()) break;
          WW.turnCamera(Ww(NW));
          const OW = 0 === NW ? await ww(iW, mW) : await Lw(iW);
          if (!mW()) {
            null !== OW && Nw(OW);
            break
          }
          if (null !== OW) sW.current[NW] = OW, EW++, 0 === NW && AW("stills");
          else if (0 === NW) break
        }
        EW > 0 && console.info(`Lucky Skin Block's Before: ${EW} stills in ${Math.round(performance.now()-OW)} ms`)
      }

      function hW(WW) {
        var iW, OW;
        (null === (iW = YW.current) || void 0 === iW ? void 0 : iW.pointerId) === WW.pointerId && (YW.current = null, yW.current || (KW.current = Ow(KW.current, sW.current), TW(), null === (OW = xW.current) || void 0 === OW || OW.turnCamera(KW.current)))
      }(0, mW.useEffect)((() => {
        "stills" === lW && TW()
      }), [lW, TW]), (0, mW.useEffect)((() => () => {
        for (const WW of sW.current) WW && Nw(WW);
        sW.current = []
      }), []);
      const HW = cW && !UW,
        nW = HW ? {
          onPointerDown: WW => {
            null === YW.current && (WW.currentTarget.setPointerCapture(WW.pointerId), YW.current = {
              pointerId: WW.pointerId,
              startX: WW.clientX,
              startTurn: KW.current
            })
          },
          onPointerMove: WW => {
            const iW = YW.current;
            var OW;
            null !== iW && iW.pointerId === WW.pointerId && (KW.current = iW.startTurn - (WW.clientX - iW.startX) * Qc, TW(), yW.current || null === (OW = xW.current) || void 0 === OW || OW.turnCamera(KW.current))
          },
          onPointerUp: hW,
          onPointerCancel: hW
        } : {};
      return (0, ZW.jsxs)("div", {
        className: NW()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: HW
        }, wW),
        children: [(0, ZW.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, ZW.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...nW,
            children: ["stills" === lW && (0, ZW.jsx)("canvas", {
              ref: MW,
              className: "DailyDropRevealBeforeStill"
            }), "head" === lW && (0, ZW.jsx)(tw, {
              cosmetics: iW
            }), null === lW && (0, ZW.jsx)(SW.d, {})]
          }), (0, ZW.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: tW("dailyDrop:before")
          })]
        }), (0, ZW.jsx)(LW.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, ZW.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, ZW.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, ZW.jsx)("div", {
              className: NW()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: bW
              }),
              children: (0, ZW.jsx)(mW.Suspense, {
                fallback: null,
                children: (0, ZW.jsx)(KL.e, {
                  onNoWebGl: () => {
                    AW("head"), kW(!0)
                  },
                  ref: xW,
                  onReady: () => {
                    var WW, OW;
                    null === (WW = xW.current) || void 0 === WW || WW.resetCamera(), null === (OW = xW.current) || void 0 === OW || OW.setAllCosmetics(iW)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        const WW = xW.current;
                        if (!WW) return;
                        const iW = WW.getDevTools();
                        try {
                          iW && await JW(WW, iW)
                        } catch (NW) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", NW)
                        } finally {
                          yW.current = !1
                        }
                        if (xW.current !== WW) return;
                        sW.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), (0, ZO.v)("daily_drop.before_head", "no_front_still"), AW("head")), null === YW.current && (KW.current = Ow(KW.current, sW.current)), WW.turnCamera(KW.current), TW(), WW.updateCosmetic(OW, EW);
                        const mW = new Promise((WW => {
                          setTimeout(WW, 1e4)
                        }));
                        await Promise.race([WW.ensureReadyForCapture(OW), mW]).catch((WW => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", WW)
                        })), xW.current === WW && jW(!0)
                      }()
                    }))
                  }
                })
              })
            }), UW && (WN.E.includes(OW) ? (0, ZW.jsx)(tw, {
              cosmetics: {
                ...iW,
                [OW]: EW
              }
            }) : (0, ZW.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,Fc.l)(OW,EW).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !bW && !UW && (0, ZW.jsx)(SW.d, {}), (0, ZW.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...nW
            })]
          }), (0, ZW.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: tW("dailyDrop:after")
          })]
        })]
      })
    }
    const xw = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      lw = {
        opening: 900,
        shrinking: 700
      };

    function Aw(WW) {
      let {
        drop: iW,
        onClose: OW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)(), {
        userContext: cW
      } = (0, AW.e)(), {
        state: tW,
        view: xW
      } = (0, ZO.z)(), [lW, bW] = (0, mW.useState)("closed"), [jW] = (0, mW.useState)((() => ({
        ...cW.getPlayerCosmetics()
      }))), [UW] = (0, mW.useState)((() => (0, ZO.l)(iW, jW))), [kW, sW] = (0, mW.useState)(!1), [MW, KW] = (0, mW.useState)(!1), [SW] = (0, mW.useState)((() => null === tW ? Promise.resolve(null) : jO(tW))), [YW, TW] = (0, mW.useState)(null), JW = (0, cO.c)(), {
        gameState: hW
      } = (0, yW.p)(["gameState"]);
      async function HW() {
        const WW = await SW;
        JW.current && (null === WW ? (OW(), async function(WW) {
          let iW = null;
          try {
            const OW = await bO();
            null === WW || WW.remindersOn || null !== AO.i.getItem(OW) || (iW = OW)
          } catch (mW) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", mW)
          }
          if (null === iW) return void await (0, xO.i)("dailyDrop");
          const OW = iW;
          await (0, xO.i)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              AO.i.setItem(OW, !0), kO(null)
            }
          })
        }(tW)) : ((0, xO.e)(), TW(WW), bW("remind")))
      }

      function nW(WW) {
        null !== YW && function(WW, iW) {
          AO.i.setItem(WW.askedKey, !0), (0, LO.m)(), (0, ZO.v)("daily_drop.remind", iW ? "yes" : "no"), iW && kO(WW.requester)
        }(YW, WW), OW()
      }(0, mW.useEffect)((() => {
        (0, ZO.v)("daily_drop.reveal_step", lW)
      }), [lW]), (0, mW.useEffect)((() => {
        const WW = lw[lW];
        if (void 0 === WW) return;
        const iW = setTimeout((() => {
          bW(xw[lW])
        }), WW);
        return () => {
          clearTimeout(iW)
        }
      }), [lW]);
      const uW = EW(`dailyDrop:kind_${UW.NE}`),
        oW = tW && EW("dailyDrop:collected", {
          count: tW.collected.length,
          total: tW.total
        }),
        dW = "revealed" === lW || "shrinking" === lW,
        eW = "equip" !== lW && "remind" !== lW;
      return (0, ZW.jsx)(SE.b, {
        className: "DailyDropRevealScreen",
        close: "remind" === lW ? () => {
          nW(!1)
        } : OW,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, ZW.jsxs)("div", {
          className: NW()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === lW,
            DailyDropRevealShrinking: "shrinking" === lW,
            DailyDropRevealFiguresShown: "shrinking" === lW || "equip" === lW || "remind" === lW
          }),
          children: [(0, ZW.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, ZW.jsx)(Zw, {
              className: "DailyDropRevealStageFigures",
              worn: jW,
              NE: UW.NE,
              PE: UW.PE,
              prompting: !eW
            }), ("closed" === lW || "opening" === lW) && (0, ZW.jsx)(rc.b, {
              className: "DailyDropRevealBlock",
              open: "opening" === lW
            }), dW && (0, ZW.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, ZW.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Fc.l)(UW.NE,UW.PE).previewTex}.png`,
                alt: uW,
                draggable: !1
              })
            })]
          }), eW && (0, ZW.jsxs)(ZW.Fragment, {
            children: [(0, ZW.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, ZW.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: dW ? uW : EW("dailyDrop:name")
              }), "closed" === lW && (0, ZW.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: EW("dailyDrop:tapToOpen")
              }), "revealed" === lW && (0, ZW.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: EW("dailyDrop:tapToContinue")
              })]
            }), (0, ZW.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": EW("closed" === lW ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                bW(xw[lW])
              }
            })]
          }), "equip" === lW && (0, ZW.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, ZW.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: uW
            }), (0, ZW.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: EW("dailyDrop:equipQuestion")
            }), (0, ZW.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, ZW.jsx)(wW.f, {
                className: "DailyDropRevealButton",
                disabled: kW,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, ZO.v)("daily_drop.not_now", iW), HW()
                },
                children: EW("dailyDrop:notNow")
              }), (0, ZW.jsx)(wW.f, {
                className: "DailyDropRevealButton",
                loading: kW,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, ZO.v)("daily_drop.equip", iW), sW(!0), KW(!1);
                    try {
                      await (0, ZO.h)(cW, UW.NE, UW.PE)
                    } catch (WW) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", WW), sW(!1), void KW(!0)
                    }
                    await HW()
                  }()
                },
                children: EW("dailyDrop:equip")
              })]
            }), MW && (0, ZW.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: EW("dailyDrop:equipFailed")
            }), !(0, yW.e)(hW) && (0, ZW.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: kW,
              onClick: () => {
                var WW;
                (0, ZO.v)("daily_drop.customise", iW), WW = UW.NE, uO.l.iZ(bE, WW), yW.d.set({
                  openEverythingMenuName: oi.m.CUSTOMISATION
                }), OW()
              },
              children: [EW("dailyDrop:customise"), " ", (0, ZW.jsx)(LW.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), oW && (0, ZW.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [oW, "waiting" === (null === xW || void 0 === xW ? void 0 : xW.kind) && ` \xb7 ${EW("dailyDrop:nextInInline",{count:xW.hours})}`]
            })]
          }), "remind" === lW && (0, ZW.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, ZW.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: EW("dailyDrop:remindTitle")
            }), (0, ZW.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: EW("dailyDrop:remindSubtitle")
            }), (0, ZW.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, ZW.jsx)(wW.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  nW(!1)
                },
                children: EW("dailyDrop:remindNo")
              }), (0, ZW.jsx)(wW.n, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  nW(!0)
                },
                children: EW("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function bw(WW, iW) {
      const {
        t: OW
      } = (0, PW.B)(), EW = function(WW, iW) {
        const {
          state: OW,
          view: EW
        } = (0, ZO.z)(), [NW, PW] = (0, mW.useState)(!1), [LW, cW] = (0, mW.useState)(!1), [wW, tW] = (0, mW.useState)(null), ZW = (0, mW.useRef)(null), xW = (0, mW.useRef)(!1), lW = iW && "ready" === (null === EW || void 0 === EW ? void 0 : EW.kind);
        (0, mW.useEffect)((() => {
          WW ? lW && !xW.current && (xW.current = !0, (0, ZO.v)("daily_drop.shown", "tile")) : xW.current = !1
        }), [WW, lW]), (0, mW.useEffect)((() => {
          WW || (UW(), cW(!1))
        }), [WW]);
        const AW = WW && null === wW && !(0, ZO.r)(EW);
        (0, mW.useEffect)((() => {
          AW && yW.d.set({
            openEverythingMenuName: oi.m.CUSTOMISATION
          })
        }), [AW]);
        const bW = (0, mW.useRef)(!1),
          jW = (0, mW.useRef)(WW);

        function UW() {
          null !== ZW.current && (ZW.current = null, tW(null))
        }
        return jW.current = WW, {
          state: OW,
          view: EW,
          claiming: NW,
          claimFailed: LW,
          reveal: wW,
          open: async function() {
            if (!bW.current) {
              bW.current = !0, PW(!0), cW(!1);
              try {
                const {
                  state: WW,
                  drop: iW
                } = await (0, ZO.e)();
                if (null === WW || null === iW) return;
                if (!jW.current) return;
                (0, ZO.v)("daily_drop.open", iW), ZW.current = {
                  state: WW,
                  drop: iW
                }, tW(ZW.current)
              } catch (WW) {
                console.error("Failed to claim the Lucky Skin Block", WW), jW.current && cW(!0)
              } finally {
                bW.current = !1, PW(!1)
              }
            }
          },
          closeReveal: UW
        }
      }(WW, iW);
      return {
        shown: (0, ZO.r)(EW.view) || null !== EW.reveal,
        tile: EW.state && EW.view && (0, ZW.jsx)(zc, {
          state: EW.state,
          view: EW.view,
          claiming: EW.claiming,
          onOpen: EW.open
        }),
        claimFailed: EW.claimFailed && (0, ZW.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: OW("dailyDrop:claimFailed")
        }),
        reveal: EW.reveal && (0, ZW.jsx)(Aw, {
          drop: EW.reveal.drop,
          onClose: EW.closeReveal
        })
      }
    }

    function jw(WW) {
      let {
        show: iW
      } = WW;
      const OW = bw(iW, iW);
      return (0, ci.B)(iW && OW.shown, (0, ci.E)(), (WW => {
        (0, ZO.v)("daily_drop.store_only_open", WW)
      })), iW && OW.shown ? (0, ZW.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [OW.claimFailed, OW.tile && (0, ZW.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: OW.tile
        }), OW.reveal]
      }) : null
    }
    var Uw = OW(3559),
      kw = OW(35277),
      sw = OW(35285);

    function Mw(WW) {
      let {
        view: iW,
        highlight: OW,
        scrollSignal: EW,
        onScrolledIntoView: NW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)(), {
        purchaseUnderWay: cW,
        notice: wW,
        needsLogin: tW,
        buyPack: xW
      } = (0, sw.g)("banner");
      (0, Uw.W)(iW.arm, "banner");
      const lW = (0, mW.useRef)(null);
      return (0, mW.useEffect)((() => {
        var WW;
        EW > 0 && (null === (WW = lW.current) || void 0 === WW || WW.scrollIntoView({
          block: "nearest"
        }), NW())
      }), [EW]), (0, ZW.jsxs)("div", {
        ref: lW,
        className: "NewPlayerDealBanner",
        children: [(0, ZW.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, ZW.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: LW("newPlayerDeal:title")
          }), (0, ZW.jsx)(kw.c, {
            endsAt: iW.endsAt
          })]
        }), (0, ZW.jsx)(kw.d, {
          view: iW,
          needsLogin: tW,
          busy: cW,
          highlight: OW,
          onBuy: WW => {
            xW(iW, WW)
          }
        }), (0, ZW.jsx)(cc.e, {
          notice: wW,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    OW(35279);
    var Kw = OW(3566);

    function Sw(WW) {
      let {
        wallet: iW,
        close: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, ZW.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, ZW.jsx)("span", {
            children: mW("newPlayerDeal:giftable")
          }), (0, ZW.jsx)(ML.c, {
            amount: (0, aP.e)(iW)
          }), (0, ZW.jsx)("span", {
            children: mW("newPlayerDeal:ungiftable")
          }), (0, ZW.jsx)(ML.c, {
            amount: iW.ungiftable
          })]
        }), (0, ZW.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: mW("newPlayerDeal:ungiftableWhy")
        }), (0, ZW.jsx)(wW.n, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: OW,
          children: mW("general:ok")
        })]
      })
    }

    function Yw(WW) {
      Ei.NotificationProvider.showCustomPopup({
        body: iW => (0, ZW.jsx)(Sw, {
          wallet: WW,
          close: iW
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const yw = {
      kind: "board"
    };
    let Tw = !1;

    function Jw(WW) {
      return "found" === WW.status || "error" === WW.status && "store:giftRecipientLookupFailed" === WW.error ? WW.name : null
    }(0, ci.x)(FW.prefetchBillingOfferings);
    const hw = (0, mW.memo)((function(WW) {
      var iW;
      let {
        show: EW
      } = WW;
      const {
        t: LW
      } = (0, PW.B)(), {
        userContext: cW
      } = (0, AW.e)(), wW = (0, BW.usePurchasesAllowed)(), tW = cW !== HW.NULL_USER_CONTEXT, xW = NL(cW, EW), [lW, bW] = (0, jW.d)(), {
        page: UW,
        urlMode: kW,
        goTo: sW
      } = (0, PL.d)(), MW = function(WW) {
        return "superRank" === WW.kind ? "superRank" : "pack" === WW.kind ? WW.pack : null
      }(UW), {
        openEverythingMenuName: KW,
        gameState: SW
      } = (0, yW.p)(["openEverythingMenuName", "gameState"]), YW = null !== KW, TW = "landingPage" === SW;
      ! function(WW, iW) {
        const [EW] = (0, mW.useState)(wL.g), [NW, PW] = (0, mW.useState)(!1);
        EW && iW && !NW && PW(!0);
        const LW = (0, Gm.x)(),
          cW = EW && NW && WW && !LW;
        (0, mW.useEffect)((() => {
          if (!cW) return;
          let WW = null,
            iW = null,
            mW = null;
          const EW = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, QW.getBillingClient)().purchaseUnderWay,
            NW = () => {
              var OW;
              null === (OW = mW) || void 0 === OW || OW(), mW = null, null !== WW && (clearTimeout(WW), WW = null), null !== iW && (clearTimeout(iW), iW = null)
            },
            PW = () => {
              (0, LL.l)(!1), (0, LL.i)(!1), NW(), WW = setTimeout((() => {
                WW = null, mW = (0, cL.d)((() => {
                  mW = null, EW() ? PW() : ((0, LL.l)(!0), iW = setTimeout((() => {
                    iW = null, mW = (0, cL.d)((() => {
                      mW = null, EW() ? PW() : (0, LL.i)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => OW(5361))).then((WW => {
                    WW.startBackgroundGameSetup()
                  }), (WW => {
                    console.warn("Background game setup: its chunk failed to load", WW)
                  })))
                }))
              }), 2e3)
            };
          for (const OW of tL) window.addEventListener(OW, PW, {
            capture: !0,
            passive: !0
          });
          return PW(), () => {
            for (const WW of tL) window.removeEventListener(WW, PW, {
              capture: !0
            });
            NW(), (0, LL.l)(!1), (0, LL.i)(!1)
          }
        }), [cW])
      }(EW && YW && TW, "pack" === UW.kind), (0, mW.useEffect)((() => {
        YW && (0, FW.prefetchBillingOfferings)()
      }), [YW]), (0, mW.useEffect)((() => {
        YW && !EW && TW && (0, ZL.r)()
      }), [YW, EW, TW]);
      const [JW, hW] = (0, mW.useState)(0), [nW, uW] = (0, mW.useState)(null), [oW, dW] = (0, mW.useState)(null), [eW, vW] = (0, mW.useState)(null), [gW, DW] = (0, mW.useState)(null), [VW, CW] = (0, mW.useState)(0), XW = (0, mW.useRef)(null), qW = (0, mW.useRef)(null), RW = (0, mW.useRef)(null), GW = (0, mW.useRef)(!1), IW = (0, ci.E)(), aW = (0, mW.useRef)(0);

      function rW() {
        hW((WW => WW + 1))
      }(0, mW.useEffect)((() => {
        if (EW) {
          if (Tw = !0, (0, ci.k)(), IW && IW.seq !== aW.current) {
            var WW;
            aW.current = IW.seq, "loginResume" !== IW.source && (0, ci.A)();
            const iW = (0, ci.d)(IW);
            kW || sW(iW), DW(null !== (WW = IW.highlight) && void 0 !== WW ? WW : null);
            const OW = "newPlayerDeal" === IW.source || "loginResume" === IW.source && void 0 !== IW.highlight && (0, Uw.h)(cW).includes(IW.highlight);
            CW((WW => OW ? WW + 1 : 0)), dW(null), "gift" === IW.mode && IW.giftRecipientName ? xW.choose(IW.giftRecipientName, "prefilled") : xW.clear(), "gift" !== IW.mode || IW.giftRecipientName || rW()
          }
        } else CW(0)
      }), [EW, IW]), (0, ci.B)(EW, IW, (WW => {
        (0, ji.reportAnalyticsClick)({
          id: "store.open",
          value: WW
        })
      }));
      const zW = (0, Uw.V)(),
        Wi = null !== gW && null === zW && null === (0, Uw.l)((0, Uw.e)(cW)) && (0, Uw.h)(cW).includes(gW);
      (0, mW.useEffect)((() => {
        if (!gW) return;
        const WW = setTimeout((() => {
          DW(null)
        }), Wi ? 15e3 : 4e3);
        return () => {
          clearTimeout(WW)
        }
      }), [gW, Wi]), (0, mW.useLayoutEffect)((() => {
        const WW = XW.current;
        if (!EW || !WW) return qW.current = null, void(RW.current = null);
        var iW;
        if (MW) qW.current = MW, null === (iW = WW.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === iW || iW.focus();
        else if (qW.current) {
          const iW = RW.current;
          null !== iW && (WW.scrollTop = iW);
          const OW = WW.querySelector(`[data-store-item="${qW.current}"]`);
          if (OW) {
            const mW = OW.getBoundingClientRect(),
              EW = WW.getBoundingClientRect();
            OW.focus({
              preventScroll: null !== iW && mW.bottom > EW.top && mW.top < EW.bottom
            })
          }
          qW.current = null
        }
      }), [MW, EW]), (0, mW.useEffect)((() => {
        dW(null)
      }), [xW.query]), (0, mW.useEffect)((() => {
        if (!eW) return;
        const WW = setTimeout((() => {
          vW(null)
        }), 8e3);
        return () => {
          clearTimeout(WW)
        }
      }), [eW]);
      const ii = cW.superRankInfo,
        Oi = cW.isLoggedIn() || (0, BW.guestsMayBuy)(),
        mi = cW.getOwnedCosmeticPacks(),
        Ei = (0, iL.m)(xW.query),
        Ni = (0, iL.e)({
          mode: Ei,
          loggedIn: tW ? Oi : null,
          superRankInfo: ii,
          soldTierId: (0, pW.p)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: mi,
          packs: qP.q,
          recipient: xW.recipient
        });
      (0, mW.useEffect)((() => {
        if (!Oi || !EW) return;
        const WW = (0, Uw.h)(cW),
          iW = (0, ci.A)((iW => !WW.includes(iW.item))),
          OW = iW && (0, iL.i)(iW, qP.q);
        iW && OW && ((0, ji.reportAnalyticsClick)({
          id: "store.login_resume",
          value: iW.item
        }), (0, ci.o)(OW))
      }), [Oi, EW]);
      const Pi = EW && "gift" === Ei,
        Li = (0, mW.useRef)(Pi);
      Li.current = Pi;
      const wi = "none" !== xW.recipient.status,
        ti = (0, mW.useRef)(!1);
      (0, mW.useEffect)((() => {
        Pi ? wi && !ti.current && (ti.current = !0, async function(WW) {
          var iW;
          if ("gift" === (null === (iW = (0, Kw.n)()) || void 0 === iW ? void 0 : iW.show)) return void Yw(Kw.c);
          const OW = await (0, aP.g)();
          null !== OW && OW.ungiftable > 0 && WW() && Yw(OW)
        }((() => Li.current))) : ti.current = !1
      }), [Pi, wi]);
      const Zi = (0, iL.n)({
        superRankDaysLeft: Ni.superRankDaysLeft,
        openedThisSession: Tw || EW,
        seenNewItems: (0, ci.g)()
      });
      (0, mW.useEffect)((() => {
        (0, ci.z)(Zi)
      }), [Zi]);
      const xi = "self" === Ei,
        li = bw(EW, EW && xi && "board" === UW.kind);
      if (!EW || !wW) return null;
      const Ai = bW > lW && lW <= 700,
        bi = !Ai && bW <= 420,
        Ui = "gift" === Ei ? Jw(xW.recipient) : null,
        ki = null !== nW,
        si = "gift" === Ei ? {
          name: Ui,
          cosmetics: xW.recipientCosmetics,
          gift: !0
        } : {
          name: tW && cW.getPlayerName() || null,
          cosmetics: cW.getPlayerCosmetics(),
          gift: !1
        };

      function Mi(WW) {
        (0, IP.b)(WW, "gift" === Ei ? xW.query.trim() : null)
      }

      function Ki(WW, iW) {
        (0, ji.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${iW?"gift":"self"}:${WW}`
        }), iW && (xW.recordGift(iW.name, WW), Si(iW))
      }

      function Si(WW) {
        ! function(WW) {
          try {
            AO.i.setItem(OL, (0, iL.r)(EL(), WW))
          } catch {}
        }({
          name: WW.name,
          cosmetics: WW.cosmetics
        }), sW(yw), vW((iW => {
          var OW;
          return {
            name: WW.name,
            seq: (null !== (OW = null === iW || void 0 === iW ? void 0 : iW.seq) && void 0 !== OW ? OW : 0) + 1
          }
        }))
      }
      async function Yi(WW) {
        var iW, OW;
        if (GW.current) return;
        if (!Oi) return void Mi(WW);
        dW(null), DW(null);
        const mW = "gift" === Ei ? {
          name: Jw(xW.recipient),
          cosmetics: xW.recipientCosmetics
        } : null;
        if (mW && !mW.name) return void rW();
        const EW = "superRank" === WW ? (0, pW.p)(Date.now()).id : (0, RP.e)(WW);
        GW.current = !0;
        const NW = await (0, QP.c)(EW, null !== (iW = null === mW || void 0 === mW ? void 0 : mW.name) && void 0 !== iW ? iW : null);
        if (GW.current = !1, !NW) return;
        uW(WW);
        const PW = await aP.j.purchase(EW, null !== (OW = null === mW || void 0 === mW ? void 0 : mW.name) && void 0 !== OW ? OW : null, NW);
        uW(null), PW ? dW(PW) : (Ki(WW, mW), mW && (0, WL.f)(EW, NW, mW.name), mW || (await (0, rP.flushClientAnalyticsEvents)(), (0, GP.refreshWithoutConfirmation)("superRank" === WW ? "/super-rank-welcome" : `/pack-welcome/${WW}`)))
      }
      const yi = NW()("Store", {
        StoreGift: "gift" === Ei,
        StorePortrait: Ai,
        StoreCompact: bi
      });
      if ("pack" === UW.kind) {
        const WW = UW.pack,
          iW = Ni.packs.find((iW => iW.pack === WW));
        return (0, ZW.jsx)("div", {
          ref: XW,
          className: "CosmeticShopContainer",
          children: (0, ZW.jsx)(FP.h, {
            pack: WW,
            onBack: () => {
              sW(yw)
            },
            onPurchased: iW => {
              Ki(WW, iW ? {
                name: iW,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Ei && Ui && iW && (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsx)(dL, {
                state: iW.state,
                item: WW,
                price: (Ti = WW, "superRank" === Ti ? (0, pW.p)(Date.now()).price : (0, RP.i)(Ti)),
                busy: ki,
                onAct: () => {
                  Yi(WW)
                },
                onNeedRecipient: () => {
                  sW(yw), rW()
                },
                onLogin: () => {
                  Mi(WW)
                },
                highlight: gW === WW
              }), oW && (0, ZW.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: LW(oW)
              })]
            }),
            ownedPacks: mi,
            startAsGift: "gift" === Ei,
            initialGiftRecipient: "gift" === Ei ? null !== Ui && void 0 !== Ui ? Ui : xW.query.trim() : "",
            highlightCta: gW === WW
          }, WW)
        })
      }
      var Ti;
      return "superRank" === UW.kind && null !== Ni.superRank ? (0, ZW.jsx)("div", {
        ref: XW,
        className: NW()(yi, "StoreDetailView"),
        children: (0, ZW.jsx)(qc, {
          state: Ni.superRank.state,
          daysLeft: Ni.superRankDaysLeft,
          wearer: si,
          mode: Ei,
          giftName: Ui,
          busy: ki,
          highlight: "superRank" === gW,
          purchaseError: oW,
          onBack: () => {
            sW(yw)
          },
          onChooseRecipient: () => {
            sW(yw), rW()
          },
          onAct: () => {
            Yi("superRank")
          },
          onLogin: () => {
            Mi("superRank")
          }
        })
      }) : (0, ZW.jsxs)("div", {
        ref: XW,
        className: yi,
        onScroll: WW => {
          RW.current = WW.currentTarget.scrollTop
        },
        children: [(0, ZW.jsx)("div", {
          className: "StoreTopRow",
          children: (0, ZW.jsx)(kL, {
            selfName: tW ? cW.getPlayerName() : "",
            giftRecipient: xW,
            suggestionsVersion: null !== (iW = null === eW || void 0 === eW ? void 0 : eW.seq) && void 0 !== iW ? iW : 0,
            pulseSignal: JW,
            disabled: ki || !tW
          })
        }), eW && (0, ZW.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            vW(null)
          },
          children: [(0, ZW.jsx)(zP.d, {
            showSignal: eW.seq
          }), iL.d, " ", LW("store:giftSent", {
            name: eW.name
          })]
        }, eW.seq), !eW && oW && (0, ZW.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: LW(oW)
        }), xi && li.claimFailed, (0, ZW.jsx)(Xc, {
          layout: Ni,
          mountAtOnce: null !== qW.current,
          bundleGift: "gift" === Ei ? {
            recipientName: Ui,
            lookingUp: "pending" === xW.recipient.status,
            busy: ki,
            onNeedRecipient: rW,
            onSent: WW => {
              (0, ji.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Si({
                name: WW,
                cosmetics: xW.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, iL.o)(ii),
          busy: ki,
          highlightItem: gW,
          onOpen: function(WW) {
            (0, ji.reportAnalyticsClick)({
              id: "store.item_open",
              value: WW
            }), sW((0, ci.e)(WW))
          },
          onAct: Yi,
          onNeedRecipient: rW,
          onLogin: Mi,
          dailyDropTile: xi && li.tile,
          rankWearer: si,
          dealBanner: "self" === Ei && null !== zW && (0, ZW.jsx)(Mw, {
            view: zW,
            highlight: gW,
            scrollSignal: VW,
            onScrolledIntoView: () => {
              CW(0)
            }
          })
        }), "gift" !== Ei && !(0, fW.e)(Date.now()) && (0, ZW.jsx)(ac, {}), li.reveal]
      })
    }));
    var Hw = OW(3692),
      nw = OW(10066),
      uw = OW(9910),
      ow = OW(3804),
      dw = OW(3602),
      ew = OW(3654),
      vw = OW(3661),
      gw = OW(3665),
      Dw = OW(3744),
      Vw = OW(3721),
      pw = OW(3232),
      fw = OW(3294),
      Cw = OW(3251),
      Xw = OW(2138),
      Bw = OW(3670),
      qw = OW(3297);

    function Rw(WW) {
      let {
        show: iW
      } = WW;
      return iW ? (0, ZW.jsx)(Gw, {}) : null
    }

    function Gw() {
      const {
        t: WW
      } = (0, PW.B)(), {
        followsLeader: iW
      } = (0, dw.d)(), {
        loading: OW,
        friends: EW,
        requests: cW,
        invites: tW
      } = (0, IW.l)(), {
        userContext: xW
      } = (0, AW.e)(), [lW, bW] = (0, mW.useState)(qw.f);
      (0, mW.useEffect)((() => {
        (0, qw.b)()
      }), []);
      const jW = cW.map((WW => WW.name)),
        {
          state: UW,
          recentRequesters: kW
        } = (0, Vw.l)(),
        sW = new Map([...("loaded" === UW.status ? UW.recentPlayers : []).map((WW => [WW.preview.name, WW])), ...kW.map((WW => [WW.name, WW]))]),
        MW = (0, mW.useRef)(null),
        [YW, yW] = (0, mW.useState)(""),
        [TW, JW] = (0, mW.useState)("Enter"),
        [hW, HW] = (0, mW.useState)(null);

      function nW() {
        YW && (JW("Loading"), (0, Cw.f)(YW, "social_menu").then((WW => {
          if (MW.current) switch (WW.kind) {
            case "sent":
              JW("Success");
              break;
            case "becameFriends":
              JW("BecameFriends");
              break;
            case "failed":
              HW(WW.message), JW("Error")
          }
        })))
      }
      return (0, mW.useEffect)((() => {
        if ("Enter" === TW || "Loading" === TW) return;
        const WW = setTimeout((() => {
          MW.current.value = "", yW(""), JW("Enter")
        }), "Success" === TW ? 1e3 : 4e3);
        return () => {
          clearTimeout(WW)
        }
      }), [TW]), (0, ZW.jsx)("div", {
        className: "SocialMenu",
        children: (0, ZW.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, ZW.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ZW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, ZW.jsx)(gw.b, {
                label: WW("socialBar:addFriend")
              }), (0, ZW.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, ZW.jsxs)("div", {
                  className: NW()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${TW}`]: !0
                  }),
                  children: ["Loading" === TW && (0, ZW.jsx)(SW.d, {}), "Success" === TW && (0, ZW.jsx)(LW.c, {
                    name: "check"
                  }), "BecameFriends" === TW && (0, ZW.jsx)(ZW.Fragment, {
                    children: WW("socialBar:nowFriends", {
                      playerName: YW
                    })
                  }), "Error" === TW && hW && (0, ZW.jsx)(ZW.Fragment, {
                    children: WW(hW.translationKey, hW.params)
                  })]
                }), (0, ZW.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, ZW.jsx)(KW.b, {
                    className: "PlayerSearchInput",
                    placeholderText: WW("socialBar:enterPlayerName"),
                    domRef: MW,
                    onValueChange: WW => {
                      yW((0, dW.p)(WW)), MW.current.value = (0, dW.p)(WW)
                    },
                    onEnter: () => {
                      YW && (0, ji.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), nW()
                    }
                  }), (0, ZW.jsxs)(wW.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      nW()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, ZW.jsx)(LW.c, {
                      name: "user-plus"
                    }), " ", WW("socialBar:sendRequest")]
                  })]
                })]
              }), (0, ZW.jsx)(Bw.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), tW.length > 0 && (0, ZW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, ZW.jsx)(gw.b, {
                label: WW("socialBar:invites"),
                meta: tW.length
              }), tW.map((iW => (0, ZW.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, ZW.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, ZW.jsx)(pw.b, {
                    invite: iW
                  })
                }), (0, ZW.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, ZW.jsx)(pw.d, {
                    invite: iW
                  })
                }), (0, ZW.jsx)(wW.n, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, fw.h)(iW)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${iW.destination.kind}`
                  },
                  children: WW("general:join")
                }), (0, ZW.jsx)(li.f, {
                  tooltipInner: (0, ZW.jsx)(ZW.Fragment, {
                    children: WW("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, ZW.jsx)(wW.h, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === lW || void 0 === lW ? void 0 : lW.kind) && lW.inviteId === iW.id,
                    onClick: () => {
                      IW.e.declineInvite(iW.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${iW.destination.kind}`
                    },
                    children: (0, ZW.jsx)(LW.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, iW.id)))]
            }), (0, ZW.jsxs)("div", {
              className: NW()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !OW && 0 === cW.length
              }),
              children: [(0, ZW.jsx)(gw.b, {
                label: (0, ZW.jsxs)(ZW.Fragment, {
                  children: [(0, ZW.jsx)(LW.c, {
                    name: Xw.h
                  }), " ", WW("socialBar:requests")]
                }),
                meta: (0, ZW.jsxs)(ZW.Fragment, {
                  children: [cW.length, cW.length === Ai.p && (0, ZW.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: WW("socialBar:limitReached")
                  })]
                })
              }), OW && (0, ZW.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ZW.jsx)(SW.d, {})
              }), !OW && 0 === cW.length && (0, ZW.jsx)("div", {
                className: "SocialMenuEmpty",
                children: WW("socialBar:noFriendRequests")
              }), !OW && cW.length > 0 && (0, ZW.jsx)("div", {
                className: "PlayerRows",
                children: (0, ZW.jsx)(UN.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [cW],
                  children: cW.map(((iW, OW) => {
                    const mW = sW.get(iW.name);
                    return (0, ZW.jsxs)(vw.h, {
                      playerSocialPreview: iW,
                      zIndex: cW.length - OW,
                      padDefaultFocus: (0, qw.d)(lW, iW.name, OW),
                      status: mW && (0, ZW.jsx)(Dw.c, {
                        gameNameWithVariation: mW.gameNameWithVariation,
                        isPrivateLobby: mW.isPrivateLobby
                      }),
                      children: [(0, ZW.jsx)(li.f, {
                        tooltipInner: (0, ZW.jsx)(ZW.Fragment, {
                          children: WW("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, ZW.jsx)(wW.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            bW((0, qw.c)(jW, OW)), (0, Cw.d)(iW.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ZW.jsx)(LW.c, {
                            name: "check"
                          })
                        })
                      }), (0, ZW.jsx)(li.f, {
                        tooltipInner: (0, ZW.jsx)(ZW.Fragment, {
                          children: WW("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, ZW.jsx)(wW.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            bW((0, qw.c)(jW, OW)), (0, Cw.d)(iW.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ZW.jsx)(LW.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${iW.name}_${iW.isError}`)
                  }))
                })
              })]
            }), (0, ZW.jsx)(Dw.h, {})]
          }), (0, ZW.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ZW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, ZW.jsx)(gw.b, {
                label: WW("socialBar:party")
              }), (0, ZW.jsx)(ew.b, {})]
            }), (0, ZW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, ZW.jsx)(gw.b, {
                label: (0, ZW.jsxs)(ZW.Fragment, {
                  children: [(0, ZW.jsx)(LW.c, {
                    name: Xw.e
                  }), " ", WW("socialBar:friends")]
                }),
                meta: (0, ZW.jsxs)(ZW.Fragment, {
                  children: [EW.length, EW.length >= (0, Ai.e)(xW.getPlayerRanks()) && (0, ZW.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: WW("socialBar:limitReached")
                  })]
                })
              }), OW && (0, ZW.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ZW.jsx)(SW.d, {})
              }), !OW && 0 === EW.length && (0, ZW.jsx)("div", {
                className: "SocialMenuEmpty",
                children: WW("socialBar:noFriends")
              }), !OW && EW.length > 0 && (0, ZW.jsx)("div", {
                className: "PlayerRows",
                children: (0, ZW.jsx)(UN.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [EW],
                  children: EW.map(((WW, OW) => (0, ZW.jsx)(vw.h, {
                    playerSocialPreview: WW,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: WW => {
                      IW.e.removeFriendFromState(WW)
                    },
                    zIndex: EW.length - OW,
                    children: (0, ZW.jsx)(vw.d, {
                      friend: WW,
                      followsLeader: iW,
                      analyticsSurface: "social_menu"
                    })
                  }, `${WW.name}_${WW.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Iw = OW(3503),
      aw = OW(4859),
      rw = OW(1964),
      zw = OW(4851),
      Fw = OW(4862);

    function Qw(WW) {
      let {
        count: iW,
        claiming: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return 0 === iW ? null : (0, ZW.jsx)(wW.n, {
        className: "SeasonPassClaimAllButton",
        loading: OW,
        onClick: () => {
          aw.g.claimAll().catch((WW => {
            console.error("Failed to claim all season pass rewards", WW)
          }))
        },
        children: mW("seasonPass:claimAll", {
          count: iW
        })
      })
    }

    function Wt(WW) {
      let {
        view: iW,
        claiming: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)(), {
        userContext: EW
      } = (0, AW.e)(), {
        config: NW,
        state: cW,
        tier: wW,
        xpIntoTier: tW,
        xpForNextTier: xW
      } = iW, lW = Date.now(), bW = (0, Fw.l)(iW, lW), jW = wW >= NW.tierCount, UW = bW && !jW && xW > 0, kW = xW > 0 && !jW ? Math.min(100, tW / xW * 100) : 100, sW = cW.xpToday >= NW.maxXpPerDay, MW = null !== iW.xpBoost && iW.xpBoost.endsAtMs > lW && !sW ? iW.xpBoost : null;
      return (0, ZW.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, ZW.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, ZW.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: mW("seasonPass:title", {
              season: cW.seasonNumber
            })
          })
        }), (0, ZW.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, ZW.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, ZW.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: mW("seasonPass:tier"),
              "aria-label": `${mW("seasonPass:tier")} ${wW}`,
              children: wW
            }), (0, ZW.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(kW),
              children: [(0, ZW.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${kW}%`
                }
              }), (0, ZW.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [jW && mW("seasonPass:passComplete"), UW && mW("seasonPass:xpProgress", {
                  xp: tW,
                  xpForNextTier: xW
                })]
              })]
            }), UW && (0, ZW.jsxs)(ZW.Fragment, {
              children: [(0, ZW.jsx)(LW.c, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, ZW.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: wW + 1
              })]
            })]
          }), (0, ZW.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, ZW.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, ZW.jsx)(LW.c, {
                name: "hourglass"
              }), " ", bW ? mW("seasonPass:endsIn", {
                time: (0, zw.c)((iW.endsAtMs - lW) / 6e4)
              }) : (0, pL.e)(iW.claimEndsAtMs, mW, lW)]
            }), bW && !jW && (0, ZW.jsx)("span", {
              className: sW ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: sW ? mW("seasonPass:dailyCapReached") : mW("seasonPass:dailyXp", {
                xp: cW.xpToday,
                cap: NW.maxXpPerDay
              })
            }), bW && !jW && MW && (0, ZW.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, ZW.jsx)(LW.c, {
                name: "angles-up"
              }), " ", mW("seasonPass:xpBoostActive", {
                multiplier: MW.multiplier,
                time: (0, zw.c)(Math.ceil((MW.endsAtMs - lW) / 6e4))
              })]
            }), bW && !jW && !sW && !MW && (0, ZW.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: mW("seasonPass:playToEarn")
            }), EW.type === rw.c.ANONYMOUS && (0, ZW.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: mW("seasonPass:logInToKeep")
            })]
          })]
        }), (0, ZW.jsx)(Qw, {
          count: iW.claimable.length,
          claiming: OW
        })]
      })
    }
    var it = OW(4251),
      Ot = OW(4255);

    function mt(WW) {
      return null !== (0, pL.v)(WW) || null !== (0, pL.p)(WW)
    }
    let Et = null;

    function Nt() {
      var WW;
      null === (WW = Et) || void 0 === WW || WW.tearDownNotification()
    }

    function Pt(WW) {
      let {
        reward: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)(), {
        userContext: mW
      } = (0, AW.e)(), EW = (0, pL.v)(iW);
      return (0, ZW.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, ZW.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, pL.k)(iW, OW)
        }), null !== EW && (0, ZW.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, ZW.jsx)(it.c, {
            profileEffect: EW,
            name: mW.getPlayerName(),
            cosmetics: mW.getPlayerCosmetics()
          })
        }), null === EW && (0, ZW.jsx)(Lt, {
          reward: iW
        })]
      })
    }

    function Lt(WW) {
      let {
        reward: iW
      } = WW;
      const {
        userContext: OW
      } = (0, AW.e)(), EW = (0, mW.useRef)(null), {
        previewEmote: NW,
        playEmote: PW
      } = (0, Ot.b)(), LW = (0, mW.useMemo)((() => (0, pL.p)(iW)), [iW]), cW = LW.emote;
      return (0, ZW.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, ZW.jsx)(mW.Suspense, {
          fallback: (0, ZW.jsx)(SW.d, {}),
          children: (0, ZW.jsx)(KL.e, {
            ref: EW,
            framing: "store",
            forcedCosmetics: LW.cosmetics,
            LL: NW.id,
            emotePlaySeq: NW.seq,
            onReady: () => {
              var WW, iW;
              null === (WW = EW.current) || void 0 === WW || WW.resetCamera(), null === (iW = EW.current) || void 0 === iW || iW.setAllCosmetics(OW.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== cW && PW(cW)
            }
          })
        })
      })
    }

    function ct(WW) {
      let {
        waitingCount: iW
      } = WW;
      const {
        t: OW
      } = (0, PW.B)();
      return (0, BW.usePurchasesAllowed)() ? (0, ZW.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [iW > 0 && (0, ZW.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === iW ? OW("seasonPass:hyperRewardWaiting") : OW("seasonPass:hyperRewardsWaiting", {
            count: iW
          })
        }), (0, ZW.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, ZW.jsxs)(wW.v, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, ci.o)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, ZW.jsx)(pW.b, {}), " ", OW("homePage:getHyperRank")]
          }), iW > 0 && (0, ZW.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: iW
          })]
        })]
      }) : null
    }
    var wt = OW(35291);

    function tt(WW) {
      let {
        stub: iW,
        name: OW
      } = WW;
      const {
        t: mW
      } = (0, PW.B)();
      return (0, ZW.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, ZW.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: iW
        }), (0, ZW.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, ZW.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: mW("seasonPass:trackTicketPass")
          }), (0, ZW.jsx)("span", {
            className: "SeasonPassTicketName",
            children: OW
          })]
        })]
      })
    }

    function Zt(WW) {
      var iW, OW;
      let {
        view: EW,
        claimingKeys: NW,
        hyperWaitingCount: cW,
        onClaim: wW
      } = WW;
      const {
        t: tW
      } = (0, PW.B)(), xW = (0, mW.useRef)(null), {
        config: lW,
        tier: AW,
        xpIntoTier: bW,
        xpForNextTier: jW,
        state: UW
      } = EW, kW = (0, Fw.l)(EW), sW = (0, mW.useRef)(!1), MW = null !== (iW = null === (OW = EW.claimable[0]) || void 0 === OW ? void 0 : OW.tier) && void 0 !== iW ? iW : Math.min(AW + 1, lW.tierCount);
      (0, mW.useLayoutEffect)((() => {
        if (sW.current) return;
        const WW = xW.current,
          iW = WW.querySelector(`[data-tier="${MW}"]`).getBoundingClientRect(),
          OW = WW.getBoundingClientRect();
        WW.scrollLeft += iW.left - OW.left - .3 * WW.clientWidth, WW.scrollTop += iW.top - OW.top - .3 * WW.clientHeight
      }), [MW]), (0, mW.useEffect)((() => {
        const WW = xW.current;

        function iW(iW) {
          sW.current = !0, Math.abs(iW.deltaY) <= Math.abs(iW.deltaX) || WW.scrollWidth <= WW.clientWidth || (iW.preventDefault(), WW.scrollLeft += iW.deltaY)
        }
        return WW.addEventListener("wheel", iW, {
          passive: !1
        }), () => {
          WW.removeEventListener("wheel", iW)
        }
      }), []);
      const KW = jW > 0 ? bW / jW : 1;
      return (0, ZW.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, ZW.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, ZW.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, ZW.jsx)(tt, {
              stub: (0, ZW.jsx)(pW.b, {}),
              name: tW("seasonPass:hyperTrack")
            }), !UW.hasHyperRank && (0, ZW.jsx)(ct, {
              waitingCount: cW
            })]
          }), (0, ZW.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, ZW.jsx)(tt, {
              stub: (0, ZW.jsx)(LW.c, {
                name: "star"
              }),
              name: tW("seasonPass:freeTrack")
            }), (0, ZW.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: tW("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, ZW.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: xW,
          onPointerDown: () => {
            sW.current = !0
          },
          children: (0, ZW.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: lW.tiers.map((WW => {
              const iW = WW.tier,
                OW = function(WW, iW, OW) {
                  if (WW <= iW) return "reached";
                  return OW && WW === iW + 1 ? "earning" : "locked"
                }(iW, AW, kW),
                mW = "earning" === OW;
              return (0, ZW.jsx)(xt, {
                tierRewards: WW,
                nodeState: OW,
                progress: mW ? KW : 0,
                freeState: EW.tileState({
                  tier: iW,
                  track: "free"
                }),
                hyperState: EW.tileState({
                  tier: iW,
                  track: "hyper"
                }),
                freeClaiming: NW.has((0, Fw.o)({
                  tier: iW,
                  track: "free"
                })),
                hyperClaiming: NW.has((0, Fw.o)({
                  tier: iW,
                  track: "hyper"
                })),
                hasHyperRank: UW.hasHyperRank,
                onClaim: wW
              }, iW)
            }))
          })
        })]
      })
    }
    const xt = (0, mW.memo)((function(WW) {
      let {
        tierRewards: iW,
        nodeState: OW,
        progress: mW,
        freeState: EW,
        hyperState: PW,
        freeClaiming: LW,
        hyperClaiming: cW,
        hasHyperRank: wW,
        onClaim: tW
      } = WW;
      const {
        tier: xW
      } = iW;
      return (0, ZW.jsxs)("div", {
        className: NW()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== OW
        }),
        "data-tier": xW,
        children: [(0, ZW.jsx)(lt, {
          tier: xW,
          track: "hyper",
          reward: iW.hyper,
          tileState: PW,
          claiming: cW,
          padlock: !wW && "claimed" !== PW,
          onClaim: tW
        }), (0, ZW.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, ZW.jsx)("span", {
            className: NW()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === OW
            }),
            children: "earning" === OW && (0, ZW.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * mW + "%"
              }
            })
          }), (0, ZW.jsx)("span", {
            className: NW()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === OW
            })
          }), (0, ZW.jsx)(wt.b, {
            tier: xW,
            state: OW,
            progress: mW
          })]
        }), (0, ZW.jsx)(lt, {
          tier: xW,
          track: "free",
          reward: iW.free,
          tileState: EW,
          claiming: LW,
          padlock: !1,
          onClaim: tW
        })]
      })
    }));

    function lt(WW) {
      let {
        tier: iW,
        track: OW,
        reward: mW,
        tileState: EW,
        claiming: NW,
        padlock: PW,
        onClaim: LW
      } = WW;
      return mW ? (0, ZW.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${OW}`,
        children: (0, ZW.jsx)(RL.h, {
          reward: mW,
          tileState: EW,
          track: OW,
          size: "large",
          onClaim: () => {
            LW({
              tier: iW,
              track: OW
            })
          },
          claiming: NW,
          padlock: PW,
          onPreview: mt(mW) ? () => {
            ! function(WW) {
              const iW = Ei.NotificationProvider.showCustomPopup({
                body: (0, ZW.jsx)(Pt, {
                  reward: WW
                })
              });
              Et = iW, iW.getResult().finally((() => {
                Et === iW && (Et = null)
              }))
            }(mW)
          } : void 0
        })
      }) : (0, ZW.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${OW}`
      })
    }

    function At(WW) {
      let {
        show: iW
      } = WW;
      return iW ? (0, ZW.jsx)(bt, {}) : null
    }

    function bt() {
      const {
        t: WW
      } = (0, PW.B)(), iW = (0, aw.h)();
      return (0, mW.useEffect)((() => Nt), []), (0, ZW.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === iW.status && (0, ZW.jsx)(SW.d, {}), "error" === iW.status && (0, ZW.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, ZW.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: WW("seasonPass:errorLoad")
          }), (0, ZW.jsx)(wW.f, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              aw.g.retry()
            },
            children: WW("seasonPass:retry")
          })]
        }), "noSeason" === iW.status && (0, ZW.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, ZW.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, pL.g)(WW)
          })
        }), "loaded" === iW.status && (0, ZW.jsx)(jt, {
          view: iW.view,
          claimingKeys: iW.claimingKeys
        })]
      })
    }

    function jt(WW) {
      let {
        view: iW,
        claimingKeys: OW
      } = WW;
      const mW = iW.config.tiers.filter((WW => "needsHyper" === iW.tileState({
          tier: WW.tier,
          track: "hyper"
        }))).length,
        EW = OW.size > 0;
      return (0, ZW.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, ZW.jsx)(Wt, {
          view: iW,
          claiming: EW
        }), (0, ZW.jsx)(Zt, {
          view: iW,
          claimingKeys: OW,
          hyperWaitingCount: mW,
          onClaim: Ut
        }), (0, ZW.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, ZW.jsx)(Qw, {
            count: iW.claimable.length,
            claiming: EW
          }), !iW.state.hasHyperRank && (0, ZW.jsx)(ct, {
            waitingCount: mW
          })]
        })]
      })
    }

    function Ut(WW) {
      aw.g.claim(WW).catch((WW => {
        console.error("Failed to claim season pass reward", WW)
      }))
    }
    var kt = OW(5445);
    var st = OW(4003);
    const Mt = WW => {
        let {
          action: iW,
          padAction: OW
        } = WW;
        const {
          isTouchScreen: mW
        } = (0, yW.p)(["isTouchScreen"]), EW = (0, Gm.x)();
        return mW && !EW ? null : (0, ZW.jsx)(pm.e, {
          className: "EverythingMenuTabKey",
          noaAction: iW,
          padHidesKey: !0,
          padMenuShortcut: OW
        })
      },
      Kt = (0, mW.memo)((function() {
        const {
          t: WW
        } = (0, PW.B)(), {
          gameState: iW,
          openEverythingMenuName: OW,
          crosshairGameView: EW,
          everythingMenuOverLoadingScreen: LW
        } = (0, yW.p)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: cW
        } = (0, AW.e)(), tW = (0, ZE.e)(Date.now()), xW = (0, BW.usePurchasesAllowed)(), lW = (0, ci.I)(), {
          view: bW
        } = (0, ZO.z)(), jW = "dot" === lW || null === lW && "ready" === (null === bW || void 0 === bW ? void 0 : bW.kind), kW = (WW, iW) => (0, ZW.jsx)(Mt, {
          action: WW,
          padAction: iW
        }), [sW, MW] = (0, mW.useState)(null), KW = (0, mW.useRef)(null), SW = (0, mW.useRef)(null);
        (0, mW.useEffect)((() => {
          var WW;
          const iW = null === (WW = SW.current) || void 0 === WW ? void 0 : WW.querySelector(".EverythingMenuTabActive");
          null === iW || void 0 === iW || iW.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [OW]);
        const YW = {
            ..."inGame" === iW ? {} : (0, wW.fb)({
              focusOnClick: !1
            }),
            ...sE.d
          },
          TW = WW => {
            const iW = (0, ME.d)((iW => {
              (0, wW.cb)(iW.currentTarget), yW.d.set({
                openEverythingMenuName: WW
              })
            }), "pointerup");
            return {
              ...YW,
              onPointerDown: WW => {
                YW.onPointerDown(WW), iW.onPointerDown(WW)
              },
              onPointerUp: WW => {
                YW.onPointerUp(WW), iW.onPointerUp(WW)
              },
              onClick: iW.onClick
            }
          },
          JW = null !== OW;
        (0, mW.useEffect)((() => {
          OW === oi.m.CUSTOMISATION ? (0, ji.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, sL.e)()
          }) : null === OW && yW.d.get("everythingMenuOverLoadingScreen") && yW.d.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [OW]);
        const HW = OW !== oi.m.COSMETIC_SHOP && !EW;
        async function nW() {
          await async function() {
            if (!sW) return;
            await sW(), MW(null)
          }(), yW.d.set({
            openEverythingMenuName: null
          })
        }
        const uW = (0, mW.useRef)(null),
          oW = (0, mW.useCallback)((() => null !== uW.current && (0, uw.g)(uW.current)), []);

        function dW() {
          oW() || nW()
        }(0, mW.useEffect)((() => (0, VP.p)(oW)), [oW]);
        const eW = (0, mW.useMemo)((() => "inGame" === iW ? {
            text: WW("settingsMenu:exitGame"),
            onClick: () => {
              (0, nw.d)()
            }
          } : (0, hW.isDiscordClient)() ? {
            text: WW("settingsMenu:exitGame"),
            onClick: () => {
              ui.h.discordActivity().then((WW => {
                WW.exit("User exited the game")
              }))
            }
          } : null), [iW, WW]),
          vW = JW && !EW,
          gW = "inGame" !== iW,
          DW = vW && gW;
        (0, mW.useLayoutEffect)((() => {
          if (DW) return yW.d.set({
            menuCoversPage: !0
          }), () => {
            yW.d.set({
              menuCoversPage: !1
            })
          }
        }), [DW]);
        const VW = (0, mW.useRef)(null);
        ! function(WW, iW) {
          (0, mW.useEffect)((() => {
            var OW;
            const mW = (0, kt.g)();
            if (!iW || null === mW || !(0, kt.d)({
                site: hW.siteUsed,
                isMobileApp: (0, UW.isMobileApp)(),
                isTouchScreen: yW.d.get("isTouchScreen")
              })) return;
            const EW = null === (OW = WW.current) || void 0 === OW ? void 0 : OW.querySelector(".EverythingMenuBackButton");
            return EW ? mW(EW) : void 0
          }), [WW, iW])
        }(VW, vW && !(0, VP.j)(OW) && "inGame" === iW);
        const pW = (0, ZW.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: dW,
          children: (0, ZW.jsx)(wW.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, ZW.jsx)(KE.d, {
          showing: JW,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: OW === oi.m.SHOP,
          doGameplayStartStopOnShow: "inGame" === iW,
          children: (0, ZW.jsx)(YE.b, {
            className: NW()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: LW
            }),
            show: vW,
            children: (0, ZW.jsx)(SE.b, {
              close: dW,
              togglePointerLock: !1,
              children: (0, ZW.jsxs)("div", {
                className: "EverythingMenu",
                ref: VW,
                children: [!(0, VP.j)(OW) && (0, ZW.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, ZW.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [eW && (0, ZW.jsx)(wW.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        eW.onClick()
                      },
                      children: eW.text
                    }), JW && xW && (0, ZW.jsx)("div", {
                      ...YW,
                      className: "EverythingMenuWallet",
                      title: WW("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, ci.o)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, ZW.jsx)(Hw.f, {})
                    })]
                  }), (0, ZW.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: SW,
                    "data-pad-tabs": "1",
                    children: [(0, ZW.jsxs)("div", {
                      ...TW(oi.m.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.SETTINGS ? "true" : void 0,
                      className: NW()("EverythingMenuTab", {
                        EverythingMenuTabActive: OW === oi.m.SETTINGS
                      }),
                      children: [WW("general:settings"), kW("OpenSettings", "pause")]
                    }), (0, ZW.jsxs)("div", {
                      ...TW(oi.m.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.CUSTOMISATION ? "true" : void 0,
                      className: NW()("EverythingMenuTab", {
                        EverythingMenuTabActive: OW === oi.m.CUSTOMISATION
                      }),
                      children: [WW("general:player"), kW("OpenCharacterCustomization")]
                    }), UW.featureFlags.useSocialFeatures && (0, ZW.jsxs)("div", {
                      ...TW(oi.m.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.SOCIAL ? "true" : void 0,
                      className: NW()("EverythingMenuTab", {
                        EverythingMenuTabActive: OW === oi.m.SOCIAL
                      }),
                      ...(0, ji.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, OW === oi.m.SOCIAL),
                      children: [WW("socialBar:social"), (0, ZW.jsx)(Iw.b, {})]
                    }), tW && (0, ZW.jsx)("div", {
                      ...TW(oi.m.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.SEASON_PASS ? "true" : void 0,
                      className: NW()("EverythingMenuTab", {
                        EverythingMenuTabActive: OW === oi.m.SEASON_PASS
                      }),
                      children: WW("seasonPass:title", {
                        season: tW.seasonNumber
                      })
                    }), (0, ZO.r)(bW) && (0, ZW.jsxs)("div", {
                      ...TW(oi.m.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.COSMETIC_SHOP ? "true" : void 0,
                      className: NW()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: OW === oi.m.COSMETIC_SHOP
                      }),
                      children: [(0, ZW.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: WW("store:title")
                      }), "new" === lW && (0, ZW.jsx)(Hc, {}), jW && (0, ZW.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === iW && (0, ZW.jsxs)("div", {
                      ...TW(oi.m.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": OW === oi.m.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: NW()("EverythingMenuTab", {
                        EverythingMenuTabActive: OW === oi.m.LOBBY_LEADERBOARD
                      }),
                      children: [WW("general:lobby"), kW("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, ZW.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: pW
                  })]
                }), (0, VP.j)(OW) && pW, (0, ZW.jsxs)("div", {
                  ref: uW,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": gW ? "1" : "0.85"
                  },
                  children: [(0, ZW.jsx)(wE, {
                    show: OW === oi.m.SETTINGS,
                    setBeforeResumeCallback: MW
                  }), (0, ZW.jsx)(jE, {
                    show: OW === oi.m.CUSTOMISATION
                  }), (0, ZW.jsx)(mW.Suspense, {
                    fallback: null,
                    children: (0, ZW.jsx)(nP, {
                      show: OW === oi.m.SHOP
                    })
                  }), (0, ZW.jsx)(XP, {
                    show: OW === oi.m.LOBBY_LEADERBOARD
                  }), xW && (0, ZW.jsx)(hw, {
                    show: OW === oi.m.COSMETIC_SHOP
                  }), !xW && (0, ZW.jsx)(jw, {
                    show: OW === oi.m.COSMETIC_SHOP
                  }), (0, ZW.jsx)(Rw, {
                    show: OW === oi.m.SOCIAL
                  }), (0, ZW.jsx)(At, {
                    show: OW === oi.m.SEASON_PASS
                  })]
                }), !(0, UW.isMobileApp)() && (0, st.k)() && (0, yE.e)(cW.getPlayerRanks()) && (0, ZW.jsx)(YE.b, {
                  ref: KW,
                  className: "EverythingMenuBannerDiv",
                  show: HW,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, ZW.jsx)(ow.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: KW
                    },
                    showing: JW && HW,
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
  35223: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(344),
      EW = OW(35225);

    function NW(WW, iW, OW) {
      const NW = Object.entries(iW).sort(((WW, iW) => iW[1] - WW[1])),
        PW = (0, mW.ob)(WW);
      PW.push(WW ? "\n\n" : "\n");
      for (const [EW, AW] of NW) {
        var LW, cW, wW;
        const WW = null !== (LW = null === OW || void 0 === OW || null === (cW = OW[EW]) || void 0 === cW ? void 0 : cW.icon) && void 0 !== LW ? LW : `${EW} Enchantment`;
        PW.push({
          icon: WW,
          style: {
            fontSize: "1.5rem"
          }
        }), PW.push({
          str: `${EW} ${null!==(wW=(0,mW.V)(AW))&&void 0!==wW?wW:AW}\n`
        })
      }
      PW.push({
        str: "\n"
      });
      for (const [mW, AW] of NW) {
        var tW, ZW, xW, lW;
        const WW = null !== (tW = null === OW || void 0 === OW || null === (ZW = OW[mW]) || void 0 === ZW ? void 0 : ZW.icon) && void 0 !== tW ? tW : `${mW} Enchantment`,
          iW = null !== (xW = null === OW || void 0 === OW || null === (lW = OW[mW]) || void 0 === lW ? void 0 : lW.description) && void 0 !== xW ? xW : (0, EW.k)(mW);
        PW.push({
          icon: WW,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), PW.push({
          str: iW,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), PW.push({
          str: "\n"
        })
      }
      return PW
    }
  },
  35229: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      h: () => kW,
      j: () => jW,
      m: () => cW,
      p: () => UW,
      t: () => tW,
      v: () => xW,
      w: () => bW,
      y: () => ZW
    });
    var mW = OW(327),
      EW = OW(643),
      NW = OW(344),
      PW = OW(2924),
      LW = OW(35223);

    function cW(WW, iW) {
      var OW;
      let {
        player: mW,
        chestOrCreative: EW
      } = WW;
      var NW;
      return iW < mW.length ? null !== (NW = mW[iW]) && void 0 !== NW ? NW : null : null !== (OW = EW[iW - mW.length]) && void 0 !== OW ? OW : null
    }

    function wW(WW) {
      var iW;
      return null !== (iW = WW.amount) && void 0 !== iW ? iW : 0
    }

    function tW(WW) {
      return 0 === WW.button || void 0 === WW.button
    }

    function ZW(WW) {
      return !!WW.shiftKey
    }

    function xW(WW) {
      return "touches" in WW || "touch" === WW.pointerType || "pen" === WW.pointerType
    }
    const lW = new Set,
      AW = 50;

    function bW(WW, iW) {
      var OW;
      const mW = null === (OW = WW[iW]) || void 0 === OW ? void 0 : OW.displayName;
      return (0, EW.K)(mW) ? "string" !== typeof iW ? "" : (!lW.has(iW) && lW.size < AW && (lW.add(iW), console.warn(`No item called "${iW}", so its hover shows the name as given`)), iW) : mW
    }

    function jW(WW, iW, OW) {
      var cW, wW, tW, ZW, xW, lW, AW, jW, UW, kW, sW, MW, KW, SW;
      const YW = WW.attributes,
        yW = null !== (cW = null === (wW = iW[WW.name]) || void 0 === wW ? void 0 : wW.rootName) && void 0 !== cW ? cW : WW.name,
        TW = null !== (tW = null !== (ZW = YW.customDisplayName) && void 0 !== ZW ? ZW : null === (xW = iW[WW.name]) || void 0 === xW ? void 0 : xW.displayName) && void 0 !== tW ? tW : bW(iW, yW);
      let JW = TW;
      const hW = null === (lW = YW.customAttributes) || void 0 === lW ? void 0 : lW.enchantmentTier;
      hW && (JW = (0, NW.ob)(TW, {
        colour: NW.kb[hW]
      }));
      const HW = null !== (AW = null !== (jW = null !== (UW = function(WW, iW) {
        var OW;
        if (void 0 === WW || null !== (OW = iW.customAttributes) && void 0 !== OW && OW.author) return WW;
        const EW = (0, mW.kc)(WW);
        return EW.every((WW => "string" === typeof WW)) ? WW : EW.map((WW => "string" === typeof WW ? WW : {
          icon: WW.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(YW.customDescription, YW)) && void 0 !== UW ? UW : null === (kW = iW[WW.name]) || void 0 === kW ? void 0 : kW.description) && void 0 !== jW ? jW : null === (sW = iW[yW]) || void 0 === sW ? void 0 : sW.description) && void 0 !== AW ? AW : "";
      let nW = HW;
      if (null !== (MW = YW.customAttributes) && void 0 !== MW && MW.enchantments) nW = (0, LW.d)(HW, YW.customAttributes.enchantments, YW.customAttributes.enchantmentData);
      else if (OW[yW]) nW = (0, NW.ob)(HW), nW.push({
        str: "\n"
      }), nW.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (KW = YW.customAttributes) && void 0 !== KW && KW.mobSettings) {
        var uW, oW;
        const WW = YW.customAttributes.mobSettings;
        var dW, eW;
        if (nW = [], (0, EW.K)(YW.customAttributes.health) || (nW.push({
            str: "\n"
          }), nW.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), nW.push({
            str: " "
          }), nW.push({
            str: YW.customAttributes.health.toString()
          }), (0, EW.K)(WW.maxHealth) || (nW.push({
            str: "/"
          }), nW.push({
            str: WW.maxHealth.toString()
          }))), !(0, EW.K)(WW.attackDamage) && WW.attackDamage > 0 && (nW.push({
            str: "\n"
          }), nW.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), nW.push({
            str: " "
          }), nW.push({
            str: WW.attackDamage.toString()
          })), !(0, EW.K)(WW.secondaryAttackDamage) && WW.secondaryAttackDamage > 0 && (nW.push({
            str: "\n"
          }), nW.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), nW.push({
            str: " "
          }), nW.push({
            str: WW.secondaryAttackDamage.toString()
          })), (0, EW.K)(WW.baseRunningSpeed) || (nW.push({
            str: "\n"
          }), nW.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), nW.push({
            str: " "
          }), nW.push({
            str: WW.baseRunningSpeed.toFixed(2)
          })), "Saddled" === WW.metaInfo) nW.push({
          str: "\n"
        }), nW.push({
          str: {
            translationKey: "general:has"
          }
        }), nW.push({
          str: " "
        }), nW.push({
          icon: null !== (dW = null === (eW = WW.tameInfo) || void 0 === eW ? void 0 : eW.saddleItemName) && void 0 !== dW ? dW : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (nW.push({
            str: "\n"
          }), nW.push({
            str: "\n"
          }), WW.petInfo && null !== (uW = WW.tameInfo) && void 0 !== uW && uW.supportsFriendship) {
          const iW = PW.b.getIconsFromFriendshipPoints(WW.petInfo.friendshipPoints);
          for (const WW of iW) nW.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          nW.push({
            str: "\n"
          });
          const OW = PW.b.getMobHungerLevel(WW.petInfo.lastFedAt);
          for (const WW of PW.b.hungerLevelIcons[OW]) nW.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          nW.push({
            str: " "
          }), nW.push({
            str: PW.b.hungerLevelTranslations[OW],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (WW.tameInfo && null !== (oW = WW.tameInfo) && void 0 !== oW && oW.supportsFriendship) {
          var vW, gW;
          let iW = null !== (vW = WW.tameInfo.likedFoods) && void 0 !== vW ? vW : [];
          nW.push({
            str: "\n"
          }), nW.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PW.b.feedTextColours[PW.b.MobFoodType.Superliked]
            }
          }), nW.push({
            str: " "
          }), null !== (gW = WW.petInfo) && void 0 !== gW && gW.superlikedFoodKnown ? (nW.push({
            icon: WW.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), iW = iW.filter((iW => iW !== WW.petInfo.superlikedFood))) : nW.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), nW.push({
            str: "\n"
          }), nW.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PW.b.feedTextColours[PW.b.MobFoodType.Liked]
            }
          }), nW.push({
            str: " "
          });
          for (const WW of iW) nW.push({
            icon: WW,
            style: {
              fontSize: "1.5em"
            }
          });
          nW.push({
            str: "\n"
          }), nW.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PW.b.feedTextColours[PW.b.MobFoodType.Neutral]
            }
          }), nW.push({
            str: " "
          });
          for (const OW of null !== (DW = WW.tameInfo.neutralFoods) && void 0 !== DW ? DW : []) {
            var DW;
            nW.push({
              icon: OW,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          nW.push({
            str: "\n"
          }), nW.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: PW.b.feedTextColours[PW.b.MobFoodType.Disliked]
            }
          }), nW.push({
            str: " "
          });
          for (const OW of null !== (VW = WW.tameInfo.dislikedFoods) && void 0 !== VW ? VW : []) {
            var VW;
            nW.push({
              icon: OW,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        nW.length > 0 ? (nW.shift(), nW.unshift(...(0, NW.ob)(HW))) : nW = (0, NW.ob)(HW)
      }
      return {
        name: JW,
        desc: nW,
        fontStyle: null !== (SW = YW.customAttributes) && void 0 !== SW && SW.author ? "italic" : "normal"
      }
    }

    function UW(WW, iW, OW, mW) {
      const EW = cW(WW, OW),
        NW = cW(WW, mW);
      if (!EW) return !1;
      const PW = iW[EW.name].armourReduction,
        LW = iW[NW.name].armourReduction;
      if (LW === PW) {
        var wW, tW, ZW, xW;
        const WW = null !== (wW = null === (tW = EW.attributes.customAttributes) || void 0 === tW ? void 0 : tW.enchantmentTier) && void 0 !== wW ? wW : "Tier 0",
          iW = null !== (ZW = null === (xW = NW.attributes.customAttributes) || void 0 === xW ? void 0 : xW.enchantmentTier) && void 0 !== ZW ? ZW : "Tier 0";
        return parseInt(WW.replace("Tier ", "")) >= parseInt(iW.replace("Tier ", ""))
      }
      return PW > LW
    }

    function kW(WW) {
      let iW;
      if ("number" === typeof WW) {
        const OW = document.querySelector(`[data-inven-idx="${WW}"]`);
        if (!OW) return null;
        iW = OW.getBoundingClientRect()
      } else iW = WW.getBoundingClientRect();
      return {
        x: iW.left + iW.width / 2,
        y: iW.top + iW.height / 2
      }
    }
  },
  35121: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => jW,
      i: () => UW,
      l: () => kW
    });
    var mW = OW(62),
      EW = OW(5038),
      NW = OW(1172),
      PW = OW(3687),
      LW = OW(1532),
      cW = OW(1283);

    function wW(WW) {
      let {
        text: iW
      } = WW;
      const {
        t: OW
      } = (0, NW.B)(), [mW, wW] = (0, PW.j)();
      return (0, cW.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, cW.jsx)("div", {
          className: "CopyTextRowText",
          children: iW
        }), (0, cW.jsx)(LW.f, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, EW.b)(iW).catch((WW => {
              console.error("Failed to copy text:", WW)
            })), wW()
          },
          disabled: mW,
          children: OW(mW ? "general:copied" : "general:copy")
        })]
      })
    }
    var tW = OW(1339),
      ZW = OW(5238),
      xW = OW(3236),
      lW = OW(100),
      AW = OW(2075),
      bW = OW(1383);

    function jW(WW) {
      let {
        show: iW,
        onClose: OW
      } = WW;
      const {
        requestedGameNameWithVariation: mW,
        lobbyName: EW,
        shownLobbyName: NW
      } = (0, AW.g)("connectedGame"), PW = (0, xW.c)(mW, EW, !1);
      return lW.featureFlags.canUseInviteLinks && (0, cW.jsx)(ZW.b, {
        show: iW,
        close: OW,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, cW.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, cW.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, cW.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, cW.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === PW ? (0, cW.jsx)(bW.d, {}) : PW, (0, cW.jsx)("br", {}), "Lobby Name: ", NW, (0, cW.jsx)("br", {}), (0, cW.jsx)("br", {}), (0, cW.jsx)("br", {}), (0, cW.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, cW.jsx)(UW, {})]
        })
      })
    }

    function UW() {
      var WW;
      const iW = null !== (WW = kW(lW.featureFlags.canUseInviteLinks)) && void 0 !== WW ? WW : "Loading Link...";
      return lW.featureFlags.canUseInviteLinks && (0, cW.jsx)(wW, {
        text: iW
      })
    }

    function kW(WW) {
      const [iW, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        if (!WW) return;
        let iW = !0;
        return (0, tW.x)().then((WW => {
          iW && OW(WW)
        })).catch((WW => {
          console.error("Failed to get invite link:", WW)
        })), () => {
          iW = !1
        }
      }), [WW]), iW
    }
  },
  35277: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      d: () => jW
    });
    OW(35279);
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1172),
      LW = OW(1532),
      cW = OW(3582),
      wW = OW(1391),
      tW = OW(3291),
      ZW = OW(4147),
      xW = OW(3147),
      lW = OW(1283);

    function AW(WW) {
      let {
        endsAt: iW,
        className: OW
      } = WW;
      return (0, lW.jsxs)("span", {
        className: NW()("NewPlayerDealClock", OW),
        children: [(0, lW.jsx)(wW.c, {
          name: "hourglass"
        }), (0, lW.jsx)(cW.f, {
          toTime: iW
        })]
      })
    }

    function bW(WW) {
      let {
        offered: iW,
        needsLogin: OW,
        busy: mW,
        highlight: EW,
        onBuy: cW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)(), {
        pack: AW
      } = iW, bW = (0, ZW.e)(iW.package);
      return (0, lW.jsxs)("div", {
        className: NW()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: EW
        }),
        children: [(0, lW.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, lW.jsx)("img", {
            src: xW.c[iW.tier],
            alt: "",
            draggable: !1
          }), (0, lW.jsx)("span", {
            className: "NewPlayerDealTag",
            children: wW("newPlayerDeal:tag")
          })]
        }), (0, lW.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, lW.jsx)(tW.c, {
            className: "NewPlayerDealPackAmount",
            amount: AW.gems
          }), (0, lW.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: wW("newPlayerDeal:split", {
              usual: AW.usualGems.toLocaleString(),
              bonus: (AW.gems - AW.usualGems).toLocaleString()
            })
          })]
        }), (0, lW.jsx)(LW.n, {
          className: "NewPlayerDealBuy",
          loading: mW,
          onClick: cW,
          ariaLabel: wW("newPlayerDeal:buyLabel", {
            amount: AW.gems.toLocaleString(),
            price: bW
          }),
          children: wW(OW ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: bW
          })
        })]
      })
    }

    function jW(WW) {
      let {
        view: iW,
        needsLogin: OW,
        busy: EW,
        highlight: LW,
        onBuy: cW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)();
      return (0, lW.jsxs)("div", {
        className: NW()("NewPlayerDealPacks", iW.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [iW.packs.map(((WW, iW) => (0, lW.jsxs)(mW.Fragment, {
          children: [iW > 0 && (0, lW.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, lW.jsx)("i", {})
          }), (0, lW.jsx)(bW, {
            offered: WW,
            needsLogin: OW,
            busy: EW,
            highlight: LW === WW.pack.packageId,
            onBuy: () => {
              cW(WW)
            }
          })]
        }, WW.pack.packageId))), (0, lW.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, lW.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: wW("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35285: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => TW,
      g: () => hW
    });
    OW(35279);
    var mW = OW(4139),
      EW = OW(1556),
      NW = OW(3132),
      PW = OW(4126),
      LW = OW(4105),
      cW = OW(4132),
      wW = OW(4085),
      tW = OW(1172),
      ZW = OW(1422),
      xW = OW(1107),
      lW = OW(1532),
      AW = OW(1391),
      bW = OW(3291),
      jW = OW(3697),
      UW = OW(3559),
      kW = OW(3566),
      sW = OW(3572),
      MW = OW(1283);
    const KW = new cW.d(wW.getBillingClient, wW.addPurchaseRecordListener);
    let SW = !1;

    function YW(WW, iW) {
      null !== WW && (0, UW.v)(WW) || ((0, EW.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${iW.pack.packageId}`
      }), null !== WW && (0, UW.D)(WW), TW(iW.pack.gems))
    }

    function yW(WW, iW, OW) {
      const EW = (0, UW.e)(iW);
      switch (WW.kind) {
        case "completed":
          YW(EW, OW);
          break;
        case "pending":
          NW = WW.intentId, PW = () => {
            jW.j.refresh(), YW(EW, OW)
          }, SW || (SW = !0, KW.listen()), KW.follow(NW, PW);
          break;
        case "unknownPackage":
          (0, UW.T)(iW, null);
          break;
        case "failed":
          WW.errorKey === mW.b.newPlayerDealUnavailable && (0, UW.T)(iW, null)
      }
      var NW, PW
    }

    function TW(WW) {
      ZW.NotificationProvider.showCustomPopup({
        body: iW => (0, MW.jsx)(JW, {
          gems: WW,
          close: iW
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function JW(WW) {
      let {
        gems: iW,
        close: OW
      } = WW;
      const {
        t: mW
      } = (0, tW.B)();
      return (0, MW.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, MW.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, MW.jsx)(AW.c, {
            name: "circle-check"
          }), (0, MW.jsx)(bW.c, {
            amount: iW
          }), (0, MW.jsx)("span", {
            children: mW("newPlayerDeal:added")
          })]
        }), (0, MW.jsx)(lW.n, {
          className: "NewPlayerDealAddedOk",
          onClick: OW,
          children: mW("general:ok")
        })]
      })
    }

    function hW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.b;
      const {
        userContext: OW
      } = (0, xW.e)(), {
        purchaseUnderWay: mW,
        notice: EW,
        buy: cW
      } = (0, LW.b)(iW), wW = (0, kW.n)(), tW = OW.mayBuy() || (0, NW.guestsMayBuy)(), ZW = null === wW ? !tW : wW.guest && !OW.isLoggedIn();
      return {
        purchaseUnderWay: mW,
        notice: EW,
        needsLogin: ZW,
        buyPack: function(mW, EW) {
          (0, UW.L)("new_player_deal.buy", (0, sW.b)(mW.arm, WW, EW.pack.packageId)), null === wW ? cW(function(WW) {
            return {
              sku: WW.pack.packageId,
              tier: WW.tier,
              amount: WW.pack.gems,
              bonusPercent: 0,
              package: WW.package
            }
          }(EW), null, {
            followPending: !1
          }).then((WW => {
            yW(WW, OW, EW)
          })) : ZW ? iW(EW.pack.packageId, null) : YW((0, UW.e)(OW), EW)
        }
      }
    }
  },
  35213: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(2075),
      LW = OW(1283);

    function cW(WW) {
      const iW = Math.floor(WW / 3600),
        OW = Math.floor(WW % 3600 / 60),
        mW = Math.floor(WW % 60),
        EW = `${OW.toString().padStart(2,"0")}:${mW.toString().padStart(2,"0")}`;
      return iW > 0 ? `${iW}:${EW}` : EW
    }
    const wW = (0, mW.memo)((function(WW) {
      let {
        className: iW
      } = WW;
      const {
        recording: OW,
        clipping: mW,
        seconds: EW
      } = (0, PW.g)("replayRecorder");
      return OW || mW ? (0, LW.jsxs)("div", {
        className: NW()("RecordingIndicator", {
          RecordingIndicatorClipping: !OW
        }, iW),
        "data-camera-keeper": "",
        children: [(0, LW.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, LW.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: OW ? "REC" : "CLIP"
        }), OW && (0, LW.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: cW(EW)
        })]
      }) : null
    }))
  },
  35291: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1283);
    const PW = 21,
      LW = 2 * Math.PI * PW;

    function cW(WW) {
      let {
        tier: iW,
        state: OW,
        progress: mW,
        size: cW = "large"
      } = WW;
      const wW = EW()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === cW,
        SeasonPassTierNodeLarge: "large" === cW,
        SeasonPassTierNodeReached: "reached" === OW,
        SeasonPassTierNodeEarning: "earning" === OW
      });
      if ("earning" !== OW || "large" === cW) return (0, NW.jsx)("span", {
        className: wW,
        children: (0, NW.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: iW
        })
      });
      const tW = Math.max(0, Math.min(1, mW));
      return (0, NW.jsxs)("span", {
        className: wW,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * tW),
        children: [(0, NW.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, NW.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, NW.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: PW
          }), (0, NW.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: PW,
            strokeDasharray: `${tW*LW} ${LW}`,
            transform: "rotate(-90 28 28)"
          }), (0, NW.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, NW.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: iW
        })]
      })
    }
  },
  5643: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5329),
      PW = OW(1172),
      LW = OW(1391),
      cW = OW(1532),
      wW = OW(1584),
      tW = OW(1422),
      ZW = OW(3479),
      xW = OW(1283);
    const lW = {
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

    function AW(WW) {
      let {
        platform: iW
      } = WW;
      const OW = "youtube" === iW;
      return (0, xW.jsxs)("span", {
        className: EW()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: OW
        }),
        children: [OW && (0, xW.jsx)(ZW.e, {
          variant: "white"
        }), !OW && (0, xW.jsx)(LW.c, {
          name: lW[iW].icon,
          kit: "brands"
        })]
      })
    }

    function bW(WW) {
      let {
        platform: iW,
        link: OW,
        editable: mW,
        userContext: EW,
        onLinksUpdated: ZW
      } = WW;
      const {
        t: bW
      } = (0, PW.B)(), jW = lW[iW];
      if (!OW && !mW) return null;

      function UW() {
        var WW;
        if (!EW || !ZW) return;
        tW.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: jW.name
            }
          },
          prefixText: NW.u[iW],
          placeholderText: "playBloxd",
          initialValue: null !== (WW = null === OW || void 0 === OW ? void 0 : OW.handle) && void 0 !== WW ? WW : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: OW ? "general:remove" : void 0
        }).getResult().then((async WW => {
          if ("notificationTornDown" !== WW && null !== WW) try {
            "submit" === WW.type ? await wW.e.setSocialLink(EW, iW, WW.value) : await wW.e.clearSocialLink(EW, iW), ZW()
          } catch (OW) {
            console.error("Failed to update social link", OW), tW.NotificationProvider.showAlertPopup({
              title: OW.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (OW) {
        const WW = `@${OW.handle}`;
        return (0, xW.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: jW.color
          },
          href: OW.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, xW.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, xW.jsx)(AW, {
              platform: iW
            }), (0, xW.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, xW.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: WW
              })
            })]
          }), mW && (0, xW.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, cW.fb)({
              stopPropagation: !0
            }),
            onClick: WW => {
              WW.stopPropagation(), WW.preventDefault(), UW()
            },
            children: (0, xW.jsx)(LW.c, {
              name: "pen-to-square"
            })
          }), !mW && (0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, xW.jsx)(LW.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, xW.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: jW.color
        },
        ...(0, cW.fb)(),
        onClick: () => {
          UW()
        },
        children: [(0, xW.jsx)(AW, {
          platform: iW
        }), (0, xW.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: jW.name
          }), (0, xW.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: bW("homePage:profileSocialLinkAdd")
          })]
        }), (0, xW.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, xW.jsx)(LW.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function jW(WW) {
      let {
        socialLinks: iW,
        editable: OW = !1,
        userContext: mW,
        onLinksUpdated: EW
      } = WW;
      if (!OW && 0 === iW.length) return null;
      const PW = new Map(iW.map((WW => [WW.platform, WW]))),
        LW = OW ? NW.t : iW.map((WW => WW.platform));
      return (0, xW.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, xW.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: LW.map((WW => (0, xW.jsx)(bW, {
            platform: WW,
            link: PW.get(WW),
            editable: OW,
            userContext: mW,
            onLinksUpdated: EW
          }, WW)))
        })
      })
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  35272: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(62),
      EW = OW(4653);

    function NW() {
      const [WW, iW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        let WW = !0;
        return (0, EW.c)().then((() => {
          WW && iW(!0)
        })), () => {
          WW = !1
        }
      }), []), WW
    }
  },
  7583: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(62),
      EW = OW(39);

    function NW(WW, iW) {
      var OW;
      const [NW, PW] = (0, mW.useState)(null !== (OW = EW.i.getItem(WW)) && void 0 !== OW ? OW : iW);
      return [NW, iW => {
        EW.i.setItem(WW, iW), PW(iW)
      }]
    }
  },
  35190: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => bW,
      c: () => AW
    });
    OW(35198);
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(35181);

    function LW(WW, iW) {
      return Math.max(1, Math.round(WW * iW))
    }

    function cW(WW, iW) {
      const OW = iW * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        mW = function(WW, iW) {
          if (WW.lines) return LW(WW.lineThickness, iW) % 2;
          if (WW.dot) return LW(WW.dotSize, iW) % 2;
          return wW(WW, iW) % 2
        }(WW, iW),
        EW = tW(WW.lineThickness * OW, mW),
        NW = LW(WW.lineLength, OW),
        PW = Math.round(WW.gap * OW),
        cW = WW.outline > 0 ? LW(WW.outline, OW) : 0,
        xW = [];
      if (WW.lines && (xW.push({
          x: EW + PW,
          y: 0,
          w: NW,
          h: EW,
          arm: "right"
        }), xW.push({
          x: -PW - NW,
          y: 0,
          w: NW,
          h: EW,
          arm: "left"
        }), xW.push({
          x: 0,
          y: EW + PW,
          w: EW,
          h: NW,
          arm: "down"
        }), WW.tStyle || xW.push({
          x: 0,
          y: -PW - NW,
          w: EW,
          h: NW,
          arm: "up"
        }), 0 === PW && xW.push({
          x: 0,
          y: 0,
          w: EW,
          h: EW
        })), WW.dot) {
        const iW = tW(WW.dotSize * OW, mW),
          NW = WW.lines && 0 === PW && WW.dotSize > WW.lineThickness ? Math.max(iW, EW + 2) : iW,
          LW = (EW - NW) / 2;
        xW.push({
          x: LW,
          y: LW,
          w: NW,
          h: NW
        })
      }
      const lW = xW.map((WW => ({
        ...WW,
        x: WW.x - cW,
        y: WW.y - cW,
        w: WW.w + 2 * cW,
        h: WW.h + 2 * cW
      })));
      let AW = null,
        bW = null;
      if (WW.circle) {
        const iW = LW(WW.circleThickness, OW),
          NW = function(WW, iW) {
            return WW + (WW % 2 === iW ? 0 : 1)
          }(wW(WW, OW), mW),
          PW = (EW - NW) / 2;
        AW = ZW(PW, NW, iW), cW > 0 && (bW = ZW(PW - cW, NW + 2 * cW, iW + 2 * cW))
      }
      return {
        cell: EW,
        fills: xW,
        outlines: cW > 0 ? lW : [],
        ring: AW,
        ringOutline: bW
      }
    }

    function wW(WW, iW) {
      return Math.round(WW.circleRadius * iW * 2 + LW(WW.circleThickness, iW))
    }

    function tW(WW, iW) {
      return Math.max(2 - iW, 2 * Math.round((WW - iW) / 2) + iW)
    }

    function ZW(WW, iW, OW) {
      const mW = 2 * OW >= iW - 1;
      return {
        x: WW,
        y: WW,
        size: iW,
        border: Math.min(OW, Math.floor(iW / 2)),
        filled: mW
      }
    }
    var xW = OW(1283);
    const lW = 1.4;

    function AW(WW, iW) {
      return WW && iW ? `scale(${lW})` : "scale(1)"
    }

    function bW(WW) {
      return "classic" === WW.settings.style ? (0, xW.jsx)(kW, {
        ...WW
      }) : (0, xW.jsx)(TW, {
        ...WW
      })
    }
    const jW = .125;

    function UW(WW, iW) {
      const OW = {};
      if (WW.color !== PW.g.color && (OW.color = (0, PW.m)(WW.color)), WW.opacity !== PW.g.opacity && (OW.opacity = WW.opacity / 100), WW.outline !== PW.g.outline || WW.outlineColor !== PW.g.outlineColor) {
        const iW = WW.outline,
          mW = (0, PW.m)(WW.outlineColor);
        OW.textShadow = iW > 0 ? `-${iW}px 0 ${mW}, 0 ${iW}px ${mW}, ${iW}px 0 ${mW}, 0 -${iW}px ${mW}` : "none"
      }
      if (WW.size !== PW.g.size) {
        const mW = WW.size / 100;
        OW.fontSize = iW ? `calc(max(1.3rem, 18px) * ${mW})` : `calc(1.3rem * ${mW})`, OW.marginTop = `-${jW}em`, OW.transformOrigin = `50% calc(50% + ${jW}em)`
      }
      return OW
    }

    function kW(WW) {
      let {
        settings: iW,
        touch: OW,
        inPreview: mW,
        inEditor: NW,
        pressed: PW = !1,
        pressRef: LW
      } = WW;
      return (0, xW.jsx)("div", {
        className: EW()("Crosshair", {
          Touch: OW,
          CrosshairInPreview: mW,
          CrosshairInEditor: NW || mW
        }),
        ref: LW,
        style: {
          transform: AW(PW, iW.growOnClick),
          ...UW(iW, OW)
        },
        children: "+"
      })
    }

    function sW(WW, iW) {
      return WW / iW + "px"
    }

    function MW(WW, iW, OW, mW) {
      return {
        ...YW(WW, iW, OW),
        width: sW(WW.w, OW),
        height: sW(WW.h, OW),
        background: mW
      }
    }

    function KW(WW, iW, OW) {
      return {
        left: sW(WW.x, iW),
        top: sW(WW.y, iW),
        width: sW(WW.size, iW),
        height: sW(WW.size, iW),
        borderWidth: sW(WW.border, iW),
        borderColor: OW,
        background: WW.filled ? OW : void 0
      }
    }
    const SW = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function YW(WW, iW, OW) {
      const [mW, EW] = WW.arm ? SW[WW.arm] : [0, 0], NW = Math.round(iW * OW);
      return {
        left: sW(WW.x + mW * NW, OW),
        top: sW(WW.y + EW * NW, OW)
      }
    }

    function yW(WW) {
      return WW.arm ? {
        "data-arm": WW.arm,
        "data-x": WW.x,
        "data-y": WW.y
      } : {}
    }

    function TW(WW) {
      let {
        settings: iW,
        inPreview: OW,
        inEditor: mW,
        pressed: LW = !1,
        spread: wW,
        spreadRef: tW
      } = WW;
      const ZW = (0, NW.useRef)(null),
        {
          box: AW,
          dpr: bW
        } = function(WW) {
          const [iW, OW] = (0, NW.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, NW.useLayoutEffect)((() => {
            const iW = WW.current;
            if (!iW) return;
            const mW = () => {
              const WW = iW.getBoundingClientRect(),
                mW = window.devicePixelRatio || 1;
              OW((iW => iW.dpr === mW && iW.box.left === WW.left && iW.box.top === WW.top && iW.box.width === WW.width && iW.box.height === WW.height ? iW : {
                box: {
                  left: WW.left,
                  top: WW.top,
                  width: WW.width,
                  height: WW.height
                },
                dpr: mW
              }))
            };
            mW();
            const EW = new ResizeObserver(mW);
            return EW.observe(iW), window.addEventListener("resize", mW), window.addEventListener("scroll", mW, !0), () => {
              EW.disconnect(), window.removeEventListener("resize", mW), window.removeEventListener("scroll", mW, !0)
            }
          }), [WW]), iW
        }(ZW),
        jW = (0, NW.useRef)(bW);
      jW.current = bW;
      const UW = cW(iW, bW, LW && iW.growOnClick ? lW : 1),
        kW = function(WW, iW, OW) {
          const mW = Math.round((WW.left + WW.width / 2) * OW - iW / 2),
            EW = Math.round((WW.top + WW.height / 2) * OW - iW / 2);
          return {
            x: mW / OW - WW.left,
            y: EW / OW - WW.top
          }
        }(AW, UW.cell, bW),
        sW = (0, PW.m)(iW.color),
        SW = (0, PW.m)(iW.outlineColor),
        TW = (0, NW.useRef)(0);
      (0, NW.useLayoutEffect)((() => {
        if (tW) return tW.current = WW => {
          var iW;
          TW.current = WW, null === (iW = ZW.current) || void 0 === iW || iW.querySelectorAll("[data-arm]").forEach((iW => {
            Object.assign(iW.style, YW(function(WW) {
              return {
                x: Number(WW.dataset.x),
                y: Number(WW.dataset.y),
                arm: WW.dataset.arm
              }
            }(iW), WW, jW.current))
          }))
        }, () => {
          tW.current = null
        }
      }), [tW]);
      const JW = null !== wW && void 0 !== wW ? wW : TW.current;
      return (0, xW.jsx)("div", {
        ref: ZW,
        className: EW()("CrosshairShapes", {
          CrosshairInPreview: OW,
          CrosshairInEditor: mW || OW,
          CrosshairSpreads: void 0 !== tW
        }),
        children: (0, xW.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: kW.x,
            top: kW.y,
            opacity: iW.opacity / 100
          },
          children: (0, xW.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [UW.ringOutline && (0, xW.jsx)("div", {
              className: "CrosshairRing",
              style: KW(UW.ringOutline, bW, SW)
            }), UW.outlines.map(((WW, iW) => (0, xW.jsx)("div", {
              className: "CrosshairPart",
              ...yW(WW),
              style: MW(WW, JW, bW, SW)
            }, `o${iW}`))), UW.ring && (0, xW.jsx)("div", {
              className: "CrosshairRing",
              style: KW(UW.ring, bW, sW)
            }), UW.fills.map(((WW, iW) => (0, xW.jsx)("div", {
              className: "CrosshairPart",
              ...yW(WW),
              style: MW(WW, JW, bW, sW)
            }, `f${iW}`)))]
          })
        })
      })
    }
  },
  35205: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => jW,
      h: () => bW
    });
    var mW = OW(35181);
    const EW = "XH1-",
      NW = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      PW = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      LW = ["color", "outlineColor"],
      cW = 1 + 3 * LW.length + PW.length + 1,
      wW = Math.ceil(8 * cW / Math.log2(62)),
      tW = EW.length + wW;

    function ZW(WW) {
      let iW = 90;
      for (const OW of WW) iW = 31 * iW + OW & 255;
      return iW
    }
    const xW = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      lW = BigInt(xW.length);

    function AW(WW, iW) {
      let OW = 0n;
      for (const EW of WW) {
        const WW = xW.indexOf(EW);
        if (WW < 0) return null;
        OW = OW * lW + BigInt(WW)
      }
      if (OW >> BigInt(8 * iW) !== 0n) return null;
      const mW = [];
      for (let EW = 0; EW < iW; EW++) mW.unshift(Number(0xffn & OW)), OW >>= 8n;
      return mW
    }

    function bW(WW) {
      let iW = "shapes" === WW.style ? 1 : 0;
      NW.forEach(((OW, mW) => {
        WW[OW] && (iW |= 1 << mW + 1)
      }));
      const OW = [iW];
      for (const EW of LW) {
        const iW = (0, mW.i)(EW, WW[EW]);
        OW.push(iW >> 16 & 255, iW >> 8 & 255, 255 & iW)
      }
      for (const EW of PW) {
        const {
          min: iW,
          step: NW
        } = mW.e[EW];
        OW.push(Math.round(((0, mW.i)(EW, WW[EW]) - iW) / NW))
      }
      return OW.push(ZW(OW)), EW + function(WW, iW) {
        let OW = 0n;
        for (const EW of WW) OW = OW << 8n | BigInt(EW);
        let mW = "";
        for (let EW = 0; EW < iW; EW++) mW = xW[Number(OW % lW)] + mW, OW /= lW;
        return mW
      }(OW, wW)
    }

    function jW(WW) {
      for (const iW of WW.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wW}})`, "gi"))) {
        const WW = UW(AW(iW[1], cW));
        if (WW) return WW
      }
      return null
    }

    function UW(WW) {
      if (!WW || WW.length !== cW || ZW(WW.slice(0, -1)) !== WW[WW.length - 1]) return null;
      const iW = WW[0],
        OW = {
          ...mW.g,
          style: 1 & iW ? "shapes" : "classic"
        };
      NW.forEach(((WW, mW) => {
        OW[WW] = 0 !== (iW & 1 << mW + 1)
      }));
      let EW = 1;
      for (const mW of LW) OW[mW] = WW[EW] << 16 | WW[EW + 1] << 8 | WW[EW + 2], EW += 3;
      for (const NW of PW) {
        const {
          min: iW,
          step: PW
        } = mW.e[NW];
        OW[NW] = (0, mW.i)(NW, iW + WW[EW] * PW), EW++
      }
      return OW
    }
  },
  35181: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => PW,
      e: () => mW,
      g: () => EW,
      i: () => NW,
      m: () => wW,
      q: () => cW,
      t: () => tW,
      w: () => LW
    });
    const mW = {
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
      EW = Object.freeze({
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

    function NW(WW, iW) {
      var OW;
      const {
        min: NW,
        max: PW,
        step: LW
      } = mW[WW];
      if (!Number.isFinite(iW)) return EW[WW];
      const cW = (null !== (OW = String(LW).split(".")[1]) && void 0 !== OW ? OW : "").length,
        wW = Number((Math.round(iW / LW) * LW).toFixed(cW));
      return Math.min(PW, Math.max(NW, wW))
    }

    function PW(WW, iW, OW) {
      const mW = "number" === typeof OW ? NW(iW, OW) : OW;
      return {
        ...WW,
        [iW]: mW
      }
    }

    function LW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(EW).every((mW => OW.includes(mW) || WW[mW] === iW[mW]))
    }

    function cW(WW) {
      return LW(WW, EW)
    }

    function wW(WW) {
      return `#${WW.toString(16).padStart(6,"0")}`
    }

    function tW(WW) {
      const iW = /^#?([0-9a-f]{6})$/i.exec(WW.trim());
      return iW ? parseInt(iW[1], 16) : null
    }
  },
  35209: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      g: () => xW
    });
    var mW = OW(62),
      EW = OW(39),
      NW = OW(35205),
      PW = OW(35181);
    const LW = "crosshairCode";
    let cW = null;
    const wW = new Set;

    function tW() {
      if (null === cW) {
        var WW;
        const iW = EW.i.getItem(LW);
        cW = null !== (WW = "string" === typeof iW ? (0, NW.e)(iW) : null) && void 0 !== WW ? WW : PW.g
      }
      return cW
    }

    function ZW(WW) {
      cW = WW, (0, PW.q)(WW) ? EW.i.removeItem(LW) : EW.i.setItem(LW, (0, NW.h)(WW));
      for (const iW of wW) iW()
    }

    function xW() {
      const [WW, iW] = (0, mW.useState)(tW);
      return (0, mW.useEffect)((() => {
        const WW = () => {
          iW(tW())
        };
        return WW(), OW = WW, wW.add(OW), () => {
          wW.delete(OW)
        };
        var OW
      }), []), WW
    }
  },
  35240: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => PW,
      f: () => NW
    });
    var mW = OW(62);
    const EW = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(WW) {
        var iW;
        return null !== (iW = this.inFlight.get(WW)) && void 0 !== iW ? iW : 0
      }
      setInFlight(WW, iW) {
        this.getInFlight(WW) !== iW && (this.inFlight.set(WW, iW), this.notify())
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      getLanding(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = this.landings.get(WW)) || void 0 === OW ? void 0 : OW.at(-1)) && void 0 !== iW ? iW : null
      }
      hasLanding(WW, iW) {
        var OW, mW;
        return null !== (OW = null === (mW = this.landings.get(WW)) || void 0 === mW ? void 0 : mW.includes(iW)) && void 0 !== OW && OW
      }
      addLanding(WW, iW) {
        var OW;
        const mW = null !== (OW = this.landings.get(WW)) && void 0 !== OW ? OW : [];
        return this.landings.set(WW, [...mW, iW]), this.notify(), () => {
          this.landings.set(WW, this.landings.get(WW).filter((WW => WW !== iW))), this.notify()
        }
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
    };

    function NW(WW, iW) {
      const [OW, NW] = (0, mW.useState)((() => EW.getInFlight(WW)));
      return (0, mW.useLayoutEffect)((() => {
        const iW = () => {
          NW(EW.getInFlight(WW))
        };
        return iW(), EW.subscribe(iW)
      }), [WW]), Math.max(0, iW - OW)
    }

    function PW(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, mW.useLayoutEffect)((() => {
        if (OW) return EW.addLanding(WW, iW.current)
      }), [WW, iW, OW])
    }
  },
  35139: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      g: () => mW
    });
    const mW = "image/jpeg",
      EW = "jpg"
  },
  35146: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => cW,
      h: () => wW,
      l: () => tW
    });
    var mW = OW(1787),
      EW = OW(4390),
      NW = OW(100),
      PW = OW(1876),
      LW = OW(35139);

    function cW() {
      return !(0, NW.isMobileApp)() || mW.d.supports("photos")
    }
    async function wW(WW) {
      var iW, OW;
      if ((0, NW.isMobileApp)()) {
        const {
          saved: iW
        } = await mW.d.request("photos.save", {
          data: await (0, EW.e)(WW),
          mimeType: LW.g
        });
        return iW ? "saved" : "denied"
      }
      return (0, NW.isIOS)() && null !== (iW = (OW = navigator).canShare) && void 0 !== iW && iW.call(OW, {
        files: [WW]
      }) ? tW(WW) : ((0, PW.e)(WW, WW.name), "saved")
    }
    async function tW(WW) {
      try {
        return await navigator.share({
          files: [WW]
        }), "shared"
      } catch (iW) {
        if (iW instanceof DOMException && "AbortError" === iW.name) return "uW";
        if (iW instanceof DOMException && "NotAllowedError" === iW.name) return "needsTap";
        throw iW
      }
    }
  },
  35124: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      e: () => bW,
      h: () => jW,
      l: () => UW
    });
    var mW = OW(25),
      EW = OW(35114),
      NW = OW(1729),
      PW = OW(35130);
    const LW = 64,
      cW = 8;
    async function wW(WW) {
      try {
        const iW = await createImageBitmap(WW, {
          resizeWidth: LW,
          resizeHeight: LW,
          resizeQuality: "high"
        });
        try {
          const WW = document.createElement("canvas");
          WW.width = LW, WW.height = LW;
          const OW = WW.getContext("2d", {
            willReadFrequently: !0
          });
          return OW.drawImage(iW, 0, 0, LW, LW),
            function(WW) {
              for (let iW = 0; iW < WW.length; iW += 4)
                if (WW[iW] > cW || WW[iW + 1] > cW || WW[iW + 2] > cW) return !1;
              return !0
            }(OW.getImageData(0, 0, LW, LW).data)
        } finally {
          iW.close()
        }
      } catch (iW) {
        return console.warn("Screenshot mode: couldn't check whether a photo is blank", iW), !1
      }
    }
    var tW = OW(35139);
    const ZW = 8294400,
      xW = .92,
      lW = 3;
    class AW extends Error {
      constructor(WW) {
        super(`The photo came out blank ${WW} times`), this.name = "BlankPhotoError"
      }
    }

    function bW() {
      (0, NW.f)(), mW.d.set({
        screenshotMode: !0
      })
    }

    function jW() {
      mW.d.set({
        screenshotMode: !1
      })
    }
    async function UW() {
      const WW = performance.now(),
        iW = await async function(WW, iW) {
          let OW = 0;
          for (; OW < lW;) {
            let EW;
            try {
              EW = await WW()
            } catch (mW) {
              if (0 === OW) throw mW;
              return {
                outcome: "failed",
                error: mW,
                blanks: OW
              }
            }
            if (!await iW(EW)) return {
              outcome: "saved",
              blob: EW,
              blanks: OW
            };
            OW++
          }
          return {
            outcome: "refused",
            blanks: OW
          }
        }((async () => {
          const {
            width: WW,
            height: iW,
            scale: OW
          } = function(WW, iW, OW) {
            const mW = Math.max(1, WW),
              EW = Math.max(1, iW),
              NW = Math.min(Math.max(1, OW), Math.sqrt(ZW / (mW * EW)));
            return {
              width: Math.round(mW * NW),
              height: Math.round(EW * NW),
              scale: NW
            }
          }(window.innerWidth, window.innerHeight, window.devicePixelRatio);
          return (await EW.devTools.capturePhoto(WW, iW, {
            scale: OW,
            type: tW.g,
            quality: xW
          })).blob
        }), wW);
      if (iW.blanks > 0) {
        const mW = (0, PW.c)();
        OW.e(309).then((() => OW(42551))).then((OW => {
          let {
            reportBlankPhoto: EW
          } = OW;
          EW(iW.blanks, iW.outcome, WW, mW)
        })).catch((WW => {
          console.warn("Screenshot mode: couldn't report a blank photo", WW)
        }))
      }
      switch (iW.outcome) {
        case "saved":
          return new File([iW.blob], function(WW) {
            const iW = WW => String(WW).padStart(2, "0"),
              OW = `${WW.getFullYear()}${iW(WW.getMonth()+1)}${iW(WW.getDate())}`,
              mW = `${iW(WW.getHours())}${iW(WW.getMinutes())}${iW(WW.getSeconds())}`;
            return `bloxd-${OW}-${mW}.${tW.d}`
          }(new Date), {
            type: tW.g
          });
        case "refused":
          throw new AW(iW.blanks);
        case "failed":
          throw iW.error
      }
    }
  },
  35177: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      d: () => EW
    });
    var mW = OW(25);

    function EW(WW, iW) {
      return WW && !iW
    }

    function NW() {
      return EW(mW.d.get("isTouchScreen"), mW.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5445: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      g: () => NW,
      k: () => EW
    });
    let mW = null;

    function EW(WW) {
      mW = WW
    }

    function NW() {
      return mW
    }

    function PW(WW) {
      return "bloxd" === WW.site && !WW.isMobileApp && !WW.isTouchScreen
    }
  },
  35116: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = new Set(["chunkBorders"])
  },
  35114: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ALL_DEV_TOOLS: () => PW,
      coreDevTools: () => wW,
      devTools: () => cW
    });
    var mW = OW(671),
      EW = OW(1301),
      NW = OW(35116);
    const PW = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function LW() {
      const {
        noaDevTools: WW
      } = await OW.e(269).then((() => OW(42543)));
      return WW
    }
    const cW = new class {
        constructor() {
          this.loadHost = LW, this.tools = PW
        }
        setHost(WW) {
          this.tools = null === WW ? PW : WW.tools, this.loadHost = null === WW ? LW : async () => WW
        }
        supports(WW) {
          return this.tools.has(WW)
        }
        async downloadScene(WW, iW) {
          const OW = await this.loadHost();
          await OW.downloadScene(WW, iW)
        }
        async setAmbientLightIntensity(WW) {
          const iW = await this.loadHost();
          await iW.setAmbientLightIntensity(WW)
        }
        async capturePhoto(WW, iW, OW) {
          return (await this.loadHost()).capturePhoto(WW, iW, OW)
        }
      },
      wW = {
        tools: NW.e,
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
    mW.K && cW.setHost(wW), (0, EW.s)((() => {
      cW.setHost(wW)
    }))
  },
  35270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => EW,
      f: () => ZW
    });
    var mW = OW(1659);

    function EW(WW) {
      var iW;
      return {
        ...LW.store,
        yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
      }
    }
    const NW = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      PW = {
        ...NW,
        radius: 33,
        target: [0, 3.9, 0]
      },
      LW = {
        player: NW,
        store: PW,
        showcase: {
          ...PW,
          target: [0, 1.9, 0]
        }
      };

    function cW(WW, iW) {
      WW instanceof Promise ? WW.then(iW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : iW(WW)
    }
    class wW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var iW;
        this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class tW {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, iW;
        return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, iW) {
        var OW;
        null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
      }
      setNametag(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
      }
      playEmote(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
      }
      setOrbit(WW) {
        var iW;
        null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
      }
      resetCamera() {
        var WW;
        null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
      }
      async untilDrawn(WW) {
        var iW;
        await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
      }
      resize(WW, iW) {
        var OW;
        this.size = {
          width: WW,
          height: iW
        }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const ZW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new wW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new wW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new wW(this.current().openMobLineup(WW))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(WW, iW) {
        return new tW(this.current().openCharacter(WW, iW))
      }
    }
  },
  35264: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW.d,
      e: () => mW.e,
      f: () => mW.f
    });
    var mW = OW(35270);
    class EW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class NW {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(310)]).then((() => OW(42563))))), this.characterScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(177), OW.e(260), OW.e(278), OW.e(292), OW.e(295), OW.e(91), OW.e(224), OW.e(252), OW.e(266), OW.e(112), OW.e(124), OW.e(257), OW.e(142), OW.e(90), OW.e(122), OW.e(279), OW.e(184)]).then((() => OW(42656)))))
      }
      openMob(WW) {
        return this.mobScene.run((iW => iW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((iW => iW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
      }
      openCharacter(WW, iW) {
        return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
      }
    }
    mW.f.setDefaultHost((() => new NW))
  },
  7659: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      g: () => NW
    });
    var mW = OW(39);
    const EW = "shaderPack";
    async function NW() {
      var WW;
      let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
    }
  },
  35150: (WW, iW, OW) => {
    function mW(WW, iW) {
      return WW && !iW
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  35167: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(1303);

    function EW() {
      var WW, iW;
      return null !== (WW = null === (iW = screen.orientation) || void 0 === iW ? void 0 : iW.type) && void 0 !== WW ? WW : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const NW = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && EW() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = EW(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, mW.ub)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const WW of this.resizers) WW()
          }
        }), 1e3)
      }
      heldSizer(WW) {
        let iW = !1;
        return () => {
          if (iW && this.isHeld()) return null;
          const OW = WW();
          return iW ||= null !== OW, OW
        }
      }
      onRelease(WW) {
        return this.resizers.add(WW), () => {
          this.resizers.delete(WW)
        }
      }
    }
  },
  35118: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => kW,
      i: () => wW,
      l: () => bW,
      m: () => AW
    });
    var mW = OW(154),
      EW = OW(1259),
      NW = OW(1185),
      PW = OW(1111),
      LW = OW(1850);
    const cW = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function wW(WW) {
      return cW[WW]
    }

    function tW(WW) {
      return (0, LW.c)(WW) ? "outdated" : WW instanceof mW.c ? 429 === WW.httpCode ? "busy" : "server" : "offline"
    }

    function ZW(WW, iW, OW) {
      return (0, PW.postJsonWithMetricsCookiesAndJsonResponse)(`${NW.clientSideServerUrls.indexUrl}${iW}`, OW, {
        retries: 3
      }, WW.getMetricsCookies()).catch((WW => (console.error("Bad response from the server when trying to change name:", iW, WW), {
        outcome: "failed",
        failure: tW(WW)
      })))
    }

    function xW(WW) {
      return "outcome" in WW && "failed" === WW.outcome
    }

    function lW(WW) {
      return console.error("Error when trying to get with new name from DB", WW), {
        outcome: "refused",
        message: WW
      }
    }
    async function AW(WW) {
      const iW = await ZW(WW, "/index/name/random", {});
      return xW(iW) ? iW : "err" in iW ? lW(iW.err) : (WW.setPlayerName(iW.name), {
        outcome: "changed",
        name: iW.name
      })
    }
    async function bW(WW, iW) {
      const OW = await ZW(WW, "/index/name/update", {
        name: iW
      });
      return xW(OW) ? OW : "err" in OW ? lW(OW.err) : OW.nameExists ? {
        outcome: "taken"
      } : (WW.setPlayerName(iW), {
        outcome: "changed",
        name: iW
      })
    }

    function jW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const mW = 1 === iW ? 1 : 10 ** (iW - 1),
        NW = String(mW + Math.floor(OW() * (10 ** iW - mW)));
      return `${WW.slice(0,EW.f-iW)}${NW}`
    }
    const UW = [1, 2, 3, 4];
    async function kW(WW, iW) {
      const OW = await bW(WW, iW);
      if ("taken" !== OW.outcome) return OW;
      for (const mW of UW) {
        const OW = jW(iW, mW),
          EW = await bW(WW, OW);
        if ("taken" !== EW.outcome) return EW
      }
      return {
        outcome: "taken"
      }
    }
  },
  35130: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      e: () => EW
    });
    let mW = null;

    function EW() {
      mW = performance.now()
    }

    function NW() {
      return mW
    }
  },
  35157: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW
    });
    var mW = OW(25);
    const EW = 24,
      NW = "farNametags",
      PW = 1e5;

    function LW() {
      var WW;
      return null === (WW = mW.d.get("showDistantNametags")) || void 0 === WW || WW
    }

    function cW() {
      var WW;
      return null !== (WW = function() {
        const WW = new URLSearchParams(window.location.search).get(NW),
          iW = null === WW || "" === WW ? NaN : Number(WW);
        return Number.isFinite(iW) && iW >= 0 ? Math.min(iW, PW) : null
      }()) && void 0 !== WW ? WW : LW() ? 0 : EW
    }
  },
  35247: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      f: () => tW
    });
    const mW = .01,
      EW = .08,
      NW = .01,
      PW = 5,
      LW = 100,
      cW = 40,
      wW = 800;

    function tW(WW) {
      const {
        canvas: iW
      } = WW;
      let OW = null;
      const tW = WW => {
          var mW;
          OW = {
            pointer: WW.pointerId,
            x: WW.clientX,
            y: WW.clientY
          }, null === (mW = iW.setPointerCapture) || void 0 === mW || mW.call(iW, WW.pointerId)
        },
        ZW = iW => {
          var EW;
          const PW = WW.orbit;
          if ((null === (EW = OW) || void 0 === EW ? void 0 : EW.pointer) !== iW.pointerId || null === PW) return;
          const LW = iW.clientX - OW.x,
            cW = iW.clientY - OW.y;
          OW = {
            ...OW,
            x: iW.clientX,
            y: iW.clientY
          }, WW.setOrbit({
            alpha: PW.alpha - LW * mW,
            beta: Math.min(Math.PI - NW, Math.max(NW, PW.beta - cW * mW)),
            radius: PW.radius
          })
        },
        xW = WW => {
          var iW;
          (null === (iW = OW) || void 0 === iW ? void 0 : iW.pointer) === WW.pointerId && (OW = null)
        },
        lW = iW => {
          const OW = WW.orbit;
          if (null === OW) return;
          iW.preventDefault();
          const mW = iW.deltaY * (iW.deltaMode === WheelEvent.DOM_DELTA_LINE ? cW : iW.deltaMode === WheelEvent.DOM_DELTA_PAGE ? wW : 1),
            NW = Math.min(LW, Math.max(PW, OW.radius + mW * EW));
          WW.setOrbit({
            ...OW,
            radius: NW
          })
        };
      return iW.style.touchAction = "none", iW.addEventListener("pointerdown", tW), iW.addEventListener("pointermove", ZW), iW.addEventListener("pointerup", xW), iW.addEventListener("pointercancel", xW), iW.addEventListener("wheel", lW, {
        passive: !1
      }), () => {
        iW.removeEventListener("pointerdown", tW), iW.removeEventListener("pointermove", ZW), iW.removeEventListener("pointerup", xW), iW.removeEventListener("pointercancel", xW), iW.removeEventListener("wheel", lW)
      }
    }
  },
  35175: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      g: () => ZW,
      k: () => tW
    });
    var mW = OW(248),
      EW = OW(100),
      NW = OW(131),
      PW = OW(128),
      LW = OW(669);
    const cW = new Set(["mali_bifrost"]);

    function wW() {
      if (LW.g) return;
      const WW = (0, EW.pageOperatingSystem)();
      if ("android" !== WW && "windows" !== WW || (0, LW.c)("webgl_default")) return;
      if ("windows" === WW) return WW => "qualcomm" === (0, EW.normaliseGpuVendor)((0, PW.b)(WW).vendor);
      const iW = (0, NW.j)(),
        OW = null === iW ? (0, mW.t)() : (0, mW.i)(iW.vendor, iW.renderer);
      return null !== OW && cW.has(OW) ? WW => (0, mW.p)((0, PW.b)(WW).vendor, OW) : void 0
    }

    function tW(WW, iW) {
      return WW ? () => !0 : iW()
    }
    async function ZW(WW) {
      try {
        const iW = tW(WW, wW),
          OW = navigator.gpu;
        if (void 0 === iW || void 0 === OW) return !1;
        const mW = await (0, PW.i)(OW, {
          seed: !1,
          compatibility: iW
        });
        return "string" !== typeof mW && mW.compatibility && !(0, PW.e)(mW.adapter)
      } catch (iW) {
        return console.error("WebGPU compatibility-mode adapter request failed.", iW), !1
      }
    }
  },
  35243: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => PW
    });
    const mW = [{
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

    function EW(WW) {
      let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof WW) {
        if (!Number.isFinite(WW)) return "0";
        if (Math.abs(WW) < 100) {
          const iW = WW < 0 ? "-" : "",
            OW = Math.abs(WW);
          return OW >= 10 ? `${iW}${OW.toFixed(1).replace(/\.0$/,"")}` : `${iW}${OW.toFixed(2).replace(/\.?0+$/,"")}`
        }
        iW = BigInt(Math.floor(WW))
      } else iW = WW;
      const EW = iW < 0n ? -iW : iW,
        NW = iW < 0n ? "-" : "",
        PW = EW.toString();
      if (PW.length <= OW) return `${NW}${PW}`;
      const LW = 3 * Math.floor((PW.length - 1) / 3);
      if (LW < 3) return `${NW}${PW}`;
      if (LW > 3 * mW.length) {
        const WW = PW[0],
          iW = PW.slice(1, 3).replace(/0+$/, "");
        return `${NW}${iW?`${WW}.${iW}`:WW}e${PW.length-1}`
      }
      const {
        threshold: cW,
        suffix: wW
      } = mW[mW.length - LW / 3], tW = EW / cW, ZW = Number(1000n * (EW % cW) / cW), xW = Number(tW) + ZW / 1e3;
      let lW;
      return lW = xW >= 100 ? Math.floor(xW).toString() : xW >= 10 ? xW.toFixed(1).replace(/\.0$/, "") : xW.toFixed(2).replace(/\.?0+$/, ""), `${NW}${lW}${wW}`
    }
    const NW = mW.map((WW => {
      let {
        threshold: iW,
        suffix: OW
      } = WW;
      return {
        threshold: Number(iW),
        suffix: OW
      }
    })).filter((WW => {
      let {
        threshold: iW
      } = WW;
      return Number.isFinite(iW)
    }));

    function PW(WW) {
      const iW = Math.abs(WW),
        OW = WW < 0 ? "-" : "";
      for (const {
          threshold: mW,
          suffix: EW
        }
        of NW)
        if (iW >= mW) {
          const WW = iW / mW;
          if (WW >= 1e3) return `${OW}${iW.toExponential(2).replace("e+","e")}`;
          let NW;
          return NW = WW >= 100 ? Math.floor(WW).toString() : WW >= 10 ? WW.toFixed(1).replace(/\.0$/, "") : WW.toFixed(2).replace(/\.?0+$/, ""), `${OW}${NW}${EW}`
        } return `${OW}${iW}`
    }
  },
  35225: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      e: () => xW,
      g: () => ZW,
      k: () => PW,
      o: () => wW,
      q: () => cW
    });
    var mW = OW(344);
    const EW = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      NW = {
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

    function PW(WW) {
      var iW;
      return null !== (iW = NW[WW]) && void 0 !== iW ? iW : {
        translationKey: ""
      }
    }
    const LW = {
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

    function cW(WW) {
      return EW.includes(WW)
    }

    function wW(WW) {
      var iW;
      return !0 === (null === WW || void 0 === WW || null === (iW = WW.customAttributes) || void 0 === iW ? void 0 : iW.cannotEnchant)
    }

    function tW(WW, iW) {
      const {
        max: OW
      } = LW[WW].at(-1);
      return iW <= OW
    }

    function ZW(WW) {
      const iW = Math.sin(WW / 80),
        OW = WW => {
          if (WW <= 0) return 0;
          if (WW > 1) return 1;
          let iW = 0;
          const OW = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let mW = 0; mW < OW.length; mW++) {
            iW += (mW % 2 === 0 ? 1 : -1) * OW[mW] * Math.pow(WW, 2 + mW) / (2 + mW)
          }
          return 72 * iW
        },
        mW = .3 - .78 * iW,
        EW = .5 - .78 * iW,
        NW = .6 - .7 * iW,
        PW = .8 - .6 * iW;
      let LW = OW(mW),
        cW = OW(EW) - LW,
        wW = OW(NW) - cW - LW,
        tW = OW(PW) - wW - cW - LW;
      mW < .041 && (cW /= 1 - LW, wW /= 1 - LW, tW /= 1 - LW, LW = 0), EW < .041 && (LW /= 1 - cW, wW /= 1 - cW, tW /= 1 - cW, cW = 0), NW < .041 && (LW /= 1 - wW, cW /= 1 - wW, tW /= 1 - wW, wW = 0), PW < .041 && (LW /= 1 - tW, cW /= 1 - tW, wW /= 1 - tW, tW = 0);
      return {
        commonProb: LW,
        uncommonProb: cW,
        rareProb: wW,
        epicProb: tW,
        legendaryProb: 1 - (tW + wW + cW + LW)
      }
    }

    function xW(WW, iW) {
      const {
        min: OW,
        max: EW
      } = LW[WW][iW], NW = mW.e.sampleUniformIntDistribution(OW, EW, "includeMax");
      return {
        ...ZW(NW),
        level: NW
      }
    }
  },
  35198: () => {},
  35279: () => {},
  13952: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  15078: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16479: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  17016: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);