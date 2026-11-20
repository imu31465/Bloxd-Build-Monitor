export const id = 46;
export const ids = [46];
export const modules = {
  39208: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      e: () => ab,
      i: () => Wb
    });
    const kb = 6e3;

    function Wb(bb, cb) {
      return [Math.floor(bb[0] / cb) * cb, Math.floor(bb[1] / cb) * cb, Math.floor(bb[2] / cb) * cb]
    }

    function ab(bb) {
      const cb = (null !== bb && void 0 !== bb ? bb : "").match(/-?\d+(?:\.\d+)?/g);
      return cb && cb.length >= 3 ? [Number(cb[0]), Number(cb[1]), Number(cb[2])] : null
    }

    function Tb(bb, cb) {
      return bb === cb ? String(bb) : `${bb}-${cb}`
    }

    function Ub(bb, cb, sb, kb) {
      const Wb = [];
      let ab = new Map;
      for (let Tb = bb[2]; Tb < bb[2] + cb; Tb++) {
        const Ub = new Map;
        let Ib = bb[0];
        for (; Ib < bb[0] + cb;) {
          const Wb = kb(Ib, sb, Tb);
          let Hb = Ib;
          for (; Hb + 1 < bb[0] + cb && kb(Hb + 1, sb, Tb) === Wb;) Hb++;
          if (null !== Wb) {
            const bb = `${Ib} ${Hb} ${Wb}`,
              cb = ab.get(bb);
            cb ? (cb.z1 = Tb, ab.delete(bb), Ub.set(bb, cb)) : Ub.set(bb, {
              x0: Ib,
              x1: Hb,
              z0: Tb,
              z1: Tb,
              name: Wb
            })
          }
          Ib = Hb + 1
        }
        Wb.push(...ab.values()), ab = Ub
      }
      return Wb.push(...ab.values()), Wb.sort(((bb, cb) => bb.z0 - cb.z0 || bb.x0 - cb.x0)).map((bb => `x${Tb(bb.x0,bb.x1)} z${Tb(bb.z0,bb.z1)} ${bb.name}`))
    }

    function Ib(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kb;
      const Ib = [bb[0] + cb - 1, bb[1] + cb - 1, bb[2] + cb - 1],
        Hb = null !== Wb && Wb.every(((cb, sb) => Math.floor(cb) >= bb[sb] && Math.floor(cb) <= Ib[sb])),
        fb = [`The chunk from ${bb.join(" ")} to ${Ib.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Wb && fb.push(`The player's feet are at ${Wb.map(Math.floor).join(" ")}, ${Hb?"in this chunk":"outside this chunk"}.`);
      const Mb = [];
      for (let kb = bb[1]; kb <= Ib[1]; kb++) {
        const Wb = Ub(bb, cb, kb, sb).join("; "),
          ab = Mb[Mb.length - 1];
        (null === ab || void 0 === ab ? void 0 : ab.boxes) === Wb ? ab.to = kb : Mb.push({
          from: kb,
          to: kb,
          boxes: Wb
        })
      }
      const Xb = Mb.filter((bb => "" !== bb.boxes));
      0 === Xb.length && fb.push("It is all air.");
      let nb = fb.join("\n").length;
      for (const kb of Xb) {
        const bb = `y${Tb(kb.from,kb.to)}: ${kb.boxes}`;
        if (nb += bb.length + 1, nb > ab) {
          fb.push(`Cut short: the layers from y${kb.from} up aren't shown, as there are too many blocks.`);
          break
        }
        fb.push(bb)
      }
      return fb.join("\n")
    }
  },
  8406: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(19);

    function Wb() {
      return !kb.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36518: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      g: () => ab,
      h: () => Wb
    });
    const kb = [.25, .5, 1, 2, 4, 8, 16];

    function Wb(bb, cb) {
      const sb = kb;
      let Wb = sb.indexOf(bb);
      return -1 === Wb && (Wb = sb.findIndex((cb => cb >= bb)), -1 === Wb && (Wb = sb.length - 1)), "up" === cb ? sb[Math.min(Wb + 1, sb.length - 1)] : sb[Math.max(Wb - 1, 0)]
    }

    function ab(bb) {
      return bb <= kb[0]
    }

    function Tb(bb) {
      return bb >= kb[kb.length - 1]
    }
  },
  36151: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      c: () => ab
    });
    let kb = !1;

    function Wb() {
      return kb
    }

    function ab(bb) {
      return kb !== bb && (kb = bb, !0)
    }
  },
  38543: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(26),
      Wb = sb(1895);

    function ab(bb) {
      let {
        taskId: cb,
        progress: sb
      } = bb;
      const kb = Wb.e.get("_tasks");
      null !== kb && void 0 !== kb && kb[cb] && Wb.e.apply({
        _tasks: {
          ...kb,
          [cb]: {
            ...kb[cb],
            progress: sb
          }
        }
      })
    }
    kb.j.subscribe("clientTaskProgress", (bb => {
      ab(bb)
    }))
  },
  39183: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      h: () => mb,
      i: () => Hb,
      m: () => Mb,
      q: () => Ib,
      r: () => Tb,
      u: () => fb,
      v: () => lb
    });
    var kb = sb(1895),
      Wb = sb(26),
      ab = sb(1907);
    const Tb = (0, ab.k)((function() {
        var bb, cb, sb, Wb;
        return {
          health: null !== (bb = kb.e.get("_health")) && void 0 !== bb ? bb : null,
          maxHealth: null !== (cb = kb.e.get("_totalMaxHealth")) && void 0 !== cb ? cb : null,
          shield: null !== (sb = kb.e.get("_shield")) && void 0 !== sb ? sb : null,
          maxShield: null !== (Wb = kb.e.get("maxShield")) && void 0 !== Wb ? Wb : null
        }
      }), [], (0, ab.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Ub = [{
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

    function Ib(bb, cb) {
      return Ub[(bb ? 2 : 0) + (cb ? 1 : 0)]
    }
    const Hb = (0, ab.k)((function() {
      var bb;
      return null !== (bb = kb.e.get("_aura")) && void 0 !== bb ? bb : null
    }), [], (0, ab.j)("_aura"));

    function fb(bb) {
      return {
        watch: cb => (0, Wb.l)("shotPlayer", (sb => {
          let {
            playerId: kb,
            damage: Wb,
            wasCrit: ab,
            distance: Tb
          } = sb;
          bb(kb) && cb({
            damage: Wb,
            wasCrit: ab,
            distance: Tb
          })
        }))
      }
    }

    function Mb(bb) {
      return (0, ab.b)("chat", (cb => {
        let {
          serverChatMsgId: sb,
          content: kb,
          chatterEId: Wb
        } = cb;
        return {
          serverChatMsgId: null !== sb && void 0 !== sb ? sb : null,
          content: kb,
          author: Wb ? bb(Wb) : null
        }
      }))
    }
    class Xb {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const sb = this.shown;
        return bb !== this.needed && (this.needed = bb, this.neededSince = cb, null === bb && (this.shown = null)), this.shown !== this.needed && cb - this.neededSince > 200 && (this.shown = this.needed), this.shown !== sb
      }
    }

    function nb(bb) {
      return [{
        translationKey: `touchKeys:${bb}`
      }]
    }
    const mb = {
      open: nb("open"),
      close: nb("close"),
      milk: nb("milk"),
      shear: nb("shear"),
      tame: nb("tame"),
      feed: nb("feed"),
      ride: nb("ride")
    };

    function lb(bb) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: bb
      }]
    }
  },
  40178: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub,
      i: () => Tb
    });
    var kb = sb(3058);
    let Wb = null,
      ab = null;

    function Tb() {
      return ab ??= sb.e(208).then((() => sb(35987))).then((bb => {
        let {
          ITEM_SPRITES: cb,
          ITEM_SPRITES_WITHOUT_FILE: sb,
          ITEM_FILES_WITHOUT_SPRITE: ab
        } = bb;
        Wb = function(bb, cb, sb) {
          const Wb = new Set,
            ab = (0, kb.z)(cb);
          let Tb = 0;
          for (const [kb, Ub] of bb.entries()) kb === ab[Tb] ? Tb++ : Wb.add(Ub);
          if ("" !== sb)
            for (const Ub of sb.split(kb.r)) Wb.add(Ub);
          return Wb
        }(cb.split(kb.r), sb, ab)
      }), (bb => {
        throw ab = null, bb
      })), ab
    }

    function Ub(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Wb) || void 0 === sb ? void 0 : sb.has(bb)) && void 0 !== cb && cb
    }
  },
  39196: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => ab,
      i: () => Wb
    });
    const kb = 128;

    function Wb(bb, cb, sb, kb) {
      const Wb = 2 * cb - 1,
        ab = 1 - 2 * sb,
        Tb = bb(0) - Wb * bb(3),
        Ub = bb(4) - Wb * bb(7),
        Ib = bb(8) - Wb * bb(11),
        Hb = bb(1) - ab * bb(3),
        fb = bb(5) - ab * bb(7),
        Mb = bb(9) - ab * bb(11);
      kb[0] = Ub * Mb - Ib * fb, kb[1] = Ib * Hb - Tb * Mb, kb[2] = Tb * fb - Ub * Hb;
      const Xb = kb[0] * bb(3) + kb[1] * bb(7) + kb[2] * bb(11) < 0 ? -1 : 1,
        nb = Math.hypot(kb[0], kb[1], kb[2]) * Xb;
      return kb[0] /= nb, kb[1] /= nb, kb[2] /= nb, kb
    }

    function ab(bb, cb, sb, kb, Wb, ab) {
      const Tb = [Math.floor(cb[0]), Math.floor(cb[1]), Math.floor(cb[2])],
        Ub = [0, 0, 0],
        Ib = [1 / 0, 1 / 0, 1 / 0],
        Hb = [1 / 0, 1 / 0, 1 / 0];
      for (let Xb = 0; Xb < 3; Xb++) Ub[Xb] = Math.sign(sb[Xb]), 0 !== Ub[Xb] && (Hb[Xb] = Math.abs(1 / sb[Xb]), Ib[Xb] = (Tb[Xb] + (Ub[Xb] > 0 ? 1 : 0) - cb[Xb]) / sb[Xb]);
      let fb = 0,
        Mb = Math.abs(sb[0]) > Math.abs(sb[1]) ? 0 : 1;
      for (Math.abs(sb[2]) > Math.abs(sb[Mb]) && (Mb = 2); fb <= kb;) {
        if (bb(Tb[0], Tb[1], Tb[2])) return Wb[0] = Tb[0], Wb[1] = Tb[1], Wb[2] = Tb[2], ab[0] = 0, ab[1] = 0, ab[2] = 0, ab[Mb] = -Ub[Mb], !0;
        Mb = Ib[0] < Ib[1] ? 0 : 1, Ib[2] < Ib[Mb] && (Mb = 2), fb = Ib[Mb], Tb[Mb] += Ub[Mb], Ib[Mb] += Hb[Mb]
      }
      return !1
    }
  },
  39181: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      return Math.hypot(bb[0] - cb[0], bb[1] - cb[1], bb[2] - cb[2]) < sb + .5
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38553: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => fb
    });
    var kb = sb(1235),
      Wb = sb(1316),
      ab = sb(19),
      Tb = sb(1302),
      Ub = sb(1312),
      Ib = sb(1495),
      Hb = sb(36120);

    function fb(bb) {
      let {
        bb: cb,
        cb: sb
      } = bb;
      const fb = null !== cb && void 0 !== cb ? cb : (0, Ub.d)().gameNameWithVariation;
      (0, kb.D)(fb) && ((0, Hb.n)(), (0, Tb.db)((() => {
        console.log("Received matchmaking order from game server to game", cb), (0, ab.l)("inGameReplay"), (0, Ib.navigatePreserveSearch)((0, Wb.b)(fb, null !== sb && void 0 !== sb ? sb : void 0))
      }), "video_start"))
    }
  },
  38748: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(26),
      Wb = sb(1917);

    function ab(bb) {
      var cb, sb;
      const ab = (0, Wb.n)(null !== (cb = null === (sb = Wb.v.toggleFreeCam) || void 0 === sb ? void 0 : sb[0]) && void 0 !== cb ? cb : null);
      kb.j.QQ("showBottomMessage", {
        message: `Free Camera ${bb?"Enabled":"Disabled"}${ab?` - Press ${ab} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38545: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      i: () => Tb,
      j: () => Ub,
      k: () => Hb
    });
    var kb = sb(26),
      Wb = sb(1332);
    const ab = new Map;

    function Tb(bb, cb) {
      kb.j.QQ("newUiRequest", {
        id: bb,
        clientParameters: cb
      }, !0)
    }

    function Ub(bb) {
      kb.j.QQ("removeUiRequest", bb, !0);
      const cb = ab.get(bb);
      cb && (cb.tearDownNotification(), ab.delete(bb))
    }

    function Ib() {
      kb.j.QQ("clearUiRequests");
      for (const bb of ab.values()) bb.tearDownNotification();
      ab.clear()
    }

    function Hb(bb, cb, sb) {
      const kb = Wb.NotificationProvider.showPromptPopup({
        title: cb,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ab.set(bb, kb), kb.getResult().then((cb => {
        ab.delete(bb), "notificationTornDown" !== cb && sb(cb)
      }))
    }
  },
  39205: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb,
      d: () => Xb
    });
    var kb = sb(223),
      Wb = sb(39208);
    const ab = 20;

    function Tb(bb) {
      return bb.map(Math.floor).join(" ")
    }

    function Ub(bb) {
      return null === bb.amount || 1 === bb.amount ? bb.name : `${bb.amount} ${bb.name}`
    }
    var Ib = sb(39213),
      Hb = sb(1895),
      fb = sb(1312);

    function Mb(bb, cb) {
      if (!bb) return Ib.e;
      const sb = bb.playerFeet();
      if (!sb) return "The player isn't in the world yet, so no blocks can be seen.";
      const ab = kb.e.qm,
        Tb = (0, Wb.i)(null !== cb && void 0 !== cb ? cb : sb, ab),
        Ub = bb.chunkBlocks(Tb);
      return Ub ? (0, Wb.c)(Tb, ab, ((cb, sb, kb) => {
        const Wb = Ub(cb, sb, kb);
        return 0 === Wb ? null : bb.blockName(Wb).split("|")[0]
      }), sb) : `The chunk from ${Tb.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${sb.map(Math.floor).join(" ")}.`
    }

    function Xb(bb) {
      var cb, sb, kb;
      if (!bb) return Ib.f;
      const Wb = bb.playerFeet();
      if (!Wb) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Mb,
        heldSlot: Xb
      } = bb.inventory();
      return function(bb) {
        const cb = [];
        null !== bb.game && cb.push(`Game: ${bb.game}.`);
        const sb = null === bb.health ? "" : `, health ${Math.round(bb.health)}${null===bb.maxHealth?"":` of ${Math.round(bb.maxHealth)}`}`;
        cb.push(`The player (the creator) stands at ${Tb(bb.position)}${sb}, ${bb.creative?"in":"not in"} creative mode.`);
        const kb = bb.slots[bb.heldSlot];
        cb.push(kb ? `Holding (slot ${bb.heldSlot}): ${Ub(kb)}.` : `Holding nothing (slot ${bb.heldSlot} is empty).`);
        const Wb = bb.slots.flatMap(((bb, cb) => bb ? [`slot ${cb}: ${Ub(bb)}`] : []));
        cb.push(Wb.length > 0 ? `Inventory: ${Wb.join(", ")}.` : "Inventory: empty.");
        const Ib = cb => Math.hypot(cb.position[0] - bb.position[0], cb.position[1] - bb.position[1], cb.position[2] - bb.position[2]),
          Hb = [...bb.nearby].sort(((bb, cb) => Ib(bb) - Ib(cb)));
        if (0 === Hb.length) cb.push("No other players or mobs are near enough to see.");
        else {
          cb.push("Near them, nearest first:");
          for (const bb of Hb.slice(0, ab)) {
            const sb = "player" === bb.kind ? `player "${bb.name||"?"}"` : bb.name && bb.name !== bb.kind ? `${bb.kind} "${bb.name}"` : bb.kind,
              kb = Math.round(Ib(bb));
            cb.push(`- ${sb} at ${Tb(bb.position)}, ${kb} block${1===kb?"":"s"} away`)
          }
          Hb.length > ab && cb.push(`- and ${Hb.length-ab} more further away`)
        }
        return bb.droppedItems > 0 && cb.push(`${bb.droppedItems} dropped item${1===bb.droppedItems?" is":"s are"} on the ground nearby.`), cb.join("\n")
      }({
        game: null !== (cb = (0, fb.d)().gameNameWithVariation) && void 0 !== cb ? cb : null,
        position: Wb,
        health: null !== (sb = Hb.e.get("_health")) && void 0 !== sb ? sb : null,
        maxHealth: null !== (kb = Hb.e.get("_totalMaxHealth")) && void 0 !== kb ? kb : null,
        creative: !0 === Hb.e.get("creative"),
        heldSlot: Xb,
        slots: Mb,
        nearby: bb.nearby(),
        droppedItems: bb.droppedItems()
      })
    }
  },
  38569: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Ib,
      h: () => Hb
    });
    var kb = sb(1235),
      Wb = sb(1008),
      ab = sb(36434),
      Tb = sb(26);

    function Ub(bb) {
      let {
        lobbyName: cb,
        gameNameWithVariation: sb
      } = bb;
      return !(0, kb.F)(cb) || null !== sb && (sb.startsWith("testGym") || (0, Wb.k)(sb))
    }

    function Ib(bb) {
      return bb.Jc === ab.b.Leave || bb.Jc === ab.b.Cursor
    }

    function Hb(bb) {
      Tb.j.QQ("codeCollab", {
        type: bb.Jc,
        docKey: bb.gc,
        version: bb.Bc,
        editorCount: bb.tc,
        peers: bb.yc,
        updates: bb.Pc,
        playerId: bb.Dc,
        playerName: bb.Ec,
        colour: bb.Oc,
        anchor: bb.Gc,
        head: bb.Kc,
        existingCursors: bb.Zc,
        files: bb.zc,
        engineSettings: bb.qc
      })
    }
  },
  40150: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Db,
      C: () => ib,
      G: () => Eb,
      H: () => Fb,
      K: () => Gb,
      L: () => yb,
      N: () => Ob,
      R: () => tb,
      V: () => rb,
      Y: () => wb,
      d: () => ob,
      h: () => Zb,
      i: () => gb,
      m: () => Sb,
      q: () => Bb,
      u: () => Jb,
      x: () => Kb,
      z: () => Pb
    });
    var kb = sb(1371),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(2305),
      Ub = sb(4536),
      Ib = sb(4498);
    let Hb, fb = !1,
      Mb = !1,
      Xb = !1,
      nb = !1;
    const mb = 1300,
      lb = 3e3;
    let Qb = 0,
      eb = !1,
      Cb = !1,
      Nb = 0;
    const Vb = 2;
    let Lb = !1,
      ub = !1;
    const Yb = new Set,
      hb = new Set;

    function Jb() {
      return fb
    }

    function gb() {
      return Cb
    }

    function Bb() {
      return ub
    }

    function tb() {
      return (0, ab.r)() && !ub
    }

    function yb(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== ub) {
        ub = bb;
        for (const bb of [...hb]) bb(ub);
        cb && wb()
      }
    }

    function Pb(bb) {
      return hb.add(bb), () => {
        hb.delete(bb)
      }
    }

    function Db() {
      (0, Ub.d)(Tb.z.Menu, (0, ab.r)() ? 0 : Tb.z.Menu)
    }

    function Eb() {
      Cb = !1, Nb = 0, Db(), wb()
    }

    function ib(bb) {
      return Yb.add(bb), () => {
        Yb.delete(bb)
      }
    }

    function Ob(bb) {
      Mb = !1, bb !== fb && (fb = bb, nb = !1, clearTimeout(Hb), Xb = !fb && Lb, fb ? (eb = !1, Cb = !1, Nb = 0) : tb() && !Lb && (Cb = !0), Lb = !1, fb && !tb() && vb(), xb(), Xb && wb())
    }

    function Gb(bb) {
      bb !== eb && (eb = bb, bb || wb())
    }

    function Kb() {
      Mb = !1, nb || !0 !== db() || (nb = !0, clearTimeout(Hb), Hb = setTimeout(zb, mb))
    }

    function Zb() {
      return (!Mb || performance.now() - Qb > lb) && (Mb = (0, Ib.N)().lockPointer(), Qb = performance.now()), Mb
    }

    function zb() {
      qb() && Ab() && Zb()
    }

    function qb() {
      return tb() && !fb && !eb && !(0, kb.g)()
    }

    function db() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function Ab() {
      return Xb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== db()
    }

    function wb() {
      tb() ? qb() && !Cb && Ab() && Zb() : fb && !Lb && vb()
    }

    function rb() {
      Cb ? navigator.vendor.startsWith("Apple") ? Rb() : Nb = Vb : wb()
    }

    function ob() {
      Nb > 0 && 0 === --Nb && Rb()
    }

    function Sb() {
      Nb = 0
    }

    function Rb() {
      qb() && !0 === db() && Zb()
    }

    function vb() {
      Lb = !0, (0, Ib.N)().unlockPointer()
    }

    function Fb() {
      Mb = !1, Xb = !1, nb = !1, clearTimeout(Hb), eb = !1, Cb = !1, Nb = 0, Lb = !1;
      const bb = fb;
      fb = !1, bb && xb()
    }

    function xb() {
      for (const bb of [...Yb]) bb(fb);
      Wb.j.QQ("pointerLockUpdate", fb)
    }
  },
  40120: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      f: () => Ub,
      h: () => Mb,
      l: () => Hb,
      n: () => Tb,
      r: () => fb,
      s: () => Ib
    });
    let kb = null,
      Wb = null,
      ab = null;

    function Tb(bb) {
      kb = bb
    }

    function Ub() {
      return kb
    }

    function Ib(bb) {
      Wb = bb
    }

    function Hb() {
      return Wb
    }

    function fb(bb) {
      ab = bb
    }

    function Mb() {
      return ab
    }

    function Xb() {
      var bb, cb;
      return !0 === (null === (bb = Wb) || void 0 === bb || null === (cb = bb.currentViewer) || void 0 === cb ? void 0 : cb.inPlayback)
    }
  },
  40162: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Ub
    });
    var kb = sb(40002),
      Wb = sb(40014);

    function ab(bb) {
      if (bb.queries.drawCensus() < kb.qb.BYTES) return null;
      const cb = bb.memoryData(bb.scratch(), kb.qb.BYTES, 4, "the draw census");
      return null === cb ? null : {
        terrainOpaque: kb.qb.terrainOpaque(cb, 0),
        terrainTransparent: kb.qb.terrainTransparent(cb, 0),
        terrainPack: kb.qb.terrainPack(cb, 0),
        earthSky: kb.qb.earthSky(cb, 0),
        skyMeshes: kb.qb.skyMeshes(cb, 0),
        regular: kb.qb.regular(cb, 0),
        thin: kb.qb.thin(cb, 0),
        line: kb.qb.line(cb, 0),
        text: kb.qb.text(cb, 0),
        particles: kb.qb.particles(cb, 0)
      }
    }

    function Tb(bb) {
      const {
        terrainOpaque: cb,
        terrainTransparent: sb,
        earthSky: kb,
        skyMeshes: Wb,
        regular: ab,
        thin: Tb,
        line: Ub,
        text: Ib,
        particles: Hb
      } = bb;
      return cb + sb + kb + Wb + ab + Tb + Ub + Ib + Hb
    }

    function Ub() {
      const bb = (0, Wb.h)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const cb = ab(bb);
        if (null === cb) return [];
        const {
          terrainOpaque: sb,
          terrainTransparent: kb,
          terrainPack: Wb,
          earthSky: Ub,
          skyMeshes: Ib,
          regular: Hb,
          thin: fb,
          line: Mb,
          text: Xb,
          particles: nb
        } = cb;
        return [{
          label: "Drawn",
          value: `${Tb(cb)}`
        }, {
          label: "Terrain",
          value: `${sb} opaque / ${kb} transparent (${Wb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Hb} / ${fb}`
        }, {
          label: "Text / Lines",
          value: `${Xb} / ${Mb}`
        }, {
          label: "Sky / Particles",
          value: `${Ub+Ib} / ${nb}`
        }]
      }(bb.api) : []
    }
  },
  40166: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadIcons: () => Bb,
      setIconFileOverrides: () => tb,
      wasmIconLookups: () => Zb,
      wasmIconQueries: () => Kb
    });
    var kb = sb(4232),
      Wb = sb(4207),
      ab = sb(40168),
      Tb = sb(1881),
      Ub = sb(1870),
      Ib = sb(3050),
      Hb = sb(3058);
    let fb = null,
      Mb = null;

    function Xb(bb) {
      const cb = bb.startsWith(Hb.k),
        [sb, kb = sb, Wb = sb] = (cb ? bb.slice(Hb.k.length) : bb).split(Hb.h);
      return {
        top: sb,
        left: kb,
        right: Wb,
        half: cb
      }
    }

    function nb(bb) {
      const cb = null === fb ? void 0 : (0, Ib.b)(bb),
        sb = void 0 === cb ? 0 : fb.codes[cb];
      return 0 === sb ? void 0 : fb.pool[sb - 1]
    }
    var mb = sb(3043),
      lb = sb(4197),
      Qb = sb(4230),
      eb = sb(40176);
    const Cb = "item:";
    let Nb = null,
      Vb = null,
      Lb = null,
      ub = null,
      Yb = !1,
      hb = !1,
      Jb = null,
      gb = 0;

    function Bb() {
      return hb || (hb = !0, (0, Qb.k)().then((bb => {
        bb && (0, Tb.e)()
      }))), Lb ??= Promise.all([(0, mb.g)(), (Mb ??= sb.e(1).then((() => sb(41976))).then((bb => {
        let {
          BLOCK_FACE_RUNS: cb,
          BLOCK_FACES: sb,
          MAX_FACE_ITEM_ID: kb
        } = bb;
        fb = {
          codes: (0, Hb.D)(cb, kb + 1),
          pool: sb.split(Hb.r).map(Xb)
        }
      }), (bb => {
        throw Mb = null, bb
      })), Mb), (0, eb.e)(), sb.e(189).then((() => sb(8942)))]).then((bb => {
        let [, , cb, sb] = bb;
        cb.followBundledTextures(), Nb = cb, Vb = sb, (0, Tb.e)()
      }), (bb => {
        Lb = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), Lb
    }

    function tb(bb) {
      Jb = bb, gb++, (0, Tb.e)()
    }

    function yb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Jb) || void 0 === sb ? void 0 : sb.itemSprite(bb)) && void 0 !== cb ? cb : Nb.itemSpriteUrl(bb)
    }

    function Pb(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = Jb) || void 0 === sb ? void 0 : sb.blockTexture(bb)) && void 0 !== cb ? cb : Nb.blockTextureUrl(bb)
    }

    function Db(bb) {
      var cb;
      return null !== (cb = (0, mb.e)(bb)) && void 0 !== cb ? cb : bb
    }

    function Eb(bb, cb) {
      var sb, kb, Wb;
      return null !== (sb = null !== (kb = null !== (Wb = Pb(bb)) && void 0 !== Wb ? Wb : null === cb || void 0 === cb ? void 0 : cb.rotated[bb]) && void 0 !== kb ? kb : null === cb || void 0 === cb ? void 0 : cb.animated[bb]) && void 0 !== sb ? sb : Nb.notFoundUrl()
    }

    function ib(bb) {
      return void 0 !== (0, Ib.b)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Ib.f)(Number(bb)) : void 0
    }

    function Ob(bb) {
      var cb;
      if (bb.startsWith(Cb)) {
        var sb;
        const cb = (0, mb.e)(bb.slice(5));
        return null !== (sb = void 0 === cb ? null : yb(cb)) && void 0 !== sb ? sb : Nb.notFoundUrl()
      }
      return null !== (cb = Nb.particleUrl(bb)) && void 0 !== cb ? cb : Nb.notFoundUrl()
    }

    function Gb(bb, cb) {
      return "StairsBlock" === bb ? bb : cb ? "SlabBlock" : "CubeBlock"
    }
    const Kb = {
        async blockIcon(bb) {
          var cb;
          let {
            name: kb,
            size: Wb,
            lineWidth: ab
          } = bb;
          await Bb();
          const Ub = null !== (cb = ib(kb)) && void 0 !== cb ? cb : kb,
            Hb = (0, Qb.e)(Ub, Wb, ab);
          if (null !== Hb) return Hb;
          const fb = nb(Ub),
            Mb = (0, Ib.b)(Ub),
            Xb = void 0 === Mb || null === Vb ? void 0 : Vb.itemTypeNameOf(Mb);
          if (null === Nb || void 0 === fb) return "";
          const mb = [fb.top, fb.left, fb.right].some((bb => null === Pb(bb))),
            eb = mb ? await (ub ??= sb.e(201).then((() => sb(33944))).then((bb => (Yb && (Yb = !1, (0, Tb.e)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (ub = null, Yb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), ub) : null;
          if (mb && null === eb) return "";
          const Cb = {
              top: Eb(fb.top, eb),
              left: Eb(fb.left, eb),
              right: Eb(fb.right, eb),
              itemType: Gb(Xb, fb.half)
            },
            Lb = 0 === gb ? Ub : `${Ub}#${gb}`;
          return (await (0, lb.d)()).drawBlockIconUrl(Lb, Wb, ab, (() => Cb))
        }
      },
      Zb = {
        itemIcon: function(bb) {
          var cb, sb;
          if (null === Nb) return Bb(), Ub.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, Wb.j)(bb)) return {
            kind: "icon",
            url: null !== (sb = Nb.ingameIconUrl(bb)) && void 0 !== sb ? sb : Nb.notFoundUrl()
          };
          if (bb.startsWith(Wb.b)) return {
            kind: "icon",
            url: Ob(bb.slice(Wb.b.length))
          };
          if (0 === (0, Ib.h)()) return (0, ab.c)(), Ub.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Tb = null !== (cb = ib(bb)) && void 0 !== cb ? cb : bb,
            Hb = (0, Ib.b)(Tb),
            fb = void 0 === Hb ? void 0 : Vb.itemTypeNameOf(Hb);
          if (void 0 !== nb(Tb)) return {
            kind: "drawnBlock"
          };
          const Mb = function(bb) {
            var cb;
            return null !== (cb = yb(Db(bb))) && void 0 !== cb ? cb : Nb.notFoundUrl()
          }(Tb);
          if ((0, Qb.g)(Tb) && ! function(bb) {
              return null !== Jb && (null !== Jb.itemSprite(Db(bb)) || null !== Jb.model(bb))
            }(Tb)) return {
            kind: "model",
            url: Mb
          };
          if ("Gun" === fb) return {
            kind: "gun",
            url: Mb
          };
          if (void 0 !== Hb && "GrayscaleArmour" === Vb.itemTypeOf(Hb) || Object.hasOwn(kb.b, Tb)) {
            var Xb;
            const cb = null !== (Xb = (0, kb.c)(bb)) && void 0 !== Xb ? Xb : (0, kb.c)(Tb);
            if (cb) return {
              kind: "item",
              url: Mb,
              tint: cb
            }
          }
          return {
            kind: "item",
            url: Mb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== ib(bb) || (0, Wb.j)(bb) || bb.startsWith(Wb.b)
        },
        isItemName: function(bb) {
          return void 0 !== ib(bb)
        }
      }
  },
  40112: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      attachPlayGameSources: () => rs,
      playGameSources: () => ws
    });
    var kb = sb(1870),
      Wb = sb(40120),
      ab = sb(4498),
      Tb = sb(40014),
      Ub = sb(40129),
      Ib = sb(39183),
      Hb = sb(26),
      fb = sb(4517),
      Mb = sb(4512),
      Xb = sb(40054),
      nb = sb(40083),
      mb = sb(40134),
      lb = sb(40066);
    (0, lb.k)(fb.Yb.Chat, (bb => {
      if (bb.payloadKind !== Mb.lc.Msgpack) return;
      const cb = function(bb) {
        if (null === bb || "object" !== typeof bb || !("content" in bb)) return null;
        const {
          chatMsgId: cb,
          content: sb,
          chatterEId: kb
        } = bb;
        return {
          serverChatMsgId: null !== cb && void 0 !== cb ? cb : void 0,
          content: sb,
          chatterEId: void 0 === kb || null === kb ? void 0 : String(kb)
        }
      }((0, Xb.d)(bb.payload));
      null !== cb && Hb.j.QQ("chat", cb, !0)
    }));
    const Qb = {
        chatReceived: (0, Ib.m)((function(bb) {
          var cb, sb, kb;
          return {
            id: bb,
            name: null !== (cb = mb.f.getName(bb)) && void 0 !== cb ? cb : null,
            local: (0, nb.i)() === bb,
            profileEffect: null !== (sb = null === (kb = (0, mb.h)(bb)) || void 0 === kb ? void 0 : kb.profileEffect) && void 0 !== sb ? sb : null
          }
        }))
      },
      eb = {
        sendChatMessage(bb) {
          var cb;
          let {
            jT: sb,
            channelName: kb
          } = bb;
          null === (cb = (0, Tb.h)()) || void 0 === cb || cb.clientApi.sendChat(sb, kb)
        }
      };
    var Cb = sb(223),
      Nb = sb(1895),
      Vb = sb(40002),
      Lb = sb(39181);
    const ub = [0, 0, 0],
      Yb = {
        codeBlockClickable(bb) {
          var cb;
          const sb = (0, Tb.h)();
          if (null === sb || void 0 === sb || !sb.isSessionLive) return !1;
          const kb = sb.api;
          if (0 !== (Vb.n.playerFlags(kb.apiView, 0) & Vb.Nd.Crouching)) return !1;
          const Wb = kb.queries.directorEntity(kb.localId) >= Vb.ib.BYTES ? kb.memoryData(kb.scratch(), Vb.ib.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Wb) return !1;
          for (let ab = 0; ab < 3; ab++) ub[ab] = Vb.ib.feet(Wb, 0, ab);
          return ub[1] += Vb.ib.eyeHeight(Wb, 0), (0, Lb.b)(ub, bb, null !== (cb = Nb.e.get("blockReach")) && void 0 !== cb ? cb : Cb.e.tC)
        }
      },
      hb = {
        clickCodeBlock(bb) {
          var cb;
          null === (cb = (0, Tb.h)()) || void 0 === cb || cb.clickCodeBlock(bb)
        }
      };
    var Jb = sb(40026),
      gb = sb(40143),
      Bb = sb(1008),
      tb = sb(38604),
      yb = sb(4493),
      Pb = sb(40043),
      Db = sb(40020),
      Eb = sb(40047);

    function ib(bb) {
      if (null === bb) return null;
      const cb = [];
      for (const sb of bb) {
        const bb = Object.keys(sb)[0];
        if ("qb" === bb) {
          const {
            str: bb,
            style: kb,
            clickableUrl: Wb
          } = sb.qb, ab = Object.keys(bb)[0], Tb = bb[ab];
          "string" !== ab && "styledEntityName" !== ab && "styledTranslatedText" !== ab || cb.push({
            str: Tb,
            style: kb,
            clickableUrl: Wb
          })
        } else cb.push(sb[bb])
      }
      return cb
    }
    const Ob = {
      screenPos(bb) {
        var cb, sb;
        return null !== (cb = null === (sb = (0, Tb.h)()) || void 0 === sb ? void 0 : sb.renderFrame.projectWorldPosToScreenPos(bb)) && void 0 !== cb ? cb : {
          x: 0,
          y: 0
        }
      }
    };
    let Gb = !1;

    function Kb() {
      Gb || (Gb = !0, (0, lb.k)(fb.Yb.ProgressBarUpdate, (bb => {
        const cb = (0, Eb.j)(bb);
        (0, Eb.c)(cb) && Hb.j.QQ("progressBarUpdate", cb, !0)
      })), (0, lb.k)(Pb.C, (bb => {
        const cb = (0, Eb.g)(Pb.C, bb);
        cb && Hb.j.QQ("middleScreenBarInitiate", {
          duration: cb.Dk,
          Ek: cb.Ek,
          horizBarRemOffset: cb.ik
        }, !0)
      })), (0, lb.k)(fb.Yb.RemoveMiddleScreenBar, (() => {
        Hb.j.QQ("middleScreenBarRemove")
      })), (0, lb.k)(Pb.db, (bb => {
        const cb = (0, Eb.g)(Pb.db, bb);
        if (cb) {
          var sb;
          const bb = cb.Ns ? null === (sb = (0, Tb.h)()) || void 0 === sb ? void 0 : sb.renderFrame.projectDirectionToScreenPos(cb.Ns) : void 0;
          Hb.j.QQ("sendHitmarker", {
            Cs: cb.Cs,
            screenPos: bb
          }, !0)
        }
      })), (0, lb.k)(Pb.hb, (bb => {
        const cb = (0, Eb.g)(Pb.hb, bb);
        if (cb) {
          const {
            id: bb,
            position: sb,
            style: kb,
            La: Wb,
            Ya: ab
          } = cb;
          Hb.j.QQ("setDirectionArrow", {
            id: bb,
            position: sb,
            style: kb,
            text: ib(Wb),
            Ya: ab
          }, !0)
        }
      })), (0, lb.k)(Pb.f, (bb => {
        const cb = (0, Eb.g)(Pb.f, bb);
        cb && Hb.j.QQ("clearDirectionArrow", {
          id: cb.id
        }, !0)
      })), (0, lb.k)(Pb.t, (bb => {
        const cb = (0, Eb.g)(Pb.t, bb);
        cb && Hb.j.QQ("flyingMiddleMessage", {
          content: ib(cb.cT),
          sT: cb.sT,
          kT: cb.kT
        }, !0)
      })), (0, lb.k)(fb.Yb.WorldVariation, (bb => {
        const cb = (0, Eb.j)(bb);
        if ("string" === typeof cb) {
          const bb = cb === Bb.g ? null : {
            message: `Currently loaded as variation: ${cb}`,
            type: "Warning"
          };
          Hb.j.QQ("showPermanentBottomMessage", bb, !0)
        }
      })), (0, lb.k)(Pb.R, (bb => {
        const cb = (0, Eb.g)(Pb.R, bb);
        cb && function(bb, cb) {
          const {
            type: sb,
            params: kb
          } = (0, tb.g)(cb), Wb = {
            ...kb
          };
          for (const ab of tb.d) Wb[ab] && (Wb[ab] = ib(Wb[ab]));
          yb.c.queueQTE(bb, sb, Wb).getResult().then((cb => {
            var sb;
            "boolean" === typeof cb && (null === (sb = (0, Tb.h)()) || void 0 === sb || sb.send(Db.c.QteResponse, {
              qteId: bb,
              qteResponse: cb
            }))
          }))
        }(cb.id, cb.Db)
      })), (0, lb.k)(Pb.Y, (bb => {
        const cb = (0, Eb.g)(Pb.Y, bb);
        "number" === typeof cb && yb.c.cancelQTE(cb)
      })), (0, lb.g)((() => {
        yb.c.reset(), Hb.j.QQ("showPermanentBottomMessage", null, !0)
      })), (0, lb.j)((() => {
        yb.c.reset()
      })), (0, lb.k)(fb.Yb.EditItemCraftingRecipes, (bb => {
        const cb = (0, Eb.j)(bb);
        (0, Eb.c)(cb) && Hb.j.QQ("craftingRecipesEdited", {
          itemName: cb.craftingRecipeItemName,
          recipesForItem: cb.recipesForItem
        })
      })), (0, lb.k)(Pb.X, (bb => {
        const cb = (0, Eb.g)(Pb.X, bb);
        cb && Hb.j.QQ("craftingRecipesEdited", {
          itemName: cb.FW,
          recipesForItem: []
        })
      })))
    }
    var Zb = sb(19);
    const zb = [{
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

    function qb(bb) {
      return Vb.n.playerFlags(bb.api.apiView, 0)
    }
    const db = {
        freeCamera: (0, nb.e)((bb => () => {
          const cb = bb.isSessionLive && 0 !== (qb(bb) & Vb.Nd.FreeCamMoves),
            sb = bb.freeCameraAllowed() && null === Zb.d.get("scriptedCameraFacing");
          return zb[(sb ? 2 : 0) + (cb ? 1 : 0)]
        }), zb[0], (bb => (0, ab.y)(bb)))
      },
      Ab = {
        setFreeCameraMovesFly: bb => {
          var cb;
          null === (cb = (0, Tb.h)()) || void 0 === cb || cb.setFreeCameraMovesFly(bb)
        }
      },
      wb = {
        freeCameraPos: () => {
          const bb = (0, Tb.h)();
          return null !== bb && void 0 !== bb && bb.isSessionLive && bb.renderFrame.hasView && 0 !== (qb(bb) & Vb.Nd.FreeCam) ? bb.renderFrame.cameraPosition : null
        }
      };
    var rb = sb(38748);
    let ob = !1,
      Sb = !1;

    function Rb() {
      const bb = (0, Tb.h)();
      if (null === bb || void 0 === bb || !bb.isSessionLive) return void(ob = !1);
      const cb = 0 !== (Vb.n.playerFlags(bb.api.apiView, 0) & Vb.Nd.FreeCam);
      cb !== ob && (ob = cb, (0, rb.c)(cb))
    }
    var vb = sb(344),
      Fb = sb(36604),
      xb = sb(1907);
    var jb = sb(40145),
      pb = sb(40076);
    const bc = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let cc = "off";

    function sc(bb) {
      var cb;
      return null === bb ? null : {
        label: null !== (cb = (0, jb.d)(bb, "interactionPrompt")) && void 0 !== cb ? cb : null
      }
    }
    const kc = new Map([
      [Vb.uc.Open, {
        label: Ib.h.open
      }],
      [Vb.uc.Close, {
        label: Ib.h.close
      }],
      [Vb.uc.Milk, {
        label: Ib.h.milk
      }],
      [Vb.uc.Shear, {
        label: Ib.h.shear
      }],
      [Vb.uc.Tame, {
        label: Ib.h.tame
      }],
      [Vb.uc.Feed, {
        label: Ib.h.feed
      }],
      [Vb.uc.Ride, {
        label: Ib.h.ride
      }]
    ]);
    class Wc {
      constructor() {
        this.target = bc, this.Jf = Vb.cd, this.optionName = null, this.pickaxe = new Ib.d
      }
      read(bb) {
        var cb;
        const sb = Vb.n.targetBlockId(bb.api.apiView, 0);
        sb !== this.Jf && (this.Jf = sb, this.optionName = sb === Vb.cd ? null : `${bb.tables.getMetaInfo(sb).rootName}CrosshairText`);
        const kb = null === this.optionName ? null : null !== (cb = bb.tables.getClientOption(this.optionName)) && void 0 !== cb ? cb : null;
        this.pickaxe.update(function(bb, cb) {
          var sb, kb, Wb;
          if (0 === (Vb.n.playerFlags(bb.api.apiView, 0) & Vb.Nd.Breaking) || cb === Vb.cd || 0 === cb) return null;
          const {
            tables: ab
          } = bb;
          if (!0 === ab.getClientOption("creative")) return null;
          const Tb = ab.nameOfId(cb),
            Ub = null === (sb = bb.items.qU()) || void 0 === sb ? void 0 : sb.name,
            Ib = null !== (kb = ab.getItemStat(Tb, "harvestLevel")) && void 0 !== kb ? kb : 0;
          return (0, vb.Ec)({
            blockHarvestType: ab.getDefaultItemStat(Tb, "harvestType"),
            blockHarvestLevel: ab.getDefaultItemStat(Tb, "harvestLevel"),
            harvestLevel: Ib,
            heldToolType: void 0 === Ub ? void 0 : ab.getDefaultItemStat(Ub, "harvests"),
            heldToolLevel: void 0 === Ub ? void 0 : ab.getDefaultItemStat(Ub, "level")
          }) && null !== (Wb = Fb.n[Ib]) && void 0 !== Wb ? Wb : null
        }(bb, sb)), bb.watchPromptPick(cc);
        const Wb = "touch" === cc ? function(bb) {
          var cb;
          const sb = bb.interactLabel;
          return sb === Vb.uc.Entity ? sc(bb.promptEntity) : sb === Vb.uc.TameWith ? {
            label: (0, Ib.v)(bb.tables.nameOfId(bb.interactIcon))
          } : null !== (cb = kc.get(sb)) && void 0 !== cb ? cb : null
        }(bb) : sc(bb.promptEntity);
        return this.target = (0, xb.m)(this.target, {
          interactPrompt: Wb,
          blockText: kb,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let ac = null;
    const Tc = {
      current: () => {
        var bb, cb;
        return null !== (bb = null === (cb = ac) || void 0 === cb ? void 0 : cb.target) && void 0 !== bb ? bb : bc
      },
      watch: bb => {
        const cb = new Wc;
        ac = cb;
        const sb = (0, nb.l)((sb => {
          let kb = cb.read(sb);
          bb(kb);
          const Wb = (0, ab.C)((() => {
            const Wb = cb.read(sb);
            Wb !== kb && (kb = Wb, bb(Wb))
          }));
          return () => {
            Wb(), sb.watchPromptPick("off")
          }
        }));
        return () => {
          sb(), ac === cb && (ac = null)
        }
      }
    };
    let Uc = 0,
      Ic = 0;
    const Hc = {
        health: Ib.r,
        aura: Ib.i,
        hotbar: pb.c.states.hotbar,
        heldItemAim: pb.c.states.heldItemAim,
        crouching: (0, nb.e)((bb => function(bb) {
          const cb = () => 0 !== (Vb.n.playerFlags(bb.apiView, 0) & Vb.Nd.Crouching);
          return {
            current: cb,
            watch(bb) {
              let sb = cb();
              return (0, ab.y)((() => {
                const kb = cb();
                kb !== sb && (sb = kb, bb(kb))
              }))
            }
          }
        }(bb.api).current), !1, (bb => (0, ab.y)(bb))),
        flight: (0, nb.e)((bb => () => function(bb) {
          const cb = Vb.n.playerFlags(bb.apiView, 0);
          return (0, Ib.q)(0 !== (cb & Vb.Nd.CanFly), 0 !== (cb & Vb.Nd.Flying))
        }(bb.api)), (0, Ib.q)(!1, !1), (bb => (0, ab.y)(bb))),
        gliderBoostFuel: (0, nb.e)((bb => () => Vb.n.gliderBoostFuel(bb.api.apiView, 0)), 0, (bb => (0, ab.y)(bb))),
        crosshairTarget: Tc
      },
      fc = {
        hotbarSlotRequested: pb.c.events.hotbarSlotRequested,
        hotbarScrolled: pb.c.events.hotbarScrolled,
        numberKeyPressed: pb.c.events.numberKeyPressed,
        shotDamageToShow: (0, Ib.u)((bb => !0 === (0, jb.d)(bb, "showDamageAmounts")))
      },
      Mc = {
        selectHotbarSlot: pb.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: bb => {
          cc = bb
        }
      },
      Xc = {
        momentumFrac: function() {
          var bb, cb, sb;
          const kb = (0, Tb.h)(),
            Wb = performance.now(),
            ab = null === kb || void 0 === kb || null === (bb = kb.items.qU()) || void 0 === bb || null === (cb = bb.attributes) || void 0 === cb || null === (sb = cb.customAttributes) || void 0 === sb ? void 0 : sb.enchantments;
          return Uc = null !== kb && null !== ab && void 0 !== ab && ab.Momentum ? 0 !== (Vb.n.playerFlags(kb.api.apiView, 0) & Vb.Nd.Breaking) ? Math.max(0, Vb.n.momentumFrac(kb.api.apiView, 0)) : Math.max(0, Uc - (Wb - Ic) / 1500) : 0, Ic = Wb, Uc
        }
      };
    var nc = sb(40005),
      mc = sb(1253),
      lc = sb(36151),
      Qc = sb(8406),
      ec = sb(1626),
      Cc = sb(2305),
      Nc = sb(4523);
    let Vc = !1;

    function Lc(bb) {
      Vc = bb
    }

    function uc() {
      "inGame" !== Zb.d.get("gameState") || (0, ec.r)() || Hb.j.QQ("ctrlCrouchWithoutFullscreen")
    }
    let Yc = !1;
    const hc = {
        OpenEmoteWheel: () => {
          Lc(!0), Yc = !0, queueMicrotask((() => {
            Yc && (Yc = !1, Hb.j.QQ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Hb.j.QQ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, lc.b)() || Hb.j.QQ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, lc.b)() || Hb.j.QQ("XKeyPressed")
        },
        CtrlCrouch: uc,
        "primary-fire": () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      Jc = {
        OpenEmoteWheel: () => {
          Lc(!1), Yc ? (Yc = !1, (0, Qc.e)() || Hb.j.QQ("requestEmoteWheelHoldOpen")) : Hb.j.QQ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: uc,
        "primary-fire": () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Hb.j.QQ("mouseState", {
            Gf: mc.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let gc = !1;

    function Bc() {
      gc || (gc = !0, (0, Nc.i)((bb => {
        if ((0, Wb.b)()) return;
        const cb = (0, Nc.h)(bb) ? "primary-fire" : bb.action;
        var sb;
        if (bb.down) {
          if (0 === (bb.flags & Cc.b.Synthetic)) {
            var kb;
            null === (kb = hc[cb]) || void 0 === kb || kb.call(hc)
          }
        } else null === (sb = Jc[cb]) || void 0 === sb || sb.call(Jc)
      })))
    }
    var tc = sb(334),
      yc = sb(117),
      Pc = sb(37),
      Dc = sb(40150),
      Ec = sb(1312),
      ic = sb(38569);
    let Oc = !1;
    const Gc = {
      sendCodeCollab(bb) {
        var cb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.CodeCollab, (0, Db.p)(bb), (0, ic.e)(bb))
      }
    };
    let Kc = null,
      Zc = !1,
      zc = null;

    function qc() {
      return "inGame" === Zb.d.get("gameState") && !(0, lc.b)()
    }
    const dc = {
        OpenInventory: bb => {
          (0, ec.y)(bb, "inventory", (0, nc.o)())
        },
        OpenShop: bb => {
          Kc && qc() && (0, ec.v)(bb, tc.r.SHOP, !Kc.shopIsEmpty(Nb.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: bb => {
          qc() && (0, ec.v)(bb, tc.r.LOBBY_LEADERBOARD, !!Nb.e.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: bb => {
          var cb;
          const sb = null === (cb = Kc) || void 0 === cb ? void 0 : cb.getClientGameMapKey();
          sb ? (0, ec.C)(bb, !0, sb) : (0, ec.y)(bb, "retentionFeatures", !(!Nb.e.get("_tasks") && !Nb.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: bb => {
          (0, ec.y)(bb, "inviteLink", yc.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: bb => {
          qc() && function(bb) {
            var cb;
            const sb = (0, Tb.h)(),
              kb = null !== sb && void 0 !== sb && sb.isSessionLive ? sb.api : null,
              Wb = kb ? kb.aN(kb.localId) : null,
              ab = null !== (cb = null === Wb || void 0 === Wb ? void 0 : Wb.map((bb => Math.floor(bb)))) && void 0 !== cb ? cb : null;
            (0, ec.C)(bb, null !== ab && (0, ic.c)((0, Ec.d)()), (() => {
              Hb.j.QQ("EditLobbyCode", ab)
            }))
          }(bb)
        },
        HideUi: () => {
          Hb.j.QQ("showUi", !1)
        }
      },
      Ac = {
        HideUi: () => {
          Hb.j.QQ("showUi", !0)
        }
      };

    function wc() {
      Zc || (Zc = !0, sb.e(151).then((() => sb(41956))).then((bb => {
        Kc = bb
      }), (bb => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", bb)
      })), (0, Dc.C)((bb => {
        bb || !(0, Dc.i)() || (0, yc.isMobile)() || !Pc.h.getItem("disableFullscreen") || (0, ec.q)() || Zb.d.set({
          openEverythingMenuName: tc.r.SETTINGS
        })
      })), (0, Nc.i)((bb => {
        let {
          action: cb,
          down: sb,
          press: kb
        } = bb;
        var ab, Tb;
        (0, Wb.b)() || (sb ? null === (ab = dc[cb]) || void 0 === ab || ab.call(dc, function(bb) {
          var cb;
          if (0 === bb || (null === (cb = zc) || void 0 === cb ? void 0 : cb.press) !== bb) {
            const cb = {
              press: bb,
              event: new Event("inputAction")
            };
            zc = cb, queueMicrotask((() => {
              zc === cb && (zc = null)
            }))
          }
          return zc.event
        }(kb)) : null === (Tb = Ac[cb]) || void 0 === Tb || Tb.call(Ac))
      })))
    }
    var rc = sb(38543),
      oc = sb(38553),
      Sc = sb(38545);
    const Rc = {
      completeTask(bb) {
        var cb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.CompleteTask, (0, Db.q)(bb))
      },
      setServerCookie(bb) {
        var cb;
        let {
          key: sb,
          value: kb
        } = bb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.GeneralCookieSet, (0, Db.u)({
          BT: sb,
          tT: kb
        }))
      },
      answerUiRequest(bb) {
        var cb;
        let {
          id: sb,
          ET: kb
        } = bb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.UiRequestResp, (0, Db.T)({
          AU: sb,
          wU: kb,
          rU: 5
        }))
      },
      chooseRewardedAd(bb) {
        var cb;
        let {
          id: sb,
          ET: kb
        } = bb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.UiRequestResponded, (0, Db.S)({
          id: sb,
          ET: kb
        }))
      },
      requestLeaderboard(bb) {
        var cb;
        let {
          category: sb,
          timeframe: kb,
          seeTop: Wb
        } = bb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.LeaderboardRequest, {
          category: sb,
          timeframe: kb,
          seeTop: Wb
        })
      }
    };
    let vc = !1;
    const Fc = Cb.e.YC / 2,
      xc = [Fc, -Fc, -Fc, -Fc, Fc, Fc, -Fc, Fc],
      jc = [0, 0, 0];

    function pc(bb, cb, sb) {
      for (let kb = 0; kb < bb.length; kb += 2)
        if (bb[kb] === cb && bb[kb + 1] === sb) return !0;
      return !1
    }
    const bs = {
      blocksStandingOn: function() {
        const bb = (0, Tb.h)();
        if (null === bb) return [];
        const {
          api: cb,
          chunks: sb,
          tables: kb
        } = bb;
        if (!cb.readPosition(cb.localId, jc)) return [];
        const [Wb, ab, Ub] = jc, Ib = Math.ceil(ab) - 1, Hb = [], fb = [];
        for (let Tb = 0; Tb < xc.length; Tb += 2) {
          const bb = Wb + xc[Tb],
            cb = Ub + xc[Tb + 1];
          if (Number.isInteger(bb) || Number.isInteger(cb)) continue;
          const ab = Math.floor(bb),
            Mb = Math.floor(cb);
          if (pc(fb, ab, Mb)) continue;
          const Xb = sb.Jf(ab, Ib, Mb);
          kb.isSolidBlockId(Xb) && (fb.push(ab, Mb), Hb.push(kb.nameOfId(Xb)))
        }
        return Hb
      },
      dropAhead: function() {
        const bb = (0, Tb.h)();
        return null !== bb && 0 !== (Vb.n.playerFlags(bb.api.apiView, 0) & Vb.Nd.DropAhead)
      }
    };
    var cs = sb(36518),
      ss = sb(38648),
      ks = sb(1332),
      Ws = sb(40090);
    const as = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Ts = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Us() {
      const bb = new Set;
      return {
        add: cb => (bb.add(cb), () => {
          bb.delete(cb)
        }),
        fire() {
          for (const cb of bb) cb()
        }
      }
    }
    const Is = Object.freeze([]);

    function Hs(bb, cb) {
      let sb, {
        rereads: kb,
        followLocalId: Wb
      } = cb;
      const Tb = () => (sb = (0, xb.m)(sb, bb()), sb);
      return {
        current: Tb,
        watch(bb) {
          const cb = (0, mb.c)((cb => {
            kb(cb) && bb(Tb())
          }));
          if (!Wb) return cb;
          let sb = (0, nb.i)();
          const Ub = (0, ab.C)((() => {
            const cb = (0, nb.i)();
            cb !== sb && (sb = cb, bb(Tb()))
          }));
          return () => {
            cb(), Ub()
          }
        }
      }
    }
    const fs = {
        players: Hs((function() {
          const bb = mb.f.ids(),
            cb = {};
          for (const ab of bb) {
            var sb, kb, Wb;
            cb[ab] = {
              name: null !== (sb = mb.f.getName(ab)) && void 0 !== sb ? sb : null,
              ranks: null !== (kb = mb.f.getSetting(ab, "ranks")) && void 0 !== kb ? kb : Is,
              cosmetics: null !== (Wb = (0, mb.h)(ab)) && void 0 !== Wb ? Wb : null
            }
          }
          return {
            ids: bb,
            byId: cb,
            localId: (0, nb.i)()
          }
        }), {
          rereads: bb => "roster" !== bb.kind || bb.members || bb.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Hs((function() {
          const bb = {};
          for (const Wb of mb.f.ids()) {
            var cb, sb, kb;
            bb[Wb] = {
              colour: null !== (cb = mb.f.getSetting(Wb, "colorInLobbyLeaderboard")) && void 0 !== cb ? cb : null,
              values: null !== (sb = mb.f.getSetting(Wb, "lobbyLeaderboardValues")) && void 0 !== sb ? sb : null,
              tags: null !== (kb = mb.f.getSetting(Wb, "lobbyLeaderboardTags")) && void 0 !== kb ? kb : null
            }
          }
          return bb
        }), {
          rereads: function(bb) {
            if ("roster" !== bb.kind) return "reset" === bb.kind;
            const {
              members: cb,
              settings: sb
            } = bb;
            return cb || sb.has("colorInLobbyLeaderboard") || sb.has("lobbyLeaderboardValues") || sb.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ms = {
        cosmeticsUpdated: {
          watch: bb => (0, mb.c)((cb => {
            if ("cosmetics" !== cb.kind) return;
            const sb = (0, nb.i)();
            bb(cb.updates.map((bb => {
              let {
                nk: cb,
                mk: kb,
                lk: Wb
              } = bb;
              return {
                local: cb === sb,
                mk: kb,
                lk: Wb
              }
            })))
          }))
        }
      };
    var Xs = sb(2697),
      ns = sb(1704),
      ms = sb(667),
      ls = sb(40152);
    let Qs = !1,
      es = null;
    const Cs = {
      setShopOpen(bb) {
        var cb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.ShopMenuChanged, (0, Db.N)(bb))
      },
      buyShopItem(bb) {
        var cb;
        let {
          categoryKey: sb,
          itemKey: kb,
          userInput: Wb
        } = bb;
        null === (cb = (0, Tb.h)()) || void 0 === cb || cb.send(Db.c.ItemBought, {
          categoryKey: sb,
          itemKey: kb,
          shopVersion: Nb.e.get("_shopVersion"),
          userInput: Wb
        })
      }
    };
    let Ns = !1;
    var Vs = sb(4536);
    const Ls = Cc.z.LookFrozen | Cc.z.ClicksSuppressed;

    function us(bb, cb) {
      var sb;
      null !== (sb = (0, Tb.h)()) && void 0 !== sb && sb.send(bb, cb) || console.warn(`[bloxd-wasm-client] message ${bb} not sent: no live game or the core's command ring is full`)
    }(0, lb.k)(Pb.jb, (bb => {
      const cb = (0, Eb.g)(Pb.jb, bb);
      void 0 !== cb && Hb.j.QQ("setDiscordReportKey", cb)
    }));
    const Ys = {
      ignorePlayer(bb) {
        us(Db.c.IgnoreUser, (0, Db.y)({
          bU: bb
        }))
      },
      reportPlayer(bb) {
        let {
          playerId: cb,
          chatMsgId: sb,
          YT: kb,
          details: Wb
        } = bb;
        us(Db.c.UserReport, (0, Db.db)({
          kM: cb,
          WM: sb,
          YT: kb,
          hT: Wb
        }))
      },
      reportWorldCodeChat(bb) {
        let {
          chatMsgId: cb,
          YT: sb,
          details: kb
        } = bb;
        us(Db.c.UserReport, (0, Db.db)({
          kM: "",
          WM: cb,
          YT: sb,
          hT: kb
        }))
      },
      requestDiscordReportKey(bb) {
        us(Db.c.ReqDiscordReportKey, (0, Db.H)(bb))
      },
      reportLobbyOrGame(bb) {
        let {
          target: cb,
          YT: sb,
          details: kb
        } = bb;
        "customGame" === cb ? us(Db.c.CustomGameReport, (0, Db.s)({
          YT: sb,
          hT: kb
        })) : us(Db.c.LobbyReport, (0, Db.z)({
          YT: sb,
          hT: kb
        }))
      },
      updateMyCosmetic(bb) {
        us(Db.c.UpdateMyCosmetic, (0, Db.ab)(bb))
      },
      holdEmoteWheel(bb) {
        !bb || Vc ? (0, Vs.d)(Ls, bb ? Ls : 0) : Hb.j.QQ("requestEmoteWheelHoldRelease")
      }
    };
    var hs = sb(40154),
      gs = sb(9017),
      Bs = sb(39196);
    const ts = [0, 0, 0],
      ys = [0, 0, 0],
      Ps = [0, 0, 0],
      Ds = {
        blockAtViewPoint(bb) {
          let {
            x: cb,
            y: sb
          } = bb;
          const kb = (0, Tb.h)();
          if (null === kb || void 0 === kb || !kb.renderFrame.hasView) return null;
          const {
            renderFrame: Wb,
            clientApi: ab,
            api: Ub
          } = kb;
          let Ib = 0;
          return (0, Bs.g)(((bb, cb, sb) => (Ib = ab.getBlockId(bb, cb, sb), 0 !== Ib)), Wb.cameraPosition, (0, Bs.i)((bb => Vb.n.viewProj(Ub.apiView, 0, bb)), cb, sb, ts), Bs.c, ys, Ps) ? {
            pos: [ys[0], ys[1], ys[2]],
            normal: [Ps[0], Ps[1], Ps[2]],
            name: (0, gs.f)(Ib)
          } : null
        }
      },
      Es = {
        setBlockHighlight(bb) {
          var cb;
          null === (cb = (0, Tb.h)()) || void 0 === cb || cb.setBlockHighlight(bb)
        }
      };
    var is = sb(1881),
      Os = sb(40160),
      Gs = sb(40162),
      Ks = sb(40166);
    var Zs = sb(620),
      zs = sb(39205);

    function qs(bb) {
      if (null === bb || void 0 === bb || !bb.isCoreRunning) return null;
      const {
        api: cb,
        chunks: sb,
        items: kb,
        tables: Wb
      } = bb;
      return {
        playerFeet() {
          const bb = cb.aN(cb.localId);
          return null !== bb && void 0 !== bb && bb.every(Number.isFinite) ? bb : null
        },
        chunkBlocks: bb => sb.isLoaded(bb[0], bb[1], bb[2]) ? (bb, cb, kb) => sb.Jf(bb, cb, kb) : null,
        blockName: bb => Wb.nameOfId(bb),
        inventory: () => ({
          slots: kb.playerItems().map((bb => bb ? {
            name: bb.name,
            amount: bb.amount
          } : null)),
          heldSlot: kb.selectedSlot
        }),
        nearby() {
          const sb = [];
          for (let Wb = 0; Wb < cb.idStr.length; Wb++) {
            var kb;
            const ab = cb.idStr[Wb],
              Tb = cb.serverIds[Wb],
              Ub = cb.kinds[Wb];
            if (null === ab || cb.isLocal(Tb) || Ub >>> Vb.b !== Vb.m.Lifeform) continue;
            const Ib = cb.aN(Tb),
              Hb = Zs.m[Ub & Vb.d];
            Ib && void 0 !== Hb && sb.push({
              kind: "Player" === Hb ? "player" : Hb,
              name: null !== (kb = bb.clientApi.getEntityName(ab)) && void 0 !== kb ? kb : null,
              position: Ib
            })
          }
          return sb
        },
        droppedItems() {
          let bb = 0;
          for (let sb = 0; sb < cb.idStr.length; sb++) null !== cb.idStr[sb] && cb.kinds[sb] >>> Vb.b === Vb.m.Item && bb++;
          return bb
        }
      }
    }
    const ds = {
        worldCodeAiChunk: bb => Promise.resolve((0, zs.b)(qs((0, Tb.h)()), bb)),
        worldCodeAiGameState: () => Promise.resolve((0, zs.d)(qs((0, Tb.h)())))
      },
      As = function(bb) {
        const cb = Us(),
          kb = Us(),
          Wb = new Set,
          ab = new Set,
          Tb = () => {
            var cb, sb;
            return null !== (cb = null === (sb = bb.runtime()) || void 0 === sb ? void 0 : sb.currentViewer) && void 0 !== cb ? cb : null
          };
        let Ub = null,
          Ib = null;
        const fb = (bb, cb) => ({
            current: bb,
            watch(sb) {
              let kb = bb();
              return cb.add((() => {
                const cb = bb();
                cb !== kb && (kb = cb, sb(cb))
              }))
            }
          }),
          Xb = bb => ({
            watch: cb => (bb.add(cb), () => {
              bb.delete(cb)
            })
          }),
          nb = bb => {
            const cb = Tb(),
              sb = null === cb || void 0 === cb ? void 0 : cb.view;
            cb && sb && cb.seek(Math.max(0, Math.min(sb.totalTicks - 1, sb.aX + bb * Mb.Hd)))
          },
          mb = {
            replay: fb((() => {
              var bb;
              const cb = Tb(),
                sb = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.view) && void 0 !== bb ? bb : null;
              return null === cb || null === sb || sb.state === Mb.ud.None ? (Ub = null, null) : (Ub = (0, xb.m)(Ub, {
                id: cb.id,
                aX: sb.aX,
                totalTicks: sb.totalTicks,
                hY: Mb.Hd,
                playing: sb.state === Mb.ud.Playing,
                speed: sb.speed,
                cameraMode: sb.cameraMode,
                freecam: "freecam" === sb.cameraMode
              }), Ub)
            }), cb),
            replayEdits: fb((() => {
              var bb;
              const cb = Tb(),
                sb = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.view) && void 0 !== bb ? bb : null;
              return null === cb || null === sb || sb.state === Mb.ud.None ? (Ib = null, null) : (Ib = (0, xb.m)(Ib, {
                cameraKeyframes: [...cb.keyframes],
                playbackMark: sb.mark,
                fileName: cb.fileName,
                unsavedChanges: cb.unsavedChanges,
                suggestSaveAs: cb.suggestSaveAs
              }), Ib)
            }), cb),
            replayRecorder: fb((() => {
              var cb, sb;
              return null !== (cb = null === (sb = bb.runtime()) || void 0 === sb ? void 0 : sb.recorder.current) && void 0 !== cb ? cb : Ws.b.states.replayRecorder.current()
            }), kb),
            replayVideoExporting: {
              current: ss.b,
              watch: bb => (0, Hb.l)("replayViewer|videoExportChanged", (() => {
                bb((0, ss.b)())
              }))
            }
          },
          lb = {
            replayUiActionRequested: Xb(ab),
            replayViewerRequested: Xb(Wb)
          },
          Qb = bb => {
            for (const cb of Wb) cb(bb)
          },
          eb = () => {
            var kb;
            !0 === (null === (kb = Tb()) || void 0 === kb ? void 0 : kb.isOpen) && Promise.all([sb.e(94), sb.e(63)]).then((() => sb(41964))).then((sb => {
              let {
                startWasmReplayVideoExport: kb
              } = sb;
              return kb({
                viewer: Tb,
                canvas: () => {
                  var cb, sb;
                  return null !== (cb = null === (sb = bb.canvas) || void 0 === sb ? void 0 : sb.call(bb)) && void 0 !== cb ? cb : null
                },
                watchViewer: cb.add,
                requestViewer: Qb
              })
            }), (bb => {
              console.error("Couldn't load the video export", bb), ks.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((bb => {
              console.error("The video export failed", bb)
            }))
          },
          Cb = {
            replayAction(bb) {
              if ((0, ss.b)()) return;
              const cb = Tb();
              switch (bb) {
                case "replaySkipBack":
                  nb(-1);
                  break;
                case "replaySkipForward":
                  nb(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== cb && void 0 !== cb && cb.view && cb.setSpeed((0, cs.h)(cb.view.speed, "replaySpeedUp" === bb ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === cb || void 0 === cb || cb.addKeyframe()
              }
            },
            setReplayPlaying(bb) {
              var cb, sb;
              (0, ss.b)() || (bb ? null === (cb = Tb()) || void 0 === cb || cb.play() : null === (sb = Tb()) || void 0 === sb || sb.pause())
            },
            seekReplay(bb) {
              var cb;
              let {
                aX: sb,
                ignorePlaybackMark: kb
              } = bb;
              null === (cb = Tb()) || void 0 === cb || cb.seek(sb, null !== kb && void 0 !== kb && kb)
            },
            setReplayCameraMode(bb) {
              var cb;
              null === (cb = Tb()) || void 0 === cb || cb.setCameraMode(bb)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(bb) {
              var cb;
              null === (cb = Tb()) || void 0 === cb || cb.setKeyframe(bb)
            },
            moveReplayCameraKeyframe(bb) {
              var cb;
              let {
                from: sb,
                to: kb
              } = bb;
              null === (cb = Tb()) || void 0 === cb || cb.moveKeyframe(sb, kb)
            },
            deleteReplayCameraKeyframes(bb) {
              var cb;
              let {
                start: sb,
                end: kb
              } = bb;
              null === (cb = Tb()) || void 0 === cb || cb.deleteKeyframes(sb, kb)
            },
            setReplayPlaybackMark(bb) {
              var cb;
              null === (cb = Tb()) || void 0 === cb || cb.setMark(bb)
            },
            cropReplay(bb) {
              var cb, sb;
              let {
                start: kb,
                end: Wb
              } = bb;
              return !(0, ss.b)() && (null !== (cb = null === (sb = Tb()) || void 0 === sb ? void 0 : sb.crop(kb, Wb)) && void 0 !== cb && cb)
            },
            holdReplayForShaderPackFailure(bb) {
              const cb = Tb();
              cb && (cb.holdForShaderPackFailure(), function(bb) {
                sb.e(129).then((() => sb(38787))).then((cb => {
                  let {
                    shaderPackPage: sb
                  } = cb;
                  sb.block(bb)
                })).catch((bb => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", bb)
                }))
              }(bb))
            },
            exportReplayVideo() {
              eb()
            },
            toggleRecording() {
              var cb;
              null === (cb = bb.runtime()) || void 0 === cb || cb.recorder.toggleRecording()
            },
            saveClip() {
              var cb;
              null === (cb = bb.runtime()) || void 0 === cb || cb.recorder.saveClip()
            },
            setRecorderPrefs(cb) {
              var sb;
              let {
                clipping: kb,
                clipSeconds: Wb
              } = cb;
              null === (sb = bb.runtime()) || void 0 === sb || sb.recorder.setPrefs(kb, Wb)
            },
            setReplayViewerOpen(cb) {
              var sb;
              (0, lc.c)(cb) && (null === (sb = bb.runtime()) || void 0 === sb || sb.recorder.viewerShown(cb))
            },
            recordFlyingMiddleText(cb) {
              var sb;
              let {
                content: kb,
                sT: Wb,
                angle: ab,
                kT: Tb
              } = cb;
              null === (sb = bb.runtime()) || void 0 === sb || sb.recorder.recordFlyingText(JSON.stringify(kb), Wb, ab, Tb)
            },
            dragReplayCamera(cb) {
              var sb;
              let {
                dx: kb,
                dy: Wb
              } = cb;
              null === (sb = bb.freecam()) || void 0 === sb || sb.drag(kb, Wb)
            },
            moveReplayFreecam(cb) {
              var sb;
              null === (sb = bb.freecam()) || void 0 === sb || sb.move(cb)
            },
            holdReplayFreecamVertical(cb) {
              var sb;
              let {
                action: kb,
                qU: Wb
              } = cb;
              null === (sb = bb.freecam()) || void 0 === sb || sb.holdVertical(kb, Wb)
            }
          },
          Nb = bb => {
            var cb;
            const sb = Tb(),
              kb = null !== (cb = null === sb || void 0 === sb ? void 0 : sb.view) && void 0 !== cb ? cb : null;
            as.has(bb) ? (bb => {
              for (const cb of ab) cb(bb)
            })(bb) : Ts.has(bb) ? Cb.replayAction(bb) : "replayPlayPause" === bb ? sb && kb && kb.state !== Mb.ud.None && Cb.setReplayPlaying(kb.state !== Mb.ud.Playing) : "replayChangeCameraMode" === bb ? null === sb || void 0 === sb || sb.cycleCameraMode() : "replayExit" === bb ? !0 === (null === sb || void 0 === sb ? void 0 : sb.inPlayback) && (0, Ec.j)("/") : "replayExportVideo" === bb && eb()
          };
        let Vb = !1;
        return {
          states: mb,
          events: lb,
          commands: Cb,
          lookups: {
            replayCamera() {
              var cb, sb, kb;
              return !0 !== (null === (cb = Tb()) || void 0 === cb ? void 0 : cb.isOpen) ? null : null !== (sb = null === (kb = bb.cameraView) || void 0 === kb ? void 0 : kb.call(bb)) && void 0 !== sb ? sb : null
            },
            leaveGameReloadsPage() {
              var bb;
              return !0 === (null === (bb = Tb()) || void 0 === bb ? void 0 : bb.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var bb;
              const sb = !0 === (null === (bb = Tb()) || void 0 === bb ? void 0 : bb.inPlayback);
              sb !== Vb && (Vb = sb, Hb.j.QQ("connectedGameChanged")), cb.fire()
            },
            recorderChanged: kb.fire,
            keyDown: bb => {
              var cb;
              switch (bb) {
                case "recordGame":
                  return void Cb.toggleRecording();
                case "recordClip":
                  return void((0, lc.b)() || Cb.saveClip())
              }(0, ss.b)() || ("replayViewerOpen" !== bb ? bb.startsWith("replay") && ((0, lc.b)() || !0 === (null === (cb = Tb()) || void 0 === cb ? void 0 : cb.inPlayback)) && Nb(bb) : Qb("toggle"))
            }
          }
        }
      }({
        runtime: Wb.l,
        cameraView: () => {
          var bb;
          const cb = null === (bb = (0, Tb.h)()) || void 0 === bb ? void 0 : bb.renderFrame;
          if (!cb) return null;
          const [sb, kb, Wb] = cb.cameraPosition, [ab, Ub, Ib] = cb.cameraDirection;
          return {
            position: [sb, kb, Wb],
            direction: [ab, Ub, Ib]
          }
        },
        canvas: () => {
          var bb, cb, sb;
          return null !== (bb = null === (cb = (sb = (0, ab.N)()).canvas) || void 0 === cb ? void 0 : cb.call(sb)) && void 0 !== bb ? bb : null
        },
        freecam: Wb.h
      }),
      ws = {
        states: {
          ...Hc,
          ...nc.l,
          ...As.states,
          ...fs,
          ...db
        },
        events: {
          ...fc,
          ...Qb,
          ...nc.f,
          ...gb.d,
          ...hs.j,
          ...As.events,
          ...Ms,
          ...Jb.h
        },
        commands: {
          ...hb,
          ...Mc,
          ...eb,
          ...nc.c,
          ...Rc,
          ...Ys,
          ...Jb.f,
          ...Gc,
          ...As.commands,
          ...Cs,
          ...Ab,
          ...Es
        },
        queries: {
          ...nc.j,
          ...ds
        },
        lookups: {
          ...Xc,
          ...Ob,
          ...hs.l,
          ...As.lookups,
          ...Yb,
          ...bs,
          ...Ds,
          ...wb
        }
      };

    function rs() {
      (0, Ub.d)(lb.l), (0, Wb.n)(As.feed), (0, gb.h)(), vc || (vc = !0, (0, lb.k)(Pb.n, (bb => {
        const cb = (0, Eb.g)(Pb.n, bb);
        "string" === typeof cb && Promise.resolve().then((() => sb(3438))).then((bb => {
          let {
            onCosmeticPackGranted: sb
          } = bb;
          sb(cb)
        }))
      })), (0, lb.k)(Pb.fb, (bb => {
        const cb = (0, Eb.g)(Pb.fb, bb);
        "number" === typeof cb && Hb.j.QQ("serverUpdating", Date.now() + cb, !0)
      })), (0, lb.k)(Pb.P, (bb => {
        const cb = (0, Eb.g)(Pb.P, bb);
        if ((0, Eb.c)(cb)) {
          const {
            bb: bb,
            cb: sb
          } = cb;
          (0, oc.c)({
            bb: "string" === typeof bb ? bb : null,
            cb: "string" === typeof sb ? sb : null
          })
        }
      })), (0, lb.k)(fb.Yb.NewUiRequest, (bb => {
        const cb = (0, Eb.j)(bb);
        (0, Eb.c)(cb) && "number" === typeof cb.id && (0, Eb.c)(cb.clientParameters) && (0, Sc.i)(cb.id, cb.clientParameters)
      })), (0, lb.k)(Pb.$, (bb => {
        const cb = (0, Eb.g)(Pb.$, bb);
        "number" === typeof cb && (0, Sc.j)(cb)
      })), (0, lb.j)(Sc.e), (0, lb.k)(fb.Yb.UiRequestPopup, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb) && "number" === typeof cb.id && "string" === typeof cb.text) {
          const bb = cb.id;
          (0, Sc.k)(bb, cb.text, (cb => {
            Rc.answerUiRequest({
              id: bb,
              ET: cb
            })
          }))
        }
      })), (0, lb.k)(fb.Yb.TopRightHelper, (bb => {
        const cb = (0, Eb.j)(bb);
        void 0 !== cb && Hb.j.QQ("TopRightHelper", cb, !0)
      })), (0, lb.k)(fb.Yb.TaskProgress, (bb => {
        const cb = (0, Eb.j)(bb);
        (0, Eb.c)(cb) && "string" === typeof cb.taskId && "number" === typeof cb.progress && (0, rc.b)({
          taskId: cb.taskId,
          progress: cb.progress
        })
      }))), Ns || (Ns = !0, (0, lb.k)(Pb.w, (bb => {
        const cb = (0, Eb.g)(Pb.w, bb);
        (0, Eb.c)(cb) && Hb.j.QQ("showShopFromServer", {
          toggle: cb.Vc,
          Lc: cb.Lc
        }, !0)
      })), (0, lb.k)(fb.Yb.OverShopInfo, (bb => {
        const cb = (0, Eb.j)(bb);
        (0, Eb.c)(cb) && Hb.j.QQ("overShopInfo", cb.info, !0)
      })), (0, lb.k)(fb.Yb.ShowShopTutorial, (() => {
        Hb.j.QQ("showShopTutorial", null, !0)
      }))), Qs || (Qs = !0, (0, lb.g)((() => {
        var bb;
        (0, Xs.y)(), null === (bb = es) || void 0 === bb || bb(), es = (0, lb.c)() ? (0, ms.d)(lb.c) : null
      })), (0, lb.k)(fb.Yb.SetCookie, (bb => {
        const cb = (0, Eb.j)(bb),
          sb = (0, Ec.d)().gameNameWithVariation;
        (0, Eb.c)(cb) && "string" === typeof cb.key && null !== sb && (0, ns.setCookie)(sb, cb.key, cb.value)
      })), (0, lb.k)(fb.Yb.LeaveValues, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb) && "string" === typeof cb.leaveEventType) {
          const {
            leaveEventType: bb,
            category: sb,
            subCategory: kb,
            value: Wb
          } = cb;
          (0, Xs.E)({
            leaveEventType: bb,
            category: sb,
            subCategory: kb,
            value: Wb
          })
        }
      })), (0, lb.k)(fb.Yb.CustomAnalyticsEvent, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb) && "string" === typeof cb.cat1) {
          const {
            cat1: bb,
            cat2: sb,
            cat3: kb,
            value: Wb
          } = cb;
          (0, Xs.k)({
            cat1: bb,
            cat2: sb,
            cat3: kb,
            value: Wb
          })
        }
      })), (0, lb.k)(fb.Yb.ProgressionEvent, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb)) {
          const {
            type: bb,
            location1: sb,
            location2: kb,
            location3: Wb,
            score: ab
          } = cb;
          (0, Xs.p)({
            type: bb,
            location1: sb,
            location2: kb,
            location3: Wb,
            score: ab
          })
        }
      })), (0, lb.k)(fb.Yb.ResourceEvent, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb)) {
          const {
            type: bb,
            resourceType: sb,
            amount: kb,
            category: Wb,
            itemName: ab
          } = cb;
          (0, Xs.s)({
            type: bb,
            resourceType: sb,
            amount: kb,
            category: Wb,
            itemName: ab
          })
        }
      })), (0, lb.k)(fb.Yb.LeaderboardResponse, (bb => {
        const cb = (0, Eb.j)(bb);
        if ((0, Eb.c)(cb)) {
          const {
            category: bb,
            timeframe: sb,
            data: kb
          } = cb;
          Hb.j.QQ("leaderboardResponse", {
            category: bb,
            timeframe: sb,
            data: kb
          })
        }
      })), (0, lb.k)(Pb.F, (bb => {
        const cb = (0, Eb.g)(Pb.F, bb);
        "string" === typeof cb && (0, ls.e)(bb.conn, cb)
      })), (0, lb.k)(Pb.J, (bb => {
        const cb = (0, Eb.g)(Pb.J, bb);
        "string" === typeof cb && console.error(`[logErrorToConsole]: ${cb}`)
      }))), Kb(), (0, hs.c)(), Oc || (Oc = !0, (0, lb.k)(Pb.j, (bb => {
        const cb = (0, Eb.g)(Pb.j, bb);
        void 0 !== cb && (0, ic.h)(cb)
      }))), wc(), Bc(), Sb || (Sb = !0, (0, ab.y)(Rb)), kb.gameBridge.attach(ws), (0, kb.installPageSources)({
        commands: {
          ...kb.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Os.j
        },
        queries: Ks.wasmIconQueries,
        lookups: {
          ...kb.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Ks.wasmIconLookups,
          yN: Os.c,
          drawCallStats: Gs.h
        }
      }), (0, is.e)(), (0, Ks.loadIcons)()
    }
  },
  40176: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Ub
    });
    var kb = sb(40178);
    let Wb = null,
      ab = null;

    function Tb() {
      return Wb ??= sb.e(58).then((() => sb(41981))).catch((bb => {
        throw Wb = null, bb
      })), Wb
    }

    function Ub() {
      return ab ??= Promise.all([Tb(), (0, kb.i)()]).then((bb => {
        let [cb] = bb;
        return cb
      }), (bb => {
        throw ab = null, bb
      })), ab
    }
  },
  36632: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = {
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
  36434: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => ab,
      f: () => Xb,
      j: () => Ub,
      l: () => Ib,
      o: () => Hb,
      r: () => Mb,
      t: () => fb,
      v: () => Tb
    });
    var kb = sb(1253);
    let Wb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      ab = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Tb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Ub(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: kb.f
      };
      if (bb.startsWith("lobby:")) {
        const cb = bb.slice(6);
        return Mb(cb) ? {
          kind: "lobby",
          path: cb
        } : null
      }
      const cb = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cb ? {
        kind: "codeBlock",
        pos: [parseInt(cb[1]), parseInt(cb[2]), parseInt(cb[3])]
      } : null
    }

    function Ib(bb) {
      return bb.endsWith(".d.ts")
    }

    function Hb(bb) {
      return bb.endsWith(".ts") && !Ib(bb)
    }
    const fb = 64;

    function Mb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > fb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Ib(bb) && !Hb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const cb = bb.split("/");
      for (const sb of cb)
        if ("" === sb || "." === sb || ".." === sb) return !1;
      return !0
    }
    const Xb = 14e3
  },
  38604: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      g: () => Wb
    });
    const kb = ["description", "label"];

    function Wb(bb) {
      const cb = bb.type;
      return {
        type: cb,
        params: bb[cb]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);