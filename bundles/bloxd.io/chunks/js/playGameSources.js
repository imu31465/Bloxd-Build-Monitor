export const id = 47;
export const ids = [47];
export const modules = {
  39708: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      f: () => dB,
      i: () => nB
    });
    const QB = 6e3;

    function nB(BB, jB) {
      return [Math.floor(BB[0] / jB) * jB, Math.floor(BB[1] / jB) * jB, Math.floor(BB[2] / jB) * jB]
    }

    function dB(BB) {
      const jB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
      return jB && jB.length >= 3 ? [Number(jB[0]), Number(jB[1]), Number(jB[2])] : null
    }

    function IB(BB, jB) {
      return BB === jB ? String(BB) : `${BB}-${jB}`
    }

    function NB(BB, jB, zB, QB) {
      const nB = [];
      let dB = new Map;
      for (let IB = BB[2]; IB < BB[2] + jB; IB++) {
        const NB = new Map;
        let uB = BB[0];
        for (; uB < BB[0] + jB;) {
          const nB = QB(uB, zB, IB);
          let UB = uB;
          for (; UB + 1 < BB[0] + jB && QB(UB + 1, zB, IB) === nB;) UB++;
          if (null !== nB) {
            const BB = `${uB} ${UB} ${nB}`,
              jB = dB.get(BB);
            jB ? (jB.z1 = IB, dB.delete(BB), NB.set(BB, jB)) : NB.set(BB, {
              x0: uB,
              x1: UB,
              z0: IB,
              z1: IB,
              name: nB
            })
          }
          uB = UB + 1
        }
        nB.push(...dB.values()), dB = NB
      }
      return nB.push(...dB.values()), nB.sort(((BB, jB) => BB.z0 - jB.z0 || BB.x0 - jB.x0)).map((BB => `x${IB(BB.x0,BB.x1)} z${IB(BB.z0,BB.z1)} ${BB.name}`))
    }

    function uB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QB;
      const uB = [BB[0] + jB - 1, BB[1] + jB - 1, BB[2] + jB - 1],
        UB = null !== nB && nB.every(((jB, zB) => Math.floor(jB) >= BB[zB] && Math.floor(jB) <= uB[zB])),
        aB = [`The chunk from ${BB.join(" ")} to ${uB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== nB && aB.push(`The player's feet are at ${nB.map(Math.floor).join(" ")}, ${UB?"in this chunk":"outside this chunk"}.`);
      const pB = [];
      for (let QB = BB[1]; QB <= uB[1]; QB++) {
        const nB = NB(BB, jB, QB, zB).join("; "),
          dB = pB[pB.length - 1];
        (null === dB || void 0 === dB ? void 0 : dB.boxes) === nB ? dB.to = QB : pB.push({
          from: QB,
          to: QB,
          boxes: nB
        })
      }
      const rB = pB.filter((BB => "" !== BB.boxes));
      0 === rB.length && aB.push("It is all air.");
      let sB = aB.join("\n").length;
      for (const QB of rB) {
        const BB = `y${IB(QB.from,QB.to)}: ${QB.boxes}`;
        if (sB += BB.length + 1, sB > dB) {
          aB.push(`Cut short: the layers from y${QB.from} up aren't shown, as there are too many blocks.`);
          break
        }
        aB.push(BB)
      }
      return aB.join("\n")
    }
  },
  8785: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(28);

    function nB() {
      return !QB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37020: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB,
      i: () => nB
    });
    const QB = [.25, .5, 1, 2, 4, 8, 16];

    function nB(BB, jB) {
      const zB = QB;
      let nB = zB.indexOf(BB);
      return -1 === nB && (nB = zB.findIndex((jB => jB >= BB)), -1 === nB && (nB = zB.length - 1)), "up" === jB ? zB[Math.min(nB + 1, zB.length - 1)] : zB[Math.max(nB - 1, 0)]
    }

    function dB(BB) {
      return BB <= QB[0]
    }

    function IB(BB) {
      return BB >= QB[QB.length - 1]
    }
  },
  39179: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => IB
    });
    var QB = zB(31);
    let nB = !1;

    function dB() {
      return nB
    }

    function IB(BB) {
      nB !== BB && (nB = BB, QB.n.Ly("replayViewer|videoExportChanged"))
    }
  },
  36574: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => dB
    });
    let QB = !1;

    function nB() {
      return QB
    }

    function dB(BB) {
      return QB !== BB && (QB = BB, !0)
    }
  },
  39136: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(31),
      nB = zB(2006);

    function dB(BB) {
      let {
        taskId: jB,
        progress: zB
      } = BB;
      const QB = nB.c.get("_tasks");
      null !== QB && void 0 !== QB && QB[jB] && nB.c.apply({
        _tasks: {
          ...QB,
          [jB]: {
            ...QB[jB],
            progress: zB
          }
        }
      })
    }
    QB.n.subscribe("clientTaskProgress", (BB => {
      dB(BB)
    }))
  },
  39681: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      c: () => JB,
      e: () => UB,
      f: () => pB,
      j: () => uB,
      l: () => IB,
      n: () => aB,
      p: () => mB
    });
    var QB = zB(2006),
      nB = zB(31),
      dB = zB(2022);
    const IB = (0, dB.o)((function() {
        var BB, jB, zB, nB;
        return {
          health: null !== (BB = QB.c.get("_health")) && void 0 !== BB ? BB : null,
          maxHealth: null !== (jB = QB.c.get("_totalMaxHealth")) && void 0 !== jB ? jB : null,
          shield: null !== (zB = QB.c.get("_shield")) && void 0 !== zB ? zB : null,
          maxShield: null !== (nB = QB.c.get("maxShield")) && void 0 !== nB ? nB : null
        }
      }), [], (0, dB.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      NB = [{
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

    function uB(BB, jB) {
      return NB[(BB ? 2 : 0) + (jB ? 1 : 0)]
    }
    const UB = (0, dB.o)((function() {
      var BB;
      return null !== (BB = QB.c.get("_aura")) && void 0 !== BB ? BB : null
    }), [], (0, dB.l)("_aura"));

    function aB(BB) {
      return {
        watch: jB => (0, nB.q)("shotPlayer", (zB => {
          let {
            playerId: QB,
            damage: nB,
            wasCrit: dB,
            distance: IB
          } = zB;
          BB(QB) && jB({
            damage: nB,
            wasCrit: dB,
            distance: IB
          })
        }))
      }
    }

    function pB(BB) {
      return (0, dB.e)("chat", (jB => {
        let {
          serverChatMsgId: zB,
          content: QB,
          chatterEId: nB
        } = jB;
        return {
          serverChatMsgId: null !== zB && void 0 !== zB ? zB : null,
          content: QB,
          author: nB ? BB(nB) : null
        }
      }))
    }
    class rB {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const zB = this.shown;
        return BB !== this.needed && (this.needed = BB, this.neededSince = jB, null === BB && (this.shown = null)), this.shown !== this.needed && jB - this.neededSince > 200 && (this.shown = this.needed), this.shown !== zB
      }
    }

    function sB(BB) {
      return [{
        translationKey: `touchKeys:${BB}`
      }]
    }
    const JB = {
      open: sB("open"),
      close: sB("close"),
      milk: sB("milk"),
      shear: sB("shear"),
      tame: sB("tame"),
      feed: sB("feed"),
      ride: sB("ride")
    };

    function mB(BB) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: BB
      }]
    }
  },
  41138: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => IB
    });
    var QB = zB(3408);
    let nB = null,
      dB = null;

    function IB() {
      return dB ??= zB.e(216).then((() => zB(36392))).then((BB => {
        let {
          ITEM_SPRITES: jB,
          ITEM_SPRITES_WITHOUT_FILE: zB,
          ITEM_FILES_WITHOUT_SPRITE: dB
        } = BB;
        nB = function(BB, jB, zB) {
          const nB = new Set,
            dB = (0, QB.x)(jB);
          let IB = 0;
          for (const [QB, NB] of BB.entries()) QB === dB[IB] ? IB++ : nB.add(NB);
          if ("" !== zB)
            for (const NB of zB.split(QB.q)) nB.add(NB);
          return nB
        }(jB.split(QB.q), zB, dB)
      }), (BB => {
        throw dB = null, BB
      })), dB
    }

    function NB(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = nB) || void 0 === zB ? void 0 : zB.has(BB)) && void 0 !== jB && jB
    }
  },
  39700: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      f: () => dB,
      i: () => nB
    });
    const QB = 128;

    function nB(BB, jB, zB, QB) {
      const nB = 2 * jB - 1,
        dB = 1 - 2 * zB,
        IB = BB(0) - nB * BB(3),
        NB = BB(4) - nB * BB(7),
        uB = BB(8) - nB * BB(11),
        UB = BB(1) - dB * BB(3),
        aB = BB(5) - dB * BB(7),
        pB = BB(9) - dB * BB(11);
      QB[0] = NB * pB - uB * aB, QB[1] = uB * UB - IB * pB, QB[2] = IB * aB - NB * UB;
      const rB = QB[0] * BB(3) + QB[1] * BB(7) + QB[2] * BB(11) < 0 ? -1 : 1,
        sB = Math.hypot(QB[0], QB[1], QB[2]) * rB;
      return QB[0] /= sB, QB[1] /= sB, QB[2] /= sB, QB
    }

    function dB(BB, jB, zB, QB, nB, dB) {
      const IB = [Math.floor(jB[0]), Math.floor(jB[1]), Math.floor(jB[2])],
        NB = [0, 0, 0],
        uB = [1 / 0, 1 / 0, 1 / 0],
        UB = [1 / 0, 1 / 0, 1 / 0];
      for (let rB = 0; rB < 3; rB++) NB[rB] = Math.sign(zB[rB]), 0 !== NB[rB] && (UB[rB] = Math.abs(1 / zB[rB]), uB[rB] = (IB[rB] + (NB[rB] > 0 ? 1 : 0) - jB[rB]) / zB[rB]);
      let aB = 0,
        pB = Math.abs(zB[0]) > Math.abs(zB[1]) ? 0 : 1;
      for (Math.abs(zB[2]) > Math.abs(zB[pB]) && (pB = 2); aB <= QB;) {
        if (BB(IB[0], IB[1], IB[2])) return nB[0] = IB[0], nB[1] = IB[1], nB[2] = IB[2], dB[0] = 0, dB[1] = 0, dB[2] = 0, dB[pB] = -NB[pB], !0;
        pB = uB[0] < uB[1] ? 0 : 1, uB[2] < uB[pB] && (pB = 2), aB = uB[pB], IB[pB] += NB[pB], uB[pB] += UB[pB]
      }
      return !1
    }
  },
  39677: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(1948);

    function nB(BB, jB, zB) {
      return (0, QB.s)(BB, jB) < zB
    }
  },
  8724: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(1289);

    function nB(BB, jB) {
      var zB, nB;
      try {
        const zB = (0, QB.e)();
        if ("function" === typeof zB) {
          const QB = new zB(BB, jB);
          if (QB.type === BB) return QB
        }
      } catch {}
      const dB = document.createEvent("Event");
      return dB.initEvent(BB, null !== (zB = null === jB || void 0 === jB ? void 0 : jB.bubbles) && void 0 !== zB && zB, null !== (nB = null === jB || void 0 === jB ? void 0 : jB.cancelable) && void 0 !== nB && nB), dB
    }
  },
  36538: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      f: () => aB,
      h: () => sB,
      i: () => pB
    });
    var QB = zB(376),
      nB = zB(698),
      dB = zB(710),
      IB = zB(41);
    const NB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      uB = "playSessionGameNameWithVariation",
      UB = "wasMatchmakePlayer";

    function aB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      (0, dB.h)(BB, NB)
    }

    function pB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).setItem(UB, !0)
    }

    function rB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      return (0, dB.d)(BB, NB)
    }

    function sB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB.k;
      const zB = (0, dB.d)(jB, NB),
        aB = function(BB) {
          const jB = BB.getItem(uB);
          return "string" !== typeof jB ? null : jB
        }(jB),
        pB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).getItem(UB)
        }(jB);
      let rB;
      return rB = null !== zB && null !== aB && (0, dB.f)(jB, NB) && function(BB, jB, zB) {
          const nB = (0, QB.Sb)(BB),
            dB = (0, QB.Sb)(jB),
            IB = (0, QB.Mb)(BB),
            NB = (0, QB.Mb)(jB);
          return !(nB !== dB || !zB) || nB === dB && IB === NB
        }(aB, BB, pB) ? zB : (0, nB.b)(), (0, dB.l)(jB, NB, rB), jB.setItem(uB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).removeItem(UB)
        }(jB), rB
    }
  },
  39126: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB
    });
    var QB = zB(1263),
      nB = zB(1359),
      dB = zB(28),
      IB = zB(1343),
      NB = zB(1357),
      uB = zB(1543),
      UB = zB(36538);

    function aB(BB) {
      let {
        xn: jB,
        Kn: zB
      } = BB;
      const aB = null !== jB && void 0 !== jB ? jB : (0, NB.d)().gameNameWithVariation;
      (0, QB.C)(aB) && ((0, UB.i)(), (0, IB.W)((() => {
        console.log("Received matchmaking order from game server to game", jB), (0, dB.i)("inGameReplay"), (0, uB.navigatePreserveSearch)((0, nB.e)(aB, null !== zB && void 0 !== zB ? zB : void 0))
      }), "video_start"))
    }
  },
  39277: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(31),
      nB = zB(2033);

    function dB(BB) {
      var jB, zB;
      const dB = (0, nB.m)(null !== (jB = null === (zB = nB.w.toggleFreeCam) || void 0 === zB ? void 0 : zB[0]) && void 0 !== jB ? jB : null);
      QB.n.Ly("showBottomMessage", {
        message: `Free Camera ${BB?"Enabled":"Disabled"}${dB?` - Press ${dB} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39121: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      d: () => IB,
      f: () => NB,
      j: () => UB
    });
    var QB = zB(31),
      nB = zB(1381);
    const dB = new Map;

    function IB(BB, jB) {
      QB.n.Ly("newUiRequest", {
        id: BB,
        clientParameters: jB
      }, !0)
    }

    function NB(BB) {
      QB.n.Ly("removeUiRequest", BB, !0);
      const jB = dB.get(BB);
      jB && (jB.tearDownNotification(), dB.delete(BB))
    }

    function uB() {
      QB.n.Ly("clearUiRequests");
      for (const BB of dB.values()) BB.tearDownNotification();
      dB.clear()
    }

    function UB(BB, jB, zB, QB) {
      const IB = nB.NotificationProvider.showPromptPopup({
        title: jB,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: zB,
        unlockPointerKey: "uiRequestPopup"
      });
      dB.set(BB, IB), IB.getResult().then((jB => {
        dB.delete(BB), "notificationTornDown" !== jB && QB(jB)
      }))
    }
  },
  39703: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      d: () => rB
    });
    var QB = zB(214),
      nB = zB(39708);
    const dB = 20;

    function IB(BB) {
      return BB.map(Math.floor).join(" ")
    }

    function NB(BB) {
      return null === BB.amount || 1 === BB.amount ? BB.name : `${BB.amount} ${BB.name}`
    }
    var uB = zB(39716),
      UB = zB(2006),
      aB = zB(1357);

    function pB(BB, jB) {
      if (!BB) return uB.b;
      const zB = BB.playerFeet();
      if (!zB) return "The player isn't in the world yet, so no blocks can be seen.";
      const dB = QB.e.ZJ,
        IB = (0, nB.i)(null !== jB && void 0 !== jB ? jB : zB, dB),
        NB = BB.chunkBlocks(IB);
      return NB ? (0, nB.b)(IB, dB, ((jB, zB, QB) => {
        const nB = NB(jB, zB, QB);
        return 0 === nB ? null : BB.blockName(nB).split("|")[0]
      }), zB) : `The chunk from ${IB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${zB.map(Math.floor).join(" ")}.`
    }

    function rB(BB) {
      var jB, zB, QB;
      if (!BB) return uB.e;
      const nB = BB.playerFeet();
      if (!nB) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: pB,
        heldSlot: rB
      } = BB.inventory();
      return function(BB) {
        const jB = [];
        null !== BB.game && jB.push(`Game: ${BB.game}.`);
        const zB = null === BB.health ? "" : `, health ${Math.round(BB.health)}${null===BB.maxHealth?"":` of ${Math.round(BB.maxHealth)}`}`;
        jB.push(`The player (the creator) stands at ${IB(BB.position)}${zB}, ${BB.creative?"in":"not in"} creative mode.`);
        const QB = BB.slots[BB.heldSlot];
        jB.push(QB ? `Holding (slot ${BB.heldSlot}): ${NB(QB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
        const nB = BB.slots.flatMap(((BB, jB) => BB ? [`slot ${jB}: ${NB(BB)}`] : []));
        jB.push(nB.length > 0 ? `Inventory: ${nB.join(", ")}.` : "Inventory: empty.");
        const uB = jB => Math.hypot(jB.position[0] - BB.position[0], jB.position[1] - BB.position[1], jB.position[2] - BB.position[2]),
          UB = [...BB.nearby].sort(((BB, jB) => uB(BB) - uB(jB)));
        if (0 === UB.length) jB.push("No other players or mobs are near enough to see.");
        else {
          jB.push("Near them, nearest first:");
          for (const BB of UB.slice(0, dB)) {
            const zB = "player" === BB.kind ? `player "${BB.name||"?"}"` : BB.name && BB.name !== BB.kind ? `${BB.kind} "${BB.name}"` : BB.kind,
              QB = Math.round(uB(BB));
            jB.push(`- ${zB} at ${IB(BB.position)}, ${QB} block${1===QB?"":"s"} away`)
          }
          UB.length > dB && jB.push(`- and ${UB.length-dB} more further away`)
        }
        return BB.droppedItems > 0 && jB.push(`${BB.droppedItems} dropped item${1===BB.droppedItems?" is":"s are"} on the ground nearby.`), jB.join("\n")
      }({
        game: null !== (jB = (0, aB.d)().gameNameWithVariation) && void 0 !== jB ? jB : null,
        position: nB,
        health: null !== (zB = UB.c.get("_health")) && void 0 !== zB ? zB : null,
        maxHealth: null !== (QB = UB.c.get("_totalMaxHealth")) && void 0 !== QB ? QB : null,
        creative: !0 === UB.c.get("creative"),
        heldSlot: rB,
        slots: pB,
        nearby: BB.nearby(),
        droppedItems: BB.droppedItems()
      })
    }
  },
  40956: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => DB,
      B: () => VB,
      E: () => YB,
      G: () => bB,
      K: () => XB,
      L: () => HB,
      O: () => hB,
      R: () => oB,
      S: () => wB,
      T: () => lB,
      V: () => FB,
      e: () => xB,
      i: () => AB,
      m: () => qB,
      o: () => KB,
      s: () => fB,
      w: () => iB,
      z: () => ZB
    });
    var QB = zB(1418),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(2482),
      NB = zB(4909),
      uB = zB(4873);
    let UB, aB = !1,
      pB = !1,
      rB = !1,
      sB = !1;
    const JB = 1300,
      mB = 3e3;
    let yB = 0,
      kB = !1,
      GB = !1,
      LB = 0;
    const gB = 2;
    let tB = !1,
      SB = !1;
    const MB = new Set,
      EB = new Set;

    function iB() {
      return aB
    }

    function qB() {
      return GB
    }

    function fB() {
      return SB
    }

    function oB() {
      return (0, dB.y)() && !SB
    }

    function HB(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== SB) {
        SB = BB;
        for (const BB of [...EB]) BB(SB);
        jB && lB()
      }
    }

    function DB(BB) {
      return EB.add(BB), () => {
        EB.delete(BB)
      }
    }

    function FB() {
      (0, NB.l)(IB.t.Menu, (0, dB.y)() ? 0 : IB.t.Menu)
    }

    function YB() {
      GB = !1, LB = 0, FB(), lB()
    }

    function VB(BB) {
      return MB.add(BB), () => {
        MB.delete(BB)
      }
    }

    function hB(BB) {
      pB = !1, BB !== aB && (aB = BB, sB = !1, clearTimeout(UB), rB = !aB && tB, aB ? (kB = !1, GB = !1, LB = 0) : oB() && !tB && (GB = !0), tB = !1, aB && !oB() && cB(), vB(), rB && lB())
    }

    function XB(BB) {
      BB !== kB && (kB = BB, BB || lB())
    }

    function ZB() {
      pB = !1, sB || !0 !== WB() || (sB = !0, clearTimeout(UB), UB = setTimeout(TB, JB))
    }

    function AB() {
      return (!pB || performance.now() - yB > mB) && (pB = (0, uB.I)().lockPointer(), yB = performance.now()), pB
    }

    function TB() {
      PB() && eB() && AB()
    }

    function PB() {
      return oB() && !aB && !kB && !(0, QB.l)()
    }

    function WB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function eB() {
      return rB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== WB()
    }

    function lB() {
      oB() ? PB() && !GB && eB() && AB() : aB && !tB && cB()
    }

    function wB() {
      GB ? navigator.vendor.startsWith("Apple") ? CB() : LB = gB : lB()
    }

    function xB() {
      LB > 0 && 0 === --LB && CB()
    }

    function KB() {
      LB = 0
    }

    function CB() {
      PB() && !0 === WB() && AB()
    }

    function cB() {
      tB = !0, (0, uB.I)().unlockPointer()
    }

    function bB() {
      pB = !1, rB = !1, sB = !1, clearTimeout(UB), kB = !1, GB = !1, LB = 0, tB = !1;
      const BB = aB;
      aB = !1, BB && vB()
    }

    function vB() {
      for (const BB of [...MB]) BB(aB);
      nB.n.Ly("pointerLockUpdate", aB)
    }
  },
  40766: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      d: () => NB,
      g: () => pB,
      k: () => UB,
      m: () => IB,
      o: () => aB,
      q: () => uB
    });
    let QB = null,
      nB = null,
      dB = null;

    function IB(BB) {
      QB = BB
    }

    function NB() {
      return QB
    }

    function uB(BB) {
      nB = BB
    }

    function UB() {
      return nB
    }

    function aB(BB) {
      dB = BB
    }

    function pB() {
      return dB
    }

    function rB() {
      var BB, jB;
      return !0 === (null === (BB = nB) || void 0 === BB || null === (jB = BB.currentViewer) || void 0 === jB ? void 0 : jB.inPlayback)
    }
  },
  41085: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      attachPlayGameSources: () => MQ,
      playGameSources: () => SQ
    });
    var QB = zB(1982),
      nB = zB(40766),
      dB = zB(4873),
      IB = zB(40695),
      NB = zB(41061),
      uB = zB(39681),
      UB = zB(31),
      aB = zB(4893),
      pB = zB(4887),
      rB = zB(40718),
      sB = zB(40740),
      JB = zB(41090),
      mB = zB(40725);
    (0, mB.l)(aB.Wb.Chat, (BB => {
      if (BB.payloadKind !== pB.fc.Msgpack) return;
      const jB = function(BB) {
        if (null === BB || "object" !== typeof BB || !("content" in BB)) return null;
        const {
          chatMsgId: jB,
          content: zB,
          chatterEId: QB
        } = BB;
        return {
          serverChatMsgId: null !== jB && void 0 !== jB ? jB : void 0,
          content: zB,
          chatterEId: void 0 === QB || null === QB ? void 0 : String(QB)
        }
      }((0, rB.c)(BB.payload));
      null !== jB && UB.n.Ly("chat", jB, !0)
    }));
    const yB = {
        chatReceived: (0, uB.f)((function(BB) {
          var jB, zB, QB;
          return {
            id: BB,
            name: null !== (jB = JB.e.getName(BB)) && void 0 !== jB ? jB : null,
            local: (0, sB.i)() === BB,
            profileEffect: null !== (zB = null === (QB = (0, JB.i)(BB)) || void 0 === QB ? void 0 : QB.profileEffect) && void 0 !== zB ? zB : null
          }
        }))
      },
      kB = {
        sendChatMessage(BB) {
          var jB;
          let {
            ha: zB,
            channelName: QB
          } = BB;
          null === (jB = (0, IB.g)()) || void 0 === jB || jB.clientApi.sendChat(zB, QB)
        }
      };
    var GB = zB(214),
      LB = zB(2006),
      gB = zB(40682),
      tB = zB(39677);
    const SB = [0, 0, 0],
      MB = {
        codeBlockClickable(BB) {
          var jB;
          const zB = (0, IB.g)();
          if (null === zB || void 0 === zB || !zB.isSessionLive) return !1;
          const QB = zB.api;
          if (0 !== (gB.w.playerFlags(QB.apiView, 0) & gB.Sd.Crouching)) return !1;
          const nB = QB.queries.directorEntity(QB.localId) >= gB.zb.BYTES ? QB.memoryData(QB.scratch(), gB.zb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === nB) return !1;
          for (let dB = 0; dB < 3; dB++) SB[dB] = gB.zb.feet(nB, 0, dB);
          return SB[1] += gB.zb.eyeHeight(nB, 0), (0, tB.b)(SB, BB, null !== (jB = LB.c.get("blockReach")) && void 0 !== jB ? jB : GB.e.zk)
        }
      },
      EB = {
        clickCodeBlock(BB) {
          var jB;
          null === (jB = (0, IB.g)()) || void 0 === jB || jB.clickCodeBlock(BB)
        }
      };
    var iB = zB(40699),
      qB = zB(41096),
      fB = zB(1067),
      oB = zB(39146),
      HB = zB(4866),
      DB = zB(40709),
      FB = zB(40697),
      YB = zB(40713);

    function VB(BB) {
      if (null === BB) return null;
      const jB = [];
      for (const zB of BB) {
        const BB = Object.keys(zB)[0];
        if ("jj" === BB) {
          const {
            str: BB,
            style: QB,
            clickableUrl: nB
          } = zB.jj, dB = Object.keys(BB)[0], IB = BB[dB];
          "string" !== dB && "styledEntityName" !== dB && "styledTranslatedText" !== dB || jB.push({
            str: IB,
            style: QB,
            clickableUrl: nB
          })
        } else jB.push(zB[BB])
      }
      return jB
    }
    const hB = {
      screenPos(BB) {
        var jB, zB;
        return null !== (jB = null === (zB = (0, IB.g)()) || void 0 === zB ? void 0 : zB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== jB ? jB : {
          x: 0,
          y: 0
        }
      }
    };
    let XB = !1;

    function ZB() {
      XB || (XB = !0, (0, mB.l)(aB.Wb.ProgressBarUpdate, (BB => {
        const jB = (0, YB.e)(BB);
        (0, YB.c)(jB) && UB.n.Ly("progressBarUpdate", jB, !0)
      })), (0, mB.l)(DB.q, (BB => {
        const jB = (0, YB.d)(DB.q, BB);
        jB && UB.n.Ly("middleScreenBarInitiate", {
          duration: jB.Zn,
          Tn: jB.Tn,
          horizBarRemOffset: jB.Pn
        }, !0)
      })), (0, mB.l)(aB.Wb.RemoveMiddleScreenBar, (() => {
        UB.n.Ly("middleScreenBarRemove")
      })), (0, mB.l)(DB.$, (BB => {
        const jB = (0, YB.d)(DB.$, BB);
        if (jB) {
          var zB;
          const BB = jB.fB ? null === (zB = (0, IB.g)()) || void 0 === zB ? void 0 : zB.renderFrame.projectDirectionToScreenPos(jB.fB) : void 0;
          UB.n.Ly("sendHitmarker", {
            Wj: jB.Wj,
            screenPos: BB
          }, !0)
        }
      })), (0, mB.l)(DB.bb, (BB => {
        const jB = (0, YB.d)(DB.bb, BB);
        if (jB) {
          const {
            id: BB,
            position: zB,
            style: QB,
            Yj: nB,
            hj: dB
          } = jB;
          UB.n.Ly("setDirectionArrow", {
            id: BB,
            position: zB,
            style: QB,
            text: VB(nB),
            hj: dB
          }, !0)
        }
      })), (0, mB.l)(DB.f, (BB => {
        const jB = (0, YB.d)(DB.f, BB);
        jB && UB.n.Ly("clearDirectionArrow", {
          id: jB.id
        }, !0)
      })), (0, mB.l)(DB.m, (BB => {
        const jB = (0, YB.d)(DB.m, BB);
        jB && UB.n.Ly("flyingMiddleMessage", {
          content: VB(jB.wd),
          xd: jB.xd,
          Kd: jB.Kd
        }, !0)
      })), (0, mB.l)(aB.Wb.WorldVariation, (BB => {
        const jB = (0, YB.e)(BB);
        if ("string" === typeof jB) {
          const BB = jB === fB.g ? null : {
            message: `Currently loaded as variation: ${jB}`,
            type: "Warning"
          };
          UB.n.Ly("showPermanentBottomMessage", BB, !0)
        }
      })), (0, mB.l)(DB.F, (BB => {
        const jB = (0, YB.d)(DB.F, BB);
        jB && function(BB, jB) {
          const {
            type: zB,
            params: QB
          } = (0, oB.c)(jB), nB = {
            ...QB
          };
          for (const dB of oB.b) nB[dB] && (nB[dB] = VB(nB[dB]));
          HB.c.queueQTE(BB, zB, nB).getResult().then((jB => {
            var zB;
            "boolean" === typeof jB && (null === (zB = (0, IB.g)()) || void 0 === zB || zB.send(FB.e.QteResponse, {
              qteId: BB,
              qteResponse: jB
            }))
          }))
        }(jB.id, jB.xB)
      })), (0, mB.l)(DB.T, (BB => {
        const jB = (0, YB.d)(DB.T, BB);
        "number" === typeof jB && HB.c.cancelQTE(jB)
      })), (0, mB.e)((() => {
        HB.c.reset()
      })), (0, mB.h)((() => {
        HB.c.reset()
      })), (0, mB.l)(aB.Wb.EditItemCraftingRecipes, (BB => {
        const jB = (0, YB.e)(BB);
        (0, YB.c)(jB) && UB.n.Ly("craftingRecipesEdited", {
          itemName: jB.craftingRecipeItemName,
          recipesForItem: jB.recipesForItem
        })
      })), (0, mB.l)(DB.Q, (BB => {
        const jB = (0, YB.d)(DB.Q, BB);
        jB && UB.n.Ly("craftingRecipesEdited", {
          itemName: jB.Xn,
          recipesForItem: []
        })
      })))
    }
    var AB = zB(28);
    const TB = [{
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

    function PB(BB) {
      return gB.w.playerFlags(BB.api.apiView, 0)
    }
    const WB = {
        freeCamera: (0, sB.e)((BB => () => {
          const jB = BB.isSessionLive && 0 !== (PB(BB) & gB.Sd.FreeCamMoves),
            zB = BB.freeCameraAllowed() && null === AB.c.get("scriptedCameraFacing");
          return TB[(zB ? 2 : 0) + (jB ? 1 : 0)]
        }), TB[0], (BB => (0, dB.u)(BB)))
      },
      eB = {
        setFreeCameraMovesFly: BB => {
          var jB;
          null === (jB = (0, IB.g)()) || void 0 === jB || jB.setFreeCameraMovesFly(BB)
        }
      },
      lB = {
        freeCameraPos: () => {
          const BB = (0, IB.g)();
          return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (PB(BB) & gB.Sd.FreeCam) ? BB.renderFrame.cameraPosition : null
        }
      };
    var wB = zB(39277);
    let xB = !1,
      KB = !1;

    function CB() {
      const BB = (0, IB.g)();
      if (null === BB || void 0 === BB || !BB.isSessionLive) return void(xB = !1);
      const jB = 0 !== (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.FreeCam);
      jB !== xB && (xB = jB, (0, wB.e)(jB))
    }
    var cB = zB(376),
      bB = zB(37109),
      vB = zB(2022);
    var RB = zB(41099),
      OB = zB(40734);
    const Bj = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let jj = "off";

    function zj(BB) {
      var jB;
      return null === BB ? null : {
        label: null !== (jB = (0, RB.c)(BB, "interactionPrompt")) && void 0 !== jB ? jB : null
      }
    }
    const Qj = new Map([
      [gB.Jc.Open, {
        label: uB.c.open
      }],
      [gB.Jc.Close, {
        label: uB.c.close
      }],
      [gB.Jc.Milk, {
        label: uB.c.milk
      }],
      [gB.Jc.Shear, {
        label: uB.c.shear
      }],
      [gB.Jc.Tame, {
        label: uB.c.tame
      }],
      [gB.Jc.Feed, {
        label: uB.c.feed
      }],
      [gB.Jc.Ride, {
        label: uB.c.ride
      }]
    ]);
    class nj {
      constructor() {
        this.target = Bj, this.dN = gB.ld, this.optionName = null, this.pickaxe = new uB.b
      }
      read(BB) {
        var jB;
        const zB = gB.w.targetBlockId(BB.api.apiView, 0);
        zB !== this.dN && (this.dN = zB, this.optionName = zB === gB.ld ? null : `${BB.tables.getMetaInfo(zB).rootName}CrosshairText`);
        const QB = null === this.optionName ? null : null !== (jB = BB.tables.getClientOption(this.optionName)) && void 0 !== jB ? jB : null;
        this.pickaxe.update(function(BB, jB) {
          var zB, QB, nB;
          if (0 === (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.Breaking) || jB === gB.ld || 0 === jB) return null;
          const {
            tables: dB
          } = BB;
          if (!0 === dB.getClientOption("creative")) return null;
          const IB = dB.nameOfId(jB),
            NB = null === (zB = BB.items.DN()) || void 0 === zB ? void 0 : zB.name,
            uB = null !== (QB = dB.getItemStat(IB, "harvestLevel")) && void 0 !== QB ? QB : 0;
          return (0, cB.Fc)({
            blockHarvestType: dB.getDefaultItemStat(IB, "harvestType"),
            blockHarvestLevel: dB.getDefaultItemStat(IB, "harvestLevel"),
            harvestLevel: uB,
            heldToolType: void 0 === NB ? void 0 : dB.getDefaultItemStat(NB, "harvests"),
            heldToolLevel: void 0 === NB ? void 0 : dB.getDefaultItemStat(NB, "level")
          }) && null !== (nB = bB.n[uB]) && void 0 !== nB ? nB : null
        }(BB, zB)), BB.watchPromptPick(jj);
        const nB = "touch" === jj ? function(BB) {
          var jB;
          const zB = BB.interactLabel;
          return zB === gB.Jc.Entity ? zj(BB.promptEntity) : zB === gB.Jc.TameWith ? {
            label: (0, uB.p)(BB.tables.nameOfId(BB.interactIcon))
          } : null !== (jB = Qj.get(zB)) && void 0 !== jB ? jB : null
        }(BB) : zj(BB.promptEntity);
        return this.target = (0, vB.s)(this.target, {
          interactPrompt: nB,
          blockText: QB,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let dj = null;
    const Ij = {
      current: () => {
        var BB, jB;
        return null !== (BB = null === (jB = dj) || void 0 === jB ? void 0 : jB.target) && void 0 !== BB ? BB : Bj
      },
      watch: BB => {
        const jB = new nj;
        dj = jB;
        const zB = (0, sB.l)((zB => {
          let QB = jB.read(zB);
          BB(QB);
          const nB = (0, dB.y)((() => {
            const nB = jB.read(zB);
            nB !== QB && (QB = nB, BB(nB))
          }));
          return () => {
            nB(), zB.watchPromptPick("off")
          }
        }));
        return () => {
          zB(), dj === jB && (dj = null)
        }
      }
    };
    let Nj = 0,
      uj = 0;
    const Uj = {
        health: uB.l,
        aura: uB.e,
        hotbar: OB.c.states.hotbar,
        heldItemAim: OB.c.states.heldItemAim,
        crouching: (0, sB.e)((BB => function(BB) {
          const jB = () => 0 !== (gB.w.playerFlags(BB.apiView, 0) & gB.Sd.Crouching);
          return {
            current: jB,
            watch(BB) {
              let zB = jB();
              return (0, dB.u)((() => {
                const QB = jB();
                QB !== zB && (zB = QB, BB(QB))
              }))
            }
          }
        }(BB.api).current), !1, (BB => (0, dB.u)(BB))),
        flight: (0, sB.e)((BB => () => function(BB) {
          const jB = gB.w.playerFlags(BB.apiView, 0);
          return (0, uB.j)(0 !== (jB & gB.Sd.CanFly), 0 !== (jB & gB.Sd.Flying))
        }(BB.api)), (0, uB.j)(!1, !1), (BB => (0, dB.u)(BB))),
        gliderBoostFuel: (0, sB.e)((BB => () => gB.w.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, dB.u)(BB))),
        crosshairTarget: Ij
      },
      aj = {
        hotbarSlotRequested: OB.c.events.hotbarSlotRequested,
        hotbarScrolled: OB.c.events.hotbarScrolled,
        numberKeyPressed: OB.c.events.numberKeyPressed,
        shotDamageToShow: (0, uB.n)((BB => !0 === (0, RB.c)(BB, "showDamageAmounts")))
      },
      pj = {
        selectHotbarSlot: OB.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: BB => {
          jj = BB
        }
      },
      rj = {
        momentumFrac: function() {
          var BB, jB, zB;
          const QB = (0, IB.g)(),
            nB = performance.now(),
            dB = null === QB || void 0 === QB || null === (BB = QB.items.DN()) || void 0 === BB || null === (jB = BB.attributes) || void 0 === jB || null === (zB = jB.customAttributes) || void 0 === zB ? void 0 : zB.enchantments;
          return Nj = null !== QB && null !== dB && void 0 !== dB && dB.Momentum ? 0 !== (gB.w.playerFlags(QB.api.apiView, 0) & gB.Sd.Breaking) ? Math.max(0, gB.w.momentumFrac(QB.api.apiView, 0)) : Math.max(0, Nj - (nB - uj) / 1500) : 0, uj = nB, Nj
        }
      };
    var sj = zB(40686);
    const Jj = {
      lobbyManage(BB) {
        var jB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.LobbyManage, BB)
      }
    };
    var mj = zB(1270),
      yj = zB(36574),
      kj = zB(8785),
      Gj = zB(1664),
      Lj = zB(2482),
      gj = zB(4897);
    let tj = !1;

    function Sj(BB) {
      tj = BB
    }

    function Mj() {
      "inGame" !== AB.c.get("gameState") || (0, Gj.q)() || UB.n.Ly("ctrlCrouchWithoutFullscreen")
    }
    let Ej = !1;
    const ij = {
        OpenEmoteWheel: () => {
          Sj(!0), Ej = !0, queueMicrotask((() => {
            Ej && (Ej = !1, UB.n.Ly("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          UB.n.Ly("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, yj.b)() || UB.n.Ly("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, yj.b)() || UB.n.Ly("XKeyPressed")
        },
        CtrlCrouch: Mj,
        "primary-fire": () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      qj = {
        OpenEmoteWheel: () => {
          Sj(!1), Ej ? (Ej = !1, (0, kj.d)() || UB.n.Ly("requestEmoteWheelHoldOpen")) : UB.n.Ly("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Mj,
        "primary-fire": () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          UB.n.Ly("mouseState", {
            ea: mj.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let fj = !1;

    function oj() {
      fj || (fj = !0, (0, gj.k)((BB => {
        if ((0, nB.c)()) return;
        const jB = (0, gj.g)(BB) ? "primary-fire" : BB.action;
        var zB;
        if (BB.down) {
          if (0 === (BB.flags & Lj.c.Synthetic)) {
            var QB;
            null === (QB = ij[jB]) || void 0 === QB || QB.call(ij)
          }
        } else null === (zB = qj[jB]) || void 0 === zB || zB.call(qj)
      })))
    }
    var Hj = zB(363),
      Dj = zB(106),
      Fj = zB(41),
      Yj = zB(40956),
      Vj = zB(1357),
      hj = zB(2505);
    let Xj = !1;
    const Zj = {
      sendCodeCollab(BB) {
        var jB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.CodeCollab, (0, FB.n)(BB), (0, hj.c)(BB))
      }
    };
    var Aj = zB(39199),
      Tj = zB(8724);
    let Pj = null,
      Wj = !1,
      ej = null;

    function lj() {
      return "inGame" === AB.c.get("gameState") && !(0, yj.b)()
    }
    const wj = {
        OpenInventory: BB => {
          (0, Gj.u)(BB, "inventory", (0, sj.m)())
        },
        OpenShop: BB => {
          Pj && lj() && (0, Gj.t)(BB, Hj.o.SHOP, !Pj.shopIsEmpty(LB.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: BB => {
          lj() && (0, Gj.t)(BB, Hj.o.LOBBY_LEADERBOARD, (0, Aj.c)({
            lobbyLeaderboardInfo: LB.c.get("lobbyLeaderboardInfo"),
            lobbyManage: LB.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: BB => {
          var jB;
          const zB = null === (jB = Pj) || void 0 === jB ? void 0 : jB.getClientGameMapKey();
          zB ? (0, Gj.v)(BB, !0, zB) : (0, Gj.u)(BB, "retentionFeatures", !(!LB.c.get("_tasks") && !LB.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: BB => {
          (0, Gj.u)(BB, "inviteLink", Dj.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: BB => {
          lj() && function(BB) {
            const jB = (0, IB.g)(),
              zB = null !== jB && void 0 !== jB && jB.isSessionLive ? jB.api : null,
              QB = zB ? zB.iG(zB.localId) : null;
            (0, Gj.v)(BB, null !== QB && (0, hj.b)((0, Vj.d)()), (() => {
              (0, hj.g)(QB)
            }))
          }(BB)
        },
        HideUi: () => {
          UB.n.Ly("showUi", !1)
        }
      },
      xj = {
        HideUi: () => {
          UB.n.Ly("showUi", !0)
        }
      };

    function Kj() {
      Wj || (Wj = !0, zB.e(159).then((() => zB(60748))).then((BB => {
        Pj = BB
      }), (BB => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", BB)
      })), (0, Yj.B)((BB => {
        BB || !(0, Yj.m)() || (0, Dj.isMobile)() || !Fj.j.getItem("disableFullscreen") || (0, Gj.m)() || AB.c.set({
          openEverythingMenuName: Hj.o.SETTINGS
        })
      })), (0, gj.k)((BB => {
        let {
          action: jB,
          down: zB,
          press: QB
        } = BB;
        var dB, IB;
        (0, nB.c)() || (zB ? null === (dB = wj[jB]) || void 0 === dB || dB.call(wj, function(BB) {
          var jB;
          if (0 === BB || (null === (jB = ej) || void 0 === jB ? void 0 : jB.press) !== BB) {
            const jB = {
              press: BB,
              event: (0, Tj.e)("inputAction")
            };
            ej = jB, queueMicrotask((() => {
              ej === jB && (ej = null)
            }))
          }
          return ej.event
        }(QB)) : null === (IB = xj[jB]) || void 0 === IB || IB.call(xj))
      })))
    }
    var Cj = zB(39136),
      cj = zB(39126),
      bj = zB(39121);
    const vj = {
      completeTask(BB) {
        var jB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.CompleteTask, (0, FB.p)(BB))
      },
      setServerCookie(BB) {
        var jB;
        let {
          key: zB,
          value: QB
        } = BB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.GeneralCookieSet, (0, FB.s)({
          pN: zB,
          rN: QB
        }))
      },
      answerUiRequest(BB) {
        var jB;
        let {
          id: zB,
          Sa: QB
        } = BB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.UiRequestResp, (0, FB.S)({
          Ju: zB,
          mu: QB,
          yu: 5
        }))
      },
      chooseRewardedAd(BB) {
        var jB;
        let {
          id: zB,
          Sa: QB
        } = BB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.UiRequestResponded, (0, FB.Q)({
          id: zB,
          Sa: QB
        }))
      },
      requestLeaderboard(BB) {
        var jB;
        let {
          category: zB,
          timeframe: QB,
          seeTop: nB
        } = BB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.LeaderboardRequest, {
          category: zB,
          timeframe: QB,
          seeTop: nB
        })
      }
    };
    let Rj = !1;
    const Oj = GB.e.Oy / 2,
      Bz = [Oj, -Oj, -Oj, -Oj, Oj, Oj, -Oj, Oj],
      jz = [0, 0, 0];

    function zz(BB, jB, zB) {
      for (let QB = 0; QB < BB.length; QB += 2)
        if (BB[QB] === jB && BB[QB + 1] === zB) return !0;
      return !1
    }
    const Qz = {
      blocksStandingOn: function() {
        const BB = (0, IB.g)();
        if (null === BB) return [];
        const {
          api: jB,
          chunks: zB,
          tables: QB
        } = BB;
        if (!jB.readPosition(jB.localId, jz)) return [];
        const [nB, dB, NB] = jz, uB = Math.ceil(dB) - 1, UB = [], aB = [];
        for (let IB = 0; IB < Bz.length; IB += 2) {
          const BB = nB + Bz[IB],
            jB = NB + Bz[IB + 1];
          if (Number.isInteger(BB) || Number.isInteger(jB)) continue;
          const dB = Math.floor(BB),
            pB = Math.floor(jB);
          if (zz(aB, dB, pB)) continue;
          const rB = zB.dN(dB, uB, pB);
          QB.isSolidBlockId(rB) && (aB.push(dB, pB), UB.push(QB.nameOfId(rB)))
        }
        return UB
      },
      dropAhead: function() {
        const BB = (0, IB.g)();
        return null !== BB && 0 !== (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.DropAhead)
      }
    };
    var nz = zB(37020),
      dz = zB(39179),
      Iz = zB(1381),
      Nz = zB(40744);
    const uz = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Uz = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function az() {
      const BB = new Set;
      return {
        add: jB => (BB.add(jB), () => {
          BB.delete(jB)
        }),
        fire() {
          for (const jB of BB) jB()
        }
      }
    }
    const pz = Object.freeze([]);

    function rz(BB, jB) {
      let zB, {
        rereads: QB,
        followLocalId: nB
      } = jB;
      const IB = () => (zB = (0, vB.s)(zB, BB()), zB);
      return {
        current: IB,
        watch(BB) {
          const jB = (0, JB.d)((jB => {
            QB(jB) && BB(IB())
          }));
          if (!nB) return jB;
          let zB = (0, sB.i)();
          const NB = (0, dB.y)((() => {
            const jB = (0, sB.i)();
            jB !== zB && (zB = jB, BB(IB()))
          }));
          return () => {
            jB(), NB()
          }
        }
      }
    }
    const sz = {
        players: rz((function() {
          const BB = JB.e.ids(),
            jB = {};
          for (const dB of BB) {
            var zB, QB, nB;
            jB[dB] = {
              name: null !== (zB = JB.e.getName(dB)) && void 0 !== zB ? zB : null,
              ranks: null !== (QB = JB.e.getSetting(dB, "ranks")) && void 0 !== QB ? QB : pz,
              cosmetics: null !== (nB = (0, JB.i)(dB)) && void 0 !== nB ? nB : null
            }
          }
          return {
            ids: BB,
            byId: jB,
            localId: (0, sB.i)()
          }
        }), {
          rereads: BB => "roster" !== BB.kind || BB.members || BB.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: rz((function() {
          const BB = {};
          for (const nB of JB.e.ids()) {
            var jB, zB, QB;
            BB[nB] = {
              colour: null !== (jB = JB.e.getSetting(nB, "colorInLobbyLeaderboard")) && void 0 !== jB ? jB : null,
              values: null !== (zB = JB.e.getSetting(nB, "lobbyLeaderboardValues")) && void 0 !== zB ? zB : null,
              tags: null !== (QB = JB.e.getSetting(nB, "lobbyLeaderboardTags")) && void 0 !== QB ? QB : null
            }
          }
          return BB
        }), {
          rereads: function(BB) {
            if ("roster" !== BB.kind) return "reset" === BB.kind;
            const {
              members: jB,
              settings: zB
            } = BB;
            return jB || zB.has("colorInLobbyLeaderboard") || zB.has("lobbyLeaderboardValues") || zB.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Jz = {
        cosmeticsUpdated: {
          watch: BB => (0, JB.d)((jB => {
            if ("cosmetics" !== jB.kind) return;
            const zB = (0, sB.i)();
            BB(jB.updates.map((BB => {
              let {
                Pd: jB,
                Wd: QB,
                ld: nB
              } = BB;
              return {
                local: jB === zB,
                Wd: QB,
                ld: nB
              }
            })))
          }))
        }
      };
    var mz = zB(3015),
      yz = zB(1778),
      kz = zB(701),
      Gz = zB(41007);
    let Lz = !1,
      gz = null;
    const tz = {
      setShopOpen(BB) {
        var jB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.ShopMenuChanged, (0, FB.J)(BB))
      },
      buyShopItem(BB) {
        var jB;
        let {
          categoryKey: zB,
          itemKey: QB,
          userInput: nB
        } = BB;
        null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.ItemBought, {
          categoryKey: zB,
          itemKey: QB,
          shopVersion: LB.c.get("_shopVersion"),
          userInput: nB
        })
      }
    };
    let Sz = !1;
    var Mz = zB(4909);
    const Ez = Lj.t.LookFrozen | Lj.t.ClicksSuppressed;

    function iz(BB, jB) {
      var zB;
      null !== (zB = (0, IB.g)()) && void 0 !== zB && zB.send(BB, jB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
    }(0, mB.l)(DB.db, (BB => {
      const jB = (0, YB.d)(DB.db, BB);
      void 0 !== jB && UB.n.Ly("setDiscordReportKey", jB)
    }));
    const qz = {
      ignorePlayer(BB) {
        iz(FB.e.IgnoreUser, (0, FB.w)({
          ku: BB
        }))
      },
      reportPlayer(BB) {
        let {
          playerId: jB,
          chatMsgId: zB,
          sN: QB,
          details: nB
        } = BB;
        iz(FB.e.UserReport, (0, FB._)({
          Ga: jB,
          La: zB,
          sN: QB,
          JN: nB
        }))
      },
      reportWorldCodeChat(BB) {
        let {
          chatMsgId: jB,
          sN: zB,
          details: QB
        } = BB;
        iz(FB.e.UserReport, (0, FB._)({
          Ga: "",
          La: jB,
          sN: zB,
          JN: QB
        }))
      },
      requestDiscordReportKey(BB) {
        iz(FB.e.ReqDiscordReportKey, (0, FB.E)(BB))
      },
      reportLobbyOrGame(BB) {
        let {
          target: jB,
          sN: zB,
          details: QB
        } = BB;
        "customGame" === jB ? iz(FB.e.CustomGameReport, (0, FB.q)({
          sN: zB,
          JN: QB
        })) : iz(FB.e.LobbyReport, (0, FB.y)({
          sN: zB,
          JN: QB
        }))
      },
      updateMyCosmetic(BB) {
        iz(FB.e.UpdateMyCosmetic, (0, FB.Z)(BB))
      },
      holdEmoteWheel(BB) {
        !BB || tj ? (0, Mz.l)(Ez, BB ? Ez : 0) : UB.n.Ly("requestEmoteWheelHoldRelease")
      }
    };
    var fz = zB(41108),
      oz = zB(9266),
      Hz = zB(39700);
    const Dz = [0, 0, 0],
      Fz = [0, 0, 0],
      Yz = [0, 0, 0],
      Vz = {
        blockAtViewPoint(BB) {
          let {
            x: jB,
            y: zB
          } = BB;
          const QB = (0, IB.g)();
          if (null === QB || void 0 === QB || !QB.renderFrame.hasView) return null;
          const {
            renderFrame: nB,
            clientApi: dB,
            api: NB
          } = QB;
          let uB = 0;
          return (0, Hz.f)(((BB, jB, zB) => (uB = dB.getBlockId(BB, jB, zB), 0 !== uB)), nB.cameraPosition, (0, Hz.i)((BB => gB.w.viewProj(NB.apiView, 0, BB)), jB, zB, Dz), Hz.d, Fz, Yz) ? {
            pos: [Fz[0], Fz[1], Fz[2]],
            normal: [Yz[0], Yz[1], Yz[2]],
            name: (0, oz.g)(uB)
          } : null
        }
      },
      hz = {
        setBlockHighlight(BB) {
          var jB;
          null === (jB = (0, IB.g)()) || void 0 === jB || jB.setBlockHighlight(BB)
        }
      };
    var Xz = zB(1995),
      Zz = zB(40992),
      Az = zB(41117),
      Tz = zB(4617),
      Pz = zB(4585),
      Wz = zB(41123),
      ez = zB(3402),
      lz = zB(3408);
    let wz = null,
      xz = null;

    function Kz(BB) {
      const jB = BB.startsWith(lz.i),
        [zB, QB = zB, nB = zB] = (jB ? BB.slice(lz.i.length) : BB).split(lz.g);
      return {
        top: zB,
        left: QB,
        right: nB,
        half: jB
      }
    }

    function Cz(BB) {
      const jB = null === wz ? void 0 : (0, ez.c)(BB),
        zB = void 0 === jB ? 0 : wz.codes[jB];
      return 0 === zB ? void 0 : wz.pool[zB - 1]
    }
    var cz = zB(3396),
      bz = zB(4573),
      vz = zB(4609),
      Rz = zB(41034),
      Oz = zB(41131);
    const BQ = "item:";
    let jQ = null,
      zQ = null,
      QQ = null,
      nQ = null,
      dQ = !1,
      IQ = !1;

    function NQ() {
      return IQ || (IQ = !0, (0, vz.h)().then((BB => {
        BB && (0, Xz.e)()
      }))), QQ ??= Promise.all([(0, cz.f)(), (xz ??= zB.e(1).then((() => zB(60768))).then((BB => {
        let {
          BLOCK_FACE_RUNS: jB,
          BLOCK_FACES: zB,
          MAX_FACE_ITEM_ID: QB
        } = BB;
        wz = {
          codes: (0, lz.B)(jB, QB + 1),
          pool: zB.split(lz.q).map(Kz)
        }
      }), (BB => {
        throw xz = null, BB
      })), xz), (0, Oz.f)(), zB.e(201).then((() => zB(34264)))]).then((BB => {
        let [, , jB, zB] = BB;
        jB.followBundledTextures(), jQ = jB, zQ = zB, (0, Xz.e)()
      }), (BB => {
        QQ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", BB)
      })), QQ
    }

    function uQ(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = (0, Rz.g)()) || void 0 === zB ? void 0 : zB.textureUrl(BB)) && void 0 !== jB ? jB : jQ.itemSpriteUrl(BB)
    }

    function UQ(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = (0, Rz.g)()) || void 0 === zB ? void 0 : zB.textureUrl(BB)) && void 0 !== jB ? jB : jQ.blockTextureUrl(BB)
    }

    function aQ(BB) {
      var jB;
      return null !== (jB = (0, cz.c)(BB)) && void 0 !== jB ? jB : BB
    }

    function pQ(BB, jB) {
      var zB, QB, nB;
      return null !== (zB = null !== (QB = null !== (nB = UQ(BB)) && void 0 !== nB ? nB : null === jB || void 0 === jB ? void 0 : jB.rotated[BB]) && void 0 !== QB ? QB : null === jB || void 0 === jB ? void 0 : jB.animated[BB]) && void 0 !== zB ? zB : jQ.notFoundUrl()
    }

    function rQ(BB) {
      return void 0 !== (0, ez.c)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, ez.e)(Number(BB)) : void 0
    }

    function sQ(BB) {
      var jB;
      if (BB.startsWith(BQ)) {
        var zB;
        const jB = (0, cz.c)(BB.slice(5));
        return null !== (zB = void 0 === jB ? null : uQ(jB)) && void 0 !== zB ? zB : jQ.notFoundUrl()
      }
      return null !== (jB = jQ.particleUrl(BB)) && void 0 !== jB ? jB : jQ.notFoundUrl()
    }

    function JQ(BB, jB) {
      return "StairsBlock" === BB ? BB : jB ? "SlabBlock" : "CubeBlock"
    }
    const mQ = {
        async blockIcon(BB) {
          var jB;
          let {
            name: QB,
            size: nB,
            lineWidth: dB
          } = BB;
          await NQ();
          const IB = null !== (jB = rQ(QB)) && void 0 !== jB ? jB : QB,
            NB = (0, vz.c)(IB, nB, dB);
          if (null !== NB) return NB;
          const uB = Cz(IB),
            UB = (0, ez.c)(IB),
            aB = void 0 === UB || null === zQ ? void 0 : zQ.itemTypeNameOf(UB);
          if (null === jQ || void 0 === uB) return "";
          const pB = [uB.top, uB.left, uB.right].some((BB => null === UQ(BB))),
            rB = pB ? await (nQ ??= zB.e(207).then((() => zB(34335))).then((BB => (dQ && (dQ = !1, (0, Xz.e)()), {
              rotated: BB.rotatedBlockTextures,
              animated: BB.animatedBlockTextures
            })), (BB => (nQ = null, dQ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", BB), null))), nQ) : null;
          if (pB && null === rB) return "";
          const sB = {
              top: pQ(uB.top, rB),
              left: pQ(uB.left, rB),
              right: pQ(uB.right, rB),
              itemType: JQ(aB, uB.half)
            },
            JB = (0, Rz.e)(),
            mB = 0 === JB ? IB : `${IB}#${JB}`;
          return (await (0, bz.d)()).drawBlockIconUrl(mB, nB, dB, (() => sB))
        }
      },
      yQ = {
        itemIcon: function(BB) {
          var jB, zB, nB, dB;
          if (null === jQ) return NQ(), QB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          if ((0, Pz.h)(BB)) return {
            kind: "icon",
            url: null !== (zB = null !== (nB = null === (dB = (0, Rz.g)()) || void 0 === dB ? void 0 : dB.textureUrl(BB)) && void 0 !== nB ? nB : jQ.ingameIconUrl(BB)) && void 0 !== zB ? zB : jQ.notFoundUrl()
          };
          if (BB.startsWith(Pz.c)) return {
            kind: "icon",
            url: sQ(BB.slice(Pz.c.length))
          };
          if (0 === (0, ez.f)()) return (0, Wz.e)(), QB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          const IB = null !== (jB = rQ(BB)) && void 0 !== jB ? jB : BB,
            NB = (0, ez.c)(IB),
            uB = void 0 === NB ? void 0 : zQ.itemTypeNameOf(NB);
          if (void 0 !== Cz(IB)) return {
            kind: "drawnBlock"
          };
          const UB = function(BB) {
            var jB;
            return null !== (jB = uQ(aQ(BB))) && void 0 !== jB ? jB : jQ.notFoundUrl()
          }(IB);
          if ((0, vz.f)(IB) && ! function(BB) {
              const jB = (0, Rz.g)();
              return null !== jB && (null !== jB.textureUrl(aQ(BB)) || null !== jB.modelUrl(BB))
            }(IB)) return {
            kind: "model",
            url: UB
          };
          if ("Gun" === uB) return {
            kind: "gun",
            url: UB
          };
          if (void 0 !== NB && "GrayscaleArmour" === zQ.itemTypeOf(NB) || Object.hasOwn(Tz.c, IB)) {
            var aB;
            const jB = null !== (aB = (0, Tz.g)(BB)) && void 0 !== aB ? aB : (0, Tz.g)(IB);
            if (jB) return {
              kind: "item",
              url: UB,
              tint: jB
            }
          }
          return {
            kind: "item",
            url: UB
          }
        },
        hasIcon: function(BB) {
          return void 0 !== rQ(BB) || (0, Pz.h)(BB) || BB.startsWith(Pz.c)
        },
        isItemName: function(BB) {
          return void 0 !== rQ(BB)
        }
      };
    var kQ = zB(644),
      GQ = zB(39703);

    function LQ(BB) {
      if (null === BB || void 0 === BB || !BB.isCoreRunning) return null;
      const {
        api: jB,
        chunks: zB,
        items: QB,
        tables: nB
      } = BB;
      return {
        playerFeet() {
          const BB = jB.iG(jB.localId);
          return null !== BB && void 0 !== BB && BB.every(Number.isFinite) ? BB : null
        },
        chunkBlocks: BB => zB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, jB, QB) => zB.dN(BB, jB, QB) : null,
        blockName: BB => nB.nameOfId(BB),
        inventory: () => ({
          slots: QB.playerItems().map((BB => BB ? {
            name: BB.name,
            amount: BB.amount
          } : null)),
          heldSlot: QB.selectedSlot
        }),
        nearby() {
          const zB = [];
          for (let nB = 0; nB < jB.idStr.length; nB++) {
            var QB;
            const dB = jB.idStr[nB],
              IB = jB.serverIds[nB],
              NB = jB.kinds[nB];
            if (null === dB || jB.isLocal(IB) || NB >>> gB.c !== gB.s.Lifeform) continue;
            const uB = jB.iG(IB),
              UB = kQ.i[NB & gB.e];
            uB && void 0 !== UB && zB.push({
              kind: "Player" === UB ? "player" : UB,
              name: null !== (QB = BB.clientApi.getEntityName(dB)) && void 0 !== QB ? QB : null,
              position: uB
            })
          }
          return zB
        },
        droppedItems() {
          let BB = 0;
          for (let zB = 0; zB < jB.idStr.length; zB++) null !== jB.idStr[zB] && jB.kinds[zB] >>> gB.c === gB.s.Item && BB++;
          return BB
        }
      }
    }
    const gQ = {
        worldCodeAiChunk: BB => Promise.resolve((0, GQ.c)(LQ((0, IB.g)()), BB)),
        worldCodeAiGameState: () => Promise.resolve((0, GQ.d)(LQ((0, IB.g)())))
      },
      tQ = function(BB) {
        const jB = az(),
          QB = az(),
          nB = new Set,
          dB = new Set,
          IB = () => {
            var jB, zB;
            return null !== (jB = null === (zB = BB.runtime()) || void 0 === zB ? void 0 : zB.currentViewer) && void 0 !== jB ? jB : null
          };
        let NB = null,
          uB = null;
        const aB = (BB, jB) => ({
            current: BB,
            watch(zB) {
              let QB = BB();
              return jB.add((() => {
                const jB = BB();
                jB !== QB && (QB = jB, zB(jB))
              }))
            }
          }),
          rB = BB => ({
            watch: jB => (BB.add(jB), () => {
              BB.delete(jB)
            })
          }),
          sB = BB => {
            const jB = IB(),
              zB = null === jB || void 0 === jB ? void 0 : jB.view;
            jB && zB && jB.seek(Math.max(0, Math.min(zB.totalTicks - 1, zB.vp + BB * pB.qd)))
          },
          JB = {
            replay: aB((() => {
              var BB;
              const jB = IB(),
                zB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null;
              return null === jB || null === zB || zB.state === pB.gd.None ? (NB = null, null) : (NB = (0, vB.s)(NB, {
                id: jB.id,
                vp: zB.vp,
                totalTicks: zB.totalTicks,
                KF: pB.qd,
                playing: zB.state === pB.gd.Playing,
                speed: zB.speed,
                cameraMode: zB.cameraMode,
                freecam: "freecam" === zB.cameraMode
              }), NB)
            }), jB),
            replayEdits: aB((() => {
              var BB;
              const jB = IB(),
                zB = null !== (BB = null === jB || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null;
              return null === jB || null === zB || zB.state === pB.gd.None ? (uB = null, null) : (uB = (0, vB.s)(uB, {
                cameraKeyframes: [...jB.keyframes],
                playbackMark: zB.mark,
                fileName: jB.fileName,
                unsavedChanges: jB.unsavedChanges,
                suggestSaveAs: jB.suggestSaveAs
              }), uB)
            }), jB),
            replayRecorder: aB((() => {
              var jB, zB;
              return null !== (jB = null === (zB = BB.runtime()) || void 0 === zB ? void 0 : zB.recorder.current) && void 0 !== jB ? jB : Nz.d.states.replayRecorder.current()
            }), QB),
            replayVideoExporting: {
              current: dz.d,
              watch: BB => (0, UB.q)("replayViewer|videoExportChanged", (() => {
                BB((0, dz.d)())
              }))
            }
          },
          mB = {
            replayUiActionRequested: rB(dB),
            replayViewerRequested: rB(nB)
          },
          yB = BB => {
            for (const jB of nB) jB(BB)
          },
          kB = () => {
            var QB;
            !0 === (null === (QB = IB()) || void 0 === QB ? void 0 : QB.isOpen) && Promise.all([zB.e(98), zB.e(67)]).then((() => zB(60755))).then((zB => {
              let {
                startWasmReplayVideoExport: QB
              } = zB;
              return QB({
                viewer: IB,
                canvas: () => {
                  var jB, zB;
                  return null !== (jB = null === (zB = BB.canvas) || void 0 === zB ? void 0 : zB.call(BB)) && void 0 !== jB ? jB : null
                },
                watchViewer: jB.add,
                requestViewer: yB
              })
            }), (BB => {
              console.error("Couldn't load the video export", BB), Iz.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((BB => {
              console.error("The video export failed", BB)
            }))
          },
          GB = {
            replayAction(BB) {
              if ((0, dz.d)()) return;
              const jB = IB();
              switch (BB) {
                case "replaySkipBack":
                  sB(-1);
                  break;
                case "replaySkipForward":
                  sB(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== jB && void 0 !== jB && jB.view && jB.setSpeed((0, nz.i)(jB.view.speed, "replaySpeedUp" === BB ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === jB || void 0 === jB || jB.addKeyframe()
              }
            },
            setReplayPlaying(BB) {
              var jB, zB;
              (0, dz.d)() || (BB ? null === (jB = IB()) || void 0 === jB || jB.play() : null === (zB = IB()) || void 0 === zB || zB.pause())
            },
            seekReplay(BB) {
              var jB;
              let {
                vp: zB,
                ignorePlaybackMark: QB
              } = BB;
              null === (jB = IB()) || void 0 === jB || jB.seek(zB, null !== QB && void 0 !== QB && QB)
            },
            setReplayCameraMode(BB) {
              var jB;
              null === (jB = IB()) || void 0 === jB || jB.setCameraMode(BB)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(BB) {
              var jB;
              null === (jB = IB()) || void 0 === jB || jB.setKeyframe(BB)
            },
            moveReplayCameraKeyframe(BB) {
              var jB;
              let {
                from: zB,
                to: QB
              } = BB;
              null === (jB = IB()) || void 0 === jB || jB.moveKeyframe(zB, QB)
            },
            deleteReplayCameraKeyframes(BB) {
              var jB;
              let {
                start: zB,
                end: QB
              } = BB;
              null === (jB = IB()) || void 0 === jB || jB.deleteKeyframes(zB, QB)
            },
            setReplayPlaybackMark(BB) {
              var jB;
              null === (jB = IB()) || void 0 === jB || jB.setMark(BB)
            },
            cropReplay(BB) {
              var jB, zB;
              let {
                start: QB,
                end: nB
              } = BB;
              return !(0, dz.d)() && (null !== (jB = null === (zB = IB()) || void 0 === zB ? void 0 : zB.crop(QB, nB)) && void 0 !== jB && jB)
            },
            holdReplayForShaderPackFailure(BB) {
              const jB = IB();
              jB && (jB.holdForShaderPackFailure(), function(BB) {
                zB.e(117).then((() => zB(39307))).then((jB => {
                  let {
                    shaderPackPage: zB
                  } = jB;
                  zB.block(BB)
                })).catch((BB => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", BB)
                }))
              }(BB))
            },
            exportReplayVideo() {
              kB()
            },
            toggleRecording() {
              var jB;
              null === (jB = BB.runtime()) || void 0 === jB || jB.recorder.toggleRecording()
            },
            saveClip() {
              var jB;
              null === (jB = BB.runtime()) || void 0 === jB || jB.recorder.saveClip()
            },
            setRecorderPrefs(jB) {
              var zB;
              let {
                clipping: QB,
                clipSeconds: nB
              } = jB;
              null === (zB = BB.runtime()) || void 0 === zB || zB.recorder.setPrefs(QB, nB)
            },
            setReplayViewerOpen(jB) {
              var zB;
              (0, yj.c)(jB) && (null === (zB = BB.runtime()) || void 0 === zB || zB.recorder.viewerShown(jB))
            },
            recordFlyingMiddleText(jB) {
              var zB;
              let {
                content: QB,
                xd: nB,
                angle: dB,
                Kd: IB
              } = jB;
              null === (zB = BB.runtime()) || void 0 === zB || zB.recorder.recordFlyingText(JSON.stringify(QB), nB, dB, IB)
            },
            dragReplayCamera(jB) {
              var zB;
              let {
                dx: QB,
                dy: nB
              } = jB;
              null === (zB = BB.freecam()) || void 0 === zB || zB.drag(QB, nB)
            },
            moveReplayFreecam(jB) {
              var zB;
              null === (zB = BB.freecam()) || void 0 === zB || zB.move(jB)
            },
            holdReplayFreecamVertical(jB) {
              var zB;
              let {
                action: QB,
                DN: nB
              } = jB;
              null === (zB = BB.freecam()) || void 0 === zB || zB.holdVertical(QB, nB)
            }
          },
          LB = BB => {
            var jB;
            const zB = IB(),
              QB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.view) && void 0 !== jB ? jB : null;
            uz.has(BB) ? (BB => {
              for (const jB of dB) jB(BB)
            })(BB) : Uz.has(BB) ? GB.replayAction(BB) : "replayPlayPause" === BB ? zB && QB && QB.state !== pB.gd.None && GB.setReplayPlaying(QB.state !== pB.gd.Playing) : "replayChangeCameraMode" === BB ? null === zB || void 0 === zB || zB.cycleCameraMode() : "replayExit" === BB ? !0 === (null === zB || void 0 === zB ? void 0 : zB.inPlayback) && (0, Vj.l)("/") : "replayExportVideo" === BB && kB()
          };
        let gB = !1;
        return {
          states: JB,
          events: mB,
          commands: GB,
          lookups: {
            replayCamera() {
              var jB, zB, QB;
              return !0 !== (null === (jB = IB()) || void 0 === jB ? void 0 : jB.isOpen) ? null : null !== (zB = null === (QB = BB.cameraView) || void 0 === QB ? void 0 : QB.call(BB)) && void 0 !== zB ? zB : null
            },
            leaveGameReloadsPage() {
              var BB;
              return !0 === (null === (BB = IB()) || void 0 === BB ? void 0 : BB.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var BB;
              const zB = !0 === (null === (BB = IB()) || void 0 === BB ? void 0 : BB.inPlayback);
              zB !== gB && (gB = zB, UB.n.Ly("connectedGameChanged")), jB.fire()
            },
            recorderChanged: QB.fire,
            keyDown: BB => {
              var jB;
              switch (BB) {
                case "recordGame":
                  return void GB.toggleRecording();
                case "recordClip":
                  return void((0, yj.b)() || GB.saveClip())
              }(0, dz.d)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, yj.b)() || !0 === (null === (jB = IB()) || void 0 === jB ? void 0 : jB.inPlayback)) && LB(BB) : yB("toggle"))
            }
          }
        }
      }({
        runtime: nB.k,
        cameraView: () => {
          var BB;
          const jB = null === (BB = (0, IB.g)()) || void 0 === BB ? void 0 : BB.renderFrame;
          if (!jB) return null;
          const [zB, QB, nB] = jB.cameraPosition, [dB, NB, uB] = jB.cameraDirection;
          return {
            position: [zB, QB, nB],
            direction: [dB, NB, uB]
          }
        },
        canvas: () => {
          var BB, jB, zB;
          return null !== (BB = null === (jB = (zB = (0, dB.I)()).canvas) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : null
        },
        freecam: nB.g
      }),
      SQ = {
        states: {
          ...Uj,
          ...sj.k,
          ...tQ.states,
          ...sz,
          ...WB
        },
        events: {
          ...aj,
          ...yB,
          ...sj.e,
          ...qB.e,
          ...fz.g,
          ...tQ.events,
          ...Jz,
          ...iB.j
        },
        commands: {
          ...EB,
          ...pj,
          ...kB,
          ...sj.d,
          ...vj,
          ...qz,
          ...iB.f,
          ...Zj,
          ...tQ.commands,
          ...tz,
          ...eB,
          ...hz,
          ...Jj
        },
        queries: {
          ...sj.h,
          ...gQ
        },
        lookups: {
          ...rj,
          ...hB,
          ...fz.j,
          ...tQ.lookups,
          ...MB,
          ...Qz,
          ...Vz,
          ...lB
        }
      };

    function MQ() {
      (0, NB.g)(mB.m), (0, nB.m)(tQ.feed), (0, qB.i)(), Rj || (Rj = !0, (0, mB.l)(DB.h, (BB => {
        const jB = (0, YB.d)(DB.h, BB);
        "string" === typeof jB && Promise.resolve().then((() => zB(3762))).then((BB => {
          let {
            onCosmeticPackGranted: zB
          } = BB;
          zB(jB)
        }))
      })), (0, mB.l)(DB.ab, (BB => {
        const jB = (0, YB.d)(DB.ab, BB);
        "number" === typeof jB && UB.n.Ly("serverUpdating", Date.now() + jB, !0)
      })), (0, mB.l)(DB.C, (BB => {
        const jB = (0, YB.d)(DB.C, BB);
        if ((0, YB.c)(jB)) {
          const {
            xn: BB,
            Kn: zB
          } = jB;
          (0, cj.c)({
            xn: "string" === typeof BB ? BB : null,
            Kn: "string" === typeof zB ? zB : null
          })
        }
      })), (0, mB.l)(aB.Wb.NewUiRequest, (BB => {
        const jB = (0, YB.e)(BB);
        (0, YB.c)(jB) && "number" === typeof jB.id && (0, YB.c)(jB.clientParameters) && (0, bj.d)(jB.id, jB.clientParameters)
      })), (0, mB.l)(DB.W, (BB => {
        const jB = (0, YB.d)(DB.W, BB);
        "number" === typeof jB && (0, bj.f)(jB)
      })), (0, mB.h)(bj.b), (0, mB.l)(aB.Wb.UiRequestPopup, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB) && "number" === typeof jB.id && "string" === typeof jB.text) {
          const BB = jB.id;
          (0, bj.j)(BB, jB.text, !0 === jB.destructive, (jB => {
            vj.answerUiRequest({
              id: BB,
              Sa: jB
            })
          }))
        }
      })), (0, mB.l)(aB.Wb.TopRightHelper, (BB => {
        const jB = (0, YB.e)(BB);
        void 0 !== jB && UB.n.Ly("TopRightHelper", jB, !0)
      })), (0, mB.l)(aB.Wb.TaskProgress, (BB => {
        const jB = (0, YB.e)(BB);
        (0, YB.c)(jB) && "string" === typeof jB.taskId && "number" === typeof jB.progress && (0, Cj.d)({
          taskId: jB.taskId,
          progress: jB.progress
        })
      }))), Sz || (Sz = !0, (0, mB.l)(DB.o, (BB => {
        const jB = (0, YB.d)(DB.o, BB);
        (0, YB.c)(jB) && UB.n.Ly("showShopFromServer", {
          toggle: jB.NB,
          uB: jB.uB
        }, !0)
      })), (0, mB.l)(aB.Wb.OverShopInfo, (BB => {
        const jB = (0, YB.e)(BB);
        (0, YB.c)(jB) && UB.n.Ly("overShopInfo", jB.info, !0)
      })), (0, mB.l)(aB.Wb.ShowShopTutorial, (() => {
        UB.n.Ly("showShopTutorial", null, !0)
      }))), Lz || (Lz = !0, (0, mB.e)((() => {
        var BB;
        (0, mz.resetLeaveEvents)(), null === (BB = gz) || void 0 === BB || BB(), gz = (0, mB.c)() ? (0, kz.l)(mB.c) : null, (0, mB.c)() || UB.n.Zk()
      })), (0, mB.l)(aB.Wb.SetCookie, (BB => {
        const jB = (0, YB.e)(BB),
          zB = (0, Vj.d)().gameNameWithVariation;
        (0, YB.c)(jB) && "string" === typeof jB.key && null !== zB && (0, yz.setCookie)(zB, jB.key, jB.value)
      })), (0, mB.l)(aB.Wb.LeaveValues, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB) && "string" === typeof jB.leaveEventType) {
          const {
            leaveEventType: BB,
            category: zB,
            subCategory: QB,
            value: nB
          } = jB;
          (0, mz.updateLeaveValue)({
            leaveEventType: BB,
            category: zB,
            subCategory: QB,
            value: nB
          })
        }
      })), (0, mB.l)(aB.Wb.CustomAnalyticsEvent, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB) && "string" === typeof jB.cat1) {
          const {
            cat1: BB,
            cat2: zB,
            cat3: QB,
            value: nB
          } = jB;
          (0, mz.logCustomAnalyticsEvent)({
            cat1: BB,
            cat2: zB,
            cat3: QB,
            value: nB
          })
        }
      })), (0, mB.l)(aB.Wb.ProgressionEvent, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB)) {
          const {
            type: BB,
            location1: zB,
            location2: QB,
            location3: nB,
            score: dB
          } = jB;
          (0, mz.logProgressionEvent)({
            type: BB,
            location1: zB,
            location2: QB,
            location3: nB,
            score: dB
          })
        }
      })), (0, mB.l)(aB.Wb.ResourceEvent, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB)) {
          const {
            type: BB,
            resourceType: zB,
            amount: QB,
            category: nB,
            itemName: dB
          } = jB;
          (0, mz.logResourceEvent)({
            type: BB,
            resourceType: zB,
            amount: QB,
            category: nB,
            itemName: dB
          })
        }
      })), (0, mB.l)(aB.Wb.LeaderboardResponse, (BB => {
        const jB = (0, YB.e)(BB);
        if ((0, YB.c)(jB)) {
          const {
            category: BB,
            timeframe: zB,
            data: QB
          } = jB;
          UB.n.Ly("leaderboardResponse", {
            category: BB,
            timeframe: zB,
            data: QB
          })
        }
      })), (0, mB.l)(DB.s, (BB => {
        const jB = (0, YB.d)(DB.s, BB);
        "string" === typeof jB && (0, Gz.c)(BB.conn, jB)
      })), (0, mB.l)(DB.w, (BB => {
        const jB = (0, YB.d)(DB.w, BB);
        "string" === typeof jB && console.error(`[logErrorToConsole]: ${jB}`)
      }))), ZB(), (0, fz.c)(), Xj || (Xj = !0, (0, mB.l)(DB.g, (BB => {
        const jB = (0, YB.d)(DB.g, BB);
        void 0 !== jB && (0, hj.k)(jB)
      }))), Kj(), oj(), KB || (KB = !0, (0, dB.u)(CB)), QB.gameBridge.attach(SQ), (0, QB.installPageSources)({
        commands: {
          ...QB.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Zz.g
        },
        queries: mQ,
        lookups: {
          ...QB.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...yQ,
          lG: Zz.b,
          drawCallStats: Az.h
        }
      }), (0, Xz.e)(), NQ()
    }
  },
  41034: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      e: () => uB,
      g: () => NB,
      i: () => UB
    });
    var QB = zB(1995);
    let nB = null,
      dB = 0;
    const IB = new Set;

    function NB() {
      return nB
    }

    function uB() {
      return dB
    }

    function UB(BB) {
      nB = BB, dB++, (0, QB.e)();
      for (const jB of IB) jB()
    }

    function aB(BB) {
      IB.add(BB)
    }
  },
  41131: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => NB
    });
    var QB = zB(41138);
    let nB = null,
      dB = null;

    function IB() {
      return nB ??= zB.e(62).then((() => zB(60776))).catch((BB => {
        throw nB = null, BB
      })), nB
    }

    function NB() {
      return dB ??= Promise.all([IB(), (0, QB.h)()]).then((BB => {
        let [jB] = BB;
        return jB
      }), (BB => {
        throw dB = null, BB
      })), dB
    }
  },
  37148: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    const QB = {
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
  39146: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      c: () => nB
    });
    const QB = ["description", "label"];

    function nB(BB) {
      const jB = BB.type;
      return {
        type: jB,
        params: BB[jB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);