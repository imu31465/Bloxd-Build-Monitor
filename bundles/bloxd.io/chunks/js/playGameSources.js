export const id = 47;
export const ids = [47];
export const modules = {
  39842: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => jt,
      g: () => Dt,
      k: () => qt
    });
    const Ot = 6e3;

    function qt(tt, et) {
      return [Math.floor(tt[0] / et) * et, Math.floor(tt[1] / et) * et, Math.floor(tt[2] / et) * et]
    }

    function Dt(tt) {
      const et = (null !== tt && void 0 !== tt ? tt : "").match(/-?\d+(?:\.\d+)?/g);
      return et && et.length >= 3 ? [Number(et[0]), Number(et[1]), Number(et[2])] : null
    }

    function mt(tt, et) {
      return tt === et ? String(tt) : `${tt}-${et}`
    }

    function dt(tt, et, Vt, Ot) {
      const qt = [];
      let Dt = new Map;
      for (let mt = tt[2]; mt < tt[2] + et; mt++) {
        const dt = new Map;
        let jt = tt[0];
        for (; jt < tt[0] + et;) {
          const qt = Ot(jt, Vt, mt);
          let Ht = jt;
          for (; Ht + 1 < tt[0] + et && Ot(Ht + 1, Vt, mt) === qt;) Ht++;
          if (null !== qt) {
            const tt = `${jt} ${Ht} ${qt}`,
              et = Dt.get(tt);
            et ? (et.z1 = mt, Dt.delete(tt), dt.set(tt, et)) : dt.set(tt, {
              x0: jt,
              x1: Ht,
              z0: mt,
              z1: mt,
              name: qt
            })
          }
          jt = Ht + 1
        }
        qt.push(...Dt.values()), Dt = dt
      }
      return qt.push(...Dt.values()), qt.sort(((tt, et) => tt.z0 - et.z0 || tt.x0 - et.x0)).map((tt => `x${mt(tt.x0,tt.x1)} z${mt(tt.z0,tt.z1)} ${tt.name}`))
    }

    function jt(tt, et, Vt, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ot;
      const jt = [tt[0] + et - 1, tt[1] + et - 1, tt[2] + et - 1],
        Ht = null !== qt && qt.every(((et, Vt) => Math.floor(et) >= tt[Vt] && Math.floor(et) <= jt[Vt])),
        Xt = [`The chunk from ${tt.join(" ")} to ${jt.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== qt && Xt.push(`The player's feet are at ${qt.map(Math.floor).join(" ")}, ${Ht?"in this chunk":"outside this chunk"}.`);
      const Qt = [];
      for (let Ot = tt[1]; Ot <= jt[1]; Ot++) {
        const qt = dt(tt, et, Ot, Vt).join("; "),
          Dt = Qt[Qt.length - 1];
        (null === Dt || void 0 === Dt ? void 0 : Dt.boxes) === qt ? Dt.to = Ot : Qt.push({
          from: Ot,
          to: Ot,
          boxes: qt
        })
      }
      const lt = Qt.filter((tt => "" !== tt.boxes));
      0 === lt.length && Xt.push("It is all air.");
      let Et = Xt.join("\n").length;
      for (const Ot of lt) {
        const tt = `y${mt(Ot.from,Ot.to)}: ${Ot.boxes}`;
        if (Et += tt.length + 1, Et > Dt) {
          Xt.push(`Cut short: the layers from y${Ot.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Xt.push(tt)
      }
      return Xt.join("\n")
    }
  },
  9032: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(26);

    function qt() {
      return !Ot.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37185: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      f: () => Dt,
      i: () => qt
    });
    const Ot = [.25, .5, 1, 2, 4, 8, 16];

    function qt(tt, et) {
      const Vt = Ot;
      let qt = Vt.indexOf(tt);
      return -1 === qt && (qt = Vt.findIndex((et => et >= tt)), -1 === qt && (qt = Vt.length - 1)), "up" === et ? Vt[Math.min(qt + 1, Vt.length - 1)] : Vt[Math.max(qt - 1, 0)]
    }

    function Dt(tt) {
      return tt <= Ot[0]
    }

    function mt(tt) {
      return tt >= Ot[Ot.length - 1]
    }
  },
  39288: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => mt
    });
    var Ot = Vt(31);
    let qt = !1;

    function Dt() {
      return qt
    }

    function mt(tt) {
      qt !== tt && (qt = tt, Ot.j.sw("replayViewer|videoExportChanged"))
    }
  },
  36745: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    let Ot = !1;

    function qt() {
      return Ot
    }

    function Dt(tt) {
      return Ot !== tt && (Ot = tt, !0)
    }
  },
  39221: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(31),
      qt = Vt(2043);

    function Dt(tt) {
      let {
        taskId: et,
        progress: Vt
      } = tt;
      const Ot = qt.b.get("_tasks");
      null !== Ot && void 0 !== Ot && Ot[et] && qt.b.apply({
        _tasks: {
          ...Ot,
          [et]: {
            ...Ot[et],
            progress: Vt
          }
        }
      })
    }
    Ot.j.subscribe("clientTaskProgress", (tt => {
      Dt(tt)
    }))
  },
  39819: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      e: () => ft,
      i: () => Ht,
      j: () => Qt,
      l: () => jt,
      p: () => mt,
      t: () => Xt,
      v: () => wt
    });
    var Ot = Vt(2043),
      qt = Vt(31),
      Dt = Vt(2054);
    const mt = (0, Dt.l)((function() {
        var tt, et, Vt, qt;
        return {
          health: null !== (tt = Ot.b.get("_health")) && void 0 !== tt ? tt : null,
          maxHealth: null !== (et = Ot.b.get("_totalMaxHealth")) && void 0 !== et ? et : null,
          shield: null !== (Vt = Ot.b.get("_shield")) && void 0 !== Vt ? Vt : null,
          maxShield: null !== (qt = Ot.b.get("maxShield")) && void 0 !== qt ? qt : null
        }
      }), [], (0, Dt.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      dt = [{
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

    function jt(tt, et) {
      return dt[(tt ? 2 : 0) + (et ? 1 : 0)]
    }
    const Ht = (0, Dt.l)((function() {
      var tt;
      return null !== (tt = Ot.b.get("_aura")) && void 0 !== tt ? tt : null
    }), [], (0, Dt.k)("_aura"));

    function Xt(tt) {
      return {
        watch: et => (0, qt.n)("shotPlayer", (Vt => {
          let {
            playerId: Ot,
            damage: qt,
            wasCrit: Dt,
            distance: mt
          } = Vt;
          tt(Ot) && et({
            damage: qt,
            wasCrit: Dt,
            distance: mt
          })
        }))
      }
    }

    function Qt(tt) {
      return (0, Dt.d)("chat", (et => {
        let {
          serverChatMsgId: Vt,
          content: Ot,
          chatterEId: qt
        } = et;
        return {
          serverChatMsgId: null !== Vt && void 0 !== Vt ? Vt : null,
          content: Ot,
          author: qt ? tt(qt) : null
        }
      }))
    }
    class lt {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Vt = this.shown;
        return tt !== this.needed && (this.needed = tt, this.neededSince = et, null === tt && (this.shown = null)), this.shown !== this.needed && et - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Vt
      }
    }

    function Et(tt) {
      return [{
        translationKey: `touchKeys:${tt}`
      }]
    }
    const ft = {
      open: Et("open"),
      close: Et("close"),
      milk: Et("milk"),
      shear: Et("shear"),
      tame: Et("tame"),
      feed: Et("feed"),
      ride: Et("ride")
    };

    function wt(tt) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: tt
      }]
    }
  },
  41239: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      i: () => mt
    });
    var Ot = Vt(3349);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Vt.e(216).then((() => Vt(36551))).then((tt => {
        let {
          ITEM_SPRITES: et,
          ITEM_SPRITES_WITHOUT_FILE: Vt,
          ITEM_FILES_WITHOUT_SPRITE: Dt
        } = tt;
        qt = function(tt, et, Vt) {
          const qt = new Set,
            Dt = (0, Ot.A)(et);
          let mt = 0;
          for (const [Ot, dt] of tt.entries()) Ot === Dt[mt] ? mt++ : qt.add(dt);
          if ("" !== Vt)
            for (const dt of Vt.split(Ot.x)) qt.add(dt);
          return qt
        }(et.split(Ot.x), Vt, Dt)
      }), (tt => {
        throw Dt = null, tt
      })), Dt
    }

    function dt(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = qt) || void 0 === Vt ? void 0 : Vt.has(tt)) && void 0 !== et && et
    }
  },
  39832: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      h: () => Dt,
      k: () => qt
    });
    const Ot = 128;

    function qt(tt, et, Vt, Ot) {
      const qt = 2 * et - 1,
        Dt = 1 - 2 * Vt,
        mt = tt(0) - qt * tt(3),
        dt = tt(4) - qt * tt(7),
        jt = tt(8) - qt * tt(11),
        Ht = tt(1) - Dt * tt(3),
        Xt = tt(5) - Dt * tt(7),
        Qt = tt(9) - Dt * tt(11);
      Ot[0] = dt * Qt - jt * Xt, Ot[1] = jt * Ht - mt * Qt, Ot[2] = mt * Xt - dt * Ht;
      const lt = Ot[0] * tt(3) + Ot[1] * tt(7) + Ot[2] * tt(11) < 0 ? -1 : 1,
        Et = Math.hypot(Ot[0], Ot[1], Ot[2]) * lt;
      return Ot[0] /= Et, Ot[1] /= Et, Ot[2] /= Et, Ot
    }

    function Dt(tt, et, Vt, Ot, qt, Dt) {
      const mt = [Math.floor(et[0]), Math.floor(et[1]), Math.floor(et[2])],
        dt = [0, 0, 0],
        jt = [1 / 0, 1 / 0, 1 / 0],
        Ht = [1 / 0, 1 / 0, 1 / 0];
      for (let lt = 0; lt < 3; lt++) dt[lt] = Math.sign(Vt[lt]), 0 !== dt[lt] && (Ht[lt] = Math.abs(1 / Vt[lt]), jt[lt] = (mt[lt] + (dt[lt] > 0 ? 1 : 0) - et[lt]) / Vt[lt]);
      let Xt = 0,
        Qt = Math.abs(Vt[0]) > Math.abs(Vt[1]) ? 0 : 1;
      for (Math.abs(Vt[2]) > Math.abs(Vt[Qt]) && (Qt = 2); Xt <= Ot;) {
        if (tt(mt[0], mt[1], mt[2])) return qt[0] = mt[0], qt[1] = mt[1], qt[2] = mt[2], Dt[0] = 0, Dt[1] = 0, Dt[2] = 0, Dt[Qt] = -dt[Qt], !0;
        Qt = jt[0] < jt[1] ? 0 : 1, jt[2] < jt[Qt] && (Qt = 2), Xt = jt[Qt], mt[Qt] += dt[Qt], jt[Qt] += Ht[Qt]
      }
      return !1
    }
  },
  39814: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(1993);

    function qt(tt, et, Vt) {
      return (0, Ot.o)(tt, et) < Vt
    }
  },
  8943: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(1345);

    function qt(tt, et) {
      var Vt, qt;
      try {
        const Vt = (0, Ot.e)();
        if ("function" === typeof Vt) {
          const Ot = new Vt(tt, et);
          if (Ot.type === tt) return Ot
        }
      } catch {}
      const Dt = document.createEvent("Event");
      return Dt.initEvent(tt, null !== (Vt = null === et || void 0 === et ? void 0 : et.bubbles) && void 0 !== Vt && Vt, null !== (qt = null === et || void 0 === et ? void 0 : et.cancelable) && void 0 !== qt && qt), Dt
    }
  },
  36709: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      d: () => Xt,
      f: () => Et,
      j: () => Qt
    });
    var Ot = Vt(391),
      qt = Vt(736),
      Dt = Vt(741),
      mt = Vt(39);
    const dt = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      jt = "playSessionGameNameWithVariation",
      Ht = "wasMatchmakePlayer";

    function Xt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      (0, Dt.h)(tt, dt)
    }

    function Qt() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).setItem(Ht, !0)
    }

    function lt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      return (0, Dt.d)(tt, dt)
    }

    function Et(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt.h;
      const Vt = (0, Dt.d)(et, dt),
        Xt = function(tt) {
          const et = tt.getItem(jt);
          return "string" !== typeof et ? null : et
        }(et),
        Qt = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).getItem(Ht)
        }(et);
      let lt;
      return lt = null !== Vt && null !== Xt && (0, Dt.g)(et, dt) && function(tt, et, Vt) {
          const qt = (0, Ot.bc)(tt),
            Dt = (0, Ot.bc)(et),
            mt = (0, Ot.Wb)(tt),
            dt = (0, Ot.Wb)(et);
          return !(qt !== Dt || !Vt) || qt === Dt && mt === dt
        }(Xt, tt, Qt) ? Vt : (0, qt.b)(), (0, Dt.k)(et, dt, lt), et.setItem(jt, tt),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).removeItem(Ht)
        }(et), lt
    }
  },
  39208: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt
    });
    var Ot = Vt(1308),
      qt = Vt(1429),
      Dt = Vt(26),
      mt = Vt(1410),
      dt = Vt(1423),
      jt = Vt(1613),
      Ht = Vt(36709);

    function Xt(tt) {
      let {
        iq: et,
        Yq: Vt
      } = tt;
      const Xt = null !== et && void 0 !== et ? et : (0, dt.c)().gameNameWithVariation;
      (0, Ot.M)(Xt) && ((0, Ht.j)(), (0, mt.ab)((() => {
        console.log("Received matchmaking order from game server to game", et), (0, Dt.i)("inGameReplay"), (0, jt.navigatePreserveSearch)((0, qt.c)(Xt, null !== Vt && void 0 !== Vt ? Vt : void 0))
      }), "video_start"))
    }
  },
  39387: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(31),
      qt = Vt(2074);

    function Dt(tt) {
      var et, Vt;
      const Dt = (0, qt.k)(null !== (et = null === (Vt = qt.r.toggleFreeCam) || void 0 === Vt ? void 0 : Vt[0]) && void 0 !== et ? et : null);
      Ot.j.sw("showBottomMessage", {
        message: `Free Camera ${tt?"Enabled":"Disabled"}${Dt?` - Press ${Dt} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39202: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt,
      i: () => mt,
      l: () => dt,
      n: () => Ht
    });
    var Ot = Vt(31),
      qt = Vt(1450);
    const Dt = new Map;

    function mt(tt, et) {
      Ot.j.sw("newUiRequest", {
        id: tt,
        clientParameters: et
      }, !0)
    }

    function dt(tt) {
      Ot.j.sw("removeUiRequest", tt, !0);
      const et = Dt.get(tt);
      et && (et.tearDownNotification(), Dt.delete(tt))
    }

    function jt() {
      Ot.j.sw("clearUiRequests");
      for (const tt of Dt.values()) tt.tearDownNotification();
      Dt.clear()
    }

    function Ht(tt, et, Vt, Ot) {
      const mt = qt.NotificationProvider.showPromptPopup({
        title: et,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: Vt,
        unlockPointerKey: "uiRequestPopup"
      });
      Dt.set(tt, mt), mt.getResult().then((et => {
        Dt.delete(tt), "notificationTornDown" !== et && Ot(et)
      }))
    }
  },
  39839: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      f: () => lt
    });
    var Ot = Vt(229),
      qt = Vt(39842);
    const Dt = 20;

    function mt(tt) {
      return tt.map(Math.floor).join(" ")
    }

    function dt(tt) {
      return null === tt.amount || 1 === tt.amount ? tt.name : `${tt.amount} ${tt.name}`
    }
    var jt = Vt(39850),
      Ht = Vt(2043),
      Xt = Vt(1423);

    function Qt(tt, et) {
      if (!tt) return jt.e;
      const Vt = tt.playerFeet();
      if (!Vt) return "The player isn't in the world yet, so no blocks can be seen.";
      const Dt = Ot.e.ff,
        mt = (0, qt.k)(null !== et && void 0 !== et ? et : Vt, Dt),
        dt = tt.chunkBlocks(mt);
      return dt ? (0, qt.c)(mt, Dt, ((et, Vt, Ot) => {
        const qt = dt(et, Vt, Ot);
        return 0 === qt ? null : tt.blockName(qt).split("|")[0]
      }), Vt) : `The chunk from ${mt.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Vt.map(Math.floor).join(" ")}.`
    }

    function lt(tt) {
      var et, Vt, Ot;
      if (!tt) return jt.h;
      const qt = tt.playerFeet();
      if (!qt) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Qt,
        heldSlot: lt
      } = tt.inventory();
      return function(tt) {
        const et = [];
        null !== tt.game && et.push(`Game: ${tt.game}.`);
        const Vt = null === tt.health ? "" : `, health ${Math.round(tt.health)}${null===tt.maxHealth?"":` of ${Math.round(tt.maxHealth)}`}`;
        et.push(`The player (the creator) stands at ${mt(tt.position)}${Vt}, ${tt.creative?"in":"not in"} creative mode.`);
        const Ot = tt.slots[tt.heldSlot];
        et.push(Ot ? `Holding (slot ${tt.heldSlot}): ${dt(Ot)}.` : `Holding nothing (slot ${tt.heldSlot} is empty).`);
        const qt = tt.slots.flatMap(((tt, et) => tt ? [`slot ${et}: ${dt(tt)}`] : []));
        et.push(qt.length > 0 ? `Inventory: ${qt.join(", ")}.` : "Inventory: empty.");
        const jt = et => Math.hypot(et.position[0] - tt.position[0], et.position[1] - tt.position[1], et.position[2] - tt.position[2]),
          Ht = [...tt.nearby].sort(((tt, et) => jt(tt) - jt(et)));
        if (0 === Ht.length) et.push("No other players or mobs are near enough to see.");
        else {
          et.push("Near them, nearest first:");
          for (const tt of Ht.slice(0, Dt)) {
            const Vt = "player" === tt.kind ? `player "${tt.name||"?"}"` : tt.name && tt.name !== tt.kind ? `${tt.kind} "${tt.name}"` : tt.kind,
              Ot = Math.round(jt(tt));
            et.push(`- ${Vt} at ${mt(tt.position)}, ${Ot} block${1===Ot?"":"s"} away`)
          }
          Ht.length > Dt && et.push(`- and ${Ht.length-Dt} more further away`)
        }
        return tt.droppedItems > 0 && et.push(`${tt.droppedItems} dropped item${1===tt.droppedItems?" is":"s are"} on the ground nearby.`), et.join("\n")
      }({
        game: null !== (et = (0, Xt.c)().gameNameWithVariation) && void 0 !== et ? et : null,
        position: qt,
        health: null !== (Vt = Ht.b.get("_health")) && void 0 !== Vt ? Vt : null,
        maxHealth: null !== (Ot = Ht.b.get("_totalMaxHealth")) && void 0 !== Ot ? Ot : null,
        creative: !0 === Ht.b.get("creative"),
        heldSlot: lt,
        slots: Qt,
        nearby: tt.nearby(),
        droppedItems: tt.droppedItems()
      })
    }
  },
  41068: (tt, et, Vt) => {
    Vt.d(et, {
      $: () => it,
      B: () => It,
      C: () => Lt,
      G: () => Zt,
      K: () => gt,
      O: () => kt,
      S: () => Rt,
      T: () => Ft,
      X: () => ct,
      Y: () => Yt,
      ab: () => Pt,
      d: () => Bt,
      h: () => zt,
      l: () => Wt,
      o: () => pt,
      s: () => St,
      w: () => vt,
      x: () => Gt
    });
    var Ot = Vt(1492),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(2458),
      dt = Vt(4980),
      jt = Vt(4951);
    let Ht, Xt = !1,
      Qt = !1,
      lt = !1,
      Et = !1;
    const ft = 1300,
      wt = 3e3;
    let yt = 0,
      Nt = !1,
      Mt = !1,
      bt = 0;
    const Jt = 2;
    let Ct = !1,
      ut = !1;
    const Kt = new Set,
      ht = new Set;

    function vt() {
      return Xt
    }

    function Wt() {
      return Mt
    }

    function St() {
      return ut
    }

    function ct() {
      return (0, Dt.r)() && !ut
    }

    function Rt(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (tt !== ut) {
        ut = tt;
        for (const tt of [...ht]) tt(ut);
        et && it()
      }
    }

    function It(tt) {
      return ht.add(tt), () => {
        ht.delete(tt)
      }
    }

    function Pt() {
      (0, dt.g)(mt.u.Menu, (0, Dt.r)() ? 0 : mt.u.Menu)
    }

    function Zt() {
      Mt = !1, bt = 0, Pt(), it()
    }

    function Lt(tt) {
      return Kt.add(tt), () => {
        Kt.delete(tt)
      }
    }

    function Ft(tt) {
      Qt = !1, tt !== Xt && (Xt = tt, Et = !1, clearTimeout(Ht), lt = !Xt && Ct, Xt ? (Nt = !1, Mt = !1, bt = 0) : ct() && !Ct && (Mt = !0), Ct = !1, Xt && !ct() && Tt(), st(), lt && it())
    }

    function kt(tt) {
      tt !== Nt && (Nt = tt, tt || it())
    }

    function Gt() {
      Qt = !1, Et || !0 !== Ut() || (Et = !0, clearTimeout(Ht), Ht = setTimeout(ot, ft))
    }

    function zt() {
      return (!Qt || performance.now() - yt > wt) && (Qt = (0, jt.C)().lockPointer(), yt = performance.now()), Qt
    }

    function ot() {
      rt() && At() && zt()
    }

    function rt() {
      return ct() && !Xt && !Nt && !(0, Ot.j)()
    }

    function Ut() {
      var tt;
      return "undefined" === typeof navigator || null === (tt = navigator.userActivation) || void 0 === tt ? void 0 : tt.isActive
    }

    function At() {
      return lt && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Ut()
    }

    function it() {
      ct() ? rt() && !Mt && At() && zt() : Xt && !Ct && Tt()
    }

    function Yt() {
      Mt ? navigator.vendor.startsWith("Apple") ? xt() : bt = Jt : it()
    }

    function Bt() {
      bt > 0 && 0 === --bt && xt()
    }

    function pt() {
      bt = 0
    }

    function xt() {
      rt() && !0 === Ut() && zt()
    }

    function Tt() {
      Ct = !0, (0, jt.C)().unlockPointer()
    }

    function gt() {
      Qt = !1, lt = !1, Et = !1, clearTimeout(Ht), Nt = !1, Mt = !1, bt = 0, Ct = !1;
      const tt = Xt;
      Xt = !1, tt && st()
    }

    function st() {
      for (const tt of [...Kt]) tt(Xt);
      qt.j.sw("pointerLockUpdate", Xt)
    }
  },
  40880: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => lt,
      g: () => dt,
      h: () => Qt,
      l: () => Ht,
      m: () => mt,
      o: () => Xt,
      q: () => jt
    });
    let Ot = null,
      qt = null,
      Dt = null;

    function mt(tt) {
      Ot = tt
    }

    function dt() {
      return Ot
    }

    function jt(tt) {
      qt = tt
    }

    function Ht() {
      return qt
    }

    function Xt(tt) {
      Dt = tt
    }

    function Qt() {
      return Dt
    }

    function lt() {
      var tt, et;
      return !0 === (null === (tt = qt) || void 0 === tt || null === (et = tt.currentViewer) || void 0 === et ? void 0 : et.inPlayback)
    }
  },
  41197: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      attachPlayGameSources: () => KO,
      playGameSources: () => uO
    });
    var Ot = Vt(2024),
      qt = Vt(40880),
      Dt = Vt(4951),
      mt = Vt(40769),
      dt = Vt(41174),
      jt = Vt(39819),
      Ht = Vt(31),
      Xt = Vt(4963),
      Qt = Vt(4960),
      lt = Vt(40812),
      Et = Vt(40845),
      ft = Vt(41201),
      wt = Vt(40824);
    (0, wt.j)(Xt.gc.Chat, (tt => {
      if (tt.payloadKind !== Qt.wc.Msgpack) return;
      const et = function(tt) {
        if (null === tt || "object" !== typeof tt || !("content" in tt)) return null;
        const {
          chatMsgId: et,
          content: Vt,
          chatterEId: Ot
        } = tt;
        return {
          serverChatMsgId: null !== et && void 0 !== et ? et : void 0,
          content: Vt,
          chatterEId: void 0 === Ot || null === Ot ? void 0 : String(Ot)
        }
      }((0, lt.c)(tt.payload));
      null !== et && Ht.j.sw("chat", et, !0)
    }));
    const yt = {
        chatReceived: (0, jt.j)((function(tt) {
          var et, Vt, Ot;
          return {
            id: tt,
            name: null !== (et = ft.c.getName(tt)) && void 0 !== et ? et : null,
            local: (0, Et.c)() === tt,
            profileEffect: null !== (Vt = null === (Ot = (0, ft.d)(tt)) || void 0 === Ot ? void 0 : Ot.profileEffect) && void 0 !== Vt ? Vt : null
          }
        }))
      },
      Nt = {
        sendChatMessage(tt) {
          var et;
          let {
            kX: Vt,
            channelName: Ot
          } = tt;
          null === (et = (0, mt.g)()) || void 0 === et || et.clientApi.sendChat(Vt, Ot)
        }
      };
    var Mt = Vt(229),
      bt = Vt(2043),
      Jt = Vt(40761),
      Ct = Vt(39814);
    const ut = [0, 0, 0],
      Kt = {
        codeBlockClickable(tt) {
          var et;
          const Vt = (0, mt.g)();
          if (null === Vt || void 0 === Vt || !Vt.isSessionLive) return !1;
          const Ot = Vt.api;
          if (0 !== (Jt.x.playerFlags(Ot.apiView, 0) & Jt.Pd.Crouching)) return !1;
          const qt = Ot.queries.directorEntity(Ot.localId) >= Jt.vb.BYTES ? Ot.memoryData(Ot.scratch(), Jt.vb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === qt) return !1;
          for (let Dt = 0; Dt < 3; Dt++) ut[Dt] = Jt.vb.feet(qt, 0, Dt);
          return ut[1] += Jt.vb.eyeHeight(qt, 0), (0, Ct.e)(ut, tt, null !== (et = bt.b.get("blockReach")) && void 0 !== et ? et : Mt.e.xy)
        }
      },
      ht = {
        clickCodeBlock(tt) {
          var et;
          null === (et = (0, mt.g)()) || void 0 === et || et.clickCodeBlock(tt)
        }
      };
    var vt = Vt(40785),
      Wt = Vt(41206),
      St = Vt(1103),
      ct = Vt(39226),
      Rt = Vt(4948),
      It = Vt(40797),
      Pt = Vt(40777),
      Zt = Vt(40804);

    function Lt(tt) {
      if (null === tt) return null;
      const et = [];
      for (const Vt of tt) {
        const tt = Object.keys(Vt)[0];
        if ("de" === tt) {
          const {
            str: tt,
            style: Ot,
            clickableUrl: qt
          } = Vt.de, Dt = Object.keys(tt)[0], mt = tt[Dt];
          "string" !== Dt && "styledEntityName" !== Dt && "styledTranslatedText" !== Dt || et.push({
            str: mt,
            style: Ot,
            clickableUrl: qt
          })
        } else et.push(Vt[tt])
      }
      return et
    }
    const Ft = {
      screenPos(tt) {
        var et, Vt;
        return null !== (et = null === (Vt = (0, mt.g)()) || void 0 === Vt ? void 0 : Vt.renderFrame.projectWorldPosToScreenPos(tt)) && void 0 !== et ? et : {
          x: 0,
          y: 0
        }
      }
    };
    let kt = !1;

    function Gt() {
      kt || (kt = !0, (0, wt.j)(Xt.gc.ProgressBarUpdate, (tt => {
        const et = (0, Zt.k)(tt);
        (0, Zt.d)(et) && Ht.j.sw("progressBarUpdate", et, !0)
      })), (0, wt.j)(It.v, (tt => {
        const et = (0, Zt.h)(It.v, tt);
        et && Ht.j.sw("middleScreenBarInitiate", {
          duration: et.zq,
          oq: et.oq,
          horizBarRemOffset: et.rq
        }, !0)
      })), (0, wt.j)(Xt.gc.RemoveMiddleScreenBar, (() => {
        Ht.j.sw("middleScreenBarRemove")
      })), (0, wt.j)(It.Y, (tt => {
        const et = (0, Zt.h)(It.Y, tt);
        if (et) {
          var Vt;
          const tt = et.St ? null === (Vt = (0, mt.g)()) || void 0 === Vt ? void 0 : Vt.renderFrame.projectDirectionToScreenPos(et.St) : void 0;
          Ht.j.sw("sendHitmarker", {
            ne: et.ne,
            screenPos: tt
          }, !0)
        }
      })), (0, wt.j)(It.bb, (tt => {
        const et = (0, Zt.h)(It.bb, tt);
        if (et) {
          const {
            id: tt,
            position: Vt,
            style: Ot,
            Ae: qt,
            Ye: Dt
          } = et;
          Ht.j.sw("setDirectionArrow", {
            id: tt,
            position: Vt,
            style: Ot,
            text: Lt(qt),
            Ye: Dt
          }, !0)
        }
      })), (0, wt.j)(It.e, (tt => {
        const et = (0, Zt.h)(It.e, tt);
        et && Ht.j.sw("clearDirectionArrow", {
          id: et.id
        }, !0)
      })), (0, wt.j)(It.o, (tt => {
        const et = (0, Zt.h)(It.o, tt);
        et && Ht.j.sw("flyingMiddleMessage", {
          content: Lt(et.zD),
          oD: et.oD,
          rD: et.rD
        }, !0)
      })), (0, wt.j)(Xt.gc.WorldVariation, (tt => {
        const et = (0, Zt.k)(tt);
        if ("string" === typeof et) {
          const tt = et === St.h ? null : {
            message: `Currently loaded as variation: ${et}`,
            type: "Warning"
          };
          Ht.j.sw("showPermanentBottomMessage", tt, !0)
        }
      })), (0, wt.j)(It.H, (tt => {
        const et = (0, Zt.h)(It.H, tt);
        et && function(tt, et) {
          const {
            type: Vt,
            params: Ot
          } = (0, ct.f)(et), qt = {
            ...Ot
          };
          for (const Dt of ct.e) qt[Dt] && (qt[Dt] = Lt(qt[Dt]));
          Rt.d.queueQTE(tt, Vt, qt).getResult().then((et => {
            var Vt;
            "boolean" === typeof et && (null === (Vt = (0, mt.g)()) || void 0 === Vt || Vt.send(Pt.c.QteResponse, {
              qteId: tt,
              qteResponse: et
            }))
          }))
        }(et.id, et.gt)
      })), (0, wt.j)(It.T, (tt => {
        const et = (0, Zt.h)(It.T, tt);
        "number" === typeof et && Rt.d.cancelQTE(et)
      })), (0, wt.f)((() => {
        Rt.d.reset()
      })), (0, wt.g)((() => {
        Rt.d.reset()
      })), (0, wt.j)(Xt.gc.EditItemCraftingRecipes, (tt => {
        const et = (0, Zt.k)(tt);
        (0, Zt.d)(et) && Ht.j.sw("craftingRecipesEdited", {
          itemName: et.craftingRecipeItemName,
          recipesForItem: et.recipesForItem
        })
      })), (0, wt.j)(It.Q, (tt => {
        const et = (0, Zt.h)(It.Q, tt);
        et && Ht.j.sw("craftingRecipesEdited", {
          itemName: et.Gq,
          recipesForItem: []
        })
      })))
    }
    var zt = Vt(26);
    const ot = [{
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

    function rt(tt) {
      return Jt.x.playerFlags(tt.api.apiView, 0)
    }
    const Ut = {
        freeCamera: (0, Et.b)((tt => () => {
          const et = tt.isSessionLive && 0 !== (rt(tt) & Jt.Pd.FreeCamMoves),
            Vt = tt.freeCameraAllowed() && null === zt.b.get("scriptedCameraFacing");
          return ot[(Vt ? 2 : 0) + (et ? 1 : 0)]
        }), ot[0], (tt => (0, Dt.o)(tt)))
      },
      At = {
        setFreeCameraMovesFly: tt => {
          var et;
          null === (et = (0, mt.g)()) || void 0 === et || et.setFreeCameraMovesFly(tt)
        }
      },
      it = {
        freeCameraPos: () => {
          const tt = (0, mt.g)();
          return null !== tt && void 0 !== tt && tt.isSessionLive && tt.renderFrame.hasView && 0 !== (rt(tt) & Jt.Pd.FreeCam) ? tt.renderFrame.cameraPosition : null
        }
      };
    var Yt = Vt(39387);
    let Bt = !1,
      pt = !1;

    function xt() {
      const tt = (0, mt.g)();
      if (null === tt || void 0 === tt || !tt.isSessionLive) return void(Bt = !1);
      const et = 0 !== (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.FreeCam);
      et !== Bt && (Bt = et, (0, Yt.e)(et))
    }
    var Tt = Vt(391),
      gt = Vt(37273),
      st = Vt(2054);
    var nt = Vt(41215),
      te = Vt(40840);
    const ee = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let Ve = "off";

    function Oe(tt) {
      var et;
      return null === tt ? null : {
        label: null !== (et = (0, nt.b)(tt, "interactionPrompt")) && void 0 !== et ? et : null
      }
    }
    const qe = new Map([
      [Jt.vc.Open, {
        label: jt.e.open
      }],
      [Jt.vc.Close, {
        label: jt.e.close
      }],
      [Jt.vc.Milk, {
        label: jt.e.milk
      }],
      [Jt.vc.Shear, {
        label: jt.e.shear
      }],
      [Jt.vc.Tame, {
        label: jt.e.tame
      }],
      [Jt.vc.Feed, {
        label: jt.e.feed
      }],
      [Jt.vc.Ride, {
        label: jt.e.ride
      }]
    ]);
    class De {
      constructor() {
        this.target = ee, this.qd = Jt.ld, this.optionName = null, this.pickaxe = new jt.b
      }
      read(tt) {
        var et;
        const Vt = Jt.x.targetBlockId(tt.api.apiView, 0);
        Vt !== this.qd && (this.qd = Vt, this.optionName = Vt === Jt.ld ? null : `${tt.tables.getMetaInfo(Vt).rootName}CrosshairText`);
        const Ot = null === this.optionName ? null : null !== (et = tt.tables.getClientOption(this.optionName)) && void 0 !== et ? et : null;
        this.pickaxe.update(function(tt, et) {
          var Vt, Ot, qt;
          if (0 === (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.Breaking) || et === Jt.ld || 0 === et) return null;
          const {
            tables: Dt
          } = tt;
          if (!0 === Dt.getClientOption("creative")) return null;
          const mt = Dt.nameOfId(et),
            dt = null === (Vt = tt.items.Pd()) || void 0 === Vt ? void 0 : Vt.name,
            jt = null !== (Ot = Dt.getItemStat(mt, "harvestLevel")) && void 0 !== Ot ? Ot : 0;
          return (0, Tt.Ic)({
            blockHarvestType: Dt.getDefaultItemStat(mt, "harvestType"),
            blockHarvestLevel: Dt.getDefaultItemStat(mt, "harvestLevel"),
            harvestLevel: jt,
            heldToolType: void 0 === dt ? void 0 : Dt.getDefaultItemStat(dt, "harvests"),
            heldToolLevel: void 0 === dt ? void 0 : Dt.getDefaultItemStat(dt, "level")
          }) && null !== (qt = gt.p[jt]) && void 0 !== qt ? qt : null
        }(tt, Vt)), tt.watchPromptPick(Ve);
        const qt = "touch" === Ve ? function(tt) {
          var et;
          const Vt = tt.interactLabel;
          return Vt === Jt.vc.Entity ? Oe(tt.promptEntity) : Vt === Jt.vc.TameWith ? {
            label: (0, jt.v)(tt.tables.nameOfId(tt.interactIcon))
          } : null !== (et = qe.get(Vt)) && void 0 !== et ? et : null
        }(tt) : Oe(tt.promptEntity);
        return this.target = (0, st.o)(this.target, {
          interactPrompt: qt,
          blockText: Ot,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let me = null;
    const de = {
      current: () => {
        var tt, et;
        return null !== (tt = null === (et = me) || void 0 === et ? void 0 : et.target) && void 0 !== tt ? tt : ee
      },
      watch: tt => {
        const et = new De;
        me = et;
        const Vt = (0, Et.d)((Vt => {
          let Ot = et.read(Vt);
          tt(Ot);
          const qt = (0, Dt.p)((() => {
            const qt = et.read(Vt);
            qt !== Ot && (Ot = qt, tt(qt))
          }));
          return () => {
            qt(), Vt.watchPromptPick("off")
          }
        }));
        return () => {
          Vt(), me === et && (me = null)
        }
      }
    };
    let je = 0,
      He = 0;
    const Xe = {
        health: jt.p,
        aura: jt.i,
        hotbar: te.c.states.hotbar,
        heldItemAim: te.c.states.heldItemAim,
        crouching: (0, Et.b)((tt => function(tt) {
          const et = () => 0 !== (Jt.x.playerFlags(tt.apiView, 0) & Jt.Pd.Crouching);
          return {
            current: et,
            watch(tt) {
              let Vt = et();
              return (0, Dt.o)((() => {
                const Ot = et();
                Ot !== Vt && (Vt = Ot, tt(Ot))
              }))
            }
          }
        }(tt.api).current), !1, (tt => (0, Dt.o)(tt))),
        flight: (0, Et.b)((tt => () => function(tt) {
          const et = Jt.x.playerFlags(tt.apiView, 0);
          return (0, jt.l)(0 !== (et & Jt.Pd.CanFly), 0 !== (et & Jt.Pd.Flying))
        }(tt.api)), (0, jt.l)(!1, !1), (tt => (0, Dt.o)(tt))),
        gliderBoostFuel: (0, Et.b)((tt => () => Jt.x.gliderBoostFuel(tt.api.apiView, 0)), 0, (tt => (0, Dt.o)(tt))),
        crosshairTarget: de
      },
      Qe = {
        hotbarSlotRequested: te.c.events.hotbarSlotRequested,
        hotbarScrolled: te.c.events.hotbarScrolled,
        numberKeyPressed: te.c.events.numberKeyPressed,
        shotDamageToShow: (0, jt.t)((tt => !0 === (0, nt.b)(tt, "showDamageAmounts")))
      },
      le = {
        selectHotbarSlot: te.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: tt => {
          Ve = tt
        }
      },
      Ee = {
        momentumFrac: function() {
          var tt, et, Vt;
          const Ot = (0, mt.g)(),
            qt = performance.now(),
            Dt = null === Ot || void 0 === Ot || null === (tt = Ot.items.Pd()) || void 0 === tt || null === (et = tt.attributes) || void 0 === et || null === (Vt = et.customAttributes) || void 0 === Vt ? void 0 : Vt.enchantments;
          return je = null !== Ot && null !== Dt && void 0 !== Dt && Dt.Momentum ? 0 !== (Jt.x.playerFlags(Ot.api.apiView, 0) & Jt.Pd.Breaking) ? Math.max(0, Jt.x.momentumFrac(Ot.api.apiView, 0)) : Math.max(0, je - (qt - He) / 1500) : 0, He = qt, je
        }
      };
    var fe = Vt(40767);
    const we = {
      lobbyManage(tt) {
        var et;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.LobbyManage, tt)
      }
    };
    var ye = Vt(1325),
      Ne = Vt(36745),
      ae = Vt(9032),
      Me = Vt(1732),
      be = Vt(2458),
      Je = Vt(4971);
    let Ce = !1;

    function ue(tt) {
      Ce = tt
    }

    function Ke() {
      "inGame" !== zt.b.get("gameState") || (0, Me.u)() || Ht.j.sw("ctrlCrouchWithoutFullscreen")
    }
    let he = !1;
    const ve = {
        OpenEmoteWheel: () => {
          ue(!0), he = !0, queueMicrotask((() => {
            he && (he = !1, Ht.j.sw("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Ht.j.sw("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Ne.e)() || Ht.j.sw("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Ne.e)() || Ht.j.sw("XKeyPressed")
        },
        CtrlCrouch: Ke,
        "primary-fire": () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      We = {
        OpenEmoteWheel: () => {
          ue(!1), he ? (he = !1, (0, ae.b)() || Ht.j.sw("requestEmoteWheelHoldOpen")) : Ht.j.sw("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Ke,
        "primary-fire": () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Ht.j.sw("mouseState", {
            iX: ye.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Se = !1;

    function ce() {
      Se || (Se = !0, (0, Je.i)((tt => {
        if ((0, qt.d)()) return;
        const et = (0, Je.e)(tt) ? "primary-fire" : tt.action;
        var Vt;
        if (tt.down) {
          if (0 === (tt.flags & be.b.Synthetic)) {
            var Ot;
            null === (Ot = ve[et]) || void 0 === Ot || Ot.call(ve)
          }
        } else null === (Vt = We[et]) || void 0 === Vt || Vt.call(We)
      })))
    }
    var Re = Vt(377),
      Ie = Vt(106),
      Pe = Vt(39),
      Ze = Vt(41068),
      Le = Vt(1423),
      Fe = Vt(2486);
    let ke = !1;
    const Ge = {
      sendCodeCollab(tt) {
        var et;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.CodeCollab, (0, Pt.n)(tt), (0, Fe.d)(tt))
      }
    };
    var ze = Vt(39316),
      oe = Vt(8943);
    let re = null,
      Ue = !1,
      Ae = null;

    function ie() {
      return "inGame" === zt.b.get("gameState") && !(0, Ne.e)()
    }
    const Ye = {
        OpenInventory: tt => {
          (0, Me.C)(tt, "inventory", (0, fe.n)())
        },
        OpenShop: tt => {
          re && ie() && (0, Me.y)(tt, Re.o.SHOP, !re.shopIsEmpty(bt.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: tt => {
          ie() && (0, Me.y)(tt, Re.o.LOBBY_LEADERBOARD, (0, ze.d)({
            lobbyLeaderboardInfo: bt.b.get("lobbyLeaderboardInfo"),
            lobbyManage: bt.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: tt => {
          var et;
          const Vt = null === (et = re) || void 0 === et ? void 0 : et.getClientGameMapKey();
          Vt ? (0, Me.G)(tt, !0, Vt) : (0, Me.C)(tt, "retentionFeatures", !(!bt.b.get("_tasks") && !bt.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: tt => {
          (0, Me.C)(tt, "inviteLink", Ie.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: tt => {
          ie() && function(tt) {
            const et = (0, mt.g)(),
              Vt = null !== et && void 0 !== et && et.isSessionLive ? et.api : null,
              Ot = Vt ? Vt.YM(Vt.localId) : null;
            (0, Me.G)(tt, null !== Ot && (0, Fe.b)((0, Le.c)()), (() => {
              (0, Fe.f)(Ot)
            }))
          }(tt)
        },
        HideUi: () => {
          Ht.j.sw("showUi", !1)
        }
      },
      Be = {
        HideUi: () => {
          Ht.j.sw("showUi", !0)
        }
      };

    function pe() {
      Ue || (Ue = !0, Vt.e(159).then((() => Vt(60836))).then((tt => {
        re = tt
      }), (tt => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", tt)
      })), (0, Ze.C)((tt => {
        tt || !(0, Ze.l)() || (0, Ie.isMobile)() || !Pe.e.getItem("disableFullscreen") || (0, Me.q)() || zt.b.set({
          openEverythingMenuName: Re.o.SETTINGS
        })
      })), (0, Je.i)((tt => {
        let {
          action: et,
          down: Vt,
          press: Ot
        } = tt;
        var Dt, mt;
        (0, qt.d)() || (Vt ? null === (Dt = Ye[et]) || void 0 === Dt || Dt.call(Ye, function(tt) {
          var et;
          if (0 === tt || (null === (et = Ae) || void 0 === et ? void 0 : et.press) !== tt) {
            const et = {
              press: tt,
              event: (0, oe.b)("inputAction")
            };
            Ae = et, queueMicrotask((() => {
              Ae === et && (Ae = null)
            }))
          }
          return Ae.event
        }(Ot)) : null === (mt = Be[et]) || void 0 === mt || mt.call(Be))
      })))
    }
    var xe = Vt(39221),
      Te = Vt(39208),
      ge = Vt(39202);
    const se = {
      completeTask(tt) {
        var et;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.CompleteTask, (0, Pt.o)(tt))
      },
      setServerCookie(tt) {
        var et;
        let {
          key: Vt,
          value: Ot
        } = tt;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.GeneralCookieSet, (0, Pt.s)({
          Qd: Vt,
          ld: Ot
        }))
      },
      answerUiRequest(tt) {
        var et;
        let {
          id: Vt,
          KX: Ot
        } = tt;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.UiRequestResp, (0, Pt.Q)({
          aj: Vt,
          Mj: Ot,
          bj: 5
        }))
      },
      chooseRewardedAd(tt) {
        var et;
        let {
          id: Vt,
          KX: Ot
        } = tt;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.UiRequestResponded, (0, Pt.P)({
          id: Vt,
          KX: Ot
        }))
      },
      requestLeaderboard(tt) {
        var et;
        let {
          category: Vt,
          timeframe: Ot,
          seeTop: qt
        } = tt;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.LeaderboardRequest, {
          category: Vt,
          timeframe: Ot,
          seeTop: qt
        })
      }
    };
    let ne = !1;
    const tV = Mt.e.iy / 2,
      eV = [tV, -tV, -tV, -tV, tV, tV, -tV, tV],
      VV = [0, 0, 0];

    function OV(tt, et, Vt) {
      for (let Ot = 0; Ot < tt.length; Ot += 2)
        if (tt[Ot] === et && tt[Ot + 1] === Vt) return !0;
      return !1
    }
    const qV = {
      blocksStandingOn: function() {
        const tt = (0, mt.g)();
        if (null === tt) return [];
        const {
          api: et,
          chunks: Vt,
          tables: Ot
        } = tt;
        if (!et.readPosition(et.localId, VV)) return [];
        const [qt, Dt, dt] = VV, jt = Math.ceil(Dt) - 1, Ht = [], Xt = [];
        for (let mt = 0; mt < eV.length; mt += 2) {
          const tt = qt + eV[mt],
            et = dt + eV[mt + 1];
          if (Number.isInteger(tt) || Number.isInteger(et)) continue;
          const Dt = Math.floor(tt),
            Qt = Math.floor(et);
          if (OV(Xt, Dt, Qt)) continue;
          const lt = Vt.qd(Dt, jt, Qt);
          Ot.isSolidBlockId(lt) && (Xt.push(Dt, Qt), Ht.push(Ot.nameOfId(lt)))
        }
        return Ht
      },
      dropAhead: function() {
        const tt = (0, mt.g)();
        return null !== tt && 0 !== (Jt.x.playerFlags(tt.api.apiView, 0) & Jt.Pd.DropAhead)
      }
    };
    var DV = Vt(37185),
      mV = Vt(39288),
      dV = Vt(1450),
      jV = Vt(40853);
    const HV = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      XV = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function QV() {
      const tt = new Set;
      return {
        add: et => (tt.add(et), () => {
          tt.delete(et)
        }),
        fire() {
          for (const et of tt) et()
        }
      }
    }
    const lV = Object.freeze([]);

    function EV(tt, et) {
      let Vt, {
        rereads: Ot,
        followLocalId: qt
      } = et;
      const mt = () => (Vt = (0, st.o)(Vt, tt()), Vt);
      return {
        current: mt,
        watch(tt) {
          const et = (0, ft.b)((et => {
            Ot(et) && tt(mt())
          }));
          if (!qt) return et;
          let Vt = (0, Et.c)();
          const dt = (0, Dt.p)((() => {
            const et = (0, Et.c)();
            et !== Vt && (Vt = et, tt(mt()))
          }));
          return () => {
            et(), dt()
          }
        }
      }
    }
    const fV = {
        players: EV((function() {
          const tt = ft.c.ids(),
            et = {};
          for (const Dt of tt) {
            var Vt, Ot, qt;
            et[Dt] = {
              name: null !== (Vt = ft.c.getName(Dt)) && void 0 !== Vt ? Vt : null,
              ranks: null !== (Ot = ft.c.getSetting(Dt, "ranks")) && void 0 !== Ot ? Ot : lV,
              cosmetics: null !== (qt = (0, ft.d)(Dt)) && void 0 !== qt ? qt : null
            }
          }
          return {
            ids: tt,
            byId: et,
            localId: (0, Et.c)()
          }
        }), {
          rereads: tt => "roster" !== tt.kind || tt.members || tt.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: EV((function() {
          const tt = {};
          for (const qt of ft.c.ids()) {
            var et, Vt, Ot;
            tt[qt] = {
              colour: null !== (et = ft.c.getSetting(qt, "colorInLobbyLeaderboard")) && void 0 !== et ? et : null,
              values: null !== (Vt = ft.c.getSetting(qt, "lobbyLeaderboardValues")) && void 0 !== Vt ? Vt : null,
              tags: null !== (Ot = ft.c.getSetting(qt, "lobbyLeaderboardTags")) && void 0 !== Ot ? Ot : null
            }
          }
          return tt
        }), {
          rereads: function(tt) {
            if ("roster" !== tt.kind) return "reset" === tt.kind;
            const {
              members: et,
              settings: Vt
            } = tt;
            return et || Vt.has("colorInLobbyLeaderboard") || Vt.has("lobbyLeaderboardValues") || Vt.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      wV = {
        cosmeticsUpdated: {
          watch: tt => (0, ft.b)((et => {
            if ("cosmetics" !== et.kind) return;
            const Vt = (0, Et.c)();
            tt(et.updates.map((tt => {
              let {
                FD: et,
                kD: Ot,
                GD: qt
              } = tt;
              return {
                local: et === Vt,
                kD: Ot,
                GD: qt
              }
            })))
          }))
        }
      };
    var yV = Vt(2990),
      NV = Vt(1826),
      aV = Vt(738),
      MV = Vt(41115);
    let bV = !1,
      JV = null;
    const CV = {
      setShopOpen(tt) {
        var et;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.ShopMenuChanged, (0, Pt.J)(tt))
      },
      buyShopItem(tt) {
        var et;
        let {
          categoryKey: Vt,
          itemKey: Ot,
          userInput: qt
        } = tt;
        null === (et = (0, mt.g)()) || void 0 === et || et.send(Pt.c.ItemBought, {
          categoryKey: Vt,
          itemKey: Ot,
          shopVersion: bt.b.get("_shopVersion"),
          userInput: qt
        })
      }
    };
    let uV = !1;
    var KV = Vt(4980);
    const hV = be.u.LookFrozen | be.u.ClicksSuppressed;

    function vV(tt, et) {
      var Vt;
      null !== (Vt = (0, mt.g)()) && void 0 !== Vt && Vt.send(tt, et) || console.warn(`[bloxd-wasm-client] message ${tt} not sent: no live game or the core's command ring is full`)
    }(0, wt.j)(It.eb, (tt => {
      const et = (0, Zt.h)(It.eb, tt);
      void 0 !== et && Ht.j.sw("setDiscordReportKey", et)
    }));
    const WV = {
      ignorePlayer(tt) {
        vV(Pt.c.IgnoreUser, (0, Pt.t)({
          Jj: tt
        }))
      },
      reportPlayer(tt) {
        let {
          playerId: et,
          chatMsgId: Vt,
          Ed: Ot,
          details: qt
        } = tt;
        vV(Pt.c.UserReport, (0, Pt._)({
          JX: et,
          CX: Vt,
          Ed: Ot,
          fd: qt
        }))
      },
      reportWorldCodeChat(tt) {
        let {
          chatMsgId: et,
          Ed: Vt,
          details: Ot
        } = tt;
        vV(Pt.c.UserReport, (0, Pt._)({
          JX: "",
          CX: et,
          Ed: Vt,
          fd: Ot
        }))
      },
      requestDiscordReportKey(tt) {
        vV(Pt.c.ReqDiscordReportKey, (0, Pt.F)(tt))
      },
      reportLobbyOrGame(tt) {
        let {
          target: et,
          Ed: Vt,
          details: Ot
        } = tt;
        "customGame" === et ? vV(Pt.c.CustomGameReport, (0, Pt.q)({
          Ed: Vt,
          fd: Ot
        })) : vV(Pt.c.LobbyReport, (0, Pt.w)({
          Ed: Vt,
          fd: Ot
        }))
      },
      updateMyCosmetic(tt) {
        vV(Pt.c.UpdateMyCosmetic, (0, Pt.W)(tt))
      },
      holdEmoteWheel(tt) {
        !tt || Ce ? (0, KV.g)(hV, tt ? hV : 0) : Ht.j.sw("requestEmoteWheelHoldRelease")
      }
    };
    var SV = Vt(41219),
      cV = Vt(9425),
      RV = Vt(39832);
    const IV = [0, 0, 0],
      PV = [0, 0, 0],
      ZV = [0, 0, 0],
      LV = {
        blockAtViewPoint(tt) {
          let {
            x: et,
            y: Vt
          } = tt;
          const Ot = (0, mt.g)();
          if (null === Ot || void 0 === Ot || !Ot.renderFrame.hasView) return null;
          const {
            renderFrame: qt,
            clientApi: Dt,
            api: dt
          } = Ot;
          let jt = 0;
          return (0, RV.h)(((tt, et, Vt) => (jt = Dt.getBlockId(tt, et, Vt), 0 !== jt)), qt.cameraPosition, (0, RV.k)((tt => Jt.x.viewProj(dt.apiView, 0, tt)), et, Vt, IV), RV.d, PV, ZV) ? {
            pos: [PV[0], PV[1], PV[2]],
            normal: [ZV[0], ZV[1], ZV[2]],
            name: (0, cV.d)(jt)
          } : null
        }
      },
      FV = {
        setBlockHighlight(tt) {
          var et;
          null === (et = (0, mt.g)()) || void 0 === et || et.setBlockHighlight(tt)
        }
      };
    var kV = Vt(2034),
      GV = Vt(41098),
      zV = Vt(41222),
      oV = Vt(4630),
      rV = Vt(4606),
      UV = Vt(41229),
      AV = Vt(3346),
      iV = Vt(3349);
    let YV = null,
      BV = null;

    function pV(tt) {
      const et = tt.startsWith(iV.p),
        [Vt, Ot = Vt, qt = Vt] = (et ? tt.slice(iV.p.length) : tt).split(iV.l);
      return {
        top: Vt,
        left: Ot,
        right: qt,
        half: et
      }
    }

    function xV(tt) {
      const et = null === YV ? void 0 : (0, AV.b)(tt),
        Vt = void 0 === et ? 0 : YV.codes[et];
      return 0 === Vt ? void 0 : YV.pool[Vt - 1]
    }
    var TV = Vt(3344),
      gV = Vt(4595),
      sV = Vt(4626),
      nV = Vt(41146),
      tO = Vt(41231);
    const eO = "item:";
    let VO = null,
      OO = null,
      qO = null,
      DO = null,
      mO = !1,
      dO = !1;

    function jO() {
      return dO || (dO = !0, (0, sV.k)().then((tt => {
        tt && (0, kV.e)()
      }))), qO ??= Promise.all([(0, TV.g)(), (BV ??= Vt.e(1).then((() => Vt(60850))).then((tt => {
        let {
          BLOCK_FACE_RUNS: et,
          BLOCK_FACES: Vt,
          MAX_FACE_ITEM_ID: Ot
        } = tt;
        YV = {
          codes: (0, iV.D)(et, Ot + 1),
          pool: Vt.split(iV.x).map(pV)
        }
      }), (tt => {
        throw BV = null, tt
      })), BV), (0, tO.e)(), Vt.e(201).then((() => Vt(34399)))]).then((tt => {
        let [, , et, Vt] = tt;
        et.followBundledTextures(), VO = et, OO = Vt, (0, kV.e)()
      }), (tt => {
        qO = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", tt)
      })), qO
    }

    function HO(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = (0, nV.j)()) || void 0 === Vt ? void 0 : Vt.textureUrl(tt)) && void 0 !== et ? et : VO.itemSpriteUrl(tt)
    }

    function XO(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = (0, nV.j)()) || void 0 === Vt ? void 0 : Vt.textureUrl(tt)) && void 0 !== et ? et : VO.blockTextureUrl(tt)
    }

    function QO(tt) {
      var et;
      return null !== (et = (0, TV.c)(tt)) && void 0 !== et ? et : tt
    }

    function lO(tt, et) {
      var Vt, Ot, qt;
      return null !== (Vt = null !== (Ot = null !== (qt = XO(tt)) && void 0 !== qt ? qt : null === et || void 0 === et ? void 0 : et.rotated[tt]) && void 0 !== Ot ? Ot : null === et || void 0 === et ? void 0 : et.animated[tt]) && void 0 !== Vt ? Vt : VO.notFoundUrl()
    }

    function EO(tt) {
      return void 0 !== (0, AV.b)(tt) ? tt : /^[1-9][0-9]*$/.test(tt) ? (0, AV.e)(Number(tt)) : void 0
    }

    function fO(tt) {
      var et;
      if (tt.startsWith(eO)) {
        var Vt;
        const et = (0, TV.c)(tt.slice(5));
        return null !== (Vt = void 0 === et ? null : HO(et)) && void 0 !== Vt ? Vt : VO.notFoundUrl()
      }
      return null !== (et = VO.particleUrl(tt)) && void 0 !== et ? et : VO.notFoundUrl()
    }

    function wO(tt, et) {
      return "StairsBlock" === tt ? tt : et ? "SlabBlock" : "CubeBlock"
    }
    const yO = {
        async blockIcon(tt) {
          var et;
          let {
            name: Ot,
            size: qt,
            lineWidth: Dt
          } = tt;
          await jO();
          const mt = null !== (et = EO(Ot)) && void 0 !== et ? et : Ot,
            dt = (0, sV.d)(mt, qt, Dt);
          if (null !== dt) return dt;
          const jt = xV(mt),
            Ht = (0, AV.b)(mt),
            Xt = void 0 === Ht || null === OO ? void 0 : OO.itemTypeNameOf(Ht);
          if (null === VO || void 0 === jt) return "";
          const Qt = [jt.top, jt.left, jt.right].some((tt => null === XO(tt))),
            lt = Qt ? await (DO ??= Vt.e(207).then((() => Vt(34482))).then((tt => (mO && (mO = !1, (0, kV.e)()), {
              rotated: tt.rotatedBlockTextures,
              animated: tt.animatedBlockTextures
            })), (tt => (DO = null, mO = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", tt), null))), DO) : null;
          if (Qt && null === lt) return "";
          const Et = {
              top: lO(jt.top, lt),
              left: lO(jt.left, lt),
              right: lO(jt.right, lt),
              itemType: wO(Xt, jt.half)
            },
            ft = (0, nV.f)(),
            wt = 0 === ft ? mt : `${mt}#${ft}`;
          return (await (0, gV.b)()).drawBlockIconUrl(wt, qt, Dt, (() => Et))
        }
      },
      NO = {
        itemIcon: function(tt) {
          var et, Vt, qt, Dt;
          if (null === VO) return jO(), Ot.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(tt);
          if ((0, rV.h)(tt)) return {
            kind: "icon",
            url: null !== (Vt = null !== (qt = null === (Dt = (0, nV.j)()) || void 0 === Dt ? void 0 : Dt.textureUrl(tt)) && void 0 !== qt ? qt : VO.ingameIconUrl(tt)) && void 0 !== Vt ? Vt : VO.notFoundUrl()
          };
          if (tt.startsWith(rV.e)) return {
            kind: "icon",
            url: fO(tt.slice(rV.e.length))
          };
          if (0 === (0, AV.h)()) return (0, UV.c)(), Ot.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(tt);
          const mt = null !== (et = EO(tt)) && void 0 !== et ? et : tt,
            dt = (0, AV.b)(mt),
            jt = void 0 === dt ? void 0 : OO.itemTypeNameOf(dt);
          if (void 0 !== xV(mt)) return {
            kind: "drawnBlock"
          };
          const Ht = function(tt) {
            var et;
            return null !== (et = HO(QO(tt))) && void 0 !== et ? et : VO.notFoundUrl()
          }(mt);
          if ((0, sV.h)(mt) && ! function(tt) {
              const et = (0, nV.j)();
              return null !== et && (null !== et.textureUrl(QO(tt)) || null !== et.modelUrl(tt))
            }(mt)) return {
            kind: "model",
            url: Ht
          };
          if ("Gun" === jt) return {
            kind: "gun",
            url: Ht
          };
          if (void 0 !== dt && "GrayscaleArmour" === OO.itemTypeOf(dt) || Object.hasOwn(oV.b, mt)) {
            var Xt;
            const et = null !== (Xt = (0, oV.c)(tt)) && void 0 !== Xt ? Xt : (0, oV.c)(mt);
            if (et) return {
              kind: "item",
              url: Ht,
              tint: et
            }
          }
          return {
            kind: "item",
            url: Ht
          }
        },
        hasIcon: function(tt) {
          return void 0 !== EO(tt) || (0, rV.h)(tt) || tt.startsWith(rV.e)
        },
        isItemName: function(tt) {
          return void 0 !== EO(tt)
        }
      };
    var aO = Vt(705),
      MO = Vt(39839);

    function bO(tt) {
      if (null === tt || void 0 === tt || !tt.isCoreRunning) return null;
      const {
        api: et,
        chunks: Vt,
        items: Ot,
        tables: qt
      } = tt;
      return {
        playerFeet() {
          const tt = et.YM(et.localId);
          return null !== tt && void 0 !== tt && tt.every(Number.isFinite) ? tt : null
        },
        chunkBlocks: tt => Vt.isLoaded(tt[0], tt[1], tt[2]) ? (tt, et, Ot) => Vt.qd(tt, et, Ot) : null,
        blockName: tt => qt.nameOfId(tt),
        inventory: () => ({
          slots: Ot.playerItems().map((tt => tt ? {
            name: tt.name,
            amount: tt.amount
          } : null)),
          heldSlot: Ot.selectedSlot
        }),
        nearby() {
          const Vt = [];
          for (let qt = 0; qt < et.idStr.length; qt++) {
            var Ot;
            const Dt = et.idStr[qt],
              mt = et.serverIds[qt],
              dt = et.kinds[qt];
            if (null === Dt || et.isLocal(mt) || dt >>> Jt.c !== Jt.u.Lifeform) continue;
            const jt = et.YM(mt),
              Ht = aO.f[dt & Jt.g];
            jt && void 0 !== Ht && Vt.push({
              kind: "Player" === Ht ? "player" : Ht,
              name: null !== (Ot = tt.clientApi.getEntityName(Dt)) && void 0 !== Ot ? Ot : null,
              position: jt
            })
          }
          return Vt
        },
        droppedItems() {
          let tt = 0;
          for (let Vt = 0; Vt < et.idStr.length; Vt++) null !== et.idStr[Vt] && et.kinds[Vt] >>> Jt.c === Jt.u.Item && tt++;
          return tt
        }
      }
    }
    const JO = {
        worldCodeAiChunk: tt => Promise.resolve((0, MO.b)(bO((0, mt.g)()), tt)),
        worldCodeAiGameState: () => Promise.resolve((0, MO.f)(bO((0, mt.g)())))
      },
      CO = function(tt) {
        const et = QV(),
          Ot = QV(),
          qt = new Set,
          Dt = new Set,
          mt = () => {
            var et, Vt;
            return null !== (et = null === (Vt = tt.runtime()) || void 0 === Vt ? void 0 : Vt.currentViewer) && void 0 !== et ? et : null
          };
        let dt = null,
          jt = null;
        const Xt = (tt, et) => ({
            current: tt,
            watch(Vt) {
              let Ot = tt();
              return et.add((() => {
                const et = tt();
                et !== Ot && (Ot = et, Vt(et))
              }))
            }
          }),
          lt = tt => ({
            watch: et => (tt.add(et), () => {
              tt.delete(et)
            })
          }),
          Et = tt => {
            const et = mt(),
              Vt = null === et || void 0 === et ? void 0 : et.view;
            et && Vt && et.seek(Math.max(0, Math.min(Vt.totalTicks - 1, Vt.BQ + tt * Qt.Id)))
          },
          ft = {
            replay: Xt((() => {
              var tt;
              const et = mt(),
                Vt = null !== (tt = null === et || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null;
              return null === et || null === Vt || Vt.state === Qt.wd.None ? (dt = null, null) : (dt = (0, st.o)(dt, {
                id: et.id,
                BQ: Vt.BQ,
                totalTicks: Vt.totalTicks,
                bI: Qt.Id,
                playing: Vt.state === Qt.wd.Playing,
                speed: Vt.speed,
                cameraMode: Vt.cameraMode,
                freecam: "freecam" === Vt.cameraMode
              }), dt)
            }), et),
            replayEdits: Xt((() => {
              var tt;
              const et = mt(),
                Vt = null !== (tt = null === et || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null;
              return null === et || null === Vt || Vt.state === Qt.wd.None ? (jt = null, null) : (jt = (0, st.o)(jt, {
                cameraKeyframes: [...et.keyframes],
                playbackMark: Vt.mark,
                fileName: et.fileName,
                unsavedChanges: et.unsavedChanges,
                suggestSaveAs: et.suggestSaveAs
              }), jt)
            }), et),
            replayRecorder: Xt((() => {
              var et, Vt;
              return null !== (et = null === (Vt = tt.runtime()) || void 0 === Vt ? void 0 : Vt.recorder.current) && void 0 !== et ? et : jV.e.states.replayRecorder.current()
            }), Ot),
            replayVideoExporting: {
              current: mV.c,
              watch: tt => (0, Ht.n)("replayViewer|videoExportChanged", (() => {
                tt((0, mV.c)())
              }))
            }
          },
          wt = {
            replayUiActionRequested: lt(Dt),
            replayViewerRequested: lt(qt)
          },
          yt = tt => {
            for (const et of qt) et(tt)
          },
          Nt = () => {
            var Ot;
            !0 === (null === (Ot = mt()) || void 0 === Ot ? void 0 : Ot.isOpen) && Promise.all([Vt.e(98), Vt.e(67)]).then((() => Vt(60843))).then((Vt => {
              let {
                startWasmReplayVideoExport: Ot
              } = Vt;
              return Ot({
                viewer: mt,
                canvas: () => {
                  var et, Vt;
                  return null !== (et = null === (Vt = tt.canvas) || void 0 === Vt ? void 0 : Vt.call(tt)) && void 0 !== et ? et : null
                },
                watchViewer: et.add,
                requestViewer: yt
              })
            }), (tt => {
              console.error("Couldn't load the video export", tt), dV.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((tt => {
              console.error("The video export failed", tt)
            }))
          },
          Mt = {
            replayAction(tt) {
              if ((0, mV.c)()) return;
              const et = mt();
              switch (tt) {
                case "replaySkipBack":
                  Et(-1);
                  break;
                case "replaySkipForward":
                  Et(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== et && void 0 !== et && et.view && et.setSpeed((0, DV.i)(et.view.speed, "replaySpeedUp" === tt ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === et || void 0 === et || et.addKeyframe()
              }
            },
            setReplayPlaying(tt) {
              var et, Vt;
              (0, mV.c)() || (tt ? null === (et = mt()) || void 0 === et || et.play() : null === (Vt = mt()) || void 0 === Vt || Vt.pause())
            },
            seekReplay(tt) {
              var et;
              let {
                BQ: Vt,
                ignorePlaybackMark: Ot
              } = tt;
              null === (et = mt()) || void 0 === et || et.seek(Vt, null !== Ot && void 0 !== Ot && Ot)
            },
            setReplayCameraMode(tt) {
              var et;
              null === (et = mt()) || void 0 === et || et.setCameraMode(tt)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(tt) {
              var et;
              null === (et = mt()) || void 0 === et || et.setKeyframe(tt)
            },
            moveReplayCameraKeyframe(tt) {
              var et;
              let {
                from: Vt,
                to: Ot
              } = tt;
              null === (et = mt()) || void 0 === et || et.moveKeyframe(Vt, Ot)
            },
            deleteReplayCameraKeyframes(tt) {
              var et;
              let {
                start: Vt,
                end: Ot
              } = tt;
              null === (et = mt()) || void 0 === et || et.deleteKeyframes(Vt, Ot)
            },
            setReplayPlaybackMark(tt) {
              var et;
              null === (et = mt()) || void 0 === et || et.setMark(tt)
            },
            cropReplay(tt) {
              var et, Vt;
              let {
                start: Ot,
                end: qt
              } = tt;
              return !(0, mV.c)() && (null !== (et = null === (Vt = mt()) || void 0 === Vt ? void 0 : Vt.crop(Ot, qt)) && void 0 !== et && et)
            },
            holdReplayForShaderPackFailure(tt) {
              const et = mt();
              et && (et.holdForShaderPackFailure(), function(tt) {
                Vt.e(117).then((() => Vt(39419))).then((et => {
                  let {
                    shaderPackPage: Vt
                  } = et;
                  Vt.block(tt)
                })).catch((tt => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", tt)
                }))
              }(tt))
            },
            exportReplayVideo() {
              Nt()
            },
            toggleRecording() {
              var et;
              null === (et = tt.runtime()) || void 0 === et || et.recorder.toggleRecording()
            },
            saveClip() {
              var et;
              null === (et = tt.runtime()) || void 0 === et || et.recorder.saveClip()
            },
            setRecorderPrefs(et) {
              var Vt;
              let {
                clipping: Ot,
                clipSeconds: qt
              } = et;
              null === (Vt = tt.runtime()) || void 0 === Vt || Vt.recorder.setPrefs(Ot, qt)
            },
            setReplayViewerOpen(et) {
              var Vt;
              (0, Ne.g)(et) && (null === (Vt = tt.runtime()) || void 0 === Vt || Vt.recorder.viewerShown(et))
            },
            recordFlyingMiddleText(et) {
              var Vt;
              let {
                content: Ot,
                oD: qt,
                angle: Dt,
                rD: mt
              } = et;
              null === (Vt = tt.runtime()) || void 0 === Vt || Vt.recorder.recordFlyingText(JSON.stringify(Ot), qt, Dt, mt)
            },
            dragReplayCamera(et) {
              var Vt;
              let {
                dx: Ot,
                dy: qt
              } = et;
              null === (Vt = tt.freecam()) || void 0 === Vt || Vt.drag(Ot, qt)
            },
            moveReplayFreecam(et) {
              var Vt;
              null === (Vt = tt.freecam()) || void 0 === Vt || Vt.move(et)
            },
            holdReplayFreecamVertical(et) {
              var Vt;
              let {
                action: Ot,
                Pd: qt
              } = et;
              null === (Vt = tt.freecam()) || void 0 === Vt || Vt.holdVertical(Ot, qt)
            }
          },
          bt = tt => {
            var et;
            const Vt = mt(),
              Ot = null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.view) && void 0 !== et ? et : null;
            HV.has(tt) ? (tt => {
              for (const et of Dt) et(tt)
            })(tt) : XV.has(tt) ? Mt.replayAction(tt) : "replayPlayPause" === tt ? Vt && Ot && Ot.state !== Qt.wd.None && Mt.setReplayPlaying(Ot.state !== Qt.wd.Playing) : "replayChangeCameraMode" === tt ? null === Vt || void 0 === Vt || Vt.cycleCameraMode() : "replayExit" === tt ? !0 === (null === Vt || void 0 === Vt ? void 0 : Vt.inPlayback) && (0, Le.i)("/") : "replayExportVideo" === tt && Nt()
          };
        let Jt = !1;
        return {
          states: ft,
          events: wt,
          commands: Mt,
          lookups: {
            replayCamera() {
              var et, Vt, Ot;
              return !0 !== (null === (et = mt()) || void 0 === et ? void 0 : et.isOpen) ? null : null !== (Vt = null === (Ot = tt.cameraView) || void 0 === Ot ? void 0 : Ot.call(tt)) && void 0 !== Vt ? Vt : null
            },
            leaveGameReloadsPage() {
              var tt;
              return !0 === (null === (tt = mt()) || void 0 === tt ? void 0 : tt.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var tt;
              const Vt = !0 === (null === (tt = mt()) || void 0 === tt ? void 0 : tt.inPlayback);
              Vt !== Jt && (Jt = Vt, Ht.j.sw("connectedGameChanged")), et.fire()
            },
            recorderChanged: Ot.fire,
            keyDown: tt => {
              var et;
              switch (tt) {
                case "recordGame":
                  return void Mt.toggleRecording();
                case "recordClip":
                  return void((0, Ne.e)() || Mt.saveClip())
              }(0, mV.c)() || ("replayViewerOpen" !== tt ? tt.startsWith("replay") && ((0, Ne.e)() || !0 === (null === (et = mt()) || void 0 === et ? void 0 : et.inPlayback)) && bt(tt) : yt("toggle"))
            }
          }
        }
      }({
        runtime: qt.l,
        cameraView: () => {
          var tt;
          const et = null === (tt = (0, mt.g)()) || void 0 === tt ? void 0 : tt.renderFrame;
          if (!et) return null;
          const [Vt, Ot, qt] = et.cameraPosition, [Dt, dt, jt] = et.cameraDirection;
          return {
            position: [Vt, Ot, qt],
            direction: [Dt, dt, jt]
          }
        },
        canvas: () => {
          var tt, et, Vt;
          return null !== (tt = null === (et = (Vt = (0, Dt.C)()).canvas) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : null
        },
        freecam: qt.h
      }),
      uO = {
        states: {
          ...Xe,
          ...fe.k,
          ...CO.states,
          ...fV,
          ...Ut
        },
        events: {
          ...Qe,
          ...yt,
          ...fe.f,
          ...Wt.d,
          ...SV.g,
          ...CO.events,
          ...wV,
          ...vt.m
        },
        commands: {
          ...ht,
          ...le,
          ...Nt,
          ...fe.e,
          ...se,
          ...WV,
          ...vt.i,
          ...Ge,
          ...CO.commands,
          ...CV,
          ...At,
          ...FV,
          ...we
        },
        queries: {
          ...fe.h,
          ...JO
        },
        lookups: {
          ...Ee,
          ...Ft,
          ...SV.h,
          ...CO.lookups,
          ...Kt,
          ...qV,
          ...LV,
          ...it
        }
      };

    function KO() {
      (0, dt.h)(wt.m), (0, qt.m)(CO.feed), (0, Wt.e)(), ne || (ne = !0, (0, wt.j)(It.h, (tt => {
        const et = (0, Zt.h)(It.h, tt);
        "string" === typeof et && Promise.resolve().then((() => Vt(3722))).then((tt => {
          let {
            onCosmeticPackGranted: Vt
          } = tt;
          Vt(et)
        }))
      })), (0, wt.j)(It._, (tt => {
        const et = (0, Zt.h)(It._, tt);
        "number" === typeof et && Ht.j.sw("serverUpdating", Date.now() + et, !0)
      })), (0, wt.j)(It.E, (tt => {
        const et = (0, Zt.h)(It.E, tt);
        if ((0, Zt.d)(et)) {
          const {
            iq: tt,
            Yq: Vt
          } = et;
          (0, Te.e)({
            iq: "string" === typeof tt ? tt : null,
            Yq: "string" === typeof Vt ? Vt : null
          })
        }
      })), (0, wt.j)(Xt.gc.NewUiRequest, (tt => {
        const et = (0, Zt.k)(tt);
        (0, Zt.d)(et) && "number" === typeof et.id && (0, Zt.d)(et.clientParameters) && (0, ge.i)(et.id, et.clientParameters)
      })), (0, wt.j)(It.V, (tt => {
        const et = (0, Zt.h)(It.V, tt);
        "number" === typeof et && (0, ge.l)(et)
      })), (0, wt.g)(ge.e), (0, wt.j)(Xt.gc.UiRequestPopup, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et) && "number" === typeof et.id && "string" === typeof et.text) {
          const tt = et.id;
          (0, ge.n)(tt, et.text, !0 === et.destructive, (et => {
            se.answerUiRequest({
              id: tt,
              KX: et
            })
          }))
        }
      })), (0, wt.j)(Xt.gc.TopRightHelper, (tt => {
        const et = (0, Zt.k)(tt);
        void 0 !== et && Ht.j.sw("TopRightHelper", et, !0)
      })), (0, wt.j)(Xt.gc.TaskProgress, (tt => {
        const et = (0, Zt.k)(tt);
        (0, Zt.d)(et) && "string" === typeof et.taskId && "number" === typeof et.progress && (0, xe.c)({
          taskId: et.taskId,
          progress: et.progress
        })
      }))), uV || (uV = !0, (0, wt.j)(It.p, (tt => {
        const et = (0, Zt.h)(It.p, tt);
        (0, Zt.d)(et) && Ht.j.sw("showShopFromServer", {
          toggle: et.jt,
          Ht: et.Ht
        }, !0)
      })), (0, wt.j)(Xt.gc.OverShopInfo, (tt => {
        const et = (0, Zt.k)(tt);
        (0, Zt.d)(et) && Ht.j.sw("overShopInfo", et.info, !0)
      })), (0, wt.j)(Xt.gc.ShowShopTutorial, (() => {
        Ht.j.sw("showShopTutorial", null, !0)
      }))), bV || (bV = !0, (0, wt.f)((() => {
        var tt;
        (0, yV.resetLeaveEvents)(), null === (tt = JV) || void 0 === tt || tt(), JV = (0, wt.d)() ? (0, aV.i)(wt.d) : null, (0, wt.d)() || Ht.j.hN()
      })), (0, wt.j)(Xt.gc.SetCookie, (tt => {
        const et = (0, Zt.k)(tt),
          Vt = (0, Le.c)().gameNameWithVariation;
        (0, Zt.d)(et) && "string" === typeof et.key && null !== Vt && (0, NV.setCookie)(Vt, et.key, et.value)
      })), (0, wt.j)(Xt.gc.LeaveValues, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et) && "string" === typeof et.leaveEventType) {
          const {
            leaveEventType: tt,
            category: Vt,
            subCategory: Ot,
            value: qt
          } = et;
          (0, yV.updateLeaveValue)({
            leaveEventType: tt,
            category: Vt,
            subCategory: Ot,
            value: qt
          })
        }
      })), (0, wt.j)(Xt.gc.CustomAnalyticsEvent, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et) && "string" === typeof et.cat1) {
          const {
            cat1: tt,
            cat2: Vt,
            cat3: Ot,
            value: qt
          } = et;
          (0, yV.logCustomAnalyticsEvent)({
            cat1: tt,
            cat2: Vt,
            cat3: Ot,
            value: qt
          })
        }
      })), (0, wt.j)(Xt.gc.ProgressionEvent, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et)) {
          const {
            type: tt,
            location1: Vt,
            location2: Ot,
            location3: qt,
            score: Dt
          } = et;
          (0, yV.logProgressionEvent)({
            type: tt,
            location1: Vt,
            location2: Ot,
            location3: qt,
            score: Dt
          })
        }
      })), (0, wt.j)(Xt.gc.ResourceEvent, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et)) {
          const {
            type: tt,
            resourceType: Vt,
            amount: Ot,
            category: qt,
            itemName: Dt
          } = et;
          (0, yV.logResourceEvent)({
            type: tt,
            resourceType: Vt,
            amount: Ot,
            category: qt,
            itemName: Dt
          })
        }
      })), (0, wt.j)(Xt.gc.LeaderboardResponse, (tt => {
        const et = (0, Zt.k)(tt);
        if ((0, Zt.d)(et)) {
          const {
            category: tt,
            timeframe: Vt,
            data: Ot
          } = et;
          Ht.j.sw("leaderboardResponse", {
            category: tt,
            timeframe: Vt,
            data: Ot
          })
        }
      })), (0, wt.j)(It.z, (tt => {
        const et = (0, Zt.h)(It.z, tt);
        "string" === typeof et && (0, MV.e)(tt.conn, et)
      })), (0, wt.j)(It.C, (tt => {
        const et = (0, Zt.h)(It.C, tt);
        "string" === typeof et && console.error(`[logErrorToConsole]: ${et}`)
      }))), Gt(), (0, SV.d)(), ke || (ke = !0, (0, wt.j)(It.f, (tt => {
        const et = (0, Zt.h)(It.f, tt);
        void 0 !== et && (0, Fe.h)(et)
      }))), pe(), ce(), pt || (pt = !0, (0, Dt.o)(xt)), Ot.gameBridge.attach(uO), (0, Ot.installPageSources)({
        commands: {
          ...Ot.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: GV.m
        },
        queries: yO,
        lookups: {
          ...Ot.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...NO,
          VJ: GV.e,
          drawCallStats: zV.k
        }
      }), (0, kV.e)(), jO()
    }
  },
  41146: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      f: () => jt,
      j: () => dt,
      m: () => Ht
    });
    var Ot = Vt(2034);
    let qt = null,
      Dt = 0;
    const mt = new Set;

    function dt() {
      return qt
    }

    function jt() {
      return Dt
    }

    function Ht(tt) {
      qt = tt, Dt++, (0, Ot.e)();
      for (const et of mt) et()
    }

    function Xt(tt) {
      mt.add(tt)
    }
  },
  41231: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => dt
    });
    var Ot = Vt(41239);
    let qt = null,
      Dt = null;

    function mt() {
      return qt ??= Vt.e(62).then((() => Vt(60859))).catch((tt => {
        throw qt = null, tt
      })), qt
    }

    function dt() {
      return Dt ??= Promise.all([mt(), (0, Ot.i)()]).then((tt => {
        let [et] = tt;
        return et
      }), (tt => {
        throw Dt = null, tt
      })), Dt
    }
  },
  37306: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
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
  39226: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      f: () => qt
    });
    const Ot = ["description", "label"];

    function qt(tt) {
      const et = tt.type;
      return {
        type: et,
        params: tt[et]
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);