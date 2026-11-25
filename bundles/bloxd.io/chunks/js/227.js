export const id = 227;
export const ids = [227];
export const modules = {
  37331: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => ir
    });
    var OM = iM(44);
    const SM = "newPlayerDeal",
      jM = 36e5,
      aM = [4, 12, 20, 20, 30];
    const PM = 12 * jM;

    function nM(MM) {
      return MM - PM
    }

    function QM(MM, rM, iM) {
      const OM = nM(iM);
      return rM >= OM && rM < iM && (null === MM.lastShownAt || MM.lastShownAt < OM)
    }

    function zM(MM, rM) {
      const {
        arrival: iM,
        now: OM,
        endsAt: SM,
        playedOnDevice: PM
      } = rM;
      return !(OM >= SM || !PM) && (!(!QM(MM, OM, SM) && 0 !== MM.shownCount && null !== MM.lastShownAt) || "open" === iM && OM - MM.lastShownAt >= (nM = MM.shownCount, aM[Math.min(Math.max(nM, 1), aM.length) - 1] * jM));
      var nM
    }
    var LM = iM(313),
      mM = iM(1548),
      HM = iM(19),
      hM = iM(2401),
      JM = iM(3381),
      dM = iM(3385),
      yM = iM(2060),
      lM = iM(1202),
      EM = iM(1144);
    var UM = iM(1429),
      GM = iM(30),
      CM = iM(673),
      eM = iM(2741),
      bM = iM(1438),
      wM = iM(2743),
      tM = iM(2397),
      gM = iM(1142),
      uM = iM(2779),
      RM = iM(2782),
      pM = iM(3432),
      WM = iM(1188),
      sM = iM(1520),
      DM = iM(3452),
      kM = iM(35070),
      ZM = iM(2787),
      oM = iM(35077),
      fM = iM(1303);

    function YM(MM) {
      let {
        shownView: rM,
        close: iM
      } = MM;
      const {
        t: SM
      } = (0, WM.A)(), jM = (0, uM.S)(), {
        purchaseUnderWay: aM,
        notice: PM,
        needsLogin: nM,
        buyPack: QM
      } = (0, oM.e)("popup", ((MM, rM) => {
        iM(!1), (0, pM.e)(MM, rM)
      })), zM = null === jM;
      (0, OM.useEffect)((() => {
        zM && iM(!1)
      }), [zM, iM]);
      const LM = null !== jM && void 0 !== jM ? jM : rM;
      return (0, fM.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, fM.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: SM("newPlayerDeal:title")
        }), (0, fM.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: SM("newPlayerDeal:samePrice")
        }), (0, fM.jsx)(kM.e, {
          className: "NewPlayerDealClockBig",
          endsAt: LM.endsAt
        }), (0, fM.jsx)(kM.i, {
          view: LM,
          needsLogin: nM,
          busy: aM,
          highlight: null,
          onBuy: MM => {
            QM(LM, MM)
          }
        }), (0, fM.jsx)(DM.i, {
          notice: PM,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, fM.jsx)(DM.b, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, fM.jsx)(sM.e, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            iM(!0)
          },
          children: SM("newPlayerDeal:noThanks")
        })]
      })
    }

    function NM(MM) {
      let {
        arm: rM,
        children: iM
      } = MM;
      return (0, OM.useEffect)((() => {
        (0, uM.M)(!0)
      }), []), (0, uM.U)(rM, "popup"), iM
    }

    function AM(MM) {
      let rM = null;
      UM.NotificationProvider.showCustomPopup({
        body: iM => (0, fM.jsx)(NM, {
          arm: MM.arm,
          children: (0, fM.jsx)(YM, {
            shownView: MM,
            close: MM => {
              rM ??= MM, iM()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((iM => {
        (0, uM.M)(!1), !1 !== rM && "notificationTornDown" !== iM && (0, uM.G)("new_player_deal.close", (0, ZM.b)(MM.arm, "popup"))
      }))
    }
    const xM = 2500,
      vM = 6e4;
    const FM = 500,
      BM = 6e4;

    function XM(MM) {
      const rM = Date.now() + BM;
      return new Promise((iM => {
        const OM = () => {
          MM() ? (0, wM.e)() || UM.NotificationProvider.hasPopup() || (0, bM.m)() || (0, uM.v)() || null !== HM.d.get("openEverythingMenuName") ? Date.now() > rM ? iM(!1) : setTimeout(OM, FM) : iM(!0) : iM(!1)
        };
        OM()
      }))
    }
    const IM = "newPlayerDealPointerDeferred_";
    let KM = !1,
      qM = null;

    function TM(MM, rM) {
      var iM;
      return (null === (iM = qM) || void 0 === iM ? void 0 : iM.accountId) === rM && qM.shownCount === MM.shownCount
    }

    function VM(MM, rM, iM) {
      return !!TM(rM, iM) && (qM = null, (0, uM.A)(iM), AM(MM), !0)
    }
    async function cM(MM, rM, iM, OM) {
      if (KM) return !1;
      let SM;
      KM = !0;
      try {
        SM = await async function(MM) {
          const {
            newPlayerDeal: rM,
            counted: iM
          } = await (0, EM.postJsonWithMetricsCookiesAndJsonResponse)(`${lM.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: MM
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: rM,
            counted: !0 === iM
          }
        }(rM.shownCount)
      } catch (jM) {
        return console.error("New player deal: counting a showing of its popup failed", jM), !1
      } finally {
        KM = !1
      }
      return (0, uM.N)(iM, SM.newPlayerDeal), SM.counted && null !== SM.newPlayerDeal && (qM = {
        accountId: OM,
        shownCount: SM.newPlayerDeal.shownCount
      }, "landingPage" === HM.d.get("gameState") && VM(MM, SM.newPlayerDeal, OM)), !0
    }
    let Mr = null;

    function rr(MM, rM, iM, SM, jM) {
      var aM;
      const {
        gameState: PM
      } = (0, HM.m)(["gameState"]), mM = "landingPage" === PM, {
        pointing: hM
      } = (0, eM.f)(), JM = (0, OM.useRef)(hM);
      JM.current = hM;
      const dM = (0, OM.useRef)(MM);
      dM.current = MM;
      const lM = (0, OM.useRef)(rM);
      lM.current = rM;
      const EM = (0, OM.useRef)(iM);
      EM.current = iM;
      const [UM, bM] = (0, OM.useState)(null), wM = (0, OM.useRef)(0), tM = (0, OM.useRef)(0), gM = (0, OM.useRef)(!1), uM = (0, OM.useCallback)((MM => {
        "open" === function(MM) {
          const rM = MM ? (0, CM.e)() : (0, CM.peekVisitSessionId)(),
            iM = null !== rM && rM === Mr ? "return" : "open";
          return Mr = rM, iM
        }(MM) && (gM.current = !0), wM.current++, bM({
          seq: wM.current,
          kind: gM.current ? "open" : "return"
        })
      }), []);
      (0, OM.useEffect)((() => {
        if (!mM) return void bM(null);
        uM(!0);
        const MM = () => {
          "visible" === document.visibilityState && uM(!0)
        };
        return document.addEventListener("visibilitychange", MM), () => {
          document.removeEventListener("visibilitychange", MM)
        }
      }), [mM, uM]);
      const RM = null !== (aM = null === MM || void 0 === MM ? void 0 : MM.endsAt) && void 0 !== aM ? aM : null;
      (0, OM.useEffect)((() => {
        if (!mM || null === RM) return;
        const MM = nM(RM) - Date.now();
        if (MM <= 0 || MM > yM.c) return;
        const rM = setTimeout((() => {
          uM(!1)
        }), MM);
        return () => {
          clearTimeout(rM)
        }
      }), [mM, RM, uM]);
      const pM = null !== MM && null !== SM && null === jM;
      (0, OM.useEffect)((() => {
        if (null === UM || !pM || tM.current >= UM.seq) return;
        const MM = () => wM.current === UM.seq && "landingPage" === HM.d.get("gameState"),
          rM = setTimeout((() => {
            const rM = dM.current,
              iM = lM.current;
            if (null === rM || null === iM || !MM()) return;
            tM.current = UM.seq;
            const OM = Date.now(),
              jM = TM(iM, SM);
            if (!(jM || zM(iM, {
                arrival: UM.kind,
                now: OM,
                endsAt: rM.endsAt,
                playedOnDevice: GM.g.getItem(LM.Cb) > 0
              }))) return void(gM.current = !1);
            const aM = QM(iM, OM, rM.endsAt);
            XM(MM).then((async MM => {
              const rM = dM.current;
              MM && null !== rM && lM.current === iM && (!JM.current || aM || function(MM, rM) {
                return GM.g.getItem(IM + MM) === rM
              }(SM, iM.shownCount) ? jM ? VM(rM, iM, SM) && (gM.current = !1) : await cM(rM, iM, EM.current, SM) && (gM.current = !1) : function(MM, rM) {
                GM.g.setItem(IM + MM, rM)
              }(SM, iM.shownCount))
            }))
          }), xM);
        return () => {
          clearTimeout(rM)
        }
      }), [UM, pM, SM])
    }

    function ir() {
      const {
        userContext: MM
      } = (0, gM.b)(), rM = (0, hM.usePurchasesAllowed)(), [iM, jM] = (0, OM.useState)(RM.m);
      (0, OM.useEffect)((() => (jM((0, RM.m)()), (0, RM.q)(jM))), []);
      const aM = (0, uM.d)(MM);
      ! function(MM, rM, iM) {
        const [jM, aM] = (0, OM.useState)(0);
        (0, OM.useEffect)((() => {
          if (!rM || null === MM) return;
          if (null !== iM) return void(0, uM.J)(MM, (0, RM.h)());
          if (null !== (0, uM.j)(MM)) return;
          let OM, jM = !1;
          return (0, dM.getBillingClient)().getOfferings(SM).then((rM => {
            let {
              offering: iM
            } = rM;
            (0, uM.J)(MM, null === iM ? [] : iM.packages.filter(JM.isPricedPackage))
          }), (MM => {
            console.error("New player deal: loading its prices failed", MM), jM || (OM = setTimeout((() => {
              aM((MM => MM + 1))
            }), vM))
          })), () => {
            jM = !0, clearTimeout(OM)
          }
        }), [MM, rM, iM, jM])
      }(aM, null !== (0, uM.n)(MM) && (rM || null !== iM), iM);
      const PM = (0, uM.S)();
      return rr(PM, (0, uM.n)(MM), MM, aM, iM),
        function() {
          const {
            userContext: MM
          } = (0, gM.b)(), {
            gameState: rM
          } = (0, HM.m)(["gameState"]);
          (0, OM.useEffect)((() => {
            if ("landingPage" !== rM || !MM.isLoggedIn() && !(0, hM.guestsMayBuy)()) return;
            const iM = (0, uM.g)(MM),
              OM = (0, tM.u)((MM => iM.includes(MM.item)));
            null !== OM && ((0, mM.reportAnalyticsClick)({
              id: "store.login_resume",
              value: OM.item
            }), (0, tM.n)({
              mode: "self",
              source: "loginResume",
              highlight: OM.item
            }))
          }), [MM, rM])
        }(),
        function(MM, rM, iM) {
          const SM = (0, OM.useRef)(null);
          (0, OM.useEffect)((() => {
            if (null === iM || null === MM || null === rM || SM.current === iM) return;
            SM.current = iM;
            const OM = MM.packs[0].pack;
            switch (iM.show) {
              case "popup":
                (0, uM.A)(rM), AM(MM);
                break;
              case "store":
                (0, tM.n)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, tM.n)({
                  mode: "self",
                  source: "loginResume",
                  highlight: OM.packageId
                });
                break;
              case "bought":
                (0, tM.n)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, uM.z)(rM), (0, oM.c)(OM.gems);
                break;
              case "gift":
                (0, tM.n)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [iM, MM, rM])
        }(PM, aM, iM), null
    }
  },
  35070: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => hM,
      i: () => dM
    });
    iM(35072);
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1188),
      PM = iM(1520),
      nM = iM(2796),
      QM = iM(1398),
      zM = iM(2382),
      LM = iM(3449),
      mM = iM(2412),
      HM = iM(1303);

    function hM(MM) {
      let {
        endsAt: rM,
        className: iM
      } = MM;
      return (0, HM.jsxs)("span", {
        className: jM()("NewPlayerDealClock", iM),
        children: [(0, HM.jsx)(QM.b, {
          name: "hourglass"
        }), (0, HM.jsx)(nM.f, {
          toTime: rM
        })]
      })
    }

    function JM(MM) {
      let {
        offered: rM,
        needsLogin: iM,
        busy: OM,
        highlight: SM,
        onBuy: nM
      } = MM;
      const {
        t: QM
      } = (0, aM.A)(), {
        pack: hM
      } = rM, JM = (0, LM.c)(rM.package);
      return (0, HM.jsxs)("div", {
        className: jM()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: SM
        }),
        children: [(0, HM.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, HM.jsx)("img", {
            src: mM.c[rM.tier],
            alt: "",
            draggable: !1
          }), (0, HM.jsx)("span", {
            className: "NewPlayerDealTag",
            children: QM("newPlayerDeal:tag")
          })]
        }), (0, HM.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, HM.jsx)(zM.b, {
            className: "NewPlayerDealPackAmount",
            amount: hM.gems
          })
        }), (0, HM.jsx)(PM.p, {
          className: "NewPlayerDealBuy",
          loading: OM,
          onClick: nM,
          ariaLabel: QM("newPlayerDeal:buyLabel", {
            amount: hM.gems.toLocaleString(),
            price: JM
          }),
          children: QM(iM ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: JM
          })
        })]
      })
    }

    function dM(MM) {
      let {
        view: rM,
        needsLogin: iM,
        busy: SM,
        highlight: PM,
        onBuy: nM
      } = MM;
      const {
        t: QM
      } = (0, aM.A)();
      return (0, HM.jsxs)("div", {
        className: jM()("NewPlayerDealPacks", rM.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [rM.packs.map(((MM, rM) => (0, HM.jsxs)(OM.Fragment, {
          children: [rM > 0 && (0, HM.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, HM.jsx)("i", {})
          }), (0, HM.jsx)(JM, {
            offered: MM,
            needsLogin: iM,
            busy: SM,
            highlight: PM === MM.pack.packageId,
            onBuy: () => {
              nM(MM)
            }
          })]
        }, MM.pack.packageId))), (0, HM.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, HM.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: QM("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35077: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => wM,
      e: () => gM
    });
    iM(35072);
    var OM = iM(3442),
      SM = iM(1548),
      jM = iM(2401),
      aM = iM(3432),
      PM = iM(3411),
      nM = iM(3439),
      QM = iM(3385),
      zM = iM(1188),
      LM = iM(1429),
      mM = iM(1142),
      HM = iM(1520),
      hM = iM(1398),
      JM = iM(2382),
      dM = iM(2910),
      yM = iM(2779),
      lM = iM(2782),
      EM = iM(2787),
      UM = iM(1303);
    const GM = new nM.c(QM.getBillingClient, QM.addPurchaseRecordListener);
    let CM = !1;

    function eM(MM, rM) {
      null !== MM && (0, yM.u)(MM) || ((0, SM.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${rM.pack.packageId}`
      }), null !== MM && (0, yM.z)(MM), wM(rM.pack.gems))
    }

    function bM(MM, rM, iM) {
      const SM = (0, yM.d)(rM);
      switch (MM.kind) {
        case "completed":
          eM(SM, iM);
          break;
        case "pending":
          jM = MM.intentId, aM = () => {
            dM.i.refresh(), eM(SM, iM)
          }, CM || (CM = !0, GM.listen()), GM.follow(jM, aM);
          break;
        case "unknownPackage":
          (0, yM.N)(rM, null);
          break;
        case "failed":
          MM.errorKey === OM.d.newPlayerDealUnavailable && (0, yM.N)(rM, null)
      }
      var jM, aM
    }

    function wM(MM) {
      LM.NotificationProvider.showCustomPopup({
        body: rM => (0, UM.jsx)(tM, {
          gems: MM,
          close: rM
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function tM(MM) {
      let {
        gems: rM,
        close: iM
      } = MM;
      const {
        t: OM
      } = (0, zM.A)();
      return (0, UM.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, UM.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, UM.jsx)(hM.b, {
            name: "circle-check"
          }), (0, UM.jsx)(JM.b, {
            amount: rM
          }), (0, UM.jsx)("span", {
            children: OM("newPlayerDeal:added")
          })]
        }), (0, UM.jsx)(HM.p, {
          className: "NewPlayerDealAddedOk",
          onClick: iM,
          children: OM("general:ok")
        })]
      })
    }

    function gM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.e;
      const {
        userContext: iM
      } = (0, mM.b)(), {
        purchaseUnderWay: OM,
        notice: SM,
        buy: nM
      } = (0, PM.d)(rM), QM = (0, lM.m)(), zM = iM.mayBuy() || (0, jM.guestsMayBuy)(), LM = null === QM ? !zM : QM.guest && !iM.isLoggedIn();
      return {
        purchaseUnderWay: OM,
        notice: SM,
        needsLogin: LM,
        buyPack: function(OM, SM) {
          (0, yM.G)("new_player_deal.buy", (0, EM.b)(OM.arm, MM, SM.pack.packageId)), null === QM ? nM(function(MM) {
            return {
              sku: MM.pack.packageId,
              tier: MM.tier,
              amount: MM.pack.gems,
              bonusPercent: 0,
              package: MM.package
            }
          }(SM), null, {
            followPending: !1
          }).then((MM => {
            bM(MM, iM, SM)
          })) : LM ? rM(SM.pack.packageId, null) : eM((0, yM.d)(iM), SM)
        }
      }
    }
  },
  35072: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);