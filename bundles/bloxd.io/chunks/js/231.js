export const id = 231;
export const ids = [231];
export const modules = {
  37617: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Mw
    });
    var eb = Mb(64);
    const Hb = "newPlayerDeal",
      pb = 36e5,
      Vb = [4, 12, 20, 20, 30];
    const gb = 12 * pb;

    function lb(bb) {
      return bb - gb
    }

    function Lb(bb, wb, Mb) {
      const eb = lb(Mb);
      return wb >= eb && wb < Mb && (null === bb.lastShownAt || bb.lastShownAt < eb)
    }

    function Ib(bb, wb) {
      const {
        arrival: Mb,
        now: eb,
        endsAt: Hb,
        playedOnDevice: gb
      } = wb;
      return !(eb >= Hb || !gb) && (!(!Lb(bb, eb, Hb) && 0 !== bb.shownCount && null !== bb.lastShownAt) || "open" === Mb && eb - bb.lastShownAt >= (lb = bb.shownCount, Vb[Math.min(Math.max(lb, 1), Vb.length) - 1] * pb));
      var lb
    }
    var Ob = Mb(366),
      Ub = Mb(1648),
      tb = Mb(26),
      Cb = Mb(3263),
      Eb = Mb(4300),
      Fb = Mb(4308),
      Bb = Mb(2162),
      sb = Mb(1271),
      mb = Mb(1186);
    var hb = Mb(1504),
      zb = Mb(43),
      Xb = Mb(715),
      xb = Mb(3700),
      jb = Mb(1507),
      Kb = Mb(3702),
      rb = Mb(3257),
      Rb = Mb(1179),
      Db = Mb(3744),
      cb = Mb(3750),
      Yb = Mb(4342),
      Zb = Mb(1259),
      fb = Mb(1616),
      Ab = Mb(4357),
      Wb = Mb(35384),
      Jb = Mb(3759),
      Sb = Mb(35389),
      Nb = Mb(1364);

    function vb(bb) {
      let {
        shownView: wb,
        close: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Zb.C)(), pb = (0, Db.O)(), {
        purchaseUnderWay: Vb,
        notice: gb,
        needsLogin: lb,
        buyPack: Lb
      } = (0, Sb.f)("popup", ((bb, wb) => {
        Mb(!1), (0, Yb.e)(bb, wb)
      })), Ib = null === pb;
      (0, eb.useEffect)((() => {
        Ib && Mb(!1)
      }), [Ib, Mb]);
      const Ob = null !== pb && void 0 !== pb ? pb : wb;
      return (0, Nb.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, Nb.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: Hb("newPlayerDeal:title")
        }), (0, Nb.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: Hb("newPlayerDeal:samePrice")
        }), (0, Nb.jsx)(Wb.b, {
          className: "NewPlayerDealClockBig",
          endsAt: Ob.endsAt
        }), (0, Nb.jsx)(Wb.c, {
          view: Ob,
          needsLogin: lb,
          busy: Vb,
          highlight: null,
          onBuy: bb => {
            Lb(Ob, bb)
          }
        }), (0, Nb.jsx)(Ab.h, {
          notice: gb,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Nb.jsx)(Ab.d, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Nb.jsx)(fb.Q, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            Mb(!0)
          },
          children: Hb("newPlayerDeal:noThanks")
        })]
      })
    }

    function Qb(bb) {
      let {
        arm: wb,
        children: Mb
      } = bb;
      return (0, eb.useEffect)((() => {
        (0, Db.H)(!0)
      }), []), (0, Db.S)(wb, "popup"), Mb
    }

    function Gb(bb) {
      let wb = null;
      hb.NotificationProvider.showCustomPopup({
        body: Mb => (0, Nb.jsx)(Qb, {
          arm: bb.arm,
          children: (0, Nb.jsx)(vb, {
            shownView: bb,
            close: bb => {
              wb ??= bb, Mb()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((Mb => {
        (0, Db.H)(!1), !1 !== wb && "notificationTornDown" !== Mb && (0, Db.A)("new_player_deal.close", (0, Jb.b)(bb.arm, "popup"))
      }))
    }
    const qb = 2500,
      ab = 6e4;
    const ib = 500,
      ub = 6e4;

    function db(bb) {
      const wb = Date.now() + ub;
      return new Promise((Mb => {
        const eb = () => {
          bb() ? (0, Kb.h)() || hb.NotificationProvider.hasPopup() || (0, jb.k)() || (0, Db.r)() || null !== tb.c.get("openEverythingMenuName") ? Date.now() > wb ? Mb(!1) : setTimeout(eb, ib) : Mb(!0) : Mb(!1)
        };
        eb()
      }))
    }
    const Pb = "newPlayerDealPointerDeferred_";
    let nb = !1,
      yb = null;

    function ob(bb, wb) {
      var Mb;
      return (null === (Mb = yb) || void 0 === Mb ? void 0 : Mb.accountId) === wb && yb.shownCount === bb.shownCount
    }

    function Tb(bb, wb, Mb) {
      return !!ob(wb, Mb) && (yb = null, (0, Db.x)(Mb), Gb(bb), !0)
    }
    async function kb(bb, wb, Mb, eb) {
      if (nb) return !1;
      let Hb;
      nb = !0;
      try {
        Hb = await async function(bb) {
          const {
            newPlayerDeal: wb,
            counted: Mb
          } = await (0, mb.postJsonWithMetricsCookiesAndJsonResponse)(`${sb.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: bb
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: wb,
            counted: !0 === Mb
          }
        }(wb.shownCount)
      } catch (pb) {
        return console.error("New player deal: counting a showing of its popup failed", pb), !1
      } finally {
        nb = !1
      }
      return (0, Db.L)(Mb, Hb.newPlayerDeal), Hb.counted && null !== Hb.newPlayerDeal && (yb = {
        accountId: eb,
        shownCount: Hb.newPlayerDeal.shownCount
      }, "landingPage" === tb.c.get("gameState") && Tb(bb, Hb.newPlayerDeal, eb)), !0
    }
    let bw = null;

    function ww(bb, wb, Mb, Hb, pb) {
      var Vb;
      const {
        gameState: gb
      } = (0, tb.o)(["gameState"]), Ub = "landingPage" === gb, {
        pointing: Cb
      } = (0, xb.f)(), Eb = (0, eb.useRef)(Cb);
      Eb.current = Cb;
      const Fb = (0, eb.useRef)(bb);
      Fb.current = bb;
      const sb = (0, eb.useRef)(wb);
      sb.current = wb;
      const mb = (0, eb.useRef)(Mb);
      mb.current = Mb;
      const [hb, jb] = (0, eb.useState)(null), Kb = (0, eb.useRef)(0), rb = (0, eb.useRef)(0), Rb = (0, eb.useRef)(!1), Db = (0, eb.useCallback)((bb => {
        "open" === function(bb) {
          const wb = bb ? (0, Xb.getVisitSessionId)() : (0, Xb.peekVisitSessionId)(),
            Mb = null !== wb && wb === bw ? "return" : "open";
          return bw = wb, Mb
        }(bb) && (Rb.current = !0), Kb.current++, jb({
          seq: Kb.current,
          kind: Rb.current ? "open" : "return"
        })
      }), []);
      (0, eb.useEffect)((() => {
        if (!Ub) return void jb(null);
        Db(!0);
        const bb = () => {
          "visible" === document.visibilityState && Db(!0)
        };
        return document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        }
      }), [Ub, Db]);
      const cb = null !== (Vb = null === bb || void 0 === bb ? void 0 : bb.endsAt) && void 0 !== Vb ? Vb : null;
      (0, eb.useEffect)((() => {
        if (!Ub || null === cb) return;
        const bb = lb(cb) - Date.now();
        if (bb <= 0 || bb > Bb.d) return;
        const wb = setTimeout((() => {
          Db(!1)
        }), bb);
        return () => {
          clearTimeout(wb)
        }
      }), [Ub, cb, Db]);
      const Yb = null !== bb && null !== Hb && null === pb;
      (0, eb.useEffect)((() => {
        if (null === hb || !Yb || rb.current >= hb.seq) return;
        const bb = () => Kb.current === hb.seq && "landingPage" === tb.c.get("gameState"),
          wb = setTimeout((() => {
            const wb = Fb.current,
              Mb = sb.current;
            if (null === wb || null === Mb || !bb()) return;
            rb.current = hb.seq;
            const eb = Date.now(),
              pb = ob(Mb, Hb);
            if (!(pb || Ib(Mb, {
                arrival: hb.kind,
                now: eb,
                endsAt: wb.endsAt,
                playedOnDevice: zb.i.getItem(Ob.Jb) > 0
              }))) return void(Rb.current = !1);
            const Vb = Lb(Mb, eb, wb.endsAt);
            db(bb).then((async bb => {
              const wb = Fb.current;
              bb && null !== wb && sb.current === Mb && (!Eb.current || Vb || function(bb, wb) {
                return zb.i.getItem(Pb + bb) === wb
              }(Hb, Mb.shownCount) ? pb ? Tb(wb, Mb, Hb) && (Rb.current = !1) : await kb(wb, Mb, mb.current, Hb) && (Rb.current = !1) : function(bb, wb) {
                zb.i.setItem(Pb + bb, wb)
              }(Hb, Mb.shownCount))
            }))
          }), qb);
        return () => {
          clearTimeout(wb)
        }
      }), [hb, Yb, Hb])
    }

    function Mw() {
      const {
        userContext: bb
      } = (0, Rb.e)(), wb = (0, Cb.usePurchasesAllowed)(), [Mb, pb] = (0, eb.useState)(cb.l);
      (0, eb.useEffect)((() => (pb((0, cb.l)()), (0, cb.m)(pb))), []);
      const Vb = (0, Db.b)(bb);
      ! function(bb, wb, Mb) {
        const [pb, Vb] = (0, eb.useState)(0);
        (0, eb.useEffect)((() => {
          if (!wb || null === bb) return;
          if (null !== Mb) return void(0, Db.D)(bb, (0, cb.h)());
          if (null !== (0, Db.j)(bb)) return;
          let eb, pb = !1;
          return (0, Fb.getBillingClient)().getOfferings(Hb).then((wb => {
            let {
              offering: Mb
            } = wb;
            (0, Db.D)(bb, null === Mb ? [] : Mb.packages.filter(Eb.isPricedPackage))
          }), (bb => {
            console.error("New player deal: loading its prices failed", bb), pb || (eb = setTimeout((() => {
              Vb((bb => bb + 1))
            }), ab))
          })), () => {
            pb = !0, clearTimeout(eb)
          }
        }), [bb, wb, Mb, pb])
      }(Vb, null !== (0, Db.l)(bb) && (wb || null !== Mb), Mb);
      const gb = (0, Db.O)();
      return ww(gb, (0, Db.l)(bb), bb, Vb, Mb),
        function() {
          const {
            userContext: bb
          } = (0, Rb.e)(), {
            gameState: wb
          } = (0, tb.o)(["gameState"]);
          (0, eb.useEffect)((() => {
            if ("landingPage" !== wb || !bb.isLoggedIn() && !(0, Cb.guestsMayBuy)()) return;
            const Mb = (0, Db.f)(bb),
              eb = (0, rb.A)((bb => Mb.includes(bb.item)));
            null !== eb && ((0, Ub.reportAnalyticsClick)({
              id: "store.login_resume",
              value: eb.item
            }), (0, rb.r)({
              mode: "self",
              source: "loginResume",
              highlight: eb.item
            }))
          }), [bb, wb])
        }(),
        function(bb, wb, Mb) {
          const Hb = (0, eb.useRef)(null);
          (0, eb.useEffect)((() => {
            if (null === Mb || null === bb || null === wb || Hb.current === Mb) return;
            Hb.current = Mb;
            const eb = bb.packs[0].pack;
            switch (Mb.show) {
              case "popup":
                (0, Db.x)(wb), Gb(bb);
                break;
              case "store":
                (0, rb.r)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, rb.r)({
                  mode: "self",
                  source: "loginResume",
                  highlight: eb.packageId
                });
                break;
              case "bought":
                (0, rb.r)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, Db.t)(wb), (0, Sb.e)(eb.gems);
                break;
              case "gift":
                (0, rb.r)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [Mb, bb, wb])
        }(gb, Vb, Mb), null
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
  35387: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);