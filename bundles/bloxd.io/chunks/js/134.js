export const id = 134;
export const ids = [134, 196];
export const modules = {
  34379: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(391),
      qt = Vt(34388);

    function Dt(tt, et, Vt) {
      const Dt = Object.entries(et).sort(((tt, et) => et[1] - tt[1])),
        mt = (0, Ot.Bb)(tt);
      mt.push(tt ? "\n\n" : "\n");
      for (const [qt, ft] of Dt) {
        var dt, jt, Ht;
        const tt = null !== (dt = null === Vt || void 0 === Vt || null === (jt = Vt[qt]) || void 0 === jt ? void 0 : jt.icon) && void 0 !== dt ? dt : `${qt} Enchantment`;
        mt.push({
          icon: tt,
          style: {
            fontSize: "1.5rem"
          }
        }), mt.push({
          str: `${qt} ${null!==(Ht=(0,Ot.Y)(ft))&&void 0!==Ht?Ht:ft}\n`
        })
      }
      mt.push({
        str: "\n"
      });
      for (const [Ot, ft] of Dt) {
        var Xt, Qt, lt, Et;
        const tt = null !== (Xt = null === Vt || void 0 === Vt || null === (Qt = Vt[Ot]) || void 0 === Qt ? void 0 : Qt.icon) && void 0 !== Xt ? Xt : `${Ot} Enchantment`,
          et = null !== (lt = null === Vt || void 0 === Vt || null === (Et = Vt[Ot]) || void 0 === Et ? void 0 : Et.description) && void 0 !== lt ? lt : (0, qt.n)(Ot);
        mt.push({
          icon: tt,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), mt.push({
          str: et,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), mt.push({
          str: "\n"
        })
      }
      return mt
    }
  },
  34394: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      g: () => Mt,
      j: () => yt,
      l: () => jt,
      m: () => Nt,
      o: () => Xt,
      q: () => lt,
      s: () => wt,
      u: () => Qt
    });
    var Ot = Vt(377),
      qt = Vt(710),
      Dt = Vt(391),
      mt = Vt(4328),
      dt = Vt(34379);

    function jt(tt, et) {
      var Vt;
      let {
        player: Ot,
        chestOrCreative: qt
      } = tt;
      var Dt;
      return et < Ot.length ? null !== (Dt = Ot[et]) && void 0 !== Dt ? Dt : null : null !== (Vt = qt[et - Ot.length]) && void 0 !== Vt ? Vt : null
    }

    function Ht(tt) {
      var et;
      return null !== (et = tt.amount) && void 0 !== et ? et : 0
    }

    function Xt(tt) {
      return 0 === tt.button || void 0 === tt.button
    }

    function Qt(tt) {
      return !!tt.shiftKey
    }

    function lt(tt) {
      return "touches" in tt || "touch" === tt.pointerType || "pen" === tt.pointerType
    }
    const Et = new Set,
      ft = 50;

    function wt(tt, et) {
      var Vt;
      const Ot = null === (Vt = tt[et]) || void 0 === Vt ? void 0 : Vt.displayName;
      return (0, qt.B)(Ot) ? "string" !== typeof et ? "" : (!Et.has(et) && Et.size < ft && (Et.add(et), console.warn(`No item called "${et}", so its hover shows the name as given`)), et) : Ot
    }

    function yt(tt, et, Vt) {
      var jt, Ht, Xt, Qt, lt, Et, ft, yt, Nt, Mt, bt, Jt, Ct, ut;
      const Kt = tt.attributes,
        ht = null !== (jt = null === (Ht = et[tt.name]) || void 0 === Ht ? void 0 : Ht.rootName) && void 0 !== jt ? jt : tt.name,
        vt = null !== (Xt = null !== (Qt = Kt.customDisplayName) && void 0 !== Qt ? Qt : null === (lt = et[tt.name]) || void 0 === lt ? void 0 : lt.displayName) && void 0 !== Xt ? Xt : wt(et, ht);
      let Wt = vt;
      const St = null === (Et = Kt.customAttributes) || void 0 === Et ? void 0 : Et.enchantmentTier;
      St && (Wt = (0, Dt.Bb)(vt, {
        colour: Dt.xb[St]
      }));
      const ct = null !== (ft = null !== (yt = null !== (Nt = function(tt, et) {
        var Vt;
        if (void 0 === tt || null !== (Vt = et.customAttributes) && void 0 !== Vt && Vt.author) return tt;
        const qt = (0, Ot.Ob)(tt);
        return qt.every((tt => "string" === typeof tt)) ? tt : qt.map((tt => "string" === typeof tt ? tt : {
          icon: tt.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Kt.customDescription, Kt)) && void 0 !== Nt ? Nt : null === (Mt = et[tt.name]) || void 0 === Mt ? void 0 : Mt.description) && void 0 !== yt ? yt : null === (bt = et[ht]) || void 0 === bt ? void 0 : bt.description) && void 0 !== ft ? ft : "";
      let Rt = ct;
      if (null !== (Jt = Kt.customAttributes) && void 0 !== Jt && Jt.enchantments) Rt = (0, dt.d)(ct, Kt.customAttributes.enchantments, Kt.customAttributes.enchantmentData);
      else if (Vt[ht]) Rt = (0, Dt.Bb)(ct), Rt.push({
        str: "\n"
      }), Rt.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Ct = Kt.customAttributes) && void 0 !== Ct && Ct.mobSettings) {
        var It, Pt;
        const tt = Kt.customAttributes.mobSettings;
        var Zt, Lt;
        if (Rt = [], (0, qt.B)(Kt.customAttributes.health) || (Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Rt.push({
            str: " "
          }), Rt.push({
            str: Kt.customAttributes.health.toString()
          }), (0, qt.B)(tt.maxHealth) || (Rt.push({
            str: "/"
          }), Rt.push({
            str: tt.maxHealth.toString()
          }))), !(0, qt.B)(tt.attackDamage) && tt.attackDamage > 0 && (Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Rt.push({
            str: " "
          }), Rt.push({
            str: tt.attackDamage.toString()
          })), !(0, qt.B)(tt.secondaryAttackDamage) && tt.secondaryAttackDamage > 0 && (Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Rt.push({
            str: " "
          }), Rt.push({
            str: tt.secondaryAttackDamage.toString()
          })), (0, qt.B)(tt.baseRunningSpeed) || (Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Rt.push({
            str: " "
          }), Rt.push({
            str: tt.baseRunningSpeed.toFixed(2)
          })), "Saddled" === tt.metaInfo) Rt.push({
          str: "\n"
        }), Rt.push({
          str: {
            translationKey: "general:has"
          }
        }), Rt.push({
          str: " "
        }), Rt.push({
          icon: null !== (Zt = null === (Lt = tt.tameInfo) || void 0 === Lt ? void 0 : Lt.saddleItemName) && void 0 !== Zt ? Zt : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Rt.push({
            str: "\n"
          }), Rt.push({
            str: "\n"
          }), tt.petInfo && null !== (It = tt.tameInfo) && void 0 !== It && It.supportsFriendship) {
          const et = mt.e.getIconsFromFriendshipPoints(tt.petInfo.friendshipPoints);
          for (const tt of et) Rt.push({
            icon: tt,
            style: {
              fontSize: "1.5em"
            }
          });
          Rt.push({
            str: "\n"
          });
          const Vt = mt.e.getMobHungerLevel(tt.petInfo.lastFedAt);
          for (const tt of mt.e.hungerLevelIcons[Vt]) Rt.push({
            icon: tt,
            style: {
              fontSize: "1.5em"
            }
          });
          Rt.push({
            str: " "
          }), Rt.push({
            str: mt.e.hungerLevelTranslations[Vt],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (tt.tameInfo && null !== (Pt = tt.tameInfo) && void 0 !== Pt && Pt.supportsFriendship) {
          var Ft, kt;
          let et = null !== (Ft = tt.tameInfo.likedFoods) && void 0 !== Ft ? Ft : [];
          Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mt.e.feedTextColours[mt.e.MobFoodType.Superliked]
            }
          }), Rt.push({
            str: " "
          }), null !== (kt = tt.petInfo) && void 0 !== kt && kt.superlikedFoodKnown ? (Rt.push({
            icon: tt.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), et = et.filter((et => et !== tt.petInfo.superlikedFood))) : Rt.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mt.e.feedTextColours[mt.e.MobFoodType.Liked]
            }
          }), Rt.push({
            str: " "
          });
          for (const tt of et) Rt.push({
            icon: tt,
            style: {
              fontSize: "1.5em"
            }
          });
          Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mt.e.feedTextColours[mt.e.MobFoodType.Neutral]
            }
          }), Rt.push({
            str: " "
          });
          for (const Vt of null !== (Gt = tt.tameInfo.neutralFoods) && void 0 !== Gt ? Gt : []) {
            var Gt;
            Rt.push({
              icon: Vt,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Rt.push({
            str: "\n"
          }), Rt.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mt.e.feedTextColours[mt.e.MobFoodType.Disliked]
            }
          }), Rt.push({
            str: " "
          });
          for (const Vt of null !== (zt = tt.tameInfo.dislikedFoods) && void 0 !== zt ? zt : []) {
            var zt;
            Rt.push({
              icon: Vt,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Rt.length > 0 ? (Rt.shift(), Rt.unshift(...(0, Dt.Bb)(ct))) : Rt = (0, Dt.Bb)(ct)
      }
      return {
        name: Wt,
        desc: Rt,
        fontStyle: null !== (ut = Kt.customAttributes) && void 0 !== ut && ut.author ? "italic" : "normal"
      }
    }

    function Nt(tt, et, Vt, Ot) {
      const qt = jt(tt, Vt),
        Dt = jt(tt, Ot);
      if (!qt) return !1;
      const mt = et[qt.name].armourReduction,
        dt = et[Dt.name].armourReduction;
      if (dt === mt) {
        var Ht, Xt, Qt, lt;
        const tt = null !== (Ht = null === (Xt = qt.attributes.customAttributes) || void 0 === Xt ? void 0 : Xt.enchantmentTier) && void 0 !== Ht ? Ht : "Tier 0",
          et = null !== (Qt = null === (lt = Dt.attributes.customAttributes) || void 0 === lt ? void 0 : lt.enchantmentTier) && void 0 !== Qt ? Qt : "Tier 0";
        return parseInt(tt.replace("Tier ", "")) >= parseInt(et.replace("Tier ", ""))
      }
      return mt > dt
    }

    function Mt(tt) {
      let et;
      if ("number" === typeof tt) {
        const Vt = document.querySelector(`[data-inven-idx="${tt}"]`);
        if (!Vt) return null;
        et = Vt.getBoundingClientRect()
      } else et = tt.getBoundingClientRect();
      return {
        x: et.left + et.width / 2,
        y: et.top + et.height / 2
      }
    }
  },
  9126: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Nt,
      f: () => Jt
    });
    var Ot = Vt(63),
      qt = Vt(31),
      Dt = Vt(2569),
      mt = Vt(3478);
    const dt = 6,
      jt = 4;

    function Ht(tt) {
      let {
        slotsLeft: et,
        slotsRight: Vt,
        width: Ot,
        height: qt,
        zoneRight: Dt,
        rowTop: mt,
        besideBottom: Ht,
        obstacles: Xt
      } = tt;
      const Qt = Math.max(0, Math.floor(Vt - et - Ot)),
        lt = null === Dt ? 0 : Math.min(Qt, Math.max(0, Math.ceil(Dt + dt - et))),
        Et = et + lt - dt,
        ft = et + lt + Ot + dt,
        wt = Xt.filter((tt => tt.left < ft && tt.right > Et));
      let yt = Ht;
      for (let dt = 0; dt <= wt.length; dt++) {
        const tt = wt.filter((tt => tt.top < yt + jt && tt.bottom > yt - qt - jt));
        if (0 === tt.length) break;
        yt = Math.min(...tt.map((tt => tt.top))) - jt
      }
      return {
        shift: lt,
        rise: yt === Ht ? null : Math.ceil(mt - yt)
      }
    }

    function Xt(tt) {
      return Array.from(tt.children).filter((tt => !tt.classList.contains("HotBarRow")))
    }

    function Qt(tt) {
      return function(tt) {
        const et = [],
          Vt = (tt, Ot) => {
            const qt = tt.getBoundingClientRect();
            if (qt.width > 0 && qt.height > 0) et.push(tt);
            else if (Ot < 2)
              for (const et of Array.from(tt.children)) Vt(et, Ot + 1)
          };
        for (const Ot of tt) Vt(Ot, 0);
        return et
      }(Xt(tt).flatMap((tt => tt.classList.contains("AuraBarWrapper") ? [] : tt.classList.contains("BottomScreenStatBarList") ? Array.from(tt.children) : [tt])))
    }

    function lt(tt) {
      var et;
      const Vt = tt.getBoundingClientRect();
      if (0 === Vt.width) return null;
      const Ot = null === (et = tt.parentElement) || void 0 === et ? void 0 : et.getBoundingClientRect();
      return Ot && Ot.width > 0 ? Math.min(Vt.right, Ot.left + Ot.width * Et) : Vt.right
    }
    const Et = .35,
      ft = new WeakMap,
      wt = ".BottomScreenMessage, [role='status']",
      yt = new WeakMap;

    function Nt(tt) {
      Mt(tt) && Mt(tt)
    }

    function Mt(tt) {
      var et, Vt, Ot, qt, Dt, mt;
      const dt = tt.documentElement.classList;
      if (!dt.contains("TouchHotbar") || dt.contains("TouchHotbarKeysAbove") || dt.contains("HudMove-inventory") || dt.contains("HudLocked-inventory") || null === (et = tt.defaultView) || void 0 === et || null === (Vt = et.matchMedia) || void 0 === Vt || !Vt.call(et, bt).matches) return !1;
      const Xt = tt.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Et = null === Xt || void 0 === Xt ? void 0 : Xt.parentElement,
        Nt = null === Xt || void 0 === Xt ? void 0 : Xt.closest(".BottomMiddleElements"),
        Mt = null === Nt || void 0 === Nt ? void 0 : Nt.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Xt || !Et || !Nt || !Mt || Nt.classList.contains("TouchInventoryOpen")) return !1;
      const Jt = Xt.getBoundingClientRect();
      if (0 === Jt.width) return !1;
      const Ct = tt.querySelector(".JoystickZone"),
        ut = Mt.getBoundingClientRect(),
        Kt = Et.getBoundingClientRect().top,
        ht = null === (Ot = Nt.querySelector(":scope > .AuraBarWrapper")) || void 0 === Ot ? void 0 : Ot.getBoundingClientRect(),
        vt = Qt(Nt),
        Wt = {
          slotsLeft: ut.left,
          slotsRight: ut.right,
          width: Jt.width,
          height: Jt.height,
          zoneRight: Ct ? lt(Ct) : null,
          rowTop: Kt,
          besideBottom: (ht && ht.height > 0 ? ht.top : Kt) - jt,
          obstacles: vt.map((tt => tt.getBoundingClientRect()))
        },
        St = Ht({
          ...Wt,
          obstacles: vt.filter((tt => !tt.matches(wt))).map((tt => tt.getBoundingClientRect()))
        }),
        ct = tt.defaultView,
        Rt = `${null===ct||void 0===ct?void 0:ct.innerWidth}x${null===ct||void 0===ct?void 0:ct.innerHeight}:${St.shift}:${Math.round(Jt.width)}:${Math.round(Kt)}`,
        It = yt.get(Nt),
        Pt = (null === It || void 0 === It ? void 0 : It.at) === Rt ? (Zt = It.rise, Lt = St.rise, null === Zt ? Lt : null === Lt ? Zt : Math.max(Zt, Lt)) : St.rise;
      var Zt, Lt;
      const Ft = Ht({
          ...Wt,
          besideBottom: null === Pt ? Wt.besideBottom : Kt - Pt
        }),
        kt = {
          shift: St.shift,
          rise: null !== (qt = Ft.rise) && void 0 !== qt ? qt : Pt
        },
        Gt = ft.get(Nt);
      return (null !== (Dt = null === Gt || void 0 === Gt ? void 0 : Gt.shift) && void 0 !== Dt ? Dt : 0) === kt.shift && yt.set(Nt, {
        at: Rt,
        rise: Pt
      }), (null === Gt || void 0 === Gt ? void 0 : Gt.shift) !== kt.shift && Nt.style.setProperty("--touch-shop-above-shift", `${kt.shift}px`), (null === Gt || void 0 === Gt ? void 0 : Gt.rise) !== kt.rise && (Nt.classList.toggle("ShopAboveUp", null !== kt.rise), null === kt.rise ? Nt.style.removeProperty("--touch-shop-above-rise") : Nt.style.setProperty("--touch-shop-above-rise", `${kt.rise}px`)), ft.set(Nt, kt), (null !== (mt = null === Gt || void 0 === Gt ? void 0 : Gt.shift) && void 0 !== mt ? mt : 0) !== kt.shift
    }
    const bt = "(orientation: landscape) and (max-height: 500px)";

    function Jt(tt, et, Vt) {
      (0, Ot.useLayoutEffect)((() => {
        var et;
        const Ot = null === (et = tt.current) || void 0 === et ? void 0 : et.closest(".BottomMiddleElements");
        if (!Ot || Vt) return;
        const dt = new ResizeObserver((() => {
            Et(!1)
          })),
          jt = () => {
            dt.disconnect();
            const tt = document.querySelector(".JoystickZone");
            for (const et of [tt, Ot, Ot.querySelector(".HotBarGameItemsContainer"), ...Qt(Ot)]) et && dt.observe(et)
          };
        let Ht = null,
          lt = !1;
        const Et = tt => {
            lt ||= tt, Ht ??= requestAnimationFrame((() => {
              Ht = null, lt && (lt = !1, jt()), Nt(document)
            }))
          },
          ft = new MutationObserver((() => {
            Et(!0)
          }));
        ft.observe(Ot, {
          childList: !0
        });
        for (const tt of Xt(Ot)) ft.observe(tt, {
          childList: !0,
          subtree: !0
        });
        Nt(document), jt();
        const wt = () => {
            Et(!0)
          },
          yt = [(0, qt.n)(Dt.h, wt), (0, qt.n)(mt.c, wt)];
        return () => {
          null !== Ht && cancelAnimationFrame(Ht), dt.disconnect(), ft.disconnect();
          for (const tt of yt) tt()
        }
      }), [tt, et, Vt])
    }
  },
  34278: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Et,
      h: () => ft,
      k: () => wt
    });
    var Ot = Vt(1556),
      qt = Vt(63),
      Dt = Vt(1410),
      mt = Vt(4665),
      dt = Vt(2419),
      jt = Vt(1286),
      Ht = Vt(106),
      Xt = Vt(2063),
      Qt = Vt(1436),
      lt = Vt(1188);

    function Et(tt) {
      let {
        show: et,
        onClose: Vt
      } = tt;
      const {
        requestedGameNameWithVariation: Ot,
        lobbyName: qt,
        shownLobbyName: Dt
      } = (0, Xt.h)("connectedGame"), jt = (0, dt.e)(Ot, qt, !1);
      return Ht.featureFlags.canUseInviteLinks && (0, lt.jsx)(mt.c, {
        show: et,
        close: Vt,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, lt.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, lt.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, lt.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, lt.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === jt ? (0, lt.jsx)(Qt.b, {}) : jt, (0, lt.jsx)("br", {}), "Lobby Name: ", Dt, (0, lt.jsx)("br", {}), (0, lt.jsx)("br", {}), (0, lt.jsx)("br", {}), (0, lt.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, lt.jsx)(ft, {})]
        })
      })
    }

    function ft() {
      var tt;
      const {
        t: et
      } = (0, jt.H)(), Vt = null !== (tt = wt(Ht.featureFlags.canUseInviteLinks)) && void 0 !== tt ? tt : "Loading Link...", [Dt, mt] = (0, qt.useState)(0), [dt, Xt] = (0, qt.useReducer)((tt => tt + 1), 0);
      return (0, qt.useEffect)((() => {
        const tt = setTimeout((() => {
          Xt()
        }), 1100);
        return () => {
          clearTimeout(tt)
        }
      }), [Dt]), Ht.featureFlags.canUseInviteLinks && (0, lt.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, lt.jsx)("div", {
          className: "InviteLinkInner",
          children: Vt
        }), (0, lt.jsx)(Ot.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Vt).catch((tt => {
              console.error("Failed to copy invite link:", tt)
            })), mt(Date.now())
          },
          disabled: Date.now() - Dt < 1e3,
          children: Date.now() - Dt < 1e3 ? et("general:copied") : et("general:copy")
        })]
      })
    }

    function wt(tt) {
      const [et, Vt] = (0, qt.useState)(null);
      return (0, qt.useEffect)((() => {
        if (!tt) return;
        let et = !0;
        return (0, Dt.F)().then((tt => {
          et && Vt(tt)
        })).catch((tt => {
          console.error("Failed to get invite link:", tt)
        })), () => {
          et = !1
        }
      }), [tt]), et
    }
  },
  34367: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(2063),
      dt = Vt(1188);

    function jt(tt) {
      const et = Math.floor(tt / 3600),
        Vt = Math.floor(tt % 3600 / 60),
        Ot = Math.floor(tt % 60),
        qt = `${Vt.toString().padStart(2,"0")}:${Ot.toString().padStart(2,"0")}`;
      return et > 0 ? `${et}:${qt}` : qt
    }
    const Ht = (0, Ot.memo)((function(tt) {
      let {
        className: et
      } = tt;
      const {
        recording: Vt,
        seconds: Ot
      } = (0, mt.h)("replayRecorder");
      return Vt ? (0, dt.jsxs)("div", {
        className: Dt()("RecordingIndicator", et),
        children: [(0, dt.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, dt.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, dt.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: jt(Ot)
        })]
      }) : null
    }))
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  6776: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(39);

    function Dt(tt, et) {
      var Vt;
      const [Dt, mt] = (0, Ot.useState)(null !== (Vt = qt.e.getItem(tt)) && void 0 !== Vt ? Vt : et);
      return [Dt, et => {
        qt.e.setItem(tt, et), mt(et)
      }]
    }
  },
  9114: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => Ht,
      C: () => ft,
      G: () => Dt,
      d: () => qt,
      e: () => dt,
      f: () => Ot,
      h: () => wt,
      k: () => Et,
      n: () => Xt,
      o: () => mt,
      q: () => yt,
      r: () => Qt,
      v: () => jt,
      x: () => lt
    });
    const Ot = tt => ({
      left: tt.left,
      top: tt.top,
      right: tt.right,
      bottom: tt.bottom
    });

    function qt(tt) {
      return {
        x: (tt.left + tt.right) / 2,
        y: (tt.top + tt.bottom) / 2
      }
    }

    function Dt(tt) {
      return 0 === tt.length ? null : tt.reduce(((tt, et) => ({
        left: Math.min(tt.left, et.left),
        top: Math.min(tt.top, et.top),
        right: Math.max(tt.right, et.right),
        bottom: Math.max(tt.bottom, et.bottom)
      })))
    }

    function mt(tt, et) {
      const Vt = Math.max(0, (et - (tt.right - tt.left)) / 2),
        Ot = Math.max(0, (et - (tt.bottom - tt.top)) / 2);
      return {
        left: tt.left - Vt,
        top: tt.top - Ot,
        right: tt.right + Vt,
        bottom: tt.bottom + Ot
      }
    }

    function dt(tt, et) {
      return et.x >= tt.left && et.x <= tt.right && et.y >= tt.top && et.y <= tt.bottom
    }

    function jt(tt, et, Vt) {
      let Ot = null,
        Dt = 1 / 0;
      for (const {
          id: qt,
          box: mt
        }
        of et) {
        const et = (mt.right - mt.left) * (mt.bottom - mt.top);
        dt(mt, tt) && et < Dt && (Dt = et, Ot = qt)
      }
      if (null !== Ot) return Ot;
      let jt = 1 / 0;
      for (const {
          id: Ht,
          box: Xt
        }
        of et) {
        if (!dt(mt(Xt, Vt), tt)) continue;
        const et = qt(Xt),
          Dt = Math.hypot(tt.x - et.x, tt.y - et.y);
        Dt < jt && (jt = Dt, Ot = Ht)
      }
      return Ot
    }

    function Ht(tt, et, Vt) {
      return {
        left: Vt.left,
        top: Vt.top,
        right: tt - Vt.right,
        bottom: et - Vt.bottom
      }
    }

    function Xt(tt, et, Vt, Ot) {
      const qt = (tt, et, Vt) => Math.max(Math.min(et, 0), Math.min(Math.max(Vt, 0), tt));
      return {
        x: qt(et, Ot.left - tt.left, Ot.right - tt.right),
        y: qt(Vt, Ot.top - tt.top, Ot.bottom - tt.bottom)
      }
    }

    function Qt(tt, et, Vt, Ot, qt) {
      const Dt = tt.dx * Ot + et,
        mt = tt.dy * qt + Vt,
        dt = tt => Math.max(-1, Math.min(1, tt));
      return {
        dx: dt(Dt / Ot),
        dy: dt(mt / qt)
      }
    }

    function lt(tt, et, Vt, Ot) {
      return et <= 0 || Vt <= 0 ? 1 : Math.max(.05, Math.min(1, tt / et, Ot / Vt))
    }

    function Et(tt, et, Vt) {
      return Math.min(tt.right, et.right) - Math.max(tt.left, et.left) > Vt && Math.min(tt.bottom, et.bottom) - Math.max(tt.top, et.top) > Vt
    }

    function ft(tt, et) {
      const Vt = (tt, et, Vt, Ot) => et - tt > Ot - Vt ? Vt - tt > et - Ot ? Ot - et : Vt - tt : tt < Vt ? Vt - tt : et > Ot ? Ot - et : 0;
      return {
        x: Vt(tt.left, tt.right, et.left, et.right),
        y: Vt(tt.top, tt.bottom, et.top, et.bottom)
      }
    }

    function wt(tt, et, Vt) {
      return Et(tt, {
        left: 0,
        top: 0,
        right: et,
        bottom: Vt
      }, 0)
    }

    function yt(tt, et) {
      let {
        avoid: Vt = null,
        bounds: Ot = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, qt = 0, Dt = 1 / 0;
      return tt.forEach(((tt, mt) => {
        const dt = et.filter((et => Et(tt, et, 0))).length,
          jt = null !== Ot && (tt.left < Ot.left || tt.top < Ot.top || tt.right > Ot.right || tt.bottom > Ot.bottom),
          Ht = dt + (Vt && Et(tt, Vt, 0) ? 1e3 : 0) + (jt ? 1e6 : 0);
        Ht < Dt && (qt = mt, Dt = Ht)
      })), qt
    }
  },
  9120: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      f: () => Dt,
      g: () => qt,
      i: () => mt,
      m: () => Qt,
      n: () => Xt,
      r: () => Ht,
      t: () => jt
    });
    var Ot = Vt(2537);
    const qt = ["J", "C", "A", "P", "U", "X", "G"],
      Dt = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function mt(tt) {
      return tt ? ["X"] : ["P", "X"]
    }
    const dt = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Ot.y,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function jt(tt, et, Vt) {
      const Ot = tt.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Ot) return dt;
      const Dt = {},
        mt = {};
      for (const dt of qt) {
        const tt = Ot.querySelector(`.TouchSlot${dt} > .TouchKey`);
        if (tt) {
          var jt, Ht;
          Dt[dt] = tt.cloneNode(!0);
          const et = (null !== (jt = null === (Ht = tt.querySelector(".TouchKeyLabel")) || void 0 === Ht ? void 0 : Ht.textContent) && void 0 !== jt ? jt : "").split(/\s+/).filter((tt => !/[\d\xd7]/.test(tt))).join(" ");
          et && (mt[dt] = et)
        }
      }
      const Xt = et => {
          const Vt = tt.querySelector(`.InGameUi ${et}`);
          return null !== Vt && !Vt.classList.contains("Hidden")
        },
        Qt = [...tt.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((tt => tt.cloneNode(!0)));
      return {
        faces: Object.keys(Dt).length > 0 ? Dt : null,
        names: mt,
        shop: Xt(".TouchInventoryKey.ShopKey"),
        bag: Xt(".TouchInventoryKey.BagKey"),
        sprint: Xt(".TouchSprintHit"),
        items: Qt.length > 0 ? Qt : null,
        rowIcons: et,
        pinnedIcons: Vt
      }
    }

    function Ht(tt, et) {
      const Vt = {};
      for (const Ot of [...mt(et), "G"]) {
        const et = tt.names[Ot];
        et && (Vt[Dt[Ot]] = et)
      }
      return Vt
    }

    function Xt(tt, et) {
      const {
        faces: Vt
      } = tt;
      if (null === Vt) return [];
      const Ot = new Set(Object.keys(Vt).map((tt => Dt[tt])));
      return mt(et).filter((tt => !Ot.has(Dt[tt])))
    }

    function Qt(tt, et) {
      tt.replaceChildren(...[...et.childNodes].map((tt => tt.cloneNode(!0))))
    }
  },
  34292: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => Ot
    });
    const Ot = "image/jpeg",
      qt = "jpg"
  },
  34301: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt,
      g: () => Ht,
      i: () => Xt
    });
    var Ot = Vt(1784),
      qt = Vt(3266),
      Dt = Vt(106),
      mt = Vt(1842),
      dt = Vt(34292);

    function jt() {
      return !(0, Dt.isMobileApp)() || Ot.c.supports("photos")
    }
    async function Ht(tt) {
      var et, Vt;
      if ((0, Dt.isMobileApp)()) {
        const {
          saved: et
        } = await Ot.c.request("photos.save", {
          data: await (0, qt.e)(tt),
          mimeType: dt.g
        });
        return et ? "saved" : "denied"
      }
      return (0, Dt.isIOS)() && null !== (et = (Vt = navigator).canShare) && void 0 !== et && et.call(Vt, {
        files: [tt]
      }) ? Xt(tt) : ((0, mt.c)(tt, tt.name), "saved")
    }
    async function Xt(tt) {
      try {
        return await navigator.share({
          files: [tt]
        }), "shared"
      } catch (et) {
        if (et instanceof DOMException && "AbortError" === et.name) return "nV";
        if (et instanceof DOMException && "NotAllowedError" === et.name) return "needsTap";
        throw et
      }
    }
  },
  34286: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      c: () => Xt,
      d: () => Qt
    });
    var Ot = Vt(26),
      qt = Vt(34255),
      Dt = Vt(1732),
      mt = Vt(34292);
    const dt = 8294400,
      jt = .92;

    function Ht() {
      (0, Dt.f)(), Ot.b.set({
        screenshotMode: !0
      })
    }

    function Xt() {
      Ot.b.set({
        screenshotMode: !1
      })
    }
    async function Qt() {
      const {
        width: tt,
        height: et,
        scale: Vt
      } = function(tt, et, Vt) {
        const Ot = Math.max(1, tt),
          qt = Math.max(1, et),
          Dt = Math.min(Math.max(1, Vt), Math.sqrt(dt / (Ot * qt)));
        return {
          width: Math.round(Ot * Dt),
          height: Math.round(qt * Dt),
          scale: Dt
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: Ot
      } = await qt.devTools.capturePhoto(tt, et, {
        scale: Vt,
        type: mt.g,
        quality: jt
      });
      return new File([Ot], function(tt) {
        const et = tt => String(tt).padStart(2, "0"),
          Vt = `${tt.getFullYear()}${et(tt.getMonth()+1)}${et(tt.getDate())}`,
          Ot = `${et(tt.getHours())}${et(tt.getMinutes())}${et(tt.getSeconds())}`;
        return `bloxd-${Vt}-${Ot}.${mt.d}`
      }(new Date), {
        type: mt.g
      })
    }
  },
  8880: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Ot
    });
    const Ot = "controllerOpenKeyboard",
      qt = "controllerKeyboardVisible"
  },
  34263: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    const Ot = new Set(["chunkBorders"])
  },
  34255: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ALL_DEV_TOOLS: () => mt,
      coreDevTools: () => Ht,
      devTools: () => jt
    });
    var Ot = Vt(725),
      qt = Vt(1397),
      Dt = Vt(34263);
    const mt = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function dt() {
      const {
        noaDevTools: tt
      } = await Vt.e(242).then((() => Vt(41267)));
      return tt
    }
    const jt = new class {
        constructor() {
          this.loadHost = dt, this.tools = mt
        }
        setHost(tt) {
          this.tools = null === tt ? mt : tt.tools, this.loadHost = null === tt ? dt : async () => tt
        }
        supports(tt) {
          return this.tools.has(tt)
        }
        async downloadScene(tt, et) {
          const Vt = await this.loadHost();
          await Vt.downloadScene(tt, et)
        }
        async setAmbientLightIntensity(tt) {
          const et = await this.loadHost();
          await et.setAmbientLightIntensity(tt)
        }
        async capturePhoto(tt, et, Vt) {
          return (await this.loadHost()).capturePhoto(tt, et, Vt)
        }
      },
      Ht = {
        tools: Dt.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    Ot.K && jt.setHost(Ht), (0, qt.x)((() => {
      jt.setHost(Ht)
    }))
  },
  34414: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      e: () => qt,
      h: () => Xt
    });
    var Ot = Vt(1657);

    function qt(tt) {
      var et;
      return {
        ...mt.store,
        yaw: mt.store.yaw + (null !== (et = Ot.d[tt].previewYaw) && void 0 !== et ? et : 0)
      }
    }
    const Dt = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mt = {
        player: Dt,
        store: {
          ...Dt,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function dt(tt, et) {
      tt instanceof Promise ? tt.then(et).catch((tt => {
        console.error("Couldn't open the preview", tt)
      })) : et(tt)
    }
    class jt {
      constructor(tt) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height), null !== this.view && tt.show(this.view))
        }))
      }
      show(tt) {
        var et;
        this.view = tt, null === (et = this.opened) || void 0 === et || et.show(tt)
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    class Ht {
      constructor(tt) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(tt).then((tt => tt.ready)), dt(tt, (tt => {
          this.closed ? tt.close() : (this.opened = tt, null !== this.size && tt.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var tt, et;
        return null !== (tt = null === (et = this.opened) || void 0 === et ? void 0 : et.isReady()) && void 0 !== tt && tt
      }
      setCosmetic(tt, et) {
        var Vt;
        null === (Vt = this.opened) || void 0 === Vt || Vt.setCosmetic(tt, et)
      }
      playEmote(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.playEmote(tt)
      }
      setOrbit(tt) {
        var et;
        null === (et = this.opened) || void 0 === et || et.setOrbit(tt)
      }
      resetCamera() {
        var tt;
        null === (tt = this.opened) || void 0 === tt || tt.resetCamera()
      }
      async untilDrawn(tt) {
        var et;
        await this.ready, await (null === (et = this.opened) || void 0 === et ? void 0 : et.untilDrawn(tt))
      }
      resize(tt, et) {
        var Vt;
        this.size = {
          width: tt,
          height: et
        }, null === (Vt = this.opened) || void 0 === Vt || Vt.resize(tt, et)
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.opened) || void 0 === tt || tt.close(), this.opened = null
      }
    }
    const Xt = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(tt) {
        this.host = tt
      }
      setDefaultHost(tt) {
        this.makeDefault = tt
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(tt) {
        return new jt(this.current().openMob(tt))
      }
      openPet(tt) {
        return new jt(this.current().openPet(tt))
      }
      openMobLineup(tt) {
        return new jt(this.current().openMobLineup(tt))
      }
      openCharacter(tt, et) {
        return new Ht(this.current().openCharacter(tt, et))
      }
    }
  },
  34412: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot.b,
      h: () => Ot.e,
      l: () => Ot.h
    });
    var Ot = Vt(34414);
    class qt {
      constructor(tt) {
        this.load = tt, this.loaded = null, this.loading = null
      }
      run(tt) {
        return null !== this.loaded ? tt(this.loaded) : (this.loading ??= this.load().then((tt => (this.loaded = tt, tt)), (tt => {
          throw this.loading = null, tt
        })), this.loading.then(tt))
      }
    }
    class Dt {
      constructor() {
        this.mobScene = new qt((() => Promise.all([Vt.e(73), Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(98), Vt.e(259), Vt.e(76), Vt.e(75), Vt.e(256), Vt.e(74), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(279), Vt.e(233), Vt.e(249), Vt.e(261), Vt.e(264), Vt.e(78), Vt.e(188), Vt.e(227), Vt.e(97), Vt.e(239), Vt.e(230), Vt.e(246), Vt.e(121), Vt.e(247), Vt.e(77), Vt.e(251)]).then((() => Vt(41282))))), this.characterScene = new qt((() => Promise.all([Vt.e(73), Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(98), Vt.e(259), Vt.e(76), Vt.e(75), Vt.e(256), Vt.e(74), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(279), Vt.e(233), Vt.e(249), Vt.e(261), Vt.e(264), Vt.e(78), Vt.e(188), Vt.e(227), Vt.e(97), Vt.e(239), Vt.e(230), Vt.e(246), Vt.e(121), Vt.e(247), Vt.e(77), Vt.e(250)]).then((() => Vt(41396)))))
      }
      openMob(tt) {
        return this.mobScene.run((et => et.openMobPreview(tt)))
      }
      openPet(tt) {
        return this.mobScene.run((et => et.openPetPreview(tt)))
      }
      openMobLineup(tt) {
        return this.mobScene.run((et => et.openMobLineupPreview(tt)))
      }
      openCharacter(tt, et) {
        return this.characterScene.run((Vt => Vt.openCharacterPreview(tt, et)))
      }
    }
    Ot.h.setDefaultHost((() => new Dt))
  },
  6873: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(39);
    const qt = "shaderPack";
    async function Dt() {
      var tt;
      let et = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (tt = await Ot.c.getItem(qt, et)) && void 0 !== tt ? tt : null
    }
  },
  9101: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => jt
    });
    var Ot = Vt(26),
      qt = Vt(1423),
      Dt = Vt(106);
    const mt = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function dt() {
      return (0, Dt.isMobile)() && "function" === typeof navigator.vibrate
    }
    const jt = new class {
      constructor(tt) {
        this.deps = tt, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(tt, et) {
        var Vt;
        if (!this.deps.enabled()) return;
        const Ot = mt[tt],
          qt = null !== et && void 0 !== et ? et : Ot.pattern;
        if (null === qt) return void console.warn("No vibration pattern for", tt);
        const Dt = this.deps.now();
        Dt - this.lastAnyAt < 40 && Ot.priority < this.playingPriority || Dt - (null !== (Vt = this.lastAt.get(tt)) && void 0 !== Vt ? Vt : -1 / 0) < Ot.minGapMs || Dt < this.playingUntil && Ot.priority < this.playingPriority || (this.lastAt.set(tt, Dt), this.lastAnyAt = Dt, this.playingUntil = Dt + qt.reduce(((tt, et) => tt + et), 0), this.playingPriority = Ot.priority, this.deps.vibrate(qt))
      }
    }({
      vibrate: tt => {
        navigator.vibrate([...tt])
      },
      now: () => performance.now(),
      enabled: () => dt() && Ot.b.get("isTouchScreen") && Ot.b.get("clientEscMenuOptions").vibration && !(0, qt.d)()
    })
  },
  34303: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      g: () => Qt,
      j: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(1784),
      Dt = Vt(39),
      mt = Vt(3733);
    const dt = 2592e5,
      jt = "notificationOptInLastPromptedAt";
    async function Ht() {
      var tt;
      const et = null !== (tt = Dt.e.getItem(jt)) && void 0 !== tt ? tt : 0;
      return Date.now() - et < dt ? null : Qt()
    }

    function Xt() {
      Dt.e.setItem(jt, Date.now())
    }
    async function Qt() {
      return await qt.c.ready, qt.c.supports("notifications") ? Ot.b.get("mobilePushNotificationsCanAsk") ? async () => {
        qt.c.request("notifications.requestPermission", {}).then((tt => {
          let {
            canAsk: et
          } = tt;
          Ot.b.set({
            mobilePushNotificationsCanAsk: et
          })
        }), (tt => {
          console.error("The app couldn't ask for push notifications:", tt)
        }))
      }: null: await mt.e.canAsk() ? () => mt.e.requestPermission() : null
    }
  },
  9014: (tt, et, Vt) => {
    function Ot(tt, et) {
      return !tt.hidden && (et || !tt.isRewardedAd)
    }

    function qt(tt) {
      return "object" === typeof tt ? tt.option : tt
    }

    function Dt(tt, et) {
      var Vt;
      if ("dropdown" === (null === (Vt = tt.userInput) || void 0 === Vt ? void 0 : Vt.type) && "object" === typeof tt.userInput.dropdownOptions[0]) {
        for (const Vt of tt.userInput.dropdownOptions)
          if (qt(Vt) === et) return "object" === typeof Vt ? Vt.cost : tt.cost;
        console.error("Didn't find matching option for dropdown item. Item:", tt, "input:", et)
      }
      return tt.cost
    }

    function mt(tt, et, Vt) {
      var Ot;
      const qt = null !== (Ot = Vt.excludedPlayers) && void 0 !== Ot ? Ot : [et];
      return tt.filter((tt => !qt.includes(tt)))
    }
    Vt.d(et, {
      d: () => Dt,
      e: () => qt,
      i: () => mt,
      m: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);