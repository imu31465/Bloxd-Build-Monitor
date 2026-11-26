export const id = 227;
export const ids = [227];
export const modules = {
  37536: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => xe
    });
    var JV = xV(62);
    const YV = "newPlayerDeal",
      UV = 36e5,
      yV = [4, 12, 20, 20, 30];
    const pV = 12 * UV;

    function QV(VV) {
      return VV - pV
    }

    function nV(VV, eV, xV) {
      const JV = QV(xV);
      return eV >= JV && eV < xV && (null === VV.lastShownAt || VV.lastShownAt < JV)
    }

    function wV(VV, eV) {
      const {
        arrival: xV,
        now: JV,
        endsAt: YV,
        playedOnDevice: pV
      } = eV;
      return !(JV >= YV || !pV) && (!(!nV(VV, JV, YV) && 0 !== VV.shownCount && null !== VV.lastShownAt) || "open" === xV && JV - VV.lastShownAt >= (QV = VV.shownCount, yV[Math.min(Math.max(QV, 1), yV.length) - 1] * UV));
      var QV
    }
    var ZV = xV(364),
      vV = xV(1586),
      rV = xV(27),
      kV = xV(2430),
      bV = xV(3390),
      EV = xV(3398),
      BV = xV(2076),
      jV = xV(1230),
      qV = xV(1173);
    var tV = xV(1439),
      FV = xV(40),
      TV = xV(701),
      PV = xV(2795),
      AV = xV(1442),
      NV = xV(2800),
      XV = xV(2428),
      MV = xV(1168),
      zV = xV(2847),
      GV = xV(2849),
      WV = xV(3437),
      RV = xV(1220),
      gV = xV(1551),
      DV = xV(3461),
      iV = xV(35354),
      CV = xV(2855),
      aV = xV(35371),
      oV = xV(1321);

    function cV(VV) {
      let {
        shownView: eV,
        close: xV
      } = VV;
      const {
        t: YV
      } = (0, RV.A)(), UV = (0, zV.T)(), {
        purchaseUnderWay: yV,
        notice: pV,
        needsLogin: QV,
        buyPack: nV
      } = (0, aV.g)("popup", ((VV, eV) => {
        xV(!1), (0, WV.e)(VV, eV)
      })), wV = null === UV;
      (0, JV.useEffect)((() => {
        wV && xV(!1)
      }), [wV, xV]);
      const ZV = null !== UV && void 0 !== UV ? UV : eV;
      return (0, oV.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, oV.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: YV("newPlayerDeal:title")
        }), (0, oV.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: YV("newPlayerDeal:samePrice")
        }), (0, oV.jsx)(iV.b, {
          className: "NewPlayerDealClockBig",
          endsAt: ZV.endsAt
        }), (0, oV.jsx)(iV.c, {
          view: ZV,
          needsLogin: QV,
          busy: yV,
          highlight: null,
          onBuy: VV => {
            nV(ZV, VV)
          }
        }), (0, oV.jsx)(DV.i, {
          notice: pV,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, oV.jsx)(DV.d, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, oV.jsx)(gV.f, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            xV(!0)
          },
          children: YV("newPlayerDeal:noThanks")
        })]
      })
    }

    function hV(VV) {
      let {
        arm: eV,
        children: xV
      } = VV;
      return (0, JV.useEffect)((() => {
        (0, zV.K)(!0)
      }), []), (0, zV.X)(eV, "popup"), xV
    }

    function lV(VV) {
      let eV = null;
      tV.NotificationProvider.showCustomPopup({
        body: xV => (0, oV.jsx)(hV, {
          arm: VV.arm,
          children: (0, oV.jsx)(cV, {
            shownView: VV,
            close: VV => {
              eV ??= VV, xV()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((xV => {
        (0, zV.K)(!1), !1 !== eV && "notificationTornDown" !== xV && (0, zV.E)("new_player_deal.close", (0, CV.c)(VV.arm, "popup"))
      }))
    }
    const LV = 2500,
      fV = 6e4;
    const mV = 500,
      KV = 6e4;

    function HV(VV) {
      const eV = Date.now() + KV;
      return new Promise((xV => {
        const JV = () => {
          VV() ? (0, NV.i)() || tV.NotificationProvider.hasPopup() || (0, AV.f)() || (0, zV.s)() || null !== rV.b.get("openEverythingMenuName") ? Date.now() > eV ? xV(!1) : setTimeout(JV, mV) : xV(!0) : xV(!1)
        };
        JV()
      }))
    }
    const uV = "newPlayerDealPointerDeferred_";
    let sV = !1,
      SV = null;

    function IV(VV, eV) {
      var xV;
      return (null === (xV = SV) || void 0 === xV ? void 0 : xV.accountId) === eV && SV.shownCount === VV.shownCount
    }

    function dV(VV, eV, xV) {
      return !!IV(eV, xV) && (SV = null, (0, zV.y)(xV), lV(VV), !0)
    }
    async function OV(VV, eV, xV, JV) {
      if (sV) return !1;
      let YV;
      sV = !0;
      try {
        YV = await async function(VV) {
          const {
            newPlayerDeal: eV,
            counted: xV
          } = await (0, qV.postJsonWithMetricsCookiesAndJsonResponse)(`${jV.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: VV
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: eV,
            counted: !0 === xV
          }
        }(eV.shownCount)
      } catch (UV) {
        return console.error("New player deal: counting a showing of its popup failed", UV), !1
      } finally {
        sV = !1
      }
      return (0, zV.O)(xV, YV.newPlayerDeal), YV.counted && null !== YV.newPlayerDeal && (SV = {
        accountId: JV,
        shownCount: YV.newPlayerDeal.shownCount
      }, "landingPage" === rV.b.get("gameState") && dV(VV, YV.newPlayerDeal, JV)), !0
    }
    let Ve = null;

    function ee(VV, eV, xV, YV, UV) {
      var yV;
      const {
        gameState: pV
      } = (0, rV.l)(["gameState"]), vV = "landingPage" === pV, {
        pointing: kV
      } = (0, PV.h)(), bV = (0, JV.useRef)(kV);
      bV.current = kV;
      const EV = (0, JV.useRef)(VV);
      EV.current = VV;
      const jV = (0, JV.useRef)(eV);
      jV.current = eV;
      const qV = (0, JV.useRef)(xV);
      qV.current = xV;
      const [tV, AV] = (0, JV.useState)(null), NV = (0, JV.useRef)(0), XV = (0, JV.useRef)(0), MV = (0, JV.useRef)(!1), zV = (0, JV.useCallback)((VV => {
        "open" === function(VV) {
          const eV = VV ? (0, TV.f)() : (0, TV.peekVisitSessionId)(),
            xV = null !== eV && eV === Ve ? "return" : "open";
          return Ve = eV, xV
        }(VV) && (MV.current = !0), NV.current++, AV({
          seq: NV.current,
          kind: MV.current ? "open" : "return"
        })
      }), []);
      (0, JV.useEffect)((() => {
        if (!vV) return void AV(null);
        zV(!0);
        const VV = () => {
          "visible" === document.visibilityState && zV(!0)
        };
        return document.addEventListener("visibilitychange", VV), () => {
          document.removeEventListener("visibilitychange", VV)
        }
      }), [vV, zV]);
      const GV = null !== (yV = null === VV || void 0 === VV ? void 0 : VV.endsAt) && void 0 !== yV ? yV : null;
      (0, JV.useEffect)((() => {
        if (!vV || null === GV) return;
        const VV = QV(GV) - Date.now();
        if (VV <= 0 || VV > BV.e) return;
        const eV = setTimeout((() => {
          zV(!1)
        }), VV);
        return () => {
          clearTimeout(eV)
        }
      }), [vV, GV, zV]);
      const WV = null !== VV && null !== YV && null === UV;
      (0, JV.useEffect)((() => {
        if (null === tV || !WV || XV.current >= tV.seq) return;
        const VV = () => NV.current === tV.seq && "landingPage" === rV.b.get("gameState"),
          eV = setTimeout((() => {
            const eV = EV.current,
              xV = jV.current;
            if (null === eV || null === xV || !VV()) return;
            XV.current = tV.seq;
            const JV = Date.now(),
              UV = IV(xV, YV);
            if (!(UV || wV(xV, {
                arrival: tV.kind,
                now: JV,
                endsAt: eV.endsAt,
                playedOnDevice: FV.m.getItem(ZV.Ib) > 0
              }))) return void(MV.current = !1);
            const yV = nV(xV, JV, eV.endsAt);
            HV(VV).then((async VV => {
              const eV = EV.current;
              VV && null !== eV && jV.current === xV && (!bV.current || yV || function(VV, eV) {
                return FV.m.getItem(uV + VV) === eV
              }(YV, xV.shownCount) ? UV ? dV(eV, xV, YV) && (MV.current = !1) : await OV(eV, xV, qV.current, YV) && (MV.current = !1) : function(VV, eV) {
                FV.m.setItem(uV + VV, eV)
              }(YV, xV.shownCount))
            }))
          }), LV);
        return () => {
          clearTimeout(eV)
        }
      }), [tV, WV, YV])
    }

    function xe() {
      const {
        userContext: VV
      } = (0, MV.d)(), eV = (0, kV.usePurchasesAllowed)(), [xV, UV] = (0, JV.useState)(GV.i);
      (0, JV.useEffect)((() => (UV((0, GV.i)()), (0, GV.j)(UV))), []);
      const yV = (0, zV.b)(VV);
      ! function(VV, eV, xV) {
        const [UV, yV] = (0, JV.useState)(0);
        (0, JV.useEffect)((() => {
          if (!eV || null === VV) return;
          if (null !== xV) return void(0, zV.I)(VV, (0, GV.c)());
          if (null !== (0, zV.g)(VV)) return;
          let JV, UV = !1;
          return (0, EV.getBillingClient)().getOfferings(YV).then((eV => {
            let {
              offering: xV
            } = eV;
            (0, zV.I)(VV, null === xV ? [] : xV.packages.filter(bV.isPricedPackage))
          }), (VV => {
            console.error("New player deal: loading its prices failed", VV), UV || (JV = setTimeout((() => {
              yV((VV => VV + 1))
            }), fV))
          })), () => {
            UV = !0, clearTimeout(JV)
          }
        }), [VV, eV, xV, UV])
      }(yV, null !== (0, zV.i)(VV) && (eV || null !== xV), xV);
      const pV = (0, zV.T)();
      return ee(pV, (0, zV.i)(VV), VV, yV, xV),
        function() {
          const {
            userContext: VV
          } = (0, MV.d)(), {
            gameState: eV
          } = (0, rV.l)(["gameState"]);
          (0, JV.useEffect)((() => {
            if ("landingPage" !== eV || !VV.isLoggedIn() && !(0, kV.guestsMayBuy)()) return;
            const xV = (0, zV.c)(VV),
              JV = (0, XV.B)((VV => xV.includes(VV.item)));
            null !== JV && ((0, vV.reportAnalyticsClick)({
              id: "store.login_resume",
              value: JV.item
            }), (0, XV.o)({
              mode: "self",
              source: "loginResume",
              highlight: JV.item
            }))
          }), [VV, eV])
        }(),
        function(VV, eV, xV) {
          const YV = (0, JV.useRef)(null);
          (0, JV.useEffect)((() => {
            if (null === xV || null === VV || null === eV || YV.current === xV) return;
            YV.current = xV;
            const JV = VV.packs[0].pack;
            switch (xV.show) {
              case "popup":
                (0, zV.y)(eV), lV(VV);
                break;
              case "store":
                (0, XV.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, XV.o)({
                  mode: "self",
                  source: "loginResume",
                  highlight: JV.packageId
                });
                break;
              case "bought":
                (0, XV.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, zV.v)(eV), (0, aV.d)(JV.gems);
                break;
              case "gift":
                (0, XV.o)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [xV, VV, eV])
        }(pV, yV, xV), null
    }
  },
  35354: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => kV,
      c: () => EV
    });
    xV(35362);
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1220),
      pV = xV(1551),
      QV = xV(2866),
      nV = xV(1414),
      wV = xV(2404),
      ZV = xV(3454),
      vV = xV(2437),
      rV = xV(1321);

    function kV(VV) {
      let {
        endsAt: eV,
        className: xV
      } = VV;
      return (0, rV.jsxs)("span", {
        className: UV()("NewPlayerDealClock", xV),
        children: [(0, rV.jsx)(nV.b, {
          name: "hourglass"
        }), (0, rV.jsx)(QV.e, {
          toTime: eV
        })]
      })
    }

    function bV(VV) {
      let {
        offered: eV,
        needsLogin: xV,
        busy: JV,
        highlight: YV,
        onBuy: QV
      } = VV;
      const {
        t: nV
      } = (0, yV.A)(), {
        pack: kV
      } = eV, bV = (0, ZV.e)(eV.package);
      return (0, rV.jsxs)("div", {
        className: UV()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: YV
        }),
        children: [(0, rV.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, rV.jsx)("img", {
            src: vV.c[eV.tier],
            alt: "",
            draggable: !1
          }), (0, rV.jsx)("span", {
            className: "NewPlayerDealTag",
            children: nV("newPlayerDeal:tag")
          })]
        }), (0, rV.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, rV.jsx)(wV.e, {
            className: "NewPlayerDealPackAmount",
            amount: kV.gems
          })
        }), (0, rV.jsx)(pV.m, {
          className: "NewPlayerDealBuy",
          loading: JV,
          onClick: QV,
          ariaLabel: nV("newPlayerDeal:buyLabel", {
            amount: kV.gems.toLocaleString(),
            price: bV
          }),
          children: nV(xV ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: bV
          })
        })]
      })
    }

    function EV(VV) {
      let {
        view: eV,
        needsLogin: xV,
        busy: YV,
        highlight: pV,
        onBuy: QV
      } = VV;
      const {
        t: nV
      } = (0, yV.A)();
      return (0, rV.jsxs)("div", {
        className: UV()("NewPlayerDealPacks", eV.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [eV.packs.map(((VV, eV) => (0, rV.jsxs)(JV.Fragment, {
          children: [eV > 0 && (0, rV.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, rV.jsx)("i", {})
          }), (0, rV.jsx)(bV, {
            offered: VV,
            needsLogin: xV,
            busy: YV,
            highlight: pV === VV.pack.packageId,
            onBuy: () => {
              QV(VV)
            }
          })]
        }, VV.pack.packageId))), (0, rV.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, rV.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: nV("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35371: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => NV,
      g: () => MV
    });
    xV(35362);
    var JV = xV(3450),
      YV = xV(1586),
      UV = xV(2430),
      yV = xV(3437),
      pV = xV(3412),
      QV = xV(3446),
      nV = xV(3398),
      wV = xV(1220),
      ZV = xV(1439),
      vV = xV(1168),
      rV = xV(1551),
      kV = xV(1414),
      bV = xV(2404),
      EV = xV(2971),
      BV = xV(2847),
      jV = xV(2849),
      qV = xV(2855),
      tV = xV(1321);
    const FV = new QV.d(nV.getBillingClient, nV.addPurchaseRecordListener);
    let TV = !1;

    function PV(VV, eV) {
      null !== VV && (0, BV.o)(VV) || ((0, YV.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${eV.pack.packageId}`
      }), null !== VV && (0, BV.v)(VV), NV(eV.pack.gems))
    }

    function AV(VV, eV, xV) {
      const YV = (0, BV.b)(eV);
      switch (VV.kind) {
        case "completed":
          PV(YV, xV);
          break;
        case "pending":
          UV = VV.intentId, yV = () => {
            EV.j.refresh(), PV(YV, xV)
          }, TV || (TV = !0, FV.listen()), FV.follow(UV, yV);
          break;
        case "unknownPackage":
          (0, BV.O)(eV, null);
          break;
        case "failed":
          VV.errorKey === JV.d.newPlayerDealUnavailable && (0, BV.O)(eV, null)
      }
      var UV, yV
    }

    function NV(VV) {
      ZV.NotificationProvider.showCustomPopup({
        body: eV => (0, tV.jsx)(XV, {
          gems: VV,
          close: eV
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function XV(VV) {
      let {
        gems: eV,
        close: xV
      } = VV;
      const {
        t: JV
      } = (0, wV.A)();
      return (0, tV.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, tV.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, tV.jsx)(kV.b, {
            name: "circle-check"
          }), (0, tV.jsx)(bV.e, {
            amount: eV
          }), (0, tV.jsx)("span", {
            children: JV("newPlayerDeal:added")
          })]
        }), (0, tV.jsx)(rV.m, {
          className: "NewPlayerDealAddedOk",
          onClick: xV,
          children: JV("general:ok")
        })]
      })
    }

    function MV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.e;
      const {
        userContext: xV
      } = (0, vV.d)(), {
        purchaseUnderWay: JV,
        notice: YV,
        buy: QV
      } = (0, pV.d)(eV), nV = (0, jV.i)(), wV = xV.mayBuy() || (0, UV.guestsMayBuy)(), ZV = null === nV ? !wV : nV.guest && !xV.isLoggedIn();
      return {
        purchaseUnderWay: JV,
        notice: YV,
        needsLogin: ZV,
        buyPack: function(JV, YV) {
          (0, BV.E)("new_player_deal.buy", (0, qV.c)(JV.arm, VV, YV.pack.packageId)), null === nV ? QV(function(VV) {
            return {
              sku: VV.pack.packageId,
              tier: VV.tier,
              amount: VV.pack.gems,
              bonusPercent: 0,
              package: VV.package
            }
          }(YV), null, {
            followPending: !1
          }).then((VV => {
            AV(VV, xV, YV)
          })) : ZV ? eV(YV.pack.packageId, null) : PV((0, BV.b)(xV), YV)
        }
      }
    }
  },
  35362: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);