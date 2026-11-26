export const id = 224;
export const ids = [224];
export const modules = {
  37270: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => LB
    });
    var AH = LH(45);
    const rH = "newPlayerDeal",
      SH = 36e5,
      hH = [4, 12, 20, 20, 30];
    const tH = 12 * SH;

    function zH(HH) {
      return HH - tH
    }

    function CH(HH, BH, LH) {
      const AH = zH(LH);
      return BH >= AH && BH < LH && (null === HH.lastShownAt || HH.lastShownAt < AH)
    }

    function EH(HH, BH) {
      const {
        arrival: LH,
        now: AH,
        endsAt: rH,
        playedOnDevice: tH
      } = BH;
      return !(AH >= rH || !tH) && (!(!CH(HH, AH, rH) && 0 !== HH.shownCount && null !== HH.lastShownAt) || "open" === LH && AH - HH.lastShownAt >= (zH = HH.shownCount, hH[Math.min(Math.max(zH, 1), hH.length) - 1] * SH));
      var zH
    }
    var XH = LH(304),
      GH = LH(1475),
      YH = LH(15),
      uH = LH(2397),
      QH = LH(3337),
      WH = LH(3340),
      MH = LH(2027),
      xH = LH(1131),
      vH = LH(1070);
    var PH = LH(1352),
      TH = LH(30),
      UH = LH(656),
      VH = LH(2727),
      OH = LH(1361),
      bH = LH(2734),
      kH = LH(2388),
      mH = LH(1061),
      oH = LH(2771),
      IH = LH(2780),
      fH = LH(3376),
      lH = LH(1123),
      KH = LH(1455),
      cH = LH(3401),
      eH = LH(35028),
      qH = LH(2789),
      gH = LH(35037),
      NH = LH(1225);

    function RH(HH) {
      let {
        shownView: BH,
        close: LH
      } = HH;
      const {
        t: rH
      } = (0, lH.B)(), SH = (0, oH.S)(), {
        purchaseUnderWay: hH,
        notice: tH,
        needsLogin: zH,
        buyPack: CH
      } = (0, gH.e)("popup", ((HH, BH) => {
        LH(!1), (0, fH.d)(HH, BH)
      })), EH = null === SH;
      (0, AH.useEffect)((() => {
        EH && LH(!1)
      }), [EH, LH]);
      const XH = null !== SH && void 0 !== SH ? SH : BH;
      return (0, NH.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, NH.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: rH("newPlayerDeal:title")
        }), (0, NH.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: rH("newPlayerDeal:samePrice")
        }), (0, NH.jsx)(eH.b, {
          className: "NewPlayerDealClockBig",
          endsAt: XH.endsAt
        }), (0, NH.jsx)(eH.c, {
          view: XH,
          needsLogin: zH,
          busy: hH,
          highlight: null,
          onBuy: HH => {
            CH(XH, HH)
          }
        }), (0, NH.jsx)(cH.e, {
          notice: tH,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, NH.jsx)(cH.b, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, NH.jsx)(KH.i, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            LH(!0)
          },
          children: rH("newPlayerDeal:noThanks")
        })]
      })
    }

    function jH(HH) {
      let {
        arm: BH,
        children: LH
      } = HH;
      return (0, AH.useEffect)((() => {
        (0, oH.J)(!0)
      }), []), (0, oH.V)(BH, "popup"), LH
    }

    function nH(HH) {
      let BH = null;
      PH.NotificationProvider.showCustomPopup({
        body: LH => (0, NH.jsx)(jH, {
          arm: HH.arm,
          children: (0, NH.jsx)(RH, {
            shownView: HH,
            close: HH => {
              BH ??= HH, LH()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((LH => {
        (0, oH.J)(!1), !1 !== BH && "notificationTornDown" !== LH && (0, oH.F)("new_player_deal.close", (0, qH.e)(HH.arm, "popup"))
      }))
    }
    const FH = 2500,
      DH = 6e4;
    const wH = 500,
      ZH = 6e4;

    function dH(HH) {
      const BH = Date.now() + ZH;
      return new Promise((LH => {
        const AH = () => {
          HH() ? (0, bH.e)() || PH.NotificationProvider.hasPopup() || (0, OH.n)() || (0, oH.t)() || null !== YH.c.get("openEverythingMenuName") ? Date.now() > BH ? LH(!1) : setTimeout(AH, wH) : LH(!0) : LH(!1)
        };
        AH()
      }))
    }
    const aH = "newPlayerDealPointerDeferred_";
    let sH = !1,
      JH = null;

    function iH(HH, BH) {
      var LH;
      return (null === (LH = JH) || void 0 === LH ? void 0 : LH.accountId) === BH && JH.shownCount === HH.shownCount
    }

    function pH(HH, BH, LH) {
      return !!iH(BH, LH) && (JH = null, (0, oH.z)(LH), nH(HH), !0)
    }
    async function yH(HH, BH, LH, AH) {
      if (sH) return !1;
      let rH;
      sH = !0;
      try {
        rH = await async function(HH) {
          const {
            newPlayerDeal: BH,
            counted: LH
          } = await (0, vH.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: HH
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: BH,
            counted: !0 === LH
          }
        }(BH.shownCount)
      } catch (SH) {
        return console.error("New player deal: counting a showing of its popup failed", SH), !1
      } finally {
        sH = !1
      }
      return (0, oH.N)(LH, rH.newPlayerDeal), rH.counted && null !== rH.newPlayerDeal && (JH = {
        accountId: AH,
        shownCount: rH.newPlayerDeal.shownCount
      }, "landingPage" === YH.c.get("gameState") && pH(HH, rH.newPlayerDeal, AH)), !0
    }
    let HB = null;

    function BB(HH, BH, LH, rH, SH) {
      var hH;
      const {
        gameState: tH
      } = (0, YH.m)(["gameState"]), GH = "landingPage" === tH, {
        pointing: uH
      } = (0, VH.g)(), QH = (0, AH.useRef)(uH);
      QH.current = uH;
      const WH = (0, AH.useRef)(HH);
      WH.current = HH;
      const xH = (0, AH.useRef)(BH);
      xH.current = BH;
      const vH = (0, AH.useRef)(LH);
      vH.current = LH;
      const [PH, OH] = (0, AH.useState)(null), bH = (0, AH.useRef)(0), kH = (0, AH.useRef)(0), mH = (0, AH.useRef)(!1), oH = (0, AH.useCallback)((HH => {
        "open" === function(HH) {
          const BH = HH ? (0, UH.c)() : (0, UH.peekVisitSessionId)(),
            LH = null !== BH && BH === HB ? "return" : "open";
          return HB = BH, LH
        }(HH) && (mH.current = !0), bH.current++, OH({
          seq: bH.current,
          kind: mH.current ? "open" : "return"
        })
      }), []);
      (0, AH.useEffect)((() => {
        if (!GH) return void OH(null);
        oH(!0);
        const HH = () => {
          "visible" === document.visibilityState && oH(!0)
        };
        return document.addEventListener("visibilitychange", HH), () => {
          document.removeEventListener("visibilitychange", HH)
        }
      }), [GH, oH]);
      const IH = null !== (hH = null === HH || void 0 === HH ? void 0 : HH.endsAt) && void 0 !== hH ? hH : null;
      (0, AH.useEffect)((() => {
        if (!GH || null === IH) return;
        const HH = zH(IH) - Date.now();
        if (HH <= 0 || HH > MH.c) return;
        const BH = setTimeout((() => {
          oH(!1)
        }), HH);
        return () => {
          clearTimeout(BH)
        }
      }), [GH, IH, oH]);
      const fH = null !== HH && null !== rH && null === SH;
      (0, AH.useEffect)((() => {
        if (null === PH || !fH || kH.current >= PH.seq) return;
        const HH = () => bH.current === PH.seq && "landingPage" === YH.c.get("gameState"),
          BH = setTimeout((() => {
            const BH = WH.current,
              LH = xH.current;
            if (null === BH || null === LH || !HH()) return;
            kH.current = PH.seq;
            const AH = Date.now(),
              SH = iH(LH, rH);
            if (!(SH || EH(LH, {
                arrival: PH.kind,
                now: AH,
                endsAt: BH.endsAt,
                playedOnDevice: TH.e.getItem(XH.Qb) > 0
              }))) return void(mH.current = !1);
            const hH = CH(LH, AH, BH.endsAt);
            dH(HH).then((async HH => {
              const BH = WH.current;
              HH && null !== BH && xH.current === LH && (!QH.current || hH || function(HH, BH) {
                return TH.e.getItem(aH + HH) === BH
              }(rH, LH.shownCount) ? SH ? pH(BH, LH, rH) && (mH.current = !1) : await yH(BH, LH, vH.current, rH) && (mH.current = !1) : function(HH, BH) {
                TH.e.setItem(aH + HH, BH)
              }(rH, LH.shownCount))
            }))
          }), FH);
        return () => {
          clearTimeout(BH)
        }
      }), [PH, fH, rH])
    }

    function LB() {
      const {
        userContext: HH
      } = (0, mH.e)(), BH = (0, uH.usePurchasesAllowed)(), [LH, SH] = (0, AH.useState)(IH.k);
      (0, AH.useEffect)((() => (SH((0, IH.k)()), (0, IH.n)(SH))), []);
      const hH = (0, oH.e)(HH);
      ! function(HH, BH, LH) {
        const [SH, hH] = (0, AH.useState)(0);
        (0, AH.useEffect)((() => {
          if (!BH || null === HH) return;
          if (null !== LH) return void(0, oH.I)(HH, (0, IH.h)());
          if (null !== (0, oH.j)(HH)) return;
          let AH, SH = !1;
          return (0, WH.getBillingClient)().getOfferings(rH).then((BH => {
            let {
              offering: LH
            } = BH;
            (0, oH.I)(HH, null === LH ? [] : LH.packages.filter(QH.isPricedPackage))
          }), (HH => {
            console.error("New player deal: loading its prices failed", HH), SH || (AH = setTimeout((() => {
              hH((HH => HH + 1))
            }), DH))
          })), () => {
            SH = !0, clearTimeout(AH)
          }
        }), [HH, BH, LH, SH])
      }(hH, null !== (0, oH.l)(HH) && (BH || null !== LH), LH);
      const tH = (0, oH.S)();
      return BB(tH, (0, oH.l)(HH), HH, hH, LH),
        function() {
          const {
            userContext: HH
          } = (0, mH.e)(), {
            gameState: BH
          } = (0, YH.m)(["gameState"]);
          (0, AH.useEffect)((() => {
            if ("landingPage" !== BH || !HH.isLoggedIn() && !(0, uH.guestsMayBuy)()) return;
            const LH = (0, oH.h)(HH),
              AH = (0, kH.z)((HH => LH.includes(HH.item)));
            null !== AH && ((0, GH.reportAnalyticsClick)({
              id: "store.login_resume",
              value: AH.item
            }), (0, kH.k)({
              mode: "self",
              source: "loginResume",
              highlight: AH.item
            }))
          }), [HH, BH])
        }(),
        function(HH, BH, LH) {
          const rH = (0, AH.useRef)(null);
          (0, AH.useEffect)((() => {
            if (null === LH || null === HH || null === BH || rH.current === LH) return;
            rH.current = LH;
            const AH = HH.packs[0].pack;
            switch (LH.show) {
              case "popup":
                (0, oH.z)(BH), nH(HH);
                break;
              case "store":
                (0, kH.k)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, kH.k)({
                  mode: "self",
                  source: "loginResume",
                  highlight: AH.packageId
                });
                break;
              case "bought":
                (0, kH.k)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, oH.w)(BH), (0, gH.d)(AH.gems);
                break;
              case "gift":
                (0, kH.k)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [LH, HH, BH])
        }(tH, hH, LH), null
    }
  },
  35028: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH,
      c: () => WH
    });
    LH(35030);
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1123),
      tH = LH(1455),
      zH = LH(2795),
      CH = LH(1315),
      EH = LH(2580),
      XH = LH(3392),
      GH = LH(2406),
      YH = LH(1225);

    function uH(HH) {
      let {
        endsAt: BH,
        className: LH
      } = HH;
      return (0, YH.jsxs)("span", {
        className: SH()("NewPlayerDealClock", LH),
        children: [(0, YH.jsx)(CH.c, {
          name: "hourglass"
        }), (0, YH.jsx)(zH.i, {
          toTime: BH
        })]
      })
    }

    function QH(HH) {
      let {
        offered: BH,
        needsLogin: LH,
        busy: AH,
        highlight: rH,
        onBuy: zH
      } = HH;
      const {
        t: CH
      } = (0, hH.B)(), {
        pack: uH
      } = BH, QH = (0, XH.f)(BH.package);
      return (0, YH.jsxs)("div", {
        className: SH()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: rH
        }),
        children: [(0, YH.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, YH.jsx)("img", {
            src: GH.d[BH.tier],
            alt: "",
            draggable: !1
          }), (0, YH.jsx)("span", {
            className: "NewPlayerDealTag",
            children: CH("newPlayerDeal:tag")
          })]
        }), (0, YH.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, YH.jsx)(EH.e, {
            className: "NewPlayerDealPackAmount",
            amount: uH.gems
          })
        }), (0, YH.jsx)(tH.u, {
          className: "NewPlayerDealBuy",
          loading: AH,
          onClick: zH,
          ariaLabel: CH("newPlayerDeal:buyLabel", {
            amount: uH.gems.toLocaleString(),
            price: QH
          }),
          children: CH(LH ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: QH
          })
        })]
      })
    }

    function WH(HH) {
      let {
        view: BH,
        needsLogin: LH,
        busy: rH,
        highlight: tH,
        onBuy: zH
      } = HH;
      const {
        t: CH
      } = (0, hH.B)();
      return (0, YH.jsxs)("div", {
        className: SH()("NewPlayerDealPacks", BH.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [BH.packs.map(((HH, BH) => (0, YH.jsxs)(AH.Fragment, {
          children: [BH > 0 && (0, YH.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, YH.jsx)("i", {})
          }), (0, YH.jsx)(QH, {
            offered: HH,
            needsLogin: LH,
            busy: rH,
            highlight: tH === HH.pack.packageId,
            onBuy: () => {
              zH(HH)
            }
          })]
        }, HH.pack.packageId))), (0, YH.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, YH.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: CH("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35037: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => bH,
      e: () => mH
    });
    LH(35030);
    var AH = LH(3388),
      rH = LH(1475),
      SH = LH(2397),
      hH = LH(3376),
      tH = LH(3356),
      zH = LH(3382),
      CH = LH(3340),
      EH = LH(1123),
      XH = LH(1352),
      GH = LH(1061),
      YH = LH(1455),
      uH = LH(1315),
      QH = LH(2580),
      WH = LH(2930),
      MH = LH(2771),
      xH = LH(2780),
      vH = LH(2789),
      PH = LH(1225);
    const TH = new zH.c(CH.getBillingClient, CH.addPurchaseRecordListener);
    let UH = !1;

    function VH(HH, BH) {
      null !== HH && (0, MH.q)(HH) || ((0, rH.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${BH.pack.packageId}`
      }), null !== HH && (0, MH.w)(HH), bH(BH.pack.gems))
    }

    function OH(HH, BH, LH) {
      const rH = (0, MH.e)(BH);
      switch (HH.kind) {
        case "completed":
          VH(rH, LH);
          break;
        case "pending":
          SH = HH.intentId, hH = () => {
            WH.h.refresh(), VH(rH, LH)
          }, UH || (UH = !0, TH.listen()), TH.follow(SH, hH);
          break;
        case "unknownPackage":
          (0, MH.N)(BH, null);
          break;
        case "failed":
          HH.errorKey === AH.c.newPlayerDealUnavailable && (0, MH.N)(BH, null)
      }
      var SH, hH
    }

    function bH(HH) {
      XH.NotificationProvider.showCustomPopup({
        body: BH => (0, PH.jsx)(kH, {
          gems: HH,
          close: BH
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function kH(HH) {
      let {
        gems: BH,
        close: LH
      } = HH;
      const {
        t: AH
      } = (0, EH.B)();
      return (0, PH.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, PH.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, PH.jsx)(uH.c, {
            name: "circle-check"
          }), (0, PH.jsx)(QH.e, {
            amount: BH
          }), (0, PH.jsx)("span", {
            children: AH("newPlayerDeal:added")
          })]
        }), (0, PH.jsx)(YH.u, {
          className: "NewPlayerDealAddedOk",
          onClick: LH,
          children: AH("general:ok")
        })]
      })
    }

    function mH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.d;
      const {
        userContext: LH
      } = (0, GH.e)(), {
        purchaseUnderWay: AH,
        notice: rH,
        buy: zH
      } = (0, tH.c)(BH), CH = (0, xH.k)(), EH = LH.mayBuy() || (0, SH.guestsMayBuy)(), XH = null === CH ? !EH : CH.guest && !LH.isLoggedIn();
      return {
        purchaseUnderWay: AH,
        notice: rH,
        needsLogin: XH,
        buyPack: function(AH, rH) {
          (0, MH.F)("new_player_deal.buy", (0, vH.e)(AH.arm, HH, rH.pack.packageId)), null === CH ? zH(function(HH) {
            return {
              sku: HH.pack.packageId,
              tier: HH.tier,
              amount: HH.pack.gems,
              bonusPercent: 0,
              package: HH.package
            }
          }(rH), null, {
            followPending: !1
          }).then((HH => {
            OH(HH, LH, rH)
          })) : XH ? BH(rH.pack.packageId, null) : VH((0, MH.e)(LH), rH)
        }
      }
    }
  },
  35030: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);