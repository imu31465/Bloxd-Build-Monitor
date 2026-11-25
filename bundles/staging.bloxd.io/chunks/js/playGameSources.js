export const id = 47;
export const ids = [47];
export const modules = {
  39926: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      g: () => Zu,
      h: () => Uu
    });
    const su = 6e3;

    function Uu(uu, Eu) {
      return [Math.floor(uu[0] / Eu) * Eu, Math.floor(uu[1] / Eu) * Eu, Math.floor(uu[2] / Eu) * Eu]
    }

    function Zu(uu) {
      const Eu = (null !== uu && void 0 !== uu ? uu : "").match(/-?\d+(?:\.\d+)?/g);
      return Eu && Eu.length >= 3 ? [Number(Eu[0]), Number(Eu[1]), Number(Eu[2])] : null
    }

    function Xu(uu, Eu) {
      return uu === Eu ? String(uu) : `${uu}-${Eu}`
    }

    function lu(uu, Eu, ju, su) {
      const Uu = [];
      let Zu = new Map;
      for (let Xu = uu[2]; Xu < uu[2] + Eu; Xu++) {
        const lu = new Map;
        let qu = uu[0];
        for (; qu < uu[0] + Eu;) {
          const Uu = su(qu, ju, Xu);
          let fu = qu;
          for (; fu + 1 < uu[0] + Eu && su(fu + 1, ju, Xu) === Uu;) fu++;
          if (null !== Uu) {
            const uu = `${qu} ${fu} ${Uu}`,
              Eu = Zu.get(uu);
            Eu ? (Eu.z1 = Xu, Zu.delete(uu), lu.set(uu, Eu)) : lu.set(uu, {
              x0: qu,
              x1: fu,
              z0: Xu,
              z1: Xu,
              name: Uu
            })
          }
          qu = fu + 1
        }
        Uu.push(...Zu.values()), Zu = lu
      }
      return Uu.push(...Zu.values()), Uu.sort(((uu, Eu) => uu.z0 - Eu.z0 || uu.x0 - Eu.x0)).map((uu => `x${Xu(uu.x0,uu.x1)} z${Xu(uu.z0,uu.z1)} ${uu.name}`))
    }

    function qu(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : su;
      const qu = [uu[0] + Eu - 1, uu[1] + Eu - 1, uu[2] + Eu - 1],
        fu = null !== Uu && Uu.every(((Eu, ju) => Math.floor(Eu) >= uu[ju] && Math.floor(Eu) <= qu[ju])),
        Cu = [`The chunk from ${uu.join(" ")} to ${qu.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Uu && Cu.push(`The player's feet are at ${Uu.map(Math.floor).join(" ")}, ${fu?"in this chunk":"outside this chunk"}.`);
      const bu = [];
      for (let su = uu[1]; su <= qu[1]; su++) {
        const Uu = lu(uu, Eu, su, ju).join("; "),
          Zu = bu[bu.length - 1];
        (null === Zu || void 0 === Zu ? void 0 : Zu.boxes) === Uu ? Zu.to = su : bu.push({
          from: su,
          to: su,
          boxes: Uu
        })
      }
      const cu = bu.filter((uu => "" !== uu.boxes));
      0 === cu.length && Cu.push("It is all air.");
      let Nu = Cu.join("\n").length;
      for (const su of cu) {
        const uu = `y${Xu(su.from,su.to)}: ${su.boxes}`;
        if (Nu += uu.length + 1, Nu > Zu) {
          Cu.push(`Cut short: the layers from y${su.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Cu.push(uu)
      }
      return Cu.join("\n")
    }
  },
  9006: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(22);

    function Uu() {
      return !su.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37349: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu,
      l: () => Uu
    });
    const su = [.25, .5, 1, 2, 4, 8, 16];

    function Uu(uu, Eu) {
      const ju = su;
      let Uu = ju.indexOf(uu);
      return -1 === Uu && (Uu = ju.findIndex((Eu => Eu >= uu)), -1 === Uu && (Uu = ju.length - 1)), "up" === Eu ? ju[Math.min(Uu + 1, ju.length - 1)] : ju[Math.max(Uu - 1, 0)]
    }

    function Zu(uu) {
      return uu <= su[0]
    }

    function Xu(uu) {
      return uu >= su[su.length - 1]
    }
  },
  39392: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      d: () => Xu
    });
    var su = ju(24);
    let Uu = !1;

    function Zu() {
      return Uu
    }

    function Xu(uu) {
      Uu !== uu && (Uu = uu, su.h.TY("replayViewer|videoExportChanged"))
    }
  },
  36876: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => Zu
    });
    let su = !1;

    function Uu() {
      return su
    }

    function Zu(uu) {
      return su !== uu && (su = uu, !0)
    }
  },
  39336: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(24),
      Uu = ju(2011);

    function Zu(uu) {
      let {
        taskId: Eu,
        progress: ju
      } = uu;
      const su = Uu.e.get("_tasks");
      null !== su && void 0 !== su && su[Eu] && Uu.e.apply({
        _tasks: {
          ...su,
          [Eu]: {
            ...su[Eu],
            progress: ju
          }
        }
      })
    }
    su.h.subscribe("clientTaskProgress", (uu => {
      Zu(uu)
    }))
  },
  39897: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      c: () => Ou,
      d: () => fu,
      h: () => bu,
      j: () => qu,
      m: () => Xu,
      o: () => Cu,
      p: () => Yu
    });
    var su = ju(2011),
      Uu = ju(24),
      Zu = ju(2019);
    const Xu = (0, Zu.l)((function() {
        var uu, Eu, ju, Uu;
        return {
          health: null !== (uu = su.e.get("_health")) && void 0 !== uu ? uu : null,
          maxHealth: null !== (Eu = su.e.get("_totalMaxHealth")) && void 0 !== Eu ? Eu : null,
          shield: null !== (ju = su.e.get("_shield")) && void 0 !== ju ? ju : null,
          maxShield: null !== (Uu = su.e.get("maxShield")) && void 0 !== Uu ? Uu : null
        }
      }), [], (0, Zu.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      lu = [{
        canFly: !1,
        flying: !1
      }, {
        canFly: !1,
        flying: !0
      }, {
        canFly: !0,
        flying: !1
      }, {
        canFly: !0,
        flying: !0
      }];

    function qu(uu, Eu) {
      return lu[(uu ? 2 : 0) + (Eu ? 1 : 0)]
    }
    const fu = (0, Zu.l)((function() {
      var uu;
      return null !== (uu = su.e.get("_aura")) && void 0 !== uu ? uu : null
    }), [], (0, Zu.k)("_aura"));

    function Cu(uu) {
      return {
        watch: Eu => (0, Uu.l)("shotPlayer", (ju => {
          let {
            playerId: su,
            damage: Uu,
            wasCrit: Zu,
            distance: Xu
          } = ju;
          uu(su) && Eu({
            damage: Uu,
            wasCrit: Zu,
            distance: Xu
          })
        }))
      }
    }

    function bu(uu) {
      return (0, Zu.e)("chat", (Eu => {
        let {
          serverChatMsgId: ju,
          content: su,
          chatterEId: Uu
        } = Eu;
        return {
          serverChatMsgId: null !== ju && void 0 !== ju ? ju : null,
          content: su,
          author: Uu ? uu(Uu) : null
        }
      }))
    }
    class cu {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ju = this.shown;
        return uu !== this.needed && (this.needed = uu, this.neededSince = Eu, null === uu && (this.shown = null)), this.shown !== this.needed && Eu - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ju
      }
    }

    function Nu(uu) {
      return [{
        translationKey: `touchKeys:${uu}`
      }]
    }
    const Ou = {
      open: Nu("open"),
      close: Nu("close"),
      milk: Nu("milk"),
      shear: Nu("shear"),
      tame: Nu("tame"),
      feed: Nu("feed"),
      ride: Nu("ride")
    };

    function Yu(uu) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: uu
      }]
    }
  },
  41264: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => Xu
    });
    var su = ju(3482);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Zu ??= ju.e(216).then((() => ju(36722))).then((uu => {
        let {
          ITEM_SPRITES: Eu,
          ITEM_SPRITES_WITHOUT_FILE: ju,
          ITEM_FILES_WITHOUT_SPRITE: Zu
        } = uu;
        Uu = function(uu, Eu, ju) {
          const Uu = new Set,
            Zu = (0, su.x)(Eu);
          let Xu = 0;
          for (const [su, lu] of uu.entries()) su === Zu[Xu] ? Xu++ : Uu.add(lu);
          if ("" !== ju)
            for (const lu of ju.split(su.q)) Uu.add(lu);
          return Uu
        }(Eu.split(su.q), ju, Zu)
      }), (uu => {
        throw Zu = null, uu
      })), Zu
    }

    function lu(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = Uu) || void 0 === ju ? void 0 : ju.has(uu)) && void 0 !== Eu && Eu
    }
  },
  39910: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      f: () => Zu,
      j: () => Uu
    });
    const su = 128;

    function Uu(uu, Eu, ju, su) {
      const Uu = 2 * Eu - 1,
        Zu = 1 - 2 * ju,
        Xu = uu(0) - Uu * uu(3),
        lu = uu(4) - Uu * uu(7),
        qu = uu(8) - Uu * uu(11),
        fu = uu(1) - Zu * uu(3),
        Cu = uu(5) - Zu * uu(7),
        bu = uu(9) - Zu * uu(11);
      su[0] = lu * bu - qu * Cu, su[1] = qu * fu - Xu * bu, su[2] = Xu * Cu - lu * fu;
      const cu = su[0] * uu(3) + su[1] * uu(7) + su[2] * uu(11) < 0 ? -1 : 1,
        Nu = Math.hypot(su[0], su[1], su[2]) * cu;
      return su[0] /= Nu, su[1] /= Nu, su[2] /= Nu, su
    }

    function Zu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = [Math.floor(Eu[0]), Math.floor(Eu[1]), Math.floor(Eu[2])],
        lu = [0, 0, 0],
        qu = [1 / 0, 1 / 0, 1 / 0],
        fu = [1 / 0, 1 / 0, 1 / 0];
      for (let cu = 0; cu < 3; cu++) lu[cu] = Math.sign(ju[cu]), 0 !== lu[cu] && (fu[cu] = Math.abs(1 / ju[cu]), qu[cu] = (Xu[cu] + (lu[cu] > 0 ? 1 : 0) - Eu[cu]) / ju[cu]);
      let Cu = 0,
        bu = Math.abs(ju[0]) > Math.abs(ju[1]) ? 0 : 1;
      for (Math.abs(ju[2]) > Math.abs(ju[bu]) && (bu = 2); Cu <= su;) {
        if (uu(Xu[0], Xu[1], Xu[2])) return Uu[0] = Xu[0], Uu[1] = Xu[1], Uu[2] = Xu[2], Zu[0] = 0, Zu[1] = 0, Zu[2] = 0, Zu[bu] = -lu[bu], !0;
        bu = qu[0] < qu[1] ? 0 : 1, qu[2] < qu[bu] && (bu = 2), Cu = qu[bu], Xu[bu] += lu[bu], qu[bu] += fu[bu]
      }
      return !1
    }
  },
  39891: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(1955);

    function Uu(uu, Eu, ju) {
      return (0, su.m)(uu, Eu) < ju
    }
  },
  8944: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(1309);

    function Uu(uu, Eu) {
      var ju, Uu;
      try {
        const ju = (0, su.e)();
        if ("function" === typeof ju) {
          const su = new ju(uu, Eu);
          if (su.type === uu) return su
        }
      } catch {}
      const Zu = document.createEvent("Event");
      return Zu.initEvent(uu, null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.bubbles) && void 0 !== ju && ju, null !== (Uu = null === Eu || void 0 === Eu ? void 0 : Eu.cancelable) && void 0 !== Uu && Uu), Zu
    }
  },
  36856: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu,
      d: () => Cu,
      f: () => Nu,
      g: () => bu
    });
    var su = ju(349),
      Uu = ju(692),
      Zu = ju(709),
      Xu = ju(31);
    const lu = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qu = "playSessionGameNameWithVariation",
      fu = "wasMatchmakePlayer";

    function Cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      (0, Zu.j)(uu, lu)
    }

    function bu() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).setItem(fu, !0)
    }

    function cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      return (0, Zu.c)(uu, lu)
    }

    function Nu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu.l;
      const ju = (0, Zu.c)(Eu, lu),
        Cu = function(uu) {
          const Eu = uu.getItem(qu);
          return "string" !== typeof Eu ? null : Eu
        }(Eu),
        bu = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).getItem(fu)
        }(Eu);
      let cu;
      return cu = null !== ju && null !== Cu && (0, Zu.g)(Eu, lu) && function(uu, Eu, ju) {
          const Uu = (0, su.Vb)(uu),
            Zu = (0, su.Vb)(Eu),
            Xu = (0, su.Qb)(uu),
            lu = (0, su.Qb)(Eu);
          return !(Uu !== Zu || !ju) || Uu === Zu && Xu === lu
        }(Cu, uu, bu) ? ju : (0, Uu.e)(), (0, Zu.m)(Eu, lu, cu), Eu.setItem(qu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).removeItem(fu)
        }(Eu), cu
    }
  },
  39327: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu
    });
    var su = ju(1278),
      Uu = ju(1376),
      Zu = ju(22),
      Xu = ju(1362),
      lu = ju(1369),
      qu = ju(1570),
      fu = ju(36856);

    function Cu(uu) {
      let {
        HU: Eu,
        AU: ju
      } = uu;
      const Cu = null !== Eu && void 0 !== Eu ? Eu : (0, lu.b)().gameNameWithVariation;
      (0, su.L)(Cu) && ((0, fu.g)(), (0, Xu.R)((() => {
        console.log("Received matchmaking order from game server to game", Eu), (0, Zu.j)("inGameReplay"), (0, qu.navigatePreserveSearch)((0, Uu.c)(Cu, null !== ju && void 0 !== ju ? ju : void 0))
      }), "video_start"))
    }
  },
  39497: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(24),
      Uu = ju(2040);

    function Zu(uu) {
      var Eu, ju;
      const Zu = (0, Uu.q)(null !== (Eu = null === (ju = Uu.z.toggleFreeCam) || void 0 === ju ? void 0 : ju[0]) && void 0 !== Eu ? Eu : null);
      su.h.TY("showBottomMessage", {
        message: `Free Camera ${uu?"Enabled":"Disabled"}${Zu?` - Press ${Zu} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39320: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      g: () => Xu,
      i: () => lu,
      k: () => fu
    });
    var su = ju(24),
      Uu = ju(1405);
    const Zu = new Map;

    function Xu(uu, Eu) {
      su.h.TY("newUiRequest", {
        id: uu,
        clientParameters: Eu
      }, !0)
    }

    function lu(uu) {
      su.h.TY("removeUiRequest", uu, !0);
      const Eu = Zu.get(uu);
      Eu && (Eu.tearDownNotification(), Zu.delete(uu))
    }

    function qu() {
      su.h.TY("clearUiRequests");
      for (const uu of Zu.values()) uu.tearDownNotification();
      Zu.clear()
    }

    function fu(uu, Eu, ju, su) {
      const Xu = Uu.NotificationProvider.showPromptPopup({
        title: Eu,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ju,
        unlockPointerKey: "uiRequestPopup"
      });
      Zu.set(uu, Xu), Xu.getResult().then((Eu => {
        Zu.delete(uu), "notificationTornDown" !== Eu && su(Eu)
      }))
    }
  },
  39917: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      f: () => cu
    });
    var su = ju(202),
      Uu = ju(39926);
    const Zu = 20;

    function Xu(uu) {
      return uu.map(Math.floor).join(" ")
    }

    function lu(uu) {
      return null === uu.amount || 1 === uu.amount ? uu.name : `${uu.amount} ${uu.name}`
    }
    var qu = ju(39933),
      fu = ju(2011),
      Cu = ju(1369);

    function bu(uu, Eu) {
      if (!uu) return qu.e;
      const ju = uu.playerFeet();
      if (!ju) return "The player isn't in the world yet, so no blocks can be seen.";
      const Zu = su.e.hO,
        Xu = (0, Uu.h)(null !== Eu && void 0 !== Eu ? Eu : ju, Zu),
        lu = uu.chunkBlocks(Xu);
      return lu ? (0, Uu.d)(Xu, Zu, ((Eu, ju, su) => {
        const Uu = lu(Eu, ju, su);
        return 0 === Uu ? null : uu.blockName(Uu).split("|")[0]
      }), ju) : `The chunk from ${Xu.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ju.map(Math.floor).join(" ")}.`
    }

    function cu(uu) {
      var Eu, ju, su;
      if (!uu) return qu.f;
      const Uu = uu.playerFeet();
      if (!Uu) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: bu,
        heldSlot: cu
      } = uu.inventory();
      return function(uu) {
        const Eu = [];
        null !== uu.game && Eu.push(`Game: ${uu.game}.`);
        const ju = null === uu.health ? "" : `, health ${Math.round(uu.health)}${null===uu.maxHealth?"":` of ${Math.round(uu.maxHealth)}`}`;
        Eu.push(`The player (the creator) stands at ${Xu(uu.position)}${ju}, ${uu.creative?"in":"not in"} creative mode.`);
        const su = uu.slots[uu.heldSlot];
        Eu.push(su ? `Holding (slot ${uu.heldSlot}): ${lu(su)}.` : `Holding nothing (slot ${uu.heldSlot} is empty).`);
        const Uu = uu.slots.flatMap(((uu, Eu) => uu ? [`slot ${Eu}: ${lu(uu)}`] : []));
        Eu.push(Uu.length > 0 ? `Inventory: ${Uu.join(", ")}.` : "Inventory: empty.");
        const qu = Eu => Math.hypot(Eu.position[0] - uu.position[0], Eu.position[1] - uu.position[1], Eu.position[2] - uu.position[2]),
          fu = [...uu.nearby].sort(((uu, Eu) => qu(uu) - qu(Eu)));
        if (0 === fu.length) Eu.push("No other players or mobs are near enough to see.");
        else {
          Eu.push("Near them, nearest first:");
          for (const uu of fu.slice(0, Zu)) {
            const ju = "player" === uu.kind ? `player "${uu.name||"?"}"` : uu.name && uu.name !== uu.kind ? `${uu.kind} "${uu.name}"` : uu.kind,
              su = Math.round(qu(uu));
            Eu.push(`- ${ju} at ${Xu(uu.position)}, ${su} block${1===su?"":"s"} away`)
          }
          fu.length > Zu && Eu.push(`- and ${fu.length-Zu} more further away`)
        }
        return uu.droppedItems > 0 && Eu.push(`${uu.droppedItems} dropped item${1===uu.droppedItems?" is":"s are"} on the ground nearby.`), Eu.join("\n")
      }({
        game: null !== (Eu = (0, Cu.b)().gameNameWithVariation) && void 0 !== Eu ? Eu : null,
        position: Uu,
        health: null !== (ju = fu.e.get("_health")) && void 0 !== ju ? ju : null,
        maxHealth: null !== (su = fu.e.get("_totalMaxHealth")) && void 0 !== su ? su : null,
        creative: !0 === fu.e.get("creative"),
        heldSlot: cu,
        slots: bu,
        nearby: uu.nearby(),
        droppedItems: uu.droppedItems()
      })
    }
  },
  41110: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => nu,
      D: () => Qu,
      F: () => ku,
      J: () => ru,
      M: () => ou,
      P: () => tu,
      S: () => Lu,
      V: () => vu,
      b: () => xu,
      e: () => Wu,
      i: () => au,
      k: () => Tu,
      o: () => Pu,
      q: () => du,
      r: () => iu,
      t: () => mu,
      u: () => Vu,
      y: () => Ku
    });
    var su = ju(1443),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(2516),
      lu = ju(4986),
      qu = ju(4962);
    let fu, Cu = !1,
      bu = !1,
      cu = !1,
      Nu = !1;
    const Ou = 1300,
      Yu = 3e3;
    let hu = 0,
      Du = !1,
      gu = !1,
      Mu = 0;
    const eu = 2;
    let Gu = !1,
      pu = !1;
    const wu = new Set,
      Ju = new Set;

    function du() {
      return Cu
    }

    function au() {
      return gu
    }

    function Pu() {
      return pu
    }

    function ou() {
      return (0, Zu.w)() && !pu
    }

    function ku(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu !== pu) {
        pu = uu;
        for (const uu of [...Ju]) uu(pu);
        Eu && Lu()
      }
    }

    function mu(uu) {
      return Ju.add(uu), () => {
        Ju.delete(uu)
      }
    }

    function vu() {
      (0, lu.g)(Xu.x.Menu, (0, Zu.w)() ? 0 : Xu.x.Menu)
    }

    function Ku() {
      gu = !1, Mu = 0, vu(), Lu()
    }

    function Vu(uu) {
      return wu.add(uu), () => {
        wu.delete(uu)
      }
    }

    function ru(uu) {
      bu = !1, uu !== Cu && (Cu = uu, Nu = !1, clearTimeout(fu), cu = !Cu && Gu, Cu ? (Du = !1, gu = !1, Mu = 0) : ou() && !Gu && (gu = !0), Gu = !1, Cu && !ou() && Au(), yu(), cu && Lu())
    }

    function Qu(uu) {
      uu !== Du && (Du = uu, uu || Lu())
    }

    function iu() {
      bu = !1, Nu || !0 !== Fu() || (Nu = !0, clearTimeout(fu), fu = setTimeout(Su, Ou))
    }

    function Wu() {
      return (!bu || performance.now() - hu > Yu) && (bu = (0, qu.H)().lockPointer(), hu = performance.now()), bu
    }

    function Su() {
      Iu() && Bu() && Wu()
    }

    function Iu() {
      return ou() && !Cu && !Du && !(0, su.g)()
    }

    function Fu() {
      var uu;
      return "undefined" === typeof navigator || null === (uu = navigator.userActivation) || void 0 === uu ? void 0 : uu.isActive
    }

    function Bu() {
      return cu && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Fu()
    }

    function Lu() {
      ou() ? Iu() && !gu && Bu() && Wu() : Cu && !Gu && Au()
    }

    function tu() {
      gu ? navigator.vendor.startsWith("Apple") ? Hu() : Mu = eu : Lu()
    }

    function xu() {
      Mu > 0 && 0 === --Mu && Hu()
    }

    function Tu() {
      Mu = 0
    }

    function Hu() {
      Iu() && !0 === Fu() && Wu()
    }

    function Au() {
      Gu = !0, (0, qu.H)().unlockPointer()
    }

    function nu() {
      bu = !1, cu = !1, Nu = !1, clearTimeout(fu), Du = !1, gu = !1, Mu = 0, Gu = !1;
      const uu = Cu;
      Cu = !1, uu && yu()
    }

    function yu() {
      for (const uu of [...wu]) uu(Cu);
      Uu.h.TY("pointerLockUpdate", Cu)
    }
  },
  40932: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu,
      e: () => lu,
      h: () => bu,
      j: () => fu,
      n: () => Xu,
      r: () => Cu,
      t: () => qu
    });
    let su = null,
      Uu = null,
      Zu = null;

    function Xu(uu) {
      su = uu
    }

    function lu() {
      return su
    }

    function qu(uu) {
      Uu = uu
    }

    function fu() {
      return Uu
    }

    function Cu(uu) {
      Zu = uu
    }

    function bu() {
      return Zu
    }

    function cu() {
      var uu, Eu;
      return !0 === (null === (uu = Uu) || void 0 === uu || null === (Eu = uu.currentViewer) || void 0 === Eu ? void 0 : Eu.inPlayback)
    }
  },
  41221: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      attachPlayGameSources: () => ds,
      playGameSources: () => ws
    });
    var su = ju(1986),
      Uu = ju(40932),
      Zu = ju(4962),
      Xu = ju(40847),
      lu = ju(41206),
      qu = ju(39897),
      fu = ju(24),
      Cu = ju(4976),
      bu = ju(4970),
      cu = ju(40877),
      Nu = ju(40904),
      Ou = ju(41223),
      Yu = ju(40889);
    (0, Yu.n)(Cu.mc.Chat, (uu => {
      if (uu.payloadKind !== bu.ic.Msgpack) return;
      const Eu = function(uu) {
        if (null === uu || "object" !== typeof uu || !("content" in uu)) return null;
        const {
          chatMsgId: Eu,
          content: ju,
          chatterEId: su
        } = uu;
        return {
          serverChatMsgId: null !== Eu && void 0 !== Eu ? Eu : void 0,
          content: ju,
          chatterEId: void 0 === su || null === su ? void 0 : String(su)
        }
      }((0, cu.d)(uu.payload));
      null !== Eu && fu.h.TY("chat", Eu, !0)
    }));
    const hu = {
        chatReceived: (0, qu.h)((function(uu) {
          var Eu, ju, su;
          return {
            id: uu,
            name: null !== (Eu = Ou.f.getName(uu)) && void 0 !== Eu ? Eu : null,
            local: (0, Nu.e)() === uu,
            profileEffect: null !== (ju = null === (su = (0, Ou.h)(uu)) || void 0 === su ? void 0 : su.profileEffect) && void 0 !== ju ? ju : null
          }
        }))
      },
      Du = {
        sendChatMessage(uu) {
          var Eu;
          let {
            VC: ju,
            channelName: su
          } = uu;
          null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.clientApi.sendChat(ju, su)
        }
      };
    var gu = ju(202),
      Mu = ju(2011),
      eu = ju(40833),
      Gu = ju(39891);
    const pu = [0, 0, 0],
      wu = {
        codeBlockClickable(uu) {
          var Eu;
          const ju = (0, Xu.l)();
          if (null === ju || void 0 === ju || !ju.isSessionLive) return !1;
          const su = ju.api;
          if (0 !== (eu.u.playerFlags(su.apiView, 0) & eu.td.Crouching)) return !1;
          const Uu = su.queries.directorEntity(su.localId) >= eu.qb.BYTES ? su.memoryData(su.scratch(), eu.qb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Uu) return !1;
          for (let Zu = 0; Zu < 3; Zu++) pu[Zu] = eu.qb.feet(Uu, 0, Zu);
          return pu[1] += eu.qb.eyeHeight(Uu, 0), (0, Gu.d)(pu, uu, null !== (Eu = Mu.e.get("blockReach")) && void 0 !== Eu ? Eu : gu.e.Bh)
        }
      },
      Ju = {
        clickCodeBlock(uu) {
          var Eu;
          null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.clickCodeBlock(uu)
        }
      };
    var du = ju(40856),
      au = ju(41230),
      Pu = ju(1069),
      ou = ju(39344),
      ku = ju(4958),
      mu = ju(40864),
      vu = ju(40854),
      Ku = ju(40873);

    function Vu(uu) {
      if (null === uu) return null;
      const Eu = [];
      for (const ju of uu) {
        const uu = Object.keys(ju)[0];
        if ("jE" === uu) {
          const {
            str: uu,
            style: su,
            clickableUrl: Uu
          } = ju.jE, Zu = Object.keys(uu)[0], Xu = uu[Zu];
          "string" !== Zu && "styledEntityName" !== Zu && "styledTranslatedText" !== Zu || Eu.push({
            str: Xu,
            style: su,
            clickableUrl: Uu
          })
        } else Eu.push(ju[uu])
      }
      return Eu
    }
    const ru = {
      screenPos(uu) {
        var Eu, ju;
        return null !== (Eu = null === (ju = (0, Xu.l)()) || void 0 === ju ? void 0 : ju.renderFrame.projectWorldPosToScreenPos(uu)) && void 0 !== Eu ? Eu : {
          x: 0,
          y: 0
        }
      }
    };
    let Qu = !1;

    function iu() {
      Qu || (Qu = !0, (0, Yu.n)(Cu.mc.ProgressBarUpdate, (uu => {
        const Eu = (0, Ku.i)(uu);
        (0, Ku.e)(Eu) && fu.h.TY("progressBarUpdate", Eu, !0)
      })), (0, Yu.n)(mu.w, (uu => {
        const Eu = (0, Ku.g)(mu.w, uu);
        Eu && fu.h.TY("middleScreenBarInitiate", {
          duration: Eu.BU,
          LU: Eu.LU,
          horizBarRemOffset: Eu.tU
        }, !0)
      })), (0, Yu.n)(Cu.mc.RemoveMiddleScreenBar, (() => {
        fu.h.TY("middleScreenBarRemove")
      })), (0, Yu.n)(mu.hb, (uu => {
        const Eu = (0, Ku.g)(mu.hb, uu);
        if (Eu) {
          var ju;
          const uu = Eu.ku ? null === (ju = (0, Xu.l)()) || void 0 === ju ? void 0 : ju.renderFrame.projectDirectionToScreenPos(Eu.ku) : void 0;
          fu.h.TY("sendHitmarker", {
            FE: Eu.FE,
            screenPos: uu
          }, !0)
        }
      })), (0, Yu.n)(mu.ob, (uu => {
        const Eu = (0, Ku.g)(mu.ob, uu);
        if (Eu) {
          const {
            id: uu,
            position: ju,
            style: su,
            KE: Uu,
            rE: Zu
          } = Eu;
          fu.h.TY("setDirectionArrow", {
            id: uu,
            position: ju,
            style: su,
            text: Vu(Uu),
            rE: Zu
          }, !0)
        }
      })), (0, Yu.n)(mu.d, (uu => {
        const Eu = (0, Ku.g)(mu.d, uu);
        Eu && fu.h.TY("clearDirectionArrow", {
          id: Eu.id
        }, !0)
      })), (0, Yu.n)(mu.o, (uu => {
        const Eu = (0, Ku.g)(mu.o, uu);
        Eu && fu.h.TY("flyingMiddleMessage", {
          content: Vu(Eu.SZ),
          IZ: Eu.IZ,
          FZ: Eu.FZ
        }, !0)
      })), (0, Yu.n)(Cu.mc.WorldVariation, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ("string" === typeof Eu) {
          const uu = Eu === Pu.f ? null : {
            message: `Currently loaded as variation: ${Eu}`,
            type: "Warning"
          };
          fu.h.TY("showPermanentBottomMessage", uu, !0)
        }
      })), (0, Yu.n)(mu.L, (uu => {
        const Eu = (0, Ku.g)(mu.L, uu);
        Eu && function(uu, Eu) {
          const {
            type: ju,
            params: su
          } = (0, ou.i)(Eu), Uu = {
            ...su
          };
          for (const Zu of ou.e) Uu[Zu] && (Uu[Zu] = Vu(Uu[Zu]));
          ku.d.queueQTE(uu, ju, Uu).getResult().then((Eu => {
            var ju;
            "boolean" === typeof Eu && (null === (ju = (0, Xu.l)()) || void 0 === ju || ju.send(vu.c.QteResponse, {
              qteId: uu,
              qteResponse: Eu
            }))
          }))
        }(Eu.id, Eu.Hu)
      })), (0, Yu.n)(mu._, (uu => {
        const Eu = (0, Ku.g)(mu._, uu);
        "number" === typeof Eu && ku.d.cancelQTE(Eu)
      })), (0, Yu.i)((() => {
        ku.d.reset()
      })), (0, Yu.k)((() => {
        ku.d.reset()
      })), (0, Yu.n)(Cu.mc.EditItemCraftingRecipes, (uu => {
        const Eu = (0, Ku.i)(uu);
        (0, Ku.e)(Eu) && fu.h.TY("craftingRecipesEdited", {
          itemName: Eu.craftingRecipeItemName,
          recipesForItem: Eu.recipesForItem
        })
      })), (0, Yu.n)(mu.W, (uu => {
        const Eu = (0, Ku.g)(mu.W, uu);
        Eu && fu.h.TY("craftingRecipesEdited", {
          itemName: Eu.FU,
          recipesForItem: []
        })
      })))
    }
    var Wu = ju(22);
    const Su = [{
      allowed: !1,
      movesFly: !1
    }, {
      allowed: !1,
      movesFly: !0
    }, {
      allowed: !0,
      movesFly: !1
    }, {
      allowed: !0,
      movesFly: !0
    }];

    function Iu(uu) {
      return eu.u.playerFlags(uu.api.apiView, 0)
    }
    const Fu = {
        freeCamera: (0, Nu.c)((uu => () => {
          const Eu = uu.isSessionLive && 0 !== (Iu(uu) & eu.td.FreeCamMoves),
            ju = uu.freeCameraAllowed() && null === Wu.d.get("scriptedCameraFacing");
          return Su[(ju ? 2 : 0) + (Eu ? 1 : 0)]
        }), Su[0], (uu => (0, Zu.t)(uu)))
      },
      Bu = {
        setFreeCameraMovesFly: uu => {
          var Eu;
          null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.setFreeCameraMovesFly(uu)
        }
      },
      Lu = {
        freeCameraPos: () => {
          const uu = (0, Xu.l)();
          return null !== uu && void 0 !== uu && uu.isSessionLive && uu.renderFrame.hasView && 0 !== (Iu(uu) & eu.td.FreeCam) ? uu.renderFrame.cameraPosition : null
        }
      };
    var tu = ju(39497);
    let xu = !1,
      Tu = !1;

    function Hu() {
      const uu = (0, Xu.l)();
      if (null === uu || void 0 === uu || !uu.isSessionLive) return void(xu = !1);
      const Eu = 0 !== (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.FreeCam);
      Eu !== xu && (xu = Eu, (0, tu.d)(Eu))
    }
    var Au = ju(349),
      nu = ju(37428),
      yu = ju(2019);
    var zu = ju(41235),
      Ru = ju(40901);
    const uE = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let EE = "off";

    function jE(uu) {
      var Eu;
      return null === uu ? null : {
        label: null !== (Eu = (0, zu.c)(uu, "interactionPrompt")) && void 0 !== Eu ? Eu : null
      }
    }
    const sE = new Map([
      [eu.mc.Open, {
        label: qu.c.open
      }],
      [eu.mc.Close, {
        label: qu.c.close
      }],
      [eu.mc.Milk, {
        label: qu.c.milk
      }],
      [eu.mc.Shear, {
        label: qu.c.shear
      }],
      [eu.mc.Tame, {
        label: qu.c.tame
      }],
      [eu.mc.Feed, {
        label: qu.c.feed
      }],
      [eu.mc.Ride, {
        label: qu.c.ride
      }]
    ]);
    class UE {
      constructor() {
        this.target = uE, this.ul = eu.Tc, this.optionName = null, this.pickaxe = new qu.b
      }
      read(uu) {
        var Eu;
        const ju = eu.u.targetBlockId(uu.api.apiView, 0);
        ju !== this.ul && (this.ul = ju, this.optionName = ju === eu.Tc ? null : `${uu.tables.getMetaInfo(ju).rootName}CrosshairText`);
        const su = null === this.optionName ? null : null !== (Eu = uu.tables.getClientOption(this.optionName)) && void 0 !== Eu ? Eu : null;
        this.pickaxe.update(function(uu, Eu) {
          var ju, su, Uu;
          if (0 === (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.Breaking) || Eu === eu.Tc || 0 === Eu) return null;
          const {
            tables: Zu
          } = uu;
          if (!0 === Zu.getClientOption("creative")) return null;
          const Xu = Zu.nameOfId(Eu),
            lu = null === (ju = uu.items.dl()) || void 0 === ju ? void 0 : ju.name,
            qu = null !== (su = Zu.getItemStat(Xu, "harvestLevel")) && void 0 !== su ? su : 0;
          return (0, Au.Gc)({
            blockHarvestType: Zu.getDefaultItemStat(Xu, "harvestType"),
            blockHarvestLevel: Zu.getDefaultItemStat(Xu, "harvestLevel"),
            harvestLevel: qu,
            heldToolType: void 0 === lu ? void 0 : Zu.getDefaultItemStat(lu, "harvests"),
            heldToolLevel: void 0 === lu ? void 0 : Zu.getDefaultItemStat(lu, "level")
          }) && null !== (Uu = nu.n[qu]) && void 0 !== Uu ? Uu : null
        }(uu, ju)), uu.watchPromptPick(EE);
        const Uu = "touch" === EE ? function(uu) {
          var Eu;
          const ju = uu.interactLabel;
          return ju === eu.mc.Entity ? jE(uu.promptEntity) : ju === eu.mc.TameWith ? {
            label: (0, qu.p)(uu.tables.nameOfId(uu.interactIcon))
          } : null !== (Eu = sE.get(ju)) && void 0 !== Eu ? Eu : null
        }(uu) : jE(uu.promptEntity);
        return this.target = (0, yu.o)(this.target, {
          interactPrompt: Uu,
          blockText: su,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let ZE = null;
    const XE = {
      current: () => {
        var uu, Eu;
        return null !== (uu = null === (Eu = ZE) || void 0 === Eu ? void 0 : Eu.target) && void 0 !== uu ? uu : uE
      },
      watch: uu => {
        const Eu = new UE;
        ZE = Eu;
        const ju = (0, Nu.g)((ju => {
          let su = Eu.read(ju);
          uu(su);
          const Uu = (0, Zu.u)((() => {
            const Uu = Eu.read(ju);
            Uu !== su && (su = Uu, uu(Uu))
          }));
          return () => {
            Uu(), ju.watchPromptPick("off")
          }
        }));
        return () => {
          ju(), ZE === Eu && (ZE = null)
        }
      }
    };
    let lE = 0,
      qE = 0;
    const fE = {
        health: qu.m,
        aura: qu.d,
        hotbar: Ru.c.states.hotbar,
        heldItemAim: Ru.c.states.heldItemAim,
        crouching: (0, Nu.c)((uu => function(uu) {
          const Eu = () => 0 !== (eu.u.playerFlags(uu.apiView, 0) & eu.td.Crouching);
          return {
            current: Eu,
            watch(uu) {
              let ju = Eu();
              return (0, Zu.t)((() => {
                const su = Eu();
                su !== ju && (ju = su, uu(su))
              }))
            }
          }
        }(uu.api).current), !1, (uu => (0, Zu.t)(uu))),
        flight: (0, Nu.c)((uu => () => function(uu) {
          const Eu = eu.u.playerFlags(uu.apiView, 0);
          return (0, qu.j)(0 !== (Eu & eu.td.CanFly), 0 !== (Eu & eu.td.Flying))
        }(uu.api)), (0, qu.j)(!1, !1), (uu => (0, Zu.t)(uu))),
        gliderBoostFuel: (0, Nu.c)((uu => () => eu.u.gliderBoostFuel(uu.api.apiView, 0)), 0, (uu => (0, Zu.t)(uu))),
        crosshairTarget: XE
      },
      CE = {
        hotbarSlotRequested: Ru.c.events.hotbarSlotRequested,
        hotbarScrolled: Ru.c.events.hotbarScrolled,
        numberKeyPressed: Ru.c.events.numberKeyPressed,
        shotDamageToShow: (0, qu.o)((uu => !0 === (0, zu.c)(uu, "showDamageAmounts")))
      },
      bE = {
        selectHotbarSlot: Ru.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: uu => {
          EE = uu
        }
      },
      cE = {
        momentumFrac: function() {
          var uu, Eu, ju;
          const su = (0, Xu.l)(),
            Uu = performance.now(),
            Zu = null === su || void 0 === su || null === (uu = su.items.dl()) || void 0 === uu || null === (Eu = uu.attributes) || void 0 === Eu || null === (ju = Eu.customAttributes) || void 0 === ju ? void 0 : ju.enchantments;
          return lE = null !== su && null !== Zu && void 0 !== Zu && Zu.Momentum ? 0 !== (eu.u.playerFlags(su.api.apiView, 0) & eu.td.Breaking) ? Math.max(0, eu.u.momentumFrac(su.api.apiView, 0)) : Math.max(0, lE - (Uu - qE) / 1500) : 0, qE = Uu, lE
        }
      };
    var NE = ju(40840);
    const OE = {
      lobbyManage(uu) {
        var Eu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.LobbyManage, uu)
      }
    };
    var YE = ju(1298),
      hE = ju(36876),
      DE = ju(9006),
      gE = ju(1687),
      ME = ju(2516),
      eE = ju(4979);
    let GE = !1;

    function pE(uu) {
      GE = uu
    }

    function wE() {
      "inGame" !== Wu.d.get("gameState") || (0, gE.t)() || fu.h.TY("ctrlCrouchWithoutFullscreen")
    }
    let JE = !1;
    const dE = {
        OpenEmoteWheel: () => {
          pE(!0), JE = !0, queueMicrotask((() => {
            JE && (JE = !1, fu.h.TY("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          fu.h.TY("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, hE.c)() || fu.h.TY("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, hE.c)() || fu.h.TY("XKeyPressed")
        },
        CtrlCrouch: wE,
        "primary-fire": () => {
          fu.h.TY("mouseState", {
            FC: YE.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          fu.h.TY("mouseState", {
            FC: YE.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          fu.h.TY("mouseState", {
            FC: YE.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      aE = {
        OpenEmoteWheel: () => {
          pE(!1), JE ? (JE = !1, (0, DE.c)() || fu.h.TY("requestEmoteWheelHoldOpen")) : fu.h.TY("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: wE,
        "primary-fire": () => {
          fu.h.TY("mouseState", {
            FC: YE.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          fu.h.TY("mouseState", {
            FC: YE.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          fu.h.TY("mouseState", {
            FC: YE.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let PE = !1;

    function oE() {
      PE || (PE = !0, (0, eE.f)((uu => {
        if ((0, Uu.d)()) return;
        const Eu = (0, eE.c)(uu) ? "primary-fire" : uu.action;
        var ju;
        if (uu.down) {
          if (0 === (uu.flags & ME.b.Synthetic)) {
            var su;
            null === (su = dE[Eu]) || void 0 === su || su.call(dE)
          }
        } else null === (ju = aE[Eu]) || void 0 === ju || ju.call(aE)
      })))
    }
    var kE = ju(337),
      mE = ju(91),
      vE = ju(31),
      KE = ju(41110),
      VE = ju(1369),
      rE = ju(2533);
    let QE = !1;
    const iE = {
      sendCodeCollab(uu) {
        var Eu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.CodeCollab, (0, vu.n)(uu), (0, rE.d)(uu))
      }
    };
    var WE = ju(39416),
      SE = ju(8944);
    let IE = null,
      FE = !1,
      BE = null;

    function LE() {
      return "inGame" === Wu.d.get("gameState") && !(0, hE.c)()
    }
    const tE = {
        OpenInventory: uu => {
          (0, gE.z)(uu, "inventory", (0, NE.p)())
        },
        OpenShop: uu => {
          IE && LE() && (0, gE.x)(uu, kE.o.SHOP, !IE.shopIsEmpty(Mu.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: uu => {
          LE() && (0, gE.x)(uu, kE.o.LOBBY_LEADERBOARD, (0, WE.c)({
            lobbyLeaderboardInfo: Mu.e.get("lobbyLeaderboardInfo"),
            lobbyManage: Mu.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: uu => {
          var Eu;
          const ju = null === (Eu = IE) || void 0 === Eu ? void 0 : Eu.getClientGameMapKey();
          ju ? (0, gE.D)(uu, !0, ju) : (0, gE.z)(uu, "retentionFeatures", !(!Mu.e.get("_tasks") && !Mu.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: uu => {
          (0, gE.z)(uu, "inviteLink", mE.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: uu => {
          LE() && function(uu) {
            const Eu = (0, Xu.l)(),
              ju = null !== Eu && void 0 !== Eu && Eu.isSessionLive ? Eu.api : null,
              su = ju ? ju.bM(ju.localId) : null;
            (0, gE.D)(uu, null !== su && (0, rE.b)((0, VE.b)()), (() => {
              (0, rE.h)(su)
            }))
          }(uu)
        },
        HideUi: () => {
          fu.h.TY("showUi", !1)
        }
      },
      xE = {
        HideUi: () => {
          fu.h.TY("showUi", !0)
        }
      };

    function TE() {
      FE || (FE = !0, ju.e(159).then((() => ju(60866))).then((uu => {
        IE = uu
      }), (uu => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", uu)
      })), (0, KE.u)((uu => {
        uu || !(0, KE.i)() || (0, mE.isMobile)() || !vE.k.getItem("disableFullscreen") || (0, gE.s)() || Wu.d.set({
          openEverythingMenuName: kE.o.SETTINGS
        })
      })), (0, eE.f)((uu => {
        let {
          action: Eu,
          down: ju,
          press: su
        } = uu;
        var Zu, Xu;
        (0, Uu.d)() || (ju ? null === (Zu = tE[Eu]) || void 0 === Zu || Zu.call(tE, function(uu) {
          var Eu;
          if (0 === uu || (null === (Eu = BE) || void 0 === Eu ? void 0 : Eu.press) !== uu) {
            const Eu = {
              press: uu,
              event: (0, SE.b)("inputAction")
            };
            BE = Eu, queueMicrotask((() => {
              BE === Eu && (BE = null)
            }))
          }
          return BE.event
        }(su)) : null === (Xu = xE[Eu]) || void 0 === Xu || Xu.call(xE))
      })))
    }
    var HE = ju(39336),
      AE = ju(39327),
      nE = ju(39320);
    const yE = {
      completeTask(uu) {
        var Eu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.CompleteTask, (0, vu.r)(uu))
      },
      setServerCookie(uu) {
        var Eu;
        let {
          key: ju,
          value: su
        } = uu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.GeneralCookieSet, (0, vu.w)({
          Xl: ju,
          ll: su
        }))
      },
      answerUiRequest(uu) {
        var Eu;
        let {
          id: ju,
          eC: su
        } = uu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.UiRequestResp, (0, vu.U)({
          qq: ju,
          fq: su,
          Cq: 5
        }))
      },
      chooseRewardedAd(uu) {
        var Eu;
        let {
          id: ju,
          eC: su
        } = uu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.UiRequestResponded, (0, vu.S)({
          id: ju,
          eC: su
        }))
      },
      requestLeaderboard(uu) {
        var Eu;
        let {
          category: ju,
          timeframe: su,
          seeTop: Uu
        } = uu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.LeaderboardRequest, {
          category: ju,
          timeframe: su,
          seeTop: Uu
        })
      }
    };
    let zE = !1;
    const RE = gu.e.Sh / 2,
      uj = [RE, -RE, -RE, -RE, RE, RE, -RE, RE],
      Ej = [0, 0, 0];

    function jj(uu, Eu, ju) {
      for (let su = 0; su < uu.length; su += 2)
        if (uu[su] === Eu && uu[su + 1] === ju) return !0;
      return !1
    }
    const sj = {
      blocksStandingOn: function() {
        const uu = (0, Xu.l)();
        if (null === uu) return [];
        const {
          api: Eu,
          chunks: ju,
          tables: su
        } = uu;
        if (!Eu.readPosition(Eu.localId, Ej)) return [];
        const [Uu, Zu, lu] = Ej, qu = Math.ceil(Zu) - 1, fu = [], Cu = [];
        for (let Xu = 0; Xu < uj.length; Xu += 2) {
          const uu = Uu + uj[Xu],
            Eu = lu + uj[Xu + 1];
          if (Number.isInteger(uu) || Number.isInteger(Eu)) continue;
          const Zu = Math.floor(uu),
            bu = Math.floor(Eu);
          if (jj(Cu, Zu, bu)) continue;
          const cu = ju.ul(Zu, qu, bu);
          su.isSolidBlockId(cu) && (Cu.push(Zu, bu), fu.push(su.nameOfId(cu)))
        }
        return fu
      },
      dropAhead: function() {
        const uu = (0, Xu.l)();
        return null !== uu && 0 !== (eu.u.playerFlags(uu.api.apiView, 0) & eu.td.DropAhead)
      }
    };
    var Uj = ju(37349),
      Zj = ju(39392),
      Xj = ju(1405),
      lj = ju(40912);
    const qj = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      fj = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Cj() {
      const uu = new Set;
      return {
        add: Eu => (uu.add(Eu), () => {
          uu.delete(Eu)
        }),
        fire() {
          for (const Eu of uu) Eu()
        }
      }
    }
    const bj = Object.freeze([]);

    function cj(uu, Eu) {
      let ju, {
        rereads: su,
        followLocalId: Uu
      } = Eu;
      const Xu = () => (ju = (0, yu.o)(ju, uu()), ju);
      return {
        current: Xu,
        watch(uu) {
          const Eu = (0, Ou.e)((Eu => {
            su(Eu) && uu(Xu())
          }));
          if (!Uu) return Eu;
          let ju = (0, Nu.e)();
          const lu = (0, Zu.u)((() => {
            const Eu = (0, Nu.e)();
            Eu !== ju && (ju = Eu, uu(Xu()))
          }));
          return () => {
            Eu(), lu()
          }
        }
      }
    }
    const Nj = {
        players: cj((function() {
          const uu = Ou.f.ids(),
            Eu = {};
          for (const Zu of uu) {
            var ju, su, Uu;
            Eu[Zu] = {
              name: null !== (ju = Ou.f.getName(Zu)) && void 0 !== ju ? ju : null,
              ranks: null !== (su = Ou.f.getSetting(Zu, "ranks")) && void 0 !== su ? su : bj,
              cosmetics: null !== (Uu = (0, Ou.h)(Zu)) && void 0 !== Uu ? Uu : null
            }
          }
          return {
            ids: uu,
            byId: Eu,
            localId: (0, Nu.e)()
          }
        }), {
          rereads: uu => "roster" !== uu.kind || uu.members || uu.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: cj((function() {
          const uu = {};
          for (const Uu of Ou.f.ids()) {
            var Eu, ju, su;
            uu[Uu] = {
              colour: null !== (Eu = Ou.f.getSetting(Uu, "colorInLobbyLeaderboard")) && void 0 !== Eu ? Eu : null,
              values: null !== (ju = Ou.f.getSetting(Uu, "lobbyLeaderboardValues")) && void 0 !== ju ? ju : null,
              tags: null !== (su = Ou.f.getSetting(Uu, "lobbyLeaderboardTags")) && void 0 !== su ? su : null
            }
          }
          return uu
        }), {
          rereads: function(uu) {
            if ("roster" !== uu.kind) return "reset" === uu.kind;
            const {
              members: Eu,
              settings: ju
            } = uu;
            return Eu || ju.has("colorInLobbyLeaderboard") || ju.has("lobbyLeaderboardValues") || ju.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Oj = {
        cosmeticsUpdated: {
          watch: uu => (0, Ou.e)((Eu => {
            if ("cosmetics" !== Eu.kind) return;
            const ju = (0, Nu.e)();
            uu(Eu.updates.map((uu => {
              let {
                QZ: Eu,
                iZ: su,
                WZ: Uu
              } = uu;
              return {
                local: Eu === ju,
                iZ: su,
                WZ: Uu
              }
            })))
          }))
        }
      };
    var Yj = ju(3074),
      hj = ju(1779),
      Dj = ju(701),
      gj = ju(41149);
    let Mj = !1,
      ej = null;
    const Gj = {
      setShopOpen(uu) {
        var Eu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.ShopMenuChanged, (0, vu.K)(uu))
      },
      buyShopItem(uu) {
        var Eu;
        let {
          categoryKey: ju,
          itemKey: su,
          userInput: Uu
        } = uu;
        null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.send(vu.c.ItemBought, {
          categoryKey: ju,
          itemKey: su,
          shopVersion: Mu.e.get("_shopVersion"),
          userInput: Uu
        })
      }
    };
    let pj = !1;
    var wj = ju(4986);
    const Jj = ME.x.LookFrozen | ME.x.ClicksSuppressed;

    function dj(uu, Eu) {
      var ju;
      null !== (ju = (0, Xu.l)()) && void 0 !== ju && ju.send(uu, Eu) || console.warn(`[bloxd-wasm-client] message ${uu} not sent: no live game or the core's command ring is full`)
    }(0, Yu.n)(mu.qb, (uu => {
      const Eu = (0, Ku.g)(mu.qb, uu);
      void 0 !== Eu && fu.h.TY("setDiscordReportKey", Eu)
    }));
    const aj = {
      ignorePlayer(uu) {
        dj(vu.c.IgnoreUser, (0, vu.y)({
          bq: uu
        }))
      },
      reportPlayer(uu) {
        let {
          playerId: Eu,
          chatMsgId: ju,
          ql: su,
          details: Uu
        } = uu;
        dj(vu.c.UserReport, (0, vu.gb)({
          DC: Eu,
          gC: ju,
          ql: su,
          fl: Uu
        }))
      },
      reportWorldCodeChat(uu) {
        let {
          chatMsgId: Eu,
          ql: ju,
          details: su
        } = uu;
        dj(vu.c.UserReport, (0, vu.gb)({
          DC: "",
          gC: Eu,
          ql: ju,
          fl: su
        }))
      },
      requestDiscordReportKey(uu) {
        dj(vu.c.ReqDiscordReportKey, (0, vu.E)(uu))
      },
      reportLobbyOrGame(uu) {
        let {
          target: Eu,
          ql: ju,
          details: su
        } = uu;
        "customGame" === Eu ? dj(vu.c.CustomGameReport, (0, vu.s)({
          ql: ju,
          fl: su
        })) : dj(vu.c.LobbyReport, (0, vu.A)({
          ql: ju,
          fl: su
        }))
      },
      updateMyCosmetic(uu) {
        dj(vu.c.UpdateMyCosmetic, (0, vu.cb)(uu))
      },
      holdEmoteWheel(uu) {
        !uu || GE ? (0, wj.g)(Jj, uu ? Jj : 0) : fu.h.TY("requestEmoteWheelHoldRelease")
      }
    };
    var Pj = ju(41242),
      oj = ju(9409),
      kj = ju(39910);
    const mj = [0, 0, 0],
      vj = [0, 0, 0],
      Kj = [0, 0, 0],
      Vj = {
        blockAtViewPoint(uu) {
          let {
            x: Eu,
            y: ju
          } = uu;
          const su = (0, Xu.l)();
          if (null === su || void 0 === su || !su.renderFrame.hasView) return null;
          const {
            renderFrame: Uu,
            clientApi: Zu,
            api: lu
          } = su;
          let qu = 0;
          return (0, kj.f)(((uu, Eu, ju) => (qu = Zu.getBlockId(uu, Eu, ju), 0 !== qu)), Uu.cameraPosition, (0, kj.j)((uu => eu.u.viewProj(lu.apiView, 0, uu)), Eu, ju, mj), kj.e, vj, Kj) ? {
            pos: [vj[0], vj[1], vj[2]],
            normal: [Kj[0], Kj[1], Kj[2]],
            name: (0, oj.e)(qu)
          } : null
        }
      },
      rj = {
        setBlockHighlight(uu) {
          var Eu;
          null === (Eu = (0, Xu.l)()) || void 0 === Eu || Eu.setBlockHighlight(uu)
        }
      };
    var Qj = ju(1999),
      ij = ju(41138),
      Wj = ju(41247),
      Sj = ju(4679),
      Ij = ju(4647),
      Fj = ju(41252),
      Bj = ju(3475),
      Lj = ju(3482);
    let tj = null,
      xj = null;

    function Tj(uu) {
      const Eu = uu.startsWith(Lj.l),
        [ju, su = ju, Uu = ju] = (Eu ? uu.slice(Lj.l.length) : uu).split(Lj.j);
      return {
        top: ju,
        left: su,
        right: Uu,
        half: Eu
      }
    }

    function Hj(uu) {
      const Eu = null === tj ? void 0 : (0, Bj.b)(uu),
        ju = void 0 === Eu ? 0 : tj.codes[Eu];
      return 0 === ju ? void 0 : tj.pool[ju - 1]
    }
    var Aj = ju(3467),
      nj = ju(4635),
      yj = ju(4675),
      zj = ju(41170),
      Rj = ju(41255);
    const us = "item:";
    let Es = null,
      ss = null,
      Us = null,
      Zs = null,
      Xs = !1,
      ls = !1;

    function qs() {
      return ls || (ls = !0, (0, yj.f)().then((uu => {
        uu && (0, Qj.c)()
      }))), Us ??= Promise.all([(0, Aj.g)(), (xj ??= ju.e(1).then((() => ju(60872))).then((uu => {
        let {
          BLOCK_FACE_RUNS: Eu,
          BLOCK_FACES: ju,
          MAX_FACE_ITEM_ID: su
        } = uu;
        tj = {
          codes: (0, Lj.B)(Eu, su + 1),
          pool: ju.split(Lj.q).map(Tj)
        }
      }), (uu => {
        throw xj = null, uu
      })), xj), (0, Rj.d)(), ju.e(201).then((() => ju(34565)))]).then((uu => {
        let [, , Eu, ju] = uu;
        Eu.followBundledTextures(), Es = Eu, ss = ju, (0, Qj.c)()
      }), (uu => {
        Us = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", uu)
      })), Us
    }

    function fs(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = (0, zj.h)()) || void 0 === ju ? void 0 : ju.textureUrl(uu)) && void 0 !== Eu ? Eu : Es.itemSpriteUrl(uu)
    }

    function Cs(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = (0, zj.h)()) || void 0 === ju ? void 0 : ju.textureUrl(uu)) && void 0 !== Eu ? Eu : Es.blockTextureUrl(uu)
    }

    function bs(uu) {
      var Eu;
      return null !== (Eu = (0, Aj.d)(uu)) && void 0 !== Eu ? Eu : uu
    }

    function cs(uu, Eu) {
      var ju, su, Uu;
      return null !== (ju = null !== (su = null !== (Uu = Cs(uu)) && void 0 !== Uu ? Uu : null === Eu || void 0 === Eu ? void 0 : Eu.rotated[uu]) && void 0 !== su ? su : null === Eu || void 0 === Eu ? void 0 : Eu.animated[uu]) && void 0 !== ju ? ju : Es.notFoundUrl()
    }

    function Ns(uu) {
      return void 0 !== (0, Bj.b)(uu) ? uu : /^[1-9][0-9]*$/.test(uu) ? (0, Bj.c)(Number(uu)) : void 0
    }

    function Os(uu) {
      var Eu;
      if (uu.startsWith(us)) {
        var ju;
        const Eu = (0, Aj.d)(uu.slice(5));
        return null !== (ju = void 0 === Eu ? null : fs(Eu)) && void 0 !== ju ? ju : Es.notFoundUrl()
      }
      return null !== (Eu = Es.particleUrl(uu)) && void 0 !== Eu ? Eu : Es.notFoundUrl()
    }

    function Ys(uu, Eu) {
      return "StairsBlock" === uu ? uu : Eu ? "SlabBlock" : "CubeBlock"
    }
    const hs = {
        async blockIcon(uu) {
          var Eu;
          let {
            name: su,
            size: Uu,
            lineWidth: Zu
          } = uu;
          await qs();
          const Xu = null !== (Eu = Ns(su)) && void 0 !== Eu ? Eu : su,
            lu = (0, yj.c)(Xu, Uu, Zu);
          if (null !== lu) return lu;
          const qu = Hj(Xu),
            fu = (0, Bj.b)(Xu),
            Cu = void 0 === fu || null === ss ? void 0 : ss.itemTypeNameOf(fu);
          if (null === Es || void 0 === qu) return "";
          const bu = [qu.top, qu.left, qu.right].some((uu => null === Cs(uu))),
            cu = bu ? await (Zs ??= ju.e(207).then((() => ju(34634))).then((uu => (Xs && (Xs = !1, (0, Qj.c)()), {
              rotated: uu.rotatedBlockTextures,
              animated: uu.animatedBlockTextures
            })), (uu => (Zs = null, Xs = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", uu), null))), Zs) : null;
          if (bu && null === cu) return "";
          const Nu = {
              top: cs(qu.top, cu),
              left: cs(qu.left, cu),
              right: cs(qu.right, cu),
              itemType: Ys(Cu, qu.half)
            },
            Ou = (0, zj.f)(),
            Yu = 0 === Ou ? Xu : `${Xu}#${Ou}`;
          return (await (0, nj.e)()).drawBlockIconUrl(Yu, Uu, Zu, (() => Nu))
        }
      },
      Ds = {
        itemIcon: function(uu) {
          var Eu, ju, Uu, Zu;
          if (null === Es) return qs(), su.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          if ((0, Ij.h)(uu)) return {
            kind: "icon",
            url: null !== (ju = null !== (Uu = null === (Zu = (0, zj.h)()) || void 0 === Zu ? void 0 : Zu.textureUrl(uu)) && void 0 !== Uu ? Uu : Es.ingameIconUrl(uu)) && void 0 !== ju ? ju : Es.notFoundUrl()
          };
          if (uu.startsWith(Ij.c)) return {
            kind: "icon",
            url: Os(uu.slice(Ij.c.length))
          };
          if (0 === (0, Bj.g)()) return (0, Fj.c)(), su.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          const Xu = null !== (Eu = Ns(uu)) && void 0 !== Eu ? Eu : uu,
            lu = (0, Bj.b)(Xu),
            qu = void 0 === lu ? void 0 : ss.itemTypeNameOf(lu);
          if (void 0 !== Hj(Xu)) return {
            kind: "drawnBlock"
          };
          const fu = function(uu) {
            var Eu;
            return null !== (Eu = fs(bs(uu))) && void 0 !== Eu ? Eu : Es.notFoundUrl()
          }(Xu);
          if ((0, yj.d)(Xu) && ! function(uu) {
              const Eu = (0, zj.h)();
              return null !== Eu && (null !== Eu.textureUrl(bs(uu)) || null !== Eu.modelUrl(uu))
            }(Xu)) return {
            kind: "model",
            url: fu
          };
          if ("Gun" === qu) return {
            kind: "gun",
            url: fu
          };
          if (void 0 !== lu && "GrayscaleArmour" === ss.itemTypeOf(lu) || Object.hasOwn(Sj.e, Xu)) {
            var Cu;
            const Eu = null !== (Cu = (0, Sj.g)(uu)) && void 0 !== Cu ? Cu : (0, Sj.g)(Xu);
            if (Eu) return {
              kind: "item",
              url: fu,
              tint: Eu
            }
          }
          return {
            kind: "item",
            url: fu
          }
        },
        hasIcon: function(uu) {
          return void 0 !== Ns(uu) || (0, Ij.h)(uu) || uu.startsWith(Ij.c)
        },
        isItemName: function(uu) {
          return void 0 !== Ns(uu)
        }
      };
    var gs = ju(636),
      Ms = ju(39917);

    function es(uu) {
      if (null === uu || void 0 === uu || !uu.isCoreRunning) return null;
      const {
        api: Eu,
        chunks: ju,
        items: su,
        tables: Uu
      } = uu;
      return {
        playerFeet() {
          const uu = Eu.bM(Eu.localId);
          return null !== uu && void 0 !== uu && uu.every(Number.isFinite) ? uu : null
        },
        chunkBlocks: uu => ju.isLoaded(uu[0], uu[1], uu[2]) ? (uu, Eu, su) => ju.ul(uu, Eu, su) : null,
        blockName: uu => Uu.nameOfId(uu),
        inventory: () => ({
          slots: su.playerItems().map((uu => uu ? {
            name: uu.name,
            amount: uu.amount
          } : null)),
          heldSlot: su.selectedSlot
        }),
        nearby() {
          const ju = [];
          for (let Uu = 0; Uu < Eu.idStr.length; Uu++) {
            var su;
            const Zu = Eu.idStr[Uu],
              Xu = Eu.serverIds[Uu],
              lu = Eu.kinds[Uu];
            if (null === Zu || Eu.isLocal(Xu) || lu >>> eu.d !== eu.t.Lifeform) continue;
            const qu = Eu.bM(Xu),
              fu = gs.n[lu & eu.h];
            qu && void 0 !== fu && ju.push({
              kind: "Player" === fu ? "player" : fu,
              name: null !== (su = uu.clientApi.getEntityName(Zu)) && void 0 !== su ? su : null,
              position: qu
            })
          }
          return ju
        },
        droppedItems() {
          let uu = 0;
          for (let ju = 0; ju < Eu.idStr.length; ju++) null !== Eu.idStr[ju] && Eu.kinds[ju] >>> eu.d === eu.t.Item && uu++;
          return uu
        }
      }
    }
    const Gs = {
        worldCodeAiChunk: uu => Promise.resolve((0, Ms.b)(es((0, Xu.l)()), uu)),
        worldCodeAiGameState: () => Promise.resolve((0, Ms.f)(es((0, Xu.l)())))
      },
      ps = function(uu) {
        const Eu = Cj(),
          su = Cj(),
          Uu = new Set,
          Zu = new Set,
          Xu = () => {
            var Eu, ju;
            return null !== (Eu = null === (ju = uu.runtime()) || void 0 === ju ? void 0 : ju.currentViewer) && void 0 !== Eu ? Eu : null
          };
        let lu = null,
          qu = null;
        const Cu = (uu, Eu) => ({
            current: uu,
            watch(ju) {
              let su = uu();
              return Eu.add((() => {
                const Eu = uu();
                Eu !== su && (su = Eu, ju(Eu))
              }))
            }
          }),
          cu = uu => ({
            watch: Eu => (uu.add(Eu), () => {
              uu.delete(Eu)
            })
          }),
          Nu = uu => {
            const Eu = Xu(),
              ju = null === Eu || void 0 === Eu ? void 0 : Eu.view;
            Eu && ju && Eu.seek(Math.max(0, Math.min(ju.totalTicks - 1, ju.Tb + uu * bu.Ed)))
          },
          Ou = {
            replay: Cu((() => {
              var uu;
              const Eu = Xu(),
                ju = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null;
              return null === Eu || null === ju || ju.state === bu.od.None ? (lu = null, null) : (lu = (0, yu.o)(lu, {
                id: Eu.id,
                Tb: ju.Tb,
                totalTicks: ju.totalTicks,
                cV: bu.Ed,
                playing: ju.state === bu.od.Playing,
                speed: ju.speed,
                cameraMode: ju.cameraMode,
                freecam: "freecam" === ju.cameraMode
              }), lu)
            }), Eu),
            replayEdits: Cu((() => {
              var uu;
              const Eu = Xu(),
                ju = null !== (uu = null === Eu || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null;
              return null === Eu || null === ju || ju.state === bu.od.None ? (qu = null, null) : (qu = (0, yu.o)(qu, {
                cameraKeyframes: [...Eu.keyframes],
                playbackMark: ju.mark,
                fileName: Eu.fileName,
                unsavedChanges: Eu.unsavedChanges,
                suggestSaveAs: Eu.suggestSaveAs
              }), qu)
            }), Eu),
            replayRecorder: Cu((() => {
              var Eu, ju;
              return null !== (Eu = null === (ju = uu.runtime()) || void 0 === ju ? void 0 : ju.recorder.current) && void 0 !== Eu ? Eu : lj.d.states.replayRecorder.current()
            }), su),
            replayVideoExporting: {
              current: Zj.c,
              watch: uu => (0, fu.l)("replayViewer|videoExportChanged", (() => {
                uu((0, Zj.c)())
              }))
            }
          },
          Yu = {
            replayUiActionRequested: cu(Zu),
            replayViewerRequested: cu(Uu)
          },
          hu = uu => {
            for (const Eu of Uu) Eu(uu)
          },
          Du = () => {
            var su;
            !0 === (null === (su = Xu()) || void 0 === su ? void 0 : su.isOpen) && Promise.all([ju.e(98), ju.e(67)]).then((() => ju(60868))).then((ju => {
              let {
                startWasmReplayVideoExport: su
              } = ju;
              return su({
                viewer: Xu,
                canvas: () => {
                  var Eu, ju;
                  return null !== (Eu = null === (ju = uu.canvas) || void 0 === ju ? void 0 : ju.call(uu)) && void 0 !== Eu ? Eu : null
                },
                watchViewer: Eu.add,
                requestViewer: hu
              })
            }), (uu => {
              console.error("Couldn't load the video export", uu), Xj.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((uu => {
              console.error("The video export failed", uu)
            }))
          },
          gu = {
            replayAction(uu) {
              if ((0, Zj.c)()) return;
              const Eu = Xu();
              switch (uu) {
                case "replaySkipBack":
                  Nu(-1);
                  break;
                case "replaySkipForward":
                  Nu(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Eu && void 0 !== Eu && Eu.view && Eu.setSpeed((0, Uj.l)(Eu.view.speed, "replaySpeedUp" === uu ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Eu || void 0 === Eu || Eu.addKeyframe()
              }
            },
            setReplayPlaying(uu) {
              var Eu, ju;
              (0, Zj.c)() || (uu ? null === (Eu = Xu()) || void 0 === Eu || Eu.play() : null === (ju = Xu()) || void 0 === ju || ju.pause())
            },
            seekReplay(uu) {
              var Eu;
              let {
                Tb: ju,
                ignorePlaybackMark: su
              } = uu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.seek(ju, null !== su && void 0 !== su && su)
            },
            setReplayCameraMode(uu) {
              var Eu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.setCameraMode(uu)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(uu) {
              var Eu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.setKeyframe(uu)
            },
            moveReplayCameraKeyframe(uu) {
              var Eu;
              let {
                from: ju,
                to: su
              } = uu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.moveKeyframe(ju, su)
            },
            deleteReplayCameraKeyframes(uu) {
              var Eu;
              let {
                start: ju,
                end: su
              } = uu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.deleteKeyframes(ju, su)
            },
            setReplayPlaybackMark(uu) {
              var Eu;
              null === (Eu = Xu()) || void 0 === Eu || Eu.setMark(uu)
            },
            cropReplay(uu) {
              var Eu, ju;
              let {
                start: su,
                end: Uu
              } = uu;
              return !(0, Zj.c)() && (null !== (Eu = null === (ju = Xu()) || void 0 === ju ? void 0 : ju.crop(su, Uu)) && void 0 !== Eu && Eu)
            },
            holdReplayForShaderPackFailure(uu) {
              const Eu = Xu();
              Eu && (Eu.holdForShaderPackFailure(), function(uu) {
                ju.e(117).then((() => ju(39525))).then((Eu => {
                  let {
                    shaderPackPage: ju
                  } = Eu;
                  ju.block(uu)
                })).catch((uu => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", uu)
                }))
              }(uu))
            },
            exportReplayVideo() {
              Du()
            },
            toggleRecording() {
              var Eu;
              null === (Eu = uu.runtime()) || void 0 === Eu || Eu.recorder.toggleRecording()
            },
            saveClip() {
              var Eu;
              null === (Eu = uu.runtime()) || void 0 === Eu || Eu.recorder.saveClip()
            },
            setRecorderPrefs(Eu) {
              var ju;
              let {
                clipping: su,
                clipSeconds: Uu
              } = Eu;
              null === (ju = uu.runtime()) || void 0 === ju || ju.recorder.setPrefs(su, Uu)
            },
            setReplayViewerOpen(Eu) {
              var ju;
              (0, hE.d)(Eu) && (null === (ju = uu.runtime()) || void 0 === ju || ju.recorder.viewerShown(Eu))
            },
            recordFlyingMiddleText(Eu) {
              var ju;
              let {
                content: su,
                IZ: Uu,
                angle: Zu,
                FZ: Xu
              } = Eu;
              null === (ju = uu.runtime()) || void 0 === ju || ju.recorder.recordFlyingText(JSON.stringify(su), Uu, Zu, Xu)
            },
            dragReplayCamera(Eu) {
              var ju;
              let {
                dx: su,
                dy: Uu
              } = Eu;
              null === (ju = uu.freecam()) || void 0 === ju || ju.drag(su, Uu)
            },
            moveReplayFreecam(Eu) {
              var ju;
              null === (ju = uu.freecam()) || void 0 === ju || ju.move(Eu)
            },
            holdReplayFreecamVertical(Eu) {
              var ju;
              let {
                action: su,
                dl: Uu
              } = Eu;
              null === (ju = uu.freecam()) || void 0 === ju || ju.holdVertical(su, Uu)
            }
          },
          Mu = uu => {
            var Eu;
            const ju = Xu(),
              su = null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.view) && void 0 !== Eu ? Eu : null;
            qj.has(uu) ? (uu => {
              for (const Eu of Zu) Eu(uu)
            })(uu) : fj.has(uu) ? gu.replayAction(uu) : "replayPlayPause" === uu ? ju && su && su.state !== bu.od.None && gu.setReplayPlaying(su.state !== bu.od.Playing) : "replayChangeCameraMode" === uu ? null === ju || void 0 === ju || ju.cycleCameraMode() : "replayExit" === uu ? !0 === (null === ju || void 0 === ju ? void 0 : ju.inPlayback) && (0, VE.i)("/") : "replayExportVideo" === uu && Du()
          };
        let eu = !1;
        return {
          states: Ou,
          events: Yu,
          commands: gu,
          lookups: {
            replayCamera() {
              var Eu, ju, su;
              return !0 !== (null === (Eu = Xu()) || void 0 === Eu ? void 0 : Eu.isOpen) ? null : null !== (ju = null === (su = uu.cameraView) || void 0 === su ? void 0 : su.call(uu)) && void 0 !== ju ? ju : null
            },
            leaveGameReloadsPage() {
              var uu;
              return !0 === (null === (uu = Xu()) || void 0 === uu ? void 0 : uu.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var uu;
              const ju = !0 === (null === (uu = Xu()) || void 0 === uu ? void 0 : uu.inPlayback);
              ju !== eu && (eu = ju, fu.h.TY("connectedGameChanged")), Eu.fire()
            },
            recorderChanged: su.fire,
            keyDown: uu => {
              var Eu;
              switch (uu) {
                case "recordGame":
                  return void gu.toggleRecording();
                case "recordClip":
                  return void((0, hE.c)() || gu.saveClip())
              }(0, Zj.c)() || ("replayViewerOpen" !== uu ? uu.startsWith("replay") && ((0, hE.c)() || !0 === (null === (Eu = Xu()) || void 0 === Eu ? void 0 : Eu.inPlayback)) && Mu(uu) : hu("toggle"))
            }
          }
        }
      }({
        runtime: Uu.j,
        cameraView: () => {
          var uu;
          const Eu = null === (uu = (0, Xu.l)()) || void 0 === uu ? void 0 : uu.renderFrame;
          if (!Eu) return null;
          const [ju, su, Uu] = Eu.cameraPosition, [Zu, lu, qu] = Eu.cameraDirection;
          return {
            position: [ju, su, Uu],
            direction: [Zu, lu, qu]
          }
        },
        canvas: () => {
          var uu, Eu, ju;
          return null !== (uu = null === (Eu = (ju = (0, Zu.H)()).canvas) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : null
        },
        freecam: Uu.h
      }),
      ws = {
        states: {
          ...fE,
          ...NE.l,
          ...ps.states,
          ...Nj,
          ...Fu
        },
        events: {
          ...CE,
          ...hu,
          ...NE.i,
          ...au.b,
          ...Pj.j,
          ...ps.events,
          ...Oj,
          ...du.k
        },
        commands: {
          ...Ju,
          ...bE,
          ...Du,
          ...NE.e,
          ...yE,
          ...aj,
          ...du.h,
          ...iE,
          ...ps.commands,
          ...Gj,
          ...Bu,
          ...rj,
          ...OE
        },
        queries: {
          ...NE.j,
          ...Gs
        },
        lookups: {
          ...cE,
          ...ru,
          ...Pj.l,
          ...ps.lookups,
          ...wu,
          ...sj,
          ...Vj,
          ...Lu
        }
      };

    function ds() {
      (0, lu.d)(Yu.q), (0, Uu.n)(ps.feed), (0, au.c)(), zE || (zE = !0, (0, Yu.n)(mu.i, (uu => {
        const Eu = (0, Ku.g)(mu.i, uu);
        "string" === typeof Eu && Promise.resolve().then((() => ju(3847))).then((uu => {
          let {
            onCosmeticPackGranted: ju
          } = uu;
          ju(Eu)
        }))
      })), (0, Yu.n)(mu.kb, (uu => {
        const Eu = (0, Ku.g)(mu.kb, uu);
        "number" === typeof Eu && fu.h.TY("serverUpdating", Date.now() + Eu, !0)
      })), (0, Yu.n)(mu.J, (uu => {
        const Eu = (0, Ku.g)(mu.J, uu);
        if ((0, Ku.e)(Eu)) {
          const {
            HU: uu,
            AU: ju
          } = Eu;
          (0, AE.b)({
            HU: "string" === typeof uu ? uu : null,
            AU: "string" === typeof ju ? ju : null
          })
        }
      })), (0, Yu.n)(Cu.mc.NewUiRequest, (uu => {
        const Eu = (0, Ku.i)(uu);
        (0, Ku.e)(Eu) && "number" === typeof Eu.id && (0, Ku.e)(Eu.clientParameters) && (0, nE.g)(Eu.id, Eu.clientParameters)
      })), (0, Yu.n)(mu.ab, (uu => {
        const Eu = (0, Ku.g)(mu.ab, uu);
        "number" === typeof Eu && (0, nE.i)(Eu)
      })), (0, Yu.k)(nE.e), (0, Yu.n)(Cu.mc.UiRequestPopup, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu) && "number" === typeof Eu.id && "string" === typeof Eu.text) {
          const uu = Eu.id;
          (0, nE.k)(uu, Eu.text, !0 === Eu.destructive, (Eu => {
            yE.answerUiRequest({
              id: uu,
              eC: Eu
            })
          }))
        }
      })), (0, Yu.n)(Cu.mc.TopRightHelper, (uu => {
        const Eu = (0, Ku.i)(uu);
        void 0 !== Eu && fu.h.TY("TopRightHelper", Eu, !0)
      })), (0, Yu.n)(Cu.mc.TaskProgress, (uu => {
        const Eu = (0, Ku.i)(uu);
        (0, Ku.e)(Eu) && "string" === typeof Eu.taskId && "number" === typeof Eu.progress && (0, HE.c)({
          taskId: Eu.taskId,
          progress: Eu.progress
        })
      }))), pj || (pj = !0, (0, Yu.n)(mu.s, (uu => {
        const Eu = (0, Ku.g)(mu.s, uu);
        (0, Ku.e)(Eu) && fu.h.TY("showShopFromServer", {
          toggle: Eu.qu,
          fu: Eu.fu
        }, !0)
      })), (0, Yu.n)(Cu.mc.OverShopInfo, (uu => {
        const Eu = (0, Ku.i)(uu);
        (0, Ku.e)(Eu) && fu.h.TY("overShopInfo", Eu.info, !0)
      })), (0, Yu.n)(Cu.mc.ShowShopTutorial, (() => {
        fu.h.TY("showShopTutorial", null, !0)
      }))), Mj || (Mj = !0, (0, Yu.i)((() => {
        var uu;
        (0, Yj.resetLeaveEvents)(), null === (uu = ej) || void 0 === uu || uu(), ej = (0, Yu.e)() ? (0, Dj.j)(Yu.e) : null, (0, Yu.e)() || fu.h.ND()
      })), (0, Yu.n)(Cu.mc.SetCookie, (uu => {
        const Eu = (0, Ku.i)(uu),
          ju = (0, VE.b)().gameNameWithVariation;
        (0, Ku.e)(Eu) && "string" === typeof Eu.key && null !== ju && (0, hj.setCookie)(ju, Eu.key, Eu.value)
      })), (0, Yu.n)(Cu.mc.LeaveValues, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu) && "string" === typeof Eu.leaveEventType) {
          const {
            leaveEventType: uu,
            category: ju,
            subCategory: su,
            value: Uu
          } = Eu;
          (0, Yj.updateLeaveValue)({
            leaveEventType: uu,
            category: ju,
            subCategory: su,
            value: Uu
          })
        }
      })), (0, Yu.n)(Cu.mc.CustomAnalyticsEvent, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu) && "string" === typeof Eu.cat1) {
          const {
            cat1: uu,
            cat2: ju,
            cat3: su,
            value: Uu
          } = Eu;
          (0, Yj.logCustomAnalyticsEvent)({
            cat1: uu,
            cat2: ju,
            cat3: su,
            value: Uu
          })
        }
      })), (0, Yu.n)(Cu.mc.ProgressionEvent, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu)) {
          const {
            type: uu,
            location1: ju,
            location2: su,
            location3: Uu,
            score: Zu
          } = Eu;
          (0, Yj.logProgressionEvent)({
            type: uu,
            location1: ju,
            location2: su,
            location3: Uu,
            score: Zu
          })
        }
      })), (0, Yu.n)(Cu.mc.ResourceEvent, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu)) {
          const {
            type: uu,
            resourceType: ju,
            amount: su,
            category: Uu,
            itemName: Zu
          } = Eu;
          (0, Yj.logResourceEvent)({
            type: uu,
            resourceType: ju,
            amount: su,
            category: Uu,
            itemName: Zu
          })
        }
      })), (0, Yu.n)(Cu.mc.LeaderboardResponse, (uu => {
        const Eu = (0, Ku.i)(uu);
        if ((0, Ku.e)(Eu)) {
          const {
            category: uu,
            timeframe: ju,
            data: su
          } = Eu;
          fu.h.TY("leaderboardResponse", {
            category: uu,
            timeframe: ju,
            data: su
          })
        }
      })), (0, Yu.n)(mu.z, (uu => {
        const Eu = (0, Ku.g)(mu.z, uu);
        "string" === typeof Eu && (0, gj.c)(uu.conn, Eu)
      })), (0, Yu.n)(mu.C, (uu => {
        const Eu = (0, Ku.g)(mu.C, uu);
        "string" === typeof Eu && console.error(`[logErrorToConsole]: ${Eu}`)
      }))), iu(), (0, Pj.b)(), QE || (QE = !0, (0, Yu.n)(mu.h, (uu => {
        const Eu = (0, Ku.g)(mu.h, uu);
        void 0 !== Eu && (0, rE.l)(Eu)
      }))), TE(), oE(), Tu || (Tu = !0, (0, Zu.t)(Hu)), su.gameBridge.attach(ws), (0, su.installPageSources)({
        commands: {
          ...su.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: ij.h
        },
        queries: hs,
        lookups: {
          ...su.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Ds,
          rM: ij.c,
          drawCallStats: Wj.h
        }
      }), (0, Qj.c)(), qs()
    }
  },
  41170: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => qu,
      h: () => lu,
      l: () => fu
    });
    var su = ju(1999);
    let Uu = null,
      Zu = 0;
    const Xu = new Set;

    function lu() {
      return Uu
    }

    function qu() {
      return Zu
    }

    function fu(uu) {
      Uu = uu, Zu++, (0, su.c)();
      for (const Eu of Xu) Eu()
    }

    function Cu(uu) {
      Xu.add(uu)
    }
  },
  41255: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      d: () => lu
    });
    var su = ju(41264);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Uu ??= ju.e(62).then((() => ju(60874))).catch((uu => {
        throw Uu = null, uu
      })), Uu
    }

    function lu() {
      return Zu ??= Promise.all([Xu(), (0, su.f)()]).then((uu => {
        let [Eu] = uu;
        return Eu
      }), (uu => {
        throw Zu = null, uu
      })), Zu
    }
  },
  37467: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  39344: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      i: () => Uu
    });
    const su = ["description", "label"];

    function Uu(uu) {
      const Eu = uu.type;
      return {
        type: Eu,
        params: uu[Eu]
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);