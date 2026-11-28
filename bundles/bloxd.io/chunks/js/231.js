export const id = 231;
export const ids = [231];
export const modules = {
  37931: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => FO
    });
    var Wd = md(66);
    const Fd = "newPlayerDeal",
      Rd = 36e5,
      Xd = [4, 12, 20, 20, 30];
    const Kd = 12 * Rd;

    function hd(dd) {
      return dd - Kd
    }

    function vd(dd, Od, md) {
      const Wd = hd(md);
      return Od >= Wd && Od < md && (null === dd.lastShownAt || dd.lastShownAt < Wd)
    }

    function Qd(dd, Od) {
      const {
        arrival: md,
        now: Wd,
        endsAt: Fd,
        playedOnDevice: Kd
      } = Od;
      return !(Wd >= Fd || !Kd) && (!(!vd(dd, Wd, Fd) && 0 !== dd.shownCount && null !== dd.lastShownAt) || "open" === md && Wd - dd.lastShownAt >= (hd = dd.shownCount, Xd[Math.min(Math.max(hd, 1), Xd.length) - 1] * Rd));
      var hd
    }
    var td = md(387),
      od = md(1605),
      Nd = md(29),
      qd = md(3184),
      Hd = md(4113),
      yd = md(4122),
      bd = md(2111),
      Td = md(1253),
      pd = md(1189);
    var Yd = md(1462),
      gd = md(46),
      wd = md(747),
      Ed = md(3568),
      Jd = md(1466),
      Ud = md(3573),
      xd = md(3181),
      Bd = md(1186),
      Sd = md(3610),
      sd = md(3618),
      ud = md(4164),
      Vd = md(1238),
      Ad = md(1572),
      rd = md(4184),
      Gd = md(35602),
      nd = md(3621),
      Ld = md(35611),
      Pd = md(1341);

    function zd(dd) {
      let {
        shownView: Od,
        close: md
      } = dd;
      const {
        t: Fd
      } = (0, Vd.G)(), Rd = (0, Sd.O)(), {
        purchaseUnderWay: Xd,
        notice: Kd,
        needsLogin: hd,
        buyPack: vd
      } = (0, Ld.d)("popup", ((dd, Od) => {
        md(!1), (0, ud.d)(dd, Od)
      })), Qd = null === Rd;
      (0, Wd.useEffect)((() => {
        Qd && md(!1)
      }), [Qd, md]);
      const td = null !== Rd && void 0 !== Rd ? Rd : Od;
      return (0, Pd.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, Pd.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: Fd("newPlayerDeal:title")
        }), (0, Pd.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: Fd("newPlayerDeal:samePrice")
        }), (0, Pd.jsx)(Gd.c, {
          className: "NewPlayerDealClockBig",
          endsAt: td.endsAt
        }), (0, Pd.jsx)(Gd.f, {
          view: td,
          needsLogin: hd,
          busy: Xd,
          highlight: null,
          onBuy: dd => {
            vd(td, dd)
          }
        }), (0, Pd.jsx)(rd.j, {
          notice: Kd,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Pd.jsx)(rd.c, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Pd.jsx)(Ad.G, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            md(!0)
          },
          children: Fd("newPlayerDeal:noThanks")
        })]
      })
    }

    function cd(dd) {
      let {
        arm: Od,
        children: md
      } = dd;
      return (0, Wd.useEffect)((() => {
        (0, Sd.D)(!0)
      }), []), (0, Sd.Q)(Od, "popup"), md
    }

    function jd(dd) {
      let Od = null;
      Yd.NotificationProvider.showCustomPopup({
        body: md => (0, Pd.jsx)(cd, {
          arm: dd.arm,
          children: (0, Pd.jsx)(zd, {
            shownView: dd,
            close: dd => {
              Od ??= dd, md()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((md => {
        (0, Sd.D)(!1), !1 !== Od && "notificationTornDown" !== md && (0, Sd.y)("new_player_deal.close", (0, nd.e)(dd.arm, "popup"))
      }))
    }
    const Dd = 2500,
      ed = 6e4;
    const Id = 500,
      ld = 6e4;

    function Cd(dd) {
      const Od = Date.now() + ld;
      return new Promise((md => {
        const Wd = () => {
          dd() ? (0, Ud.d)() || Yd.NotificationProvider.hasPopup() || (0, Jd.k)() || (0, Sd.s)() || null !== Nd.e.get("openEverythingMenuName") ? Date.now() > Od ? md(!1) : setTimeout(Wd, Id) : md(!0) : md(!1)
        };
        Wd()
      }))
    }
    const Zd = "newPlayerDealPointerDeferred_";
    let kd = !1,
      fd = null;

    function Md(dd, Od) {
      var md;
      return (null === (md = fd) || void 0 === md ? void 0 : md.accountId) === Od && fd.shownCount === dd.shownCount
    }

    function dO(dd, Od, md) {
      return !!Md(Od, md) && (fd = null, (0, Sd.v)(md), jd(dd), !0)
    }
    async function OO(dd, Od, md, Wd) {
      if (kd) return !1;
      let Fd;
      kd = !0;
      try {
        Fd = await async function(dd) {
          const {
            newPlayerDeal: Od,
            counted: md
          } = await (0, pd.postJsonWithMetricsCookiesAndJsonResponse)(`${Td.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: dd
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: Od,
            counted: !0 === md
          }
        }(Od.shownCount)
      } catch (Rd) {
        return console.error("New player deal: counting a showing of its popup failed", Rd), !1
      } finally {
        kd = !1
      }
      return (0, Sd.G)(md, Fd.newPlayerDeal), Fd.counted && null !== Fd.newPlayerDeal && (fd = {
        accountId: Wd,
        shownCount: Fd.newPlayerDeal.shownCount
      }, "landingPage" === Nd.e.get("gameState") && dO(dd, Fd.newPlayerDeal, Wd)), !0
    }
    let mO = null;

    function WO(dd, Od, md, Fd, Rd) {
      var Xd;
      const {
        gameState: Kd
      } = (0, Nd.p)(["gameState"]), od = "landingPage" === Kd, {
        pointing: qd
      } = (0, Ed.h)(), Hd = (0, Wd.useRef)(qd);
      Hd.current = qd;
      const yd = (0, Wd.useRef)(dd);
      yd.current = dd;
      const Td = (0, Wd.useRef)(Od);
      Td.current = Od;
      const pd = (0, Wd.useRef)(md);
      pd.current = md;
      const [Yd, Jd] = (0, Wd.useState)(null), Ud = (0, Wd.useRef)(0), xd = (0, Wd.useRef)(0), Bd = (0, Wd.useRef)(!1), Sd = (0, Wd.useCallback)((dd => {
        "open" === function(dd) {
          const Od = dd ? (0, wd.getVisitSessionId)() : (0, wd.peekVisitSessionId)(),
            md = null !== Od && Od === mO ? "return" : "open";
          return mO = Od, md
        }(dd) && (Bd.current = !0), Ud.current++, Jd({
          seq: Ud.current,
          kind: Bd.current ? "open" : "return"
        })
      }), []);
      (0, Wd.useEffect)((() => {
        if (!od) return void Jd(null);
        Sd(!0);
        const dd = () => {
          "visible" === document.visibilityState && Sd(!0)
        };
        return document.addEventListener("visibilitychange", dd), () => {
          document.removeEventListener("visibilitychange", dd)
        }
      }), [od, Sd]);
      const sd = null !== (Xd = null === dd || void 0 === dd ? void 0 : dd.endsAt) && void 0 !== Xd ? Xd : null;
      (0, Wd.useEffect)((() => {
        if (!od || null === sd) return;
        const dd = hd(sd) - Date.now();
        if (dd <= 0 || dd > bd.d) return;
        const Od = setTimeout((() => {
          Sd(!1)
        }), dd);
        return () => {
          clearTimeout(Od)
        }
      }), [od, sd, Sd]);
      const ud = null !== dd && null !== Fd && null === Rd;
      (0, Wd.useEffect)((() => {
        if (null === Yd || !ud || xd.current >= Yd.seq) return;
        const dd = () => Ud.current === Yd.seq && "landingPage" === Nd.e.get("gameState"),
          Od = setTimeout((() => {
            const Od = yd.current,
              md = Td.current;
            if (null === Od || null === md || !dd()) return;
            xd.current = Yd.seq;
            const Wd = Date.now(),
              Rd = Md(md, Fd);
            if (!(Rd || Qd(md, {
                arrival: Yd.kind,
                now: Wd,
                endsAt: Od.endsAt,
                playedOnDevice: gd.k.getItem(td.Ib) > 0
              }))) return void(Bd.current = !1);
            const Xd = vd(md, Wd, Od.endsAt);
            Cd(dd).then((async dd => {
              const Od = yd.current;
              dd && null !== Od && Td.current === md && (!Hd.current || Xd || function(dd, Od) {
                return gd.k.getItem(Zd + dd) === Od
              }(Fd, md.shownCount) ? Rd ? dO(Od, md, Fd) && (Bd.current = !1) : await OO(Od, md, pd.current, Fd) && (Bd.current = !1) : function(dd, Od) {
                gd.k.setItem(Zd + dd, Od)
              }(Fd, md.shownCount))
            }))
          }), Dd);
        return () => {
          clearTimeout(Od)
        }
      }), [Yd, ud, Fd])
    }

    function FO() {
      const {
        userContext: dd
      } = (0, Bd.d)(), Od = (0, qd.usePurchasesAllowed)(), [md, Rd] = (0, Wd.useState)(sd.k);
      (0, Wd.useEffect)((() => (Rd((0, sd.k)()), (0, sd.m)(Rd))), []);
      const Xd = (0, Sd.c)(dd);
      ! function(dd, Od, md) {
        const [Rd, Xd] = (0, Wd.useState)(0);
        (0, Wd.useEffect)((() => {
          if (!Od || null === dd) return;
          if (null !== md) return void(0, Sd.A)(dd, (0, sd.d)());
          if (null !== (0, Sd.j)(dd)) return;
          let Wd, Rd = !1;
          return (0, yd.getBillingClient)().getOfferings(Fd).then((Od => {
            let {
              offering: md
            } = Od;
            (0, Sd.A)(dd, null === md ? [] : md.packages.filter(Hd.isPricedPackage))
          }), (dd => {
            console.error("New player deal: loading its prices failed", dd), Rd || (Wd = setTimeout((() => {
              Xd((dd => dd + 1))
            }), ed))
          })), () => {
            Rd = !0, clearTimeout(Wd)
          }
        }), [dd, Od, md, Rd])
      }(Xd, null !== (0, Sd.m)(dd) && (Od || null !== md), md);
      const Kd = (0, Sd.O)();
      return WO(Kd, (0, Sd.m)(dd), dd, Xd, md),
        function() {
          const {
            userContext: dd
          } = (0, Bd.d)(), {
            gameState: Od
          } = (0, Nd.p)(["gameState"]);
          (0, Wd.useEffect)((() => {
            if ("landingPage" !== Od || !dd.isLoggedIn() && !(0, qd.guestsMayBuy)()) return;
            const md = (0, Sd.g)(dd),
              Wd = (0, xd.z)((dd => md.includes(dd.item)));
            null !== Wd && ((0, od.reportAnalyticsClick)({
              id: "store.login_resume",
              value: Wd.item
            }), (0, xd.p)({
              mode: "self",
              source: "loginResume",
              highlight: Wd.item
            }))
          }), [dd, Od])
        }(),
        function(dd, Od, md) {
          const Fd = (0, Wd.useRef)(null);
          (0, Wd.useEffect)((() => {
            if (null === md || null === dd || null === Od || Fd.current === md) return;
            Fd.current = md;
            const Wd = dd.packs[0].pack;
            switch (md.show) {
              case "popup":
                (0, Sd.v)(Od), jd(dd);
                break;
              case "store":
                (0, xd.p)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, xd.p)({
                  mode: "self",
                  source: "loginResume",
                  highlight: Wd.packageId
                });
                break;
              case "bought":
                (0, xd.p)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, Sd.u)(Od), (0, Ld.c)(Wd.gems);
                break;
              case "gift":
                (0, xd.p)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [md, dd, Od])
        }(Kd, Xd, md), null
    }
  },
  35602: (dd, Od, md) => {
    md.d(Od, {
      c: () => qd,
      f: () => yd
    });
    md(35605);
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1238),
      Kd = md(1572),
      hd = md(3635),
      vd = md(1443),
      Qd = md(3353),
      td = md(4177),
      od = md(3198),
      Nd = md(1341);

    function qd(dd) {
      let {
        endsAt: Od,
        className: md
      } = dd;
      return (0, Nd.jsxs)("span", {
        className: Rd()("NewPlayerDealClock", md),
        children: [(0, Nd.jsx)(vd.c, {
          name: "hourglass"
        }), (0, Nd.jsx)(hd.e, {
          toTime: Od
        })]
      })
    }

    function Hd(dd) {
      let {
        offered: Od,
        needsLogin: md,
        busy: Wd,
        highlight: Fd,
        onBuy: hd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)(), {
        pack: qd
      } = Od, Hd = (0, td.e)(Od.package);
      return (0, Nd.jsxs)("div", {
        className: Rd()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: Fd
        }),
        children: [(0, Nd.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, Nd.jsx)("img", {
            src: od.c[Od.tier],
            alt: "",
            draggable: !1
          }), (0, Nd.jsx)("span", {
            className: "NewPlayerDealTag",
            children: vd("newPlayerDeal:tag")
          })]
        }), (0, Nd.jsxs)("div", {
          className: "NewPlayerDealPackText",
          children: [(0, Nd.jsx)(Qd.c, {
            className: "NewPlayerDealPackAmount",
            amount: qd.gems
          }), (0, Nd.jsx)("span", {
            className: "NewPlayerDealSplit",
            children: vd("newPlayerDeal:split", {
              usual: qd.usualGems.toLocaleString(),
              bonus: (qd.gems - qd.usualGems).toLocaleString()
            })
          })]
        }), (0, Nd.jsx)(Kd.m, {
          className: "NewPlayerDealBuy",
          loading: Wd,
          onClick: hd,
          ariaLabel: vd("newPlayerDeal:buyLabel", {
            amount: qd.gems.toLocaleString(),
            price: Hd
          }),
          children: vd(md ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: Hd
          })
        })]
      })
    }

    function yd(dd) {
      let {
        view: Od,
        needsLogin: md,
        busy: Fd,
        highlight: Kd,
        onBuy: hd
      } = dd;
      const {
        t: vd
      } = (0, Xd.G)();
      return (0, Nd.jsxs)("div", {
        className: Rd()("NewPlayerDealPacks", Od.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [Od.packs.map(((dd, Od) => (0, Nd.jsxs)(Wd.Fragment, {
          children: [Od > 0 && (0, Nd.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, Nd.jsx)("i", {})
          }), (0, Nd.jsx)(Hd, {
            offered: dd,
            needsLogin: md,
            busy: Fd,
            highlight: Kd === dd.pack.packageId,
            onBuy: () => {
              hd(dd)
            }
          })]
        }, dd.pack.packageId))), (0, Nd.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, Nd.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: vd("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35611: (dd, Od, md) => {
    md.d(Od, {
      c: () => Ud,
      d: () => Bd
    });
    md(35605);
    var Wd = md(4175),
      Fd = md(1605),
      Rd = md(3184),
      Xd = md(4164),
      Kd = md(4141),
      hd = md(4173),
      vd = md(4122),
      Qd = md(1238),
      td = md(1462),
      od = md(1186),
      Nd = md(1572),
      qd = md(1443),
      Hd = md(3353),
      yd = md(3758),
      bd = md(3610),
      Td = md(3618),
      pd = md(3621),
      Yd = md(1341);
    const gd = new hd.d(vd.getBillingClient, vd.addPurchaseRecordListener);
    let wd = !1;

    function Ed(dd, Od) {
      null !== dd && (0, bd.q)(dd) || ((0, Fd.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${Od.pack.packageId}`
      }), null !== dd && (0, bd.u)(dd), Ud(Od.pack.gems))
    }

    function Jd(dd, Od, md) {
      const Fd = (0, bd.c)(Od);
      switch (dd.kind) {
        case "completed":
          Ed(Fd, md);
          break;
        case "pending":
          Rd = dd.intentId, Xd = () => {
            yd.j.refresh(), Ed(Fd, md)
          }, wd || (wd = !0, gd.listen()), gd.follow(Rd, Xd);
          break;
        case "unknownPackage":
          (0, bd.G)(Od, null);
          break;
        case "failed":
          dd.errorKey === Wd.e.newPlayerDealUnavailable && (0, bd.G)(Od, null)
      }
      var Rd, Xd
    }

    function Ud(dd) {
      td.NotificationProvider.showCustomPopup({
        body: Od => (0, Yd.jsx)(xd, {
          gems: dd,
          close: Od
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function xd(dd) {
      let {
        gems: Od,
        close: md
      } = dd;
      const {
        t: Wd
      } = (0, Qd.G)();
      return (0, Yd.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, Yd.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, Yd.jsx)(qd.c, {
            name: "circle-check"
          }), (0, Yd.jsx)(Hd.c, {
            amount: Od
          }), (0, Yd.jsx)("span", {
            children: Wd("newPlayerDeal:added")
          })]
        }), (0, Yd.jsx)(Nd.m, {
          className: "NewPlayerDealAddedOk",
          onClick: md,
          children: Wd("general:ok")
        })]
      })
    }

    function Bd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd.d;
      const {
        userContext: md
      } = (0, od.d)(), {
        purchaseUnderWay: Wd,
        notice: Fd,
        buy: hd
      } = (0, Kd.d)(Od), vd = (0, Td.k)(), Qd = md.mayBuy() || (0, Rd.guestsMayBuy)(), td = null === vd ? !Qd : vd.guest && !md.isLoggedIn();
      return {
        purchaseUnderWay: Wd,
        notice: Fd,
        needsLogin: td,
        buyPack: function(Wd, Fd) {
          (0, bd.y)("new_player_deal.buy", (0, pd.e)(Wd.arm, dd, Fd.pack.packageId)), null === vd ? hd(function(dd) {
            return {
              sku: dd.pack.packageId,
              tier: dd.tier,
              amount: dd.pack.gems,
              bonusPercent: 0,
              package: dd.package
            }
          }(Fd), null, {
            followPending: !1
          }).then((dd => {
            Jd(dd, md, Fd)
          })) : td ? Od(Fd.pack.packageId, null) : Ed((0, bd.c)(md), Fd)
        }
      }
    }
  },
  35605: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);