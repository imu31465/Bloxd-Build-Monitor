export const id = 55;
export const ids = [55];
export const modules = {
  41104: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => lb,
      g: () => pb,
      i: () => Hb
    });
    const eb = 6e3;

    function Hb(bb, wb) {
      return [Math.floor(bb[0] / wb) * wb, Math.floor(bb[1] / wb) * wb, Math.floor(bb[2] / wb) * wb]
    }

    function pb(bb) {
      const wb = (null !== bb && void 0 !== bb ? bb : "").match(/-?\d+(?:\.\d+)?/g);
      return wb && wb.length >= 3 ? [Number(wb[0]), Number(wb[1]), Number(wb[2])] : null
    }

    function Vb(bb, wb) {
      return bb === wb ? String(bb) : `${bb}-${wb}`
    }

    function gb(bb, wb, Mb, eb) {
      const Hb = [];
      let pb = new Map;
      for (let Vb = bb[2]; Vb < bb[2] + wb; Vb++) {
        const gb = new Map;
        let lb = bb[0];
        for (; lb < bb[0] + wb;) {
          const Hb = eb(lb, Mb, Vb);
          let Lb = lb;
          for (; Lb + 1 < bb[0] + wb && eb(Lb + 1, Mb, Vb) === Hb;) Lb++;
          if (null !== Hb) {
            const bb = `${lb} ${Lb} ${Hb}`,
              wb = pb.get(bb);
            wb ? (wb.z1 = Vb, pb.delete(bb), gb.set(bb, wb)) : gb.set(bb, {
              x0: lb,
              x1: Lb,
              z0: Vb,
              z1: Vb,
              name: Hb
            })
          }
          lb = Lb + 1
        }
        Hb.push(...pb.values()), pb = gb
      }
      return Hb.push(...pb.values()), Hb.sort(((bb, wb) => bb.z0 - wb.z0 || bb.x0 - wb.x0)).map((bb => `x${Vb(bb.x0,bb.x1)} z${Vb(bb.z0,bb.z1)} ${bb.name}`))
    }

    function lb(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : eb;
      const lb = [bb[0] + wb - 1, bb[1] + wb - 1, bb[2] + wb - 1],
        Lb = null !== Hb && Hb.every(((wb, Mb) => Math.floor(wb) >= bb[Mb] && Math.floor(wb) <= lb[Mb])),
        Ib = [`The chunk from ${bb.join(" ")} to ${lb.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Hb && Ib.push(`The player's feet are at ${Hb.map(Math.floor).join(" ")}, ${Lb?"in this chunk":"outside this chunk"}.`);
      const Ob = [];
      for (let eb = bb[1]; eb <= lb[1]; eb++) {
        const Hb = gb(bb, wb, eb, Mb).join("; "),
          pb = Ob[Ob.length - 1];
        (null === pb || void 0 === pb ? void 0 : pb.boxes) === Hb ? pb.to = eb : Ob.push({
          from: eb,
          to: eb,
          boxes: Hb
        })
      }
      const Ub = Ob.filter((bb => "" !== bb.boxes));
      0 === Ub.length && Ib.push("It is all air.");
      let tb = Ib.join("\n").length;
      for (const eb of Ub) {
        const bb = `y${Vb(eb.from,eb.to)}: ${eb.boxes}`;
        if (tb += bb.length + 1, tb > pb) {
          Ib.push(`Cut short: the layers from y${eb.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Ib.push(bb)
      }
      return Ib.join("\n")
    }
  },
  10133: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(26);

    function Hb() {
      return !eb.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38160: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      h: () => pb,
      i: () => Hb
    });
    const eb = [.25, .5, 1, 2, 4, 8, 16];

    function Hb(bb, wb) {
      const Mb = eb;
      let Hb = Mb.indexOf(bb);
      return -1 === Hb && (Hb = Mb.findIndex((wb => wb >= bb)), -1 === Hb && (Hb = Mb.length - 1)), "up" === wb ? Mb[Math.min(Hb + 1, Mb.length - 1)] : Mb[Math.max(Hb - 1, 0)]
    }

    function pb(bb) {
      return bb <= eb[0]
    }

    function Vb(bb) {
      return bb >= eb[eb.length - 1]
    }
  },
  37781: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      f: () => pb
    });
    let eb = !1;

    function Hb() {
      return eb
    }

    function pb(bb) {
      return eb !== bb && (eb = bb, !0)
    }
  },
  40332: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(29),
      Hb = Mb(2167);

    function pb(bb) {
      let {
        taskId: wb,
        progress: Mb
      } = bb;
      const eb = Hb.c.get("_tasks");
      null !== eb && void 0 !== eb && eb[wb] && Hb.c.apply({
        _tasks: {
          ...eb,
          [wb]: {
            ...eb[wb],
            progress: Mb
          }
        }
      })
    }
    eb.k.subscribe("clientTaskProgress", (bb => {
      pb(bb)
    }))
  },
  41081: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Fb,
      b: () => tb,
      f: () => Eb,
      j: () => Lb,
      m: () => Ob,
      p: () => Ub,
      t: () => lb,
      x: () => Vb,
      z: () => Ib
    });
    var eb = Mb(2167),
      Hb = Mb(29),
      pb = Mb(2175);
    const Vb = (0, pb.l)((function() {
        var bb, wb, Mb, Hb;
        return {
          health: null !== (bb = eb.c.get("_health")) && void 0 !== bb ? bb : null,
          maxHealth: null !== (wb = eb.c.get("_totalMaxHealth")) && void 0 !== wb ? wb : null,
          shield: null !== (Mb = eb.c.get("_shield")) && void 0 !== Mb ? Mb : null,
          maxShield: null !== (Hb = eb.c.get("maxShield")) && void 0 !== Hb ? Hb : null
        }
      }), [], (0, pb.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      gb = [{
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

    function lb(bb, wb) {
      return gb[(bb ? 2 : 0) + (wb ? 1 : 0)]
    }
    const Lb = (0, pb.l)((function() {
      var bb;
      return null !== (bb = eb.c.get("_aura")) && void 0 !== bb ? bb : null
    }), [], (0, pb.i)("_aura"));

    function Ib(bb) {
      return {
        watch: wb => (0, Hb.o)("shotPlayer", (Mb => {
          let {
            playerId: eb,
            damage: Hb,
            wasCrit: pb,
            distance: Vb
          } = Mb;
          bb(eb) && wb({
            damage: Hb,
            wasCrit: pb,
            distance: Vb
          })
        }))
      }
    }

    function Ob(bb) {
      return (0, pb.c)("chat", (wb => {
        let {
          serverChatMsgId: Mb,
          worldCodeLineId: eb,
          content: Hb,
          chatterEId: pb,
          chatterObjectsToReplay: Vb
        } = wb;
        return {
          serverChatMsgId: null !== Mb && void 0 !== Mb ? Mb : null,
          worldCodeLineId: null !== eb && void 0 !== eb ? eb : null,
          content: Hb,
          author: pb ? bb(pb) : null,
          hiddenFromReplay: !0 === Vb
        }
      }))
    }
    const Ub = (0, pb.c)("chatRemoved");
    class tb {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Mb = this.shown;
        return bb !== this.needed && (this.needed = bb, this.neededSince = wb, null === bb && (this.shown = null)), this.shown !== this.needed && wb - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Mb
      }
    }

    function Cb(bb) {
      return [{
        translationKey: `touchKeys:${bb}`
      }]
    }
    const Eb = {
      open: Cb("open"),
      close: Cb("close"),
      milk: Cb("milk"),
      shear: Cb("shear"),
      tame: Cb("tame"),
      feed: Cb("feed"),
      ride: Cb("ride")
    };

    function Fb(bb) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: bb
      }]
    }
  },
  37539: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Vb
    });
    var eb = Mb(4662);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Mb.e(242).then((() => Mb(37441))).then((bb => {
        let {
          ITEM_SPRITES: wb,
          ITEM_SPRITES_WITHOUT_FILE: Mb,
          ITEM_FILES_WITHOUT_SPRITE: pb
        } = bb;
        Hb = function(bb, wb, Mb) {
          const Hb = new Set,
            pb = (0, eb.z)(wb);
          let Vb = 0;
          for (const [eb, gb] of bb.entries()) eb === pb[Vb] ? Vb++ : Hb.add(gb);
          if ("" !== Mb)
            for (const gb of Mb.split(eb.v)) Hb.add(gb);
          return Hb
        }(wb.split(eb.v), Mb, pb)
      }), (bb => {
        throw pb = null, bb
      })), pb
    }

    function gb(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Hb) || void 0 === Mb ? void 0 : Mb.has(bb)) && void 0 !== wb && wb
    }
  },
  41092: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => pb,
      d: () => Hb
    });
    const eb = 128;

    function Hb(bb, wb, Mb, eb) {
      const Hb = 2 * wb - 1,
        pb = 1 - 2 * Mb,
        Vb = bb(0) - Hb * bb(3),
        gb = bb(4) - Hb * bb(7),
        lb = bb(8) - Hb * bb(11),
        Lb = bb(1) - pb * bb(3),
        Ib = bb(5) - pb * bb(7),
        Ob = bb(9) - pb * bb(11);
      eb[0] = gb * Ob - lb * Ib, eb[1] = lb * Lb - Vb * Ob, eb[2] = Vb * Ib - gb * Lb;
      const Ub = eb[0] * bb(3) + eb[1] * bb(7) + eb[2] * bb(11) < 0 ? -1 : 1,
        tb = Math.hypot(eb[0], eb[1], eb[2]) * Ub;
      return eb[0] /= tb, eb[1] /= tb, eb[2] /= tb, eb
    }

    function pb(bb, wb, Mb, eb, Hb, pb) {
      const Vb = [Math.floor(wb[0]), Math.floor(wb[1]), Math.floor(wb[2])],
        gb = [0, 0, 0],
        lb = [1 / 0, 1 / 0, 1 / 0],
        Lb = [1 / 0, 1 / 0, 1 / 0];
      for (let Ub = 0; Ub < 3; Ub++) gb[Ub] = Math.sign(Mb[Ub]), 0 !== gb[Ub] && (Lb[Ub] = Math.abs(1 / Mb[Ub]), lb[Ub] = (Vb[Ub] + (gb[Ub] > 0 ? 1 : 0) - wb[Ub]) / Mb[Ub]);
      let Ib = 0,
        Ob = Math.abs(Mb[0]) > Math.abs(Mb[1]) ? 0 : 1;
      for (Math.abs(Mb[2]) > Math.abs(Mb[Ob]) && (Ob = 2); Ib <= eb;) {
        if (bb(Vb[0], Vb[1], Vb[2])) return Hb[0] = Vb[0], Hb[1] = Vb[1], Hb[2] = Vb[2], pb[0] = 0, pb[1] = 0, pb[2] = 0, pb[Ob] = -gb[Ob], !0;
        Ob = lb[0] < lb[1] ? 0 : 1, lb[2] < lb[Ob] && (Ob = 2), Ib = lb[Ob], Vb[Ob] += gb[Ob], lb[Ob] += Lb[Ob]
      }
      return !1
    }
  },
  37705: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Rb,
      i: () => Db,
      m: () => zb,
      q: () => mb,
      u: () => Xb
    });
    var eb = Mb(318),
      Hb = Mb(110);
    const pb = new(Mb(37707).b)(new URL(Mb.p + Mb.u(3), Mb.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Vb = Mb(1848),
      gb = Mb(2367);
    const lb = 1e4,
      Lb = 3e4;
    let Ib = null,
      Ob = null,
      Ub = null,
      tb = !1,
      Cb = 0;
    const Eb = new Map;
    let Fb = null;
    const Bb = new Map,
      sb = new Map;

    function mb(bb) {
      const wb = new Promise(((wb, Mb) => {
        const eb = new Image;
        eb.crossOrigin = "anonymous", eb.fetchPriority = "high", eb.onload = () => {
          wb(eb)
        }, eb.onerror = () => {
          Mb(new Error(`A block icon's texture did not load: ${bb.slice(0,100)}`))
        }, eb.src = bb
      }));
      return (0, gb.h)(wb)
    }

    function hb(bb) {
      var wb, Mb;
      tb || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${bb}`), tb = !0, null === (wb = Ib) || void 0 === wb || wb.terminate(), Ib = null, Ob = null, Bb.clear(), sb.clear();
      for (const eb of Eb.values()) eb(null);
      Eb.clear(), null === (Mb = Fb) || void 0 === Mb || Mb()
    }

    function zb() {
      return null !== Ob
    }

    function Xb() {
      return Ub ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === eb.d.ios_icon_worker_v1 && (0, Hb.isWebKit)()) return;
        try {
          Ib = await async function() {
            return await pb.ready(), pb.start()
          }()
        } catch (gb) {
          return void hb(`did not start (${String(gb)})`)
        }
        let bb = () => {};
        const wb = new Promise((wb => {
          bb = wb
        }));
        Ib.onmessage = wb => {
          let {
            data: Mb
          } = wb;
          if ("started" === Mb.type) Ob = Ib, bb();
          else if ("failed" === Mb.type) hb(`failed a draw (${Mb.message})`);
          else {
            var eb, Hb;
            null === (eb = Eb.get(Mb.id)) || void 0 === eb || eb(Mb.url), Eb.delete(Mb.id), null === (Hb = Fb) || void 0 === Hb || Hb()
          }
        }, Ib.onerror = wb => {
          wb.preventDefault(), hb(`stopped (${wb.message||"its script did not load or run"})`), bb()
        };
        const Mb = `did not start in ${Lb/1e3} s`;
        await (0, Vb.n)(wb, Lb, Mb).catch((() => {
          hb(Mb)
        }))
      }(), Ub
    }

    function xb() {
      if (null !== Fb || 0 === Eb.size) return;
      const bb = new Promise((bb => {
          Fb = bb
        })),
        wb = `did not answer in ${lb/1e3} s`;
      (0, Vb.n)(bb, lb, wb).then((() => {
        Fb = null, xb()
      }), (() => {
        Fb = null, hb(wb)
      }))
    }

    function jb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      bb.postMessage(wb, Mb)
    }

    function Kb(bb, wb, Mb, eb) {
      let Hb = wb.get(Mb);
      return void 0 === Hb && (Hb = eb().then((async wb => {
        let {
          image: Mb,
          request: eb
        } = wb;
        try {
          const wb = await createImageBitmap(Mb);
          jb(bb, eb(wb), [wb])
        } catch (Hb) {
          hb(`could not take an image (${String(Hb)})`)
        }
      })), Hb.catch((() => {
        wb.get(Mb) === Hb && wb.delete(Mb)
      })), wb.set(Mb, Hb)), Hb
    }
    async function rb(bb, wb) {
      Xb();
      const Mb = Ob;
      if (null === Mb) return null;
      if (await bb(Mb), Ob !== Mb) return null;
      const eb = ++Cb;
      return new Promise((bb => {
        Eb.set(eb, bb), jb(Mb, wb(eb)), xb()
      }))
    }

    function Rb(bb, wb, Mb) {
      return rb((wb => Promise.all([bb.top, bb.left, bb.right].map((bb => function(bb, wb) {
        return Kb(bb, Bb, wb, (async () => ({
          image: await mb(wb),
          request: bb => ({
            type: "texture",
            url: wb,
            bitmap: bb
          })
        })))
      }(wb, bb))))), (eb => ({
        type: "draw",
        id: eb,
        ...bb,
        size: wb,
        outlineWidth: Mb
      })))
    }

    function Db(bb, wb, Mb, eb) {
      return rb((Mb => function(bb, wb, Mb) {
        return Kb(bb, sb, wb, (async () => {
          const {
            texture: bb,
            ...eb
          } = await Mb();
          return {
            image: await mb(bb),
            request: bb => ({
              type: "model",
              name: wb,
              bitmap: bb,
              geometry: eb
            })
          }
        }))
      }(Mb, bb, wb)), (wb => ({
        type: "drawModel",
        id: wb,
        name: bb,
        size: Mb,
        outlineWidth: eb
      })))
    }
  },
  41076: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(2107);

    function Hb(bb, wb, Mb) {
      return (0, eb.r)(bb, wb) < Mb
    }
  },
  10071: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(1325);

    function Hb(bb, wb) {
      var Mb, Hb;
      try {
        const Mb = (0, eb.d)();
        if ("function" === typeof Mb) {
          const eb = new Mb(bb, wb);
          if (eb.type === bb) return eb
        }
      } catch {}
      const pb = document.createEvent("Event");
      return pb.initEvent(bb, null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.bubbles) && void 0 !== Mb && Mb, null !== (Hb = null === wb || void 0 === wb ? void 0 : wb.cancelable) && void 0 !== Hb && Hb), pb
    }
  },
  40321: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib
    });
    var eb = Mb(1301),
      Hb = Mb(1455),
      pb = Mb(26),
      Vb = Mb(1436),
      gb = Mb(1447),
      lb = Mb(1686),
      Lb = Mb(37751);

    function Ib(bb) {
      let {
        Lp: wb,
        Ip: Mb
      } = bb;
      const Ib = null !== wb && void 0 !== wb ? wb : (0, gb.e)().gameNameWithVariation;
      (0, eb.A)(Ib) && ((0, Lb.g)(), (0, Vb.T)((() => {
        console.log("Received matchmaking order from game server to game", wb), (0, pb.k)("inGameReplay"), (0, lb.navigatePreserveSearch)((0, Hb.b)(Ib, null !== Mb && void 0 !== Mb ? Mb : void 0))
      }), "video_start"))
    }
  },
  40538: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(29),
      Hb = Mb(2194);

    function pb(bb) {
      var wb, Mb;
      const pb = (0, Hb.m)(null !== (wb = null === (Mb = Hb.p.toggleFreeCam) || void 0 === Mb ? void 0 : Mb[0]) && void 0 !== wb ? wb : null);
      eb.k.iI("showBottomMessage", {
        message: `Free Camera ${bb?"Enabled":"Disabled"}${pb?` - Press ${pb} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40313: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => lb,
      h: () => Lb,
      k: () => Ob
    });
    var eb = Mb(2142),
      Hb = Mb(29),
      pb = Mb(1504),
      Vb = Mb(1329);
    const gb = new Map;

    function lb(bb, wb) {
      Hb.k.iI("newUiRequest", {
        id: bb,
        clientParameters: wb
      }, !0)
    }

    function Lb(bb) {
      Hb.k.iI("removeUiRequest", bb, !0);
      const wb = gb.get(bb);
      wb && (wb.tearDownNotification(), gb.delete(bb))
    }

    function Ib() {
      Hb.k.iI("clearUiRequests");
      for (const bb of gb.values()) bb.tearDownNotification();
      gb.clear()
    }

    function Ob(bb, wb, Mb, Hb) {
      const lb = "string" === typeof wb ? {
          translationKey: wb
        } : wb,
        Lb = pb.NotificationProvider.showPromptPopup({
          title: lb.translationKey,
          textOpts: {
            title: (0, Vb.g)(lb.params, eb.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: Mb,
          unlockPointerKey: "uiRequestPopup"
        });
      gb.set(bb, Lb), Lb.getResult().then((wb => {
        gb.delete(bb), "notificationTornDown" !== wb && Hb(wb)
      }))
    }
  },
  41098: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      e: () => Ub
    });
    var eb = Mb(225),
      Hb = Mb(41104);
    const pb = 20;

    function Vb(bb) {
      return bb.map(Math.floor).join(" ")
    }

    function gb(bb) {
      return null === bb.amount || 1 === bb.amount ? bb.name : `${bb.amount} ${bb.name}`
    }
    var lb = Mb(41112),
      Lb = Mb(2167),
      Ib = Mb(1447);

    function Ob(bb, wb) {
      if (!bb) return lb.d;
      const Mb = bb.playerFeet();
      if (!Mb) return "The player isn't in the world yet, so no blocks can be seen.";
      const pb = eb.e.gO,
        Vb = (0, Hb.i)(null !== wb && void 0 !== wb ? wb : Mb, pb),
        gb = bb.chunkBlocks(Vb);
      return gb ? (0, Hb.e)(Vb, pb, ((wb, Mb, eb) => {
        const Hb = gb(wb, Mb, eb);
        return 0 === Hb ? null : bb.blockName(Hb).split("|")[0]
      }), Mb) : `The chunk from ${Vb.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Mb.map(Math.floor).join(" ")}.`
    }

    function Ub(bb) {
      var wb, Mb, eb;
      if (!bb) return lb.e;
      const Hb = bb.playerFeet();
      if (!Hb) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Ob,
        heldSlot: Ub
      } = bb.inventory();
      return function(bb) {
        const wb = [];
        null !== bb.game && wb.push(`Game: ${bb.game}.`);
        const Mb = null === bb.health ? "" : `, health ${Math.round(bb.health)}${null===bb.maxHealth?"":` of ${Math.round(bb.maxHealth)}`}`;
        wb.push(`The player (the creator) stands at ${Vb(bb.position)}${Mb}, ${bb.creative?"in":"not in"} creative mode.`);
        const eb = bb.slots[bb.heldSlot];
        wb.push(eb ? `Holding (slot ${bb.heldSlot}): ${gb(eb)}.` : `Holding nothing (slot ${bb.heldSlot} is empty).`);
        const Hb = bb.slots.flatMap(((bb, wb) => bb ? [`slot ${wb}: ${gb(bb)}`] : []));
        wb.push(Hb.length > 0 ? `Inventory: ${Hb.join(", ")}.` : "Inventory: empty.");
        const lb = wb => Math.hypot(wb.position[0] - bb.position[0], wb.position[1] - bb.position[1], wb.position[2] - bb.position[2]),
          Lb = [...bb.nearby].sort(((bb, wb) => lb(bb) - lb(wb)));
        if (0 === Lb.length) wb.push("No other players or mobs are near enough to see.");
        else {
          wb.push("Near them, nearest first:");
          for (const bb of Lb.slice(0, pb)) {
            const Mb = "player" === bb.kind ? `player "${bb.name||"?"}"` : bb.name && bb.name !== bb.kind ? `${bb.kind} "${bb.name}"` : bb.kind,
              eb = Math.round(lb(bb));
            wb.push(`- ${Mb} at ${Vb(bb.position)}, ${eb} block${1===eb?"":"s"} away`)
          }
          Lb.length > pb && wb.push(`- and ${Lb.length-pb} more further away`)
        }
        return bb.droppedItems > 0 && wb.push(`${bb.droppedItems} dropped item${1===bb.droppedItems?" is":"s are"} on the ground nearby.`), wb.join("\n")
      }({
        game: null !== (wb = (0, Ib.e)().gameNameWithVariation) && void 0 !== wb ? wb : null,
        position: Hb,
        health: null !== (Mb = Lb.c.get("_health")) && void 0 !== Mb ? Mb : null,
        maxHealth: null !== (eb = Lb.c.get("_totalMaxHealth")) && void 0 !== eb ? eb : null,
        creative: !0 === Lb.c.get("creative"),
        heldSlot: Ub,
        slots: Ob,
        nearby: bb.nearby(),
        droppedItems: bb.droppedItems()
      })
    }
  },
  42677: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      attachPlayGameSources: () => de,
      playGameSources: () => ue
    });
    var eb = Mb(2142),
      Hb = Mb(42535),
      pb = Mb(5672),
      Vb = Mb(42263),
      gb = Mb(42662),
      lb = Mb(41081),
      Lb = Mb(29),
      Ib = Mb(5685),
      Ob = Mb(5678),
      Ub = Mb(42284),
      tb = Mb(42316),
      Cb = Mb(42685),
      Eb = Mb(42295);
    (0, Eb.m)(Ib.nc.Chat, (bb => {
      if (bb.payloadKind !== Ob.hc.Msgpack) return;
      const wb = function(bb) {
        if (null === bb || "object" !== typeof bb || !("content" in bb)) return null;
        const {
          chatMsgId: wb,
          worldCodeLineId: Mb,
          content: eb,
          chatterEId: Hb,
          chatterObjectsToReplay: pb
        } = bb;
        return {
          serverChatMsgId: null !== wb && void 0 !== wb ? wb : void 0,
          worldCodeLineId: null !== Mb && void 0 !== Mb ? Mb : void 0,
          content: eb,
          chatterEId: void 0 === Hb || null === Hb ? void 0 : String(Hb),
          chatterObjectsToReplay: pb
        }
      }((0, Ub.d)(bb.payload));
      null !== wb && Lb.k.iI("chat", wb, !0)
    })), (0, Eb.m)(Ib.nc.ChatRemoved, (bb => {
      if (bb.payloadKind === Ob.hc.Msgpack) {
        const {
          chatMsgId: wb
        } = (0, Ub.d)(bb.payload);
        Lb.k.iI("chatRemoved", wb, !0)
      }
    }));
    const Fb = {
        chatReceived: (0, lb.m)((function(bb) {
          var wb, Mb, eb;
          return {
            id: bb,
            name: null !== (wb = Cb.f.getName(bb)) && void 0 !== wb ? wb : null,
            local: (0, tb.d)() === bb,
            profileEffect: null !== (Mb = null === (eb = (0, Cb.h)(bb)) || void 0 === eb ? void 0 : eb.profileEffect) && void 0 !== Mb ? Mb : null
          }
        })),
        chatRemoved: lb.p
      },
      Bb = {
        sendChatMessage(bb) {
          var wb, Mb;
          let {
            tV: eb,
            channelName: Hb
          } = bb;
          return null !== (wb = null === (Mb = (0, Vb.m)()) || void 0 === Mb ? void 0 : Mb.clientApi.sendChat(eb, Hb)) && void 0 !== wb && wb
        }
      };
    var sb = Mb(225),
      mb = Mb(2167),
      hb = Mb(42253),
      zb = Mb(41076);
    const Xb = [0, 0, 0],
      xb = {
        codeBlockClickable(bb) {
          var wb;
          const Mb = (0, Vb.m)();
          if (null === Mb || void 0 === Mb || !Mb.isSessionLive) return !1;
          const eb = Mb.api;
          if (0 !== (hb.q.playerFlags(eb.apiView, 0) & hb.Ad.Crouching)) return !1;
          const Hb = eb.queries.directorEntity(eb.localId) >= hb.kb.BYTES ? eb.memoryData(eb.scratch(), hb.kb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Hb) return !1;
          for (let pb = 0; pb < 3; pb++) Xb[pb] = hb.kb.feet(Hb, 0, pb);
          return Xb[1] += hb.kb.eyeHeight(Hb, 0), (0, zb.c)(Xb, bb, null !== (wb = mb.c.get("blockReach")) && void 0 !== wb ? wb : sb.e.kF)
        }
      },
      jb = {
        clickCodeBlock(bb) {
          var wb;
          null === (wb = (0, Vb.m)()) || void 0 === wb || wb.clickCodeBlock(bb)
        }
      };
    var Kb = Mb(42270),
      rb = Mb(42688),
      Rb = Mb(1126),
      Db = Mb(40348),
      cb = Mb(5669),
      Yb = Mb(42274),
      Zb = Mb(42266),
      fb = Mb(42277);

    function Ab(bb) {
      if (null === bb) return null;
      const wb = [];
      for (const Mb of bb) {
        const bb = Object.keys(Mb)[0];
        if ("Pw" === bb) {
          const {
            str: bb,
            style: eb,
            clickableUrl: Hb
          } = Mb.Pw, pb = Object.keys(bb)[0], Vb = bb[pb];
          "string" !== pb && "styledEntityName" !== pb && "styledTranslatedText" !== pb || wb.push({
            str: Vb,
            style: eb,
            clickableUrl: Hb
          })
        } else wb.push(Mb[bb])
      }
      return wb
    }
    const Wb = {
      screenPos(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, Vb.m)()) || void 0 === Mb ? void 0 : Mb.renderFrame.projectWorldPosToScreenPos(bb)) && void 0 !== wb ? wb : {
          x: 0,
          y: 0
        }
      }
    };
    let Jb = !1;

    function Sb() {
      Jb || (Jb = !0, (0, Eb.m)(Ib.nc.ProgressBarUpdate, (bb => {
        const wb = (0, fb.g)(bb);
        (0, fb.c)(wb) && Lb.k.iI("progressBarUpdate", wb, !0)
      })), (0, Eb.m)(Yb.v, (bb => {
        const wb = (0, fb.d)(Yb.v, bb);
        wb && Lb.k.iI("middleScreenBarInitiate", {
          duration: wb.tp,
          Cp: wb.Cp,
          horizBarRemOffset: wb.Ep
        }, !0)
      })), (0, Eb.m)(Ib.nc.RemoveMiddleScreenBar, (() => {
        Lb.k.iI("middleScreenBarRemove")
      })), (0, Eb.m)(Yb.X, (bb => {
        const wb = (0, fb.d)(Yb.X, bb);
        if (wb) {
          var Mb;
          const bb = wb.Aw ? null === (Mb = (0, Vb.m)()) || void 0 === Mb ? void 0 : Mb.renderFrame.projectDirectionToScreenPos(wb.Aw) : void 0;
          Lb.k.iI("sendHitmarker", {
            fw: wb.fw,
            screenPos: bb
          }, !0)
        }
      })), (0, Eb.m)(Yb.$, (bb => {
        const wb = (0, fb.d)(Yb.$, bb);
        if (wb) {
          const {
            id: bb,
            position: Mb,
            style: eb,
            dw: Hb,
            ow: pb
          } = wb;
          Lb.k.iI("setDirectionArrow", {
            id: bb,
            position: Mb,
            style: eb,
            text: Ab(Hb),
            ow: pb
          }, !0)
        }
      })), (0, Eb.m)(Yb.e, (bb => {
        const wb = (0, fb.d)(Yb.e, bb);
        wb && Lb.k.iI("clearDirectionArrow", {
          id: wb.id
        }, !0)
      })), (0, Eb.m)(Yb.p, (bb => {
        const wb = (0, fb.d)(Yb.p, bb);
        wb && Lb.k.iI("flyingMiddleMessage", {
          content: Ab(wb.dp),
          Pp: wb.Pp,
          np: wb.np
        }, !0)
      })), (0, Eb.m)(Ib.nc.WorldVariation, (bb => {
        const wb = (0, fb.g)(bb);
        if ("string" === typeof wb) {
          const bb = wb === Rb.f ? null : {
            message: `Currently loaded as variation: ${wb}`,
            type: "Warning"
          };
          Lb.k.iI("showPermanentBottomMessage", bb, !0)
        }
      })), (0, Eb.m)(Yb.I, (bb => {
        const wb = (0, fb.d)(Yb.I, bb);
        wb && function(bb, wb) {
          const {
            type: Mb,
            params: eb
          } = (0, Db.e)(wb), Hb = {
            ...eb
          };
          for (const pb of Db.c) Hb[pb] && (Hb[pb] = Ab(Hb[pb]));
          cb.b.queueQTE(bb, Mb, Hb).getResult().then((wb => {
            var Mb;
            "boolean" === typeof wb && (null === (Mb = (0, Vb.m)()) || void 0 === Mb || Mb.send(Zb.c.QteResponse, {
              qteId: bb,
              qteResponse: wb
            }))
          }))
        }(wb.id, wb.Fp)
      })), (0, Eb.m)(Yb.R, (bb => {
        const wb = (0, fb.d)(Yb.R, bb);
        "number" === typeof wb && cb.b.cancelQTE(wb)
      })), (0, Eb.f)((() => {
        cb.b.reset()
      })), (0, Eb.i)((() => {
        cb.b.reset()
      })), (0, Eb.m)(Ib.nc.EditItemCraftingRecipes, (bb => {
        const wb = (0, fb.g)(bb);
        (0, fb.c)(wb) && Lb.k.iI("craftingRecipesEdited", {
          itemName: wb.craftingRecipeItemName,
          recipesForItem: wb.recipesForItem
        })
      })), (0, Eb.m)(Yb.Q, (bb => {
        const wb = (0, fb.d)(Yb.Q, bb);
        wb && Lb.k.iI("craftingRecipesEdited", {
          itemName: wb.ew,
          recipesForItem: []
        })
      })))
    }
    var Nb = Mb(26);
    const vb = [{
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

    function Qb(bb) {
      return hb.q.playerFlags(bb.api.apiView, 0)
    }
    const Gb = {
        freeCamera: (0, tb.b)((bb => () => {
          const wb = bb.isSessionLive && 0 !== (Qb(bb) & hb.Ad.FreeCamMoves),
            Mb = bb.freeCameraAllowed() && null === Nb.c.get("scriptedCameraFacing");
          return vb[(Mb ? 2 : 0) + (wb ? 1 : 0)]
        }), vb[0], (bb => (0, pb.w)(bb)))
      },
      qb = {
        setFreeCameraMovesFly: bb => {
          var wb;
          null === (wb = (0, Vb.m)()) || void 0 === wb || wb.setFreeCameraMovesFly(bb)
        }
      },
      ab = {
        freeCameraPos: () => {
          const bb = (0, Vb.m)();
          return null !== bb && void 0 !== bb && bb.isSessionLive && bb.renderFrame.hasView && 0 !== (Qb(bb) & hb.Ad.FreeCam) ? bb.renderFrame.cameraPosition : null
        }
      };
    var ib = Mb(40538);
    let ub = !1,
      db = !1;

    function Pb() {
      const bb = (0, Vb.m)();
      if (null === bb || void 0 === bb || !bb.isSessionLive) return void(ub = !1);
      const wb = 0 !== (hb.q.playerFlags(bb.api.apiView, 0) & hb.Ad.FreeCam);
      wb !== ub && (ub = wb, (0, ib.c)(wb))
    }
    var nb = Mb(382),
      yb = Mb(38227),
      ob = Mb(2175);
    var Tb = Mb(42691),
      kb = Mb(42307);
    const bw = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let ww = "off";

    function Mw(bb) {
      var wb;
      return null === bb ? null : {
        label: null !== (wb = (0, Tb.e)(bb, "interactionPrompt")) && void 0 !== wb ? wb : null
      }
    }
    const ew = new Map([
      [hb.mc.Open, {
        label: lb.f.open
      }],
      [hb.mc.Close, {
        label: lb.f.close
      }],
      [hb.mc.Milk, {
        label: lb.f.milk
      }],
      [hb.mc.Shear, {
        label: lb.f.shear
      }],
      [hb.mc.Tame, {
        label: lb.f.tame
      }],
      [hb.mc.Feed, {
        label: lb.f.feed
      }],
      [hb.mc.Ride, {
        label: lb.f.ride
      }]
    ]);
    class Hw {
      constructor() {
        this.target = bw, this.Lg = hb.Tc, this.optionName = null, this.pickaxe = new lb.b
      }
      read(bb) {
        var wb;
        const Mb = hb.q.targetBlockId(bb.api.apiView, 0);
        Mb !== this.Lg && (this.Lg = Mb, this.optionName = Mb === hb.Tc ? null : `${bb.tables.getMetaInfo(Mb).rootName}CrosshairText`);
        const eb = null === this.optionName ? null : null !== (wb = bb.tables.getClientOption(this.optionName)) && void 0 !== wb ? wb : null;
        this.pickaxe.update(function(bb, wb) {
          var Mb, eb, Hb;
          if (0 === (hb.q.playerFlags(bb.api.apiView, 0) & hb.Ad.Breaking) || wb === hb.Tc || 0 === wb) return null;
          const {
            tables: pb
          } = bb;
          if (!0 === pb.getClientOption("creative")) return null;
          const Vb = pb.nameOfId(wb),
            gb = null === (Mb = bb.items.dg()) || void 0 === Mb ? void 0 : Mb.name,
            lb = null !== (eb = pb.getItemStat(Vb, "harvestLevel")) && void 0 !== eb ? eb : 0;
          return (0, nb.Oc)({
            blockHarvestType: pb.getDefaultItemStat(Vb, "harvestType"),
            blockHarvestLevel: pb.getDefaultItemStat(Vb, "harvestLevel"),
            harvestLevel: lb,
            heldToolType: void 0 === gb ? void 0 : pb.getDefaultItemStat(gb, "harvests"),
            heldToolLevel: void 0 === gb ? void 0 : pb.getDefaultItemStat(gb, "level")
          }) && null !== (Hb = yb.s[lb]) && void 0 !== Hb ? Hb : null
        }(bb, Mb)), bb.watchPromptPick(ww);
        const Hb = "touch" === ww ? function(bb) {
          var wb;
          const Mb = bb.interactLabel;
          return Mb === hb.mc.Entity ? Mw(bb.promptEntity) : Mb === hb.mc.TameWith ? {
            label: (0, lb.C)(bb.tables.nameOfId(bb.interactIcon))
          } : null !== (wb = ew.get(Mb)) && void 0 !== wb ? wb : null
        }(bb) : Mw(bb.promptEntity);
        return this.target = (0, ob.m)(this.target, {
          interactPrompt: Hb,
          blockText: eb,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let pw = null;
    const Vw = {
      current: () => {
        var bb, wb;
        return null !== (bb = null === (wb = pw) || void 0 === wb ? void 0 : wb.target) && void 0 !== bb ? bb : bw
      },
      watch: bb => {
        const wb = new Hw;
        pw = wb;
        const Mb = (0, tb.h)((Mb => {
          let eb = wb.read(Mb);
          bb(eb);
          const Hb = (0, pb.x)((() => {
            const Hb = wb.read(Mb);
            Hb !== eb && (eb = Hb, bb(Hb))
          }));
          return () => {
            Hb(), Mb.watchPromptPick("off")
          }
        }));
        return () => {
          Mb(), pw === wb && (pw = null)
        }
      }
    };
    let gw = 0,
      lw = 0;
    const Lw = {
        health: lb.x,
        aura: lb.j,
        hotbar: kb.d.states.hotbar,
        heldItemAim: kb.d.states.heldItemAim,
        crouching: (0, tb.b)((bb => function(bb) {
          const wb = () => 0 !== (hb.q.playerFlags(bb.apiView, 0) & hb.Ad.Crouching);
          return {
            current: wb,
            watch(bb) {
              let Mb = wb();
              return (0, pb.w)((() => {
                const eb = wb();
                eb !== Mb && (Mb = eb, bb(eb))
              }))
            }
          }
        }(bb.api).current), !1, (bb => (0, pb.w)(bb))),
        flight: (0, tb.b)((bb => () => function(bb) {
          const wb = hb.q.playerFlags(bb.apiView, 0);
          return (0, lb.t)(0 !== (wb & hb.Ad.CanFly), 0 !== (wb & hb.Ad.Flying))
        }(bb.api)), (0, lb.t)(!1, !1), (bb => (0, pb.w)(bb))),
        gliderBoostFuel: (0, tb.b)((bb => () => hb.q.gliderBoostFuel(bb.api.apiView, 0)), 0, (bb => (0, pb.w)(bb))),
        crosshairTarget: Vw
      },
      Iw = {
        hotbarSlotRequested: kb.d.events.hotbarSlotRequested,
        hotbarScrolled: kb.d.events.hotbarScrolled,
        numberKeyPressed: kb.d.events.numberKeyPressed,
        shotDamageToShow: (0, lb.z)((bb => !0 === (0, Tb.e)(bb, "showDamageAmounts")))
      },
      Ow = {
        selectHotbarSlot: kb.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: bb => {
          ww = bb
        }
      },
      Uw = {
        momentumFrac: function() {
          var bb, wb, Mb;
          const eb = (0, Vb.m)(),
            Hb = performance.now(),
            pb = null === eb || void 0 === eb || null === (bb = eb.items.dg()) || void 0 === bb || null === (wb = bb.attributes) || void 0 === wb || null === (Mb = wb.customAttributes) || void 0 === Mb ? void 0 : Mb.enchantments;
          return gw = null !== eb && null !== pb && void 0 !== pb && pb.Momentum ? 0 !== (hb.q.playerFlags(eb.api.apiView, 0) & hb.Ad.Breaking) ? Math.max(0, hb.q.momentumFrac(eb.api.apiView, 0)) : Math.max(0, gw - (Hb - lw) / 1500) : 0, lw = Hb, gw
        }
      };
    var tw = Mb(42258);
    const Cw = {
      lobbyManage(bb) {
        var wb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.LobbyManage, bb)
      }
    };
    var Ew = Mb(1313),
      Fw = Mb(37781),
      Bw = Mb(10133),
      sw = Mb(1821),
      mw = Mb(3470),
      hw = Mb(5693);
    let zw = !1;

    function Xw(bb) {
      zw = bb
    }

    function xw() {
      "inGame" !== Nb.c.get("gameState") || (0, sw.u)() || Lb.k.iI("ctrlCrouchWithoutFullscreen")
    }
    let jw = !1;
    const Kw = {
        OpenEmoteWheel: () => {
          Xw(!0), jw = !0, queueMicrotask((() => {
            jw && (jw = !1, Lb.k.iI("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Lb.k.iI("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Fw.e)() || Lb.k.iI("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Fw.e)() || Lb.k.iI("XKeyPressed")
        },
        CtrlCrouch: xw,
        "primary-fire": () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      rw = {
        OpenEmoteWheel: () => {
          Xw(!1), jw ? (jw = !1, (0, Bw.b)() || Lb.k.iI("requestEmoteWheelHoldOpen")) : Lb.k.iI("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: xw,
        "primary-fire": () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Lb.k.iI("mouseState", {
            og: Ew.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Rw = !1;

    function Dw() {
      Rw || (Rw = !0, (0, hw.k)((bb => {
        if ((0, Hb.d)()) return;
        const wb = (0, hw.g)(bb) ? "primary-fire" : bb.action;
        var Mb;
        if (bb.down) {
          if (0 === (bb.flags & mw.b.Synthetic)) {
            var eb;
            null === (eb = Kw[wb]) || void 0 === eb || eb.call(Kw)
          }
        } else null === (Mb = rw[wb]) || void 0 === Mb || Mb.call(rw)
      })))
    }
    var Yw = Mb(366),
      Zw = Mb(110),
      fw = Mb(43),
      Aw = Mb(42561),
      Ww = Mb(1447),
      Jw = Mb(3496);
    let Sw = !1;
    const Nw = {
      sendCodeCollab(bb) {
        var wb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.CodeCollab, (0, Zb.l)(bb), (0, Jw.e)(bb))
      }
    };
    var vw = Mb(40427),
      Qw = Mb(10071);
    let Gw = null,
      qw = !1,
      aw = null;

    function iw() {
      return "inGame" === Nb.c.get("gameState") && !(0, Fw.e)()
    }
    const uw = {
        OpenInventory: bb => {
          (0, sw.A)(bb, "inventory", (0, tw.n)())
        },
        OpenShop: bb => {
          Gw && iw() && (0, sw.x)(bb, Yw.l.SHOP, !Gw.shopIsEmpty(mb.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: bb => {
          var wb, Mb;
          iw() && (0, sw.D)(bb, (0, vw.b)({
            lobbyLeaderboardInfo: mb.c.get("lobbyLeaderboardInfo"),
            lobbyManage: mb.c.get("lobbyManage")
          }), null !== (wb = null === (Mb = Gw) || void 0 === Mb ? void 0 : Mb.getClientGameLeaderboardKey()) && void 0 !== wb ? wb : null)
        },
        OpenTasksAndLeaderboard: bb => {
          var wb;
          const Mb = null === (wb = Gw) || void 0 === wb ? void 0 : wb.getClientGameMapKey();
          Mb ? (0, sw.G)(bb, !0, Mb) : (0, sw.A)(bb, "retentionFeatures", !(!mb.c.get("_tasks") && !mb.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: bb => {
          (0, sw.A)(bb, "inviteLink", Zw.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: bb => {
          iw() && function(bb) {
            const wb = (0, Vb.m)(),
              Mb = null !== wb && void 0 !== wb && wb.isSessionLive ? wb.api : null,
              eb = Mb ? Mb.Qm(Mb.localId) : null;
            (0, sw.G)(bb, null !== eb && (0, Jw.d)((0, Ww.e)()), (() => {
              (0, Jw.h)(eb)
            }))
          }(bb)
        },
        HideUi: () => {
          Lb.k.iI("showUi", !1)
        }
      },
      dw = {
        HideUi: () => {
          Lb.k.iI("showUi", !0)
        }
      };

    function Pw() {
      qw || (qw = !0, Mb.e(183).then((() => Mb(64384))).then((bb => {
        Gw = bb
      }), (bb => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", bb)
      })), (0, Aw.x)((bb => {
        bb || !(0, Aw.g)() || (0, Zw.isMobile)() || !fw.i.getItem("disableFullscreen") || (0, sw.q)() || Nb.c.set({
          openEverythingMenuName: Yw.l.SETTINGS
        })
      })), (0, hw.k)((bb => {
        let {
          action: wb,
          down: Mb,
          press: eb
        } = bb;
        var pb, Vb;
        (0, Hb.d)() || (Mb ? null === (pb = uw[wb]) || void 0 === pb || pb.call(uw, function(bb) {
          var wb;
          if (0 === bb || (null === (wb = aw) || void 0 === wb ? void 0 : wb.press) !== bb) {
            const wb = {
              press: bb,
              event: (0, Qw.b)("inputAction")
            };
            aw = wb, queueMicrotask((() => {
              aw === wb && (aw = null)
            }))
          }
          return aw.event
        }(eb)) : null === (Vb = dw[wb]) || void 0 === Vb || Vb.call(dw))
      })))
    }
    var nw = Mb(40332),
      yw = Mb(40321),
      ow = Mb(40313);
    const Tw = {
      completeTask(bb) {
        var wb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.CompleteTask, (0, Zb.o)(bb))
      },
      setServerCookie(bb) {
        var wb;
        let {
          key: Mb,
          value: eb
        } = bb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.GeneralCookieSet, (0, Zb.u)({
          LI: Mb,
          II: eb
        }))
      },
      answerUiRequest(bb) {
        var wb;
        let {
          id: Mb,
          eI: eb
        } = bb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.UiRequestResp, (0, Zb.U)({
          mV: Mb,
          hV: eb,
          zV: 5
        }))
      },
      chooseRewardedAd(bb) {
        var wb;
        let {
          id: Mb,
          eI: eb
        } = bb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.UiRequestResponded, (0, Zb.Q)({
          id: Mb,
          eI: eb
        }))
      },
      requestLeaderboard(bb) {
        var wb;
        let {
          category: Mb,
          timeframe: eb,
          seeTop: Hb
        } = bb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.LeaderboardRequest, {
          category: Mb,
          timeframe: eb,
          seeTop: Hb
        })
      }
    };
    let kw = !1;
    const bM = sb.e.yF / 2,
      wM = [bM, -bM, -bM, -bM, bM, bM, -bM, bM],
      MM = [0, 0, 0];

    function eM(bb, wb, Mb) {
      for (let eb = 0; eb < bb.length; eb += 2)
        if (bb[eb] === wb && bb[eb + 1] === Mb) return !0;
      return !1
    }
    const HM = {
      blocksStandingOn: function() {
        const bb = (0, Vb.m)();
        if (null === bb) return [];
        const {
          api: wb,
          chunks: Mb,
          tables: eb
        } = bb;
        if (!wb.readPosition(wb.localId, MM)) return [];
        const [Hb, pb, gb] = MM, lb = Math.ceil(pb) - 1, Lb = [], Ib = [];
        for (let Vb = 0; Vb < wM.length; Vb += 2) {
          const bb = Hb + wM[Vb],
            wb = gb + wM[Vb + 1];
          if (Number.isInteger(bb) || Number.isInteger(wb)) continue;
          const pb = Math.floor(bb),
            Ob = Math.floor(wb);
          if (eM(Ib, pb, Ob)) continue;
          const Ub = Mb.Lg(pb, lb, Ob);
          eb.isSolidBlockId(Ub) && (Ib.push(pb, Ob), Lb.push(eb.nameOfId(Ub)))
        }
        return Lb
      },
      dropAhead: function() {
        const bb = (0, Vb.m)();
        return null !== bb && 0 !== (hb.q.playerFlags(bb.api.apiView, 0) & hb.Ad.DropAhead)
      }
    };
    var pM = Mb(38160),
      VM = Mb(40397),
      gM = Mb(1504),
      lM = Mb(42324);
    const LM = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      IM = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function OM() {
      const bb = new Set;
      return {
        add: wb => (bb.add(wb), () => {
          bb.delete(wb)
        }),
        fire() {
          for (const wb of bb) wb()
        }
      }
    }
    const UM = Object.freeze([]);

    function tM(bb, wb) {
      let Mb, {
        rereads: eb,
        followLocalId: Hb
      } = wb;
      const Vb = () => (Mb = (0, ob.m)(Mb, bb()), Mb);
      return {
        current: Vb,
        watch(bb) {
          const wb = (0, Cb.d)((wb => {
            eb(wb) && bb(Vb())
          }));
          if (!Hb) return wb;
          let Mb = (0, tb.d)();
          const gb = (0, pb.x)((() => {
            const wb = (0, tb.d)();
            wb !== Mb && (Mb = wb, bb(Vb()))
          }));
          return () => {
            wb(), gb()
          }
        }
      }
    }
    const CM = {
        players: tM((function() {
          const bb = Cb.f.ids(),
            wb = {};
          for (const pb of bb) {
            var Mb, eb, Hb;
            wb[pb] = {
              name: null !== (Mb = Cb.f.getName(pb)) && void 0 !== Mb ? Mb : null,
              ranks: null !== (eb = Cb.f.getSetting(pb, "ranks")) && void 0 !== eb ? eb : UM,
              cosmetics: null !== (Hb = (0, Cb.h)(pb)) && void 0 !== Hb ? Hb : null
            }
          }
          return {
            ids: bb,
            byId: wb,
            localId: (0, tb.d)()
          }
        }), {
          rereads: bb => "roster" !== bb.kind || bb.members || bb.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: tM((function() {
          const bb = {};
          for (const Hb of Cb.f.ids()) {
            var wb, Mb, eb;
            bb[Hb] = {
              colour: null !== (wb = Cb.f.getSetting(Hb, "colorInLobbyLeaderboard")) && void 0 !== wb ? wb : null,
              values: null !== (Mb = Cb.f.getSetting(Hb, "lobbyLeaderboardValues")) && void 0 !== Mb ? Mb : null,
              tags: null !== (eb = Cb.f.getSetting(Hb, "lobbyLeaderboardTags")) && void 0 !== eb ? eb : null
            }
          }
          return bb
        }), {
          rereads: function(bb) {
            if ("roster" !== bb.kind) return "reset" === bb.kind;
            const {
              members: wb,
              settings: Mb
            } = bb;
            return wb || Mb.has("colorInLobbyLeaderboard") || Mb.has("lobbyLeaderboardValues") || Mb.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      EM = {
        cosmeticsUpdated: {
          watch: bb => (0, Cb.d)((wb => {
            if ("cosmetics" !== wb.kind) return;
            const Mb = (0, tb.d)();
            bb(wb.updates.map((bb => {
              let {
                VH: wb,
                gH: eb,
                lH: Hb
              } = bb;
              return {
                local: wb === Mb,
                gH: eb,
                lH: Hb
              }
            })))
          }))
        }
      };
    var FM = Mb(4155),
      BM = Mb(1965),
      sM = Mb(715),
      mM = Mb(42616);
    let hM = !1,
      zM = null;
    const XM = {
      setShopOpen(bb) {
        var wb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.ShopMenuChanged, (0, Zb.L)(bb))
      },
      buyShopItem(bb) {
        var wb;
        let {
          categoryKey: Mb,
          itemKey: eb,
          userInput: Hb
        } = bb;
        null === (wb = (0, Vb.m)()) || void 0 === wb || wb.send(Zb.c.ItemBought, {
          categoryKey: Mb,
          itemKey: eb,
          shopVersion: mb.c.get("_shopVersion"),
          userInput: Hb
        })
      }
    };
    let xM = !1;
    var jM = Mb(5706);
    const KM = mw.y.LookFrozen | mw.y.ClicksSuppressed;

    function rM(bb, wb) {
      var Mb;
      null !== (Mb = (0, Vb.m)()) && void 0 !== Mb && Mb.send(bb, wb) || console.warn(`[bloxd-wasm-client] message ${bb} not sent: no live game or the core's command ring is full`)
    }(0, Eb.m)(Yb.ab, (bb => {
      const wb = (0, fb.d)(Yb.ab, bb);
      void 0 !== wb && Lb.k.iI("setDiscordReportKey", wb)
    }));
    const RM = {
      ignorePlayer(bb) {
        rM(Zb.c.IgnoreUser, (0, Zb.x)({
          bI: bb
        }))
      },
      reportPlayer(bb) {
        let {
          playerId: wb,
          chatMsgId: Mb,
          contextChatMsgIds: eb,
          policy: Hb,
          details: pb
        } = bb;
        rM(Zb.c.UserReport, (0, Zb.db)({
          RI: wb,
          DI: Mb,
          policy: Hb,
          Ig: pb,
          cI: eb
        }))
      },
      reportWorldCodeChat(bb) {
        let {
          chatMsgId: wb,
          policy: Mb,
          details: eb
        } = bb;
        rM(Zb.c.UserReport, (0, Zb.db)({
          RI: "",
          DI: wb,
          policy: Mb,
          Ig: eb,
          cI: []
        }))
      },
      requestDiscordReportKey(bb) {
        rM(Zb.c.ReqDiscordReportKey, (0, Zb.J)(bb))
      },
      reportLobbyOrGame(bb) {
        let {
          target: wb,
          policy: Mb,
          details: eb
        } = bb;
        "customGame" === wb ? rM(Zb.c.CustomGameReport, (0, Zb.r)({
          policy: Mb,
          Ig: eb
        })) : rM(Zb.c.LobbyReport, (0, Zb.A)({
          policy: Mb,
          Ig: eb
        }))
      },
      updateMyCosmetic(bb) {
        rM(Zb.c.UpdateMyCosmetic, (0, Zb.bb)(bb))
      },
      holdEmoteWheel(bb) {
        !bb || zw ? (0, jM.h)(KM, bb ? KM : 0) : Lb.k.iI("requestEmoteWheelHoldRelease")
      }
    };
    var DM = Mb(42699),
      cM = Mb(5868),
      YM = Mb(41092);
    const ZM = [0, 0, 0],
      fM = [0, 0, 0],
      AM = [0, 0, 0],
      WM = {
        blockAtViewPoint(bb) {
          let {
            x: wb,
            y: Mb
          } = bb;
          const eb = (0, Vb.m)();
          if (null === eb || void 0 === eb || !eb.renderFrame.hasView) return null;
          const {
            renderFrame: Hb,
            clientApi: pb,
            api: gb
          } = eb;
          let lb = 0;
          return (0, YM.c)(((bb, wb, Mb) => (lb = pb.getBlockId(bb, wb, Mb), 0 !== lb)), Hb.cameraPosition, (0, YM.d)((bb => hb.q.viewProj(gb.apiView, 0, bb)), wb, Mb, ZM), YM.b, fM, AM) ? {
            pos: [fM[0], fM[1], fM[2]],
            normal: [AM[0], AM[1], AM[2]],
            name: (0, cM.f)(lb)
          } : null
        }
      },
      JM = {
        setBlockHighlight(bb) {
          var wb;
          null === (wb = (0, Vb.m)()) || void 0 === wb || wb.setBlockHighlight(bb)
        }
      };
    var SM = Mb(2150),
      NM = Mb(42606),
      vM = Mb(42705),
      QM = Mb(2187),
      GM = Mb(37705),
      qM = Mb(294);
    const aM = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      iM = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * aM.fallbackRem,
        asked: new Set
      },
      uM = 2e3,
      dM = 4;
    let PM = [],
      nM = !1,
      yM = !1,
      oM = !1;
    const TM = new Set,
      kM = [];
    let be = 0,
      we = null;

    function Me() {
      return nM && (0, GM.m)()
    }

    function ee() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.gameBridge.latest("inventory");
      if (oM && !yM) {
        for (const Mb of bb.player) {
          var wb;
          if (null !== Mb) He(null !== (wb = Mb.icon) && void 0 !== wb ? wb : Mb.name, aM)
        }
        for (const bb of [...hb.E, ...PM]) He(bb, iM);
        Ve()
      }
    }

    function He(bb, wb) {
      wb.asked.has(bb) || TM.has(bb) || ("model" === eb.gameBridge.lookup("itemIcon", bb).kind ? (wb.asked.add(bb), kM.push({
        name: bb,
        slot: wb
      })) : TM.add(bb))
    }

    function pe(bb) {
      PM = bb, ee()
    }

    function Ve() {
      !oM || yM || null !== we || 0 === kM.length || be >= dM || (we = (0, qM.b)((() => {
        we = null;
        const bb = kM.shift();
        void 0 !== bb && oM && (be++, async function(bb, wb) {
          var Mb, Hb;
          if (await (0, GM.u)(), !oM) return void wb.asked.delete(bb);
          if (!(0, GM.m)()) return void(yM = !0);
          const pb = window.devicePixelRatio,
            Vb = null !== (Mb = null === (Hb = document.querySelector(wb.icon)) || void 0 === Hb ? void 0 : Hb.getBoundingClientRect().width) && void 0 !== Mb ? Mb : 0,
            gb = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            lb = Math.round((Vb > 0 ? Vb : wb.fallbackRem * gb) * pb);
          try {
            await eb.gameBridge.query("blockIcon", {
              name: bb,
              size: lb,
              lineWidth: (0, QM.b)(pb)
            }) || wb.asked.delete(bb)
          } catch {
            wb.asked.delete(bb)
          }
        }(bb.name, bb.slot).finally((() => {
          be--, Ve()
        })), Ve())
      }), {
        timeoutMs: uM
      }))
    }
    var ge = Mb(5331),
      le = Mb(5310),
      Le = Mb(42714),
      Ie = Mb(4659),
      Oe = Mb(4662);
    let Ue = null,
      te = null;

    function Ce(bb) {
      const wb = bb.startsWith(Oe.l),
        [Mb, eb = Mb, Hb = Mb] = (wb ? bb.slice(Oe.l.length) : bb).split(Oe.j);
      return {
        top: Mb,
        left: eb,
        right: Hb,
        half: wb
      }
    }

    function Ee(bb) {
      const wb = null === Ue ? void 0 : (0, Ie.c)(bb),
        Mb = void 0 === wb ? 0 : Ue.codes[wb];
      return 0 === Mb ? void 0 : Ue.pool[Mb - 1]
    }
    var Fe = Mb(4653),
      Be = Mb(5300),
      se = Mb(5329),
      me = Mb(37530),
      he = Mb(37534);
    const ze = "item:";
    let Xe = null,
      xe = null,
      je = null,
      Ke = null,
      re = !1,
      Re = !1;

    function De() {
      return Re || (Re = !0, (0, se.s)().then((bb => {
        bb && (0, SM.d)()
      }))), je ??= Promise.all([(0, Fe.f)(), (te ??= Mb.e(1).then((() => Mb(64403))).then((bb => {
        let {
          BLOCK_FACE_RUNS: wb,
          BLOCK_FACES: Mb,
          MAX_FACE_ITEM_ID: eb
        } = bb;
        Ue = {
          codes: (0, Oe.D)(wb, eb + 1),
          pool: Mb.split(Oe.v).map(Ce)
        }
      }), (bb => {
        throw te = null, bb
      })), te), (0, he.g)(), Mb.e(225).then((() => Mb(35334)))]).then((bb => {
        let [, , wb, Mb] = bb;
        wb.followBundledTextures(), Xe = wb, xe = Mb, (0, SM.d)()
      }), (bb => {
        je = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", bb)
      })), je
    }

    function ce(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = (0, me.h)()) || void 0 === Mb ? void 0 : Mb.textureUrl(bb)) && void 0 !== wb ? wb : Xe.itemSpriteUrl(bb)
    }

    function Ye(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = (0, me.h)()) || void 0 === Mb ? void 0 : Mb.textureUrl(bb)) && void 0 !== wb ? wb : Xe.blockTextureUrl(bb)
    }

    function Ze(bb) {
      var wb;
      return null !== (wb = (0, Fe.e)(bb)) && void 0 !== wb ? wb : bb
    }

    function fe(bb, wb) {
      var Mb, eb, Hb;
      return null !== (Mb = null !== (eb = null !== (Hb = Ye(bb)) && void 0 !== Hb ? Hb : null === wb || void 0 === wb ? void 0 : wb.rotated[bb]) && void 0 !== eb ? eb : null === wb || void 0 === wb ? void 0 : wb.animated[bb]) && void 0 !== Mb ? Mb : Xe.notFoundUrl()
    }

    function Ae(bb) {
      return void 0 !== (0, Ie.c)(bb) ? bb : /^[1-9][0-9]*$/.test(bb) ? (0, Ie.g)(Number(bb)) : void 0
    }

    function We(bb) {
      var wb;
      if (bb.startsWith(ze)) {
        var Mb;
        const wb = (0, Fe.e)(bb.slice(5));
        return null !== (Mb = void 0 === wb ? null : ce(wb)) && void 0 !== Mb ? Mb : Xe.notFoundUrl()
      }
      return null !== (wb = Xe.particleUrl(bb)) && void 0 !== wb ? wb : Xe.notFoundUrl()
    }

    function Je(bb, wb) {
      return "StairsBlock" === bb ? bb : wb ? "SlabBlock" : "CubeBlock"
    }
    const Se = {
        async blockIcon(bb) {
          var wb;
          let {
            name: eb,
            size: Hb,
            lineWidth: pb
          } = bb;
          await De();
          const Vb = null !== (wb = Ae(eb)) && void 0 !== wb ? wb : eb,
            gb = (0, se.h)(Vb, Hb, pb);
          if (null !== gb) return gb;
          const lb = Ee(Vb),
            Lb = (0, Ie.c)(Vb),
            Ib = void 0 === Lb || null === xe ? void 0 : xe.itemTypeNameOf(Lb);
          if (null === Xe || void 0 === lb) return "";
          const Ob = [lb.top, lb.left, lb.right].some((bb => null === Ye(bb))),
            Ub = Ob ? await (Ke ??= Mb.e(235).then((() => Mb(35425))).then((bb => (re && (re = !1, (0, SM.d)()), {
              rotated: bb.rotatedBlockTextures,
              animated: bb.animatedBlockTextures
            })), (bb => (Ke = null, re = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", bb), null))), Ke) : null;
          if (Ob && null === Ub) return "";
          const tb = {
              top: fe(lb.top, Ub),
              left: fe(lb.left, Ub),
              right: fe(lb.right, Ub),
              itemType: Je(Ib, lb.half)
            },
            Cb = (0, me.f)(),
            Eb = 0 === Cb ? Vb : `${Vb}#${Cb}`;
          return (await (0, Be.c)()).drawBlockIconUrl(Eb, Hb, pb, (() => tb))
        }
      },
      Ne = {
        itemIcon: function(bb) {
          var wb, Mb, Hb, pb;
          if (null === Xe) return De(), eb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          if ((0, le.g)(bb)) return {
            kind: "icon",
            url: null !== (Mb = null !== (Hb = null === (pb = (0, me.h)()) || void 0 === pb ? void 0 : pb.textureUrl(bb)) && void 0 !== Hb ? Hb : Xe.ingameIconUrl(bb)) && void 0 !== Mb ? Mb : Xe.notFoundUrl()
          };
          if (bb.startsWith(le.c)) return {
            kind: "icon",
            url: We(bb.slice(le.c.length))
          };
          if (0 === (0, Ie.i)()) return (0, Le.d)(), eb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(bb);
          const Vb = null !== (wb = Ae(bb)) && void 0 !== wb ? wb : bb,
            gb = (0, Ie.c)(Vb),
            lb = void 0 === gb ? void 0 : xe.itemTypeNameOf(gb);
          if (void 0 !== Ee(Vb)) return {
            kind: "drawnBlock"
          };
          const Lb = function(bb) {
            var wb;
            return null !== (wb = ce(Ze(bb))) && void 0 !== wb ? wb : Xe.notFoundUrl()
          }(Vb);
          if ((0, se.o)(Vb) && ! function(bb) {
              const wb = (0, me.h)();
              return null !== wb && (null !== wb.textureUrl(Ze(bb)) || (0, se.d)(bb).some((bb => null !== wb.modelUrl(bb))))
            }(Vb)) return {
            kind: "model",
            url: Lb,
            drawn: (0, se.l)(Vb)
          };
          if ("Gun" === lb) return {
            kind: "gun",
            url: Lb
          };
          if (void 0 !== gb && "GrayscaleArmour" === xe.itemTypeOf(gb) || Object.hasOwn(ge.b, Vb)) {
            var Ib;
            const wb = null !== (Ib = (0, ge.c)(bb)) && void 0 !== Ib ? Ib : (0, ge.c)(Vb);
            if (wb) return {
              kind: "item",
              url: Lb,
              tint: wb
            }
          }
          return {
            kind: "item",
            url: Lb
          }
        },
        hasIcon: function(bb) {
          return void 0 !== Ae(bb) || (0, le.g)(bb) || bb.startsWith(le.c)
        },
        isItemName: function(bb) {
          return void 0 !== Ae(bb)
        }
      };

    function ve() {
      (0, eb.installPageSources)({
        commands: {
          ...eb.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: NM.n,
          prewarmCreativeIcons: pe
        },
        queries: Se,
        lookups: {
          ...eb.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Ne,
          FX: NM.e,
          drawCallStats: vM.g,
          iconsDrawAhead: Me
        }
      }), (0, SM.d)(), De(), nM || (nM = !0, Lb.k.subscribe("gameJoined", (() => {
        var bb;
        oM = !1, null === (bb = we) || void 0 === bb || bb(), we = null;
        for (const {
            name: wb,
            slot: Mb
          }
          of kM.splice(0)) Mb.asked.delete(wb)
      })), Lb.k.subscribe("gamePlayable", (() => {
        oM = !0, ee()
      })), eb.gameBridge.subscribe("inventory", ee), eb.gameBridge.subscribe("itemIconsVersion", (() => {
        TM.clear(), ee()
      })))
    }
    var Qe = Mb(648),
      Ge = Mb(41098);

    function qe(bb) {
      if (null === bb || void 0 === bb || !bb.isCoreRunning) return null;
      const {
        api: wb,
        chunks: Mb,
        items: eb,
        tables: Hb
      } = bb;
      return {
        playerFeet() {
          const bb = wb.Qm(wb.localId);
          return null !== bb && void 0 !== bb && bb.every(Number.isFinite) ? bb : null
        },
        chunkBlocks: bb => Mb.isLoaded(bb[0], bb[1], bb[2]) ? (bb, wb, eb) => Mb.Lg(bb, wb, eb) : null,
        blockName: bb => Hb.nameOfId(bb),
        inventory: () => ({
          slots: eb.playerItems().map((bb => bb ? {
            name: bb.name,
            amount: bb.amount
          } : null)),
          heldSlot: eb.selectedSlot
        }),
        nearby() {
          const Mb = [];
          for (let Hb = 0; Hb < wb.idStr.length; Hb++) {
            var eb;
            const pb = wb.idStr[Hb],
              Vb = wb.serverIds[Hb],
              gb = wb.kinds[Hb];
            if (null === pb || wb.isLocal(Vb) || gb >>> hb.b !== hb.o.Lifeform) continue;
            const lb = wb.Qm(Vb),
              Lb = Qe.j[gb & hb.d];
            lb && void 0 !== Lb && Mb.push({
              kind: "Player" === Lb ? "player" : Lb,
              name: null !== (eb = bb.clientApi.getEntityName(pb)) && void 0 !== eb ? eb : null,
              position: lb
            })
          }
          return Mb
        },
        droppedItems() {
          let bb = 0;
          for (let Mb = 0; Mb < wb.idStr.length; Mb++) null !== wb.idStr[Mb] && wb.kinds[Mb] >>> hb.b === hb.o.Item && bb++;
          return bb
        }
      }
    }
    const ae = {
        worldCodeAiChunk: bb => Promise.resolve((0, Ge.d)(qe((0, Vb.m)()), bb)),
        worldCodeAiGameState: () => Promise.resolve((0, Ge.e)(qe((0, Vb.m)())))
      },
      ie = function(bb) {
        const wb = OM(),
          eb = OM(),
          Hb = new Set,
          pb = new Set,
          Vb = () => {
            var wb, Mb;
            return null !== (wb = null === (Mb = bb.runtime()) || void 0 === Mb ? void 0 : Mb.currentViewer) && void 0 !== wb ? wb : null
          };
        let gb = null,
          lb = null;
        const Ib = (bb, wb) => ({
            current: bb,
            watch(Mb) {
              let eb = bb();
              return wb.add((() => {
                const wb = bb();
                wb !== eb && (eb = wb, Mb(wb))
              }))
            }
          }),
          Ub = bb => ({
            watch: wb => (bb.add(wb), () => {
              bb.delete(wb)
            })
          }),
          tb = bb => {
            const wb = Vb(),
              Mb = null === wb || void 0 === wb ? void 0 : wb.view;
            wb && Mb && wb.seek(Math.max(0, Math.min(Mb.totalTicks - 1, Mb.sO + bb * Ob.Bd)))
          },
          Cb = {
            replay: Ib((() => {
              var bb;
              const wb = Vb(),
                Mb = null !== (bb = null === wb || void 0 === wb ? void 0 : wb.view) && void 0 !== bb ? bb : null;
              return null === wb || null === Mb || Mb.state === Ob.md.None ? (gb = null, null) : (gb = (0, ob.m)(gb, {
                id: wb.id,
                sO: Mb.sO,
                totalTicks: Mb.totalTicks,
                gJ: Ob.Bd,
                playing: Mb.state === Ob.md.Playing,
                speed: Mb.speed,
                cameraMode: Mb.cameraMode,
                freecam: "freecam" === Mb.cameraMode
              }), gb)
            }), wb),
            replayEdits: Ib((() => {
              var bb;
              const wb = Vb(),
                Mb = null !== (bb = null === wb || void 0 === wb ? void 0 : wb.view) && void 0 !== bb ? bb : null;
              return null === wb || null === Mb || Mb.state === Ob.md.None ? (lb = null, null) : (lb = (0, ob.m)(lb, {
                cameraKeyframes: [...wb.keyframes],
                playbackMark: Mb.mark,
                fileName: wb.fileName,
                unsavedChanges: wb.unsavedChanges,
                suggestSaveAs: wb.suggestSaveAs
              }), lb)
            }), wb),
            replayRecorder: Ib((() => {
              var wb, Mb;
              return null !== (wb = null === (Mb = bb.runtime()) || void 0 === Mb ? void 0 : Mb.recorder.current) && void 0 !== wb ? wb : lM.e.states.replayRecorder.current()
            }), eb),
            replayVideoExporting: {
              current: VM.c,
              watch: bb => (0, Lb.o)("replayViewer|videoExportChanged", (() => {
                bb((0, VM.c)())
              }))
            }
          },
          Eb = {
            replayUiActionRequested: Ub(pb),
            replayViewerRequested: Ub(Hb)
          },
          Fb = bb => {
            for (const wb of Hb) wb(bb)
          },
          Bb = () => {
            var eb;
            !0 === (null === (eb = Vb()) || void 0 === eb ? void 0 : eb.isOpen) && Promise.all([Mb.e(113), Mb.e(79)]).then((() => Mb(64388))).then((Mb => {
              let {
                startWasmReplayVideoExport: eb
              } = Mb;
              return eb({
                viewer: Vb,
                canvas: () => {
                  var wb, Mb;
                  return null !== (wb = null === (Mb = bb.canvas) || void 0 === Mb ? void 0 : Mb.call(bb)) && void 0 !== wb ? wb : null
                },
                watchViewer: wb.add,
                requestViewer: Fb
              })
            }), (bb => {
              console.error("Couldn't load the video export", bb), gM.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((bb => {
              console.error("The video export failed", bb)
            }))
          },
          sb = {
            replayAction(bb) {
              if ((0, VM.c)()) return;
              const wb = Vb();
              switch (bb) {
                case "replaySkipBack":
                  tb(-1);
                  break;
                case "replaySkipForward":
                  tb(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== wb && void 0 !== wb && wb.view && wb.setSpeed((0, pM.i)(wb.view.speed, "replaySpeedUp" === bb ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === wb || void 0 === wb || wb.addKeyframe()
              }
            },
            setReplayPlaying(bb) {
              var wb, Mb;
              (0, VM.c)() || (bb ? null === (wb = Vb()) || void 0 === wb || wb.play() : null === (Mb = Vb()) || void 0 === Mb || Mb.pause())
            },
            seekReplay(bb) {
              var wb;
              let {
                sO: Mb,
                ignorePlaybackMark: eb
              } = bb;
              null === (wb = Vb()) || void 0 === wb || wb.seek(Mb, null !== eb && void 0 !== eb && eb)
            },
            setReplayCameraMode(bb) {
              var wb;
              null === (wb = Vb()) || void 0 === wb || wb.setCameraMode(bb)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(bb) {
              var wb;
              null === (wb = Vb()) || void 0 === wb || wb.setKeyframe(bb)
            },
            moveReplayCameraKeyframe(bb) {
              var wb;
              let {
                from: Mb,
                to: eb
              } = bb;
              null === (wb = Vb()) || void 0 === wb || wb.moveKeyframe(Mb, eb)
            },
            deleteReplayCameraKeyframes(bb) {
              var wb;
              let {
                start: Mb,
                end: eb
              } = bb;
              null === (wb = Vb()) || void 0 === wb || wb.deleteKeyframes(Mb, eb)
            },
            setReplayPlaybackMark(bb) {
              var wb;
              null === (wb = Vb()) || void 0 === wb || wb.setMark(bb)
            },
            cropReplay(bb) {
              var wb, Mb;
              let {
                start: eb,
                end: Hb
              } = bb;
              return !(0, VM.c)() && (null !== (wb = null === (Mb = Vb()) || void 0 === Mb ? void 0 : Mb.crop(eb, Hb)) && void 0 !== wb && wb)
            },
            holdReplayForShaderPackFailure(bb) {
              const wb = Vb();
              wb && (wb.holdForShaderPackFailure(), function(bb) {
                Mb.e(138).then((() => Mb(40569))).then((wb => {
                  let {
                    shaderPackPage: Mb
                  } = wb;
                  Mb.block(bb)
                })).catch((bb => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", bb)
                }))
              }(bb))
            },
            exportReplayVideo() {
              Bb()
            },
            toggleRecording() {
              var wb;
              null === (wb = bb.runtime()) || void 0 === wb || wb.recorder.toggleRecording()
            },
            saveClip() {
              var wb;
              null === (wb = bb.runtime()) || void 0 === wb || wb.recorder.saveClip()
            },
            setRecorderPrefs(wb) {
              var Mb;
              let {
                clipping: eb,
                clipSeconds: Hb
              } = wb;
              null === (Mb = bb.runtime()) || void 0 === Mb || Mb.recorder.setPrefs(eb, Hb)
            },
            setReplayViewerOpen(wb) {
              var Mb;
              (0, Fw.f)(wb) && (null === (Mb = bb.runtime()) || void 0 === Mb || Mb.recorder.viewerShown(wb))
            },
            recordFlyingMiddleText(wb) {
              var Mb;
              let {
                content: eb,
                Pp: Hb,
                angle: pb,
                np: Vb
              } = wb;
              null === (Mb = bb.runtime()) || void 0 === Mb || Mb.recorder.recordFlyingText(JSON.stringify(eb), Hb, pb, Vb)
            },
            dragReplayCamera(wb) {
              var Mb;
              let {
                dx: eb,
                dy: Hb
              } = wb;
              null === (Mb = bb.freecam()) || void 0 === Mb || Mb.drag(eb, Hb)
            },
            moveReplayFreecam(wb) {
              var Mb;
              null === (Mb = bb.freecam()) || void 0 === Mb || Mb.move(wb)
            },
            holdReplayFreecamVertical(wb) {
              var Mb;
              let {
                action: eb,
                dg: Hb
              } = wb;
              null === (Mb = bb.freecam()) || void 0 === Mb || Mb.holdVertical(eb, Hb)
            }
          },
          mb = bb => {
            var wb;
            const Mb = Vb(),
              eb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.view) && void 0 !== wb ? wb : null;
            LM.has(bb) ? (bb => {
              for (const wb of pb) wb(bb)
            })(bb) : IM.has(bb) ? sb.replayAction(bb) : "replayPlayPause" === bb ? Mb && eb && eb.state !== Ob.md.None && sb.setReplayPlaying(eb.state !== Ob.md.Playing) : "replayChangeCameraMode" === bb ? null === Mb || void 0 === Mb || Mb.cycleCameraMode() : "replayExit" === bb ? !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.inPlayback) && (0, Ww.k)("/") : "replayExportVideo" === bb && Bb()
          };
        let hb = !1;
        return {
          states: Cb,
          events: Eb,
          commands: sb,
          lookups: {
            replayCamera() {
              var wb, Mb, eb;
              return !0 !== (null === (wb = Vb()) || void 0 === wb ? void 0 : wb.isOpen) ? null : null !== (Mb = null === (eb = bb.cameraView) || void 0 === eb ? void 0 : eb.call(bb)) && void 0 !== Mb ? Mb : null
            },
            leaveGameReloadsPage() {
              var bb;
              return !0 === (null === (bb = Vb()) || void 0 === bb ? void 0 : bb.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var bb;
              const Mb = !0 === (null === (bb = Vb()) || void 0 === bb ? void 0 : bb.inPlayback);
              Mb !== hb && (hb = Mb, Lb.k.iI("connectedGameChanged")), wb.fire()
            },
            recorderChanged: eb.fire,
            keyDown: bb => {
              var wb;
              switch (bb) {
                case "recordGame":
                  return void sb.toggleRecording();
                case "recordClip":
                  return void((0, Fw.e)() || sb.saveClip())
              }(0, VM.c)() || ("replayViewerOpen" !== bb ? bb.startsWith("replay") && ((0, Fw.e)() || !0 === (null === (wb = Vb()) || void 0 === wb ? void 0 : wb.inPlayback)) && mb(bb) : Fb("toggle"))
            }
          }
        }
      }({
        runtime: Hb.m,
        cameraView: () => {
          var bb;
          const wb = null === (bb = (0, Vb.m)()) || void 0 === bb ? void 0 : bb.renderFrame;
          if (!wb) return null;
          const [Mb, eb, Hb] = wb.cameraPosition, [pb, gb, lb] = wb.cameraDirection;
          return {
            position: [Mb, eb, Hb],
            direction: [pb, gb, lb]
          }
        },
        canvas: () => {
          var bb, wb, Mb;
          return null !== (bb = null === (wb = (Mb = (0, pb.O)()).canvas) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : null
        },
        freecam: Hb.i
      }),
      ue = {
        states: {
          ...Lw,
          ...tw.m,
          ...ie.states,
          ...CM,
          ...Gb
        },
        events: {
          ...Iw,
          ...Fb,
          ...tw.f,
          ...rb.e,
          ...DM.f,
          ...ie.events,
          ...EM,
          ...Kb.k
        },
        commands: {
          ...jb,
          ...Ow,
          ...Bb,
          ...tw.c,
          ...Tw,
          ...RM,
          ...Kb.g,
          ...Nw,
          ...ie.commands,
          ...XM,
          ...qb,
          ...JM,
          ...Cw
        },
        queries: {
          ...tw.j,
          ...ae
        },
        lookups: {
          ...Uw,
          ...Wb,
          ...DM.j,
          ...ie.lookups,
          ...xb,
          ...HM,
          ...WM,
          ...ab
        }
      };

    function de() {
      (0, gb.d)(Eb.p), (0, Hb.o)(ie.feed), (0, rb.f)(), kw || (kw = !0, (0, Eb.m)(Yb.j, (bb => {
        const wb = (0, fb.d)(Yb.j, bb);
        "string" === typeof wb && Promise.resolve().then((() => Mb(5030))).then((bb => {
          let {
            onCosmeticPackGranted: Mb
          } = bb;
          Mb(wb)
        }))
      })), (0, Eb.m)(Yb.Y, (bb => {
        const wb = (0, fb.d)(Yb.Y, bb);
        "number" === typeof wb && Lb.k.iI("serverUpdating", Date.now() + wb, !0)
      })), (0, Eb.m)(Yb.F, (bb => {
        const wb = (0, fb.d)(Yb.F, bb);
        if ((0, fb.c)(wb)) {
          const {
            Lp: bb,
            Ip: Mb
          } = wb;
          (0, yw.b)({
            Lp: "string" === typeof bb ? bb : null,
            Ip: "string" === typeof Mb ? Mb : null
          })
        }
      })), (0, Eb.m)(Ib.nc.NewUiRequest, (bb => {
        const wb = (0, fb.g)(bb);
        (0, fb.c)(wb) && "number" === typeof wb.id && (0, fb.c)(wb.clientParameters) && (0, ow.e)(wb.id, wb.clientParameters)
      })), (0, Eb.m)(Yb.S, (bb => {
        const wb = (0, fb.d)(Yb.S, bb);
        "number" === typeof wb && (0, ow.h)(wb)
      })), (0, Eb.i)(ow.d), (0, Eb.m)(Ib.nc.UiRequestPopup, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb) && "number" === typeof wb.id && ("string" === typeof wb.text || (0, fb.c)(wb.text) && "string" === typeof wb.text.translationKey)) {
          const bb = wb.id;
          (0, ow.k)(bb, wb.text, !0 === wb.destructive, (wb => {
            Tw.answerUiRequest({
              id: bb,
              eI: wb
            })
          }))
        }
      })), (0, Eb.m)(Ib.nc.TopRightHelper, (bb => {
        const wb = (0, fb.g)(bb);
        void 0 !== wb && Lb.k.iI("TopRightHelper", wb, !0)
      })), (0, Eb.m)(Ib.nc.TaskProgress, (bb => {
        const wb = (0, fb.g)(bb);
        (0, fb.c)(wb) && "string" === typeof wb.taskId && "number" === typeof wb.progress && (0, nw.c)({
          taskId: wb.taskId,
          progress: wb.progress
        })
      }))), xM || (xM = !0, (0, Eb.m)(Yb.r, (bb => {
        const wb = (0, fb.d)(Yb.r, bb);
        (0, fb.c)(wb) && Lb.k.iI("showShopFromServer", {
          toggle: wb.Yw,
          Zw: wb.Zw
        }, !0)
      })), (0, Eb.m)(Ib.nc.OverShopInfo, (bb => {
        const wb = (0, fb.g)(bb);
        (0, fb.c)(wb) && Lb.k.iI("overShopInfo", wb.info, !0)
      })), (0, Eb.m)(Ib.nc.ShowShopTutorial, (() => {
        Lb.k.iI("showShopTutorial", null, !0)
      }))), hM || (hM = !0, (0, Eb.f)((() => {
        var bb;
        (0, FM.resetLeaveEvents)(), null === (bb = zM) || void 0 === bb || bb(), zM = (0, Eb.e)() ? (0, sM.onVisitSessionGameServerConnected)(Eb.e) : null, (0, Eb.e)() || Lb.k.uB()
      })), (0, Eb.m)(Ib.nc.SetCookie, (bb => {
        const wb = (0, fb.g)(bb),
          Mb = (0, Ww.e)().gameNameWithVariation;
        (0, fb.c)(wb) && "string" === typeof wb.key && null !== Mb && (0, BM.setCookie)(Mb, wb.key, wb.value)
      })), (0, Eb.m)(Ib.nc.LeaveValues, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb) && "string" === typeof wb.leaveEventType) {
          const {
            leaveEventType: bb,
            category: Mb,
            subCategory: eb,
            value: Hb
          } = wb;
          (0, FM.updateLeaveValue)({
            leaveEventType: bb,
            category: Mb,
            subCategory: eb,
            value: Hb
          })
        }
      })), (0, Eb.m)(Ib.nc.CustomAnalyticsEvent, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb) && "string" === typeof wb.cat1) {
          const {
            cat1: bb,
            cat2: Mb,
            cat3: eb,
            value: Hb
          } = wb;
          (0, FM.logCustomAnalyticsEvent)({
            cat1: bb,
            cat2: Mb,
            cat3: eb,
            value: Hb
          })
        }
      })), (0, Eb.m)(Ib.nc.ProgressionEvent, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb)) {
          const {
            type: bb,
            location1: Mb,
            location2: eb,
            location3: Hb,
            score: pb
          } = wb;
          (0, FM.logProgressionEvent)({
            type: bb,
            location1: Mb,
            location2: eb,
            location3: Hb,
            score: pb
          })
        }
      })), (0, Eb.m)(Ib.nc.ResourceEvent, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb)) {
          const {
            type: bb,
            resourceType: Mb,
            amount: eb,
            category: Hb,
            itemName: pb
          } = wb;
          (0, FM.logResourceEvent)({
            type: bb,
            resourceType: Mb,
            amount: eb,
            category: Hb,
            itemName: pb
          })
        }
      })), (0, Eb.m)(Ib.nc.LeaderboardResponse, (bb => {
        const wb = (0, fb.g)(bb);
        if ((0, fb.c)(wb)) {
          const {
            category: bb,
            timeframe: Mb,
            data: eb
          } = wb;
          Lb.k.iI("leaderboardResponse", {
            category: bb,
            timeframe: Mb,
            data: eb
          })
        }
      })), (0, Eb.m)(Yb.y, (bb => {
        const wb = (0, fb.d)(Yb.y, bb);
        "string" === typeof wb && (0, mM.c)(bb.conn, wb)
      })), (0, Eb.m)(Yb.B, (bb => {
        const wb = (0, fb.d)(Yb.B, bb);
        "string" === typeof wb && console.error(`[logErrorToConsole]: ${wb}`)
      }))), Sb(), (0, DM.b)(), Sw || (Sw = !0, (0, Eb.m)(Yb.h, (bb => {
        const wb = (0, fb.d)(Yb.h, bb);
        void 0 !== wb && (0, Jw.l)(wb)
      }))), Pw(), Dw(), db || (db = !0, (0, pb.w)(Pb)), eb.gameBridge.attach(ue), ve()
    }
  },
  37534: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb
    });
    var eb = Mb(37539);
    let Hb = null,
      pb = null;

    function Vb() {
      return Hb ??= Mb.e(74).then((() => Mb(42864))).catch((bb => {
        throw Hb = null, bb
      })), Hb
    }

    function gb() {
      return pb ??= Promise.all([Vb(), (0, eb.h)()]).then((bb => {
        let [wb] = bb;
        return wb
      }), (bb => {
        throw pb = null, bb
      })), pb
    }
  },
  37707: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = {
      wait: function(bb) {
        return new Promise((wb => {
          setTimeout(wb, bb)
        }))
      },
      stallMs: 2e4
    };
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb;
        this.url = bb, this.options = wb, this.timing = Mb, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = bb
      }
      ready() {
        if (null === this.fetched) {
          const bb = new AbortController;
          this.fetchAbort = bb, this.fetched = this.fetchWithRetries(bb.signal).then((wb => (this.fetchAbort === bb && (this.fetchAbort = null), wb)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(bb) {
        for (let wb = 0;; wb++) {
          const Mb = new URL(this.url);
          if (wb > 0 && Mb.searchParams.set("cache-bust", `${Date.now()}-${wb}`), await this.fetchWhole(Mb, bb)) return this.scriptUrl = Mb, !0;
          if (wb >= 3 || bb.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** wb), bb.aborted) return !1
        }
      }
      async fetchWhole(bb, wb) {
        const Mb = new AbortController;
        let eb;
        const Hb = () => {
            clearTimeout(eb), eb = setTimeout((() => {
              Mb.abort()
            }), this.timing.stallMs)
          },
          pb = () => {
            Mb.abort()
          };
        wb.addEventListener("abort", pb, {
          once: !0
        }), Hb();
        try {
          var Vb;
          const wb = await fetch(bb, {
            signal: Mb.signal
          });
          if (!wb.ok) return !1;
          const eb = null === (Vb = wb.body) || void 0 === Vb ? void 0 : Vb.getReader();
          if (!eb) return !1;
          for (;;) {
            const {
              done: bb
            } = await eb.read();
            if (bb) return !0;
            Hb()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(eb), wb.removeEventListener("abort", pb)
        }
      }
    }
  },
  38258: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
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
  40348: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      e: () => Hb
    });
    const eb = ["description", "label"];

    function Hb(bb) {
      const wb = bb.type;
      return {
        type: wb,
        params: bb[wb]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);