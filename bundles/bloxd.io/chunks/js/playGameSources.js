export const id = 46;
export const ids = [46];
export const modules = {
  39626: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak,
      h: () => ik,
      j: () => Tk
    });
    const Xk = 6e3;

    function Tk(kk, Fk) {
      return [Math.floor(kk[0] / Fk) * Fk, Math.floor(kk[1] / Fk) * Fk, Math.floor(kk[2] / Fk) * Fk]
    }

    function ik(kk) {
      const Fk = (null !== kk && void 0 !== kk ? kk : "").match(/-?\d+(?:\.\d+)?/g);
      return Fk && Fk.length >= 3 ? [Number(Fk[0]), Number(Fk[1]), Number(Fk[2])] : null
    }

    function yk(kk, Fk) {
      return kk === Fk ? String(kk) : `${kk}-${Fk}`
    }

    function lk(kk, Fk, Ik, Xk) {
      const Tk = [];
      let ik = new Map;
      for (let yk = kk[2]; yk < kk[2] + Fk; yk++) {
        const lk = new Map;
        let ak = kk[0];
        for (; ak < kk[0] + Fk;) {
          const Tk = Xk(ak, Ik, yk);
          let qk = ak;
          for (; qk + 1 < kk[0] + Fk && Xk(qk + 1, Ik, yk) === Tk;) qk++;
          if (null !== Tk) {
            const kk = `${ak} ${qk} ${Tk}`,
              Fk = ik.get(kk);
            Fk ? (Fk.z1 = yk, ik.delete(kk), lk.set(kk, Fk)) : lk.set(kk, {
              x0: ak,
              x1: qk,
              z0: yk,
              z1: yk,
              name: Tk
            })
          }
          ak = qk + 1
        }
        Tk.push(...ik.values()), ik = lk
      }
      return Tk.push(...ik.values()), Tk.sort(((kk, Fk) => kk.z0 - Fk.z0 || kk.x0 - Fk.x0)).map((kk => `x${yk(kk.x0,kk.x1)} z${yk(kk.z0,kk.z1)} ${kk.name}`))
    }

    function ak(kk, Fk, Ik, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xk;
      const ak = [kk[0] + Fk - 1, kk[1] + Fk - 1, kk[2] + Fk - 1],
        qk = null !== Tk && Tk.every(((Fk, Ik) => Math.floor(Fk) >= kk[Ik] && Math.floor(Fk) <= ak[Ik])),
        Lk = [`The chunk from ${kk.join(" ")} to ${ak.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Tk && Lk.push(`The player's feet are at ${Tk.map(Math.floor).join(" ")}, ${qk?"in this chunk":"outside this chunk"}.`);
      const tk = [];
      for (let Xk = kk[1]; Xk <= ak[1]; Xk++) {
        const Tk = lk(kk, Fk, Xk, Ik).join("; "),
          ik = tk[tk.length - 1];
        (null === ik || void 0 === ik ? void 0 : ik.boxes) === Tk ? ik.to = Xk : tk.push({
          from: Xk,
          to: Xk,
          boxes: Tk
        })
      }
      const Zk = tk.filter((kk => "" !== kk.boxes));
      0 === Zk.length && Lk.push("It is all air.");
      let jk = Lk.join("\n").length;
      for (const Xk of Zk) {
        const kk = `y${yk(Xk.from,Xk.to)}: ${Xk.boxes}`;
        if (jk += kk.length + 1, jk > ik) {
          Lk.push(`Cut short: the layers from y${Xk.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Lk.push(kk)
      }
      return Lk.join("\n")
    }
  },
  8778: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(25);

    function Tk() {
      return !Xk.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36990: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk,
      h: () => ik,
      i: () => Tk
    });
    const Xk = [.25, .5, 1, 2, 4, 8, 16];

    function Tk(kk, Fk) {
      const Ik = Xk;
      let Tk = Ik.indexOf(kk);
      return -1 === Tk && (Tk = Ik.findIndex((Fk => Fk >= kk)), -1 === Tk && (Tk = Ik.length - 1)), "up" === Fk ? Ik[Math.min(Tk + 1, Ik.length - 1)] : Ik[Math.max(Tk - 1, 0)]
    }

    function ik(kk) {
      return kk <= Xk[0]
    }

    function yk(kk) {
      return kk >= Xk[Xk.length - 1]
    }
  },
  36498: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => ik
    });
    let Xk = !1;

    function Tk() {
      return Xk
    }

    function ik(kk) {
      return Xk !== kk && (Xk = kk, !0)
    }
  },
  39011: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(34),
      Tk = Ik(1894);

    function ik(kk) {
      let {
        taskId: Fk,
        progress: Ik
      } = kk;
      const Xk = Tk.e.get("_tasks");
      null !== Xk && void 0 !== Xk && Xk[Fk] && Tk.e.apply({
        _tasks: {
          ...Xk,
          [Fk]: {
            ...Xk[Fk],
            progress: Ik
          }
        }
      })
    }
    Xk.g.subscribe("clientTaskProgress", (kk => {
      ik(kk)
    }))
  },
  39601: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      g: () => ek,
      k: () => qk,
      o: () => tk,
      s: () => ak,
      t: () => yk,
      w: () => Lk,
      x: () => wk
    });
    var Xk = Ik(1894),
      Tk = Ik(34),
      ik = Ik(1905);
    const yk = (0, ik.p)((function() {
        var kk, Fk, Ik, Tk;
        return {
          health: null !== (kk = Xk.e.get("_health")) && void 0 !== kk ? kk : null,
          maxHealth: null !== (Fk = Xk.e.get("_totalMaxHealth")) && void 0 !== Fk ? Fk : null,
          shield: null !== (Ik = Xk.e.get("_shield")) && void 0 !== Ik ? Ik : null,
          maxShield: null !== (Tk = Xk.e.get("maxShield")) && void 0 !== Tk ? Tk : null
        }
      }), [], (0, ik.n)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      lk = [{
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

    function ak(kk, Fk) {
      return lk[(kk ? 2 : 0) + (Fk ? 1 : 0)]
    }
    const qk = (0, ik.p)((function() {
      var kk;
      return null !== (kk = Xk.e.get("_aura")) && void 0 !== kk ? kk : null
    }), [], (0, ik.n)("_aura"));

    function Lk(kk) {
      return {
        watch: Fk => (0, Tk.i)("shotPlayer", (Ik => {
          let {
            playerId: Xk,
            damage: Tk,
            wasCrit: ik,
            distance: yk
          } = Ik;
          kk(Xk) && Fk({
            damage: Tk,
            wasCrit: ik,
            distance: yk
          })
        }))
      }
    }

    function tk(kk) {
      return (0, ik.c)("chat", (Fk => {
        let {
          serverChatMsgId: Ik,
          content: Xk,
          chatterEId: Tk
        } = Fk;
        return {
          serverChatMsgId: null !== Ik && void 0 !== Ik ? Ik : null,
          content: Xk,
          author: Tk ? kk(Tk) : null
        }
      }))
    }
    class Zk {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Ik = this.shown;
        return kk !== this.needed && (this.needed = kk, this.neededSince = Fk, null === kk && (this.shown = null)), this.shown !== this.needed && Fk - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Ik
      }
    }

    function jk(kk) {
      return [{
        translationKey: `touchKeys:${kk}`
      }]
    }
    const ek = {
      open: jk("open"),
      close: jk("close"),
      milk: jk("milk"),
      shear: jk("shear"),
      tame: jk("tame"),
      feed: jk("feed"),
      ride: jk("ride")
    };

    function wk(kk) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: kk
      }]
    }
  },
  41060: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      i: () => yk
    });
    var Xk = Ik(3237);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Ik.e(212).then((() => Ik(36311))).then((kk => {
        let {
          ITEM_SPRITES: Fk,
          ITEM_SPRITES_WITHOUT_FILE: Ik,
          ITEM_FILES_WITHOUT_SPRITE: ik
        } = kk;
        Tk = function(kk, Fk, Ik) {
          const Tk = new Set,
            ik = (0, Xk.s)(Fk);
          let yk = 0;
          for (const [Xk, lk] of kk.entries()) Xk === ik[yk] ? yk++ : Tk.add(lk);
          if ("" !== Ik)
            for (const lk of Ik.split(Xk.o)) Tk.add(lk);
          return Tk
        }(Fk.split(Xk.o), Ik, ik)
      }), (kk => {
        throw ik = null, kk
      })), ik
    }

    function lk(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = Tk) || void 0 === Ik ? void 0 : Ik.has(kk)) && void 0 !== Fk && Fk
    }
  },
  39616: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      c: () => ik,
      e: () => Tk
    });
    const Xk = 128;

    function Tk(kk, Fk, Ik, Xk) {
      const Tk = 2 * Fk - 1,
        ik = 1 - 2 * Ik,
        yk = kk(0) - Tk * kk(3),
        lk = kk(4) - Tk * kk(7),
        ak = kk(8) - Tk * kk(11),
        qk = kk(1) - ik * kk(3),
        Lk = kk(5) - ik * kk(7),
        tk = kk(9) - ik * kk(11);
      Xk[0] = lk * tk - ak * Lk, Xk[1] = ak * qk - yk * tk, Xk[2] = yk * Lk - lk * qk;
      const Zk = Xk[0] * kk(3) + Xk[1] * kk(7) + Xk[2] * kk(11) < 0 ? -1 : 1,
        jk = Math.hypot(Xk[0], Xk[1], Xk[2]) * Zk;
      return Xk[0] /= jk, Xk[1] /= jk, Xk[2] /= jk, Xk
    }

    function ik(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = [Math.floor(Fk[0]), Math.floor(Fk[1]), Math.floor(Fk[2])],
        lk = [0, 0, 0],
        ak = [1 / 0, 1 / 0, 1 / 0],
        qk = [1 / 0, 1 / 0, 1 / 0];
      for (let Zk = 0; Zk < 3; Zk++) lk[Zk] = Math.sign(Ik[Zk]), 0 !== lk[Zk] && (qk[Zk] = Math.abs(1 / Ik[Zk]), ak[Zk] = (yk[Zk] + (lk[Zk] > 0 ? 1 : 0) - Fk[Zk]) / Ik[Zk]);
      let Lk = 0,
        tk = Math.abs(Ik[0]) > Math.abs(Ik[1]) ? 0 : 1;
      for (Math.abs(Ik[2]) > Math.abs(Ik[tk]) && (tk = 2); Lk <= Xk;) {
        if (kk(yk[0], yk[1], yk[2])) return Tk[0] = yk[0], Tk[1] = yk[1], Tk[2] = yk[2], ik[0] = 0, ik[1] = 0, ik[2] = 0, ik[tk] = -lk[tk], !0;
        tk = ak[0] < ak[1] ? 0 : 1, ak[2] < ak[tk] && (tk = 2), Lk = ak[tk], yk[tk] += lk[tk], ak[tk] += qk[tk]
      }
      return !1
    }
  },
  39598: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(1844);

    function Tk(kk, Fk, Ik) {
      return (0, Xk.m)(kk, Fk) < Ik
    }
  },
  38997: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk
    });
    var Xk = Ik(1217),
      Tk = Ik(1308),
      ik = Ik(25),
      yk = Ik(1287),
      lk = Ik(1301),
      ak = Ik(1475),
      qk = Ik(36458);

    function Lk(kk) {
      let {
        OT: Fk,
        nT: Ik
      } = kk;
      const Lk = null !== Fk && void 0 !== Fk ? Fk : (0, lk.d)().gameNameWithVariation;
      (0, Xk.J)(Lk) && ((0, qk.l)(), (0, yk.bb)((() => {
        console.log("Received matchmaking order from game server to game", Fk), (0, ik.h)("inGameReplay"), (0, ak.navigatePreserveSearch)((0, Tk.e)(Lk, null !== Ik && void 0 !== Ik ? Ik : void 0))
      }), "video_start"))
    }
  },
  39190: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(34),
      Tk = Ik(1916);

    function ik(kk) {
      var Fk, Ik;
      const ik = (0, Tk.n)(null !== (Fk = null === (Ik = Tk.s.toggleFreeCam) || void 0 === Ik ? void 0 : Ik[0]) && void 0 !== Fk ? Fk : null);
      Xk.g.GL("showBottomMessage", {
        message: `Free Camera ${kk?"Enabled":"Disabled"}${ik?` - Press ${ik} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38992: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      h: () => yk,
      j: () => lk,
      l: () => qk
    });
    var Xk = Ik(34),
      Tk = Ik(1324);
    const ik = new Map;

    function yk(kk, Fk) {
      Xk.g.GL("newUiRequest", {
        id: kk,
        clientParameters: Fk
      }, !0)
    }

    function lk(kk) {
      Xk.g.GL("removeUiRequest", kk, !0);
      const Fk = ik.get(kk);
      Fk && (Fk.tearDownNotification(), ik.delete(kk))
    }

    function ak() {
      Xk.g.GL("clearUiRequests");
      for (const kk of ik.values()) kk.tearDownNotification();
      ik.clear()
    }

    function qk(kk, Fk, Ik, Xk) {
      const yk = Tk.NotificationProvider.showPromptPopup({
        title: Fk,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: Ik,
        unlockPointerKey: "uiRequestPopup"
      });
      ik.set(kk, yk), yk.getResult().then((Fk => {
        ik.delete(kk), "notificationTornDown" !== Fk && Xk(Fk)
      }))
    }
  },
  39619: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk,
      d: () => Zk
    });
    var Xk = Ik(187),
      Tk = Ik(39626);
    const ik = 20;

    function yk(kk) {
      return kk.map(Math.floor).join(" ")
    }

    function lk(kk) {
      return null === kk.amount || 1 === kk.amount ? kk.name : `${kk.amount} ${kk.name}`
    }
    var ak = Ik(39629),
      qk = Ik(1894),
      Lk = Ik(1301);

    function tk(kk, Fk) {
      if (!kk) return ak.c;
      const Ik = kk.playerFeet();
      if (!Ik) return "The player isn't in the world yet, so no blocks can be seen.";
      const ik = Xk.f.se,
        yk = (0, Tk.j)(null !== Fk && void 0 !== Fk ? Fk : Ik, ik),
        lk = kk.chunkBlocks(yk);
      return lk ? (0, Tk.e)(yk, ik, ((Fk, Ik, Xk) => {
        const Tk = lk(Fk, Ik, Xk);
        return 0 === Tk ? null : kk.blockName(Tk).split("|")[0]
      }), Ik) : `The chunk from ${yk.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Ik.map(Math.floor).join(" ")}.`
    }

    function Zk(kk) {
      var Fk, Ik, Xk;
      if (!kk) return ak.f;
      const Tk = kk.playerFeet();
      if (!Tk) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: tk,
        heldSlot: Zk
      } = kk.inventory();
      return function(kk) {
        const Fk = [];
        null !== kk.game && Fk.push(`Game: ${kk.game}.`);
        const Ik = null === kk.health ? "" : `, health ${Math.round(kk.health)}${null===kk.maxHealth?"":` of ${Math.round(kk.maxHealth)}`}`;
        Fk.push(`The player (the creator) stands at ${yk(kk.position)}${Ik}, ${kk.creative?"in":"not in"} creative mode.`);
        const Xk = kk.slots[kk.heldSlot];
        Fk.push(Xk ? `Holding (slot ${kk.heldSlot}): ${lk(Xk)}.` : `Holding nothing (slot ${kk.heldSlot} is empty).`);
        const Tk = kk.slots.flatMap(((kk, Fk) => kk ? [`slot ${Fk}: ${lk(kk)}`] : []));
        Fk.push(Tk.length > 0 ? `Inventory: ${Tk.join(", ")}.` : "Inventory: empty.");
        const ak = Fk => Math.hypot(Fk.position[0] - kk.position[0], Fk.position[1] - kk.position[1], Fk.position[2] - kk.position[2]),
          qk = [...kk.nearby].sort(((kk, Fk) => ak(kk) - ak(Fk)));
        if (0 === qk.length) Fk.push("No other players or mobs are near enough to see.");
        else {
          Fk.push("Near them, nearest first:");
          for (const kk of qk.slice(0, ik)) {
            const Ik = "player" === kk.kind ? `player "${kk.name||"?"}"` : kk.name && kk.name !== kk.kind ? `${kk.kind} "${kk.name}"` : kk.kind,
              Xk = Math.round(ak(kk));
            Fk.push(`- ${Ik} at ${yk(kk.position)}, ${Xk} block${1===Xk?"":"s"} away`)
          }
          qk.length > ik && Fk.push(`- and ${qk.length-ik} more further away`)
        }
        return kk.droppedItems > 0 && Fk.push(`${kk.droppedItems} dropped item${1===kk.droppedItems?" is":"s are"} on the ground nearby.`), Fk.join("\n")
      }({
        game: null !== (Fk = (0, Lk.d)().gameNameWithVariation) && void 0 !== Fk ? Fk : null,
        position: Tk,
        health: null !== (Ik = qk.e.get("_health")) && void 0 !== Ik ? Ik : null,
        maxHealth: null !== (Xk = qk.e.get("_totalMaxHealth")) && void 0 !== Xk ? Xk : null,
        creative: !0 === qk.e.get("creative"),
        heldSlot: Zk,
        slots: tk,
        nearby: kk.nearby(),
        droppedItems: kk.droppedItems()
      })
    }
  },
  39020: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      f: () => ak,
      g: () => qk
    });
    var Xk = Ik(1217),
      Tk = Ik(1018),
      ik = Ik(36899),
      yk = Ik(34);

    function lk(kk) {
      let {
        lobbyName: Fk,
        gameNameWithVariation: Ik
      } = kk;
      return !(0, Xk.K)(Fk) || null !== Ik && (Ik.startsWith("testGym") || (0, Tk.j)(Ik))
    }

    function ak(kk) {
      return kk.Wi === ik.e.Leave || kk.Wi === ik.e.Cursor
    }

    function qk(kk) {
      yk.g.GL("codeCollab", {
        type: kk.Wi,
        docKey: kk.Bi,
        version: kk.Yi,
        editorCount: kk.Ai,
        peers: kk.gi,
        updates: kk.mi,
        playerId: kk.ri,
        playerName: kk.Di,
        colour: kk.Mi,
        anchor: kk.ky,
        head: kk.Fy,
        existingCursors: kk.Iy,
        files: kk.Xy,
        engineSettings: kk.Ty
      })
    }
  },
  40891: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => uk,
      G: () => rk,
      H: () => Uk,
      I: () => nk,
      M: () => Rk,
      Q: () => Ok,
      U: () => Yk,
      X: () => dk,
      _: () => pk,
      d: () => Ak,
      e: () => Nk,
      h: () => vk,
      l: () => gk,
      n: () => Ek,
      p: () => Sk,
      t: () => Ck,
      x: () => Gk,
      z: () => bk
    });
    var Xk = Ik(1364),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(2331),
      lk = Ik(4814),
      ak = Ik(4792);
    let qk, Lk = !1,
      tk = !1,
      Zk = !1,
      jk = !1;
    const ek = 1300,
      wk = 3e3;
    let Hk = 0,
      Jk = !1,
      xk = !1,
      Pk = 0;
    const Kk = 2;
    let Qk = !1,
      sk = !1;
    const Vk = new Set,
      zk = new Set;

    function Sk() {
      return Lk
    }

    function vk() {
      return xk
    }

    function Ek() {
      return sk
    }

    function Ok() {
      return (0, ik.n)() && !sk
    }

    function nk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk !== sk) {
        sk = kk;
        for (const kk of [...zk]) kk(sk);
        Fk && dk()
      }
    }

    function Gk(kk) {
      return zk.add(kk), () => {
        zk.delete(kk)
      }
    }

    function pk() {
      (0, lk.g)(yk.A.Menu, (0, ik.n)() ? 0 : yk.A.Menu)
    }

    function uk() {
      xk = !1, Pk = 0, pk(), dk()
    }

    function bk(kk) {
      return Vk.add(kk), () => {
        Vk.delete(kk)
      }
    }

    function Rk(kk) {
      tk = !1, kk !== Lk && (Lk = kk, jk = !1, clearTimeout(qk), Zk = !Lk && Qk, Lk ? (Jk = !1, xk = !1, Pk = 0) : Ok() && !Qk && (xk = !0), Qk = !1, Lk && !Ok() && hk(), Dk(), Zk && dk())
    }

    function Uk(kk) {
      kk !== Jk && (Jk = kk, kk || dk())
    }

    function Ck() {
      tk = !1, jk || !0 !== fk() || (jk = !0, clearTimeout(qk), qk = setTimeout(ck, ek))
    }

    function Nk() {
      return (!tk || performance.now() - Hk > wk) && (tk = (0, ak.I)().lockPointer(), Hk = performance.now()), tk
    }

    function ck() {
      Wk() && Bk() && Nk()
    }

    function Wk() {
      return Ok() && !Lk && !Jk && !(0, Xk.f)()
    }

    function fk() {
      var kk;
      return "undefined" === typeof navigator || null === (kk = navigator.userActivation) || void 0 === kk ? void 0 : kk.isActive
    }

    function Bk() {
      return Zk && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== fk()
    }

    function dk() {
      Ok() ? Wk() && !xk && Bk() && Nk() : Lk && !Qk && hk()
    }

    function Yk() {
      xk ? navigator.vendor.startsWith("Apple") ? mk() : Pk = Kk : dk()
    }

    function Ak() {
      Pk > 0 && 0 === --Pk && mk()
    }

    function gk() {
      Pk = 0
    }

    function mk() {
      Wk() && !0 === fk() && Nk()
    }

    function hk() {
      Qk = !0, (0, ak.I)().unlockPointer()
    }

    function rk() {
      tk = !1, Zk = !1, jk = !1, clearTimeout(qk), Jk = !1, xk = !1, Pk = 0, Qk = !1;
      const kk = Lk;
      Lk = !1, kk && Dk()
    }

    function Dk() {
      for (const kk of [...Vk]) kk(Lk);
      Tk.g.GL("pointerLockUpdate", Lk)
    }
  },
  40685: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      f: () => lk,
      g: () => tk,
      j: () => qk,
      n: () => yk,
      q: () => Lk,
      r: () => ak
    });
    let Xk = null,
      Tk = null,
      ik = null;

    function yk(kk) {
      Xk = kk
    }

    function lk() {
      return Xk
    }

    function ak(kk) {
      Tk = kk
    }

    function qk() {
      return Tk
    }

    function Lk(kk) {
      ik = kk
    }

    function tk() {
      return ik
    }

    function Zk() {
      var kk, Fk;
      return !0 === (null === (kk = Tk) || void 0 === kk || null === (Fk = kk.currentViewer) || void 0 === Fk ? void 0 : Fk.inPlayback)
    }
  },
  41011: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      attachPlayGameSources: () => VX,
      playGameSources: () => sX
    });
    var Xk = Ik(1875),
      Tk = Ik(40685),
      ik = Ik(4792),
      yk = Ik(40596),
      lk = Ik(40994),
      ak = Ik(39601),
      qk = Ik(34),
      Lk = Ik(4799),
      tk = Ik(4797),
      Zk = Ik(40623),
      jk = Ik(40658),
      ek = Ik(41020),
      wk = Ik(40636);
    (0, wk.l)(Lk.sc.Chat, (kk => {
      if (kk.payloadKind !== tk.fc.Msgpack) return;
      const Fk = function(kk) {
        if (null === kk || "object" !== typeof kk || !("content" in kk)) return null;
        const {
          chatMsgId: Fk,
          content: Ik,
          chatterEId: Xk
        } = kk;
        return {
          serverChatMsgId: null !== Fk && void 0 !== Fk ? Fk : void 0,
          content: Ik,
          chatterEId: void 0 === Xk || null === Xk ? void 0 : String(Xk)
        }
      }((0, Zk.b)(kk.payload));
      null !== Fk && qk.g.GL("chat", Fk, !0)
    }));
    const Hk = {
        chatReceived: (0, ak.o)((function(kk) {
          var Fk, Ik, Xk;
          return {
            id: kk,
            name: null !== (Fk = ek.f.getName(kk)) && void 0 !== Fk ? Fk : null,
            local: (0, jk.d)() === kk,
            profileEffect: null !== (Ik = null === (Xk = (0, ek.g)(kk)) || void 0 === Xk ? void 0 : Xk.profileEffect) && void 0 !== Ik ? Ik : null
          }
        }))
      },
      Jk = {
        sendChatMessage(kk) {
          var Fk;
          let {
            oq: Ik,
            channelName: Xk
          } = kk;
          null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.clientApi.sendChat(Ik, Xk)
        }
      };
    var xk = Ik(187),
      Pk = Ik(1894),
      Kk = Ik(40583),
      Qk = Ik(39598);
    const sk = [0, 0, 0],
      Vk = {
        codeBlockClickable(kk) {
          var Fk;
          const Ik = (0, yk.k)();
          if (null === Ik || void 0 === Ik || !Ik.isSessionLive) return !1;
          const Xk = Ik.api;
          if (0 !== (Kk.y.playerFlags(Xk.apiView, 0) & Kk.Ed.Crouching)) return !1;
          const Tk = Xk.queries.directorEntity(Xk.localId) >= Kk.tb.BYTES ? Xk.memoryData(Xk.scratch(), Kk.tb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Tk) return !1;
          for (let ik = 0; ik < 3; ik++) sk[ik] = Kk.tb.feet(Tk, 0, ik);
          return sk[1] += Kk.tb.eyeHeight(Tk, 0), (0, Qk.b)(sk, kk, null !== (Fk = Pk.e.get("blockReach")) && void 0 !== Fk ? Fk : xk.f.WH)
        }
      },
      zk = {
        clickCodeBlock(kk) {
          var Fk;
          null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.clickCodeBlock(kk)
        }
      };
    var Sk = Ik(40602),
      vk = Ik(41029),
      Ek = Ik(1018),
      Ok = Ik(39028),
      nk = Ik(4784),
      Gk = Ik(40609),
      pk = Ik(40598),
      uk = Ik(40614);

    function bk(kk) {
      if (null === kk) return null;
      const Fk = [];
      for (const Ik of kk) {
        const kk = Object.keys(Ik)[0];
        if ("OI" === kk) {
          const {
            str: kk,
            style: Xk,
            clickableUrl: Tk
          } = Ik.OI, ik = Object.keys(kk)[0], yk = kk[ik];
          "string" !== ik && "styledEntityName" !== ik && "styledTranslatedText" !== ik || Fk.push({
            str: yk,
            style: Xk,
            clickableUrl: Tk
          })
        } else Fk.push(Ik[kk])
      }
      return Fk
    }
    const Rk = {
      screenPos(kk) {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = (0, yk.k)()) || void 0 === Ik ? void 0 : Ik.renderFrame.projectWorldPosToScreenPos(kk)) && void 0 !== Fk ? Fk : {
          x: 0,
          y: 0
        }
      }
    };
    let Uk = !1;

    function Ck() {
      Uk || (Uk = !0, (0, wk.l)(Lk.sc.ProgressBarUpdate, (kk => {
        const Fk = (0, uk.g)(kk);
        (0, uk.c)(Fk) && qk.g.GL("progressBarUpdate", Fk, !0)
      })), (0, wk.l)(Gk.t, (kk => {
        const Fk = (0, uk.e)(Gk.t, kk);
        Fk && qk.g.GL("middleScreenBarInitiate", {
          duration: Fk.WX,
          fX: Fk.fX,
          horizBarRemOffset: Fk.BX
        }, !0)
      })), (0, wk.l)(Lk.sc.RemoveMiddleScreenBar, (() => {
        qk.g.GL("middleScreenBarRemove")
      })), (0, wk.l)(Gk.W, (kk => {
        const Fk = (0, uk.e)(Gk.W, kk);
        if (Fk) {
          var Ik;
          const kk = Fk.QX ? null === (Ik = (0, yk.k)()) || void 0 === Ik ? void 0 : Ik.renderFrame.projectDirectionToScreenPos(Fk.QX) : void 0;
          qk.g.GL("sendHitmarker", {
            KX: Fk.KX,
            screenPos: kk
          }, !0)
        }
      })), (0, wk.l)(Gk.$, (kk => {
        const Fk = (0, uk.e)(Gk.$, kk);
        if (Fk) {
          const {
            id: kk,
            position: Ik,
            style: Xk,
            ZX: Tk,
            eX: ik
          } = Fk;
          qk.g.GL("setDirectionArrow", {
            id: kk,
            position: Ik,
            style: Xk,
            text: bk(Tk),
            eX: ik
          }, !0)
        }
      })), (0, wk.l)(Gk.f, (kk => {
        const Fk = (0, uk.e)(Gk.f, kk);
        Fk && qk.g.GL("clearDirectionArrow", {
          id: Fk.id
        }, !0)
      })), (0, wk.l)(Gk.p, (kk => {
        const Fk = (0, uk.e)(Gk.p, kk);
        Fk && qk.g.GL("flyingMiddleMessage", {
          content: bk(Fk.Vi),
          zi: Fk.zi,
          Si: Fk.Si
        }, !0)
      })), (0, wk.l)(Lk.sc.WorldVariation, (kk => {
        const Fk = (0, uk.g)(kk);
        if ("string" === typeof Fk) {
          const kk = Fk === Ek.f ? null : {
            message: `Currently loaded as variation: ${Fk}`,
            type: "Warning"
          };
          qk.g.GL("showPermanentBottomMessage", kk, !0)
        }
      })), (0, wk.l)(Gk.G, (kk => {
        const Fk = (0, uk.e)(Gk.G, kk);
        Fk && function(kk, Fk) {
          const {
            type: Ik,
            params: Xk
          } = (0, Ok.e)(Fk), Tk = {
            ...Xk
          };
          for (const ik of Ok.d) Tk[ik] && (Tk[ik] = bk(Tk[ik]));
          nk.b.queueQTE(kk, Ik, Tk).getResult().then((Fk => {
            var Ik;
            "boolean" === typeof Fk && (null === (Ik = (0, yk.k)()) || void 0 === Ik || Ik.send(pk.e.QteResponse, {
              qteId: kk,
              qteResponse: Fk
            }))
          }))
        }(Fk.id, Fk.QI)
      })), (0, wk.l)(Gk.P, (kk => {
        const Fk = (0, uk.e)(Gk.P, kk);
        "number" === typeof Fk && nk.b.cancelQTE(Fk)
      })), (0, wk.f)((() => {
        nk.b.reset()
      })), (0, wk.j)((() => {
        nk.b.reset()
      })), (0, wk.l)(Lk.sc.EditItemCraftingRecipes, (kk => {
        const Fk = (0, uk.g)(kk);
        (0, uk.c)(Fk) && qk.g.GL("craftingRecipesEdited", {
          itemName: Fk.craftingRecipeItemName,
          recipesForItem: Fk.recipesForItem
        })
      })), (0, wk.l)(Gk.N, (kk => {
        const Fk = (0, uk.e)(Gk.N, kk);
        Fk && qk.g.GL("craftingRecipesEdited", {
          itemName: Fk.Ki,
          recipesForItem: []
        })
      })))
    }
    var Nk = Ik(25);
    const ck = [{
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

    function Wk(kk) {
      return Kk.y.playerFlags(kk.api.apiView, 0)
    }
    const fk = {
        freeCamera: (0, jk.b)((kk => () => {
          const Fk = kk.isSessionLive && 0 !== (Wk(kk) & Kk.Ed.FreeCamMoves),
            Ik = kk.freeCameraAllowed() && null === Nk.d.get("scriptedCameraFacing");
          return ck[(Ik ? 2 : 0) + (Fk ? 1 : 0)]
        }), ck[0], (kk => (0, ik.u)(kk)))
      },
      Bk = {
        setFreeCameraMovesFly: kk => {
          var Fk;
          null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.setFreeCameraMovesFly(kk)
        }
      },
      dk = {
        freeCameraPos: () => {
          const kk = (0, yk.k)();
          return null !== kk && void 0 !== kk && kk.isSessionLive && kk.renderFrame.hasView && 0 !== (Wk(kk) & Kk.Ed.FreeCam) ? kk.renderFrame.cameraPosition : null
        }
      };
    var Yk = Ik(39190);
    let Ak = !1,
      gk = !1;

    function mk() {
      const kk = (0, yk.k)();
      if (null === kk || void 0 === kk || !kk.isSessionLive) return void(Ak = !1);
      const Fk = 0 !== (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.FreeCam);
      Fk !== Ak && (Ak = Fk, (0, Yk.c)(Fk))
    }
    var hk = Ik(337),
      rk = Ik(37079),
      Dk = Ik(1905);
    var Mk = Ik(41037),
      kF = Ik(40649);
    const FF = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let IF = "off";

    function XF(kk) {
      var Fk;
      return null === kk ? null : {
        label: null !== (Fk = (0, Mk.c)(kk, "interactionPrompt")) && void 0 !== Fk ? Fk : null
      }
    }
    const TF = new Map([
      [Kk.pc.Open, {
        label: ak.g.open
      }],
      [Kk.pc.Close, {
        label: ak.g.close
      }],
      [Kk.pc.Milk, {
        label: ak.g.milk
      }],
      [Kk.pc.Shear, {
        label: ak.g.shear
      }],
      [Kk.pc.Tame, {
        label: ak.g.tame
      }],
      [Kk.pc.Feed, {
        label: ak.g.feed
      }],
      [Kk.pc.Ride, {
        label: ak.g.ride
      }]
    ]);
    class iF {
      constructor() {
        this.target = FF, this.iL = Kk._c, this.optionName = null, this.pickaxe = new ak.c
      }
      read(kk) {
        var Fk;
        const Ik = Kk.y.targetBlockId(kk.api.apiView, 0);
        Ik !== this.iL && (this.iL = Ik, this.optionName = Ik === Kk._c ? null : `${kk.tables.getMetaInfo(Ik).rootName}CrosshairText`);
        const Xk = null === this.optionName ? null : null !== (Fk = kk.tables.getClientOption(this.optionName)) && void 0 !== Fk ? Fk : null;
        this.pickaxe.update(function(kk, Fk) {
          var Ik, Xk, Tk;
          if (0 === (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.Breaking) || Fk === Kk._c || 0 === Fk) return null;
          const {
            tables: ik
          } = kk;
          if (!0 === ik.getClientOption("creative")) return null;
          const yk = ik.nameOfId(Fk),
            lk = null === (Ik = kk.items.eq()) || void 0 === Ik ? void 0 : Ik.name,
            ak = null !== (Xk = ik.getItemStat(yk, "harvestLevel")) && void 0 !== Xk ? Xk : 0;
          return (0, hk.Ic)({
            blockHarvestType: ik.getDefaultItemStat(yk, "harvestType"),
            blockHarvestLevel: ik.getDefaultItemStat(yk, "harvestLevel"),
            harvestLevel: ak,
            heldToolType: void 0 === lk ? void 0 : ik.getDefaultItemStat(lk, "harvests"),
            heldToolLevel: void 0 === lk ? void 0 : ik.getDefaultItemStat(lk, "level")
          }) && null !== (Tk = rk.n[ak]) && void 0 !== Tk ? Tk : null
        }(kk, Ik)), kk.watchPromptPick(IF);
        const Tk = "touch" === IF ? function(kk) {
          var Fk;
          const Ik = kk.interactLabel;
          return Ik === Kk.pc.Entity ? XF(kk.promptEntity) : Ik === Kk.pc.TameWith ? {
            label: (0, ak.x)(kk.tables.nameOfId(kk.interactIcon))
          } : null !== (Fk = TF.get(Ik)) && void 0 !== Fk ? Fk : null
        }(kk) : XF(kk.promptEntity);
        return this.target = (0, Dk.q)(this.target, {
          interactPrompt: Tk,
          blockText: Xk,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let yF = null;
    const lF = {
      current: () => {
        var kk, Fk;
        return null !== (kk = null === (Fk = yF) || void 0 === Fk ? void 0 : Fk.target) && void 0 !== kk ? kk : FF
      },
      watch: kk => {
        const Fk = new iF;
        yF = Fk;
        const Ik = (0, jk.g)((Ik => {
          let Xk = Fk.read(Ik);
          kk(Xk);
          const Tk = (0, ik.y)((() => {
            const Tk = Fk.read(Ik);
            Tk !== Xk && (Xk = Tk, kk(Tk))
          }));
          return () => {
            Tk(), Ik.watchPromptPick("off")
          }
        }));
        return () => {
          Ik(), yF === Fk && (yF = null)
        }
      }
    };
    let aF = 0,
      qF = 0;
    const LF = {
        health: ak.t,
        aura: ak.k,
        hotbar: kF.c.states.hotbar,
        heldItemAim: kF.c.states.heldItemAim,
        crouching: (0, jk.b)((kk => function(kk) {
          const Fk = () => 0 !== (Kk.y.playerFlags(kk.apiView, 0) & Kk.Ed.Crouching);
          return {
            current: Fk,
            watch(kk) {
              let Ik = Fk();
              return (0, ik.u)((() => {
                const Xk = Fk();
                Xk !== Ik && (Ik = Xk, kk(Xk))
              }))
            }
          }
        }(kk.api).current), !1, (kk => (0, ik.u)(kk))),
        flight: (0, jk.b)((kk => () => function(kk) {
          const Fk = Kk.y.playerFlags(kk.apiView, 0);
          return (0, ak.s)(0 !== (Fk & Kk.Ed.CanFly), 0 !== (Fk & Kk.Ed.Flying))
        }(kk.api)), (0, ak.s)(!1, !1), (kk => (0, ik.u)(kk))),
        gliderBoostFuel: (0, jk.b)((kk => () => Kk.y.gliderBoostFuel(kk.api.apiView, 0)), 0, (kk => (0, ik.u)(kk))),
        crosshairTarget: lF
      },
      tF = {
        hotbarSlotRequested: kF.c.events.hotbarSlotRequested,
        hotbarScrolled: kF.c.events.hotbarScrolled,
        numberKeyPressed: kF.c.events.numberKeyPressed,
        shotDamageToShow: (0, ak.w)((kk => !0 === (0, Mk.c)(kk, "showDamageAmounts")))
      },
      ZF = {
        selectHotbarSlot: kF.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: kk => {
          IF = kk
        }
      },
      jF = {
        momentumFrac: function() {
          var kk, Fk, Ik;
          const Xk = (0, yk.k)(),
            Tk = performance.now(),
            ik = null === Xk || void 0 === Xk || null === (kk = Xk.items.eq()) || void 0 === kk || null === (Fk = kk.attributes) || void 0 === Fk || null === (Ik = Fk.customAttributes) || void 0 === Ik ? void 0 : Ik.enchantments;
          return aF = null !== Xk && null !== ik && void 0 !== ik && ik.Momentum ? 0 !== (Kk.y.playerFlags(Xk.api.apiView, 0) & Kk.Ed.Breaking) ? Math.max(0, Kk.y.momentumFrac(Xk.api.apiView, 0)) : Math.max(0, aF - (Tk - qF) / 1500) : 0, qF = Tk, aF
        }
      };
    var eF = Ik(40592);
    const wF = {
      lobbyManage(kk) {
        var Fk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.LobbyManage, kk)
      }
    };
    var HF = Ik(1231),
      JF = Ik(36498),
      xF = Ik(8778),
      PF = Ik(1580),
      KF = Ik(2331),
      QF = Ik(4801);
    let sF = !1;

    function VF(kk) {
      sF = kk
    }

    function zF() {
      "inGame" !== Nk.d.get("gameState") || (0, PF.s)() || qk.g.GL("ctrlCrouchWithoutFullscreen")
    }
    let SF = !1;
    const oF = {
        OpenEmoteWheel: () => {
          VF(!0), SF = !0, queueMicrotask((() => {
            SF && (SF = !1, qk.g.GL("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          qk.g.GL("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, JF.c)() || qk.g.GL("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, JF.c)() || qk.g.GL("XKeyPressed")
        },
        CtrlCrouch: zF,
        "primary-fire": () => {
          qk.g.GL("mouseState", {
            yL: HF.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          qk.g.GL("mouseState", {
            yL: HF.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          qk.g.GL("mouseState", {
            yL: HF.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      vF = {
        OpenEmoteWheel: () => {
          VF(!1), SF ? (SF = !1, (0, xF.e)() || qk.g.GL("requestEmoteWheelHoldOpen")) : qk.g.GL("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: zF,
        "primary-fire": () => {
          qk.g.GL("mouseState", {
            yL: HF.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          qk.g.GL("mouseState", {
            yL: HF.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          qk.g.GL("mouseState", {
            yL: HF.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let EF = !1;

    function OF() {
      EF || (EF = !0, (0, QF.g)((kk => {
        if ((0, Tk.c)()) return;
        const Fk = (0, QF.f)(kk) ? "primary-fire" : kk.action;
        var Ik;
        if (kk.down) {
          if (0 === (kk.flags & KF.e.Synthetic)) {
            var Xk;
            null === (Xk = oF[Fk]) || void 0 === Xk || Xk.call(oF)
          }
        } else null === (Ik = vF[Fk]) || void 0 === Ik || Ik.call(vF)
      })))
    }
    var nF = Ik(318),
      GF = Ik(95),
      pF = Ik(41),
      uF = Ik(40891),
      bF = Ik(1301),
      RF = Ik(39020);
    let UF = !1;
    const CF = {
      sendCodeCollab(kk) {
        var Fk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.CodeCollab, (0, pk.q)(kk), (0, RF.f)(kk))
      }
    };
    var NF = Ik(39109);
    let cF = null,
      WF = !1,
      fF = null;

    function BF() {
      return "inGame" === Nk.d.get("gameState") && !(0, JF.c)()
    }
    const dF = {
        OpenInventory: kk => {
          (0, PF.C)(kk, "inventory", (0, eF.n)())
        },
        OpenShop: kk => {
          cF && BF() && (0, PF.z)(kk, nF.r.SHOP, !cF.shopIsEmpty(Pk.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: kk => {
          BF() && (0, PF.z)(kk, nF.r.LOBBY_LEADERBOARD, (0, NF.b)({
            lobbyLeaderboardInfo: Pk.e.get("lobbyLeaderboardInfo"),
            lobbyManage: Pk.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: kk => {
          var Fk;
          const Ik = null === (Fk = cF) || void 0 === Fk ? void 0 : Fk.getClientGameMapKey();
          Ik ? (0, PF.F)(kk, !0, Ik) : (0, PF.C)(kk, "retentionFeatures", !(!Pk.e.get("_tasks") && !Pk.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: kk => {
          (0, PF.C)(kk, "inviteLink", GF.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: kk => {
          BF() && function(kk) {
            var Fk;
            const Ik = (0, yk.k)(),
              Xk = null !== Ik && void 0 !== Ik && Ik.isSessionLive ? Ik.api : null,
              Tk = Xk ? Xk.OJ(Xk.localId) : null,
              ik = null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.map((kk => Math.floor(kk)))) && void 0 !== Fk ? Fk : null;
            (0, PF.F)(kk, null !== ik && (0, RF.d)((0, bF.d)()), (() => {
              qk.g.GL("EditLobbyCode", ik)
            }))
          }(kk)
        },
        HideUi: () => {
          qk.g.GL("showUi", !1)
        }
      },
      YF = {
        HideUi: () => {
          qk.g.GL("showUi", !0)
        }
      };

    function AF() {
      WF || (WF = !0, Ik.e(157).then((() => Ik(60599))).then((kk => {
        cF = kk
      }), (kk => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", kk)
      })), (0, uF.z)((kk => {
        kk || !(0, uF.h)() || (0, GF.isMobile)() || !pF.j.getItem("disableFullscreen") || (0, PF.p)() || Nk.d.set({
          openEverythingMenuName: nF.r.SETTINGS
        })
      })), (0, QF.g)((kk => {
        let {
          action: Fk,
          down: Ik,
          press: Xk
        } = kk;
        var ik, yk;
        (0, Tk.c)() || (Ik ? null === (ik = dF[Fk]) || void 0 === ik || ik.call(dF, function(kk) {
          var Fk;
          if (0 === kk || (null === (Fk = fF) || void 0 === Fk ? void 0 : Fk.press) !== kk) {
            const Fk = {
              press: kk,
              event: new Event("inputAction")
            };
            fF = Fk, queueMicrotask((() => {
              fF === Fk && (fF = null)
            }))
          }
          return fF.event
        }(Xk)) : null === (yk = YF[Fk]) || void 0 === yk || yk.call(YF))
      })))
    }
    var gF = Ik(39011),
      mF = Ik(38997),
      hF = Ik(38992);
    const rF = {
      completeTask(kk) {
        var Fk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.CompleteTask, (0, pk.s)(kk))
      },
      setServerCookie(kk) {
        var Fk;
        let {
          key: Ik,
          value: Xk
        } = kk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.GeneralCookieSet, (0, pk.x)({
          vy: Ik,
          Ey: Xk
        }))
      },
      answerUiRequest(kk) {
        var Fk;
        let {
          id: Ik,
          HL: Xk
        } = kk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.UiRequestResp, (0, pk.Z)({
          Rq: Ik,
          Uq: Xk,
          Cq: 5
        }))
      },
      chooseRewardedAd(kk) {
        var Fk;
        let {
          id: Ik,
          HL: Xk
        } = kk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.UiRequestResponded, (0, pk.X)({
          id: Ik,
          HL: Xk
        }))
      },
      requestLeaderboard(kk) {
        var Fk;
        let {
          category: Ik,
          timeframe: Xk,
          seeTop: Tk
        } = kk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.LeaderboardRequest, {
          category: Ik,
          timeframe: Xk,
          seeTop: Tk
        })
      }
    };
    let DF = !1;
    const MF = xk.f.CH / 2,
      kI = [MF, -MF, -MF, -MF, MF, MF, -MF, MF],
      FI = [0, 0, 0];

    function II(kk, Fk, Ik) {
      for (let Xk = 0; Xk < kk.length; Xk += 2)
        if (kk[Xk] === Fk && kk[Xk + 1] === Ik) return !0;
      return !1
    }
    const XI = {
      blocksStandingOn: function() {
        const kk = (0, yk.k)();
        if (null === kk) return [];
        const {
          api: Fk,
          chunks: Ik,
          tables: Xk
        } = kk;
        if (!Fk.readPosition(Fk.localId, FI)) return [];
        const [Tk, ik, lk] = FI, ak = Math.ceil(ik) - 1, qk = [], Lk = [];
        for (let yk = 0; yk < kI.length; yk += 2) {
          const kk = Tk + kI[yk],
            Fk = lk + kI[yk + 1];
          if (Number.isInteger(kk) || Number.isInteger(Fk)) continue;
          const ik = Math.floor(kk),
            tk = Math.floor(Fk);
          if (II(Lk, ik, tk)) continue;
          const Zk = Ik.iL(ik, ak, tk);
          Xk.isSolidBlockId(Zk) && (Lk.push(ik, tk), qk.push(Xk.nameOfId(Zk)))
        }
        return qk
      },
      dropAhead: function() {
        const kk = (0, yk.k)();
        return null !== kk && 0 !== (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.DropAhead)
      }
    };
    var TI = Ik(36990),
      iI = Ik(39087),
      yI = Ik(1324),
      lI = Ik(40661);
    const aI = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      qI = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function LI() {
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
    const tI = Object.freeze([]);

    function ZI(kk, Fk) {
      let Ik, {
        rereads: Xk,
        followLocalId: Tk
      } = Fk;
      const yk = () => (Ik = (0, Dk.q)(Ik, kk()), Ik);
      return {
        current: yk,
        watch(kk) {
          const Fk = (0, ek.d)((Fk => {
            Xk(Fk) && kk(yk())
          }));
          if (!Tk) return Fk;
          let Ik = (0, jk.d)();
          const lk = (0, ik.y)((() => {
            const Fk = (0, jk.d)();
            Fk !== Ik && (Ik = Fk, kk(yk()))
          }));
          return () => {
            Fk(), lk()
          }
        }
      }
    }
    const jI = {
        players: ZI((function() {
          const kk = ek.f.ids(),
            Fk = {};
          for (const ik of kk) {
            var Ik, Xk, Tk;
            Fk[ik] = {
              name: null !== (Ik = ek.f.getName(ik)) && void 0 !== Ik ? Ik : null,
              ranks: null !== (Xk = ek.f.getSetting(ik, "ranks")) && void 0 !== Xk ? Xk : tI,
              cosmetics: null !== (Tk = (0, ek.g)(ik)) && void 0 !== Tk ? Tk : null
            }
          }
          return {
            ids: kk,
            byId: Fk,
            localId: (0, jk.d)()
          }
        }), {
          rereads: kk => "roster" !== kk.kind || kk.members || kk.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: ZI((function() {
          const kk = {};
          for (const Tk of ek.f.ids()) {
            var Fk, Ik, Xk;
            kk[Tk] = {
              colour: null !== (Fk = ek.f.getSetting(Tk, "colorInLobbyLeaderboard")) && void 0 !== Fk ? Fk : null,
              values: null !== (Ik = ek.f.getSetting(Tk, "lobbyLeaderboardValues")) && void 0 !== Ik ? Ik : null,
              tags: null !== (Xk = ek.f.getSetting(Tk, "lobbyLeaderboardTags")) && void 0 !== Xk ? Xk : null
            }
          }
          return kk
        }), {
          rereads: function(kk) {
            if ("roster" !== kk.kind) return "reset" === kk.kind;
            const {
              members: Fk,
              settings: Ik
            } = kk;
            return Fk || Ik.has("colorInLobbyLeaderboard") || Ik.has("lobbyLeaderboardValues") || Ik.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      eI = {
        cosmeticsUpdated: {
          watch: kk => (0, ek.d)((Fk => {
            if ("cosmetics" !== Fk.kind) return;
            const Ik = (0, jk.d)();
            kk(Fk.updates.map((kk => {
              let {
                sX: Fk,
                VX: Xk,
                zX: Tk
              } = kk;
              return {
                local: Fk === Ik,
                VX: Xk,
                zX: Tk
              }
            })))
          }))
        }
      };
    var wI = Ik(2837),
      HI = Ik(1665),
      JI = Ik(667),
      xI = Ik(40935);
    let PI = !1,
      KI = null;
    const QI = {
      setShopOpen(kk) {
        var Fk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.ShopMenuChanged, (0, pk.R)(kk))
      },
      buyShopItem(kk) {
        var Fk;
        let {
          categoryKey: Ik,
          itemKey: Xk,
          userInput: Tk
        } = kk;
        null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.ItemBought, {
          categoryKey: Ik,
          itemKey: Xk,
          shopVersion: Pk.e.get("_shopVersion"),
          userInput: Tk
        })
      }
    };
    let sI = !1;
    var VI = Ik(4814);
    const zI = KF.A.LookFrozen | KF.A.ClicksSuppressed;

    function SI(kk, Fk) {
      var Ik;
      null !== (Ik = (0, yk.k)()) && void 0 !== Ik && Ik.send(kk, Fk) || console.warn(`[bloxd-wasm-client] message ${kk} not sent: no live game or the core's command ring is full`)
    }(0, wk.l)(Gk.db, (kk => {
      const Fk = (0, uk.e)(Gk.db, kk);
      void 0 !== Fk && qk.g.GL("setDiscordReportKey", Fk)
    }));
    const oI = {
      ignorePlayer(kk) {
        SI(pk.e.IgnoreUser, (0, pk.z)({
          iy: kk
        }))
      },
      reportPlayer(kk) {
        let {
          playerId: Fk,
          chatMsgId: Ik,
          Ya: Xk,
          details: Tk
        } = kk;
        SI(pk.e.UserReport, (0, pk.lb)({
          dq: Fk,
          Yq: Ik,
          Ya: Xk,
          Aa: Tk
        }))
      },
      reportWorldCodeChat(kk) {
        let {
          chatMsgId: Fk,
          Ya: Ik,
          details: Xk
        } = kk;
        SI(pk.e.UserReport, (0, pk.lb)({
          dq: "",
          Yq: Fk,
          Ya: Ik,
          Aa: Xk
        }))
      },
      requestDiscordReportKey(kk) {
        SI(pk.e.ReqDiscordReportKey, (0, pk.L)(kk))
      },
      reportLobbyOrGame(kk) {
        let {
          target: Fk,
          Ya: Ik,
          details: Xk
        } = kk;
        "customGame" === Fk ? SI(pk.e.CustomGameReport, (0, pk.t)({
          Ya: Ik,
          Aa: Xk
        })) : SI(pk.e.LobbyReport, (0, pk.B)({
          Ya: Ik,
          Aa: Xk
        }))
      },
      updateMyCosmetic(kk) {
        SI(pk.e.UpdateMyCosmetic, (0, pk.hb)(kk))
      },
      holdEmoteWheel(kk) {
        !kk || sF ? (0, VI.g)(zI, kk ? zI : 0) : qk.g.GL("requestEmoteWheelHoldRelease")
      }
    };
    var vI = Ik(41045),
      EI = Ik(9183),
      OI = Ik(39616);
    const nI = [0, 0, 0],
      GI = [0, 0, 0],
      pI = [0, 0, 0],
      uI = {
        blockAtViewPoint(kk) {
          let {
            x: Fk,
            y: Ik
          } = kk;
          const Xk = (0, yk.k)();
          if (null === Xk || void 0 === Xk || !Xk.renderFrame.hasView) return null;
          const {
            renderFrame: Tk,
            clientApi: ik,
            api: lk
          } = Xk;
          let ak = 0;
          return (0, OI.c)(((kk, Fk, Ik) => (ak = ik.getBlockId(kk, Fk, Ik), 0 !== ak)), Tk.cameraPosition, (0, OI.e)((kk => Kk.y.viewProj(lk.apiView, 0, kk)), Fk, Ik, nI), OI.b, GI, pI) ? {
            pos: [GI[0], GI[1], GI[2]],
            normal: [pI[0], pI[1], pI[2]],
            name: (0, EI.f)(ak)
          } : null
        }
      },
      bI = {
        setBlockHighlight(kk) {
          var Fk;
          null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.setBlockHighlight(kk)
        }
      };
    var RI = Ik(1886),
      UI = Ik(40923),
      CI = Ik(41047),
      NI = Ik(4489),
      cI = Ik(4458),
      WI = Ik(41050),
      fI = Ik(3229),
      BI = Ik(3237);
    let dI = null,
      YI = null;

    function AI(kk) {
      const Fk = kk.startsWith(BI.k),
        [Ik, Xk = Ik, Tk = Ik] = (Fk ? kk.slice(BI.k.length) : kk).split(BI.j);
      return {
        top: Ik,
        left: Xk,
        right: Tk,
        half: Fk
      }
    }

    function gI(kk) {
      const Fk = null === dI ? void 0 : (0, fI.e)(kk),
        Ik = void 0 === Fk ? 0 : dI.codes[Fk];
      return 0 === Ik ? void 0 : dI.pool[Ik - 1]
    }
    var mI = Ik(3223),
      hI = Ik(4442),
      rI = Ik(4486),
      DI = Ik(40963),
      MI = Ik(41057);
    const kX = "item:";
    let FX = null,
      IX = null,
      XX = null,
      TX = null,
      iX = !1,
      yX = !1;

    function lX() {
      return yX || (yX = !0, (0, rI.i)().then((kk => {
        kk && (0, RI.c)()
      }))), XX ??= Promise.all([(0, mI.e)(), (YI ??= Ik.e(1).then((() => Ik(60615))).then((kk => {
        let {
          BLOCK_FACE_RUNS: Fk,
          BLOCK_FACES: Ik,
          MAX_FACE_ITEM_ID: Xk
        } = kk;
        dI = {
          codes: (0, BI.t)(Fk, Xk + 1),
          pool: Ik.split(BI.o).map(AI)
        }
      }), (kk => {
        throw YI = null, kk
      })), YI), (0, MI.f)(), Ik.e(198).then((() => Ik(34193)))]).then((kk => {
        let [, , Fk, Ik] = kk;
        Fk.followBundledTextures(), FX = Fk, IX = Ik, (0, RI.c)()
      }), (kk => {
        XX = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", kk)
      })), XX
    }

    function aX(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = (0, DI.i)()) || void 0 === Ik ? void 0 : Ik.textureUrl(kk)) && void 0 !== Fk ? Fk : FX.itemSpriteUrl(kk)
    }

    function qX(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = (0, DI.i)()) || void 0 === Ik ? void 0 : Ik.textureUrl(kk)) && void 0 !== Fk ? Fk : FX.blockTextureUrl(kk)
    }

    function LX(kk) {
      var Fk;
      return null !== (Fk = (0, mI.b)(kk)) && void 0 !== Fk ? Fk : kk
    }

    function tX(kk, Fk) {
      var Ik, Xk, Tk;
      return null !== (Ik = null !== (Xk = null !== (Tk = qX(kk)) && void 0 !== Tk ? Tk : null === Fk || void 0 === Fk ? void 0 : Fk.rotated[kk]) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.animated[kk]) && void 0 !== Ik ? Ik : FX.notFoundUrl()
    }

    function ZX(kk) {
      return void 0 !== (0, fI.e)(kk) ? kk : /^[1-9][0-9]*$/.test(kk) ? (0, fI.i)(Number(kk)) : void 0
    }

    function jX(kk) {
      var Fk;
      if (kk.startsWith(kX)) {
        var Ik;
        const Fk = (0, mI.b)(kk.slice(5));
        return null !== (Ik = void 0 === Fk ? null : aX(Fk)) && void 0 !== Ik ? Ik : FX.notFoundUrl()
      }
      return null !== (Fk = FX.particleUrl(kk)) && void 0 !== Fk ? Fk : FX.notFoundUrl()
    }

    function eX(kk, Fk) {
      return "StairsBlock" === kk ? kk : Fk ? "SlabBlock" : "CubeBlock"
    }
    const wX = {
        async blockIcon(kk) {
          var Fk;
          let {
            name: Xk,
            size: Tk,
            lineWidth: ik
          } = kk;
          await lX();
          const yk = null !== (Fk = ZX(Xk)) && void 0 !== Fk ? Fk : Xk,
            lk = (0, rI.d)(yk, Tk, ik);
          if (null !== lk) return lk;
          const ak = gI(yk),
            qk = (0, fI.e)(yk),
            Lk = void 0 === qk || null === IX ? void 0 : IX.itemTypeNameOf(qk);
          if (null === FX || void 0 === ak) return "";
          const tk = [ak.top, ak.left, ak.right].some((kk => null === qX(kk))),
            Zk = tk ? await (TX ??= Ik.e(204).then((() => Ik(34274))).then((kk => (iX && (iX = !1, (0, RI.c)()), {
              rotated: kk.rotatedBlockTextures,
              animated: kk.animatedBlockTextures
            })), (kk => (TX = null, iX = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", kk), null))), TX) : null;
          if (tk && null === Zk) return "";
          const jk = {
              top: tX(ak.top, Zk),
              left: tX(ak.left, Zk),
              right: tX(ak.right, Zk),
              itemType: eX(Lk, ak.half)
            },
            ek = (0, DI.e)(),
            wk = 0 === ek ? yk : `${yk}#${ek}`;
          return (await (0, hI.e)()).drawBlockIconUrl(wk, Tk, ik, (() => jk))
        }
      },
      HX = {
        itemIcon: function(kk) {
          var Fk, Ik, Tk, ik;
          if (null === FX) return lX(), Xk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          if ((0, cI.f)(kk)) return {
            kind: "icon",
            url: null !== (Ik = null !== (Tk = null === (ik = (0, DI.i)()) || void 0 === ik ? void 0 : ik.textureUrl(kk)) && void 0 !== Tk ? Tk : FX.ingameIconUrl(kk)) && void 0 !== Ik ? Ik : FX.notFoundUrl()
          };
          if (kk.startsWith(cI.b)) return {
            kind: "icon",
            url: jX(kk.slice(cI.b.length))
          };
          if (0 === (0, fI.k)()) return (0, WI.c)(), Xk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
          const yk = null !== (Fk = ZX(kk)) && void 0 !== Fk ? Fk : kk,
            lk = (0, fI.e)(yk),
            ak = void 0 === lk ? void 0 : IX.itemTypeNameOf(lk);
          if (void 0 !== gI(yk)) return {
            kind: "drawnBlock"
          };
          const qk = function(kk) {
            var Fk;
            return null !== (Fk = aX(LX(kk))) && void 0 !== Fk ? Fk : FX.notFoundUrl()
          }(yk);
          if ((0, rI.e)(yk) && ! function(kk) {
              const Fk = (0, DI.i)();
              return null !== Fk && (null !== Fk.textureUrl(LX(kk)) || null !== Fk.modelUrl(kk))
            }(yk)) return {
            kind: "model",
            url: qk
          };
          if ("Gun" === ak) return {
            kind: "gun",
            url: qk
          };
          if (void 0 !== lk && "GrayscaleArmour" === IX.itemTypeOf(lk) || Object.hasOwn(NI.e, yk)) {
            var Lk;
            const Fk = null !== (Lk = (0, NI.i)(kk)) && void 0 !== Lk ? Lk : (0, NI.i)(yk);
            if (Fk) return {
              kind: "item",
              url: qk,
              tint: Fk
            }
          }
          return {
            kind: "item",
            url: qk
          }
        },
        hasIcon: function(kk) {
          return void 0 !== ZX(kk) || (0, cI.f)(kk) || kk.startsWith(cI.b)
        },
        isItemName: function(kk) {
          return void 0 !== ZX(kk)
        }
      };
    var JX = Ik(614),
      xX = Ik(39619);

    function PX(kk) {
      if (null === kk || void 0 === kk || !kk.isCoreRunning) return null;
      const {
        api: Fk,
        chunks: Ik,
        items: Xk,
        tables: Tk
      } = kk;
      return {
        playerFeet() {
          const kk = Fk.OJ(Fk.localId);
          return null !== kk && void 0 !== kk && kk.every(Number.isFinite) ? kk : null
        },
        chunkBlocks: kk => Ik.isLoaded(kk[0], kk[1], kk[2]) ? (kk, Fk, Xk) => Ik.iL(kk, Fk, Xk) : null,
        blockName: kk => Tk.nameOfId(kk),
        inventory: () => ({
          slots: Xk.playerItems().map((kk => kk ? {
            name: kk.name,
            amount: kk.amount
          } : null)),
          heldSlot: Xk.selectedSlot
        }),
        nearby() {
          const Ik = [];
          for (let Tk = 0; Tk < Fk.idStr.length; Tk++) {
            var Xk;
            const ik = Fk.idStr[Tk],
              yk = Fk.serverIds[Tk],
              lk = Fk.kinds[Tk];
            if (null === ik || Fk.isLocal(yk) || lk >>> Kk.d !== Kk.v.Lifeform) continue;
            const ak = Fk.OJ(yk),
              qk = JX.m[lk & Kk.h];
            ak && void 0 !== qk && Ik.push({
              kind: "Player" === qk ? "player" : qk,
              name: null !== (Xk = kk.clientApi.getEntityName(ik)) && void 0 !== Xk ? Xk : null,
              position: ak
            })
          }
          return Ik
        },
        droppedItems() {
          let kk = 0;
          for (let Ik = 0; Ik < Fk.idStr.length; Ik++) null !== Fk.idStr[Ik] && Fk.kinds[Ik] >>> Kk.d === Kk.v.Item && kk++;
          return kk
        }
      }
    }
    const KX = {
        worldCodeAiChunk: kk => Promise.resolve((0, xX.c)(PX((0, yk.k)()), kk)),
        worldCodeAiGameState: () => Promise.resolve((0, xX.d)(PX((0, yk.k)())))
      },
      QX = function(kk) {
        const Fk = LI(),
          Xk = LI(),
          Tk = new Set,
          ik = new Set,
          yk = () => {
            var Fk, Ik;
            return null !== (Fk = null === (Ik = kk.runtime()) || void 0 === Ik ? void 0 : Ik.currentViewer) && void 0 !== Fk ? Fk : null
          };
        let lk = null,
          ak = null;
        const Lk = (kk, Fk) => ({
            current: kk,
            watch(Ik) {
              let Xk = kk();
              return Fk.add((() => {
                const Fk = kk();
                Fk !== Xk && (Xk = Fk, Ik(Fk))
              }))
            }
          }),
          Zk = kk => ({
            watch: Fk => (kk.add(Fk), () => {
              kk.delete(Fk)
            })
          }),
          jk = kk => {
            const Fk = yk(),
              Ik = null === Fk || void 0 === Fk ? void 0 : Fk.view;
            Fk && Ik && Fk.seek(Math.max(0, Math.min(Ik.totalTicks - 1, Ik.Dt + kk * tk.zd)))
          },
          ek = {
            replay: Lk((() => {
              var kk;
              const Fk = yk(),
                Ik = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
              return null === Fk || null === Ik || Ik.state === tk.kd.None ? (lk = null, null) : (lk = (0, Dk.q)(lk, {
                id: Fk.id,
                Dt: Ik.Dt,
                totalTicks: Ik.totalTicks,
                WG: tk.zd,
                playing: Ik.state === tk.kd.Playing,
                speed: Ik.speed,
                cameraMode: Ik.cameraMode,
                freecam: "freecam" === Ik.cameraMode
              }), lk)
            }), Fk),
            replayEdits: Lk((() => {
              var kk;
              const Fk = yk(),
                Ik = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
              return null === Fk || null === Ik || Ik.state === tk.kd.None ? (ak = null, null) : (ak = (0, Dk.q)(ak, {
                cameraKeyframes: [...Fk.keyframes],
                playbackMark: Ik.mark,
                fileName: Fk.fileName,
                unsavedChanges: Fk.unsavedChanges,
                suggestSaveAs: Fk.suggestSaveAs
              }), ak)
            }), Fk),
            replayRecorder: Lk((() => {
              var Fk, Ik;
              return null !== (Fk = null === (Ik = kk.runtime()) || void 0 === Ik ? void 0 : Ik.recorder.current) && void 0 !== Fk ? Fk : lI.b.states.replayRecorder.current()
            }), Xk),
            replayVideoExporting: {
              current: iI.b,
              watch: kk => (0, qk.i)("replayViewer|videoExportChanged", (() => {
                kk((0, iI.b)())
              }))
            }
          },
          wk = {
            replayUiActionRequested: Zk(ik),
            replayViewerRequested: Zk(Tk)
          },
          Hk = kk => {
            for (const Fk of Tk) Fk(kk)
          },
          Jk = () => {
            var Xk;
            !0 === (null === (Xk = yk()) || void 0 === Xk ? void 0 : Xk.isOpen) && Promise.all([Ik.e(96), Ik.e(66)]).then((() => Ik(60606))).then((Ik => {
              let {
                startWasmReplayVideoExport: Xk
              } = Ik;
              return Xk({
                viewer: yk,
                canvas: () => {
                  var Fk, Ik;
                  return null !== (Fk = null === (Ik = kk.canvas) || void 0 === Ik ? void 0 : Ik.call(kk)) && void 0 !== Fk ? Fk : null
                },
                watchViewer: Fk.add,
                requestViewer: Hk
              })
            }), (kk => {
              console.error("Couldn't load the video export", kk), yI.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((kk => {
              console.error("The video export failed", kk)
            }))
          },
          xk = {
            replayAction(kk) {
              if ((0, iI.b)()) return;
              const Fk = yk();
              switch (kk) {
                case "replaySkipBack":
                  jk(-1);
                  break;
                case "replaySkipForward":
                  jk(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Fk && void 0 !== Fk && Fk.view && Fk.setSpeed((0, TI.i)(Fk.view.speed, "replaySpeedUp" === kk ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Fk || void 0 === Fk || Fk.addKeyframe()
              }
            },
            setReplayPlaying(kk) {
              var Fk, Ik;
              (0, iI.b)() || (kk ? null === (Fk = yk()) || void 0 === Fk || Fk.play() : null === (Ik = yk()) || void 0 === Ik || Ik.pause())
            },
            seekReplay(kk) {
              var Fk;
              let {
                Dt: Ik,
                ignorePlaybackMark: Xk
              } = kk;
              null === (Fk = yk()) || void 0 === Fk || Fk.seek(Ik, null !== Xk && void 0 !== Xk && Xk)
            },
            setReplayCameraMode(kk) {
              var Fk;
              null === (Fk = yk()) || void 0 === Fk || Fk.setCameraMode(kk)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(kk) {
              var Fk;
              null === (Fk = yk()) || void 0 === Fk || Fk.setKeyframe(kk)
            },
            moveReplayCameraKeyframe(kk) {
              var Fk;
              let {
                from: Ik,
                to: Xk
              } = kk;
              null === (Fk = yk()) || void 0 === Fk || Fk.moveKeyframe(Ik, Xk)
            },
            deleteReplayCameraKeyframes(kk) {
              var Fk;
              let {
                start: Ik,
                end: Xk
              } = kk;
              null === (Fk = yk()) || void 0 === Fk || Fk.deleteKeyframes(Ik, Xk)
            },
            setReplayPlaybackMark(kk) {
              var Fk;
              null === (Fk = yk()) || void 0 === Fk || Fk.setMark(kk)
            },
            cropReplay(kk) {
              var Fk, Ik;
              let {
                start: Xk,
                end: Tk
              } = kk;
              return !(0, iI.b)() && (null !== (Fk = null === (Ik = yk()) || void 0 === Ik ? void 0 : Ik.crop(Xk, Tk)) && void 0 !== Fk && Fk)
            },
            holdReplayForShaderPackFailure(kk) {
              const Fk = yk();
              Fk && (Fk.holdForShaderPackFailure(), function(kk) {
                Ik.e(115).then((() => Ik(39224))).then((Fk => {
                  let {
                    shaderPackPage: Ik
                  } = Fk;
                  Ik.block(kk)
                })).catch((kk => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", kk)
                }))
              }(kk))
            },
            exportReplayVideo() {
              Jk()
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
              var Ik;
              let {
                clipping: Xk,
                clipSeconds: Tk
              } = Fk;
              null === (Ik = kk.runtime()) || void 0 === Ik || Ik.recorder.setPrefs(Xk, Tk)
            },
            setReplayViewerOpen(Fk) {
              var Ik;
              (0, JF.d)(Fk) && (null === (Ik = kk.runtime()) || void 0 === Ik || Ik.recorder.viewerShown(Fk))
            },
            recordFlyingMiddleText(Fk) {
              var Ik;
              let {
                content: Xk,
                zi: Tk,
                angle: ik,
                Si: yk
              } = Fk;
              null === (Ik = kk.runtime()) || void 0 === Ik || Ik.recorder.recordFlyingText(JSON.stringify(Xk), Tk, ik, yk)
            },
            dragReplayCamera(Fk) {
              var Ik;
              let {
                dx: Xk,
                dy: Tk
              } = Fk;
              null === (Ik = kk.freecam()) || void 0 === Ik || Ik.drag(Xk, Tk)
            },
            moveReplayFreecam(Fk) {
              var Ik;
              null === (Ik = kk.freecam()) || void 0 === Ik || Ik.move(Fk)
            },
            holdReplayFreecamVertical(Fk) {
              var Ik;
              let {
                action: Xk,
                eq: Tk
              } = Fk;
              null === (Ik = kk.freecam()) || void 0 === Ik || Ik.holdVertical(Xk, Tk)
            }
          },
          Pk = kk => {
            var Fk;
            const Ik = yk(),
              Xk = null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.view) && void 0 !== Fk ? Fk : null;
            aI.has(kk) ? (kk => {
              for (const Fk of ik) Fk(kk)
            })(kk) : qI.has(kk) ? xk.replayAction(kk) : "replayPlayPause" === kk ? Ik && Xk && Xk.state !== tk.kd.None && xk.setReplayPlaying(Xk.state !== tk.kd.Playing) : "replayChangeCameraMode" === kk ? null === Ik || void 0 === Ik || Ik.cycleCameraMode() : "replayExit" === kk ? !0 === (null === Ik || void 0 === Ik ? void 0 : Ik.inPlayback) && (0, bF.n)("/") : "replayExportVideo" === kk && Jk()
          };
        let Kk = !1;
        return {
          states: ek,
          events: wk,
          commands: xk,
          lookups: {
            replayCamera() {
              var Fk, Ik, Xk;
              return !0 !== (null === (Fk = yk()) || void 0 === Fk ? void 0 : Fk.isOpen) ? null : null !== (Ik = null === (Xk = kk.cameraView) || void 0 === Xk ? void 0 : Xk.call(kk)) && void 0 !== Ik ? Ik : null
            },
            leaveGameReloadsPage() {
              var kk;
              return !0 === (null === (kk = yk()) || void 0 === kk ? void 0 : kk.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var kk;
              const Ik = !0 === (null === (kk = yk()) || void 0 === kk ? void 0 : kk.inPlayback);
              Ik !== Kk && (Kk = Ik, qk.g.GL("connectedGameChanged")), Fk.fire()
            },
            recorderChanged: Xk.fire,
            keyDown: kk => {
              var Fk;
              switch (kk) {
                case "recordGame":
                  return void xk.toggleRecording();
                case "recordClip":
                  return void((0, JF.c)() || xk.saveClip())
              }(0, iI.b)() || ("replayViewerOpen" !== kk ? kk.startsWith("replay") && ((0, JF.c)() || !0 === (null === (Fk = yk()) || void 0 === Fk ? void 0 : Fk.inPlayback)) && Pk(kk) : Hk("toggle"))
            }
          }
        }
      }({
        runtime: Tk.j,
        cameraView: () => {
          var kk;
          const Fk = null === (kk = (0, yk.k)()) || void 0 === kk ? void 0 : kk.renderFrame;
          if (!Fk) return null;
          const [Ik, Xk, Tk] = Fk.cameraPosition, [ik, lk, ak] = Fk.cameraDirection;
          return {
            position: [Ik, Xk, Tk],
            direction: [ik, lk, ak]
          }
        },
        canvas: () => {
          var kk, Fk, Ik;
          return null !== (kk = null === (Fk = (Ik = (0, ik.I)()).canvas) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : null
        },
        freecam: Tk.g
      }),
      sX = {
        states: {
          ...LF,
          ...eF.j,
          ...QX.states,
          ...jI,
          ...fk
        },
        events: {
          ...tF,
          ...Hk,
          ...eF.g,
          ...vk.e,
          ...vI.l,
          ...QX.events,
          ...eI,
          ...Sk.h
        },
        commands: {
          ...zk,
          ...ZF,
          ...Jk,
          ...eF.d,
          ...rF,
          ...oI,
          ...Sk.g,
          ...CF,
          ...QX.commands,
          ...QI,
          ...Bk,
          ...bI,
          ...wF
        },
        queries: {
          ...eF.h,
          ...KX
        },
        lookups: {
          ...jF,
          ...Rk,
          ...vI.m,
          ...QX.lookups,
          ...Vk,
          ...XI,
          ...uI,
          ...dk
        }
      };

    function VX() {
      (0, lk.f)(wk.p), (0, Tk.n)(QX.feed), (0, vk.i)(), DF || (DF = !0, (0, wk.l)(Gk.k, (kk => {
        const Fk = (0, uk.e)(Gk.k, kk);
        "string" === typeof Fk && Promise.resolve().then((() => Ik(3602))).then((kk => {
          let {
            onCosmeticPackGranted: Ik
          } = kk;
          Ik(Fk)
        }))
      })), (0, wk.l)(Gk._, (kk => {
        const Fk = (0, uk.e)(Gk._, kk);
        "number" === typeof Fk && qk.g.GL("serverUpdating", Date.now() + Fk, !0)
      })), (0, wk.l)(Gk.C, (kk => {
        const Fk = (0, uk.e)(Gk.C, kk);
        if ((0, uk.c)(Fk)) {
          const {
            OT: kk,
            nT: Ik
          } = Fk;
          (0, mF.b)({
            OT: "string" === typeof kk ? kk : null,
            nT: "string" === typeof Ik ? Ik : null
          })
        }
      })), (0, wk.l)(Lk.sc.NewUiRequest, (kk => {
        const Fk = (0, uk.g)(kk);
        (0, uk.c)(Fk) && "number" === typeof Fk.id && (0, uk.c)(Fk.clientParameters) && (0, hF.h)(Fk.id, Fk.clientParameters)
      })), (0, wk.l)(Gk.Q, (kk => {
        const Fk = (0, uk.e)(Gk.Q, kk);
        "number" === typeof Fk && (0, hF.j)(Fk)
      })), (0, wk.j)(hF.d), (0, wk.l)(Lk.sc.UiRequestPopup, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk) && "number" === typeof Fk.id && "string" === typeof Fk.text) {
          const kk = Fk.id;
          (0, hF.l)(kk, Fk.text, !0 === Fk.destructive, (Fk => {
            rF.answerUiRequest({
              id: kk,
              HL: Fk
            })
          }))
        }
      })), (0, wk.l)(Lk.sc.TopRightHelper, (kk => {
        const Fk = (0, uk.g)(kk);
        void 0 !== Fk && qk.g.GL("TopRightHelper", Fk, !0)
      })), (0, wk.l)(Lk.sc.TaskProgress, (kk => {
        const Fk = (0, uk.g)(kk);
        (0, uk.c)(Fk) && "string" === typeof Fk.taskId && "number" === typeof Fk.progress && (0, gF.d)({
          taskId: Fk.taskId,
          progress: Fk.progress
        })
      }))), sI || (sI = !0, (0, wk.l)(Gk.q, (kk => {
        const Fk = (0, uk.e)(Gk.q, kk);
        (0, uk.c)(Fk) && qk.g.GL("showShopFromServer", {
          toggle: Fk.vT,
          ET: Fk.ET
        }, !0)
      })), (0, wk.l)(Lk.sc.OverShopInfo, (kk => {
        const Fk = (0, uk.g)(kk);
        (0, uk.c)(Fk) && qk.g.GL("overShopInfo", Fk.info, !0)
      })), (0, wk.l)(Lk.sc.ShowShopTutorial, (() => {
        qk.g.GL("showShopTutorial", null, !0)
      }))), PI || (PI = !0, (0, wk.f)((() => {
        var kk;
        (0, wI.A)(), null === (kk = KI) || void 0 === kk || kk(), KI = (0, wk.e)() ? (0, JI.l)(wk.e) : null, (0, wk.e)() || qk.g.aJ()
      })), (0, wk.l)(Lk.sc.SetCookie, (kk => {
        const Fk = (0, uk.g)(kk),
          Ik = (0, bF.d)().gameNameWithVariation;
        (0, uk.c)(Fk) && "string" === typeof Fk.key && null !== Ik && (0, HI.setCookie)(Ik, Fk.key, Fk.value)
      })), (0, wk.l)(Lk.sc.LeaveValues, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk) && "string" === typeof Fk.leaveEventType) {
          const {
            leaveEventType: kk,
            category: Ik,
            subCategory: Xk,
            value: Tk
          } = Fk;
          (0, wI.H)({
            leaveEventType: kk,
            category: Ik,
            subCategory: Xk,
            value: Tk
          })
        }
      })), (0, wk.l)(Lk.sc.CustomAnalyticsEvent, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk) && "string" === typeof Fk.cat1) {
          const {
            cat1: kk,
            cat2: Ik,
            cat3: Xk,
            value: Tk
          } = Fk;
          (0, wI.r)({
            cat1: kk,
            cat2: Ik,
            cat3: Xk,
            value: Tk
          })
        }
      })), (0, wk.l)(Lk.sc.ProgressionEvent, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk)) {
          const {
            type: kk,
            location1: Ik,
            location2: Xk,
            location3: Tk,
            score: ik
          } = Fk;
          (0, wI.v)({
            type: kk,
            location1: Ik,
            location2: Xk,
            location3: Tk,
            score: ik
          })
        }
      })), (0, wk.l)(Lk.sc.ResourceEvent, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk)) {
          const {
            type: kk,
            resourceType: Ik,
            amount: Xk,
            category: Tk,
            itemName: ik
          } = Fk;
          (0, wI.x)({
            type: kk,
            resourceType: Ik,
            amount: Xk,
            category: Tk,
            itemName: ik
          })
        }
      })), (0, wk.l)(Lk.sc.LeaderboardResponse, (kk => {
        const Fk = (0, uk.g)(kk);
        if ((0, uk.c)(Fk)) {
          const {
            category: kk,
            timeframe: Ik,
            data: Xk
          } = Fk;
          qk.g.GL("leaderboardResponse", {
            category: kk,
            timeframe: Ik,
            data: Xk
          })
        }
      })), (0, wk.l)(Gk.w, (kk => {
        const Fk = (0, uk.e)(Gk.w, kk);
        "string" === typeof Fk && (0, xI.c)(kk.conn, Fk)
      })), (0, wk.l)(Gk.x, (kk => {
        const Fk = (0, uk.e)(Gk.x, kk);
        "string" === typeof Fk && console.error(`[logErrorToConsole]: ${Fk}`)
      }))), Ck(), (0, vI.e)(), UF || (UF = !0, (0, wk.l)(Gk.h, (kk => {
        const Fk = (0, uk.e)(Gk.h, kk);
        void 0 !== Fk && (0, RF.g)(Fk)
      }))), AF(), OF(), gk || (gk = !0, (0, ik.u)(mk)), Xk.gameBridge.attach(sX), (0, Xk.installPageSources)({
        commands: {
          ...Xk.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: UI.d
        },
        queries: wX,
        lookups: {
          ...Xk.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...HX,
          dJ: UI.b,
          drawCallStats: CI.j
        }
      }), (0, RI.c)(), lX()
    }
  },
  40963: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      e: () => ak,
      i: () => lk,
      m: () => qk
    });
    var Xk = Ik(1886);
    let Tk = null,
      ik = 0;
    const yk = new Set;

    function lk() {
      return Tk
    }

    function ak() {
      return ik
    }

    function qk(kk) {
      Tk = kk, ik++, (0, Xk.c)();
      for (const Fk of yk) Fk()
    }

    function Lk(kk) {
      yk.add(kk)
    }
  },
  41057: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => lk
    });
    var Xk = Ik(41060);
    let Tk = null,
      ik = null;

    function yk() {
      return Tk ??= Ik.e(61).then((() => Ik(60620))).catch((kk => {
        throw Tk = null, kk
      })), Tk
    }

    function lk() {
      return ik ??= Promise.all([yk(), (0, Xk.i)()]).then((kk => {
        let [Fk] = kk;
        return Fk
      }), (kk => {
        throw ik = null, kk
      })), ik
    }
  },
  37118: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    const Xk = {
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
  36899: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik,
      l: () => Zk,
      p: () => lk,
      q: () => ak,
      r: () => qk,
      u: () => tk,
      v: () => Lk,
      z: () => yk
    });
    var Xk = Ik(1231);
    let Tk = function(kk) {
        return kk[kk.Join = 0] = "Join", kk[kk.Leave = 1] = "Leave", kk[kk.Push = 2] = "Push", kk[kk.Cursor = 3] = "Cursor", kk[kk.Submit = 4] = "Submit", kk[kk.ReloadAsVariation = 5] = "ReloadAsVariation", kk[kk.CreateFile = 6] = "CreateFile", kk[kk.RenameFile = 7] = "RenameFile", kk[kk.DeleteFile = 8] = "DeleteFile", kk[kk.SetEngine = 9] = "SetEngine", kk[kk.RenameFolder = 10] = "RenameFolder", kk
      }({}),
      ik = function(kk) {
        return kk[kk.Joined = 0] = "Joined", kk[kk.Updates = 1] = "Updates", kk[kk.Presence = 2] = "Presence", kk[kk.RemoteCursor = 3] = "RemoteCursor", kk[kk.ForceClose = 4] = "ForceClose", kk[kk.LobbyFilesChanged = 5] = "LobbyFilesChanged", kk[kk.EngineSettings = 6] = "EngineSettings", kk
      }({});

    function yk(kk) {
      return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
    }

    function lk(kk) {
      if ("lobby" === kk) return {
        kind: "lobby",
        path: Xk.g
      };
      if (kk.startsWith("lobby:")) {
        const Fk = kk.slice(6);
        return tk(Fk) ? {
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

    function ak(kk) {
      return kk.endsWith(".d.ts")
    }

    function qk(kk) {
      return kk.endsWith(".ts") && !ak(kk)
    }
    const Lk = 64;

    function tk(kk) {
      if (!kk || kk !== kk.trim()) return !1;
      if (kk.length > Lk) return !1;
      if (kk.startsWith("/") || kk.includes("\\") || kk.includes("\0")) return !1;
      if (!ak(kk) && !qk(kk) && ! function(kk) {
          return kk.endsWith(".js") && !kk.endsWith(".min.js") && !kk.endsWith(".bundle.js")
        }(kk)) return !1;
      const Fk = kk.split("/");
      for (const Ik of Fk)
        if ("" === Ik || "." === Ik || ".." === Ik) return !1;
      return !0
    }
    const Zk = 14e3
  },
  39028: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      e: () => Tk
    });
    const Xk = ["description", "label"];

    function Tk(kk) {
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