export const id = 92;
export const ids = [92, 220, 221];
export const modules = {
  35204: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      EverythingMenu: () => mI
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1259),
      gb = Mb(1475),
      lb = Mb(2276),
      Lb = Mb(1616),
      Ib = Mb(1168),
      Ob = Mb(1364);

    function Ub(bb) {
      let {
        items: wb,
        link: Mb,
        onClick: eb,
        selectedItemId: Hb,
        className: Ub,
        padStartsOnTab: tb = !0
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), Eb = (0, Ib.h)(), Fb = [];
      for (const pb of wb) {
        var Bb;
        const bb = Fb[Fb.length - 1];
        var sb;
        if (bb && bb.title === (null !== (Bb = pb.section) && void 0 !== Bb ? Bb : null)) bb.items.push(pb);
        else Fb.push({
          title: null !== (sb = pb.section) && void 0 !== sb ? sb : null,
          items: [pb]
        })
      }
      return (0, Ob.jsxs)("div", {
        className: pb()("MenuSideBarBody", Ub),
        "data-pad-tabs": "2",
        children: [Fb.map(((bb, wb) => {
          var Mb;
          return (0, Ob.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [bb.title && (0, Ob.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Cb(bb.title)
            }), bb.items.map((bb => {
              var wb;
              const Mb = !!bb.iconElement || !!bb.faIcon;
              return (0, Ob.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Hb === bb.id ? "true" : void 0,
                "data-pad-default-focus": tb && Hb === bb.id || void 0,
                className: pb()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Hb === bb.id
                }),
                onClick: () => {
                  eb(bb.id)
                },
                children: [Mb && (0, Ob.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (wb = bb.iconElement) && void 0 !== wb ? wb : (0, Ob.jsx)(gb.b, {
                    name: bb.faIcon
                  })
                }), (!Eb || !Mb) && (0, Ob.jsx)("div", {
                  children: Cb(bb.title)
                }), bb.redDot && (0, Ob.jsx)(lb.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, bb.id)
            }))]
          }, null !== (Mb = bb.title) && void 0 !== Mb ? Mb : wb)
        })), Mb && (0, Ob.jsxs)("div", {
          ...(0, Lb.bb)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: Mb.onClick,
          children: [(0, Ob.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Ob.jsx)(gb.b, {
              name: Mb.faIcon
            })
          }), (0, Ob.jsx)("div", {
            children: Cb(Mb.title)
          }), (0, Ob.jsx)(gb.b, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var tb = Mb(3082),
      Cb = Mb(1179),
      Eb = Mb(3503),
      Fb = Mb(4472),
      Bb = Mb(110),
      sb = Mb(2142),
      mb = Mb(3242),
      hb = Mb(3251),
      zb = Mb(1876),
      Xb = Mb(1468),
      xb = Mb(6050),
      jb = Mb(26),
      Kb = Mb(35213);

    function rb(bb) {
      let {
        setApplySettingsCallback: wb
      } = bb;
      const {
        clientEscMenuOptions: Mb
      } = (0, jb.o)(["clientEscMenuOptions"]), [Hb, pb] = (0, eb.useState)(!1), [Vb, gb] = (0, eb.useState)(!1), [lb, Ib] = (0, eb.useState)(6400), [Ub, tb] = (0, eb.useState)(3600), [Cb, Eb] = (0, eb.useState)(!1), [Fb, Bb] = (0, eb.useState)(!1);

      function sb(bb) {
        const wb = "screenshot" === bb ? gb : pb;
        wb(!0);
        const Mb = Cb ? "normals" : Fb ? "depth" : null;
        Kb.devTools.downloadScene(bb, {
          width: lb,
          height: Ub,
          colouring: Mb
        }).catch((bb => {
          console.error("Couldn't download the scene", bb)
        })).finally((() => {
          wb(!1)
        }))
      }
      return (0, Ob.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Ob.jsx)(xb.d, {
          label: "Disable Ambient Occlusion",
          checked: Mb.disableAmbientOcclusion,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              disableAmbientOcclusion: bb
            }), wb((() => xb.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Kb.devTools.supports("ambientLight") && (0, Ob.jsx)(xb.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Mb.ambientLightIntensity,
          onChange: bb => {
            Kb.devTools.setAmbientLightIntensity(bb).then((() => {
              jb.c.setClientEscMenuOptions({
                ambientLightIntensity: bb
              })
            })).catch((bb => {
              console.error("Couldn't set the ambient light", bb)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Kb.devTools.supports("weaponRaycasts") && (0, Ob.jsx)(xb.d, {
          label: "Show Weapon Raycasts",
          checked: Mb.showWeaponRaycasts,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              showWeaponRaycasts: bb
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Kb.devTools.supports("sceneDownload") && (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ob.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Ob.jsx)(xb.d, {
              label: "Apply normal-based coloring",
              checked: Cb,
              onClick: bb => {
                Eb(bb), bb && Bb(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Ob.jsx)(xb.d, {
              label: "Apply depth-based coloring",
              checked: Fb,
              onClick: bb => {
                Bb(bb), bb && Eb(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Ob.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Ob.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Ob.jsx)(zb.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, wb) => {
                  const Mb = parseInt(bb) || 6400;
                  Ib(Mb)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: lb.toString()
              }), (0, Ob.jsx)("span", {
                children: "X"
              }), (0, Ob.jsx)(zb.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, wb) => {
                  const Mb = parseInt(bb) || 3600;
                  tb(Mb)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Ub.toString()
              })]
            }), (0, Ob.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Ob.jsxs)(Lb.f, {
                onClick: () => {
                  sb("screenshot")
                },
                disabled: Vb,
                children: [Vb && (0, Ob.jsx)(Xb.c, {}), "Download Screenshot"]
              }), (0, Ob.jsxs)(Lb.f, {
                onClick: () => {
                  sb("glb")
                },
                disabled: Hb,
                children: [Hb && (0, Ob.jsx)(Xb.c, {}), "Download GLB"]
              })]
            })]
          }), (0, Ob.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Rb = Mb(160),
      Db = Mb(1186),
      cb = Mb(35223),
      Yb = Mb(4279),
      Zb = Mb(1686),
      fb = Mb(1333),
      Ab = Mb(1309),
      Wb = Mb(2237),
      Jb = Mb(1677),
      Sb = Mb(382),
      Nb = Mb(639),
      vb = Mb(3357),
      Qb = Mb(3366);
    const Gb = "store:retiredRankEnds";

    function qb(bb) {
      let {
        until: wb,
        className: Mb
      } = bb;
      const {
        t: eb,
        selectedLanguage: Hb
      } = (0, Vb.C)(), pb = new Date(wb).toLocaleDateString((0, Vb.l)(Hb.code, Gb), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, Ob.jsx)("span", {
        className: Mb,
        children: eb(Gb, {
          date: pb
        })
      })
    }
    var ab = Mb(3263),
      ib = Mb(4323),
      ub = Mb(4317),
      db = Mb(236),
      Pb = Mb(1827),
      nb = Mb(1321),
      yb = Mb(4335);

    function ob(bb, wb, Mb) {
      const eb = Nb.j[(0, Nb.g)(Nb.j, wb)],
        Hb = void 0 === eb ? void 0 : (0, db.c)(bb.entitlements, eb.entitlementId);
      return void 0 === Hb || null === Hb.expiresAt || (0, ub.f)(Hb) <= Mb ? null : Hb.willRenew && null === Hb.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(Hb.expiresAt, Mb)
      } : {
        renews: !1,
        at: (0, ub.f)(Hb)
      }
    }
    var Tb = Mb(4300),
      kb = Mb(4308);
    const bw = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function ww(bb) {
      return bb instanceof ib.d && "storeUnavailable" === bb.code ? (console.warn("Billing: the store didn't take a subscription change:", bb), "store:subscriptionStoreUnavailable") : bb instanceof ib.d && "subscriptionActionUnavailable" === bb.code ? (console.warn("Billing: a subscription action billing no longer offers:", bb), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", bb), "store:subscriptionChangeFailed")
    }
    async function Mw() {
      try {
        var bb;
        const {
          offering: wb
        } = await (0, kb.getBillingClient)().getOfferings((0, vb.q)(Nb.d.id).placementId);
        return null !== (bb = null === wb || void 0 === wb ? void 0 : wb.packages.find(Tb.isPricedPackage)) && void 0 !== bb ? bb : null
      } catch (wb) {
        return console.warn("Billing: loading the rank plan's price failed:", wb), null
      }
    }

    function ew(bb) {
      const {
        userContext: wb
      } = (0, Cb.e)(), {
        superRankInfo: Mb
      } = wb, Hb = (0, ab.usePurchasesAllowed)(), pb = (0, Sb.Mc)(Mb), Vb = bb && Hb && (pb || wb.ranksMayChange), [gb, lb] = (0, eb.useState)(null), [Lb, Ib] = (0, eb.useState)(!1), [Ob, Ub] = (0, eb.useState)(!1), [tb, Eb] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        if (!Vb) return;
        let bb = !1;
        const Mb = () => {
          Promise.all([(0, kb.getBillingClient)().getSubscriptions(), Mw()]).then((Mb => {
            let [eb, Hb] = Mb;
            bb || (lb({
              for: wb,
              answer: eb,
              pkg: Hb
            }), Ib(!1))
          }), (wb => {
            console.error("Billing: loading the player's subscriptions failed:", wb), bb || Ib(!0)
          }))
        };
        Mb();
        const eb = Pb.e.addRefetchListener("billing", Mb);
        return () => {
          bb = !0, eb()
        }
      }), [Vb, wb]);
      const Fb = Vb && pb && null !== gb && gb.for === wb ? function(bb, wb, Mb, eb) {
        var Hb;
        const {
          customerInfo: pb,
          actions: Vb
        } = bb, gb = Nb.j[(0, Nb.g)(Nb.j, wb)], lb = void 0 === gb ? void 0 : (0, db.c)(pb.entitlements, gb.entitlementId), Lb = ob(pb, wb, eb);
        if (void 0 === lb || null === Lb) return null;
        const Ib = Object.entries(pb.subscriptions).find((bb => {
          let [, wb] = bb;
          return wb.productId === lb.productId && wb.store === lb.store && !(0, ub.m)(wb.status)
        }));
        if (void 0 === Ib) return null;
        const [Ob, Ub] = Ib, tb = (null === Mb || void 0 === Mb ? void 0 : Mb.productId) === Ub.productId && Ub.store === (0, ab.getBillingStore)();
        return {
          key: Ob,
          tierId: wb,
          info: Ub,
          actions: null !== (Hb = (0, db.c)(Vb, Ob)) && void 0 !== Hb ? Hb : bw,
          date: Lb,
          pkg: tb ? Mb : null
        }
      }(gb.answer, Mb.tier, gb.pkg, Date.now()) : null;
      return {
        subscription: Fb,
        loadFailed: Vb && pb && Lb,
        busy: Ob,
        errorKey: tb,
        change: async function(bb) {
          if (null === Fb || Ob) return;
          Ub(!0), Eb(null);
          const Mb = (0, kb.getBillingClient)();
          try {
            const eb = await ("cancel" === bb ? Mb.cancelSubscription(Fb.key) : Mb.resumeSubscription(Fb.key));
            lb({
              for: wb,
              answer: eb,
              pkg: Fb.pkg
            }), (0, yb.e)()
          } catch (eb) {
            Eb(ww(eb))
          } finally {
            Ub(!1)
          }
        },
        openManagePage: async function() {
          if (null === Fb || Ob) return;
          const bb = window.open("", "_blank");
          Ub(!0), Eb(null);
          try {
            const wb = await (0, kb.getBillingClient)().subscriptionManagementUrl(Fb.key, nb.g.get().getCurrentLanguageCode());
            null === bb ? window.open(wb, "_blank", "noopener") : (bb.opener = null, bb.location.href = wb)
          } catch (wb) {
            null === bb || void 0 === bb || bb.close(), Eb(ww(wb))
          } finally {
            Ub(!1)
          }
        }
      }
    }
    var Hw = Mb(1504),
      pw = Mb(4354);

    function Vw(bb, wb) {
      return new Date(bb).toLocaleDateString(wb, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function gw(bb) {
      let {
        showing: wb,
        className: Mb
      } = bb;
      const {
        t: eb,
        selectedLanguage: Hb
      } = (0, Vb.C)(), {
        subscription: lb,
        loadFailed: Ib,
        busy: Ub,
        errorKey: tb,
        change: Cb,
        openManagePage: Eb
      } = ew(wb);
      if (Ib) return (0, Ob.jsx)("div", {
        className: pb()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", Mb),
        children: eb("store:subscriptionLoadFailed")
      });
      if (null === lb) return null;
      const {
        date: Fb,
        info: Bb,
        actions: sb,
        pkg: mb
      } = lb, hb = Fb.renews ? "store:renewsOn" : "store:endsOn", zb = Vw(Fb.at, (0, Vb.l)(Hb.code, hb)), Xb = eb((0, vb.q)(lb.tierId).nameKey), xb = null !== Bb.billingIssueDetectedAt;
      return (0, Ob.jsxs)("div", {
        className: pb()("RankSubscriptionManage", Mb),
        children: [(0, Ob.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [eb(hb, {
            date: zb
          }), Fb.renews && null !== mb && (0, ab.subscriptionsSold)() && (0, Ob.jsxs)(Ob.Fragment, {
            children: [" \xb7 ", eb("store:pricePerMonth", {
              price: (0, pw.f)(mb)
            })]
          })]
        }), xb && (0, Ob.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, Ob.jsx)(gb.b, {
            name: "triangle-exclamation"
          }), " ", eb("store:paymentFailing", {
            rank: Xb
          })]
        }), (0, Ob.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [sb.manage && (0, Ob.jsx)(Lb.j, {
            disabled: Ub,
            onClick: () => {
              Eb()
            },
            children: eb(xb ? "store:updatePayment" : "payments:manageSubscription")
          }), sb.resume && (0, Ob.jsx)(Lb.f, {
            loading: Ub,
            onClick: () => {
              Cb("resume")
            },
            children: eb("store:resumeSubscription")
          }), sb.cancel && (0, Ob.jsx)(Lb.Q, {
            loading: Ub,
            onClick: () => {
              (async function(bb, wb, Mb) {
                const eb = Date.now() >= bb.info.currentPeriodEnd;
                return !0 === await Hw.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: eb ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: wb
                    },
                    subtitle: {
                      rank: wb,
                      date: Mb
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(lb, Xb, Vw(Bb.currentPeriodEnd, (0, Vb.l)(Hb.code, "store:cancelKeepsUntil"))).then((bb => {
                bb && Cb("cancel")
              }))
            },
            children: eb("store:cancelSubscription")
          })]
        }), null !== tb && (0, Ob.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: eb(tb)
        })]
      })
    }
    var lw = Mb(3257),
      Lw = Mb(3898),
      Iw = Mb(1848);
    async function Ow() {
      try {
        return function(bb) {
          const wb = new Map;
          for (const {
              store: Mb,
              status: eb,
              autoRenewStatus: Hb,
              managementUrl: pb
            }
            of Object.values(bb.subscriptions)) !(0, ub.j)(Mb) || (0, ub.m)(eb) || "willNotRenew" === Hb || wb.has(Mb) || wb.set(Mb, null !== pb && void 0 !== pb ? pb : ub.n[Mb]);
          return Array.from(wb, (bb => {
            let [wb, Mb] = bb;
            return {
              store: wb,
              managementUrl: Mb
            }
          }))
        }(await (0, Iw.n)((0, kb.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (bb) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", bb), null
      }
    }

    function Uw(bb) {
      const {
        t: wb,
        selectedLanguage: Mb
      } = (0, Vb.C)(), {
        userContext: Hb
      } = (0, Cb.e)(), {
        superRankInfo: pb
      } = Hb, gb = (0, ab.usePurchasesAllowed)(), lb = bb && ((0, Sb.Mc)(pb) || Hb.ranksMayChange) && gb, {
        accountId: Lb,
        data: Ib
      } = (0, Lw.j)(yb.d, lb);
      if ((0, eb.useEffect)((() => {
          if (lb) return yb.d.watchAccount(), Pb.e.addRefetchListener("billing", (bb => {
            "reconnected" === bb ? yb.d.refreshAfterReconnect() : yb.d.refresh()
          }))
        }), [lb]), !lb || !(0, Sb.Mc)(pb) || null === Ib || Lb !== Hb.whamm) return null;
      const Ob = ob(Ib, pb.tier, Date.now());
      if (null === Ob) return null;
      const Ub = Ob.renews ? "store:renewsOn" : "store:endsOn",
        tb = (0, Vb.e)(Mb.code, Ub, Ob.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        Eb = (0, ab.getBillingStore)(),
        Fb = null !== Eb && (0, ub.j)(Eb) ? function(bb, wb) {
          var Mb;
          const eb = Object.values(bb.subscriptions).find((bb => bb.store === wb && !(0, ub.m)(bb.status)));
          return void 0 === eb ? null : null !== (Mb = eb.managementUrl) && void 0 !== Mb ? Mb : ub.n[wb]
        }(Ib, Eb) : null;
      return {
        text: wb(Ub, {
          date: tb
        }),
        manageUrl: Fb
      }
    }
    var tw = Mb(1516),
      Cw = Mb(1289),
      Ew = Mb(5789),
      Fw = Mb(1648),
      Bw = Mb(5054),
      sw = Mb(3449);

    function mw(bb) {
      let {
        showing: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        data: eb,
        failed: Hb
      } = (0, Lw.j)(Bw.h, wb);
      return 0 === (null === eb || void 0 === eb ? void 0 : eb.length) || null === eb && !Hb ? null : (0, Ob.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Ob.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Mb("paymentHistory:title")
        }), null === eb && Hb && (0, Ob.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Mb("paymentHistory:loadFailed")
        }), null !== eb && (0, Ob.jsx)("ul", {
          className: "PaymentHistoryList",
          children: eb.map((bb => (0, Ob.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Ob.jsx)(sw.d, {
              entry: bb
            }), (0, Ob.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Ob.jsx)("div", {
                children: (0, sw.k)(Mb, bb)
              }), (0, Ob.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(bb.at).toLocaleDateString(), "number" === typeof bb.orderId && ` \xb7 ${Mb("paymentHistory:order",{orderId:bb.orderId})}`]
              })]
            })]
          }, (0, Bw.e)(bb))))
        })]
      })
    }
    var hw = Mb(3270),
      zw = Mb(2341);

    function Xw() {
      (0, zw.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function xw(bb) {
      let {
        status: wb
      } = bb;
      switch (wb) {
        case "restored":
          return (0, yb.e)(), {
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

    function jw() {
      const bb = (0, kb.usePageBillingClient)(),
        {
          userContext: wb
        } = (0, Cb.e)(),
        [Mb, Hb] = (0, eb.useState)(!1),
        [pb, Vb] = (0, eb.useState)(null);
      return {
        restoring: Mb,
        notice: pb,
        restore: () => {
          wb.isLoggedIn() ? (Hb(!0), Vb(null), bb.restorePurchases().then(xw, (bb => bb instanceof ib.d && "loginRequired" === bb.code ? (Xw(), null) : function(bb) {
            return bb instanceof ib.d && "storeBusy" === bb.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", bb), (0, yb.e)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(bb))).then(Vb).finally((() => {
            Hb(!1)
          }))) : Xw()
        }
      }
    }

    function Kw(bb) {
      let {
        restoring: wb,
        notice: Mb,
        restore: Hb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)(), lb = (0, ab.usePurchasesAllowed)(), Ib = (0, ab.getBillingStore)(), Ub = (0, eb.useRef)(null);
      return (0, eb.useEffect)((() => {
        var bb;
        null === (bb = Ub.current) || void 0 === bb || bb.scrollIntoView({
          block: "nearest"
        })
      }), [Mb]), lb && (0, hw.c)(Ib) ? (0, Ob.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, Ob.jsx)(Lb.j, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: wb,
          onClick: Hb,
          children: gb("payments:restorePurchases")
        }), null !== Mb && (0, Ob.jsx)("div", {
          ref: Ub,
          className: pb()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: Mb.failed
          }),
          children: gb(Mb.key)
        })]
      }) : null
    }
    var rw = Mb(2101),
      Rw = Mb(1319),
      Dw = Mb(1271),
      Yw = Mb(1436),
      Zw = Mb(366),
      fw = Mb(3658);
    const Aw = {
      appStore: {
        name: "App Store",
        ...Zw.Xb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Zw.Xb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Zw.Xb.discord
      }
    };

    function Ww(bb) {
      let {
        warning: wb,
        subscriptions: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return null !== Mb && 0 === Mb.length ? (0, Ob.jsx)(Ob.Fragment, {
        children: eb(wb)
      }) : (0, Ob.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [eb(wb), null === Mb && (0, Ob.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: eb("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Mb && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: eb("auth:deleteAccountStoreSubscriptions")
          }), (0, Ob.jsx)(fw.d, {
            className: "DeleteAccountSubtitleLinks",
            links: Mb.map((bb => {
              let {
                store: wb,
                managementUrl: Mb
              } = bb;
              return {
                ...Aw[wb],
                url: Mb
              }
            }))
          })]
        })]
      })
    }
    var Jw = Mb(5518);

    function Sw(bb) {
      let {
        showing: wb
      } = bb;
      const {
        userContext: Mb,
        isUserContextUpdating: Hb
      } = (0, Cb.e)(), {
        t: pb
      } = (0, Vb.C)(), [gb, lb] = (0, eb.useState)(!1), [Ib, Ub] = (0, eb.useState)(null), tb = (0, eb.useRef)(wb);
      (0, eb.useEffect)((() => (tb.current = wb, () => {
        tb.current = !1
      })), [wb]);
      const Eb = Hb || gb;
      return (0, Ob.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Ob.jsxs)(Lb.Q, {
          onClick: async function() {
            if (!gb) {
              lb(!0);
              try {
                const bb = await async function() {
                  const [bb, wb] = await Promise.all([(0, rw.d)(Mb.availableUserContextTypes) ? Ow() : [], vw(Mb)]);
                  if (!tb.current) return Rw.d.ok();
                  const eb = (0, fb.b)(Mb.getPlayerName(), !Bb.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Hw.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: eb
                        }
                      },
                      subtitle: (0, Ob.jsx)(Ww, {
                        warning: Nw(Mb.isLoggedIn(), wb),
                        subscriptions: bb
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: wb ? pb("auth:deleteAccountTypedConfirm", {
                        playerName: eb
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Rw.d.ok();
                  const Hb = await (0, Db.postJsonWithMetricsCookiesAndJsonResponse)(`${Dw.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: jb.c.get("gameState")
                  }, {
                    retries: 3
                  }, Mb.getMetricsCookies());
                  if (Hb.error) return Rw.d.error(Hb.error);
                  (0, Rb.isDiscordClient)() && (await Yw.i.discordActivity()).exit("User deleted their account");
                  return Jw.e.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, Db.forgetStoredGuestAccount)(Mb.whamm), (0, Db.forceGlobalSignOut)(!0), Rw.d.ok()
                }(), wb = bb.isError() ? bb.asError().message : null;
                Ub(wb)
              } catch (bb) {
                console.error("Failed to delete account:", bb), Ub(pb("auth:genericDeleteAccountError"))
              }
              lb(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Eb,
          children: [Eb && (0, Ob.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Ob.jsx)(Xb.c, {})
          }), pb("auth:deleteAccount")]
        }), Ib && (0, Ob.jsx)("div", {
          className: "DeleteAccountError",
          children: Ib
        })]
      })
    }

    function Nw(bb, wb) {
      return (0, Rb.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : bb ? "auth:deleteAccountLossWarning" : wb ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function vw(bb) {
      try {
        const {
          accountCreatedAt: wb
        } = await (0, Iw.n)(Jb.e.getPlayerProfile(bb, {
          lowerCaseName: bb.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== wb && Date.now() - wb >= 7 * Sb.l
      } catch (wb) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", wb), !0
      }
    }
    var Qw = Mb(4983),
      Gw = Mb(4994),
      qw = Mb(4988);

    function aw(bb) {
      let {
        showing: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        data: eb,
        failed: Hb
      } = (0, Lw.j)(Qw.c, wb), pb = null === eb ? null : (0, Qw.e)(eb);
      return (0, Ob.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Ob.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Mb("settingsMenu:blockedAndIgnoredPlayers")
        }), null === pb && !Hb && (0, Ob.jsx)(Xb.c, {}), null === pb && Hb && (0, Ob.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Mb("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Ob.jsx)(Lb.f, {
            className: "SmallTextLight",
            onClick: () => {
              Qw.c.refresh()
            },
            children: Mb("general:tryAgain")
          })]
        }), 0 === (null === pb || void 0 === pb ? void 0 : pb.length) && (0, Ob.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Mb("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== pb && pb.length > 0 && (0, Ob.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: pb.map((bb => {
            let {
              name: wb,
              exclusion: eb
            } = bb;
            const Hb = qw.f[eb];
            return (0, Ob.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Ob.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: wb
              }), (0, Ob.jsx)(Lb.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Gw.g)(Hb, wb, {
                    chatMessage: null
                  })
                },
                children: Mb(qw.g[Hb].text)
              })]
            }, wb)
          }))
        })]
      })
    }
    const iw = (0, eb.memo)((function(bb) {
      var wb, Mb;
      let {
        showing: Hb,
        inGame: lb
      } = bb;
      const {
        t: Ib,
        selectedLanguage: Ub
      } = (0, Vb.C)(), {
        hideSocialLocationFrom: Eb
      } = (0, jb.o)(["hideSocialLocationFrom"]), Fb = (0, ab.usePurchasesAllowed)(), sb = jw(), mb = (0, tb.e)(), {
        userContext: hb,
        isUserContextUpdating: Kb
      } = (0, Cb.e)(), [rb, Gb] = (0, eb.useState)(null !== (wb = hb.getPlayerName()) && void 0 !== wb ? wb : ""), [ib, ub] = (0, eb.useState)(null), {
        purchasing: db,
        outcome: Pb,
        purchase: nb
      } = (0, Yb.e)("/super-rank-welcome"), yb = (0, Sb.rc)((0, Vb.l)(Ub.code, "general:timeLeft"), hb.superRankInfo), ob = null === (Mb = Uw(Hb)) || void 0 === Mb ? void 0 : Mb.text, Tb = Date.now(), kb = (0, Qb.g)(Tb), bw = (0, vb.v)(Tb), ww = (0, Qb.f)(Tb), Mw = (0, vb.q)(kb.id), ew = ww && (0, Ob.jsxs)(Lb.p, {
        className: "AccountSettingsSuperRankProlong",
        onClick: () => {
          (0, lw.r)({
            mode: "gift",
            source: "accountSettings",
            openItem: "superRank"
          })
        },
        children: [(0, Ob.jsx)(gb.b, {
          name: "bolt"
        }), Ib(Mw.giftKey)]
      }), Hw = (0, vb.n)(hb.getPlayerRanks(), Tb), pw = (0, vb.r)(hb.superRankInfo, Tb), Vw = kb.id !== Nb.n.id, Lw = Vw && !Hw && (0, Sb.Mc)(hb.superRankInfo) ? hb.superRankInfo : null, Iw = yb ? Ib("general:timeLeft", {
        time: yb
      }) : !(Vw && Fb) && ob, [Ow, Bw] = (0, eb.useState)(!1), [sw, hw] = (0, eb.useState)(!1), zw = (0, eb.useRef)(null), Xw = (0, eb.useRef)(null), xw = (0, Wb.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), rw = null === xw, Rw = null !== xw && void 0 !== xw ? xw : [], Dw = hb !== Db.NULL_USER_CONTEXT && !hb.isLoggedIn(), Yw = Dw && 0 !== (null === xw || void 0 === xw ? void 0 : xw.length), [Zw, fw] = (0, eb.useState)([]), [Aw, Ww] = (0, eb.useState)(!1), Jw = hb.playerHasRank("youtuber"), Nw = (0, eb.useCallback)((() => Jb.e.getPlayerProfile(hb, {
        lowerCaseName: hb.getPlayerName().toLowerCase()
      }).then((bb => {
        fw(bb.socialLinks)
      })).catch((bb => {
        console.error("Failed to refresh social links", bb)
      }))), [hb]);

      function vw(bb) {
        bb !== rb && ((0, fb.l)(bb) ? (bb = (0, fb.m)(bb), ub(Ib("homePage:nameCharacters"))) : ub(null), zw.current && (zw.current.value = bb), Gb(bb))
      }
      return (0, eb.useEffect)((() => (!0 === Hb ? (clearInterval(Xw.current), Xw.current = setInterval(mb, 1e3)) : clearInterval(Xw.current), () => {
        clearInterval(Xw.current)
      })), [Hb, mb]), (0, eb.useEffect)((() => {
        var bb;
        Gb(null !== (bb = hb.getPlayerName()) && void 0 !== bb ? bb : "")
      }), [hb]), (0, eb.useEffect)((() => {
        if (!Hb || !Jw || Kb) return;
        let bb = !1;
        return Ww(!0), fw([]), Jb.e.getPlayerProfile(hb, {
          lowerCaseName: hb.getPlayerName().toLowerCase()
        }).then((wb => {
          bb || fw(wb.socialLinks)
        })).catch((bb => {
          console.error("Failed to load social links", bb)
        })).finally((() => {
          bb || Ww(!1)
        })), () => {
          bb = !0
        }
      }), [Hb, Jw, Kb, hb]), (0, Ob.jsxs)("div", {
        className: pb()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: lb
        }),
        children: [lb && (0, Ob.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Ib("settingsMenu:accountSettingsInGameWarning")
        }), (0, Ob.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Ob.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Ib("homePage:discordNamePopupTitle"), (0, Ob.jsxs)(Zb.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Ab.g)({
                name: hb.getPlayerName()
              }),
              onClick: () => {
                jb.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Ob.jsx)(gb.b, {
                name: "arrow-up-right-from-square"
              }), " ", Ib("profileCard:viewProfile")]
            })]
          }), (0, Ob.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Ob.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [Bb.featureFlags.canChangeName && (0, Ob.jsx)(zb.d, {
                className: "EnterName",
                placeholderText: Ib("homePage:enterName"),
                maxLength: fb.g,
                defaultValue: rb,
                onValueChange: bb => {
                  vw(bb)
                },
                forcedText: Ow || !Bb.featureFlags.canChangeName ? rb : null,
                blurOnEnter: !0,
                domRef: zw
              }), (0, Ob.jsx)(Lb.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  vw((0, fb.f)())
                },
                children: (0, Ob.jsx)(gb.b, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !Bb.featureFlags.canChangeName && (0, Ob.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, fb.b)(rb, !Bb.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Ob.jsx)(Lb.f, {
              className: "ChooseNameButton",
              disabled: Ow || rb === hb.getPlayerName(),
              onClick: () => {
                rb.length < fb.k ? ub(Ib("homePage:changeNameMinLengthError", {
                  length: fb.k
                })) : rb.length > fb.g ? ub(Ib("homePage:changeNameMaxLengthError", {
                  length: fb.g
                })) : (Bw(!0), ub(null), (0, cb.j)(hb, rb).then((bb => {
                  Bw(!1), "taken" === bb.outcome ? ub(Ib("homePage:nameTaken")) : "refused" === bb.outcome ? ub(bb.message) : "failed" === bb.outcome && ub(Ib((0, cb.g)(bb.failure)))
                })))
              },
              children: Ib("general:choose")
            })]
          }), ib && (0, Ob.jsx)("div", {
            className: "ChooseAccNameError",
            children: ib
          })]
        }), (0, Ob.jsx)(xb.d, {
          label: (() => {
            if ((0, Cw.p)(Eb)) {
              const bb = (0, Vb.l)(Ub.code, "general:timeLeft"),
                wb = (0, Sb.ib)(bb, Date.now(), Eb + Cw.l);
              return `${Ib("settingsMenu:hideSocialLocation")} (${Ib("general:timeLeft",{time:wb})})`
            }
            return Ib("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const bb = !(0, Cw.p)(Eb);
            (0, Fw.reportAnalyticsClick)({
              id: "social.hide_location",
              value: bb ? "on" : "off"
            }), hw(!0), Jb.e.setHideSocialLocation(hb, bb).then((() => {
              jb.c.set({
                hideSocialLocationFrom: bb ? Date.now() : null
              })
            })).finally((() => {
              hw(!1)
            }))
          },
          checked: (0, Cw.p)(Eb),
          disabled: sw
        }), Jw && (0, Ob.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Ob.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Ib("settingsMenu:socialLinks")
          }), Aw && (0, Ob.jsx)(Xb.c, {}), !Aw && (0, Ob.jsx)(Ew.c, {
            socialLinks: Zw,
            editable: !0,
            userContext: hb,
            onLinksUpdated: Nw
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ob.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Ib(Yw ? "auth:loginOrSwitchAccount" : "auth:login")
          }), rw && (0, Ob.jsx)(Xb.c, {}), !rw && 0 === Rw.length && (0, Ob.jsx)("div", {
            className: "NoLoginOptions",
            children: Ib("auth:noLoginOptions")
          }), !rw && Rw.length > 0 && "crazygames" !== Rb.siteUsed && (0, Ob.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Rw
          }), !rw && Rw.length > 0 && "crazygames" === Rb.siteUsed && (0, Ob.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Rw[0], Rw.length > 1 && (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Ob.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Ib("auth:legacyLoginOptions")
                }), (0, Ob.jsx)(tw.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Ib("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Ob.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Rw.slice(1)
              })]
            })]
          }), Bb.featureFlags.useLogin && (null !== hb.loggedInInfo || hb.isLoggedIn()) && (0, Ob.jsxs)(Ob.Fragment, {
            children: [(0, Ob.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Ob.jsxs)(Lb.Q, {
              onClick: () => {
                (0, Db.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Ob.jsx)(gb.b, {
                name: "right-from-bracket"
              }), Ib("auth:signOut")]
            })]
          })]
        }), null !== Lw && (0, Ob.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Ob.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, Ob.jsx)(vb.j, {
              tierId: Lw.tier
            })
          }), (0, Ob.jsx)(gw, {
            showing: Hb
          })]
        }), !Hw && Fb && (0, Ob.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Ob.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, Ob.jsx)(vb.j, {
              tierId: kb.id
            })
          }), null !== pw && (0, Ob.jsx)(qb, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: pw
          }), (0, Ob.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Ob.jsxs)(Lb.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, lw.r)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Ob.jsx)(gb.b, {
                name: "bolt"
              }), Ib(null !== pw ? "store:upgradeToHyperRank" : Mw.getKey)]
            }), ew]
          }), (0, Ob.jsx)(Kw, {
            ...sb
          })]
        }), Hw && (0, Ob.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Ob.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Ob.jsx)(vb.j, {
              tierId: kb.id
            }), Iw && (0, Ob.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Iw, ")"]
            })]
          }), Vw && (0, Ob.jsx)(gw, {
            showing: Hb
          }), Fb && ww && (0, Ob.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Sb.Mc)(hb.superRankInfo) && (0, Ob.jsxs)(Lb.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: db,
              onClick: () => {
                nb(bw.id, null)
              },
              children: [(0, Ob.jsx)(gb.b, {
                name: "bolt"
              }), Ib("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: bw.product.days,
                price: bw.price
              })]
            }), ew]
          }), Pb && (0, Ob.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Ib(Pb.translationKey)
          }), (0, Ob.jsx)(Kw, {
            ...sb
          })]
        }), (0, Ob.jsx)(mw, {
          showing: Hb
        }), Bb.featureFlags.useSocialFeatures && (0, Ob.jsx)(aw, {
          showing: Hb
        }), (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Ob.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Ob.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Ib(uw(Dw, Yw))
            }), (0, Rb.isDiscordClient)() && (0, Ob.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Ib("auth:discordActivityKickWarning")
            }), (0, Ob.jsx)(Sw, {
              showing: Hb
            })]
          }), (0, Ob.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Ib(Dw ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function uw(bb, wb) {
      return bb ? wb ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var dw = Mb(35232),
      Pw = Mb(4490),
      nw = Mb(1599),
      yw = Mb(2183),
      ow = Mb(10218),
      Tw = Mb(35237);

    function kw() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, yw.h)("localPlayerAlive") ? (0, Ob.jsx)(ow.d, {
        icon: "camera-alt",
        title: bb("screenshotMode:title"),
        sub: bb("screenshotMode:entrySub"),
        onClick: Tw.f
      }) : null
    }
    var bM = Mb(35258);
    const wM = (0, eb.memo)((function(bb) {
        let {
          inGame: wb
        } = bb;
        const {
          t: Mb,
          selectedLanguage: eb
        } = (0, Vb.C)(), {
          clientEscMenuOptions: Hb,
          showDebugOverlay: pb,
          isTouchScreen: gb
        } = (0, jb.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), lb = (0, Eb.k)("hideCoordinates");
        let Lb = "settingsMenu:showCoordinates",
          Ib = "settingsMenu:showChunkCoordinates";

        function Ub(bb) {
          const wb = new Intl.DisplayNames([bb], {
            type: "language"
          }).of(bb);
          return wb.charAt(0).toUpperCase() + wb.slice(1)
        }
        return lb && (Lb = "settingsMenu:showCoordinatesHidden", Ib = "settingsMenu:showChunkCoordinatesHidden"), (0, Ob.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [wb && Bb.featureFlags.canUseInviteLinks && (0, Ob.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Ob.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Mb("settingsMenu:inviteLink")
            }), (0, Ob.jsx)(dw.g, {})]
          }), (0, Ob.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Ob.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Mb("settingsMenu:language")
            }), (0, Ob.jsx)(Pw.c, {
              options: Object.entries(Vb.i).map((bb => {
                let [wb, Mb] = bb;
                return {
                  label: (0, Ob.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Ob.jsx)("img", {
                      src: Mb.flagImg,
                      alt: "flag"
                    }), (0, Ob.jsxs)("span", {
                      children: [Ub(wb), " ", (0, Ob.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", wb, ")"]
                      })]
                    })]
                  }),
                  value: wb
                }
              })),
              value: eb.code,
              onChange: bb => {
                nb.g.get().setCurrentLanguage(bb.value)
              }
            })]
          }), wb && gb && (0, bM.d)() && (0, Ob.jsx)(kw, {}), !(0, Bb.isMobileApp)() && (0, nw.h)() && Bb.featureFlags.useForceRotateForceFullscreenOverlay && (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:disableFullscreenMode"),
            checked: Hb.disableFullscreen,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                disableFullscreen: bb
              })
            }
          }), (0, Ob.jsx)(xb.d, {
            label: Mb(Lb),
            checked: Hb.showCoordinates,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showCoordinates: bb
              })
            },
            disabled: lb
          }), (0, Ob.jsx)(xb.d, {
            label: Mb(Ib),
            checked: Hb.showChunkCoordinates,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showChunkCoordinates: bb
              })
            },
            disabled: lb
          }), (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showFps"),
            checked: Hb.showFPS,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showFPS: bb
              })
            }
          }), (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:disableBunnyHopping"),
            checked: Hb.disableBunnyHopping,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                disableBunnyHopping: bb
              })
            }
          }), (0, Yw.t)() && (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showChat"),
            checked: Hb.showChat,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showChat: bb
              })
            }
          }), (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showDebugOverlay"),
            checked: pb,
            onClick: bb => {
              jb.c.set({
                showDebugOverlay: bb
              })
            }
          }), Bb.featureFlags.useSocialFeatures && (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showFriendOnlineToasts"),
            checked: Hb.showFriendOnlineToasts,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showFriendOnlineToasts: bb
              })
            }
          }), (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showNewItemIndicator"),
            checked: Hb.showNewItemIndicator,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showNewItemIndicator: bb
              })
            }
          }), (0, Ob.jsx)(xb.d, {
            label: Mb("settingsMenu:showTeamSymbols"),
            checked: Hb.showTeamSymbols,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showTeamSymbols: bb
              })
            },
            circleInfoText: Mb("settingsMenu:showTeamSymbolsInfo")
          })]
        })
      })),
      MM = (0, eb.memo)((function() {
        const {
          t: bb
        } = (0, Vb.C)(), {
          soundVolume: wb,
          musicVolume: Mb,
          clientEscMenuOptions: eb
        } = (0, jb.o)(["soundVolume", "musicVolume", "clientEscMenuOptions"]);
        return (0, Ob.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Ob.jsx)(xb.j, {
            name: bb("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Mb,
            onChange: bb => {
              jb.c.set({
                musicVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          }), (0, Ob.jsx)(xb.j, {
            name: bb("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: wb,
            onChange: bb => {
              jb.c.set({
                soundVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          }), (0, Ob.jsx)(xb.d, {
            label: bb("settingsMenu:showSoundDirections"),
            checked: eb.showSoundDirections,
            onClick: bb => {
              jb.c.setClientEscMenuOptions({
                showSoundDirections: bb
              })
            },
            circleInfoText: bb("settingsMenu:showSoundDirectionsInfo")
          })]
        })
      }));
    var eM = Mb(770),
      HM = Mb(1611),
      pM = Mb(3443),
      VM = Mb(3430),
      gM = Mb(4883);
    const lM = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function LM() {
      const {
        t: bb
      } = (0, Vb.C)(), wb = (0, gM.d)(), {
        mobilePushNotificationsCanAsk: Mb
      } = (0, jb.o)(["mobilePushNotificationsCanAsk"]), [Hb, pb] = (0, eb.useState)(null), [gb, lb] = (0, eb.useState)(!1), [Ib, Ub] = (0, eb.useState)(null), [tb, Cb] = (0, eb.useState)(!1), Eb = (0, eb.useCallback)((() => {
        (0, pM.c)().then((bb => {
          wb.current && (pb(bb), lb(!1))
        })).catch((bb => {
          console.error("Failed to load push notification targets:", bb), wb.current && lb(!0)
        }))
      }), [wb]), Fb = (0, eb.useCallback)((() => {
        (0, VM.h)().then((bb => {
          wb.current && Ub((() => bb))
        }))
      }), [wb]);
      (0, eb.useEffect)((() => {
        Eb()
      }), [Eb]), (0, eb.useEffect)((() => {
        Fb()
      }), [Fb, Mb]), (0, HM.e)(pM.g, Eb);
      const Bb = null === Hb ? [] : Object.keys(lM).filter((bb => Hb[bb] > 0));
      return (0, Ob.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Ob.jsx)("div", {
          className: "SliderText",
          children: bb("notificationSettings:pushNotifications")
        }), null === Hb && gb && (0, Ob.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsLoadFailed")
        }), null !== Hb && 0 === Bb.length && (0, Ob.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsNone")
        }), Bb.length > 0 && (0, Ob.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: Bb.map((wb => {
            var Mb;
            return (0, Ob.jsx)("li", {
              children: bb(lM[wb], {
                count: null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb[wb]) && void 0 !== Mb ? Mb : 0
              })
            }, wb)
          }))
        }), null !== Ib && (0, Ob.jsx)(Lb.f, {
          className: "PushNotificationSettingsButton",
          loading: tb,
          onClick: () => {
            Cb(!0), Ib().catch((bb => {
              console.error("Failed to turn on push notifications:", bb)
            })).finally((() => {
              wb.current && (Cb(!1), Fb())
            }))
          },
          children: bb("notificationSettings:pushTurnOn")
        })]
      })
    }
    var IM = Mb(3708),
      OM = Mb(3426),
      UM = Mb(2062),
      tM = Mb(43);
    async function CM() {
      return "dailyDropReminderAsked_" + (await Db.userContextManager.getCurrentUserContext()).whamm
    }

    function EM(bb) {
      return async function(bb) {
        if (bb.remindersOn || (0, jb.e)(jb.c.get("gameState"))) return null;
        const wb = await CM();
        if (null !== tM.i.getItem(wb)) return null;
        const [Mb, eb] = await Promise.all([(0, VM.h)().catch((bb => (console.error("Couldn't tell whether this device can take push notifications:", bb), null))), FM()]);
        if (null === Mb && !eb) return null;
        if (null !== Mb && ((0, OM.e)() || (0, VM.j)())) return null;
        return {
          askedKey: wb,
          requester: Mb
        }
      }(bb).catch((bb => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", bb), null)))
    }

    function FM() {
      return (0, pM.c)().then((bb => bb.app + bb.browser + bb.msnPlay > 0), (bb => (console.error("Couldn't tell where push notifications reach this account:", bb), !0)))
    }
    async function BM(bb) {
      const wb = (0, IM.z)({
          remindersOn: !0
        }),
        Mb = null === bb ? Promise.resolve() : bb(),
        [eb, Hb] = await Promise.allSettled([wb, Mb]);
      "rejected" === eb.status && console.error("Failed to turn on Lucky Skin Block reminders:", eb.reason), "rejected" === Hb.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", Hb.reason), "rejected" !== eb.status && "rejected" !== Hb.status || UM.j.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const sM = {
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
      mM = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function hM(bb) {
      let {
        setting: wb,
        value: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)(), gb = (0, gM.d)(), [lb, Lb] = (0, eb.useState)(null), [Ib, Ub] = (0, eb.useState)(!1), [tb, Cb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        "remindersOn" === wb && (0, VM.h)().then((bb => {
          gb.current && Cb((() => bb))
        }), (bb => {
          console.error("Couldn't tell whether this device can take push notifications:", bb)
        }))
      }), [wb, gb]), (0, Ob.jsx)(xb.d, {
        className: pb()({
          DailyDropSettingFailed: Ib
        }),
        label: Hb(mM[wb].label),
        checked: null !== lb && void 0 !== lb ? lb : Mb,
        note: Ib ? Hb("dailyDrop:settingFailed") : void 0,
        onClick: bb => {
          null === lb && (Lb(bb), Ub(!1), bb && null !== tb && tb().catch((bb => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", bb)
          })), (0, IM.v)("daily_drop.setting", `${mM[wb].reportAs}_${bb?"on":"off"}`), "remindersOn" === wb && CM().then((bb => {
            tM.i.setItem(bb, !0)
          }), (bb => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", bb)
          })), (0, IM.z)("hidden" === wb ? {
            hidden: bb
          } : {
            remindersOn: bb
          }).catch((bb => {
            console.error(`Failed to save the Lucky Skin Block's ${wb} setting:`, bb), gb.current && Ub(!0)
          })).finally((() => {
            gb.current && Lb(null)
          })))
        }
      })
    }
    const zM = (0, eb.memo)((function() {
      const {
        t: bb
      } = (0, Vb.C)(), {
        clientEscMenuOptions: wb
      } = (0, jb.o)(["clientEscMenuOptions"]), {
        userContext: Mb
      } = (0, Cb.e)(), eb = Mb.dailyDrop;
      return (0, Ob.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [Bb.featureFlags.useSocialFeatures && (0, Ob.jsx)(xb.f, {
          label: bb("notificationSettings:friendRequests"),
          options: eM.d.map((wb => ({
            value: wb,
            label: bb(sM[wb].label)
          }))),
          value: wb.friendRequestNotifications,
          onChange: bb => {
            jb.c.setClientEscMenuOptions({
              friendRequestNotifications: bb
            })
          },
          circleInfoText: (0, Ob.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: eM.d.map((wb => (0, Ob.jsxs)("div", {
              children: [(0, Ob.jsx)("b", {
                children: bb(sM[wb].label)
              }), ": ", bb(sM[wb].info)]
            }, wb)))
          })
        }), null !== eb && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(hM, {
            setting: "remindersOn",
            value: eb.remindersOn
          }), (0, Ob.jsx)(hM, {
            setting: "hidden",
            value: eb.hidden
          })]
        }), (0, Ob.jsx)(LM, {})]
      })
    }));
    var XM = Mb(5347),
      xM = Mb(225),
      jM = Mb(361),
      KM = Mb(7848),
      rM = Mb(4843),
      RM = Mb(35260),
      DM = Mb(661),
      cM = Mb(29);
    var YM = Mb(698),
      ZM = Mb(5198);
    const fM = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function AM(bb) {
      return fM.has(bb) ? sb.gameBridge.lookup("FX", null) : null
    }

    function WM(bb) {
      if (!(0, DM.K)(jb.c.get("clientEscMenuOptions")[bb])) return jb.c.get("clientEscMenuOptions")[bb];
      const wb = AM(bb);
      return null !== wb ? wb[fM.get(bb)] : tM.i.getItem(bb)
    }

    function JM(bb, wb) {
      if ("useTouchControls" === bb) return void(0, ZM.c)(wb);
      bb in jb.c.get("clientEscMenuOptions") && jb.c.setClientEscMenuOptions({
        [bb]: wb
      });
      const Mb = AM(bb);
      null !== Mb && sb.gameBridge.send("setChunkAddDistance", {
        ...Mb,
        [fM.get(bb)]: wb
      }), tM.i.setItem(bb, wb)
    }
    var SM = Mb(5273),
      NM = Mb(35266),
      vM = Mb(35270),
      QM = Mb(5340),
      GM = Mb(35285);

    function qM(bb) {
      var wb, Hb, gb, lb;
      let {
        minChunkAddDist: Lb,
        getValue: Ib,
        onChange: Ub,
        setApplySettingsCallback: tb
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), {
        clientEscMenuOptions: Fb
      } = (0, jb.o)(["clientEscMenuOptions", "showDistantNametags"]), sb = (0, eb.useRef)(Ib("showFog")), mb = (0, eb.useRef)(Fb.antiAliasing), hb = (0, eb.useRef)(Fb.useWebGpu), [zb, Xb] = (0, eb.useState)(null), [rb, Rb] = (0, eb.useState)(!1), [Db, cb] = (0, eb.useState)((() => (0, rM.g)(Bb.featureFlags.settings.canUseShaderPacks))), [Yb] = (0, eb.useState)((() => jb.c.isWebGpuDefaultOff())), [Zb] = (0, eb.useState)(jM.j), [fb, Ab] = (0, eb.useState)(!1);
      (0, eb.useEffect)((() => {
        const bb = () => {
          Ab((0, vM.r)())
        };
        return bb(), (0, vM.z)(bb)
      }), []), (0, HM.e)("appManagerUpdated|clientEscMenuOptions", (() => {
        Ab((0, vM.r)())
      }));
      const [Wb] = (0, eb.useState)((() => !0 === tM.i.getItem(Zw.mc))), [Jb] = (0, eb.useState)((() => jb.c.isWebGpuOnStored()));
      (0, eb.useEffect)((() => {
        let bb = !1;
        return (0, Bb.hasUsableWebGpuAdapter)().then((async wb => {
          const Mb = Wb || Jb,
            eb = !wb && YM.I && await (0, GM.g)(Mb);
          bb || (Xb(wb || eb), Rb(eb))
        })), (0, rM.l)(Bb.featureFlags.settings.canUseShaderPacks) && (0, KM.g)().then((async wb => {
          const eb = null !== wb && await async function(bb) {
            const [{
              isShaderPackActive: wb
            }, {
              loadPageShaderPackCompiler: eb
            }] = await Promise.all([Mb.e(160).then((() => Mb(7840))), Promise.all([Mb.e(91), Mb.e(157), Mb.e(159)]).then((() => Mb(7798)))]);
            return wb(bb, await eb())
          }(wb);
          bb || cb(eb)
        })), () => {
          bb = !0
        }
      }), [Wb, Jb]);
      const Sb = (!(Db && !Wb) || !rb) && zb,
        Nb = function(bb, wb, Mb, eb, Hb) {
          return (0, RM.e)(Mb, eb) && !0 === wb ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== wb ? "settingsMenu:newWebGpu" : Hb ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: bb && !1 !== wb,
            disabled: !0 !== wb
          }
        }(Fb.useWebGpu, Sb, Db, Yb, Zb),
        vb = (Fb.useWebGpu || (0, RM.e)(Db, Yb)) && Db && !0 === Sb,
        Qb = (0, Eb.k)("lightingOverride"),
        Gb = !(0, DM.K)(Qb);
      let qb = "settingsMenu:enableLighting";
      Gb && (qb = Qb ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const ab = bb => {
          var wb, Mb, eb;
          const Hb = null !== (wb = bb.showFog) && void 0 !== wb ? wb : Ib("showFog"),
            pb = null !== (Mb = bb.antiAliasing) && void 0 !== Mb ? Mb : Fb.antiAliasing,
            Vb = null !== (eb = bb.useWebGpu) && void 0 !== eb ? eb : Fb.useWebGpu,
            gb = !YM.I && Hb !== sb.current || pb !== mb.current || Vb !== hb.current;
          tb(gb ? () => xb.l : null)
        },
        ib = (0, Eb.k)("fogChunkDistanceOverride"),
        ub = (0, Eb.k)("fogBlockDistanceOverride"),
        db = !(0, DM.K)(ib) || !(0, DM.K)(ub),
        Pb = db ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [nb, yb] = (0, XM.d)(Lb),
        [ob, Tb] = (0, QM.i)(Lb),
        kb = Cb("settingsMenu:chunkLoadDistanceDeviceLimit"),
        bw = ob < nb,
        ww = Math.min(null !== (wb = Ib("chunkHorizAddDist")) && void 0 !== wb ? wb : Lb[0], ob),
        Mw = !db && function(bb, wb) {
          return !0 === bb.showFog && bb.fogChunkDistance > wb
        }(Fb, ww);
      return (0, Ob.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Ob.jsx)(xb.j, {
          name: Cb("settingsMenu:horizontalChunkLoadDistance"),
          min: Lb[0],
          max: nb,
          selectableMax: ob,
          cappedNote: kb,
          step: 1,
          initValue: ww,
          onChange: bb => {
            !0 === Ib("showFog") && bb < Ib("fogChunkDistance") && Ub("fogChunkDistance", bb), Ub("chunkHorizAddDist", bb), cM.k.iI("updatedChunkLoadDist")
          },
          circleInfoText: Cb("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Ob.jsx)(xb.j, {
          name: Cb("settingsMenu:verticalChunkLoadDistance"),
          min: Lb[1],
          max: yb,
          selectableMax: Tb,
          cappedNote: bw ? void 0 : kb,
          step: 1,
          initValue: Math.min(null !== (Hb = Ib("chunkVertAddDist")) && void 0 !== Hb ? Hb : Lb[1], Tb),
          onChange: bb => {
            Ub("chunkVertAddDist", bb), cM.k.iI("updatedChunkLoadDist")
          },
          circleInfoText: Cb("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:chunkFadeIn"),
          checked: Fb.chunkFadeIn,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              chunkFadeIn: bb
            })
          },
          circleInfoText: Cb("settingsMenu:chunkFadeInInfo")
        }), Kb.devTools.supports("chunkBorders") && (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:showChunkBorders"),
          checked: Fb.showChunkBorders,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              showChunkBorders: bb
            })
          },
          circleInfoText: Cb("settingsMenu:showChunkBordersInfo")
        }), (0, Ob.jsx)(xb.d, {
          label: Cb(qb),
          checked: Fb.enableLighting,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              enableLighting: bb
            })
          },
          disabled: Gb
        }), (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ob.jsx)(xb.d, {
            label: Cb(Pb),
            checked: Fb.showFog,
            onClick: bb => {
              ab({
                showFog: bb
              }), jb.c.setClientEscMenuOptions({
                showFog: bb
              })
            },
            disabled: db,
            className: pb()({
              SettingBoxWarning: Mw
            })
          }), (0, Ob.jsx)(xb.j, {
            name: Cb("settingsMenu:fogChunkDistance"),
            min: Lb[0],
            max: xM.e.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (gb = Fb.fogChunkDistance) && void 0 !== gb ? gb : Lb[0],
            onChange: bb => {
              jb.c.setClientEscMenuOptions({
                fogChunkDistance: bb
              }), cM.k.iI("fogChunkDistanceChanged", bb)
            },
            circleInfoText: Cb("settingsMenu:fogChunkDistanceInfo"),
            disabled: db || !1 === Ib("showFog"),
            className: pb()({
              SettingBoxWarning: Mw
            })
          }), Mw && (0, Ob.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Cb("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !YM.I && (0, Ob.jsx)(xb.d, {
          label: Cb(vb ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !vb && Fb.disableTexAtlas,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              disableTexAtlas: bb
            })
          },
          circleInfoText: Cb("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: vb
        }), (0, Ob.jsx)(xb.j, {
          name: Cb("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: Fb.cameraFOV,
          onChange: bb => {
            jb.c.setClientEscMenuOptions({
              cameraFOV: bb
            })
          }
        }), (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:disableViewBobbing"),
          checked: Fb.disableBobbing,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              disableBobbing: bb
            })
          },
          circleInfoText: Cb("settingsMenu:disableViewBobbingInfo")
        }), (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:antiAliasing"),
          checked: Fb.antiAliasing,
          onClick: bb => {
            ab({
              antiAliasing: bb
            }), (0, SM.g)("antiAliasing"), jb.c.setClientEscMenuOptions({
              antiAliasing: bb
            })
          },
          circleInfoText: Cb("settingsMenu:antiAliasingInfo")
        }), (0, Ob.jsx)(xb.j, {
          name: Cb("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (lb = Fb.pixelScale) && void 0 !== lb ? lb : 1,
          onChange: bb => {
            (bb !== jb.c.get("clientEscMenuOptions").pixelScale || (0, vM.o)()) && (0, SM.g)("pixelScale"), jb.c.setClientEscMenuOptions({
              pixelScale: bb
            })
          },
          circleInfoText: Cb("settingsMenu:pixelScaleInfo"),
          note: fb ? Cb("settingsMenu:pixelScaleLowered") : void 0,
          format: bb => `${bb}x`
        }), (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:pixelSmoothing"),
          checked: Fb.pixelSmoothing,
          onClick: bb => {
            jb.c.setClientEscMenuOptions({
              pixelSmoothing: bb
            })
          },
          circleInfoText: Cb("settingsMenu:pixelSmoothingInfo")
        }), YM.I && (0, Ob.jsx)(xb.d, {
          label: Cb("settingsMenu:distantNametags"),
          checked: (0, NM.c)(),
          onClick: bb => {
            jb.c.set({
              showDistantNametags: bb
            })
          },
          circleInfoText: Cb("settingsMenu:distantNametagsInfo")
        }), (0, Ob.jsx)(xb.d, {
          label: Cb(Nb.translationKey),
          checked: Nb.checked,
          onClick: bb => {
            ab({
              useWebGpu: bb
            }), jb.c.setClientEscMenuOptions({
              useWebGpu: bb
            })
          },
          circleInfoText: Cb("settingsMenu:newWebGpuInfo"),
          disabled: Nb.disabled
        })]
      })
    }
    var aM = Mb(5270),
      iM = Mb(10196),
      uM = Mb(35289),
      dM = Mb(10205),
      PM = Mb(10258),
      nM = Mb(35291);
    const yM = {
        color: 16777215,
        name: "white"
      },
      oM = {
        color: 0,
        name: "black"
      },
      TM = [yM, {
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
      }, oM],
      kM = [oM, yM];

    function be(bb) {
      return `${bb} px`
    }

    function we(bb) {
      return `${bb}%`
    }

    function Me(bb) {
      let {
        settings: wb,
        onChange: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)(), Hb = (bb, eb) => {
        Mb((0, nM.q)(wb, bb, eb))
      }, pb = function(bb, Mb) {
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be;
        const {
          min: pb,
          max: Vb,
          step: gb
        } = nM.c[bb];
        return (0, Ob.jsx)(xb.j, {
          name: Mb,
          min: pb,
          max: Vb,
          step: gb,
          initValue: wb[bb],
          format: eb,
          onChange: wb => {
            Hb(bb, wb)
          }
        }, bb)
      }, gb = (bb, Mb, pb) => (0, Ob.jsx)(PM.d, {
        label: bb,
        value: (0, nM.h)(wb[Mb]),
        swatches: pb.map((bb => {
          let {
            color: wb,
            name: Mb
          } = bb;
          return {
            colour: (0, nM.h)(wb),
            label: eb(`crosshairSettings:color_${Mb}`)
          }
        })),
        customLabel: eb("crosshairSettings:customColor"),
        onChange: bb => {
          const wb = (0, nM.n)(bb);
          null !== wb && Hb(Mb, wb)
        }
      }), lb = ["lines", "dot", "circle"].filter((bb => wb[bb])), Lb = (bb, Mb, eb) => (0, Ob.jsx)(xb.d, {
        label: Mb,
        checked: wb[bb],
        disabled: 1 === lb.length && lb[0] === bb,
        circleInfoText: eb,
        onClick: wb => {
          Hb(bb, wb)
        }
      }, bb), Ib = "shapes" === wb.style;
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [(0, Ob.jsx)(xb.f, {
          label: eb("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: eb("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: eb("crosshairSettings:styleShapes")
          }],
          value: wb.style,
          onChange: bb => {
            Hb("style", bb)
          }
        }), gb(eb("crosshairSettings:color"), "color", TM), pb("opacity", eb("crosshairSettings:opacity"), we), !Ib && pb("size", eb("crosshairSettings:size"), we), Ib && (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lb("lines", eb("crosshairSettings:lines")), wb.lines && pb("lineLength", eb("crosshairSettings:lineLength")), wb.lines && pb("lineThickness", eb("crosshairSettings:lineThickness")), wb.lines && pb("gap", eb("crosshairSettings:gap")), wb.lines && Lb("tStyle", eb("crosshairSettings:tStyle"))]
        }), Ib && (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lb("dot", eb("crosshairSettings:dot")), wb.dot && pb("dotSize", eb("crosshairSettings:dotSize"))]
        }), Ib && (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lb("circle", eb("crosshairSettings:circle")), wb.circle && pb("circleRadius", eb("crosshairSettings:circleRadius")), wb.circle && pb("circleThickness", eb("crosshairSettings:circleThickness"))]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [pb("outline", eb("crosshairSettings:outline"), (bb => bb > 0 ? be(bb) : eb("crosshairSettings:off"))), wb.outline > 0 && gb(eb("crosshairSettings:outlineColor"), "outlineColor", kM)]
        }), Lb("growOnClick", eb("crosshairSettings:growOnClick")), Ib && Lb("forGuns", eb("crosshairSettings:forGuns"), eb("crosshairSettings:forGunsInfo"))]
      })
    }
    var ee = Mb(81),
      He = Mb(1350),
      pe = Mb(14099),
      Ve = Mb(15258),
      ge = Mb(16665),
      le = Mb(17203);
    const Le = ["sky", "grass", "stone", "sand", "snow", "night"],
      Ie = "4rem";

    function Oe(bb) {
      return {
        backgroundImage: `url(${bb})`,
        backgroundSize: `${Ie} ${Ie}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Ue(bb) {
      return {
        ...(() => {
          switch (bb) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Oe(pe);
            case "stone":
              return Oe(Ve);
            case "sand":
              return Oe(ge);
            case "snow":
              return Oe(le);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function te(bb) {
      return Object.freeze({
        ...nM.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...bb
      })
    }
    const Ce = [{
        id: "default",
        settings: nM.e
      }, {
        id: "cross",
        settings: te({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: te({
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
        settings: te({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: te({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: te({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: te({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: te({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Ee = ["growOnClick", "forGuns"];
    var Fe = Mb(35294);

    function Be(bb) {
      let {
        label: wb,
        selected: Mb,
        onClick: eb,
        className: Hb,
        style: Vb,
        children: gb
      } = bb;
      return (0, Ob.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Mb,
        title: wb,
        "aria-label": wb,
        "data-pad-focusable": !0,
        className: pb()("CrosshairBackdropSwatch", Hb, {
          Selected: Mb
        }),
        style: Vb,
        onClick: eb,
        children: gb
      })
    }

    function se(bb) {
      let {
        backdrop: wb,
        onChange: Mb,
        game: eb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Hb("crosshairSettings:background"),
        children: [eb && (0, Ob.jsx)(Be, {
          label: Hb("crosshairSettings:bg_game"),
          selected: eb.selected,
          onClick: eb.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Ob.jsx)(gb.b, {
            name: "cube"
          })
        }), Le.map((bb => (0, Ob.jsx)(Be, {
          label: Hb(`crosshairSettings:bg_${bb}`),
          selected: !(null !== eb && void 0 !== eb && eb.selected) && bb === wb,
          style: Ue(bb),
          onClick: () => {
            Mb(bb)
          }
        }, bb)))]
      })
    }

    function me(bb) {
      let {
        settings: wb,
        touch: Mb,
        backdrop: eb,
        onChange: Hb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)(), lb = function(bb) {
        var wb;
        return null !== (wb = Ce.find((wb => (0, nM.p)(wb.settings, bb, Ee)))) && void 0 !== wb ? wb : null
      }(wb);
      return (0, Ob.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": gb("crosshairSettings:presets"),
        children: Ce.map((bb => {
          const Vb = (null === lb || void 0 === lb ? void 0 : lb.id) === bb.id;
          return (0, Ob.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Vb,
            "data-pad-focusable": !0,
            className: pb()("CrosshairPreset", {
              Selected: Vb
            }),
            onClick: () => {
              Hb(function(bb, wb) {
                return {
                  ...wb.settings,
                  growOnClick: bb.growOnClick,
                  forGuns: bb.forGuns
                }
              }(wb, bb))
            },
            children: [(0, Ob.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Ue(eb),
              children: (0, Ob.jsx)(Fe.b, {
                settings: bb.settings,
                touch: Mb,
                inPreview: !0
              })
            }), (0, Ob.jsx)("div", {
              className: "CrosshairPresetName",
              children: gb(`crosshairSettings:preset_${bb.id}`)
            })]
          }, bb.id)
        }))
      })
    }
    var he = Mb(1873);

    function ze(bb, wb) {
      const [Mb, Hb] = (0, eb.useState)(!1), pb = () => {
        Hb(!1)
      }, [Vb, gb] = (0, eb.useState)(!1), lb = (0, eb.useRef)({
        growOnClick: bb.growOnClick,
        forGuns: bb.forGuns
      });
      (0, eb.useEffect)((() => {
        const wb = lb.current;
        lb.current = {
          growOnClick: bb.growOnClick,
          forGuns: bb.forGuns
        }, (bb.growOnClick && !wb.growOnClick || bb.forGuns && !wb.forGuns) && gb(!0)
      }), [bb.growOnClick, bb.forGuns]), (0, eb.useEffect)((() => {
        if (!Vb) return;
        const bb = setTimeout((() => {
          gb(!1)
        }), 600);
        return () => {
          clearTimeout(bb)
        }
      }), [Vb]);
      const Lb = Mb || Vb;
      return {
        view: {
          pressed: Lb,
          spread: Lb && bb.forGuns && !bb.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: bb => {
            !bb.target.closest(wb) && (0, he.e)(bb.currentTarget, bb.pointerId) && Hb(!0)
          },
          onPointerUp: pb,
          onPointerCancel: pb,
          onLostPointerCapture: pb
        }
      }
    }

    function Xe(bb) {
      let {
        settings: wb,
        touch: Mb,
        backdrop: eb,
        className: Hb,
        children: Vb,
        label: gb
      } = bb;
      const lb = ze(wb, ".CrosshairStageControls");
      return (0, Ob.jsxs)("div", {
        className: pb()("CrosshairStage", Hb),
        style: Ue(eb),
        ...lb.handlers,
        children: [(0, Ob.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": gb,
          children: (0, Ob.jsx)(Fe.b, {
            settings: wb,
            touch: Mb,
            inPreview: !0,
            ...lb.view
          })
        }), Vb]
      })
    }
    const xe = "crosshairFullScreen";

    function je(bb) {
      let {
        settings: wb,
        touch: Mb,
        backdrop: Hb,
        onBackdrop: lb,
        inGame: Ib,
        onChange: Ub,
        onClose: tb
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), Eb = (0, eb.useRef)(null);
      (0, He.r)("popup", Eb, tb),
      function(bb) {
        const wb = (0, eb.useRef)(bb);
        wb.current = bb, (0, eb.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [xe]: !0
          }, "");
          let bb = !1;
          const Mb = () => {
            bb = !0, wb.current()
          };
          return window.addEventListener("popstate", Mb), () => {
            var wb;
            window.removeEventListener("popstate", Mb), !bb && null !== (wb = window.history.state) && void 0 !== wb && wb[xe] && window.history.back()
          }
        }), [])
      }(tb);
      const Fb = (0, eb.useRef)(tb);
      Fb.current = tb, (0, eb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), Fb.current())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), []);
      const Bb = ze(wb, ".CrosshairFullScreenPanel"),
        [sb, mb] = (0, eb.useState)(!0),
        hb = sb && Ib;
      (0, eb.useEffect)((() => {
        if (hb) return jb.c.set({
          crosshairGameView: !0
        }), () => {
          jb.c.set({
            crosshairGameView: !1
          })
        }
      }), [hb]);
      const [zb, Xb] = (0, eb.useState)(!0);
      return (0, ee.createPortal)((0, Ob.jsxs)("div", {
        ref: Eb,
        className: "CrosshairFullScreen",
        style: hb ? void 0 : Ue(Hb),
        ...Bb.handlers,
        children: [(0, Ob.jsx)(Fe.b, {
          settings: wb,
          touch: Mb,
          inEditor: !0,
          ...Bb.view
        }), (0, Ob.jsxs)("div", {
          className: pb()("CrosshairFullScreenPanel", {
            Collapsed: !zb
          }),
          children: [(0, Ob.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Ob.jsx)(se, {
              backdrop: Hb,
              onChange: bb => {
                mb(!1), lb(bb)
              },
              game: Ib ? {
                selected: hb,
                onSelect: () => {
                  mb(!0)
                }
              } : void 0
            }), (0, Ob.jsx)(Lb.Y, {
              className: "CrosshairPanelToggle",
              ariaLabel: Cb(zb ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                Xb(!zb)
              },
              children: (0, Ob.jsx)(gb.b, {
                name: zb ? "caret-up" : "pen"
              })
            }), (0, Ob.jsx)(Lb.f, {
              className: "CrosshairFullScreenDone",
              onClick: tb,
              padDefaultFocus: !0,
              children: Cb("crosshairSettings:done")
            })]
          }), zb && (0, Ob.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Ob.jsx)(me, {
              settings: wb,
              touch: Mb,
              backdrop: Hb,
              onChange: Ub
            }), (0, Ob.jsx)(Me, {
              settings: wb,
              onChange: Ub
            })]
          })]
        })]
      }), document.body)
    }
    var Ke = Mb(3877),
      re = Mb(35305);

    function Re(bb) {
      let {
        settings: wb,
        onChange: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)(), lb = (0, re.g)(wb), [Ib, Ub] = (0, Ke.k)(), [tb, Cb] = (0, eb.useState)(!1), Eb = (0, eb.useRef)(null), [Fb, Bb] = (0, Ke.k)(), [sb, mb] = (0, eb.useState)(!1);
      return (0, Ob.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Ob.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Ob.jsxs)(Lb.Y, {
            className: pb()("CrosshairCopy", {
              ActiveSecondaryButton: Ib
            }),
            onClick: () => {
              (0, Ke.i)(lb, {
                useShareSheet: !1,
                onOutcome: bb => {
                  Cb("failed" === bb), "copied" === bb && Ub()
                }
              })
            },
            children: [(0, Ob.jsx)(gb.b, {
              name: Ib ? "check" : "copy"
            }), " ", Hb(Ib ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Ob.jsx)(zb.d, {
            className: "CrosshairPaste",
            domRef: Eb,
            ariaLabel: Hb("crosshairSettings:paste"),
            placeholderText: Hb("crosshairSettings:paste"),
            onValueChange: bb => {
              const wb = (0, re.e)(bb);
              mb(!wb && bb.trim().length >= re.d), wb && (Mb(wb), Eb.current.value = "", Bb())
            }
          })]
        }), tb && (0, Ob.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: lb,
          "aria-label": Hb("crosshairSettings:copy"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, Ob.jsxs)("div", {
          "aria-live": "polite",
          children: [sb && (0, Ob.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Hb("crosshairSettings:pasteInvalid")
          }), Fb && !sb && (0, Ob.jsx)("div", {
            className: "CrosshairShareNote",
            children: Hb("crosshairSettings:applied")
          })]
        })]
      })
    }
    var De = Mb(35309);
    let ce = "sky";

    function Ye(bb) {
      let {
        showing: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        isTouchScreen: Hb,
        gameState: pb,
        clientEscMenuOptions: lb
      } = (0, jb.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Ib = (0, De.f)(), [Ub, tb] = (0, eb.useState)(ce), Cb = bb => {
        ce = bb, tb(bb)
      }, [Eb, Fb] = (0, eb.useState)(!1);
      return (0, eb.useEffect)((() => {
        wb || Fb(!1)
      }), [wb]), (0, Ob.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Ob.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Ob.jsx)(Xe, {
            className: "CrosshairPreviewStage",
            settings: Ib,
            touch: Hb,
            backdrop: Ub,
            label: Mb("crosshairSettings:preview"),
            children: (0, Ob.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Ob.jsx)(se, {
                backdrop: Ub,
                onChange: Cb
              }), (0, Ob.jsxs)(Lb.Y, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Fb(!0)
                },
                children: [(0, Ob.jsx)(gb.b, {
                  name: "expand"
                }), " ", Mb("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Ob.jsx)("div", {
          className: "SettingBox",
          children: (0, Ob.jsx)(me, {
            settings: Ib,
            touch: Hb,
            backdrop: Ub,
            onChange: De.d
          })
        }), (0, Ob.jsx)(Re, {
          settings: Ib,
          onChange: De.d
        }), Hb && (0, Ob.jsx)(dM.c, {
          note: (0, uM.i)(Hb, lb.touchActionButtons) ? Mb("crosshairSettings:touchNote") : void 0
        }), (0, Ob.jsx)(Me, {
          settings: Ib,
          onChange: De.d
        }), Eb && (0, Ob.jsx)(je, {
          settings: Ib,
          touch: Hb,
          backdrop: Ub,
          onBackdrop: Cb,
          inGame: "inGame" === pb,
          onChange: De.d,
          onClose: () => {
            Fb(!1)
          }
        })]
      })
    }
    var Ze = Mb(10203),
      fe = Mb(1565),
      Ae = Mb(6045),
      We = Mb(35315),
      Je = Mb(5062),
      Se = Mb(2190),
      Ne = Mb(774);
    const ve = (0, eb.memo)((function() {
      const {
        clientEscMenuOptions: bb
      } = (0, jb.o)(["clientEscMenuOptions"]), {
        recording: wb,
        clipping: Mb,
        hasClipBuffer: Hb
      } = (0, yw.h)("replayRecorder"), Vb = (0, yw.e)("connectedGame", (bb => bb.replay)), gb = (0, Je.j)(), lb = !1 === (0, Eb.k)("canRecordReplays");
      (0, eb.useEffect)((() => {
        sb.gameBridge.send("setRecorderPrefs", {
          clipping: bb.enableClipping,
          clipSeconds: bb.clipDurationSeconds
        })
      }), [bb.enableClipping, bb.clipDurationSeconds]);
      const Ib = gb || Vb,
        Ub = !Ib && !lb,
        tb = wb || Ub,
        Cb = Ub,
        Fb = Cb && Mb && !wb;

      function Bb() {
        tb && sb.gameBridge.send("toggleRecording", null)
      }
      return (0, Ob.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Ob.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: wb ? (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsxs)(Lb.Q, {
                className: "ReplayViewerCategoryButton",
                onClick: Bb,
                disabled: !tb,
                children: [(0, Ob.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Ob.jsx)(Se.e, {
                  noaAction: "recordGame"
                })]
              }), (0, Ob.jsx)(We.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Ob.jsxs)(Lb.f, {
              className: "ReplayViewerCategoryButton",
              onClick: Bb,
              disabled: !tb,
              children: [(0, Ob.jsx)("span", {
                children: "Start Recording"
              }), (0, Ob.jsx)(Se.e, {
                noaAction: "recordGame"
              })]
            })
          }), lb && (0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Ib && !wb && (0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ob.jsx)(xb.d, {
            label: "Enable clipping",
            checked: bb.enableClipping,
            disabled: !Cb,
            onClick: function(bb) {
              Cb && jb.c.setClientEscMenuOptions({
                enableClipping: bb
              })
            },
            className: pb()({
              SettingBoxDisabled: !Cb
            })
          }), (0, Ob.jsx)(xb.j, {
            name: "Clip duration (seconds)",
            min: Ne.p,
            max: Ne.l,
            step: Ne.e,
            initValue: bb.clipDurationSeconds,
            onChange: function(bb) {
              jb.c.setClientEscMenuOptions({
                clipDurationSeconds: bb
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Cb || !bb.enableClipping
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ob.jsxs)(Lb.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Fb && sb.gameBridge.send("saveClip", null)
            },
            disabled: !Fb,
            children: [(0, Ob.jsx)("span", {
              children: "Record clip"
            }), (0, Ob.jsx)(Se.e, {
              noaAction: "recordClip"
            })]
          }), bb.enableClipping && !Hb && Cb && !wb && (0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), wb && (0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ob.jsxs)(Lb.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Je.g)(!0), jb.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: gb,
            children: [(0, Ob.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Ob.jsx)(Se.e, {
              noaAction: "replayViewerOpen"
            })]
          }), gb && (0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ob.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Ob.jsx)("iframe", {
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
    var Qe = Mb(2107);
    const Ge = {
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
        icon: () => (0, Ob.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Ob.jsx)("path", {
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
      LC: {
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

    function qe() {
      return Promise.all([Mb.e(91), Mb.e(157), Mb.e(156), Mb.e(153)]).then((() => Mb(42738))).then((bb => ({
        default: bb.ShaderPackCategory
      })), (bb => (console.error("Failed to load the shader pack settings", bb), {
        default: ae
      })))
    }

    function ae() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, Ob.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: bb("shaderPack:tabLoadFailed")
      })
    }
    var ie = Mb(1549),
      ue = Mb(214);
    const de = /party\s*voice/i;
    let Pe = !1;

    function ne(bb) {
      return Object.keys(bb).some((bb => bb.startsWith("__reactFiber$")))
    }
    const ye = ".MenuSideBarBody, .MenuSideBarSection";

    function oe(bb) {
      var wb;
      return (null !== (wb = bb.textContent) && void 0 !== wb ? wb : "").replace(/\s+/g, " ").trim()
    }

    function Te(bb) {
      for (const wb of function(bb) {
          const wb = new Set;
          for (const Mb of bb.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) wb.add(Mb);
          for (const Mb of [bb, ...bb.querySelectorAll(ye)])
            for (const bb of Mb.children) wb.add(bb);
          return [...wb]
        }(bb))
        if (!ne(wb) || !wb.matches(ye) && de.test(oe(wb))) return wb;
      return null
    }

    function ke(bb) {
      return bb.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const bH = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function wH(bb) {
      const wb = document.createTreeWalker(bb, NodeFilter.SHOW_TEXT, {
        acceptNode: bb => {
          var wb, Mb;
          return bH.has(null !== (wb = null === (Mb = bb.parentElement) || void 0 === Mb ? void 0 : Mb.tagName.toUpperCase()) && void 0 !== wb ? wb : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let pb = wb.nextNode(); null !== pb; pb = wb.nextNode()) {
        var Mb;
        const bb = (null !== (Mb = pb.textContent) && void 0 !== Mb ? Mb : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== bb) {
          var eb, Hb;
          return (null !== (eb = null === (Hb = bb.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === Hb ? void 0 : Hb[0]) && void 0 !== eb ? eb : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function MH(bb, wb) {
      const Mb = ke(wb).slice(0, 40) || "blank";
      return `${(ke(bb.toLowerCase())||"none").slice(0,Math.max(23,ue.ab-1-Mb.length))}:${Mb}`.slice(0, ue.ab)
    }
    const eH = (0, eb.lazy)((() => Mb.e(309).then((() => Mb(42727))).then((bb => ({
        default: bb.BloxdInformation
      }))))),
      HH = (0, eb.lazy)(qe);

    function pH(bb) {
      return bb ? "general" : "account"
    }
    const VH = new Map,
      gH = (0, eb.memo)((function(bb) {
        let {
          show: wb,
          setBeforeResumeCallback: Mb
        } = bb;
        (0, Fb.c)();
        const {
          gameState: Hb,
          openSettingsCategory: pb
        } = (0, jb.o)(["gameState", "openSettingsCategory"]), {
          userContext: lb
        } = (0, Cb.e)(), {
          t: Ib
        } = (0, Vb.C)(), zb = (0, tb.e)(), Xb = (0, Eb.k)("minChunkAddDist"), xb = "inGame" === Hb, [Kb, Db] = (0, eb.useState)(pH(xb)), [cb, Yb] = (0, eb.useState)(null), [Zb, fb] = (0, eb.useState)([]), Ab = (0, eb.useRef)(function() {
          const bb = new Date,
            wb = 6 * (bb.getMonth() + bb.getDate()) % Zw.s.length;
          return [...Zw.s, ...Zw.s].slice(wb, wb + 6)
        }()), Wb = (0, eb.useRef)(null), Jb = (0, eb.useRef)(null), Sb = (0, HM.h)(fe.i, (0, fe.d)()), Nb = Object.keys(Ge).filter((bb => {
          switch (bb) {
            case "replayViewer":
              return xb;
            case "developerTools":
              return lb.playerHasRank("developer") || !1;
            case "texturePack":
              return Bb.featureFlags.settings.canChangeTexturePack;
            case "LC":
              return Bb.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return Bb.featureFlags.useSocialFeatures || null !== lb.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Rb.siteUsed;
            case "controller":
              return Bb.featureFlags.useControllerSupport && (Sb || "controller" === Kb);
            default:
              return !0
          }
        }));
        (0, HM.e)("toggleFullCoordinateOverlay", (() => {
          const bb = WM("showCoordinates") && WM("showChunkCoordinates") && WM("showFPS");
          JM("showCoordinates", !bb), JM("showChunkCoordinates", !bb), JM("showFPS", !bb), zb()
        })), (0, HM.e)("updatedChunkLoadDist", (() => {
          zb()
        })), (0, eb.useEffect)((() => {
          if (Yb(null), null === jb.c.get("openSettingsCategory")) {
            const bb = (0, ie.j)() ? VH.get(xb) : void 0;
            Db(bb && Nb.includes(bb) ? bb : pH(xb))
          }
        }), [wb]), (0, eb.useEffect)((() => {
          if (wb && Jb.current) return function(bb) {
            if (Pe) return () => {};
            let wb = null,
              Mb = null;
            const eb = () => {
                var bb;
                null !== Mb && (clearTimeout(Mb), Mb = null), null === (bb = wb) || void 0 === bb || bb.disconnect(), wb = null
              },
              Hb = () => {
                const wb = Te(bb);
                null !== wb && (Pe = !0, eb(), (0, Fw.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: MH(window.location.hostname, wH(wb))
                }))
              };
            return Mb = setTimeout((() => {
              Mb = null, Hb(), Pe || (wb = new MutationObserver(Hb), wb.observe(bb, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), eb
          }(Jb.current)
        }), [wb]), (0, eb.useEffect)((() => {
          null !== pb && (Db(pb), VH.set(xb, pb), jb.c.set({
            openSettingsCategory: null
          }))
        }), [pb, xb]), (0, eb.useLayoutEffect)((() => {
          Wb.current && (Wb.current.scrollTop = 0)
        }), [Kb, wb]), (0, eb.useEffect)((() => {
          "updateLog" === Kb && (0, hb.e)().then(fb)
        }), [Kb]), (0, eb.useEffect)((() => {
          if ((0, DM.K)(Xb)) return;
          const [bb, wb] = (0, aM.d)(), [Mb, eb] = (0, XM.d)(Xb), Hb = (0, Qe.i)(Xb[0], bb, Mb), pb = (0, Qe.i)(Xb[1], wb, eb);
          sb.gameBridge.send("setChunkAddDistance", {
            horizontal: Hb,
            vertical: pb
          })
        }), [Xb]);
        const vb = (0, eb.useCallback)((async () => {
          cb && (await cb(), Yb(null))
        }), [cb]);

        function Qb() {
          jb.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, eb.useEffect)((() => {
          Mb((() => vb))
        }), [vb, Mb]), (0, Ob.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: wb ? {} : {
            display: "none"
          },
          children: [(0, Ob.jsx)("div", {
            ref: Jb,
            className: "MenuSideBar",
            children: (0, Ob.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Ob.jsx)(Ub, {
                items: Nb.map((bb => {
                  const wb = Ge[bb].icon;
                  return {
                    id: bb,
                    faIcon: "string" === typeof wb ? wb : void 0,
                    iconElement: "string" === typeof wb ? void 0 : (0, Ob.jsx)(wb, {}),
                    title: Ib(Ge[bb].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Kb,
                onClick: bb => {
                  !async function(bb) {
                    await vb(), Db(bb), VH.set(xb, bb)
                  }(bb)
                }
              })
            })
          }), (0, Ob.jsxs)("div", {
            ref: Wb,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Kb && (0, Ob.jsx)(iw, {
              showing: wb,
              inGame: xb
            }), "general" === Kb && (0, Ob.jsx)(wM, {
              inGame: xb
            }), "audio" === Kb && (0, Ob.jsx)(MM, {}), "notifications" === Kb && (0, Ob.jsx)(zM, {}), "graphics" === Kb && (0, Ob.jsx)(qM, {
              minChunkAddDist: null !== Xb && void 0 !== Xb ? Xb : [2, 2],
              getValue: WM,
              onChange: JM,
              setApplySettingsCallback: Yb
            }), "controls" === Kb && (0, Ob.jsx)(iM.g, {}), "crosshair" === Kb && (0, Ob.jsx)(Ye, {
              showing: wb
            }), "controller" === Kb && Bb.featureFlags.useControllerSupport && (0, Ob.jsx)(Ze.c, {}), Bb.featureFlags.settings.canChangeTexturePack && "texturePack" === Kb && (0, Ob.jsx)(Ae.b, {
              setApplySettingsCallback: Yb
            }), Bb.featureFlags.settings.canUseShaderPacks && "LC" === Kb && (0, Ob.jsx)(eb.Suspense, {
              fallback: null,
              children: (0, Ob.jsx)(HH, {
                setApplySettingsCallback: Yb
              })
            }), "updateLog" === Kb && (0, Ob.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ob.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Zb.map(((bb, wb) => (0, Ob.jsx)(mb.b, {
                  updateLog: bb,
                  index: wb,
                  close: Qb
                }, wb)))
              })
            }), "information" === Kb && (0, Ob.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ob.jsx)(eb.Suspense, {
                fallback: null,
                children: (0, Ob.jsx)(eH, {})
              })
            }), "alternativeDomains" === Kb && (0, Ob.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Ob.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Ib("settingsMenu:unblockedDomainsDescription")
              }), (0, Ob.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Ab.current.map((bb => (0, Ob.jsxs)(Lb.f, {
                  onClick: () => {
                    window.open(`https://${bb}`)
                  },
                  children: [(0, Ob.jsx)(gb.b, {
                    name: "arrow-up-right-from-square"
                  }), " ", bb]
                }, bb)))
              })]
            }), "replayViewer" === Kb && (0, Ob.jsx)(ve, {}), "developerTools" === Kb && (0, Ob.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ob.jsx)(rb, {
                setApplySettingsCallback: Yb
              })
            }), null !== cb && (0, Ob.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Ob.jsx)(Lb.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: vb,
                children: Ib("general:apply")
              })
            })]
          })]
        })
      }));
    var lH = Mb(3817),
      LH = Mb(1749),
      IH = Mb(3329),
      OH = Mb(5182);
    const UH = (0, eb.lazy)((() => Promise.resolve().then((() => Mb(5509))).then((bb => (bb.needGameClientAfterPaint(), (0, lH.b)((bb => bb.loadCharacterCustomisationUI()), (bb => bb.CharacterCustomisationUI))))))),
      tH = "openCustomisationTab";

    function CH(bb) {
      var wb, Mb, Hb;
      let {
        show: pb
      } = bb;
      const {
        userContext: Vb
      } = (0, Cb.e)(), gb = (0, ab.usePurchasesAllowed)(), lb = (0, eb.useRef)(null);
      var Lb, Ib;
      Vb !== Db.NULL_USER_CONTEXT && (null === (wb = lb.current) || void 0 === wb ? void 0 : wb.whamm) !== Vb.whamm && (lb.current = {
        whamm: Vb.whamm,
        mountKey: (null !== (Lb = null === (Ib = lb.current) || void 0 === Ib ? void 0 : Ib.mountKey) && void 0 !== Lb ? Lb : -1) + 1
      });
      const [tb, Eb] = (0, eb.useState)("characters");
      if ((0, HM.e)(tH, Eb), !pb) return null;
      const Fb = null !== (0, LH.k)(Date.now()),
        Bb = Vb.getOwnedCosmeticPacks(),
        sb = Zw.Nb.filter((bb => "pet" === bb || "aura" === bb ? Fb || (0, IH.q)(bb).some((wb => wb !== `${bb}_none` && (0, IH.J)(bb, wb, Bb))) : "cape" !== bb && "nameColour" !== bb || (0, Nb.c)(Vb.getPlayerRanks()) || gb)).map((bb => ({
          id: bb,
          faIcon: Zw.z[bb],
          title: Zw.B[bb],
          redDot: !1
        })));
      return (0, Ob.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Ob.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Ob.jsx)(Ub, {
            items: sb,
            selectedItemId: tb,
            onClick: bb => {
              Eb(bb)
            }
          })
        }), (0, Ob.jsx)("div", {
          className: "MenuBody",
          children: (0, Ob.jsx)(eb.Suspense, {
            fallback: (0, Ob.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Ob.jsx)(Xb.c, {})
            }),
            children: (0, Ob.jsx)(UH, {
              selectedTab: tb,
              noWebGlFallback: FH
            }, null !== (Mb = null === (Hb = lb.current) || void 0 === Hb ? void 0 : Hb.mountKey) && void 0 !== Mb ? Mb : 0)
          })
        })]
      })
    }

    function EH() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, Ob.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: bb((0, OH.d)((0, OH.c)()))
      })
    }
    const FH = (0, Ob.jsx)(EH, {});
    var BH = Mb(1642),
      sH = Mb(1646),
      mH = Mb(35320),
      hH = Mb(5384),
      zH = Mb(4805),
      XH = Mb(4879),
      xH = Mb(10112),
      jH = Mb(35327),
      KH = Mb(35331),
      rH = Mb(2130),
      RH = Mb(2116),
      DH = Mb(5817),
      cH = Mb(1329),
      YH = Mb(1301),
      ZH = Mb(1864),
      fH = Mb(10177),
      AH = Mb(3514),
      WH = Mb(3520);

    function JH(bb) {
      return bb ? Object.keys(bb).sort(((wb, Mb) => {
        var eb, Hb, pb, Vb;
        const gb = (null !== (eb = null === (Hb = bb[Mb]) || void 0 === Hb ? void 0 : Hb.sortPriority) && void 0 !== eb ? eb : 0) - (null !== (pb = null === (Vb = bb[wb]) || void 0 === Vb ? void 0 : Vb.sortPriority) && void 0 !== pb ? pb : 0);
        return 0 !== gb ? gb : wb.localeCompare(Mb)
      })) : []
    }
    const SH = [{
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

    function NH(bb) {
      for (const {
          threshold: wb,
          suffix: Mb
        }
        of SH)
        if (bb >= wb) {
          const eb = bb / wb;
          return eb >= 100 ? `${Math.floor(eb)}${Mb}` : eb >= 10 ? `${eb.toFixed(1).replace(/\.0$/,"")}${Mb}` : `${eb.toFixed(2).replace(/\.?0+$/,"")}${Mb}`
        } return String(bb)
    }
    var vH = Mb(4374);
    const QH = {
        normal: "0.8em",
        big: "1em"
      },
      GH = (0, eb.memo)((function(bb) {
        let {
          item: wb,
          amount: Mb = 0,
          size: eb = "normal",
          tier: Hb = null
        } = bb;
        return (0, Ob.jsx)("div", {
          className: pb()("SmpSlot", `SmpSlot-${eb}`),
          children: wb && (0, Ob.jsx)(rH.c, {
            itemName: wb,
            amount: Mb > 1 ? Mb : 0,
            amountFontSize: QH[eb],
            enchantmentTier: Hb
          })
        })
      }));

    function qH(bb) {
      let {
        amount: wb,
        exact: Mb = !1,
        className: eb
      } = bb;
      return (0, Ob.jsxs)("span", {
        className: pb()("SmpGold", eb),
        children: [(0, Ob.jsx)("span", {
          className: "SmpCoin",
          children: (0, Ob.jsx)(rH.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Mb ? wb.toLocaleString("en-US") : NH(wb)]
      })
    }

    function aH(bb) {
      let {
        count: wb = 5,
        grid: Mb = !1
      } = bb;
      return (0, Ob.jsx)("div", {
        className: Mb ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: wb
        }, ((bb, wb) => (0, Ob.jsxs)("div", {
          className: pb()(Mb ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Ob.jsx)("div", {
            className: pb()("SmpSlot", Mb ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Ob.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Ob.jsx)("b", {}), (0, Ob.jsx)("small", {})]
          }), (0, Ob.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, wb)))
      })
    }

    function iH(bb) {
      let {
        title: wb,
        children: Mb
      } = bb;
      return (0, Ob.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Ob.jsx)("b", {
          children: wb
        }), Mb && (0, Ob.jsx)("small", {
          children: Mb
        })]
      })
    }

    function uH(bb) {
      let {
        entry: wb
      } = bb;
      return (0, Ob.jsx)(iH, {
        title: (0, Ob.jsx)(RH.d, {
          text: wb.item.customTitle
        }),
        children: (0, Ob.jsx)(RH.d, {
          text: wb.item.description
        })
      })
    }

    function dH(bb) {
      return (0, Ob.jsx)(vH.c, {
        ...bb,
        className: pb()("SmpChoice", bb.className),
        reselectable: !0
      })
    }

    function PH() {
      return (0, Ob.jsx)("span", {
        className: "SmpLoader",
        children: (0, Ob.jsx)(Xb.c, {})
      })
    }

    function nH(bb) {
      let {
        value: wb,
        onChange: Mb,
        min: Hb = 1,
        max: pb,
        step: Vb = 1,
        label: gb
      } = bb;
      const lb = (0, eb.useRef)(null),
        Lb = (0, eb.useRef)(wb);
      Lb.current = wb;
      const [Ib, Ub] = (0, eb.useState)(null), tb = bb => Math.max(Hb, Math.min(pb, Math.floor(bb))), Cb = bb => {
        const wb = Lb.current,
          eb = "function" === typeof Vb ? Vb(wb, bb) : Vb,
          Hb = tb(wb + eb * bb);
        Lb.current = Hb, Mb(Hb)
      };
      (0, eb.useEffect)((() => {
        if (null === Ib) return;
        let bb;
        const wb = () => {
            Ub(null)
          },
          Mb = setTimeout((() => {
            bb = setInterval((() => {
              Cb(Ib);
              const bb = Lb.current;
              (Ib > 0 ? bb >= pb : bb <= Hb) && wb()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", wb), window.addEventListener("pointercancel", wb), window.addEventListener("blur", wb), () => {
          clearTimeout(Mb), clearInterval(bb), window.removeEventListener("pointerup", wb), window.removeEventListener("pointercancel", wb), window.removeEventListener("blur", wb)
        }
      }), [Ib]), (0, eb.useEffect)((() => {
        const bb = lb.current;
        bb && document.activeElement !== bb && bb.value !== String(wb) && (bb.value = String(wb))
      }), [wb]), (0, eb.useEffect)((() => {
        const bb = lb.current;
        if (!bb) return;
        const wb = () => {
          bb.value = String(Lb.current)
        };
        return bb.addEventListener("blur", wb), () => {
          bb.removeEventListener("blur", wb)
        }
      }), []);
      const Eb = bb => (0, Ob.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${bb>0?"More":"Less"} ${gb}`,
        disabled: bb > 0 ? wb >= pb : wb <= Hb,
        onPointerDown: wb => {
          0 === wb.button && (Cb(bb), Ub(bb))
        },
        onKeyDown: wb => {
          "Enter" !== wb.key && " " !== wb.key || Cb(bb)
        },
        onContextMenu: bb => {
          bb.preventDefault()
        },
        children: bb > 0 ? "+" : "\u2212"
      });
      return (0, Ob.jsxs)("div", {
        className: "SmpStepper",
        children: [Eb(-1), (0, Ob.jsx)(zb.d, {
          className: "SmpStepperInput",
          domRef: lb,
          defaultValue: String(wb),
          ariaLabel: gb,
          type: "text",
          blurOnEnter: !0,
          onValueChange: bb => {
            const wb = bb.replace(/[^\d]/g, "");
            lb.current && wb !== bb && (lb.current.value = wb), "" !== wb && Mb(tb(Number(wb)))
          }
        }), Eb(1)]
      })
    }

    function yH(bb) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, bb))) - 1))
    }
    var oH = Mb(35334),
      TH = Mb(1313);
    const kH = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    TH.v, Sb.Uc.length;
    new Map;
    var bp = Mb(4659);

    function wp(bb, wb) {
      var Mb;
      return wb && (null === (Mb = bb[wb]) || void 0 === Mb ? void 0 : Mb.smp) || null
    }

    function Mp(bb, wb) {
      const Mb = [];
      for (const Hb of JH(bb)) {
        var eb;
        const pb = bb[Hb];
        (null === (eb = pb.smp) || void 0 === eb ? void 0 : eb.kind) === wb && Mb.push({
          key: Hb,
          item: pb,
          meta: pb.smp
        })
      }
      return Mb
    }

    function ep(bb, wb) {
      var Mb;
      return null !== (Mb = Mp(bb, wb)[0]) && void 0 !== Mb ? Mb : null
    }
    const Hp = "50% 0% 50% 0%",
      pp = [{
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

    function Vp(bb) {
      const wb = bb - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Mb,
          suffix: eb
        }
        of pp)
        if (wb >= Mb) return `${Math.floor(wb/Mb)}${eb}`;
      return "<1s"
    }

    function gp(bb) {
      const wb = bb.map(xH.f),
        Mb = [];
      return wb.forEach(((bb, eb) => {
        const Hb = function(bb) {
            const wb = bb.match(/\d+/);
            return wb ? Number(wb[0]) : 0
          }(bb),
          pb = eb === wb.length - 1;
        (pb || 1 === Hb || 10 === Hb || 100 === Hb) && Mb.push({
          label: bb,
          quantity: Hb,
          isAll: pb
        })
      })), Mb
    }
    let lp = null;

    function Lp(bb, wb) {
      const Mb = wb.trim().toLowerCase();
      if (!Mb) return [];
      const eb = bb => {
          if (bb === Mb) return 0;
          if (bb.startsWith(Mb)) return 1;
          const wb = bb.indexOf(Mb);
          return -1 === wb ? -1 : 2 + wb
        },
        Hb = [];
      for (const gb of bb) {
        const bb = [eb(gb.lowerLabel), eb(gb.lowerName)].filter((bb => -1 !== bb));
        bb.length && Hb.push({
          item: gb,
          rank: Math.min(...bb)
        })
      }
      if (Hb.length > 0) return Hb.sort(((bb, wb) => bb.rank - wb.rank)).map((bb => bb.item));
      const pb = [...Mb],
        Vb = bb => {
          let wb = 0;
          for (const Mb of pb) {
            if (wb = bb.indexOf(Mb, wb), -1 === wb) return !1;
            wb++
          }
          return !0
        };
      return bb.filter((bb => Vb(bb.lowerLabel) || Vb(bb.lowerName)))
    }

    function Ip(bb, wb) {
      var Mb;
      return null !== (Mb = null === bb || void 0 === bb ? void 0 : bb[wb]) && void 0 !== Mb ? Mb : wb
    }

    function Op(bb, wb) {
      const Mb = bb.userInput;
      return void 0 !== wb && "dropdown" === (null === Mb || void 0 === Mb ? void 0 : Mb.type) && Mb.dropdownOptions.map(xH.f).includes(wb) ? wb : function(bb) {
        const wb = bb.userInput;
        if ("dropdown" !== (null === wb || void 0 === wb ? void 0 : wb.type) || 0 === wb.dropdownOptions.length) return null;
        const Mb = wb.dropdownOptions.map(xH.f);
        return wb.initialValue && Mb.includes(wb.initialValue) ? wb.initialValue : Mb[Mb.length - 1]
      }(bb)
    }

    function Up(bb) {
      return void 0 === bb ? "" : JSON.stringify(bb)
    }
    const tp = (0, eb.createContext)(null);

    function Cp() {
      return (0, eb.useContext)(tp)
    }
    var Ep = Mb(3915);
    const Fp = (0, eb.memo)((function(bb) {
        let {
          name: wb,
          label: Mb,
          onPick: eb
        } = bb;
        return (0, Ob.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Mb,
          onClick: () => {
            eb(wb)
          },
          children: [(0, Ob.jsx)(GH, {
            item: wb,
            size: "big"
          }), (0, Ob.jsx)("span", {
            children: Mb
          })]
        })
      })),
      Bp = (0, eb.memo)((function(bb) {
        let {
          items: wb,
          query: Mb,
          onPick: Hb
        } = bb;
        const {
          t: pb
        } = (0, Vb.C)(), [gb, lb] = (0, eb.useState)(new Set), Lb = (0, eb.useMemo)((() => function(bb) {
          const wb = new Map;
          for (const Mb of bb) {
            let bb = wb.get(Mb.category);
            bb || (bb = [], wb.set(Mb.category, bb)), bb.push(Mb)
          }
          return [...kH, "other"].filter((bb => wb.has(bb))).map((bb => ({
            category: bb,
            items: wb.get(bb)
          })))
        }(wb)), [wb]), Ib = (0, eb.useMemo)((() => Lp(wb, Mb).slice(0, 60)), [wb, Mb]);
        return Mb.trim() ? 0 === Ib.length ? (0, Ob.jsx)(iH, {
          title: pb("smpShop:noItemsFound", {
            query: Mb.trim()
          }),
          children: pb("smpShop:tryShorterName")
        }) : (0, Ob.jsx)(Ep.b, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Hp,
          observerUpdateDeps: [Mb],
          children: Ib.map((bb => (0, Ob.jsx)(Fp, {
            name: bb.name,
            label: bb.label,
            onPick: Hb
          }, bb.name)))
        }) : (0, Ob.jsx)(Ob.Fragment, {
          children: Lb.map((bb => {
            let {
              category: wb,
              items: Mb
            } = bb;
            const eb = gb.has(wb) || Mb.length <= 48,
              Vb = eb ? Mb : Mb.slice(0, 48);
            return (0, Ob.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Ob.jsxs)("h4", {
                children: [pb("other" === wb ? "smpShop:otherItems" : `creativeInventory:${wb}`), !eb && (0, Ob.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    lb(new Set([...gb, wb]))
                  },
                  children: pb("smpShop:showAll", {
                    count: Mb.length
                  })
                })]
              }), (0, Ob.jsx)(Ep.b, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Hp,
                observerUpdateDeps: [eb],
                children: Vb.map((bb => (0, Ob.jsx)(Fp, {
                  name: bb.name,
                  label: bb.label,
                  onPick: Hb
                }, bb.name)))
              })]
            }, wb)
          }))
        })
      }));

    function sp(bb, wb) {
      const {
        searched: Mb,
        shown: Hb,
        searchFor: pb,
        loading: Vb
      } = function(bb, wb) {
        var Mb;
        const Hb = Cp(),
          [pb, Vb] = (0, eb.useState)(void 0),
          gb = (0, eb.useRef)(void 0),
          lb = (0, eb.useRef)(0),
          Lb = (0, eb.useRef)(void 0),
          Ib = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.meta.item) && void 0 !== Mb ? Mb : null,
          Ob = !!bb && Hb.isPending(bb.key);
        (0, eb.useEffect)((() => {
          if (!bb || Ob || !wb || void 0 === pb || pb === Ib) return;
          const Mb = pb === gb.current && Hb.gaveUpAt(bb.key) > lb.current && Lb.current !== pb;
          (pb !== gb.current || Mb) && Hb.act(bb.key, null !== pb && void 0 !== pb ? pb : "*", Mb) && (Mb && (Lb.current = pb), gb.current = pb, lb.current = Date.now())
        }), [bb, Ob, wb, pb, Ib, Hb]);
        const Ub = (0, eb.useCallback)((bb => {
            gb.current = void 0, Lb.current = void 0, Vb(bb)
          }), []),
          tb = void 0 !== pb && pb !== Ib && (Ob || gb.current !== pb);
        return {
          searched: Ib,
          shown: tb ? pb : Ib,
          searchFor: Ub,
          loading: tb || Ob || null !== Ib && !wb
        }
      }(bb, wb), gb = (0, eb.useMemo)((() => function() {
        var bb;
        let wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Hb = `${(0,bp.i)()}\x1f${wb.join("\x1e")}\x1f${Mb.join("\x1e")}\x1f${JSON.stringify(eb)}`;
        if ((null === (bb = lp) || void 0 === bb ? void 0 : bb.key) === Hb) return lp.items;
        const pb = new Set(Mb),
          Vb = new Set,
          gb = [],
          lb = (bb, wb) => {
            var Mb;
            if (!bb || Vb.has(bb) || pb.has(bb)) return;
            Vb.add(bb);
            const Hb = null !== (Mb = eb[bb]) && void 0 !== Mb ? Mb : bb;
            gb.push({
              name: bb,
              label: Hb,
              lowerLabel: Hb.toLowerCase(),
              lowerName: bb.toLowerCase(),
              category: wb
            })
          };
        for (const Ib of (0, oH.creativeItemIds)()) {
          var Lb;
          (0, oH.itemIsDisabled)(Ib, !0, !0, !1) || (0, oH.showOnlyInCreativeSearch)(Ib) || lb((0, bp.g)(Ib), null !== (Lb = (0, oH.creativeCategoryOf)(Ib)) && void 0 !== Lb ? Lb : "other")
        }
        for (const Ib of wb) lb(Ib, "other");
        return lp = {
          key: Hb,
          items: gb
        }, gb
      }(null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names)), [null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names]), [lb, Lb] = (0, eb.useState)(""), [Ib, Ob] = (0, eb.useState)(0), [Ub, tb] = (0, eb.useState)("recent"), Cb = (0, eb.useCallback)((bb => {
        Lb(""), Ob((bb => bb + 1)), pb(bb)
      }), [pb]), Eb = "browse" === Ub || "" !== lb.trim();
      return {
        searched: Mb,
        shown: Hb,
        searchFor: pb,
        loading: Vb,
        catalogue: gb,
        names: null === bb || void 0 === bb ? void 0 : bb.meta.names,
        query: lb,
        setQuery: Lb,
        searchBoxKey: Ib,
        pickItem: Cb,
        setView: tb,
        browsing: Eb
      }
    }

    function mp(bb) {
      let {
        browser: wb,
        children: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)(), Hb = Cp();
      return (0, Ob.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Ob.jsx)("div", {
          className: "SmpSearch",
          children: (0, Ob.jsx)(zb.d, {
            className: "SmpSearchInput",
            placeholderText: eb("smpShop:searchPlaceholder"),
            defaultValue: wb.query,
            onValueChange: bb => {
              wb.setQuery(bb), wb.searched && bb.trim() && wb.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const bb = Lp(wb.catalogue, wb.query)[0];
              bb ? wb.pickItem(bb.name) : wb.query.trim() && Hb.notify(eb("smpShop:noItemsFound", {
                query: wb.query.trim()
              }))
            }
          }, wb.searchBoxKey)
        }), Mb]
      })
    }

    function hp(bb) {
      let {
        browser: wb,
        recentLabel: Mb,
        children: eb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Ob.jsx)(dH, {
          options: [{
            value: "recent",
            label: Mb
          }, {
            value: "browse",
            label: Hb("smpShop:browseItems")
          }],
          value: wb.browsing ? "browse" : "recent",
          onChange: wb.setView,
          ariaLabel: Hb("smpShop:show")
        }), !wb.browsing && eb]
      })
    }

    function zp(bb) {
      let {
        item: wb,
        names: Mb,
        summary: eb,
        onBack: Hb,
        children: pb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Ob.jsx)(Lb.b, {
          className: "SmpBackButton",
          onClick: Hb,
          children: gb("general:back")
        }), (0, Ob.jsx)(GH, {
          item: wb,
          size: "big"
        }), (0, Ob.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Ob.jsx)("b", {
            children: Ip(Mb, wb)
          }), eb && (0, Ob.jsx)("small", {
            children: eb
          })]
        }), pb]
      })
    }

    function Xp(bb) {
      let {
        browser: wb,
        className: Mb,
        action: eb,
        above: Hb,
        list: Vb,
        summary: gb,
        recentLabel: lb,
        listControls: Lb,
        onBack: Ib
      } = bb;
      return (0, Ob.jsxs)("div", {
        className: pb()("SmpScreen", Mb),
        children: [(0, Ob.jsx)(mp, {
          browser: wb,
          children: eb
        }), wb.shown && (0, Ob.jsx)(zp, {
          item: wb.shown,
          names: wb.names,
          summary: !wb.loading && gb,
          onBack: () => {
            null === Ib || void 0 === Ib || Ib(), wb.searchFor(null)
          },
          children: Lb
        }), Hb, wb.shown ? Vb : (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(hp, {
            browser: wb,
            recentLabel: lb,
            children: Lb
          }), wb.browsing ? (0, Ob.jsx)(Bp, {
            items: wb.catalogue,
            query: wb.query,
            onPick: wb.pickItem
          }) : Vb]
        })]
      })
    }

    function xp(bb, wb) {
      const Mb = bb.map((bb => {
        let {
          meta: wb
        } = bb;
        return wb.pricePerItem
      }));
      return "min" === wb ? Math.min(...Mb) : Math.max(...Mb)
    }
    var jp = Mb(7771);
    const Kp = (0, eb.memo)((function(bb) {
      var wb;
      const {
        t: Mb
      } = (0, Vb.C)(), eb = null === bb.seller, Hb = bb.quantity * bb.pricePerItem;
      return (0, Ob.jsxs)("div", {
        className: bb.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Ob.jsx)(GH, {
          item: bb.item,
          amount: bb.quantity,
          size: bb.grid ? "big" : "normal",
          tier: bb.tier
        }), (0, Ob.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ob.jsx)("b", {
            children: (0, Ob.jsx)(RH.d, {
              text: null !== (wb = bb.title) && void 0 !== wb ? wb : `${bb.quantity}x ${bb.item}`
            })
          }), (0, Ob.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Ob.jsx)("span", {
              children: eb ? Mb("smpShop:you") : (0, Ob.jsx)(RH.d, {
                text: [{
                  entityName: bb.seller
                }]
              })
            }), (0, Ob.jsx)("span", {
              children: Mb("smpShop:timeLeft", {
                time: Vp(bb.expiresAt)
              })
            })]
          })]
        }), (0, Ob.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Ob.jsx)(qH, {
            amount: bb.pricePerItem
          }), (0, Ob.jsx)("small", {
            children: Mb("smpShop:each")
          })]
        }), (0, Ob.jsx)(Lb.f, {
          className: "SmpBuyButton",
          disabled: eb || !bb.canAfford && !bb.busy,
          loading: bb.busy,
          onClick: () => {
            bb.onBuy(bb.itemKey)
          },
          children: eb ? Mb("smpShop:yours") : (0, Ob.jsx)(qH, {
            amount: Hb
          })
        })]
      })
    }));

    function rp(bb) {
      let {
        view: wb,
        onChange: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return (0, Ob.jsx)(vH.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: eb("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Ob.jsx)(gb.b, {
            name: "list"
          }),
          ariaLabel: eb("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Ob.jsx)(gb.b, {
            name: "grid-2"
          }),
          ariaLabel: eb("smpShop:gridView")
        }],
        value: wb,
        onChange: Mb
      })
    }

    function Rp(bb) {
      let {
        entries: wb,
        view: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)(), Hb = Cp(), pb = "grid" === Mb;
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [!pb && (0, Ob.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Ob.jsx)("span", {}), (0, Ob.jsx)("span", {
            children: eb("smpShop:columnItem")
          }), (0, Ob.jsx)("span", {
            children: eb("smpShop:columnPriceEach")
          }), (0, Ob.jsx)("span", {
            children: eb("smpShop:columnTotal")
          })]
        }), (0, Ob.jsx)(Ep.b, {
          lazyLoadedClassName: pb ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Hp,
          observerUpdateDeps: [wb.length],
          children: wb.map((bb => {
            var wb, Mb;
            let {
              key: eb,
              item: Vb,
              meta: gb
            } = bb;
            const lb = gb.quantity * gb.pricePerItem;
            return (0, Ob.jsx)(Kp, {
              itemKey: eb,
              item: gb.item,
              title: Vb.customTitle,
              quantity: gb.quantity,
              pricePerItem: gb.pricePerItem,
              seller: gb.seller,
              expiresAt: gb.expiresAt,
              tier: null !== (wb = null === (Mb = Vb.enchant) || void 0 === Mb ? void 0 : Mb.tier) && void 0 !== wb ? wb : null,
              busy: Hb.isPending(eb) || null !== gb.seller && !1 === Vb.canBuy,
              canAfford: Hb.canAfford(Vb, lb),
              grid: pb,
              onBuy: Hb.act
            }, eb)
          }))
        }, Mb)]
      })
    }
    const Dp = [1, 10, 100],
      cp = [1, 10, 100, 999];

    function Yp(bb) {
      var wb, Mb, Hb, lb, Ib, Ub, tb, Cb, Eb, Fb;
      const {
        t: Bb
      } = (0, Vb.C)(), sb = Cp(), {
        creator: mb,
        mode: hb
      } = bb, [Xb, xb] = (0, eb.useState)(null !== (wb = null === mb || void 0 === mb ? void 0 : mb.meta.item) && void 0 !== wb ? wb : null), [jb, Kb] = (0, eb.useState)(1), [rb, Rb] = (0, eb.useState)(0), [Db, cb] = (0, eb.useState)(""), [Yb, Zb] = (0, eb.useState)(0), fb = (0, eb.useRef)(Xb), Ab = (0, eb.useRef)(!1), [Wb, Jb] = (0, eb.useState)(!1), Sb = null !== (Mb = null === mb || void 0 === mb ? void 0 : mb.meta.item) && void 0 !== Mb ? Mb : null, Nb = null !== (Hb = null === mb || void 0 === mb ? void 0 : mb.meta.owned) && void 0 !== Hb ? Hb : 0;
      (0, eb.useEffect)((() => {
        bb.searching || null === Sb || Sb === fb.current || (fb.current = Sb, Ab.current = !1, xb(Sb), Rb(0), Kb("list" === hb ? Math.max(1, Nb) : 1))
      }), [Sb, bb.searching]);
      const vb = !!mb && !!Xb && mb.meta.item === Xb,
        Qb = vb ? mb.meta.owned : null !== (lb = null === (Ib = bb.inventory) || void 0 === Ib || null === (Ub = Ib.find((bb => bb.item === Xb))) || void 0 === Ub ? void 0 : Ub.quantity) && void 0 !== lb ? lb : 0,
        Gb = "list" === hb ? Math.max(1, Qb) : 45954,
        qb = null !== (tb = bb.prices[0]) && void 0 !== tb ? tb : null,
        ab = bb.prices.length ? Math.round(bb.prices.reduce(((bb, wb) => bb + wb), 0) / bb.prices.length) : null,
        ib = null === (Cb = bb.inventory) || void 0 === Cb || null === (Eb = Cb.find((bb => bb.item === Xb))) || void 0 === Eb ? void 0 : Eb.sellPrice;
      (0, eb.useEffect)((() => {
        var bb;
        vb && (Kb((bb => "list" === hb ? Math.min(Math.max(1, bb), Math.max(1, Qb)) : bb)), Ab.current || Rb(null !== (bb = null !== qb && void 0 !== qb ? qb : ab) && void 0 !== bb ? bb : Math.max(1, null !== ib && void 0 !== ib ? ib : 1)))
      }), [vb, Qb, Xb, qb, ab]);
      const ub = bb => {
          Ab.current = !0, Rb(bb)
        },
        db = wb => {
          var Mb, eb, Hb;
          fb.current = wb, Ab.current = !1, Jb(!1), cb(""), Zb((bb => bb + 1)), xb(wb), Rb(0), Kb("list" === hb && null !== (Mb = null === (eb = bb.inventory) || void 0 === eb || null === (Hb = eb.find((bb => bb.item === wb))) || void 0 === Hb ? void 0 : Hb.quantity) && void 0 !== Mb ? Mb : 1), (null === mb || void 0 === mb ? void 0 : mb.meta.item) !== wb && bb.onPickItem(wb)
        },
        Pb = jb * rb,
        nb = "list" === hb && null !== mb && void 0 !== mb && mb.meta.fee ? function(bb, wb) {
          const Mb = Math.max(0, wb - bb.taxFreeAllowance);
          return Math.ceil(Math.round(Mb * bb.rate * 1e6) / 1e6)
        }(mb.meta.fee, Pb) : 0,
        yb = !!mb && sb.isPending(mb.key),
        ob = vb && !bb.searching && jb >= 1 && rb >= 1 && ("order" === hb || Qb >= jb) && !yb,
        Tb = !!Xb && !vb && !bb.searching && jb >= 1 && rb >= 1,
        kb = () => {
          ob ? sb.act(mb.key, `${jb}|${rb}`) : Tb && (bb.onPickItem(Xb), Jb(!0))
        };
      (0, eb.useEffect)((() => {
        Wb && vb && !bb.searching && (Jb(!1), kb())
      }), [Wb, vb, bb.searching]);
      const bw = !!Xb && !vb && (bb.searching || Wb),
        ww = Xb ? Ip(bb.names, Xb) : "",
        Mw = (0, eb.useMemo)((() => Lp(bb.catalogue, Db).slice(0, 8)), [bb.catalogue, Db]),
        ew = ("list" === hb ? Dp.filter((bb => bb < Qb)) : cp).map((bb => ({
          value: bb,
          label: String(bb)
        })));
      "list" === hb && Qb > 0 && ew.push({
        value: Qb,
        label: Bb("smpShop:all", {
          count: Qb
        })
      });
      const Hw = [];
      return null !== qb && (qb > 1 && Hw.push({
        value: qb - 1,
        label: Bb("smpShop:undercut", {
          price: NH(qb - 1)
        })
      }), Hw.push({
        value: qb,
        label: Bb("smpShop:lowest", {
          price: NH(qb)
        })
      })), null !== ab && ab !== qb && Hw.push({
        value: ab,
        label: Bb("smpShop:average", {
          price: NH(ab)
        })
      }), (0, Ob.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Ob.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Ob.jsx)("b", {
            children: Bb("list" === hb ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Ob.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": Bb("smpShop:close"),
            onClick: bb.onClose,
            children: (0, Ob.jsx)(gb.b, {
              name: "xmark"
            })
          })]
        }), "list" === hb && (0, Ob.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Fb = bb.inventory) && void 0 !== Fb && Fb.length ? bb.inventory.map((bb => {
            let {
              item: wb,
              quantity: Mb
            } = bb;
            return (0, Ob.jsx)("button", {
              type: "button",
              title: wb,
              className: pb()("SmpPickerSlot", {
                SmpPickerSlotOn: wb === Xb
              }),
              onClick: () => {
                db(wb)
              },
              children: (0, Ob.jsx)(GH, {
                item: wb,
                amount: Mb
              })
            }, wb)
          })) : (0, Ob.jsx)("span", {
            className: "SmpMuted",
            children: Bb("smpShop:nothingToList")
          })
        }), ("list" === hb || !Xb) && (0, Ob.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Ob.jsx)(zb.d, {
            className: "SmpSearchInput",
            placeholderText: Bb("list" === hb ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Db,
            onValueChange: cb,
            blurOnEnter: !0,
            onEnter: () => {
              Mw[0] && db(Mw[0].name)
            }
          }, Yb), Mw.length > 0 && (0, Ob.jsx)("div", {
            className: "SmpPicker",
            children: Mw.map((bb => {
              let {
                name: wb
              } = bb;
              return (0, Ob.jsx)("button", {
                type: "button",
                title: wb,
                className: pb()("SmpPickerSlot", {
                  SmpPickerSlotOn: wb === Xb
                }),
                onClick: () => {
                  db(wb)
                },
                children: (0, Ob.jsx)(GH, {
                  item: wb
                })
              }, wb)
            }))
          })]
        }), Xb && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsxs)("div", {
            className: "SmpPickedName",
            children: [ww, bw && (0, Ob.jsx)(PH, {})]
          }), (0, Ob.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Ob.jsxs)("div", {
              className: "SmpField",
              children: [(0, Ob.jsxs)("span", {
                children: [Bb("smpShop:quantity"), "list" === hb && vb && (0, Ob.jsx)("small", {
                  children: Bb("smpShop:youHave", {
                    count: Qb
                  })
                })]
              }), (0, Ob.jsx)(nH, {
                value: jb,
                onChange: Kb,
                max: Gb,
                label: Bb("smpShop:quantity")
              }), (0, Ob.jsx)(dH, {
                options: ew,
                value: jb,
                onChange: Kb,
                ariaLabel: Bb("smpShop:quantity")
              })]
            }), (0, Ob.jsxs)("div", {
              className: "SmpField",
              children: [(0, Ob.jsx)("span", {
                children: Bb("smpShop:pricePerItem")
              }), (0, Ob.jsx)(nH, {
                value: Math.max(1, rb),
                onChange: ub,
                max: 9999999,
                step: yH,
                label: Bb("smpShop:pricePerItem")
              }), (0, Ob.jsx)(dH, {
                options: Hw,
                value: rb,
                onChange: ub,
                ariaLabel: Bb("smpShop:pricePerItem")
              })]
            })]
          }), "list" === hb && (0, Ob.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Ob.jsxs)("span", {
              children: [Bb("smpShop:youGet"), " ", (0, Ob.jsx)(qH, {
                amount: Math.max(0, Pb - nb),
                exact: !0
              })]
            }), (0, Ob.jsx)("small", {
              children: nb > 0 ? Bb("smpShop:listingFee", {
                fee: nb.toLocaleString("en-US")
              }) : Bb("smpShop:listingRules")
            })]
          }), (0, Ob.jsx)(Lb.u, {
            className: "SmpSubmit",
            disabled: !ob && !Tb && !yb,
            loading: yb || bw || vb && bb.searching,
            onClick: kb,
            children: "list" === hb ? Bb("smpShop:listButton", {
              count: jb,
              item: ww
            }) : (0, Ob.jsxs)(Ob.Fragment, {
              children: [Bb("smpShop:orderButton", {
                count: jb,
                item: ww
              }), " ", rb >= 1 && (0, Ob.jsx)(qH, {
                amount: Pb
              })]
            })
          })]
        })]
      })
    }

    function Zp() {
      var bb;
      const {
        t: wb
      } = (0, Vb.C)(), Mb = Cp(), Hb = null === (bb = Mb.shopInfo[Mb.categoryKey]) || void 0 === bb ? void 0 : bb.items, pb = ep(Hb, "search"), gb = ep(Hb, "creator"), lb = Mp(Hb, "enchantedCreator"), Ib = Mp(Hb, "listing"), Ub = ep(Hb, "empty"), tb = sp(pb, Ib.length > 0 || null !== Ub), {
        searched: Cb,
        shown: Eb,
        loading: Fb
      } = tb, [Bb, sb] = (0, eb.useState)(!1), [mb, hb] = function() {
        const [bb, wb] = (0, jp.c)("smpMarketView", "list");
        return ["grid" === bb ? "grid" : "list", wb]
      }(), zb = "grid" === mb, Xb = (0, eb.useMemo)((() => Ib.filter((bb => {
        let {
          meta: wb
        } = bb;
        return null !== wb.seller && wb.item === Cb
      })).map((bb => {
        let {
          meta: wb
        } = bb;
        return wb.pricePerItem
      })).sort(((bb, wb) => bb - wb))), [Ib, Cb]), xb = (0, eb.useMemo)((() => {
        const bb = new Set(tb.catalogue.map((bb => {
          let {
            name: wb
          } = bb;
          return wb
        })));
        return function(bb) {
          for (const wb in bb)
            if ("sell" === bb[wb].smp) return Mp(bb[wb].items, "sell").filter((bb => {
              let {
                item: wb
              } = bb;
              return !wb.enchant
            })).map((bb => {
              let {
                meta: wb
              } = bb;
              return {
                item: wb.item,
                quantity: wb.quantity,
                sellPrice: wb.pricePerItem
              }
            }));
          return []
        }(Mb.shopInfo).filter((wb => {
          let {
            item: Mb
          } = wb;
          return bb.has(Mb)
        }))
      }), [Mb.shopInfo, tb.catalogue]);
      return (0, Ob.jsx)(Xp, {
        browser: tb,
        className: "SmpMarketTab",
        recentLabel: wb("smpShop:recentlyListed"),
        action: (0, Ob.jsx)(Lb.u, {
          className: "SmpSellButton",
          onClick: () => {
            sb((bb => !bb))
          },
          children: wb("smpShop:sell")
        }),
        above: Bb && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(Yp, {
            mode: "list",
            creator: gb,
            inventory: xb,
            catalogue: tb.catalogue,
            names: tb.names,
            searching: Fb,
            prices: Xb,
            onPickItem: tb.searchFor,
            onClose: () => {
              sb(!1)
            }
          }), lb.length > 0 && (0, Ob.jsx)(fp, {
            entries: lb
          })]
        }),
        listControls: (0, Ob.jsx)(rp, {
          view: mb,
          onChange: hb
        }),
        summary: Eb && (Ib.length > 0 ? wb(1 === Ib.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Ib.length,
          price: NH(xp(Ib, "min"))
        }) : wb("smpShop:noOneSelling", {
          item: Ip(tb.names, Eb)
        })),
        list: Fb ? (0, Ob.jsx)(aH, {
          grid: zb
        }) : Ib.length > 0 ? (0, Ob.jsx)(Rp, {
          entries: Ib,
          view: mb
        }) : Ub ? (0, Ob.jsx)(uH, {
          entry: Ub
        }) : (0, Ob.jsx)(aH, {
          count: 3,
          grid: zb
        })
      })
    }

    function fp(bb) {
      let {
        entries: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), Hb = Cp(), [pb, gb] = (0, eb.useState)({});
      return (0, Ob.jsx)("div", {
        className: "SmpList",
        children: wb.map((bb => {
          var wb, eb, Vb;
          let {
            key: lb,
            item: Ib,
            meta: Ub
          } = bb;
          const tb = null !== (wb = pb[lb]) && void 0 !== wb ? wb : 1;
          return (0, Ob.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Ob.jsx)(GH, {
              item: Ub.item,
              amount: Ub.quantity,
              tier: null !== (eb = null === (Vb = Ib.enchant) || void 0 === Vb ? void 0 : Vb.tier) && void 0 !== eb ? eb : null
            }), (0, Ob.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Ob.jsx)("b", {
                children: (0, Ob.jsx)(RH.d, {
                  text: Ib.customTitle
                })
              }), (0, Ob.jsx)("small", {
                children: Mb("smpShop:enchantedListing")
              })]
            }), (0, Ob.jsx)(nH, {
              value: tb,
              onChange: bb => {
                gb({
                  ...pb,
                  [lb]: bb
                })
              },
              max: 9999999,
              step: yH,
              label: Mb("smpShop:pricePerItem")
            }), (0, Ob.jsxs)(Lb.u, {
              loading: Hb.isPending(lb),
              onClick: () => {
                Hb.act(lb, String(tb))
              },
              children: [Mb("smpShop:list"), " ", (0, Ob.jsx)(qH, {
                amount: tb
              })]
            })]
          }, lb)
        }))
      })
    }
    const Ap = (0, eb.memo)((function(bb) {
      let {
        itemKey: wb,
        item: Mb,
        quantity: eb,
        pricePerItem: Hb,
        tier: Vb,
        selected: gb,
        onSelect: lb
      } = bb;
      return (0, Ob.jsxs)("button", {
        type: "button",
        className: pb()("SmpInventorySlot", {
          SmpInventorySlotOn: gb
        }),
        title: Mb,
        onClick: () => {
          lb(wb)
        },
        children: [(0, Ob.jsx)(GH, {
          item: Mb,
          amount: eb,
          tier: Vb
        }), (0, Ob.jsx)(qH, {
          amount: Hb
        })]
      })
    }));

    function Wp() {
      var bb;
      const {
        t: wb
      } = (0, Vb.C)(), Mb = Cp(), Hb = null === (bb = Mb.shopInfo[Mb.categoryKey]) || void 0 === bb ? void 0 : bb.items, gb = Mp(Hb, "sell"), lb = ep(Hb, "empty"), [Lb, Ib] = (0, eb.useState)(null), [Ub, tb] = (0, eb.useState)({}), Cb = gb.find((bb => {
        let {
          key: wb
        } = bb;
        return wb === Lb
      }));
      return 0 === gb.length ? (0, Ob.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ob.jsx)(iH, {
          title: lb ? (0, Ob.jsx)(RH.d, {
            text: lb.item.customTitle
          }) : wb("smpShop:nothingToSell"),
          children: lb && (0, Ob.jsx)(RH.d, {
            text: lb.item.description
          })
        })
      }) : (0, Ob.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Ob.jsx)("div", {
          className: "SmpInventoryGrid",
          children: gb.map((bb => {
            var wb, Mb;
            let {
              key: eb,
              item: Hb,
              meta: pb
            } = bb;
            return (0, Ob.jsx)(Ap, {
              itemKey: eb,
              item: pb.item,
              quantity: pb.quantity,
              pricePerItem: pb.pricePerItem,
              tier: null !== (wb = null === (Mb = Hb.enchant) || void 0 === Mb ? void 0 : Mb.tier) && void 0 !== wb ? wb : null,
              selected: eb === Lb,
              onSelect: Ib
            }, eb)
          }))
        }), (0, Ob.jsx)("div", {
          className: pb()("SmpSellBar", {
            SmpSellBarIdle: !Cb
          }),
          children: Cb ? (0, Ob.jsx)(Jp, {
            entry: Cb,
            choice: Op(Cb.item, Ub[Cb.key]),
            onChoose: bb => {
              tb({
                ...Ub,
                [Cb.key]: bb
              })
            }
          }) : (0, Ob.jsx)("span", {
            className: "SmpMuted",
            children: wb("smpShop:tapToSell")
          })
        })]
      })
    }

    function Jp(bb) {
      var wb, Mb, eb, Hb;
      let {
        entry: pb,
        choice: gb,
        onChoose: lb
      } = bb;
      const {
        t: Ib
      } = (0, Vb.C)(), Ub = Cp(), {
        key: tb,
        item: Cb,
        meta: Eb
      } = pb, Fb = gp("dropdown" === (null === (wb = Cb.userInput) || void 0 === wb ? void 0 : wb.type) ? Cb.userInput.dropdownOptions : []), Bb = null === gb ? 0 : -(0, xH.d)(Cb, gb);
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [(0, Ob.jsx)(GH, {
          item: Eb.item,
          amount: Eb.quantity,
          tier: null !== (Mb = null === (eb = Cb.enchant) || void 0 === eb ? void 0 : eb.tier) && void 0 !== Mb ? Mb : null
        }), (0, Ob.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ob.jsx)("b", {
            children: (0, Ob.jsx)(RH.d, {
              text: null !== (Hb = Cb.customTitle) && void 0 !== Hb ? Hb : Eb.item
            })
          }), (0, Ob.jsx)("small", {
            children: Ib("smpShop:sellEach", {
              count: Eb.quantity
            })
          })]
        }), (0, Ob.jsx)(dH, {
          options: Fb.map((bb => {
            let {
              label: wb,
              quantity: Mb,
              isAll: eb
            } = bb;
            return {
              value: wb,
              label: eb ? Ib("smpShop:all", {
                count: Mb
              }) : String(Mb)
            }
          })),
          value: gb,
          onChange: lb,
          ariaLabel: Ib("smpShop:quantity")
        }), (0, Ob.jsxs)(Lb.u, {
          loading: Ub.isPending(tb),
          disabled: null === gb,
          onClick: () => {
            Ub.act(tb, gb)
          },
          children: [Ib("smpShop:sellButton"), " ", (0, Ob.jsx)(qH, {
            amount: Bb
          })]
        })]
      })
    }

    function Sp() {
      var bb;
      const {
        t: wb
      } = (0, Vb.C)(), Mb = Cp(), eb = null === (bb = Mb.shopInfo[Mb.categoryKey]) || void 0 === bb ? void 0 : bb.items, Hb = Mp(eb, "collect"), pb = Mp(eb, "myListing"), gb = (bb, wb) => Mb.isPending(bb) || !1 === wb.canBuy;
      return (0, Ob.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Ob.jsx)("h3", {
          className: "SmpSectionTitle",
          children: wb("smpShop:readyToCollect")
        }), Hb.length > 0 ? (0, Ob.jsx)("div", {
          className: "SmpList",
          children: Hb.map((bb => {
            var eb, Hb;
            let {
              key: pb,
              item: Vb,
              meta: lb
            } = bb;
            return (0, Ob.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ob.jsx)(GH, {
                item: "sold" === lb.type ? "Gold Coin" : lb.item,
                amount: "sold" === lb.type ? 0 : lb.quantity,
                tier: null !== (eb = null === (Hb = Vb.enchant) || void 0 === Hb ? void 0 : Hb.tier) && void 0 !== eb ? eb : null
              }), (0, Ob.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ob.jsx)("b", {
                  children: (0, Ob.jsx)(RH.d, {
                    text: Vb.customTitle
                  })
                }), (0, Ob.jsx)("small", {
                  children: (0, Ob.jsx)(RH.d, {
                    text: Vb.description
                  })
                })]
              }), (0, Ob.jsx)(Lb.p, {
                loading: gb(pb, Vb),
                onClick: () => {
                  Mb.act(pb)
                },
                children: wb("smpShop:collect")
              })]
            }, pb)
          }))
        }) : (0, Ob.jsx)(iH, {
          title: wb("smpShop:nothingToCollect"),
          children: wb("smpShop:nothingToCollectHint")
        }), (0, Ob.jsx)("h3", {
          className: "SmpSectionTitle",
          children: wb("smpShop:activeListings", {
            count: pb.length
          })
        }), pb.length > 0 ? (0, Ob.jsx)("div", {
          className: "SmpList",
          children: pb.map((bb => {
            var eb, Hb;
            let {
              key: pb,
              item: Vb,
              meta: lb
            } = bb;
            return (0, Ob.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ob.jsx)(GH, {
                item: lb.item,
                amount: lb.quantity,
                tier: null !== (eb = null === (Hb = Vb.enchant) || void 0 === Hb ? void 0 : Hb.tier) && void 0 !== eb ? eb : null
              }), (0, Ob.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ob.jsx)("b", {
                  children: (0, Ob.jsx)(RH.d, {
                    text: Vb.customTitle
                  })
                }), (0, Ob.jsx)("small", {
                  children: wb("smpShop:timeLeft", {
                    time: Vp(lb.expiresAt)
                  })
                })]
              }), (0, Ob.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Ob.jsx)(qH, {
                  amount: lb.pricePerItem
                }), (0, Ob.jsx)("small", {
                  children: wb("smpShop:each")
                })]
              }), (0, Ob.jsx)(Lb.Q, {
                loading: gb(pb, Vb),
                onClick: () => {
                  Mb.act(pb)
                },
                children: wb("smpShop:cancel")
              })]
            }, pb)
          }))
        }) : (0, Ob.jsx)(iH, {
          title: wb("smpShop:noActiveListings"),
          children: wb("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Np(bb) {
      let {
        done: wb,
        of: Mb
      } = bb;
      return (0, Ob.jsx)("span", {
        className: "SmpProgress",
        children: (0, Ob.jsx)("i", {
          style: {
            width: `${Math.min(100,wb/Math.max(1,Mb)*100)}%`
          }
        })
      })
    }

    function vp(bb) {
      var wb, Mb, eb;
      let {
        entry: Hb,
        choice: pb,
        onChoose: gb
      } = bb;
      const {
        t: lb
      } = (0, Vb.C)(), Ib = Cp(), {
        key: Ub,
        item: tb,
        meta: Cb
      } = Hb, Eb = "dropdown" === (null === (wb = tb.userInput) || void 0 === wb ? void 0 : wb.type) ? tb.userInput.dropdownOptions : [], Fb = !0 === Cb.processing, Bb = null !== Cb.creator && (Cb.owned > 0 || Fb), sb = Bb && Cb.owned > 0 ? gp(Eb) : [], mb = null === pb ? 0 : null !== (Mb = null === (eb = sb.find((bb => bb.label === pb))) || void 0 === eb ? void 0 : eb.quantity) && void 0 !== Mb ? Mb : 0;
      return (0, Ob.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Ob.jsx)(GH, {
          item: Cb.item
        }), (0, Ob.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ob.jsx)("b", {
            children: (0, Ob.jsx)(RH.d, {
              text: tb.customTitle
            })
          }), (0, Ob.jsxs)("small", {
            children: [(0, Ob.jsx)(qH, {
              amount: Cb.pricePerItem
            }), " ", lb("smpShop:each"), " \xb7", " ", null === Cb.creator ? lb("smpShop:you") : (0, Ob.jsx)(RH.d, {
              text: [{
                entityName: Cb.creator
              }]
            })]
          }), (0, Ob.jsx)(Np, {
            done: Cb.delivered,
            of: Cb.wanted
          })]
        }), Bb ? (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(dH, {
            options: sb.map((bb => {
              let {
                label: wb,
                quantity: Mb,
                isAll: eb
              } = bb;
              return {
                value: wb,
                label: eb ? lb("smpShop:max", {
                  count: Mb
                }) : String(Mb)
              }
            })),
            value: pb,
            onChange: gb,
            ariaLabel: lb("smpShop:quantity")
          }), (0, Ob.jsxs)(Lb.u, {
            loading: Ib.isPending(Ub) || Fb,
            disabled: null === pb,
            onClick: () => {
              Ib.act(Ub, pb)
            },
            children: [lb("smpShop:deliver"), " ", (0, Ob.jsx)(qH, {
              amount: mb * Cb.pricePerItem
            })]
          })]
        }) : (0, Ob.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Cb.creator ? lb("smpShop:yourOrder") : lb("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Qp() {
      var bb;
      const {
        t: wb
      } = (0, Vb.C)(), Mb = Cp(), Hb = null === (bb = Mb.shopInfo[Mb.categoryKey]) || void 0 === bb ? void 0 : bb.items, pb = ep(Hb, "search"), gb = ep(Hb, "creator"), lb = Mp(Hb, "order"), Ib = ep(Hb, "empty"), Ub = sp(pb, lb.length > 0 || null !== Ib), [tb, Cb] = (0, eb.useState)(!1), [Eb, Fb] = (0, eb.useState)({});
      return (0, Ob.jsx)(Xp, {
        browser: Ub,
        recentLabel: wb("smpShop:recentOrders"),
        action: (0, Ob.jsx)(Lb.u, {
          onClick: () => {
            Cb((bb => !bb))
          },
          children: wb("smpShop:createOrder")
        }),
        above: tb && (0, Ob.jsx)(Yp, {
          mode: "order",
          creator: gb,
          catalogue: Ub.catalogue,
          names: Ub.names,
          searching: Ub.loading,
          prices: [],
          onPickItem: Ub.searchFor,
          onClose: () => {
            Cb(!1)
          }
        }),
        onBack: () => {
          Cb(!1)
        },
        summary: lb.length > 0 && wb(1 === lb.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: lb.length,
          price: NH(xp(lb, "max"))
        }),
        list: Ub.loading ? (0, Ob.jsx)(aH, {}) : lb.length > 0 ? (0, Ob.jsx)(Ep.b, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Hp,
          observerUpdateDeps: [lb.length],
          children: lb.map((bb => (0, Ob.jsx)(vp, {
            entry: bb,
            choice: Op(bb.item, Eb[bb.key]),
            onChoose: wb => {
              Fb({
                ...Eb,
                [bb.key]: wb
              })
            }
          }, bb.key)))
        }) : Ib ? (0, Ob.jsx)(uH, {
          entry: Ib
        }) : (0, Ob.jsx)(aH, {
          count: 3
        })
      })
    }

    function Gp() {
      var bb;
      const {
        t: wb
      } = (0, Vb.C)(), Mb = Cp(), eb = Mp(null === (bb = Mb.shopInfo[Mb.categoryKey]) || void 0 === bb ? void 0 : bb.items, "myOrder");
      return 0 === eb.length ? (0, Ob.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ob.jsx)(iH, {
          title: wb("smpShop:noOrders"),
          children: wb("smpShop:noOrdersHint")
        })
      }) : (0, Ob.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ob.jsx)("div", {
          className: "SmpList",
          children: eb.map((bb => {
            let {
              key: eb,
              item: Hb,
              meta: pb
            } = bb;
            const Vb = Mb.isPending(eb) || !1 === Hb.canBuy;
            return (0, Ob.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ob.jsx)(GH, {
                item: pb.item,
                amount: pb.collectable
              }), (0, Ob.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ob.jsx)("b", {
                  children: (0, Ob.jsx)(RH.d, {
                    text: Hb.customTitle
                  })
                }), (0, Ob.jsxs)("small", {
                  children: [(0, Ob.jsx)(qH, {
                    amount: pb.pricePerItem
                  }), " ", wb("smpShop:each"), pb.collectable > 0 && ` \xb7 ${wb("smpShop:readyCount",{count:pb.collectable})}`]
                }), (0, Ob.jsx)(Np, {
                  done: pb.delivered,
                  of: pb.wanted
                })]
              }), pb.collectable > 0 ? (0, Ob.jsx)(Lb.p, {
                loading: Vb,
                onClick: () => {
                  Mb.act(eb)
                },
                children: wb("smpShop:collectCount", {
                  count: pb.collectable
                })
              }) : (0, Ob.jsx)(Lb.Q, {
                loading: Vb,
                onClick: () => {
                  Mb.act(eb)
                },
                children: wb("smpShop:cancel")
              })]
            }, eb)
          }))
        })
      })
    }
    const qp = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      ap = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function ip(bb, wb) {
      let Mb = !1;
      const eb = {};
      for (const Hb in bb) wb(Hb, bb[Hb]) ? eb[Hb] = bb[Hb] : Mb = !0;
      return Mb ? eb : bb
    }

    function dp(bb) {
      var wb, Mb, Hb, lb;
      const {
        show: Lb,
        shopInfo: Ib,
        selectedCategoryKey: Ub
      } = bb, {
        t: tb
      } = (0, Vb.C)(), Cb = null !== Ub && void 0 !== Ub ? Ub : "", Eb = wp(Ib, Cb), Fb = null === (wb = Ib[Cb]) || void 0 === wb ? void 0 : wb.items, Bb = null !== Eb, [sb, mb] = (0, eb.useState)({}), [hb, zb] = (0, eb.useState)([]), [Xb, xb] = (0, eb.useState)(!1), [jb, Kb] = (0, eb.useState)(null), [, rb] = (0, eb.useState)(0), Rb = (0, eb.useRef)(0), Db = (0, eb.useRef)({}), cb = (0, eb.useRef)({
        items: Fb,
        pending: sb,
        shopInfo: Ib,
        active: Bb,
        show: Lb,
        canAfford: bb.canAfford,
        buy: bb.buy
      });
      cb.current = {
        items: Fb,
        pending: sb,
        shopInfo: Ib,
        active: Bb,
        show: Lb,
        canAfford: bb.canAfford,
        buy: bb.buy
      };
      const Yb = (0, eb.useCallback)((bb => {
        Rb.current++;
        const wb = Rb.current;
        zb((Mb => [{
          id: wb,
          text: bb
        }, ...Mb].slice(0, 8))), Kb(wb)
      }), []);
      (0, eb.useEffect)((() => {
        if (null === jb) return;
        const bb = setTimeout((() => {
          Kb(null)
        }), 3e3);
        return () => {
          clearTimeout(bb)
        }
      }), [jb]), (0, eb.useEffect)((() => {
        const wb = bb.message;
        if (!wb) return;
        const {
          shopInfo: Mb,
          active: eb,
          items: Hb
        } = cb.current, pb = null !== wb.categoryKey ? null !== wp(Mb, wb.categoryKey) : eb;
        (pb || eb) && Yb(wb.text), pb && mb((bb => ip(bb, (bb => {
          var wb, Mb;
          return !qp.has(null === Hb || void 0 === Hb || null === (wb = Hb[bb]) || void 0 === wb || null === (Mb = wb.smp) || void 0 === Mb ? void 0 : Mb.kind)
        }))))
      }), [bb.message, Yb]), (0, eb.useEffect)((() => {
        mb((bb => ip(bb, ((bb, wb) => Up(null === Fb || void 0 === Fb ? void 0 : Fb[bb]) === wb.snapshot))))
      }), [Ib, Fb]);
      const Zb = Object.keys(sb).length > 0;
      (0, eb.useEffect)((() => {
        if (!Zb) return;
        const bb = setInterval((() => {
          const {
            pending: bb,
            items: wb,
            show: Mb
          } = cb.current;
          if (!Mb) return;
          rb((bb => bb + 1));
          const eb = Date.now(),
            Hb = Object.keys(bb).filter((Mb => eb - bb[Mb].at >= 12e3 && Up(null === wb || void 0 === wb ? void 0 : wb[Mb]) === bb[Mb].snapshot));
          if (0 === Hb.length) return;
          const pb = Hb.some((Mb => {
            var eb, Hb;
            return "search" !== (null === wb || void 0 === wb || null === (eb = wb[Mb]) || void 0 === eb || null === (Hb = eb.smp) || void 0 === Hb ? void 0 : Hb.kind) || bb[Mb].resend
          }));
          for (const Vb of Hb) Db.current[Vb] = eb;
          mb((bb => ip(bb, (bb => !Hb.includes(bb))))), pb && Yb(tb("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(bb)
        }
      }), [Zb]), (0, eb.useEffect)((() => {
        mb({})
      }), [Cb]), (0, eb.useEffect)((() => {
        Lb || xb(!1)
      }), [Lb]);
      const fb = (0, eb.useCallback)((function(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: eb,
            pending: Hb,
            canAfford: pb,
            buy: Vb
          } = cb.current, gb = null === eb || void 0 === eb ? void 0 : eb[bb];
          if (!gb || bb in Hb || !1 === gb.canBuy) return !1;
          if (!pb(gb, (0, xH.d)(gb, wb))) return !1;
          Vb(bb, gb, wb);
          const lb = {
            snapshot: Up(gb),
            at: Date.now(),
            resend: Mb
          };
          return cb.current.pending = {
            ...cb.current.pending,
            [bb]: lb
          }, mb((wb => ({
            ...wb,
            [bb]: lb
          }))), !0
        }), []),
        Ab = (0, eb.useMemo)((() => ({
          shopInfo: Ib,
          categoryKey: Cb,
          canAfford: bb.canAfford,
          isPending: bb => bb in sb,
          gaveUpAt: bb => {
            var wb;
            return null !== (wb = Db.current[bb]) && void 0 !== wb ? wb : 0
          },
          act: fb,
          notify: Yb
        })), [Ib, Cb, bb.canAfford, sb, fb, Yb]),
        Wb = Math.min(...Object.values(sb).map((bb => bb.at))),
        Jb = Zb && Date.now() - Wb > 1500,
        Sb = hb.length > 1,
        Nb = null !== (Mb = null === (Hb = Ib[Cb]) || void 0 === Hb ? void 0 : Hb.customTitle) && void 0 !== Mb ? Mb : Cb,
        vb = null === (lb = Ib[Cb]) || void 0 === lb ? void 0 : lb.description;
      let Qb = null;
      return "market" === Eb ? Qb = (0, Ob.jsx)(Zp, {}) : "sell" === Eb ? Qb = (0, Ob.jsx)(Wp, {}) : "collect" === Eb ? Qb = (0, Ob.jsx)(Sp, {}) : "orders" === Eb ? Qb = (0, Ob.jsx)(Qp, {}) : "myOrders" === Eb && (Qb = (0, Ob.jsx)(Gp, {})), (0, Ob.jsx)(tp.Provider, {
        value: Ab,
        children: (0, Ob.jsx)("div", {
          className: "SmpShopHost",
          hidden: !Bb,
          children: (0, Ob.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Ob.jsx)("header", {
              className: "SmpHeader",
              children: (0, Ob.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Ob.jsxs)("h2", {
                  children: [Eb && (0, Ob.jsx)(gb.b, {
                    name: ap[Eb]
                  }), tb(Nb)]
                }), vb && (0, Ob.jsx)("p", {
                  children: (0, Ob.jsx)(RH.d, {
                    text: vb
                  })
                })]
              })
            }), (0, Ob.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Lb && Qb
            }), (0, Ob.jsxs)("button", {
              type: "button",
              className: pb()("SmpStatus", {
                SmpStatusWaiting: Zb,
                SmpStatusFresh: !Zb && null !== jb,
                SmpStatusHasHistory: Sb
              }),
              "aria-live": "polite",
              "aria-expanded": Sb ? Xb : void 0,
              onClick: () => {
                Sb && xb((bb => !bb))
              },
              children: [Zb ? (0, Ob.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Ob.jsx)(PH, {}), tb(Jb ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : hb[0] ? (0, Ob.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Ob.jsx)(RH.d, {
                  text: hb[0].text
                })
              }, hb[0].id) : (0, Ob.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: tb("smpShop:ready")
              }), Sb && (0, Ob.jsx)("small", {
                children: tb("smpShop:recentMessages", {
                  count: hb.length
                })
              })]
            }), Xb && Sb && (0, Ob.jsx)("div", {
              className: "SmpStatusHistory",
              children: hb.map((bb => (0, Ob.jsx)("div", {
                children: (0, Ob.jsx)(RH.d, {
                  text: bb.text
                })
              }, bb.id)))
            })]
          })
        })
      })
    }
    var Pp = Mb(2167),
      np = Mb(35339);
    const yp = "\x1floadout";

    function op(bb) {
      const wb = [];
      for (const Mb in bb) {
        const eb = bb[Mb].loadout;
        eb && wb.push({
          categoryKey: Mb,
          config: eb
        })
      }
      return wb.sort(((bb, wb) => Tp(bb.config) - Tp(wb.config)))
    }

    function Tp(bb) {
      return "gun" === bb.slot ? 0 : bb.tier
    }

    function kp(bb) {
      const wb = [];
      for (const Mb of JH(bb)) bb[Mb].loadout ? wb.includes(yp) || wb.push(yp) : wb.push(Mb);
      return wb
    }

    function bV(bb, wb) {
      const Mb = [];
      for (const eb in bb) {
        const Hb = bb[eb].loadout;
        (null === Hb || void 0 === Hb ? void 0 : Hb.kind) === wb && Mb.push({
          key: eb,
          item: bb[eb],
          meta: Hb
        })
      }
      return Mb.sort(((bb, wb) => {
        const Mb = MV(bb.meta) - MV(wb.meta);
        return 0 !== Mb ? Mb : bb.meta.free !== wb.meta.free ? bb.meta.free ? -1 : 1 : bb.key.localeCompare(wb.key)
      }))
    }
    const wV = ["assaultRifle", "battleRifle", "smg", "shotgun", "marksman", "sniper", "machineGun", "pistol", "machinePistol"];

    function MV(bb) {
      return "gun" === bb.kind ? wV.indexOf(bb.gunClass) : 0
    }
    const eV = ["damage", "fireRate", "accuracy"];

    function HV(bb, wb) {
      var Mb, eb, Hb;
      const pb = np.b[bb];
      if (!pb) return null;
      const Vb = {
        ...pb,
        ...wb
      };
      return {
        damage: Vb.damage * (null !== (Mb = Vb.shotPelletCount) && void 0 !== Mb ? Mb : 1),
        fireRate: pV(Vb.fireRate, null !== (eb = Vb.burstCount) && void 0 !== eb ? eb : 1, null !== (Hb = Vb.burstDelay) && void 0 !== Hb ? Hb : 0),
        accuracy: -(Vb.altInaccuracyStanding + Vb.altInaccuracyFromShot),
        clipSize: Vb.clipSize
      }
    }

    function pV(bb, wb, Mb) {
      return 6e4 * wb / (6e4 / bb + (wb - 1) * Mb)
    }

    function VV(bb, wb, Mb, eb) {
      if ("accuracy" !== bb) return Mb <= 0 ? 1 : wb / Mb;
      const Hb = Math.sqrt(-eb) - Math.sqrt(-Mb);
      return Hb <= 0 ? 1 : 1 - (Math.sqrt(-wb) - Math.sqrt(-Mb)) / Hb * .94
    }

    function gV(bb) {
      let {
        iconName: wb
      } = bb;
      return sb.gameBridge.lookup("isItemName", wb) ? (0, Ob.jsx)(rH.c, {
        itemName: wb,
        amount: 1
      }) : (0, Ob.jsx)(gb.b, {
        name: wb,
        className: "2x"
      })
    }
    const lV = {
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

    function LV(bb) {
      let {
        entry: wb,
        stats: Mb,
        bars: eb,
        compared: Hb,
        buy: lb,
        canAfford: Lb,
        currency: Ib
      } = bb;
      const {
        t: Ub
      } = (0, Vb.C)(), {
        meta: tb
      } = wb;
      return (0, Ob.jsxs)("div", {
        className: pb()("LoadoutCard", "LoadoutGunCard", {
          LoadoutCardEquipped: tb.equipped,
          LoadoutCardLocked: !tb.unlocked
        }),
        children: [!tb.unlocked && (0, Ob.jsx)(gb.b, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, Ob.jsx)("div", {
          className: "LoadoutGunArt",
          children: (0, Ob.jsx)(rH.c, {
            itemName: tb.gun,
            amount: 0,
            gunTransform: "none"
          })
        }), (0, Ob.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, Ob.jsx)("b", {
            children: wb.key
          }), (0, Ob.jsxs)("small", {
            children: [Ub(lV[tb.gunClass]), Mb && (0, Ob.jsxs)(Ob.Fragment, {
              children: [" \xb7 ", Ub("loadoutShop:rounds", {
                count: Mb.clipSize
              })]
            })]
          })]
        }), Mb && eb && (0, Ob.jsx)("div", {
          className: "LoadoutStats",
          children: eV.map((bb => {
            const wb = Hb ? function(bb, wb) {
              const Mb = Math.max(Math.abs(bb), Math.abs(wb), 1);
              return Math.abs(bb - wb) / Mb < .05 ? null : bb > wb ? "better" : "worse"
            }(Mb[bb], Hb[bb]) : null;
            return (0, Ob.jsxs)("div", {
              className: "LoadoutStat",
              children: [(0, Ob.jsx)("span", {
                children: Ub(`loadoutShop:${bb}`)
              }), (0, Ob.jsx)("div", {
                className: "LoadoutBar",
                children: (0, Ob.jsx)("i", {
                  className: pb()({
                    LoadoutBarBetter: "better" === wb,
                    LoadoutBarWorse: "worse" === wb
                  }),
                  style: {
                    width: 100 * eb[bb] + "%"
                  }
                })
              })]
            }, bb)
          }))
        }), (0, Ob.jsx)(OV, {
          entry: wb,
          buy: lb,
          canAfford: Lb,
          currency: Ib
        })]
      })
    }

    function IV(bb) {
      let {
        entry: wb,
        buy: Mb,
        canAfford: eb,
        currency: Hb
      } = bb;
      const {
        meta: Vb
      } = wb;
      return (0, Ob.jsxs)("div", {
        className: pb()("LoadoutCard", "LoadoutPerkCard", {
          LoadoutCardEquipped: Vb.equipped,
          LoadoutCardLocked: !Vb.unlocked
        }),
        children: [!Vb.unlocked && (0, Ob.jsx)(gb.b, {
          name: "lock",
          className: "LoadoutCardLock"
        }), (0, Ob.jsx)("div", {
          className: "LoadoutPerkIcon",
          children: (0, Ob.jsx)(gb.b, {
            name: Vb.icon
          })
        }), (0, Ob.jsxs)("div", {
          className: "LoadoutCardTitle",
          children: [(0, Ob.jsx)("b", {
            children: wb.key
          }), (0, Ob.jsx)("small", {
            children: Vb.description
          })]
        }), (0, Ob.jsx)(OV, {
          entry: wb,
          buy: Mb,
          canAfford: eb,
          currency: Hb
        })]
      })
    }

    function OV(bb) {
      let {
        entry: wb,
        buy: Mb,
        canAfford: eb,
        currency: Hb
      } = bb;
      const {
        t: lb
      } = (0, Vb.C)(), {
        meta: Ib,
        item: Ub
      } = wb, tb = () => {
        Mb(wb.key, Ub)
      };
      return (0, Ob.jsxs)("div", {
        className: "LoadoutCardFoot",
        children: [Ib.equipped && (0, Ob.jsxs)("span", {
          className: "LoadoutCardState LoadoutCardStateEquipped",
          children: [(0, Ob.jsx)(gb.b, {
            name: "check"
          }), lb("loadoutShop:equipped")]
        }), Ib.unlocked && !Ib.equipped && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)("span", {
            className: "LoadoutCardState",
            children: Ib.free ? lb("loadoutShop:free") : lb("loadoutShop:owned")
          }), (0, Ob.jsx)(Lb.f, {
            className: "LoadoutCardButton",
            disabled: !eb,
            onClick: tb,
            children: lb("loadoutShop:equip")
          })]
        }), !Ib.unlocked && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsxs)("span", {
            className: pb()("LoadoutPrice", {
              LoadoutPriceShort: !eb
            }),
            children: [Hb && (0, Ob.jsx)("span", {
              className: "LoadoutPriceIcon",
              style: {
                color: Hb.iconColour
              },
              children: (0, Ob.jsx)(gV, {
                iconName: Hb.icon
              })
            }), Ub.cost]
          }), (0, Ob.jsx)(Lb.p, {
            className: "LoadoutCardButton",
            disabled: !eb,
            onClick: tb,
            children: lb("loadoutShop:unlock")
          })]
        })]
      })
    }

    function UV(bb) {
      let {
        shopInfo: wb,
        selectedCategoryKey: Mb,
        selectCategory: Hb,
        buy: pb,
        canAfford: gb,
        currencyAmounts: lb
      } = bb;
      const {
        t: Lb
      } = (0, Vb.C)(), Ib = op(wb), {
        loadout: Ub,
        items: tb
      } = wb[Mb], Cb = bb => gb(bb, (0, xH.d)(bb, null)), Eb = {
        buy: (bb, wb) => {
          Cb(wb) && pb(bb, wb)
        },
        affordable: Cb,
        currencyAmounts: lb
      };
      return (0, Ob.jsx)("div", {
        className: "LoadoutShopHost",
        children: (0, Ob.jsxs)("div", {
          className: "LoadoutShop",
          children: [(0, Ob.jsxs)("header", {
            className: "LoadoutHeader",
            children: [(0, Ob.jsx)("h2", {
              children: Lb("loadoutShop:title")
            }), (0, Ob.jsx)("p", {
              children: Lb("loadoutShop:subtitle")
            })]
          }), (0, Ob.jsx)("nav", {
            className: "LoadoutSlots",
            "data-pad-tabs": "3",
            children: Ib.map((bb => {
              var pb, Vb;
              const {
                config: gb
              } = bb;
              return (0, Ob.jsxs)(eb.Fragment, {
                children: ["perk" === gb.slot && (0, Ob.jsx)(CV, {
                  points: gb.points,
                  reached: (null !== (pb = null === lb || void 0 === lb || null === (Vb = lb[gb.pointsCurrency]) || void 0 === Vb ? void 0 : Vb.amount) && void 0 !== pb ? pb : 0) >= gb.points
                }), (0, Ob.jsx)(EV, {
                  slot: bb,
                  items: wb[bb.categoryKey].items,
                  selected: bb.categoryKey === Mb,
                  onClick: () => {
                    Hb(bb.categoryKey)
                  }
                })]
              }, bb.categoryKey)
            }))
          }), (0, Ob.jsxs)("main", {
            className: "LoadoutPicker",
            "data-pad-initial-area": !0,
            children: ["gun" === (null === Ub || void 0 === Ub ? void 0 : Ub.slot) && (0, Ob.jsx)(BV, {
              items: tb,
              ...Eb
            }), "perk" === (null === Ub || void 0 === Ub ? void 0 : Ub.slot) && (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsx)("p", {
                className: "LoadoutPickerNote",
                children: Lb("loadoutShop:tierPicker", {
                  tier: Ub.tier,
                  points: Ub.points
                })
              }), (0, Ob.jsx)("div", {
                className: "LoadoutPerkGrid",
                children: bV(tb, "perk").map((bb => (0, Ob.jsx)(IV, {
                  entry: bb,
                  buy: Eb.buy,
                  canAfford: Cb(bb.item),
                  currency: tV(lb, bb.item)
                }, bb.key)))
              })]
            })]
          })]
        })
      })
    }

    function tV(bb, wb) {
      return wb.currency ? null === bb || void 0 === bb ? void 0 : bb[wb.currency] : void 0
    }

    function CV(bb) {
      let {
        points: wb,
        reached: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: pb()("LoadoutStep", {
          LoadoutStepReached: Mb
        }),
        title: eb("loadoutShop:pointsTooltip", {
          points: wb
        }),
        children: [(0, Ob.jsx)(gb.b, {
          name: "arrow-right",
          className: "LoadoutStepArrow"
        }), (0, Ob.jsxs)("span", {
          children: [Mb && (0, Ob.jsx)(gb.b, {
            name: "check"
          }), eb("loadoutShop:points", {
            points: wb
          })]
        })]
      })
    }

    function EV(bb) {
      let {
        slot: wb,
        items: Mb,
        selected: eb,
        onClick: Hb
      } = bb;
      const {
        t: lb
      } = (0, Vb.C)(), {
        config: Lb
      } = wb, Ib = "gun" === Lb.slot ? FV(bV(Mb, "gun")) : FV(bV(Mb, "perk")), Ub = "gun" === Lb.slot ? lb("loadoutShop:gun") : lb("loadoutShop:tier", {
        tier: Lb.tier
      });
      return (0, Ob.jsxs)("button", {
        type: "button",
        className: pb()("LoadoutSlot", {
          LoadoutSlotSelected: eb,
          LoadoutSlotEmpty: !Ib
        }),
        "data-pad-tab": !0,
        "data-pad-selected": eb ? "true" : void 0,
        "aria-pressed": eb,
        onClick: Hb,
        children: [(0, Ob.jsxs)("span", {
          className: "LoadoutSlotArt",
          children: ["gun" === (null === Ib || void 0 === Ib ? void 0 : Ib.meta.kind) && (0, Ob.jsx)(rH.c, {
            itemName: Ib.meta.gun,
            amount: 0,
            gunTransform: "none"
          }), "perk" === (null === Ib || void 0 === Ib ? void 0 : Ib.meta.kind) && (0, Ob.jsx)(gb.b, {
            name: Ib.meta.icon
          }), !Ib && (0, Ob.jsx)(gb.b, {
            name: "plus"
          })]
        }), (0, Ob.jsxs)("span", {
          className: "LoadoutSlotText",
          children: [(0, Ob.jsx)("small", {
            children: Ub
          }), (0, Ob.jsx)("b", {
            children: Ib ? Ib.key : lb("gun" === Lb.slot ? "loadoutShop:noGun" : "loadoutShop:noPerk")
          })]
        })]
      })
    }

    function FV(bb) {
      var wb;
      return null !== (wb = bb.find((bb => bb.meta.equipped))) && void 0 !== wb ? wb : null
    }

    function BV(bb) {
      let {
        items: wb,
        buy: Mb,
        affordable: eb,
        currencyAmounts: Hb
      } = bb;
      const {
        t: pb
      } = (0, Vb.C)(), gb = bV(wb, "gun"), lb = FV(gb), Lb = {};
      for (const {
          meta: Vb
        }
        of gb) {
        const bb = Pp.c.get(`${Vb.gun}GunStats`),
          wb = HV(Vb.gun, bb);
        wb && (Lb[Vb.gun] = wb)
      }
      const Ib = function(bb) {
          const wb = {},
            Mb = {};
          for (const Hb of eV) {
            wb[Hb] = -1 / 0, Mb[Hb] = 1 / 0;
            for (const eb in bb) wb[Hb] = Math.max(wb[Hb], bb[eb][Hb]), Mb[Hb] = Math.min(Mb[Hb], bb[eb][Hb])
          }
          const eb = {};
          for (const Hb in bb) {
            eb[Hb] = {};
            for (const pb of eV) eb[Hb][pb] = Math.max(.06, VV(pb, bb[Hb][pb], wb[pb], Mb[pb]))
          }
          return eb
        }(Lb),
        Ub = lb ? Lb[lb.meta.gun] : void 0,
        [tb, Cb] = pb("loadoutShop:comparing", {
          gun: "\x01"
        }).split("\x01");
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [lb && (0, Ob.jsxs)("p", {
          className: "LoadoutPickerNote",
          children: [tb, (0, Ob.jsx)("b", {
            className: "LoadoutGold",
            children: lb.key
          }), Cb]
        }), (0, Ob.jsx)("div", {
          className: "LoadoutGunGrid",
          children: gb.map((bb => (0, Ob.jsx)(LV, {
            entry: bb,
            stats: Lb[bb.meta.gun],
            bars: Ib[bb.meta.gun],
            compared: bb.meta.equipped ? void 0 : Ub,
            buy: Mb,
            canAfford: eb(bb.item),
            currency: tV(Hb, bb.item)
          }, bb.key)))
        })]
      })
    }
    var sV = Mb(35351),
      mV = Mb(35342);

    function hV(bb) {
      let {
        currency: wb,
        info: Mb,
        smaller: Hb,
        show: Vb
      } = bb;
      const gb = (0, eb.useRef)(null);
      (0, mV.d)(wb, gb, Vb);
      const lb = (0, mV.g)(wb, Mb.amount);
      return (0, Ob.jsxs)("div", {
        className: pb()("ShopCurrencyDiv", {
          SmallText: Hb
        }),
        children: [(0, Ob.jsxs)("div", {
          className: "ShopCurrencyDetails",
          children: [(0, Ob.jsx)("div", {
            ref: gb,
            className: "ShopCurrencyAmtIcon",
            style: {
              color: Mb.iconColour
            },
            children: (0, Ob.jsx)(gV, {
              iconName: Mb.icon
            })
          }), "\xa0", (0, sV.b)(lb, 6)]
        }), void 0 !== Mb.subtext && Mb.subtext.length > 0 && (0, Ob.jsx)("div", {
          className: "ShopCurrencySubtext",
          children: (0, Ob.jsx)(RH.d, {
            text: Mb.subtext
          })
        })]
      })
    }
    class zV {
      constructor(bb) {
        this.info = bb
      }
      static fromShopInfo(bb) {
        const wb = {};
        for (const Mb in bb) {
          const eb = !0 === bb[Mb].redDot && !0 !== bb[Mb].forceRemoveRedDot;
          wb[Mb] = {
            redDot: eb,
            items: {}
          };
          for (const Hb in bb[Mb].items) {
            const eb = bb[Mb].items[Hb],
              pb = !0 === eb.redDot && !0 !== eb.forceRemoveRedDot;
            wb[Mb].items[Hb] = {
              redDot: pb
            }
          }
        }
        return new zV(wb)
      }
      anyCategoryHasRedDots() {
        for (const bb in this.info)
          if (this.categoryHasRedDot(bb)) return !0;
        return !1
      }
      doesCategoryExist(bb) {
        return !(0, DM.K)(this.info[bb])
      }
      categoryHasRedDot(bb) {
        return !0 === this.info[bb].redDot
      }
      updateCategoryRedDot(bb, wb) {
        this.info[bb].redDot = wb
      }
      doesItemExist(bb, wb) {
        return this.doesCategoryExist(bb) && !(0, DM.K)(this.info[bb].items[wb])
      }
      itemHasRedDot(bb, wb) {
        return !0 === this.info[bb].items[wb].redDot
      }
      updateItemRedDot(bb, wb, Mb) {
        this.info[bb].items[wb].redDot = Mb
      }
      shallowCopy() {
        return new zV(this.info)
      }
    }

    function XV(bb, wb) {
      return `${bb}\x1f${wb}`
    }

    function xV(bb, wb, Mb) {
      const eb = zV.fromShopInfo(bb);
      for (const gb in bb) {
        var Hb;
        if (Mb.doesCategoryExist(gb)) {
          (null === (Hb = wb[gb]) || void 0 === Hb ? void 0 : Hb.redDot) === bb[gb].redDot && eb.updateCategoryRedDot(gb, Mb.categoryHasRedDot(gb));
          for (const Hb in bb[gb].items) {
            var pb, Vb;
            Mb.doesItemExist(gb, Hb) && ((null === (pb = wb[gb]) || void 0 === pb || null === (Vb = pb.items[Hb]) || void 0 === Vb ? void 0 : Vb.redDot) === bb[gb].items[Hb].redDot && eb.updateItemRedDot(gb, Hb, Mb.itemHasRedDot(gb, Hb)))
          }
        }
      }
      return eb
    }

    function jV(bb, wb, Mb, eb) {
      if (null !== wb && !eb) return wb;
      if (null === Mb || !bb[Mb]) {
        const wb = JH(bb);
        return wb.length > 0 ? wb[0] : null
      }
      return Mb
    }

    function KV(bb, wb, Mb) {
      if ((0, DM.K)(bb) || 0 === Object.keys(bb).length) return {
        shopInfo: {},
        redDotInfo: zV.fromShopInfo({}),
        selectedCategoryKey: null
      };
      const {
        shopInfo: eb,
        autoSelectCategory: Hb
      } = function(bb) {
        const wb = Rb.siteUsedData[Rb.siteUsed].adConfig.showRewardedAds,
          Mb = {};
        let eb = null;
        for (const Hb in bb) {
          const pb = bb[Hb],
            Vb = {};
          let gb = !1;
          for (const bb in pb.items) {
            const Mb = pb.items[bb];
            (0, xH.i)(Mb, wb) && (Vb[bb] = Mb, gb = !0)
          }
          gb && (Mb[Hb] = {
            ...pb,
            items: Vb
          }, !0 === pb.autoSelectCategory && (eb = Hb))
        }
        return {
          shopInfo: Mb,
          autoSelectCategory: eb
        }
      }(bb);
      return {
        shopInfo: eb,
        redDotInfo: xV(eb, wb.shopInfo, wb.redDotInfo),
        selectedCategoryKey: jV(eb, Hb, wb.selectedCategoryKey, Mb)
      }
    }

    function rV(bb, wb, Mb, eb, Hb) {
      const pb = {},
        Vb = (bb, wb, Vb, gb) => {
          var lb, Lb;
          const Ib = XV(bb, wb),
            Ob = null !== (lb = Mb[Ib]) && void 0 !== lb ? lb : Mb[wb];
          if (null !== (Lb = gb.userInput) && void 0 !== Lb && Lb.type) switch (gb.userInput.type) {
            case "dropdown": {
              var Ub;
              const bb = !Ob || !gb.userInput.dropdownOptions.some((bb => (0, xH.f)(bb) === Ob)),
                wb = gb.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Vb || void 0 === Vb || null === (Ub = Vb.userInput) || void 0 === Ub ? void 0 : Ub.type) || JSON.stringify(Vb.userInput.dropdownOptions) !== JSON.stringify(gb.userInput.dropdownOptions)),
                Mb = gb.userInput,
                eb = !(0, DM.K)(Mb.initialValue) && Mb.dropdownOptions.some((bb => (0, xH.f)(bb) === Mb.initialValue));
              var tb;
              if (bb || wb)
                if (eb) pb[Ib] = null !== (tb = gb.userInput.initialValue) && void 0 !== tb ? tb : null;
                else gb.userInput.dropdownOptions.length > 0 ? pb[Ib] = (0, xH.f)(gb.userInput.dropdownOptions[0]) : pb[Ib] = null;
              else pb[Ib] = Ob;
              return
            }
            case "text":
            case "number":
              var Cb, Eb, Fb;
              if ((null === Vb || void 0 === Vb ? void 0 : Vb.userInput) !== gb.userInput) pb[Ib] = null !== (Cb = null !== (Eb = gb.userInput.initialValue) && void 0 !== Eb ? Eb : Ob) && void 0 !== Cb ? Cb : "";
              else pb[Ib] = null !== (Fb = null !== Ob && void 0 !== Ob ? Ob : gb.userInput.initialValue) && void 0 !== Fb ? Fb : "";
              return;
            case "color":
              var Bb, sb, mb;
              if ((null === Vb || void 0 === Vb ? void 0 : Vb.userInput) !== gb.userInput) pb[Ib] = null !== (Bb = null !== (sb = gb.userInput.initialValue) && void 0 !== sb ? sb : Ob) && void 0 !== Bb ? Bb : "#000000";
              else pb[Ib] = null !== (mb = null !== Ob && void 0 !== Ob ? Ob : gb.userInput.initialValue) && void 0 !== mb ? mb : "#000000";
              return;
            case "player": {
              const bb = (0, xH.g)(eb, Hb, gb.userInput);
              return void(Ob && bb.includes(Ob) ? pb[Ib] = Ob : pb[Ib] = bb.length > 0 ? bb[0] : null)
            }
          }
        };
      for (const lb in bb)
        for (const Mb in bb[lb].items) {
          var gb;
          const eb = bb[lb].items[Mb];
          Vb(lb, Mb, null === (gb = wb[lb]) || void 0 === gb ? void 0 : gb.items[Mb], eb)
        }
      return pb
    }

    function RV(bb, wb) {
      return !(0, DM.K)(wb) && !(0, DM.K)(bb) && wb in bb
    }
    const DV = (0, eb.memo)((function(bb) {
      var wb, Mb;
      let {
        show: Hb
      } = bb;
      const Vb = (0, yw.e)("players", WV),
        gb = (0, yw.e)("players", JV),
        Ib = (0, AH.c)(),
        [tb, Cb] = (0, eb.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: zV.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Fb = (0, eb.useRef)(""),
        Bb = (0, eb.useRef)(null),
        mb = (0, eb.useRef)(null),
        hb = (0, eb.useRef)(0),
        zb = (0, eb.useRef)(void 0),
        Xb = (0, eb.useRef)(null),
        xb = (0, eb.useRef)(tb),
        Kb = (0, eb.useRef)(null),
        rb = tb.redDotInfo.anyCategoryHasRedDots(),
        [Rb, Db] = (0, eb.useState)(null),
        cb = (0, eb.useRef)(!1);
      let Yb = !1,
        Zb = 0,
        fb = 0;
      if (tb.currencyAmounts) {
        for (const bb in tb.currencyAmounts) {
          var Ab;
          const wb = tb.currencyAmounts[bb];
          wb.hidden || (Zb++, (null === (Ab = wb.subtext) || void 0 === Ab ? void 0 : Ab.length) > 0 && fb++)
        }
        Yb = Zb + fb > 4
      }(0, eb.useEffect)((() => {
        cM.k.iI("showShopIconRedDot", rb, !0)
      }), [rb]), (0, eb.useEffect)((() => {
        sb.gameBridge.send("setShopOpen", Hb), Hb || (clearTimeout(zb.current), Cb((bb => bb.awaitingPurchase ? {
          ...bb,
          awaitingPurchase: !1
        } : bb)))
      }), [Hb]), (0, eb.useEffect)((() => () => {
        sb.gameBridge.send("setShopOpen", !1), clearTimeout(zb.current)
      }), []), (0, eb.useEffect)((() => {
        xb.current = tb
      }), [tb]), (0, eb.useEffect)((() => {
        if (null === Rb) return;
        return (0, ZH.c)("pointerdown", (bb => {
          const wb = bb.target;
          null !== wb && void 0 !== wb && wb.closest(".ShopItem") || Db(null)
        }))
      }), [Rb]);
      const Wb = bb => {
          Cb((wb => ({
            ...wb,
            ...bb
          })))
        },
        Jb = bb => {
          var wb;
          clearTimeout(null === (wb = tb.onBoughtInfo) || void 0 === wb ? void 0 : wb.timeout);
          const Mb = setTimeout((() => {
            Wb({
              onBoughtInfo: null
            })
          }), 3e3);
          Fb.current = bb, Wb({
            onBoughtInfo: {
              text: bb,
              timeout: Mb,
              categoryKey: Bb.current
            }
          })
        },
        Nb = bb => {
          const wb = KV(bb, tb, !0);
          return 0 === Object.keys(wb.shopInfo).length && jb.c.set({
            openEverythingMenuName: null
          }), {
            ...wb,
            userInputsPerItem: rV(wb.shopInfo, tb.shopInfo, tb.userInputsPerItem, Vb, gb)
          }
        },
        vb = () => {
          var bb;
          return null !== (bb = Kb.current) && void 0 !== bb ? bb : tb
        },
        Qb = bb => {
          const wb = vb(),
            Mb = KV(bb, wb, !1);
          Kb.current = Mb;
          const eb = Mb.redDotInfo.anyCategoryHasRedDots();
          eb !== wb.redDotInfo.anyCategoryHasRedDots() && cM.k.iI("showShopIconRedDot", eb, !0)
        },
        Gb = () => {
          const bb = Kb.current;
          null !== bb && (Kb.current = null, Cb((wb => {
            const Mb = rV(bb.shopInfo, wb.shopInfo, wb.userInputsPerItem, Vb, gb);
            return {
              ...wb,
              ...bb,
              userInputsPerItem: Mb
            }
          })))
        },
        qb = (bb, wb, Mb) => {
          const eb = tb.selectedCategoryKey,
            Hb = XV(eb, bb),
            pb = null !== Mb && void 0 !== Mb ? Mb : tb.userInputsPerItem[Hb],
            Vb = {
              categoryKey: eb,
              itemKey: bb,
              userInput: pb
            };
          if (Bb.current = eb, wb.isRewardedAd) {
            if (Date.now() - hb.current < 5e3) return;
            (0, Yw.Q)((() => {
              var Mb, eb, pb;
              console.log("bought rewarded ad");
              const gb = Kb.current,
                lb = (null !== gb && void 0 !== gb ? gb : xb.current).shopInfo,
                Lb = Vb.categoryKey ? null === (Mb = lb[Vb.categoryKey]) || void 0 === Mb ? void 0 : Mb.items[bb] : null;
              if (!Lb || !Lb.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              if (!((null === (eb = wb.userInput) || void 0 === eb ? void 0 : eb.type) === (null === Lb || void 0 === Lb || null === (pb = Lb.userInput) || void 0 === pb ? void 0 : pb.type))) return void console.warn("Shop item input type changed, early out");
              const {
                shopInfo: Ib,
                userInputsPerItem: Ob
              } = xb.current, Ub = ub.current;
              Vb.userInput = (null === gb ? Ob : rV(gb.shopInfo, Ib, Ob, Ub.playerIds, Ub.localPlayerId))[Hb], sb.gameBridge.send("buyShopItem", Vb), wb.onBoughtMessage && Jb(wb.onBoughtMessage)
            })), hb.current = Date.now()
          } else {
            sb.gameBridge.send("buyShopItem", Vb), Wb({
              awaitingPurchase: !0
            }), clearTimeout(zb.current), zb.current = setTimeout((() => {
              Xb.current = null, Wb({
                awaitingPurchase: !1
              })
            }), 1e3);
            const bb = (0, xH.d)(wb, pb);
            if (Xb.current = null, !isNaN(bb) && RV(tb.currencyAmounts, wb.currency)) {
              0 !== bb && (Xb.current = {
                currency: wb.currency,
                amountBefore: tb.currencyAmounts[wb.currency].amount
              });
              const Mb = {
                ...tb.currencyAmounts
              };
              Mb[wb.currency].amount -= bb, Wb({
                currencyAmounts: Mb
              })
            }
            wb.onBoughtMessage && Jb(wb.onBoughtMessage)
          }
        },
        ab = (bb, wb) => {
          if (null === wb || !bb.shopInfo[wb]) return bb;
          let Mb = bb.redDotInfo;
          return Mb.categoryHasRedDot(wb) && (Mb.updateCategoryRedDot(wb, !1), Mb = Mb.shallowCopy()), {
            ...bb,
            selectedCategoryKey: wb,
            redDotInfo: Mb
          }
        },
        ib = bb => {
          Gb(), Cb((wb => ab(wb, bb)))
        };
      (0, HM.e)(fH.m, (() => {
        Gb(), Cb((bb => {
          const wb = (0, fH.n)(JH(bb.shopInfo), bb.selectedCategoryKey, (wb => (0, fH.i)(bb.shopInfo[wb].items)));
          return wb === bb.selectedCategoryKey ? bb : ab(bb, wb)
        }))
      })), (0, HM.e)("showShopFromServer", (bb => {
        let {
          toggle: wb,
          Zw: Mb
        } = bb;
        const eb = 0 !== Object.keys(vb().shopInfo).length;
        Mb && ib(Mb), !eb || wb && Hb ? jb.c.set({
          openEverythingMenuName: null
        }) : jb.c.set({
          openEverythingMenuName: Zw.l.SHOP
        })
      })), (0, HM.e)("closeShopOnDamaged", (() => {
        Hb && jb.c.set({
          openEverythingMenuName: null
        })
      })), (0, HM.e)("overShopInfo", (bb => {
        Jb(bb)
      })), (0, Eb.h)("currencyAmounts", (bb => {
        var wb;
        const Mb = Xb.current;
        Mb && (null === bb || void 0 === bb || null === (wb = bb[Mb.currency]) || void 0 === wb ? void 0 : wb.amount) === Mb.amountBefore ? Wb({
          currencyAmounts: bb
        }) : (Xb.current = null, Wb({
          currencyAmounts: bb,
          awaitingPurchase: !1
        }))
      })), (0, Eb.h)("shopInfo", (bb => {
        Hb ? Wb({
          ...Nb(bb),
          awaitingPurchase: !1
        }) : Qb(bb)
      })), (0, eb.useLayoutEffect)((() => {
        Hb && Gb()
      }), [Hb]);
      const ub = (0, eb.useRef)({
        playerIds: Vb,
        localPlayerId: gb
      });
      (0, eb.useEffect)((() => {
        ub.current.playerIds === Vb && ub.current.localPlayerId === gb || (ub.current = {
          playerIds: Vb,
          localPlayerId: gb
        }, Hb ? Cb((bb => {
          const wb = Nb(bb.shopInfo);
          return {
            ...bb,
            ...wb
          }
        })) : Qb(vb().shopInfo))
      }), [Vb, gb]);
      const db = tb.selectedCategoryKey,
        Pb = (bb, wb) => {
          var Mb, eb;
          return (isNaN(wb) || (0, DM.K)(bb.currency) || RV(tb.currencyAmounts, bb.currency) && wb <= tb.currencyAmounts[bb.currency].amount) && (null === (Mb = bb.canBuy) || void 0 === Mb || Mb) && !(null !== (eb = bb.hidden) && void 0 !== eb && eb)
        },
        nb = (bb, wb) => {
          var Mb, eb, Hb;
          const Vb = XV(db, bb),
            gb = tb.shopInfo[db].items[bb],
            Ib = tb.userInputsPerItem[Vb],
            Ub = (0, xH.d)(gb, Ib),
            Cb = Pb(gb, Ub),
            Eb = gb.enchant,
            Fb = Eb ? (0, Sb.Cb)(null !== (Mb = gb.customTitle) && void 0 !== Mb ? Mb : bb, {
              colour: Sb.xb[Eb.tier]
            }) : null !== (eb = gb.customTitle) && void 0 !== eb ? eb : bb,
            Bb = wb => {
              const Mb = null !== wb && void 0 !== wb ? wb : Ib,
                eb = void 0 !== wb ? (0, xH.d)(gb, wb) : Ub;
              Pb(gb, eb) && null !== Mb && qb(bb, gb, wb);
              let Hb = tb.redDotInfo;
              Hb.itemHasRedDot(db, bb) && (Hb.updateItemRedDot(db, bb, !1), Hb = Hb.shallowCopy()), Wb({
                redDotInfo: Hb
              })
            };
          return (0, Ob.jsxs)("div", {
            className: pb()("ShopItem", {
              ShopItemNoInput: !gb.userInput,
              ShopItemNoInputCanBuy: !gb.userInput && Cb,
              ShopItemNoInputSelected: gb.isSelected,
              ShopItemEnchant: !!Eb
            }),
            "data-pad-focusable": !gb.userInput || void 0,
            "data-pad-unavailable": !gb.userInput && !Cb || void 0,
            "data-pad-repeat": null !== (Hb = (0, fH.c)(gb)) && void 0 !== Hb ? Hb : void 0,
            "data-pad-repeat-wait": tb.awaitingPurchase || void 0,
            onClick: () => {
              if (Eb && cb.current) {
                if (Rb !== Vb) return void Db(Vb);
                Db(null)
              }
              gb.userInput || Bb()
            },
            onPointerDown: bb => {
              Eb && (cb.current = (0, KH.w)(bb))
            },
            onPointerEnter: bb => {
              Eb && !(0, KH.w)(bb) && Db(Vb)
            },
            onPointerLeave: bb => {
              Eb && !(0, KH.w)(bb) && Db((bb => bb === Vb ? null : bb))
            },
            style: {
              zIndex: Object.keys(tb.shopInfo[db].items).length - wb
            },
            children: [tb.redDotInfo.itemHasRedDot(db, bb) && (0, Ob.jsx)(lb.e, {
              top: "-6px",
              right: "-6px"
            }), gb.badge && (0, Ob.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Ob.jsx)("div", {
                className: pb()("ShopBadgeMain", gb.badge.type),
                children: (0, Ob.jsx)(RH.d, {
                  text: gb.badge.text
                })
              })
            }), (0, Ob.jsx)("div", {
              className: "ShopItemLeft",
              children: gb.image && (0, Ob.jsx)(cV, {
                item: gb,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Ob.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Ob.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Ob.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Ob.jsx)(RH.d, {
                    text: Fb
                  })
                }), (0, Ob.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Ob.jsx)(RH.d, {
                    text: gb.description
                  })
                })]
              }), gb.userInput && (0, Ob.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: bb => {
                  bb.stopPropagation()
                },
                children: [(0, Ob.jsx)(fV, {
                  item: gb,
                  currInput: Ib,
                  updateInput: wb => {
                    ((bb, wb, Mb) => {
                      const eb = XV(bb, wb),
                        Hb = {
                          ...tb.userInputsPerItem
                        };
                      Hb[eb] = Mb, Wb({
                        userInputsPerItem: Hb
                      })
                    })(db, bb, wb)
                  },
                  onSubmit: bb => {
                    Bb(bb)
                  }
                }), ("dropdown" !== gb.userInput.type || !gb.userInput.autoSubmit) && (0, Ob.jsx)(Lb.f, {
                  className: "ItemCostButton",
                  disabled: !Cb && null !== Ib,
                  onClick: () => {
                    Bb()
                  },
                  children: (0, Ob.jsx)(ZV, {
                    item: gb,
                    cost: Ub,
                    currencyAmounts: tb.currencyAmounts
                  })
                })]
              })]
            }), !gb.userInput && (0, Ob.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Ob.jsx)(ZV, {
                item: gb,
                cost: Ub,
                currencyAmounts: tb.currencyAmounts
              })
            }), Eb && Rb === Vb && (0, Ob.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Ob.jsx)(RH.d, {
                text: Fb
              }), (0, Ob.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Ob.jsx)(RH.d, {
                  text: (0, jH.d)("", Eb.enchantments, Eb.enchantmentData)
                })
              })]
            })]
          }, Vb)
        },
        yb = function(bb) {
          for (const wb in bb)
            if (bb[wb].smp) return !0;
          return !1
        }(tb.shopInfo),
        ob = wp(tb.shopInfo, db),
        Tb = function(bb, wb) {
          var Mb;
          return !!wb && !(null === (Mb = bb[wb]) || void 0 === Mb || !Mb.loadout)
        }(tb.shopInfo, db),
        kb = (0, Ob.jsx)("div", {
          className: pb()("ShopOnBoughtInfo", {
            ShopOnBoughtInfoShow: null !== tb.onBoughtInfo
          }),
          children: (0, Ob.jsx)(RH.d, {
            text: Fb.current
          })
        });
      return (0, Ob.jsx)(zH.e, {
        className: "Menu ShopBody",
        show: Hb,
        children: 0 !== Object.keys(tb.shopInfo).length && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Ob.jsx)(Ub, {
              items: kp(tb.shopInfo).map((bb => {
                var wb;
                return bb === yp ? {
                  id: bb,
                  title: "loadoutShop:title",
                  redDot: !1
                } : {
                  id: bb,
                  title: null !== (wb = tb.shopInfo[bb].customTitle) && void 0 !== wb ? wb : bb,
                  redDot: tb.redDotInfo.categoryHasRedDot(bb)
                }
              })),
              link: Ib ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, WH.h)({
                    page: (0, WH.e)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Tb ? yp : db,
              onClick: bb => {
                bb !== yp ? ib(bb) : Tb || ib(op(tb.shopInfo)[0].categoryKey)
              },
              padStartsOnTab: (0, fH.e)(db)
            }), (0, Ob.jsx)("div", {
              className: "MenuSideBarFooter",
              children: tb.currencyAmounts && Object.keys(tb.currencyAmounts).map((bb => {
                const wb = tb.currencyAmounts[bb];
                return wb.hidden ? null : (0, Ob.jsx)(hV, {
                  currency: bb,
                  info: wb,
                  smaller: Yb,
                  show: Hb
                }, bb)
              }))
            })]
          }), (0, Ob.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [yb && (0, Ob.jsx)(dp, {
              show: Hb,
              shopInfo: tb.shopInfo,
              selectedCategoryKey: db,
              buy: (bb, wb, Mb) => {
                qb(bb, wb, Mb)
              },
              canAfford: Pb,
              message: tb.onBoughtInfo
            }), Tb && Hb && (0, Ob.jsxs)(Ob.Fragment, {
              children: [kb, (0, Ob.jsx)(UV, {
                shopInfo: tb.shopInfo,
                selectedCategoryKey: db,
                selectCategory: ib,
                buy: qb,
                canAfford: Pb,
                currencyAmounts: tb.currencyAmounts
              })]
            }), null === ob && !Tb && (0, Ob.jsxs)(Ob.Fragment, {
              children: [kb, (0, Ob.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Ob.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (wb = tb.shopInfo[db]) || void 0 === wb ? void 0 : wb.description) && (0, Ob.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Ob.jsx)(RH.d, {
                      text: tb.shopInfo[db].description
                    })
                  }), Hb && (0, Ob.jsx)("div", {
                    className: "ShopItems",
                    ref: mb,
                    "data-pad-initial-area": !0,
                    children: JH(null === (Mb = tb.shopInfo[db]) || void 0 === Mb ? void 0 : Mb.items).map(((bb, wb) => nb(bb, wb)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function cV(bb) {
      let {
        item: wb,
        minWidth: Mb,
        minHeight: eb
      } = bb;
      const {
        image: Hb,
        schematicId: pb,
        imageColour: Vb
      } = wb;
      if (pb) return (0, Ob.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Mb}rem`,
          height: `${eb}rem`
        },
        children: (0, Ob.jsx)(DH.e, {
          game: {
            schematicId: pb
          }
        })
      });
      var lb, Lb;
      if ((0, rH.d)(Hb)) return (0, Ob.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Mb}rem`,
          height: "0",
          minHeight: `${eb}rem`
        },
        children: (0, Ob.jsx)(rH.c, {
          itemName: Hb,
          amount: null !== (lb = wb.amount) && void 0 !== lb ? lb : 0,
          amountFontSize: eb / 4 + "rem",
          enchantmentTier: null === (Lb = wb.enchant) || void 0 === Lb ? void 0 : Lb.tier
        })
      });
      const Ib = Hb.slice(-4);
      return ".jpg" === Ib || ".png" === Ib ? (0, Ob.jsx)(YV, {
        image: Hb,
        minWidth: Mb
      }) : (0, Ob.jsx)(gb.b, {
        name: Hb,
        className: "SelectedItemImage",
        style: {
          color: Vb
        }
      })
    }

    function YV(bb) {
      let {
        image: wb,
        minWidth: Mb
      } = bb;
      const {
        gameNameWithVariation: eb
      } = (0, yw.h)("connectedGame"), Hb = wb.endsWith(".jpg");
      return (0, Ob.jsx)("img", {
        className: pb()({
          ShopPixelImage: !Hb
        }),
        style: {
          width: `${Hb?1.6*Mb:Mb}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Sb.Zb)(eb)}/${wb}`,
        alt: wb,
        draggable: !1
      })
    }

    function ZV(bb) {
      let {
        item: wb,
        cost: Mb,
        currencyAmounts: eb
      } = bb;
      const Hb = !isNaN(Mb) && 0 !== Mb && RV(eb, wb.currency);
      let pb = null;
      return wb.buyButtonText ? pb = wb.buyButtonText : Hb ? (pb = Mb, wb.sell && (pb = -1 * Mb), pb = pb.toString()) : 0 === Mb ? pb = "Free" : wb.isRewardedAd && (pb = "Watch ad"), (0, DM.K)(pb) || " " === pb ? null : (0, Ob.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Hb && (0, Ob.jsx)("div", {
          style: {
            color: eb[wb.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Ob.jsx)(gV, {
            iconName: eb[wb.currency].icon
          })
        }), (0, Ob.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Ob.jsx)(RH.d, {
            text: pb
          })
        })]
      })
    }

    function fV(bb) {
      let {
        item: wb,
        currInput: Mb,
        updateInput: Hb,
        onSubmit: pb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)(), lb = (0, eb.useRef)(null);
      if ((0, eb.useEffect)((() => {
          const bb = lb.current;
          bb && bb.value !== Mb && document.activeElement !== bb && (bb.value = null !== Mb && void 0 !== Mb ? Mb : "")
        }), [Mb]), !wb.userInput) return null;
      let Lb = wb.userInput;
      if (Bb.featureFlags.sanitizeShopInput && "text" === wb.userInput.type && (Lb = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Lb.type || "number" === Lb.type) {
        var Ib, Ub;
        console.assert(void 0 !== Mb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(wb)}`);
        const bb = "text" === Lb.type && Lb.wordCharsOnly;
        return (0, Ob.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Ob.jsx)(zb.d, {
            className: "ShopItemUserInputText",
            placeholderText: gb(Lb.placeholderText),
            defaultValue: Mb,
            domRef: lb,
            onValueChange: (wb, Mb) => {
              !0 === bb && (wb = (0, YH.bb)(wb)), lb.current.value = wb, Hb(wb)
            },
            onEnter: pb,
            type: Lb.type
          }, (null !== (Ib = Lb.initialValue) && void 0 !== Ib ? Ib : "") + (null !== (Ub = Lb.placeholderText) && void 0 !== Ub ? Ub : ""))
        })
      }
      if ("dropdown" === Lb.type) {
        console.assert(void 0 !== Mb, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(wb)}`);
        const bb = Lb.autoSubmit;
        return (0, Ob.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Ob.jsx)(Pw.c, {
            options: Lb.dropdownOptions.map((bb => (0, xH.f)(bb))),
            value: Mb,
            onChange: wb => {
              let {
                value: Mb
              } = wb;
              Hb(Mb), bb && pb(Mb)
            }
          })
        })
      }
      return "player" === Lb.type ? (0, Ob.jsx)(AV, {
        userInput: Lb,
        currInput: Mb,
        updateInput: Hb
      }) : "color" === Lb.type ? (0, Ob.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Ob.jsx)("input", {
          type: "color",
          value: Mb,
          onChange: bb => {
            Hb(bb.target.value)
          }
        })
      }) : null
    }

    function AV(bb) {
      let {
        userInput: wb,
        currInput: Mb,
        updateInput: eb
      } = bb;
      const Hb = (0, yw.h)("players"),
        pb = (0, yw.h)("hiddenPlayerNames"),
        Vb = (0, xH.g)(Hb.ids, Hb.localId, wb);
      return (0, Ob.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Ob.jsx)(Pw.c, {
          options: Vb.map((bb => {
            const {
              name: wb
            } = Hb.byId[bb];
            return {
              value: bb,
              label: null === wb ? "" : (0, cH.c)(wb, pb)
            }
          })),
          value: Mb,
          onChange: bb => {
            let {
              value: wb
            } = bb;
            eb(wb)
          }
        })
      })
    }

    function WV(bb) {
      let {
        ids: wb
      } = bb;
      return wb
    }

    function JV(bb) {
      let {
        localId: wb
      } = bb;
      return wb
    }
    var SV = Mb(1821);
    const NV = (0, Mb(1567).h)((bb => bb.PadLobbyShortcuts)),
      vV = (0, eb.lazy)((() => Promise.resolve().then((() => Mb(5509))).then((bb => ({
        default: bb.Lobbyleaderboard
      }))))),
      QV = (0, eb.lazy)((() => Mb.e(254).then((() => Mb(42746))).then((bb => ({
        default: bb.LobbyManageView
      })))));

    function GV(bb) {
      let {
        show: wb
      } = bb;
      return wb ? (0, Ob.jsx)(qV, {}) : null
    }

    function qV() {
      const bb = (0, AH.c)();
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [(0, Ob.jsx)(NV, {}), (0, Ob.jsxs)(eb.Suspense, {
          fallback: (0, Ob.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Ob.jsx)(Xb.c, {})
          }),
          children: [bb && (0, Ob.jsx)(QV, {
            leaderboard: (0, Ob.jsx)(vV, {})
          }), !bb && (0, Ob.jsx)(vV, {})]
        })]
      })
    }
    var aV = Mb(1726),
      iV = Mb(3372),
      uV = Mb(1965),
      dV = Mb(4342),
      PV = Mb(3889),
      nV = Mb(1672),
      yV = Mb(1624),
      oV = Mb(4270),
      TV = Mb(4284),
      kV = Mb(4411),
      bg = Mb(3341);
    const wg = "storeRecentGiftRecipients",
      Mg = new Map;

    function eg() {
      try {
        const bb = tM.i.getItem(wg);
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.name) && bb.name.length > 0)).map((bb => ({
          name: bb.name,
          cosmetics: bb.cosmetics && "object" === typeof bb.cosmetics ? bb.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Hg(bb, wb) {
      var Mb;
      const [Hb, pb] = (0, eb.useState)(""), [Vb, gb] = (0, eb.useState)("search"), [lb, Lb] = (0, eb.useState)(null), [Ib, Ob] = (0, eb.useState)(null), Ub = (0, eb.useRef)(null), tb = (0, eb.useRef)(null);
      (0, eb.useEffect)((() => () => {
        Ub.current && clearTimeout(Ub.current)
      }), []), (0, eb.useEffect)((() => {
        wb || Fb()
      }), [wb]);
      const Cb = null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.name) && void 0 !== Mb ? Mb : null;

      function Eb() {
        Ub.current && (clearTimeout(Ub.current), Ub.current = null)
      }

      function Fb() {
        Eb(), pb(""), gb("search"), Lb(null)
      }(0, eb.useEffect)((() => {
        if (null === Cb || bb === Db.NULL_USER_CONTEXT) return;
        const wb = Cb.toLowerCase();
        if (wb === bb.getPlayerName().toLowerCase()) return void Ob({
          name: Cb,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Mb = Mg.get(wb);
        if (Mb) return void Ob({
          name: Cb,
          result: Mb
        });
        let eb = !1;
        return async function(bb, wb) {
          try {
            const Mb = await (0, Db.postJsonWithMetricsCookiesAndJsonResponse)(`${Dw.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: wb
            }, {
              retries: 1
            }, bb.getMetricsCookies());
            if ("boolean" !== typeof(null === Mb || void 0 === Mb ? void 0 : Mb.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Mb)}`);
            return Mb
          } catch (Mb) {
            return console.error("Failed to look up gift recipient:", Mb), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(bb, Cb).catch((bb => (console.error("Gift recipient lookup failed:", bb), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((bb => {
          !0 !== bb.giftRecipientFound && "store:giftRecipientLookupFailed" === bb.giftRecipientError || Mg.set(wb, bb), eb || Ob({
            name: Cb,
            result: bb
          })
        })), () => {
          eb = !0
        }
      }), [Cb, bb]);
      const Bb = (0, eb.useMemo)((() => {
        const bb = Hb.trim();
        if (!bb) return {
          status: "none"
        };
        if (!lb || lb.name !== bb || (null === Ib || void 0 === Ib ? void 0 : Ib.name) !== lb.name) return {
          status: "pending",
          name: bb
        };
        const wb = Ib.result;
        return !1 === wb.giftRecipientFound ? {
          status: "error",
          name: lb.name,
          error: wb.giftRecipientError
        } : {
          status: "found",
          name: wb.giftRecipientName,
          ownedPacks: wb.giftRecipientOwnedPacks,
          hasSuperRank: wb.giftRecipientHasSuperRank,
          isSubscriber: wb.giftRecipientIsSubscriber
        }
      }), [Hb, lb, Ib]);
      (0, eb.useEffect)((() => {
        "found" === Bb.status && "typed" === (null === lb || void 0 === lb ? void 0 : lb.source) && tb.current !== Bb.name && (tb.current = Bb.name, (0, Fw.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Bb, lb]);
      const sb = (null === Ib || void 0 === Ib ? void 0 : Ib.name) === (null === lb || void 0 === lb ? void 0 : lb.name) ? null === Ib || void 0 === Ib ? void 0 : Ib.result : null,
        mb = !0 === (null === sb || void 0 === sb ? void 0 : sb.giftRecipientFound) ? sb.giftRecipientCosmetics : null;
      return {
        query: Hb,
        via: Vb,
        recipient: Bb,
        recipientCosmetics: mb,
        type: function(bb) {
          pb(bb), gb("search"), Eb();
          const wb = bb.trim();
          wb ? Ub.current = setTimeout((() => {
            Lb({
              name: wb,
              source: "typed"
            })
          }), 400) : Lb(null)
        },
        choose: function(bb, wb) {
          Eb(), pb(bb), gb("typed" === wb ? "search" : "prefilled" === wb ? "prefilled" : "suggestion"), Lb({
            name: bb,
            source: wb
          }), "typed" !== wb && "prefilled" !== wb && (0, Fw.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: wb
          })
        },
        clear: Fb,
        recordGift: function(bb, wb) {
          ! function(bb) {
            Mg.delete(bb.toLowerCase())
          }(bb), Ob((Mb => {
            if (!Mb || Mb.name.toLowerCase() !== bb.toLowerCase() || !0 !== Mb.result.giftRecipientFound || "superRank" === wb) return Mb;
            const eb = Mb.result.giftRecipientOwnedPacks;
            return {
              ...Mb,
              result: {
                ...Mb.result,
                giftRecipientOwnedPacks: eb.includes(wb) ? eb : [...eb, wb]
              }
            }
          }))
        }
      }
    }
    var pg = Mb(3334),
      Vg = Mb(5514),
      gg = Mb(294),
      lg = Mb(4151);
    const Lg = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ig = Mb(3285),
      Og = Mb(644),
      Ug = Mb(3402),
      tg = Mb(3797);

    function Cg(bb) {
      let {
        cosmetics: wb
      } = bb;
      return (0, Ob.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Ob.jsx)(Ug.e, {
          cosmetics: wb
        })
      })
    }

    function Eg(bb, wb) {
      var Mb, eb;
      const Hb = null !== (Mb = bb.friend) && void 0 !== Mb ? Mb : {
        isError: !1,
        name: bb.name,
        ranks: [],
        cosmetics: null !== (eb = bb.cosmetics) && void 0 !== eb ? eb : {},
        nameColour: Og.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return wb ? {
        ...Hb,
        cosmetics: wb
      } : Hb
    }

    function Fg(bb) {
      let {
        pending: wb
      } = bb;
      return (0, Ob.jsx)("span", {
        className: "StoreRecipientLoader",
        children: wb && (0, Ob.jsx)(Xb.c, {})
      })
    }

    function Bg(bb) {
      var wb;
      let {
        selfName: Mb,
        giftRecipient: Hb,
        suggestionsVersion: lb,
        pulseSignal: Ib,
        disabled: Ub
      } = bb;
      const {
        t: tb
      } = (0, Vb.C)(), Cb = (0, Pb.n)(), Eb = (0, eb.useRef)(null), Fb = (0, eb.useRef)(null), {
        query: sb,
        via: mb,
        recipient: hb,
        recipientCosmetics: Xb
      } = Hb, xb = (0, bg.q)(sb), jb = (0, eb.useMemo)((() => {
        const bb = Bb.featureFlags.useSocialFeatures ? Cb.friends.filter((bb => !bb.isError)) : [];
        return (0, bg.k)({
          onlineFriends: (0, Pb.i)(bb),
          recentRecipients: eg(),
          friends: bb,
          selfName: Mb,
          max: 8
        })
      }), [Cb.friends, Mb, lb]), Kb = sb.trim().toLowerCase(), rb = "search" !== mb && Kb ? jb.find((bb => bb.name.toLowerCase() === Kb)) : void 0, Rb = rb && "prefilled" === mb ? [rb, ...jb.filter((bb => bb !== rb))] : jb, Db = "" !== Kb && !rb, cb = Db ? sb : "", Yb = Rb.length > 0;
      (0, eb.useEffect)((() => {
        Eb.current && Eb.current.value !== cb && (Eb.current.value = cb)
      }), [cb]), (0, eb.useEffect)((() => {
        Eb.current && (Eb.current.disabled = Ub)
      }), [Ub, Ib]);
      const Zb = (0, eb.useRef)(0);

      function Ab() {
        "self" !== xb && (0, Fw.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Hb.clear()
      }

      function Wb(bb) {
        var wb, Mb;
        if (Ub) return;
        if (" " === bb.key || "Enter" === bb.key) return bb.preventDefault(), void bb.currentTarget.click();
        const eb = Array.from(null !== (wb = null === (Mb = Fb.current) || void 0 === Mb ? void 0 : Mb.querySelectorAll("[role=radio]")) && void 0 !== wb ? wb : []),
          Hb = eb.indexOf(bb.currentTarget);
        let pb;
        "ArrowRight" === bb.key || "ArrowDown" === bb.key ? pb = eb[(Hb + 1) % eb.length] : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? pb = eb[(Hb - 1 + eb.length) % eb.length] : "Home" === bb.key ? pb = eb[0] : "End" === bb.key && (pb = eb[eb.length - 1]), pb && (bb.preventDefault(), pb.focus(), pb.click())
      }(0, eb.useEffect)((() => {
        var bb;
        Ib > Zb.current && !Ub && (Zb.current = Ib, null === (bb = Eb.current) || void 0 === bb || bb.focus())
      }), [Ib, Ub]);
      const Jb = "self" === xb,
        Sb = null !== (wb = null === rb || void 0 === rb ? void 0 : rb.name) && void 0 !== wb ? wb : null,
        Nb = "error" === hb.status ? hb.error : null,
        vb = "store:giftRecipientLookupFailed" === Nb;
      return (0, Ob.jsxs)("div", {
        className: pb()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Ub,
          StoreRecipientStripNoChips: !Yb
        }),
        children: [(0, Ob.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: tb("store:buyingFor")
        }), (0, Ob.jsxs)("div", {
          ref: Fb,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": tb("store:whoIsItFor"),
          children: [(0, Ob.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Jb,
            tabIndex: Ub || !Jb && null !== Sb ? -1 : 0,
            className: pb()("StoreRecipientMe", {
              StoreRecipientChecked: Jb
            }),
            onClick: () => {
              Ub || Ab()
            },
            onKeyDown: Wb,
            children: [(0, Ob.jsx)(gb.b, {
              name: "user"
            }), " ", tb("store:me")]
          }), Yb && (0, Ob.jsx)("div", {
            className: "StoreRecipientChips",
            children: Rb.map((bb => {
              const wb = bb === rb;
              return (0, Ob.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": wb,
                tabIndex: !Ub && wb ? 0 : -1,
                title: bb.name,
                className: pb()("StoreRecipientChip", {
                  StoreRecipientChecked: wb
                }),
                onClick: () => {
                  Ub || function(bb) {
                    "gift" !== xb && (0, Fw.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Hb.choose(bb.name, bb.kind)
                  }(bb)
                },
                onKeyDown: Wb,
                children: (0, Ob.jsx)(tg.d, {
                  playerSocialPreview: Eg(bb, wb ? Xb : null),
                  opensProfileCard: !1,
                  isFriend: null !== bb.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== bb.friend,
                  status: null === bb.friend ? null : void 0,
                  trailing: wb ? (0, Ob.jsx)(Fg, {
                    pending: "pending" === hb.status
                  }) : void 0
                })
              }, bb.name)
            }))
          })]
        }), (0, Ob.jsxs)("div", {
          className: pb()("StoreRecipientSearch", {
            StoreRecipientChecked: Db,
            StoreRecipientSearchPulse: Ib > 0 && !Db,
            StoreRecipientSearchError: null !== Nb && !vb
          }),
          onClick: () => {
            var bb;
            null === (bb = Eb.current) || void 0 === bb || bb.focus()
          },
          children: [Db && "found" === hb.status && Xb && (0, Ob.jsx)(Cg, {
            cosmetics: Xb
          }), !(Db && "found" === hb.status && Xb) && (0, Ob.jsx)(gb.b, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Ob.jsx)(zb.d, {
            className: "StoreRecipientSearchInput",
            domRef: Eb,
            placeholderText: tb("store:searchName"),
            defaultValue: cb,
            maxLength: fb.g,
            onValueChange: function(bb) {
              "gift" !== xb && bb.trim() && (0, Fw.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Hb.type(bb)
            },
            onEnter: () => {
              var bb;
              const wb = null === (bb = Eb.current) || void 0 === bb ? void 0 : bb.value.trim();
              wb && Hb.choose(wb, "typed")
            },
            blurOnEnter: !0
          }), Db && (0, Ob.jsx)(Fg, {
            pending: "pending" === hb.status
          }), Db && (0, Ob.jsx)("div", {
            ...(0, Lb.bb)({
              disabled: Ub
            }),
            "aria-label": tb("store:clearRecipient"),
            title: tb("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: bb => {
              bb.stopPropagation(), Ub || Ab()
            },
            children: (0, Ob.jsx)(gb.b, {
              name: "xmark"
            })
          })]
        }, Ib), Nb && (0, Ob.jsx)("div", {
          className: pb()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: vb
          }),
          role: "status",
          children: tb(Nb)
        })]
      })
    }
    var sg = Mb(3208),
      mg = Mb(3457),
      hg = Mb(3813),
      zg = Mb(4922),
      Xg = Mb(3287),
      xg = Mb(4448),
      jg = Mb(4451),
      Kg = Mb(4419);
    const rg = [Og.v.yellow, Og.v.green, Og.v.aqua, Og.v.blue, Og.v.purple, Og.v.red];

    function Rg(bb) {
      return "needsRecipient" === bb || "lookingUp" === bb || "gift" === bb || "recipientOwns" === bb || "recipientSharesOwned" === bb || "recipientSubscribed" === bb
    }

    function Dg(bb) {
      const {
        onKeyDown: wb,
        ...Mb
      } = (0, Lb.bb)();
      return {
        ...Mb,
        "aria-label": bb,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && (null === wb || void 0 === wb || wb(bb))
        }
      }
    }

    function cg(bb) {
      let {
        text: wb
      } = bb;
      return (0, Ob.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(wb).map(((bb, wb) => (0, Ob.jsx)("span", {
          style: {
            color: rg[wb % rg.length]
          },
          children: bb
        }, wb)))
      })
    }
    const Yg = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Zg(bb) {
      let {
        state: wb,
        item: Mb,
        price: eb,
        busy: Hb,
        highlight: lb = !1,
        secondary: Ib = !1,
        onAct: Ub,
        onNeedRecipient: tb,
        onLogin: Cb
      } = bb;
      const {
        t: Eb
      } = (0, Vb.C)(), Fb = "superRank" === Mb ? (0, vb.v)(Date.now()).product.days : null, Bb = "superRank" === Mb && "hyper" === (0, vb.s)(Date.now()).look ? Lb.y : Lb.p, sb = Ib ? Lb.j : Bb, mb = bb => null === Fb ? Eb(bb ? "general:gift" : "general:buy") : Eb(bb ? "store:giftDays" : "store:buyDays", {
        days: Fb
      }), hb = (bb, wb) => {
        const Mb = (0, Ob.jsxs)(Ob.Fragment, {
          children: [null === bb && (0, Ob.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== bb && (0, Ob.jsx)("span", {
            className: "StoreCtaLabel",
            title: bb,
            children: bb
          })]
        });
        return null !== Fb ? (0, Ob.jsxs)(Ob.Fragment, {
          children: [wb && (0, Ob.jsx)("span", {
            className: "StoreCtaIcon",
            children: wb
          }), Mb, (0, Ob.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Ob.jsx)(mg.d, {
              amount: eb
            })]
          })]
        }) : (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsxs)("span", {
            className: "StoreCtaLead",
            children: [Mb, "\xb7"]
          }), (0, Ob.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [wb, (0, Ob.jsx)(mg.d, {
              amount: eb
            })]
          })]
        })
      };
      let zb;
      switch (wb) {
        case "pending":
          zb = (0, Ob.jsx)(Bb, {
            className: "StoreCtaButton",
            disabled: !0,
            children: hb(null)
          });
          break;
        case "login":
          zb = (0, Ob.jsx)(sb, {
            className: "StoreCtaButton",
            onClick: Cb,
            children: hb(mb(!1))
          });
          break;
        case "owned":
          zb = (0, Ob.jsx)(Lb.j, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, sg.c)("store")
            },
            children: (0, Ob.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Ob.jsx)(gb.b, {
                name: "shirt"
              }), " ", Eb("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          zb = (0, Ob.jsx)(Bb, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Ob.jsx)("span", {
              className: "StoreCtaLabel",
              children: Eb(Yg[wb])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          zb = (0, Ob.jsx)(Bb, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === wb || null === eb,
            loading: "lookingUp" === wb || Hb,
            onClick: Ub,
            analyticsClick: {
              id: "store.gift",
              value: Mb
            },
            children: hb(mb(!0), bg.e)
          });
          break;
        case "buy":
        case "recharge":
          zb = (0, Ob.jsx)(sb, {
            className: "StoreCtaButton",
            loading: Hb,
            disabled: null === eb,
            onClick: Ub,
            analyticsClick: {
              id: "store.buy",
              value: Mb
            },
            children: hb(mb(!1))
          })
      }
      return (0, Ob.jsx)("div", {
        className: pb()("StoreCta", {
          StoreCtaHighlight: lb,
          StoreCtaLabelFirst: null !== Fb
        }),
        onClick: bb => {
          bb.stopPropagation(), "needsRecipient" === wb && tb()
        },
        children: zb
      })
    }
    const fg = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Ag(bb) {
      var wb;
      let {
        pack: Mb,
        state: Hb,
        busy: lb,
        onOpen: Lb,
        onAct: Ib,
        onNeedRecipient: Ub,
        onLogin: tb
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), Eb = aV.c[Mb], Fb = oV.m[Mb], Bb = (0, Ig.p)(Mb), sb = (0, eb.useRef)(null);
      (0, xg.l)(Mb, sb);
      const mb = Rg(Hb),
        hb = null !== (wb = Eb.displayName) && void 0 !== wb ? wb : Mb,
        zb = (0, zg.d)((() => {
          (0, hg.i)();
          const bb = (0, xg.f)(Mb);
          void 0 !== bb && (0, Xg.g)((0, xg.e)(bb))
        })),
        [Xb] = (0, eb.useState)(lg.k);
      return (0, Ob.jsxs)("div", {
        className: pb()("StoreTile StorePackTile", fg[Eb.tier], {
          StorePackTileOwned: "owned" === Hb,
          StorePackTileRecipientOwns: "recipientOwns" === Hb,
          StoreTileGift: mb
        }),
        ...Dg(hb),
        ref: sb,
        "data-store-item": Mb,
        onClick: Lb,
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || Xb || zb.start()
        },
        onPointerLeave: zb.cancel,
        children: [Fb && (0, Ob.jsx)(Fb, {
          simple: !0
        }), (0, Ob.jsx)("div", {
          className: "StorePackCharacters",
          children: Bb.map((bb => (0, Ob.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ig.j)(bb)})`
            }
          }, bb)))
        }), (0, Ob.jsx)("div", {
          className: "StoreTileScrim"
        }), mb && (0, Ob.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Ob.jsx)(Kg.e, {
          pack: Mb,
          className: pb()({
            PackAnimatedBadgeBesideRibbon: mb
          })
        }), (0, Ob.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Ob.jsx)("div", {
            className: "StoreTileTitle",
            children: hb
          }), (0, Ob.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Ob.jsx)(jg.b, {
              tier: Eb.tier
            }), " \xb7 ", Cb("store:itemCount", {
              count: (0, IH.l)(Mb)
            }), "owned" === Hb && (0, Ob.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Ob.jsx)(gb.b, {
                name: "check"
              }), " ", Cb("general:owned")]
            })]
          }), (0, Ob.jsx)(Zg, {
            state: Hb,
            item: Mb,
            price: (0, iV.e)(Mb),
            busy: lb,
            onAct: Ib,
            onNeedRecipient: Ub,
            onLogin: tb
          })]
        })]
      })
    }
    var Wg = Mb(1741),
      Jg = Mb(4976),
      Sg = Mb(4478),
      Ng = Mb(5076),
      vg = Mb(35358),
      Qg = Mb(5003);
    const Gg = {
      cape: Nb.d.cape
    };

    function qg(bb) {
      var wb, Mb;
      let {
        wearer: Hb,
        active: gb,
        tryOn: lb = Gg,
        framing: Lb = "store",
        glow: Ib = !0,
        turnable: Ub = !1,
        className: tb
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), Eb = (0, eb.useRef)(null), [Fb] = (0, eb.useState)(lg.k), Bb = function(bb) {
        const [wb, Mb] = (0, eb.useState)(!1);
        return (0, eb.useEffect)((() => {
          const wb = new IntersectionObserver((bb => {
            Mb(bb[bb.length - 1].isIntersecting)
          }));
          return wb.observe(bb.current), () => {
            wb.disconnect()
          }
        }), [bb]), wb
      }(Eb), sb = (0, Qg.h)("storeRank"), mb = null !== (wb = Hb.name) && void 0 !== wb ? wb : Cb(Hb.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), hb = null !== (Mb = Hb.cosmetics) && void 0 !== Mb ? Mb : {}, zb = `${mb}|${JSON.stringify(hb)}`, Xb = gb && Bb && !Fb && !sb, [xb, jb] = (0, eb.useState)(null);
      Xb || null === xb || jb(null);
      const Kb = Xb && xb === zb;
      return (0, Ob.jsxs)("div", {
        ref: Eb,
        className: pb()("HyperRankStage", tb, {
          HyperRankStageDrawn: Kb
        }),
        children: [Ib && (0, Ob.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, Ob.jsx)(vb.c, {
          className: "HyperRankStageStandIn"
        }), Xb && (0, Ob.jsx)(ag, {
          name: mb,
          cosmetics: hb,
          tryOn: lb,
          framing: Lb,
          turnable: Ub,
          onDrawn: () => {
            jb(zb)
          }
        }, zb), (0, Ob.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function ag(bb) {
      let {
        name: wb,
        cosmetics: Mb,
        tryOn: Hb,
        framing: Vb,
        turnable: gb,
        onDrawn: lb
      } = bb;
      const Lb = (0, eb.useRef)(null),
        Ib = (0, eb.useRef)(0),
        Ub = (0, eb.useRef)(null),
        tb = (0, eb.useMemo)((() => {
          var bb;
          return {
            name: wb,
            ranks: [Nb.d.rank],
            nameColour: null !== (bb = Mb.nameColour) && void 0 !== bb ? bb : Og.d
          }
        }), [wb, Mb.nameColour]),
        Cb = bb => {
          var wb;
          (null === (wb = Ub.current) || void 0 === wb ? void 0 : wb.pointerId) === bb.pointerId && (Ub.current = null)
        },
        Eb = gb ? {
          onPointerDown: bb => {
            0 === bb.button && (Ub.current = {
              pointerId: bb.pointerId,
              x: bb.clientX
            }, bb.currentTarget.setPointerCapture(bb.pointerId))
          },
          onPointerMove: bb => {
            var wb;
            const Mb = Ub.current;
            (null === Mb || void 0 === Mb ? void 0 : Mb.pointerId) === bb.pointerId && (Ib.current -= (bb.clientX - Mb.x) * vg.b, Mb.x = bb.clientX, null === (wb = Lb.current) || void 0 === wb || wb.turnCamera(Ib.current))
          },
          onPointerUp: Cb,
          onPointerCancel: Cb
        } : {};
      return (0, Ob.jsx)("div", {
        className: pb()("HyperRankStageLive", {
          HyperRankStageTurnable: gb
        }),
        ...Eb,
        children: (0, Ob.jsx)(eb.Suspense, {
          fallback: null,
          children: (0, Ob.jsx)(hg.e, {
            ref: Lb,
            owner: "storeRank",
            framing: Vb,
            forcedCosmetics: Hb,
            nametag: tb,
            onReady: () => {
              var bb;
              null === (bb = Lb.current) || void 0 === bb || bb.setAllCosmetics(Mb)
            },
            onDrawn: lb
          })
        })
      })
    }
    var ig = Mb(5080);

    function ug(bb) {
      var wb;
      return null !== (wb = (0, LH.k)(bb)) && void 0 !== wb ? wb : LH.p[LH.p.length - 1]
    }

    function dg(bb, wb) {
      return bb.tiers.flatMap((bb => {
        var Mb;
        return null !== (Mb = bb[wb]) && void 0 !== Mb ? Mb : []
      }))
    }

    function Pg(bb) {
      const wb = dg(bb, "hyper");
      return wb.filter((bb => "cosmetic" === bb.kind && !(0, Ng.u)(bb, wb)))
    }

    function ng(bb, wb) {
      const Mb = dg(bb, wb).find((bb => "xpBoost" === bb.kind));
      return "xpBoost" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) ? Mb : null
    }

    function yg(bb) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, Ob.jsx)(cg, {
          text: bb("store:colourfulNames")
        }),
        detail: bb("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: bb("store:perkCapes"),
        detail: bb("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: bb("store:perkNametag", {
          rank: bb((0, vb.q)(Nb.d.id).nameKey)
        }),
        detail: bb("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: bb("store:perkNoAdverts"),
        detail: bb("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: bb("store:perkFriends", {
          count: (0, Cw.c)([Nb.d.rank])
        }),
        detail: bb("store:perkFriendsDetail", {
          count: (0, Cw.c)([])
        })
      }]
    }

    function og() {
      const {
        t: bb
      } = (0, Vb.C)(), wb = [{
        id: "battlePass",
        icon: "crown",
        title: bb("store:perkBattlePassTrack")
      }, ...yg(bb)];
      return (0, Ob.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: wb.map((bb => (0, Ob.jsxs)("li", {
          children: [(0, Ob.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, Ob.jsx)(gb.b, {
              name: bb.icon
            })
          }), bb.title]
        }, bb.id)))
      })
    }

    function Tg() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, Ob.jsx)(kg, {}), yg(bb).map((bb => (0, Ob.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, Ob.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, Ob.jsx)(gb.b, {
              name: bb.icon
            })
          }), (0, Ob.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, Ob.jsx)("b", {
              children: bb.title
            }), (0, Ob.jsx)("small", {
              children: bb.detail
            })]
          })]
        }, bb.id)))]
      })
    }

    function kg() {
      const {
        t: bb,
        selectedLanguage: wb
      } = (0, Vb.C)(), Mb = ug(Date.now()), eb = Pg(Mb), Hb = function(bb) {
        return Pg(bb).filter((bb => null !== (0, Ng.p)(bb) || null !== (0, Ng.r)(bb))).reverse()
      }(Mb).slice(0, 4), pb = ng(Mb, "hyper"), lb = ng(Mb, "free"), Lb = (0, Vb.e)(wb.code, "store:battlePassTiersEnds", Mb.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, Ob.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, Ob.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, Ob.jsx)(gb.b, {
            name: "crown"
          })
        }), (0, Ob.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, Ob.jsx)("b", {
            children: bb("store:battlePassSeason", {
              season: Mb.seasonNumber
            })
          }), (0, Ob.jsx)("small", {
            children: bb("store:battlePassTiersEnds", {
              tiers: Mb.tierCount,
              date: Lb
            })
          })]
        }), (0, Ob.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, Ob.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === eb.length ? bb("store:battlePassOneCosmetic") : bb("store:battlePassCosmetics", {
              count: eb.length
            })
          }), (0, Ob.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [Hb.map((wb => (0, Ob.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, Ng.g)(wb, bb),
              children: (0, Ob.jsx)(ig.b, {
                reward: wb
              })
            }, wb.id))), eb.length > Hb.length && (0, Ob.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: bb("store:battlePassMore", {
                count: eb.length - Hb.length
              })
            })]
          })]
        }), (0, Ob.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [pb && lb && (0, Ob.jsxs)("li", {
            children: [(0, Ob.jsx)(gb.b, {
              name: "angles-up"
            }), bb("store:battlePassXp", {
              multiplier: pb.multiplier,
              minutes: pb.minutes,
              freeMinutes: lb.minutes
            })]
          }), (0, Ob.jsxs)("li", {
            children: [(0, Ob.jsx)(gb.b, {
              name: "lock-open"
            }), bb("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }
    const bl = ["snowmanSet", "skis", "reindeerPet"];

    function wl() {
      const bb = ug(Date.now()),
        wb = {};
      let Mb = 0;
      for (const Hb of bb.tiers) {
        const bb = Hb.hyper;
        var eb;
        if ("cosmetic" === (null === bb || void 0 === bb ? void 0 : bb.kind) && bl.includes(bb.id)) Object.assign(wb, null === (eb = (0, Ng.n)(bb)) || void 0 === eb ? void 0 : eb.cosmetics), Mb++
      }
      return Mb < bl.length && console.warn(`Hyper Rank's page wears ${Mb} of its ${bl.length} rewards: ${bb.seasonId} lacks the others`), {
        ...wb,
        cape: Nb.d.cape
      }
    }

    function Ml(bb) {
      let {
        wearer: wb
      } = bb;
      const Mb = (0, eb.useMemo)(wl, []);
      return (0, Ob.jsx)(qg, {
        className: "HyperRankShowcase",
        wearer: wb,
        active: !0,
        tryOn: Mb,
        framing: "showcase",
        glow: !1,
        turnable: !0
      })
    }
    const el = Mb.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function Hl() {
      (0, Xg.g)(el, {
        lowPriority: !1
      })
    }

    function pl() {
      const {
        t: bb
      } = (0, Vb.C)(), [wb, Mb] = (0, eb.useState)("starting"), Hb = (0, eb.useRef)(null), pb = (0, gM.d)(), lb = (0, eb.useRef)(null), Ib = (0, eb.useCallback)((() => {
        const bb = Hb.current;
        null !== bb.error && bb.load();
        const wb = bb.play();
        lb.current = wb, wb.catch((bb => {
          (0, Jg.e)("Failed to play Super Rank video", bb), pb.current && lb.current === wb && Mb("failed")
        }))
      }), [pb]);
      return (0, eb.useEffect)((() => {
        const bb = Hb.current;
        let wb;

        function Mb() {
          clearTimeout(wb), wb = setTimeout(Ib, 3e3)
        }
        return Ib(), bb.addEventListener("ended", Mb), () => {
          clearTimeout(wb), bb.removeEventListener("ended", Mb)
        }
      }), [Ib]), (0, Ob.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, Ob.jsx)("video", {
          ref: Hb,
          src: `${Dw.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: el,
          muted: !0,
          playsInline: !0,
          controls: "playing" === wb,
          onPlaying: () => {
            Mb("playing")
          },
          onError: () => {
            Mb("failed")
          }
        }), ("failed" === wb || "loading" === wb) && (0, Ob.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, Ob.jsx)(Lb.f, {
            ariaLabel: bb("general:play"),
            loading: "loading" === wb,
            onClick: () => {
              Mb("loading"), Ib()
            },
            touchPressOn: "pointerup",
            children: (0, Ob.jsx)(gb.b, {
              name: "play"
            })
          })
        })]
      })
    }

    function Vl(bb) {
      let {
        tierId: wb,
        wearer: Mb,
        onBack: eb,
        cta: Hb,
        recipient: gb,
        afterCta: lb
      } = bb;
      const {
        t: Ib
      } = (0, Vb.C)(), Ub = "hyper" === (0, vb.q)(wb).look;
      return (0, Ob.jsxs)("div", {
        className: pb()("StoreSuperRankDetail", {
          StoreHyperRankDetail: Ub
        }),
        children: [(0, Ob.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Ob.jsx)(Lb.b, {
            className: "StoreDetailBackButton",
            onClick: eb,
            padBack: !0,
            children: Ib("general:back")
          }), (0, Ob.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, Ob.jsx)(vb.j, {
              tierId: wb
            })
          }), gb]
        }), (0, Ob.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [Ub && (0, Ob.jsx)(Ml, {
            wearer: Mb
          }), !Ub && (0, Ob.jsx)(pl, {}), (0, Ob.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [Ub && (0, Ob.jsx)(Tg, {}), !Ub && (0, Ob.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Ob.jsx)(Sg.d, {
                tierId: wb
              })
            }), (0, Ob.jsxs)("div", {
              className: "StoreTileActions",
              children: [Hb, lb]
            })]
          })]
        })]
      })
    }
    var gl = Mb(4357),
      ll = Mb(3822);

    function Ll() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, Ob.jsx)("div", {
        className: "SmallTextBold",
        children: bb("payments:legalDocumentLoadFailed")
      })
    }
    const Il = (0, eb.lazy)((() => (0, ll.c)(Promise.all([Mb.e(146), Mb.e(712)]).then((() => Mb(7709))), (bb => bb.default), Ll))),
      Ol = (0, eb.lazy)((() => (0, ll.c)(Mb.e(148).then((() => Mb(7727))), (bb => bb.default), Ll)));

    function Ul(bb, wb) {
      bb.preventDefault(), Hw.NotificationProvider.showCustomPopup({
        body: (0, Ob.jsx)("div", {
          className: "AppLegalDocument",
          children: (0, Ob.jsx)(eb.Suspense, {
            fallback: (0, Ob.jsx)(Xb.c, {}),
            children: (0, Ob.jsx)(wb, {})
          })
        }),
        middleScreenPopupClassName: "AppLegalDocumentPopup",
        unlockPointerKey: "appLegalDocument"
      })
    }

    function tl(bb) {
      let {
        price: wb,
        perks: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [Mb, (0, Ob.jsx)("div", {
          className: "SmallTextLight",
          children: eb("payments:subscriptionRenewsMonthly", {
            price: wb
          })
        }), (0, Ob.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: ["mobileIos" === Rb.siteUsed && (0, Ob.jsx)("a", {
            href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            target: "_blank",
            rel: "noreferrer",
            children: eb("payments:appleTermsOfUse")
          }), "mobileIos" !== Rb.siteUsed && (0, Ob.jsx)("a", {
            href: "/terms-of-service",
            onClick: bb => {
              Ul(bb, Ol)
            },
            children: eb("homePage:termsOfService")
          }), (0, Ob.jsx)("a", {
            href: "/privacy-policy",
            onClick: bb => {
              Ul(bb, Il)
            },
            children: eb("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var Cl = Mb(4432),
      El = Mb(4434),
      Fl = Mb(4325);

    function Bl(bb) {
      const {
        userContext: wb
      } = (0, Cb.e)(), {
        purchaseUnderWay: Mb,
        notice: Hb,
        subscribe: pb
      } = (0, Fl.b)(), [Vb, gb] = (0, eb.useState)(null), [lb, Lb] = (0, eb.useState)(0), Ib = (0, gM.d)(), Ob = wb !== Db.NULL_USER_CONTEXT, Ub = Ob && (wb.mayBuy() || (0, ab.guestsMayBuy)()), tb = null !== Vb && Vb.loadedFor === wb ? Vb.offer : null, Eb = null === Hb || void 0 === Hb ? void 0 : Hb.pendingIntentId, Fb = (0, eb.useRef)(Eb);

      function Bb() {
        Lb((bb => bb + 1))
      }
      return (0, eb.useEffect)((() => {
        void 0 !== Fb.current && void 0 === Eb && Bb(), Fb.current = Eb
      }), [Eb]), (0, eb.useEffect)((() => {
        if (!Ob) return;
        let Mb = !1;
        return async function(bb, wb) {
          const {
            offering: Mb
          } = await (0, kb.getBillingClient)().getOfferings(bb), eb = null === Mb || void 0 === Mb ? void 0 : Mb.packages.find(Tb.isPricedPackage);
          return void 0 === eb ? {
            kind: "unavailable"
          } : wb ? {
            kind: "loaded",
            pkg: eb,
            preview: await (0, El.h)(eb.productId)
          } : {
            kind: "loaded",
            pkg: eb,
            preview: {
              kind: "none"
            }
          }
        }(bb, Ub).catch((wb => (console.error(`Billing: loading the ${bb} subscription or its preview failed:`, wb), {
          kind: "loadFailed"
        }))).then((bb => {
          Mb || gb((Mb => "loadFailed" === bb.kind && (null === Mb || void 0 === Mb ? void 0 : Mb.loadedFor) === wb ? Mb : {
            loadedFor: wb,
            offer: bb
          }))
        })), () => {
          Mb = !0
        }
      }), [bb, wb, Ob, Ub, lb]), {
        offer: tb,
        purchaseUnderWay: Mb,
        notice: Hb,
        pendingIntentId: Eb,
        mountedRef: Ib,
        checkOut: async function(bb) {
          const Mb = await pb(bb);
          Ib.current && ("unknownPackage" === Mb.kind && gb({
            loadedFor: wb,
            offer: {
              kind: "unavailable"
            }
          }), Bb())
        }
      }
    }

    function sl(bb) {
      let {
        onOfferedChange: wb
      } = bb;
      return (0, ab.usePurchasesAllowed)() && (0, ab.subscriptionsSold)() ? (0, Ob.jsx)(ml, {
        onOfferedChange: wb
      }) : null
    }

    function ml(bb) {
      let {
        onOfferedChange: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        offer: Hb,
        purchaseUnderWay: pb,
        notice: gb,
        pendingIntentId: lb,
        mountedRef: Ib,
        checkOut: Ub
      } = Bl((0, vb.q)(Nb.d.id).placementId), [tb, Cb] = (0, eb.useState)(!1), Eb = null === Hb || "loaded" === Hb.kind && "refused" !== Hb.preview.kind;
      if ((0, eb.useEffect)((() => {
          wb(Eb)
        }), [Eb]), null === Hb || "unavailable" === Hb.kind) return null;
      if ("loadFailed" === Hb.kind) return (0, Ob.jsx)(gl.h, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: Fb,
        preview: sb
      } = Hb;
      if ("refused" === sb.kind) return (0, Ob.jsx)(gl.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(sb.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const mb = (0, pw.f)(Fb);
      return (0, Ob.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: bb => {
          bb.stopPropagation()
        },
        children: [(0, Ob.jsx)(gl.h, {
          notice: gb,
          className: "SmallTextBold"
        }), (0, Ob.jsx)(gl.d, {
          className: "SmallTextBold"
        }), (0, Ob.jsx)("div", {
          className: "StoreCta",
          children: (0, Ob.jsx)(Lb.y, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(bb, wb) {
                if ("refund" === wb.kind) {
                  Cb(!0);
                  const bb = await (0, Cl.d)(wb, null);
                  if (!Ib.current) return;
                  if (Cb(!1), !bb) return
                }
                await Ub(bb)
              }(Fb, sb)
            },
            disabled: void 0 !== lb,
            loading: pb || tb,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, Ob.jsx)("span", {
              className: "StoreCtaLabel",
              children: Mb("payments:subscribeContinue", {
                price: mb
              })
            })
          })
        }), (0, Bb.isMobileApp)() && (0, Ob.jsx)(tl, {
          price: mb,
          perks: (0, Ob.jsx)(og, {})
        })]
      })
    }

    function hl() {
      const {
        t: bb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Ob.jsxs)("li", {
          children: [(0, Ob.jsx)(gb.b, {
            name: "check"
          }), (0, Ob.jsx)(cg, {
            text: bb("store:colourfulNames")
          })]
        }), (0, Ob.jsxs)("li", {
          children: [(0, Ob.jsx)(gb.b, {
            name: "check"
          }), bb("store:perkCapes")]
        }), (0, Ob.jsxs)("li", {
          children: [(0, Ob.jsx)(gb.b, {
            name: "check"
          }), bb("store:perkNoAdverts")]
        }), (0, Ob.jsxs)("li", {
          children: [(0, Ob.jsx)(gb.b, {
            name: "check"
          }), bb("store:perkFriends", {
            count: (0, Cw.c)(["super"])
          })]
        })]
      })
    }

    function zl(bb, wb) {
      return 1 === wb ? bb("store:oneDayLeft") : bb("store:daysLeft", {
        days: wb
      })
    }

    function Xl(bb) {
      let {
        daysLeft: wb,
        totalDays: Mb,
        urgent: eb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)(), gb = Mb > 0 ? Math.min(1, Math.max(.03, wb / Mb)) : 1;
      return (0, Ob.jsxs)("div", {
        className: pb()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: eb
        }),
        children: [(0, Ob.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: zl(Hb, wb)
        }), (0, Ob.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Ob.jsx)("i", {
            style: {
              width: 100 * gb + "%"
            }
          })
        })]
      })
    }

    function xl(bb) {
      var wb;
      let {
        state: Mb,
        urgent: Hb,
        daysLeft: gb,
        totalDays: lb,
        recipientHasSuperRank: Lb,
        busy: Ib,
        highlight: Ub,
        onOpen: tb,
        onAct: Eb,
        onNeedRecipient: Fb,
        onLogin: sb,
        wearer: mb,
        live: hb,
        onWake: zb
      } = bb;
      const {
        t: Xb
      } = (0, Vb.C)(), {
        userContext: xb
      } = (0, Cb.e)(), jb = Date.now(), Kb = (0, vb.s)(jb), rb = "hyper" === Kb.look, Rb = rb ? void 0 : Hl, Db = Rg(Mb), cb = (0, vb.v)(jb), {
        days: Yb
      } = cb.product, Zb = Xb("store:recipientHasSuperRank", {
        giftDays: Yb
      }), fb = null === (wb = Uw("subscribed" === Mb)) || void 0 === wb ? void 0 : wb.text, Ab = Db ? null : (0, vb.r)(xb.superRankInfo, jb), Wb = rb && !Db && "subscribed" !== Mb && "pending" !== Mb && (0, ab.subscriptionsSold)() && !(0, Bb.isMobileApp)(), [Jb, Sb] = (0, eb.useState)(!0);
      return (0, Ob.jsxs)("div", {
        className: pb()("StoreTile StoreSuperRankTile", {
          StoreTileGift: Db,
          StoreSuperRankTileUrgent: "recharge" === Mb && Hb,
          StoreSuperRankTileWithChip: Lb,
          StoreSuperRankTileGiftReady: "gift" === Mb,
          StoreHyperRankTile: rb
        }),
        ...Dg(Xb(Kb.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: Rb,
        onFocus: Rb,
        onPointerMove: bb => {
          !rb || hb || "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || zb()
        },
        onClick: tb,
        children: [rb && (0, Ob.jsx)(qg, {
          className: "StoreHyperRankTileStage",
          wearer: mb,
          active: hb
        }), !rb && (0, Ob.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Kb.artUrl})`
          }
        }), Db && (0, Ob.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Ob.jsxs)("div", {
          className: "StoreTileContent",
          children: [Lb && (0, Ob.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Zb,
            children: Zb
          }), (0, Ob.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, Ob.jsx)(vb.j, {
              tierId: (0, Qb.g)(jb).id
            })
          }), Db && (0, Ob.jsx)("div", {
            className: "StoreTilePitch",
            children: Xb("store:giftPitch", {
              days: Yb
            })
          }), rb && ("buy" === Mb || "login" === Mb) && null === Ab && (0, Ob.jsx)("div", {
            className: "StoreTilePitch",
            children: Xb("store:hyperHook")
          }), "recharge" === Mb && (0, Ob.jsx)(Xl, {
            daysLeft: gb,
            totalDays: lb,
            urgent: Hb
          }), fb && (0, Ob.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Ob.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: fb
            })
          }), null !== Ab && (0, Ob.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Ob.jsx)(qb, {
              className: "StoreSuperRankDaysLeft",
              until: Ab
            })
          }), rb && (0, Ob.jsx)(og, {}), !rb && (0, Ob.jsx)(hl, {}), (0, Ob.jsxs)("div", {
            className: "StoreTileActions",
            children: [Wb && (0, Ob.jsx)(sl, {
              onOfferedChange: Sb
            }), (0, Wg.e)(cb.product.tierId, jb) && (0, Ob.jsx)(Zg, {
              state: Mb,
              item: "superRank",
              price: cb.price,
              busy: Ib,
              highlight: Ub,
              secondary: Wb && Jb,
              onAct: Eb,
              onNeedRecipient: Fb,
              onLogin: sb
            }), "needsRecipient" === Mb && (0, Ob.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: Xb("store:pickRecipientFirst")
            }), "recharge" === Mb && Hb && (0, Ob.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === gb ? Xb("store:endsInOneDay") : Xb("store:endsInDays", {
                days: gb
              })
            })]
          })]
        })]
      })
    }
    var jl = Mb(1723),
      Kl = Mb(1633),
      rl = Mb(4950);

    function Rl() {
      return (0, Ob.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Dl = Mb(1501),
      cl = Mb(1735),
      Yl = Mb(35366);

    function Zl(bb) {
      let {
        character: wb,
        drawn: Mb,
        onDrawn: Hb
      } = bb;
      const Vb = (0, eb.useRef)(null),
        gb = (0, Yl.f)(wb);
      return (0, Ob.jsx)("div", {
        className: pb()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Mb
        }),
        children: (0, Ob.jsx)(eb.Suspense, {
          fallback: null,
          children: (0, Ob.jsx)(hg.e, {
            ref: Vb,
            framing: "store",
            turntableFromYaw: Mb ? gb.yaw : null,
            onReady: () => {
              var bb, Mb;
              null === (bb = Vb.current) || void 0 === bb || bb.setOrbit(gb), null === (Mb = Vb.current) || void 0 === Mb || Mb.setAllCosmetics(cl.d[wb].cosmetics)
            },
            onDrawn: Hb
          })
        })
      })
    }
    var fl = Mb(4427);
    const Al = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Wl = new Set(["wildSpirits"]);

    function Jl(bb) {
      var wb;
      let {
        tile: Mb,
        design: Hb,
        canGoLive: lb,
        live: Lb,
        busy: Ib,
        highlight: Ub,
        onLiveStart: tb,
        onLiveEnd: Cb,
        onOpen: Eb,
        onAct: Fb,
        onNeedRecipient: Bb,
        onLogin: sb
      } = bb;
      const {
        t: mb
      } = (0, Vb.C)(), {
        pack: hb,
        state: zb
      } = Mb, Xb = aV.c[hb], xb = (0, aV.e)(hb), jb = (0, Ig.l)(hb), Kb = oV.m[jb], rb = Wl.has(jb), {
        tier: Rb
      } = Xb, Db = (0, fl.e)(hb), cb = "legendary" === Rb || "mythic" === Rb, Yb = (0, eb.useRef)(null);
      (0, Dl.c)(Yb, "epic" === Rb || cb || rb);
      const [fb, Ab] = (0, eb.useState)(!1);
      return !Lb && fb && Ab(!1), (0, Ob.jsxs)("div", {
        ref: Yb,
        className: pb()("StoreCharacterCard", `StoreCharacterCard${Hb}`, Al[Rb], {
          StoreCharacterCardOwned: "owned" === zb || "recipientOwns" === zb,
          StoreCharacterCardGift: Rg(zb),
          StoreCharacterCardItem: void 0 === xb
        }),
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || !lb || Lb || void 0 === xb || tb()
        },
        onPointerLeave: Cb,
        children: [(0, Ob.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Kb && (0, Ob.jsx)(Kb, {
            simple: !0
          })
        }), cb && (0, Ob.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Ob.jsxs)(Zb.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, jl.g)({
            kind: "pack",
            pack: hb
          }, Date.now()),
          "data-store-item": hb,
          onClick: bb => {
            (0, Kl.b)(bb) && (bb.preventDefault(), Eb())
          },
          children: [(0, Ob.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Ob.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Ob.jsx)("div", {
              className: pb()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: fb
              }),
              style: {
                backgroundImage: `url(${(0,Ig.v)(hb)})`
              }
            }), Lb && void 0 !== xb && (0, Ob.jsx)(Zl, {
              character: xb,
              drawn: fb,
              onDrawn: () => {
                Ab(!0)
              }
            })]
          }), (0, Ob.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (wb = Xb.displayName) && void 0 !== wb ? wb : hb
          }), (0, Ob.jsxs)("div", {
            className: "StoreCharacterTierLine",
            children: [(0, Ob.jsx)(jg.b, {
              tier: Rb
            }), Db && (0, Ob.jsxs)("span", {
              className: "StoreTierLabel StoreCharacterAnimated",
              children: [(0, Ob.jsx)(gb.b, {
                name: "film"
              }), mb("packPerks:badgeAnimated")]
            })]
          })]
        }), (0, Ob.jsx)("div", {
          className: "StoreCharacterScrim"
        }), rb && (0, Ob.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Ob.jsx)(Rl, {})
        }), (0, Ob.jsx)(Kg.e, {
          pack: hb,
          iconOnly: !0,
          className: pb()({
            PackAnimatedBadgeBelowOwned: "owned" === zb
          })
        }), "owned" === zb && (0, Ob.jsx)("span", {
          className: "StoreCharacterOwned",
          title: mb("general:owned"),
          "aria-label": mb("general:owned"),
          children: (0, Ob.jsx)(gb.b, {
            name: "check"
          })
        }), (0, Ob.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Ob.jsx)(Zg, {
            state: zb,
            item: hb,
            price: (0, iV.e)(hb),
            busy: Ib,
            highlight: Ub,
            onAct: Fb,
            onNeedRecipient: Bb,
            onLogin: sb
          })
        })]
      })
    }

    function Sl(bb) {
      let {
        tiles: wb,
        busy: Mb,
        highlightItem: Hb,
        onOpen: pb,
        onAct: Vb,
        onNeedRecipient: gb,
        onLogin: lb,
        livePack: Lb,
        setLivePack: Ib
      } = bb;
      const Ub = (0, rl.o)("storeCharacterCardFoil"),
        tb = (0, rl.o)("storeCharacterCardSpotlight"),
        Cb = Ub ? "Foil" : tb ? "Spotlight" : "Showcase",
        [Eb] = (0, eb.useState)(lg.k);
      return (0, Ob.jsx)("div", {
        className: "StoreCharacterGrid",
        children: wb.map((bb => (0, Ob.jsx)(Jl, {
          tile: bb,
          design: Cb,
          canGoLive: !Eb,
          live: Lb === bb.pack,
          busy: Mb,
          highlight: Hb === bb.pack,
          onLiveStart: () => {
            Ib(bb.pack)
          },
          onLiveEnd: () => {
            Ib((wb => wb === bb.pack ? null : wb))
          },
          onOpen: () => {
            pb(bb.pack)
          },
          onAct: () => {
            Vb(bb.pack)
          },
          onNeedRecipient: gb,
          onLogin: () => {
            lb(bb.pack)
          }
        }, bb.pack)))
      })
    }
    var Nl = Mb(35377);

    function vl(bb) {
      let {
        title: wb
      } = bb;
      return (0, Ob.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Ob.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: wb
        })
      })
    }

    function Ql(bb) {
      let {
        mountAtOnce: wb,
        children: Mb
      } = bb;
      const Hb = (0, eb.useRef)(null),
        [pb, Vb] = (0, eb.useState)(wb),
        gb = (0, Nl.b)();
      return (0, eb.useLayoutEffect)((() => {
        const bb = Hb.current;
        bb && bb.getBoundingClientRect().top < bb.parentElement.getBoundingClientRect().bottom && Vb(!0)
      }), []), pb || gb ? (0, Ob.jsx)(Ob.Fragment, {
        children: Mb
      }) : (0, Ob.jsx)("div", {
        ref: Hb
      })
    }

    function Gl(bb) {
      let {
        layout: wb,
        mountAtOnce: Mb,
        bundleGift: Hb,
        superRankTotalDays: pb,
        busy: gb,
        highlightItem: lb,
        onOpen: Lb,
        onAct: Ib,
        onNeedRecipient: Ub,
        onLogin: tb,
        dailyDropTile: Cb,
        dealBanner: Eb,
        rankWearer: Fb
      } = bb;
      const {
        t: Bb
      } = (0, Vb.C)(), sb = wb.packs.filter((bb => void 0 === (0, aV.e)(bb.pack) && !(0, aV.j)(bb.pack))), mb = wb.packs.filter((bb => void 0 !== (0, aV.e)(bb.pack))), hb = wb.packs.filter((bb => (0, aV.j)(bb.pack))), [zb, Xb] = (0, eb.useState)(null), [xb, Kb] = (0, eb.useState)(!1), {
        gameState: rb
      } = (0, jb.o)(["gameState"]), Rb = null === zb && (xb || "inGame" === rb);
      return (0, Ob.jsxs)(Ob.Fragment, {
        children: [(0, Ob.jsx)(pw.b, {
          className: "StoreSuperGems",
          gift: Hb,
          highlightSku: lb,
          leadingTile: Cb,
          afterLeadingTile: Eb
        }), null !== wb.superRank && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)(vl, {
            title: Bb("store:rank")
          }), (0, Ob.jsx)(xl, {
            state: wb.superRank.state,
            urgent: wb.superRank.urgent,
            daysLeft: wb.superRankDaysLeft,
            totalDays: pb,
            recipientHasSuperRank: wb.recipientHasSuperRank,
            wearer: Fb,
            live: Rb,
            onWake: () => {
              Kb(!0)
            },
            busy: gb,
            highlight: "superRank" === lb,
            onOpen: () => {
              Lb("superRank")
            },
            onAct: () => {
              Ib("superRank")
            },
            onNeedRecipient: Ub,
            onLogin: () => {
              tb("superRank")
            }
          })]
        }), (0, Ob.jsxs)(Ql, {
          mountAtOnce: Mb,
          children: [(0, Ob.jsx)(vl, {
            title: Bb("store:bundles")
          }), (0, Ob.jsx)("div", {
            className: "StorePackGrid",
            children: sb.map((bb => (0, Ob.jsx)(Ag, {
              pack: bb.pack,
              state: bb.state,
              busy: gb,
              onOpen: () => {
                Lb(bb.pack)
              },
              onAct: () => {
                Ib(bb.pack)
              },
              onNeedRecipient: Ub,
              onLogin: () => {
                tb(bb.pack)
              }
            }, bb.pack)))
          }), (0, Ob.jsxs)(Ql, {
            mountAtOnce: Mb,
            children: [(0, Ob.jsx)(vl, {
              title: Bb("store:characters")
            }), (0, Ob.jsx)(Sl, {
              tiles: mb,
              busy: gb,
              highlightItem: lb,
              onOpen: Lb,
              onAct: Ib,
              onNeedRecipient: Ub,
              onLogin: tb,
              livePack: zb,
              setLivePack: Xb
            }), hb.length > 0 && (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsx)(vl, {
                title: Bb("store:premiumItems")
              }), (0, Ob.jsx)(Sl, {
                tiles: hb,
                busy: gb,
                highlightItem: lb,
                onOpen: Lb,
                onAct: Ib,
                onNeedRecipient: Ub,
                onLogin: tb,
                livePack: zb,
                setLivePack: Xb
              })]
            })]
          })]
        })]
      })
    }

    function ql(bb) {
      let {
        giftName: wb,
        onChooseRecipient: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return wb ? (0, Ob.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: eb("store:giftFor", {
          name: wb
        }),
        children: [bg.e, " ", eb("store:giftFor", {
          name: wb
        })]
      }) : (0, Ob.jsxs)("div", {
        ...(0, Lb.bb)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: Mb,
        children: [bg.e, " ", eb("store:chooseRecipient")]
      })
    }

    function al(bb) {
      return (0, Qb.b)(Date.now()) ? (0, Ob.jsx)(ul, {
        ...bb
      }) : (0, Ob.jsx)(il, {
        ...bb
      })
    }

    function il(bb) {
      let {
        state: wb,
        wearer: Mb,
        mode: eb,
        giftName: Hb,
        busy: pb,
        highlight: gb,
        purchaseError: lb,
        onBack: Lb,
        onChooseRecipient: Ib,
        onAct: Ub,
        onLogin: tb
      } = bb;
      const {
        t: Cb
      } = (0, Vb.C)(), Eb = Uw("gift" !== eb);
      return (0, Ob.jsx)(Vl, {
        tierId: Nb.n.id,
        wearer: Mb,
        onBack: Lb,
        recipient: "gift" === eb && (0, Ob.jsx)(ql, {
          giftName: Hb,
          onChooseRecipient: Ib
        }),
        cta: (0, Ob.jsx)(Zg, {
          state: wb,
          item: "superRank",
          price: (0, vb.v)(Date.now()).price,
          busy: pb,
          highlight: gb,
          onAct: Ub,
          onNeedRecipient: Ib,
          onLogin: tb
        }),
        afterCta: (0, Ob.jsxs)(Ob.Fragment, {
          children: [Eb && (0, Ob.jsx)("span", {
            className: "StoreTileNote",
            children: Eb.text
          }), (null === Eb || void 0 === Eb ? void 0 : Eb.manageUrl) && (0, Ob.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: Eb.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: Cb("payments:manageSubscription")
          }), lb && (0, Ob.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Cb(lb)
          })]
        })
      })
    }

    function ul(bb) {
      let {
        state: wb,
        daysLeft: Mb,
        wearer: Hb,
        mode: pb,
        giftName: gb,
        busy: lb,
        highlight: Lb,
        purchaseError: Ib,
        onBack: Ub,
        onChooseRecipient: tb,
        onAct: Eb,
        onLogin: Fb
      } = bb;
      const {
        t: Bb
      } = (0, Vb.C)(), {
        userContext: sb
      } = (0, Cb.e)(), mb = Date.now(), hb = "gift" !== pb, zb = hb && "subscribed" === wb, Xb = hb ? (0, vb.r)(sb.superRankInfo, mb) : null, xb = hb && !zb && "pending" !== wb && (0, ab.subscriptionsSold)(), [jb, Kb] = (0, eb.useState)(!0);
      return (0, Ob.jsx)(Vl, {
        tierId: Nb.d.id,
        wearer: Hb,
        onBack: Ub,
        recipient: !hb && (0, Ob.jsx)(ql, {
          giftName: gb,
          onChooseRecipient: tb
        }),
        cta: (0, Ob.jsxs)(Ob.Fragment, {
          children: [null !== Xb && (0, Ob.jsx)(qb, {
            className: "StoreTileNote StoreDetailNote",
            until: Xb
          }), "recharge" === wb && Mb > 0 && (0, Ob.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: zl(Bb, Mb)
          }), xb && (0, Ob.jsx)(sl, {
            onOfferedChange: Kb
          }), hb && (0, Ob.jsx)(gw, {
            showing: !0
          }), !zb && (0, Wg.e)(Nb.d.id, mb) && (0, Ob.jsx)(Zg, {
            state: wb,
            item: "superRank",
            price: (0, vb.v)(mb).price,
            busy: lb,
            highlight: Lb,
            secondary: xb && jb,
            onAct: Eb,
            onNeedRecipient: tb,
            onLogin: Fb
          })]
        }),
        afterCta: Ib && (0, Ob.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: Bb(Ib)
        })
      })
    }

    function dl() {}

    function Pl() {
      return "true" !== new URLSearchParams(window.location.search).get("tempSubscription") ? null : (0, Ob.jsx)("div", {
        className: "StoreTempSubscribe",
        children: (0, Ob.jsx)(sl, {
          onOfferedChange: dl
        })
      })
    }
    var nl = Mb(3732);

    function yl(bb) {
      let {
        state: wb,
        view: Mb,
        claiming: Hb,
        onOpen: gb
      } = bb;
      const {
        t: Ib
      } = (0, Vb.C)(), Ub = (0, eb.useRef)(null), tb = "ready" === Mb.kind;
      return (0, Dl.c)(Ub, tb), (0, Ob.jsxs)("div", {
        ref: Ub,
        className: pb()("DailyDropTile", {
          DailyDropTileReady: tb
        }),
        children: [tb && (0, Ob.jsx)(lb.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, Ob.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Ib("dailyDrop:name")
        }), (0, Ob.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, Ob.jsx)(nl.d, {
            className: "DailyDropTileBlock"
          }), (0, Ob.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, Ob.jsx)("span", {
              children: Ib("dailyDrop:basicItems")
            }), " ", (0, Ob.jsx)("span", {
              children: Ib("dailyDrop:collected", {
                count: wb.collected.length,
                total: wb.total
              })
            })]
          })]
        }), "ready" === Mb.kind && (0, Ob.jsx)(Lb.p, {
          className: "DailyDropTileOpen",
          onClick: gb,
          loading: Hb,
          children: Ib("dailyDrop:open")
        }), "waiting" === Mb.kind && (0, Ob.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Ib("dailyDrop:nextIn", {
            count: Mb.hours
          })
        })]
      })
    }
    var ol = Mb(3217);
    const Tl = Math.PI / 180;

    function kl(bb) {
      return bb / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function bL(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const eb = (bb / (2 * Math.PI / Mb) % Mb + Mb) % Mb;
      let Hb = null,
        pb = 1 / 0;
      for (let Vb = 0; Vb < Mb; Vb++) {
        if (!wb[Vb]) continue;
        const bb = Math.abs(Vb - eb),
          gb = Math.min(bb, Mb - bb);
        gb < pb && (Hb = Vb, pb = gb)
      }
      return Hb
    }

    function wL(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const eb = bL(bb, wb, Mb);
      if (null === eb) return bb;
      const Hb = kl(eb, Mb) - bb;
      return bb + Hb - 2 * Math.PI * Math.round(Hb / (2 * Math.PI))
    }
    const ML = 32;

    function eL(bb) {
      if (0 === bb.width || 0 === bb.height) return !0;
      const wb = document.createElement("canvas");
      wb.width = ML, wb.height = ML;
      const Mb = wb.getContext("2d", {
        willReadFrequently: !0
      });
      if (!Mb) return !0;
      Mb.drawImage(bb, 0, 0, ML, ML);
      const {
        data: eb
      } = Mb.getImageData(0, 0, ML, ML);
      for (let Hb = 3; Hb < eb.length; Hb += 4)
        if (eb[Hb] > 0) return !1;
      return !0
    }

    function HL(bb) {
      bb.width = 0, bb.height = 0
    }

    function pL() {
      return "hidden" === document.visibilityState
    }
    async function VL(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 1e3;
      for (;;) {
        await (pL() ? new Promise((bb => {
          const wb = () => {
            pL() || (document.removeEventListener("visibilitychange", wb), bb())
          };
          document.addEventListener("visibilitychange", wb)
        })) : Promise.resolve());
        const Mb = Math.min(wb(), 1e3);
        if (Mb <= 0) return null;
        const eb = await bb.captureFrame(Mb);
        if (null !== eb || !pL()) return null !== eb && eL(eb) ? (HL(eb), null) : eb
      }
    }
    async function gL(bb, wb) {
      const Mb = performance.now();
      let eb = 0,
        Hb = pL() ? Mb : null;
      const pb = () => {
          pL() ? Hb ??= performance.now() : null !== Hb && (eb += performance.now() - Hb, Hb = null)
        },
        Vb = () => {
          const bb = performance.now();
          return 3e3 - (bb - Mb - eb - (null === Hb ? 0 : bb - Hb))
        };
      document.addEventListener("visibilitychange", pb);
      try {
        let Mb = await VL(bb);
        for (; null === Mb && wb() && Vb() > 0;) Mb = await VL(bb, Vb);
        return Mb
      } finally {
        document.removeEventListener("visibilitychange", pb)
      }
    }

    function lL(bb) {
      let {
        cosmetics: wb
      } = bb;
      return (0, Ob.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, Ob.jsx)(Ug.e, {
          cosmetics: wb
        })
      })
    }

    function LL(bb) {
      let {
        worn: wb,
        gH: Mb,
        lH: Hb,
        prompting: lb,
        className: Lb
      } = bb;
      const {
        t: Ib
      } = (0, Vb.C)(), Ub = (0, eb.useRef)(null), [tb, Cb] = (0, eb.useState)(null), [Eb, Fb] = (0, eb.useState)(!1), [Bb, sb] = (0, eb.useState)(!1), mb = (0, eb.useRef)([]), hb = (0, eb.useRef)(null), zb = (0, eb.useRef)(0), xb = (0, eb.useRef)(null), jb = (0, eb.useRef)(!0), Kb = (0, eb.useCallback)((() => {
        const bb = hb.current,
          wb = mb.current,
          Mb = bL(zb.current, wb),
          eb = null === Mb ? null : wb[Mb],
          Hb = null === bb || void 0 === bb ? void 0 : bb.getContext("2d");
        bb && eb && Hb && (bb.width === eb.width && bb.height === eb.height || (bb.width = eb.width, bb.height = eb.height), Hb.clearRect(0, 0, bb.width, bb.height), Hb.drawImage(eb, 0, 0))
      }), []);
      async function rb(bb, wb) {
        const Mb = performance.now(),
          eb = () => Ub.current === bb;
        let Hb = 0;
        for (const pb of function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const wb = [],
              Mb = new Set;
            for (let eb = bb / 2; eb >= 1 && Number.isInteger(eb); eb /= 2)
              for (let Hb = 0; Hb < bb; Hb += eb) Mb.has(Hb) || (Mb.add(Hb), wb.push(Hb));
            for (let eb = 0; eb < bb; eb++) Mb.has(eb) || wb.push(eb);
            return wb
          }()) {
          if (!eb()) break;
          bb.turnCamera(kl(pb));
          const Mb = 0 === pb ? await gL(wb, eb) : await VL(wb);
          if (!eb()) {
            null !== Mb && HL(Mb);
            break
          }
          if (null !== Mb) mb.current[pb] = Mb, Hb++, 0 === pb && Cb("stills");
          else if (0 === pb) break
        }
        Hb > 0 && console.info(`Lucky Skin Block's Before: ${Hb} stills in ${Math.round(performance.now()-Mb)} ms`)
      }

      function Rb(bb) {
        var wb, Mb;
        (null === (wb = xb.current) || void 0 === wb ? void 0 : wb.pointerId) === bb.pointerId && (xb.current = null, jb.current || (zb.current = wL(zb.current, mb.current), Kb(), null === (Mb = Ub.current) || void 0 === Mb || Mb.turnCamera(zb.current)))
      }(0, eb.useEffect)((() => {
        "stills" === tb && Kb()
      }), [tb, Kb]), (0, eb.useEffect)((() => () => {
        for (const bb of mb.current) bb && HL(bb);
        mb.current = []
      }), []);
      const Db = lb && !Bb,
        cb = Db ? {
          onPointerDown: bb => {
            null === xb.current && (bb.currentTarget.setPointerCapture(bb.pointerId), xb.current = {
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startTurn: zb.current
            })
          },
          onPointerMove: bb => {
            const wb = xb.current;
            var Mb;
            null !== wb && wb.pointerId === bb.pointerId && (zb.current = wb.startTurn - (bb.clientX - wb.startX) * Tl, Kb(), jb.current || null === (Mb = Ub.current) || void 0 === Mb || Mb.turnCamera(zb.current))
          },
          onPointerUp: Rb,
          onPointerCancel: Rb
        } : {};
      return (0, Ob.jsxs)("div", {
        className: pb()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: Db
        }, Lb),
        children: [(0, Ob.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, Ob.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...cb,
            children: ["stills" === tb && (0, Ob.jsx)("canvas", {
              ref: hb,
              className: "DailyDropRevealBeforeStill"
            }), "head" === tb && (0, Ob.jsx)(lL, {
              cosmetics: wb
            }), null === tb && (0, Ob.jsx)(Xb.c, {})]
          }), (0, Ob.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Ib("dailyDrop:before")
          })]
        }), (0, Ob.jsx)(gb.b, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, Ob.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, Ob.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, Ob.jsx)("div", {
              className: pb()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: Eb
              }),
              children: (0, Ob.jsx)(eb.Suspense, {
                fallback: null,
                children: (0, Ob.jsx)(hg.e, {
                  onNoWebGl: () => {
                    Cb("head"), sb(!0)
                  },
                  ref: Ub,
                  onReady: () => {
                    var bb, Mb;
                    null === (bb = Ub.current) || void 0 === bb || bb.resetCamera(), null === (Mb = Ub.current) || void 0 === Mb || Mb.setAllCosmetics(wb)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        const bb = Ub.current;
                        if (!bb) return;
                        const wb = bb.getDevTools();
                        try {
                          wb && await rb(bb, wb)
                        } catch (pb) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", pb)
                        } finally {
                          jb.current = !1
                        }
                        if (Ub.current !== bb) return;
                        mb.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), (0, IM.v)("daily_drop.before_head", "no_front_still"), Cb("head")), null === xb.current && (zb.current = wL(zb.current, mb.current)), bb.turnCamera(zb.current), Kb(), bb.updateCosmetic(Mb, Hb);
                        const eb = new Promise((bb => {
                          setTimeout(bb, 1e4)
                        }));
                        await Promise.race([bb.ensureReadyForCapture(Mb), eb]).catch((bb => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", bb)
                        })), Ub.current === bb && Fb(!0)
                      }()
                    }))
                  }
                })
              })
            }), Bb && (TH.N.includes(Mb) ? (0, Ob.jsx)(lL, {
              cosmetics: {
                ...wb,
                [Mb]: Hb
              }
            }) : (0, Ob.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,ol.l)(Mb,Hb).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !Eb && !Bb && (0, Ob.jsx)(Xb.c, {}), (0, Ob.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...cb
            })]
          }), (0, Ob.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Ib("dailyDrop:after")
          })]
        })]
      })
    }
    const IL = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      OL = {
        opening: 900,
        shrinking: 700
      };

    function UL(bb) {
      let {
        drop: wb,
        onClose: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)(), {
        userContext: lb
      } = (0, Cb.e)(), {
        state: Ib,
        view: Ub
      } = (0, IM.D)(), [tb, Eb] = (0, eb.useState)("closed"), [Fb] = (0, eb.useState)((() => ({
        ...lb.getPlayerCosmetics()
      }))), [Bb] = (0, eb.useState)((() => (0, IM.j)(wb, Fb))), [sb, mb] = (0, eb.useState)(!1), [hb, zb] = (0, eb.useState)(!1), [Xb] = (0, eb.useState)((() => null === Ib ? Promise.resolve(null) : EM(Ib))), [xb, Kb] = (0, eb.useState)(null), rb = (0, gM.d)(), {
        gameState: Rb
      } = (0, jb.o)(["gameState"]);
      async function Db() {
        const bb = await Xb;
        rb.current && (null === bb ? (Mb(), async function(bb) {
          let wb = null;
          try {
            const Mb = await CM();
            null === bb || bb.remindersOn || null !== tM.i.getItem(Mb) || (wb = Mb)
          } catch (eb) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", eb)
          }
          if (null === wb) return void await (0, OM.i)("dailyDrop");
          const Mb = wb;
          await (0, OM.i)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              tM.i.setItem(Mb, !0), BM(null)
            }
          })
        }(Ib)) : ((0, OM.g)(), Kb(bb), Eb("remind")))
      }

      function cb(bb) {
        null !== xb && function(bb, wb) {
          tM.i.setItem(bb.askedKey, !0), (0, VM.n)(), (0, IM.v)("daily_drop.remind", wb ? "yes" : "no"), wb && BM(bb.requester)
        }(xb, bb), Mb()
      }(0, eb.useEffect)((() => {
        (0, IM.v)("daily_drop.reveal_step", tb)
      }), [tb]), (0, eb.useEffect)((() => {
        const bb = OL[tb];
        if (void 0 === bb) return;
        const wb = setTimeout((() => {
          Eb(IL[tb])
        }), bb);
        return () => {
          clearTimeout(wb)
        }
      }), [tb]);
      const Yb = Hb(`dailyDrop:kind_${Bb.gH}`),
        Zb = Ib && Hb("dailyDrop:collected", {
          count: Ib.collected.length,
          total: Ib.total
        }),
        fb = "revealed" === tb || "shrinking" === tb,
        Ab = "equip" !== tb && "remind" !== tb;
      return (0, Ob.jsx)(hH.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === tb ? () => {
          cb(!1)
        } : Mb,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, Ob.jsxs)("div", {
          className: pb()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === tb,
            DailyDropRevealShrinking: "shrinking" === tb,
            DailyDropRevealFiguresShown: "shrinking" === tb || "equip" === tb || "remind" === tb
          }),
          children: [(0, Ob.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, Ob.jsx)(LL, {
              className: "DailyDropRevealStageFigures",
              worn: Fb,
              gH: Bb.gH,
              lH: Bb.lH,
              prompting: !Ab
            }), ("closed" === tb || "opening" === tb) && (0, Ob.jsx)(nl.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === tb
            }), fb && (0, Ob.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, Ob.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,ol.l)(Bb.gH,Bb.lH).previewTex}.png`,
                alt: Yb,
                draggable: !1
              })
            })]
          }), Ab && (0, Ob.jsxs)(Ob.Fragment, {
            children: [(0, Ob.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, Ob.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: fb ? Yb : Hb("dailyDrop:name")
              }), "closed" === tb && (0, Ob.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Hb("dailyDrop:tapToOpen")
              }), "revealed" === tb && (0, Ob.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: Hb("dailyDrop:tapToContinue")
              })]
            }), (0, Ob.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": Hb("closed" === tb ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Eb(IL[tb])
              }
            })]
          }), "equip" === tb && (0, Ob.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Ob.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Yb
            }), (0, Ob.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Hb("dailyDrop:equipQuestion")
            }), (0, Ob.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Ob.jsx)(Lb.f, {
                className: "DailyDropRevealButton",
                disabled: sb,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, IM.v)("daily_drop.not_now", wb), Db()
                },
                children: Hb("dailyDrop:notNow")
              }), (0, Ob.jsx)(Lb.f, {
                className: "DailyDropRevealButton",
                loading: sb,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, IM.v)("daily_drop.equip", wb), mb(!0), zb(!1);
                    try {
                      await (0, IM.f)(lb, Bb.gH, Bb.lH)
                    } catch (bb) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", bb), mb(!1), void zb(!0)
                    }
                    await Db()
                  }()
                },
                children: Hb("dailyDrop:equip")
              })]
            }), hb && (0, Ob.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: Hb("dailyDrop:equipFailed")
            }), !(0, jb.e)(Rb) && (0, Ob.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: sb,
              onClick: () => {
                var bb;
                (0, IM.v)("daily_drop.customise", wb), bb = Bb.gH, cM.k.iI(tH, bb), jb.c.set({
                  openEverythingMenuName: Zw.l.CUSTOMISATION
                }), Mb()
              },
              children: [Hb("dailyDrop:customise"), " ", (0, Ob.jsx)(gb.b, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), Zb && (0, Ob.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [Zb, "waiting" === (null === Ub || void 0 === Ub ? void 0 : Ub.kind) && ` \xb7 ${Hb("dailyDrop:nextInInline",{count:Ub.hours})}`]
            })]
          }), "remind" === tb && (0, Ob.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Ob.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: Hb("dailyDrop:remindTitle")
            }), (0, Ob.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Hb("dailyDrop:remindSubtitle")
            }), (0, Ob.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Ob.jsx)(Lb.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  cb(!1)
                },
                children: Hb("dailyDrop:remindNo")
              }), (0, Ob.jsx)(Lb.p, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  cb(!0)
                },
                children: Hb("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function tL(bb, wb) {
      const {
        t: Mb
      } = (0, Vb.C)(), Hb = function(bb, wb) {
        const {
          state: Mb,
          view: Hb
        } = (0, IM.D)(), [pb, Vb] = (0, eb.useState)(!1), [gb, lb] = (0, eb.useState)(!1), [Lb, Ib] = (0, eb.useState)(null), Ob = (0, eb.useRef)(null), Ub = (0, eb.useRef)(!1), tb = wb && "ready" === (null === Hb || void 0 === Hb ? void 0 : Hb.kind);
        (0, eb.useEffect)((() => {
          bb ? tb && !Ub.current && (Ub.current = !0, (0, IM.v)("daily_drop.shown", "tile")) : Ub.current = !1
        }), [bb, tb]), (0, eb.useEffect)((() => {
          bb || (Bb(), lb(!1))
        }), [bb]);
        const Cb = bb && null === Lb && !(0, IM.s)(Hb);
        (0, eb.useEffect)((() => {
          Cb && jb.c.set({
            openEverythingMenuName: Zw.l.CUSTOMISATION
          })
        }), [Cb]);
        const Eb = (0, eb.useRef)(!1),
          Fb = (0, eb.useRef)(bb);

        function Bb() {
          null !== Ob.current && (Ob.current = null, Ib(null))
        }
        return Fb.current = bb, {
          state: Mb,
          view: Hb,
          claiming: pb,
          claimFailed: gb,
          reveal: Lb,
          open: async function() {
            if (!Eb.current) {
              Eb.current = !0, Vb(!0), lb(!1);
              try {
                const {
                  state: bb,
                  drop: wb
                } = await (0, IM.b)();
                if (null === bb || null === wb) return;
                if (!Fb.current) return;
                (0, IM.v)("daily_drop.open", wb), Ob.current = {
                  state: bb,
                  drop: wb
                }, Ib(Ob.current)
              } catch (bb) {
                console.error("Failed to claim the Lucky Skin Block", bb), Fb.current && lb(!0)
              } finally {
                Eb.current = !1, Vb(!1)
              }
            }
          },
          closeReveal: Bb
        }
      }(bb, wb);
      return {
        shown: (0, IM.s)(Hb.view) || null !== Hb.reveal,
        tile: Hb.state && Hb.view && (0, Ob.jsx)(yl, {
          state: Hb.state,
          view: Hb.view,
          claiming: Hb.claiming,
          onOpen: Hb.open
        }),
        claimFailed: Hb.claimFailed && (0, Ob.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Mb("dailyDrop:claimFailed")
        }),
        reveal: Hb.reveal && (0, Ob.jsx)(UL, {
          drop: Hb.reveal.drop,
          onClose: Hb.closeReveal
        })
      }
    }

    function CL(bb) {
      let {
        show: wb
      } = bb;
      const Mb = tL(wb, wb);
      return (0, lw.D)(wb && Mb.shown, (0, lw.H)(), (bb => {
        (0, IM.v)("daily_drop.store_only_open", bb)
      })), wb && Mb.shown ? (0, Ob.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [Mb.claimFailed, Mb.tile && (0, Ob.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: Mb.tile
        }), Mb.reveal]
      }) : null
    }
    var EL = Mb(3744),
      FL = Mb(35384),
      BL = Mb(35389);

    function sL(bb) {
      let {
        view: wb,
        highlight: Mb,
        scrollSignal: Hb,
        onScrolledIntoView: pb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)(), {
        purchaseUnderWay: lb,
        notice: Lb,
        needsLogin: Ib,
        buyPack: Ub
      } = (0, BL.f)("banner");
      (0, EL.S)(wb.arm, "banner");
      const tb = (0, eb.useRef)(null);
      return (0, eb.useEffect)((() => {
        var bb;
        Hb > 0 && (null === (bb = tb.current) || void 0 === bb || bb.scrollIntoView({
          block: "nearest"
        }), pb())
      }), [Hb]), (0, Ob.jsxs)("div", {
        ref: tb,
        className: "NewPlayerDealBanner",
        children: [(0, Ob.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, Ob.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: gb("newPlayerDeal:title")
          }), (0, Ob.jsx)(FL.b, {
            endsAt: wb.endsAt
          })]
        }), (0, Ob.jsx)(FL.c, {
          view: wb,
          needsLogin: Ib,
          busy: lb,
          highlight: Mb,
          onBuy: bb => {
            Ub(wb, bb)
          }
        }), (0, Ob.jsx)(gl.h, {
          notice: Lb,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    Mb(35387);
    var mL = Mb(3750);

    function hL(bb) {
      let {
        wallet: wb,
        close: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, Ob.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, Ob.jsx)("span", {
            children: eb("newPlayerDeal:giftable")
          }), (0, Ob.jsx)(mg.d, {
            amount: (0, PV.c)(wb)
          }), (0, Ob.jsx)("span", {
            children: eb("newPlayerDeal:ungiftable")
          }), (0, Ob.jsx)(mg.d, {
            amount: wb.ungiftable
          })]
        }), (0, Ob.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: eb("newPlayerDeal:ungiftableWhy")
        }), (0, Ob.jsx)(Lb.p, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: Mb,
          children: eb("general:ok")
        })]
      })
    }

    function zL(bb) {
      Hw.NotificationProvider.showCustomPopup({
        body: wb => (0, Ob.jsx)(hL, {
          wallet: bb,
          close: wb
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const XL = {
      kind: "board"
    };
    let xL = !1;

    function jL(bb) {
      return "found" === bb.status || "error" === bb.status && "store:giftRecipientLookupFailed" === bb.error ? bb.name : null
    }(0, lw.w)(Tb.prefetchBillingOfferings);
    const KL = (0, eb.memo)((function(bb) {
      var wb;
      let {
        show: Hb
      } = bb;
      const {
        t: gb
      } = (0, Vb.C)(), {
        userContext: lb
      } = (0, Cb.e)(), Lb = (0, ab.usePurchasesAllowed)(), Ib = lb !== Db.NULL_USER_CONTEXT, Ub = Hg(lb, Hb), [tb, Eb] = (0, Fb.c)(), {
        page: Bb,
        urlMode: sb,
        goTo: mb
      } = (0, pg.f)(), hb = function(bb) {
        return "superRank" === bb.kind ? "superRank" : "pack" === bb.kind ? bb.pack : null
      }(Bb), {
        openEverythingMenuName: zb,
        gameState: Xb
      } = (0, jb.o)(["openEverythingMenuName", "gameState"]), xb = null !== zb, Kb = "landingPage" === Xb;
      ! function(bb, wb) {
        const [Hb] = (0, eb.useState)(lg.k), [pb, Vb] = (0, eb.useState)(!1);
        Hb && wb && !pb && Vb(!0);
        const gb = (0, ie.z)(),
          lb = Hb && pb && bb && !gb;
        (0, eb.useEffect)((() => {
          if (!lb) return;
          let bb = null,
            wb = null,
            eb = null;
          const Hb = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, kb.getBillingClient)().purchaseUnderWay,
            pb = () => {
              var Mb;
              null === (Mb = eb) || void 0 === Mb || Mb(), eb = null, null !== bb && (clearTimeout(bb), bb = null), null !== wb && (clearTimeout(wb), wb = null)
            },
            Vb = () => {
              (0, Vg.m)(!1), (0, Vg.l)(!1), pb(), bb = setTimeout((() => {
                bb = null, eb = (0, gg.b)((() => {
                  eb = null, Hb() ? Vb() : ((0, Vg.m)(!0), wb = setTimeout((() => {
                    wb = null, eb = (0, gg.b)((() => {
                      eb = null, Hb() ? Vb() : (0, Vg.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Mb(5509))).then((bb => {
                    bb.startBackgroundGameSetup()
                  }), (bb => {
                    console.warn("Background game setup: its chunk failed to load", bb)
                  })))
                }))
              }), 2e3)
            };
          for (const Mb of Lg) window.addEventListener(Mb, Vb, {
            capture: !0,
            passive: !0
          });
          return Vb(), () => {
            for (const bb of Lg) window.removeEventListener(bb, Vb, {
              capture: !0
            });
            pb(), (0, Vg.m)(!1), (0, Vg.l)(!1)
          }
        }), [lb])
      }(Hb && xb && Kb, "pack" === Bb.kind), (0, eb.useEffect)((() => {
        xb && (0, Tb.prefetchBillingOfferings)()
      }), [xb]), (0, eb.useEffect)((() => {
        xb && !Hb && Kb && (0, Ig.x)()
      }), [xb, Hb, Kb]);
      const [rb, Rb] = (0, eb.useState)(0), [cb, Yb] = (0, eb.useState)(null), [Zb, fb] = (0, eb.useState)(null), [Ab, Wb] = (0, eb.useState)(null), [Jb, Sb] = (0, eb.useState)(null), [Nb, Gb] = (0, eb.useState)(0), qb = (0, eb.useRef)(null), ib = (0, eb.useRef)(null), ub = (0, eb.useRef)(null), db = (0, eb.useRef)(!1), Pb = (0, lw.H)(), nb = (0, eb.useRef)(0);

      function yb() {
        Rb((bb => bb + 1))
      }(0, eb.useEffect)((() => {
        if (Hb) {
          if (xL = !0, (0, lw.n)(), Pb && Pb.seq !== nb.current) {
            var bb;
            nb.current = Pb.seq, "loginResume" !== Pb.source && (0, lw.A)();
            const wb = (0, lw.d)(Pb);
            sb || mb(wb), Sb(null !== (bb = Pb.highlight) && void 0 !== bb ? bb : null);
            const Mb = "newPlayerDeal" === Pb.source || "loginResume" === Pb.source && void 0 !== Pb.highlight && (0, EL.f)(lb).includes(Pb.highlight);
            Gb((bb => Mb ? bb + 1 : 0)), fb(null), "gift" === Pb.mode && Pb.giftRecipientName ? Ub.choose(Pb.giftRecipientName, "prefilled") : Ub.clear(), "gift" !== Pb.mode || Pb.giftRecipientName || yb()
          }
        } else Gb(0)
      }), [Hb, Pb]), (0, lw.D)(Hb, Pb, (bb => {
        (0, Fw.reportAnalyticsClick)({
          id: "store.open",
          value: bb
        })
      }));
      const ob = (0, EL.O)(),
        bw = null !== Jb && null === ob && null === (0, EL.j)((0, EL.b)(lb)) && (0, EL.f)(lb).includes(Jb);
      (0, eb.useEffect)((() => {
        if (!Jb) return;
        const bb = setTimeout((() => {
          Sb(null)
        }), bw ? 15e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Jb, bw]), (0, eb.useLayoutEffect)((() => {
        const bb = qb.current;
        if (!Hb || !bb) return ib.current = null, void(ub.current = null);
        var wb;
        if (hb) ib.current = hb, null === (wb = bb.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === wb || wb.focus();
        else if (ib.current) {
          const wb = ub.current;
          null !== wb && (bb.scrollTop = wb);
          const Mb = bb.querySelector(`[data-store-item="${ib.current}"]`);
          if (Mb) {
            const eb = Mb.getBoundingClientRect(),
              Hb = bb.getBoundingClientRect();
            Mb.focus({
              preventScroll: null !== wb && eb.bottom > Hb.top && eb.top < Hb.bottom
            })
          }
          ib.current = null
        }
      }), [hb, Hb]), (0, eb.useEffect)((() => {
        fb(null)
      }), [Ub.query]), (0, eb.useEffect)((() => {
        if (!Ab) return;
        const bb = setTimeout((() => {
          Wb(null)
        }), 8e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Ab]);
      const ww = lb.superRankInfo,
        Mw = lb.isLoggedIn() || (0, ab.guestsMayBuy)(),
        ew = lb.getOwnedCosmeticPacks(),
        Hw = (0, bg.q)(Ub.query),
        pw = (0, bg.g)({
          mode: Hw,
          loggedIn: Ib ? Mw : null,
          superRankInfo: ww,
          soldTierId: (0, vb.v)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: ew,
          packs: aV.v,
          recipient: Ub.recipient
        });
      (0, eb.useEffect)((() => {
        if (!Mw || !Hb) return;
        const bb = (0, EL.f)(lb),
          wb = (0, lw.A)((wb => !bb.includes(wb.item))),
          Mb = wb && (0, bg.m)(wb, aV.v);
        wb && Mb && ((0, Fw.reportAnalyticsClick)({
          id: "store.login_resume",
          value: wb.item
        }), (0, lw.r)(Mb))
      }), [Mw, Hb]);
      const Vw = Hb && "gift" === Hw,
        gw = (0, eb.useRef)(Vw);
      gw.current = Vw;
      const Lw = "none" !== Ub.recipient.status,
        Iw = (0, eb.useRef)(!1);
      (0, eb.useEffect)((() => {
        Vw ? Lw && !Iw.current && (Iw.current = !0, async function(bb) {
          var wb;
          if ("gift" === (null === (wb = (0, mL.l)()) || void 0 === wb ? void 0 : wb.show)) return void zL(mL.d);
          const Mb = await (0, PV.d)();
          null !== Mb && Mb.ungiftable > 0 && bb() && zL(Mb)
        }((() => gw.current))) : Iw.current = !1
      }), [Vw, Lw]);
      const Ow = (0, bg.s)({
        superRankDaysLeft: pw.superRankDaysLeft,
        openedThisSession: xL || Hb,
        seenNewItems: (0, lw.j)()
      });
      (0, eb.useEffect)((() => {
        (0, lw.x)(Ow)
      }), [Ow]);
      const Uw = "self" === Hw,
        tw = tL(Hb, Hb && Uw && "board" === Bb.kind);
      if (!Hb || !Lb) return null;
      const Cw = Eb > tb && tb <= 700,
        Ew = !Cw && Eb <= 420,
        Bw = "gift" === Hw ? jL(Ub.recipient) : null,
        sw = null !== cb,
        mw = "gift" === Hw ? {
          name: Bw,
          cosmetics: Ub.recipientCosmetics,
          gift: !0
        } : {
          name: Ib && lb.getPlayerName() || null,
          cosmetics: lb.getPlayerCosmetics(),
          gift: !1
        };

      function hw(bb) {
        (0, dV.e)(bb, "gift" === Hw ? Ub.query.trim() : null)
      }

      function zw(bb, wb) {
        (0, Fw.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${wb?"gift":"self"}:${bb}`
        }), wb && (Ub.recordGift(wb.name, bb), Xw(wb))
      }

      function Xw(bb) {
        ! function(bb) {
          try {
            tM.i.setItem(wg, (0, bg.C)(eg(), bb))
          } catch {}
        }({
          name: bb.name,
          cosmetics: bb.cosmetics
        }), mb(XL), Wb((wb => {
          var Mb;
          return {
            name: bb.name,
            seq: (null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.seq) && void 0 !== Mb ? Mb : 0) + 1
          }
        }))
      }
      async function xw(bb) {
        var wb, Mb;
        if (db.current) return;
        if (!Mw) return void hw(bb);
        fb(null), Sb(null);
        const eb = "gift" === Hw ? {
          name: jL(Ub.recipient),
          cosmetics: Ub.recipientCosmetics
        } : null;
        if (eb && !eb.name) return void yb();
        const Hb = "superRank" === bb ? (0, vb.v)(Date.now()).id : (0, iV.c)(bb);
        db.current = !0;
        const pb = await (0, TV.c)(Hb, null !== (wb = null === eb || void 0 === eb ? void 0 : eb.name) && void 0 !== wb ? wb : null);
        if (db.current = !1, !pb) return;
        Yb(bb);
        const Vb = await PV.g.purchase(Hb, null !== (Mb = null === eb || void 0 === eb ? void 0 : eb.name) && void 0 !== Mb ? Mb : null, pb);
        Yb(null), Vb ? fb(Vb) : (zw(bb, eb), eb && (0, kV.c)(Hb, pb, eb.name), eb || (await (0, nV.flushClientAnalyticsEvents)(), (0, uV.refreshWithoutConfirmation)("superRank" === bb ? "/super-rank-welcome" : `/pack-welcome/${bb}`)))
      }
      const jw = pb()("Store", {
        StoreGift: "gift" === Hw,
        StorePortrait: Cw,
        StoreCompact: Ew
      });
      if ("pack" === Bb.kind) {
        const bb = Bb.pack,
          wb = pw.packs.find((wb => wb.pack === bb));
        return (0, Ob.jsx)("div", {
          ref: qb,
          className: "CosmeticShopContainer",
          children: (0, Ob.jsx)(oV.f, {
            pack: bb,
            onBack: () => {
              mb(XL)
            },
            onPurchased: wb => {
              zw(bb, wb ? {
                name: wb,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Hw && Bw && wb && (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsx)(Zg, {
                state: wb.state,
                item: bb,
                price: (Kw = bb, "superRank" === Kw ? (0, vb.v)(Date.now()).price : (0, iV.e)(Kw)),
                busy: sw,
                onAct: () => {
                  xw(bb)
                },
                onNeedRecipient: () => {
                  mb(XL), yb()
                },
                onLogin: () => {
                  hw(bb)
                },
                highlight: Jb === bb
              }), Zb && (0, Ob.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: gb(Zb)
              })]
            }),
            ownedPacks: ew,
            startAsGift: "gift" === Hw,
            initialGiftRecipient: "gift" === Hw ? null !== Bw && void 0 !== Bw ? Bw : Ub.query.trim() : "",
            highlightCta: Jb === bb
          }, bb)
        })
      }
      var Kw;
      return "superRank" === Bb.kind && null !== pw.superRank ? (0, Ob.jsx)("div", {
        ref: qb,
        className: pb()(jw, "StoreDetailView"),
        children: (0, Ob.jsx)(al, {
          state: pw.superRank.state,
          daysLeft: pw.superRankDaysLeft,
          wearer: mw,
          mode: Hw,
          giftName: Bw,
          busy: sw,
          highlight: "superRank" === Jb,
          purchaseError: Zb,
          onBack: () => {
            mb(XL)
          },
          onChooseRecipient: () => {
            mb(XL), yb()
          },
          onAct: () => {
            xw("superRank")
          },
          onLogin: () => {
            hw("superRank")
          }
        })
      }) : (0, Ob.jsxs)("div", {
        ref: qb,
        className: jw,
        onScroll: bb => {
          ub.current = bb.currentTarget.scrollTop
        },
        children: [(0, Ob.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Ob.jsx)(Bg, {
            selfName: Ib ? lb.getPlayerName() : "",
            giftRecipient: Ub,
            suggestionsVersion: null !== (wb = null === Ab || void 0 === Ab ? void 0 : Ab.seq) && void 0 !== wb ? wb : 0,
            pulseSignal: rb,
            disabled: sw || !Ib
          })
        }), Ab && (0, Ob.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Wb(null)
          },
          children: [(0, Ob.jsx)(yV.e, {
            showSignal: Ab.seq
          }), bg.e, " ", gb("store:giftSent", {
            name: Ab.name
          })]
        }, Ab.seq), !Ab && Zb && (0, Ob.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: gb(Zb)
        }), Uw && tw.claimFailed, (0, Ob.jsx)(Gl, {
          layout: pw,
          mountAtOnce: null !== ib.current,
          bundleGift: "gift" === Hw ? {
            recipientName: Bw,
            lookingUp: "pending" === Ub.recipient.status,
            busy: sw,
            onNeedRecipient: yb,
            onSent: bb => {
              (0, Fw.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Xw({
                name: bb,
                cosmetics: Ub.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, bg.u)(ww),
          busy: sw,
          highlightItem: Jb,
          onOpen: function(bb) {
            (0, Fw.reportAnalyticsClick)({
              id: "store.item_open",
              value: bb
            }), mb((0, lw.h)(bb))
          },
          onAct: xw,
          onNeedRecipient: yb,
          onLogin: hw,
          dailyDropTile: Uw && tw.tile,
          rankWearer: mw,
          dealBanner: "self" === Hw && null !== ob && (0, Ob.jsx)(sL, {
            view: ob,
            highlight: Jb,
            scrollSignal: Nb,
            onScrolledIntoView: () => {
              Gb(0)
            }
          })
        }), "gift" !== Hw && !(0, Qb.b)(Date.now()) && (0, Ob.jsx)(Pl, {}), tw.reveal]
      })
    }));
    var rL = Mb(3882),
      RL = Mb(10170),
      DL = Mb(10021),
      cL = Mb(4e3),
      YL = Mb(3781),
      ZL = Mb(3841),
      fL = Mb(3848),
      AL = Mb(3856),
      WL = Mb(3948),
      JL = Mb(3926),
      SL = Mb(3387),
      NL = Mb(3459),
      vL = Mb(3411),
      QL = Mb(2228),
      GL = Mb(3860),
      qL = Mb(3467);

    function aL(bb) {
      let {
        show: wb
      } = bb;
      return wb ? (0, Ob.jsx)(iL, {}) : null
    }

    function iL() {
      const {
        t: bb
      } = (0, Vb.C)(), {
        followsLeader: wb
      } = (0, YL.f)(), {
        loading: Mb,
        friends: Hb,
        requests: lb,
        invites: Ib
      } = (0, Pb.n)(), {
        userContext: Ub
      } = (0, Cb.e)(), [tb, Eb] = (0, eb.useState)(qL.l);
      (0, eb.useEffect)((() => {
        (0, qL.e)()
      }), []);
      const Fb = lb.map((bb => bb.name)),
        {
          state: Bb,
          recentRequesters: sb
        } = (0, JL.o)(),
        mb = new Map([...("loaded" === Bb.status ? Bb.recentPlayers : []).map((bb => [bb.preview.name, bb])), ...sb.map((bb => [bb.name, bb]))]),
        hb = (0, eb.useRef)(null),
        [xb, jb] = (0, eb.useState)(""),
        [Kb, rb] = (0, eb.useState)("Enter"),
        [Rb, Db] = (0, eb.useState)(null);

      function cb() {
        xb && (rb("Loading"), (0, vL.h)(xb, "social_menu").then((bb => {
          if (hb.current) switch (bb.kind) {
            case "sent":
              rb("Success");
              break;
            case "becameFriends":
              rb("BecameFriends");
              break;
            case "failed":
              Db(bb.message), rb("Error")
          }
        })))
      }
      return (0, eb.useEffect)((() => {
        if ("Enter" === Kb || "Loading" === Kb) return;
        const bb = setTimeout((() => {
          hb.current.value = "", jb(""), rb("Enter")
        }), "Success" === Kb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Kb]), (0, Ob.jsx)("div", {
        className: "SocialMenu",
        children: (0, Ob.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Ob.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Ob.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Ob.jsx)(AL.d, {
                label: bb("socialBar:addFriend")
              }), (0, Ob.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Ob.jsxs)("div", {
                  className: pb()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Kb}`]: !0
                  }),
                  children: ["Loading" === Kb && (0, Ob.jsx)(Xb.c, {}), "Success" === Kb && (0, Ob.jsx)(gb.b, {
                    name: "check"
                  }), "BecameFriends" === Kb && (0, Ob.jsx)(Ob.Fragment, {
                    children: bb("socialBar:nowFriends", {
                      playerName: xb
                    })
                  }), "Error" === Kb && Rb && (0, Ob.jsx)(Ob.Fragment, {
                    children: bb(Rb.translationKey, Rb.params)
                  })]
                }), (0, Ob.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Ob.jsx)(zb.d, {
                    className: "PlayerSearchInput",
                    placeholderText: bb("socialBar:enterPlayerName"),
                    domRef: hb,
                    onValueChange: bb => {
                      jb((0, fb.m)(bb)), hb.current.value = (0, fb.m)(bb)
                    },
                    onEnter: () => {
                      xb && (0, Fw.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), cb()
                    }
                  }), (0, Ob.jsxs)(Lb.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      cb()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Ob.jsx)(gb.b, {
                      name: "user-plus"
                    }), " ", bb("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Ob.jsx)(GL.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Ib.length > 0 && (0, Ob.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Ob.jsx)(AL.d, {
                label: bb("socialBar:invites"),
                meta: Ib.length
              }), Ib.map((wb => (0, Ob.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Ob.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Ob.jsx)(SL.b, {
                    invite: wb
                  })
                }), (0, Ob.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Ob.jsx)(SL.d, {
                    invite: wb
                  })
                }), (0, Ob.jsx)(Lb.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, NL.e)(wb)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${wb.destination.kind}`
                  },
                  children: bb("general:join")
                }), (0, Ob.jsx)(tw.d, {
                  tooltipInner: (0, Ob.jsx)(Ob.Fragment, {
                    children: bb("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Ob.jsx)(Lb.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === tb || void 0 === tb ? void 0 : tb.kind) && tb.inviteId === wb.id,
                    onClick: () => {
                      Pb.e.declineInvite(wb.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${wb.destination.kind}`
                    },
                    children: (0, Ob.jsx)(gb.b, {
                      name: "xmark"
                    })
                  })
                })]
              }, wb.id)))]
            }), (0, Ob.jsxs)("div", {
              className: pb()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Mb && 0 === lb.length
              }),
              children: [(0, Ob.jsx)(AL.d, {
                label: (0, Ob.jsxs)(Ob.Fragment, {
                  children: [(0, Ob.jsx)(gb.b, {
                    name: QL.g
                  }), " ", bb("socialBar:requests")]
                }),
                meta: (0, Ob.jsxs)(Ob.Fragment, {
                  children: [lb.length, lb.length === Cw.q && (0, Ob.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), Mb && (0, Ob.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Ob.jsx)(Xb.c, {})
              }), !Mb && 0 === lb.length && (0, Ob.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriendRequests")
              }), !Mb && lb.length > 0 && (0, Ob.jsx)("div", {
                className: "PlayerRows",
                children: (0, Ob.jsx)(Ep.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [lb],
                  children: lb.map(((wb, Mb) => {
                    const eb = mb.get(wb.name);
                    return (0, Ob.jsxs)(fL.d, {
                      playerSocialPreview: wb,
                      zIndex: lb.length - Mb,
                      padDefaultFocus: (0, qL.j)(tb, wb.name, Mb),
                      status: eb && (0, Ob.jsx)(WL.d, {
                        gameNameWithVariation: eb.gameNameWithVariation,
                        isPrivateLobby: eb.isPrivateLobby
                      }),
                      children: [(0, Ob.jsx)(tw.d, {
                        tooltipInner: (0, Ob.jsx)(Ob.Fragment, {
                          children: bb("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Ob.jsx)(Lb.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Eb((0, qL.f)(Fb, Mb)), (0, vL.e)(wb.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Ob.jsx)(gb.b, {
                            name: "check"
                          })
                        })
                      }), (0, Ob.jsx)(tw.d, {
                        tooltipInner: (0, Ob.jsx)(Ob.Fragment, {
                          children: bb("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Ob.jsx)(Lb.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Eb((0, qL.f)(Fb, Mb)), (0, vL.e)(wb.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Ob.jsx)(gb.b, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${wb.name}_${wb.isError}`)
                  }))
                })
              })]
            }), (0, Ob.jsx)(WL.i, {})]
          }), (0, Ob.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Ob.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Ob.jsx)(AL.d, {
                label: bb("socialBar:party")
              }), (0, Ob.jsx)(ZL.e, {})]
            }), (0, Ob.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Ob.jsx)(AL.d, {
                label: (0, Ob.jsxs)(Ob.Fragment, {
                  children: [(0, Ob.jsx)(gb.b, {
                    name: QL.c
                  }), " ", bb("socialBar:friends")]
                }),
                meta: (0, Ob.jsxs)(Ob.Fragment, {
                  children: [Hb.length, Hb.length >= (0, Cw.c)(Ub.getPlayerRanks()) && (0, Ob.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), Mb && (0, Ob.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Ob.jsx)(Xb.c, {})
              }), !Mb && 0 === Hb.length && (0, Ob.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriends")
              }), !Mb && Hb.length > 0 && (0, Ob.jsx)("div", {
                className: "PlayerRows",
                children: (0, Ob.jsx)(Ep.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Hb],
                  children: Hb.map(((bb, Mb) => (0, Ob.jsx)(fL.d, {
                    playerSocialPreview: bb,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: bb => {
                      Pb.e.removeFriendFromState(bb)
                    },
                    zIndex: Hb.length - Mb,
                    children: (0, Ob.jsx)(fL.b, {
                      friend: bb,
                      followsLeader: wb,
                      analyticsSurface: "social_menu"
                    })
                  }, `${bb.name}_${bb.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var uL = Mb(3696),
      dL = Mb(5019),
      PL = Mb(2040),
      nL = Mb(5011),
      yL = Mb(5026);

    function oL(bb) {
      let {
        count: wb,
        claiming: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return 0 === wb ? null : (0, Ob.jsx)(Lb.p, {
        className: "SeasonPassClaimAllButton",
        loading: Mb,
        onClick: () => {
          dL.f.claimAll().catch((bb => {
            console.error("Failed to claim all season pass rewards", bb)
          }))
        },
        children: eb("seasonPass:claimAll", {
          count: wb
        })
      })
    }

    function TL(bb) {
      let {
        view: wb,
        claiming: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)(), {
        userContext: Hb
      } = (0, Cb.e)(), {
        config: pb,
        state: lb,
        tier: Lb,
        xpIntoTier: Ib,
        xpForNextTier: Ub
      } = wb, tb = Date.now(), Eb = (0, yL.j)(wb, tb), Fb = Lb >= pb.tierCount, Bb = Eb && !Fb && Ub > 0, sb = Ub > 0 && !Fb ? Math.min(100, Ib / Ub * 100) : 100, mb = lb.xpToday >= pb.maxXpPerDay, hb = null !== wb.xpBoost && wb.xpBoost.endsAtMs > tb && !mb ? wb.xpBoost : null;
      return (0, Ob.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, Ob.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, Ob.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: eb("seasonPass:title", {
              season: lb.seasonNumber
            })
          })
        }), (0, Ob.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, Ob.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, Ob.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: eb("seasonPass:tier"),
              "aria-label": `${eb("seasonPass:tier")} ${Lb}`,
              children: Lb
            }), (0, Ob.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(sb),
              children: [(0, Ob.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${sb}%`
                }
              }), (0, Ob.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [Fb && eb("seasonPass:passComplete"), Bb && eb("seasonPass:xpProgress", {
                  xp: Ib,
                  xpForNextTier: Ub
                })]
              })]
            }), Bb && (0, Ob.jsxs)(Ob.Fragment, {
              children: [(0, Ob.jsx)(gb.b, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, Ob.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: Lb + 1
              })]
            })]
          }), (0, Ob.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, Ob.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, Ob.jsx)(gb.b, {
                name: "hourglass"
              }), " ", Eb ? eb("seasonPass:endsIn", {
                time: (0, nL.c)((wb.endsAtMs - tb) / 6e4)
              }) : (0, Ng.b)(wb.claimEndsAtMs, eb, tb)]
            }), Eb && !Fb && (0, Ob.jsx)("span", {
              className: mb ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: mb ? eb("seasonPass:dailyCapReached") : eb("seasonPass:dailyXp", {
                xp: lb.xpToday,
                cap: pb.maxXpPerDay
              })
            }), Eb && !Fb && hb && (0, Ob.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, Ob.jsx)(gb.b, {
                name: "angles-up"
              }), " ", eb("seasonPass:xpBoostActive", {
                multiplier: hb.multiplier,
                time: (0, nL.c)(Math.ceil((hb.endsAtMs - tb) / 6e4))
              })]
            }), Eb && !Fb && !mb && !hb && (0, Ob.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: eb("seasonPass:playToEarn")
            }), Hb.type === PL.d.ANONYMOUS && (0, Ob.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: eb("seasonPass:logInToKeep")
            })]
          })]
        }), (0, Ob.jsx)(oL, {
          count: wb.claimable.length,
          claiming: Mb
        })]
      })
    }
    var kL = Mb(4443),
      bI = Mb(4446);

    function wI(bb) {
      return null !== (0, Ng.r)(bb) || null !== (0, Ng.n)(bb)
    }
    let MI = null;

    function eI() {
      var bb;
      null === (bb = MI) || void 0 === bb || bb.tearDownNotification()
    }

    function HI(bb) {
      let {
        reward: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)(), {
        userContext: eb
      } = (0, Cb.e)(), Hb = (0, Ng.r)(wb);
      return (0, Ob.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, Ob.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, Ng.g)(wb, Mb)
        }), null !== Hb && (0, Ob.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, Ob.jsx)(kL.d, {
            profileEffect: Hb,
            name: eb.getPlayerName(),
            cosmetics: eb.getPlayerCosmetics()
          })
        }), null === Hb && (0, Ob.jsx)(pI, {
          reward: wb
        })]
      })
    }

    function pI(bb) {
      let {
        reward: wb
      } = bb;
      const {
        userContext: Mb
      } = (0, Cb.e)(), Hb = (0, eb.useRef)(null), {
        previewEmote: pb,
        playEmote: Vb
      } = (0, bI.e)(), gb = (0, eb.useMemo)((() => (0, Ng.n)(wb)), [wb]), lb = gb.emote;
      return (0, Ob.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, Ob.jsx)(eb.Suspense, {
          fallback: (0, Ob.jsx)(Xb.c, {}),
          children: (0, Ob.jsx)(hg.e, {
            ref: Hb,
            framing: "store",
            forcedCosmetics: gb.cosmetics,
            Og: pb.id,
            emotePlaySeq: pb.seq,
            onReady: () => {
              var bb, wb;
              null === (bb = Hb.current) || void 0 === bb || bb.resetCamera(), null === (wb = Hb.current) || void 0 === wb || wb.setAllCosmetics(Mb.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== lb && Vb(lb)
            }
          })
        })
      })
    }

    function VI(bb) {
      let {
        waitingCount: wb
      } = bb;
      const {
        t: Mb
      } = (0, Vb.C)();
      return (0, ab.usePurchasesAllowed)() ? (0, Ob.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [wb > 0 && (0, Ob.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === wb ? Mb("seasonPass:hyperRewardWaiting") : Mb("seasonPass:hyperRewardsWaiting", {
            count: wb
          })
        }), (0, Ob.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, Ob.jsxs)(Lb.y, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, lw.r)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, Ob.jsx)(vb.c, {}), " ", Mb("homePage:getHyperRank")]
          }), wb > 0 && (0, Ob.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: wb
          })]
        })]
      }) : null
    }
    var gI = Mb(35394);

    function lI(bb) {
      let {
        stub: wb,
        name: Mb
      } = bb;
      const {
        t: eb
      } = (0, Vb.C)();
      return (0, Ob.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, Ob.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: wb
        }), (0, Ob.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, Ob.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: eb("seasonPass:trackTicketPass")
          }), (0, Ob.jsx)("span", {
            className: "SeasonPassTicketName",
            children: Mb
          })]
        })]
      })
    }

    function LI(bb) {
      var wb, Mb;
      let {
        view: Hb,
        claimingKeys: pb,
        hyperWaitingCount: lb,
        onClaim: Lb
      } = bb;
      const {
        t: Ib
      } = (0, Vb.C)(), Ub = (0, eb.useRef)(null), {
        config: tb,
        tier: Cb,
        xpIntoTier: Eb,
        xpForNextTier: Fb,
        state: Bb
      } = Hb, sb = (0, yL.j)(Hb), mb = (0, eb.useRef)(!1), hb = null !== (wb = null === (Mb = Hb.claimable[0]) || void 0 === Mb ? void 0 : Mb.tier) && void 0 !== wb ? wb : Math.min(Cb + 1, tb.tierCount);
      (0, eb.useLayoutEffect)((() => {
        if (mb.current) return;
        const bb = Ub.current,
          wb = bb.querySelector(`[data-tier="${hb}"]`).getBoundingClientRect(),
          Mb = bb.getBoundingClientRect();
        bb.scrollLeft += wb.left - Mb.left - .3 * bb.clientWidth, bb.scrollTop += wb.top - Mb.top - .3 * bb.clientHeight
      }), [hb]), (0, eb.useEffect)((() => {
        const bb = Ub.current;

        function wb(wb) {
          mb.current = !0, Math.abs(wb.deltaY) <= Math.abs(wb.deltaX) || bb.scrollWidth <= bb.clientWidth || (wb.preventDefault(), bb.scrollLeft += wb.deltaY)
        }
        return bb.addEventListener("wheel", wb, {
          passive: !1
        }), () => {
          bb.removeEventListener("wheel", wb)
        }
      }), []);
      const zb = Fb > 0 ? Eb / Fb : 1;
      return (0, Ob.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, Ob.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, Ob.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, Ob.jsx)(lI, {
              stub: (0, Ob.jsx)(vb.c, {}),
              name: Ib("seasonPass:hyperTrack")
            }), !Bb.hasHyperRank && (0, Ob.jsx)(VI, {
              waitingCount: lb
            })]
          }), (0, Ob.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, Ob.jsx)(lI, {
              stub: (0, Ob.jsx)(gb.b, {
                name: "star"
              }),
              name: Ib("seasonPass:freeTrack")
            }), (0, Ob.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: Ib("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, Ob.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: Ub,
          onPointerDown: () => {
            mb.current = !0
          },
          children: (0, Ob.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: tb.tiers.map((bb => {
              const wb = bb.tier,
                Mb = function(bb, wb, Mb) {
                  if (bb <= wb) return "reached";
                  return Mb && bb === wb + 1 ? "earning" : "locked"
                }(wb, Cb, sb),
                eb = "earning" === Mb;
              return (0, Ob.jsx)(II, {
                tierRewards: bb,
                nodeState: Mb,
                progress: eb ? zb : 0,
                freeState: Hb.tileState({
                  tier: wb,
                  track: "free"
                }),
                hyperState: Hb.tileState({
                  tier: wb,
                  track: "hyper"
                }),
                freeClaiming: pb.has((0, yL.k)({
                  tier: wb,
                  track: "free"
                })),
                hyperClaiming: pb.has((0, yL.k)({
                  tier: wb,
                  track: "hyper"
                })),
                hasHyperRank: Bb.hasHyperRank,
                onClaim: Lb
              }, wb)
            }))
          })
        })]
      })
    }
    const II = (0, eb.memo)((function(bb) {
      let {
        tierRewards: wb,
        nodeState: Mb,
        progress: eb,
        freeState: Hb,
        hyperState: Vb,
        freeClaiming: gb,
        hyperClaiming: lb,
        hasHyperRank: Lb,
        onClaim: Ib
      } = bb;
      const {
        tier: Ub
      } = wb;
      return (0, Ob.jsxs)("div", {
        className: pb()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== Mb
        }),
        "data-tier": Ub,
        children: [(0, Ob.jsx)(OI, {
          tier: Ub,
          track: "hyper",
          reward: wb.hyper,
          tileState: Vb,
          claiming: lb,
          padlock: !Lb && "claimed" !== Vb,
          onClaim: Ib
        }), (0, Ob.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, Ob.jsx)("span", {
            className: pb()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === Mb
            }),
            children: "earning" === Mb && (0, Ob.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * eb + "%"
              }
            })
          }), (0, Ob.jsx)("span", {
            className: pb()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === Mb
            })
          }), (0, Ob.jsx)(gI.d, {
            tier: Ub,
            state: Mb,
            progress: eb
          })]
        }), (0, Ob.jsx)(OI, {
          tier: Ub,
          track: "free",
          reward: wb.free,
          tileState: Hb,
          claiming: gb,
          padlock: !1,
          onClaim: Ib
        })]
      })
    }));

    function OI(bb) {
      let {
        tier: wb,
        track: Mb,
        reward: eb,
        tileState: Hb,
        claiming: pb,
        padlock: Vb,
        onClaim: gb
      } = bb;
      return eb ? (0, Ob.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${Mb}`,
        children: (0, Ob.jsx)(ig.f, {
          reward: eb,
          tileState: Hb,
          track: Mb,
          size: "large",
          onClaim: () => {
            gb({
              tier: wb,
              track: Mb
            })
          },
          claiming: pb,
          padlock: Vb,
          onPreview: wI(eb) ? () => {
            ! function(bb) {
              const wb = Hw.NotificationProvider.showCustomPopup({
                body: (0, Ob.jsx)(HI, {
                  reward: bb
                })
              });
              MI = wb, wb.getResult().finally((() => {
                MI === wb && (MI = null)
              }))
            }(eb)
          } : void 0
        })
      }) : (0, Ob.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${Mb}`
      })
    }

    function UI(bb) {
      let {
        show: wb
      } = bb;
      return wb ? (0, Ob.jsx)(tI, {}) : null
    }

    function tI() {
      const {
        t: bb
      } = (0, Vb.C)(), wb = (0, dL.h)();
      return (0, eb.useEffect)((() => eI), []), (0, Ob.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === wb.status && (0, Ob.jsx)(Xb.c, {}), "error" === wb.status && (0, Ob.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, Ob.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: bb("seasonPass:errorLoad")
          }), (0, Ob.jsx)(Lb.f, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              dL.f.retry()
            },
            children: bb("seasonPass:retry")
          })]
        }), "noSeason" === wb.status && (0, Ob.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, Ob.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, Ng.d)(bb)
          })
        }), "loaded" === wb.status && (0, Ob.jsx)(CI, {
          view: wb.view,
          claimingKeys: wb.claimingKeys
        })]
      })
    }

    function CI(bb) {
      let {
        view: wb,
        claimingKeys: Mb
      } = bb;
      const eb = wb.config.tiers.filter((bb => "needsHyper" === wb.tileState({
          tier: bb.tier,
          track: "hyper"
        }))).length,
        Hb = Mb.size > 0;
      return (0, Ob.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, Ob.jsx)(TL, {
          view: wb,
          claiming: Hb
        }), (0, Ob.jsx)(LI, {
          view: wb,
          claimingKeys: Mb,
          hyperWaitingCount: eb,
          onClaim: EI
        }), (0, Ob.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, Ob.jsx)(oL, {
            count: wb.claimable.length,
            claiming: Hb
          }), !wb.state.hasHyperRank && (0, Ob.jsx)(VI, {
            waitingCount: eb
          })]
        })]
      })
    }

    function EI(bb) {
      dL.f.claim(bb).catch((bb => {
        console.error("Failed to claim season pass reward", bb)
      }))
    }
    var FI = Mb(5601);
    var BI = Mb(4200);
    const sI = bb => {
        let {
          action: wb,
          padAction: Mb
        } = bb;
        const {
          isTouchScreen: eb
        } = (0, jb.o)(["isTouchScreen"]), Hb = (0, ie.z)();
        return eb && !Hb ? null : (0, Ob.jsx)(Se.e, {
          className: "EverythingMenuTabKey",
          noaAction: wb,
          padHidesKey: !0,
          padMenuShortcut: Mb
        })
      },
      mI = (0, eb.memo)((function() {
        const {
          t: bb
        } = (0, Vb.C)(), {
          gameState: wb,
          openEverythingMenuName: Mb,
          crosshairGameView: Hb,
          everythingMenuOverLoadingScreen: gb
        } = (0, jb.o)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: lb
        } = (0, Cb.e)(), Ib = (0, LH.k)(Date.now()), Ub = (0, ab.usePurchasesAllowed)(), tb = (0, lw.L)(), {
          view: Eb
        } = (0, IM.D)(), Fb = "dot" === tb || null === tb && "ready" === (null === Eb || void 0 === Eb ? void 0 : Eb.kind), sb = (bb, wb) => (0, Ob.jsx)(sI, {
          action: bb,
          padAction: wb
        }), [mb, hb] = (0, eb.useState)(null), zb = (0, eb.useRef)(null), Xb = (0, eb.useRef)(null);
        (0, eb.useEffect)((() => {
          var bb;
          const wb = null === (bb = Xb.current) || void 0 === bb ? void 0 : bb.querySelector(".EverythingMenuTabActive");
          null === wb || void 0 === wb || wb.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [Mb]);
        const xb = {
            ..."inGame" === wb ? {} : (0, Lb.bb)({
              focusOnClick: !1
            }),
            ...BH.f
          },
          Kb = bb => {
            const wb = (0, sH.e)((wb => {
              (0, Lb.$)(wb.currentTarget), jb.c.set({
                openEverythingMenuName: bb
              })
            }), "pointerup");
            return {
              ...xb,
              onPointerDown: bb => {
                xb.onPointerDown(bb), wb.onPointerDown(bb)
              },
              onPointerUp: bb => {
                xb.onPointerUp(bb), wb.onPointerUp(bb)
              },
              onClick: wb.onClick
            }
          },
          rb = null !== Mb;
        (0, eb.useEffect)((() => {
          Mb === Zw.l.CUSTOMISATION ? (0, Fw.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, sg.d)()
          }) : null === Mb && jb.c.get("everythingMenuOverLoadingScreen") && jb.c.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [Mb]);
        const Db = Mb !== Zw.l.COSMETIC_SHOP && !Hb;
        async function cb() {
          await async function() {
            if (!mb) return;
            await mb(), hb(null)
          }(), jb.c.set({
            openEverythingMenuName: null
          })
        }
        const Yb = (0, eb.useRef)(null),
          Zb = (0, eb.useCallback)((() => null !== Yb.current && (0, DL.e)(Yb.current)), []);

        function fb() {
          Zb() || cb()
        }(0, eb.useEffect)((() => (0, SV.v)(Zb)), [Zb]);
        const Ab = (0, eb.useMemo)((() => "inGame" === wb ? {
            text: bb("settingsMenu:exitGame"),
            onClick: () => {
              (0, RL.d)()
            }
          } : (0, Rb.isDiscordClient)() ? {
            text: bb("settingsMenu:exitGame"),
            onClick: () => {
              Yw.i.discordActivity().then((bb => {
                bb.exit("User exited the game")
              }))
            }
          } : null), [wb, bb]),
          Wb = rb && !Hb,
          Jb = "inGame" !== wb,
          Sb = Wb && Jb;
        (0, eb.useLayoutEffect)((() => {
          if (Sb) return jb.c.set({
            menuCoversPage: !0
          }), () => {
            jb.c.set({
              menuCoversPage: !1
            })
          }
        }), [Sb]);
        const Nb = (0, eb.useRef)(null);
        ! function(bb, wb) {
          (0, eb.useEffect)((() => {
            var Mb;
            const eb = (0, FI.g)();
            if (!wb || null === eb || !(0, FI.d)({
                site: Rb.siteUsed,
                isMobileApp: (0, Bb.isMobileApp)(),
                isTouchScreen: jb.c.get("isTouchScreen")
              })) return;
            const Hb = null === (Mb = bb.current) || void 0 === Mb ? void 0 : Mb.querySelector(".EverythingMenuBackButton");
            return Hb ? eb(Hb) : void 0
          }), [bb, wb])
        }(Nb, Wb && !(0, SV.j)(Mb) && "inGame" === wb);
        const vb = (0, Ob.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: fb,
          children: (0, Ob.jsx)(Lb.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Ob.jsx)(mH.c, {
          showing: rb,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Mb === Zw.l.SHOP,
          doGameplayStartStopOnShow: "inGame" === wb,
          children: (0, Ob.jsx)(zH.e, {
            className: pb()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: gb
            }),
            show: Wb,
            children: (0, Ob.jsx)(hH.e, {
              close: fb,
              togglePointerLock: !1,
              children: (0, Ob.jsxs)("div", {
                className: "EverythingMenu",
                ref: Nb,
                children: [!(0, SV.j)(Mb) && (0, Ob.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Ob.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Ab && (0, Ob.jsx)(Lb.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Ab.onClick()
                      },
                      children: Ab.text
                    }), rb && Ub && (0, Ob.jsx)("div", {
                      ...xb,
                      className: "EverythingMenuWallet",
                      title: bb("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, lw.r)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Ob.jsx)(rL.g, {})
                    })]
                  }), (0, Ob.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: Xb,
                    "data-pad-tabs": "1",
                    children: [(0, Ob.jsxs)("div", {
                      ...Kb(Zw.l.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.SETTINGS ? "true" : void 0,
                      className: pb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Mb === Zw.l.SETTINGS
                      }),
                      children: [bb("general:settings"), sb("OpenSettings", "pause")]
                    }), (0, Ob.jsxs)("div", {
                      ...Kb(Zw.l.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.CUSTOMISATION ? "true" : void 0,
                      className: pb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Mb === Zw.l.CUSTOMISATION
                      }),
                      children: [bb("general:player"), sb("OpenCharacterCustomization")]
                    }), Bb.featureFlags.useSocialFeatures && (0, Ob.jsxs)("div", {
                      ...Kb(Zw.l.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.SOCIAL ? "true" : void 0,
                      className: pb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Mb === Zw.l.SOCIAL
                      }),
                      ...(0, Fw.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Mb === Zw.l.SOCIAL),
                      children: [bb("socialBar:social"), (0, Ob.jsx)(uL.c, {})]
                    }), Ib && (0, Ob.jsx)("div", {
                      ...Kb(Zw.l.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.SEASON_PASS ? "true" : void 0,
                      className: pb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Mb === Zw.l.SEASON_PASS
                      }),
                      children: bb("seasonPass:title", {
                        season: Ib.seasonNumber
                      })
                    }), (0, IM.s)(Eb) && (0, Ob.jsxs)("div", {
                      ...Kb(Zw.l.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.COSMETIC_SHOP ? "true" : void 0,
                      className: pb()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Mb === Zw.l.COSMETIC_SHOP
                      }),
                      children: [(0, Ob.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: bb("store:title")
                      }), "new" === tb && (0, Ob.jsx)(Rl, {}), Fb && (0, Ob.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === wb && (0, Ob.jsxs)("div", {
                      ...Kb(Zw.l.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": Mb === Zw.l.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: pb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Mb === Zw.l.LOBBY_LEADERBOARD
                      }),
                      children: [bb("general:lobby"), sb("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Ob.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: vb
                  })]
                }), (0, SV.j)(Mb) && vb, (0, Ob.jsxs)("div", {
                  ref: Yb,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": Jb ? "1" : "0.85"
                  },
                  children: [(0, Ob.jsx)(gH, {
                    show: Mb === Zw.l.SETTINGS,
                    setBeforeResumeCallback: hb
                  }), (0, Ob.jsx)(CH, {
                    show: Mb === Zw.l.CUSTOMISATION
                  }), (0, Ob.jsx)(eb.Suspense, {
                    fallback: null,
                    children: (0, Ob.jsx)(DV, {
                      show: Mb === Zw.l.SHOP
                    })
                  }), (0, Ob.jsx)(GV, {
                    show: Mb === Zw.l.LOBBY_LEADERBOARD
                  }), Ub && (0, Ob.jsx)(KL, {
                    show: Mb === Zw.l.COSMETIC_SHOP
                  }), !Ub && (0, Ob.jsx)(CL, {
                    show: Mb === Zw.l.COSMETIC_SHOP
                  }), (0, Ob.jsx)(aL, {
                    show: Mb === Zw.l.SOCIAL
                  }), (0, Ob.jsx)(UI, {
                    show: Mb === Zw.l.SEASON_PASS
                  })]
                }), !(0, Bb.isMobileApp)() && (0, BI.k)() && (0, XH.e)(lb.getPlayerRanks()) && (0, Ob.jsx)(zH.e, {
                  ref: zb,
                  className: "EverythingMenuBannerDiv",
                  show: Db,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Ob.jsx)(cL.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: zb
                    },
                    showing: rb && Db,
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
  35327: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(382),
      Hb = Mb(35329);

    function pb(bb, wb, Mb) {
      const pb = Object.entries(wb).sort(((bb, wb) => wb[1] - bb[1])),
        Vb = (0, eb.Cb)(bb);
      Vb.push(bb ? "\n\n" : "\n");
      for (const [Hb, Cb] of pb) {
        var gb, lb, Lb;
        const bb = null !== (gb = null === Mb || void 0 === Mb || null === (lb = Mb[Hb]) || void 0 === lb ? void 0 : lb.icon) && void 0 !== gb ? gb : `${Hb} Enchantment`;
        Vb.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Vb.push({
          str: `${Hb} ${null!==(Lb=(0,eb.Y)(Cb))&&void 0!==Lb?Lb:Cb}\n`
        })
      }
      Vb.push({
        str: "\n"
      });
      for (const [eb, Cb] of pb) {
        var Ib, Ob, Ub, tb;
        const bb = null !== (Ib = null === Mb || void 0 === Mb || null === (Ob = Mb[eb]) || void 0 === Ob ? void 0 : Ob.icon) && void 0 !== Ib ? Ib : `${eb} Enchantment`,
          wb = null !== (Ub = null === Mb || void 0 === Mb || null === (tb = Mb[eb]) || void 0 === tb ? void 0 : tb.description) && void 0 !== Ub ? Ub : (0, Hb.m)(eb);
        Vb.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Vb.push({
          str: wb,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Vb.push({
          str: "\n"
        })
      }
      return Vb
    }
  },
  35331: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ob,
      b: () => Lb,
      f: () => sb,
      j: () => Fb,
      m: () => lb,
      q: () => Bb,
      t: () => Ib,
      w: () => Ub,
      x: () => Eb
    });
    var eb = Mb(366),
      Hb = Mb(661),
      pb = Mb(382),
      Vb = Mb(3052),
      gb = Mb(35327);

    function lb(bb, wb) {
      var Mb;
      let {
        player: eb,
        chestOrCreative: Hb
      } = bb;
      var pb;
      return wb < eb.length ? null !== (pb = eb[wb]) && void 0 !== pb ? pb : null : null !== (Mb = Hb[wb - eb.length]) && void 0 !== Mb ? Mb : null
    }

    function Lb(bb) {
      var wb;
      return null !== (wb = bb.amount) && void 0 !== wb ? wb : 0
    }

    function Ib(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Ob(bb) {
      return !!bb.shiftKey
    }

    function Ub(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const tb = new Set,
      Cb = 50;

    function Eb(bb, wb) {
      var Mb;
      const eb = null === (Mb = bb[wb]) || void 0 === Mb ? void 0 : Mb.displayName;
      return (0, Hb.K)(eb) ? "string" !== typeof wb ? "" : (!tb.has(wb) && tb.size < Cb && (tb.add(wb), console.warn(`No item called "${wb}", so its hover shows the name as given`)), wb) : eb
    }

    function Fb(bb, wb, Mb) {
      var lb, Lb, Ib, Ob, Ub, tb, Cb, Fb, Bb, sb, mb, hb, zb, Xb;
      const xb = bb.attributes,
        jb = null !== (lb = null === (Lb = wb[bb.name]) || void 0 === Lb ? void 0 : Lb.rootName) && void 0 !== lb ? lb : bb.name,
        Kb = null !== (Ib = null !== (Ob = xb.customDisplayName) && void 0 !== Ob ? Ob : null === (Ub = wb[bb.name]) || void 0 === Ub ? void 0 : Ub.displayName) && void 0 !== Ib ? Ib : Eb(wb, jb);
      let rb = Kb;
      const Rb = null === (tb = xb.customAttributes) || void 0 === tb ? void 0 : tb.enchantmentTier;
      Rb && (rb = (0, pb.Cb)(Kb, {
        colour: pb.xb[Rb]
      }));
      const Db = null !== (Cb = null !== (Fb = null !== (Bb = function(bb, wb) {
        var Mb;
        if (void 0 === bb || null !== (Mb = wb.customAttributes) && void 0 !== Mb && Mb.author) return bb;
        const Hb = (0, eb.gc)(bb);
        return Hb.every((bb => "string" === typeof bb)) ? bb : Hb.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(xb.customDescription, xb)) && void 0 !== Bb ? Bb : null === (sb = wb[bb.name]) || void 0 === sb ? void 0 : sb.description) && void 0 !== Fb ? Fb : null === (mb = wb[jb]) || void 0 === mb ? void 0 : mb.description) && void 0 !== Cb ? Cb : "";
      let cb = Db;
      if (null !== (hb = xb.customAttributes) && void 0 !== hb && hb.enchantments) cb = (0, gb.d)(Db, xb.customAttributes.enchantments, xb.customAttributes.enchantmentData);
      else if (Mb[jb]) cb = (0, pb.Cb)(Db), cb.push({
        str: "\n"
      }), cb.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (zb = xb.customAttributes) && void 0 !== zb && zb.mobSettings) {
        var Yb, Zb;
        const bb = xb.customAttributes.mobSettings;
        var fb, Ab;
        if (cb = [], (0, Hb.K)(xb.customAttributes.health) || (cb.push({
            str: "\n"
          }), cb.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), cb.push({
            str: " "
          }), cb.push({
            str: xb.customAttributes.health.toString()
          }), (0, Hb.K)(bb.maxHealth) || (cb.push({
            str: "/"
          }), cb.push({
            str: bb.maxHealth.toString()
          }))), !(0, Hb.K)(bb.attackDamage) && bb.attackDamage > 0 && (cb.push({
            str: "\n"
          }), cb.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), cb.push({
            str: " "
          }), cb.push({
            str: bb.attackDamage.toString()
          })), !(0, Hb.K)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (cb.push({
            str: "\n"
          }), cb.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), cb.push({
            str: " "
          }), cb.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Hb.K)(bb.baseRunningSpeed) || (cb.push({
            str: "\n"
          }), cb.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), cb.push({
            str: " "
          }), cb.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) cb.push({
          str: "\n"
        }), cb.push({
          str: {
            translationKey: "general:has"
          }
        }), cb.push({
          str: " "
        }), cb.push({
          icon: null !== (fb = null === (Ab = bb.tameInfo) || void 0 === Ab ? void 0 : Ab.saddleItemName) && void 0 !== fb ? fb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (cb.push({
            str: "\n"
          }), cb.push({
            str: "\n"
          }), bb.petInfo && null !== (Yb = bb.tameInfo) && void 0 !== Yb && Yb.supportsFriendship) {
          const wb = Vb.d.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of wb) cb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          cb.push({
            str: "\n"
          });
          const Mb = Vb.d.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Vb.d.hungerLevelIcons[Mb]) cb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          cb.push({
            str: " "
          }), cb.push({
            str: Vb.d.hungerLevelTranslations[Mb],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (Zb = bb.tameInfo) && void 0 !== Zb && Zb.supportsFriendship) {
          var Wb, Jb;
          let wb = null !== (Wb = bb.tameInfo.likedFoods) && void 0 !== Wb ? Wb : [];
          cb.push({
            str: "\n"
          }), cb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Vb.d.feedTextColours[Vb.d.MobFoodType.Superliked]
            }
          }), cb.push({
            str: " "
          }), null !== (Jb = bb.petInfo) && void 0 !== Jb && Jb.superlikedFoodKnown ? (cb.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), wb = wb.filter((wb => wb !== bb.petInfo.superlikedFood))) : cb.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), cb.push({
            str: "\n"
          }), cb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Vb.d.feedTextColours[Vb.d.MobFoodType.Liked]
            }
          }), cb.push({
            str: " "
          });
          for (const bb of wb) cb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          cb.push({
            str: "\n"
          }), cb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Vb.d.feedTextColours[Vb.d.MobFoodType.Neutral]
            }
          }), cb.push({
            str: " "
          });
          for (const Mb of null !== (Sb = bb.tameInfo.neutralFoods) && void 0 !== Sb ? Sb : []) {
            var Sb;
            cb.push({
              icon: Mb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          cb.push({
            str: "\n"
          }), cb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Vb.d.feedTextColours[Vb.d.MobFoodType.Disliked]
            }
          }), cb.push({
            str: " "
          });
          for (const Mb of null !== (Nb = bb.tameInfo.dislikedFoods) && void 0 !== Nb ? Nb : []) {
            var Nb;
            cb.push({
              icon: Mb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        cb.length > 0 ? (cb.shift(), cb.unshift(...(0, pb.Cb)(Db))) : cb = (0, pb.Cb)(Db)
      }
      return {
        name: rb,
        desc: cb,
        fontStyle: null !== (Xb = xb.customAttributes) && void 0 !== Xb && Xb.author ? "italic" : "normal"
      }
    }

    function Bb(bb, wb, Mb, eb) {
      const Hb = lb(bb, Mb),
        pb = lb(bb, eb);
      if (!Hb) return !1;
      const Vb = wb[Hb.name].armourReduction,
        gb = wb[pb.name].armourReduction;
      if (gb === Vb) {
        var Lb, Ib, Ob, Ub;
        const bb = null !== (Lb = null === (Ib = Hb.attributes.customAttributes) || void 0 === Ib ? void 0 : Ib.enchantmentTier) && void 0 !== Lb ? Lb : "Tier 0",
          wb = null !== (Ob = null === (Ub = pb.attributes.customAttributes) || void 0 === Ub ? void 0 : Ub.enchantmentTier) && void 0 !== Ob ? Ob : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(wb.replace("Tier ", ""))
      }
      return Vb > gb
    }

    function sb(bb) {
      let wb;
      if ("number" === typeof bb) {
        const Mb = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!Mb) return null;
        wb = Mb.getBoundingClientRect()
      } else wb = bb.getBoundingClientRect();
      return {
        x: wb.left + wb.width / 2,
        y: wb.top + wb.height / 2
      }
    }
  },
  35232: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      g: () => Bb,
      i: () => sb
    });
    var eb = Mb(64),
      Hb = Mb(5185),
      pb = Mb(1259),
      Vb = Mb(3877),
      gb = Mb(1616),
      lb = Mb(1364);

    function Lb(bb) {
      let {
        text: wb
      } = bb;
      const {
        t: Mb
      } = (0, pb.C)(), [eb, Lb] = (0, Vb.k)();
      return (0, lb.jsxs)("div", {
        className: "CopyTextRow",
        children: [(0, lb.jsx)("div", {
          className: "CopyTextRowText",
          children: wb
        }), (0, lb.jsx)(gb.f, {
          className: "CopyTextRowButton",
          onClick: () => {
            (0, Hb.d)(wb).catch((bb => {
              console.error("Failed to copy text:", bb)
            })), Lb()
          },
          disabled: eb,
          children: Mb(eb ? "general:copied" : "general:copy")
        })]
      })
    }
    var Ib = Mb(1436),
      Ob = Mb(5384),
      Ub = Mb(3391),
      tb = Mb(110),
      Cb = Mb(2183),
      Eb = Mb(1468);

    function Fb(bb) {
      let {
        show: wb,
        onClose: Mb
      } = bb;
      const {
        requestedGameNameWithVariation: eb,
        lobbyName: Hb,
        shownLobbyName: pb
      } = (0, Cb.h)("connectedGame"), Vb = (0, Ub.b)(eb, Hb, !1);
      return tb.featureFlags.canUseInviteLinks && (0, lb.jsx)(Ob.e, {
        show: wb,
        close: Mb,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, lb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, lb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, lb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, lb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Vb ? (0, lb.jsx)(Eb.c, {}) : Vb, (0, lb.jsx)("br", {}), "Lobby Name: ", pb, (0, lb.jsx)("br", {}), (0, lb.jsx)("br", {}), (0, lb.jsx)("br", {}), (0, lb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, lb.jsx)(Bb, {})]
        })
      })
    }

    function Bb() {
      var bb;
      const wb = null !== (bb = sb(tb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...";
      return tb.featureFlags.canUseInviteLinks && (0, lb.jsx)(Lb, {
        text: wb
      })
    }

    function sb(bb) {
      const [wb, Mb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        if (!bb) return;
        let wb = !0;
        return (0, Ib.v)().then((bb => {
          wb && Mb(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          wb = !1
        }
      }), [bb]), wb
    }
  },
  35384: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Cb,
      c: () => Fb
    });
    Mb(35387);
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1259),
      gb = Mb(1616),
      lb = Mb(3770),
      Lb = Mb(1475),
      Ib = Mb(3457),
      Ob = Mb(4354),
      Ub = Mb(3285),
      tb = Mb(1364);

    function Cb(bb) {
      let {
        endsAt: wb,
        className: Mb
      } = bb;
      return (0, tb.jsxs)("span", {
        className: pb()("NewPlayerDealClock", Mb),
        children: [(0, tb.jsx)(Lb.b, {
          name: "hourglass"
        }), (0, tb.jsx)(lb.h, {
          toTime: wb
        })]
      })
    }

    function Eb(bb) {
      let {
        offered: wb,
        needsLogin: Mb,
        busy: eb,
        highlight: Hb,
        onBuy: lb
      } = bb;
      const {
        t: Lb
      } = (0, Vb.C)(), {
        pack: Cb
      } = wb, Eb = (0, Ob.f)(wb.package);
      return (0, tb.jsxs)("div", {
        className: pb()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: Hb
        }),
        children: [(0, tb.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, tb.jsx)("img", {
            src: Ub.c[wb.tier],
            alt: "",
            draggable: !1
          }), (0, tb.jsx)("span", {
            className: "NewPlayerDealTag",
            children: Lb("newPlayerDeal:tag")
          })]
        }), (0, tb.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, tb.jsx)(Ib.d, {
            className: "NewPlayerDealPackAmount",
            amount: Cb.gems
          }), (0, tb.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: Lb("newPlayerDeal:split", {
              usual: Cb.usualGems.toLocaleString(),
              bonus: (Cb.gems - Cb.usualGems).toLocaleString()
            })
          })]
        }), (0, tb.jsx)(gb.p, {
          className: "NewPlayerDealBuy",
          loading: eb,
          onClick: lb,
          ariaLabel: Lb("newPlayerDeal:buyLabel", {
            amount: Cb.gems.toLocaleString(),
            price: Eb
          }),
          children: Lb(Mb ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: Eb
          })
        })]
      })
    }

    function Fb(bb) {
      let {
        view: wb,
        needsLogin: Mb,
        busy: Hb,
        highlight: gb,
        onBuy: lb
      } = bb;
      const {
        t: Lb
      } = (0, Vb.C)();
      return (0, tb.jsxs)("div", {
        className: pb()("NewPlayerDealPacks", wb.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [wb.packs.map(((bb, wb) => (0, tb.jsxs)(eb.Fragment, {
          children: [wb > 0 && (0, tb.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, tb.jsx)("i", {})
          }), (0, tb.jsx)(Eb, {
            offered: bb,
            needsLogin: Mb,
            busy: Hb,
            highlight: gb === bb.pack.packageId,
            onBuy: () => {
              lb(bb)
            }
          })]
        }, bb.pack.packageId))), (0, tb.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, tb.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: Lb("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35389: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Kb,
      f: () => Rb
    });
    Mb(35387);
    var eb = Mb(4350),
      Hb = Mb(1648),
      pb = Mb(3263),
      Vb = Mb(4342),
      gb = Mb(4325),
      lb = Mb(4344),
      Lb = Mb(4308),
      Ib = Mb(1259),
      Ob = Mb(1504),
      Ub = Mb(1179),
      tb = Mb(1616),
      Cb = Mb(1475),
      Eb = Mb(3457),
      Fb = Mb(3889),
      Bb = Mb(3744),
      sb = Mb(3750),
      mb = Mb(3759),
      hb = Mb(1364);
    const zb = new lb.c(Lb.getBillingClient, Lb.addPurchaseRecordListener);
    let Xb = !1;

    function xb(bb, wb) {
      null !== bb && (0, Bb.p)(bb) || ((0, Hb.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${wb.pack.packageId}`
      }), null !== bb && (0, Bb.t)(bb), Kb(wb.pack.gems))
    }

    function jb(bb, wb, Mb) {
      const Hb = (0, Bb.b)(wb);
      switch (bb.kind) {
        case "completed":
          xb(Hb, Mb);
          break;
        case "pending":
          pb = bb.intentId, Vb = () => {
            Fb.g.refresh(), xb(Hb, Mb)
          }, Xb || (Xb = !0, zb.listen()), zb.follow(pb, Vb);
          break;
        case "unknownPackage":
          (0, Bb.L)(wb, null);
          break;
        case "failed":
          bb.errorKey === eb.c.newPlayerDealUnavailable && (0, Bb.L)(wb, null)
      }
      var pb, Vb
    }

    function Kb(bb) {
      Ob.NotificationProvider.showCustomPopup({
        body: wb => (0, hb.jsx)(rb, {
          gems: bb,
          close: wb
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function rb(bb) {
      let {
        gems: wb,
        close: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ib.C)();
      return (0, hb.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, hb.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, hb.jsx)(Cb.b, {
            name: "circle-check"
          }), (0, hb.jsx)(Eb.d, {
            amount: wb
          }), (0, hb.jsx)("span", {
            children: eb("newPlayerDeal:added")
          })]
        }), (0, hb.jsx)(tb.p, {
          className: "NewPlayerDealAddedOk",
          onClick: Mb,
          children: eb("general:ok")
        })]
      })
    }

    function Rb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb.e;
      const {
        userContext: Mb
      } = (0, Ub.e)(), {
        purchaseUnderWay: eb,
        notice: Hb,
        buy: lb
      } = (0, gb.b)(wb), Lb = (0, sb.l)(), Ib = Mb.mayBuy() || (0, pb.guestsMayBuy)(), Ob = null === Lb ? !Ib : Lb.guest && !Mb.isLoggedIn();
      return {
        purchaseUnderWay: eb,
        notice: Hb,
        needsLogin: Ob,
        buyPack: function(eb, Hb) {
          (0, Bb.A)("new_player_deal.buy", (0, mb.b)(eb.arm, bb, Hb.pack.packageId)), null === Lb ? lb(function(bb) {
            return {
              sku: bb.pack.packageId,
              tier: bb.tier,
              amount: bb.pack.gems,
              bonusPercent: 0,
              package: bb.package
            }
          }(Hb), null, {
            followPending: !1
          }).then((bb => {
            jb(bb, Mb, Hb)
          })) : Ob ? wb(Hb.pack.packageId, null) : xb((0, Bb.b)(Mb), Hb)
        }
      }
    }
  },
  35315: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(2183),
      gb = Mb(1364);

    function lb(bb) {
      const wb = Math.floor(bb / 3600),
        Mb = Math.floor(bb % 3600 / 60),
        eb = Math.floor(bb % 60),
        Hb = `${Mb.toString().padStart(2,"0")}:${eb.toString().padStart(2,"0")}`;
      return wb > 0 ? `${wb}:${Hb}` : Hb
    }
    const Lb = (0, eb.memo)((function(bb) {
      let {
        className: wb
      } = bb;
      const {
        recording: Mb,
        clipping: eb,
        seconds: Hb
      } = (0, Vb.h)("replayRecorder");
      return Mb || eb ? (0, gb.jsxs)("div", {
        className: pb()("RecordingIndicator", {
          RecordingIndicatorClipping: !Mb
        }, wb),
        "data-camera-keeper": "",
        children: [(0, gb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, gb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: Mb ? "REC" : "CLIP"
        }), Mb && (0, gb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: lb(Hb)
        })]
      }) : null
    }))
  },
  35394: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1364);
    const Vb = 21,
      gb = 2 * Math.PI * Vb;

    function lb(bb) {
      let {
        tier: wb,
        state: Mb,
        progress: eb,
        size: lb = "large"
      } = bb;
      const Lb = Hb()("SeasonPassTierNode", {
        SeasonPassTierNodeSmall: "small" === lb,
        SeasonPassTierNodeLarge: "large" === lb,
        SeasonPassTierNodeReached: "reached" === Mb,
        SeasonPassTierNodeEarning: "earning" === Mb
      });
      if ("earning" !== Mb || "large" === lb) return (0, pb.jsx)("span", {
        className: Lb,
        children: (0, pb.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: wb
        })
      });
      const Ib = Math.max(0, Math.min(1, eb));
      return (0, pb.jsxs)("span", {
        className: Lb,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * Ib),
        children: [(0, pb.jsxs)("svg", {
          className: "SeasonPassTierNodeRing",
          viewBox: "0 0 56 56",
          "aria-hidden": "true",
          children: [(0, pb.jsx)("circle", {
            className: "SeasonPassTierNodeRingEdge",
            cx: "28",
            cy: "28",
            r: "26"
          }), (0, pb.jsx)("circle", {
            className: "SeasonPassTierNodeRingTrack",
            cx: "28",
            cy: "28",
            r: Vb
          }), (0, pb.jsx)("circle", {
            className: "SeasonPassTierNodeRingFill",
            cx: "28",
            cy: "28",
            r: Vb,
            strokeDasharray: `${Ib*gb} ${gb}`,
            transform: "rotate(-90 28 28)"
          }), (0, pb.jsx)("circle", {
            className: "SeasonPassTierNodeRingCore",
            cx: "28",
            cy: "28",
            r: "16"
          })]
        }), (0, pb.jsx)("span", {
          className: "SeasonPassTierNodeNumber",
          children: wb
        })]
      })
    }
  },
  5789: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5480),
      Vb = Mb(1259),
      gb = Mb(1475),
      lb = Mb(1616),
      Lb = Mb(1677),
      Ib = Mb(1504),
      Ob = Mb(3666),
      Ub = Mb(1364);
    const tb = {
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

    function Cb(bb) {
      let {
        platform: wb
      } = bb;
      const Mb = "youtube" === wb;
      return (0, Ub.jsxs)("span", {
        className: Hb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Mb
        }),
        children: [Mb && (0, Ub.jsx)(Ob.e, {
          variant: "white"
        }), !Mb && (0, Ub.jsx)(gb.b, {
          name: tb[wb].icon,
          kit: "brands"
        })]
      })
    }

    function Eb(bb) {
      let {
        platform: wb,
        link: Mb,
        editable: eb,
        userContext: Hb,
        onLinksUpdated: Ob
      } = bb;
      const {
        t: Eb
      } = (0, Vb.C)(), Fb = tb[wb];
      if (!Mb && !eb) return null;

      function Bb() {
        var bb;
        if (!Hb || !Ob) return;
        Ib.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Fb.name
            }
          },
          prefixText: pb.B[wb],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Mb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Lb.e.setSocialLink(Hb, wb, bb.value) : await Lb.e.clearSocialLink(Hb, wb), Ob()
          } catch (Mb) {
            console.error("Failed to update social link", Mb), Ib.NotificationProvider.showAlertPopup({
              title: Mb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Mb) {
        const bb = `@${Mb.handle}`;
        return (0, Ub.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Fb.color
          },
          href: Mb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Ub.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Ub.jsx)(Cb, {
              platform: wb
            }), (0, Ub.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Ub.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), eb && (0, Ub.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, lb.bb)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), Bb()
            },
            children: (0, Ub.jsx)(gb.b, {
              name: "pen-to-square"
            })
          }), !eb && (0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Ub.jsx)(gb.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Ub.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Fb.color
        },
        ...(0, lb.bb)(),
        onClick: () => {
          Bb()
        },
        children: [(0, Ub.jsx)(Cb, {
          platform: wb
        }), (0, Ub.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Fb.name
          }), (0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Eb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Ub.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Ub.jsx)(gb.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Fb(bb) {
      let {
        socialLinks: wb,
        editable: Mb = !1,
        userContext: eb,
        onLinksUpdated: Hb
      } = bb;
      if (!Mb && 0 === wb.length) return null;
      const Vb = new Map(wb.map((bb => [bb.platform, bb]))),
        gb = Mb ? pb.y : wb.map((bb => bb.platform));
      return (0, Ub.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Ub.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: gb.map((bb => (0, Ub.jsx)(Eb, {
            platform: bb,
            link: Vb.get(bb),
            editable: Mb,
            userContext: eb,
            onLinksUpdated: Hb
          }, bb)))
        })
      })
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  35377: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(4835);

    function pb() {
      const [bb, wb] = (0, eb.useState)(!1);
      return (0, eb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Hb.e)().then((() => {
          bb && wb(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  7771: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(43);

    function pb(bb, wb) {
      var Mb;
      const [pb, Vb] = (0, eb.useState)(null !== (Mb = Hb.i.getItem(bb)) && void 0 !== Mb ? Mb : wb);
      return [pb, wb => {
        Hb.i.setItem(bb, wb), Vb(wb)
      }]
    }
  },
  35294: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Eb,
      c: () => Cb
    });
    Mb(35298);
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(35291);

    function gb(bb, wb) {
      return Math.max(1, Math.round(bb * wb))
    }

    function lb(bb, wb) {
      const Mb = wb * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        eb = function(bb, wb) {
          if (bb.lines) return gb(bb.lineThickness, wb) % 2;
          if (bb.dot) return gb(bb.dotSize, wb) % 2;
          return Lb(bb, wb) % 2
        }(bb, wb),
        Hb = Ib(bb.lineThickness * Mb, eb),
        pb = gb(bb.lineLength, Mb),
        Vb = Math.round(bb.gap * Mb),
        lb = bb.outline > 0 ? gb(bb.outline, Mb) : 0,
        Ub = [];
      if (bb.lines && (Ub.push({
          x: Hb + Vb,
          y: 0,
          w: pb,
          h: Hb,
          arm: "right"
        }), Ub.push({
          x: -Vb - pb,
          y: 0,
          w: pb,
          h: Hb,
          arm: "left"
        }), Ub.push({
          x: 0,
          y: Hb + Vb,
          w: Hb,
          h: pb,
          arm: "down"
        }), bb.tStyle || Ub.push({
          x: 0,
          y: -Vb - pb,
          w: Hb,
          h: pb,
          arm: "up"
        }), 0 === Vb && Ub.push({
          x: 0,
          y: 0,
          w: Hb,
          h: Hb
        })), bb.dot) {
        const wb = Ib(bb.dotSize * Mb, eb),
          pb = bb.lines && 0 === Vb && bb.dotSize > bb.lineThickness ? Math.max(wb, Hb + 2) : wb,
          gb = (Hb - pb) / 2;
        Ub.push({
          x: gb,
          y: gb,
          w: pb,
          h: pb
        })
      }
      const tb = Ub.map((bb => ({
        ...bb,
        x: bb.x - lb,
        y: bb.y - lb,
        w: bb.w + 2 * lb,
        h: bb.h + 2 * lb
      })));
      let Cb = null,
        Eb = null;
      if (bb.circle) {
        const wb = gb(bb.circleThickness, Mb),
          pb = function(bb, wb) {
            return bb + (bb % 2 === wb ? 0 : 1)
          }(Lb(bb, Mb), eb),
          Vb = (Hb - pb) / 2;
        Cb = Ob(Vb, pb, wb), lb > 0 && (Eb = Ob(Vb - lb, pb + 2 * lb, wb + 2 * lb))
      }
      return {
        cell: Hb,
        fills: Ub,
        outlines: lb > 0 ? tb : [],
        ring: Cb,
        ringOutline: Eb
      }
    }

    function Lb(bb, wb) {
      return Math.round(bb.circleRadius * wb * 2 + gb(bb.circleThickness, wb))
    }

    function Ib(bb, wb) {
      return Math.max(2 - wb, 2 * Math.round((bb - wb) / 2) + wb)
    }

    function Ob(bb, wb, Mb) {
      const eb = 2 * Mb >= wb - 1;
      return {
        x: bb,
        y: bb,
        size: wb,
        border: Math.min(Mb, Math.floor(wb / 2)),
        filled: eb
      }
    }
    var Ub = Mb(1364);
    const tb = 1.4;

    function Cb(bb, wb) {
      return bb && wb ? `scale(${tb})` : "scale(1)"
    }

    function Eb(bb) {
      return "classic" === bb.settings.style ? (0, Ub.jsx)(sb, {
        ...bb
      }) : (0, Ub.jsx)(Kb, {
        ...bb
      })
    }
    const Fb = .125;

    function Bb(bb, wb) {
      const Mb = {};
      if (bb.color !== Vb.e.color && (Mb.color = (0, Vb.h)(bb.color)), bb.opacity !== Vb.e.opacity && (Mb.opacity = bb.opacity / 100), bb.outline !== Vb.e.outline || bb.outlineColor !== Vb.e.outlineColor) {
        const wb = bb.outline,
          eb = (0, Vb.h)(bb.outlineColor);
        Mb.textShadow = wb > 0 ? `-${wb}px 0 ${eb}, 0 ${wb}px ${eb}, ${wb}px 0 ${eb}, 0 -${wb}px ${eb}` : "none"
      }
      if (bb.size !== Vb.e.size) {
        const eb = bb.size / 100;
        Mb.fontSize = wb ? `calc(max(1.3rem, 18px) * ${eb})` : `calc(1.3rem * ${eb})`, Mb.marginTop = `-${Fb}em`, Mb.transformOrigin = `50% calc(50% + ${Fb}em)`
      }
      return Mb
    }

    function sb(bb) {
      let {
        settings: wb,
        touch: Mb,
        inPreview: eb,
        inEditor: pb,
        pressed: Vb = !1,
        pressRef: gb
      } = bb;
      return (0, Ub.jsx)("div", {
        className: Hb()("Crosshair", {
          Touch: Mb,
          CrosshairInPreview: eb,
          CrosshairInEditor: pb || eb
        }),
        ref: gb,
        style: {
          transform: Cb(Vb, wb.growOnClick),
          ...Bb(wb, Mb)
        },
        children: "+"
      })
    }

    function mb(bb, wb) {
      return bb / wb + "px"
    }

    function hb(bb, wb, Mb, eb) {
      return {
        ...xb(bb, wb, Mb),
        width: mb(bb.w, Mb),
        height: mb(bb.h, Mb),
        background: eb
      }
    }

    function zb(bb, wb, Mb) {
      return {
        left: mb(bb.x, wb),
        top: mb(bb.y, wb),
        width: mb(bb.size, wb),
        height: mb(bb.size, wb),
        borderWidth: mb(bb.border, wb),
        borderColor: Mb,
        background: bb.filled ? Mb : void 0
      }
    }
    const Xb = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function xb(bb, wb, Mb) {
      const [eb, Hb] = bb.arm ? Xb[bb.arm] : [0, 0], pb = Math.round(wb * Mb);
      return {
        left: mb(bb.x + eb * pb, Mb),
        top: mb(bb.y + Hb * pb, Mb)
      }
    }

    function jb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function Kb(bb) {
      let {
        settings: wb,
        inPreview: Mb,
        inEditor: eb,
        pressed: gb = !1,
        spread: Lb,
        spreadRef: Ib
      } = bb;
      const Ob = (0, pb.useRef)(null),
        {
          box: Cb,
          dpr: Eb
        } = function(bb) {
          const [wb, Mb] = (0, pb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, pb.useLayoutEffect)((() => {
            const wb = bb.current;
            if (!wb) return;
            const eb = () => {
              const bb = wb.getBoundingClientRect(),
                eb = window.devicePixelRatio || 1;
              Mb((wb => wb.dpr === eb && wb.box.left === bb.left && wb.box.top === bb.top && wb.box.width === bb.width && wb.box.height === bb.height ? wb : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: eb
              }))
            };
            eb();
            const Hb = new ResizeObserver(eb);
            return Hb.observe(wb), window.addEventListener("resize", eb), window.addEventListener("scroll", eb, !0), () => {
              Hb.disconnect(), window.removeEventListener("resize", eb), window.removeEventListener("scroll", eb, !0)
            }
          }), [bb]), wb
        }(Ob),
        Fb = (0, pb.useRef)(Eb);
      Fb.current = Eb;
      const Bb = lb(wb, Eb, gb && wb.growOnClick ? tb : 1),
        sb = function(bb, wb, Mb) {
          const eb = Math.round((bb.left + bb.width / 2) * Mb - wb / 2),
            Hb = Math.round((bb.top + bb.height / 2) * Mb - wb / 2);
          return {
            x: eb / Mb - bb.left,
            y: Hb / Mb - bb.top
          }
        }(Cb, Bb.cell, Eb),
        mb = (0, Vb.h)(wb.color),
        Xb = (0, Vb.h)(wb.outlineColor),
        Kb = (0, pb.useRef)(0);
      (0, pb.useLayoutEffect)((() => {
        if (Ib) return Ib.current = bb => {
          var wb;
          Kb.current = bb, null === (wb = Ob.current) || void 0 === wb || wb.querySelectorAll("[data-arm]").forEach((wb => {
            Object.assign(wb.style, xb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(wb), bb, Fb.current))
          }))
        }, () => {
          Ib.current = null
        }
      }), [Ib]);
      const rb = null !== Lb && void 0 !== Lb ? Lb : Kb.current;
      return (0, Ub.jsx)("div", {
        ref: Ob,
        className: Hb()("CrosshairShapes", {
          CrosshairInPreview: Mb,
          CrosshairInEditor: eb || Mb,
          CrosshairSpreads: void 0 !== Ib
        }),
        children: (0, Ub.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: sb.x,
            top: sb.y,
            opacity: wb.opacity / 100
          },
          children: (0, Ub.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [Bb.ringOutline && (0, Ub.jsx)("div", {
              className: "CrosshairRing",
              style: zb(Bb.ringOutline, Eb, Xb)
            }), Bb.outlines.map(((bb, wb) => (0, Ub.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: hb(bb, rb, Eb, Xb)
            }, `o${wb}`))), Bb.ring && (0, Ub.jsx)("div", {
              className: "CrosshairRing",
              style: zb(Bb.ring, Eb, mb)
            }), Bb.fills.map(((bb, wb) => (0, Ub.jsx)("div", {
              className: "CrosshairPart",
              ...jb(bb),
              style: hb(bb, rb, Eb, mb)
            }, `f${wb}`)))]
          })
        })
      })
    }
  },
  35305: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => Fb,
      g: () => Eb
    });
    var eb = Mb(35291);
    const Hb = "XH1-",
      pb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Vb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      gb = ["color", "outlineColor"],
      lb = 1 + 3 * gb.length + Vb.length + 1,
      Lb = Math.ceil(8 * lb / Math.log2(62)),
      Ib = Hb.length + Lb;

    function Ob(bb) {
      let wb = 90;
      for (const Mb of bb) wb = 31 * wb + Mb & 255;
      return wb
    }
    const Ub = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      tb = BigInt(Ub.length);

    function Cb(bb, wb) {
      let Mb = 0n;
      for (const Hb of bb) {
        const bb = Ub.indexOf(Hb);
        if (bb < 0) return null;
        Mb = Mb * tb + BigInt(bb)
      }
      if (Mb >> BigInt(8 * wb) !== 0n) return null;
      const eb = [];
      for (let Hb = 0; Hb < wb; Hb++) eb.unshift(Number(0xffn & Mb)), Mb >>= 8n;
      return eb
    }

    function Eb(bb) {
      let wb = "shapes" === bb.style ? 1 : 0;
      pb.forEach(((Mb, eb) => {
        bb[Mb] && (wb |= 1 << eb + 1)
      }));
      const Mb = [wb];
      for (const Hb of gb) {
        const wb = (0, eb.f)(Hb, bb[Hb]);
        Mb.push(wb >> 16 & 255, wb >> 8 & 255, 255 & wb)
      }
      for (const Hb of Vb) {
        const {
          min: wb,
          step: pb
        } = eb.c[Hb];
        Mb.push(Math.round(((0, eb.f)(Hb, bb[Hb]) - wb) / pb))
      }
      return Mb.push(Ob(Mb)), Hb + function(bb, wb) {
        let Mb = 0n;
        for (const Hb of bb) Mb = Mb << 8n | BigInt(Hb);
        let eb = "";
        for (let Hb = 0; Hb < wb; Hb++) eb = Ub[Number(Mb % tb)] + eb, Mb /= tb;
        return eb
      }(Mb, Lb)
    }

    function Fb(bb) {
      for (const wb of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Lb}})`, "gi"))) {
        const bb = Bb(Cb(wb[1], lb));
        if (bb) return bb
      }
      return null
    }

    function Bb(bb) {
      if (!bb || bb.length !== lb || Ob(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const wb = bb[0],
        Mb = {
          ...eb.e,
          style: 1 & wb ? "shapes" : "classic"
        };
      pb.forEach(((bb, eb) => {
        Mb[bb] = 0 !== (wb & 1 << eb + 1)
      }));
      let Hb = 1;
      for (const eb of gb) Mb[eb] = bb[Hb] << 16 | bb[Hb + 1] << 8 | bb[Hb + 2], Hb += 3;
      for (const pb of Vb) {
        const {
          min: wb,
          step: Vb
        } = eb.c[pb];
        Mb[pb] = (0, eb.f)(pb, wb + bb[Hb] * Vb), Hb++
      }
      return Mb
    }
  },
  35291: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      e: () => Hb,
      f: () => pb,
      h: () => Lb,
      k: () => lb,
      n: () => Ib,
      p: () => gb,
      q: () => Vb
    });
    const eb = {
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
      Hb = Object.freeze({
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

    function pb(bb, wb) {
      var Mb;
      const {
        min: pb,
        max: Vb,
        step: gb
      } = eb[bb];
      if (!Number.isFinite(wb)) return Hb[bb];
      const lb = (null !== (Mb = String(gb).split(".")[1]) && void 0 !== Mb ? Mb : "").length,
        Lb = Number((Math.round(wb / gb) * gb).toFixed(lb));
      return Math.min(Vb, Math.max(pb, Lb))
    }

    function Vb(bb, wb, Mb) {
      const eb = "number" === typeof Mb ? pb(wb, Mb) : Mb;
      return {
        ...bb,
        [wb]: eb
      }
    }

    function gb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Hb).every((eb => Mb.includes(eb) || bb[eb] === wb[eb]))
    }

    function lb(bb) {
      return gb(bb, Hb)
    }

    function Lb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function Ib(bb) {
      const wb = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return wb ? parseInt(wb[1], 16) : null
    }
  },
  35309: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      f: () => Ub
    });
    var eb = Mb(64),
      Hb = Mb(43),
      pb = Mb(35305),
      Vb = Mb(35291);
    const gb = "crosshairCode";
    let lb = null;
    const Lb = new Set;

    function Ib() {
      if (null === lb) {
        var bb;
        const wb = Hb.i.getItem(gb);
        lb = null !== (bb = "string" === typeof wb ? (0, pb.e)(wb) : null) && void 0 !== bb ? bb : Vb.e
      }
      return lb
    }

    function Ob(bb) {
      lb = bb, (0, Vb.k)(bb) ? Hb.i.removeItem(gb) : Hb.i.setItem(gb, (0, pb.g)(bb));
      for (const wb of Lb) wb()
    }

    function Ub() {
      const [bb, wb] = (0, eb.useState)(Ib);
      return (0, eb.useEffect)((() => {
        const bb = () => {
          wb(Ib())
        };
        return bb(), Mb = bb, Lb.add(Mb), () => {
          Lb.delete(Mb)
        };
        var Mb
      }), []), bb
    }
  },
  35342: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      d: () => Vb,
      g: () => pb
    });
    var eb = Mb(64);
    const Hb = new class {
      constructor() {
        this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
      }
      getInFlight(bb) {
        var wb;
        return null !== (wb = this.inFlight.get(bb)) && void 0 !== wb ? wb : 0
      }
      setInFlight(bb, wb) {
        this.getInFlight(bb) !== wb && (this.inFlight.set(bb, wb), this.notify())
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      getLanding(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = this.landings.get(bb)) || void 0 === Mb ? void 0 : Mb.at(-1)) && void 0 !== wb ? wb : null
      }
      hasLanding(bb, wb) {
        var Mb, eb;
        return null !== (Mb = null === (eb = this.landings.get(bb)) || void 0 === eb ? void 0 : eb.includes(wb)) && void 0 !== Mb && Mb
      }
      addLanding(bb, wb) {
        var Mb;
        const eb = null !== (Mb = this.landings.get(bb)) && void 0 !== Mb ? Mb : [];
        return this.landings.set(bb, [...eb, wb]), this.notify(), () => {
          this.landings.set(bb, this.landings.get(bb).filter((bb => bb !== wb))), this.notify()
        }
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
    };

    function pb(bb, wb) {
      const [Mb, pb] = (0, eb.useState)((() => Hb.getInFlight(bb)));
      return (0, eb.useLayoutEffect)((() => {
        const wb = () => {
          pb(Hb.getInFlight(bb))
        };
        return wb(), Hb.subscribe(wb)
      }), [bb]), Math.max(0, wb - Mb)
    }

    function Vb(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      (0, eb.useLayoutEffect)((() => {
        if (Mb) return Hb.addLanding(bb, wb.current)
      }), [bb, wb, Mb])
    }
  },
  35253: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => eb
    });
    const eb = "image/jpeg",
      Hb = "jpg"
  },
  35258: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => lb,
      g: () => Lb,
      i: () => Ib
    });
    var eb = Mb(1889),
      Hb = Mb(4574),
      pb = Mb(110),
      Vb = Mb(1980),
      gb = Mb(35253);

    function lb() {
      return !(0, pb.isMobileApp)() || eb.e.supports("photos")
    }
    async function Lb(bb) {
      var wb, Mb;
      if ((0, pb.isMobileApp)()) {
        const {
          saved: wb
        } = await eb.e.request("photos.save", {
          data: await (0, Hb.f)(bb),
          mimeType: gb.g
        });
        return wb ? "saved" : "denied"
      }
      return (0, pb.isIOS)() && null !== (wb = (Mb = navigator).canShare) && void 0 !== wb && wb.call(Mb, {
        files: [bb]
      }) ? Ib(bb) : ((0, Vb.d)(bb, bb.name), "saved")
    }
    async function Ib(bb) {
      try {
        return await navigator.share({
          files: [bb]
        }), "shared"
      } catch (wb) {
        if (wb instanceof DOMException && "AbortError" === wb.name) return "Yb";
        if (wb instanceof DOMException && "NotAllowedError" === wb.name) return "needsTap";
        throw wb
      }
    }
  },
  35237: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Cb,
      f: () => Eb,
      j: () => Fb,
      n: () => Bb
    });
    var eb = Mb(26),
      Hb = Mb(35213),
      pb = Mb(1821),
      Vb = Mb(35246);
    const gb = 64,
      lb = 8;
    async function Lb(bb) {
      try {
        const wb = await createImageBitmap(bb, {
          resizeWidth: gb,
          resizeHeight: gb,
          resizeQuality: "high"
        });
        try {
          const bb = document.createElement("canvas");
          bb.width = gb, bb.height = gb;
          const Mb = bb.getContext("2d", {
            willReadFrequently: !0
          });
          return Mb.drawImage(wb, 0, 0, gb, gb),
            function(bb) {
              for (let wb = 0; wb < bb.length; wb += 4)
                if (bb[wb] > lb || bb[wb + 1] > lb || bb[wb + 2] > lb) return !1;
              return !0
            }(Mb.getImageData(0, 0, gb, gb).data)
        } finally {
          wb.close()
        }
      } catch (wb) {
        return console.warn("Screenshot mode: couldn't check whether a photo is blank", wb), !1
      }
    }
    var Ib = Mb(35253);
    const Ob = 8294400,
      Ub = .92,
      tb = 3;
    class Cb extends Error {
      constructor(bb) {
        super(`The photo came out blank ${bb} times`), this.name = "BlankPhotoError"
      }
    }

    function Eb() {
      (0, pb.g)(), eb.c.set({
        screenshotMode: !0
      })
    }

    function Fb() {
      eb.c.set({
        screenshotMode: !1
      })
    }
    async function Bb() {
      const bb = performance.now(),
        wb = await async function(bb, wb) {
          let Mb = 0;
          for (; Mb < tb;) {
            let Hb;
            try {
              Hb = await bb()
            } catch (eb) {
              if (0 === Mb) throw eb;
              return {
                outcome: "failed",
                error: eb,
                blanks: Mb
              }
            }
            if (!await wb(Hb)) return {
              outcome: "saved",
              blob: Hb,
              blanks: Mb
            };
            Mb++
          }
          return {
            outcome: "refused",
            blanks: Mb
          }
        }((async () => {
          const {
            width: bb,
            height: wb,
            scale: Mb
          } = function(bb, wb, Mb) {
            const eb = Math.max(1, bb),
              Hb = Math.max(1, wb),
              pb = Math.min(Math.max(1, Mb), Math.sqrt(Ob / (eb * Hb)));
            return {
              width: Math.round(eb * pb),
              height: Math.round(Hb * pb),
              scale: pb
            }
          }(window.innerWidth, window.innerHeight, window.devicePixelRatio);
          return (await Hb.devTools.capturePhoto(bb, wb, {
            scale: Mb,
            type: Ib.g,
            quality: Ub
          })).blob
        }), Lb);
      if (wb.blanks > 0) {
        const eb = (0, Vb.b)();
        Mb.e(310).then((() => Mb(42736))).then((Mb => {
          let {
            reportBlankPhoto: Hb
          } = Mb;
          Hb(wb.blanks, wb.outcome, bb, eb)
        })).catch((bb => {
          console.warn("Screenshot mode: couldn't report a blank photo", bb)
        }))
      }
      switch (wb.outcome) {
        case "saved":
          return new File([wb.blob], function(bb) {
            const wb = bb => String(bb).padStart(2, "0"),
              Mb = `${bb.getFullYear()}${wb(bb.getMonth()+1)}${wb(bb.getDate())}`,
              eb = `${wb(bb.getHours())}${wb(bb.getMinutes())}${wb(bb.getSeconds())}`;
            return `bloxd-${Mb}-${eb}.${Ib.d}`
          }(new Date), {
            type: Ib.g
          });
        case "refused":
          throw new Cb(wb.blanks);
        case "failed":
          throw wb.error
      }
    }
  },
  35289: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Hb
    });
    var eb = Mb(26);

    function Hb(bb, wb) {
      return bb && !wb
    }

    function pb() {
      return Hb(eb.c.get("isTouchScreen"), eb.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5601: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      g: () => pb,
      k: () => Hb
    });
    let eb = null;

    function Hb(bb) {
      eb = bb
    }

    function pb() {
      return eb
    }

    function Vb(bb) {
      return "bloxd" === bb.site && !bb.isMobileApp && !bb.isTouchScreen
    }
  },
  35221: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = new Set(["chunkBorders"])
  },
  35213: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ALL_DEV_TOOLS: () => Vb,
      coreDevTools: () => Lb,
      devTools: () => lb
    });
    var eb = Mb(698),
      Hb = Mb(1391),
      pb = Mb(35221);
    const Vb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function gb() {
      const {
        noaDevTools: bb
      } = await Mb.e(270).then((() => Mb(42733)));
      return bb
    }
    const lb = new class {
        constructor() {
          this.loadHost = gb, this.tools = Vb
        }
        setHost(bb) {
          this.tools = null === bb ? Vb : bb.tools, this.loadHost = null === bb ? gb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, wb) {
          const Mb = await this.loadHost();
          await Mb.downloadScene(bb, wb)
        }
        async setAmbientLightIntensity(bb) {
          const wb = await this.loadHost();
          await wb.setAmbientLightIntensity(bb)
        }
        async capturePhoto(bb, wb, Mb) {
          return (await this.loadHost()).capturePhoto(bb, wb, Mb)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      Lb = {
        tools: pb.b,
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
    eb.I && lb.setHost(Lb), (0, Hb.F)((() => {
      lb.setHost(Lb)
    }))
  },
  35370: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      c: () => Hb,
      f: () => Ob
    });
    var eb = Mb(1735);

    function Hb(bb) {
      var wb;
      return {
        ...gb.store,
        yaw: gb.store.yaw + (null !== (wb = eb.d[bb].previewYaw) && void 0 !== wb ? wb : 0)
      }
    }
    const pb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Vb = {
        ...pb,
        radius: 33,
        target: [0, 3.9, 0]
      },
      gb = {
        player: pb,
        store: Vb,
        showcase: {
          ...Vb,
          target: [0, 1.9, 0]
        }
      };

    function lb(bb, wb) {
      bb instanceof Promise ? bb.then(wb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : wb(bb)
    }
    class Lb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var wb;
        this.view = bb, null === (wb = this.opened) || void 0 === wb || wb.show(bb)
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Ib {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, wb;
        return null !== (bb = null === (wb = this.opened) || void 0 === wb ? void 0 : wb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, wb) {
        var Mb;
        null === (Mb = this.opened) || void 0 === Mb || Mb.setCosmetic(bb, wb)
      }
      setNametag(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setNametag(bb)
      }
      playEmote(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.playEmote(bb)
      }
      setOrbit(bb) {
        var wb;
        null === (wb = this.opened) || void 0 === wb || wb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var wb;
        await this.ready, await (null === (wb = this.opened) || void 0 === wb ? void 0 : wb.untilDrawn(bb))
      }
      resize(bb, wb) {
        var Mb;
        this.size = {
          width: bb,
          height: wb
        }, null === (Mb = this.opened) || void 0 === Mb || Mb.resize(bb, wb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const Ob = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Lb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Lb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Lb(this.current().openMobLineup(bb))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(bb, wb) {
        return new Ib(this.current().openCharacter(bb, wb))
      }
    }
  },
  35366: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.b,
      f: () => eb.c,
      i: () => eb.f
    });
    var eb = Mb(35370);
    class Hb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class pb {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(311)]).then((() => Mb(42755))))), this.characterScene = new Hb((() => Promise.all([Mb.e(85), Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(113), Mb.e(291), Mb.e(89), Mb.e(86), Mb.e(288), Mb.e(87), Mb.e(88), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(312), Mb.e(177), Mb.e(261), Mb.e(279), Mb.e(293), Mb.e(296), Mb.e(91), Mb.e(225), Mb.e(253), Mb.e(267), Mb.e(112), Mb.e(124), Mb.e(258), Mb.e(142), Mb.e(90), Mb.e(122), Mb.e(280), Mb.e(184)]).then((() => Mb(42854)))))
      }
      openMob(bb) {
        return this.mobScene.run((wb => wb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((wb => wb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((wb => wb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, wb) {
        return this.characterScene.run((Mb => Mb.openCharacterPreview(bb, wb)))
      }
    }
    eb.f.setDefaultHost((() => new pb))
  },
  7848: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(43);
    const Hb = "shaderPack";
    async function pb() {
      var bb;
      let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await eb.h.getItem(Hb, wb)) && void 0 !== bb ? bb : null
    }
  },
  35260: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return bb && !wb
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  35281: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(1400);

    function Hb() {
      var bb, wb;
      return null !== (bb = null === (wb = screen.orientation) || void 0 === wb ? void 0 : wb.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const pb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Hb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Hb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, eb.mE)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let wb = !1;
        return () => {
          if (wb && this.isHeld()) return null;
          const Mb = bb();
          return wb ||= null !== Mb, Mb
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  35223: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => sb,
      g: () => Lb,
      j: () => Eb,
      k: () => Cb
    });
    var eb = Mb(192),
      Hb = Mb(1333),
      pb = Mb(1271),
      Vb = Mb(1186),
      gb = Mb(1958);
    const lb = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Lb(bb) {
      return lb[bb]
    }

    function Ib(bb) {
      return (0, gb.b)(bb) ? "outdated" : bb instanceof eb.b ? 429 === bb.httpCode ? "busy" : "server" : "offline"
    }

    function Ob(bb, wb, Mb) {
      return (0, Vb.postJsonWithMetricsCookiesAndJsonResponse)(`${pb.clientSideServerUrls.indexUrl}${wb}`, Mb, {
        retries: 3
      }, bb.getMetricsCookies()).catch((bb => (console.error("Bad response from the server when trying to change name:", wb, bb), {
        outcome: "failed",
        failure: Ib(bb)
      })))
    }

    function Ub(bb) {
      return "outcome" in bb && "failed" === bb.outcome
    }

    function tb(bb) {
      return console.error("Error when trying to get with new name from DB", bb), {
        outcome: "refused",
        message: bb
      }
    }
    async function Cb(bb) {
      const wb = await Ob(bb, "/index/name/random", {});
      return Ub(wb) ? wb : "err" in wb ? tb(wb.err) : (bb.setPlayerName(wb.name), {
        outcome: "changed",
        name: wb.name
      })
    }
    async function Eb(bb, wb) {
      const Mb = await Ob(bb, "/index/name/update", {
        name: wb
      });
      return Ub(Mb) ? Mb : "err" in Mb ? tb(Mb.err) : Mb.nameExists ? {
        outcome: "taken"
      } : (bb.setPlayerName(wb), {
        outcome: "changed",
        name: wb
      })
    }

    function Fb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const eb = 1 === wb ? 1 : 10 ** (wb - 1),
        pb = String(eb + Math.floor(Mb() * (10 ** wb - eb)));
      return `${bb.slice(0,Hb.g-wb)}${pb}`
    }
    const Bb = [1, 2, 3, 4];
    async function sb(bb, wb) {
      const Mb = await Eb(bb, wb);
      if ("taken" !== Mb.outcome) return Mb;
      for (const eb of Bb) {
        const Mb = Fb(wb, eb),
          Hb = await Eb(bb, Mb);
        if ("taken" !== Hb.outcome) return Hb
      }
      return {
        outcome: "taken"
      }
    }
  },
  35246: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      c: () => Hb
    });
    let eb = null;

    function Hb() {
      eb = performance.now()
    }

    function pb() {
      return eb
    }
  },
  35266: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      d: () => lb
    });
    var eb = Mb(26);
    const Hb = 24,
      pb = "farNametags",
      Vb = 1e5;

    function gb() {
      var bb;
      return null === (bb = eb.c.get("showDistantNametags")) || void 0 === bb || bb
    }

    function lb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(pb),
          wb = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(wb) && wb >= 0 ? Math.min(wb, Vb) : null
      }()) && void 0 !== bb ? bb : gb() ? 0 : Hb
    }
  },
  35358: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      f: () => Ib
    });
    const eb = .01,
      Hb = .08,
      pb = .01,
      Vb = 5,
      gb = 100,
      lb = 40,
      Lb = 800;

    function Ib(bb) {
      const {
        canvas: wb
      } = bb;
      let Mb = null;
      const Ib = bb => {
          var eb;
          Mb = {
            pointer: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY
          }, null === (eb = wb.setPointerCapture) || void 0 === eb || eb.call(wb, bb.pointerId)
        },
        Ob = wb => {
          var Hb;
          const Vb = bb.orbit;
          if ((null === (Hb = Mb) || void 0 === Hb ? void 0 : Hb.pointer) !== wb.pointerId || null === Vb) return;
          const gb = wb.clientX - Mb.x,
            lb = wb.clientY - Mb.y;
          Mb = {
            ...Mb,
            x: wb.clientX,
            y: wb.clientY
          }, bb.setOrbit({
            alpha: Vb.alpha - gb * eb,
            beta: Math.min(Math.PI - pb, Math.max(pb, Vb.beta - lb * eb)),
            radius: Vb.radius
          })
        },
        Ub = bb => {
          var wb;
          (null === (wb = Mb) || void 0 === wb ? void 0 : wb.pointer) === bb.pointerId && (Mb = null)
        },
        tb = wb => {
          const Mb = bb.orbit;
          if (null === Mb) return;
          wb.preventDefault();
          const eb = wb.deltaY * (wb.deltaMode === WheelEvent.DOM_DELTA_LINE ? lb : wb.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Lb : 1),
            pb = Math.min(gb, Math.max(Vb, Mb.radius + eb * Hb));
          bb.setOrbit({
            ...Mb,
            radius: pb
          })
        };
      return wb.style.touchAction = "none", wb.addEventListener("pointerdown", Ib), wb.addEventListener("pointermove", Ob), wb.addEventListener("pointerup", Ub), wb.addEventListener("pointercancel", Ub), wb.addEventListener("wheel", tb, {
        passive: !1
      }), () => {
        wb.removeEventListener("pointerdown", Ib), wb.removeEventListener("pointermove", Ob), wb.removeEventListener("pointerup", Ub), wb.removeEventListener("pointercancel", Ub), wb.removeEventListener("wheel", tb)
      }
    }
  },
  35285: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      g: () => Ob,
      h: () => Ib
    });
    var eb = Mb(309),
      Hb = Mb(110),
      pb = Mb(153),
      Vb = Mb(144),
      gb = Mb(689);
    const lb = new Set(["mali_bifrost"]);

    function Lb() {
      if (gb.f) return;
      const bb = (0, Hb.pageOperatingSystem)();
      if ("android" !== bb && "windows" !== bb || (0, gb.c)("webgl_default")) return;
      if ("windows" === bb) return bb => "qualcomm" === (0, Hb.normaliseGpuVendor)((0, Vb.d)(bb).vendor);
      const wb = (0, pb.n)(),
        Mb = null === wb ? (0, eb.x)() : (0, eb.k)(wb.vendor, wb.renderer);
      return null !== Mb && lb.has(Mb) ? bb => (0, eb.r)((0, Vb.d)(bb).vendor, Mb) : void 0
    }

    function Ib(bb, wb) {
      return bb ? () => !0 : wb()
    }
    async function Ob(bb) {
      try {
        const wb = Ib(bb, Lb),
          Mb = navigator.gpu;
        if (void 0 === wb || void 0 === Mb) return !1;
        const eb = await (0, Vb.k)(Mb, {
          seed: !1,
          compatibility: wb
        });
        return "string" !== typeof eb && eb.compatibility && !(0, Vb.h)(eb.adapter)
      } catch (wb) {
        return console.error("WebGPU compatibility-mode adapter request failed.", wb), !1
      }
    }
  },
  35351: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      d: () => Vb
    });
    const eb = [{
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

    function Hb(bb) {
      let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const wb = bb < 0 ? "-" : "",
            Mb = Math.abs(bb);
          return Mb >= 10 ? `${wb}${Mb.toFixed(1).replace(/\.0$/,"")}` : `${wb}${Mb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        wb = BigInt(Math.floor(bb))
      } else wb = bb;
      const Hb = wb < 0n ? -wb : wb,
        pb = wb < 0n ? "-" : "",
        Vb = Hb.toString();
      if (Vb.length <= Mb) return `${pb}${Vb}`;
      const gb = 3 * Math.floor((Vb.length - 1) / 3);
      if (gb < 3) return `${pb}${Vb}`;
      if (gb > 3 * eb.length) {
        const bb = Vb[0],
          wb = Vb.slice(1, 3).replace(/0+$/, "");
        return `${pb}${wb?`${bb}.${wb}`:bb}e${Vb.length-1}`
      }
      const {
        threshold: lb,
        suffix: Lb
      } = eb[eb.length - gb / 3], Ib = Hb / lb, Ob = Number(1000n * (Hb % lb) / lb), Ub = Number(Ib) + Ob / 1e3;
      let tb;
      return tb = Ub >= 100 ? Math.floor(Ub).toString() : Ub >= 10 ? Ub.toFixed(1).replace(/\.0$/, "") : Ub.toFixed(2).replace(/\.?0+$/, ""), `${pb}${tb}${Lb}`
    }
    const pb = eb.map((bb => {
      let {
        threshold: wb,
        suffix: Mb
      } = bb;
      return {
        threshold: Number(wb),
        suffix: Mb
      }
    })).filter((bb => {
      let {
        threshold: wb
      } = bb;
      return Number.isFinite(wb)
    }));

    function Vb(bb) {
      const wb = Math.abs(bb),
        Mb = bb < 0 ? "-" : "";
      for (const {
          threshold: eb,
          suffix: Hb
        }
        of pb)
        if (wb >= eb) {
          const bb = wb / eb;
          if (bb >= 1e3) return `${Mb}${wb.toExponential(2).replace("e+","e")}`;
          let pb;
          return pb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${Mb}${pb}${Hb}`
        } return `${Mb}${wb}`
    }
  },
  35329: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      g: () => Ub,
      i: () => Ob,
      m: () => Vb,
      p: () => Lb,
      s: () => lb
    });
    var eb = Mb(382);
    const Hb = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      pb = {
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

    function Vb(bb) {
      var wb;
      return null !== (wb = pb[bb]) && void 0 !== wb ? wb : {
        translationKey: ""
      }
    }
    const gb = {
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

    function lb(bb) {
      return Hb.includes(bb)
    }

    function Lb(bb) {
      var wb;
      return !0 === (null === bb || void 0 === bb || null === (wb = bb.customAttributes) || void 0 === wb ? void 0 : wb.cannotEnchant)
    }

    function Ib(bb, wb) {
      const {
        max: Mb
      } = gb[bb].at(-1);
      return wb <= Mb
    }

    function Ob(bb) {
      const wb = Math.sin(bb / 80),
        Mb = bb => {
          if (bb <= 0) return 0;
          if (bb > 1) return 1;
          let wb = 0;
          const Mb = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let eb = 0; eb < Mb.length; eb++) {
            wb += (eb % 2 === 0 ? 1 : -1) * Mb[eb] * Math.pow(bb, 2 + eb) / (2 + eb)
          }
          return 72 * wb
        },
        eb = .3 - .78 * wb,
        Hb = .5 - .78 * wb,
        pb = .6 - .7 * wb,
        Vb = .8 - .6 * wb;
      let gb = Mb(eb),
        lb = Mb(Hb) - gb,
        Lb = Mb(pb) - lb - gb,
        Ib = Mb(Vb) - Lb - lb - gb;
      eb < .041 && (lb /= 1 - gb, Lb /= 1 - gb, Ib /= 1 - gb, gb = 0), Hb < .041 && (gb /= 1 - lb, Lb /= 1 - lb, Ib /= 1 - lb, lb = 0), pb < .041 && (gb /= 1 - Lb, lb /= 1 - Lb, Ib /= 1 - Lb, Lb = 0), Vb < .041 && (gb /= 1 - Ib, lb /= 1 - Ib, Lb /= 1 - Ib, Ib = 0);
      return {
        commonProb: gb,
        uncommonProb: lb,
        rareProb: Lb,
        epicProb: Ib,
        legendaryProb: 1 - (Ib + Lb + lb + gb)
      }
    }

    function Ub(bb, wb) {
      const {
        min: Mb,
        max: Hb
      } = gb[bb][wb], pb = eb.e.sampleUniformIntDistribution(Mb, Hb, "includeMax");
      return {
        ...Ob(pb),
        level: pb
      }
    }
  },
  35298: () => {},
  35387: () => {},
  14099: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  15258: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16665: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  17203: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);