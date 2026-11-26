export const id = 218;
export const ids = [218];
export const modules = {
  37093: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => zX
    });
    var cU = zU(61);
    const yU = "newPlayerDeal",
      QU = 36e5,
      AU = [4, 12, 20, 20, 30];
    const FU = 12 * QU;

    function oU(UU) {
      return UU - FU
    }

    function DU(UU, XU, zU) {
      const cU = oU(zU);
      return XU >= cU && XU < zU && (null === UU.lastShownAt || UU.lastShownAt < cU)
    }

    function EU(UU, XU) {
      const {
        arrival: zU,
        now: cU,
        endsAt: yU,
        playedOnDevice: FU
      } = XU;
      return !(cU >= yU || !FU) && (!(!DU(UU, cU, yU) && 0 !== UU.shownCount && null !== UU.lastShownAt) || "open" === zU && cU - UU.lastShownAt >= (oU = UU.shownCount, AU[Math.min(Math.max(oU, 1), AU.length) - 1] * QU));
      var oU
    }
    var YU = zU(320),
      NU = zU(1521),
      IU = zU(27),
      pU = zU(2387),
      aU = zU(3350),
      tU = zU(3354),
      gU = zU(2025),
      kU = zU(1203),
      GU = zU(1131);
    var BU = zU(1410),
      ZU = zU(42),
      RU = zU(702),
      PU = zU(2732),
      WU = zU(1414),
      dU = zU(2739),
      LU = zU(2381),
      eU = zU(1129),
      CU = zU(2787),
      wU = zU(2794),
      qU = zU(3390),
      OU = zU(1193),
      SU = zU(1494),
      rU = zU(3417),
      uU = zU(34915),
      fU = zU(2803),
      iU = zU(34925),
      HU = zU(1305);

    function MU(UU) {
      let {
        shownView: XU,
        close: zU
      } = UU;
      const {
        t: yU
      } = (0, OU.I)(), QU = (0, CU.M)(), {
        purchaseUnderWay: AU,
        notice: FU,
        needsLogin: oU,
        buyPack: DU
      } = (0, iU.g)("popup", ((UU, XU) => {
        zU(!1), (0, qU.c)(UU, XU)
      })), EU = null === QU;
      (0, cU.useEffect)((() => {
        EU && zU(!1)
      }), [EU, zU]);
      const YU = null !== QU && void 0 !== QU ? QU : XU;
      return (0, HU.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, HU.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: yU("newPlayerDeal:title")
        }), (0, HU.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: yU("newPlayerDeal:samePrice")
        }), (0, HU.jsx)(uU.d, {
          className: "NewPlayerDealClockBig",
          endsAt: YU.endsAt
        }), (0, HU.jsx)(uU.g, {
          view: YU,
          needsLogin: oU,
          busy: AU,
          highlight: null,
          onBuy: UU => {
            DU(YU, UU)
          }
        }), (0, HU.jsx)(rU.h, {
          notice: FU,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, HU.jsx)(rU.b, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, HU.jsx)(SU.f, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            zU(!0)
          },
          children: yU("newPlayerDeal:noThanks")
        })]
      })
    }

    function vU(UU) {
      let {
        arm: XU,
        children: zU
      } = UU;
      return (0, cU.useEffect)((() => {
        (0, CU.H)(!0)
      }), []), (0, CU.N)(XU, "popup"), zU
    }

    function VU(UU) {
      let XU = null;
      BU.NotificationProvider.showCustomPopup({
        body: zU => (0, HU.jsx)(vU, {
          arm: UU.arm,
          children: (0, HU.jsx)(MU, {
            shownView: UU,
            close: UU => {
              XU ??= UU, zU()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((zU => {
        (0, CU.H)(!1), !1 !== XU && "notificationTornDown" !== zU && (0, CU.B)("new_player_deal.close", (0, fU.b)(UU.arm, "popup"))
      }))
    }
    const sU = 2500,
      nU = 6e4;
    const mU = 500,
      lU = 6e4;

    function xU(UU) {
      const XU = Date.now() + lU;
      return new Promise((zU => {
        const cU = () => {
          UU() ? (0, dU.f)() || BU.NotificationProvider.hasPopup() || (0, WU.l)() || (0, CU.s)() || null !== IU.e.get("openEverythingMenuName") ? Date.now() > XU ? zU(!1) : setTimeout(cU, mU) : zU(!0) : zU(!1)
        };
        cU()
      }))
    }
    const JU = "newPlayerDealPointerDeferred_";
    let jU = !1,
      KU = null;

    function bU(UU, XU) {
      var zU;
      return (null === (zU = KU) || void 0 === zU ? void 0 : zU.accountId) === XU && KU.shownCount === UU.shownCount
    }

    function TU(UU, XU, zU) {
      return !!bU(XU, zU) && (KU = null, (0, CU.w)(zU), VU(UU), !0)
    }
    async function hU(UU, XU, zU, cU) {
      if (jU) return !1;
      let yU;
      jU = !0;
      try {
        yU = await async function(UU) {
          const {
            newPlayerDeal: XU,
            counted: zU
          } = await (0, GU.postJsonWithMetricsCookiesAndJsonResponse)(`${kU.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: UU
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: XU,
            counted: !0 === zU
          }
        }(XU.shownCount)
      } catch (QU) {
        return console.error("New player deal: counting a showing of its popup failed", QU), !1
      } finally {
        jU = !1
      }
      return (0, CU.I)(zU, yU.newPlayerDeal), yU.counted && null !== yU.newPlayerDeal && (KU = {
        accountId: cU,
        shownCount: yU.newPlayerDeal.shownCount
      }, "landingPage" === IU.e.get("gameState") && TU(UU, yU.newPlayerDeal, cU)), !0
    }
    let UX = null;

    function XX(UU, XU, zU, yU, QU) {
      var AU;
      const {
        gameState: FU
      } = (0, IU.q)(["gameState"]), NU = "landingPage" === FU, {
        pointing: pU
      } = (0, PU.g)(), aU = (0, cU.useRef)(pU);
      aU.current = pU;
      const tU = (0, cU.useRef)(UU);
      tU.current = UU;
      const kU = (0, cU.useRef)(XU);
      kU.current = XU;
      const GU = (0, cU.useRef)(zU);
      GU.current = zU;
      const [BU, WU] = (0, cU.useState)(null), dU = (0, cU.useRef)(0), LU = (0, cU.useRef)(0), eU = (0, cU.useRef)(!1), CU = (0, cU.useCallback)((UU => {
        "open" === function(UU) {
          const XU = UU ? (0, RU.g)() : (0, RU.peekVisitSessionId)(),
            zU = null !== XU && XU === UX ? "return" : "open";
          return UX = XU, zU
        }(UU) && (eU.current = !0), dU.current++, WU({
          seq: dU.current,
          kind: eU.current ? "open" : "return"
        })
      }), []);
      (0, cU.useEffect)((() => {
        if (!NU) return void WU(null);
        CU(!0);
        const UU = () => {
          "visible" === document.visibilityState && CU(!0)
        };
        return document.addEventListener("visibilitychange", UU), () => {
          document.removeEventListener("visibilitychange", UU)
        }
      }), [NU, CU]);
      const wU = null !== (AU = null === UU || void 0 === UU ? void 0 : UU.endsAt) && void 0 !== AU ? AU : null;
      (0, cU.useEffect)((() => {
        if (!NU || null === wU) return;
        const UU = oU(wU) - Date.now();
        if (UU <= 0 || UU > gU.d) return;
        const XU = setTimeout((() => {
          CU(!1)
        }), UU);
        return () => {
          clearTimeout(XU)
        }
      }), [NU, wU, CU]);
      const qU = null !== UU && null !== yU && null === QU;
      (0, cU.useEffect)((() => {
        if (null === BU || !qU || LU.current >= BU.seq) return;
        const UU = () => dU.current === BU.seq && "landingPage" === IU.e.get("gameState"),
          XU = setTimeout((() => {
            const XU = tU.current,
              zU = kU.current;
            if (null === XU || null === zU || !UU()) return;
            LU.current = BU.seq;
            const cU = Date.now(),
              QU = bU(zU, yU);
            if (!(QU || EU(zU, {
                arrival: BU.kind,
                now: cU,
                endsAt: XU.endsAt,
                playedOnDevice: ZU.k.getItem(YU.Rb) > 0
              }))) return void(eU.current = !1);
            const AU = DU(zU, cU, XU.endsAt);
            xU(UU).then((async UU => {
              const XU = tU.current;
              UU && null !== XU && kU.current === zU && (!aU.current || AU || function(UU, XU) {
                return ZU.k.getItem(JU + UU) === XU
              }(yU, zU.shownCount) ? QU ? TU(XU, zU, yU) && (eU.current = !1) : await hU(XU, zU, GU.current, yU) && (eU.current = !1) : function(UU, XU) {
                ZU.k.setItem(JU + UU, XU)
              }(yU, zU.shownCount))
            }))
          }), sU);
        return () => {
          clearTimeout(XU)
        }
      }), [BU, qU, yU])
    }

    function zX() {
      const {
        userContext: UU
      } = (0, eU.d)(), XU = (0, pU.usePurchasesAllowed)(), [zU, QU] = (0, cU.useState)(wU.i);
      (0, cU.useEffect)((() => (QU((0, wU.i)()), (0, wU.m)(QU))), []);
      const AU = (0, CU.d)(UU);
      ! function(UU, XU, zU) {
        const [QU, AU] = (0, cU.useState)(0);
        (0, cU.useEffect)((() => {
          if (!XU || null === UU) return;
          if (null !== zU) return void(0, CU.D)(UU, (0, wU.e)());
          if (null !== (0, CU.i)(UU)) return;
          let cU, QU = !1;
          return (0, tU.getBillingClient)().getOfferings(yU).then((XU => {
            let {
              offering: zU
            } = XU;
            (0, CU.D)(UU, null === zU ? [] : zU.packages.filter(aU.isPricedPackage))
          }), (UU => {
            console.error("New player deal: loading its prices failed", UU), QU || (cU = setTimeout((() => {
              AU((UU => UU + 1))
            }), nU))
          })), () => {
            QU = !0, clearTimeout(cU)
          }
        }), [UU, XU, zU, QU])
      }(AU, null !== (0, CU.k)(UU) && (XU || null !== zU), zU);
      const FU = (0, CU.M)();
      return XX(FU, (0, CU.k)(UU), UU, AU, zU),
        function() {
          const {
            userContext: UU
          } = (0, eU.d)(), {
            gameState: XU
          } = (0, IU.q)(["gameState"]);
          (0, cU.useEffect)((() => {
            if ("landingPage" !== XU || !UU.isLoggedIn() && !(0, pU.guestsMayBuy)()) return;
            const zU = (0, CU.f)(UU),
              cU = (0, LU.x)((UU => zU.includes(UU.item)));
            null !== cU && ((0, NU.reportAnalyticsClick)({
              id: "store.login_resume",
              value: cU.item
            }), (0, LU.l)({
              mode: "self",
              source: "loginResume",
              highlight: cU.item
            }))
          }), [UU, XU])
        }(),
        function(UU, XU, zU) {
          const yU = (0, cU.useRef)(null);
          (0, cU.useEffect)((() => {
            if (null === zU || null === UU || null === XU || yU.current === zU) return;
            yU.current = zU;
            const cU = UU.packs[0].pack;
            switch (zU.show) {
              case "popup":
                (0, CU.w)(XU), VU(UU);
                break;
              case "store":
                (0, LU.l)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, LU.l)({
                  mode: "self",
                  source: "loginResume",
                  highlight: cU.packageId
                });
                break;
              case "bought":
                (0, LU.l)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, CU.u)(XU), (0, iU.c)(cU.gems);
                break;
              case "gift":
                (0, LU.l)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [zU, UU, XU])
        }(FU, AU, zU), null
    }
  },
  34915: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => pU,
      g: () => tU
    });
    zU(34922);
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1193),
      FU = zU(1494),
      oU = zU(2812),
      DU = zU(1390),
      EU = zU(2559),
      YU = zU(3409),
      NU = zU(2401),
      IU = zU(1305);

    function pU(UU) {
      let {
        endsAt: XU,
        className: zU
      } = UU;
      return (0, IU.jsxs)("span", {
        className: QU()("NewPlayerDealClock", zU),
        children: [(0, IU.jsx)(DU.d, {
          name: "hourglass"
        }), (0, IU.jsx)(oU.e, {
          toTime: XU
        })]
      })
    }

    function aU(UU) {
      let {
        offered: XU,
        needsLogin: zU,
        busy: cU,
        highlight: yU,
        onBuy: oU
      } = UU;
      const {
        t: DU
      } = (0, AU.I)(), {
        pack: pU
      } = XU, aU = (0, YU.g)(XU.package);
      return (0, IU.jsxs)("div", {
        className: QU()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: yU
        }),
        children: [(0, IU.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, IU.jsx)("img", {
            src: NU.c[XU.tier],
            alt: "",
            draggable: !1
          }), (0, IU.jsx)("span", {
            className: "NewPlayerDealTag",
            children: DU("newPlayerDeal:tag")
          })]
        }), (0, IU.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, IU.jsx)(EU.c, {
            className: "NewPlayerDealPackAmount",
            amount: pU.gems
          })
        }), (0, IU.jsx)(FU.l, {
          className: "NewPlayerDealBuy",
          loading: cU,
          onClick: oU,
          ariaLabel: DU("newPlayerDeal:buyLabel", {
            amount: pU.gems.toLocaleString(),
            price: aU
          }),
          children: DU(zU ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: aU
          })
        })]
      })
    }

    function tU(UU) {
      let {
        view: XU,
        needsLogin: zU,
        busy: yU,
        highlight: FU,
        onBuy: oU
      } = UU;
      const {
        t: DU
      } = (0, AU.I)();
      return (0, IU.jsxs)("div", {
        className: QU()("NewPlayerDealPacks", XU.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [XU.packs.map(((UU, XU) => (0, IU.jsxs)(cU.Fragment, {
          children: [XU > 0 && (0, IU.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, IU.jsx)("i", {})
          }), (0, IU.jsx)(aU, {
            offered: UU,
            needsLogin: zU,
            busy: yU,
            highlight: FU === UU.pack.packageId,
            onBuy: () => {
              oU(UU)
            }
          })]
        }, UU.pack.packageId))), (0, IU.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, IU.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: DU("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34925: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => dU,
      g: () => eU
    });
    zU(34922);
    var cU = zU(3403),
      yU = zU(1521),
      QU = zU(2387),
      AU = zU(3390),
      FU = zU(3374),
      oU = zU(3395),
      DU = zU(3354),
      EU = zU(1193),
      YU = zU(1410),
      NU = zU(1129),
      IU = zU(1494),
      pU = zU(1390),
      aU = zU(2559),
      tU = zU(2916),
      gU = zU(2787),
      kU = zU(2794),
      GU = zU(2803),
      BU = zU(1305);
    const ZU = new oU.d(DU.getBillingClient, DU.addPurchaseRecordListener);
    let RU = !1;

    function PU(UU, XU) {
      null !== UU && (0, gU.p)(UU) || ((0, yU.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${XU.pack.packageId}`
      }), null !== UU && (0, gU.u)(UU), dU(XU.pack.gems))
    }

    function WU(UU, XU, zU) {
      const yU = (0, gU.d)(XU);
      switch (UU.kind) {
        case "completed":
          PU(yU, zU);
          break;
        case "pending":
          QU = UU.intentId, AU = () => {
            tU.i.refresh(), PU(yU, zU)
          }, RU || (RU = !0, ZU.listen()), ZU.follow(QU, AU);
          break;
        case "unknownPackage":
          (0, gU.I)(XU, null);
          break;
        case "failed":
          UU.errorKey === cU.e.newPlayerDealUnavailable && (0, gU.I)(XU, null)
      }
      var QU, AU
    }

    function dU(UU) {
      YU.NotificationProvider.showCustomPopup({
        body: XU => (0, BU.jsx)(LU, {
          gems: UU,
          close: XU
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function LU(UU) {
      let {
        gems: XU,
        close: zU
      } = UU;
      const {
        t: cU
      } = (0, EU.I)();
      return (0, BU.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, BU.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, BU.jsx)(pU.d, {
            name: "circle-check"
          }), (0, BU.jsx)(aU.c, {
            amount: XU
          }), (0, BU.jsx)("span", {
            children: cU("newPlayerDeal:added")
          })]
        }), (0, BU.jsx)(IU.l, {
          className: "NewPlayerDealAddedOk",
          onClick: zU,
          children: cU("general:ok")
        })]
      })
    }

    function eU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.c;
      const {
        userContext: zU
      } = (0, NU.d)(), {
        purchaseUnderWay: cU,
        notice: yU,
        buy: oU
      } = (0, FU.b)(XU), DU = (0, kU.i)(), EU = zU.mayBuy() || (0, QU.guestsMayBuy)(), YU = null === DU ? !EU : DU.guest && !zU.isLoggedIn();
      return {
        purchaseUnderWay: cU,
        notice: yU,
        needsLogin: YU,
        buyPack: function(cU, yU) {
          (0, gU.B)("new_player_deal.buy", (0, GU.b)(cU.arm, UU, yU.pack.packageId)), null === DU ? oU(function(UU) {
            return {
              sku: UU.pack.packageId,
              tier: UU.tier,
              amount: UU.pack.gems,
              bonusPercent: 0,
              package: UU.package
            }
          }(yU), null, {
            followPending: !1
          }).then((UU => {
            WU(UU, zU, yU)
          })) : YU ? XU(yU.pack.packageId, null) : PU((0, gU.d)(zU), yU)
        }
      }
    }
  },
  34922: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);