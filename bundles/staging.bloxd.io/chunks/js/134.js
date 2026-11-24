export const id = 134;
export const ids = [134, 196];
export const modules = {
  34434: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(337),
      op = cp(34438);

    function Ip(pp, ip, cp) {
      const Ip = Object.entries(ip).sort(((pp, ip) => ip[1] - pp[1])),
        Sp = (0, Op.sb)(pp);
      Sp.push(pp ? "\n\n" : "\n");
      for (const [op, yp] of Ip) {
        var xp, Lp, Yp;
        const pp = null !== (xp = null === cp || void 0 === cp || null === (Lp = cp[op]) || void 0 === Lp ? void 0 : Lp.icon) && void 0 !== xp ? xp : `${op} Enchantment`;
        Sp.push({
          icon: pp,
          style: {
            fontSize: "1.5rem"
          }
        }), Sp.push({
          str: `${op} ${null!==(Yp=(0,Op.V)(yp))&&void 0!==Yp?Yp:yp}\n`
        })
      }
      Sp.push({
        str: "\n"
      });
      for (const [Op, yp] of Ip) {
        var Dp, Ap, Pp, Wp;
        const pp = null !== (Dp = null === cp || void 0 === cp || null === (Ap = cp[Op]) || void 0 === Ap ? void 0 : Ap.icon) && void 0 !== Dp ? Dp : `${Op} Enchantment`,
          ip = null !== (Pp = null === cp || void 0 === cp || null === (Wp = cp[Op]) || void 0 === Wp ? void 0 : Wp.description) && void 0 !== Pp ? Pp : (0, op.m)(Op);
        Sp.push({
          icon: pp,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Sp.push({
          str: ip,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Sp.push({
          str: "\n"
        })
      }
      return Sp
    }
  },
  34443: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp,
      e: () => tp,
      i: () => wp,
      j: () => Lp,
      n: () => vp,
      q: () => Dp,
      s: () => Pp,
      w: () => Up,
      x: () => Ap
    });
    var Op = cp(322),
      op = cp(640),
      Ip = cp(337),
      Sp = cp(4326),
      xp = cp(34434);

    function Lp(pp, ip) {
      var cp;
      let {
        player: Op,
        chestOrCreative: op
      } = pp;
      var Ip;
      return ip < Op.length ? null !== (Ip = Op[ip]) && void 0 !== Ip ? Ip : null : null !== (cp = op[ip - Op.length]) && void 0 !== cp ? cp : null
    }

    function Yp(pp) {
      var ip;
      return null !== (ip = pp.amount) && void 0 !== ip ? ip : 0
    }

    function Dp(pp) {
      return 0 === pp.button || void 0 === pp.button
    }

    function Ap(pp) {
      return !!pp.shiftKey
    }

    function Pp(pp) {
      return "touches" in pp || "touch" === pp.pointerType || "pen" === pp.pointerType
    }
    const Wp = new Set,
      yp = 50;

    function Up(pp, ip) {
      var cp;
      const Op = null === (cp = pp[ip]) || void 0 === cp ? void 0 : cp.displayName;
      return (0, op.G)(Op) ? "string" !== typeof ip ? "" : (!Wp.has(ip) && Wp.size < yp && (Wp.add(ip), console.warn(`No item called "${ip}", so its hover shows the name as given`)), ip) : Op
    }

    function wp(pp, ip, cp) {
      var Lp, Yp, Dp, Ap, Pp, Wp, yp, wp, vp, tp, Hp, dp, ep, jp;
      const kp = pp.attributes,
        mp = null !== (Lp = null === (Yp = ip[pp.name]) || void 0 === Yp ? void 0 : Yp.rootName) && void 0 !== Lp ? Lp : pp.name,
        Rp = null !== (Dp = null !== (Ap = kp.customDisplayName) && void 0 !== Ap ? Ap : null === (Pp = ip[pp.name]) || void 0 === Pp ? void 0 : Pp.displayName) && void 0 !== Dp ? Dp : Up(ip, mp);
      let qp = Rp;
      const Mp = null === (Wp = kp.customAttributes) || void 0 === Wp ? void 0 : Wp.enchantmentTier;
      Mp && (qp = (0, Ip.sb)(Rp, {
        colour: Ip.lb[Mp]
      }));
      const Cp = null !== (yp = null !== (wp = null !== (vp = function(pp, ip) {
        var cp;
        if (void 0 === pp || null !== (cp = ip.customAttributes) && void 0 !== cp && cp.author) return pp;
        const op = (0, Op.nc)(pp);
        return op.every((pp => "string" === typeof pp)) ? pp : op.map((pp => "string" === typeof pp ? pp : {
          icon: pp.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(kp.customDescription, kp)) && void 0 !== vp ? vp : null === (tp = ip[pp.name]) || void 0 === tp ? void 0 : tp.description) && void 0 !== wp ? wp : null === (Hp = ip[mp]) || void 0 === Hp ? void 0 : Hp.description) && void 0 !== yp ? yp : "";
      let Ep = Cp;
      if (null !== (dp = kp.customAttributes) && void 0 !== dp && dp.enchantments) Ep = (0, xp.e)(Cp, kp.customAttributes.enchantments, kp.customAttributes.enchantmentData);
      else if (cp[mp]) Ep = (0, Ip.sb)(Cp), Ep.push({
        str: "\n"
      }), Ep.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (ep = kp.customAttributes) && void 0 !== ep && ep.mobSettings) {
        var Xp, lp;
        const pp = kp.customAttributes.mobSettings;
        var Qp, Jp;
        if (Ep = [], (0, op.G)(kp.customAttributes.health) || (Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Ep.push({
            str: " "
          }), Ep.push({
            str: kp.customAttributes.health.toString()
          }), (0, op.G)(pp.maxHealth) || (Ep.push({
            str: "/"
          }), Ep.push({
            str: pp.maxHealth.toString()
          }))), !(0, op.G)(pp.attackDamage) && pp.attackDamage > 0 && (Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Ep.push({
            str: " "
          }), Ep.push({
            str: pp.attackDamage.toString()
          })), !(0, op.G)(pp.secondaryAttackDamage) && pp.secondaryAttackDamage > 0 && (Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Ep.push({
            str: " "
          }), Ep.push({
            str: pp.secondaryAttackDamage.toString()
          })), (0, op.G)(pp.baseRunningSpeed) || (Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Ep.push({
            str: " "
          }), Ep.push({
            str: pp.baseRunningSpeed.toFixed(2)
          })), "Saddled" === pp.metaInfo) Ep.push({
          str: "\n"
        }), Ep.push({
          str: {
            translationKey: "general:has"
          }
        }), Ep.push({
          str: " "
        }), Ep.push({
          icon: null !== (Qp = null === (Jp = pp.tameInfo) || void 0 === Jp ? void 0 : Jp.saddleItemName) && void 0 !== Qp ? Qp : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Ep.push({
            str: "\n"
          }), Ep.push({
            str: "\n"
          }), pp.petInfo && null !== (Xp = pp.tameInfo) && void 0 !== Xp && Xp.supportsFriendship) {
          const ip = Sp.e.getIconsFromFriendshipPoints(pp.petInfo.friendshipPoints);
          for (const pp of ip) Ep.push({
            icon: pp,
            style: {
              fontSize: "1.5em"
            }
          });
          Ep.push({
            str: "\n"
          });
          const cp = Sp.e.getMobHungerLevel(pp.petInfo.lastFedAt);
          for (const pp of Sp.e.hungerLevelIcons[cp]) Ep.push({
            icon: pp,
            style: {
              fontSize: "1.5em"
            }
          });
          Ep.push({
            str: " "
          }), Ep.push({
            str: Sp.e.hungerLevelTranslations[cp],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (pp.tameInfo && null !== (lp = pp.tameInfo) && void 0 !== lp && lp.supportsFriendship) {
          var Bp, Np;
          let ip = null !== (Bp = pp.tameInfo.likedFoods) && void 0 !== Bp ? Bp : [];
          Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Sp.e.feedTextColours[Sp.e.MobFoodType.Superliked]
            }
          }), Ep.push({
            str: " "
          }), null !== (Np = pp.petInfo) && void 0 !== Np && Np.superlikedFoodKnown ? (Ep.push({
            icon: pp.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ip = ip.filter((ip => ip !== pp.petInfo.superlikedFood))) : Ep.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Sp.e.feedTextColours[Sp.e.MobFoodType.Liked]
            }
          }), Ep.push({
            str: " "
          });
          for (const pp of ip) Ep.push({
            icon: pp,
            style: {
              fontSize: "1.5em"
            }
          });
          Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Sp.e.feedTextColours[Sp.e.MobFoodType.Neutral]
            }
          }), Ep.push({
            str: " "
          });
          for (const cp of null !== (Tp = pp.tameInfo.neutralFoods) && void 0 !== Tp ? Tp : []) {
            var Tp;
            Ep.push({
              icon: cp,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Ep.push({
            str: "\n"
          }), Ep.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Sp.e.feedTextColours[Sp.e.MobFoodType.Disliked]
            }
          }), Ep.push({
            str: " "
          });
          for (const cp of null !== (fp = pp.tameInfo.dislikedFoods) && void 0 !== fp ? fp : []) {
            var fp;
            Ep.push({
              icon: cp,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Ep.length > 0 ? (Ep.shift(), Ep.unshift(...(0, Ip.sb)(Cp))) : Ep = (0, Ip.sb)(Cp)
      }
      return {
        name: qp,
        desc: Ep,
        fontStyle: null !== (jp = kp.customAttributes) && void 0 !== jp && jp.author ? "italic" : "normal"
      }
    }

    function vp(pp, ip, cp, Op) {
      const op = Lp(pp, cp),
        Ip = Lp(pp, Op);
      if (!op) return !1;
      const Sp = ip[op.name].armourReduction,
        xp = ip[Ip.name].armourReduction;
      if (xp === Sp) {
        var Yp, Dp, Ap, Pp;
        const pp = null !== (Yp = null === (Dp = op.attributes.customAttributes) || void 0 === Dp ? void 0 : Dp.enchantmentTier) && void 0 !== Yp ? Yp : "Tier 0",
          ip = null !== (Ap = null === (Pp = Ip.attributes.customAttributes) || void 0 === Pp ? void 0 : Pp.enchantmentTier) && void 0 !== Ap ? Ap : "Tier 0";
        return parseInt(pp.replace("Tier ", "")) >= parseInt(ip.replace("Tier ", ""))
      }
      return Sp > xp
    }

    function tp(pp) {
      let ip;
      if ("number" === typeof pp) {
        const cp = document.querySelector(`[data-inven-idx="${pp}"]`);
        if (!cp) return null;
        ip = cp.getBoundingClientRect()
      } else ip = pp.getBoundingClientRect();
      return {
        x: ip.left + ip.width / 2,
        y: ip.top + ip.height / 2
      }
    }
  },
  9024: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => vp,
      d: () => dp
    });
    var Op = cp(62),
      op = cp(34),
      Ip = cp(2543),
      Sp = cp(3520);
    const xp = 6,
      Lp = 4;

    function Yp(pp) {
      let {
        slotsLeft: ip,
        slotsRight: cp,
        width: Op,
        height: op,
        zoneRight: Ip,
        rowTop: Sp,
        besideBottom: Yp,
        obstacles: Dp
      } = pp;
      const Ap = Math.max(0, Math.floor(cp - ip - Op)),
        Pp = null === Ip ? 0 : Math.min(Ap, Math.max(0, Math.ceil(Ip + xp - ip))),
        Wp = ip + Pp - xp,
        yp = ip + Pp + Op + xp,
        Up = Dp.filter((pp => pp.left < yp && pp.right > Wp));
      let wp = Yp;
      for (let xp = 0; xp <= Up.length; xp++) {
        const pp = Up.filter((pp => pp.top < wp + Lp && pp.bottom > wp - op - Lp));
        if (0 === pp.length) break;
        wp = Math.min(...pp.map((pp => pp.top))) - Lp
      }
      return {
        shift: Pp,
        rise: wp === Yp ? null : Math.ceil(Sp - wp)
      }
    }

    function Dp(pp) {
      return Array.from(pp.children).filter((pp => !pp.classList.contains("HotBarRow")))
    }

    function Ap(pp) {
      return function(pp) {
        const ip = [],
          cp = (pp, Op) => {
            const op = pp.getBoundingClientRect();
            if (op.width > 0 && op.height > 0) ip.push(pp);
            else if (Op < 2)
              for (const ip of Array.from(pp.children)) cp(ip, Op + 1)
          };
        for (const Op of pp) cp(Op, 0);
        return ip
      }(Dp(pp).flatMap((pp => pp.classList.contains("AuraBarWrapper") ? [] : pp.classList.contains("BottomScreenStatBarList") ? Array.from(pp.children) : [pp])))
    }

    function Pp(pp) {
      var ip;
      const cp = pp.getBoundingClientRect();
      if (0 === cp.width) return null;
      const Op = null === (ip = pp.parentElement) || void 0 === ip ? void 0 : ip.getBoundingClientRect();
      return Op && Op.width > 0 ? Math.min(cp.right, Op.left + Op.width * Wp) : cp.right
    }
    const Wp = .35,
      yp = new WeakMap,
      Up = ".BottomScreenMessage, [role='status']",
      wp = new WeakMap;

    function vp(pp) {
      tp(pp) && tp(pp)
    }

    function tp(pp) {
      var ip, cp, Op, op, Ip, Sp;
      const xp = pp.documentElement.classList;
      if (!xp.contains("TouchHotbar") || xp.contains("TouchHotbarKeysAbove") || xp.contains("HudMove-inventory") || xp.contains("HudLocked-inventory") || null === (ip = pp.defaultView) || void 0 === ip || null === (cp = ip.matchMedia) || void 0 === cp || !cp.call(ip, Hp).matches) return !1;
      const Dp = pp.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Wp = null === Dp || void 0 === Dp ? void 0 : Dp.parentElement,
        vp = null === Dp || void 0 === Dp ? void 0 : Dp.closest(".BottomMiddleElements"),
        tp = null === vp || void 0 === vp ? void 0 : vp.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Dp || !Wp || !vp || !tp || vp.classList.contains("TouchInventoryOpen")) return !1;
      const dp = Dp.getBoundingClientRect();
      if (0 === dp.width) return !1;
      const ep = pp.querySelector(".JoystickZone"),
        jp = tp.getBoundingClientRect(),
        kp = Wp.getBoundingClientRect().top,
        mp = null === (Op = vp.querySelector(":scope > .AuraBarWrapper")) || void 0 === Op ? void 0 : Op.getBoundingClientRect(),
        Rp = Ap(vp),
        qp = {
          slotsLeft: jp.left,
          slotsRight: jp.right,
          width: dp.width,
          height: dp.height,
          zoneRight: ep ? Pp(ep) : null,
          rowTop: kp,
          besideBottom: (mp && mp.height > 0 ? mp.top : kp) - Lp,
          obstacles: Rp.map((pp => pp.getBoundingClientRect()))
        },
        Mp = Yp({
          ...qp,
          obstacles: Rp.filter((pp => !pp.matches(Up))).map((pp => pp.getBoundingClientRect()))
        }),
        Cp = pp.defaultView,
        Ep = `${null===Cp||void 0===Cp?void 0:Cp.innerWidth}x${null===Cp||void 0===Cp?void 0:Cp.innerHeight}:${Mp.shift}:${Math.round(dp.width)}:${Math.round(kp)}`,
        Xp = wp.get(vp),
        lp = (null === Xp || void 0 === Xp ? void 0 : Xp.at) === Ep ? (Qp = Xp.rise, Jp = Mp.rise, null === Qp ? Jp : null === Jp ? Qp : Math.max(Qp, Jp)) : Mp.rise;
      var Qp, Jp;
      const Bp = Yp({
          ...qp,
          besideBottom: null === lp ? qp.besideBottom : kp - lp
        }),
        Np = {
          shift: Mp.shift,
          rise: null !== (op = Bp.rise) && void 0 !== op ? op : lp
        },
        Tp = yp.get(vp);
      return (null !== (Ip = null === Tp || void 0 === Tp ? void 0 : Tp.shift) && void 0 !== Ip ? Ip : 0) === Np.shift && wp.set(vp, {
        at: Ep,
        rise: lp
      }), (null === Tp || void 0 === Tp ? void 0 : Tp.shift) !== Np.shift && vp.style.setProperty("--touch-shop-above-shift", `${Np.shift}px`), (null === Tp || void 0 === Tp ? void 0 : Tp.rise) !== Np.rise && (vp.classList.toggle("ShopAboveUp", null !== Np.rise), null === Np.rise ? vp.style.removeProperty("--touch-shop-above-rise") : vp.style.setProperty("--touch-shop-above-rise", `${Np.rise}px`)), yp.set(vp, Np), (null !== (Sp = null === Tp || void 0 === Tp ? void 0 : Tp.shift) && void 0 !== Sp ? Sp : 0) !== Np.shift
    }
    const Hp = "(orientation: landscape) and (max-height: 500px)";

    function dp(pp, ip, cp) {
      (0, Op.useLayoutEffect)((() => {
        var ip;
        const Op = null === (ip = pp.current) || void 0 === ip ? void 0 : ip.closest(".BottomMiddleElements");
        if (!Op || cp) return;
        const xp = new ResizeObserver((() => {
            Wp(!1)
          })),
          Lp = () => {
            xp.disconnect();
            const pp = document.querySelector(".JoystickZone");
            for (const ip of [pp, Op, Op.querySelector(".HotBarGameItemsContainer"), ...Ap(Op)]) ip && xp.observe(ip)
          };
        let Yp = null,
          Pp = !1;
        const Wp = pp => {
            Pp ||= pp, Yp ??= requestAnimationFrame((() => {
              Yp = null, Pp && (Pp = !1, Lp()), vp(document)
            }))
          },
          yp = new MutationObserver((() => {
            Wp(!0)
          }));
        yp.observe(Op, {
          childList: !0
        });
        for (const pp of Dp(Op)) yp.observe(pp, {
          childList: !0,
          subtree: !0
        });
        vp(document), Lp();
        const Up = () => {
            Wp(!0)
          },
          wp = [(0, op.n)(Ip.e, Up), (0, op.n)(Sp.e, Up)];
        return () => {
          null !== Yp && cancelAnimationFrame(Yp), xp.disconnect(), yp.disconnect();
          for (const pp of wp) pp()
        }
      }), [pp, ip, cp])
    }
  },
  34325: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      g: () => yp,
      k: () => Up
    });
    var Op = cp(1480),
      op = cp(62),
      Ip = cp(1334),
      Sp = cp(4621),
      xp = cp(2413),
      Lp = cp(1201),
      Yp = cp(104),
      Dp = cp(2004),
      Ap = cp(1361),
      Pp = cp(1112);

    function Wp(pp) {
      let {
        show: ip,
        onClose: cp
      } = pp;
      const {
        requestedGameNameWithVariation: Op,
        lobbyName: op,
        shownLobbyName: Ip
      } = (0, Dp.g)("connectedGame"), Lp = (0, xp.c)(Op, op, !1);
      return Yp.featureFlags.canUseInviteLinks && (0, Pp.jsx)(Sp.c, {
        show: ip,
        close: cp,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Pp.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Pp.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Pp.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Pp.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Lp ? (0, Pp.jsx)(Ap.c, {}) : Lp, (0, Pp.jsx)("br", {}), "Lobby Name: ", Ip, (0, Pp.jsx)("br", {}), (0, Pp.jsx)("br", {}), (0, Pp.jsx)("br", {}), (0, Pp.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Pp.jsx)(yp, {})]
        })
      })
    }

    function yp() {
      var pp;
      const {
        t: ip
      } = (0, Lp.H)(), cp = null !== (pp = Up(Yp.featureFlags.canUseInviteLinks)) && void 0 !== pp ? pp : "Loading Link...", [Ip, Sp] = (0, op.useState)(0), [xp, Dp] = (0, op.useReducer)((pp => pp + 1), 0);
      return (0, op.useEffect)((() => {
        const pp = setTimeout((() => {
          Dp()
        }), 1100);
        return () => {
          clearTimeout(pp)
        }
      }), [Ip]), Yp.featureFlags.canUseInviteLinks && (0, Pp.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Pp.jsx)("div", {
          className: "InviteLinkInner",
          children: cp
        }), (0, Pp.jsx)(Op.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(cp).catch((pp => {
              console.error("Failed to copy invite link:", pp)
            })), Sp(Date.now())
          },
          disabled: Date.now() - Ip < 1e3,
          children: Date.now() - Ip < 1e3 ? ip("general:copied") : ip("general:copy")
        })]
      })
    }

    function Up(pp) {
      const [ip, cp] = (0, op.useState)(null);
      return (0, op.useEffect)((() => {
        if (!pp) return;
        let ip = !0;
        return (0, Ip.w)().then((pp => {
          ip && cp(pp)
        })).catch((pp => {
          console.error("Failed to get invite link:", pp)
        })), () => {
          ip = !1
        }
      }), [pp]), ip
    }
  },
  34427: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(2004),
      xp = cp(1112);

    function Lp(pp) {
      const ip = Math.floor(pp / 3600),
        cp = Math.floor(pp % 3600 / 60),
        Op = Math.floor(pp % 60),
        op = `${cp.toString().padStart(2,"0")}:${Op.toString().padStart(2,"0")}`;
      return ip > 0 ? `${ip}:${op}` : op
    }
    const Yp = (0, Op.memo)((function(pp) {
      let {
        className: ip
      } = pp;
      const {
        recording: cp,
        seconds: Op
      } = (0, Sp.g)("replayRecorder");
      return cp ? (0, xp.jsxs)("div", {
        className: Ip()("RecordingIndicator", ip),
        children: [(0, xp.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, xp.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, xp.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Lp(Op)
        })]
      }) : null
    }))
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  6724: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(62),
      op = cp(44);

    function Ip(pp, ip) {
      var cp;
      const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
      return [Ip, ip => {
        op.h.setItem(pp, ip), Sp(ip)
      }]
    }
  },
  9015: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Lp,
      D: () => Pp,
      H: () => Yp,
      I: () => yp,
      J: () => Ip,
      d: () => op,
      h: () => xp,
      j: () => Op,
      m: () => Up,
      n: () => Wp,
      o: () => Dp,
      r: () => Sp,
      u: () => wp,
      y: () => Ap
    });
    const Op = pp => ({
      left: pp.left,
      top: pp.top,
      right: pp.right,
      bottom: pp.bottom
    });

    function op(pp) {
      return {
        x: (pp.left + pp.right) / 2,
        y: (pp.top + pp.bottom) / 2
      }
    }

    function Ip(pp) {
      return 0 === pp.length ? null : pp.reduce(((pp, ip) => ({
        left: Math.min(pp.left, ip.left),
        top: Math.min(pp.top, ip.top),
        right: Math.max(pp.right, ip.right),
        bottom: Math.max(pp.bottom, ip.bottom)
      })))
    }

    function Sp(pp, ip) {
      const cp = Math.max(0, (ip - (pp.right - pp.left)) / 2),
        Op = Math.max(0, (ip - (pp.bottom - pp.top)) / 2);
      return {
        left: pp.left - cp,
        top: pp.top - Op,
        right: pp.right + cp,
        bottom: pp.bottom + Op
      }
    }

    function xp(pp, ip) {
      return ip.x >= pp.left && ip.x <= pp.right && ip.y >= pp.top && ip.y <= pp.bottom
    }

    function Lp(pp, ip, cp) {
      let Op = null,
        Ip = 1 / 0;
      for (const {
          id: op,
          box: Sp
        }
        of ip) {
        const ip = (Sp.right - Sp.left) * (Sp.bottom - Sp.top);
        xp(Sp, pp) && ip < Ip && (Ip = ip, Op = op)
      }
      if (null !== Op) return Op;
      let Lp = 1 / 0;
      for (const {
          id: Yp,
          box: Dp
        }
        of ip) {
        if (!xp(Sp(Dp, cp), pp)) continue;
        const ip = op(Dp),
          Ip = Math.hypot(pp.x - ip.x, pp.y - ip.y);
        Ip < Lp && (Lp = Ip, Op = Yp)
      }
      return Op
    }

    function Yp(pp, ip, cp) {
      return {
        left: cp.left,
        top: cp.top,
        right: pp - cp.right,
        bottom: ip - cp.bottom
      }
    }

    function Dp(pp, ip, cp, Op) {
      const op = (pp, ip, cp) => Math.max(Math.min(ip, 0), Math.min(Math.max(cp, 0), pp));
      return {
        x: op(ip, Op.left - pp.left, Op.right - pp.right),
        y: op(cp, Op.top - pp.top, Op.bottom - pp.bottom)
      }
    }

    function Ap(pp, ip, cp, Op, op) {
      const Ip = pp.dx * Op + ip,
        Sp = pp.dy * op + cp,
        xp = pp => Math.max(-1, Math.min(1, pp));
      return {
        dx: xp(Ip / Op),
        dy: xp(Sp / op)
      }
    }

    function Pp(pp, ip, cp, Op) {
      return ip <= 0 || cp <= 0 ? 1 : Math.max(.05, Math.min(1, pp / ip, Op / cp))
    }

    function Wp(pp, ip, cp) {
      return Math.min(pp.right, ip.right) - Math.max(pp.left, ip.left) > cp && Math.min(pp.bottom, ip.bottom) - Math.max(pp.top, ip.top) > cp
    }

    function yp(pp, ip) {
      const cp = (pp, ip, cp, Op) => ip - pp > Op - cp ? cp - pp > ip - Op ? Op - ip : cp - pp : pp < cp ? cp - pp : ip > Op ? Op - ip : 0;
      return {
        x: cp(pp.left, pp.right, ip.left, ip.right),
        y: cp(pp.top, pp.bottom, ip.top, ip.bottom)
      }
    }

    function Up(pp, ip, cp) {
      return Wp(pp, {
        left: 0,
        top: 0,
        right: ip,
        bottom: cp
      }, 0)
    }

    function wp(pp, ip) {
      let {
        avoid: cp = null,
        bounds: Op = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, op = 0, Ip = 1 / 0;
      return pp.forEach(((pp, Sp) => {
        const xp = ip.filter((ip => Wp(pp, ip, 0))).length,
          Lp = null !== Op && (pp.left < Op.left || pp.top < Op.top || pp.right > Op.right || pp.bottom > Op.bottom),
          Yp = xp + (cp && Wp(pp, cp, 0) ? 1e3 : 0) + (Lp ? 1e6 : 0);
        Yp < Ip && (op = Sp, Ip = Yp)
      })), op
    }
  },
  9019: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      c: () => Ip,
      e: () => op,
      f: () => Sp,
      j: () => Ap,
      n: () => Dp,
      r: () => Yp,
      s: () => Lp
    });
    var Op = cp(2525);
    const op = ["J", "C", "A", "P", "U", "X", "G"],
      Ip = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Sp(pp) {
      return pp ? ["X"] : ["P", "X"]
    }
    const xp = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: Op.A,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function Lp(pp, ip, cp) {
      const Op = pp.querySelector(".InGameUi .TouchComponentsButtons");
      if (!Op) return xp;
      const Ip = {},
        Sp = {};
      for (const xp of op) {
        const pp = Op.querySelector(`.TouchSlot${xp} > .TouchKey`);
        if (pp) {
          var Lp, Yp;
          Ip[xp] = pp.cloneNode(!0);
          const ip = (null !== (Lp = null === (Yp = pp.querySelector(".TouchKeyLabel")) || void 0 === Yp ? void 0 : Yp.textContent) && void 0 !== Lp ? Lp : "").split(/\s+/).filter((pp => !/[\d\xd7]/.test(pp))).join(" ");
          ip && (Sp[xp] = ip)
        }
      }
      const Dp = ip => {
          const cp = pp.querySelector(`.InGameUi ${ip}`);
          return null !== cp && !cp.classList.contains("Hidden")
        },
        Ap = [...pp.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((pp => pp.cloneNode(!0)));
      return {
        faces: Object.keys(Ip).length > 0 ? Ip : null,
        names: Sp,
        shop: Dp(".TouchInventoryKey.ShopKey"),
        bag: Dp(".TouchInventoryKey.BagKey"),
        sprint: Dp(".TouchSprintHit"),
        items: Ap.length > 0 ? Ap : null,
        rowIcons: ip,
        pinnedIcons: cp
      }
    }

    function Yp(pp, ip) {
      const cp = {};
      for (const Op of [...Sp(ip), "G"]) {
        const ip = pp.names[Op];
        ip && (cp[Ip[Op]] = ip)
      }
      return cp
    }

    function Dp(pp, ip) {
      const {
        faces: cp
      } = pp;
      if (null === cp) return [];
      const Op = new Set(Object.keys(cp).map((pp => Ip[pp])));
      return Sp(ip).filter((pp => !Op.has(Ip[pp])))
    }

    function Ap(pp, ip) {
      pp.replaceChildren(...[...ip.childNodes].map((pp => pp.cloneNode(!0))))
    }
  },
  34336: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Op
    });
    const Op = "image/jpeg",
      op = "jpg"
  },
  34341: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      f: () => Yp,
      j: () => Dp
    });
    var Op = cp(1705),
      op = cp(3309),
      Ip = cp(104),
      Sp = cp(1779),
      xp = cp(34336);

    function Lp() {
      return !(0, Ip.isMobileApp)() || Op.b.supports("photos")
    }
    async function Yp(pp) {
      var ip, cp;
      if ((0, Ip.isMobileApp)()) {
        const {
          saved: ip
        } = await Op.b.request("photos.save", {
          data: await (0, op.g)(pp),
          mimeType: xp.g
        });
        return ip ? "saved" : "denied"
      }
      return (0, Ip.isIOS)() && null !== (ip = (cp = navigator).canShare) && void 0 !== ip && ip.call(cp, {
        files: [pp]
      }) ? Dp(pp) : ((0, Sp.c)(pp, pp.name), "saved")
    }
    async function Dp(pp) {
      try {
        return await navigator.share({
          files: [pp]
        }), "shared"
      } catch (ip) {
        if (ip instanceof DOMException && "AbortError" === ip.name) return "OO";
        if (ip instanceof DOMException && "NotAllowedError" === ip.name) return "needsTap";
        throw ip
      }
    }
  },
  34332: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      d: () => Dp,
      f: () => Ap
    });
    var Op = cp(25),
      op = cp(34306),
      Ip = cp(1650),
      Sp = cp(34336);
    const xp = 8294400,
      Lp = .92;

    function Yp() {
      (0, Ip.e)(), Op.c.set({
        screenshotMode: !0
      })
    }

    function Dp() {
      Op.c.set({
        screenshotMode: !1
      })
    }
    async function Ap() {
      const {
        width: pp,
        height: ip,
        scale: cp
      } = function(pp, ip, cp) {
        const Op = Math.max(1, pp),
          op = Math.max(1, ip),
          Ip = Math.min(Math.max(1, cp), Math.sqrt(xp / (Op * op)));
        return {
          width: Math.round(Op * Ip),
          height: Math.round(op * Ip),
          scale: Ip
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: Op
      } = await op.devTools.capturePhoto(pp, ip, {
        scale: cp,
        type: Sp.g,
        quality: Lp
      });
      return new File([Op], function(pp) {
        const ip = pp => String(pp).padStart(2, "0"),
          cp = `${pp.getFullYear()}${ip(pp.getMonth()+1)}${ip(pp.getDate())}`,
          Op = `${ip(pp.getHours())}${ip(pp.getMinutes())}${ip(pp.getSeconds())}`;
        return `bloxd-${cp}-${Op}.${Sp.e}`
      }(new Date), {
        type: Sp.g
      })
    }
  },
  8807: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Op
    });
    const Op = "controllerOpenKeyboard",
      op = "controllerKeyboardVisible"
  },
  34310: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    const Op = new Set(["chunkBorders"])
  },
  34306: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ALL_DEV_TOOLS: () => Sp,
      coreDevTools: () => Yp,
      devTools: () => Lp
    });
    var Op = cp(657),
      op = cp(1317),
      Ip = cp(34310);
    const Sp = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function xp() {
      const {
        noaDevTools: pp
      } = await cp.e(242).then((() => cp(41280)));
      return pp
    }
    const Lp = new class {
        constructor() {
          this.loadHost = xp, this.tools = Sp
        }
        setHost(pp) {
          this.tools = null === pp ? Sp : pp.tools, this.loadHost = null === pp ? xp : async () => pp
        }
        supports(pp) {
          return this.tools.has(pp)
        }
        async downloadScene(pp, ip) {
          const cp = await this.loadHost();
          await cp.downloadScene(pp, ip)
        }
        async setAmbientLightIntensity(pp) {
          const ip = await this.loadHost();
          await ip.setAmbientLightIntensity(pp)
        }
        async capturePhoto(pp, ip, cp) {
          return (await this.loadHost()).capturePhoto(pp, ip, cp)
        }
      },
      Yp = {
        tools: Ip.d,
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
    Op.z && Lp.setHost(Yp), (0, op.y)((() => {
      Lp.setHost(Yp)
    }))
  },
  34466: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => op,
      i: () => Dp
    });
    var Op = cp(1579);

    function op(pp) {
      var ip;
      return {
        ...Sp.store,
        yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
      }
    }
    const Ip = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Sp = {
        player: Ip,
        store: {
          ...Ip,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xp(pp, ip) {
      pp instanceof Promise ? pp.then(ip).catch((pp => {
        console.error("Couldn't open the preview", pp)
      })) : ip(pp)
    }
    class Lp {
      constructor(pp) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
        }))
      }
      show(pp) {
        var ip;
        this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    class Yp {
      constructor(pp) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var pp, ip;
        return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
      }
      setCosmetic(pp, ip) {
        var cp;
        null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
      }
      playEmote(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
      }
      setOrbit(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.setOrbit(pp)
      }
      resetCamera() {
        var pp;
        null === (pp = this.opened) || void 0 === pp || pp.resetCamera()
      }
      async untilDrawn(pp) {
        var ip;
        await this.ready, await (null === (ip = this.opened) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    const Dp = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(pp) {
        this.host = pp
      }
      setDefaultHost(pp) {
        this.makeDefault = pp
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(pp) {
        return new Lp(this.current().openMob(pp))
      }
      openPet(pp) {
        return new Lp(this.current().openPet(pp))
      }
      openMobLineup(pp) {
        return new Lp(this.current().openMobLineup(pp))
      }
      openCharacter(pp, ip) {
        return new Yp(this.current().openCharacter(pp, ip))
      }
    }
  },
  34462: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.b,
      h: () => Op.e,
      j: () => Op.i
    });
    var Op = cp(34466);
    class op {
      constructor(pp) {
        this.load = pp, this.loaded = null, this.loading = null
      }
      run(pp) {
        return null !== this.loaded ? pp(this.loaded) : (this.loading ??= this.load().then((pp => (this.loaded = pp, pp)), (pp => {
          throw this.loading = null, pp
        })), this.loading.then(pp))
      }
    }
    class Ip {
      constructor() {
        this.mobScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e(188), cp.e(227), cp.e(97), cp.e(239), cp.e(230), cp.e(246), cp.e(121), cp.e(247), cp.e(77), cp.e(251)]).then((() => cp(41295))))), this.characterScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e(188), cp.e(227), cp.e(97), cp.e(239), cp.e(230), cp.e(246), cp.e(121), cp.e(247), cp.e(77), cp.e(250)]).then((() => cp(41400)))))
      }
      openMob(pp) {
        return this.mobScene.run((ip => ip.openMobPreview(pp)))
      }
      openPet(pp) {
        return this.mobScene.run((ip => ip.openPetPreview(pp)))
      }
      openMobLineup(pp) {
        return this.mobScene.run((ip => ip.openMobLineupPreview(pp)))
      }
      openCharacter(pp, ip) {
        return this.characterScene.run((cp => cp.openCharacterPreview(pp, ip)))
      }
    }
    Op.i.setDefaultHost((() => new Ip))
  },
  6804: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      f: () => Ip
    });
    var Op = cp(44);
    const op = "shaderPack";
    async function Ip() {
      var pp;
      let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
    }
  },
  9002: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      f: () => Lp
    });
    var Op = cp(25),
      op = cp(1349),
      Ip = cp(104);
    const Sp = {
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

    function xp() {
      return (0, Ip.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Lp = new class {
      constructor(pp) {
        this.deps = pp, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(pp, ip) {
        var cp;
        if (!this.deps.enabled()) return;
        const Op = Sp[pp],
          op = null !== ip && void 0 !== ip ? ip : Op.pattern;
        if (null === op) return void console.warn("No vibration pattern for", pp);
        const Ip = this.deps.now();
        Ip - this.lastAnyAt < 40 && Op.priority < this.playingPriority || Ip - (null !== (cp = this.lastAt.get(pp)) && void 0 !== cp ? cp : -1 / 0) < Op.minGapMs || Ip < this.playingUntil && Op.priority < this.playingPriority || (this.lastAt.set(pp, Ip), this.lastAnyAt = Ip, this.playingUntil = Ip + op.reduce(((pp, ip) => pp + ip), 0), this.playingPriority = Op.priority, this.deps.vibrate(op))
      }
    }({
      vibrate: pp => {
        navigator.vibrate([...pp])
      },
      now: () => performance.now(),
      enabled: () => xp() && Op.c.get("isTouchScreen") && Op.c.get("clientEscMenuOptions").vibration && !(0, op.e)()
    })
  },
  34346: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp,
      e: () => Ap,
      i: () => Dp
    });
    var Op = cp(25),
      op = cp(1705),
      Ip = cp(44),
      Sp = cp(3761);
    const xp = 2592e5,
      Lp = "notificationOptInLastPromptedAt";
    async function Yp() {
      var pp;
      const ip = null !== (pp = Ip.h.getItem(Lp)) && void 0 !== pp ? pp : 0;
      return Date.now() - ip < xp ? null : Ap()
    }

    function Dp() {
      Ip.h.setItem(Lp, Date.now())
    }
    async function Ap() {
      return await op.b.ready, op.b.supports("notifications") ? Op.c.get("mobilePushNotificationsCanAsk") ? async () => {
        op.b.request("notifications.requestPermission", {}).then((pp => {
          let {
            canAsk: ip
          } = pp;
          Op.c.set({
            mobilePushNotificationsCanAsk: ip
          })
        }), (pp => {
          console.error("The app couldn't ask for push notifications:", pp)
        }))
      }: null: await Sp.c.canAsk() ? () => Sp.c.requestPermission() : null
    }
  },
  8897: (pp, ip, cp) => {
    function Op(pp, ip) {
      return !pp.hidden && (ip || !pp.isRewardedAd)
    }

    function op(pp) {
      return "object" === typeof pp ? pp.option : pp
    }

    function Ip(pp, ip) {
      var cp;
      if ("dropdown" === (null === (cp = pp.userInput) || void 0 === cp ? void 0 : cp.type) && "object" === typeof pp.userInput.dropdownOptions[0]) {
        for (const cp of pp.userInput.dropdownOptions)
          if (op(cp) === ip) return "object" === typeof cp ? cp.cost : pp.cost;
        console.error("Didn't find matching option for dropdown item. Item:", pp, "input:", ip)
      }
      return pp.cost
    }

    function Sp(pp, ip, cp) {
      var Op;
      const op = null !== (Op = cp.excludedPlayers) && void 0 !== Op ? Op : [ip];
      return pp.filter((pp => !op.includes(pp)))
    }
    cp.d(ip, {
      b: () => Ip,
      c: () => op,
      g: () => Sp,
      h: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);