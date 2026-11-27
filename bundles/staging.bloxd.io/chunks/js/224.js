export const id = 224;
export const ids = [224];
export const modules = {
  37181: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Hi
    });
    var ye = He(59);
    const be = "newPlayerDeal",
      Me = 36e5,
      Ke = [4, 12, 20, 20, 30];
    const Ue = 12 * Me;

    function Fe(ee) {
      return ee - Ue
    }

    function Je(ee, ie, He) {
      const ye = Fe(He);
      return ie >= ye && ie < He && (null === ee.lastShownAt || ee.lastShownAt < ye)
    }

    function oe(ee, ie) {
      const {
        arrival: He,
        now: ye,
        endsAt: be,
        playedOnDevice: Ue
      } = ie;
      return !(ye >= be || !Ue) && (!(!Je(ee, ye, be) && 0 !== ee.shownCount && null !== ee.lastShownAt) || "open" === He && ye - ee.lastShownAt >= (Fe = ee.shownCount, Ke[Math.min(Math.max(Fe, 1), Ke.length) - 1] * Me));
      var Fe
    }
    var Re = He(335),
      ke = He(1464),
      qe = He(18),
      fe = He(2330),
      Te = He(3285),
      pe = He(3293),
      Xe = He(2009),
      ze = He(1141),
      Be = He(1083);
    var Ee = He(1340),
      ge = He(35),
      Oe = He(660),
      de = He(2648),
      We = He(1342),
      te = He(2656),
      Ze = He(2326),
      we = He(1075),
      De = He(2694),
      Pe = He(2697),
      Ae = He(3335),
      Ye = He(1127),
      Ve = He(1438),
      ae = He(3355),
      ce = He(34945),
      xe = He(2703),
      Le = He(34951),
      Ce = He(1228);

    function ve(ee) {
      let {
        shownView: ie,
        close: He
      } = ee;
      const {
        t: be
      } = (0, Ye.v)(), Me = (0, De.M)(), {
        purchaseUnderWay: Ke,
        notice: Ue,
        needsLogin: Fe,
        buyPack: Je
      } = (0, Le.h)("popup", ((ee, ie) => {
        He(!1), (0, Ae.b)(ee, ie)
      })), oe = null === Me;
      (0, ye.useEffect)((() => {
        oe && He(!1)
      }), [oe, He]);
      const Re = null !== Me && void 0 !== Me ? Me : ie;
      return (0, Ce.jsxs)("div", {
        className: "NewPlayerDealPopup",
        children: [(0, Ce.jsx)("div", {
          className: "NewPlayerDealPopupTitle",
          children: be("newPlayerDeal:title")
        }), (0, Ce.jsx)("div", {
          className: "NewPlayerDealPopupSub",
          children: be("newPlayerDeal:samePrice")
        }), (0, Ce.jsx)(ce.d, {
          className: "NewPlayerDealClockBig",
          endsAt: Re.endsAt
        }), (0, Ce.jsx)(ce.g, {
          view: Re,
          needsLogin: Fe,
          busy: Ke,
          highlight: null,
          onBuy: ee => {
            Je(Re, ee)
          }
        }), (0, Ce.jsx)(ae.i, {
          notice: Ue,
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Ce.jsx)(ae.d, {
          className: "SmallTextBold NewPlayerDealNotice"
        }), (0, Ce.jsx)(Ve.c, {
          className: "NewPlayerDealNoThanks",
          onClick: () => {
            He(!0)
          },
          children: be("newPlayerDeal:noThanks")
        })]
      })
    }

    function ue(ee) {
      let {
        arm: ie,
        children: He
      } = ee;
      return (0, ye.useEffect)((() => {
        (0, De.G)(!0)
      }), []), (0, De.O)(ie, "popup"), He
    }

    function me(ee) {
      let ie = null;
      Ee.NotificationProvider.showCustomPopup({
        body: He => (0, Ce.jsx)(ue, {
          arm: ee.arm,
          children: (0, Ce.jsx)(ve, {
            shownView: ee,
            close: ee => {
              ie ??= ee, He()
            }
          })
        }),
        middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
        middleScreenPopupClassName: "NewPlayerDealPopupPanel",
        disableExitButton: !0,
        unlockPointerKey: "NewPlayerDealPopup"
      }).getResult().then((He => {
        (0, De.G)(!1), !1 !== ie && "notificationTornDown" !== He && (0, De.z)("new_player_deal.close", (0, xe.b)(ee.arm, "popup"))
      }))
    }
    const le = 2500,
      Se = 6e4;
    const ne = 500,
      je = 6e4;

    function se(ee) {
      const ie = Date.now() + je;
      return new Promise((He => {
        const ye = () => {
          ee() ? (0, te.d)() || Ee.NotificationProvider.hasPopup() || (0, We.l)() || (0, De.s)() || null !== qe.e.get("openEverythingMenuName") ? Date.now() > ie ? He(!1) : setTimeout(ye, ne) : He(!0) : He(!1)
        };
        ye()
      }))
    }
    const Ie = "newPlayerDealPointerDeferred_";
    let he = !1,
      Ne = null;

    function Ge(ee, ie) {
      var He;
      return (null === (He = Ne) || void 0 === He ? void 0 : He.accountId) === ie && Ne.shownCount === ee.shownCount
    }

    function re(ee, ie, He) {
      return !!Ge(ie, He) && (Ne = null, (0, De.v)(He), me(ee), !0)
    }
    async function Qe(ee, ie, He, ye) {
      if (he) return !1;
      let be;
      he = !0;
      try {
        be = await async function(ee) {
          const {
            newPlayerDeal: ie,
            counted: He
          } = await (0, Be.postJsonWithMetricsCookiesAndJsonResponse)(`${ze.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
            shownCount: ee
          }, {
            retries: 1
          });
          return {
            newPlayerDeal: ie,
            counted: !0 === He
          }
        }(ie.shownCount)
      } catch (Me) {
        return console.error("New player deal: counting a showing of its popup failed", Me), !1
      } finally {
        he = !1
      }
      return (0, De.H)(He, be.newPlayerDeal), be.counted && null !== be.newPlayerDeal && (Ne = {
        accountId: ye,
        shownCount: be.newPlayerDeal.shownCount
      }, "landingPage" === qe.e.get("gameState") && re(ee, be.newPlayerDeal, ye)), !0
    }
    let ei = null;

    function ii(ee, ie, He, be, Me) {
      var Ke;
      const {
        gameState: Ue
      } = (0, qe.m)(["gameState"]), ke = "landingPage" === Ue, {
        pointing: fe
      } = (0, de.j)(), Te = (0, ye.useRef)(fe);
      Te.current = fe;
      const pe = (0, ye.useRef)(ee);
      pe.current = ee;
      const ze = (0, ye.useRef)(ie);
      ze.current = ie;
      const Be = (0, ye.useRef)(He);
      Be.current = He;
      const [Ee, We] = (0, ye.useState)(null), te = (0, ye.useRef)(0), Ze = (0, ye.useRef)(0), we = (0, ye.useRef)(!1), De = (0, ye.useCallback)((ee => {
        "open" === function(ee) {
          const ie = ee ? (0, Oe.getVisitSessionId)() : (0, Oe.peekVisitSessionId)(),
            He = null !== ie && ie === ei ? "return" : "open";
          return ei = ie, He
        }(ee) && (we.current = !0), te.current++, We({
          seq: te.current,
          kind: we.current ? "open" : "return"
        })
      }), []);
      (0, ye.useEffect)((() => {
        if (!ke) return void We(null);
        De(!0);
        const ee = () => {
          "visible" === document.visibilityState && De(!0)
        };
        return document.addEventListener("visibilitychange", ee), () => {
          document.removeEventListener("visibilitychange", ee)
        }
      }), [ke, De]);
      const Pe = null !== (Ke = null === ee || void 0 === ee ? void 0 : ee.endsAt) && void 0 !== Ke ? Ke : null;
      (0, ye.useEffect)((() => {
        if (!ke || null === Pe) return;
        const ee = Fe(Pe) - Date.now();
        if (ee <= 0 || ee > Xe.c) return;
        const ie = setTimeout((() => {
          De(!1)
        }), ee);
        return () => {
          clearTimeout(ie)
        }
      }), [ke, Pe, De]);
      const Ae = null !== ee && null !== be && null === Me;
      (0, ye.useEffect)((() => {
        if (null === Ee || !Ae || Ze.current >= Ee.seq) return;
        const ee = () => te.current === Ee.seq && "landingPage" === qe.e.get("gameState"),
          ie = setTimeout((() => {
            const ie = pe.current,
              He = ze.current;
            if (null === ie || null === He || !ee()) return;
            Ze.current = Ee.seq;
            const ye = Date.now(),
              Me = Ge(He, be);
            if (!(Me || oe(He, {
                arrival: Ee.kind,
                now: ye,
                endsAt: ie.endsAt,
                playedOnDevice: ge.i.getItem(Re.Ob) > 0
              }))) return void(we.current = !1);
            const Ke = Je(He, ye, ie.endsAt);
            se(ee).then((async ee => {
              const ie = pe.current;
              ee && null !== ie && ze.current === He && (!Te.current || Ke || function(ee, ie) {
                return ge.i.getItem(Ie + ee) === ie
              }(be, He.shownCount) ? Me ? re(ie, He, be) && (we.current = !1) : await Qe(ie, He, Be.current, be) && (we.current = !1) : function(ee, ie) {
                ge.i.setItem(Ie + ee, ie)
              }(be, He.shownCount))
            }))
          }), le);
        return () => {
          clearTimeout(ie)
        }
      }), [Ee, Ae, be])
    }

    function Hi() {
      const {
        userContext: ee
      } = (0, we.b)(), ie = (0, fe.usePurchasesAllowed)(), [He, Me] = (0, ye.useState)(Pe.k);
      (0, ye.useEffect)((() => (Me((0, Pe.k)()), (0, Pe.m)(Me))), []);
      const Ke = (0, De.c)(ee);
      ! function(ee, ie, He) {
        const [Me, Ke] = (0, ye.useState)(0);
        (0, ye.useEffect)((() => {
          if (!ie || null === ee) return;
          if (null !== He) return void(0, De.D)(ee, (0, Pe.d)());
          if (null !== (0, De.h)(ee)) return;
          let ye, Me = !1;
          return (0, pe.getBillingClient)().getOfferings(be).then((ie => {
            let {
              offering: He
            } = ie;
            (0, De.D)(ee, null === He ? [] : He.packages.filter(Te.isPricedPackage))
          }), (ee => {
            console.error("New player deal: loading its prices failed", ee), Me || (ye = setTimeout((() => {
              Ke((ee => ee + 1))
            }), Se))
          })), () => {
            Me = !0, clearTimeout(ye)
          }
        }), [ee, ie, He, Me])
      }(Ke, null !== (0, De.l)(ee) && (ie || null !== He), He);
      const Ue = (0, De.M)();
      return ii(Ue, (0, De.l)(ee), ee, Ke, He),
        function() {
          const {
            userContext: ee
          } = (0, we.b)(), {
            gameState: ie
          } = (0, qe.m)(["gameState"]);
          (0, ye.useEffect)((() => {
            if ("landingPage" !== ie || !ee.isLoggedIn() && !(0, fe.guestsMayBuy)()) return;
            const He = (0, De.f)(ee),
              ye = (0, Ze.F)((ee => He.includes(ee.item)));
            null !== ye && ((0, ke.reportAnalyticsClick)({
              id: "store.login_resume",
              value: ye.item
            }), (0, Ze.r)({
              mode: "self",
              source: "loginResume",
              highlight: ye.item
            }))
          }), [ee, ie])
        }(),
        function(ee, ie, He) {
          const be = (0, ye.useRef)(null);
          (0, ye.useEffect)((() => {
            if (null === He || null === ee || null === ie || be.current === He) return;
            be.current = He;
            const ye = ee.packs[0].pack;
            switch (He.show) {
              case "popup":
                (0, De.v)(ie), me(ee);
                break;
              case "store":
                (0, Ze.r)({
                  mode: "self",
                  source: "newPlayerDeal"
                });
                break;
              case "resume":
                (0, Ze.r)({
                  mode: "self",
                  source: "loginResume",
                  highlight: ye.packageId
                });
                break;
              case "bought":
                (0, Ze.r)({
                  mode: "self",
                  source: "newPlayerDeal"
                }), (0, De.t)(ie), (0, Le.d)(ye.gems);
                break;
              case "gift":
                (0, Ze.r)({
                  mode: "gift",
                  source: "newPlayerDeal",
                  giftRecipientName: "Friend"
                })
            }
          }), [He, ee, ie])
        }(Ue, Ke, He), null
    }
  },
  34945: (ee, ie, He) => {
    He.d(ie, {
      d: () => fe,
      g: () => pe
    });
    He(34947);
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1127),
      Ue = He(1438),
      Fe = He(2714),
      Je = He(1323),
      oe = He(2479),
      Re = He(3349),
      ke = He(2337),
      qe = He(1228);

    function fe(ee) {
      let {
        endsAt: ie,
        className: He
      } = ee;
      return (0, qe.jsxs)("span", {
        className: Me()("NewPlayerDealClock", He),
        children: [(0, qe.jsx)(Je.e, {
          name: "hourglass"
        }), (0, qe.jsx)(Fe.f, {
          toTime: ie
        })]
      })
    }

    function Te(ee) {
      let {
        offered: ie,
        needsLogin: He,
        busy: ye,
        highlight: be,
        onBuy: Fe
      } = ee;
      const {
        t: Je
      } = (0, Ke.v)(), {
        pack: fe
      } = ie, Te = (0, Re.h)(ie.package);
      return (0, qe.jsxs)("div", {
        className: Me()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: be
        }),
        children: [(0, qe.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, qe.jsx)("img", {
            src: ke.c[ie.tier],
            alt: "",
            draggable: !1
          }), (0, qe.jsx)("span", {
            className: "NewPlayerDealTag",
            children: Je("newPlayerDeal:tag")
          })]
        }), (0, qe.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, qe.jsx)(oe.d, {
            className: "NewPlayerDealPackAmount",
            amount: fe.gems
          })
        }), (0, qe.jsx)(Ue.m, {
          className: "NewPlayerDealBuy",
          loading: ye,
          onClick: Fe,
          ariaLabel: Je("newPlayerDeal:buyLabel", {
            amount: fe.gems.toLocaleString(),
            price: Te
          }),
          children: Je(He ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: Te
          })
        })]
      })
    }

    function pe(ee) {
      let {
        view: ie,
        needsLogin: He,
        busy: be,
        highlight: Ue,
        onBuy: Fe
      } = ee;
      const {
        t: Je
      } = (0, Ke.v)();
      return (0, qe.jsxs)("div", {
        className: Me()("NewPlayerDealPacks", ie.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [ie.packs.map(((ee, ie) => (0, qe.jsxs)(ye.Fragment, {
          children: [ie > 0 && (0, qe.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, qe.jsx)("i", {})
          }), (0, qe.jsx)(Te, {
            offered: ee,
            needsLogin: He,
            busy: be,
            highlight: Ue === ee.pack.packageId,
            onBuy: () => {
              Fe(ee)
            }
          })]
        }, ee.pack.packageId))), (0, qe.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, qe.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: Je("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  34951: (ee, ie, He) => {
    He.d(ie, {
      d: () => te,
      h: () => we
    });
    He(34947);
    var ye = He(3345),
      be = He(1464),
      Me = He(2330),
      Ke = He(3335),
      Ue = He(3307),
      Fe = He(3341),
      Je = He(3293),
      oe = He(1127),
      Re = He(1340),
      ke = He(1075),
      qe = He(1438),
      fe = He(1323),
      Te = He(2479),
      pe = He(2854),
      Xe = He(2694),
      ze = He(2697),
      Be = He(2703),
      Ee = He(1228);
    const ge = new Fe.d(Je.getBillingClient, Je.addPurchaseRecordListener);
    let Oe = !1;

    function de(ee, ie) {
      null !== ee && (0, Xe.q)(ee) || ((0, be.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${ie.pack.packageId}`
      }), null !== ee && (0, Xe.t)(ee), te(ie.pack.gems))
    }

    function We(ee, ie, He) {
      const be = (0, Xe.c)(ie);
      switch (ee.kind) {
        case "completed":
          de(be, He);
          break;
        case "pending":
          Me = ee.intentId, Ke = () => {
            pe.h.refresh(), de(be, He)
          }, Oe || (Oe = !0, ge.listen()), ge.follow(Me, Ke);
          break;
        case "unknownPackage":
          (0, Xe.H)(ie, null);
          break;
        case "failed":
          ee.errorKey === ye.c.newPlayerDealUnavailable && (0, Xe.H)(ie, null)
      }
      var Me, Ke
    }

    function te(ee) {
      Re.NotificationProvider.showCustomPopup({
        body: ie => (0, Ee.jsx)(Ze, {
          gems: ee,
          close: ie
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function Ze(ee) {
      let {
        gems: ie,
        close: He
      } = ee;
      const {
        t: ye
      } = (0, oe.v)();
      return (0, Ee.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, Ee.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, Ee.jsx)(fe.e, {
            name: "circle-check"
          }), (0, Ee.jsx)(Te.d, {
            amount: ie
          }), (0, Ee.jsx)("span", {
            children: ye("newPlayerDeal:added")
          })]
        }), (0, Ee.jsx)(qe.m, {
          className: "NewPlayerDealAddedOk",
          onClick: He,
          children: ye("general:ok")
        })]
      })
    }

    function we(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.b;
      const {
        userContext: He
      } = (0, ke.b)(), {
        purchaseUnderWay: ye,
        notice: be,
        buy: Fe
      } = (0, Ue.c)(ie), Je = (0, ze.k)(), oe = He.mayBuy() || (0, Me.guestsMayBuy)(), Re = null === Je ? !oe : Je.guest && !He.isLoggedIn();
      return {
        purchaseUnderWay: ye,
        notice: be,
        needsLogin: Re,
        buyPack: function(ye, be) {
          (0, Xe.z)("new_player_deal.buy", (0, Be.b)(ye.arm, ee, be.pack.packageId)), null === Je ? Fe(function(ee) {
            return {
              sku: ee.pack.packageId,
              tier: ee.tier,
              amount: ee.pack.gems,
              bonusPercent: 0,
              package: ee.package
            }
          }(be), null, {
            followPending: !1
          }).then((ee => {
            We(ee, He, be)
          })) : Re ? ie(be.pack.packageId, null) : de((0, Xe.c)(He), be)
        }
      }
    }
  },
  34947: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);