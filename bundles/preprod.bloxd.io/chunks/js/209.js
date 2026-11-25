export const id = 209;
export const ids = [209];
export const modules = {
  36693: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => XW
    });
    var wQ = XQ(61);
    const qQ = "newPlayerDeal",
      TQ = 36e5,
      zQ = [4, 12, 20, 20, 30];
    const sQ = 12 * TQ;

    function FQ(QQ) {
      return QQ - sQ
    }

    function PQ(QQ, WQ, XQ) {
      const wQ = FQ(XQ);
      return WQ >= wQ && WQ < XQ && (null === QQ.lastShownAt || QQ.lastShownAt < wQ)
    }

    function gQ(QQ, WQ) {
      const {
        arrival: XQ,
        now: wQ,
        endsAt: qQ,
        playedOnDevice: sQ
      } = WQ;
      return !(wQ >= qQ || !sQ) && (!(!PQ(QQ, wQ, qQ) && 0 !== QQ.shownCount && null !== QQ.lastShownAt) || "open" === XQ && wQ - QQ.lastShownAt >= (FQ = QQ.shownCount, zQ[Math.min(Math.max(FQ, 1), zQ.length) - 1] * TQ));
      var FQ
    }
    var JQ = XQ(382),
      rQ = XQ(1532),
      IQ = XQ(26),
      jQ = XQ(2359),
      BQ = XQ(3267),
      yQ = XQ(3276),
      VQ = XQ(2030),
      DQ = XQ(1238),
      pQ = XQ(1165);
    var GQ = XQ(1404),
      UQ = XQ(43),
      bQ = XQ(698),
      vQ = XQ(2652),
      dQ = XQ(1407),
      HQ = XQ(2655),
      aQ = XQ(2351),
      lQ = XQ(1162),
      hQ = XQ(2699),
      iQ = XQ(2708),
      cQ = XQ(3320),
      AQ = XQ(1226),
      RQ = XQ(1507),
      EQ = XQ(3342),
      CQ = XQ(34557),
      uQ = XQ(2716),
      LQ = XQ(34568),
      kQ = XQ(1145);

    function fQ(QQ) {
      let {
        shownView: WQ,
        close: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, AQ.C)(), TQ = (0, hQ.Q)(), {
        purchaseUnderWay: zQ,
        notice: sQ,
        needsLogin: FQ,
        buyPack: PQ
      } = (0, LQ.d)("popup", ((QQ, WQ) => {
        XQ(!1), (0, cQ.d)(QQ, WQ)
      })), gQ = null === TQ;
      (0, wQ.useEffect)((() => {
        gQ && XQ(!1)
      }), [gQ, XQ]);
      const JQ = null !== TQ && void 0 !== TQ ? TQ : WQ;
      return (0, kQ.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, kQ.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: qQ("newPlayerDeal:title")
        }), (0, kQ.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: qQ("newPlayerDeal:samePrice")
        }), (0, kQ.jsx)(CQ.d, {
          className: "NewPlayerDealClockBig",
          endsAt: JQ.endsAt
        }), (0, kQ.jsx)(CQ.e, {
          view: JQ,
          needsLogin: FQ,
          busy: zQ,
          highlight: null,
          onBuy: QQ => {
            PQ(JQ, QQ)
          }
        }), (0, kQ.jsx)(EQ.h, {
          notice: sQ,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, kQ.jsx)(EQ.c, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, kQ.jsx)(RQ.h, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            XQ(!0)
          },
          children: qQ("newPlayerDeal:noThanks")
        })]
      })
    }

    function SQ(QQ) {
      let {
        arm: WQ,
        children: XQ
      } = QQ;
      return (0, wQ.useEffect)((() => {
        (0, hQ.M)(!0)
      }), []), (0, hQ.S)(WQ, "popup"), XQ
    }

    function tQ(QQ) {
      let WQ = null;
      GQ.NotificationProvider.showCustomPopup({
        body: XQ => (0, kQ.jsx)(SQ, {
          arm: QQ.arm,
          children: (0, kQ.jsx)(fQ, {
            shownView: QQ,
            close: QQ => {
              WQ ??= QQ, XQ()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((XQ => {
        (0, hQ.M)(!1), !1 !== WQ && "notificationTornDown" !== XQ && (0, hQ.F)("new_player_deal.close", (0, uQ.e)(QQ.arm, "popup"))
      }))
    }
    const oQ = 2500,
      eQ = 6e4;
    const nQ = 500,
      xQ = 6e4;

    function YQ(QQ) {
      const WQ = Date.now() + xQ;
      return new Promise((XQ => {
        const wQ = () => {
          QQ() ? (0, HQ.g)() || GQ.NotificationProvider.hasPopup() || (0, dQ.h)() || (0, hQ.s)() || null !== IQ.b.get("openEverythingMenuName") ? Date.now() > WQ ? XQ(!1) : setTimeout(wQ, nQ) : XQ(!0) : XQ(!1)
        };
        wQ()
      }))
    }
    const NQ = "newPlayerDealPointerDeferred_";
    let ZQ = !1,
      OQ = null;

    function KQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = OQ) || void 0 === XQ ? void 0 : XQ.accountId) === WQ && OQ.shownCount === QQ.shownCount
    }

    function mQ(QQ, WQ, XQ) {
      return !!KQ(WQ, XQ) && (OQ = null, (0, hQ.y)(XQ), tQ(QQ), !0)
    }
    async function MQ(QQ, WQ, XQ, wQ) {
      if (ZQ) return !1;
      let qQ;
      ZQ = !0;
      try {
        qQ = await async function(QQ) {
          const {
            newPlayerDeal: WQ,
            counted: XQ
          } = await (0, pQ.postJsonWithMetricsCookiesAndJsonResponse)(`${DQ.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: QQ
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: WQ,
            counted: !0 === XQ
          }
        }(WQ.shownCount)
      } catch (TQ) {
        return console.error("New player deal: counting a showing of its popup failed", TQ), !1
      } finally {
        ZQ = !1
      }
      return (0, hQ.O)(XQ, qQ.newPlayerDeal), qQ.counted && null !== qQ.newPlayerDeal && (OQ = {
        accountId: wQ,
        shownCount: qQ.newPlayerDeal.shownCount
      }, "landingPage" === IQ.b.get("gameState") && mQ(QQ, qQ.newPlayerDeal, wQ)), !0
    }
    let QW = null;

    function WW(QQ, WQ, XQ, qQ, TQ) {
      var zQ;
      const {
        gameState: sQ
      } = (0, IQ.n)(["gameState"]), rQ = "landingPage" === sQ, {
        pointing: jQ
      } = (0, vQ.f)(), BQ = (0, wQ.useRef)(jQ);
      BQ.current = jQ;
      const yQ = (0, wQ.useRef)(QQ);
      yQ.current = QQ;
      const DQ = (0, wQ.useRef)(WQ);
      DQ.current = WQ;
      const pQ = (0, wQ.useRef)(XQ);
      pQ.current = XQ;
      const [GQ, dQ] = (0, wQ.useState)(null), HQ = (0, wQ.useRef)(0), aQ = (0, wQ.useRef)(0), lQ = (0, wQ.useRef)(!1), hQ = (0, wQ.useCallback)((QQ => {
        "open" === function(QQ) {
          const WQ = QQ ? (0, bQ.d)() : (0, bQ.peekVisitSessionId)(),
            XQ = null !== WQ && WQ === QW ? "return" : "open";
          return QW = WQ, XQ
        }(QQ) && (lQ.current = !0), HQ.current++, dQ({
          seq: HQ.current,
          kind: lQ.current ? "open" : "return"
        })
      }), []);
      (0, wQ.useEffect)((() => {
        if (!rQ) return void dQ(null);
        hQ(!0);
        const QQ = () => {
          "visible" === document.visibilityState && hQ(!0)
        };
        return document.addEventListener("visibilitychange", QQ), () => {
          document.removeEventListener("visibilitychange", QQ)
        }
      }), [rQ, hQ]);
      const iQ = null !== (zQ = null === QQ || void 0 === QQ ? void 0 : QQ.endsAt) && void 0 !== zQ ? zQ : null;
      (0, wQ.useEffect)((() => {
        if (!rQ || null === iQ) return;
        const QQ = FQ(iQ) - Date.now();
        if (QQ <= 0 || QQ > VQ.c) return;
        const WQ = setTimeout((() => {
          hQ(!1)
        }), QQ);
        return () => {
          clearTimeout(WQ)
        }
      }), [rQ, iQ, hQ]);
      const cQ = null !== QQ && null !== qQ && null === TQ;
      (0, wQ.useEffect)((() => {
        if (null === GQ || !cQ || aQ.current >= GQ.seq) return;
        const QQ = () => HQ.current === GQ.seq && "landingPage" === IQ.b.get("gameState"),
          WQ = setTimeout((() => {
            const WQ = yQ.current,
              XQ = DQ.current;
            if (null === WQ || null === XQ || !QQ()) return;
            aQ.current = GQ.seq;
            const wQ = Date.now(),
              TQ = KQ(XQ, qQ);
            if (!(TQ || gQ(XQ, {
                arrival: GQ.kind,
                now: wQ,
                endsAt: WQ.endsAt,
                playedOnDevice: UQ.i.getItem(JQ.Pb) > 0
              }))) return void(lQ.current = !1);
            const zQ = PQ(XQ, wQ, WQ.endsAt);
            YQ(QQ).then((async QQ => {
              const WQ = yQ.current;
              QQ && null !== WQ && DQ.current === XQ && (!BQ.current || zQ || function(QQ, WQ) {
                return UQ.i.getItem(NQ + QQ) === WQ
              }(qQ, XQ.shownCount) ? TQ ? mQ(WQ, XQ, qQ) && (lQ.current = !1) : await MQ(WQ, XQ, pQ.current, qQ) && (lQ.current = !1) : function(QQ, WQ) {
                UQ.i.setItem(NQ + QQ, WQ)
              }(qQ, XQ.shownCount))
            }))
          }), oQ);
        return () => {
          clearTimeout(WQ)
        }
      }), [GQ, cQ, qQ])
    }

    function XW() {
      const {
        userContext: QQ
      } = (0, lQ.c)(), WQ = (0, jQ.usePurchasesAllowed)(), [XQ, TQ] = (0, wQ.useState)(iQ.j);
      (0, wQ.useEffect)((() => (TQ((0, iQ.j)()), (0, iQ.l)(TQ))), []);
      const zQ = (0, hQ.b)(QQ);
      ! function(QQ, WQ, XQ) {
        const [TQ, zQ] = (0, wQ.useState)(0);
        (0, wQ.useEffect)((() => {
          if (!WQ || null === QQ) return;
          if (null !== XQ) return void(0, hQ.J)(QQ, (0, iQ.e)());
          if (null !== (0, hQ.h)(QQ)) return;
          let wQ, TQ = !1;
          return (0, yQ.getBillingClient)().getOfferings(qQ).then((WQ => {
            let {
              offering: XQ
            } = WQ;
            (0, hQ.J)(QQ, null === XQ ? [] : XQ.packages.filter(BQ.isPricedPackage))
          }), (QQ => {
            console.error("New player deal: loading its prices failed", QQ), TQ || (wQ = setTimeout((() => {
              zQ((QQ => QQ + 1))
            }), eQ))
          })), () => {
            TQ = !0, clearTimeout(wQ)
          }
        }), [QQ, WQ, XQ, TQ])
      }(zQ, null !== (0, hQ.k)(QQ) && (WQ || null !== XQ), XQ);
      const sQ = (0, hQ.Q)();
      return WW(sQ, (0, hQ.k)(QQ), QQ, zQ, XQ),
        function() {
          const {
            userContext: QQ
          } = (0, lQ.c)(), {
            gameState: WQ
          } = (0, IQ.n)(["gameState"]);
          (0, wQ.useEffect)((() => {
            if ("landingPage" !== WQ || !QQ.isLoggedIn() && !(0, jQ.guestsMayBuy)()) return;
            const XQ = (0, hQ.d)(QQ),
              wQ = (0, aQ.z)((QQ => XQ.includes(QQ.item)));
            null !== wQ && ((0, rQ.reportAnalyticsClick)({
              id: "store.login_resume",
              value: wQ.item
            }), (0, aQ.q)({
              mode: "self",
              source: "loginResume",
              highlight: wQ.item
            }))
          }), [QQ, WQ])
        }(),
        function(QQ, WQ, XQ) {
          const qQ = (0, wQ.useRef)(null);
          (0, wQ.useEffect)((() => {
            if (null === XQ || null === QQ || null === WQ || qQ.current === XQ) return;
            qQ.current = XQ;
            const wQ = QQ.packs[0].pack;
            switch (XQ.show) {
              case "popup":
                (0, hQ.y)(WQ), tQ(QQ);
                break;
              case "store":
                (0, aQ.q)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, aQ.q)({
                  mode: "self",
                  source: "loginResume",
                  highlight: wQ.packageId
                });
                break;
              case "bought":
                (0, aQ.q)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, hQ.u)(WQ), (0, LQ.c)(wQ.gems);
                break;
              case "gift":
                (0, aQ.q)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [XQ, QQ, WQ])
        }(sQ, zQ, XQ), null
    }
  },
  34557: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => jQ,
      e: () => yQ
    });
    XQ(34562);
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1226),
      sQ = XQ(1507),
      FQ = XQ(2726),
      PQ = XQ(1094),
      gQ = XQ(2329),
      JQ = XQ(3336),
      rQ = XQ(2366),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        endsAt: WQ,
        className: XQ
      } = QQ;
      return (0, IQ.jsxs)("span", {
        className: TQ()("NewPlayerDealClock", XQ),
        children: [(0, IQ.jsx)(PQ.d, {
          name: "hourglass"
        }), (0, IQ.jsx)(FQ.h, {
          toTime: WQ
        })]
      })
    }

    function BQ(QQ) {
      let {
        offered: WQ,
        needsLogin: XQ,
        busy: wQ,
        highlight: qQ,
        onBuy: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, zQ.C)(), {
        pack: jQ
      } = WQ, BQ = (0, JQ.i)(WQ.package);
      return (0, IQ.jsxs)("div", {
        className: TQ()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: qQ
        }),
        children: [(0, IQ.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, IQ.jsx)("img", {
            src: rQ.d[WQ.tier],
            alt: "",
            draggable: !1
          }), (0, IQ.jsx)("span", {
            className: "NewPlayerDealTag",
            children: PQ("newPlayerDeal:tag")
          })]
        }), (0, IQ.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, IQ.jsx)(gQ.d, {
            className: "NewPlayerDealPackAmount",
            amount: jQ.gems
          })
        }), (0, IQ.jsx)(sQ.s, {
          className: "NewPlayerDealBuy",
          loading: wQ,
          onClick: FQ,
          ariaLabel: PQ("newPlayerDeal:buyLabel", {
            amount: jQ.gems.toLocaleString(),
            price: BQ
          }),
          children: PQ(XQ ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: BQ
          })
        })]
      })
    }

    function yQ(QQ) {
      let {
        view: WQ,
        needsLogin: XQ,
        busy: qQ,
        highlight: sQ,
        onBuy: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, zQ.C)();
      return (0, IQ.jsxs)("div", {
        className: TQ()("NewPlayerDealPacks", WQ.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [WQ.packs.map(((QQ, WQ) => (0, IQ.jsxs)(wQ.Fragment, {
          children: [WQ > 0 && (0, IQ.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, IQ.jsx)("i", {})
          }), (0, IQ.jsx)(BQ, {
            offered: QQ,
            needsLogin: XQ,
            busy: qQ,
            highlight: sQ === QQ.pack.packageId,
            onBuy: () => {
              FQ(QQ)
            }
          })]
        }, QQ.pack.packageId))), (0, IQ.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, IQ.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: PQ("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34568: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => HQ,
      d: () => lQ
    });
    XQ(34562);
    var wQ = XQ(3330),
      qQ = XQ(1532),
      TQ = XQ(2359),
      zQ = XQ(3320),
      sQ = XQ(3294),
      FQ = XQ(3322),
      PQ = XQ(3276),
      gQ = XQ(1226),
      JQ = XQ(1404),
      rQ = XQ(1162),
      IQ = XQ(1507),
      jQ = XQ(1094),
      BQ = XQ(2329),
      yQ = XQ(2841),
      VQ = XQ(2699),
      DQ = XQ(2708),
      pQ = XQ(2716),
      GQ = XQ(1145);
    const UQ = new FQ.e(PQ.getBillingClient, PQ.addPurchaseRecordListener);
    let bQ = !1;

    function vQ(QQ, WQ) {
      null !== QQ && (0, VQ.o)(QQ) || ((0, qQ.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${WQ.pack.packageId}`
      }), null !== QQ && (0, VQ.u)(QQ), HQ(WQ.pack.gems))
    }

    function dQ(QQ, WQ, XQ) {
      const qQ = (0, VQ.b)(WQ);
      switch (QQ.kind) {
        case "completed":
          vQ(qQ, XQ);
          break;
        case "pending":
          TQ = QQ.intentId, zQ = () => {
            yQ.e.refresh(), vQ(qQ, XQ)
          }, bQ || (bQ = !0, UQ.listen()), UQ.follow(TQ, zQ);
          break;
        case "unknownPackage":
          (0, VQ.O)(WQ, null);
          break;
        case "failed":
          QQ.errorKey === wQ.e.newPlayerDealUnavailable && (0, VQ.O)(WQ, null)
      }
      var TQ, zQ
    }

    function HQ(QQ) {
      JQ.NotificationProvider.showCustomPopup({
        body: WQ => (0, GQ.jsx)(aQ, {
          gems: QQ,
          close: WQ
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function aQ(QQ) {
      let {
        gems: WQ,
        close: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, gQ.C)();
      return (0, GQ.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, GQ.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, GQ.jsx)(jQ.d, {
            name: "circle-check"
          }), (0, GQ.jsx)(BQ.d, {
            amount: WQ
          }), (0, GQ.jsx)("span", {
            children: wQ("newPlayerDeal:added")
          })]
        }), (0, GQ.jsx)(IQ.s, {
          className: "NewPlayerDealAddedOk",
          onClick: XQ,
          children: wQ("general:ok")
        })]
      })
    }

    function lQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.d;
      const {
        userContext: XQ
      } = (0, rQ.c)(), {
        purchaseUnderWay: wQ,
        notice: qQ,
        buy: FQ
      } = (0, sQ.b)(WQ), PQ = (0, DQ.j)(), gQ = XQ.mayBuy() || (0, TQ.guestsMayBuy)(), JQ = null === PQ ? !gQ : PQ.guest && !XQ.isLoggedIn();
      return {
        purchaseUnderWay: wQ,
        notice: qQ,
        needsLogin: JQ,
        buyPack: function(wQ, qQ) {
          (0, VQ.F)("new_player_deal.buy", (0, pQ.e)(wQ.arm, QQ, qQ.pack.packageId)), null === PQ ? FQ(function(QQ) {
            return {
              sku: QQ.pack.packageId,
              tier: QQ.tier,
              amount: QQ.pack.gems,
              bonusPercent: 0,
              package: QQ.package
            }
          }(qQ), null, {
            followPending: !1
          }).then((QQ => {
            dQ(QQ, XQ, qQ)
          })) : JQ ? WQ(qQ.pack.packageId, null) : vQ((0, VQ.b)(XQ), qQ)
        }
      }
    }
  },
  34562: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);