export const id = 46;
export const ids = [46];
export const modules = {
  39231: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      e: () => Gb,
      g: () => Ob
    });
    const Bb = 6e3;

    function Ob(bb, ub) {
      return [Math.floor(bb[0] / ub) * ub, Math.floor(bb[1] / ub) * ub, Math.floor(bb[2] / ub) * ub]
    }

    function Gb(bb) {
      const ub = (null !== bb && void 0 !== bb ? bb : "").match(/-?\d+(?:\.\d+)?/g);
      return ub && ub.length >= 3 ? [Number(ub[0]), Number(ub[1]), Number(ub[2])] : null
    }

    function Ub(bb, ub) {
      return bb === ub ? String(bb) : `${bb}-${ub}`
    }

    function Lb(bb, ub, hb, Bb) {
      const Ob = [];
      let Gb = new Map;
      for (let Ub = bb[2]; Ub < bb[2] + ub; Ub++) {
        const Lb = new Map;
        let Yb = bb[0];
        for (; Yb < bb[0] + ub;) {
          const Ob = Bb(Yb, hb, Ub);
          let Sb = Yb;
          for (; Sb + 1 < bb[0] + ub && Bb(Sb + 1, hb, Ub) === Ob;) Sb++;
          if (null !== Ob) {
            const bb = `${Yb} ${Sb} ${Ob}`,
              ub = Gb.get(bb);
            ub ? (ub.z1 = Ub, Gb.delete(bb), Lb.set(bb, ub)) : Lb.set(bb, {
              x0: Yb,
              x1: Sb,
              z0: Ub,
              z1: Ub,
              name: Ob
            })
          }
          Yb = Sb + 1
        }
        Ob.push(...Gb.values()), Gb = Lb
      }
      return Ob.push(...Gb.values()), Ob.sort(((bb, ub) => bb.z0 - ub.z0 || bb.x0 - ub.x0)).map((bb => `x${Ub(bb.x0,bb.x1)} z${Ub(bb.z0,bb.z1)} ${bb.name}`))
    }

    function Yb(bb, ub, hb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bb;
      const Yb = [bb[0] + ub - 1, bb[1] + ub - 1, bb[2] + ub - 1],
        Sb = null !== Ob && Ob.every(((ub, hb) => Math.floor(ub) >= bb[hb] && Math.floor(ub) <= Yb[hb])),
        ab = [`The chunk from ${bb.join(" ")} to ${Yb.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Ob && ab.push(`The player's feet are at ${Ob.map(Math.floor).join(" ")}, ${Sb?"in this chunk":"outside this chunk"}.`);
      const Hb = [];
      for (let Bb = bb[1]; Bb <= Yb[1]; Bb++) {
        const Ob = Lb(bb, ub, Bb, hb).join("; "),
          Gb = Hb[Hb.length - 1];
        (null === Gb || void 0 === Gb ? void 0 : Gb.boxes) === Ob ? Gb.to = Bb : Hb.push({
          from: Bb,
          to: Bb,
          boxes: Ob
        })
      }
      const wb = Hb.filter((bb => "" !== bb.boxes));
      0 === wb.length && ab.push("It is all air.");
      let Zb = ab.join("\n").length;
      for (const Bb of wb) {
        const bb = `y${Ub(Bb.from,Bb.to)}: ${Bb.boxes}`;
        if (Zb += bb.length + 1, Zb > Gb) {
          ab.push(`Cut short: the layers from y${Bb.from} up aren't shown, as there are too many blocks.`);
          break
        }
        ab.push(bb)
      }
      return ab.join("\n")
    }
  },
  8520: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    var Bb = hb(13);

    function Ob() {
      return !Bb.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36606: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      f: () => Gb,
      i: () => Ob
    });
    const Bb = [.25, .5, 1, 2, 4, 8, 16];

    function Ob(bb, ub) {
      const hb = Bb;
      let Ob = hb.indexOf(bb);
      return -1 === Ob && (Ob = hb.findIndex((ub => ub >= bb)), -1 === Ob && (Ob = hb.length - 1)), "up" === ub ? hb[Math.min(Ob + 1, hb.length - 1)] : hb[Math.max(Ob - 1, 0)]
    }

    function Gb(bb) {
      return bb <= Bb[0]
    }

    function Ub(bb) {
      return bb >= Bb[Bb.length - 1]
    }
  },
  36113: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      e: () => Gb
    });
    let Bb = !1;

    function Ob() {
      return Bb
    }

    function Gb(bb) {
      return Bb !== bb && (Bb = bb, !0)
    }
  },
  38585: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(16),
      Ob = hb(1836);

    function Gb(bb) {
      let {
        taskId: ub,
        progress: hb
      } = bb;
      const Bb = Ob.b.get("_tasks");
      null !== Bb && void 0 !== Bb && Bb[ub] && Ob.b.apply({
        _tasks: {
          ...Bb,
          [ub]: {
            ...Bb[ub],
            progress: hb
          }
        }
      })
    }
    Bb.i.subscribe("clientTaskProgress", (bb => {
      Gb(bb)
    }))
  },
  39210: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => wb,
      f: () => Xb,
      h: () => Sb,
      i: () => Hb,
      j: () => Yb,
      l: () => Ub,
      o: () => ab,
      p: () => pb
    });
    var Bb = hb(1836),
      Ob = hb(16),
      Gb = hb(1850);
    const Ub = (0, Gb.m)((function() {
        var bb, ub, hb, Ob;
        return {
          health: null !== (bb = Bb.b.get("_health")) && void 0 !== bb ? bb : null,
          maxHealth: null !== (ub = Bb.b.get("_totalMaxHealth")) && void 0 !== ub ? ub : null,
          shield: null !== (hb = Bb.b.get("_shield")) && void 0 !== hb ? hb : null,
          maxShield: null !== (Ob = Bb.b.get("maxShield")) && void 0 !== Ob ? Ob : null
        }
      }), [], (0, Gb.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Lb = [{
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

    function Yb(bb, ub) {
      return Lb[(bb ? 2 : 0) + (ub ? 1 : 0)]
    }
    const Sb = (0, Gb.m)((function() {
      var bb;
      return null !== (bb = Bb.b.get("_aura")) && void 0 !== bb ? bb : null
    }), [], (0, Gb.k)("_aura"));

    function ab(bb) {
      return {
        watch: ub => (0, Ob.l)("shotPlayer", (hb => {
          let {
            playerId: Bb,
            damage: Ob,
            wasCrit: Gb,
            distance: Ub
          } = hb;
          bb(Bb) && ub({
            damage: Ob,
            wasCrit: Gb,
            distance: Ub
          })
        }))
      }
    }

    function Hb(bb) {
      return (0, Gb.e)("chat", (ub => {
        let {
          serverChatMsgId: hb,
          content: Bb,
          chatterEId: Ob
        } = ub;
        return {
          serverChatMsgId: null !== hb && void 0 !== hb ? hb : null,
          content: Bb,
          author: Ob ? bb(Ob) : null
        }
      }))
    }
    class wb {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const hb = this.shown;
        return bb !== this.needed && (this.needed = bb, this.neededSince = ub, null === bb && (this.shown = null)), this.shown !== this.needed && ub - this.neededSince > 200 && (this.shown = this.needed), this.shown !== hb
      }
    }

    function Zb(bb) {
      return [{
        translationKey: `touchKeys:${bb}`
      }]
    }
    const Xb = {
      open: Zb("open"),
      close: Zb("close"),
      milk: Zb("milk"),
      shear: Zb("shear"),
      tame: Zb("tame"),
      feed: Zb("feed"),
      ride: Zb("ride")
    };

    function pb(bb) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: bb
      }]
    }
  },
  40188: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      f: () => Ub
    });
    var Bb = hb(3067);
    let Ob = null,
      Gb = null;

    function Ub() {
      return Gb ??= hb.e(209).then((() => hb(35961))).then((bb => {
        let {
          ITEM_SPRITES: ub,
          ITEM_SPRITES_WITHOUT_FILE: hb,
          ITEM_FILES_WITHOUT_SPRITE: Gb
        } = bb;
        Ob = function(bb, ub, hb) {
          const Ob = new Set,
            Gb = (0, Bb.A)(ub);
          let Ub = 0;
          for (const [Bb, Lb] of bb.entries()) Bb === Gb[Ub] ? Ub++ : Ob.add(Lb);
          if ("" !== hb)
            for (const Lb of hb.split(Bb.t)) Ob.add(Lb);
          return Ob
        }(ub.split(Bb.t), hb, Gb)
      }), (bb => {
        throw Gb = null, bb
      })), Gb
    }

    function Lb(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = Ob) || void 0 === hb ? void 0 : hb.has(bb)) && void 0 !== ub && ub
    }
  },
  39226: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Gb,
      i: () => Ob
    });
    const Bb = 128;

    function Ob(bb, ub, hb, Bb) {
      const Ob = 2 * ub - 1,
        Gb = 1 - 2 * hb,
        Ub = bb(0) - Ob * bb(3),
        Lb = bb(4) - Ob * bb(7),
        Yb = bb(8) - Ob * bb(11),
        Sb = bb(1) - Gb * bb(3),
        ab = bb(5) - Gb * bb(7),
        Hb = bb(9) - Gb * bb(11);
      Bb[0] = Lb * Hb - Yb * ab, Bb[1] = Yb * Sb - Ub * Hb, Bb[2] = Ub * ab - Lb * Sb;
      const wb = Bb[0] * bb(3) + Bb[1] * bb(7) + Bb[2] * bb(11) < 0 ? -1 : 1,
        Zb = Math.hypot(Bb[0], Bb[1], Bb[2]) * wb;
      return Bb[0] /= Zb, Bb[1] /= Zb, Bb[2] /= Zb, Bb
    }

    function Gb(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = [Math.floor(ub[0]), Math.floor(ub[1]), Math.floor(ub[2])],
        Lb = [0, 0, 0],
        Yb = [1 / 0, 1 / 0, 1 / 0],
        Sb = [1 / 0, 1 / 0, 1 / 0];
      for (let wb = 0; wb < 3; wb++) Lb[wb] = Math.sign(hb[wb]), 0 !== Lb[wb] && (Sb[wb] = Math.abs(1 / hb[wb]), Yb[wb] = (Ub[wb] + (Lb[wb] > 0 ? 1 : 0) - ub[wb]) / hb[wb]);
      let ab = 0,
        Hb = Math.abs(hb[0]) > Math.abs(hb[1]) ? 0 : 1;
      for (Math.abs(hb[2]) > Math.abs(hb[Hb]) && (Hb = 2); ab <= Bb;) {
        if (bb(Ub[0], Ub[1], Ub[2])) return Ob[0] = Ub[0], Ob[1] = Ub[1], Ob[2] = Ub[2], Gb[0] = 0, Gb[1] = 0, Gb[2] = 0, Gb[Hb] = -Lb[Hb], !0;
        Hb = Yb[0] < Yb[1] ? 0 : 1, Yb[2] < Yb[Hb] && (Hb = 2), ab = Yb[Hb], Ub[Hb] += Lb[Hb], Yb[Hb] += Sb[Hb]
      }
      return !1
    }
  },
  39204: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      return Math.hypot(bb[0] - ub[0], bb[1] - ub[1], bb[2] - ub[2]) < hb + .5
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  38598: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab
    });
    var Bb = hb(1124),
      Ob = hb(1227),
      Gb = hb(13),
      Ub = hb(1206),
      Lb = hb(1218),
      Yb = hb(1415),
      Sb = hb(36083);

    function ab(bb) {
      let {
        Ob: ub,
        Gb: hb
      } = bb;
      const ab = null !== ub && void 0 !== ub ? ub : (0, Lb.b)().gameNameWithVariation;
      (0, Bb.W)(ab) && ((0, Sb.k)(), (0, Ub.fb)((() => {
        console.log("Received matchmaking order from game server to game", ub), (0, Gb.h)("inGameReplay"), (0, Yb.navigatePreserveSearch)((0, Ob.e)(ab, null !== hb && void 0 !== hb ? hb : void 0))
      }), "video_start"))
    }
  },
  38802: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(16),
      Ob = hb(1874);

    function Gb(bb) {
      var ub, hb;
      const Gb = (0, Ob.l)(null !== (ub = null === (hb = Ob.r.toggleFreeCam) || void 0 === hb ? void 0 : hb[0]) && void 0 !== ub ? ub : null);
      Bb.i.vp("showBottomMessage", {
        message: `Free Camera ${bb?"Enabled":"Disabled"}${Gb?` - Press ${Gb} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38588: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      f: () => Ub,
      g: () => Lb,
      i: () => Sb
    });
    var Bb = hb(16),
      Ob = hb(1249);
    const Gb = new Map;

    function Ub(bb, ub) {
      Bb.i.vp("newUiRequest", {
        id: bb,
        clientParameters: ub
      }, !0)
    }

    function Lb(bb) {
      Bb.i.vp("removeUiRequest", bb, !0);
      const ub = Gb.get(bb);
      ub && (ub.tearDownNotification(), Gb.delete(bb))
    }

    function Yb() {
      Bb.i.vp("clearUiRequests");
      for (const bb of Gb.values()) bb.tearDownNotification();
      Gb.clear()
    }

    function Sb(bb, ub, hb) {
      const Bb = Ob.NotificationProvider.showPromptPopup({
        title: ub,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Gb.set(bb, Bb), Bb.getResult().then((ub => {
        Gb.delete(bb), "notificationTornDown" !== ub && hb(ub)
      }))
    }
  },
  39229: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      f: () => wb
    });
    var Bb = hb(191),
      Ob = hb(39231);
    const Gb = 20;

    function Ub(bb) {
      return bb.map(Math.floor).join(" ")
    }

    function Lb(bb) {
      return null === bb.amount || 1 === bb.amount ? bb.name : `${bb.amount} ${bb.name}`
    }
    var Yb = hb(39237),
      Sb = hb(1836),
      ab = hb(1218);

    function Hb(bb, ub) {
      if (!bb) return Yb.d;
      const hb = bb.playerFeet();
      if (!hb) return "The player isn't in the world yet, so no blocks can be seen.";
      const Gb = Bb.e.bX,
        Ub = (0, Ob.g)(null !== ub && void 0 !== ub ? ub : hb, Gb),
        Lb = bb.chunkBlocks(Ub);
      return Lb ? (0, Ob.c)(Ub, Gb, ((ub, hb, Bb) => {
        const Ob = Lb(ub, hb, Bb);
        return 0 === Ob ? null : bb.blockName(Ob).split("|")[0]
      }), hb) : `The chunk from ${Ub.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${hb.map(Math.floor).join(" ")}.`
    }

    function wb(bb) {
      var ub, hb, Bb;
      if (!bb) return Yb.g;
      const Ob = bb.playerFeet();
      if (!Ob) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Hb,
        heldSlot: wb
      } = bb.inventory();
      return function(bb) {
        const ub = [];
        null !== bb.game && ub.push(`Game: ${bb.game}.`);
        const hb = null === bb.health ? "" : `, health ${Math.round(bb.health)}${null===bb.maxHealth?"":` of ${Math.round(bb.maxHealth)}`}`;
        ub.push(`The player (the creator) stands at ${Ub(bb.position)}${hb}, ${bb.creative?"in":"not in"} creative mode.`);
        const Bb = bb.slots[bb.heldSlot];
        ub.push(Bb ? `Holding (slot ${bb.heldSlot}): ${Lb(Bb)}.` : `Holding nothing (slot ${bb.heldSlot} is empty).`);
        const Ob = bb.slots.flatMap(((bb, ub) => bb ? [`slot ${ub}: ${Lb(bb)}`] : []));
        ub.push(Ob.length > 0 ? `Inventory: ${Ob.join(", ")}.` : "Inventory: empty.");
        const Yb = ub => Math.hypot(ub.position[0] - bb.position[0], ub.position[1] - bb.position[1], ub.position[2] - bb.position[2]),
          Sb = [...bb.nearby].sort(((bb, ub) => Yb(bb) - Yb(ub)));
        if (0 === Sb.length) ub.push("No other players or mobs are near enough to see.");
        else {
          ub.push("Near them, nearest first:");
          for (const bb of Sb.slice(0, Gb)) {
            const hb = "player" === bb.kind ? `player "${bb.name||"?"}"` : bb.name && bb.name !== bb.kind ? `${bb.kind} "${bb.name}"` : bb.kind,
              Bb = Math.round(Yb(bb));
            ub.push(`- ${hb} at ${Ub(bb.position)}, ${Bb} block${1===Bb?"":"s"} away`)
          }
          Sb.length > Gb && ub.push(`- and ${Sb.length-Gb} more further away`)
        }
        return bb.droppedItems > 0 && ub.push(`${bb.droppedItems} dropped item${1===bb.droppedItems?" is":"s are"} on the ground nearby.`), ub.join("\n")
      }({
        game: null !== (ub = (0, ab.b)().gameNameWithVariation) && void 0 !== ub ? ub : null,
        position: Ob,
        health: null !== (hb = Sb.b.get("_health")) && void 0 !== hb ? hb : null,
        maxHealth: null !== (Bb = Sb.b.get("_totalMaxHealth")) && void 0 !== Bb ? Bb : null,
        creative: !0 === Sb.b.get("creative"),
        heldSlot: wb,
        slots: Hb,
        nearby: bb.nearby(),
        droppedItems: bb.droppedItems()
      })
    }
  },
  38615: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      e: () => Yb,
      i: () => Sb
    });
    var Bb = hb(1124),
      Ob = hb(934),
      Gb = hb(36504),
      Ub = hb(16);

    function Lb(bb) {
      let {
        lobbyName: ub,
        gameNameWithVariation: hb
      } = bb;
      return !(0, Bb.X)(ub) || null !== hb && (hb.startsWith("testGym") || (0, Ob.i)(hb))
    }

    function Yb(bb) {
      return bb.vu === Gb.b.Leave || bb.vu === Gb.b.Cursor
    }

    function Sb(bb) {
      Ub.i.vp("codeCollab", {
        type: bb.vu,
        docKey: bb.tu,
        version: bb.Ju,
        editorCount: bb.eu,
        peers: bb.Nu,
        updates: bb.Mu,
        playerId: bb.mu,
        playerName: bb.Iu,
        colour: bb.Pu,
        anchor: bb.qu,
        head: bb.Eu,
        existingCursors: bb.yu,
        files: bb.Vu,
        engineSettings: bb.Fu
      })
    }
  },
  40154: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => ib,
      C: () => Jb,
      E: () => tb,
      G: () => Tb,
      J: () => Nb,
      N: () => gb,
      Q: () => eb,
      S: () => zb,
      U: () => yb,
      V: () => Eb,
      Y: () => vb,
      e: () => Vb,
      h: () => Mb,
      l: () => Db,
      p: () => Fb,
      t: () => xb,
      v: () => nb,
      w: () => sb
    });
    var Bb = hb(1288),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(2273),
      Lb = hb(4584),
      Yb = hb(4545);
    let Sb, ab = !1,
      Hb = !1,
      wb = !1,
      Zb = !1;
    const Xb = 1300,
      pb = 3e3;
    let ob = 0,
      Ab = !1,
      lb = !1,
      Kb = 0;
    const Wb = 2;
    let Cb = !1,
      db = !1;
    const rb = new Set,
      jb = new Set;

    function nb() {
      return ab
    }

    function Db() {
      return lb
    }

    function xb() {
      return db
    }

    function zb() {
      return (0, Gb.m)() && !db
    }

    function gb(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== db) {
        db = bb;
        for (const bb of [...jb]) bb(db);
        ub && Eb()
      }
    }

    function ib(bb) {
      return jb.add(bb), () => {
        jb.delete(bb)
      }
    }

    function vb() {
      (0, Lb.j)(Ub.t.Menu, (0, Gb.m)() ? 0 : Ub.t.Menu)
    }

    function tb() {
      lb = !1, Kb = 0, vb(), Eb()
    }

    function Jb(bb) {
      return rb.add(bb), () => {
        rb.delete(bb)
      }
    }

    function eb(bb) {
      Hb = !1, bb !== ab && (ab = bb, Zb = !1, clearTimeout(Sb), wb = !ab && Cb, ab ? (Ab = !1, lb = !1, Kb = 0) : zb() && !Cb && (lb = !0), Cb = !1, ab && !zb() && kb(), cb(), wb && Eb())
    }

    function Nb(bb) {
      bb !== Ab && (Ab = bb, bb || Eb())
    }

    function sb() {
      Hb = !1, Zb || !0 !== Pb() || (Zb = !0, clearTimeout(Sb), Sb = setTimeout(mb, Xb))
    }

    function Mb() {
      return (!Hb || performance.now() - ob > pb) && (Hb = (0, Yb.K)().lockPointer(), ob = performance.now()), Hb
    }

    function mb() {
      Ib() && qb() && Mb()
    }

    function Ib() {
      return zb() && !ab && !Ab && !(0, Bb.f)()
    }

    function Pb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function qb() {
      return wb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Pb()
    }

    function Eb() {
      zb() ? Ib() && !lb && qb() && Mb() : ab && !Cb && kb()
    }

    function yb() {
      lb ? navigator.vendor.startsWith("Apple") ? fb() : Kb = Wb : Eb()
    }

    function Vb() {
      Kb > 0 && 0 === --Kb && fb()
    }

    function Fb() {
      Kb = 0
    }

    function fb() {
      Ib() && !0 === Pb() && Mb()
    }

    function kb() {
      Cb = !0, (0, Yb.K)().unlockPointer()
    }

    function Tb() {
      Hb = !1, wb = !1, Zb = !1, clearTimeout(Sb), Ab = !1, lb = !1, Kb = 0, Cb = !1;
      const bb = ab;
      ab = !1, bb && cb()
    }

    function cb() {
      for (const bb of [...rb]) bb(ab);
      Ob.i.vp("pointerLockUpdate", ab)
    }
  },
  40133: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      f: () => Lb,
      i: () => Hb,
      m: () => Sb,
      q: () => Ub,
      s: () => ab,
      w: () => Yb
    });
    let Bb = null,
      Ob = null,
      Gb = null;

    function Ub(bb) {
      Bb = bb
    }

    function Lb() {
      return Bb
    }

    function Yb(bb) {
      Ob = bb
    }

    function Sb() {
      return Ob
    }

    function ab(bb) {
      Gb = bb
    }

    function Hb() {
      return Gb
    }

    function wb() {
      var bb, ub;
      return !0 === (null === (bb = Ob) || void 0 === bb || null === (ub = bb.currentViewer) || void 0 === ub ? void 0 : ub.inPlayback)
    }
  },
  40127: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      attachPlayGameSources: () => dB,
      playGameSources: () => CB
    });
    var Bb = hb(1811),
      Ob = hb(40133),
      Gb = hb(4545),
      Ub = hb(40049),
      Lb = hb(40136),
      Yb = hb(39210),
      Sb = hb(16),
      ab = hb(4564),
      Hb = hb(4555),
      wb = hb(40071),
      Zb = hb(40106),
      Xb = hb(40138),
      pb = hb(40087);
    (0, pb.n)(ab.fc.Chat, (bb => {
      if (bb.payloadKind !== Hb.Zb.Msgpack) return;
      const ub = function(bb) {
        if (null === bb || "object" !== typeof bb || !("content" in bb)) return null;
        const {
          chatMsgId: ub,
          content: hb,
          chatterEId: Bb
        } = bb;
        return {
          serverChatMsgId: null !== ub && void 0 !== ub ? ub : void 0,
          content: hb,
          chatterEId: void 0 === Bb || null === Bb ? void 0 : String(Bb)
        }
      }((0, wb.e)(bb.payload));
      null !== ub && Sb.i.vp("chat", ub, !0)
    }));
    const ob = {
        chatReceived: (0, Yb.i)((function(bb) {
          var ub, hb, Bb;
          return {
            id: bb,
            name: null !== (ub = Xb.c.getName(bb)) && void 0 !== ub ? ub : null,
            local: (0, Zb.h)() === bb,
            profileEffect: null !== (hb = null === (Bb = (0, Xb.g)(bb)) || void 0 === Bb ? void 0 : Bb.profileEffect) && void 0 !== hb ? hb : null
          }
        }))
      },
      Ab = {
        sendChatMessage(bb) {
          var ub;
          let {
            XS: hb,
            channelName: Bb
          } = bb;
          null === (ub = (0, Ub.l)()) || void 0 === ub || ub.clientApi.sendChat(hb, Bb)
        }
      };
    var lb = hb(191),
      Kb = hb(1836),
      Wb = hb(40035),
      Cb = hb(39204);
    const db = [0, 0, 0],
      rb = {
        codeBlockClickable(bb) {
          var ub;
          const hb = (0, Ub.l)();
          if (null === hb || void 0 === hb || !hb.isSessionLive) return !1;
          const Bb = hb.api;
          if (0 !== (Wb.o.playerFlags(Bb.apiView, 0) & Wb.Ad.Crouching)) return !1;
          const Ob = Bb.queries.directorEntity(Bb.localId) >= Wb.qb.BYTES ? Bb.memoryData(Bb.scratch(), Wb.qb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Ob) return !1;
          for (let Gb = 0; Gb < 3; Gb++) db[Gb] = Wb.qb.feet(Ob, 0, Gb);
          return db[1] += Wb.qb.eyeHeight(Ob, 0), (0, Cb.c)(db, bb, null !== (ub = Kb.b.get("blockReach")) && void 0 !== ub ? ub : lb.e.Rl)
        }
      },
      jb = {
        clickCodeBlock(bb) {
          var ub;
          null === (ub = (0, Ub.l)()) || void 0 === ub || ub.clickCodeBlock(bb)
        }
      };
    var nb = hb(40059),
      Db = hb(40143),
      xb = hb(934),
      zb = hb(38666),
      gb = hb(4542),
      ib = hb(40063),
      vb = hb(40052),
      tb = hb(40066);

    function Jb(bb) {
      if (null === bb) return null;
      const ub = [];
      for (const hb of bb) {
        const bb = Object.keys(hb)[0];
        if ("ih" === bb) {
          const {
            str: bb,
            style: Bb,
            clickableUrl: Ob
          } = hb.ih, Gb = Object.keys(bb)[0], Ub = bb[Gb];
          "string" !== Gb && "styledEntityName" !== Gb && "styledTranslatedText" !== Gb || ub.push({
            str: Ub,
            style: Bb,
            clickableUrl: Ob
          })
        } else ub.push(hb[bb])
      }
      return ub
    }
    const eb = {
      screenPos(bb) {
        var ub, hb;
        return null !== (ub = null === (hb = (0, Ub.l)()) || void 0 === hb ? void 0 : hb.renderFrame.projectWorldPosToScreenPos(bb)) && void 0 !== ub ? ub : {
          x: 0,
          y: 0
        }
      }
    };
    let Nb = !1;

    function sb() {
      Nb || (Nb = !0, (0, pb.n)(ab.fc.ProgressBarUpdate, (bb => {
        const ub = (0, tb.i)(bb);
        (0, tb.d)(ub) && Sb.i.vp("progressBarUpdate", ub, !0)
      })), (0, pb.n)(ib.v, (bb => {
        const ub = (0, tb.g)(ib.v, bb);
        ub && Sb.i.vp("middleScreenBarInitiate", {
          duration: ub.wu,
          Zu: ub.Zu,
          horizBarRemOffset: ub.Xu
        }, !0)
      })), (0, pb.n)(ab.fc.RemoveMiddleScreenBar, (() => {
        Sb.i.vp("middleScreenBarRemove")
      })), (0, pb.n)(ib.Y, (bb => {
        const ub = (0, tb.g)(ib.Y, bb);
        if (ub) {
          var hb;
          const bb = ub.xb ? null === (hb = (0, Ub.l)()) || void 0 === hb ? void 0 : hb.renderFrame.projectDirectionToScreenPos(ub.xb) : void 0;
          Sb.i.vp("sendHitmarker", {
            Db: ub.Db,
            screenPos: bb
          }, !0)
        }
      })), (0, pb.n)(ib.bb, (bb => {
        const ub = (0, tb.g)(ib.bb, bb);
        if (ub) {
          const {
            id: bb,
            position: hb,
            style: Bb,
            XB: Ob,
            oB: Gb
          } = ub;
          Sb.i.vp("setDirectionArrow", {
            id: bb,
            position: hb,
            style: Bb,
            text: Jb(Ob),
            oB: Gb
          }, !0)
        }
      })), (0, pb.n)(ib.e, (bb => {
        const ub = (0, tb.g)(ib.e, bb);
        ub && Sb.i.vp("clearDirectionArrow", {
          id: ub.id
        }, !0)
      })), (0, pb.n)(ib.m, (bb => {
        const ub = (0, tb.g)(ib.m, bb);
        ub && Sb.i.vp("flyingMiddleMessage", {
          content: Jb(ub.gh),
          eh: ub.eh,
          Nh: ub.Nh
        }, !0)
      })), (0, pb.n)(ab.fc.WorldVariation, (bb => {
        const ub = (0, tb.i)(bb);
        if ("string" === typeof ub) {
          const bb = ub === xb.g ? null : {
            message: `Currently loaded as variation: ${ub}`,
            type: "Warning"
          };
          Sb.i.vp("showPermanentBottomMessage", bb, !0)
        }
      })), (0, pb.n)(ib.I, (bb => {
        const ub = (0, tb.g)(ib.I, bb);
        ub && function(bb, ub) {
          const {
            type: hb,
            params: Bb
          } = (0, zb.h)(ub), Ob = {
            ...Bb
          };
          for (const Gb of zb.e) Ob[Gb] && (Ob[Gb] = Jb(Ob[Gb]));
          gb.c.queueQTE(bb, hb, Ob).getResult().then((ub => {
            var hb;
            "boolean" === typeof ub && (null === (hb = (0, Ub.l)()) || void 0 === hb || hb.send(vb.e.QteResponse, {
              qteId: bb,
              qteResponse: ub
            }))
          }))
        }(ub.id, ub.eB)
      })), (0, pb.n)(ib.T, (bb => {
        const ub = (0, tb.g)(ib.T, bb);
        "number" === typeof ub && gb.c.cancelQTE(ub)
      })), (0, pb.i)((() => {
        gb.c.reset(), Sb.i.vp("showPermanentBottomMessage", null, !0)
      })), (0, pb.j)((() => {
        gb.c.reset()
      })), (0, pb.n)(ab.fc.EditItemCraftingRecipes, (bb => {
        const ub = (0, tb.i)(bb);
        (0, tb.d)(ub) && Sb.i.vp("craftingRecipesEdited", {
          itemName: ub.craftingRecipeItemName,
          recipesForItem: ub.recipesForItem
        })
      })), (0, pb.n)(ib.R, (bb => {
        const ub = (0, tb.g)(ib.R, bb);
        ub && Sb.i.vp("craftingRecipesEdited", {
          itemName: ub.sh,
          recipesForItem: []
        })
      })))
    }
    var Mb = hb(13);
    const mb = [{
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

    function Ib(bb) {
      return Wb.o.playerFlags(bb.api.apiView, 0)
    }
    const Pb = {
        freeCamera: (0, Zb.d)((bb => () => {
          const ub = bb.isSessionLive && 0 !== (Ib(bb) & Wb.Ad.FreeCamMoves),
            hb = bb.freeCameraAllowed() && null === Mb.d.get("scriptedCameraFacing");
          return mb[(hb ? 2 : 0) + (ub ? 1 : 0)]
        }), mb[0], (bb => (0, Gb.u)(bb)))
      },
      qb = {
        setFreeCameraMovesFly: bb => {
          var ub;
          null === (ub = (0, Ub.l)()) || void 0 === ub || ub.setFreeCameraMovesFly(bb)
        }
      },
      Eb = {
        freeCameraPos: () => {
          const bb = (0, Ub.l)();
          return null !== bb && void 0 !== bb && bb.isSessionLive && bb.renderFrame.hasView && 0 !== (Ib(bb) & Wb.Ad.FreeCam) ? bb.renderFrame.cameraPosition : null
        }
      };
    var yb = hb(38802);
    let Vb = !1,
      Fb = !1;

    function fb() {
      const bb = (0, Ub.l)();
      if (null === bb || void 0 === bb || !bb.isSessionLive) return void(Vb = !1);
      const ub = 0 !== (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.FreeCam);
      ub !== Vb && (Vb = ub, (0, yb.b)(ub))
    }
    var kb = hb(314),
      Tb = hb(36684),
      cb = hb(1850);
    var Qb = hb(40152),
      Rb = hb(40100);
    const bu = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let uu = "off";

    function hu(bb) {
      var ub;
      return null === bb ? null : {
        label: null !== (ub = (0, Qb.b)(bb, "interactionPrompt")) && void 0 !== ub ? ub : null
      }
    }
    const Bu = new Map([
      [Wb.oc.Open, {
        label: Yb.f.open
      }],
      [Wb.oc.Close, {
        label: Yb.f.close
      }],
      [Wb.oc.Milk, {
        label: Yb.f.milk
      }],
      [Wb.oc.Shear, {
        label: Yb.f.shear
      }],
      [Wb.oc.Tame, {
        label: Yb.f.tame
      }],
      [Wb.oc.Feed, {
        label: Yb.f.feed
      }],
      [Wb.oc.Ride, {
        label: Yb.f.ride
      }]
    ]);
    class Ou {
      constructor() {
        this.target = bu, this.bS = Wb.dd, this.optionName = null, this.pickaxe = new Yb.c
      }
      read(bb) {
        var ub;
        const hb = Wb.o.targetBlockId(bb.api.apiView, 0);
        hb !== this.bS && (this.bS = hb, this.optionName = hb === Wb.dd ? null : `${bb.tables.getMetaInfo(hb).rootName}CrosshairText`);
        const Bb = null === this.optionName ? null : null !== (ub = bb.tables.getClientOption(this.optionName)) && void 0 !== ub ? ub : null;
        this.pickaxe.update(function(bb, ub) {
          var hb, Bb, Ob;
          if (0 === (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.Breaking) || ub === Wb.dd || 0 === ub) return null;
          const {
            tables: Gb
          } = bb;
          if (!0 === Gb.getClientOption("creative")) return null;
          const Ub = Gb.nameOfId(ub),
            Lb = null === (hb = bb.items.MS()) || void 0 === hb ? void 0 : hb.name,
            Yb = null !== (Bb = Gb.getItemStat(Ub, "harvestLevel")) && void 0 !== Bb ? Bb : 0;
          return (0, kb.Fc)({
            blockHarvestType: Gb.getDefaultItemStat(Ub, "harvestType"),
            blockHarvestLevel: Gb.getDefaultItemStat(Ub, "harvestLevel"),
            harvestLevel: Yb,
            heldToolType: void 0 === Lb ? void 0 : Gb.getDefaultItemStat(Lb, "harvests"),
            heldToolLevel: void 0 === Lb ? void 0 : Gb.getDefaultItemStat(Lb, "level")
          }) && null !== (Ob = Tb.l[Yb]) && void 0 !== Ob ? Ob : null
        }(bb, hb)), bb.watchPromptPick(uu);
        const Ob = "touch" === uu ? function(bb) {
          var ub;
          const hb = bb.interactLabel;
          return hb === Wb.oc.Entity ? hu(bb.promptEntity) : hb === Wb.oc.TameWith ? {
            label: (0, Yb.p)(bb.tables.nameOfId(bb.interactIcon))
          } : null !== (ub = Bu.get(hb)) && void 0 !== ub ? ub : null
        }(bb) : hu(bb.promptEntity);
        return this.target = (0, cb.o)(this.target, {
          interactPrompt: Ob,
          blockText: Bb,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Gu = null;
    const Uu = {
      current: () => {
        var bb, ub;
        return null !== (bb = null === (ub = Gu) || void 0 === ub ? void 0 : ub.target) && void 0 !== bb ? bb : bu
      },
      watch: bb => {
        const ub = new Ou;
        Gu = ub;
        const hb = (0, Zb.k)((hb => {
          let Bb = ub.read(hb);
          bb(Bb);
          const Ob = (0, Gb.x)((() => {
            const Ob = ub.read(hb);
            Ob !== Bb && (Bb = Ob, bb(Ob))
          }));
          return () => {
            Ob(), hb.watchPromptPick("off")
          }
        }));
        return () => {
          hb(), Gu === ub && (Gu = null)
        }
      }
    };
    let Lu = 0,
      Yu = 0;
    const Su = {
        health: Yb.l,
        aura: Yb.h,
        hotbar: Rb.e.states.hotbar,
        heldItemAim: Rb.e.states.heldItemAim,
        crouching: (0, Zb.d)((bb => function(bb) {
          const ub = () => 0 !== (Wb.o.playerFlags(bb.apiView, 0) & Wb.Ad.Crouching);
          return {
            current: ub,
            watch(bb) {
              let hb = ub();
              return (0, Gb.u)((() => {
                const Bb = ub();
                Bb !== hb && (hb = Bb, bb(Bb))
              }))
            }
          }
        }(bb.api).current), !1, (bb => (0, Gb.u)(bb))),
        flight: (0, Zb.d)((bb => () => function(bb) {
          const ub = Wb.o.playerFlags(bb.apiView, 0);
          return (0, Yb.j)(0 !== (ub & Wb.Ad.CanFly), 0 !== (ub & Wb.Ad.Flying))
        }(bb.api)), (0, Yb.j)(!1, !1), (bb => (0, Gb.u)(bb))),
        gliderBoostFuel: (0, Zb.d)((bb => () => Wb.o.gliderBoostFuel(bb.api.apiView, 0)), 0, (bb => (0, Gb.u)(bb))),
        crosshairTarget: Uu
      },
      au = {
        hotbarSlotRequested: Rb.e.events.hotbarSlotRequested,
        hotbarScrolled: Rb.e.events.hotbarScrolled,
        numberKeyPressed: Rb.e.events.numberKeyPressed,
        shotDamageToShow: (0, Yb.o)((bb => !0 === (0, Qb.b)(bb, "showDamageAmounts")))
      },
      Hu = {
        selectHotbarSlot: Rb.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: bb => {
          uu = bb
        }
      },
      wu = {
        momentumFrac: function() {
          var bb, ub, hb;
          const Bb = (0, Ub.l)(),
            Ob = performance.now(),
            Gb = null === Bb || void 0 === Bb || null === (bb = Bb.items.MS()) || void 0 === bb || null === (ub = bb.attributes) || void 0 === ub || null === (hb = ub.customAttributes) || void 0 === hb ? void 0 : hb.enchantments;
          return Lu = null !== Bb && null !== Gb && void 0 !== Gb && Gb.Momentum ? 0 !== (Wb.o.playerFlags(Bb.api.apiView, 0) & Wb.Ad.Breaking) ? Math.max(0, Wb.o.momentumFrac(Bb.api.apiView, 0)) : Math.max(0, Lu - (Ob - Yu) / 1500) : 0, Yu = Ob, Lu
        }
      };
    var Zu = hb(40040);
    const Xu = {
      lobbyManage(bb) {
        var ub;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.LobbyManage, bb)
      }
    };
    var pu = hb(1133),
      ou = hb(36113),
      Au = hb(8520),
      lu = hb(1537),
      Ku = hb(2273),
      Wu = hb(4570);
    let Cu = !1;

    function du(bb) {
      Cu = bb
    }

    function ru() {
      "inGame" !== Mb.d.get("gameState") || (0, lu.t)() || Sb.i.vp("ctrlCrouchWithoutFullscreen")
    }
    let ju = !1;
    const nu = {
        OpenEmoteWheel: () => {
          du(!0), ju = !0, queueMicrotask((() => {
            ju && (ju = !1, Sb.i.vp("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Sb.i.vp("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, ou.c)() || Sb.i.vp("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, ou.c)() || Sb.i.vp("XKeyPressed")
        },
        CtrlCrouch: ru,
        "primary-fire": () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      Du = {
        OpenEmoteWheel: () => {
          du(!1), ju ? (ju = !1, (0, Au.c)() || Sb.i.vp("requestEmoteWheelHoldOpen")) : Sb.i.vp("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: ru,
        "primary-fire": () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Sb.i.vp("mouseState", {
            ra: pu.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let xu = !1;

    function zu() {
      xu || (xu = !0, (0, Wu.e)((bb => {
        if ((0, Ob.d)()) return;
        const ub = (0, Wu.c)(bb) ? "primary-fire" : bb.action;
        var hb;
        if (bb.down) {
          if (0 === (bb.flags & Ku.b.Synthetic)) {
            var Bb;
            null === (Bb = nu[ub]) || void 0 === Bb || Bb.call(nu)
          }
        } else null === (hb = Du[ub]) || void 0 === hb || hb.call(Du)
      })))
    }
    var gu = hb(298),
      iu = hb(86),
      vu = hb(29),
      tu = hb(40154),
      Ju = hb(1218),
      eu = hb(38615);
    let Nu = !1;
    const su = {
      sendCodeCollab(bb) {
        var ub;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.CodeCollab, (0, vb.n)(bb), (0, eu.e)(bb))
      }
    };
    var Mu = hb(38727);
    let mu = null,
      Iu = !1,
      Pu = null;

    function qu() {
      return "inGame" === Mb.d.get("gameState") && !(0, ou.c)()
    }
    const Eu = {
        OpenInventory: bb => {
          (0, lu.C)(bb, "inventory", (0, Zu.p)())
        },
        OpenShop: bb => {
          mu && qu() && (0, lu.B)(bb, gu.u.SHOP, !mu.shopIsEmpty(Kb.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: bb => {
          qu() && (0, lu.B)(bb, gu.u.LOBBY_LEADERBOARD, (0, Mu.c)({
            lobbyLeaderboardInfo: Kb.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Kb.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: bb => {
          var ub;
          const hb = null === (ub = mu) || void 0 === ub ? void 0 : ub.getClientGameMapKey();
          hb ? (0, lu.E)(bb, !0, hb) : (0, lu.C)(bb, "retentionFeatures", !(!Kb.b.get("_tasks") && !Kb.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: bb => {
          (0, lu.C)(bb, "inviteLink", iu.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: bb => {
          qu() && function(bb) {
            var ub;
            const hb = (0, Ub.l)(),
              Bb = null !== hb && void 0 !== hb && hb.isSessionLive ? hb.api : null,
              Ob = Bb ? Bb.iK(Bb.localId) : null,
              Gb = null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.map((bb => Math.floor(bb)))) && void 0 !== ub ? ub : null;
            (0, lu.E)(bb, null !== Gb && (0, eu.d)((0, Ju.b)()), (() => {
              Sb.i.vp("EditLobbyCode", Gb)
            }))
          }(bb)
        },
        HideUi: () => {
          Sb.i.vp("showUi", !1)
        }
      },
      yu = {
        HideUi: () => {
          Sb.i.vp("showUi", !0)
        }
      };

    function Vu() {
      Iu || (Iu = !0, hb.e(153).then((() => hb(42019))).then((bb => {
        mu = bb
      }), (bb => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", bb)
      })), (0, tu.C)((bb => {
        bb || !(0, tu.l)() || (0, iu.isMobile)() || !vu.j.getItem("disableFullscreen") || (0, lu.q)() || Mb.d.set({
          openEverythingMenuName: gu.u.SETTINGS
        })
      })), (0, Wu.e)((bb => {
        let {
          action: ub,
          down: hb,
          press: Bb
        } = bb;
        var Gb, Ub;
        (0, Ob.d)() || (hb ? null === (Gb = Eu[ub]) || void 0 === Gb || Gb.call(Eu, function(bb) {
          var ub;
          if (0 === bb || (null === (ub = Pu) || void 0 === ub ? void 0 : ub.press) !== bb) {
            const ub = {
              press: bb,
              event: new Event("inputAction")
            };
            Pu = ub, queueMicrotask((() => {
              Pu === ub && (Pu = null)
            }))
          }
          return Pu.event
        }(Bb)) : null === (Ub = yu[ub]) || void 0 === Ub || Ub.call(yu))
      })))
    }
    var Fu = hb(38585),
      fu = hb(38598),
      ku = hb(38588);
    const Tu = {
      completeTask(bb) {
        var ub;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.CompleteTask, (0, vb.r)(bb))
      },
      setServerCookie(bb) {
        var ub;
        let {
          key: hb,
          value: Bb
        } = bb;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.GeneralCookieSet, (0, vb.v)({
          yY: hb,
          VY: Bb
        }))
      },
      answerUiRequest(bb) {
        var ub;
        let {
          id: hb,
          ha: Bb
        } = bb;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.UiRequestResp, (0, vb.W)({
          Xa: hb,
          oa: Bb,
          Aa: 5
        }))
      },
      chooseRewardedAd(bb) {
        var ub;
        let {
          id: hb,
          ha: Bb
        } = bb;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.UiRequestResponded, (0, vb.S)({
          id: hb,
          ha: Bb
        }))
      },
      requestLeaderboard(bb) {
        var ub;
        let {
          category: hb,
          timeframe: Bb,
          seeTop: Ob
        } = bb;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.LeaderboardRequest, {
          category: hb,
          timeframe: Bb,
          seeTop: Ob
        })
      }
    };
    let cu = !1;
    const Qu = lb.e.Vl / 2,
      Ru = [Qu, -Qu, -Qu, -Qu, Qu, Qu, -Qu, Qu],
      bh = [0, 0, 0];

    function uh(bb, ub, hb) {
      for (let Bb = 0; Bb < bb.length; Bb += 2)
        if (bb[Bb] === ub && bb[Bb + 1] === hb) return !0;
      return !1
    }
    const hh = {
      blocksStandingOn: function() {
        const bb = (0, Ub.l)();
        if (null === bb) return [];
        const {
          api: ub,
          chunks: hb,
          tables: Bb
        } = bb;
        if (!ub.readPosition(ub.localId, bh)) return [];
        const [Ob, Gb, Lb] = bh, Yb = Math.ceil(Gb) - 1, Sb = [], ab = [];
        for (let Ub = 0; Ub < Ru.length; Ub += 2) {
          const bb = Ob + Ru[Ub],
            ub = Lb + Ru[Ub + 1];
          if (Number.isInteger(bb) || Number.isInteger(ub)) continue;
          const Gb = Math.floor(bb),
            Hb = Math.floor(ub);
          if (uh(ab, Gb, Hb)) continue;
          const wb = hb.bS(Gb, Yb, Hb);
          Bb.isSolidBlockId(wb) && (ab.push(Gb, Hb), Sb.push(Bb.nameOfId(wb)))
        }
        return Sb
      },
      dropAhead: function() {
        const bb = (0, Ub.l)();
        return null !== bb && 0 !== (Wb.o.playerFlags(bb.api.apiView, 0) & Wb.Ad.DropAhead)
      }
    };
    var Bh = hb(36606),
      Oh = hb(38710),
      Gh = hb(1249),
      Uh = hb(40114);
    const Lh = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Yh = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Sh() {
      const bb = new Set;
      return {
        add: ub => (bb.add(ub), () => {
          bb.delete(ub)
        }),
        fire() {
          for (const ub of bb) ub()
        }
      }
    }
    const ah = Object.freeze([]);

    function Hh(bb, ub) {
      let hb, {
        rereads: Bb,
        followLocalId: Ob
      } = ub;
      const Ub = () => (hb = (0, cb.o)(hb, bb()), hb);
      return {
        current: Ub,
        watch(bb) {
          const ub = (0, Xb.b)((ub => {
            Bb(ub) && bb(Ub())
          }));
          if (!Ob) return ub;
          let hb = (0, Zb.h)();
          const Lb = (0, Gb.x)((() => {
            const ub = (0, Zb.h)();
            ub !== hb && (hb = ub, bb(Ub()))
          }));
          return () => {
            ub(), Lb()
          }
        }
      }
    }
    const wh = {
        players: Hh((function() {
          const bb = Xb.c.ids(),
            ub = {};
          for (const Gb of bb) {
            var hb, Bb, Ob;
            ub[Gb] = {
              name: null !== (hb = Xb.c.getName(Gb)) && void 0 !== hb ? hb : null,
              ranks: null !== (Bb = Xb.c.getSetting(Gb, "ranks")) && void 0 !== Bb ? Bb : ah,
              cosmetics: null !== (Ob = (0, Xb.g)(Gb)) && void 0 !== Ob ? Ob : null
            }
          }
          return {
            ids: bb,
            byId: ub,
            localId: (0, Zb.h)()
          }
        }), {
          rereads: bb => "roster" !== bb.kind || bb.members || bb.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Hh((function() {
          const bb = {};
          for (const Ob of Xb.c.ids()) {
            var ub, hb, Bb;
            bb[Ob] = {
              colour: null !== (ub = Xb.c.getSetting(Ob, "colorInLobbyLeaderboard")) && void 0 !== ub ? ub : null,
              values: null !== (hb = Xb.c.getSetting(Ob, "lobbyLeaderboardValues")) && void 0 !== hb ? hb : null,
              tags: null !== (Bb = Xb.c.getSetting(Ob, "lobbyLeaderboardTags")) && void 0 !== Bb ? Bb : null
            }
          }
          return bb
        }), {
          rereads: function(bb) {
            if ("roster" !== bb.kind) return "reset" === bb.kind;
            const {
              members: ub,
              settings: hb
            } = bb;
            return ub || hb.has("colorInLobbyLeaderboard") || hb.has("lobbyLeaderboardValues") || hb.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Zh = {
        cosmeticsUpdated: {
          watch: bb => (0, Xb.b)((ub => {
            if ("cosmetics" !== ub.kind) return;
            const hb = (0, Zb.h)();
            bb(ub.updates.map((bb => {
              let {
                vB: ub,
                tB: Bb,
                JB: Ob
              } = bb;
              return {
                local: ub === hb,
                tB: Bb,
                JB: Ob
              }
            })))
          }))
        }
      };
    var Xh = hb(2712),
      ph = hb(1622),
      oh = hb(612),
      Ah = hb(40157);
    let lh = !1,
      Kh = null;
    const Wh = {
      setShopOpen(bb) {
        var ub;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.ShopMenuChanged, (0, vb.L)(bb))
      },
      buyShopItem(bb) {
        var ub;
        let {
          categoryKey: hb,
          itemKey: Bb,
          userInput: Ob
        } = bb;
        null === (ub = (0, Ub.l)()) || void 0 === ub || ub.send(vb.e.ItemBought, {
          categoryKey: hb,
          itemKey: Bb,
          shopVersion: Kb.b.get("_shopVersion"),
          userInput: Ob
        })
      }
    };
    let Ch = !1;
    var dh = hb(4584);
    const rh = Ku.t.LookFrozen | Ku.t.ClicksSuppressed;

    function jh(bb, ub) {
      var hb;
      null !== (hb = (0, Ub.l)()) && void 0 !== hb && hb.send(bb, ub) || console.warn(`[bloxd-wasm-client] message ${bb} not sent: no live game or the core's command ring is full`)
    }(0, pb.n)(ib.cb, (bb => {
      const ub = (0, tb.g)(ib.cb, bb);
      void 0 !== ub && Sb.i.vp("setDiscordReportKey", ub)
    }));
    const nh = {
      ignorePlayer(bb) {
        jh(vb.e.IgnoreUser, (0, vb.z)({
          lU: bb
        }))
      },
      reportPlayer(bb) {
        let {
          playerId: ub,
          chatMsgId: hb,
          uS: Bb,
          details: Ob
        } = bb;
        jh(vb.e.UserReport, (0, vb.fb)({
          gS: ub,
          iS: hb,
          uS: Bb,
          hS: Ob
        }))
      },
      reportWorldCodeChat(bb) {
        let {
          chatMsgId: ub,
          uS: hb,
          details: Bb
        } = bb;
        jh(vb.e.UserReport, (0, vb.fb)({
          gS: "",
          iS: ub,
          uS: hb,
          hS: Bb
        }))
      },
      requestDiscordReportKey(bb) {
        jh(vb.e.ReqDiscordReportKey, (0, vb.I)(bb))
      },
      reportLobbyOrGame(bb) {
        let {
          target: ub,
          uS: hb,
          details: Bb
        } = bb;
        "customGame" === ub ? jh(vb.e.CustomGameReport, (0, vb.u)({
          uS: hb,
          hS: Bb
        })) : jh(vb.e.LobbyReport, (0, vb.D)({
          uS: hb,
          hS: Bb
        }))
      },
      updateMyCosmetic(bb) {
        jh(vb.e.UpdateMyCosmetic, (0, vb.db)(bb))
      },
      holdEmoteWheel(bb) {
        !bb || Cu ? (0, dh.j)(rh, bb ? rh : 0) : Sb.i.vp("requestEmoteWheelHoldRelease")
      }
    };
    var Dh = hb(40159),
      xh = hb(9181),
      zh = hb(39226);
    const gh = [0, 0, 0],
      ih = [0, 0, 0],
      vh = [0, 0, 0],
      th = {
        blockAtViewPoint(bb) {
          let {
            x: ub,
            y: hb
          } = bb;
          const Bb = (0, Ub.l)();
          if (null === Bb || void 0 === Bb || !Bb.renderFrame.hasView) return null;
          const {
            renderFrame: Ob,
            clientApi: Gb,
            api: Lb
          } = Bb;
          let Yb = 0;
          return (0, zh.g)(((bb, ub, hb) => (Yb = Gb.getBlockId(bb, ub, hb), 0 !== Yb)), Ob.cameraPosition, (0, zh.i)((bb => Wb.o.viewProj(Lb.apiView, 0, bb)), ub, hb, gh), zh.d, ih, vh) ? {
            pos: [ih[0], ih[1], ih[2]],
            normal: [vh[0], vh[1], vh[2]],
            name: (0, xh.g)(Yb)
          } : null
        }
      },
      Jh = {
        setBlockHighlight(bb) {
          var ub;
          null === (ub = (0, Ub.l)()) || void 0 === ub || ub.setBlockHighlight(bb)
        }
      };
    var eh = hb(1824),
      Nh = hb(40167),
      sh = hb(40171),
      Mh = hb(4258),
      mh = hb(4231),
      Ih = hb(40173),
      Ph = hb(3063),
      qh = hb(3067);
    let Eh = null,
      yh = null;

    function Vh(bb) {
      const ub = bb.startsWith(qh.k),
        [hb, Bb = hb, Ob = hb] = (ub ? bb.slice(qh.k.length) : bb).split(qh.j);
      return {
        top: hb,
        left: Bb,
        right: Ob,
        half: ub
      }
    }

    function Fh(bb) {
      const ub = null === Eh ? void 0 : (0, Ph.e)(bb),
        hb = void 0 === ub ? 0 : Eh.codes[ub];
      return 0 === hb ? void 0 : Eh.pool[hb - 1]
    }
    var fh = hb(3055),
      kh = hb(4219),
      Th = hb(4252),
      ch = hb(40177),
      Qh = hb(40180);
    const Rh = "item:";
    let bB = null,
      uB = null,
      hB = null,
      BB = null,
      OB = !1,
      GB = !1;

    function UB() {
      return GB || (GB = !0, (0, Th.i)().then((bb => {
        bb && (0, eh.e)()
      }))), hB ??= Promise.all([(0, fh.g)(), (yh ??= hb.e(1).then((() => hb(42035))).then((bb => {
        let {
          BLOCK_FACE_RUNS: ub,
          BLOCK_FACES: hb,
          MAX_FACE_ITEM_ID: Bb
        } = bb;
        Eh = {
          codes: (0, qh.E)(ub, Bb + 1),
          pool: hb.split(qh.t).map(Vh)
        }
      }), (bb => {
        throw yh = null, bb
      })), yh), (0, Qh.h)(), hb.e(190).then((() => hb(9106)))]).then((bb => {
        let [, , ub, hb] = bb;
        ub.followBundledTextures(), bB = ub, uB = hb, (0, eh.e)()
      }), (bb => {
        hB = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), hB
    }

    function LB(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = (0, ch.i)()) || void 0 === hb ? void 0 : hb.textureUrl(bb)) && void 0 !== ub ? ub : bB.itemSpriteUrl(bb)
    }

    function YB(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = (0, ch.i)()) || void 0 === hb ? void 0 : hb.textureUrl(bb)) && void 0 !== ub ? ub : bB.blockTextureUrl(bb)
    }

    function SB(bb) {
      var ub;
      return null !== (ub = (0, fh.d)(bb)) && void 0 !== ub ? ub : bb
    }

    function aB(bb, ub) {
      var hb, Bb, Ob;
      return null !== (hb = null !== (Bb = null !== (Ob = YB(bb)) && void 0 !== Ob ? Ob : null === ub || void 0 === ub ? void 0 : ub.rotated[bb]) && void 0 !== Bb ? Bb : null === ub || void 0 === ub ? void 0 : ub.animated[bb]) && void 0 !== hb ? hb : bB.notFoundUrl()
    }

    function HB(bb) {
      return void 0 !== (0, Ph.e)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Ph.f)(Number(bb)) : void 0
    }

    function wB(bb) {
      var ub;
      if (bb.startsWith(Rh)) {
        var hb;
        const ub = (0, fh.d)(bb.slice(5));
        return null !== (hb = void 0 === ub ? null : LB(ub)) && void 0 !== hb ? hb : bB.notFoundUrl()
      }
      return null !== (ub = bB.particleUrl(bb)) && void 0 !== ub ? ub : bB.notFoundUrl()
    }

    function ZB(bb, ub) {
      return "StairsBlock" === bb ? bb : ub ? "SlabBlock" : "CubeBlock"
    }
    const XB = {
        async blockIcon(bb) {
          var ub;
          let {
            name: Bb,
            size: Ob,
            lineWidth: Gb
          } = bb;
          await UB();
          const Ub = null !== (ub = HB(Bb)) && void 0 !== ub ? ub : Bb,
            Lb = (0, Th.c)(Ub, Ob, Gb);
          if (null !== Lb) return Lb;
          const Yb = Fh(Ub),
            Sb = (0, Ph.e)(Ub),
            ab = void 0 === Sb || null === uB ? void 0 : uB.itemTypeNameOf(Sb);
          if (null === bB || void 0 === Yb) return "";
          const Hb = [Yb.top, Yb.left, Yb.right].some((bb => null === YB(bb))),
            wb = Hb ? await (BB ??= hb.e(202).then((() => hb(33950))).then((bb => (OB && (OB = !1, (0, eh.e)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (BB = null, OB = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), BB) : null;
          if (Hb && null === wb) return "";
          const Zb = {
              top: aB(Yb.top, wb),
              left: aB(Yb.left, wb),
              right: aB(Yb.right, wb),
              itemType: ZB(ab, Yb.half)
            },
            Xb = (0, ch.g)(),
            pb = 0 === Xb ? Ub : `${Ub}#${Xb}`;
          return (await (0, kh.e)()).drawBlockIconUrl(pb, Ob, Gb, (() => Zb))
        }
      },
      pB = {
        itemIcon: function(bb) {
          var ub, hb, Ob, Gb;
          if (null === bB) return UB(), Bb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, mh.i)(bb)) return {
            kind: "icon",
            url: null !== (hb = null !== (Ob = null === (Gb = (0, ch.i)()) || void 0 === Gb ? void 0 : Gb.textureUrl(bb)) && void 0 !== Ob ? Ob : bB.ingameIconUrl(bb)) && void 0 !== hb ? hb : bB.notFoundUrl()
          };
          if (bb.startsWith(mh.b)) return {
            kind: "icon",
            url: wB(bb.slice(mh.b.length))
          };
          if (0 === (0, Ph.g)()) return (0, Ih.e)(), Bb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Ub = null !== (ub = HB(bb)) && void 0 !== ub ? ub : bb,
            Lb = (0, Ph.e)(Ub),
            Yb = void 0 === Lb ? void 0 : uB.itemTypeNameOf(Lb);
          if (void 0 !== Fh(Ub)) return {
            kind: "drawnBlock"
          };
          const Sb = function(bb) {
            var ub;
            return null !== (ub = LB(SB(bb))) && void 0 !== ub ? ub : bB.notFoundUrl()
          }(Ub);
          if ((0, Th.e)(Ub) && ! function(bb) {
              const ub = (0, ch.i)();
              return null !== ub && (null !== ub.textureUrl(SB(bb)) || null !== ub.modelUrl(bb))
            }(Ub)) return {
            kind: "model",
            url: Sb
          };
          if ("Gun" === Yb) return {
            kind: "gun",
            url: Sb
          };
          if (void 0 !== Lb && "GrayscaleArmour" === uB.itemTypeOf(Lb) || Object.hasOwn(Mh.d, Ub)) {
            var ab;
            const ub = null !== (ab = (0, Mh.g)(bb)) && void 0 !== ab ? ab : (0, Mh.g)(Ub);
            if (ub) return {
              kind: "item",
              url: Sb,
              tint: ub
            }
          }
          return {
            kind: "item",
            url: Sb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== HB(bb) || (0, mh.i)(bb) || bb.startsWith(mh.b)
        },
        isItemName: function(bb) {
          return void 0 !== HB(bb)
        }
      };
    var oB = hb(571),
      AB = hb(39229);

    function lB(bb) {
      if (null === bb || void 0 === bb || !bb.isCoreRunning) return null;
      const {
        api: ub,
        chunks: hb,
        items: Bb,
        tables: Ob
      } = bb;
      return {
        playerFeet() {
          const bb = ub.iK(ub.localId);
          return null !== bb && void 0 !== bb && bb.every(Number.isFinite) ? bb : null
        },
        chunkBlocks: bb => hb.isLoaded(bb[0], bb[1], bb[2]) ? (bb, ub, Bb) => hb.bS(bb, ub, Bb) : null,
        blockName: bb => Ob.nameOfId(bb),
        inventory: () => ({
          slots: Bb.playerItems().map((bb => bb ? {
            name: bb.name,
            amount: bb.amount
          } : null)),
          heldSlot: Bb.selectedSlot
        }),
        nearby() {
          const hb = [];
          for (let Ob = 0; Ob < ub.idStr.length; Ob++) {
            var Bb;
            const Gb = ub.idStr[Ob],
              Ub = ub.serverIds[Ob],
              Lb = ub.kinds[Ob];
            if (null === Gb || ub.isLocal(Ub) || Lb >>> Wb.c !== Wb.n.Lifeform) continue;
            const Yb = ub.iK(Ub),
              Sb = oB.i[Lb & Wb.d];
            Yb && void 0 !== Sb && hb.push({
              kind: "Player" === Sb ? "player" : Sb,
              name: null !== (Bb = bb.clientApi.getEntityName(Gb)) && void 0 !== Bb ? Bb : null,
              position: Yb
            })
          }
          return hb
        },
        droppedItems() {
          let bb = 0;
          for (let hb = 0; hb < ub.idStr.length; hb++) null !== ub.idStr[hb] && ub.kinds[hb] >>> Wb.c === Wb.n.Item && bb++;
          return bb
        }
      }
    }
    const KB = {
        worldCodeAiChunk: bb => Promise.resolve((0, AB.b)(lB((0, Ub.l)()), bb)),
        worldCodeAiGameState: () => Promise.resolve((0, AB.f)(lB((0, Ub.l)())))
      },
      WB = function(bb) {
        const ub = Sh(),
          Bb = Sh(),
          Ob = new Set,
          Gb = new Set,
          Ub = () => {
            var ub, hb;
            return null !== (ub = null === (hb = bb.runtime()) || void 0 === hb ? void 0 : hb.currentViewer) && void 0 !== ub ? ub : null
          };
        let Lb = null,
          Yb = null;
        const ab = (bb, ub) => ({
            current: bb,
            watch(hb) {
              let Bb = bb();
              return ub.add((() => {
                const ub = bb();
                ub !== Bb && (Bb = ub, hb(ub))
              }))
            }
          }),
          wb = bb => ({
            watch: ub => (bb.add(ub), () => {
              bb.delete(ub)
            })
          }),
          Zb = bb => {
            const ub = Ub(),
              hb = null === ub || void 0 === ub ? void 0 : ub.view;
            ub && hb && ub.seek(Math.max(0, Math.min(hb.totalTicks - 1, hb.gH + bb * Hb.hd)))
          },
          Xb = {
            replay: ab((() => {
              var bb;
              const ub = Ub(),
                hb = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null;
              return null === ub || null === hb || hb.state === Hb.Xc.None ? (Lb = null, null) : (Lb = (0, cb.o)(Lb, {
                id: ub.id,
                gH: hb.gH,
                totalTicks: hb.totalTicks,
                hN: Hb.hd,
                playing: hb.state === Hb.Xc.Playing,
                speed: hb.speed,
                cameraMode: hb.cameraMode,
                freecam: "freecam" === hb.cameraMode
              }), Lb)
            }), ub),
            replayEdits: ab((() => {
              var bb;
              const ub = Ub(),
                hb = null !== (bb = null === ub || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null;
              return null === ub || null === hb || hb.state === Hb.Xc.None ? (Yb = null, null) : (Yb = (0, cb.o)(Yb, {
                cameraKeyframes: [...ub.keyframes],
                playbackMark: hb.mark,
                fileName: ub.fileName,
                unsavedChanges: ub.unsavedChanges,
                suggestSaveAs: ub.suggestSaveAs
              }), Yb)
            }), ub),
            replayRecorder: ab((() => {
              var ub, hb;
              return null !== (ub = null === (hb = bb.runtime()) || void 0 === hb ? void 0 : hb.recorder.current) && void 0 !== ub ? ub : Uh.e.states.replayRecorder.current()
            }), Bb),
            replayVideoExporting: {
              current: Oh.b,
              watch: bb => (0, Sb.l)("replayViewer|videoExportChanged", (() => {
                bb((0, Oh.b)())
              }))
            }
          },
          pb = {
            replayUiActionRequested: wb(Gb),
            replayViewerRequested: wb(Ob)
          },
          ob = bb => {
            for (const ub of Ob) ub(bb)
          },
          Ab = () => {
            var Bb;
            !0 === (null === (Bb = Ub()) || void 0 === Bb ? void 0 : Bb.isOpen) && Promise.all([hb.e(95), hb.e(64)]).then((() => hb(42028))).then((hb => {
              let {
                startWasmReplayVideoExport: Bb
              } = hb;
              return Bb({
                viewer: Ub,
                canvas: () => {
                  var ub, hb;
                  return null !== (ub = null === (hb = bb.canvas) || void 0 === hb ? void 0 : hb.call(bb)) && void 0 !== ub ? ub : null
                },
                watchViewer: ub.add,
                requestViewer: ob
              })
            }), (bb => {
              console.error("Couldn't load the video export", bb), Gh.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((bb => {
              console.error("The video export failed", bb)
            }))
          },
          lb = {
            replayAction(bb) {
              if ((0, Oh.b)()) return;
              const ub = Ub();
              switch (bb) {
                case "replaySkipBack":
                  Zb(-1);
                  break;
                case "replaySkipForward":
                  Zb(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== ub && void 0 !== ub && ub.view && ub.setSpeed((0, Bh.i)(ub.view.speed, "replaySpeedUp" === bb ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === ub || void 0 === ub || ub.addKeyframe()
              }
            },
            setReplayPlaying(bb) {
              var ub, hb;
              (0, Oh.b)() || (bb ? null === (ub = Ub()) || void 0 === ub || ub.play() : null === (hb = Ub()) || void 0 === hb || hb.pause())
            },
            seekReplay(bb) {
              var ub;
              let {
                gH: hb,
                ignorePlaybackMark: Bb
              } = bb;
              null === (ub = Ub()) || void 0 === ub || ub.seek(hb, null !== Bb && void 0 !== Bb && Bb)
            },
            setReplayCameraMode(bb) {
              var ub;
              null === (ub = Ub()) || void 0 === ub || ub.setCameraMode(bb)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(bb) {
              var ub;
              null === (ub = Ub()) || void 0 === ub || ub.setKeyframe(bb)
            },
            moveReplayCameraKeyframe(bb) {
              var ub;
              let {
                from: hb,
                to: Bb
              } = bb;
              null === (ub = Ub()) || void 0 === ub || ub.moveKeyframe(hb, Bb)
            },
            deleteReplayCameraKeyframes(bb) {
              var ub;
              let {
                start: hb,
                end: Bb
              } = bb;
              null === (ub = Ub()) || void 0 === ub || ub.deleteKeyframes(hb, Bb)
            },
            setReplayPlaybackMark(bb) {
              var ub;
              null === (ub = Ub()) || void 0 === ub || ub.setMark(bb)
            },
            cropReplay(bb) {
              var ub, hb;
              let {
                start: Bb,
                end: Ob
              } = bb;
              return !(0, Oh.b)() && (null !== (ub = null === (hb = Ub()) || void 0 === hb ? void 0 : hb.crop(Bb, Ob)) && void 0 !== ub && ub)
            },
            holdReplayForShaderPackFailure(bb) {
              const ub = Ub();
              ub && (ub.holdForShaderPackFailure(), function(bb) {
                hb.e(130).then((() => hb(38833))).then((ub => {
                  let {
                    shaderPackPage: hb
                  } = ub;
                  hb.block(bb)
                })).catch((bb => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", bb)
                }))
              }(bb))
            },
            exportReplayVideo() {
              Ab()
            },
            toggleRecording() {
              var ub;
              null === (ub = bb.runtime()) || void 0 === ub || ub.recorder.toggleRecording()
            },
            saveClip() {
              var ub;
              null === (ub = bb.runtime()) || void 0 === ub || ub.recorder.saveClip()
            },
            setRecorderPrefs(ub) {
              var hb;
              let {
                clipping: Bb,
                clipSeconds: Ob
              } = ub;
              null === (hb = bb.runtime()) || void 0 === hb || hb.recorder.setPrefs(Bb, Ob)
            },
            setReplayViewerOpen(ub) {
              var hb;
              (0, ou.e)(ub) && (null === (hb = bb.runtime()) || void 0 === hb || hb.recorder.viewerShown(ub))
            },
            recordFlyingMiddleText(ub) {
              var hb;
              let {
                content: Bb,
                eh: Ob,
                angle: Gb,
                Nh: Ub
              } = ub;
              null === (hb = bb.runtime()) || void 0 === hb || hb.recorder.recordFlyingText(JSON.stringify(Bb), Ob, Gb, Ub)
            },
            dragReplayCamera(ub) {
              var hb;
              let {
                dx: Bb,
                dy: Ob
              } = ub;
              null === (hb = bb.freecam()) || void 0 === hb || hb.drag(Bb, Ob)
            },
            moveReplayFreecam(ub) {
              var hb;
              null === (hb = bb.freecam()) || void 0 === hb || hb.move(ub)
            },
            holdReplayFreecamVertical(ub) {
              var hb;
              let {
                action: Bb,
                MS: Ob
              } = ub;
              null === (hb = bb.freecam()) || void 0 === hb || hb.holdVertical(Bb, Ob)
            }
          },
          Kb = bb => {
            var ub;
            const hb = Ub(),
              Bb = null !== (ub = null === hb || void 0 === hb ? void 0 : hb.view) && void 0 !== ub ? ub : null;
            Lh.has(bb) ? (bb => {
              for (const ub of Gb) ub(bb)
            })(bb) : Yh.has(bb) ? lb.replayAction(bb) : "replayPlayPause" === bb ? hb && Bb && Bb.state !== Hb.Xc.None && lb.setReplayPlaying(Bb.state !== Hb.Xc.Playing) : "replayChangeCameraMode" === bb ? null === hb || void 0 === hb || hb.cycleCameraMode() : "replayExit" === bb ? !0 === (null === hb || void 0 === hb ? void 0 : hb.inPlayback) && (0, Ju.h)("/") : "replayExportVideo" === bb && Ab()
          };
        let Wb = !1;
        return {
          states: Xb,
          events: pb,
          commands: lb,
          lookups: {
            replayCamera() {
              var ub, hb, Bb;
              return !0 !== (null === (ub = Ub()) || void 0 === ub ? void 0 : ub.isOpen) ? null : null !== (hb = null === (Bb = bb.cameraView) || void 0 === Bb ? void 0 : Bb.call(bb)) && void 0 !== hb ? hb : null
            },
            leaveGameReloadsPage() {
              var bb;
              return !0 === (null === (bb = Ub()) || void 0 === bb ? void 0 : bb.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var bb;
              const hb = !0 === (null === (bb = Ub()) || void 0 === bb ? void 0 : bb.inPlayback);
              hb !== Wb && (Wb = hb, Sb.i.vp("connectedGameChanged")), ub.fire()
            },
            recorderChanged: Bb.fire,
            keyDown: bb => {
              var ub;
              switch (bb) {
                case "recordGame":
                  return void lb.toggleRecording();
                case "recordClip":
                  return void((0, ou.c)() || lb.saveClip())
              }(0, Oh.b)() || ("replayViewerOpen" !== bb ? bb.startsWith("replay") && ((0, ou.c)() || !0 === (null === (ub = Ub()) || void 0 === ub ? void 0 : ub.inPlayback)) && Kb(bb) : ob("toggle"))
            }
          }
        }
      }({
        runtime: Ob.m,
        cameraView: () => {
          var bb;
          const ub = null === (bb = (0, Ub.l)()) || void 0 === bb ? void 0 : bb.renderFrame;
          if (!ub) return null;
          const [hb, Bb, Ob] = ub.cameraPosition, [Gb, Lb, Yb] = ub.cameraDirection;
          return {
            position: [hb, Bb, Ob],
            direction: [Gb, Lb, Yb]
          }
        },
        canvas: () => {
          var bb, ub, hb;
          return null !== (bb = null === (ub = (hb = (0, Gb.K)()).canvas) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : null
        },
        freecam: Ob.i
      }),
      CB = {
        states: {
          ...Su,
          ...Zu.m,
          ...WB.states,
          ...wh,
          ...Pb
        },
        events: {
          ...au,
          ...ob,
          ...Zu.i,
          ...Db.b,
          ...Dh.i,
          ...WB.events,
          ...Zh,
          ...nb.h
        },
        commands: {
          ...jb,
          ...Hu,
          ...Ab,
          ...Zu.e,
          ...Tu,
          ...nh,
          ...nb.f,
          ...su,
          ...WB.commands,
          ...Wh,
          ...qb,
          ...Jh,
          ...Xu
        },
        queries: {
          ...Zu.k,
          ...KB
        },
        lookups: {
          ...wu,
          ...eb,
          ...Dh.m,
          ...WB.lookups,
          ...rb,
          ...hh,
          ...th,
          ...Eb
        }
      };

    function dB() {
      (0, Lb.f)(pb.q), (0, Ob.q)(WB.feed), (0, Db.d)(), cu || (cu = !0, (0, pb.n)(ib.h, (bb => {
        const ub = (0, tb.g)(ib.h, bb);
        "string" === typeof ub && Promise.resolve().then((() => hb(3437))).then((bb => {
          let {
            onCosmeticPackGranted: hb
          } = bb;
          hb(ub)
        }))
      })), (0, pb.n)(ib.Z, (bb => {
        const ub = (0, tb.g)(ib.Z, bb);
        "number" === typeof ub && Sb.i.vp("serverUpdating", Date.now() + ub, !0)
      })), (0, pb.n)(ib.F, (bb => {
        const ub = (0, tb.g)(ib.F, bb);
        if ((0, tb.d)(ub)) {
          const {
            Ob: bb,
            Gb: hb
          } = ub;
          (0, fu.c)({
            Ob: "string" === typeof bb ? bb : null,
            Gb: "string" === typeof hb ? hb : null
          })
        }
      })), (0, pb.n)(ab.fc.NewUiRequest, (bb => {
        const ub = (0, tb.i)(bb);
        (0, tb.d)(ub) && "number" === typeof ub.id && (0, tb.d)(ub.clientParameters) && (0, ku.f)(ub.id, ub.clientParameters)
      })), (0, pb.n)(ib.U, (bb => {
        const ub = (0, tb.g)(ib.U, bb);
        "number" === typeof ub && (0, ku.g)(ub)
      })), (0, pb.j)(ku.c), (0, pb.n)(ab.fc.UiRequestPopup, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub) && "number" === typeof ub.id && "string" === typeof ub.text) {
          const bb = ub.id;
          (0, ku.i)(bb, ub.text, (ub => {
            Tu.answerUiRequest({
              id: bb,
              ha: ub
            })
          }))
        }
      })), (0, pb.n)(ab.fc.TopRightHelper, (bb => {
        const ub = (0, tb.i)(bb);
        void 0 !== ub && Sb.i.vp("TopRightHelper", ub, !0)
      })), (0, pb.n)(ab.fc.TaskProgress, (bb => {
        const ub = (0, tb.i)(bb);
        (0, tb.d)(ub) && "string" === typeof ub.taskId && "number" === typeof ub.progress && (0, Fu.c)({
          taskId: ub.taskId,
          progress: ub.progress
        })
      }))), Ch || (Ch = !0, (0, pb.n)(ib.o, (bb => {
        const ub = (0, tb.g)(ib.o, bb);
        (0, tb.d)(ub) && Sb.i.vp("showShopFromServer", {
          toggle: ub.fh,
          kh: ub.kh
        }, !0)
      })), (0, pb.n)(ab.fc.OverShopInfo, (bb => {
        const ub = (0, tb.i)(bb);
        (0, tb.d)(ub) && Sb.i.vp("overShopInfo", ub.info, !0)
      })), (0, pb.n)(ab.fc.ShowShopTutorial, (() => {
        Sb.i.vp("showShopTutorial", null, !0)
      }))), lh || (lh = !0, (0, pb.i)((() => {
        var bb;
        (0, Xh.z)(), null === (bb = Kh) || void 0 === bb || bb(), Kh = (0, pb.e)() ? (0, oh.d)(pb.e) : null
      })), (0, pb.n)(ab.fc.SetCookie, (bb => {
        const ub = (0, tb.i)(bb),
          hb = (0, Ju.b)().gameNameWithVariation;
        (0, tb.d)(ub) && "string" === typeof ub.key && null !== hb && (0, ph.setCookie)(hb, ub.key, ub.value)
      })), (0, pb.n)(ab.fc.LeaveValues, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub) && "string" === typeof ub.leaveEventType) {
          const {
            leaveEventType: bb,
            category: hb,
            subCategory: Bb,
            value: Ob
          } = ub;
          (0, Xh.E)({
            leaveEventType: bb,
            category: hb,
            subCategory: Bb,
            value: Ob
          })
        }
      })), (0, pb.n)(ab.fc.CustomAnalyticsEvent, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub) && "string" === typeof ub.cat1) {
          const {
            cat1: bb,
            cat2: hb,
            cat3: Bb,
            value: Ob
          } = ub;
          (0, Xh.m)({
            cat1: bb,
            cat2: hb,
            cat3: Bb,
            value: Ob
          })
        }
      })), (0, pb.n)(ab.fc.ProgressionEvent, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub)) {
          const {
            type: bb,
            location1: hb,
            location2: Bb,
            location3: Ob,
            score: Gb
          } = ub;
          (0, Xh.q)({
            type: bb,
            location1: hb,
            location2: Bb,
            location3: Ob,
            score: Gb
          })
        }
      })), (0, pb.n)(ab.fc.ResourceEvent, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub)) {
          const {
            type: bb,
            resourceType: hb,
            amount: Bb,
            category: Ob,
            itemName: Gb
          } = ub;
          (0, Xh.t)({
            type: bb,
            resourceType: hb,
            amount: Bb,
            category: Ob,
            itemName: Gb
          })
        }
      })), (0, pb.n)(ab.fc.LeaderboardResponse, (bb => {
        const ub = (0, tb.i)(bb);
        if ((0, tb.d)(ub)) {
          const {
            category: bb,
            timeframe: hb,
            data: Bb
          } = ub;
          Sb.i.vp("leaderboardResponse", {
            category: bb,
            timeframe: hb,
            data: Bb
          })
        }
      })), (0, pb.n)(ib.x, (bb => {
        const ub = (0, tb.g)(ib.x, bb);
        "string" === typeof ub && (0, Ah.b)(bb.conn, ub)
      })), (0, pb.n)(ib.z, (bb => {
        const ub = (0, tb.g)(ib.z, bb);
        "string" === typeof ub && console.error(`[logErrorToConsole]: ${ub}`)
      }))), sb(), (0, Dh.e)(), Nu || (Nu = !0, (0, pb.n)(ib.f, (bb => {
        const ub = (0, tb.g)(ib.f, bb);
        void 0 !== ub && (0, eu.i)(ub)
      }))), Vu(), zu(), Fb || (Fb = !0, (0, Gb.u)(fb)), Bb.gameBridge.attach(CB), (0, Bb.installPageSources)({
        commands: {
          ...Bb.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Nh.j
        },
        queries: XB,
        lookups: {
          ...Bb.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...pB,
          VK: Nh.e,
          drawCallStats: sh.f
        }
      }), (0, eh.e)(), UB()
    }
  },
  40177: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ab,
      g: () => Yb,
      i: () => Lb,
      l: () => Sb
    });
    var Bb = hb(1824);
    let Ob = null,
      Gb = 0;
    const Ub = new Set;

    function Lb() {
      return Ob
    }

    function Yb() {
      return Gb
    }

    function Sb(bb) {
      Ob = bb, Gb++, (0, Bb.e)();
      for (const ub of Ub) ub()
    }

    function ab(bb) {
      Ub.add(bb)
    }
  },
  40180: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Lb
    });
    var Bb = hb(40188);
    let Ob = null,
      Gb = null;

    function Ub() {
      return Ob ??= hb.e(59).then((() => hb(42038))).catch((bb => {
        throw Ob = null, bb
      })), Ob
    }

    function Lb() {
      return Gb ??= Promise.all([Ub(), (0, Bb.f)()]).then((bb => {
        let [ub] = bb;
        return ub
      }), (bb => {
        throw Gb = null, bb
      })), Gb
    }
  },
  36704: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    const Bb = {
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
  36504: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Gb,
      f: () => wb,
      i: () => Lb,
      j: () => Yb,
      l: () => Sb,
      n: () => Hb,
      q: () => ab,
      s: () => Ub
    });
    var Bb = hb(1133);
    let Ob = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Ub(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Lb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Bb.m
      };
      if (bb.startsWith("lobby:")) {
        const ub = bb.slice(6);
        return Hb(ub) ? {
          kind: "lobby",
          path: ub
        } : null
      }
      const ub = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ub ? {
        kind: "codeBlock",
        pos: [parseInt(ub[1]), parseInt(ub[2]), parseInt(ub[3])]
      } : null
    }

    function Yb(bb) {
      return bb.endsWith(".d.ts")
    }

    function Sb(bb) {
      return bb.endsWith(".ts") && !Yb(bb)
    }
    const ab = 64;

    function Hb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > ab) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Yb(bb) && !Sb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ub = bb.split("/");
      for (const hb of ub)
        if ("" === hb || "." === hb || ".." === hb) return !1;
      return !0
    }
    const wb = 14e3
  },
  38666: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      h: () => Ob
    });
    const Bb = ["description", "label"];

    function Ob(bb) {
      const ub = bb.type;
      return {
        type: ub,
        params: bb[ub]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);