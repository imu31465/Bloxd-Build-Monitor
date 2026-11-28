export const id = 92;
export const ids = [92, 220, 221];
export const modules = {
  35413: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      EverythingMenu: () => YQ
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1238),
      Kd = md(1443),
      hd = md(2225),
      vd = md(1572),
      Qd = md(1170),
      td = md(1341);

    function od(dd) {
      let {
        items: Od,
        link: md,
        onClick: Wd,
        selectedItemId: Fd,
        className: od,
        padStartsOnTab: Nd = !0
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), Hd = (0, Qd.h)(), yd = [];
      for (const Rd of Od) {
        var bd;
        const dd = yd[yd.length - 1];
        var Td;
        if (dd && dd.title === (null !== (bd = Rd.section) && void 0 !== bd ? bd : null)) dd.items.push(Rd);
        else yd.push({
          title: null !== (Td = Rd.section) && void 0 !== Td ? Td : null,
          items: [Rd]
        })
      }
      return (0, td.jsxs)("div", {
        className: Rd()("MenuSideBarBody", od),
        "data-pad-tabs": "2",
        children: [yd.map(((dd, Od) => {
          var md;
          return (0, td.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [dd.title && (0, td.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: qd(dd.title)
            }), dd.items.map((dd => {
              var Od;
              const md = !!dd.iconElement || !!dd.faIcon;
              return (0, td.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Fd === dd.id ? "true" : void 0,
                "data-pad-default-focus": Nd && Fd === dd.id || void 0,
                className: Rd()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Fd === dd.id
                }),
                onClick: () => {
                  Wd(dd.id)
                },
                children: [md && (0, td.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Od = dd.iconElement) && void 0 !== Od ? Od : (0, td.jsx)(Kd.c, {
                    name: dd.faIcon
                  })
                }), (!Hd || !md) && (0, td.jsx)("div", {
                  children: qd(dd.title)
                }), dd.redDot && (0, td.jsx)(hd.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, dd.id)
            }))]
          }, null !== (md = dd.title) && void 0 !== md ? md : Od)
        })), md && (0, td.jsxs)("div", {
          ...(0, vd.X)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: md.onClick,
          children: [(0, td.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, td.jsx)(Kd.c, {
              name: md.faIcon
            })
          }), (0, td.jsx)("div", {
            children: qd(md.title)
          }), (0, td.jsx)(Kd.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Nd = md(3016),
      qd = md(1186),
      Hd = md(3403),
      yd = md(4308),
      bd = md(107),
      Td = md(2092),
      pd = md(3174),
      Yd = md(3177),
      gd = md(1808),
      wd = md(1436),
      Ed = md(5901),
      Jd = md(29),
      Ud = md(35422);

    function xd(dd) {
      let {
        setApplySettingsCallback: Od
      } = dd;
      const {
        clientEscMenuOptions: md
      } = (0, Jd.p)(["clientEscMenuOptions"]), [Fd, Rd] = (0, Wd.useState)(!1), [Xd, Kd] = (0, Wd.useState)(!1), [hd, Qd] = (0, Wd.useState)(6400), [od, Nd] = (0, Wd.useState)(3600), [qd, Hd] = (0, Wd.useState)(!1), [yd, bd] = (0, Wd.useState)(!1);

      function Td(dd) {
        const Od = "screenshot" === dd ? Kd : Rd;
        Od(!0);
        const md = qd ? "normals" : yd ? "depth" : null;
        Ud.devTools.downloadScene(dd, {
          width: hd,
          height: od,
          colouring: md
        }).catch((dd => {
          console.error("Couldn't download the scene", dd)
        })).finally((() => {
          Od(!1)
        }))
      }
      return (0, td.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, td.jsx)(Ed.e, {
          label: "Disable Ambient Occlusion",
          checked: md.disableAmbientOcclusion,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              disableAmbientOcclusion: dd
            }), Od((() => Ed.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Ud.devTools.supports("ambientLight") && (0, td.jsx)(Ed.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: md.ambientLightIntensity,
          onChange: dd => {
            Ud.devTools.setAmbientLightIntensity(dd).then((() => {
              Jd.e.setClientEscMenuOptions({
                ambientLightIntensity: dd
              })
            })).catch((dd => {
              console.error("Couldn't set the ambient light", dd)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Ud.devTools.supports("weaponRaycasts") && (0, td.jsx)(Ed.e, {
          label: "Show Weapon Raycasts",
          checked: md.showWeaponRaycasts,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              showWeaponRaycasts: dd
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Ud.devTools.supports("sceneDownload") && (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, td.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, td.jsx)(Ed.e, {
              label: "Apply normal-based coloring",
              checked: qd,
              onClick: dd => {
                Hd(dd), dd && bd(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, td.jsx)(Ed.e, {
              label: "Apply depth-based coloring",
              checked: yd,
              onClick: dd => {
                bd(dd), dd && Hd(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, td.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, td.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, td.jsx)(gd.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (dd, Od) => {
                  const md = parseInt(dd) || 6400;
                  Qd(md)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: hd.toString()
              }), (0, td.jsx)("span", {
                children: "X"
              }), (0, td.jsx)(gd.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (dd, Od) => {
                  const md = parseInt(dd) || 3600;
                  Nd(md)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: od.toString()
              })]
            }), (0, td.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, td.jsxs)(vd.g, {
                onClick: () => {
                  Td("screenshot")
                },
                disabled: Xd,
                children: [Xd && (0, td.jsx)(wd.c, {}), "Download Screenshot"]
              }), (0, td.jsxs)(vd.g, {
                onClick: () => {
                  Td("glb")
                },
                disabled: Fd,
                children: [Fd && (0, td.jsx)(wd.c, {}), "Download GLB"]
              })]
            })]
          }), (0, td.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Bd = md(151),
      Sd = md(1189),
      sd = md(35428),
      ud = md(4102),
      Vd = md(1641),
      Ad = md(1322),
      rd = md(1295),
      Gd = md(2181),
      nd = md(1627),
      Ld = md(405),
      Pd = md(678),
      zd = md(3277),
      cd = md(3282);
    const jd = "store:retiredRankEnds";

    function Dd(dd) {
      let {
        until: Od,
        className: md
      } = dd;
      const {
        t: Wd,
        selectedLanguage: Fd
      } = (0, Xd.G)(), Rd = new Date(Od).toLocaleDateString((0, Xd.p)(Fd.code, jd), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, td.jsx)("span", {
        className: md,
        children: Wd(jd, {
          date: Rd
        })
      })
    }
    var ed = md(3184),
      Id = md(4133),
      ld = md(4128),
      Cd = md(231),
      Zd = md(1768),
      kd = md(1306),
      fd = md(4154);

    function Md(dd, Od, md) {
      const Wd = Pd.n[(0, Pd.h)(Pd.n, Od)],
        Fd = void 0 === Wd ? void 0 : (0, Cd.b)(dd.entitlements, Wd.entitlementId);
      return void 0 === Fd || null === Fd.expiresAt || (0, ld.f)(Fd) <= md ? null : Fd.willRenew && null === Fd.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(Fd.expiresAt, md)
      } : {
        renews: !1,
        at: (0, ld.f)(Fd)
      }
    }
    var dO = md(4113),
      OO = md(4122);
    const mO = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function WO(dd) {
      return dd instanceof Id.c && "storeUnavailable" === dd.code ? (console.warn("Billing: the store didn't take a subscription change:", dd), "store:subscriptionStoreUnavailable") : dd instanceof Id.c && "subscriptionActionUnavailable" === dd.code ? (console.warn("Billing: a subscription action billing no longer offers:", dd), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", dd), "store:subscriptionChangeFailed")
    }
    async function FO() {
      try {
        var dd;
        const {
          offering: Od
        } = await (0, OO.getBillingClient)().getOfferings((0, zd.p)(Pd.d.id).placementId);
        return null !== (dd = null === Od || void 0 === Od ? void 0 : Od.packages.find(dO.isPricedPackage)) && void 0 !== dd ? dd : null
      } catch (Od) {
        return console.warn("Billing: loading the rank plan's price failed:", Od), null
      }
    }

    function RO(dd) {
      const {
        userContext: Od
      } = (0, qd.d)(), {
        superRankInfo: md
      } = Od, Fd = (0, ed.usePurchasesAllowed)(), Rd = (0, Ld.qc)(md), Xd = dd && Fd && (Rd || Od.ranksMayChange), [Kd, hd] = (0, Wd.useState)(null), [vd, Qd] = (0, Wd.useState)(!1), [td, od] = (0, Wd.useState)(!1), [Nd, Hd] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        if (!Xd) return;
        let dd = !1;
        const md = () => {
          Promise.all([(0, OO.getBillingClient)().getSubscriptions(), FO()]).then((md => {
            let [Wd, Fd] = md;
            dd || (hd({
              for: Od,
              answer: Wd,
              pkg: Fd
            }), Qd(!1))
          }), (Od => {
            console.error("Billing: loading the player's subscriptions failed:", Od), dd || Qd(!0)
          }))
        };
        md();
        const Wd = Zd.d.addRefetchListener("billing", md);
        return () => {
          dd = !0, Wd()
        }
      }), [Xd, Od]);
      const yd = Xd && Rd && null !== Kd && Kd.for === Od ? function(dd, Od, md, Wd) {
        var Fd;
        const {
          customerInfo: Rd,
          actions: Xd
        } = dd, Kd = Pd.n[(0, Pd.h)(Pd.n, Od)], hd = void 0 === Kd ? void 0 : (0, Cd.b)(Rd.entitlements, Kd.entitlementId), vd = Md(Rd, Od, Wd);
        if (void 0 === hd || null === vd) return null;
        const Qd = Object.entries(Rd.subscriptions).find((dd => {
          let [, Od] = dd;
          return Od.productId === hd.productId && Od.store === hd.store && !(0, ld.m)(Od.status)
        }));
        if (void 0 === Qd) return null;
        const [td, od] = Qd, Nd = (null === md || void 0 === md ? void 0 : md.productId) === od.productId && od.store === (0, ed.getBillingStore)();
        return {
          key: td,
          tierId: Od,
          info: od,
          actions: null !== (Fd = (0, Cd.b)(Xd, td)) && void 0 !== Fd ? Fd : mO,
          date: vd,
          pkg: Nd ? md : null
        }
      }(Kd.answer, md.tier, Kd.pkg, Date.now()) : null;
      return {
        subscription: yd,
        loadFailed: Xd && Rd && vd,
        busy: td,
        errorKey: Nd,
        change: async function(dd) {
          if (null === yd || td) return;
          od(!0), Hd(null);
          const md = (0, OO.getBillingClient)();
          try {
            const Wd = await ("cancel" === dd ? md.cancelSubscription(yd.key) : md.resumeSubscription(yd.key));
            hd({
              for: Od,
              answer: Wd,
              pkg: yd.pkg
            }), (0, fd.h)()
          } catch (Wd) {
            Hd(WO(Wd))
          } finally {
            od(!1)
          }
        },
        openManagePage: async function() {
          if (null === yd || td) return;
          const dd = window.open("", "_blank");
          od(!0), Hd(null);
          try {
            const Od = await (0, OO.getBillingClient)().subscriptionManagementUrl(yd.key, kd.f.get().getCurrentLanguageCode());
            null === dd ? window.open(Od, "_blank", "noopener") : (dd.opener = null, dd.location.href = Od)
          } catch (Od) {
            null === dd || void 0 === dd || dd.close(), Hd(WO(Od))
          } finally {
            od(!1)
          }
        }
      }
    }
    var XO = md(1462),
      KO = md(4177);

    function hO(dd, Od) {
      return new Date(dd).toLocaleDateString(Od, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function vO(dd) {
      let {
        showing: Od,
        className: md
      } = dd;
      const {
        t: Wd,
        selectedLanguage: Fd
      } = (0, Xd.G)(), {
        subscription: hd,
        loadFailed: Qd,
        busy: od,
        errorKey: Nd,
        change: qd,
        openManagePage: Hd
      } = RO(Od);
      if (Qd) return (0, td.jsx)("div", {
        className: Rd()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", md),
        children: Wd("store:subscriptionLoadFailed")
      });
      if (null === hd) return null;
      const {
        date: yd,
        info: bd,
        actions: Td,
        pkg: pd
      } = hd, Yd = yd.renews ? "store:renewsOn" : "store:endsOn", gd = hO(yd.at, (0, Xd.p)(Fd.code, Yd)), wd = Wd((0, zd.p)(hd.tierId).nameKey), Ed = null !== bd.billingIssueDetectedAt;
      return (0, td.jsxs)("div", {
        className: Rd()("RankSubscriptionManage", md),
        children: [(0, td.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [Wd(Yd, {
            date: gd
          }), yd.renews && null !== pd && (0, ed.subscriptionsSold)() && (0, td.jsxs)(td.Fragment, {
            children: [" \xb7 ", Wd("store:pricePerMonth", {
              price: (0, KO.e)(pd)
            })]
          })]
        }), Ed && (0, td.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, td.jsx)(Kd.c, {
            name: "triangle-exclamation"
          }), " ", Wd("store:paymentFailing", {
            rank: wd
          })]
        }), (0, td.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [Td.manage && (0, td.jsx)(vd.i, {
            disabled: od,
            onClick: () => {
              Hd()
            },
            children: Wd(Ed ? "store:updatePayment" : "payments:manageSubscription")
          }), Td.resume && (0, td.jsx)(vd.g, {
            loading: od,
            onClick: () => {
              qd("resume")
            },
            children: Wd("store:resumeSubscription")
          }), Td.cancel && (0, td.jsx)(vd.G, {
            loading: od,
            onClick: () => {
              (async function(dd, Od, md) {
                const Wd = Date.now() >= dd.info.currentPeriodEnd;
                return !0 === await XO.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: Wd ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: Od
                    },
                    subtitle: {
                      rank: Od,
                      date: md
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(hd, wd, hO(bd.currentPeriodEnd, (0, Xd.p)(Fd.code, "store:cancelKeepsUntil"))).then((dd => {
                dd && qd("cancel")
              }))
            },
            children: Wd("store:cancelSubscription")
          })]
        }), null !== Nd && (0, td.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: Wd(Nd)
        })]
      })
    }
    var QO = md(3181),
      tO = md(3762),
      oO = md(1786);
    async function NO() {
      try {
        return function(dd) {
          const Od = new Map;
          for (const {
              store: md,
              status: Wd,
              autoRenewStatus: Fd,
              managementUrl: Rd
            }
            of Object.values(dd.subscriptions)) !(0, ld.j)(md) || (0, ld.m)(Wd) || "willNotRenew" === Fd || Od.has(md) || Od.set(md, null !== Rd && void 0 !== Rd ? Rd : ld.o[md]);
          return Array.from(Od, (dd => {
            let [Od, md] = dd;
            return {
              store: Od,
              managementUrl: md
            }
          }))
        }(await (0, oO.k)((0, OO.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (dd) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", dd), null
      }
    }

    function qO(dd) {
      const {
        t: Od,
        selectedLanguage: md
      } = (0, Xd.G)(), {
        userContext: Fd
      } = (0, qd.d)(), {
        superRankInfo: Rd
      } = Fd, Kd = (0, ed.usePurchasesAllowed)(), hd = dd && ((0, Ld.qc)(Rd) || Fd.ranksMayChange) && Kd, {
        accountId: vd,
        data: Qd
      } = (0, tO.g)(fd.e, hd);
      if ((0, Wd.useEffect)((() => {
          if (hd) return fd.e.watchAccount(), Zd.d.addRefetchListener("billing", (dd => {
            "reconnected" === dd ? fd.e.refreshAfterReconnect() : fd.e.refresh()
          }))
        }), [hd]), !hd || !(0, Ld.qc)(Rd) || null === Qd || vd !== Fd.whamm) return null;
      const td = Md(Qd, Rd.tier, Date.now());
      if (null === td) return null;
      const od = td.renews ? "store:renewsOn" : "store:endsOn",
        Nd = (0, Xd.f)(md.code, od, td.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        Hd = (0, ed.getBillingStore)(),
        yd = null !== Hd && (0, ld.j)(Hd) ? function(dd, Od) {
          var md;
          const Wd = Object.values(dd.subscriptions).find((dd => dd.store === Od && !(0, ld.m)(dd.status)));
          return void 0 === Wd ? null : null !== (md = Wd.managementUrl) && void 0 !== md ? md : ld.o[Od]
        }(Qd, Hd) : null;
      return {
        text: Od(od, {
          date: Nd
        }),
        manageUrl: yd
      }
    }
    var HO = md(1471),
      yO = md(1272),
      bO = md(5670),
      TO = md(1605),
      pO = md(4899),
      YO = md(3346);

    function gO(dd) {
      let {
        showing: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        data: Wd,
        failed: Fd
      } = (0, tO.g)(pO.e, Od);
      return 0 === (null === Wd || void 0 === Wd ? void 0 : Wd.length) || null === Wd && !Fd ? null : (0, td.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, td.jsx)("div", {
          className: "AccountSettingsLabel",
          children: md("paymentHistory:title")
        }), null === Wd && Fd && (0, td.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: md("paymentHistory:loadFailed")
        }), null !== Wd && (0, td.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Wd.map((dd => (0, td.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, td.jsx)(YO.d, {
              entry: dd
            }), (0, td.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, td.jsx)("div", {
                children: (0, YO.i)(md, dd)
              }), (0, td.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(dd.at).toLocaleDateString(), "number" === typeof dd.orderId && ` \xb7 ${md("paymentHistory:order",{orderId:dd.orderId})}`]
              })]
            })]
          }, (0, pO.d)(dd))))
        })]
      })
    }
    var wO = md(3191),
      aO = md(2296);

    function EO() {
      (0, aO.e)({
        titleKey: "payments:logInToRestore"
      })
    }

    function JO(dd) {
      let {
        status: Od
      } = dd;
      switch (Od) {
        case "restored":
          return (0, fd.h)(), {
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
      const dd = (0, OO.usePageBillingClient)(),
        {
          userContext: Od
        } = (0, qd.d)(),
        [md, Fd] = (0, Wd.useState)(!1),
        [Rd, Xd] = (0, Wd.useState)(null);
      return {
        restoring: md,
        notice: Rd,
        restore: () => {
          Od.isLoggedIn() ? (Fd(!0), Xd(null), dd.restorePurchases().then(JO, (dd => dd instanceof Id.c && "loginRequired" === dd.code ? (EO(), null) : function(dd) {
            return dd instanceof Id.c && "storeBusy" === dd.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", dd), (0, fd.h)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(dd))).then(Xd).finally((() => {
            Fd(!1)
          }))) : EO()
        }
      }
    }

    function xO(dd) {
      let {
        restoring: Od,
        notice: md,
        restore: Fd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)(), hd = (0, ed.usePurchasesAllowed)(), Qd = (0, ed.getBillingStore)(), od = (0, Wd.useRef)(null);
      return (0, Wd.useEffect)((() => {
        var dd;
        null === (dd = od.current) || void 0 === dd || dd.scrollIntoView({
          block: "nearest"
        })
      }), [md]), hd && (0, wO.b)(Qd) ? (0, td.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, td.jsx)(vd.i, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: Od,
          onClick: Fd,
          children: Kd("payments:restorePurchases")
        }), null !== md && (0, td.jsx)("div", {
          ref: od,
          className: Rd()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: md.failed
          }),
          children: Kd(md.key)
        })]
      }) : null
    }
    var BO = md(2050),
      SO = md(1304),
      sO = md(1253),
      uO = md(1406),
      VO = md(387),
      iO = md(3524);
    const AO = {
      appStore: {
        name: "App Store",
        ...VO.Vb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...VO.Vb.googlePlay
      },
      discord: {
        name: "Discord",
        ...VO.Vb.discord
      }
    };

    function rO(dd) {
      let {
        warning: Od,
        subscriptions: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return null !== md && 0 === md.length ? (0, td.jsx)(td.Fragment, {
        children: Wd(Od)
      }) : (0, td.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Wd(Od), null === md && (0, td.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Wd("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== md && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Wd("auth:deleteAccountStoreSubscriptions")
          }), (0, td.jsx)(iO.e, {
            className: "DeleteAccountSubtitleLinks",
            links: md.map((dd => {
              let {
                store: Od,
                managementUrl: md
              } = dd;
              return {
                ...AO[Od],
                url: md
              }
            }))
          })]
        })]
      })
    }
    var GO = md(5343);

    function nO(dd) {
      let {
        showing: Od
      } = dd;
      const {
        userContext: md,
        isUserContextUpdating: Fd
      } = (0, qd.d)(), {
        t: Rd
      } = (0, Xd.G)(), [Kd, hd] = (0, Wd.useState)(!1), [Qd, od] = (0, Wd.useState)(null), Nd = (0, Wd.useRef)(Od);
      (0, Wd.useEffect)((() => (Nd.current = Od, () => {
        Nd.current = !1
      })), [Od]);
      const Hd = Fd || Kd;
      return (0, td.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, td.jsxs)(vd.G, {
          onClick: async function() {
            if (!Kd) {
              hd(!0);
              try {
                const dd = await async function() {
                  const [dd, Od] = await Promise.all([(0, BO.d)(md.availableUserContextTypes) ? NO() : [], PO(md)]);
                  if (!Nd.current) return SO.e.ok();
                  const Wd = (0, Ad.b)(md.getPlayerName(), !bd.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await XO.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Wd
                        }
                      },
                      subtitle: (0, td.jsx)(rO, {
                        warning: LO(md.isLoggedIn(), Od),
                        subscriptions: dd
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: Od ? Rd("auth:deleteAccountTypedConfirm", {
                        playerName: Wd
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return SO.e.ok();
                  const Fd = await (0, Sd.postJsonWithMetricsCookiesAndJsonResponse)(`${sO.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: Jd.e.get("gameState")
                  }, {
                    retries: 3
                  }, md.getMetricsCookies());
                  if (Fd.error) return SO.e.error(Fd.error);
                  (0, Bd.isDiscordClient)() && (await uO.q.discordActivity()).exit("User deleted their account");
                  return GO.c.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, Sd.forgetStoredGuestAccount)(md.whamm), (0, Sd.forceGlobalSignOut)(!0), SO.e.ok()
                }(), Od = dd.isError() ? dd.asError().message : null;
                od(Od)
              } catch (dd) {
                console.error("Failed to delete account:", dd), od(Rd("auth:genericDeleteAccountError"))
              }
              hd(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Hd,
          children: [Hd && (0, td.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, td.jsx)(wd.c, {})
          }), Rd("auth:deleteAccount")]
        }), Qd && (0, td.jsx)("div", {
          className: "DeleteAccountError",
          children: Qd
        })]
      })
    }

    function LO(dd, Od) {
      return (0, Bd.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : dd ? "auth:deleteAccountLossWarning" : Od ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function PO(dd) {
      try {
        const {
          accountCreatedAt: Od
        } = await (0, oO.k)(nd.e.getPlayerProfile(dd, {
          lowerCaseName: dd.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== Od && Date.now() - Od >= 7 * Ld.f
      } catch (Od) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", Od), !0
      }
    }
    var zO = md(4827),
      cO = md(4843),
      jO = md(4840);

    function DO(dd) {
      let {
        showing: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        data: Wd,
        failed: Fd
      } = (0, tO.g)(zO.d, Od), Rd = null === Wd ? null : (0, zO.f)(Wd);
      return (0, td.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, td.jsx)("div", {
          className: "AccountSettingsLabel",
          children: md("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Rd && !Fd && (0, td.jsx)(wd.c, {}), null === Rd && Fd && (0, td.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [md("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, td.jsx)(vd.g, {
            className: "SmallTextLight",
            onClick: () => {
              zO.d.refresh()
            },
            children: md("general:tryAgain")
          })]
        }), 0 === (null === Rd || void 0 === Rd ? void 0 : Rd.length) && (0, td.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: md("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Rd && Rd.length > 0 && (0, td.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Rd.map((dd => {
            let {
              name: Od,
              exclusion: Wd
            } = dd;
            const Fd = jO.d[Wd];
            return (0, td.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, td.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Od
              }), (0, td.jsx)(vd.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, cO.e)(Fd, Od, {
                    chatMessage: null
                  })
                },
                children: md(jO.g[Fd].text)
              })]
            }, Od)
          }))
        })]
      })
    }
    const eO = (0, Wd.memo)((function(dd) {
      var Od, md;
      let {
        showing: Fd,
        inGame: hd
      } = dd;
      const {
        t: Qd,
        selectedLanguage: od
      } = (0, Xd.G)(), {
        hideSocialLocationFrom: Hd
      } = (0, Jd.p)(["hideSocialLocationFrom"]), yd = (0, ed.usePurchasesAllowed)(), Td = UO(), pd = (0, Nd.d)(), {
        userContext: Yd,
        isUserContextUpdating: Ud
      } = (0, qd.d)(), [xd, jd] = (0, Wd.useState)(null !== (Od = Yd.getPlayerName()) && void 0 !== Od ? Od : ""), [Id, ld] = (0, Wd.useState)(null), {
        purchasing: Cd,
        outcome: Zd,
        purchase: kd
      } = (0, ud.b)("/super-rank-welcome"), fd = (0, Ld.bc)((0, Xd.p)(od.code, "general:timeLeft"), Yd.superRankInfo), Md = null === (md = qO(Fd)) || void 0 === md ? void 0 : md.text, dO = Date.now(), OO = (0, cd.i)(dO), mO = (0, zd.x)(dO), WO = (0, cd.g)(dO), FO = (0, zd.p)(OO.id), RO = WO && (0, td.jsxs)(vd.m, {
        className: "AccountSettingsSuperRankProlong",
        onClick: () => {
          (0, QO.p)({
            mode: "gift",
            source: "accountSettings",
            openItem: "superRank"
          })
        },
        children: [(0, td.jsx)(Kd.c, {
          name: "bolt"
        }), Qd(FO.giftKey)]
      }), XO = (0, zd.m)(Yd.getPlayerRanks(), dO), KO = (0, zd.t)(Yd.superRankInfo, dO), hO = OO.id !== Pd.q.id, tO = hO && !XO && (0, Ld.qc)(Yd.superRankInfo) ? Yd.superRankInfo : null, oO = fd ? Qd("general:timeLeft", {
        time: fd
      }) : !(hO && yd) && Md, [NO, pO] = (0, Wd.useState)(!1), [YO, wO] = (0, Wd.useState)(!1), aO = (0, Wd.useRef)(null), EO = (0, Wd.useRef)(null), JO = (0, Gd.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), BO = null === JO, SO = null !== JO && void 0 !== JO ? JO : [], sO = Yd !== Sd.NULL_USER_CONTEXT && !Yd.isLoggedIn(), uO = sO && 0 !== (null === JO || void 0 === JO ? void 0 : JO.length), [VO, iO] = (0, Wd.useState)([]), [AO, rO] = (0, Wd.useState)(!1), GO = Yd.playerHasRank("youtuber"), LO = (0, Wd.useCallback)((() => nd.e.getPlayerProfile(Yd, {
        lowerCaseName: Yd.getPlayerName().toLowerCase()
      }).then((dd => {
        iO(dd.socialLinks)
      })).catch((dd => {
        console.error("Failed to refresh social links", dd)
      }))), [Yd]);

      function PO(dd) {
        dd !== xd && ((0, Ad.j)(dd) ? (dd = (0, Ad.m)(dd), ld(Qd("homePage:nameCharacters"))) : ld(null), aO.current && (aO.current.value = dd), jd(dd))
      }
      return (0, Wd.useEffect)((() => (!0 === Fd ? (clearInterval(EO.current), EO.current = setInterval(pd, 1e3)) : clearInterval(EO.current), () => {
        clearInterval(EO.current)
      })), [Fd, pd]), (0, Wd.useEffect)((() => {
        var dd;
        jd(null !== (dd = Yd.getPlayerName()) && void 0 !== dd ? dd : "")
      }), [Yd]), (0, Wd.useEffect)((() => {
        if (!Fd || !GO || Ud) return;
        let dd = !1;
        return rO(!0), iO([]), nd.e.getPlayerProfile(Yd, {
          lowerCaseName: Yd.getPlayerName().toLowerCase()
        }).then((Od => {
          dd || iO(Od.socialLinks)
        })).catch((dd => {
          console.error("Failed to load social links", dd)
        })).finally((() => {
          dd || rO(!1)
        })), () => {
          dd = !0
        }
      }), [Fd, GO, Ud, Yd]), (0, td.jsxs)("div", {
        className: Rd()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: hd
        }),
        children: [hd && (0, td.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Qd("settingsMenu:accountSettingsInGameWarning")
        }), (0, td.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, td.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Qd("homePage:discordNamePopupTitle"), (0, td.jsxs)(Vd.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, rd.h)({
                name: Yd.getPlayerName()
              }),
              onClick: () => {
                Jd.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, td.jsx)(Kd.c, {
                name: "arrow-up-right-from-square"
              }), " ", Qd("profileCard:viewProfile")]
            })]
          }), (0, td.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, td.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [bd.featureFlags.canChangeName && (0, td.jsx)(gd.c, {
                className: "EnterName",
                placeholderText: Qd("homePage:enterName"),
                maxLength: Ad.g,
                defaultValue: xd,
                onValueChange: dd => {
                  PO(dd)
                },
                forcedText: NO || !bd.featureFlags.canChangeName ? xd : null,
                blurOnEnter: !0,
                domRef: aO
              }), (0, td.jsx)(vd.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  PO((0, Ad.e)())
                },
                children: (0, td.jsx)(Kd.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !bd.featureFlags.canChangeName && (0, td.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Ad.b)(xd, !bd.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, td.jsx)(vd.g, {
              className: "ChooseNameButton",
              disabled: NO || xd === Yd.getPlayerName(),
              onClick: () => {
                xd.length < Ad.i ? ld(Qd("homePage:changeNameMinLengthError", {
                  length: Ad.i
                })) : xd.length > Ad.g ? ld(Qd("homePage:changeNameMaxLengthError", {
                  length: Ad.g
                })) : (pO(!0), ld(null), (0, sd.l)(Yd, xd).then((dd => {
                  pO(!1), "taken" === dd.outcome ? ld(Qd("homePage:nameTaken")) : "refused" === dd.outcome ? ld(dd.message) : "failed" === dd.outcome && ld(Qd((0, sd.i)(dd.failure)))
                })))
              },
              children: Qd("general:choose")
            })]
          }), Id && (0, td.jsx)("div", {
            className: "ChooseAccNameError",
            children: Id
          })]
        }), (0, td.jsx)(Ed.e, {
          label: (() => {
            if ((0, yO.p)(Hd)) {
              const dd = (0, Xd.p)(od.code, "general:timeLeft"),
                Od = (0, Ld.Q)(dd, Date.now(), Hd + yO.l);
              return `${Qd("settingsMenu:hideSocialLocation")} (${Qd("general:timeLeft",{time:Od})})`
            }
            return Qd("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const dd = !(0, yO.p)(Hd);
            (0, TO.reportAnalyticsClick)({
              id: "social.hide_location",
              value: dd ? "on" : "off"
            }), wO(!0), nd.e.setHideSocialLocation(Yd, dd).then((() => {
              Jd.e.set({
                hideSocialLocationFrom: dd ? Date.now() : null
              })
            })).finally((() => {
              wO(!1)
            }))
          },
          checked: (0, yO.p)(Hd),
          disabled: YO
        }), GO && (0, td.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, td.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Qd("settingsMenu:socialLinks")
          }), AO && (0, td.jsx)(wd.c, {}), !AO && (0, td.jsx)(bO.c, {
            socialLinks: VO,
            editable: !0,
            userContext: Yd,
            onLinksUpdated: LO
          })]
        }), (0, td.jsxs)("div", {
          className: "SettingBox",
          children: [(0, td.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Qd(uO ? "auth:loginOrSwitchAccount" : "auth:login")
          }), BO && (0, td.jsx)(wd.c, {}), !BO && 0 === SO.length && (0, td.jsx)("div", {
            className: "NoLoginOptions",
            children: Qd("auth:noLoginOptions")
          }), !BO && SO.length > 0 && "crazygames" !== Bd.siteUsed && (0, td.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: SO
          }), !BO && SO.length > 0 && "crazygames" === Bd.siteUsed && (0, td.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [SO[0], SO.length > 1 && (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, td.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Qd("auth:legacyLoginOptions")
                }), (0, td.jsx)(HO.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Qd("auth:legacyLoginOptionsInfo")
                })]
              }), (0, td.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: SO.slice(1)
              })]
            })]
          }), bd.featureFlags.useLogin && (null !== Yd.loggedInInfo || Yd.isLoggedIn()) && (0, td.jsxs)(td.Fragment, {
            children: [(0, td.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, td.jsxs)(vd.G, {
              onClick: () => {
                (0, Sd.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, td.jsx)(Kd.c, {
                name: "right-from-bracket"
              }), Qd("auth:signOut")]
            })]
          })]
        }), null !== tO && (0, td.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, td.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, td.jsx)(zd.k, {
              tierId: tO.tier
            })
          }), (0, td.jsx)(vO, {
            showing: Fd
          })]
        }), !XO && yd && (0, td.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, td.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, td.jsx)(zd.k, {
              tierId: OO.id
            })
          }), null !== KO && (0, td.jsx)(Dd, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: KO
          }), (0, td.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, td.jsxs)(vd.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, QO.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, td.jsx)(Kd.c, {
                name: "bolt"
              }), Qd(null !== KO ? "store:upgradeToHyperRank" : FO.getKey)]
            }), RO]
          }), (0, td.jsx)(xO, {
            ...Td
          })]
        }), XO && (0, td.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, td.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, td.jsx)(zd.k, {
              tierId: OO.id
            }), oO && (0, td.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", oO, ")"]
            })]
          }), hO && (0, td.jsx)(vO, {
            showing: Fd
          }), yd && WO && (0, td.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Ld.qc)(Yd.superRankInfo) && (0, td.jsxs)(vd.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: Cd,
              onClick: () => {
                kd(mO.id, null)
              },
              children: [(0, td.jsx)(Kd.c, {
                name: "bolt"
              }), Qd("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: mO.product.days,
                price: mO.price
              })]
            }), RO]
          }), Zd && (0, td.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Qd(Zd.translationKey)
          }), (0, td.jsx)(xO, {
            ...Td
          })]
        }), (0, td.jsx)(gO, {
          showing: Fd
        }), bd.featureFlags.useSocialFeatures && (0, td.jsx)(DO, {
          showing: Fd
        }), (0, td.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, td.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, td.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Qd(IO(sO, uO))
            }), (0, Bd.isDiscordClient)() && (0, td.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Qd("auth:discordActivityKickWarning")
            }), (0, td.jsx)(nO, {
              showing: Fd
            })]
          }), (0, td.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Qd(sO ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function IO(dd, Od) {
      return dd ? Od ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var lO = md(35430),
      CO = md(4327),
      ZO = md(1549),
      kO = md(2125),
      fO = md(10030),
      MO = md(35437);

    function dm() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, kO.h)("localPlayerAlive") ? (0, td.jsx)(fO.b, {
        icon: "camera-alt",
        title: dd("screenshotMode:title"),
        sub: dd("screenshotMode:entrySub"),
        onClick: MO.g
      }) : null
    }
    var Om = md(35458);
    const mm = (0, Wd.memo)((function(dd) {
        let {
          inGame: Od
        } = dd;
        const {
          t: md,
          selectedLanguage: Wd
        } = (0, Xd.G)(), {
          clientEscMenuOptions: Fd,
          showDebugOverlay: Rd,
          isTouchScreen: Kd
        } = (0, Jd.p)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), hd = (0, Hd.j)("hideCoordinates");
        let vd = "settingsMenu:showCoordinates",
          Qd = "settingsMenu:showChunkCoordinates";

        function od(dd) {
          const Od = new Intl.DisplayNames([dd], {
            type: "language"
          }).of(dd);
          return Od.charAt(0).toUpperCase() + Od.slice(1)
        }
        return hd && (vd = "settingsMenu:showCoordinatesHidden", Qd = "settingsMenu:showChunkCoordinatesHidden"), (0, td.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Od && bd.featureFlags.canUseInviteLinks && (0, td.jsxs)("div", {
            className: "SettingBox",
            children: [(0, td.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: md("settingsMenu:inviteLink")
            }), (0, td.jsx)(lO.d, {})]
          }), (0, td.jsxs)("div", {
            className: "SettingBox",
            children: [(0, td.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: md("settingsMenu:language")
            }), (0, td.jsx)(CO.e, {
              options: Object.entries(Xd.k).map((dd => {
                let [Od, md] = dd;
                return {
                  label: (0, td.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, td.jsx)("img", {
                      src: md.flagImg,
                      alt: "flag"
                    }), (0, td.jsxs)("span", {
                      children: [od(Od), " ", (0, td.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Od, ")"]
                      })]
                    })]
                  }),
                  value: Od
                }
              })),
              value: Wd.code,
              onChange: dd => {
                kd.f.get().setCurrentLanguage(dd.value)
              }
            })]
          }), Od && Kd && (0, Om.c)() && (0, td.jsx)(dm, {}), !(0, bd.isMobileApp)() && (0, ZO.j)() && bd.featureFlags.useForceRotateForceFullscreenOverlay && (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:disableFullscreenMode"),
            checked: Fd.disableFullscreen,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                disableFullscreen: dd
              })
            }
          }), (0, td.jsx)(Ed.e, {
            label: md(vd),
            checked: Fd.showCoordinates,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showCoordinates: dd
              })
            },
            disabled: hd
          }), (0, td.jsx)(Ed.e, {
            label: md(Qd),
            checked: Fd.showChunkCoordinates,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showChunkCoordinates: dd
              })
            },
            disabled: hd
          }), (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showFps"),
            checked: Fd.showFPS,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showFPS: dd
              })
            }
          }), (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:disableBunnyHopping"),
            checked: Fd.disableBunnyHopping,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                disableBunnyHopping: dd
              })
            }
          }), (0, uO.E)() && (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showChat"),
            checked: Fd.showChat,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showChat: dd
              })
            }
          }), (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showDebugOverlay"),
            checked: Rd,
            onClick: dd => {
              Jd.e.set({
                showDebugOverlay: dd
              })
            }
          }), bd.featureFlags.useSocialFeatures && (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showFriendOnlineToasts"),
            checked: Fd.showFriendOnlineToasts,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showFriendOnlineToasts: dd
              })
            }
          }), (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showNewItemIndicator"),
            checked: Fd.showNewItemIndicator,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showNewItemIndicator: dd
              })
            }
          }), (0, td.jsx)(Ed.e, {
            label: md("settingsMenu:showTeamSymbols"),
            checked: Fd.showTeamSymbols,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showTeamSymbols: dd
              })
            },
            circleInfoText: md("settingsMenu:showTeamSymbolsInfo")
          })]
        })
      })),
      Wm = (0, Wd.memo)((function() {
        const {
          t: dd
        } = (0, Xd.G)(), {
          soundVolume: Od,
          musicVolume: md,
          clientEscMenuOptions: Wd
        } = (0, Jd.p)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
        return (0, td.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, td.jsx)(Ed.i, {
            name: dd("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: md,
            onChange: dd => {
              Jd.e.set({
                musicVolume: Math.round(100 * dd) / 100
              })
            },
            format: dd => dd.toFixed(2)
          }), (0, td.jsx)(Ed.i, {
            name: dd("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Od,
            onChange: dd => {
              Jd.e.set({
                soundVolume: Math.round(100 * dd) / 100
              })
            },
            format: dd => dd.toFixed(2)
          }), (0, td.jsx)(Ed.e, {
            label: dd("settingsMenu:showSoundDirections"),
            checked: Wd.showSoundDirections,
            onClick: dd => {
              Jd.e.setClientEscMenuOptions({
                showSoundDirections: dd
              })
            },
            circleInfoText: dd("settingsMenu:showSoundDirectionsInfo")
          })]
        })
      }));
    var Fm = md(800),
      Rm = md(1566),
      Xm = md(3342),
      Km = md(3335),
      hm = md(4717);
    const Qm = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function tm() {
      const {
        t: dd
      } = (0, Xd.G)(), Od = (0, hm.b)(), {
        mobilePushNotificationsCanAsk: md
      } = (0, Jd.p)(["mobilePushNotificationsCanAsk"]), [Fd, Rd] = (0, Wd.useState)(null), [Kd, hd] = (0, Wd.useState)(!1), [Qd, od] = (0, Wd.useState)(null), [Nd, qd] = (0, Wd.useState)(!1), Hd = (0, Wd.useCallback)((() => {
        (0, Xm.c)().then((dd => {
          Od.current && (Rd(dd), hd(!1))
        })).catch((dd => {
          console.error("Failed to load push notification targets:", dd), Od.current && hd(!0)
        }))
      }), [Od]), yd = (0, Wd.useCallback)((() => {
        (0, Km.e)().then((dd => {
          Od.current && od((() => dd))
        }))
      }), [Od]);
      (0, Wd.useEffect)((() => {
        Hd()
      }), [Hd]), (0, Wd.useEffect)((() => {
        yd()
      }), [yd, md]), (0, Rm.f)(Xm.h, Hd);
      const bd = null === Fd ? [] : Object.keys(Qm).filter((dd => Fd[dd] > 0));
      return (0, td.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, td.jsx)("div", {
          className: "SliderText",
          children: dd("notificationSettings:pushNotifications")
        }), null === Fd && Kd && (0, td.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: dd("notificationSettings:pushTargetsLoadFailed")
        }), null !== Fd && 0 === bd.length && (0, td.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: dd("notificationSettings:pushTargetsNone")
        }), bd.length > 0 && (0, td.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: bd.map((Od => {
            var md;
            return (0, td.jsx)("li", {
              children: dd(Qm[Od], {
                count: null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd[Od]) && void 0 !== md ? md : 0
              })
            }, Od)
          }))
        }), null !== Qd && (0, td.jsx)(vd.g, {
          className: "PushNotificationSettingsButton",
          loading: Nd,
          onClick: () => {
            qd(!0), Qd().catch((dd => {
              console.error("Failed to turn on push notifications:", dd)
            })).finally((() => {
              Od.current && (qd(!1), yd())
            }))
          },
          children: dd("notificationSettings:pushTurnOn")
        })]
      })
    }
    var om = md(3577),
      Nm = md(3321),
      qm = md(2010),
      Hm = md(46);
    async function ym() {
      return "dailyDropReminderAsked_" + (await Sd.userContextManager.getCurrentUserContext()).whamm
    }

    function bm(dd) {
      return async function(dd) {
        if (dd.remindersOn || (0, Jd.f)(Jd.e.get("gameState"))) return null;
        const Od = await ym();
        if (null !== Hm.k.getItem(Od)) return null;
        const [md, Wd] = await Promise.all([(0, Km.e)().catch((dd => (console.error("Couldn't tell whether this device can take push notifications:", dd), null))), Tm()]);
        if (null === md && !Wd) return null;
        if (null !== md && ((0, Nm.e)() || (0, Km.h)())) return null;
        return {
          askedKey: Od,
          requester: md
        }
      }(dd).catch((dd => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", dd), null)))
    }

    function Tm() {
      return (0, Xm.c)().then((dd => dd.app + dd.browser + dd.msnPlay > 0), (dd => (console.error("Couldn't tell where push notifications reach this account:", dd), !0)))
    }
    async function pm(dd) {
      const Od = (0, om.w)({
          remindersOn: !0
        }),
        md = null === dd ? Promise.resolve() : dd(),
        [Wd, Fd] = await Promise.allSettled([Od, md]);
      "rejected" === Wd.status && console.error("Failed to turn on Lucky Skin Block reminders:", Wd.reason), "rejected" === Fd.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Fd.reason), "rejected" !== Wd.status && "rejected" !== Fd.status || qm.g.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const Ym = {
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
      gm = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function wm(dd) {
      let {
        setting: Od,
        value: md
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)(), Kd = (0, hm.b)(), [hd, vd] = (0, Wd.useState)(null), [Qd, od] = (0, Wd.useState)(!1), [Nd, qd] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        "remindersOn" === Od && (0, Km.e)().then((dd => {
          Kd.current && qd((() => dd))
        }), (dd => {
          console.error("Couldn't tell whether this device can take push notifications:", dd)
        }))
      }), [Od, Kd]), (0, td.jsx)(Ed.e, {
        className: Rd()({
          DailyDropSettingFailed: Qd
        }),
        label: Fd(gm[Od].label),
        checked: null !== hd && void 0 !== hd ? hd : md,
        note: Qd ? Fd("dailyDrop:settingFailed") : void 0,
        onClick: dd => {
          null === hd && (vd(dd), od(!1), dd && null !== Nd && Nd().catch((dd => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", dd)
          })), (0, om.s)("daily_drop.setting", `${gm[Od].reportAs}_${dd?"on":"off"}`), "remindersOn" === Od && ym().then((dd => {
            Hm.k.setItem(dd, !0)
          }), (dd => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", dd)
          })), (0, om.w)("hidden" === Od ? {
            hidden: dd
          } : {
            remindersOn: dd
          }).catch((dd => {
            console.error(`Failed to save the Lucky Skin Block's ${Od} setting:`, dd), Kd.current && od(!0)
          })).finally((() => {
            Kd.current && vd(null)
          })))
        }
      })
    }
    const am = (0, Wd.memo)((function() {
      const {
        t: dd
      } = (0, Xd.G)(), {
        clientEscMenuOptions: Od
      } = (0, Jd.p)(["clientEscMenuOptions"]), {
        userContext: md
      } = (0, qd.d)(), Wd = md.dailyDrop;
      return (0, td.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [bd.featureFlags.useSocialFeatures && (0, td.jsx)(Ed.h, {
          label: dd("notificationSettings:friendRequests"),
          options: Fm.c.map((Od => ({
            value: Od,
            label: dd(Ym[Od].label)
          }))),
          value: Od.friendRequestNotifications,
          onChange: dd => {
            Jd.e.setClientEscMenuOptions({
              friendRequestNotifications: dd
            })
          },
          circleInfoText: (0, td.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: Fm.c.map((Od => (0, td.jsxs)("div", {
              children: [(0, td.jsx)("b", {
                children: dd(Ym[Od].label)
              }), ": ", dd(Ym[Od].info)]
            }, Od)))
          })
        }), null !== Wd && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(wm, {
            setting: "remindersOn",
            value: Wd.remindersOn
          }), (0, td.jsx)(wm, {
            setting: "hidden",
            value: Wd.hidden
          })]
        }), (0, td.jsx)(tm, {})]
      })
    }));
    var Em = md(5167),
      Jm = md(218),
      Um = md(373),
      xm = md(7602),
      Bm = md(4674),
      Sm = md(35465),
      sm = md(701),
      um = md(32);
    var Vm = md(732),
      im = md(5012);
    const Am = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function rm(dd) {
      return Am.has(dd) ? Td.gameBridge.lookup("aY", null) : null
    }

    function Gm(dd) {
      if (!(0, sm.O)(Jd.e.get("clientEscMenuOptions")[dd])) return Jd.e.get("clientEscMenuOptions")[dd];
      const Od = rm(dd);
      return null !== Od ? Od[Am.get(dd)] : Hm.k.getItem(dd)
    }

    function nm(dd, Od) {
      if ("useTouchControls" === dd) return void(0, im.c)(Od);
      dd in Jd.e.get("clientEscMenuOptions") && Jd.e.setClientEscMenuOptions({
        [dd]: Od
      });
      const md = rm(dd);
      null !== md && Td.gameBridge.send("setChunkAddDistance", {
        ...md,
        [Am.get(dd)]: Od
      }), Hm.k.setItem(dd, Od)
    }
    var Lm = md(5099),
      Pm = md(35467),
      zm = md(35471),
      cm = md(5161),
      jm = md(35490);

    function Dm(dd) {
      var Od, Fd, Kd, hd;
      let {
        minChunkAddDist: vd,
        getValue: Qd,
        onChange: od,
        setApplySettingsCallback: Nd
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), {
        clientEscMenuOptions: yd
      } = (0, Jd.p)(["clientEscMenuOptions", "showDistantNametags"]), Td = (0, Wd.useRef)(Qd("showFog")), pd = (0, Wd.useRef)(yd.antiAliasing), Yd = (0, Wd.useRef)(yd.useWebGpu), [gd, wd] = (0, Wd.useState)(null), [xd, Bd] = (0, Wd.useState)(!1), [Sd, sd] = (0, Wd.useState)((() => (0, Bm.e)(bd.featureFlags.settings.canUseShaderPacks))), [ud] = (0, Wd.useState)((() => Jd.e.isWebGpuDefaultOff())), [Vd] = (0, Wd.useState)(Um.f), [Ad, rd] = (0, Wd.useState)(!1);
      (0, Wd.useEffect)((() => {
        const dd = () => {
          rd((0, zm.o)())
        };
        return dd(), (0, zm.A)(dd)
      }), []), (0, Rm.f)("appManagerUpdated|clientEscMenuOptions", (() => {
        rd((0, zm.o)())
      }));
      const [Gd] = (0, Wd.useState)((() => !0 === Hm.k.getItem(VO.kc))), [nd] = (0, Wd.useState)((() => Jd.e.isWebGpuOnStored()));
      (0, Wd.useEffect)((() => {
        let dd = !1;
        return (0, bd.hasUsableWebGpuAdapter)().then((async Od => {
          const md = Gd || nd,
            Wd = !Od && Vm.G && await (0, jm.d)(md);
          dd || (wd(Od || Wd), Bd(Wd))
        })), (0, Bm.i)(bd.featureFlags.settings.canUseShaderPacks) && (0, xm.g)().then((async Od => {
          const Wd = null !== Od && await async function(dd) {
            const [{
              isShaderPackActive: Od
            }, {
              loadPageShaderPackCompiler: Wd
            }] = await Promise.all([md.e(160).then((() => md(7598))), Promise.all([md.e(91), md.e(157), md.e(159)]).then((() => md(7566)))]);
            return Od(dd, await Wd())
          }(Od);
          dd || sd(Wd)
        })), () => {
          dd = !0
        }
      }), [Gd, nd]);
      const Ld = (!(Sd && !Gd) || !xd) && gd,
        Pd = function(dd, Od, md, Wd, Fd) {
          return (0, Sm.e)(md, Wd) && !0 === Od ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Od ? "settingsMenu:newWebGpu" : Fd ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: dd && !1 !== Od,
            disabled: !0 !== Od
          }
        }(yd.useWebGpu, Ld, Sd, ud, Vd),
        zd = (yd.useWebGpu || (0, Sm.e)(Sd, ud)) && Sd && !0 === Ld,
        cd = (0, Hd.j)("lightingOverride"),
        jd = !(0, sm.O)(cd);
      let Dd = "settingsMenu:enableLighting";
      jd && (Dd = cd ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const ed = dd => {
          var Od, md, Wd;
          const Fd = null !== (Od = dd.showFog) && void 0 !== Od ? Od : Qd("showFog"),
            Rd = null !== (md = dd.antiAliasing) && void 0 !== md ? md : yd.antiAliasing,
            Xd = null !== (Wd = dd.useWebGpu) && void 0 !== Wd ? Wd : yd.useWebGpu,
            Kd = !Vm.G && Fd !== Td.current || Rd !== pd.current || Xd !== Yd.current;
          Nd(Kd ? () => Ed.l : null)
        },
        Id = (0, Hd.j)("fogChunkDistanceOverride"),
        ld = (0, Hd.j)("fogBlockDistanceOverride"),
        Cd = !(0, sm.O)(Id) || !(0, sm.O)(ld),
        Zd = Cd ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [kd, fd] = (0, Em.e)(vd),
        [Md, dO] = (0, cm.h)(vd),
        OO = qd("settingsMenu:chunkLoadDistanceDeviceLimit"),
        mO = Md < kd,
        WO = Math.min(null !== (Od = Qd("chunkHorizAddDist")) && void 0 !== Od ? Od : vd[0], Md),
        FO = !Cd && function(dd, Od) {
          return !0 === dd.showFog && dd.fogChunkDistance > Od
        }(yd, WO);
      return (0, td.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, td.jsx)(Ed.i, {
          name: qd("settingsMenu:horizontalChunkLoadDistance"),
          min: vd[0],
          max: kd,
          selectableMax: Md,
          cappedNote: OO,
          step: 1,
          initValue: WO,
          onChange: dd => {
            !0 === Qd("showFog") && dd < Qd("fogChunkDistance") && od("fogChunkDistance", dd), od("chunkHorizAddDist", dd), um.j.lQ("updatedChunkLoadDist")
          },
          circleInfoText: qd("settingsMenu:chunkLoadDistanceInfo")
        }), (0, td.jsx)(Ed.i, {
          name: qd("settingsMenu:verticalChunkLoadDistance"),
          min: vd[1],
          max: fd,
          selectableMax: dO,
          cappedNote: mO ? void 0 : OO,
          step: 1,
          initValue: Math.min(null !== (Fd = Qd("chunkVertAddDist")) && void 0 !== Fd ? Fd : vd[1], dO),
          onChange: dd => {
            od("chunkVertAddDist", dd), um.j.lQ("updatedChunkLoadDist")
          },
          circleInfoText: qd("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:chunkFadeIn"),
          checked: yd.chunkFadeIn,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              chunkFadeIn: dd
            })
          },
          circleInfoText: qd("settingsMenu:chunkFadeInInfo")
        }), Ud.devTools.supports("chunkBorders") && (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:showChunkBorders"),
          checked: yd.showChunkBorders,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              showChunkBorders: dd
            })
          },
          circleInfoText: qd("settingsMenu:showChunkBordersInfo")
        }), (0, td.jsx)(Ed.e, {
          label: qd(Dd),
          checked: yd.enableLighting,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              enableLighting: dd
            })
          },
          disabled: jd
        }), (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, td.jsx)(Ed.e, {
            label: qd(Zd),
            checked: yd.showFog,
            onClick: dd => {
              ed({
                showFog: dd
              }), Jd.e.setClientEscMenuOptions({
                showFog: dd
              })
            },
            disabled: Cd,
            className: Rd()({
              SettingBoxWarning: FO
            })
          }), (0, td.jsx)(Ed.i, {
            name: qd("settingsMenu:fogChunkDistance"),
            min: vd[0],
            max: Jm.i.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Kd = yd.fogChunkDistance) && void 0 !== Kd ? Kd : vd[0],
            onChange: dd => {
              Jd.e.setClientEscMenuOptions({
                fogChunkDistance: dd
              }), um.j.lQ("fogChunkDistanceChanged", dd)
            },
            circleInfoText: qd("settingsMenu:fogChunkDistanceInfo"),
            disabled: Cd || !1 === Qd("showFog"),
            className: Rd()({
              SettingBoxWarning: FO
            })
          }), FO && (0, td.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: qd("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Vm.G && (0, td.jsx)(Ed.e, {
          label: qd(zd ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !zd && yd.disableTexAtlas,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              disableTexAtlas: dd
            })
          },
          circleInfoText: qd("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: zd
        }), (0, td.jsx)(Ed.i, {
          name: qd("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: yd.cameraFOV,
          onChange: dd => {
            Jd.e.setClientEscMenuOptions({
              cameraFOV: dd
            })
          }
        }), (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:disableViewBobbing"),
          checked: yd.disableBobbing,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              disableBobbing: dd
            })
          },
          circleInfoText: qd("settingsMenu:disableViewBobbingInfo")
        }), (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:antiAliasing"),
          checked: yd.antiAliasing,
          onClick: dd => {
            ed({
              antiAliasing: dd
            }), (0, Lm.h)("antiAliasing"), Jd.e.setClientEscMenuOptions({
              antiAliasing: dd
            })
          },
          circleInfoText: qd("settingsMenu:antiAliasingInfo")
        }), (0, td.jsx)(Ed.i, {
          name: qd("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (hd = yd.pixelScale) && void 0 !== hd ? hd : 1,
          onChange: dd => {
            (dd !== Jd.e.get("clientEscMenuOptions").pixelScale || (0, zm.n)()) && (0, Lm.h)("pixelScale"), Jd.e.setClientEscMenuOptions({
              pixelScale: dd
            })
          },
          circleInfoText: qd("settingsMenu:pixelScaleInfo"),
          note: Ad ? qd("settingsMenu:pixelScaleLowered") : void 0,
          format: dd => `${dd}x`
        }), (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:pixelSmoothing"),
          checked: yd.pixelSmoothing,
          onClick: dd => {
            Jd.e.setClientEscMenuOptions({
              pixelSmoothing: dd
            })
          },
          circleInfoText: qd("settingsMenu:pixelSmoothingInfo")
        }), Vm.G && (0, td.jsx)(Ed.e, {
          label: qd("settingsMenu:distantNametags"),
          checked: (0, Pm.b)(),
          onClick: dd => {
            Jd.e.set({
              showDistantNametags: dd
            })
          },
          circleInfoText: qd("settingsMenu:distantNametagsInfo")
        }), (0, td.jsx)(Ed.e, {
          label: qd(Pd.translationKey),
          checked: Pd.checked,
          onClick: dd => {
            ed({
              useWebGpu: dd
            }), Jd.e.setClientEscMenuOptions({
              useWebGpu: dd
            })
          },
          circleInfoText: qd("settingsMenu:newWebGpuInfo"),
          disabled: Pd.disabled
        })]
      })
    }
    var em = md(5093),
      Im = md(9995),
      lm = md(35499),
      Cm = md(10010),
      Zm = md(10073),
      km = md(35508);
    const fm = {
        color: 16777215,
        name: "white"
      },
      Mm = {
        color: 0,
        name: "black"
      },
      dW = [fm, {
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
      }, Mm],
      OW = [Mm, fm];

    function mW(dd) {
      return `${dd} px`
    }

    function WW(dd) {
      return `${dd}%`
    }

    function FW(dd) {
      let {
        settings: Od,
        onChange: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)(), Fd = (dd, Wd) => {
        md((0, km.u)(Od, dd, Wd))
      }, Rd = function(dd, md) {
        let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mW;
        const {
          min: Rd,
          max: Xd,
          step: Kd
        } = km.b[dd];
        return (0, td.jsx)(Ed.i, {
          name: md,
          min: Rd,
          max: Xd,
          step: Kd,
          initValue: Od[dd],
          format: Wd,
          onChange: Od => {
            Fd(dd, Od)
          }
        }, dd)
      }, Kd = (dd, md, Rd) => (0, td.jsx)(Zm.c, {
        label: dd,
        value: (0, km.j)(Od[md]),
        swatches: Rd.map((dd => {
          let {
            color: Od,
            name: md
          } = dd;
          return {
            colour: (0, km.j)(Od),
            label: Wd(`crosshairSettings:color_${md}`)
          }
        })),
        customLabel: Wd("crosshairSettings:customColor"),
        onChange: dd => {
          const Od = (0, km.o)(dd);
          null !== Od && Fd(md, Od)
        }
      }), hd = ["lines", "dot", "circle"].filter((dd => Od[dd])), vd = (dd, md, Wd) => (0, td.jsx)(Ed.e, {
        label: md,
        checked: Od[dd],
        disabled: 1 === hd.length && hd[0] === dd,
        circleInfoText: Wd,
        onClick: Od => {
          Fd(dd, Od)
        }
      }, dd), Qd = "shapes" === Od.style;
      return (0, td.jsxs)(td.Fragment, {
        children: [(0, td.jsx)(Ed.h, {
          label: Wd("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Wd("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Wd("crosshairSettings:styleShapes")
          }],
          value: Od.style,
          onChange: dd => {
            Fd("style", dd)
          }
        }), Kd(Wd("crosshairSettings:color"), "color", dW), Rd("opacity", Wd("crosshairSettings:opacity"), WW), !Qd && Rd("size", Wd("crosshairSettings:size"), WW), Qd && (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vd("lines", Wd("crosshairSettings:lines")), Od.lines && Rd("lineLength", Wd("crosshairSettings:lineLength")), Od.lines && Rd("lineThickness", Wd("crosshairSettings:lineThickness")), Od.lines && Rd("gap", Wd("crosshairSettings:gap")), Od.lines && vd("tStyle", Wd("crosshairSettings:tStyle"))]
        }), Qd && (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vd("dot", Wd("crosshairSettings:dot")), Od.dot && Rd("dotSize", Wd("crosshairSettings:dotSize"))]
        }), Qd && (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [vd("circle", Wd("crosshairSettings:circle")), Od.circle && Rd("circleRadius", Wd("crosshairSettings:circleRadius")), Od.circle && Rd("circleThickness", Wd("crosshairSettings:circleThickness"))]
        }), (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Rd("outline", Wd("crosshairSettings:outline"), (dd => dd > 0 ? mW(dd) : Wd("crosshairSettings:off"))), Od.outline > 0 && Kd(Wd("crosshairSettings:outlineColor"), "outlineColor", OW)]
        }), vd("growOnClick", Wd("crosshairSettings:growOnClick")), Qd && vd("forGuns", Wd("crosshairSettings:forGuns"), Wd("crosshairSettings:forGunsInfo"))]
      })
    }
    var RW = md(86),
      XW = md(1333),
      KW = md(13963),
      hW = md(15110),
      vW = md(16610),
      QW = md(17126);
    const tW = ["sky", "grass", "stone", "sand", "snow", "night"],
      oW = "4rem";

    function NW(dd) {
      return {
        backgroundImage: `url(${dd})`,
        backgroundSize: `${oW} ${oW}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function qW(dd) {
      return {
        ...(() => {
          switch (dd) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return NW(KW);
            case "stone":
              return NW(hW);
            case "sand":
              return NW(vW);
            case "snow":
              return NW(QW);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function HW(dd) {
      return Object.freeze({
        ...km.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...dd
      })
    }
    const yW = [{
        id: "default",
        settings: km.d
      }, {
        id: "cross",
        settings: HW({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: HW({
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
        settings: HW({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: HW({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: HW({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: HW({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: HW({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      bW = ["growOnClick", "forGuns"];
    var TW = md(35511);

    function pW(dd) {
      let {
        label: Od,
        selected: md,
        onClick: Wd,
        className: Fd,
        style: Xd,
        children: Kd
      } = dd;
      return (0, td.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": md,
        title: Od,
        "aria-label": Od,
        "data-pad-focusable": !0,
        className: Rd()("CrosshairBackdropSwatch", Fd, {
          Selected: md
        }),
        style: Xd,
        onClick: Wd,
        children: Kd
      })
    }

    function YW(dd) {
      let {
        backdrop: Od,
        onChange: md,
        game: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Fd("crosshairSettings:background"),
        children: [Wd && (0, td.jsx)(pW, {
          label: Fd("crosshairSettings:bg_game"),
          selected: Wd.selected,
          onClick: Wd.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, td.jsx)(Kd.c, {
            name: "cube"
          })
        }), tW.map((dd => (0, td.jsx)(pW, {
          label: Fd(`crosshairSettings:bg_${dd}`),
          selected: !(null !== Wd && void 0 !== Wd && Wd.selected) && dd === Od,
          style: qW(dd),
          onClick: () => {
            md(dd)
          }
        }, dd)))]
      })
    }

    function gW(dd) {
      let {
        settings: Od,
        touch: md,
        backdrop: Wd,
        onChange: Fd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)(), hd = function(dd) {
        var Od;
        return null !== (Od = yW.find((Od => (0, km.q)(Od.settings, dd, bW)))) && void 0 !== Od ? Od : null
      }(Od);
      return (0, td.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Kd("crosshairSettings:presets"),
        children: yW.map((dd => {
          const Xd = (null === hd || void 0 === hd ? void 0 : hd.id) === dd.id;
          return (0, td.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Xd,
            "data-pad-focusable": !0,
            className: Rd()("CrosshairPreset", {
              Selected: Xd
            }),
            onClick: () => {
              Fd(function(dd, Od) {
                return {
                  ...Od.settings,
                  growOnClick: dd.growOnClick,
                  forGuns: dd.forGuns
                }
              }(Od, dd))
            },
            children: [(0, td.jsx)("div", {
              className: "CrosshairPresetStage",
              style: qW(Wd),
              children: (0, td.jsx)(TW.d, {
                settings: dd.settings,
                touch: md,
                inPreview: !0
              })
            }), (0, td.jsx)("div", {
              className: "CrosshairPresetName",
              children: Kd(`crosshairSettings:preset_${dd.id}`)
            })]
          }, dd.id)
        }))
      })
    }
    var wW = md(1804);

    function aW(dd, Od) {
      const [md, Fd] = (0, Wd.useState)(!1), Rd = () => {
        Fd(!1)
      }, [Xd, Kd] = (0, Wd.useState)(!1), hd = (0, Wd.useRef)({
        growOnClick: dd.growOnClick,
        forGuns: dd.forGuns
      });
      (0, Wd.useEffect)((() => {
        const Od = hd.current;
        hd.current = {
          growOnClick: dd.growOnClick,
          forGuns: dd.forGuns
        }, (dd.growOnClick && !Od.growOnClick || dd.forGuns && !Od.forGuns) && Kd(!0)
      }), [dd.growOnClick, dd.forGuns]), (0, Wd.useEffect)((() => {
        if (!Xd) return;
        const dd = setTimeout((() => {
          Kd(!1)
        }), 600);
        return () => {
          clearTimeout(dd)
        }
      }), [Xd]);
      const vd = md || Xd;
      return {
        view: {
          pressed: vd,
          spread: vd && dd.forGuns && !dd.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: dd => {
            !dd.target.closest(Od) && (0, wW.d)(dd.currentTarget, dd.pointerId) && Fd(!0)
          },
          onPointerUp: Rd,
          onPointerCancel: Rd,
          onLostPointerCapture: Rd
        }
      }
    }

    function EW(dd) {
      let {
        settings: Od,
        touch: md,
        backdrop: Wd,
        className: Fd,
        children: Xd,
        label: Kd
      } = dd;
      const hd = aW(Od, ".CrosshairStageControls");
      return (0, td.jsxs)("div", {
        className: Rd()("CrosshairStage", Fd),
        style: qW(Wd),
        ...hd.handlers,
        children: [(0, td.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Kd,
          children: (0, td.jsx)(TW.d, {
            settings: Od,
            touch: md,
            inPreview: !0,
            ...hd.view
          })
        }), Xd]
      })
    }
    const JW = "crosshairFullScreen";

    function UW(dd) {
      let {
        settings: Od,
        touch: md,
        backdrop: Fd,
        onBackdrop: hd,
        inGame: Qd,
        onChange: od,
        onClose: Nd
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), Hd = (0, Wd.useRef)(null);
      (0, XW.m)("popup", Hd, Nd),
      function(dd) {
        const Od = (0, Wd.useRef)(dd);
        Od.current = dd, (0, Wd.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [JW]: !0
          }, "");
          let dd = !1;
          const md = () => {
            dd = !0, Od.current()
          };
          return window.addEventListener("popstate", md), () => {
            var Od;
            window.removeEventListener("popstate", md), !dd && null !== (Od = window.history.state) && void 0 !== Od && Od[JW] && window.history.back()
          }
        }), [])
      }(Nd);
      const yd = (0, Wd.useRef)(Nd);
      yd.current = Nd, (0, Wd.useEffect)((() => {
        function dd(dd) {
          "Escape" === dd.key && (dd.stopPropagation(), yd.current())
        }
        return window.addEventListener("keydown", dd, !0), () => {
          window.removeEventListener("keydown", dd, !0)
        }
      }), []);
      const bd = aW(Od, ".CrosshairFullScreenPanel"),
        [Td, pd] = (0, Wd.useState)(!0),
        Yd = Td && Qd;
      (0, Wd.useEffect)((() => {
        if (Yd) return Jd.e.set({
          crosshairGameView: !0
        }), () => {
          Jd.e.set({
            crosshairGameView: !1
          })
        }
      }), [Yd]);
      const [gd, wd] = (0, Wd.useState)(!0);
      return (0, RW.createPortal)((0, td.jsxs)("div", {
        ref: Hd,
        className: "CrosshairFullScreen",
        style: Yd ? void 0 : qW(Fd),
        ...bd.handlers,
        children: [(0, td.jsx)(TW.d, {
          settings: Od,
          touch: md,
          inEditor: !0,
          ...bd.view
        }), (0, td.jsxs)("div", {
          className: Rd()("CrosshairFullScreenPanel", {
            Collapsed: !gd
          }),
          children: [(0, td.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, td.jsx)(YW, {
              backdrop: Fd,
              onChange: dd => {
                pd(!1), hd(dd)
              },
              game: Qd ? {
                selected: Yd,
                onSelect: () => {
                  pd(!0)
                }
              } : void 0
            }), (0, td.jsx)(vd.S, {
              className: "CrosshairPanelToggle",
              ariaLabel: qd(gd ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                wd(!gd)
              },
              children: (0, td.jsx)(Kd.c, {
                name: gd ? "caret-up" : "pen"
              })
            }), (0, td.jsx)(vd.g, {
              className: "CrosshairFullScreenDone",
              onClick: Nd,
              padDefaultFocus: !0,
              children: qd("crosshairSettings:done")
            })]
          }), gd && (0, td.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, td.jsx)(gW, {
              settings: Od,
              touch: md,
              backdrop: Fd,
              onChange: od
            }), (0, td.jsx)(FW, {
              settings: Od,
              onChange: od
            })]
          })]
        })]
      }), document.body)
    }
    var xW = md(3747),
      BW = md(35521);

    function SW(dd) {
      let {
        settings: Od,
        onChange: md
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)(), hd = (0, BW.h)(Od), [Qd, od] = (0, xW.i)(), [Nd, qd] = (0, Wd.useState)(!1), Hd = (0, Wd.useRef)(null), [yd, bd] = (0, xW.i)(), [Td, pd] = (0, Wd.useState)(!1);
      return (0, td.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, td.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, td.jsxs)(vd.S, {
            className: Rd()("CrosshairCopy", {
              ActiveSecondaryButton: Qd
            }),
            onClick: () => {
              (0, xW.h)(hd, {
                useShareSheet: !1,
                onOutcome: dd => {
                  qd("failed" === dd), "copied" === dd && od()
                }
              })
            },
            children: [(0, td.jsx)(Kd.c, {
              name: Qd ? "check" : "copy"
            }), " ", Fd(Qd ? "general:copied" : "crosshairSettings:copy")]
          }), (0, td.jsx)(gd.c, {
            className: "CrosshairPaste",
            domRef: Hd,
            ariaLabel: Fd("crosshairSettings:paste"),
            placeholderText: Fd("crosshairSettings:paste"),
            onValueChange: dd => {
              const Od = (0, BW.e)(dd);
              pd(!Od && dd.trim().length >= BW.c), Od && (md(Od), Hd.current.value = "", bd())
            }
          })]
        }), Nd && (0, td.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: hd,
          "aria-label": Fd("crosshairSettings:copy"),
          onFocus: dd => {
            dd.currentTarget.select()
          }
        }), (0, td.jsxs)("div", {
          "aria-live": "polite",
          children: [Td && (0, td.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Fd("crosshairSettings:pasteInvalid")
          }), yd && !Td && (0, td.jsx)("div", {
            className: "CrosshairShareNote",
            children: Fd("crosshairSettings:applied")
          })]
        })]
      })
    }
    var sW = md(35524);
    let uW = "sky";

    function VW(dd) {
      let {
        showing: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        isTouchScreen: Fd,
        gameState: Rd,
        clientEscMenuOptions: hd
      } = (0, Jd.p)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Qd = (0, sW.g)(), [od, Nd] = (0, Wd.useState)(uW), qd = dd => {
        uW = dd, Nd(dd)
      }, [Hd, yd] = (0, Wd.useState)(!1);
      return (0, Wd.useEffect)((() => {
        Od || yd(!1)
      }), [Od]), (0, td.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, td.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, td.jsx)(EW, {
            className: "CrosshairPreviewStage",
            settings: Qd,
            touch: Fd,
            backdrop: od,
            label: md("crosshairSettings:preview"),
            children: (0, td.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, td.jsx)(YW, {
                backdrop: od,
                onChange: qd
              }), (0, td.jsxs)(vd.S, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  yd(!0)
                },
                children: [(0, td.jsx)(Kd.c, {
                  name: "expand"
                }), " ", md("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, td.jsx)("div", {
          className: "SettingBox",
          children: (0, td.jsx)(gW, {
            settings: Qd,
            touch: Fd,
            backdrop: od,
            onChange: sW.c
          })
        }), (0, td.jsx)(SW, {
          settings: Qd,
          onChange: sW.c
        }), Fd && (0, td.jsx)(Cm.b, {
          note: (0, lm.f)(Fd, hd.touchActionButtons) ? md("crosshairSettings:touchNote") : void 0
        }), (0, td.jsx)(FW, {
          settings: Qd,
          onChange: sW.c
        }), Hd && (0, td.jsx)(UW, {
          settings: Qd,
          touch: Fd,
          backdrop: od,
          onBackdrop: qd,
          inGame: "inGame" === Rd,
          onChange: sW.c,
          onClose: () => {
            yd(!1)
          }
        })]
      })
    }
    var iW = md(10003),
      AW = md(1512),
      rW = md(5895),
      GW = md(35530),
      nW = md(4908),
      LW = md(2130),
      PW = md(803);
    const zW = (0, Wd.memo)((function() {
      const {
        clientEscMenuOptions: dd
      } = (0, Jd.p)(["clientEscMenuOptions"]), {
        recording: Od,
        clipping: md,
        hasClipBuffer: Fd
      } = (0, kO.h)("replayRecorder"), Xd = (0, kO.f)("connectedGame", (dd => dd.replay)), Kd = (0, nW.j)(), hd = !1 === (0, Hd.j)("canRecordReplays");
      (0, Wd.useEffect)((() => {
        Td.gameBridge.send("setRecorderPrefs", {
          clipping: dd.enableClipping,
          clipSeconds: dd.clipDurationSeconds
        })
      }), [dd.enableClipping, dd.clipDurationSeconds]);
      const Qd = Kd || Xd,
        od = !Qd && !hd,
        Nd = Od || od,
        qd = od,
        yd = qd && md && !Od;

      function bd() {
        Nd && Td.gameBridge.send("toggleRecording", null)
      }
      return (0, td.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, td.jsxs)("div", {
          className: "SettingBox",
          children: [(0, td.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Od ? (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsxs)(vd.G, {
                className: "ReplayViewerCategoryButton",
                onClick: bd,
                disabled: !Nd,
                children: [(0, td.jsx)("span", {
                  children: "Stop Recording"
                }), (0, td.jsx)(LW.b, {
                  noaAction: "recordGame"
                })]
              }), (0, td.jsx)(GW.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, td.jsxs)(vd.g, {
              className: "ReplayViewerCategoryButton",
              onClick: bd,
              disabled: !Nd,
              children: [(0, td.jsx)("span", {
                children: "Start Recording"
              }), (0, td.jsx)(LW.b, {
                noaAction: "recordGame"
              })]
            })
          }), hd && (0, td.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Qd && !Od && (0, td.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, td.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, td.jsx)(Ed.e, {
            label: "Enable clipping",
            checked: dd.enableClipping,
            disabled: !qd,
            onClick: function(dd) {
              qd && Jd.e.setClientEscMenuOptions({
                enableClipping: dd
              })
            },
            className: Rd()({
              SettingBoxDisabled: !qd
            })
          }), (0, td.jsx)(Ed.i, {
            name: "Clip duration (seconds)",
            min: PW.h,
            max: PW.e,
            step: PW.b,
            initValue: dd.clipDurationSeconds,
            onChange: function(dd) {
              Jd.e.setClientEscMenuOptions({
                clipDurationSeconds: dd
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !qd || !dd.enableClipping
          })]
        }), (0, td.jsxs)("div", {
          className: "SettingBox",
          children: [(0, td.jsxs)(vd.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              yd && Td.gameBridge.send("saveClip", null)
            },
            disabled: !yd,
            children: [(0, td.jsx)("span", {
              children: "Record clip"
            }), (0, td.jsx)(LW.b, {
              noaAction: "recordClip"
            })]
          }), dd.enableClipping && !Fd && qd && !Od && (0, td.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Od && (0, td.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, td.jsxs)("div", {
          className: "SettingBox",
          children: [(0, td.jsxs)(vd.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, nW.i)(!0), Jd.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: Kd,
            children: [(0, td.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, td.jsx)(LW.b, {
              noaAction: "replayViewerOpen"
            })]
          }), Kd && (0, td.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, td.jsxs)("div", {
          className: "SettingBox",
          children: [(0, td.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, td.jsx)("iframe", {
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
    var cW = md(2057);
    const jW = {
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
        icon: () => (0, td.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, td.jsx)("path", {
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
      Jq: {
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

    function DW() {
      return Promise.all([md.e(91), md.e(157), md.e(156), md.e(153)]).then((() => md(43019))).then((dd => ({
        default: dd.ShaderPackCategory
      })), (dd => (console.error("Failed to load the shader pack settings", dd), {
        default: eW
      })))
    }

    function eW() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, td.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: dd("shaderPack:tabLoadFailed")
      })
    }
    var IW = md(1498),
      lW = md(210);
    const CW = /party\s*voice/i;
    let ZW = !1;

    function kW(dd) {
      return Object.keys(dd).some((dd => dd.startsWith("__reactFiber$")))
    }
    const fW = ".MenuSideBarBody, .MenuSideBarSection";

    function MW(dd) {
      var Od;
      return (null !== (Od = dd.textContent) && void 0 !== Od ? Od : "").replace(/\s+/g, " ").trim()
    }

    function dF(dd) {
      for (const Od of function(dd) {
          const Od = new Set;
          for (const md of dd.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) Od.add(md);
          for (const md of [dd, ...dd.querySelectorAll(fW)])
            for (const dd of md.children) Od.add(dd);
          return [...Od]
        }(dd))
        if (!kW(Od) || !Od.matches(fW) && CW.test(MW(Od))) return Od;
      return null
    }

    function OF(dd) {
      return dd.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const mF = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function WF(dd) {
      const Od = document.createTreeWalker(dd, NodeFilter.SHOW_TEXT, {
        acceptNode: dd => {
          var Od, md;
          return mF.has(null !== (Od = null === (md = dd.parentElement) || void 0 === md ? void 0 : md.tagName.toUpperCase()) && void 0 !== Od ? Od : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let Rd = Od.nextNode(); null !== Rd; Rd = Od.nextNode()) {
        var md;
        const dd = (null !== (md = Rd.textContent) && void 0 !== md ? md : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== dd) {
          var Wd, Fd;
          return (null !== (Wd = null === (Fd = dd.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === Fd ? void 0 : Fd[0]) && void 0 !== Wd ? Wd : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function FF(dd, Od) {
      const md = OF(Od).slice(0, 40) || "blank";
      return `${(OF(dd.toLowerCase())||"none").slice(0,Math.max(23,lW.db-1-md.length))}:${md}`.slice(0, lW.db)
    }
    const RF = (0, Wd.lazy)((() => md.e(309).then((() => md(43001))).then((dd => ({
        default: dd.BloxdInformation
      }))))),
      XF = (0, Wd.lazy)(DW);

    function KF(dd) {
      return dd ? "general" : "account"
    }
    const hF = new Map,
      vF = (0, Wd.memo)((function(dd) {
        let {
          show: Od,
          setBeforeResumeCallback: md
        } = dd;
        (0, yd.b)();
        const {
          gameState: Fd,
          openSettingsCategory: Rd
        } = (0, Jd.p)(["gameState", "openSettingsCategory"]), {
          userContext: hd
        } = (0, qd.d)(), {
          t: Qd
        } = (0, Xd.G)(), gd = (0, Nd.d)(), wd = (0, Hd.j)("minChunkAddDist"), Ed = "inGame" === Fd, [Ud, Sd] = (0, Wd.useState)(KF(Ed)), [sd, ud] = (0, Wd.useState)(null), [Vd, Ad] = (0, Wd.useState)([]), rd = (0, Wd.useRef)(function() {
          const dd = new Date,
            Od = 6 * (dd.getMonth() + dd.getDate()) % VO.t.length;
          return [...VO.t, ...VO.t].slice(Od, Od + 6)
        }()), Gd = (0, Wd.useRef)(null), nd = (0, Wd.useRef)(null), Ld = (0, Rm.i)(AW.h, (0, AW.d)()), Pd = Object.keys(jW).filter((dd => {
          switch (dd) {
            case "replayViewer":
              return Ed;
            case "developerTools":
              return hd.playerHasRank("developer") || !1;
            case "texturePack":
              return bd.featureFlags.settings.canChangeTexturePack;
            case "Jq":
              return bd.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return bd.featureFlags.useSocialFeatures || null !== hd.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Bd.siteUsed;
            case "controller":
              return bd.featureFlags.useControllerSupport && (Ld || "controller" === Ud);
            default:
              return !0
          }
        }));
        (0, Rm.f)("toggleFullCoordinateOverlay", (() => {
          const dd = Gm("showCoordinates") && Gm("showChunkCoordinates") && Gm("showFPS");
          nm("showCoordinates", !dd), nm("showChunkCoordinates", !dd), nm("showFPS", !dd), gd()
        })), (0, Rm.f)("updatedChunkLoadDist", (() => {
          gd()
        })), (0, Wd.useEffect)((() => {
          if (ud(null), null === Jd.e.get("openSettingsCategory")) {
            const dd = (0, IW.m)() ? hF.get(Ed) : void 0;
            Sd(dd && Pd.includes(dd) ? dd : KF(Ed))
          }
        }), [Od]), (0, Wd.useEffect)((() => {
          if (Od && nd.current) return function(dd) {
            if (ZW) return () => {};
            let Od = null,
              md = null;
            const Wd = () => {
                var dd;
                null !== md && (clearTimeout(md), md = null), null === (dd = Od) || void 0 === dd || dd.disconnect(), Od = null
              },
              Fd = () => {
                const Od = dF(dd);
                null !== Od && (ZW = !0, Wd(), (0, TO.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: FF(window.location.hostname, WF(Od))
                }))
              };
            return md = setTimeout((() => {
              md = null, Fd(), ZW || (Od = new MutationObserver(Fd), Od.observe(dd, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), Wd
          }(nd.current)
        }), [Od]), (0, Wd.useEffect)((() => {
          null !== Rd && (Sd(Rd), hF.set(Ed, Rd), Jd.e.set({
            openSettingsCategory: null
          }))
        }), [Rd, Ed]), (0, Wd.useLayoutEffect)((() => {
          Gd.current && (Gd.current.scrollTop = 0)
        }), [Ud, Od]), (0, Wd.useEffect)((() => {
          "updateLog" === Ud && (0, Yd.c)().then(Ad)
        }), [Ud]), (0, Wd.useEffect)((() => {
          if ((0, sm.O)(wd)) return;
          const [dd, Od] = (0, em.d)(), [md, Wd] = (0, Em.e)(wd), Fd = (0, cW.h)(wd[0], dd, md), Rd = (0, cW.h)(wd[1], Od, Wd);
          Td.gameBridge.send("setChunkAddDistance", {
            horizontal: Fd,
            vertical: Rd
          })
        }), [wd]);
        const zd = (0, Wd.useCallback)((async () => {
          sd && (await sd(), ud(null))
        }), [sd]);

        function cd() {
          Jd.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, Wd.useEffect)((() => {
          md((() => zd))
        }), [zd, md]), (0, td.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Od ? {} : {
            display: "none"
          },
          children: [(0, td.jsx)("div", {
            ref: nd,
            className: "MenuSideBar",
            children: (0, td.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, td.jsx)(od, {
                items: Pd.map((dd => {
                  const Od = jW[dd].icon;
                  return {
                    id: dd,
                    faIcon: "string" === typeof Od ? Od : void 0,
                    iconElement: "string" === typeof Od ? void 0 : (0, td.jsx)(Od, {}),
                    title: Qd(jW[dd].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Ud,
                onClick: dd => {
                  !async function(dd) {
                    await zd(), Sd(dd), hF.set(Ed, dd)
                  }(dd)
                }
              })
            })
          }), (0, td.jsxs)("div", {
            ref: Gd,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Ud && (0, td.jsx)(eO, {
              showing: Od,
              inGame: Ed
            }), "general" === Ud && (0, td.jsx)(mm, {
              inGame: Ed
            }), "audio" === Ud && (0, td.jsx)(Wm, {}), "notifications" === Ud && (0, td.jsx)(am, {}), "graphics" === Ud && (0, td.jsx)(Dm, {
              minChunkAddDist: null !== wd && void 0 !== wd ? wd : [2, 2],
              getValue: Gm,
              onChange: nm,
              setApplySettingsCallback: ud
            }), "controls" === Ud && (0, td.jsx)(Im.e, {}), "crosshair" === Ud && (0, td.jsx)(VW, {
              showing: Od
            }), "controller" === Ud && bd.featureFlags.useControllerSupport && (0, td.jsx)(iW.c, {}), bd.featureFlags.settings.canChangeTexturePack && "texturePack" === Ud && (0, td.jsx)(rW.d, {
              setApplySettingsCallback: ud
            }), bd.featureFlags.settings.canUseShaderPacks && "Jq" === Ud && (0, td.jsx)(Wd.Suspense, {
              fallback: null,
              children: (0, td.jsx)(XF, {
                setApplySettingsCallback: ud
              })
            }), "updateLog" === Ud && (0, td.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, td.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Vd.map(((dd, Od) => (0, td.jsx)(pd.c, {
                  updateLog: dd,
                  index: Od,
                  close: cd
                }, Od)))
              })
            }), "information" === Ud && (0, td.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, td.jsx)(Wd.Suspense, {
                fallback: null,
                children: (0, td.jsx)(RF, {})
              })
            }), "alternativeDomains" === Ud && (0, td.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, td.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Qd("settingsMenu:unblockedDomainsDescription")
              }), (0, td.jsx)("div", {
                className: "AlternativeDomainsList",
                children: rd.current.map((dd => (0, td.jsxs)(vd.g, {
                  onClick: () => {
                    window.open(`https://${dd}`)
                  },
                  children: [(0, td.jsx)(Kd.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", dd]
                }, dd)))
              })]
            }), "replayViewer" === Ud && (0, td.jsx)(zW, {}), "developerTools" === Ud && (0, td.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, td.jsx)(xd, {
                setApplySettingsCallback: ud
              })
            }), null !== sd && (0, td.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, td.jsx)(vd.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: zd,
                children: Qd("general:apply")
              })
            })]
          })]
        })
      }));
    var QF = md(3689),
      tF = md(1695),
      oF = md(3249),
      NF = md(4994);
    const qF = (0, Wd.lazy)((() => Promise.resolve().then((() => md(5329))).then((dd => (dd.needGameClientAfterPaint(), (0, QF.b)((dd => dd.loadCharacterCustomisationUI()), (dd => dd.CharacterCustomisationUI))))))),
      HF = "openCustomisationTab";

    function yF(dd) {
      var Od, md, Fd;
      let {
        show: Rd
      } = dd;
      const {
        userContext: Xd
      } = (0, qd.d)(), Kd = (0, ed.usePurchasesAllowed)(), hd = (0, Wd.useRef)(null);
      var vd, Qd;
      Xd !== Sd.NULL_USER_CONTEXT && (null === (Od = hd.current) || void 0 === Od ? void 0 : Od.whamm) !== Xd.whamm && (hd.current = {
        whamm: Xd.whamm,
        mountKey: (null !== (vd = null === (Qd = hd.current) || void 0 === Qd ? void 0 : Qd.mountKey) && void 0 !== vd ? vd : -1) + 1
      });
      const [Nd, Hd] = (0, Wd.useState)("characters");
      if ((0, Rm.f)(HF, Hd), !Rd) return null;
      const yd = null !== (0, tF.j)(Date.now()),
        bd = Xd.getOwnedCosmeticPacks(),
        Td = VO.Pb.filter((dd => "pet" === dd || "aura" === dd ? yd || (0, oF.t)(dd).some((Od => Od !== `${dd}_none` && (0, oF.G)(dd, Od, bd))) : "cape" !== dd && "nameColour" !== dd || (0, Pd.b)(Xd.getPlayerRanks()) || Kd)).map((dd => ({
          id: dd,
          faIcon: VO.B[dd],
          title: VO.C[dd],
          redDot: !1
        })));
      return (0, td.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, td.jsx)("div", {
          className: "MenuSideBar",
          children: (0, td.jsx)(od, {
            items: Td,
            selectedItemId: Nd,
            onClick: dd => {
              Hd(dd)
            }
          })
        }), (0, td.jsx)("div", {
          className: "MenuBody",
          children: (0, td.jsx)(Wd.Suspense, {
            fallback: (0, td.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, td.jsx)(wd.c, {})
            }),
            children: (0, td.jsx)(qF, {
              selectedTab: Nd,
              noWebGlFallback: TF
            }, null !== (md = null === (Fd = hd.current) || void 0 === Fd ? void 0 : Fd.mountKey) && void 0 !== md ? md : 0)
          })
        })]
      })
    }

    function bF() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, td.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: dd((0, NF.g)((0, NF.e)()))
      })
    }
    const TF = (0, td.jsx)(bF, {});
    var pF = md(1594),
      YF = md(1596),
      gF = md(35535),
      wF = md(5194),
      aF = md(4633),
      EF = md(4708),
      JF = md(9911),
      UF = md(35538),
      xF = md(35545),
      BF = md(2079),
      SF = md(2060),
      sF = md(5691),
      uF = md(1315),
      VF = md(1286),
      iF = md(1798),
      AF = md(9984),
      rF = md(3413),
      GF = md(3418);

    function nF(dd) {
      return dd ? Object.keys(dd).sort(((Od, md) => {
        var Wd, Fd, Rd, Xd;
        const Kd = (null !== (Wd = null === (Fd = dd[md]) || void 0 === Fd ? void 0 : Fd.sortPriority) && void 0 !== Wd ? Wd : 0) - (null !== (Rd = null === (Xd = dd[Od]) || void 0 === Xd ? void 0 : Xd.sortPriority) && void 0 !== Rd ? Rd : 0);
        return 0 !== Kd ? Kd : Od.localeCompare(md)
      })) : []
    }
    const LF = [{
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

    function PF(dd) {
      for (const {
          threshold: Od,
          suffix: md
        }
        of LF)
        if (dd >= Od) {
          const Wd = dd / Od;
          return Wd >= 100 ? `${Math.floor(Wd)}${md}` : Wd >= 10 ? `${Wd.toFixed(1).replace(/\.0$/,"")}${md}` : `${Wd.toFixed(2).replace(/\.?0+$/,"")}${md}`
        } return String(dd)
    }
    var zF = md(4199);
    const cF = {
        normal: "0.8em",
        big: "1em"
      },
      jF = (0, Wd.memo)((function(dd) {
        let {
          item: Od,
          amount: md = 0,
          size: Wd = "normal",
          tier: Fd = null
        } = dd;
        return (0, td.jsx)("div", {
          className: Rd()("SmpSlot", `SmpSlot-${Wd}`),
          children: Od && (0, td.jsx)(BF.c, {
            itemName: Od,
            amount: md > 1 ? md : 0,
            amountFontSize: cF[Wd],
            enchantmentTier: Fd
          })
        })
      }));

    function DF(dd) {
      let {
        amount: Od,
        exact: md = !1,
        className: Wd
      } = dd;
      return (0, td.jsxs)("span", {
        className: Rd()("SmpGold", Wd),
        children: [(0, td.jsx)("span", {
          className: "SmpCoin",
          children: (0, td.jsx)(BF.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), md ? Od.toLocaleString("en-US") : PF(Od)]
      })
    }

    function eF(dd) {
      let {
        count: Od = 5,
        grid: md = !1
      } = dd;
      return (0, td.jsx)("div", {
        className: md ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Od
        }, ((dd, Od) => (0, td.jsxs)("div", {
          className: Rd()(md ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, td.jsx)("div", {
            className: Rd()("SmpSlot", md ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, td.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, td.jsx)("b", {}), (0, td.jsx)("small", {})]
          }), (0, td.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Od)))
      })
    }

    function IF(dd) {
      let {
        title: Od,
        children: md
      } = dd;
      return (0, td.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, td.jsx)("b", {
          children: Od
        }), md && (0, td.jsx)("small", {
          children: md
        })]
      })
    }

    function lF(dd) {
      let {
        entry: Od
      } = dd;
      return (0, td.jsx)(IF, {
        title: (0, td.jsx)(SF.d, {
          text: Od.item.customTitle
        }),
        children: (0, td.jsx)(SF.d, {
          text: Od.item.description
        })
      })
    }

    function CF(dd) {
      return (0, td.jsx)(zF.e, {
        ...dd,
        className: Rd()("SmpChoice", dd.className),
        reselectable: !0
      })
    }

    function ZF() {
      return (0, td.jsx)("span", {
        className: "SmpLoader",
        children: (0, td.jsx)(wd.c, {})
      })
    }

    function kF(dd) {
      let {
        value: Od,
        onChange: md,
        min: Fd = 1,
        max: Rd,
        step: Xd = 1,
        label: Kd
      } = dd;
      const hd = (0, Wd.useRef)(null),
        vd = (0, Wd.useRef)(Od);
      vd.current = Od;
      const [Qd, od] = (0, Wd.useState)(null), Nd = dd => Math.max(Fd, Math.min(Rd, Math.floor(dd))), qd = dd => {
        const Od = vd.current,
          Wd = "function" === typeof Xd ? Xd(Od, dd) : Xd,
          Fd = Nd(Od + Wd * dd);
        vd.current = Fd, md(Fd)
      };
      (0, Wd.useEffect)((() => {
        if (null === Qd) return;
        let dd;
        const Od = () => {
            od(null)
          },
          md = setTimeout((() => {
            dd = setInterval((() => {
              qd(Qd);
              const dd = vd.current;
              (Qd > 0 ? dd >= Rd : dd <= Fd) && Od()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Od), window.addEventListener("pointercancel", Od), window.addEventListener("blur", Od), () => {
          clearTimeout(md), clearInterval(dd), window.removeEventListener("pointerup", Od), window.removeEventListener("pointercancel", Od), window.removeEventListener("blur", Od)
        }
      }), [Qd]), (0, Wd.useEffect)((() => {
        const dd = hd.current;
        dd && document.activeElement !== dd && dd.value !== String(Od) && (dd.value = String(Od))
      }), [Od]), (0, Wd.useEffect)((() => {
        const dd = hd.current;
        if (!dd) return;
        const Od = () => {
          dd.value = String(vd.current)
        };
        return dd.addEventListener("blur", Od), () => {
          dd.removeEventListener("blur", Od)
        }
      }), []);
      const Hd = dd => (0, td.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${dd>0?"More":"Less"} ${Kd}`,
        disabled: dd > 0 ? Od >= Rd : Od <= Fd,
        onPointerDown: Od => {
          0 === Od.button && (qd(dd), od(dd))
        },
        onKeyDown: Od => {
          "Enter" !== Od.key && " " !== Od.key || qd(dd)
        },
        onContextMenu: dd => {
          dd.preventDefault()
        },
        children: dd > 0 ? "+" : "\u2212"
      });
      return (0, td.jsxs)("div", {
        className: "SmpStepper",
        children: [Hd(-1), (0, td.jsx)(gd.c, {
          className: "SmpStepperInput",
          domRef: hd,
          defaultValue: String(Od),
          ariaLabel: Kd,
          type: "text",
          blurOnEnter: !0,
          onValueChange: dd => {
            const Od = dd.replace(/[^\d]/g, "");
            hd.current && Od !== dd && (hd.current.value = Od), "" !== Od && md(Nd(Number(Od)))
          }
        }), Hd(1)]
      })
    }

    function fF(dd) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, dd))) - 1))
    }
    var MF = md(35549),
      dR = md(1300);
    const OR = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    dR.v, Ld.zc.length;
    new Map;
    var mR = md(4509);

    function WR(dd, Od) {
      var md;
      return Od && (null === (md = dd[Od]) || void 0 === md ? void 0 : md.smp) || null
    }

    function FR(dd, Od) {
      const md = [];
      for (const Fd of nF(dd)) {
        var Wd;
        const Rd = dd[Fd];
        (null === (Wd = Rd.smp) || void 0 === Wd ? void 0 : Wd.kind) === Od && md.push({
          key: Fd,
          item: Rd,
          meta: Rd.smp
        })
      }
      return md
    }

    function RR(dd, Od) {
      var md;
      return null !== (md = FR(dd, Od)[0]) && void 0 !== md ? md : null
    }
    const XR = "50% 0% 50% 0%",
      KR = [{
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

    function hR(dd) {
      const Od = dd - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: md,
          suffix: Wd
        }
        of KR)
        if (Od >= md) return `${Math.floor(Od/md)}${Wd}`;
      return "<1s"
    }

    function vR(dd) {
      const Od = dd.map(JF.c),
        md = [];
      return Od.forEach(((dd, Wd) => {
        const Fd = function(dd) {
            const Od = dd.match(/\d+/);
            return Od ? Number(Od[0]) : 0
          }(dd),
          Rd = Wd === Od.length - 1;
        (Rd || 1 === Fd || 10 === Fd || 100 === Fd) && md.push({
          label: dd,
          quantity: Fd,
          isAll: Rd
        })
      })), md
    }
    let QR = null;

    function tR(dd, Od) {
      const md = Od.trim().toLowerCase();
      if (!md) return [];
      const Wd = dd => {
          if (dd === md) return 0;
          if (dd.startsWith(md)) return 1;
          const Od = dd.indexOf(md);
          return -1 === Od ? -1 : 2 + Od
        },
        Fd = [];
      for (const Kd of dd) {
        const dd = [Wd(Kd.lowerLabel), Wd(Kd.lowerName)].filter((dd => -1 !== dd));
        dd.length && Fd.push({
          item: Kd,
          rank: Math.min(...dd)
        })
      }
      if (Fd.length > 0) return Fd.sort(((dd, Od) => dd.rank - Od.rank)).map((dd => dd.item));
      const Rd = [...md],
        Xd = dd => {
          let Od = 0;
          for (const md of Rd) {
            if (Od = dd.indexOf(md, Od), -1 === Od) return !1;
            Od++
          }
          return !0
        };
      return dd.filter((dd => Xd(dd.lowerLabel) || Xd(dd.lowerName)))
    }

    function oR(dd, Od) {
      var md;
      return null !== (md = null === dd || void 0 === dd ? void 0 : dd[Od]) && void 0 !== md ? md : Od
    }

    function NR(dd, Od) {
      const md = dd.userInput;
      return void 0 !== Od && "dropdown" === (null === md || void 0 === md ? void 0 : md.type) && md.dropdownOptions.map(JF.c).includes(Od) ? Od : function(dd) {
        const Od = dd.userInput;
        if ("dropdown" !== (null === Od || void 0 === Od ? void 0 : Od.type) || 0 === Od.dropdownOptions.length) return null;
        const md = Od.dropdownOptions.map(JF.c);
        return Od.initialValue && md.includes(Od.initialValue) ? Od.initialValue : md[md.length - 1]
      }(dd)
    }

    function qR(dd) {
      return void 0 === dd ? "" : JSON.stringify(dd)
    }
    const HR = (0, Wd.createContext)(null);

    function yR() {
      return (0, Wd.useContext)(HR)
    }
    var bR = md(3769);
    const TR = (0, Wd.memo)((function(dd) {
        let {
          name: Od,
          label: md,
          onPick: Wd
        } = dd;
        return (0, td.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: md,
          onClick: () => {
            Wd(Od)
          },
          children: [(0, td.jsx)(jF, {
            item: Od,
            size: "big"
          }), (0, td.jsx)("span", {
            children: md
          })]
        })
      })),
      pR = (0, Wd.memo)((function(dd) {
        let {
          items: Od,
          query: md,
          onPick: Fd
        } = dd;
        const {
          t: Rd
        } = (0, Xd.G)(), [Kd, hd] = (0, Wd.useState)(new Set), vd = (0, Wd.useMemo)((() => function(dd) {
          const Od = new Map;
          for (const md of dd) {
            let dd = Od.get(md.category);
            dd || (dd = [], Od.set(md.category, dd)), dd.push(md)
          }
          return [...OR, "other"].filter((dd => Od.has(dd))).map((dd => ({
            category: dd,
            items: Od.get(dd)
          })))
        }(Od)), [Od]), Qd = (0, Wd.useMemo)((() => tR(Od, md).slice(0, 60)), [Od, md]);
        return md.trim() ? 0 === Qd.length ? (0, td.jsx)(IF, {
          title: Rd("smpShop:noItemsFound", {
            query: md.trim()
          }),
          children: Rd("smpShop:tryShorterName")
        }) : (0, td.jsx)(bR.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: XR,
          observerUpdateDeps: [md],
          children: Qd.map((dd => (0, td.jsx)(TR, {
            name: dd.name,
            label: dd.label,
            onPick: Fd
          }, dd.name)))
        }) : (0, td.jsx)(td.Fragment, {
          children: vd.map((dd => {
            let {
              category: Od,
              items: md
            } = dd;
            const Wd = Kd.has(Od) || md.length <= 48,
              Xd = Wd ? md : md.slice(0, 48);
            return (0, td.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, td.jsxs)("h4", {
                children: [Rd("other" === Od ? "smpShop:otherItems" : `creativeInventory:${Od}`), !Wd && (0, td.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    hd(new Set([...Kd, Od]))
                  },
                  children: Rd("smpShop:showAll", {
                    count: md.length
                  })
                })]
              }), (0, td.jsx)(bR.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: XR,
                observerUpdateDeps: [Wd],
                children: Xd.map((dd => (0, td.jsx)(TR, {
                  name: dd.name,
                  label: dd.label,
                  onPick: Fd
                }, dd.name)))
              })]
            }, Od)
          }))
        })
      }));

    function YR(dd, Od) {
      const {
        searched: md,
        shown: Fd,
        searchFor: Rd,
        loading: Xd
      } = function(dd, Od) {
        var md;
        const Fd = yR(),
          [Rd, Xd] = (0, Wd.useState)(void 0),
          Kd = (0, Wd.useRef)(void 0),
          hd = (0, Wd.useRef)(0),
          vd = (0, Wd.useRef)(void 0),
          Qd = null !== (md = null === dd || void 0 === dd ? void 0 : dd.meta.item) && void 0 !== md ? md : null,
          td = !!dd && Fd.isPending(dd.key);
        (0, Wd.useEffect)((() => {
          if (!dd || td || !Od || void 0 === Rd || Rd === Qd) return;
          const md = Rd === Kd.current && Fd.gaveUpAt(dd.key) > hd.current && vd.current !== Rd;
          (Rd !== Kd.current || md) && Fd.act(dd.key, null !== Rd && void 0 !== Rd ? Rd : "*", md) && (md && (vd.current = Rd), Kd.current = Rd, hd.current = Date.now())
        }), [dd, td, Od, Rd, Qd, Fd]);
        const od = (0, Wd.useCallback)((dd => {
            Kd.current = void 0, vd.current = void 0, Xd(dd)
          }), []),
          Nd = void 0 !== Rd && Rd !== Qd && (td || Kd.current !== Rd);
        return {
          searched: Qd,
          shown: Nd ? Rd : Qd,
          searchFor: od,
          loading: Nd || td || null !== Qd && !Od
        }
      }(dd, Od), Kd = (0, Wd.useMemo)((() => function() {
        var dd;
        let Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Fd = `${(0,mR.i)()}\x1f${Od.join("\x1e")}\x1f${md.join("\x1e")}\x1f${JSON.stringify(Wd)}`;
        if ((null === (dd = QR) || void 0 === dd ? void 0 : dd.key) === Fd) return QR.items;
        const Rd = new Set(md),
          Xd = new Set,
          Kd = [],
          hd = (dd, Od) => {
            var md;
            if (!dd || Xd.has(dd) || Rd.has(dd)) return;
            Xd.add(dd);
            const Fd = null !== (md = Wd[dd]) && void 0 !== md ? md : dd;
            Kd.push({
              name: dd,
              label: Fd,
              lowerLabel: Fd.toLowerCase(),
              lowerName: dd.toLowerCase(),
              category: Od
            })
          };
        for (const Qd of (0, MF.creativeItemIds)()) {
          var vd;
          (0, MF.itemIsDisabled)(Qd, !0, !0, !1) || (0, MF.showOnlyInCreativeSearch)(Qd) || hd((0, mR.h)(Qd), null !== (vd = (0, MF.creativeCategoryOf)(Qd)) && void 0 !== vd ? vd : "other")
        }
        for (const Qd of Od) hd(Qd, "other");
        return QR = {
          key: Fd,
          items: Kd
        }, Kd
      }(null === dd || void 0 === dd ? void 0 : dd.meta.extra, null === dd || void 0 === dd ? void 0 : dd.meta.excluded, null === dd || void 0 === dd ? void 0 : dd.meta.names)), [null === dd || void 0 === dd ? void 0 : dd.meta.extra, null === dd || void 0 === dd ? void 0 : dd.meta.excluded, null === dd || void 0 === dd ? void 0 : dd.meta.names]), [hd, vd] = (0, Wd.useState)(""), [Qd, td] = (0, Wd.useState)(0), [od, Nd] = (0, Wd.useState)("recent"), qd = (0, Wd.useCallback)((dd => {
        vd(""), td((dd => dd + 1)), Rd(dd)
      }), [Rd]), Hd = "browse" === od || "" !== hd.trim();
      return {
        searched: md,
        shown: Fd,
        searchFor: Rd,
        loading: Xd,
        catalogue: Kd,
        names: null === dd || void 0 === dd ? void 0 : dd.meta.names,
        query: hd,
        setQuery: vd,
        searchBoxKey: Qd,
        pickItem: qd,
        setView: Nd,
        browsing: Hd
      }
    }

    function gR(dd) {
      let {
        browser: Od,
        children: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)(), Fd = yR();
      return (0, td.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, td.jsx)("div", {
          className: "SmpSearch",
          children: (0, td.jsx)(gd.c, {
            className: "SmpSearchInput",
            placeholderText: Wd("smpShop:searchPlaceholder"),
            defaultValue: Od.query,
            onValueChange: dd => {
              Od.setQuery(dd), Od.searched && dd.trim() && Od.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const dd = tR(Od.catalogue, Od.query)[0];
              dd ? Od.pickItem(dd.name) : Od.query.trim() && Fd.notify(Wd("smpShop:noItemsFound", {
                query: Od.query.trim()
              }))
            }
          }, Od.searchBoxKey)
        }), md]
      })
    }

    function wR(dd) {
      let {
        browser: Od,
        recentLabel: md,
        children: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, td.jsx)(CF, {
          options: [{
            value: "recent",
            label: md
          }, {
            value: "browse",
            label: Fd("smpShop:browseItems")
          }],
          value: Od.browsing ? "browse" : "recent",
          onChange: Od.setView,
          ariaLabel: Fd("smpShop:show")
        }), !Od.browsing && Wd]
      })
    }

    function aR(dd) {
      let {
        item: Od,
        names: md,
        summary: Wd,
        onBack: Fd,
        children: Rd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, td.jsx)(vd.d, {
          className: "SmpBackButton",
          onClick: Fd,
          children: Kd("general:back")
        }), (0, td.jsx)(jF, {
          item: Od,
          size: "big"
        }), (0, td.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, td.jsx)("b", {
            children: oR(md, Od)
          }), Wd && (0, td.jsx)("small", {
            children: Wd
          })]
        }), Rd]
      })
    }

    function ER(dd) {
      let {
        browser: Od,
        className: md,
        action: Wd,
        above: Fd,
        list: Xd,
        summary: Kd,
        recentLabel: hd,
        listControls: vd,
        onBack: Qd
      } = dd;
      return (0, td.jsxs)("div", {
        className: Rd()("SmpScreen", md),
        children: [(0, td.jsx)(gR, {
          browser: Od,
          children: Wd
        }), Od.shown && (0, td.jsx)(aR, {
          item: Od.shown,
          names: Od.names,
          summary: !Od.loading && Kd,
          onBack: () => {
            null === Qd || void 0 === Qd || Qd(), Od.searchFor(null)
          },
          children: vd
        }), Fd, Od.shown ? Xd : (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(wR, {
            browser: Od,
            recentLabel: hd,
            children: vd
          }), Od.browsing ? (0, td.jsx)(pR, {
            items: Od.catalogue,
            query: Od.query,
            onPick: Od.pickItem
          }) : Xd]
        })]
      })
    }

    function JR(dd, Od) {
      const md = dd.map((dd => {
        let {
          meta: Od
        } = dd;
        return Od.pricePerItem
      }));
      return "min" === Od ? Math.min(...md) : Math.max(...md)
    }
    var UR = md(7530);
    const xR = (0, Wd.memo)((function(dd) {
      var Od;
      const {
        t: md
      } = (0, Xd.G)(), Wd = null === dd.seller, Fd = dd.quantity * dd.pricePerItem;
      return (0, td.jsxs)("div", {
        className: dd.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, td.jsx)(jF, {
          item: dd.item,
          amount: dd.quantity,
          size: dd.grid ? "big" : "normal",
          tier: dd.tier
        }), (0, td.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, td.jsx)("b", {
            children: (0, td.jsx)(SF.d, {
              text: null !== (Od = dd.title) && void 0 !== Od ? Od : `${dd.quantity}x ${dd.item}`
            })
          }), (0, td.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, td.jsx)("span", {
              children: Wd ? md("smpShop:you") : (0, td.jsx)(SF.d, {
                text: [{
                  entityName: dd.seller
                }]
              })
            }), (0, td.jsx)("span", {
              children: md("smpShop:timeLeft", {
                time: hR(dd.expiresAt)
              })
            })]
          })]
        }), (0, td.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, td.jsx)(DF, {
            amount: dd.pricePerItem
          }), (0, td.jsx)("small", {
            children: md("smpShop:each")
          })]
        }), (0, td.jsx)(vd.g, {
          className: "SmpBuyButton",
          disabled: Wd || !dd.canAfford && !dd.busy,
          loading: dd.busy,
          onClick: () => {
            dd.onBuy(dd.itemKey)
          },
          children: Wd ? md("smpShop:yours") : (0, td.jsx)(DF, {
            amount: Fd
          })
        })]
      })
    }));

    function BR(dd) {
      let {
        view: Od,
        onChange: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return (0, td.jsx)(zF.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Wd("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, td.jsx)(Kd.c, {
            name: "list"
          }),
          ariaLabel: Wd("smpShop:listView")
        }, {
          value: "grid",
          label: (0, td.jsx)(Kd.c, {
            name: "grid-2"
          }),
          ariaLabel: Wd("smpShop:gridView")
        }],
        value: Od,
        onChange: md
      })
    }

    function SR(dd) {
      let {
        entries: Od,
        view: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)(), Fd = yR(), Rd = "grid" === md;
      return (0, td.jsxs)(td.Fragment, {
        children: [!Rd && (0, td.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, td.jsx)("span", {}), (0, td.jsx)("span", {
            children: Wd("smpShop:columnItem")
          }), (0, td.jsx)("span", {
            children: Wd("smpShop:columnPriceEach")
          }), (0, td.jsx)("span", {
            children: Wd("smpShop:columnTotal")
          })]
        }), (0, td.jsx)(bR.c, {
          lazyLoadedClassName: Rd ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: XR,
          observerUpdateDeps: [Od.length],
          children: Od.map((dd => {
            var Od, md;
            let {
              key: Wd,
              item: Xd,
              meta: Kd
            } = dd;
            const hd = Kd.quantity * Kd.pricePerItem;
            return (0, td.jsx)(xR, {
              itemKey: Wd,
              item: Kd.item,
              title: Xd.customTitle,
              quantity: Kd.quantity,
              pricePerItem: Kd.pricePerItem,
              seller: Kd.seller,
              expiresAt: Kd.expiresAt,
              tier: null !== (Od = null === (md = Xd.enchant) || void 0 === md ? void 0 : md.tier) && void 0 !== Od ? Od : null,
              busy: Fd.isPending(Wd) || null !== Kd.seller && !1 === Xd.canBuy,
              canAfford: Fd.canAfford(Xd, hd),
              grid: Rd,
              onBuy: Fd.act
            }, Wd)
          }))
        }, md)]
      })
    }
    const sR = [1, 10, 100],
      uR = [1, 10, 100, 999];

    function VR(dd) {
      var Od, md, Fd, hd, Qd, od, Nd, qd, Hd, yd;
      const {
        t: bd
      } = (0, Xd.G)(), Td = yR(), {
        creator: pd,
        mode: Yd
      } = dd, [wd, Ed] = (0, Wd.useState)(null !== (Od = null === pd || void 0 === pd ? void 0 : pd.meta.item) && void 0 !== Od ? Od : null), [Jd, Ud] = (0, Wd.useState)(1), [xd, Bd] = (0, Wd.useState)(0), [Sd, sd] = (0, Wd.useState)(""), [ud, Vd] = (0, Wd.useState)(0), Ad = (0, Wd.useRef)(wd), rd = (0, Wd.useRef)(!1), [Gd, nd] = (0, Wd.useState)(!1), Ld = null !== (md = null === pd || void 0 === pd ? void 0 : pd.meta.item) && void 0 !== md ? md : null, Pd = null !== (Fd = null === pd || void 0 === pd ? void 0 : pd.meta.owned) && void 0 !== Fd ? Fd : 0;
      (0, Wd.useEffect)((() => {
        dd.searching || null === Ld || Ld === Ad.current || (Ad.current = Ld, rd.current = !1, Ed(Ld), Bd(0), Ud("list" === Yd ? Math.max(1, Pd) : 1))
      }), [Ld, dd.searching]);
      const zd = !!pd && !!wd && pd.meta.item === wd,
        cd = zd ? pd.meta.owned : null !== (hd = null === (Qd = dd.inventory) || void 0 === Qd || null === (od = Qd.find((dd => dd.item === wd))) || void 0 === od ? void 0 : od.quantity) && void 0 !== hd ? hd : 0,
        jd = "list" === Yd ? Math.max(1, cd) : 45954,
        Dd = null !== (Nd = dd.prices[0]) && void 0 !== Nd ? Nd : null,
        ed = dd.prices.length ? Math.round(dd.prices.reduce(((dd, Od) => dd + Od), 0) / dd.prices.length) : null,
        Id = null === (qd = dd.inventory) || void 0 === qd || null === (Hd = qd.find((dd => dd.item === wd))) || void 0 === Hd ? void 0 : Hd.sellPrice;
      (0, Wd.useEffect)((() => {
        var dd;
        zd && (Ud((dd => "list" === Yd ? Math.min(Math.max(1, dd), Math.max(1, cd)) : dd)), rd.current || Bd(null !== (dd = null !== Dd && void 0 !== Dd ? Dd : ed) && void 0 !== dd ? dd : Math.max(1, null !== Id && void 0 !== Id ? Id : 1)))
      }), [zd, cd, wd, Dd, ed]);
      const ld = dd => {
          rd.current = !0, Bd(dd)
        },
        Cd = Od => {
          var md, Wd, Fd;
          Ad.current = Od, rd.current = !1, nd(!1), sd(""), Vd((dd => dd + 1)), Ed(Od), Bd(0), Ud("list" === Yd && null !== (md = null === (Wd = dd.inventory) || void 0 === Wd || null === (Fd = Wd.find((dd => dd.item === Od))) || void 0 === Fd ? void 0 : Fd.quantity) && void 0 !== md ? md : 1), (null === pd || void 0 === pd ? void 0 : pd.meta.item) !== Od && dd.onPickItem(Od)
        },
        Zd = Jd * xd,
        kd = "list" === Yd && null !== pd && void 0 !== pd && pd.meta.fee ? function(dd, Od) {
          const md = Math.max(0, Od - dd.taxFreeAllowance);
          return Math.ceil(Math.round(md * dd.rate * 1e6) / 1e6)
        }(pd.meta.fee, Zd) : 0,
        fd = !!pd && Td.isPending(pd.key),
        Md = zd && !dd.searching && Jd >= 1 && xd >= 1 && ("order" === Yd || cd >= Jd) && !fd,
        dO = !!wd && !zd && !dd.searching && Jd >= 1 && xd >= 1,
        OO = () => {
          Md ? Td.act(pd.key, `${Jd}|${xd}`) : dO && (dd.onPickItem(wd), nd(!0))
        };
      (0, Wd.useEffect)((() => {
        Gd && zd && !dd.searching && (nd(!1), OO())
      }), [Gd, zd, dd.searching]);
      const mO = !!wd && !zd && (dd.searching || Gd),
        WO = wd ? oR(dd.names, wd) : "",
        FO = (0, Wd.useMemo)((() => tR(dd.catalogue, Sd).slice(0, 8)), [dd.catalogue, Sd]),
        RO = ("list" === Yd ? sR.filter((dd => dd < cd)) : uR).map((dd => ({
          value: dd,
          label: String(dd)
        })));
      "list" === Yd && cd > 0 && RO.push({
        value: cd,
        label: bd("smpShop:all", {
          count: cd
        })
      });
      const XO = [];
      return null !== Dd && (Dd > 1 && XO.push({
        value: Dd - 1,
        label: bd("smpShop:undercut", {
          price: PF(Dd - 1)
        })
      }), XO.push({
        value: Dd,
        label: bd("smpShop:lowest", {
          price: PF(Dd)
        })
      })), null !== ed && ed !== Dd && XO.push({
        value: ed,
        label: bd("smpShop:average", {
          price: PF(ed)
        })
      }), (0, td.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, td.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, td.jsx)("b", {
            children: bd("list" === Yd ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, td.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": bd("smpShop:close"),
            onClick: dd.onClose,
            children: (0, td.jsx)(Kd.c, {
              name: "xmark"
            })
          })]
        }), "list" === Yd && (0, td.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (yd = dd.inventory) && void 0 !== yd && yd.length ? dd.inventory.map((dd => {
            let {
              item: Od,
              quantity: md
            } = dd;
            return (0, td.jsx)("button", {
              type: "button",
              title: Od,
              className: Rd()("SmpPickerSlot", {
                SmpPickerSlotOn: Od === wd
              }),
              onClick: () => {
                Cd(Od)
              },
              children: (0, td.jsx)(jF, {
                item: Od,
                amount: md
              })
            }, Od)
          })) : (0, td.jsx)("span", {
            className: "SmpMuted",
            children: bd("smpShop:nothingToList")
          })
        }), ("list" === Yd || !wd) && (0, td.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, td.jsx)(gd.c, {
            className: "SmpSearchInput",
            placeholderText: bd("list" === Yd ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Sd,
            onValueChange: sd,
            blurOnEnter: !0,
            onEnter: () => {
              FO[0] && Cd(FO[0].name)
            }
          }, ud), FO.length > 0 && (0, td.jsx)("div", {
            className: "SmpPicker",
            children: FO.map((dd => {
              let {
                name: Od
              } = dd;
              return (0, td.jsx)("button", {
                type: "button",
                title: Od,
                className: Rd()("SmpPickerSlot", {
                  SmpPickerSlotOn: Od === wd
                }),
                onClick: () => {
                  Cd(Od)
                },
                children: (0, td.jsx)(jF, {
                  item: Od
                })
              }, Od)
            }))
          })]
        }), wd && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsxs)("div", {
            className: "SmpPickedName",
            children: [WO, mO && (0, td.jsx)(ZF, {})]
          }), (0, td.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, td.jsxs)("div", {
              className: "SmpField",
              children: [(0, td.jsxs)("span", {
                children: [bd("smpShop:quantity"), "list" === Yd && zd && (0, td.jsx)("small", {
                  children: bd("smpShop:youHave", {
                    count: cd
                  })
                })]
              }), (0, td.jsx)(kF, {
                value: Jd,
                onChange: Ud,
                max: jd,
                label: bd("smpShop:quantity")
              }), (0, td.jsx)(CF, {
                options: RO,
                value: Jd,
                onChange: Ud,
                ariaLabel: bd("smpShop:quantity")
              })]
            }), (0, td.jsxs)("div", {
              className: "SmpField",
              children: [(0, td.jsx)("span", {
                children: bd("smpShop:pricePerItem")
              }), (0, td.jsx)(kF, {
                value: Math.max(1, xd),
                onChange: ld,
                max: 9999999,
                step: fF,
                label: bd("smpShop:pricePerItem")
              }), (0, td.jsx)(CF, {
                options: XO,
                value: xd,
                onChange: ld,
                ariaLabel: bd("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Yd && (0, td.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, td.jsxs)("span", {
              children: [bd("smpShop:youGet"), " ", (0, td.jsx)(DF, {
                amount: Math.max(0, Zd - kd),
                exact: !0
              })]
            }), (0, td.jsx)("small", {
              children: kd > 0 ? bd("smpShop:listingFee", {
                fee: kd.toLocaleString("en-US")
              }) : bd("smpShop:listingRules")
            })]
          }), (0, td.jsx)(vd.r, {
            className: "SmpSubmit",
            disabled: !Md && !dO && !fd,
            loading: fd || mO || zd && dd.searching,
            onClick: OO,
            children: "list" === Yd ? bd("smpShop:listButton", {
              count: Jd,
              item: WO
            }) : (0, td.jsxs)(td.Fragment, {
              children: [bd("smpShop:orderButton", {
                count: Jd,
                item: WO
              }), " ", xd >= 1 && (0, td.jsx)(DF, {
                amount: Zd
              })]
            })
          })]
        })]
      })
    }

    function iR() {
      var dd;
      const {
        t: Od
      } = (0, Xd.G)(), md = yR(), Fd = null === (dd = md.shopInfo[md.categoryKey]) || void 0 === dd ? void 0 : dd.items, Rd = RR(Fd, "search"), Kd = RR(Fd, "creator"), hd = FR(Fd, "enchantedCreator"), Qd = FR(Fd, "listing"), od = RR(Fd, "empty"), Nd = YR(Rd, Qd.length > 0 || null !== od), {
        searched: qd,
        shown: Hd,
        loading: yd
      } = Nd, [bd, Td] = (0, Wd.useState)(!1), [pd, Yd] = function() {
        const [dd, Od] = (0, UR.c)("smpMarketView", "list");
        return ["grid" === dd ? "grid" : "list", Od]
      }(), gd = "grid" === pd, wd = (0, Wd.useMemo)((() => Qd.filter((dd => {
        let {
          meta: Od
        } = dd;
        return null !== Od.seller && Od.item === qd
      })).map((dd => {
        let {
          meta: Od
        } = dd;
        return Od.pricePerItem
      })).sort(((dd, Od) => dd - Od))), [Qd, qd]), Ed = (0, Wd.useMemo)((() => {
        const dd = new Set(Nd.catalogue.map((dd => {
          let {
            name: Od
          } = dd;
          return Od
        })));
        return function(dd) {
          for (const Od in dd)
            if ("sell" === dd[Od].smp) return FR(dd[Od].items, "sell").filter((dd => {
              let {
                item: Od
              } = dd;
              return !Od.enchant
            })).map((dd => {
              let {
                meta: Od
              } = dd;
              return {
                item: Od.item,
                quantity: Od.quantity,
                sellPrice: Od.pricePerItem
              }
            }));
          return []
        }(md.shopInfo).filter((Od => {
          let {
            item: md
          } = Od;
          return dd.has(md)
        }))
      }), [md.shopInfo, Nd.catalogue]);
      return (0, td.jsx)(ER, {
        browser: Nd,
        className: "SmpMarketTab",
        recentLabel: Od("smpShop:recentlyListed"),
        action: (0, td.jsx)(vd.r, {
          className: "SmpSellButton",
          onClick: () => {
            Td((dd => !dd))
          },
          children: Od("smpShop:sell")
        }),
        above: bd && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(VR, {
            mode: "list",
            creator: Kd,
            inventory: Ed,
            catalogue: Nd.catalogue,
            names: Nd.names,
            searching: yd,
            prices: wd,
            onPickItem: Nd.searchFor,
            onClose: () => {
              Td(!1)
            }
          }), hd.length > 0 && (0, td.jsx)(AR, {
            entries: hd
          })]
        }),
        listControls: (0, td.jsx)(BR, {
          view: pd,
          onChange: Yd
        }),
        summary: Hd && (Qd.length > 0 ? Od(1 === Qd.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Qd.length,
          price: PF(JR(Qd, "min"))
        }) : Od("smpShop:noOneSelling", {
          item: oR(Nd.names, Hd)
        })),
        list: yd ? (0, td.jsx)(eF, {
          grid: gd
        }) : Qd.length > 0 ? (0, td.jsx)(SR, {
          entries: Qd,
          view: pd
        }) : od ? (0, td.jsx)(lF, {
          entry: od
        }) : (0, td.jsx)(eF, {
          count: 3,
          grid: gd
        })
      })
    }

    function AR(dd) {
      let {
        entries: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), Fd = yR(), [Rd, Kd] = (0, Wd.useState)({});
      return (0, td.jsx)("div", {
        className: "SmpList",
        children: Od.map((dd => {
          var Od, Wd, Xd;
          let {
            key: hd,
            item: Qd,
            meta: od
          } = dd;
          const Nd = null !== (Od = Rd[hd]) && void 0 !== Od ? Od : 1;
          return (0, td.jsxs)("div", {
            className: "SmpRow",
            children: [(0, td.jsx)(jF, {
              item: od.item,
              amount: od.quantity,
              tier: null !== (Wd = null === (Xd = Qd.enchant) || void 0 === Xd ? void 0 : Xd.tier) && void 0 !== Wd ? Wd : null
            }), (0, td.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, td.jsx)("b", {
                children: (0, td.jsx)(SF.d, {
                  text: Qd.customTitle
                })
              }), (0, td.jsx)("small", {
                children: md("smpShop:enchantedListing")
              })]
            }), (0, td.jsx)(kF, {
              value: Nd,
              onChange: dd => {
                Kd({
                  ...Rd,
                  [hd]: dd
                })
              },
              max: 9999999,
              step: fF,
              label: md("smpShop:pricePerItem")
            }), (0, td.jsxs)(vd.r, {
              loading: Fd.isPending(hd),
              onClick: () => {
                Fd.act(hd, String(Nd))
              },
              children: [md("smpShop:list"), " ", (0, td.jsx)(DF, {
                amount: Nd
              })]
            })]
          }, hd)
        }))
      })
    }
    const rR = (0, Wd.memo)((function(dd) {
      let {
        itemKey: Od,
        item: md,
        quantity: Wd,
        pricePerItem: Fd,
        tier: Xd,
        selected: Kd,
        onSelect: hd
      } = dd;
      return (0, td.jsxs)("button", {
        type: "button",
        className: Rd()("SmpInventorySlot", {
          SmpInventorySlotOn: Kd
        }),
        title: md,
        onClick: () => {
          hd(Od)
        },
        children: [(0, td.jsx)(jF, {
          item: md,
          amount: Wd,
          tier: Xd
        }), (0, td.jsx)(DF, {
          amount: Fd
        })]
      })
    }));

    function GR() {
      var dd;
      const {
        t: Od
      } = (0, Xd.G)(), md = yR(), Fd = null === (dd = md.shopInfo[md.categoryKey]) || void 0 === dd ? void 0 : dd.items, Kd = FR(Fd, "sell"), hd = RR(Fd, "empty"), [vd, Qd] = (0, Wd.useState)(null), [od, Nd] = (0, Wd.useState)({}), qd = Kd.find((dd => {
        let {
          key: Od
        } = dd;
        return Od === vd
      }));
      return 0 === Kd.length ? (0, td.jsx)("div", {
        className: "SmpScreen",
        children: (0, td.jsx)(IF, {
          title: hd ? (0, td.jsx)(SF.d, {
            text: hd.item.customTitle
          }) : Od("smpShop:nothingToSell"),
          children: hd && (0, td.jsx)(SF.d, {
            text: hd.item.description
          })
        })
      }) : (0, td.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, td.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Kd.map((dd => {
            var Od, md;
            let {
              key: Wd,
              item: Fd,
              meta: Rd
            } = dd;
            return (0, td.jsx)(rR, {
              itemKey: Wd,
              item: Rd.item,
              quantity: Rd.quantity,
              pricePerItem: Rd.pricePerItem,
              tier: null !== (Od = null === (md = Fd.enchant) || void 0 === md ? void 0 : md.tier) && void 0 !== Od ? Od : null,
              selected: Wd === vd,
              onSelect: Qd
            }, Wd)
          }))
        }), (0, td.jsx)("div", {
          className: Rd()("SmpSellBar", {
            SmpSellBarIdle: !qd
          }),
          children: qd ? (0, td.jsx)(nR, {
            entry: qd,
            choice: NR(qd.item, od[qd.key]),
            onChoose: dd => {
              Nd({
                ...od,
                [qd.key]: dd
              })
            }
          }) : (0, td.jsx)("span", {
            className: "SmpMuted",
            children: Od("smpShop:tapToSell")
          })
        })]
      })
    }

    function nR(dd) {
      var Od, md, Wd, Fd;
      let {
        entry: Rd,
        choice: Kd,
        onChoose: hd
      } = dd;
      const {
        t: Qd
      } = (0, Xd.G)(), od = yR(), {
        key: Nd,
        item: qd,
        meta: Hd
      } = Rd, yd = vR("dropdown" === (null === (Od = qd.userInput) || void 0 === Od ? void 0 : Od.type) ? qd.userInput.dropdownOptions : []), bd = null === Kd ? 0 : -(0, JF.b)(qd, Kd);
      return (0, td.jsxs)(td.Fragment, {
        children: [(0, td.jsx)(jF, {
          item: Hd.item,
          amount: Hd.quantity,
          tier: null !== (md = null === (Wd = qd.enchant) || void 0 === Wd ? void 0 : Wd.tier) && void 0 !== md ? md : null
        }), (0, td.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, td.jsx)("b", {
            children: (0, td.jsx)(SF.d, {
              text: null !== (Fd = qd.customTitle) && void 0 !== Fd ? Fd : Hd.item
            })
          }), (0, td.jsx)("small", {
            children: Qd("smpShop:sellEach", {
              count: Hd.quantity
            })
          })]
        }), (0, td.jsx)(CF, {
          options: yd.map((dd => {
            let {
              label: Od,
              quantity: md,
              isAll: Wd
            } = dd;
            return {
              value: Od,
              label: Wd ? Qd("smpShop:all", {
                count: md
              }) : String(md)
            }
          })),
          value: Kd,
          onChange: hd,
          ariaLabel: Qd("smpShop:quantity")
        }), (0, td.jsxs)(vd.r, {
          loading: od.isPending(Nd),
          disabled: null === Kd,
          onClick: () => {
            od.act(Nd, Kd)
          },
          children: [Qd("smpShop:sellButton"), " ", (0, td.jsx)(DF, {
            amount: bd
          })]
        })]
      })
    }

    function LR() {
      var dd;
      const {
        t: Od
      } = (0, Xd.G)(), md = yR(), Wd = null === (dd = md.shopInfo[md.categoryKey]) || void 0 === dd ? void 0 : dd.items, Fd = FR(Wd, "collect"), Rd = FR(Wd, "myListing"), Kd = (dd, Od) => md.isPending(dd) || !1 === Od.canBuy;
      return (0, td.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, td.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Od("smpShop:readyToCollect")
        }), Fd.length > 0 ? (0, td.jsx)("div", {
          className: "SmpList",
          children: Fd.map((dd => {
            var Wd, Fd;
            let {
              key: Rd,
              item: Xd,
              meta: hd
            } = dd;
            return (0, td.jsxs)("div", {
              className: "SmpRow",
              children: [(0, td.jsx)(jF, {
                item: "sold" === hd.type ? "Gold Coin" : hd.item,
                amount: "sold" === hd.type ? 0 : hd.quantity,
                tier: null !== (Wd = null === (Fd = Xd.enchant) || void 0 === Fd ? void 0 : Fd.tier) && void 0 !== Wd ? Wd : null
              }), (0, td.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, td.jsx)("b", {
                  children: (0, td.jsx)(SF.d, {
                    text: Xd.customTitle
                  })
                }), (0, td.jsx)("small", {
                  children: (0, td.jsx)(SF.d, {
                    text: Xd.description
                  })
                })]
              }), (0, td.jsx)(vd.m, {
                loading: Kd(Rd, Xd),
                onClick: () => {
                  md.act(Rd)
                },
                children: Od("smpShop:collect")
              })]
            }, Rd)
          }))
        }) : (0, td.jsx)(IF, {
          title: Od("smpShop:nothingToCollect"),
          children: Od("smpShop:nothingToCollectHint")
        }), (0, td.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Od("smpShop:activeListings", {
            count: Rd.length
          })
        }), Rd.length > 0 ? (0, td.jsx)("div", {
          className: "SmpList",
          children: Rd.map((dd => {
            var Wd, Fd;
            let {
              key: Rd,
              item: Xd,
              meta: hd
            } = dd;
            return (0, td.jsxs)("div", {
              className: "SmpRow",
              children: [(0, td.jsx)(jF, {
                item: hd.item,
                amount: hd.quantity,
                tier: null !== (Wd = null === (Fd = Xd.enchant) || void 0 === Fd ? void 0 : Fd.tier) && void 0 !== Wd ? Wd : null
              }), (0, td.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, td.jsx)("b", {
                  children: (0, td.jsx)(SF.d, {
                    text: Xd.customTitle
                  })
                }), (0, td.jsx)("small", {
                  children: Od("smpShop:timeLeft", {
                    time: hR(hd.expiresAt)
                  })
                })]
              }), (0, td.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, td.jsx)(DF, {
                  amount: hd.pricePerItem
                }), (0, td.jsx)("small", {
                  children: Od("smpShop:each")
                })]
              }), (0, td.jsx)(vd.G, {
                loading: Kd(Rd, Xd),
                onClick: () => {
                  md.act(Rd)
                },
                children: Od("smpShop:cancel")
              })]
            }, Rd)
          }))
        }) : (0, td.jsx)(IF, {
          title: Od("smpShop:noActiveListings"),
          children: Od("smpShop:noActiveListingsHint")
        })]
      })
    }

    function PR(dd) {
      let {
        done: Od,
        of: md
      } = dd;
      return (0, td.jsx)("span", {
        className: "SmpProgress",
        children: (0, td.jsx)("i", {
          style: {
            width: `${Math.min(100,Od/Math.max(1,md)*100)}%`
          }
        })
      })
    }

    function zR(dd) {
      var Od, md, Wd;
      let {
        entry: Fd,
        choice: Rd,
        onChoose: Kd
      } = dd;
      const {
        t: hd
      } = (0, Xd.G)(), Qd = yR(), {
        key: od,
        item: Nd,
        meta: qd
      } = Fd, Hd = "dropdown" === (null === (Od = Nd.userInput) || void 0 === Od ? void 0 : Od.type) ? Nd.userInput.dropdownOptions : [], yd = !0 === qd.processing, bd = null !== qd.creator && (qd.owned > 0 || yd), Td = bd && qd.owned > 0 ? vR(Hd) : [], pd = null === Rd ? 0 : null !== (md = null === (Wd = Td.find((dd => dd.label === Rd))) || void 0 === Wd ? void 0 : Wd.quantity) && void 0 !== md ? md : 0;
      return (0, td.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, td.jsx)(jF, {
          item: qd.item
        }), (0, td.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, td.jsx)("b", {
            children: (0, td.jsx)(SF.d, {
              text: Nd.customTitle
            })
          }), (0, td.jsxs)("small", {
            children: [(0, td.jsx)(DF, {
              amount: qd.pricePerItem
            }), " ", hd("smpShop:each"), " \xb7", " ", null === qd.creator ? hd("smpShop:you") : (0, td.jsx)(SF.d, {
              text: [{
                entityName: qd.creator
              }]
            })]
          }), (0, td.jsx)(PR, {
            done: qd.delivered,
            of: qd.wanted
          })]
        }), bd ? (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(CF, {
            options: Td.map((dd => {
              let {
                label: Od,
                quantity: md,
                isAll: Wd
              } = dd;
              return {
                value: Od,
                label: Wd ? hd("smpShop:max", {
                  count: md
                }) : String(md)
              }
            })),
            value: Rd,
            onChange: Kd,
            ariaLabel: hd("smpShop:quantity")
          }), (0, td.jsxs)(vd.r, {
            loading: Qd.isPending(od) || yd,
            disabled: null === Rd,
            onClick: () => {
              Qd.act(od, Rd)
            },
            children: [hd("smpShop:deliver"), " ", (0, td.jsx)(DF, {
              amount: pd * qd.pricePerItem
            })]
          })]
        }) : (0, td.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === qd.creator ? hd("smpShop:yourOrder") : hd("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function cR() {
      var dd;
      const {
        t: Od
      } = (0, Xd.G)(), md = yR(), Fd = null === (dd = md.shopInfo[md.categoryKey]) || void 0 === dd ? void 0 : dd.items, Rd = RR(Fd, "search"), Kd = RR(Fd, "creator"), hd = FR(Fd, "order"), Qd = RR(Fd, "empty"), od = YR(Rd, hd.length > 0 || null !== Qd), [Nd, qd] = (0, Wd.useState)(!1), [Hd, yd] = (0, Wd.useState)({});
      return (0, td.jsx)(ER, {
        browser: od,
        recentLabel: Od("smpShop:recentOrders"),
        action: (0, td.jsx)(vd.r, {
          onClick: () => {
            qd((dd => !dd))
          },
          children: Od("smpShop:createOrder")
        }),
        above: Nd && (0, td.jsx)(VR, {
          mode: "order",
          creator: Kd,
          catalogue: od.catalogue,
          names: od.names,
          searching: od.loading,
          prices: [],
          onPickItem: od.searchFor,
          onClose: () => {
            qd(!1)
          }
        }),
        onBack: () => {
          qd(!1)
        },
        summary: hd.length > 0 && Od(1 === hd.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: hd.length,
          price: PF(JR(hd, "max"))
        }),
        list: od.loading ? (0, td.jsx)(eF, {}) : hd.length > 0 ? (0, td.jsx)(bR.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: XR,
          observerUpdateDeps: [hd.length],
          children: hd.map((dd => (0, td.jsx)(zR, {
            entry: dd,
            choice: NR(dd.item, Hd[dd.key]),
            onChoose: Od => {
              yd({
                ...Hd,
                [dd.key]: Od
              })
            }
          }, dd.key)))
        }) : Qd ? (0, td.jsx)(lF, {
          entry: Qd
        }) : (0, td.jsx)(eF, {
          count: 3
        })
      })
    }

    function jR() {
      var dd;
      const {
        t: Od
      } = (0, Xd.G)(), md = yR(), Wd = FR(null === (dd = md.shopInfo[md.categoryKey]) || void 0 === dd ? void 0 : dd.items, "myOrder");
      return 0 === Wd.length ? (0, td.jsx)("div", {
        className: "SmpScreen",
        children: (0, td.jsx)(IF, {
          title: Od("smpShop:noOrders"),
          children: Od("smpShop:noOrdersHint")
        })
      }) : (0, td.jsx)("div", {
        className: "SmpScreen",
        children: (0, td.jsx)("div", {
          className: "SmpList",
          children: Wd.map((dd => {
            let {
              key: Wd,
              item: Fd,
              meta: Rd
            } = dd;
            const Xd = md.isPending(Wd) || !1 === Fd.canBuy;
            return (0, td.jsxs)("div", {
              className: "SmpRow",
              children: [(0, td.jsx)(jF, {
                item: Rd.item,
                amount: Rd.collectable
              }), (0, td.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, td.jsx)("b", {
                  children: (0, td.jsx)(SF.d, {
                    text: Fd.customTitle
                  })
                }), (0, td.jsxs)("small", {
                  children: [(0, td.jsx)(DF, {
                    amount: Rd.pricePerItem
                  }), " ", Od("smpShop:each"), Rd.collectable > 0 && ` \xb7 ${Od("smpShop:readyCount",{count:Rd.collectable})}`]
                }), (0, td.jsx)(PR, {
                  done: Rd.delivered,
                  of: Rd.wanted
                })]
              }), Rd.collectable > 0 ? (0, td.jsx)(vd.m, {
                loading: Xd,
                onClick: () => {
                  md.act(Wd)
                },
                children: Od("smpShop:collectCount", {
                  count: Rd.collectable
                })
              }) : (0, td.jsx)(vd.G, {
                loading: Xd,
                onClick: () => {
                  md.act(Wd)
                },
                children: Od("smpShop:cancel")
              })]
            }, Wd)
          }))
        })
      })
    }
    const DR = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      eR = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function IR(dd, Od) {
      let md = !1;
      const Wd = {};
      for (const Fd in dd) Od(Fd, dd[Fd]) ? Wd[Fd] = dd[Fd] : md = !0;
      return md ? Wd : dd
    }

    function lR(dd) {
      var Od, md, Fd, hd;
      const {
        show: vd,
        shopInfo: Qd,
        selectedCategoryKey: od
      } = dd, {
        t: Nd
      } = (0, Xd.G)(), qd = null !== od && void 0 !== od ? od : "", Hd = WR(Qd, qd), yd = null === (Od = Qd[qd]) || void 0 === Od ? void 0 : Od.items, bd = null !== Hd, [Td, pd] = (0, Wd.useState)({}), [Yd, gd] = (0, Wd.useState)([]), [wd, Ed] = (0, Wd.useState)(!1), [Jd, Ud] = (0, Wd.useState)(null), [, xd] = (0, Wd.useState)(0), Bd = (0, Wd.useRef)(0), Sd = (0, Wd.useRef)({}), sd = (0, Wd.useRef)({
        items: yd,
        pending: Td,
        shopInfo: Qd,
        active: bd,
        show: vd,
        canAfford: dd.canAfford,
        buy: dd.buy
      });
      sd.current = {
        items: yd,
        pending: Td,
        shopInfo: Qd,
        active: bd,
        show: vd,
        canAfford: dd.canAfford,
        buy: dd.buy
      };
      const ud = (0, Wd.useCallback)((dd => {
        Bd.current++;
        const Od = Bd.current;
        gd((md => [{
          id: Od,
          text: dd
        }, ...md].slice(0, 8))), Ud(Od)
      }), []);
      (0, Wd.useEffect)((() => {
        if (null === Jd) return;
        const dd = setTimeout((() => {
          Ud(null)
        }), 3e3);
        return () => {
          clearTimeout(dd)
        }
      }), [Jd]), (0, Wd.useEffect)((() => {
        const Od = dd.message;
        if (!Od) return;
        const {
          shopInfo: md,
          active: Wd,
          items: Fd
        } = sd.current, Rd = null !== Od.categoryKey ? null !== WR(md, Od.categoryKey) : Wd;
        (Rd || Wd) && ud(Od.text), Rd && pd((dd => IR(dd, (dd => {
          var Od, md;
          return !DR.has(null === Fd || void 0 === Fd || null === (Od = Fd[dd]) || void 0 === Od || null === (md = Od.smp) || void 0 === md ? void 0 : md.kind)
        }))))
      }), [dd.message, ud]), (0, Wd.useEffect)((() => {
        pd((dd => IR(dd, ((dd, Od) => qR(null === yd || void 0 === yd ? void 0 : yd[dd]) === Od.snapshot))))
      }), [Qd, yd]);
      const Vd = Object.keys(Td).length > 0;
      (0, Wd.useEffect)((() => {
        if (!Vd) return;
        const dd = setInterval((() => {
          const {
            pending: dd,
            items: Od,
            show: md
          } = sd.current;
          if (!md) return;
          xd((dd => dd + 1));
          const Wd = Date.now(),
            Fd = Object.keys(dd).filter((md => Wd - dd[md].at >= 12e3 && qR(null === Od || void 0 === Od ? void 0 : Od[md]) === dd[md].snapshot));
          if (0 === Fd.length) return;
          const Rd = Fd.some((md => {
            var Wd, Fd;
            return "search" !== (null === Od || void 0 === Od || null === (Wd = Od[md]) || void 0 === Wd || null === (Fd = Wd.smp) || void 0 === Fd ? void 0 : Fd.kind) || dd[md].resend
          }));
          for (const Xd of Fd) Sd.current[Xd] = Wd;
          pd((dd => IR(dd, (dd => !Fd.includes(dd))))), Rd && ud(Nd("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(dd)
        }
      }), [Vd]), (0, Wd.useEffect)((() => {
        pd({})
      }), [qd]), (0, Wd.useEffect)((() => {
        vd || Ed(!1)
      }), [vd]);
      const Ad = (0, Wd.useCallback)((function(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Wd,
            pending: Fd,
            canAfford: Rd,
            buy: Xd
          } = sd.current, Kd = null === Wd || void 0 === Wd ? void 0 : Wd[dd];
          if (!Kd || dd in Fd || !1 === Kd.canBuy) return !1;
          if (!Rd(Kd, (0, JF.b)(Kd, Od))) return !1;
          Xd(dd, Kd, Od);
          const hd = {
            snapshot: qR(Kd),
            at: Date.now(),
            resend: md
          };
          return sd.current.pending = {
            ...sd.current.pending,
            [dd]: hd
          }, pd((Od => ({
            ...Od,
            [dd]: hd
          }))), !0
        }), []),
        rd = (0, Wd.useMemo)((() => ({
          shopInfo: Qd,
          categoryKey: qd,
          canAfford: dd.canAfford,
          isPending: dd => dd in Td,
          gaveUpAt: dd => {
            var Od;
            return null !== (Od = Sd.current[dd]) && void 0 !== Od ? Od : 0
          },
          act: Ad,
          notify: ud
        })), [Qd, qd, dd.canAfford, Td, Ad, ud]),
        Gd = Math.min(...Object.values(Td).map((dd => dd.at))),
        nd = Vd && Date.now() - Gd > 1500,
        Ld = Yd.length > 1,
        Pd = null !== (md = null === (Fd = Qd[qd]) || void 0 === Fd ? void 0 : Fd.customTitle) && void 0 !== md ? md : qd,
        zd = null === (hd = Qd[qd]) || void 0 === hd ? void 0 : hd.description;
      let cd = null;
      return "market" === Hd ? cd = (0, td.jsx)(iR, {}) : "sell" === Hd ? cd = (0, td.jsx)(GR, {}) : "collect" === Hd ? cd = (0, td.jsx)(LR, {}) : "orders" === Hd ? cd = (0, td.jsx)(cR, {}) : "myOrders" === Hd && (cd = (0, td.jsx)(jR, {})), (0, td.jsx)(HR.Provider, {
        value: rd,
        children: (0, td.jsx)("div", {
          className: "SmpShopHost",
          hidden: !bd,
          children: (0, td.jsxs)("div", {
            className: "SmpShop",
            children: [(0, td.jsx)("header", {
              className: "SmpHeader",
              children: (0, td.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, td.jsxs)("h2", {
                  children: [Hd && (0, td.jsx)(Kd.c, {
                    name: eR[Hd]
                  }), Nd(Pd)]
                }), zd && (0, td.jsx)("p", {
                  children: (0, td.jsx)(SF.d, {
                    text: zd
                  })
                })]
              })
            }), (0, td.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: vd && cd
            }), (0, td.jsxs)("button", {
              type: "button",
              className: Rd()("SmpStatus", {
                SmpStatusWaiting: Vd,
                SmpStatusFresh: !Vd && null !== Jd,
                SmpStatusHasHistory: Ld
              }),
              "aria-live": "polite",
              "aria-expanded": Ld ? wd : void 0,
              onClick: () => {
                Ld && Ed((dd => !dd))
              },
              children: [Vd ? (0, td.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, td.jsx)(ZF, {}), Nd(nd ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Yd[0] ? (0, td.jsx)("span", {
                className: "SmpStatusText",
                children: (0, td.jsx)(SF.d, {
                  text: Yd[0].text
                })
              }, Yd[0].id) : (0, td.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Nd("smpShop:ready")
              }), Ld && (0, td.jsx)("small", {
                children: Nd("smpShop:recentMessages", {
                  count: Yd.length
                })
              })]
            }), wd && Ld && (0, td.jsx)("div", {
              className: "SmpStatusHistory",
              children: Yd.map((dd => (0, td.jsx)("div", {
                children: (0, td.jsx)(SF.d, {
                  text: dd.text
                })
              }, dd.id)))
            })]
          })
        })
      })
    }
    var CR = md(2116),
      ZR = md(35555);
    const kR = "\x1floadout";

    function fR(dd) {
      const Od = [];
      for (const md in dd) {
        const Wd = dd[md].loadout;
        Wd && Od.push({
          categoryKey: md,
          config: Wd
        })
      }
      return Od.sort(((dd, Od) => MR(dd.config) - MR(Od.config)))
    }

    function MR(dd) {
      return "gun" === dd.slot ? 0 : dd.tier
    }

    function dX(dd) {
      const Od = [];
      for (const md of nF(dd)) dd[md].loadout ? Od.includes(kR) || Od.push(kR) : Od.push(md);
      return Od
    }

    function OX(dd, Od) {
      const md = [];
      for (const Wd in dd) {
        const Fd = dd[Wd].loadout;
        (null === Fd || void 0 === Fd ? void 0 : Fd.kind) === Od && md.push({
          key: Wd,
          item: dd[Wd],
          meta: Fd
        })
      }
      return md.sort(((dd, Od) => {
        const md = WX(dd.meta) - WX(Od.meta);
        return 0 !== md ? md : dd.meta.free !== Od.meta.free ? dd.meta.free ? -1 : 1 : dd.key.localeCompare(Od.key)
      }))
    }
    const mX = ["assaultRifle", "battleRifle", "smg", "shotgun", "marksman", "sniper", "machineGun", "pistol", "machinePistol"];

    function WX(dd) {
      return "gun" === dd.kind ? mX.indexOf(dd.gunClass) : 0
    }
    const FX = ["damage", "fireRate", "accuracy"];

    function RX(dd, Od) {
      var md, Wd, Fd;
      const Rd = ZR.c[dd];
      if (!Rd) return null;
      const Xd = {
        ...Rd,
        ...Od
      };
      return {
        damage: Xd.damage * (null !== (md = Xd.shotPelletCount) && void 0 !== md ? md : 1),
        fireRate: XX(Xd.fireRate, null !== (Wd = Xd.burstCount) && void 0 !== Wd ? Wd : 1, null !== (Fd = Xd.burstDelay) && void 0 !== Fd ? Fd : 0),
        accuracy: -(Xd.altInaccuracyStanding + Xd.altInaccuracyFromShot),
        clipSize: Xd.clipSize
      }
    }

    function XX(dd, Od, md) {
      return 6e4 * Od / (6e4 / dd + (Od - 1) * md)
    }

    function KX(dd, Od, md, Wd) {
      if ("accuracy" !== dd) return md <= 0 ? 1 : Od / md;
      const Fd = Math.sqrt(-Wd) - Math.sqrt(-md);
      return Fd <= 0 ? 1 : 1 - (Math.sqrt(-Od) - Math.sqrt(-md)) / Fd * .94
    }

    function hX(dd) {
      let {
        iconName: Od
      } = dd;
      return Td.gameBridge.lookup("isItemName", Od) ? (0, td.jsx)(BF.c, {
        itemName: Od,
        amount: 1
      }) : (0, td.jsx)(Kd.c, {
        name: Od,
        className: "2x"
      })
    }
    const vX = {
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

    function QX(dd) {
      let {
        entry: Od,
        stats: md,
        bars: Wd,
        compared: Fd,
        buy: hd,
        canAfford: vd,
        currency: Qd
      } = dd;
      const {
        t: od
      } = (0, Xd.G)(), {
        meta: Nd
      } = Od;
      return (0, td.jsxs)("div", {
        className: Rd()("LoadoutCard", "LoadoutGunCard", {
          LoadoutCardEquipped: Nd.equipped,
          LoadoutCardLocked: !Nd.unlocked
        }),
        children: [!Nd.unlocked && (0, td.jsx)(Kd.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, td.jsx)("div", {
          className: "LoadoutGunArt",
          children: (0, td.jsx)(BF.c, {
            itemName: Nd.gun,
            amount: 0,
            gunTransform: "none"
          })
        }), (0, td.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, td.jsx)("b", {
            children: Od.key
          }), (0, td.jsxs)("small", {
            children: [od(vX[Nd.gunClass]), md && (0, td.jsxs)(td.Fragment, {
              children: [" \xb7 ", od("loadoutShop:rounds", {
                count: md.clipSize
              })]
            })]
          })]
        }), md && Wd && (0, td.jsx)("div", {
          className: "LoadoutStats",
          children: FX.map((dd => {
            const Od = Fd ? function(dd, Od) {
              const md = Math.max(Math.abs(dd), Math.abs(Od), 1);
              return Math.abs(dd - Od) / md < .05 ? null : dd > Od ? "better" : "worse"
            }(md[dd], Fd[dd]) : null;
            return (0, td.jsxs)("div", {
              className: "LoadoutStat",
              children: [(0, td.jsx)("span", {
                children: od(`loadoutShop:${dd}`)
              }), (0, td.jsx)("div", {
                className: "LoadoutBar",
                children: (0, td.jsx)("i", {
                  className: Rd()({
                    LoadoutBarBetter: "better" === Od,
                    LoadoutBarWorse: "worse" === Od
                  }),
                  style: {
                    width: 100 * Wd[dd] + "%"
                  }
                })
              })]
            }, dd)
          }))
        }), (0, td.jsx)(oX, {
          entry: Od,
          buy: hd,
          canAfford: vd,
          currency: Qd
        })]
      })
    }

    function tX(dd) {
      let {
        entry: Od,
        buy: md,
        canAfford: Wd,
        currency: Fd
      } = dd;
      const {
        meta: Xd
      } = Od;
      return (0, td.jsxs)("div", {
        className: Rd()("LoadoutCard", "LoadoutPerkCard", {
          LoadoutCardEquipped: Xd.equipped,
          LoadoutCardLocked: !Xd.unlocked
        }),
        children: [!Xd.unlocked && (0, td.jsx)(Kd.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, td.jsx)("div", {
          className: "LoadoutPerkIcon",
          children: (0, td.jsx)(Kd.c, {
            name: Xd.icon
          })
        }), (0, td.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, td.jsx)("b", {
            children: Od.key
          }), (0, td.jsx)("small", {
            children: Xd.description
          })]
        }), (0, td.jsx)(oX, {
          entry: Od,
          buy: md,
          canAfford: Wd,
          currency: Fd
        })]
      })
    }

    function oX(dd) {
      let {
        entry: Od,
        buy: md,
        canAfford: Wd,
        currency: Fd
      } = dd;
      const {
        t: hd
      } = (0, Xd.G)(), {
        meta: Qd,
        item: od
      } = Od, Nd = () => {
        md(Od.key, od)
      };
      return (0, td.jsxs)("div", {
        className: "LoadoutCardFoot",
        children: [Qd.equipped && (0, td.jsxs)("span", {
          className: "LoadoutCardState LoadoutCardStateEquipped",
          children: [(0, td.jsx)(Kd.c, {
            name: "check"
          }), hd("loadoutShop:equipped")]
        }), Qd.unlocked && !Qd.equipped && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)("span", {
            className: "LoadoutCardState",
            children: Qd.free ? hd("loadoutShop:free") : hd("loadoutShop:owned")
          }), (0, td.jsx)(vd.g, {
            className: "LoadoutCardButton",
            disabled: !Wd,
            onClick: Nd,
            children: hd("loadoutShop:equip")
          })]
        }), !Qd.unlocked && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsxs)("span", {
            className: Rd()("LoadoutPrice", {
              LoadoutPriceShort: !Wd
            }),
            children: [Fd && (0, td.jsx)("span", {
              className: "LoadoutPriceIcon",
              style: {
                color: Fd.iconColour
              },
              children: (0, td.jsx)(hX, {
                iconName: Fd.icon
              })
            }), od.cost]
          }), (0, td.jsx)(vd.m, {
            className: "LoadoutCardButton",
            disabled: !Wd,
            onClick: Nd,
            children: hd("loadoutShop:unlock")
          })]
        })]
      })
    }

    function NX(dd) {
      let {
        shopInfo: Od,
        selectedCategoryKey: md,
        selectCategory: Fd,
        buy: Rd,
        canAfford: Kd,
        currencyAmounts: hd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)(), Qd = fR(Od), {
        loadout: od,
        items: Nd
      } = Od[md], qd = dd => Kd(dd, (0, JF.b)(dd, null)), Hd = {
        buy: (dd, Od) => {
          qd(Od) && Rd(dd, Od)
        },
        affordable: qd,
        currencyAmounts: hd
      };
      return (0, td.jsx)("div", {
        className: "LoadoutShopHost",
        children: (0, td.jsxs)("div", {
          className: "LoadoutShop",
          children: [(0, td.jsxs)("header", {
            className: "LoadoutHeader",
            children: [(0, td.jsx)("h2", {
              children: vd("loadoutShop:title")
            }), (0, td.jsx)("p", {
              children: vd("loadoutShop:subtitle")
            })]
          }), (0, td.jsx)("nav", {
            className: "LoadoutSlots",
            "data-pad-tabs": "3",
            children: Qd.map((dd => {
              var Rd, Xd;
              const {
                config: Kd
              } = dd;
              return (0, td.jsxs)(Wd.Fragment, {
                children: ["perk" === Kd.slot && (0, td.jsx)(HX, {
                  points: Kd.points,
                  reached: (null !== (Rd = null === hd || void 0 === hd || null === (Xd = hd[Kd.pointsCurrency]) || void 0 === Xd ? void 0 : Xd.amount) && void 0 !== Rd ? Rd : 0) >= Kd.points
                }), (0, td.jsx)(yX, {
                  slot: dd,
                  items: Od[dd.categoryKey].items,
                  selected: dd.categoryKey === md,
                  onClick: () => {
                    Fd(dd.categoryKey)
                  }
                })]
              }, dd.categoryKey)
            }))
          }), (0, td.jsxs)("main", {
            className: "LoadoutPicker",
            "data-pad-initial-area": !0,
            children: ["gun" === (null === od || void 0 === od ? void 0 : od.slot) && (0, td.jsx)(TX, {
              items: Nd,
              ...Hd
            }), "perk" === (null === od || void 0 === od ? void 0 : od.slot) && (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsx)("p", {
                className: "LoadoutPickerNote",
                children: vd("loadoutShop:tierPicker", {
                  tier: od.tier,
                  points: od.points
                })
              }), (0, td.jsx)("div", {
                className: "LoadoutPerkGrid",
                children: OX(Nd, "perk").map((dd => (0, td.jsx)(tX, {
                  entry: dd,
                  buy: Hd.buy,
                  canAfford: qd(dd.item),
                  currency: qX(hd, dd.item)
                }, dd.key)))
              })]
            })]
          })]
        })
      })
    }

    function qX(dd, Od) {
      return Od.currency ? null === dd || void 0 === dd ? void 0 : dd[Od.currency] : void 0
    }

    function HX(dd) {
      let {
        points: Od,
        reached: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: Rd()("LoadoutStep", {
          LoadoutStepReached: md
        }),
        title: Wd("loadoutShop:pointsTooltip", {
          points: Od
        }),
        children: [(0, td.jsx)(Kd.c, {
          name: "arrow-right",
          className: "LoadoutStepArrow"
        }), (0, td.jsxs)("span", {
          children: [md && (0, td.jsx)(Kd.c, {
            name: "check"
          }), Wd("loadoutShop:points", {
            points: Od
          })]
        })]
      })
    }

    function yX(dd) {
      let {
        slot: Od,
        items: md,
        selected: Wd,
        onClick: Fd
      } = dd;
      const {
        t: hd
      } = (0, Xd.G)(), {
        config: vd
      } = Od, Qd = "gun" === vd.slot ? bX(OX(md, "gun")) : bX(OX(md, "perk")), od = "gun" === vd.slot ? hd("loadoutShop:gun") : hd("loadoutShop:tier", {
        tier: vd.tier
      });
      return (0, td.jsxs)("button", {
        type: "button",
        className: Rd()("LoadoutSlot", {
          LoadoutSlotSelected: Wd,
          LoadoutSlotEmpty: !Qd
        }),
        "data-pad-tab": !0,
        "data-pad-selected": Wd ? "true" : void 0,
        "aria-pressed": Wd,
        onClick: Fd,
        children: [(0, td.jsxs)("span", {
          className: "LoadoutSlotArt",
          children: ["gun" === (null === Qd || void 0 === Qd ? void 0 : Qd.meta.kind) && (0, td.jsx)(BF.c, {
            itemName: Qd.meta.gun,
            amount: 0,
            gunTransform: "none"
          }), "perk" === (null === Qd || void 0 === Qd ? void 0 : Qd.meta.kind) && (0, td.jsx)(Kd.c, {
            name: Qd.meta.icon
          }), !Qd && (0, td.jsx)(Kd.c, {
            name: "plus"
          })]
        }), (0, td.jsxs)("span", {
          className: "LoadoutSlotText",
          children: [(0, td.jsx)("small", {
            children: od
          }), (0, td.jsx)("b", {
            children: Qd ? Qd.key : hd("gun" === vd.slot ? "loadoutShop:noGun" : "loadoutShop:noPerk")
          })]
        })]
      })
    }

    function bX(dd) {
      var Od;
      return null !== (Od = dd.find((dd => dd.meta.equipped))) && void 0 !== Od ? Od : null
    }

    function TX(dd) {
      let {
        items: Od,
        buy: md,
        affordable: Wd,
        currencyAmounts: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Xd.G)(), Kd = OX(Od, "gun"), hd = bX(Kd), vd = {};
      for (const {
          meta: Xd
        }
        of Kd) {
        const dd = CR.e.get(`${Xd.gun}GunStats`),
          Od = RX(Xd.gun, dd);
        Od && (vd[Xd.gun] = Od)
      }
      const Qd = function(dd) {
          const Od = {},
            md = {};
          for (const Fd of FX) {
            Od[Fd] = -1 / 0, md[Fd] = 1 / 0;
            for (const Wd in dd) Od[Fd] = Math.max(Od[Fd], dd[Wd][Fd]), md[Fd] = Math.min(md[Fd], dd[Wd][Fd])
          }
          const Wd = {};
          for (const Fd in dd) {
            Wd[Fd] = {};
            for (const Rd of FX) Wd[Fd][Rd] = Math.max(.06, KX(Rd, dd[Fd][Rd], Od[Rd], md[Rd]))
          }
          return Wd
        }(vd),
        od = hd ? vd[hd.meta.gun] : void 0,
        [Nd, qd] = Rd("loadoutShop:comparing", {
          gun: "\x01"
        }).split("\x01");
      return (0, td.jsxs)(td.Fragment, {
        children: [hd && (0, td.jsxs)("p", {
          className: "LoadoutPickerNote",
          children: [Nd, (0, td.jsx)("b", {
            className: "LoadoutGold",
            children: hd.key
          }), qd]
        }), (0, td.jsx)("div", {
          className: "LoadoutGunGrid",
          children: Kd.map((dd => (0, td.jsx)(QX, {
            entry: dd,
            stats: vd[dd.meta.gun],
            bars: Qd[dd.meta.gun],
            compared: dd.meta.equipped ? void 0 : od,
            buy: md,
            canAfford: Wd(dd.item),
            currency: qX(Fd, dd.item)
          }, dd.key)))
        })]
      })
    }
    var pX = md(35563),
      YX = md(35559);

    function gX(dd) {
      let {
        currency: Od,
        info: md,
        smaller: Fd,
        show: Xd
      } = dd;
      const Kd = (0, Wd.useRef)(null);
      (0, YX.g)(Od, Kd, Xd);
      const hd = (0, YX.j)(Od, md.amount);
      return (0, td.jsxs)("div", {
        className: Rd()("ShopCurrencyDiv", {
          SmallText: Fd
        }),
        children: [(0, td.jsxs)("div", {
          className: "ShopCurrencyDetails",
          children: [(0, td.jsx)("div", {
            ref: Kd,
            className: "ShopCurrencyAmtIcon",
            style: {
              color: md.iconColour
            },
            children: (0, td.jsx)(hX, {
              iconName: md.icon
            })
          }), "\xa0", (0, pX.d)(hd, 6)]
        }), void 0 !== md.subtext && md.subtext.length > 0 && (0, td.jsx)("div", {
          className: "ShopCurrencySubtext",
          children: (0, td.jsx)(SF.d, {
            text: md.subtext
          })
        })]
      })
    }
    class wX {
      constructor(dd) {
        this.info = dd
      }
      static fromShopInfo(dd) {
        const Od = {};
        for (const md in dd) {
          const Wd = !0 === dd[md].redDot && !0 !== dd[md].forceRemoveRedDot;
          Od[md] = {
            redDot: Wd,
            items: {}
          };
          for (const Fd in dd[md].items) {
            const Wd = dd[md].items[Fd],
              Rd = !0 === Wd.redDot && !0 !== Wd.forceRemoveRedDot;
            Od[md].items[Fd] = {
              redDot: Rd
            }
          }
        }
        return new wX(Od)
      }
      anyCategoryHasRedDots() {
        for (const dd in this.info)
          if (this.categoryHasRedDot(dd)) return !0;
        return !1
      }
      doesCategoryExist(dd) {
        return !(0, sm.O)(this.info[dd])
      }
      categoryHasRedDot(dd) {
        return !0 === this.info[dd].redDot
      }
      updateCategoryRedDot(dd, Od) {
        this.info[dd].redDot = Od
      }
      doesItemExist(dd, Od) {
        return this.doesCategoryExist(dd) && !(0, sm.O)(this.info[dd].items[Od])
      }
      itemHasRedDot(dd, Od) {
        return !0 === this.info[dd].items[Od].redDot
      }
      updateItemRedDot(dd, Od, md) {
        this.info[dd].items[Od].redDot = md
      }
      shallowCopy() {
        return new wX(this.info)
      }
    }

    function aX(dd, Od) {
      return `${dd}\x1f${Od}`
    }

    function EX(dd, Od, md) {
      const Wd = wX.fromShopInfo(dd);
      for (const Kd in dd) {
        var Fd;
        if (md.doesCategoryExist(Kd)) {
          (null === (Fd = Od[Kd]) || void 0 === Fd ? void 0 : Fd.redDot) === dd[Kd].redDot && Wd.updateCategoryRedDot(Kd, md.categoryHasRedDot(Kd));
          for (const Fd in dd[Kd].items) {
            var Rd, Xd;
            md.doesItemExist(Kd, Fd) && ((null === (Rd = Od[Kd]) || void 0 === Rd || null === (Xd = Rd.items[Fd]) || void 0 === Xd ? void 0 : Xd.redDot) === dd[Kd].items[Fd].redDot && Wd.updateItemRedDot(Kd, Fd, md.itemHasRedDot(Kd, Fd)))
          }
        }
      }
      return Wd
    }

    function JX(dd, Od, md, Wd) {
      if (null !== Od && !Wd) return Od;
      if (null === md || !dd[md]) {
        const Od = nF(dd);
        return Od.length > 0 ? Od[0] : null
      }
      return md
    }

    function UX(dd, Od, md) {
      if ((0, sm.O)(dd) || 0 === Object.keys(dd).length) return {
        shopInfo: {},
        redDotInfo: wX.fromShopInfo({}),
        selectedCategoryKey: null
      };
      const {
        shopInfo: Wd,
        autoSelectCategory: Fd
      } = function(dd) {
        const Od = Bd.siteUsedData[Bd.siteUsed].adConfig.showRewardedAds,
          md = {};
        let Wd = null;
        for (const Fd in dd) {
          const Rd = dd[Fd],
            Xd = {};
          let Kd = !1;
          for (const dd in Rd.items) {
            const md = Rd.items[dd];
            (0, JF.f)(md, Od) && (Xd[dd] = md, Kd = !0)
          }
          Kd && (md[Fd] = {
            ...Rd,
            items: Xd
          }, !0 === Rd.autoSelectCategory && (Wd = Fd))
        }
        return {
          shopInfo: md,
          autoSelectCategory: Wd
        }
      }(dd);
      return {
        shopInfo: Wd,
        redDotInfo: EX(Wd, Od.shopInfo, Od.redDotInfo),
        selectedCategoryKey: JX(Wd, Fd, Od.selectedCategoryKey, md)
      }
    }

    function xX(dd, Od, md, Wd, Fd) {
      const Rd = {},
        Xd = (dd, Od, Xd, Kd) => {
          var hd, vd;
          const Qd = aX(dd, Od),
            td = null !== (hd = md[Qd]) && void 0 !== hd ? hd : md[Od];
          if (null !== (vd = Kd.userInput) && void 0 !== vd && vd.type) switch (Kd.userInput.type) {
            case "dropdown": {
              var od;
              const dd = !td || !Kd.userInput.dropdownOptions.some((dd => (0, JF.c)(dd) === td)),
                Od = Kd.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Xd || void 0 === Xd || null === (od = Xd.userInput) || void 0 === od ? void 0 : od.type) || JSON.stringify(Xd.userInput.dropdownOptions) !== JSON.stringify(Kd.userInput.dropdownOptions)),
                md = Kd.userInput,
                Wd = !(0, sm.O)(md.initialValue) && md.dropdownOptions.some((dd => (0, JF.c)(dd) === md.initialValue));
              var Nd;
              if (dd || Od)
                if (Wd) Rd[Qd] = null !== (Nd = Kd.userInput.initialValue) && void 0 !== Nd ? Nd : null;
                else Kd.userInput.dropdownOptions.length > 0 ? Rd[Qd] = (0, JF.c)(Kd.userInput.dropdownOptions[0]) : Rd[Qd] = null;
              else Rd[Qd] = td;
              return
            }
            case "text":
            case "number":
              var qd, Hd, yd;
              if ((null === Xd || void 0 === Xd ? void 0 : Xd.userInput) !== Kd.userInput) Rd[Qd] = null !== (qd = null !== (Hd = Kd.userInput.initialValue) && void 0 !== Hd ? Hd : td) && void 0 !== qd ? qd : "";
              else Rd[Qd] = null !== (yd = null !== td && void 0 !== td ? td : Kd.userInput.initialValue) && void 0 !== yd ? yd : "";
              return;
            case "color":
              var bd, Td, pd;
              if ((null === Xd || void 0 === Xd ? void 0 : Xd.userInput) !== Kd.userInput) Rd[Qd] = null !== (bd = null !== (Td = Kd.userInput.initialValue) && void 0 !== Td ? Td : td) && void 0 !== bd ? bd : "#000000";
              else Rd[Qd] = null !== (pd = null !== td && void 0 !== td ? td : Kd.userInput.initialValue) && void 0 !== pd ? pd : "#000000";
              return;
            case "player": {
              const dd = (0, JF.d)(Wd, Fd, Kd.userInput);
              return void(td && dd.includes(td) ? Rd[Qd] = td : Rd[Qd] = dd.length > 0 ? dd[0] : null)
            }
          }
        };
      for (const hd in dd)
        for (const md in dd[hd].items) {
          var Kd;
          const Wd = dd[hd].items[md];
          Xd(hd, md, null === (Kd = Od[hd]) || void 0 === Kd ? void 0 : Kd.items[md], Wd)
        }
      return Rd
    }

    function BX(dd, Od) {
      return !(0, sm.O)(Od) && !(0, sm.O)(dd) && Od in dd
    }
    const SX = (0, Wd.memo)((function(dd) {
      var Od, md;
      let {
        show: Fd
      } = dd;
      const Xd = (0, kO.f)("players", rX),
        Kd = (0, kO.f)("players", GX),
        Qd = (0, rF.d)(),
        [Nd, qd] = (0, Wd.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: wX.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        yd = (0, Wd.useRef)(""),
        bd = (0, Wd.useRef)(null),
        pd = (0, Wd.useRef)(null),
        Yd = (0, Wd.useRef)(0),
        gd = (0, Wd.useRef)(void 0),
        wd = (0, Wd.useRef)(null),
        Ed = (0, Wd.useRef)(Nd),
        Ud = (0, Wd.useRef)(null),
        xd = Nd.redDotInfo.anyCategoryHasRedDots(),
        [Bd, Sd] = (0, Wd.useState)(null),
        sd = (0, Wd.useRef)(!1);
      let ud = !1,
        Vd = 0,
        Ad = 0;
      if (Nd.currencyAmounts) {
        for (const dd in Nd.currencyAmounts) {
          var rd;
          const Od = Nd.currencyAmounts[dd];
          Od.hidden || (Vd++, (null === (rd = Od.subtext) || void 0 === rd ? void 0 : rd.length) > 0 && Ad++)
        }
        ud = Vd + Ad > 4
      }(0, Wd.useEffect)((() => {
        um.j.lQ("showShopIconRedDot", xd, !0)
      }), [xd]), (0, Wd.useEffect)((() => {
        Td.gameBridge.send("setShopOpen", Fd), Fd || (clearTimeout(gd.current), qd((dd => dd.awaitingPurchase ? {
          ...dd,
          awaitingPurchase: !1
        } : dd)))
      }), [Fd]), (0, Wd.useEffect)((() => () => {
        Td.gameBridge.send("setShopOpen", !1), clearTimeout(gd.current)
      }), []), (0, Wd.useEffect)((() => {
        Ed.current = Nd
      }), [Nd]), (0, Wd.useEffect)((() => {
        if (null === Bd) return;
        return (0, iF.d)("pointerdown", (dd => {
          const Od = dd.target;
          null !== Od && void 0 !== Od && Od.closest(".ShopItem") || Sd(null)
        }))
      }), [Bd]);
      const Gd = dd => {
          qd((Od => ({
            ...Od,
            ...dd
          })))
        },
        nd = dd => {
          var Od;
          clearTimeout(null === (Od = Nd.onBoughtInfo) || void 0 === Od ? void 0 : Od.timeout);
          const md = setTimeout((() => {
            Gd({
              onBoughtInfo: null
            })
          }), 3e3);
          yd.current = dd, Gd({
            onBoughtInfo: {
              text: dd,
              timeout: md,
              categoryKey: bd.current
            }
          })
        },
        Pd = dd => {
          const Od = UX(dd, Nd, !0);
          return 0 === Object.keys(Od.shopInfo).length && Jd.e.set({
            openEverythingMenuName: null
          }), {
            ...Od,
            userInputsPerItem: xX(Od.shopInfo, Nd.shopInfo, Nd.userInputsPerItem, Xd, Kd)
          }
        },
        zd = () => {
          var dd;
          return null !== (dd = Ud.current) && void 0 !== dd ? dd : Nd
        },
        cd = dd => {
          const Od = zd(),
            md = UX(dd, Od, !1);
          Ud.current = md;
          const Wd = md.redDotInfo.anyCategoryHasRedDots();
          Wd !== Od.redDotInfo.anyCategoryHasRedDots() && um.j.lQ("showShopIconRedDot", Wd, !0)
        },
        jd = () => {
          const dd = Ud.current;
          null !== dd && (Ud.current = null, qd((Od => {
            const md = xX(dd.shopInfo, Od.shopInfo, Od.userInputsPerItem, Xd, Kd);
            return {
              ...Od,
              ...dd,
              userInputsPerItem: md
            }
          })))
        },
        Dd = (dd, Od, md) => {
          const Wd = Nd.selectedCategoryKey,
            Fd = aX(Wd, dd),
            Rd = null !== md && void 0 !== md ? md : Nd.userInputsPerItem[Fd],
            Xd = {
              categoryKey: Wd,
              itemKey: dd,
              userInput: Rd
            };
          if (bd.current = Wd, Od.isRewardedAd) {
            if (Date.now() - Yd.current < 5e3) return;
            (0, uO.kb)((() => {
              var md, Wd, Rd;
              console.log("bought rewarded ad");
              const Kd = Ud.current,
                hd = (null !== Kd && void 0 !== Kd ? Kd : Ed.current).shopInfo,
                vd = Xd.categoryKey ? null === (md = hd[Xd.categoryKey]) || void 0 === md ? void 0 : md.items[dd] : null;
              if (!vd || !vd.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              if (!((null === (Wd = Od.userInput) || void 0 === Wd ? void 0 : Wd.type) === (null === vd || void 0 === vd || null === (Rd = vd.userInput) || void 0 === Rd ? void 0 : Rd.type))) return void console.warn("Shop item input type changed, early out");
              const {
                shopInfo: Qd,
                userInputsPerItem: td
              } = Ed.current, od = ld.current;
              Xd.userInput = (null === Kd ? td : xX(Kd.shopInfo, Qd, td, od.playerIds, od.localPlayerId))[Fd], Td.gameBridge.send("buyShopItem", Xd), Od.onBoughtMessage && nd(Od.onBoughtMessage)
            })), Yd.current = Date.now()
          } else {
            Td.gameBridge.send("buyShopItem", Xd), Gd({
              awaitingPurchase: !0
            }), clearTimeout(gd.current), gd.current = setTimeout((() => {
              wd.current = null, Gd({
                awaitingPurchase: !1
              })
            }), 1e3);
            const dd = (0, JF.b)(Od, Rd);
            if (wd.current = null, !isNaN(dd) && BX(Nd.currencyAmounts, Od.currency)) {
              0 !== dd && (wd.current = {
                currency: Od.currency,
                amountBefore: Nd.currencyAmounts[Od.currency].amount
              });
              const md = {
                ...Nd.currencyAmounts
              };
              md[Od.currency].amount -= dd, Gd({
                currencyAmounts: md
              })
            }
            Od.onBoughtMessage && nd(Od.onBoughtMessage)
          }
        },
        ed = (dd, Od) => {
          if (null === Od || !dd.shopInfo[Od]) return dd;
          let md = dd.redDotInfo;
          return md.categoryHasRedDot(Od) && (md.updateCategoryRedDot(Od, !1), md = md.shallowCopy()), {
            ...dd,
            selectedCategoryKey: Od,
            redDotInfo: md
          }
        },
        Id = dd => {
          jd(), qd((Od => ed(Od, dd)))
        };
      (0, Rm.f)(AF.g, (() => {
        jd(), qd((dd => {
          const Od = (0, AF.i)(nF(dd.shopInfo), dd.selectedCategoryKey, (Od => (0, AF.e)(dd.shopInfo[Od].items)));
          return Od === dd.selectedCategoryKey ? dd : ed(dd, Od)
        }))
      })), (0, Rm.f)("showShopFromServer", (dd => {
        let {
          toggle: Od,
          AO: md
        } = dd;
        const Wd = 0 !== Object.keys(zd().shopInfo).length;
        md && Id(md), !Wd || Od && Fd ? Jd.e.set({
          openEverythingMenuName: null
        }) : Jd.e.set({
          openEverythingMenuName: VO.m.SHOP
        })
      })), (0, Rm.f)("closeShopOnDamaged", (() => {
        Fd && Jd.e.set({
          openEverythingMenuName: null
        })
      })), (0, Rm.f)("overShopInfo", (dd => {
        nd(dd)
      })), (0, Hd.g)("currencyAmounts", (dd => {
        var Od;
        const md = wd.current;
        md && (null === dd || void 0 === dd || null === (Od = dd[md.currency]) || void 0 === Od ? void 0 : Od.amount) === md.amountBefore ? Gd({
          currencyAmounts: dd
        }) : (wd.current = null, Gd({
          currencyAmounts: dd,
          awaitingPurchase: !1
        }))
      })), (0, Hd.g)("shopInfo", (dd => {
        Fd ? Gd({
          ...Pd(dd),
          awaitingPurchase: !1
        }) : cd(dd)
      })), (0, Wd.useLayoutEffect)((() => {
        Fd && jd()
      }), [Fd]);
      const ld = (0, Wd.useRef)({
        playerIds: Xd,
        localPlayerId: Kd
      });
      (0, Wd.useEffect)((() => {
        ld.current.playerIds === Xd && ld.current.localPlayerId === Kd || (ld.current = {
          playerIds: Xd,
          localPlayerId: Kd
        }, Fd ? qd((dd => {
          const Od = Pd(dd.shopInfo);
          return {
            ...dd,
            ...Od
          }
        })) : cd(zd().shopInfo))
      }), [Xd, Kd]);
      const Cd = Nd.selectedCategoryKey,
        Zd = (dd, Od) => {
          var md, Wd;
          return (isNaN(Od) || (0, sm.O)(dd.currency) || BX(Nd.currencyAmounts, dd.currency) && Od <= Nd.currencyAmounts[dd.currency].amount) && (null === (md = dd.canBuy) || void 0 === md || md) && !(null !== (Wd = dd.hidden) && void 0 !== Wd && Wd)
        },
        kd = (dd, Od) => {
          var md, Wd, Fd;
          const Xd = aX(Cd, dd),
            Kd = Nd.shopInfo[Cd].items[dd],
            Qd = Nd.userInputsPerItem[Xd],
            od = (0, JF.b)(Kd, Qd),
            qd = Zd(Kd, od),
            Hd = Kd.enchant,
            yd = Hd ? (0, Ld.ib)(null !== (md = Kd.customTitle) && void 0 !== md ? md : dd, {
              colour: Ld.ab[Hd.tier]
            }) : null !== (Wd = Kd.customTitle) && void 0 !== Wd ? Wd : dd,
            bd = Od => {
              const md = null !== Od && void 0 !== Od ? Od : Qd,
                Wd = void 0 !== Od ? (0, JF.b)(Kd, Od) : od;
              Zd(Kd, Wd) && null !== md && Dd(dd, Kd, Od);
              let Fd = Nd.redDotInfo;
              Fd.itemHasRedDot(Cd, dd) && (Fd.updateItemRedDot(Cd, dd, !1), Fd = Fd.shallowCopy()), Gd({
                redDotInfo: Fd
              })
            };
          return (0, td.jsxs)("div", {
            className: Rd()("ShopItem", {
              ShopItemNoInput: !Kd.userInput,
              ShopItemNoInputCanBuy: !Kd.userInput && qd,
              ShopItemNoInputSelected: Kd.isSelected,
              ShopItemEnchant: !!Hd
            }),
            "data-pad-focusable": !Kd.userInput || void 0,
            "data-pad-unavailable": !Kd.userInput && !qd || void 0,
            "data-pad-repeat": null !== (Fd = (0, AF.b)(Kd)) && void 0 !== Fd ? Fd : void 0,
            "data-pad-repeat-wait": Nd.awaitingPurchase || void 0,
            onClick: () => {
              if (Hd && sd.current) {
                if (Bd !== Xd) return void Sd(Xd);
                Sd(null)
              }
              Kd.userInput || bd()
            },
            onPointerDown: dd => {
              Hd && (sd.current = (0, xF.s)(dd))
            },
            onPointerEnter: dd => {
              Hd && !(0, xF.s)(dd) && Sd(Xd)
            },
            onPointerLeave: dd => {
              Hd && !(0, xF.s)(dd) && Sd((dd => dd === Xd ? null : dd))
            },
            style: {
              zIndex: Object.keys(Nd.shopInfo[Cd].items).length - Od
            },
            children: [Nd.redDotInfo.itemHasRedDot(Cd, dd) && (0, td.jsx)(hd.e, {
              top: "-6px",
              right: "-6px"
            }), Kd.badge && (0, td.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, td.jsx)("div", {
                className: Rd()("ShopBadgeMain", Kd.badge.type),
                children: (0, td.jsx)(SF.d, {
                  text: Kd.badge.text
                })
              })
            }), (0, td.jsx)("div", {
              className: "ShopItemLeft",
              children: Kd.image && (0, td.jsx)(sX, {
                item: Kd,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, td.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, td.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, td.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, td.jsx)(SF.d, {
                    text: yd
                  })
                }), (0, td.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, td.jsx)(SF.d, {
                    text: Kd.description
                  })
                })]
              }), Kd.userInput && (0, td.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: dd => {
                  dd.stopPropagation()
                },
                children: [(0, td.jsx)(iX, {
                  item: Kd,
                  currInput: Qd,
                  updateInput: Od => {
                    ((dd, Od, md) => {
                      const Wd = aX(dd, Od),
                        Fd = {
                          ...Nd.userInputsPerItem
                        };
                      Fd[Wd] = md, Gd({
                        userInputsPerItem: Fd
                      })
                    })(Cd, dd, Od)
                  },
                  onSubmit: dd => {
                    bd(dd)
                  }
                }), ("dropdown" !== Kd.userInput.type || !Kd.userInput.autoSubmit) && (0, td.jsx)(vd.g, {
                  className: "ItemCostButton",
                  disabled: !qd && null !== Qd,
                  onClick: () => {
                    bd()
                  },
                  children: (0, td.jsx)(VX, {
                    item: Kd,
                    cost: od,
                    currencyAmounts: Nd.currencyAmounts
                  })
                })]
              })]
            }), !Kd.userInput && (0, td.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, td.jsx)(VX, {
                item: Kd,
                cost: od,
                currencyAmounts: Nd.currencyAmounts
              })
            }), Hd && Bd === Xd && (0, td.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, td.jsx)(SF.d, {
                text: yd
              }), (0, td.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, td.jsx)(SF.d, {
                  text: (0, UF.c)("", Hd.enchantments, Hd.enchantmentData)
                })
              })]
            })]
          }, Xd)
        },
        fd = function(dd) {
          for (const Od in dd)
            if (dd[Od].smp) return !0;
          return !1
        }(Nd.shopInfo),
        Md = WR(Nd.shopInfo, Cd),
        dO = function(dd, Od) {
          var md;
          return !!Od && !(null === (md = dd[Od]) || void 0 === md || !md.loadout)
        }(Nd.shopInfo, Cd),
        OO = (0, td.jsx)("div", {
          className: Rd()("ShopOnBoughtInfo", {
            ShopOnBoughtInfoShow: null !== Nd.onBoughtInfo
          }),
          children: (0, td.jsx)(SF.d, {
            text: yd.current
          })
        });
      return (0, td.jsx)(aF.e, {
        className: "Menu ShopBody",
        show: Fd,
        children: 0 !== Object.keys(Nd.shopInfo).length && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, td.jsx)(od, {
              items: dX(Nd.shopInfo).map((dd => {
                var Od;
                return dd === kR ? {
                  id: dd,
                  title: "loadoutShop:title",
                  redDot: !1
                } : {
                  id: dd,
                  title: null !== (Od = Nd.shopInfo[dd].customTitle) && void 0 !== Od ? Od : dd,
                  redDot: Nd.redDotInfo.categoryHasRedDot(dd)
                }
              })),
              link: Qd ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, GF.g)({
                    page: (0, GF.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: dO ? kR : Cd,
              onClick: dd => {
                dd !== kR ? Id(dd) : dO || Id(fR(Nd.shopInfo)[0].categoryKey)
              },
              padStartsOnTab: (0, AF.c)(Cd)
            }), (0, td.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Nd.currencyAmounts && Object.keys(Nd.currencyAmounts).map((dd => {
                const Od = Nd.currencyAmounts[dd];
                return Od.hidden ? null : (0, td.jsx)(gX, {
                  currency: dd,
                  info: Od,
                  smaller: ud,
                  show: Fd
                }, dd)
              }))
            })]
          }), (0, td.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [fd && (0, td.jsx)(lR, {
              show: Fd,
              shopInfo: Nd.shopInfo,
              selectedCategoryKey: Cd,
              buy: (dd, Od, md) => {
                Dd(dd, Od, md)
              },
              canAfford: Zd,
              message: Nd.onBoughtInfo
            }), dO && Fd && (0, td.jsxs)(td.Fragment, {
              children: [OO, (0, td.jsx)(NX, {
                shopInfo: Nd.shopInfo,
                selectedCategoryKey: Cd,
                selectCategory: Id,
                buy: Dd,
                canAfford: Zd,
                currencyAmounts: Nd.currencyAmounts
              })]
            }), null === Md && !dO && (0, td.jsxs)(td.Fragment, {
              children: [OO, (0, td.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, td.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Od = Nd.shopInfo[Cd]) || void 0 === Od ? void 0 : Od.description) && (0, td.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, td.jsx)(SF.d, {
                      text: Nd.shopInfo[Cd].description
                    })
                  }), Fd && (0, td.jsx)("div", {
                    className: "ShopItems",
                    ref: pd,
                    "data-pad-initial-area": !0,
                    children: nF(null === (md = Nd.shopInfo[Cd]) || void 0 === md ? void 0 : md.items).map(((dd, Od) => kd(dd, Od)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function sX(dd) {
      let {
        item: Od,
        minWidth: md,
        minHeight: Wd
      } = dd;
      const {
        image: Fd,
        schematicId: Rd,
        imageColour: Xd
      } = Od;
      if (Rd) return (0, td.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${md}rem`,
          height: `${Wd}rem`
        },
        children: (0, td.jsx)(sF.e, {
          game: {
            schematicId: Rd
          }
        })
      });
      var hd, vd;
      if ((0, BF.f)(Fd)) return (0, td.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${md}rem`,
          height: "0",
          minHeight: `${Wd}rem`
        },
        children: (0, td.jsx)(BF.c, {
          itemName: Fd,
          amount: null !== (hd = Od.amount) && void 0 !== hd ? hd : 0,
          amountFontSize: Wd / 4 + "rem",
          enchantmentTier: null === (vd = Od.enchant) || void 0 === vd ? void 0 : vd.tier
        })
      });
      const Qd = Fd.slice(-4);
      return ".jpg" === Qd || ".png" === Qd ? (0, td.jsx)(uX, {
        image: Fd,
        minWidth: md
      }) : (0, td.jsx)(Kd.c, {
        name: Fd,
        className: "SelectedItemImage",
        style: {
          color: Xd
        }
      })
    }

    function uX(dd) {
      let {
        image: Od,
        minWidth: md
      } = dd;
      const {
        gameNameWithVariation: Wd
      } = (0, kO.h)("connectedGame"), Fd = Od.endsWith(".jpg");
      return (0, td.jsx)("img", {
        className: Rd()({
          ShopPixelImage: !Fd
        }),
        style: {
          width: `${Fd?1.6*md:md}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Ld.Gb)(Wd)}/${Od}`,
        alt: Od,
        draggable: !1
      })
    }

    function VX(dd) {
      let {
        item: Od,
        cost: md,
        currencyAmounts: Wd
      } = dd;
      const Fd = !isNaN(md) && 0 !== md && BX(Wd, Od.currency);
      let Rd = null;
      return Od.buyButtonText ? Rd = Od.buyButtonText : Fd ? (Rd = md, Od.sell && (Rd = -1 * md), Rd = Rd.toString()) : 0 === md ? Rd = "Free" : Od.isRewardedAd && (Rd = "Watch ad"), (0, sm.O)(Rd) || " " === Rd ? null : (0, td.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Fd && (0, td.jsx)("div", {
          style: {
            color: Wd[Od.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, td.jsx)(hX, {
            iconName: Wd[Od.currency].icon
          })
        }), (0, td.jsx)("div", {
          className: "BuyItemCost",
          children: (0, td.jsx)(SF.d, {
            text: Rd
          })
        })]
      })
    }

    function iX(dd) {
      let {
        item: Od,
        currInput: md,
        updateInput: Fd,
        onSubmit: Rd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)(), hd = (0, Wd.useRef)(null);
      if ((0, Wd.useEffect)((() => {
          const dd = hd.current;
          dd && dd.value !== md && document.activeElement !== dd && (dd.value = null !== md && void 0 !== md ? md : "")
        }), [md]), !Od.userInput) return null;
      let vd = Od.userInput;
      if (bd.featureFlags.sanitizeShopInput && "text" === Od.userInput.type && (vd = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === vd.type || "number" === vd.type) {
        var Qd, od;
        console.assert(void 0 !== md, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Od)}`);
        const dd = "text" === vd.type && vd.wordCharsOnly;
        return (0, td.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, td.jsx)(gd.c, {
            className: "ShopItemUserInputText",
            placeholderText: Kd(vd.placeholderText),
            defaultValue: md,
            domRef: hd,
            onValueChange: (Od, md) => {
              !0 === dd && (Od = (0, VF.fb)(Od)), hd.current.value = Od, Fd(Od)
            },
            onEnter: Rd,
            type: vd.type
          }, (null !== (Qd = vd.initialValue) && void 0 !== Qd ? Qd : "") + (null !== (od = vd.placeholderText) && void 0 !== od ? od : ""))
        })
      }
      if ("dropdown" === vd.type) {
        console.assert(void 0 !== md, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Od)}`);
        const dd = vd.autoSubmit;
        return (0, td.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, td.jsx)(CO.e, {
            options: vd.dropdownOptions.map((dd => (0, JF.c)(dd))),
            value: md,
            onChange: Od => {
              let {
                value: md
              } = Od;
              Fd(md), dd && Rd(md)
            }
          })
        })
      }
      return "player" === vd.type ? (0, td.jsx)(AX, {
        userInput: vd,
        currInput: md,
        updateInput: Fd
      }) : "color" === vd.type ? (0, td.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, td.jsx)("input", {
          type: "color",
          value: md,
          onChange: dd => {
            Fd(dd.target.value)
          }
        })
      }) : null
    }

    function AX(dd) {
      let {
        userInput: Od,
        currInput: md,
        updateInput: Wd
      } = dd;
      const Fd = (0, kO.h)("players"),
        Rd = (0, kO.h)("hiddenPlayerNames"),
        Xd = (0, JF.d)(Fd.ids, Fd.localId, Od);
      return (0, td.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, td.jsx)(CO.e, {
          options: Xd.map((dd => {
            const {
              name: Od
            } = Fd.byId[dd];
            return {
              value: dd,
              label: null === Od ? "" : (0, uF.e)(Od, Rd)
            }
          })),
          value: md,
          onChange: dd => {
            let {
              value: Od
            } = dd;
            Wd(Od)
          }
        })
      })
    }

    function rX(dd) {
      let {
        ids: Od
      } = dd;
      return Od
    }

    function GX(dd) {
      let {
        localId: Od
      } = dd;
      return Od
    }
    var nX = md(1765);
    const LX = (0, md(1518).l)((dd => dd.PadLobbyShortcuts)),
      PX = (0, Wd.lazy)((() => Promise.resolve().then((() => md(5329))).then((dd => ({
        default: dd.Lobbyleaderboard
      }))))),
      zX = (0, Wd.lazy)((() => md.e(254).then((() => md(43026))).then((dd => ({
        default: dd.LobbyManageView
      })))));

    function cX(dd) {
      let {
        show: Od
      } = dd;
      return Od ? (0, td.jsx)(jX, {}) : null
    }

    function jX() {
      const dd = (0, rF.d)();
      return (0, td.jsxs)(td.Fragment, {
        children: [(0, td.jsx)(LX, {}), (0, td.jsxs)(Wd.Suspense, {
          fallback: (0, td.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, td.jsx)(wd.c, {})
          }),
          children: [dd && (0, td.jsx)(zX, {
            leaderboard: (0, td.jsx)(PX, {})
          }), !dd && (0, td.jsx)(PX, {})]
        })]
      })
    }
    var DX = md(1679),
      eX = md(3284),
      IX = md(1890),
      lX = md(4164),
      CX = md(3758),
      ZX = md(1620),
      kX = md(1580),
      fX = md(4096),
      MX = md(4107),
      dK = md(4240),
      OK = md(3265);
    const mK = "storeRecentGiftRecipients",
      WK = new Map;

    function FK() {
      try {
        const dd = Hm.k.getItem(mK);
        return Array.isArray(dd) ? dd.filter((dd => "string" === typeof(null === dd || void 0 === dd ? void 0 : dd.name) && dd.name.length > 0)).map((dd => ({
          name: dd.name,
          cosmetics: dd.cosmetics && "object" === typeof dd.cosmetics ? dd.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function RK(dd, Od) {
      var md;
      const [Fd, Rd] = (0, Wd.useState)(""), [Xd, Kd] = (0, Wd.useState)("search"), [hd, vd] = (0, Wd.useState)(null), [Qd, td] = (0, Wd.useState)(null), od = (0, Wd.useRef)(null), Nd = (0, Wd.useRef)(null);
      (0, Wd.useEffect)((() => () => {
        od.current && clearTimeout(od.current)
      }), []), (0, Wd.useEffect)((() => {
        Od || yd()
      }), [Od]);
      const qd = null !== (md = null === hd || void 0 === hd ? void 0 : hd.name) && void 0 !== md ? md : null;

      function Hd() {
        od.current && (clearTimeout(od.current), od.current = null)
      }

      function yd() {
        Hd(), Rd(""), Kd("search"), vd(null)
      }(0, Wd.useEffect)((() => {
        if (null === qd || dd === Sd.NULL_USER_CONTEXT) return;
        const Od = qd.toLowerCase();
        if (Od === dd.getPlayerName().toLowerCase()) return void td({
          name: qd,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const md = WK.get(Od);
        if (md) return void td({
          name: qd,
          result: md
        });
        let Wd = !1;
        return async function(dd, Od) {
          try {
            const md = await (0, Sd.postJsonWithMetricsCookiesAndJsonResponse)(`${sO.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Od
            }, {
              retries: 1
            }, dd.getMetricsCookies());
            if ("boolean" !== typeof(null === md || void 0 === md ? void 0 : md.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(md)}`);
            return md
          } catch (md) {
            return console.error("Failed to look up gift recipient:", md), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(dd, qd).catch((dd => (console.error("Gift recipient lookup failed:", dd), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((dd => {
          !0 !== dd.giftRecipientFound && "store:giftRecipientLookupFailed" === dd.giftRecipientError || WK.set(Od, dd), Wd || td({
            name: qd,
            result: dd
          })
        })), () => {
          Wd = !0
        }
      }), [qd, dd]);
      const bd = (0, Wd.useMemo)((() => {
        const dd = Fd.trim();
        if (!dd) return {
          status: "none"
        };
        if (!hd || hd.name !== dd || (null === Qd || void 0 === Qd ? void 0 : Qd.name) !== hd.name) return {
          status: "pending",
          name: dd
        };
        const Od = Qd.result;
        return !1 === Od.giftRecipientFound ? {
          status: "error",
          name: hd.name,
          error: Od.giftRecipientError
        } : {
          status: "found",
          name: Od.giftRecipientName,
          ownedPacks: Od.giftRecipientOwnedPacks,
          hasSuperRank: Od.giftRecipientHasSuperRank,
          isSubscriber: Od.giftRecipientIsSubscriber
        }
      }), [Fd, hd, Qd]);
      (0, Wd.useEffect)((() => {
        "found" === bd.status && "typed" === (null === hd || void 0 === hd ? void 0 : hd.source) && Nd.current !== bd.name && (Nd.current = bd.name, (0, TO.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [bd, hd]);
      const Td = (null === Qd || void 0 === Qd ? void 0 : Qd.name) === (null === hd || void 0 === hd ? void 0 : hd.name) ? null === Qd || void 0 === Qd ? void 0 : Qd.result : null,
        pd = !0 === (null === Td || void 0 === Td ? void 0 : Td.giftRecipientFound) ? Td.giftRecipientCosmetics : null;
      return {
        query: Fd,
        via: Xd,
        recipient: bd,
        recipientCosmetics: pd,
        type: function(dd) {
          Rd(dd), Kd("search"), Hd();
          const Od = dd.trim();
          Od ? od.current = setTimeout((() => {
            vd({
              name: Od,
              source: "typed"
            })
          }), 400) : vd(null)
        },
        choose: function(dd, Od) {
          Hd(), Rd(dd), Kd("typed" === Od ? "search" : "prefilled" === Od ? "prefilled" : "suggestion"), vd({
            name: dd,
            source: Od
          }), "typed" !== Od && "prefilled" !== Od && (0, TO.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Od
          })
        },
        clear: yd,
        recordGift: function(dd, Od) {
          ! function(dd) {
            WK.delete(dd.toLowerCase())
          }(dd), td((md => {
            if (!md || md.name.toLowerCase() !== dd.toLowerCase() || !0 !== md.result.giftRecipientFound || "superRank" === Od) return md;
            const Wd = md.result.giftRecipientOwnedPacks;
            return {
              ...md,
              result: {
                ...md.result,
                giftRecipientOwnedPacks: Wd.includes(Od) ? Wd : [...Wd, Od]
              }
            }
          }))
        }
      }
    }
    var XK = md(3258),
      KK = md(5341),
      hK = md(285),
      vK = md(3984);
    const QK = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var tK = md(3198),
      oK = md(689),
      NK = md(3307),
      qK = md(3662);

    function HK(dd) {
      let {
        cosmetics: Od
      } = dd;
      return (0, td.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, td.jsx)(NK.e, {
          cosmetics: Od
        })
      })
    }

    function yK(dd, Od) {
      var md, Wd;
      const Fd = null !== (md = dd.friend) && void 0 !== md ? md : {
        isError: !1,
        name: dd.name,
        ranks: [],
        cosmetics: null !== (Wd = dd.cosmetics) && void 0 !== Wd ? Wd : {},
        nameColour: oK.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return Od ? {
        ...Fd,
        cosmetics: Od
      } : Fd
    }

    function bK(dd) {
      let {
        pending: Od
      } = dd;
      return (0, td.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Od && (0, td.jsx)(wd.c, {})
      })
    }

    function TK(dd) {
      var Od;
      let {
        selfName: md,
        giftRecipient: Fd,
        suggestionsVersion: hd,
        pulseSignal: Qd,
        disabled: od
      } = dd;
      const {
        t: Nd
      } = (0, Xd.G)(), qd = (0, Zd.h)(), Hd = (0, Wd.useRef)(null), yd = (0, Wd.useRef)(null), {
        query: Td,
        via: pd,
        recipient: Yd,
        recipientCosmetics: wd
      } = Fd, Ed = (0, OK.j)(Td), Jd = (0, Wd.useMemo)((() => {
        const dd = bd.featureFlags.useSocialFeatures ? qd.friends.filter((dd => !dd.isError)) : [];
        return (0, OK.f)({
          onlineFriends: (0, Zd.e)(dd),
          recentRecipients: FK(),
          friends: dd,
          selfName: md,
          max: 8
        })
      }), [qd.friends, md, hd]), Ud = Td.trim().toLowerCase(), xd = "search" !== pd && Ud ? Jd.find((dd => dd.name.toLowerCase() === Ud)) : void 0, Bd = xd && "prefilled" === pd ? [xd, ...Jd.filter((dd => dd !== xd))] : Jd, Sd = "" !== Ud && !xd, sd = Sd ? Td : "", ud = Bd.length > 0;
      (0, Wd.useEffect)((() => {
        Hd.current && Hd.current.value !== sd && (Hd.current.value = sd)
      }), [sd]), (0, Wd.useEffect)((() => {
        Hd.current && (Hd.current.disabled = od)
      }), [od, Qd]);
      const Vd = (0, Wd.useRef)(0);

      function rd() {
        "self" !== Ed && (0, TO.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Fd.clear()
      }

      function Gd(dd) {
        var Od, md;
        if (od) return;
        if (" " === dd.key || "Enter" === dd.key) return dd.preventDefault(), void dd.currentTarget.click();
        const Wd = Array.from(null !== (Od = null === (md = yd.current) || void 0 === md ? void 0 : md.querySelectorAll("[role=radio]")) && void 0 !== Od ? Od : []),
          Fd = Wd.indexOf(dd.currentTarget);
        let Rd;
        "ArrowRight" === dd.key || "ArrowDown" === dd.key ? Rd = Wd[(Fd + 1) % Wd.length] : "ArrowLeft" === dd.key || "ArrowUp" === dd.key ? Rd = Wd[(Fd - 1 + Wd.length) % Wd.length] : "Home" === dd.key ? Rd = Wd[0] : "End" === dd.key && (Rd = Wd[Wd.length - 1]), Rd && (dd.preventDefault(), Rd.focus(), Rd.click())
      }(0, Wd.useEffect)((() => {
        var dd;
        Qd > Vd.current && !od && (Vd.current = Qd, null === (dd = Hd.current) || void 0 === dd || dd.focus())
      }), [Qd, od]);
      const nd = "self" === Ed,
        Ld = null !== (Od = null === xd || void 0 === xd ? void 0 : xd.name) && void 0 !== Od ? Od : null,
        Pd = "error" === Yd.status ? Yd.error : null,
        zd = "store:giftRecipientLookupFailed" === Pd;
      return (0, td.jsxs)("div", {
        className: Rd()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: od,
          StoreRecipientStripNoChips: !ud
        }),
        children: [(0, td.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Nd("store:buyingFor")
        }), (0, td.jsxs)("div", {
          ref: yd,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Nd("store:whoIsItFor"),
          children: [(0, td.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": nd,
            tabIndex: od || !nd && null !== Ld ? -1 : 0,
            className: Rd()("StoreRecipientMe", {
              StoreRecipientChecked: nd
            }),
            onClick: () => {
              od || rd()
            },
            onKeyDown: Gd,
            children: [(0, td.jsx)(Kd.c, {
              name: "user"
            }), " ", Nd("store:me")]
          }), ud && (0, td.jsx)("div", {
            className: "StoreRecipientChips",
            children: Bd.map((dd => {
              const Od = dd === xd;
              return (0, td.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Od,
                tabIndex: !od && Od ? 0 : -1,
                title: dd.name,
                className: Rd()("StoreRecipientChip", {
                  StoreRecipientChecked: Od
                }),
                onClick: () => {
                  od || function(dd) {
                    "gift" !== Ed && (0, TO.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Fd.choose(dd.name, dd.kind)
                  }(dd)
                },
                onKeyDown: Gd,
                children: (0, td.jsx)(qK.c, {
                  playerSocialPreview: yK(dd, Od ? wd : null),
                  opensProfileCard: !1,
                  isFriend: null !== dd.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== dd.friend,
                  status: null === dd.friend ? null : void 0,
                  trailing: Od ? (0, td.jsx)(bK, {
                    pending: "pending" === Yd.status
                  }) : void 0
                })
              }, dd.name)
            }))
          })]
        }), (0, td.jsxs)("div", {
          className: Rd()("StoreRecipientSearch", {
            StoreRecipientChecked: Sd,
            StoreRecipientSearchPulse: Qd > 0 && !Sd,
            StoreRecipientSearchError: null !== Pd && !zd
          }),
          onClick: () => {
            var dd;
            null === (dd = Hd.current) || void 0 === dd || dd.focus()
          },
          children: [Sd && "found" === Yd.status && wd && (0, td.jsx)(HK, {
            cosmetics: wd
          }), !(Sd && "found" === Yd.status && wd) && (0, td.jsx)(Kd.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, td.jsx)(gd.c, {
            className: "StoreRecipientSearchInput",
            domRef: Hd,
            placeholderText: Nd("store:searchName"),
            defaultValue: sd,
            maxLength: Ad.g,
            onValueChange: function(dd) {
              "gift" !== Ed && dd.trim() && (0, TO.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Fd.type(dd)
            },
            onEnter: () => {
              var dd;
              const Od = null === (dd = Hd.current) || void 0 === dd ? void 0 : dd.value.trim();
              Od && Fd.choose(Od, "typed")
            },
            blurOnEnter: !0
          }), Sd && (0, td.jsx)(bK, {
            pending: "pending" === Yd.status
          }), Sd && (0, td.jsx)("div", {
            ...(0, vd.X)({
              disabled: od
            }),
            "aria-label": Nd("store:clearRecipient"),
            title: Nd("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: dd => {
              dd.stopPropagation(), od || rd()
            },
            children: (0, td.jsx)(Kd.c, {
              name: "xmark"
            })
          })]
        }, Qd), Pd && (0, td.jsx)("div", {
          className: Rd()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: zd
          }),
          role: "status",
          children: Nd(Pd)
        })]
      })
    }
    var pK = md(3138),
      YK = md(3353),
      gK = md(3684),
      wK = md(4771),
      aK = md(3206),
      EK = md(4283),
      JK = md(4291),
      UK = md(4249);
    const xK = [oK.q.yellow, oK.q.green, oK.q.aqua, oK.q.blue, oK.q.purple, oK.q.red];

    function BK(dd) {
      return "needsRecipient" === dd || "lookingUp" === dd || "gift" === dd || "recipientOwns" === dd || "recipientSharesOwned" === dd || "recipientSubscribed" === dd
    }

    function SK(dd) {
      const {
        onKeyDown: Od,
        ...md
      } = (0, vd.X)();
      return {
        ...md,
        "aria-label": dd,
        onKeyDown: dd => {
          dd.target === dd.currentTarget && (null === Od || void 0 === Od || Od(dd))
        }
      }
    }

    function sK(dd) {
      let {
        text: Od
      } = dd;
      return (0, td.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Od).map(((dd, Od) => (0, td.jsx)("span", {
          style: {
            color: xK[Od % xK.length]
          },
          children: dd
        }, Od)))
      })
    }
    const uK = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function VK(dd) {
      let {
        state: Od,
        item: md,
        price: Wd,
        busy: Fd,
        highlight: hd = !1,
        secondary: Qd = !1,
        onAct: od,
        onNeedRecipient: Nd,
        onLogin: qd
      } = dd;
      const {
        t: Hd
      } = (0, Xd.G)(), yd = "superRank" === md ? (0, zd.x)(Date.now()).product.days : null, bd = "superRank" === md && "hyper" === (0, zd.v)(Date.now()).look ? vd.v : vd.m, Td = Qd ? vd.i : bd, pd = dd => null === yd ? Hd(dd ? "general:gift" : "general:buy") : Hd(dd ? "store:giftDays" : "store:buyDays", {
        days: yd
      }), Yd = (dd, Od) => {
        const md = (0, td.jsxs)(td.Fragment, {
          children: [null === dd && (0, td.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== dd && (0, td.jsx)("span", {
            className: "StoreCtaLabel",
            title: dd,
            children: dd
          })]
        });
        return null !== yd ? (0, td.jsxs)(td.Fragment, {
          children: [Od && (0, td.jsx)("span", {
            className: "StoreCtaIcon",
            children: Od
          }), md, (0, td.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, td.jsx)(YK.c, {
              amount: Wd
            })]
          })]
        }) : (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsxs)("span", {
            className: "StoreCtaLead",
            children: [md, "\xb7"]
          }), (0, td.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Od, (0, td.jsx)(YK.c, {
              amount: Wd
            })]
          })]
        })
      };
      let gd;
      switch (Od) {
        case "pending":
          gd = (0, td.jsx)(bd, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Yd(null)
          });
          break;
        case "login":
          gd = (0, td.jsx)(Td, {
            className: "StoreCtaButton",
            onClick: qd,
            children: Yd(pd(!1))
          });
          break;
        case "owned":
          gd = (0, td.jsx)(vd.i, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, pK.c)("store")
            },
            children: (0, td.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, td.jsx)(Kd.c, {
                name: "shirt"
              }), " ", Hd("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          gd = (0, td.jsx)(bd, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, td.jsx)("span", {
              className: "StoreCtaLabel",
              children: Hd(uK[Od])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          gd = (0, td.jsx)(bd, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Od || null === Wd,
            loading: "lookingUp" === Od || Fd,
            onClick: od,
            analyticsClick: {
              id: "store.gift",
              value: md
            },
            children: Yd(pd(!0), OK.b)
          });
          break;
        case "buy":
        case "recharge":
          gd = (0, td.jsx)(Td, {
            className: "StoreCtaButton",
            loading: Fd,
            disabled: null === Wd,
            onClick: od,
            analyticsClick: {
              id: "store.buy",
              value: md
            },
            children: Yd(pd(!1))
          })
      }
      return (0, td.jsx)("div", {
        className: Rd()("StoreCta", {
          StoreCtaHighlight: hd,
          StoreCtaLabelFirst: null !== yd
        }),
        onClick: dd => {
          dd.stopPropagation(), "needsRecipient" === Od && Nd()
        },
        children: gd
      })
    }
    const iK = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function AK(dd) {
      var Od;
      let {
        pack: md,
        state: Fd,
        busy: hd,
        onOpen: vd,
        onAct: Qd,
        onNeedRecipient: od,
        onLogin: Nd
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), Hd = DX.c[md], yd = fX.n[md], bd = (0, tK.m)(md), Td = (0, Wd.useRef)(null);
      (0, EK.k)(md, Td);
      const pd = BK(Fd),
        Yd = null !== (Od = Hd.displayName) && void 0 !== Od ? Od : md,
        gd = (0, wK.c)((() => {
          (0, gK.g)();
          const dd = (0, EK.g)(md);
          void 0 !== dd && (0, aK.h)((0, EK.c)(dd))
        })),
        [wd] = (0, Wd.useState)(vK.i);
      return (0, td.jsxs)("div", {
        className: Rd()("StoreTile StorePackTile", iK[Hd.tier], {
          StorePackTileOwned: "owned" === Fd,
          StorePackTileRecipientOwns: "recipientOwns" === Fd,
          StoreTileGift: pd
        }),
        ...SK(Yd),
        ref: Td,
        "data-store-item": md,
        onClick: vd,
        onPointerMove: dd => {
          "mouse" !== dd.pointerType || 0 === dd.movementX && 0 === dd.movementY || wd || gd.start()
        },
        onPointerLeave: gd.cancel,
        children: [yd && (0, td.jsx)(yd, {
          simple: !0
        }), (0, td.jsx)("div", {
          className: "StorePackCharacters",
          children: bd.map((dd => (0, td.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,tK.g)(dd)})`
            }
          }, dd)))
        }), (0, td.jsx)("div", {
          className: "StoreTileScrim"
        }), pd && (0, td.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, td.jsx)(UK.c, {
          pack: md,
          className: Rd()({
            PackAnimatedBadgeBesideRibbon: pd
          })
        }), (0, td.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, td.jsx)("div", {
            className: "StoreTileTitle",
            children: Yd
          }), (0, td.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, td.jsx)(JK.e, {
              tier: Hd.tier
            }), " \xb7 ", qd("store:itemCount", {
              count: (0, oF.n)(md)
            }), "owned" === Fd && (0, td.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, td.jsx)(Kd.c, {
                name: "check"
              }), " ", qd("general:owned")]
            })]
          }), (0, td.jsx)(VK, {
            state: Fd,
            item: md,
            price: (0, eX.f)(md),
            busy: hd,
            onAct: Qd,
            onNeedRecipient: od,
            onLogin: Nd
          })]
        })]
      })
    }
    var rK = md(1688),
      GK = md(4823),
      nK = md(4310),
      LK = md(4916),
      PK = md(35566),
      zK = md(4849);
    const cK = {
      cape: Pd.d.cape
    };

    function jK(dd) {
      var Od, md;
      let {
        wearer: Fd,
        active: Kd,
        tryOn: hd = cK,
        framing: vd = "store",
        glow: Qd = !0,
        turnable: od = !1,
        className: Nd
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), Hd = (0, Wd.useRef)(null), [yd] = (0, Wd.useState)(vK.i), bd = function(dd) {
        const [Od, md] = (0, Wd.useState)(!1);
        return (0, Wd.useEffect)((() => {
          const Od = new IntersectionObserver((dd => {
            md(dd[dd.length - 1].isIntersecting)
          }));
          return Od.observe(dd.current), () => {
            Od.disconnect()
          }
        }), [dd]), Od
      }(Hd), Td = (0, zK.f)("storeRank"), pd = null !== (Od = Fd.name) && void 0 !== Od ? Od : qd(Fd.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), Yd = null !== (md = Fd.cosmetics) && void 0 !== md ? md : {}, gd = `${pd}|${JSON.stringify(Yd)}`, wd = Kd && bd && !yd && !Td, [Ed, Jd] = (0, Wd.useState)(null);
      wd || null === Ed || Jd(null);
      const Ud = wd && Ed === gd;
      return (0, td.jsxs)("div", {
        ref: Hd,
        className: Rd()("HyperRankStage", Nd, {
          HyperRankStageDrawn: Ud
        }),
        children: [Qd && (0, td.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, td.jsx)(zd.e, {
          className: "HyperRankStageStandIn"
        }), wd && (0, td.jsx)(DK, {
          name: pd,
          cosmetics: Yd,
          tryOn: hd,
          framing: vd,
          turnable: od,
          onDrawn: () => {
            Jd(gd)
          }
        }, gd), (0, td.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function DK(dd) {
      let {
        name: Od,
        cosmetics: md,
        tryOn: Fd,
        framing: Xd,
        turnable: Kd,
        onDrawn: hd
      } = dd;
      const vd = (0, Wd.useRef)(null),
        Qd = (0, Wd.useRef)(0),
        od = (0, Wd.useRef)(null),
        Nd = (0, Wd.useMemo)((() => {
          var dd;
          return {
            name: Od,
            ranks: [Pd.d.rank],
            nameColour: null !== (dd = md.nameColour) && void 0 !== dd ? dd : oK.b
          }
        }), [Od, md.nameColour]),
        qd = dd => {
          var Od;
          (null === (Od = od.current) || void 0 === Od ? void 0 : Od.pointerId) === dd.pointerId && (od.current = null)
        },
        Hd = Kd ? {
          onPointerDown: dd => {
            0 === dd.button && (od.current = {
              pointerId: dd.pointerId,
              x: dd.clientX
            }, dd.currentTarget.setPointerCapture(dd.pointerId))
          },
          onPointerMove: dd => {
            var Od;
            const md = od.current;
            (null === md || void 0 === md ? void 0 : md.pointerId) === dd.pointerId && (Qd.current -= (dd.clientX - md.x) * PK.d, md.x = dd.clientX, null === (Od = vd.current) || void 0 === Od || Od.turnCamera(Qd.current))
          },
          onPointerUp: qd,
          onPointerCancel: qd
        } : {};
      return (0, td.jsx)("div", {
        className: Rd()("HyperRankStageLive", {
          HyperRankStageTurnable: Kd
        }),
        ...Hd,
        children: (0, td.jsx)(Wd.Suspense, {
          fallback: null,
          children: (0, td.jsx)(gK.e, {
            ref: vd,
            owner: "storeRank",
            framing: Xd,
            forcedCosmetics: Fd,
            nametag: Nd,
            onReady: () => {
              var dd;
              null === (dd = vd.current) || void 0 === dd || dd.setAllCosmetics(md)
            },
            onDrawn: hd
          })
        })
      })
    }
    var eK = md(4924);

    function IK(dd) {
      var Od;
      return null !== (Od = (0, tF.j)(dd)) && void 0 !== Od ? Od : tF.m[tF.m.length - 1]
    }

    function lK(dd, Od) {
      return dd.tiers.flatMap((dd => {
        var md;
        return null !== (md = dd[Od]) && void 0 !== md ? md : []
      }))
    }

    function CK(dd) {
      const Od = lK(dd, "hyper");
      return Od.filter((dd => "cosmetic" === dd.kind && !(0, LK.r)(dd, Od)))
    }

    function ZK(dd, Od) {
      const md = lK(dd, Od).find((dd => "xpBoost" === dd.kind));
      return "xpBoost" === (null === md || void 0 === md ? void 0 : md.kind) ? md : null
    }

    function kK(dd) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, td.jsx)(sK, {
          text: dd("store:colourfulNames")
        }),
        detail: dd("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: dd("store:perkCapes"),
        detail: dd("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: dd("store:perkNametag", {
          rank: dd((0, zd.p)(Pd.d.id).nameKey)
        }),
        detail: dd("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: dd("store:perkNoAdverts"),
        detail: dd("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: dd("store:perkFriends", {
          count: (0, yO.d)([Pd.d.rank])
        }),
        detail: dd("store:perkFriendsDetail", {
          count: (0, yO.d)([])
        })
      }]
    }

    function fK() {
      const {
        t: dd
      } = (0, Xd.G)(), Od = [{
        id: "battlePass",
        icon: "crown",
        title: dd("store:perkBattlePassTrack")
      }, ...kK(dd)];
      return (0, td.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: Od.map((dd => (0, td.jsxs)("li", {
          children: [(0, td.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, td.jsx)(Kd.c, {
              name: dd.icon
            })
          }), dd.title]
        }, dd.id)))
      })
    }

    function MK() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, td.jsx)(dh, {}), kK(dd).map((dd => (0, td.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, td.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, td.jsx)(Kd.c, {
              name: dd.icon
            })
          }), (0, td.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, td.jsx)("b", {
              children: dd.title
            }), (0, td.jsx)("small", {
              children: dd.detail
            })]
          })]
        }, dd.id)))]
      })
    }

    function dh() {
      const {
        t: dd,
        selectedLanguage: Od
      } = (0, Xd.G)(), md = IK(Date.now()), Wd = CK(md), Fd = function(dd) {
        return CK(dd).filter((dd => null !== (0, LK.n)(dd) || null !== (0, LK.p)(dd))).reverse()
      }(md).slice(0, 4), Rd = ZK(md, "hyper"), hd = ZK(md, "free"), vd = (0, Xd.f)(Od.code, "store:battlePassTiersEnds", md.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, td.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, td.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, td.jsx)(Kd.c, {
            name: "crown"
          })
        }), (0, td.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, td.jsx)("b", {
            children: dd("store:battlePassSeason", {
              season: md.seasonNumber
            })
          }), (0, td.jsx)("small", {
            children: dd("store:battlePassTiersEnds", {
              tiers: md.tierCount,
              date: vd
            })
          })]
        }), (0, td.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, td.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === Wd.length ? dd("store:battlePassOneCosmetic") : dd("store:battlePassCosmetics", {
              count: Wd.length
            })
          }), (0, td.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [Fd.map((Od => (0, td.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, LK.h)(Od, dd),
              children: (0, td.jsx)(eK.c, {
                reward: Od
              })
            }, Od.id))), Wd.length > Fd.length && (0, td.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: dd("store:battlePassMore", {
                count: Wd.length - Fd.length
              })
            })]
          })]
        }), (0, td.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [Rd && hd && (0, td.jsxs)("li", {
            children: [(0, td.jsx)(Kd.c, {
              name: "angles-up"
            }), dd("store:battlePassXp", {
              multiplier: Rd.multiplier,
              minutes: Rd.minutes,
              freeMinutes: hd.minutes
            })]
          }), (0, td.jsxs)("li", {
            children: [(0, td.jsx)(Kd.c, {
              name: "lock-open"
            }), dd("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }
    const Oh = ["snowmanSet", "skis", "reindeerPet"];

    function mh() {
      const dd = IK(Date.now()),
        Od = {};
      let md = 0;
      for (const Fd of dd.tiers) {
        const dd = Fd.hyper;
        var Wd;
        if ("cosmetic" === (null === dd || void 0 === dd ? void 0 : dd.kind) && Oh.includes(dd.id)) Object.assign(Od, null === (Wd = (0, LK.l)(dd)) || void 0 === Wd ? void 0 : Wd.cosmetics), md++
      }
      return md < Oh.length && console.warn(`Hyper Rank's page wears ${md} of its ${Oh.length} rewards: ${dd.seasonId} lacks the others`), {
        ...Od,
        cape: Pd.d.cape
      }
    }

    function Wh(dd) {
      let {
        wearer: Od
      } = dd;
      const md = (0, Wd.useMemo)(mh, []);
      return (0, td.jsx)(jK, {
        className: "HyperRankShowcase",
        wearer: Od,
        active: !0,
        tryOn: md,
        framing: "showcase",
        glow: !1,
        turnable: !0
      })
    }
    const Fh = md.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Rh() {
      (0, aK.h)(Fh, {
        lowPriority: !1
      })
    }

    function Xh() {
      const {
        t: dd
      } = (0, Xd.G)(), [Od, md] = (0, Wd.useState)("starting"), Fd = (0, Wd.useRef)(null), Rd = (0, hm.b)(), hd = (0, Wd.useRef)(null), Qd = (0, Wd.useCallback)((() => {
        const dd = Fd.current;
        null !== dd.error && dd.load();
        const Od = dd.play();
        hd.current = Od, Od.catch((dd => {
          (0, GK.b)("Failed to play Super Rank video", dd), Rd.current && hd.current === Od && md("failed")
        }))
      }), [Rd]);
      return (0, Wd.useEffect)((() => {
        const dd = Fd.current;
        let Od;

        function md() {
          clearTimeout(Od), Od = setTimeout(Qd, 3e3)
        }
        return Qd(), dd.addEventListener("ended", md), () => {
          clearTimeout(Od), dd.removeEventListener("ended", md)
        }
      }), [Qd]), (0, td.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, td.jsx)("video", {
          ref: Fd,
          src: `${sO.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: Fh,
          muted: !0,
          playsInline: !0,
          controls: "playing" === Od,
          onPlaying: () => {
            md("playing")
          },
          onError: () => {
            md("failed")
          }
        }), ("failed" === Od || "loading" === Od) && (0, td.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, td.jsx)(vd.g, {
            ariaLabel: dd("general:play"),
            loading: "loading" === Od,
            onClick: () => {
              md("loading"), Qd()
            },
            touchPressOn: "pointerup",
            children: (0, td.jsx)(Kd.c, {
              name: "play"
            })
          })
        })]
      })
    }

    function Kh(dd) {
      let {
        tierId: Od,
        wearer: md,
        onBack: Wd,
        cta: Fd,
        recipient: Kd,
        afterCta: hd
      } = dd;
      const {
        t: Qd
      } = (0, Xd.G)(), od = "hyper" === (0, zd.p)(Od).look;
      return (0, td.jsxs)("div", {
        className: Rd()("StoreSuperRankDetail", {
          StoreHyperRankDetail: od
        }),
        children: [(0, td.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, td.jsx)(vd.d, {
            className: "StoreDetailBackButton",
            onClick: Wd,
            padBack: !0,
            children: Qd("general:back")
          }), (0, td.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, td.jsx)(zd.k, {
              tierId: Od
            })
          }), Kd]
        }), (0, td.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [od && (0, td.jsx)(Wh, {
            wearer: md
          }), !od && (0, td.jsx)(Xh, {}), (0, td.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [od && (0, td.jsx)(MK, {}), !od && (0, td.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, td.jsx)(nK.e, {
                tierId: Od
              })
            }), (0, td.jsxs)("div", {
              className: "StoreTileActions",
              children: [Fd, hd]
            })]
          })]
        })]
      })
    }
    var hh = md(4184),
      vh = md(3697);

    function Qh() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, td.jsx)("div", {
        className: "SmallTextBold",
        children: dd("payments:legalDocumentLoadFailed")
      })
    }
    const th = (0, Wd.lazy)((() => (0, vh.b)(Promise.all([md.e(146), md.e(712)]).then((() => md(7474))), (dd => dd.default), Qh))),
      oh = (0, Wd.lazy)((() => (0, vh.b)(md.e(148).then((() => md(7494))), (dd => dd.default), Qh)));

    function Nh(dd, Od) {
      dd.preventDefault(), XO.NotificationProvider.showCustomPopup({
        body: (0, td.jsx)("div", {
          className: "AppLegalDocument",
          children: (0, td.jsx)(Wd.Suspense, {
            fallback: (0, td.jsx)(wd.c, {}),
            children: (0, td.jsx)(Od, {})
          })
        }),
        middleScreenPopupClassName: "AppLegalDocumentPopup",
        unlockPointerKey: "appLegalDocument"
      })
    }

    function qh(dd) {
      let {
        price: Od,
        perks: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [md, (0, td.jsx)("div", {
          className: "SmallTextLight",
          children: Wd("payments:subscriptionRenewsMonthly", {
            price: Od
          })
        }), (0, td.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: ["mobileIos" === Bd.siteUsed && (0, td.jsx)("a", {
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            target: "_blank",
            rel: "noreferrer",
            children: Wd("payments:appleTermsOfUse")
          }), "mobileIos" !== Bd.siteUsed && (0, td.jsx)("a", {
            href: "/terms-of-service",
            onClick: dd => {
              Nh(dd, oh)
            },
            children: Wd("homePage:termsOfService")
          }), (0, td.jsx)("a", {
            href: "/privacy-policy",
            onClick: dd => {
              Nh(dd, th)
            },
            children: Wd("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var Hh = md(4265),
      yh = md(4268),
      bh = md(4141);

    function Th(dd) {
      const {
        userContext: Od
      } = (0, qd.d)(), {
        purchaseUnderWay: md,
        notice: Fd,
        subscribe: Rd
      } = (0, bh.d)(), [Xd, Kd] = (0, Wd.useState)(null), [hd, vd] = (0, Wd.useState)(0), Qd = (0, hm.b)(), td = Od !== Sd.NULL_USER_CONTEXT, od = td && (Od.mayBuy() || (0, ed.guestsMayBuy)()), Nd = null !== Xd && Xd.loadedFor === Od ? Xd.offer : null, Hd = null === Fd || void 0 === Fd ? void 0 : Fd.pendingIntentId, yd = (0, Wd.useRef)(Hd);

      function bd() {
        vd((dd => dd + 1))
      }
      return (0, Wd.useEffect)((() => {
        void 0 !== yd.current && void 0 === Hd && bd(), yd.current = Hd
      }), [Hd]), (0, Wd.useEffect)((() => {
        if (!td) return;
        let md = !1;
        return async function(dd, Od) {
          const {
            offering: md
          } = await (0, OO.getBillingClient)().getOfferings(dd), Wd = null === md || void 0 === md ? void 0 : md.packages.find(dO.isPricedPackage);
          return void 0 === Wd ? {
            kind: "unavailable"
          } : Od ? {
            kind: "loaded",
            pkg: Wd,
            preview: await (0, yh.f)(Wd.productId)
          } : {
            kind: "loaded",
            pkg: Wd,
            preview: {
              kind: "none"
            }
          }
        }(dd, od).catch((Od => (console.error(`Billing: loading the ${dd} subscription or its preview failed:`, Od), {
          kind: "loadFailed"
        }))).then((dd => {
          md || Kd((md => "loadFailed" === dd.kind && (null === md || void 0 === md ? void 0 : md.loadedFor) === Od ? md : {
            loadedFor: Od,
            offer: dd
          }))
        })), () => {
          md = !0
        }
      }), [dd, Od, td, od, hd]), {
        offer: Nd,
        purchaseUnderWay: md,
        notice: Fd,
        pendingIntentId: Hd,
        mountedRef: Qd,
        checkOut: async function(dd) {
          const md = await Rd(dd);
          Qd.current && ("unknownPackage" === md.kind && Kd({
            loadedFor: Od,
            offer: {
              kind: "unavailable"
            }
          }), bd())
        }
      }
    }

    function ph(dd) {
      let {
        onOfferedChange: Od
      } = dd;
      return (0, ed.usePurchasesAllowed)() && (0, ed.subscriptionsSold)() ? (0, td.jsx)(Yh, {
        onOfferedChange: Od
      }) : null
    }

    function Yh(dd) {
      let {
        onOfferedChange: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        offer: Fd,
        purchaseUnderWay: Rd,
        notice: Kd,
        pendingIntentId: hd,
        mountedRef: Qd,
        checkOut: od
      } = Th((0, zd.p)(Pd.d.id).placementId), [Nd, qd] = (0, Wd.useState)(!1), Hd = null === Fd || "loaded" === Fd.kind && "refused" !== Fd.preview.kind;
      if ((0, Wd.useEffect)((() => {
          Od(Hd)
        }), [Hd]), null === Fd || "unavailable" === Fd.kind) return null;
      if ("loadFailed" === Fd.kind) return (0, td.jsx)(hh.j, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: yd,
        preview: Td
      } = Fd;
      if ("refused" === Td.kind) return (0, td.jsx)(hh.j, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Td.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const pd = (0, KO.e)(yd);
      return (0, td.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: dd => {
          dd.stopPropagation()
        },
        children: [(0, td.jsx)(hh.j, {
          notice: Kd,
          className: "SmallTextBold"
        }), (0, td.jsx)(hh.c, {
          className: "SmallTextBold"
        }), (0, td.jsx)("div", {
          className: "StoreCta",
          children: (0, td.jsx)(vd.v, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(dd, Od) {
                if ("refund" === Od.kind) {
                  qd(!0);
                  const dd = await (0, Hh.b)(Od, null);
                  if (!Qd.current) return;
                  if (qd(!1), !dd) return
                }
                await od(dd)
              }(yd, Td)
            },
            disabled: void 0 !== hd,
            loading: Rd || Nd,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, td.jsx)("span", {
              className: "StoreCtaLabel",
              children: md("payments:subscribeContinue", {
                price: pd
              })
            })
          })
        }), (0, bd.isMobileApp)() && (0, td.jsx)(qh, {
          price: pd,
          perks: (0, td.jsx)(fK, {})
        })]
      })
    }

    function gh() {
      const {
        t: dd
      } = (0, Xd.G)();
      return (0, td.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, td.jsxs)("li", {
          children: [(0, td.jsx)(Kd.c, {
            name: "check"
          }), (0, td.jsx)(sK, {
            text: dd("store:colourfulNames")
          })]
        }), (0, td.jsxs)("li", {
          children: [(0, td.jsx)(Kd.c, {
            name: "check"
          }), dd("store:perkCapes")]
        }), (0, td.jsxs)("li", {
          children: [(0, td.jsx)(Kd.c, {
            name: "check"
          }), dd("store:perkNoAdverts")]
        }), (0, td.jsxs)("li", {
          children: [(0, td.jsx)(Kd.c, {
            name: "check"
          }), dd("store:perkFriends", {
            count: (0, yO.d)(["super"])
          })]
        })]
      })
    }

    function wh(dd, Od) {
      return 1 === Od ? dd("store:oneDayLeft") : dd("store:daysLeft", {
        days: Od
      })
    }

    function ah(dd) {
      let {
        daysLeft: Od,
        totalDays: md,
        urgent: Wd
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)(), Kd = md > 0 ? Math.min(1, Math.max(.03, Od / md)) : 1;
      return (0, td.jsxs)("div", {
        className: Rd()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Wd
        }),
        children: [(0, td.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: wh(Fd, Od)
        }), (0, td.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, td.jsx)("i", {
            style: {
              width: 100 * Kd + "%"
            }
          })
        })]
      })
    }

    function Eh(dd) {
      var Od;
      let {
        state: md,
        urgent: Fd,
        daysLeft: Kd,
        totalDays: hd,
        recipientHasSuperRank: vd,
        busy: Qd,
        highlight: od,
        onOpen: Nd,
        onAct: Hd,
        onNeedRecipient: yd,
        onLogin: Td,
        wearer: pd,
        live: Yd,
        onWake: gd
      } = dd;
      const {
        t: wd
      } = (0, Xd.G)(), {
        userContext: Ed
      } = (0, qd.d)(), Jd = Date.now(), Ud = (0, zd.v)(Jd), xd = "hyper" === Ud.look, Bd = xd ? void 0 : Rh, Sd = BK(md), sd = (0, zd.x)(Jd), {
        days: ud
      } = sd.product, Vd = wd("store:recipientHasSuperRank", {
        giftDays: ud
      }), Ad = null === (Od = qO("subscribed" === md)) || void 0 === Od ? void 0 : Od.text, rd = Sd ? null : (0, zd.t)(Ed.superRankInfo, Jd), Gd = xd && !Sd && "subscribed" !== md && "pending" !== md && (0, ed.subscriptionsSold)() && !(0, bd.isMobileApp)(), [nd, Ld] = (0, Wd.useState)(!0);
      return (0, td.jsxs)("div", {
        className: Rd()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Sd,
          StoreSuperRankTileUrgent: "recharge" === md && Fd,
          StoreSuperRankTileWithChip: vd,
          StoreSuperRankTileGiftReady: "gift" === md,
          StoreHyperRankTile: xd
        }),
        ...SK(wd(Ud.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: Bd,
        onFocus: Bd,
        onPointerMove: dd => {
          !xd || Yd || "mouse" !== dd.pointerType || 0 === dd.movementX && 0 === dd.movementY || gd()
        },
        onClick: Nd,
        children: [xd && (0, td.jsx)(jK, {
          className: "StoreHyperRankTileStage",
          wearer: pd,
          active: Yd
        }), !xd && (0, td.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ud.artUrl})`
          }
        }), Sd && (0, td.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, td.jsxs)("div", {
          className: "StoreTileContent",
          children: [vd && (0, td.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Vd,
            children: Vd
          }), (0, td.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, td.jsx)(zd.k, {
              tierId: (0, cd.i)(Jd).id
            })
          }), Sd && (0, td.jsx)("div", {
            className: "StoreTilePitch",
            children: wd("store:giftPitch", {
              days: ud
            })
          }), xd && ("buy" === md || "login" === md) && null === rd && (0, td.jsx)("div", {
            className: "StoreTilePitch",
            children: wd("store:hyperHook")
          }), "recharge" === md && (0, td.jsx)(ah, {
            daysLeft: Kd,
            totalDays: hd,
            urgent: Fd
          }), Ad && (0, td.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, td.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Ad
            })
          }), null !== rd && (0, td.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, td.jsx)(Dd, {
              className: "StoreSuperRankDaysLeft",
              until: rd
            })
          }), xd && (0, td.jsx)(fK, {}), !xd && (0, td.jsx)(gh, {}), (0, td.jsxs)("div", {
            className: "StoreTileActions",
            children: [Gd && (0, td.jsx)(ph, {
              onOfferedChange: Ld
            }), (0, rK.g)(sd.product.tierId, Jd) && (0, td.jsx)(VK, {
              state: md,
              item: "superRank",
              price: sd.price,
              busy: Qd,
              highlight: od,
              secondary: Gd && nd,
              onAct: Hd,
              onNeedRecipient: yd,
              onLogin: Td
            }), "needsRecipient" === md && (0, td.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: wd("store:pickRecipientFirst")
            }), "recharge" === md && Fd && (0, td.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Kd ? wd("store:endsInOneDay") : wd("store:endsInDays", {
                days: Kd
              })
            })]
          })]
        })]
      })
    }
    var Jh = md(1675),
      Uh = md(1587),
      xh = md(4802);

    function Bh() {
      return (0, td.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Sh = md(1459),
      sh = md(1685),
      uh = md(35582);

    function Vh(dd) {
      let {
        character: Od,
        drawn: md,
        onDrawn: Fd
      } = dd;
      const Xd = (0, Wd.useRef)(null),
        Kd = (0, uh.g)(Od);
      return (0, td.jsx)("div", {
        className: Rd()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: md
        }),
        children: (0, td.jsx)(Wd.Suspense, {
          fallback: null,
          children: (0, td.jsx)(gK.e, {
            ref: Xd,
            framing: "store",
            turntableFromYaw: md ? Kd.yaw : null,
            onReady: () => {
              var dd, md;
              null === (dd = Xd.current) || void 0 === dd || dd.setOrbit(Kd), null === (md = Xd.current) || void 0 === md || md.setAllCosmetics(sh.b[Od].cosmetics)
            },
            onDrawn: Fd
          })
        })
      })
    }
    var ih = md(4256);
    const Ah = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      rh = new Set(["wildSpirits"]);

    function Gh(dd) {
      var Od;
      let {
        tile: md,
        design: Fd,
        canGoLive: hd,
        live: vd,
        busy: Qd,
        highlight: od,
        onLiveStart: Nd,
        onLiveEnd: qd,
        onOpen: Hd,
        onAct: yd,
        onNeedRecipient: bd,
        onLogin: Td
      } = dd;
      const {
        t: pd
      } = (0, Xd.G)(), {
        pack: Yd,
        state: gd
      } = md, wd = DX.c[Yd], Ed = (0, DX.d)(Yd), Jd = (0, tK.k)(Yd), Ud = fX.n[Jd], xd = rh.has(Jd), {
        tier: Bd
      } = wd, Sd = (0, ih.h)(Yd), sd = "legendary" === Bd || "mythic" === Bd, ud = (0, Wd.useRef)(null);
      (0, Sh.b)(ud, "epic" === Bd || sd || xd);
      const [Ad, rd] = (0, Wd.useState)(!1);
      return !vd && Ad && rd(!1), (0, td.jsxs)("div", {
        ref: ud,
        className: Rd()("StoreCharacterCard", `StoreCharacterCard${Fd}`, Ah[Bd], {
          StoreCharacterCardOwned: "owned" === gd || "recipientOwns" === gd,
          StoreCharacterCardGift: BK(gd),
          StoreCharacterCardItem: void 0 === Ed
        }),
        onPointerMove: dd => {
          "mouse" !== dd.pointerType || 0 === dd.movementX && 0 === dd.movementY || !hd || vd || void 0 === Ed || Nd()
        },
        onPointerLeave: qd,
        children: [(0, td.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Ud && (0, td.jsx)(Ud, {
            simple: !0
          })
        }), sd && (0, td.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, td.jsxs)(Vd.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Jh.g)({
            kind: "pack",
            pack: Yd
          }, Date.now()),
          "data-store-item": Yd,
          onClick: dd => {
            (0, Uh.b)(dd) && (dd.preventDefault(), Hd())
          },
          children: [(0, td.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, td.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, td.jsx)("div", {
              className: Rd()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Ad
              }),
              style: {
                backgroundImage: `url(${(0,tK.q)(Yd)})`
              }
            }), vd && void 0 !== Ed && (0, td.jsx)(Vh, {
              character: Ed,
              drawn: Ad,
              onDrawn: () => {
                rd(!0)
              }
            })]
          }), (0, td.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Od = wd.displayName) && void 0 !== Od ? Od : Yd
          }), (0, td.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, td.jsx)(JK.e, {
              tier: Bd
            }), Sd && (0, td.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, td.jsx)(Kd.c, {
                name: "film"
              }), pd("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, td.jsx)("div", {
          className: "StoreCharacterScrim"
        }), xd && (0, td.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, td.jsx)(Bh, {})
        }), (0, td.jsx)(UK.c, {
          pack: Yd,
          iconOnly: !0,
          className: Rd()({
            PackAnimatedBadgeBelowOwned: "owned" === gd
          })
        }), "owned" === gd && (0, td.jsx)("span", {
          className: "StoreCharacterOwned",
          title: pd("general:owned"),
          "aria-label": pd("general:owned"),
          children: (0, td.jsx)(Kd.c, {
            name: "check"
          })
        }), (0, td.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, td.jsx)(VK, {
            state: gd,
            item: Yd,
            price: (0, eX.f)(Yd),
            busy: Qd,
            highlight: od,
            onAct: yd,
            onNeedRecipient: bd,
            onLogin: Td
          })
        })]
      })
    }

    function nh(dd) {
      let {
        tiles: Od,
        busy: md,
        highlightItem: Fd,
        onOpen: Rd,
        onAct: Xd,
        onNeedRecipient: Kd,
        onLogin: hd,
        livePack: vd,
        setLivePack: Qd
      } = dd;
      const od = (0, xh.q)("storeCharacterCardFoil"),
        Nd = (0, xh.q)("storeCharacterCardSpotlight"),
        qd = od ? "Foil" : Nd ? "Spotlight" : "Showcase",
        [Hd] = (0, Wd.useState)(vK.i);
      return (0, td.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Od.map((dd => (0, td.jsx)(Gh, {
          tile: dd,
          design: qd,
          canGoLive: !Hd,
          live: vd === dd.pack,
          busy: md,
          highlight: Fd === dd.pack,
          onLiveStart: () => {
            Qd(dd.pack)
          },
          onLiveEnd: () => {
            Qd((Od => Od === dd.pack ? null : Od))
          },
          onOpen: () => {
            Rd(dd.pack)
          },
          onAct: () => {
            Xd(dd.pack)
          },
          onNeedRecipient: Kd,
          onLogin: () => {
            hd(dd.pack)
          }
        }, dd.pack)))
      })
    }
    var Lh = md(35596);

    function Ph(dd) {
      let {
        title: Od
      } = dd;
      return (0, td.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, td.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Od
        })
      })
    }

    function zh(dd) {
      let {
        mountAtOnce: Od,
        children: md
      } = dd;
      const Fd = (0, Wd.useRef)(null),
        [Rd, Xd] = (0, Wd.useState)(Od),
        Kd = (0, Lh.c)();
      return (0, Wd.useLayoutEffect)((() => {
        const dd = Fd.current;
        dd && dd.getBoundingClientRect().top < dd.parentElement.getBoundingClientRect().bottom && Xd(!0)
      }), []), Rd || Kd ? (0, td.jsx)(td.Fragment, {
        children: md
      }) : (0, td.jsx)("div", {
        ref: Fd
      })
    }

    function ch(dd) {
      let {
        layout: Od,
        mountAtOnce: md,
        bundleGift: Fd,
        superRankTotalDays: Rd,
        busy: Kd,
        highlightItem: hd,
        onOpen: vd,
        onAct: Qd,
        onNeedRecipient: od,
        onLogin: Nd,
        dailyDropTile: qd,
        dealBanner: Hd,
        rankWearer: yd
      } = dd;
      const {
        t: bd
      } = (0, Xd.G)(), Td = Od.packs.filter((dd => void 0 === (0, DX.d)(dd.pack) && !(0, DX.j)(dd.pack))), pd = Od.packs.filter((dd => void 0 !== (0, DX.d)(dd.pack))), Yd = Od.packs.filter((dd => (0, DX.j)(dd.pack))), [gd, wd] = (0, Wd.useState)(null), [Ed, Ud] = (0, Wd.useState)(!1), {
        gameState: xd
      } = (0, Jd.p)(["gameState"]), Bd = null === gd && (Ed || "inGame" === xd);
      return (0, td.jsxs)(td.Fragment, {
        children: [(0, td.jsx)(KO.c, {
          className: "StoreSuperGems",
          gift: Fd,
          highlightSku: hd,
          leadingTile: qd,
          afterLeadingTile: Hd
        }), null !== Od.superRank && (0, td.jsxs)(td.Fragment, {
          children: [(0, td.jsx)(Ph, {
            title: bd("store:rank")
          }), (0, td.jsx)(Eh, {
            state: Od.superRank.state,
            urgent: Od.superRank.urgent,
            daysLeft: Od.superRankDaysLeft,
            totalDays: Rd,
            recipientHasSuperRank: Od.recipientHasSuperRank,
            wearer: yd,
            live: Bd,
            onWake: () => {
              Ud(!0)
            },
            busy: Kd,
            highlight: "superRank" === hd,
            onOpen: () => {
              vd("superRank")
            },
            onAct: () => {
              Qd("superRank")
            },
            onNeedRecipient: od,
            onLogin: () => {
              Nd("superRank")
            }
          })]
        }), (0, td.jsxs)(zh, {
          mountAtOnce: md,
          children: [(0, td.jsx)(Ph, {
            title: bd("store:bundles")
          }), (0, td.jsx)("div", {
            className: "StorePackGrid",
            children: Td.map((dd => (0, td.jsx)(AK, {
              pack: dd.pack,
              state: dd.state,
              busy: Kd,
              onOpen: () => {
                vd(dd.pack)
              },
              onAct: () => {
                Qd(dd.pack)
              },
              onNeedRecipient: od,
              onLogin: () => {
                Nd(dd.pack)
              }
            }, dd.pack)))
          }), (0, td.jsxs)(zh, {
            mountAtOnce: md,
            children: [(0, td.jsx)(Ph, {
              title: bd("store:characters")
            }), (0, td.jsx)(nh, {
              tiles: pd,
              busy: Kd,
              highlightItem: hd,
              onOpen: vd,
              onAct: Qd,
              onNeedRecipient: od,
              onLogin: Nd,
              livePack: gd,
              setLivePack: wd
            }), Yd.length > 0 && (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsx)(Ph, {
                title: bd("store:premiumItems")
              }), (0, td.jsx)(nh, {
                tiles: Yd,
                busy: Kd,
                highlightItem: hd,
                onOpen: vd,
                onAct: Qd,
                onNeedRecipient: od,
                onLogin: Nd,
                livePack: gd,
                setLivePack: wd
              })]
            })]
          })]
        })]
      })
    }

    function jh(dd) {
      let {
        giftName: Od,
        onChooseRecipient: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return Od ? (0, td.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: Wd("store:giftFor", {
          name: Od
        }),
        children: [OK.b, " ", Wd("store:giftFor", {
          name: Od
        })]
      }) : (0, td.jsxs)("div", {
        ...(0, vd.X)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: md,
        children: [OK.b, " ", Wd("store:chooseRecipient")]
      })
    }

    function Dh(dd) {
      return (0, cd.e)(Date.now()) ? (0, td.jsx)(Ih, {
        ...dd
      }) : (0, td.jsx)(eh, {
        ...dd
      })
    }

    function eh(dd) {
      let {
        state: Od,
        wearer: md,
        mode: Wd,
        giftName: Fd,
        busy: Rd,
        highlight: Kd,
        purchaseError: hd,
        onBack: vd,
        onChooseRecipient: Qd,
        onAct: od,
        onLogin: Nd
      } = dd;
      const {
        t: qd
      } = (0, Xd.G)(), Hd = qO("gift" !== Wd);
      return (0, td.jsx)(Kh, {
        tierId: Pd.q.id,
        wearer: md,
        onBack: vd,
        recipient: "gift" === Wd && (0, td.jsx)(jh, {
          giftName: Fd,
          onChooseRecipient: Qd
        }),
        cta: (0, td.jsx)(VK, {
          state: Od,
          item: "superRank",
          price: (0, zd.x)(Date.now()).price,
          busy: Rd,
          highlight: Kd,
          onAct: od,
          onNeedRecipient: Qd,
          onLogin: Nd
        }),
        afterCta: (0, td.jsxs)(td.Fragment, {
          children: [Hd && (0, td.jsx)("span", {
            className: "StoreTileNote",
            children: Hd.text
          }), (null === Hd || void 0 === Hd ? void 0 : Hd.manageUrl) && (0, td.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: Hd.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: qd("payments:manageSubscription")
          }), hd && (0, td.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: qd(hd)
          })]
        })
      })
    }

    function Ih(dd) {
      let {
        state: Od,
        daysLeft: md,
        wearer: Fd,
        mode: Rd,
        giftName: Kd,
        busy: hd,
        highlight: vd,
        purchaseError: Qd,
        onBack: od,
        onChooseRecipient: Nd,
        onAct: Hd,
        onLogin: yd
      } = dd;
      const {
        t: bd
      } = (0, Xd.G)(), {
        userContext: Td
      } = (0, qd.d)(), pd = Date.now(), Yd = "gift" !== Rd, gd = Yd && "subscribed" === Od, wd = Yd ? (0, zd.t)(Td.superRankInfo, pd) : null, Ed = Yd && !gd && "pending" !== Od && (0, ed.subscriptionsSold)(), [Jd, Ud] = (0, Wd.useState)(!0);
      return (0, td.jsx)(Kh, {
        tierId: Pd.d.id,
        wearer: Fd,
        onBack: od,
        recipient: !Yd && (0, td.jsx)(jh, {
          giftName: Kd,
          onChooseRecipient: Nd
        }),
        cta: (0, td.jsxs)(td.Fragment, {
          children: [null !== wd && (0, td.jsx)(Dd, {
            className: "StoreTileNote StoreDetailNote",
            until: wd
          }), "recharge" === Od && md > 0 && (0, td.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: wh(bd, md)
          }), Ed && (0, td.jsx)(ph, {
            onOfferedChange: Ud
          }), Yd && (0, td.jsx)(vO, {
            showing: !0
          }), !gd && (0, rK.g)(Pd.d.id, pd) && (0, td.jsx)(VK, {
            state: Od,
            item: "superRank",
            price: (0, zd.x)(pd).price,
            busy: hd,
            highlight: vd,
            secondary: Ed && Jd,
            onAct: Hd,
            onNeedRecipient: Nd,
            onLogin: yd
          })]
        }),
        afterCta: Qd && (0, td.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: bd(Qd)
        })
      })
    }

    function lh() {}

    function Ch() {
      return "true" !== new URLSearchParams(window.location.search).get("tempSubscription") ? null : (0, td.jsx)("div", {
        className: "StoreTempSubscribe",
        children: (0, td.jsx)(ph, {
          onOfferedChange: lh
        })
      })
    }
    var Zh = md(3605);

    function kh(dd) {
      let {
        state: Od,
        view: md,
        claiming: Fd,
        onOpen: Kd
      } = dd;
      const {
        t: Qd
      } = (0, Xd.G)(), od = (0, Wd.useRef)(null), Nd = "ready" === md.kind;
      return (0, Sh.b)(od, Nd), (0, td.jsxs)("div", {
        ref: od,
        className: Rd()("DailyDropTile", {
          DailyDropTileReady: Nd
        }),
        children: [Nd && (0, td.jsx)(hd.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, td.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Qd("dailyDrop:name")
        }), (0, td.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, td.jsx)(Zh.c, {
            className: "DailyDropTileBlock"
          }), (0, td.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, td.jsx)("span", {
              children: Qd("dailyDrop:basicItems")
            }), " ", (0, td.jsx)("span", {
              children: Qd("dailyDrop:collected", {
                count: Od.collected.length,
                total: Od.total
              })
            })]
          })]
        }), "ready" === md.kind && (0, td.jsx)(vd.m, {
          className: "DailyDropTileOpen",
          onClick: Kd,
          loading: Fd,
          children: Qd("dailyDrop:open")
        }), "waiting" === md.kind && (0, td.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Qd("dailyDrop:nextIn", {
            count: md.hours
          })
        })]
      })
    }
    var fh = md(3143);
    const Mh = Math.PI / 180;

    function dv(dd) {
      return dd / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Ov(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const Wd = (dd / (2 * Math.PI / md) % md + md) % md;
      let Fd = null,
        Rd = 1 / 0;
      for (let Xd = 0; Xd < md; Xd++) {
        if (!Od[Xd]) continue;
        const dd = Math.abs(Xd - Wd),
          Kd = Math.min(dd, md - dd);
        Kd < Rd && (Fd = Xd, Rd = Kd)
      }
      return Fd
    }

    function mv(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const Wd = Ov(dd, Od, md);
      if (null === Wd) return dd;
      const Fd = dv(Wd, md) - dd;
      return dd + Fd - 2 * Math.PI * Math.round(Fd / (2 * Math.PI))
    }
    const Wv = 32;

    function Fv(dd) {
      if (0 === dd.width || 0 === dd.height) return !0;
      const Od = document.createElement("canvas");
      Od.width = Wv, Od.height = Wv;
      const md = Od.getContext("2d", {
        willReadFrequently: !0
      });
      if (!md) return !0;
      md.drawImage(dd, 0, 0, Wv, Wv);
      const {
        data: Wd
      } = md.getImageData(0, 0, Wv, Wv);
      for (let Fd = 3; Fd < Wd.length; Fd += 4)
        if (Wd[Fd] > 0) return !1;
      return !0
    }

    function Rv(dd) {
      dd.width = 0, dd.height = 0
    }

    function Xv() {
      return "hidden" === document.visibilityState
    }
    async function Kv(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 1e3;
      for (;;) {
        await (Xv() ? new Promise((dd => {
          const Od = () => {
            Xv() || (document.removeEventListener("visibilitychange", Od), dd())
          };
          document.addEventListener("visibilitychange", Od)
        })) : Promise.resolve());
        const md = Math.min(Od(), 1e3);
        if (md <= 0) return null;
        const Wd = await dd.captureFrame(md);
        if (null !== Wd || !Xv()) return null !== Wd && Fv(Wd) ? (Rv(Wd), null) : Wd
      }
    }
    async function hv(dd, Od) {
      const md = performance.now();
      let Wd = 0,
        Fd = Xv() ? md : null;
      const Rd = () => {
          Xv() ? Fd ??= performance.now() : null !== Fd && (Wd += performance.now() - Fd, Fd = null)
        },
        Xd = () => {
          const dd = performance.now();
          return 3e3 - (dd - md - Wd - (null === Fd ? 0 : dd - Fd))
        };
      document.addEventListener("visibilitychange", Rd);
      try {
        let md = await Kv(dd);
        for (; null === md && Od() && Xd() > 0;) md = await Kv(dd, Xd);
        return md
      } finally {
        document.removeEventListener("visibilitychange", Rd)
      }
    }

    function vv(dd) {
      let {
        cosmetics: Od
      } = dd;
      return (0, td.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, td.jsx)(NK.e, {
          cosmetics: Od
        })
      })
    }

    function Qv(dd) {
      let {
        worn: Od,
        KF: md,
        hF: Fd,
        prompting: hd,
        className: vd
      } = dd;
      const {
        t: Qd
      } = (0, Xd.G)(), od = (0, Wd.useRef)(null), [Nd, qd] = (0, Wd.useState)(null), [Hd, yd] = (0, Wd.useState)(!1), [bd, Td] = (0, Wd.useState)(!1), pd = (0, Wd.useRef)([]), Yd = (0, Wd.useRef)(null), gd = (0, Wd.useRef)(0), Ed = (0, Wd.useRef)(null), Jd = (0, Wd.useRef)(!0), Ud = (0, Wd.useCallback)((() => {
        const dd = Yd.current,
          Od = pd.current,
          md = Ov(gd.current, Od),
          Wd = null === md ? null : Od[md],
          Fd = null === dd || void 0 === dd ? void 0 : dd.getContext("2d");
        dd && Wd && Fd && (dd.width === Wd.width && dd.height === Wd.height || (dd.width = Wd.width, dd.height = Wd.height), Fd.clearRect(0, 0, dd.width, dd.height), Fd.drawImage(Wd, 0, 0))
      }), []);
      async function xd(dd, Od) {
        const md = performance.now(),
          Wd = () => od.current === dd;
        let Fd = 0;
        for (const Rd of function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const Od = [],
              md = new Set;
            for (let Wd = dd / 2; Wd >= 1 && Number.isInteger(Wd); Wd /= 2)
              for (let Fd = 0; Fd < dd; Fd += Wd) md.has(Fd) || (md.add(Fd), Od.push(Fd));
            for (let Wd = 0; Wd < dd; Wd++) md.has(Wd) || Od.push(Wd);
            return Od
          }()) {
          if (!Wd()) break;
          dd.turnCamera(dv(Rd));
          const md = 0 === Rd ? await hv(Od, Wd) : await Kv(Od);
          if (!Wd()) {
            null !== md && Rv(md);
            break
          }
          if (null !== md) pd.current[Rd] = md, Fd++, 0 === Rd && qd("stills");
          else if (0 === Rd) break
        }
        Fd > 0 && console.info(`Lucky Skin Block's Before: ${Fd} stills in ${Math.round(performance.now()-md)} ms`)
      }

      function Bd(dd) {
        var Od, md;
        (null === (Od = Ed.current) || void 0 === Od ? void 0 : Od.pointerId) === dd.pointerId && (Ed.current = null, Jd.current || (gd.current = mv(gd.current, pd.current), Ud(), null === (md = od.current) || void 0 === md || md.turnCamera(gd.current)))
      }(0, Wd.useEffect)((() => {
        "stills" === Nd && Ud()
      }), [Nd, Ud]), (0, Wd.useEffect)((() => () => {
        for (const dd of pd.current) dd && Rv(dd);
        pd.current = []
      }), []);
      const Sd = hd && !bd,
        sd = Sd ? {
          onPointerDown: dd => {
            null === Ed.current && (dd.currentTarget.setPointerCapture(dd.pointerId), Ed.current = {
              pointerId: dd.pointerId,
              startX: dd.clientX,
              startTurn: gd.current
            })
          },
          onPointerMove: dd => {
            const Od = Ed.current;
            var md;
            null !== Od && Od.pointerId === dd.pointerId && (gd.current = Od.startTurn - (dd.clientX - Od.startX) * Mh, Ud(), Jd.current || null === (md = od.current) || void 0 === md || md.turnCamera(gd.current))
          },
          onPointerUp: Bd,
          onPointerCancel: Bd
        } : {};
      return (0, td.jsxs)("div", {
        className: Rd()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: Sd
        }, vd),
        children: [(0, td.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, td.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...sd,
            children: ["stills" === Nd && (0, td.jsx)("canvas", {
              ref: Yd,
              className: "DailyDropRevealBeforeStill"
            }), "head" === Nd && (0, td.jsx)(vv, {
              cosmetics: Od
            }), null === Nd && (0, td.jsx)(wd.c, {})]
          }), (0, td.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Qd("dailyDrop:before")
          })]
        }), (0, td.jsx)(Kd.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, td.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, td.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, td.jsx)("div", {
              className: Rd()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: Hd
              }),
              children: (0, td.jsx)(Wd.Suspense, {
                fallback: null,
                children: (0, td.jsx)(gK.e, {
                  onNoWebGl: () => {
                    qd("head"), Td(!0)
                  },
                  ref: od,
                  onReady: () => {
                    var dd, md;
                    null === (dd = od.current) || void 0 === dd || dd.resetCamera(), null === (md = od.current) || void 0 === md || md.setAllCosmetics(Od)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        const dd = od.current;
                        if (!dd) return;
                        const Od = dd.getDevTools();
                        try {
                          Od && await xd(dd, Od)
                        } catch (Rd) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", Rd)
                        } finally {
                          Jd.current = !1
                        }
                        if (od.current !== dd) return;
                        pd.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), (0, om.s)("daily_drop.before_head", "no_front_still"), qd("head")), null === Ed.current && (gd.current = mv(gd.current, pd.current)), dd.turnCamera(gd.current), Ud(), dd.updateCosmetic(md, Fd);
                        const Wd = new Promise((dd => {
                          setTimeout(dd, 1e4)
                        }));
                        await Promise.race([dd.ensureReadyForCapture(md), Wd]).catch((dd => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", dd)
                        })), od.current === dd && yd(!0)
                      }()
                    }))
                  }
                })
              })
            }), bd && (dR.N.includes(md) ? (0, td.jsx)(vv, {
              cosmetics: {
                ...Od,
                [md]: Fd
              }
            }) : (0, td.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,fh.i)(md,Fd).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !Hd && !bd && (0, td.jsx)(wd.c, {}), (0, td.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...sd
            })]
          }), (0, td.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Qd("dailyDrop:after")
          })]
        })]
      })
    }
    const tv = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      ov = {
        opening: 900,
        shrinking: 700
      };

    function Nv(dd) {
      let {
        drop: Od,
        onClose: md
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)(), {
        userContext: hd
      } = (0, qd.d)(), {
        state: Qd,
        view: od
      } = (0, om.A)(), [Nd, Hd] = (0, Wd.useState)("closed"), [yd] = (0, Wd.useState)((() => ({
        ...hd.getPlayerCosmetics()
      }))), [bd] = (0, Wd.useState)((() => (0, om.j)(Od, yd))), [Td, pd] = (0, Wd.useState)(!1), [Yd, gd] = (0, Wd.useState)(!1), [wd] = (0, Wd.useState)((() => null === Qd ? Promise.resolve(null) : bm(Qd))), [Ed, Ud] = (0, Wd.useState)(null), xd = (0, hm.b)(), {
        gameState: Bd
      } = (0, Jd.p)(["gameState"]);
      async function Sd() {
        const dd = await wd;
        xd.current && (null === dd ? (md(), async function(dd) {
          let Od = null;
          try {
            const md = await ym();
            null === dd || dd.remindersOn || null !== Hm.k.getItem(md) || (Od = md)
          } catch (Wd) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", Wd)
          }
          if (null === Od) return void await (0, Nm.n)("dailyDrop");
          const md = Od;
          await (0, Nm.n)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              Hm.k.setItem(md, !0), pm(null)
            }
          })
        }(Qd)) : ((0, Nm.i)(), Ud(dd), Hd("remind")))
      }

      function sd(dd) {
        null !== Ed && function(dd, Od) {
          Hm.k.setItem(dd.askedKey, !0), (0, Km.i)(), (0, om.s)("daily_drop.remind", Od ? "yes" : "no"), Od && pm(dd.requester)
        }(Ed, dd), md()
      }(0, Wd.useEffect)((() => {
        (0, om.s)("daily_drop.reveal_step", Nd)
      }), [Nd]), (0, Wd.useEffect)((() => {
        const dd = ov[Nd];
        if (void 0 === dd) return;
        const Od = setTimeout((() => {
          Hd(tv[Nd])
        }), dd);
        return () => {
          clearTimeout(Od)
        }
      }), [Nd]);
      const ud = Fd(`dailyDrop:kind_${bd.KF}`),
        Vd = Qd && Fd("dailyDrop:collected", {
          count: Qd.collected.length,
          total: Qd.total
        }),
        Ad = "revealed" === Nd || "shrinking" === Nd,
        rd = "equip" !== Nd && "remind" !== Nd;
      return (0, td.jsx)(wF.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === Nd ? () => {
          sd(!1)
        } : md,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, td.jsxs)("div", {
          className: Rd()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === Nd,
            DailyDropRevealShrinking: "shrinking" === Nd,
            DailyDropRevealFiguresShown: "shrinking" === Nd || "equip" === Nd || "remind" === Nd
          }),
          children: [(0, td.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, td.jsx)(Qv, {
              className: "DailyDropRevealStageFigures",
              worn: yd,
              KF: bd.KF,
              hF: bd.hF,
              prompting: !rd
            }), ("closed" === Nd || "opening" === Nd) && (0, td.jsx)(Zh.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === Nd
            }), Ad && (0, td.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, td.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,fh.i)(bd.KF,bd.hF).previewTex}.png`,
                alt: ud,
                draggable: !1
              })
            })]
          }), rd && (0, td.jsxs)(td.Fragment, {
            children: [(0, td.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, td.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Ad ? ud : Fd("dailyDrop:name")
              }), "closed" === Nd && (0, td.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Fd("dailyDrop:tapToOpen")
              }), "revealed" === Nd && (0, td.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Fd("dailyDrop:tapToContinue")
              })]
            }), (0, td.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Fd("closed" === Nd ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Hd(tv[Nd])
              }
            })]
          }), "equip" === Nd && (0, td.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, td.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: ud
            }), (0, td.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Fd("dailyDrop:equipQuestion")
            }), (0, td.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, td.jsx)(vd.g, {
                className: "DailyDropRevealButton",
                disabled: Td,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, om.s)("daily_drop.not_now", Od), Sd()
                },
                children: Fd("dailyDrop:notNow")
              }), (0, td.jsx)(vd.g, {
                className: "DailyDropRevealButton",
                loading: Td,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, om.s)("daily_drop.equip", Od), pd(!0), gd(!1);
                    try {
                      await (0, om.i)(hd, bd.KF, bd.hF)
                    } catch (dd) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", dd), pd(!1), void gd(!0)
                    }
                    await Sd()
                  }()
                },
                children: Fd("dailyDrop:equip")
              })]
            }), Yd && (0, td.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Fd("dailyDrop:equipFailed")
            }), !(0, Jd.f)(Bd) && (0, td.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: Td,
              onClick: () => {
                var dd;
                (0, om.s)("daily_drop.customise", Od), dd = bd.KF, um.j.lQ(HF, dd), Jd.e.set({
                  openEverythingMenuName: VO.m.CUSTOMISATION
                }), md()
              },
              children: [Fd("dailyDrop:customise"), " ", (0, td.jsx)(Kd.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Vd && (0, td.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Vd, "waiting" === (null === od || void 0 === od ? void 0 : od.kind) && ` \xb7 ${Fd("dailyDrop:nextInInline",{count:od.hours})}`]
            })]
          }), "remind" === Nd && (0, td.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, td.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Fd("dailyDrop:remindTitle")
            }), (0, td.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Fd("dailyDrop:remindSubtitle")
            }), (0, td.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, td.jsx)(vd.g, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  sd(!1)
                },
                children: Fd("dailyDrop:remindNo")
              }), (0, td.jsx)(vd.m, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  sd(!0)
                },
                children: Fd("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function qv(dd, Od) {
      const {
        t: md
      } = (0, Xd.G)(), Fd = function(dd, Od) {
        const {
          state: md,
          view: Fd
        } = (0, om.A)(), [Rd, Xd] = (0, Wd.useState)(!1), [Kd, hd] = (0, Wd.useState)(!1), [vd, Qd] = (0, Wd.useState)(null), td = (0, Wd.useRef)(null), od = (0, Wd.useRef)(!1), Nd = Od && "ready" === (null === Fd || void 0 === Fd ? void 0 : Fd.kind);
        (0, Wd.useEffect)((() => {
          dd ? Nd && !od.current && (od.current = !0, (0, om.s)("daily_drop.shown", "tile")) : od.current = !1
        }), [dd, Nd]), (0, Wd.useEffect)((() => {
          dd || (bd(), hd(!1))
        }), [dd]);
        const qd = dd && null === vd && !(0, om.r)(Fd);
        (0, Wd.useEffect)((() => {
          qd && Jd.e.set({
            openEverythingMenuName: VO.m.CUSTOMISATION
          })
        }), [qd]);
        const Hd = (0, Wd.useRef)(!1),
          yd = (0, Wd.useRef)(dd);

        function bd() {
          null !== td.current && (td.current = null, Qd(null))
        }
        return yd.current = dd, {
          state: md,
          view: Fd,
          claiming: Rd,
          claimFailed: Kd,
          reveal: vd,
          open: async function() {
            if (!Hd.current) {
              Hd.current = !0, Xd(!0), hd(!1);
              try {
                const {
                  state: dd,
                  drop: Od
                } = await (0, om.e)();
                if (null === dd || null === Od) return;
                if (!yd.current) return;
                (0, om.s)("daily_drop.open", Od), td.current = {
                  state: dd,
                  drop: Od
                }, Qd(td.current)
              } catch (dd) {
                console.error("Failed to claim the Lucky Skin Block", dd), yd.current && hd(!0)
              } finally {
                Hd.current = !1, Xd(!1)
              }
            }
          },
          closeReveal: bd
        }
      }(dd, Od);
      return {
        shown: (0, om.r)(Fd.view) || null !== Fd.reveal,
        tile: Fd.state && Fd.view && (0, td.jsx)(kh, {
          state: Fd.state,
          view: Fd.view,
          claiming: Fd.claiming,
          onOpen: Fd.open
        }),
        claimFailed: Fd.claimFailed && (0, td.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: md("dailyDrop:claimFailed")
        }),
        reveal: Fd.reveal && (0, td.jsx)(Nv, {
          drop: Fd.reveal.drop,
          onClose: Fd.closeReveal
        })
      }
    }

    function Hv(dd) {
      let {
        show: Od
      } = dd;
      const md = qv(Od, Od);
      return (0, QO.C)(Od && md.shown, (0, QO.D)(), (dd => {
        (0, om.s)("daily_drop.store_only_open", dd)
      })), Od && md.shown ? (0, td.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [md.claimFailed, md.tile && (0, td.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: md.tile
        }), md.reveal]
      }) : null
    }
    var yv = md(3610),
      bv = md(35602),
      Tv = md(35611);

    function pv(dd) {
      let {
        view: Od,
        highlight: md,
        scrollSignal: Fd,
        onScrolledIntoView: Rd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)(), {
        purchaseUnderWay: hd,
        notice: vd,
        needsLogin: Qd,
        buyPack: od
      } = (0, Tv.d)("banner");
      (0, yv.Q)(Od.arm, "banner");
      const Nd = (0, Wd.useRef)(null);
      return (0, Wd.useEffect)((() => {
        var dd;
        Fd > 0 && (null === (dd = Nd.current) || void 0 === dd || dd.scrollIntoView({
          block: "nearest"
        }), Rd())
      }), [Fd]), (0, td.jsxs)("div", {
        ref: Nd,
        className: "NewPlayerDealBanner",
        children: [(0, td.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, td.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: Kd("newPlayerDeal:title")
          }), (0, td.jsx)(bv.c, {
            endsAt: Od.endsAt
          })]
        }), (0, td.jsx)(bv.f, {
          view: Od,
          needsLogin: Qd,
          busy: hd,
          highlight: md,
          onBuy: dd => {
            od(Od, dd)
          }
        }), (0, td.jsx)(hh.j, {
          notice: vd,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    md(35605);
    var Yv = md(3618);

    function gv(dd) {
      let {
        wallet: Od,
        close: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return (0, td.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, td.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, td.jsx)("span", {
            children: Wd("newPlayerDeal:giftable")
          }), (0, td.jsx)(YK.c, {
            amount: (0, CX.c)(Od)
          }), (0, td.jsx)("span", {
            children: Wd("newPlayerDeal:ungiftable")
          }), (0, td.jsx)(YK.c, {
            amount: Od.ungiftable
          })]
        }), (0, td.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: Wd("newPlayerDeal:ungiftableWhy")
        }), (0, td.jsx)(vd.m, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: md,
          children: Wd("general:ok")
        })]
      })
    }

    function wv(dd) {
      XO.NotificationProvider.showCustomPopup({
        body: Od => (0, td.jsx)(gv, {
          wallet: dd,
          close: Od
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const av = {
      kind: "board"
    };
    let Ev = !1;

    function Jv(dd) {
      return "found" === dd.status || "error" === dd.status && "store:giftRecipientLookupFailed" === dd.error ? dd.name : null
    }(0, QO.w)(dO.prefetchBillingOfferings);
    const Uv = (0, Wd.memo)((function(dd) {
      var Od;
      let {
        show: Fd
      } = dd;
      const {
        t: Kd
      } = (0, Xd.G)(), {
        userContext: hd
      } = (0, qd.d)(), vd = (0, ed.usePurchasesAllowed)(), Qd = hd !== Sd.NULL_USER_CONTEXT, od = RK(hd, Fd), [Nd, Hd] = (0, yd.b)(), {
        page: bd,
        urlMode: Td,
        goTo: pd
      } = (0, XK.e)(), Yd = function(dd) {
        return "superRank" === dd.kind ? "superRank" : "pack" === dd.kind ? dd.pack : null
      }(bd), {
        openEverythingMenuName: gd,
        gameState: wd
      } = (0, Jd.p)(["openEverythingMenuName", "gameState"]), Ed = null !== gd, Ud = "landingPage" === wd;
      ! function(dd, Od) {
        const [Fd] = (0, Wd.useState)(vK.i), [Rd, Xd] = (0, Wd.useState)(!1);
        Fd && Od && !Rd && Xd(!0);
        const Kd = (0, IW.C)(),
          hd = Fd && Rd && dd && !Kd;
        (0, Wd.useEffect)((() => {
          if (!hd) return;
          let dd = null,
            Od = null,
            Wd = null;
          const Fd = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, OO.getBillingClient)().purchaseUnderWay,
            Rd = () => {
              var md;
              null === (md = Wd) || void 0 === md || md(), Wd = null, null !== dd && (clearTimeout(dd), dd = null), null !== Od && (clearTimeout(Od), Od = null)
            },
            Xd = () => {
              (0, KK.r)(!1), (0, KK.o)(!1), Rd(), dd = setTimeout((() => {
                dd = null, Wd = (0, hK.e)((() => {
                  Wd = null, Fd() ? Xd() : ((0, KK.r)(!0), Od = setTimeout((() => {
                    Od = null, Wd = (0, hK.e)((() => {
                      Wd = null, Fd() ? Xd() : (0, KK.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => md(5329))).then((dd => {
                    dd.startBackgroundGameSetup()
                  }), (dd => {
                    console.warn("Background game setup: its chunk failed to load", dd)
                  })))
                }))
              }), 2e3)
            };
          for (const md of QK) window.addEventListener(md, Xd, {
            capture: !0,
            passive: !0
          });
          return Xd(), () => {
            for (const dd of QK) window.removeEventListener(dd, Xd, {
              capture: !0
            });
            Rd(), (0, KK.r)(!1), (0, KK.o)(!1)
          }
        }), [hd])
      }(Fd && Ed && Ud, "pack" === bd.kind), (0, Wd.useEffect)((() => {
        Ed && (0, dO.prefetchBillingOfferings)()
      }), [Ed]), (0, Wd.useEffect)((() => {
        Ed && !Fd && Ud && (0, tK.u)()
      }), [Ed, Fd, Ud]);
      const [xd, Bd] = (0, Wd.useState)(0), [sd, ud] = (0, Wd.useState)(null), [Vd, Ad] = (0, Wd.useState)(null), [rd, Gd] = (0, Wd.useState)(null), [nd, Ld] = (0, Wd.useState)(null), [Pd, jd] = (0, Wd.useState)(0), Dd = (0, Wd.useRef)(null), Id = (0, Wd.useRef)(null), ld = (0, Wd.useRef)(null), Cd = (0, Wd.useRef)(!1), Zd = (0, QO.D)(), kd = (0, Wd.useRef)(0);

      function fd() {
        Bd((dd => dd + 1))
      }(0, Wd.useEffect)((() => {
        if (Fd) {
          if (Ev = !0, (0, QO.l)(), Zd && Zd.seq !== kd.current) {
            var dd;
            kd.current = Zd.seq, "loginResume" !== Zd.source && (0, QO.z)();
            const Od = (0, QO.c)(Zd);
            Td || pd(Od), Ld(null !== (dd = Zd.highlight) && void 0 !== dd ? dd : null);
            const md = "newPlayerDeal" === Zd.source || "loginResume" === Zd.source && void 0 !== Zd.highlight && (0, yv.g)(hd).includes(Zd.highlight);
            jd((dd => md ? dd + 1 : 0)), Ad(null), "gift" === Zd.mode && Zd.giftRecipientName ? od.choose(Zd.giftRecipientName, "prefilled") : od.clear(), "gift" !== Zd.mode || Zd.giftRecipientName || fd()
          }
        } else jd(0)
      }), [Fd, Zd]), (0, QO.C)(Fd, Zd, (dd => {
        (0, TO.reportAnalyticsClick)({
          id: "store.open",
          value: dd
        })
      }));
      const Md = (0, yv.O)(),
        mO = null !== nd && null === Md && null === (0, yv.j)((0, yv.c)(hd)) && (0, yv.g)(hd).includes(nd);
      (0, Wd.useEffect)((() => {
        if (!nd) return;
        const dd = setTimeout((() => {
          Ld(null)
        }), mO ? 15e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [nd, mO]), (0, Wd.useLayoutEffect)((() => {
        const dd = Dd.current;
        if (!Fd || !dd) return Id.current = null, void(ld.current = null);
        var Od;
        if (Yd) Id.current = Yd, null === (Od = dd.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Od || Od.focus();
        else if (Id.current) {
          const Od = ld.current;
          null !== Od && (dd.scrollTop = Od);
          const md = dd.querySelector(`[data-store-item="${Id.current}"]`);
          if (md) {
            const Wd = md.getBoundingClientRect(),
              Fd = dd.getBoundingClientRect();
            md.focus({
              preventScroll: null !== Od && Wd.bottom > Fd.top && Wd.top < Fd.bottom
            })
          }
          Id.current = null
        }
      }), [Yd, Fd]), (0, Wd.useEffect)((() => {
        Ad(null)
      }), [od.query]), (0, Wd.useEffect)((() => {
        if (!rd) return;
        const dd = setTimeout((() => {
          Gd(null)
        }), 8e3);
        return () => {
          clearTimeout(dd)
        }
      }), [rd]);
      const WO = hd.superRankInfo,
        FO = hd.isLoggedIn() || (0, ed.guestsMayBuy)(),
        RO = hd.getOwnedCosmeticPacks(),
        XO = (0, OK.j)(od.query),
        KO = (0, OK.c)({
          mode: XO,
          loggedIn: Qd ? FO : null,
          superRankInfo: WO,
          soldTierId: (0, zd.x)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: RO,
          packs: DX.r,
          recipient: od.recipient
        });
      (0, Wd.useEffect)((() => {
        if (!FO || !Fd) return;
        const dd = (0, yv.g)(hd),
          Od = (0, QO.z)((Od => !dd.includes(Od.item))),
          md = Od && (0, OK.h)(Od, DX.r);
        Od && md && ((0, TO.reportAnalyticsClick)({
          id: "store.login_resume",
          value: Od.item
        }), (0, QO.p)(md))
      }), [FO, Fd]);
      const hO = Fd && "gift" === XO,
        vO = (0, Wd.useRef)(hO);
      vO.current = hO;
      const tO = "none" !== od.recipient.status,
        oO = (0, Wd.useRef)(!1);
      (0, Wd.useEffect)((() => {
        hO ? tO && !oO.current && (oO.current = !0, async function(dd) {
          var Od;
          if ("gift" === (null === (Od = (0, Yv.k)()) || void 0 === Od ? void 0 : Od.show)) return void wv(Yv.c);
          const md = await (0, CX.f)();
          null !== md && md.ungiftable > 0 && dd() && wv(md)
        }((() => vO.current))) : oO.current = !1
      }), [hO, tO]);
      const NO = (0, OK.l)({
        superRankDaysLeft: KO.superRankDaysLeft,
        openedThisSession: Ev || Fd,
        seenNewItems: (0, QO.i)()
      });
      (0, Wd.useEffect)((() => {
        (0, QO.x)(NO)
      }), [NO]);
      const qO = "self" === XO,
        HO = qv(Fd, Fd && qO && "board" === bd.kind);
      if (!Fd || !vd) return null;
      const yO = Hd > Nd && Nd <= 700,
        bO = !yO && Hd <= 420,
        pO = "gift" === XO ? Jv(od.recipient) : null,
        YO = null !== sd,
        gO = "gift" === XO ? {
          name: pO,
          cosmetics: od.recipientCosmetics,
          gift: !0
        } : {
          name: Qd && hd.getPlayerName() || null,
          cosmetics: hd.getPlayerCosmetics(),
          gift: !1
        };

      function wO(dd) {
        (0, lX.d)(dd, "gift" === XO ? od.query.trim() : null)
      }

      function aO(dd, Od) {
        (0, TO.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Od?"gift":"self"}:${dd}`
        }), Od && (od.recordGift(Od.name, dd), EO(Od))
      }

      function EO(dd) {
        ! function(dd) {
          try {
            Hm.k.setItem(mK, (0, OK.r)(FK(), dd))
          } catch {}
        }({
          name: dd.name,
          cosmetics: dd.cosmetics
        }), pd(av), Gd((Od => {
          var md;
          return {
            name: dd.name,
            seq: (null !== (md = null === Od || void 0 === Od ? void 0 : Od.seq) && void 0 !== md ? md : 0) + 1
          }
        }))
      }
      async function JO(dd) {
        var Od, md;
        if (Cd.current) return;
        if (!FO) return void wO(dd);
        Ad(null), Ld(null);
        const Wd = "gift" === XO ? {
          name: Jv(od.recipient),
          cosmetics: od.recipientCosmetics
        } : null;
        if (Wd && !Wd.name) return void fd();
        const Fd = "superRank" === dd ? (0, zd.x)(Date.now()).id : (0, eX.e)(dd);
        Cd.current = !0;
        const Rd = await (0, MX.d)(Fd, null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.name) && void 0 !== Od ? Od : null);
        if (Cd.current = !1, !Rd) return;
        ud(dd);
        const Xd = await CX.j.purchase(Fd, null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.name) && void 0 !== md ? md : null, Rd);
        ud(null), Xd ? Ad(Xd) : (aO(dd, Wd), Wd && (0, dK.e)(Fd, Rd, Wd.name), Wd || (await (0, ZX.flushClientAnalyticsEvents)(), (0, IX.refreshWithoutConfirmation)("superRank" === dd ? "/super-rank-welcome" : `/pack-welcome/${dd}`)))
      }
      const UO = Rd()("Store", {
        StoreGift: "gift" === XO,
        StorePortrait: yO,
        StoreCompact: bO
      });
      if ("pack" === bd.kind) {
        const dd = bd.pack,
          Od = KO.packs.find((Od => Od.pack === dd));
        return (0, td.jsx)("div", {
          ref: Dd,
          className: "CosmeticShopContainer",
          children: (0, td.jsx)(fX.g, {
            pack: dd,
            onBack: () => {
              pd(av)
            },
            onPurchased: Od => {
              aO(dd, Od ? {
                name: Od,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === XO && pO && Od && (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsx)(VK, {
                state: Od.state,
                item: dd,
                price: (xO = dd, "superRank" === xO ? (0, zd.x)(Date.now()).price : (0, eX.f)(xO)),
                busy: YO,
                onAct: () => {
                  JO(dd)
                },
                onNeedRecipient: () => {
                  pd(av), fd()
                },
                onLogin: () => {
                  wO(dd)
                },
                highlight: nd === dd
              }), Vd && (0, td.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Kd(Vd)
              })]
            }),
            ownedPacks: RO,
            startAsGift: "gift" === XO,
            initialGiftRecipient: "gift" === XO ? null !== pO && void 0 !== pO ? pO : od.query.trim() : "",
            highlightCta: nd === dd
          }, dd)
        })
      }
      var xO;
      return "superRank" === bd.kind && null !== KO.superRank ? (0, td.jsx)("div", {
        ref: Dd,
        className: Rd()(UO, "StoreDetailView"),
        children: (0, td.jsx)(Dh, {
          state: KO.superRank.state,
          daysLeft: KO.superRankDaysLeft,
          wearer: gO,
          mode: XO,
          giftName: pO,
          busy: YO,
          highlight: "superRank" === nd,
          purchaseError: Vd,
          onBack: () => {
            pd(av)
          },
          onChooseRecipient: () => {
            pd(av), fd()
          },
          onAct: () => {
            JO("superRank")
          },
          onLogin: () => {
            wO("superRank")
          }
        })
      }) : (0, td.jsxs)("div", {
        ref: Dd,
        className: UO,
        onScroll: dd => {
          ld.current = dd.currentTarget.scrollTop
        },
        children: [(0, td.jsx)("div", {
          className: "StoreTopRow",
          children: (0, td.jsx)(TK, {
            selfName: Qd ? hd.getPlayerName() : "",
            giftRecipient: od,
            suggestionsVersion: null !== (Od = null === rd || void 0 === rd ? void 0 : rd.seq) && void 0 !== Od ? Od : 0,
            pulseSignal: xd,
            disabled: YO || !Qd
          })
        }), rd && (0, td.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Gd(null)
          },
          children: [(0, td.jsx)(kX.e, {
            showSignal: rd.seq
          }), OK.b, " ", Kd("store:giftSent", {
            name: rd.name
          })]
        }, rd.seq), !rd && Vd && (0, td.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Kd(Vd)
        }), qO && HO.claimFailed, (0, td.jsx)(ch, {
          layout: KO,
          mountAtOnce: null !== Id.current,
          bundleGift: "gift" === XO ? {
            recipientName: pO,
            lookingUp: "pending" === od.recipient.status,
            busy: YO,
            onNeedRecipient: fd,
            onSent: dd => {
              (0, TO.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), EO({
                name: dd,
                cosmetics: od.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, OK.m)(WO),
          busy: YO,
          highlightItem: nd,
          onOpen: function(dd) {
            (0, TO.reportAnalyticsClick)({
              id: "store.item_open",
              value: dd
            }), pd((0, QO.e)(dd))
          },
          onAct: JO,
          onNeedRecipient: fd,
          onLogin: wO,
          dailyDropTile: qO && HO.tile,
          rankWearer: gO,
          dealBanner: "self" === XO && null !== Md && (0, td.jsx)(pv, {
            view: Md,
            highlight: nd,
            scrollSignal: Pd,
            onScrolledIntoView: () => {
              jd(0)
            }
          })
        }), "gift" !== XO && !(0, cd.e)(Date.now()) && (0, td.jsx)(Ch, {}), HO.reveal]
      })
    }));
    var xv = md(3752),
      Bv = md(9977),
      Sv = md(9799),
      sv = md(3849),
      uv = md(3647),
      Vv = md(3710),
      iv = md(3720),
      Av = md(3722),
      rv = md(3794),
      Gv = md(3782),
      nv = md(3296),
      Lv = md(3361),
      Pv = md(3310),
      zv = md(2178),
      cv = md(3730),
      jv = md(3366);

    function Dv(dd) {
      let {
        show: Od
      } = dd;
      return Od ? (0, td.jsx)(ev, {}) : null
    }

    function ev() {
      const {
        t: dd
      } = (0, Xd.G)(), {
        followsLeader: Od
      } = (0, uv.g)(), {
        loading: md,
        friends: Fd,
        requests: hd,
        invites: Qd
      } = (0, Zd.h)(), {
        userContext: od
      } = (0, qd.d)(), [Nd, Hd] = (0, Wd.useState)(jv.o);
      (0, Wd.useEffect)((() => {
        (0, jv.e)()
      }), []);
      const yd = hd.map((dd => dd.name)),
        {
          state: bd,
          recentRequesters: Td
        } = (0, Gv.q)(),
        pd = new Map([...("loaded" === bd.status ? bd.recentPlayers : []).map((dd => [dd.preview.name, dd])), ...Td.map((dd => [dd.name, dd]))]),
        Yd = (0, Wd.useRef)(null),
        [Ed, Jd] = (0, Wd.useState)(""),
        [Ud, xd] = (0, Wd.useState)("Enter"),
        [Bd, Sd] = (0, Wd.useState)(null);

      function sd() {
        Ed && (xd("Loading"), (0, Pv.j)(Ed, "social_menu").then((dd => {
          if (Yd.current) switch (dd.kind) {
            case "sent":
              xd("Success");
              break;
            case "becameFriends":
              xd("BecameFriends");
              break;
            case "failed":
              Sd(dd.message), xd("Error")
          }
        })))
      }
      return (0, Wd.useEffect)((() => {
        if ("Enter" === Ud || "Loading" === Ud) return;
        const dd = setTimeout((() => {
          Yd.current.value = "", Jd(""), xd("Enter")
        }), "Success" === Ud ? 1e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [Ud]), (0, td.jsx)("div", {
        className: "SocialMenu",
        children: (0, td.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, td.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, td.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, td.jsx)(Av.e, {
                label: dd("socialBar:addFriend")
              }), (0, td.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, td.jsxs)("div", {
                  className: Rd()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Ud}`]: !0
                  }),
                  children: ["Loading" === Ud && (0, td.jsx)(wd.c, {}), "Success" === Ud && (0, td.jsx)(Kd.c, {
                    name: "check"
                  }), "BecameFriends" === Ud && (0, td.jsx)(td.Fragment, {
                    children: dd("socialBar:nowFriends", {
                      playerName: Ed
                    })
                  }), "Error" === Ud && Bd && (0, td.jsx)(td.Fragment, {
                    children: dd(Bd.translationKey, Bd.params)
                  })]
                }), (0, td.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, td.jsx)(gd.c, {
                    className: "PlayerSearchInput",
                    placeholderText: dd("socialBar:enterPlayerName"),
                    domRef: Yd,
                    onValueChange: dd => {
                      Jd((0, Ad.m)(dd)), Yd.current.value = (0, Ad.m)(dd)
                    },
                    onEnter: () => {
                      Ed && (0, TO.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), sd()
                    }
                  }), (0, td.jsxs)(vd.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      sd()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, td.jsx)(Kd.c, {
                      name: "user-plus"
                    }), " ", dd("socialBar:sendRequest")]
                  })]
                })]
              }), (0, td.jsx)(cv.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Qd.length > 0 && (0, td.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, td.jsx)(Av.e, {
                label: dd("socialBar:invites"),
                meta: Qd.length
              }), Qd.map((Od => (0, td.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, td.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, td.jsx)(nv.c, {
                    invite: Od
                  })
                }), (0, td.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, td.jsx)(nv.g, {
                    invite: Od
                  })
                }), (0, td.jsx)(vd.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Lv.f)(Od)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Od.destination.kind}`
                  },
                  children: dd("general:join")
                }), (0, td.jsx)(HO.g, {
                  tooltipInner: (0, td.jsx)(td.Fragment, {
                    children: dd("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, td.jsx)(vd.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Nd || void 0 === Nd ? void 0 : Nd.kind) && Nd.inviteId === Od.id,
                    onClick: () => {
                      Zd.d.declineInvite(Od.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Od.destination.kind}`
                    },
                    children: (0, td.jsx)(Kd.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, Od.id)))]
            }), (0, td.jsxs)("div", {
              className: Rd()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !md && 0 === hd.length
              }),
              children: [(0, td.jsx)(Av.e, {
                label: (0, td.jsxs)(td.Fragment, {
                  children: [(0, td.jsx)(Kd.c, {
                    name: zv.i
                  }), " ", dd("socialBar:requests")]
                }),
                meta: (0, td.jsxs)(td.Fragment, {
                  children: [hd.length, hd.length === yO.s && (0, td.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: dd("socialBar:limitReached")
                  })]
                })
              }), md && (0, td.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, td.jsx)(wd.c, {})
              }), !md && 0 === hd.length && (0, td.jsx)("div", {
                className: "SocialMenuEmpty",
                children: dd("socialBar:noFriendRequests")
              }), !md && hd.length > 0 && (0, td.jsx)("div", {
                className: "PlayerRows",
                children: (0, td.jsx)(bR.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [hd],
                  children: hd.map(((Od, md) => {
                    const Wd = pd.get(Od.name);
                    return (0, td.jsxs)(iv.e, {
                      playerSocialPreview: Od,
                      zIndex: hd.length - md,
                      padDefaultFocus: (0, jv.l)(Nd, Od.name, md),
                      status: Wd && (0, td.jsx)(rv.e, {
                        gameNameWithVariation: Wd.gameNameWithVariation,
                        isPrivateLobby: Wd.isPrivateLobby
                      }),
                      children: [(0, td.jsx)(HO.g, {
                        tooltipInner: (0, td.jsx)(td.Fragment, {
                          children: dd("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, td.jsx)(vd.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Hd((0, jv.i)(yd, md)), (0, Pv.g)(Od.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, td.jsx)(Kd.c, {
                            name: "check"
                          })
                        })
                      }), (0, td.jsx)(HO.g, {
                        tooltipInner: (0, td.jsx)(td.Fragment, {
                          children: dd("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, td.jsx)(vd.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Hd((0, jv.i)(yd, md)), (0, Pv.g)(Od.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, td.jsx)(Kd.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Od.name}_${Od.isError}`)
                  }))
                })
              })]
            }), (0, td.jsx)(rv.l, {})]
          }), (0, td.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, td.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, td.jsx)(Av.e, {
                label: dd("socialBar:party")
              }), (0, td.jsx)(Vv.d, {})]
            }), (0, td.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, td.jsx)(Av.e, {
                label: (0, td.jsxs)(td.Fragment, {
                  children: [(0, td.jsx)(Kd.c, {
                    name: zv.e
                  }), " ", dd("socialBar:friends")]
                }),
                meta: (0, td.jsxs)(td.Fragment, {
                  children: [Fd.length, Fd.length >= (0, yO.d)(od.getPlayerRanks()) && (0, td.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: dd("socialBar:limitReached")
                  })]
                })
              }), md && (0, td.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, td.jsx)(wd.c, {})
              }), !md && 0 === Fd.length && (0, td.jsx)("div", {
                className: "SocialMenuEmpty",
                children: dd("socialBar:noFriends")
              }), !md && Fd.length > 0 && (0, td.jsx)("div", {
                className: "PlayerRows",
                children: (0, td.jsx)(bR.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Fd],
                  children: Fd.map(((dd, md) => (0, td.jsx)(iv.e, {
                    playerSocialPreview: dd,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: dd => {
                      Zd.d.removeFriendFromState(dd)
                    },
                    zIndex: Fd.length - md,
                    children: (0, td.jsx)(iv.c, {
                      friend: dd,
                      followsLeader: Od,
                      analyticsSurface: "social_menu"
                    })
                  }, `${dd.name}_${dd.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Iv = md(3560),
      lv = md(4862),
      Cv = md(1988),
      Zv = md(4853),
      kv = md(4866);

    function fv(dd) {
      let {
        count: Od,
        claiming: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return 0 === Od ? null : (0, td.jsx)(vd.m, {
        className: "SeasonPassClaimAllButton",
        loading: md,
        onClick: () => {
          lv.f.claimAll().catch((dd => {
            console.error("Failed to claim all season pass rewards", dd)
          }))
        },
        children: Wd("seasonPass:claimAll", {
          count: Od
        })
      })
    }

    function Mv(dd) {
      let {
        view: Od,
        claiming: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)(), {
        userContext: Fd
      } = (0, qd.d)(), {
        config: Rd,
        state: hd,
        tier: vd,
        xpIntoTier: Qd,
        xpForNextTier: od
      } = Od, Nd = Date.now(), Hd = (0, kv.k)(Od, Nd), yd = vd >= Rd.tierCount, bd = Hd && !yd && od > 0, Td = od > 0 && !yd ? Math.min(100, Qd / od * 100) : 100, pd = hd.xpToday >= Rd.maxXpPerDay, Yd = null !== Od.xpBoost && Od.xpBoost.endsAtMs > Nd && !pd ? Od.xpBoost : null;
      return (0, td.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, td.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, td.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: Wd("seasonPass:title", {
              season: hd.seasonNumber
            })
          })
        }), (0, td.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, td.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, td.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: Wd("seasonPass:tier"),
              "aria-label": `${Wd("seasonPass:tier")} ${vd}`,
              children: vd
            }), (0, td.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(Td),
              children: [(0, td.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${Td}%`
                }
              }), (0, td.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [yd && Wd("seasonPass:passComplete"), bd && Wd("seasonPass:xpProgress", {
                  xp: Qd,
                  xpForNextTier: od
                })]
              })]
            }), bd && (0, td.jsxs)(td.Fragment, {
              children: [(0, td.jsx)(Kd.c, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, td.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: vd + 1
              })]
            })]
          }), (0, td.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, td.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, td.jsx)(Kd.c, {
                name: "hourglass"
              }), " ", Hd ? Wd("seasonPass:endsIn", {
                time: (0, Zv.e)((Od.endsAtMs - Nd) / 6e4)
              }) : (0, LK.e)(Od.claimEndsAtMs, Wd, Nd)]
            }), Hd && !yd && (0, td.jsx)("span", {
              className: pd ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: pd ? Wd("seasonPass:dailyCapReached") : Wd("seasonPass:dailyXp", {
                xp: hd.xpToday,
                cap: Rd.maxXpPerDay
              })
            }), Hd && !yd && Yd && (0, td.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, td.jsx)(Kd.c, {
                name: "angles-up"
              }), " ", Wd("seasonPass:xpBoostActive", {
                multiplier: Yd.multiplier,
                time: (0, Zv.e)(Math.ceil((Yd.endsAtMs - Nd) / 6e4))
              })]
            }), Hd && !yd && !pd && !Yd && (0, td.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: Wd("seasonPass:playToEarn")
            }), Fd.type === Cv.e.ANONYMOUS && (0, td.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: Wd("seasonPass:logInToKeep")
            })]
          })]
        }), (0, td.jsx)(fv, {
          count: Od.claimable.length,
          claiming: md
        })]
      })
    }
    var dQ = md(4276),
      OQ = md(4280);

    function mQ(dd) {
      return null !== (0, LK.p)(dd) || null !== (0, LK.l)(dd)
    }
    let WQ = null;

    function FQ() {
      var dd;
      null === (dd = WQ) || void 0 === dd || dd.tearDownNotification()
    }

    function RQ(dd) {
      let {
        reward: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)(), {
        userContext: Wd
      } = (0, qd.d)(), Fd = (0, LK.p)(Od);
      return (0, td.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, td.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, LK.h)(Od, md)
        }), null !== Fd && (0, td.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, td.jsx)(dQ.d, {
            profileEffect: Fd,
            name: Wd.getPlayerName(),
            cosmetics: Wd.getPlayerCosmetics()
          })
        }), null === Fd && (0, td.jsx)(XQ, {
          reward: Od
        })]
      })
    }

    function XQ(dd) {
      let {
        reward: Od
      } = dd;
      const {
        userContext: md
      } = (0, qd.d)(), Fd = (0, Wd.useRef)(null), {
        previewEmote: Rd,
        playEmote: Xd
      } = (0, OQ.b)(), Kd = (0, Wd.useMemo)((() => (0, LK.l)(Od)), [Od]), hd = Kd.emote;
      return (0, td.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, td.jsx)(Wd.Suspense, {
          fallback: (0, td.jsx)(wd.c, {}),
          children: (0, td.jsx)(gK.e, {
            ref: Fd,
            framing: "store",
            forcedCosmetics: Kd.cosmetics,
            hK: Rd.id,
            emotePlaySeq: Rd.seq,
            onReady: () => {
              var dd, Od;
              null === (dd = Fd.current) || void 0 === dd || dd.resetCamera(), null === (Od = Fd.current) || void 0 === Od || Od.setAllCosmetics(md.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== hd && Xd(hd)
            }
          })
        })
      })
    }

    function KQ(dd) {
      let {
        waitingCount: Od
      } = dd;
      const {
        t: md
      } = (0, Xd.G)();
      return (0, ed.usePurchasesAllowed)() ? (0, td.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [Od > 0 && (0, td.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === Od ? md("seasonPass:hyperRewardWaiting") : md("seasonPass:hyperRewardsWaiting", {
            count: Od
          })
        }), (0, td.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, td.jsxs)(vd.v, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, QO.p)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, td.jsx)(zd.e, {}), " ", md("homePage:getHyperRank")]
          }), Od > 0 && (0, td.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: Od
          })]
        })]
      }) : null
    }
    var hQ = md(35616);

    function vQ(dd) {
      let {
        stub: Od,
        name: md
      } = dd;
      const {
        t: Wd
      } = (0, Xd.G)();
      return (0, td.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, td.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: Od
        }), (0, td.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, td.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: Wd("seasonPass:trackTicketPass")
          }), (0, td.jsx)("span", {
            className: "SeasonPassTicketName",
            children: md
          })]
        })]
      })
    }

    function QQ(dd) {
      var Od, md;
      let {
        view: Fd,
        claimingKeys: Rd,
        hyperWaitingCount: hd,
        onClaim: vd
      } = dd;
      const {
        t: Qd
      } = (0, Xd.G)(), od = (0, Wd.useRef)(null), {
        config: Nd,
        tier: qd,
        xpIntoTier: Hd,
        xpForNextTier: yd,
        state: bd
      } = Fd, Td = (0, kv.k)(Fd), pd = (0, Wd.useRef)(!1), Yd = null !== (Od = null === (md = Fd.claimable[0]) || void 0 === md ? void 0 : md.tier) && void 0 !== Od ? Od : Math.min(qd + 1, Nd.tierCount);
      (0, Wd.useLayoutEffect)((() => {
        if (pd.current) return;
        const dd = od.current,
          Od = dd.querySelector(`[data-tier="${Yd}"]`).getBoundingClientRect(),
          md = dd.getBoundingClientRect();
        dd.scrollLeft += Od.left - md.left - .3 * dd.clientWidth, dd.scrollTop += Od.top - md.top - .3 * dd.clientHeight
      }), [Yd]), (0, Wd.useEffect)((() => {
        const dd = od.current;

        function Od(Od) {
          pd.current = !0, Math.abs(Od.deltaY) <= Math.abs(Od.deltaX) || dd.scrollWidth <= dd.clientWidth || (Od.preventDefault(), dd.scrollLeft += Od.deltaY)
        }
        return dd.addEventListener("wheel", Od, {
          passive: !1
        }), () => {
          dd.removeEventListener("wheel", Od)
        }
      }), []);
      const gd = yd > 0 ? Hd / yd : 1;
      return (0, td.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, td.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, td.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, td.jsx)(vQ, {
              stub: (0, td.jsx)(zd.e, {}),
              name: Qd("seasonPass:hyperTrack")
            }), !bd.hasHyperRank && (0, td.jsx)(KQ, {
              waitingCount: hd
            })]
          }), (0, td.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, td.jsx)(vQ, {
              stub: (0, td.jsx)(Kd.c, {
                name: "star"
              }),
              name: Qd("seasonPass:freeTrack")
            }), (0, td.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: Qd("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, td.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: od,
          onPointerDown: () => {
            pd.current = !0
          },
          children: (0, td.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: Nd.tiers.map((dd => {
              const Od = dd.tier,
                md = function(dd, Od, md) {
                  if (dd <= Od) return "reached";
                  return md && dd === Od + 1 ? "earning" : "locked"
                }(Od, qd, Td),
                Wd = "earning" === md;
              return (0, td.jsx)(tQ, {
                tierRewards: dd,
                nodeState: md,
                progress: Wd ? gd : 0,
                freeState: Fd.tileState({
                  tier: Od,
                  track: "free"
                }),
                hyperState: Fd.tileState({
                  tier: Od,
                  track: "hyper"
                }),
                freeClaiming: Rd.has((0, kv.l)({
                  tier: Od,
                  track: "free"
                })),
                hyperClaiming: Rd.has((0, kv.l)({
                  tier: Od,
                  track: "hyper"
                })),
                hasHyperRank: bd.hasHyperRank,
                onClaim: vd
              }, Od)
            }))
          })
        })]
      })
    }
    const tQ = (0, Wd.memo)((function(dd) {
      let {
        tierRewards: Od,
        nodeState: md,
        progress: Wd,
        freeState: Fd,
        hyperState: Xd,
        freeClaiming: Kd,
        hyperClaiming: hd,
        hasHyperRank: vd,
        onClaim: Qd
      } = dd;
      const {
        tier: od
      } = Od;
      return (0, td.jsxs)("div", {
        className: Rd()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== md
        }),
        "data-tier": od,
        children: [(0, td.jsx)(oQ, {
          tier: od,
          track: "hyper",
          reward: Od.hyper,
          tileState: Xd,
          claiming: hd,
          padlock: !vd && "claimed" !== Xd,
          onClaim: Qd
        }), (0, td.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, td.jsx)("span", {
            className: Rd()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === md
            }),
            children: "earning" === md && (0, td.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * Wd + "%"
              }
            })
          }), (0, td.jsx)("span", {
            className: Rd()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === md
            })
          }), (0, td.jsx)(hQ.d, {
            tier: od,
            state: md,
            progress: Wd
          })]
        }), (0, td.jsx)(oQ, {
          tier: od,
          track: "free",
          reward: Od.free,
          tileState: Fd,
          claiming: Kd,
          padlock: !1,
          onClaim: Qd
        })]
      })
    }));

    function oQ(dd) {
      let {
        tier: Od,
        track: md,
        reward: Wd,
        tileState: Fd,
        claiming: Rd,
        padlock: Xd,
        onClaim: Kd
      } = dd;
      return Wd ? (0, td.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${md}`,
        children: (0, td.jsx)(eK.e, {
          reward: Wd,
          tileState: Fd,
          track: md,
          size: "large",
          onClaim: () => {
            Kd({
              tier: Od,
              track: md
            })
          },
          claiming: Rd,
          padlock: Xd,
          onPreview: mQ(Wd) ? () => {
            ! function(dd) {
              const Od = XO.NotificationProvider.showCustomPopup({
                body: (0, td.jsx)(RQ, {
                  reward: dd
                })
              });
              WQ = Od, Od.getResult().finally((() => {
                WQ === Od && (WQ = null)
              }))
            }(Wd)
          } : void 0
        })
      }) : (0, td.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${md}`
      })
    }

    function NQ(dd) {
      let {
        show: Od
      } = dd;
      return Od ? (0, td.jsx)(qQ, {}) : null
    }

    function qQ() {
      const {
        t: dd
      } = (0, Xd.G)(), Od = (0, lv.g)();
      return (0, Wd.useEffect)((() => FQ), []), (0, td.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === Od.status && (0, td.jsx)(wd.c, {}), "error" === Od.status && (0, td.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, td.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: dd("seasonPass:errorLoad")
          }), (0, td.jsx)(vd.g, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              lv.f.retry()
            },
            children: dd("seasonPass:retry")
          })]
        }), "noSeason" === Od.status && (0, td.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, td.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, LK.g)(dd)
          })
        }), "loaded" === Od.status && (0, td.jsx)(HQ, {
          view: Od.view,
          claimingKeys: Od.claimingKeys
        })]
      })
    }

    function HQ(dd) {
      let {
        view: Od,
        claimingKeys: md
      } = dd;
      const Wd = Od.config.tiers.filter((dd => "needsHyper" === Od.tileState({
          tier: dd.tier,
          track: "hyper"
        }))).length,
        Fd = md.size > 0;
      return (0, td.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, td.jsx)(Mv, {
          view: Od,
          claiming: Fd
        }), (0, td.jsx)(QQ, {
          view: Od,
          claimingKeys: md,
          hyperWaitingCount: Wd,
          onClaim: yQ
        }), (0, td.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, td.jsx)(fv, {
            count: Od.claimable.length,
            claiming: Fd
          }), !Od.state.hasHyperRank && (0, td.jsx)(KQ, {
            waitingCount: Wd
          })]
        })]
      })
    }

    function yQ(dd) {
      lv.f.claim(dd).catch((dd => {
        console.error("Failed to claim season pass reward", dd)
      }))
    }
    var bQ = md(5455);
    var TQ = md(4026);
    const pQ = dd => {
        let {
          action: Od,
          padAction: md
        } = dd;
        const {
          isTouchScreen: Wd
        } = (0, Jd.p)(["isTouchScreen"]), Fd = (0, IW.C)();
        return Wd && !Fd ? null : (0, td.jsx)(LW.b, {
          className: "EverythingMenuTabKey",
          noaAction: Od,
          padHidesKey: !0,
          padMenuShortcut: md
        })
      },
      YQ = (0, Wd.memo)((function() {
        const {
          t: dd
        } = (0, Xd.G)(), {
          gameState: Od,
          openEverythingMenuName: md,
          crosshairGameView: Fd,
          everythingMenuOverLoadingScreen: Kd
        } = (0, Jd.p)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: hd
        } = (0, qd.d)(), Qd = (0, tF.j)(Date.now()), od = (0, ed.usePurchasesAllowed)(), Nd = (0, QO.F)(), {
          view: Hd
        } = (0, om.A)(), yd = "dot" === Nd || null === Nd && "ready" === (null === Hd || void 0 === Hd ? void 0 : Hd.kind), Td = (dd, Od) => (0, td.jsx)(pQ, {
          action: dd,
          padAction: Od
        }), [pd, Yd] = (0, Wd.useState)(null), gd = (0, Wd.useRef)(null), wd = (0, Wd.useRef)(null);
        (0, Wd.useEffect)((() => {
          var dd;
          const Od = null === (dd = wd.current) || void 0 === dd ? void 0 : dd.querySelector(".EverythingMenuTabActive");
          null === Od || void 0 === Od || Od.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [md]);
        const Ed = {
            ..."inGame" === Od ? {} : (0, vd.X)({
              focusOnClick: !1
            }),
            ...pF.g
          },
          Ud = dd => {
            const Od = (0, YF.i)((Od => {
              (0, vd.W)(Od.currentTarget), Jd.e.set({
                openEverythingMenuName: dd
              })
            }), "pointerup");
            return {
              ...Ed,
              onPointerDown: dd => {
                Ed.onPointerDown(dd), Od.onPointerDown(dd)
              },
              onPointerUp: dd => {
                Ed.onPointerUp(dd), Od.onPointerUp(dd)
              },
              onClick: Od.onClick
            }
          },
          xd = null !== md;
        (0, Wd.useEffect)((() => {
          md === VO.m.CUSTOMISATION ? (0, TO.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, pK.g)()
          }) : null === md && Jd.e.get("everythingMenuOverLoadingScreen") && Jd.e.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [md]);
        const Sd = md !== VO.m.COSMETIC_SHOP && !Fd;
        async function sd() {
          await async function() {
            if (!pd) return;
            await pd(), Yd(null)
          }(), Jd.e.set({
            openEverythingMenuName: null
          })
        }
        const ud = (0, Wd.useRef)(null),
          Vd = (0, Wd.useCallback)((() => null !== ud.current && (0, Sv.f)(ud.current)), []);

        function Ad() {
          Vd() || sd()
        }(0, Wd.useEffect)((() => (0, nX.r)(Vd)), [Vd]);
        const rd = (0, Wd.useMemo)((() => "inGame" === Od ? {
            text: dd("settingsMenu:exitGame"),
            onClick: () => {
              (0, Bv.e)()
            }
          } : (0, Bd.isDiscordClient)() ? {
            text: dd("settingsMenu:exitGame"),
            onClick: () => {
              uO.q.discordActivity().then((dd => {
                dd.exit("User exited the game")
              }))
            }
          } : null), [Od, dd]),
          Gd = xd && !Fd,
          nd = "inGame" !== Od,
          Ld = Gd && nd;
        (0, Wd.useLayoutEffect)((() => {
          if (Ld) return Jd.e.set({
            menuCoversPage: !0
          }), () => {
            Jd.e.set({
              menuCoversPage: !1
            })
          }
        }), [Ld]);
        const Pd = (0, Wd.useRef)(null);
        ! function(dd, Od) {
          (0, Wd.useEffect)((() => {
            var md;
            const Wd = (0, bQ.f)();
            if (!Od || null === Wd || !(0, bQ.d)({
                site: Bd.siteUsed,
                isMobileApp: (0, bd.isMobileApp)(),
                isTouchScreen: Jd.e.get("isTouchScreen")
              })) return;
            const Fd = null === (md = dd.current) || void 0 === md ? void 0 : md.querySelector(".EverythingMenuBackButton");
            return Fd ? Wd(Fd) : void 0
          }), [dd, Od])
        }(Pd, Gd && !(0, nX.k)(md) && "inGame" === Od);
        const zd = (0, td.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Ad,
          children: (0, td.jsx)(vd.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, td.jsx)(gF.b, {
          showing: xd,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: md === VO.m.SHOP,
          doGameplayStartStopOnShow: "inGame" === Od,
          children: (0, td.jsx)(aF.e, {
            className: Rd()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: Kd
            }),
            show: Gd,
            children: (0, td.jsx)(wF.c, {
              close: Ad,
              togglePointerLock: !1,
              children: (0, td.jsxs)("div", {
                className: "EverythingMenu",
                ref: Pd,
                children: [!(0, nX.k)(md) && (0, td.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, td.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [rd && (0, td.jsx)(vd.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        rd.onClick()
                      },
                      children: rd.text
                    }), xd && od && (0, td.jsx)("div", {
                      ...Ed,
                      className: "EverythingMenuWallet",
                      title: dd("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, QO.p)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, td.jsx)(xv.g, {})
                    })]
                  }), (0, td.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: wd,
                    "data-pad-tabs": "1",
                    children: [(0, td.jsxs)("div", {
                      ...Ud(VO.m.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.SETTINGS ? "true" : void 0,
                      className: Rd()("EverythingMenuTab", {
                        EverythingMenuTabActive: md === VO.m.SETTINGS
                      }),
                      children: [dd("general:settings"), Td("OpenSettings", "pause")]
                    }), (0, td.jsxs)("div", {
                      ...Ud(VO.m.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.CUSTOMISATION ? "true" : void 0,
                      className: Rd()("EverythingMenuTab", {
                        EverythingMenuTabActive: md === VO.m.CUSTOMISATION
                      }),
                      children: [dd("general:player"), Td("OpenCharacterCustomization")]
                    }), bd.featureFlags.useSocialFeatures && (0, td.jsxs)("div", {
                      ...Ud(VO.m.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.SOCIAL ? "true" : void 0,
                      className: Rd()("EverythingMenuTab", {
                        EverythingMenuTabActive: md === VO.m.SOCIAL
                      }),
                      ...(0, TO.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, md === VO.m.SOCIAL),
                      children: [dd("socialBar:social"), (0, td.jsx)(Iv.d, {})]
                    }), Qd && (0, td.jsx)("div", {
                      ...Ud(VO.m.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.SEASON_PASS ? "true" : void 0,
                      className: Rd()("EverythingMenuTab", {
                        EverythingMenuTabActive: md === VO.m.SEASON_PASS
                      }),
                      children: dd("seasonPass:title", {
                        season: Qd.seasonNumber
                      })
                    }), (0, om.r)(Hd) && (0, td.jsxs)("div", {
                      ...Ud(VO.m.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.COSMETIC_SHOP ? "true" : void 0,
                      className: Rd()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: md === VO.m.COSMETIC_SHOP
                      }),
                      children: [(0, td.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: dd("store:title")
                      }), "new" === Nd && (0, td.jsx)(Bh, {}), yd && (0, td.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Od && (0, td.jsxs)("div", {
                      ...Ud(VO.m.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": md === VO.m.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Rd()("EverythingMenuTab", {
                        EverythingMenuTabActive: md === VO.m.LOBBY_LEADERBOARD
                      }),
                      children: [dd("general:lobby"), Td("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, td.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: zd
                  })]
                }), (0, nX.k)(md) && zd, (0, td.jsxs)("div", {
                  ref: ud,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": nd ? "1" : "0.85"
                  },
                  children: [(0, td.jsx)(vF, {
                    show: md === VO.m.SETTINGS,
                    setBeforeResumeCallback: Yd
                  }), (0, td.jsx)(yF, {
                    show: md === VO.m.CUSTOMISATION
                  }), (0, td.jsx)(Wd.Suspense, {
                    fallback: null,
                    children: (0, td.jsx)(SX, {
                      show: md === VO.m.SHOP
                    })
                  }), (0, td.jsx)(cX, {
                    show: md === VO.m.LOBBY_LEADERBOARD
                  }), od && (0, td.jsx)(Uv, {
                    show: md === VO.m.COSMETIC_SHOP
                  }), !od && (0, td.jsx)(Hv, {
                    show: md === VO.m.COSMETIC_SHOP
                  }), (0, td.jsx)(Dv, {
                    show: md === VO.m.SOCIAL
                  }), (0, td.jsx)(NQ, {
                    show: md === VO.m.SEASON_PASS
                  })]
                }), !(0, bd.isMobileApp)() && (0, TQ.j)() && (0, EF.e)(hd.getPlayerRanks()) && (0, td.jsx)(aF.e, {
                  ref: gd,
                  className: "EverythingMenuBannerDiv",
                  show: Sd,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, td.jsx)(sv.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: gd
                    },
                    showing: xd && Sd,
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
  35538: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(405),
      Fd = md(35541);

    function Rd(dd, Od, md) {
      const Rd = Object.entries(Od).sort(((dd, Od) => Od[1] - dd[1])),
        Xd = (0, Wd.ib)(dd);
      Xd.push(dd ? "\n\n" : "\n");
      for (const [Fd, qd] of Rd) {
        var Kd, hd, vd;
        const dd = null !== (Kd = null === md || void 0 === md || null === (hd = md[Fd]) || void 0 === hd ? void 0 : hd.icon) && void 0 !== Kd ? Kd : `${Fd} Enchantment`;
        Xd.push({
          icon: dd,
          style: {
            fontSize: "1.5rem"
          }
        }), Xd.push({
          str: `${Fd} ${null!==(vd=(0,Wd.K)(qd))&&void 0!==vd?vd:qd}\n`
        })
      }
      Xd.push({
        str: "\n"
      });
      for (const [Wd, qd] of Rd) {
        var Qd, td, od, Nd;
        const dd = null !== (Qd = null === md || void 0 === md || null === (td = md[Wd]) || void 0 === td ? void 0 : td.icon) && void 0 !== Qd ? Qd : `${Wd} Enchantment`,
          Od = null !== (od = null === md || void 0 === md || null === (Nd = md[Wd]) || void 0 === Nd ? void 0 : Nd.description) && void 0 !== od ? od : (0, Fd.i)(Wd);
        Xd.push({
          icon: dd,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Xd.push({
          str: Od,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Xd.push({
          str: "\n"
        })
      }
      return Xd
    }
  },
  35545: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      e: () => Td,
      g: () => yd,
      j: () => hd,
      n: () => bd,
      r: () => Qd,
      s: () => od,
      u: () => Hd,
      v: () => td
    });
    var Wd = md(387),
      Fd = md(701),
      Rd = md(405),
      Xd = md(2976),
      Kd = md(35538);

    function hd(dd, Od) {
      var md;
      let {
        player: Wd,
        chestOrCreative: Fd
      } = dd;
      var Rd;
      return Od < Wd.length ? null !== (Rd = Wd[Od]) && void 0 !== Rd ? Rd : null : null !== (md = Fd[Od - Wd.length]) && void 0 !== md ? md : null
    }

    function vd(dd) {
      var Od;
      return null !== (Od = dd.amount) && void 0 !== Od ? Od : 0
    }

    function Qd(dd) {
      return 0 === dd.button || void 0 === dd.button
    }

    function td(dd) {
      return !!dd.shiftKey
    }

    function od(dd) {
      return "touches" in dd || "touch" === dd.pointerType || "pen" === dd.pointerType
    }
    const Nd = new Set,
      qd = 50;

    function Hd(dd, Od) {
      var md;
      const Wd = null === (md = dd[Od]) || void 0 === md ? void 0 : md.displayName;
      return (0, Fd.O)(Wd) ? "string" !== typeof Od ? "" : (!Nd.has(Od) && Nd.size < qd && (Nd.add(Od), console.warn(`No item called "${Od}", so its hover shows the name as given`)), Od) : Wd
    }

    function yd(dd, Od, md) {
      var hd, vd, Qd, td, od, Nd, qd, yd, bd, Td, pd, Yd, gd, wd;
      const Ed = dd.attributes,
        Jd = null !== (hd = null === (vd = Od[dd.name]) || void 0 === vd ? void 0 : vd.rootName) && void 0 !== hd ? hd : dd.name,
        Ud = null !== (Qd = null !== (td = Ed.customDisplayName) && void 0 !== td ? td : null === (od = Od[dd.name]) || void 0 === od ? void 0 : od.displayName) && void 0 !== Qd ? Qd : Hd(Od, Jd);
      let xd = Ud;
      const Bd = null === (Nd = Ed.customAttributes) || void 0 === Nd ? void 0 : Nd.enchantmentTier;
      Bd && (xd = (0, Rd.ib)(Ud, {
        colour: Rd.ab[Bd]
      }));
      const Sd = null !== (qd = null !== (yd = null !== (bd = function(dd, Od) {
        var md;
        if (void 0 === dd || null !== (md = Od.customAttributes) && void 0 !== md && md.author) return dd;
        const Fd = (0, Wd.dc)(dd);
        return Fd.every((dd => "string" === typeof dd)) ? dd : Fd.map((dd => "string" === typeof dd ? dd : {
          icon: dd.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Ed.customDescription, Ed)) && void 0 !== bd ? bd : null === (Td = Od[dd.name]) || void 0 === Td ? void 0 : Td.description) && void 0 !== yd ? yd : null === (pd = Od[Jd]) || void 0 === pd ? void 0 : pd.description) && void 0 !== qd ? qd : "";
      let sd = Sd;
      if (null !== (Yd = Ed.customAttributes) && void 0 !== Yd && Yd.enchantments) sd = (0, Kd.c)(Sd, Ed.customAttributes.enchantments, Ed.customAttributes.enchantmentData);
      else if (md[Jd]) sd = (0, Rd.ib)(Sd), sd.push({
        str: "\n"
      }), sd.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (gd = Ed.customAttributes) && void 0 !== gd && gd.mobSettings) {
        var ud, Vd;
        const dd = Ed.customAttributes.mobSettings;
        var Ad, rd;
        if (sd = [], (0, Fd.O)(Ed.customAttributes.health) || (sd.push({
            str: "\n"
          }), sd.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), sd.push({
            str: " "
          }), sd.push({
            str: Ed.customAttributes.health.toString()
          }), (0, Fd.O)(dd.maxHealth) || (sd.push({
            str: "/"
          }), sd.push({
            str: dd.maxHealth.toString()
          }))), !(0, Fd.O)(dd.attackDamage) && dd.attackDamage > 0 && (sd.push({
            str: "\n"
          }), sd.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), sd.push({
            str: " "
          }), sd.push({
            str: dd.attackDamage.toString()
          })), !(0, Fd.O)(dd.secondaryAttackDamage) && dd.secondaryAttackDamage > 0 && (sd.push({
            str: "\n"
          }), sd.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), sd.push({
            str: " "
          }), sd.push({
            str: dd.secondaryAttackDamage.toString()
          })), (0, Fd.O)(dd.baseRunningSpeed) || (sd.push({
            str: "\n"
          }), sd.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), sd.push({
            str: " "
          }), sd.push({
            str: dd.baseRunningSpeed.toFixed(2)
          })), "Saddled" === dd.metaInfo) sd.push({
          str: "\n"
        }), sd.push({
          str: {
            translationKey: "general:has"
          }
        }), sd.push({
          str: " "
        }), sd.push({
          icon: null !== (Ad = null === (rd = dd.tameInfo) || void 0 === rd ? void 0 : rd.saddleItemName) && void 0 !== Ad ? Ad : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (sd.push({
            str: "\n"
          }), sd.push({
            str: "\n"
          }), dd.petInfo && null !== (ud = dd.tameInfo) && void 0 !== ud && ud.supportsFriendship) {
          const Od = Xd.b.getIconsFromFriendshipPoints(dd.petInfo.friendshipPoints);
          for (const dd of Od) sd.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          sd.push({
            str: "\n"
          });
          const md = Xd.b.getMobHungerLevel(dd.petInfo.lastFedAt);
          for (const dd of Xd.b.hungerLevelIcons[md]) sd.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          sd.push({
            str: " "
          }), sd.push({
            str: Xd.b.hungerLevelTranslations[md],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (dd.tameInfo && null !== (Vd = dd.tameInfo) && void 0 !== Vd && Vd.supportsFriendship) {
          var Gd, nd;
          let Od = null !== (Gd = dd.tameInfo.likedFoods) && void 0 !== Gd ? Gd : [];
          sd.push({
            str: "\n"
          }), sd.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xd.b.feedTextColours[Xd.b.MobFoodType.Superliked]
            }
          }), sd.push({
            str: " "
          }), null !== (nd = dd.petInfo) && void 0 !== nd && nd.superlikedFoodKnown ? (sd.push({
            icon: dd.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Od = Od.filter((Od => Od !== dd.petInfo.superlikedFood))) : sd.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), sd.push({
            str: "\n"
          }), sd.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xd.b.feedTextColours[Xd.b.MobFoodType.Liked]
            }
          }), sd.push({
            str: " "
          });
          for (const dd of Od) sd.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          sd.push({
            str: "\n"
          }), sd.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xd.b.feedTextColours[Xd.b.MobFoodType.Neutral]
            }
          }), sd.push({
            str: " "
          });
          for (const md of null !== (Ld = dd.tameInfo.neutralFoods) && void 0 !== Ld ? Ld : []) {
            var Ld;
            sd.push({
              icon: md,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          sd.push({
            str: "\n"
          }), sd.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xd.b.feedTextColours[Xd.b.MobFoodType.Disliked]
            }
          }), sd.push({
            str: " "
          });
          for (const md of null !== (Pd = dd.tameInfo.dislikedFoods) && void 0 !== Pd ? Pd : []) {
            var Pd;
            sd.push({
              icon: md,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        sd.length > 0 ? (sd.shift(), sd.unshift(...(0, Rd.ib)(Sd))) : sd = (0, Rd.ib)(Sd)
      }
      return {
        name: xd,
        desc: sd,
        fontStyle: null !== (wd = Ed.customAttributes) && void 0 !== wd && wd.author ? "italic" : "normal"
      }
    }

    function bd(dd, Od, md, Wd) {
      const Fd = hd(dd, md),
        Rd = hd(dd, Wd);
      if (!Fd) return !1;
      const Xd = Od[Fd.name].armourReduction,
        Kd = Od[Rd.name].armourReduction;
      if (Kd === Xd) {
        var vd, Qd, td, od;
        const dd = null !== (vd = null === (Qd = Fd.attributes.customAttributes) || void 0 === Qd ? void 0 : Qd.enchantmentTier) && void 0 !== vd ? vd : "Tier 0",
          Od = null !== (td = null === (od = Rd.attributes.customAttributes) || void 0 === od ? void 0 : od.enchantmentTier) && void 0 !== td ? td : "Tier 0";
        return parseInt(dd.replace("Tier ", "")) >= parseInt(Od.replace("Tier ", ""))
      }
      return Xd > Kd
    }

    function Td(dd) {
      let Od;
      if ("number" === typeof dd) {
        const md = document.querySelector(`[data-inven-idx="${dd}"]`);
        if (!md) return null;
        Od = md.getBoundingClientRect()
      } else Od = dd.getBoundingClientRect();
      return {
        x: Od.left + Od.width / 2,
        y: Od.top + Od.height / 2
      }
    }
  },
  35430: (dd, Od, md) => {
    md.d(Od, {
      b: () => yd,
      d: () => bd,
      g: () => Td
    });
    var Wd = md(66),
      Fd = md(4998),
      Rd = md(1238),
      Xd = md(3747),
      Kd = md(1572),
      hd = md(1341);

    function vd(dd) {
      let {
        text: Od
      } = dd;
      const {
        t: md
      } = (0, Rd.G)(), [Wd, vd] = (0, Xd.i)();
      return (0, hd.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, hd.jsx)("div", {
          className: "CopyTextRowText",
          children: Od
        }), (0, hd.jsx)(Kd.g, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, Fd.e)(Od).catch((dd => {
              console.error("Failed to copy text:", dd)
            })), vd()
          },
          disabled: Wd,
          children: md(Wd ? "general:copied" : "general:copy")
        })]
      })
    }
    var Qd = md(1406),
      td = md(5194),
      od = md(3299),
      Nd = md(107),
      qd = md(2125),
      Hd = md(1436);

    function yd(dd) {
      let {
        show: Od,
        onClose: md
      } = dd;
      const {
        requestedGameNameWithVariation: Wd,
        lobbyName: Fd,
        shownLobbyName: Rd
      } = (0, qd.h)("connectedGame"), Xd = (0, od.c)(Wd, Fd, !1);
      return Nd.featureFlags.canUseInviteLinks && (0, hd.jsx)(td.c, {
        show: Od,
        close: md,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, hd.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, hd.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, hd.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, hd.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Xd ? (0, hd.jsx)(Hd.c, {}) : Xd, (0, hd.jsx)("br", {}), "Lobby Name: ", Rd, (0, hd.jsx)("br", {}), (0, hd.jsx)("br", {}), (0, hd.jsx)("br", {}), (0, hd.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, hd.jsx)(bd, {})]
        })
      })
    }

    function bd() {
      var dd;
      const Od = null !== (dd = Td(Nd.featureFlags.canUseInviteLinks)) && void 0 !== dd ? dd : "Loading Link...";
      return Nd.featureFlags.canUseInviteLinks && (0, hd.jsx)(vd, {
        text: Od
      })
    }

    function Td(dd) {
      const [Od, md] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        if (!dd) return;
        let Od = !0;
        return (0, Qd.H)().then((dd => {
          Od && md(dd)
        })).catch((dd => {
          console.error("Failed to get invite link:", dd)
        })), () => {
          Od = !1
        }
      }), [dd]), Od
    }
  },
  35602: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd,
      f: () => yd
    });
    md(35605);
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1238),
      Kd = md(1572),
      hd = md(3635),
      vd = md(1443),
      Qd = md(3353),
      td = md(4177),
      od = md(3198),
      Nd = md(1341);

    function qd(dd) {
      let {
        endsAt: Od,
        className: md
      } = dd;
      return (0, Nd.jsxs)("span", {
        className: Rd()("NewPlayerDealClock", md),
        children: [(0, Nd.jsx)(vd.c, {
          name: "hourglass"
        }), (0, Nd.jsx)(hd.e, {
          toTime: Od
        })]
      })
    }

    function Hd(dd) {
      let {
        offered: Od,
        needsLogin: md,
        busy: Wd,
        highlight: Fd,
        onBuy: hd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)(), {
        pack: qd
      } = Od, Hd = (0, td.e)(Od.package);
      return (0, Nd.jsxs)("div", {
        className: Rd()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: Fd
        }),
        children: [(0, Nd.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, Nd.jsx)("img", {
            src: od.c[Od.tier],
            alt: "",
            draggable: !1
          }), (0, Nd.jsx)("span", {
            className: "NewPlayerDealTag",
            children: vd("newPlayerDeal:tag")
          })]
        }), (0, Nd.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, Nd.jsx)(Qd.c, {
            className: "NewPlayerDealPackAmount",
            amount: qd.gems
          }), (0, Nd.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: vd("newPlayerDeal:split", {
              usual: qd.usualGems.toLocaleString(),
              bonus: (qd.gems - qd.usualGems).toLocaleString()
            })
          })]
        }), (0, Nd.jsx)(Kd.m, {
          className: "NewPlayerDealBuy",
          loading: Wd,
          onClick: hd,
          ariaLabel: vd("newPlayerDeal:buyLabel", {
            amount: qd.gems.toLocaleString(),
            price: Hd
          }),
          children: vd(md ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: Hd
          })
        })]
      })
    }

    function yd(dd) {
      let {
        view: Od,
        needsLogin: md,
        busy: Fd,
        highlight: Kd,
        onBuy: hd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)();
      return (0, Nd.jsxs)("div", {
        className: Rd()("NewPlayerDealPacks", Od.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [Od.packs.map(((dd, Od) => (0, Nd.jsxs)(Wd.Fragment, {
          children: [Od > 0 && (0, Nd.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, Nd.jsx)("i", {})
          }), (0, Nd.jsx)(Hd, {
            offered: dd,
            needsLogin: md,
            busy: Fd,
            highlight: Kd === dd.pack.packageId,
            onBuy: () => {
              hd(dd)
            }
          })]
        }, dd.pack.packageId))), (0, Nd.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, Nd.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: vd("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35611: (dd, Od, md) => {
    md.d(Od, {
      c: () => Ud,
      d: () => Bd
    });
    md(35605);
    var Wd = md(4175),
      Fd = md(1605),
      Rd = md(3184),
      Xd = md(4164),
      Kd = md(4141),
      hd = md(4173),
      vd = md(4122),
      Qd = md(1238),
      td = md(1462),
      od = md(1186),
      Nd = md(1572),
      qd = md(1443),
      Hd = md(3353),
      yd = md(3758),
      bd = md(3610),
      Td = md(3618),
      pd = md(3621),
      Yd = md(1341);
    const gd = new hd.d(vd.getBillingClient, vd.addPurchaseRecordListener);
    let wd = !1;

    function Ed(dd, Od) {
      null !== dd && (0, bd.q)(dd) || ((0, Fd.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${Od.pack.packageId}`
      }), null !== dd && (0, bd.u)(dd), Ud(Od.pack.gems))
    }

    function Jd(dd, Od, md) {
      const Fd = (0, bd.c)(Od);
      switch (dd.kind) {
        case "completed":
          Ed(Fd, md);
          break;
        case "pending":
          Rd = dd.intentId, Xd = () => {
            yd.j.refresh(), Ed(Fd, md)
          }, wd || (wd = !0, gd.listen()), gd.follow(Rd, Xd);
          break;
        case "unknownPackage":
          (0, bd.G)(Od, null);
          break;
        case "failed":
          dd.errorKey === Wd.e.newPlayerDealUnavailable && (0, bd.G)(Od, null)
      }
      var Rd, Xd
    }

    function Ud(dd) {
      td.NotificationProvider.showCustomPopup({
        body: Od => (0, Yd.jsx)(xd, {
          gems: dd,
          close: Od
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function xd(dd) {
      let {
        gems: Od,
        close: md
      } = dd;
      const {
        t: Wd
      } = (0, Qd.G)();
      return (0, Yd.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, Yd.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, Yd.jsx)(qd.c, {
            name: "circle-check"
          }), (0, Yd.jsx)(Hd.c, {
            amount: Od
          }), (0, Yd.jsx)("span", {
            children: Wd("newPlayerDeal:added")
          })]
        }), (0, Yd.jsx)(Nd.m, {
          className: "NewPlayerDealAddedOk",
          onClick: md,
          children: Wd("general:ok")
        })]
      })
    }

    function Bd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd.d;
      const {
        userContext: md
      } = (0, od.d)(), {
        purchaseUnderWay: Wd,
        notice: Fd,
        buy: hd
      } = (0, Kd.d)(Od), vd = (0, Td.k)(), Qd = md.mayBuy() || (0, Rd.guestsMayBuy)(), td = null === vd ? !Qd : vd.guest && !md.isLoggedIn();
      return {
        purchaseUnderWay: Wd,
        notice: Fd,
        needsLogin: td,
        buyPack: function(Wd, Fd) {
          (0, bd.y)("new_player_deal.buy", (0, pd.e)(Wd.arm, dd, Fd.pack.packageId)), null === vd ? hd(function(dd) {
            return {
              sku: dd.pack.packageId,
              tier: dd.tier,
              amount: dd.pack.gems,
              bonusPercent: 0,
              package: dd.package
            }
          }(Fd), null, {
            followPending: !1
          }).then((dd => {
            Jd(dd, md, Fd)
          })) : td ? Od(Fd.pack.packageId, null) : Ed((0, bd.c)(md), Fd)
        }
      }
    }
  },
  35530: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(2125),
      Kd = md(1341);

    function hd(dd) {
      const Od = Math.floor(dd / 3600),
        md = Math.floor(dd % 3600 / 60),
        Wd = Math.floor(dd % 60),
        Fd = `${md.toString().padStart(2,"0")}:${Wd.toString().padStart(2,"0")}`;
      return Od > 0 ? `${Od}:${Fd}` : Fd
    }
    const vd = (0, Wd.memo)((function(dd) {
      let {
        className: Od
      } = dd;
      const {
        recording: md,
        clipping: Wd,
        seconds: Fd
      } = (0, Xd.h)("replayRecorder");
      return md || Wd ? (0, Kd.jsxs)("div", {
        className: Rd()("RecordingIndicator", {
          RecordingIndicatorClipping: !md
        }, Od),
        "data-camera-keeper": "",
        children: [(0, Kd.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Kd.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: md ? "REC" : "CLIP"
        }), md && (0, Kd.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: hd(Fd)
        })]
      }) : null
    }))
  },
  35616: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1341);
    const Xd = 21,
      Kd = 2 * Math.PI * Xd;

    function hd(dd) {
      let {
        tier: Od,
        state: md,
        progress: Wd,
        size: hd = "large"
      } = dd;
      const vd = Fd()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === hd,
        SeasonPassTierNodeLarge: "large" === hd,
        SeasonPassTierNodeReached: "reached" === md,
        SeasonPassTierNodeEarning: "earning" === md
      });
      if ("earning" !== md || "large" === hd) return (0, Rd.jsx)("span", {
        className: vd,
        children: (0, Rd.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: Od
        })
      });
      const Qd = Math.max(0, Math.min(1, Wd));
      return (0, Rd.jsxs)("span", {
        className: vd,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * Qd),
        children: [(0, Rd.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, Rd.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, Rd.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: Xd
          }), (0, Rd.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: Xd,
            strokeDasharray: `${Qd*Kd} ${Kd}`,
            transform: "rotate(-90 28 28)"
          }), (0, Rd.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, Rd.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: Od
        })]
      })
    }
  },
  5670: (dd, Od, md) => {
    md.d(Od, {
      c: () => yd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5301),
      Xd = md(1238),
      Kd = md(1443),
      hd = md(1572),
      vd = md(1627),
      Qd = md(1462),
      td = md(3531),
      od = md(1341);
    const Nd = {
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

    function qd(dd) {
      let {
        platform: Od
      } = dd;
      const md = "youtube" === Od;
      return (0, od.jsxs)("span", {
        className: Fd()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: md
        }),
        children: [md && (0, od.jsx)(td.b, {
          variant: "white"
        }), !md && (0, od.jsx)(Kd.c, {
          name: Nd[Od].icon,
          kit: "brands"
        })]
      })
    }

    function Hd(dd) {
      let {
        platform: Od,
        link: md,
        editable: Wd,
        userContext: Fd,
        onLinksUpdated: td
      } = dd;
      const {
        t: Hd
      } = (0, Xd.G)(), yd = Nd[Od];
      if (!md && !Wd) return null;

      function bd() {
        var dd;
        if (!Fd || !td) return;
        Qd.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yd.name
            }
          },
          prefixText: Rd.x[Od],
          placeholderText: "playBloxd",
          initialValue: null !== (dd = null === md || void 0 === md ? void 0 : md.handle) && void 0 !== dd ? dd : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: md ? "general:remove" : void 0
        }).getResult().then((async dd => {
          if ("notificationTornDown" !== dd && null !== dd) try {
            "submit" === dd.type ? await vd.e.setSocialLink(Fd, Od, dd.value) : await vd.e.clearSocialLink(Fd, Od), td()
          } catch (md) {
            console.error("Failed to update social link", md), Qd.NotificationProvider.showAlertPopup({
              title: md.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (md) {
        const dd = `@${md.handle}`;
        return (0, od.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yd.color
          },
          href: md.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, od.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, od.jsx)(qd, {
              platform: Od
            }), (0, od.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, od.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: dd
              })
            })]
          }), Wd && (0, od.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, hd.X)({
              stopPropagation: !0
            }),
            onClick: dd => {
              dd.stopPropagation(), dd.preventDefault(), bd()
            },
            children: (0, od.jsx)(Kd.c, {
              name: "pen-to-square"
            })
          }), !Wd && (0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, od.jsx)(Kd.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, od.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yd.color
        },
        ...(0, hd.X)(),
        onClick: () => {
          bd()
        },
        children: [(0, od.jsx)(qd, {
          platform: Od
        }), (0, od.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yd.name
          }), (0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Hd("homePage:profileSocialLinkAdd")
          })]
        }), (0, od.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, od.jsx)(Kd.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yd(dd) {
      let {
        socialLinks: Od,
        editable: md = !1,
        userContext: Wd,
        onLinksUpdated: Fd
      } = dd;
      if (!md && 0 === Od.length) return null;
      const Xd = new Map(Od.map((dd => [dd.platform, dd]))),
        Kd = md ? Rd.u : Od.map((dd => dd.platform));
      return (0, od.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, od.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Kd.map((dd => (0, od.jsx)(Hd, {
            platform: dd,
            link: Xd.get(dd),
            editable: md,
            userContext: Wd,
            onLinksUpdated: Fd
          }, dd)))
        })
      })
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  35596: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(4664);

    function Rd() {
      const [dd, Od] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        let dd = !0;
        return (0, Fd.e)().then((() => {
          dd && Od(!0)
        })), () => {
          dd = !1
        }
      }), []), dd
    }
  },
  7530: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(46);

    function Rd(dd, Od) {
      var md;
      const [Rd, Xd] = (0, Wd.useState)(null !== (md = Fd.k.getItem(dd)) && void 0 !== md ? md : Od);
      return [Rd, Od => {
        Fd.k.setItem(dd, Od), Xd(Od)
      }]
    }
  },
  35511: (dd, Od, md) => {
    md.d(Od, {
      d: () => Hd,
      g: () => qd
    });
    md(35513);
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(35508);

    function Kd(dd, Od) {
      return Math.max(1, Math.round(dd * Od))
    }

    function hd(dd, Od) {
      const md = Od * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Wd = function(dd, Od) {
          if (dd.lines) return Kd(dd.lineThickness, Od) % 2;
          if (dd.dot) return Kd(dd.dotSize, Od) % 2;
          return vd(dd, Od) % 2
        }(dd, Od),
        Fd = Qd(dd.lineThickness * md, Wd),
        Rd = Kd(dd.lineLength, md),
        Xd = Math.round(dd.gap * md),
        hd = dd.outline > 0 ? Kd(dd.outline, md) : 0,
        od = [];
      if (dd.lines && (od.push({
          x: Fd + Xd,
          y: 0,
          w: Rd,
          h: Fd,
          arm: "right"
        }), od.push({
          x: -Xd - Rd,
          y: 0,
          w: Rd,
          h: Fd,
          arm: "left"
        }), od.push({
          x: 0,
          y: Fd + Xd,
          w: Fd,
          h: Rd,
          arm: "down"
        }), dd.tStyle || od.push({
          x: 0,
          y: -Xd - Rd,
          w: Fd,
          h: Rd,
          arm: "up"
        }), 0 === Xd && od.push({
          x: 0,
          y: 0,
          w: Fd,
          h: Fd
        })), dd.dot) {
        const Od = Qd(dd.dotSize * md, Wd),
          Rd = dd.lines && 0 === Xd && dd.dotSize > dd.lineThickness ? Math.max(Od, Fd + 2) : Od,
          Kd = (Fd - Rd) / 2;
        od.push({
          x: Kd,
          y: Kd,
          w: Rd,
          h: Rd
        })
      }
      const Nd = od.map((dd => ({
        ...dd,
        x: dd.x - hd,
        y: dd.y - hd,
        w: dd.w + 2 * hd,
        h: dd.h + 2 * hd
      })));
      let qd = null,
        Hd = null;
      if (dd.circle) {
        const Od = Kd(dd.circleThickness, md),
          Rd = function(dd, Od) {
            return dd + (dd % 2 === Od ? 0 : 1)
          }(vd(dd, md), Wd),
          Xd = (Fd - Rd) / 2;
        qd = td(Xd, Rd, Od), hd > 0 && (Hd = td(Xd - hd, Rd + 2 * hd, Od + 2 * hd))
      }
      return {
        cell: Fd,
        fills: od,
        outlines: hd > 0 ? Nd : [],
        ring: qd,
        ringOutline: Hd
      }
    }

    function vd(dd, Od) {
      return Math.round(dd.circleRadius * Od * 2 + Kd(dd.circleThickness, Od))
    }

    function Qd(dd, Od) {
      return Math.max(2 - Od, 2 * Math.round((dd - Od) / 2) + Od)
    }

    function td(dd, Od, md) {
      const Wd = 2 * md >= Od - 1;
      return {
        x: dd,
        y: dd,
        size: Od,
        border: Math.min(md, Math.floor(Od / 2)),
        filled: Wd
      }
    }
    var od = md(1341);
    const Nd = 1.4;

    function qd(dd, Od) {
      return dd && Od ? `scale(${Nd})` : "scale(1)"
    }

    function Hd(dd) {
      return "classic" === dd.settings.style ? (0, od.jsx)(Td, {
        ...dd
      }) : (0, od.jsx)(Ud, {
        ...dd
      })
    }
    const yd = .125;

    function bd(dd, Od) {
      const md = {};
      if (dd.color !== Xd.d.color && (md.color = (0, Xd.j)(dd.color)), dd.opacity !== Xd.d.opacity && (md.opacity = dd.opacity / 100), dd.outline !== Xd.d.outline || dd.outlineColor !== Xd.d.outlineColor) {
        const Od = dd.outline,
          Wd = (0, Xd.j)(dd.outlineColor);
        md.textShadow = Od > 0 ? `-${Od}px 0 ${Wd}, 0 ${Od}px ${Wd}, ${Od}px 0 ${Wd}, 0 -${Od}px ${Wd}` : "none"
      }
      if (dd.size !== Xd.d.size) {
        const Wd = dd.size / 100;
        md.fontSize = Od ? `calc(max(1.3rem, 18px) * ${Wd})` : `calc(1.3rem * ${Wd})`, md.marginTop = `-${yd}em`, md.transformOrigin = `50% calc(50% + ${yd}em)`
      }
      return md
    }

    function Td(dd) {
      let {
        settings: Od,
        touch: md,
        inPreview: Wd,
        inEditor: Rd,
        pressed: Xd = !1,
        pressRef: Kd
      } = dd;
      return (0, od.jsx)("div", {
        className: Fd()("Crosshair", {
          Touch: md,
          CrosshairInPreview: Wd,
          CrosshairInEditor: Rd || Wd
        }),
        ref: Kd,
        style: {
          transform: qd(Xd, Od.growOnClick),
          ...bd(Od, md)
        },
        children: "+"
      })
    }

    function pd(dd, Od) {
      return dd / Od + "px"
    }

    function Yd(dd, Od, md, Wd) {
      return {
        ...Ed(dd, Od, md),
        width: pd(dd.w, md),
        height: pd(dd.h, md),
        background: Wd
      }
    }

    function gd(dd, Od, md) {
      return {
        left: pd(dd.x, Od),
        top: pd(dd.y, Od),
        width: pd(dd.size, Od),
        height: pd(dd.size, Od),
        borderWidth: pd(dd.border, Od),
        borderColor: md,
        background: dd.filled ? md : void 0
      }
    }
    const wd = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Ed(dd, Od, md) {
      const [Wd, Fd] = dd.arm ? wd[dd.arm] : [0, 0], Rd = Math.round(Od * md);
      return {
        left: pd(dd.x + Wd * Rd, md),
        top: pd(dd.y + Fd * Rd, md)
      }
    }

    function Jd(dd) {
      return dd.arm ? {
        "data-arm": dd.arm,
        "data-x": dd.x,
        "data-y": dd.y
      } : {}
    }

    function Ud(dd) {
      let {
        settings: Od,
        inPreview: md,
        inEditor: Wd,
        pressed: Kd = !1,
        spread: vd,
        spreadRef: Qd
      } = dd;
      const td = (0, Rd.useRef)(null),
        {
          box: qd,
          dpr: Hd
        } = function(dd) {
          const [Od, md] = (0, Rd.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Rd.useLayoutEffect)((() => {
            const Od = dd.current;
            if (!Od) return;
            const Wd = () => {
              const dd = Od.getBoundingClientRect(),
                Wd = window.devicePixelRatio || 1;
              md((Od => Od.dpr === Wd && Od.box.left === dd.left && Od.box.top === dd.top && Od.box.width === dd.width && Od.box.height === dd.height ? Od : {
                box: {
                  left: dd.left,
                  top: dd.top,
                  width: dd.width,
                  height: dd.height
                },
                dpr: Wd
              }))
            };
            Wd();
            const Fd = new ResizeObserver(Wd);
            return Fd.observe(Od), window.addEventListener("resize", Wd), window.addEventListener("scroll", Wd, !0), () => {
              Fd.disconnect(), window.removeEventListener("resize", Wd), window.removeEventListener("scroll", Wd, !0)
            }
          }), [dd]), Od
        }(td),
        yd = (0, Rd.useRef)(Hd);
      yd.current = Hd;
      const bd = hd(Od, Hd, Kd && Od.growOnClick ? Nd : 1),
        Td = function(dd, Od, md) {
          const Wd = Math.round((dd.left + dd.width / 2) * md - Od / 2),
            Fd = Math.round((dd.top + dd.height / 2) * md - Od / 2);
          return {
            x: Wd / md - dd.left,
            y: Fd / md - dd.top
          }
        }(qd, bd.cell, Hd),
        pd = (0, Xd.j)(Od.color),
        wd = (0, Xd.j)(Od.outlineColor),
        Ud = (0, Rd.useRef)(0);
      (0, Rd.useLayoutEffect)((() => {
        if (Qd) return Qd.current = dd => {
          var Od;
          Ud.current = dd, null === (Od = td.current) || void 0 === Od || Od.querySelectorAll("[data-arm]").forEach((Od => {
            Object.assign(Od.style, Ed(function(dd) {
              return {
                x: Number(dd.dataset.x),
                y: Number(dd.dataset.y),
                arm: dd.dataset.arm
              }
            }(Od), dd, yd.current))
          }))
        }, () => {
          Qd.current = null
        }
      }), [Qd]);
      const xd = null !== vd && void 0 !== vd ? vd : Ud.current;
      return (0, od.jsx)("div", {
        ref: td,
        className: Fd()("CrosshairShapes", {
          CrosshairInPreview: md,
          CrosshairInEditor: Wd || md,
          CrosshairSpreads: void 0 !== Qd
        }),
        children: (0, od.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Td.x,
            top: Td.y,
            opacity: Od.opacity / 100
          },
          children: (0, od.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [bd.ringOutline && (0, od.jsx)("div", {
              className: "CrosshairRing",
              style: gd(bd.ringOutline, Hd, wd)
            }), bd.outlines.map(((dd, Od) => (0, od.jsx)("div", {
              className: "CrosshairPart",
              ...Jd(dd),
              style: Yd(dd, xd, Hd, wd)
            }, `o${Od}`))), bd.ring && (0, od.jsx)("div", {
              className: "CrosshairRing",
              style: gd(bd.ring, Hd, pd)
            }), bd.fills.map(((dd, Od) => (0, od.jsx)("div", {
              className: "CrosshairPart",
              ...Jd(dd),
              style: Yd(dd, xd, Hd, pd)
            }, `f${Od}`)))]
          })
        })
      })
    }
  },
  35521: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      e: () => yd,
      h: () => Hd
    });
    var Wd = md(35508);
    const Fd = "XH1-",
      Rd = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Xd = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Kd = ["color", "outlineColor"],
      hd = 1 + 3 * Kd.length + Xd.length + 1,
      vd = Math.ceil(8 * hd / Math.log2(62)),
      Qd = Fd.length + vd;

    function td(dd) {
      let Od = 90;
      for (const md of dd) Od = 31 * Od + md & 255;
      return Od
    }
    const od = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nd = BigInt(od.length);

    function qd(dd, Od) {
      let md = 0n;
      for (const Fd of dd) {
        const dd = od.indexOf(Fd);
        if (dd < 0) return null;
        md = md * Nd + BigInt(dd)
      }
      if (md >> BigInt(8 * Od) !== 0n) return null;
      const Wd = [];
      for (let Fd = 0; Fd < Od; Fd++) Wd.unshift(Number(0xffn & md)), md >>= 8n;
      return Wd
    }

    function Hd(dd) {
      let Od = "shapes" === dd.style ? 1 : 0;
      Rd.forEach(((md, Wd) => {
        dd[md] && (Od |= 1 << Wd + 1)
      }));
      const md = [Od];
      for (const Fd of Kd) {
        const Od = (0, Wd.f)(Fd, dd[Fd]);
        md.push(Od >> 16 & 255, Od >> 8 & 255, 255 & Od)
      }
      for (const Fd of Xd) {
        const {
          min: Od,
          step: Rd
        } = Wd.b[Fd];
        md.push(Math.round(((0, Wd.f)(Fd, dd[Fd]) - Od) / Rd))
      }
      return md.push(td(md)), Fd + function(dd, Od) {
        let md = 0n;
        for (const Fd of dd) md = md << 8n | BigInt(Fd);
        let Wd = "";
        for (let Fd = 0; Fd < Od; Fd++) Wd = od[Number(md % Nd)] + Wd, md /= Nd;
        return Wd
      }(md, vd)
    }

    function yd(dd) {
      for (const Od of dd.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${vd}})`, "gi"))) {
        const dd = bd(qd(Od[1], hd));
        if (dd) return dd
      }
      return null
    }

    function bd(dd) {
      if (!dd || dd.length !== hd || td(dd.slice(0, -1)) !== dd[dd.length - 1]) return null;
      const Od = dd[0],
        md = {
          ...Wd.d,
          style: 1 & Od ? "shapes" : "classic"
        };
      Rd.forEach(((dd, Wd) => {
        md[dd] = 0 !== (Od & 1 << Wd + 1)
      }));
      let Fd = 1;
      for (const Wd of Kd) md[Wd] = dd[Fd] << 16 | dd[Fd + 1] << 8 | dd[Fd + 2], Fd += 3;
      for (const Rd of Xd) {
        const {
          min: Od,
          step: Xd
        } = Wd.b[Rd];
        md[Rd] = (0, Wd.f)(Rd, Od + dd[Fd] * Xd), Fd++
      }
      return md
    }
  },
  35508: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Fd,
      f: () => Rd,
      j: () => vd,
      n: () => hd,
      o: () => Qd,
      q: () => Kd,
      u: () => Xd
    });
    const Wd = {
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
      Fd = Object.freeze({
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

    function Rd(dd, Od) {
      var md;
      const {
        min: Rd,
        max: Xd,
        step: Kd
      } = Wd[dd];
      if (!Number.isFinite(Od)) return Fd[dd];
      const hd = (null !== (md = String(Kd).split(".")[1]) && void 0 !== md ? md : "").length,
        vd = Number((Math.round(Od / Kd) * Kd).toFixed(hd));
      return Math.min(Xd, Math.max(Rd, vd))
    }

    function Xd(dd, Od, md) {
      const Wd = "number" === typeof md ? Rd(Od, md) : md;
      return {
        ...dd,
        [Od]: Wd
      }
    }

    function Kd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Fd).every((Wd => md.includes(Wd) || dd[Wd] === Od[Wd]))
    }

    function hd(dd) {
      return Kd(dd, Fd)
    }

    function vd(dd) {
      return `#${dd.toString(16).padStart(6,"0")}`
    }

    function Qd(dd) {
      const Od = /^#?([0-9a-f]{6})$/i.exec(dd.trim());
      return Od ? parseInt(Od[1], 16) : null
    }
  },
  35524: (dd, Od, md) => {
    md.d(Od, {
      c: () => td,
      g: () => od
    });
    var Wd = md(66),
      Fd = md(46),
      Rd = md(35521),
      Xd = md(35508);
    const Kd = "crosshairCode";
    let hd = null;
    const vd = new Set;

    function Qd() {
      if (null === hd) {
        var dd;
        const Od = Fd.k.getItem(Kd);
        hd = null !== (dd = "string" === typeof Od ? (0, Rd.e)(Od) : null) && void 0 !== dd ? dd : Xd.d
      }
      return hd
    }

    function td(dd) {
      hd = dd, (0, Xd.n)(dd) ? Fd.k.removeItem(Kd) : Fd.k.setItem(Kd, (0, Rd.h)(dd));
      for (const Od of vd) Od()
    }

    function od() {
      const [dd, Od] = (0, Wd.useState)(Qd);
      return (0, Wd.useEffect)((() => {
        const dd = () => {
          Od(Qd())
        };
        return dd(), md = dd, vd.add(md), () => {
          vd.delete(md)
        };
        var md
      }), []), dd
    }
  },
  35559: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Xd,
      j: () => Rd
    });
    var Wd = md(66);
    const Fd = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(dd) {
        var Od;
        return null !== (Od = this.inFlight.get(dd)) && void 0 !== Od ? Od : 0
      }
      setInFlight(dd, Od) {
        this.getInFlight(dd) !== Od && (this.inFlight.set(dd, Od), this.notify())
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      getLanding(dd) {
        var Od, md;
        return null !== (Od = null === (md = this.landings.get(dd)) || void 0 === md ? void 0 : md.at(-1)) && void 0 !== Od ? Od : null
      }
      hasLanding(dd, Od) {
        var md, Wd;
        return null !== (md = null === (Wd = this.landings.get(dd)) || void 0 === Wd ? void 0 : Wd.includes(Od)) && void 0 !== md && md
      }
      addLanding(dd, Od) {
        var md;
        const Wd = null !== (md = this.landings.get(dd)) && void 0 !== md ? md : [];
        return this.landings.set(dd, [...Wd, Od]), this.notify(), () => {
          this.landings.set(dd, this.landings.get(dd).filter((dd => dd !== Od))), this.notify()
        }
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
    };

    function Rd(dd, Od) {
      const [md, Rd] = (0, Wd.useState)((() => Fd.getInFlight(dd)));
      return (0, Wd.useLayoutEffect)((() => {
        const Od = () => {
          Rd(Fd.getInFlight(dd))
        };
        return Od(), Fd.subscribe(Od)
      }), [dd]), Math.max(0, Od - md)
    }

    function Xd(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, Wd.useLayoutEffect)((() => {
        if (md) return Fd.addLanding(dd, Od.current)
      }), [dd, Od, md])
    }
  },
  35452: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      d: () => Wd
    });
    const Wd = "image/jpeg",
      Fd = "jpg"
  },
  35458: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      f: () => vd,
      h: () => Qd
    });
    var Wd = md(1822),
      Fd = md(4421),
      Rd = md(107),
      Xd = md(1906),
      Kd = md(35452);

    function hd() {
      return !(0, Rd.isMobileApp)() || Wd.c.supports("photos")
    }
    async function vd(dd) {
      var Od, md;
      if ((0, Rd.isMobileApp)()) {
        const {
          saved: Od
        } = await Wd.c.request("photos.save", {
          data: await (0, Fd.c)(dd),
          mimeType: Kd.d
        });
        return Od ? "saved" : "denied"
      }
      return (0, Rd.isIOS)() && null !== (Od = (md = navigator).canShare) && void 0 !== Od && Od.call(md, {
        files: [dd]
      }) ? Qd(dd) : ((0, Xd.e)(dd, dd.name), "saved")
    }
    async function Qd(dd) {
      try {
        return await navigator.share({
          files: [dd]
        }), "shared"
      } catch (Od) {
        if (Od instanceof DOMException && "AbortError" === Od.name) return "Ad";
        if (Od instanceof DOMException && "NotAllowedError" === Od.name) return "needsTap";
        throw Od
      }
    }
  },
  35437: (dd, Od, md) => {
    md.d(Od, {
      d: () => qd,
      g: () => Hd,
      i: () => yd,
      k: () => bd
    });
    var Wd = md(29),
      Fd = md(35422),
      Rd = md(1765),
      Xd = md(35446);
    const Kd = 64,
      hd = 8;
    async function vd(dd) {
      try {
        const Od = await createImageBitmap(dd, {
          resizeWidth: Kd,
          resizeHeight: Kd,
          resizeQuality: "high"
        });
        try {
          const dd = document.createElement("canvas");
          dd.width = Kd, dd.height = Kd;
          const md = dd.getContext("2d", {
            willReadFrequently: !0
          });
          return md.drawImage(Od, 0, 0, Kd, Kd),
            function(dd) {
              for (let Od = 0; Od < dd.length; Od += 4)
                if (dd[Od] > hd || dd[Od + 1] > hd || dd[Od + 2] > hd) return !1;
              return !0
            }(md.getImageData(0, 0, Kd, Kd).data)
        } finally {
          Od.close()
        }
      } catch (Od) {
        return console.warn("Screenshot mode: couldn't check whether a photo is blank", Od), !1
      }
    }
    var Qd = md(35452);
    const td = 8294400,
      od = .92,
      Nd = 3;
    class qd extends Error {
      constructor(dd) {
        super(`The photo came out blank ${dd} times`), this.name = "BlankPhotoError"
      }
    }

    function Hd() {
      (0, Rd.g)(), Wd.e.set({
        screenshotMode: !0
      })
    }

    function yd() {
      Wd.e.set({
        screenshotMode: !1
      })
    }
    async function bd() {
      const dd = performance.now(),
        Od = await async function(dd, Od) {
          let md = 0;
          for (; md < Nd;) {
            let Fd;
            try {
              Fd = await dd()
            } catch (Wd) {
              if (0 === md) throw Wd;
              return {
                outcome: "failed",
                error: Wd,
                blanks: md
              }
            }
            if (!await Od(Fd)) return {
              outcome: "saved",
              blob: Fd,
              blanks: md
            };
            md++
          }
          return {
            outcome: "refused",
            blanks: md
          }
        }((async () => {
          const {
            width: dd,
            height: Od,
            scale: md
          } = function(dd, Od, md) {
            const Wd = Math.max(1, dd),
              Fd = Math.max(1, Od),
              Rd = Math.min(Math.max(1, md), Math.sqrt(td / (Wd * Fd)));
            return {
              width: Math.round(Wd * Rd),
              height: Math.round(Fd * Rd),
              scale: Rd
            }
          }(window.innerWidth, window.innerHeight, window.devicePixelRatio);
          return (await Fd.devTools.capturePhoto(dd, Od, {
            scale: md,
            type: Qd.d,
            quality: od
          })).blob
        }), vd);
      if (Od.blanks > 0) {
        const Wd = (0, Xd.b)();
        md.e(310).then((() => md(43012))).then((md => {
          let {
            reportBlankPhoto: Fd
          } = md;
          Fd(Od.blanks, Od.outcome, dd, Wd)
        })).catch((dd => {
          console.warn("Screenshot mode: couldn't report a blank photo", dd)
        }))
      }
      switch (Od.outcome) {
        case "saved":
          return new File([Od.blob], function(dd) {
            const Od = dd => String(dd).padStart(2, "0"),
              md = `${dd.getFullYear()}${Od(dd.getMonth()+1)}${Od(dd.getDate())}`,
              Wd = `${Od(dd.getHours())}${Od(dd.getMinutes())}${Od(dd.getSeconds())}`;
            return `bloxd-${md}-${Wd}.${Qd.c}`
          }(new Date), {
            type: Qd.d
          });
        case "refused":
          throw new qd(Od.blanks);
        case "failed":
          throw Od.error
      }
    }
  },
  35499: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => Fd
    });
    var Wd = md(29);

    function Fd(dd, Od) {
      return dd && !Od
    }

    function Rd() {
      return Fd(Wd.e.get("isTouchScreen"), Wd.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5455: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      f: () => Rd,
      j: () => Fd
    });
    let Wd = null;

    function Fd(dd) {
      Wd = dd
    }

    function Rd() {
      return Wd
    }

    function Xd(dd) {
      return "bloxd" === dd.site && !dd.isMobileApp && !dd.isTouchScreen
    }
  },
  35426: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = new Set(["chunkBorders"])
  },
  35422: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ALL_DEV_TOOLS: () => Xd,
      coreDevTools: () => vd,
      devTools: () => hd
    });
    var Wd = md(732),
      Fd = md(1361),
      Rd = md(35426);
    const Xd = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Kd() {
      const {
        noaDevTools: dd
      } = await md.e(270).then((() => md(43004)));
      return dd
    }
    const hd = new class {
        constructor() {
          this.loadHost = Kd, this.tools = Xd
        }
        setHost(dd) {
          this.tools = null === dd ? Xd : dd.tools, this.loadHost = null === dd ? Kd : async () => dd
        }
        supports(dd) {
          return this.tools.has(dd)
        }
        async downloadScene(dd, Od) {
          const md = await this.loadHost();
          await md.downloadScene(dd, Od)
        }
        async setAmbientLightIntensity(dd) {
          const Od = await this.loadHost();
          await Od.setAmbientLightIntensity(dd)
        }
        async capturePhoto(dd, Od, md) {
          return (await this.loadHost()).capturePhoto(dd, Od, md)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      vd = {
        tools: Rd.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        },
        snapshotNextFrame: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    Wd.G && hd.setHost(vd), (0, Fd.K)((() => {
      hd.setHost(vd)
    }))
  },
  35587: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Fd,
      j: () => td
    });
    var Wd = md(1685);

    function Fd(dd) {
      var Od;
      return {
        ...Kd.store,
        yaw: Kd.store.yaw + (null !== (Od = Wd.b[dd].previewYaw) && void 0 !== Od ? Od : 0)
      }
    }
    const Rd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xd = {
        ...Rd,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Kd = {
        player: Rd,
        store: Xd,
        showcase: {
          ...Xd,
          target: [0, 1.9, 0]
        }
      };

    function hd(dd, Od) {
      dd instanceof Promise ? dd.then(Od).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Od(dd)
    }
    class vd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Od;
        this.view = dd, null === (Od = this.opened) || void 0 === Od || Od.show(dd)
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Qd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Od;
        return null !== (dd = null === (Od = this.opened) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Od) {
        var md;
        null === (md = this.opened) || void 0 === md || md.setCosmetic(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setNametag(dd)
      }
      playEmote(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.playEmote(dd)
      }
      setOrbit(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Od;
        await this.ready, await (null === (Od = this.opened) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const td = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new vd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new vd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new vd(this.current().openMobLineup(dd))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(dd, Od) {
        return new Qd(this.current().openCharacter(dd, Od))
      }
    }
  },
  35582: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.c,
      g: () => Wd.g,
      i: () => Wd.j
    });
    var Wd = md(35587);
    class Fd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Rd {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(311)]).then((() => md(43035))))), this.characterScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(177), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(225), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(280), md.e(184)]).then((() => md(43148)))))
      }
      openMob(dd) {
        return this.mobScene.run((Od => Od.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Od => Od.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Od => Od.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Od) {
        return this.characterScene.run((md => md.openCharacterPreview(dd, Od)))
      }
    }
    Wd.j.setDefaultHost((() => new Rd))
  },
  7602: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    var Wd = md(46);
    const Fd = "shaderPack";
    async function Rd() {
      var dd;
      let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await Wd.h.getItem(Fd, Od)) && void 0 !== dd ? dd : null
    }
  },
  35465: (dd, Od, md) => {
    function Wd(dd, Od) {
      return dd && !Od
    }
    md.d(Od, {
      e: () => Wd
    })
  },
  35482: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(1368);

    function Fd() {
      var dd, Od;
      return null !== (dd = null === (Od = screen.orientation) || void 0 === Od ? void 0 : Od.type) && void 0 !== dd ? dd : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Rd = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Fd() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Fd(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Wd.rH)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const dd of this.resizers) dd()
          }
        }), 1e3)
      }
      heldSizer(dd) {
        let Od = !1;
        return () => {
          if (Od && this.isHeld()) return null;
          const md = dd();
          return Od ||= null !== md, md
        }
      }
      onRelease(dd) {
        return this.resizers.add(dd), () => {
          this.resizers.delete(dd)
        }
      }
    }
  },
  35428: (dd, Od, md) => {
    md.d(Od, {
      e: () => Td,
      i: () => vd,
      l: () => Hd,
      m: () => qd
    });
    var Wd = md(180),
      Fd = md(1322),
      Rd = md(1253),
      Xd = md(1189),
      Kd = md(1881);
    const hd = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function vd(dd) {
      return hd[dd]
    }

    function Qd(dd) {
      return (0, Kd.c)(dd) ? "outdated" : dd instanceof Wd.e ? 429 === dd.httpCode ? "busy" : "server" : "offline"
    }

    function td(dd, Od, md) {
      return (0, Xd.postJsonWithMetricsCookiesAndJsonResponse)(`${Rd.clientSideServerUrls.indexUrl}${Od}`, md, {
        retries: 3
      }, dd.getMetricsCookies()).catch((dd => (console.error("Bad response from the server when trying to change name:", Od, dd), {
        outcome: "failed",
        failure: Qd(dd)
      })))
    }

    function od(dd) {
      return "outcome" in dd && "failed" === dd.outcome
    }

    function Nd(dd) {
      return console.error("Error when trying to get with new name from DB", dd), {
        outcome: "refused",
        message: dd
      }
    }
    async function qd(dd) {
      const Od = await td(dd, "/index/name/random", {});
      return od(Od) ? Od : "err" in Od ? Nd(Od.err) : (dd.setPlayerName(Od.name), {
        outcome: "changed",
        name: Od.name
      })
    }
    async function Hd(dd, Od) {
      const md = await td(dd, "/index/name/update", {
        name: Od
      });
      return od(md) ? md : "err" in md ? Nd(md.err) : md.nameExists ? {
        outcome: "taken"
      } : (dd.setPlayerName(Od), {
        outcome: "changed",
        name: Od
      })
    }

    function yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Wd = 1 === Od ? 1 : 10 ** (Od - 1),
        Rd = String(Wd + Math.floor(md() * (10 ** Od - Wd)));
      return `${dd.slice(0,Fd.g-Od)}${Rd}`
    }
    const bd = [1, 2, 3, 4];
    async function Td(dd, Od) {
      const md = await Hd(dd, Od);
      if ("taken" !== md.outcome) return md;
      for (const Wd of bd) {
        const md = yd(Od, Wd),
          Fd = await Hd(dd, md);
        if ("taken" !== Fd.outcome) return Fd
      }
      return {
        outcome: "taken"
      }
    }
  },
  35446: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;

    function Fd() {
      Wd = performance.now()
    }

    function Rd() {
      return Wd
    }
  },
  35467: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      d: () => hd
    });
    var Wd = md(29);
    const Fd = 24,
      Rd = "farNametags",
      Xd = 1e5;

    function Kd() {
      var dd;
      return null === (dd = Wd.e.get("showDistantNametags")) || void 0 === dd || dd
    }

    function hd() {
      var dd;
      return null !== (dd = function() {
        const dd = new URLSearchParams(window.location.search).get(Rd),
          Od = null === dd || "" === dd ? NaN : Number(dd);
        return Number.isFinite(Od) && Od >= 0 ? Math.min(Od, Xd) : null
      }()) && void 0 !== dd ? dd : Kd() ? 0 : Fd
    }
  },
  35566: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Qd
    });
    const Wd = .01,
      Fd = .08,
      Rd = .01,
      Xd = 5,
      Kd = 100,
      hd = 40,
      vd = 800;

    function Qd(dd) {
      const {
        canvas: Od
      } = dd;
      let md = null;
      const Qd = dd => {
          var Wd;
          md = {
            pointer: dd.pointerId,
            x: dd.clientX,
            y: dd.clientY
          }, null === (Wd = Od.setPointerCapture) || void 0 === Wd || Wd.call(Od, dd.pointerId)
        },
        td = Od => {
          var Fd;
          const Xd = dd.orbit;
          if ((null === (Fd = md) || void 0 === Fd ? void 0 : Fd.pointer) !== Od.pointerId || null === Xd) return;
          const Kd = Od.clientX - md.x,
            hd = Od.clientY - md.y;
          md = {
            ...md,
            x: Od.clientX,
            y: Od.clientY
          }, dd.setOrbit({
            alpha: Xd.alpha - Kd * Wd,
            beta: Math.min(Math.PI - Rd, Math.max(Rd, Xd.beta - hd * Wd)),
            radius: Xd.radius
          })
        },
        od = dd => {
          var Od;
          (null === (Od = md) || void 0 === Od ? void 0 : Od.pointer) === dd.pointerId && (md = null)
        },
        Nd = Od => {
          const md = dd.orbit;
          if (null === md) return;
          Od.preventDefault();
          const Wd = Od.deltaY * (Od.deltaMode === WheelEvent.DOM_DELTA_LINE ? hd : Od.deltaMode === WheelEvent.DOM_DELTA_PAGE ? vd : 1),
            Rd = Math.min(Kd, Math.max(Xd, md.radius + Wd * Fd));
          dd.setOrbit({
            ...md,
            radius: Rd
          })
        };
      return Od.style.touchAction = "none", Od.addEventListener("pointerdown", Qd), Od.addEventListener("pointermove", td), Od.addEventListener("pointerup", od), Od.addEventListener("pointercancel", od), Od.addEventListener("wheel", Nd, {
        passive: !1
      }), () => {
        Od.removeEventListener("pointerdown", Qd), Od.removeEventListener("pointermove", td), Od.removeEventListener("pointerup", od), Od.removeEventListener("pointercancel", od), Od.removeEventListener("wheel", Nd)
      }
    }
  },
  35490: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      d: () => td,
      e: () => Qd
    });
    var Wd = md(310),
      Fd = md(107),
      Rd = md(145),
      Xd = md(141),
      Kd = md(725);
    const hd = new Set(["mali_bifrost"]);

    function vd() {
      if (Kd.e) return;
      const dd = (0, Fd.pageOperatingSystem)();
      if ("android" !== dd && "windows" !== dd || (0, Kd.b)("webgl_default")) return;
      if ("windows" === dd) return dd => "qualcomm" === (0, Fd.normaliseGpuVendor)((0, Xd.d)(dd).vendor);
      const Od = (0, Rd.p)(),
        md = null === Od ? (0, Wd.v)() : (0, Wd.j)(Od.vendor, Od.renderer);
      return null !== md && hd.has(md) ? dd => (0, Wd.q)((0, Xd.d)(dd).vendor, md) : void 0
    }

    function Qd(dd, Od) {
      return dd ? () => !0 : Od()
    }
    async function td(dd) {
      try {
        const Od = Qd(dd, vd),
          md = navigator.gpu;
        if (void 0 === Od || void 0 === md) return !1;
        const Wd = await (0, Xd.o)(md, {
          seed: !1,
          compatibility: Od
        });
        return "string" !== typeof Wd && Wd.compatibility && !(0, Xd.k)(Wd.adapter)
      } catch (Od) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Od), !1
      }
    }
  },
  35563: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      g: () => Xd
    });
    const Wd = [{
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

    function Fd(dd) {
      let Od, md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof dd) {
        if (!Number.isFinite(dd)) return "0";
        if (Math.abs(dd) < 100) {
          const Od = dd < 0 ? "-" : "",
            md = Math.abs(dd);
          return md >= 10 ? `${Od}${md.toFixed(1).replace(/\.0$/,"")}` : `${Od}${md.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Od = BigInt(Math.floor(dd))
      } else Od = dd;
      const Fd = Od < 0n ? -Od : Od,
        Rd = Od < 0n ? "-" : "",
        Xd = Fd.toString();
      if (Xd.length <= md) return `${Rd}${Xd}`;
      const Kd = 3 * Math.floor((Xd.length - 1) / 3);
      if (Kd < 3) return `${Rd}${Xd}`;
      if (Kd > 3 * Wd.length) {
        const dd = Xd[0],
          Od = Xd.slice(1, 3).replace(/0+$/, "");
        return `${Rd}${Od?`${dd}.${Od}`:dd}e${Xd.length-1}`
      }
      const {
        threshold: hd,
        suffix: vd
      } = Wd[Wd.length - Kd / 3], Qd = Fd / hd, td = Number(1000n * (Fd % hd) / hd), od = Number(Qd) + td / 1e3;
      let Nd;
      return Nd = od >= 100 ? Math.floor(od).toString() : od >= 10 ? od.toFixed(1).replace(/\.0$/, "") : od.toFixed(2).replace(/\.?0+$/, ""), `${Rd}${Nd}${vd}`
    }
    const Rd = Wd.map((dd => {
      let {
        threshold: Od,
        suffix: md
      } = dd;
      return {
        threshold: Number(Od),
        suffix: md
      }
    })).filter((dd => {
      let {
        threshold: Od
      } = dd;
      return Number.isFinite(Od)
    }));

    function Xd(dd) {
      const Od = Math.abs(dd),
        md = dd < 0 ? "-" : "";
      for (const {
          threshold: Wd,
          suffix: Fd
        }
        of Rd)
        if (Od >= Wd) {
          const dd = Od / Wd;
          if (dd >= 1e3) return `${md}${Od.toExponential(2).replace("e+","e")}`;
          let Rd;
          return Rd = dd >= 100 ? Math.floor(dd).toString() : dd >= 10 ? dd.toFixed(1).replace(/\.0$/, "") : dd.toFixed(2).replace(/\.?0+$/, ""), `${md}${Rd}${Fd}`
        } return `${md}${Od}`
    }
  },
  35541: (dd, Od, md) => {
    md.d(Od, {
      b: () => Qd,
      c: () => od,
      e: () => td,
      i: () => Xd,
      l: () => vd,
      m: () => hd
    });
    var Wd = md(405);
    const Fd = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Rd = {
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

    function Xd(dd) {
      var Od;
      return null !== (Od = Rd[dd]) && void 0 !== Od ? Od : {
        translationKey: ""
      }
    }
    const Kd = {
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

    function hd(dd) {
      return Fd.includes(dd)
    }

    function vd(dd) {
      var Od;
      return !0 === (null === dd || void 0 === dd || null === (Od = dd.customAttributes) || void 0 === Od ? void 0 : Od.cannotEnchant)
    }

    function Qd(dd, Od) {
      const {
        max: md
      } = Kd[dd].at(-1);
      return Od <= md
    }

    function td(dd) {
      const Od = Math.sin(dd / 80),
        md = dd => {
          if (dd <= 0) return 0;
          if (dd > 1) return 1;
          let Od = 0;
          const md = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Wd = 0; Wd < md.length; Wd++) {
            Od += (Wd % 2 === 0 ? 1 : -1) * md[Wd] * Math.pow(dd, 2 + Wd) / (2 + Wd)
          }
          return 72 * Od
        },
        Wd = .3 - .78 * Od,
        Fd = .5 - .78 * Od,
        Rd = .6 - .7 * Od,
        Xd = .8 - .6 * Od;
      let Kd = md(Wd),
        hd = md(Fd) - Kd,
        vd = md(Rd) - hd - Kd,
        Qd = md(Xd) - vd - hd - Kd;
      Wd < .041 && (hd /= 1 - Kd, vd /= 1 - Kd, Qd /= 1 - Kd, Kd = 0), Fd < .041 && (Kd /= 1 - hd, vd /= 1 - hd, Qd /= 1 - hd, hd = 0), Rd < .041 && (Kd /= 1 - vd, hd /= 1 - vd, Qd /= 1 - vd, vd = 0), Xd < .041 && (Kd /= 1 - Qd, hd /= 1 - Qd, vd /= 1 - Qd, Qd = 0);
      return {
        commonProb: Kd,
        uncommonProb: hd,
        rareProb: vd,
        epicProb: Qd,
        legendaryProb: 1 - (Qd + vd + hd + Kd)
      }
    }

    function od(dd, Od) {
      const {
        min: md,
        max: Fd
      } = Kd[dd][Od], Rd = Wd.b.sampleUniformIntDistribution(md, Fd, "includeMax");
      return {
        ...td(Rd),
        level: Rd
      }
    }
  },
  35513: () => {},
  35605: () => {},
  13963: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  15110: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16610: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  17126: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);