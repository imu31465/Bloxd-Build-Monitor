export const id = 134;
export const ids = [134, 196];
export const modules = {
  34555: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(349),
      Uu = ju(34557);

    function Zu(uu, Eu, ju) {
      const Zu = Object.entries(Eu).sort(((uu, Eu) => Eu[1] - uu[1])),
        Xu = (0, su.qb)(uu);
      Xu.push(uu ? "\n\n" : "\n");
      for (const [Uu, Ou] of Zu) {
        var lu, qu, fu;
        const uu = null !== (lu = null === ju || void 0 === ju || null === (qu = ju[Uu]) || void 0 === qu ? void 0 : qu.icon) && void 0 !== lu ? lu : `${Uu} Enchantment`;
        Xu.push({
          icon: uu,
          style: {
            fontSize: "1.5rem"
          }
        }), Xu.push({
          str: `${Uu} ${null!==(fu=(0,su.N)(Ou))&&void 0!==fu?fu:Ou}\n`
        })
      }
      Xu.push({
        str: "\n"
      });
      for (const [su, Ou] of Zu) {
        var Cu, bu, cu, Nu;
        const uu = null !== (Cu = null === ju || void 0 === ju || null === (bu = ju[su]) || void 0 === bu ? void 0 : bu.icon) && void 0 !== Cu ? Cu : `${su} Enchantment`,
          Eu = null !== (cu = null === ju || void 0 === ju || null === (Nu = ju[su]) || void 0 === Nu ? void 0 : Nu.description) && void 0 !== cu ? cu : (0, Uu.k)(su);
        Xu.push({
          icon: uu,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Xu.push({
          str: Eu,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Xu.push({
          str: "\n"
        })
      }
      return Xu
    }
  },
  34559: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu,
      i: () => gu,
      l: () => hu,
      m: () => qu,
      o: () => Du,
      p: () => Cu,
      r: () => cu,
      t: () => Yu,
      v: () => bu
    });
    var su = ju(337),
      Uu = ju(649),
      Zu = ju(349),
      Xu = ju(4411),
      lu = ju(34555);

    function qu(uu, Eu) {
      var ju;
      let {
        player: su,
        chestOrCreative: Uu
      } = uu;
      var Zu;
      return Eu < su.length ? null !== (Zu = su[Eu]) && void 0 !== Zu ? Zu : null : null !== (ju = Uu[Eu - su.length]) && void 0 !== ju ? ju : null
    }

    function fu(uu) {
      var Eu;
      return null !== (Eu = uu.amount) && void 0 !== Eu ? Eu : 0
    }

    function Cu(uu) {
      return 0 === uu.button || void 0 === uu.button
    }

    function bu(uu) {
      return !!uu.shiftKey
    }

    function cu(uu) {
      return "touches" in uu || "touch" === uu.pointerType || "pen" === uu.pointerType
    }
    const Nu = new Set,
      Ou = 50;

    function Yu(uu, Eu) {
      var ju;
      const su = null === (ju = uu[Eu]) || void 0 === ju ? void 0 : ju.displayName;
      return (0, Uu.H)(su) ? "string" !== typeof Eu ? "" : (!Nu.has(Eu) && Nu.size < Ou && (Nu.add(Eu), console.warn(`No item called "${Eu}", so its hover shows the name as given`)), Eu) : su
    }

    function hu(uu, Eu, ju) {
      var qu, fu, Cu, bu, cu, Nu, Ou, hu, Du, gu, Mu, eu, Gu, pu;
      const wu = uu.attributes,
        Ju = null !== (qu = null === (fu = Eu[uu.name]) || void 0 === fu ? void 0 : fu.rootName) && void 0 !== qu ? qu : uu.name,
        du = null !== (Cu = null !== (bu = wu.customDisplayName) && void 0 !== bu ? bu : null === (cu = Eu[uu.name]) || void 0 === cu ? void 0 : cu.displayName) && void 0 !== Cu ? Cu : Yu(Eu, Ju);
      let au = du;
      const Pu = null === (Nu = wu.customAttributes) || void 0 === Nu ? void 0 : Nu.enchantmentTier;
      Pu && (au = (0, Zu.qb)(du, {
        colour: Zu.jb[Pu]
      }));
      const ou = null !== (Ou = null !== (hu = null !== (Du = function(uu, Eu) {
        var ju;
        if (void 0 === uu || null !== (ju = Eu.customAttributes) && void 0 !== ju && ju.author) return uu;
        const Uu = (0, su.gc)(uu);
        return Uu.every((uu => "string" === typeof uu)) ? uu : Uu.map((uu => "string" === typeof uu ? uu : {
          icon: uu.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(wu.customDescription, wu)) && void 0 !== Du ? Du : null === (gu = Eu[uu.name]) || void 0 === gu ? void 0 : gu.description) && void 0 !== hu ? hu : null === (Mu = Eu[Ju]) || void 0 === Mu ? void 0 : Mu.description) && void 0 !== Ou ? Ou : "";
      let ku = ou;
      if (null !== (eu = wu.customAttributes) && void 0 !== eu && eu.enchantments) ku = (0, lu.d)(ou, wu.customAttributes.enchantments, wu.customAttributes.enchantmentData);
      else if (ju[Ju]) ku = (0, Zu.qb)(ou), ku.push({
        str: "\n"
      }), ku.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Gu = wu.customAttributes) && void 0 !== Gu && Gu.mobSettings) {
        var mu, vu;
        const uu = wu.customAttributes.mobSettings;
        var Ku, Vu;
        if (ku = [], (0, Uu.H)(wu.customAttributes.health) || (ku.push({
            str: "\n"
          }), ku.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), ku.push({
            str: " "
          }), ku.push({
            str: wu.customAttributes.health.toString()
          }), (0, Uu.H)(uu.maxHealth) || (ku.push({
            str: "/"
          }), ku.push({
            str: uu.maxHealth.toString()
          }))), !(0, Uu.H)(uu.attackDamage) && uu.attackDamage > 0 && (ku.push({
            str: "\n"
          }), ku.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), ku.push({
            str: " "
          }), ku.push({
            str: uu.attackDamage.toString()
          })), !(0, Uu.H)(uu.secondaryAttackDamage) && uu.secondaryAttackDamage > 0 && (ku.push({
            str: "\n"
          }), ku.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), ku.push({
            str: " "
          }), ku.push({
            str: uu.secondaryAttackDamage.toString()
          })), (0, Uu.H)(uu.baseRunningSpeed) || (ku.push({
            str: "\n"
          }), ku.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), ku.push({
            str: " "
          }), ku.push({
            str: uu.baseRunningSpeed.toFixed(2)
          })), "Saddled" === uu.metaInfo) ku.push({
          str: "\n"
        }), ku.push({
          str: {
            translationKey: "general:has"
          }
        }), ku.push({
          str: " "
        }), ku.push({
          icon: null !== (Ku = null === (Vu = uu.tameInfo) || void 0 === Vu ? void 0 : Vu.saddleItemName) && void 0 !== Ku ? Ku : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (ku.push({
            str: "\n"
          }), ku.push({
            str: "\n"
          }), uu.petInfo && null !== (mu = uu.tameInfo) && void 0 !== mu && mu.supportsFriendship) {
          const Eu = Xu.e.getIconsFromFriendshipPoints(uu.petInfo.friendshipPoints);
          for (const uu of Eu) ku.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          ku.push({
            str: "\n"
          });
          const ju = Xu.e.getMobHungerLevel(uu.petInfo.lastFedAt);
          for (const uu of Xu.e.hungerLevelIcons[ju]) ku.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          ku.push({
            str: " "
          }), ku.push({
            str: Xu.e.hungerLevelTranslations[ju],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (uu.tameInfo && null !== (vu = uu.tameInfo) && void 0 !== vu && vu.supportsFriendship) {
          var ru, Qu;
          let Eu = null !== (ru = uu.tameInfo.likedFoods) && void 0 !== ru ? ru : [];
          ku.push({
            str: "\n"
          }), ku.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xu.e.feedTextColours[Xu.e.MobFoodType.Superliked]
            }
          }), ku.push({
            str: " "
          }), null !== (Qu = uu.petInfo) && void 0 !== Qu && Qu.superlikedFoodKnown ? (ku.push({
            icon: uu.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Eu = Eu.filter((Eu => Eu !== uu.petInfo.superlikedFood))) : ku.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), ku.push({
            str: "\n"
          }), ku.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xu.e.feedTextColours[Xu.e.MobFoodType.Liked]
            }
          }), ku.push({
            str: " "
          });
          for (const uu of Eu) ku.push({
            icon: uu,
            style: {
              fontSize: "1.5em"
            }
          });
          ku.push({
            str: "\n"
          }), ku.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xu.e.feedTextColours[Xu.e.MobFoodType.Neutral]
            }
          }), ku.push({
            str: " "
          });
          for (const ju of null !== (iu = uu.tameInfo.neutralFoods) && void 0 !== iu ? iu : []) {
            var iu;
            ku.push({
              icon: ju,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          ku.push({
            str: "\n"
          }), ku.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Xu.e.feedTextColours[Xu.e.MobFoodType.Disliked]
            }
          }), ku.push({
            str: " "
          });
          for (const ju of null !== (Wu = uu.tameInfo.dislikedFoods) && void 0 !== Wu ? Wu : []) {
            var Wu;
            ku.push({
              icon: ju,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        ku.length > 0 ? (ku.shift(), ku.unshift(...(0, Zu.qb)(ou))) : ku = (0, Zu.qb)(ou)
      }
      return {
        name: au,
        desc: ku,
        fontStyle: null !== (pu = wu.customAttributes) && void 0 !== pu && pu.author ? "italic" : "normal"
      }
    }

    function Du(uu, Eu, ju, su) {
      const Uu = qu(uu, ju),
        Zu = qu(uu, su);
      if (!Uu) return !1;
      const Xu = Eu[Uu.name].armourReduction,
        lu = Eu[Zu.name].armourReduction;
      if (lu === Xu) {
        var fu, Cu, bu, cu;
        const uu = null !== (fu = null === (Cu = Uu.attributes.customAttributes) || void 0 === Cu ? void 0 : Cu.enchantmentTier) && void 0 !== fu ? fu : "Tier 0",
          Eu = null !== (bu = null === (cu = Zu.attributes.customAttributes) || void 0 === cu ? void 0 : cu.enchantmentTier) && void 0 !== bu ? bu : "Tier 0";
        return parseInt(uu.replace("Tier ", "")) >= parseInt(Eu.replace("Tier ", ""))
      }
      return Xu > lu
    }

    function gu(uu) {
      let Eu;
      if ("number" === typeof uu) {
        const ju = document.querySelector(`[data-inven-idx="${uu}"]`);
        if (!ju) return null;
        Eu = ju.getBoundingClientRect()
      } else Eu = uu.getBoundingClientRect();
      return {
        x: Eu.left + Eu.width / 2,
        y: Eu.top + Eu.height / 2
      }
    }
  },
  9118: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Du,
      h: () => eu
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(2610),
      Xu = ju(3601);
    const lu = 6,
      qu = 4;

    function fu(uu) {
      let {
        slotsLeft: Eu,
        slotsRight: ju,
        width: su,
        height: Uu,
        zoneRight: Zu,
        rowTop: Xu,
        besideBottom: fu,
        obstacles: Cu
      } = uu;
      const bu = Math.max(0, Math.floor(ju - Eu - su)),
        cu = null === Zu ? 0 : Math.min(bu, Math.max(0, Math.ceil(Zu + lu - Eu))),
        Nu = Eu + cu - lu,
        Ou = Eu + cu + su + lu,
        Yu = Cu.filter((uu => uu.left < Ou && uu.right > Nu));
      let hu = fu;
      for (let lu = 0; lu <= Yu.length; lu++) {
        const uu = Yu.filter((uu => uu.top < hu + qu && uu.bottom > hu - Uu - qu));
        if (0 === uu.length) break;
        hu = Math.min(...uu.map((uu => uu.top))) - qu
      }
      return {
        shift: cu,
        rise: hu === fu ? null : Math.ceil(Xu - hu)
      }
    }

    function Cu(uu) {
      return Array.from(uu.children).filter((uu => !uu.classList.contains("HotBarRow")))
    }

    function bu(uu) {
      return function(uu) {
        const Eu = [],
          ju = (uu, su) => {
            const Uu = uu.getBoundingClientRect();
            if (Uu.width > 0 && Uu.height > 0) Eu.push(uu);
            else if (su < 2)
              for (const Eu of Array.from(uu.children)) ju(Eu, su + 1)
          };
        for (const su of uu) ju(su, 0);
        return Eu
      }(Cu(uu).flatMap((uu => uu.classList.contains("AuraBarWrapper") ? [] : uu.classList.contains("BottomScreenStatBarList") ? Array.from(uu.children) : [uu])))
    }

    function cu(uu) {
      var Eu;
      const ju = uu.getBoundingClientRect();
      if (0 === ju.width) return null;
      const su = null === (Eu = uu.parentElement) || void 0 === Eu ? void 0 : Eu.getBoundingClientRect();
      return su && su.width > 0 ? Math.min(ju.right, su.left + su.width * Nu) : ju.right
    }
    const Nu = .35,
      Ou = new WeakMap,
      Yu = ".BottomScreenMessage, [role='status']",
      hu = new WeakMap;

    function Du(uu) {
      gu(uu) && gu(uu)
    }

    function gu(uu) {
      var Eu, ju, su, Uu, Zu, Xu;
      const lu = uu.documentElement.classList;
      if (!lu.contains("TouchHotbar") || lu.contains("TouchHotbarKeysAbove") || lu.contains("HudMove-inventory") || lu.contains("HudLocked-inventory") || null === (Eu = uu.defaultView) || void 0 === Eu || null === (ju = Eu.matchMedia) || void 0 === ju || !ju.call(Eu, Mu).matches) return !1;
      const Cu = uu.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
        Nu = null === Cu || void 0 === Cu ? void 0 : Cu.parentElement,
        Du = null === Cu || void 0 === Cu ? void 0 : Cu.closest(".BottomMiddleElements"),
        gu = null === Du || void 0 === Du ? void 0 : Du.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
      if (!Cu || !Nu || !Du || !gu || Du.classList.contains("TouchInventoryOpen")) return !1;
      const eu = Cu.getBoundingClientRect();
      if (0 === eu.width) return !1;
      const Gu = uu.querySelector(".JoystickZone"),
        pu = gu.getBoundingClientRect(),
        wu = Nu.getBoundingClientRect().top,
        Ju = null === (su = Du.querySelector(":scope > .AuraBarWrapper")) || void 0 === su ? void 0 : su.getBoundingClientRect(),
        du = bu(Du),
        au = {
          slotsLeft: pu.left,
          slotsRight: pu.right,
          width: eu.width,
          height: eu.height,
          zoneRight: Gu ? cu(Gu) : null,
          rowTop: wu,
          besideBottom: (Ju && Ju.height > 0 ? Ju.top : wu) - qu,
          obstacles: du.map((uu => uu.getBoundingClientRect()))
        },
        Pu = fu({
          ...au,
          obstacles: du.filter((uu => !uu.matches(Yu))).map((uu => uu.getBoundingClientRect()))
        }),
        ou = uu.defaultView,
        ku = `${null===ou||void 0===ou?void 0:ou.innerWidth}x${null===ou||void 0===ou?void 0:ou.innerHeight}:${Pu.shift}:${Math.round(eu.width)}:${Math.round(wu)}`,
        mu = hu.get(Du),
        vu = (null === mu || void 0 === mu ? void 0 : mu.at) === ku ? (Ku = mu.rise, Vu = Pu.rise, null === Ku ? Vu : null === Vu ? Ku : Math.max(Ku, Vu)) : Pu.rise;
      var Ku, Vu;
      const ru = fu({
          ...au,
          besideBottom: null === vu ? au.besideBottom : wu - vu
        }),
        Qu = {
          shift: Pu.shift,
          rise: null !== (Uu = ru.rise) && void 0 !== Uu ? Uu : vu
        },
        iu = Ou.get(Du);
      return (null !== (Zu = null === iu || void 0 === iu ? void 0 : iu.shift) && void 0 !== Zu ? Zu : 0) === Qu.shift && hu.set(Du, {
        at: ku,
        rise: vu
      }), (null === iu || void 0 === iu ? void 0 : iu.shift) !== Qu.shift && Du.style.setProperty("--touch-shop-above-shift", `${Qu.shift}px`), (null === iu || void 0 === iu ? void 0 : iu.rise) !== Qu.rise && (Du.classList.toggle("ShopAboveUp", null !== Qu.rise), null === Qu.rise ? Du.style.removeProperty("--touch-shop-above-rise") : Du.style.setProperty("--touch-shop-above-rise", `${Qu.rise}px`)), Ou.set(Du, Qu), (null !== (Xu = null === iu || void 0 === iu ? void 0 : iu.shift) && void 0 !== Xu ? Xu : 0) !== Qu.shift
    }
    const Mu = "(orientation: landscape) and (max-height: 500px)";

    function eu(uu, Eu, ju) {
      (0, su.useLayoutEffect)((() => {
        var Eu;
        const su = null === (Eu = uu.current) || void 0 === Eu ? void 0 : Eu.closest(".BottomMiddleElements");
        if (!su || ju) return;
        const lu = new ResizeObserver((() => {
            Nu(!1)
          })),
          qu = () => {
            lu.disconnect();
            const uu = document.querySelector(".JoystickZone");
            for (const Eu of [uu, su, su.querySelector(".HotBarGameItemsContainer"), ...bu(su)]) Eu && lu.observe(Eu)
          };
        let fu = null,
          cu = !1;
        const Nu = uu => {
            cu ||= uu, fu ??= requestAnimationFrame((() => {
              fu = null, cu && (cu = !1, qu()), Du(document)
            }))
          },
          Ou = new MutationObserver((() => {
            Nu(!0)
          }));
        Ou.observe(su, {
          childList: !0
        });
        for (const uu of Cu(su)) Ou.observe(uu, {
          childList: !0,
          subtree: !0
        });
        Du(document), qu();
        const Yu = () => {
            Nu(!0)
          },
          hu = [(0, Uu.l)(Zu.d, Yu), (0, Uu.l)(Xu.b, Yu)];
        return () => {
          null !== fu && cancelAnimationFrame(fu), lu.disconnect(), Ou.disconnect();
          for (const uu of hu) uu()
        }
      }), [uu, Eu, ju])
    }
  },
  34457: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => Yu
    });
    var su = ju(1506),
      Uu = ju(58),
      Zu = ju(1362),
      Xu = ju(4719),
      lu = ju(2471),
      qu = ju(1244),
      fu = ju(91),
      Cu = ju(2027),
      bu = ju(1393),
      cu = ju(1154);

    function Nu(uu) {
      let {
        show: Eu,
        onClose: ju
      } = uu;
      const {
        requestedGameNameWithVariation: su,
        lobbyName: Uu,
        shownLobbyName: Zu
      } = (0, Cu.f)("connectedGame"), qu = (0, lu.e)(su, Uu, !1);
      return fu.featureFlags.canUseInviteLinks && (0, cu.jsx)(Xu.c, {
        show: Eu,
        close: ju,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, cu.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, cu.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, cu.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, cu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qu ? (0, cu.jsx)(bu.b, {}) : qu, (0, cu.jsx)("br", {}), "Lobby Name: ", Zu, (0, cu.jsx)("br", {}), (0, cu.jsx)("br", {}), (0, cu.jsx)("br", {}), (0, cu.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, cu.jsx)(Ou, {})]
        })
      })
    }

    function Ou() {
      var uu;
      const {
        t: Eu
      } = (0, qu.A)(), ju = null !== (uu = Yu(fu.featureFlags.canUseInviteLinks)) && void 0 !== uu ? uu : "Loading Link...", [Zu, Xu] = (0, Uu.useState)(0), [lu, Cu] = (0, Uu.useReducer)((uu => uu + 1), 0);
      return (0, Uu.useEffect)((() => {
        const uu = setTimeout((() => {
          Cu()
        }), 1100);
        return () => {
          clearTimeout(uu)
        }
      }), [Zu]), fu.featureFlags.canUseInviteLinks && (0, cu.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, cu.jsx)("div", {
          className: "InviteLinkInner",
          children: ju
        }), (0, cu.jsx)(su.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ju).catch((uu => {
              console.error("Failed to copy invite link:", uu)
            })), Xu(Date.now())
          },
          disabled: Date.now() - Zu < 1e3,
          children: Date.now() - Zu < 1e3 ? Eu("general:copied") : Eu("general:copy")
        })]
      })
    }

    function Yu(uu) {
      const [Eu, ju] = (0, Uu.useState)(null);
      return (0, Uu.useEffect)((() => {
        if (!uu) return;
        let Eu = !0;
        return (0, Zu.u)().then((uu => {
          Eu && ju(uu)
        })).catch((uu => {
          console.error("Failed to get invite link:", uu)
        })), () => {
          Eu = !1
        }
      }), [uu]), Eu
    }
  },
  34538: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(2027),
      lu = ju(1154);

    function qu(uu) {
      const Eu = Math.floor(uu / 3600),
        ju = Math.floor(uu % 3600 / 60),
        su = Math.floor(uu % 60),
        Uu = `${ju.toString().padStart(2,"0")}:${su.toString().padStart(2,"0")}`;
      return Eu > 0 ? `${Eu}:${Uu}` : Uu
    }
    const fu = (0, su.memo)((function(uu) {
      let {
        className: Eu
      } = uu;
      const {
        recording: ju,
        seconds: su
      } = (0, Xu.f)("replayRecorder");
      return ju ? (0, lu.jsxs)("div", {
        className: Zu()("RecordingIndicator", Eu),
        children: [(0, lu.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, lu.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, lu.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qu(su)
        })]
      }) : null
    }))
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  6777: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(58),
      Uu = ju(31);

    function Zu(uu, Eu) {
      var ju;
      const [Zu, Xu] = (0, su.useState)(null !== (ju = Uu.k.getItem(uu)) && void 0 !== ju ? ju : Eu);
      return [Zu, Eu => {
        Uu.k.setItem(uu, Eu), Xu(Eu)
      }]
    }
  },
  9103: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => qu,
      D: () => cu,
      G: () => fu,
      J: () => Ou,
      M: () => Zu,
      e: () => Uu,
      g: () => lu,
      k: () => su,
      m: () => Yu,
      q: () => Nu,
      r: () => Cu,
      u: () => Xu,
      v: () => hu,
      y: () => bu
    });
    const su = uu => ({
      left: uu.left,
      top: uu.top,
      right: uu.right,
      bottom: uu.bottom
    });

    function Uu(uu) {
      return {
        x: (uu.left + uu.right) / 2,
        y: (uu.top + uu.bottom) / 2
      }
    }

    function Zu(uu) {
      return 0 === uu.length ? null : uu.reduce(((uu, Eu) => ({
        left: Math.min(uu.left, Eu.left),
        top: Math.min(uu.top, Eu.top),
        right: Math.max(uu.right, Eu.right),
        bottom: Math.max(uu.bottom, Eu.bottom)
      })))
    }

    function Xu(uu, Eu) {
      const ju = Math.max(0, (Eu - (uu.right - uu.left)) / 2),
        su = Math.max(0, (Eu - (uu.bottom - uu.top)) / 2);
      return {
        left: uu.left - ju,
        top: uu.top - su,
        right: uu.right + ju,
        bottom: uu.bottom + su
      }
    }

    function lu(uu, Eu) {
      return Eu.x >= uu.left && Eu.x <= uu.right && Eu.y >= uu.top && Eu.y <= uu.bottom
    }

    function qu(uu, Eu, ju) {
      let su = null,
        Zu = 1 / 0;
      for (const {
          id: Uu,
          box: Xu
        }
        of Eu) {
        const Eu = (Xu.right - Xu.left) * (Xu.bottom - Xu.top);
        lu(Xu, uu) && Eu < Zu && (Zu = Eu, su = Uu)
      }
      if (null !== su) return su;
      let qu = 1 / 0;
      for (const {
          id: fu,
          box: Cu
        }
        of Eu) {
        if (!lu(Xu(Cu, ju), uu)) continue;
        const Eu = Uu(Cu),
          Zu = Math.hypot(uu.x - Eu.x, uu.y - Eu.y);
        Zu < qu && (qu = Zu, su = fu)
      }
      return su
    }

    function fu(uu, Eu, ju) {
      return {
        left: ju.left,
        top: ju.top,
        right: uu - ju.right,
        bottom: Eu - ju.bottom
      }
    }

    function Cu(uu, Eu, ju, su) {
      const Uu = (uu, Eu, ju) => Math.max(Math.min(Eu, 0), Math.min(Math.max(ju, 0), uu));
      return {
        x: Uu(Eu, su.left - uu.left, su.right - uu.right),
        y: Uu(ju, su.top - uu.top, su.bottom - uu.bottom)
      }
    }

    function bu(uu, Eu, ju, su, Uu) {
      const Zu = uu.dx * su + Eu,
        Xu = uu.dy * Uu + ju,
        lu = uu => Math.max(-1, Math.min(1, uu));
      return {
        dx: lu(Zu / su),
        dy: lu(Xu / Uu)
      }
    }

    function cu(uu, Eu, ju, su) {
      return Eu <= 0 || ju <= 0 ? 1 : Math.max(.05, Math.min(1, uu / Eu, su / ju))
    }

    function Nu(uu, Eu, ju) {
      return Math.min(uu.right, Eu.right) - Math.max(uu.left, Eu.left) > ju && Math.min(uu.bottom, Eu.bottom) - Math.max(uu.top, Eu.top) > ju
    }

    function Ou(uu, Eu) {
      const ju = (uu, Eu, ju, su) => Eu - uu > su - ju ? ju - uu > Eu - su ? su - Eu : ju - uu : uu < ju ? ju - uu : Eu > su ? su - Eu : 0;
      return {
        x: ju(uu.left, uu.right, Eu.left, Eu.right),
        y: ju(uu.top, uu.bottom, Eu.top, Eu.bottom)
      }
    }

    function Yu(uu, Eu, ju) {
      return Nu(uu, {
        left: 0,
        top: 0,
        right: Eu,
        bottom: ju
      }, 0)
    }

    function hu(uu, Eu) {
      let {
        avoid: ju = null,
        bounds: su = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Uu = 0, Zu = 1 / 0;
      return uu.forEach(((uu, Xu) => {
        const lu = Eu.filter((Eu => Nu(uu, Eu, 0))).length,
          qu = null !== su && (uu.left < su.left || uu.top < su.top || uu.right > su.right || uu.bottom > su.bottom),
          fu = lu + (ju && Nu(uu, ju, 0) ? 1e3 : 0) + (qu ? 1e6 : 0);
        fu < Zu && (Uu = Xu, Zu = fu)
      })), Uu
    }
  },
  9110: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu,
      f: () => Zu,
      j: () => Uu,
      l: () => Xu,
      o: () => bu,
      q: () => Cu,
      r: () => fu,
      t: () => qu
    });
    var su = ju(2581);
    const Uu = ["J", "C", "A", "P", "U", "X", "G"],
      Zu = {
        J: "jump",
        C: "crouch",
        A: "attack",
        P: "attack",
        U: "use",
        X: "extra",
        G: "game"
      };

    function Xu(uu) {
      return uu ? ["X"] : ["P", "X"]
    }
    const lu = Object.freeze({
      faces: null,
      names: Object.freeze({}),
      shop: !0,
      bag: !0,
      sprint: !0,
      items: null,
      rowIcons: su.D,
      pinnedIcons: Object.freeze({
        rightOfCamera: null,
        leftEnd: null
      })
    });

    function qu(uu, Eu, ju) {
      const su = uu.querySelector(".InGameUi .TouchComponentsButtons");
      if (!su) return lu;
      const Zu = {},
        Xu = {};
      for (const lu of Uu) {
        const uu = su.querySelector(`.TouchSlot${lu} > .TouchKey`);
        if (uu) {
          var qu, fu;
          Zu[lu] = uu.cloneNode(!0);
          const Eu = (null !== (qu = null === (fu = uu.querySelector(".TouchKeyLabel")) || void 0 === fu ? void 0 : fu.textContent) && void 0 !== qu ? qu : "").split(/\s+/).filter((uu => !/[\d\xd7]/.test(uu))).join(" ");
          Eu && (Xu[lu] = Eu)
        }
      }
      const Cu = Eu => {
          const ju = uu.querySelector(`.InGameUi ${Eu}`);
          return null !== ju && !ju.classList.contains("Hidden")
        },
        bu = [...uu.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((uu => uu.cloneNode(!0)));
      return {
        faces: Object.keys(Zu).length > 0 ? Zu : null,
        names: Xu,
        shop: Cu(".TouchInventoryKey.ShopKey"),
        bag: Cu(".TouchInventoryKey.BagKey"),
        sprint: Cu(".TouchSprintHit"),
        items: bu.length > 0 ? bu : null,
        rowIcons: Eu,
        pinnedIcons: ju
      }
    }

    function fu(uu, Eu) {
      const ju = {};
      for (const su of [...Xu(Eu), "G"]) {
        const Eu = uu.names[su];
        Eu && (ju[Zu[su]] = Eu)
      }
      return ju
    }

    function Cu(uu, Eu) {
      const {
        faces: ju
      } = uu;
      if (null === ju) return [];
      const su = new Set(Object.keys(ju).map((uu => Zu[uu])));
      return Xu(Eu).filter((uu => !su.has(Zu[uu])))
    }

    function bu(uu, Eu) {
      uu.replaceChildren(...[...Eu.childNodes].map((uu => uu.cloneNode(!0))))
    }
  },
  34469: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      e: () => su
    });
    const su = "image/jpeg",
      Uu = "jpg"
  },
  34476: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      c: () => fu,
      f: () => Cu
    });
    var su = ju(1735),
      Uu = ju(3375),
      Zu = ju(91),
      Xu = ju(1802),
      lu = ju(34469);

    function qu() {
      return !(0, Zu.isMobileApp)() || su.d.supports("photos")
    }
    async function fu(uu) {
      var Eu, ju;
      if ((0, Zu.isMobileApp)()) {
        const {
          saved: Eu
        } = await su.d.request("photos.save", {
          data: await (0, Uu.h)(uu),
          mimeType: lu.e
        });
        return Eu ? "saved" : "denied"
      }
      return (0, Zu.isIOS)() && null !== (Eu = (ju = navigator).canShare) && void 0 !== Eu && Eu.call(ju, {
        files: [uu]
      }) ? Cu(uu) : ((0, Xu.d)(uu, uu.name), "saved")
    }
    async function Cu(uu) {
      try {
        return await navigator.share({
          files: [uu]
        }), "shared"
      } catch (Eu) {
        if (Eu instanceof DOMException && "AbortError" === Eu.name) return "Lj";
        if (Eu instanceof DOMException && "NotAllowedError" === Eu.name) return "needsTap";
        throw Eu
      }
    }
  },
  34464: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu,
      g: () => Cu,
      k: () => bu
    });
    var su = ju(22),
      Uu = ju(34444),
      Zu = ju(1687),
      Xu = ju(34469);
    const lu = 8294400,
      qu = .92;

    function fu() {
      (0, Zu.h)(), su.d.set({
        screenshotMode: !0
      })
    }

    function Cu() {
      su.d.set({
        screenshotMode: !1
      })
    }
    async function bu() {
      const {
        width: uu,
        height: Eu,
        scale: ju
      } = function(uu, Eu, ju) {
        const su = Math.max(1, uu),
          Uu = Math.max(1, Eu),
          Zu = Math.min(Math.max(1, ju), Math.sqrt(lu / (su * Uu)));
        return {
          width: Math.round(su * Zu),
          height: Math.round(Uu * Zu),
          scale: Zu
        }
      }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
        blob: su
      } = await Uu.devTools.capturePhoto(uu, Eu, {
        scale: ju,
        type: Xu.e,
        quality: qu
      });
      return new File([su], function(uu) {
        const Eu = uu => String(uu).padStart(2, "0"),
          ju = `${uu.getFullYear()}${Eu(uu.getMonth()+1)}${Eu(uu.getDate())}`,
          su = `${Eu(uu.getHours())}${Eu(uu.getMinutes())}${Eu(uu.getSeconds())}`;
        return `bloxd-${ju}-${su}.${Xu.d}`
      }(new Date), {
        type: Xu.e
      })
    }
  },
  8891: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      h: () => su
    });
    const su = "controllerOpenKeyboard",
      Uu = "controllerKeyboardVisible"
  },
  34448: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = new Set(["chunkBorders"])
  },
  34444: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ALL_DEV_TOOLS: () => Xu,
      coreDevTools: () => fu,
      devTools: () => qu
    });
    var su = ju(680),
      Uu = ju(1353),
      Zu = ju(34448);
    const Xu = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function lu() {
      const {
        noaDevTools: uu
      } = await ju.e(242).then((() => ju(41290)));
      return uu
    }
    const qu = new class {
        constructor() {
          this.loadHost = lu, this.tools = Xu
        }
        setHost(uu) {
          this.tools = null === uu ? Xu : uu.tools, this.loadHost = null === uu ? lu : async () => uu
        }
        supports(uu) {
          return this.tools.has(uu)
        }
        async downloadScene(uu, Eu) {
          const ju = await this.loadHost();
          await ju.downloadScene(uu, Eu)
        }
        async setAmbientLightIntensity(uu) {
          const Eu = await this.loadHost();
          await Eu.setAmbientLightIntensity(uu)
        }
        async capturePhoto(uu, Eu, ju) {
          return (await this.loadHost()).capturePhoto(uu, Eu, ju)
        }
      },
      fu = {
        tools: Zu.e,
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
    su.y && qu.setHost(fu), (0, Uu.w)((() => {
      qu.setHost(fu)
    }))
  },
  34588: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Uu,
      i: () => Cu
    });
    var su = ju(1614);

    function Uu(uu) {
      var Eu;
      return {
        ...Xu.store,
        yaw: Xu.store.yaw + (null !== (Eu = su.d[uu].previewYaw) && void 0 !== Eu ? Eu : 0)
      }
    }
    const Zu = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xu = {
        player: Zu,
        store: {
          ...Zu,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function lu(uu, Eu) {
      uu instanceof Promise ? uu.then(Eu).catch((uu => {
        console.error("Couldn't open the preview", uu)
      })) : Eu(uu)
    }
    class qu {
      constructor(uu) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height), null !== this.view && uu.show(this.view))
        }))
      }
      show(uu) {
        var Eu;
        this.view = uu, null === (Eu = this.opened) || void 0 === Eu || Eu.show(uu)
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    class fu {
      constructor(uu) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(uu).then((uu => uu.ready)), lu(uu, (uu => {
          this.closed ? uu.close() : (this.opened = uu, null !== this.size && uu.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.isReady()) && void 0 !== uu && uu
      }
      setCosmetic(uu, Eu) {
        var ju;
        null === (ju = this.opened) || void 0 === ju || ju.setCosmetic(uu, Eu)
      }
      playEmote(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.playEmote(uu)
      }
      setOrbit(uu) {
        var Eu;
        null === (Eu = this.opened) || void 0 === Eu || Eu.setOrbit(uu)
      }
      resetCamera() {
        var uu;
        null === (uu = this.opened) || void 0 === uu || uu.resetCamera()
      }
      async untilDrawn(uu) {
        var Eu;
        await this.ready, await (null === (Eu = this.opened) || void 0 === Eu ? void 0 : Eu.untilDrawn(uu))
      }
      resize(uu, Eu) {
        var ju;
        this.size = {
          width: uu,
          height: Eu
        }, null === (ju = this.opened) || void 0 === ju || ju.resize(uu, Eu)
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.opened) || void 0 === uu || uu.close(), this.opened = null
      }
    }
    const Cu = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(uu) {
        this.host = uu
      }
      setDefaultHost(uu) {
        this.makeDefault = uu
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(uu) {
        return new qu(this.current().openMob(uu))
      }
      openPet(uu) {
        return new qu(this.current().openPet(uu))
      }
      openMobLineup(uu) {
        return new qu(this.current().openMobLineup(uu))
      }
      openCharacter(uu, Eu) {
        return new fu(this.current().openCharacter(uu, Eu))
      }
    }
  },
  34583: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.b,
      g: () => su.e,
      k: () => su.i
    });
    var su = ju(34588);
    class Uu {
      constructor(uu) {
        this.load = uu, this.loaded = null, this.loading = null
      }
      run(uu) {
        return null !== this.loaded ? uu(this.loaded) : (this.loading ??= this.load().then((uu => (this.loaded = uu, uu)), (uu => {
          throw this.loading = null, uu
        })), this.loading.then(uu))
      }
    }
    class Zu {
      constructor() {
        this.mobScene = new Uu((() => Promise.all([ju.e(73), ju.e(237), ju.e(236), ju.e(258), ju.e(98), ju.e(259), ju.e(76), ju.e(75), ju.e(256), ju.e(74), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(279), ju.e(233), ju.e(249), ju.e(261), ju.e(264), ju.e(78), ju.e(188), ju.e(227), ju.e(97), ju.e(239), ju.e(230), ju.e(246), ju.e(121), ju.e(247), ju.e(77), ju.e(251)]).then((() => ju(41307))))), this.characterScene = new Uu((() => Promise.all([ju.e(73), ju.e(237), ju.e(236), ju.e(258), ju.e(98), ju.e(259), ju.e(76), ju.e(75), ju.e(256), ju.e(74), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(279), ju.e(233), ju.e(249), ju.e(261), ju.e(264), ju.e(78), ju.e(188), ju.e(227), ju.e(97), ju.e(239), ju.e(230), ju.e(246), ju.e(121), ju.e(247), ju.e(77), ju.e(250)]).then((() => ju(41402)))))
      }
      openMob(uu) {
        return this.mobScene.run((Eu => Eu.openMobPreview(uu)))
      }
      openPet(uu) {
        return this.mobScene.run((Eu => Eu.openPetPreview(uu)))
      }
      openMobLineup(uu) {
        return this.mobScene.run((Eu => Eu.openMobLineupPreview(uu)))
      }
      openCharacter(uu, Eu) {
        return this.characterScene.run((ju => ju.openCharacterPreview(uu, Eu)))
      }
    }
    su.i.setDefaultHost((() => new Zu))
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  },
  9091: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => qu
    });
    var su = ju(22),
      Uu = ju(1369),
      Zu = ju(91);
    const Xu = {
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

    function lu() {
      return (0, Zu.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qu = new class {
      constructor(uu) {
        this.deps = uu, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(uu, Eu) {
        var ju;
        if (!this.deps.enabled()) return;
        const su = Xu[uu],
          Uu = null !== Eu && void 0 !== Eu ? Eu : su.pattern;
        if (null === Uu) return void console.warn("No vibration pattern for", uu);
        const Zu = this.deps.now();
        Zu - this.lastAnyAt < 40 && su.priority < this.playingPriority || Zu - (null !== (ju = this.lastAt.get(uu)) && void 0 !== ju ? ju : -1 / 0) < su.minGapMs || Zu < this.playingUntil && su.priority < this.playingPriority || (this.lastAt.set(uu, Zu), this.lastAnyAt = Zu, this.playingUntil = Zu + Uu.reduce(((uu, Eu) => uu + Eu), 0), this.playingPriority = su.priority, this.deps.vibrate(Uu))
      }
    }({
      vibrate: uu => {
        navigator.vibrate([...uu])
      },
      now: () => performance.now(),
      enabled: () => lu() && su.d.get("isTouchScreen") && su.d.get("clientEscMenuOptions").vibration && !(0, Uu.c)()
    })
  },
  34481: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu,
      h: () => bu,
      i: () => Cu
    });
    var su = ju(22),
      Uu = ju(1735),
      Zu = ju(31),
      Xu = ju(3857);
    const lu = 2592e5,
      qu = "notificationOptInLastPromptedAt";
    async function fu() {
      var uu;
      const Eu = null !== (uu = Zu.k.getItem(qu)) && void 0 !== uu ? uu : 0;
      return Date.now() - Eu < lu ? null : bu()
    }

    function Cu() {
      Zu.k.setItem(qu, Date.now())
    }
    async function bu() {
      return await Uu.d.ready, Uu.d.supports("notifications") ? su.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Uu.d.request("notifications.requestPermission", {}).then((uu => {
          let {
            canAsk: Eu
          } = uu;
          su.d.set({
            mobilePushNotificationsCanAsk: Eu
          })
        }), (uu => {
          console.error("The app couldn't ask for push notifications:", uu)
        }))
      }: null: await Xu.d.canAsk() ? () => Xu.d.requestPermission() : null
    }
  },
  8995: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return !uu.hidden && (Eu || !uu.isRewardedAd)
    }

    function Uu(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Zu(uu, Eu) {
      var ju;
      if ("dropdown" === (null === (ju = uu.userInput) || void 0 === ju ? void 0 : ju.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const ju of uu.userInput.dropdownOptions)
          if (Uu(ju) === Eu) return "object" === typeof ju ? ju.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Eu)
      }
      return uu.cost
    }

    function Xu(uu, Eu, ju) {
      var su;
      const Uu = null !== (su = ju.excludedPlayers) && void 0 !== su ? su : [Eu];
      return uu.filter((uu => !Uu.includes(uu)))
    }
    ju.d(Eu, {
      d: () => Zu,
      g: () => Uu,
      j: () => Xu,
      l: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);