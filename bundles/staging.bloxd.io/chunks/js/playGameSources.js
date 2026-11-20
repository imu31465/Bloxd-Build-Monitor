export const id = 46;
export const ids = [46];
export const modules = {
  38856: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb,
      f: () => Tb,
      g: () => Mb
    });
    const Ab = 6e3;

    function Mb(bb, ab) {
      return [Math.floor(bb[0] / ab) * ab, Math.floor(bb[1] / ab) * ab, Math.floor(bb[2] / ab) * ab]
    }

    function Tb(bb) {
      const ab = (null !== bb && void 0 !== bb ? bb : "").match(/-?\d+(?:\.\d+)?/g);
      return ab && ab.length >= 3 ? [Number(ab[0]), Number(ab[1]), Number(ab[2])] : null
    }

    function Eb(bb, ab) {
      return bb === ab ? String(bb) : `${bb}-${ab}`
    }

    function Yb(bb, ab, Ub, Ab) {
      const Mb = [];
      let Tb = new Map;
      for (let Eb = bb[2]; Eb < bb[2] + ab; Eb++) {
        const Yb = new Map;
        let Bb = bb[0];
        for (; Bb < bb[0] + ab;) {
          const Mb = Ab(Bb, Ub, Eb);
          let eb = Bb;
          for (; eb + 1 < bb[0] + ab && Ab(eb + 1, Ub, Eb) === Mb;) eb++;
          if (null !== Mb) {
            const bb = `${Bb} ${eb} ${Mb}`,
              ab = Tb.get(bb);
            ab ? (ab.z1 = Eb, Tb.delete(bb), Yb.set(bb, ab)) : Yb.set(bb, {
              x0: Bb,
              x1: eb,
              z0: Eb,
              z1: Eb,
              name: Mb
            })
          }
          Bb = eb + 1
        }
        Mb.push(...Tb.values()), Tb = Yb
      }
      return Mb.push(...Tb.values()), Mb.sort(((bb, ab) => bb.z0 - ab.z0 || bb.x0 - ab.x0)).map((bb => `x${Eb(bb.x0,bb.x1)} z${Eb(bb.z0,bb.z1)} ${bb.name}`))
    }

    function Bb(bb, ab, Ub, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ab;
      const Bb = [bb[0] + ab - 1, bb[1] + ab - 1, bb[2] + ab - 1],
        eb = null !== Mb && Mb.every(((ab, Ub) => Math.floor(ab) >= bb[Ub] && Math.floor(ab) <= Bb[Ub])),
        vb = [`The chunk from ${bb.join(" ")} to ${Bb.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Mb && vb.push(`The player's feet are at ${Mb.map(Math.floor).join(" ")}, ${eb?"in this chunk":"outside this chunk"}.`);
      const Lb = [];
      for (let Ab = bb[1]; Ab <= Bb[1]; Ab++) {
        const Mb = Yb(bb, ab, Ab, Ub).join("; "),
          Tb = Lb[Lb.length - 1];
        (null === Tb || void 0 === Tb ? void 0 : Tb.boxes) === Mb ? Tb.to = Ab : Lb.push({
          from: Ab,
          to: Ab,
          boxes: Mb
        })
      }
      const Pb = Lb.filter((bb => "" !== bb.boxes));
      0 === Pb.length && vb.push("It is all air.");
      let Xb = vb.join("\n").length;
      for (const Ab of Pb) {
        const bb = `y${Eb(Ab.from,Ab.to)}: ${Ab.boxes}`;
        if (Xb += bb.length + 1, Xb > Tb) {
          vb.push(`Cut short: the layers from y${Ab.from} up aren't shown, as there are too many blocks.`);
          break
        }
        vb.push(bb)
      }
      return vb.join("\n")
    }
  },
  8356: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(19);

    function Mb() {
      return !Ab.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36277: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => Tb,
      g: () => Mb
    });
    const Ab = [.25, .5, 1, 2, 4, 8, 16];

    function Mb(bb, ab) {
      const Ub = Ab;
      let Mb = Ub.indexOf(bb);
      return -1 === Mb && (Mb = Ub.findIndex((ab => ab >= bb)), -1 === Mb && (Mb = Ub.length - 1)), "up" === ab ? Ub[Math.min(Mb + 1, Ub.length - 1)] : Ub[Math.max(Mb - 1, 0)]
    }

    function Tb(bb) {
      return bb <= Ab[0]
    }

    function Eb(bb) {
      return bb >= Ab[Ab.length - 1]
    }
  },
  35935: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb
    });
    let Ab = !1;

    function Mb() {
      return Ab
    }

    function Tb(bb) {
      return Ab !== bb && (Ab = bb, !0)
    }
  },
  38268: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(22),
      Mb = Ub(1844);

    function Tb(bb) {
      let {
        taskId: ab,
        progress: Ub
      } = bb;
      const Ab = Mb.e.get("_tasks");
      null !== Ab && void 0 !== Ab && Ab[ab] && Mb.e.apply({
        _tasks: {
          ...Ab,
          [ab]: {
            ...Ab[ab],
            progress: Ub
          }
        }
      })
    }
    Ab.m.subscribe("clientTaskProgress", (bb => {
      Tb(bb)
    }))
  },
  38836: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      f: () => jb,
      g: () => eb,
      j: () => Lb,
      m: () => Bb,
      p: () => Eb,
      r: () => vb,
      s: () => Rb
    });
    var Ab = Ub(1844),
      Mb = Ub(22),
      Tb = Ub(1852);
    const Eb = (0, Tb.m)((function() {
        var bb, ab, Ub, Mb;
        return {
          health: null !== (bb = Ab.e.get("_health")) && void 0 !== bb ? bb : null,
          maxHealth: null !== (ab = Ab.e.get("_totalMaxHealth")) && void 0 !== ab ? ab : null,
          shield: null !== (Ub = Ab.e.get("_shield")) && void 0 !== Ub ? Ub : null,
          maxShield: null !== (Mb = Ab.e.get("maxShield")) && void 0 !== Mb ? Mb : null
        }
      }), [], (0, Tb.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Yb = [{
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

    function Bb(bb, ab) {
      return Yb[(bb ? 2 : 0) + (ab ? 1 : 0)]
    }
    const eb = (0, Tb.m)((function() {
      var bb;
      return null !== (bb = Ab.e.get("_aura")) && void 0 !== bb ? bb : null
    }), [], (0, Tb.i)("_aura"));

    function vb(bb) {
      return {
        watch: ab => (0, Mb.n)("shotPlayer", (Ub => {
          let {
            playerId: Ab,
            damage: Mb,
            wasCrit: Tb,
            distance: Eb
          } = Ub;
          bb(Ab) && ab({
            damage: Mb,
            wasCrit: Tb,
            distance: Eb
          })
        }))
      }
    }

    function Lb(bb) {
      return (0, Tb.b)("chat", (ab => {
        let {
          serverChatMsgId: Ub,
          content: Ab,
          chatterEId: Mb
        } = ab;
        return {
          serverChatMsgId: null !== Ub && void 0 !== Ub ? Ub : null,
          content: Ab,
          author: Mb ? bb(Mb) : null
        }
      }))
    }
    class Pb {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Ub = this.shown;
        return bb !== this.needed && (this.needed = bb, this.neededSince = ab, null === bb && (this.shown = null)), this.shown !== this.needed && ab - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Ub
      }
    }

    function Xb(bb) {
      return [{
        translationKey: `touchKeys:${bb}`
      }]
    }
    const jb = {
      open: Xb("open"),
      close: Xb("close"),
      milk: Xb("milk"),
      shear: Xb("shear"),
      tame: Xb("tame"),
      feed: Xb("feed"),
      ride: Xb("ride")
    };

    function Rb(bb) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: bb
      }]
    }
  },
  39870: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => Eb
    });
    var Ab = Ub(2991);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Tb ??= Ub.e(208).then((() => Ub(35785))).then((bb => {
        let {
          ITEM_SPRITES: ab,
          ITEM_SPRITES_WITHOUT_FILE: Ub,
          ITEM_FILES_WITHOUT_SPRITE: Tb
        } = bb;
        Mb = function(bb, ab, Ub) {
          const Mb = new Set,
            Tb = (0, Ab.C)(ab);
          let Eb = 0;
          for (const [Ab, Yb] of bb.entries()) Ab === Tb[Eb] ? Eb++ : Mb.add(Yb);
          if ("" !== Ub)
            for (const Yb of Ub.split(Ab.u)) Mb.add(Yb);
          return Mb
        }(ab.split(Ab.u), Ub, Tb)
      }), (bb => {
        throw Tb = null, bb
      })), Tb
    }

    function Yb(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = Mb) || void 0 === Ub ? void 0 : Ub.has(bb)) && void 0 !== ab && ab
    }
  },
  38847: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      e: () => Tb,
      i: () => Mb
    });
    const Ab = 128;

    function Mb(bb, ab, Ub, Ab) {
      const Mb = 2 * ab - 1,
        Tb = 1 - 2 * Ub,
        Eb = bb(0) - Mb * bb(3),
        Yb = bb(4) - Mb * bb(7),
        Bb = bb(8) - Mb * bb(11),
        eb = bb(1) - Tb * bb(3),
        vb = bb(5) - Tb * bb(7),
        Lb = bb(9) - Tb * bb(11);
      Ab[0] = Yb * Lb - Bb * vb, Ab[1] = Bb * eb - Eb * Lb, Ab[2] = Eb * vb - Yb * eb;
      const Pb = Ab[0] * bb(3) + Ab[1] * bb(7) + Ab[2] * bb(11) < 0 ? -1 : 1,
        Xb = Math.hypot(Ab[0], Ab[1], Ab[2]) * Pb;
      return Ab[0] /= Xb, Ab[1] /= Xb, Ab[2] /= Xb, Ab
    }

    function Tb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = [Math.floor(ab[0]), Math.floor(ab[1]), Math.floor(ab[2])],
        Yb = [0, 0, 0],
        Bb = [1 / 0, 1 / 0, 1 / 0],
        eb = [1 / 0, 1 / 0, 1 / 0];
      for (let Pb = 0; Pb < 3; Pb++) Yb[Pb] = Math.sign(Ub[Pb]), 0 !== Yb[Pb] && (eb[Pb] = Math.abs(1 / Ub[Pb]), Bb[Pb] = (Eb[Pb] + (Yb[Pb] > 0 ? 1 : 0) - ab[Pb]) / Ub[Pb]);
      let vb = 0,
        Lb = Math.abs(Ub[0]) > Math.abs(Ub[1]) ? 0 : 1;
      for (Math.abs(Ub[2]) > Math.abs(Ub[Lb]) && (Lb = 2); vb <= Ab;) {
        if (bb(Eb[0], Eb[1], Eb[2])) return Mb[0] = Eb[0], Mb[1] = Eb[1], Mb[2] = Eb[2], Tb[0] = 0, Tb[1] = 0, Tb[2] = 0, Tb[Lb] = -Yb[Lb], !0;
        Lb = Bb[0] < Bb[1] ? 0 : 1, Bb[2] < Bb[Lb] && (Lb = 2), vb = Bb[Lb], Eb[Lb] += Yb[Lb], Bb[Lb] += eb[Lb]
      }
      return !1
    }
  },
  38832: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      return Math.hypot(bb[0] - ab[0], bb[1] - ab[1], bb[2] - ab[2]) < Ub + .5
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  38287: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb
    });
    var Ab = Ub(1162),
      Mb = Ub(1249),
      Tb = Ub(19),
      Eb = Ub(1238),
      Yb = Ub(1242),
      Bb = Ub(1433),
      eb = Ub(35909);

    function vb(bb) {
      let {
        bb: ab,
        Ub: Ub
      } = bb;
      const vb = null !== ab && void 0 !== ab ? ab : (0, Yb.e)().gameNameWithVariation;
      (0, Ab.P)(vb) && ((0, eb.m)(), (0, Eb.ab)((() => {
        console.log("Received matchmaking order from game server to game", ab), (0, Tb.k)("inGameReplay"), (0, Bb.navigatePreserveSearch)((0, Mb.b)(vb, null !== Ub && void 0 !== Ub ? Ub : void 0))
      }), "video_start"))
    }
  },
  38463: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = Ub(22),
      Mb = Ub(1874);

    function Tb(bb) {
      var ab, Ub;
      const Tb = (0, Mb.o)(null !== (ab = null === (Ub = Mb.x.toggleFreeCam) || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== ab ? ab : null);
      Ab.m.IR("showBottomMessage", {
        message: `Free Camera ${bb?"Enabled":"Disabled"}${Tb?` - Press ${Tb} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38274: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb,
      g: () => Eb,
      j: () => Yb,
      n: () => eb
    });
    var Ab = Ub(22),
      Mb = Ub(1260);
    const Tb = new Map;

    function Eb(bb, ab) {
      Ab.m.IR("newUiRequest", {
        id: bb,
        clientParameters: ab
      }, !0)
    }

    function Yb(bb) {
      Ab.m.IR("removeUiRequest", bb, !0);
      const ab = Tb.get(bb);
      ab && (ab.tearDownNotification(), Tb.delete(bb))
    }

    function Bb() {
      Ab.m.IR("clearUiRequests");
      for (const bb of Tb.values()) bb.tearDownNotification();
      Tb.clear()
    }

    function eb(bb, ab, Ub) {
      const Ab = Mb.NotificationProvider.showPromptPopup({
        title: ab,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Tb.set(bb, Ab), Ab.getResult().then((ab => {
        Tb.delete(bb), "notificationTornDown" !== ab && Ub(ab)
      }))
    }
  },
  38850: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb,
      e: () => Pb
    });
    var Ab = Ub(205),
      Mb = Ub(38856);
    const Tb = 20;

    function Eb(bb) {
      return bb.map(Math.floor).join(" ")
    }

    function Yb(bb) {
      return null === bb.amount || 1 === bb.amount ? bb.name : `${bb.amount} ${bb.name}`
    }
    var Bb = Ub(38865),
      eb = Ub(1844),
      vb = Ub(1242);

    function Lb(bb, ab) {
      if (!bb) return Bb.e;
      const Ub = bb.playerFeet();
      if (!Ub) return "The player isn't in the world yet, so no blocks can be seen.";
      const Tb = Ab.c.Mj,
        Eb = (0, Mb.g)(null !== ab && void 0 !== ab ? ab : Ub, Tb),
        Yb = bb.chunkBlocks(Eb);
      return Yb ? (0, Mb.e)(Eb, Tb, ((ab, Ub, Ab) => {
        const Mb = Yb(ab, Ub, Ab);
        return 0 === Mb ? null : bb.blockName(Mb).split("|")[0]
      }), Ub) : `The chunk from ${Eb.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Ub.map(Math.floor).join(" ")}.`
    }

    function Pb(bb) {
      var ab, Ub, Ab;
      if (!bb) return Bb.f;
      const Mb = bb.playerFeet();
      if (!Mb) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Lb,
        heldSlot: Pb
      } = bb.inventory();
      return function(bb) {
        const ab = [];
        null !== bb.game && ab.push(`Game: ${bb.game}.`);
        const Ub = null === bb.health ? "" : `, health ${Math.round(bb.health)}${null===bb.maxHealth?"":` of ${Math.round(bb.maxHealth)}`}`;
        ab.push(`The player (the creator) stands at ${Eb(bb.position)}${Ub}, ${bb.creative?"in":"not in"} creative mode.`);
        const Ab = bb.slots[bb.heldSlot];
        ab.push(Ab ? `Holding (slot ${bb.heldSlot}): ${Yb(Ab)}.` : `Holding nothing (slot ${bb.heldSlot} is empty).`);
        const Mb = bb.slots.flatMap(((bb, ab) => bb ? [`slot ${ab}: ${Yb(bb)}`] : []));
        ab.push(Mb.length > 0 ? `Inventory: ${Mb.join(", ")}.` : "Inventory: empty.");
        const Bb = ab => Math.hypot(ab.position[0] - bb.position[0], ab.position[1] - bb.position[1], ab.position[2] - bb.position[2]),
          eb = [...bb.nearby].sort(((bb, ab) => Bb(bb) - Bb(ab)));
        if (0 === eb.length) ab.push("No other players or mobs are near enough to see.");
        else {
          ab.push("Near them, nearest first:");
          for (const bb of eb.slice(0, Tb)) {
            const Ub = "player" === bb.kind ? `player "${bb.name||"?"}"` : bb.name && bb.name !== bb.kind ? `${bb.kind} "${bb.name}"` : bb.kind,
              Ab = Math.round(Bb(bb));
            ab.push(`- ${Ub} at ${Eb(bb.position)}, ${Ab} block${1===Ab?"":"s"} away`)
          }
          eb.length > Tb && ab.push(`- and ${eb.length-Tb} more further away`)
        }
        return bb.droppedItems > 0 && ab.push(`${bb.droppedItems} dropped item${1===bb.droppedItems?" is":"s are"} on the ground nearby.`), ab.join("\n")
      }({
        game: null !== (ab = (0, vb.e)().gameNameWithVariation) && void 0 !== ab ? ab : null,
        position: Mb,
        health: null !== (Ub = eb.e.get("_health")) && void 0 !== Ub ? Ub : null,
        maxHealth: null !== (Ab = eb.e.get("_totalMaxHealth")) && void 0 !== Ab ? Ab : null,
        creative: !0 === eb.e.get("creative"),
        heldSlot: Pb,
        slots: Lb,
        nearby: bb.nearby(),
        droppedItems: bb.droppedItems()
      })
    }
  },
  38298: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      h: () => Bb,
      l: () => eb
    });
    var Ab = Ub(1162),
      Mb = Ub(950),
      Tb = Ub(36195),
      Eb = Ub(22);

    function Yb(bb) {
      let {
        lobbyName: ab,
        gameNameWithVariation: Ub
      } = bb;
      return !(0, Ab.R)(ab) || null !== Ub && (Ub.startsWith("testGym") || (0, Mb.l)(Ub))
    }

    function Bb(bb) {
      return bb.fa === Tb.e.Leave || bb.fa === Tb.e.Cursor
    }

    function eb(bb) {
      Eb.m.IR("codeCollab", {
        type: bb.fa,
        docKey: bb.ma,
        version: bb.Na,
        editorCount: bb.Wa,
        peers: bb.Ha,
        updates: bb.Ia,
        playerId: bb.da,
        playerName: bb.Fa,
        colour: bb.ha,
        anchor: bb.Ga,
        head: bb.Qa,
        existingCursors: bb.qa,
        files: bb.ua,
        engineSettings: bb.ra
      })
    }
  },
  39834: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => Gb,
      B: () => hb,
      D: () => cb,
      G: () => qb,
      K: () => Ib,
      L: () => Qb,
      N: () => Hb,
      O: () => sb,
      P: () => wb,
      S: () => Fb,
      d: () => gb,
      g: () => rb,
      k: () => Nb,
      o: () => Cb,
      s: () => Wb,
      w: () => pb,
      x: () => ub,
      z: () => db
    });
    var Ab = Ub(1294),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(2254),
      Yb = Ub(4501),
      Bb = Ub(4469);
    let eb, vb = !1,
      Lb = !1,
      Pb = !1,
      Xb = !1;
    const jb = 1300,
      Rb = 3e3;
    let kb = 0,
      yb = !1,
      Zb = !1,
      Db = 0;
    const zb = 2;
    let xb = !1,
      ib = !1;
    const fb = new Set,
      mb = new Set;

    function pb() {
      return vb
    }

    function Nb() {
      return Zb
    }

    function Wb() {
      return ib
    }

    function Hb() {
      return (0, Tb.i)() && !ib
    }

    function Ib(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== ib) {
        ib = bb;
        for (const bb of [...mb]) bb(ib);
        ab && wb()
      }
    }

    function db(bb) {
      return mb.add(bb), () => {
        mb.delete(bb)
      }
    }

    function Fb() {
      (0, Yb.l)(Eb.v.Menu, (0, Tb.i)() ? 0 : Eb.v.Menu)
    }

    function hb() {
      Zb = !1, Db = 0, Fb(), wb()
    }

    function Gb(bb) {
      return fb.add(bb), () => {
        fb.delete(bb)
      }
    }

    function Qb(bb) {
      Lb = !1, bb !== vb && (vb = bb, Xb = !1, clearTimeout(eb), Pb = !vb && xb, vb ? (yb = !1, Zb = !1, Db = 0) : Hb() && !xb && (Zb = !0), xb = !1, vb && !Hb() && Ob(), Jb(), Pb && wb())
    }

    function qb(bb) {
      bb !== yb && (yb = bb, bb || wb())
    }

    function ub() {
      Lb = !1, Xb || !0 !== lb() || (Xb = !0, clearTimeout(eb), eb = setTimeout(Kb, jb))
    }

    function rb() {
      return (!Lb || performance.now() - kb > Rb) && (Lb = (0, Bb.K)().lockPointer(), kb = performance.now()), Lb
    }

    function Kb() {
      ob() && tb() && rb()
    }

    function ob() {
      return Hb() && !vb && !yb && !(0, Ab.d)()
    }

    function lb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function tb() {
      return Pb && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lb()
    }

    function wb() {
      Hb() ? ob() && !Zb && tb() && rb() : vb && !xb && Ob()
    }

    function sb() {
      Zb ? navigator.vendor.startsWith("Apple") ? Vb() : Db = zb : wb()
    }

    function gb() {
      Db > 0 && 0 === --Db && Vb()
    }

    function Cb() {
      Db = 0
    }

    function Vb() {
      ob() && !0 === lb() && rb()
    }

    function Ob() {
      xb = !0, (0, Bb.K)().unlockPointer()
    }

    function cb() {
      Lb = !1, Pb = !1, Xb = !1, clearTimeout(eb), yb = !1, Zb = !1, Db = 0, xb = !1;
      const bb = vb;
      vb = !1, bb && Jb()
    }

    function Jb() {
      for (const bb of [...fb]) bb(vb);
      Mb.m.IR("pointerLockUpdate", vb)
    }
  },
  39803: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      e: () => Yb,
      h: () => Lb,
      k: () => eb,
      l: () => Eb,
      p: () => vb,
      t: () => Bb
    });
    let Ab = null,
      Mb = null,
      Tb = null;

    function Eb(bb) {
      Ab = bb
    }

    function Yb() {
      return Ab
    }

    function Bb(bb) {
      Mb = bb
    }

    function eb() {
      return Mb
    }

    function vb(bb) {
      Tb = bb
    }

    function Lb() {
      return Tb
    }

    function Pb() {
      var bb, ab;
      return !0 === (null === (bb = Mb) || void 0 === bb || null === (ab = bb.currentViewer) || void 0 === ab ? void 0 : ab.inPlayback)
    }
  },
  39852: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      f: () => Tb,
      h: () => Yb
    });
    var Ab = Ub(39701),
      Mb = Ub(39714);

    function Tb(bb) {
      if (bb.queries.drawCensus() < Ab.Cb.BYTES) return null;
      const ab = bb.memoryData(bb.scratch(), Ab.Cb.BYTES, 4, "the draw census");
      return null === ab ? null : {
        terrainOpaque: Ab.Cb.terrainOpaque(ab, 0),
        terrainTransparent: Ab.Cb.terrainTransparent(ab, 0),
        terrainPack: Ab.Cb.terrainPack(ab, 0),
        earthSky: Ab.Cb.earthSky(ab, 0),
        skyMeshes: Ab.Cb.skyMeshes(ab, 0),
        regular: Ab.Cb.regular(ab, 0),
        thin: Ab.Cb.thin(ab, 0),
        line: Ab.Cb.line(ab, 0),
        text: Ab.Cb.text(ab, 0),
        particles: Ab.Cb.particles(ab, 0)
      }
    }

    function Eb(bb) {
      const {
        terrainOpaque: ab,
        terrainTransparent: Ub,
        earthSky: Ab,
        skyMeshes: Mb,
        regular: Tb,
        thin: Eb,
        line: Yb,
        text: Bb,
        particles: eb
      } = bb;
      return ab + Ub + Ab + Mb + Tb + Eb + Yb + Bb + eb
    }

    function Yb() {
      const bb = (0, Mb.i)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const ab = Tb(bb);
        if (null === ab) return [];
        const {
          terrainOpaque: Ub,
          terrainTransparent: Ab,
          terrainPack: Mb,
          earthSky: Yb,
          skyMeshes: Bb,
          regular: eb,
          thin: vb,
          line: Lb,
          text: Pb,
          particles: Xb
        } = ab;
        return [{
          label: "Drawn",
          value: `${Eb(ab)}`
        }, {
          label: "Terrain",
          value: `${Ub} opaque / ${Ab} transparent (${Mb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${eb} / ${vb}`
        }, {
          label: "Text / Lines",
          value: `${Pb} / ${Lb}`
        }, {
          label: "Sky / Particles",
          value: `${Yb+Bb} / ${Xb}`
        }]
      }(bb.api) : []
    }
  },
  39857: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadIcons: () => Wb,
      setIconFileOverrides: () => Hb,
      wasmIconLookups: () => rb,
      wasmIconQueries: () => ub
    });
    var Ab = Ub(4174),
      Mb = Ub(4147),
      Tb = Ub(39859),
      Eb = Ub(1838),
      Yb = Ub(1824),
      Bb = Ub(2989),
      eb = Ub(2991);
    let vb = null,
      Lb = null;

    function Pb(bb) {
      const ab = bb.startsWith(eb.m),
        [Ub, Ab = Ub, Mb = Ub] = (ab ? bb.slice(eb.m.length) : bb).split(eb.k);
      return {
        top: Ub,
        left: Ab,
        right: Mb,
        half: ab
      }
    }

    function Xb(bb) {
      const ab = null === vb ? void 0 : (0, Bb.d)(bb),
        Ub = void 0 === ab ? 0 : vb.codes[ab];
      return 0 === Ub ? void 0 : vb.pool[Ub - 1]
    }
    var jb = Ub(2981),
      Rb = Ub(4131),
      kb = Ub(4165),
      yb = Ub(39864);
    const Zb = "item:";
    let Db = null,
      zb = null,
      xb = null,
      ib = null,
      fb = !1,
      mb = !1,
      pb = null,
      Nb = 0;

    function Wb() {
      return mb || (mb = !0, (0, kb.f)().then((bb => {
        bb && (0, Eb.c)()
      }))), xb ??= Promise.all([(0, jb.f)(), (Lb ??= Ub.e(1).then((() => Ub(41705))).then((bb => {
        let {
          BLOCK_FACE_RUNS: ab,
          BLOCK_FACES: Ub,
          MAX_FACE_ITEM_ID: Ab
        } = bb;
        vb = {
          codes: (0, eb.E)(ab, Ab + 1),
          pool: Ub.split(eb.u).map(Pb)
        }
      }), (bb => {
        throw Lb = null, bb
      })), Lb), (0, yb.h)(), Ub.e(189).then((() => Ub(8922)))]).then((bb => {
        let [, , ab, Ub] = bb;
        ab.followBundledTextures(), Db = ab, zb = Ub, (0, Eb.c)()
      }), (bb => {
        xb = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), xb
    }

    function Hb(bb) {
      pb = bb, Nb++, (0, Eb.c)()
    }

    function Ib(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = pb) || void 0 === Ub ? void 0 : Ub.itemSprite(bb)) && void 0 !== ab ? ab : Db.itemSpriteUrl(bb)
    }

    function db(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = pb) || void 0 === Ub ? void 0 : Ub.blockTexture(bb)) && void 0 !== ab ? ab : Db.blockTextureUrl(bb)
    }

    function Fb(bb) {
      var ab;
      return null !== (ab = (0, jb.c)(bb)) && void 0 !== ab ? ab : bb
    }

    function hb(bb, ab) {
      var Ub, Ab, Mb;
      return null !== (Ub = null !== (Ab = null !== (Mb = db(bb)) && void 0 !== Mb ? Mb : null === ab || void 0 === ab ? void 0 : ab.rotated[bb]) && void 0 !== Ab ? Ab : null === ab || void 0 === ab ? void 0 : ab.animated[bb]) && void 0 !== Ub ? Ub : Db.notFoundUrl()
    }

    function Gb(bb) {
      return void 0 !== (0, Bb.d)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Bb.h)(Number(bb)) : void 0
    }

    function Qb(bb) {
      var ab;
      if (bb.startsWith(Zb)) {
        var Ub;
        const ab = (0, jb.c)(bb.slice(5));
        return null !== (Ub = void 0 === ab ? null : Ib(ab)) && void 0 !== Ub ? Ub : Db.notFoundUrl()
      }
      return null !== (ab = Db.particleUrl(bb)) && void 0 !== ab ? ab : Db.notFoundUrl()
    }

    function qb(bb, ab) {
      return "StairsBlock" === bb ? bb : ab ? "SlabBlock" : "CubeBlock"
    }
    const ub = {
        async blockIcon(bb) {
          var ab;
          let {
            name: Ab,
            size: Mb,
            lineWidth: Tb
          } = bb;
          await Wb();
          const Yb = null !== (ab = Gb(Ab)) && void 0 !== ab ? ab : Ab,
            eb = (0, kb.b)(Yb, Mb, Tb);
          if (null !== eb) return eb;
          const vb = Xb(Yb),
            Lb = (0, Bb.d)(Yb),
            Pb = void 0 === Lb || null === zb ? void 0 : zb.itemTypeNameOf(Lb);
          if (null === Db || void 0 === vb) return "";
          const jb = [vb.top, vb.left, vb.right].some((bb => null === db(bb))),
            yb = jb ? await (ib ??= Ub.e(201).then((() => Ub(33702))).then((bb => (fb && (fb = !1, (0, Eb.c)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (ib = null, fb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), ib) : null;
          if (jb && null === yb) return "";
          const Zb = {
              top: hb(vb.top, yb),
              left: hb(vb.left, yb),
              right: hb(vb.right, yb),
              itemType: qb(Pb, vb.half)
            },
            xb = 0 === Nb ? Yb : `${Yb}#${Nb}`;
          return (await (0, Rb.c)()).drawBlockIconUrl(xb, Mb, Tb, (() => Zb))
        }
      },
      rb = {
        itemIcon: function(bb) {
          var ab, Ub;
          if (null === Db) return Wb(), Yb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, Mb.k)(bb)) return {
            kind: "icon",
            url: null !== (Ub = Db.ingameIconUrl(bb)) && void 0 !== Ub ? Ub : Db.notFoundUrl()
          };
          if (bb.startsWith(Mb.d)) return {
            kind: "icon",
            url: Qb(bb.slice(Mb.d.length))
          };
          if (0 === (0, Bb.l)()) return (0, Tb.d)(), Yb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Eb = null !== (ab = Gb(bb)) && void 0 !== ab ? ab : bb,
            eb = (0, Bb.d)(Eb),
            vb = void 0 === eb ? void 0 : zb.itemTypeNameOf(eb);
          if (void 0 !== Xb(Eb)) return {
            kind: "drawnBlock"
          };
          const Lb = function(bb) {
            var ab;
            return null !== (ab = Ib(Fb(bb))) && void 0 !== ab ? ab : Db.notFoundUrl()
          }(Eb);
          if ((0, kb.c)(Eb) && ! function(bb) {
              return null !== pb && (null !== pb.itemSprite(Fb(bb)) || null !== pb.model(bb))
            }(Eb)) return {
            kind: "model",
            url: Lb
          };
          if ("Gun" === vb) return {
            kind: "gun",
            url: Lb
          };
          if (void 0 !== eb && "GrayscaleArmour" === zb.itemTypeOf(eb) || Object.hasOwn(Ab.b, Eb)) {
            var Pb;
            const ab = null !== (Pb = (0, Ab.c)(bb)) && void 0 !== Pb ? Pb : (0, Ab.c)(Eb);
            if (ab) return {
              kind: "item",
              url: Lb,
              tint: ab
            }
          }
          return {
            kind: "item",
            url: Lb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== Gb(bb) || (0, Mb.k)(bb) || bb.startsWith(Mb.d)
        },
        isItemName: function(bb) {
          return void 0 !== Gb(bb)
        }
      }
  },
  39798: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      attachPlayGameSources: () => wU,
      playGameSources: () => tU
    });
    var Ab = Ub(1824),
      Mb = Ub(39803),
      Tb = Ub(4469),
      Eb = Ub(39714),
      Yb = Ub(39812),
      Bb = Ub(38836),
      eb = Ub(22),
      vb = Ub(4485),
      Lb = Ub(4479),
      Pb = Ub(39751),
      Xb = Ub(39772),
      jb = Ub(39815),
      Rb = Ub(39762);
    (0, Rb.k)(vb.Tb.Chat, (bb => {
      if (bb.payloadKind !== Lb._b.Msgpack) return;
      const ab = function(bb) {
        if (null === bb || "object" !== typeof bb || !("content" in bb)) return null;
        const {
          chatMsgId: ab,
          content: Ub,
          chatterEId: Ab
        } = bb;
        return {
          serverChatMsgId: null !== ab && void 0 !== ab ? ab : void 0,
          content: Ub,
          chatterEId: void 0 === Ab || null === Ab ? void 0 : String(Ab)
        }
      }((0, Pb.c)(bb.payload));
      null !== ab && eb.m.IR("chat", ab, !0)
    }));
    const kb = {
        chatReceived: (0, Bb.j)((function(bb) {
          var ab, Ub, Ab;
          return {
            id: bb,
            name: null !== (ab = jb.e.getName(bb)) && void 0 !== ab ? ab : null,
            local: (0, Xb.d)() === bb,
            profileEffect: null !== (Ub = null === (Ab = (0, jb.i)(bb)) || void 0 === Ab ? void 0 : Ab.profileEffect) && void 0 !== Ub ? Ub : null
          }
        }))
      },
      yb = {
        sendChatMessage(bb) {
          var ab;
          let {
            fE: Ub,
            channelName: Ab
          } = bb;
          null === (ab = (0, Eb.i)()) || void 0 === ab || ab.clientApi.sendChat(Ub, Ab)
        }
      };
    var Zb = Ub(205),
      Db = Ub(1844),
      zb = Ub(39701),
      xb = Ub(38832);
    const ib = [0, 0, 0],
      fb = {
        codeBlockClickable(bb) {
          var ab;
          const Ub = (0, Eb.i)();
          if (null === Ub || void 0 === Ub || !Ub.isSessionLive) return !1;
          const Ab = Ub.api;
          if (0 !== (zb.t.playerFlags(Ab.apiView, 0) & zb.Ed.Crouching)) return !1;
          const Mb = Ab.queries.directorEntity(Ab.localId) >= zb.tb.BYTES ? Ab.memoryData(Ab.scratch(), zb.tb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Mb) return !1;
          for (let Tb = 0; Tb < 3; Tb++) ib[Tb] = zb.tb.feet(Mb, 0, Tb);
          return ib[1] += zb.tb.eyeHeight(Mb, 0), (0, xb.e)(ib, bb, null !== (ab = Db.e.get("blockReach")) && void 0 !== ab ? ab : Zb.c.Wy)
        }
      },
      mb = {
        clickCodeBlock(bb) {
          var ab;
          null === (ab = (0, Eb.i)()) || void 0 === ab || ab.clickCodeBlock(bb)
        }
      };
    var pb = Ub(39723),
      Nb = Ub(39822),
      Wb = Ub(950),
      Hb = Ub(38330),
      Ib = Ub(4462),
      db = Ub(39740),
      Fb = Ub(39716),
      hb = Ub(39742);

    function Gb(bb) {
      if (null === bb) return null;
      const ab = [];
      for (const Ub of bb) {
        const bb = Object.keys(Ub)[0];
        if ("tb" === bb) {
          const {
            str: bb,
            style: Ab,
            clickableUrl: Mb
          } = Ub.tb, Tb = Object.keys(bb)[0], Eb = bb[Tb];
          "string" !== Tb && "styledEntityName" !== Tb && "styledTranslatedText" !== Tb || ab.push({
            str: Eb,
            style: Ab,
            clickableUrl: Mb
          })
        } else ab.push(Ub[bb])
      }
      return ab
    }
    const Qb = {
      screenPos(bb) {
        var ab, Ub;
        return null !== (ab = null === (Ub = (0, Eb.i)()) || void 0 === Ub ? void 0 : Ub.renderFrame.projectWorldPosToScreenPos(bb)) && void 0 !== ab ? ab : {
          x: 0,
          y: 0
        }
      }
    };
    let qb = !1;

    function ub() {
      qb || (qb = !0, (0, Rb.k)(vb.Tb.ProgressBarUpdate, (bb => {
        const ab = (0, hb.i)(bb);
        (0, hb.e)(ab) && eb.m.IR("progressBarUpdate", ab, !0)
      })), (0, Rb.k)(db.r, (bb => {
        const ab = (0, hb.f)(db.r, bb);
        ab && eb.m.IR("middleScreenBarInitiate", {
          duration: ab.eA,
          vA: ab.vA,
          horizBarRemOffset: ab.LA
        }, !0)
      })), (0, Rb.k)(vb.Tb.RemoveMiddleScreenBar, (() => {
        eb.m.IR("middleScreenBarRemove")
      })), (0, Rb.k)(db.W, (bb => {
        const ab = (0, hb.f)(db.W, bb);
        if (ab) {
          var Ub;
          const bb = ab.eU ? null === (Ub = (0, Eb.i)()) || void 0 === Ub ? void 0 : Ub.renderFrame.projectDirectionToScreenPos(ab.eU) : void 0;
          eb.m.IR("sendHitmarker", {
            BU: ab.BU,
            screenPos: bb
          }, !0)
        }
      })), (0, Rb.k)(db.Y, (bb => {
        const ab = (0, hb.f)(db.Y, bb);
        if (ab) {
          const {
            id: bb,
            position: Ub,
            style: Ab,
            cM: Mb,
            nM: Tb
          } = ab;
          eb.m.IR("setDirectionArrow", {
            id: bb,
            position: Ub,
            style: Ab,
            text: Gb(Mb),
            nM: Tb
          }, !0)
        }
      })), (0, Rb.k)(db.e, (bb => {
        const ab = (0, hb.f)(db.e, bb);
        ab && eb.m.IR("clearDirectionArrow", {
          id: ab.id
        }, !0)
      })), (0, Rb.k)(db.k, (bb => {
        const ab = (0, hb.f)(db.k, bb);
        ab && eb.m.IR("flyingMiddleMessage", {
          content: Gb(ab.pT),
          NT: ab.NT,
          WT: ab.WT
        }, !0)
      })), (0, Rb.k)(vb.Tb.WorldVariation, (bb => {
        const ab = (0, hb.i)(bb);
        if ("string" === typeof ab) {
          const bb = ab === Wb.h ? null : {
            message: `Currently loaded as variation: ${ab}`,
            type: "Warning"
          };
          eb.m.IR("showPermanentBottomMessage", bb, !0)
        }
      })), (0, Rb.k)(db.G, (bb => {
        const ab = (0, hb.f)(db.G, bb);
        ab && function(bb, ab) {
          const {
            type: Ub,
            params: Ab
          } = (0, Hb.i)(ab), Mb = {
            ...Ab
          };
          for (const Tb of Hb.e) Mb[Tb] && (Mb[Tb] = Gb(Mb[Tb]));
          Ib.e.queueQTE(bb, Ub, Mb).getResult().then((ab => {
            var Ub;
            "boolean" === typeof ab && (null === (Ub = (0, Eb.i)()) || void 0 === Ub || Ub.send(Fb.c.QteResponse, {
              qteId: bb,
              qteResponse: ab
            }))
          }))
        }(ab.id, ab.Ib)
      })), (0, Rb.k)(db.R, (bb => {
        const ab = (0, hb.f)(db.R, bb);
        "number" === typeof ab && Ib.e.cancelQTE(ab)
      })), (0, Rb.d)((() => {
        Ib.e.reset(), eb.m.IR("showPermanentBottomMessage", null, !0)
      })), (0, Rb.g)((() => {
        Ib.e.reset()
      })), (0, Rb.k)(vb.Tb.EditItemCraftingRecipes, (bb => {
        const ab = (0, hb.i)(bb);
        (0, hb.e)(ab) && eb.m.IR("craftingRecipesEdited", {
          itemName: ab.craftingRecipeItemName,
          recipesForItem: ab.recipesForItem
        })
      })), (0, Rb.k)(db.Q, (bb => {
        const ab = (0, hb.f)(db.Q, bb);
        ab && eb.m.IR("craftingRecipesEdited", {
          itemName: ab.fM,
          recipesForItem: []
        })
      })))
    }
    var rb = Ub(19);
    const Kb = [{
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

    function ob(bb) {
      return zb.t.playerFlags(bb.api.apiView, 0)
    }
    const lb = {
        freeCamera: (0, Xb.b)((bb => () => {
          const ab = bb.isSessionLive && 0 !== (ob(bb) & zb.Ed.FreeCamMoves),
            Ub = bb.freeCameraAllowed() && null === rb.c.get("scriptedCameraFacing");
          return Kb[(Ub ? 2 : 0) + (ab ? 1 : 0)]
        }), Kb[0], (bb => (0, Tb.v)(bb)))
      },
      tb = {
        setFreeCameraMovesFly: bb => {
          var ab;
          null === (ab = (0, Eb.i)()) || void 0 === ab || ab.setFreeCameraMovesFly(bb)
        }
      },
      wb = {
        freeCameraPos: () => {
          const bb = (0, Eb.i)();
          return null !== bb && void 0 !== bb && bb.isSessionLive && bb.renderFrame.hasView && 0 !== (ob(bb) & zb.Ed.FreeCam) ? bb.renderFrame.cameraPosition : null
        }
      };
    var sb = Ub(38463);
    let gb = !1,
      Cb = !1;

    function Vb() {
      const bb = (0, Eb.i)();
      if (null === bb || void 0 === bb || !bb.isSessionLive) return void(gb = !1);
      const ab = 0 !== (zb.t.playerFlags(bb.api.apiView, 0) & zb.Ed.FreeCam);
      ab !== gb && (gb = ab, (0, sb.c)(ab))
    }
    var Ob = Ub(325),
      cb = Ub(36359),
      Jb = Ub(1852);
    var nb = Ub(39825),
      Sb = Ub(39769);
    const ba = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let aa = "off";

    function Ua(bb) {
      var ab;
      return null === bb ? null : {
        label: null !== (ab = (0, nb.e)(bb, "interactionPrompt")) && void 0 !== ab ? ab : null
      }
    }
    const Aa = new Map([
      [zb.pc.Open, {
        label: Bb.f.open
      }],
      [zb.pc.Close, {
        label: Bb.f.close
      }],
      [zb.pc.Milk, {
        label: Bb.f.milk
      }],
      [zb.pc.Shear, {
        label: Bb.f.shear
      }],
      [zb.pc.Tame, {
        label: Bb.f.tame
      }],
      [zb.pc.Feed, {
        label: Bb.f.feed
      }],
      [zb.pc.Ride, {
        label: Bb.f.ride
      }]
    ]);
    class Ma {
      constructor() {
        this.target = ba, this.Av = zb.Wc, this.optionName = null, this.pickaxe = new Bb.d
      }
      read(bb) {
        var ab;
        const Ub = zb.t.targetBlockId(bb.api.apiView, 0);
        Ub !== this.Av && (this.Av = Ub, this.optionName = Ub === zb.Wc ? null : `${bb.tables.getMetaInfo(Ub).rootName}CrosshairText`);
        const Ab = null === this.optionName ? null : null !== (ab = bb.tables.getClientOption(this.optionName)) && void 0 !== ab ? ab : null;
        this.pickaxe.update(function(bb, ab) {
          var Ub, Ab, Mb;
          if (0 === (zb.t.playerFlags(bb.api.apiView, 0) & zb.Ed.Breaking) || ab === zb.Wc || 0 === ab) return null;
          const {
            tables: Tb
          } = bb;
          if (!0 === Tb.getClientOption("creative")) return null;
          const Eb = Tb.nameOfId(ab),
            Yb = null === (Ub = bb.items.PY()) || void 0 === Ub ? void 0 : Ub.name,
            Bb = null !== (Ab = Tb.getItemStat(Eb, "harvestLevel")) && void 0 !== Ab ? Ab : 0;
          return (0, Ob.nc)({
            blockHarvestType: Tb.getDefaultItemStat(Eb, "harvestType"),
            blockHarvestLevel: Tb.getDefaultItemStat(Eb, "harvestLevel"),
            harvestLevel: Bb,
            heldToolType: void 0 === Yb ? void 0 : Tb.getDefaultItemStat(Yb, "harvests"),
            heldToolLevel: void 0 === Yb ? void 0 : Tb.getDefaultItemStat(Yb, "level")
          }) && null !== (Mb = cb.i[Bb]) && void 0 !== Mb ? Mb : null
        }(bb, Ub)), bb.watchPromptPick(aa);
        const Mb = "touch" === aa ? function(bb) {
          var ab;
          const Ub = bb.interactLabel;
          return Ub === zb.pc.Entity ? Ua(bb.promptEntity) : Ub === zb.pc.TameWith ? {
            label: (0, Bb.s)(bb.tables.nameOfId(bb.interactIcon))
          } : null !== (ab = Aa.get(Ub)) && void 0 !== ab ? ab : null
        }(bb) : Ua(bb.promptEntity);
        return this.target = (0, Jb.q)(this.target, {
          interactPrompt: Mb,
          blockText: Ab,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Ta = null;
    const Ea = {
      current: () => {
        var bb, ab;
        return null !== (bb = null === (ab = Ta) || void 0 === ab ? void 0 : ab.target) && void 0 !== bb ? bb : ba
      },
      watch: bb => {
        const ab = new Ma;
        Ta = ab;
        const Ub = (0, Xb.e)((Ub => {
          let Ab = ab.read(Ub);
          bb(Ab);
          const Mb = (0, Tb.x)((() => {
            const Mb = ab.read(Ub);
            Mb !== Ab && (Ab = Mb, bb(Mb))
          }));
          return () => {
            Mb(), Ub.watchPromptPick("off")
          }
        }));
        return () => {
          Ub(), Ta === ab && (Ta = null)
        }
      }
    };
    let Ya = 0,
      Ba = 0;
    const ea = {
        health: Bb.p,
        aura: Bb.g,
        hotbar: Sb.c.states.hotbar,
        heldItemAim: Sb.c.states.heldItemAim,
        crouching: (0, Xb.b)((bb => function(bb) {
          const ab = () => 0 !== (zb.t.playerFlags(bb.apiView, 0) & zb.Ed.Crouching);
          return {
            current: ab,
            watch(bb) {
              let Ub = ab();
              return (0, Tb.v)((() => {
                const Ab = ab();
                Ab !== Ub && (Ub = Ab, bb(Ab))
              }))
            }
          }
        }(bb.api).current), !1, (bb => (0, Tb.v)(bb))),
        flight: (0, Xb.b)((bb => () => function(bb) {
          const ab = zb.t.playerFlags(bb.apiView, 0);
          return (0, Bb.m)(0 !== (ab & zb.Ed.CanFly), 0 !== (ab & zb.Ed.Flying))
        }(bb.api)), (0, Bb.m)(!1, !1), (bb => (0, Tb.v)(bb))),
        gliderBoostFuel: (0, Xb.b)((bb => () => zb.t.gliderBoostFuel(bb.api.apiView, 0)), 0, (bb => (0, Tb.v)(bb))),
        crosshairTarget: Ea
      },
      va = {
        hotbarSlotRequested: Sb.c.events.hotbarSlotRequested,
        hotbarScrolled: Sb.c.events.hotbarScrolled,
        numberKeyPressed: Sb.c.events.numberKeyPressed,
        shotDamageToShow: (0, Bb.r)((bb => !0 === (0, nb.e)(bb, "showDamageAmounts")))
      },
      La = {
        selectHotbarSlot: Sb.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: bb => {
          aa = bb
        }
      },
      Pa = {
        momentumFrac: function() {
          var bb, ab, Ub;
          const Ab = (0, Eb.i)(),
            Mb = performance.now(),
            Tb = null === Ab || void 0 === Ab || null === (bb = Ab.items.PY()) || void 0 === bb || null === (ab = bb.attributes) || void 0 === ab || null === (Ub = ab.customAttributes) || void 0 === Ub ? void 0 : Ub.enchantments;
          return Ya = null !== Ab && null !== Tb && void 0 !== Tb && Tb.Momentum ? 0 !== (zb.t.playerFlags(Ab.api.apiView, 0) & zb.Ed.Breaking) ? Math.max(0, zb.t.momentumFrac(Ab.api.apiView, 0)) : Math.max(0, Ya - (Mb - Ba) / 1500) : 0, Ba = Mb, Ya
        }
      };
    var Xa = Ub(39705),
      ja = Ub(1189),
      Ra = Ub(35935),
      ka = Ub(8356),
      ya = Ub(1548),
      Za = Ub(2254),
      Da = Ub(4487);
    let za = !1;

    function xa(bb) {
      za = bb
    }

    function ia() {
      "inGame" !== rb.c.get("gameState") || (0, ya.p)() || eb.m.IR("ctrlCrouchWithoutFullscreen")
    }
    let fa = !1;
    const ma = {
        OpenEmoteWheel: () => {
          xa(!0), fa = !0, queueMicrotask((() => {
            fa && (fa = !1, eb.m.IR("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          eb.m.IR("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Ra.e)() || eb.m.IR("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Ra.e)() || eb.m.IR("XKeyPressed")
        },
        CtrlCrouch: ia,
        "primary-fire": () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      pa = {
        OpenEmoteWheel: () => {
          xa(!1), fa ? (fa = !1, (0, ka.d)() || eb.m.IR("requestEmoteWheelHoldOpen")) : eb.m.IR("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: ia,
        "primary-fire": () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          eb.m.IR("mouseState", {
            Lv: ja.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Na = !1;

    function Wa() {
      Na || (Na = !0, (0, Da.l)((bb => {
        if ((0, Mb.c)()) return;
        const ab = (0, Da.h)(bb) ? "primary-fire" : bb.action;
        var Ub;
        if (bb.down) {
          if (0 === (bb.flags & Za.b.Synthetic)) {
            var Ab;
            null === (Ab = ma[ab]) || void 0 === Ab || Ab.call(ma)
          }
        } else null === (Ub = pa[ab]) || void 0 === Ub || Ub.call(pa)
      })))
    }
    var Ha = Ub(307),
      Ia = Ub(101),
      da = Ub(31),
      Fa = Ub(39834),
      ha = Ub(1242),
      Ga = Ub(38298);
    let Qa = !1;
    const qa = {
      sendCodeCollab(bb) {
        var ab;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.CodeCollab, (0, Fb.q)(bb), (0, Ga.h)(bb))
      }
    };
    let ua = null,
      ra = !1,
      Ka = null;

    function oa() {
      return "inGame" === rb.c.get("gameState") && !(0, Ra.e)()
    }
    const la = {
        OpenInventory: bb => {
          (0, ya.u)(bb, "inventory", (0, Xa.m)())
        },
        OpenShop: bb => {
          ua && oa() && (0, ya.q)(bb, Ha.j.SHOP, !ua.shopIsEmpty(Db.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: bb => {
          oa() && (0, ya.q)(bb, Ha.j.LOBBY_LEADERBOARD, !!Db.e.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: bb => {
          var ab;
          const Ub = null === (ab = ua) || void 0 === ab ? void 0 : ab.getClientGameMapKey();
          Ub ? (0, ya.v)(bb, !0, Ub) : (0, ya.u)(bb, "retentionFeatures", !(!Db.e.get("_tasks") && !Db.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: bb => {
          (0, ya.u)(bb, "inviteLink", Ia.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: bb => {
          oa() && function(bb) {
            var ab;
            const Ub = (0, Eb.i)(),
              Ab = null !== Ub && void 0 !== Ub && Ub.isSessionLive ? Ub.api : null,
              Mb = Ab ? Ab.eZ(Ab.localId) : null,
              Tb = null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.map((bb => Math.floor(bb)))) && void 0 !== ab ? ab : null;
            (0, ya.v)(bb, null !== Tb && (0, Ga.d)((0, ha.e)()), (() => {
              eb.m.IR("EditLobbyCode", Tb)
            }))
          }(bb)
        },
        HideUi: () => {
          eb.m.IR("showUi", !1)
        }
      },
      ta = {
        HideUi: () => {
          eb.m.IR("showUi", !0)
        }
      };

    function wa() {
      ra || (ra = !0, Ub.e(151).then((() => Ub(41693))).then((bb => {
        ua = bb
      }), (bb => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", bb)
      })), (0, Fa.A)((bb => {
        bb || !(0, Fa.k)() || (0, Ia.isMobile)() || !da.f.getItem("disableFullscreen") || (0, ya.o)() || rb.c.set({
          openEverythingMenuName: Ha.j.SETTINGS
        })
      })), (0, Da.l)((bb => {
        let {
          action: ab,
          down: Ub,
          press: Ab
        } = bb;
        var Tb, Eb;
        (0, Mb.c)() || (Ub ? null === (Tb = la[ab]) || void 0 === Tb || Tb.call(la, function(bb) {
          var ab;
          if (0 === bb || (null === (ab = Ka) || void 0 === ab ? void 0 : ab.press) !== bb) {
            const ab = {
              press: bb,
              event: new Event("inputAction")
            };
            Ka = ab, queueMicrotask((() => {
              Ka === ab && (Ka = null)
            }))
          }
          return Ka.event
        }(Ab)) : null === (Eb = ta[ab]) || void 0 === Eb || Eb.call(ta))
      })))
    }
    var sa = Ub(38268),
      ga = Ub(38287),
      Ca = Ub(38274);
    const Va = {
      completeTask(bb) {
        var ab;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.CompleteTask, (0, Fb.s)(bb))
      },
      setServerCookie(bb) {
        var ab;
        let {
          key: Ub,
          value: Ab
        } = bb;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.GeneralCookieSet, (0, Fb.v)({
          ST: Ub,
          bE: Ab
        }))
      },
      answerUiRequest(bb) {
        var ab;
        let {
          id: Ub,
          ME: Ab
        } = bb;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.UiRequestResp, (0, Fb.R)({
          jY: Ub,
          RY: Ab,
          kY: 5
        }))
      },
      chooseRewardedAd(bb) {
        var ab;
        let {
          id: Ub,
          ME: Ab
        } = bb;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.UiRequestResponded, (0, Fb.Q)({
          id: Ub,
          ME: Ab
        }))
      },
      requestLeaderboard(bb) {
        var ab;
        let {
          category: Ub,
          timeframe: Ab,
          seeTop: Mb
        } = bb;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.LeaderboardRequest, {
          category: Ub,
          timeframe: Ab,
          seeTop: Mb
        })
      }
    };
    let Oa = !1;
    const ca = Zb.c.vy / 2,
      Ja = [ca, -ca, -ca, -ca, ca, ca, -ca, ca],
      na = [0, 0, 0];

    function Sa(bb, ab, Ub) {
      for (let Ab = 0; Ab < bb.length; Ab += 2)
        if (bb[Ab] === ab && bb[Ab + 1] === Ub) return !0;
      return !1
    }
    const bU = {
      blocksStandingOn: function() {
        const bb = (0, Eb.i)();
        if (null === bb) return [];
        const {
          api: ab,
          chunks: Ub,
          tables: Ab
        } = bb;
        if (!ab.readPosition(ab.localId, na)) return [];
        const [Mb, Tb, Yb] = na, Bb = Math.ceil(Tb) - 1, eb = [], vb = [];
        for (let Eb = 0; Eb < Ja.length; Eb += 2) {
          const bb = Mb + Ja[Eb],
            ab = Yb + Ja[Eb + 1];
          if (Number.isInteger(bb) || Number.isInteger(ab)) continue;
          const Tb = Math.floor(bb),
            Lb = Math.floor(ab);
          if (Sa(vb, Tb, Lb)) continue;
          const Pb = Ub.Av(Tb, Bb, Lb);
          Ab.isSolidBlockId(Pb) && (vb.push(Tb, Lb), eb.push(Ab.nameOfId(Pb)))
        }
        return eb
      },
      dropAhead: function() {
        const bb = (0, Eb.i)();
        return null !== bb && 0 !== (zb.t.playerFlags(bb.api.apiView, 0) & zb.Ed.DropAhead)
      }
    };
    var aU = Ub(36277),
      UU = Ub(38370),
      AU = Ub(1260),
      MU = Ub(39778);
    const TU = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      EU = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function YU() {
      const bb = new Set;
      return {
        add: ab => (bb.add(ab), () => {
          bb.delete(ab)
        }),
        fire() {
          for (const ab of bb) ab()
        }
      }
    }
    const BU = Object.freeze([]);

    function eU(bb, ab) {
      let Ub, {
        rereads: Ab,
        followLocalId: Mb
      } = ab;
      const Eb = () => (Ub = (0, Jb.q)(Ub, bb()), Ub);
      return {
        current: Eb,
        watch(bb) {
          const ab = (0, jb.d)((ab => {
            Ab(ab) && bb(Eb())
          }));
          if (!Mb) return ab;
          let Ub = (0, Xb.d)();
          const Yb = (0, Tb.x)((() => {
            const ab = (0, Xb.d)();
            ab !== Ub && (Ub = ab, bb(Eb()))
          }));
          return () => {
            ab(), Yb()
          }
        }
      }
    }
    const vU = {
        players: eU((function() {
          const bb = jb.e.ids(),
            ab = {};
          for (const Tb of bb) {
            var Ub, Ab, Mb;
            ab[Tb] = {
              name: null !== (Ub = jb.e.getName(Tb)) && void 0 !== Ub ? Ub : null,
              ranks: null !== (Ab = jb.e.getSetting(Tb, "ranks")) && void 0 !== Ab ? Ab : BU,
              cosmetics: null !== (Mb = (0, jb.i)(Tb)) && void 0 !== Mb ? Mb : null
            }
          }
          return {
            ids: bb,
            byId: ab,
            localId: (0, Xb.d)()
          }
        }), {
          rereads: bb => "roster" !== bb.kind || bb.members || bb.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: eU((function() {
          const bb = {};
          for (const Mb of jb.e.ids()) {
            var ab, Ub, Ab;
            bb[Mb] = {
              colour: null !== (ab = jb.e.getSetting(Mb, "colorInLobbyLeaderboard")) && void 0 !== ab ? ab : null,
              values: null !== (Ub = jb.e.getSetting(Mb, "lobbyLeaderboardValues")) && void 0 !== Ub ? Ub : null,
              tags: null !== (Ab = jb.e.getSetting(Mb, "lobbyLeaderboardTags")) && void 0 !== Ab ? Ab : null
            }
          }
          return bb
        }), {
          rereads: function(bb) {
            if ("roster" !== bb.kind) return "reset" === bb.kind;
            const {
              members: ab,
              settings: Ub
            } = bb;
            return ab || Ub.has("colorInLobbyLeaderboard") || Ub.has("lobbyLeaderboardValues") || Ub.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      LU = {
        cosmeticsUpdated: {
          watch: bb => (0, jb.d)((ab => {
            if ("cosmetics" !== ab.kind) return;
            const Ub = (0, Xb.d)();
            bb(ab.updates.map((bb => {
              let {
                gU: ab,
                CU: Ab,
                VU: Mb
              } = bb;
              return {
                local: ab === Ub,
                CU: Ab,
                VU: Mb
              }
            })))
          }))
        }
      };
    var PU = Ub(2636),
      XU = Ub(1639),
      jU = Ub(622),
      RU = Ub(39839);
    let kU = !1,
      yU = null;
    const ZU = {
      setShopOpen(bb) {
        var ab;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.ShopMenuChanged, (0, Fb.N)(bb))
      },
      buyShopItem(bb) {
        var ab;
        let {
          categoryKey: Ub,
          itemKey: Ab,
          userInput: Mb
        } = bb;
        null === (ab = (0, Eb.i)()) || void 0 === ab || ab.send(Fb.c.ItemBought, {
          categoryKey: Ub,
          itemKey: Ab,
          shopVersion: Db.e.get("_shopVersion"),
          userInput: Mb
        })
      }
    };
    let DU = !1;
    var zU = Ub(4501);
    const xU = Za.v.LookFrozen | Za.v.ClicksSuppressed;

    function iU(bb, ab) {
      var Ub;
      null !== (Ub = (0, Eb.i)()) && void 0 !== Ub && Ub.send(bb, ab) || console.warn(`[bloxd-wasm-client] message ${bb} not sent: no live game or the core's command ring is full`)
    }(0, Rb.k)(db.ab, (bb => {
      const ab = (0, hb.f)(db.ab, bb);
      void 0 !== ab && eb.m.IR("setDiscordReportKey", ab)
    }));
    const fU = {
      ignorePlayer(bb) {
        iU(Fb.c.IgnoreUser, (0, Fb.y)({
          pE: bb
        }))
      },
      reportPlayer(bb) {
        let {
          playerId: ab,
          chatMsgId: Ub,
          OT: Ab,
          details: Mb
        } = bb;
        iU(Fb.c.UserReport, (0, Fb.$)({
          Fv: ab,
          hv: Ub,
          OT: Ab,
          cT: Mb
        }))
      },
      reportWorldCodeChat(bb) {
        let {
          chatMsgId: ab,
          OT: Ub,
          details: Ab
        } = bb;
        iU(Fb.c.UserReport, (0, Fb.$)({
          Fv: "",
          hv: ab,
          OT: Ub,
          cT: Ab
        }))
      },
      requestDiscordReportKey(bb) {
        iU(Fb.c.ReqDiscordReportKey, (0, Fb.H)(bb))
      },
      reportLobbyOrGame(bb) {
        let {
          target: ab,
          OT: Ub,
          details: Ab
        } = bb;
        "customGame" === ab ? iU(Fb.c.CustomGameReport, (0, Fb.t)({
          OT: Ub,
          cT: Ab
        })) : iU(Fb.c.LobbyReport, (0, Fb.C)({
          OT: Ub,
          cT: Ab
        }))
      },
      updateMyCosmetic(bb) {
        iU(Fb.c.UpdateMyCosmetic, (0, Fb.Z)(bb))
      },
      holdEmoteWheel(bb) {
        !bb || za ? (0, zU.l)(xU, bb ? xU : 0) : eb.m.IR("requestEmoteWheelHoldRelease")
      }
    };
    var mU = Ub(39841),
      pU = Ub(9007),
      NU = Ub(38847);
    const WU = [0, 0, 0],
      HU = [0, 0, 0],
      IU = [0, 0, 0],
      dU = {
        blockAtViewPoint(bb) {
          let {
            x: ab,
            y: Ub
          } = bb;
          const Ab = (0, Eb.i)();
          if (null === Ab || void 0 === Ab || !Ab.renderFrame.hasView) return null;
          const {
            renderFrame: Mb,
            clientApi: Tb,
            api: Yb
          } = Ab;
          let Bb = 0;
          return (0, NU.e)(((bb, ab, Ub) => (Bb = Tb.getBlockId(bb, ab, Ub), 0 !== Bb)), Mb.cameraPosition, (0, NU.i)((bb => zb.t.viewProj(Yb.apiView, 0, bb)), ab, Ub, WU), NU.d, HU, IU) ? {
            pos: [HU[0], HU[1], HU[2]],
            normal: [IU[0], IU[1], IU[2]],
            name: (0, pU.e)(Bb)
          } : null
        }
      },
      FU = {
        setBlockHighlight(bb) {
          var ab;
          null === (ab = (0, Eb.i)()) || void 0 === ab || ab.setBlockHighlight(bb)
        }
      };
    var hU = Ub(1838),
      GU = Ub(39848),
      QU = Ub(39852),
      qU = Ub(39857);
    var uU = Ub(580),
      rU = Ub(38850);

    function KU(bb) {
      if (null === bb || void 0 === bb || !bb.isCoreRunning) return null;
      const {
        api: ab,
        chunks: Ub,
        items: Ab,
        tables: Mb
      } = bb;
      return {
        playerFeet() {
          const bb = ab.eZ(ab.localId);
          return null !== bb && void 0 !== bb && bb.every(Number.isFinite) ? bb : null
        },
        chunkBlocks: bb => Ub.isLoaded(bb[0], bb[1], bb[2]) ? (bb, ab, Ab) => Ub.Av(bb, ab, Ab) : null,
        blockName: bb => Mb.nameOfId(bb),
        inventory: () => ({
          slots: Ab.playerItems().map((bb => bb ? {
            name: bb.name,
            amount: bb.amount
          } : null)),
          heldSlot: Ab.selectedSlot
        }),
        nearby() {
          const Ub = [];
          for (let Mb = 0; Mb < ab.idStr.length; Mb++) {
            var Ab;
            const Tb = ab.idStr[Mb],
              Eb = ab.serverIds[Mb],
              Yb = ab.kinds[Mb];
            if (null === Tb || ab.isLocal(Eb) || Yb >>> zb.e !== zb.r.Lifeform) continue;
            const Bb = ab.eZ(Eb),
              eb = uU.n[Yb & zb.h];
            Bb && void 0 !== eb && Ub.push({
              kind: "Player" === eb ? "player" : eb,
              name: null !== (Ab = bb.clientApi.getEntityName(Tb)) && void 0 !== Ab ? Ab : null,
              position: Bb
            })
          }
          return Ub
        },
        droppedItems() {
          let bb = 0;
          for (let Ub = 0; Ub < ab.idStr.length; Ub++) null !== ab.idStr[Ub] && ab.kinds[Ub] >>> zb.e === zb.r.Item && bb++;
          return bb
        }
      }
    }
    const oU = {
        worldCodeAiChunk: bb => Promise.resolve((0, rU.c)(KU((0, Eb.i)()), bb)),
        worldCodeAiGameState: () => Promise.resolve((0, rU.e)(KU((0, Eb.i)())))
      },
      lU = function(bb) {
        const ab = YU(),
          Ab = YU(),
          Mb = new Set,
          Tb = new Set,
          Eb = () => {
            var ab, Ub;
            return null !== (ab = null === (Ub = bb.runtime()) || void 0 === Ub ? void 0 : Ub.currentViewer) && void 0 !== ab ? ab : null
          };
        let Yb = null,
          Bb = null;
        const vb = (bb, ab) => ({
            current: bb,
            watch(Ub) {
              let Ab = bb();
              return ab.add((() => {
                const ab = bb();
                ab !== Ab && (Ab = ab, Ub(ab))
              }))
            }
          }),
          Pb = bb => ({
            watch: ab => (bb.add(ab), () => {
              bb.delete(ab)
            })
          }),
          Xb = bb => {
            const ab = Eb(),
              Ub = null === ab || void 0 === ab ? void 0 : ab.view;
            ab && Ub && ab.seek(Math.max(0, Math.min(Ub.totalTicks - 1, Ub.qL + bb * Lb.id)))
          },
          jb = {
            replay: vb((() => {
              var bb;
              const ab = Eb(),
                Ub = null !== (bb = null === ab || void 0 === ab ? void 0 : ab.view) && void 0 !== bb ? bb : null;
              return null === ab || null === Ub || Ub.state === Lb.$c.None ? (Yb = null, null) : (Yb = (0, Jb.q)(Yb, {
                id: ab.id,
                qL: Ub.qL,
                totalTicks: Ub.totalTicks,
                hN: Lb.id,
                playing: Ub.state === Lb.$c.Playing,
                speed: Ub.speed,
                cameraMode: Ub.cameraMode,
                freecam: "freecam" === Ub.cameraMode
              }), Yb)
            }), ab),
            replayEdits: vb((() => {
              var bb;
              const ab = Eb(),
                Ub = null !== (bb = null === ab || void 0 === ab ? void 0 : ab.view) && void 0 !== bb ? bb : null;
              return null === ab || null === Ub || Ub.state === Lb.$c.None ? (Bb = null, null) : (Bb = (0, Jb.q)(Bb, {
                cameraKeyframes: [...ab.keyframes],
                playbackMark: Ub.mark,
                fileName: ab.fileName,
                unsavedChanges: ab.unsavedChanges,
                suggestSaveAs: ab.suggestSaveAs
              }), Bb)
            }), ab),
            replayRecorder: vb((() => {
              var ab, Ub;
              return null !== (ab = null === (Ub = bb.runtime()) || void 0 === Ub ? void 0 : Ub.recorder.current) && void 0 !== ab ? ab : MU.d.states.replayRecorder.current()
            }), Ab),
            replayVideoExporting: {
              current: UU.c,
              watch: bb => (0, eb.n)("replayViewer|videoExportChanged", (() => {
                bb((0, UU.c)())
              }))
            }
          },
          Rb = {
            replayUiActionRequested: Pb(Tb),
            replayViewerRequested: Pb(Mb)
          },
          kb = bb => {
            for (const ab of Mb) ab(bb)
          },
          yb = () => {
            var Ab;
            !0 === (null === (Ab = Eb()) || void 0 === Ab ? void 0 : Ab.isOpen) && Promise.all([Ub.e(94), Ub.e(63)]).then((() => Ub(41698))).then((Ub => {
              let {
                startWasmReplayVideoExport: Ab
              } = Ub;
              return Ab({
                viewer: Eb,
                canvas: () => {
                  var ab, Ub;
                  return null !== (ab = null === (Ub = bb.canvas) || void 0 === Ub ? void 0 : Ub.call(bb)) && void 0 !== ab ? ab : null
                },
                watchViewer: ab.add,
                requestViewer: kb
              })
            }), (bb => {
              console.error("Couldn't load the video export", bb), AU.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((bb => {
              console.error("The video export failed", bb)
            }))
          },
          Zb = {
            replayAction(bb) {
              if ((0, UU.c)()) return;
              const ab = Eb();
              switch (bb) {
                case "replaySkipBack":
                  Xb(-1);
                  break;
                case "replaySkipForward":
                  Xb(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== ab && void 0 !== ab && ab.view && ab.setSpeed((0, aU.g)(ab.view.speed, "replaySpeedUp" === bb ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === ab || void 0 === ab || ab.addKeyframe()
              }
            },
            setReplayPlaying(bb) {
              var ab, Ub;
              (0, UU.c)() || (bb ? null === (ab = Eb()) || void 0 === ab || ab.play() : null === (Ub = Eb()) || void 0 === Ub || Ub.pause())
            },
            seekReplay(bb) {
              var ab;
              let {
                qL: Ub,
                ignorePlaybackMark: Ab
              } = bb;
              null === (ab = Eb()) || void 0 === ab || ab.seek(Ub, null !== Ab && void 0 !== Ab && Ab)
            },
            setReplayCameraMode(bb) {
              var ab;
              null === (ab = Eb()) || void 0 === ab || ab.setCameraMode(bb)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(bb) {
              var ab;
              null === (ab = Eb()) || void 0 === ab || ab.setKeyframe(bb)
            },
            moveReplayCameraKeyframe(bb) {
              var ab;
              let {
                from: Ub,
                to: Ab
              } = bb;
              null === (ab = Eb()) || void 0 === ab || ab.moveKeyframe(Ub, Ab)
            },
            deleteReplayCameraKeyframes(bb) {
              var ab;
              let {
                start: Ub,
                end: Ab
              } = bb;
              null === (ab = Eb()) || void 0 === ab || ab.deleteKeyframes(Ub, Ab)
            },
            setReplayPlaybackMark(bb) {
              var ab;
              null === (ab = Eb()) || void 0 === ab || ab.setMark(bb)
            },
            cropReplay(bb) {
              var ab, Ub;
              let {
                start: Ab,
                end: Mb
              } = bb;
              return !(0, UU.c)() && (null !== (ab = null === (Ub = Eb()) || void 0 === Ub ? void 0 : Ub.crop(Ab, Mb)) && void 0 !== ab && ab)
            },
            holdReplayForShaderPackFailure(bb) {
              const ab = Eb();
              ab && (ab.holdForShaderPackFailure(), function(bb) {
                Ub.e(129).then((() => Ub(38489))).then((ab => {
                  let {
                    shaderPackPage: Ub
                  } = ab;
                  Ub.block(bb)
                })).catch((bb => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", bb)
                }))
              }(bb))
            },
            exportReplayVideo() {
              yb()
            },
            toggleRecording() {
              var ab;
              null === (ab = bb.runtime()) || void 0 === ab || ab.recorder.toggleRecording()
            },
            saveClip() {
              var ab;
              null === (ab = bb.runtime()) || void 0 === ab || ab.recorder.saveClip()
            },
            setRecorderPrefs(ab) {
              var Ub;
              let {
                clipping: Ab,
                clipSeconds: Mb
              } = ab;
              null === (Ub = bb.runtime()) || void 0 === Ub || Ub.recorder.setPrefs(Ab, Mb)
            },
            setReplayViewerOpen(ab) {
              var Ub;
              (0, Ra.i)(ab) && (null === (Ub = bb.runtime()) || void 0 === Ub || Ub.recorder.viewerShown(ab))
            },
            recordFlyingMiddleText(ab) {
              var Ub;
              let {
                content: Ab,
                NT: Mb,
                angle: Tb,
                WT: Eb
              } = ab;
              null === (Ub = bb.runtime()) || void 0 === Ub || Ub.recorder.recordFlyingText(JSON.stringify(Ab), Mb, Tb, Eb)
            },
            dragReplayCamera(ab) {
              var Ub;
              let {
                dx: Ab,
                dy: Mb
              } = ab;
              null === (Ub = bb.freecam()) || void 0 === Ub || Ub.drag(Ab, Mb)
            },
            moveReplayFreecam(ab) {
              var Ub;
              null === (Ub = bb.freecam()) || void 0 === Ub || Ub.move(ab)
            },
            holdReplayFreecamVertical(ab) {
              var Ub;
              let {
                action: Ab,
                PY: Mb
              } = ab;
              null === (Ub = bb.freecam()) || void 0 === Ub || Ub.holdVertical(Ab, Mb)
            }
          },
          Db = bb => {
            var ab;
            const Ub = Eb(),
              Ab = null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.view) && void 0 !== ab ? ab : null;
            TU.has(bb) ? (bb => {
              for (const ab of Tb) ab(bb)
            })(bb) : EU.has(bb) ? Zb.replayAction(bb) : "replayPlayPause" === bb ? Ub && Ab && Ab.state !== Lb.$c.None && Zb.setReplayPlaying(Ab.state !== Lb.$c.Playing) : "replayChangeCameraMode" === bb ? null === Ub || void 0 === Ub || Ub.cycleCameraMode() : "replayExit" === bb ? !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.inPlayback) && (0, ha.m)("/") : "replayExportVideo" === bb && yb()
          };
        let zb = !1;
        return {
          states: jb,
          events: Rb,
          commands: Zb,
          lookups: {
            replayCamera() {
              var ab, Ub, Ab;
              return !0 !== (null === (ab = Eb()) || void 0 === ab ? void 0 : ab.isOpen) ? null : null !== (Ub = null === (Ab = bb.cameraView) || void 0 === Ab ? void 0 : Ab.call(bb)) && void 0 !== Ub ? Ub : null
            },
            leaveGameReloadsPage() {
              var bb;
              return !0 === (null === (bb = Eb()) || void 0 === bb ? void 0 : bb.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var bb;
              const Ub = !0 === (null === (bb = Eb()) || void 0 === bb ? void 0 : bb.inPlayback);
              Ub !== zb && (zb = Ub, eb.m.IR("connectedGameChanged")), ab.fire()
            },
            recorderChanged: Ab.fire,
            keyDown: bb => {
              var ab;
              switch (bb) {
                case "recordGame":
                  return void Zb.toggleRecording();
                case "recordClip":
                  return void((0, Ra.e)() || Zb.saveClip())
              }(0, UU.c)() || ("replayViewerOpen" !== bb ? bb.startsWith("replay") && ((0, Ra.e)() || !0 === (null === (ab = Eb()) || void 0 === ab ? void 0 : ab.inPlayback)) && Db(bb) : kb("toggle"))
            }
          }
        }
      }({
        runtime: Mb.k,
        cameraView: () => {
          var bb;
          const ab = null === (bb = (0, Eb.i)()) || void 0 === bb ? void 0 : bb.renderFrame;
          if (!ab) return null;
          const [Ub, Ab, Mb] = ab.cameraPosition, [Tb, Yb, Bb] = ab.cameraDirection;
          return {
            position: [Ub, Ab, Mb],
            direction: [Tb, Yb, Bb]
          }
        },
        canvas: () => {
          var bb, ab, Ub;
          return null !== (bb = null === (ab = (Ub = (0, Tb.K)()).canvas) || void 0 === ab ? void 0 : ab.call(Ub)) && void 0 !== bb ? bb : null
        },
        freecam: Mb.h
      }),
      tU = {
        states: {
          ...ea,
          ...Xa.l,
          ...lU.states,
          ...vU,
          ...lb
        },
        events: {
          ...va,
          ...kb,
          ...Xa.e,
          ...Nb.d,
          ...mU.j,
          ...lU.events,
          ...LU,
          ...pb.i
        },
        commands: {
          ...mb,
          ...La,
          ...yb,
          ...Xa.b,
          ...Va,
          ...fU,
          ...pb.e,
          ...qa,
          ...lU.commands,
          ...ZU,
          ...tb,
          ...FU
        },
        queries: {
          ...Xa.h,
          ...oU
        },
        lookups: {
          ...Pa,
          ...Qb,
          ...mU.m,
          ...lU.lookups,
          ...fb,
          ...bU,
          ...dU,
          ...wb
        }
      };

    function wU() {
      (0, Yb.e)(Rb.m), (0, Mb.l)(lU.feed), (0, Nb.f)(), Oa || (Oa = !0, (0, Rb.k)(db.h, (bb => {
        const ab = (0, hb.f)(db.h, bb);
        "string" === typeof ab && Promise.resolve().then((() => Ub(3324))).then((bb => {
          let {
            onCosmeticPackGranted: Ub
          } = bb;
          Ub(ab)
        }))
      })), (0, Rb.k)(db.X, (bb => {
        const ab = (0, hb.f)(db.X, bb);
        "number" === typeof ab && eb.m.IR("serverUpdating", Date.now() + ab, !0)
      })), (0, Rb.k)(db.D, (bb => {
        const ab = (0, hb.f)(db.D, bb);
        if ((0, hb.e)(ab)) {
          const {
            bb: bb,
            Ub: Ub
          } = ab;
          (0, ga.e)({
            bb: "string" === typeof bb ? bb : null,
            Ub: "string" === typeof Ub ? Ub : null
          })
        }
      })), (0, Rb.k)(vb.Tb.NewUiRequest, (bb => {
        const ab = (0, hb.i)(bb);
        (0, hb.e)(ab) && "number" === typeof ab.id && (0, hb.e)(ab.clientParameters) && (0, Ca.g)(ab.id, ab.clientParameters)
      })), (0, Rb.k)(db.U, (bb => {
        const ab = (0, hb.f)(db.U, bb);
        "number" === typeof ab && (0, Ca.j)(ab)
      })), (0, Rb.g)(Ca.d), (0, Rb.k)(vb.Tb.UiRequestPopup, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab) && "number" === typeof ab.id && "string" === typeof ab.text) {
          const bb = ab.id;
          (0, Ca.n)(bb, ab.text, (ab => {
            Va.answerUiRequest({
              id: bb,
              ME: ab
            })
          }))
        }
      })), (0, Rb.k)(vb.Tb.TopRightHelper, (bb => {
        const ab = (0, hb.i)(bb);
        void 0 !== ab && eb.m.IR("TopRightHelper", ab, !0)
      })), (0, Rb.k)(vb.Tb.TaskProgress, (bb => {
        const ab = (0, hb.i)(bb);
        (0, hb.e)(ab) && "string" === typeof ab.taskId && "number" === typeof ab.progress && (0, sa.b)({
          taskId: ab.taskId,
          progress: ab.progress
        })
      }))), DU || (DU = !0, (0, Rb.k)(db.l, (bb => {
        const ab = (0, hb.f)(db.l, bb);
        (0, hb.e)(ab) && eb.m.IR("showShopFromServer", {
          toggle: ab.Za,
          Da: ab.Da
        }, !0)
      })), (0, Rb.k)(vb.Tb.OverShopInfo, (bb => {
        const ab = (0, hb.i)(bb);
        (0, hb.e)(ab) && eb.m.IR("overShopInfo", ab.info, !0)
      })), (0, Rb.k)(vb.Tb.ShowShopTutorial, (() => {
        eb.m.IR("showShopTutorial", null, !0)
      }))), kU || (kU = !0, (0, Rb.d)((() => {
        var bb;
        (0, PU.x)(), null === (bb = yU) || void 0 === bb || bb(), yU = (0, Rb.b)() ? (0, jU.g)(Rb.b) : null
      })), (0, Rb.k)(vb.Tb.SetCookie, (bb => {
        const ab = (0, hb.i)(bb),
          Ub = (0, ha.e)().gameNameWithVariation;
        (0, hb.e)(ab) && "string" === typeof ab.key && null !== Ub && (0, XU.setCookie)(Ub, ab.key, ab.value)
      })), (0, Rb.k)(vb.Tb.LeaveValues, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab) && "string" === typeof ab.leaveEventType) {
          const {
            leaveEventType: bb,
            category: Ub,
            subCategory: Ab,
            value: Mb
          } = ab;
          (0, PU.B)({
            leaveEventType: bb,
            category: Ub,
            subCategory: Ab,
            value: Mb
          })
        }
      })), (0, Rb.k)(vb.Tb.CustomAnalyticsEvent, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab) && "string" === typeof ab.cat1) {
          const {
            cat1: bb,
            cat2: Ub,
            cat3: Ab,
            value: Mb
          } = ab;
          (0, PU.n)({
            cat1: bb,
            cat2: Ub,
            cat3: Ab,
            value: Mb
          })
        }
      })), (0, Rb.k)(vb.Tb.ProgressionEvent, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab)) {
          const {
            type: bb,
            location1: Ub,
            location2: Ab,
            location3: Mb,
            score: Tb
          } = ab;
          (0, PU.q)({
            type: bb,
            location1: Ub,
            location2: Ab,
            location3: Mb,
            score: Tb
          })
        }
      })), (0, Rb.k)(vb.Tb.ResourceEvent, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab)) {
          const {
            type: bb,
            resourceType: Ub,
            amount: Ab,
            category: Mb,
            itemName: Tb
          } = ab;
          (0, PU.s)({
            type: bb,
            resourceType: Ub,
            amount: Ab,
            category: Mb,
            itemName: Tb
          })
        }
      })), (0, Rb.k)(vb.Tb.LeaderboardResponse, (bb => {
        const ab = (0, hb.i)(bb);
        if ((0, hb.e)(ab)) {
          const {
            category: bb,
            timeframe: Ub,
            data: Ab
          } = ab;
          eb.m.IR("leaderboardResponse", {
            category: bb,
            timeframe: Ub,
            data: Ab
          })
        }
      })), (0, Rb.k)(db.t, (bb => {
        const ab = (0, hb.f)(db.t, bb);
        "string" === typeof ab && (0, RU.e)(bb.conn, ab)
      })), (0, Rb.k)(db.x, (bb => {
        const ab = (0, hb.f)(db.x, bb);
        "string" === typeof ab && console.error(`[logErrorToConsole]: ${ab}`)
      }))), ub(), (0, mU.c)(), Qa || (Qa = !0, (0, Rb.k)(db.g, (bb => {
        const ab = (0, hb.f)(db.g, bb);
        void 0 !== ab && (0, Ga.l)(ab)
      }))), wa(), Wa(), Cb || (Cb = !0, (0, Tb.v)(Vb)), Ab.gameBridge.attach(tU), (0, Ab.installPageSources)({
        commands: {
          ...Ab.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: GU.j
        },
        queries: qU.wasmIconQueries,
        lookups: {
          ...Ab.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...qU.wasmIconLookups,
          iZ: GU.d,
          drawCallStats: QU.h
        }
      }), (0, hU.c)(), (0, qU.loadIcons)()
    }
  },
  39864: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Yb
    });
    var Ab = Ub(39870);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Mb ??= Ub.e(58).then((() => Ub(41714))).catch((bb => {
        throw Mb = null, bb
      })), Mb
    }

    function Yb() {
      return Tb ??= Promise.all([Eb(), (0, Ab.g)()]).then((bb => {
        let [ab] = bb;
        return ab
      }), (bb => {
        throw Tb = null, bb
      })), Tb
    }
  },
  36373: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
  36195: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb,
      l: () => Pb,
      m: () => Yb,
      o: () => Bb,
      r: () => eb,
      s: () => Lb,
      u: () => vb,
      x: () => Eb
    });
    var Ab = Ub(1189);
    let Mb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Eb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Yb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Ab.h
      };
      if (bb.startsWith("lobby:")) {
        const ab = bb.slice(6);
        return Lb(ab) ? {
          kind: "lobby",
          path: ab
        } : null
      }
      const ab = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ab ? {
        kind: "codeBlock",
        pos: [parseInt(ab[1]), parseInt(ab[2]), parseInt(ab[3])]
      } : null
    }

    function Bb(bb) {
      return bb.endsWith(".d.ts")
    }

    function eb(bb) {
      return bb.endsWith(".ts") && !Bb(bb)
    }
    const vb = 64;

    function Lb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > vb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Bb(bb) && !eb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ab = bb.split("/");
      for (const Ub of ab)
        if ("" === Ub || "." === Ub || ".." === Ub) return !1;
      return !0
    }
    const Pb = 14e3
  },
  38330: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      i: () => Mb
    });
    const Ab = ["description", "label"];

    function Mb(bb) {
      const ab = bb.type;
      return {
        type: ab,
        params: bb[ab]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);