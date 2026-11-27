export const id = 230;
export const ids = [230];
export const modules = {
  37544: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => Oi
    });
    var mW = OW(62);
    const EW = "newPlayerDeal",
      NW = 36e5,
      PW = [4, 12, 20, 20, 30];
    const LW = 12 * NW;

    function cW(WW) {
      return WW - LW
    }

    function wW(WW, iW, OW) {
      const mW = cW(OW);
      return iW >= mW && iW < OW && (null === WW.lastShownAt || WW.lastShownAt < mW)
    }

    function tW(WW, iW) {
      const {
        arrival: OW,
        now: mW,
        endsAt: EW,
        playedOnDevice: LW
      } = iW;
      return !(mW >= EW || !LW) && (!(!wW(WW, mW, EW) && 0 !== WW.shownCount && null !== WW.lastShownAt) || "open" === OW && mW - WW.lastShownAt >= (cW = WW.shownCount, PW[Math.min(Math.max(cW, 1), PW.length) - 1] * NW));
      var cW
    }
    var ZW = OW(327),
      xW = OW(1556),
      lW = OW(25),
      AW = OW(3132),
      bW = OW(4076),
      jW = OW(4085),
      UW = OW(2059),
      kW = OW(1185),
      sW = OW(1111);
    var MW = OW(1422),
      KW = OW(39),
      SW = OW(683),
      YW = OW(3507),
      yW = OW(1427),
      TW = OW(3516),
      JW = OW(3125),
      hW = OW(1107),
      HW = OW(3559),
      nW = OW(3566),
      uW = OW(4126),
      oW = OW(1172),
      dW = OW(1532),
      eW = OW(4155),
      vW = OW(35277),
      gW = OW(3572),
      DW = OW(35285),
      VW = OW(1283);

    function pW(WW) {
      let {
        shownView: iW,
        close: OW
      } = WW;
      const {
        t: EW
      } = (0, oW.B)(), NW = (0, HW.V)(), {
        purchaseUnderWay: PW,
        notice: LW,
        needsLogin: cW,
        buyPack: wW
      } = (0, DW.g)("popup", ((WW, iW) => {
        OW(!1), (0, uW.b)(WW, iW)
      })), tW = null === NW;
      (0, mW.useEffect)((() => {
        tW && OW(!1)
      }), [tW, OW]);
      const ZW = null !== NW && void 0 !== NW ? NW : iW;
      return (0, VW.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, VW.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: EW("newPlayerDeal:title")
        }), (0, VW.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: EW("newPlayerDeal:samePrice")
        }), (0, VW.jsx)(vW.c, {
          className: "NewPlayerDealClockBig",
          endsAt: ZW.endsAt
        }), (0, VW.jsx)(vW.d, {
          view: ZW,
          needsLogin: cW,
          busy: PW,
          highlight: null,
          onBuy: WW => {
            wW(ZW, WW)
          }
        }), (0, VW.jsx)(eW.e, {
          notice: LW,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, VW.jsx)(eW.b, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, VW.jsx)(dW.O, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            OW(!0)
          },
          children: EW("newPlayerDeal:noThanks")
        })]
      })
    }

    function fW(WW) {
      let {
        arm: iW,
        children: OW
      } = WW;
      return (0, mW.useEffect)((() => {
        (0, HW.P)(!0)
      }), []), (0, HW.W)(iW, "popup"), OW
    }

    function CW(WW) {
      let iW = null;
      MW.NotificationProvider.showCustomPopup({
        body: OW => (0, VW.jsx)(fW, {
          arm: WW.arm,
          children: (0, VW.jsx)(pW, {
            shownView: WW,
            close: WW => {
              iW ??= WW, OW()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((OW => {
        (0, HW.P)(!1), !1 !== iW && "notificationTornDown" !== OW && (0, HW.L)("new_player_deal.close", (0, gW.b)(WW.arm, "popup"))
      }))
    }
    const XW = 2500,
      BW = 6e4;
    const qW = 500,
      RW = 6e4;

    function GW(WW) {
      const iW = Date.now() + RW;
      return new Promise((OW => {
        const mW = () => {
          WW() ? (0, TW.g)() || MW.NotificationProvider.hasPopup() || (0, yW.m)() || (0, HW.z)() || null !== lW.d.get("openEverythingMenuName") ? Date.now() > iW ? OW(!1) : setTimeout(mW, qW) : OW(!0) : OW(!1)
        };
        mW()
      }))
    }
    const IW = "newPlayerDealPointerDeferred_";
    let aW = !1,
      rW = null;

    function zW(WW, iW) {
      var OW;
      return (null === (OW = rW) || void 0 === OW ? void 0 : OW.accountId) === iW && rW.shownCount === WW.shownCount
    }

    function FW(WW, iW, OW) {
      return !!zW(iW, OW) && (rW = null, (0, HW.E)(OW), CW(WW), !0)
    }
    async function QW(WW, iW, OW, mW) {
      if (aW) return !1;
      let EW;
      aW = !0;
      try {
        EW = await async function(WW) {
          const {
            newPlayerDeal: iW,
            counted: OW
          } = await (0, sW.postJsonWithMetricsCookiesAndJsonResponse)(`${kW.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: WW
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: iW,
            counted: !0 === OW
          }
        }(iW.shownCount)
      } catch (NW) {
        return console.error("New player deal: counting a showing of its popup failed", NW), !1
      } finally {
        aW = !1
      }
      return (0, HW.T)(OW, EW.newPlayerDeal), EW.counted && null !== EW.newPlayerDeal && (rW = {
        accountId: mW,
        shownCount: EW.newPlayerDeal.shownCount
      }, "landingPage" === lW.d.get("gameState") && FW(WW, EW.newPlayerDeal, mW)), !0
    }
    let Wi = null;

    function ii(WW, iW, OW, EW, NW) {
      var PW;
      const {
        gameState: LW
      } = (0, lW.p)(["gameState"]), xW = "landingPage" === LW, {
        pointing: AW
      } = (0, YW.f)(), bW = (0, mW.useRef)(AW);
      bW.current = AW;
      const jW = (0, mW.useRef)(WW);
      jW.current = WW;
      const kW = (0, mW.useRef)(iW);
      kW.current = iW;
      const sW = (0, mW.useRef)(OW);
      sW.current = OW;
      const [MW, yW] = (0, mW.useState)(null), TW = (0, mW.useRef)(0), JW = (0, mW.useRef)(0), hW = (0, mW.useRef)(!1), HW = (0, mW.useCallback)((WW => {
        "open" === function(WW) {
          const iW = WW ? (0, SW.getVisitSessionId)() : (0, SW.peekVisitSessionId)(),
            OW = null !== iW && iW === Wi ? "return" : "open";
          return Wi = iW, OW
        }(WW) && (hW.current = !0), TW.current++, yW({
          seq: TW.current,
          kind: hW.current ? "open" : "return"
        })
      }), []);
      (0, mW.useEffect)((() => {
        if (!xW) return void yW(null);
        HW(!0);
        const WW = () => {
          "visible" === document.visibilityState && HW(!0)
        };
        return document.addEventListener("visibilitychange", WW), () => {
          document.removeEventListener("visibilitychange", WW)
        }
      }), [xW, HW]);
      const nW = null !== (PW = null === WW || void 0 === WW ? void 0 : WW.endsAt) && void 0 !== PW ? PW : null;
      (0, mW.useEffect)((() => {
        if (!xW || null === nW) return;
        const WW = cW(nW) - Date.now();
        if (WW <= 0 || WW > UW.c) return;
        const iW = setTimeout((() => {
          HW(!1)
        }), WW);
        return () => {
          clearTimeout(iW)
        }
      }), [xW, nW, HW]);
      const uW = null !== WW && null !== EW && null === NW;
      (0, mW.useEffect)((() => {
        if (null === MW || !uW || JW.current >= MW.seq) return;
        const WW = () => TW.current === MW.seq && "landingPage" === lW.d.get("gameState"),
          iW = setTimeout((() => {
            const iW = jW.current,
              OW = kW.current;
            if (null === iW || null === OW || !WW()) return;
            JW.current = MW.seq;
            const mW = Date.now(),
              NW = zW(OW, EW);
            if (!(NW || tW(OW, {
                arrival: MW.kind,
                now: mW,
                endsAt: iW.endsAt,
                playedOnDevice: KW.i.getItem(ZW.Qb) > 0
              }))) return void(hW.current = !1);
            const PW = wW(OW, mW, iW.endsAt);
            GW(WW).then((async WW => {
              const iW = jW.current;
              WW && null !== iW && kW.current === OW && (!bW.current || PW || function(WW, iW) {
                return KW.i.getItem(IW + WW) === iW
              }(EW, OW.shownCount) ? NW ? FW(iW, OW, EW) && (hW.current = !1) : await QW(iW, OW, sW.current, EW) && (hW.current = !1) : function(WW, iW) {
                KW.i.setItem(IW + WW, iW)
              }(EW, OW.shownCount))
            }))
          }), XW);
        return () => {
          clearTimeout(iW)
        }
      }), [MW, uW, EW])
    }

    function Oi() {
      const {
        userContext: WW
      } = (0, hW.e)(), iW = (0, AW.usePurchasesAllowed)(), [OW, NW] = (0, mW.useState)(nW.n);
      (0, mW.useEffect)((() => (NW((0, nW.n)()), (0, nW.r)(NW))), []);
      const PW = (0, HW.e)(WW);
      ! function(WW, iW, OW) {
        const [NW, PW] = (0, mW.useState)(0);
        (0, mW.useEffect)((() => {
          if (!iW || null === WW) return;
          if (null !== OW) return void(0, HW.O)(WW, (0, nW.g)());
          if (null !== (0, HW.l)(WW)) return;
          let mW, NW = !1;
          return (0, jW.getBillingClient)().getOfferings(EW).then((iW => {
            let {
              offering: OW
            } = iW;
            (0, HW.O)(WW, null === OW ? [] : OW.packages.filter(bW.isPricedPackage))
          }), (WW => {
            console.error("New player deal: loading its prices failed", WW), NW || (mW = setTimeout((() => {
              PW((WW => WW + 1))
            }), BW))
          })), () => {
            NW = !0, clearTimeout(mW)
          }
        }), [WW, iW, OW, NW])
      }(PW, null !== (0, HW.p)(WW) && (iW || null !== OW), OW);
      const LW = (0, HW.V)();
      return ii(LW, (0, HW.p)(WW), WW, PW, OW),
        function() {
          const {
            userContext: WW
          } = (0, hW.e)(), {
            gameState: iW
          } = (0, lW.p)(["gameState"]);
          (0, mW.useEffect)((() => {
            if ("landingPage" !== iW || !WW.isLoggedIn() && !(0, AW.guestsMayBuy)()) return;
            const OW = (0, HW.h)(WW),
              mW = (0, JW.A)((WW => OW.includes(WW.item)));
            null !== mW && ((0, xW.reportAnalyticsClick)({
              id: "store.login_resume",
              value: mW.item
            }), (0, JW.o)({
              mode: "self",
              source: "loginResume",
              highlight: mW.item
            }))
          }), [WW, iW])
        }(),
        function(WW, iW, OW) {
          const EW = (0, mW.useRef)(null);
          (0, mW.useEffect)((() => {
            if (null === OW || null === WW || null === iW || EW.current === OW) return;
            EW.current = OW;
            const mW = WW.packs[0].pack;
            switch (OW.show) {
              case "popup":
                (0, HW.E)(iW), CW(WW);
                break;
              case "store":
                (0, JW.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, JW.o)({
                  mode: "self",
                  source: "loginResume",
                  highlight: mW.packageId
                });
                break;
              case "bought":
                (0, JW.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, HW.D)(iW), (0, DW.c)(mW.gems);
                break;
              case "gift":
                (0, JW.o)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [OW, WW, iW])
        }(LW, PW, OW), null
    }
  },
  35277: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW,
      d: () => jW
    });
    OW(35279);
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1172),
      LW = OW(1532),
      cW = OW(3582),
      wW = OW(1391),
      tW = OW(3291),
      ZW = OW(4147),
      xW = OW(3147),
      lW = OW(1283);

    function AW(WW) {
      let {
        endsAt: iW,
        className: OW
      } = WW;
      return (0, lW.jsxs)("span", {
        className: NW()("NewPlayerDealClock", OW),
        children: [(0, lW.jsx)(wW.c, {
          name: "hourglass"
        }), (0, lW.jsx)(cW.f, {
          toTime: iW
        })]
      })
    }

    function bW(WW) {
      let {
        offered: iW,
        needsLogin: OW,
        busy: mW,
        highlight: EW,
        onBuy: cW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)(), {
        pack: AW
      } = iW, bW = (0, ZW.e)(iW.package);
      return (0, lW.jsxs)("div", {
        className: NW()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: EW
        }),
        children: [(0, lW.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, lW.jsx)("img", {
            src: xW.c[iW.tier],
            alt: "",
            draggable: !1
          }), (0, lW.jsx)("span", {
            className: "NewPlayerDealTag",
            children: wW("newPlayerDeal:tag")
          })]
        }), (0, lW.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, lW.jsx)(tW.c, {
            className: "NewPlayerDealPackAmount",
            amount: AW.gems
          }), (0, lW.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: wW("newPlayerDeal:split", {
              usual: AW.usualGems.toLocaleString(),
              bonus: (AW.gems - AW.usualGems).toLocaleString()
            })
          })]
        }), (0, lW.jsx)(LW.n, {
          className: "NewPlayerDealBuy",
          loading: mW,
          onClick: cW,
          ariaLabel: wW("newPlayerDeal:buyLabel", {
            amount: AW.gems.toLocaleString(),
            price: bW
          }),
          children: wW(OW ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: bW
          })
        })]
      })
    }

    function jW(WW) {
      let {
        view: iW,
        needsLogin: OW,
        busy: EW,
        highlight: LW,
        onBuy: cW
      } = WW;
      const {
        t: wW
      } = (0, PW.B)();
      return (0, lW.jsxs)("div", {
        className: NW()("NewPlayerDealPacks", iW.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [iW.packs.map(((WW, iW) => (0, lW.jsxs)(mW.Fragment, {
          children: [iW > 0 && (0, lW.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, lW.jsx)("i", {})
          }), (0, lW.jsx)(bW, {
            offered: WW,
            needsLogin: OW,
            busy: EW,
            highlight: LW === WW.pack.packageId,
            onBuy: () => {
              cW(WW)
            }
          })]
        }, WW.pack.packageId))), (0, lW.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, lW.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: wW("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35285: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => TW,
      g: () => hW
    });
    OW(35279);
    var mW = OW(4139),
      EW = OW(1556),
      NW = OW(3132),
      PW = OW(4126),
      LW = OW(4105),
      cW = OW(4132),
      wW = OW(4085),
      tW = OW(1172),
      ZW = OW(1422),
      xW = OW(1107),
      lW = OW(1532),
      AW = OW(1391),
      bW = OW(3291),
      jW = OW(3697),
      UW = OW(3559),
      kW = OW(3566),
      sW = OW(3572),
      MW = OW(1283);
    const KW = new cW.d(wW.getBillingClient, wW.addPurchaseRecordListener);
    let SW = !1;

    function YW(WW, iW) {
      null !== WW && (0, UW.v)(WW) || ((0, EW.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${iW.pack.packageId}`
      }), null !== WW && (0, UW.D)(WW), TW(iW.pack.gems))
    }

    function yW(WW, iW, OW) {
      const EW = (0, UW.e)(iW);
      switch (WW.kind) {
        case "completed":
          YW(EW, OW);
          break;
        case "pending":
          NW = WW.intentId, PW = () => {
            jW.j.refresh(), YW(EW, OW)
          }, SW || (SW = !0, KW.listen()), KW.follow(NW, PW);
          break;
        case "unknownPackage":
          (0, UW.T)(iW, null);
          break;
        case "failed":
          WW.errorKey === mW.b.newPlayerDealUnavailable && (0, UW.T)(iW, null)
      }
      var NW, PW
    }

    function TW(WW) {
      ZW.NotificationProvider.showCustomPopup({
        body: iW => (0, MW.jsx)(JW, {
          gems: WW,
          close: iW
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function JW(WW) {
      let {
        gems: iW,
        close: OW
      } = WW;
      const {
        t: mW
      } = (0, tW.B)();
      return (0, MW.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, MW.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, MW.jsx)(AW.c, {
            name: "circle-check"
          }), (0, MW.jsx)(bW.c, {
            amount: iW
          }), (0, MW.jsx)("span", {
            children: mW("newPlayerDeal:added")
          })]
        }), (0, MW.jsx)(lW.n, {
          className: "NewPlayerDealAddedOk",
          onClick: OW,
          children: mW("general:ok")
        })]
      })
    }

    function hW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.b;
      const {
        userContext: OW
      } = (0, xW.e)(), {
        purchaseUnderWay: mW,
        notice: EW,
        buy: cW
      } = (0, LW.b)(iW), wW = (0, kW.n)(), tW = OW.mayBuy() || (0, NW.guestsMayBuy)(), ZW = null === wW ? !tW : wW.guest && !OW.isLoggedIn();
      return {
        purchaseUnderWay: mW,
        notice: EW,
        needsLogin: ZW,
        buyPack: function(mW, EW) {
          (0, UW.L)("new_player_deal.buy", (0, sW.b)(mW.arm, WW, EW.pack.packageId)), null === wW ? cW(function(WW) {
            return {
              sku: WW.pack.packageId,
              tier: WW.tier,
              amount: WW.pack.gems,
              bonusPercent: 0,
              package: WW.package
            }
          }(EW), null, {
            followPending: !1
          }).then((WW => {
            yW(WW, OW, EW)
          })) : ZW ? iW(EW.pack.packageId, null) : YW((0, UW.e)(OW), EW)
        }
      }
    }
  },
  35279: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);