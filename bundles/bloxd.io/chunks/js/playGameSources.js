export const id = 47;
export const ids = [47];
export const modules = {
  39840: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      f: () => Ip,
      g: () => op
    });
    const Op = 6e3;

    function op(pp, ip) {
      return [Math.floor(pp[0] / ip) * ip, Math.floor(pp[1] / ip) * ip, Math.floor(pp[2] / ip) * ip]
    }

    function Ip(pp) {
      const ip = (null !== pp && void 0 !== pp ? pp : "").match(/-?\d+(?:\.\d+)?/g);
      return ip && ip.length >= 3 ? [Number(ip[0]), Number(ip[1]), Number(ip[2])] : null
    }

    function Sp(pp, ip) {
      return pp === ip ? String(pp) : `${pp}-${ip}`
    }

    function xp(pp, ip, cp, Op) {
      const op = [];
      let Ip = new Map;
      for (let Sp = pp[2]; Sp < pp[2] + ip; Sp++) {
        const xp = new Map;
        let Lp = pp[0];
        for (; Lp < pp[0] + ip;) {
          const op = Op(Lp, cp, Sp);
          let Yp = Lp;
          for (; Yp + 1 < pp[0] + ip && Op(Yp + 1, cp, Sp) === op;) Yp++;
          if (null !== op) {
            const pp = `${Lp} ${Yp} ${op}`,
              ip = Ip.get(pp);
            ip ? (ip.z1 = Sp, Ip.delete(pp), xp.set(pp, ip)) : xp.set(pp, {
              x0: Lp,
              x1: Yp,
              z0: Sp,
              z1: Sp,
              name: op
            })
          }
          Lp = Yp + 1
        }
        op.push(...Ip.values()), Ip = xp
      }
      return op.push(...Ip.values()), op.sort(((pp, ip) => pp.z0 - ip.z0 || pp.x0 - ip.x0)).map((pp => `x${Sp(pp.x0,pp.x1)} z${Sp(pp.z0,pp.z1)} ${pp.name}`))
    }

    function Lp(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Op;
      const Lp = [pp[0] + ip - 1, pp[1] + ip - 1, pp[2] + ip - 1],
        Yp = null !== op && op.every(((ip, cp) => Math.floor(ip) >= pp[cp] && Math.floor(ip) <= Lp[cp])),
        Dp = [`The chunk from ${pp.join(" ")} to ${Lp.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== op && Dp.push(`The player's feet are at ${op.map(Math.floor).join(" ")}, ${Yp?"in this chunk":"outside this chunk"}.`);
      const Ap = [];
      for (let Op = pp[1]; Op <= Lp[1]; Op++) {
        const op = xp(pp, ip, Op, cp).join("; "),
          Ip = Ap[Ap.length - 1];
        (null === Ip || void 0 === Ip ? void 0 : Ip.boxes) === op ? Ip.to = Op : Ap.push({
          from: Op,
          to: Op,
          boxes: op
        })
      }
      const Pp = Ap.filter((pp => "" !== pp.boxes));
      0 === Pp.length && Dp.push("It is all air.");
      let Wp = Dp.join("\n").length;
      for (const Op of Pp) {
        const pp = `y${Sp(Op.from,Op.to)}: ${Op.boxes}`;
        if (Wp += pp.length + 1, Wp > Ip) {
          Dp.push(`Cut short: the layers from y${Op.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Dp.push(pp)
      }
      return Dp.join("\n")
    }
  },
  8909: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(25);

    function op() {
      return !Op.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37164: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      f: () => Ip,
      h: () => op
    });
    const Op = [.25, .5, 1, 2, 4, 8, 16];

    function op(pp, ip) {
      const cp = Op;
      let op = cp.indexOf(pp);
      return -1 === op && (op = cp.findIndex((ip => ip >= pp)), -1 === op && (op = cp.length - 1)), "up" === ip ? cp[Math.min(op + 1, cp.length - 1)] : cp[Math.max(op - 1, 0)]
    }

    function Ip(pp) {
      return pp <= Op[0]
    }

    function Sp(pp) {
      return pp >= Op[Op.length - 1]
    }
  },
  39261: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      e: () => Sp
    });
    var Op = cp(34);
    let op = !1;

    function Ip() {
      return op
    }

    function Sp(pp) {
      op !== pp && (op = pp, Op.m.GA("replayViewer|videoExportChanged"))
    }
  },
  36693: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Ip
    });
    let Op = !1;

    function op() {
      return Op
    }

    function Ip(pp) {
      return Op !== pp && (Op = pp, !0)
    }
  },
  39208: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(34),
      op = cp(1982);

    function Ip(pp) {
      let {
        taskId: ip,
        progress: cp
      } = pp;
      const Op = op.c.get("_tasks");
      null !== Op && void 0 !== Op && Op[ip] && op.c.apply({
        _tasks: {
          ...Op,
          [ip]: {
            ...Op[ip],
            progress: cp
          }
        }
      })
    }
    Op.m.subscribe("clientTaskProgress", (pp => {
      Ip(pp)
    }))
  },
  39809: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      g: () => yp,
      k: () => Yp,
      o: () => Ap,
      q: () => Lp,
      t: () => Sp,
      u: () => Dp,
      x: () => Up
    });
    var Op = cp(1982),
      op = cp(34),
      Ip = cp(1996);
    const Sp = (0, Ip.p)((function() {
        var pp, ip, cp, op;
        return {
          health: null !== (pp = Op.c.get("_health")) && void 0 !== pp ? pp : null,
          maxHealth: null !== (ip = Op.c.get("_totalMaxHealth")) && void 0 !== ip ? ip : null,
          shield: null !== (cp = Op.c.get("_shield")) && void 0 !== cp ? cp : null,
          maxShield: null !== (op = Op.c.get("maxShield")) && void 0 !== op ? op : null
        }
      }), [], (0, Ip.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      xp = [{
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

    function Lp(pp, ip) {
      return xp[(pp ? 2 : 0) + (ip ? 1 : 0)]
    }
    const Yp = (0, Ip.p)((function() {
      var pp;
      return null !== (pp = Op.c.get("_aura")) && void 0 !== pp ? pp : null
    }), [], (0, Ip.l)("_aura"));

    function Dp(pp) {
      return {
        watch: ip => (0, op.n)("shotPlayer", (cp => {
          let {
            playerId: Op,
            damage: op,
            wasCrit: Ip,
            distance: Sp
          } = cp;
          pp(Op) && ip({
            damage: op,
            wasCrit: Ip,
            distance: Sp
          })
        }))
      }
    }

    function Ap(pp) {
      return (0, Ip.e)("chat", (ip => {
        let {
          serverChatMsgId: cp,
          content: Op,
          chatterEId: op
        } = ip;
        return {
          serverChatMsgId: null !== cp && void 0 !== cp ? cp : null,
          content: Op,
          author: op ? pp(op) : null
        }
      }))
    }
    class Pp {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const cp = this.shown;
        return pp !== this.needed && (this.needed = pp, this.neededSince = ip, null === pp && (this.shown = null)), this.shown !== this.needed && ip - this.neededSince > 200 && (this.shown = this.needed), this.shown !== cp
      }
    }

    function Wp(pp) {
      return [{
        translationKey: `touchKeys:${pp}`
      }]
    }
    const yp = {
      open: Wp("open"),
      close: Wp("close"),
      milk: Wp("milk"),
      shear: Wp("shear"),
      tame: Wp("tame"),
      feed: Wp("feed"),
      ride: Wp("ride")
    };

    function Up(pp) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: pp
      }]
    }
  },
  41262: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      h: () => Sp
    });
    var Op = cp(3405);
    let op = null,
      Ip = null;

    function Sp() {
      return Ip ??= cp.e(216).then((() => cp(36527))).then((pp => {
        let {
          ITEM_SPRITES: ip,
          ITEM_SPRITES_WITHOUT_FILE: cp,
          ITEM_FILES_WITHOUT_SPRITE: Ip
        } = pp;
        op = function(pp, ip, cp) {
          const op = new Set,
            Ip = (0, Op.w)(ip);
          let Sp = 0;
          for (const [Op, xp] of pp.entries()) Op === Ip[Sp] ? Sp++ : op.add(xp);
          if ("" !== cp)
            for (const xp of cp.split(Op.p)) op.add(xp);
          return op
        }(ip.split(Op.p), cp, Ip)
      }), (pp => {
        throw Ip = null, pp
      })), Ip
    }

    function xp(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = op) || void 0 === cp ? void 0 : cp.has(pp)) && void 0 !== ip && ip
    }
  },
  39831: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      d: () => Ip,
      e: () => op
    });
    const Op = 128;

    function op(pp, ip, cp, Op) {
      const op = 2 * ip - 1,
        Ip = 1 - 2 * cp,
        Sp = pp(0) - op * pp(3),
        xp = pp(4) - op * pp(7),
        Lp = pp(8) - op * pp(11),
        Yp = pp(1) - Ip * pp(3),
        Dp = pp(5) - Ip * pp(7),
        Ap = pp(9) - Ip * pp(11);
      Op[0] = xp * Ap - Lp * Dp, Op[1] = Lp * Yp - Sp * Ap, Op[2] = Sp * Dp - xp * Yp;
      const Pp = Op[0] * pp(3) + Op[1] * pp(7) + Op[2] * pp(11) < 0 ? -1 : 1,
        Wp = Math.hypot(Op[0], Op[1], Op[2]) * Pp;
      return Op[0] /= Wp, Op[1] /= Wp, Op[2] /= Wp, Op
    }

    function Ip(pp, ip, cp, Op, op, Ip) {
      const Sp = [Math.floor(ip[0]), Math.floor(ip[1]), Math.floor(ip[2])],
        xp = [0, 0, 0],
        Lp = [1 / 0, 1 / 0, 1 / 0],
        Yp = [1 / 0, 1 / 0, 1 / 0];
      for (let Pp = 0; Pp < 3; Pp++) xp[Pp] = Math.sign(cp[Pp]), 0 !== xp[Pp] && (Yp[Pp] = Math.abs(1 / cp[Pp]), Lp[Pp] = (Sp[Pp] + (xp[Pp] > 0 ? 1 : 0) - ip[Pp]) / cp[Pp]);
      let Dp = 0,
        Ap = Math.abs(cp[0]) > Math.abs(cp[1]) ? 0 : 1;
      for (Math.abs(cp[2]) > Math.abs(cp[Ap]) && (Ap = 2); Dp <= Op;) {
        if (pp(Sp[0], Sp[1], Sp[2])) return op[0] = Sp[0], op[1] = Sp[1], op[2] = Sp[2], Ip[0] = 0, Ip[1] = 0, Ip[2] = 0, Ip[Ap] = -xp[Ap], !0;
        Ap = Lp[0] < Lp[1] ? 0 : 1, Lp[2] < Lp[Ap] && (Ap = 2), Dp = Lp[Ap], Sp[Ap] += xp[Ap], Lp[Ap] += Yp[Ap]
      }
      return !1
    }
  },
  39802: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    var Op = cp(1927);

    function op(pp, ip, cp) {
      return (0, Op.s)(pp, ip) < cp
    }
  },
  8858: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(1268);

    function op(pp, ip) {
      var cp, op;
      try {
        const cp = (0, Op.b)();
        if ("function" === typeof cp) {
          const Op = new cp(pp, ip);
          if (Op.type === pp) return Op
        }
      } catch {}
      const Ip = document.createEvent("Event");
      return Ip.initEvent(pp, null !== (cp = null === ip || void 0 === ip ? void 0 : ip.bubbles) && void 0 !== cp && cp, null !== (op = null === ip || void 0 === ip ? void 0 : ip.cancelable) && void 0 !== op && op), Ip
    }
  },
  36677: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      e: () => Dp,
      g: () => Wp,
      j: () => Ap
    });
    var Op = cp(337),
      op = cp(667),
      Ip = cp(676),
      Sp = cp(44);
    const xp = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Lp = "playSessionGameNameWithVariation",
      Yp = "wasMatchmakePlayer";

    function Dp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      (0, Ip.h)(pp, xp)
    }

    function Ap() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).setItem(Yp, !0)
    }

    function Pp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      return (0, Ip.c)(pp, xp)
    }

    function Wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.l;
      const cp = (0, Ip.c)(ip, xp),
        Dp = function(pp) {
          const ip = pp.getItem(Lp);
          return "string" !== typeof ip ? null : ip
        }(ip),
        Ap = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).getItem(Yp)
        }(ip);
      let Pp;
      return Pp = null !== cp && null !== Dp && (0, Ip.f)(ip, xp) && function(pp, ip, cp) {
          const op = (0, Op.Mb)(pp),
            Ip = (0, Op.Mb)(ip),
            Sp = (0, Op.Ib)(pp),
            xp = (0, Op.Ib)(ip);
          return !(op !== Ip || !cp) || op === Ip && Sp === xp
        }(Dp, pp, Ap) ? cp : (0, op.e)(), (0, Ip.k)(ip, xp, Pp), ip.setItem(Lp, pp),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).removeItem(Yp)
        }(ip), Pp
    }
  },
  39193: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp
    });
    var Op = cp(1234),
      op = cp(1356),
      Ip = cp(25),
      Sp = cp(1334),
      xp = cp(1349),
      Lp = cp(1538),
      Yp = cp(36677);

    function Dp(pp) {
      let {
        xI: ip,
        LI: cp
      } = pp;
      const Dp = null !== ip && void 0 !== ip ? ip : (0, xp.d)().gameNameWithVariation;
      (0, Op.H)(Dp) && ((0, Yp.j)(), (0, Sp.Z)((() => {
        console.log("Received matchmaking order from game server to game", ip), (0, Ip.k)("inGameReplay"), (0, Lp.navigatePreserveSearch)((0, op.c)(Dp, null !== cp && void 0 !== cp ? cp : void 0))
      }), "video_start"))
    }
  },
  39368: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(34),
      op = cp(2012);

    function Ip(pp) {
      var ip, cp;
      const Ip = (0, op.l)(null !== (ip = null === (cp = op.t.toggleFreeCam) || void 0 === cp ? void 0 : cp[0]) && void 0 !== ip ? ip : null);
      Op.m.GA("showBottomMessage", {
        message: `Free Camera ${pp?"Enabled":"Disabled"}${Ip?` - Press ${Ip} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39190: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      d: () => Sp,
      h: () => xp,
      j: () => Yp
    });
    var Op = cp(34),
      op = cp(1372);
    const Ip = new Map;

    function Sp(pp, ip) {
      Op.m.GA("newUiRequest", {
        id: pp,
        clientParameters: ip
      }, !0)
    }

    function xp(pp) {
      Op.m.GA("removeUiRequest", pp, !0);
      const ip = Ip.get(pp);
      ip && (ip.tearDownNotification(), Ip.delete(pp))
    }

    function Lp() {
      Op.m.GA("clearUiRequests");
      for (const pp of Ip.values()) pp.tearDownNotification();
      Ip.clear()
    }

    function Yp(pp, ip, cp, Op) {
      const Sp = op.NotificationProvider.showPromptPopup({
        title: ip,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: cp,
        unlockPointerKey: "uiRequestPopup"
      });
      Ip.set(pp, Sp), Sp.getResult().then((ip => {
        Ip.delete(pp), "notificationTornDown" !== ip && Op(ip)
      }))
    }
  },
  39834: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap,
      f: () => Pp
    });
    var Op = cp(195),
      op = cp(39840);
    const Ip = 20;

    function Sp(pp) {
      return pp.map(Math.floor).join(" ")
    }

    function xp(pp) {
      return null === pp.amount || 1 === pp.amount ? pp.name : `${pp.amount} ${pp.name}`
    }
    var Lp = cp(39842),
      Yp = cp(1982),
      Dp = cp(1349);

    function Ap(pp, ip) {
      if (!pp) return Lp.c;
      const cp = pp.playerFeet();
      if (!cp) return "The player isn't in the world yet, so no blocks can be seen.";
      const Ip = Op.g.Qy,
        Sp = (0, op.g)(null !== ip && void 0 !== ip ? ip : cp, Ip),
        xp = pp.chunkBlocks(Sp);
      return xp ? (0, op.b)(Sp, Ip, ((ip, cp, Op) => {
        const op = xp(ip, cp, Op);
        return 0 === op ? null : pp.blockName(op).split("|")[0]
      }), cp) : `The chunk from ${Sp.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${cp.map(Math.floor).join(" ")}.`
    }

    function Pp(pp) {
      var ip, cp, Op;
      if (!pp) return Lp.g;
      const op = pp.playerFeet();
      if (!op) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Ap,
        heldSlot: Pp
      } = pp.inventory();
      return function(pp) {
        const ip = [];
        null !== pp.game && ip.push(`Game: ${pp.game}.`);
        const cp = null === pp.health ? "" : `, health ${Math.round(pp.health)}${null===pp.maxHealth?"":` of ${Math.round(pp.maxHealth)}`}`;
        ip.push(`The player (the creator) stands at ${Sp(pp.position)}${cp}, ${pp.creative?"in":"not in"} creative mode.`);
        const Op = pp.slots[pp.heldSlot];
        ip.push(Op ? `Holding (slot ${pp.heldSlot}): ${xp(Op)}.` : `Holding nothing (slot ${pp.heldSlot} is empty).`);
        const op = pp.slots.flatMap(((pp, ip) => pp ? [`slot ${ip}: ${xp(pp)}`] : []));
        ip.push(op.length > 0 ? `Inventory: ${op.join(", ")}.` : "Inventory: empty.");
        const Lp = ip => Math.hypot(ip.position[0] - pp.position[0], ip.position[1] - pp.position[1], ip.position[2] - pp.position[2]),
          Yp = [...pp.nearby].sort(((pp, ip) => Lp(pp) - Lp(ip)));
        if (0 === Yp.length) ip.push("No other players or mobs are near enough to see.");
        else {
          ip.push("Near them, nearest first:");
          for (const pp of Yp.slice(0, Ip)) {
            const cp = "player" === pp.kind ? `player "${pp.name||"?"}"` : pp.name && pp.name !== pp.kind ? `${pp.kind} "${pp.name}"` : pp.kind,
              Op = Math.round(Lp(pp));
            ip.push(`- ${cp} at ${Sp(pp.position)}, ${Op} block${1===Op?"":"s"} away`)
          }
          Yp.length > Ip && ip.push(`- and ${Yp.length-Ip} more further away`)
        }
        return pp.droppedItems > 0 && ip.push(`${pp.droppedItems} dropped item${1===pp.droppedItems?" is":"s are"} on the ground nearby.`), ip.join("\n")
      }({
        game: null !== (ip = (0, Dp.d)().gameNameWithVariation) && void 0 !== ip ? ip : null,
        position: op,
        health: null !== (cp = Yp.c.get("_health")) && void 0 !== cp ? cp : null,
        maxHealth: null !== (Op = Yp.c.get("_totalMaxHealth")) && void 0 !== Op ? Op : null,
        creative: !0 === Yp.c.get("creative"),
        heldSlot: Pp,
        slots: Ap,
        nearby: pp.nearby(),
        droppedItems: pp.droppedItems()
      })
    }
  },
  41079: (pp, ip, cp) => {
    cp.d(ip, {
      $: () => lp,
      C: () => Jp,
      G: () => Qp,
      H: () => sp,
      I: () => Np,
      K: () => Ep,
      O: () => Bp,
      S: () => Cp,
      T: () => gp,
      X: () => Fp,
      d: () => Gp,
      f: () => fp,
      h: () => qp,
      j: () => rp,
      n: () => Mp,
      r: () => Rp,
      u: () => Tp,
      y: () => Xp
    });
    var Op = cp(1419),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(2457),
      xp = cp(4927),
      Lp = cp(4886);
    let Yp, Dp = !1,
      Ap = !1,
      Pp = !1,
      Wp = !1;
    const yp = 1300,
      Up = 3e3;
    let wp = 0,
      vp = !1,
      tp = !1,
      Hp = 0;
    const dp = 2;
    let ep = !1,
      jp = !1;
    const kp = new Set,
      mp = new Set;

    function Rp() {
      return Dp
    }

    function qp() {
      return tp
    }

    function Mp() {
      return jp
    }

    function Cp() {
      return (0, Ip.t)() && !jp
    }

    function Ep(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (pp !== jp) {
        jp = pp;
        for (const pp of [...mp]) pp(jp);
        ip && Fp()
      }
    }

    function Xp(pp) {
      return mp.add(pp), () => {
        mp.delete(pp)
      }
    }

    function lp() {
      (0, xp.g)(Sp.C.Menu, (0, Ip.t)() ? 0 : Sp.C.Menu)
    }

    function Qp() {
      tp = !1, Hp = 0, lp(), Fp()
    }

    function Jp(pp) {
      return kp.add(pp), () => {
        kp.delete(pp)
      }
    }

    function Bp(pp) {
      Ap = !1, pp !== Dp && (Dp = pp, Wp = !1, clearTimeout(Yp), Pp = !Dp && ep, Dp ? (vp = !1, tp = !1, Hp = 0) : Cp() && !ep && (tp = !0), ep = !1, Dp && !Cp() && zp(), Kp(), Pp && Fp())
    }

    function Np(pp) {
      pp !== vp && (vp = pp, pp || Fp())
    }

    function Tp() {
      Ap = !1, Wp || !0 !== ap() || (Wp = !0, clearTimeout(Yp), Yp = setTimeout(bp, yp))
    }

    function fp() {
      return (!Ap || performance.now() - wp > Up) && (Ap = (0, Lp.H)().lockPointer(), wp = performance.now()), Ap
    }

    function bp() {
      hp() && np() && fp()
    }

    function hp() {
      return Cp() && !Dp && !vp && !(0, Op.h)()
    }

    function ap() {
      var pp;
      return "undefined" === typeof navigator || null === (pp = navigator.userActivation) || void 0 === pp ? void 0 : pp.isActive
    }

    function np() {
      return Pp && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== ap()
    }

    function Fp() {
      Cp() ? hp() && !tp && np() && fp() : Dp && !ep && zp()
    }

    function gp() {
      tp ? navigator.vendor.startsWith("Apple") ? Zp() : Hp = dp : Fp()
    }

    function Gp() {
      Hp > 0 && 0 === --Hp && Zp()
    }

    function rp() {
      Hp = 0
    }

    function Zp() {
      hp() && !0 === ap() && fp()
    }

    function zp() {
      ep = !0, (0, Lp.H)().unlockPointer()
    }

    function sp() {
      Ap = !1, Pp = !1, Wp = !1, clearTimeout(Yp), vp = !1, tp = !1, Hp = 0, ep = !1;
      const pp = Dp;
      Dp = !1, pp && Kp()
    }

    function Kp() {
      for (const pp of [...kp]) pp(Dp);
      op.m.GA("pointerLockUpdate", Dp)
    }
  },
  40879: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      e: () => xp,
      f: () => Ap,
      i: () => Yp,
      k: () => Sp,
      o: () => Dp,
      s: () => Lp
    });
    let Op = null,
      op = null,
      Ip = null;

    function Sp(pp) {
      Op = pp
    }

    function xp() {
      return Op
    }

    function Lp(pp) {
      op = pp
    }

    function Yp() {
      return op
    }

    function Dp(pp) {
      Ip = pp
    }

    function Ap() {
      return Ip
    }

    function Pp() {
      var pp, ip;
      return !0 === (null === (pp = op) || void 0 === pp || null === (ip = pp.currentViewer) || void 0 === ip ? void 0 : ip.inPlayback)
    }
  },
  41212: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      attachPlayGameSources: () => RO,
      playGameSources: () => mO
    });
    var Op = cp(1956),
      op = cp(40879),
      Ip = cp(4886),
      Sp = cp(40783),
      xp = cp(41194),
      Lp = cp(39809),
      Yp = cp(34),
      Dp = cp(4911),
      Ap = cp(4903),
      Pp = cp(40824),
      Wp = cp(40857),
      yp = cp(41221),
      Up = cp(40837);
    (0, Up.h)(Dp.Zb.Chat, (pp => {
      if (pp.payloadKind !== Ap.kc.Msgpack) return;
      const ip = function(pp) {
        if (null === pp || "object" !== typeof pp || !("content" in pp)) return null;
        const {
          chatMsgId: ip,
          content: cp,
          chatterEId: Op
        } = pp;
        return {
          serverChatMsgId: null !== ip && void 0 !== ip ? ip : void 0,
          content: cp,
          chatterEId: void 0 === Op || null === Op ? void 0 : String(Op)
        }
      }((0, Pp.c)(pp.payload));
      null !== ip && Yp.m.GA("chat", ip, !0)
    }));
    const wp = {
        chatReceived: (0, Lp.o)((function(pp) {
          var ip, cp, Op;
          return {
            id: pp,
            name: null !== (ip = yp.d.getName(pp)) && void 0 !== ip ? ip : null,
            local: (0, Wp.f)() === pp,
            profileEffect: null !== (cp = null === (Op = (0, yp.e)(pp)) || void 0 === Op ? void 0 : Op.profileEffect) && void 0 !== cp ? cp : null
          }
        }))
      },
      vp = {
        sendChatMessage(pp) {
          var ip;
          let {
            VD: cp,
            channelName: Op
          } = pp;
          null === (ip = (0, Sp.k)()) || void 0 === ip || ip.clientApi.sendChat(cp, Op)
        }
      };
    var tp = cp(195),
      Hp = cp(1982),
      dp = cp(40769),
      ep = cp(39802);
    const jp = [0, 0, 0],
      kp = {
        codeBlockClickable(pp) {
          var ip;
          const cp = (0, Sp.k)();
          if (null === cp || void 0 === cp || !cp.isSessionLive) return !1;
          const Op = cp.api;
          if (0 !== (dp.q.playerFlags(Op.apiView, 0) & dp.wd.Crouching)) return !1;
          const op = Op.queries.directorEntity(Op.localId) >= dp.gb.BYTES ? Op.memoryData(Op.scratch(), dp.gb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === op) return !1;
          for (let Ip = 0; Ip < 3; Ip++) jp[Ip] = dp.gb.feet(op, 0, Ip);
          return jp[1] += dp.gb.eyeHeight(op, 0), (0, ep.d)(jp, pp, null !== (ip = Hp.c.get("blockReach")) && void 0 !== ip ? ip : tp.g.iv)
        }
      },
      mp = {
        clickCodeBlock(pp) {
          var ip;
          null === (ip = (0, Sp.k)()) || void 0 === ip || ip.clickCodeBlock(pp)
        }
      };
    var Rp = cp(40798),
      qp = cp(41225),
      Mp = cp(1014),
      Cp = cp(39215),
      Ep = cp(4882),
      Xp = cp(40813),
      lp = cp(40792),
      Qp = cp(40818);

    function Jp(pp) {
      if (null === pp) return null;
      const ip = [];
      for (const cp of pp) {
        const pp = Object.keys(cp)[0];
        if ("xi" === pp) {
          const {
            str: pp,
            style: Op,
            clickableUrl: op
          } = cp.xi, Ip = Object.keys(pp)[0], Sp = pp[Ip];
          "string" !== Ip && "styledEntityName" !== Ip && "styledTranslatedText" !== Ip || ip.push({
            str: Sp,
            style: Op,
            clickableUrl: op
          })
        } else ip.push(cp[pp])
      }
      return ip
    }
    const Bp = {
      screenPos(pp) {
        var ip, cp;
        return null !== (ip = null === (cp = (0, Sp.k)()) || void 0 === cp ? void 0 : cp.renderFrame.projectWorldPosToScreenPos(pp)) && void 0 !== ip ? ip : {
          x: 0,
          y: 0
        }
      }
    };
    let Np = !1;

    function Tp() {
      Np || (Np = !0, (0, Up.h)(Dp.Zb.ProgressBarUpdate, (pp => {
        const ip = (0, Qp.i)(pp);
        (0, Qp.b)(ip) && Yp.m.GA("progressBarUpdate", ip, !0)
      })), (0, Up.h)(Xp.A, (pp => {
        const ip = (0, Qp.f)(Xp.A, pp);
        ip && Yp.m.GA("middleScreenBarInitiate", {
          duration: ip.cI,
          OI: ip.OI,
          horizBarRemOffset: ip.oI
        }, !0)
      })), (0, Up.h)(Dp.Zb.RemoveMiddleScreenBar, (() => {
        Yp.m.GA("middleScreenBarRemove")
      })), (0, Up.h)(Xp._, (pp => {
        const ip = (0, Qp.f)(Xp._, pp);
        if (ip) {
          var cp;
          const pp = ip.Ep ? null === (cp = (0, Sp.k)()) || void 0 === cp ? void 0 : cp.renderFrame.projectDirectionToScreenPos(ip.Ep) : void 0;
          Yp.m.GA("sendHitmarker", {
            cc: ip.cc,
            screenPos: pp
          }, !0)
        }
      })), (0, Up.h)(Xp.fb, (pp => {
        const ip = (0, Qp.f)(Xp.fb, pp);
        if (ip) {
          const {
            id: pp,
            position: cp,
            style: Op,
            gi: op,
            ri: Ip
          } = ip;
          Yp.m.GA("setDirectionArrow", {
            id: pp,
            position: cp,
            style: Op,
            text: Jp(op),
            ri: Ip
          }, !0)
        }
      })), (0, Up.h)(Xp.h, (pp => {
        const ip = (0, Qp.f)(Xp.h, pp);
        ip && Yp.m.GA("clearDirectionArrow", {
          id: ip.id
        }, !0)
      })), (0, Up.h)(Xp.t, (pp => {
        const ip = (0, Qp.f)(Xp.t, pp);
        ip && Yp.m.GA("flyingMiddleMessage", {
          content: Jp(ip.pS),
          iS: ip.iS,
          cS: ip.cS
        }, !0)
      })), (0, Up.h)(Dp.Zb.WorldVariation, (pp => {
        const ip = (0, Qp.i)(pp);
        if ("string" === typeof ip) {
          const pp = ip === Mp.e ? null : {
            message: `Currently loaded as variation: ${ip}`,
            type: "Warning"
          };
          Yp.m.GA("showPermanentBottomMessage", pp, !0)
        }
      })), (0, Up.h)(Xp.J, (pp => {
        const ip = (0, Qp.f)(Xp.J, pp);
        ip && function(pp, ip) {
          const {
            type: cp,
            params: Op
          } = (0, Cp.e)(ip), op = {
            ...Op
          };
          for (const Ip of Cp.b) op[Ip] && (op[Ip] = Jp(op[Ip]));
          Ep.b.queueQTE(pp, cp, op).getResult().then((ip => {
            var cp;
            "boolean" === typeof ip && (null === (cp = (0, Sp.k)()) || void 0 === cp || cp.send(lp.c.QteResponse, {
              qteId: pp,
              qteResponse: ip
            }))
          }))
        }(ip.id, ip.sp)
      })), (0, Up.h)(Xp.S, (pp => {
        const ip = (0, Qp.f)(Xp.S, pp);
        "number" === typeof ip && Ep.b.cancelQTE(ip)
      })), (0, Up.d)((() => {
        Ep.b.reset()
      })), (0, Up.e)((() => {
        Ep.b.reset()
      })), (0, Up.h)(Dp.Zb.EditItemCraftingRecipes, (pp => {
        const ip = (0, Qp.i)(pp);
        (0, Qp.b)(ip) && Yp.m.GA("craftingRecipesEdited", {
          itemName: ip.craftingRecipeItemName,
          recipesForItem: ip.recipesForItem
        })
      })), (0, Up.h)(Xp.Q, (pp => {
        const ip = (0, Qp.f)(Xp.Q, pp);
        ip && Yp.m.GA("craftingRecipesEdited", {
          itemName: ip.iI,
          recipesForItem: []
        })
      })))
    }
    var fp = cp(25);
    const bp = [{
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

    function hp(pp) {
      return dp.q.playerFlags(pp.api.apiView, 0)
    }
    const ap = {
        freeCamera: (0, Wp.d)((pp => () => {
          const ip = pp.isSessionLive && 0 !== (hp(pp) & dp.wd.FreeCamMoves),
            cp = pp.freeCameraAllowed() && null === fp.c.get("scriptedCameraFacing");
          return bp[(cp ? 2 : 0) + (ip ? 1 : 0)]
        }), bp[0], (pp => (0, Ip.p)(pp)))
      },
      np = {
        setFreeCameraMovesFly: pp => {
          var ip;
          null === (ip = (0, Sp.k)()) || void 0 === ip || ip.setFreeCameraMovesFly(pp)
        }
      },
      Fp = {
        freeCameraPos: () => {
          const pp = (0, Sp.k)();
          return null !== pp && void 0 !== pp && pp.isSessionLive && pp.renderFrame.hasView && 0 !== (hp(pp) & dp.wd.FreeCam) ? pp.renderFrame.cameraPosition : null
        }
      };
    var gp = cp(39368);
    let Gp = !1,
      rp = !1;

    function Zp() {
      const pp = (0, Sp.k)();
      if (null === pp || void 0 === pp || !pp.isSessionLive) return void(Gp = !1);
      const ip = 0 !== (dp.q.playerFlags(pp.api.apiView, 0) & dp.wd.FreeCam);
      ip !== Gp && (Gp = ip, (0, gp.b)(ip))
    }
    var zp = cp(337),
      sp = cp(37246),
      Kp = cp(1996);
    var Vp = cp(41233),
      ii = cp(40849);
    const ci = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let Oi = "off";

    function oi(pp) {
      var ip;
      return null === pp ? null : {
        label: null !== (ip = (0, Vp.c)(pp, "interactionPrompt")) && void 0 !== ip ? ip : null
      }
    }
    const Ii = new Map([
      [dp.mc.Open, {
        label: Lp.g.open
      }],
      [dp.mc.Close, {
        label: Lp.g.close
      }],
      [dp.mc.Milk, {
        label: Lp.g.milk
      }],
      [dp.mc.Shear, {
        label: Lp.g.shear
      }],
      [dp.mc.Tame, {
        label: Lp.g.tame
      }],
      [dp.mc.Feed, {
        label: Lp.g.feed
      }],
      [dp.mc.Ride, {
        label: Lp.g.ride
      }]
    ]);
    class Si {
      constructor() {
        this.target = ci, this.tx = dp.Rc, this.optionName = null, this.pickaxe = new Lp.d
      }
      read(pp) {
        var ip;
        const cp = dp.q.targetBlockId(pp.api.apiView, 0);
        cp !== this.tx && (this.tx = cp, this.optionName = cp === dp.Rc ? null : `${pp.tables.getMetaInfo(cp).rootName}CrosshairText`);
        const Op = null === this.optionName ? null : null !== (ip = pp.tables.getClientOption(this.optionName)) && void 0 !== ip ? ip : null;
        this.pickaxe.update(function(pp, ip) {
          var cp, Op, op;
          if (0 === (dp.q.playerFlags(pp.api.apiView, 0) & dp.wd.Breaking) || ip === dp.Rc || 0 === ip) return null;
          const {
            tables: Ip
          } = pp;
          if (!0 === Ip.getClientOption("creative")) return null;
          const Sp = Ip.nameOfId(ip),
            xp = null === (cp = pp.items.sx()) || void 0 === cp ? void 0 : cp.name,
            Lp = null !== (Op = Ip.getItemStat(Sp, "harvestLevel")) && void 0 !== Op ? Op : 0;
          return (0, zp.sc)({
            blockHarvestType: Ip.getDefaultItemStat(Sp, "harvestType"),
            blockHarvestLevel: Ip.getDefaultItemStat(Sp, "harvestLevel"),
            harvestLevel: Lp,
            heldToolType: void 0 === xp ? void 0 : Ip.getDefaultItemStat(xp, "harvests"),
            heldToolLevel: void 0 === xp ? void 0 : Ip.getDefaultItemStat(xp, "level")
          }) && null !== (op = sp.n[Lp]) && void 0 !== op ? op : null
        }(pp, cp)), pp.watchPromptPick(Oi);
        const op = "touch" === Oi ? function(pp) {
          var ip;
          const cp = pp.interactLabel;
          return cp === dp.mc.Entity ? oi(pp.promptEntity) : cp === dp.mc.TameWith ? {
            label: (0, Lp.x)(pp.tables.nameOfId(pp.interactIcon))
          } : null !== (ip = Ii.get(cp)) && void 0 !== ip ? ip : null
        }(pp) : oi(pp.promptEntity);
        return this.target = (0, Kp.s)(this.target, {
          interactPrompt: op,
          blockText: Op,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let xi = null;
    const Li = {
      current: () => {
        var pp, ip;
        return null !== (pp = null === (ip = xi) || void 0 === ip ? void 0 : ip.target) && void 0 !== pp ? pp : ci
      },
      watch: pp => {
        const ip = new Si;
        xi = ip;
        const cp = (0, Wp.i)((cp => {
          let Op = ip.read(cp);
          pp(Op);
          const op = (0, Ip.s)((() => {
            const op = ip.read(cp);
            op !== Op && (Op = op, pp(op))
          }));
          return () => {
            op(), cp.watchPromptPick("off")
          }
        }));
        return () => {
          cp(), xi === ip && (xi = null)
        }
      }
    };
    let Yi = 0,
      Di = 0;
    const Ai = {
        health: Lp.t,
        aura: Lp.k,
        hotbar: ii.e.states.hotbar,
        heldItemAim: ii.e.states.heldItemAim,
        crouching: (0, Wp.d)((pp => function(pp) {
          const ip = () => 0 !== (dp.q.playerFlags(pp.apiView, 0) & dp.wd.Crouching);
          return {
            current: ip,
            watch(pp) {
              let cp = ip();
              return (0, Ip.p)((() => {
                const Op = ip();
                Op !== cp && (cp = Op, pp(Op))
              }))
            }
          }
        }(pp.api).current), !1, (pp => (0, Ip.p)(pp))),
        flight: (0, Wp.d)((pp => () => function(pp) {
          const ip = dp.q.playerFlags(pp.apiView, 0);
          return (0, Lp.q)(0 !== (ip & dp.wd.CanFly), 0 !== (ip & dp.wd.Flying))
        }(pp.api)), (0, Lp.q)(!1, !1), (pp => (0, Ip.p)(pp))),
        gliderBoostFuel: (0, Wp.d)((pp => () => dp.q.gliderBoostFuel(pp.api.apiView, 0)), 0, (pp => (0, Ip.p)(pp))),
        crosshairTarget: Li
      },
      Pi = {
        hotbarSlotRequested: ii.e.events.hotbarSlotRequested,
        hotbarScrolled: ii.e.events.hotbarScrolled,
        numberKeyPressed: ii.e.events.numberKeyPressed,
        shotDamageToShow: (0, Lp.u)((pp => !0 === (0, Vp.c)(pp, "showDamageAmounts")))
      },
      Wi = {
        selectHotbarSlot: ii.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: pp => {
          Oi = pp
        }
      },
      yi = {
        momentumFrac: function() {
          var pp, ip, cp;
          const Op = (0, Sp.k)(),
            op = performance.now(),
            Ip = null === Op || void 0 === Op || null === (pp = Op.items.sx()) || void 0 === pp || null === (ip = pp.attributes) || void 0 === ip || null === (cp = ip.customAttributes) || void 0 === cp ? void 0 : cp.enchantments;
          return Yi = null !== Op && null !== Ip && void 0 !== Ip && Ip.Momentum ? 0 !== (dp.q.playerFlags(Op.api.apiView, 0) & dp.wd.Breaking) ? Math.max(0, dp.q.momentumFrac(Op.api.apiView, 0)) : Math.max(0, Yi - (op - Di) / 1500) : 0, Di = op, Yi
        }
      };
    var Ui = cp(40778);
    const wi = {
      lobbyManage(pp) {
        var ip;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.LobbyManage, pp)
      }
    };
    var vi = cp(1251),
      ti = cp(36693),
      Hi = cp(8909),
      di = cp(1650),
      ei = cp(2457),
      ui = cp(4919);
    let ji = !1;

    function ki(pp) {
      ji = pp
    }

    function mi() {
      "inGame" !== fp.c.get("gameState") || (0, di.n)() || Yp.m.GA("ctrlCrouchWithoutFullscreen")
    }
    let Ri = !1;
    const qi = {
        OpenEmoteWheel: () => {
          ki(!0), Ri = !0, queueMicrotask((() => {
            Ri && (Ri = !1, Yp.m.GA("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Yp.m.GA("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, ti.c)() || Yp.m.GA("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, ti.c)() || Yp.m.GA("XKeyPressed")
        },
        CtrlCrouch: mi,
        "primary-fire": () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      Mi = {
        OpenEmoteWheel: () => {
          ki(!1), Ri ? (Ri = !1, (0, Hi.b)() || Yp.m.GA("requestEmoteWheelHoldOpen")) : Yp.m.GA("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: mi,
        "primary-fire": () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Yp.m.GA("mouseState", {
            SA: vi.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Ci = !1;

    function Ei() {
      Ci || (Ci = !0, (0, ui.f)((pp => {
        if ((0, op.b)()) return;
        const ip = (0, ui.e)(pp) ? "primary-fire" : pp.action;
        var cp;
        if (pp.down) {
          if (0 === (pp.flags & ei.c.Synthetic)) {
            var Op;
            null === (Op = qi[ip]) || void 0 === Op || Op.call(qi)
          }
        } else null === (cp = Mi[ip]) || void 0 === cp || cp.call(Mi)
      })))
    }
    var Xi = cp(322),
      li = cp(104),
      Qi = cp(44),
      Ji = cp(41079),
      Bi = cp(1349),
      Ni = cp(2479);
    let Ti = !1;
    const fi = {
      sendCodeCollab(pp) {
        var ip;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.CodeCollab, (0, lp.n)(pp), (0, Ni.d)(pp))
      }
    };
    var bi = cp(39281),
      ai = cp(8858);
    let ni = null,
      Fi = !1,
      gi = null;

    function Gi() {
      return "inGame" === fp.c.get("gameState") && !(0, ti.c)()
    }
    const ri = {
        OpenInventory: pp => {
          (0, di.s)(pp, "inventory", (0, Ui.o)())
        },
        OpenShop: pp => {
          ni && Gi() && (0, di.q)(pp, Xi.n.SHOP, !ni.shopIsEmpty(Hp.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: pp => {
          Gi() && (0, di.q)(pp, Xi.n.LOBBY_LEADERBOARD, (0, bi.d)({
            lobbyLeaderboardInfo: Hp.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Hp.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: pp => {
          var ip;
          const cp = null === (ip = ni) || void 0 === ip ? void 0 : ip.getClientGameMapKey();
          cp ? (0, di.v)(pp, !0, cp) : (0, di.s)(pp, "retentionFeatures", !(!Hp.c.get("_tasks") && !Hp.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: pp => {
          (0, di.s)(pp, "inviteLink", li.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: pp => {
          Gi() && function(pp) {
            const ip = (0, Sp.k)(),
              cp = null !== ip && void 0 !== ip && ip.isSessionLive ? ip.api : null,
              Op = cp ? cp.sH(cp.localId) : null;
            (0, di.v)(pp, null !== Op && (0, Ni.b)((0, Bi.d)()), (() => {
              (0, Ni.g)(Op)
            }))
          }(pp)
        },
        HideUi: () => {
          Yp.m.GA("showUi", !1)
        }
      },
      Zi = {
        HideUi: () => {
          Yp.m.GA("showUi", !0)
        }
      };

    function zi() {
      Fi || (Fi = !0, cp.e(159).then((() => cp(60719))).then((pp => {
        ni = pp
      }), (pp => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", pp)
      })), (0, Ji.C)((pp => {
        pp || !(0, Ji.h)() || (0, li.isMobile)() || !Qi.h.getItem("disableFullscreen") || (0, di.l)() || fp.c.set({
          openEverythingMenuName: Xi.n.SETTINGS
        })
      })), (0, ui.f)((pp => {
        let {
          action: ip,
          down: cp,
          press: Op
        } = pp;
        var Ip, Sp;
        (0, op.b)() || (cp ? null === (Ip = ri[ip]) || void 0 === Ip || Ip.call(ri, function(pp) {
          var ip;
          if (0 === pp || (null === (ip = gi) || void 0 === ip ? void 0 : ip.press) !== pp) {
            const ip = {
              press: pp,
              event: (0, ai.b)("inputAction")
            };
            gi = ip, queueMicrotask((() => {
              gi === ip && (gi = null)
            }))
          }
          return gi.event
        }(Op)) : null === (Sp = Zi[ip]) || void 0 === Sp || Sp.call(Zi))
      })))
    }
    var si = cp(39208),
      Ki = cp(39193),
      Vi = cp(39190);
    const pc = {
      completeTask(pp) {
        var ip;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.CompleteTask, (0, lp.o)(pp))
      },
      setServerCookie(pp) {
        var ip;
        let {
          key: cp,
          value: Op
        } = pp;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.GeneralCookieSet, (0, lp.r)({
          qx: cp,
          Mx: Op
        }))
      },
      answerUiRequest(pp) {
        var ip;
        let {
          id: cp,
          bD: Op
        } = pp;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.UiRequestResp, (0, lp.Q)({
          XL: cp,
          lL: Op,
          QL: 5
        }))
      },
      chooseRewardedAd(pp) {
        var ip;
        let {
          id: cp,
          bD: Op
        } = pp;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.UiRequestResponded, (0, lp.P)({
          id: cp,
          bD: Op
        }))
      },
      requestLeaderboard(pp) {
        var ip;
        let {
          category: cp,
          timeframe: Op,
          seeTop: op
        } = pp;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.LeaderboardRequest, {
          category: cp,
          timeframe: Op,
          seeTop: op
        })
      }
    };
    let ic = !1;
    const cc = tp.g.Kw / 2,
      Oc = [cc, -cc, -cc, -cc, cc, cc, -cc, cc],
      oc = [0, 0, 0];

    function Ic(pp, ip, cp) {
      for (let Op = 0; Op < pp.length; Op += 2)
        if (pp[Op] === ip && pp[Op + 1] === cp) return !0;
      return !1
    }
    const Sc = {
      blocksStandingOn: function() {
        const pp = (0, Sp.k)();
        if (null === pp) return [];
        const {
          api: ip,
          chunks: cp,
          tables: Op
        } = pp;
        if (!ip.readPosition(ip.localId, oc)) return [];
        const [op, Ip, xp] = oc, Lp = Math.ceil(Ip) - 1, Yp = [], Dp = [];
        for (let Sp = 0; Sp < Oc.length; Sp += 2) {
          const pp = op + Oc[Sp],
            ip = xp + Oc[Sp + 1];
          if (Number.isInteger(pp) || Number.isInteger(ip)) continue;
          const Ip = Math.floor(pp),
            Ap = Math.floor(ip);
          if (Ic(Dp, Ip, Ap)) continue;
          const Pp = cp.tx(Ip, Lp, Ap);
          Op.isSolidBlockId(Pp) && (Dp.push(Ip, Ap), Yp.push(Op.nameOfId(Pp)))
        }
        return Yp
      },
      dropAhead: function() {
        const pp = (0, Sp.k)();
        return null !== pp && 0 !== (dp.q.playerFlags(pp.api.apiView, 0) & dp.wd.DropAhead)
      }
    };
    var xc = cp(37164),
      Lc = cp(39261),
      Yc = cp(1372),
      Dc = cp(40865);
    const Ac = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Pc = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Wc() {
      const pp = new Set;
      return {
        add: ip => (pp.add(ip), () => {
          pp.delete(ip)
        }),
        fire() {
          for (const ip of pp) ip()
        }
      }
    }
    const yc = Object.freeze([]);

    function Uc(pp, ip) {
      let cp, {
        rereads: Op,
        followLocalId: op
      } = ip;
      const Sp = () => (cp = (0, Kp.s)(cp, pp()), cp);
      return {
        current: Sp,
        watch(pp) {
          const ip = (0, yp.b)((ip => {
            Op(ip) && pp(Sp())
          }));
          if (!op) return ip;
          let cp = (0, Wp.f)();
          const xp = (0, Ip.s)((() => {
            const ip = (0, Wp.f)();
            ip !== cp && (cp = ip, pp(Sp()))
          }));
          return () => {
            ip(), xp()
          }
        }
      }
    }
    const wc = {
        players: Uc((function() {
          const pp = yp.d.ids(),
            ip = {};
          for (const Ip of pp) {
            var cp, Op, op;
            ip[Ip] = {
              name: null !== (cp = yp.d.getName(Ip)) && void 0 !== cp ? cp : null,
              ranks: null !== (Op = yp.d.getSetting(Ip, "ranks")) && void 0 !== Op ? Op : yc,
              cosmetics: null !== (op = (0, yp.e)(Ip)) && void 0 !== op ? op : null
            }
          }
          return {
            ids: pp,
            byId: ip,
            localId: (0, Wp.f)()
          }
        }), {
          rereads: pp => "roster" !== pp.kind || pp.members || pp.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Uc((function() {
          const pp = {};
          for (const op of yp.d.ids()) {
            var ip, cp, Op;
            pp[op] = {
              colour: null !== (ip = yp.d.getSetting(op, "colorInLobbyLeaderboard")) && void 0 !== ip ? ip : null,
              values: null !== (cp = yp.d.getSetting(op, "lobbyLeaderboardValues")) && void 0 !== cp ? cp : null,
              tags: null !== (Op = yp.d.getSetting(op, "lobbyLeaderboardTags")) && void 0 !== Op ? Op : null
            }
          }
          return pp
        }), {
          rereads: function(pp) {
            if ("roster" !== pp.kind) return "reset" === pp.kind;
            const {
              members: ip,
              settings: cp
            } = pp;
            return ip || cp.has("colorInLobbyLeaderboard") || cp.has("lobbyLeaderboardValues") || cp.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      vc = {
        cosmeticsUpdated: {
          watch: pp => (0, yp.b)((ip => {
            if ("cosmetics" !== ip.kind) return;
            const cp = (0, Wp.f)();
            pp(ip.updates.map((pp => {
              let {
                sI: ip,
                KI: Op,
                VI: op
              } = pp;
              return {
                local: ip === cp,
                KI: Op,
                VI: op
              }
            })))
          }))
        }
      };
    var tc = cp(3003),
      Hc = cp(1765),
      dc = cp(670),
      ec = cp(41123);
    let uc = !1,
      jc = null;
    const kc = {
      setShopOpen(pp) {
        var ip;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.ShopMenuChanged, (0, lp.K)(pp))
      },
      buyShopItem(pp) {
        var ip;
        let {
          categoryKey: cp,
          itemKey: Op,
          userInput: op
        } = pp;
        null === (ip = (0, Sp.k)()) || void 0 === ip || ip.send(lp.c.ItemBought, {
          categoryKey: cp,
          itemKey: Op,
          shopVersion: Hp.c.get("_shopVersion"),
          userInput: op
        })
      }
    };
    let mc = !1;
    var Rc = cp(4927);
    const qc = ei.C.LookFrozen | ei.C.ClicksSuppressed;

    function Mc(pp, ip) {
      var cp;
      null !== (cp = (0, Sp.k)()) && void 0 !== cp && cp.send(pp, ip) || console.warn(`[bloxd-wasm-client] message ${pp} not sent: no live game or the core's command ring is full`)
    }(0, Up.h)(Xp.jb, (pp => {
      const ip = (0, Qp.f)(Xp.jb, pp);
      void 0 !== ip && Yp.m.GA("setDiscordReportKey", ip)
    }));
    const Cc = {
      ignorePlayer(pp) {
        Mc(lp.c.IgnoreUser, (0, lp.u)({
          JL: pp
        }))
      },
      reportPlayer(pp) {
        let {
          playerId: ip,
          chatMsgId: cp,
          Cx: Op,
          details: op
        } = pp;
        Mc(lp.c.UserReport, (0, lp.cb)({
          ND: ip,
          TD: cp,
          Cx: Op,
          Ex: op
        }))
      },
      reportWorldCodeChat(pp) {
        let {
          chatMsgId: ip,
          Cx: cp,
          details: Op
        } = pp;
        Mc(lp.c.UserReport, (0, lp.cb)({
          ND: "",
          TD: ip,
          Cx: cp,
          Ex: Op
        }))
      },
      requestDiscordReportKey(pp) {
        Mc(lp.c.ReqDiscordReportKey, (0, lp.E)(pp))
      },
      reportLobbyOrGame(pp) {
        let {
          target: ip,
          Cx: cp,
          details: Op
        } = pp;
        "customGame" === ip ? Mc(lp.c.CustomGameReport, (0, lp.q)({
          Cx: cp,
          Ex: Op
        })) : Mc(lp.c.LobbyReport, (0, lp.w)({
          Cx: cp,
          Ex: Op
        }))
      },
      updateMyCosmetic(pp) {
        Mc(lp.c.UpdateMyCosmetic, (0, lp._)(pp))
      },
      holdEmoteWheel(pp) {
        !pp || ji ? (0, Rc.g)(qc, pp ? qc : 0) : Yp.m.GA("requestEmoteWheelHoldRelease")
      }
    };
    var Ec = cp(41240),
      Xc = cp(9338),
      lc = cp(39831);
    const Qc = [0, 0, 0],
      Jc = [0, 0, 0],
      Bc = [0, 0, 0],
      Nc = {
        blockAtViewPoint(pp) {
          let {
            x: ip,
            y: cp
          } = pp;
          const Op = (0, Sp.k)();
          if (null === Op || void 0 === Op || !Op.renderFrame.hasView) return null;
          const {
            renderFrame: op,
            clientApi: Ip,
            api: xp
          } = Op;
          let Lp = 0;
          return (0, lc.d)(((pp, ip, cp) => (Lp = Ip.getBlockId(pp, ip, cp), 0 !== Lp)), op.cameraPosition, (0, lc.e)((pp => dp.q.viewProj(xp.apiView, 0, pp)), ip, cp, Qc), lc.c, Jc, Bc) ? {
            pos: [Jc[0], Jc[1], Jc[2]],
            normal: [Bc[0], Bc[1], Bc[2]],
            name: (0, Xc.d)(Lp)
          } : null
        }
      },
      Tc = {
        setBlockHighlight(pp) {
          var ip;
          null === (ip = (0, Sp.k)()) || void 0 === ip || ip.setBlockHighlight(pp)
        }
      };
    var fc = cp(1971),
      bc = cp(41114),
      hc = cp(41248),
      ac = cp(4580),
      nc = cp(4551),
      Fc = cp(41251),
      gc = cp(3400),
      Gc = cp(3405);
    let rc = null,
      Zc = null;

    function zc(pp) {
      const ip = pp.startsWith(Gc.h),
        [cp, Op = cp, op = cp] = (ip ? pp.slice(Gc.h.length) : pp).split(Gc.g);
      return {
        top: cp,
        left: Op,
        right: op,
        half: ip
      }
    }

    function sc(pp) {
      const ip = null === rc ? void 0 : (0, gc.c)(pp),
        cp = void 0 === ip ? 0 : rc.codes[ip];
      return 0 === cp ? void 0 : rc.pool[cp - 1]
    }
    var Kc = cp(3396),
      Vc = cp(4538),
      pO = cp(4571),
      iO = cp(41153),
      cO = cp(41253);
    const OO = "item:";
    let oO = null,
      IO = null,
      SO = null,
      xO = null,
      LO = !1,
      YO = !1;

    function DO() {
      return YO || (YO = !0, (0, pO.j)().then((pp => {
        pp && (0, fc.b)()
      }))), SO ??= Promise.all([(0, Kc.e)(), (Zc ??= cp.e(1).then((() => cp(60729))).then((pp => {
        let {
          BLOCK_FACE_RUNS: ip,
          BLOCK_FACES: cp,
          MAX_FACE_ITEM_ID: Op
        } = pp;
        rc = {
          codes: (0, Gc.A)(ip, Op + 1),
          pool: cp.split(Gc.p).map(zc)
        }
      }), (pp => {
        throw Zc = null, pp
      })), Zc), (0, cO.f)(), cp.e(201).then((() => cp(34448)))]).then((pp => {
        let [, , ip, cp] = pp;
        ip.followBundledTextures(), oO = ip, IO = cp, (0, fc.b)()
      }), (pp => {
        SO = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", pp)
      })), SO
    }

    function AO(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = (0, iO.i)()) || void 0 === cp ? void 0 : cp.textureUrl(pp)) && void 0 !== ip ? ip : oO.itemSpriteUrl(pp)
    }

    function PO(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = (0, iO.i)()) || void 0 === cp ? void 0 : cp.textureUrl(pp)) && void 0 !== ip ? ip : oO.blockTextureUrl(pp)
    }

    function WO(pp) {
      var ip;
      return null !== (ip = (0, Kc.d)(pp)) && void 0 !== ip ? ip : pp
    }

    function yO(pp, ip) {
      var cp, Op, op;
      return null !== (cp = null !== (Op = null !== (op = PO(pp)) && void 0 !== op ? op : null === ip || void 0 === ip ? void 0 : ip.rotated[pp]) && void 0 !== Op ? Op : null === ip || void 0 === ip ? void 0 : ip.animated[pp]) && void 0 !== cp ? cp : oO.notFoundUrl()
    }

    function UO(pp) {
      return void 0 !== (0, gc.c)(pp) ? pp : /^[1-9][0-9]*$/.test(pp) ? (0, gc.d)(Number(pp)) : void 0
    }

    function wO(pp) {
      var ip;
      if (pp.startsWith(OO)) {
        var cp;
        const ip = (0, Kc.d)(pp.slice(5));
        return null !== (cp = void 0 === ip ? null : AO(ip)) && void 0 !== cp ? cp : oO.notFoundUrl()
      }
      return null !== (ip = oO.particleUrl(pp)) && void 0 !== ip ? ip : oO.notFoundUrl()
    }

    function vO(pp, ip) {
      return "StairsBlock" === pp ? pp : ip ? "SlabBlock" : "CubeBlock"
    }
    const tO = {
        async blockIcon(pp) {
          var ip;
          let {
            name: Op,
            size: op,
            lineWidth: Ip
          } = pp;
          await DO();
          const Sp = null !== (ip = UO(Op)) && void 0 !== ip ? ip : Op,
            xp = (0, pO.d)(Sp, op, Ip);
          if (null !== xp) return xp;
          const Lp = sc(Sp),
            Yp = (0, gc.c)(Sp),
            Dp = void 0 === Yp || null === IO ? void 0 : IO.itemTypeNameOf(Yp);
          if (null === oO || void 0 === Lp) return "";
          const Ap = [Lp.top, Lp.left, Lp.right].some((pp => null === PO(pp))),
            Pp = Ap ? await (xO ??= cp.e(207).then((() => cp(34510))).then((pp => (LO && (LO = !1, (0, fc.b)()), {
              rotated: pp.rotatedBlockTextures,
              animated: pp.animatedBlockTextures
            })), (pp => (xO = null, LO = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", pp), null))), xO) : null;
          if (Ap && null === Pp) return "";
          const Wp = {
              top: yO(Lp.top, Pp),
              left: yO(Lp.left, Pp),
              right: yO(Lp.right, Pp),
              itemType: vO(Dp, Lp.half)
            },
            yp = (0, iO.f)(),
            Up = 0 === yp ? Sp : `${Sp}#${yp}`;
          return (await (0, Vc.b)()).drawBlockIconUrl(Up, op, Ip, (() => Wp))
        }
      },
      HO = {
        itemIcon: function(pp) {
          var ip, cp, op, Ip;
          if (null === oO) return DO(), Op.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(pp);
          if ((0, nc.g)(pp)) return {
            kind: "icon",
            url: null !== (cp = null !== (op = null === (Ip = (0, iO.i)()) || void 0 === Ip ? void 0 : Ip.textureUrl(pp)) && void 0 !== op ? op : oO.ingameIconUrl(pp)) && void 0 !== cp ? cp : oO.notFoundUrl()
          };
          if (pp.startsWith(nc.d)) return {
            kind: "icon",
            url: wO(pp.slice(nc.d.length))
          };
          if (0 === (0, gc.g)()) return (0, Fc.d)(), Op.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(pp);
          const Sp = null !== (ip = UO(pp)) && void 0 !== ip ? ip : pp,
            xp = (0, gc.c)(Sp),
            Lp = void 0 === xp ? void 0 : IO.itemTypeNameOf(xp);
          if (void 0 !== sc(Sp)) return {
            kind: "drawnBlock"
          };
          const Yp = function(pp) {
            var ip;
            return null !== (ip = AO(WO(pp))) && void 0 !== ip ? ip : oO.notFoundUrl()
          }(Sp);
          if ((0, pO.f)(Sp) && ! function(pp) {
              const ip = (0, iO.i)();
              return null !== ip && (null !== ip.textureUrl(WO(pp)) || null !== ip.modelUrl(pp))
            }(Sp)) return {
            kind: "model",
            url: Yp
          };
          if ("Gun" === Lp) return {
            kind: "gun",
            url: Yp
          };
          if (void 0 !== xp && "GrayscaleArmour" === IO.itemTypeOf(xp) || Object.hasOwn(ac.e, Sp)) {
            var Dp;
            const ip = null !== (Dp = (0, ac.g)(pp)) && void 0 !== Dp ? Dp : (0, ac.g)(Sp);
            if (ip) return {
              kind: "item",
              url: Yp,
              tint: ip
            }
          }
          return {
            kind: "item",
            url: Yp
          }
        },
        hasIcon: function(pp) {
          return void 0 !== UO(pp) || (0, nc.g)(pp) || pp.startsWith(nc.d)
        },
        isItemName: function(pp) {
          return void 0 !== UO(pp)
        }
      };
    var dO = cp(629),
      eO = cp(39834);

    function uO(pp) {
      if (null === pp || void 0 === pp || !pp.isCoreRunning) return null;
      const {
        api: ip,
        chunks: cp,
        items: Op,
        tables: op
      } = pp;
      return {
        playerFeet() {
          const pp = ip.sH(ip.localId);
          return null !== pp && void 0 !== pp && pp.every(Number.isFinite) ? pp : null
        },
        chunkBlocks: pp => cp.isLoaded(pp[0], pp[1], pp[2]) ? (pp, ip, Op) => cp.tx(pp, ip, Op) : null,
        blockName: pp => op.nameOfId(pp),
        inventory: () => ({
          slots: Op.playerItems().map((pp => pp ? {
            name: pp.name,
            amount: pp.amount
          } : null)),
          heldSlot: Op.selectedSlot
        }),
        nearby() {
          const cp = [];
          for (let op = 0; op < ip.idStr.length; op++) {
            var Op;
            const Ip = ip.idStr[op],
              Sp = ip.serverIds[op],
              xp = ip.kinds[op];
            if (null === Ip || ip.isLocal(Sp) || xp >>> dp.b !== dp.p.Lifeform) continue;
            const Lp = ip.sH(Sp),
              Yp = dO.i[xp & dp.d];
            Lp && void 0 !== Yp && cp.push({
              kind: "Player" === Yp ? "player" : Yp,
              name: null !== (Op = pp.clientApi.getEntityName(Ip)) && void 0 !== Op ? Op : null,
              position: Lp
            })
          }
          return cp
        },
        droppedItems() {
          let pp = 0;
          for (let cp = 0; cp < ip.idStr.length; cp++) null !== ip.idStr[cp] && ip.kinds[cp] >>> dp.b === dp.p.Item && pp++;
          return pp
        }
      }
    }
    const jO = {
        worldCodeAiChunk: pp => Promise.resolve((0, eO.c)(uO((0, Sp.k)()), pp)),
        worldCodeAiGameState: () => Promise.resolve((0, eO.f)(uO((0, Sp.k)())))
      },
      kO = function(pp) {
        const ip = Wc(),
          Op = Wc(),
          op = new Set,
          Ip = new Set,
          Sp = () => {
            var ip, cp;
            return null !== (ip = null === (cp = pp.runtime()) || void 0 === cp ? void 0 : cp.currentViewer) && void 0 !== ip ? ip : null
          };
        let xp = null,
          Lp = null;
        const Dp = (pp, ip) => ({
            current: pp,
            watch(cp) {
              let Op = pp();
              return ip.add((() => {
                const ip = pp();
                ip !== Op && (Op = ip, cp(ip))
              }))
            }
          }),
          Pp = pp => ({
            watch: ip => (pp.add(ip), () => {
              pp.delete(ip)
            })
          }),
          Wp = pp => {
            const ip = Sp(),
              cp = null === ip || void 0 === ip ? void 0 : ip.view;
            ip && cp && ip.seek(Math.max(0, Math.min(cp.totalTicks - 1, cp.LP + pp * Ap.xd)))
          },
          yp = {
            replay: Dp((() => {
              var pp;
              const ip = Sp(),
                cp = null !== (pp = null === ip || void 0 === ip ? void 0 : ip.view) && void 0 !== pp ? pp : null;
              return null === ip || null === cp || cp.state === Ap.jd.None ? (xp = null, null) : (xp = (0, Kp.s)(xp, {
                id: ip.id,
                LP: cp.LP,
                totalTicks: cp.totalTicks,
                Bl: Ap.xd,
                playing: cp.state === Ap.jd.Playing,
                speed: cp.speed,
                cameraMode: cp.cameraMode,
                freecam: "freecam" === cp.cameraMode
              }), xp)
            }), ip),
            replayEdits: Dp((() => {
              var pp;
              const ip = Sp(),
                cp = null !== (pp = null === ip || void 0 === ip ? void 0 : ip.view) && void 0 !== pp ? pp : null;
              return null === ip || null === cp || cp.state === Ap.jd.None ? (Lp = null, null) : (Lp = (0, Kp.s)(Lp, {
                cameraKeyframes: [...ip.keyframes],
                playbackMark: cp.mark,
                fileName: ip.fileName,
                unsavedChanges: ip.unsavedChanges,
                suggestSaveAs: ip.suggestSaveAs
              }), Lp)
            }), ip),
            replayRecorder: Dp((() => {
              var ip, cp;
              return null !== (ip = null === (cp = pp.runtime()) || void 0 === cp ? void 0 : cp.recorder.current) && void 0 !== ip ? ip : Dc.d.states.replayRecorder.current()
            }), Op),
            replayVideoExporting: {
              current: Lc.c,
              watch: pp => (0, Yp.n)("replayViewer|videoExportChanged", (() => {
                pp((0, Lc.c)())
              }))
            }
          },
          Up = {
            replayUiActionRequested: Pp(Ip),
            replayViewerRequested: Pp(op)
          },
          wp = pp => {
            for (const ip of op) ip(pp)
          },
          vp = () => {
            var Op;
            !0 === (null === (Op = Sp()) || void 0 === Op ? void 0 : Op.isOpen) && Promise.all([cp.e(98), cp.e(67)]).then((() => cp(60722))).then((cp => {
              let {
                startWasmReplayVideoExport: Op
              } = cp;
              return Op({
                viewer: Sp,
                canvas: () => {
                  var ip, cp;
                  return null !== (ip = null === (cp = pp.canvas) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
                },
                watchViewer: ip.add,
                requestViewer: wp
              })
            }), (pp => {
              console.error("Couldn't load the video export", pp), Yc.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((pp => {
              console.error("The video export failed", pp)
            }))
          },
          tp = {
            replayAction(pp) {
              if ((0, Lc.c)()) return;
              const ip = Sp();
              switch (pp) {
                case "replaySkipBack":
                  Wp(-1);
                  break;
                case "replaySkipForward":
                  Wp(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== ip && void 0 !== ip && ip.view && ip.setSpeed((0, xc.h)(ip.view.speed, "replaySpeedUp" === pp ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === ip || void 0 === ip || ip.addKeyframe()
              }
            },
            setReplayPlaying(pp) {
              var ip, cp;
              (0, Lc.c)() || (pp ? null === (ip = Sp()) || void 0 === ip || ip.play() : null === (cp = Sp()) || void 0 === cp || cp.pause())
            },
            seekReplay(pp) {
              var ip;
              let {
                LP: cp,
                ignorePlaybackMark: Op
              } = pp;
              null === (ip = Sp()) || void 0 === ip || ip.seek(cp, null !== Op && void 0 !== Op && Op)
            },
            setReplayCameraMode(pp) {
              var ip;
              null === (ip = Sp()) || void 0 === ip || ip.setCameraMode(pp)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(pp) {
              var ip;
              null === (ip = Sp()) || void 0 === ip || ip.setKeyframe(pp)
            },
            moveReplayCameraKeyframe(pp) {
              var ip;
              let {
                from: cp,
                to: Op
              } = pp;
              null === (ip = Sp()) || void 0 === ip || ip.moveKeyframe(cp, Op)
            },
            deleteReplayCameraKeyframes(pp) {
              var ip;
              let {
                start: cp,
                end: Op
              } = pp;
              null === (ip = Sp()) || void 0 === ip || ip.deleteKeyframes(cp, Op)
            },
            setReplayPlaybackMark(pp) {
              var ip;
              null === (ip = Sp()) || void 0 === ip || ip.setMark(pp)
            },
            cropReplay(pp) {
              var ip, cp;
              let {
                start: Op,
                end: op
              } = pp;
              return !(0, Lc.c)() && (null !== (ip = null === (cp = Sp()) || void 0 === cp ? void 0 : cp.crop(Op, op)) && void 0 !== ip && ip)
            },
            holdReplayForShaderPackFailure(pp) {
              const ip = Sp();
              ip && (ip.holdForShaderPackFailure(), function(pp) {
                cp.e(117).then((() => cp(39396))).then((ip => {
                  let {
                    shaderPackPage: cp
                  } = ip;
                  cp.block(pp)
                })).catch((pp => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", pp)
                }))
              }(pp))
            },
            exportReplayVideo() {
              vp()
            },
            toggleRecording() {
              var ip;
              null === (ip = pp.runtime()) || void 0 === ip || ip.recorder.toggleRecording()
            },
            saveClip() {
              var ip;
              null === (ip = pp.runtime()) || void 0 === ip || ip.recorder.saveClip()
            },
            setRecorderPrefs(ip) {
              var cp;
              let {
                clipping: Op,
                clipSeconds: op
              } = ip;
              null === (cp = pp.runtime()) || void 0 === cp || cp.recorder.setPrefs(Op, op)
            },
            setReplayViewerOpen(ip) {
              var cp;
              (0, ti.f)(ip) && (null === (cp = pp.runtime()) || void 0 === cp || cp.recorder.viewerShown(ip))
            },
            recordFlyingMiddleText(ip) {
              var cp;
              let {
                content: Op,
                iS: op,
                angle: Ip,
                cS: Sp
              } = ip;
              null === (cp = pp.runtime()) || void 0 === cp || cp.recorder.recordFlyingText(JSON.stringify(Op), op, Ip, Sp)
            },
            dragReplayCamera(ip) {
              var cp;
              let {
                dx: Op,
                dy: op
              } = ip;
              null === (cp = pp.freecam()) || void 0 === cp || cp.drag(Op, op)
            },
            moveReplayFreecam(ip) {
              var cp;
              null === (cp = pp.freecam()) || void 0 === cp || cp.move(ip)
            },
            holdReplayFreecamVertical(ip) {
              var cp;
              let {
                action: Op,
                sx: op
              } = ip;
              null === (cp = pp.freecam()) || void 0 === cp || cp.holdVertical(Op, op)
            }
          },
          Hp = pp => {
            var ip;
            const cp = Sp(),
              Op = null !== (ip = null === cp || void 0 === cp ? void 0 : cp.view) && void 0 !== ip ? ip : null;
            Ac.has(pp) ? (pp => {
              for (const ip of Ip) ip(pp)
            })(pp) : Pc.has(pp) ? tp.replayAction(pp) : "replayPlayPause" === pp ? cp && Op && Op.state !== Ap.jd.None && tp.setReplayPlaying(Op.state !== Ap.jd.Playing) : "replayChangeCameraMode" === pp ? null === cp || void 0 === cp || cp.cycleCameraMode() : "replayExit" === pp ? !0 === (null === cp || void 0 === cp ? void 0 : cp.inPlayback) && (0, Bi.k)("/") : "replayExportVideo" === pp && vp()
          };
        let dp = !1;
        return {
          states: yp,
          events: Up,
          commands: tp,
          lookups: {
            replayCamera() {
              var ip, cp, Op;
              return !0 !== (null === (ip = Sp()) || void 0 === ip ? void 0 : ip.isOpen) ? null : null !== (cp = null === (Op = pp.cameraView) || void 0 === Op ? void 0 : Op.call(pp)) && void 0 !== cp ? cp : null
            },
            leaveGameReloadsPage() {
              var pp;
              return !0 === (null === (pp = Sp()) || void 0 === pp ? void 0 : pp.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var pp;
              const cp = !0 === (null === (pp = Sp()) || void 0 === pp ? void 0 : pp.inPlayback);
              cp !== dp && (dp = cp, Yp.m.GA("connectedGameChanged")), ip.fire()
            },
            recorderChanged: Op.fire,
            keyDown: pp => {
              var ip;
              switch (pp) {
                case "recordGame":
                  return void tp.toggleRecording();
                case "recordClip":
                  return void((0, ti.c)() || tp.saveClip())
              }(0, Lc.c)() || ("replayViewerOpen" !== pp ? pp.startsWith("replay") && ((0, ti.c)() || !0 === (null === (ip = Sp()) || void 0 === ip ? void 0 : ip.inPlayback)) && Hp(pp) : wp("toggle"))
            }
          }
        }
      }({
        runtime: op.i,
        cameraView: () => {
          var pp;
          const ip = null === (pp = (0, Sp.k)()) || void 0 === pp ? void 0 : pp.renderFrame;
          if (!ip) return null;
          const [cp, Op, op] = ip.cameraPosition, [Ip, xp, Lp] = ip.cameraDirection;
          return {
            position: [cp, Op, op],
            direction: [Ip, xp, Lp]
          }
        },
        canvas: () => {
          var pp, ip, cp;
          return null !== (pp = null === (ip = (cp = (0, Ip.H)()).canvas) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : null
        },
        freecam: op.f
      }),
      mO = {
        states: {
          ...Ai,
          ...Ui.m,
          ...kO.states,
          ...wc,
          ...ap
        },
        events: {
          ...Pi,
          ...wp,
          ...Ui.g,
          ...qp.b,
          ...Ec.j,
          ...kO.events,
          ...vc,
          ...Rp.g
        },
        commands: {
          ...mp,
          ...Wi,
          ...vp,
          ...Ui.d,
          ...pc,
          ...Cc,
          ...Rp.c,
          ...fi,
          ...kO.commands,
          ...kc,
          ...np,
          ...Tc,
          ...wi
        },
        queries: {
          ...Ui.j,
          ...jO
        },
        lookups: {
          ...yi,
          ...Bp,
          ...Ec.k,
          ...kO.lookups,
          ...kp,
          ...Sc,
          ...Nc,
          ...Fp
        }
      };

    function RO() {
      (0, xp.h)(Up.i), (0, op.k)(kO.feed), (0, qp.d)(), ic || (ic = !0, (0, Up.h)(Xp.n, (pp => {
        const ip = (0, Qp.f)(Xp.n, pp);
        "string" === typeof ip && Promise.resolve().then((() => cp(3750))).then((pp => {
          let {
            onCosmeticPackGranted: cp
          } = pp;
          cp(ip)
        }))
      })), (0, Up.h)(Xp.cb, (pp => {
        const ip = (0, Qp.f)(Xp.cb, pp);
        "number" === typeof ip && Yp.m.GA("serverUpdating", Date.now() + ip, !0)
      })), (0, Up.h)(Xp.H, (pp => {
        const ip = (0, Qp.f)(Xp.H, pp);
        if ((0, Qp.b)(ip)) {
          const {
            xI: pp,
            LI: cp
          } = ip;
          (0, Ki.d)({
            xI: "string" === typeof pp ? pp : null,
            LI: "string" === typeof cp ? cp : null
          })
        }
      })), (0, Up.h)(Dp.Zb.NewUiRequest, (pp => {
        const ip = (0, Qp.i)(pp);
        (0, Qp.b)(ip) && "number" === typeof ip.id && (0, Qp.b)(ip.clientParameters) && (0, Vi.d)(ip.id, ip.clientParameters)
      })), (0, Up.h)(Xp.V, (pp => {
        const ip = (0, Qp.f)(Xp.V, pp);
        "number" === typeof ip && (0, Vi.h)(ip)
      })), (0, Up.e)(Vi.c), (0, Up.h)(Dp.Zb.UiRequestPopup, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip) && "number" === typeof ip.id && "string" === typeof ip.text) {
          const pp = ip.id;
          (0, Vi.j)(pp, ip.text, !0 === ip.destructive, (ip => {
            pc.answerUiRequest({
              id: pp,
              bD: ip
            })
          }))
        }
      })), (0, Up.h)(Dp.Zb.TopRightHelper, (pp => {
        const ip = (0, Qp.i)(pp);
        void 0 !== ip && Yp.m.GA("TopRightHelper", ip, !0)
      })), (0, Up.h)(Dp.Zb.TaskProgress, (pp => {
        const ip = (0, Qp.i)(pp);
        (0, Qp.b)(ip) && "string" === typeof ip.taskId && "number" === typeof ip.progress && (0, si.b)({
          taskId: ip.taskId,
          progress: ip.progress
        })
      }))), mc || (mc = !0, (0, Up.h)(Xp.v, (pp => {
        const ip = (0, Qp.f)(Xp.v, pp);
        (0, Qp.b)(ip) && Yp.m.GA("showShopFromServer", {
          toggle: ip.Yp,
          Dp: ip.Dp
        }, !0)
      })), (0, Up.h)(Dp.Zb.OverShopInfo, (pp => {
        const ip = (0, Qp.i)(pp);
        (0, Qp.b)(ip) && Yp.m.GA("overShopInfo", ip.info, !0)
      })), (0, Up.h)(Dp.Zb.ShowShopTutorial, (() => {
        Yp.m.GA("showShopTutorial", null, !0)
      }))), uc || (uc = !0, (0, Up.d)((() => {
        var pp;
        (0, tc.resetLeaveEvents)(), null === (pp = jc) || void 0 === pp || pp(), jc = (0, Up.c)() ? (0, dc.k)(Up.c) : null, (0, Up.c)() || Yp.m.xH()
      })), (0, Up.h)(Dp.Zb.SetCookie, (pp => {
        const ip = (0, Qp.i)(pp),
          cp = (0, Bi.d)().gameNameWithVariation;
        (0, Qp.b)(ip) && "string" === typeof ip.key && null !== cp && (0, Hc.setCookie)(cp, ip.key, ip.value)
      })), (0, Up.h)(Dp.Zb.LeaveValues, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip) && "string" === typeof ip.leaveEventType) {
          const {
            leaveEventType: pp,
            category: cp,
            subCategory: Op,
            value: op
          } = ip;
          (0, tc.updateLeaveValue)({
            leaveEventType: pp,
            category: cp,
            subCategory: Op,
            value: op
          })
        }
      })), (0, Up.h)(Dp.Zb.CustomAnalyticsEvent, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip) && "string" === typeof ip.cat1) {
          const {
            cat1: pp,
            cat2: cp,
            cat3: Op,
            value: op
          } = ip;
          (0, tc.logCustomAnalyticsEvent)({
            cat1: pp,
            cat2: cp,
            cat3: Op,
            value: op
          })
        }
      })), (0, Up.h)(Dp.Zb.ProgressionEvent, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip)) {
          const {
            type: pp,
            location1: cp,
            location2: Op,
            location3: op,
            score: Ip
          } = ip;
          (0, tc.logProgressionEvent)({
            type: pp,
            location1: cp,
            location2: Op,
            location3: op,
            score: Ip
          })
        }
      })), (0, Up.h)(Dp.Zb.ResourceEvent, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip)) {
          const {
            type: pp,
            resourceType: cp,
            amount: Op,
            category: op,
            itemName: Ip
          } = ip;
          (0, tc.logResourceEvent)({
            type: pp,
            resourceType: cp,
            amount: Op,
            category: op,
            itemName: Ip
          })
        }
      })), (0, Up.h)(Dp.Zb.LeaderboardResponse, (pp => {
        const ip = (0, Qp.i)(pp);
        if ((0, Qp.b)(ip)) {
          const {
            category: pp,
            timeframe: cp,
            data: Op
          } = ip;
          Yp.m.GA("leaderboardResponse", {
            category: pp,
            timeframe: cp,
            data: Op
          })
        }
      })), (0, Up.h)(Xp.E, (pp => {
        const ip = (0, Qp.f)(Xp.E, pp);
        "string" === typeof ip && (0, ec.b)(pp.conn, ip)
      })), (0, Up.h)(Xp.F, (pp => {
        const ip = (0, Qp.f)(Xp.F, pp);
        "string" === typeof ip && console.error(`[logErrorToConsole]: ${ip}`)
      }))), Tp(), (0, Ec.e)(), Ti || (Ti = !0, (0, Up.h)(Xp.l, (pp => {
        const ip = (0, Qp.f)(Xp.l, pp);
        void 0 !== ip && (0, Ni.h)(ip)
      }))), zi(), Ei(), rp || (rp = !0, (0, Ip.p)(Zp)), Op.gameBridge.attach(mO), (0, Op.installPageSources)({
        commands: {
          ...Op.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: bc.g
        },
        queries: tO,
        lookups: {
          ...Op.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...HO,
          Xu: bc.e,
          drawCallStats: hc.d
        }
      }), (0, fc.b)(), DO()
    }
  },
  41153: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      f: () => Lp,
      i: () => xp,
      j: () => Yp
    });
    var Op = cp(1971);
    let op = null,
      Ip = 0;
    const Sp = new Set;

    function xp() {
      return op
    }

    function Lp() {
      return Ip
    }

    function Yp(pp) {
      op = pp, Ip++, (0, Op.b)();
      for (const ip of Sp) ip()
    }

    function Dp(pp) {
      Sp.add(pp)
    }
  },
  41253: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      f: () => xp
    });
    var Op = cp(41262);
    let op = null,
      Ip = null;

    function Sp() {
      return op ??= cp.e(62).then((() => cp(60734))).catch((pp => {
        throw op = null, pp
      })), op
    }

    function xp() {
      return Ip ??= Promise.all([Sp(), (0, Op.h)()]).then((pp => {
        let [ip] = pp;
        return ip
      }), (pp => {
        throw Ip = null, pp
      })), Ip
    }
  },
  37286: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = {
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
  39215: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => op
    });
    const Op = ["description", "label"];

    function op(pp) {
      const ip = pp.type;
      return {
        type: ip,
        params: pp[ip]
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);