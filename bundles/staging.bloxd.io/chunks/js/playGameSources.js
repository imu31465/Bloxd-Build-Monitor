export const id = 46;
export const ids = [46];
export const modules = {
  39192: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      g: () => Sk,
      j: () => fk
    });
    const Dk = 6e3;

    function fk(kk, ek) {
      return [Math.floor(kk[0] / ek) * ek, Math.floor(kk[1] / ek) * ek, Math.floor(kk[2] / ek) * ek]
    }

    function Sk(kk) {
      const ek = (null !== kk && void 0 !== kk ? kk : "").match(/-?\d+(?:\.\d+)?/g);
      return ek && ek.length >= 3 ? [Number(ek[0]), Number(ek[1]), Number(ek[2])] : null
    }

    function bk(kk, ek) {
      return kk === ek ? String(kk) : `${kk}-${ek}`
    }

    function rk(kk, ek, ik, Dk) {
      const fk = [];
      let Sk = new Map;
      for (let bk = kk[2]; bk < kk[2] + ek; bk++) {
        const rk = new Map;
        let Pk = kk[0];
        for (; Pk < kk[0] + ek;) {
          const fk = Dk(Pk, ik, bk);
          let mk = Pk;
          for (; mk + 1 < kk[0] + ek && Dk(mk + 1, ik, bk) === fk;) mk++;
          if (null !== fk) {
            const kk = `${Pk} ${mk} ${fk}`,
              ek = Sk.get(kk);
            ek ? (ek.z1 = bk, Sk.delete(kk), rk.set(kk, ek)) : rk.set(kk, {
              x0: Pk,
              x1: mk,
              z0: bk,
              z1: bk,
              name: fk
            })
          }
          Pk = mk + 1
        }
        fk.push(...Sk.values()), Sk = rk
      }
      return fk.push(...Sk.values()), fk.sort(((kk, ek) => kk.z0 - ek.z0 || kk.x0 - ek.x0)).map((kk => `x${bk(kk.x0,kk.x1)} z${bk(kk.z0,kk.z1)} ${kk.name}`))
    }

    function Pk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dk;
      const Pk = [kk[0] + ek - 1, kk[1] + ek - 1, kk[2] + ek - 1],
        mk = null !== fk && fk.every(((ek, ik) => Math.floor(ek) >= kk[ik] && Math.floor(ek) <= Pk[ik])),
        Mk = [`The chunk from ${kk.join(" ")} to ${Pk.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== fk && Mk.push(`The player's feet are at ${fk.map(Math.floor).join(" ")}, ${mk?"in this chunk":"outside this chunk"}.`);
      const Kk = [];
      for (let Dk = kk[1]; Dk <= Pk[1]; Dk++) {
        const fk = rk(kk, ek, Dk, ik).join("; "),
          Sk = Kk[Kk.length - 1];
        (null === Sk || void 0 === Sk ? void 0 : Sk.boxes) === fk ? Sk.to = Dk : Kk.push({
          from: Dk,
          to: Dk,
          boxes: fk
        })
      }
      const xk = Kk.filter((kk => "" !== kk.boxes));
      0 === xk.length && Mk.push("It is all air.");
      let nk = Mk.join("\n").length;
      for (const Dk of xk) {
        const kk = `y${bk(Dk.from,Dk.to)}: ${Dk.boxes}`;
        if (nk += kk.length + 1, nk > Sk) {
          Mk.push(`Cut short: the layers from y${Dk.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Mk.push(kk)
      }
      return Mk.join("\n")
    }
  },
  8631: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(22);

    function fk() {
      return !Dk.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36543: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => Sk,
      m: () => fk
    });
    const Dk = [.25, .5, 1, 2, 4, 8, 16];

    function fk(kk, ek) {
      const ik = Dk;
      let fk = ik.indexOf(kk);
      return -1 === fk && (fk = ik.findIndex((ek => ek >= kk)), -1 === fk && (fk = ik.length - 1)), "up" === ek ? ik[Math.min(fk + 1, ik.length - 1)] : ik[Math.max(fk - 1, 0)]
    }

    function Sk(kk) {
      return kk <= Dk[0]
    }

    function bk(kk) {
      return kk >= Dk[Dk.length - 1]
    }
  },
  38662: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(26);
    let fk = !1;

    function Sk() {
      return fk
    }

    function bk(kk) {
      fk !== kk && (fk = kk, Dk.j.tm("replayViewer|videoExportChanged"))
    }
  },
  36018: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => Sk
    });
    let Dk = !1;

    function fk() {
      return Dk
    }

    function Sk(kk) {
      return Dk !== kk && (Dk = kk, !0)
    }
  },
  38601: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(26),
      fk = ik(1911);

    function Sk(kk) {
      let {
        taskId: ek,
        progress: ik
      } = kk;
      const Dk = fk.c.get("_tasks");
      null !== Dk && void 0 !== Dk && Dk[ek] && fk.c.apply({
        _tasks: {
          ...Dk,
          [ek]: {
            ...Dk[ek],
            progress: ik
          }
        }
      })
    }
    Dk.j.subscribe("clientTaskProgress", (kk => {
      Sk(kk)
    }))
  },
  39166: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk,
      f: () => Uk,
      h: () => mk,
      i: () => Kk,
      j: () => Pk,
      m: () => bk,
      n: () => Mk,
      p: () => Hk
    });
    var Dk = ik(1911),
      fk = ik(26),
      Sk = ik(1920);
    const bk = (0, Sk.p)((function() {
        var kk, ek, ik, fk;
        return {
          health: null !== (kk = Dk.c.get("_health")) && void 0 !== kk ? kk : null,
          maxHealth: null !== (ek = Dk.c.get("_totalMaxHealth")) && void 0 !== ek ? ek : null,
          shield: null !== (ik = Dk.c.get("_shield")) && void 0 !== ik ? ik : null,
          maxShield: null !== (fk = Dk.c.get("maxShield")) && void 0 !== fk ? fk : null
        }
      }), [], (0, Sk.o)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      rk = [{
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

    function Pk(kk, ek) {
      return rk[(kk ? 2 : 0) + (ek ? 1 : 0)]
    }
    const mk = (0, Sk.p)((function() {
      var kk;
      return null !== (kk = Dk.c.get("_aura")) && void 0 !== kk ? kk : null
    }), [], (0, Sk.o)("_aura"));

    function Mk(kk) {
      return {
        watch: ek => (0, fk.k)("shotPlayer", (ik => {
          let {
            playerId: Dk,
            damage: fk,
            wasCrit: Sk,
            distance: bk
          } = ik;
          kk(Dk) && ek({
            damage: fk,
            wasCrit: Sk,
            distance: bk
          })
        }))
      }
    }

    function Kk(kk) {
      return (0, Sk.d)("chat", (ek => {
        let {
          serverChatMsgId: ik,
          content: Dk,
          chatterEId: fk
        } = ek;
        return {
          serverChatMsgId: null !== ik && void 0 !== ik ? ik : null,
          content: Dk,
          author: fk ? kk(fk) : null
        }
      }))
    }
    class xk {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ik = this.shown;
        return kk !== this.needed && (this.needed = kk, this.neededSince = ek, null === kk && (this.shown = null)), this.shown !== this.needed && ek - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ik
      }
    }

    function nk(kk) {
      return [{
        translationKey: `touchKeys:${kk}`
      }]
    }
    const Uk = {
      open: nk("open"),
      close: nk("close"),
      milk: nk("milk"),
      shear: nk("shear"),
      tame: nk("tame"),
      feed: nk("feed"),
      ride: nk("ride")
    };

    function Hk(kk) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: kk
      }]
    }
  },
  40630: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      f: () => bk
    });
    var Dk = ik(3266);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= ik.e(213).then((() => ik(35892))).then((kk => {
        let {
          ITEM_SPRITES: ek,
          ITEM_SPRITES_WITHOUT_FILE: ik,
          ITEM_FILES_WITHOUT_SPRITE: Sk
        } = kk;
        fk = function(kk, ek, ik) {
          const fk = new Set,
            Sk = (0, Dk.w)(ek);
          let bk = 0;
          for (const [Dk, rk] of kk.entries()) Dk === Sk[bk] ? bk++ : fk.add(rk);
          if ("" !== ik)
            for (const rk of ik.split(Dk.r)) fk.add(rk);
          return fk
        }(ek.split(Dk.r), ik, Sk)
      }), (kk => {
        throw Sk = null, kk
      })), Sk
    }

    function rk(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = fk) || void 0 === ik ? void 0 : ik.has(kk)) && void 0 !== ek && ek
    }
  },
  39182: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      d: () => Sk,
      e: () => fk
    });
    const Dk = 128;

    function fk(kk, ek, ik, Dk) {
      const fk = 2 * ek - 1,
        Sk = 1 - 2 * ik,
        bk = kk(0) - fk * kk(3),
        rk = kk(4) - fk * kk(7),
        Pk = kk(8) - fk * kk(11),
        mk = kk(1) - Sk * kk(3),
        Mk = kk(5) - Sk * kk(7),
        Kk = kk(9) - Sk * kk(11);
      Dk[0] = rk * Kk - Pk * Mk, Dk[1] = Pk * mk - bk * Kk, Dk[2] = bk * Mk - rk * mk;
      const xk = Dk[0] * kk(3) + Dk[1] * kk(7) + Dk[2] * kk(11) < 0 ? -1 : 1,
        nk = Math.hypot(Dk[0], Dk[1], Dk[2]) * xk;
      return Dk[0] /= nk, Dk[1] /= nk, Dk[2] /= nk, Dk
    }

    function Sk(kk, ek, ik, Dk, fk, Sk) {
      const bk = [Math.floor(ek[0]), Math.floor(ek[1]), Math.floor(ek[2])],
        rk = [0, 0, 0],
        Pk = [1 / 0, 1 / 0, 1 / 0],
        mk = [1 / 0, 1 / 0, 1 / 0];
      for (let xk = 0; xk < 3; xk++) rk[xk] = Math.sign(ik[xk]), 0 !== rk[xk] && (mk[xk] = Math.abs(1 / ik[xk]), Pk[xk] = (bk[xk] + (rk[xk] > 0 ? 1 : 0) - ek[xk]) / ik[xk]);
      let Mk = 0,
        Kk = Math.abs(ik[0]) > Math.abs(ik[1]) ? 0 : 1;
      for (Math.abs(ik[2]) > Math.abs(ik[Kk]) && (Kk = 2); Mk <= Dk;) {
        if (kk(bk[0], bk[1], bk[2])) return fk[0] = bk[0], fk[1] = bk[1], fk[2] = bk[2], Sk[0] = 0, Sk[1] = 0, Sk[2] = 0, Sk[Kk] = -rk[Kk], !0;
        Kk = Pk[0] < Pk[1] ? 0 : 1, Pk[2] < Pk[Kk] && (Kk = 2), Mk = Pk[Kk], bk[Kk] += rk[Kk], Pk[Kk] += mk[Kk]
      }
      return !1
    }
  },
  39159: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(1850);

    function fk(kk, ek, ik) {
      return (0, Dk.l)(kk, ek) < ik
    }
  },
  35995: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => xk,
      d: () => Mk,
      g: () => nk,
      k: () => Kk
    });
    var Dk = ik(314),
      fk = ik(623),
      Sk = ik(634),
      bk = ik(38);
    const rk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Pk = "playSessionGameNameWithVariation",
      mk = "wasMatchmakePlayer";

    function Mk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      (0, Sk.h)(kk, rk)
    }

    function Kk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).setItem(mk, !0)
    }

    function xk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      return (0, Sk.c)(kk, rk)
    }

    function nk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.g;
      const ik = (0, Sk.c)(ek, rk),
        Mk = function(kk) {
          const ek = kk.getItem(Pk);
          return "string" !== typeof ek ? null : ek
        }(ek),
        Kk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).getItem(mk)
        }(ek);
      let xk;
      return xk = null !== ik && null !== Mk && (0, Sk.e)(ek, rk) && function(kk, ek, ik) {
          const fk = (0, Dk.Db)(kk),
            Sk = (0, Dk.Db)(ek),
            bk = (0, Dk.yb)(kk),
            rk = (0, Dk.yb)(ek);
          return !(fk !== Sk || !ik) || fk === Sk && bk === rk
        }(Mk, kk, Kk) ? ik : (0, fk.d)(), (0, Sk.i)(ek, rk, xk), ek.setItem(Pk, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).removeItem(mk)
        }(ek), xk
    }
  },
  38593: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk
    });
    var Dk = ik(1207),
      fk = ik(1311),
      Sk = ik(22),
      bk = ik(1291),
      rk = ik(1302),
      Pk = ik(1479),
      mk = ik(35995);

    function Mk(kk) {
      let {
        Ne: ek,
        Je: ik
      } = kk;
      const Mk = null !== ek && void 0 !== ek ? ek : (0, rk.c)().gameNameWithVariation;
      (0, Dk.G)(Mk) && ((0, mk.k)(), (0, bk.$)((() => {
        console.log("Received matchmaking order from game server to game", ek), (0, Sk.j)("inGameReplay"), (0, Pk.navigatePreserveSearch)((0, fk.d)(Mk, null !== ik && void 0 !== ik ? ik : void 0))
      }), "video_start"))
    }
  },
  38756: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(26),
      fk = ik(1931);

    function Sk(kk) {
      var ek, ik;
      const Sk = (0, fk.o)(null !== (ek = null === (ik = fk.u.toggleFreeCam) || void 0 === ik ? void 0 : ik[0]) && void 0 !== ek ? ek : null);
      Dk.j.tm("showBottomMessage", {
        message: `Free Camera ${kk?"Enabled":"Disabled"}${Sk?` - Press ${Sk} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38590: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      e: () => bk,
      f: () => rk,
      h: () => mk
    });
    var Dk = ik(26),
      fk = ik(1333);
    const Sk = new Map;

    function bk(kk, ek) {
      Dk.j.tm("newUiRequest", {
        id: kk,
        clientParameters: ek
      }, !0)
    }

    function rk(kk) {
      Dk.j.tm("removeUiRequest", kk, !0);
      const ek = Sk.get(kk);
      ek && (ek.tearDownNotification(), Sk.delete(kk))
    }

    function Pk() {
      Dk.j.tm("clearUiRequests");
      for (const kk of Sk.values()) kk.tearDownNotification();
      Sk.clear()
    }

    function mk(kk, ek, ik) {
      const Dk = fk.NotificationProvider.showPromptPopup({
        title: ek,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Sk.set(kk, Dk), Dk.getResult().then((ek => {
        Sk.delete(kk), "notificationTornDown" !== ek && ik(ek)
      }))
    }
  },
  39187: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Kk,
      h: () => xk
    });
    var Dk = ik(189),
      fk = ik(39192);
    const Sk = 20;

    function bk(kk) {
      return kk.map(Math.floor).join(" ")
    }

    function rk(kk) {
      return null === kk.amount || 1 === kk.amount ? kk.name : `${kk.amount} ${kk.name}`
    }
    var Pk = ik(39200),
      mk = ik(1911),
      Mk = ik(1302);

    function Kk(kk, ek) {
      if (!kk) return Pk.c;
      const ik = kk.playerFeet();
      if (!ik) return "The player isn't in the world yet, so no blocks can be seen.";
      const Sk = Dk.g.oU,
        bk = (0, fk.j)(null !== ek && void 0 !== ek ? ek : ik, Sk),
        rk = kk.chunkBlocks(bk);
      return rk ? (0, fk.c)(bk, Sk, ((ek, ik, Dk) => {
        const fk = rk(ek, ik, Dk);
        return 0 === fk ? null : kk.blockName(fk).split("|")[0]
      }), ik) : `The chunk from ${bk.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ik.map(Math.floor).join(" ")}.`
    }

    function xk(kk) {
      var ek, ik, Dk;
      if (!kk) return Pk.d;
      const fk = kk.playerFeet();
      if (!fk) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Kk,
        heldSlot: xk
      } = kk.inventory();
      return function(kk) {
        const ek = [];
        null !== kk.game && ek.push(`Game: ${kk.game}.`);
        const ik = null === kk.health ? "" : `, health ${Math.round(kk.health)}${null===kk.maxHealth?"":` of ${Math.round(kk.maxHealth)}`}`;
        ek.push(`The player (the creator) stands at ${bk(kk.position)}${ik}, ${kk.creative?"in":"not in"} creative mode.`);
        const Dk = kk.slots[kk.heldSlot];
        ek.push(Dk ? `Holding (slot ${kk.heldSlot}): ${rk(Dk)}.` : `Holding nothing (slot ${kk.heldSlot} is empty).`);
        const fk = kk.slots.flatMap(((kk, ek) => kk ? [`slot ${ek}: ${rk(kk)}`] : []));
        ek.push(fk.length > 0 ? `Inventory: ${fk.join(", ")}.` : "Inventory: empty.");
        const Pk = ek => Math.hypot(ek.position[0] - kk.position[0], ek.position[1] - kk.position[1], ek.position[2] - kk.position[2]),
          mk = [...kk.nearby].sort(((kk, ek) => Pk(kk) - Pk(ek)));
        if (0 === mk.length) ek.push("No other players or mobs are near enough to see.");
        else {
          ek.push("Near them, nearest first:");
          for (const kk of mk.slice(0, Sk)) {
            const ik = "player" === kk.kind ? `player "${kk.name||"?"}"` : kk.name && kk.name !== kk.kind ? `${kk.kind} "${kk.name}"` : kk.kind,
              Dk = Math.round(Pk(kk));
            ek.push(`- ${ik} at ${bk(kk.position)}, ${Dk} block${1===Dk?"":"s"} away`)
          }
          mk.length > Sk && ek.push(`- and ${mk.length-Sk} more further away`)
        }
        return kk.droppedItems > 0 && ek.push(`${kk.droppedItems} dropped item${1===kk.droppedItems?" is":"s are"} on the ground nearby.`), ek.join("\n")
      }({
        game: null !== (ek = (0, Mk.c)().gameNameWithVariation) && void 0 !== ek ? ek : null,
        position: fk,
        health: null !== (ik = mk.c.get("_health")) && void 0 !== ik ? ik : null,
        maxHealth: null !== (Dk = mk.c.get("_totalMaxHealth")) && void 0 !== Dk ? Dk : null,
        creative: !0 === mk.c.get("creative"),
        heldSlot: xk,
        slots: Kk,
        nearby: kk.nearby(),
        droppedItems: kk.droppedItems()
      })
    }
  },
  38610: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      f: () => Pk,
      h: () => mk
    });
    var Dk = ik(1207),
      fk = ik(996),
      Sk = ik(36463),
      bk = ik(26);

    function rk(kk) {
      let {
        lobbyName: ek,
        gameNameWithVariation: ik
      } = kk;
      return !(0, Dk.I)(ek) || null !== ik && (ik.startsWith("testGym") || (0, fk.j)(ik))
    }

    function Pk(kk) {
      return kk.vf === Sk.e.Leave || kk.vf === Sk.e.Cursor
    }

    function mk(kk) {
      bk.j.tm("codeCollab", {
        type: kk.vf,
        docKey: kk.Ef,
        version: kk.hf,
        editorCount: kk.af,
        peers: kk.Wf,
        updates: kk.tf,
        playerId: kk.Xf,
        playerName: kk.Bf,
        colour: kk.Tf,
        anchor: kk.Zf,
        head: kk.gf,
        existingCursors: kk.Gf,
        files: kk.Nf,
        engineSettings: kk.Rf
      })
    }
  },
  40466: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Ek,
      B: () => uk,
      C: () => vk,
      G: () => Fk,
      K: () => Tk,
      N: () => ck,
      P: () => Ik,
      d: () => Zk,
      e: () => ak,
      g: () => dk,
      j: () => Ok,
      m: () => Vk,
      o: () => sk,
      s: () => hk,
      t: () => qk,
      x: () => Qk,
      y: () => zk,
      z: () => Nk
    });
    var Dk = ik(1371),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(2388),
      rk = ik(4752),
      Pk = ik(4721);
    let mk, Mk = !1,
      Kk = !1,
      xk = !1,
      nk = !1;
    const Uk = 1300,
      Hk = 3e3;
    let wk = 0,
      lk = !1,
      pk = !1,
      yk = 0;
    const Yk = 2;
    let Lk = !1,
      Ck = !1;
    const Ak = new Set,
      jk = new Set;

    function sk() {
      return Mk
    }

    function dk() {
      return pk
    }

    function Vk() {
      return Ck
    }

    function Fk() {
      return (0, Sk.w)() && !Ck
    }

    function uk(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== Ck) {
        Ck = kk;
        for (const kk of [...jk]) kk(Ck);
        ek && ck()
      }
    }

    function qk(kk) {
      return jk.add(kk), () => {
        jk.delete(kk)
      }
    }

    function Ik() {
      (0, rk.j)(bk.t.Menu, (0, Sk.w)() ? 0 : bk.t.Menu)
    }

    function zk() {
      pk = !1, yk = 0, Ik(), ck()
    }

    function Qk(kk) {
      return Ak.add(kk), () => {
        Ak.delete(kk)
      }
    }

    function vk(kk) {
      Kk = !1, kk !== Mk && (Mk = kk, nk = !1, clearTimeout(mk), xk = !Mk && Lk, Mk ? (lk = !1, pk = !1, yk = 0) : Fk() && !Lk && (pk = !0), Lk = !1, Mk && !Fk() && Gk(), Rk(), xk && ck())
    }

    function Ek(kk) {
      kk !== lk && (lk = kk, kk || ck())
    }

    function hk() {
      Kk = !1, nk || !0 !== Xk() || (nk = !0, clearTimeout(mk), mk = setTimeout(Wk, Uk))
    }

    function ak() {
      return (!Kk || performance.now() - wk > Hk) && (Kk = (0, Pk.J)().lockPointer(), wk = performance.now()), Kk
    }

    function Wk() {
      tk() && Bk() && ak()
    }

    function tk() {
      return Fk() && !Mk && !lk && !(0, Dk.d)()
    }

    function Xk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Bk() {
      return xk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Xk()
    }

    function ck() {
      Fk() ? tk() && !pk && Bk() && ak() : Mk && !Lk && Gk()
    }

    function Tk() {
      pk ? navigator.vendor.startsWith("Apple") ? gk() : yk = Yk : ck()
    }

    function Zk() {
      yk > 0 && 0 === --yk && gk()
    }

    function Ok() {
      yk = 0
    }

    function gk() {
      tk() && !0 === Xk() && ak()
    }

    function Gk() {
      Lk = !0, (0, Pk.J)().unlockPointer()
    }

    function Nk() {
      Kk = !1, xk = !1, nk = !1, clearTimeout(mk), lk = !1, pk = !1, yk = 0, Lk = !1;
      const kk = Mk;
      Mk = !1, kk && Rk()
    }

    function Rk() {
      for (const kk of [...Ak]) kk(Mk);
      fk.j.tm("pointerLockUpdate", Mk)
    }
  },
  40262: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      h: () => rk,
      j: () => Kk,
      n: () => mk,
      p: () => bk,
      s: () => Mk,
      t: () => Pk
    });
    let Dk = null,
      fk = null,
      Sk = null;

    function bk(kk) {
      Dk = kk
    }

    function rk() {
      return Dk
    }

    function Pk(kk) {
      fk = kk
    }

    function mk() {
      return fk
    }

    function Mk(kk) {
      Sk = kk
    }

    function Kk() {
      return Sk
    }

    function xk() {
      var kk, ek;
      return !0 === (null === (kk = fk) || void 0 === kk || null === (ek = kk.currentViewer) || void 0 === ek ? void 0 : ek.inPlayback)
    }
  },
  40591: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      attachPlayGameSources: () => sD,
      playGameSources: () => jD
    });
    var Dk = ik(1893),
      fk = ik(40262),
      Sk = ik(4721),
      bk = ik(40165),
      rk = ik(40578),
      Pk = ik(39166),
      mk = ik(26),
      Mk = ik(4741),
      Kk = ik(4735),
      xk = ik(40201),
      nk = ik(40230),
      Uk = ik(40594),
      Hk = ik(40218);
    (0, Hk.m)(Mk.tc.Chat, (kk => {
      if (kk.payloadKind !== Kk.zc.Msgpack) return;
      const ek = function(kk) {
        if (null === kk || "object" !== typeof kk || !("content" in kk)) return null;
        const {
          chatMsgId: ek,
          content: ik,
          chatterEId: Dk
        } = kk;
        return {
          serverChatMsgId: null !== ek && void 0 !== ek ? ek : void 0,
          content: ik,
          chatterEId: void 0 === Dk || null === Dk ? void 0 : String(Dk)
        }
      }((0, xk.b)(kk.payload));
      null !== ek && mk.j.tm("chat", ek, !0)
    }));
    const wk = {
        chatReceived: (0, Pk.i)((function(kk) {
          var ek, ik, Dk;
          return {
            id: kk,
            name: null !== (ek = Uk.h.getName(kk)) && void 0 !== ek ? ek : null,
            local: (0, nk.f)() === kk,
            profileEffect: null !== (ik = null === (Dk = (0, Uk.j)(kk)) || void 0 === Dk ? void 0 : Dk.profileEffect) && void 0 !== ik ? ik : null
          }
        }))
      },
      lk = {
        sendChatMessage(kk) {
          var ek;
          let {
            hM: ik,
            channelName: Dk
          } = kk;
          null === (ek = (0, bk.g)()) || void 0 === ek || ek.clientApi.sendChat(ik, Dk)
        }
      };
    var pk = ik(189),
      yk = ik(1911),
      Yk = ik(40157),
      Lk = ik(39159);
    const Ck = [0, 0, 0],
      Ak = {
        codeBlockClickable(kk) {
          var ek;
          const ik = (0, bk.g)();
          if (null === ik || void 0 === ik || !ik.isSessionLive) return !1;
          const Dk = ik.api;
          if (0 !== (Yk.t.playerFlags(Dk.apiView, 0) & Yk.yd.Crouching)) return !1;
          const fk = Dk.queries.directorEntity(Dk.localId) >= Yk.fb.BYTES ? Dk.memoryData(Dk.scratch(), Yk.fb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === fk) return !1;
          for (let Sk = 0; Sk < 3; Sk++) Ck[Sk] = Yk.fb.feet(fk, 0, Sk);
          return Ck[1] += Yk.fb.eyeHeight(fk, 0), (0, Lk.b)(Ck, kk, null !== (ek = yk.c.get("blockReach")) && void 0 !== ek ? ek : pk.g.Sy)
        }
      },
      jk = {
        clickCodeBlock(kk) {
          var ek;
          null === (ek = (0, bk.g)()) || void 0 === ek || ek.clickCodeBlock(kk)
        }
      };
    var sk = ik(40180),
      dk = ik(40599),
      Vk = ik(996),
      Fk = ik(38612),
      uk = ik(4716),
      qk = ik(40191),
      Ik = ik(40172),
      zk = ik(40196);

    function Qk(kk) {
      if (null === kk) return null;
      const ek = [];
      for (const ik of kk) {
        const kk = Object.keys(ik)[0];
        if ("mk" === kk) {
          const {
            str: kk,
            style: Dk,
            clickableUrl: fk
          } = ik.mk, Sk = Object.keys(kk)[0], bk = kk[Sk];
          "string" !== Sk && "styledEntityName" !== Sk && "styledTranslatedText" !== Sk || ek.push({
            str: bk,
            style: Dk,
            clickableUrl: fk
          })
        } else ek.push(ik[kk])
      }
      return ek
    }
    const vk = {
      screenPos(kk) {
        var ek, ik;
        return null !== (ek = null === (ik = (0, bk.g)()) || void 0 === ik ? void 0 : ik.renderFrame.projectWorldPosToScreenPos(kk)) && void 0 !== ek ? ek : {
          x: 0,
          y: 0
        }
      }
    };
    let Ek = !1;

    function hk() {
      Ek || (Ek = !0, (0, Hk.m)(Mk.tc.ProgressBarUpdate, (kk => {
        const ek = (0, zk.k)(kk);
        (0, zk.e)(ek) && mk.j.tm("progressBarUpdate", ek, !0)
      })), (0, Hk.m)(qk.z, (kk => {
        const ek = (0, zk.i)(qk.z, kk);
        ek && mk.j.tm("middleScreenBarInitiate", {
          duration: ek.Ee,
          he: ek.he,
          horizBarRemOffset: ek.ae
        }, !0)
      })), (0, Hk.m)(Mk.tc.RemoveMiddleScreenBar, (() => {
        mk.j.tm("middleScreenBarRemove")
      })), (0, Hk.m)(qk.bb, (kk => {
        const ek = (0, zk.i)(qk.bb, kk);
        if (ek) {
          var ik;
          const kk = ek.XS ? null === (ik = (0, bk.g)()) || void 0 === ik ? void 0 : ik.renderFrame.projectDirectionToScreenPos(ek.XS) : void 0;
          mk.j.tm("sendHitmarker", {
            tS: ek.tS,
            screenPos: kk
          }, !0)
        }
      })), (0, Hk.m)(qk.gb, (kk => {
        const ek = (0, zk.i)(qk.gb, kk);
        if (ek) {
          const {
            id: kk,
            position: ik,
            style: Dk,
            GS: fk,
            RS: Sk
          } = ek;
          mk.j.tm("setDirectionArrow", {
            id: kk,
            position: ik,
            style: Dk,
            text: Qk(fk),
            RS: Sk
          }, !0)
        }
      })), (0, Hk.m)(qk.f, (kk => {
        const ek = (0, zk.i)(qk.f, kk);
        ek && mk.j.tm("clearDirectionArrow", {
          id: ek.id
        }, !0)
      })), (0, Hk.m)(qk.s, (kk => {
        const ek = (0, zk.i)(qk.s, kk);
        ek && mk.j.tm("flyingMiddleMessage", {
          content: Qk(ek.Me),
          Ke: ek.Ke,
          xe: ek.xe
        }, !0)
      })), (0, Hk.m)(Mk.tc.WorldVariation, (kk => {
        const ek = (0, zk.k)(kk);
        if ("string" === typeof ek) {
          const kk = ek === Vk.f ? null : {
            message: `Currently loaded as variation: ${ek}`,
            type: "Warning"
          };
          mk.j.tm("showPermanentBottomMessage", kk, !0)
        }
      })), (0, Hk.m)(qk.N, (kk => {
        const ek = (0, zk.i)(qk.N, kk);
        ek && function(kk, ek) {
          const {
            type: ik,
            params: Dk
          } = (0, Fk.h)(ek), fk = {
            ...Dk
          };
          for (const Sk of Fk.d) fk[Sk] && (fk[Sk] = Qk(fk[Sk]));
          uk.d.queueQTE(kk, ik, fk).getResult().then((ek => {
            var ik;
            "boolean" === typeof ek && (null === (ik = (0, bk.g)()) || void 0 === ik || ik.send(Ik.e.QteResponse, {
              qteId: kk,
              qteResponse: ek
            }))
          }))
        }(ek.id, ek.kk)
      })), (0, Hk.m)(qk.W, (kk => {
        const ek = (0, zk.i)(qk.W, kk);
        "number" === typeof ek && uk.d.cancelQTE(ek)
      })), (0, Hk.g)((() => {
        uk.d.reset()
      })), (0, Hk.k)((() => {
        uk.d.reset()
      })), (0, Hk.m)(Mk.tc.EditItemCraftingRecipes, (kk => {
        const ek = (0, zk.k)(kk);
        (0, zk.e)(ek) && mk.j.tm("craftingRecipesEdited", {
          itemName: ek.craftingRecipeItemName,
          recipesForItem: ek.recipesForItem
        })
      })), (0, Hk.m)(qk.T, (kk => {
        const ek = (0, zk.i)(qk.T, kk);
        ek && mk.j.tm("craftingRecipesEdited", {
          itemName: ek.zk,
          recipesForItem: []
        })
      })))
    }
    var ak = ik(22);
    const Wk = [{
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

    function tk(kk) {
      return Yk.t.playerFlags(kk.api.apiView, 0)
    }
    const Xk = {
        freeCamera: (0, nk.c)((kk => () => {
          const ek = kk.isSessionLive && 0 !== (tk(kk) & Yk.yd.FreeCamMoves),
            ik = kk.freeCameraAllowed() && null === ak.b.get("scriptedCameraFacing");
          return Wk[(ik ? 2 : 0) + (ek ? 1 : 0)]
        }), Wk[0], (kk => (0, Sk.v)(kk)))
      },
      Bk = {
        setFreeCameraMovesFly: kk => {
          var ek;
          null === (ek = (0, bk.g)()) || void 0 === ek || ek.setFreeCameraMovesFly(kk)
        }
      },
      ck = {
        freeCameraPos: () => {
          const kk = (0, bk.g)();
          return null !== kk && void 0 !== kk && kk.isSessionLive && kk.renderFrame.hasView && 0 !== (tk(kk) & Yk.yd.FreeCam) ? kk.renderFrame.cameraPosition : null
        }
      };
    var Tk = ik(38756);
    let Zk = !1,
      Ok = !1;

    function gk() {
      const kk = (0, bk.g)();
      if (null === kk || void 0 === kk || !kk.isSessionLive) return void(Zk = !1);
      const ek = 0 !== (Yk.t.playerFlags(kk.api.apiView, 0) & Yk.yd.FreeCam);
      ek !== Zk && (Zk = ek, (0, Tk.c)(ek))
    }
    var Gk = ik(314),
      Nk = ik(36630),
      Rk = ik(1920);
    var Jk = ik(40601),
      ke = ik(40223);
    const ee = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let ie = "off";

    function De(kk) {
      var ek;
      return null === kk ? null : {
        label: null !== (ek = (0, Jk.b)(kk, "interactionPrompt")) && void 0 !== ek ? ek : null
      }
    }
    const fe = new Map([
      [Yk.ic.Open, {
        label: Pk.f.open
      }],
      [Yk.ic.Close, {
        label: Pk.f.close
      }],
      [Yk.ic.Milk, {
        label: Pk.f.milk
      }],
      [Yk.ic.Shear, {
        label: Pk.f.shear
      }],
      [Yk.ic.Tame, {
        label: Pk.f.tame
      }],
      [Yk.ic.Feed, {
        label: Pk.f.feed
      }],
      [Yk.ic.Ride, {
        label: Pk.f.ride
      }]
    ]);
    class Se {
      constructor() {
        this.target = ee, this.wP = Yk.Vc, this.optionName = null, this.pickaxe = new Pk.d
      }
      read(kk) {
        var ek;
        const ik = Yk.t.targetBlockId(kk.api.apiView, 0);
        ik !== this.wP && (this.wP = ik, this.optionName = ik === Yk.Vc ? null : `${kk.tables.getMetaInfo(ik).rootName}CrosshairText`);
        const Dk = null === this.optionName ? null : null !== (ek = kk.tables.getClientOption(this.optionName)) && void 0 !== ek ? ek : null;
        this.pickaxe.update(function(kk, ek) {
          var ik, Dk, fk;
          if (0 === (Yk.t.playerFlags(kk.api.apiView, 0) & Yk.yd.Breaking) || ek === Yk.Vc || 0 === ek) return null;
          const {
            tables: Sk
          } = kk;
          if (!0 === Sk.getClientOption("creative")) return null;
          const bk = Sk.nameOfId(ek),
            rk = null === (ik = kk.items.XM()) || void 0 === ik ? void 0 : ik.name,
            Pk = null !== (Dk = Sk.getItemStat(bk, "harvestLevel")) && void 0 !== Dk ? Dk : 0;
          return (0, Gk.qc)({
            blockHarvestType: Sk.getDefaultItemStat(bk, "harvestType"),
            blockHarvestLevel: Sk.getDefaultItemStat(bk, "harvestLevel"),
            harvestLevel: Pk,
            heldToolType: void 0 === rk ? void 0 : Sk.getDefaultItemStat(rk, "harvests"),
            heldToolLevel: void 0 === rk ? void 0 : Sk.getDefaultItemStat(rk, "level")
          }) && null !== (fk = Nk.s[Pk]) && void 0 !== fk ? fk : null
        }(kk, ik)), kk.watchPromptPick(ie);
        const fk = "touch" === ie ? function(kk) {
          var ek;
          const ik = kk.interactLabel;
          return ik === Yk.ic.Entity ? De(kk.promptEntity) : ik === Yk.ic.TameWith ? {
            label: (0, Pk.p)(kk.tables.nameOfId(kk.interactIcon))
          } : null !== (ek = fe.get(ik)) && void 0 !== ek ? ek : null
        }(kk) : De(kk.promptEntity);
        return this.target = (0, Rk.r)(this.target, {
          interactPrompt: fk,
          blockText: Dk,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let be = null;
    const re = {
      current: () => {
        var kk, ek;
        return null !== (kk = null === (ek = be) || void 0 === ek ? void 0 : ek.target) && void 0 !== kk ? kk : ee
      },
      watch: kk => {
        const ek = new Se;
        be = ek;
        const ik = (0, nk.g)((ik => {
          let Dk = ek.read(ik);
          kk(Dk);
          const fk = (0, Sk.x)((() => {
            const fk = ek.read(ik);
            fk !== Dk && (Dk = fk, kk(fk))
          }));
          return () => {
            fk(), ik.watchPromptPick("off")
          }
        }));
        return () => {
          ik(), be === ek && (be = null)
        }
      }
    };
    let Pe = 0,
      me = 0;
    const Me = {
        health: Pk.m,
        aura: Pk.h,
        hotbar: ke.d.states.hotbar,
        heldItemAim: ke.d.states.heldItemAim,
        crouching: (0, nk.c)((kk => function(kk) {
          const ek = () => 0 !== (Yk.t.playerFlags(kk.apiView, 0) & Yk.yd.Crouching);
          return {
            current: ek,
            watch(kk) {
              let ik = ek();
              return (0, Sk.v)((() => {
                const Dk = ek();
                Dk !== ik && (ik = Dk, kk(Dk))
              }))
            }
          }
        }(kk.api).current), !1, (kk => (0, Sk.v)(kk))),
        flight: (0, nk.c)((kk => () => function(kk) {
          const ek = Yk.t.playerFlags(kk.apiView, 0);
          return (0, Pk.j)(0 !== (ek & Yk.yd.CanFly), 0 !== (ek & Yk.yd.Flying))
        }(kk.api)), (0, Pk.j)(!1, !1), (kk => (0, Sk.v)(kk))),
        gliderBoostFuel: (0, nk.c)((kk => () => Yk.t.gliderBoostFuel(kk.api.apiView, 0)), 0, (kk => (0, Sk.v)(kk))),
        crosshairTarget: re
      },
      Ke = {
        hotbarSlotRequested: ke.d.events.hotbarSlotRequested,
        hotbarScrolled: ke.d.events.hotbarScrolled,
        numberKeyPressed: ke.d.events.numberKeyPressed,
        shotDamageToShow: (0, Pk.n)((kk => !0 === (0, Jk.b)(kk, "showDamageAmounts")))
      },
      xe = {
        selectHotbarSlot: ke.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: kk => {
          ie = kk
        }
      },
      ne = {
        momentumFrac: function() {
          var kk, ek, ik;
          const Dk = (0, bk.g)(),
            fk = performance.now(),
            Sk = null === Dk || void 0 === Dk || null === (kk = Dk.items.XM()) || void 0 === kk || null === (ek = kk.attributes) || void 0 === ek || null === (ik = ek.customAttributes) || void 0 === ik ? void 0 : ik.enchantments;
          return Pe = null !== Dk && null !== Sk && void 0 !== Sk && Sk.Momentum ? 0 !== (Yk.t.playerFlags(Dk.api.apiView, 0) & Yk.yd.Breaking) ? Math.max(0, Yk.t.momentumFrac(Dk.api.apiView, 0)) : Math.max(0, Pe - (fk - me) / 1500) : 0, me = fk, Pe
        }
      };
    var Ue = ik(40161);
    const He = {
      lobbyManage(kk) {
        var ek;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.LobbyManage, kk)
      }
    };
    var we = ik(1218),
      le = ik(36018),
      pe = ik(8631),
      ye = ik(1614),
      Ye = ik(2388),
      Le = ik(4745);
    let Ce = !1;

    function Ae(kk) {
      Ce = kk
    }

    function je() {
      "inGame" !== ak.b.get("gameState") || (0, ye.w)() || mk.j.tm("ctrlCrouchWithoutFullscreen")
    }
    let se = !1;
    const de = {
        OpenEmoteWheel: () => {
          Ae(!0), se = !0, queueMicrotask((() => {
            se && (se = !1, mk.j.tm("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          mk.j.tm("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, le.c)() || mk.j.tm("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, le.c)() || mk.j.tm("XKeyPressed")
        },
        CtrlCrouch: je,
        "primary-fire": () => {
          mk.j.tm("mouseState", {
            Yr: we.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          mk.j.tm("mouseState", {
            Yr: we.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          mk.j.tm("mouseState", {
            Yr: we.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      Ve = {
        OpenEmoteWheel: () => {
          Ae(!1), se ? (se = !1, (0, pe.c)() || mk.j.tm("requestEmoteWheelHoldOpen")) : mk.j.tm("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: je,
        "primary-fire": () => {
          mk.j.tm("mouseState", {
            Yr: we.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          mk.j.tm("mouseState", {
            Yr: we.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          mk.j.tm("mouseState", {
            Yr: we.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Fe = !1;

    function ue() {
      Fe || (Fe = !0, (0, Le.j)((kk => {
        if ((0, fk.e)()) return;
        const ek = (0, Le.f)(kk) ? "primary-fire" : kk.action;
        var ik;
        if (kk.down) {
          if (0 === (kk.flags & Ye.d.Synthetic)) {
            var Dk;
            null === (Dk = de[ek]) || void 0 === Dk || Dk.call(de)
          }
        } else null === (ik = Ve[ek]) || void 0 === ik || ik.call(Ve)
      })))
    }
    var qe = ik(302),
      Ie = ik(99),
      ze = ik(38),
      Qe = ik(40466),
      ve = ik(1302),
      Ee = ik(38610);
    let he = !1;
    const ae = {
      sendCodeCollab(kk) {
        var ek;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.CodeCollab, (0, Ik.l)(kk), (0, Ee.f)(kk))
      }
    };
    var We = ik(38676);
    let te = null,
      Xe = !1,
      Be = null;

    function ce() {
      return "inGame" === ak.b.get("gameState") && !(0, le.c)()
    }
    const Te = {
        OpenInventory: kk => {
          (0, ye.D)(kk, "inventory", (0, Ue.k)())
        },
        OpenShop: kk => {
          te && ce() && (0, ye.A)(kk, qe.r.SHOP, !te.shopIsEmpty(yk.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: kk => {
          ce() && (0, ye.A)(kk, qe.r.LOBBY_LEADERBOARD, (0, We.c)({
            lobbyLeaderboardInfo: yk.c.get("lobbyLeaderboardInfo"),
            lobbyManage: yk.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: kk => {
          var ek;
          const ik = null === (ek = te) || void 0 === ek ? void 0 : ek.getClientGameMapKey();
          ik ? (0, ye.G)(kk, !0, ik) : (0, ye.D)(kk, "retentionFeatures", !(!yk.c.get("_tasks") && !yk.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: kk => {
          (0, ye.D)(kk, "inviteLink", Ie.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: kk => {
          ce() && function(kk) {
            var ek;
            const ik = (0, bk.g)(),
              Dk = null !== ik && void 0 !== ik && ik.isSessionLive ? ik.api : null,
              fk = Dk ? Dk.vy(Dk.localId) : null,
              Sk = null !== (ek = null === fk || void 0 === fk ? void 0 : fk.map((kk => Math.floor(kk)))) && void 0 !== ek ? ek : null;
            (0, ye.G)(kk, null !== Sk && (0, Ee.c)((0, ve.c)()), (() => {
              mk.j.tm("EditLobbyCode", Sk)
            }))
          }(kk)
        },
        HideUi: () => {
          mk.j.tm("showUi", !1)
        }
      },
      oe = {
        HideUi: () => {
          mk.j.tm("showUi", !0)
        }
      };

    function Ze() {
      Xe || (Xe = !0, ik.e(157).then((() => ik(59985))).then((kk => {
        te = kk
      }), (kk => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", kk)
      })), (0, Qe.x)((kk => {
        kk || !(0, Qe.g)() || (0, Ie.isMobile)() || !ze.f.getItem("disableFullscreen") || (0, ye.s)() || ak.b.set({
          openEverythingMenuName: qe.r.SETTINGS
        })
      })), (0, Le.j)((kk => {
        let {
          action: ek,
          down: ik,
          press: Dk
        } = kk;
        var Sk, bk;
        (0, fk.e)() || (ik ? null === (Sk = Te[ek]) || void 0 === Sk || Sk.call(Te, function(kk) {
          var ek;
          if (0 === kk || (null === (ek = Be) || void 0 === ek ? void 0 : ek.press) !== kk) {
            const ek = {
              press: kk,
              event: new Event("inputAction")
            };
            Be = ek, queueMicrotask((() => {
              Be === ek && (Be = null)
            }))
          }
          return Be.event
        }(Dk)) : null === (bk = oe[ek]) || void 0 === bk || bk.call(oe))
      })))
    }
    var Oe = ik(38601),
      ge = ik(38593),
      Ge = ik(38590);
    const Ne = {
      completeTask(kk) {
        var ek;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.CompleteTask, (0, Ik.m)(kk))
      },
      setServerCookie(kk) {
        var ek;
        let {
          key: ik,
          value: Dk
        } = kk;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.GeneralCookieSet, (0, Ik.u)({
          ob: ik,
          Zb: Dk
        }))
      },
      answerUiRequest(kk) {
        var ek;
        let {
          id: ik,
          PP: Dk
        } = kk;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.UiRequestResp, (0, Ik.X)({
          Nb: ik,
          Rb: Dk,
          Jb: 5
        }))
      },
      chooseRewardedAd(kk) {
        var ek;
        let {
          id: ik,
          PP: Dk
        } = kk;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.UiRequestResponded, (0, Ik.T)({
          id: ik,
          PP: Dk
        }))
      },
      requestLeaderboard(kk) {
        var ek;
        let {
          category: ik,
          timeframe: Dk,
          seeTop: fk
        } = kk;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.LeaderboardRequest, {
          category: ik,
          timeframe: Dk,
          seeTop: fk
        })
      }
    };
    let Re = !1;
    const Je = pk.g.zp / 2,
      ki = [Je, -Je, -Je, -Je, Je, Je, -Je, Je],
      ei = [0, 0, 0];

    function ii(kk, ek, ik) {
      for (let Dk = 0; Dk < kk.length; Dk += 2)
        if (kk[Dk] === ek && kk[Dk + 1] === ik) return !0;
      return !1
    }
    const Di = {
      blocksStandingOn: function() {
        const kk = (0, bk.g)();
        if (null === kk) return [];
        const {
          api: ek,
          chunks: ik,
          tables: Dk
        } = kk;
        if (!ek.readPosition(ek.localId, ei)) return [];
        const [fk, Sk, rk] = ei, Pk = Math.ceil(Sk) - 1, mk = [], Mk = [];
        for (let bk = 0; bk < ki.length; bk += 2) {
          const kk = fk + ki[bk],
            ek = rk + ki[bk + 1];
          if (Number.isInteger(kk) || Number.isInteger(ek)) continue;
          const Sk = Math.floor(kk),
            Kk = Math.floor(ek);
          if (ii(Mk, Sk, Kk)) continue;
          const xk = ik.wP(Sk, Pk, Kk);
          Dk.isSolidBlockId(xk) && (Mk.push(Sk, Kk), mk.push(Dk.nameOfId(xk)))
        }
        return mk
      },
      dropAhead: function() {
        const kk = (0, bk.g)();
        return null !== kk && 0 !== (Yk.t.playerFlags(kk.api.apiView, 0) & Yk.yd.DropAhead)
      }
    };
    var fi = ik(36543),
      Si = ik(38662),
      bi = ik(1333),
      ri = ik(40238);
    const Pi = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      mi = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Mi() {
      const kk = new Set;
      return {
        add: ek => (kk.add(ek), () => {
          kk.delete(ek)
        }),
        fire() {
          for (const ek of kk) ek()
        }
      }
    }
    const Ki = Object.freeze([]);

    function xi(kk, ek) {
      let ik, {
        rereads: Dk,
        followLocalId: fk
      } = ek;
      const bk = () => (ik = (0, Rk.r)(ik, kk()), ik);
      return {
        current: bk,
        watch(kk) {
          const ek = (0, Uk.d)((ek => {
            Dk(ek) && kk(bk())
          }));
          if (!fk) return ek;
          let ik = (0, nk.f)();
          const rk = (0, Sk.x)((() => {
            const ek = (0, nk.f)();
            ek !== ik && (ik = ek, kk(bk()))
          }));
          return () => {
            ek(), rk()
          }
        }
      }
    }
    const ni = {
        players: xi((function() {
          const kk = Uk.h.ids(),
            ek = {};
          for (const Sk of kk) {
            var ik, Dk, fk;
            ek[Sk] = {
              name: null !== (ik = Uk.h.getName(Sk)) && void 0 !== ik ? ik : null,
              ranks: null !== (Dk = Uk.h.getSetting(Sk, "ranks")) && void 0 !== Dk ? Dk : Ki,
              cosmetics: null !== (fk = (0, Uk.j)(Sk)) && void 0 !== fk ? fk : null
            }
          }
          return {
            ids: kk,
            byId: ek,
            localId: (0, nk.f)()
          }
        }), {
          rereads: kk => "roster" !== kk.kind || kk.members || kk.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: xi((function() {
          const kk = {};
          for (const fk of Uk.h.ids()) {
            var ek, ik, Dk;
            kk[fk] = {
              colour: null !== (ek = Uk.h.getSetting(fk, "colorInLobbyLeaderboard")) && void 0 !== ek ? ek : null,
              values: null !== (ik = Uk.h.getSetting(fk, "lobbyLeaderboardValues")) && void 0 !== ik ? ik : null,
              tags: null !== (Dk = Uk.h.getSetting(fk, "lobbyLeaderboardTags")) && void 0 !== Dk ? Dk : null
            }
          }
          return kk
        }), {
          rereads: function(kk) {
            if ("roster" !== kk.kind) return "reset" === kk.kind;
            const {
              members: ek,
              settings: ik
            } = kk;
            return ek || ik.has("colorInLobbyLeaderboard") || ik.has("lobbyLeaderboardValues") || ik.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ui = {
        cosmeticsUpdated: {
          watch: kk => (0, Uk.d)((ek => {
            if ("cosmetics" !== ek.kind) return;
            const ik = (0, nk.f)();
            kk(ek.updates.map((kk => {
              let {
                yD: ek,
                YD: Dk,
                LD: fk
              } = kk;
              return {
                local: ek === ik,
                YD: Dk,
                LD: fk
              }
            })))
          }))
        }
      };
    var Hi = ik(2849),
      wi = ik(1688),
      li = ik(630),
      yi = ik(40513);
    let Yi = !1,
      Li = null;
    const Ci = {
      setShopOpen(kk) {
        var ek;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.ShopMenuChanged, (0, Ik.N)(kk))
      },
      buyShopItem(kk) {
        var ek;
        let {
          categoryKey: ik,
          itemKey: Dk,
          userInput: fk
        } = kk;
        null === (ek = (0, bk.g)()) || void 0 === ek || ek.send(Ik.e.ItemBought, {
          categoryKey: ik,
          itemKey: Dk,
          shopVersion: yk.c.get("_shopVersion"),
          userInput: fk
        })
      }
    };
    let Ai = !1;
    var ji = ik(4752);
    const si = Ye.t.LookFrozen | Ye.t.ClicksSuppressed;

    function di(kk, ek) {
      var ik;
      null !== (ik = (0, bk.g)()) && void 0 !== ik && ik.send(kk, ek) || console.warn(`[bloxd-wasm-client] message ${kk} not sent: no live game or the core's command ring is full`)
    }(0, Hk.m)(qk.ib, (kk => {
      const ek = (0, zk.i)(qk.ib, kk);
      void 0 !== ek && mk.j.tm("setDiscordReportKey", ek)
    }));
    const Vi = {
      ignorePlayer(kk) {
        di(Ik.e.IgnoreUser, (0, Ik.y)({
          FP: kk
        }))
      },
      reportPlayer(kk) {
        let {
          playerId: ek,
          chatMsgId: ik,
          kr: Dk,
          details: fk
        } = kk;
        di(Ik.e.UserReport, (0, Ik.gb)({
          lr: ek,
          yr: ik,
          kr: Dk,
          er: fk
        }))
      },
      reportWorldCodeChat(kk) {
        let {
          chatMsgId: ek,
          kr: ik,
          details: Dk
        } = kk;
        di(Ik.e.UserReport, (0, Ik.gb)({
          lr: "",
          yr: ek,
          kr: ik,
          er: Dk
        }))
      },
      requestDiscordReportKey(kk) {
        di(Ik.e.ReqDiscordReportKey, (0, Ik.I)(kk))
      },
      reportLobbyOrGame(kk) {
        let {
          target: ek,
          kr: ik,
          details: Dk
        } = kk;
        "customGame" === ek ? di(Ik.e.CustomGameReport, (0, Ik.q)({
          kr: ik,
          er: Dk
        })) : di(Ik.e.LobbyReport, (0, Ik.C)({
          kr: ik,
          er: Dk
        }))
      },
      updateMyCosmetic(kk) {
        di(Ik.e.UpdateMyCosmetic, (0, Ik.db)(kk))
      },
      holdEmoteWheel(kk) {
        !kk || Ce ? (0, ji.j)(si, kk ? si : 0) : mk.j.tm("requestEmoteWheelHoldRelease")
      }
    };
    var Fi = ik(40606),
      ui = ik(9020),
      qi = ik(39182);
    const Ii = [0, 0, 0],
      zi = [0, 0, 0],
      Qi = [0, 0, 0],
      vi = {
        blockAtViewPoint(kk) {
          let {
            x: ek,
            y: ik
          } = kk;
          const Dk = (0, bk.g)();
          if (null === Dk || void 0 === Dk || !Dk.renderFrame.hasView) return null;
          const {
            renderFrame: fk,
            clientApi: Sk,
            api: rk
          } = Dk;
          let Pk = 0;
          return (0, qi.d)(((kk, ek, ik) => (Pk = Sk.getBlockId(kk, ek, ik), 0 !== Pk)), fk.cameraPosition, (0, qi.e)((kk => Yk.t.viewProj(rk.apiView, 0, kk)), ek, ik, Ii), qi.c, zi, Qi) ? {
            pos: [zi[0], zi[1], zi[2]],
            normal: [Qi[0], Qi[1], Qi[2]],
            name: (0, ui.e)(Pk)
          } : null
        }
      },
      Ei = {
        setBlockHighlight(kk) {
          var ek;
          null === (ek = (0, bk.g)()) || void 0 === ek || ek.setBlockHighlight(kk)
        }
      };
    var ai = ik(1903),
      Wi = ik(40501),
      ti = ik(40608),
      Xi = ik(4433),
      Bi = ik(4412),
      ci = ik(40617),
      Ti = ik(3261),
      oi = ik(3266);
    let Zi = null,
      Oi = null;

    function gi(kk) {
      const ek = kk.startsWith(oi.k),
        [ik, Dk = ik, fk = ik] = (ek ? kk.slice(oi.k.length) : kk).split(oi.i);
      return {
        top: ik,
        left: Dk,
        right: fk,
        half: ek
      }
    }

    function Gi(kk) {
      const ek = null === Zi ? void 0 : (0, Ti.e)(kk),
        ik = void 0 === ek ? 0 : Zi.codes[ek];
      return 0 === ik ? void 0 : Zi.pool[ik - 1]
    }
    var Ni = ik(3257),
      Ri = ik(4405),
      Ji = ik(4428),
      kD = ik(40550),
      eD = ik(40625);
    const iD = "item:";
    let DD = null,
      fD = null,
      SD = null,
      bD = null,
      rD = !1,
      PD = !1;

    function mD() {
      return PD || (PD = !0, (0, Ji.g)().then((kk => {
        kk && (0, ai.c)()
      }))), SD ??= Promise.all([(0, Ni.h)(), (Oi ??= ik.e(1).then((() => ik(59997))).then((kk => {
        let {
          BLOCK_FACE_RUNS: ek,
          BLOCK_FACES: ik,
          MAX_FACE_ITEM_ID: Dk
        } = kk;
        Zi = {
          codes: (0, oi.y)(ek, Dk + 1),
          pool: ik.split(oi.r).map(gi)
        }
      }), (kk => {
        throw Oi = null, kk
      })), Oi), (0, eD.g)(), ik.e(200).then((() => ik(33784)))]).then((kk => {
        let [, , ek, ik] = kk;
        ek.followBundledTextures(), DD = ek, fD = ik, (0, ai.c)()
      }), (kk => {
        SD = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", kk)
      })), SD
    }

    function MD(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = (0, kD.f)()) || void 0 === ik ? void 0 : ik.textureUrl(kk)) && void 0 !== ek ? ek : DD.itemSpriteUrl(kk)
    }

    function KD(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = (0, kD.f)()) || void 0 === ik ? void 0 : ik.textureUrl(kk)) && void 0 !== ek ? ek : DD.blockTextureUrl(kk)
    }

    function xD(kk) {
      var ek;
      return null !== (ek = (0, Ni.d)(kk)) && void 0 !== ek ? ek : kk
    }

    function nD(kk, ek) {
      var ik, Dk, fk;
      return null !== (ik = null !== (Dk = null !== (fk = KD(kk)) && void 0 !== fk ? fk : null === ek || void 0 === ek ? void 0 : ek.rotated[kk]) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.animated[kk]) && void 0 !== ik ? ik : DD.notFoundUrl()
    }

    function UD(kk) {
      return void 0 !== (0, Ti.e)(kk) ? kk : /^[1-9][0-9]*$/.test(kk) ? (0, Ti.h)(Number(kk)) : void 0
    }

    function HD(kk) {
      var ek;
      if (kk.startsWith(iD)) {
        var ik;
        const ek = (0, Ni.d)(kk.slice(5));
        return null !== (ik = void 0 === ek ? null : MD(ek)) && void 0 !== ik ? ik : DD.notFoundUrl()
      }
      return null !== (ek = DD.particleUrl(kk)) && void 0 !== ek ? ek : DD.notFoundUrl()
    }

    function wD(kk, ek) {
      return "StairsBlock" === kk ? kk : ek ? "SlabBlock" : "CubeBlock"
    }
    const lD = {
        async blockIcon(kk) {
          var ek;
          let {
            name: Dk,
            size: fk,
            lineWidth: Sk
          } = kk;
          await mD();
          const bk = null !== (ek = UD(Dk)) && void 0 !== ek ? ek : Dk,
            rk = (0, Ji.d)(bk, fk, Sk);
          if (null !== rk) return rk;
          const Pk = Gi(bk),
            mk = (0, Ti.e)(bk),
            Mk = void 0 === mk || null === fD ? void 0 : fD.itemTypeNameOf(mk);
          if (null === DD || void 0 === Pk) return "";
          const Kk = [Pk.top, Pk.left, Pk.right].some((kk => null === KD(kk))),
            xk = Kk ? await (bD ??= ik.e(206).then((() => ik(33856))).then((kk => (rD && (rD = !1, (0, ai.c)()), {
              rotated: kk.rotatedBlockTextures,
              animated: kk.animatedBlockTextures
            })), (kk => (bD = null, rD = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", kk), null))), bD) : null;
          if (Kk && null === xk) return "";
          const nk = {
              top: nD(Pk.top, xk),
              left: nD(Pk.left, xk),
              right: nD(Pk.right, xk),
              itemType: wD(Mk, Pk.half)
            },
            Uk = (0, kD.e)(),
            Hk = 0 === Uk ? bk : `${bk}#${Uk}`;
          return (await (0, Ri.e)()).drawBlockIconUrl(Hk, fk, Sk, (() => nk))
        }
      },
      pD = {
        itemIcon: function(kk) {
          var ek, ik, fk, Sk;
          if (null === DD) return mD(), Dk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          if ((0, Bi.i)(kk)) return {
            kind: "icon",
            url: null !== (ik = null !== (fk = null === (Sk = (0, kD.f)()) || void 0 === Sk ? void 0 : Sk.textureUrl(kk)) && void 0 !== fk ? fk : DD.ingameIconUrl(kk)) && void 0 !== ik ? ik : DD.notFoundUrl()
          };
          if (kk.startsWith(Bi.c)) return {
            kind: "icon",
            url: HD(kk.slice(Bi.c.length))
          };
          if (0 === (0, Ti.l)()) return (0, ci.c)(), Dk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          const bk = null !== (ek = UD(kk)) && void 0 !== ek ? ek : kk,
            rk = (0, Ti.e)(bk),
            Pk = void 0 === rk ? void 0 : fD.itemTypeNameOf(rk);
          if (void 0 !== Gi(bk)) return {
            kind: "drawnBlock"
          };
          const mk = function(kk) {
            var ek;
            return null !== (ek = MD(xD(kk))) && void 0 !== ek ? ek : DD.notFoundUrl()
          }(bk);
          if ((0, Ji.e)(bk) && ! function(kk) {
              const ek = (0, kD.f)();
              return null !== ek && (null !== ek.textureUrl(xD(kk)) || null !== ek.modelUrl(kk))
            }(bk)) return {
            kind: "model",
            url: mk
          };
          if ("Gun" === Pk) return {
            kind: "gun",
            url: mk
          };
          if (void 0 !== rk && "GrayscaleArmour" === fD.itemTypeOf(rk) || Object.hasOwn(Xi.c, bk)) {
            var Mk;
            const ek = null !== (Mk = (0, Xi.e)(kk)) && void 0 !== Mk ? Mk : (0, Xi.e)(bk);
            if (ek) return {
              kind: "item",
              url: mk,
              tint: ek
            }
          }
          return {
            kind: "item",
            url: mk
          }
        },
        hasIcon: function(kk) {
          return void 0 !== UD(kk) || (0, Bi.i)(kk) || kk.startsWith(Bi.c)
        },
        isItemName: function(kk) {
          return void 0 !== UD(kk)
        }
      };
    var yD = ik(585),
      YD = ik(39187);

    function LD(kk) {
      if (null === kk || void 0 === kk || !kk.isCoreRunning) return null;
      const {
        api: ek,
        chunks: ik,
        items: Dk,
        tables: fk
      } = kk;
      return {
        playerFeet() {
          const kk = ek.vy(ek.localId);
          return null !== kk && void 0 !== kk && kk.every(Number.isFinite) ? kk : null
        },
        chunkBlocks: kk => ik.isLoaded(kk[0], kk[1], kk[2]) ? (kk, ek, Dk) => ik.wP(kk, ek, Dk) : null,
        blockName: kk => fk.nameOfId(kk),
        inventory: () => ({
          slots: Dk.playerItems().map((kk => kk ? {
            name: kk.name,
            amount: kk.amount
          } : null)),
          heldSlot: Dk.selectedSlot
        }),
        nearby() {
          const ik = [];
          for (let fk = 0; fk < ek.idStr.length; fk++) {
            var Dk;
            const Sk = ek.idStr[fk],
              bk = ek.serverIds[fk],
              rk = ek.kinds[fk];
            if (null === Sk || ek.isLocal(bk) || rk >>> Yk.c !== Yk.s.Lifeform) continue;
            const Pk = ek.vy(bk),
              mk = yD.n[rk & Yk.e];
            Pk && void 0 !== mk && ik.push({
              kind: "Player" === mk ? "player" : mk,
              name: null !== (Dk = kk.clientApi.getEntityName(Sk)) && void 0 !== Dk ? Dk : null,
              position: Pk
            })
          }
          return ik
        },
        droppedItems() {
          let kk = 0;
          for (let ik = 0; ik < ek.idStr.length; ik++) null !== ek.idStr[ik] && ek.kinds[ik] >>> Yk.c === Yk.s.Item && kk++;
          return kk
        }
      }
    }
    const CD = {
        worldCodeAiChunk: kk => Promise.resolve((0, YD.d)(LD((0, bk.g)()), kk)),
        worldCodeAiGameState: () => Promise.resolve((0, YD.h)(LD((0, bk.g)())))
      },
      AD = function(kk) {
        const ek = Mi(),
          Dk = Mi(),
          fk = new Set,
          Sk = new Set,
          bk = () => {
            var ek, ik;
            return null !== (ek = null === (ik = kk.runtime()) || void 0 === ik ? void 0 : ik.currentViewer) && void 0 !== ek ? ek : null
          };
        let rk = null,
          Pk = null;
        const Mk = (kk, ek) => ({
            current: kk,
            watch(ik) {
              let Dk = kk();
              return ek.add((() => {
                const ek = kk();
                ek !== Dk && (Dk = ek, ik(ek))
              }))
            }
          }),
          xk = kk => ({
            watch: ek => (kk.add(ek), () => {
              kk.delete(ek)
            })
          }),
          nk = kk => {
            const ek = bk(),
              ik = null === ek || void 0 === ek ? void 0 : ek.view;
            ek && ik && ek.seek(Math.max(0, Math.min(ik.totalTicks - 1, ik.Px + kk * Kk.Kd)))
          },
          Uk = {
            replay: Mk((() => {
              var kk;
              const ek = bk(),
                ik = null !== (kk = null === ek || void 0 === ek ? void 0 : ek.view) && void 0 !== kk ? kk : null;
              return null === ek || null === ik || ik.state === Kk.xd.None ? (rk = null, null) : (rk = (0, Rk.r)(rk, {
                id: ek.id,
                Px: ik.Px,
                totalTicks: ik.totalTicks,
                uF: Kk.Kd,
                playing: ik.state === Kk.xd.Playing,
                speed: ik.speed,
                cameraMode: ik.cameraMode,
                freecam: "freecam" === ik.cameraMode
              }), rk)
            }), ek),
            replayEdits: Mk((() => {
              var kk;
              const ek = bk(),
                ik = null !== (kk = null === ek || void 0 === ek ? void 0 : ek.view) && void 0 !== kk ? kk : null;
              return null === ek || null === ik || ik.state === Kk.xd.None ? (Pk = null, null) : (Pk = (0, Rk.r)(Pk, {
                cameraKeyframes: [...ek.keyframes],
                playbackMark: ik.mark,
                fileName: ek.fileName,
                unsavedChanges: ek.unsavedChanges,
                suggestSaveAs: ek.suggestSaveAs
              }), Pk)
            }), ek),
            replayRecorder: Mk((() => {
              var ek, ik;
              return null !== (ek = null === (ik = kk.runtime()) || void 0 === ik ? void 0 : ik.recorder.current) && void 0 !== ek ? ek : ri.e.states.replayRecorder.current()
            }), Dk),
            replayVideoExporting: {
              current: Si.c,
              watch: kk => (0, mk.k)("replayViewer|videoExportChanged", (() => {
                kk((0, Si.c)())
              }))
            }
          },
          Hk = {
            replayUiActionRequested: xk(Sk),
            replayViewerRequested: xk(fk)
          },
          wk = kk => {
            for (const ek of fk) ek(kk)
          },
          lk = () => {
            var Dk;
            !0 === (null === (Dk = bk()) || void 0 === Dk ? void 0 : Dk.isOpen) && Promise.all([ik.e(96), ik.e(66)]).then((() => ik(59987))).then((ik => {
              let {
                startWasmReplayVideoExport: Dk
              } = ik;
              return Dk({
                viewer: bk,
                canvas: () => {
                  var ek, ik;
                  return null !== (ek = null === (ik = kk.canvas) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : null
                },
                watchViewer: ek.add,
                requestViewer: wk
              })
            }), (kk => {
              console.error("Couldn't load the video export", kk), bi.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((kk => {
              console.error("The video export failed", kk)
            }))
          },
          pk = {
            replayAction(kk) {
              if ((0, Si.c)()) return;
              const ek = bk();
              switch (kk) {
                case "replaySkipBack":
                  nk(-1);
                  break;
                case "replaySkipForward":
                  nk(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== ek && void 0 !== ek && ek.view && ek.setSpeed((0, fi.m)(ek.view.speed, "replaySpeedUp" === kk ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === ek || void 0 === ek || ek.addKeyframe()
              }
            },
            setReplayPlaying(kk) {
              var ek, ik;
              (0, Si.c)() || (kk ? null === (ek = bk()) || void 0 === ek || ek.play() : null === (ik = bk()) || void 0 === ik || ik.pause())
            },
            seekReplay(kk) {
              var ek;
              let {
                Px: ik,
                ignorePlaybackMark: Dk
              } = kk;
              null === (ek = bk()) || void 0 === ek || ek.seek(ik, null !== Dk && void 0 !== Dk && Dk)
            },
            setReplayCameraMode(kk) {
              var ek;
              null === (ek = bk()) || void 0 === ek || ek.setCameraMode(kk)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(kk) {
              var ek;
              null === (ek = bk()) || void 0 === ek || ek.setKeyframe(kk)
            },
            moveReplayCameraKeyframe(kk) {
              var ek;
              let {
                from: ik,
                to: Dk
              } = kk;
              null === (ek = bk()) || void 0 === ek || ek.moveKeyframe(ik, Dk)
            },
            deleteReplayCameraKeyframes(kk) {
              var ek;
              let {
                start: ik,
                end: Dk
              } = kk;
              null === (ek = bk()) || void 0 === ek || ek.deleteKeyframes(ik, Dk)
            },
            setReplayPlaybackMark(kk) {
              var ek;
              null === (ek = bk()) || void 0 === ek || ek.setMark(kk)
            },
            cropReplay(kk) {
              var ek, ik;
              let {
                start: Dk,
                end: fk
              } = kk;
              return !(0, Si.c)() && (null !== (ek = null === (ik = bk()) || void 0 === ik ? void 0 : ik.crop(Dk, fk)) && void 0 !== ek && ek)
            },
            holdReplayForShaderPackFailure(kk) {
              const ek = bk();
              ek && (ek.holdForShaderPackFailure(), function(kk) {
                ik.e(115).then((() => ik(38787))).then((ek => {
                  let {
                    shaderPackPage: ik
                  } = ek;
                  ik.block(kk)
                })).catch((kk => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", kk)
                }))
              }(kk))
            },
            exportReplayVideo() {
              lk()
            },
            toggleRecording() {
              var ek;
              null === (ek = kk.runtime()) || void 0 === ek || ek.recorder.toggleRecording()
            },
            saveClip() {
              var ek;
              null === (ek = kk.runtime()) || void 0 === ek || ek.recorder.saveClip()
            },
            setRecorderPrefs(ek) {
              var ik;
              let {
                clipping: Dk,
                clipSeconds: fk
              } = ek;
              null === (ik = kk.runtime()) || void 0 === ik || ik.recorder.setPrefs(Dk, fk)
            },
            setReplayViewerOpen(ek) {
              var ik;
              (0, le.g)(ek) && (null === (ik = kk.runtime()) || void 0 === ik || ik.recorder.viewerShown(ek))
            },
            recordFlyingMiddleText(ek) {
              var ik;
              let {
                content: Dk,
                Ke: fk,
                angle: Sk,
                xe: bk
              } = ek;
              null === (ik = kk.runtime()) || void 0 === ik || ik.recorder.recordFlyingText(JSON.stringify(Dk), fk, Sk, bk)
            },
            dragReplayCamera(ek) {
              var ik;
              let {
                dx: Dk,
                dy: fk
              } = ek;
              null === (ik = kk.freecam()) || void 0 === ik || ik.drag(Dk, fk)
            },
            moveReplayFreecam(ek) {
              var ik;
              null === (ik = kk.freecam()) || void 0 === ik || ik.move(ek)
            },
            holdReplayFreecamVertical(ek) {
              var ik;
              let {
                action: Dk,
                XM: fk
              } = ek;
              null === (ik = kk.freecam()) || void 0 === ik || ik.holdVertical(Dk, fk)
            }
          },
          yk = kk => {
            var ek;
            const ik = bk(),
              Dk = null !== (ek = null === ik || void 0 === ik ? void 0 : ik.view) && void 0 !== ek ? ek : null;
            Pi.has(kk) ? (kk => {
              for (const ek of Sk) ek(kk)
            })(kk) : mi.has(kk) ? pk.replayAction(kk) : "replayPlayPause" === kk ? ik && Dk && Dk.state !== Kk.xd.None && pk.setReplayPlaying(Dk.state !== Kk.xd.Playing) : "replayChangeCameraMode" === kk ? null === ik || void 0 === ik || ik.cycleCameraMode() : "replayExit" === kk ? !0 === (null === ik || void 0 === ik ? void 0 : ik.inPlayback) && (0, ve.k)("/") : "replayExportVideo" === kk && lk()
          };
        let Yk = !1;
        return {
          states: Uk,
          events: Hk,
          commands: pk,
          lookups: {
            replayCamera() {
              var ek, ik, Dk;
              return !0 !== (null === (ek = bk()) || void 0 === ek ? void 0 : ek.isOpen) ? null : null !== (ik = null === (Dk = kk.cameraView) || void 0 === Dk ? void 0 : Dk.call(kk)) && void 0 !== ik ? ik : null
            },
            leaveGameReloadsPage() {
              var kk;
              return !0 === (null === (kk = bk()) || void 0 === kk ? void 0 : kk.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var kk;
              const ik = !0 === (null === (kk = bk()) || void 0 === kk ? void 0 : kk.inPlayback);
              ik !== Yk && (Yk = ik, mk.j.tm("connectedGameChanged")), ek.fire()
            },
            recorderChanged: Dk.fire,
            keyDown: kk => {
              var ek;
              switch (kk) {
                case "recordGame":
                  return void pk.toggleRecording();
                case "recordClip":
                  return void((0, le.c)() || pk.saveClip())
              }(0, Si.c)() || ("replayViewerOpen" !== kk ? kk.startsWith("replay") && ((0, le.c)() || !0 === (null === (ek = bk()) || void 0 === ek ? void 0 : ek.inPlayback)) && yk(kk) : wk("toggle"))
            }
          }
        }
      }({
        runtime: fk.n,
        cameraView: () => {
          var kk;
          const ek = null === (kk = (0, bk.g)()) || void 0 === kk ? void 0 : kk.renderFrame;
          if (!ek) return null;
          const [ik, Dk, fk] = ek.cameraPosition, [Sk, rk, Pk] = ek.cameraDirection;
          return {
            position: [ik, Dk, fk],
            direction: [Sk, rk, Pk]
          }
        },
        canvas: () => {
          var kk, ek, ik;
          return null !== (kk = null === (ek = (ik = (0, Sk.J)()).canvas) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : null
        },
        freecam: fk.j
      }),
      jD = {
        states: {
          ...Me,
          ...Ue.i,
          ...AD.states,
          ...ni,
          ...Xk
        },
        events: {
          ...Ke,
          ...wk,
          ...Ue.e,
          ...dk.d,
          ...Fi.j,
          ...AD.events,
          ...Ui,
          ...sk.g
        },
        commands: {
          ...jk,
          ...xe,
          ...lk,
          ...Ue.d,
          ...Ne,
          ...Vi,
          ...sk.f,
          ...ae,
          ...AD.commands,
          ...Ci,
          ...Bk,
          ...Ei,
          ...He
        },
        queries: {
          ...Ue.f,
          ...CD
        },
        lookups: {
          ...ne,
          ...vk,
          ...Fi.l,
          ...AD.lookups,
          ...Ak,
          ...Di,
          ...vi,
          ...ck
        }
      };

    function sD() {
      (0, rk.h)(Hk.n), (0, fk.p)(AD.feed), (0, dk.f)(), Re || (Re = !0, (0, Hk.m)(qk.l, (kk => {
        const ek = (0, zk.i)(qk.l, kk);
        "string" === typeof ek && Promise.resolve().then((() => ik(3608))).then((kk => {
          let {
            onCosmeticPackGranted: ik
          } = kk;
          ik(ek)
        }))
      })), (0, Hk.m)(qk.eb, (kk => {
        const ek = (0, zk.i)(qk.eb, kk);
        "number" === typeof ek && mk.j.tm("serverUpdating", Date.now() + ek, !0)
      })), (0, Hk.m)(qk.K, (kk => {
        const ek = (0, zk.i)(qk.K, kk);
        if ((0, zk.e)(ek)) {
          const {
            Ne: kk,
            Je: ik
          } = ek;
          (0, ge.e)({
            Ne: "string" === typeof kk ? kk : null,
            Je: "string" === typeof ik ? ik : null
          })
        }
      })), (0, Hk.m)(Mk.tc.NewUiRequest, (kk => {
        const ek = (0, zk.k)(kk);
        (0, zk.e)(ek) && "number" === typeof ek.id && (0, zk.e)(ek.clientParameters) && (0, Ge.e)(ek.id, ek.clientParameters)
      })), (0, Hk.m)(qk.X, (kk => {
        const ek = (0, zk.i)(qk.X, kk);
        "number" === typeof ek && (0, Ge.f)(ek)
      })), (0, Hk.k)(Ge.d), (0, Hk.m)(Mk.tc.UiRequestPopup, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek) && "number" === typeof ek.id && "string" === typeof ek.text) {
          const kk = ek.id;
          (0, Ge.h)(kk, ek.text, (ek => {
            Ne.answerUiRequest({
              id: kk,
              PP: ek
            })
          }))
        }
      })), (0, Hk.m)(Mk.tc.TopRightHelper, (kk => {
        const ek = (0, zk.k)(kk);
        void 0 !== ek && mk.j.tm("TopRightHelper", ek, !0)
      })), (0, Hk.m)(Mk.tc.TaskProgress, (kk => {
        const ek = (0, zk.k)(kk);
        (0, zk.e)(ek) && "string" === typeof ek.taskId && "number" === typeof ek.progress && (0, Oe.b)({
          taskId: ek.taskId,
          progress: ek.progress
        })
      }))), Ai || (Ai = !0, (0, Hk.m)(qk.u, (kk => {
        const ek = (0, zk.i)(qk.u, kk);
        (0, zk.e)(ek) && mk.j.tm("showShopFromServer", {
          toggle: ek.ib,
          Db: ek.Db
        }, !0)
      })), (0, Hk.m)(Mk.tc.OverShopInfo, (kk => {
        const ek = (0, zk.k)(kk);
        (0, zk.e)(ek) && mk.j.tm("overShopInfo", ek.info, !0)
      })), (0, Hk.m)(Mk.tc.ShowShopTutorial, (() => {
        mk.j.tm("showShopTutorial", null, !0)
      }))), Yi || (Yi = !0, (0, Hk.g)((() => {
        var kk;
        (0, Hi.z)(), null === (kk = Li) || void 0 === kk || kk(), Li = (0, Hk.e)() ? (0, li.h)(Hk.e) : null, (0, Hk.e)() || mk.j.Tl()
      })), (0, Hk.m)(Mk.tc.SetCookie, (kk => {
        const ek = (0, zk.k)(kk),
          ik = (0, ve.c)().gameNameWithVariation;
        (0, zk.e)(ek) && "string" === typeof ek.key && null !== ik && (0, wi.setCookie)(ik, ek.key, ek.value)
      })), (0, Hk.m)(Mk.tc.LeaveValues, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek) && "string" === typeof ek.leaveEventType) {
          const {
            leaveEventType: kk,
            category: ik,
            subCategory: Dk,
            value: fk
          } = ek;
          (0, Hi.C)({
            leaveEventType: kk,
            category: ik,
            subCategory: Dk,
            value: fk
          })
        }
      })), (0, Hk.m)(Mk.tc.CustomAnalyticsEvent, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek) && "string" === typeof ek.cat1) {
          const {
            cat1: kk,
            cat2: ik,
            cat3: Dk,
            value: fk
          } = ek;
          (0, Hi.n)({
            cat1: kk,
            cat2: ik,
            cat3: Dk,
            value: fk
          })
        }
      })), (0, Hk.m)(Mk.tc.ProgressionEvent, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek)) {
          const {
            type: kk,
            location1: ik,
            location2: Dk,
            location3: fk,
            score: Sk
          } = ek;
          (0, Hi.r)({
            type: kk,
            location1: ik,
            location2: Dk,
            location3: fk,
            score: Sk
          })
        }
      })), (0, Hk.m)(Mk.tc.ResourceEvent, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek)) {
          const {
            type: kk,
            resourceType: ik,
            amount: Dk,
            category: fk,
            itemName: Sk
          } = ek;
          (0, Hi.s)({
            type: kk,
            resourceType: ik,
            amount: Dk,
            category: fk,
            itemName: Sk
          })
        }
      })), (0, Hk.m)(Mk.tc.LeaderboardResponse, (kk => {
        const ek = (0, zk.k)(kk);
        if ((0, zk.e)(ek)) {
          const {
            category: kk,
            timeframe: ik,
            data: Dk
          } = ek;
          mk.j.tm("leaderboardResponse", {
            category: kk,
            timeframe: ik,
            data: Dk
          })
        }
      })), (0, Hk.m)(qk.D, (kk => {
        const ek = (0, zk.i)(qk.D, kk);
        "string" === typeof ek && (0, yi.d)(kk.conn, ek)
      })), (0, Hk.m)(qk.G, (kk => {
        const ek = (0, zk.i)(qk.G, kk);
        "string" === typeof ek && console.error(`[logErrorToConsole]: ${ek}`)
      }))), hk(), (0, Fi.b)(), he || (he = !0, (0, Hk.m)(qk.i, (kk => {
        const ek = (0, zk.i)(qk.i, kk);
        void 0 !== ek && (0, Ee.h)(ek)
      }))), Ze(), ue(), Ok || (Ok = !0, (0, Sk.v)(gk)), Dk.gameBridge.attach(jD), (0, Dk.installPageSources)({
        commands: {
          ...Dk.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Wi.h
        },
        queries: lD,
        lookups: {
          ...Dk.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...pD,
          fY: Wi.d,
          drawCallStats: ti.i
        }
      }), (0, ai.c)(), mD()
    }
  },
  40550: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      e: () => Pk,
      f: () => rk,
      i: () => mk
    });
    var Dk = ik(1903);
    let fk = null,
      Sk = 0;
    const bk = new Set;

    function rk() {
      return fk
    }

    function Pk() {
      return Sk
    }

    function mk(kk) {
      fk = kk, Sk++, (0, Dk.c)();
      for (const ek of bk) ek()
    }

    function Mk(kk) {
      bk.add(kk)
    }
  },
  40625: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      g: () => rk
    });
    var Dk = ik(40630);
    let fk = null,
      Sk = null;

    function bk() {
      return fk ??= ik.e(61).then((() => ik(59999))).catch((kk => {
        throw fk = null, kk
      })), fk
    }

    function rk() {
      return Sk ??= Promise.all([bk(), (0, Dk.f)()]).then((kk => {
        let [ek] = kk;
        return ek
      }), (kk => {
        throw Sk = null, kk
      })), Sk
    }
  },
  36668: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    const Dk = {
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
  36463: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Mk,
      E: () => bk,
      e: () => fk,
      h: () => Sk,
      l: () => xk,
      p: () => rk,
      t: () => Pk,
      x: () => mk,
      z: () => Kk
    });
    var Dk = ik(1218);
    let fk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      Sk = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function bk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function rk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Dk.i
      };
      if (kk.startsWith("lobby:")) {
        const ek = kk.slice(6);
        return Kk(ek) ? {
          kind: "lobby",
          path: ek
        } : null
      }
      const ek = kk.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ek ? {
        kind: "codeBlock",
        pos: [parseInt(ek[1]), parseInt(ek[2]), parseInt(ek[3])]
      } : null
    }

    function Pk(kk) {
      return kk.endsWith(".d.ts")
    }

    function mk(kk) {
      return kk.endsWith(".ts") && !Pk(kk)
    }
    const Mk = 64;

    function Kk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > Mk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!Pk(kk) && !mk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const ek = kk.split("/");
      for (const ik of ek)
        if ("" === ik || "." === ik || ".." === ik) return !1;
      return !0
    }
    const xk = 14e3
  },
  38612: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      h: () => fk
    });
    const Dk = ["description", "label"];

    function fk(kk) {
      const ek = kk.type;
      return {
        type: ek,
        params: kk[ek]
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);