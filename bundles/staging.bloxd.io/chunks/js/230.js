export const id = 230;
export const ids = [230];
export const modules = {
  37450: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => GJ
    });
    var yR = GR(66);
    const tR = "newPlayerDeal",
      uR = 36e5,
      ZR = [4, 12, 20, 20, 30];
    const qR = 12 * uR;

    function iR(RR) {
      return RR - qR
    }

    function fR(RR, JR, GR) {
      const yR = iR(GR);
      return JR >= yR && JR < GR && (null === RR.lastShownAt || RR.lastShownAt < yR)
    }

    function VR(RR, JR) {
      const {
        arrival: GR,
        now: yR,
        endsAt: tR,
        playedOnDevice: qR
      } = JR;
      return !(yR >= tR || !qR) && (!(!fR(RR, yR, tR) && 0 !== RR.shownCount && null !== RR.lastShownAt) || "open" === GR && yR - RR.lastShownAt >= (iR = RR.shownCount, ZR[Math.min(Math.max(iR, 1), ZR.length) - 1] * uR));
      var iR
    }
    var KR = GR(359),
      wR = GR(1618),
      rR = GR(25),
      eR = GR(3217),
      aR = GR(4171),
      LR = GR(4175),
      nR = GR(2154),
      UR = GR(1282),
      WR = GR(1201);
    var AR = GR(1493),
      CR = GR(46),
      XR = GR(726),
      MR = GR(3626),
      BR = GR(1496),
      lR = GR(3634),
      pR = GR(3213),
      gR = GR(1196),
      bR = GR(3663),
      vR = GR(3670),
      OR = GR(4214),
      xR = GR(1270),
      NR = GR(1590),
      DR = GR(4231),
      HR = GR(35208),
      oR = GR(3674),
      cR = GR(35218),
      PR = GR(1378);

    function IR(RR) {
      let {
        shownView: JR,
        close: GR
      } = RR;
      const {
        t: tR
      } = (0, xR.A)(), uR = (0, bR.K)(), {
        purchaseUnderWay: ZR,
        notice: qR,
        needsLogin: iR,
        buyPack: fR
      } = (0, cR.f)("popup", ((RR, JR) => {
        GR(!1), (0, OR.c)(RR, JR)
      })), VR = null === uR;
      (0, yR.useEffect)((() => {
        VR && GR(!1)
      }), [VR, GR]);
      const KR = null !== uR && void 0 !== uR ? uR : JR;
      return (0, PR.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, PR.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: tR("newPlayerDeal:title")
        }), (0, PR.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: tR("newPlayerDeal:samePrice")
        }), (0, PR.jsx)(HR.b, {
          className: "NewPlayerDealClockBig",
          endsAt: KR.endsAt
        }), (0, PR.jsx)(HR.d, {
          view: KR,
          needsLogin: iR,
          busy: ZR,
          highlight: null,
          onBuy: RR => {
            fR(KR, RR)
          }
        }), (0, PR.jsx)(DR.j, {
          notice: qR,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, PR.jsx)(DR.c, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, PR.jsx)(NR.M, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            GR(!0)
          },
          children: tR("newPlayerDeal:noThanks")
        })]
      })
    }

    function mR(RR) {
      let {
        arm: JR,
        children: GR
      } = RR;
      return (0, yR.useEffect)((() => {
        (0, bR.D)(!0)
      }), []), (0, bR.L)(JR, "popup"), GR
    }

    function zR(RR) {
      let JR = null;
      AR.NotificationProvider.showCustomPopup({
        body: GR => (0, PR.jsx)(mR, {
          arm: RR.arm,
          children: (0, PR.jsx)(IR, {
            shownView: RR,
            close: RR => {
              JR ??= RR, GR()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((GR => {
        (0, bR.D)(!1), !1 !== JR && "notificationTornDown" !== GR && (0, bR.v)("new_player_deal.close", (0, oR.d)(RR.arm, "popup"))
      }))
    }
    const SR = 2500,
      jR = 6e4;
    const dR = 500,
      ER = 6e4;

    function YR(RR) {
      const JR = Date.now() + ER;
      return new Promise((GR => {
        const yR = () => {
          RR() ? (0, lR.f)() || AR.NotificationProvider.hasPopup() || (0, BR.h)() || (0, bR.l)() || null !== rR.d.get("openEverythingMenuName") ? Date.now() > JR ? GR(!1) : setTimeout(yR, dR) : GR(!0) : GR(!1)
        };
        yR()
      }))
    }
    const kR = "newPlayerDealPointerDeferred_";
    let QR = !1,
      FR = null;

    function TR(RR, JR) {
      var GR;
      return (null === (GR = FR) || void 0 === GR ? void 0 : GR.accountId) === JR && FR.shownCount === RR.shownCount
    }

    function sR(RR, JR, GR) {
      return !!TR(JR, GR) && (FR = null, (0, bR.q)(GR), zR(RR), !0)
    }
    async function hR(RR, JR, GR, yR) {
      if (QR) return !1;
      let tR;
      QR = !0;
      try {
        tR = await async function(RR) {
          const {
            newPlayerDeal: JR,
            counted: GR
          } = await (0, WR.postJsonWithMetricsCookiesAndJsonResponse)(`${UR.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: RR
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: JR,
            counted: !0 === GR
          }
        }(JR.shownCount)
      } catch (uR) {
        return console.error("New player deal: counting a showing of its popup failed", uR), !1
      } finally {
        QR = !1
      }
      return (0, bR.H)(GR, tR.newPlayerDeal), tR.counted && null !== tR.newPlayerDeal && (FR = {
        accountId: yR,
        shownCount: tR.newPlayerDeal.shownCount
      }, "landingPage" === rR.d.get("gameState") && sR(RR, tR.newPlayerDeal, yR)), !0
    }
    let RJ = null;

    function JJ(RR, JR, GR, tR, uR) {
      var ZR;
      const {
        gameState: qR
      } = (0, rR.o)(["gameState"]), wR = "landingPage" === qR, {
        pointing: eR
      } = (0, MR.e)(), aR = (0, yR.useRef)(eR);
      aR.current = eR;
      const LR = (0, yR.useRef)(RR);
      LR.current = RR;
      const UR = (0, yR.useRef)(JR);
      UR.current = JR;
      const WR = (0, yR.useRef)(GR);
      WR.current = GR;
      const [AR, BR] = (0, yR.useState)(null), lR = (0, yR.useRef)(0), pR = (0, yR.useRef)(0), gR = (0, yR.useRef)(!1), bR = (0, yR.useCallback)((RR => {
        "open" === function(RR) {
          const JR = RR ? (0, XR.getVisitSessionId)() : (0, XR.peekVisitSessionId)(),
            GR = null !== JR && JR === RJ ? "return" : "open";
          return RJ = JR, GR
        }(RR) && (gR.current = !0), lR.current++, BR({
          seq: lR.current,
          kind: gR.current ? "open" : "return"
        })
      }), []);
      (0, yR.useEffect)((() => {
        if (!wR) return void BR(null);
        bR(!0);
        const RR = () => {
          "visible" === document.visibilityState && bR(!0)
        };
        return document.addEventListener("visibilitychange", RR), () => {
          document.removeEventListener("visibilitychange", RR)
        }
      }), [wR, bR]);
      const vR = null !== (ZR = null === RR || void 0 === RR ? void 0 : RR.endsAt) && void 0 !== ZR ? ZR : null;
      (0, yR.useEffect)((() => {
        if (!wR || null === vR) return;
        const RR = iR(vR) - Date.now();
        if (RR <= 0 || RR > nR.e) return;
        const JR = setTimeout((() => {
          bR(!1)
        }), RR);
        return () => {
          clearTimeout(JR)
        }
      }), [wR, vR, bR]);
      const OR = null !== RR && null !== tR && null === uR;
      (0, yR.useEffect)((() => {
        if (null === AR || !OR || pR.current >= AR.seq) return;
        const RR = () => lR.current === AR.seq && "landingPage" === rR.d.get("gameState"),
          JR = setTimeout((() => {
            const JR = LR.current,
              GR = UR.current;
            if (null === JR || null === GR || !RR()) return;
            pR.current = AR.seq;
            const yR = Date.now(),
              uR = TR(GR, tR);
            if (!(uR || VR(GR, {
                arrival: AR.kind,
                now: yR,
                endsAt: JR.endsAt,
                playedOnDevice: CR.i.getItem(KR.Eb) > 0
              }))) return void(gR.current = !1);
            const ZR = fR(GR, yR, JR.endsAt);
            YR(RR).then((async RR => {
              const JR = LR.current;
              RR && null !== JR && UR.current === GR && (!aR.current || ZR || function(RR, JR) {
                return CR.i.getItem(kR + RR) === JR
              }(tR, GR.shownCount) ? uR ? sR(JR, GR, tR) && (gR.current = !1) : await hR(JR, GR, WR.current, tR) && (gR.current = !1) : function(RR, JR) {
                CR.i.setItem(kR + RR, JR)
              }(tR, GR.shownCount))
            }))
          }), SR);
        return () => {
          clearTimeout(JR)
        }
      }), [AR, OR, tR])
    }

    function GJ() {
      const {
        userContext: RR
      } = (0, gR.d)(), JR = (0, eR.usePurchasesAllowed)(), [GR, uR] = (0, yR.useState)(vR.i);
      (0, yR.useEffect)((() => (uR((0, vR.i)()), (0, vR.l)(uR))), []);
      const ZR = (0, bR.b)(RR);
      ! function(RR, JR, GR) {
        const [uR, ZR] = (0, yR.useState)(0);
        (0, yR.useEffect)((() => {
          if (!JR || null === RR) return;
          if (null !== GR) return void(0, bR.z)(RR, (0, vR.c)());
          if (null !== (0, bR.g)(RR)) return;
          let yR, uR = !1;
          return (0, LR.getBillingClient)().getOfferings(tR).then((JR => {
            let {
              offering: GR
            } = JR;
            (0, bR.z)(RR, null === GR ? [] : GR.packages.filter(aR.isPricedPackage))
          }), (RR => {
            console.error("New player deal: loading its prices failed", RR), uR || (yR = setTimeout((() => {
              ZR((RR => RR + 1))
            }), jR))
          })), () => {
            uR = !0, clearTimeout(yR)
          }
        }), [RR, JR, GR, uR])
      }(ZR, null !== (0, bR.h)(RR) && (JR || null !== GR), GR);
      const qR = (0, bR.K)();
      return JJ(qR, (0, bR.h)(RR), RR, ZR, GR),
        function() {
          const {
            userContext: RR
          } = (0, gR.d)(), {
            gameState: JR
          } = (0, rR.o)(["gameState"]);
          (0, yR.useEffect)((() => {
            if ("landingPage" !== JR || !RR.isLoggedIn() && !(0, eR.guestsMayBuy)()) return;
            const GR = (0, bR.e)(RR),
              yR = (0, pR.A)((RR => GR.includes(RR.item)));
            null !== yR && ((0, wR.reportAnalyticsClick)({
              id: "store.login_resume",
              value: yR.item
            }), (0, pR.m)({
              mode: "self",
              source: "loginResume",
              highlight: yR.item
            }))
          }), [RR, JR])
        }(),
        function(RR, JR, GR) {
          const tR = (0, yR.useRef)(null);
          (0, yR.useEffect)((() => {
            if (null === GR || null === RR || null === JR || tR.current === GR) return;
            tR.current = GR;
            const yR = RR.packs[0].pack;
            switch (GR.show) {
              case "popup":
                (0, bR.q)(JR), zR(RR);
                break;
              case "store":
                (0, pR.m)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, pR.m)({
                  mode: "self",
                  source: "loginResume",
                  highlight: yR.packageId
                });
                break;
              case "bought":
                (0, pR.m)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, bR.m)(JR), (0, cR.b)(yR.gems);
                break;
              case "gift":
                (0, pR.m)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [GR, RR, JR])
        }(qR, ZR, GR), null
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
  35211: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);