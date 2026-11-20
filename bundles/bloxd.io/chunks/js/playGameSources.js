export const id = 46;
export const ids = [46];
export const modules = {
  39199: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk,
      e: () => ak,
      i: () => tk
    });
    const Rk = 6e3;

    function tk(kk, Fk) {
      return [Math.floor(kk[0] / Fk) * Fk, Math.floor(kk[1] / Fk) * Fk, Math.floor(kk[2] / Fk) * Fk]
    }

    function ak(kk) {
      const Fk = (null !== kk && void 0 !== kk ? kk : "").match(/-?\d+(?:\.\d+)?/g);
      return Fk && Fk.length >= 3 ? [Number(Fk[0]), Number(Fk[1]), Number(Fk[2])] : null
    }

    function Xk(kk, Fk) {
      return kk === Fk ? String(kk) : `${kk}-${Fk}`
    }

    function bk(kk, Fk, Bk, Rk) {
      const tk = [];
      let ak = new Map;
      for (let Xk = kk[2]; Xk < kk[2] + Fk; Xk++) {
        const bk = new Map;
        let wk = kk[0];
        for (; wk < kk[0] + Fk;) {
          const tk = Rk(wk, Bk, Xk);
          let dk = wk;
          for (; dk + 1 < kk[0] + Fk && Rk(dk + 1, Bk, Xk) === tk;) dk++;
          if (null !== tk) {
            const kk = `${wk} ${dk} ${tk}`,
              Fk = ak.get(kk);
            Fk ? (Fk.z1 = Xk, ak.delete(kk), bk.set(kk, Fk)) : bk.set(kk, {
              x0: wk,
              x1: dk,
              z0: Xk,
              z1: Xk,
              name: tk
            })
          }
          wk = dk + 1
        }
        tk.push(...ak.values()), ak = bk
      }
      return tk.push(...ak.values()), tk.sort(((kk, Fk) => kk.z0 - Fk.z0 || kk.x0 - Fk.x0)).map((kk => `x${Xk(kk.x0,kk.x1)} z${Xk(kk.z0,kk.z1)} ${kk.name}`))
    }

    function wk(kk, Fk, Bk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Rk;
      const wk = [kk[0] + Fk - 1, kk[1] + Fk - 1, kk[2] + Fk - 1],
        dk = null !== tk && tk.every(((Fk, Bk) => Math.floor(Fk) >= kk[Bk] && Math.floor(Fk) <= wk[Bk])),
        sk = [`The chunk from ${kk.join(" ")} to ${wk.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== tk && sk.push(`The player's feet are at ${tk.map(Math.floor).join(" ")}, ${dk?"in this chunk":"outside this chunk"}.`);
      const Vk = [];
      for (let Rk = kk[1]; Rk <= wk[1]; Rk++) {
        const tk = bk(kk, Fk, Rk, Bk).join("; "),
          ak = Vk[Vk.length - 1];
        (null === ak || void 0 === ak ? void 0 : ak.boxes) === tk ? ak.to = Rk : Vk.push({
          from: Rk,
          to: Rk,
          boxes: tk
        })
      }
      const Jk = Vk.filter((kk => "" !== kk.boxes));
      0 === Jk.length && sk.push("It is all air.");
      let Ak = sk.join("\n").length;
      for (const Rk of Jk) {
        const kk = `y${Xk(Rk.from,Rk.to)}: ${Rk.boxes}`;
        if (Ak += kk.length + 1, Ak > ak) {
          sk.push(`Cut short: the layers from y${Rk.from} up aren't shown, as there are too many blocks.`);
          break
        }
        sk.push(kk)
      }
      return sk.join("\n")
    }
  },
  8471: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(22);

    function tk() {
      return !Rk.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36621: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      j: () => tk
    });
    const Rk = [.25, .5, 1, 2, 4, 8, 16];

    function tk(kk, Fk) {
      const Bk = Rk;
      let tk = Bk.indexOf(kk);
      return -1 === tk && (tk = Bk.findIndex((Fk => Fk >= kk)), -1 === tk && (tk = Bk.length - 1)), "up" === Fk ? Bk[Math.min(tk + 1, Bk.length - 1)] : Bk[Math.max(tk - 1, 0)]
    }

    function ak(kk) {
      return kk <= Rk[0]
    }

    function Xk(kk) {
      return kk >= Rk[Rk.length - 1]
    }
  },
  36232: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => ak
    });
    let Rk = !1;

    function tk() {
      return Rk
    }

    function ak(kk) {
      return Rk !== kk && (Rk = kk, !0)
    }
  },
  38617: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(29),
      tk = Bk(1863);

    function ak(kk) {
      let {
        taskId: Fk,
        progress: Bk
      } = kk;
      const Rk = tk.b.get("_tasks");
      null !== Rk && void 0 !== Rk && Rk[Fk] && tk.b.apply({
        _tasks: {
          ...Rk,
          [Fk]: {
            ...Rk[Fk],
            progress: Bk
          }
        }
      })
    }
    Rk.o.subscribe("clientTaskProgress", (kk => {
      ak(kk)
    }))
  },
  39168: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Jk,
      d: () => ek,
      g: () => dk,
      j: () => Vk,
      n: () => wk,
      q: () => Xk,
      u: () => sk,
      w: () => yk
    });
    var Rk = Bk(1863),
      tk = Bk(29),
      ak = Bk(1873);
    const Xk = (0, ak.n)((function() {
        var kk, Fk, Bk, tk;
        return {
          health: null !== (kk = Rk.b.get("_health")) && void 0 !== kk ? kk : null,
          maxHealth: null !== (Fk = Rk.b.get("_totalMaxHealth")) && void 0 !== Fk ? Fk : null,
          shield: null !== (Bk = Rk.b.get("_shield")) && void 0 !== Bk ? Bk : null,
          maxShield: null !== (tk = Rk.b.get("maxShield")) && void 0 !== tk ? tk : null
        }
      }), [], (0, ak.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      bk = [{
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

    function wk(kk, Fk) {
      return bk[(kk ? 2 : 0) + (Fk ? 1 : 0)]
    }
    const dk = (0, ak.n)((function() {
      var kk;
      return null !== (kk = Rk.b.get("_aura")) && void 0 !== kk ? kk : null
    }), [], (0, ak.k)("_aura"));

    function sk(kk) {
      return {
        watch: Fk => (0, tk.p)("shotPlayer", (Bk => {
          let {
            playerId: Rk,
            damage: tk,
            wasCrit: ak,
            distance: Xk
          } = Bk;
          kk(Rk) && Fk({
            damage: tk,
            wasCrit: ak,
            distance: Xk
          })
        }))
      }
    }

    function Vk(kk) {
      return (0, ak.c)("chat", (Fk => {
        let {
          serverChatMsgId: Bk,
          content: Rk,
          chatterEId: tk
        } = Fk;
        return {
          serverChatMsgId: null !== Bk && void 0 !== Bk ? Bk : null,
          content: Rk,
          author: tk ? kk(tk) : null
        }
      }))
    }
    class Jk {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Bk = this.shown;
        return kk !== this.needed && (this.needed = kk, this.neededSince = Fk, null === kk && (this.shown = null)), this.shown !== this.needed && Fk - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Bk
      }
    }

    function Ak(kk) {
      return [{
        translationKey: `touchKeys:${kk}`
      }]
    }
    const ek = {
      open: Ak("open"),
      close: Ak("close"),
      milk: Ak("milk"),
      shear: Ak("shear"),
      tame: Ak("tame"),
      feed: Ak("feed"),
      ride: Ak("ride")
    };

    function yk(kk) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: kk
      }]
    }
  },
  40161: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      e: () => Xk
    });
    var Rk = Bk(3097);
    let tk = null,
      ak = null;

    function Xk() {
      return ak ??= Bk.e(208).then((() => Bk(36056))).then((kk => {
        let {
          ITEM_SPRITES: Fk,
          ITEM_SPRITES_WITHOUT_FILE: Bk,
          ITEM_FILES_WITHOUT_SPRITE: ak
        } = kk;
        tk = function(kk, Fk, Bk) {
          const tk = new Set,
            ak = (0, Rk.v)(Fk);
          let Xk = 0;
          for (const [Rk, bk] of kk.entries()) Rk === ak[Xk] ? Xk++ : tk.add(bk);
          if ("" !== Bk)
            for (const bk of Bk.split(Rk.o)) tk.add(bk);
          return tk
        }(Fk.split(Rk.o), Bk, ak)
      }), (kk => {
        throw ak = null, kk
      })), ak
    }

    function bk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = tk) || void 0 === Bk ? void 0 : Bk.has(kk)) && void 0 !== Fk && Fk
    }
  },
  39186: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      h: () => ak,
      i: () => tk
    });
    const Rk = 128;

    function tk(kk, Fk, Bk, Rk) {
      const tk = 2 * Fk - 1,
        ak = 1 - 2 * Bk,
        Xk = kk(0) - tk * kk(3),
        bk = kk(4) - tk * kk(7),
        wk = kk(8) - tk * kk(11),
        dk = kk(1) - ak * kk(3),
        sk = kk(5) - ak * kk(7),
        Vk = kk(9) - ak * kk(11);
      Rk[0] = bk * Vk - wk * sk, Rk[1] = wk * dk - Xk * Vk, Rk[2] = Xk * sk - bk * dk;
      const Jk = Rk[0] * kk(3) + Rk[1] * kk(7) + Rk[2] * kk(11) < 0 ? -1 : 1,
        Ak = Math.hypot(Rk[0], Rk[1], Rk[2]) * Jk;
      return Rk[0] /= Ak, Rk[1] /= Ak, Rk[2] /= Ak, Rk
    }

    function ak(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = [Math.floor(Fk[0]), Math.floor(Fk[1]), Math.floor(Fk[2])],
        bk = [0, 0, 0],
        wk = [1 / 0, 1 / 0, 1 / 0],
        dk = [1 / 0, 1 / 0, 1 / 0];
      for (let Jk = 0; Jk < 3; Jk++) bk[Jk] = Math.sign(Bk[Jk]), 0 !== bk[Jk] && (dk[Jk] = Math.abs(1 / Bk[Jk]), wk[Jk] = (Xk[Jk] + (bk[Jk] > 0 ? 1 : 0) - Fk[Jk]) / Bk[Jk]);
      let sk = 0,
        Vk = Math.abs(Bk[0]) > Math.abs(Bk[1]) ? 0 : 1;
      for (Math.abs(Bk[2]) > Math.abs(Bk[Vk]) && (Vk = 2); sk <= Rk;) {
        if (kk(Xk[0], Xk[1], Xk[2])) return tk[0] = Xk[0], tk[1] = Xk[1], tk[2] = Xk[2], ak[0] = 0, ak[1] = 0, ak[2] = 0, ak[Vk] = -bk[Vk], !0;
        Vk = wk[0] < wk[1] ? 0 : 1, wk[2] < wk[Vk] && (Vk = 2), sk = wk[Vk], Xk[Vk] += bk[Vk], wk[Vk] += dk[Vk]
      }
      return !1
    }
  },
  39162: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      return Math.hypot(kk[0] - Fk[0], kk[1] - Fk[1], kk[2] - Fk[2]) < Bk + .5
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38640: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk
    });
    var Rk = Bk(1173),
      tk = Bk(1273),
      ak = Bk(22),
      Xk = Bk(1259),
      bk = Bk(1267),
      wk = Bk(1459),
      dk = Bk(36202);

    function sk(kk) {
      let {
        kk: Fk,
        Fk: Bk
      } = kk;
      const sk = null !== Fk && void 0 !== Fk ? Fk : (0, bk.e)().gameNameWithVariation;
      (0, Rk.J)(sk) && ((0, dk.k)(), (0, Xk.R)((() => {
        console.log("Received matchmaking order from game server to game", Fk), (0, ak.f)("inGameReplay"), (0, wk.navigatePreserveSearch)((0, tk.b)(sk, null !== Bk && void 0 !== Bk ? Bk : void 0))
      }), "video_start"))
    }
  },
  38783: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(29),
      tk = Bk(1881);

    function ak(kk) {
      var Fk, Bk;
      const ak = (0, tk.n)(null !== (Fk = null === (Bk = tk.s.toggleFreeCam) || void 0 === Bk ? void 0 : Bk[0]) && void 0 !== Fk ? Fk : null);
      Rk.o.Hf("showBottomMessage", {
        message: `Free Camera ${kk?"Enabled":"Disabled"}${ak?` - Press ${ak} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38624: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      f: () => Xk,
      j: () => bk,
      n: () => dk
    });
    var Rk = Bk(29),
      tk = Bk(1300);
    const ak = new Map;

    function Xk(kk, Fk) {
      Rk.o.Hf("newUiRequest", {
        id: kk,
        clientParameters: Fk
      }, !0)
    }

    function bk(kk) {
      Rk.o.Hf("removeUiRequest", kk, !0);
      const Fk = ak.get(kk);
      Fk && (Fk.tearDownNotification(), ak.delete(kk))
    }

    function wk() {
      Rk.o.Hf("clearUiRequests");
      for (const kk of ak.values()) kk.tearDownNotification();
      ak.clear()
    }

    function dk(kk, Fk, Bk) {
      const Rk = tk.NotificationProvider.showPromptPopup({
        title: Fk,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ak.set(kk, Rk), Rk.getResult().then((Fk => {
        ak.delete(kk), "notificationTornDown" !== Fk && Bk(Fk)
      }))
    }
  },
  39190: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk,
      f: () => Jk
    });
    var Rk = Bk(182),
      tk = Bk(39199);
    const ak = 20;

    function Xk(kk) {
      return kk.map(Math.floor).join(" ")
    }

    function bk(kk) {
      return null === kk.amount || 1 === kk.amount ? kk.name : `${kk.amount} ${kk.name}`
    }
    var wk = Bk(39203),
      dk = Bk(1863),
      sk = Bk(1267);

    function Vk(kk, Fk) {
      if (!kk) return wk.d;
      const Bk = kk.playerFeet();
      if (!Bk) return "The player isn't in the world yet, so no blocks can be seen.";
      const ak = Rk.h.Ze,
        Xk = (0, tk.i)(null !== Fk && void 0 !== Fk ? Fk : Bk, ak),
        bk = kk.chunkBlocks(Xk);
      return bk ? (0, tk.b)(Xk, ak, ((Fk, Bk, Rk) => {
        const tk = bk(Fk, Bk, Rk);
        return 0 === tk ? null : kk.blockName(tk).split("|")[0]
      }), Bk) : `The chunk from ${Xk.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Bk.map(Math.floor).join(" ")}.`
    }

    function Jk(kk) {
      var Fk, Bk, Rk;
      if (!kk) return wk.e;
      const tk = kk.playerFeet();
      if (!tk) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Vk,
        heldSlot: Jk
      } = kk.inventory();
      return function(kk) {
        const Fk = [];
        null !== kk.game && Fk.push(`Game: ${kk.game}.`);
        const Bk = null === kk.health ? "" : `, health ${Math.round(kk.health)}${null===kk.maxHealth?"":` of ${Math.round(kk.maxHealth)}`}`;
        Fk.push(`The player (the creator) stands at ${Xk(kk.position)}${Bk}, ${kk.creative?"in":"not in"} creative mode.`);
        const Rk = kk.slots[kk.heldSlot];
        Fk.push(Rk ? `Holding (slot ${kk.heldSlot}): ${bk(Rk)}.` : `Holding nothing (slot ${kk.heldSlot} is empty).`);
        const tk = kk.slots.flatMap(((kk, Fk) => kk ? [`slot ${Fk}: ${bk(kk)}`] : []));
        Fk.push(tk.length > 0 ? `Inventory: ${tk.join(", ")}.` : "Inventory: empty.");
        const wk = Fk => Math.hypot(Fk.position[0] - kk.position[0], Fk.position[1] - kk.position[1], Fk.position[2] - kk.position[2]),
          dk = [...kk.nearby].sort(((kk, Fk) => wk(kk) - wk(Fk)));
        if (0 === dk.length) Fk.push("No other players or mobs are near enough to see.");
        else {
          Fk.push("Near them, nearest first:");
          for (const kk of dk.slice(0, ak)) {
            const Bk = "player" === kk.kind ? `player "${kk.name||"?"}"` : kk.name && kk.name !== kk.kind ? `${kk.kind} "${kk.name}"` : kk.kind,
              Rk = Math.round(wk(kk));
            Fk.push(`- ${Bk} at ${Xk(kk.position)}, ${Rk} block${1===Rk?"":"s"} away`)
          }
          dk.length > ak && Fk.push(`- and ${dk.length-ak} more further away`)
        }
        return kk.droppedItems > 0 && Fk.push(`${kk.droppedItems} dropped item${1===kk.droppedItems?" is":"s are"} on the ground nearby.`), Fk.join("\n")
      }({
        game: null !== (Fk = (0, sk.e)().gameNameWithVariation) && void 0 !== Fk ? Fk : null,
        position: tk,
        health: null !== (Bk = dk.b.get("_health")) && void 0 !== Bk ? Bk : null,
        maxHealth: null !== (Rk = dk.b.get("_totalMaxHealth")) && void 0 !== Rk ? Rk : null,
        creative: !0 === dk.b.get("creative"),
        heldSlot: Jk,
        slots: Vk,
        nearby: kk.nearby(),
        droppedItems: kk.droppedItems()
      })
    }
  },
  38651: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      f: () => wk,
      h: () => dk
    });
    var Rk = Bk(1173),
      tk = Bk(994),
      ak = Bk(36536),
      Xk = Bk(29);

    function bk(kk) {
      let {
        lobbyName: Fk,
        gameNameWithVariation: Bk
      } = kk;
      return !(0, Rk.N)(Fk) || null !== Bk && (Bk.startsWith("testGym") || (0, tk.n)(Bk))
    }

    function wk(kk) {
      return kk.WF === ak.b.Leave || kk.WF === ak.b.Cursor
    }

    function dk(kk) {
      Xk.o.Hf("codeCollab", {
        type: kk.WF,
        docKey: kk.vF,
        version: kk.iF,
        editorCount: kk.YF,
        peers: kk.oF,
        updates: kk.LF,
        playerId: kk.EF,
        playerName: kk.SF,
        colour: kk.NF,
        anchor: kk.HF,
        head: kk.uF,
        existingCursors: kk.MF,
        files: kk.gF,
        engineSettings: kk.UF
      })
    }
  },
  40122: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => ck,
      C: () => nk,
      E: () => rk,
      I: () => Mk,
      K: () => Tk,
      L: () => uk,
      M: () => pk,
      O: () => Zk,
      P: () => Uk,
      c: () => Kk,
      e: () => zk,
      h: () => Nk,
      j: () => xk,
      n: () => Hk,
      o: () => Sk,
      p: () => Dk,
      s: () => gk,
      w: () => Gk
    });
    var Rk = Bk(1344),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(2303),
      bk = Bk(4546),
      wk = Bk(4511);
    let dk, sk = !1,
      Vk = !1,
      Jk = !1,
      Ak = !1;
    const ek = 1300,
      yk = 3e3;
    let fk = 0,
      mk = !1,
      Wk = !1,
      vk = 0;
    const ik = 2;
    let Yk = !1,
      Lk = !1;
    const Ok = new Set,
      Ek = new Set;

    function Sk() {
      return sk
    }

    function Nk() {
      return Wk
    }

    function Hk() {
      return Lk
    }

    function uk() {
      return (0, ak.o)() && !Lk
    }

    function Mk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== Lk) {
        Lk = kk;
        for (const kk of [...Ek]) kk(Lk);
        Fk && Zk()
      }
    }

    function gk(kk) {
      return Ek.add(kk), () => {
        Ek.delete(kk)
      }
    }

    function Uk() {
      (0, bk.i)(Xk.A.Menu, (0, ak.o)() ? 0 : Xk.A.Menu)
    }

    function ck() {
      Wk = !1, vk = 0, Uk(), Zk()
    }

    function Gk(kk) {
      return Ok.add(kk), () => {
        Ok.delete(kk)
      }
    }

    function Tk(kk) {
      Vk = !1, kk !== sk && (sk = kk, Ak = !1, clearTimeout(dk), Jk = !sk && Yk, sk ? (mk = !1, Wk = !1, vk = 0) : uk() && !Yk && (Wk = !0), Yk = !1, sk && !uk() && lk(), Ik(), Jk && Zk())
    }

    function rk(kk) {
      kk !== mk && (mk = kk, kk || Zk())
    }

    function Dk() {
      Vk = !1, Ak || !0 !== qk() || (Ak = !0, clearTimeout(dk), dk = setTimeout(Pk, ek))
    }

    function zk() {
      return (!Vk || performance.now() - fk > yk) && (Vk = (0, wk.J)().lockPointer(), fk = performance.now()), Vk
    }

    function Pk() {
      hk() && Ck() && zk()
    }

    function hk() {
      return uk() && !sk && !mk && !(0, Rk.h)()
    }

    function qk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Ck() {
      return Jk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== qk()
    }

    function Zk() {
      uk() ? hk() && !Wk && Ck() && zk() : sk && !Yk && lk()
    }

    function pk() {
      Wk ? navigator.vendor.startsWith("Apple") ? jk() : vk = ik : Zk()
    }

    function Kk() {
      vk > 0 && 0 === --vk && jk()
    }

    function xk() {
      vk = 0
    }

    function jk() {
      hk() && !0 === qk() && zk()
    }

    function lk() {
      Yk = !0, (0, wk.J)().unlockPointer()
    }

    function nk() {
      Vk = !1, Jk = !1, Ak = !1, clearTimeout(dk), mk = !1, Wk = !1, vk = 0, Yk = !1;
      const kk = sk;
      sk = !1, kk && Ik()
    }

    function Ik() {
      for (const kk of [...Ok]) kk(sk);
      tk.o.Hf("pointerLockUpdate", sk)
    }
  },
  40097: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk,
      d: () => bk,
      e: () => Vk,
      i: () => dk,
      k: () => Xk,
      m: () => sk,
      q: () => wk
    });
    let Rk = null,
      tk = null,
      ak = null;

    function Xk(kk) {
      Rk = kk
    }

    function bk() {
      return Rk
    }

    function wk(kk) {
      tk = kk
    }

    function dk() {
      return tk
    }

    function sk(kk) {
      ak = kk
    }

    function Vk() {
      return ak
    }

    function Jk() {
      var kk, Fk;
      return !0 === (null === (kk = tk) || void 0 === kk || null === (Fk = kk.currentViewer) || void 0 === Fk ? void 0 : Fk.inPlayback)
    }
  },
  40147: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      h: () => ak,
      i: () => bk
    });
    var Rk = Bk(4e4),
      tk = Bk(40015);

    function ak(kk) {
      if (kk.queries.drawCensus() < Rk.Hb.BYTES) return null;
      const Fk = kk.memoryData(kk.scratch(), Rk.Hb.BYTES, 4, "the draw census");
      return null === Fk ? null : {
        terrainOpaque: Rk.Hb.terrainOpaque(Fk, 0),
        terrainTransparent: Rk.Hb.terrainTransparent(Fk, 0),
        terrainPack: Rk.Hb.terrainPack(Fk, 0),
        earthSky: Rk.Hb.earthSky(Fk, 0),
        skyMeshes: Rk.Hb.skyMeshes(Fk, 0),
        regular: Rk.Hb.regular(Fk, 0),
        thin: Rk.Hb.thin(Fk, 0),
        line: Rk.Hb.line(Fk, 0),
        text: Rk.Hb.text(Fk, 0),
        particles: Rk.Hb.particles(Fk, 0)
      }
    }

    function Xk(kk) {
      const {
        terrainOpaque: Fk,
        terrainTransparent: Bk,
        earthSky: Rk,
        skyMeshes: tk,
        regular: ak,
        thin: Xk,
        line: bk,
        text: wk,
        particles: dk
      } = kk;
      return Fk + Bk + Rk + tk + ak + Xk + bk + wk + dk
    }

    function bk() {
      const kk = (0, tk.g)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const Fk = ak(kk);
        if (null === Fk) return [];
        const {
          terrainOpaque: Bk,
          terrainTransparent: Rk,
          terrainPack: tk,
          earthSky: bk,
          skyMeshes: wk,
          regular: dk,
          thin: sk,
          line: Vk,
          text: Jk,
          particles: Ak
        } = Fk;
        return [{
          label: "Drawn",
          value: `${Xk(Fk)}`
        }, {
          label: "Terrain",
          value: `${Bk} opaque / ${Rk} transparent (${tk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${dk} / ${sk}`
        }, {
          label: "Text / Lines",
          value: `${Jk} / ${Vk}`
        }, {
          label: "Sky / Particles",
          value: `${bk+wk} / ${Ak}`
        }]
      }(kk.api) : []
    }
  },
  40150: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadIcons: () => Hk,
      setIconFileOverrides: () => uk,
      wasmIconLookups: () => zk,
      wasmIconQueries: () => Dk
    });
    var Rk = Bk(4235),
      tk = Bk(4204),
      ak = Bk(40154),
      Xk = Bk(1858),
      bk = Bk(1847),
      wk = Bk(3090),
      dk = Bk(3097);
    let sk = null,
      Vk = null;

    function Jk(kk) {
      const Fk = kk.startsWith(dk.i),
        [Bk, Rk = Bk, tk = Bk] = (Fk ? kk.slice(dk.i.length) : kk).split(dk.f);
      return {
        top: Bk,
        left: Rk,
        right: tk,
        half: Fk
      }
    }

    function Ak(kk) {
      const Fk = null === sk ? void 0 : (0, wk.c)(kk),
        Bk = void 0 === Fk ? 0 : sk.codes[Fk];
      return 0 === Bk ? void 0 : sk.pool[Bk - 1]
    }
    var ek = Bk(3083),
      yk = Bk(4190),
      fk = Bk(4228),
      mk = Bk(40156);
    const Wk = "item:";
    let vk = null,
      ik = null,
      Yk = null,
      Lk = null,
      Ok = !1,
      Ek = !1,
      Sk = null,
      Nk = 0;

    function Hk() {
      return Ek || (Ek = !0, (0, fk.j)().then((kk => {
        kk && (0, Xk.b)()
      }))), Yk ??= Promise.all([(0, ek.e)(), (Vk ??= Bk.e(1).then((() => Bk(42030))).then((kk => {
        let {
          BLOCK_FACE_RUNS: Fk,
          BLOCK_FACES: Bk,
          MAX_FACE_ITEM_ID: Rk
        } = kk;
        sk = {
          codes: (0, dk.x)(Fk, Rk + 1),
          pool: Bk.split(dk.o).map(Jk)
        }
      }), (kk => {
        throw Vk = null, kk
      })), Vk), (0, mk.e)(), Bk.e(189).then((() => Bk(9022)))]).then((kk => {
        let [, , Fk, Bk] = kk;
        Fk.followBundledTextures(), vk = Fk, ik = Bk, (0, Xk.b)()
      }), (kk => {
        Yk = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", kk)
      })), Yk
    }

    function uk(kk) {
      Sk = kk, Nk++, (0, Xk.b)()
    }

    function Mk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = Sk) || void 0 === Bk ? void 0 : Bk.itemSprite(kk)) && void 0 !== Fk ? Fk : vk.itemSpriteUrl(kk)
    }

    function gk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = Sk) || void 0 === Bk ? void 0 : Bk.blockTexture(kk)) && void 0 !== Fk ? Fk : vk.blockTextureUrl(kk)
    }

    function Uk(kk) {
      var Fk;
      return null !== (Fk = (0, ek.c)(kk)) && void 0 !== Fk ? Fk : kk
    }

    function ck(kk, Fk) {
      var Bk, Rk, tk;
      return null !== (Bk = null !== (Rk = null !== (tk = gk(kk)) && void 0 !== tk ? tk : null === Fk || void 0 === Fk ? void 0 : Fk.rotated[kk]) && void 0 !== Rk ? Rk : null === Fk || void 0 === Fk ? void 0 : Fk.animated[kk]) && void 0 !== Bk ? Bk : vk.notFoundUrl()
    }

    function Gk(kk) {
      return void 0 !== (0, wk.c)(kk) ? kk : /^[1-9][0-9]*$/.test(kk) ? (0, wk.f)(Number(kk)) : void 0
    }

    function Tk(kk) {
      var Fk;
      if (kk.startsWith(Wk)) {
        var Bk;
        const Fk = (0, ek.c)(kk.slice(5));
        return null !== (Bk = void 0 === Fk ? null : Mk(Fk)) && void 0 !== Bk ? Bk : vk.notFoundUrl()
      }
      return null !== (Fk = vk.particleUrl(kk)) && void 0 !== Fk ? Fk : vk.notFoundUrl()
    }

    function rk(kk, Fk) {
      return "StairsBlock" === kk ? kk : Fk ? "SlabBlock" : "CubeBlock"
    }
    const Dk = {
        async blockIcon(kk) {
          var Fk;
          let {
            name: Rk,
            size: tk,
            lineWidth: ak
          } = kk;
          await Hk();
          const bk = null !== (Fk = Gk(Rk)) && void 0 !== Fk ? Fk : Rk,
            dk = (0, fk.c)(bk, tk, ak);
          if (null !== dk) return dk;
          const sk = Ak(bk),
            Vk = (0, wk.c)(bk),
            Jk = void 0 === Vk || null === ik ? void 0 : ik.itemTypeNameOf(Vk);
          if (null === vk || void 0 === sk) return "";
          const ek = [sk.top, sk.left, sk.right].some((kk => null === gk(kk))),
            mk = ek ? await (Lk ??= Bk.e(201).then((() => Bk(34024))).then((kk => (Ok && (Ok = !1, (0, Xk.b)()), {
              rotated: kk.rotatedBlockTextures,
              animated: kk.animatedBlockTextures
            })), (kk => (Lk = null, Ok = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", kk), null))), Lk) : null;
          if (ek && null === mk) return "";
          const Wk = {
              top: ck(sk.top, mk),
              left: ck(sk.left, mk),
              right: ck(sk.right, mk),
              itemType: rk(Jk, sk.half)
            },
            Yk = 0 === Nk ? bk : `${bk}#${Nk}`;
          return (await (0, yk.d)()).drawBlockIconUrl(Yk, tk, ak, (() => Wk))
        }
      },
      zk = {
        itemIcon: function(kk) {
          var Fk, Bk;
          if (null === vk) return Hk(), bk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          if ((0, tk.h)(kk)) return {
            kind: "icon",
            url: null !== (Bk = vk.ingameIconUrl(kk)) && void 0 !== Bk ? Bk : vk.notFoundUrl()
          };
          if (kk.startsWith(tk.d)) return {
            kind: "icon",
            url: Tk(kk.slice(tk.d.length))
          };
          if (0 === (0, wk.h)()) return (0, ak.c)(), bk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          const Xk = null !== (Fk = Gk(kk)) && void 0 !== Fk ? Fk : kk,
            dk = (0, wk.c)(Xk),
            sk = void 0 === dk ? void 0 : ik.itemTypeNameOf(dk);
          if (void 0 !== Ak(Xk)) return {
            kind: "drawnBlock"
          };
          const Vk = function(kk) {
            var Fk;
            return null !== (Fk = Mk(Uk(kk))) && void 0 !== Fk ? Fk : vk.notFoundUrl()
          }(Xk);
          if ((0, fk.g)(Xk) && ! function(kk) {
              return null !== Sk && (null !== Sk.itemSprite(Uk(kk)) || null !== Sk.model(kk))
            }(Xk)) return {
            kind: "model",
            url: Vk
          };
          if ("Gun" === sk) return {
            kind: "gun",
            url: Vk
          };
          if (void 0 !== dk && "GrayscaleArmour" === ik.itemTypeOf(dk) || Object.hasOwn(Rk.b, Xk)) {
            var Jk;
            const Fk = null !== (Jk = (0, Rk.c)(kk)) && void 0 !== Jk ? Jk : (0, Rk.c)(Xk);
            if (Fk) return {
              kind: "item",
              url: Vk,
              tint: Fk
            }
          }
          return {
            kind: "item",
            url: Vk
          }
        },
        hasIcon: function(kk) {
          return void 0 !== Gk(kk) || (0, tk.h)(kk) || kk.startsWith(tk.d)
        },
        isItemName: function(kk) {
          return void 0 !== Gk(kk)
        }
      }
  },
  40095: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      attachPlayGameSources: () => ZB,
      playGameSources: () => CB
    });
    var Rk = Bk(1847),
      tk = Bk(40097),
      ak = Bk(4511),
      Xk = Bk(40015),
      bk = Bk(40100),
      wk = Bk(39168),
      dk = Bk(29),
      sk = Bk(4531),
      Vk = Bk(4524),
      Jk = Bk(40051),
      Ak = Bk(40073),
      ek = Bk(40107),
      yk = Bk(40063);
    (0, yk.k)(sk.Tb.Chat, (kk => {
      if (kk.payloadKind !== Vk.Nb.Msgpack) return;
      const Fk = function(kk) {
        if (null === kk || "object" !== typeof kk || !("content" in kk)) return null;
        const {
          chatMsgId: Fk,
          content: Bk,
          chatterEId: Rk
        } = kk;
        return {
          serverChatMsgId: null !== Fk && void 0 !== Fk ? Fk : void 0,
          content: Bk,
          chatterEId: void 0 === Rk || null === Rk ? void 0 : String(Rk)
        }
      }((0, Jk.e)(kk.payload));
      null !== Fk && dk.o.Hf("chat", Fk, !0)
    }));
    const fk = {
        chatReceived: (0, wk.j)((function(kk) {
          var Fk, Bk, Rk;
          return {
            id: kk,
            name: null !== (Fk = ek.g.getName(kk)) && void 0 !== Fk ? Fk : null,
            local: (0, Ak.e)() === kk,
            profileEffect: null !== (Bk = null === (Rk = (0, ek.i)(kk)) || void 0 === Rk ? void 0 : Rk.profileEffect) && void 0 !== Bk ? Bk : null
          }
        }))
      },
      mk = {
        sendChatMessage(kk) {
          var Fk;
          let {
            UX: Bk,
            channelName: Rk
          } = kk;
          null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.clientApi.sendChat(Bk, Rk)
        }
      };
    var Wk = Bk(182),
      vk = Bk(1863),
      ik = Bk(4e4),
      Yk = Bk(39162);
    const Lk = [0, 0, 0],
      Ok = {
        codeBlockClickable(kk) {
          var Fk;
          const Bk = (0, Xk.g)();
          if (null === Bk || void 0 === Bk || !Bk.isSessionLive) return !1;
          const Rk = Bk.api;
          if (0 !== (ik.w.playerFlags(Rk.apiView, 0) & ik.Ed.Crouching)) return !1;
          const tk = Rk.queries.directorEntity(Rk.localId) >= ik.zb.BYTES ? Rk.memoryData(Rk.scratch(), ik.zb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === tk) return !1;
          for (let ak = 0; ak < 3; ak++) Lk[ak] = ik.zb.feet(tk, 0, ak);
          return Lk[1] += ik.zb.eyeHeight(tk, 0), (0, Yk.e)(Lk, kk, null !== (Fk = vk.b.get("blockReach")) && void 0 !== Fk ? Fk : Wk.h.fW)
        }
      },
      Ek = {
        clickCodeBlock(kk) {
          var Fk;
          null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.clickCodeBlock(kk)
        }
      };
    var Sk = Bk(40023),
      Nk = Bk(40109),
      Hk = Bk(994),
      uk = Bk(38685),
      Mk = Bk(4507),
      gk = Bk(40037),
      Uk = Bk(40021),
      ck = Bk(40043);

    function Gk(kk) {
      if (null === kk) return null;
      const Fk = [];
      for (const Bk of kk) {
        const kk = Object.keys(Bk)[0];
        if ("Dk" === kk) {
          const {
            str: kk,
            style: Rk,
            clickableUrl: tk
          } = Bk.Dk, ak = Object.keys(kk)[0], Xk = kk[ak];
          "string" !== ak && "styledEntityName" !== ak && "styledTranslatedText" !== ak || Fk.push({
            str: Xk,
            style: Rk,
            clickableUrl: tk
          })
        } else Fk.push(Bk[kk])
      }
      return Fk
    }
    const Tk = {
      screenPos(kk) {
        var Fk, Bk;
        return null !== (Fk = null === (Bk = (0, Xk.g)()) || void 0 === Bk ? void 0 : Bk.renderFrame.projectWorldPosToScreenPos(kk)) && void 0 !== Fk ? Fk : {
          x: 0,
          y: 0
        }
      }
    };
    let rk = !1;

    function Dk() {
      rk || (rk = !0, (0, yk.k)(sk.Tb.ProgressBarUpdate, (kk => {
        const Fk = (0, ck.j)(kk);
        (0, ck.e)(Fk) && dk.o.Hf("progressBarUpdate", Fk, !0)
      })), (0, yk.k)(gk.v, (kk => {
        const Fk = (0, ck.f)(gk.v, kk);
        Fk && dk.o.Hf("middleScreenBarInitiate", {
          duration: Fk.aR,
          XR: Fk.XR,
          horizBarRemOffset: Fk.bR
        }, !0)
      })), (0, yk.k)(sk.Tb.RemoveMiddleScreenBar, (() => {
        dk.o.Hf("middleScreenBarRemove")
      })), (0, yk.k)(gk.gb, (kk => {
        const Fk = (0, ck.f)(gk.gb, kk);
        if (Fk) {
          var Bk;
          const kk = Fk.RB ? null === (Bk = (0, Xk.g)()) || void 0 === Bk ? void 0 : Bk.renderFrame.projectDirectionToScreenPos(Fk.RB) : void 0;
          dk.o.Hf("sendHitmarker", {
            BB: Fk.BB,
            screenPos: kk
          }, !0)
        }
      })), (0, yk.k)(gk.lb, (kk => {
        const Fk = (0, ck.f)(gk.lb, kk);
        if (Fk) {
          const {
            id: kk,
            position: Bk,
            style: Rk,
            Ra: tk,
            Xa: ak
          } = Fk;
          dk.o.Hf("setDirectionArrow", {
            id: kk,
            position: Bk,
            style: Rk,
            text: Gk(tk),
            Xa: ak
          }, !0)
        }
      })), (0, yk.k)(gk.f, (kk => {
        const Fk = (0, ck.f)(gk.f, kk);
        Fk && dk.o.Hf("clearDirectionArrow", {
          id: Fk.id
        }, !0)
      })), (0, yk.k)(gk.n, (kk => {
        const Fk = (0, ck.f)(gk.n, kk);
        Fk && dk.o.Hf("flyingMiddleMessage", {
          content: Gk(Fk.Ga),
          Ta: Fk.Ta,
          ra: Fk.ra
        }, !0)
      })), (0, yk.k)(sk.Tb.WorldVariation, (kk => {
        const Fk = (0, ck.j)(kk);
        if ("string" === typeof Fk) {
          const kk = Fk === Hk.g ? null : {
            message: `Currently loaded as variation: ${Fk}`,
            type: "Warning"
          };
          dk.o.Hf("showPermanentBottomMessage", kk, !0)
        }
      })), (0, yk.k)(gk.I, (kk => {
        const Fk = (0, ck.f)(gk.I, kk);
        Fk && function(kk, Fk) {
          const {
            type: Bk,
            params: Rk
          } = (0, uk.i)(Fk), tk = {
            ...Rk
          };
          for (const ak of uk.e) tk[ak] && (tk[ak] = Gk(tk[ak]));
          Mk.b.queueQTE(kk, Bk, tk).getResult().then((Fk => {
            var Bk;
            "boolean" === typeof Fk && (null === (Bk = (0, Xk.g)()) || void 0 === Bk || Bk.send(Uk.b.QteResponse, {
              qteId: kk,
              qteResponse: Fk
            }))
          }))
        }(Fk.id, Fk.Hk)
      })), (0, yk.k)(gk.Y, (kk => {
        const Fk = (0, ck.f)(gk.Y, kk);
        "number" === typeof Fk && Mk.b.cancelQTE(Fk)
      })), (0, yk.d)((() => {
        Mk.b.reset(), dk.o.Hf("showPermanentBottomMessage", null, !0)
      })), (0, yk.g)((() => {
        Mk.b.reset()
      })), (0, yk.k)(sk.Tb.EditItemCraftingRecipes, (kk => {
        const Fk = (0, ck.j)(kk);
        (0, ck.e)(Fk) && dk.o.Hf("craftingRecipesEdited", {
          itemName: Fk.craftingRecipeItemName,
          recipesForItem: Fk.recipesForItem
        })
      })), (0, yk.k)(gk.V, (kk => {
        const Fk = (0, ck.f)(gk.V, kk);
        Fk && dk.o.Hf("craftingRecipesEdited", {
          itemName: Fk.St,
          recipesForItem: []
        })
      })))
    }
    var zk = Bk(22);
    const Pk = [{
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

    function hk(kk) {
      return ik.w.playerFlags(kk.api.apiView, 0)
    }
    const qk = {
        freeCamera: (0, Ak.c)((kk => () => {
          const Fk = kk.isSessionLive && 0 !== (hk(kk) & ik.Ed.FreeCamMoves),
            Bk = kk.freeCameraAllowed() && null === zk.c.get("scriptedCameraFacing");
          return Pk[(Bk ? 2 : 0) + (Fk ? 1 : 0)]
        }), Pk[0], (kk => (0, ak.t)(kk)))
      },
      Ck = {
        setFreeCameraMovesFly: kk => {
          var Fk;
          null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.setFreeCameraMovesFly(kk)
        }
      },
      Zk = {
        freeCameraPos: () => {
          const kk = (0, Xk.g)();
          return null !== kk && void 0 !== kk && kk.isSessionLive && kk.renderFrame.hasView && 0 !== (hk(kk) & ik.Ed.FreeCam) ? kk.renderFrame.cameraPosition : null
        }
      };
    var pk = Bk(38783);
    let Kk = !1,
      xk = !1;

    function jk() {
      const kk = (0, Xk.g)();
      if (null === kk || void 0 === kk || !kk.isSessionLive) return void(Kk = !1);
      const Fk = 0 !== (ik.w.playerFlags(kk.api.apiView, 0) & ik.Ed.FreeCam);
      Fk !== Kk && (Kk = Fk, (0, pk.c)(Fk))
    }
    var lk = Bk(291),
      nk = Bk(36708),
      Ik = Bk(1873);
    var Qk = Bk(40114),
      kF = Bk(40070);
    const FF = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let BF = "off";

    function RF(kk) {
      var Fk;
      return null === kk ? null : {
        label: null !== (Fk = (0, Qk.c)(kk, "interactionPrompt")) && void 0 !== Fk ? Fk : null
      }
    }
    const tF = new Map([
      [ik.yc.Open, {
        label: wk.d.open
      }],
      [ik.yc.Close, {
        label: wk.d.close
      }],
      [ik.yc.Milk, {
        label: wk.d.milk
      }],
      [ik.yc.Shear, {
        label: wk.d.shear
      }],
      [ik.yc.Tame, {
        label: wk.d.tame
      }],
      [ik.yc.Feed, {
        label: wk.d.feed
      }],
      [ik.yc.Ride, {
        label: wk.d.ride
      }]
    ]);
    class aF {
      constructor() {
        this.target = FF, this.Ts = ik._c, this.optionName = null, this.pickaxe = new wk.b
      }
      read(kk) {
        var Fk;
        const Bk = ik.w.targetBlockId(kk.api.apiView, 0);
        Bk !== this.Ts && (this.Ts = Bk, this.optionName = Bk === ik._c ? null : `${kk.tables.getMetaInfo(Bk).rootName}CrosshairText`);
        const Rk = null === this.optionName ? null : null !== (Fk = kk.tables.getClientOption(this.optionName)) && void 0 !== Fk ? Fk : null;
        this.pickaxe.update(function(kk, Fk) {
          var Bk, Rk, tk;
          if (0 === (ik.w.playerFlags(kk.api.apiView, 0) & ik.Ed.Breaking) || Fk === ik._c || 0 === Fk) return null;
          const {
            tables: ak
          } = kk;
          if (!0 === ak.getClientOption("creative")) return null;
          const Xk = ak.nameOfId(Fk),
            bk = null === (Bk = kk.items.Hb()) || void 0 === Bk ? void 0 : Bk.name,
            wk = null !== (Rk = ak.getItemStat(Xk, "harvestLevel")) && void 0 !== Rk ? Rk : 0;
          return (0, lk.Fc)({
            blockHarvestType: ak.getDefaultItemStat(Xk, "harvestType"),
            blockHarvestLevel: ak.getDefaultItemStat(Xk, "harvestLevel"),
            harvestLevel: wk,
            heldToolType: void 0 === bk ? void 0 : ak.getDefaultItemStat(bk, "harvests"),
            heldToolLevel: void 0 === bk ? void 0 : ak.getDefaultItemStat(bk, "level")
          }) && null !== (tk = nk.p[wk]) && void 0 !== tk ? tk : null
        }(kk, Bk)), kk.watchPromptPick(BF);
        const tk = "touch" === BF ? function(kk) {
          var Fk;
          const Bk = kk.interactLabel;
          return Bk === ik.yc.Entity ? RF(kk.promptEntity) : Bk === ik.yc.TameWith ? {
            label: (0, wk.w)(kk.tables.nameOfId(kk.interactIcon))
          } : null !== (Fk = tF.get(Bk)) && void 0 !== Fk ? Fk : null
        }(kk) : RF(kk.promptEntity);
        return this.target = (0, Ik.o)(this.target, {
          interactPrompt: tk,
          blockText: Rk,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let XF = null;
    const bF = {
      current: () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = XF) || void 0 === Fk ? void 0 : Fk.target) && void 0 !== kk ? kk : FF
      },
      watch: kk => {
        const Fk = new aF;
        XF = Fk;
        const Bk = (0, Ak.f)((Bk => {
          let Rk = Fk.read(Bk);
          kk(Rk);
          const tk = (0, ak.x)((() => {
            const tk = Fk.read(Bk);
            tk !== Rk && (Rk = tk, kk(tk))
          }));
          return () => {
            tk(), Bk.watchPromptPick("off")
          }
        }));
        return () => {
          Bk(), XF === Fk && (XF = null)
        }
      }
    };
    let wF = 0,
      dF = 0;
    const sF = {
        health: wk.q,
        aura: wk.g,
        hotbar: kF.d.states.hotbar,
        heldItemAim: kF.d.states.heldItemAim,
        crouching: (0, Ak.c)((kk => function(kk) {
          const Fk = () => 0 !== (ik.w.playerFlags(kk.apiView, 0) & ik.Ed.Crouching);
          return {
            current: Fk,
            watch(kk) {
              let Bk = Fk();
              return (0, ak.t)((() => {
                const Rk = Fk();
                Rk !== Bk && (Bk = Rk, kk(Rk))
              }))
            }
          }
        }(kk.api).current), !1, (kk => (0, ak.t)(kk))),
        flight: (0, Ak.c)((kk => () => function(kk) {
          const Fk = ik.w.playerFlags(kk.apiView, 0);
          return (0, wk.n)(0 !== (Fk & ik.Ed.CanFly), 0 !== (Fk & ik.Ed.Flying))
        }(kk.api)), (0, wk.n)(!1, !1), (kk => (0, ak.t)(kk))),
        gliderBoostFuel: (0, Ak.c)((kk => () => ik.w.gliderBoostFuel(kk.api.apiView, 0)), 0, (kk => (0, ak.t)(kk))),
        crosshairTarget: bF
      },
      VF = {
        hotbarSlotRequested: kF.d.events.hotbarSlotRequested,
        hotbarScrolled: kF.d.events.hotbarScrolled,
        numberKeyPressed: kF.d.events.numberKeyPressed,
        shotDamageToShow: (0, wk.u)((kk => !0 === (0, Qk.c)(kk, "showDamageAmounts")))
      },
      JF = {
        selectHotbarSlot: kF.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: kk => {
          BF = kk
        }
      },
      AF = {
        momentumFrac: function() {
          var kk, Fk, Bk;
          const Rk = (0, Xk.g)(),
            tk = performance.now(),
            ak = null === Rk || void 0 === Rk || null === (kk = Rk.items.Hb()) || void 0 === kk || null === (Fk = kk.attributes) || void 0 === Fk || null === (Bk = Fk.customAttributes) || void 0 === Bk ? void 0 : Bk.enchantments;
          return wF = null !== Rk && null !== ak && void 0 !== ak && ak.Momentum ? 0 !== (ik.w.playerFlags(Rk.api.apiView, 0) & ik.Ed.Breaking) ? Math.max(0, ik.w.momentumFrac(Rk.api.apiView, 0)) : Math.max(0, wF - (tk - dF) / 1500) : 0, dF = tk, wF
        }
      };
    var eF = Bk(40007),
      yF = Bk(1192),
      fF = Bk(36232),
      mF = Bk(8471),
      WF = Bk(1585),
      vF = Bk(2303),
      iF = Bk(4533);
    let YF = !1;

    function oF(kk) {
      YF = kk
    }

    function LF() {
      "inGame" !== zk.c.get("gameState") || (0, WF.v)() || dk.o.Hf("ctrlCrouchWithoutFullscreen")
    }
    let OF = !1;
    const EF = {
        OpenEmoteWheel: () => {
          oF(!0), OF = !0, queueMicrotask((() => {
            OF && (OF = !1, dk.o.Hf("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          dk.o.Hf("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, fF.d)() || dk.o.Hf("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, fF.d)() || dk.o.Hf("XKeyPressed")
        },
        CtrlCrouch: LF,
        "primary-fire": () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      SF = {
        OpenEmoteWheel: () => {
          oF(!1), OF ? (OF = !1, (0, mF.b)() || dk.o.Hf("requestEmoteWheelHoldOpen")) : dk.o.Hf("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: LF,
        "primary-fire": () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          dk.o.Hf("mouseState", {
            Ks: yF.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let NF = !1;

    function HF() {
      NF || (NF = !0, (0, iF.l)((kk => {
        if ((0, tk.c)()) return;
        const Fk = (0, iF.h)(kk) ? "primary-fire" : kk.action;
        var Bk;
        if (kk.down) {
          if (0 === (kk.flags & vF.d.Synthetic)) {
            var Rk;
            null === (Rk = EF[Fk]) || void 0 === Rk || Rk.call(EF)
          }
        } else null === (Bk = SF[Fk]) || void 0 === Bk || Bk.call(SF)
      })))
    }
    var uF = Bk(279),
      MF = Bk(98),
      gF = Bk(42),
      UF = Bk(40122),
      cF = Bk(1267),
      GF = Bk(38651);
    let TF = !1;
    const rF = {
      sendCodeCollab(kk) {
        var Fk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.CodeCollab, (0, Uk.n)(kk), (0, GF.f)(kk))
      }
    };
    let DF = null,
      zF = !1,
      PF = null;

    function hF() {
      return "inGame" === zk.c.get("gameState") && !(0, fF.d)()
    }
    const qF = {
        OpenInventory: kk => {
          (0, WF.B)(kk, "inventory", (0, eF.p)())
        },
        OpenShop: kk => {
          DF && hF() && (0, WF.x)(kk, uF.p.SHOP, !DF.shopIsEmpty(vk.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: kk => {
          hF() && (0, WF.x)(kk, uF.p.LOBBY_LEADERBOARD, !!vk.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: kk => {
          var Fk;
          const Bk = null === (Fk = DF) || void 0 === Fk ? void 0 : Fk.getClientGameMapKey();
          Bk ? (0, WF.F)(kk, !0, Bk) : (0, WF.B)(kk, "retentionFeatures", !(!vk.b.get("_tasks") && !vk.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: kk => {
          (0, WF.B)(kk, "inviteLink", MF.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: kk => {
          hF() && function(kk) {
            var Fk;
            const Bk = (0, Xk.g)(),
              Rk = null !== Bk && void 0 !== Bk && Bk.isSessionLive ? Bk.api : null,
              tk = Rk ? Rk.rW(Rk.localId) : null,
              ak = null !== (Fk = null === tk || void 0 === tk ? void 0 : tk.map((kk => Math.floor(kk)))) && void 0 !== Fk ? Fk : null;
            (0, WF.F)(kk, null !== ak && (0, GF.b)((0, cF.e)()), (() => {
              dk.o.Hf("EditLobbyCode", ak)
            }))
          }(kk)
        },
        HideUi: () => {
          dk.o.Hf("showUi", !1)
        }
      },
      CF = {
        HideUi: () => {
          dk.o.Hf("showUi", !0)
        }
      };

    function ZF() {
      zF || (zF = !0, Bk.e(151).then((() => Bk(42018))).then((kk => {
        DF = kk
      }), (kk => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", kk)
      })), (0, UF.w)((kk => {
        kk || !(0, UF.h)() || (0, MF.isMobile)() || !gF.i.getItem("disableFullscreen") || (0, WF.s)() || zk.c.set({
          openEverythingMenuName: uF.p.SETTINGS
        })
      })), (0, iF.l)((kk => {
        let {
          action: Fk,
          down: Bk,
          press: Rk
        } = kk;
        var ak, Xk;
        (0, tk.c)() || (Bk ? null === (ak = qF[Fk]) || void 0 === ak || ak.call(qF, function(kk) {
          var Fk;
          if (0 === kk || (null === (Fk = PF) || void 0 === Fk ? void 0 : Fk.press) !== kk) {
            const Fk = {
              press: kk,
              event: new Event("inputAction")
            };
            PF = Fk, queueMicrotask((() => {
              PF === Fk && (PF = null)
            }))
          }
          return PF.event
        }(Rk)) : null === (Xk = CF[Fk]) || void 0 === Xk || Xk.call(CF))
      })))
    }
    var pF = Bk(38617),
      KF = Bk(38640),
      xF = Bk(38624);
    const jF = {
      completeTask(kk) {
        var Fk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.CompleteTask, (0, Uk.p)(kk))
      },
      setServerCookie(kk) {
        var Fk;
        let {
          key: Bk,
          value: Rk
        } = kk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.GeneralCookieSet, (0, Uk.v)({
          dX: Bk,
          sX: Rk
        }))
      },
      answerUiRequest(kk) {
        var Fk;
        let {
          id: Bk,
          eX: Rk
        } = kk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.UiRequestResp, (0, Uk.R)({
          Mb: Bk,
          gb: Rk,
          Ub: 5
        }))
      },
      chooseRewardedAd(kk) {
        var Fk;
        let {
          id: Bk,
          eX: Rk
        } = kk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.UiRequestResponded, (0, Uk.O)({
          id: Bk,
          eX: Rk
        }))
      },
      requestLeaderboard(kk) {
        var Fk;
        let {
          category: Bk,
          timeframe: Rk,
          seeTop: tk
        } = kk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.LeaderboardRequest, {
          category: Bk,
          timeframe: Rk,
          seeTop: tk
        })
      }
    };
    let lF = !1;
    const nF = Wk.h.Qm / 2,
      IF = [nF, -nF, -nF, -nF, nF, nF, -nF, nF],
      QF = [0, 0, 0];

    function kB(kk, Fk, Bk) {
      for (let Rk = 0; Rk < kk.length; Rk += 2)
        if (kk[Rk] === Fk && kk[Rk + 1] === Bk) return !0;
      return !1
    }
    const FB = {
      blocksStandingOn: function() {
        const kk = (0, Xk.g)();
        if (null === kk) return [];
        const {
          api: Fk,
          chunks: Bk,
          tables: Rk
        } = kk;
        if (!Fk.readPosition(Fk.localId, QF)) return [];
        const [tk, ak, bk] = QF, wk = Math.ceil(ak) - 1, dk = [], sk = [];
        for (let Xk = 0; Xk < IF.length; Xk += 2) {
          const kk = tk + IF[Xk],
            Fk = bk + IF[Xk + 1];
          if (Number.isInteger(kk) || Number.isInteger(Fk)) continue;
          const ak = Math.floor(kk),
            Vk = Math.floor(Fk);
          if (kB(sk, ak, Vk)) continue;
          const Jk = Bk.Ts(ak, wk, Vk);
          Rk.isSolidBlockId(Jk) && (sk.push(ak, Vk), dk.push(Rk.nameOfId(Jk)))
        }
        return dk
      },
      dropAhead: function() {
        const kk = (0, Xk.g)();
        return null !== kk && 0 !== (ik.w.playerFlags(kk.api.apiView, 0) & ik.Ed.DropAhead)
      }
    };
    var BB = Bk(36621),
      RB = Bk(38719),
      tB = Bk(1300),
      aB = Bk(40077);
    const XB = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      bB = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function wB() {
      const kk = new Set;
      return {
        add: Fk => (kk.add(Fk), () => {
          kk.delete(Fk)
        }),
        fire() {
          for (const Fk of kk) Fk()
        }
      }
    }
    const dB = Object.freeze([]);

    function sB(kk, Fk) {
      let Bk, {
        rereads: Rk,
        followLocalId: tk
      } = Fk;
      const Xk = () => (Bk = (0, Ik.o)(Bk, kk()), Bk);
      return {
        current: Xk,
        watch(kk) {
          const Fk = (0, ek.e)((Fk => {
            Rk(Fk) && kk(Xk())
          }));
          if (!tk) return Fk;
          let Bk = (0, Ak.e)();
          const bk = (0, ak.x)((() => {
            const Fk = (0, Ak.e)();
            Fk !== Bk && (Bk = Fk, kk(Xk()))
          }));
          return () => {
            Fk(), bk()
          }
        }
      }
    }
    const VB = {
        players: sB((function() {
          const kk = ek.g.ids(),
            Fk = {};
          for (const ak of kk) {
            var Bk, Rk, tk;
            Fk[ak] = {
              name: null !== (Bk = ek.g.getName(ak)) && void 0 !== Bk ? Bk : null,
              ranks: null !== (Rk = ek.g.getSetting(ak, "ranks")) && void 0 !== Rk ? Rk : dB,
              cosmetics: null !== (tk = (0, ek.i)(ak)) && void 0 !== tk ? tk : null
            }
          }
          return {
            ids: kk,
            byId: Fk,
            localId: (0, Ak.e)()
          }
        }), {
          rereads: kk => "roster" !== kk.kind || kk.members || kk.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: sB((function() {
          const kk = {};
          for (const tk of ek.g.ids()) {
            var Fk, Bk, Rk;
            kk[tk] = {
              colour: null !== (Fk = ek.g.getSetting(tk, "colorInLobbyLeaderboard")) && void 0 !== Fk ? Fk : null,
              values: null !== (Bk = ek.g.getSetting(tk, "lobbyLeaderboardValues")) && void 0 !== Bk ? Bk : null,
              tags: null !== (Rk = ek.g.getSetting(tk, "lobbyLeaderboardTags")) && void 0 !== Rk ? Rk : null
            }
          }
          return kk
        }), {
          rereads: function(kk) {
            if ("roster" !== kk.kind) return "reset" === kk.kind;
            const {
              members: Fk,
              settings: Bk
            } = kk;
            return Fk || Bk.has("colorInLobbyLeaderboard") || Bk.has("lobbyLeaderboardValues") || Bk.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      JB = {
        cosmeticsUpdated: {
          watch: kk => (0, ek.e)((Fk => {
            if ("cosmetics" !== Fk.kind) return;
            const Bk = (0, Ak.e)();
            kk(Fk.updates.map((kk => {
              let {
                PB: Fk,
                hB: Rk,
                qB: tk
              } = kk;
              return {
                local: Fk === Bk,
                hB: Rk,
                qB: tk
              }
            })))
          }))
        }
      };
    var AB = Bk(2728),
      eB = Bk(1650),
      yB = Bk(633),
      fB = Bk(40131);
    let mB = !1,
      WB = null;
    const vB = {
      setShopOpen(kk) {
        var Fk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.ShopMenuChanged, (0, Uk.I)(kk))
      },
      buyShopItem(kk) {
        var Fk;
        let {
          categoryKey: Bk,
          itemKey: Rk,
          userInput: tk
        } = kk;
        null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.send(Uk.b.ItemBought, {
          categoryKey: Bk,
          itemKey: Rk,
          shopVersion: vk.b.get("_shopVersion"),
          userInput: tk
        })
      }
    };
    let iB = !1;
    var YB = Bk(4546);
    const oB = vF.A.LookFrozen | vF.A.ClicksSuppressed;

    function LB(kk, Fk) {
      var Bk;
      null !== (Bk = (0, Xk.g)()) && void 0 !== Bk && Bk.send(kk, Fk) || console.warn(`[bloxd-wasm-client] message ${kk} not sent: no live game or the core's command ring is full`)
    }(0, yk.k)(gk.pb, (kk => {
      const Fk = (0, ck.f)(gk.pb, kk);
      void 0 !== Fk && dk.o.Hf("setDiscordReportKey", Fk)
    }));
    const OB = {
      ignorePlayer(kk) {
        LB(Uk.b.IgnoreUser, (0, Uk.x)({
          GX: kk
        }))
      },
      reportPlayer(kk) {
        let {
          playerId: Fk,
          chatMsgId: Bk,
          aX: Rk,
          details: tk
        } = kk;
        LB(Uk.b.UserReport, (0, Uk.Z)({
          AV: Fk,
          eV: Bk,
          aX: Rk,
          XX: tk
        }))
      },
      reportWorldCodeChat(kk) {
        let {
          chatMsgId: Fk,
          aX: Bk,
          details: Rk
        } = kk;
        LB(Uk.b.UserReport, (0, Uk.Z)({
          AV: "",
          eV: Fk,
          aX: Bk,
          XX: Rk
        }))
      },
      requestDiscordReportKey(kk) {
        LB(Uk.b.ReqDiscordReportKey, (0, Uk.E)(kk))
      },
      reportLobbyOrGame(kk) {
        let {
          target: Fk,
          aX: Bk,
          details: Rk
        } = kk;
        "customGame" === Fk ? LB(Uk.b.CustomGameReport, (0, Uk.r)({
          aX: Bk,
          XX: Rk
        })) : LB(Uk.b.LobbyReport, (0, Uk.y)({
          aX: Bk,
          XX: Rk
        }))
      },
      updateMyCosmetic(kk) {
        LB(Uk.b.UpdateMyCosmetic, (0, Uk.X)(kk))
      },
      holdEmoteWheel(kk) {
        !kk || YF ? (0, YB.i)(oB, kk ? oB : 0) : dk.o.Hf("requestEmoteWheelHoldRelease")
      }
    };
    var EB = Bk(40137),
      SB = Bk(9095),
      NB = Bk(39186);
    const HB = [0, 0, 0],
      uB = [0, 0, 0],
      MB = [0, 0, 0],
      gB = {
        blockAtViewPoint(kk) {
          let {
            x: Fk,
            y: Bk
          } = kk;
          const Rk = (0, Xk.g)();
          if (null === Rk || void 0 === Rk || !Rk.renderFrame.hasView) return null;
          const {
            renderFrame: tk,
            clientApi: ak,
            api: bk
          } = Rk;
          let wk = 0;
          return (0, NB.h)(((kk, Fk, Bk) => (wk = ak.getBlockId(kk, Fk, Bk), 0 !== wk)), tk.cameraPosition, (0, NB.i)((kk => ik.w.viewProj(bk.apiView, 0, kk)), Fk, Bk, HB), NB.d, uB, MB) ? {
            pos: [uB[0], uB[1], uB[2]],
            normal: [MB[0], MB[1], MB[2]],
            name: (0, SB.h)(wk)
          } : null
        }
      },
      UB = {
        setBlockHighlight(kk) {
          var Fk;
          null === (Fk = (0, Xk.g)()) || void 0 === Fk || Fk.setBlockHighlight(kk)
        }
      };
    var cB = Bk(1858),
      GB = Bk(40141),
      TB = Bk(40147),
      rB = Bk(40150);
    var DB = Bk(594),
      zB = Bk(39190);

    function PB(kk) {
      if (null === kk || void 0 === kk || !kk.isCoreRunning) return null;
      const {
        api: Fk,
        chunks: Bk,
        items: Rk,
        tables: tk
      } = kk;
      return {
        playerFeet() {
          const kk = Fk.rW(Fk.localId);
          return null !== kk && void 0 !== kk && kk.every(Number.isFinite) ? kk : null
        },
        chunkBlocks: kk => Bk.isLoaded(kk[0], kk[1], kk[2]) ? (kk, Fk, Rk) => Bk.Ts(kk, Fk, Rk) : null,
        blockName: kk => tk.nameOfId(kk),
        inventory: () => ({
          slots: Rk.playerItems().map((kk => kk ? {
            name: kk.name,
            amount: kk.amount
          } : null)),
          heldSlot: Rk.selectedSlot
        }),
        nearby() {
          const Bk = [];
          for (let tk = 0; tk < Fk.idStr.length; tk++) {
            var Rk;
            const ak = Fk.idStr[tk],
              Xk = Fk.serverIds[tk],
              bk = Fk.kinds[tk];
            if (null === ak || Fk.isLocal(Xk) || bk >>> ik.e !== ik.t.Lifeform) continue;
            const wk = Fk.rW(Xk),
              dk = DB.i[bk & ik.g];
            wk && void 0 !== dk && Bk.push({
              kind: "Player" === dk ? "player" : dk,
              name: null !== (Rk = kk.clientApi.getEntityName(ak)) && void 0 !== Rk ? Rk : null,
              position: wk
            })
          }
          return Bk
        },
        droppedItems() {
          let kk = 0;
          for (let Bk = 0; Bk < Fk.idStr.length; Bk++) null !== Fk.idStr[Bk] && Fk.kinds[Bk] >>> ik.e === ik.t.Item && kk++;
          return kk
        }
      }
    }
    const hB = {
        worldCodeAiChunk: kk => Promise.resolve((0, zB.e)(PB((0, Xk.g)()), kk)),
        worldCodeAiGameState: () => Promise.resolve((0, zB.f)(PB((0, Xk.g)())))
      },
      qB = function(kk) {
        const Fk = wB(),
          Rk = wB(),
          tk = new Set,
          ak = new Set,
          Xk = () => {
            var Fk, Bk;
            return null !== (Fk = null === (Bk = kk.runtime()) || void 0 === Bk ? void 0 : Bk.currentViewer) && void 0 !== Fk ? Fk : null
          };
        let bk = null,
          wk = null;
        const sk = (kk, Fk) => ({
            current: kk,
            watch(Bk) {
              let Rk = kk();
              return Fk.add((() => {
                const Fk = kk();
                Fk !== Rk && (Rk = Fk, Bk(Fk))
              }))
            }
          }),
          Jk = kk => ({
            watch: Fk => (kk.add(Fk), () => {
              kk.delete(Fk)
            })
          }),
          Ak = kk => {
            const Fk = Xk(),
              Bk = null === Fk || void 0 === Fk ? void 0 : Fk.view;
            Fk && Bk && Fk.seek(Math.max(0, Math.min(Bk.totalTicks - 1, Bk.yJ + kk * Vk.Pc)))
          },
          ek = {
            replay: sk((() => {
              var kk;
              const Fk = Xk(),
                Bk = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
              return null === Fk || null === Bk || Bk.state === Vk.Cc.None ? (bk = null, null) : (bk = (0, Ik.o)(bk, {
                id: Fk.id,
                yJ: Bk.yJ,
                totalTicks: Bk.totalTicks,
                kN: Vk.Pc,
                playing: Bk.state === Vk.Cc.Playing,
                speed: Bk.speed,
                cameraMode: Bk.cameraMode,
                freecam: "freecam" === Bk.cameraMode
              }), bk)
            }), Fk),
            replayEdits: sk((() => {
              var kk;
              const Fk = Xk(),
                Bk = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
              return null === Fk || null === Bk || Bk.state === Vk.Cc.None ? (wk = null, null) : (wk = (0, Ik.o)(wk, {
                cameraKeyframes: [...Fk.keyframes],
                playbackMark: Bk.mark,
                fileName: Fk.fileName,
                unsavedChanges: Fk.unsavedChanges,
                suggestSaveAs: Fk.suggestSaveAs
              }), wk)
            }), Fk),
            replayRecorder: sk((() => {
              var Fk, Bk;
              return null !== (Fk = null === (Bk = kk.runtime()) || void 0 === Bk ? void 0 : Bk.recorder.current) && void 0 !== Fk ? Fk : aB.d.states.replayRecorder.current()
            }), Rk),
            replayVideoExporting: {
              current: RB.b,
              watch: kk => (0, dk.p)("replayViewer|videoExportChanged", (() => {
                kk((0, RB.b)())
              }))
            }
          },
          yk = {
            replayUiActionRequested: Jk(ak),
            replayViewerRequested: Jk(tk)
          },
          fk = kk => {
            for (const Fk of tk) Fk(kk)
          },
          mk = () => {
            var Rk;
            !0 === (null === (Rk = Xk()) || void 0 === Rk ? void 0 : Rk.isOpen) && Promise.all([Bk.e(94), Bk.e(63)]).then((() => Bk(42020))).then((Bk => {
              let {
                startWasmReplayVideoExport: Rk
              } = Bk;
              return Rk({
                viewer: Xk,
                canvas: () => {
                  var Fk, Bk;
                  return null !== (Fk = null === (Bk = kk.canvas) || void 0 === Bk ? void 0 : Bk.call(kk)) && void 0 !== Fk ? Fk : null
                },
                watchViewer: Fk.add,
                requestViewer: fk
              })
            }), (kk => {
              console.error("Couldn't load the video export", kk), tB.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((kk => {
              console.error("The video export failed", kk)
            }))
          },
          Wk = {
            replayAction(kk) {
              if ((0, RB.b)()) return;
              const Fk = Xk();
              switch (kk) {
                case "replaySkipBack":
                  Ak(-1);
                  break;
                case "replaySkipForward":
                  Ak(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Fk && void 0 !== Fk && Fk.view && Fk.setSpeed((0, BB.j)(Fk.view.speed, "replaySpeedUp" === kk ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Fk || void 0 === Fk || Fk.addKeyframe()
              }
            },
            setReplayPlaying(kk) {
              var Fk, Bk;
              (0, RB.b)() || (kk ? null === (Fk = Xk()) || void 0 === Fk || Fk.play() : null === (Bk = Xk()) || void 0 === Bk || Bk.pause())
            },
            seekReplay(kk) {
              var Fk;
              let {
                yJ: Bk,
                ignorePlaybackMark: Rk
              } = kk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.seek(Bk, null !== Rk && void 0 !== Rk && Rk)
            },
            setReplayCameraMode(kk) {
              var Fk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.setCameraMode(kk)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(kk) {
              var Fk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.setKeyframe(kk)
            },
            moveReplayCameraKeyframe(kk) {
              var Fk;
              let {
                from: Bk,
                to: Rk
              } = kk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.moveKeyframe(Bk, Rk)
            },
            deleteReplayCameraKeyframes(kk) {
              var Fk;
              let {
                start: Bk,
                end: Rk
              } = kk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.deleteKeyframes(Bk, Rk)
            },
            setReplayPlaybackMark(kk) {
              var Fk;
              null === (Fk = Xk()) || void 0 === Fk || Fk.setMark(kk)
            },
            cropReplay(kk) {
              var Fk, Bk;
              let {
                start: Rk,
                end: tk
              } = kk;
              return !(0, RB.b)() && (null !== (Fk = null === (Bk = Xk()) || void 0 === Bk ? void 0 : Bk.crop(Rk, tk)) && void 0 !== Fk && Fk)
            },
            holdReplayForShaderPackFailure(kk) {
              const Fk = Xk();
              Fk && (Fk.holdForShaderPackFailure(), function(kk) {
                Bk.e(129).then((() => Bk(38817))).then((Fk => {
                  let {
                    shaderPackPage: Bk
                  } = Fk;
                  Bk.block(kk)
                })).catch((kk => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", kk)
                }))
              }(kk))
            },
            exportReplayVideo() {
              mk()
            },
            toggleRecording() {
              var Fk;
              null === (Fk = kk.runtime()) || void 0 === Fk || Fk.recorder.toggleRecording()
            },
            saveClip() {
              var Fk;
              null === (Fk = kk.runtime()) || void 0 === Fk || Fk.recorder.saveClip()
            },
            setRecorderPrefs(Fk) {
              var Bk;
              let {
                clipping: Rk,
                clipSeconds: tk
              } = Fk;
              null === (Bk = kk.runtime()) || void 0 === Bk || Bk.recorder.setPrefs(Rk, tk)
            },
            setReplayViewerOpen(Fk) {
              var Bk;
              (0, fF.f)(Fk) && (null === (Bk = kk.runtime()) || void 0 === Bk || Bk.recorder.viewerShown(Fk))
            },
            recordFlyingMiddleText(Fk) {
              var Bk;
              let {
                content: Rk,
                Ta: tk,
                angle: ak,
                ra: Xk
              } = Fk;
              null === (Bk = kk.runtime()) || void 0 === Bk || Bk.recorder.recordFlyingText(JSON.stringify(Rk), tk, ak, Xk)
            },
            dragReplayCamera(Fk) {
              var Bk;
              let {
                dx: Rk,
                dy: tk
              } = Fk;
              null === (Bk = kk.freecam()) || void 0 === Bk || Bk.drag(Rk, tk)
            },
            moveReplayFreecam(Fk) {
              var Bk;
              null === (Bk = kk.freecam()) || void 0 === Bk || Bk.move(Fk)
            },
            holdReplayFreecamVertical(Fk) {
              var Bk;
              let {
                action: Rk,
                Hb: tk
              } = Fk;
              null === (Bk = kk.freecam()) || void 0 === Bk || Bk.holdVertical(Rk, tk)
            }
          },
          vk = kk => {
            var Fk;
            const Bk = Xk(),
              Rk = null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.view) && void 0 !== Fk ? Fk : null;
            XB.has(kk) ? (kk => {
              for (const Fk of ak) Fk(kk)
            })(kk) : bB.has(kk) ? Wk.replayAction(kk) : "replayPlayPause" === kk ? Bk && Rk && Rk.state !== Vk.Cc.None && Wk.setReplayPlaying(Rk.state !== Vk.Cc.Playing) : "replayChangeCameraMode" === kk ? null === Bk || void 0 === Bk || Bk.cycleCameraMode() : "replayExit" === kk ? !0 === (null === Bk || void 0 === Bk ? void 0 : Bk.inPlayback) && (0, cF.o)("/") : "replayExportVideo" === kk && mk()
          };
        let ik = !1;
        return {
          states: ek,
          events: yk,
          commands: Wk,
          lookups: {
            replayCamera() {
              var Fk, Bk, Rk;
              return !0 !== (null === (Fk = Xk()) || void 0 === Fk ? void 0 : Fk.isOpen) ? null : null !== (Bk = null === (Rk = kk.cameraView) || void 0 === Rk ? void 0 : Rk.call(kk)) && void 0 !== Bk ? Bk : null
            },
            leaveGameReloadsPage() {
              var kk;
              return !0 === (null === (kk = Xk()) || void 0 === kk ? void 0 : kk.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var kk;
              const Bk = !0 === (null === (kk = Xk()) || void 0 === kk ? void 0 : kk.inPlayback);
              Bk !== ik && (ik = Bk, dk.o.Hf("connectedGameChanged")), Fk.fire()
            },
            recorderChanged: Rk.fire,
            keyDown: kk => {
              var Fk;
              switch (kk) {
                case "recordGame":
                  return void Wk.toggleRecording();
                case "recordClip":
                  return void((0, fF.d)() || Wk.saveClip())
              }(0, RB.b)() || ("replayViewerOpen" !== kk ? kk.startsWith("replay") && ((0, fF.d)() || !0 === (null === (Fk = Xk()) || void 0 === Fk ? void 0 : Fk.inPlayback)) && vk(kk) : fk("toggle"))
            }
          }
        }
      }({
        runtime: tk.i,
        cameraView: () => {
          var kk;
          const Fk = null === (kk = (0, Xk.g)()) || void 0 === kk ? void 0 : kk.renderFrame;
          if (!Fk) return null;
          const [Bk, Rk, tk] = Fk.cameraPosition, [ak, bk, wk] = Fk.cameraDirection;
          return {
            position: [Bk, Rk, tk],
            direction: [ak, bk, wk]
          }
        },
        canvas: () => {
          var kk, Fk, Bk;
          return null !== (kk = null === (Fk = (Bk = (0, ak.J)()).canvas) || void 0 === Fk ? void 0 : Fk.call(Bk)) && void 0 !== kk ? kk : null
        },
        freecam: tk.e
      }),
      CB = {
        states: {
          ...sF,
          ...eF.m,
          ...qB.states,
          ...VB,
          ...qk
        },
        events: {
          ...VF,
          ...fk,
          ...eF.g,
          ...Nk.e,
          ...EB.j,
          ...qB.events,
          ...JB,
          ...Sk.g
        },
        commands: {
          ...Ek,
          ...JF,
          ...mk,
          ...eF.e,
          ...jF,
          ...OB,
          ...Sk.f,
          ...rF,
          ...qB.commands,
          ...vB,
          ...Ck,
          ...UB
        },
        queries: {
          ...eF.k,
          ...hB
        },
        lookups: {
          ...AF,
          ...Tk,
          ...EB.l,
          ...qB.lookups,
          ...Ok,
          ...FB,
          ...gB,
          ...Zk
        }
      };

    function ZB() {
      (0, bk.e)(yk.n), (0, tk.k)(qB.feed), (0, Nk.i)(), lF || (lF = !0, (0, yk.k)(gk.k, (kk => {
        const Fk = (0, ck.f)(gk.k, kk);
        "string" === typeof Fk && Promise.resolve().then((() => Bk(3449))).then((kk => {
          let {
            onCosmeticPackGranted: Bk
          } = kk;
          Bk(Fk)
        }))
      })), (0, yk.k)(gk.ib, (kk => {
        const Fk = (0, ck.f)(gk.ib, kk);
        "number" === typeof Fk && dk.o.Hf("serverUpdating", Date.now() + Fk, !0)
      })), (0, yk.k)(gk.G, (kk => {
        const Fk = (0, ck.f)(gk.G, kk);
        if ((0, ck.e)(Fk)) {
          const {
            kk: kk,
            Fk: Bk
          } = Fk;
          (0, KF.e)({
            kk: "string" === typeof kk ? kk : null,
            Fk: "string" === typeof Bk ? Bk : null
          })
        }
      })), (0, yk.k)(sk.Tb.NewUiRequest, (kk => {
        const Fk = (0, ck.j)(kk);
        (0, ck.e)(Fk) && "number" === typeof Fk.id && (0, ck.e)(Fk.clientParameters) && (0, xF.f)(Fk.id, Fk.clientParameters)
      })), (0, yk.k)(gk.ab, (kk => {
        const Fk = (0, ck.f)(gk.ab, kk);
        "number" === typeof Fk && (0, xF.j)(Fk)
      })), (0, yk.g)(xF.d), (0, yk.k)(sk.Tb.UiRequestPopup, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk) && "number" === typeof Fk.id && "string" === typeof Fk.text) {
          const kk = Fk.id;
          (0, xF.n)(kk, Fk.text, (Fk => {
            jF.answerUiRequest({
              id: kk,
              eX: Fk
            })
          }))
        }
      })), (0, yk.k)(sk.Tb.TopRightHelper, (kk => {
        const Fk = (0, ck.j)(kk);
        void 0 !== Fk && dk.o.Hf("TopRightHelper", Fk, !0)
      })), (0, yk.k)(sk.Tb.TaskProgress, (kk => {
        const Fk = (0, ck.j)(kk);
        (0, ck.e)(Fk) && "string" === typeof Fk.taskId && "number" === typeof Fk.progress && (0, pF.e)({
          taskId: Fk.taskId,
          progress: Fk.progress
        })
      }))), iB || (iB = !0, (0, yk.k)(gk.p, (kk => {
        const Fk = (0, ck.f)(gk.p, kk);
        (0, ck.e)(Fk) && dk.o.Hf("showShopFromServer", {
          toggle: Fk.AF,
          eF: Fk.eF
        }, !0)
      })), (0, yk.k)(sk.Tb.OverShopInfo, (kk => {
        const Fk = (0, ck.j)(kk);
        (0, ck.e)(Fk) && dk.o.Hf("overShopInfo", Fk.info, !0)
      })), (0, yk.k)(sk.Tb.ShowShopTutorial, (() => {
        dk.o.Hf("showShopTutorial", null, !0)
      }))), mB || (mB = !0, (0, yk.d)((() => {
        var kk;
        (0, AB.C)(), null === (kk = WB) || void 0 === kk || kk(), WB = (0, yk.b)() ? (0, yB.i)(yk.b) : null
      })), (0, yk.k)(sk.Tb.SetCookie, (kk => {
        const Fk = (0, ck.j)(kk),
          Bk = (0, cF.e)().gameNameWithVariation;
        (0, ck.e)(Fk) && "string" === typeof Fk.key && null !== Bk && (0, eB.setCookie)(Bk, Fk.key, Fk.value)
      })), (0, yk.k)(sk.Tb.LeaveValues, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk) && "string" === typeof Fk.leaveEventType) {
          const {
            leaveEventType: kk,
            category: Bk,
            subCategory: Rk,
            value: tk
          } = Fk;
          (0, AB.I)({
            leaveEventType: kk,
            category: Bk,
            subCategory: Rk,
            value: tk
          })
        }
      })), (0, yk.k)(sk.Tb.CustomAnalyticsEvent, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk) && "string" === typeof Fk.cat1) {
          const {
            cat1: kk,
            cat2: Bk,
            cat3: Rk,
            value: tk
          } = Fk;
          (0, AB.r)({
            cat1: kk,
            cat2: Bk,
            cat3: Rk,
            value: tk
          })
        }
      })), (0, yk.k)(sk.Tb.ProgressionEvent, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk)) {
          const {
            type: kk,
            location1: Bk,
            location2: Rk,
            location3: tk,
            score: ak
          } = Fk;
          (0, AB.v)({
            type: kk,
            location1: Bk,
            location2: Rk,
            location3: tk,
            score: ak
          })
        }
      })), (0, yk.k)(sk.Tb.ResourceEvent, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk)) {
          const {
            type: kk,
            resourceType: Bk,
            amount: Rk,
            category: tk,
            itemName: ak
          } = Fk;
          (0, AB.z)({
            type: kk,
            resourceType: Bk,
            amount: Rk,
            category: tk,
            itemName: ak
          })
        }
      })), (0, yk.k)(sk.Tb.LeaderboardResponse, (kk => {
        const Fk = (0, ck.j)(kk);
        if ((0, ck.e)(Fk)) {
          const {
            category: kk,
            timeframe: Bk,
            data: Rk
          } = Fk;
          dk.o.Hf("leaderboardResponse", {
            category: kk,
            timeframe: Bk,
            data: Rk
          })
        }
      })), (0, yk.k)(gk.x, (kk => {
        const Fk = (0, ck.f)(gk.x, kk);
        "string" === typeof Fk && (0, fB.b)(kk.conn, Fk)
      })), (0, yk.k)(gk.z, (kk => {
        const Fk = (0, ck.f)(gk.z, kk);
        "string" === typeof Fk && console.error(`[logErrorToConsole]: ${Fk}`)
      }))), Dk(), (0, EB.e)(), TF || (TF = !0, (0, yk.k)(gk.g, (kk => {
        const Fk = (0, ck.f)(gk.g, kk);
        void 0 !== Fk && (0, GF.h)(Fk)
      }))), ZF(), HF(), xk || (xk = !0, (0, ak.t)(jk)), Rk.gameBridge.attach(CB), (0, Rk.installPageSources)({
        commands: {
          ...Rk.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: GB.e
        },
        queries: rB.wasmIconQueries,
        lookups: {
          ...Rk.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...rB.wasmIconLookups,
          jW: GB.b,
          drawCallStats: TB.i
        }
      }), (0, cB.b)(), (0, rB.loadIcons)()
    }
  },
  40156: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      e: () => bk
    });
    var Rk = Bk(40161);
    let tk = null,
      ak = null;

    function Xk() {
      return tk ??= Bk.e(58).then((() => Bk(42039))).catch((kk => {
        throw tk = null, kk
      })), tk
    }

    function bk() {
      return ak ??= Promise.all([Xk(), (0, Rk.e)()]).then((kk => {
        let [Fk] = kk;
        return Fk
      }), (kk => {
        throw ak = null, kk
      })), ak
    }
  },
  36728: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    const Rk = {
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
  36536: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      f: () => ak,
      g: () => Jk,
      i: () => bk,
      k: () => wk,
      o: () => dk,
      q: () => Vk,
      t: () => sk,
      v: () => Xk
    });
    var Rk = Bk(1192);
    let tk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      ak = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function Xk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function bk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Rk.h
      };
      if (kk.startsWith("lobby:")) {
        const Fk = kk.slice(6);
        return Vk(Fk) ? {
          kind: "lobby",
          path: Fk
        } : null
      }
      const Fk = kk.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Fk ? {
        kind: "codeBlock",
        pos: [parseInt(Fk[1]), parseInt(Fk[2]), parseInt(Fk[3])]
      } : null
    }

    function wk(kk) {
      return kk.endsWith(".d.ts")
    }

    function dk(kk) {
      return kk.endsWith(".ts") && !wk(kk)
    }
    const sk = 64;

    function Vk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > sk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!wk(kk) && !dk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const Fk = kk.split("/");
      for (const Bk of Fk)
        if ("" === Bk || "." === Bk || ".." === Bk) return !1;
      return !0
    }
    const Jk = 14e3
  },
  38685: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      i: () => tk
    });
    const Rk = ["description", "label"];

    function tk(kk) {
      const Fk = kk.type;
      return {
        type: Fk,
        params: kk[Fk]
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);