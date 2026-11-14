export const id = 126;
export const ids = [125, 126];
export const modules = {
  8190: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(302),
      Ic = nc(8196);

    function rB(cB, Bc, nc) {
      const rB = Object.entries(Bc).sort(((cB, Bc) => Bc[1] - cB[1])),
        uc = (0, Vc.fb)(cB);
      uc.push(cB ? "\n\n" : "\n");
      for (const [Ic, mB] of rB) {
        var sc, Mc, Pc;
        const cB = null !== (sc = null === nc || void 0 === nc || null === (Mc = nc[Ic]) || void 0 === Mc ? void 0 : Mc.icon) && void 0 !== sc ? sc : `${Ic} Enchantment`;
        uc.push({
          icon: cB,
          style: {
            fontSize: "1.5rem"
          }
        }), uc.push({
          str: `${Ic} ${null!==(Pc=(0,Vc.I)(mB))&&void 0!==Pc?Pc:mB}\n`
        })
      }
      uc.push({
        str: "\n"
      });
      for (const [Vc, mB] of rB) {
        var qB, Oc, Tc, fc;
        const cB = null !== (qB = null === nc || void 0 === nc || null === (Oc = nc[Vc]) || void 0 === Oc ? void 0 : Oc.icon) && void 0 !== qB ? qB : `${Vc} Enchantment`,
          Bc = null !== (Tc = null === nc || void 0 === nc || null === (fc = nc[Vc]) || void 0 === fc ? void 0 : fc.description) && void 0 !== Tc ? Tc : (0, Ic.k)(Vc);
        uc.push({
          icon: cB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), uc.push({
          str: Bc,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), uc.push({
          str: "\n"
        })
      }
      return uc
    }
  },
  8201: (cB, Bc, nc) => {
    nc.d(Bc, {
      B: () => Oc,
      e: () => Pc,
      i: () => yB,
      j: () => tB,
      n: () => Mc,
      r: () => Sc,
      t: () => qB,
      u: () => Tc,
      x: () => ec
    });
    var Vc = nc(244),
      Ic = nc(569),
      rB = nc(302),
      uc = nc(3431),
      sc = nc(8190);

    function Mc(cB, Bc) {
      var nc;
      let {
        player: Vc,
        chestOrCreative: Ic
      } = cB;
      var rB;
      return Bc < Vc.length ? null !== (rB = Vc[Bc]) && void 0 !== rB ? rB : null : null !== (nc = Ic[Bc - Vc.length]) && void 0 !== nc ? nc : null
    }

    function Pc(cB) {
      var Bc;
      return null !== (Bc = cB.amount) && void 0 !== Bc ? Bc : 0
    }

    function qB(cB) {
      return 0 === cB.button || void 0 === cB.button
    }

    function Oc(cB) {
      return !!cB.shiftKey
    }

    function Tc(cB) {
      return "touches" in cB || "touch" === cB.pointerType || "pen" === cB.pointerType
    }
    const fc = new Set,
      mB = 50;

    function ec(cB, Bc) {
      var nc;
      const Vc = null === (nc = cB[Bc]) || void 0 === nc ? void 0 : nc.displayName;
      return (0, Ic.E)(Vc) ? "string" !== typeof Bc ? "" : (!fc.has(Bc) && fc.size < mB && (fc.add(Bc), console.warn(`No item called "${Bc}", so its hover shows the name as given`)), Bc) : Vc
    }

    function tB(cB, Bc, nc) {
      var Mc, Pc, qB, Oc, Tc, fc, mB, tB, Sc, yB, zB, pc, hc, aB;
      const lc = cB.attributes,
        Yc = null !== (Mc = null === (Pc = Bc[cB.name]) || void 0 === Pc ? void 0 : Pc.rootName) && void 0 !== Mc ? Mc : cB.name,
        Lc = null !== (qB = null !== (Oc = lc.customDisplayName) && void 0 !== Oc ? Oc : null === (Tc = Bc[cB.name]) || void 0 === Tc ? void 0 : Tc.displayName) && void 0 !== qB ? qB : ec(Bc, Yc);
      let gB = Lc;
      const Uc = null === (fc = lc.customAttributes) || void 0 === fc ? void 0 : fc.enchantmentTier;
      Uc && (gB = (0, rB.fb)(Lc, {
        colour: rB.db[Uc]
      }));
      const bB = null !== (mB = null !== (tB = null !== (Sc = function(cB, Bc) {
        var nc;
        if (void 0 === cB || null !== (nc = Bc.customAttributes) && void 0 !== nc && nc.author) return cB;
        const Ic = (0, Vc.Zb)(cB);
        return Ic.every((cB => "string" === typeof cB)) ? cB : Ic.map((cB => "string" === typeof cB ? cB : {
          icon: cB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(lc.customDescription, lc)) && void 0 !== Sc ? Sc : null === (yB = Bc[cB.name]) || void 0 === yB ? void 0 : yB.description) && void 0 !== tB ? tB : null === (zB = Bc[Yc]) || void 0 === zB ? void 0 : zB.description) && void 0 !== mB ? mB : "";
      let Zc = bB;
      if (null !== (pc = lc.customAttributes) && void 0 !== pc && pc.enchantments) Zc = (0, sc.d)(bB, lc.customAttributes.enchantments, lc.customAttributes.enchantmentData);
      else if (nc[Yc]) Zc = (0, rB.fb)(bB), Zc.push({
        str: "\n"
      }), Zc.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (hc = lc.customAttributes) && void 0 !== hc && hc.mobSettings) {
        var Qc, Cc;
        const cB = lc.customAttributes.mobSettings;
        var vB, Dc;
        if (Zc = [], (0, Ic.E)(lc.customAttributes.health) || (Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Zc.push({
            str: " "
          }), Zc.push({
            str: lc.customAttributes.health.toString()
          }), (0, Ic.E)(cB.maxHealth) || (Zc.push({
            str: "/"
          }), Zc.push({
            str: cB.maxHealth.toString()
          }))), !(0, Ic.E)(cB.attackDamage) && cB.attackDamage > 0 && (Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Zc.push({
            str: " "
          }), Zc.push({
            str: cB.attackDamage.toString()
          })), !(0, Ic.E)(cB.secondaryAttackDamage) && cB.secondaryAttackDamage > 0 && (Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Zc.push({
            str: " "
          }), Zc.push({
            str: cB.secondaryAttackDamage.toString()
          })), (0, Ic.E)(cB.baseRunningSpeed) || (Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Zc.push({
            str: " "
          }), Zc.push({
            str: cB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === cB.metaInfo) Zc.push({
          str: "\n"
        }), Zc.push({
          str: {
            translationKey: "general:has"
          }
        }), Zc.push({
          str: " "
        }), Zc.push({
          icon: null !== (vB = null === (Dc = cB.tameInfo) || void 0 === Dc ? void 0 : Dc.saddleItemName) && void 0 !== vB ? vB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Zc.push({
            str: "\n"
          }), Zc.push({
            str: "\n"
          }), cB.petInfo && null !== (Qc = cB.tameInfo) && void 0 !== Qc && Qc.supportsFriendship) {
          const Bc = uc.c.getIconsFromFriendshipPoints(cB.petInfo.friendshipPoints);
          for (const cB of Bc) Zc.push({
            icon: cB,
            style: {
              fontSize: "1.5em"
            }
          });
          Zc.push({
            str: "\n"
          });
          const nc = uc.c.getMobHungerLevel(cB.petInfo.lastFedAt);
          for (const cB of uc.c.hungerLevelIcons[nc]) Zc.push({
            icon: cB,
            style: {
              fontSize: "1.5em"
            }
          });
          Zc.push({
            str: " "
          }), Zc.push({
            str: uc.c.hungerLevelTranslations[nc],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (cB.tameInfo && null !== (Cc = cB.tameInfo) && void 0 !== Cc && Cc.supportsFriendship) {
          var Nc, Ec;
          let Bc = null !== (Nc = cB.tameInfo.likedFoods) && void 0 !== Nc ? Nc : [];
          Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: uc.c.feedTextColours[uc.c.MobFoodType.Superliked]
            }
          }), Zc.push({
            str: " "
          }), null !== (Ec = cB.petInfo) && void 0 !== Ec && Ec.superlikedFoodKnown ? (Zc.push({
            icon: cB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Bc = Bc.filter((Bc => Bc !== cB.petInfo.superlikedFood))) : Zc.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: uc.c.feedTextColours[uc.c.MobFoodType.Liked]
            }
          }), Zc.push({
            str: " "
          });
          for (const cB of Bc) Zc.push({
            icon: cB,
            style: {
              fontSize: "1.5em"
            }
          });
          Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: uc.c.feedTextColours[uc.c.MobFoodType.Neutral]
            }
          }), Zc.push({
            str: " "
          });
          for (const nc of null !== (oc = cB.tameInfo.neutralFoods) && void 0 !== oc ? oc : []) {
            var oc;
            Zc.push({
              icon: nc,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Zc.push({
            str: "\n"
          }), Zc.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: uc.c.feedTextColours[uc.c.MobFoodType.Disliked]
            }
          }), Zc.push({
            str: " "
          });
          for (const nc of null !== (Wc = cB.tameInfo.dislikedFoods) && void 0 !== Wc ? Wc : []) {
            var Wc;
            Zc.push({
              icon: nc,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Zc.length > 0 ? (Zc.shift(), Zc.unshift(...(0, rB.fb)(bB))) : Zc = (0, rB.fb)(bB)
      }
      return {
        name: gB,
        desc: Zc,
        fontStyle: null !== (aB = lc.customAttributes) && void 0 !== aB && aB.author ? "italic" : "normal"
      }
    }

    function Sc(cB, Bc, nc, Vc) {
      const Ic = Mc(cB, nc),
        rB = Mc(cB, Vc);
      if (!Ic) return !1;
      const uc = Bc[Ic.name].armourReduction,
        sc = Bc[rB.name].armourReduction;
      if (sc === uc) {
        var Pc, qB, Oc, Tc;
        const cB = null !== (Pc = null === (qB = Ic.attributes.customAttributes) || void 0 === qB ? void 0 : qB.enchantmentTier) && void 0 !== Pc ? Pc : "Tier 0",
          Bc = null !== (Oc = null === (Tc = rB.attributes.customAttributes) || void 0 === Tc ? void 0 : Tc.enchantmentTier) && void 0 !== Oc ? Oc : "Tier 0";
        return parseInt(cB.replace("Tier ", "")) >= parseInt(Bc.replace("Tier ", ""))
      }
      return uc > sc
    }

    function yB(cB) {
      let Bc;
      if ("number" === typeof cB) {
        const nc = document.querySelector(`[data-inven-idx="${cB}"]`);
        if (!nc) return null;
        Bc = nc.getBoundingClientRect()
      } else Bc = cB.getBoundingClientRect();
      return {
        x: Bc.left + Bc.width / 2,
        y: Bc.top + Bc.height / 2
      }
    }
  },
  8129: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => fc,
      c: () => mB
    });
    var Vc = nc(1255),
      Ic = nc(73),
      rB = nc(1164),
      uc = nc(3646),
      sc = nc(1894),
      Mc = nc(1051),
      Pc = nc(107),
      qB = nc(1609),
      Oc = nc(1188),
      Tc = nc(957);

    function fc(cB) {
      let {
        show: Bc,
        onClose: nc
      } = cB;
      const {
        requestedGameNameWithVariation: Vc,
        lobbyName: Ic,
        shownLobbyName: rB
      } = (0, qB.g)("connectedGame"), Mc = (0, sc.e)(Vc, Ic, !1);
      return Pc.featureFlags.canUseInviteLinks && (0, Tc.jsx)(uc.b, {
        show: Bc,
        close: nc,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Tc.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Tc.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Tc.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Tc.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Mc ? (0, Tc.jsx)(Oc.e, {}) : Mc, (0, Tc.jsx)("br", {}), "Lobby Name: ", rB, (0, Tc.jsx)("br", {}), (0, Tc.jsx)("br", {}), (0, Tc.jsx)("br", {}), (0, Tc.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Tc.jsx)(mB, {})]
        })
      })
    }

    function mB() {
      const {
        t: cB
      } = (0, Mc.x)(), [Bc, nc] = (0, Ic.useState)("Loading Link..."), [uc, sc] = (0, Ic.useState)(0), [qB, Oc] = (0, Ic.useReducer)((cB => cB + 1), 0);
      return (0, Ic.useEffect)((() => {
        let cB = !0;
        return (0, rB.B)().then((Bc => {
          cB && nc(Bc)
        })).catch((cB => {
          console.error("Failed to get invite link:", cB)
        })), () => {
          cB = !1
        }
      }), []), (0, Ic.useEffect)((() => {
        const cB = setTimeout((() => {
          Oc()
        }), 1100);
        return () => {
          clearTimeout(cB)
        }
      }), [uc]), Pc.featureFlags.canUseInviteLinks && (0, Tc.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Tc.jsx)("div", {
          className: "InviteLinkInner",
          children: Bc
        }), (0, Tc.jsx)(Vc.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Bc).catch((cB => {
              console.error("Failed to copy invite link:", cB)
            })), sc(Date.now())
          },
          disabled: Date.now() - uc < 1e3,
          children: Date.now() - uc < 1e3 ? cB("general:copied") : cB("general:copy")
        })]
      })
    }
  },
  8182: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(1609),
      sc = nc(957);

    function Mc(cB) {
      const Bc = Math.floor(cB / 3600),
        nc = Math.floor(cB % 3600 / 60),
        Vc = Math.floor(cB % 60),
        Ic = `${nc.toString().padStart(2,"0")}:${Vc.toString().padStart(2,"0")}`;
      return Bc > 0 ? `${Bc}:${Ic}` : Ic
    }
    const Pc = (0, Vc.memo)((function(cB) {
      let {
        className: Bc
      } = cB;
      const {
        recording: nc,
        seconds: Vc
      } = (0, uc.g)("replayRecorder");
      return nc ? (0, sc.jsxs)("div", {
        className: rB()("RecordingIndicator", Bc),
        children: [(0, sc.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, sc.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, sc.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Mc(Vc)
        })]
      }) : null
    }))
  },
  8187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(3648),
      Ic = nc(3652);

    function rB(cB) {
      let {
        children: Bc,
        showing: nc,
        globallyUniqueKey: rB,
        alwaysMountChildren: uc = !1,
        doGameplayStartStopOnShow: sc = !0,
        keepsMovement: Mc = !1
      } = cB;
      return (0, Ic.c)(!0, nc, rB, Mc), (0, Vc.c)(sc, nc), nc || uc ? Bc : null
    }
  },
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  },
  8135: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => fc,
      f: () => Tc
    });
    var Vc = nc(27),
      Ic = nc(2831),
      rB = nc(51),
      uc = nc(1194),
      sc = nc(2829),
      Mc = nc(1283),
      Pc = nc(1226);
    const qB = 2592e5,
      Oc = "notificationOptInLastPromptedAt";
    async function Tc() {
      var cB;
      const Bc = await fc();
      if (null === Bc) return;
      const nc = null !== (cB = rB.h.getItem(Oc)) && void 0 !== cB ? cB : 0;
      if (Date.now() - nc < qB) return;
      if ((0, Pc.f)()) return;
      const Vc = await uc.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: (0, Ic.c)() ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== Vc && (rB.h.setItem(Oc, Date.now()), (0, Mc.h)({
        id: !0 === Vc ? "push.allow" : "push.deny",
        value: (0, Ic.c)() ? "app" : "browser"
      }), !0 === Vc && Bc())
    }
    async function fc() {
      return (0, Ic.c)() ? Vc.d.get("mobilePushNotificationsCanAsk") ? async () => {
        (0, Ic.f)("requestNotificationPermission", {})
      }: null: await sc.c.canAsk() ? () => sc.c.requestPermission() : null
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);