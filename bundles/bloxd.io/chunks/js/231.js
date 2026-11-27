export const id = 231;
export const ids = [231];
export const modules = {
  37835: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => QS
    });
    var Zr = Qr(72);
    const Wr = "newPlayerDeal",
      ar = 36e5,
      jr = [4, 12, 20, 20, 30];
    const Ir = 12 * ar;

    function fr(rr) {
      return rr - Ir
    }

    function Er(rr, Sr, Qr) {
      const Zr = fr(Qr);
      return Sr >= Zr && Sr < Qr && (null === rr.lastShownAt || rr.lastShownAt < Zr)
    }

    function pr(rr, Sr) {
      const {
        arrival: Qr,
        now: Zr,
        endsAt: Wr,
        playedOnDevice: Ir
      } = Sr;
      return !(Zr >= Wr || !Ir) && (!(!Er(rr, Zr, Wr) && 0 !== rr.shownCount && null !== rr.lastShownAt) || "open" === Qr && Zr - rr.lastShownAt >= (fr = rr.shownCount, jr[Math.min(Math.max(fr, 1), jr.length) - 1] * ar));
      var fr
    }
    var xr = Qr(360),
      mr = Qr(1605),
      Nr = Qr(26),
      Ur = Qr(3192),
      tr = Qr(4131),
      hr = Qr(4135),
      zr = Qr(2110),
      Yr = Qr(1262),
      nr = Qr(1187);
    var er = Qr(1475),
      Kr = Qr(43),
      yr = Qr(727),
      Br = Qr(3570),
      Tr = Qr(1481),
      vr = Qr(3572),
      Or = Qr(3184),
      Lr = Qr(1181),
      lr = Qr(3612),
      Xr = Qr(3617),
      Pr = Qr(4170),
      Hr = Qr(1251),
      qr = Qr(1576),
      Rr = Qr(4190),
      gr = Qr(35523),
      Cr = Qr(3619),
      Mr = Qr(35532),
      Gr = Qr(1338);

    function kr(rr) {
      let {
        shownView: Sr,
        close: Qr
      } = rr;
      const {
        t: Wr
      } = (0, Hr.E)(), ar = (0, lr.R)(), {
        purchaseUnderWay: jr,
        notice: Ir,
        needsLogin: fr,
        buyPack: Er
      } = (0, Mr.e)("popup", ((rr, Sr) => {
        Qr(!1), (0, Pr.e)(rr, Sr)
      })), pr = null === ar;
      (0, Zr.useEffect)((() => {
        pr && Qr(!1)
      }), [pr, Qr]);
      const xr = null !== ar && void 0 !== ar ? ar : Sr;
      return (0, Gr.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, Gr.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: Wr("newPlayerDeal:title")
        }), (0, Gr.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: Wr("newPlayerDeal:samePrice")
        }), (0, Gr.jsx)(gr.d, {
          className: "NewPlayerDealClockBig",
          endsAt: xr.endsAt
        }), (0, Gr.jsx)(gr.g, {
          view: xr,
          needsLogin: fr,
          busy: jr,
          highlight: null,
          onBuy: rr => {
            Er(xr, rr)
          }
        }), (0, Gr.jsx)(Rr.h, {
          notice: Ir,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Gr.jsx)(Rr.c, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Gr.jsx)(qr.L, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            Qr(!0)
          },
          children: Wr("newPlayerDeal:noThanks")
        })]
      })
    }

    function Ar(rr) {
      let {
        arm: Sr,
        children: Qr
      } = rr;
      return (0, Zr.useEffect)((() => {
        (0, lr.I)(!0)
      }), []), (0, lr.S)(Sr, "popup"), Qr
    }

    function Vr(rr) {
      let Sr = null;
      er.NotificationProvider.showCustomPopup({
        body: Qr => (0, Gr.jsx)(Ar, {
          arm: rr.arm,
          children: (0, Gr.jsx)(kr, {
            shownView: rr,
            close: rr => {
              Sr ??= rr, Qr()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((Qr => {
        (0, lr.I)(!1), !1 !== Sr && "notificationTornDown" !== Qr && (0, lr.E)("new_player_deal.close", (0, Cr.b)(rr.arm, "popup"))
      }))
    }
    const ir = 2500,
      wr = 6e4;
    const cr = 500,
      Fr = 6e4;

    function or(rr) {
      const Sr = Date.now() + Fr;
      return new Promise((Qr => {
        const Zr = () => {
          rr() ? (0, vr.g)() || er.NotificationProvider.hasPopup() || (0, Tr.m)() || (0, lr.s)() || null !== Nr.c.get("openEverythingMenuName") ? Date.now() > Sr ? Qr(!1) : setTimeout(Zr, cr) : Qr(!0) : Qr(!1)
        };
        Zr()
      }))
    }
    const br = "newPlayerDealPointerDeferred_";
    let Jr = !1,
      Dr = null;

    function dr(rr, Sr) {
      var Qr;
      return (null === (Qr = Dr) || void 0 === Qr ? void 0 : Qr.accountId) === Sr && Dr.shownCount === rr.shownCount
    }

    function sr(rr, Sr, Qr) {
      return !!dr(Sr, Qr) && (Dr = null, (0, lr.x)(Qr), Vr(rr), !0)
    }
    async function ur(rr, Sr, Qr, Zr) {
      if (Jr) return !1;
      let Wr;
      Jr = !0;
      try {
        Wr = await async function(rr) {
          const {
            newPlayerDeal: Sr,
            counted: Qr
          } = await (0, nr.postJsonWithMetricsCookiesAndJsonResponse)(`${Yr.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: rr
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: Sr,
            counted: !0 === Qr
          }
        }(Sr.shownCount)
      } catch (ar) {
        return console.error("New player deal: counting a showing of its popup failed", ar), !1
      } finally {
        Jr = !1
      }
      return (0, lr.M)(Qr, Wr.newPlayerDeal), Wr.counted && null !== Wr.newPlayerDeal && (Dr = {
        accountId: Zr,
        shownCount: Wr.newPlayerDeal.shownCount
      }, "landingPage" === Nr.c.get("gameState") && sr(rr, Wr.newPlayerDeal, Zr)), !0
    }
    let rS = null;

    function SS(rr, Sr, Qr, Wr, ar) {
      var jr;
      const {
        gameState: Ir
      } = (0, Nr.n)(["gameState"]), mr = "landingPage" === Ir, {
        pointing: Ur
      } = (0, Br.i)(), tr = (0, Zr.useRef)(Ur);
      tr.current = Ur;
      const hr = (0, Zr.useRef)(rr);
      hr.current = rr;
      const Yr = (0, Zr.useRef)(Sr);
      Yr.current = Sr;
      const nr = (0, Zr.useRef)(Qr);
      nr.current = Qr;
      const [er, Tr] = (0, Zr.useState)(null), vr = (0, Zr.useRef)(0), Or = (0, Zr.useRef)(0), Lr = (0, Zr.useRef)(!1), lr = (0, Zr.useCallback)((rr => {
        "open" === function(rr) {
          const Sr = rr ? (0, yr.getVisitSessionId)() : (0, yr.peekVisitSessionId)(),
            Qr = null !== Sr && Sr === rS ? "return" : "open";
          return rS = Sr, Qr
        }(rr) && (Lr.current = !0), vr.current++, Tr({
          seq: vr.current,
          kind: Lr.current ? "open" : "return"
        })
      }), []);
      (0, Zr.useEffect)((() => {
        if (!mr) return void Tr(null);
        lr(!0);
        const rr = () => {
          "visible" === document.visibilityState && lr(!0)
        };
        return document.addEventListener("visibilitychange", rr), () => {
          document.removeEventListener("visibilitychange", rr)
        }
      }), [mr, lr]);
      const Xr = null !== (jr = null === rr || void 0 === rr ? void 0 : rr.endsAt) && void 0 !== jr ? jr : null;
      (0, Zr.useEffect)((() => {
        if (!mr || null === Xr) return;
        const rr = fr(Xr) - Date.now();
        if (rr <= 0 || rr > zr.c) return;
        const Sr = setTimeout((() => {
          lr(!1)
        }), rr);
        return () => {
          clearTimeout(Sr)
        }
      }), [mr, Xr, lr]);
      const Pr = null !== rr && null !== Wr && null === ar;
      (0, Zr.useEffect)((() => {
        if (null === er || !Pr || Or.current >= er.seq) return;
        const rr = () => vr.current === er.seq && "landingPage" === Nr.c.get("gameState"),
          Sr = setTimeout((() => {
            const Sr = hr.current,
              Qr = Yr.current;
            if (null === Sr || null === Qr || !rr()) return;
            Or.current = er.seq;
            const Zr = Date.now(),
              ar = dr(Qr, Wr);
            if (!(ar || pr(Qr, {
                arrival: er.kind,
                now: Zr,
                endsAt: Sr.endsAt,
                playedOnDevice: Kr.j.getItem(xr.Ib) > 0
              }))) return void(Lr.current = !1);
            const jr = Er(Qr, Zr, Sr.endsAt);
            or(rr).then((async rr => {
              const Sr = hr.current;
              rr && null !== Sr && Yr.current === Qr && (!tr.current || jr || function(rr, Sr) {
                return Kr.j.getItem(br + rr) === Sr
              }(Wr, Qr.shownCount) ? ar ? sr(Sr, Qr, Wr) && (Lr.current = !1) : await ur(Sr, Qr, nr.current, Wr) && (Lr.current = !1) : function(rr, Sr) {
                Kr.j.setItem(br + rr, Sr)
              }(Wr, Qr.shownCount))
            }))
          }), ir);
        return () => {
          clearTimeout(Sr)
        }
      }), [er, Pr, Wr])
    }

    function QS() {
      const {
        userContext: rr
      } = (0, Lr.c)(), Sr = (0, Ur.usePurchasesAllowed)(), [Qr, ar] = (0, Zr.useState)(Xr.g);
      (0, Zr.useEffect)((() => (ar((0, Xr.g)()), (0, Xr.h)(ar))), []);
      const jr = (0, lr.b)(rr);
      ! function(rr, Sr, Qr) {
        const [ar, jr] = (0, Zr.useState)(0);
        (0, Zr.useEffect)((() => {
          if (!Sr || null === rr) return;
          if (null !== Qr) return void(0, lr.G)(rr, (0, Xr.d)());
          if (null !== (0, lr.h)(rr)) return;
          let Zr, ar = !1;
          return (0, hr.getBillingClient)().getOfferings(Wr).then((Sr => {
            let {
              offering: Qr
            } = Sr;
            (0, lr.G)(rr, null === Qr ? [] : Qr.packages.filter(tr.isPricedPackage))
          }), (rr => {
            console.error("New player deal: loading its prices failed", rr), ar || (Zr = setTimeout((() => {
              jr((rr => rr + 1))
            }), wr))
          })), () => {
            ar = !0, clearTimeout(Zr)
          }
        }), [rr, Sr, Qr, ar])
      }(jr, null !== (0, lr.j)(rr) && (Sr || null !== Qr), Qr);
      const Ir = (0, lr.R)();
      return SS(Ir, (0, lr.j)(rr), rr, jr, Qr),
        function() {
          const {
            userContext: rr
          } = (0, Lr.c)(), {
            gameState: Sr
          } = (0, Nr.n)(["gameState"]);
          (0, Zr.useEffect)((() => {
            if ("landingPage" !== Sr || !rr.isLoggedIn() && !(0, Ur.guestsMayBuy)()) return;
            const Qr = (0, lr.f)(rr),
              Zr = (0, Or.F)((rr => Qr.includes(rr.item)));
            null !== Zr && ((0, mr.reportAnalyticsClick)({
              id: "store.login_resume",
              value: Zr.item
            }), (0, Or.o)({
              mode: "self",
              source: "loginResume",
              highlight: Zr.item
            }))
          }), [rr, Sr])
        }(),
        function(rr, Sr, Qr) {
          const Wr = (0, Zr.useRef)(null);
          (0, Zr.useEffect)((() => {
            if (null === Qr || null === rr || null === Sr || Wr.current === Qr) return;
            Wr.current = Qr;
            const Zr = rr.packs[0].pack;
            switch (Qr.show) {
              case "popup":
                (0, lr.x)(Sr), Vr(rr);
                break;
              case "store":
                (0, Or.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, Or.o)({
                  mode: "self",
                  source: "loginResume",
                  highlight: Zr.packageId
                });
                break;
              case "bought":
                (0, Or.o)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, lr.v)(Sr), (0, Mr.c)(Zr.gems);
                break;
              case "gift":
                (0, Or.o)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [Qr, rr, Sr])
        }(Ir, jr, Qr), null
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
  35525: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);