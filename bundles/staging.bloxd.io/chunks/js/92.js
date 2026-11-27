export const id = 92;
export const ids = [92, 220, 221];
export const modules = {
  35326: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      EverythingMenu: () => np
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1251),
      Ir = Qr(1448),
      fr = Qr(2228),
      Er = Qr(1576),
      pr = Qr(1171),
      xr = Qr(1338);

    function mr(rr) {
      let {
        items: Sr,
        link: Qr,
        onClick: Zr,
        selectedItemId: Wr,
        className: mr,
        padStartsOnTab: Nr = !0
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), tr = (0, pr.j)(), hr = [];
      for (const ar of Sr) {
        var zr;
        const rr = hr[hr.length - 1];
        var Yr;
        if (rr && rr.title === (null !== (zr = ar.section) && void 0 !== zr ? zr : null)) rr.items.push(ar);
        else hr.push({
          title: null !== (Yr = ar.section) && void 0 !== Yr ? Yr : null,
          items: [ar]
        })
      }
      return (0, xr.jsxs)("div", {
        className: ar()("MenuSideBarBody", mr),
        "data-pad-tabs": "2",
        children: [hr.map(((rr, Sr) => {
          var Qr;
          return (0, xr.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [rr.title && (0, xr.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Ur(rr.title)
            }), rr.items.map((rr => {
              var Sr;
              const Qr = !!rr.iconElement || !!rr.faIcon;
              return (0, xr.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Wr === rr.id ? "true" : void 0,
                "data-pad-default-focus": Nr && Wr === rr.id || void 0,
                className: ar()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Wr === rr.id
                }),
                onClick: () => {
                  Zr(rr.id)
                },
                children: [Qr && (0, xr.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Sr = rr.iconElement) && void 0 !== Sr ? Sr : (0, xr.jsx)(Ir.c, {
                    name: rr.faIcon
                  })
                }), (!tr || !Qr) && (0, xr.jsx)("div", {
                  children: Ur(rr.title)
                }), rr.redDot && (0, xr.jsx)(fr.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, rr.id)
            }))]
          }, null !== (Qr = rr.title) && void 0 !== Qr ? Qr : Sr)
        })), Qr && (0, xr.jsxs)("div", {
          ...(0, Er._)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: Qr.onClick,
          children: [(0, xr.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, xr.jsx)(Ir.c, {
              name: Qr.faIcon
            })
          }), (0, xr.jsx)("div", {
            children: Ur(Qr.title)
          }), (0, xr.jsx)(Ir.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Nr = Qr(3002),
      Ur = Qr(1181),
      tr = Qr(3404),
      hr = Qr(4302),
      zr = Qr(109),
      Yr = Qr(2089),
      nr = Qr(3174),
      er = Qr(3182),
      Kr = Qr(1804),
      yr = Qr(1444),
      Br = Qr(5951),
      Tr = Qr(26),
      vr = Qr(35335);

    function Or(rr) {
      let {
        setApplySettingsCallback: Sr
      } = rr;
      const {
        clientEscMenuOptions: Qr
      } = (0, Tr.n)(["clientEscMenuOptions"]), [Wr, ar] = (0, Zr.useState)(!1), [jr, Ir] = (0, Zr.useState)(!1), [fr, pr] = (0, Zr.useState)(6400), [mr, Nr] = (0, Zr.useState)(3600), [Ur, tr] = (0, Zr.useState)(!1), [hr, zr] = (0, Zr.useState)(!1);

      function Yr(rr) {
        const Sr = "screenshot" === rr ? Ir : ar;
        Sr(!0);
        const Qr = Ur ? "normals" : hr ? "depth" : null;
        vr.devTools.downloadScene(rr, {
          width: fr,
          height: mr,
          colouring: Qr
        }).catch((rr => {
          console.error("Couldn't download the scene", rr)
        })).finally((() => {
          Sr(!1)
        }))
      }
      return (0, xr.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, xr.jsx)(Br.c, {
          label: "Disable Ambient Occlusion",
          checked: Qr.disableAmbientOcclusion,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              disableAmbientOcclusion: rr
            }), Sr((() => Br.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), vr.devTools.supports("ambientLight") && (0, xr.jsx)(Br.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Qr.ambientLightIntensity,
          onChange: rr => {
            vr.devTools.setAmbientLightIntensity(rr).then((() => {
              Tr.c.setClientEscMenuOptions({
                ambientLightIntensity: rr
              })
            })).catch((rr => {
              console.error("Couldn't set the ambient light", rr)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), vr.devTools.supports("weaponRaycasts") && (0, xr.jsx)(Br.c, {
          label: "Show Weapon Raycasts",
          checked: Qr.showWeaponRaycasts,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              showWeaponRaycasts: rr
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), vr.devTools.supports("sceneDownload") && (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, xr.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, xr.jsx)(Br.c, {
              label: "Apply normal-based coloring",
              checked: Ur,
              onClick: rr => {
                tr(rr), rr && zr(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, xr.jsx)(Br.c, {
              label: "Apply depth-based coloring",
              checked: hr,
              onClick: rr => {
                zr(rr), rr && tr(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, xr.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, xr.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, xr.jsx)(Kr.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (rr, Sr) => {
                  const Qr = parseInt(rr) || 6400;
                  pr(Qr)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: fr.toString()
              }), (0, xr.jsx)("span", {
                children: "X"
              }), (0, xr.jsx)(Kr.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (rr, Sr) => {
                  const Qr = parseInt(rr) || 3600;
                  Nr(Qr)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: mr.toString()
              })]
            }), (0, xr.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, xr.jsxs)(Er.h, {
                onClick: () => {
                  Yr("screenshot")
                },
                disabled: jr,
                children: [jr && (0, xr.jsx)(yr.c, {}), "Download Screenshot"]
              }), (0, xr.jsxs)(Er.h, {
                onClick: () => {
                  Yr("glb")
                },
                disabled: Wr,
                children: [Wr && (0, xr.jsx)(yr.c, {}), "Download GLB"]
              })]
            })]
          }), (0, xr.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Lr = Qr(139),
      lr = Qr(1187),
      Xr = Qr(35341),
      Pr = Qr(4105),
      Hr = Qr(1644),
      qr = Qr(1321),
      Rr = Qr(1283),
      gr = Qr(2188),
      Cr = Qr(1629),
      Mr = Qr(379),
      Gr = Qr(661),
      kr = Qr(3267),
      Ar = Qr(3276);
    const Vr = "store:retiredRankEnds";

    function ir(rr) {
      let {
        until: Sr,
        className: Qr
      } = rr;
      const {
        t: Zr,
        selectedLanguage: Wr
      } = (0, jr.E)(), ar = new Date(Sr).toLocaleDateString((0, jr.m)(Wr.code, Vr), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, xr.jsx)("span", {
        className: Qr,
        children: Zr(Vr, {
          date: ar
        })
      })
    }
    var wr = Qr(3192),
      cr = Qr(4142),
      Fr = Qr(4140),
      or = Qr(215),
      br = Qr(1761),
      Jr = Qr(1304),
      Dr = Qr(4159);

    function dr(rr, Sr, Qr) {
      const Zr = Gr.r[(0, Gr.n)(Gr.r, Sr)],
        Wr = void 0 === Zr ? void 0 : (0, or.b)(rr.entitlements, Zr.entitlementId);
      return void 0 === Wr || null === Wr.expiresAt || (0, Fr.g)(Wr) <= Qr ? null : Wr.willRenew && null === Wr.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(Wr.expiresAt, Qr)
      } : {
        renews: !1,
        at: (0, Fr.g)(Wr)
      }
    }
    var sr = Qr(4131),
      ur = Qr(4135);
    const rS = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function SS(rr) {
      return rr instanceof cr.b && "storeUnavailable" === rr.code ? (console.warn("Billing: the store didn't take a subscription change:", rr), "store:subscriptionStoreUnavailable") : rr instanceof cr.b && "subscriptionActionUnavailable" === rr.code ? (console.warn("Billing: a subscription action billing no longer offers:", rr), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", rr), "store:subscriptionChangeFailed")
    }
    async function QS() {
      try {
        var rr;
        const {
          offering: Sr
        } = await (0, ur.getBillingClient)().getOfferings((0, kr.l)(Gr.g.id).placementId);
        return null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.packages.find(sr.isPricedPackage)) && void 0 !== rr ? rr : null
      } catch (Sr) {
        return console.warn("Billing: loading the rank plan's price failed:", Sr), null
      }
    }

    function ZS(rr) {
      const {
        userContext: Sr
      } = (0, Ur.c)(), {
        superRankInfo: Qr
      } = Sr, Wr = (0, wr.usePurchasesAllowed)(), ar = (0, Mr.uc)(Qr), jr = rr && Wr && (ar || Sr.ranksMayChange), [Ir, fr] = (0, Zr.useState)(null), [Er, pr] = (0, Zr.useState)(!1), [xr, mr] = (0, Zr.useState)(!1), [Nr, tr] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        if (!jr) return;
        let rr = !1;
        const Qr = () => {
          Promise.all([(0, ur.getBillingClient)().getSubscriptions(), QS()]).then((Qr => {
            let [Zr, Wr] = Qr;
            rr || (fr({
              for: Sr,
              answer: Zr,
              pkg: Wr
            }), pr(!1))
          }), (Sr => {
            console.error("Billing: loading the player's subscriptions failed:", Sr), rr || pr(!0)
          }))
        };
        Qr();
        const Zr = br.e.addRefetchListener("billing", Qr);
        return () => {
          rr = !0, Zr()
        }
      }), [jr, Sr]);
      const hr = jr && ar && null !== Ir && Ir.for === Sr ? function(rr, Sr, Qr, Zr) {
        var Wr;
        const {
          customerInfo: ar,
          actions: jr
        } = rr, Ir = Gr.r[(0, Gr.n)(Gr.r, Sr)], fr = void 0 === Ir ? void 0 : (0, or.b)(ar.entitlements, Ir.entitlementId), Er = dr(ar, Sr, Zr);
        if (void 0 === fr || null === Er) return null;
        const pr = Object.entries(ar.subscriptions).find((rr => {
          let [, Sr] = rr;
          return Sr.productId === fr.productId && Sr.store === fr.store && !(0, Fr.m)(Sr.status)
        }));
        if (void 0 === pr) return null;
        const [xr, mr] = pr, Nr = (null === Qr || void 0 === Qr ? void 0 : Qr.productId) === mr.productId && mr.store === (0, wr.getBillingStore)();
        return {
          key: xr,
          tierId: Sr,
          info: mr,
          actions: null !== (Wr = (0, or.b)(jr, xr)) && void 0 !== Wr ? Wr : rS,
          date: Er,
          pkg: Nr ? Qr : null
        }
      }(Ir.answer, Qr.tier, Ir.pkg, Date.now()) : null;
      return {
        subscription: hr,
        loadFailed: jr && ar && Er,
        busy: xr,
        errorKey: Nr,
        change: async function(rr) {
          if (null === hr || xr) return;
          mr(!0), tr(null);
          const Qr = (0, ur.getBillingClient)();
          try {
            const Zr = await ("cancel" === rr ? Qr.cancelSubscription(hr.key) : Qr.resumeSubscription(hr.key));
            fr({
              for: Sr,
              answer: Zr,
              pkg: hr.pkg
            }), (0, Dr.d)()
          } catch (Zr) {
            tr(SS(Zr))
          } finally {
            mr(!1)
          }
        },
        openManagePage: async function() {
          if (null === hr || xr) return;
          const rr = window.open("", "_blank");
          mr(!0), tr(null);
          try {
            const Sr = await (0, ur.getBillingClient)().subscriptionManagementUrl(hr.key, Jr.f.get().getCurrentLanguageCode());
            null === rr ? window.open(Sr, "_blank", "noopener") : (rr.opener = null, rr.location.href = Sr)
          } catch (Sr) {
            null === rr || void 0 === rr || rr.close(), tr(SS(Sr))
          } finally {
            mr(!1)
          }
        }
      }
    }
    var WS = Qr(1475),
      aS = Qr(4187);

    function jS(rr, Sr) {
      return new Date(rr).toLocaleDateString(Sr, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function IS(rr) {
      let {
        showing: Sr,
        className: Qr
      } = rr;
      const {
        t: Zr,
        selectedLanguage: Wr
      } = (0, jr.E)(), {
        subscription: fr,
        loadFailed: pr,
        busy: mr,
        errorKey: Nr,
        change: Ur,
        openManagePage: tr
      } = ZS(Sr);
      if (pr) return (0, xr.jsx)("div", {
        className: ar()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", Qr),
        children: Zr("store:subscriptionLoadFailed")
      });
      if (null === fr) return null;
      const {
        date: hr,
        info: zr,
        actions: Yr,
        pkg: nr
      } = fr, er = hr.renews ? "store:renewsOn" : "store:endsOn", Kr = jS(hr.at, (0, jr.m)(Wr.code, er)), yr = Zr((0, kr.l)(fr.tierId).nameKey), Br = null !== zr.billingIssueDetectedAt;
      return (0, xr.jsxs)("div", {
        className: ar()("RankSubscriptionManage", Qr),
        children: [(0, xr.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [Zr(er, {
            date: Kr
          }), hr.renews && null !== nr && (0, wr.subscriptionsSold)() && (0, xr.jsxs)(xr.Fragment, {
            children: [" \xb7 ", Zr("store:pricePerMonth", {
              price: (0, aS.e)(nr)
            })]
          })]
        }), Br && (0, xr.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, xr.jsx)(Ir.c, {
            name: "triangle-exclamation"
          }), " ", Zr("store:paymentFailing", {
            rank: yr
          })]
        }), (0, xr.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [Yr.manage && (0, xr.jsx)(Er.k, {
            disabled: mr,
            onClick: () => {
              tr()
            },
            children: Zr(Br ? "store:updatePayment" : "payments:manageSubscription")
          }), Yr.resume && (0, xr.jsx)(Er.h, {
            loading: mr,
            onClick: () => {
              Ur("resume")
            },
            children: Zr("store:resumeSubscription")
          }), Yr.cancel && (0, xr.jsx)(Er.L, {
            loading: mr,
            onClick: () => {
              (async function(rr, Sr, Qr) {
                const Zr = Date.now() >= rr.info.currentPeriodEnd;
                return !0 === await WS.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: Zr ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: Sr
                    },
                    subtitle: {
                      rank: Sr,
                      date: Qr
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(fr, yr, jS(zr.currentPeriodEnd, (0, jr.m)(Wr.code, "store:cancelKeepsUntil"))).then((rr => {
                rr && Ur("cancel")
              }))
            },
            children: Zr("store:cancelSubscription")
          })]
        }), null !== Nr && (0, xr.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: Zr(Nr)
        })]
      })
    }
    var fS = Qr(3184),
      ES = Qr(3757),
      pS = Qr(1783);
    async function xS() {
      try {
        return function(rr) {
          const Sr = new Map;
          for (const {
              store: Qr,
              status: Zr,
              autoRenewStatus: Wr,
              managementUrl: ar
            }
            of Object.values(rr.subscriptions)) !(0, Fr.j)(Qr) || (0, Fr.m)(Zr) || "willNotRenew" === Wr || Sr.has(Qr) || Sr.set(Qr, null !== ar && void 0 !== ar ? ar : Fr.p[Qr]);
          return Array.from(Sr, (rr => {
            let [Sr, Qr] = rr;
            return {
              store: Sr,
              managementUrl: Qr
            }
          }))
        }(await (0, pS.h)((0, ur.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (rr) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", rr), null
      }
    }

    function mS(rr) {
      const {
        t: Sr,
        selectedLanguage: Qr
      } = (0, jr.E)(), {
        userContext: Wr
      } = (0, Ur.c)(), {
        superRankInfo: ar
      } = Wr, Ir = (0, wr.usePurchasesAllowed)(), fr = rr && ((0, Mr.uc)(ar) || Wr.ranksMayChange) && Ir, {
        accountId: Er,
        data: pr
      } = (0, ES.j)(Dr.c, fr);
      if ((0, Zr.useEffect)((() => {
          if (fr) return Dr.c.watchAccount(), br.e.addRefetchListener("billing", (rr => {
            "reconnected" === rr ? Dr.c.refreshAfterReconnect() : Dr.c.refresh()
          }))
        }), [fr]), !fr || !(0, Mr.uc)(ar) || null === pr || Er !== Wr.whamm) return null;
      const xr = dr(pr, ar.tier, Date.now());
      if (null === xr) return null;
      const mr = xr.renews ? "store:renewsOn" : "store:endsOn",
        Nr = (0, jr.f)(Qr.code, mr, xr.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        tr = (0, wr.getBillingStore)(),
        hr = null !== tr && (0, Fr.j)(tr) ? function(rr, Sr) {
          var Qr;
          const Zr = Object.values(rr.subscriptions).find((rr => rr.store === Sr && !(0, Fr.m)(rr.status)));
          return void 0 === Zr ? null : null !== (Qr = Zr.managementUrl) && void 0 !== Qr ? Qr : Fr.p[Sr]
        }(pr, tr) : null;
      return {
        text: Sr(mr, {
          date: Nr
        }),
        manageUrl: hr
      }
    }
    var NS = Qr(1489),
      US = Qr(1269),
      tS = Qr(5707),
      hS = Qr(1605),
      zS = Qr(4923),
      YS = Qr(3360);

    function nS(rr) {
      let {
        showing: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        data: Zr,
        failed: Wr
      } = (0, ES.j)(zS.d, Sr);
      return 0 === (null === Zr || void 0 === Zr ? void 0 : Zr.length) || null === Zr && !Wr ? null : (0, xr.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, xr.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Qr("paymentHistory:title")
        }), null === Zr && Wr && (0, xr.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Qr("paymentHistory:loadFailed")
        }), null !== Zr && (0, xr.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Zr.map((rr => (0, xr.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, xr.jsx)(YS.d, {
              entry: rr
            }), (0, xr.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, xr.jsx)("div", {
                children: (0, YS.k)(Qr, rr)
              }), (0, xr.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(rr.at).toLocaleDateString(), "number" === typeof rr.orderId && ` \xb7 ${Qr("paymentHistory:order",{orderId:rr.orderId})}`]
              })]
            })]
          }, (0, zS.b)(rr))))
        })]
      })
    }
    var eS = Qr(3198),
      KS = Qr(2277);

    function yS() {
      (0, KS.c)({
        titleKey: "payments:logInToRestore"
      })
    }

    function BS(rr) {
      let {
        status: Sr
      } = rr;
      switch (Sr) {
        case "restored":
          return (0, Dr.d)(), {
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

    function TS() {
      const rr = (0, ur.usePageBillingClient)(),
        {
          userContext: Sr
        } = (0, Ur.c)(),
        [Qr, Wr] = (0, Zr.useState)(!1),
        [ar, jr] = (0, Zr.useState)(null);
      return {
        restoring: Qr,
        notice: ar,
        restore: () => {
          Sr.isLoggedIn() ? (Wr(!0), jr(null), rr.restorePurchases().then(BS, (rr => rr instanceof cr.b && "loginRequired" === rr.code ? (yS(), null) : function(rr) {
            return rr instanceof cr.b && "storeBusy" === rr.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", rr), (0, Dr.d)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(rr))).then(jr).finally((() => {
            Wr(!1)
          }))) : yS()
        }
      }
    }

    function vS(rr) {
      let {
        restoring: Sr,
        notice: Qr,
        restore: Wr
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)(), fr = (0, wr.usePurchasesAllowed)(), pr = (0, wr.getBillingStore)(), mr = (0, Zr.useRef)(null);
      return (0, Zr.useEffect)((() => {
        var rr;
        null === (rr = mr.current) || void 0 === rr || rr.scrollIntoView({
          block: "nearest"
        })
      }), [Qr]), fr && (0, eS.d)(pr) ? (0, xr.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, xr.jsx)(Er.k, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: Sr,
          onClick: Wr,
          children: Ir("payments:restorePurchases")
        }), null !== Qr && (0, xr.jsx)("div", {
          ref: mr,
          className: ar()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: Qr.failed
          }),
          children: Ir(Qr.key)
        })]
      }) : null
    }
    var OS = Qr(2042),
      LS = Qr(1295),
      lS = Qr(1262),
      XS = Qr(1413),
      PS = Qr(360),
      HS = Qr(3532);
    const qS = {
      appStore: {
        name: "App Store",
        ...PS.Xb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...PS.Xb.googlePlay
      },
      discord: {
        name: "Discord",
        ...PS.Xb.discord
      }
    };

    function RS(rr) {
      let {
        warning: Sr,
        subscriptions: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return null !== Qr && 0 === Qr.length ? (0, xr.jsx)(xr.Fragment, {
        children: Zr(Sr)
      }) : (0, xr.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Zr(Sr), null === Qr && (0, xr.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Zr("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Qr && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Zr("auth:deleteAccountStoreSubscriptions")
          }), (0, xr.jsx)(HS.b, {
            className: "DeleteAccountSubtitleLinks",
            links: Qr.map((rr => {
              let {
                store: Sr,
                managementUrl: Qr
              } = rr;
              return {
                ...qS[Sr],
                url: Qr
              }
            }))
          })]
        })]
      })
    }
    var gS = Qr(5440);

    function CS(rr) {
      let {
        showing: Sr
      } = rr;
      const {
        userContext: Qr,
        isUserContextUpdating: Wr
      } = (0, Ur.c)(), {
        t: ar
      } = (0, jr.E)(), [Ir, fr] = (0, Zr.useState)(!1), [pr, mr] = (0, Zr.useState)(null), Nr = (0, Zr.useRef)(Sr);
      (0, Zr.useEffect)((() => (Nr.current = Sr, () => {
        Nr.current = !1
      })), [Sr]);
      const tr = Wr || Ir;
      return (0, xr.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, xr.jsxs)(Er.L, {
          onClick: async function() {
            if (!Ir) {
              fr(!0);
              try {
                const rr = await async function() {
                  const [rr, Sr] = await Promise.all([(0, OS.b)(Qr.availableUserContextTypes) ? xS() : [], GS(Qr)]);
                  if (!Nr.current) return LS.e.ok();
                  const Zr = (0, qr.e)(Qr.getPlayerName(), !zr.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await WS.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Zr
                        }
                      },
                      subtitle: (0, xr.jsx)(RS, {
                        warning: MS(Qr.isLoggedIn(), Sr),
                        subscriptions: rr
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: Sr ? ar("auth:deleteAccountTypedConfirm", {
                        playerName: Zr
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return LS.e.ok();
                  const Wr = await (0, lr.postJsonWithMetricsCookiesAndJsonResponse)(`${lS.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: Tr.c.get("gameState")
                  }, {
                    retries: 3
                  }, Qr.getMetricsCookies());
                  if (Wr.error) return LS.e.error(Wr.error);
                  (0, Lr.isDiscordClient)() && (await XS.j.discordActivity()).exit("User deleted their account");
                  return gS.e.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, lr.forgetStoredGuestAccount)(Qr.whamm), (0, lr.forceGlobalSignOut)(!0), LS.e.ok()
                }(), Sr = rr.isError() ? rr.asError().message : null;
                mr(Sr)
              } catch (rr) {
                console.error("Failed to delete account:", rr), mr(ar("auth:genericDeleteAccountError"))
              }
              fr(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: tr,
          children: [tr && (0, xr.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, xr.jsx)(yr.c, {})
          }), ar("auth:deleteAccount")]
        }), pr && (0, xr.jsx)("div", {
          className: "DeleteAccountError",
          children: pr
        })]
      })
    }

    function MS(rr, Sr) {
      return (0, Lr.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : rr ? "auth:deleteAccountLossWarning" : Sr ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function GS(rr) {
      try {
        const {
          accountCreatedAt: Sr
        } = await (0, pS.h)(Cr.c.getPlayerProfile(rr, {
          lowerCaseName: rr.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== Sr && Date.now() - Sr >= 7 * Mr.d
      } catch (Sr) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", Sr), !0
      }
    }
    var kS = Qr(4846),
      AS = Qr(4867),
      VS = Qr(4858);

    function iS(rr) {
      let {
        showing: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        data: Zr,
        failed: Wr
      } = (0, ES.j)(kS.e, Sr), ar = null === Zr ? null : (0, kS.h)(Zr);
      return (0, xr.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, xr.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Qr("settingsMenu:blockedAndIgnoredPlayers")
        }), null === ar && !Wr && (0, xr.jsx)(yr.c, {}), null === ar && Wr && (0, xr.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Qr("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, xr.jsx)(Er.h, {
            className: "SmallTextLight",
            onClick: () => {
              kS.e.refresh()
            },
            children: Qr("general:tryAgain")
          })]
        }), 0 === (null === ar || void 0 === ar ? void 0 : ar.length) && (0, xr.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Qr("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== ar && ar.length > 0 && (0, xr.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: ar.map((rr => {
            let {
              name: Sr,
              exclusion: Zr
            } = rr;
            const Wr = VS.e[Zr];
            return (0, xr.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, xr.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Sr
              }), (0, xr.jsx)(Er.k, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, AS.h)(Wr, Sr, {
                    chatMessage: null
                  })
                },
                children: Qr(VS.f[Wr].text)
              })]
            }, Sr)
          }))
        })]
      })
    }
    const wS = (0, Zr.memo)((function(rr) {
      var Sr, Qr;
      let {
        showing: Wr,
        inGame: fr
      } = rr;
      const {
        t: pr,
        selectedLanguage: mr
      } = (0, jr.E)(), {
        hideSocialLocationFrom: tr
      } = (0, Tr.n)(["hideSocialLocationFrom"]), hr = (0, wr.usePurchasesAllowed)(), Yr = TS(), nr = (0, Nr.e)(), {
        userContext: er,
        isUserContextUpdating: vr
      } = (0, Ur.c)(), [Or, Vr] = (0, Zr.useState)(null !== (Sr = er.getPlayerName()) && void 0 !== Sr ? Sr : ""), [cr, Fr] = (0, Zr.useState)(null), {
        purchasing: or,
        outcome: br,
        purchase: Jr
      } = (0, Pr.d)("/super-rank-welcome"), Dr = (0, Mr.cc)((0, jr.m)(mr.code, "general:timeLeft"), er.superRankInfo), dr = null === (Qr = mS(Wr)) || void 0 === Qr ? void 0 : Qr.text, sr = Date.now(), ur = (0, Ar.i)(sr), rS = (0, kr.t)(sr), SS = (0, Ar.h)(sr), QS = (0, kr.l)(ur.id), ZS = SS && (0, xr.jsxs)(Er.p, {
        className: "AccountSettingsSuperRankProlong",
        onClick: () => {
          (0, fS.o)({
            mode: "gift",
            source: "accountSettings",
            openItem: "superRank"
          })
        },
        children: [(0, xr.jsx)(Ir.c, {
          name: "bolt"
        }), pr(QS.giftKey)]
      }), WS = (0, kr.j)(er.getPlayerRanks(), sr), aS = (0, kr.p)(er.superRankInfo, sr), jS = ur.id !== Gr.t.id, ES = jS && !WS && (0, Mr.uc)(er.superRankInfo) ? er.superRankInfo : null, pS = Dr ? pr("general:timeLeft", {
        time: Dr
      }) : !(jS && hr) && dr, [xS, zS] = (0, Zr.useState)(!1), [YS, eS] = (0, Zr.useState)(!1), KS = (0, Zr.useRef)(null), yS = (0, Zr.useRef)(null), BS = (0, gr.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), OS = null === BS, LS = null !== BS && void 0 !== BS ? BS : [], lS = er !== lr.NULL_USER_CONTEXT && !er.isLoggedIn(), XS = lS && 0 !== (null === BS || void 0 === BS ? void 0 : BS.length), [PS, HS] = (0, Zr.useState)([]), [qS, RS] = (0, Zr.useState)(!1), gS = er.playerHasRank("youtuber"), MS = (0, Zr.useCallback)((() => Cr.c.getPlayerProfile(er, {
        lowerCaseName: er.getPlayerName().toLowerCase()
      }).then((rr => {
        HS(rr.socialLinks)
      })).catch((rr => {
        console.error("Failed to refresh social links", rr)
      }))), [er]);

      function GS(rr) {
        rr !== Or && ((0, qr.n)(rr) ? (rr = (0, qr.r)(rr), Fr(pr("homePage:nameCharacters"))) : Fr(null), KS.current && (KS.current.value = rr), Vr(rr))
      }
      return (0, Zr.useEffect)((() => (!0 === Wr ? (clearInterval(yS.current), yS.current = setInterval(nr, 1e3)) : clearInterval(yS.current), () => {
        clearInterval(yS.current)
      })), [Wr, nr]), (0, Zr.useEffect)((() => {
        var rr;
        Vr(null !== (rr = er.getPlayerName()) && void 0 !== rr ? rr : "")
      }), [er]), (0, Zr.useEffect)((() => {
        if (!Wr || !gS || vr) return;
        let rr = !1;
        return RS(!0), HS([]), Cr.c.getPlayerProfile(er, {
          lowerCaseName: er.getPlayerName().toLowerCase()
        }).then((Sr => {
          rr || HS(Sr.socialLinks)
        })).catch((rr => {
          console.error("Failed to load social links", rr)
        })).finally((() => {
          rr || RS(!1)
        })), () => {
          rr = !0
        }
      }), [Wr, gS, vr, er]), (0, xr.jsxs)("div", {
        className: ar()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: fr
        }),
        children: [fr && (0, xr.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: pr("settingsMenu:accountSettingsInGameWarning")
        }), (0, xr.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, xr.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [pr("homePage:discordNamePopupTitle"), (0, xr.jsxs)(Hr.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Rr.l)({
                name: er.getPlayerName()
              }),
              onClick: () => {
                Tr.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, xr.jsx)(Ir.c, {
                name: "arrow-up-right-from-square"
              }), " ", pr("profileCard:viewProfile")]
            })]
          }), (0, xr.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, xr.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [zr.featureFlags.canChangeName && (0, xr.jsx)(Kr.b, {
                className: "EnterName",
                placeholderText: pr("homePage:enterName"),
                maxLength: qr.h,
                defaultValue: Or,
                onValueChange: rr => {
                  GS(rr)
                },
                forcedText: xS || !zr.featureFlags.canChangeName ? Or : null,
                blurOnEnter: !0,
                domRef: KS
              }), (0, xr.jsx)(Er.h, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  GS((0, qr.f)())
                },
                children: (0, xr.jsx)(Ir.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !zr.featureFlags.canChangeName && (0, xr.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, qr.e)(Or, !zr.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, xr.jsx)(Er.h, {
              className: "ChooseNameButton",
              disabled: xS || Or === er.getPlayerName(),
              onClick: () => {
                Or.length < qr.j ? Fr(pr("homePage:changeNameMinLengthError", {
                  length: qr.j
                })) : Or.length > qr.h ? Fr(pr("homePage:changeNameMaxLengthError", {
                  length: qr.h
                })) : (zS(!0), Fr(null), (0, Xr.k)(er, Or).then((rr => {
                  zS(!1), "taken" === rr.outcome ? Fr(pr("homePage:nameTaken")) : "refused" === rr.outcome ? Fr(rr.message) : "failed" === rr.outcome && Fr(pr((0, Xr.g)(rr.failure)))
                })))
              },
              children: pr("general:choose")
            })]
          }), cr && (0, xr.jsx)("div", {
            className: "ChooseAccNameError",
            children: cr
          })]
        }), (0, xr.jsx)(Br.c, {
          label: (() => {
            if ((0, US.p)(tr)) {
              const rr = (0, jr.m)(mr.code, "general:timeLeft"),
                Sr = (0, Mr.W)(rr, Date.now(), tr + US.l);
              return `${pr("settingsMenu:hideSocialLocation")} (${pr("general:timeLeft",{time:Sr})})`
            }
            return pr("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const rr = !(0, US.p)(tr);
            (0, hS.reportAnalyticsClick)({
              id: "social.hide_location",
              value: rr ? "on" : "off"
            }), eS(!0), Cr.c.setHideSocialLocation(er, rr).then((() => {
              Tr.c.set({
                hideSocialLocationFrom: rr ? Date.now() : null
              })
            })).finally((() => {
              eS(!1)
            }))
          },
          checked: (0, US.p)(tr),
          disabled: YS
        }), gS && (0, xr.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, xr.jsx)("div", {
            className: "AccountSettingsLabel",
            children: pr("settingsMenu:socialLinks")
          }), qS && (0, xr.jsx)(yr.c, {}), !qS && (0, xr.jsx)(tS.e, {
            socialLinks: PS,
            editable: !0,
            userContext: er,
            onLinksUpdated: MS
          })]
        }), (0, xr.jsxs)("div", {
          className: "SettingBox",
          children: [(0, xr.jsx)("div", {
            className: "AccountSettingsLabel",
            children: pr(XS ? "auth:loginOrSwitchAccount" : "auth:login")
          }), OS && (0, xr.jsx)(yr.c, {}), !OS && 0 === LS.length && (0, xr.jsx)("div", {
            className: "NoLoginOptions",
            children: pr("auth:noLoginOptions")
          }), !OS && LS.length > 0 && "crazygames" !== Lr.siteUsed && (0, xr.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: LS
          }), !OS && LS.length > 0 && "crazygames" === Lr.siteUsed && (0, xr.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [LS[0], LS.length > 1 && (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, xr.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: pr("auth:legacyLoginOptions")
                }), (0, xr.jsx)(NS.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: pr("auth:legacyLoginOptionsInfo")
                })]
              }), (0, xr.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: LS.slice(1)
              })]
            })]
          }), zr.featureFlags.useLogin && (null !== er.loggedInInfo || er.isLoggedIn()) && (0, xr.jsxs)(xr.Fragment, {
            children: [(0, xr.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, xr.jsxs)(Er.L, {
              onClick: () => {
                (0, lr.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, xr.jsx)(Ir.c, {
                name: "right-from-bracket"
              }), pr("auth:signOut")]
            })]
          })]
        }), null !== ES && (0, xr.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, xr.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, xr.jsx)(kr.i, {
              tierId: ES.tier
            })
          }), (0, xr.jsx)(IS, {
            showing: Wr
          })]
        }), !WS && hr && (0, xr.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, xr.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, xr.jsx)(kr.i, {
              tierId: ur.id
            })
          }), null !== aS && (0, xr.jsx)(ir, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: aS
          }), (0, xr.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, xr.jsxs)(Er.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, fS.o)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, xr.jsx)(Ir.c, {
                name: "bolt"
              }), pr(null !== aS ? "store:upgradeToHyperRank" : QS.getKey)]
            }), ZS]
          }), (0, xr.jsx)(vS, {
            ...Yr
          })]
        }), WS && (0, xr.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, xr.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, xr.jsx)(kr.i, {
              tierId: ur.id
            }), pS && (0, xr.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", pS, ")"]
            })]
          }), jS && (0, xr.jsx)(IS, {
            showing: Wr
          }), hr && SS && (0, xr.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Mr.uc)(er.superRankInfo) && (0, xr.jsxs)(Er.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: or,
              onClick: () => {
                Jr(rS.id, null)
              },
              children: [(0, xr.jsx)(Ir.c, {
                name: "bolt"
              }), pr("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: rS.product.days,
                price: rS.price
              })]
            }), ZS]
          }), br && (0, xr.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: pr(br.translationKey)
          }), (0, xr.jsx)(vS, {
            ...Yr
          })]
        }), (0, xr.jsx)(nS, {
          showing: Wr
        }), zr.featureFlags.useSocialFeatures && (0, xr.jsx)(iS, {
          showing: Wr
        }), (0, xr.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, xr.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, xr.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: pr(cS(lS, XS))
            }), (0, Lr.isDiscordClient)() && (0, xr.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: pr("auth:discordActivityKickWarning")
            }), (0, xr.jsx)(CS, {
              showing: Wr
            })]
          }), (0, xr.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: pr(lS ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function cS(rr, Sr) {
      return rr ? Sr ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var FS = Qr(35347),
      oS = Qr(4323),
      bS = Qr(1568),
      JS = Qr(2128),
      DS = Qr(10005),
      dS = Qr(35350);

    function sS() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, JS.j)("localPlayerAlive") ? (0, xr.jsx)(DS.d, {
        icon: "camera-alt",
        title: rr("screenshotMode:title"),
        sub: rr("screenshotMode:entrySub"),
        onClick: dS.f
      }) : null
    }
    var uS = Qr(35371);
    const rQ = (0, Zr.memo)((function(rr) {
        let {
          inGame: Sr
        } = rr;
        const {
          t: Qr,
          selectedLanguage: Zr
        } = (0, jr.E)(), {
          clientEscMenuOptions: Wr,
          showDebugOverlay: ar,
          isTouchScreen: Ir
        } = (0, Tr.n)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), fr = (0, tr.l)("hideCoordinates");
        let Er = "settingsMenu:showCoordinates",
          pr = "settingsMenu:showChunkCoordinates";

        function mr(rr) {
          const Sr = new Intl.DisplayNames([rr], {
            type: "language"
          }).of(rr);
          return Sr.charAt(0).toUpperCase() + Sr.slice(1)
        }
        return fr && (Er = "settingsMenu:showCoordinatesHidden", pr = "settingsMenu:showChunkCoordinatesHidden"), (0, xr.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Sr && zr.featureFlags.canUseInviteLinks && (0, xr.jsxs)("div", {
            className: "SettingBox",
            children: [(0, xr.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Qr("settingsMenu:inviteLink")
            }), (0, xr.jsx)(FS.d, {})]
          }), (0, xr.jsxs)("div", {
            className: "SettingBox",
            children: [(0, xr.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Qr("settingsMenu:language")
            }), (0, xr.jsx)(oS.c, {
              options: Object.entries(jr.i).map((rr => {
                let [Sr, Qr] = rr;
                return {
                  label: (0, xr.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, xr.jsx)("img", {
                      src: Qr.flagImg,
                      alt: "flag"
                    }), (0, xr.jsxs)("span", {
                      children: [mr(Sr), " ", (0, xr.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Sr, ")"]
                      })]
                    })]
                  }),
                  value: Sr
                }
              })),
              value: Zr.code,
              onChange: rr => {
                Jr.f.get().setCurrentLanguage(rr.value)
              }
            })]
          }), Sr && Ir && (0, uS.b)() && (0, xr.jsx)(sS, {}), !(0, zr.isMobileApp)() && (0, bS.k)() && zr.featureFlags.useForceRotateForceFullscreenOverlay && (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:disableFullscreenMode"),
            checked: Wr.disableFullscreen,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                disableFullscreen: rr
              })
            }
          }), (0, xr.jsx)(Br.c, {
            label: Qr(Er),
            checked: Wr.showCoordinates,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showCoordinates: rr
              })
            },
            disabled: fr
          }), (0, xr.jsx)(Br.c, {
            label: Qr(pr),
            checked: Wr.showChunkCoordinates,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showChunkCoordinates: rr
              })
            },
            disabled: fr
          }), (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showFps"),
            checked: Wr.showFPS,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showFPS: rr
              })
            }
          }), (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:disableBunnyHopping"),
            checked: Wr.disableBunnyHopping,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                disableBunnyHopping: rr
              })
            }
          }), (0, XS.v)() && (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showChat"),
            checked: Wr.showChat,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showChat: rr
              })
            }
          }), (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showDebugOverlay"),
            checked: ar,
            onClick: rr => {
              Tr.c.set({
                showDebugOverlay: rr
              })
            }
          }), zr.featureFlags.useSocialFeatures && (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showFriendOnlineToasts"),
            checked: Wr.showFriendOnlineToasts,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showFriendOnlineToasts: rr
              })
            }
          }), (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showNewItemIndicator"),
            checked: Wr.showNewItemIndicator,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showNewItemIndicator: rr
              })
            }
          }), (0, xr.jsx)(Br.c, {
            label: Qr("settingsMenu:showTeamSymbols"),
            checked: Wr.showTeamSymbols,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showTeamSymbols: rr
              })
            },
            circleInfoText: Qr("settingsMenu:showTeamSymbolsInfo")
          })]
        })
      })),
      SQ = (0, Zr.memo)((function() {
        const {
          t: rr
        } = (0, jr.E)(), {
          soundVolume: Sr,
          musicVolume: Qr,
          clientEscMenuOptions: Zr
        } = (0, Tr.n)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
        return (0, xr.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, xr.jsx)(Br.f, {
            name: rr("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Qr,
            onChange: rr => {
              Tr.c.set({
                musicVolume: Math.round(100 * rr) / 100
              })
            },
            format: rr => rr.toFixed(2)
          }), (0, xr.jsx)(Br.f, {
            name: rr("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Sr,
            onChange: rr => {
              Tr.c.set({
                soundVolume: Math.round(100 * rr) / 100
              })
            },
            format: rr => rr.toFixed(2)
          }), (0, xr.jsx)(Br.c, {
            label: rr("settingsMenu:showSoundDirections"),
            checked: Zr.showSoundDirections,
            onClick: rr => {
              Tr.c.setClientEscMenuOptions({
                showSoundDirections: rr
              })
            },
            circleInfoText: rr("settingsMenu:showSoundDirectionsInfo")
          })]
        })
      }));
    var QQ = Qr(778),
      ZQ = Qr(1573),
      WQ = Qr(3351),
      aQ = Qr(3343),
      jQ = Qr(4746);
    const IQ = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function fQ() {
      const {
        t: rr
      } = (0, jr.E)(), Sr = (0, jQ.b)(), {
        mobilePushNotificationsCanAsk: Qr
      } = (0, Tr.n)(["mobilePushNotificationsCanAsk"]), [Wr, ar] = (0, Zr.useState)(null), [Ir, fr] = (0, Zr.useState)(!1), [pr, mr] = (0, Zr.useState)(null), [Nr, Ur] = (0, Zr.useState)(!1), tr = (0, Zr.useCallback)((() => {
        (0, WQ.d)().then((rr => {
          Sr.current && (ar(rr), fr(!1))
        })).catch((rr => {
          console.error("Failed to load push notification targets:", rr), Sr.current && fr(!0)
        }))
      }), [Sr]), hr = (0, Zr.useCallback)((() => {
        (0, aQ.g)().then((rr => {
          Sr.current && mr((() => rr))
        }))
      }), [Sr]);
      (0, Zr.useEffect)((() => {
        tr()
      }), [tr]), (0, Zr.useEffect)((() => {
        hr()
      }), [hr, Qr]), (0, ZQ.c)(WQ.h, tr);
      const zr = null === Wr ? [] : Object.keys(IQ).filter((rr => Wr[rr] > 0));
      return (0, xr.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, xr.jsx)("div", {
          className: "SliderText",
          children: rr("notificationSettings:pushNotifications")
        }), null === Wr && Ir && (0, xr.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: rr("notificationSettings:pushTargetsLoadFailed")
        }), null !== Wr && 0 === zr.length && (0, xr.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: rr("notificationSettings:pushTargetsNone")
        }), zr.length > 0 && (0, xr.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: zr.map((Sr => {
            var Qr;
            return (0, xr.jsx)("li", {
              children: rr(IQ[Sr], {
                count: null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr[Sr]) && void 0 !== Qr ? Qr : 0
              })
            }, Sr)
          }))
        }), null !== pr && (0, xr.jsx)(Er.h, {
          className: "PushNotificationSettingsButton",
          loading: Nr,
          onClick: () => {
            Ur(!0), pr().catch((rr => {
              console.error("Failed to turn on push notifications:", rr)
            })).finally((() => {
              Sr.current && (Ur(!1), hr())
            }))
          },
          children: rr("notificationSettings:pushTurnOn")
        })]
      })
    }
    var EQ = Qr(3580),
      pQ = Qr(3330),
      xQ = Qr(2015),
      mQ = Qr(43);
    async function NQ() {
      return "dailyDropReminderAsked_" + (await lr.userContextManager.getCurrentUserContext()).whamm
    }

    function UQ(rr) {
      return async function(rr) {
        if (rr.remindersOn || (0, Tr.g)(Tr.c.get("gameState"))) return null;
        const Sr = await NQ();
        if (null !== mQ.j.getItem(Sr)) return null;
        const [Qr, Zr] = await Promise.all([(0, aQ.g)().catch((rr => (console.error("Couldn't tell whether this device can take push notifications:", rr), null))), tQ()]);
        if (null === Qr && !Zr) return null;
        if (null !== Qr && ((0, pQ.c)() || (0, aQ.h)())) return null;
        return {
          askedKey: Sr,
          requester: Qr
        }
      }(rr).catch((rr => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", rr), null)))
    }

    function tQ() {
      return (0, WQ.d)().then((rr => rr.app + rr.browser + rr.msnPlay > 0), (rr => (console.error("Couldn't tell where push notifications reach this account:", rr), !0)))
    }
    async function hQ(rr) {
      const Sr = (0, EQ.x)({
          remindersOn: !0
        }),
        Qr = null === rr ? Promise.resolve() : rr(),
        [Zr, Wr] = await Promise.allSettled([Sr, Qr]);
      "rejected" === Zr.status && console.error("Failed to turn on Lucky Skin Block reminders:", Zr.reason), "rejected" === Wr.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Wr.reason), "rejected" !== Zr.status && "rejected" !== Wr.status || xQ.h.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const zQ = {
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
      YQ = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function nQ(rr) {
      let {
        setting: Sr,
        value: Qr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)(), Ir = (0, jQ.b)(), [fr, Er] = (0, Zr.useState)(null), [pr, mr] = (0, Zr.useState)(!1), [Nr, Ur] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        "remindersOn" === Sr && (0, aQ.g)().then((rr => {
          Ir.current && Ur((() => rr))
        }), (rr => {
          console.error("Couldn't tell whether this device can take push notifications:", rr)
        }))
      }), [Sr, Ir]), (0, xr.jsx)(Br.c, {
        className: ar()({
          DailyDropSettingFailed: pr
        }),
        label: Wr(YQ[Sr].label),
        checked: null !== fr && void 0 !== fr ? fr : Qr,
        note: pr ? Wr("dailyDrop:settingFailed") : void 0,
        onClick: rr => {
          null === fr && (Er(rr), mr(!1), rr && null !== Nr && Nr().catch((rr => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", rr)
          })), (0, EQ.t)("daily_drop.setting", `${YQ[Sr].reportAs}_${rr?"on":"off"}`), "remindersOn" === Sr && NQ().then((rr => {
            mQ.j.setItem(rr, !0)
          }), (rr => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", rr)
          })), (0, EQ.x)("hidden" === Sr ? {
            hidden: rr
          } : {
            remindersOn: rr
          }).catch((rr => {
            console.error(`Failed to save the Lucky Skin Block's ${Sr} setting:`, rr), Ir.current && mr(!0)
          })).finally((() => {
            Ir.current && Er(null)
          })))
        }
      })
    }
    const eQ = (0, Zr.memo)((function() {
      const {
        t: rr
      } = (0, jr.E)(), {
        clientEscMenuOptions: Sr
      } = (0, Tr.n)(["clientEscMenuOptions"]), {
        userContext: Qr
      } = (0, Ur.c)(), Zr = Qr.dailyDrop;
      return (0, xr.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [zr.featureFlags.useSocialFeatures && (0, xr.jsx)(Br.e, {
          label: rr("notificationSettings:friendRequests"),
          options: QQ.d.map((Sr => ({
            value: Sr,
            label: rr(zQ[Sr].label)
          }))),
          value: Sr.friendRequestNotifications,
          onChange: rr => {
            Tr.c.setClientEscMenuOptions({
              friendRequestNotifications: rr
            })
          },
          circleInfoText: (0, xr.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: QQ.d.map((Sr => (0, xr.jsxs)("div", {
              children: [(0, xr.jsx)("b", {
                children: rr(zQ[Sr].label)
              }), ": ", rr(zQ[Sr].info)]
            }, Sr)))
          })
        }), null !== Zr && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(nQ, {
            setting: "remindersOn",
            value: Zr.remindersOn
          }), (0, xr.jsx)(nQ, {
            setting: "hidden",
            value: Zr.hidden
          })]
        }), (0, xr.jsx)(fQ, {})]
      })
    }));
    var KQ = Qr(5264),
      yQ = Qr(208),
      BQ = Qr(345),
      TQ = Qr(7617),
      vQ = Qr(4690),
      OQ = Qr(35378),
      LQ = Qr(688),
      lQ = Qr(34);
    var XQ = Qr(712),
      PQ = Qr(5070);
    const HQ = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function qQ(rr) {
      return HQ.has(rr) ? Yr.gameBridge.lookup("IK", null) : null
    }

    function RQ(rr) {
      if (!(0, LQ.L)(Tr.c.get("clientEscMenuOptions")[rr])) return Tr.c.get("clientEscMenuOptions")[rr];
      const Sr = qQ(rr);
      return null !== Sr ? Sr[HQ.get(rr)] : mQ.j.getItem(rr)
    }

    function gQ(rr, Sr) {
      if ("useTouchControls" === rr) return void(0, PQ.b)(Sr);
      rr in Tr.c.get("clientEscMenuOptions") && Tr.c.setClientEscMenuOptions({
        [rr]: Sr
      });
      const Qr = qQ(rr);
      null !== Qr && Yr.gameBridge.send("setChunkAddDistance", {
        ...Qr,
        [HQ.get(rr)]: Sr
      }), mQ.j.setItem(rr, Sr)
    }
    var CQ = Qr(5157),
      MQ = Qr(35381),
      GQ = Qr(35386),
      kQ = Qr(5257),
      AQ = Qr(35408);

    function VQ(rr) {
      var Sr, Wr, Ir, fr;
      let {
        minChunkAddDist: Er,
        getValue: pr,
        onChange: mr,
        setApplySettingsCallback: Nr
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), {
        clientEscMenuOptions: hr
      } = (0, Tr.n)(["clientEscMenuOptions", "showDistantNametags"]), Yr = (0, Zr.useRef)(pr("showFog")), nr = (0, Zr.useRef)(hr.antiAliasing), er = (0, Zr.useRef)(hr.useWebGpu), [Kr, yr] = (0, Zr.useState)(null), [Or, Lr] = (0, Zr.useState)(!1), [lr, Xr] = (0, Zr.useState)((() => (0, vQ.d)(zr.featureFlags.settings.canUseShaderPacks))), [Pr] = (0, Zr.useState)((() => Tr.c.isWebGpuDefaultOff())), [Hr] = (0, Zr.useState)(BQ.l), [qr, Rr] = (0, Zr.useState)(!1);
      (0, Zr.useEffect)((() => {
        const rr = () => {
          Rr((0, GQ.t)())
        };
        return rr(), (0, GQ.A)(rr)
      }), []), (0, ZQ.c)("appManagerUpdated|clientEscMenuOptions", (() => {
        Rr((0, GQ.t)())
      }));
      const [gr] = (0, Zr.useState)((() => !0 === mQ.j.getItem(PS.mc))), [Cr] = (0, Zr.useState)((() => Tr.c.isWebGpuOnStored()));
      (0, Zr.useEffect)((() => {
        let rr = !1;
        return (0, zr.hasUsableWebGpuAdapter)().then((async Sr => {
          const Qr = gr || Cr,
            Zr = !Sr && XQ.I && await (0, AQ.h)(Qr);
          rr || (yr(Sr || Zr), Lr(Zr))
        })), (0, vQ.k)(zr.featureFlags.settings.canUseShaderPacks) && (0, TQ.e)().then((async Sr => {
          const Zr = null !== Sr && await async function(rr) {
            const [{
              isShaderPackActive: Sr
            }, {
              loadPageShaderPackCompiler: Zr
            }] = await Promise.all([Qr.e(160).then((() => Qr(7615))), Promise.all([Qr.e(91), Qr.e(157), Qr.e(159)]).then((() => Qr(7575)))]);
            return Sr(rr, await Zr())
          }(Sr);
          rr || Xr(Zr)
        })), () => {
          rr = !0
        }
      }), [gr, Cr]);
      const Mr = (!(lr && !gr) || !Or) && Kr,
        Gr = function(rr, Sr, Qr, Zr, Wr) {
          return (0, OQ.d)(Qr, Zr) && !0 === Sr ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Sr ? "settingsMenu:newWebGpu" : Wr ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: rr && !1 !== Sr,
            disabled: !0 !== Sr
          }
        }(hr.useWebGpu, Mr, lr, Pr, Hr),
        kr = (hr.useWebGpu || (0, OQ.d)(lr, Pr)) && lr && !0 === Mr,
        Ar = (0, tr.l)("lightingOverride"),
        Vr = !(0, LQ.L)(Ar);
      let ir = "settingsMenu:enableLighting";
      Vr && (ir = Ar ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const wr = rr => {
          var Sr, Qr, Zr;
          const Wr = null !== (Sr = rr.showFog) && void 0 !== Sr ? Sr : pr("showFog"),
            ar = null !== (Qr = rr.antiAliasing) && void 0 !== Qr ? Qr : hr.antiAliasing,
            jr = null !== (Zr = rr.useWebGpu) && void 0 !== Zr ? Zr : hr.useWebGpu,
            Ir = !XQ.I && Wr !== Yr.current || ar !== nr.current || jr !== er.current;
          Nr(Ir ? () => Br.i : null)
        },
        cr = (0, tr.l)("fogChunkDistanceOverride"),
        Fr = (0, tr.l)("fogBlockDistanceOverride"),
        or = !(0, LQ.L)(cr) || !(0, LQ.L)(Fr),
        br = or ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Jr, Dr] = (0, KQ.f)(Er),
        [dr, sr] = (0, kQ.f)(Er),
        ur = Ur("settingsMenu:chunkLoadDistanceDeviceLimit"),
        rS = dr < Jr,
        SS = Math.min(null !== (Sr = pr("chunkHorizAddDist")) && void 0 !== Sr ? Sr : Er[0], dr),
        QS = !or && function(rr, Sr) {
          return !0 === rr.showFog && rr.fogChunkDistance > Sr
        }(hr, SS);
      return (0, xr.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, xr.jsx)(Br.f, {
          name: Ur("settingsMenu:horizontalChunkLoadDistance"),
          min: Er[0],
          max: Jr,
          selectableMax: dr,
          cappedNote: ur,
          step: 1,
          initValue: SS,
          onChange: rr => {
            !0 === pr("showFog") && rr < pr("fogChunkDistance") && mr("fogChunkDistance", rr), mr("chunkHorizAddDist", rr), lQ.i.Jp("updatedChunkLoadDist")
          },
          circleInfoText: Ur("settingsMenu:chunkLoadDistanceInfo")
        }), (0, xr.jsx)(Br.f, {
          name: Ur("settingsMenu:verticalChunkLoadDistance"),
          min: Er[1],
          max: Dr,
          selectableMax: sr,
          cappedNote: rS ? void 0 : ur,
          step: 1,
          initValue: Math.min(null !== (Wr = pr("chunkVertAddDist")) && void 0 !== Wr ? Wr : Er[1], sr),
          onChange: rr => {
            mr("chunkVertAddDist", rr), lQ.i.Jp("updatedChunkLoadDist")
          },
          circleInfoText: Ur("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:chunkFadeIn"),
          checked: hr.chunkFadeIn,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              chunkFadeIn: rr
            })
          },
          circleInfoText: Ur("settingsMenu:chunkFadeInInfo")
        }), vr.devTools.supports("chunkBorders") && (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:showChunkBorders"),
          checked: hr.showChunkBorders,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              showChunkBorders: rr
            })
          },
          circleInfoText: Ur("settingsMenu:showChunkBordersInfo")
        }), (0, xr.jsx)(Br.c, {
          label: Ur(ir),
          checked: hr.enableLighting,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              enableLighting: rr
            })
          },
          disabled: Vr
        }), (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, xr.jsx)(Br.c, {
            label: Ur(br),
            checked: hr.showFog,
            onClick: rr => {
              wr({
                showFog: rr
              }), Tr.c.setClientEscMenuOptions({
                showFog: rr
              })
            },
            disabled: or,
            className: ar()({
              SettingBoxWarning: QS
            })
          }), (0, xr.jsx)(Br.f, {
            name: Ur("settingsMenu:fogChunkDistance"),
            min: Er[0],
            max: yQ.i.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Ir = hr.fogChunkDistance) && void 0 !== Ir ? Ir : Er[0],
            onChange: rr => {
              Tr.c.setClientEscMenuOptions({
                fogChunkDistance: rr
              }), lQ.i.Jp("fogChunkDistanceChanged", rr)
            },
            circleInfoText: Ur("settingsMenu:fogChunkDistanceInfo"),
            disabled: or || !1 === pr("showFog"),
            className: ar()({
              SettingBoxWarning: QS
            })
          }), QS && (0, xr.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Ur("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !XQ.I && (0, xr.jsx)(Br.c, {
          label: Ur(kr ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !kr && hr.disableTexAtlas,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              disableTexAtlas: rr
            })
          },
          circleInfoText: Ur("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: kr
        }), (0, xr.jsx)(Br.f, {
          name: Ur("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: hr.cameraFOV,
          onChange: rr => {
            Tr.c.setClientEscMenuOptions({
              cameraFOV: rr
            })
          }
        }), (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:disableViewBobbing"),
          checked: hr.disableBobbing,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              disableBobbing: rr
            })
          },
          circleInfoText: Ur("settingsMenu:disableViewBobbingInfo")
        }), (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:antiAliasing"),
          checked: hr.antiAliasing,
          onClick: rr => {
            wr({
              antiAliasing: rr
            }), (0, CQ.c)("antiAliasing"), Tr.c.setClientEscMenuOptions({
              antiAliasing: rr
            })
          },
          circleInfoText: Ur("settingsMenu:antiAliasingInfo")
        }), (0, xr.jsx)(Br.f, {
          name: Ur("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (fr = hr.pixelScale) && void 0 !== fr ? fr : 1,
          onChange: rr => {
            (rr !== Tr.c.get("clientEscMenuOptions").pixelScale || (0, GQ.r)()) && (0, CQ.c)("pixelScale"), Tr.c.setClientEscMenuOptions({
              pixelScale: rr
            })
          },
          circleInfoText: Ur("settingsMenu:pixelScaleInfo"),
          note: qr ? Ur("settingsMenu:pixelScaleLowered") : void 0,
          format: rr => `${rr}x`
        }), (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:pixelSmoothing"),
          checked: hr.pixelSmoothing,
          onClick: rr => {
            Tr.c.setClientEscMenuOptions({
              pixelSmoothing: rr
            })
          },
          circleInfoText: Ur("settingsMenu:pixelSmoothingInfo")
        }), XQ.I && (0, xr.jsx)(Br.c, {
          label: Ur("settingsMenu:distantNametags"),
          checked: (0, MQ.e)(),
          onClick: rr => {
            Tr.c.set({
              showDistantNametags: rr
            })
          },
          circleInfoText: Ur("settingsMenu:distantNametagsInfo")
        }), (0, xr.jsx)(Br.c, {
          label: Ur(Gr.translationKey),
          checked: Gr.checked,
          onClick: rr => {
            wr({
              useWebGpu: rr
            }), Tr.c.setClientEscMenuOptions({
              useWebGpu: rr
            })
          },
          circleInfoText: Ur("settingsMenu:newWebGpuInfo"),
          disabled: Gr.disabled
        })]
      })
    }
    var iQ = Qr(5150),
      wQ = Qr(9980),
      cQ = Qr(35416),
      FQ = Qr(9988),
      oQ = Qr(10037),
      bQ = Qr(35422);
    const JQ = {
        color: 16777215,
        name: "white"
      },
      DQ = {
        color: 0,
        name: "black"
      },
      dQ = [JQ, {
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
      }, DQ],
      sQ = [DQ, JQ];

    function uQ(rr) {
      return `${rr} px`
    }

    function rZ(rr) {
      return `${rr}%`
    }

    function SZ(rr) {
      let {
        settings: Sr,
        onChange: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)(), Wr = (rr, Zr) => {
        Qr((0, bQ.u)(Sr, rr, Zr))
      }, ar = function(rr, Qr) {
        let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uQ;
        const {
          min: ar,
          max: jr,
          step: Ir
        } = bQ.b[rr];
        return (0, xr.jsx)(Br.f, {
          name: Qr,
          min: ar,
          max: jr,
          step: Ir,
          initValue: Sr[rr],
          format: Zr,
          onChange: Sr => {
            Wr(rr, Sr)
          }
        }, rr)
      }, Ir = (rr, Qr, ar) => (0, xr.jsx)(oQ.c, {
        label: rr,
        value: (0, bQ.l)(Sr[Qr]),
        swatches: ar.map((rr => {
          let {
            color: Sr,
            name: Qr
          } = rr;
          return {
            colour: (0, bQ.l)(Sr),
            label: Zr(`crosshairSettings:color_${Qr}`)
          }
        })),
        customLabel: Zr("crosshairSettings:customColor"),
        onChange: rr => {
          const Sr = (0, bQ.r)(rr);
          null !== Sr && Wr(Qr, Sr)
        }
      }), fr = ["lines", "dot", "circle"].filter((rr => Sr[rr])), Er = (rr, Qr, Zr) => (0, xr.jsx)(Br.c, {
        label: Qr,
        checked: Sr[rr],
        disabled: 1 === fr.length && fr[0] === rr,
        circleInfoText: Zr,
        onClick: Sr => {
          Wr(rr, Sr)
        }
      }, rr), pr = "shapes" === Sr.style;
      return (0, xr.jsxs)(xr.Fragment, {
        children: [(0, xr.jsx)(Br.e, {
          label: Zr("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Zr("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Zr("crosshairSettings:styleShapes")
          }],
          value: Sr.style,
          onChange: rr => {
            Wr("style", rr)
          }
        }), Ir(Zr("crosshairSettings:color"), "color", dQ), ar("opacity", Zr("crosshairSettings:opacity"), rZ), !pr && ar("size", Zr("crosshairSettings:size"), rZ), pr && (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Er("lines", Zr("crosshairSettings:lines")), Sr.lines && ar("lineLength", Zr("crosshairSettings:lineLength")), Sr.lines && ar("lineThickness", Zr("crosshairSettings:lineThickness")), Sr.lines && ar("gap", Zr("crosshairSettings:gap")), Sr.lines && Er("tStyle", Zr("crosshairSettings:tStyle"))]
        }), pr && (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Er("dot", Zr("crosshairSettings:dot")), Sr.dot && ar("dotSize", Zr("crosshairSettings:dotSize"))]
        }), pr && (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Er("circle", Zr("crosshairSettings:circle")), Sr.circle && ar("circleRadius", Zr("crosshairSettings:circleRadius")), Sr.circle && ar("circleThickness", Zr("crosshairSettings:circleThickness"))]
        }), (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [ar("outline", Zr("crosshairSettings:outline"), (rr => rr > 0 ? uQ(rr) : Zr("crosshairSettings:off"))), Sr.outline > 0 && Ir(Zr("crosshairSettings:outlineColor"), "outlineColor", sQ)]
        }), Er("growOnClick", Zr("crosshairSettings:growOnClick")), pr && Er("forGuns", Zr("crosshairSettings:forGuns"), Zr("crosshairSettings:forGunsInfo"))]
      })
    }
    var QZ = Qr(92),
      ZZ = Qr(1330),
      WZ = Qr(13750),
      aZ = Qr(14956),
      jZ = Qr(16388),
      IZ = Qr(16909);
    const fZ = ["sky", "grass", "stone", "sand", "snow", "night"],
      EZ = "4rem";

    function pZ(rr) {
      return {
        backgroundImage: `url(${rr})`,
        backgroundSize: `${EZ} ${EZ}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function xZ(rr) {
      return {
        ...(() => {
          switch (rr) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return pZ(WZ);
            case "stone":
              return pZ(aZ);
            case "sand":
              return pZ(jZ);
            case "snow":
              return pZ(IZ);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function mZ(rr) {
      return Object.freeze({
        ...bQ.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...rr
      })
    }
    const NZ = [{
        id: "default",
        settings: bQ.f
      }, {
        id: "cross",
        settings: mZ({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: mZ({
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
        settings: mZ({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: mZ({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: mZ({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: mZ({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: mZ({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      UZ = ["growOnClick", "forGuns"];
    var tZ = Qr(35426);

    function hZ(rr) {
      let {
        label: Sr,
        selected: Qr,
        onClick: Zr,
        className: Wr,
        style: jr,
        children: Ir
      } = rr;
      return (0, xr.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Qr,
        title: Sr,
        "aria-label": Sr,
        "data-pad-focusable": !0,
        className: ar()("CrosshairBackdropSwatch", Wr, {
          Selected: Qr
        }),
        style: jr,
        onClick: Zr,
        children: Ir
      })
    }

    function zZ(rr) {
      let {
        backdrop: Sr,
        onChange: Qr,
        game: Zr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Wr("crosshairSettings:background"),
        children: [Zr && (0, xr.jsx)(hZ, {
          label: Wr("crosshairSettings:bg_game"),
          selected: Zr.selected,
          onClick: Zr.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, xr.jsx)(Ir.c, {
            name: "cube"
          })
        }), fZ.map((rr => (0, xr.jsx)(hZ, {
          label: Wr(`crosshairSettings:bg_${rr}`),
          selected: !(null !== Zr && void 0 !== Zr && Zr.selected) && rr === Sr,
          style: xZ(rr),
          onClick: () => {
            Qr(rr)
          }
        }, rr)))]
      })
    }

    function YZ(rr) {
      let {
        settings: Sr,
        touch: Qr,
        backdrop: Zr,
        onChange: Wr
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)(), fr = function(rr) {
        var Sr;
        return null !== (Sr = NZ.find((Sr => (0, bQ.t)(Sr.settings, rr, UZ)))) && void 0 !== Sr ? Sr : null
      }(Sr);
      return (0, xr.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Ir("crosshairSettings:presets"),
        children: NZ.map((rr => {
          const jr = (null === fr || void 0 === fr ? void 0 : fr.id) === rr.id;
          return (0, xr.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": jr,
            "data-pad-focusable": !0,
            className: ar()("CrosshairPreset", {
              Selected: jr
            }),
            onClick: () => {
              Wr(function(rr, Sr) {
                return {
                  ...Sr.settings,
                  growOnClick: rr.growOnClick,
                  forGuns: rr.forGuns
                }
              }(Sr, rr))
            },
            children: [(0, xr.jsx)("div", {
              className: "CrosshairPresetStage",
              style: xZ(Zr),
              children: (0, xr.jsx)(tZ.b, {
                settings: rr.settings,
                touch: Qr,
                inPreview: !0
              })
            }), (0, xr.jsx)("div", {
              className: "CrosshairPresetName",
              children: Ir(`crosshairSettings:preset_${rr.id}`)
            })]
          }, rr.id)
        }))
      })
    }
    var nZ = Qr(1796);

    function eZ(rr, Sr) {
      const [Qr, Wr] = (0, Zr.useState)(!1), ar = () => {
        Wr(!1)
      }, [jr, Ir] = (0, Zr.useState)(!1), fr = (0, Zr.useRef)({
        growOnClick: rr.growOnClick,
        forGuns: rr.forGuns
      });
      (0, Zr.useEffect)((() => {
        const Sr = fr.current;
        fr.current = {
          growOnClick: rr.growOnClick,
          forGuns: rr.forGuns
        }, (rr.growOnClick && !Sr.growOnClick || rr.forGuns && !Sr.forGuns) && Ir(!0)
      }), [rr.growOnClick, rr.forGuns]), (0, Zr.useEffect)((() => {
        if (!jr) return;
        const rr = setTimeout((() => {
          Ir(!1)
        }), 600);
        return () => {
          clearTimeout(rr)
        }
      }), [jr]);
      const Er = Qr || jr;
      return {
        view: {
          pressed: Er,
          spread: Er && rr.forGuns && !rr.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: rr => {
            !rr.target.closest(Sr) && (0, nZ.b)(rr.currentTarget, rr.pointerId) && Wr(!0)
          },
          onPointerUp: ar,
          onPointerCancel: ar,
          onLostPointerCapture: ar
        }
      }
    }

    function KZ(rr) {
      let {
        settings: Sr,
        touch: Qr,
        backdrop: Zr,
        className: Wr,
        children: jr,
        label: Ir
      } = rr;
      const fr = eZ(Sr, ".CrosshairStageControls");
      return (0, xr.jsxs)("div", {
        className: ar()("CrosshairStage", Wr),
        style: xZ(Zr),
        ...fr.handlers,
        children: [(0, xr.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Ir,
          children: (0, xr.jsx)(tZ.b, {
            settings: Sr,
            touch: Qr,
            inPreview: !0,
            ...fr.view
          })
        }), jr]
      })
    }
    const yZ = "crosshairFullScreen";

    function BZ(rr) {
      let {
        settings: Sr,
        touch: Qr,
        backdrop: Wr,
        onBackdrop: fr,
        inGame: pr,
        onChange: mr,
        onClose: Nr
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), tr = (0, Zr.useRef)(null);
      (0, ZZ.u)("popup", tr, Nr),
      function(rr) {
        const Sr = (0, Zr.useRef)(rr);
        Sr.current = rr, (0, Zr.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [yZ]: !0
          }, "");
          let rr = !1;
          const Qr = () => {
            rr = !0, Sr.current()
          };
          return window.addEventListener("popstate", Qr), () => {
            var Sr;
            window.removeEventListener("popstate", Qr), !rr && null !== (Sr = window.history.state) && void 0 !== Sr && Sr[yZ] && window.history.back()
          }
        }), [])
      }(Nr);
      const hr = (0, Zr.useRef)(Nr);
      hr.current = Nr, (0, Zr.useEffect)((() => {
        function rr(rr) {
          "Escape" === rr.key && (rr.stopPropagation(), hr.current())
        }
        return window.addEventListener("keydown", rr, !0), () => {
          window.removeEventListener("keydown", rr, !0)
        }
      }), []);
      const zr = eZ(Sr, ".CrosshairFullScreenPanel"),
        [Yr, nr] = (0, Zr.useState)(!0),
        er = Yr && pr;
      (0, Zr.useEffect)((() => {
        if (er) return Tr.c.set({
          crosshairGameView: !0
        }), () => {
          Tr.c.set({
            crosshairGameView: !1
          })
        }
      }), [er]);
      const [Kr, yr] = (0, Zr.useState)(!0);
      return (0, QZ.createPortal)((0, xr.jsxs)("div", {
        ref: tr,
        className: "CrosshairFullScreen",
        style: er ? void 0 : xZ(Wr),
        ...zr.handlers,
        children: [(0, xr.jsx)(tZ.b, {
          settings: Sr,
          touch: Qr,
          inEditor: !0,
          ...zr.view
        }), (0, xr.jsxs)("div", {
          className: ar()("CrosshairFullScreenPanel", {
            Collapsed: !Kr
          }),
          children: [(0, xr.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, xr.jsx)(zZ, {
              backdrop: Wr,
              onChange: rr => {
                nr(!1), fr(rr)
              },
              game: pr ? {
                selected: er,
                onSelect: () => {
                  nr(!0)
                }
              } : void 0
            }), (0, xr.jsx)(Er.U, {
              className: "CrosshairPanelToggle",
              ariaLabel: Ur(Kr ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                yr(!Kr)
              },
              children: (0, xr.jsx)(Ir.c, {
                name: Kr ? "caret-up" : "pen"
              })
            }), (0, xr.jsx)(Er.h, {
              className: "CrosshairFullScreenDone",
              onClick: Nr,
              padDefaultFocus: !0,
              children: Ur("crosshairSettings:done")
            })]
          }), Kr && (0, xr.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, xr.jsx)(YZ, {
              settings: Sr,
              touch: Qr,
              backdrop: Wr,
              onChange: mr
            }), (0, xr.jsx)(SZ, {
              settings: Sr,
              onChange: mr
            })]
          })]
        })]
      }), document.body)
    }
    var TZ = Qr(3742),
      vZ = Qr(35435);

    function OZ(rr) {
      let {
        settings: Sr,
        onChange: Qr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)(), fr = (0, vZ.m)(Sr), [pr, mr] = (0, TZ.g)(), [Nr, Ur] = (0, Zr.useState)(!1), tr = (0, Zr.useRef)(null), [hr, zr] = (0, TZ.g)(), [Yr, nr] = (0, Zr.useState)(!1);
      return (0, xr.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, xr.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, xr.jsxs)(Er.U, {
            className: ar()("CrosshairCopy", {
              ActiveSecondaryButton: pr
            }),
            onClick: () => {
              (0, TZ.c)(fr, {
                useShareSheet: !1,
                onOutcome: rr => {
                  Ur("failed" === rr), "copied" === rr && mr()
                }
              })
            },
            children: [(0, xr.jsx)(Ir.c, {
              name: pr ? "check" : "copy"
            }), " ", Wr(pr ? "general:copied" : "crosshairSettings:copy")]
          }), (0, xr.jsx)(Kr.b, {
            className: "CrosshairPaste",
            domRef: tr,
            ariaLabel: Wr("crosshairSettings:paste"),
            placeholderText: Wr("crosshairSettings:paste"),
            onValueChange: rr => {
              const Sr = (0, vZ.i)(rr);
              nr(!Sr && rr.trim().length >= vZ.e), Sr && (Qr(Sr), tr.current.value = "", zr())
            }
          })]
        }), Nr && (0, xr.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: fr,
          "aria-label": Wr("crosshairSettings:copy"),
          onFocus: rr => {
            rr.currentTarget.select()
          }
        }), (0, xr.jsxs)("div", {
          "aria-live": "polite",
          children: [Yr && (0, xr.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Wr("crosshairSettings:pasteInvalid")
          }), hr && !Yr && (0, xr.jsx)("div", {
            className: "CrosshairShareNote",
            children: Wr("crosshairSettings:applied")
          })]
        })]
      })
    }
    var LZ = Qr(35437);
    let lZ = "sky";

    function XZ(rr) {
      let {
        showing: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        isTouchScreen: Wr,
        gameState: ar,
        clientEscMenuOptions: fr
      } = (0, Tr.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), pr = (0, LZ.f)(), [mr, Nr] = (0, Zr.useState)(lZ), Ur = rr => {
        lZ = rr, Nr(rr)
      }, [tr, hr] = (0, Zr.useState)(!1);
      return (0, Zr.useEffect)((() => {
        Sr || hr(!1)
      }), [Sr]), (0, xr.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, xr.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, xr.jsx)(KZ, {
            className: "CrosshairPreviewStage",
            settings: pr,
            touch: Wr,
            backdrop: mr,
            label: Qr("crosshairSettings:preview"),
            children: (0, xr.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, xr.jsx)(zZ, {
                backdrop: mr,
                onChange: Ur
              }), (0, xr.jsxs)(Er.U, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  hr(!0)
                },
                children: [(0, xr.jsx)(Ir.c, {
                  name: "expand"
                }), " ", Qr("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, xr.jsx)("div", {
          className: "SettingBox",
          children: (0, xr.jsx)(YZ, {
            settings: pr,
            touch: Wr,
            backdrop: mr,
            onChange: LZ.b
          })
        }), (0, xr.jsx)(OZ, {
          settings: pr,
          onChange: LZ.b
        }), Wr && (0, xr.jsx)(FQ.b, {
          note: (0, cQ.d)(Wr, fr.touchActionButtons) ? Qr("crosshairSettings:touchNote") : void 0
        }), (0, xr.jsx)(SZ, {
          settings: pr,
          onChange: LZ.b
        }), tr && (0, xr.jsx)(BZ, {
          settings: pr,
          touch: Wr,
          backdrop: mr,
          onBackdrop: Ur,
          inGame: "inGame" === ar,
          onChange: LZ.b,
          onClose: () => {
            hr(!1)
          }
        })]
      })
    }
    var PZ = Qr(9986),
      HZ = Qr(1534),
      qZ = Qr(5945),
      RZ = Qr(35441),
      gZ = Qr(4937),
      CZ = Qr(2132),
      MZ = Qr(782);
    const GZ = (0, Zr.memo)((function() {
      const {
        clientEscMenuOptions: rr
      } = (0, Tr.n)(["clientEscMenuOptions"]), {
        recording: Sr,
        clipping: Qr,
        hasClipBuffer: Wr
      } = (0, JS.j)("replayRecorder"), jr = (0, JS.f)("connectedGame", (rr => rr.replay)), Ir = (0, gZ.l)(), fr = !1 === (0, tr.l)("canRecordReplays");
      (0, Zr.useEffect)((() => {
        Yr.gameBridge.send("setRecorderPrefs", {
          clipping: rr.enableClipping,
          clipSeconds: rr.clipDurationSeconds
        })
      }), [rr.enableClipping, rr.clipDurationSeconds]);
      const pr = Ir || jr,
        mr = !pr && !fr,
        Nr = Sr || mr,
        Ur = mr,
        hr = Ur && Qr && !Sr;

      function zr() {
        Nr && Yr.gameBridge.send("toggleRecording", null)
      }
      return (0, xr.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, xr.jsxs)("div", {
          className: "SettingBox",
          children: [(0, xr.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Sr ? (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsxs)(Er.L, {
                className: "ReplayViewerCategoryButton",
                onClick: zr,
                disabled: !Nr,
                children: [(0, xr.jsx)("span", {
                  children: "Stop Recording"
                }), (0, xr.jsx)(CZ.c, {
                  noaAction: "recordGame"
                })]
              }), (0, xr.jsx)(RZ.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, xr.jsxs)(Er.h, {
              className: "ReplayViewerCategoryButton",
              onClick: zr,
              disabled: !Nr,
              children: [(0, xr.jsx)("span", {
                children: "Start Recording"
              }), (0, xr.jsx)(CZ.c, {
                noaAction: "recordGame"
              })]
            })
          }), fr && (0, xr.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), pr && !Sr && (0, xr.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, xr.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, xr.jsx)(Br.c, {
            label: "Enable clipping",
            checked: rr.enableClipping,
            disabled: !Ur,
            onClick: function(rr) {
              Ur && Tr.c.setClientEscMenuOptions({
                enableClipping: rr
              })
            },
            className: ar()({
              SettingBoxDisabled: !Ur
            })
          }), (0, xr.jsx)(Br.f, {
            name: "Clip duration (seconds)",
            min: MZ.h,
            max: MZ.g,
            step: MZ.c,
            initValue: rr.clipDurationSeconds,
            onChange: function(rr) {
              Tr.c.setClientEscMenuOptions({
                clipDurationSeconds: rr
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Ur || !rr.enableClipping
          })]
        }), (0, xr.jsxs)("div", {
          className: "SettingBox",
          children: [(0, xr.jsxs)(Er.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              hr && Yr.gameBridge.send("saveClip", null)
            },
            disabled: !hr,
            children: [(0, xr.jsx)("span", {
              children: "Record clip"
            }), (0, xr.jsx)(CZ.c, {
              noaAction: "recordClip"
            })]
          }), rr.enableClipping && !Wr && Ur && !Sr && (0, xr.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Sr && (0, xr.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, xr.jsxs)("div", {
          className: "SettingBox",
          children: [(0, xr.jsxs)(Er.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, gZ.i)(!0), Tr.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: Ir,
            children: [(0, xr.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, xr.jsx)(CZ.c, {
              noaAction: "replayViewerOpen"
            })]
          }), Ir && (0, xr.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, xr.jsxs)("div", {
          className: "SettingBox",
          children: [(0, xr.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, xr.jsx)("iframe", {
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
    var kZ = Qr(2049);
    const AZ = {
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
        icon: () => (0, xr.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, xr.jsx)("path", {
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
      zU: {
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

    function VZ() {
      return Promise.all([Qr.e(91), Qr.e(157), Qr.e(156), Qr.e(153)]).then((() => Qr(42936))).then((rr => ({
        default: rr.ShaderPackCategory
      })), (rr => (console.error("Failed to load the shader pack settings", rr), {
        default: iZ
      })))
    }

    function iZ() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, xr.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: rr("shaderPack:tabLoadFailed")
      })
    }
    var wZ = Qr(1518),
      cZ = Qr(194);
    const FZ = /party\s*voice/i;
    let oZ = !1;

    function bZ(rr) {
      return Object.keys(rr).some((rr => rr.startsWith("__reactFiber$")))
    }
    const JZ = ".MenuSideBarBody, .MenuSideBarSection";

    function DZ(rr) {
      var Sr;
      return (null !== (Sr = rr.textContent) && void 0 !== Sr ? Sr : "").replace(/\s+/g, " ").trim()
    }

    function dZ(rr) {
      for (const Sr of function(rr) {
          const Sr = new Set;
          for (const Qr of rr.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) Sr.add(Qr);
          for (const Qr of [rr, ...rr.querySelectorAll(JZ)])
            for (const rr of Qr.children) Sr.add(rr);
          return [...Sr]
        }(rr))
        if (!bZ(Sr) || !Sr.matches(JZ) && FZ.test(DZ(Sr))) return Sr;
      return null
    }

    function sZ(rr) {
      return rr.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const uZ = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function rW(rr) {
      const Sr = document.createTreeWalker(rr, NodeFilter.SHOW_TEXT, {
        acceptNode: rr => {
          var Sr, Qr;
          return uZ.has(null !== (Sr = null === (Qr = rr.parentElement) || void 0 === Qr ? void 0 : Qr.tagName.toUpperCase()) && void 0 !== Sr ? Sr : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let ar = Sr.nextNode(); null !== ar; ar = Sr.nextNode()) {
        var Qr;
        const rr = (null !== (Qr = ar.textContent) && void 0 !== Qr ? Qr : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== rr) {
          var Zr, Wr;
          return (null !== (Zr = null === (Wr = rr.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === Wr ? void 0 : Wr[0]) && void 0 !== Zr ? Zr : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function SW(rr, Sr) {
      const Qr = sZ(Sr).slice(0, 40) || "blank";
      return `${(sZ(rr.toLowerCase())||"none").slice(0,Math.max(23,cZ.kb-1-Qr.length))}:${Qr}`.slice(0, cZ.kb)
    }
    const QW = (0, Zr.lazy)((() => Qr.e(309).then((() => Qr(42914))).then((rr => ({
        default: rr.BloxdInformation
      }))))),
      ZW = (0, Zr.lazy)(VZ);

    function WW(rr) {
      return rr ? "general" : "account"
    }
    const aW = new Map,
      jW = (0, Zr.memo)((function(rr) {
        let {
          show: Sr,
          setBeforeResumeCallback: Qr
        } = rr;
        (0, hr.e)();
        const {
          gameState: Wr,
          openSettingsCategory: ar
        } = (0, Tr.n)(["gameState", "openSettingsCategory"]), {
          userContext: fr
        } = (0, Ur.c)(), {
          t: pr
        } = (0, jr.E)(), Kr = (0, Nr.e)(), yr = (0, tr.l)("minChunkAddDist"), Br = "inGame" === Wr, [vr, lr] = (0, Zr.useState)(WW(Br)), [Xr, Pr] = (0, Zr.useState)(null), [Hr, qr] = (0, Zr.useState)([]), Rr = (0, Zr.useRef)(function() {
          const rr = new Date,
            Sr = 6 * (rr.getMonth() + rr.getDate()) % PS.w.length;
          return [...PS.w, ...PS.w].slice(Sr, Sr + 6)
        }()), gr = (0, Zr.useRef)(null), Cr = (0, Zr.useRef)(null), Mr = (0, ZQ.g)(HZ.h, (0, HZ.e)()), Gr = Object.keys(AZ).filter((rr => {
          switch (rr) {
            case "replayViewer":
              return Br;
            case "developerTools":
              return fr.playerHasRank("developer") || !1;
            case "texturePack":
              return zr.featureFlags.settings.canChangeTexturePack;
            case "zU":
              return zr.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return zr.featureFlags.useSocialFeatures || null !== fr.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Lr.siteUsed;
            case "controller":
              return zr.featureFlags.useControllerSupport && (Mr || "controller" === vr);
            default:
              return !0
          }
        }));
        (0, ZQ.c)("toggleFullCoordinateOverlay", (() => {
          const rr = RQ("showCoordinates") && RQ("showChunkCoordinates") && RQ("showFPS");
          gQ("showCoordinates", !rr), gQ("showChunkCoordinates", !rr), gQ("showFPS", !rr), Kr()
        })), (0, ZQ.c)("updatedChunkLoadDist", (() => {
          Kr()
        })), (0, Zr.useEffect)((() => {
          if (Pr(null), null === Tr.c.get("openSettingsCategory")) {
            const rr = (0, wZ.j)() ? aW.get(Br) : void 0;
            lr(rr && Gr.includes(rr) ? rr : WW(Br))
          }
        }), [Sr]), (0, Zr.useEffect)((() => {
          if (Sr && Cr.current) return function(rr) {
            if (oZ) return () => {};
            let Sr = null,
              Qr = null;
            const Zr = () => {
                var rr;
                null !== Qr && (clearTimeout(Qr), Qr = null), null === (rr = Sr) || void 0 === rr || rr.disconnect(), Sr = null
              },
              Wr = () => {
                const Sr = dZ(rr);
                null !== Sr && (oZ = !0, Zr(), (0, hS.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: SW(window.location.hostname, rW(Sr))
                }))
              };
            return Qr = setTimeout((() => {
              Qr = null, Wr(), oZ || (Sr = new MutationObserver(Wr), Sr.observe(rr, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), Zr
          }(Cr.current)
        }), [Sr]), (0, Zr.useEffect)((() => {
          null !== ar && (lr(ar), aW.set(Br, ar), Tr.c.set({
            openSettingsCategory: null
          }))
        }), [ar, Br]), (0, Zr.useLayoutEffect)((() => {
          gr.current && (gr.current.scrollTop = 0)
        }), [vr, Sr]), (0, Zr.useEffect)((() => {
          "updateLog" === vr && (0, er.b)().then(qr)
        }), [vr]), (0, Zr.useEffect)((() => {
          if ((0, LQ.L)(yr)) return;
          const [rr, Sr] = (0, iQ.g)(), [Qr, Zr] = (0, KQ.f)(yr), Wr = (0, kZ.h)(yr[0], rr, Qr), ar = (0, kZ.h)(yr[1], Sr, Zr);
          Yr.gameBridge.send("setChunkAddDistance", {
            horizontal: Wr,
            vertical: ar
          })
        }), [yr]);
        const kr = (0, Zr.useCallback)((async () => {
          Xr && (await Xr(), Pr(null))
        }), [Xr]);

        function Ar() {
          Tr.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, Zr.useEffect)((() => {
          Qr((() => kr))
        }), [kr, Qr]), (0, xr.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Sr ? {} : {
            display: "none"
          },
          children: [(0, xr.jsx)("div", {
            ref: Cr,
            className: "MenuSideBar",
            children: (0, xr.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, xr.jsx)(mr, {
                items: Gr.map((rr => {
                  const Sr = AZ[rr].icon;
                  return {
                    id: rr,
                    faIcon: "string" === typeof Sr ? Sr : void 0,
                    iconElement: "string" === typeof Sr ? void 0 : (0, xr.jsx)(Sr, {}),
                    title: pr(AZ[rr].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: vr,
                onClick: rr => {
                  !async function(rr) {
                    await kr(), lr(rr), aW.set(Br, rr)
                  }(rr)
                }
              })
            })
          }), (0, xr.jsxs)("div", {
            ref: gr,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === vr && (0, xr.jsx)(wS, {
              showing: Sr,
              inGame: Br
            }), "general" === vr && (0, xr.jsx)(rQ, {
              inGame: Br
            }), "audio" === vr && (0, xr.jsx)(SQ, {}), "notifications" === vr && (0, xr.jsx)(eQ, {}), "graphics" === vr && (0, xr.jsx)(VQ, {
              minChunkAddDist: null !== yr && void 0 !== yr ? yr : [2, 2],
              getValue: RQ,
              onChange: gQ,
              setApplySettingsCallback: Pr
            }), "controls" === vr && (0, xr.jsx)(wQ.i, {}), "crosshair" === vr && (0, xr.jsx)(XZ, {
              showing: Sr
            }), "controller" === vr && zr.featureFlags.useControllerSupport && (0, xr.jsx)(PZ.d, {}), zr.featureFlags.settings.canChangeTexturePack && "texturePack" === vr && (0, xr.jsx)(qZ.e, {
              setApplySettingsCallback: Pr
            }), zr.featureFlags.settings.canUseShaderPacks && "zU" === vr && (0, xr.jsx)(Zr.Suspense, {
              fallback: null,
              children: (0, xr.jsx)(ZW, {
                setApplySettingsCallback: Pr
              })
            }), "updateLog" === vr && (0, xr.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, xr.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Hr.map(((rr, Sr) => (0, xr.jsx)(nr.c, {
                  updateLog: rr,
                  index: Sr,
                  close: Ar
                }, Sr)))
              })
            }), "information" === vr && (0, xr.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, xr.jsx)(Zr.Suspense, {
                fallback: null,
                children: (0, xr.jsx)(QW, {})
              })
            }), "alternativeDomains" === vr && (0, xr.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, xr.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: pr("settingsMenu:unblockedDomainsDescription")
              }), (0, xr.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Rr.current.map((rr => (0, xr.jsxs)(Er.h, {
                  onClick: () => {
                    window.open(`https://${rr}`)
                  },
                  children: [(0, xr.jsx)(Ir.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", rr]
                }, rr)))
              })]
            }), "replayViewer" === vr && (0, xr.jsx)(GZ, {}), "developerTools" === vr && (0, xr.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, xr.jsx)(Or, {
                setApplySettingsCallback: Pr
              })
            }), null !== Xr && (0, xr.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, xr.jsx)(Er.h, {
                className: "SettingsMenuRightFooterButton",
                onClick: kr,
                children: pr("general:apply")
              })
            })]
          })]
        })
      }));
    var IW = Qr(3674),
      fW = Qr(1699),
      EW = Qr(3242),
      pW = Qr(5054);
    const xW = (0, Zr.lazy)((() => Promise.resolve().then((() => Qr(5420))).then((rr => (rr.needGameClientAfterPaint(), (0, IW.b)((rr => rr.loadCharacterCustomisationUI()), (rr => rr.CharacterCustomisationUI))))))),
      mW = "openCustomisationTab";

    function NW(rr) {
      var Sr, Qr, Wr;
      let {
        show: ar
      } = rr;
      const {
        userContext: jr
      } = (0, Ur.c)(), Ir = (0, wr.usePurchasesAllowed)(), fr = (0, Zr.useRef)(null);
      var Er, pr;
      jr !== lr.NULL_USER_CONTEXT && (null === (Sr = fr.current) || void 0 === Sr ? void 0 : Sr.whamm) !== jr.whamm && (fr.current = {
        whamm: jr.whamm,
        mountKey: (null !== (Er = null === (pr = fr.current) || void 0 === pr ? void 0 : pr.mountKey) && void 0 !== Er ? Er : -1) + 1
      });
      const [Nr, tr] = (0, Zr.useState)("characters");
      if ((0, ZQ.c)(mW, tr), !ar) return null;
      const hr = null !== (0, fW.l)(Date.now()),
        zr = jr.getOwnedCosmeticPacks(),
        Yr = PS.Qb.filter((rr => "pet" === rr || "aura" === rr ? hr || (0, EW.t)(rr).some((Sr => Sr !== `${rr}_none` && (0, EW.E)(rr, Sr, zr))) : "cape" !== rr && "nameColour" !== rr || (0, Gr.c)(jr.getPlayerRanks()) || Ir)).map((rr => ({
          id: rr,
          faIcon: PS.E[rr],
          title: PS.H[rr],
          redDot: !1
        })));
      return (0, xr.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, xr.jsx)("div", {
          className: "MenuSideBar",
          children: (0, xr.jsx)(mr, {
            items: Yr,
            selectedItemId: Nr,
            onClick: rr => {
              tr(rr)
            }
          })
        }), (0, xr.jsx)("div", {
          className: "MenuBody",
          children: (0, xr.jsx)(Zr.Suspense, {
            fallback: (0, xr.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, xr.jsx)(yr.c, {})
            }),
            children: (0, xr.jsx)(xW, {
              selectedTab: Nr,
              noWebGlFallback: tW
            }, null !== (Qr = null === (Wr = fr.current) || void 0 === Wr ? void 0 : Wr.mountKey) && void 0 !== Qr ? Qr : 0)
          })
        })]
      })
    }

    function UW() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, xr.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: rr((0, pW.e)((0, pW.b)()))
      })
    }
    const tW = (0, xr.jsx)(UW, {});
    var hW = Qr(1588),
      zW = Qr(1597),
      YW = Qr(35448),
      nW = Qr(5297),
      eW = Qr(4656),
      KW = Qr(4738),
      yW = Qr(9890),
      BW = Qr(35455),
      TW = Qr(35468),
      vW = Qr(2075),
      OW = Qr(2057),
      LW = Qr(5731),
      lW = Qr(1317),
      XW = Qr(1279),
      PW = Qr(1793),
      HW = Qr(9965),
      qW = Qr(3416),
      RW = Qr(3418);

    function gW(rr) {
      return rr ? Object.keys(rr).sort(((Sr, Qr) => {
        var Zr, Wr, ar, jr;
        const Ir = (null !== (Zr = null === (Wr = rr[Qr]) || void 0 === Wr ? void 0 : Wr.sortPriority) && void 0 !== Zr ? Zr : 0) - (null !== (ar = null === (jr = rr[Sr]) || void 0 === jr ? void 0 : jr.sortPriority) && void 0 !== ar ? ar : 0);
        return 0 !== Ir ? Ir : Sr.localeCompare(Qr)
      })) : []
    }
    const CW = [{
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

    function MW(rr) {
      for (const {
          threshold: Sr,
          suffix: Qr
        }
        of CW)
        if (rr >= Sr) {
          const Zr = rr / Sr;
          return Zr >= 100 ? `${Math.floor(Zr)}${Qr}` : Zr >= 10 ? `${Zr.toFixed(1).replace(/\.0$/,"")}${Qr}` : `${Zr.toFixed(2).replace(/\.?0+$/,"")}${Qr}`
        } return String(rr)
    }
    var GW = Qr(4205);
    const kW = {
        normal: "0.8em",
        big: "1em"
      },
      AW = (0, Zr.memo)((function(rr) {
        let {
          item: Sr,
          amount: Qr = 0,
          size: Zr = "normal",
          tier: Wr = null
        } = rr;
        return (0, xr.jsx)("div", {
          className: ar()("SmpSlot", `SmpSlot-${Zr}`),
          children: Sr && (0, xr.jsx)(vW.d, {
            itemName: Sr,
            amount: Qr > 1 ? Qr : 0,
            amountFontSize: kW[Zr],
            enchantmentTier: Wr
          })
        })
      }));

    function VW(rr) {
      let {
        amount: Sr,
        exact: Qr = !1,
        className: Zr
      } = rr;
      return (0, xr.jsxs)("span", {
        className: ar()("SmpGold", Zr),
        children: [(0, xr.jsx)("span", {
          className: "SmpCoin",
          children: (0, xr.jsx)(vW.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Qr ? Sr.toLocaleString("en-US") : MW(Sr)]
      })
    }

    function iW(rr) {
      let {
        count: Sr = 5,
        grid: Qr = !1
      } = rr;
      return (0, xr.jsx)("div", {
        className: Qr ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Sr
        }, ((rr, Sr) => (0, xr.jsxs)("div", {
          className: ar()(Qr ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, xr.jsx)("div", {
            className: ar()("SmpSlot", Qr ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, xr.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, xr.jsx)("b", {}), (0, xr.jsx)("small", {})]
          }), (0, xr.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Sr)))
      })
    }

    function wW(rr) {
      let {
        title: Sr,
        children: Qr
      } = rr;
      return (0, xr.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, xr.jsx)("b", {
          children: Sr
        }), Qr && (0, xr.jsx)("small", {
          children: Qr
        })]
      })
    }

    function cW(rr) {
      let {
        entry: Sr
      } = rr;
      return (0, xr.jsx)(wW, {
        title: (0, xr.jsx)(OW.c, {
          text: Sr.item.customTitle
        }),
        children: (0, xr.jsx)(OW.c, {
          text: Sr.item.description
        })
      })
    }

    function FW(rr) {
      return (0, xr.jsx)(GW.d, {
        ...rr,
        className: ar()("SmpChoice", rr.className),
        reselectable: !0
      })
    }

    function oW() {
      return (0, xr.jsx)("span", {
        className: "SmpLoader",
        children: (0, xr.jsx)(yr.c, {})
      })
    }

    function bW(rr) {
      let {
        value: Sr,
        onChange: Qr,
        min: Wr = 1,
        max: ar,
        step: jr = 1,
        label: Ir
      } = rr;
      const fr = (0, Zr.useRef)(null),
        Er = (0, Zr.useRef)(Sr);
      Er.current = Sr;
      const [pr, mr] = (0, Zr.useState)(null), Nr = rr => Math.max(Wr, Math.min(ar, Math.floor(rr))), Ur = rr => {
        const Sr = Er.current,
          Zr = "function" === typeof jr ? jr(Sr, rr) : jr,
          Wr = Nr(Sr + Zr * rr);
        Er.current = Wr, Qr(Wr)
      };
      (0, Zr.useEffect)((() => {
        if (null === pr) return;
        let rr;
        const Sr = () => {
            mr(null)
          },
          Qr = setTimeout((() => {
            rr = setInterval((() => {
              Ur(pr);
              const rr = Er.current;
              (pr > 0 ? rr >= ar : rr <= Wr) && Sr()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Sr), window.addEventListener("pointercancel", Sr), window.addEventListener("blur", Sr), () => {
          clearTimeout(Qr), clearInterval(rr), window.removeEventListener("pointerup", Sr), window.removeEventListener("pointercancel", Sr), window.removeEventListener("blur", Sr)
        }
      }), [pr]), (0, Zr.useEffect)((() => {
        const rr = fr.current;
        rr && document.activeElement !== rr && rr.value !== String(Sr) && (rr.value = String(Sr))
      }), [Sr]), (0, Zr.useEffect)((() => {
        const rr = fr.current;
        if (!rr) return;
        const Sr = () => {
          rr.value = String(Er.current)
        };
        return rr.addEventListener("blur", Sr), () => {
          rr.removeEventListener("blur", Sr)
        }
      }), []);
      const tr = rr => (0, xr.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${rr>0?"More":"Less"} ${Ir}`,
        disabled: rr > 0 ? Sr >= ar : Sr <= Wr,
        onPointerDown: Sr => {
          0 === Sr.button && (Ur(rr), mr(rr))
        },
        onKeyDown: Sr => {
          "Enter" !== Sr.key && " " !== Sr.key || Ur(rr)
        },
        onContextMenu: rr => {
          rr.preventDefault()
        },
        children: rr > 0 ? "+" : "\u2212"
      });
      return (0, xr.jsxs)("div", {
        className: "SmpStepper",
        children: [tr(-1), (0, xr.jsx)(Kr.b, {
          className: "SmpStepperInput",
          domRef: fr,
          defaultValue: String(Sr),
          ariaLabel: Ir,
          type: "text",
          blurOnEnter: !0,
          onValueChange: rr => {
            const Sr = rr.replace(/[^\d]/g, "");
            fr.current && Sr !== rr && (fr.current.value = Sr), "" !== Sr && Qr(Nr(Number(Sr)))
          }
        }), tr(1)]
      })
    }

    function JW(rr) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, rr))) - 1))
    }
    var DW = Qr(35472),
      dW = Qr(1287);
    const sW = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    dW.D, Mr.Cc.length;
    new Map;
    var uW = Qr(4489);

    function ra(rr, Sr) {
      var Qr;
      return Sr && (null === (Qr = rr[Sr]) || void 0 === Qr ? void 0 : Qr.smp) || null
    }

    function Sa(rr, Sr) {
      const Qr = [];
      for (const Wr of gW(rr)) {
        var Zr;
        const ar = rr[Wr];
        (null === (Zr = ar.smp) || void 0 === Zr ? void 0 : Zr.kind) === Sr && Qr.push({
          key: Wr,
          item: ar,
          meta: ar.smp
        })
      }
      return Qr
    }

    function Qa(rr, Sr) {
      var Qr;
      return null !== (Qr = Sa(rr, Sr)[0]) && void 0 !== Qr ? Qr : null
    }
    const Za = "50% 0% 50% 0%",
      Wa = [{
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

    function aa(rr) {
      const Sr = rr - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Qr,
          suffix: Zr
        }
        of Wa)
        if (Sr >= Qr) return `${Math.floor(Sr/Qr)}${Zr}`;
      return "<1s"
    }

    function ja(rr) {
      const Sr = rr.map(yW.f),
        Qr = [];
      return Sr.forEach(((rr, Zr) => {
        const Wr = function(rr) {
            const Sr = rr.match(/\d+/);
            return Sr ? Number(Sr[0]) : 0
          }(rr),
          ar = Zr === Sr.length - 1;
        (ar || 1 === Wr || 10 === Wr || 100 === Wr) && Qr.push({
          label: rr,
          quantity: Wr,
          isAll: ar
        })
      })), Qr
    }
    let Ia = null;

    function fa(rr, Sr) {
      const Qr = Sr.trim().toLowerCase();
      if (!Qr) return [];
      const Zr = rr => {
          if (rr === Qr) return 0;
          if (rr.startsWith(Qr)) return 1;
          const Sr = rr.indexOf(Qr);
          return -1 === Sr ? -1 : 2 + Sr
        },
        Wr = [];
      for (const Ir of rr) {
        const rr = [Zr(Ir.lowerLabel), Zr(Ir.lowerName)].filter((rr => -1 !== rr));
        rr.length && Wr.push({
          item: Ir,
          rank: Math.min(...rr)
        })
      }
      if (Wr.length > 0) return Wr.sort(((rr, Sr) => rr.rank - Sr.rank)).map((rr => rr.item));
      const ar = [...Qr],
        jr = rr => {
          let Sr = 0;
          for (const Qr of ar) {
            if (Sr = rr.indexOf(Qr, Sr), -1 === Sr) return !1;
            Sr++
          }
          return !0
        };
      return rr.filter((rr => jr(rr.lowerLabel) || jr(rr.lowerName)))
    }

    function Ea(rr, Sr) {
      var Qr;
      return null !== (Qr = null === rr || void 0 === rr ? void 0 : rr[Sr]) && void 0 !== Qr ? Qr : Sr
    }

    function pa(rr, Sr) {
      const Qr = rr.userInput;
      return void 0 !== Sr && "dropdown" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) && Qr.dropdownOptions.map(yW.f).includes(Sr) ? Sr : function(rr) {
        const Sr = rr.userInput;
        if ("dropdown" !== (null === Sr || void 0 === Sr ? void 0 : Sr.type) || 0 === Sr.dropdownOptions.length) return null;
        const Qr = Sr.dropdownOptions.map(yW.f);
        return Sr.initialValue && Qr.includes(Sr.initialValue) ? Sr.initialValue : Qr[Qr.length - 1]
      }(rr)
    }

    function xa(rr) {
      return void 0 === rr ? "" : JSON.stringify(rr)
    }
    const ma = (0, Zr.createContext)(null);

    function Na() {
      return (0, Zr.useContext)(ma)
    }
    var Ua = Qr(3773);
    const ta = (0, Zr.memo)((function(rr) {
        let {
          name: Sr,
          label: Qr,
          onPick: Zr
        } = rr;
        return (0, xr.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Qr,
          onClick: () => {
            Zr(Sr)
          },
          children: [(0, xr.jsx)(AW, {
            item: Sr,
            size: "big"
          }), (0, xr.jsx)("span", {
            children: Qr
          })]
        })
      })),
      ha = (0, Zr.memo)((function(rr) {
        let {
          items: Sr,
          query: Qr,
          onPick: Wr
        } = rr;
        const {
          t: ar
        } = (0, jr.E)(), [Ir, fr] = (0, Zr.useState)(new Set), Er = (0, Zr.useMemo)((() => function(rr) {
          const Sr = new Map;
          for (const Qr of rr) {
            let rr = Sr.get(Qr.category);
            rr || (rr = [], Sr.set(Qr.category, rr)), rr.push(Qr)
          }
          return [...sW, "other"].filter((rr => Sr.has(rr))).map((rr => ({
            category: rr,
            items: Sr.get(rr)
          })))
        }(Sr)), [Sr]), pr = (0, Zr.useMemo)((() => fa(Sr, Qr).slice(0, 60)), [Sr, Qr]);
        return Qr.trim() ? 0 === pr.length ? (0, xr.jsx)(wW, {
          title: ar("smpShop:noItemsFound", {
            query: Qr.trim()
          }),
          children: ar("smpShop:tryShorterName")
        }) : (0, xr.jsx)(Ua.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Za,
          observerUpdateDeps: [Qr],
          children: pr.map((rr => (0, xr.jsx)(ta, {
            name: rr.name,
            label: rr.label,
            onPick: Wr
          }, rr.name)))
        }) : (0, xr.jsx)(xr.Fragment, {
          children: Er.map((rr => {
            let {
              category: Sr,
              items: Qr
            } = rr;
            const Zr = Ir.has(Sr) || Qr.length <= 48,
              jr = Zr ? Qr : Qr.slice(0, 48);
            return (0, xr.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, xr.jsxs)("h4", {
                children: [ar("other" === Sr ? "smpShop:otherItems" : `creativeInventory:${Sr}`), !Zr && (0, xr.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    fr(new Set([...Ir, Sr]))
                  },
                  children: ar("smpShop:showAll", {
                    count: Qr.length
                  })
                })]
              }), (0, xr.jsx)(Ua.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Za,
                observerUpdateDeps: [Zr],
                children: jr.map((rr => (0, xr.jsx)(ta, {
                  name: rr.name,
                  label: rr.label,
                  onPick: Wr
                }, rr.name)))
              })]
            }, Sr)
          }))
        })
      }));

    function za(rr, Sr) {
      const {
        searched: Qr,
        shown: Wr,
        searchFor: ar,
        loading: jr
      } = function(rr, Sr) {
        var Qr;
        const Wr = Na(),
          [ar, jr] = (0, Zr.useState)(void 0),
          Ir = (0, Zr.useRef)(void 0),
          fr = (0, Zr.useRef)(0),
          Er = (0, Zr.useRef)(void 0),
          pr = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.meta.item) && void 0 !== Qr ? Qr : null,
          xr = !!rr && Wr.isPending(rr.key);
        (0, Zr.useEffect)((() => {
          if (!rr || xr || !Sr || void 0 === ar || ar === pr) return;
          const Qr = ar === Ir.current && Wr.gaveUpAt(rr.key) > fr.current && Er.current !== ar;
          (ar !== Ir.current || Qr) && Wr.act(rr.key, null !== ar && void 0 !== ar ? ar : "*", Qr) && (Qr && (Er.current = ar), Ir.current = ar, fr.current = Date.now())
        }), [rr, xr, Sr, ar, pr, Wr]);
        const mr = (0, Zr.useCallback)((rr => {
            Ir.current = void 0, Er.current = void 0, jr(rr)
          }), []),
          Nr = void 0 !== ar && ar !== pr && (xr || Ir.current !== ar);
        return {
          searched: pr,
          shown: Nr ? ar : pr,
          searchFor: mr,
          loading: Nr || xr || null !== pr && !Sr
        }
      }(rr, Sr), Ir = (0, Zr.useMemo)((() => function() {
        var rr;
        let Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Wr = `${(0,uW.k)()}\x1f${Sr.join("\x1e")}\x1f${Qr.join("\x1e")}\x1f${JSON.stringify(Zr)}`;
        if ((null === (rr = Ia) || void 0 === rr ? void 0 : rr.key) === Wr) return Ia.items;
        const ar = new Set(Qr),
          jr = new Set,
          Ir = [],
          fr = (rr, Sr) => {
            var Qr;
            if (!rr || jr.has(rr) || ar.has(rr)) return;
            jr.add(rr);
            const Wr = null !== (Qr = Zr[rr]) && void 0 !== Qr ? Qr : rr;
            Ir.push({
              name: rr,
              label: Wr,
              lowerLabel: Wr.toLowerCase(),
              lowerName: rr.toLowerCase(),
              category: Sr
            })
          };
        for (const pr of (0, DW.creativeItemIds)()) {
          var Er;
          (0, DW.itemIsDisabled)(pr, !0, !0, !1) || (0, DW.showOnlyInCreativeSearch)(pr) || fr((0, uW.g)(pr), null !== (Er = (0, DW.creativeCategoryOf)(pr)) && void 0 !== Er ? Er : "other")
        }
        for (const pr of Sr) fr(pr, "other");
        return Ia = {
          key: Wr,
          items: Ir
        }, Ir
      }(null === rr || void 0 === rr ? void 0 : rr.meta.extra, null === rr || void 0 === rr ? void 0 : rr.meta.excluded, null === rr || void 0 === rr ? void 0 : rr.meta.names)), [null === rr || void 0 === rr ? void 0 : rr.meta.extra, null === rr || void 0 === rr ? void 0 : rr.meta.excluded, null === rr || void 0 === rr ? void 0 : rr.meta.names]), [fr, Er] = (0, Zr.useState)(""), [pr, xr] = (0, Zr.useState)(0), [mr, Nr] = (0, Zr.useState)("recent"), Ur = (0, Zr.useCallback)((rr => {
        Er(""), xr((rr => rr + 1)), ar(rr)
      }), [ar]), tr = "browse" === mr || "" !== fr.trim();
      return {
        searched: Qr,
        shown: Wr,
        searchFor: ar,
        loading: jr,
        catalogue: Ir,
        names: null === rr || void 0 === rr ? void 0 : rr.meta.names,
        query: fr,
        setQuery: Er,
        searchBoxKey: pr,
        pickItem: Ur,
        setView: Nr,
        browsing: tr
      }
    }

    function Ya(rr) {
      let {
        browser: Sr,
        children: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)(), Wr = Na();
      return (0, xr.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, xr.jsx)("div", {
          className: "SmpSearch",
          children: (0, xr.jsx)(Kr.b, {
            className: "SmpSearchInput",
            placeholderText: Zr("smpShop:searchPlaceholder"),
            defaultValue: Sr.query,
            onValueChange: rr => {
              Sr.setQuery(rr), Sr.searched && rr.trim() && Sr.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const rr = fa(Sr.catalogue, Sr.query)[0];
              rr ? Sr.pickItem(rr.name) : Sr.query.trim() && Wr.notify(Zr("smpShop:noItemsFound", {
                query: Sr.query.trim()
              }))
            }
          }, Sr.searchBoxKey)
        }), Qr]
      })
    }

    function na(rr) {
      let {
        browser: Sr,
        recentLabel: Qr,
        children: Zr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, xr.jsx)(FW, {
          options: [{
            value: "recent",
            label: Qr
          }, {
            value: "browse",
            label: Wr("smpShop:browseItems")
          }],
          value: Sr.browsing ? "browse" : "recent",
          onChange: Sr.setView,
          ariaLabel: Wr("smpShop:show")
        }), !Sr.browsing && Zr]
      })
    }

    function ea(rr) {
      let {
        item: Sr,
        names: Qr,
        summary: Zr,
        onBack: Wr,
        children: ar
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, xr.jsx)(Er.d, {
          className: "SmpBackButton",
          onClick: Wr,
          children: Ir("general:back")
        }), (0, xr.jsx)(AW, {
          item: Sr,
          size: "big"
        }), (0, xr.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, xr.jsx)("b", {
            children: Ea(Qr, Sr)
          }), Zr && (0, xr.jsx)("small", {
            children: Zr
          })]
        }), ar]
      })
    }

    function Ka(rr) {
      let {
        browser: Sr,
        className: Qr,
        action: Zr,
        above: Wr,
        list: jr,
        summary: Ir,
        recentLabel: fr,
        listControls: Er,
        onBack: pr
      } = rr;
      return (0, xr.jsxs)("div", {
        className: ar()("SmpScreen", Qr),
        children: [(0, xr.jsx)(Ya, {
          browser: Sr,
          children: Zr
        }), Sr.shown && (0, xr.jsx)(ea, {
          item: Sr.shown,
          names: Sr.names,
          summary: !Sr.loading && Ir,
          onBack: () => {
            null === pr || void 0 === pr || pr(), Sr.searchFor(null)
          },
          children: Er
        }), Wr, Sr.shown ? jr : (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(na, {
            browser: Sr,
            recentLabel: fr,
            children: Er
          }), Sr.browsing ? (0, xr.jsx)(ha, {
            items: Sr.catalogue,
            query: Sr.query,
            onPick: Sr.pickItem
          }) : jr]
        })]
      })
    }

    function ya(rr, Sr) {
      const Qr = rr.map((rr => {
        let {
          meta: Sr
        } = rr;
        return Sr.pricePerItem
      }));
      return "min" === Sr ? Math.min(...Qr) : Math.max(...Qr)
    }
    var Ba = Qr(7550);
    const Ta = (0, Zr.memo)((function(rr) {
      var Sr;
      const {
        t: Qr
      } = (0, jr.E)(), Zr = null === rr.seller, Wr = rr.quantity * rr.pricePerItem;
      return (0, xr.jsxs)("div", {
        className: rr.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, xr.jsx)(AW, {
          item: rr.item,
          amount: rr.quantity,
          size: rr.grid ? "big" : "normal",
          tier: rr.tier
        }), (0, xr.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, xr.jsx)("b", {
            children: (0, xr.jsx)(OW.c, {
              text: null !== (Sr = rr.title) && void 0 !== Sr ? Sr : `${rr.quantity}x ${rr.item}`
            })
          }), (0, xr.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, xr.jsx)("span", {
              children: Zr ? Qr("smpShop:you") : (0, xr.jsx)(OW.c, {
                text: [{
                  entityName: rr.seller
                }]
              })
            }), (0, xr.jsx)("span", {
              children: Qr("smpShop:timeLeft", {
                time: aa(rr.expiresAt)
              })
            })]
          })]
        }), (0, xr.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, xr.jsx)(VW, {
            amount: rr.pricePerItem
          }), (0, xr.jsx)("small", {
            children: Qr("smpShop:each")
          })]
        }), (0, xr.jsx)(Er.h, {
          className: "SmpBuyButton",
          disabled: Zr || !rr.canAfford && !rr.busy,
          loading: rr.busy,
          onClick: () => {
            rr.onBuy(rr.itemKey)
          },
          children: Zr ? Qr("smpShop:yours") : (0, xr.jsx)(VW, {
            amount: Wr
          })
        })]
      })
    }));

    function va(rr) {
      let {
        view: Sr,
        onChange: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return (0, xr.jsx)(GW.d, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Zr("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, xr.jsx)(Ir.c, {
            name: "list"
          }),
          ariaLabel: Zr("smpShop:listView")
        }, {
          value: "grid",
          label: (0, xr.jsx)(Ir.c, {
            name: "grid-2"
          }),
          ariaLabel: Zr("smpShop:gridView")
        }],
        value: Sr,
        onChange: Qr
      })
    }

    function Oa(rr) {
      let {
        entries: Sr,
        view: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)(), Wr = Na(), ar = "grid" === Qr;
      return (0, xr.jsxs)(xr.Fragment, {
        children: [!ar && (0, xr.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, xr.jsx)("span", {}), (0, xr.jsx)("span", {
            children: Zr("smpShop:columnItem")
          }), (0, xr.jsx)("span", {
            children: Zr("smpShop:columnPriceEach")
          }), (0, xr.jsx)("span", {
            children: Zr("smpShop:columnTotal")
          })]
        }), (0, xr.jsx)(Ua.d, {
          lazyLoadedClassName: ar ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Za,
          observerUpdateDeps: [Sr.length],
          children: Sr.map((rr => {
            var Sr, Qr;
            let {
              key: Zr,
              item: jr,
              meta: Ir
            } = rr;
            const fr = Ir.quantity * Ir.pricePerItem;
            return (0, xr.jsx)(Ta, {
              itemKey: Zr,
              item: Ir.item,
              title: jr.customTitle,
              quantity: Ir.quantity,
              pricePerItem: Ir.pricePerItem,
              seller: Ir.seller,
              expiresAt: Ir.expiresAt,
              tier: null !== (Sr = null === (Qr = jr.enchant) || void 0 === Qr ? void 0 : Qr.tier) && void 0 !== Sr ? Sr : null,
              busy: Wr.isPending(Zr) || null !== Ir.seller && !1 === jr.canBuy,
              canAfford: Wr.canAfford(jr, fr),
              grid: ar,
              onBuy: Wr.act
            }, Zr)
          }))
        }, Qr)]
      })
    }
    const La = [1, 10, 100],
      la = [1, 10, 100, 999];

    function Xa(rr) {
      var Sr, Qr, Wr, fr, pr, mr, Nr, Ur, tr, hr;
      const {
        t: zr
      } = (0, jr.E)(), Yr = Na(), {
        creator: nr,
        mode: er
      } = rr, [yr, Br] = (0, Zr.useState)(null !== (Sr = null === nr || void 0 === nr ? void 0 : nr.meta.item) && void 0 !== Sr ? Sr : null), [Tr, vr] = (0, Zr.useState)(1), [Or, Lr] = (0, Zr.useState)(0), [lr, Xr] = (0, Zr.useState)(""), [Pr, Hr] = (0, Zr.useState)(0), qr = (0, Zr.useRef)(yr), Rr = (0, Zr.useRef)(!1), [gr, Cr] = (0, Zr.useState)(!1), Mr = null !== (Qr = null === nr || void 0 === nr ? void 0 : nr.meta.item) && void 0 !== Qr ? Qr : null, Gr = null !== (Wr = null === nr || void 0 === nr ? void 0 : nr.meta.owned) && void 0 !== Wr ? Wr : 0;
      (0, Zr.useEffect)((() => {
        rr.searching || null === Mr || Mr === qr.current || (qr.current = Mr, Rr.current = !1, Br(Mr), Lr(0), vr("list" === er ? Math.max(1, Gr) : 1))
      }), [Mr, rr.searching]);
      const kr = !!nr && !!yr && nr.meta.item === yr,
        Ar = kr ? nr.meta.owned : null !== (fr = null === (pr = rr.inventory) || void 0 === pr || null === (mr = pr.find((rr => rr.item === yr))) || void 0 === mr ? void 0 : mr.quantity) && void 0 !== fr ? fr : 0,
        Vr = "list" === er ? Math.max(1, Ar) : 45954,
        ir = null !== (Nr = rr.prices[0]) && void 0 !== Nr ? Nr : null,
        wr = rr.prices.length ? Math.round(rr.prices.reduce(((rr, Sr) => rr + Sr), 0) / rr.prices.length) : null,
        cr = null === (Ur = rr.inventory) || void 0 === Ur || null === (tr = Ur.find((rr => rr.item === yr))) || void 0 === tr ? void 0 : tr.sellPrice;
      (0, Zr.useEffect)((() => {
        var rr;
        kr && (vr((rr => "list" === er ? Math.min(Math.max(1, rr), Math.max(1, Ar)) : rr)), Rr.current || Lr(null !== (rr = null !== ir && void 0 !== ir ? ir : wr) && void 0 !== rr ? rr : Math.max(1, null !== cr && void 0 !== cr ? cr : 1)))
      }), [kr, Ar, yr, ir, wr]);
      const Fr = rr => {
          Rr.current = !0, Lr(rr)
        },
        or = Sr => {
          var Qr, Zr, Wr;
          qr.current = Sr, Rr.current = !1, Cr(!1), Xr(""), Hr((rr => rr + 1)), Br(Sr), Lr(0), vr("list" === er && null !== (Qr = null === (Zr = rr.inventory) || void 0 === Zr || null === (Wr = Zr.find((rr => rr.item === Sr))) || void 0 === Wr ? void 0 : Wr.quantity) && void 0 !== Qr ? Qr : 1), (null === nr || void 0 === nr ? void 0 : nr.meta.item) !== Sr && rr.onPickItem(Sr)
        },
        br = Tr * Or,
        Jr = "list" === er && null !== nr && void 0 !== nr && nr.meta.fee ? function(rr, Sr) {
          const Qr = Math.max(0, Sr - rr.taxFreeAllowance);
          return Math.ceil(Math.round(Qr * rr.rate * 1e6) / 1e6)
        }(nr.meta.fee, br) : 0,
        Dr = !!nr && Yr.isPending(nr.key),
        dr = kr && !rr.searching && Tr >= 1 && Or >= 1 && ("order" === er || Ar >= Tr) && !Dr,
        sr = !!yr && !kr && !rr.searching && Tr >= 1 && Or >= 1,
        ur = () => {
          dr ? Yr.act(nr.key, `${Tr}|${Or}`) : sr && (rr.onPickItem(yr), Cr(!0))
        };
      (0, Zr.useEffect)((() => {
        gr && kr && !rr.searching && (Cr(!1), ur())
      }), [gr, kr, rr.searching]);
      const rS = !!yr && !kr && (rr.searching || gr),
        SS = yr ? Ea(rr.names, yr) : "",
        QS = (0, Zr.useMemo)((() => fa(rr.catalogue, lr).slice(0, 8)), [rr.catalogue, lr]),
        ZS = ("list" === er ? La.filter((rr => rr < Ar)) : la).map((rr => ({
          value: rr,
          label: String(rr)
        })));
      "list" === er && Ar > 0 && ZS.push({
        value: Ar,
        label: zr("smpShop:all", {
          count: Ar
        })
      });
      const WS = [];
      return null !== ir && (ir > 1 && WS.push({
        value: ir - 1,
        label: zr("smpShop:undercut", {
          price: MW(ir - 1)
        })
      }), WS.push({
        value: ir,
        label: zr("smpShop:lowest", {
          price: MW(ir)
        })
      })), null !== wr && wr !== ir && WS.push({
        value: wr,
        label: zr("smpShop:average", {
          price: MW(wr)
        })
      }), (0, xr.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, xr.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, xr.jsx)("b", {
            children: zr("list" === er ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, xr.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": zr("smpShop:close"),
            onClick: rr.onClose,
            children: (0, xr.jsx)(Ir.c, {
              name: "xmark"
            })
          })]
        }), "list" === er && (0, xr.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (hr = rr.inventory) && void 0 !== hr && hr.length ? rr.inventory.map((rr => {
            let {
              item: Sr,
              quantity: Qr
            } = rr;
            return (0, xr.jsx)("button", {
              type: "button",
              title: Sr,
              className: ar()("SmpPickerSlot", {
                SmpPickerSlotOn: Sr === yr
              }),
              onClick: () => {
                or(Sr)
              },
              children: (0, xr.jsx)(AW, {
                item: Sr,
                amount: Qr
              })
            }, Sr)
          })) : (0, xr.jsx)("span", {
            className: "SmpMuted",
            children: zr("smpShop:nothingToList")
          })
        }), ("list" === er || !yr) && (0, xr.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, xr.jsx)(Kr.b, {
            className: "SmpSearchInput",
            placeholderText: zr("list" === er ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: lr,
            onValueChange: Xr,
            blurOnEnter: !0,
            onEnter: () => {
              QS[0] && or(QS[0].name)
            }
          }, Pr), QS.length > 0 && (0, xr.jsx)("div", {
            className: "SmpPicker",
            children: QS.map((rr => {
              let {
                name: Sr
              } = rr;
              return (0, xr.jsx)("button", {
                type: "button",
                title: Sr,
                className: ar()("SmpPickerSlot", {
                  SmpPickerSlotOn: Sr === yr
                }),
                onClick: () => {
                  or(Sr)
                },
                children: (0, xr.jsx)(AW, {
                  item: Sr
                })
              }, Sr)
            }))
          })]
        }), yr && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsxs)("div", {
            className: "SmpPickedName",
            children: [SS, rS && (0, xr.jsx)(oW, {})]
          }), (0, xr.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, xr.jsxs)("div", {
              className: "SmpField",
              children: [(0, xr.jsxs)("span", {
                children: [zr("smpShop:quantity"), "list" === er && kr && (0, xr.jsx)("small", {
                  children: zr("smpShop:youHave", {
                    count: Ar
                  })
                })]
              }), (0, xr.jsx)(bW, {
                value: Tr,
                onChange: vr,
                max: Vr,
                label: zr("smpShop:quantity")
              }), (0, xr.jsx)(FW, {
                options: ZS,
                value: Tr,
                onChange: vr,
                ariaLabel: zr("smpShop:quantity")
              })]
            }), (0, xr.jsxs)("div", {
              className: "SmpField",
              children: [(0, xr.jsx)("span", {
                children: zr("smpShop:pricePerItem")
              }), (0, xr.jsx)(bW, {
                value: Math.max(1, Or),
                onChange: Fr,
                max: 9999999,
                step: JW,
                label: zr("smpShop:pricePerItem")
              }), (0, xr.jsx)(FW, {
                options: WS,
                value: Or,
                onChange: Fr,
                ariaLabel: zr("smpShop:pricePerItem")
              })]
            })]
          }), "list" === er && (0, xr.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, xr.jsxs)("span", {
              children: [zr("smpShop:youGet"), " ", (0, xr.jsx)(VW, {
                amount: Math.max(0, br - Jr),
                exact: !0
              })]
            }), (0, xr.jsx)("small", {
              children: Jr > 0 ? zr("smpShop:listingFee", {
                fee: Jr.toLocaleString("en-US")
              }) : zr("smpShop:listingRules")
            })]
          }), (0, xr.jsx)(Er.u, {
            className: "SmpSubmit",
            disabled: !dr && !sr && !Dr,
            loading: Dr || rS || kr && rr.searching,
            onClick: ur,
            children: "list" === er ? zr("smpShop:listButton", {
              count: Tr,
              item: SS
            }) : (0, xr.jsxs)(xr.Fragment, {
              children: [zr("smpShop:orderButton", {
                count: Tr,
                item: SS
              }), " ", Or >= 1 && (0, xr.jsx)(VW, {
                amount: br
              })]
            })
          })]
        })]
      })
    }

    function Pa() {
      var rr;
      const {
        t: Sr
      } = (0, jr.E)(), Qr = Na(), Wr = null === (rr = Qr.shopInfo[Qr.categoryKey]) || void 0 === rr ? void 0 : rr.items, ar = Qa(Wr, "search"), Ir = Qa(Wr, "creator"), fr = Sa(Wr, "enchantedCreator"), pr = Sa(Wr, "listing"), mr = Qa(Wr, "empty"), Nr = za(ar, pr.length > 0 || null !== mr), {
        searched: Ur,
        shown: tr,
        loading: hr
      } = Nr, [zr, Yr] = (0, Zr.useState)(!1), [nr, er] = function() {
        const [rr, Sr] = (0, Ba.e)("smpMarketView", "list");
        return ["grid" === rr ? "grid" : "list", Sr]
      }(), Kr = "grid" === nr, yr = (0, Zr.useMemo)((() => pr.filter((rr => {
        let {
          meta: Sr
        } = rr;
        return null !== Sr.seller && Sr.item === Ur
      })).map((rr => {
        let {
          meta: Sr
        } = rr;
        return Sr.pricePerItem
      })).sort(((rr, Sr) => rr - Sr))), [pr, Ur]), Br = (0, Zr.useMemo)((() => {
        const rr = new Set(Nr.catalogue.map((rr => {
          let {
            name: Sr
          } = rr;
          return Sr
        })));
        return function(rr) {
          for (const Sr in rr)
            if ("sell" === rr[Sr].smp) return Sa(rr[Sr].items, "sell").filter((rr => {
              let {
                item: Sr
              } = rr;
              return !Sr.enchant
            })).map((rr => {
              let {
                meta: Sr
              } = rr;
              return {
                item: Sr.item,
                quantity: Sr.quantity,
                sellPrice: Sr.pricePerItem
              }
            }));
          return []
        }(Qr.shopInfo).filter((Sr => {
          let {
            item: Qr
          } = Sr;
          return rr.has(Qr)
        }))
      }), [Qr.shopInfo, Nr.catalogue]);
      return (0, xr.jsx)(Ka, {
        browser: Nr,
        className: "SmpMarketTab",
        recentLabel: Sr("smpShop:recentlyListed"),
        action: (0, xr.jsx)(Er.u, {
          className: "SmpSellButton",
          onClick: () => {
            Yr((rr => !rr))
          },
          children: Sr("smpShop:sell")
        }),
        above: zr && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(Xa, {
            mode: "list",
            creator: Ir,
            inventory: Br,
            catalogue: Nr.catalogue,
            names: Nr.names,
            searching: hr,
            prices: yr,
            onPickItem: Nr.searchFor,
            onClose: () => {
              Yr(!1)
            }
          }), fr.length > 0 && (0, xr.jsx)(Ha, {
            entries: fr
          })]
        }),
        listControls: (0, xr.jsx)(va, {
          view: nr,
          onChange: er
        }),
        summary: tr && (pr.length > 0 ? Sr(1 === pr.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: pr.length,
          price: MW(ya(pr, "min"))
        }) : Sr("smpShop:noOneSelling", {
          item: Ea(Nr.names, tr)
        })),
        list: hr ? (0, xr.jsx)(iW, {
          grid: Kr
        }) : pr.length > 0 ? (0, xr.jsx)(Oa, {
          entries: pr,
          view: nr
        }) : mr ? (0, xr.jsx)(cW, {
          entry: mr
        }) : (0, xr.jsx)(iW, {
          count: 3,
          grid: Kr
        })
      })
    }

    function Ha(rr) {
      let {
        entries: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), Wr = Na(), [ar, Ir] = (0, Zr.useState)({});
      return (0, xr.jsx)("div", {
        className: "SmpList",
        children: Sr.map((rr => {
          var Sr, Zr, jr;
          let {
            key: fr,
            item: pr,
            meta: mr
          } = rr;
          const Nr = null !== (Sr = ar[fr]) && void 0 !== Sr ? Sr : 1;
          return (0, xr.jsxs)("div", {
            className: "SmpRow",
            children: [(0, xr.jsx)(AW, {
              item: mr.item,
              amount: mr.quantity,
              tier: null !== (Zr = null === (jr = pr.enchant) || void 0 === jr ? void 0 : jr.tier) && void 0 !== Zr ? Zr : null
            }), (0, xr.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, xr.jsx)("b", {
                children: (0, xr.jsx)(OW.c, {
                  text: pr.customTitle
                })
              }), (0, xr.jsx)("small", {
                children: Qr("smpShop:enchantedListing")
              })]
            }), (0, xr.jsx)(bW, {
              value: Nr,
              onChange: rr => {
                Ir({
                  ...ar,
                  [fr]: rr
                })
              },
              max: 9999999,
              step: JW,
              label: Qr("smpShop:pricePerItem")
            }), (0, xr.jsxs)(Er.u, {
              loading: Wr.isPending(fr),
              onClick: () => {
                Wr.act(fr, String(Nr))
              },
              children: [Qr("smpShop:list"), " ", (0, xr.jsx)(VW, {
                amount: Nr
              })]
            })]
          }, fr)
        }))
      })
    }
    const qa = (0, Zr.memo)((function(rr) {
      let {
        itemKey: Sr,
        item: Qr,
        quantity: Zr,
        pricePerItem: Wr,
        tier: jr,
        selected: Ir,
        onSelect: fr
      } = rr;
      return (0, xr.jsxs)("button", {
        type: "button",
        className: ar()("SmpInventorySlot", {
          SmpInventorySlotOn: Ir
        }),
        title: Qr,
        onClick: () => {
          fr(Sr)
        },
        children: [(0, xr.jsx)(AW, {
          item: Qr,
          amount: Zr,
          tier: jr
        }), (0, xr.jsx)(VW, {
          amount: Wr
        })]
      })
    }));

    function Ra() {
      var rr;
      const {
        t: Sr
      } = (0, jr.E)(), Qr = Na(), Wr = null === (rr = Qr.shopInfo[Qr.categoryKey]) || void 0 === rr ? void 0 : rr.items, Ir = Sa(Wr, "sell"), fr = Qa(Wr, "empty"), [Er, pr] = (0, Zr.useState)(null), [mr, Nr] = (0, Zr.useState)({}), Ur = Ir.find((rr => {
        let {
          key: Sr
        } = rr;
        return Sr === Er
      }));
      return 0 === Ir.length ? (0, xr.jsx)("div", {
        className: "SmpScreen",
        children: (0, xr.jsx)(wW, {
          title: fr ? (0, xr.jsx)(OW.c, {
            text: fr.item.customTitle
          }) : Sr("smpShop:nothingToSell"),
          children: fr && (0, xr.jsx)(OW.c, {
            text: fr.item.description
          })
        })
      }) : (0, xr.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, xr.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Ir.map((rr => {
            var Sr, Qr;
            let {
              key: Zr,
              item: Wr,
              meta: ar
            } = rr;
            return (0, xr.jsx)(qa, {
              itemKey: Zr,
              item: ar.item,
              quantity: ar.quantity,
              pricePerItem: ar.pricePerItem,
              tier: null !== (Sr = null === (Qr = Wr.enchant) || void 0 === Qr ? void 0 : Qr.tier) && void 0 !== Sr ? Sr : null,
              selected: Zr === Er,
              onSelect: pr
            }, Zr)
          }))
        }), (0, xr.jsx)("div", {
          className: ar()("SmpSellBar", {
            SmpSellBarIdle: !Ur
          }),
          children: Ur ? (0, xr.jsx)(ga, {
            entry: Ur,
            choice: pa(Ur.item, mr[Ur.key]),
            onChoose: rr => {
              Nr({
                ...mr,
                [Ur.key]: rr
              })
            }
          }) : (0, xr.jsx)("span", {
            className: "SmpMuted",
            children: Sr("smpShop:tapToSell")
          })
        })]
      })
    }

    function ga(rr) {
      var Sr, Qr, Zr, Wr;
      let {
        entry: ar,
        choice: Ir,
        onChoose: fr
      } = rr;
      const {
        t: pr
      } = (0, jr.E)(), mr = Na(), {
        key: Nr,
        item: Ur,
        meta: tr
      } = ar, hr = ja("dropdown" === (null === (Sr = Ur.userInput) || void 0 === Sr ? void 0 : Sr.type) ? Ur.userInput.dropdownOptions : []), zr = null === Ir ? 0 : -(0, yW.e)(Ur, Ir);
      return (0, xr.jsxs)(xr.Fragment, {
        children: [(0, xr.jsx)(AW, {
          item: tr.item,
          amount: tr.quantity,
          tier: null !== (Qr = null === (Zr = Ur.enchant) || void 0 === Zr ? void 0 : Zr.tier) && void 0 !== Qr ? Qr : null
        }), (0, xr.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, xr.jsx)("b", {
            children: (0, xr.jsx)(OW.c, {
              text: null !== (Wr = Ur.customTitle) && void 0 !== Wr ? Wr : tr.item
            })
          }), (0, xr.jsx)("small", {
            children: pr("smpShop:sellEach", {
              count: tr.quantity
            })
          })]
        }), (0, xr.jsx)(FW, {
          options: hr.map((rr => {
            let {
              label: Sr,
              quantity: Qr,
              isAll: Zr
            } = rr;
            return {
              value: Sr,
              label: Zr ? pr("smpShop:all", {
                count: Qr
              }) : String(Qr)
            }
          })),
          value: Ir,
          onChange: fr,
          ariaLabel: pr("smpShop:quantity")
        }), (0, xr.jsxs)(Er.u, {
          loading: mr.isPending(Nr),
          disabled: null === Ir,
          onClick: () => {
            mr.act(Nr, Ir)
          },
          children: [pr("smpShop:sellButton"), " ", (0, xr.jsx)(VW, {
            amount: zr
          })]
        })]
      })
    }

    function Ca() {
      var rr;
      const {
        t: Sr
      } = (0, jr.E)(), Qr = Na(), Zr = null === (rr = Qr.shopInfo[Qr.categoryKey]) || void 0 === rr ? void 0 : rr.items, Wr = Sa(Zr, "collect"), ar = Sa(Zr, "myListing"), Ir = (rr, Sr) => Qr.isPending(rr) || !1 === Sr.canBuy;
      return (0, xr.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, xr.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Sr("smpShop:readyToCollect")
        }), Wr.length > 0 ? (0, xr.jsx)("div", {
          className: "SmpList",
          children: Wr.map((rr => {
            var Zr, Wr;
            let {
              key: ar,
              item: jr,
              meta: fr
            } = rr;
            return (0, xr.jsxs)("div", {
              className: "SmpRow",
              children: [(0, xr.jsx)(AW, {
                item: "sold" === fr.type ? "Gold Coin" : fr.item,
                amount: "sold" === fr.type ? 0 : fr.quantity,
                tier: null !== (Zr = null === (Wr = jr.enchant) || void 0 === Wr ? void 0 : Wr.tier) && void 0 !== Zr ? Zr : null
              }), (0, xr.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, xr.jsx)("b", {
                  children: (0, xr.jsx)(OW.c, {
                    text: jr.customTitle
                  })
                }), (0, xr.jsx)("small", {
                  children: (0, xr.jsx)(OW.c, {
                    text: jr.description
                  })
                })]
              }), (0, xr.jsx)(Er.p, {
                loading: Ir(ar, jr),
                onClick: () => {
                  Qr.act(ar)
                },
                children: Sr("smpShop:collect")
              })]
            }, ar)
          }))
        }) : (0, xr.jsx)(wW, {
          title: Sr("smpShop:nothingToCollect"),
          children: Sr("smpShop:nothingToCollectHint")
        }), (0, xr.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Sr("smpShop:activeListings", {
            count: ar.length
          })
        }), ar.length > 0 ? (0, xr.jsx)("div", {
          className: "SmpList",
          children: ar.map((rr => {
            var Zr, Wr;
            let {
              key: ar,
              item: jr,
              meta: fr
            } = rr;
            return (0, xr.jsxs)("div", {
              className: "SmpRow",
              children: [(0, xr.jsx)(AW, {
                item: fr.item,
                amount: fr.quantity,
                tier: null !== (Zr = null === (Wr = jr.enchant) || void 0 === Wr ? void 0 : Wr.tier) && void 0 !== Zr ? Zr : null
              }), (0, xr.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, xr.jsx)("b", {
                  children: (0, xr.jsx)(OW.c, {
                    text: jr.customTitle
                  })
                }), (0, xr.jsx)("small", {
                  children: Sr("smpShop:timeLeft", {
                    time: aa(fr.expiresAt)
                  })
                })]
              }), (0, xr.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, xr.jsx)(VW, {
                  amount: fr.pricePerItem
                }), (0, xr.jsx)("small", {
                  children: Sr("smpShop:each")
                })]
              }), (0, xr.jsx)(Er.L, {
                loading: Ir(ar, jr),
                onClick: () => {
                  Qr.act(ar)
                },
                children: Sr("smpShop:cancel")
              })]
            }, ar)
          }))
        }) : (0, xr.jsx)(wW, {
          title: Sr("smpShop:noActiveListings"),
          children: Sr("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Ma(rr) {
      let {
        done: Sr,
        of: Qr
      } = rr;
      return (0, xr.jsx)("span", {
        className: "SmpProgress",
        children: (0, xr.jsx)("i", {
          style: {
            width: `${Math.min(100,Sr/Math.max(1,Qr)*100)}%`
          }
        })
      })
    }

    function Ga(rr) {
      var Sr, Qr, Zr;
      let {
        entry: Wr,
        choice: ar,
        onChoose: Ir
      } = rr;
      const {
        t: fr
      } = (0, jr.E)(), pr = Na(), {
        key: mr,
        item: Nr,
        meta: Ur
      } = Wr, tr = "dropdown" === (null === (Sr = Nr.userInput) || void 0 === Sr ? void 0 : Sr.type) ? Nr.userInput.dropdownOptions : [], hr = !0 === Ur.processing, zr = null !== Ur.creator && (Ur.owned > 0 || hr), Yr = zr && Ur.owned > 0 ? ja(tr) : [], nr = null === ar ? 0 : null !== (Qr = null === (Zr = Yr.find((rr => rr.label === ar))) || void 0 === Zr ? void 0 : Zr.quantity) && void 0 !== Qr ? Qr : 0;
      return (0, xr.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, xr.jsx)(AW, {
          item: Ur.item
        }), (0, xr.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, xr.jsx)("b", {
            children: (0, xr.jsx)(OW.c, {
              text: Nr.customTitle
            })
          }), (0, xr.jsxs)("small", {
            children: [(0, xr.jsx)(VW, {
              amount: Ur.pricePerItem
            }), " ", fr("smpShop:each"), " \xb7", " ", null === Ur.creator ? fr("smpShop:you") : (0, xr.jsx)(OW.c, {
              text: [{
                entityName: Ur.creator
              }]
            })]
          }), (0, xr.jsx)(Ma, {
            done: Ur.delivered,
            of: Ur.wanted
          })]
        }), zr ? (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(FW, {
            options: Yr.map((rr => {
              let {
                label: Sr,
                quantity: Qr,
                isAll: Zr
              } = rr;
              return {
                value: Sr,
                label: Zr ? fr("smpShop:max", {
                  count: Qr
                }) : String(Qr)
              }
            })),
            value: ar,
            onChange: Ir,
            ariaLabel: fr("smpShop:quantity")
          }), (0, xr.jsxs)(Er.u, {
            loading: pr.isPending(mr) || hr,
            disabled: null === ar,
            onClick: () => {
              pr.act(mr, ar)
            },
            children: [fr("smpShop:deliver"), " ", (0, xr.jsx)(VW, {
              amount: nr * Ur.pricePerItem
            })]
          })]
        }) : (0, xr.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Ur.creator ? fr("smpShop:yourOrder") : fr("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function ka() {
      var rr;
      const {
        t: Sr
      } = (0, jr.E)(), Qr = Na(), Wr = null === (rr = Qr.shopInfo[Qr.categoryKey]) || void 0 === rr ? void 0 : rr.items, ar = Qa(Wr, "search"), Ir = Qa(Wr, "creator"), fr = Sa(Wr, "order"), pr = Qa(Wr, "empty"), mr = za(ar, fr.length > 0 || null !== pr), [Nr, Ur] = (0, Zr.useState)(!1), [tr, hr] = (0, Zr.useState)({});
      return (0, xr.jsx)(Ka, {
        browser: mr,
        recentLabel: Sr("smpShop:recentOrders"),
        action: (0, xr.jsx)(Er.u, {
          onClick: () => {
            Ur((rr => !rr))
          },
          children: Sr("smpShop:createOrder")
        }),
        above: Nr && (0, xr.jsx)(Xa, {
          mode: "order",
          creator: Ir,
          catalogue: mr.catalogue,
          names: mr.names,
          searching: mr.loading,
          prices: [],
          onPickItem: mr.searchFor,
          onClose: () => {
            Ur(!1)
          }
        }),
        onBack: () => {
          Ur(!1)
        },
        summary: fr.length > 0 && Sr(1 === fr.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: fr.length,
          price: MW(ya(fr, "max"))
        }),
        list: mr.loading ? (0, xr.jsx)(iW, {}) : fr.length > 0 ? (0, xr.jsx)(Ua.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Za,
          observerUpdateDeps: [fr.length],
          children: fr.map((rr => (0, xr.jsx)(Ga, {
            entry: rr,
            choice: pa(rr.item, tr[rr.key]),
            onChoose: Sr => {
              hr({
                ...tr,
                [rr.key]: Sr
              })
            }
          }, rr.key)))
        }) : pr ? (0, xr.jsx)(cW, {
          entry: pr
        }) : (0, xr.jsx)(iW, {
          count: 3
        })
      })
    }

    function Aa() {
      var rr;
      const {
        t: Sr
      } = (0, jr.E)(), Qr = Na(), Zr = Sa(null === (rr = Qr.shopInfo[Qr.categoryKey]) || void 0 === rr ? void 0 : rr.items, "myOrder");
      return 0 === Zr.length ? (0, xr.jsx)("div", {
        className: "SmpScreen",
        children: (0, xr.jsx)(wW, {
          title: Sr("smpShop:noOrders"),
          children: Sr("smpShop:noOrdersHint")
        })
      }) : (0, xr.jsx)("div", {
        className: "SmpScreen",
        children: (0, xr.jsx)("div", {
          className: "SmpList",
          children: Zr.map((rr => {
            let {
              key: Zr,
              item: Wr,
              meta: ar
            } = rr;
            const jr = Qr.isPending(Zr) || !1 === Wr.canBuy;
            return (0, xr.jsxs)("div", {
              className: "SmpRow",
              children: [(0, xr.jsx)(AW, {
                item: ar.item,
                amount: ar.collectable
              }), (0, xr.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, xr.jsx)("b", {
                  children: (0, xr.jsx)(OW.c, {
                    text: Wr.customTitle
                  })
                }), (0, xr.jsxs)("small", {
                  children: [(0, xr.jsx)(VW, {
                    amount: ar.pricePerItem
                  }), " ", Sr("smpShop:each"), ar.collectable > 0 && ` \xb7 ${Sr("smpShop:readyCount",{count:ar.collectable})}`]
                }), (0, xr.jsx)(Ma, {
                  done: ar.delivered,
                  of: ar.wanted
                })]
              }), ar.collectable > 0 ? (0, xr.jsx)(Er.p, {
                loading: jr,
                onClick: () => {
                  Qr.act(Zr)
                },
                children: Sr("smpShop:collectCount", {
                  count: ar.collectable
                })
              }) : (0, xr.jsx)(Er.L, {
                loading: jr,
                onClick: () => {
                  Qr.act(Zr)
                },
                children: Sr("smpShop:cancel")
              })]
            }, Zr)
          }))
        })
      })
    }
    const Va = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ia = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function wa(rr, Sr) {
      let Qr = !1;
      const Zr = {};
      for (const Wr in rr) Sr(Wr, rr[Wr]) ? Zr[Wr] = rr[Wr] : Qr = !0;
      return Qr ? Zr : rr
    }

    function ca(rr) {
      var Sr, Qr, Wr, fr;
      const {
        show: Er,
        shopInfo: pr,
        selectedCategoryKey: mr
      } = rr, {
        t: Nr
      } = (0, jr.E)(), Ur = null !== mr && void 0 !== mr ? mr : "", tr = ra(pr, Ur), hr = null === (Sr = pr[Ur]) || void 0 === Sr ? void 0 : Sr.items, zr = null !== tr, [Yr, nr] = (0, Zr.useState)({}), [er, Kr] = (0, Zr.useState)([]), [yr, Br] = (0, Zr.useState)(!1), [Tr, vr] = (0, Zr.useState)(null), [, Or] = (0, Zr.useState)(0), Lr = (0, Zr.useRef)(0), lr = (0, Zr.useRef)({}), Xr = (0, Zr.useRef)({
        items: hr,
        pending: Yr,
        shopInfo: pr,
        active: zr,
        show: Er,
        canAfford: rr.canAfford,
        buy: rr.buy
      });
      Xr.current = {
        items: hr,
        pending: Yr,
        shopInfo: pr,
        active: zr,
        show: Er,
        canAfford: rr.canAfford,
        buy: rr.buy
      };
      const Pr = (0, Zr.useCallback)((rr => {
        Lr.current++;
        const Sr = Lr.current;
        Kr((Qr => [{
          id: Sr,
          text: rr
        }, ...Qr].slice(0, 8))), vr(Sr)
      }), []);
      (0, Zr.useEffect)((() => {
        if (null === Tr) return;
        const rr = setTimeout((() => {
          vr(null)
        }), 3e3);
        return () => {
          clearTimeout(rr)
        }
      }), [Tr]), (0, Zr.useEffect)((() => {
        const Sr = rr.message;
        if (!Sr) return;
        const {
          shopInfo: Qr,
          active: Zr,
          items: Wr
        } = Xr.current, ar = null !== Sr.categoryKey ? null !== ra(Qr, Sr.categoryKey) : Zr;
        (ar || Zr) && Pr(Sr.text), ar && nr((rr => wa(rr, (rr => {
          var Sr, Qr;
          return !Va.has(null === Wr || void 0 === Wr || null === (Sr = Wr[rr]) || void 0 === Sr || null === (Qr = Sr.smp) || void 0 === Qr ? void 0 : Qr.kind)
        }))))
      }), [rr.message, Pr]), (0, Zr.useEffect)((() => {
        nr((rr => wa(rr, ((rr, Sr) => xa(null === hr || void 0 === hr ? void 0 : hr[rr]) === Sr.snapshot))))
      }), [pr, hr]);
      const Hr = Object.keys(Yr).length > 0;
      (0, Zr.useEffect)((() => {
        if (!Hr) return;
        const rr = setInterval((() => {
          const {
            pending: rr,
            items: Sr,
            show: Qr
          } = Xr.current;
          if (!Qr) return;
          Or((rr => rr + 1));
          const Zr = Date.now(),
            Wr = Object.keys(rr).filter((Qr => Zr - rr[Qr].at >= 12e3 && xa(null === Sr || void 0 === Sr ? void 0 : Sr[Qr]) === rr[Qr].snapshot));
          if (0 === Wr.length) return;
          const ar = Wr.some((Qr => {
            var Zr, Wr;
            return "search" !== (null === Sr || void 0 === Sr || null === (Zr = Sr[Qr]) || void 0 === Zr || null === (Wr = Zr.smp) || void 0 === Wr ? void 0 : Wr.kind) || rr[Qr].resend
          }));
          for (const jr of Wr) lr.current[jr] = Zr;
          nr((rr => wa(rr, (rr => !Wr.includes(rr))))), ar && Pr(Nr("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(rr)
        }
      }), [Hr]), (0, Zr.useEffect)((() => {
        nr({})
      }), [Ur]), (0, Zr.useEffect)((() => {
        Er || Br(!1)
      }), [Er]);
      const qr = (0, Zr.useCallback)((function(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Zr,
            pending: Wr,
            canAfford: ar,
            buy: jr
          } = Xr.current, Ir = null === Zr || void 0 === Zr ? void 0 : Zr[rr];
          if (!Ir || rr in Wr || !1 === Ir.canBuy) return !1;
          if (!ar(Ir, (0, yW.e)(Ir, Sr))) return !1;
          jr(rr, Ir, Sr);
          const fr = {
            snapshot: xa(Ir),
            at: Date.now(),
            resend: Qr
          };
          return Xr.current.pending = {
            ...Xr.current.pending,
            [rr]: fr
          }, nr((Sr => ({
            ...Sr,
            [rr]: fr
          }))), !0
        }), []),
        Rr = (0, Zr.useMemo)((() => ({
          shopInfo: pr,
          categoryKey: Ur,
          canAfford: rr.canAfford,
          isPending: rr => rr in Yr,
          gaveUpAt: rr => {
            var Sr;
            return null !== (Sr = lr.current[rr]) && void 0 !== Sr ? Sr : 0
          },
          act: qr,
          notify: Pr
        })), [pr, Ur, rr.canAfford, Yr, qr, Pr]),
        gr = Math.min(...Object.values(Yr).map((rr => rr.at))),
        Cr = Hr && Date.now() - gr > 1500,
        Mr = er.length > 1,
        Gr = null !== (Qr = null === (Wr = pr[Ur]) || void 0 === Wr ? void 0 : Wr.customTitle) && void 0 !== Qr ? Qr : Ur,
        kr = null === (fr = pr[Ur]) || void 0 === fr ? void 0 : fr.description;
      let Ar = null;
      return "market" === tr ? Ar = (0, xr.jsx)(Pa, {}) : "sell" === tr ? Ar = (0, xr.jsx)(Ra, {}) : "collect" === tr ? Ar = (0, xr.jsx)(Ca, {}) : "orders" === tr ? Ar = (0, xr.jsx)(ka, {}) : "myOrders" === tr && (Ar = (0, xr.jsx)(Aa, {})), (0, xr.jsx)(ma.Provider, {
        value: Rr,
        children: (0, xr.jsx)("div", {
          className: "SmpShopHost",
          hidden: !zr,
          children: (0, xr.jsxs)("div", {
            className: "SmpShop",
            children: [(0, xr.jsx)("header", {
              className: "SmpHeader",
              children: (0, xr.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, xr.jsxs)("h2", {
                  children: [tr && (0, xr.jsx)(Ir.c, {
                    name: ia[tr]
                  }), Nr(Gr)]
                }), kr && (0, xr.jsx)("p", {
                  children: (0, xr.jsx)(OW.c, {
                    text: kr
                  })
                })]
              })
            }), (0, xr.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Er && Ar
            }), (0, xr.jsxs)("button", {
              type: "button",
              className: ar()("SmpStatus", {
                SmpStatusWaiting: Hr,
                SmpStatusFresh: !Hr && null !== Tr,
                SmpStatusHasHistory: Mr
              }),
              "aria-live": "polite",
              "aria-expanded": Mr ? yr : void 0,
              onClick: () => {
                Mr && Br((rr => !rr))
              },
              children: [Hr ? (0, xr.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, xr.jsx)(oW, {}), Nr(Cr ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : er[0] ? (0, xr.jsx)("span", {
                className: "SmpStatusText",
                children: (0, xr.jsx)(OW.c, {
                  text: er[0].text
                })
              }, er[0].id) : (0, xr.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Nr("smpShop:ready")
              }), Mr && (0, xr.jsx)("small", {
                children: Nr("smpShop:recentMessages", {
                  count: er.length
                })
              })]
            }), yr && Mr && (0, xr.jsx)("div", {
              className: "SmpStatusHistory",
              children: er.map((rr => (0, xr.jsx)("div", {
                children: (0, xr.jsx)(OW.c, {
                  text: rr.text
                })
              }, rr.id)))
            })]
          })
        })
      })
    }
    var Fa = Qr(2114),
      oa = Qr(35481);
    const ba = "\x1floadout";

    function Ja(rr) {
      const Sr = [];
      for (const Qr in rr) {
        const Zr = rr[Qr].loadout;
        Zr && Sr.push({
          categoryKey: Qr,
          config: Zr
        })
      }
      return Sr.sort(((rr, Sr) => Da(rr.config) - Da(Sr.config)))
    }

    function Da(rr) {
      return "gun" === rr.slot ? 0 : rr.tier
    }

    function da(rr) {
      const Sr = [];
      for (const Qr of gW(rr)) rr[Qr].loadout ? Sr.includes(ba) || Sr.push(ba) : Sr.push(Qr);
      return Sr
    }

    function sa(rr, Sr) {
      const Qr = [];
      for (const Zr in rr) {
        const Wr = rr[Zr].loadout;
        (null === Wr || void 0 === Wr ? void 0 : Wr.kind) === Sr && Qr.push({
          key: Zr,
          item: rr[Zr],
          meta: Wr
        })
      }
      return Qr.sort(((rr, Sr) => {
        const Qr = rj(rr.meta) - rj(Sr.meta);
        return 0 !== Qr ? Qr : rr.meta.free !== Sr.meta.free ? rr.meta.free ? -1 : 1 : rr.key.localeCompare(Sr.key)
      }))
    }
    const ua = ["assaultRifle", "battleRifle", "smg", "shotgun", "marksman", "sniper", "machineGun", "pistol", "machinePistol"];

    function rj(rr) {
      return "gun" === rr.kind ? ua.indexOf(rr.gunClass) : 0
    }
    const Sj = ["damage", "fireRate", "accuracy"];

    function Qj(rr, Sr) {
      var Qr, Zr, Wr;
      const ar = oa.c[rr];
      if (!ar) return null;
      const jr = {
        ...ar,
        ...Sr
      };
      return {
        damage: jr.damage * (null !== (Qr = jr.shotPelletCount) && void 0 !== Qr ? Qr : 1),
        fireRate: Zj(jr.fireRate, null !== (Zr = jr.burstCount) && void 0 !== Zr ? Zr : 1, null !== (Wr = jr.burstDelay) && void 0 !== Wr ? Wr : 0),
        accuracy: -(jr.altInaccuracyStanding + jr.altInaccuracyFromShot),
        clipSize: jr.clipSize
      }
    }

    function Zj(rr, Sr, Qr) {
      return 6e4 * Sr / (6e4 / rr + (Sr - 1) * Qr)
    }

    function Wj(rr, Sr, Qr, Zr) {
      if ("accuracy" !== rr) return Qr <= 0 ? 1 : Sr / Qr;
      const Wr = Math.sqrt(-Zr) - Math.sqrt(-Qr);
      return Wr <= 0 ? 1 : 1 - (Math.sqrt(-Sr) - Math.sqrt(-Qr)) / Wr * .94
    }

    function aj(rr) {
      let {
        iconName: Sr
      } = rr;
      return Yr.gameBridge.lookup("isItemName", Sr) ? (0, xr.jsx)(vW.d, {
        itemName: Sr,
        amount: 1
      }) : (0, xr.jsx)(Ir.c, {
        name: Sr,
        className: "2x"
      })
    }
    const jj = {
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

    function Ij(rr) {
      let {
        entry: Sr,
        stats: Qr,
        bars: Zr,
        compared: Wr,
        buy: fr,
        canAfford: Er,
        currency: pr
      } = rr;
      const {
        t: mr
      } = (0, jr.E)(), {
        meta: Nr
      } = Sr;
      return (0, xr.jsxs)("div", {
        className: ar()("LoadoutCard", "LoadoutGunCard", {
          LoadoutCardEquipped: Nr.equipped,
          LoadoutCardLocked: !Nr.unlocked
        }),
        children: [!Nr.unlocked && (0, xr.jsx)(Ir.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, xr.jsx)("div", {
          className: "LoadoutGunArt",
          children: (0, xr.jsx)(vW.d, {
            itemName: Nr.gun,
            amount: 0,
            gunTransform: "none"
          })
        }), (0, xr.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, xr.jsx)("b", {
            children: Sr.key
          }), (0, xr.jsxs)("small", {
            children: [mr(jj[Nr.gunClass]), Qr && (0, xr.jsxs)(xr.Fragment, {
              children: [" \xb7 ", mr("loadoutShop:rounds", {
                count: Qr.clipSize
              })]
            })]
          })]
        }), Qr && Zr && (0, xr.jsx)("div", {
          className: "LoadoutStats",
          children: Sj.map((rr => {
            const Sr = Wr ? function(rr, Sr) {
              const Qr = Math.max(Math.abs(rr), Math.abs(Sr), 1);
              return Math.abs(rr - Sr) / Qr < .05 ? null : rr > Sr ? "better" : "worse"
            }(Qr[rr], Wr[rr]) : null;
            return (0, xr.jsxs)("div", {
              className: "LoadoutStat",
              children: [(0, xr.jsx)("span", {
                children: mr(`loadoutShop:${rr}`)
              }), (0, xr.jsx)("div", {
                className: "LoadoutBar",
                children: (0, xr.jsx)("i", {
                  className: ar()({
                    LoadoutBarBetter: "better" === Sr,
                    LoadoutBarWorse: "worse" === Sr
                  }),
                  style: {
                    width: 100 * Zr[rr] + "%"
                  }
                })
              })]
            }, rr)
          }))
        }), (0, xr.jsx)(Ej, {
          entry: Sr,
          buy: fr,
          canAfford: Er,
          currency: pr
        })]
      })
    }

    function fj(rr) {
      let {
        entry: Sr,
        buy: Qr,
        canAfford: Zr,
        currency: Wr
      } = rr;
      const {
        meta: jr
      } = Sr;
      return (0, xr.jsxs)("div", {
        className: ar()("LoadoutCard", "LoadoutPerkCard", {
          LoadoutCardEquipped: jr.equipped,
          LoadoutCardLocked: !jr.unlocked
        }),
        children: [!jr.unlocked && (0, xr.jsx)(Ir.c, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, xr.jsx)("div", {
          className: "LoadoutPerkIcon",
          children: (0, xr.jsx)(Ir.c, {
            name: jr.icon
          })
        }), (0, xr.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, xr.jsx)("b", {
            children: Sr.key
          }), (0, xr.jsx)("small", {
            children: jr.description
          })]
        }), (0, xr.jsx)(Ej, {
          entry: Sr,
          buy: Qr,
          canAfford: Zr,
          currency: Wr
        })]
      })
    }

    function Ej(rr) {
      let {
        entry: Sr,
        buy: Qr,
        canAfford: Zr,
        currency: Wr
      } = rr;
      const {
        t: fr
      } = (0, jr.E)(), {
        meta: pr,
        item: mr
      } = Sr, Nr = () => {
        Qr(Sr.key, mr)
      };
      return (0, xr.jsxs)("div", {
        className: "LoadoutCardFoot",
        children: [pr.equipped && (0, xr.jsxs)("span", {
          className: "LoadoutCardState LoadoutCardStateEquipped",
          children: [(0, xr.jsx)(Ir.c, {
            name: "check"
          }), fr("loadoutShop:equipped")]
        }), pr.unlocked && !pr.equipped && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)("span", {
            className: "LoadoutCardState",
            children: pr.free ? fr("loadoutShop:free") : fr("loadoutShop:owned")
          }), (0, xr.jsx)(Er.h, {
            className: "LoadoutCardButton",
            disabled: !Zr,
            onClick: Nr,
            children: fr("loadoutShop:equip")
          })]
        }), !pr.unlocked && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsxs)("span", {
            className: ar()("LoadoutPrice", {
              LoadoutPriceShort: !Zr
            }),
            children: [Wr && (0, xr.jsx)("span", {
              className: "LoadoutPriceIcon",
              style: {
                color: Wr.iconColour
              },
              children: (0, xr.jsx)(aj, {
                iconName: Wr.icon
              })
            }), mr.cost]
          }), (0, xr.jsx)(Er.p, {
            className: "LoadoutCardButton",
            disabled: !Zr,
            onClick: Nr,
            children: fr("loadoutShop:unlock")
          })]
        })]
      })
    }

    function pj(rr) {
      let {
        shopInfo: Sr,
        selectedCategoryKey: Qr,
        selectCategory: Wr,
        buy: ar,
        canAfford: Ir,
        currencyAmounts: fr
      } = rr;
      const {
        t: Er
      } = (0, jr.E)(), pr = Ja(Sr), {
        loadout: mr,
        items: Nr
      } = Sr[Qr], Ur = rr => Ir(rr, (0, yW.e)(rr, null)), tr = {
        buy: (rr, Sr) => {
          Ur(Sr) && ar(rr, Sr)
        },
        affordable: Ur,
        currencyAmounts: fr
      };
      return (0, xr.jsx)("div", {
        className: "LoadoutShopHost",
        children: (0, xr.jsxs)("div", {
          className: "LoadoutShop",
          children: [(0, xr.jsxs)("header", {
            className: "LoadoutHeader",
            children: [(0, xr.jsx)("h2", {
              children: Er("loadoutShop:title")
            }), (0, xr.jsx)("p", {
              children: Er("loadoutShop:subtitle")
            })]
          }), (0, xr.jsx)("nav", {
            className: "LoadoutSlots",
            "data-pad-tabs": "3",
            children: pr.map((rr => {
              var ar, jr;
              const {
                config: Ir
              } = rr;
              return (0, xr.jsxs)(Zr.Fragment, {
                children: ["perk" === Ir.slot && (0, xr.jsx)(mj, {
                  points: Ir.points,
                  reached: (null !== (ar = null === fr || void 0 === fr || null === (jr = fr[Ir.pointsCurrency]) || void 0 === jr ? void 0 : jr.amount) && void 0 !== ar ? ar : 0) >= Ir.points
                }), (0, xr.jsx)(Nj, {
                  slot: rr,
                  items: Sr[rr.categoryKey].items,
                  selected: rr.categoryKey === Qr,
                  onClick: () => {
                    Wr(rr.categoryKey)
                  }
                })]
              }, rr.categoryKey)
            }))
          }), (0, xr.jsxs)("main", {
            className: "LoadoutPicker",
            "data-pad-initial-area": !0,
            children: ["gun" === (null === mr || void 0 === mr ? void 0 : mr.slot) && (0, xr.jsx)(tj, {
              items: Nr,
              ...tr
            }), "perk" === (null === mr || void 0 === mr ? void 0 : mr.slot) && (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsx)("p", {
                className: "LoadoutPickerNote",
                children: Er("loadoutShop:tierPicker", {
                  tier: mr.tier,
                  points: mr.points
                })
              }), (0, xr.jsx)("div", {
                className: "LoadoutPerkGrid",
                children: sa(Nr, "perk").map((rr => (0, xr.jsx)(fj, {
                  entry: rr,
                  buy: tr.buy,
                  canAfford: Ur(rr.item),
                  currency: xj(fr, rr.item)
                }, rr.key)))
              })]
            })]
          })]
        })
      })
    }

    function xj(rr, Sr) {
      return Sr.currency ? null === rr || void 0 === rr ? void 0 : rr[Sr.currency] : void 0
    }

    function mj(rr) {
      let {
        points: Sr,
        reached: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: ar()("LoadoutStep", {
          LoadoutStepReached: Qr
        }),
        title: Zr("loadoutShop:pointsTooltip", {
          points: Sr
        }),
        children: [(0, xr.jsx)(Ir.c, {
          name: "arrow-right",
          className: "LoadoutStepArrow"
        }), (0, xr.jsxs)("span", {
          children: [Qr && (0, xr.jsx)(Ir.c, {
            name: "check"
          }), Zr("loadoutShop:points", {
            points: Sr
          })]
        })]
      })
    }

    function Nj(rr) {
      let {
        slot: Sr,
        items: Qr,
        selected: Zr,
        onClick: Wr
      } = rr;
      const {
        t: fr
      } = (0, jr.E)(), {
        config: Er
      } = Sr, pr = "gun" === Er.slot ? Uj(sa(Qr, "gun")) : Uj(sa(Qr, "perk")), mr = "gun" === Er.slot ? fr("loadoutShop:gun") : fr("loadoutShop:tier", {
        tier: Er.tier
      });
      return (0, xr.jsxs)("button", {
        type: "button",
        className: ar()("LoadoutSlot", {
          LoadoutSlotSelected: Zr,
          LoadoutSlotEmpty: !pr
        }),
        "data-pad-tab": !0,
        "data-pad-selected": Zr ? "true" : void 0,
        "aria-pressed": Zr,
        onClick: Wr,
        children: [(0, xr.jsxs)("span", {
          className: "LoadoutSlotArt",
          children: ["gun" === (null === pr || void 0 === pr ? void 0 : pr.meta.kind) && (0, xr.jsx)(vW.d, {
            itemName: pr.meta.gun,
            amount: 0,
            gunTransform: "none"
          }), "perk" === (null === pr || void 0 === pr ? void 0 : pr.meta.kind) && (0, xr.jsx)(Ir.c, {
            name: pr.meta.icon
          }), !pr && (0, xr.jsx)(Ir.c, {
            name: "plus"
          })]
        }), (0, xr.jsxs)("span", {
          className: "LoadoutSlotText",
          children: [(0, xr.jsx)("small", {
            children: mr
          }), (0, xr.jsx)("b", {
            children: pr ? pr.key : fr("gun" === Er.slot ? "loadoutShop:noGun" : "loadoutShop:noPerk")
          })]
        })]
      })
    }

    function Uj(rr) {
      var Sr;
      return null !== (Sr = rr.find((rr => rr.meta.equipped))) && void 0 !== Sr ? Sr : null
    }

    function tj(rr) {
      let {
        items: Sr,
        buy: Qr,
        affordable: Zr,
        currencyAmounts: Wr
      } = rr;
      const {
        t: ar
      } = (0, jr.E)(), Ir = sa(Sr, "gun"), fr = Uj(Ir), Er = {};
      for (const {
          meta: jr
        }
        of Ir) {
        const rr = Fa.d.get(`${jr.gun}GunStats`),
          Sr = Qj(jr.gun, rr);
        Sr && (Er[jr.gun] = Sr)
      }
      const pr = function(rr) {
          const Sr = {},
            Qr = {};
          for (const Wr of Sj) {
            Sr[Wr] = -1 / 0, Qr[Wr] = 1 / 0;
            for (const Zr in rr) Sr[Wr] = Math.max(Sr[Wr], rr[Zr][Wr]), Qr[Wr] = Math.min(Qr[Wr], rr[Zr][Wr])
          }
          const Zr = {};
          for (const Wr in rr) {
            Zr[Wr] = {};
            for (const ar of Sj) Zr[Wr][ar] = Math.max(.06, Wj(ar, rr[Wr][ar], Sr[ar], Qr[ar]))
          }
          return Zr
        }(Er),
        mr = fr ? Er[fr.meta.gun] : void 0,
        [Nr, Ur] = ar("loadoutShop:comparing", {
          gun: "\x01"
        }).split("\x01");
      return (0, xr.jsxs)(xr.Fragment, {
        children: [fr && (0, xr.jsxs)("p", {
          className: "LoadoutPickerNote",
          children: [Nr, (0, xr.jsx)("b", {
            className: "LoadoutGold",
            children: fr.key
          }), Ur]
        }), (0, xr.jsx)("div", {
          className: "LoadoutGunGrid",
          children: Ir.map((rr => (0, xr.jsx)(Ij, {
            entry: rr,
            stats: Er[rr.meta.gun],
            bars: pr[rr.meta.gun],
            compared: rr.meta.equipped ? void 0 : mr,
            buy: Qr,
            canAfford: Zr(rr.item),
            currency: xj(Wr, rr.item)
          }, rr.key)))
        })]
      })
    }
    var hj = Qr(35488),
      zj = Qr(35484);

    function Yj(rr) {
      let {
        currency: Sr,
        info: Qr,
        smaller: Wr,
        show: jr
      } = rr;
      const Ir = (0, Zr.useRef)(null);
      (0, zj.i)(Sr, Ir, jr);
      const fr = (0, zj.m)(Sr, Qr.amount);
      return (0, xr.jsxs)("div", {
        className: ar()("ShopCurrencyDiv", {
          SmallText: Wr
        }),
        children: [(0, xr.jsxs)("div", {
          className: "ShopCurrencyDetails",
          children: [(0, xr.jsx)("div", {
            ref: Ir,
            className: "ShopCurrencyAmtIcon",
            style: {
              color: Qr.iconColour
            },
            children: (0, xr.jsx)(aj, {
              iconName: Qr.icon
            })
          }), "\xa0", (0, hj.e)(fr, 6)]
        }), void 0 !== Qr.subtext && Qr.subtext.length > 0 && (0, xr.jsx)("div", {
          className: "ShopCurrencySubtext",
          children: (0, xr.jsx)(OW.c, {
            text: Qr.subtext
          })
        })]
      })
    }
    class nj {
      constructor(rr) {
        this.info = rr
      }
      static fromShopInfo(rr) {
        const Sr = {};
        for (const Qr in rr) {
          const Zr = !0 === rr[Qr].redDot && !0 !== rr[Qr].forceRemoveRedDot;
          Sr[Qr] = {
            redDot: Zr,
            items: {}
          };
          for (const Wr in rr[Qr].items) {
            const Zr = rr[Qr].items[Wr],
              ar = !0 === Zr.redDot && !0 !== Zr.forceRemoveRedDot;
            Sr[Qr].items[Wr] = {
              redDot: ar
            }
          }
        }
        return new nj(Sr)
      }
      anyCategoryHasRedDots() {
        for (const rr in this.info)
          if (this.categoryHasRedDot(rr)) return !0;
        return !1
      }
      doesCategoryExist(rr) {
        return !(0, LQ.L)(this.info[rr])
      }
      categoryHasRedDot(rr) {
        return !0 === this.info[rr].redDot
      }
      updateCategoryRedDot(rr, Sr) {
        this.info[rr].redDot = Sr
      }
      doesItemExist(rr, Sr) {
        return this.doesCategoryExist(rr) && !(0, LQ.L)(this.info[rr].items[Sr])
      }
      itemHasRedDot(rr, Sr) {
        return !0 === this.info[rr].items[Sr].redDot
      }
      updateItemRedDot(rr, Sr, Qr) {
        this.info[rr].items[Sr].redDot = Qr
      }
      shallowCopy() {
        return new nj(this.info)
      }
    }

    function ej(rr, Sr) {
      return `${rr}\x1f${Sr}`
    }

    function Kj(rr, Sr, Qr) {
      const Zr = nj.fromShopInfo(rr);
      for (const Ir in rr) {
        var Wr;
        if (Qr.doesCategoryExist(Ir)) {
          (null === (Wr = Sr[Ir]) || void 0 === Wr ? void 0 : Wr.redDot) === rr[Ir].redDot && Zr.updateCategoryRedDot(Ir, Qr.categoryHasRedDot(Ir));
          for (const Wr in rr[Ir].items) {
            var ar, jr;
            Qr.doesItemExist(Ir, Wr) && ((null === (ar = Sr[Ir]) || void 0 === ar || null === (jr = ar.items[Wr]) || void 0 === jr ? void 0 : jr.redDot) === rr[Ir].items[Wr].redDot && Zr.updateItemRedDot(Ir, Wr, Qr.itemHasRedDot(Ir, Wr)))
          }
        }
      }
      return Zr
    }

    function yj(rr, Sr, Qr, Zr) {
      if (null !== Sr && !Zr) return Sr;
      if (null === Qr || !rr[Qr]) {
        const Sr = gW(rr);
        return Sr.length > 0 ? Sr[0] : null
      }
      return Qr
    }

    function Bj(rr, Sr, Qr) {
      if ((0, LQ.L)(rr) || 0 === Object.keys(rr).length) return {
        shopInfo: {},
        redDotInfo: nj.fromShopInfo({}),
        selectedCategoryKey: null
      };
      const {
        shopInfo: Zr,
        autoSelectCategory: Wr
      } = function(rr) {
        const Sr = Lr.siteUsedData[Lr.siteUsed].adConfig.showRewardedAds,
          Qr = {};
        let Zr = null;
        for (const Wr in rr) {
          const ar = rr[Wr],
            jr = {};
          let Ir = !1;
          for (const rr in ar.items) {
            const Qr = ar.items[rr];
            (0, yW.m)(Qr, Sr) && (jr[rr] = Qr, Ir = !0)
          }
          Ir && (Qr[Wr] = {
            ...ar,
            items: jr
          }, !0 === ar.autoSelectCategory && (Zr = Wr))
        }
        return {
          shopInfo: Qr,
          autoSelectCategory: Zr
        }
      }(rr);
      return {
        shopInfo: Zr,
        redDotInfo: Kj(Zr, Sr.shopInfo, Sr.redDotInfo),
        selectedCategoryKey: yj(Zr, Wr, Sr.selectedCategoryKey, Qr)
      }
    }

    function Tj(rr, Sr, Qr, Zr, Wr) {
      const ar = {},
        jr = (rr, Sr, jr, Ir) => {
          var fr, Er;
          const pr = ej(rr, Sr),
            xr = null !== (fr = Qr[pr]) && void 0 !== fr ? fr : Qr[Sr];
          if (null !== (Er = Ir.userInput) && void 0 !== Er && Er.type) switch (Ir.userInput.type) {
            case "dropdown": {
              var mr;
              const rr = !xr || !Ir.userInput.dropdownOptions.some((rr => (0, yW.f)(rr) === xr)),
                Sr = Ir.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === jr || void 0 === jr || null === (mr = jr.userInput) || void 0 === mr ? void 0 : mr.type) || JSON.stringify(jr.userInput.dropdownOptions) !== JSON.stringify(Ir.userInput.dropdownOptions)),
                Qr = Ir.userInput,
                Zr = !(0, LQ.L)(Qr.initialValue) && Qr.dropdownOptions.some((rr => (0, yW.f)(rr) === Qr.initialValue));
              var Nr;
              if (rr || Sr)
                if (Zr) ar[pr] = null !== (Nr = Ir.userInput.initialValue) && void 0 !== Nr ? Nr : null;
                else Ir.userInput.dropdownOptions.length > 0 ? ar[pr] = (0, yW.f)(Ir.userInput.dropdownOptions[0]) : ar[pr] = null;
              else ar[pr] = xr;
              return
            }
            case "text":
            case "number":
              var Ur, tr, hr;
              if ((null === jr || void 0 === jr ? void 0 : jr.userInput) !== Ir.userInput) ar[pr] = null !== (Ur = null !== (tr = Ir.userInput.initialValue) && void 0 !== tr ? tr : xr) && void 0 !== Ur ? Ur : "";
              else ar[pr] = null !== (hr = null !== xr && void 0 !== xr ? xr : Ir.userInput.initialValue) && void 0 !== hr ? hr : "";
              return;
            case "color":
              var zr, Yr, nr;
              if ((null === jr || void 0 === jr ? void 0 : jr.userInput) !== Ir.userInput) ar[pr] = null !== (zr = null !== (Yr = Ir.userInput.initialValue) && void 0 !== Yr ? Yr : xr) && void 0 !== zr ? zr : "#000000";
              else ar[pr] = null !== (nr = null !== xr && void 0 !== xr ? xr : Ir.userInput.initialValue) && void 0 !== nr ? nr : "#000000";
              return;
            case "player": {
              const rr = (0, yW.j)(Zr, Wr, Ir.userInput);
              return void(xr && rr.includes(xr) ? ar[pr] = xr : ar[pr] = rr.length > 0 ? rr[0] : null)
            }
          }
        };
      for (const fr in rr)
        for (const Qr in rr[fr].items) {
          var Ir;
          const Zr = rr[fr].items[Qr];
          jr(fr, Qr, null === (Ir = Sr[fr]) || void 0 === Ir ? void 0 : Ir.items[Qr], Zr)
        }
      return ar
    }

    function vj(rr, Sr) {
      return !(0, LQ.L)(Sr) && !(0, LQ.L)(rr) && Sr in rr
    }
    const Oj = (0, Zr.memo)((function(rr) {
      var Sr, Qr;
      let {
        show: Wr
      } = rr;
      const jr = (0, JS.f)("players", qj),
        Ir = (0, JS.f)("players", Rj),
        pr = (0, qW.c)(),
        [Nr, Ur] = (0, Zr.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: nj.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        hr = (0, Zr.useRef)(""),
        zr = (0, Zr.useRef)(null),
        nr = (0, Zr.useRef)(null),
        er = (0, Zr.useRef)(0),
        Kr = (0, Zr.useRef)(void 0),
        yr = (0, Zr.useRef)(null),
        Br = (0, Zr.useRef)(Nr),
        vr = (0, Zr.useRef)(null),
        Or = Nr.redDotInfo.anyCategoryHasRedDots(),
        [Lr, lr] = (0, Zr.useState)(null),
        Xr = (0, Zr.useRef)(!1);
      let Pr = !1,
        Hr = 0,
        qr = 0;
      if (Nr.currencyAmounts) {
        for (const rr in Nr.currencyAmounts) {
          var Rr;
          const Sr = Nr.currencyAmounts[rr];
          Sr.hidden || (Hr++, (null === (Rr = Sr.subtext) || void 0 === Rr ? void 0 : Rr.length) > 0 && qr++)
        }
        Pr = Hr + qr > 4
      }(0, Zr.useEffect)((() => {
        lQ.i.Jp("showShopIconRedDot", Or, !0)
      }), [Or]), (0, Zr.useEffect)((() => {
        Yr.gameBridge.send("setShopOpen", Wr), Wr || (clearTimeout(Kr.current), Ur((rr => rr.awaitingPurchase ? {
          ...rr,
          awaitingPurchase: !1
        } : rr)))
      }), [Wr]), (0, Zr.useEffect)((() => () => {
        Yr.gameBridge.send("setShopOpen", !1), clearTimeout(Kr.current)
      }), []), (0, Zr.useEffect)((() => {
        Br.current = Nr
      }), [Nr]), (0, Zr.useEffect)((() => {
        if (null === Lr) return;
        return (0, PW.b)("pointerdown", (rr => {
          const Sr = rr.target;
          null !== Sr && void 0 !== Sr && Sr.closest(".ShopItem") || lr(null)
        }))
      }), [Lr]);
      const gr = rr => {
          Ur((Sr => ({
            ...Sr,
            ...rr
          })))
        },
        Cr = rr => {
          var Sr;
          clearTimeout(null === (Sr = Nr.onBoughtInfo) || void 0 === Sr ? void 0 : Sr.timeout);
          const Qr = setTimeout((() => {
            gr({
              onBoughtInfo: null
            })
          }), 3e3);
          hr.current = rr, gr({
            onBoughtInfo: {
              text: rr,
              timeout: Qr,
              categoryKey: zr.current
            }
          })
        },
        Gr = rr => {
          const Sr = Bj(rr, Nr, !0);
          return 0 === Object.keys(Sr.shopInfo).length && Tr.c.set({
            openEverythingMenuName: null
          }), {
            ...Sr,
            userInputsPerItem: Tj(Sr.shopInfo, Nr.shopInfo, Nr.userInputsPerItem, jr, Ir)
          }
        },
        kr = () => {
          var rr;
          return null !== (rr = vr.current) && void 0 !== rr ? rr : Nr
        },
        Ar = rr => {
          const Sr = kr(),
            Qr = Bj(rr, Sr, !1);
          vr.current = Qr;
          const Zr = Qr.redDotInfo.anyCategoryHasRedDots();
          Zr !== Sr.redDotInfo.anyCategoryHasRedDots() && lQ.i.Jp("showShopIconRedDot", Zr, !0)
        },
        Vr = () => {
          const rr = vr.current;
          null !== rr && (vr.current = null, Ur((Sr => {
            const Qr = Tj(rr.shopInfo, Sr.shopInfo, Sr.userInputsPerItem, jr, Ir);
            return {
              ...Sr,
              ...rr,
              userInputsPerItem: Qr
            }
          })))
        },
        ir = (rr, Sr, Qr) => {
          const Zr = Nr.selectedCategoryKey,
            Wr = ej(Zr, rr),
            ar = null !== Qr && void 0 !== Qr ? Qr : Nr.userInputsPerItem[Wr],
            jr = {
              categoryKey: Zr,
              itemKey: rr,
              userInput: ar
            };
          if (zr.current = Zr, Sr.isRewardedAd) {
            if (Date.now() - er.current < 5e3) return;
            (0, XS.V)((() => {
              var Qr, Zr, ar;
              console.log("bought rewarded ad");
              const Ir = vr.current,
                fr = (null !== Ir && void 0 !== Ir ? Ir : Br.current).shopInfo,
                Er = jr.categoryKey ? null === (Qr = fr[jr.categoryKey]) || void 0 === Qr ? void 0 : Qr.items[rr] : null;
              if (!Er || !Er.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              if (!((null === (Zr = Sr.userInput) || void 0 === Zr ? void 0 : Zr.type) === (null === Er || void 0 === Er || null === (ar = Er.userInput) || void 0 === ar ? void 0 : ar.type))) return void console.warn("Shop item input type changed, early out");
              const {
                shopInfo: pr,
                userInputsPerItem: xr
              } = Br.current, mr = Fr.current;
              jr.userInput = (null === Ir ? xr : Tj(Ir.shopInfo, pr, xr, mr.playerIds, mr.localPlayerId))[Wr], Yr.gameBridge.send("buyShopItem", jr), Sr.onBoughtMessage && Cr(Sr.onBoughtMessage)
            })), er.current = Date.now()
          } else {
            Yr.gameBridge.send("buyShopItem", jr), gr({
              awaitingPurchase: !0
            }), clearTimeout(Kr.current), Kr.current = setTimeout((() => {
              yr.current = null, gr({
                awaitingPurchase: !1
              })
            }), 1e3);
            const rr = (0, yW.e)(Sr, ar);
            if (yr.current = null, !isNaN(rr) && vj(Nr.currencyAmounts, Sr.currency)) {
              0 !== rr && (yr.current = {
                currency: Sr.currency,
                amountBefore: Nr.currencyAmounts[Sr.currency].amount
              });
              const Qr = {
                ...Nr.currencyAmounts
              };
              Qr[Sr.currency].amount -= rr, gr({
                currencyAmounts: Qr
              })
            }
            Sr.onBoughtMessage && Cr(Sr.onBoughtMessage)
          }
        },
        wr = (rr, Sr) => {
          if (null === Sr || !rr.shopInfo[Sr]) return rr;
          let Qr = rr.redDotInfo;
          return Qr.categoryHasRedDot(Sr) && (Qr.updateCategoryRedDot(Sr, !1), Qr = Qr.shallowCopy()), {
            ...rr,
            selectedCategoryKey: Sr,
            redDotInfo: Qr
          }
        },
        cr = rr => {
          Vr(), Ur((Sr => wr(Sr, rr)))
        };
      (0, ZQ.c)(HW.n, (() => {
        Vr(), Ur((rr => {
          const Sr = (0, HW.r)(gW(rr.shopInfo), rr.selectedCategoryKey, (Sr => (0, HW.j)(rr.shopInfo[Sr].items)));
          return Sr === rr.selectedCategoryKey ? rr : wr(rr, Sr)
        }))
      })), (0, ZQ.c)("showShopFromServer", (rr => {
        let {
          toggle: Sr,
          MS: Qr
        } = rr;
        const Zr = 0 !== Object.keys(kr().shopInfo).length;
        Qr && cr(Qr), !Zr || Sr && Wr ? Tr.c.set({
          openEverythingMenuName: null
        }) : Tr.c.set({
          openEverythingMenuName: PS.q.SHOP
        })
      })), (0, ZQ.c)("closeShopOnDamaged", (() => {
        Wr && Tr.c.set({
          openEverythingMenuName: null
        })
      })), (0, ZQ.c)("overShopInfo", (rr => {
        Cr(rr)
      })), (0, tr.h)("currencyAmounts", (rr => {
        var Sr;
        const Qr = yr.current;
        Qr && (null === rr || void 0 === rr || null === (Sr = rr[Qr.currency]) || void 0 === Sr ? void 0 : Sr.amount) === Qr.amountBefore ? gr({
          currencyAmounts: rr
        }) : (yr.current = null, gr({
          currencyAmounts: rr,
          awaitingPurchase: !1
        }))
      })), (0, tr.h)("shopInfo", (rr => {
        Wr ? gr({
          ...Gr(rr),
          awaitingPurchase: !1
        }) : Ar(rr)
      })), (0, Zr.useLayoutEffect)((() => {
        Wr && Vr()
      }), [Wr]);
      const Fr = (0, Zr.useRef)({
        playerIds: jr,
        localPlayerId: Ir
      });
      (0, Zr.useEffect)((() => {
        Fr.current.playerIds === jr && Fr.current.localPlayerId === Ir || (Fr.current = {
          playerIds: jr,
          localPlayerId: Ir
        }, Wr ? Ur((rr => {
          const Sr = Gr(rr.shopInfo);
          return {
            ...rr,
            ...Sr
          }
        })) : Ar(kr().shopInfo))
      }), [jr, Ir]);
      const or = Nr.selectedCategoryKey,
        br = (rr, Sr) => {
          var Qr, Zr;
          return (isNaN(Sr) || (0, LQ.L)(rr.currency) || vj(Nr.currencyAmounts, rr.currency) && Sr <= Nr.currencyAmounts[rr.currency].amount) && (null === (Qr = rr.canBuy) || void 0 === Qr || Qr) && !(null !== (Zr = rr.hidden) && void 0 !== Zr && Zr)
        },
        Jr = (rr, Sr) => {
          var Qr, Zr, Wr;
          const jr = ej(or, rr),
            Ir = Nr.shopInfo[or].items[rr],
            pr = Nr.userInputsPerItem[jr],
            mr = (0, yW.e)(Ir, pr),
            Ur = br(Ir, mr),
            tr = Ir.enchant,
            hr = tr ? (0, Mr.kb)(null !== (Qr = Ir.customTitle) && void 0 !== Qr ? Qr : rr, {
              colour: Mr.fb[tr.tier]
            }) : null !== (Zr = Ir.customTitle) && void 0 !== Zr ? Zr : rr,
            zr = Sr => {
              const Qr = null !== Sr && void 0 !== Sr ? Sr : pr,
                Zr = void 0 !== Sr ? (0, yW.e)(Ir, Sr) : mr;
              br(Ir, Zr) && null !== Qr && ir(rr, Ir, Sr);
              let Wr = Nr.redDotInfo;
              Wr.itemHasRedDot(or, rr) && (Wr.updateItemRedDot(or, rr, !1), Wr = Wr.shallowCopy()), gr({
                redDotInfo: Wr
              })
            };
          return (0, xr.jsxs)("div", {
            className: ar()("ShopItem", {
              ShopItemNoInput: !Ir.userInput,
              ShopItemNoInputCanBuy: !Ir.userInput && Ur,
              ShopItemNoInputSelected: Ir.isSelected,
              ShopItemEnchant: !!tr
            }),
            "data-pad-focusable": !Ir.userInput || void 0,
            "data-pad-unavailable": !Ir.userInput && !Ur || void 0,
            "data-pad-repeat": null !== (Wr = (0, HW.b)(Ir)) && void 0 !== Wr ? Wr : void 0,
            "data-pad-repeat-wait": Nr.awaitingPurchase || void 0,
            onClick: () => {
              if (tr && Xr.current) {
                if (Lr !== jr) return void lr(jr);
                lr(null)
              }
              Ir.userInput || zr()
            },
            onPointerDown: rr => {
              tr && (Xr.current = (0, TW.o)(rr))
            },
            onPointerEnter: rr => {
              tr && !(0, TW.o)(rr) && lr(jr)
            },
            onPointerLeave: rr => {
              tr && !(0, TW.o)(rr) && lr((rr => rr === jr ? null : rr))
            },
            style: {
              zIndex: Object.keys(Nr.shopInfo[or].items).length - Sr
            },
            children: [Nr.redDotInfo.itemHasRedDot(or, rr) && (0, xr.jsx)(fr.d, {
              top: "-6px",
              right: "-6px"
            }), Ir.badge && (0, xr.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, xr.jsx)("div", {
                className: ar()("ShopBadgeMain", Ir.badge.type),
                children: (0, xr.jsx)(OW.c, {
                  text: Ir.badge.text
                })
              })
            }), (0, xr.jsx)("div", {
              className: "ShopItemLeft",
              children: Ir.image && (0, xr.jsx)(Lj, {
                item: Ir,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, xr.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, xr.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, xr.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, xr.jsx)(OW.c, {
                    text: hr
                  })
                }), (0, xr.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, xr.jsx)(OW.c, {
                    text: Ir.description
                  })
                })]
              }), Ir.userInput && (0, xr.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: rr => {
                  rr.stopPropagation()
                },
                children: [(0, xr.jsx)(Pj, {
                  item: Ir,
                  currInput: pr,
                  updateInput: Sr => {
                    ((rr, Sr, Qr) => {
                      const Zr = ej(rr, Sr),
                        Wr = {
                          ...Nr.userInputsPerItem
                        };
                      Wr[Zr] = Qr, gr({
                        userInputsPerItem: Wr
                      })
                    })(or, rr, Sr)
                  },
                  onSubmit: rr => {
                    zr(rr)
                  }
                }), ("dropdown" !== Ir.userInput.type || !Ir.userInput.autoSubmit) && (0, xr.jsx)(Er.h, {
                  className: "ItemCostButton",
                  disabled: !Ur && null !== pr,
                  onClick: () => {
                    zr()
                  },
                  children: (0, xr.jsx)(Xj, {
                    item: Ir,
                    cost: mr,
                    currencyAmounts: Nr.currencyAmounts
                  })
                })]
              })]
            }), !Ir.userInput && (0, xr.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, xr.jsx)(Xj, {
                item: Ir,
                cost: mr,
                currencyAmounts: Nr.currencyAmounts
              })
            }), tr && Lr === jr && (0, xr.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, xr.jsx)(OW.c, {
                text: hr
              }), (0, xr.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, xr.jsx)(OW.c, {
                  text: (0, BW.c)("", tr.enchantments, tr.enchantmentData)
                })
              })]
            })]
          }, jr)
        },
        Dr = function(rr) {
          for (const Sr in rr)
            if (rr[Sr].smp) return !0;
          return !1
        }(Nr.shopInfo),
        dr = ra(Nr.shopInfo, or),
        sr = function(rr, Sr) {
          var Qr;
          return !!Sr && !(null === (Qr = rr[Sr]) || void 0 === Qr || !Qr.loadout)
        }(Nr.shopInfo, or),
        ur = (0, xr.jsx)("div", {
          className: ar()("ShopOnBoughtInfo", {
            ShopOnBoughtInfoShow: null !== Nr.onBoughtInfo
          }),
          children: (0, xr.jsx)(OW.c, {
            text: hr.current
          })
        });
      return (0, xr.jsx)(eW.e, {
        className: "Menu ShopBody",
        show: Wr,
        children: 0 !== Object.keys(Nr.shopInfo).length && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, xr.jsx)(mr, {
              items: da(Nr.shopInfo).map((rr => {
                var Sr;
                return rr === ba ? {
                  id: rr,
                  title: "loadoutShop:title",
                  redDot: !1
                } : {
                  id: rr,
                  title: null !== (Sr = Nr.shopInfo[rr].customTitle) && void 0 !== Sr ? Sr : rr,
                  redDot: Nr.redDotInfo.categoryHasRedDot(rr)
                }
              })),
              link: pr ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, RW.e)({
                    page: (0, RW.d)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: sr ? ba : or,
              onClick: rr => {
                rr !== ba ? cr(rr) : sr || cr(Ja(Nr.shopInfo)[0].categoryKey)
              },
              padStartsOnTab: (0, HW.f)(or)
            }), (0, xr.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Nr.currencyAmounts && Object.keys(Nr.currencyAmounts).map((rr => {
                const Sr = Nr.currencyAmounts[rr];
                return Sr.hidden ? null : (0, xr.jsx)(Yj, {
                  currency: rr,
                  info: Sr,
                  smaller: Pr,
                  show: Wr
                }, rr)
              }))
            })]
          }), (0, xr.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Dr && (0, xr.jsx)(ca, {
              show: Wr,
              shopInfo: Nr.shopInfo,
              selectedCategoryKey: or,
              buy: (rr, Sr, Qr) => {
                ir(rr, Sr, Qr)
              },
              canAfford: br,
              message: Nr.onBoughtInfo
            }), sr && Wr && (0, xr.jsxs)(xr.Fragment, {
              children: [ur, (0, xr.jsx)(pj, {
                shopInfo: Nr.shopInfo,
                selectedCategoryKey: or,
                selectCategory: cr,
                buy: ir,
                canAfford: br,
                currencyAmounts: Nr.currencyAmounts
              })]
            }), null === dr && !sr && (0, xr.jsxs)(xr.Fragment, {
              children: [ur, (0, xr.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, xr.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Sr = Nr.shopInfo[or]) || void 0 === Sr ? void 0 : Sr.description) && (0, xr.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, xr.jsx)(OW.c, {
                      text: Nr.shopInfo[or].description
                    })
                  }), Wr && (0, xr.jsx)("div", {
                    className: "ShopItems",
                    ref: nr,
                    "data-pad-initial-area": !0,
                    children: gW(null === (Qr = Nr.shopInfo[or]) || void 0 === Qr ? void 0 : Qr.items).map(((rr, Sr) => Jr(rr, Sr)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Lj(rr) {
      let {
        item: Sr,
        minWidth: Qr,
        minHeight: Zr
      } = rr;
      const {
        image: Wr,
        schematicId: ar,
        imageColour: jr
      } = Sr;
      if (ar) return (0, xr.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Qr}rem`,
          height: `${Zr}rem`
        },
        children: (0, xr.jsx)(LW.e, {
          game: {
            schematicId: ar
          }
        })
      });
      var fr, Er;
      if ((0, vW.h)(Wr)) return (0, xr.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Qr}rem`,
          height: "0",
          minHeight: `${Zr}rem`
        },
        children: (0, xr.jsx)(vW.d, {
          itemName: Wr,
          amount: null !== (fr = Sr.amount) && void 0 !== fr ? fr : 0,
          amountFontSize: Zr / 4 + "rem",
          enchantmentTier: null === (Er = Sr.enchant) || void 0 === Er ? void 0 : Er.tier
        })
      });
      const pr = Wr.slice(-4);
      return ".jpg" === pr || ".png" === pr ? (0, xr.jsx)(lj, {
        image: Wr,
        minWidth: Qr
      }) : (0, xr.jsx)(Ir.c, {
        name: Wr,
        className: "SelectedItemImage",
        style: {
          color: jr
        }
      })
    }

    function lj(rr) {
      let {
        image: Sr,
        minWidth: Qr
      } = rr;
      const {
        gameNameWithVariation: Zr
      } = (0, JS.j)("connectedGame"), Wr = Sr.endsWith(".jpg");
      return (0, xr.jsx)("img", {
        className: ar()({
          ShopPixelImage: !Wr
        }),
        style: {
          width: `${Wr?1.6*Qr:Qr}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Mr.Mb)(Zr)}/${Sr}`,
        alt: Sr,
        draggable: !1
      })
    }

    function Xj(rr) {
      let {
        item: Sr,
        cost: Qr,
        currencyAmounts: Zr
      } = rr;
      const Wr = !isNaN(Qr) && 0 !== Qr && vj(Zr, Sr.currency);
      let ar = null;
      return Sr.buyButtonText ? ar = Sr.buyButtonText : Wr ? (ar = Qr, Sr.sell && (ar = -1 * Qr), ar = ar.toString()) : 0 === Qr ? ar = "Free" : Sr.isRewardedAd && (ar = "Watch ad"), (0, LQ.L)(ar) || " " === ar ? null : (0, xr.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Wr && (0, xr.jsx)("div", {
          style: {
            color: Zr[Sr.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, xr.jsx)(aj, {
            iconName: Zr[Sr.currency].icon
          })
        }), (0, xr.jsx)("div", {
          className: "BuyItemCost",
          children: (0, xr.jsx)(OW.c, {
            text: ar
          })
        })]
      })
    }

    function Pj(rr) {
      let {
        item: Sr,
        currInput: Qr,
        updateInput: Wr,
        onSubmit: ar
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)(), fr = (0, Zr.useRef)(null);
      if ((0, Zr.useEffect)((() => {
          const rr = fr.current;
          rr && rr.value !== Qr && document.activeElement !== rr && (rr.value = null !== Qr && void 0 !== Qr ? Qr : "")
        }), [Qr]), !Sr.userInput) return null;
      let Er = Sr.userInput;
      if (zr.featureFlags.sanitizeShopInput && "text" === Sr.userInput.type && (Er = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Er.type || "number" === Er.type) {
        var pr, mr;
        console.assert(void 0 !== Qr, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Sr)}`);
        const rr = "text" === Er.type && Er.wordCharsOnly;
        return (0, xr.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, xr.jsx)(Kr.b, {
            className: "ShopItemUserInputText",
            placeholderText: Ir(Er.placeholderText),
            defaultValue: Qr,
            domRef: fr,
            onValueChange: (Sr, Qr) => {
              !0 === rr && (Sr = (0, XW.lb)(Sr)), fr.current.value = Sr, Wr(Sr)
            },
            onEnter: ar,
            type: Er.type
          }, (null !== (pr = Er.initialValue) && void 0 !== pr ? pr : "") + (null !== (mr = Er.placeholderText) && void 0 !== mr ? mr : ""))
        })
      }
      if ("dropdown" === Er.type) {
        console.assert(void 0 !== Qr, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Sr)}`);
        const rr = Er.autoSubmit;
        return (0, xr.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, xr.jsx)(oS.c, {
            options: Er.dropdownOptions.map((rr => (0, yW.f)(rr))),
            value: Qr,
            onChange: Sr => {
              let {
                value: Qr
              } = Sr;
              Wr(Qr), rr && ar(Qr)
            }
          })
        })
      }
      return "player" === Er.type ? (0, xr.jsx)(Hj, {
        userInput: Er,
        currInput: Qr,
        updateInput: Wr
      }) : "color" === Er.type ? (0, xr.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, xr.jsx)("input", {
          type: "color",
          value: Qr,
          onChange: rr => {
            Wr(rr.target.value)
          }
        })
      }) : null
    }

    function Hj(rr) {
      let {
        userInput: Sr,
        currInput: Qr,
        updateInput: Zr
      } = rr;
      const Wr = (0, JS.j)("players"),
        ar = (0, JS.j)("hiddenPlayerNames"),
        jr = (0, yW.j)(Wr.ids, Wr.localId, Sr);
      return (0, xr.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, xr.jsx)(oS.c, {
          options: jr.map((rr => {
            const {
              name: Sr
            } = Wr.byId[rr];
            return {
              value: rr,
              label: null === Sr ? "" : (0, lW.c)(Sr, ar)
            }
          })),
          value: Qr,
          onChange: rr => {
            let {
              value: Sr
            } = rr;
            Zr(Sr)
          }
        })
      })
    }

    function qj(rr) {
      let {
        ids: Sr
      } = rr;
      return Sr
    }

    function Rj(rr) {
      let {
        localId: Sr
      } = rr;
      return Sr
    }
    var gj = Qr(1758);
    const Cj = (0, Qr(1541).j)((rr => rr.PadLobbyShortcuts)),
      Mj = (0, Zr.lazy)((() => Promise.resolve().then((() => Qr(5420))).then((rr => ({
        default: rr.Lobbyleaderboard
      }))))),
      Gj = (0, Zr.lazy)((() => Qr.e(254).then((() => Qr(42938))).then((rr => ({
        default: rr.LobbyManageView
      })))));

    function kj(rr) {
      let {
        show: Sr
      } = rr;
      return Sr ? (0, xr.jsx)(Aj, {}) : null
    }

    function Aj() {
      const rr = (0, qW.c)();
      return (0, xr.jsxs)(xr.Fragment, {
        children: [(0, xr.jsx)(Cj, {}), (0, xr.jsxs)(Zr.Suspense, {
          fallback: (0, xr.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, xr.jsx)(yr.c, {})
          }),
          children: [rr && (0, xr.jsx)(Gj, {
            leaderboard: (0, xr.jsx)(Mj, {})
          }), !rr && (0, xr.jsx)(Mj, {})]
        })]
      })
    }
    var Vj = Qr(1684),
      ij = Qr(3280),
      wj = Qr(1885),
      cj = Qr(4170),
      Fj = Qr(3749),
      oj = Qr(1626),
      bj = Qr(1578),
      Jj = Qr(4100),
      Dj = Qr(4113),
      dj = Qr(4250),
      sj = Qr(3255);
    const uj = "storeRecentGiftRecipients",
      rI = new Map;

    function SI() {
      try {
        const rr = mQ.j.getItem(uj);
        return Array.isArray(rr) ? rr.filter((rr => "string" === typeof(null === rr || void 0 === rr ? void 0 : rr.name) && rr.name.length > 0)).map((rr => ({
          name: rr.name,
          cosmetics: rr.cosmetics && "object" === typeof rr.cosmetics ? rr.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function QI(rr, Sr) {
      var Qr;
      const [Wr, ar] = (0, Zr.useState)(""), [jr, Ir] = (0, Zr.useState)("search"), [fr, Er] = (0, Zr.useState)(null), [pr, xr] = (0, Zr.useState)(null), mr = (0, Zr.useRef)(null), Nr = (0, Zr.useRef)(null);
      (0, Zr.useEffect)((() => () => {
        mr.current && clearTimeout(mr.current)
      }), []), (0, Zr.useEffect)((() => {
        Sr || hr()
      }), [Sr]);
      const Ur = null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.name) && void 0 !== Qr ? Qr : null;

      function tr() {
        mr.current && (clearTimeout(mr.current), mr.current = null)
      }

      function hr() {
        tr(), ar(""), Ir("search"), Er(null)
      }(0, Zr.useEffect)((() => {
        if (null === Ur || rr === lr.NULL_USER_CONTEXT) return;
        const Sr = Ur.toLowerCase();
        if (Sr === rr.getPlayerName().toLowerCase()) return void xr({
          name: Ur,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Qr = rI.get(Sr);
        if (Qr) return void xr({
          name: Ur,
          result: Qr
        });
        let Zr = !1;
        return async function(rr, Sr) {
          try {
            const Qr = await (0, lr.postJsonWithMetricsCookiesAndJsonResponse)(`${lS.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Sr
            }, {
              retries: 1
            }, rr.getMetricsCookies());
            if ("boolean" !== typeof(null === Qr || void 0 === Qr ? void 0 : Qr.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Qr)}`);
            return Qr
          } catch (Qr) {
            return console.error("Failed to look up gift recipient:", Qr), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(rr, Ur).catch((rr => (console.error("Gift recipient lookup failed:", rr), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((rr => {
          !0 !== rr.giftRecipientFound && "store:giftRecipientLookupFailed" === rr.giftRecipientError || rI.set(Sr, rr), Zr || xr({
            name: Ur,
            result: rr
          })
        })), () => {
          Zr = !0
        }
      }), [Ur, rr]);
      const zr = (0, Zr.useMemo)((() => {
        const rr = Wr.trim();
        if (!rr) return {
          status: "none"
        };
        if (!fr || fr.name !== rr || (null === pr || void 0 === pr ? void 0 : pr.name) !== fr.name) return {
          status: "pending",
          name: rr
        };
        const Sr = pr.result;
        return !1 === Sr.giftRecipientFound ? {
          status: "error",
          name: fr.name,
          error: Sr.giftRecipientError
        } : {
          status: "found",
          name: Sr.giftRecipientName,
          ownedPacks: Sr.giftRecipientOwnedPacks,
          hasSuperRank: Sr.giftRecipientHasSuperRank,
          isSubscriber: Sr.giftRecipientIsSubscriber
        }
      }), [Wr, fr, pr]);
      (0, Zr.useEffect)((() => {
        "found" === zr.status && "typed" === (null === fr || void 0 === fr ? void 0 : fr.source) && Nr.current !== zr.name && (Nr.current = zr.name, (0, hS.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [zr, fr]);
      const Yr = (null === pr || void 0 === pr ? void 0 : pr.name) === (null === fr || void 0 === fr ? void 0 : fr.name) ? null === pr || void 0 === pr ? void 0 : pr.result : null,
        nr = !0 === (null === Yr || void 0 === Yr ? void 0 : Yr.giftRecipientFound) ? Yr.giftRecipientCosmetics : null;
      return {
        query: Wr,
        via: jr,
        recipient: zr,
        recipientCosmetics: nr,
        type: function(rr) {
          ar(rr), Ir("search"), tr();
          const Sr = rr.trim();
          Sr ? mr.current = setTimeout((() => {
            Er({
              name: Sr,
              source: "typed"
            })
          }), 400) : Er(null)
        },
        choose: function(rr, Sr) {
          tr(), ar(rr), Ir("typed" === Sr ? "search" : "prefilled" === Sr ? "prefilled" : "suggestion"), Er({
            name: rr,
            source: Sr
          }), "typed" !== Sr && "prefilled" !== Sr && (0, hS.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Sr
          })
        },
        clear: hr,
        recordGift: function(rr, Sr) {
          ! function(rr) {
            rI.delete(rr.toLowerCase())
          }(rr), xr((Qr => {
            if (!Qr || Qr.name.toLowerCase() !== rr.toLowerCase() || !0 !== Qr.result.giftRecipientFound || "superRank" === Sr) return Qr;
            const Zr = Qr.result.giftRecipientOwnedPacks;
            return {
              ...Qr,
              result: {
                ...Qr.result,
                giftRecipientOwnedPacks: Zr.includes(Sr) ? Zr : [...Zr, Sr]
              }
            }
          }))
        }
      }
    }
    var ZI = Qr(3251),
      WI = Qr(5433),
      aI = Qr(272),
      jI = Qr(4001);
    const II = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var fI = Qr(3208),
      EI = Qr(672),
      pI = Qr(3320),
      xI = Qr(3657);

    function mI(rr) {
      let {
        cosmetics: Sr
      } = rr;
      return (0, xr.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, xr.jsx)(pI.b, {
          cosmetics: Sr
        })
      })
    }

    function NI(rr, Sr) {
      var Qr, Zr;
      const Wr = null !== (Qr = rr.friend) && void 0 !== Qr ? Qr : {
        isError: !1,
        name: rr.name,
        ranks: [],
        cosmetics: null !== (Zr = rr.cosmetics) && void 0 !== Zr ? Zr : {},
        nameColour: EI.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return Sr ? {
        ...Wr,
        cosmetics: Sr
      } : Wr
    }

    function UI(rr) {
      let {
        pending: Sr
      } = rr;
      return (0, xr.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Sr && (0, xr.jsx)(yr.c, {})
      })
    }

    function tI(rr) {
      var Sr;
      let {
        selfName: Qr,
        giftRecipient: Wr,
        suggestionsVersion: fr,
        pulseSignal: pr,
        disabled: mr
      } = rr;
      const {
        t: Nr
      } = (0, jr.E)(), Ur = (0, br.m)(), tr = (0, Zr.useRef)(null), hr = (0, Zr.useRef)(null), {
        query: Yr,
        via: nr,
        recipient: er,
        recipientCosmetics: yr
      } = Wr, Br = (0, sj.n)(Yr), Tr = (0, Zr.useMemo)((() => {
        const rr = zr.featureFlags.useSocialFeatures ? Ur.friends.filter((rr => !rr.isError)) : [];
        return (0, sj.j)({
          onlineFriends: (0, br.h)(rr),
          recentRecipients: SI(),
          friends: rr,
          selfName: Qr,
          max: 8
        })
      }), [Ur.friends, Qr, fr]), vr = Yr.trim().toLowerCase(), Or = "search" !== nr && vr ? Tr.find((rr => rr.name.toLowerCase() === vr)) : void 0, Lr = Or && "prefilled" === nr ? [Or, ...Tr.filter((rr => rr !== Or))] : Tr, lr = "" !== vr && !Or, Xr = lr ? Yr : "", Pr = Lr.length > 0;
      (0, Zr.useEffect)((() => {
        tr.current && tr.current.value !== Xr && (tr.current.value = Xr)
      }), [Xr]), (0, Zr.useEffect)((() => {
        tr.current && (tr.current.disabled = mr)
      }), [mr, pr]);
      const Hr = (0, Zr.useRef)(0);

      function Rr() {
        "self" !== Br && (0, hS.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Wr.clear()
      }

      function gr(rr) {
        var Sr, Qr;
        if (mr) return;
        if (" " === rr.key || "Enter" === rr.key) return rr.preventDefault(), void rr.currentTarget.click();
        const Zr = Array.from(null !== (Sr = null === (Qr = hr.current) || void 0 === Qr ? void 0 : Qr.querySelectorAll("[role=radio]")) && void 0 !== Sr ? Sr : []),
          Wr = Zr.indexOf(rr.currentTarget);
        let ar;
        "ArrowRight" === rr.key || "ArrowDown" === rr.key ? ar = Zr[(Wr + 1) % Zr.length] : "ArrowLeft" === rr.key || "ArrowUp" === rr.key ? ar = Zr[(Wr - 1 + Zr.length) % Zr.length] : "Home" === rr.key ? ar = Zr[0] : "End" === rr.key && (ar = Zr[Zr.length - 1]), ar && (rr.preventDefault(), ar.focus(), ar.click())
      }(0, Zr.useEffect)((() => {
        var rr;
        pr > Hr.current && !mr && (Hr.current = pr, null === (rr = tr.current) || void 0 === rr || rr.focus())
      }), [pr, mr]);
      const Cr = "self" === Br,
        Mr = null !== (Sr = null === Or || void 0 === Or ? void 0 : Or.name) && void 0 !== Sr ? Sr : null,
        Gr = "error" === er.status ? er.error : null,
        kr = "store:giftRecipientLookupFailed" === Gr;
      return (0, xr.jsxs)("div", {
        className: ar()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: mr,
          StoreRecipientStripNoChips: !Pr
        }),
        children: [(0, xr.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Nr("store:buyingFor")
        }), (0, xr.jsxs)("div", {
          ref: hr,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Nr("store:whoIsItFor"),
          children: [(0, xr.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Cr,
            tabIndex: mr || !Cr && null !== Mr ? -1 : 0,
            className: ar()("StoreRecipientMe", {
              StoreRecipientChecked: Cr
            }),
            onClick: () => {
              mr || Rr()
            },
            onKeyDown: gr,
            children: [(0, xr.jsx)(Ir.c, {
              name: "user"
            }), " ", Nr("store:me")]
          }), Pr && (0, xr.jsx)("div", {
            className: "StoreRecipientChips",
            children: Lr.map((rr => {
              const Sr = rr === Or;
              return (0, xr.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Sr,
                tabIndex: !mr && Sr ? 0 : -1,
                title: rr.name,
                className: ar()("StoreRecipientChip", {
                  StoreRecipientChecked: Sr
                }),
                onClick: () => {
                  mr || function(rr) {
                    "gift" !== Br && (0, hS.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Wr.choose(rr.name, rr.kind)
                  }(rr)
                },
                onKeyDown: gr,
                children: (0, xr.jsx)(xI.i, {
                  playerSocialPreview: NI(rr, Sr ? yr : null),
                  opensProfileCard: !1,
                  isFriend: null !== rr.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== rr.friend,
                  status: null === rr.friend ? null : void 0,
                  trailing: Sr ? (0, xr.jsx)(UI, {
                    pending: "pending" === er.status
                  }) : void 0
                })
              }, rr.name)
            }))
          })]
        }), (0, xr.jsxs)("div", {
          className: ar()("StoreRecipientSearch", {
            StoreRecipientChecked: lr,
            StoreRecipientSearchPulse: pr > 0 && !lr,
            StoreRecipientSearchError: null !== Gr && !kr
          }),
          onClick: () => {
            var rr;
            null === (rr = tr.current) || void 0 === rr || rr.focus()
          },
          children: [lr && "found" === er.status && yr && (0, xr.jsx)(mI, {
            cosmetics: yr
          }), !(lr && "found" === er.status && yr) && (0, xr.jsx)(Ir.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, xr.jsx)(Kr.b, {
            className: "StoreRecipientSearchInput",
            domRef: tr,
            placeholderText: Nr("store:searchName"),
            defaultValue: Xr,
            maxLength: qr.h,
            onValueChange: function(rr) {
              "gift" !== Br && rr.trim() && (0, hS.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Wr.type(rr)
            },
            onEnter: () => {
              var rr;
              const Sr = null === (rr = tr.current) || void 0 === rr ? void 0 : rr.value.trim();
              Sr && Wr.choose(Sr, "typed")
            },
            blurOnEnter: !0
          }), lr && (0, xr.jsx)(UI, {
            pending: "pending" === er.status
          }), lr && (0, xr.jsx)("div", {
            ...(0, Er._)({
              disabled: mr
            }),
            "aria-label": Nr("store:clearRecipient"),
            title: Nr("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: rr => {
              rr.stopPropagation(), mr || Rr()
            },
            children: (0, xr.jsx)(Ir.c, {
              name: "xmark"
            })
          })]
        }, pr), Gr && (0, xr.jsx)("div", {
          className: ar()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: kr
          }),
          role: "status",
          children: Nr(Gr)
        })]
      })
    }
    var hI = Qr(3130),
      zI = Qr(3362),
      YI = Qr(3672),
      nI = Qr(4785),
      eI = Qr(3216),
      KI = Qr(4287),
      yI = Qr(4290),
      BI = Qr(4259);
    const TI = [EI.r.yellow, EI.r.green, EI.r.aqua, EI.r.blue, EI.r.purple, EI.r.red];

    function vI(rr) {
      return "needsRecipient" === rr || "lookingUp" === rr || "gift" === rr || "recipientOwns" === rr || "recipientSharesOwned" === rr || "recipientSubscribed" === rr
    }

    function OI(rr) {
      const {
        onKeyDown: Sr,
        ...Qr
      } = (0, Er._)();
      return {
        ...Qr,
        "aria-label": rr,
        onKeyDown: rr => {
          rr.target === rr.currentTarget && (null === Sr || void 0 === Sr || Sr(rr))
        }
      }
    }

    function LI(rr) {
      let {
        text: Sr
      } = rr;
      return (0, xr.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Sr).map(((rr, Sr) => (0, xr.jsx)("span", {
          style: {
            color: TI[Sr % TI.length]
          },
          children: rr
        }, Sr)))
      })
    }
    const lI = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function XI(rr) {
      let {
        state: Sr,
        item: Qr,
        price: Zr,
        busy: Wr,
        highlight: fr = !1,
        secondary: pr = !1,
        onAct: mr,
        onNeedRecipient: Nr,
        onLogin: Ur
      } = rr;
      const {
        t: tr
      } = (0, jr.E)(), hr = "superRank" === Qr ? (0, kr.t)(Date.now()).product.days : null, zr = "superRank" === Qr && "hyper" === (0, kr.r)(Date.now()).look ? Er.v : Er.p, Yr = pr ? Er.k : zr, nr = rr => null === hr ? tr(rr ? "general:gift" : "general:buy") : tr(rr ? "store:giftDays" : "store:buyDays", {
        days: hr
      }), er = (rr, Sr) => {
        const Qr = (0, xr.jsxs)(xr.Fragment, {
          children: [null === rr && (0, xr.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== rr && (0, xr.jsx)("span", {
            className: "StoreCtaLabel",
            title: rr,
            children: rr
          })]
        });
        return null !== hr ? (0, xr.jsxs)(xr.Fragment, {
          children: [Sr && (0, xr.jsx)("span", {
            className: "StoreCtaIcon",
            children: Sr
          }), Qr, (0, xr.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, xr.jsx)(zI.c, {
              amount: Zr
            })]
          })]
        }) : (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsxs)("span", {
            className: "StoreCtaLead",
            children: [Qr, "\xb7"]
          }), (0, xr.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Sr, (0, xr.jsx)(zI.c, {
              amount: Zr
            })]
          })]
        })
      };
      let Kr;
      switch (Sr) {
        case "pending":
          Kr = (0, xr.jsx)(zr, {
            className: "StoreCtaButton",
            disabled: !0,
            children: er(null)
          });
          break;
        case "login":
          Kr = (0, xr.jsx)(Yr, {
            className: "StoreCtaButton",
            onClick: Ur,
            children: er(nr(!1))
          });
          break;
        case "owned":
          Kr = (0, xr.jsx)(Er.k, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, hI.c)("store")
            },
            children: (0, xr.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, xr.jsx)(Ir.c, {
                name: "shirt"
              }), " ", tr("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Kr = (0, xr.jsx)(zr, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, xr.jsx)("span", {
              className: "StoreCtaLabel",
              children: tr(lI[Sr])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Kr = (0, xr.jsx)(zr, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Sr || null === Zr,
            loading: "lookingUp" === Sr || Wr,
            onClick: mr,
            analyticsClick: {
              id: "store.gift",
              value: Qr
            },
            children: er(nr(!0), sj.c)
          });
          break;
        case "buy":
        case "recharge":
          Kr = (0, xr.jsx)(Yr, {
            className: "StoreCtaButton",
            loading: Wr,
            disabled: null === Zr,
            onClick: mr,
            analyticsClick: {
              id: "store.buy",
              value: Qr
            },
            children: er(nr(!1))
          })
      }
      return (0, xr.jsx)("div", {
        className: ar()("StoreCta", {
          StoreCtaHighlight: fr,
          StoreCtaLabelFirst: null !== hr
        }),
        onClick: rr => {
          rr.stopPropagation(), "needsRecipient" === Sr && Nr()
        },
        children: Kr
      })
    }
    const PI = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function HI(rr) {
      var Sr;
      let {
        pack: Qr,
        state: Wr,
        busy: fr,
        onOpen: Er,
        onAct: pr,
        onNeedRecipient: mr,
        onLogin: Nr
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), tr = Vj.b[Qr], hr = Jj.i[Qr], zr = (0, fI.l)(Qr), Yr = (0, Zr.useRef)(null);
      (0, KI.h)(Qr, Yr);
      const nr = vI(Wr),
        er = null !== (Sr = tr.displayName) && void 0 !== Sr ? Sr : Qr,
        Kr = (0, nI.b)((() => {
          (0, YI.f)();
          const rr = (0, KI.e)(Qr);
          void 0 !== rr && (0, eI.h)((0, KI.b)(rr))
        })),
        [yr] = (0, Zr.useState)(jI.m);
      return (0, xr.jsxs)("div", {
        className: ar()("StoreTile StorePackTile", PI[tr.tier], {
          StorePackTileOwned: "owned" === Wr,
          StorePackTileRecipientOwns: "recipientOwns" === Wr,
          StoreTileGift: nr
        }),
        ...OI(er),
        ref: Yr,
        "data-store-item": Qr,
        onClick: Er,
        onPointerMove: rr => {
          "mouse" !== rr.pointerType || 0 === rr.movementX && 0 === rr.movementY || yr || Kr.start()
        },
        onPointerLeave: Kr.cancel,
        children: [hr && (0, xr.jsx)(hr, {
          simple: !0
        }), (0, xr.jsx)("div", {
          className: "StorePackCharacters",
          children: zr.map((rr => (0, xr.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,fI.g)(rr)})`
            }
          }, rr)))
        }), (0, xr.jsx)("div", {
          className: "StoreTileScrim"
        }), nr && (0, xr.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, xr.jsx)(BI.b, {
          pack: Qr,
          className: ar()({
            PackAnimatedBadgeBesideRibbon: nr
          })
        }), (0, xr.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, xr.jsx)("div", {
            className: "StoreTileTitle",
            children: er
          }), (0, xr.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, xr.jsx)(yI.d, {
              tier: tr.tier
            }), " \xb7 ", Ur("store:itemCount", {
              count: (0, EW.p)(Qr)
            }), "owned" === Wr && (0, xr.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, xr.jsx)(Ir.c, {
                name: "check"
              }), " ", Ur("general:owned")]
            })]
          }), (0, xr.jsx)(XI, {
            state: Wr,
            item: Qr,
            price: (0, ij.e)(Qr),
            busy: fr,
            onAct: pr,
            onNeedRecipient: mr,
            onLogin: Nr
          })]
        })]
      })
    }
    var qI = Qr(1693),
      RI = Qr(4840),
      gI = Qr(4311),
      CI = Qr(4948),
      MI = Qr(35490),
      GI = Qr(4876);
    const kI = {
      cape: Gr.g.cape
    };

    function AI(rr) {
      var Sr, Qr;
      let {
        wearer: Wr,
        active: Ir,
        tryOn: fr = kI,
        framing: Er = "store",
        glow: pr = !0,
        turnable: mr = !1,
        className: Nr
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), tr = (0, Zr.useRef)(null), [hr] = (0, Zr.useState)(jI.m), zr = function(rr) {
        const [Sr, Qr] = (0, Zr.useState)(!1);
        return (0, Zr.useEffect)((() => {
          const Sr = new IntersectionObserver((rr => {
            Qr(rr[rr.length - 1].isIntersecting)
          }));
          return Sr.observe(rr.current), () => {
            Sr.disconnect()
          }
        }), [rr]), Sr
      }(tr), Yr = (0, GI.g)("storeRank"), nr = null !== (Sr = Wr.name) && void 0 !== Sr ? Sr : Ur(Wr.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), er = null !== (Qr = Wr.cosmetics) && void 0 !== Qr ? Qr : {}, Kr = `${nr}|${JSON.stringify(er)}`, yr = Ir && zr && !hr && !Yr, [Br, Tr] = (0, Zr.useState)(null);
      yr || null === Br || Tr(null);
      const vr = yr && Br === Kr;
      return (0, xr.jsxs)("div", {
        ref: tr,
        className: ar()("HyperRankStage", Nr, {
          HyperRankStageDrawn: vr
        }),
        children: [pr && (0, xr.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, xr.jsx)(kr.d, {
          className: "HyperRankStageStandIn"
        }), yr && (0, xr.jsx)(VI, {
          name: nr,
          cosmetics: er,
          tryOn: fr,
          framing: Er,
          turnable: mr,
          onDrawn: () => {
            Tr(Kr)
          }
        }, Kr), (0, xr.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function VI(rr) {
      let {
        name: Sr,
        cosmetics: Qr,
        tryOn: Wr,
        framing: jr,
        turnable: Ir,
        onDrawn: fr
      } = rr;
      const Er = (0, Zr.useRef)(null),
        pr = (0, Zr.useRef)(0),
        mr = (0, Zr.useRef)(null),
        Nr = (0, Zr.useMemo)((() => {
          var rr;
          return {
            name: Sr,
            ranks: [Gr.g.rank],
            nameColour: null !== (rr = Qr.nameColour) && void 0 !== rr ? rr : EI.e
          }
        }), [Sr, Qr.nameColour]),
        Ur = rr => {
          var Sr;
          (null === (Sr = mr.current) || void 0 === Sr ? void 0 : Sr.pointerId) === rr.pointerId && (mr.current = null)
        },
        tr = Ir ? {
          onPointerDown: rr => {
            0 === rr.button && (mr.current = {
              pointerId: rr.pointerId,
              x: rr.clientX
            }, rr.currentTarget.setPointerCapture(rr.pointerId))
          },
          onPointerMove: rr => {
            var Sr;
            const Qr = mr.current;
            (null === Qr || void 0 === Qr ? void 0 : Qr.pointerId) === rr.pointerId && (pr.current -= (rr.clientX - Qr.x) * MI.d, Qr.x = rr.clientX, null === (Sr = Er.current) || void 0 === Sr || Sr.turnCamera(pr.current))
          },
          onPointerUp: Ur,
          onPointerCancel: Ur
        } : {};
      return (0, xr.jsx)("div", {
        className: ar()("HyperRankStageLive", {
          HyperRankStageTurnable: Ir
        }),
        ...tr,
        children: (0, xr.jsx)(Zr.Suspense, {
          fallback: null,
          children: (0, xr.jsx)(YI.b, {
            ref: Er,
            owner: "storeRank",
            framing: jr,
            forcedCosmetics: Wr,
            nametag: Nr,
            onReady: () => {
              var rr;
              null === (rr = Er.current) || void 0 === rr || rr.setAllCosmetics(Qr)
            },
            onDrawn: fr
          })
        })
      })
    }
    var iI = Qr(4955);

    function wI(rr) {
      var Sr;
      return null !== (Sr = (0, fW.l)(rr)) && void 0 !== Sr ? Sr : fW.p[fW.p.length - 1]
    }

    function cI(rr, Sr) {
      return rr.tiers.flatMap((rr => {
        var Qr;
        return null !== (Qr = rr[Sr]) && void 0 !== Qr ? Qr : []
      }))
    }

    function FI(rr) {
      const Sr = cI(rr, "hyper");
      return Sr.filter((rr => "cosmetic" === rr.kind && !(0, CI.n)(rr, Sr)))
    }

    function oI(rr, Sr) {
      const Qr = cI(rr, Sr).find((rr => "xpBoost" === rr.kind));
      return "xpBoost" === (null === Qr || void 0 === Qr ? void 0 : Qr.kind) ? Qr : null
    }

    function bI(rr) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, xr.jsx)(LI, {
          text: rr("store:colourfulNames")
        }),
        detail: rr("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: rr("store:perkCapes"),
        detail: rr("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: rr("store:perkNametag", {
          rank: rr((0, kr.l)(Gr.g.id).nameKey)
        }),
        detail: rr("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: rr("store:perkNoAdverts"),
        detail: rr("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: rr("store:perkFriends", {
          count: (0, US.e)([Gr.g.rank])
        }),
        detail: rr("store:perkFriendsDetail", {
          count: (0, US.e)([])
        })
      }]
    }

    function JI() {
      const {
        t: rr
      } = (0, jr.E)(), Sr = [{
        id: "battlePass",
        icon: "crown",
        title: rr("store:perkBattlePassTrack")
      }, ...bI(rr)];
      return (0, xr.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: Sr.map((rr => (0, xr.jsxs)("li", {
          children: [(0, xr.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, xr.jsx)(Ir.c, {
              name: rr.icon
            })
          }), rr.title]
        }, rr.id)))
      })
    }

    function DI() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, xr.jsx)(dI, {}), bI(rr).map((rr => (0, xr.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, xr.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, xr.jsx)(Ir.c, {
              name: rr.icon
            })
          }), (0, xr.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, xr.jsx)("b", {
              children: rr.title
            }), (0, xr.jsx)("small", {
              children: rr.detail
            })]
          })]
        }, rr.id)))]
      })
    }

    function dI() {
      const {
        t: rr,
        selectedLanguage: Sr
      } = (0, jr.E)(), Qr = wI(Date.now()), Zr = FI(Qr), Wr = function(rr) {
        return FI(rr).filter((rr => null !== (0, CI.j)(rr) || null !== (0, CI.k)(rr))).reverse()
      }(Qr).slice(0, 4), ar = oI(Qr, "hyper"), fr = oI(Qr, "free"), Er = (0, jr.f)(Sr.code, "store:battlePassTiersEnds", Qr.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, xr.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, xr.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, xr.jsx)(Ir.c, {
            name: "crown"
          })
        }), (0, xr.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, xr.jsx)("b", {
            children: rr("store:battlePassSeason", {
              season: Qr.seasonNumber
            })
          }), (0, xr.jsx)("small", {
            children: rr("store:battlePassTiersEnds", {
              tiers: Qr.tierCount,
              date: Er
            })
          })]
        }), (0, xr.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, xr.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === Zr.length ? rr("store:battlePassOneCosmetic") : rr("store:battlePassCosmetics", {
              count: Zr.length
            })
          }), (0, xr.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [Wr.map((Sr => (0, xr.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, CI.e)(Sr, rr),
              children: (0, xr.jsx)(iI.d, {
                reward: Sr
              })
            }, Sr.id))), Zr.length > Wr.length && (0, xr.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: rr("store:battlePassMore", {
                count: Zr.length - Wr.length
              })
            })]
          })]
        }), (0, xr.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [ar && fr && (0, xr.jsxs)("li", {
            children: [(0, xr.jsx)(Ir.c, {
              name: "angles-up"
            }), rr("store:battlePassXp", {
              multiplier: ar.multiplier,
              minutes: ar.minutes,
              freeMinutes: fr.minutes
            })]
          }), (0, xr.jsxs)("li", {
            children: [(0, xr.jsx)(Ir.c, {
              name: "lock-open"
            }), rr("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }
    const sI = ["snowmanSet", "skis", "reindeerPet"];

    function uI() {
      const rr = wI(Date.now()),
        Sr = {};
      let Qr = 0;
      for (const Wr of rr.tiers) {
        const rr = Wr.hyper;
        var Zr;
        if ("cosmetic" === (null === rr || void 0 === rr ? void 0 : rr.kind) && sI.includes(rr.id)) Object.assign(Sr, null === (Zr = (0, CI.h)(rr)) || void 0 === Zr ? void 0 : Zr.cosmetics), Qr++
      }
      return Qr < sI.length && console.warn(`Hyper Rank's page wears ${Qr} of its ${sI.length} rewards: ${rr.seasonId} lacks the others`), {
        ...Sr,
        cape: Gr.g.cape
      }
    }

    function rf(rr) {
      let {
        wearer: Sr
      } = rr;
      const Qr = (0, Zr.useMemo)(uI, []);
      return (0, xr.jsx)(AI, {
        className: "HyperRankShowcase",
        wearer: Sr,
        active: !0,
        tryOn: Qr,
        framing: "showcase",
        glow: !1,
        turnable: !0
      })
    }
    const Sf = Qr.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Qf() {
      (0, eI.h)(Sf, {
        lowPriority: !1
      })
    }

    function Zf() {
      const {
        t: rr
      } = (0, jr.E)(), [Sr, Qr] = (0, Zr.useState)("starting"), Wr = (0, Zr.useRef)(null), ar = (0, jQ.b)(), fr = (0, Zr.useRef)(null), pr = (0, Zr.useCallback)((() => {
        const rr = Wr.current;
        null !== rr.error && rr.load();
        const Sr = rr.play();
        fr.current = Sr, Sr.catch((rr => {
          (0, RI.c)("Failed to play Super Rank video", rr), ar.current && fr.current === Sr && Qr("failed")
        }))
      }), [ar]);
      return (0, Zr.useEffect)((() => {
        const rr = Wr.current;
        let Sr;

        function Qr() {
          clearTimeout(Sr), Sr = setTimeout(pr, 3e3)
        }
        return pr(), rr.addEventListener("ended", Qr), () => {
          clearTimeout(Sr), rr.removeEventListener("ended", Qr)
        }
      }), [pr]), (0, xr.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, xr.jsx)("video", {
          ref: Wr,
          src: `${lS.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: Sf,
          muted: !0,
          playsInline: !0,
          controls: "playing" === Sr,
          onPlaying: () => {
            Qr("playing")
          },
          onError: () => {
            Qr("failed")
          }
        }), ("failed" === Sr || "loading" === Sr) && (0, xr.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, xr.jsx)(Er.h, {
            ariaLabel: rr("general:play"),
            loading: "loading" === Sr,
            onClick: () => {
              Qr("loading"), pr()
            },
            touchPressOn: "pointerup",
            children: (0, xr.jsx)(Ir.c, {
              name: "play"
            })
          })
        })]
      })
    }

    function Wf(rr) {
      let {
        tierId: Sr,
        wearer: Qr,
        onBack: Zr,
        cta: Wr,
        recipient: Ir,
        afterCta: fr
      } = rr;
      const {
        t: pr
      } = (0, jr.E)(), mr = "hyper" === (0, kr.l)(Sr).look;
      return (0, xr.jsxs)("div", {
        className: ar()("StoreSuperRankDetail", {
          StoreHyperRankDetail: mr
        }),
        children: [(0, xr.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, xr.jsx)(Er.d, {
            className: "StoreDetailBackButton",
            onClick: Zr,
            padBack: !0,
            children: pr("general:back")
          }), (0, xr.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, xr.jsx)(kr.i, {
              tierId: Sr
            })
          }), Ir]
        }), (0, xr.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [mr && (0, xr.jsx)(rf, {
            wearer: Qr
          }), !mr && (0, xr.jsx)(Zf, {}), (0, xr.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [mr && (0, xr.jsx)(DI, {}), !mr && (0, xr.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, xr.jsx)(gI.b, {
                tierId: Sr
              })
            }), (0, xr.jsxs)("div", {
              className: "StoreTileActions",
              children: [Wr, fr]
            })]
          })]
        })]
      })
    }
    var af = Qr(4190),
      jf = Qr(3677);

    function If() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, xr.jsx)("div", {
        className: "SmallTextBold",
        children: rr("payments:legalDocumentLoadFailed")
      })
    }
    const ff = (0, Zr.lazy)((() => (0, jf.c)(Promise.all([Qr.e(146), Qr.e(712)]).then((() => Qr(7482))), (rr => rr.default), If))),
      Ef = (0, Zr.lazy)((() => (0, jf.c)(Qr.e(148).then((() => Qr(7496))), (rr => rr.default), If)));

    function pf(rr, Sr) {
      rr.preventDefault(), WS.NotificationProvider.showCustomPopup({
        body: (0, xr.jsx)("div", {
          className: "AppLegalDocument",
          children: (0, xr.jsx)(Zr.Suspense, {
            fallback: (0, xr.jsx)(yr.c, {}),
            children: (0, xr.jsx)(Sr, {})
          })
        }),
        middleScreenPopupClassName: "AppLegalDocumentPopup",
        unlockPointerKey: "appLegalDocument"
      })
    }

    function xf(rr) {
      let {
        price: Sr,
        perks: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [Qr, (0, xr.jsx)("div", {
          className: "SmallTextLight",
          children: Zr("payments:subscriptionRenewsMonthly", {
            price: Sr
          })
        }), (0, xr.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: ["mobileIos" === Lr.siteUsed && (0, xr.jsx)("a", {
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            target: "_blank",
            rel: "noreferrer",
            children: Zr("payments:appleTermsOfUse")
          }), "mobileIos" !== Lr.siteUsed && (0, xr.jsx)("a", {
            href: "/terms-of-service",
            onClick: rr => {
              pf(rr, Ef)
            },
            children: Zr("homePage:termsOfService")
          }), (0, xr.jsx)("a", {
            href: "/privacy-policy",
            onClick: rr => {
              pf(rr, ff)
            },
            children: Zr("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var mf = Qr(4273),
      Nf = Qr(4275),
      Uf = Qr(4151);

    function tf(rr) {
      const {
        userContext: Sr
      } = (0, Ur.c)(), {
        purchaseUnderWay: Qr,
        notice: Wr,
        subscribe: ar
      } = (0, Uf.d)(), [jr, Ir] = (0, Zr.useState)(null), [fr, Er] = (0, Zr.useState)(0), pr = (0, jQ.b)(), xr = Sr !== lr.NULL_USER_CONTEXT, mr = xr && (Sr.mayBuy() || (0, wr.guestsMayBuy)()), Nr = null !== jr && jr.loadedFor === Sr ? jr.offer : null, tr = null === Wr || void 0 === Wr ? void 0 : Wr.pendingIntentId, hr = (0, Zr.useRef)(tr);

      function zr() {
        Er((rr => rr + 1))
      }
      return (0, Zr.useEffect)((() => {
        void 0 !== hr.current && void 0 === tr && zr(), hr.current = tr
      }), [tr]), (0, Zr.useEffect)((() => {
        if (!xr) return;
        let Qr = !1;
        return async function(rr, Sr) {
          const {
            offering: Qr
          } = await (0, ur.getBillingClient)().getOfferings(rr), Zr = null === Qr || void 0 === Qr ? void 0 : Qr.packages.find(sr.isPricedPackage);
          return void 0 === Zr ? {
            kind: "unavailable"
          } : Sr ? {
            kind: "loaded",
            pkg: Zr,
            preview: await (0, Nf.c)(Zr.productId)
          } : {
            kind: "loaded",
            pkg: Zr,
            preview: {
              kind: "none"
            }
          }
        }(rr, mr).catch((Sr => (console.error(`Billing: loading the ${rr} subscription or its preview failed:`, Sr), {
          kind: "loadFailed"
        }))).then((rr => {
          Qr || Ir((Qr => "loadFailed" === rr.kind && (null === Qr || void 0 === Qr ? void 0 : Qr.loadedFor) === Sr ? Qr : {
            loadedFor: Sr,
            offer: rr
          }))
        })), () => {
          Qr = !0
        }
      }), [rr, Sr, xr, mr, fr]), {
        offer: Nr,
        purchaseUnderWay: Qr,
        notice: Wr,
        pendingIntentId: tr,
        mountedRef: pr,
        checkOut: async function(rr) {
          const Qr = await ar(rr);
          pr.current && ("unknownPackage" === Qr.kind && Ir({
            loadedFor: Sr,
            offer: {
              kind: "unavailable"
            }
          }), zr())
        }
      }
    }

    function hf(rr) {
      let {
        onOfferedChange: Sr
      } = rr;
      return (0, wr.usePurchasesAllowed)() && (0, wr.subscriptionsSold)() ? (0, xr.jsx)(zf, {
        onOfferedChange: Sr
      }) : null
    }

    function zf(rr) {
      let {
        onOfferedChange: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        offer: Wr,
        purchaseUnderWay: ar,
        notice: Ir,
        pendingIntentId: fr,
        mountedRef: pr,
        checkOut: mr
      } = tf((0, kr.l)(Gr.g.id).placementId), [Nr, Ur] = (0, Zr.useState)(!1), tr = null === Wr || "loaded" === Wr.kind && "refused" !== Wr.preview.kind;
      if ((0, Zr.useEffect)((() => {
          Sr(tr)
        }), [tr]), null === Wr || "unavailable" === Wr.kind) return null;
      if ("loadFailed" === Wr.kind) return (0, xr.jsx)(af.h, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: hr,
        preview: Yr
      } = Wr;
      if ("refused" === Yr.kind) return (0, xr.jsx)(af.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Yr.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const nr = (0, aS.e)(hr);
      return (0, xr.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: rr => {
          rr.stopPropagation()
        },
        children: [(0, xr.jsx)(af.h, {
          notice: Ir,
          className: "SmallTextBold"
        }), (0, xr.jsx)(af.c, {
          className: "SmallTextBold"
        }), (0, xr.jsx)("div", {
          className: "StoreCta",
          children: (0, xr.jsx)(Er.v, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(rr, Sr) {
                if ("refund" === Sr.kind) {
                  Ur(!0);
                  const rr = await (0, mf.c)(Sr, null);
                  if (!pr.current) return;
                  if (Ur(!1), !rr) return
                }
                await mr(rr)
              }(hr, Yr)
            },
            disabled: void 0 !== fr,
            loading: ar || Nr,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, xr.jsx)("span", {
              className: "StoreCtaLabel",
              children: Qr("payments:subscribeContinue", {
                price: nr
              })
            })
          })
        }), (0, zr.isMobileApp)() && (0, xr.jsx)(xf, {
          price: nr,
          perks: (0, xr.jsx)(JI, {})
        })]
      })
    }

    function Yf() {
      const {
        t: rr
      } = (0, jr.E)();
      return (0, xr.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, xr.jsxs)("li", {
          children: [(0, xr.jsx)(Ir.c, {
            name: "check"
          }), (0, xr.jsx)(LI, {
            text: rr("store:colourfulNames")
          })]
        }), (0, xr.jsxs)("li", {
          children: [(0, xr.jsx)(Ir.c, {
            name: "check"
          }), rr("store:perkCapes")]
        }), (0, xr.jsxs)("li", {
          children: [(0, xr.jsx)(Ir.c, {
            name: "check"
          }), rr("store:perkNoAdverts")]
        }), (0, xr.jsxs)("li", {
          children: [(0, xr.jsx)(Ir.c, {
            name: "check"
          }), rr("store:perkFriends", {
            count: (0, US.e)(["super"])
          })]
        })]
      })
    }

    function nf(rr, Sr) {
      return 1 === Sr ? rr("store:oneDayLeft") : rr("store:daysLeft", {
        days: Sr
      })
    }

    function ef(rr) {
      let {
        daysLeft: Sr,
        totalDays: Qr,
        urgent: Zr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)(), Ir = Qr > 0 ? Math.min(1, Math.max(.03, Sr / Qr)) : 1;
      return (0, xr.jsxs)("div", {
        className: ar()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Zr
        }),
        children: [(0, xr.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: nf(Wr, Sr)
        }), (0, xr.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, xr.jsx)("i", {
            style: {
              width: 100 * Ir + "%"
            }
          })
        })]
      })
    }

    function Kf(rr) {
      var Sr;
      let {
        state: Qr,
        urgent: Wr,
        daysLeft: Ir,
        totalDays: fr,
        recipientHasSuperRank: Er,
        busy: pr,
        highlight: mr,
        onOpen: Nr,
        onAct: tr,
        onNeedRecipient: hr,
        onLogin: Yr,
        wearer: nr,
        live: er,
        onWake: Kr
      } = rr;
      const {
        t: yr
      } = (0, jr.E)(), {
        userContext: Br
      } = (0, Ur.c)(), Tr = Date.now(), vr = (0, kr.r)(Tr), Or = "hyper" === vr.look, Lr = Or ? void 0 : Qf, lr = vI(Qr), Xr = (0, kr.t)(Tr), {
        days: Pr
      } = Xr.product, Hr = yr("store:recipientHasSuperRank", {
        giftDays: Pr
      }), qr = null === (Sr = mS("subscribed" === Qr)) || void 0 === Sr ? void 0 : Sr.text, Rr = lr ? null : (0, kr.p)(Br.superRankInfo, Tr), gr = Or && !lr && "subscribed" !== Qr && "pending" !== Qr && (0, wr.subscriptionsSold)() && !(0, zr.isMobileApp)(), [Cr, Mr] = (0, Zr.useState)(!0);
      return (0, xr.jsxs)("div", {
        className: ar()("StoreTile StoreSuperRankTile", {
          StoreTileGift: lr,
          StoreSuperRankTileUrgent: "recharge" === Qr && Wr,
          StoreSuperRankTileWithChip: Er,
          StoreSuperRankTileGiftReady: "gift" === Qr,
          StoreHyperRankTile: Or
        }),
        ...OI(yr(vr.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: Lr,
        onFocus: Lr,
        onPointerMove: rr => {
          !Or || er || "mouse" !== rr.pointerType || 0 === rr.movementX && 0 === rr.movementY || Kr()
        },
        onClick: Nr,
        children: [Or && (0, xr.jsx)(AI, {
          className: "StoreHyperRankTileStage",
          wearer: nr,
          active: er
        }), !Or && (0, xr.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${vr.artUrl})`
          }
        }), lr && (0, xr.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, xr.jsxs)("div", {
          className: "StoreTileContent",
          children: [Er && (0, xr.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Hr,
            children: Hr
          }), (0, xr.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, xr.jsx)(kr.i, {
              tierId: (0, Ar.i)(Tr).id
            })
          }), lr && (0, xr.jsx)("div", {
            className: "StoreTilePitch",
            children: yr("store:giftPitch", {
              days: Pr
            })
          }), Or && ("buy" === Qr || "login" === Qr) && null === Rr && (0, xr.jsx)("div", {
            className: "StoreTilePitch",
            children: yr("store:hyperHook")
          }), "recharge" === Qr && (0, xr.jsx)(ef, {
            daysLeft: Ir,
            totalDays: fr,
            urgent: Wr
          }), qr && (0, xr.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, xr.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: qr
            })
          }), null !== Rr && (0, xr.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, xr.jsx)(ir, {
              className: "StoreSuperRankDaysLeft",
              until: Rr
            })
          }), Or && (0, xr.jsx)(JI, {}), !Or && (0, xr.jsx)(Yf, {}), (0, xr.jsxs)("div", {
            className: "StoreTileActions",
            children: [gr && (0, xr.jsx)(hf, {
              onOfferedChange: Mr
            }), (0, qI.c)(Xr.product.tierId, Tr) && (0, xr.jsx)(XI, {
              state: Qr,
              item: "superRank",
              price: Xr.price,
              busy: pr,
              highlight: mr,
              secondary: gr && Cr,
              onAct: tr,
              onNeedRecipient: hr,
              onLogin: Yr
            }), "needsRecipient" === Qr && (0, xr.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: yr("store:pickRecipientFirst")
            }), "recharge" === Qr && Wr && (0, xr.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Ir ? yr("store:endsInOneDay") : yr("store:endsInDays", {
                days: Ir
              })
            })]
          })]
        })]
      })
    }
    var yf = Qr(1677),
      Bf = Qr(1583),
      Tf = Qr(4820);

    function vf() {
      return (0, xr.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Of = Qr(1472),
      Lf = Qr(1686),
      lf = Qr(35505);

    function Xf(rr) {
      let {
        character: Sr,
        drawn: Qr,
        onDrawn: Wr
      } = rr;
      const jr = (0, Zr.useRef)(null),
        Ir = (0, lf.f)(Sr);
      return (0, xr.jsx)("div", {
        className: ar()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Qr
        }),
        children: (0, xr.jsx)(Zr.Suspense, {
          fallback: null,
          children: (0, xr.jsx)(YI.b, {
            ref: jr,
            framing: "store",
            turntableFromYaw: Qr ? Ir.yaw : null,
            onReady: () => {
              var rr, Qr;
              null === (rr = jr.current) || void 0 === rr || rr.setOrbit(Ir), null === (Qr = jr.current) || void 0 === Qr || Qr.setAllCosmetics(Lf.e[Sr].cosmetics)
            },
            onDrawn: Wr
          })
        })
      })
    }
    var Pf = Qr(4266);
    const Hf = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      qf = new Set(["wildSpirits"]);

    function Rf(rr) {
      var Sr;
      let {
        tile: Qr,
        design: Wr,
        canGoLive: fr,
        live: Er,
        busy: pr,
        highlight: mr,
        onLiveStart: Nr,
        onLiveEnd: Ur,
        onOpen: tr,
        onAct: hr,
        onNeedRecipient: zr,
        onLogin: Yr
      } = rr;
      const {
        t: nr
      } = (0, jr.E)(), {
        pack: er,
        state: Kr
      } = Qr, yr = Vj.b[er], Br = (0, Vj.d)(er), Tr = (0, fI.k)(er), vr = Jj.i[Tr], Or = qf.has(Tr), {
        tier: Lr
      } = yr, lr = (0, Pf.i)(er), Xr = "legendary" === Lr || "mythic" === Lr, Pr = (0, Zr.useRef)(null);
      (0, Of.b)(Pr, "epic" === Lr || Xr || Or);
      const [qr, Rr] = (0, Zr.useState)(!1);
      return !Er && qr && Rr(!1), (0, xr.jsxs)("div", {
        ref: Pr,
        className: ar()("StoreCharacterCard", `StoreCharacterCard${Wr}`, Hf[Lr], {
          StoreCharacterCardOwned: "owned" === Kr || "recipientOwns" === Kr,
          StoreCharacterCardGift: vI(Kr),
          StoreCharacterCardItem: void 0 === Br
        }),
        onPointerMove: rr => {
          "mouse" !== rr.pointerType || 0 === rr.movementX && 0 === rr.movementY || !fr || Er || void 0 === Br || Nr()
        },
        onPointerLeave: Ur,
        children: [(0, xr.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: vr && (0, xr.jsx)(vr, {
            simple: !0
          })
        }), Xr && (0, xr.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, xr.jsxs)(Hr.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, yf.f)({
            kind: "pack",
            pack: er
          }, Date.now()),
          "data-store-item": er,
          onClick: rr => {
            (0, Bf.d)(rr) && (rr.preventDefault(), tr())
          },
          children: [(0, xr.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, xr.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, xr.jsx)("div", {
              className: ar()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: qr
              }),
              style: {
                backgroundImage: `url(${(0,fI.s)(er)})`
              }
            }), Er && void 0 !== Br && (0, xr.jsx)(Xf, {
              character: Br,
              drawn: qr,
              onDrawn: () => {
                Rr(!0)
              }
            })]
          }), (0, xr.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Sr = yr.displayName) && void 0 !== Sr ? Sr : er
          }), (0, xr.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, xr.jsx)(yI.d, {
              tier: Lr
            }), lr && (0, xr.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, xr.jsx)(Ir.c, {
                name: "film"
              }), nr("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, xr.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Or && (0, xr.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, xr.jsx)(vf, {})
        }), (0, xr.jsx)(BI.b, {
          pack: er,
          iconOnly: !0,
          className: ar()({
            PackAnimatedBadgeBelowOwned: "owned" === Kr
          })
        }), "owned" === Kr && (0, xr.jsx)("span", {
          className: "StoreCharacterOwned",
          title: nr("general:owned"),
          "aria-label": nr("general:owned"),
          children: (0, xr.jsx)(Ir.c, {
            name: "check"
          })
        }), (0, xr.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, xr.jsx)(XI, {
            state: Kr,
            item: er,
            price: (0, ij.e)(er),
            busy: pr,
            highlight: mr,
            onAct: hr,
            onNeedRecipient: zr,
            onLogin: Yr
          })
        })]
      })
    }

    function gf(rr) {
      let {
        tiles: Sr,
        busy: Qr,
        highlightItem: Wr,
        onOpen: ar,
        onAct: jr,
        onNeedRecipient: Ir,
        onLogin: fr,
        livePack: Er,
        setLivePack: pr
      } = rr;
      const mr = (0, Tf.n)("storeCharacterCardFoil"),
        Nr = (0, Tf.n)("storeCharacterCardSpotlight"),
        Ur = mr ? "Foil" : Nr ? "Spotlight" : "Showcase",
        [tr] = (0, Zr.useState)(jI.m);
      return (0, xr.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Sr.map((rr => (0, xr.jsx)(Rf, {
          tile: rr,
          design: Ur,
          canGoLive: !tr,
          live: Er === rr.pack,
          busy: Qr,
          highlight: Wr === rr.pack,
          onLiveStart: () => {
            pr(rr.pack)
          },
          onLiveEnd: () => {
            pr((Sr => Sr === rr.pack ? null : Sr))
          },
          onOpen: () => {
            ar(rr.pack)
          },
          onAct: () => {
            jr(rr.pack)
          },
          onNeedRecipient: Ir,
          onLogin: () => {
            fr(rr.pack)
          }
        }, rr.pack)))
      })
    }
    var Cf = Qr(35515);

    function Mf(rr) {
      let {
        title: Sr
      } = rr;
      return (0, xr.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, xr.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Sr
        })
      })
    }

    function Gf(rr) {
      let {
        mountAtOnce: Sr,
        children: Qr
      } = rr;
      const Wr = (0, Zr.useRef)(null),
        [ar, jr] = (0, Zr.useState)(Sr),
        Ir = (0, Cf.d)();
      return (0, Zr.useLayoutEffect)((() => {
        const rr = Wr.current;
        rr && rr.getBoundingClientRect().top < rr.parentElement.getBoundingClientRect().bottom && jr(!0)
      }), []), ar || Ir ? (0, xr.jsx)(xr.Fragment, {
        children: Qr
      }) : (0, xr.jsx)("div", {
        ref: Wr
      })
    }

    function kf(rr) {
      let {
        layout: Sr,
        mountAtOnce: Qr,
        bundleGift: Wr,
        superRankTotalDays: ar,
        busy: Ir,
        highlightItem: fr,
        onOpen: Er,
        onAct: pr,
        onNeedRecipient: mr,
        onLogin: Nr,
        dailyDropTile: Ur,
        dealBanner: tr,
        rankWearer: hr
      } = rr;
      const {
        t: zr
      } = (0, jr.E)(), Yr = Sr.packs.filter((rr => void 0 === (0, Vj.d)(rr.pack) && !(0, Vj.i)(rr.pack))), nr = Sr.packs.filter((rr => void 0 !== (0, Vj.d)(rr.pack))), er = Sr.packs.filter((rr => (0, Vj.i)(rr.pack))), [Kr, yr] = (0, Zr.useState)(null), [Br, vr] = (0, Zr.useState)(!1), {
        gameState: Or
      } = (0, Tr.n)(["gameState"]), Lr = null === Kr && (Br || "inGame" === Or);
      return (0, xr.jsxs)(xr.Fragment, {
        children: [(0, xr.jsx)(aS.b, {
          className: "StoreSuperGems",
          gift: Wr,
          highlightSku: fr,
          leadingTile: Ur,
          afterLeadingTile: tr
        }), null !== Sr.superRank && (0, xr.jsxs)(xr.Fragment, {
          children: [(0, xr.jsx)(Mf, {
            title: zr("store:rank")
          }), (0, xr.jsx)(Kf, {
            state: Sr.superRank.state,
            urgent: Sr.superRank.urgent,
            daysLeft: Sr.superRankDaysLeft,
            totalDays: ar,
            recipientHasSuperRank: Sr.recipientHasSuperRank,
            wearer: hr,
            live: Lr,
            onWake: () => {
              vr(!0)
            },
            busy: Ir,
            highlight: "superRank" === fr,
            onOpen: () => {
              Er("superRank")
            },
            onAct: () => {
              pr("superRank")
            },
            onNeedRecipient: mr,
            onLogin: () => {
              Nr("superRank")
            }
          })]
        }), (0, xr.jsxs)(Gf, {
          mountAtOnce: Qr,
          children: [(0, xr.jsx)(Mf, {
            title: zr("store:bundles")
          }), (0, xr.jsx)("div", {
            className: "StorePackGrid",
            children: Yr.map((rr => (0, xr.jsx)(HI, {
              pack: rr.pack,
              state: rr.state,
              busy: Ir,
              onOpen: () => {
                Er(rr.pack)
              },
              onAct: () => {
                pr(rr.pack)
              },
              onNeedRecipient: mr,
              onLogin: () => {
                Nr(rr.pack)
              }
            }, rr.pack)))
          }), (0, xr.jsxs)(Gf, {
            mountAtOnce: Qr,
            children: [(0, xr.jsx)(Mf, {
              title: zr("store:characters")
            }), (0, xr.jsx)(gf, {
              tiles: nr,
              busy: Ir,
              highlightItem: fr,
              onOpen: Er,
              onAct: pr,
              onNeedRecipient: mr,
              onLogin: Nr,
              livePack: Kr,
              setLivePack: yr
            }), er.length > 0 && (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsx)(Mf, {
                title: zr("store:premiumItems")
              }), (0, xr.jsx)(gf, {
                tiles: er,
                busy: Ir,
                highlightItem: fr,
                onOpen: Er,
                onAct: pr,
                onNeedRecipient: mr,
                onLogin: Nr,
                livePack: Kr,
                setLivePack: yr
              })]
            })]
          })]
        })]
      })
    }

    function Af(rr) {
      let {
        giftName: Sr,
        onChooseRecipient: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return Sr ? (0, xr.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: Zr("store:giftFor", {
          name: Sr
        }),
        children: [sj.c, " ", Zr("store:giftFor", {
          name: Sr
        })]
      }) : (0, xr.jsxs)("div", {
        ...(0, Er._)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: Qr,
        children: [sj.c, " ", Zr("store:chooseRecipient")]
      })
    }

    function Vf(rr) {
      return (0, Ar.d)(Date.now()) ? (0, xr.jsx)(Ff, {
        ...rr
      }) : (0, xr.jsx)(wf, {
        ...rr
      })
    }

    function wf(rr) {
      let {
        state: Sr,
        wearer: Qr,
        mode: Zr,
        giftName: Wr,
        busy: ar,
        highlight: Ir,
        purchaseError: fr,
        onBack: Er,
        onChooseRecipient: pr,
        onAct: mr,
        onLogin: Nr
      } = rr;
      const {
        t: Ur
      } = (0, jr.E)(), tr = mS("gift" !== Zr);
      return (0, xr.jsx)(Wf, {
        tierId: Gr.t.id,
        wearer: Qr,
        onBack: Er,
        recipient: "gift" === Zr && (0, xr.jsx)(Af, {
          giftName: Wr,
          onChooseRecipient: pr
        }),
        cta: (0, xr.jsx)(XI, {
          state: Sr,
          item: "superRank",
          price: (0, kr.t)(Date.now()).price,
          busy: ar,
          highlight: Ir,
          onAct: mr,
          onNeedRecipient: pr,
          onLogin: Nr
        }),
        afterCta: (0, xr.jsxs)(xr.Fragment, {
          children: [tr && (0, xr.jsx)("span", {
            className: "StoreTileNote",
            children: tr.text
          }), (null === tr || void 0 === tr ? void 0 : tr.manageUrl) && (0, xr.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: tr.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: Ur("payments:manageSubscription")
          }), fr && (0, xr.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Ur(fr)
          })]
        })
      })
    }

    function Ff(rr) {
      let {
        state: Sr,
        daysLeft: Qr,
        wearer: Wr,
        mode: ar,
        giftName: Ir,
        busy: fr,
        highlight: Er,
        purchaseError: pr,
        onBack: mr,
        onChooseRecipient: Nr,
        onAct: tr,
        onLogin: hr
      } = rr;
      const {
        t: zr
      } = (0, jr.E)(), {
        userContext: Yr
      } = (0, Ur.c)(), nr = Date.now(), er = "gift" !== ar, Kr = er && "subscribed" === Sr, yr = er ? (0, kr.p)(Yr.superRankInfo, nr) : null, Br = er && !Kr && "pending" !== Sr && (0, wr.subscriptionsSold)(), [Tr, vr] = (0, Zr.useState)(!0);
      return (0, xr.jsx)(Wf, {
        tierId: Gr.g.id,
        wearer: Wr,
        onBack: mr,
        recipient: !er && (0, xr.jsx)(Af, {
          giftName: Ir,
          onChooseRecipient: Nr
        }),
        cta: (0, xr.jsxs)(xr.Fragment, {
          children: [null !== yr && (0, xr.jsx)(ir, {
            className: "StoreTileNote StoreDetailNote",
            until: yr
          }), "recharge" === Sr && Qr > 0 && (0, xr.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: nf(zr, Qr)
          }), Br && (0, xr.jsx)(hf, {
            onOfferedChange: vr
          }), er && (0, xr.jsx)(IS, {
            showing: !0
          }), !Kr && (0, qI.c)(Gr.g.id, nr) && (0, xr.jsx)(XI, {
            state: Sr,
            item: "superRank",
            price: (0, kr.t)(nr).price,
            busy: fr,
            highlight: Er,
            secondary: Br && Tr,
            onAct: tr,
            onNeedRecipient: Nr,
            onLogin: hr
          })]
        }),
        afterCta: pr && (0, xr.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: zr(pr)
        })
      })
    }

    function of() {}

    function bf() {
      return "true" !== new URLSearchParams(window.location.search).get("tempSubscription") ? null : (0, xr.jsx)("div", {
        className: "StoreTempSubscribe",
        children: (0, xr.jsx)(hf, {
          onOfferedChange: of
        })
      })
    }
    var Jf = Qr(3603);

    function Df(rr) {
      let {
        state: Sr,
        view: Qr,
        claiming: Wr,
        onOpen: Ir
      } = rr;
      const {
        t: pr
      } = (0, jr.E)(), mr = (0, Zr.useRef)(null), Nr = "ready" === Qr.kind;
      return (0, Of.b)(mr, Nr), (0, xr.jsxs)("div", {
        ref: mr,
        className: ar()("DailyDropTile", {
          DailyDropTileReady: Nr
        }),
        children: [Nr && (0, xr.jsx)(fr.d, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, xr.jsx)("div", {
          className: "DailyDropTileTitle",
          children: pr("dailyDrop:name")
        }), (0, xr.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, xr.jsx)(Jf.c, {
            className: "DailyDropTileBlock"
          }), (0, xr.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, xr.jsx)("span", {
              children: pr("dailyDrop:basicItems")
            }), " ", (0, xr.jsx)("span", {
              children: pr("dailyDrop:collected", {
                count: Sr.collected.length,
                total: Sr.total
              })
            })]
          })]
        }), "ready" === Qr.kind && (0, xr.jsx)(Er.p, {
          className: "DailyDropTileOpen",
          onClick: Ir,
          loading: Wr,
          children: pr("dailyDrop:open")
        }), "waiting" === Qr.kind && (0, xr.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: pr("dailyDrop:nextIn", {
            count: Qr.hours
          })
        })]
      })
    }
    var df = Qr(3139);
    const sf = Math.PI / 180;

    function uf(rr) {
      return rr / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function rE(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const Zr = (rr / (2 * Math.PI / Qr) % Qr + Qr) % Qr;
      let Wr = null,
        ar = 1 / 0;
      for (let jr = 0; jr < Qr; jr++) {
        if (!Sr[jr]) continue;
        const rr = Math.abs(jr - Zr),
          Ir = Math.min(rr, Qr - rr);
        Ir < ar && (Wr = jr, ar = Ir)
      }
      return Wr
    }

    function SE(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const Zr = rE(rr, Sr, Qr);
      if (null === Zr) return rr;
      const Wr = uf(Zr, Qr) - rr;
      return rr + Wr - 2 * Math.PI * Math.round(Wr / (2 * Math.PI))
    }
    const QE = 32;

    function ZE(rr) {
      if (0 === rr.width || 0 === rr.height) return !0;
      const Sr = document.createElement("canvas");
      Sr.width = QE, Sr.height = QE;
      const Qr = Sr.getContext("2d", {
        willReadFrequently: !0
      });
      if (!Qr) return !0;
      Qr.drawImage(rr, 0, 0, QE, QE);
      const {
        data: Zr
      } = Qr.getImageData(0, 0, QE, QE);
      for (let Wr = 3; Wr < Zr.length; Wr += 4)
        if (Zr[Wr] > 0) return !1;
      return !0
    }

    function WE(rr) {
      rr.width = 0, rr.height = 0
    }

    function aE() {
      return "hidden" === document.visibilityState
    }
    async function jE(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 1e3;
      for (;;) {
        await (aE() ? new Promise((rr => {
          const Sr = () => {
            aE() || (document.removeEventListener("visibilitychange", Sr), rr())
          };
          document.addEventListener("visibilitychange", Sr)
        })) : Promise.resolve());
        const Qr = Math.min(Sr(), 1e3);
        if (Qr <= 0) return null;
        const Zr = await rr.captureFrame(Qr);
        if (null !== Zr || !aE()) return null !== Zr && ZE(Zr) ? (WE(Zr), null) : Zr
      }
    }
    async function IE(rr, Sr) {
      const Qr = performance.now();
      let Zr = 0,
        Wr = aE() ? Qr : null;
      const ar = () => {
          aE() ? Wr ??= performance.now() : null !== Wr && (Zr += performance.now() - Wr, Wr = null)
        },
        jr = () => {
          const rr = performance.now();
          return 3e3 - (rr - Qr - Zr - (null === Wr ? 0 : rr - Wr))
        };
      document.addEventListener("visibilitychange", ar);
      try {
        let Qr = await jE(rr);
        for (; null === Qr && Sr() && jr() > 0;) Qr = await jE(rr, jr);
        return Qr
      } finally {
        document.removeEventListener("visibilitychange", ar)
      }
    }

    function fE(rr) {
      let {
        cosmetics: Sr
      } = rr;
      return (0, xr.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, xr.jsx)(pI.b, {
          cosmetics: Sr
        })
      })
    }

    function EE(rr) {
      let {
        worn: Sr,
        fW: Qr,
        EW: Wr,
        prompting: fr,
        className: Er
      } = rr;
      const {
        t: pr
      } = (0, jr.E)(), mr = (0, Zr.useRef)(null), [Nr, Ur] = (0, Zr.useState)(null), [tr, hr] = (0, Zr.useState)(!1), [zr, Yr] = (0, Zr.useState)(!1), nr = (0, Zr.useRef)([]), er = (0, Zr.useRef)(null), Kr = (0, Zr.useRef)(0), Br = (0, Zr.useRef)(null), Tr = (0, Zr.useRef)(!0), vr = (0, Zr.useCallback)((() => {
        const rr = er.current,
          Sr = nr.current,
          Qr = rE(Kr.current, Sr),
          Zr = null === Qr ? null : Sr[Qr],
          Wr = null === rr || void 0 === rr ? void 0 : rr.getContext("2d");
        rr && Zr && Wr && (rr.width === Zr.width && rr.height === Zr.height || (rr.width = Zr.width, rr.height = Zr.height), Wr.clearRect(0, 0, rr.width, rr.height), Wr.drawImage(Zr, 0, 0))
      }), []);
      async function Or(rr, Sr) {
        const Qr = performance.now(),
          Zr = () => mr.current === rr;
        let Wr = 0;
        for (const ar of function() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const Sr = [],
              Qr = new Set;
            for (let Zr = rr / 2; Zr >= 1 && Number.isInteger(Zr); Zr /= 2)
              for (let Wr = 0; Wr < rr; Wr += Zr) Qr.has(Wr) || (Qr.add(Wr), Sr.push(Wr));
            for (let Zr = 0; Zr < rr; Zr++) Qr.has(Zr) || Sr.push(Zr);
            return Sr
          }()) {
          if (!Zr()) break;
          rr.turnCamera(uf(ar));
          const Qr = 0 === ar ? await IE(Sr, Zr) : await jE(Sr);
          if (!Zr()) {
            null !== Qr && WE(Qr);
            break
          }
          if (null !== Qr) nr.current[ar] = Qr, Wr++, 0 === ar && Ur("stills");
          else if (0 === ar) break
        }
        Wr > 0 && console.info(`Lucky Skin Block's Before: ${Wr} stills in ${Math.round(performance.now()-Qr)} ms`)
      }

      function Lr(rr) {
        var Sr, Qr;
        (null === (Sr = Br.current) || void 0 === Sr ? void 0 : Sr.pointerId) === rr.pointerId && (Br.current = null, Tr.current || (Kr.current = SE(Kr.current, nr.current), vr(), null === (Qr = mr.current) || void 0 === Qr || Qr.turnCamera(Kr.current)))
      }(0, Zr.useEffect)((() => {
        "stills" === Nr && vr()
      }), [Nr, vr]), (0, Zr.useEffect)((() => () => {
        for (const rr of nr.current) rr && WE(rr);
        nr.current = []
      }), []);
      const lr = fr && !zr,
        Xr = lr ? {
          onPointerDown: rr => {
            null === Br.current && (rr.currentTarget.setPointerCapture(rr.pointerId), Br.current = {
              pointerId: rr.pointerId,
              startX: rr.clientX,
              startTurn: Kr.current
            })
          },
          onPointerMove: rr => {
            const Sr = Br.current;
            var Qr;
            null !== Sr && Sr.pointerId === rr.pointerId && (Kr.current = Sr.startTurn - (rr.clientX - Sr.startX) * sf, vr(), Tr.current || null === (Qr = mr.current) || void 0 === Qr || Qr.turnCamera(Kr.current))
          },
          onPointerUp: Lr,
          onPointerCancel: Lr
        } : {};
      return (0, xr.jsxs)("div", {
        className: ar()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: lr
        }, Er),
        children: [(0, xr.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, xr.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...Xr,
            children: ["stills" === Nr && (0, xr.jsx)("canvas", {
              ref: er,
              className: "DailyDropRevealBeforeStill"
            }), "head" === Nr && (0, xr.jsx)(fE, {
              cosmetics: Sr
            }), null === Nr && (0, xr.jsx)(yr.c, {})]
          }), (0, xr.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: pr("dailyDrop:before")
          })]
        }), (0, xr.jsx)(Ir.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, xr.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, xr.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, xr.jsx)("div", {
              className: ar()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: tr
              }),
              children: (0, xr.jsx)(Zr.Suspense, {
                fallback: null,
                children: (0, xr.jsx)(YI.b, {
                  onNoWebGl: () => {
                    Ur("head"), Yr(!0)
                  },
                  ref: mr,
                  onReady: () => {
                    var rr, Qr;
                    null === (rr = mr.current) || void 0 === rr || rr.resetCamera(), null === (Qr = mr.current) || void 0 === Qr || Qr.setAllCosmetics(Sr)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        const rr = mr.current;
                        if (!rr) return;
                        const Sr = rr.getDevTools();
                        try {
                          Sr && await Or(rr, Sr)
                        } catch (ar) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", ar)
                        } finally {
                          Tr.current = !1
                        }
                        if (mr.current !== rr) return;
                        nr.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), (0, EQ.t)("daily_drop.before_head", "no_front_still"), Ur("head")), null === Br.current && (Kr.current = SE(Kr.current, nr.current)), rr.turnCamera(Kr.current), vr(), rr.updateCosmetic(Qr, Wr);
                        const Zr = new Promise((rr => {
                          setTimeout(rr, 1e4)
                        }));
                        await Promise.race([rr.ensureReadyForCapture(Qr), Zr]).catch((rr => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", rr)
                        })), mr.current === rr && hr(!0)
                      }()
                    }))
                  }
                })
              })
            }), zr && (dW.X.includes(Qr) ? (0, xr.jsx)(fE, {
              cosmetics: {
                ...Sr,
                [Qr]: Wr
              }
            }) : (0, xr.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,df.k)(Qr,Wr).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !tr && !zr && (0, xr.jsx)(yr.c, {}), (0, xr.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...Xr
            })]
          }), (0, xr.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: pr("dailyDrop:after")
          })]
        })]
      })
    }
    const pE = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      xE = {
        opening: 900,
        shrinking: 700
      };

    function mE(rr) {
      let {
        drop: Sr,
        onClose: Qr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)(), {
        userContext: fr
      } = (0, Ur.c)(), {
        state: pr,
        view: mr
      } = (0, EQ.z)(), [Nr, tr] = (0, Zr.useState)("closed"), [hr] = (0, Zr.useState)((() => ({
        ...fr.getPlayerCosmetics()
      }))), [zr] = (0, Zr.useState)((() => (0, EQ.h)(Sr, hr))), [Yr, nr] = (0, Zr.useState)(!1), [er, Kr] = (0, Zr.useState)(!1), [yr] = (0, Zr.useState)((() => null === pr ? Promise.resolve(null) : UQ(pr))), [Br, vr] = (0, Zr.useState)(null), Or = (0, jQ.b)(), {
        gameState: Lr
      } = (0, Tr.n)(["gameState"]);
      async function lr() {
        const rr = await yr;
        Or.current && (null === rr ? (Qr(), async function(rr) {
          let Sr = null;
          try {
            const Qr = await NQ();
            null === rr || rr.remindersOn || null !== mQ.j.getItem(Qr) || (Sr = Qr)
          } catch (Zr) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", Zr)
          }
          if (null === Sr) return void await (0, pQ.o)("dailyDrop");
          const Qr = Sr;
          await (0, pQ.o)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              mQ.j.setItem(Qr, !0), hQ(null)
            }
          })
        }(pr)) : ((0, pQ.g)(), vr(rr), tr("remind")))
      }

      function Xr(rr) {
        null !== Br && function(rr, Sr) {
          mQ.j.setItem(rr.askedKey, !0), (0, aQ.l)(), (0, EQ.t)("daily_drop.remind", Sr ? "yes" : "no"), Sr && hQ(rr.requester)
        }(Br, rr), Qr()
      }(0, Zr.useEffect)((() => {
        (0, EQ.t)("daily_drop.reveal_step", Nr)
      }), [Nr]), (0, Zr.useEffect)((() => {
        const rr = xE[Nr];
        if (void 0 === rr) return;
        const Sr = setTimeout((() => {
          tr(pE[Nr])
        }), rr);
        return () => {
          clearTimeout(Sr)
        }
      }), [Nr]);
      const Pr = Wr(`dailyDrop:kind_${zr.fW}`),
        Hr = pr && Wr("dailyDrop:collected", {
          count: pr.collected.length,
          total: pr.total
        }),
        qr = "revealed" === Nr || "shrinking" === Nr,
        Rr = "equip" !== Nr && "remind" !== Nr;
      return (0, xr.jsx)(nW.b, {
        className: "DailyDropRevealScreen",
        close: "remind" === Nr ? () => {
          Xr(!1)
        } : Qr,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, xr.jsxs)("div", {
          className: ar()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === Nr,
            DailyDropRevealShrinking: "shrinking" === Nr,
            DailyDropRevealFiguresShown: "shrinking" === Nr || "equip" === Nr || "remind" === Nr
          }),
          children: [(0, xr.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, xr.jsx)(EE, {
              className: "DailyDropRevealStageFigures",
              worn: hr,
              fW: zr.fW,
              EW: zr.EW,
              prompting: !Rr
            }), ("closed" === Nr || "opening" === Nr) && (0, xr.jsx)(Jf.c, {
              className: "DailyDropRevealBlock",
              open: "opening" === Nr
            }), qr && (0, xr.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, xr.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,df.k)(zr.fW,zr.EW).previewTex}.png`,
                alt: Pr,
                draggable: !1
              })
            })]
          }), Rr && (0, xr.jsxs)(xr.Fragment, {
            children: [(0, xr.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, xr.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: qr ? Pr : Wr("dailyDrop:name")
              }), "closed" === Nr && (0, xr.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Wr("dailyDrop:tapToOpen")
              }), "revealed" === Nr && (0, xr.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Wr("dailyDrop:tapToContinue")
              })]
            }), (0, xr.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Wr("closed" === Nr ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                tr(pE[Nr])
              }
            })]
          }), "equip" === Nr && (0, xr.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, xr.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Pr
            }), (0, xr.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Wr("dailyDrop:equipQuestion")
            }), (0, xr.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, xr.jsx)(Er.h, {
                className: "DailyDropRevealButton",
                disabled: Yr,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, EQ.t)("daily_drop.not_now", Sr), lr()
                },
                children: Wr("dailyDrop:notNow")
              }), (0, xr.jsx)(Er.h, {
                className: "DailyDropRevealButton",
                loading: Yr,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, EQ.t)("daily_drop.equip", Sr), nr(!0), Kr(!1);
                    try {
                      await (0, EQ.g)(fr, zr.fW, zr.EW)
                    } catch (rr) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", rr), nr(!1), void Kr(!0)
                    }
                    await lr()
                  }()
                },
                children: Wr("dailyDrop:equip")
              })]
            }), er && (0, xr.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Wr("dailyDrop:equipFailed")
            }), !(0, Tr.g)(Lr) && (0, xr.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: Yr,
              onClick: () => {
                var rr;
                (0, EQ.t)("daily_drop.customise", Sr), rr = zr.fW, lQ.i.Jp(mW, rr), Tr.c.set({
                  openEverythingMenuName: PS.q.CUSTOMISATION
                }), Qr()
              },
              children: [Wr("dailyDrop:customise"), " ", (0, xr.jsx)(Ir.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Hr && (0, xr.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Hr, "waiting" === (null === mr || void 0 === mr ? void 0 : mr.kind) && ` \xb7 ${Wr("dailyDrop:nextInInline",{count:mr.hours})}`]
            })]
          }), "remind" === Nr && (0, xr.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, xr.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Wr("dailyDrop:remindTitle")
            }), (0, xr.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Wr("dailyDrop:remindSubtitle")
            }), (0, xr.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, xr.jsx)(Er.h, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  Xr(!1)
                },
                children: Wr("dailyDrop:remindNo")
              }), (0, xr.jsx)(Er.p, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  Xr(!0)
                },
                children: Wr("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function NE(rr, Sr) {
      const {
        t: Qr
      } = (0, jr.E)(), Wr = function(rr, Sr) {
        const {
          state: Qr,
          view: Wr
        } = (0, EQ.z)(), [ar, jr] = (0, Zr.useState)(!1), [Ir, fr] = (0, Zr.useState)(!1), [Er, pr] = (0, Zr.useState)(null), xr = (0, Zr.useRef)(null), mr = (0, Zr.useRef)(!1), Nr = Sr && "ready" === (null === Wr || void 0 === Wr ? void 0 : Wr.kind);
        (0, Zr.useEffect)((() => {
          rr ? Nr && !mr.current && (mr.current = !0, (0, EQ.t)("daily_drop.shown", "tile")) : mr.current = !1
        }), [rr, Nr]), (0, Zr.useEffect)((() => {
          rr || (zr(), fr(!1))
        }), [rr]);
        const Ur = rr && null === Er && !(0, EQ.p)(Wr);
        (0, Zr.useEffect)((() => {
          Ur && Tr.c.set({
            openEverythingMenuName: PS.q.CUSTOMISATION
          })
        }), [Ur]);
        const tr = (0, Zr.useRef)(!1),
          hr = (0, Zr.useRef)(rr);

        function zr() {
          null !== xr.current && (xr.current = null, pr(null))
        }
        return hr.current = rr, {
          state: Qr,
          view: Wr,
          claiming: ar,
          claimFailed: Ir,
          reveal: Er,
          open: async function() {
            if (!tr.current) {
              tr.current = !0, jr(!0), fr(!1);
              try {
                const {
                  state: rr,
                  drop: Sr
                } = await (0, EQ.d)();
                if (null === rr || null === Sr) return;
                if (!hr.current) return;
                (0, EQ.t)("daily_drop.open", Sr), xr.current = {
                  state: rr,
                  drop: Sr
                }, pr(xr.current)
              } catch (rr) {
                console.error("Failed to claim the Lucky Skin Block", rr), hr.current && fr(!0)
              } finally {
                tr.current = !1, jr(!1)
              }
            }
          },
          closeReveal: zr
        }
      }(rr, Sr);
      return {
        shown: (0, EQ.p)(Wr.view) || null !== Wr.reveal,
        tile: Wr.state && Wr.view && (0, xr.jsx)(Df, {
          state: Wr.state,
          view: Wr.view,
          claiming: Wr.claiming,
          onOpen: Wr.open
        }),
        claimFailed: Wr.claimFailed && (0, xr.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Qr("dailyDrop:claimFailed")
        }),
        reveal: Wr.reveal && (0, xr.jsx)(mE, {
          drop: Wr.reveal.drop,
          onClose: Wr.closeReveal
        })
      }
    }

    function UE(rr) {
      let {
        show: Sr
      } = rr;
      const Qr = NE(Sr, Sr);
      return (0, fS.I)(Sr && Qr.shown, (0, fS.K)(), (rr => {
        (0, EQ.t)("daily_drop.store_only_open", rr)
      })), Sr && Qr.shown ? (0, xr.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [Qr.claimFailed, Qr.tile && (0, xr.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: Qr.tile
        }), Qr.reveal]
      }) : null
    }
    var tE = Qr(3612),
      hE = Qr(35523),
      zE = Qr(35532);

    function YE(rr) {
      let {
        view: Sr,
        highlight: Qr,
        scrollSignal: Wr,
        onScrolledIntoView: ar
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)(), {
        purchaseUnderWay: fr,
        notice: Er,
        needsLogin: pr,
        buyPack: mr
      } = (0, zE.e)("banner");
      (0, tE.S)(Sr.arm, "banner");
      const Nr = (0, Zr.useRef)(null);
      return (0, Zr.useEffect)((() => {
        var rr;
        Wr > 0 && (null === (rr = Nr.current) || void 0 === rr || rr.scrollIntoView({
          block: "nearest"
        }), ar())
      }), [Wr]), (0, xr.jsxs)("div", {
        ref: Nr,
        className: "NewPlayerDealBanner",
        children: [(0, xr.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, xr.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: Ir("newPlayerDeal:title")
          }), (0, xr.jsx)(hE.d, {
            endsAt: Sr.endsAt
          })]
        }), (0, xr.jsx)(hE.g, {
          view: Sr,
          needsLogin: pr,
          busy: fr,
          highlight: Qr,
          onBuy: rr => {
            mr(Sr, rr)
          }
        }), (0, xr.jsx)(af.h, {
          notice: Er,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    Qr(35525);
    var nE = Qr(3617);

    function eE(rr) {
      let {
        wallet: Sr,
        close: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return (0, xr.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, xr.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, xr.jsx)("span", {
            children: Zr("newPlayerDeal:giftable")
          }), (0, xr.jsx)(zI.c, {
            amount: (0, Fj.c)(Sr)
          }), (0, xr.jsx)("span", {
            children: Zr("newPlayerDeal:ungiftable")
          }), (0, xr.jsx)(zI.c, {
            amount: Sr.ungiftable
          })]
        }), (0, xr.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: Zr("newPlayerDeal:ungiftableWhy")
        }), (0, xr.jsx)(Er.p, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: Qr,
          children: Zr("general:ok")
        })]
      })
    }

    function KE(rr) {
      WS.NotificationProvider.showCustomPopup({
        body: Sr => (0, xr.jsx)(eE, {
          wallet: rr,
          close: Sr
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const yE = {
      kind: "board"
    };
    let BE = !1;

    function TE(rr) {
      return "found" === rr.status || "error" === rr.status && "store:giftRecipientLookupFailed" === rr.error ? rr.name : null
    }(0, fS.y)(sr.prefetchBillingOfferings);
    const vE = (0, Zr.memo)((function(rr) {
      var Sr;
      let {
        show: Wr
      } = rr;
      const {
        t: Ir
      } = (0, jr.E)(), {
        userContext: fr
      } = (0, Ur.c)(), Er = (0, wr.usePurchasesAllowed)(), pr = fr !== lr.NULL_USER_CONTEXT, mr = QI(fr, Wr), [Nr, tr] = (0, hr.e)(), {
        page: zr,
        urlMode: Yr,
        goTo: nr
      } = (0, ZI.g)(), er = function(rr) {
        return "superRank" === rr.kind ? "superRank" : "pack" === rr.kind ? rr.pack : null
      }(zr), {
        openEverythingMenuName: Kr,
        gameState: yr
      } = (0, Tr.n)(["openEverythingMenuName", "gameState"]), Br = null !== Kr, vr = "landingPage" === yr;
      ! function(rr, Sr) {
        const [Wr] = (0, Zr.useState)(jI.m), [ar, jr] = (0, Zr.useState)(!1);
        Wr && Sr && !ar && jr(!0);
        const Ir = (0, wZ.z)(),
          fr = Wr && ar && rr && !Ir;
        (0, Zr.useEffect)((() => {
          if (!fr) return;
          let rr = null,
            Sr = null,
            Zr = null;
          const Wr = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, ur.getBillingClient)().purchaseUnderWay,
            ar = () => {
              var Qr;
              null === (Qr = Zr) || void 0 === Qr || Qr(), Zr = null, null !== rr && (clearTimeout(rr), rr = null), null !== Sr && (clearTimeout(Sr), Sr = null)
            },
            jr = () => {
              (0, WI.r)(!1), (0, WI.n)(!1), ar(), rr = setTimeout((() => {
                rr = null, Zr = (0, aI.c)((() => {
                  Zr = null, Wr() ? jr() : ((0, WI.r)(!0), Sr = setTimeout((() => {
                    Sr = null, Zr = (0, aI.c)((() => {
                      Zr = null, Wr() ? jr() : (0, WI.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Qr(5420))).then((rr => {
                    rr.startBackgroundGameSetup()
                  }), (rr => {
                    console.warn("Background game setup: its chunk failed to load", rr)
                  })))
                }))
              }), 2e3)
            };
          for (const Qr of II) window.addEventListener(Qr, jr, {
            capture: !0,
            passive: !0
          });
          return jr(), () => {
            for (const rr of II) window.removeEventListener(rr, jr, {
              capture: !0
            });
            ar(), (0, WI.r)(!1), (0, WI.n)(!1)
          }
        }), [fr])
      }(Wr && Br && vr, "pack" === zr.kind), (0, Zr.useEffect)((() => {
        Br && (0, sr.prefetchBillingOfferings)()
      }), [Br]), (0, Zr.useEffect)((() => {
        Br && !Wr && vr && (0, fI.t)()
      }), [Br, Wr, vr]);
      const [Or, Lr] = (0, Zr.useState)(0), [Xr, Pr] = (0, Zr.useState)(null), [Hr, qr] = (0, Zr.useState)(null), [Rr, gr] = (0, Zr.useState)(null), [Cr, Mr] = (0, Zr.useState)(null), [Gr, Vr] = (0, Zr.useState)(0), ir = (0, Zr.useRef)(null), cr = (0, Zr.useRef)(null), Fr = (0, Zr.useRef)(null), or = (0, Zr.useRef)(!1), br = (0, fS.K)(), Jr = (0, Zr.useRef)(0);

      function Dr() {
        Lr((rr => rr + 1))
      }(0, Zr.useEffect)((() => {
        if (Wr) {
          if (BE = !0, (0, fS.k)(), br && br.seq !== Jr.current) {
            var rr;
            Jr.current = br.seq, "loginResume" !== br.source && (0, fS.F)();
            const Sr = (0, fS.c)(br);
            Yr || nr(Sr), Mr(null !== (rr = br.highlight) && void 0 !== rr ? rr : null);
            const Qr = "newPlayerDeal" === br.source || "loginResume" === br.source && void 0 !== br.highlight && (0, tE.f)(fr).includes(br.highlight);
            Vr((rr => Qr ? rr + 1 : 0)), qr(null), "gift" === br.mode && br.giftRecipientName ? mr.choose(br.giftRecipientName, "prefilled") : mr.clear(), "gift" !== br.mode || br.giftRecipientName || Dr()
          }
        } else Vr(0)
      }), [Wr, br]), (0, fS.I)(Wr, br, (rr => {
        (0, hS.reportAnalyticsClick)({
          id: "store.open",
          value: rr
        })
      }));
      const dr = (0, tE.R)(),
        rS = null !== Cr && null === dr && null === (0, tE.h)((0, tE.b)(fr)) && (0, tE.f)(fr).includes(Cr);
      (0, Zr.useEffect)((() => {
        if (!Cr) return;
        const rr = setTimeout((() => {
          Mr(null)
        }), rS ? 15e3 : 4e3);
        return () => {
          clearTimeout(rr)
        }
      }), [Cr, rS]), (0, Zr.useLayoutEffect)((() => {
        const rr = ir.current;
        if (!Wr || !rr) return cr.current = null, void(Fr.current = null);
        var Sr;
        if (er) cr.current = er, null === (Sr = rr.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Sr || Sr.focus();
        else if (cr.current) {
          const Sr = Fr.current;
          null !== Sr && (rr.scrollTop = Sr);
          const Qr = rr.querySelector(`[data-store-item="${cr.current}"]`);
          if (Qr) {
            const Zr = Qr.getBoundingClientRect(),
              Wr = rr.getBoundingClientRect();
            Qr.focus({
              preventScroll: null !== Sr && Zr.bottom > Wr.top && Zr.top < Wr.bottom
            })
          }
          cr.current = null
        }
      }), [er, Wr]), (0, Zr.useEffect)((() => {
        qr(null)
      }), [mr.query]), (0, Zr.useEffect)((() => {
        if (!Rr) return;
        const rr = setTimeout((() => {
          gr(null)
        }), 8e3);
        return () => {
          clearTimeout(rr)
        }
      }), [Rr]);
      const SS = fr.superRankInfo,
        QS = fr.isLoggedIn() || (0, wr.guestsMayBuy)(),
        ZS = fr.getOwnedCosmeticPacks(),
        WS = (0, sj.n)(mr.query),
        aS = (0, sj.g)({
          mode: WS,
          loggedIn: pr ? QS : null,
          superRankInfo: SS,
          soldTierId: (0, kr.t)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: ZS,
          packs: Vj.s,
          recipient: mr.recipient
        });
      (0, Zr.useEffect)((() => {
        if (!QS || !Wr) return;
        const rr = (0, tE.f)(fr),
          Sr = (0, fS.F)((Sr => !rr.includes(Sr.item))),
          Qr = Sr && (0, sj.l)(Sr, Vj.s);
        Sr && Qr && ((0, hS.reportAnalyticsClick)({
          id: "store.login_resume",
          value: Sr.item
        }), (0, fS.o)(Qr))
      }), [QS, Wr]);
      const jS = Wr && "gift" === WS,
        IS = (0, Zr.useRef)(jS);
      IS.current = jS;
      const ES = "none" !== mr.recipient.status,
        pS = (0, Zr.useRef)(!1);
      (0, Zr.useEffect)((() => {
        jS ? ES && !pS.current && (pS.current = !0, async function(rr) {
          var Sr;
          if ("gift" === (null === (Sr = (0, nE.g)()) || void 0 === Sr ? void 0 : Sr.show)) return void KE(nE.c);
          const Qr = await (0, Fj.f)();
          null !== Qr && Qr.ungiftable > 0 && rr() && KE(Qr)
        }((() => IS.current))) : pS.current = !1
      }), [jS, ES]);
      const xS = (0, sj.p)({
        superRankDaysLeft: aS.superRankDaysLeft,
        openedThisSession: BE || Wr,
        seenNewItems: (0, fS.h)()
      });
      (0, Zr.useEffect)((() => {
        (0, fS.C)(xS)
      }), [xS]);
      const mS = "self" === WS,
        NS = NE(Wr, Wr && mS && "board" === zr.kind);
      if (!Wr || !Er) return null;
      const US = tr > Nr && Nr <= 700,
        tS = !US && tr <= 420,
        zS = "gift" === WS ? TE(mr.recipient) : null,
        YS = null !== Xr,
        nS = "gift" === WS ? {
          name: zS,
          cosmetics: mr.recipientCosmetics,
          gift: !0
        } : {
          name: pr && fr.getPlayerName() || null,
          cosmetics: fr.getPlayerCosmetics(),
          gift: !1
        };

      function eS(rr) {
        (0, cj.e)(rr, "gift" === WS ? mr.query.trim() : null)
      }

      function KS(rr, Sr) {
        (0, hS.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Sr?"gift":"self"}:${rr}`
        }), Sr && (mr.recordGift(Sr.name, rr), yS(Sr))
      }

      function yS(rr) {
        ! function(rr) {
          try {
            mQ.j.setItem(uj, (0, sj.y)(SI(), rr))
          } catch {}
        }({
          name: rr.name,
          cosmetics: rr.cosmetics
        }), nr(yE), gr((Sr => {
          var Qr;
          return {
            name: rr.name,
            seq: (null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.seq) && void 0 !== Qr ? Qr : 0) + 1
          }
        }))
      }
      async function BS(rr) {
        var Sr, Qr;
        if (or.current) return;
        if (!QS) return void eS(rr);
        qr(null), Mr(null);
        const Zr = "gift" === WS ? {
          name: TE(mr.recipient),
          cosmetics: mr.recipientCosmetics
        } : null;
        if (Zr && !Zr.name) return void Dr();
        const Wr = "superRank" === rr ? (0, kr.t)(Date.now()).id : (0, ij.d)(rr);
        or.current = !0;
        const ar = await (0, Dj.b)(Wr, null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.name) && void 0 !== Sr ? Sr : null);
        if (or.current = !1, !ar) return;
        Pr(rr);
        const jr = await Fj.j.purchase(Wr, null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null, ar);
        Pr(null), jr ? qr(jr) : (KS(rr, Zr), Zr && (0, dj.g)(Wr, ar, Zr.name), Zr || (await (0, oj.flushClientAnalyticsEvents)(), (0, wj.refreshWithoutConfirmation)("superRank" === rr ? "/super-rank-welcome" : `/pack-welcome/${rr}`)))
      }
      const TS = ar()("Store", {
        StoreGift: "gift" === WS,
        StorePortrait: US,
        StoreCompact: tS
      });
      if ("pack" === zr.kind) {
        const rr = zr.pack,
          Sr = aS.packs.find((Sr => Sr.pack === rr));
        return (0, xr.jsx)("div", {
          ref: ir,
          className: "CosmeticShopContainer",
          children: (0, xr.jsx)(Jj.d, {
            pack: rr,
            onBack: () => {
              nr(yE)
            },
            onPurchased: Sr => {
              KS(rr, Sr ? {
                name: Sr,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === WS && zS && Sr && (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsx)(XI, {
                state: Sr.state,
                item: rr,
                price: (vS = rr, "superRank" === vS ? (0, kr.t)(Date.now()).price : (0, ij.e)(vS)),
                busy: YS,
                onAct: () => {
                  BS(rr)
                },
                onNeedRecipient: () => {
                  nr(yE), Dr()
                },
                onLogin: () => {
                  eS(rr)
                },
                highlight: Cr === rr
              }), Hr && (0, xr.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Ir(Hr)
              })]
            }),
            ownedPacks: ZS,
            startAsGift: "gift" === WS,
            initialGiftRecipient: "gift" === WS ? null !== zS && void 0 !== zS ? zS : mr.query.trim() : "",
            highlightCta: Cr === rr
          }, rr)
        })
      }
      var vS;
      return "superRank" === zr.kind && null !== aS.superRank ? (0, xr.jsx)("div", {
        ref: ir,
        className: ar()(TS, "StoreDetailView"),
        children: (0, xr.jsx)(Vf, {
          state: aS.superRank.state,
          daysLeft: aS.superRankDaysLeft,
          wearer: nS,
          mode: WS,
          giftName: zS,
          busy: YS,
          highlight: "superRank" === Cr,
          purchaseError: Hr,
          onBack: () => {
            nr(yE)
          },
          onChooseRecipient: () => {
            nr(yE), Dr()
          },
          onAct: () => {
            BS("superRank")
          },
          onLogin: () => {
            eS("superRank")
          }
        })
      }) : (0, xr.jsxs)("div", {
        ref: ir,
        className: TS,
        onScroll: rr => {
          Fr.current = rr.currentTarget.scrollTop
        },
        children: [(0, xr.jsx)("div", {
          className: "StoreTopRow",
          children: (0, xr.jsx)(tI, {
            selfName: pr ? fr.getPlayerName() : "",
            giftRecipient: mr,
            suggestionsVersion: null !== (Sr = null === Rr || void 0 === Rr ? void 0 : Rr.seq) && void 0 !== Sr ? Sr : 0,
            pulseSignal: Or,
            disabled: YS || !pr
          })
        }), Rr && (0, xr.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            gr(null)
          },
          children: [(0, xr.jsx)(bj.e, {
            showSignal: Rr.seq
          }), sj.c, " ", Ir("store:giftSent", {
            name: Rr.name
          })]
        }, Rr.seq), !Rr && Hr && (0, xr.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Ir(Hr)
        }), mS && NS.claimFailed, (0, xr.jsx)(kf, {
          layout: aS,
          mountAtOnce: null !== cr.current,
          bundleGift: "gift" === WS ? {
            recipientName: zS,
            lookingUp: "pending" === mr.recipient.status,
            busy: YS,
            onNeedRecipient: Dr,
            onSent: rr => {
              (0, hS.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), yS({
                name: rr,
                cosmetics: mr.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, sj.s)(SS),
          busy: YS,
          highlightItem: Cr,
          onOpen: function(rr) {
            (0, hS.reportAnalyticsClick)({
              id: "store.item_open",
              value: rr
            }), nr((0, fS.d)(rr))
          },
          onAct: BS,
          onNeedRecipient: Dr,
          onLogin: eS,
          dailyDropTile: mS && NS.tile,
          rankWearer: nS,
          dealBanner: "self" === WS && null !== dr && (0, xr.jsx)(YE, {
            view: dr,
            highlight: Cr,
            scrollSignal: Gr,
            onScrolledIntoView: () => {
              Vr(0)
            }
          })
        }), "gift" !== WS && !(0, Ar.d)(Date.now()) && (0, xr.jsx)(bf, {}), NS.reveal]
      })
    }));
    var OE = Qr(3747),
      LE = Qr(9959),
      lE = Qr(9765),
      XE = Qr(3851),
      PE = Qr(3646),
      HE = Qr(3700),
      qE = Qr(3711),
      RE = Qr(3713),
      gE = Qr(3801),
      CE = Qr(3783),
      ME = Qr(3296),
      GE = Qr(3366),
      kE = Qr(3322),
      AE = Qr(2179),
      VE = Qr(3717),
      iE = Qr(3368);

    function wE(rr) {
      let {
        show: Sr
      } = rr;
      return Sr ? (0, xr.jsx)(cE, {}) : null
    }

    function cE() {
      const {
        t: rr
      } = (0, jr.E)(), {
        followsLeader: Sr
      } = (0, PE.g)(), {
        loading: Qr,
        friends: Wr,
        requests: fr,
        invites: pr
      } = (0, br.m)(), {
        userContext: mr
      } = (0, Ur.c)(), [Nr, tr] = (0, Zr.useState)(iE.l);
      (0, Zr.useEffect)((() => {
        (0, iE.b)()
      }), []);
      const hr = fr.map((rr => rr.name)),
        {
          state: zr,
          recentRequesters: Yr
        } = (0, CE.q)(),
        nr = new Map([...("loaded" === zr.status ? zr.recentPlayers : []).map((rr => [rr.preview.name, rr])), ...Yr.map((rr => [rr.name, rr]))]),
        er = (0, Zr.useRef)(null),
        [Br, Tr] = (0, Zr.useState)(""),
        [vr, Or] = (0, Zr.useState)("Enter"),
        [Lr, lr] = (0, Zr.useState)(null);

      function Xr() {
        Br && (Or("Loading"), (0, kE.j)(Br, "social_menu").then((rr => {
          if (er.current) switch (rr.kind) {
            case "sent":
              Or("Success");
              break;
            case "becameFriends":
              Or("BecameFriends");
              break;
            case "failed":
              lr(rr.message), Or("Error")
          }
        })))
      }
      return (0, Zr.useEffect)((() => {
        if ("Enter" === vr || "Loading" === vr) return;
        const rr = setTimeout((() => {
          er.current.value = "", Tr(""), Or("Enter")
        }), "Success" === vr ? 1e3 : 4e3);
        return () => {
          clearTimeout(rr)
        }
      }), [vr]), (0, xr.jsx)("div", {
        className: "SocialMenu",
        children: (0, xr.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, xr.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, xr.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, xr.jsx)(RE.c, {
                label: rr("socialBar:addFriend")
              }), (0, xr.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, xr.jsxs)("div", {
                  className: ar()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${vr}`]: !0
                  }),
                  children: ["Loading" === vr && (0, xr.jsx)(yr.c, {}), "Success" === vr && (0, xr.jsx)(Ir.c, {
                    name: "check"
                  }), "BecameFriends" === vr && (0, xr.jsx)(xr.Fragment, {
                    children: rr("socialBar:nowFriends", {
                      playerName: Br
                    })
                  }), "Error" === vr && Lr && (0, xr.jsx)(xr.Fragment, {
                    children: rr(Lr.translationKey, Lr.params)
                  })]
                }), (0, xr.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, xr.jsx)(Kr.b, {
                    className: "PlayerSearchInput",
                    placeholderText: rr("socialBar:enterPlayerName"),
                    domRef: er,
                    onValueChange: rr => {
                      Tr((0, qr.r)(rr)), er.current.value = (0, qr.r)(rr)
                    },
                    onEnter: () => {
                      Br && (0, hS.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Xr()
                    }
                  }), (0, xr.jsxs)(Er.h, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Xr()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, xr.jsx)(Ir.c, {
                      name: "user-plus"
                    }), " ", rr("socialBar:sendRequest")]
                  })]
                })]
              }), (0, xr.jsx)(VE.e, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), pr.length > 0 && (0, xr.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, xr.jsx)(RE.c, {
                label: rr("socialBar:invites"),
                meta: pr.length
              }), pr.map((Sr => (0, xr.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, xr.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, xr.jsx)(ME.e, {
                    invite: Sr
                  })
                }), (0, xr.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, xr.jsx)(ME.i, {
                    invite: Sr
                  })
                }), (0, xr.jsx)(Er.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, GE.f)(Sr)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Sr.destination.kind}`
                  },
                  children: rr("general:join")
                }), (0, xr.jsx)(NS.f, {
                  tooltipInner: (0, xr.jsx)(xr.Fragment, {
                    children: rr("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, xr.jsx)(Er.k, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Nr || void 0 === Nr ? void 0 : Nr.kind) && Nr.inviteId === Sr.id,
                    onClick: () => {
                      br.e.declineInvite(Sr.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Sr.destination.kind}`
                    },
                    children: (0, xr.jsx)(Ir.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, Sr.id)))]
            }), (0, xr.jsxs)("div", {
              className: ar()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Qr && 0 === fr.length
              }),
              children: [(0, xr.jsx)(RE.c, {
                label: (0, xr.jsxs)(xr.Fragment, {
                  children: [(0, xr.jsx)(Ir.c, {
                    name: AE.c
                  }), " ", rr("socialBar:requests")]
                }),
                meta: (0, xr.jsxs)(xr.Fragment, {
                  children: [fr.length, fr.length === US.q && (0, xr.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: rr("socialBar:limitReached")
                  })]
                })
              }), Qr && (0, xr.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, xr.jsx)(yr.c, {})
              }), !Qr && 0 === fr.length && (0, xr.jsx)("div", {
                className: "SocialMenuEmpty",
                children: rr("socialBar:noFriendRequests")
              }), !Qr && fr.length > 0 && (0, xr.jsx)("div", {
                className: "PlayerRows",
                children: (0, xr.jsx)(Ua.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [fr],
                  children: fr.map(((Sr, Qr) => {
                    const Zr = nr.get(Sr.name);
                    return (0, xr.jsxs)(qE.f, {
                      playerSocialPreview: Sr,
                      zIndex: fr.length - Qr,
                      padDefaultFocus: (0, iE.j)(Nr, Sr.name, Qr),
                      status: Zr && (0, xr.jsx)(gE.b, {
                        gameNameWithVariation: Zr.gameNameWithVariation,
                        isPrivateLobby: Zr.isPrivateLobby
                      }),
                      children: [(0, xr.jsx)(NS.f, {
                        tooltipInner: (0, xr.jsx)(xr.Fragment, {
                          children: rr("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, xr.jsx)(Er.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tr((0, iE.f)(hr, Qr)), (0, kE.i)(Sr.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, xr.jsx)(Ir.c, {
                            name: "check"
                          })
                        })
                      }), (0, xr.jsx)(NS.f, {
                        tooltipInner: (0, xr.jsx)(xr.Fragment, {
                          children: rr("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, xr.jsx)(Er.k, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tr((0, iE.f)(hr, Qr)), (0, kE.i)(Sr.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, xr.jsx)(Ir.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Sr.name}_${Sr.isError}`)
                  }))
                })
              })]
            }), (0, xr.jsx)(gE.h, {})]
          }), (0, xr.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, xr.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, xr.jsx)(RE.c, {
                label: rr("socialBar:party")
              }), (0, xr.jsx)(HE.b, {})]
            }), (0, xr.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, xr.jsx)(RE.c, {
                label: (0, xr.jsxs)(xr.Fragment, {
                  children: [(0, xr.jsx)(Ir.c, {
                    name: AE.b
                  }), " ", rr("socialBar:friends")]
                }),
                meta: (0, xr.jsxs)(xr.Fragment, {
                  children: [Wr.length, Wr.length >= (0, US.e)(mr.getPlayerRanks()) && (0, xr.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: rr("socialBar:limitReached")
                  })]
                })
              }), Qr && (0, xr.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, xr.jsx)(yr.c, {})
              }), !Qr && 0 === Wr.length && (0, xr.jsx)("div", {
                className: "SocialMenuEmpty",
                children: rr("socialBar:noFriends")
              }), !Qr && Wr.length > 0 && (0, xr.jsx)("div", {
                className: "PlayerRows",
                children: (0, xr.jsx)(Ua.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Wr],
                  children: Wr.map(((rr, Qr) => (0, xr.jsx)(qE.f, {
                    playerSocialPreview: rr,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: rr => {
                      br.e.removeFriendFromState(rr)
                    },
                    zIndex: Wr.length - Qr,
                    children: (0, xr.jsx)(qE.c, {
                      friend: rr,
                      followsLeader: Sr,
                      analyticsSurface: "social_menu"
                    })
                  }, `${rr.name}_${rr.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var FE = Qr(3562),
      oE = Qr(4890),
      bE = Qr(1992),
      JE = Qr(4881),
      DE = Qr(4893);

    function dE(rr) {
      let {
        count: Sr,
        claiming: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return 0 === Sr ? null : (0, xr.jsx)(Er.p, {
        className: "SeasonPassClaimAllButton",
        loading: Qr,
        onClick: () => {
          oE.g.claimAll().catch((rr => {
            console.error("Failed to claim all season pass rewards", rr)
          }))
        },
        children: Zr("seasonPass:claimAll", {
          count: Sr
        })
      })
    }

    function sE(rr) {
      let {
        view: Sr,
        claiming: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)(), {
        userContext: Wr
      } = (0, Ur.c)(), {
        config: ar,
        state: fr,
        tier: Er,
        xpIntoTier: pr,
        xpForNextTier: mr
      } = Sr, Nr = Date.now(), tr = (0, DE.i)(Sr, Nr), hr = Er >= ar.tierCount, zr = tr && !hr && mr > 0, Yr = mr > 0 && !hr ? Math.min(100, pr / mr * 100) : 100, nr = fr.xpToday >= ar.maxXpPerDay, er = null !== Sr.xpBoost && Sr.xpBoost.endsAtMs > Nr && !nr ? Sr.xpBoost : null;
      return (0, xr.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, xr.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, xr.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: Zr("seasonPass:title", {
              season: fr.seasonNumber
            })
          })
        }), (0, xr.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, xr.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, xr.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: Zr("seasonPass:tier"),
              "aria-label": `${Zr("seasonPass:tier")} ${Er}`,
              children: Er
            }), (0, xr.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(Yr),
              children: [(0, xr.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${Yr}%`
                }
              }), (0, xr.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [hr && Zr("seasonPass:passComplete"), zr && Zr("seasonPass:xpProgress", {
                  xp: pr,
                  xpForNextTier: mr
                })]
              })]
            }), zr && (0, xr.jsxs)(xr.Fragment, {
              children: [(0, xr.jsx)(Ir.c, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, xr.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: Er + 1
              })]
            })]
          }), (0, xr.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, xr.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, xr.jsx)(Ir.c, {
                name: "hourglass"
              }), " ", tr ? Zr("seasonPass:endsIn", {
                time: (0, JE.e)((Sr.endsAtMs - Nr) / 6e4)
              }) : (0, CI.c)(Sr.claimEndsAtMs, Zr, Nr)]
            }), tr && !hr && (0, xr.jsx)("span", {
              className: nr ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: nr ? Zr("seasonPass:dailyCapReached") : Zr("seasonPass:dailyXp", {
                xp: fr.xpToday,
                cap: ar.maxXpPerDay
              })
            }), tr && !hr && er && (0, xr.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, xr.jsx)(Ir.c, {
                name: "angles-up"
              }), " ", Zr("seasonPass:xpBoostActive", {
                multiplier: er.multiplier,
                time: (0, JE.e)(Math.ceil((er.endsAtMs - Nr) / 6e4))
              })]
            }), tr && !hr && !nr && !er && (0, xr.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: Zr("seasonPass:playToEarn")
            }), Wr.type === bE.c.ANONYMOUS && (0, xr.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: Zr("seasonPass:logInToKeep")
            })]
          })]
        }), (0, xr.jsx)(dE, {
          count: Sr.claimable.length,
          claiming: Qr
        })]
      })
    }
    var uE = Qr(4278),
      rp = Qr(4280);

    function Sp(rr) {
      return null !== (0, CI.k)(rr) || null !== (0, CI.h)(rr)
    }
    let Qp = null;

    function Zp() {
      var rr;
      null === (rr = Qp) || void 0 === rr || rr.tearDownNotification()
    }

    function Wp(rr) {
      let {
        reward: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)(), {
        userContext: Zr
      } = (0, Ur.c)(), Wr = (0, CI.k)(Sr);
      return (0, xr.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, xr.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, CI.e)(Sr, Qr)
        }), null !== Wr && (0, xr.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, xr.jsx)(uE.c, {
            profileEffect: Wr,
            name: Zr.getPlayerName(),
            cosmetics: Zr.getPlayerCosmetics()
          })
        }), null === Wr && (0, xr.jsx)(ap, {
          reward: Sr
        })]
      })
    }

    function ap(rr) {
      let {
        reward: Sr
      } = rr;
      const {
        userContext: Qr
      } = (0, Ur.c)(), Wr = (0, Zr.useRef)(null), {
        previewEmote: ar,
        playEmote: jr
      } = (0, rp.d)(), Ir = (0, Zr.useMemo)((() => (0, CI.h)(Sr)), [Sr]), fr = Ir.emote;
      return (0, xr.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, xr.jsx)(Zr.Suspense, {
          fallback: (0, xr.jsx)(yr.c, {}),
          children: (0, xr.jsx)(YI.b, {
            ref: Wr,
            framing: "store",
            forcedCosmetics: Ir.cosmetics,
            II: ar.id,
            emotePlaySeq: ar.seq,
            onReady: () => {
              var rr, Sr;
              null === (rr = Wr.current) || void 0 === rr || rr.resetCamera(), null === (Sr = Wr.current) || void 0 === Sr || Sr.setAllCosmetics(Qr.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== fr && jr(fr)
            }
          })
        })
      })
    }

    function jp(rr) {
      let {
        waitingCount: Sr
      } = rr;
      const {
        t: Qr
      } = (0, jr.E)();
      return (0, wr.usePurchasesAllowed)() ? (0, xr.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [Sr > 0 && (0, xr.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === Sr ? Qr("seasonPass:hyperRewardWaiting") : Qr("seasonPass:hyperRewardsWaiting", {
            count: Sr
          })
        }), (0, xr.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, xr.jsxs)(Er.v, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, fS.o)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, xr.jsx)(kr.d, {}), " ", Qr("homePage:getHyperRank")]
          }), Sr > 0 && (0, xr.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: Sr
          })]
        })]
      }) : null
    }
    var Ip = Qr(35535);

    function fp(rr) {
      let {
        stub: Sr,
        name: Qr
      } = rr;
      const {
        t: Zr
      } = (0, jr.E)();
      return (0, xr.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, xr.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: Sr
        }), (0, xr.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, xr.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: Zr("seasonPass:trackTicketPass")
          }), (0, xr.jsx)("span", {
            className: "SeasonPassTicketName",
            children: Qr
          })]
        })]
      })
    }

    function Ep(rr) {
      var Sr, Qr;
      let {
        view: Wr,
        claimingKeys: ar,
        hyperWaitingCount: fr,
        onClaim: Er
      } = rr;
      const {
        t: pr
      } = (0, jr.E)(), mr = (0, Zr.useRef)(null), {
        config: Nr,
        tier: Ur,
        xpIntoTier: tr,
        xpForNextTier: hr,
        state: zr
      } = Wr, Yr = (0, DE.i)(Wr), nr = (0, Zr.useRef)(!1), er = null !== (Sr = null === (Qr = Wr.claimable[0]) || void 0 === Qr ? void 0 : Qr.tier) && void 0 !== Sr ? Sr : Math.min(Ur + 1, Nr.tierCount);
      (0, Zr.useLayoutEffect)((() => {
        if (nr.current) return;
        const rr = mr.current,
          Sr = rr.querySelector(`[data-tier="${er}"]`).getBoundingClientRect(),
          Qr = rr.getBoundingClientRect();
        rr.scrollLeft += Sr.left - Qr.left - .3 * rr.clientWidth, rr.scrollTop += Sr.top - Qr.top - .3 * rr.clientHeight
      }), [er]), (0, Zr.useEffect)((() => {
        const rr = mr.current;

        function Sr(Sr) {
          nr.current = !0, Math.abs(Sr.deltaY) <= Math.abs(Sr.deltaX) || rr.scrollWidth <= rr.clientWidth || (Sr.preventDefault(), rr.scrollLeft += Sr.deltaY)
        }
        return rr.addEventListener("wheel", Sr, {
          passive: !1
        }), () => {
          rr.removeEventListener("wheel", Sr)
        }
      }), []);
      const Kr = hr > 0 ? tr / hr : 1;
      return (0, xr.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, xr.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, xr.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, xr.jsx)(fp, {
              stub: (0, xr.jsx)(kr.d, {}),
              name: pr("seasonPass:hyperTrack")
            }), !zr.hasHyperRank && (0, xr.jsx)(jp, {
              waitingCount: fr
            })]
          }), (0, xr.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, xr.jsx)(fp, {
              stub: (0, xr.jsx)(Ir.c, {
                name: "star"
              }),
              name: pr("seasonPass:freeTrack")
            }), (0, xr.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: pr("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, xr.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: mr,
          onPointerDown: () => {
            nr.current = !0
          },
          children: (0, xr.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: Nr.tiers.map((rr => {
              const Sr = rr.tier,
                Qr = function(rr, Sr, Qr) {
                  if (rr <= Sr) return "reached";
                  return Qr && rr === Sr + 1 ? "earning" : "locked"
                }(Sr, Ur, Yr),
                Zr = "earning" === Qr;
              return (0, xr.jsx)(pp, {
                tierRewards: rr,
                nodeState: Qr,
                progress: Zr ? Kr : 0,
                freeState: Wr.tileState({
                  tier: Sr,
                  track: "free"
                }),
                hyperState: Wr.tileState({
                  tier: Sr,
                  track: "hyper"
                }),
                freeClaiming: ar.has((0, DE.j)({
                  tier: Sr,
                  track: "free"
                })),
                hyperClaiming: ar.has((0, DE.j)({
                  tier: Sr,
                  track: "hyper"
                })),
                hasHyperRank: zr.hasHyperRank,
                onClaim: Er
              }, Sr)
            }))
          })
        })]
      })
    }
    const pp = (0, Zr.memo)((function(rr) {
      let {
        tierRewards: Sr,
        nodeState: Qr,
        progress: Zr,
        freeState: Wr,
        hyperState: jr,
        freeClaiming: Ir,
        hyperClaiming: fr,
        hasHyperRank: Er,
        onClaim: pr
      } = rr;
      const {
        tier: mr
      } = Sr;
      return (0, xr.jsxs)("div", {
        className: ar()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== Qr
        }),
        "data-tier": mr,
        children: [(0, xr.jsx)(xp, {
          tier: mr,
          track: "hyper",
          reward: Sr.hyper,
          tileState: jr,
          claiming: fr,
          padlock: !Er && "claimed" !== jr,
          onClaim: pr
        }), (0, xr.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, xr.jsx)("span", {
            className: ar()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === Qr
            }),
            children: "earning" === Qr && (0, xr.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * Zr + "%"
              }
            })
          }), (0, xr.jsx)("span", {
            className: ar()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === Qr
            })
          }), (0, xr.jsx)(Ip.e, {
            tier: mr,
            state: Qr,
            progress: Zr
          })]
        }), (0, xr.jsx)(xp, {
          tier: mr,
          track: "free",
          reward: Sr.free,
          tileState: Wr,
          claiming: Ir,
          padlock: !1,
          onClaim: pr
        })]
      })
    }));

    function xp(rr) {
      let {
        tier: Sr,
        track: Qr,
        reward: Zr,
        tileState: Wr,
        claiming: ar,
        padlock: jr,
        onClaim: Ir
      } = rr;
      return Zr ? (0, xr.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${Qr}`,
        children: (0, xr.jsx)(iI.g, {
          reward: Zr,
          tileState: Wr,
          track: Qr,
          size: "large",
          onClaim: () => {
            Ir({
              tier: Sr,
              track: Qr
            })
          },
          claiming: ar,
          padlock: jr,
          onPreview: Sp(Zr) ? () => {
            ! function(rr) {
              const Sr = WS.NotificationProvider.showCustomPopup({
                body: (0, xr.jsx)(Wp, {
                  reward: rr
                })
              });
              Qp = Sr, Sr.getResult().finally((() => {
                Qp === Sr && (Qp = null)
              }))
            }(Zr)
          } : void 0
        })
      }) : (0, xr.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${Qr}`
      })
    }

    function mp(rr) {
      let {
        show: Sr
      } = rr;
      return Sr ? (0, xr.jsx)(Np, {}) : null
    }

    function Np() {
      const {
        t: rr
      } = (0, jr.E)(), Sr = (0, oE.k)();
      return (0, Zr.useEffect)((() => Zp), []), (0, xr.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === Sr.status && (0, xr.jsx)(yr.c, {}), "error" === Sr.status && (0, xr.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, xr.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: rr("seasonPass:errorLoad")
          }), (0, xr.jsx)(Er.h, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              oE.g.retry()
            },
            children: rr("seasonPass:retry")
          })]
        }), "noSeason" === Sr.status && (0, xr.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, xr.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, CI.d)(rr)
          })
        }), "loaded" === Sr.status && (0, xr.jsx)(Up, {
          view: Sr.view,
          claimingKeys: Sr.claimingKeys
        })]
      })
    }

    function Up(rr) {
      let {
        view: Sr,
        claimingKeys: Qr
      } = rr;
      const Zr = Sr.config.tiers.filter((rr => "needsHyper" === Sr.tileState({
          tier: rr.tier,
          track: "hyper"
        }))).length,
        Wr = Qr.size > 0;
      return (0, xr.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, xr.jsx)(sE, {
          view: Sr,
          claiming: Wr
        }), (0, xr.jsx)(Ep, {
          view: Sr,
          claimingKeys: Qr,
          hyperWaitingCount: Zr,
          onClaim: tp
        }), (0, xr.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, xr.jsx)(dE, {
            count: Sr.claimable.length,
            claiming: Wr
          }), !Sr.state.hasHyperRank && (0, xr.jsx)(jp, {
            waitingCount: Zr
          })]
        })]
      })
    }

    function tp(rr) {
      oE.g.claim(rr).catch((rr => {
        console.error("Failed to claim season pass reward", rr)
      }))
    }
    var hp = Qr(5517);
    var zp = Qr(4048);
    const Yp = rr => {
        let {
          action: Sr,
          padAction: Qr
        } = rr;
        const {
          isTouchScreen: Zr
        } = (0, Tr.n)(["isTouchScreen"]), Wr = (0, wZ.z)();
        return Zr && !Wr ? null : (0, xr.jsx)(CZ.c, {
          className: "EverythingMenuTabKey",
          noaAction: Sr,
          padHidesKey: !0,
          padMenuShortcut: Qr
        })
      },
      np = (0, Zr.memo)((function() {
        const {
          t: rr
        } = (0, jr.E)(), {
          gameState: Sr,
          openEverythingMenuName: Qr,
          crosshairGameView: Wr,
          everythingMenuOverLoadingScreen: Ir
        } = (0, Tr.n)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: fr
        } = (0, Ur.c)(), pr = (0, fW.l)(Date.now()), mr = (0, wr.usePurchasesAllowed)(), Nr = (0, fS.O)(), {
          view: tr
        } = (0, EQ.z)(), hr = "dot" === Nr || null === Nr && "ready" === (null === tr || void 0 === tr ? void 0 : tr.kind), Yr = (rr, Sr) => (0, xr.jsx)(Yp, {
          action: rr,
          padAction: Sr
        }), [nr, er] = (0, Zr.useState)(null), Kr = (0, Zr.useRef)(null), yr = (0, Zr.useRef)(null);
        (0, Zr.useEffect)((() => {
          var rr;
          const Sr = null === (rr = yr.current) || void 0 === rr ? void 0 : rr.querySelector(".EverythingMenuTabActive");
          null === Sr || void 0 === Sr || Sr.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [Qr]);
        const Br = {
            ..."inGame" === Sr ? {} : (0, Er._)({
              focusOnClick: !1
            }),
            ...hW.c
          },
          vr = rr => {
            const Sr = (0, zW.g)((Sr => {
              (0, Er.Z)(Sr.currentTarget), Tr.c.set({
                openEverythingMenuName: rr
              })
            }), "pointerup");
            return {
              ...Br,
              onPointerDown: rr => {
                Br.onPointerDown(rr), Sr.onPointerDown(rr)
              },
              onPointerUp: rr => {
                Br.onPointerUp(rr), Sr.onPointerUp(rr)
              },
              onClick: Sr.onClick
            }
          },
          Or = null !== Qr;
        (0, Zr.useEffect)((() => {
          Qr === PS.q.CUSTOMISATION ? (0, hS.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, hI.g)()
          }) : null === Qr && Tr.c.get("everythingMenuOverLoadingScreen") && Tr.c.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [Qr]);
        const lr = Qr !== PS.q.COSMETIC_SHOP && !Wr;
        async function Xr() {
          await async function() {
            if (!nr) return;
            await nr(), er(null)
          }(), Tr.c.set({
            openEverythingMenuName: null
          })
        }
        const Pr = (0, Zr.useRef)(null),
          Hr = (0, Zr.useCallback)((() => null !== Pr.current && (0, lE.f)(Pr.current)), []);

        function qr() {
          Hr() || Xr()
        }(0, Zr.useEffect)((() => (0, gj.r)(Hr)), [Hr]);
        const Rr = (0, Zr.useMemo)((() => "inGame" === Sr ? {
            text: rr("settingsMenu:exitGame"),
            onClick: () => {
              (0, LE.c)()
            }
          } : (0, Lr.isDiscordClient)() ? {
            text: rr("settingsMenu:exitGame"),
            onClick: () => {
              XS.j.discordActivity().then((rr => {
                rr.exit("User exited the game")
              }))
            }
          } : null), [Sr, rr]),
          gr = Or && !Wr,
          Cr = "inGame" !== Sr,
          Mr = gr && Cr;
        (0, Zr.useLayoutEffect)((() => {
          if (Mr) return Tr.c.set({
            menuCoversPage: !0
          }), () => {
            Tr.c.set({
              menuCoversPage: !1
            })
          }
        }), [Mr]);
        const Gr = (0, Zr.useRef)(null);
        ! function(rr, Sr) {
          (0, Zr.useEffect)((() => {
            var Qr;
            const Zr = (0, hp.f)();
            if (!Sr || null === Zr || !(0, hp.c)({
                site: Lr.siteUsed,
                isMobileApp: (0, zr.isMobileApp)(),
                isTouchScreen: Tr.c.get("isTouchScreen")
              })) return;
            const Wr = null === (Qr = rr.current) || void 0 === Qr ? void 0 : Qr.querySelector(".EverythingMenuBackButton");
            return Wr ? Zr(Wr) : void 0
          }), [rr, Sr])
        }(Gr, gr && !(0, gj.i)(Qr) && "inGame" === Sr);
        const kr = (0, xr.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: qr,
          children: (0, xr.jsx)(Er.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, xr.jsx)(YW.c, {
          showing: Or,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Qr === PS.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === Sr,
          children: (0, xr.jsx)(eW.e, {
            className: ar()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: Ir
            }),
            show: gr,
            children: (0, xr.jsx)(nW.b, {
              close: qr,
              togglePointerLock: !1,
              children: (0, xr.jsxs)("div", {
                className: "EverythingMenu",
                ref: Gr,
                children: [!(0, gj.i)(Qr) && (0, xr.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, xr.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Rr && (0, xr.jsx)(Er.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Rr.onClick()
                      },
                      children: Rr.text
                    }), Or && mr && (0, xr.jsx)("div", {
                      ...Br,
                      className: "EverythingMenuWallet",
                      title: rr("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, fS.o)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, xr.jsx)(OE.h, {})
                    })]
                  }), (0, xr.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: yr,
                    "data-pad-tabs": "1",
                    children: [(0, xr.jsxs)("div", {
                      ...vr(PS.q.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.SETTINGS ? "true" : void 0,
                      className: ar()("EverythingMenuTab", {
                        EverythingMenuTabActive: Qr === PS.q.SETTINGS
                      }),
                      children: [rr("general:settings"), Yr("OpenSettings", "pause")]
                    }), (0, xr.jsxs)("div", {
                      ...vr(PS.q.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.CUSTOMISATION ? "true" : void 0,
                      className: ar()("EverythingMenuTab", {
                        EverythingMenuTabActive: Qr === PS.q.CUSTOMISATION
                      }),
                      children: [rr("general:player"), Yr("OpenCharacterCustomization")]
                    }), zr.featureFlags.useSocialFeatures && (0, xr.jsxs)("div", {
                      ...vr(PS.q.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.SOCIAL ? "true" : void 0,
                      className: ar()("EverythingMenuTab", {
                        EverythingMenuTabActive: Qr === PS.q.SOCIAL
                      }),
                      ...(0, hS.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Qr === PS.q.SOCIAL),
                      children: [rr("socialBar:social"), (0, xr.jsx)(FE.b, {})]
                    }), pr && (0, xr.jsx)("div", {
                      ...vr(PS.q.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.SEASON_PASS ? "true" : void 0,
                      className: ar()("EverythingMenuTab", {
                        EverythingMenuTabActive: Qr === PS.q.SEASON_PASS
                      }),
                      children: rr("seasonPass:title", {
                        season: pr.seasonNumber
                      })
                    }), (0, EQ.p)(tr) && (0, xr.jsxs)("div", {
                      ...vr(PS.q.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.COSMETIC_SHOP ? "true" : void 0,
                      className: ar()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Qr === PS.q.COSMETIC_SHOP
                      }),
                      children: [(0, xr.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: rr("store:title")
                      }), "new" === Nr && (0, xr.jsx)(vf, {}), hr && (0, xr.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Sr && (0, xr.jsxs)("div", {
                      ...vr(PS.q.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": Qr === PS.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: ar()("EverythingMenuTab", {
                        EverythingMenuTabActive: Qr === PS.q.LOBBY_LEADERBOARD
                      }),
                      children: [rr("general:lobby"), Yr("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, xr.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: kr
                  })]
                }), (0, gj.i)(Qr) && kr, (0, xr.jsxs)("div", {
                  ref: Pr,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": Cr ? "1" : "0.85"
                  },
                  children: [(0, xr.jsx)(jW, {
                    show: Qr === PS.q.SETTINGS,
                    setBeforeResumeCallback: er
                  }), (0, xr.jsx)(NW, {
                    show: Qr === PS.q.CUSTOMISATION
                  }), (0, xr.jsx)(Zr.Suspense, {
                    fallback: null,
                    children: (0, xr.jsx)(Oj, {
                      show: Qr === PS.q.SHOP
                    })
                  }), (0, xr.jsx)(kj, {
                    show: Qr === PS.q.LOBBY_LEADERBOARD
                  }), mr && (0, xr.jsx)(vE, {
                    show: Qr === PS.q.COSMETIC_SHOP
                  }), !mr && (0, xr.jsx)(UE, {
                    show: Qr === PS.q.COSMETIC_SHOP
                  }), (0, xr.jsx)(wE, {
                    show: Qr === PS.q.SOCIAL
                  }), (0, xr.jsx)(mp, {
                    show: Qr === PS.q.SEASON_PASS
                  })]
                }), !(0, zr.isMobileApp)() && (0, zp.l)() && (0, KW.i)(fr.getPlayerRanks()) && (0, xr.jsx)(eW.e, {
                  ref: Kr,
                  className: "EverythingMenuBannerDiv",
                  show: lr,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, xr.jsx)(XE.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Kr
                    },
                    showing: Or && lr,
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
  35455: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(379),
      Wr = Qr(35459);

    function ar(rr, Sr, Qr) {
      const ar = Object.entries(Sr).sort(((rr, Sr) => Sr[1] - rr[1])),
        jr = (0, Zr.kb)(rr);
      jr.push(rr ? "\n\n" : "\n");
      for (const [Wr, Ur] of ar) {
        var Ir, fr, Er;
        const rr = null !== (Ir = null === Qr || void 0 === Qr || null === (fr = Qr[Wr]) || void 0 === fr ? void 0 : fr.icon) && void 0 !== Ir ? Ir : `${Wr} Enchantment`;
        jr.push({
          icon: rr,
          style: {
            fontSize: "1.5rem"
          }
        }), jr.push({
          str: `${Wr} ${null!==(Er=(0,Zr.P)(Ur))&&void 0!==Er?Er:Ur}\n`
        })
      }
      jr.push({
        str: "\n"
      });
      for (const [Zr, Ur] of ar) {
        var pr, xr, mr, Nr;
        const rr = null !== (pr = null === Qr || void 0 === Qr || null === (xr = Qr[Zr]) || void 0 === xr ? void 0 : xr.icon) && void 0 !== pr ? pr : `${Zr} Enchantment`,
          Sr = null !== (mr = null === Qr || void 0 === Qr || null === (Nr = Qr[Zr]) || void 0 === Nr ? void 0 : Nr.description) && void 0 !== mr ? mr : (0, Wr.j)(Zr);
        jr.push({
          icon: rr,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), jr.push({
          str: Sr,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), jr.push({
          str: "\n"
        })
      }
      return jr
    }
  },
  35468: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      g: () => Yr,
      h: () => hr,
      i: () => fr,
      j: () => zr,
      l: () => pr,
      o: () => mr,
      s: () => tr,
      u: () => xr
    });
    var Zr = Qr(360),
      Wr = Qr(688),
      ar = Qr(379),
      jr = Qr(2977),
      Ir = Qr(35455);

    function fr(rr, Sr) {
      var Qr;
      let {
        player: Zr,
        chestOrCreative: Wr
      } = rr;
      var ar;
      return Sr < Zr.length ? null !== (ar = Zr[Sr]) && void 0 !== ar ? ar : null : null !== (Qr = Wr[Sr - Zr.length]) && void 0 !== Qr ? Qr : null
    }

    function Er(rr) {
      var Sr;
      return null !== (Sr = rr.amount) && void 0 !== Sr ? Sr : 0
    }

    function pr(rr) {
      return 0 === rr.button || void 0 === rr.button
    }

    function xr(rr) {
      return !!rr.shiftKey
    }

    function mr(rr) {
      return "touches" in rr || "touch" === rr.pointerType || "pen" === rr.pointerType
    }
    const Nr = new Set,
      Ur = 50;

    function tr(rr, Sr) {
      var Qr;
      const Zr = null === (Qr = rr[Sr]) || void 0 === Qr ? void 0 : Qr.displayName;
      return (0, Wr.L)(Zr) ? "string" !== typeof Sr ? "" : (!Nr.has(Sr) && Nr.size < Ur && (Nr.add(Sr), console.warn(`No item called "${Sr}", so its hover shows the name as given`)), Sr) : Zr
    }

    function hr(rr, Sr, Qr) {
      var fr, Er, pr, xr, mr, Nr, Ur, hr, zr, Yr, nr, er, Kr, yr;
      const Br = rr.attributes,
        Tr = null !== (fr = null === (Er = Sr[rr.name]) || void 0 === Er ? void 0 : Er.rootName) && void 0 !== fr ? fr : rr.name,
        vr = null !== (pr = null !== (xr = Br.customDisplayName) && void 0 !== xr ? xr : null === (mr = Sr[rr.name]) || void 0 === mr ? void 0 : mr.displayName) && void 0 !== pr ? pr : tr(Sr, Tr);
      let Or = vr;
      const Lr = null === (Nr = Br.customAttributes) || void 0 === Nr ? void 0 : Nr.enchantmentTier;
      Lr && (Or = (0, ar.kb)(vr, {
        colour: ar.fb[Lr]
      }));
      const lr = null !== (Ur = null !== (hr = null !== (zr = function(rr, Sr) {
        var Qr;
        if (void 0 === rr || null !== (Qr = Sr.customAttributes) && void 0 !== Qr && Qr.author) return rr;
        const Wr = (0, Zr.gc)(rr);
        return Wr.every((rr => "string" === typeof rr)) ? rr : Wr.map((rr => "string" === typeof rr ? rr : {
          icon: rr.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Br.customDescription, Br)) && void 0 !== zr ? zr : null === (Yr = Sr[rr.name]) || void 0 === Yr ? void 0 : Yr.description) && void 0 !== hr ? hr : null === (nr = Sr[Tr]) || void 0 === nr ? void 0 : nr.description) && void 0 !== Ur ? Ur : "";
      let Xr = lr;
      if (null !== (er = Br.customAttributes) && void 0 !== er && er.enchantments) Xr = (0, Ir.c)(lr, Br.customAttributes.enchantments, Br.customAttributes.enchantmentData);
      else if (Qr[Tr]) Xr = (0, ar.kb)(lr), Xr.push({
        str: "\n"
      }), Xr.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Kr = Br.customAttributes) && void 0 !== Kr && Kr.mobSettings) {
        var Pr, Hr;
        const rr = Br.customAttributes.mobSettings;
        var qr, Rr;
        if (Xr = [], (0, Wr.L)(Br.customAttributes.health) || (Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Xr.push({
            str: " "
          }), Xr.push({
            str: Br.customAttributes.health.toString()
          }), (0, Wr.L)(rr.maxHealth) || (Xr.push({
            str: "/"
          }), Xr.push({
            str: rr.maxHealth.toString()
          }))), !(0, Wr.L)(rr.attackDamage) && rr.attackDamage > 0 && (Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Xr.push({
            str: " "
          }), Xr.push({
            str: rr.attackDamage.toString()
          })), !(0, Wr.L)(rr.secondaryAttackDamage) && rr.secondaryAttackDamage > 0 && (Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Xr.push({
            str: " "
          }), Xr.push({
            str: rr.secondaryAttackDamage.toString()
          })), (0, Wr.L)(rr.baseRunningSpeed) || (Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Xr.push({
            str: " "
          }), Xr.push({
            str: rr.baseRunningSpeed.toFixed(2)
          })), "Saddled" === rr.metaInfo) Xr.push({
          str: "\n"
        }), Xr.push({
          str: {
            translationKey: "general:has"
          }
        }), Xr.push({
          str: " "
        }), Xr.push({
          icon: null !== (qr = null === (Rr = rr.tameInfo) || void 0 === Rr ? void 0 : Rr.saddleItemName) && void 0 !== qr ? qr : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Xr.push({
            str: "\n"
          }), Xr.push({
            str: "\n"
          }), rr.petInfo && null !== (Pr = rr.tameInfo) && void 0 !== Pr && Pr.supportsFriendship) {
          const Sr = jr.c.getIconsFromFriendshipPoints(rr.petInfo.friendshipPoints);
          for (const rr of Sr) Xr.push({
            icon: rr,
            style: {
              fontSize: "1.5em"
            }
          });
          Xr.push({
            str: "\n"
          });
          const Qr = jr.c.getMobHungerLevel(rr.petInfo.lastFedAt);
          for (const rr of jr.c.hungerLevelIcons[Qr]) Xr.push({
            icon: rr,
            style: {
              fontSize: "1.5em"
            }
          });
          Xr.push({
            str: " "
          }), Xr.push({
            str: jr.c.hungerLevelTranslations[Qr],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (rr.tameInfo && null !== (Hr = rr.tameInfo) && void 0 !== Hr && Hr.supportsFriendship) {
          var gr, Cr;
          let Sr = null !== (gr = rr.tameInfo.likedFoods) && void 0 !== gr ? gr : [];
          Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: jr.c.feedTextColours[jr.c.MobFoodType.Superliked]
            }
          }), Xr.push({
            str: " "
          }), null !== (Cr = rr.petInfo) && void 0 !== Cr && Cr.superlikedFoodKnown ? (Xr.push({
            icon: rr.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Sr = Sr.filter((Sr => Sr !== rr.petInfo.superlikedFood))) : Xr.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: jr.c.feedTextColours[jr.c.MobFoodType.Liked]
            }
          }), Xr.push({
            str: " "
          });
          for (const rr of Sr) Xr.push({
            icon: rr,
            style: {
              fontSize: "1.5em"
            }
          });
          Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: jr.c.feedTextColours[jr.c.MobFoodType.Neutral]
            }
          }), Xr.push({
            str: " "
          });
          for (const Qr of null !== (Mr = rr.tameInfo.neutralFoods) && void 0 !== Mr ? Mr : []) {
            var Mr;
            Xr.push({
              icon: Qr,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Xr.push({
            str: "\n"
          }), Xr.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: jr.c.feedTextColours[jr.c.MobFoodType.Disliked]
            }
          }), Xr.push({
            str: " "
          });
          for (const Qr of null !== (Gr = rr.tameInfo.dislikedFoods) && void 0 !== Gr ? Gr : []) {
            var Gr;
            Xr.push({
              icon: Qr,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Xr.length > 0 ? (Xr.shift(), Xr.unshift(...(0, ar.kb)(lr))) : Xr = (0, ar.kb)(lr)
      }
      return {
        name: Or,
        desc: Xr,
        fontStyle: null !== (yr = Br.customAttributes) && void 0 !== yr && yr.author ? "italic" : "normal"
      }
    }

    function zr(rr, Sr, Qr, Zr) {
      const Wr = fr(rr, Qr),
        ar = fr(rr, Zr);
      if (!Wr) return !1;
      const jr = Sr[Wr.name].armourReduction,
        Ir = Sr[ar.name].armourReduction;
      if (Ir === jr) {
        var Er, pr, xr, mr;
        const rr = null !== (Er = null === (pr = Wr.attributes.customAttributes) || void 0 === pr ? void 0 : pr.enchantmentTier) && void 0 !== Er ? Er : "Tier 0",
          Sr = null !== (xr = null === (mr = ar.attributes.customAttributes) || void 0 === mr ? void 0 : mr.enchantmentTier) && void 0 !== xr ? xr : "Tier 0";
        return parseInt(rr.replace("Tier ", "")) >= parseInt(Sr.replace("Tier ", ""))
      }
      return jr > Ir
    }

    function Yr(rr) {
      let Sr;
      if ("number" === typeof rr) {
        const Qr = document.querySelector(`[data-inven-idx="${rr}"]`);
        if (!Qr) return null;
        Sr = Qr.getBoundingClientRect()
      } else Sr = rr.getBoundingClientRect();
      return {
        x: Sr.left + Sr.width / 2,
        y: Sr.top + Sr.height / 2
      }
    }
  },
  35347: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      g: () => Yr
    });
    var Zr = Qr(72),
      Wr = Qr(5063),
      ar = Qr(1251),
      jr = Qr(3742),
      Ir = Qr(1576),
      fr = Qr(1338);

    function Er(rr) {
      let {
        text: Sr
      } = rr;
      const {
        t: Qr
      } = (0, ar.E)(), [Zr, Er] = (0, jr.g)();
      return (0, fr.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, fr.jsx)("div", {
          className: "CopyTextRowText",
          children: Sr
        }), (0, fr.jsx)(Ir.h, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, Wr.b)(Sr).catch((rr => {
              console.error("Failed to copy text:", rr)
            })), Er()
          },
          disabled: Zr,
          children: Qr(Zr ? "general:copied" : "general:copy")
        })]
      })
    }
    var pr = Qr(1413),
      xr = Qr(5297),
      mr = Qr(3305),
      Nr = Qr(109),
      Ur = Qr(2128),
      tr = Qr(1444);

    function hr(rr) {
      let {
        show: Sr,
        onClose: Qr
      } = rr;
      const {
        requestedGameNameWithVariation: Zr,
        lobbyName: Wr,
        shownLobbyName: ar
      } = (0, Ur.j)("connectedGame"), jr = (0, mr.b)(Zr, Wr, !1);
      return Nr.featureFlags.canUseInviteLinks && (0, fr.jsx)(xr.b, {
        show: Sr,
        close: Qr,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, fr.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, fr.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, fr.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, fr.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === jr ? (0, fr.jsx)(tr.c, {}) : jr, (0, fr.jsx)("br", {}), "Lobby Name: ", ar, (0, fr.jsx)("br", {}), (0, fr.jsx)("br", {}), (0, fr.jsx)("br", {}), (0, fr.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, fr.jsx)(zr, {})]
        })
      })
    }

    function zr() {
      var rr;
      const Sr = null !== (rr = Yr(Nr.featureFlags.canUseInviteLinks)) && void 0 !== rr ? rr : "Loading Link...";
      return Nr.featureFlags.canUseInviteLinks && (0, fr.jsx)(Er, {
        text: Sr
      })
    }

    function Yr(rr) {
      const [Sr, Qr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        if (!rr) return;
        let Sr = !0;
        return (0, pr.w)().then((rr => {
          Sr && Qr(rr)
        })).catch((rr => {
          console.error("Failed to get invite link:", rr)
        })), () => {
          Sr = !1
        }
      }), [rr]), Sr
    }
  },
  35523: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ur,
      g: () => hr
    });
    Qr(35525);
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1251),
      Ir = Qr(1576),
      fr = Qr(3628),
      Er = Qr(1448),
      pr = Qr(3362),
      xr = Qr(4187),
      mr = Qr(3208),
      Nr = Qr(1338);

    function Ur(rr) {
      let {
        endsAt: Sr,
        className: Qr
      } = rr;
      return (0, Nr.jsxs)("span", {
        className: ar()("NewPlayerDealClock", Qr),
        children: [(0, Nr.jsx)(Er.c, {
          name: "hourglass"
        }), (0, Nr.jsx)(fr.f, {
          toTime: Sr
        })]
      })
    }

    function tr(rr) {
      let {
        offered: Sr,
        needsLogin: Qr,
        busy: Zr,
        highlight: Wr,
        onBuy: fr
      } = rr;
      const {
        t: Er
      } = (0, jr.E)(), {
        pack: Ur
      } = Sr, tr = (0, xr.e)(Sr.package);
      return (0, Nr.jsxs)("div", {
        className: ar()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: Wr
        }),
        children: [(0, Nr.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, Nr.jsx)("img", {
            src: mr.d[Sr.tier],
            alt: "",
            draggable: !1
          }), (0, Nr.jsx)("span", {
            className: "NewPlayerDealTag",
            children: Er("newPlayerDeal:tag")
          })]
        }), (0, Nr.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, Nr.jsx)(pr.c, {
            className: "NewPlayerDealPackAmount",
            amount: Ur.gems
          }), (0, Nr.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: Er("newPlayerDeal:split", {
              usual: Ur.usualGems.toLocaleString(),
              bonus: (Ur.gems - Ur.usualGems).toLocaleString()
            })
          })]
        }), (0, Nr.jsx)(Ir.p, {
          className: "NewPlayerDealBuy",
          loading: Zr,
          onClick: fr,
          ariaLabel: Er("newPlayerDeal:buyLabel", {
            amount: Ur.gems.toLocaleString(),
            price: tr
          }),
          children: Er(Qr ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: tr
          })
        })]
      })
    }

    function hr(rr) {
      let {
        view: Sr,
        needsLogin: Qr,
        busy: Wr,
        highlight: Ir,
        onBuy: fr
      } = rr;
      const {
        t: Er
      } = (0, jr.E)();
      return (0, Nr.jsxs)("div", {
        className: ar()("NewPlayerDealPacks", Sr.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [Sr.packs.map(((rr, Sr) => (0, Nr.jsxs)(Zr.Fragment, {
          children: [Sr > 0 && (0, Nr.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, Nr.jsx)("i", {})
          }), (0, Nr.jsx)(tr, {
            offered: rr,
            needsLogin: Qr,
            busy: Wr,
            highlight: Ir === rr.pack.packageId,
            onBuy: () => {
              fr(rr)
            }
          })]
        }, rr.pack.packageId))), (0, Nr.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, Nr.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: Er("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35532: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => vr,
      e: () => Lr
    });
    Qr(35525);
    var Zr = Qr(4184),
      Wr = Qr(1605),
      ar = Qr(3192),
      jr = Qr(4170),
      Ir = Qr(4151),
      fr = Qr(4176),
      Er = Qr(4135),
      pr = Qr(1251),
      xr = Qr(1475),
      mr = Qr(1181),
      Nr = Qr(1576),
      Ur = Qr(1448),
      tr = Qr(3362),
      hr = Qr(3749),
      zr = Qr(3612),
      Yr = Qr(3617),
      nr = Qr(3619),
      er = Qr(1338);
    const Kr = new fr.c(Er.getBillingClient, Er.addPurchaseRecordListener);
    let yr = !1;

    function Br(rr, Sr) {
      null !== rr && (0, zr.p)(rr) || ((0, Wr.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${Sr.pack.packageId}`
      }), null !== rr && (0, zr.v)(rr), vr(Sr.pack.gems))
    }

    function Tr(rr, Sr, Qr) {
      const Wr = (0, zr.b)(Sr);
      switch (rr.kind) {
        case "completed":
          Br(Wr, Qr);
          break;
        case "pending":
          ar = rr.intentId, jr = () => {
            hr.j.refresh(), Br(Wr, Qr)
          }, yr || (yr = !0, Kr.listen()), Kr.follow(ar, jr);
          break;
        case "unknownPackage":
          (0, zr.M)(Sr, null);
          break;
        case "failed":
          rr.errorKey === Zr.e.newPlayerDealUnavailable && (0, zr.M)(Sr, null)
      }
      var ar, jr
    }

    function vr(rr) {
      xr.NotificationProvider.showCustomPopup({
        body: Sr => (0, er.jsx)(Or, {
          gems: rr,
          close: Sr
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function Or(rr) {
      let {
        gems: Sr,
        close: Qr
      } = rr;
      const {
        t: Zr
      } = (0, pr.E)();
      return (0, er.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, er.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, er.jsx)(Ur.c, {
            name: "circle-check"
          }), (0, er.jsx)(tr.c, {
            amount: Sr
          }), (0, er.jsx)("span", {
            children: Zr("newPlayerDeal:added")
          })]
        }), (0, er.jsx)(Nr.p, {
          className: "NewPlayerDealAddedOk",
          onClick: Qr,
          children: Zr("general:ok")
        })]
      })
    }

    function Lr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr.e;
      const {
        userContext: Qr
      } = (0, mr.c)(), {
        purchaseUnderWay: Zr,
        notice: Wr,
        buy: fr
      } = (0, Ir.d)(Sr), Er = (0, Yr.g)(), pr = Qr.mayBuy() || (0, ar.guestsMayBuy)(), xr = null === Er ? !pr : Er.guest && !Qr.isLoggedIn();
      return {
        purchaseUnderWay: Zr,
        notice: Wr,
        needsLogin: xr,
        buyPack: function(Zr, Wr) {
          (0, zr.E)("new_player_deal.buy", (0, nr.b)(Zr.arm, rr, Wr.pack.packageId)), null === Er ? fr(function(rr) {
            return {
              sku: rr.pack.packageId,
              tier: rr.tier,
              amount: rr.pack.gems,
              bonusPercent: 0,
              package: rr.package
            }
          }(Wr), null, {
            followPending: !1
          }).then((rr => {
            Tr(rr, Qr, Wr)
          })) : xr ? Sr(Wr.pack.packageId, null) : Br((0, zr.b)(Qr), Wr)
        }
      }
    }
  },
  35441: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(2128),
      Ir = Qr(1338);

    function fr(rr) {
      const Sr = Math.floor(rr / 3600),
        Qr = Math.floor(rr % 3600 / 60),
        Zr = Math.floor(rr % 60),
        Wr = `${Qr.toString().padStart(2,"0")}:${Zr.toString().padStart(2,"0")}`;
      return Sr > 0 ? `${Sr}:${Wr}` : Wr
    }
    const Er = (0, Zr.memo)((function(rr) {
      let {
        className: Sr
      } = rr;
      const {
        recording: Qr,
        clipping: Zr,
        seconds: Wr
      } = (0, jr.j)("replayRecorder");
      return Qr || Zr ? (0, Ir.jsxs)("div", {
        className: ar()("RecordingIndicator", {
          RecordingIndicatorClipping: !Qr
        }, Sr),
        "data-camera-keeper": "",
        children: [(0, Ir.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ir.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: Qr ? "REC" : "CLIP"
        }), Qr && (0, Ir.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: fr(Wr)
        })]
      }) : null
    }))
  },
  35535: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => fr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1338);
    const jr = 21,
      Ir = 2 * Math.PI * jr;

    function fr(rr) {
      let {
        tier: Sr,
        state: Qr,
        progress: Zr,
        size: fr = "large"
      } = rr;
      const Er = Wr()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === fr,
        SeasonPassTierNodeLarge: "large" === fr,
        SeasonPassTierNodeReached: "reached" === Qr,
        SeasonPassTierNodeEarning: "earning" === Qr
      });
      if ("earning" !== Qr || "large" === fr) return (0, ar.jsx)("span", {
        className: Er,
        children: (0, ar.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: Sr
        })
      });
      const pr = Math.max(0, Math.min(1, Zr));
      return (0, ar.jsxs)("span", {
        className: Er,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * pr),
        children: [(0, ar.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, ar.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, ar.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: jr
          }), (0, ar.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: jr,
            strokeDasharray: `${pr*Ir} ${Ir}`,
            transform: "rotate(-90 28 28)"
          }), (0, ar.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, ar.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: Sr
        })]
      })
    }
  },
  5707: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5390),
      jr = Qr(1251),
      Ir = Qr(1448),
      fr = Qr(1576),
      Er = Qr(1629),
      pr = Qr(1475),
      xr = Qr(3536),
      mr = Qr(1338);
    const Nr = {
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

    function Ur(rr) {
      let {
        platform: Sr
      } = rr;
      const Qr = "youtube" === Sr;
      return (0, mr.jsxs)("span", {
        className: Wr()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Qr
        }),
        children: [Qr && (0, mr.jsx)(xr.c, {
          variant: "white"
        }), !Qr && (0, mr.jsx)(Ir.c, {
          name: Nr[Sr].icon,
          kit: "brands"
        })]
      })
    }

    function tr(rr) {
      let {
        platform: Sr,
        link: Qr,
        editable: Zr,
        userContext: Wr,
        onLinksUpdated: xr
      } = rr;
      const {
        t: tr
      } = (0, jr.E)(), hr = Nr[Sr];
      if (!Qr && !Zr) return null;

      function zr() {
        var rr;
        if (!Wr || !xr) return;
        pr.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hr.name
            }
          },
          prefixText: ar.v[Sr],
          placeholderText: "playBloxd",
          initialValue: null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.handle) && void 0 !== rr ? rr : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Qr ? "general:remove" : void 0
        }).getResult().then((async rr => {
          if ("notificationTornDown" !== rr && null !== rr) try {
            "submit" === rr.type ? await Er.c.setSocialLink(Wr, Sr, rr.value) : await Er.c.clearSocialLink(Wr, Sr), xr()
          } catch (Qr) {
            console.error("Failed to update social link", Qr), pr.NotificationProvider.showAlertPopup({
              title: Qr.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Qr) {
        const rr = `@${Qr.handle}`;
        return (0, mr.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hr.color
          },
          href: Qr.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, mr.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, mr.jsx)(Ur, {
              platform: Sr
            }), (0, mr.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, mr.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: rr
              })
            })]
          }), Zr && (0, mr.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, fr._)({
              stopPropagation: !0
            }),
            onClick: rr => {
              rr.stopPropagation(), rr.preventDefault(), zr()
            },
            children: (0, mr.jsx)(Ir.c, {
              name: "pen-to-square"
            })
          }), !Zr && (0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, mr.jsx)(Ir.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, mr.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hr.color
        },
        ...(0, fr._)(),
        onClick: () => {
          zr()
        },
        children: [(0, mr.jsx)(Ur, {
          platform: Sr
        }), (0, mr.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hr.name
          }), (0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: tr("homePage:profileSocialLinkAdd")
          })]
        }), (0, mr.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, mr.jsx)(Ir.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hr(rr) {
      let {
        socialLinks: Sr,
        editable: Qr = !1,
        userContext: Zr,
        onLinksUpdated: Wr
      } = rr;
      if (!Qr && 0 === Sr.length) return null;
      const jr = new Map(Sr.map((rr => [rr.platform, rr]))),
        Ir = Qr ? ar.r : Sr.map((rr => rr.platform));
      return (0, mr.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, mr.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ir.map((rr => (0, mr.jsx)(tr, {
            platform: rr,
            link: jr.get(rr),
            editable: Qr,
            userContext: Zr,
            onLinksUpdated: Wr
          }, rr)))
        })
      })
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  35515: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(4681);

    function ar() {
      const [rr, Sr] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        let rr = !0;
        return (0, Wr.i)().then((() => {
          rr && Sr(!0)
        })), () => {
          rr = !1
        }
      }), []), rr
    }
  },
  7550: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(43);

    function ar(rr, Sr) {
      var Qr;
      const [ar, jr] = (0, Zr.useState)(null !== (Qr = Wr.j.getItem(rr)) && void 0 !== Qr ? Qr : Sr);
      return [ar, Sr => {
        Wr.j.setItem(rr, Sr), jr(Sr)
      }]
    }
  },
  35426: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => tr,
      f: () => Ur
    });
    Qr(35432);
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(35422);

    function Ir(rr, Sr) {
      return Math.max(1, Math.round(rr * Sr))
    }

    function fr(rr, Sr) {
      const Qr = Sr * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Zr = function(rr, Sr) {
          if (rr.lines) return Ir(rr.lineThickness, Sr) % 2;
          if (rr.dot) return Ir(rr.dotSize, Sr) % 2;
          return Er(rr, Sr) % 2
        }(rr, Sr),
        Wr = pr(rr.lineThickness * Qr, Zr),
        ar = Ir(rr.lineLength, Qr),
        jr = Math.round(rr.gap * Qr),
        fr = rr.outline > 0 ? Ir(rr.outline, Qr) : 0,
        mr = [];
      if (rr.lines && (mr.push({
          x: Wr + jr,
          y: 0,
          w: ar,
          h: Wr,
          arm: "right"
        }), mr.push({
          x: -jr - ar,
          y: 0,
          w: ar,
          h: Wr,
          arm: "left"
        }), mr.push({
          x: 0,
          y: Wr + jr,
          w: Wr,
          h: ar,
          arm: "down"
        }), rr.tStyle || mr.push({
          x: 0,
          y: -jr - ar,
          w: Wr,
          h: ar,
          arm: "up"
        }), 0 === jr && mr.push({
          x: 0,
          y: 0,
          w: Wr,
          h: Wr
        })), rr.dot) {
        const Sr = pr(rr.dotSize * Qr, Zr),
          ar = rr.lines && 0 === jr && rr.dotSize > rr.lineThickness ? Math.max(Sr, Wr + 2) : Sr,
          Ir = (Wr - ar) / 2;
        mr.push({
          x: Ir,
          y: Ir,
          w: ar,
          h: ar
        })
      }
      const Nr = mr.map((rr => ({
        ...rr,
        x: rr.x - fr,
        y: rr.y - fr,
        w: rr.w + 2 * fr,
        h: rr.h + 2 * fr
      })));
      let Ur = null,
        tr = null;
      if (rr.circle) {
        const Sr = Ir(rr.circleThickness, Qr),
          ar = function(rr, Sr) {
            return rr + (rr % 2 === Sr ? 0 : 1)
          }(Er(rr, Qr), Zr),
          jr = (Wr - ar) / 2;
        Ur = xr(jr, ar, Sr), fr > 0 && (tr = xr(jr - fr, ar + 2 * fr, Sr + 2 * fr))
      }
      return {
        cell: Wr,
        fills: mr,
        outlines: fr > 0 ? Nr : [],
        ring: Ur,
        ringOutline: tr
      }
    }

    function Er(rr, Sr) {
      return Math.round(rr.circleRadius * Sr * 2 + Ir(rr.circleThickness, Sr))
    }

    function pr(rr, Sr) {
      return Math.max(2 - Sr, 2 * Math.round((rr - Sr) / 2) + Sr)
    }

    function xr(rr, Sr, Qr) {
      const Zr = 2 * Qr >= Sr - 1;
      return {
        x: rr,
        y: rr,
        size: Sr,
        border: Math.min(Qr, Math.floor(Sr / 2)),
        filled: Zr
      }
    }
    var mr = Qr(1338);
    const Nr = 1.4;

    function Ur(rr, Sr) {
      return rr && Sr ? `scale(${Nr})` : "scale(1)"
    }

    function tr(rr) {
      return "classic" === rr.settings.style ? (0, mr.jsx)(Yr, {
        ...rr
      }) : (0, mr.jsx)(vr, {
        ...rr
      })
    }
    const hr = .125;

    function zr(rr, Sr) {
      const Qr = {};
      if (rr.color !== jr.f.color && (Qr.color = (0, jr.l)(rr.color)), rr.opacity !== jr.f.opacity && (Qr.opacity = rr.opacity / 100), rr.outline !== jr.f.outline || rr.outlineColor !== jr.f.outlineColor) {
        const Sr = rr.outline,
          Zr = (0, jr.l)(rr.outlineColor);
        Qr.textShadow = Sr > 0 ? `-${Sr}px 0 ${Zr}, 0 ${Sr}px ${Zr}, ${Sr}px 0 ${Zr}, 0 -${Sr}px ${Zr}` : "none"
      }
      if (rr.size !== jr.f.size) {
        const Zr = rr.size / 100;
        Qr.fontSize = Sr ? `calc(max(1.3rem, 18px) * ${Zr})` : `calc(1.3rem * ${Zr})`, Qr.marginTop = `-${hr}em`, Qr.transformOrigin = `50% calc(50% + ${hr}em)`
      }
      return Qr
    }

    function Yr(rr) {
      let {
        settings: Sr,
        touch: Qr,
        inPreview: Zr,
        inEditor: ar,
        pressed: jr = !1,
        pressRef: Ir
      } = rr;
      return (0, mr.jsx)("div", {
        className: Wr()("Crosshair", {
          Touch: Qr,
          CrosshairInPreview: Zr,
          CrosshairInEditor: ar || Zr
        }),
        ref: Ir,
        style: {
          transform: Ur(jr, Sr.growOnClick),
          ...zr(Sr, Qr)
        },
        children: "+"
      })
    }

    function nr(rr, Sr) {
      return rr / Sr + "px"
    }

    function er(rr, Sr, Qr, Zr) {
      return {
        ...Br(rr, Sr, Qr),
        width: nr(rr.w, Qr),
        height: nr(rr.h, Qr),
        background: Zr
      }
    }

    function Kr(rr, Sr, Qr) {
      return {
        left: nr(rr.x, Sr),
        top: nr(rr.y, Sr),
        width: nr(rr.size, Sr),
        height: nr(rr.size, Sr),
        borderWidth: nr(rr.border, Sr),
        borderColor: Qr,
        background: rr.filled ? Qr : void 0
      }
    }
    const yr = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Br(rr, Sr, Qr) {
      const [Zr, Wr] = rr.arm ? yr[rr.arm] : [0, 0], ar = Math.round(Sr * Qr);
      return {
        left: nr(rr.x + Zr * ar, Qr),
        top: nr(rr.y + Wr * ar, Qr)
      }
    }

    function Tr(rr) {
      return rr.arm ? {
        "data-arm": rr.arm,
        "data-x": rr.x,
        "data-y": rr.y
      } : {}
    }

    function vr(rr) {
      let {
        settings: Sr,
        inPreview: Qr,
        inEditor: Zr,
        pressed: Ir = !1,
        spread: Er,
        spreadRef: pr
      } = rr;
      const xr = (0, ar.useRef)(null),
        {
          box: Ur,
          dpr: tr
        } = function(rr) {
          const [Sr, Qr] = (0, ar.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, ar.useLayoutEffect)((() => {
            const Sr = rr.current;
            if (!Sr) return;
            const Zr = () => {
              const rr = Sr.getBoundingClientRect(),
                Zr = window.devicePixelRatio || 1;
              Qr((Sr => Sr.dpr === Zr && Sr.box.left === rr.left && Sr.box.top === rr.top && Sr.box.width === rr.width && Sr.box.height === rr.height ? Sr : {
                box: {
                  left: rr.left,
                  top: rr.top,
                  width: rr.width,
                  height: rr.height
                },
                dpr: Zr
              }))
            };
            Zr();
            const Wr = new ResizeObserver(Zr);
            return Wr.observe(Sr), window.addEventListener("resize", Zr), window.addEventListener("scroll", Zr, !0), () => {
              Wr.disconnect(), window.removeEventListener("resize", Zr), window.removeEventListener("scroll", Zr, !0)
            }
          }), [rr]), Sr
        }(xr),
        hr = (0, ar.useRef)(tr);
      hr.current = tr;
      const zr = fr(Sr, tr, Ir && Sr.growOnClick ? Nr : 1),
        Yr = function(rr, Sr, Qr) {
          const Zr = Math.round((rr.left + rr.width / 2) * Qr - Sr / 2),
            Wr = Math.round((rr.top + rr.height / 2) * Qr - Sr / 2);
          return {
            x: Zr / Qr - rr.left,
            y: Wr / Qr - rr.top
          }
        }(Ur, zr.cell, tr),
        nr = (0, jr.l)(Sr.color),
        yr = (0, jr.l)(Sr.outlineColor),
        vr = (0, ar.useRef)(0);
      (0, ar.useLayoutEffect)((() => {
        if (pr) return pr.current = rr => {
          var Sr;
          vr.current = rr, null === (Sr = xr.current) || void 0 === Sr || Sr.querySelectorAll("[data-arm]").forEach((Sr => {
            Object.assign(Sr.style, Br(function(rr) {
              return {
                x: Number(rr.dataset.x),
                y: Number(rr.dataset.y),
                arm: rr.dataset.arm
              }
            }(Sr), rr, hr.current))
          }))
        }, () => {
          pr.current = null
        }
      }), [pr]);
      const Or = null !== Er && void 0 !== Er ? Er : vr.current;
      return (0, mr.jsx)("div", {
        ref: xr,
        className: Wr()("CrosshairShapes", {
          CrosshairInPreview: Qr,
          CrosshairInEditor: Zr || Qr,
          CrosshairSpreads: void 0 !== pr
        }),
        children: (0, mr.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Yr.x,
            top: Yr.y,
            opacity: Sr.opacity / 100
          },
          children: (0, mr.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [zr.ringOutline && (0, mr.jsx)("div", {
              className: "CrosshairRing",
              style: Kr(zr.ringOutline, tr, yr)
            }), zr.outlines.map(((rr, Sr) => (0, mr.jsx)("div", {
              className: "CrosshairPart",
              ...Tr(rr),
              style: er(rr, Or, tr, yr)
            }, `o${Sr}`))), zr.ring && (0, mr.jsx)("div", {
              className: "CrosshairRing",
              style: Kr(zr.ring, tr, nr)
            }), zr.fills.map(((rr, Sr) => (0, mr.jsx)("div", {
              className: "CrosshairPart",
              ...Tr(rr),
              style: er(rr, Or, tr, nr)
            }, `f${Sr}`)))]
          })
        })
      })
    }
  },
  35435: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      i: () => hr,
      m: () => tr
    });
    var Zr = Qr(35422);
    const Wr = "XH1-",
      ar = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      jr = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Ir = ["color", "outlineColor"],
      fr = 1 + 3 * Ir.length + jr.length + 1,
      Er = Math.ceil(8 * fr / Math.log2(62)),
      pr = Wr.length + Er;

    function xr(rr) {
      let Sr = 90;
      for (const Qr of rr) Sr = 31 * Sr + Qr & 255;
      return Sr
    }
    const mr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nr = BigInt(mr.length);

    function Ur(rr, Sr) {
      let Qr = 0n;
      for (const Wr of rr) {
        const rr = mr.indexOf(Wr);
        if (rr < 0) return null;
        Qr = Qr * Nr + BigInt(rr)
      }
      if (Qr >> BigInt(8 * Sr) !== 0n) return null;
      const Zr = [];
      for (let Wr = 0; Wr < Sr; Wr++) Zr.unshift(Number(0xffn & Qr)), Qr >>= 8n;
      return Zr
    }

    function tr(rr) {
      let Sr = "shapes" === rr.style ? 1 : 0;
      ar.forEach(((Qr, Zr) => {
        rr[Qr] && (Sr |= 1 << Zr + 1)
      }));
      const Qr = [Sr];
      for (const Wr of Ir) {
        const Sr = (0, Zr.j)(Wr, rr[Wr]);
        Qr.push(Sr >> 16 & 255, Sr >> 8 & 255, 255 & Sr)
      }
      for (const Wr of jr) {
        const {
          min: Sr,
          step: ar
        } = Zr.b[Wr];
        Qr.push(Math.round(((0, Zr.j)(Wr, rr[Wr]) - Sr) / ar))
      }
      return Qr.push(xr(Qr)), Wr + function(rr, Sr) {
        let Qr = 0n;
        for (const Wr of rr) Qr = Qr << 8n | BigInt(Wr);
        let Zr = "";
        for (let Wr = 0; Wr < Sr; Wr++) Zr = mr[Number(Qr % Nr)] + Zr, Qr /= Nr;
        return Zr
      }(Qr, Er)
    }

    function hr(rr) {
      for (const Sr of rr.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Er}})`, "gi"))) {
        const rr = zr(Ur(Sr[1], fr));
        if (rr) return rr
      }
      return null
    }

    function zr(rr) {
      if (!rr || rr.length !== fr || xr(rr.slice(0, -1)) !== rr[rr.length - 1]) return null;
      const Sr = rr[0],
        Qr = {
          ...Zr.f,
          style: 1 & Sr ? "shapes" : "classic"
        };
      ar.forEach(((rr, Zr) => {
        Qr[rr] = 0 !== (Sr & 1 << Zr + 1)
      }));
      let Wr = 1;
      for (const Zr of Ir) Qr[Zr] = rr[Wr] << 16 | rr[Wr + 1] << 8 | rr[Wr + 2], Wr += 3;
      for (const ar of jr) {
        const {
          min: Sr,
          step: jr
        } = Zr.b[ar];
        Qr[ar] = (0, Zr.j)(ar, Sr + rr[Wr] * jr), Wr++
      }
      return Qr
    }
  },
  35422: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => Wr,
      j: () => ar,
      l: () => Er,
      o: () => fr,
      r: () => pr,
      t: () => Ir,
      u: () => jr
    });
    const Zr = {
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
      Wr = Object.freeze({
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

    function ar(rr, Sr) {
      var Qr;
      const {
        min: ar,
        max: jr,
        step: Ir
      } = Zr[rr];
      if (!Number.isFinite(Sr)) return Wr[rr];
      const fr = (null !== (Qr = String(Ir).split(".")[1]) && void 0 !== Qr ? Qr : "").length,
        Er = Number((Math.round(Sr / Ir) * Ir).toFixed(fr));
      return Math.min(jr, Math.max(ar, Er))
    }

    function jr(rr, Sr, Qr) {
      const Zr = "number" === typeof Qr ? ar(Sr, Qr) : Qr;
      return {
        ...rr,
        [Sr]: Zr
      }
    }

    function Ir(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Wr).every((Zr => Qr.includes(Zr) || rr[Zr] === Sr[Zr]))
    }

    function fr(rr) {
      return Ir(rr, Wr)
    }

    function Er(rr) {
      return `#${rr.toString(16).padStart(6,"0")}`
    }

    function pr(rr) {
      const Sr = /^#?([0-9a-f]{6})$/i.exec(rr.trim());
      return Sr ? parseInt(Sr[1], 16) : null
    }
  },
  35437: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => xr,
      f: () => mr
    });
    var Zr = Qr(72),
      Wr = Qr(43),
      ar = Qr(35435),
      jr = Qr(35422);
    const Ir = "crosshairCode";
    let fr = null;
    const Er = new Set;

    function pr() {
      if (null === fr) {
        var rr;
        const Sr = Wr.j.getItem(Ir);
        fr = null !== (rr = "string" === typeof Sr ? (0, ar.i)(Sr) : null) && void 0 !== rr ? rr : jr.f
      }
      return fr
    }

    function xr(rr) {
      fr = rr, (0, jr.o)(rr) ? Wr.j.removeItem(Ir) : Wr.j.setItem(Ir, (0, ar.m)(rr));
      for (const Sr of Er) Sr()
    }

    function mr() {
      const [rr, Sr] = (0, Zr.useState)(pr);
      return (0, Zr.useEffect)((() => {
        const rr = () => {
          Sr(pr())
        };
        return rr(), Qr = rr, Er.add(Qr), () => {
          Er.delete(Qr)
        };
        var Qr
      }), []), rr
    }
  },
  35484: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => jr,
      m: () => ar
    });
    var Zr = Qr(72);
    const Wr = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(rr) {
        var Sr;
        return null !== (Sr = this.inFlight.get(rr)) && void 0 !== Sr ? Sr : 0
      }
      setInFlight(rr, Sr) {
        this.getInFlight(rr) !== Sr && (this.inFlight.set(rr, Sr), this.notify())
      }
      subscribe(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      getLanding(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = this.landings.get(rr)) || void 0 === Qr ? void 0 : Qr.at(-1)) && void 0 !== Sr ? Sr : null
      }
      hasLanding(rr, Sr) {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = this.landings.get(rr)) || void 0 === Zr ? void 0 : Zr.includes(Sr)) && void 0 !== Qr && Qr
      }
      addLanding(rr, Sr) {
        var Qr;
        const Zr = null !== (Qr = this.landings.get(rr)) && void 0 !== Qr ? Qr : [];
        return this.landings.set(rr, [...Zr, Sr]), this.notify(), () => {
          this.landings.set(rr, this.landings.get(rr).filter((rr => rr !== Sr))), this.notify()
        }
      }
      notify() {
        for (const rr of this.listeners) rr()
      }
    };

    function ar(rr, Sr) {
      const [Qr, ar] = (0, Zr.useState)((() => Wr.getInFlight(rr)));
      return (0, Zr.useLayoutEffect)((() => {
        const Sr = () => {
          ar(Wr.getInFlight(rr))
        };
        return Sr(), Wr.subscribe(Sr)
      }), [rr]), Math.max(0, Sr - Qr)
    }

    function jr(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, Zr.useLayoutEffect)((() => {
        if (Qr) return Wr.addLanding(rr, Sr.current)
      }), [rr, Sr, Qr])
    }
  },
  35366: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => Zr
    });
    const Zr = "image/jpeg",
      Wr = "jpg"
  },
  35371: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      c: () => Er,
      d: () => pr
    });
    var Zr = Qr(1815),
      Wr = Qr(4413),
      ar = Qr(109),
      jr = Qr(1904),
      Ir = Qr(35366);

    function fr() {
      return !(0, ar.isMobileApp)() || Zr.b.supports("photos")
    }
    async function Er(rr) {
      var Sr, Qr;
      if ((0, ar.isMobileApp)()) {
        const {
          saved: Sr
        } = await Zr.b.request("photos.save", {
          data: await (0, Wr.f)(rr),
          mimeType: Ir.h
        });
        return Sr ? "saved" : "denied"
      }
      return (0, ar.isIOS)() && null !== (Sr = (Qr = navigator).canShare) && void 0 !== Sr && Sr.call(Qr, {
        files: [rr]
      }) ? pr(rr) : ((0, jr.c)(rr, rr.name), "saved")
    }
    async function pr(rr) {
      try {
        return await navigator.share({
          files: [rr]
        }), "shared"
      } catch (Sr) {
        if (Sr instanceof DOMException && "AbortError" === Sr.name) return "Rr";
        if (Sr instanceof DOMException && "NotAllowedError" === Sr.name) return "needsTap";
        throw Sr
      }
    }
  },
  35350: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ur,
      f: () => tr,
      g: () => hr,
      k: () => zr
    });
    var Zr = Qr(26),
      Wr = Qr(35335),
      ar = Qr(1758),
      jr = Qr(35359);
    const Ir = 64,
      fr = 8;
    async function Er(rr) {
      try {
        const Sr = await createImageBitmap(rr, {
          resizeWidth: Ir,
          resizeHeight: Ir,
          resizeQuality: "high"
        });
        try {
          const rr = document.createElement("canvas");
          rr.width = Ir, rr.height = Ir;
          const Qr = rr.getContext("2d", {
            willReadFrequently: !0
          });
          return Qr.drawImage(Sr, 0, 0, Ir, Ir),
            function(rr) {
              for (let Sr = 0; Sr < rr.length; Sr += 4)
                if (rr[Sr] > fr || rr[Sr + 1] > fr || rr[Sr + 2] > fr) return !1;
              return !0
            }(Qr.getImageData(0, 0, Ir, Ir).data)
        } finally {
          Sr.close()
        }
      } catch (Sr) {
        return console.warn("Screenshot mode: couldn't check whether a photo is blank", Sr), !1
      }
    }
    var pr = Qr(35366);
    const xr = 8294400,
      mr = .92,
      Nr = 3;
    class Ur extends Error {
      constructor(rr) {
        super(`The photo came out blank ${rr} times`), this.name = "BlankPhotoError"
      }
    }

    function tr() {
      (0, ar.e)(), Zr.c.set({
        screenshotMode: !0
      })
    }

    function hr() {
      Zr.c.set({
        screenshotMode: !1
      })
    }
    async function zr() {
      const rr = performance.now(),
        Sr = await async function(rr, Sr) {
          let Qr = 0;
          for (; Qr < Nr;) {
            let Wr;
            try {
              Wr = await rr()
            } catch (Zr) {
              if (0 === Qr) throw Zr;
              return {
                outcome: "failed",
                error: Zr,
                blanks: Qr
              }
            }
            if (!await Sr(Wr)) return {
              outcome: "saved",
              blob: Wr,
              blanks: Qr
            };
            Qr++
          }
          return {
            outcome: "refused",
            blanks: Qr
          }
        }((async () => {
          const {
            width: rr,
            height: Sr,
            scale: Qr
          } = function(rr, Sr, Qr) {
            const Zr = Math.max(1, rr),
              Wr = Math.max(1, Sr),
              ar = Math.min(Math.max(1, Qr), Math.sqrt(xr / (Zr * Wr)));
            return {
              width: Math.round(Zr * ar),
              height: Math.round(Wr * ar),
              scale: ar
            }
          }(window.innerWidth, window.innerHeight, window.devicePixelRatio);
          return (await Wr.devTools.capturePhoto(rr, Sr, {
            scale: Qr,
            type: pr.h,
            quality: mr
          })).blob
        }), Er);
      if (Sr.blanks > 0) {
        const Zr = (0, jr.c)();
        Qr.e(310).then((() => Qr(42928))).then((Qr => {
          let {
            reportBlankPhoto: Wr
          } = Qr;
          Wr(Sr.blanks, Sr.outcome, rr, Zr)
        })).catch((rr => {
          console.warn("Screenshot mode: couldn't report a blank photo", rr)
        }))
      }
      switch (Sr.outcome) {
        case "saved":
          return new File([Sr.blob], function(rr) {
            const Sr = rr => String(rr).padStart(2, "0"),
              Qr = `${rr.getFullYear()}${Sr(rr.getMonth()+1)}${Sr(rr.getDate())}`,
              Zr = `${Sr(rr.getHours())}${Sr(rr.getMinutes())}${Sr(rr.getSeconds())}`;
            return `bloxd-${Qr}-${Zr}.${pr.e}`
          }(new Date), {
            type: pr.h
          });
        case "refused":
          throw new Ur(Sr.blanks);
        case "failed":
          throw Sr.error
      }
    }
  },
  35416: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      d: () => Wr
    });
    var Zr = Qr(26);

    function Wr(rr, Sr) {
      return rr && !Sr
    }

    function ar() {
      return Wr(Zr.c.get("isTouchScreen"), Zr.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5517: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => ar,
      j: () => Wr
    });
    let Zr = null;

    function Wr(rr) {
      Zr = rr
    }

    function ar() {
      return Zr
    }

    function jr(rr) {
      return "bloxd" === rr.site && !rr.isMobileApp && !rr.isTouchScreen
    }
  },
  35337: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    const Zr = new Set(["chunkBorders"])
  },
  35335: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ALL_DEV_TOOLS: () => jr,
      coreDevTools: () => Er,
      devTools: () => fr
    });
    var Zr = Qr(712),
      Wr = Qr(1364),
      ar = Qr(35337);
    const jr = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ir() {
      const {
        noaDevTools: rr
      } = await Qr.e(270).then((() => Qr(42923)));
      return rr
    }
    const fr = new class {
        constructor() {
          this.loadHost = Ir, this.tools = jr
        }
        setHost(rr) {
          this.tools = null === rr ? jr : rr.tools, this.loadHost = null === rr ? Ir : async () => rr
        }
        supports(rr) {
          return this.tools.has(rr)
        }
        async downloadScene(rr, Sr) {
          const Qr = await this.loadHost();
          await Qr.downloadScene(rr, Sr)
        }
        async setAmbientLightIntensity(rr) {
          const Sr = await this.loadHost();
          await Sr.setAmbientLightIntensity(rr)
        }
        async capturePhoto(rr, Sr, Qr) {
          return (await this.loadHost()).capturePhoto(rr, Sr, Qr)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      Er = {
        tools: ar.e,
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
    Zr.I && fr.setHost(Er), (0, Wr.M)((() => {
      fr.setHost(Er)
    }))
  },
  35509: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      e: () => Wr,
      i: () => xr
    });
    var Zr = Qr(1686);

    function Wr(rr) {
      var Sr;
      return {
        ...Ir.store,
        yaw: Ir.store.yaw + (null !== (Sr = Zr.e[rr].previewYaw) && void 0 !== Sr ? Sr : 0)
      }
    }
    const ar = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      jr = {
        ...ar,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Ir = {
        player: ar,
        store: jr,
        showcase: {
          ...jr,
          target: [0, 1.9, 0]
        }
      };

    function fr(rr, Sr) {
      rr instanceof Promise ? rr.then(Sr).catch((rr => {
        console.error("Couldn't open the preview", rr)
      })) : Sr(rr)
    }
    class Er {
      constructor(rr) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height), null !== this.view && rr.show(this.view))
        }))
      }
      show(rr) {
        var Sr;
        this.view = rr, null === (Sr = this.opened) || void 0 === Sr || Sr.show(rr)
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    class pr {
      constructor(rr) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(rr).then((rr => rr.ready)), fr(rr, (rr => {
          this.closed ? rr.close() : (this.opened = rr, null !== this.size && rr.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
      }
      setCosmetic(rr, Sr) {
        var Qr;
        null === (Qr = this.opened) || void 0 === Qr || Qr.setCosmetic(rr, Sr)
      }
      setNametag(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setNametag(rr)
      }
      playEmote(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.playEmote(rr)
      }
      setOrbit(rr) {
        var Sr;
        null === (Sr = this.opened) || void 0 === Sr || Sr.setOrbit(rr)
      }
      resetCamera() {
        var rr;
        null === (rr = this.opened) || void 0 === rr || rr.resetCamera()
      }
      async untilDrawn(rr) {
        var Sr;
        await this.ready, await (null === (Sr = this.opened) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
      }
      resize(rr, Sr) {
        var Qr;
        this.size = {
          width: rr,
          height: Sr
        }, null === (Qr = this.opened) || void 0 === Qr || Qr.resize(rr, Sr)
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.opened) || void 0 === rr || rr.close(), this.opened = null
      }
    }
    const xr = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(rr) {
        this.host = rr
      }
      setDefaultHost(rr) {
        this.makeDefault = rr
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(rr) {
        return new Er(this.current().openMob(rr))
      }
      openPet(rr) {
        return new Er(this.current().openPet(rr))
      }
      openMobLineup(rr) {
        return new Er(this.current().openMobLineup(rr))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(rr, Sr) {
        return new pr(this.current().openCharacter(rr, Sr))
      }
    }
  },
  35505: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr.d,
      f: () => Zr.e,
      j: () => Zr.i
    });
    var Zr = Qr(35509);
    class Wr {
      constructor(rr) {
        this.load = rr, this.loaded = null, this.loading = null
      }
      run(rr) {
        return null !== this.loaded ? rr(this.loaded) : (this.loading ??= this.load().then((rr => (this.loaded = rr, rr)), (rr => {
          throw this.loading = null, rr
        })), this.loading.then(rr))
      }
    }
    class ar {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(311)]).then((() => Qr(42945))))), this.characterScene = new Wr((() => Promise.all([Qr.e(85), Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(113), Qr.e(291), Qr.e(89), Qr.e(86), Qr.e(288), Qr.e(87), Qr.e(88), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(312), Qr.e(177), Qr.e(261), Qr.e(279), Qr.e(293), Qr.e(296), Qr.e(91), Qr.e(225), Qr.e(253), Qr.e(267), Qr.e(112), Qr.e(124), Qr.e(258), Qr.e(142), Qr.e(90), Qr.e(122), Qr.e(280), Qr.e(184)]).then((() => Qr(43048)))))
      }
      openMob(rr) {
        return this.mobScene.run((Sr => Sr.openMobPreview(rr)))
      }
      openPet(rr) {
        return this.mobScene.run((Sr => Sr.openPetPreview(rr)))
      }
      openMobLineup(rr) {
        return this.mobScene.run((Sr => Sr.openMobLineupPreview(rr)))
      }
      openCharacter(rr, Sr) {
        return this.characterScene.run((Qr => Qr.openCharacterPreview(rr, Sr)))
      }
    }
    Zr.i.setDefaultHost((() => new ar))
  },
  7617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      e: () => ar
    });
    var Zr = Qr(43);
    const Wr = "shaderPack";
    async function ar() {
      var rr;
      let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (rr = await Zr.h.getItem(Wr, Sr)) && void 0 !== rr ? rr : null
    }
  },
  35378: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return rr && !Sr
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  35399: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(1371);

    function Wr() {
      var rr, Sr;
      return null !== (rr = null === (Sr = screen.orientation) || void 0 === Sr ? void 0 : Sr.type) && void 0 !== rr ? rr : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const ar = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Wr() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Wr(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Zr.Pt)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const rr of this.resizers) rr()
          }
        }), 1e3)
      }
      heldSizer(rr) {
        let Sr = !1;
        return () => {
          if (Sr && this.isHeld()) return null;
          const Qr = rr();
          return Sr ||= null !== Qr, Qr
        }
      }
      onRelease(rr) {
        return this.resizers.add(rr), () => {
          this.resizers.delete(rr)
        }
      }
    }
  },
  35341: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Yr,
      g: () => Er,
      k: () => tr,
      n: () => Ur
    });
    var Zr = Qr(161),
      Wr = Qr(1321),
      ar = Qr(1262),
      jr = Qr(1187),
      Ir = Qr(1879);
    const fr = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Er(rr) {
      return fr[rr]
    }

    function pr(rr) {
      return (0, Ir.c)(rr) ? "outdated" : rr instanceof Zr.b ? 429 === rr.httpCode ? "busy" : "server" : "offline"
    }

    function xr(rr, Sr, Qr) {
      return (0, jr.postJsonWithMetricsCookiesAndJsonResponse)(`${ar.clientSideServerUrls.indexUrl}${Sr}`, Qr, {
        retries: 3
      }, rr.getMetricsCookies()).catch((rr => (console.error("Bad response from the server when trying to change name:", Sr, rr), {
        outcome: "failed",
        failure: pr(rr)
      })))
    }

    function mr(rr) {
      return "outcome" in rr && "failed" === rr.outcome
    }

    function Nr(rr) {
      return console.error("Error when trying to get with new name from DB", rr), {
        outcome: "refused",
        message: rr
      }
    }
    async function Ur(rr) {
      const Sr = await xr(rr, "/index/name/random", {});
      return mr(Sr) ? Sr : "err" in Sr ? Nr(Sr.err) : (rr.setPlayerName(Sr.name), {
        outcome: "changed",
        name: Sr.name
      })
    }
    async function tr(rr, Sr) {
      const Qr = await xr(rr, "/index/name/update", {
        name: Sr
      });
      return mr(Qr) ? Qr : "err" in Qr ? Nr(Qr.err) : Qr.nameExists ? {
        outcome: "taken"
      } : (rr.setPlayerName(Sr), {
        outcome: "changed",
        name: Sr
      })
    }

    function hr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Zr = 1 === Sr ? 1 : 10 ** (Sr - 1),
        ar = String(Zr + Math.floor(Qr() * (10 ** Sr - Zr)));
      return `${rr.slice(0,Wr.h-Sr)}${ar}`
    }
    const zr = [1, 2, 3, 4];
    async function Yr(rr, Sr) {
      const Qr = await tr(rr, Sr);
      if ("taken" !== Qr.outcome) return Qr;
      for (const Zr of zr) {
        const Qr = hr(Sr, Zr),
          Wr = await tr(rr, Qr);
        if ("taken" !== Wr.outcome) return Wr
      }
      return {
        outcome: "taken"
      }
    }
  },
  35359: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      g: () => Wr
    });
    let Zr = null;

    function Wr() {
      Zr = performance.now()
    }

    function ar() {
      return Zr
    }
  },
  35381: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => fr
    });
    var Zr = Qr(26);
    const Wr = 24,
      ar = "farNametags",
      jr = 1e5;

    function Ir() {
      var rr;
      return null === (rr = Zr.c.get("showDistantNametags")) || void 0 === rr || rr
    }

    function fr() {
      var rr;
      return null !== (rr = function() {
        const rr = new URLSearchParams(window.location.search).get(ar),
          Sr = null === rr || "" === rr ? NaN : Number(rr);
        return Number.isFinite(Sr) && Sr >= 0 ? Math.min(Sr, jr) : null
      }()) && void 0 !== rr ? rr : Ir() ? 0 : Wr
    }
  },
  35490: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      f: () => pr
    });
    const Zr = .01,
      Wr = .08,
      ar = .01,
      jr = 5,
      Ir = 100,
      fr = 40,
      Er = 800;

    function pr(rr) {
      const {
        canvas: Sr
      } = rr;
      let Qr = null;
      const pr = rr => {
          var Zr;
          Qr = {
            pointer: rr.pointerId,
            x: rr.clientX,
            y: rr.clientY
          }, null === (Zr = Sr.setPointerCapture) || void 0 === Zr || Zr.call(Sr, rr.pointerId)
        },
        xr = Sr => {
          var Wr;
          const jr = rr.orbit;
          if ((null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.pointer) !== Sr.pointerId || null === jr) return;
          const Ir = Sr.clientX - Qr.x,
            fr = Sr.clientY - Qr.y;
          Qr = {
            ...Qr,
            x: Sr.clientX,
            y: Sr.clientY
          }, rr.setOrbit({
            alpha: jr.alpha - Ir * Zr,
            beta: Math.min(Math.PI - ar, Math.max(ar, jr.beta - fr * Zr)),
            radius: jr.radius
          })
        },
        mr = rr => {
          var Sr;
          (null === (Sr = Qr) || void 0 === Sr ? void 0 : Sr.pointer) === rr.pointerId && (Qr = null)
        },
        Nr = Sr => {
          const Qr = rr.orbit;
          if (null === Qr) return;
          Sr.preventDefault();
          const Zr = Sr.deltaY * (Sr.deltaMode === WheelEvent.DOM_DELTA_LINE ? fr : Sr.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Er : 1),
            ar = Math.min(Ir, Math.max(jr, Qr.radius + Zr * Wr));
          rr.setOrbit({
            ...Qr,
            radius: ar
          })
        };
      return Sr.style.touchAction = "none", Sr.addEventListener("pointerdown", pr), Sr.addEventListener("pointermove", xr), Sr.addEventListener("pointerup", mr), Sr.addEventListener("pointercancel", mr), Sr.addEventListener("wheel", Nr, {
        passive: !1
      }), () => {
        Sr.removeEventListener("pointerdown", pr), Sr.removeEventListener("pointermove", xr), Sr.removeEventListener("pointerup", mr), Sr.removeEventListener("pointercancel", mr), Sr.removeEventListener("wheel", Nr)
      }
    }
  },
  35408: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er,
      h: () => xr,
      l: () => pr
    });
    var Zr = Qr(285),
      Wr = Qr(109),
      ar = Qr(135),
      jr = Qr(129),
      Ir = Qr(705);
    const fr = new Set(["mali_bifrost"]);

    function Er() {
      if (Ir.h) return;
      const rr = (0, Wr.pageOperatingSystem)();
      if ("android" !== rr && "windows" !== rr || (0, Ir.d)("webgl_default")) return;
      if ("windows" === rr) return rr => "qualcomm" === (0, Wr.normaliseGpuVendor)((0, jr.c)(rr).vendor);
      const Sr = (0, ar.q)(),
        Qr = null === Sr ? (0, Zr.p)() : (0, Zr.g)(Sr.vendor, Sr.renderer);
      return null !== Qr && fr.has(Qr) ? rr => (0, Zr.l)((0, jr.c)(rr).vendor, Qr) : void 0
    }

    function pr(rr, Sr) {
      return rr ? () => !0 : Sr()
    }
    async function xr(rr) {
      try {
        const Sr = pr(rr, Er),
          Qr = navigator.gpu;
        if (void 0 === Sr || void 0 === Qr) return !1;
        const Zr = await (0, jr.k)(Qr, {
          seed: !1,
          compatibility: Sr
        });
        return "string" !== typeof Zr && Zr.compatibility && !(0, jr.f)(Zr.adapter)
      } catch (Sr) {
        return console.error("WebGPU compatibility-mode adapter request failed.", Sr), !1
      }
    }
  },
  35488: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => jr
    });
    const Zr = [{
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

    function Wr(rr) {
      let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof rr) {
        if (!Number.isFinite(rr)) return "0";
        if (Math.abs(rr) < 100) {
          const Sr = rr < 0 ? "-" : "",
            Qr = Math.abs(rr);
          return Qr >= 10 ? `${Sr}${Qr.toFixed(1).replace(/\.0$/,"")}` : `${Sr}${Qr.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Sr = BigInt(Math.floor(rr))
      } else Sr = rr;
      const Wr = Sr < 0n ? -Sr : Sr,
        ar = Sr < 0n ? "-" : "",
        jr = Wr.toString();
      if (jr.length <= Qr) return `${ar}${jr}`;
      const Ir = 3 * Math.floor((jr.length - 1) / 3);
      if (Ir < 3) return `${ar}${jr}`;
      if (Ir > 3 * Zr.length) {
        const rr = jr[0],
          Sr = jr.slice(1, 3).replace(/0+$/, "");
        return `${ar}${Sr?`${rr}.${Sr}`:rr}e${jr.length-1}`
      }
      const {
        threshold: fr,
        suffix: Er
      } = Zr[Zr.length - Ir / 3], pr = Wr / fr, xr = Number(1000n * (Wr % fr) / fr), mr = Number(pr) + xr / 1e3;
      let Nr;
      return Nr = mr >= 100 ? Math.floor(mr).toString() : mr >= 10 ? mr.toFixed(1).replace(/\.0$/, "") : mr.toFixed(2).replace(/\.?0+$/, ""), `${ar}${Nr}${Er}`
    }
    const ar = Zr.map((rr => {
      let {
        threshold: Sr,
        suffix: Qr
      } = rr;
      return {
        threshold: Number(Sr),
        suffix: Qr
      }
    })).filter((rr => {
      let {
        threshold: Sr
      } = rr;
      return Number.isFinite(Sr)
    }));

    function jr(rr) {
      const Sr = Math.abs(rr),
        Qr = rr < 0 ? "-" : "";
      for (const {
          threshold: Zr,
          suffix: Wr
        }
        of ar)
        if (Sr >= Zr) {
          const rr = Sr / Zr;
          if (rr >= 1e3) return `${Qr}${Sr.toExponential(2).replace("e+","e")}`;
          let ar;
          return ar = rr >= 100 ? Math.floor(rr).toString() : rr >= 10 ? rr.toFixed(1).replace(/\.0$/, "") : rr.toFixed(2).replace(/\.?0+$/, ""), `${Qr}${ar}${Wr}`
        } return `${Qr}${Sr}`
    }
  },
  35459: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      f: () => mr,
      g: () => xr,
      j: () => jr,
      l: () => Er,
      p: () => fr
    });
    var Zr = Qr(379);
    const Wr = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      ar = {
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

    function jr(rr) {
      var Sr;
      return null !== (Sr = ar[rr]) && void 0 !== Sr ? Sr : {
        translationKey: ""
      }
    }
    const Ir = {
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

    function fr(rr) {
      return Wr.includes(rr)
    }

    function Er(rr) {
      var Sr;
      return !0 === (null === rr || void 0 === rr || null === (Sr = rr.customAttributes) || void 0 === Sr ? void 0 : Sr.cannotEnchant)
    }

    function pr(rr, Sr) {
      const {
        max: Qr
      } = Ir[rr].at(-1);
      return Sr <= Qr
    }

    function xr(rr) {
      const Sr = Math.sin(rr / 80),
        Qr = rr => {
          if (rr <= 0) return 0;
          if (rr > 1) return 1;
          let Sr = 0;
          const Qr = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Zr = 0; Zr < Qr.length; Zr++) {
            Sr += (Zr % 2 === 0 ? 1 : -1) * Qr[Zr] * Math.pow(rr, 2 + Zr) / (2 + Zr)
          }
          return 72 * Sr
        },
        Zr = .3 - .78 * Sr,
        Wr = .5 - .78 * Sr,
        ar = .6 - .7 * Sr,
        jr = .8 - .6 * Sr;
      let Ir = Qr(Zr),
        fr = Qr(Wr) - Ir,
        Er = Qr(ar) - fr - Ir,
        pr = Qr(jr) - Er - fr - Ir;
      Zr < .041 && (fr /= 1 - Ir, Er /= 1 - Ir, pr /= 1 - Ir, Ir = 0), Wr < .041 && (Ir /= 1 - fr, Er /= 1 - fr, pr /= 1 - fr, fr = 0), ar < .041 && (Ir /= 1 - Er, fr /= 1 - Er, pr /= 1 - Er, Er = 0), jr < .041 && (Ir /= 1 - pr, fr /= 1 - pr, Er /= 1 - pr, pr = 0);
      return {
        commonProb: Ir,
        uncommonProb: fr,
        rareProb: Er,
        epicProb: pr,
        legendaryProb: 1 - (pr + Er + fr + Ir)
      }
    }

    function mr(rr, Sr) {
      const {
        min: Qr,
        max: Wr
      } = Ir[rr][Sr], ar = Zr.b.sampleUniformIntDistribution(Qr, Wr, "includeMax");
      return {
        ...xr(ar),
        level: ar
      }
    }
  },
  35432: () => {},
  35525: () => {},
  13750: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14956: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16388: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16909: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);