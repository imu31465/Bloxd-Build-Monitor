export const id = 90;
export const ids = [90];
export const modules = {
  34745: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      EverythingMenu: () => xJ
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1127),
      Ue = He(1323),
      Fe = He(2114),
      Je = He(1438),
      oe = He(1062),
      Re = He(1228);

    function ke(ee) {
      let {
        items: ie,
        link: He,
        onClick: ye,
        selectedItemId: be,
        className: ke,
        padStartsOnTab: qe = !0
      } = ee;
      const {
        t: fe
      } = (0, Ke.v)(), Te = (0, oe.g)(), pe = [];
      for (const Me of ie) {
        var Xe;
        const ee = pe[pe.length - 1];
        var ze;
        if (ee && ee.title === (null !== (Xe = Me.section) && void 0 !== Xe ? Xe : null)) ee.items.push(Me);
        else pe.push({
          title: null !== (ze = Me.section) && void 0 !== ze ? ze : null,
          items: [Me]
        })
      }
      return (0, Re.jsxs)("div", {
        className: Me()("MenuSideBarBody", ke),
        "data-pad-tabs": "2",
        children: [pe.map(((ee, ie) => {
          var He;
          return (0, Re.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [ee.title && (0, Re.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: fe(ee.title)
            }), ee.items.map((ee => {
              var ie;
              const He = !!ee.iconElement || !!ee.faIcon;
              return (0, Re.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": be === ee.id ? "true" : void 0,
                "data-pad-default-focus": qe && be === ee.id || void 0,
                className: Me()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: be === ee.id
                }),
                onClick: () => {
                  ye(ee.id)
                },
                children: [He && (0, Re.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (ie = ee.iconElement) && void 0 !== ie ? ie : (0, Re.jsx)(Ue.e, {
                    name: ee.faIcon
                  })
                }), (!Te || !He) && (0, Re.jsx)("div", {
                  children: fe(ee.title)
                }), ee.redDot && (0, Re.jsx)(Fe.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, ee.id)
            }))]
          }, null !== (He = ee.title) && void 0 !== He ? He : ie)
        })), He && (0, Re.jsxs)("div", {
          ...(0, Je.R)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: He.onClick,
          children: [(0, Re.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Re.jsx)(Ue.e, {
              name: He.faIcon
            })
          }), (0, Re.jsx)("div", {
            children: fe(He.title)
          }), (0, Re.jsx)(Ue.e, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var qe = He(2722),
      fe = He(1075),
      Te = He(2532),
      pe = He(3416),
      Xe = He(97),
      ze = He(1983),
      Be = He(2313),
      Ee = He(2318),
      ge = He(1674),
      Oe = He(1320),
      de = He(5501),
      We = He(18),
      te = He(34751);

    function Ze(ee) {
      let {
        setApplySettingsCallback: ie
      } = ee;
      const {
        clientEscMenuOptions: He
      } = (0, We.m)(["clientEscMenuOptions"]), [be, Me] = (0, ye.useState)(!1), [Ke, Ue] = (0, ye.useState)(!1), [Fe, oe] = (0, ye.useState)(6400), [ke, qe] = (0, ye.useState)(3600), [fe, Te] = (0, ye.useState)(!1), [pe, Xe] = (0, ye.useState)(!1);

      function ze(ee) {
        const ie = "screenshot" === ee ? Ue : Me;
        ie(!0);
        const He = fe ? "normals" : pe ? "depth" : null;
        te.devTools.downloadScene(ee, {
          width: Fe,
          height: ke,
          colouring: He
        }).catch((ee => {
          console.error("Couldn't download the scene", ee)
        })).finally((() => {
          ie(!1)
        }))
      }
      return (0, Re.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Re.jsx)(de.c, {
          label: "Disable Ambient Occlusion",
          checked: He.disableAmbientOcclusion,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              disableAmbientOcclusion: ee
            }), ie((() => de.j))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), te.devTools.supports("ambientLight") && (0, Re.jsx)(de.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: He.ambientLightIntensity,
          onChange: ee => {
            te.devTools.setAmbientLightIntensity(ee).then((() => {
              We.e.setClientEscMenuOptions({
                ambientLightIntensity: ee
              })
            })).catch((ee => {
              console.error("Couldn't set the ambient light", ee)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), te.devTools.supports("weaponRaycasts") && (0, Re.jsx)(de.c, {
          label: "Show Weapon Raycasts",
          checked: He.showWeaponRaycasts,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              showWeaponRaycasts: ee
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), te.devTools.supports("sceneDownload") && (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Re.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Re.jsx)(de.c, {
              label: "Apply normal-based coloring",
              checked: fe,
              onClick: ee => {
                Te(ee), ee && Xe(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Re.jsx)(de.c, {
              label: "Apply depth-based coloring",
              checked: pe,
              onClick: ee => {
                Xe(ee), ee && Te(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Re.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Re.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Re.jsx)(ge.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (ee, ie) => {
                  const He = parseInt(ee) || 6400;
                  oe(He)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Fe.toString()
              }), (0, Re.jsx)("span", {
                children: "X"
              }), (0, Re.jsx)(ge.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (ee, ie) => {
                  const He = parseInt(ee) || 3600;
                  qe(He)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: ke.toString()
              })]
            }), (0, Re.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Re.jsxs)(Je.c, {
                onClick: () => {
                  ze("screenshot")
                },
                disabled: Ke,
                children: [Ke && (0, Re.jsx)(Oe.b, {}), "Download Screenshot"]
              }), (0, Re.jsxs)(Je.c, {
                onClick: () => {
                  ze("glb")
                },
                disabled: be,
                children: [be && (0, Re.jsx)(Oe.b, {}), "Download GLB"]
              })]
            })]
          }), (0, Re.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var we = He(125),
      De = He(1083),
      Pe = He(34758),
      Ae = He(3262),
      Ye = He(1502),
      Ve = He(1207),
      ae = He(1186),
      ce = He(2092),
      xe = He(1490),
      Le = He(347),
      Ce = He(1564),
      ve = He(592),
      ue = He(2397);
    const me = "store:retiredRankEnds";

    function le(ee) {
      let {
        until: ie,
        className: He
      } = ee;
      const {
        t: ye,
        selectedLanguage: be
      } = (0, Ke.v)(), Me = new Date(ie).toLocaleDateString((0, Ke.l)(be.code, me), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, Re.jsx)("span", {
        className: He,
        children: ye(me, {
          date: Me
        })
      })
    }
    var Se = He(2330),
      ne = He(3303),
      je = He(3296),
      se = He(198),
      Ie = He(1625),
      he = He(1196),
      Ne = He(3321);

    function Ge(ee, ie, He) {
      const ye = ve.j[(0, ve.f)(ve.j, ie)],
        be = void 0 === ye ? void 0 : (0, se.b)(ee.entitlements, ye.entitlementId);
      return void 0 === be || null === be.expiresAt || (0, je.h)(be) <= He ? null : be.willRenew && null === be.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(be.expiresAt, He)
      } : {
        renews: !1,
        at: (0, je.h)(be)
      }
    }
    var re = He(3285),
      Qe = He(3293);
    const ei = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function ii(ee) {
      return ee instanceof ne.c && "storeUnavailable" === ee.code ? (console.warn("Billing: the store didn't take a subscription change:", ee), "store:subscriptionStoreUnavailable") : ee instanceof ne.c && "subscriptionActionUnavailable" === ee.code ? (console.warn("Billing: a subscription action billing no longer offers:", ee), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", ee), "store:subscriptionChangeFailed")
    }
    async function Hi() {
      try {
        var ee;
        const {
          offering: ie
        } = await (0, Qe.getBillingClient)().getOfferings((0, ue.n)(Date.now()).placementId);
        return null !== (ee = null === ie || void 0 === ie ? void 0 : ie.packages.find(re.isPricedPackage)) && void 0 !== ee ? ee : null
      } catch (ie) {
        return console.warn("Billing: loading the rank plan's price failed:", ie), null
      }
    }

    function yi(ee) {
      const {
        userContext: ie
      } = (0, fe.b)(), {
        superRankInfo: He
      } = ie, be = (0, Se.usePurchasesAllowed)(), Me = (0, Le.Cc)(He), Ke = ee && be && (Me || ie.ranksMayChange), [Ue, Fe] = (0, ye.useState)(null), [Je, oe] = (0, ye.useState)(!1), [Re, ke] = (0, ye.useState)(!1), [qe, Te] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        if (!Ke) return;
        let ee = !1;
        const He = () => {
          Promise.all([(0, Qe.getBillingClient)().getSubscriptions(), Hi()]).then((He => {
            let [ye, be] = He;
            ee || (Fe({
              for: ie,
              answer: ye,
              pkg: be
            }), oe(!1))
          }), (ie => {
            console.error("Billing: loading the player's subscriptions failed:", ie), ee || oe(!0)
          }))
        };
        He();
        const ye = Ie.b.addRefetchListener("billing", He);
        return () => {
          ee = !0, ye()
        }
      }), [Ke, ie]);
      const pe = Ke && Me && null !== Ue && Ue.for === ie ? function(ee, ie, He, ye) {
        var be;
        const {
          customerInfo: Me,
          actions: Ke
        } = ee, Ue = ve.j[(0, ve.f)(ve.j, ie)], Fe = void 0 === Ue ? void 0 : (0, se.b)(Me.entitlements, Ue.entitlementId), Je = Ge(Me, ie, ye);
        if (void 0 === Fe || null === Je) return null;
        const oe = Object.entries(Me.subscriptions).find((ee => {
          let [, ie] = ee;
          return ie.productId === Fe.productId && ie.store === Fe.store && !(0, je.l)(ie.status)
        }));
        if (void 0 === oe) return null;
        const [Re, ke] = oe;
        return {
          key: Re,
          tierId: ie,
          info: ke,
          actions: null !== (be = (0, se.b)(Ke, Re)) && void 0 !== be ? be : ei,
          date: Je,
          pkg: (null === He || void 0 === He ? void 0 : He.productId) === ke.productId ? He : null
        }
      }(Ue.answer, He.tier, Ue.pkg, Date.now()) : null;
      return {
        subscription: pe,
        loadFailed: Ke && Me && Je,
        busy: Re,
        errorKey: qe,
        change: async function(ee) {
          if (null === pe || Re) return;
          ke(!0), Te(null);
          const He = (0, Qe.getBillingClient)();
          try {
            const ye = await ("cancel" === ee ? He.cancelSubscription(pe.key) : He.resumeSubscription(pe.key));
            Fe({
              for: ie,
              answer: ye,
              pkg: pe.pkg
            }), (0, Ne.g)()
          } catch (ye) {
            Te(ii(ye))
          } finally {
            ke(!1)
          }
        },
        openManagePage: async function() {
          if (null === pe || Re) return;
          const ee = window.open("", "_blank");
          ke(!0), Te(null);
          try {
            const ie = await (0, Qe.getBillingClient)().subscriptionManagementUrl(pe.key, he.f.get().getCurrentLanguageCode());
            null === ee ? window.open(ie, "_blank", "noopener") : (ee.opener = null, ee.location.href = ie)
          } catch (ie) {
            null === ee || void 0 === ee || ee.close(), Te(ii(ie))
          } finally {
            ke(!1)
          }
        }
      }
    }
    var bi = He(1340),
      Mi = He(3349);

    function Ki(ee, ie) {
      return new Date(ee).toLocaleDateString(ie, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function Ui(ee) {
      let {
        showing: ie,
        className: He
      } = ee;
      const {
        t: ye,
        selectedLanguage: be
      } = (0, Ke.v)(), {
        subscription: Fe,
        loadFailed: oe,
        busy: ke,
        errorKey: qe,
        change: fe,
        openManagePage: Te
      } = yi(ie);
      if (oe) return (0, Re.jsx)("div", {
        className: Me()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", He),
        children: ye("store:subscriptionLoadFailed")
      });
      if (null === Fe) return null;
      const {
        date: pe,
        info: Xe,
        actions: ze,
        pkg: Be
      } = Fe, Ee = pe.renews ? "store:renewsOn" : "store:endsOn", ge = Ki(pe.at, (0, Ke.l)(be.code, Ee)), Oe = ye((0, ue.k)(Fe.tierId).nameKey), de = null !== Xe.billingIssueDetectedAt;
      return (0, Re.jsxs)("div", {
        className: Me()("RankSubscriptionManage", He),
        children: [(0, Re.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [ye(Ee, {
            date: ge
          }), pe.renews && null !== Be && (0, Se.subscriptionsSold)() && (0, Re.jsxs)(Re.Fragment, {
            children: [" \xb7 ", ye("store:pricePerMonth", {
              price: (0, Mi.h)(Be)
            })]
          })]
        }), de && (0, Re.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, Re.jsx)(Ue.e, {
            name: "triangle-exclamation"
          }), " ", ye("store:paymentFailing", {
            rank: Oe
          })]
        }), (0, Re.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [ze.manage && (0, Re.jsx)(Je.e, {
            disabled: ke,
            onClick: () => {
              Te()
            },
            children: ye(de ? "store:updatePayment" : "payments:manageSubscription")
          }), ze.resume && (0, Re.jsx)(Je.c, {
            loading: ke,
            onClick: () => {
              fe("resume")
            },
            children: ye("store:resumeSubscription")
          }), ze.cancel && (0, Re.jsx)(Je.G, {
            loading: ke,
            onClick: () => {
              (async function(ee, ie, He) {
                const ye = Date.now() >= ee.info.currentPeriodEnd;
                return !0 === await bi.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: ye ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: ie
                    },
                    subtitle: {
                      rank: ie,
                      date: He
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(Fe, Oe, Ki(Xe.currentPeriodEnd, (0, Ke.l)(be.code, "store:cancelKeepsUntil"))).then((ee => {
                ee && fe("cancel")
              }))
            },
            children: ye("store:cancelSubscription")
          })]
        }), null !== qe && (0, Re.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: ye(qe)
        })]
      })
    }
    var Fi = He(2326),
      Ji = He(2862),
      oi = He(1851);
    async function Ri() {
      try {
        return function(ee) {
          const ie = new Map;
          for (const {
              store: He,
              status: ye,
              autoRenewStatus: be,
              managementUrl: Me
            }
            of Object.values(ee.subscriptions)) !(0, je.k)(He) || (0, je.l)(ye) || "willNotRenew" === be || ie.has(He) || ie.set(He, null !== Me && void 0 !== Me ? Me : je.n[He]);
          return Array.from(ie, (ee => {
            let [ie, He] = ee;
            return {
              store: ie,
              managementUrl: He
            }
          }))
        }(await (0, oi.k)((0, Qe.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (ee) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", ee), null
      }
    }

    function ki(ee) {
      const {
        t: ie,
        selectedLanguage: He
      } = (0, Ke.v)(), {
        userContext: be
      } = (0, fe.b)(), {
        superRankInfo: Me
      } = be, Ue = (0, Se.usePurchasesAllowed)(), Fe = ee && ((0, Le.Cc)(Me) || be.ranksMayChange) && Ue, {
        accountId: Je,
        data: oe
      } = (0, Ji.h)(Ne.c, Fe);
      if ((0, ye.useEffect)((() => {
          if (Fe) return Ne.c.watchAccount(), Ie.b.addRefetchListener("billing", (ee => {
            "reconnected" === ee ? Ne.c.refreshAfterReconnect() : Ne.c.refresh()
          }))
        }), [Fe]), !Fe || !(0, Le.Cc)(Me) || null === oe || Je !== be.whamm) return null;
      const Re = Ge(oe, Me.tier, Date.now());
      if (null === Re) return null;
      const ke = Re.renews ? "store:renewsOn" : "store:endsOn",
        qe = (0, Ke.f)(He.code, ke, Re.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        Te = (0, Se.getBillingStore)(),
        pe = null !== Te && (0, je.k)(Te) ? function(ee, ie) {
          var He;
          const ye = Object.values(ee.subscriptions).find((ee => ee.store === ie && !(0, je.l)(ee.status)));
          return void 0 === ye ? null : null !== (He = ye.managementUrl) && void 0 !== He ? He : je.n[ie]
        }(oe, Te) : null;
      return {
        text: ie(ke, {
          date: qe
        }),
        manageUrl: pe
      }
    }
    var qi = He(1351),
      fi = He(1160),
      Ti = He(5358),
      Xi = He(1464),
      zi = He(4060),
      Bi = He(2473);

    function Ei(ee) {
      let {
        showing: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), {
        data: ye,
        failed: be
      } = (0, Ji.h)(zi.f, ie);
      return 0 === (null === ye || void 0 === ye ? void 0 : ye.length) || null === ye && !be ? null : (0, Re.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Re.jsx)("div", {
          className: "AccountSettingsLabel",
          children: He("paymentHistory:title")
        }), null === ye && be && (0, Re.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: He("paymentHistory:loadFailed")
        }), null !== ye && (0, Re.jsx)("ul", {
          className: "PaymentHistoryList",
          children: ye.map((ee => (0, Re.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Re.jsx)(Bi.b, {
              entry: ee
            }), (0, Re.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Re.jsx)("div", {
                children: (0, Bi.i)(He, ee)
              }), (0, Re.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(ee.at).toLocaleDateString(), "number" === typeof ee.orderId && ` \xb7 ${He("paymentHistory:order",{orderId:ee.orderId})}`]
              })]
            })]
          }, (0, zi.d)(ee))))
        })]
      })
    }
    var gi = He(2334),
      Oi = He(2164);

    function di() {
      (0, Oi.c)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Wi(ee) {
      let {
        status: ie
      } = ee;
      switch (ie) {
        case "restored":
          return (0, Ne.g)(), {
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

    function ti() {
      const ee = (0, Qe.usePageBillingClient)(),
        {
          userContext: ie
        } = (0, fe.b)(),
        [He, be] = (0, ye.useState)(!1),
        [Me, Ke] = (0, ye.useState)(null);
      return {
        restoring: He,
        notice: Me,
        restore: () => {
          ie.isLoggedIn() ? (be(!0), Ke(null), ee.restorePurchases().then(Wi, (ee => ee instanceof ne.c && "loginRequired" === ee.code ? (di(), null) : function(ee) {
            return ee instanceof ne.c && "storeBusy" === ee.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", ee), (0, Ne.g)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(ee))).then(Ke).finally((() => {
            be(!1)
          }))) : di()
        }
      }
    }

    function Zi(ee) {
      let {
        restoring: ie,
        notice: He,
        restore: be
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), Fe = (0, Se.usePurchasesAllowed)(), oe = (0, Se.getBillingStore)(), ke = (0, ye.useRef)(null);
      return (0, ye.useEffect)((() => {
        var ee;
        null === (ee = ke.current) || void 0 === ee || ee.scrollIntoView({
          block: "nearest"
        })
      }), [He]), Fe && (0, gi.c)(oe) ? (0, Re.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, Re.jsx)(Je.e, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: ie,
          onClick: be,
          children: Ue("payments:restorePurchases")
        }), null !== He && (0, Re.jsx)("div", {
          ref: ke,
          className: Me()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: He.failed
          }),
          children: Ue(He.key)
        })]
      }) : null
    }
    var wi = He(1943),
      Di = He(1192),
      Pi = He(1141),
      Ai = He(1294),
      Yi = He(335),
      Vi = He(2609);
    const ai = {
      appStore: {
        name: "App Store",
        ...Yi.cc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Yi.cc.googlePlay
      },
      discord: {
        name: "Discord",
        ...Yi.cc.discord
      }
    };

    function ci(ee) {
      let {
        warning: ie,
        subscriptions: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return null !== He && 0 === He.length ? (0, Re.jsx)(Re.Fragment, {
        children: ye(ie)
      }) : (0, Re.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [ye(ie), null === He && (0, Re.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: ye("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== He && (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: ye("auth:deleteAccountStoreSubscriptions")
          }), (0, Re.jsx)(Vi.c, {
            className: "DeleteAccountSubtitleLinks",
            links: He.map((ee => {
              let {
                store: ie,
                managementUrl: He
              } = ee;
              return {
                ...ai[ie],
                url: He
              }
            }))
          })]
        })]
      })
    }
    var xi = He(5075);

    function Li(ee) {
      let {
        showing: ie
      } = ee;
      const {
        userContext: He,
        isUserContextUpdating: be
      } = (0, fe.b)(), {
        t: Me
      } = (0, Ke.v)(), [Ue, Fe] = (0, ye.useState)(!1), [oe, ke] = (0, ye.useState)(null), qe = (0, ye.useRef)(ie);
      (0, ye.useEffect)((() => (qe.current = ie, () => {
        qe.current = !1
      })), [ie]);
      const Te = be || Ue;
      return (0, Re.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Re.jsxs)(Je.G, {
          onClick: async function() {
            if (!Ue) {
              Fe(!0);
              try {
                const ee = await async function() {
                  const [ee, ie] = await Promise.all([(0, wi.e)(He.availableUserContextTypes) ? Ri() : [], vi(He)]);
                  if (!qe.current) return Di.e.ok();
                  const ye = (0, Ve.e)(He.getPlayerName(), !Xe.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await bi.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: ye
                        }
                      },
                      subtitle: (0, Re.jsx)(ci, {
                        warning: Ci(He.isLoggedIn(), ie),
                        subscriptions: ee
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: ie ? Me("auth:deleteAccountTypedConfirm", {
                        playerName: ye
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Di.e.ok();
                  const be = await (0, De.postJsonWithMetricsCookiesAndJsonResponse)(`${Pi.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: We.e.get("gameState")
                  }, {
                    retries: 3
                  }, He.getMetricsCookies());
                  if (be.error) return Di.e.error(be.error);
                  (0, we.isDiscordClient)() && (await Ai.l.discordActivity()).exit("User deleted their account");
                  return xi.b.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, De.forgetStoredGuestAccount)(He.whamm), (0, De.forceGlobalSignOut)(!0), Di.e.ok()
                }(), ie = ee.isError() ? ee.asError().message : null;
                ke(ie)
              } catch (ee) {
                console.error("Failed to delete account:", ee), ke(Me("auth:genericDeleteAccountError"))
              }
              Fe(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Te,
          children: [Te && (0, Re.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Re.jsx)(Oe.b, {})
          }), Me("auth:deleteAccount")]
        }), oe && (0, Re.jsx)("div", {
          className: "DeleteAccountError",
          children: oe
        })]
      })
    }

    function Ci(ee, ie) {
      return (0, we.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : ee ? "auth:deleteAccountLossWarning" : ie ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function vi(ee) {
      try {
        const {
          accountCreatedAt: ie
        } = await (0, oi.k)(xe.b.getPlayerProfile(ee, {
          lowerCaseName: ee.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== ie && Date.now() - ie >= 7 * Le.h
      } catch (ie) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", ie), !0
      }
    }
    var ui = He(3987),
      mi = He(4001),
      li = He(3998);

    function Si(ee) {
      let {
        showing: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), {
        data: ye,
        failed: be
      } = (0, Ji.h)(ui.b, ie), Me = null === ye ? null : (0, ui.d)(ye);
      return (0, Re.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Re.jsx)("div", {
          className: "AccountSettingsLabel",
          children: He("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Me && !be && (0, Re.jsx)(Oe.b, {}), null === Me && be && (0, Re.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [He("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Re.jsx)(Je.c, {
            className: "SmallTextLight",
            onClick: () => {
              ui.b.refresh()
            },
            children: He("general:tryAgain")
          })]
        }), 0 === (null === Me || void 0 === Me ? void 0 : Me.length) && (0, Re.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: He("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Me && Me.length > 0 && (0, Re.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Me.map((ee => {
            let {
              name: ie,
              exclusion: ye
            } = ee;
            const be = li.h[ye];
            return (0, Re.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Re.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: ie
              }), (0, Re.jsx)(Je.e, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, mi.g)(be, ie, {
                    chatMessage: null
                  })
                },
                children: He(li.j[be].text)
              })]
            }, ie)
          }))
        })]
      })
    }
    var ni = He(5091),
      ji = He(3724),
      si = He(34765);

    function Ii(ee) {
      let {
        userContext: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)();
      return ji.b && (0, ni.k)() && ie !== De.NULL_USER_CONTEXT ? (0, Re.jsxs)("div", {
        className: "SettingBox",
        children: [(0, Re.jsx)("div", {
          className: "AccountSettingsLabel",
          children: He("settingsMenu:playerId")
        }), (0, Re.jsx)(si.e, {
          text: (0, ni.j)(ie)
        })]
      }) : null
    }
    const Ni = (0, ye.memo)((function(ee) {
      var ie, He;
      let {
        showing: be,
        inGame: Fe
      } = ee;
      const {
        t: oe,
        selectedLanguage: ke
      } = (0, Ke.v)(), {
        hideSocialLocationFrom: Te
      } = (0, We.m)(["hideSocialLocationFrom"]), pe = (0, Se.usePurchasesAllowed)(), ze = ti(), Be = (0, qe.c)(), {
        userContext: Ee,
        isUserContextUpdating: te
      } = (0, fe.b)(), [Ze, me] = (0, ye.useState)(null !== (ie = Ee.getPlayerName()) && void 0 !== ie ? ie : ""), [ne, je] = (0, ye.useState)(null), {
        purchasing: se,
        outcome: Ie,
        purchase: he
      } = (0, Ae.d)("/super-rank-welcome"), Ne = (0, Le.kc)((0, Ke.l)(ke.code, "general:timeLeft"), Ee.superRankInfo), Ge = null === (He = ki(be)) || void 0 === He ? void 0 : He.text, re = Date.now(), Qe = (0, Ce.h)(re), ei = (0, ue.r)(re), ii = (0, ue.k)(Qe.id), Hi = (0, ue.j)(Ee.getPlayerRanks(), re), yi = (0, ue.m)(Ee.superRankInfo, re), bi = Qe.id !== ve.n.id, Mi = bi && !Hi && (0, Le.Cc)(Ee.superRankInfo) ? Ee.superRankInfo : null, Ki = Ne ? oe("general:timeLeft", {
        time: Ne
      }) : !(bi && pe) && Ge, [Ji, oi] = (0, ye.useState)(!1), [Ri, zi] = (0, ye.useState)(!1), Bi = (0, ye.useRef)(null), gi = (0, ye.useRef)(null), Oi = (0, ce.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), di = null === Oi, Wi = null !== Oi && void 0 !== Oi ? Oi : [], wi = Ee !== De.NULL_USER_CONTEXT && !Ee.isLoggedIn(), Di = wi && 0 !== (null === Oi || void 0 === Oi ? void 0 : Oi.length), [Pi, Ai] = (0, ye.useState)([]), [Yi, Vi] = (0, ye.useState)(!1), ai = Ee.playerHasRank("youtuber"), ci = (0, ye.useCallback)((() => xe.b.getPlayerProfile(Ee, {
        lowerCaseName: Ee.getPlayerName().toLowerCase()
      }).then((ee => {
        Ai(ee.socialLinks)
      })).catch((ee => {
        console.error("Failed to refresh social links", ee)
      }))), [Ee]);

      function xi(ee) {
        ee !== Ze && ((0, Ve.j)(ee) ? (ee = (0, Ve.l)(ee), je(oe("homePage:nameCharacters"))) : je(null), Bi.current && (Bi.current.value = ee), me(ee))
      }
      return (0, ye.useEffect)((() => (!0 === be ? (clearInterval(gi.current), gi.current = setInterval(Be, 1e3)) : clearInterval(gi.current), () => {
        clearInterval(gi.current)
      })), [be, Be]), (0, ye.useEffect)((() => {
        var ee;
        me(null !== (ee = Ee.getPlayerName()) && void 0 !== ee ? ee : "")
      }), [Ee]), (0, ye.useEffect)((() => {
        if (!be || !ai || te) return;
        let ee = !1;
        return Vi(!0), Ai([]), xe.b.getPlayerProfile(Ee, {
          lowerCaseName: Ee.getPlayerName().toLowerCase()
        }).then((ie => {
          ee || Ai(ie.socialLinks)
        })).catch((ee => {
          console.error("Failed to load social links", ee)
        })).finally((() => {
          ee || Vi(!1)
        })), () => {
          ee = !0
        }
      }), [be, ai, te, Ee]), (0, Re.jsxs)("div", {
        className: Me()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Fe
        }),
        children: [Fe && (0, Re.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: oe("settingsMenu:accountSettingsInGameWarning")
        }), (0, Re.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Re.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [oe("homePage:discordNamePopupTitle"), (0, Re.jsxs)(Ye.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, ae.j)({
                name: Ee.getPlayerName()
              }),
              onClick: () => {
                We.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Re.jsx)(Ue.e, {
                name: "arrow-up-right-from-square"
              }), " ", oe("profileCard:viewProfile")]
            })]
          }), (0, Re.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Re.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Xe.featureFlags.canChangeName && (0, Re.jsx)(ge.d, {
                className: "EnterName",
                placeholderText: oe("homePage:enterName"),
                maxLength: Ve.g,
                defaultValue: Ze,
                onValueChange: ee => {
                  xi(ee)
                },
                forcedText: Ji || !Xe.featureFlags.canChangeName ? Ze : null,
                blurOnEnter: !0,
                domRef: Bi
              }), (0, Re.jsx)(Je.c, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  xi((0, Ve.f)())
                },
                children: (0, Re.jsx)(Ue.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Xe.featureFlags.canChangeName && (0, Re.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Ve.e)(Ze, !Xe.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Re.jsx)(Je.c, {
              className: "ChooseNameButton",
              disabled: Ji || Ze === Ee.getPlayerName(),
              onClick: () => {
                Ze.length < Ve.i ? je(oe("homePage:changeNameMinLengthError", {
                  length: Ve.i
                })) : Ze.length > Ve.g ? je(oe("homePage:changeNameMaxLengthError", {
                  length: Ve.g
                })) : (oi(!0), je(null), (0, Pe.j)(Ee, Ze).then((ee => {
                  oi(!1), "taken" === ee.outcome ? je(oe("homePage:nameTaken")) : "refused" === ee.outcome ? je(ee.message) : "failed" === ee.outcome && je(oe((0, Pe.i)(ee.failure)))
                })))
              },
              children: oe("general:choose")
            })]
          }), ne && (0, Re.jsx)("div", {
            className: "ChooseAccNameError",
            children: ne
          })]
        }), (0, Re.jsx)(Ii, {
          userContext: Ee
        }), (0, Re.jsx)(de.c, {
          label: (() => {
            if ((0, fi.k)(Te)) {
              const ee = (0, Ke.l)(ke.code, "general:timeLeft"),
                ie = (0, Le.ib)(ee, Date.now(), Te + fi.h);
              return `${oe("settingsMenu:hideSocialLocation")} (${oe("general:timeLeft",{time:ie})})`
            }
            return oe("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const ee = !(0, fi.k)(Te);
            (0, Xi.reportAnalyticsClick)({
              id: "social.hide_location",
              value: ee ? "on" : "off"
            }), zi(!0), xe.b.setHideSocialLocation(Ee, ee).then((() => {
              We.e.set({
                hideSocialLocationFrom: ee ? Date.now() : null
              })
            })).finally((() => {
              zi(!1)
            }))
          },
          checked: (0, fi.k)(Te),
          disabled: Ri
        }), ai && (0, Re.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Re.jsx)("div", {
            className: "AccountSettingsLabel",
            children: oe("settingsMenu:socialLinks")
          }), Yi && (0, Re.jsx)(Oe.b, {}), !Yi && (0, Re.jsx)(Ti.d, {
            socialLinks: Pi,
            editable: !0,
            userContext: Ee,
            onLinksUpdated: ci
          })]
        }), (0, Re.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Re.jsx)("div", {
            className: "AccountSettingsLabel",
            children: oe(Di ? "auth:loginOrSwitchAccount" : "auth:login")
          }), di && (0, Re.jsx)(Oe.b, {}), !di && 0 === Wi.length && (0, Re.jsx)("div", {
            className: "NoLoginOptions",
            children: oe("auth:noLoginOptions")
          }), !di && Wi.length > 0 && "crazygames" !== we.siteUsed && (0, Re.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Wi
          }), !di && Wi.length > 0 && "crazygames" === we.siteUsed && (0, Re.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Wi[0], Wi.length > 1 && (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Re.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: oe("auth:legacyLoginOptions")
                }), (0, Re.jsx)(qi.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: oe("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Re.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Wi.slice(1)
              })]
            })]
          }), Xe.featureFlags.useLogin && (null !== Ee.loggedInInfo || Ee.isLoggedIn()) && (0, Re.jsxs)(Re.Fragment, {
            children: [(0, Re.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Re.jsxs)(Je.G, {
              onClick: () => {
                (0, De.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Re.jsx)(Ue.e, {
                name: "right-from-bracket"
              }), oe("auth:signOut")]
            })]
          })]
        }), null !== Mi && (0, Re.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Re.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, Re.jsx)(ue.h, {
              tierId: Mi.tier
            })
          }), (0, Re.jsx)(Ui, {
            showing: be
          })]
        }), !Hi && pe && (0, Re.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Re.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, Re.jsx)(ue.h, {
              tierId: Qe.id
            })
          }), null !== yi && (0, Re.jsx)(le, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: yi
          }), (0, Re.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Re.jsxs)(Je.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Fi.r)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Re.jsx)(Ue.e, {
                name: "bolt"
              }), oe(null !== yi ? "store:upgradeToHyperRank" : ii.getKey)]
            }), (0, Re.jsxs)(Je.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Fi.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Re.jsx)(Ue.e, {
                name: "bolt"
              }), oe(ii.giftKey)]
            })]
          }), (0, Re.jsx)(Zi, {
            ...ze
          })]
        }), Hi && (0, Re.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Re.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Re.jsx)(ue.h, {
              tierId: Qe.id
            }), Ki && (0, Re.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Ki, ")"]
            })]
          }), bi && (0, Re.jsx)(Ui, {
            showing: be
          }), pe && (0, Re.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Le.Cc)(Ee.superRankInfo) && (0, Re.jsxs)(Je.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: se,
              onClick: () => {
                he(ei.id, null)
              },
              children: [(0, Re.jsx)(Ue.e, {
                name: "bolt"
              }), oe("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: ei.product.days,
                price: ei.price
              })]
            }), (0, Re.jsxs)(Je.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Fi.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Re.jsx)(Ue.e, {
                name: "bolt"
              }), oe(ii.giftKey)]
            })]
          }), Ie && (0, Re.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: oe(Ie.translationKey)
          }), (0, Re.jsx)(Zi, {
            ...ze
          })]
        }), (0, Re.jsx)(Ei, {
          showing: be
        }), Xe.featureFlags.useSocialFeatures && (0, Re.jsx)(Si, {
          showing: be
        }), (0, Re.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Re.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Re.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: oe(Gi(wi, Di))
            }), (0, we.isDiscordClient)() && (0, Re.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: oe("auth:discordActivityKickWarning")
            }), (0, Re.jsx)(Li, {
              showing: be
            })]
          }), (0, Re.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: oe(wi ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Gi(ee, ie) {
      return ee ? ie ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var ri = He(34767),
      Qi = He(3442),
      eH = He(1425),
      iH = He(2029),
      HH = He(9614),
      yH = He(34770);

    function bH() {
      const {
        t: ee
      } = (0, Ke.v)();
      return (0, iH.k)("localPlayerAlive") ? (0, Re.jsx)(HH.d, {
        icon: "camera-alt",
        title: ee("screenshotMode:title"),
        sub: ee("screenshotMode:entrySub"),
        onClick: yH.e
      }) : null
    }
    var MH = He(34783);
    const KH = (0, ye.memo)((function(ee) {
        let {
          inGame: ie
        } = ee;
        const {
          t: He,
          selectedLanguage: ye
        } = (0, Ke.v)(), {
          clientEscMenuOptions: be,
          showDebugOverlay: Me,
          isTouchScreen: Ue
        } = (0, We.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), Fe = (0, Te.i)("hideCoordinates");
        let Je = "settingsMenu:showCoordinates",
          oe = "settingsMenu:showChunkCoordinates";

        function ke(ee) {
          const ie = new Intl.DisplayNames([ee], {
            type: "language"
          }).of(ee);
          return ie.charAt(0).toUpperCase() + ie.slice(1)
        }
        return Fe && (Je = "settingsMenu:showCoordinatesHidden", oe = "settingsMenu:showChunkCoordinatesHidden"), (0, Re.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [ie && Xe.featureFlags.canUseInviteLinks && (0, Re.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Re.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: He("settingsMenu:inviteLink")
            }), (0, Re.jsx)(ri.c, {})]
          }), (0, Re.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Re.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: He("settingsMenu:language")
            }), (0, Re.jsx)(Qi.e, {
              options: Object.entries(Ke.j).map((ee => {
                let [ie, He] = ee;
                return {
                  label: (0, Re.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Re.jsx)("img", {
                      src: He.flagImg,
                      alt: "flag"
                    }), (0, Re.jsxs)("span", {
                      children: [ke(ie), " ", (0, Re.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", ie, ")"]
                      })]
                    })]
                  }),
                  value: ie
                }
              })),
              value: ye.code,
              onChange: ee => {
                he.f.get().setCurrentLanguage(ee.value)
              }
            })]
          }), ie && Ue && (0, MH.d)() && (0, Re.jsx)(bH, {}), !(0, Xe.isMobileApp)() && (0, eH.i)() && Xe.featureFlags.useForceRotateForceFullscreenOverlay && (0, Re.jsx)(de.c, {
            label: He("settingsMenu:disableFullscreenMode"),
            checked: be.disableFullscreen,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                disableFullscreen: ee
              })
            }
          }), (0, Re.jsx)(de.c, {
            label: He(Je),
            checked: be.showCoordinates,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showCoordinates: ee
              })
            },
            disabled: Fe
          }), (0, Re.jsx)(de.c, {
            label: He(oe),
            checked: be.showChunkCoordinates,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showChunkCoordinates: ee
              })
            },
            disabled: Fe
          }), (0, Re.jsx)(de.c, {
            label: He("settingsMenu:showFps"),
            checked: be.showFPS,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showFPS: ee
              })
            }
          }), (0, Re.jsx)(de.c, {
            label: He("settingsMenu:disableBunnyHopping"),
            checked: be.disableBunnyHopping,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                disableBunnyHopping: ee
              })
            }
          }), (0, Ai.x)() && (0, Re.jsx)(de.c, {
            label: He("settingsMenu:showChat"),
            checked: be.showChat,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showChat: ee
              })
            }
          }), (0, Re.jsx)(de.c, {
            label: He("settingsMenu:showDebugOverlay"),
            checked: Me,
            onClick: ee => {
              We.e.set({
                showDebugOverlay: ee
              })
            }
          }), Xe.featureFlags.useSocialFeatures && (0, Re.jsx)(de.c, {
            label: He("settingsMenu:showFriendOnlineToasts"),
            checked: be.showFriendOnlineToasts,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showFriendOnlineToasts: ee
              })
            }
          }), (0, Re.jsx)(de.c, {
            label: He("settingsMenu:showNewItemIndicator"),
            checked: be.showNewItemIndicator,
            onClick: ee => {
              We.e.setClientEscMenuOptions({
                showNewItemIndicator: ee
              })
            }
          })]
        })
      })),
      UH = (0, ye.memo)((function() {
        const {
          t: ee
        } = (0, Ke.v)(), {
          soundVolume: ie,
          musicVolume: He
        } = (0, We.m)(["soundVolume", "musicVolume"]);
        return (0, Re.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Re.jsx)(de.f, {
            name: ee("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: He,
            onChange: ee => {
              We.e.set({
                musicVolume: Math.round(100 * ee) / 100
              })
            },
            format: ee => ee.toFixed(2)
          }), (0, Re.jsx)(de.f, {
            name: ee("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ie,
            onChange: ee => {
              We.e.set({
                soundVolume: Math.round(100 * ee) / 100
              })
            },
            format: ee => ee.toFixed(2)
          })]
        })
      }));
    var FH = He(699),
      JH = He(1432),
      oH = He(2466),
      RH = He(2458),
      kH = He(3871);
    const qH = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function fH() {
      const {
        t: ee
      } = (0, Ke.v)(), ie = (0, kH.c)(), {
        mobilePushNotificationsCanAsk: He
      } = (0, We.m)(["mobilePushNotificationsCanAsk"]), [be, Me] = (0, ye.useState)(null), [Ue, Fe] = (0, ye.useState)(!1), [oe, ke] = (0, ye.useState)(null), [qe, fe] = (0, ye.useState)(!1), Te = (0, ye.useCallback)((() => {
        (0, oH.d)().then((ee => {
          ie.current && (Me(ee), Fe(!1))
        })).catch((ee => {
          console.error("Failed to load push notification targets:", ee), ie.current && Fe(!0)
        }))
      }), [ie]), pe = (0, ye.useCallback)((() => {
        (0, RH.e)().then((ee => {
          ie.current && ke((() => ee))
        }))
      }), [ie]);
      (0, ye.useEffect)((() => {
        Te()
      }), [Te]), (0, ye.useEffect)((() => {
        pe()
      }), [pe, He]), (0, JH.f)(oH.k, Te);
      const Xe = null === be ? [] : Object.keys(qH).filter((ee => be[ee] > 0));
      return (0, Re.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Re.jsx)("div", {
          className: "SliderText",
          children: ee("notificationSettings:pushNotifications")
        }), null === be && Ue && (0, Re.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: ee("notificationSettings:pushTargetsLoadFailed")
        }), null !== be && 0 === Xe.length && (0, Re.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: ee("notificationSettings:pushTargetsNone")
        }), Xe.length > 0 && (0, Re.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Xe.map((ie => {
            var He;
            return (0, Re.jsx)("li", {
              children: ee(qH[ie], {
                count: null !== (He = null === be || void 0 === be ? void 0 : be[ie]) && void 0 !== He ? He : 0
              })
            }, ie)
          }))
        }), null !== oe && (0, Re.jsx)(Je.c, {
          className: "PushNotificationSettingsButton",
          loading: qe,
          onClick: () => {
            fe(!0), oe().catch((ee => {
              console.error("Failed to turn on push notifications:", ee)
            })).finally((() => {
              ie.current && (fe(!1), pe())
            }))
          },
          children: ee("notificationSettings:pushTurnOn")
        })]
      })
    }
    var TH = He(2660),
      pH = He(2447),
      XH = He(1913),
      zH = He(35);
    async function BH() {
      return "dailyDropReminderAsked_" + (await De.userContextManager.getCurrentUserContext()).whamm
    }

    function EH(ee) {
      return async function(ee) {
        if (ee.remindersOn || (0, We.h)(We.e.get("gameState"))) return null;
        const ie = await BH();
        if (null !== zH.i.getItem(ie)) return null;
        const [He, ye] = await Promise.all([(0, RH.e)().catch((ee => (console.error("Couldn't tell whether this device can take push notifications:", ee), null))), gH()]);
        if (null === He && !ye) return null;
        if (null !== He && ((0, pH.c)() || (0, RH.h)())) return null;
        return {
          askedKey: ie,
          requester: He
        }
      }(ee).catch((ee => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", ee), null)))
    }

    function gH() {
      return (0, oH.d)().then((ee => ee.app + ee.browser + ee.msnPlay > 0), (ee => (console.error("Couldn't tell where push notifications reach this account:", ee), !0)))
    }
    async function OH(ee) {
      const ie = (0, TH.t)({
          remindersOn: !0
        }),
        He = null === ee ? Promise.resolve() : ee(),
        [ye, be] = await Promise.allSettled([ie, He]);
      "rejected" === ye.status && console.error("Failed to turn on Lucky Skin Block reminders:", ye.reason), "rejected" === be.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", be.reason), "rejected" !== ye.status && "rejected" !== be.status || XH.f.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const dH = {
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
      WH = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function tH(ee) {
      let {
        setting: ie,
        value: He
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), Ue = (0, kH.c)(), [Fe, Je] = (0, ye.useState)(null), [oe, ke] = (0, ye.useState)(!1), [qe, fe] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        "remindersOn" === ie && (0, RH.e)().then((ee => {
          Ue.current && fe((() => ee))
        }), (ee => {
          console.error("Couldn't tell whether this device can take push notifications:", ee)
        }))
      }), [ie, Ue]), (0, Re.jsx)(de.c, {
        className: Me()({
          DailyDropSettingFailed: oe
        }),
        label: be(WH[ie].label),
        checked: null !== Fe && void 0 !== Fe ? Fe : He,
        note: oe ? be("dailyDrop:settingFailed") : void 0,
        onClick: ee => {
          null === Fe && (Je(ee), ke(!1), ee && null !== qe && qe().catch((ee => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", ee)
          })), (0, TH.r)("daily_drop.setting", `${WH[ie].reportAs}_${ee?"on":"off"}`), "remindersOn" === ie && BH().then((ee => {
            zH.i.setItem(ee, !0)
          }), (ee => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", ee)
          })), (0, TH.t)("hidden" === ie ? {
            hidden: ee
          } : {
            remindersOn: ee
          }).catch((ee => {
            console.error(`Failed to save the Lucky Skin Block's ${ie} setting:`, ee), Ue.current && ke(!0)
          })).finally((() => {
            Ue.current && Je(null)
          })))
        }
      })
    }
    const ZH = (0, ye.memo)((function() {
      const {
        t: ee
      } = (0, Ke.v)(), {
        clientEscMenuOptions: ie
      } = (0, We.m)(["clientEscMenuOptions"]), {
        userContext: He
      } = (0, fe.b)(), ye = He.dailyDrop;
      return (0, Re.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Xe.featureFlags.useSocialFeatures && (0, Re.jsx)(de.e, {
          label: ee("notificationSettings:friendRequests"),
          options: FH.b.map((ie => ({
            value: ie,
            label: ee(dH[ie].label)
          }))),
          value: ie.friendRequestNotifications,
          onChange: ee => {
            We.e.setClientEscMenuOptions({
              friendRequestNotifications: ee
            })
          },
          circleInfoText: (0, Re.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: FH.b.map((ie => (0, Re.jsxs)("div", {
              children: [(0, Re.jsx)("b", {
                children: ee(dH[ie].label)
              }), ": ", ee(dH[ie].info)]
            }, ie)))
          })
        }), null !== ye && (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsx)(tH, {
            setting: "remindersOn",
            value: ye.remindersOn
          }), (0, Re.jsx)(tH, {
            setting: "hidden",
            value: ye.hidden
          })]
        }), (0, Re.jsx)(fH, {})]
      })
    }));
    var wH = He(4891),
      DH = He(186),
      PH = He(325),
      AH = He(7296),
      YH = He(3808),
      VH = He(34786),
      aH = He(610),
      cH = He(27);
    var xH = He(645),
      LH = He(4736);
    const CH = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function vH(ee) {
      return CH.has(ee) ? ze.gameBridge.lookup("aE", null) : null
    }

    function uH(ee) {
      if (!(0, aH.P)(We.e.get("clientEscMenuOptions")[ee])) return We.e.get("clientEscMenuOptions")[ee];
      const ie = vH(ee);
      return null !== ie ? ie[CH.get(ee)] : zH.i.getItem(ee)
    }

    function mH(ee, ie) {
      if ("useTouchControls" === ee) return void(0, LH.b)(ie);
      ee in We.e.get("clientEscMenuOptions") && We.e.setClientEscMenuOptions({
        [ee]: ie
      });
      const He = vH(ee);
      null !== He && ze.gameBridge.send("setChunkAddDistance", {
        ...He,
        [CH.get(ee)]: ie
      }), zH.i.setItem(ee, ie)
    }
    var lH = He(4820),
      SH = He(34790),
      nH = He(34798),
      jH = He(4886),
      sH = He(34815);

    function IH(ee) {
      var ie, be, Ue, Fe;
      let {
        minChunkAddDist: Je,
        getValue: oe,
        onChange: ke,
        setApplySettingsCallback: qe
      } = ee;
      const {
        t: fe
      } = (0, Ke.v)(), {
        clientEscMenuOptions: pe
      } = (0, We.m)(["clientEscMenuOptions", "showDistantNametags"]), ze = (0, ye.useRef)(oe("showFog")), Be = (0, ye.useRef)(pe.antiAliasing), Ee = (0, ye.useRef)(pe.useWebGpu), [ge, Oe] = (0, ye.useState)(null), [Ze, we] = (0, ye.useState)(!1), [De, Pe] = (0, ye.useState)((() => (0, YH.f)(Xe.featureFlags.settings.canUseShaderPacks))), [Ae] = (0, ye.useState)((() => We.e.isWebGpuDefaultOff())), [Ye] = (0, ye.useState)(PH.m), [Ve, ae] = (0, ye.useState)(!1);
      (0, ye.useEffect)((() => {
        const ee = () => {
          ae((0, nH.n)())
        };
        return ee(), (0, nH.x)(ee)
      }), []), (0, JH.f)("appManagerUpdated|clientEscMenuOptions", (() => {
        ae((0, nH.n)())
      }));
      const [ce] = (0, ye.useState)((() => !0 === zH.i.getItem(Yi.nc))), [xe] = (0, ye.useState)((() => We.e.isWebGpuOnStored()));
      (0, ye.useEffect)((() => {
        let ee = !1;
        return (0, Xe.hasUsableWebGpuAdapter)().then((async ie => {
          const He = ce || xe,
            ye = !ie && xH.I && await (0, sH.d)(He);
          ee || (Oe(ie || ye), we(ye))
        })), (0, YH.k)(Xe.featureFlags.settings.canUseShaderPacks) && (0, AH.h)().then((async ie => {
          const ye = null !== ie && await async function(ee) {
            const [{
              isShaderPackActive: ie
            }, {
              loadPageShaderPackCompiler: ye
            }] = await Promise.all([He.e(153).then((() => He(7290))), Promise.all([He.e(89), He.e(149), He.e(152)]).then((() => He(7249)))]);
            return ie(ee, await ye())
          }(ie);
          ee || Pe(ye)
        })), () => {
          ee = !0
        }
      }), [ce, xe]);
      const Le = (!(De && !ce) || !Ze) && ge,
        Ce = function(ee, ie, He, ye, be) {
          return (0, VH.b)(He, ye) && !0 === ie ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== ie ? "settingsMenu:newWebGpu" : be ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: ee && !1 !== ie,
            disabled: !0 !== ie
          }
        }(pe.useWebGpu, Le, De, Ae, Ye),
        ve = (pe.useWebGpu || (0, VH.b)(De, Ae)) && De && !0 === Le,
        ue = (0, Te.i)("lightingOverride"),
        me = !(0, aH.P)(ue);
      let le = "settingsMenu:enableLighting";
      me && (le = ue ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Se = ee => {
          var ie, He, ye;
          const be = null !== (ie = ee.showFog) && void 0 !== ie ? ie : oe("showFog"),
            Me = null !== (He = ee.antiAliasing) && void 0 !== He ? He : pe.antiAliasing,
            Ke = null !== (ye = ee.useWebGpu) && void 0 !== ye ? ye : pe.useWebGpu,
            Ue = !xH.I && be !== ze.current || Me !== Be.current || Ke !== Ee.current;
          qe(Ue ? () => de.j : null)
        },
        ne = (0, Te.i)("fogChunkDistanceOverride"),
        je = (0, Te.i)("fogBlockDistanceOverride"),
        se = !(0, aH.P)(ne) || !(0, aH.P)(je),
        Ie = se ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [he, Ne] = (0, wH.f)(Je),
        [Ge, re] = (0, jH.e)(Je),
        Qe = fe("settingsMenu:chunkLoadDistanceDeviceLimit"),
        ei = Ge < he,
        ii = Math.min(null !== (ie = oe("chunkHorizAddDist")) && void 0 !== ie ? ie : Je[0], Ge),
        Hi = !se && function(ee, ie) {
          return !0 === ee.showFog && ee.fogChunkDistance > ie
        }(pe, ii);
      return (0, Re.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Re.jsx)(de.f, {
          name: fe("settingsMenu:horizontalChunkLoadDistance"),
          min: Je[0],
          max: he,
          selectableMax: Ge,
          cappedNote: Qe,
          step: 1,
          initValue: ii,
          onChange: ee => {
            !0 === oe("showFog") && ee < oe("fogChunkDistance") && ke("fogChunkDistance", ee), ke("chunkHorizAddDist", ee), cH.h.yR("updatedChunkLoadDist")
          },
          circleInfoText: fe("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Re.jsx)(de.f, {
          name: fe("settingsMenu:verticalChunkLoadDistance"),
          min: Je[1],
          max: Ne,
          selectableMax: re,
          cappedNote: ei ? void 0 : Qe,
          step: 1,
          initValue: Math.min(null !== (be = oe("chunkVertAddDist")) && void 0 !== be ? be : Je[1], re),
          onChange: ee => {
            ke("chunkVertAddDist", ee), cH.h.yR("updatedChunkLoadDist")
          },
          circleInfoText: fe("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:chunkFadeIn"),
          checked: pe.chunkFadeIn,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              chunkFadeIn: ee
            })
          },
          circleInfoText: fe("settingsMenu:chunkFadeInInfo")
        }), te.devTools.supports("chunkBorders") && (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:showChunkBorders"),
          checked: pe.showChunkBorders,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              showChunkBorders: ee
            })
          },
          circleInfoText: fe("settingsMenu:showChunkBordersInfo")
        }), (0, Re.jsx)(de.c, {
          label: fe(le),
          checked: pe.enableLighting,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              enableLighting: ee
            })
          },
          disabled: me
        }), (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Re.jsx)(de.c, {
            label: fe(Ie),
            checked: pe.showFog,
            onClick: ee => {
              Se({
                showFog: ee
              }), We.e.setClientEscMenuOptions({
                showFog: ee
              })
            },
            disabled: se,
            className: Me()({
              SettingBoxWarning: Hi
            })
          }), (0, Re.jsx)(de.f, {
            name: fe("settingsMenu:fogChunkDistance"),
            min: Je[0],
            max: DH.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Ue = pe.fogChunkDistance) && void 0 !== Ue ? Ue : Je[0],
            onChange: ee => {
              We.e.setClientEscMenuOptions({
                fogChunkDistance: ee
              }), cH.h.yR("fogChunkDistanceChanged", ee)
            },
            circleInfoText: fe("settingsMenu:fogChunkDistanceInfo"),
            disabled: se || !1 === oe("showFog"),
            className: Me()({
              SettingBoxWarning: Hi
            })
          }), Hi && (0, Re.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: fe("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !xH.I && (0, Re.jsx)(de.c, {
          label: fe(ve ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !ve && pe.disableTexAtlas,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              disableTexAtlas: ee
            })
          },
          circleInfoText: fe("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: ve
        }), (0, Re.jsx)(de.f, {
          name: fe("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: pe.cameraFOV,
          onChange: ee => {
            We.e.setClientEscMenuOptions({
              cameraFOV: ee
            })
          }
        }), (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:disableViewBobbing"),
          checked: pe.disableBobbing,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              disableBobbing: ee
            })
          },
          circleInfoText: fe("settingsMenu:disableViewBobbingInfo")
        }), (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:antiAliasing"),
          checked: pe.antiAliasing,
          onClick: ee => {
            Se({
              antiAliasing: ee
            }), (0, lH.g)("antiAliasing"), We.e.setClientEscMenuOptions({
              antiAliasing: ee
            })
          },
          circleInfoText: fe("settingsMenu:antiAliasingInfo")
        }), (0, Re.jsx)(de.f, {
          name: fe("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Fe = pe.pixelScale) && void 0 !== Fe ? Fe : 1,
          onChange: ee => {
            (ee !== We.e.get("clientEscMenuOptions").pixelScale || (0, nH.l)()) && (0, lH.g)("pixelScale"), We.e.setClientEscMenuOptions({
              pixelScale: ee
            })
          },
          circleInfoText: fe("settingsMenu:pixelScaleInfo"),
          note: Ve ? fe("settingsMenu:pixelScaleLowered") : void 0,
          format: ee => `${ee}x`
        }), (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:pixelSmoothing"),
          checked: pe.pixelSmoothing,
          onClick: ee => {
            We.e.setClientEscMenuOptions({
              pixelSmoothing: ee
            })
          },
          circleInfoText: fe("settingsMenu:pixelSmoothingInfo")
        }), xH.I && (0, Re.jsx)(de.c, {
          label: fe("settingsMenu:distantNametags"),
          checked: (0, SH.e)(),
          onClick: ee => {
            We.e.set({
              showDistantNametags: ee
            })
          },
          circleInfoText: fe("settingsMenu:distantNametagsInfo")
        }), (0, Re.jsx)(de.c, {
          label: fe(Ce.translationKey),
          checked: Ce.checked,
          onClick: ee => {
            Se({
              useWebGpu: ee
            }), We.e.setClientEscMenuOptions({
              useWebGpu: ee
            })
          },
          circleInfoText: fe("settingsMenu:newWebGpuInfo"),
          disabled: Ce.disabled
        })]
      })
    }
    var hH = He(4818),
      NH = He(9595),
      GH = He(34824),
      rH = He(9607),
      QH = He(34829);
    const ey = {
        color: 16777215,
        name: "white"
      },
      iy = {
        color: 0,
        name: "black"
      },
      Hy = [ey, {
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
      }, iy],
      yy = [iy, ey];

    function by(ee) {
      return `${ee} px`
    }

    function My(ee) {
      return `${ee}%`
    }

    function Ky(ee) {
      let {
        label: ie,
        value: He,
        swatches: ye,
        onChange: be
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), Fe = !ye.some((ee => ee.color === He));
      return (0, Re.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Re.jsx)("div", {
          className: "SliderText",
          children: ie
        }), (0, Re.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": ie,
          children: [ye.map((ee => {
            let {
              color: ie,
              name: ye
            } = ee;
            return (0, Re.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": ie === He,
              "aria-label": Ue(`crosshairSettings:color_${ye}`),
              "data-pad-focusable": !0,
              className: Me()("CrosshairSwatch", {
                Selected: ie === He
              }),
              style: {
                background: (0, QH.j)(ie)
              },
              onClick: () => {
                be(ie)
              }
            }, ie)
          })), (0, Re.jsx)("label", {
            className: Me()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Fe
            }),
            style: Fe ? {
              background: (0, QH.j)(He)
            } : void 0,
            title: Ue("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Re.jsx)("input", {
              type: "color",
              "aria-label": Ue("crosshairSettings:customColor"),
              value: (0, QH.j)(He),
              onChange: ee => {
                const ie = (0, QH.l)(ee.target.value);
                null !== ie && be(ie)
              }
            })
          })]
        })]
      })
    }

    function Uy(ee) {
      let {
        settings: ie,
        onChange: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)(), be = (ee, ye) => {
        He((0, QH.o)(ie, ee, ye))
      }, Me = function(ee, He) {
        let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : by;
        const {
          min: Me,
          max: Ke,
          step: Ue
        } = QH.d[ee];
        return (0, Re.jsx)(de.f, {
          name: He,
          min: Me,
          max: Ke,
          step: Ue,
          initValue: ie[ee],
          format: ye,
          onChange: ie => {
            be(ee, ie)
          }
        }, ee)
      }, Ue = ["lines", "dot", "circle"].filter((ee => ie[ee])), Fe = (ee, He, ye) => (0, Re.jsx)(de.c, {
        label: He,
        checked: ie[ee],
        disabled: 1 === Ue.length && Ue[0] === ee,
        circleInfoText: ye,
        onClick: ie => {
          be(ee, ie)
        }
      }, ee), Je = "shapes" === ie.style;
      return (0, Re.jsxs)(Re.Fragment, {
        children: [(0, Re.jsx)(de.e, {
          label: ye("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: ye("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: ye("crosshairSettings:styleShapes")
          }],
          value: ie.style,
          onChange: ee => {
            be("style", ee)
          }
        }), (0, Re.jsx)(Ky, {
          label: ye("crosshairSettings:color"),
          value: ie.color,
          swatches: Hy,
          onChange: ee => {
            be("color", ee)
          }
        }), Me("opacity", ye("crosshairSettings:opacity"), My), !Je && Me("size", ye("crosshairSettings:size"), My), Je && (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Fe("lines", ye("crosshairSettings:lines")), ie.lines && Me("lineLength", ye("crosshairSettings:lineLength")), ie.lines && Me("lineThickness", ye("crosshairSettings:lineThickness")), ie.lines && Me("gap", ye("crosshairSettings:gap")), ie.lines && Fe("tStyle", ye("crosshairSettings:tStyle"))]
        }), Je && (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Fe("dot", ye("crosshairSettings:dot")), ie.dot && Me("dotSize", ye("crosshairSettings:dotSize"))]
        }), Je && (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Fe("circle", ye("crosshairSettings:circle")), ie.circle && Me("circleRadius", ye("crosshairSettings:circleRadius")), ie.circle && Me("circleThickness", ye("crosshairSettings:circleThickness"))]
        }), (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Me("outline", ye("crosshairSettings:outline"), (ee => ee > 0 ? by(ee) : ye("crosshairSettings:off"))), ie.outline > 0 && (0, Re.jsx)(Ky, {
            label: ye("crosshairSettings:outlineColor"),
            value: ie.outlineColor,
            swatches: yy,
            onChange: ee => {
              be("outlineColor", ee)
            }
          })]
        }), Fe("growOnClick", ye("crosshairSettings:growOnClick")), Je && Fe("forGuns", ye("crosshairSettings:forGuns"), ye("crosshairSettings:forGunsInfo"))]
      })
    }
    var Fy = He(77),
      Jy = He(1215),
      oy = He(13541),
      Ry = He(14679),
      ky = He(16131),
      qy = He(16665);
    const fy = ["sky", "grass", "stone", "sand", "snow", "night"],
      Ty = "4rem";

    function py(ee) {
      return {
        backgroundImage: `url(${ee})`,
        backgroundSize: `${Ty} ${Ty}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Xy(ee) {
      return {
        ...(() => {
          switch (ee) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return py(oy);
            case "stone":
              return py(Ry);
            case "sand":
              return py(ky);
            case "snow":
              return py(qy);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function zy(ee) {
      return Object.freeze({
        ...QH.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...ee
      })
    }
    const By = [{
        id: "default",
        settings: QH.e
      }, {
        id: "cross",
        settings: zy({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: zy({
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
        settings: zy({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: zy({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: zy({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: zy({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: zy({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Ey = ["growOnClick", "forGuns"];
    var gy = He(34836);

    function Oy(ee) {
      let {
        label: ie,
        selected: He,
        onClick: ye,
        className: be,
        style: Ke,
        children: Ue
      } = ee;
      return (0, Re.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": He,
        title: ie,
        "aria-label": ie,
        "data-pad-focusable": !0,
        className: Me()("CrosshairBackdropSwatch", be, {
          Selected: He
        }),
        style: Ke,
        onClick: ye,
        children: Ue
      })
    }

    function dy(ee) {
      let {
        backdrop: ie,
        onChange: He,
        game: ye
      } = ee;
      const {
        t: be
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": be("crosshairSettings:background"),
        children: [ye && (0, Re.jsx)(Oy, {
          label: be("crosshairSettings:bg_game"),
          selected: ye.selected,
          onClick: ye.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Re.jsx)(Ue.e, {
            name: "cube"
          })
        }), fy.map((ee => (0, Re.jsx)(Oy, {
          label: be(`crosshairSettings:bg_${ee}`),
          selected: !(null !== ye && void 0 !== ye && ye.selected) && ee === ie,
          style: Xy(ee),
          onClick: () => {
            He(ee)
          }
        }, ee)))]
      })
    }

    function Wy(ee) {
      let {
        settings: ie,
        touch: He,
        backdrop: ye,
        onChange: be
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), Fe = function(ee) {
        var ie;
        return null !== (ie = By.find((ie => (0, QH.n)(ie.settings, ee, Ey)))) && void 0 !== ie ? ie : null
      }(ie);
      return (0, Re.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Ue("crosshairSettings:presets"),
        children: By.map((ee => {
          const Ke = (null === Fe || void 0 === Fe ? void 0 : Fe.id) === ee.id;
          return (0, Re.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Ke,
            "data-pad-focusable": !0,
            className: Me()("CrosshairPreset", {
              Selected: Ke
            }),
            onClick: () => {
              be(function(ee, ie) {
                return {
                  ...ie.settings,
                  growOnClick: ee.growOnClick,
                  forGuns: ee.forGuns
                }
              }(ie, ee))
            },
            children: [(0, Re.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Xy(ye),
              children: (0, Re.jsx)(gy.b, {
                settings: ee.settings,
                touch: He,
                inPreview: !0
              })
            }), (0, Re.jsx)("div", {
              className: "CrosshairPresetName",
              children: Ue(`crosshairSettings:preset_${ee.id}`)
            })]
          }, ee.id)
        }))
      })
    }
    var ty = He(1666);

    function Zy(ee, ie) {
      const [He, be] = (0, ye.useState)(!1), Me = () => {
        be(!1)
      }, [Ke, Ue] = (0, ye.useState)(!1), Fe = (0, ye.useRef)({
        growOnClick: ee.growOnClick,
        forGuns: ee.forGuns
      });
      (0, ye.useEffect)((() => {
        const ie = Fe.current;
        Fe.current = {
          growOnClick: ee.growOnClick,
          forGuns: ee.forGuns
        }, (ee.growOnClick && !ie.growOnClick || ee.forGuns && !ie.forGuns) && Ue(!0)
      }), [ee.growOnClick, ee.forGuns]), (0, ye.useEffect)((() => {
        if (!Ke) return;
        const ee = setTimeout((() => {
          Ue(!1)
        }), 600);
        return () => {
          clearTimeout(ee)
        }
      }), [Ke]);
      const Je = He || Ke;
      return {
        view: {
          pressed: Je,
          spread: Je && ee.forGuns && !ee.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: ee => {
            !ee.target.closest(ie) && (0, ty.d)(ee.currentTarget, ee.pointerId) && be(!0)
          },
          onPointerUp: Me,
          onPointerCancel: Me,
          onLostPointerCapture: Me
        }
      }
    }

    function wy(ee) {
      let {
        settings: ie,
        touch: He,
        backdrop: ye,
        className: be,
        children: Ke,
        label: Ue
      } = ee;
      const Fe = Zy(ie, ".CrosshairStageControls");
      return (0, Re.jsxs)("div", {
        className: Me()("CrosshairStage", be),
        style: Xy(ye),
        ...Fe.handlers,
        children: [(0, Re.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Ue,
          children: (0, Re.jsx)(gy.b, {
            settings: ie,
            touch: He,
            inPreview: !0,
            ...Fe.view
          })
        }), Ke]
      })
    }
    const Dy = "crosshairFullScreen";

    function Py(ee) {
      let {
        settings: ie,
        touch: He,
        backdrop: be,
        onBackdrop: Fe,
        inGame: oe,
        onChange: ke,
        onClose: qe
      } = ee;
      const {
        t: fe
      } = (0, Ke.v)(), Te = (0, ye.useRef)(null);
      (0, Jy.t)("popup", Te, qe),
      function(ee) {
        const ie = (0, ye.useRef)(ee);
        ie.current = ee, (0, ye.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Dy]: !0
          }, "");
          let ee = !1;
          const He = () => {
            ee = !0, ie.current()
          };
          return window.addEventListener("popstate", He), () => {
            var ie;
            window.removeEventListener("popstate", He), !ee && null !== (ie = window.history.state) && void 0 !== ie && ie[Dy] && window.history.back()
          }
        }), [])
      }(qe);
      const pe = (0, ye.useRef)(qe);
      pe.current = qe, (0, ye.useEffect)((() => {
        function ee(ee) {
          "Escape" === ee.key && (ee.stopPropagation(), pe.current())
        }
        return window.addEventListener("keydown", ee, !0), () => {
          window.removeEventListener("keydown", ee, !0)
        }
      }), []);
      const Xe = Zy(ie, ".CrosshairFullScreenPanel"),
        [ze, Be] = (0, ye.useState)(!0),
        Ee = ze && oe;
      (0, ye.useEffect)((() => {
        if (Ee) return We.e.set({
          crosshairGameView: !0
        }), () => {
          We.e.set({
            crosshairGameView: !1
          })
        }
      }), [Ee]);
      const [ge, Oe] = (0, ye.useState)(!0);
      return (0, Fy.createPortal)((0, Re.jsxs)("div", {
        ref: Te,
        className: "CrosshairFullScreen",
        style: Ee ? void 0 : Xy(be),
        ...Xe.handlers,
        children: [(0, Re.jsx)(gy.b, {
          settings: ie,
          touch: He,
          inEditor: !0,
          ...Xe.view
        }), (0, Re.jsxs)("div", {
          className: Me()("CrosshairFullScreenPanel", {
            Collapsed: !ge
          }),
          children: [(0, Re.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Re.jsx)(dy, {
              backdrop: be,
              onChange: ee => {
                Be(!1), Fe(ee)
              },
              game: oe ? {
                selected: Ee,
                onSelect: () => {
                  Be(!0)
                }
              } : void 0
            }), (0, Re.jsx)(Je.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: fe(ge ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                Oe(!ge)
              },
              children: (0, Re.jsx)(Ue.e, {
                name: ge ? "caret-up" : "pen"
              })
            }), (0, Re.jsx)(Je.c, {
              className: "CrosshairFullScreenDone",
              onClick: qe,
              padDefaultFocus: !0,
              children: fe("crosshairSettings:done")
            })]
          }), ge && (0, Re.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Re.jsx)(Wy, {
              settings: ie,
              touch: He,
              backdrop: be,
              onChange: ke
            }), (0, Re.jsx)(Uy, {
              settings: ie,
              onChange: ke
            })]
          })]
        })]
      }), document.body)
    }
    var Ay = He(2841),
      Yy = He(34851);

    function Vy(ee) {
      let {
        settings: ie,
        onChange: He
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), Fe = (0, Yy.j)(ie), [oe, ke] = (0, Ay.i)(), [qe, fe] = (0, ye.useState)(!1), Te = (0, ye.useRef)(null), [pe, Xe] = (0, Ay.i)(), [ze, Be] = (0, ye.useState)(!1);
      return (0, Re.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Re.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Re.jsxs)(Je.M, {
            className: Me()("CrosshairCopy", {
              ActiveSecondaryButton: oe
            }),
            onClick: () => {
              (0, Ay.e)(Fe, {
                useShareSheet: !1,
                onOutcome: ee => {
                  fe("failed" === ee), "copied" === ee && ke()
                }
              })
            },
            children: [(0, Re.jsx)(Ue.e, {
              name: oe ? "check" : "copy"
            }), " ", be(oe ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Re.jsx)(ge.d, {
            className: "CrosshairPaste",
            domRef: Te,
            ariaLabel: be("crosshairSettings:paste"),
            placeholderText: be("crosshairSettings:paste"),
            onValueChange: ee => {
              const ie = (0, Yy.h)(ee);
              Be(!ie && ee.trim().length >= Yy.e), ie && (He(ie), Te.current.value = "", Xe())
            }
          })]
        }), qe && (0, Re.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Fe,
          "aria-label": be("crosshairSettings:copy"),
          onFocus: ee => {
            ee.currentTarget.select()
          }
        }), (0, Re.jsxs)("div", {
          "aria-live": "polite",
          children: [ze && (0, Re.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: be("crosshairSettings:pasteInvalid")
          }), pe && !ze && (0, Re.jsx)("div", {
            className: "CrosshairShareNote",
            children: be("crosshairSettings:applied")
          })]
        })]
      })
    }
    var ay = He(34859);
    let cy = "sky";

    function xy(ee) {
      let {
        showing: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), {
        isTouchScreen: be,
        gameState: Me,
        clientEscMenuOptions: Fe
      } = (0, We.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), oe = (0, ay.f)(), [ke, qe] = (0, ye.useState)(cy), fe = ee => {
        cy = ee, qe(ee)
      }, [Te, pe] = (0, ye.useState)(!1);
      return (0, ye.useEffect)((() => {
        ie || pe(!1)
      }), [ie]), (0, Re.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Re.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Re.jsx)(wy, {
            className: "CrosshairPreviewStage",
            settings: oe,
            touch: be,
            backdrop: ke,
            label: He("crosshairSettings:preview"),
            children: (0, Re.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Re.jsx)(dy, {
                backdrop: ke,
                onChange: fe
              }), (0, Re.jsxs)(Je.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  pe(!0)
                },
                children: [(0, Re.jsx)(Ue.e, {
                  name: "expand"
                }), " ", He("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Re.jsx)("div", {
          className: "SettingBox",
          children: (0, Re.jsx)(Wy, {
            settings: oe,
            touch: be,
            backdrop: ke,
            onChange: ay.b
          })
        }), (0, Re.jsx)(Vy, {
          settings: oe,
          onChange: ay.b
        }), be && (0, Re.jsx)(rH.d, {
          note: (0, GH.e)(be, Fe.touchActionButtons) ? He("crosshairSettings:touchNote") : void 0
        }), (0, Re.jsx)(Uy, {
          settings: oe,
          onChange: ay.b
        }), Te && (0, Re.jsx)(Py, {
          settings: oe,
          touch: be,
          backdrop: ke,
          onBackdrop: fe,
          inGame: "inGame" === Me,
          onChange: ay.b,
          onClose: () => {
            pe(!1)
          }
        })]
      })
    }
    var Ly = He(9598),
      Cy = He(1400),
      vy = He(5496),
      uy = He(34863),
      my = He(4623),
      ly = He(2043),
      Sy = He(704);
    const ny = (0, ye.memo)((function() {
      const {
        clientEscMenuOptions: ee
      } = (0, We.m)(["clientEscMenuOptions"]), {
        recording: ie,
        clipping: He,
        hasClipBuffer: be
      } = (0, iH.k)("replayRecorder"), Ke = (0, iH.g)("connectedGame", (ee => ee.replay)), Ue = (0, my.i)(), Fe = !1 === (0, Te.i)("canRecordReplays");
      (0, ye.useEffect)((() => {
        ze.gameBridge.send("setRecorderPrefs", {
          clipping: ee.enableClipping,
          clipSeconds: ee.clipDurationSeconds
        })
      }), [ee.enableClipping, ee.clipDurationSeconds]);
      const oe = Ue || Ke,
        ke = !oe && !Fe,
        qe = ie || ke,
        fe = ke,
        pe = fe && He && !ie;

      function Xe() {
        qe && ze.gameBridge.send("toggleRecording", null)
      }
      return (0, Re.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Re.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Re.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: ie ? (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsxs)(Je.G, {
                className: "ReplayViewerCategoryButton",
                onClick: Xe,
                disabled: !qe,
                children: [(0, Re.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Re.jsx)(ly.e, {
                  noaAction: "recordGame"
                })]
              }), (0, Re.jsx)(uy.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Re.jsxs)(Je.c, {
              className: "ReplayViewerCategoryButton",
              onClick: Xe,
              disabled: !qe,
              children: [(0, Re.jsx)("span", {
                children: "Start Recording"
              }), (0, Re.jsx)(ly.e, {
                noaAction: "recordGame"
              })]
            })
          }), Fe && (0, Re.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), oe && !ie && (0, Re.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Re.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Re.jsx)(de.c, {
            label: "Enable clipping",
            checked: ee.enableClipping,
            disabled: !fe,
            onClick: function(ee) {
              fe && We.e.setClientEscMenuOptions({
                enableClipping: ee
              })
            },
            className: Me()({
              SettingBoxDisabled: !fe
            })
          }), (0, Re.jsx)(de.f, {
            name: "Clip duration (seconds)",
            min: Sy.l,
            max: Sy.h,
            step: Sy.c,
            initValue: ee.clipDurationSeconds,
            onChange: function(ee) {
              We.e.setClientEscMenuOptions({
                clipDurationSeconds: ee
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !fe || !ee.enableClipping
          })]
        }), (0, Re.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Re.jsxs)(Je.c, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              pe && ze.gameBridge.send("saveClip", null)
            },
            disabled: !pe,
            children: [(0, Re.jsx)("span", {
              children: "Record clip"
            }), (0, Re.jsx)(ly.e, {
              noaAction: "recordClip"
            })]
          }), ee.enableClipping && !be && fe && !ie && (0, Re.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), ie && (0, Re.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Re.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Re.jsxs)(Je.c, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, my.g)(!0), We.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: Ue,
            children: [(0, Re.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Re.jsx)(ly.e, {
              noaAction: "replayViewerOpen"
            })]
          }), Ue && (0, Re.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Re.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Re.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Re.jsx)("iframe", {
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
    var jy = He(1952);
    const sy = {
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
        icon: () => (0, Re.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Re.jsx)("path", {
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
      Zf: {
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

    function Iy() {
      return Promise.all([He.e(89), He.e(149), He.e(148), He.e(144)]).then((() => He(42144))).then((ee => ({
        default: ee.ShaderPackCategory
      })), (ee => (console.error("Failed to load the shader pack settings", ee), {
        default: hy
      })))
    }

    function hy() {
      const {
        t: ee
      } = (0, Ke.v)();
      return (0, Re.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: ee("shaderPack:tabLoadFailed")
      })
    }
    var Ny = He(1385),
      Gy = He(182);
    const ry = /party\s*voice/i;
    let Qy = !1;

    function eb(ee) {
      return Object.keys(ee).some((ee => ee.startsWith("__reactFiber$")))
    }
    const ib = ".MenuSideBarBody, .MenuSideBarSection";

    function Hb(ee) {
      var ie;
      return (null !== (ie = ee.textContent) && void 0 !== ie ? ie : "").replace(/\s+/g, " ").trim()
    }

    function yb(ee) {
      for (const ie of function(ee) {
          const ie = new Set;
          for (const He of ee.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) ie.add(He);
          for (const He of [ee, ...ee.querySelectorAll(ib)])
            for (const ee of He.children) ie.add(ee);
          return [...ie]
        }(ee))
        if (!eb(ie) || !ie.matches(ib) && ry.test(Hb(ie))) return ie;
      return null
    }

    function bb(ee) {
      return ee.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const Mb = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function Kb(ee) {
      const ie = document.createTreeWalker(ee, NodeFilter.SHOW_TEXT, {
        acceptNode: ee => {
          var ie, He;
          return Mb.has(null !== (ie = null === (He = ee.parentElement) || void 0 === He ? void 0 : He.tagName.toUpperCase()) && void 0 !== ie ? ie : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let Me = ie.nextNode(); null !== Me; Me = ie.nextNode()) {
        var He;
        const ee = (null !== (He = Me.textContent) && void 0 !== He ? He : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== ee) {
          var ye, be;
          return (null !== (ye = null === (be = ee.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === be ? void 0 : be[0]) && void 0 !== ye ? ye : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function Ub(ee, ie) {
      const He = bb(ie).slice(0, 40) || "blank";
      return `${(bb(ee.toLowerCase())||"none").slice(0,Math.max(23,Gy.Y-1-He.length))}:${He}`.slice(0, Gy.Y)
    }
    const Fb = (0, ye.lazy)((() => He.e(302).then((() => He(42138))).then((ee => ({
        default: ee.BloxdInformation
      }))))),
      Jb = (0, ye.lazy)(Iy);

    function ob(ee) {
      return ee ? "general" : "account"
    }
    const Rb = new Map,
      kb = (0, ye.memo)((function(ee) {
        let {
          show: ie,
          setBeforeResumeCallback: He
        } = ee;
        (0, pe.b)();
        const {
          gameState: be,
          openSettingsCategory: Me
        } = (0, We.m)(["gameState", "openSettingsCategory"]), {
          userContext: Fe
        } = (0, fe.b)(), {
          t: oe
        } = (0, Ke.v)(), ge = (0, qe.c)(), Oe = (0, Te.i)("minChunkAddDist"), de = "inGame" === be, [te, De] = (0, ye.useState)(ob(de)), [Pe, Ae] = (0, ye.useState)(null), [Ye, Ve] = (0, ye.useState)([]), ae = (0, ye.useRef)(function() {
          const ee = new Date,
            ie = 6 * (ee.getMonth() + ee.getDate()) % Yi.A.length;
          return [...Yi.A, ...Yi.A].slice(ie, ie + 6)
        }()), ce = (0, ye.useRef)(null), xe = (0, ye.useRef)(null), Le = (0, JH.j)(Cy.i, (0, Cy.c)()), Ce = Object.keys(sy).filter((ee => {
          switch (ee) {
            case "replayViewer":
              return de;
            case "developerTools":
              return Fe.playerHasRank("developer") || !1;
            case "texturePack":
              return Xe.featureFlags.settings.canChangeTexturePack;
            case "Zf":
              return Xe.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Xe.featureFlags.useSocialFeatures || null !== Fe.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== we.siteUsed;
            case "controller":
              return Xe.featureFlags.useControllerSupport && (Le || "controller" === te);
            default:
              return !0
          }
        }));
        (0, JH.f)("toggleFullCoordinateOverlay", (() => {
          const ee = uH("showCoordinates") && uH("showChunkCoordinates") && uH("showFPS");
          mH("showCoordinates", !ee), mH("showChunkCoordinates", !ee), mH("showFPS", !ee), ge()
        })), (0, JH.f)("updatedChunkLoadDist", (() => {
          ge()
        })), (0, ye.useEffect)((() => {
          if (Ae(null), null === We.e.get("openSettingsCategory")) {
            const ee = (0, Ny.n)() ? Rb.get(de) : void 0;
            De(ee && Ce.includes(ee) ? ee : ob(de))
          }
        }), [ie]), (0, ye.useEffect)((() => {
          if (ie && xe.current) return function(ee) {
            if (Qy) return () => {};
            let ie = null,
              He = null;
            const ye = () => {
                var ee;
                null !== He && (clearTimeout(He), He = null), null === (ee = ie) || void 0 === ee || ee.disconnect(), ie = null
              },
              be = () => {
                const ie = yb(ee);
                null !== ie && (Qy = !0, ye(), (0, Xi.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: Ub(window.location.hostname, Kb(ie))
                }))
              };
            return He = setTimeout((() => {
              He = null, be(), Qy || (ie = new MutationObserver(be), ie.observe(ee, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), ye
          }(xe.current)
        }), [ie]), (0, ye.useEffect)((() => {
          null !== Me && (De(Me), Rb.set(de, Me), We.e.set({
            openSettingsCategory: null
          }))
        }), [Me, de]), (0, ye.useLayoutEffect)((() => {
          ce.current && (ce.current.scrollTop = 0)
        }), [te, ie]), (0, ye.useEffect)((() => {
          "updateLog" === te && (0, Ee.c)().then(Ve)
        }), [te]), (0, ye.useEffect)((() => {
          if ((0, aH.P)(Oe)) return;
          const [ee, ie] = (0, hH.g)(), [He, ye] = (0, wH.f)(Oe), be = (0, jy.c)(Oe[0], ee, He), Me = (0, jy.c)(Oe[1], ie, ye);
          ze.gameBridge.send("setChunkAddDistance", {
            horizontal: be,
            vertical: Me
          })
        }), [Oe]);
        const ve = (0, ye.useCallback)((async () => {
          Pe && (await Pe(), Ae(null))
        }), [Pe]);

        function ue() {
          We.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, ye.useEffect)((() => {
          He((() => ve))
        }), [ve, He]), (0, Re.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: ie ? {} : {
            display: "none"
          },
          children: [(0, Re.jsx)("div", {
            ref: xe,
            className: "MenuSideBar",
            children: (0, Re.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Re.jsx)(ke, {
                items: Ce.map((ee => {
                  const ie = sy[ee].icon;
                  return {
                    id: ee,
                    faIcon: "string" === typeof ie ? ie : void 0,
                    iconElement: "string" === typeof ie ? void 0 : (0, Re.jsx)(ie, {}),
                    title: oe(sy[ee].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: te,
                onClick: ee => {
                  !async function(ee) {
                    await ve(), De(ee), Rb.set(de, ee)
                  }(ee)
                }
              })
            })
          }), (0, Re.jsxs)("div", {
            ref: ce,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === te && (0, Re.jsx)(Ni, {
              showing: ie,
              inGame: de
            }), "general" === te && (0, Re.jsx)(KH, {
              inGame: de
            }), "audio" === te && (0, Re.jsx)(UH, {}), "notifications" === te && (0, Re.jsx)(ZH, {}), "graphics" === te && (0, Re.jsx)(IH, {
              minChunkAddDist: null !== Oe && void 0 !== Oe ? Oe : [2, 2],
              getValue: uH,
              onChange: mH,
              setApplySettingsCallback: Ae
            }), "controls" === te && (0, Re.jsx)(NH.c, {}), "crosshair" === te && (0, Re.jsx)(xy, {
              showing: ie
            }), "controller" === te && Xe.featureFlags.useControllerSupport && (0, Re.jsx)(Ly.b, {}), Xe.featureFlags.settings.canChangeTexturePack && "texturePack" === te && (0, Re.jsx)(vy.d, {
              setApplySettingsCallback: Ae
            }), Xe.featureFlags.settings.canUseShaderPacks && "Zf" === te && (0, Re.jsx)(ye.Suspense, {
              fallback: null,
              children: (0, Re.jsx)(Jb, {
                setApplySettingsCallback: Ae
              })
            }), "updateLog" === te && (0, Re.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Re.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Ye.map(((ee, ie) => (0, Re.jsx)(Be.b, {
                  updateLog: ee,
                  index: ie,
                  close: ue
                }, ie)))
              })
            }), "information" === te && (0, Re.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Re.jsx)(ye.Suspense, {
                fallback: null,
                children: (0, Re.jsx)(Fb, {})
              })
            }), "alternativeDomains" === te && (0, Re.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Re.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: oe("settingsMenu:unblockedDomainsDescription")
              }), (0, Re.jsx)("div", {
                className: "AlternativeDomainsList",
                children: ae.current.map((ee => (0, Re.jsxs)(Je.c, {
                  onClick: () => {
                    window.open(`https://${ee}`)
                  },
                  children: [(0, Re.jsx)(Ue.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", ee]
                }, ee)))
              })]
            }), "replayViewer" === te && (0, Re.jsx)(ny, {}), "developerTools" === te && (0, Re.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Re.jsx)(Ze, {
                setApplySettingsCallback: Ae
              })
            }), null !== Pe && (0, Re.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Re.jsx)(Je.c, {
                className: "SettingsMenuRightFooterButton",
                onClick: ve,
                children: oe("general:apply")
              })
            })]
          })]
        })
      }));
    var qb = He(2774),
      fb = He(1567),
      Tb = He(2374),
      pb = He(4719);
    const Xb = (0, ye.lazy)((() => Promise.resolve().then((() => He(5064))).then((ee => (ee.needGameClientAfterPaint(), (0, qb.e)((ee => ee.loadCharacterCustomisationUI()), (ee => ee.CharacterCustomisationUI))))))),
      zb = "openCustomisationTab";

    function Bb(ee) {
      var ie, He, be;
      let {
        show: Me
      } = ee;
      const {
        userContext: Ke
      } = (0, fe.b)(), Ue = (0, Se.usePurchasesAllowed)(), Fe = (0, ye.useRef)(null);
      var Je, oe;
      Ke !== De.NULL_USER_CONTEXT && (null === (ie = Fe.current) || void 0 === ie ? void 0 : ie.whamm) !== Ke.whamm && (Fe.current = {
        whamm: Ke.whamm,
        mountKey: (null !== (Je = null === (oe = Fe.current) || void 0 === oe ? void 0 : oe.mountKey) && void 0 !== Je ? Je : -1) + 1
      });
      const [qe, Te] = (0, ye.useState)("characters");
      if ((0, JH.f)(zb, Te), !Me) return null;
      const pe = null !== (0, fb.h)(Date.now()),
        Xe = Ke.getOwnedCosmeticPacks(),
        ze = Yi.Wb.filter((ee => "pet" === ee || "aura" === ee ? pe || (0, Tb.p)(ee).some((ie => ie !== `${ee}_none` && (0, Tb.A)(ee, ie, Xe))) : "cape" !== ee && "nameColour" !== ee || (0, ve.b)(Ke.getPlayerRanks()) || Ue)).map((ee => ({
          id: ee,
          faIcon: Yi.E[ee],
          title: Yi.I[ee],
          redDot: !1
        })));
      return (0, Re.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Re.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Re.jsx)(ke, {
            items: ze,
            selectedItemId: qe,
            onClick: ee => {
              Te(ee)
            }
          })
        }), (0, Re.jsx)("div", {
          className: "MenuBody",
          children: (0, Re.jsx)(ye.Suspense, {
            fallback: (0, Re.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Re.jsx)(Oe.b, {})
            }),
            children: (0, Re.jsx)(Xb, {
              selectedTab: qe,
              noWebGlFallback: gb
            }, null !== (He = null === (be = Fe.current) || void 0 === be ? void 0 : be.mountKey) && void 0 !== He ? He : 0)
          })
        })]
      })
    }

    function Eb() {
      const {
        t: ee
      } = (0, Ke.v)();
      return (0, Re.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: ee((0, pb.c)((0, pb.b)()))
      })
    }
    const gb = (0, Re.jsx)(Eb, {});
    var Ob = He(1447),
      db = He(1455),
      Wb = He(34867),
      tb = He(4922),
      Zb = He(3771),
      wb = He(3856),
      Db = He(34905),
      Pb = He(9509),
      Ab = He(34872),
      Yb = He(34889),
      Vb = He(1970),
      ab = He(1956),
      cb = He(5388),
      xb = He(1205),
      Lb = He(1169),
      Cb = He(1657),
      vb = He(9575),
      ub = He(2542),
      mb = He(2545);

    function lb(ee) {
      return ee ? Object.keys(ee).sort(((ie, He) => {
        var ye, be, Me, Ke;
        const Ue = (null !== (ye = null === (be = ee[He]) || void 0 === be ? void 0 : be.sortPriority) && void 0 !== ye ? ye : 0) - (null !== (Me = null === (Ke = ee[ie]) || void 0 === Ke ? void 0 : Ke.sortPriority) && void 0 !== Me ? Me : 0);
        return 0 !== Ue ? Ue : ie.localeCompare(He)
      })) : []
    }
    const Sb = [{
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

    function nb(ee) {
      for (const {
          threshold: ie,
          suffix: He
        }
        of Sb)
        if (ee >= ie) {
          const ye = ee / ie;
          return ye >= 100 ? `${Math.floor(ye)}${He}` : ye >= 10 ? `${ye.toFixed(1).replace(/\.0$/,"")}${He}` : `${ye.toFixed(2).replace(/\.?0+$/,"")}${He}`
        } return String(ee)
    }
    var jb = He(5537);
    const sb = {
        normal: "0.8em",
        big: "1em"
      },
      Ib = (0, ye.memo)((function(ee) {
        let {
          item: ie,
          amount: He = 0,
          size: ye = "normal",
          tier: be = null
        } = ee;
        return (0, Re.jsx)("div", {
          className: Me()("SmpSlot", `SmpSlot-${ye}`),
          children: ie && (0, Re.jsx)(Vb.c, {
            itemName: ie,
            amount: He > 1 ? He : 0,
            amountFontSize: sb[ye],
            enchantmentTier: be
          })
        })
      }));

    function hb(ee) {
      let {
        amount: ie,
        exact: He = !1,
        className: ye
      } = ee;
      return (0, Re.jsxs)("span", {
        className: Me()("SmpGold", ye),
        children: [(0, Re.jsx)("span", {
          className: "SmpCoin",
          children: (0, Re.jsx)(Vb.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), He ? ie.toLocaleString("en-US") : nb(ie)]
      })
    }

    function Nb(ee) {
      let {
        count: ie = 5,
        grid: He = !1
      } = ee;
      return (0, Re.jsx)("div", {
        className: He ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: ie
        }, ((ee, ie) => (0, Re.jsxs)("div", {
          className: Me()(He ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Re.jsx)("div", {
            className: Me()("SmpSlot", He ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Re.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Re.jsx)("b", {}), (0, Re.jsx)("small", {})]
          }), (0, Re.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, ie)))
      })
    }

    function Gb(ee) {
      let {
        title: ie,
        children: He
      } = ee;
      return (0, Re.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Re.jsx)("b", {
          children: ie
        }), He && (0, Re.jsx)("small", {
          children: He
        })]
      })
    }

    function rb(ee) {
      let {
        entry: ie
      } = ee;
      return (0, Re.jsx)(Gb, {
        title: (0, Re.jsx)(ab.e, {
          text: ie.item.customTitle
        }),
        children: (0, Re.jsx)(ab.e, {
          text: ie.item.description
        })
      })
    }

    function Qb(ee) {
      return (0, Re.jsx)(jb.b, {
        ...ee,
        className: Me()("SmpChoice", ee.className),
        reselectable: !0
      })
    }

    function eM() {
      return (0, Re.jsx)("span", {
        className: "SmpLoader",
        children: (0, Re.jsx)(Oe.b, {})
      })
    }

    function iM(ee) {
      let {
        value: ie,
        onChange: He,
        min: be = 1,
        max: Me,
        step: Ke = 1,
        label: Ue
      } = ee;
      const Fe = (0, ye.useRef)(null),
        Je = (0, ye.useRef)(ie);
      Je.current = ie;
      const [oe, ke] = (0, ye.useState)(null), qe = ee => Math.max(be, Math.min(Me, Math.floor(ee))), fe = ee => {
        const ie = Je.current,
          ye = "function" === typeof Ke ? Ke(ie, ee) : Ke,
          be = qe(ie + ye * ee);
        Je.current = be, He(be)
      };
      (0, ye.useEffect)((() => {
        if (null === oe) return;
        let ee;
        const ie = () => {
            ke(null)
          },
          He = setTimeout((() => {
            ee = setInterval((() => {
              fe(oe);
              const ee = Je.current;
              (oe > 0 ? ee >= Me : ee <= be) && ie()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", ie), window.addEventListener("pointercancel", ie), window.addEventListener("blur", ie), () => {
          clearTimeout(He), clearInterval(ee), window.removeEventListener("pointerup", ie), window.removeEventListener("pointercancel", ie), window.removeEventListener("blur", ie)
        }
      }), [oe]), (0, ye.useEffect)((() => {
        const ee = Fe.current;
        ee && document.activeElement !== ee && ee.value !== String(ie) && (ee.value = String(ie))
      }), [ie]), (0, ye.useEffect)((() => {
        const ee = Fe.current;
        if (!ee) return;
        const ie = () => {
          ee.value = String(Je.current)
        };
        return ee.addEventListener("blur", ie), () => {
          ee.removeEventListener("blur", ie)
        }
      }), []);
      const Te = ee => (0, Re.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${ee>0?"More":"Less"} ${Ue}`,
        disabled: ee > 0 ? ie >= Me : ie <= be,
        onPointerDown: ie => {
          0 === ie.button && (fe(ee), ke(ee))
        },
        onKeyDown: ie => {
          "Enter" !== ie.key && " " !== ie.key || fe(ee)
        },
        onContextMenu: ee => {
          ee.preventDefault()
        },
        children: ee > 0 ? "+" : "\u2212"
      });
      return (0, Re.jsxs)("div", {
        className: "SmpStepper",
        children: [Te(-1), (0, Re.jsx)(ge.d, {
          className: "SmpStepperInput",
          domRef: Fe,
          defaultValue: String(ie),
          ariaLabel: Ue,
          type: "text",
          blurOnEnter: !0,
          onValueChange: ee => {
            const ie = ee.replace(/[^\d]/g, "");
            Fe.current && ie !== ee && (Fe.current.value = ie), "" !== ie && He(qe(Number(ie)))
          }
        }), Te(1)]
      })
    }

    function HM(ee) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, ee))) - 1))
    }
    var yM = He(34897),
      bM = He(1189);
    const MM = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    bM.z, Le.Lc.length;
    new Map;
    var KM = He(3608);

    function UM(ee, ie) {
      var He;
      return ie && (null === (He = ee[ie]) || void 0 === He ? void 0 : He.smp) || null
    }

    function FM(ee, ie) {
      const He = [];
      for (const be of lb(ee)) {
        var ye;
        const Me = ee[be];
        (null === (ye = Me.smp) || void 0 === ye ? void 0 : ye.kind) === ie && He.push({
          key: be,
          item: Me,
          meta: Me.smp
        })
      }
      return He
    }

    function JM(ee, ie) {
      var He;
      return null !== (He = FM(ee, ie)[0]) && void 0 !== He ? He : null
    }
    const oM = "50% 0% 50% 0%",
      RM = [{
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

    function kM(ee) {
      const ie = ee - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: He,
          suffix: ye
        }
        of RM)
        if (ie >= He) return `${Math.floor(ie/He)}${ye}`;
      return "<1s"
    }

    function qM(ee) {
      const ie = ee.map(Pb.f),
        He = [];
      return ie.forEach(((ee, ye) => {
        const be = function(ee) {
            const ie = ee.match(/\d+/);
            return ie ? Number(ie[0]) : 0
          }(ee),
          Me = ye === ie.length - 1;
        (Me || 1 === be || 10 === be || 100 === be) && He.push({
          label: ee,
          quantity: be,
          isAll: Me
        })
      })), He
    }
    let fM = null;

    function TM(ee, ie) {
      const He = ie.trim().toLowerCase();
      if (!He) return [];
      const ye = ee => {
          if (ee === He) return 0;
          if (ee.startsWith(He)) return 1;
          const ie = ee.indexOf(He);
          return -1 === ie ? -1 : 2 + ie
        },
        be = [];
      for (const Ue of ee) {
        const ee = [ye(Ue.lowerLabel), ye(Ue.lowerName)].filter((ee => -1 !== ee));
        ee.length && be.push({
          item: Ue,
          rank: Math.min(...ee)
        })
      }
      if (be.length > 0) return be.sort(((ee, ie) => ee.rank - ie.rank)).map((ee => ee.item));
      const Me = [...He],
        Ke = ee => {
          let ie = 0;
          for (const He of Me) {
            if (ie = ee.indexOf(He, ie), -1 === ie) return !1;
            ie++
          }
          return !0
        };
      return ee.filter((ee => Ke(ee.lowerLabel) || Ke(ee.lowerName)))
    }

    function pM(ee, ie) {
      var He;
      return null !== (He = null === ee || void 0 === ee ? void 0 : ee[ie]) && void 0 !== He ? He : ie
    }

    function XM(ee, ie) {
      const He = ee.userInput;
      return void 0 !== ie && "dropdown" === (null === He || void 0 === He ? void 0 : He.type) && He.dropdownOptions.map(Pb.f).includes(ie) ? ie : function(ee) {
        const ie = ee.userInput;
        if ("dropdown" !== (null === ie || void 0 === ie ? void 0 : ie.type) || 0 === ie.dropdownOptions.length) return null;
        const He = ie.dropdownOptions.map(Pb.f);
        return ie.initialValue && He.includes(ie.initialValue) ? ie.initialValue : He[He.length - 1]
      }(ee)
    }

    function zM(ee) {
      return void 0 === ee ? "" : JSON.stringify(ee)
    }
    const BM = (0, ye.createContext)(null);

    function EM() {
      return (0, ye.useContext)(BM)
    }
    var gM = He(2869);
    const OM = (0, ye.memo)((function(ee) {
        let {
          name: ie,
          label: He,
          onPick: ye
        } = ee;
        return (0, Re.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: He,
          onClick: () => {
            ye(ie)
          },
          children: [(0, Re.jsx)(Ib, {
            item: ie,
            size: "big"
          }), (0, Re.jsx)("span", {
            children: He
          })]
        })
      })),
      dM = (0, ye.memo)((function(ee) {
        let {
          items: ie,
          query: He,
          onPick: be
        } = ee;
        const {
          t: Me
        } = (0, Ke.v)(), [Ue, Fe] = (0, ye.useState)(new Set), Je = (0, ye.useMemo)((() => function(ee) {
          const ie = new Map;
          for (const He of ee) {
            let ee = ie.get(He.category);
            ee || (ee = [], ie.set(He.category, ee)), ee.push(He)
          }
          return [...MM, "other"].filter((ee => ie.has(ee))).map((ee => ({
            category: ee,
            items: ie.get(ee)
          })))
        }(ie)), [ie]), oe = (0, ye.useMemo)((() => TM(ie, He).slice(0, 60)), [ie, He]);
        return He.trim() ? 0 === oe.length ? (0, Re.jsx)(Gb, {
          title: Me("smpShop:noItemsFound", {
            query: He.trim()
          }),
          children: Me("smpShop:tryShorterName")
        }) : (0, Re.jsx)(gM.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: oM,
          observerUpdateDeps: [He],
          children: oe.map((ee => (0, Re.jsx)(OM, {
            name: ee.name,
            label: ee.label,
            onPick: be
          }, ee.name)))
        }) : (0, Re.jsx)(Re.Fragment, {
          children: Je.map((ee => {
            let {
              category: ie,
              items: He
            } = ee;
            const ye = Ue.has(ie) || He.length <= 48,
              Ke = ye ? He : He.slice(0, 48);
            return (0, Re.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Re.jsxs)("h4", {
                children: [Me("other" === ie ? "smpShop:otherItems" : `creativeInventory:${ie}`), !ye && (0, Re.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Fe(new Set([...Ue, ie]))
                  },
                  children: Me("smpShop:showAll", {
                    count: He.length
                  })
                })]
              }), (0, Re.jsx)(gM.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: oM,
                observerUpdateDeps: [ye],
                children: Ke.map((ee => (0, Re.jsx)(OM, {
                  name: ee.name,
                  label: ee.label,
                  onPick: be
                }, ee.name)))
              })]
            }, ie)
          }))
        })
      }));

    function WM(ee, ie) {
      const {
        searched: He,
        shown: be,
        searchFor: Me,
        loading: Ke
      } = function(ee, ie) {
        var He;
        const be = EM(),
          [Me, Ke] = (0, ye.useState)(void 0),
          Ue = (0, ye.useRef)(void 0),
          Fe = (0, ye.useRef)(0),
          Je = (0, ye.useRef)(void 0),
          oe = null !== (He = null === ee || void 0 === ee ? void 0 : ee.meta.item) && void 0 !== He ? He : null,
          Re = !!ee && be.isPending(ee.key);
        (0, ye.useEffect)((() => {
          if (!ee || Re || !ie || void 0 === Me || Me === oe) return;
          const He = Me === Ue.current && be.gaveUpAt(ee.key) > Fe.current && Je.current !== Me;
          (Me !== Ue.current || He) && be.act(ee.key, null !== Me && void 0 !== Me ? Me : "*", He) && (He && (Je.current = Me), Ue.current = Me, Fe.current = Date.now())
        }), [ee, Re, ie, Me, oe, be]);
        const ke = (0, ye.useCallback)((ee => {
            Ue.current = void 0, Je.current = void 0, Ke(ee)
          }), []),
          qe = void 0 !== Me && Me !== oe && (Re || Ue.current !== Me);
        return {
          searched: oe,
          shown: qe ? Me : oe,
          searchFor: ke,
          loading: qe || Re || null !== oe && !ie
        }
      }(ee, ie), Ue = (0, ye.useMemo)((() => function() {
        var ee;
        let ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const be = `${(0,KM.j)()}\x1f${ie.join("\x1e")}\x1f${He.join("\x1e")}\x1f${JSON.stringify(ye)}`;
        if ((null === (ee = fM) || void 0 === ee ? void 0 : ee.key) === be) return fM.items;
        const Me = new Set(He),
          Ke = new Set,
          Ue = [],
          Fe = (ee, ie) => {
            var He;
            if (!ee || Ke.has(ee) || Me.has(ee)) return;
            Ke.add(ee);
            const be = null !== (He = ye[ee]) && void 0 !== He ? He : ee;
            Ue.push({
              name: ee,
              label: be,
              lowerLabel: be.toLowerCase(),
              lowerName: ee.toLowerCase(),
              category: ie
            })
          };
        for (const oe of (0, yM.creativeItemIds)()) {
          var Je;
          (0, yM.itemIsDisabled)(oe, !0, !0, !1) || (0, yM.showOnlyInCreativeSearch)(oe) || Fe((0, KM.g)(oe), null !== (Je = (0, yM.creativeCategoryOf)(oe)) && void 0 !== Je ? Je : "other")
        }
        for (const oe of ie) Fe(oe, "other");
        return fM = {
          key: be,
          items: Ue
        }, Ue
      }(null === ee || void 0 === ee ? void 0 : ee.meta.extra, null === ee || void 0 === ee ? void 0 : ee.meta.excluded, null === ee || void 0 === ee ? void 0 : ee.meta.names)), [null === ee || void 0 === ee ? void 0 : ee.meta.extra, null === ee || void 0 === ee ? void 0 : ee.meta.excluded, null === ee || void 0 === ee ? void 0 : ee.meta.names]), [Fe, Je] = (0, ye.useState)(""), [oe, Re] = (0, ye.useState)(0), [ke, qe] = (0, ye.useState)("recent"), fe = (0, ye.useCallback)((ee => {
        Je(""), Re((ee => ee + 1)), Me(ee)
      }), [Me]), Te = "browse" === ke || "" !== Fe.trim();
      return {
        searched: He,
        shown: be,
        searchFor: Me,
        loading: Ke,
        catalogue: Ue,
        names: null === ee || void 0 === ee ? void 0 : ee.meta.names,
        query: Fe,
        setQuery: Je,
        searchBoxKey: oe,
        pickItem: fe,
        setView: qe,
        browsing: Te
      }
    }

    function tM(ee) {
      let {
        browser: ie,
        children: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)(), be = EM();
      return (0, Re.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Re.jsx)("div", {
          className: "SmpSearch",
          children: (0, Re.jsx)(ge.d, {
            className: "SmpSearchInput",
            placeholderText: ye("smpShop:searchPlaceholder"),
            defaultValue: ie.query,
            onValueChange: ee => {
              ie.setQuery(ee), ie.searched && ee.trim() && ie.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const ee = TM(ie.catalogue, ie.query)[0];
              ee ? ie.pickItem(ee.name) : ie.query.trim() && be.notify(ye("smpShop:noItemsFound", {
                query: ie.query.trim()
              }))
            }
          }, ie.searchBoxKey)
        }), He]
      })
    }

    function ZM(ee) {
      let {
        browser: ie,
        recentLabel: He,
        children: ye
      } = ee;
      const {
        t: be
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Re.jsx)(Qb, {
          options: [{
            value: "recent",
            label: He
          }, {
            value: "browse",
            label: be("smpShop:browseItems")
          }],
          value: ie.browsing ? "browse" : "recent",
          onChange: ie.setView,
          ariaLabel: be("smpShop:show")
        }), !ie.browsing && ye]
      })
    }

    function wM(ee) {
      let {
        item: ie,
        names: He,
        summary: ye,
        onBack: be,
        children: Me
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Re.jsx)(Je.b, {
          className: "SmpBackButton",
          onClick: be,
          children: Ue("general:back")
        }), (0, Re.jsx)(Ib, {
          item: ie,
          size: "big"
        }), (0, Re.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Re.jsx)("b", {
            children: pM(He, ie)
          }), ye && (0, Re.jsx)("small", {
            children: ye
          })]
        }), Me]
      })
    }

    function DM(ee) {
      let {
        browser: ie,
        className: He,
        action: ye,
        above: be,
        list: Ke,
        summary: Ue,
        recentLabel: Fe,
        listControls: Je,
        onBack: oe
      } = ee;
      return (0, Re.jsxs)("div", {
        className: Me()("SmpScreen", He),
        children: [(0, Re.jsx)(tM, {
          browser: ie,
          children: ye
        }), ie.shown && (0, Re.jsx)(wM, {
          item: ie.shown,
          names: ie.names,
          summary: !ie.loading && Ue,
          onBack: () => {
            null === oe || void 0 === oe || oe(), ie.searchFor(null)
          },
          children: Je
        }), be, ie.shown ? Ke : (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsx)(ZM, {
            browser: ie,
            recentLabel: Fe,
            children: Je
          }), ie.browsing ? (0, Re.jsx)(dM, {
            items: ie.catalogue,
            query: ie.query,
            onPick: ie.pickItem
          }) : Ke]
        })]
      })
    }

    function PM(ee, ie) {
      const He = ee.map((ee => {
        let {
          meta: ie
        } = ee;
        return ie.pricePerItem
      }));
      return "min" === ie ? Math.min(...He) : Math.max(...He)
    }
    var AM = He(7220);
    const YM = (0, ye.memo)((function(ee) {
      var ie;
      const {
        t: He
      } = (0, Ke.v)(), ye = null === ee.seller, be = ee.quantity * ee.pricePerItem;
      return (0, Re.jsxs)("div", {
        className: ee.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Re.jsx)(Ib, {
          item: ee.item,
          amount: ee.quantity,
          size: ee.grid ? "big" : "normal",
          tier: ee.tier
        }), (0, Re.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Re.jsx)("b", {
            children: (0, Re.jsx)(ab.e, {
              text: null !== (ie = ee.title) && void 0 !== ie ? ie : `${ee.quantity}x ${ee.item}`
            })
          }), (0, Re.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Re.jsx)("span", {
              children: ye ? He("smpShop:you") : (0, Re.jsx)(ab.e, {
                text: [{
                  entityName: ee.seller
                }]
              })
            }), (0, Re.jsx)("span", {
              children: He("smpShop:timeLeft", {
                time: kM(ee.expiresAt)
              })
            })]
          })]
        }), (0, Re.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Re.jsx)(hb, {
            amount: ee.pricePerItem
          }), (0, Re.jsx)("small", {
            children: He("smpShop:each")
          })]
        }), (0, Re.jsx)(Je.c, {
          className: "SmpBuyButton",
          disabled: ye || !ee.canAfford && !ee.busy,
          loading: ee.busy,
          onClick: () => {
            ee.onBuy(ee.itemKey)
          },
          children: ye ? He("smpShop:yours") : (0, Re.jsx)(hb, {
            amount: be
          })
        })]
      })
    }));

    function VM(ee) {
      let {
        view: ie,
        onChange: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return (0, Re.jsx)(jb.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: ye("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Re.jsx)(Ue.e, {
            name: "list"
          }),
          ariaLabel: ye("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Re.jsx)(Ue.e, {
            name: "grid-2"
          }),
          ariaLabel: ye("smpShop:gridView")
        }],
        value: ie,
        onChange: He
      })
    }

    function aM(ee) {
      let {
        entries: ie,
        view: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)(), be = EM(), Me = "grid" === He;
      return (0, Re.jsxs)(Re.Fragment, {
        children: [!Me && (0, Re.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Re.jsx)("span", {}), (0, Re.jsx)("span", {
            children: ye("smpShop:columnItem")
          }), (0, Re.jsx)("span", {
            children: ye("smpShop:columnPriceEach")
          }), (0, Re.jsx)("span", {
            children: ye("smpShop:columnTotal")
          })]
        }), (0, Re.jsx)(gM.c, {
          lazyLoadedClassName: Me ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: oM,
          observerUpdateDeps: [ie.length],
          children: ie.map((ee => {
            var ie, He;
            let {
              key: ye,
              item: Ke,
              meta: Ue
            } = ee;
            const Fe = Ue.quantity * Ue.pricePerItem;
            return (0, Re.jsx)(YM, {
              itemKey: ye,
              item: Ue.item,
              title: Ke.customTitle,
              quantity: Ue.quantity,
              pricePerItem: Ue.pricePerItem,
              seller: Ue.seller,
              expiresAt: Ue.expiresAt,
              tier: null !== (ie = null === (He = Ke.enchant) || void 0 === He ? void 0 : He.tier) && void 0 !== ie ? ie : null,
              busy: be.isPending(ye) || null !== Ue.seller && !1 === Ke.canBuy,
              canAfford: be.canAfford(Ke, Fe),
              grid: Me,
              onBuy: be.act
            }, ye)
          }))
        }, He)]
      })
    }
    const cM = [1, 10, 100],
      xM = [1, 10, 100, 999];

    function LM(ee) {
      var ie, He, be, Fe, oe, ke, qe, fe, Te, pe;
      const {
        t: Xe
      } = (0, Ke.v)(), ze = EM(), {
        creator: Be,
        mode: Ee
      } = ee, [Oe, de] = (0, ye.useState)(null !== (ie = null === Be || void 0 === Be ? void 0 : Be.meta.item) && void 0 !== ie ? ie : null), [We, te] = (0, ye.useState)(1), [Ze, we] = (0, ye.useState)(0), [De, Pe] = (0, ye.useState)(""), [Ae, Ye] = (0, ye.useState)(0), Ve = (0, ye.useRef)(Oe), ae = (0, ye.useRef)(!1), [ce, xe] = (0, ye.useState)(!1), Le = null !== (He = null === Be || void 0 === Be ? void 0 : Be.meta.item) && void 0 !== He ? He : null, Ce = null !== (be = null === Be || void 0 === Be ? void 0 : Be.meta.owned) && void 0 !== be ? be : 0;
      (0, ye.useEffect)((() => {
        ee.searching || null === Le || Le === Ve.current || (Ve.current = Le, ae.current = !1, de(Le), we(0), te("list" === Ee ? Math.max(1, Ce) : 1))
      }), [Le, ee.searching]);
      const ve = !!Be && !!Oe && Be.meta.item === Oe,
        ue = ve ? Be.meta.owned : null !== (Fe = null === (oe = ee.inventory) || void 0 === oe || null === (ke = oe.find((ee => ee.item === Oe))) || void 0 === ke ? void 0 : ke.quantity) && void 0 !== Fe ? Fe : 0,
        me = "list" === Ee ? Math.max(1, ue) : 45954,
        le = null !== (qe = ee.prices[0]) && void 0 !== qe ? qe : null,
        Se = ee.prices.length ? Math.round(ee.prices.reduce(((ee, ie) => ee + ie), 0) / ee.prices.length) : null,
        ne = null === (fe = ee.inventory) || void 0 === fe || null === (Te = fe.find((ee => ee.item === Oe))) || void 0 === Te ? void 0 : Te.sellPrice;
      (0, ye.useEffect)((() => {
        var ee;
        ve && (te((ee => "list" === Ee ? Math.min(Math.max(1, ee), Math.max(1, ue)) : ee)), ae.current || we(null !== (ee = null !== le && void 0 !== le ? le : Se) && void 0 !== ee ? ee : Math.max(1, null !== ne && void 0 !== ne ? ne : 1)))
      }), [ve, ue, Oe, le, Se]);
      const je = ee => {
          ae.current = !0, we(ee)
        },
        se = ie => {
          var He, ye, be;
          Ve.current = ie, ae.current = !1, xe(!1), Pe(""), Ye((ee => ee + 1)), de(ie), we(0), te("list" === Ee && null !== (He = null === (ye = ee.inventory) || void 0 === ye || null === (be = ye.find((ee => ee.item === ie))) || void 0 === be ? void 0 : be.quantity) && void 0 !== He ? He : 1), (null === Be || void 0 === Be ? void 0 : Be.meta.item) !== ie && ee.onPickItem(ie)
        },
        Ie = We * Ze,
        he = "list" === Ee && null !== Be && void 0 !== Be && Be.meta.fee ? function(ee, ie) {
          const He = Math.max(0, ie - ee.taxFreeAllowance);
          return Math.ceil(Math.round(He * ee.rate * 1e6) / 1e6)
        }(Be.meta.fee, Ie) : 0,
        Ne = !!Be && ze.isPending(Be.key),
        Ge = ve && !ee.searching && We >= 1 && Ze >= 1 && ("order" === Ee || ue >= We) && !Ne,
        re = !!Oe && !ve && !ee.searching && We >= 1 && Ze >= 1,
        Qe = () => {
          Ge ? ze.act(Be.key, `${We}|${Ze}`) : re && (ee.onPickItem(Oe), xe(!0))
        };
      (0, ye.useEffect)((() => {
        ce && ve && !ee.searching && (xe(!1), Qe())
      }), [ce, ve, ee.searching]);
      const ei = !!Oe && !ve && (ee.searching || ce),
        ii = Oe ? pM(ee.names, Oe) : "",
        Hi = (0, ye.useMemo)((() => TM(ee.catalogue, De).slice(0, 8)), [ee.catalogue, De]),
        yi = ("list" === Ee ? cM.filter((ee => ee < ue)) : xM).map((ee => ({
          value: ee,
          label: String(ee)
        })));
      "list" === Ee && ue > 0 && yi.push({
        value: ue,
        label: Xe("smpShop:all", {
          count: ue
        })
      });
      const bi = [];
      return null !== le && (le > 1 && bi.push({
        value: le - 1,
        label: Xe("smpShop:undercut", {
          price: nb(le - 1)
        })
      }), bi.push({
        value: le,
        label: Xe("smpShop:lowest", {
          price: nb(le)
        })
      })), null !== Se && Se !== le && bi.push({
        value: Se,
        label: Xe("smpShop:average", {
          price: nb(Se)
        })
      }), (0, Re.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Re.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Re.jsx)("b", {
            children: Xe("list" === Ee ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Re.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Xe("smpShop:close"),
            onClick: ee.onClose,
            children: (0, Re.jsx)(Ue.e, {
              name: "xmark"
            })
          })]
        }), "list" === Ee && (0, Re.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (pe = ee.inventory) && void 0 !== pe && pe.length ? ee.inventory.map((ee => {
            let {
              item: ie,
              quantity: He
            } = ee;
            return (0, Re.jsx)("button", {
              type: "button",
              title: ie,
              className: Me()("SmpPickerSlot", {
                SmpPickerSlotOn: ie === Oe
              }),
              onClick: () => {
                se(ie)
              },
              children: (0, Re.jsx)(Ib, {
                item: ie,
                amount: He
              })
            }, ie)
          })) : (0, Re.jsx)("span", {
            className: "SmpMuted",
            children: Xe("smpShop:nothingToList")
          })
        }), ("list" === Ee || !Oe) && (0, Re.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Re.jsx)(ge.d, {
            className: "SmpSearchInput",
            placeholderText: Xe("list" === Ee ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: De,
            onValueChange: Pe,
            blurOnEnter: !0,
            onEnter: () => {
              Hi[0] && se(Hi[0].name)
            }
          }, Ae), Hi.length > 0 && (0, Re.jsx)("div", {
            className: "SmpPicker",
            children: Hi.map((ee => {
              let {
                name: ie
              } = ee;
              return (0, Re.jsx)("button", {
                type: "button",
                title: ie,
                className: Me()("SmpPickerSlot", {
                  SmpPickerSlotOn: ie === Oe
                }),
                onClick: () => {
                  se(ie)
                },
                children: (0, Re.jsx)(Ib, {
                  item: ie
                })
              }, ie)
            }))
          })]
        }), Oe && (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsxs)("div", {
            className: "SmpPickedName",
            children: [ii, ei && (0, Re.jsx)(eM, {})]
          }), (0, Re.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Re.jsxs)("div", {
              className: "SmpField",
              children: [(0, Re.jsxs)("span", {
                children: [Xe("smpShop:quantity"), "list" === Ee && ve && (0, Re.jsx)("small", {
                  children: Xe("smpShop:youHave", {
                    count: ue
                  })
                })]
              }), (0, Re.jsx)(iM, {
                value: We,
                onChange: te,
                max: me,
                label: Xe("smpShop:quantity")
              }), (0, Re.jsx)(Qb, {
                options: yi,
                value: We,
                onChange: te,
                ariaLabel: Xe("smpShop:quantity")
              })]
            }), (0, Re.jsxs)("div", {
              className: "SmpField",
              children: [(0, Re.jsx)("span", {
                children: Xe("smpShop:pricePerItem")
              }), (0, Re.jsx)(iM, {
                value: Math.max(1, Ze),
                onChange: je,
                max: 9999999,
                step: HM,
                label: Xe("smpShop:pricePerItem")
              }), (0, Re.jsx)(Qb, {
                options: bi,
                value: Ze,
                onChange: je,
                ariaLabel: Xe("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Ee && (0, Re.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Re.jsxs)("span", {
              children: [Xe("smpShop:youGet"), " ", (0, Re.jsx)(hb, {
                amount: Math.max(0, Ie - he),
                exact: !0
              })]
            }), (0, Re.jsx)("small", {
              children: he > 0 ? Xe("smpShop:listingFee", {
                fee: he.toLocaleString("en-US")
              }) : Xe("smpShop:listingRules")
            })]
          }), (0, Re.jsx)(Je.p, {
            className: "SmpSubmit",
            disabled: !Ge && !re && !Ne,
            loading: Ne || ei || ve && ee.searching,
            onClick: Qe,
            children: "list" === Ee ? Xe("smpShop:listButton", {
              count: We,
              item: ii
            }) : (0, Re.jsxs)(Re.Fragment, {
              children: [Xe("smpShop:orderButton", {
                count: We,
                item: ii
              }), " ", Ze >= 1 && (0, Re.jsx)(hb, {
                amount: Ie
              })]
            })
          })]
        })]
      })
    }

    function CM() {
      var ee;
      const {
        t: ie
      } = (0, Ke.v)(), He = EM(), be = null === (ee = He.shopInfo[He.categoryKey]) || void 0 === ee ? void 0 : ee.items, Me = JM(be, "search"), Ue = JM(be, "creator"), Fe = FM(be, "enchantedCreator"), oe = FM(be, "listing"), ke = JM(be, "empty"), qe = WM(Me, oe.length > 0 || null !== ke), {
        searched: fe,
        shown: Te,
        loading: pe
      } = qe, [Xe, ze] = (0, ye.useState)(!1), [Be, Ee] = function() {
        const [ee, ie] = (0, AM.d)("smpMarketView", "list");
        return ["grid" === ee ? "grid" : "list", ie]
      }(), ge = "grid" === Be, Oe = (0, ye.useMemo)((() => oe.filter((ee => {
        let {
          meta: ie
        } = ee;
        return null !== ie.seller && ie.item === fe
      })).map((ee => {
        let {
          meta: ie
        } = ee;
        return ie.pricePerItem
      })).sort(((ee, ie) => ee - ie))), [oe, fe]), de = (0, ye.useMemo)((() => {
        const ee = new Set(qe.catalogue.map((ee => {
          let {
            name: ie
          } = ee;
          return ie
        })));
        return function(ee) {
          for (const ie in ee)
            if ("sell" === ee[ie].smp) return FM(ee[ie].items, "sell").filter((ee => {
              let {
                item: ie
              } = ee;
              return !ie.enchant
            })).map((ee => {
              let {
                meta: ie
              } = ee;
              return {
                item: ie.item,
                quantity: ie.quantity,
                sellPrice: ie.pricePerItem
              }
            }));
          return []
        }(He.shopInfo).filter((ie => {
          let {
            item: He
          } = ie;
          return ee.has(He)
        }))
      }), [He.shopInfo, qe.catalogue]);
      return (0, Re.jsx)(DM, {
        browser: qe,
        className: "SmpMarketTab",
        recentLabel: ie("smpShop:recentlyListed"),
        action: (0, Re.jsx)(Je.p, {
          className: "SmpSellButton",
          onClick: () => {
            ze((ee => !ee))
          },
          children: ie("smpShop:sell")
        }),
        above: Xe && (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsx)(LM, {
            mode: "list",
            creator: Ue,
            inventory: de,
            catalogue: qe.catalogue,
            names: qe.names,
            searching: pe,
            prices: Oe,
            onPickItem: qe.searchFor,
            onClose: () => {
              ze(!1)
            }
          }), Fe.length > 0 && (0, Re.jsx)(vM, {
            entries: Fe
          })]
        }),
        listControls: (0, Re.jsx)(VM, {
          view: Be,
          onChange: Ee
        }),
        summary: Te && (oe.length > 0 ? ie(1 === oe.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: oe.length,
          price: nb(PM(oe, "min"))
        }) : ie("smpShop:noOneSelling", {
          item: pM(qe.names, Te)
        })),
        list: pe ? (0, Re.jsx)(Nb, {
          grid: ge
        }) : oe.length > 0 ? (0, Re.jsx)(aM, {
          entries: oe,
          view: Be
        }) : ke ? (0, Re.jsx)(rb, {
          entry: ke
        }) : (0, Re.jsx)(Nb, {
          count: 3,
          grid: ge
        })
      })
    }

    function vM(ee) {
      let {
        entries: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), be = EM(), [Me, Ue] = (0, ye.useState)({});
      return (0, Re.jsx)("div", {
        className: "SmpList",
        children: ie.map((ee => {
          var ie, ye, Ke;
          let {
            key: Fe,
            item: oe,
            meta: ke
          } = ee;
          const qe = null !== (ie = Me[Fe]) && void 0 !== ie ? ie : 1;
          return (0, Re.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Re.jsx)(Ib, {
              item: ke.item,
              amount: ke.quantity,
              tier: null !== (ye = null === (Ke = oe.enchant) || void 0 === Ke ? void 0 : Ke.tier) && void 0 !== ye ? ye : null
            }), (0, Re.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Re.jsx)("b", {
                children: (0, Re.jsx)(ab.e, {
                  text: oe.customTitle
                })
              }), (0, Re.jsx)("small", {
                children: He("smpShop:enchantedListing")
              })]
            }), (0, Re.jsx)(iM, {
              value: qe,
              onChange: ee => {
                Ue({
                  ...Me,
                  [Fe]: ee
                })
              },
              max: 9999999,
              step: HM,
              label: He("smpShop:pricePerItem")
            }), (0, Re.jsxs)(Je.p, {
              loading: be.isPending(Fe),
              onClick: () => {
                be.act(Fe, String(qe))
              },
              children: [He("smpShop:list"), " ", (0, Re.jsx)(hb, {
                amount: qe
              })]
            })]
          }, Fe)
        }))
      })
    }
    const uM = (0, ye.memo)((function(ee) {
      let {
        itemKey: ie,
        item: He,
        quantity: ye,
        pricePerItem: be,
        tier: Ke,
        selected: Ue,
        onSelect: Fe
      } = ee;
      return (0, Re.jsxs)("button", {
        type: "button",
        className: Me()("SmpInventorySlot", {
          SmpInventorySlotOn: Ue
        }),
        title: He,
        onClick: () => {
          Fe(ie)
        },
        children: [(0, Re.jsx)(Ib, {
          item: He,
          amount: ye,
          tier: Ke
        }), (0, Re.jsx)(hb, {
          amount: be
        })]
      })
    }));

    function mM() {
      var ee;
      const {
        t: ie
      } = (0, Ke.v)(), He = EM(), be = null === (ee = He.shopInfo[He.categoryKey]) || void 0 === ee ? void 0 : ee.items, Ue = FM(be, "sell"), Fe = JM(be, "empty"), [Je, oe] = (0, ye.useState)(null), [ke, qe] = (0, ye.useState)({}), fe = Ue.find((ee => {
        let {
          key: ie
        } = ee;
        return ie === Je
      }));
      return 0 === Ue.length ? (0, Re.jsx)("div", {
        className: "SmpScreen",
        children: (0, Re.jsx)(Gb, {
          title: Fe ? (0, Re.jsx)(ab.e, {
            text: Fe.item.customTitle
          }) : ie("smpShop:nothingToSell"),
          children: Fe && (0, Re.jsx)(ab.e, {
            text: Fe.item.description
          })
        })
      }) : (0, Re.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Re.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Ue.map((ee => {
            var ie, He;
            let {
              key: ye,
              item: be,
              meta: Me
            } = ee;
            return (0, Re.jsx)(uM, {
              itemKey: ye,
              item: Me.item,
              quantity: Me.quantity,
              pricePerItem: Me.pricePerItem,
              tier: null !== (ie = null === (He = be.enchant) || void 0 === He ? void 0 : He.tier) && void 0 !== ie ? ie : null,
              selected: ye === Je,
              onSelect: oe
            }, ye)
          }))
        }), (0, Re.jsx)("div", {
          className: Me()("SmpSellBar", {
            SmpSellBarIdle: !fe
          }),
          children: fe ? (0, Re.jsx)(lM, {
            entry: fe,
            choice: XM(fe.item, ke[fe.key]),
            onChoose: ee => {
              qe({
                ...ke,
                [fe.key]: ee
              })
            }
          }) : (0, Re.jsx)("span", {
            className: "SmpMuted",
            children: ie("smpShop:tapToSell")
          })
        })]
      })
    }

    function lM(ee) {
      var ie, He, ye, be;
      let {
        entry: Me,
        choice: Ue,
        onChoose: Fe
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = EM(), {
        key: qe,
        item: fe,
        meta: Te
      } = Me, pe = qM("dropdown" === (null === (ie = fe.userInput) || void 0 === ie ? void 0 : ie.type) ? fe.userInput.dropdownOptions : []), Xe = null === Ue ? 0 : -(0, Pb.d)(fe, Ue);
      return (0, Re.jsxs)(Re.Fragment, {
        children: [(0, Re.jsx)(Ib, {
          item: Te.item,
          amount: Te.quantity,
          tier: null !== (He = null === (ye = fe.enchant) || void 0 === ye ? void 0 : ye.tier) && void 0 !== He ? He : null
        }), (0, Re.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Re.jsx)("b", {
            children: (0, Re.jsx)(ab.e, {
              text: null !== (be = fe.customTitle) && void 0 !== be ? be : Te.item
            })
          }), (0, Re.jsx)("small", {
            children: oe("smpShop:sellEach", {
              count: Te.quantity
            })
          })]
        }), (0, Re.jsx)(Qb, {
          options: pe.map((ee => {
            let {
              label: ie,
              quantity: He,
              isAll: ye
            } = ee;
            return {
              value: ie,
              label: ye ? oe("smpShop:all", {
                count: He
              }) : String(He)
            }
          })),
          value: Ue,
          onChange: Fe,
          ariaLabel: oe("smpShop:quantity")
        }), (0, Re.jsxs)(Je.p, {
          loading: ke.isPending(qe),
          disabled: null === Ue,
          onClick: () => {
            ke.act(qe, Ue)
          },
          children: [oe("smpShop:sellButton"), " ", (0, Re.jsx)(hb, {
            amount: Xe
          })]
        })]
      })
    }

    function SM() {
      var ee;
      const {
        t: ie
      } = (0, Ke.v)(), He = EM(), ye = null === (ee = He.shopInfo[He.categoryKey]) || void 0 === ee ? void 0 : ee.items, be = FM(ye, "collect"), Me = FM(ye, "myListing"), Ue = (ee, ie) => He.isPending(ee) || !1 === ie.canBuy;
      return (0, Re.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Re.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ie("smpShop:readyToCollect")
        }), be.length > 0 ? (0, Re.jsx)("div", {
          className: "SmpList",
          children: be.map((ee => {
            var ye, be;
            let {
              key: Me,
              item: Ke,
              meta: Fe
            } = ee;
            return (0, Re.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Re.jsx)(Ib, {
                item: "sold" === Fe.type ? "Gold Coin" : Fe.item,
                amount: "sold" === Fe.type ? 0 : Fe.quantity,
                tier: null !== (ye = null === (be = Ke.enchant) || void 0 === be ? void 0 : be.tier) && void 0 !== ye ? ye : null
              }), (0, Re.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Re.jsx)("b", {
                  children: (0, Re.jsx)(ab.e, {
                    text: Ke.customTitle
                  })
                }), (0, Re.jsx)("small", {
                  children: (0, Re.jsx)(ab.e, {
                    text: Ke.description
                  })
                })]
              }), (0, Re.jsx)(Je.m, {
                loading: Ue(Me, Ke),
                onClick: () => {
                  He.act(Me)
                },
                children: ie("smpShop:collect")
              })]
            }, Me)
          }))
        }) : (0, Re.jsx)(Gb, {
          title: ie("smpShop:nothingToCollect"),
          children: ie("smpShop:nothingToCollectHint")
        }), (0, Re.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ie("smpShop:activeListings", {
            count: Me.length
          })
        }), Me.length > 0 ? (0, Re.jsx)("div", {
          className: "SmpList",
          children: Me.map((ee => {
            var ye, be;
            let {
              key: Me,
              item: Ke,
              meta: Fe
            } = ee;
            return (0, Re.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Re.jsx)(Ib, {
                item: Fe.item,
                amount: Fe.quantity,
                tier: null !== (ye = null === (be = Ke.enchant) || void 0 === be ? void 0 : be.tier) && void 0 !== ye ? ye : null
              }), (0, Re.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Re.jsx)("b", {
                  children: (0, Re.jsx)(ab.e, {
                    text: Ke.customTitle
                  })
                }), (0, Re.jsx)("small", {
                  children: ie("smpShop:timeLeft", {
                    time: kM(Fe.expiresAt)
                  })
                })]
              }), (0, Re.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Re.jsx)(hb, {
                  amount: Fe.pricePerItem
                }), (0, Re.jsx)("small", {
                  children: ie("smpShop:each")
                })]
              }), (0, Re.jsx)(Je.G, {
                loading: Ue(Me, Ke),
                onClick: () => {
                  He.act(Me)
                },
                children: ie("smpShop:cancel")
              })]
            }, Me)
          }))
        }) : (0, Re.jsx)(Gb, {
          title: ie("smpShop:noActiveListings"),
          children: ie("smpShop:noActiveListingsHint")
        })]
      })
    }

    function nM(ee) {
      let {
        done: ie,
        of: He
      } = ee;
      return (0, Re.jsx)("span", {
        className: "SmpProgress",
        children: (0, Re.jsx)("i", {
          style: {
            width: `${Math.min(100,ie/Math.max(1,He)*100)}%`
          }
        })
      })
    }

    function jM(ee) {
      var ie, He, ye;
      let {
        entry: be,
        choice: Me,
        onChoose: Ue
      } = ee;
      const {
        t: Fe
      } = (0, Ke.v)(), oe = EM(), {
        key: ke,
        item: qe,
        meta: fe
      } = be, Te = "dropdown" === (null === (ie = qe.userInput) || void 0 === ie ? void 0 : ie.type) ? qe.userInput.dropdownOptions : [], pe = !0 === fe.processing, Xe = null !== fe.creator && (fe.owned > 0 || pe), ze = Xe && fe.owned > 0 ? qM(Te) : [], Be = null === Me ? 0 : null !== (He = null === (ye = ze.find((ee => ee.label === Me))) || void 0 === ye ? void 0 : ye.quantity) && void 0 !== He ? He : 0;
      return (0, Re.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Re.jsx)(Ib, {
          item: fe.item
        }), (0, Re.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Re.jsx)("b", {
            children: (0, Re.jsx)(ab.e, {
              text: qe.customTitle
            })
          }), (0, Re.jsxs)("small", {
            children: [(0, Re.jsx)(hb, {
              amount: fe.pricePerItem
            }), " ", Fe("smpShop:each"), " \xb7", " ", null === fe.creator ? Fe("smpShop:you") : (0, Re.jsx)(ab.e, {
              text: [{
                entityName: fe.creator
              }]
            })]
          }), (0, Re.jsx)(nM, {
            done: fe.delivered,
            of: fe.wanted
          })]
        }), Xe ? (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsx)(Qb, {
            options: ze.map((ee => {
              let {
                label: ie,
                quantity: He,
                isAll: ye
              } = ee;
              return {
                value: ie,
                label: ye ? Fe("smpShop:max", {
                  count: He
                }) : String(He)
              }
            })),
            value: Me,
            onChange: Ue,
            ariaLabel: Fe("smpShop:quantity")
          }), (0, Re.jsxs)(Je.p, {
            loading: oe.isPending(ke) || pe,
            disabled: null === Me,
            onClick: () => {
              oe.act(ke, Me)
            },
            children: [Fe("smpShop:deliver"), " ", (0, Re.jsx)(hb, {
              amount: Be * fe.pricePerItem
            })]
          })]
        }) : (0, Re.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === fe.creator ? Fe("smpShop:yourOrder") : Fe("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function sM() {
      var ee;
      const {
        t: ie
      } = (0, Ke.v)(), He = EM(), be = null === (ee = He.shopInfo[He.categoryKey]) || void 0 === ee ? void 0 : ee.items, Me = JM(be, "search"), Ue = JM(be, "creator"), Fe = FM(be, "order"), oe = JM(be, "empty"), ke = WM(Me, Fe.length > 0 || null !== oe), [qe, fe] = (0, ye.useState)(!1), [Te, pe] = (0, ye.useState)({});
      return (0, Re.jsx)(DM, {
        browser: ke,
        recentLabel: ie("smpShop:recentOrders"),
        action: (0, Re.jsx)(Je.p, {
          onClick: () => {
            fe((ee => !ee))
          },
          children: ie("smpShop:createOrder")
        }),
        above: qe && (0, Re.jsx)(LM, {
          mode: "order",
          creator: Ue,
          catalogue: ke.catalogue,
          names: ke.names,
          searching: ke.loading,
          prices: [],
          onPickItem: ke.searchFor,
          onClose: () => {
            fe(!1)
          }
        }),
        onBack: () => {
          fe(!1)
        },
        summary: Fe.length > 0 && ie(1 === Fe.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Fe.length,
          price: nb(PM(Fe, "max"))
        }),
        list: ke.loading ? (0, Re.jsx)(Nb, {}) : Fe.length > 0 ? (0, Re.jsx)(gM.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: oM,
          observerUpdateDeps: [Fe.length],
          children: Fe.map((ee => (0, Re.jsx)(jM, {
            entry: ee,
            choice: XM(ee.item, Te[ee.key]),
            onChoose: ie => {
              pe({
                ...Te,
                [ee.key]: ie
              })
            }
          }, ee.key)))
        }) : oe ? (0, Re.jsx)(rb, {
          entry: oe
        }) : (0, Re.jsx)(Nb, {
          count: 3
        })
      })
    }

    function IM() {
      var ee;
      const {
        t: ie
      } = (0, Ke.v)(), He = EM(), ye = FM(null === (ee = He.shopInfo[He.categoryKey]) || void 0 === ee ? void 0 : ee.items, "myOrder");
      return 0 === ye.length ? (0, Re.jsx)("div", {
        className: "SmpScreen",
        children: (0, Re.jsx)(Gb, {
          title: ie("smpShop:noOrders"),
          children: ie("smpShop:noOrdersHint")
        })
      }) : (0, Re.jsx)("div", {
        className: "SmpScreen",
        children: (0, Re.jsx)("div", {
          className: "SmpList",
          children: ye.map((ee => {
            let {
              key: ye,
              item: be,
              meta: Me
            } = ee;
            const Ke = He.isPending(ye) || !1 === be.canBuy;
            return (0, Re.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Re.jsx)(Ib, {
                item: Me.item,
                amount: Me.collectable
              }), (0, Re.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Re.jsx)("b", {
                  children: (0, Re.jsx)(ab.e, {
                    text: be.customTitle
                  })
                }), (0, Re.jsxs)("small", {
                  children: [(0, Re.jsx)(hb, {
                    amount: Me.pricePerItem
                  }), " ", ie("smpShop:each"), Me.collectable > 0 && ` \xb7 ${ie("smpShop:readyCount",{count:Me.collectable})}`]
                }), (0, Re.jsx)(nM, {
                  done: Me.delivered,
                  of: Me.wanted
                })]
              }), Me.collectable > 0 ? (0, Re.jsx)(Je.m, {
                loading: Ke,
                onClick: () => {
                  He.act(ye)
                },
                children: ie("smpShop:collectCount", {
                  count: Me.collectable
                })
              }) : (0, Re.jsx)(Je.G, {
                loading: Ke,
                onClick: () => {
                  He.act(ye)
                },
                children: ie("smpShop:cancel")
              })]
            }, ye)
          }))
        })
      })
    }
    const hM = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      NM = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function GM(ee, ie) {
      let He = !1;
      const ye = {};
      for (const be in ee) ie(be, ee[be]) ? ye[be] = ee[be] : He = !0;
      return He ? ye : ee
    }

    function rM(ee) {
      var ie, He, be, Fe;
      const {
        show: Je,
        shopInfo: oe,
        selectedCategoryKey: ke
      } = ee, {
        t: qe
      } = (0, Ke.v)(), fe = null !== ke && void 0 !== ke ? ke : "", Te = UM(oe, fe), pe = null === (ie = oe[fe]) || void 0 === ie ? void 0 : ie.items, Xe = null !== Te, [ze, Be] = (0, ye.useState)({}), [Ee, ge] = (0, ye.useState)([]), [Oe, de] = (0, ye.useState)(!1), [We, te] = (0, ye.useState)(null), [, Ze] = (0, ye.useState)(0), we = (0, ye.useRef)(0), De = (0, ye.useRef)({}), Pe = (0, ye.useRef)({
        items: pe,
        pending: ze,
        shopInfo: oe,
        active: Xe,
        canAfford: ee.canAfford,
        buy: ee.buy
      });
      Pe.current = {
        items: pe,
        pending: ze,
        shopInfo: oe,
        active: Xe,
        canAfford: ee.canAfford,
        buy: ee.buy
      };
      const Ae = (0, ye.useCallback)((ee => {
        we.current++;
        const ie = we.current;
        ge((He => [{
          id: ie,
          text: ee
        }, ...He].slice(0, 8))), te(ie)
      }), []);
      (0, ye.useEffect)((() => {
        if (null === We) return;
        const ee = setTimeout((() => {
          te(null)
        }), 3e3);
        return () => {
          clearTimeout(ee)
        }
      }), [We]), (0, ye.useEffect)((() => {
        const ie = ee.message;
        if (!ie) return;
        const {
          shopInfo: He,
          active: ye,
          items: be
        } = Pe.current, Me = null !== ie.categoryKey ? null !== UM(He, ie.categoryKey) : ye;
        (Me || ye) && Ae(ie.text), Me && Be((ee => GM(ee, (ee => {
          var ie, He;
          return !hM.has(null === be || void 0 === be || null === (ie = be[ee]) || void 0 === ie || null === (He = ie.smp) || void 0 === He ? void 0 : He.kind)
        }))))
      }), [ee.message, Ae]), (0, ye.useEffect)((() => {
        Be((ee => GM(ee, ((ee, ie) => zM(null === pe || void 0 === pe ? void 0 : pe[ee]) === ie.snapshot))))
      }), [oe, pe]);
      const Ye = Object.keys(ze).length > 0;
      (0, ye.useEffect)((() => {
        if (!Ye) return;
        const ee = setInterval((() => {
          Ze((ee => ee + 1));
          const ee = Date.now(),
            {
              pending: ie,
              items: He
            } = Pe.current,
            ye = Object.keys(ie).filter((He => ee - ie[He].at >= 12e3));
          if (0 === ye.length) return;
          const be = ye.some((ee => {
            var ye, be;
            return "search" !== (null === He || void 0 === He || null === (ye = He[ee]) || void 0 === ye || null === (be = ye.smp) || void 0 === be ? void 0 : be.kind) || ie[ee].resend
          }));
          for (const Me of ye) De.current[Me] = ee;
          Be((ee => GM(ee, (ee => !ye.includes(ee))))), be && Ae(qe("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(ee)
        }
      }), [Ye]), (0, ye.useEffect)((() => {
        Be({})
      }), [fe]), (0, ye.useEffect)((() => {
        Je || de(!1)
      }), [Je]);
      const Ve = (0, ye.useCallback)((function(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: ye,
            pending: be,
            canAfford: Me,
            buy: Ke
          } = Pe.current, Ue = null === ye || void 0 === ye ? void 0 : ye[ee];
          if (!Ue || ee in be || !1 === Ue.canBuy) return !1;
          if (!Me(Ue, (0, Pb.d)(Ue, ie))) return !1;
          Ke(ee, Ue, ie);
          const Fe = {
            snapshot: zM(Ue),
            at: Date.now(),
            resend: He
          };
          return Pe.current.pending = {
            ...Pe.current.pending,
            [ee]: Fe
          }, Be((ie => ({
            ...ie,
            [ee]: Fe
          }))), !0
        }), []),
        ae = (0, ye.useMemo)((() => ({
          shopInfo: oe,
          categoryKey: fe,
          canAfford: ee.canAfford,
          isPending: ee => ee in ze,
          gaveUpAt: ee => {
            var ie;
            return null !== (ie = De.current[ee]) && void 0 !== ie ? ie : 0
          },
          act: Ve,
          notify: Ae
        })), [oe, fe, ee.canAfford, ze, Ve, Ae]),
        ce = Math.min(...Object.values(ze).map((ee => ee.at))),
        xe = Ye && Date.now() - ce > 1500,
        Le = Ee.length > 1,
        Ce = null !== (He = null === (be = oe[fe]) || void 0 === be ? void 0 : be.customTitle) && void 0 !== He ? He : fe,
        ve = null === (Fe = oe[fe]) || void 0 === Fe ? void 0 : Fe.description;
      let ue = null;
      return "market" === Te ? ue = (0, Re.jsx)(CM, {}) : "sell" === Te ? ue = (0, Re.jsx)(mM, {}) : "collect" === Te ? ue = (0, Re.jsx)(SM, {}) : "orders" === Te ? ue = (0, Re.jsx)(sM, {}) : "myOrders" === Te && (ue = (0, Re.jsx)(IM, {})), (0, Re.jsx)(BM.Provider, {
        value: ae,
        children: (0, Re.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Xe,
          children: (0, Re.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Re.jsx)("header", {
              className: "SmpHeader",
              children: (0, Re.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Re.jsxs)("h2", {
                  children: [Te && (0, Re.jsx)(Ue.e, {
                    name: NM[Te]
                  }), qe(Ce)]
                }), ve && (0, Re.jsx)("p", {
                  children: (0, Re.jsx)(ab.e, {
                    text: ve
                  })
                })]
              })
            }), (0, Re.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Je && ue
            }), (0, Re.jsxs)("button", {
              type: "button",
              className: Me()("SmpStatus", {
                SmpStatusWaiting: Ye,
                SmpStatusFresh: !Ye && null !== We,
                SmpStatusHasHistory: Le
              }),
              "aria-live": "polite",
              "aria-expanded": Le ? Oe : void 0,
              onClick: () => {
                Le && de((ee => !ee))
              },
              children: [Ye ? (0, Re.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Re.jsx)(eM, {}), qe(xe ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Ee[0] ? (0, Re.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Re.jsx)(ab.e, {
                  text: Ee[0].text
                })
              }, Ee[0].id) : (0, Re.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: qe("smpShop:ready")
              }), Le && (0, Re.jsx)("small", {
                children: qe("smpShop:recentMessages", {
                  count: Ee.length
                })
              })]
            }), Oe && Le && (0, Re.jsx)("div", {
              className: "SmpStatusHistory",
              children: Ee.map((ee => (0, Re.jsx)("div", {
                children: (0, Re.jsx)(ab.e, {
                  text: ee.text
                })
              }, ee.id)))
            })]
          })
        })
      })
    }
    class QM {
      constructor(ee) {
        this.info = ee
      }
      static fromShopInfo(ee) {
        const ie = {};
        for (const He in ee) {
          const ye = !0 === ee[He].redDot && !0 !== ee[He].forceRemoveRedDot;
          ie[He] = {
            redDot: ye,
            items: {}
          };
          for (const be in ee[He].items) {
            const ye = ee[He].items[be],
              Me = !0 === ye.redDot && !0 !== ye.forceRemoveRedDot;
            ie[He].items[be] = {
              redDot: Me
            }
          }
        }
        return new QM(ie)
      }
      anyCategoryHasRedDots() {
        for (const ee in this.info)
          if (this.categoryHasRedDot(ee)) return !0;
        return !1
      }
      doesCategoryExist(ee) {
        return !(0, aH.P)(this.info[ee])
      }
      categoryHasRedDot(ee) {
        return !0 === this.info[ee].redDot
      }
      updateCategoryRedDot(ee, ie) {
        this.info[ee].redDot = ie
      }
      doesItemExist(ee, ie) {
        return this.doesCategoryExist(ee) && !(0, aH.P)(this.info[ee].items[ie])
      }
      itemHasRedDot(ee, ie) {
        return !0 === this.info[ee].items[ie].redDot
      }
      updateItemRedDot(ee, ie, He) {
        this.info[ee].items[ie].redDot = He
      }
      shallowCopy() {
        return new QM(this.info)
      }
    }

    function eK(ee, ie) {
      return `${ee}\x1f${ie}`
    }

    function iK(ee, ie) {
      return !(0, aH.P)(ie) && !(0, aH.P)(ee) && ie in ee
    }
    const HK = (0, ye.memo)((function(ee) {
      var ie, He;
      let {
        show: be
      } = ee;
      const Ke = (0, iH.g)("players", FK),
        Ue = (0, iH.g)("players", JK),
        oe = (0, ub.d)(),
        [qe, fe] = (0, ye.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: QM.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        pe = (0, ye.useRef)(""),
        Xe = (0, ye.useRef)(null),
        Be = (0, ye.useRef)(null),
        Ee = (0, ye.useRef)(0),
        ge = (0, ye.useRef)(void 0),
        Oe = (0, ye.useRef)(null),
        de = (0, ye.useRef)(qe),
        te = qe.redDotInfo.anyCategoryHasRedDots(),
        [Ze, De] = (0, ye.useState)(null),
        Pe = (0, ye.useRef)(!1);
      let Ae = !1,
        Ye = 0,
        Ve = 0;
      if (qe.currencyAmounts) {
        for (const ee in qe.currencyAmounts) {
          var ae;
          const ie = qe.currencyAmounts[ee];
          ie.hidden || (Ye++, (null === (ae = ie.subtext) || void 0 === ae ? void 0 : ae.length) > 0 && Ve++)
        }
        Ae = Ye + Ve > 4
      }(0, ye.useEffect)((() => {
        cH.h.yR("showShopIconRedDot", te, !0)
      }), [te]), (0, ye.useEffect)((() => {
        ze.gameBridge.send("setShopOpen", be), be || (clearTimeout(ge.current), fe((ee => ee.awaitingPurchase ? {
          ...ee,
          awaitingPurchase: !1
        } : ee)))
      }), [be]), (0, ye.useEffect)((() => () => {
        ze.gameBridge.send("setShopOpen", !1), clearTimeout(ge.current)
      }), []), (0, ye.useEffect)((() => {
        de.current = qe
      }), [qe]), (0, ye.useEffect)((() => {
        if (null === Ze) return;
        return (0, Cb.c)("pointerdown", (ee => {
          const ie = ee.target;
          null !== ie && void 0 !== ie && ie.closest(".ShopItem") || De(null)
        }))
      }), [Ze]);
      const ce = ee => {
          fe((ie => ({
            ...ie,
            ...ee
          })))
        },
        xe = ee => {
          var ie;
          clearTimeout(null === (ie = qe.onBoughtInfo) || void 0 === ie ? void 0 : ie.timeout);
          const He = setTimeout((() => {
            ce({
              onBoughtInfo: null
            })
          }), 3e3);
          pe.current = ee, ce({
            onBoughtInfo: {
              text: ee,
              timeout: He,
              categoryKey: Xe.current
            }
          })
        },
        Ce = ee => {
          const {
            shopInfo: ie,
            userInputsPerItem: He,
            redDotInfo: ye,
            autoSelectCategory: Me
          } = function(ee, ie, He, ye, be, Me) {
            if ((0, aH.P)(ee) || 0 === Object.keys(ee).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: QM.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Ke = we.siteUsedData[we.siteUsed].adConfig.showRewardedAds,
              Ue = {};
            let Fe = null;
            for (const pe in ee) {
              const ie = ee[pe],
                He = {};
              let ye = !1;
              for (const ee in ie.items) {
                const be = ie.items[ee];
                (0, Pb.i)(be, Ke) && (He[ee] = be, ye = !0)
              }
              ye && (Ue[pe] = {
                ...ie,
                items: He
              }, !0 === ie.autoSelectCategory && (Fe = pe))
            }
            const Je = {},
              oe = (ee, ie, ye, Ke) => {
                var Ue, Fe;
                const oe = eK(ee, ie),
                  Re = null !== (Ue = He[oe]) && void 0 !== Ue ? Ue : He[ie];
                if (null !== (Fe = Ke.userInput) && void 0 !== Fe && Fe.type) switch (Ke.userInput.type) {
                  case "dropdown": {
                    var ke;
                    const ee = !Re || !Ke.userInput.dropdownOptions.some((ee => (0, Pb.f)(ee) === Re)),
                      ie = Ke.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === ye || void 0 === ye || null === (ke = ye.userInput) || void 0 === ke ? void 0 : ke.type) || JSON.stringify(ye.userInput.dropdownOptions) !== JSON.stringify(Ke.userInput.dropdownOptions)),
                      He = Ke.userInput,
                      be = !(0, aH.P)(He.initialValue) && He.dropdownOptions.some((ee => (0, Pb.f)(ee) === He.initialValue));
                    var qe;
                    return void(ee || ie ? be ? Je[oe] = null !== (qe = Ke.userInput.initialValue) && void 0 !== qe ? qe : null : Ke.userInput.dropdownOptions.length > 0 ? Je[oe] = (0, Pb.f)(Ke.userInput.dropdownOptions[0]) : Je[oe] = null : Je[oe] = Re)
                  }
                  case "text":
                  case "number":
                    var fe, Te, pe;
                    return void((null === ye || void 0 === ye ? void 0 : ye.userInput) !== Ke.userInput ? Je[oe] = null !== (fe = null !== (Te = Ke.userInput.initialValue) && void 0 !== Te ? Te : Re) && void 0 !== fe ? fe : "" : Je[oe] = null !== (pe = null !== Re && void 0 !== Re ? Re : Ke.userInput.initialValue) && void 0 !== pe ? pe : "");
                  case "color":
                    var Xe, ze, Be;
                    return void((null === ye || void 0 === ye ? void 0 : ye.userInput) !== Ke.userInput ? Je[oe] = null !== (Xe = null !== (ze = Ke.userInput.initialValue) && void 0 !== ze ? ze : Re) && void 0 !== Xe ? Xe : "#000000" : Je[oe] = null !== (Be = null !== Re && void 0 !== Re ? Re : Ke.userInput.initialValue) && void 0 !== Be ? Be : "#000000");
                  case "player": {
                    const ee = (0, Pb.h)(be, Me, Ke.userInput);
                    return void(Re && ee.includes(Re) ? Je[oe] = Re : Je[oe] = ee.length > 0 ? ee[0] : null)
                  }
                }
              };
            for (const pe in Ue)
              for (const ee in Ue[pe].items) {
                var Re;
                const He = Ue[pe].items[ee];
                oe(pe, ee, null === (Re = ie[pe]) || void 0 === Re ? void 0 : Re.items[ee], He)
              }
            const ke = QM.fromShopInfo(Ue);
            for (const pe in Ue) {
              var qe;
              if (ye.doesCategoryExist(pe)) {
                (null === (qe = ie[pe]) || void 0 === qe ? void 0 : qe.redDot) === Ue[pe].redDot && ke.updateCategoryRedDot(pe, ye.categoryHasRedDot(pe));
                for (const ee in Ue[pe].items) {
                  var fe, Te;
                  ye.doesItemExist(pe, ee) && (null === (fe = ie[pe]) || void 0 === fe || null === (Te = fe.items[ee]) || void 0 === Te ? void 0 : Te.redDot) === Ue[pe].items[ee].redDot && ke.updateItemRedDot(pe, ee, ye.itemHasRedDot(pe, ee))
                }
              }
            }
            return {
              shopInfo: Ue,
              userInputsPerItem: Je,
              redDotInfo: ke,
              autoSelectCategory: Fe
            }
          }(ee, qe.shopInfo, qe.userInputsPerItem, qe.redDotInfo, Ke, Ue), Fe = {
            shopInfo: ie,
            userInputsPerItem: He,
            redDotInfo: ye
          };
          if (null === Me || be)
            if (ie[qe.selectedCategoryKey]) Fe.selectedCategoryKey = qe.selectedCategoryKey;
            else {
              const ee = lb(ie);
              Fe.selectedCategoryKey = ee.length > 0 ? ee[0] : null
            }
          else Fe.selectedCategoryKey = Me;
          return 0 === Object.keys(ie).length && be && We.e.set({
            openEverythingMenuName: null
          }), Fe
        },
        ve = (ee, ie, He) => {
          const ye = qe.selectedCategoryKey,
            be = eK(ye, ee),
            Me = null !== He && void 0 !== He ? He : qe.userInputsPerItem[be],
            Ke = {
              categoryKey: ye,
              itemKey: ee,
              userInput: Me
            };
          if (Xe.current = ye, ie.isRewardedAd) {
            if (Date.now() - Ee.current < 5e3) return;
            (0, Ai.bb)((() => {
              var He, ye, Me;
              console.log("bought rewarded ad");
              const Ue = Ke.categoryKey ? null === (He = de.current.shopInfo[Ke.categoryKey]) || void 0 === He ? void 0 : He.items[ee] : null;
              if (!Ue || !Ue.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (ye = ie.userInput) || void 0 === ye ? void 0 : ye.type) === (null === Ue || void 0 === Ue || null === (Me = Ue.userInput) || void 0 === Me ? void 0 : Me.type) ? (Ke.userInput = de.current.userInputsPerItem[be], ze.gameBridge.send("buyShopItem", Ke), ie.onBoughtMessage && xe(ie.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Ee.current = Date.now()
          } else {
            ze.gameBridge.send("buyShopItem", Ke), ce({
              awaitingPurchase: !0
            }), clearTimeout(ge.current), ge.current = setTimeout((() => {
              Oe.current = null, ce({
                awaitingPurchase: !1
              })
            }), 1e3);
            const ee = (0, Pb.d)(ie, Me);
            if (Oe.current = null, !isNaN(ee) && iK(qe.currencyAmounts, ie.currency)) {
              0 !== ee && (Oe.current = {
                currency: ie.currency,
                amountBefore: qe.currencyAmounts[ie.currency].amount
              });
              const He = {
                ...qe.currencyAmounts
              };
              He[ie.currency].amount -= ee, ce({
                currencyAmounts: He
              })
            }
            ie.onBoughtMessage && xe(ie.onBoughtMessage)
          }
        },
        ue = (ee, ie) => {
          if (null === ie || !ee.shopInfo[ie]) return ee;
          let He = ee.redDotInfo;
          return He.categoryHasRedDot(ie) && (He.updateCategoryRedDot(ie, !1), He = He.shallowCopy()), {
            ...ee,
            selectedCategoryKey: ie,
            redDotInfo: He
          }
        },
        me = ee => {
          fe((ie => ue(ie, ee)))
        };
      (0, JH.f)(vb.m, (() => {
        fe((ee => {
          const ie = (0, vb.o)(lb(ee.shopInfo), ee.selectedCategoryKey, (ie => (0, vb.i)(ee.shopInfo[ie].items)));
          return ie === ee.selectedCategoryKey ? ee : ue(ee, ie)
        }))
      })), (0, JH.f)("showShopFromServer", (ee => {
        let {
          toggle: ie,
          Vi: He
        } = ee;
        He && me(He), 0 === Object.keys(qe.shopInfo).length || ie && be ? We.e.set({
          openEverythingMenuName: null
        }) : We.e.set({
          openEverythingMenuName: Yi.r.SHOP
        })
      })), (0, JH.f)("closeShopOnDamaged", (() => {
        be && We.e.set({
          openEverythingMenuName: null
        })
      })), (0, JH.f)("overShopInfo", (ee => {
        xe(ee)
      })), (0, Te.g)("currencyAmounts", (ee => {
        var ie;
        const He = Oe.current;
        He && (null === ee || void 0 === ee || null === (ie = ee[He.currency]) || void 0 === ie ? void 0 : ie.amount) === He.amountBefore ? ce({
          currencyAmounts: ee
        }) : (Oe.current = null, ce({
          currencyAmounts: ee,
          awaitingPurchase: !1
        }))
      })), (0, Te.g)("shopInfo", (ee => {
        ce({
          ...Ce(ee),
          awaitingPurchase: !1
        })
      }));
      const le = (0, ye.useRef)({
        playerIds: Ke,
        localPlayerId: Ue
      });
      (0, ye.useEffect)((() => {
        le.current.playerIds === Ke && le.current.localPlayerId === Ue || (le.current = {
          playerIds: Ke,
          localPlayerId: Ue
        }, fe((ee => {
          const ie = Ce(ee.shopInfo);
          return {
            ...ee,
            ...ie
          }
        })))
      }), [Ke, Ue]);
      const Se = qe.selectedCategoryKey,
        ne = (ee, ie) => {
          var He, ye;
          return (isNaN(ie) || (0, aH.P)(ee.currency) || iK(qe.currencyAmounts, ee.currency) && ie <= qe.currencyAmounts[ee.currency].amount) && (null === (He = ee.canBuy) || void 0 === He || He) && !(null !== (ye = ee.hidden) && void 0 !== ye && ye)
        },
        je = (ee, ie) => {
          var He, ye, be;
          const Ke = eK(Se, ee),
            Ue = qe.shopInfo[Se].items[ee],
            oe = qe.userInputsPerItem[Ke],
            ke = (0, Pb.d)(Ue, oe),
            fe = ne(Ue, ke),
            Te = Ue.enchant,
            pe = Te ? (0, Le.Cb)(null !== (He = Ue.customTitle) && void 0 !== He ? He : ee, {
              colour: Le.xb[Te.tier]
            }) : null !== (ye = Ue.customTitle) && void 0 !== ye ? ye : ee,
            Xe = ie => {
              const He = null !== ie && void 0 !== ie ? ie : oe,
                ye = void 0 !== ie ? (0, Pb.d)(Ue, ie) : ke;
              ne(Ue, ye) && null !== He && ve(ee, Ue, ie);
              let be = qe.redDotInfo;
              be.itemHasRedDot(Se, ee) && (be.updateItemRedDot(Se, ee, !1), be = be.shallowCopy()), ce({
                redDotInfo: be
              })
            };
          return (0, Re.jsxs)("div", {
            className: Me()("ShopItem", {
              ShopItemNoInput: !Ue.userInput,
              ShopItemNoInputCanBuy: !Ue.userInput && fe,
              ShopItemNoInputSelected: Ue.isSelected,
              ShopItemEnchant: !!Te
            }),
            "data-pad-focusable": !Ue.userInput || void 0,
            "data-pad-unavailable": !Ue.userInput && !fe || void 0,
            "data-pad-repeat": null !== (be = (0, vb.d)(Ue)) && void 0 !== be ? be : void 0,
            "data-pad-repeat-wait": qe.awaitingPurchase || void 0,
            onClick: () => {
              if (Te && Pe.current) {
                if (Ze !== Ke) return void De(Ke);
                De(null)
              }
              Ue.userInput || Xe()
            },
            onPointerDown: ee => {
              Te && (Pe.current = (0, Yb.v)(ee))
            },
            onPointerEnter: ee => {
              Te && !(0, Yb.v)(ee) && De(Ke)
            },
            onPointerLeave: ee => {
              Te && !(0, Yb.v)(ee) && De((ee => ee === Ke ? null : ee))
            },
            style: {
              zIndex: Object.keys(qe.shopInfo[Se].items).length - ie
            },
            children: [qe.redDotInfo.itemHasRedDot(Se, ee) && (0, Re.jsx)(Fe.e, {
              top: "-6px",
              right: "-6px"
            }), Ue.badge && (0, Re.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Re.jsx)("div", {
                className: Me()("ShopBadgeMain", Ue.badge.type),
                children: (0, Re.jsx)(ab.e, {
                  text: Ue.badge.text
                })
              })
            }), (0, Re.jsx)("div", {
              className: "ShopItemLeft",
              children: Ue.image && (0, Re.jsx)(yK, {
                item: Ue,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Re.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Re.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Re.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Re.jsx)(ab.e, {
                    text: pe
                  })
                }), (0, Re.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Re.jsx)(ab.e, {
                    text: Ue.description
                  })
                })]
              }), Ue.userInput && (0, Re.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: ee => {
                  ee.stopPropagation()
                },
                children: [(0, Re.jsx)(KK, {
                  item: Ue,
                  currInput: oe,
                  updateInput: ie => {
                    ((ee, ie, He) => {
                      const ye = eK(ee, ie),
                        be = {
                          ...qe.userInputsPerItem
                        };
                      be[ye] = He, ce({
                        userInputsPerItem: be
                      })
                    })(Se, ee, ie)
                  },
                  onSubmit: ee => {
                    Xe(ee)
                  }
                }), ("dropdown" !== Ue.userInput.type || !Ue.userInput.autoSubmit) && (0, Re.jsx)(Je.c, {
                  className: "ItemCostButton",
                  disabled: !fe && null !== oe,
                  onClick: () => {
                    Xe()
                  },
                  children: (0, Re.jsx)(MK, {
                    item: Ue,
                    cost: ke,
                    currencyAmounts: qe.currencyAmounts
                  })
                })]
              })]
            }), !Ue.userInput && (0, Re.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Re.jsx)(MK, {
                item: Ue,
                cost: ke,
                currencyAmounts: qe.currencyAmounts
              })
            }), Te && Ze === Ke && (0, Re.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Re.jsx)(ab.e, {
                text: pe
              }), (0, Re.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Re.jsx)(ab.e, {
                  text: (0, Ab.c)("", Te.enchantments, Te.enchantmentData)
                })
              })]
            })]
          }, Ke)
        },
        se = function(ee) {
          for (const ie in ee)
            if (ee[ie].smp) return !0;
          return !1
        }(qe.shopInfo),
        Ie = UM(qe.shopInfo, Se);
      return (0, Re.jsx)(Zb.d, {
        className: "Menu ShopBody",
        show: be,
        children: 0 !== Object.keys(qe.shopInfo).length && (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Re.jsx)(ke, {
              items: lb(qe.shopInfo).map((ee => {
                var ie;
                return {
                  id: ee,
                  title: null !== (ie = qe.shopInfo[ee].customTitle) && void 0 !== ie ? ie : ee,
                  redDot: qe.redDotInfo.categoryHasRedDot(ee)
                }
              })),
              link: oe ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, mb.h)({
                    page: (0, mb.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Se,
              onClick: me,
              padStartsOnTab: (0, vb.e)(Se)
            }), (0, Re.jsx)("div", {
              className: "MenuSideBarFooter",
              children: qe.currencyAmounts && Object.keys(qe.currencyAmounts).map((ee => {
                var ie;
                const He = qe.currencyAmounts[ee];
                return He.hidden ? null : (0, Re.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Ae ? "SmallText" : ""),
                  children: [(0, Re.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Re.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: He.iconColour
                      },
                      children: (0, Re.jsx)(oK, {
                        iconName: He.icon
                      })
                    }), "\xa0", (0, Db.d)(He.amount, 6)]
                  }), (null === (ie = He.subtext) || void 0 === ie ? void 0 : ie.length) > 0 && (0, Re.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Re.jsx)(ab.e, {
                      text: He.subtext
                    })
                  })]
                }, ee)
              }))
            })]
          }), (0, Re.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [se && (0, Re.jsx)(rM, {
              show: be,
              shopInfo: qe.shopInfo,
              selectedCategoryKey: Se,
              buy: (ee, ie, He) => {
                ve(ee, ie, He)
              },
              canAfford: ne,
              message: qe.onBoughtInfo
            }), null === Ie && (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsx)("div", {
                className: Me()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== qe.onBoughtInfo
                }),
                children: (0, Re.jsx)(ab.e, {
                  text: pe.current
                })
              }), (0, Re.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Re.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (ie = qe.shopInfo[Se]) || void 0 === ie ? void 0 : ie.description) && (0, Re.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Re.jsx)(ab.e, {
                      text: qe.shopInfo[Se].description
                    })
                  }), be && (0, Re.jsx)("div", {
                    className: "ShopItems",
                    ref: Be,
                    "data-pad-initial-area": !0,
                    children: lb(null === (He = qe.shopInfo[Se]) || void 0 === He ? void 0 : He.items).map(((ee, ie) => je(ee, ie)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function yK(ee) {
      let {
        item: ie,
        minWidth: He,
        minHeight: ye
      } = ee;
      const {
        image: be,
        schematicId: Me,
        imageColour: Ke
      } = ie;
      if (Me) return (0, Re.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${He}rem`,
          height: `${ye}rem`
        },
        children: (0, Re.jsx)(cb.d, {
          game: {
            schematicId: Me
          }
        })
      });
      var Fe, Je;
      if ((0, Vb.e)(be)) return (0, Re.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${He}rem`,
          height: "0",
          minHeight: `${ye}rem`
        },
        children: (0, Re.jsx)(Vb.c, {
          itemName: be,
          amount: null !== (Fe = ie.amount) && void 0 !== Fe ? Fe : 0,
          amountFontSize: ye / 4 + "rem",
          enchantmentTier: null === (Je = ie.enchant) || void 0 === Je ? void 0 : Je.tier
        })
      });
      const oe = be.slice(-4);
      return ".jpg" === oe || ".png" === oe ? (0, Re.jsx)(bK, {
        image: be,
        minWidth: He
      }) : (0, Re.jsx)(Ue.e, {
        name: be,
        className: "SelectedItemImage",
        style: {
          color: Ke
        }
      })
    }

    function bK(ee) {
      let {
        image: ie,
        minWidth: He
      } = ee;
      const {
        gameNameWithVariation: ye
      } = (0, iH.k)("connectedGame"), be = ie.endsWith(".jpg");
      return (0, Re.jsx)("img", {
        className: Me()({
          ShopPixelImage: !be
        }),
        style: {
          width: `${be?1.6*He:He}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Le.Xb)(ye)}/${ie}`,
        alt: ie,
        draggable: !1
      })
    }

    function MK(ee) {
      let {
        item: ie,
        cost: He,
        currencyAmounts: ye
      } = ee;
      const be = !isNaN(He) && 0 !== He && iK(ye, ie.currency);
      let Me = null;
      return ie.buyButtonText ? Me = ie.buyButtonText : be ? (Me = He, ie.sell && (Me = -1 * He), Me = Me.toString()) : 0 === He ? Me = "Free" : ie.isRewardedAd && (Me = "Watch ad"), (0, aH.P)(Me) || " " === Me ? null : (0, Re.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [be && (0, Re.jsx)("div", {
          style: {
            color: ye[ie.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Re.jsx)(oK, {
            iconName: ye[ie.currency].icon
          })
        }), (0, Re.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Re.jsx)(ab.e, {
            text: Me
          })
        })]
      })
    }

    function KK(ee) {
      let {
        item: ie,
        currInput: He,
        updateInput: be,
        onSubmit: Me
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), Fe = (0, ye.useRef)(null);
      if ((0, ye.useEffect)((() => {
          const ee = Fe.current;
          ee && ee.value !== He && document.activeElement !== ee && (ee.value = null !== He && void 0 !== He ? He : "")
        }), [He]), !ie.userInput) return null;
      let Je = ie.userInput;
      if (Xe.featureFlags.sanitizeShopInput && "text" === ie.userInput.type && (Je = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Je.type || "number" === Je.type) {
        var oe, ke;
        console.assert(void 0 !== He, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ie)}`);
        const ee = "text" === Je.type && Je.wordCharsOnly;
        return (0, Re.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Re.jsx)(ge.d, {
            className: "ShopItemUserInputText",
            placeholderText: Ue(Je.placeholderText),
            defaultValue: He,
            domRef: Fe,
            onValueChange: (ie, He) => {
              !0 === ee && (ie = (0, Lb.ib)(ie)), Fe.current.value = ie, be(ie)
            },
            onEnter: Me,
            type: Je.type
          }, (null !== (oe = Je.initialValue) && void 0 !== oe ? oe : "") + (null !== (ke = Je.placeholderText) && void 0 !== ke ? ke : ""))
        })
      }
      if ("dropdown" === Je.type) {
        console.assert(void 0 !== He, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ie)}`);
        const ee = Je.autoSubmit;
        return (0, Re.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Re.jsx)(Qi.e, {
            options: Je.dropdownOptions.map((ee => (0, Pb.f)(ee))),
            value: He,
            onChange: ie => {
              let {
                value: He
              } = ie;
              be(He), ee && Me(He)
            }
          })
        })
      }
      return "player" === Je.type ? (0, Re.jsx)(UK, {
        userInput: Je,
        currInput: He,
        updateInput: be
      }) : "color" === Je.type ? (0, Re.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Re.jsx)("input", {
          type: "color",
          value: He,
          onChange: ee => {
            be(ee.target.value)
          }
        })
      }) : null
    }

    function UK(ee) {
      let {
        userInput: ie,
        currInput: He,
        updateInput: ye
      } = ee;
      const be = (0, iH.k)("players"),
        Me = (0, iH.k)("hiddenPlayerNames"),
        Ke = (0, Pb.h)(be.ids, be.localId, ie);
      return (0, Re.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Re.jsx)(Qi.e, {
          options: Ke.map((ee => {
            const {
              name: ie
            } = be.byId[ee];
            return {
              value: ee,
              label: null === ie ? "" : (0, xb.h)(ie, Me)
            }
          })),
          value: He,
          onChange: ee => {
            let {
              value: ie
            } = ee;
            ye(ie)
          }
        })
      })
    }

    function FK(ee) {
      let {
        ids: ie
      } = ee;
      return ie
    }

    function JK(ee) {
      let {
        localId: ie
      } = ee;
      return ie
    }

    function oK(ee) {
      let {
        iconName: ie
      } = ee;
      return ze.gameBridge.lookup("isItemName", ie) ? (0, Re.jsx)(Vb.c, {
        itemName: ie,
        amount: 1
      }) : (0, Re.jsx)(Ue.e, {
        name: ie,
        className: "2x"
      })
    }
    var RK = He(1620);
    const kK = (0, He(1403).h)((ee => ee.PadLobbyShortcuts)),
      qK = (0, ye.lazy)((() => Promise.resolve().then((() => He(5064))).then((ee => ({
        default: ee.Lobbyleaderboard
      }))))),
      fK = (0, ye.lazy)((() => He.e(246).then((() => He(42146))).then((ee => ({
        default: ee.LobbyManageView
      })))));

    function TK(ee) {
      let {
        show: ie
      } = ee;
      return ie ? (0, Re.jsx)(pK, {}) : null
    }

    function pK() {
      const ee = (0, ub.d)();
      return (0, Re.jsxs)(Re.Fragment, {
        children: [(0, Re.jsx)(kK, {}), (0, Re.jsxs)(ye.Suspense, {
          fallback: (0, Re.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Re.jsx)(Oe.b, {})
          }),
          children: [ee && (0, Re.jsx)(fK, {
            leaderboard: (0, Re.jsx)(qK, {})
          }), !ee && (0, Re.jsx)(qK, {})]
        })]
      })
    }
    var XK = He(1553),
      zK = He(2405),
      BK = He(1768),
      EK = He(3335),
      gK = He(2854),
      OK = He(1488),
      dK = He(1441),
      WK = He(3259),
      tK = He(3269),
      ZK = He(2382);
    const wK = "storeRecentGiftRecipients",
      DK = new Map;

    function PK() {
      try {
        const ee = zH.i.getItem(wK);
        return Array.isArray(ee) ? ee.filter((ee => "string" === typeof(null === ee || void 0 === ee ? void 0 : ee.name) && ee.name.length > 0)).map((ee => ({
          name: ee.name,
          cosmetics: ee.cosmetics && "object" === typeof ee.cosmetics ? ee.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function AK(ee, ie) {
      var He;
      const [be, Me] = (0, ye.useState)(""), [Ke, Ue] = (0, ye.useState)("search"), [Fe, Je] = (0, ye.useState)(null), [oe, Re] = (0, ye.useState)(null), ke = (0, ye.useRef)(null), qe = (0, ye.useRef)(null);
      (0, ye.useEffect)((() => () => {
        ke.current && clearTimeout(ke.current)
      }), []), (0, ye.useEffect)((() => {
        ie || pe()
      }), [ie]);
      const fe = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.name) && void 0 !== He ? He : null;

      function Te() {
        ke.current && (clearTimeout(ke.current), ke.current = null)
      }

      function pe() {
        Te(), Me(""), Ue("search"), Je(null)
      }(0, ye.useEffect)((() => {
        if (null === fe || ee === De.NULL_USER_CONTEXT) return;
        const ie = fe.toLowerCase();
        if (ie === ee.getPlayerName().toLowerCase()) return void Re({
          name: fe,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const He = DK.get(ie);
        if (He) return void Re({
          name: fe,
          result: He
        });
        let ye = !1;
        return async function(ee, ie) {
          try {
            const He = await (0, De.postJsonWithMetricsCookiesAndJsonResponse)(`${Pi.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: ie
            }, {
              retries: 1
            }, ee.getMetricsCookies());
            if ("boolean" !== typeof(null === He || void 0 === He ? void 0 : He.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(He)}`);
            return He
          } catch (He) {
            return console.error("Failed to look up gift recipient:", He), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(ee, fe).catch((ee => (console.error("Gift recipient lookup failed:", ee), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((ee => {
          !0 !== ee.giftRecipientFound && "store:giftRecipientLookupFailed" === ee.giftRecipientError || DK.set(ie, ee), ye || Re({
            name: fe,
            result: ee
          })
        })), () => {
          ye = !0
        }
      }), [fe, ee]);
      const Xe = (0, ye.useMemo)((() => {
        const ee = be.trim();
        if (!ee) return {
          status: "none"
        };
        if (!Fe || Fe.name !== ee || (null === oe || void 0 === oe ? void 0 : oe.name) !== Fe.name) return {
          status: "pending",
          name: ee
        };
        const ie = oe.result;
        return !1 === ie.giftRecipientFound ? {
          status: "error",
          name: Fe.name,
          error: ie.giftRecipientError
        } : {
          status: "found",
          name: ie.giftRecipientName,
          ownedPacks: ie.giftRecipientOwnedPacks,
          hasSuperRank: ie.giftRecipientHasSuperRank,
          isSubscriber: ie.giftRecipientIsSubscriber
        }
      }), [be, Fe, oe]);
      (0, ye.useEffect)((() => {
        "found" === Xe.status && "typed" === (null === Fe || void 0 === Fe ? void 0 : Fe.source) && qe.current !== Xe.name && (qe.current = Xe.name, (0, Xi.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Xe, Fe]);
      const ze = (null === oe || void 0 === oe ? void 0 : oe.name) === (null === Fe || void 0 === Fe ? void 0 : Fe.name) ? null === oe || void 0 === oe ? void 0 : oe.result : null,
        Be = !0 === (null === ze || void 0 === ze ? void 0 : ze.giftRecipientFound) ? ze.giftRecipientCosmetics : null;
      return {
        query: be,
        via: Ke,
        recipient: Xe,
        recipientCosmetics: Be,
        type: function(ee) {
          Me(ee), Ue("search"), Te();
          const ie = ee.trim();
          ie ? ke.current = setTimeout((() => {
            Je({
              name: ie,
              source: "typed"
            })
          }), 400) : Je(null)
        },
        choose: function(ee, ie) {
          Te(), Me(ee), Ue("typed" === ie ? "search" : "prefilled" === ie ? "prefilled" : "suggestion"), Je({
            name: ee,
            source: ie
          }), "typed" !== ie && "prefilled" !== ie && (0, Xi.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: ie
          })
        },
        clear: pe,
        recordGift: function(ee, ie) {
          ! function(ee) {
            DK.delete(ee.toLowerCase())
          }(ee), Re((He => {
            if (!He || He.name.toLowerCase() !== ee.toLowerCase() || !0 !== He.result.giftRecipientFound || "superRank" === ie) return He;
            const ye = He.result.giftRecipientOwnedPacks;
            return {
              ...He,
              result: {
                ...He.result,
                giftRecipientOwnedPacks: ye.includes(ie) ? ye : [...ye, ie]
              }
            }
          }))
        }
      }
    }
    var YK = He(2379),
      VK = He(5071),
      aK = He(242),
      cK = He(3136);
    const xK = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var LK = He(2337),
      CK = He(602),
      vK = He(2425),
      uK = He(2749);

    function mK(ee) {
      let {
        cosmetics: ie
      } = ee;
      return (0, Re.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Re.jsx)(vK.c, {
          cosmetics: ie
        })
      })
    }

    function lK(ee, ie) {
      var He, ye;
      const be = null !== (He = ee.friend) && void 0 !== He ? He : {
        isError: !1,
        name: ee.name,
        ranks: [],
        cosmetics: null !== (ye = ee.cosmetics) && void 0 !== ye ? ye : {},
        nameColour: CK.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return ie ? {
        ...be,
        cosmetics: ie
      } : be
    }

    function SK(ee) {
      let {
        pending: ie
      } = ee;
      return (0, Re.jsx)("span", {
        className: "StoreRecipientLoader",
        children: ie && (0, Re.jsx)(Oe.b, {})
      })
    }

    function nK(ee) {
      var ie;
      let {
        selfName: He,
        giftRecipient: be,
        suggestionsVersion: Fe,
        pulseSignal: oe,
        disabled: ke
      } = ee;
      const {
        t: qe
      } = (0, Ke.v)(), fe = (0, Ie.k)(), Te = (0, ye.useRef)(null), pe = (0, ye.useRef)(null), {
        query: ze,
        via: Be,
        recipient: Ee,
        recipientCosmetics: Oe
      } = be, de = (0, ZK.i)(ze), We = (0, ye.useMemo)((() => {
        const ee = Xe.featureFlags.useSocialFeatures ? fe.friends.filter((ee => !ee.isError)) : [];
        return (0, ZK.f)({
          onlineFriends: (0, Ie.c)(ee),
          recentRecipients: PK(),
          friends: ee,
          selfName: He,
          max: 8
        })
      }), [fe.friends, He, Fe]), te = ze.trim().toLowerCase(), Ze = "search" !== Be && te ? We.find((ee => ee.name.toLowerCase() === te)) : void 0, we = Ze && "prefilled" === Be ? [Ze, ...We.filter((ee => ee !== Ze))] : We, De = "" !== te && !Ze, Pe = De ? ze : "", Ae = we.length > 0;
      (0, ye.useEffect)((() => {
        Te.current && Te.current.value !== Pe && (Te.current.value = Pe)
      }), [Pe]), (0, ye.useEffect)((() => {
        Te.current && (Te.current.disabled = ke)
      }), [ke, oe]);
      const Ye = (0, ye.useRef)(0);

      function ae() {
        "self" !== de && (0, Xi.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), be.clear()
      }

      function ce(ee) {
        var ie, He;
        if (ke) return;
        if (" " === ee.key || "Enter" === ee.key) return ee.preventDefault(), void ee.currentTarget.click();
        const ye = Array.from(null !== (ie = null === (He = pe.current) || void 0 === He ? void 0 : He.querySelectorAll("[role=radio]")) && void 0 !== ie ? ie : []),
          be = ye.indexOf(ee.currentTarget);
        let Me;
        "ArrowRight" === ee.key || "ArrowDown" === ee.key ? Me = ye[(be + 1) % ye.length] : "ArrowLeft" === ee.key || "ArrowUp" === ee.key ? Me = ye[(be - 1 + ye.length) % ye.length] : "Home" === ee.key ? Me = ye[0] : "End" === ee.key && (Me = ye[ye.length - 1]), Me && (ee.preventDefault(), Me.focus(), Me.click())
      }(0, ye.useEffect)((() => {
        var ee;
        oe > Ye.current && !ke && (Ye.current = oe, null === (ee = Te.current) || void 0 === ee || ee.focus())
      }), [oe, ke]);
      const xe = "self" === de,
        Le = null !== (ie = null === Ze || void 0 === Ze ? void 0 : Ze.name) && void 0 !== ie ? ie : null,
        Ce = "error" === Ee.status ? Ee.error : null,
        ve = "store:giftRecipientLookupFailed" === Ce;
      return (0, Re.jsxs)("div", {
        className: Me()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: ke,
          StoreRecipientStripNoChips: !Ae
        }),
        children: [(0, Re.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: qe("store:buyingFor")
        }), (0, Re.jsxs)("div", {
          ref: pe,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": qe("store:whoIsItFor"),
          children: [(0, Re.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": xe,
            tabIndex: ke || !xe && null !== Le ? -1 : 0,
            className: Me()("StoreRecipientMe", {
              StoreRecipientChecked: xe
            }),
            onClick: () => {
              ke || ae()
            },
            onKeyDown: ce,
            children: [(0, Re.jsx)(Ue.e, {
              name: "user"
            }), " ", qe("store:me")]
          }), Ae && (0, Re.jsx)("div", {
            className: "StoreRecipientChips",
            children: we.map((ee => {
              const ie = ee === Ze;
              return (0, Re.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": ie,
                tabIndex: !ke && ie ? 0 : -1,
                title: ee.name,
                className: Me()("StoreRecipientChip", {
                  StoreRecipientChecked: ie
                }),
                onClick: () => {
                  ke || function(ee) {
                    "gift" !== de && (0, Xi.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), be.choose(ee.name, ee.kind)
                  }(ee)
                },
                onKeyDown: ce,
                children: (0, Re.jsx)(uK.h, {
                  playerSocialPreview: lK(ee, ie ? Oe : null),
                  opensProfileCard: !1,
                  isFriend: null !== ee.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== ee.friend,
                  status: null === ee.friend ? null : void 0,
                  trailing: ie ? (0, Re.jsx)(SK, {
                    pending: "pending" === Ee.status
                  }) : void 0
                })
              }, ee.name)
            }))
          })]
        }), (0, Re.jsxs)("div", {
          className: Me()("StoreRecipientSearch", {
            StoreRecipientChecked: De,
            StoreRecipientSearchPulse: oe > 0 && !De,
            StoreRecipientSearchError: null !== Ce && !ve
          }),
          onClick: () => {
            var ee;
            null === (ee = Te.current) || void 0 === ee || ee.focus()
          },
          children: [De && "found" === Ee.status && Oe && (0, Re.jsx)(mK, {
            cosmetics: Oe
          }), !(De && "found" === Ee.status && Oe) && (0, Re.jsx)(Ue.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Re.jsx)(ge.d, {
            className: "StoreRecipientSearchInput",
            domRef: Te,
            placeholderText: qe("store:searchName"),
            defaultValue: Pe,
            maxLength: Ve.g,
            onValueChange: function(ee) {
              "gift" !== de && ee.trim() && (0, Xi.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), be.type(ee)
            },
            onEnter: () => {
              var ee;
              const ie = null === (ee = Te.current) || void 0 === ee ? void 0 : ee.value.trim();
              ie && be.choose(ie, "typed")
            },
            blurOnEnter: !0
          }), De && (0, Re.jsx)(SK, {
            pending: "pending" === Ee.status
          }), De && (0, Re.jsx)("div", {
            ...(0, Je.R)({
              disabled: ke
            }),
            "aria-label": qe("store:clearRecipient"),
            title: qe("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: ee => {
              ee.stopPropagation(), ke || ae()
            },
            children: (0, Re.jsx)(Ue.e, {
              name: "xmark"
            })
          })]
        }, oe), Ce && (0, Re.jsx)("div", {
          className: Me()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: ve
          }),
          role: "status",
          children: qe(Ce)
        })]
      })
    }
    var jK = He(2270),
      sK = He(2479),
      IK = He(2769),
      hK = He(3929),
      NK = He(2342),
      GK = He(3397),
      rK = He(3401),
      QK = He(3363);
    const eU = [CK.s.yellow, CK.s.green, CK.s.aqua, CK.s.blue, CK.s.purple, CK.s.red];

    function iU(ee) {
      return "needsRecipient" === ee || "lookingUp" === ee || "gift" === ee || "recipientOwns" === ee || "recipientSharesOwned" === ee || "recipientSubscribed" === ee
    }

    function HU(ee) {
      const {
        onKeyDown: ie,
        ...He
      } = (0, Je.R)();
      return {
        ...He,
        "aria-label": ee,
        onKeyDown: ee => {
          ee.target === ee.currentTarget && (null === ie || void 0 === ie || ie(ee))
        }
      }
    }

    function yU(ee) {
      let {
        text: ie
      } = ee;
      return (0, Re.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(ie).map(((ee, ie) => (0, Re.jsx)("span", {
          style: {
            color: eU[ie % eU.length]
          },
          children: ee
        }, ie)))
      })
    }
    const bU = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function MU(ee) {
      let {
        state: ie,
        item: He,
        price: ye,
        busy: be,
        highlight: Fe = !1,
        secondary: oe = !1,
        onAct: ke,
        onNeedRecipient: qe,
        onLogin: fe
      } = ee;
      const {
        t: Te
      } = (0, Ke.v)(), pe = "superRank" === He ? (0, ue.r)(Date.now()).product.days : null, Xe = "superRank" === He && "hyper" === (0, ue.n)(Date.now()).look ? Je.q : Je.m, ze = oe ? Je.e : Xe, Be = ee => null === pe ? Te(ee ? "general:gift" : "general:buy") : Te(ee ? "store:giftDays" : "store:buyDays", {
        days: pe
      }), Ee = (ee, ie) => {
        const He = (0, Re.jsxs)(Re.Fragment, {
          children: [null === ee && (0, Re.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== ee && (0, Re.jsx)("span", {
            className: "StoreCtaLabel",
            title: ee,
            children: ee
          })]
        });
        return null !== pe ? (0, Re.jsxs)(Re.Fragment, {
          children: [ie && (0, Re.jsx)("span", {
            className: "StoreCtaIcon",
            children: ie
          }), He, (0, Re.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Re.jsx)(sK.d, {
              amount: ye
            })]
          })]
        }) : (0, Re.jsxs)(Re.Fragment, {
          children: [(0, Re.jsxs)("span", {
            className: "StoreCtaLead",
            children: [He, "\xb7"]
          }), (0, Re.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [ie, (0, Re.jsx)(sK.d, {
              amount: ye
            })]
          })]
        })
      };
      let ge;
      switch (ie) {
        case "pending":
          ge = (0, Re.jsx)(Xe, {
            className: "StoreCtaButton",
            disabled: !0,
            children: Ee(null)
          });
          break;
        case "login":
          ge = (0, Re.jsx)(ze, {
            className: "StoreCtaButton",
            onClick: fe,
            children: Ee(Be(!1))
          });
          break;
        case "owned":
          ge = (0, Re.jsx)(Je.e, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, jK.e)("store")
            },
            children: (0, Re.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Re.jsx)(Ue.e, {
                name: "shirt"
              }), " ", Te("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          ge = (0, Re.jsx)(Xe, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Re.jsx)("span", {
              className: "StoreCtaLabel",
              children: Te(bU[ie])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          ge = (0, Re.jsx)(Xe, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === ie || null === ye,
            loading: "lookingUp" === ie || be,
            onClick: ke,
            analyticsClick: {
              id: "store.gift",
              value: He
            },
            children: Ee(Be(!0), ZK.c)
          });
          break;
        case "buy":
        case "recharge":
          ge = (0, Re.jsx)(ze, {
            className: "StoreCtaButton",
            loading: be,
            disabled: null === ye,
            onClick: ke,
            analyticsClick: {
              id: "store.buy",
              value: He
            },
            children: Ee(Be(!1))
          })
      }
      return (0, Re.jsx)("div", {
        className: Me()("StoreCta", {
          StoreCtaHighlight: Fe,
          StoreCtaLabelFirst: null !== pe
        }),
        onClick: ee => {
          ee.stopPropagation(), "needsRecipient" === ie && qe()
        },
        children: ge
      })
    }
    const KU = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function UU(ee) {
      var ie;
      let {
        pack: He,
        state: be,
        busy: Fe,
        onOpen: Je,
        onAct: oe,
        onNeedRecipient: ke,
        onLogin: qe
      } = ee;
      const {
        t: fe
      } = (0, Ke.v)(), Te = XK.b[He], pe = WK.l[He], Xe = (0, LK.n)(He), ze = (0, ye.useRef)(null);
      (0, GK.m)(He, ze);
      const Be = iU(be),
        Ee = null !== (ie = Te.displayName) && void 0 !== ie ? ie : He,
        ge = (0, hK.c)((() => {
          (0, IK.d)();
          const ee = (0, GK.f)(He);
          void 0 !== ee && (0, NK.j)((0, GK.d)(ee))
        })),
        [Oe] = (0, ye.useState)(cK.g);
      return (0, Re.jsxs)("div", {
        className: Me()("StoreTile StorePackTile", KU[Te.tier], {
          StorePackTileOwned: "owned" === be,
          StorePackTileRecipientOwns: "recipientOwns" === be,
          StoreTileGift: Be
        }),
        ...HU(Ee),
        ref: ze,
        "data-store-item": He,
        onClick: Je,
        onPointerMove: ee => {
          "mouse" !== ee.pointerType || 0 === ee.movementX && 0 === ee.movementY || Oe || ge.start()
        },
        onPointerLeave: ge.cancel,
        children: [pe && (0, Re.jsx)(pe, {
          simple: !0
        }), (0, Re.jsx)("div", {
          className: "StorePackCharacters",
          children: Xe.map((ee => (0, Re.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,LK.g)(ee)})`
            }
          }, ee)))
        }), (0, Re.jsx)("div", {
          className: "StoreTileScrim"
        }), Be && (0, Re.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Re.jsx)(QK.d, {
          pack: He,
          className: Me()({
            PackAnimatedBadgeBesideRibbon: Be
          })
        }), (0, Re.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Re.jsx)("div", {
            className: "StoreTileTitle",
            children: Ee
          }), (0, Re.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Re.jsx)(rK.b, {
              tier: Te.tier
            }), " \xb7 ", fe("store:itemCount", {
              count: (0, Tb.l)(He)
            }), "owned" === be && (0, Re.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Re.jsx)(Ue.e, {
                name: "check"
              }), " ", fe("general:owned")]
            })]
          }), (0, Re.jsx)(MU, {
            state: be,
            item: He,
            price: (0, zK.d)(He),
            busy: Fe,
            onAct: oe,
            onNeedRecipient: ke,
            onLogin: qe
          })]
        })]
      })
    }
    var FU = He(3979),
      JU = He(3424),
      oU = He(4636),
      RU = He(4010);
    const kU = {
      cape: ve.c.cape
    };

    function qU(ee) {
      var ie, He;
      let {
        wearer: be,
        active: Ue,
        tryOn: Fe = kU,
        className: Je
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = (0, ye.useRef)(null), [qe] = (0, ye.useState)(cK.g), fe = function(ee) {
        const [ie, He] = (0, ye.useState)(!1);
        return (0, ye.useEffect)((() => {
          const ie = new IntersectionObserver((ee => {
            He(ee[ee.length - 1].isIntersecting)
          }));
          return ie.observe(ee.current), () => {
            ie.disconnect()
          }
        }), [ee]), ie
      }(ke), Te = (0, RU.c)("storeRank"), pe = null !== (ie = be.name) && void 0 !== ie ? ie : oe(be.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), Xe = null !== (He = be.cosmetics) && void 0 !== He ? He : {}, ze = `${pe}|${JSON.stringify(Xe)}`, Be = Ue && fe && !qe && !Te, [Ee, ge] = (0, ye.useState)(null);
      Be || null === Ee || ge(null);
      const Oe = Be && Ee === ze;
      return (0, Re.jsxs)("div", {
        ref: ke,
        className: Me()("HyperRankStage", Je, {
          HyperRankStageDrawn: Oe
        }),
        children: [(0, Re.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, Re.jsx)(ue.e, {
          className: "HyperRankStageStandIn"
        }), Be && (0, Re.jsx)(fU, {
          name: pe,
          cosmetics: Xe,
          tryOn: Fe,
          onDrawn: () => {
            ge(ze)
          }
        }, ze), (0, Re.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function fU(ee) {
      let {
        name: ie,
        cosmetics: He,
        tryOn: be,
        onDrawn: Me
      } = ee;
      const Ke = (0, ye.useRef)(null),
        Ue = (0, ye.useMemo)((() => {
          var ee;
          return {
            name: ie,
            ranks: [ve.c.rank],
            nameColour: null !== (ee = He.nameColour) && void 0 !== ee ? ee : CK.d
          }
        }), [ie, He.nameColour]);
      return (0, Re.jsx)("div", {
        className: "HyperRankStageLive",
        children: (0, Re.jsx)(ye.Suspense, {
          fallback: null,
          children: (0, Re.jsx)(IK.c, {
            ref: Ke,
            owner: "storeRank",
            framing: "store",
            forcedCosmetics: be,
            nametag: Ue,
            onReady: () => {
              var ee;
              null === (ee = Ke.current) || void 0 === ee || ee.setAllCosmetics(He)
            },
            onDrawn: Me
          })
        })
      })
    }
    var TU = He(4645);

    function pU(ee) {
      var ie;
      return null !== (ie = (0, fb.h)(ee)) && void 0 !== ie ? ie : fb.j[fb.j.length - 1]
    }

    function XU(ee, ie) {
      return ee.tiers.flatMap((ee => {
        var He;
        return null !== (He = ee[ie]) && void 0 !== He ? He : []
      }))
    }

    function zU(ee) {
      return XU(ee, "hyper").filter((ee => "cosmetic" === ee.kind))
    }

    function BU(ee, ie) {
      const He = XU(ee, ie).find((ee => "xpBoost" === ee.kind));
      return "xpBoost" === (null === He || void 0 === He ? void 0 : He.kind) ? He : null
    }

    function EU(ee) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, Re.jsx)(yU, {
          text: ee("store:colourfulNames")
        }),
        detail: ee("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: ee("store:perkCapes"),
        detail: ee("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: ee("store:perkNametag", {
          rank: ee((0, ue.k)(ve.c.id).nameKey)
        }),
        detail: ee("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: ee("store:perkNoAdverts"),
        detail: ee("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: ee("store:perkFriends", {
          count: (0, fi.c)([ve.c.rank])
        }),
        detail: ee("store:perkFriendsDetail", {
          count: (0, fi.c)([])
        })
      }]
    }

    function gU() {
      const {
        t: ee
      } = (0, Ke.v)(), ie = [{
        id: "battlePass",
        icon: "crown",
        title: ee("store:perkBattlePassTrack")
      }, ...EU(ee)];
      return (0, Re.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: ie.map((ee => (0, Re.jsxs)("li", {
          children: [(0, Re.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, Re.jsx)(Ue.e, {
              name: ee.icon
            })
          }), ee.title]
        }, ee.id)))
      })
    }

    function OU() {
      const {
        t: ee
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, Re.jsx)(dU, {}), EU(ee).map((ee => (0, Re.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, Re.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, Re.jsx)(Ue.e, {
              name: ee.icon
            })
          }), (0, Re.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, Re.jsx)("b", {
              children: ee.title
            }), (0, Re.jsx)("small", {
              children: ee.detail
            })]
          })]
        }, ee.id)))]
      })
    }

    function dU() {
      const {
        t: ee,
        selectedLanguage: ie
      } = (0, Ke.v)(), He = pU(Date.now()), ye = zU(He), be = function(ee) {
        return zU(ee).filter((ee => null !== (0, oU.t)(ee) || null !== (0, oU.x)(ee))).reverse()
      }(He).slice(0, 4), Me = BU(He, "hyper"), Fe = BU(He, "free"), Je = (0, Ke.f)(ie.code, "store:battlePassTiersEnds", He.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, Re.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, Re.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, Re.jsx)(Ue.e, {
            name: "crown"
          })
        }), (0, Re.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, Re.jsx)("b", {
            children: ee("store:battlePassSeason", {
              season: He.seasonNumber
            })
          }), (0, Re.jsx)("small", {
            children: ee("store:battlePassTiersEnds", {
              tiers: He.tierCount,
              date: Je
            })
          })]
        }), (0, Re.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, Re.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === ye.length ? ee("store:battlePassOneCosmetic") : ee("store:battlePassCosmetics", {
              count: ye.length
            })
          }), (0, Re.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [be.map((ie => (0, Re.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, oU.j)(ie, ee),
              children: (0, Re.jsx)(TU.d, {
                reward: ie
              })
            }, ie.id))), ye.length > be.length && (0, Re.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: ee("store:battlePassMore", {
                count: ye.length - be.length
              })
            })]
          })]
        }), (0, Re.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [Me && Fe && (0, Re.jsxs)("li", {
            children: [(0, Re.jsx)(Ue.e, {
              name: "angles-up"
            }), ee("store:battlePassXp", {
              multiplier: Me.multiplier,
              minutes: Me.minutes,
              freeMinutes: Fe.minutes
            })]
          }), (0, Re.jsxs)("li", {
            children: [(0, Re.jsx)(Ue.e, {
              name: "lock-open"
            }), ee("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }

    function WU(ee, ie) {
      return Object.keys(ee.cosmetics).some((ee => ee in ie.cosmetics))
    }

    function tU(ee) {
      let {
        wearer: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), be = (0, ye.useMemo)((() => function(ee) {
        const ie = pU(Date.now()).tiers.flatMap((ie => {
          const He = ie.hyper;
          if ("cosmetic" !== (null === He || void 0 === He ? void 0 : He.kind) || "profileEffect" === He.cosmeticKind || "pet" === He.cosmeticKind || null === (0, oU.t)(He)) return [];
          const ye = (0, oU.p)(He);
          return null !== ye && Object.keys(ye.cosmetics).length > 0 ? [{
            id: He.id,
            label: (0, oU.j)(He, ee),
            cosmetics: ye.cosmetics
          }] : []
        }));
        return [{
          id: "cape",
          label: ee("store:tryOnCape"),
          cosmetics: {
            cape: ve.c.cape
          }
        }, ...ie.reverse().slice(0, 3)]
      }(He)), [He]), [Ue, Fe] = (0, ye.useState)((() => {
        const [ee, ...ie] = be, He = ie.find((ie => !WU(ie, ee)));
        return new Set([ee.id, ...He ? [He.id] : []])
      })), Je = (0, ye.useMemo)((() => {
        const ee = {};
        for (const ie of be) Ue.has(ie.id) && Object.assign(ee, ie.cosmetics);
        return ee
      }), [be, Ue]);
      return (0, Re.jsxs)("div", {
        className: "HyperRankShowcase",
        children: [(0, Re.jsx)(qU, {
          className: "HyperRankShowcaseStage",
          wearer: ie,
          active: !0,
          tryOn: Je
        }), (0, Re.jsx)("div", {
          className: "HyperRankTryOn",
          children: be.map((ee => {
            const ie = Ue.has(ee.id);
            return (0, Re.jsx)("button", {
              type: "button",
              className: Me()("HyperRankTryOnChip", {
                HyperRankTryOnChipOn: ie
              }),
              title: ee.label,
              "aria-pressed": ie,
              "data-pad-key": `tryOn:${ee.id}`,
              ...(0, Xi.getAnalyticsClickAttributes)({
                id: "store.try_on",
                value: `${ie?"off":"on"}:${ee.id}`
              }),
              onClick: () => {
                Fe((ie => {
                  if (ie.has(ee.id)) {
                    const He = new Set(ie);
                    return He.delete(ee.id), He
                  }
                  return new Set([ee.id, ...be.filter((He => ie.has(He.id) && !WU(He, ee))).map((ee => ee.id))])
                }))
              },
              children: ee.label
            }, ee.id)
          }))
        })]
      })
    }
    const ZU = He.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function wU() {
      (0, NK.j)(ZU, {
        lowPriority: !1
      })
    }

    function DU() {
      const {
        t: ee
      } = (0, Ke.v)(), [ie, He] = (0, ye.useState)("starting"), be = (0, ye.useRef)(null), Me = (0, kH.c)(), Fe = (0, ye.useRef)(null), oe = (0, ye.useCallback)((() => {
        const ee = be.current;
        null !== ee.error && ee.load();
        const ie = ee.play();
        Fe.current = ie, ie.catch((ee => {
          (0, FU.d)("Failed to play Super Rank video", ee), Me.current && Fe.current === ie && He("failed")
        }))
      }), [Me]);
      return (0, ye.useEffect)((() => {
        const ee = be.current;
        let ie;

        function He() {
          clearTimeout(ie), ie = setTimeout(oe, 3e3)
        }
        return oe(), ee.addEventListener("ended", He), () => {
          clearTimeout(ie), ee.removeEventListener("ended", He)
        }
      }), [oe]), (0, Re.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, Re.jsx)("video", {
          ref: be,
          src: `${Pi.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: ZU,
          muted: !0,
          playsInline: !0,
          controls: "playing" === ie,
          onPlaying: () => {
            He("playing")
          },
          onError: () => {
            He("failed")
          }
        }), ("failed" === ie || "loading" === ie) && (0, Re.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, Re.jsx)(Je.c, {
            ariaLabel: ee("general:play"),
            loading: "loading" === ie,
            onClick: () => {
              He("loading"), oe()
            },
            touchPressOn: "pointerup",
            children: (0, Re.jsx)(Ue.e, {
              name: "play"
            })
          })
        })]
      })
    }

    function PU(ee) {
      let {
        tierId: ie,
        wearer: He,
        onBack: ye,
        cta: be,
        recipient: Ue,
        afterCta: Fe
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = "hyper" === (0, ue.k)(ie).look;
      return (0, Re.jsxs)("div", {
        className: Me()("StoreSuperRankDetail", {
          StoreHyperRankDetail: ke
        }),
        children: [(0, Re.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Re.jsx)(Je.b, {
            className: "StoreDetailBackButton",
            onClick: ye,
            padBack: !0,
            children: oe("general:back")
          }), (0, Re.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, Re.jsx)(ue.h, {
              tierId: ie
            })
          }), Ue]
        }), (0, Re.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [ke && (0, Re.jsx)(tU, {
            wearer: He
          }), !ke && (0, Re.jsx)(DU, {}), (0, Re.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [ke && (0, Re.jsx)(OU, {}), !ke && (0, Re.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Re.jsx)(JU.e, {
                tierId: ie
              })
            }), (0, Re.jsxs)("div", {
              className: "StoreTileActions",
              children: [be, Fe]
            })]
          })]
        })]
      })
    }
    var AU = He(3355);

    function YU(ee) {
      let {
        price: ie,
        perks: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [He, (0, Re.jsx)("div", {
          className: "SmallTextLight",
          children: ye("payments:subscriptionRenewsMonthly", {
            price: ie
          })
        }), (0, Re.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, Re.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: ye("homePage:termsOfService")
          }), (0, Re.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: ye("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var VU = He(3375),
      aU = He(3382),
      cU = He(3307);

    function xU(ee) {
      const {
        userContext: ie
      } = (0, fe.b)(), {
        purchaseUnderWay: He,
        notice: be,
        subscribe: Me
      } = (0, cU.c)(), [Ke, Ue] = (0, ye.useState)(null), [Fe, Je] = (0, ye.useState)(0), oe = (0, kH.c)(), Re = ie !== De.NULL_USER_CONTEXT, ke = Re && (ie.mayBuy() || (0, Se.guestsMayBuy)()), qe = null !== Ke && Ke.loadedFor === ie ? Ke.offer : null, Te = null === be || void 0 === be ? void 0 : be.pendingIntentId, pe = (0, ye.useRef)(Te);

      function Xe() {
        Je((ee => ee + 1))
      }
      return (0, ye.useEffect)((() => {
        void 0 !== pe.current && void 0 === Te && Xe(), pe.current = Te
      }), [Te]), (0, ye.useEffect)((() => {
        if (!Re) return;
        let He = !1;
        return async function(ee, ie) {
          const {
            offering: He
          } = await (0, Qe.getBillingClient)().getOfferings(ee), ye = null === He || void 0 === He ? void 0 : He.packages.find(re.isPricedPackage);
          if (void 0 === ye) return {
            kind: "unavailable"
          };
          if (!ie) return {
            kind: "loaded",
            pkg: ye,
            preview: {
              kind: "none"
            }
          };
          try {
            return {
              kind: "loaded",
              pkg: ye,
              preview: await (0, aU.e)(ye.productId)
            }
          } catch (be) {
            if ((0, aU.g)(be)) return {
              kind: "unavailable"
            };
            throw be
          }
        }(ee, ke).catch((ie => (console.error(`Billing: loading the ${ee} subscription or its preview failed:`, ie), {
          kind: "loadFailed"
        }))).then((ee => {
          He || Ue((He => "loadFailed" === ee.kind && (null === He || void 0 === He ? void 0 : He.loadedFor) === ie ? He : {
            loadedFor: ie,
            offer: ee
          }))
        })), () => {
          He = !0
        }
      }), [ee, ie, Re, ke, Fe]), {
        offer: qe,
        purchaseUnderWay: He,
        notice: be,
        pendingIntentId: Te,
        mountedRef: oe,
        checkOut: async function(ee) {
          const He = await Me(ee);
          oe.current && ("unknownPackage" === He.kind && Ue({
            loadedFor: ie,
            offer: {
              kind: "unavailable"
            }
          }), Xe())
        }
      }
    }

    function LU(ee) {
      let {
        onOfferedChange: ie
      } = ee;
      return (0, Se.usePurchasesAllowed)() && (0, Se.subscriptionsSold)() ? (0, Re.jsx)(CU, {
        onOfferedChange: ie
      }) : null
    }

    function CU(ee) {
      let {
        onOfferedChange: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), {
        offer: be,
        purchaseUnderWay: Me,
        notice: Ue,
        pendingIntentId: Fe,
        mountedRef: oe,
        checkOut: ke
      } = xU((0, ue.k)(ve.c.id).placementId), [qe, fe] = (0, ye.useState)(!1), Te = null === be || "loaded" === be.kind && "refused" !== be.preview.kind;
      if ((0, ye.useEffect)((() => {
          ie(Te)
        }), [Te]), null === be || "unavailable" === be.kind) return null;
      if ("loadFailed" === be.kind) return (0, Re.jsx)(AU.i, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: pe,
        preview: ze
      } = be;
      if ("refused" === ze.kind) return (0, Re.jsx)(AU.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(ze.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const Be = (0, Mi.h)(pe);
      return (0, Re.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: ee => {
          ee.stopPropagation()
        },
        children: [(0, Re.jsx)(AU.i, {
          notice: Ue,
          className: "SmallTextBold"
        }), (0, Re.jsx)(AU.d, {
          className: "SmallTextBold"
        }), (0, Re.jsx)("div", {
          className: "StoreCta",
          children: (0, Re.jsx)(Je.q, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(ee, ie) {
                if ("refund" === ie.kind) {
                  fe(!0);
                  const ee = await (0, VU.e)(ie, null);
                  if (!oe.current) return;
                  if (fe(!1), !ee) return
                }
                await ke(ee)
              }(pe, ze)
            },
            disabled: void 0 !== Fe,
            loading: Me || qe,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, Re.jsx)("span", {
              className: "StoreCtaLabel",
              children: He("payments:subscribeContinue", {
                price: Be
              })
            })
          })
        }), (0, Xe.isMobileApp)() && (0, Re.jsx)(YU, {
          price: Be,
          perks: (0, Re.jsx)(gU, {})
        })]
      })
    }

    function vU() {
      const {
        t: ee
      } = (0, Ke.v)();
      return (0, Re.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Re.jsxs)("li", {
          children: [(0, Re.jsx)(Ue.e, {
            name: "check"
          }), (0, Re.jsx)(yU, {
            text: ee("store:colourfulNames")
          })]
        }), (0, Re.jsxs)("li", {
          children: [(0, Re.jsx)(Ue.e, {
            name: "check"
          }), ee("store:perkCapes")]
        }), (0, Re.jsxs)("li", {
          children: [(0, Re.jsx)(Ue.e, {
            name: "check"
          }), ee("store:perkNoAdverts")]
        }), (0, Re.jsxs)("li", {
          children: [(0, Re.jsx)(Ue.e, {
            name: "check"
          }), ee("store:perkFriends", {
            count: (0, fi.c)(["super"])
          })]
        })]
      })
    }

    function uU(ee, ie) {
      return 1 === ie ? ee("store:oneDayLeft") : ee("store:daysLeft", {
        days: ie
      })
    }

    function mU(ee) {
      let {
        daysLeft: ie,
        totalDays: He,
        urgent: ye
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), Ue = He > 0 ? Math.min(1, Math.max(.03, ie / He)) : 1;
      return (0, Re.jsxs)("div", {
        className: Me()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: ye
        }),
        children: [(0, Re.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: uU(be, ie)
        }), (0, Re.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Re.jsx)("i", {
            style: {
              width: 100 * Ue + "%"
            }
          })
        })]
      })
    }

    function lU(ee) {
      var ie;
      let {
        state: He,
        urgent: be,
        daysLeft: Ue,
        totalDays: Fe,
        recipientHasSuperRank: Je,
        busy: oe,
        highlight: ke,
        onOpen: qe,
        onAct: Te,
        onNeedRecipient: pe,
        onLogin: ze,
        wearer: Be,
        live: Ee,
        onWake: ge
      } = ee;
      const {
        t: Oe
      } = (0, Ke.v)(), {
        userContext: de
      } = (0, fe.b)(), We = Date.now(), te = (0, ue.n)(We), Ze = "hyper" === te.look, we = Ze ? void 0 : wU, De = iU(He), Pe = (0, ue.r)(We), {
        days: Ae
      } = Pe.product, Ye = Oe("store:recipientHasSuperRank", {
        giftDays: Ae
      }), Ve = null === (ie = ki("subscribed" === He)) || void 0 === ie ? void 0 : ie.text, ae = De ? null : (0, ue.m)(de.superRankInfo, We), ce = Ze && !De && "subscribed" !== He && "pending" !== He && (0, Se.subscriptionsSold)() && !(0, Xe.isMobileApp)(), [xe, Le] = (0, ye.useState)(!0);
      return (0, Re.jsxs)("div", {
        className: Me()("StoreTile StoreSuperRankTile", {
          StoreTileGift: De,
          StoreSuperRankTileUrgent: "recharge" === He && be,
          StoreSuperRankTileWithChip: Je,
          StoreSuperRankTileGiftReady: "gift" === He,
          StoreHyperRankTile: Ze
        }),
        ...HU(Oe(te.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: we,
        onFocus: we,
        onPointerMove: ee => {
          !Ze || Ee || "mouse" !== ee.pointerType || 0 === ee.movementX && 0 === ee.movementY || ge()
        },
        onClick: qe,
        children: [Ze && (0, Re.jsx)(qU, {
          className: "StoreHyperRankTileStage",
          wearer: Be,
          active: Ee
        }), !Ze && (0, Re.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${te.artUrl})`
          }
        }), De && (0, Re.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Re.jsxs)("div", {
          className: "StoreTileContent",
          children: [Je && (0, Re.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Ye,
            children: Ye
          }), (0, Re.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, Re.jsx)(ue.h, {
              tierId: (0, Ce.h)(We).id
            })
          }), De && (0, Re.jsx)("div", {
            className: "StoreTilePitch",
            children: Oe("store:giftPitch", {
              days: Ae
            })
          }), Ze && ("buy" === He || "login" === He) && null === ae && (0, Re.jsx)("div", {
            className: "StoreTilePitch",
            children: Oe("store:hyperHook")
          }), "recharge" === He && (0, Re.jsx)(mU, {
            daysLeft: Ue,
            totalDays: Fe,
            urgent: be
          }), Ve && (0, Re.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Re.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Ve
            })
          }), null !== ae && (0, Re.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Re.jsx)(le, {
              className: "StoreSuperRankDaysLeft",
              until: ae
            })
          }), Ze && (0, Re.jsx)(gU, {}), !Ze && (0, Re.jsx)(vU, {}), (0, Re.jsxs)("div", {
            className: "StoreTileActions",
            children: [ce && (0, Re.jsx)(LU, {
              onOfferedChange: Le
            }), (0, Re.jsx)(MU, {
              state: He,
              item: "superRank",
              price: Pe.price,
              busy: oe,
              highlight: ke,
              secondary: ce && xe,
              onAct: Te,
              onNeedRecipient: pe,
              onLogin: ze
            }), "needsRecipient" === He && (0, Re.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Oe("store:pickRecipientFirst")
            }), "recharge" === He && be && (0, Re.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Ue ? Oe("store:endsInOneDay") : Oe("store:endsInDays", {
                days: Ue
              })
            })]
          })]
        })]
      })
    }
    var SU = He(1547),
      nU = He(1444),
      jU = He(3962);

    function sU() {
      return (0, Re.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var IU = He(1335),
      hU = He(1557),
      NU = He(34919);

    function GU(ee) {
      let {
        character: ie,
        drawn: He,
        onDrawn: be
      } = ee;
      const Ke = (0, ye.useRef)(null),
        Ue = (0, NU.f)(ie);
      return (0, Re.jsx)("div", {
        className: Me()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: He
        }),
        children: (0, Re.jsx)(ye.Suspense, {
          fallback: null,
          children: (0, Re.jsx)(IK.c, {
            ref: Ke,
            framing: "store",
            turntableFromYaw: He ? Ue.yaw : null,
            onReady: () => {
              var ee, He;
              null === (ee = Ke.current) || void 0 === ee || ee.setOrbit(Ue), null === (He = Ke.current) || void 0 === He || He.setAllCosmetics(hU.b[ie].cosmetics)
            },
            onDrawn: be
          })
        })
      })
    }
    var rU = He(3369);
    const QU = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      eF = new Set(["wildSpirits"]);

    function iF(ee) {
      var ie;
      let {
        tile: He,
        design: be,
        canGoLive: Fe,
        live: Je,
        busy: oe,
        highlight: ke,
        onLiveStart: qe,
        onLiveEnd: fe,
        onOpen: Te,
        onAct: pe,
        onNeedRecipient: Xe,
        onLogin: ze
      } = ee;
      const {
        t: Be
      } = (0, Ke.v)(), {
        pack: Ee,
        state: ge
      } = He, Oe = XK.b[Ee], de = (0, XK.d)(Ee), We = (0, LK.k)(Ee), te = WK.l[We], Ze = eF.has(We), {
        tier: we
      } = Oe, De = (0, rU.g)(Ee), Pe = "legendary" === we || "mythic" === we, Ae = (0, ye.useRef)(null);
      (0, IU.e)(Ae, "epic" === we || Pe || Ze);
      const [Ve, ae] = (0, ye.useState)(!1);
      return !Je && Ve && ae(!1), (0, Re.jsxs)("div", {
        ref: Ae,
        className: Me()("StoreCharacterCard", `StoreCharacterCard${be}`, QU[we], {
          StoreCharacterCardOwned: "owned" === ge || "recipientOwns" === ge,
          StoreCharacterCardGift: iU(ge),
          StoreCharacterCardItem: void 0 === de
        }),
        onPointerMove: ee => {
          "mouse" !== ee.pointerType || 0 === ee.movementX && 0 === ee.movementY || !Fe || Je || void 0 === de || qe()
        },
        onPointerLeave: fe,
        children: [(0, Re.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: te && (0, Re.jsx)(te, {
            simple: !0
          })
        }), Pe && (0, Re.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Re.jsxs)(Ye.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, SU.g)({
            kind: "pack",
            pack: Ee
          }, Date.now()),
          "data-store-item": Ee,
          onClick: ee => {
            (0, nU.e)(ee) && (ee.preventDefault(), Te())
          },
          children: [(0, Re.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Re.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Re.jsx)("div", {
              className: Me()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Ve
              }),
              style: {
                backgroundImage: `url(${(0,LK.u)(Ee)})`
              }
            }), Je && void 0 !== de && (0, Re.jsx)(GU, {
              character: de,
              drawn: Ve,
              onDrawn: () => {
                ae(!0)
              }
            })]
          }), (0, Re.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ie = Oe.displayName) && void 0 !== ie ? ie : Ee
          }), (0, Re.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, Re.jsx)(rK.b, {
              tier: we
            }), De && (0, Re.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, Re.jsx)(Ue.e, {
                name: "film"
              }), Be("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, Re.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Ze && (0, Re.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Re.jsx)(sU, {})
        }), (0, Re.jsx)(QK.d, {
          pack: Ee,
          iconOnly: !0,
          className: Me()({
            PackAnimatedBadgeBelowOwned: "owned" === ge
          })
        }), "owned" === ge && (0, Re.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Be("general:owned"),
          "aria-label": Be("general:owned"),
          children: (0, Re.jsx)(Ue.e, {
            name: "check"
          })
        }), (0, Re.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Re.jsx)(MU, {
            state: ge,
            item: Ee,
            price: (0, zK.d)(Ee),
            busy: oe,
            highlight: ke,
            onAct: pe,
            onNeedRecipient: Xe,
            onLogin: ze
          })
        })]
      })
    }

    function HF(ee) {
      let {
        tiles: ie,
        busy: He,
        highlightItem: be,
        onOpen: Me,
        onAct: Ke,
        onNeedRecipient: Ue,
        onLogin: Fe,
        livePack: Je,
        setLivePack: oe
      } = ee;
      const ke = (0, jU.t)("storeCharacterCardFoil"),
        qe = (0, jU.t)("storeCharacterCardSpotlight"),
        fe = ke ? "Foil" : qe ? "Spotlight" : "Showcase",
        [Te] = (0, ye.useState)(cK.g);
      return (0, Re.jsx)("div", {
        className: "StoreCharacterGrid",
        children: ie.map((ee => (0, Re.jsx)(iF, {
          tile: ee,
          design: fe,
          canGoLive: !Te,
          live: Je === ee.pack,
          busy: He,
          highlight: be === ee.pack,
          onLiveStart: () => {
            oe(ee.pack)
          },
          onLiveEnd: () => {
            oe((ie => ie === ee.pack ? null : ie))
          },
          onOpen: () => {
            Me(ee.pack)
          },
          onAct: () => {
            Ke(ee.pack)
          },
          onNeedRecipient: Ue,
          onLogin: () => {
            Fe(ee.pack)
          }
        }, ee.pack)))
      })
    }
    var yF = He(34936);

    function bF(ee) {
      let {
        title: ie
      } = ee;
      return (0, Re.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Re.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: ie
        })
      })
    }

    function MF(ee) {
      let {
        mountAtOnce: ie,
        children: He
      } = ee;
      const be = (0, ye.useRef)(null),
        [Me, Ke] = (0, ye.useState)(ie),
        Ue = (0, yF.e)();
      return (0, ye.useLayoutEffect)((() => {
        const ee = be.current;
        ee && ee.getBoundingClientRect().top < ee.parentElement.getBoundingClientRect().bottom && Ke(!0)
      }), []), Me || Ue ? (0, Re.jsx)(Re.Fragment, {
        children: He
      }) : (0, Re.jsx)("div", {
        ref: be
      })
    }

    function KF(ee) {
      let {
        layout: ie,
        mountAtOnce: He,
        bundleGift: be,
        superRankTotalDays: Me,
        busy: Ue,
        highlightItem: Fe,
        onOpen: Je,
        onAct: oe,
        onNeedRecipient: ke,
        onLogin: qe,
        dailyDropTile: fe,
        dealBanner: Te,
        rankWearer: pe
      } = ee;
      const {
        t: Xe
      } = (0, Ke.v)(), ze = ie.packs.filter((ee => void 0 === (0, XK.d)(ee.pack) && !(0, XK.g)(ee.pack))), Be = ie.packs.filter((ee => void 0 !== (0, XK.d)(ee.pack))), Ee = ie.packs.filter((ee => (0, XK.g)(ee.pack))), [ge, Oe] = (0, ye.useState)(null), [de, te] = (0, ye.useState)(!1), {
        gameState: Ze
      } = (0, We.m)(["gameState"]), we = null === ge && (de || "inGame" === Ze);
      return (0, Re.jsxs)(Re.Fragment, {
        children: [(0, Re.jsx)(Mi.d, {
          className: "StoreSuperGems",
          gift: be,
          highlightSku: Fe,
          leadingTile: fe,
          afterLeadingTile: Te
        }), (0, Re.jsx)(bF, {
          title: Xe("store:rank")
        }), (0, Re.jsx)(lU, {
          state: ie.superRank.state,
          urgent: ie.superRank.urgent,
          daysLeft: ie.superRankDaysLeft,
          totalDays: Me,
          recipientHasSuperRank: ie.recipientHasSuperRank,
          wearer: pe,
          live: we,
          onWake: () => {
            te(!0)
          },
          busy: Ue,
          highlight: "superRank" === Fe,
          onOpen: () => {
            Je("superRank")
          },
          onAct: () => {
            oe("superRank")
          },
          onNeedRecipient: ke,
          onLogin: () => {
            qe("superRank")
          }
        }), (0, Re.jsxs)(MF, {
          mountAtOnce: He,
          children: [(0, Re.jsx)(bF, {
            title: Xe("store:bundles")
          }), (0, Re.jsx)("div", {
            className: "StorePackGrid",
            children: ze.map((ee => (0, Re.jsx)(UU, {
              pack: ee.pack,
              state: ee.state,
              busy: Ue,
              onOpen: () => {
                Je(ee.pack)
              },
              onAct: () => {
                oe(ee.pack)
              },
              onNeedRecipient: ke,
              onLogin: () => {
                qe(ee.pack)
              }
            }, ee.pack)))
          }), (0, Re.jsxs)(MF, {
            mountAtOnce: He,
            children: [(0, Re.jsx)(bF, {
              title: Xe("store:characters")
            }), (0, Re.jsx)(HF, {
              tiles: Be,
              busy: Ue,
              highlightItem: Fe,
              onOpen: Je,
              onAct: oe,
              onNeedRecipient: ke,
              onLogin: qe,
              livePack: ge,
              setLivePack: Oe
            }), Ee.length > 0 && (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsx)(bF, {
                title: Xe("store:premiumItems")
              }), (0, Re.jsx)(HF, {
                tiles: Ee,
                busy: Ue,
                highlightItem: Fe,
                onOpen: Je,
                onAct: oe,
                onNeedRecipient: ke,
                onLogin: qe,
                livePack: ge,
                setLivePack: Oe
              })]
            })]
          })]
        })]
      })
    }

    function UF(ee) {
      let {
        giftName: ie,
        onChooseRecipient: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return ie ? (0, Re.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: ye("store:giftFor", {
          name: ie
        }),
        children: [ZK.c, " ", ye("store:giftFor", {
          name: ie
        })]
      }) : (0, Re.jsxs)("div", {
        ...(0, Je.R)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: He,
        children: [ZK.c, " ", ye("store:chooseRecipient")]
      })
    }

    function FF(ee) {
      return (0, Ce.e)(Date.now()) ? (0, Re.jsx)(oF, {
        ...ee
      }) : (0, Re.jsx)(JF, {
        ...ee
      })
    }

    function JF(ee) {
      let {
        state: ie,
        wearer: He,
        mode: ye,
        giftName: be,
        busy: Me,
        highlight: Ue,
        purchaseError: Fe,
        onBack: Je,
        onChooseRecipient: oe,
        onAct: ke,
        onLogin: qe
      } = ee;
      const {
        t: fe
      } = (0, Ke.v)(), Te = ki("gift" !== ye);
      return (0, Re.jsx)(PU, {
        tierId: ve.n.id,
        wearer: He,
        onBack: Je,
        recipient: "gift" === ye && (0, Re.jsx)(UF, {
          giftName: be,
          onChooseRecipient: oe
        }),
        cta: (0, Re.jsx)(MU, {
          state: ie,
          item: "superRank",
          price: (0, ue.r)(Date.now()).price,
          busy: Me,
          highlight: Ue,
          onAct: ke,
          onNeedRecipient: oe,
          onLogin: qe
        }),
        afterCta: (0, Re.jsxs)(Re.Fragment, {
          children: [Te && (0, Re.jsx)("span", {
            className: "StoreTileNote",
            children: Te.text
          }), (null === Te || void 0 === Te ? void 0 : Te.manageUrl) && (0, Re.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: Te.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: fe("payments:manageSubscription")
          }), Fe && (0, Re.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: fe(Fe)
          })]
        })
      })
    }

    function oF(ee) {
      let {
        state: ie,
        daysLeft: He,
        wearer: be,
        mode: Me,
        giftName: Ue,
        busy: Fe,
        highlight: Je,
        purchaseError: oe,
        onBack: ke,
        onChooseRecipient: qe,
        onAct: Te,
        onLogin: pe
      } = ee;
      const {
        t: Xe
      } = (0, Ke.v)(), {
        userContext: ze
      } = (0, fe.b)(), Be = Date.now(), Ee = "gift" !== Me, ge = Ee && "subscribed" === ie, Oe = Ee ? (0, ue.m)(ze.superRankInfo, Be) : null, de = Ee && !ge && "pending" !== ie && (0, Se.subscriptionsSold)(), [We, te] = (0, ye.useState)(!0);
      return (0, Re.jsx)(PU, {
        tierId: ve.c.id,
        wearer: be,
        onBack: ke,
        recipient: !Ee && (0, Re.jsx)(UF, {
          giftName: Ue,
          onChooseRecipient: qe
        }),
        cta: (0, Re.jsxs)(Re.Fragment, {
          children: [null !== Oe && (0, Re.jsx)(le, {
            className: "StoreTileNote StoreDetailNote",
            until: Oe
          }), "recharge" === ie && He > 0 && (0, Re.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: uU(Xe, He)
          }), de && (0, Re.jsx)(LU, {
            onOfferedChange: te
          }), Ee && (0, Re.jsx)(Ui, {
            showing: !0
          }), !ge && (0, Re.jsx)(MU, {
            state: ie,
            item: "superRank",
            price: (0, ue.r)(Be).price,
            busy: Fe,
            highlight: Je,
            secondary: de && We,
            onAct: Te,
            onNeedRecipient: qe,
            onLogin: pe
          })]
        }),
        afterCta: oe && (0, Re.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: Xe(oe)
        })
      })
    }

    function RF(ee, ie) {
      const He = Math.max(1, Math.round(ie / Le.h));
      return [1 === He ? `${ee}OneDay` : ee, {
        days: He.toLocaleString()
      }]
    }

    function kF() {
      const ee = (0, Se.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && ee && (0, Se.subscriptionsSold)() ? (0, Re.jsx)(qF, {}) : null
    }

    function qF() {
      const {
        t: ee
      } = (0, Ke.v)(), {
        offer: ie,
        purchaseUnderWay: He,
        notice: be,
        pendingIntentId: Me,
        checkOut: Ue
      } = xU((0, ue.k)(ve.n.id).placementId), [Fe, oe] = (0, ye.useState)(!1);
      if ((0, ye.useEffect)((() => {
          oe(!1)
        }), [ie]), null === ie) return null;
      if ("loaded" !== ie.kind) return (0, Re.jsx)(AU.i, {
        notice: {
          kind: "error",
          key: "unavailable" === ie.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: ke,
        preview: qe
      } = ie;
      if ("refused" === qe.kind) return (0, Re.jsx)(AU.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(qe.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const fe = (0, Mi.h)(ke),
        Te = (0, Xe.isMobileApp)() && (0, Re.jsx)(YU, {
          price: fe,
          perks: (0, Re.jsx)(vU, {})
        });
      if (Fe && "refund" === qe.kind) {
        const {
          refundedMs: ie,
          forfeitedMs: ye,
          premiumCurrency: be
        } = qe, Me = ye + (0 === be ? ie : 0), [Ke, Fe] = RF("payments:subscribeRefundsGemRank", ie), [pe, Xe] = RF("payments:subscribeForfeitsGemRank", Me);
        return (0, Re.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Re.jsx)("div", {
            children: ee("payments:subscribeEndsGemRank")
          }), be > 0 && (0, Re.jsx)("div", {
            children: ee(Ke, {
              ...Fe,
              amount: be.toLocaleString()
            })
          }), Me > 0 && (0, Re.jsx)("div", {
            children: ee(pe, Xe)
          }), (0, Re.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Re.jsx)(Je.e, {
              onClick: () => {
                oe(!1)
              },
              children: ee("general:cancel")
            }), (0, Re.jsx)(Je.m, {
              onClick: () => {
                oe(!1), Ue(ke)
              },
              loading: He,
              children: ee("payments:subscribeContinue", {
                price: fe
              })
            })]
          }), Te]
        })
      }
      return (0, Re.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Re.jsx)(AU.i, {
          notice: be,
          className: "SmallTextBold"
        }), (0, Re.jsx)(AU.d, {
          className: "SmallTextBold"
        }), (0, Re.jsx)(Je.m, {
          onClick: () => {
            "refund" === qe.kind ? oe(!0) : Ue(ke)
          },
          disabled: void 0 !== Me,
          loading: He,
          children: ee("payments:subscribeToSuperRank", {
            price: fe
          })
        }), Te]
      })
    }
    var fF = He(2686);

    function TF(ee) {
      let {
        state: ie,
        view: He,
        claiming: be,
        onOpen: Ue
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = (0, ye.useRef)(null), qe = "ready" === He.kind;
      return (0, IU.e)(ke, qe), (0, Re.jsxs)("div", {
        ref: ke,
        className: Me()("DailyDropTile", {
          DailyDropTileReady: qe
        }),
        children: [qe && (0, Re.jsx)(Fe.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, Re.jsx)("div", {
          className: "DailyDropTileTitle",
          children: oe("dailyDrop:name")
        }), (0, Re.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, Re.jsx)(fF.b, {
            className: "DailyDropTileBlock"
          }), (0, Re.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: oe("dailyDrop:collected", {
              count: ie.collected.length,
              total: ie.total
            })
          })]
        }), "ready" === He.kind && (0, Re.jsx)(Je.m, {
          className: "DailyDropTileOpen",
          onClick: Ue,
          loading: be,
          children: oe("dailyDrop:open")
        }), "waiting" === He.kind && (0, Re.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: oe("dailyDrop:nextIn", {
            count: He.hours
          })
        })]
      })
    }
    var pF = He(2278);
    const XF = Math.PI / 180;

    function zF(ee) {
      return ee / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function BF(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const ye = (ee / (2 * Math.PI / He) % He + He) % He;
      let be = null,
        Me = 1 / 0;
      for (let Ke = 0; Ke < He; Ke++) {
        if (!ie[Ke]) continue;
        const ee = Math.abs(Ke - ye),
          Ue = Math.min(ee, He - ee);
        Ue < Me && (be = Ke, Me = Ue)
      }
      return be
    }

    function EF(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const ye = BF(ee, ie, He);
      if (null === ye) return ee;
      const be = zF(ye, He) - ee;
      return ee + be - 2 * Math.PI * Math.round(be / (2 * Math.PI))
    }
    const gF = 32;

    function OF(ee) {
      if (0 === ee.width || 0 === ee.height) return !0;
      const ie = document.createElement("canvas");
      ie.width = gF, ie.height = gF;
      const He = ie.getContext("2d", {
        willReadFrequently: !0
      });
      if (!He) return !0;
      He.drawImage(ee, 0, 0, gF, gF);
      const {
        data: ye
      } = He.getImageData(0, 0, gF, gF);
      for (let be = 3; be < ye.length; be += 4)
        if (ye[be] > 0) return !1;
      return !0
    }

    function dF(ee) {
      const ie = document.createElement("canvas");
      ie.width = ee.width, ie.height = ee.height;
      const He = ie.getContext("2d");
      return He ? (He.drawImage(ee, 0, 0), ie) : null
    }

    function WF(ee) {
      let {
        cosmetics: ie
      } = ee;
      return (0, Re.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, Re.jsx)(vK.c, {
          cosmetics: ie
        })
      })
    }

    function tF(ee) {
      let {
        worn: ie,
        te: He,
        Ze: be,
        prompting: Fe,
        className: Je
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = (0, ye.useRef)(null), [qe, fe] = (0, ye.useState)(null), [Te, pe] = (0, ye.useState)(!1), [Xe, ze] = (0, ye.useState)(!1), Be = (0, ye.useRef)([]), Ee = (0, ye.useRef)(null), ge = (0, ye.useRef)(0), de = (0, ye.useRef)(null), We = (0, ye.useRef)(!0), te = (0, ye.useCallback)((() => {
        const ee = Ee.current,
          ie = Be.current,
          He = BF(ge.current, ie),
          ye = null === He ? null : ie[He],
          be = null === ee || void 0 === ee ? void 0 : ee.getContext("2d");
        ee && ye && be && (ee.width === ye.width && ee.height === ye.height || (ee.width = ye.width, ee.height = ye.height), be.clearRect(0, 0, ee.width, ee.height), be.drawImage(ye, 0, 0))
      }), []);
      async function Ze(ee, ie) {
        const He = performance.now();
        let ye = 0;
        for (const be of function() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const ie = [],
              He = new Set;
            for (let ye = ee / 2; ye >= 1 && Number.isInteger(ye); ye /= 2)
              for (let be = 0; be < ee; be += ye) He.has(be) || (He.add(be), ie.push(be));
            for (let ye = 0; ye < ee; ye++) He.has(ye) || ie.push(ye);
            return ie
          }()) {
          if (ke.current !== ee) break;
          if (0 !== be && (ee.turnCamera(zF(be)), await new Promise((ee => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  ee()
                }))
              }))
            })), ke.current !== ee)) break;
          const He = OF(ie) ? null : dF(ie);
          if (null !== He) Be.current[be] = He, ye++, 0 === be && fe("stills");
          else if (0 === be) break
        }
        ye > 0 && console.info(`Lucky Skin Block's Before: ${ye} stills in ${Math.round(performance.now()-He)} ms`)
      }

      function we(ee) {
        var ie, He;
        (null === (ie = de.current) || void 0 === ie ? void 0 : ie.pointerId) === ee.pointerId && (de.current = null, We.current || (ge.current = EF(ge.current, Be.current), te(), null === (He = ke.current) || void 0 === He || He.turnCamera(ge.current)))
      }(0, ye.useEffect)((() => {
        "stills" === qe && te()
      }), [qe, te]), (0, ye.useEffect)((() => () => {
        for (const ee of Be.current) ee && (ee.width = 0, ee.height = 0);
        Be.current = []
      }), []);
      const De = Fe && !Xe,
        Pe = De ? {
          onPointerDown: ee => {
            null === de.current && (ee.currentTarget.setPointerCapture(ee.pointerId), de.current = {
              pointerId: ee.pointerId,
              startX: ee.clientX,
              startTurn: ge.current
            })
          },
          onPointerMove: ee => {
            const ie = de.current;
            var He;
            null !== ie && ie.pointerId === ee.pointerId && (ge.current = ie.startTurn - (ee.clientX - ie.startX) * XF, te(), We.current || null === (He = ke.current) || void 0 === He || He.turnCamera(ge.current))
          },
          onPointerUp: we,
          onPointerCancel: we
        } : {};
      return (0, Re.jsxs)("div", {
        className: Me()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: De
        }, Je),
        children: [(0, Re.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, Re.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...Pe,
            children: ["stills" === qe && (0, Re.jsx)("canvas", {
              ref: Ee,
              className: "DailyDropRevealBeforeStill"
            }), "head" === qe && (0, Re.jsx)(WF, {
              cosmetics: ie
            }), null === qe && (0, Re.jsx)(Oe.b, {})]
          }), (0, Re.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: oe("dailyDrop:before")
          })]
        }), (0, Re.jsx)(Ue.e, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, Re.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, Re.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, Re.jsx)("div", {
              className: Me()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: Te
              }),
              children: (0, Re.jsx)(ye.Suspense, {
                fallback: null,
                children: (0, Re.jsx)(IK.c, {
                  onNoWebGl: () => {
                    fe("head"), ze(!0)
                  },
                  ref: ke,
                  onReady: () => {
                    var ee, He;
                    null === (ee = ke.current) || void 0 === ee || ee.resetCamera(), null === (He = ke.current) || void 0 === He || He.setAllCosmetics(ie)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var ee;
                        const ie = ke.current;
                        if (!ie) return;
                        const ye = null === (ee = ie.getDevTools()) || void 0 === ee ? void 0 : ee.canvas();
                        try {
                          ye && await Ze(ie, ye)
                        } catch (Ke) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", Ke)
                        } finally {
                          We.current = !1
                        }
                        if (ke.current !== ie) return;
                        Be.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), fe("head")), null === de.current && (ge.current = EF(ge.current, Be.current)), ie.turnCamera(ge.current), te(), ie.updateCosmetic(He, be);
                        const Me = new Promise((ee => {
                          setTimeout(ee, 1e4)
                        }));
                        await Promise.race([ie.ensureReadyForCapture(He), Me]).catch((ee => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", ee)
                        })), ke.current === ie && pe(!0)
                      }()
                    }))
                  }
                })
              })
            }), Xe && (bM.S.includes(He) ? (0, Re.jsx)(WF, {
              cosmetics: {
                ...ie,
                [He]: be
              }
            }) : (0, Re.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,pF.h)(He,be).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !Te && !Xe && (0, Re.jsx)(Oe.b, {}), (0, Re.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...Pe
            })]
          }), (0, Re.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: oe("dailyDrop:after")
          })]
        })]
      })
    }
    const ZF = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      wF = {
        opening: 900,
        shrinking: 700
      };

    function DF(ee) {
      let {
        drop: ie,
        onClose: He
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), {
        userContext: Fe
      } = (0, fe.b)(), {
        state: oe,
        view: ke
      } = (0, TH.w)(), [qe, Te] = (0, ye.useState)("closed"), [pe] = (0, ye.useState)((() => ({
        ...Fe.getPlayerCosmetics()
      }))), [Xe] = (0, ye.useState)((() => (0, TH.j)(ie, pe))), [ze, Be] = (0, ye.useState)(!1), [Ee, ge] = (0, ye.useState)(!1), [Oe] = (0, ye.useState)((() => null === oe ? Promise.resolve(null) : EH(oe))), [de, te] = (0, ye.useState)(null), Ze = (0, kH.c)(), {
        gameState: we
      } = (0, We.m)(["gameState"]);
      async function De() {
        const ee = await Oe;
        Ze.current && (null === ee ? (He(), async function(ee) {
          let ie = null;
          try {
            const He = await BH();
            null === ee || ee.remindersOn || null !== zH.i.getItem(He) || (ie = He)
          } catch (ye) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", ye)
          }
          if (null === ie) return void await (0, pH.g)("dailyDrop");
          const He = ie;
          await (0, pH.g)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              zH.i.setItem(He, !0), OH(null)
            }
          })
        }(oe)) : ((0, pH.d)(), te(ee), Te("remind")))
      }

      function Pe(ee) {
        null !== de && function(ee, ie) {
          zH.i.setItem(ee.askedKey, !0), (0, RH.l)(), (0, TH.r)("daily_drop.remind", ie ? "yes" : "no"), ie && OH(ee.requester)
        }(de, ee), He()
      }(0, ye.useEffect)((() => {
        (0, TH.r)("daily_drop.reveal_step", qe)
      }), [qe]), (0, ye.useEffect)((() => {
        const ee = wF[qe];
        if (void 0 === ee) return;
        const ie = setTimeout((() => {
          Te(ZF[qe])
        }), ee);
        return () => {
          clearTimeout(ie)
        }
      }), [qe]);
      const Ae = be(`dailyDrop:kind_${Xe.te}`),
        Ye = oe && be("dailyDrop:collected", {
          count: oe.collected.length,
          total: oe.total
        }),
        Ve = "revealed" === qe || "shrinking" === qe,
        ae = "equip" !== qe && "remind" !== qe;
      return (0, Re.jsx)(tb.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === qe ? () => {
          Pe(!1)
        } : He,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, Re.jsxs)("div", {
          className: Me()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === qe,
            DailyDropRevealShrinking: "shrinking" === qe,
            DailyDropRevealFiguresShown: "shrinking" === qe || "equip" === qe || "remind" === qe
          }),
          children: [(0, Re.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, Re.jsx)(tF, {
              className: "DailyDropRevealStageFigures",
              worn: pe,
              te: Xe.te,
              Ze: Xe.Ze,
              prompting: !ae
            }), ("closed" === qe || "opening" === qe) && (0, Re.jsx)(fF.b, {
              className: "DailyDropRevealBlock",
              open: "opening" === qe
            }), Ve && (0, Re.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, Re.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,pF.h)(Xe.te,Xe.Ze).previewTex}.png`,
                alt: Ae,
                draggable: !1
              })
            })]
          }), ae && (0, Re.jsxs)(Re.Fragment, {
            children: [(0, Re.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, Re.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Ve ? Ae : be("dailyDrop:name")
              }), "closed" === qe && (0, Re.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: be("dailyDrop:tapToOpen")
              }), "revealed" === qe && (0, Re.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: be("dailyDrop:tapToContinue")
              })]
            }), (0, Re.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": be("closed" === qe ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Te(ZF[qe])
              }
            })]
          }), "equip" === qe && (0, Re.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Re.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Ae
            }), (0, Re.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: be("dailyDrop:equipQuestion")
            }), (0, Re.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Re.jsx)(Je.c, {
                className: "DailyDropRevealButton",
                disabled: ze,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, TH.r)("daily_drop.not_now", ie), De()
                },
                children: be("dailyDrop:notNow")
              }), (0, Re.jsx)(Je.c, {
                className: "DailyDropRevealButton",
                loading: ze,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, TH.r)("daily_drop.equip", ie), Be(!0), ge(!1);
                    try {
                      await (0, TH.g)(Fe, Xe.te, Xe.Ze)
                    } catch (ee) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", ee), Be(!1), void ge(!0)
                    }
                    await De()
                  }()
                },
                children: be("dailyDrop:equip")
              })]
            }), Ee && (0, Re.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: be("dailyDrop:equipFailed")
            }), !(0, We.h)(we) && (0, Re.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: ze,
              onClick: () => {
                var ee;
                (0, TH.r)("daily_drop.customise", ie), ee = Xe.te, cH.h.yR(zb, ee), We.e.set({
                  openEverythingMenuName: Yi.r.CUSTOMISATION
                }), He()
              },
              children: [be("dailyDrop:customise"), " ", (0, Re.jsx)(Ue.e, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Ye && (0, Re.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Ye, "waiting" === (null === ke || void 0 === ke ? void 0 : ke.kind) && ` \xb7 ${be("dailyDrop:nextInInline",{count:ke.hours})}`]
            })]
          }), "remind" === qe && (0, Re.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Re.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: be("dailyDrop:remindTitle")
            }), (0, Re.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: be("dailyDrop:remindSubtitle")
            }), (0, Re.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Re.jsx)(Je.c, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  Pe(!1)
                },
                children: be("dailyDrop:remindNo")
              }), (0, Re.jsx)(Je.c, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  Pe(!0)
                },
                children: be("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function PF(ee, ie) {
      const {
        t: He
      } = (0, Ke.v)(), be = function(ee, ie) {
        const {
          state: He,
          view: be
        } = (0, TH.w)(), [Me, Ke] = (0, ye.useState)(!1), [Ue, Fe] = (0, ye.useState)(!1), [Je, oe] = (0, ye.useState)(null), Re = (0, ye.useRef)(null), ke = (0, ye.useRef)(!1), qe = ie && "ready" === (null === be || void 0 === be ? void 0 : be.kind);
        (0, ye.useEffect)((() => {
          ee ? qe && !ke.current && (ke.current = !0, (0, TH.r)("daily_drop.shown", "tile")) : ke.current = !1
        }), [ee, qe]), (0, ye.useEffect)((() => {
          ee || (Xe(), Fe(!1))
        }), [ee]);
        const fe = ee && null === Je && !(0, TH.o)(be);
        (0, ye.useEffect)((() => {
          fe && We.e.set({
            openEverythingMenuName: Yi.r.CUSTOMISATION
          })
        }), [fe]);
        const Te = (0, ye.useRef)(!1),
          pe = (0, ye.useRef)(ee);

        function Xe() {
          null !== Re.current && (Re.current = null, oe(null))
        }
        return pe.current = ee, {
          state: He,
          view: be,
          claiming: Me,
          claimFailed: Ue,
          reveal: Je,
          open: async function() {
            if (!Te.current) {
              Te.current = !0, Ke(!0), Fe(!1);
              try {
                const {
                  state: ee,
                  drop: ie
                } = await (0, TH.e)();
                if (null === ee || null === ie) return;
                if (!pe.current) return;
                (0, TH.r)("daily_drop.open", ie), Re.current = {
                  state: ee,
                  drop: ie
                }, oe(Re.current)
              } catch (ee) {
                console.error("Failed to claim the Lucky Skin Block", ee), pe.current && Fe(!0)
              } finally {
                Te.current = !1, Ke(!1)
              }
            }
          },
          closeReveal: Xe
        }
      }(ee, ie);
      return {
        shown: (0, TH.o)(be.view) || null !== be.reveal,
        tile: be.state && be.view && (0, Re.jsx)(TF, {
          state: be.state,
          view: be.view,
          claiming: be.claiming,
          onOpen: be.open
        }),
        claimFailed: be.claimFailed && (0, Re.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: He("dailyDrop:claimFailed")
        }),
        reveal: be.reveal && (0, Re.jsx)(DF, {
          drop: be.reveal.drop,
          onClose: be.closeReveal
        })
      }
    }

    function AF(ee) {
      let {
        show: ie
      } = ee;
      const He = PF(ie, ie);
      return (0, Fi.J)(ie && He.shown, (0, Fi.K)(), (ee => {
        (0, TH.r)("daily_drop.store_only_open", ee)
      })), ie && He.shown ? (0, Re.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [He.claimFailed, He.tile && (0, Re.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: He.tile
        }), He.reveal]
      }) : null
    }
    var YF = He(2694),
      VF = He(34945),
      aF = He(34951);

    function cF(ee) {
      let {
        view: ie,
        highlight: He,
        scrollSignal: be,
        onScrolledIntoView: Me
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), {
        purchaseUnderWay: Fe,
        notice: Je,
        needsLogin: oe,
        buyPack: ke
      } = (0, aF.h)("banner");
      (0, YF.O)(ie.arm, "banner");
      const qe = (0, ye.useRef)(null);
      return (0, ye.useEffect)((() => {
        var ee;
        be > 0 && (null === (ee = qe.current) || void 0 === ee || ee.scrollIntoView({
          block: "nearest"
        }), Me())
      }), [be]), (0, Re.jsxs)("div", {
        ref: qe,
        className: "NewPlayerDealBanner",
        children: [(0, Re.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, Re.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: Ue("newPlayerDeal:title")
          }), (0, Re.jsx)(VF.d, {
            endsAt: ie.endsAt
          })]
        }), (0, Re.jsx)(VF.g, {
          view: ie,
          needsLogin: oe,
          busy: Fe,
          highlight: He,
          onBuy: ee => {
            ke(ie, ee)
          }
        }), (0, Re.jsx)(AU.i, {
          notice: Je,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    He(34947);
    var xF = He(2697);

    function LF(ee) {
      let {
        wallet: ie,
        close: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return (0, Re.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, Re.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, Re.jsx)("span", {
            children: ye("newPlayerDeal:giftable")
          }), (0, Re.jsx)(sK.d, {
            amount: (0, gK.c)(ie)
          }), (0, Re.jsx)("span", {
            children: ye("newPlayerDeal:ungiftable")
          }), (0, Re.jsx)(sK.d, {
            amount: ie.ungiftable
          })]
        }), (0, Re.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: ye("newPlayerDeal:ungiftableWhy")
        }), (0, Re.jsx)(Je.m, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: He,
          children: ye("general:ok")
        })]
      })
    }

    function CF(ee) {
      bi.NotificationProvider.showCustomPopup({
        body: ie => (0, Re.jsx)(LF, {
          wallet: ee,
          close: ie
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const vF = {
      kind: "board"
    };
    let uF = !1;

    function mF(ee) {
      return "found" === ee.status || "error" === ee.status && "store:giftRecipientLookupFailed" === ee.error ? ee.name : null
    }(0, Fi.y)(re.prefetchBillingOfferings);
    const lF = (0, ye.memo)((function(ee) {
      var ie;
      let {
        show: be
      } = ee;
      const {
        t: Ue
      } = (0, Ke.v)(), {
        userContext: Fe
      } = (0, fe.b)(), Je = (0, Se.usePurchasesAllowed)(), oe = Fe !== De.NULL_USER_CONTEXT, ke = AK(Fe, be), [qe, Te] = (0, pe.b)(), {
        page: Xe,
        urlMode: ze,
        goTo: Be
      } = (0, YK.d)(), Ee = function(ee) {
        return "superRank" === ee.kind ? "superRank" : "pack" === ee.kind ? ee.pack : null
      }(Xe), {
        openEverythingMenuName: ge,
        gameState: Oe
      } = (0, We.m)(["openEverythingMenuName", "gameState"]), de = null !== ge;
      ! function(ee, ie) {
        const [be] = (0, ye.useState)(cK.g), [Me, Ke] = (0, ye.useState)(!1);
        be && ie && !Me && Ke(!0);
        const Ue = (0, Ny.A)(),
          Fe = be && Me && ee && !Ue;
        (0, ye.useEffect)((() => {
          if (!Fe) return;
          let ee = null,
            ie = null,
            ye = null;
          const be = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Qe.getBillingClient)().purchaseUnderWay,
            Me = () => {
              var He;
              null === (He = ye) || void 0 === He || He(), ye = null, null !== ee && (clearTimeout(ee), ee = null), null !== ie && (clearTimeout(ie), ie = null)
            },
            Ke = () => {
              (0, VK.n)(!1), (0, VK.m)(!1), Me(), ee = setTimeout((() => {
                ee = null, ye = (0, aK.e)((() => {
                  ye = null, be() ? Ke() : ((0, VK.n)(!0), ie = setTimeout((() => {
                    ie = null, ye = (0, aK.e)((() => {
                      ye = null, be() ? Ke() : (0, VK.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => He(5064))).then((ee => {
                    ee.startBackgroundGameSetup()
                  }), (ee => {
                    console.warn("Background game setup: its chunk failed to load", ee)
                  })))
                }))
              }), 2e3)
            };
          for (const He of xK) window.addEventListener(He, Ke, {
            capture: !0,
            passive: !0
          });
          return Ke(), () => {
            for (const ee of xK) window.removeEventListener(ee, Ke, {
              capture: !0
            });
            Me(), (0, VK.n)(!1), (0, VK.m)(!1)
          }
        }), [Fe])
      }(be && de, "pack" === Xe.kind);
      const te = "landingPage" === Oe;
      (0, ye.useEffect)((() => {
        de && (0, re.prefetchBillingOfferings)()
      }), [de]), (0, ye.useEffect)((() => {
        de && !be && te && (0, LK.v)()
      }), [de, be, te]);
      const [Ze, we] = (0, ye.useState)(0), [Pe, Ae] = (0, ye.useState)(null), [Ye, Ve] = (0, ye.useState)(null), [ae, ce] = (0, ye.useState)(null), [xe, Le] = (0, ye.useState)(null), [ve, me] = (0, ye.useState)(0), le = (0, ye.useRef)(null), ne = (0, ye.useRef)(null), je = (0, ye.useRef)(null), se = (0, ye.useRef)(!1), Ie = (0, Fi.K)(), he = (0, ye.useRef)(0);

      function Ne() {
        we((ee => ee + 1))
      }(0, ye.useEffect)((() => {
        if (be) {
          if (uF = !0, (0, Fi.o)(), Ie && Ie.seq !== he.current) {
            var ee;
            he.current = Ie.seq, "loginResume" !== Ie.source && (0, Fi.F)();
            const ie = (0, Fi.d)(Ie);
            ze || Be(ie), Le(null !== (ee = Ie.highlight) && void 0 !== ee ? ee : null);
            const He = "newPlayerDeal" === Ie.source || "loginResume" === Ie.source && void 0 !== Ie.highlight && (0, YF.f)(Fe).includes(Ie.highlight);
            me((ee => He ? ee + 1 : 0)), Ve(null), "gift" === Ie.mode && Ie.giftRecipientName ? ke.choose(Ie.giftRecipientName, "prefilled") : ke.clear(), "gift" !== Ie.mode || Ie.giftRecipientName || Ne()
          }
        } else me(0)
      }), [be, Ie]), (0, Fi.J)(be, Ie, (ee => {
        (0, Xi.reportAnalyticsClick)({
          id: "store.open",
          value: ee
        })
      }));
      const Ge = (0, YF.M)(),
        ei = null !== xe && null === Ge && null === (0, YF.h)((0, YF.c)(Fe)) && (0, YF.f)(Fe).includes(xe);
      (0, ye.useEffect)((() => {
        if (!xe) return;
        const ee = setTimeout((() => {
          Le(null)
        }), ei ? 15e3 : 4e3);
        return () => {
          clearTimeout(ee)
        }
      }), [xe, ei]), (0, ye.useLayoutEffect)((() => {
        const ee = le.current;
        if (!be || !ee) return ne.current = null, void(je.current = null);
        var ie;
        if (Ee) ne.current = Ee, null === (ie = ee.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ie || ie.focus();
        else if (ne.current) {
          const ie = je.current;
          null !== ie && (ee.scrollTop = ie);
          const He = ee.querySelector(`[data-store-item="${ne.current}"]`);
          if (He) {
            const ye = He.getBoundingClientRect(),
              be = ee.getBoundingClientRect();
            He.focus({
              preventScroll: null !== ie && ye.bottom > be.top && ye.top < be.bottom
            })
          }
          ne.current = null
        }
      }), [Ee, be]), (0, ye.useEffect)((() => {
        Ve(null)
      }), [ke.query]), (0, ye.useEffect)((() => {
        if (!ae) return;
        const ee = setTimeout((() => {
          ce(null)
        }), 8e3);
        return () => {
          clearTimeout(ee)
        }
      }), [ae]);
      const ii = Fe.superRankInfo,
        Hi = Fe.isLoggedIn() || (0, Se.guestsMayBuy)(),
        yi = Fe.getOwnedCosmeticPacks(),
        bi = (0, ZK.i)(ke.query),
        Mi = (0, ZK.e)({
          mode: bi,
          loggedIn: oe ? Hi : null,
          superRankInfo: ii,
          soldTierId: (0, ue.r)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: yi,
          packs: XK.p,
          recipient: ke.recipient
        });
      (0, ye.useEffect)((() => {
        if (!Hi || !be) return;
        const ee = (0, YF.f)(Fe),
          ie = (0, Fi.F)((ie => !ee.includes(ie.item))),
          He = ie && (0, ZK.g)(ie, XK.p);
        ie && He && ((0, Xi.reportAnalyticsClick)({
          id: "store.login_resume",
          value: ie.item
        }), (0, Fi.r)(He))
      }), [Hi, be]);
      const Ki = be && "gift" === bi,
        Ui = (0, ye.useRef)(Ki);
      Ui.current = Ki;
      const Ji = "none" !== ke.recipient.status,
        oi = (0, ye.useRef)(!1);
      (0, ye.useEffect)((() => {
        Ki ? Ji && !oi.current && (oi.current = !0, async function(ee) {
          var ie;
          if ("gift" === (null === (ie = (0, xF.k)()) || void 0 === ie ? void 0 : ie.show)) return void CF(xF.c);
          const He = await (0, gK.d)();
          null !== He && He.ungiftable > 0 && ee() && CF(He)
        }((() => Ui.current))) : oi.current = !1
      }), [Ki, Ji]);
      const Ri = (0, ZK.m)({
        superRankDaysLeft: Mi.superRankDaysLeft,
        openedThisSession: uF || be,
        seenNewItems: (0, Fi.k)()
      });
      (0, ye.useEffect)((() => {
        (0, Fi.C)(Ri)
      }), [Ri]);
      const ki = "self" === bi,
        qi = PF(be, be && ki && "board" === Xe.kind);
      if (!be || !Je) return null;
      const fi = Te > qe && qe <= 700,
        Ti = !fi && Te <= 420,
        zi = "gift" === bi ? mF(ke.recipient) : null,
        Bi = null !== Pe,
        Ei = "gift" === bi ? {
          name: zi,
          cosmetics: ke.recipientCosmetics,
          gift: !0
        } : {
          name: oe && Fe.getPlayerName() || null,
          cosmetics: Fe.getPlayerCosmetics(),
          gift: !1
        };

      function gi(ee) {
        (0, EK.b)(ee, "gift" === bi ? ke.query.trim() : null)
      }

      function Oi(ee, ie) {
        (0, Xi.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${ie?"gift":"self"}:${ee}`
        }), ie && (ke.recordGift(ie.name, ee), di(ie))
      }

      function di(ee) {
        ! function(ee) {
          try {
            zH.i.setItem(wK, (0, ZK.r)(PK(), ee))
          } catch {}
        }({
          name: ee.name,
          cosmetics: ee.cosmetics
        }), Be(vF), ce((ie => {
          var He;
          return {
            name: ee.name,
            seq: (null !== (He = null === ie || void 0 === ie ? void 0 : ie.seq) && void 0 !== He ? He : 0) + 1
          }
        }))
      }
      async function Wi(ee) {
        var ie, He;
        if (se.current) return;
        if (!Hi) return void gi(ee);
        Ve(null), Le(null);
        const ye = "gift" === bi ? {
          name: mF(ke.recipient),
          cosmetics: ke.recipientCosmetics
        } : null;
        if (ye && !ye.name) return void Ne();
        const be = "superRank" === ee ? (0, ue.r)(Date.now()).id : (0, zK.b)(ee);
        se.current = !0;
        const Me = await (0, tK.d)(be, null !== (ie = null === ye || void 0 === ye ? void 0 : ye.name) && void 0 !== ie ? ie : null);
        if (se.current = !1, !Me) return;
        Ae(ee);
        const Ke = await gK.h.purchase(be, null !== (He = null === ye || void 0 === ye ? void 0 : ye.name) && void 0 !== He ? He : null);
        Ae(null), Ke ? Ve(Ke) : (Oi(ee, ye), ye || (await (0, OK.flushClientAnalyticsEvents)(), (0, BK.refreshWithoutConfirmation)("superRank" === ee ? "/super-rank-welcome" : `/pack-welcome/${ee}`)))
      }
      const ti = Me()("Store", {
        StoreGift: "gift" === bi,
        StorePortrait: fi,
        StoreCompact: Ti
      });
      if ("pack" === Xe.kind) {
        const ee = Xe.pack,
          ie = Mi.packs.find((ie => ie.pack === ee));
        return (0, Re.jsx)("div", {
          ref: le,
          className: "CosmeticShopContainer",
          children: (0, Re.jsx)(WK.f, {
            pack: ee,
            onBack: () => {
              Be(vF)
            },
            onPurchased: ie => {
              Oi(ee, ie ? {
                name: ie,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === bi && zi && ie && (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsx)(MU, {
                state: ie.state,
                item: ee,
                price: (Zi = ee, "superRank" === Zi ? (0, ue.r)(Date.now()).price : (0, zK.d)(Zi)),
                busy: Bi,
                onAct: () => {
                  Wi(ee)
                },
                onNeedRecipient: () => {
                  Be(vF), Ne()
                },
                onLogin: () => {
                  gi(ee)
                },
                highlight: xe === ee
              }), Ye && (0, Re.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Ue(Ye)
              })]
            }),
            ownedPacks: yi,
            startAsGift: "gift" === bi,
            initialGiftRecipient: "gift" === bi ? null !== zi && void 0 !== zi ? zi : ke.query.trim() : "",
            highlightCta: xe === ee
          }, ee)
        })
      }
      var Zi;
      return "superRank" === Xe.kind ? (0, Re.jsx)("div", {
        ref: le,
        className: Me()(ti, "StoreDetailView"),
        children: (0, Re.jsx)(FF, {
          state: Mi.superRank.state,
          daysLeft: Mi.superRankDaysLeft,
          wearer: Ei,
          mode: bi,
          giftName: zi,
          busy: Bi,
          highlight: "superRank" === xe,
          purchaseError: Ye,
          onBack: () => {
            Be(vF)
          },
          onChooseRecipient: () => {
            Be(vF), Ne()
          },
          onAct: () => {
            Wi("superRank")
          },
          onLogin: () => {
            gi("superRank")
          }
        })
      }) : (0, Re.jsxs)("div", {
        ref: le,
        className: ti,
        onScroll: ee => {
          je.current = ee.currentTarget.scrollTop
        },
        children: [(0, Re.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Re.jsx)(nK, {
            selfName: oe ? Fe.getPlayerName() : "",
            giftRecipient: ke,
            suggestionsVersion: null !== (ie = null === ae || void 0 === ae ? void 0 : ae.seq) && void 0 !== ie ? ie : 0,
            pulseSignal: Ze,
            disabled: Bi || !oe
          })
        }), ae && (0, Re.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            ce(null)
          },
          children: [(0, Re.jsx)(dK.b, {
            showSignal: ae.seq
          }), ZK.c, " ", Ue("store:giftSent", {
            name: ae.name
          })]
        }, ae.seq), !ae && Ye && (0, Re.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Ue(Ye)
        }), ki && qi.claimFailed, (0, Re.jsx)(KF, {
          layout: Mi,
          mountAtOnce: null !== ne.current,
          bundleGift: "gift" === bi ? {
            recipientName: zi,
            lookingUp: "pending" === ke.recipient.status,
            busy: Bi,
            onNeedRecipient: Ne,
            onSent: ee => {
              (0, Xi.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), di({
                name: ee,
                cosmetics: ke.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, ZK.p)(ii),
          busy: Bi,
          highlightItem: xe,
          onOpen: function(ee) {
            (0, Xi.reportAnalyticsClick)({
              id: "store.item_open",
              value: ee
            }), Be((0, Fi.h)(ee))
          },
          onAct: Wi,
          onNeedRecipient: Ne,
          onLogin: gi,
          dailyDropTile: ki && qi.tile,
          rankWearer: Ei,
          dealBanner: "self" === bi && null !== Ge && (0, Re.jsx)(cF, {
            view: Ge,
            highlight: xe,
            scrollSignal: ve,
            onScrolledIntoView: () => {
              me(0)
            }
          })
        }), "gift" !== bi && !(0, Ce.e)(Date.now()) && (0, Re.jsx)(kF, {}), qi.reveal]
      })
    }));
    var SF = He(2849),
      nF = He(9570),
      jF = He(9408),
      sF = He(2952),
      IF = He(2735),
      hF = He(2798),
      NF = He(2808),
      GF = He(2817),
      rF = He(2893),
      QF = He(2874),
      eJ = He(2411),
      iJ = He(2482),
      HJ = He(2434),
      yJ = He(2086),
      bJ = He(2823),
      MJ = He(2490);

    function KJ(ee) {
      let {
        show: ie
      } = ee;
      return ie ? (0, Re.jsx)(UJ, {}) : null
    }

    function UJ() {
      const {
        t: ee
      } = (0, Ke.v)(), {
        followsLeader: ie
      } = (0, IF.c)(), {
        loading: He,
        friends: be,
        requests: Fe,
        invites: oe
      } = (0, Ie.k)(), {
        userContext: ke
      } = (0, fe.b)(), [qe, Te] = (0, ye.useState)(MJ.l);
      (0, ye.useEffect)((() => {
        (0, MJ.c)()
      }), []);
      const pe = Fe.map((ee => ee.name)),
        {
          state: Xe,
          recentRequesters: ze
        } = (0, QF.l)(),
        Be = new Map([...("loaded" === Xe.status ? Xe.recentPlayers : []).map((ee => [ee.preview.name, ee])), ...ze.map((ee => [ee.name, ee]))]),
        Ee = (0, ye.useRef)(null),
        [de, We] = (0, ye.useState)(""),
        [te, Ze] = (0, ye.useState)("Enter"),
        [we, De] = (0, ye.useState)(null);

      function Pe() {
        de && (Ze("Loading"), (0, HJ.f)(de, "social_menu").then((ee => {
          if (Ee.current) switch (ee.kind) {
            case "sent":
              Ze("Success");
              break;
            case "becameFriends":
              Ze("BecameFriends");
              break;
            case "failed":
              De(ee.message), Ze("Error")
          }
        })))
      }
      return (0, ye.useEffect)((() => {
        if ("Enter" === te || "Loading" === te) return;
        const ee = setTimeout((() => {
          Ee.current.value = "", We(""), Ze("Enter")
        }), "Success" === te ? 1e3 : 4e3);
        return () => {
          clearTimeout(ee)
        }
      }), [te]), (0, Re.jsx)("div", {
        className: "SocialMenu",
        children: (0, Re.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Re.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Re.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Re.jsx)(GF.c, {
                label: ee("socialBar:addFriend")
              }), (0, Re.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Re.jsxs)("div", {
                  className: Me()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${te}`]: !0
                  }),
                  children: ["Loading" === te && (0, Re.jsx)(Oe.b, {}), "Success" === te && (0, Re.jsx)(Ue.e, {
                    name: "check"
                  }), "BecameFriends" === te && (0, Re.jsx)(Re.Fragment, {
                    children: ee("socialBar:nowFriends", {
                      playerName: de
                    })
                  }), "Error" === te && we && (0, Re.jsx)(Re.Fragment, {
                    children: ee(we.translationKey, we.params)
                  })]
                }), (0, Re.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Re.jsx)(ge.d, {
                    className: "PlayerSearchInput",
                    placeholderText: ee("socialBar:enterPlayerName"),
                    domRef: Ee,
                    onValueChange: ee => {
                      We((0, Ve.l)(ee)), Ee.current.value = (0, Ve.l)(ee)
                    },
                    onEnter: () => {
                      de && (0, Xi.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Pe()
                    }
                  }), (0, Re.jsxs)(Je.c, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Pe()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Re.jsx)(Ue.e, {
                      name: "user-plus"
                    }), " ", ee("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Re.jsx)(bJ.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), oe.length > 0 && (0, Re.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Re.jsx)(GF.c, {
                label: ee("socialBar:invites"),
                meta: oe.length
              }), oe.map((ie => (0, Re.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Re.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Re.jsx)(eJ.e, {
                    invite: ie
                  })
                }), (0, Re.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Re.jsx)(eJ.g, {
                    invite: ie
                  })
                }), (0, Re.jsx)(Je.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, iJ.h)(ie)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${ie.destination.kind}`
                  },
                  children: ee("general:join")
                }), (0, Re.jsx)(qi.g, {
                  tooltipInner: (0, Re.jsx)(Re.Fragment, {
                    children: ee("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Re.jsx)(Je.e, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === qe || void 0 === qe ? void 0 : qe.kind) && qe.inviteId === ie.id,
                    onClick: () => {
                      Ie.b.declineInvite(ie.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${ie.destination.kind}`
                    },
                    children: (0, Re.jsx)(Ue.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, ie.id)))]
            }), (0, Re.jsxs)("div", {
              className: Me()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !He && 0 === Fe.length
              }),
              children: [(0, Re.jsx)(GF.c, {
                label: (0, Re.jsxs)(Re.Fragment, {
                  children: [(0, Re.jsx)(Ue.e, {
                    name: yJ.g
                  }), " ", ee("socialBar:requests")]
                }),
                meta: (0, Re.jsxs)(Re.Fragment, {
                  children: [Fe.length, Fe.length === fi.m && (0, Re.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: ee("socialBar:limitReached")
                  })]
                })
              }), He && (0, Re.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Re.jsx)(Oe.b, {})
              }), !He && 0 === Fe.length && (0, Re.jsx)("div", {
                className: "SocialMenuEmpty",
                children: ee("socialBar:noFriendRequests")
              }), !He && Fe.length > 0 && (0, Re.jsx)("div", {
                className: "PlayerRows",
                children: (0, Re.jsx)(gM.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Fe],
                  children: Fe.map(((ie, He) => {
                    const ye = Be.get(ie.name);
                    return (0, Re.jsxs)(NF.f, {
                      playerSocialPreview: ie,
                      zIndex: Fe.length - He,
                      padDefaultFocus: (0, MJ.h)(qe, ie.name, He),
                      status: ye && (0, Re.jsx)(rF.d, {
                        gameNameWithVariation: ye.gameNameWithVariation,
                        isPrivateLobby: ye.isPrivateLobby
                      }),
                      children: [(0, Re.jsx)(qi.g, {
                        tooltipInner: (0, Re.jsx)(Re.Fragment, {
                          children: ee("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Re.jsx)(Je.c, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Te((0, MJ.e)(pe, He)), (0, HJ.c)(ie.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Re.jsx)(Ue.e, {
                            name: "check"
                          })
                        })
                      }), (0, Re.jsx)(qi.g, {
                        tooltipInner: (0, Re.jsx)(Re.Fragment, {
                          children: ee("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Re.jsx)(Je.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Te((0, MJ.e)(pe, He)), (0, HJ.c)(ie.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Re.jsx)(Ue.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${ie.name}_${ie.isError}`)
                  }))
                })
              })]
            }), (0, Re.jsx)(rF.h, {})]
          }), (0, Re.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Re.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Re.jsx)(GF.c, {
                label: ee("socialBar:party")
              }), (0, Re.jsx)(hF.e, {})]
            }), (0, Re.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Re.jsx)(GF.c, {
                label: (0, Re.jsxs)(Re.Fragment, {
                  children: [(0, Re.jsx)(Ue.e, {
                    name: yJ.c
                  }), " ", ee("socialBar:friends")]
                }),
                meta: (0, Re.jsxs)(Re.Fragment, {
                  children: [be.length, be.length >= (0, fi.c)(ke.getPlayerRanks()) && (0, Re.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: ee("socialBar:limitReached")
                  })]
                })
              }), He && (0, Re.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Re.jsx)(Oe.b, {})
              }), !He && 0 === be.length && (0, Re.jsx)("div", {
                className: "SocialMenuEmpty",
                children: ee("socialBar:noFriends")
              }), !He && be.length > 0 && (0, Re.jsx)("div", {
                className: "PlayerRows",
                children: (0, Re.jsx)(gM.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [be],
                  children: be.map(((ee, He) => (0, Re.jsx)(NF.f, {
                    playerSocialPreview: ee,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: ee => {
                      Ie.b.removeFriendFromState(ee)
                    },
                    zIndex: be.length - He,
                    children: (0, Re.jsx)(NF.b, {
                      friend: ee,
                      followsLeader: ie,
                      analyticsSurface: "social_menu"
                    })
                  }, `${ee.name}_${ee.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var FJ = He(2641),
      JJ = He(4014),
      oJ = He(1892),
      RJ = He(4012),
      kJ = He(4020);

    function qJ(ee) {
      let {
        count: ie,
        claiming: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return 0 === ie ? null : (0, Re.jsx)(Je.m, {
        className: "SeasonPassClaimAllButton",
        loading: He,
        onClick: () => {
          JJ.f.claimAll().catch((ee => {
            console.error("Failed to claim all season pass rewards", ee)
          }))
        },
        children: ye("seasonPass:claimAll", {
          count: ie
        })
      })
    }

    function fJ(ee) {
      let {
        view: ie,
        claiming: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)(), {
        userContext: be
      } = (0, fe.b)(), {
        config: Me,
        state: Fe,
        tier: Je,
        xpIntoTier: oe,
        xpForNextTier: ke
      } = ie, qe = Date.now(), Te = (0, kJ.j)(ie, qe), pe = Je >= Me.tierCount, Xe = Te && !pe && ke > 0, ze = ke > 0 && !pe ? Math.min(100, oe / ke * 100) : 100, Be = Fe.xpToday >= Me.maxXpPerDay, Ee = null !== ie.xpBoost && ie.xpBoost.endsAtMs > qe && !Be ? ie.xpBoost : null;
      return (0, Re.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, Re.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, Re.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: ye("seasonPass:title", {
              season: Fe.seasonNumber
            })
          })
        }), (0, Re.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, Re.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, Re.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: ye("seasonPass:tier"),
              "aria-label": `${ye("seasonPass:tier")} ${Je}`,
              children: Je
            }), (0, Re.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(ze),
              children: [(0, Re.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${ze}%`
                }
              }), (0, Re.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [pe && ye("seasonPass:passComplete"), Xe && ye("seasonPass:xpProgress", {
                  xp: oe,
                  xpForNextTier: ke
                })]
              })]
            }), Xe && (0, Re.jsxs)(Re.Fragment, {
              children: [(0, Re.jsx)(Ue.e, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, Re.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: Je + 1
              })]
            })]
          }), (0, Re.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, Re.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, Re.jsx)(Ue.e, {
                name: "hourglass"
              }), " ", Te ? ye("seasonPass:endsIn", {
                time: (0, RJ.d)((ie.endsAtMs - qe) / 6e4)
              }) : (0, oU.e)(ie.claimEndsAtMs, ye, qe)]
            }), Te && !pe && (0, Re.jsx)("span", {
              className: Be ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: Be ? ye("seasonPass:dailyCapReached") : ye("seasonPass:dailyXp", {
                xp: Fe.xpToday,
                cap: Me.maxXpPerDay
              })
            }), Te && !pe && Ee && (0, Re.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, Re.jsx)(Ue.e, {
                name: "angles-up"
              }), " ", ye("seasonPass:xpBoostActive", {
                multiplier: Ee.multiplier,
                time: (0, RJ.d)(Math.ceil((Ee.endsAtMs - qe) / 6e4))
              })]
            }), Te && !pe && !Be && !Ee && (0, Re.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: ye("seasonPass:playToEarn")
            }), be.type === oJ.c.ANONYMOUS && (0, Re.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: ye("seasonPass:logInToKeep")
            })]
          })]
        }), (0, Re.jsx)(qJ, {
          count: ie.claimable.length,
          claiming: He
        })]
      })
    }
    var TJ = He(3385),
      pJ = He(3394);

    function XJ(ee) {
      return null !== (0, oU.x)(ee) || null !== (0, oU.p)(ee)
    }
    let zJ = null;

    function BJ() {
      var ee;
      null === (ee = zJ) || void 0 === ee || ee.tearDownNotification()
    }

    function EJ(ee) {
      let {
        reward: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)(), {
        userContext: ye
      } = (0, fe.b)(), be = (0, oU.x)(ie);
      return (0, Re.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, Re.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, oU.j)(ie, He)
        }), null !== be && (0, Re.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, Re.jsx)(TJ.d, {
            profileEffect: be,
            name: ye.getPlayerName(),
            cosmetics: ye.getPlayerCosmetics()
          })
        }), null === be && (0, Re.jsx)(gJ, {
          reward: ie
        })]
      })
    }

    function gJ(ee) {
      let {
        reward: ie
      } = ee;
      const {
        userContext: He
      } = (0, fe.b)(), be = (0, ye.useRef)(null), {
        previewEmote: Me,
        playEmote: Ke
      } = (0, pJ.d)(), Ue = (0, ye.useMemo)((() => (0, oU.p)(ie)), [ie]), Fe = Ue.emote;
      return (0, Re.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, Re.jsx)(ye.Suspense, {
          fallback: (0, Re.jsx)(Oe.b, {}),
          children: (0, Re.jsx)(IK.c, {
            ref: be,
            framing: "store",
            forcedCosmetics: Ue.cosmetics,
            oo: Me.id,
            emotePlaySeq: Me.seq,
            onReady: () => {
              var ee, ie;
              null === (ee = be.current) || void 0 === ee || ee.resetCamera(), null === (ie = be.current) || void 0 === ie || ie.setAllCosmetics(He.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== Fe && Ke(Fe)
            }
          })
        })
      })
    }

    function OJ(ee) {
      let {
        waitingCount: ie
      } = ee;
      const {
        t: He
      } = (0, Ke.v)();
      return (0, Se.usePurchasesAllowed)() ? (0, Re.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [ie > 0 && (0, Re.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === ie ? He("seasonPass:hyperRewardWaiting") : He("seasonPass:hyperRewardsWaiting", {
            count: ie
          })
        }), (0, Re.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, Re.jsxs)(Je.q, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, Fi.r)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, Re.jsx)(ue.e, {}), " ", He("homePage:getHyperRank")]
          }), ie > 0 && (0, Re.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: ie
          })]
        })]
      }) : null
    }
    var dJ = He(34959);

    function WJ(ee) {
      let {
        stub: ie,
        name: He
      } = ee;
      const {
        t: ye
      } = (0, Ke.v)();
      return (0, Re.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, Re.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: ie
        }), (0, Re.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, Re.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: ye("seasonPass:trackTicketPass")
          }), (0, Re.jsx)("span", {
            className: "SeasonPassTicketName",
            children: He
          })]
        })]
      })
    }

    function tJ(ee) {
      var ie, He;
      let {
        view: be,
        claimingKeys: Me,
        hyperWaitingCount: Fe,
        onClaim: Je
      } = ee;
      const {
        t: oe
      } = (0, Ke.v)(), ke = (0, ye.useRef)(null), {
        config: qe,
        tier: fe,
        xpIntoTier: Te,
        xpForNextTier: pe,
        state: Xe
      } = be, ze = (0, kJ.j)(be), Be = (0, ye.useRef)(!1), Ee = null !== (ie = null === (He = be.claimable[0]) || void 0 === He ? void 0 : He.tier) && void 0 !== ie ? ie : Math.min(fe + 1, qe.tierCount);
      (0, ye.useLayoutEffect)((() => {
        if (Be.current) return;
        const ee = ke.current,
          ie = ee.querySelector(`[data-tier="${Ee}"]`).getBoundingClientRect(),
          He = ee.getBoundingClientRect();
        ee.scrollLeft += ie.left - He.left - .3 * ee.clientWidth, ee.scrollTop += ie.top - He.top - .3 * ee.clientHeight
      }), [Ee]), (0, ye.useEffect)((() => {
        const ee = ke.current;

        function ie(ie) {
          Be.current = !0, Math.abs(ie.deltaY) <= Math.abs(ie.deltaX) || ee.scrollWidth <= ee.clientWidth || (ie.preventDefault(), ee.scrollLeft += ie.deltaY)
        }
        return ee.addEventListener("wheel", ie, {
          passive: !1
        }), () => {
          ee.removeEventListener("wheel", ie)
        }
      }), []);
      const ge = pe > 0 ? Te / pe : 1;
      return (0, Re.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, Re.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, Re.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, Re.jsx)(WJ, {
              stub: (0, Re.jsx)(ue.e, {}),
              name: oe("seasonPass:hyperTrack")
            }), !Xe.hasHyperRank && (0, Re.jsx)(OJ, {
              waitingCount: Fe
            })]
          }), (0, Re.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, Re.jsx)(WJ, {
              stub: (0, Re.jsx)(Ue.e, {
                name: "star"
              }),
              name: oe("seasonPass:freeTrack")
            }), (0, Re.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: oe("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, Re.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: ke,
          onPointerDown: () => {
            Be.current = !0
          },
          children: (0, Re.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: qe.tiers.map((ee => {
              const ie = ee.tier,
                He = function(ee, ie, He) {
                  if (ee <= ie) return "reached";
                  return He && ee === ie + 1 ? "earning" : "locked"
                }(ie, fe, ze),
                ye = "earning" === He;
              return (0, Re.jsx)(ZJ, {
                tierRewards: ee,
                nodeState: He,
                progress: ye ? ge : 0,
                freeState: be.tileState({
                  tier: ie,
                  track: "free"
                }),
                hyperState: be.tileState({
                  tier: ie,
                  track: "hyper"
                }),
                freeClaiming: Me.has((0, kJ.l)({
                  tier: ie,
                  track: "free"
                })),
                hyperClaiming: Me.has((0, kJ.l)({
                  tier: ie,
                  track: "hyper"
                })),
                hasHyperRank: Xe.hasHyperRank,
                onClaim: Je
              }, ie)
            }))
          })
        })]
      })
    }
    const ZJ = (0, ye.memo)((function(ee) {
      let {
        tierRewards: ie,
        nodeState: He,
        progress: ye,
        freeState: be,
        hyperState: Ke,
        freeClaiming: Ue,
        hyperClaiming: Fe,
        hasHyperRank: Je,
        onClaim: oe
      } = ee;
      const {
        tier: ke
      } = ie;
      return (0, Re.jsxs)("div", {
        className: Me()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== He
        }),
        "data-tier": ke,
        children: [(0, Re.jsx)(wJ, {
          tier: ke,
          track: "hyper",
          reward: ie.hyper,
          tileState: Ke,
          claiming: Fe,
          padlock: !Je && "claimed" !== Ke,
          onClaim: oe
        }), (0, Re.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, Re.jsx)("span", {
            className: Me()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === He
            }),
            children: "earning" === He && (0, Re.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * ye + "%"
              }
            })
          }), (0, Re.jsx)("span", {
            className: Me()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === He
            })
          }), (0, Re.jsx)(dJ.e, {
            tier: ke,
            state: He,
            progress: ye
          })]
        }), (0, Re.jsx)(wJ, {
          tier: ke,
          track: "free",
          reward: ie.free,
          tileState: be,
          claiming: Ue,
          padlock: !1,
          onClaim: oe
        })]
      })
    }));

    function wJ(ee) {
      let {
        tier: ie,
        track: He,
        reward: ye,
        tileState: be,
        claiming: Me,
        padlock: Ke,
        onClaim: Ue
      } = ee;
      return ye ? (0, Re.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${He}`,
        children: (0, Re.jsx)(TU.e, {
          reward: ye,
          tileState: be,
          track: He,
          size: "large",
          onClaim: () => {
            Ue({
              tier: ie,
              track: He
            })
          },
          claiming: Me,
          padlock: Ke,
          onPreview: XJ(ye) ? () => {
            ! function(ee) {
              const ie = bi.NotificationProvider.showCustomPopup({
                body: (0, Re.jsx)(EJ, {
                  reward: ee
                })
              });
              zJ = ie, ie.getResult().finally((() => {
                zJ === ie && (zJ = null)
              }))
            }(ye)
          } : void 0
        })
      }) : (0, Re.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${He}`
      })
    }

    function DJ(ee) {
      let {
        show: ie
      } = ee;
      return ie ? (0, Re.jsx)(PJ, {}) : null
    }

    function PJ() {
      const {
        t: ee
      } = (0, Ke.v)(), ie = (0, JJ.i)();
      return (0, ye.useEffect)((() => BJ), []), (0, Re.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === ie.status && (0, Re.jsx)(Oe.b, {}), "error" === ie.status && (0, Re.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, Re.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: ee("seasonPass:errorLoad")
          }), (0, Re.jsx)(Je.c, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              JJ.f.retry()
            },
            children: ee("seasonPass:retry")
          })]
        }), "noSeason" === ie.status && (0, Re.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, Re.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, oU.g)(ee)
          })
        }), "loaded" === ie.status && (0, Re.jsx)(AJ, {
          view: ie.view,
          claimingKeys: ie.claimingKeys
        })]
      })
    }

    function AJ(ee) {
      let {
        view: ie,
        claimingKeys: He
      } = ee;
      const ye = ie.config.tiers.filter((ee => "needsHyper" === ie.tileState({
          tier: ee.tier,
          track: "hyper"
        }))).length,
        be = He.size > 0;
      return (0, Re.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, Re.jsx)(fJ, {
          view: ie,
          claiming: be
        }), (0, Re.jsx)(tJ, {
          view: ie,
          claimingKeys: He,
          hyperWaitingCount: ye,
          onClaim: YJ
        }), (0, Re.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, Re.jsx)(qJ, {
            count: ie.claimable.length,
            claiming: be
          }), !ie.state.hasHyperRank && (0, Re.jsx)(OJ, {
            waitingCount: ye
          })]
        })]
      })
    }

    function YJ(ee) {
      JJ.f.claim(ee).catch((ee => {
        console.error("Failed to claim season pass reward", ee)
      }))
    }
    var VJ = He(5175);
    var aJ = He(3179);
    const cJ = ee => {
        let {
          action: ie,
          padAction: He
        } = ee;
        const {
          isTouchScreen: ye
        } = (0, We.m)(["isTouchScreen"]), be = (0, Ny.A)();
        return ye && !be ? null : (0, Re.jsx)(ly.e, {
          className: "EverythingMenuTabKey",
          noaAction: ie,
          padHidesKey: !0,
          padMenuShortcut: He
        })
      },
      xJ = (0, ye.memo)((function() {
        const {
          t: ee
        } = (0, Ke.v)(), {
          gameState: ie,
          openEverythingMenuName: He,
          crosshairGameView: be,
          everythingMenuOverLoadingScreen: Ue
        } = (0, We.m)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: Fe
        } = (0, fe.b)(), oe = (0, fb.h)(Date.now()), ke = (0, Se.usePurchasesAllowed)(), qe = (0, Fi.M)(), {
          view: Te
        } = (0, TH.w)(), pe = "dot" === qe || null === qe && "ready" === (null === Te || void 0 === Te ? void 0 : Te.kind), ze = (ee, ie) => (0, Re.jsx)(cJ, {
          action: ee,
          padAction: ie
        }), [Be, Ee] = (0, ye.useState)(null), ge = (0, ye.useRef)(null), Oe = (0, ye.useRef)(null);
        (0, ye.useEffect)((() => {
          var ee;
          const ie = null === (ee = Oe.current) || void 0 === ee ? void 0 : ee.querySelector(".EverythingMenuTabActive");
          null === ie || void 0 === ie || ie.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [He]);
        const de = {
            ..."inGame" === ie ? {} : (0, Je.R)({
              focusOnClick: !1
            }),
            ...Ob.e
          },
          te = ee => {
            const ie = (0, db.f)((ie => {
              (0, Je.O)(ie.currentTarget), We.e.set({
                openEverythingMenuName: ee
              })
            }), "pointerup");
            return {
              ...de,
              onPointerDown: ee => {
                de.onPointerDown(ee), ie.onPointerDown(ee)
              },
              onPointerUp: ee => {
                de.onPointerUp(ee), ie.onPointerUp(ee)
              },
              onClick: ie.onClick
            }
          },
          Ze = null !== He;
        (0, ye.useEffect)((() => {
          He === Yi.r.CUSTOMISATION ? (0, Xi.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, jK.g)()
          }) : null === He && We.e.get("everythingMenuOverLoadingScreen") && We.e.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [He]);
        const De = He !== Yi.r.COSMETIC_SHOP && !be;
        async function Pe() {
          await async function() {
            if (!Be) return;
            await Be(), Ee(null)
          }(), We.e.set({
            openEverythingMenuName: null
          })
        }
        const Ae = (0, ye.useRef)(null),
          Ye = (0, ye.useCallback)((() => null !== Ae.current && (0, jF.h)(Ae.current)), []);

        function Ve() {
          Ye() || Pe()
        }(0, ye.useEffect)((() => (0, RK.s)(Ye)), [Ye]);
        const ae = (0, ye.useMemo)((() => "inGame" === ie ? {
            text: ee("settingsMenu:exitGame"),
            onClick: () => {
              (0, nF.c)()
            }
          } : (0, we.isDiscordClient)() ? {
            text: ee("settingsMenu:exitGame"),
            onClick: () => {
              Ai.l.discordActivity().then((ee => {
                ee.exit("User exited the game")
              }))
            }
          } : null), [ie, ee]),
          ce = Ze && !be,
          xe = "inGame" !== ie,
          Le = ce && xe;
        (0, ye.useLayoutEffect)((() => {
          if (Le) return We.e.set({
            menuCoversPage: !0
          }), () => {
            We.e.set({
              menuCoversPage: !1
            })
          }
        }), [Le]);
        const Ce = (0, ye.useRef)(null);
        ! function(ee, ie) {
          (0, ye.useEffect)((() => {
            var He;
            const ye = (0, VJ.e)();
            if (!ie || null === ye || !(0, VJ.c)({
                site: we.siteUsed,
                isMobileApp: (0, Xe.isMobileApp)(),
                isTouchScreen: We.e.get("isTouchScreen")
              })) return;
            const be = null === (He = ee.current) || void 0 === He ? void 0 : He.querySelector(".EverythingMenuBackButton");
            return be ? ye(be) : void 0
          }), [ee, ie])
        }(Ce, ce && !(0, RK.j)(He) && "inGame" === ie);
        const ve = (0, Re.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Ve,
          children: (0, Re.jsx)(Je.i, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Re.jsx)(Wb.e, {
          showing: Ze,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: He === Yi.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === ie,
          children: (0, Re.jsx)(Zb.d, {
            className: Me()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: Ue
            }),
            show: ce,
            children: (0, Re.jsx)(tb.e, {
              close: Ve,
              togglePointerLock: !1,
              children: (0, Re.jsxs)("div", {
                className: "EverythingMenu",
                ref: Ce,
                children: [!(0, RK.j)(He) && (0, Re.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Re.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [ae && (0, Re.jsx)(Je.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        ae.onClick()
                      },
                      children: ae.text
                    }), Ze && ke && (0, Re.jsx)("div", {
                      ...de,
                      className: "EverythingMenuWallet",
                      title: ee("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Fi.r)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Re.jsx)(SF.e, {})
                    })]
                  }), (0, Re.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: Oe,
                    "data-pad-tabs": "1",
                    children: [(0, Re.jsxs)("div", {
                      ...te(Yi.r.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.SETTINGS ? "true" : void 0,
                      className: Me()("EverythingMenuTab", {
                        EverythingMenuTabActive: He === Yi.r.SETTINGS
                      }),
                      children: [ee("general:settings"), ze("OpenSettings", "pause")]
                    }), (0, Re.jsxs)("div", {
                      ...te(Yi.r.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.CUSTOMISATION ? "true" : void 0,
                      className: Me()("EverythingMenuTab", {
                        EverythingMenuTabActive: He === Yi.r.CUSTOMISATION
                      }),
                      children: [ee("general:player"), ze("OpenCharacterCustomization")]
                    }), Xe.featureFlags.useSocialFeatures && (0, Re.jsxs)("div", {
                      ...te(Yi.r.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.SOCIAL ? "true" : void 0,
                      className: Me()("EverythingMenuTab", {
                        EverythingMenuTabActive: He === Yi.r.SOCIAL
                      }),
                      ...(0, Xi.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, He === Yi.r.SOCIAL),
                      children: [ee("socialBar:social"), (0, Re.jsx)(FJ.b, {})]
                    }), oe && (0, Re.jsx)("div", {
                      ...te(Yi.r.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.SEASON_PASS ? "true" : void 0,
                      className: Me()("EverythingMenuTab", {
                        EverythingMenuTabActive: He === Yi.r.SEASON_PASS
                      }),
                      children: ee("seasonPass:title", {
                        season: oe.seasonNumber
                      })
                    }), (0, TH.o)(Te) && (0, Re.jsxs)("div", {
                      ...te(Yi.r.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.COSMETIC_SHOP ? "true" : void 0,
                      className: Me()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: He === Yi.r.COSMETIC_SHOP
                      }),
                      children: [(0, Re.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: ee("store:title")
                      }), "new" === qe && (0, Re.jsx)(sU, {}), pe && (0, Re.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === ie && (0, Re.jsxs)("div", {
                      ...te(Yi.r.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": He === Yi.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Me()("EverythingMenuTab", {
                        EverythingMenuTabActive: He === Yi.r.LOBBY_LEADERBOARD
                      }),
                      children: [ee("general:lobby"), ze("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Re.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: ve
                  })]
                }), (0, RK.j)(He) && ve, (0, Re.jsxs)("div", {
                  ref: Ae,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": xe ? "1" : "0.85"
                  },
                  children: [(0, Re.jsx)(kb, {
                    show: He === Yi.r.SETTINGS,
                    setBeforeResumeCallback: Ee
                  }), (0, Re.jsx)(Bb, {
                    show: He === Yi.r.CUSTOMISATION
                  }), (0, Re.jsx)(ye.Suspense, {
                    fallback: null,
                    children: (0, Re.jsx)(HK, {
                      show: He === Yi.r.SHOP
                    })
                  }), (0, Re.jsx)(TK, {
                    show: He === Yi.r.LOBBY_LEADERBOARD
                  }), ke && (0, Re.jsx)(lF, {
                    show: He === Yi.r.COSMETIC_SHOP
                  }), !ke && (0, Re.jsx)(AF, {
                    show: He === Yi.r.COSMETIC_SHOP
                  }), (0, Re.jsx)(KJ, {
                    show: He === Yi.r.SOCIAL
                  }), (0, Re.jsx)(DJ, {
                    show: He === Yi.r.SEASON_PASS
                  })]
                }), !(0, Xe.isMobileApp)() && (0, aJ.n)() && (0, wb.d)(Fe.getPlayerRanks()) && (0, Re.jsx)(Zb.d, {
                  ref: ge,
                  className: "EverythingMenuBannerDiv",
                  show: De,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Re.jsx)(sF.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: ge
                    },
                    showing: Ze && De,
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
  34945: (ee, ie, He) => {
    He.d(ie, {
      d: () => fe,
      g: () => pe
    });
    He(34947);
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1127),
      Ue = He(1438),
      Fe = He(2714),
      Je = He(1323),
      oe = He(2479),
      Re = He(3349),
      ke = He(2337),
      qe = He(1228);

    function fe(ee) {
      let {
        endsAt: ie,
        className: He
      } = ee;
      return (0, qe.jsxs)("span", {
        className: Me()("NewPlayerDealClock", He),
        children: [(0, qe.jsx)(Je.e, {
          name: "hourglass"
        }), (0, qe.jsx)(Fe.f, {
          toTime: ie
        })]
      })
    }

    function Te(ee) {
      let {
        offered: ie,
        needsLogin: He,
        busy: ye,
        highlight: be,
        onBuy: Fe
      } = ee;
      const {
        t: Je
      } = (0, Ke.v)(), {
        pack: fe
      } = ie, Te = (0, Re.h)(ie.package);
      return (0, qe.jsxs)("div", {
        className: Me()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: be
        }),
        children: [(0, qe.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, qe.jsx)("img", {
            src: ke.c[ie.tier],
            alt: "",
            draggable: !1
          }), (0, qe.jsx)("span", {
            className: "NewPlayerDealTag",
            children: Je("newPlayerDeal:tag")
          })]
        }), (0, qe.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, qe.jsx)(oe.d, {
            className: "NewPlayerDealPackAmount",
            amount: fe.gems
          })
        }), (0, qe.jsx)(Ue.m, {
          className: "NewPlayerDealBuy",
          loading: ye,
          onClick: Fe,
          ariaLabel: Je("newPlayerDeal:buyLabel", {
            amount: fe.gems.toLocaleString(),
            price: Te
          }),
          children: Je(He ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: Te
          })
        })]
      })
    }

    function pe(ee) {
      let {
        view: ie,
        needsLogin: He,
        busy: be,
        highlight: Ue,
        onBuy: Fe
      } = ee;
      const {
        t: Je
      } = (0, Ke.v)();
      return (0, qe.jsxs)("div", {
        className: Me()("NewPlayerDealPacks", ie.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [ie.packs.map(((ee, ie) => (0, qe.jsxs)(ye.Fragment, {
          children: [ie > 0 && (0, qe.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, qe.jsx)("i", {})
          }), (0, qe.jsx)(Te, {
            offered: ee,
            needsLogin: He,
            busy: be,
            highlight: Ue === ee.pack.packageId,
            onBuy: () => {
              Fe(ee)
            }
          })]
        }, ee.pack.packageId))), (0, qe.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, qe.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: Je("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34951: (ee, ie, He) => {
    He.d(ie, {
      d: () => te,
      h: () => we
    });
    He(34947);
    var ye = He(3345),
      be = He(1464),
      Me = He(2330),
      Ke = He(3335),
      Ue = He(3307),
      Fe = He(3341),
      Je = He(3293),
      oe = He(1127),
      Re = He(1340),
      ke = He(1075),
      qe = He(1438),
      fe = He(1323),
      Te = He(2479),
      pe = He(2854),
      Xe = He(2694),
      ze = He(2697),
      Be = He(2703),
      Ee = He(1228);
    const ge = new Fe.d(Je.getBillingClient, Je.addPurchaseRecordListener);
    let Oe = !1;

    function de(ee, ie) {
      null !== ee && (0, Xe.q)(ee) || ((0, be.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${ie.pack.packageId}`
      }), null !== ee && (0, Xe.t)(ee), te(ie.pack.gems))
    }

    function We(ee, ie, He) {
      const be = (0, Xe.c)(ie);
      switch (ee.kind) {
        case "completed":
          de(be, He);
          break;
        case "pending":
          Me = ee.intentId, Ke = () => {
            pe.h.refresh(), de(be, He)
          }, Oe || (Oe = !0, ge.listen()), ge.follow(Me, Ke);
          break;
        case "unknownPackage":
          (0, Xe.H)(ie, null);
          break;
        case "failed":
          ee.errorKey === ye.c.newPlayerDealUnavailable && (0, Xe.H)(ie, null)
      }
      var Me, Ke
    }

    function te(ee) {
      Re.NotificationProvider.showCustomPopup({
        body: ie => (0, Ee.jsx)(Ze, {
          gems: ee,
          close: ie
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function Ze(ee) {
      let {
        gems: ie,
        close: He
      } = ee;
      const {
        t: ye
      } = (0, oe.v)();
      return (0, Ee.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, Ee.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, Ee.jsx)(fe.e, {
            name: "circle-check"
          }), (0, Ee.jsx)(Te.d, {
            amount: ie
          }), (0, Ee.jsx)("span", {
            children: ye("newPlayerDeal:added")
          })]
        }), (0, Ee.jsx)(qe.m, {
          className: "NewPlayerDealAddedOk",
          onClick: He,
          children: ye("general:ok")
        })]
      })
    }

    function we(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.b;
      const {
        userContext: He
      } = (0, ke.b)(), {
        purchaseUnderWay: ye,
        notice: be,
        buy: Fe
      } = (0, Ue.c)(ie), Je = (0, ze.k)(), oe = He.mayBuy() || (0, Me.guestsMayBuy)(), Re = null === Je ? !oe : Je.guest && !He.isLoggedIn();
      return {
        purchaseUnderWay: ye,
        notice: be,
        needsLogin: Re,
        buyPack: function(ye, be) {
          (0, Xe.z)("new_player_deal.buy", (0, Be.b)(ye.arm, ee, be.pack.packageId)), null === Je ? Fe(function(ee) {
            return {
              sku: ee.pack.packageId,
              tier: ee.tier,
              amount: ee.pack.gems,
              bonusPercent: 0,
              package: ee.package
            }
          }(be), null, {
            followPending: !1
          }).then((ee => {
            We(ee, He, be)
          })) : Re ? ie(be.pack.packageId, null) : de((0, Xe.c)(He), be)
        }
      }
    }
  },
  5358: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5030),
      Ke = He(1127),
      Ue = He(1323),
      Fe = He(1438),
      Je = He(1490),
      oe = He(1340),
      Re = He(2613),
      ke = He(1228);
    const qe = {
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

    function fe(ee) {
      let {
        platform: ie
      } = ee;
      const He = "youtube" === ie;
      return (0, ke.jsxs)("span", {
        className: be()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: He
        }),
        children: [He && (0, ke.jsx)(Re.c, {
          variant: "white"
        }), !He && (0, ke.jsx)(Ue.e, {
          name: qe[ie].icon,
          kit: "brands"
        })]
      })
    }

    function Te(ee) {
      let {
        platform: ie,
        link: He,
        editable: ye,
        userContext: be,
        onLinksUpdated: Re
      } = ee;
      const {
        t: Te
      } = (0, Ke.v)(), pe = qe[ie];
      if (!He && !ye) return null;

      function Xe() {
        var ee;
        if (!be || !Re) return;
        oe.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: pe.name
            }
          },
          prefixText: Me.x[ie],
          placeholderText: "playBloxd",
          initialValue: null !== (ee = null === He || void 0 === He ? void 0 : He.handle) && void 0 !== ee ? ee : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: He ? "general:remove" : void 0
        }).getResult().then((async ee => {
          if ("notificationTornDown" !== ee && null !== ee) try {
            "submit" === ee.type ? await Je.b.setSocialLink(be, ie, ee.value) : await Je.b.clearSocialLink(be, ie), Re()
          } catch (He) {
            console.error("Failed to update social link", He), oe.NotificationProvider.showAlertPopup({
              title: He.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (He) {
        const ee = `@${He.handle}`;
        return (0, ke.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: pe.color
          },
          href: He.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ke.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ke.jsx)(fe, {
              platform: ie
            }), (0, ke.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ke.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: ee
              })
            })]
          }), ye && (0, ke.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Fe.R)({
              stopPropagation: !0
            }),
            onClick: ee => {
              ee.stopPropagation(), ee.preventDefault(), Xe()
            },
            children: (0, ke.jsx)(Ue.e, {
              name: "pen-to-square"
            })
          }), !ye && (0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ke.jsx)(Ue.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ke.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: pe.color
        },
        ...(0, Fe.R)(),
        onClick: () => {
          Xe()
        },
        children: [(0, ke.jsx)(fe, {
          platform: ie
        }), (0, ke.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: pe.name
          }), (0, ke.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Te("homePage:profileSocialLinkAdd")
          })]
        }), (0, ke.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ke.jsx)(Ue.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function pe(ee) {
      let {
        socialLinks: ie,
        editable: He = !1,
        userContext: ye,
        onLinksUpdated: be
      } = ee;
      if (!He && 0 === ie.length) return null;
      const Ke = new Map(ie.map((ee => [ee.platform, ee]))),
        Ue = He ? Me.v : ie.map((ee => ee.platform));
      return (0, ke.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ke.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ue.map((ee => (0, ke.jsx)(Te, {
            platform: ee,
            link: Ke.get(ee),
            editable: He,
            userContext: ye,
            onLinksUpdated: be
          }, ee)))
        })
      })
    }
  },
  34936: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(59),
      be = He(3791);

    function Me() {
      const [ee, ie] = (0, ye.useState)(!1);
      return (0, ye.useLayoutEffect)((() => {
        let ee = !0;
        return (0, be.f)().then((() => {
          ee && ie(!0)
        })), () => {
          ee = !1
        }
      }), []), ee
    }
  },
  34836: (ee, ie, He) => {
    He.d(ie, {
      b: () => Te,
      f: () => fe
    });
    He(34844);
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(34829);

    function Ue(ee, ie) {
      return Math.max(1, Math.round(ee * ie))
    }

    function Fe(ee, ie) {
      const He = ie * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        ye = function(ee, ie) {
          if (ee.lines) return Ue(ee.lineThickness, ie) % 2;
          if (ee.dot) return Ue(ee.dotSize, ie) % 2;
          return Je(ee, ie) % 2
        }(ee, ie),
        be = oe(ee.lineThickness * He, ye),
        Me = Ue(ee.lineLength, He),
        Ke = Math.round(ee.gap * He),
        Fe = ee.outline > 0 ? Ue(ee.outline, He) : 0,
        ke = [];
      if (ee.lines && (ke.push({
          x: be + Ke,
          y: 0,
          w: Me,
          h: be,
          arm: "right"
        }), ke.push({
          x: -Ke - Me,
          y: 0,
          w: Me,
          h: be,
          arm: "left"
        }), ke.push({
          x: 0,
          y: be + Ke,
          w: be,
          h: Me,
          arm: "down"
        }), ee.tStyle || ke.push({
          x: 0,
          y: -Ke - Me,
          w: be,
          h: Me,
          arm: "up"
        }), 0 === Ke && ke.push({
          x: 0,
          y: 0,
          w: be,
          h: be
        })), ee.dot) {
        const ie = oe(ee.dotSize * He, ye),
          Me = ee.lines && 0 === Ke && ee.dotSize > ee.lineThickness ? Math.max(ie, be + 2) : ie,
          Ue = (be - Me) / 2;
        ke.push({
          x: Ue,
          y: Ue,
          w: Me,
          h: Me
        })
      }
      const qe = ke.map((ee => ({
        ...ee,
        x: ee.x - Fe,
        y: ee.y - Fe,
        w: ee.w + 2 * Fe,
        h: ee.h + 2 * Fe
      })));
      let fe = null,
        Te = null;
      if (ee.circle) {
        const ie = Ue(ee.circleThickness, He),
          Me = function(ee, ie) {
            return ee + (ee % 2 === ie ? 0 : 1)
          }(Je(ee, He), ye),
          Ke = (be - Me) / 2;
        fe = Re(Ke, Me, ie), Fe > 0 && (Te = Re(Ke - Fe, Me + 2 * Fe, ie + 2 * Fe))
      }
      return {
        cell: be,
        fills: ke,
        outlines: Fe > 0 ? qe : [],
        ring: fe,
        ringOutline: Te
      }
    }

    function Je(ee, ie) {
      return Math.round(ee.circleRadius * ie * 2 + Ue(ee.circleThickness, ie))
    }

    function oe(ee, ie) {
      return Math.max(2 - ie, 2 * Math.round((ee - ie) / 2) + ie)
    }

    function Re(ee, ie, He) {
      const ye = 2 * He >= ie - 1;
      return {
        x: ee,
        y: ee,
        size: ie,
        border: Math.min(He, Math.floor(ie / 2)),
        filled: ye
      }
    }
    var ke = He(1228);
    const qe = 1.4;

    function fe(ee, ie) {
      return ee && ie ? `scale(${qe})` : "scale(1)"
    }

    function Te(ee) {
      return "classic" === ee.settings.style ? (0, ke.jsx)(ze, {
        ...ee
      }) : (0, ke.jsx)(te, {
        ...ee
      })
    }
    const pe = .125;

    function Xe(ee, ie) {
      const He = {};
      if (ee.color !== Ke.e.color && (He.color = (0, Ke.j)(ee.color)), ee.opacity !== Ke.e.opacity && (He.opacity = ee.opacity / 100), ee.outline !== Ke.e.outline || ee.outlineColor !== Ke.e.outlineColor) {
        const ie = ee.outline,
          ye = (0, Ke.j)(ee.outlineColor);
        He.textShadow = ie > 0 ? `-${ie}px 0 ${ye}, 0 ${ie}px ${ye}, ${ie}px 0 ${ye}, 0 -${ie}px ${ye}` : "none"
      }
      if (ee.size !== Ke.e.size) {
        const ye = ee.size / 100;
        He.fontSize = ie ? `calc(max(1.3rem, 18px) * ${ye})` : `calc(1.3rem * ${ye})`, He.marginTop = `-${pe}em`, He.transformOrigin = `50% calc(50% + ${pe}em)`
      }
      return He
    }

    function ze(ee) {
      let {
        settings: ie,
        touch: He,
        inPreview: ye,
        inEditor: Me,
        pressed: Ke = !1,
        pressRef: Ue
      } = ee;
      return (0, ke.jsx)("div", {
        className: be()("Crosshair", {
          Touch: He,
          CrosshairInPreview: ye,
          CrosshairInEditor: Me || ye
        }),
        ref: Ue,
        style: {
          transform: fe(Ke, ie.growOnClick),
          ...Xe(ie, He)
        },
        children: "+"
      })
    }

    function Be(ee, ie) {
      return ee / ie + "px"
    }

    function Ee(ee, ie, He, ye) {
      return {
        ...de(ee, ie, He),
        width: Be(ee.w, He),
        height: Be(ee.h, He),
        background: ye
      }
    }

    function ge(ee, ie, He) {
      return {
        left: Be(ee.x, ie),
        top: Be(ee.y, ie),
        width: Be(ee.size, ie),
        height: Be(ee.size, ie),
        borderWidth: Be(ee.border, ie),
        borderColor: He,
        background: ee.filled ? He : void 0
      }
    }
    const Oe = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function de(ee, ie, He) {
      const [ye, be] = ee.arm ? Oe[ee.arm] : [0, 0], Me = Math.round(ie * He);
      return {
        left: Be(ee.x + ye * Me, He),
        top: Be(ee.y + be * Me, He)
      }
    }

    function We(ee) {
      return ee.arm ? {
        "data-arm": ee.arm,
        "data-x": ee.x,
        "data-y": ee.y
      } : {}
    }

    function te(ee) {
      let {
        settings: ie,
        inPreview: He,
        inEditor: ye,
        pressed: Ue = !1,
        spread: Je,
        spreadRef: oe
      } = ee;
      const Re = (0, Me.useRef)(null),
        {
          box: fe,
          dpr: Te
        } = function(ee) {
          const [ie, He] = (0, Me.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Me.useLayoutEffect)((() => {
            const ie = ee.current;
            if (!ie) return;
            const ye = () => {
              const ee = ie.getBoundingClientRect(),
                ye = window.devicePixelRatio || 1;
              He((ie => ie.dpr === ye && ie.box.left === ee.left && ie.box.top === ee.top && ie.box.width === ee.width && ie.box.height === ee.height ? ie : {
                box: {
                  left: ee.left,
                  top: ee.top,
                  width: ee.width,
                  height: ee.height
                },
                dpr: ye
              }))
            };
            ye();
            const be = new ResizeObserver(ye);
            return be.observe(ie), window.addEventListener("resize", ye), window.addEventListener("scroll", ye, !0), () => {
              be.disconnect(), window.removeEventListener("resize", ye), window.removeEventListener("scroll", ye, !0)
            }
          }), [ee]), ie
        }(Re),
        pe = (0, Me.useRef)(Te);
      pe.current = Te;
      const Xe = Fe(ie, Te, Ue && ie.growOnClick ? qe : 1),
        ze = function(ee, ie, He) {
          const ye = Math.round((ee.left + ee.width / 2) * He - ie / 2),
            be = Math.round((ee.top + ee.height / 2) * He - ie / 2);
          return {
            x: ye / He - ee.left,
            y: be / He - ee.top
          }
        }(fe, Xe.cell, Te),
        Be = (0, Ke.j)(ie.color),
        Oe = (0, Ke.j)(ie.outlineColor),
        te = (0, Me.useRef)(0);
      (0, Me.useLayoutEffect)((() => {
        if (oe) return oe.current = ee => {
          var ie;
          te.current = ee, null === (ie = Re.current) || void 0 === ie || ie.querySelectorAll("[data-arm]").forEach((ie => {
            Object.assign(ie.style, de(function(ee) {
              return {
                x: Number(ee.dataset.x),
                y: Number(ee.dataset.y),
                arm: ee.dataset.arm
              }
            }(ie), ee, pe.current))
          }))
        }, () => {
          oe.current = null
        }
      }), [oe]);
      const Ze = null !== Je && void 0 !== Je ? Je : te.current;
      return (0, ke.jsx)("div", {
        ref: Re,
        className: be()("CrosshairShapes", {
          CrosshairInPreview: He,
          CrosshairInEditor: ye || He,
          CrosshairSpreads: void 0 !== oe
        }),
        children: (0, ke.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: ze.x,
            top: ze.y,
            opacity: ie.opacity / 100
          },
          children: (0, ke.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Xe.ringOutline && (0, ke.jsx)("div", {
              className: "CrosshairRing",
              style: ge(Xe.ringOutline, Te, Oe)
            }), Xe.outlines.map(((ee, ie) => (0, ke.jsx)("div", {
              className: "CrosshairPart",
              ...We(ee),
              style: Ee(ee, Ze, Te, Oe)
            }, `o${ie}`))), Xe.ring && (0, ke.jsx)("div", {
              className: "CrosshairRing",
              style: ge(Xe.ring, Te, Be)
            }), Xe.fills.map(((ee, ie) => (0, ke.jsx)("div", {
              className: "CrosshairPart",
              ...We(ee),
              style: Ee(ee, Ze, Te, Be)
            }, `f${ie}`)))]
          })
        })
      })
    }
  },
  34851: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => pe,
      j: () => Te
    });
    var ye = He(34829);
    const be = "XH1-",
      Me = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Ke = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ue = ["color", "outlineColor"],
      Fe = 1 + 3 * Ue.length + Ke.length + 1,
      Je = Math.ceil(8 * Fe / Math.log2(62)),
      oe = be.length + Je;

    function Re(ee) {
      let ie = 90;
      for (const He of ee) ie = 31 * ie + He & 255;
      return ie
    }
    const ke = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      qe = BigInt(ke.length);

    function fe(ee, ie) {
      let He = 0n;
      for (const be of ee) {
        const ee = ke.indexOf(be);
        if (ee < 0) return null;
        He = He * qe + BigInt(ee)
      }
      if (He >> BigInt(8 * ie) !== 0n) return null;
      const ye = [];
      for (let be = 0; be < ie; be++) ye.unshift(Number(0xffn & He)), He >>= 8n;
      return ye
    }

    function Te(ee) {
      let ie = "shapes" === ee.style ? 1 : 0;
      Me.forEach(((He, ye) => {
        ee[He] && (ie |= 1 << ye + 1)
      }));
      const He = [ie];
      for (const be of Ue) {
        const ie = (0, ye.f)(be, ee[be]);
        He.push(ie >> 16 & 255, ie >> 8 & 255, 255 & ie)
      }
      for (const be of Ke) {
        const {
          min: ie,
          step: Me
        } = ye.d[be];
        He.push(Math.round(((0, ye.f)(be, ee[be]) - ie) / Me))
      }
      return He.push(Re(He)), be + function(ee, ie) {
        let He = 0n;
        for (const be of ee) He = He << 8n | BigInt(be);
        let ye = "";
        for (let be = 0; be < ie; be++) ye = ke[Number(He % qe)] + ye, He /= qe;
        return ye
      }(He, Je)
    }

    function pe(ee) {
      for (const ie of ee.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Je}})`, "gi"))) {
        const ee = Xe(fe(ie[1], Fe));
        if (ee) return ee
      }
      return null
    }

    function Xe(ee) {
      if (!ee || ee.length !== Fe || Re(ee.slice(0, -1)) !== ee[ee.length - 1]) return null;
      const ie = ee[0],
        He = {
          ...ye.e,
          style: 1 & ie ? "shapes" : "classic"
        };
      Me.forEach(((ee, ye) => {
        He[ee] = 0 !== (ie & 1 << ye + 1)
      }));
      let be = 1;
      for (const ye of Ue) He[ye] = ee[be] << 16 | ee[be + 1] << 8 | ee[be + 2], be += 3;
      for (const Me of Ke) {
        const {
          min: ie,
          step: Ke
        } = ye.d[Me];
        He[Me] = (0, ye.f)(Me, ie + ee[be] * Ke), be++
      }
      return He
    }
  },
  34829: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      e: () => be,
      f: () => Me,
      j: () => Je,
      k: () => Fe,
      l: () => oe,
      n: () => Ue,
      o: () => Ke
    });
    const ye = {
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
      be = Object.freeze({
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

    function Me(ee, ie) {
      var He;
      const {
        min: Me,
        max: Ke,
        step: Ue
      } = ye[ee];
      if (!Number.isFinite(ie)) return be[ee];
      const Fe = (null !== (He = String(Ue).split(".")[1]) && void 0 !== He ? He : "").length,
        Je = Number((Math.round(ie / Ue) * Ue).toFixed(Fe));
      return Math.min(Ke, Math.max(Me, Je))
    }

    function Ke(ee, ie, He) {
      const ye = "number" === typeof He ? Me(ie, He) : He;
      return {
        ...ee,
        [ie]: ye
      }
    }

    function Ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(be).every((ye => He.includes(ye) || ee[ye] === ie[ye]))
    }

    function Fe(ee) {
      return Ue(ee, be)
    }

    function Je(ee) {
      return `#${ee.toString(16).padStart(6,"0")}`
    }

    function oe(ee) {
      const ie = /^#?([0-9a-f]{6})$/i.exec(ee.trim());
      return ie ? parseInt(ie[1], 16) : null
    }
  },
  34859: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re,
      f: () => ke
    });
    var ye = He(59),
      be = He(35),
      Me = He(34851),
      Ke = He(34829);
    const Ue = "crosshairCode";
    let Fe = null;
    const Je = new Set;

    function oe() {
      if (null === Fe) {
        var ee;
        const ie = be.i.getItem(Ue);
        Fe = null !== (ee = "string" === typeof ie ? (0, Me.h)(ie) : null) && void 0 !== ee ? ee : Ke.e
      }
      return Fe
    }

    function Re(ee) {
      Fe = ee, (0, Ke.k)(ee) ? be.i.removeItem(Ue) : be.i.setItem(Ue, (0, Me.j)(ee));
      for (const ie of Je) ie()
    }

    function ke() {
      const [ee, ie] = (0, ye.useState)(oe);
      return (0, ye.useEffect)((() => {
        const ee = () => {
          ie(oe())
        };
        return ee(), He = ee, Je.add(He), () => {
          Je.delete(He)
        };
        var He
      }), []), ee
    }
  },
  34824: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      e: () => be
    });
    var ye = He(18);

    function be(ee, ie) {
      return ee && !ie
    }

    function Me() {
      return be(ye.e.get("isTouchScreen"), ye.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5175: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      e: () => Me,
      i: () => be
    });
    let ye = null;

    function be(ee) {
      ye = ee
    }

    function Me() {
      return ye
    }

    function Ke(ee) {
      return "bloxd" === ee.site && !ee.isMobileApp && !ee.isTouchScreen
    }
  },
  34786: (ee, ie, He) => {
    function ye(ee, ie) {
      return ee && !ie
    }
    He.d(ie, {
      b: () => ye
    })
  },
  34807: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(1268);

    function be() {
      var ee, ie;
      return null !== (ee = null === (ie = screen.orientation) || void 0 === ie ? void 0 : ie.type) && void 0 !== ee ? ee : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Me = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && be() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = be(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, ye.vT)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const ee of this.resizers) ee()
          }
        }), 1e3)
      }
      heldSizer(ee) {
        let ie = !1;
        return () => {
          if (ie && this.isHeld()) return null;
          const He = ee();
          return ie ||= null !== He, He
        }
      }
      onRelease(ee) {
        return this.resizers.add(ee), () => {
          this.resizers.delete(ee)
        }
      }
    }
  },
  34758: (ee, ie, He) => {
    He.d(ie, {
      e: () => ze,
      i: () => Je,
      j: () => Te,
      l: () => fe
    });
    var ye = He(153),
      be = He(1207),
      Me = He(1141),
      Ke = He(1083),
      Ue = He(1763);
    const Fe = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Je(ee) {
      return Fe[ee]
    }

    function oe(ee) {
      return (0, Ue.b)(ee) ? "outdated" : ee instanceof ye.b ? 429 === ee.httpCode ? "busy" : "server" : "offline"
    }

    function Re(ee, ie, He) {
      return (0, Ke.postJsonWithMetricsCookiesAndJsonResponse)(`${Me.clientSideServerUrls.indexUrl}${ie}`, He, {
        retries: 3
      }, ee.getMetricsCookies()).catch((ee => (console.error("Bad response from the server when trying to change name:", ie, ee), {
        outcome: "failed",
        failure: oe(ee)
      })))
    }

    function ke(ee) {
      return "outcome" in ee && "failed" === ee.outcome
    }

    function qe(ee) {
      return console.error("Error when trying to get with new name from DB", ee), {
        outcome: "refused",
        message: ee
      }
    }
    async function fe(ee) {
      const ie = await Re(ee, "/index/name/random", {});
      return ke(ie) ? ie : "err" in ie ? qe(ie.err) : (ee.setPlayerName(ie.name), {
        outcome: "changed",
        name: ie.name
      })
    }
    async function Te(ee, ie) {
      const He = await Re(ee, "/index/name/update", {
        name: ie
      });
      return ke(He) ? He : "err" in He ? qe(He.err) : He.nameExists ? {
        outcome: "taken"
      } : (ee.setPlayerName(ie), {
        outcome: "changed",
        name: ie
      })
    }

    function pe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const ye = 1 === ie ? 1 : 10 ** (ie - 1),
        Me = String(ye + Math.floor(He() * (10 ** ie - ye)));
      return `${ee.slice(0,be.g-ie)}${Me}`
    }
    const Xe = [1, 2, 3, 4];
    async function ze(ee, ie) {
      const He = await Te(ee, ie);
      if ("taken" !== He.outcome) return He;
      for (const ye of Xe) {
        const He = pe(ie, ye),
          be = await Te(ee, He);
        if ("taken" !== be.outcome) return be
      }
      return {
        outcome: "taken"
      }
    }
  },
  34790: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      f: () => Fe
    });
    var ye = He(18);
    const be = 24,
      Me = "farNametags",
      Ke = 1e5;

    function Ue() {
      var ee;
      return null === (ee = ye.e.get("showDistantNametags")) || void 0 === ee || ee
    }

    function Fe() {
      var ee;
      return null !== (ee = function() {
        const ee = new URLSearchParams(window.location.search).get(Me),
          ie = null === ee || "" === ee ? NaN : Number(ee);
        return Number.isFinite(ie) && ie >= 0 ? Math.min(ie, Ke) : null
      }()) && void 0 !== ee ? ee : Ue() ? 0 : be
    }
  },
  34815: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => Re,
      e: () => oe
    });
    var ye = He(260),
      be = He(97),
      Me = He(123),
      Ke = He(120),
      Ue = He(643);
    const Fe = new Set(["mali_bifrost"]);

    function Je() {
      if (Ue.g) return;
      const ee = (0, be.pageOperatingSystem)();
      if ("android" !== ee && "windows" !== ee || (0, Ue.d)("webgl_default")) return;
      if ("windows" === ee) return ee => "qualcomm" === (0, be.normaliseGpuVendor)((0, Ke.e)(ee).vendor);
      const ie = (0, Me.p)(),
        He = null === ie ? (0, ye.m)() : (0, ye.i)(ie.vendor, ie.renderer);
      return null !== He && Fe.has(He) ? ee => (0, ye.k)((0, Ke.e)(ee).vendor, He) : void 0
    }

    function oe(ee, ie) {
      return ee ? () => !0 : ie()
    }
    async function Re(ee) {
      try {
        const ie = oe(ee, Je),
          He = navigator.gpu;
        if (void 0 === ie || void 0 === He) return !1;
        const ye = await (0, Ke.q)(He, {
          seed: !1,
          compatibility: ie
        });
        return "string" !== typeof ye && ye.compatibility && !(0, Ke.l)(ye.adapter)
      } catch (ie) {
        return console.error("WebGPU compatibility-mode adapter request failed.", ie), !1
      }
    }
  },
  34905: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => Ke
    });
    const ye = [{
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

    function be(ee) {
      let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof ee) {
        if (!Number.isFinite(ee)) return "0";
        if (Math.abs(ee) < 100) {
          const ie = ee < 0 ? "-" : "",
            He = Math.abs(ee);
          return He >= 10 ? `${ie}${He.toFixed(1).replace(/\.0$/,"")}` : `${ie}${He.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ie = BigInt(Math.floor(ee))
      } else ie = ee;
      const be = ie < 0n ? -ie : ie,
        Me = ie < 0n ? "-" : "",
        Ke = be.toString();
      if (Ke.length <= He) return `${Me}${Ke}`;
      const Ue = 3 * Math.floor((Ke.length - 1) / 3);
      if (Ue < 3) return `${Me}${Ke}`;
      if (Ue > 3 * ye.length) {
        const ee = Ke[0],
          ie = Ke.slice(1, 3).replace(/0+$/, "");
        return `${Me}${ie?`${ee}.${ie}`:ee}e${Ke.length-1}`
      }
      const {
        threshold: Fe,
        suffix: Je
      } = ye[ye.length - Ue / 3], oe = be / Fe, Re = Number(1000n * (be % Fe) / Fe), ke = Number(oe) + Re / 1e3;
      let qe;
      return qe = ke >= 100 ? Math.floor(ke).toString() : ke >= 10 ? ke.toFixed(1).replace(/\.0$/, "") : ke.toFixed(2).replace(/\.?0+$/, ""), `${Me}${qe}${Je}`
    }
    const Me = ye.map((ee => {
      let {
        threshold: ie,
        suffix: He
      } = ee;
      return {
        threshold: Number(ie),
        suffix: He
      }
    })).filter((ee => {
      let {
        threshold: ie
      } = ee;
      return Number.isFinite(ie)
    }));

    function Ke(ee) {
      const ie = Math.abs(ee),
        He = ee < 0 ? "-" : "";
      for (const {
          threshold: ye,
          suffix: be
        }
        of Me)
        if (ie >= ye) {
          const ee = ie / ye;
          if (ee >= 1e3) return `${He}${ie.toExponential(2).replace("e+","e")}`;
          let Me;
          return Me = ee >= 100 ? Math.floor(ee).toString() : ee >= 10 ? ee.toFixed(1).replace(/\.0$/, "") : ee.toFixed(2).replace(/\.?0+$/, ""), `${He}${Me}${be}`
        } return `${He}${ie}`
    }
  },
  34880: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      i: () => ke,
      l: () => Re,
      o: () => Ke,
      s: () => Je,
      w: () => Fe
    });
    var ye = He(347);
    const be = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Me = {
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

    function Ke(ee) {
      var ie;
      return null !== (ie = Me[ee]) && void 0 !== ie ? ie : {
        translationKey: ""
      }
    }
    const Ue = {
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

    function Fe(ee) {
      return be.includes(ee)
    }

    function Je(ee) {
      var ie;
      return !0 === (null === ee || void 0 === ee || null === (ie = ee.customAttributes) || void 0 === ie ? void 0 : ie.cannotEnchant)
    }

    function oe(ee, ie) {
      const {
        max: He
      } = Ue[ee].at(-1);
      return ie <= He
    }

    function Re(ee) {
      const ie = Math.sin(ee / 80),
        He = ee => {
          if (ee <= 0) return 0;
          if (ee > 1) return 1;
          let ie = 0;
          const He = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let ye = 0; ye < He.length; ye++) {
            ie += (ye % 2 === 0 ? 1 : -1) * He[ye] * Math.pow(ee, 2 + ye) / (2 + ye)
          }
          return 72 * ie
        },
        ye = .3 - .78 * ie,
        be = .5 - .78 * ie,
        Me = .6 - .7 * ie,
        Ke = .8 - .6 * ie;
      let Ue = He(ye),
        Fe = He(be) - Ue,
        Je = He(Me) - Fe - Ue,
        oe = He(Ke) - Je - Fe - Ue;
      ye < .041 && (Fe /= 1 - Ue, Je /= 1 - Ue, oe /= 1 - Ue, Ue = 0), be < .041 && (Ue /= 1 - Fe, Je /= 1 - Fe, oe /= 1 - Fe, Fe = 0), Me < .041 && (Ue /= 1 - Je, Fe /= 1 - Je, oe /= 1 - Je, Je = 0), Ke < .041 && (Ue /= 1 - oe, Fe /= 1 - oe, Je /= 1 - oe, oe = 0);
      return {
        commonProb: Ue,
        uncommonProb: Fe,
        rareProb: Je,
        epicProb: oe,
        legendaryProb: 1 - (oe + Je + Fe + Ue)
      }
    }

    function ke(ee, ie) {
      const {
        min: He,
        max: be
      } = Ue[ee][ie], Me = ye.c.sampleUniformIntDistribution(He, be, "includeMax");
      return {
        ...Re(Me),
        level: Me
      }
    }
  },
  34844: () => {},
  34947: () => {},
  13541: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14679: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16131: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16665: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);