export const id = 46;
export const ids = [46];
export const modules = {
  39532: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      h: () => Oq,
      k: () => lq
    });
    const Yq = 6e3;

    function lq(qq, Eq) {
      return [Math.floor(qq[0] / Eq) * Eq, Math.floor(qq[1] / Eq) * Eq, Math.floor(qq[2] / Eq) * Eq]
    }

    function Oq(qq) {
      const Eq = (null !== qq && void 0 !== qq ? qq : "").match(/-?\d+(?:\.\d+)?/g);
      return Eq && Eq.length >= 3 ? [Number(Eq[0]), Number(Eq[1]), Number(Eq[2])] : null
    }

    function mq(qq, Eq) {
      return qq === Eq ? String(qq) : `${qq}-${Eq}`
    }

    function xq(qq, Eq, gq, Yq) {
      const lq = [];
      let Oq = new Map;
      for (let mq = qq[2]; mq < qq[2] + Eq; mq++) {
        const xq = new Map;
        let Aq = qq[0];
        for (; Aq < qq[0] + Eq;) {
          const lq = Yq(Aq, gq, mq);
          let cq = Aq;
          for (; cq + 1 < qq[0] + Eq && Yq(cq + 1, gq, mq) === lq;) cq++;
          if (null !== lq) {
            const qq = `${Aq} ${cq} ${lq}`,
              Eq = Oq.get(qq);
            Eq ? (Eq.z1 = mq, Oq.delete(qq), xq.set(qq, Eq)) : xq.set(qq, {
              x0: Aq,
              x1: cq,
              z0: mq,
              z1: mq,
              name: lq
            })
          }
          Aq = cq + 1
        }
        lq.push(...Oq.values()), Oq = xq
      }
      return lq.push(...Oq.values()), lq.sort(((qq, Eq) => qq.z0 - Eq.z0 || qq.x0 - Eq.x0)).map((qq => `x${mq(qq.x0,qq.x1)} z${mq(qq.z0,qq.z1)} ${qq.name}`))
    }

    function Aq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Yq;
      const Aq = [qq[0] + Eq - 1, qq[1] + Eq - 1, qq[2] + Eq - 1],
        cq = null !== lq && lq.every(((Eq, gq) => Math.floor(Eq) >= qq[gq] && Math.floor(Eq) <= Aq[gq])),
        uq = [`The chunk from ${qq.join(" ")} to ${Aq.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== lq && uq.push(`The player's feet are at ${lq.map(Math.floor).join(" ")}, ${cq?"in this chunk":"outside this chunk"}.`);
      const Bq = [];
      for (let Yq = qq[1]; Yq <= Aq[1]; Yq++) {
        const lq = xq(qq, Eq, Yq, gq).join("; "),
          Oq = Bq[Bq.length - 1];
        (null === Oq || void 0 === Oq ? void 0 : Oq.boxes) === lq ? Oq.to = Yq : Bq.push({
          from: Yq,
          to: Yq,
          boxes: lq
        })
      }
      const Wq = Bq.filter((qq => "" !== qq.boxes));
      0 === Wq.length && uq.push("It is all air.");
      let Nq = uq.join("\n").length;
      for (const Yq of Wq) {
        const qq = `y${mq(Yq.from,Yq.to)}: ${Yq.boxes}`;
        if (Nq += qq.length + 1, Nq > Oq) {
          uq.push(`Cut short: the layers from y${Yq.from} up aren't shown, as there are too many blocks.`);
          break
        }
        uq.push(qq)
      }
      return uq.join("\n")
    }
  },
  8755: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(24);

    function lq() {
      return !Yq.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36995: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      h: () => Oq,
      l: () => lq
    });
    const Yq = [.25, .5, 1, 2, 4, 8, 16];

    function lq(qq, Eq) {
      const gq = Yq;
      let lq = gq.indexOf(qq);
      return -1 === lq && (lq = gq.findIndex((Eq => Eq >= qq)), -1 === lq && (lq = gq.length - 1)), "up" === Eq ? gq[Math.min(lq + 1, gq.length - 1)] : gq[Math.max(lq - 1, 0)]
    }

    function Oq(qq) {
      return qq <= Yq[0]
    }

    function mq(qq) {
      return qq >= Yq[Yq.length - 1]
    }
  },
  36543: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq
    });
    let Yq = !1;

    function lq() {
      return Yq
    }

    function Oq(qq) {
      return Yq !== qq && (Yq = qq, !0)
    }
  },
  38910: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(31),
      lq = gq(1926);

    function Oq(qq) {
      let {
        taskId: Eq,
        progress: gq
      } = qq;
      const Yq = lq.c.get("_tasks");
      null !== Yq && void 0 !== Yq && Yq[Eq] && lq.c.apply({
        _tasks: {
          ...Yq,
          [Eq]: {
            ...Yq[Eq],
            progress: gq
          }
        }
      })
    }
    Yq.i.subscribe("clientTaskProgress", (qq => {
      Oq(qq)
    }))
  },
  39511: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      i: () => aq,
      k: () => cq,
      m: () => Bq,
      n: () => Aq,
      p: () => mq,
      s: () => uq,
      w: () => Vq
    });
    var Yq = gq(1926),
      lq = gq(31),
      Oq = gq(1933);
    const mq = (0, Oq.j)((function() {
        var qq, Eq, gq, lq;
        return {
          health: null !== (qq = Yq.c.get("_health")) && void 0 !== qq ? qq : null,
          maxHealth: null !== (Eq = Yq.c.get("_totalMaxHealth")) && void 0 !== Eq ? Eq : null,
          shield: null !== (gq = Yq.c.get("_shield")) && void 0 !== gq ? gq : null,
          maxShield: null !== (lq = Yq.c.get("maxShield")) && void 0 !== lq ? lq : null
        }
      }), [], (0, Oq.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      xq = [{
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

    function Aq(qq, Eq) {
      return xq[(qq ? 2 : 0) + (Eq ? 1 : 0)]
    }
    const cq = (0, Oq.j)((function() {
      var qq;
      return null !== (qq = Yq.c.get("_aura")) && void 0 !== qq ? qq : null
    }), [], (0, Oq.h)("_aura"));

    function uq(qq) {
      return {
        watch: Eq => (0, lq.k)("shotPlayer", (gq => {
          let {
            playerId: Yq,
            damage: lq,
            wasCrit: Oq,
            distance: mq
          } = gq;
          qq(Yq) && Eq({
            damage: lq,
            wasCrit: Oq,
            distance: mq
          })
        }))
      }
    }

    function Bq(qq) {
      return (0, Oq.c)("chat", (Eq => {
        let {
          serverChatMsgId: gq,
          content: Yq,
          chatterEId: lq
        } = Eq;
        return {
          serverChatMsgId: null !== gq && void 0 !== gq ? gq : null,
          content: Yq,
          author: lq ? qq(lq) : null
        }
      }))
    }
    class Wq {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const gq = this.shown;
        return qq !== this.needed && (this.needed = qq, this.neededSince = Eq, null === qq && (this.shown = null)), this.shown !== this.needed && Eq - this.neededSince > 200 && (this.shown = this.needed), this.shown !== gq
      }
    }

    function Nq(qq) {
      return [{
        translationKey: `touchKeys:${qq}`
      }]
    }
    const aq = {
      open: Nq("open"),
      close: Nq("close"),
      milk: Nq("milk"),
      shear: Nq("shear"),
      tame: Nq("tame"),
      feed: Nq("feed"),
      ride: Nq("ride")
    };

    function Vq(qq) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: qq
      }]
    }
  },
  40479: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      c: () => mq
    });
    var Yq = gq(3170);
    let lq = null,
      Oq = null;

    function mq() {
      return Oq ??= gq.e(209).then((() => gq(36389))).then((qq => {
        let {
          ITEM_SPRITES: Eq,
          ITEM_SPRITES_WITHOUT_FILE: gq,
          ITEM_FILES_WITHOUT_SPRITE: Oq
        } = qq;
        lq = function(qq, Eq, gq) {
          const lq = new Set,
            Oq = (0, Yq.y)(Eq);
          let mq = 0;
          for (const [Yq, xq] of qq.entries()) Yq === Oq[mq] ? mq++ : lq.add(xq);
          if ("" !== gq)
            for (const xq of gq.split(Yq.v)) lq.add(xq);
          return lq
        }(Eq.split(Yq.v), gq, Oq)
      }), (qq => {
        throw Oq = null, qq
      })), Oq
    }

    function xq(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = lq) || void 0 === gq ? void 0 : gq.has(qq)) && void 0 !== Eq && Eq
    }
  },
  39525: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => Oq,
      i: () => lq
    });
    const Yq = 128;

    function lq(qq, Eq, gq, Yq) {
      const lq = 2 * Eq - 1,
        Oq = 1 - 2 * gq,
        mq = qq(0) - lq * qq(3),
        xq = qq(4) - lq * qq(7),
        Aq = qq(8) - lq * qq(11),
        cq = qq(1) - Oq * qq(3),
        uq = qq(5) - Oq * qq(7),
        Bq = qq(9) - Oq * qq(11);
      Yq[0] = xq * Bq - Aq * uq, Yq[1] = Aq * cq - mq * Bq, Yq[2] = mq * uq - xq * cq;
      const Wq = Yq[0] * qq(3) + Yq[1] * qq(7) + Yq[2] * qq(11) < 0 ? -1 : 1,
        Nq = Math.hypot(Yq[0], Yq[1], Yq[2]) * Wq;
      return Yq[0] /= Nq, Yq[1] /= Nq, Yq[2] /= Nq, Yq
    }

    function Oq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = [Math.floor(Eq[0]), Math.floor(Eq[1]), Math.floor(Eq[2])],
        xq = [0, 0, 0],
        Aq = [1 / 0, 1 / 0, 1 / 0],
        cq = [1 / 0, 1 / 0, 1 / 0];
      for (let Wq = 0; Wq < 3; Wq++) xq[Wq] = Math.sign(gq[Wq]), 0 !== xq[Wq] && (cq[Wq] = Math.abs(1 / gq[Wq]), Aq[Wq] = (mq[Wq] + (xq[Wq] > 0 ? 1 : 0) - Eq[Wq]) / gq[Wq]);
      let uq = 0,
        Bq = Math.abs(gq[0]) > Math.abs(gq[1]) ? 0 : 1;
      for (Math.abs(gq[2]) > Math.abs(gq[Bq]) && (Bq = 2); uq <= Yq;) {
        if (qq(mq[0], mq[1], mq[2])) return lq[0] = mq[0], lq[1] = mq[1], lq[2] = mq[2], Oq[0] = 0, Oq[1] = 0, Oq[2] = 0, Oq[Bq] = -xq[Bq], !0;
        Bq = Aq[0] < Aq[1] ? 0 : 1, Aq[2] < Aq[Bq] && (Bq = 2), uq = Aq[Bq], mq[Bq] += xq[Bq], Aq[Bq] += cq[Bq]
      }
      return !1
    }
  },
  39507: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      return Math.hypot(qq[0] - Eq[0], qq[1] - Eq[1], qq[2] - Eq[2]) < gq + .5
    }
    gq.d(Eq, {
      e: () => Yq
    })
  },
  38927: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq
    });
    var Yq = gq(1214),
      lq = gq(1313),
      Oq = gq(24),
      mq = gq(1298),
      xq = gq(1308),
      Aq = gq(1498),
      cq = gq(36519);

    function uq(qq) {
      let {
        Oq: Eq,
        mq: gq
      } = qq;
      const uq = null !== Eq && void 0 !== Eq ? Eq : (0, xq.e)().gameNameWithVariation;
      (0, Yq.K)(uq) && ((0, cq.i)(), (0, mq.ob)((() => {
        console.log("Received matchmaking order from game server to game", Eq), (0, Oq.f)("inGameReplay"), (0, Aq.navigatePreserveSearch)((0, lq.e)(uq, null !== gq && void 0 !== gq ? gq : void 0))
      }), "video_start"))
    }
  },
  39121: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(31),
      lq = gq(1952);

    function Oq(qq) {
      var Eq, gq;
      const Oq = (0, lq.l)(null !== (Eq = null === (gq = lq.u.toggleFreeCam) || void 0 === gq ? void 0 : gq[0]) && void 0 !== Eq ? Eq : null);
      Yq.i.TV("showBottomMessage", {
        message: `Free Camera ${qq?"Enabled":"Disabled"}${Oq?` - Press ${Oq} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38915: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq,
      f: () => mq,
      i: () => xq,
      l: () => cq
    });
    var Yq = gq(31),
      lq = gq(1336);
    const Oq = new Map;

    function mq(qq, Eq) {
      Yq.i.TV("newUiRequest", {
        id: qq,
        clientParameters: Eq
      }, !0)
    }

    function xq(qq) {
      Yq.i.TV("removeUiRequest", qq, !0);
      const Eq = Oq.get(qq);
      Eq && (Eq.tearDownNotification(), Oq.delete(qq))
    }

    function Aq() {
      Yq.i.TV("clearUiRequests");
      for (const qq of Oq.values()) qq.tearDownNotification();
      Oq.clear()
    }

    function cq(qq, Eq, gq) {
      const Yq = lq.NotificationProvider.showPromptPopup({
        title: Eq,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Oq.set(qq, Yq), Yq.getResult().then((Eq => {
        Oq.delete(qq), "notificationTornDown" !== Eq && gq(Eq)
      }))
    }
  },
  39529: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Bq,
      h: () => Wq
    });
    var Yq = gq(190),
      lq = gq(39532);
    const Oq = 20;

    function mq(qq) {
      return qq.map(Math.floor).join(" ")
    }

    function xq(qq) {
      return null === qq.amount || 1 === qq.amount ? qq.name : `${qq.amount} ${qq.name}`
    }
    var Aq = gq(39535),
      cq = gq(1926),
      uq = gq(1308);

    function Bq(qq, Eq) {
      if (!qq) return Aq.b;
      const gq = qq.playerFeet();
      if (!gq) return "The player isn't in the world yet, so no blocks can be seen.";
      const Oq = Yq.c.Oa,
        mq = (0, lq.k)(null !== Eq && void 0 !== Eq ? Eq : gq, Oq),
        xq = qq.chunkBlocks(mq);
      return xq ? (0, lq.d)(mq, Oq, ((Eq, gq, Yq) => {
        const lq = xq(Eq, gq, Yq);
        return 0 === lq ? null : qq.blockName(lq).split("|")[0]
      }), gq) : `The chunk from ${mq.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${gq.map(Math.floor).join(" ")}.`
    }

    function Wq(qq) {
      var Eq, gq, Yq;
      if (!qq) return Aq.d;
      const lq = qq.playerFeet();
      if (!lq) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Bq,
        heldSlot: Wq
      } = qq.inventory();
      return function(qq) {
        const Eq = [];
        null !== qq.game && Eq.push(`Game: ${qq.game}.`);
        const gq = null === qq.health ? "" : `, health ${Math.round(qq.health)}${null===qq.maxHealth?"":` of ${Math.round(qq.maxHealth)}`}`;
        Eq.push(`The player (the creator) stands at ${mq(qq.position)}${gq}, ${qq.creative?"in":"not in"} creative mode.`);
        const Yq = qq.slots[qq.heldSlot];
        Eq.push(Yq ? `Holding (slot ${qq.heldSlot}): ${xq(Yq)}.` : `Holding nothing (slot ${qq.heldSlot} is empty).`);
        const lq = qq.slots.flatMap(((qq, Eq) => qq ? [`slot ${Eq}: ${xq(qq)}`] : []));
        Eq.push(lq.length > 0 ? `Inventory: ${lq.join(", ")}.` : "Inventory: empty.");
        const Aq = Eq => Math.hypot(Eq.position[0] - qq.position[0], Eq.position[1] - qq.position[1], Eq.position[2] - qq.position[2]),
          cq = [...qq.nearby].sort(((qq, Eq) => Aq(qq) - Aq(Eq)));
        if (0 === cq.length) Eq.push("No other players or mobs are near enough to see.");
        else {
          Eq.push("Near them, nearest first:");
          for (const qq of cq.slice(0, Oq)) {
            const gq = "player" === qq.kind ? `player "${qq.name||"?"}"` : qq.name && qq.name !== qq.kind ? `${qq.kind} "${qq.name}"` : qq.kind,
              Yq = Math.round(Aq(qq));
            Eq.push(`- ${gq} at ${mq(qq.position)}, ${Yq} block${1===Yq?"":"s"} away`)
          }
          cq.length > Oq && Eq.push(`- and ${cq.length-Oq} more further away`)
        }
        return qq.droppedItems > 0 && Eq.push(`${qq.droppedItems} dropped item${1===qq.droppedItems?" is":"s are"} on the ground nearby.`), Eq.join("\n")
      }({
        game: null !== (Eq = (0, uq.e)().gameNameWithVariation) && void 0 !== Eq ? Eq : null,
        position: lq,
        health: null !== (gq = cq.c.get("_health")) && void 0 !== gq ? gq : null,
        maxHealth: null !== (Yq = cq.c.get("_totalMaxHealth")) && void 0 !== Yq ? Yq : null,
        creative: !0 === cq.c.get("creative"),
        heldSlot: Wq,
        slots: Bq,
        nearby: qq.nearby(),
        droppedItems: qq.droppedItems()
      })
    }
  },
  38939: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      g: () => Aq,
      i: () => cq
    });
    var Yq = gq(1214),
      lq = gq(987),
      Oq = gq(36912),
      mq = gq(31);

    function xq(qq) {
      let {
        lobbyName: Eq,
        gameNameWithVariation: gq
      } = qq;
      return !(0, Yq.N)(Eq) || null !== gq && (gq.startsWith("testGym") || (0, lq.j)(gq))
    }

    function Aq(qq) {
      return qq.nE === Oq.c.Leave || qq.nE === Oq.c.Cursor
    }

    function cq(qq) {
      mq.i.TV("codeCollab", {
        type: qq.nE,
        docKey: qq.bE,
        version: qq.iE,
        editorCount: qq.ZE,
        peers: qq.fE,
        updates: qq.ME,
        playerId: qq.TE,
        playerName: qq.zE,
        colour: qq.SE,
        anchor: qq.pE,
        head: qq.GE,
        existingCursors: qq.LE,
        files: qq.JE,
        engineSettings: qq.kE
      })
    }
  },
  40434: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Cq,
      E: () => Sq,
      F: () => iq,
      I: () => zq,
      K: () => bq,
      M: () => Fq,
      N: () => Uq,
      P: () => fq,
      b: () => sq,
      d: () => Gq,
      e: () => hq,
      i: () => Xq,
      k: () => nq,
      m: () => vq,
      q: () => pq,
      u: () => Zq,
      w: () => Tq,
      x: () => Mq
    });
    var Yq = gq(1367),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(2357),
      xq = gq(4637),
      Aq = gq(4608);
    let cq, uq = !1,
      Bq = !1,
      Wq = !1,
      Nq = !1;
    const aq = 1300,
      Vq = 3e3;
    let dq = 0,
      jq = !1,
      Hq = !1,
      oq = 0;
    const Pq = 2;
    let Qq = !1,
      yq = !1;
    const tq = new Set,
      rq = new Set;

    function vq() {
      return uq
    }

    function hq() {
      return Hq
    }

    function nq() {
      return yq
    }

    function bq() {
      return (0, Oq.p)() && !yq
    }

    function iq(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (qq !== yq) {
        yq = qq;
        for (const qq of [...rq]) qq(yq);
        Eq && Uq()
      }
    }

    function Zq(qq) {
      return rq.add(qq), () => {
        rq.delete(qq)
      }
    }

    function fq() {
      (0, xq.k)(mq.C.Menu, (0, Oq.p)() ? 0 : mq.C.Menu)
    }

    function Mq() {
      Hq = !1, oq = 0, fq(), Uq()
    }

    function Tq(qq) {
      return tq.add(qq), () => {
        tq.delete(qq)
      }
    }

    function zq(qq) {
      Bq = !1, qq !== uq && (uq = qq, Nq = !1, clearTimeout(cq), Wq = !uq && Qq, uq ? (jq = !1, Hq = !1, oq = 0) : bq() && !Qq && (Hq = !0), Qq = !1, uq && !bq() && Kq(), Iq(), Wq && Uq())
    }

    function Sq(qq) {
      qq !== jq && (jq = qq, qq || Uq())
    }

    function pq() {
      Bq = !1, Nq || !0 !== kq() || (Nq = !0, clearTimeout(cq), cq = setTimeout(Lq, aq))
    }

    function Gq() {
      return (!Bq || performance.now() - dq > Vq) && (Bq = (0, Aq.M)().lockPointer(), dq = performance.now()), Bq
    }

    function Lq() {
      Jq() && Rq() && Gq()
    }

    function Jq() {
      return bq() && !uq && !jq && !(0, Yq.c)()
    }

    function kq() {
      var qq;
      return "undefined" === typeof navigator || null === (qq = navigator.userActivation) || void 0 === qq ? void 0 : qq.isActive
    }

    function Rq() {
      return Wq && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kq()
    }

    function Uq() {
      bq() ? Jq() && !Hq && Rq() && Gq() : uq && !Qq && Kq()
    }

    function Fq() {
      Hq ? navigator.vendor.startsWith("Apple") ? wq() : oq = Pq : Uq()
    }

    function sq() {
      oq > 0 && 0 === --oq && wq()
    }

    function Xq() {
      oq = 0
    }

    function wq() {
      Jq() && !0 === kq() && Gq()
    }

    function Kq() {
      Qq = !0, (0, Aq.M)().unlockPointer()
    }

    function Cq() {
      Bq = !1, Wq = !1, Nq = !1, clearTimeout(cq), jq = !1, Hq = !1, oq = 0, Qq = !1;
      const qq = uq;
      uq = !1, qq && Iq()
    }

    function Iq() {
      for (const qq of [...tq]) qq(uq);
      lq.i.TV("pointerLockUpdate", uq)
    }
  },
  40409: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      f: () => xq,
      i: () => Bq,
      l: () => cq,
      m: () => mq,
      o: () => uq,
      s: () => Aq
    });
    let Yq = null,
      lq = null,
      Oq = null;

    function mq(qq) {
      Yq = qq
    }

    function xq() {
      return Yq
    }

    function Aq(qq) {
      lq = qq
    }

    function cq() {
      return lq
    }

    function uq(qq) {
      Oq = qq
    }

    function Bq() {
      return Oq
    }

    function Wq() {
      var qq, Eq;
      return !0 === (null === (qq = lq) || void 0 === qq || null === (Eq = qq.currentViewer) || void 0 === Eq ? void 0 : Eq.inPlayback)
    }
  },
  40404: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      attachPlayGameSources: () => yY,
      playGameSources: () => QY
    });
    var Yq = gq(1904),
      lq = gq(40409),
      Oq = gq(4608),
      mq = gq(40325),
      xq = gq(40415),
      Aq = gq(39511),
      cq = gq(31),
      uq = gq(4625),
      Bq = gq(4622),
      Wq = gq(40353),
      Nq = gq(40377),
      aq = gq(40421),
      Vq = gq(40366);
    (0, Vq.l)(uq.ec.Chat, (qq => {
      if (qq.payloadKind !== Bq.hc.Msgpack) return;
      const Eq = function(qq) {
        if (null === qq || "object" !== typeof qq || !("content" in qq)) return null;
        const {
          chatMsgId: Eq,
          content: gq,
          chatterEId: Yq
        } = qq;
        return {
          serverChatMsgId: null !== Eq && void 0 !== Eq ? Eq : void 0,
          content: gq,
          chatterEId: void 0 === Yq || null === Yq ? void 0 : String(Yq)
        }
      }((0, Wq.e)(qq.payload));
      null !== Eq && cq.i.TV("chat", Eq, !0)
    }));
    const dq = {
        chatReceived: (0, Aq.m)((function(qq) {
          var Eq, gq, Yq;
          return {
            id: qq,
            name: null !== (Eq = aq.e.getName(qq)) && void 0 !== Eq ? Eq : null,
            local: (0, Nq.f)() === qq,
            profileEffect: null !== (gq = null === (Yq = (0, aq.h)(qq)) || void 0 === Yq ? void 0 : Yq.profileEffect) && void 0 !== gq ? gq : null
          }
        }))
      },
      jq = {
        sendChatMessage(qq) {
          var Eq;
          let {
            Hc: gq,
            channelName: Yq
          } = qq;
          null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.clientApi.sendChat(gq, Yq)
        }
      };
    var Hq = gq(190),
      oq = gq(1926),
      Pq = gq(40318),
      Qq = gq(39507);
    const yq = [0, 0, 0],
      tq = {
        codeBlockClickable(qq) {
          var Eq;
          const gq = (0, mq.e)();
          if (null === gq || void 0 === gq || !gq.isSessionLive) return !1;
          const Yq = gq.api;
          if (0 !== (Pq.t.playerFlags(Yq.apiView, 0) & Pq.Pd.Crouching)) return !1;
          const lq = Yq.queries.directorEntity(Yq.localId) >= Pq.sb.BYTES ? Yq.memoryData(Yq.scratch(), Pq.sb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === lq) return !1;
          for (let Oq = 0; Oq < 3; Oq++) yq[Oq] = Pq.sb.feet(lq, 0, Oq);
          return yq[1] += Pq.sb.eyeHeight(lq, 0), (0, Qq.e)(yq, qq, null !== (Eq = oq.c.get("blockReach")) && void 0 !== Eq ? Eq : Hq.c.IH)
        }
      },
      rq = {
        clickCodeBlock(qq) {
          var Eq;
          null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.clickCodeBlock(qq)
        }
      };
    var vq = gq(40331),
      hq = gq(40428),
      nq = gq(987),
      bq = gq(38976),
      iq = gq(4606),
      Zq = gq(40343),
      fq = gq(40329),
      Mq = gq(40350);

    function Tq(qq) {
      if (null === qq) return null;
      const Eq = [];
      for (const gq of qq) {
        const qq = Object.keys(gq)[0];
        if ("rg" === qq) {
          const {
            str: qq,
            style: Yq,
            clickableUrl: lq
          } = gq.rg, Oq = Object.keys(qq)[0], mq = qq[Oq];
          "string" !== Oq && "styledEntityName" !== Oq && "styledTranslatedText" !== Oq || Eq.push({
            str: mq,
            style: Yq,
            clickableUrl: lq
          })
        } else Eq.push(gq[qq])
      }
      return Eq
    }
    const zq = {
      screenPos(qq) {
        var Eq, gq;
        return null !== (Eq = null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectWorldPosToScreenPos(qq)) && void 0 !== Eq ? Eq : {
          x: 0,
          y: 0
        }
      }
    };
    let Sq = !1;

    function pq() {
      Sq || (Sq = !0, (0, Vq.l)(uq.ec.ProgressBarUpdate, (qq => {
        const Eq = (0, Mq.e)(qq);
        (0, Mq.b)(Eq) && cq.i.TV("progressBarUpdate", Eq, !0)
      })), (0, Vq.l)(Zq.u, (qq => {
        const Eq = (0, Mq.d)(Zq.u, qq);
        Eq && cq.i.TV("middleScreenBarInitiate", {
          duration: Eq.cE,
          uE: Eq.uE,
          horizBarRemOffset: Eq.BE
        }, !0)
      })), (0, Vq.l)(uq.ec.RemoveMiddleScreenBar, (() => {
        cq.i.TV("middleScreenBarRemove")
      })), (0, Vq.l)(Zq.V, (qq => {
        const Eq = (0, Mq.d)(Zq.V, qq);
        if (Eq) {
          var gq;
          const qq = Eq.hq ? null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectDirectionToScreenPos(Eq.hq) : void 0;
          cq.i.TV("sendHitmarker", {
            vq: Eq.vq,
            screenPos: qq
          }, !0)
        }
      })), (0, Vq.l)(Zq._, (qq => {
        const Eq = (0, Mq.d)(Zq._, qq);
        if (Eq) {
          const {
            id: qq,
            position: gq,
            style: Yq,
            mY: lq,
            AY: Oq
          } = Eq;
          cq.i.TV("setDirectionArrow", {
            id: qq,
            position: gq,
            style: Yq,
            text: Tq(lq),
            AY: Oq
          }, !0)
        }
      })), (0, Vq.l)(Zq.e, (qq => {
        const Eq = (0, Mq.d)(Zq.e, qq);
        Eq && cq.i.TV("clearDirectionArrow", {
          id: Eq.id
        }, !0)
      })), (0, Vq.l)(Zq.p, (qq => {
        const Eq = (0, Mq.d)(Zq.p, qq);
        Eq && cq.i.TV("flyingMiddleMessage", {
          content: Tq(Eq.tg),
          hg: Eq.hg,
          ng: Eq.ng
        }, !0)
      })), (0, Vq.l)(uq.ec.WorldVariation, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ("string" === typeof Eq) {
          const qq = Eq === nq.e ? null : {
            message: `Currently loaded as variation: ${Eq}`,
            type: "Warning"
          };
          cq.i.TV("showPermanentBottomMessage", qq, !0)
        }
      })), (0, Vq.l)(Zq.A, (qq => {
        const Eq = (0, Mq.d)(Zq.A, qq);
        Eq && function(qq, Eq) {
          const {
            type: gq,
            params: Yq
          } = (0, bq.c)(Eq), lq = {
            ...Yq
          };
          for (const Oq of bq.b) lq[Oq] && (lq[Oq] = Tq(lq[Oq]));
          iq.b.queueQTE(qq, gq, lq).getResult().then((Eq => {
            var gq;
            "boolean" === typeof Eq && (null === (gq = (0, mq.e)()) || void 0 === gq || gq.send(fq.b.QteResponse, {
              qteId: qq,
              qteResponse: Eq
            }))
          }))
        }(Eq.id, Eq.vY)
      })), (0, Vq.l)(Zq.O, (qq => {
        const Eq = (0, Mq.d)(Zq.O, qq);
        "number" === typeof Eq && iq.b.cancelQTE(Eq)
      })), (0, Vq.d)((() => {
        iq.b.reset(), cq.i.TV("showPermanentBottomMessage", null, !0)
      })), (0, Vq.h)((() => {
        iq.b.reset()
      })), (0, Vq.l)(uq.ec.EditItemCraftingRecipes, (qq => {
        const Eq = (0, Mq.e)(qq);
        (0, Mq.b)(Eq) && cq.i.TV("craftingRecipesEdited", {
          itemName: Eq.craftingRecipeItemName,
          recipesForItem: Eq.recipesForItem
        })
      })), (0, Vq.l)(Zq.K, (qq => {
        const Eq = (0, Mq.d)(Zq.K, qq);
        Eq && cq.i.TV("craftingRecipesEdited", {
          itemName: Eq.bg,
          recipesForItem: []
        })
      })))
    }
    var Gq = gq(24);
    const Lq = [{
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

    function Jq(qq) {
      return Pq.t.playerFlags(qq.api.apiView, 0)
    }
    const kq = {
        freeCamera: (0, Nq.b)((qq => () => {
          const Eq = qq.isSessionLive && 0 !== (Jq(qq) & Pq.Pd.FreeCamMoves),
            gq = qq.freeCameraAllowed() && null === Gq.b.get("scriptedCameraFacing");
          return Lq[(gq ? 2 : 0) + (Eq ? 1 : 0)]
        }), Lq[0], (qq => (0, Oq.w)(qq)))
      },
      Rq = {
        setFreeCameraMovesFly: qq => {
          var Eq;
          null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setFreeCameraMovesFly(qq)
        }
      },
      Uq = {
        freeCameraPos: () => {
          const qq = (0, mq.e)();
          return null !== qq && void 0 !== qq && qq.isSessionLive && qq.renderFrame.hasView && 0 !== (Jq(qq) & Pq.Pd.FreeCam) ? qq.renderFrame.cameraPosition : null
        }
      };
    var Fq = gq(39121);
    let sq = !1,
      Xq = !1;

    function wq() {
      const qq = (0, mq.e)();
      if (null === qq || void 0 === qq || !qq.isSessionLive) return void(sq = !1);
      const Eq = 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.FreeCam);
      Eq !== sq && (sq = Eq, (0, Fq.e)(Eq))
    }
    var Kq = gq(307),
      Cq = gq(37086),
      Iq = gq(1933);
    var eq = gq(40432),
      Dq = gq(40371);
    const qE = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let EE = "off";

    function gE(qq) {
      var Eq;
      return null === qq ? null : {
        label: null !== (Eq = (0, eq.d)(qq, "interactionPrompt")) && void 0 !== Eq ? Eq : null
      }
    }
    const YE = new Map([
      [Pq.xc.Open, {
        label: Aq.i.open
      }],
      [Pq.xc.Close, {
        label: Aq.i.close
      }],
      [Pq.xc.Milk, {
        label: Aq.i.milk
      }],
      [Pq.xc.Shear, {
        label: Aq.i.shear
      }],
      [Pq.xc.Tame, {
        label: Aq.i.tame
      }],
      [Pq.xc.Feed, {
        label: Aq.i.feed
      }],
      [Pq.xc.Ride, {
        label: Aq.i.ride
      }]
    ]);
    class lE {
      constructor() {
        this.target = qE, this.lc = Pq.id, this.optionName = null, this.pickaxe = new Aq.e
      }
      read(qq) {
        var Eq;
        const gq = Pq.t.targetBlockId(qq.api.apiView, 0);
        gq !== this.lc && (this.lc = gq, this.optionName = gq === Pq.id ? null : `${qq.tables.getMetaInfo(gq).rootName}CrosshairText`);
        const Yq = null === this.optionName ? null : null !== (Eq = qq.tables.getClientOption(this.optionName)) && void 0 !== Eq ? Eq : null;
        this.pickaxe.update(function(qq, Eq) {
          var gq, Yq, lq;
          if (0 === (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.Breaking) || Eq === Pq.id || 0 === Eq) return null;
          const {
            tables: Oq
          } = qq;
          if (!0 === Oq.getClientOption("creative")) return null;
          const mq = Oq.nameOfId(Eq),
            xq = null === (gq = qq.items.Fc()) || void 0 === gq ? void 0 : gq.name,
            Aq = null !== (Yq = Oq.getItemStat(mq, "harvestLevel")) && void 0 !== Yq ? Yq : 0;
          return (0, Kq.Mc)({
            blockHarvestType: Oq.getDefaultItemStat(mq, "harvestType"),
            blockHarvestLevel: Oq.getDefaultItemStat(mq, "harvestLevel"),
            harvestLevel: Aq,
            heldToolType: void 0 === xq ? void 0 : Oq.getDefaultItemStat(xq, "harvests"),
            heldToolLevel: void 0 === xq ? void 0 : Oq.getDefaultItemStat(xq, "level")
          }) && null !== (lq = Cq.q[Aq]) && void 0 !== lq ? lq : null
        }(qq, gq)), qq.watchPromptPick(EE);
        const lq = "touch" === EE ? function(qq) {
          var Eq;
          const gq = qq.interactLabel;
          return gq === Pq.xc.Entity ? gE(qq.promptEntity) : gq === Pq.xc.TameWith ? {
            label: (0, Aq.w)(qq.tables.nameOfId(qq.interactIcon))
          } : null !== (Eq = YE.get(gq)) && void 0 !== Eq ? Eq : null
        }(qq) : gE(qq.promptEntity);
        return this.target = (0, Iq.m)(this.target, {
          interactPrompt: lq,
          blockText: Yq,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let OE = null;
    const mE = {
      current: () => {
        var qq, Eq;
        return null !== (qq = null === (Eq = OE) || void 0 === Eq ? void 0 : Eq.target) && void 0 !== qq ? qq : qE
      },
      watch: qq => {
        const Eq = new lE;
        OE = Eq;
        const gq = (0, Nq.h)((gq => {
          let Yq = Eq.read(gq);
          qq(Yq);
          const lq = (0, Oq.x)((() => {
            const lq = Eq.read(gq);
            lq !== Yq && (Yq = lq, qq(lq))
          }));
          return () => {
            lq(), gq.watchPromptPick("off")
          }
        }));
        return () => {
          gq(), OE === Eq && (OE = null)
        }
      }
    };
    let xE = 0,
      AE = 0;
    const cE = {
        health: Aq.p,
        aura: Aq.k,
        hotbar: Dq.c.states.hotbar,
        heldItemAim: Dq.c.states.heldItemAim,
        crouching: (0, Nq.b)((qq => function(qq) {
          const Eq = () => 0 !== (Pq.t.playerFlags(qq.apiView, 0) & Pq.Pd.Crouching);
          return {
            current: Eq,
            watch(qq) {
              let gq = Eq();
              return (0, Oq.w)((() => {
                const Yq = Eq();
                Yq !== gq && (gq = Yq, qq(Yq))
              }))
            }
          }
        }(qq.api).current), !1, (qq => (0, Oq.w)(qq))),
        flight: (0, Nq.b)((qq => () => function(qq) {
          const Eq = Pq.t.playerFlags(qq.apiView, 0);
          return (0, Aq.n)(0 !== (Eq & Pq.Pd.CanFly), 0 !== (Eq & Pq.Pd.Flying))
        }(qq.api)), (0, Aq.n)(!1, !1), (qq => (0, Oq.w)(qq))),
        gliderBoostFuel: (0, Nq.b)((qq => () => Pq.t.gliderBoostFuel(qq.api.apiView, 0)), 0, (qq => (0, Oq.w)(qq))),
        crosshairTarget: mE
      },
      uE = {
        hotbarSlotRequested: Dq.c.events.hotbarSlotRequested,
        hotbarScrolled: Dq.c.events.hotbarScrolled,
        numberKeyPressed: Dq.c.events.numberKeyPressed,
        shotDamageToShow: (0, Aq.s)((qq => !0 === (0, eq.d)(qq, "showDamageAmounts")))
      },
      BE = {
        selectHotbarSlot: Dq.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: qq => {
          EE = qq
        }
      },
      WE = {
        momentumFrac: function() {
          var qq, Eq, gq;
          const Yq = (0, mq.e)(),
            lq = performance.now(),
            Oq = null === Yq || void 0 === Yq || null === (qq = Yq.items.Fc()) || void 0 === qq || null === (Eq = qq.attributes) || void 0 === Eq || null === (gq = Eq.customAttributes) || void 0 === gq ? void 0 : gq.enchantments;
          return xE = null !== Yq && null !== Oq && void 0 !== Oq && Oq.Momentum ? 0 !== (Pq.t.playerFlags(Yq.api.apiView, 0) & Pq.Pd.Breaking) ? Math.max(0, Pq.t.momentumFrac(Yq.api.apiView, 0)) : Math.max(0, xE - (lq - AE) / 1500) : 0, AE = lq, xE
        }
      };
    var NE = gq(40320);
    const aE = {
      lobbyManage(qq) {
        var Eq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LobbyManage, qq)
      }
    };
    var VE = gq(1226),
      dE = gq(36543),
      jE = gq(8755),
      HE = gq(1622),
      oE = gq(2357),
      PE = gq(4627);
    let QE = !1;

    function yE(qq) {
      QE = qq
    }

    function tE() {
      "inGame" !== Gq.b.get("gameState") || (0, HE.r)() || cq.i.TV("ctrlCrouchWithoutFullscreen")
    }
    let rE = !1;
    const vE = {
        OpenEmoteWheel: () => {
          yE(!0), rE = !0, queueMicrotask((() => {
            rE && (rE = !1, cq.i.TV("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          cq.i.TV("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, dE.e)() || cq.i.TV("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, dE.e)() || cq.i.TV("XKeyPressed")
        },
        CtrlCrouch: tE,
        "primary-fire": () => {
          cq.i.TV("mouseState", {
            nu: VE.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          cq.i.TV("mouseState", {
            nu: VE.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          cq.i.TV("mouseState", {
            nu: VE.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      hE = {
        OpenEmoteWheel: () => {
          yE(!1), rE ? (rE = !1, (0, jE.e)() || cq.i.TV("requestEmoteWheelHoldOpen")) : cq.i.TV("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: tE,
        "primary-fire": () => {
          cq.i.TV("mouseState", {
            nu: VE.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          cq.i.TV("mouseState", {
            nu: VE.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          cq.i.TV("mouseState", {
            nu: VE.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let nE = !1;

    function bE() {
      nE || (nE = !0, (0, PE.h)((qq => {
        if ((0, lq.b)()) return;
        const Eq = (0, PE.d)(qq) ? "primary-fire" : qq.action;
        var gq;
        if (qq.down) {
          if (0 === (qq.flags & oE.e.Synthetic)) {
            var Yq;
            null === (Yq = vE[Eq]) || void 0 === Yq || Yq.call(vE)
          }
        } else null === (gq = hE[Eq]) || void 0 === gq || gq.call(hE)
      })))
    }
    var iE = gq(296),
      ZE = gq(96),
      fE = gq(38),
      ME = gq(40434),
      TE = gq(1308),
      zE = gq(38939);
    let SE = !1;
    const pE = {
      sendCodeCollab(qq) {
        var Eq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CodeCollab, (0, fq.o)(qq), (0, zE.g)(qq))
      }
    };
    var GE = gq(39056);
    let LE = null,
      JE = !1,
      kE = null;

    function RE() {
      return "inGame" === Gq.b.get("gameState") && !(0, dE.e)()
    }
    const UE = {
        OpenInventory: qq => {
          (0, HE.v)(qq, "inventory", (0, NE.j)())
        },
        OpenShop: qq => {
          LE && RE() && (0, HE.u)(qq, iE.p.SHOP, !LE.shopIsEmpty(oq.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: qq => {
          RE() && (0, HE.u)(qq, iE.p.LOBBY_LEADERBOARD, (0, GE.d)({
            lobbyLeaderboardInfo: oq.c.get("lobbyLeaderboardInfo"),
            lobbyManage: oq.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: qq => {
          var Eq;
          const gq = null === (Eq = LE) || void 0 === Eq ? void 0 : Eq.getClientGameMapKey();
          gq ? (0, HE.y)(qq, !0, gq) : (0, HE.v)(qq, "retentionFeatures", !(!oq.c.get("_tasks") && !oq.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: qq => {
          (0, HE.v)(qq, "inviteLink", ZE.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: qq => {
          RE() && function(qq) {
            var Eq;
            const gq = (0, mq.e)(),
              Yq = null !== gq && void 0 !== gq && gq.isSessionLive ? gq.api : null,
              lq = Yq ? Yq.Py(Yq.localId) : null,
              Oq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.map((qq => Math.floor(qq)))) && void 0 !== Eq ? Eq : null;
            (0, HE.y)(qq, null !== Oq && (0, zE.c)((0, TE.e)()), (() => {
              cq.i.TV("EditLobbyCode", Oq)
            }))
          }(qq)
        },
        HideUi: () => {
          cq.i.TV("showUi", !1)
        }
      },
      FE = {
        HideUi: () => {
          cq.i.TV("showUi", !0)
        }
      };

    function sE() {
      JE || (JE = !0, gq.e(153).then((() => gq(42369))).then((qq => {
        LE = qq
      }), (qq => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", qq)
      })), (0, ME.w)((qq => {
        qq || !(0, ME.e)() || (0, ZE.isMobile)() || !fE.i.getItem("disableFullscreen") || (0, HE.p)() || Gq.b.set({
          openEverythingMenuName: iE.p.SETTINGS
        })
      })), (0, PE.h)((qq => {
        let {
          action: Eq,
          down: gq,
          press: Yq
        } = qq;
        var Oq, mq;
        (0, lq.b)() || (gq ? null === (Oq = UE[Eq]) || void 0 === Oq || Oq.call(UE, function(qq) {
          var Eq;
          if (0 === qq || (null === (Eq = kE) || void 0 === Eq ? void 0 : Eq.press) !== qq) {
            const Eq = {
              press: qq,
              event: new Event("inputAction")
            };
            kE = Eq, queueMicrotask((() => {
              kE === Eq && (kE = null)
            }))
          }
          return kE.event
        }(Yq)) : null === (mq = FE[Eq]) || void 0 === mq || mq.call(FE))
      })))
    }
    var XE = gq(38910),
      wE = gq(38927),
      KE = gq(38915);
    const CE = {
      completeTask(qq) {
        var Eq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CompleteTask, (0, fq.q)(qq))
      },
      setServerCookie(qq) {
        var Eq;
        let {
          key: gq,
          value: Yq
        } = qq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.GeneralCookieSet, (0, fq.w)({
          KA: gq,
          CA: Yq
        }))
      },
      answerUiRequest(qq) {
        var Eq;
        let {
          id: gq,
          xu: Yq
        } = qq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResp, (0, fq.V)({
          ou: gq,
          Pu: Yq,
          Qu: 5
        }))
      },
      chooseRewardedAd(qq) {
        var Eq;
        let {
          id: gq,
          xu: Yq
        } = qq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResponded, (0, fq.S)({
          id: gq,
          xu: Yq
        }))
      },
      requestLeaderboard(qq) {
        var Eq;
        let {
          category: gq,
          timeframe: Yq,
          seeTop: lq
        } = qq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LeaderboardRequest, {
          category: gq,
          timeframe: Yq,
          seeTop: lq
        })
      }
    };
    let IE = !1;
    const eE = Hq.c.ZH / 2,
      DE = [eE, -eE, -eE, -eE, eE, eE, -eE, eE],
      qg = [0, 0, 0];

    function Eg(qq, Eq, gq) {
      for (let Yq = 0; Yq < qq.length; Yq += 2)
        if (qq[Yq] === Eq && qq[Yq + 1] === gq) return !0;
      return !1
    }
    const gg = {
      blocksStandingOn: function() {
        const qq = (0, mq.e)();
        if (null === qq) return [];
        const {
          api: Eq,
          chunks: gq,
          tables: Yq
        } = qq;
        if (!Eq.readPosition(Eq.localId, qg)) return [];
        const [lq, Oq, xq] = qg, Aq = Math.ceil(Oq) - 1, cq = [], uq = [];
        for (let mq = 0; mq < DE.length; mq += 2) {
          const qq = lq + DE[mq],
            Eq = xq + DE[mq + 1];
          if (Number.isInteger(qq) || Number.isInteger(Eq)) continue;
          const Oq = Math.floor(qq),
            Bq = Math.floor(Eq);
          if (Eg(uq, Oq, Bq)) continue;
          const Wq = gq.lc(Oq, Aq, Bq);
          Yq.isSolidBlockId(Wq) && (uq.push(Oq, Bq), cq.push(Yq.nameOfId(Wq)))
        }
        return cq
      },
      dropAhead: function() {
        const qq = (0, mq.e)();
        return null !== qq && 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.DropAhead)
      }
    };
    var Yg = gq(36995),
      lg = gq(39024),
      Og = gq(1336),
      mg = gq(40385);
    const xg = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Ag = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function cg() {
      const qq = new Set;
      return {
        add: Eq => (qq.add(Eq), () => {
          qq.delete(Eq)
        }),
        fire() {
          for (const Eq of qq) Eq()
        }
      }
    }
    const ug = Object.freeze([]);

    function Bg(qq, Eq) {
      let gq, {
        rereads: Yq,
        followLocalId: lq
      } = Eq;
      const mq = () => (gq = (0, Iq.m)(gq, qq()), gq);
      return {
        current: mq,
        watch(qq) {
          const Eq = (0, aq.b)((Eq => {
            Yq(Eq) && qq(mq())
          }));
          if (!lq) return Eq;
          let gq = (0, Nq.f)();
          const xq = (0, Oq.x)((() => {
            const Eq = (0, Nq.f)();
            Eq !== gq && (gq = Eq, qq(mq()))
          }));
          return () => {
            Eq(), xq()
          }
        }
      }
    }
    const Wg = {
        players: Bg((function() {
          const qq = aq.e.ids(),
            Eq = {};
          for (const Oq of qq) {
            var gq, Yq, lq;
            Eq[Oq] = {
              name: null !== (gq = aq.e.getName(Oq)) && void 0 !== gq ? gq : null,
              ranks: null !== (Yq = aq.e.getSetting(Oq, "ranks")) && void 0 !== Yq ? Yq : ug,
              cosmetics: null !== (lq = (0, aq.h)(Oq)) && void 0 !== lq ? lq : null
            }
          }
          return {
            ids: qq,
            byId: Eq,
            localId: (0, Nq.f)()
          }
        }), {
          rereads: qq => "roster" !== qq.kind || qq.members || qq.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Bg((function() {
          const qq = {};
          for (const lq of aq.e.ids()) {
            var Eq, gq, Yq;
            qq[lq] = {
              colour: null !== (Eq = aq.e.getSetting(lq, "colorInLobbyLeaderboard")) && void 0 !== Eq ? Eq : null,
              values: null !== (gq = aq.e.getSetting(lq, "lobbyLeaderboardValues")) && void 0 !== gq ? gq : null,
              tags: null !== (Yq = aq.e.getSetting(lq, "lobbyLeaderboardTags")) && void 0 !== Yq ? Yq : null
            }
          }
          return qq
        }), {
          rereads: function(qq) {
            if ("roster" !== qq.kind) return "reset" === qq.kind;
            const {
              members: Eq,
              settings: gq
            } = qq;
            return Eq || gq.has("colorInLobbyLeaderboard") || gq.has("lobbyLeaderboardValues") || gq.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ng = {
        cosmeticsUpdated: {
          watch: qq => (0, aq.b)((Eq => {
            if ("cosmetics" !== Eq.kind) return;
            const gq = (0, Nq.f)();
            qq(Eq.updates.map((qq => {
              let {
                yY: Eq,
                tY: Yq,
                rY: lq
              } = qq;
              return {
                local: Eq === gq,
                tY: Yq,
                rY: lq
              }
            })))
          }))
        }
      };
    var ag = gq(2834),
      Vg = gq(1710),
      dg = gq(623),
      jg = gq(40440);
    let Hg = !1,
      og = null;
    const Pg = {
      setShopOpen(qq) {
        var Eq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ShopMenuChanged, (0, fq.M)(qq))
      },
      buyShopItem(qq) {
        var Eq;
        let {
          categoryKey: gq,
          itemKey: Yq,
          userInput: lq
        } = qq;
        null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ItemBought, {
          categoryKey: gq,
          itemKey: Yq,
          shopVersion: oq.c.get("_shopVersion"),
          userInput: lq
        })
      }
    };
    let Qg = !1;
    var yg = gq(4637);
    const tg = oE.C.LookFrozen | oE.C.ClicksSuppressed;

    function rg(qq, Eq) {
      var gq;
      null !== (gq = (0, mq.e)()) && void 0 !== gq && gq.send(qq, Eq) || console.warn(`[bloxd-wasm-client] message ${qq} not sent: no live game or the core's command ring is full`)
    }(0, Vq.l)(Zq.bb, (qq => {
      const Eq = (0, Mq.d)(Zq.bb, qq);
      void 0 !== Eq && cq.i.TV("setDiscordReportKey", Eq)
    }));
    const vg = {
      ignorePlayer(qq) {
        rg(fq.b.IgnoreUser, (0, fq.x)({
          um: qq
        }))
      },
      reportPlayer(qq) {
        let {
          playerId: Eq,
          chatMsgId: gq,
          Oc: Yq,
          details: lq
        } = qq;
        rg(fq.b.UserReport, (0, fq.gb)({
          Sc: Eq,
          Gc: gq,
          Oc: Yq,
          mc: lq
        }))
      },
      reportWorldCodeChat(qq) {
        let {
          chatMsgId: Eq,
          Oc: gq,
          details: Yq
        } = qq;
        rg(fq.b.UserReport, (0, fq.gb)({
          Sc: "",
          Gc: Eq,
          Oc: gq,
          mc: Yq
        }))
      },
      requestDiscordReportKey(qq) {
        rg(fq.b.ReqDiscordReportKey, (0, fq.H)(qq))
      },
      reportLobbyOrGame(qq) {
        let {
          target: Eq,
          Oc: gq,
          details: Yq
        } = qq;
        "customGame" === Eq ? rg(fq.b.CustomGameReport, (0, fq.t)({
          Oc: gq,
          mc: Yq
        })) : rg(fq.b.LobbyReport, (0, fq.y)({
          Oc: gq,
          mc: Yq
        }))
      },
      updateMyCosmetic(qq) {
        rg(fq.b.UpdateMyCosmetic, (0, fq.eb)(qq))
      },
      holdEmoteWheel(qq) {
        !qq || QE ? (0, yg.k)(tg, qq ? tg : 0) : cq.i.TV("requestEmoteWheelHoldRelease")
      }
    };
    var hg = gq(40448),
      ng = gq(9379),
      bg = gq(39525);
    const ig = [0, 0, 0],
      Zg = [0, 0, 0],
      fg = [0, 0, 0],
      Mg = {
        blockAtViewPoint(qq) {
          let {
            x: Eq,
            y: gq
          } = qq;
          const Yq = (0, mq.e)();
          if (null === Yq || void 0 === Yq || !Yq.renderFrame.hasView) return null;
          const {
            renderFrame: lq,
            clientApi: Oq,
            api: xq
          } = Yq;
          let Aq = 0;
          return (0, bg.g)(((qq, Eq, gq) => (Aq = Oq.getBlockId(qq, Eq, gq), 0 !== Aq)), lq.cameraPosition, (0, bg.i)((qq => Pq.t.viewProj(xq.apiView, 0, qq)), Eq, gq, ig), bg.d, Zg, fg) ? {
            pos: [Zg[0], Zg[1], Zg[2]],
            normal: [fg[0], fg[1], fg[2]],
            name: (0, ng.h)(Aq)
          } : null
        }
      },
      Tg = {
        setBlockHighlight(qq) {
          var Eq;
          null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setBlockHighlight(qq)
        }
      };
    var zg = gq(1914),
      Sg = gq(40454),
      pg = gq(40462),
      Gg = gq(4319),
      Lg = gq(4289),
      Jg = gq(40466),
      kg = gq(3166),
      Rg = gq(3170);
    let Ug = null,
      Fg = null;

    function sg(qq) {
      const Eq = qq.startsWith(Rg.l),
        [gq, Yq = gq, lq = gq] = (Eq ? qq.slice(Rg.l.length) : qq).split(Rg.h);
      return {
        top: gq,
        left: Yq,
        right: lq,
        half: Eq
      }
    }

    function Xg(qq) {
      const Eq = null === Ug ? void 0 : (0, kg.e)(qq),
        gq = void 0 === Eq ? 0 : Ug.codes[Eq];
      return 0 === gq ? void 0 : Ug.pool[gq - 1]
    }
    var wg = gq(3157),
      Kg = gq(4280),
      Cg = gq(4310),
      Ig = gq(40470),
      eg = gq(40476);
    const Dg = "item:";
    let qY = null,
      EY = null,
      gY = null,
      YY = null,
      lY = !1,
      OY = !1;

    function mY() {
      return OY || (OY = !0, (0, Cg.g)().then((qq => {
        qq && (0, zg.d)()
      }))), gY ??= Promise.all([(0, wg.g)(), (Fg ??= gq.e(1).then((() => gq(42383))).then((qq => {
        let {
          BLOCK_FACE_RUNS: Eq,
          BLOCK_FACES: gq,
          MAX_FACE_ITEM_ID: Yq
        } = qq;
        Ug = {
          codes: (0, Rg.A)(Eq, Yq + 1),
          pool: gq.split(Rg.v).map(sg)
        }
      }), (qq => {
        throw Fg = null, qq
      })), Fg), (0, eg.f)(), gq.e(190).then((() => gq(9301)))]).then((qq => {
        let [, , Eq, gq] = qq;
        Eq.followBundledTextures(), qY = Eq, EY = gq, (0, zg.d)()
      }), (qq => {
        gY = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", qq)
      })), gY
    }

    function xY(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = (0, Ig.j)()) || void 0 === gq ? void 0 : gq.textureUrl(qq)) && void 0 !== Eq ? Eq : qY.itemSpriteUrl(qq)
    }

    function AY(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = (0, Ig.j)()) || void 0 === gq ? void 0 : gq.textureUrl(qq)) && void 0 !== Eq ? Eq : qY.blockTextureUrl(qq)
    }

    function cY(qq) {
      var Eq;
      return null !== (Eq = (0, wg.d)(qq)) && void 0 !== Eq ? Eq : qq
    }

    function uY(qq, Eq) {
      var gq, Yq, lq;
      return null !== (gq = null !== (Yq = null !== (lq = AY(qq)) && void 0 !== lq ? lq : null === Eq || void 0 === Eq ? void 0 : Eq.rotated[qq]) && void 0 !== Yq ? Yq : null === Eq || void 0 === Eq ? void 0 : Eq.animated[qq]) && void 0 !== gq ? gq : qY.notFoundUrl()
    }

    function BY(qq) {
      return void 0 !== (0, kg.e)(qq) ? qq : /^[1-9][0-9]*$/.test(qq) ? (0, kg.h)(Number(qq)) : void 0
    }

    function WY(qq) {
      var Eq;
      if (qq.startsWith(Dg)) {
        var gq;
        const Eq = (0, wg.d)(qq.slice(5));
        return null !== (gq = void 0 === Eq ? null : xY(Eq)) && void 0 !== gq ? gq : qY.notFoundUrl()
      }
      return null !== (Eq = qY.particleUrl(qq)) && void 0 !== Eq ? Eq : qY.notFoundUrl()
    }

    function NY(qq, Eq) {
      return "StairsBlock" === qq ? qq : Eq ? "SlabBlock" : "CubeBlock"
    }
    const aY = {
        async blockIcon(qq) {
          var Eq;
          let {
            name: Yq,
            size: lq,
            lineWidth: Oq
          } = qq;
          await mY();
          const mq = null !== (Eq = BY(Yq)) && void 0 !== Eq ? Eq : Yq,
            xq = (0, Cg.c)(mq, lq, Oq);
          if (null !== xq) return xq;
          const Aq = Xg(mq),
            cq = (0, kg.e)(mq),
            uq = void 0 === cq || null === EY ? void 0 : EY.itemTypeNameOf(cq);
          if (null === qY || void 0 === Aq) return "";
          const Bq = [Aq.top, Aq.left, Aq.right].some((qq => null === AY(qq))),
            Wq = Bq ? await (YY ??= gq.e(202).then((() => gq(34302))).then((qq => (lY && (lY = !1, (0, zg.d)()), {
              rotated: qq.rotatedBlockTextures,
              animated: qq.animatedBlockTextures
            })), (qq => (YY = null, lY = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", qq), null))), YY) : null;
          if (Bq && null === Wq) return "";
          const Nq = {
              top: uY(Aq.top, Wq),
              left: uY(Aq.left, Wq),
              right: uY(Aq.right, Wq),
              itemType: NY(uq, Aq.half)
            },
            aq = (0, Ig.f)(),
            Vq = 0 === aq ? mq : `${mq}#${aq}`;
          return (await (0, Kg.d)()).drawBlockIconUrl(Vq, lq, Oq, (() => Nq))
        }
      },
      VY = {
        itemIcon: function(qq) {
          var Eq, gq, lq, Oq;
          if (null === qY) return mY(), Yq.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(qq);
          if ((0, Lg.d)(qq)) return {
            kind: "icon",
            url: null !== (gq = null !== (lq = null === (Oq = (0, Ig.j)()) || void 0 === Oq ? void 0 : Oq.textureUrl(qq)) && void 0 !== lq ? lq : qY.ingameIconUrl(qq)) && void 0 !== gq ? gq : qY.notFoundUrl()
          };
          if (qq.startsWith(Lg.b)) return {
            kind: "icon",
            url: WY(qq.slice(Lg.b.length))
          };
          if (0 === (0, kg.k)()) return (0, Jg.d)(), Yq.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(qq);
          const mq = null !== (Eq = BY(qq)) && void 0 !== Eq ? Eq : qq,
            xq = (0, kg.e)(mq),
            Aq = void 0 === xq ? void 0 : EY.itemTypeNameOf(xq);
          if (void 0 !== Xg(mq)) return {
            kind: "drawnBlock"
          };
          const cq = function(qq) {
            var Eq;
            return null !== (Eq = xY(cY(qq))) && void 0 !== Eq ? Eq : qY.notFoundUrl()
          }(mq);
          if ((0, Cg.f)(mq) && ! function(qq) {
              const Eq = (0, Ig.j)();
              return null !== Eq && (null !== Eq.textureUrl(cY(qq)) || null !== Eq.modelUrl(qq))
            }(mq)) return {
            kind: "model",
            url: cq
          };
          if ("Gun" === Aq) return {
            kind: "gun",
            url: cq
          };
          if (void 0 !== xq && "GrayscaleArmour" === EY.itemTypeOf(xq) || Object.hasOwn(Gg.e, mq)) {
            var uq;
            const Eq = null !== (uq = (0, Gg.f)(qq)) && void 0 !== uq ? uq : (0, Gg.f)(mq);
            if (Eq) return {
              kind: "item",
              url: cq,
              tint: Eq
            }
          }
          return {
            kind: "item",
            url: cq
          }
        },
        hasIcon: function(qq) {
          return void 0 !== BY(qq) || (0, Lg.d)(qq) || qq.startsWith(Lg.b)
        },
        isItemName: function(qq) {
          return void 0 !== BY(qq)
        }
      };
    var dY = gq(583),
      jY = gq(39529);

    function HY(qq) {
      if (null === qq || void 0 === qq || !qq.isCoreRunning) return null;
      const {
        api: Eq,
        chunks: gq,
        items: Yq,
        tables: lq
      } = qq;
      return {
        playerFeet() {
          const qq = Eq.Py(Eq.localId);
          return null !== qq && void 0 !== qq && qq.every(Number.isFinite) ? qq : null
        },
        chunkBlocks: qq => gq.isLoaded(qq[0], qq[1], qq[2]) ? (qq, Eq, Yq) => gq.lc(qq, Eq, Yq) : null,
        blockName: qq => lq.nameOfId(qq),
        inventory: () => ({
          slots: Yq.playerItems().map((qq => qq ? {
            name: qq.name,
            amount: qq.amount
          } : null)),
          heldSlot: Yq.selectedSlot
        }),
        nearby() {
          const gq = [];
          for (let lq = 0; lq < Eq.idStr.length; lq++) {
            var Yq;
            const Oq = Eq.idStr[lq],
              mq = Eq.serverIds[lq],
              xq = Eq.kinds[lq];
            if (null === Oq || Eq.isLocal(mq) || xq >>> Pq.b !== Pq.q.Lifeform) continue;
            const Aq = Eq.Py(mq),
              cq = dY.m[xq & Pq.c];
            Aq && void 0 !== cq && gq.push({
              kind: "Player" === cq ? "player" : cq,
              name: null !== (Yq = qq.clientApi.getEntityName(Oq)) && void 0 !== Yq ? Yq : null,
              position: Aq
            })
          }
          return gq
        },
        droppedItems() {
          let qq = 0;
          for (let gq = 0; gq < Eq.idStr.length; gq++) null !== Eq.idStr[gq] && Eq.kinds[gq] >>> Pq.b === Pq.q.Item && qq++;
          return qq
        }
      }
    }
    const oY = {
        worldCodeAiChunk: qq => Promise.resolve((0, jY.e)(HY((0, mq.e)()), qq)),
        worldCodeAiGameState: () => Promise.resolve((0, jY.h)(HY((0, mq.e)())))
      },
      PY = function(qq) {
        const Eq = cg(),
          Yq = cg(),
          lq = new Set,
          Oq = new Set,
          mq = () => {
            var Eq, gq;
            return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.currentViewer) && void 0 !== Eq ? Eq : null
          };
        let xq = null,
          Aq = null;
        const uq = (qq, Eq) => ({
            current: qq,
            watch(gq) {
              let Yq = qq();
              return Eq.add((() => {
                const Eq = qq();
                Eq !== Yq && (Yq = Eq, gq(Eq))
              }))
            }
          }),
          Wq = qq => ({
            watch: Eq => (qq.add(Eq), () => {
              qq.delete(Eq)
            })
          }),
          Nq = qq => {
            const Eq = mq(),
              gq = null === Eq || void 0 === Eq ? void 0 : Eq.view;
            Eq && gq && Eq.seek(Math.max(0, Math.min(gq.totalTicks - 1, gq.SB + qq * Bq.Fd)))
          },
          aq = {
            replay: uq((() => {
              var qq;
              const Eq = mq(),
                gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
              return null === Eq || null === gq || gq.state === Bq.rd.None ? (xq = null, null) : (xq = (0, Iq.m)(xq, {
                id: Eq.id,
                SB: gq.SB,
                totalTicks: gq.totalTicks,
                bJ: Bq.Fd,
                playing: gq.state === Bq.rd.Playing,
                speed: gq.speed,
                cameraMode: gq.cameraMode,
                freecam: "freecam" === gq.cameraMode
              }), xq)
            }), Eq),
            replayEdits: uq((() => {
              var qq;
              const Eq = mq(),
                gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
              return null === Eq || null === gq || gq.state === Bq.rd.None ? (Aq = null, null) : (Aq = (0, Iq.m)(Aq, {
                cameraKeyframes: [...Eq.keyframes],
                playbackMark: gq.mark,
                fileName: Eq.fileName,
                unsavedChanges: Eq.unsavedChanges,
                suggestSaveAs: Eq.suggestSaveAs
              }), Aq)
            }), Eq),
            replayRecorder: uq((() => {
              var Eq, gq;
              return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.recorder.current) && void 0 !== Eq ? Eq : mg.b.states.replayRecorder.current()
            }), Yq),
            replayVideoExporting: {
              current: lg.b,
              watch: qq => (0, cq.k)("replayViewer|videoExportChanged", (() => {
                qq((0, lg.b)())
              }))
            }
          },
          Vq = {
            replayUiActionRequested: Wq(Oq),
            replayViewerRequested: Wq(lq)
          },
          dq = qq => {
            for (const Eq of lq) Eq(qq)
          },
          jq = () => {
            var Yq;
            !0 === (null === (Yq = mq()) || void 0 === Yq ? void 0 : Yq.isOpen) && Promise.all([gq.e(95), gq.e(64)]).then((() => gq(42373))).then((gq => {
              let {
                startWasmReplayVideoExport: Yq
              } = gq;
              return Yq({
                viewer: mq,
                canvas: () => {
                  var Eq, gq;
                  return null !== (Eq = null === (gq = qq.canvas) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : null
                },
                watchViewer: Eq.add,
                requestViewer: dq
              })
            }), (qq => {
              console.error("Couldn't load the video export", qq), Og.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((qq => {
              console.error("The video export failed", qq)
            }))
          },
          Hq = {
            replayAction(qq) {
              if ((0, lg.b)()) return;
              const Eq = mq();
              switch (qq) {
                case "replaySkipBack":
                  Nq(-1);
                  break;
                case "replaySkipForward":
                  Nq(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Eq && void 0 !== Eq && Eq.view && Eq.setSpeed((0, Yg.l)(Eq.view.speed, "replaySpeedUp" === qq ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Eq || void 0 === Eq || Eq.addKeyframe()
              }
            },
            setReplayPlaying(qq) {
              var Eq, gq;
              (0, lg.b)() || (qq ? null === (Eq = mq()) || void 0 === Eq || Eq.play() : null === (gq = mq()) || void 0 === gq || gq.pause())
            },
            seekReplay(qq) {
              var Eq;
              let {
                SB: gq,
                ignorePlaybackMark: Yq
              } = qq;
              null === (Eq = mq()) || void 0 === Eq || Eq.seek(gq, null !== Yq && void 0 !== Yq && Yq)
            },
            setReplayCameraMode(qq) {
              var Eq;
              null === (Eq = mq()) || void 0 === Eq || Eq.setCameraMode(qq)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(qq) {
              var Eq;
              null === (Eq = mq()) || void 0 === Eq || Eq.setKeyframe(qq)
            },
            moveReplayCameraKeyframe(qq) {
              var Eq;
              let {
                from: gq,
                to: Yq
              } = qq;
              null === (Eq = mq()) || void 0 === Eq || Eq.moveKeyframe(gq, Yq)
            },
            deleteReplayCameraKeyframes(qq) {
              var Eq;
              let {
                start: gq,
                end: Yq
              } = qq;
              null === (Eq = mq()) || void 0 === Eq || Eq.deleteKeyframes(gq, Yq)
            },
            setReplayPlaybackMark(qq) {
              var Eq;
              null === (Eq = mq()) || void 0 === Eq || Eq.setMark(qq)
            },
            cropReplay(qq) {
              var Eq, gq;
              let {
                start: Yq,
                end: lq
              } = qq;
              return !(0, lg.b)() && (null !== (Eq = null === (gq = mq()) || void 0 === gq ? void 0 : gq.crop(Yq, lq)) && void 0 !== Eq && Eq)
            },
            holdReplayForShaderPackFailure(qq) {
              const Eq = mq();
              Eq && (Eq.holdForShaderPackFailure(), function(qq) {
                gq.e(130).then((() => gq(39158))).then((Eq => {
                  let {
                    shaderPackPage: gq
                  } = Eq;
                  gq.block(qq)
                })).catch((qq => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", qq)
                }))
              }(qq))
            },
            exportReplayVideo() {
              jq()
            },
            toggleRecording() {
              var Eq;
              null === (Eq = qq.runtime()) || void 0 === Eq || Eq.recorder.toggleRecording()
            },
            saveClip() {
              var Eq;
              null === (Eq = qq.runtime()) || void 0 === Eq || Eq.recorder.saveClip()
            },
            setRecorderPrefs(Eq) {
              var gq;
              let {
                clipping: Yq,
                clipSeconds: lq
              } = Eq;
              null === (gq = qq.runtime()) || void 0 === gq || gq.recorder.setPrefs(Yq, lq)
            },
            setReplayViewerOpen(Eq) {
              var gq;
              (0, dE.h)(Eq) && (null === (gq = qq.runtime()) || void 0 === gq || gq.recorder.viewerShown(Eq))
            },
            recordFlyingMiddleText(Eq) {
              var gq;
              let {
                content: Yq,
                hg: lq,
                angle: Oq,
                ng: mq
              } = Eq;
              null === (gq = qq.runtime()) || void 0 === gq || gq.recorder.recordFlyingText(JSON.stringify(Yq), lq, Oq, mq)
            },
            dragReplayCamera(Eq) {
              var gq;
              let {
                dx: Yq,
                dy: lq
              } = Eq;
              null === (gq = qq.freecam()) || void 0 === gq || gq.drag(Yq, lq)
            },
            moveReplayFreecam(Eq) {
              var gq;
              null === (gq = qq.freecam()) || void 0 === gq || gq.move(Eq)
            },
            holdReplayFreecamVertical(Eq) {
              var gq;
              let {
                action: Yq,
                Fc: lq
              } = Eq;
              null === (gq = qq.freecam()) || void 0 === gq || gq.holdVertical(Yq, lq)
            }
          },
          oq = qq => {
            var Eq;
            const gq = mq(),
              Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.view) && void 0 !== Eq ? Eq : null;
            xg.has(qq) ? (qq => {
              for (const Eq of Oq) Eq(qq)
            })(qq) : Ag.has(qq) ? Hq.replayAction(qq) : "replayPlayPause" === qq ? gq && Yq && Yq.state !== Bq.rd.None && Hq.setReplayPlaying(Yq.state !== Bq.rd.Playing) : "replayChangeCameraMode" === qq ? null === gq || void 0 === gq || gq.cycleCameraMode() : "replayExit" === qq ? !0 === (null === gq || void 0 === gq ? void 0 : gq.inPlayback) && (0, TE.o)("/") : "replayExportVideo" === qq && jq()
          };
        let Pq = !1;
        return {
          states: aq,
          events: Vq,
          commands: Hq,
          lookups: {
            replayCamera() {
              var Eq, gq, Yq;
              return !0 !== (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.isOpen) ? null : null !== (gq = null === (Yq = qq.cameraView) || void 0 === Yq ? void 0 : Yq.call(qq)) && void 0 !== gq ? gq : null
            },
            leaveGameReloadsPage() {
              var qq;
              return !0 === (null === (qq = mq()) || void 0 === qq ? void 0 : qq.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var qq;
              const gq = !0 === (null === (qq = mq()) || void 0 === qq ? void 0 : qq.inPlayback);
              gq !== Pq && (Pq = gq, cq.i.TV("connectedGameChanged")), Eq.fire()
            },
            recorderChanged: Yq.fire,
            keyDown: qq => {
              var Eq;
              switch (qq) {
                case "recordGame":
                  return void Hq.toggleRecording();
                case "recordClip":
                  return void((0, dE.e)() || Hq.saveClip())
              }(0, lg.b)() || ("replayViewerOpen" !== qq ? qq.startsWith("replay") && ((0, dE.e)() || !0 === (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.inPlayback)) && oq(qq) : dq("toggle"))
            }
          }
        }
      }({
        runtime: lq.l,
        cameraView: () => {
          var qq;
          const Eq = null === (qq = (0, mq.e)()) || void 0 === qq ? void 0 : qq.renderFrame;
          if (!Eq) return null;
          const [gq, Yq, lq] = Eq.cameraPosition, [Oq, xq, Aq] = Eq.cameraDirection;
          return {
            position: [gq, Yq, lq],
            direction: [Oq, xq, Aq]
          }
        },
        canvas: () => {
          var qq, Eq, gq;
          return null !== (qq = null === (Eq = (gq = (0, Oq.M)()).canvas) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : null
        },
        freecam: lq.i
      }),
      QY = {
        states: {
          ...cE,
          ...NE.i,
          ...PY.states,
          ...Wg,
          ...kq
        },
        events: {
          ...uE,
          ...dq,
          ...NE.e,
          ...hq.c,
          ...hg.i,
          ...PY.events,
          ...Ng,
          ...vq.i
        },
        commands: {
          ...rq,
          ...BE,
          ...jq,
          ...NE.d,
          ...CE,
          ...vg,
          ...vq.e,
          ...pE,
          ...PY.commands,
          ...Pg,
          ...Rq,
          ...Tg,
          ...aE
        },
        queries: {
          ...NE.g,
          ...oY
        },
        lookups: {
          ...WE,
          ...zq,
          ...hg.m,
          ...PY.lookups,
          ...tq,
          ...gg,
          ...Mg,
          ...Uq
        }
      };

    function yY() {
      (0, xq.h)(Vq.o), (0, lq.m)(PY.feed), (0, hq.e)(), IE || (IE = !0, (0, Vq.l)(Zq.i, (qq => {
        const Eq = (0, Mq.d)(Zq.i, qq);
        "string" === typeof Eq && Promise.resolve().then((() => gq(3514))).then((qq => {
          let {
            onCosmeticPackGranted: gq
          } = qq;
          gq(Eq)
        }))
      })), (0, Vq.l)(Zq.W, (qq => {
        const Eq = (0, Mq.d)(Zq.W, qq);
        "number" === typeof Eq && cq.i.TV("serverUpdating", Date.now() + Eq, !0)
      })), (0, Vq.l)(Zq.z, (qq => {
        const Eq = (0, Mq.d)(Zq.z, qq);
        if ((0, Mq.b)(Eq)) {
          const {
            Oq: qq,
            mq: gq
          } = Eq;
          (0, wE.d)({
            Oq: "string" === typeof qq ? qq : null,
            mq: "string" === typeof gq ? gq : null
          })
        }
      })), (0, Vq.l)(uq.ec.NewUiRequest, (qq => {
        const Eq = (0, Mq.e)(qq);
        (0, Mq.b)(Eq) && "number" === typeof Eq.id && (0, Mq.b)(Eq.clientParameters) && (0, KE.f)(Eq.id, Eq.clientParameters)
      })), (0, Vq.l)(Zq.Q, (qq => {
        const Eq = (0, Mq.d)(Zq.Q, qq);
        "number" === typeof Eq && (0, KE.i)(Eq)
      })), (0, Vq.h)(KE.e), (0, Vq.l)(uq.ec.UiRequestPopup, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq) && "number" === typeof Eq.id && "string" === typeof Eq.text) {
          const qq = Eq.id;
          (0, KE.l)(qq, Eq.text, (Eq => {
            CE.answerUiRequest({
              id: qq,
              xu: Eq
            })
          }))
        }
      })), (0, Vq.l)(uq.ec.TopRightHelper, (qq => {
        const Eq = (0, Mq.e)(qq);
        void 0 !== Eq && cq.i.TV("TopRightHelper", Eq, !0)
      })), (0, Vq.l)(uq.ec.TaskProgress, (qq => {
        const Eq = (0, Mq.e)(qq);
        (0, Mq.b)(Eq) && "string" === typeof Eq.taskId && "number" === typeof Eq.progress && (0, XE.c)({
          taskId: Eq.taskId,
          progress: Eq.progress
        })
      }))), Qg || (Qg = !0, (0, Vq.l)(Zq.s, (qq => {
        const Eq = (0, Mq.d)(Zq.s, qq);
        (0, Mq.b)(Eq) && cq.i.TV("showShopFromServer", {
          toggle: Eq.Jg,
          kg: Eq.kg
        }, !0)
      })), (0, Vq.l)(uq.ec.OverShopInfo, (qq => {
        const Eq = (0, Mq.e)(qq);
        (0, Mq.b)(Eq) && cq.i.TV("overShopInfo", Eq.info, !0)
      })), (0, Vq.l)(uq.ec.ShowShopTutorial, (() => {
        cq.i.TV("showShopTutorial", null, !0)
      }))), Hg || (Hg = !0, (0, Vq.d)((() => {
        var qq;
        (0, ag.H)(), null === (qq = og) || void 0 === qq || qq(), og = (0, Vq.b)() ? (0, dg.h)(Vq.b) : null
      })), (0, Vq.l)(uq.ec.SetCookie, (qq => {
        const Eq = (0, Mq.e)(qq),
          gq = (0, TE.e)().gameNameWithVariation;
        (0, Mq.b)(Eq) && "string" === typeof Eq.key && null !== gq && (0, Vg.setCookie)(gq, Eq.key, Eq.value)
      })), (0, Vq.l)(uq.ec.LeaveValues, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq) && "string" === typeof Eq.leaveEventType) {
          const {
            leaveEventType: qq,
            category: gq,
            subCategory: Yq,
            value: lq
          } = Eq;
          (0, ag.L)({
            leaveEventType: qq,
            category: gq,
            subCategory: Yq,
            value: lq
          })
        }
      })), (0, Vq.l)(uq.ec.CustomAnalyticsEvent, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq) && "string" === typeof Eq.cat1) {
          const {
            cat1: qq,
            cat2: gq,
            cat3: Yq,
            value: lq
          } = Eq;
          (0, ag.s)({
            cat1: qq,
            cat2: gq,
            cat3: Yq,
            value: lq
          })
        }
      })), (0, Vq.l)(uq.ec.ProgressionEvent, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq)) {
          const {
            type: qq,
            location1: gq,
            location2: Yq,
            location3: lq,
            score: Oq
          } = Eq;
          (0, ag.y)({
            type: qq,
            location1: gq,
            location2: Yq,
            location3: lq,
            score: Oq
          })
        }
      })), (0, Vq.l)(uq.ec.ResourceEvent, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq)) {
          const {
            type: qq,
            resourceType: gq,
            amount: Yq,
            category: lq,
            itemName: Oq
          } = Eq;
          (0, ag.C)({
            type: qq,
            resourceType: gq,
            amount: Yq,
            category: lq,
            itemName: Oq
          })
        }
      })), (0, Vq.l)(uq.ec.LeaderboardResponse, (qq => {
        const Eq = (0, Mq.e)(qq);
        if ((0, Mq.b)(Eq)) {
          const {
            category: qq,
            timeframe: gq,
            data: Yq
          } = Eq;
          cq.i.TV("leaderboardResponse", {
            category: qq,
            timeframe: gq,
            data: Yq
          })
        }
      })), (0, Vq.l)(Zq.v, (qq => {
        const Eq = (0, Mq.d)(Zq.v, qq);
        "string" === typeof Eq && (0, jg.c)(qq.conn, Eq)
      })), (0, Vq.l)(Zq.w, (qq => {
        const Eq = (0, Mq.d)(Zq.w, qq);
        "string" === typeof Eq && console.error(`[logErrorToConsole]: ${Eq}`)
      }))), pq(), (0, hg.e)(), SE || (SE = !0, (0, Vq.l)(Zq.h, (qq => {
        const Eq = (0, Mq.d)(Zq.h, qq);
        void 0 !== Eq && (0, zE.i)(Eq)
      }))), sE(), bE(), Xq || (Xq = !0, (0, Oq.w)(wq)), Yq.gameBridge.attach(QY), (0, Yq.installPageSources)({
        commands: {
          ...Yq.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Sg.k
        },
        queries: aY,
        lookups: {
          ...Yq.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...VY,
          Gy: Sg.e,
          drawCallStats: pg.h
        }
      }), (0, zg.d)(), mY()
    }
  },
  40470: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      f: () => Aq,
      j: () => xq,
      k: () => cq
    });
    var Yq = gq(1914);
    let lq = null,
      Oq = 0;
    const mq = new Set;

    function xq() {
      return lq
    }

    function Aq() {
      return Oq
    }

    function cq(qq) {
      lq = qq, Oq++, (0, Yq.d)();
      for (const Eq of mq) Eq()
    }

    function uq(qq) {
      mq.add(qq)
    }
  },
  40476: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      f: () => xq
    });
    var Yq = gq(40479);
    let lq = null,
      Oq = null;

    function mq() {
      return lq ??= gq.e(59).then((() => gq(42392))).catch((qq => {
        throw lq = null, qq
      })), lq
    }

    function xq() {
      return Oq ??= Promise.all([mq(), (0, Yq.c)()]).then((qq => {
        let [Eq] = qq;
        return Eq
      }), (qq => {
        throw Oq = null, qq
      })), Oq
    }
  },
  37111: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
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
  36912: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      f: () => Oq,
      h: () => Wq,
      j: () => xq,
      l: () => Aq,
      n: () => cq,
      o: () => Bq,
      q: () => uq,
      t: () => mq
    });
    var Yq = gq(1226);
    let lq = function(qq) {
        return qq[qq.Join = 0] = "Join", qq[qq.Leave = 1] = "Leave", qq[qq.Push = 2] = "Push", qq[qq.Cursor = 3] = "Cursor", qq[qq.Submit = 4] = "Submit", qq[qq.ReloadAsVariation = 5] = "ReloadAsVariation", qq[qq.CreateFile = 6] = "CreateFile", qq[qq.RenameFile = 7] = "RenameFile", qq[qq.DeleteFile = 8] = "DeleteFile", qq[qq.SetEngine = 9] = "SetEngine", qq[qq.RenameFolder = 10] = "RenameFolder", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.Joined = 0] = "Joined", qq[qq.Updates = 1] = "Updates", qq[qq.Presence = 2] = "Presence", qq[qq.RemoteCursor = 3] = "RemoteCursor", qq[qq.ForceClose = 4] = "ForceClose", qq[qq.LobbyFilesChanged = 5] = "LobbyFilesChanged", qq[qq.EngineSettings = 6] = "EngineSettings", qq
      }({});

    function mq(qq) {
      return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
    }

    function xq(qq) {
      if ("lobby" === qq) return {
        kind: "lobby",
        path: Yq.j
      };
      if (qq.startsWith("lobby:")) {
        const Eq = qq.slice(6);
        return Bq(Eq) ? {
          kind: "lobby",
          path: Eq
        } : null
      }
      const Eq = qq.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Eq ? {
        kind: "codeBlock",
        pos: [parseInt(Eq[1]), parseInt(Eq[2]), parseInt(Eq[3])]
      } : null
    }

    function Aq(qq) {
      return qq.endsWith(".d.ts")
    }

    function cq(qq) {
      return qq.endsWith(".ts") && !Aq(qq)
    }
    const uq = 64;

    function Bq(qq) {
      if (!qq || qq !== qq.trim()) return !1;
      if (qq.length > uq) return !1;
      if (qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) return !1;
      if (!Aq(qq) && !cq(qq) && ! function(qq) {
          return qq.endsWith(".js") && !qq.endsWith(".min.js") && !qq.endsWith(".bundle.js")
        }(qq)) return !1;
      const Eq = qq.split("/");
      for (const gq of Eq)
        if ("" === gq || "." === gq || ".." === gq) return !1;
      return !0
    }
    const Wq = 14e3
  },
  38976: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      c: () => lq
    });
    const Yq = ["description", "label"];

    function lq(qq) {
      const Eq = qq.type;
      return {
        type: Eq,
        params: qq[Eq]
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);