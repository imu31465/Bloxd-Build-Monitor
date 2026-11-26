export const id = 224;
export const ids = [224];
export const modules = {
  37065: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => GO
    });
    var YB = GB(56);
    const DB = "newPlayerDeal",
      QB = 36e5,
      oB = [4, 12, 20, 20, 30];
    const jB = 12 * QB;

    function yB(BB) {
      return BB - jB
    }

    function JB(BB, OB, GB) {
      const YB = yB(GB);
      return OB >= YB && OB < GB && (null === BB.lastShownAt || BB.lastShownAt < YB)
    }

    function MB(BB, OB) {
      const {
        arrival: GB,
        now: YB,
        endsAt: DB,
        playedOnDevice: jB
      } = OB;
      return !(YB >= DB || !jB) && (!(!JB(BB, YB, DB) && 0 !== BB.shownCount && null !== BB.lastShownAt) || "open" === GB && YB - BB.lastShownAt >= (yB = BB.shownCount, oB[Math.min(Math.max(yB, 1), oB.length) - 1] * QB));
      var yB
    }
    var PB = GB(331),
      zB = GB(1516),
      lB = GB(16),
      pB = GB(2444),
      qB = GB(3393),
      ZB = GB(3396),
      NB = GB(2042),
      RB = GB(1186),
      WB = GB(1121);
    var AB = GB(1400),
      VB = GB(31),
      SB = GB(677),
      nB = GB(2756),
      UB = GB(1403),
      fB = GB(2763),
      kB = GB(2437),
      dB = GB(1112),
      KB = GB(2807),
      uB = GB(2814),
      mB = GB(3435),
      IB = GB(1175),
      FB = GB(1485),
      iB = GB(3458),
      LB = GB(34838),
      gB = GB(2822),
      rB = GB(34845),
      XB = GB(1282);

    function wB(BB) {
      let {
        shownView: OB,
        close: GB
      } = BB;
      const {
        t: DB
      } = (0, IB.H)(), QB = (0, KB.S)(), {
        purchaseUnderWay: oB,
        notice: jB,
        needsLogin: yB,
        buyPack: JB
      } = (0, rB.c)("popup", ((BB, OB) => {
        GB(!1), (0, mB.e)(BB, OB)
      })), MB = null === QB;
      (0, YB.useEffect)((() => {
        MB && GB(!1)
      }), [MB, GB]);
      const PB = null !== QB && void 0 !== QB ? QB : OB;
      return (0, XB.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, XB.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: DB("newPlayerDeal:title")
        }), (0, XB.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: DB("newPlayerDeal:samePrice")
        }), (0, XB.jsx)(LB.d, {
          className: "NewPlayerDealClockBig",
          endsAt: PB.endsAt
        }), (0, XB.jsx)(LB.g, {
          view: PB,
          needsLogin: yB,
          busy: oB,
          highlight: null,
          onBuy: BB => {
            JB(PB, BB)
          }
        }), (0, XB.jsx)(iB.i, {
          notice: jB,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, XB.jsx)(iB.d, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, XB.jsx)(FB.f, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            GB(!0)
          },
          children: DB("newPlayerDeal:noThanks")
        })]
      })
    }

    function EB(BB) {
      let {
        arm: OB,
        children: GB
      } = BB;
      return (0, YB.useEffect)((() => {
        (0, KB.I)(!0)
      }), []), (0, KB.T)(OB, "popup"), GB
    }

    function cB(BB) {
      let OB = null;
      AB.NotificationProvider.showCustomPopup({
        body: GB => (0, XB.jsx)(EB, {
          arm: BB.arm,
          children: (0, XB.jsx)(wB, {
            shownView: BB,
            close: BB => {
              OB ??= BB, GB()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((GB => {
        (0, KB.I)(!1), !1 !== OB && "notificationTornDown" !== GB && (0, KB.D)("new_player_deal.close", (0, gB.b)(BB.arm, "popup"))
      }))
    }
    const hB = 2500,
      aB = 6e4;
    const eB = 500,
      TB = 6e4;

    function bB(BB) {
      const OB = Date.now() + TB;
      return new Promise((GB => {
        const YB = () => {
          BB() ? (0, fB.g)() || AB.NotificationProvider.hasPopup() || (0, UB.k)() || (0, KB.q)() || null !== lB.c.get("openEverythingMenuName") ? Date.now() > OB ? GB(!1) : setTimeout(YB, eB) : GB(!0) : GB(!1)
        };
        YB()
      }))
    }
    const CB = "newPlayerDealPointerDeferred_";
    let HB = !1,
      vB = null;

    function sB(BB, OB) {
      var GB;
      return (null === (GB = vB) || void 0 === GB ? void 0 : GB.accountId) === OB && vB.shownCount === BB.shownCount
    }

    function xB(BB, OB, GB) {
      return !!sB(OB, GB) && (vB = null, (0, KB.v)(GB), cB(BB), !0)
    }
    async function tB(BB, OB, GB, YB) {
      if (HB) return !1;
      let DB;
      HB = !0;
      try {
        DB = await async function(BB) {
          const {
            newPlayerDeal: OB,
            counted: GB
          } = await (0, WB.postJsonWithMetricsCookiesAndJsonResponse)(`${RB.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: BB
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: OB,
            counted: !0 === GB
          }
        }(OB.shownCount)
      } catch (QB) {
        return console.error("New player deal: counting a showing of its popup failed", QB), !1
      } finally {
        HB = !1
      }
      return (0, KB.M)(GB, DB.newPlayerDeal), DB.counted && null !== DB.newPlayerDeal && (vB = {
        accountId: YB,
        shownCount: DB.newPlayerDeal.shownCount
      }, "landingPage" === lB.c.get("gameState") && xB(BB, DB.newPlayerDeal, YB)), !0
    }
    let BO = null;

    function OO(BB, OB, GB, DB, QB) {
      var oB;
      const {
        gameState: jB
      } = (0, lB.o)(["gameState"]), zB = "landingPage" === jB, {
        pointing: pB
      } = (0, nB.h)(), qB = (0, YB.useRef)(pB);
      qB.current = pB;
      const ZB = (0, YB.useRef)(BB);
      ZB.current = BB;
      const RB = (0, YB.useRef)(OB);
      RB.current = OB;
      const WB = (0, YB.useRef)(GB);
      WB.current = GB;
      const [AB, UB] = (0, YB.useState)(null), fB = (0, YB.useRef)(0), kB = (0, YB.useRef)(0), dB = (0, YB.useRef)(!1), KB = (0, YB.useCallback)((BB => {
        "open" === function(BB) {
          const OB = BB ? (0, SB.getVisitSessionId)() : (0, SB.peekVisitSessionId)(),
            GB = null !== OB && OB === BO ? "return" : "open";
          return BO = OB, GB
        }(BB) && (dB.current = !0), fB.current++, UB({
          seq: fB.current,
          kind: dB.current ? "open" : "return"
        })
      }), []);
      (0, YB.useEffect)((() => {
        if (!zB) return void UB(null);
        KB(!0);
        const BB = () => {
          "visible" === document.visibilityState && KB(!0)
        };
        return document.addEventListener("visibilitychange", BB), () => {
          document.removeEventListener("visibilitychange", BB)
        }
      }), [zB, KB]);
      const uB = null !== (oB = null === BB || void 0 === BB ? void 0 : BB.endsAt) && void 0 !== oB ? oB : null;
      (0, YB.useEffect)((() => {
        if (!zB || null === uB) return;
        const BB = yB(uB) - Date.now();
        if (BB <= 0 || BB > NB.b) return;
        const OB = setTimeout((() => {
          KB(!1)
        }), BB);
        return () => {
          clearTimeout(OB)
        }
      }), [zB, uB, KB]);
      const mB = null !== BB && null !== DB && null === QB;
      (0, YB.useEffect)((() => {
        if (null === AB || !mB || kB.current >= AB.seq) return;
        const BB = () => fB.current === AB.seq && "landingPage" === lB.c.get("gameState"),
          OB = setTimeout((() => {
            const OB = ZB.current,
              GB = RB.current;
            if (null === OB || null === GB || !BB()) return;
            kB.current = AB.seq;
            const YB = Date.now(),
              QB = sB(GB, DB);
            if (!(QB || MB(GB, {
                arrival: AB.kind,
                now: YB,
                endsAt: OB.endsAt,
                playedOnDevice: VB.g.getItem(PB.Mb) > 0
              }))) return void(dB.current = !1);
            const oB = JB(GB, YB, OB.endsAt);
            bB(BB).then((async BB => {
              const OB = ZB.current;
              BB && null !== OB && RB.current === GB && (!qB.current || oB || function(BB, OB) {
                return VB.g.getItem(CB + BB) === OB
              }(DB, GB.shownCount) ? QB ? xB(OB, GB, DB) && (dB.current = !1) : await tB(OB, GB, WB.current, DB) && (dB.current = !1) : function(BB, OB) {
                VB.g.setItem(CB + BB, OB)
              }(DB, GB.shownCount))
            }))
          }), hB);
        return () => {
          clearTimeout(OB)
        }
      }), [AB, mB, DB])
    }

    function GO() {
      const {
        userContext: BB
      } = (0, dB.d)(), OB = (0, pB.usePurchasesAllowed)(), [GB, QB] = (0, YB.useState)(uB.j);
      (0, YB.useEffect)((() => (QB((0, uB.j)()), (0, uB.l)(QB))), []);
      const oB = (0, KB.c)(BB);
      ! function(BB, OB, GB) {
        const [QB, oB] = (0, YB.useState)(0);
        (0, YB.useEffect)((() => {
          if (!OB || null === BB) return;
          if (null !== GB) return void(0, KB.G)(BB, (0, uB.e)());
          if (null !== (0, KB.h)(BB)) return;
          let YB, QB = !1;
          return (0, ZB.getBillingClient)().getOfferings(DB).then((OB => {
            let {
              offering: GB
            } = OB;
            (0, KB.G)(BB, null === GB ? [] : GB.packages.filter(qB.isPricedPackage))
          }), (BB => {
            console.error("New player deal: loading its prices failed", BB), QB || (YB = setTimeout((() => {
              oB((BB => BB + 1))
            }), aB))
          })), () => {
            QB = !0, clearTimeout(YB)
          }
        }), [BB, OB, GB, QB])
      }(oB, null !== (0, KB.i)(BB) && (OB || null !== GB), GB);
      const jB = (0, KB.S)();
      return OO(jB, (0, KB.i)(BB), BB, oB, GB),
        function() {
          const {
            userContext: BB
          } = (0, dB.d)(), {
            gameState: OB
          } = (0, lB.o)(["gameState"]);
          (0, YB.useEffect)((() => {
            if ("landingPage" !== OB || !BB.isLoggedIn() && !(0, pB.guestsMayBuy)()) return;
            const GB = (0, KB.g)(BB),
              YB = (0, kB.B)((BB => GB.includes(BB.item)));
            null !== YB && ((0, zB.reportAnalyticsClick)({
              id: "store.login_resume",
              value: YB.item
            }), (0, kB.p)({
              mode: "self",
              source: "loginResume",
              highlight: YB.item
            }))
          }), [BB, OB])
        }(),
        function(BB, OB, GB) {
          const DB = (0, YB.useRef)(null);
          (0, YB.useEffect)((() => {
            if (null === GB || null === BB || null === OB || DB.current === GB) return;
            DB.current = GB;
            const YB = BB.packs[0].pack;
            switch (GB.show) {
              case "popup":
                (0, KB.v)(OB), cB(BB);
                break;
              case "store":
                (0, kB.p)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, kB.p)({
                  mode: "self",
                  source: "loginResume",
                  highlight: YB.packageId
                });
                break;
              case "bought":
                (0, kB.p)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, KB.r)(OB), (0, rB.b)(YB.gems);
                break;
              case "gift":
                (0, kB.p)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [GB, BB, OB])
        }(jB, oB, GB), null
    }
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
  34842: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);