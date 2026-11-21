export const id = 46;
export const ids = [46];
export const modules = {
  39729: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Wd,
      f: () => Nd
    });
    const pd = 6e3;

    function Nd(dd, Jd) {
      return [Math.floor(dd[0] / Jd) * Jd, Math.floor(dd[1] / Jd) * Jd, Math.floor(dd[2] / Jd) * Jd]
    }

    function Wd(dd) {
      const Jd = (null !== dd && void 0 !== dd ? dd : "").match(/-?\d+(?:\.\d+)?/g);
      return Jd && Jd.length >= 3 ? [Number(Jd[0]), Number(Jd[1]), Number(Jd[2])] : null
    }

    function Pd(dd, Jd) {
      return dd === Jd ? String(dd) : `${dd}-${Jd}`
    }

    function Zd(dd, Jd, kd, pd) {
      const Nd = [];
      let Wd = new Map;
      for (let Pd = dd[2]; Pd < dd[2] + Jd; Pd++) {
        const Zd = new Map;
        let gd = dd[0];
        for (; gd < dd[0] + Jd;) {
          const Nd = pd(gd, kd, Pd);
          let Cd = gd;
          for (; Cd + 1 < dd[0] + Jd && pd(Cd + 1, kd, Pd) === Nd;) Cd++;
          if (null !== Nd) {
            const dd = `${gd} ${Cd} ${Nd}`,
              Jd = Wd.get(dd);
            Jd ? (Jd.z1 = Pd, Wd.delete(dd), Zd.set(dd, Jd)) : Zd.set(dd, {
              x0: gd,
              x1: Cd,
              z0: Pd,
              z1: Pd,
              name: Nd
            })
          }
          gd = Cd + 1
        }
        Nd.push(...Wd.values()), Wd = Zd
      }
      return Nd.push(...Wd.values()), Nd.sort(((dd, Jd) => dd.z0 - Jd.z0 || dd.x0 - Jd.x0)).map((dd => `x${Pd(dd.x0,dd.x1)} z${Pd(dd.z0,dd.z1)} ${dd.name}`))
    }

    function gd(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pd;
      const gd = [dd[0] + Jd - 1, dd[1] + Jd - 1, dd[2] + Jd - 1],
        Cd = null !== Nd && Nd.every(((Jd, kd) => Math.floor(Jd) >= dd[kd] && Math.floor(Jd) <= gd[kd])),
        Kd = [`The chunk from ${dd.join(" ")} to ${gd.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Nd && Kd.push(`The player's feet are at ${Nd.map(Math.floor).join(" ")}, ${Cd?"in this chunk":"outside this chunk"}.`);
      const od = [];
      for (let pd = dd[1]; pd <= gd[1]; pd++) {
        const Nd = Zd(dd, Jd, pd, kd).join("; "),
          Wd = od[od.length - 1];
        (null === Wd || void 0 === Wd ? void 0 : Wd.boxes) === Nd ? Wd.to = pd : od.push({
          from: pd,
          to: pd,
          boxes: Nd
        })
      }
      const ld = od.filter((dd => "" !== dd.boxes));
      0 === ld.length && Kd.push("It is all air.");
      let Qd = Kd.join("\n").length;
      for (const pd of ld) {
        const dd = `y${Pd(pd.from,pd.to)}: ${pd.boxes}`;
        if (Qd += dd.length + 1, Qd > Wd) {
          Kd.push(`Cut short: the layers from y${pd.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Kd.push(dd)
      }
      return Kd.join("\n")
    }
  },
  8706: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(22);

    function Nd() {
      return !pd.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37117: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Wd,
      e: () => Nd
    });
    const pd = [.25, .5, 1, 2, 4, 8, 16];

    function Nd(dd, Jd) {
      const kd = pd;
      let Nd = kd.indexOf(dd);
      return -1 === Nd && (Nd = kd.findIndex((Jd => Jd >= dd)), -1 === Nd && (Nd = kd.length - 1)), "up" === Jd ? kd[Math.min(Nd + 1, kd.length - 1)] : kd[Math.max(Nd - 1, 0)]
    }

    function Wd(dd) {
      return dd <= pd[0]
    }

    function Pd(dd) {
      return dd >= pd[pd.length - 1]
    }
  },
  36660: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      i: () => Wd
    });
    let pd = !1;

    function Nd() {
      return pd
    }

    function Wd(dd) {
      return pd !== dd && (pd = dd, !0)
    }
  },
  39118: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(29),
      Nd = kd(1955);

    function Wd(dd) {
      let {
        taskId: Jd,
        progress: kd
      } = dd;
      const pd = Nd.b.get("_tasks");
      null !== pd && void 0 !== pd && pd[Jd] && Nd.b.apply({
        _tasks: {
          ...pd,
          [Jd]: {
            ...pd[Jd],
            progress: kd
          }
        }
      })
    }
    pd.j.subscribe("clientTaskProgress", (dd => {
      Wd(dd)
    }))
  },
  39704: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      h: () => Ld,
      j: () => Cd,
      m: () => od,
      n: () => gd,
      q: () => Pd,
      t: () => Kd,
      u: () => Od
    });
    var pd = kd(1955),
      Nd = kd(29),
      Wd = kd(1964);
    const Pd = (0, Wd.q)((function() {
        var dd, Jd, kd, Nd;
        return {
          health: null !== (dd = pd.b.get("_health")) && void 0 !== dd ? dd : null,
          maxHealth: null !== (Jd = pd.b.get("_totalMaxHealth")) && void 0 !== Jd ? Jd : null,
          shield: null !== (kd = pd.b.get("_shield")) && void 0 !== kd ? kd : null,
          maxShield: null !== (Nd = pd.b.get("maxShield")) && void 0 !== Nd ? Nd : null
        }
      }), [], (0, Wd.n)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Zd = [{
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

    function gd(dd, Jd) {
      return Zd[(dd ? 2 : 0) + (Jd ? 1 : 0)]
    }
    const Cd = (0, Wd.q)((function() {
      var dd;
      return null !== (dd = pd.b.get("_aura")) && void 0 !== dd ? dd : null
    }), [], (0, Wd.n)("_aura"));

    function Kd(dd) {
      return {
        watch: Jd => (0, Nd.n)("shotPlayer", (kd => {
          let {
            playerId: pd,
            damage: Nd,
            wasCrit: Wd,
            distance: Pd
          } = kd;
          dd(pd) && Jd({
            damage: Nd,
            wasCrit: Wd,
            distance: Pd
          })
        }))
      }
    }

    function od(dd) {
      return (0, Wd.e)("chat", (Jd => {
        let {
          serverChatMsgId: kd,
          content: pd,
          chatterEId: Nd
        } = Jd;
        return {
          serverChatMsgId: null !== kd && void 0 !== kd ? kd : null,
          content: pd,
          author: Nd ? dd(Nd) : null
        }
      }))
    }
    class ld {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const kd = this.shown;
        return dd !== this.needed && (this.needed = dd, this.neededSince = Jd, null === dd && (this.shown = null)), this.shown !== this.needed && Jd - this.neededSince > 200 && (this.shown = this.needed), this.shown !== kd
      }
    }

    function Qd(dd) {
      return [{
        translationKey: `touchKeys:${dd}`
      }]
    }
    const Ld = {
      open: Qd("open"),
      close: Qd("close"),
      milk: Qd("milk"),
      shear: Qd("shear"),
      tame: Qd("tame"),
      feed: Qd("feed"),
      ride: Qd("ride")
    };

    function Od(dd) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: dd
      }]
    }
  },
  40735: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      e: () => Pd
    });
    var pd = kd(3134);
    let Nd = null,
      Wd = null;

    function Pd() {
      return Wd ??= kd.e(209).then((() => kd(36493))).then((dd => {
        let {
          ITEM_SPRITES: Jd,
          ITEM_SPRITES_WITHOUT_FILE: kd,
          ITEM_FILES_WITHOUT_SPRITE: Wd
        } = dd;
        Nd = function(dd, Jd, kd) {
          const Nd = new Set,
            Wd = (0, pd.y)(Jd);
          let Pd = 0;
          for (const [pd, Zd] of dd.entries()) pd === Wd[Pd] ? Pd++ : Nd.add(Zd);
          if ("" !== kd)
            for (const Zd of kd.split(pd.r)) Nd.add(Zd);
          return Nd
        }(Jd.split(pd.r), kd, Wd)
      }), (dd => {
        throw Wd = null, dd
      })), Wd
    }

    function Zd(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = Nd) || void 0 === kd ? void 0 : kd.has(dd)) && void 0 !== Jd && Jd
    }
  },
  39716: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      g: () => Wd,
      k: () => Nd
    });
    const pd = 128;

    function Nd(dd, Jd, kd, pd) {
      const Nd = 2 * Jd - 1,
        Wd = 1 - 2 * kd,
        Pd = dd(0) - Nd * dd(3),
        Zd = dd(4) - Nd * dd(7),
        gd = dd(8) - Nd * dd(11),
        Cd = dd(1) - Wd * dd(3),
        Kd = dd(5) - Wd * dd(7),
        od = dd(9) - Wd * dd(11);
      pd[0] = Zd * od - gd * Kd, pd[1] = gd * Cd - Pd * od, pd[2] = Pd * Kd - Zd * Cd;
      const ld = pd[0] * dd(3) + pd[1] * dd(7) + pd[2] * dd(11) < 0 ? -1 : 1,
        Qd = Math.hypot(pd[0], pd[1], pd[2]) * ld;
      return pd[0] /= Qd, pd[1] /= Qd, pd[2] /= Qd, pd
    }

    function Wd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = [Math.floor(Jd[0]), Math.floor(Jd[1]), Math.floor(Jd[2])],
        Zd = [0, 0, 0],
        gd = [1 / 0, 1 / 0, 1 / 0],
        Cd = [1 / 0, 1 / 0, 1 / 0];
      for (let ld = 0; ld < 3; ld++) Zd[ld] = Math.sign(kd[ld]), 0 !== Zd[ld] && (Cd[ld] = Math.abs(1 / kd[ld]), gd[ld] = (Pd[ld] + (Zd[ld] > 0 ? 1 : 0) - Jd[ld]) / kd[ld]);
      let Kd = 0,
        od = Math.abs(kd[0]) > Math.abs(kd[1]) ? 0 : 1;
      for (Math.abs(kd[2]) > Math.abs(kd[od]) && (od = 2); Kd <= pd;) {
        if (dd(Pd[0], Pd[1], Pd[2])) return Nd[0] = Pd[0], Nd[1] = Pd[1], Nd[2] = Pd[2], Wd[0] = 0, Wd[1] = 0, Wd[2] = 0, Wd[od] = -Zd[od], !0;
        od = gd[0] < gd[1] ? 0 : 1, gd[2] < gd[od] && (od = 2), Kd = gd[od], Pd[od] += Zd[od], gd[od] += Cd[od]
      }
      return !1
    }
  },
  39701: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      return Math.hypot(dd[0] - Jd[0], dd[1] - Jd[1], dd[2] - Jd[2]) < kd + .5
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  39131: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd
    });
    var pd = kd(1245),
      Nd = kd(1352),
      Wd = kd(22),
      Pd = kd(1332),
      Zd = kd(1348),
      gd = kd(1543),
      Cd = kd(36640);

    function Kd(dd) {
      let {
        Nd: Jd,
        Wd: kd
      } = dd;
      const Kd = null !== Jd && void 0 !== Jd ? Jd : (0, Zd.d)().gameNameWithVariation;
      (0, pd.K)(Kd) && ((0, Cd.n)(), (0, Pd.U)((() => {
        console.log("Received matchmaking order from game server to game", Jd), (0, Wd.f)("inGameReplay"), (0, gd.navigatePreserveSearch)((0, Nd.c)(Kd, null !== kd && void 0 !== kd ? kd : void 0))
      }), "video_start"))
    }
  },
  39314: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(29),
      Nd = kd(1975);

    function Wd(dd) {
      var Jd, kd;
      const Wd = (0, Nd.s)(null !== (Jd = null === (kd = Nd.x.toggleFreeCam) || void 0 === kd ? void 0 : kd[0]) && void 0 !== Jd ? Jd : null);
      pd.j.nO("showBottomMessage", {
        message: `Free Camera ${dd?"Enabled":"Disabled"}${Wd?` - Press ${Wd} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39126: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Pd,
      h: () => Zd,
      i: () => Cd
    });
    var pd = kd(29),
      Nd = kd(1371);
    const Wd = new Map;

    function Pd(dd, Jd) {
      pd.j.nO("newUiRequest", {
        id: dd,
        clientParameters: Jd
      }, !0)
    }

    function Zd(dd) {
      pd.j.nO("removeUiRequest", dd, !0);
      const Jd = Wd.get(dd);
      Jd && (Jd.tearDownNotification(), Wd.delete(dd))
    }

    function gd() {
      pd.j.nO("clearUiRequests");
      for (const dd of Wd.values()) dd.tearDownNotification();
      Wd.clear()
    }

    function Cd(dd, Jd, kd) {
      const pd = Nd.NotificationProvider.showPromptPopup({
        title: Jd,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Wd.set(dd, pd), pd.getResult().then((Jd => {
        Wd.delete(dd), "notificationTornDown" !== Jd && kd(Jd)
      }))
    }
  },
  39725: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od,
      f: () => ld
    });
    var pd = kd(193),
      Nd = kd(39729);
    const Wd = 20;

    function Pd(dd) {
      return dd.map(Math.floor).join(" ")
    }

    function Zd(dd) {
      return null === dd.amount || 1 === dd.amount ? dd.name : `${dd.amount} ${dd.name}`
    }
    var gd = kd(39734),
      Cd = kd(1955),
      Kd = kd(1348);

    function od(dd, Jd) {
      if (!dd) return gd.c;
      const kd = dd.playerFeet();
      if (!kd) return "The player isn't in the world yet, so no blocks can be seen.";
      const Wd = pd.g.KL,
        Pd = (0, Nd.f)(null !== Jd && void 0 !== Jd ? Jd : kd, Wd),
        Zd = dd.chunkBlocks(Pd);
      return Zd ? (0, Nd.c)(Pd, Wd, ((Jd, kd, pd) => {
        const Nd = Zd(Jd, kd, pd);
        return 0 === Nd ? null : dd.blockName(Nd).split("|")[0]
      }), kd) : `The chunk from ${Pd.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${kd.map(Math.floor).join(" ")}.`
    }

    function ld(dd) {
      var Jd, kd, pd;
      if (!dd) return gd.f;
      const Nd = dd.playerFeet();
      if (!Nd) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: od,
        heldSlot: ld
      } = dd.inventory();
      return function(dd) {
        const Jd = [];
        null !== dd.game && Jd.push(`Game: ${dd.game}.`);
        const kd = null === dd.health ? "" : `, health ${Math.round(dd.health)}${null===dd.maxHealth?"":` of ${Math.round(dd.maxHealth)}`}`;
        Jd.push(`The player (the creator) stands at ${Pd(dd.position)}${kd}, ${dd.creative?"in":"not in"} creative mode.`);
        const pd = dd.slots[dd.heldSlot];
        Jd.push(pd ? `Holding (slot ${dd.heldSlot}): ${Zd(pd)}.` : `Holding nothing (slot ${dd.heldSlot} is empty).`);
        const Nd = dd.slots.flatMap(((dd, Jd) => dd ? [`slot ${Jd}: ${Zd(dd)}`] : []));
        Jd.push(Nd.length > 0 ? `Inventory: ${Nd.join(", ")}.` : "Inventory: empty.");
        const gd = Jd => Math.hypot(Jd.position[0] - dd.position[0], Jd.position[1] - dd.position[1], Jd.position[2] - dd.position[2]),
          Cd = [...dd.nearby].sort(((dd, Jd) => gd(dd) - gd(Jd)));
        if (0 === Cd.length) Jd.push("No other players or mobs are near enough to see.");
        else {
          Jd.push("Near them, nearest first:");
          for (const dd of Cd.slice(0, Wd)) {
            const kd = "player" === dd.kind ? `player "${dd.name||"?"}"` : dd.name && dd.name !== dd.kind ? `${dd.kind} "${dd.name}"` : dd.kind,
              pd = Math.round(gd(dd));
            Jd.push(`- ${kd} at ${Pd(dd.position)}, ${pd} block${1===pd?"":"s"} away`)
          }
          Cd.length > Wd && Jd.push(`- and ${Cd.length-Wd} more further away`)
        }
        return dd.droppedItems > 0 && Jd.push(`${dd.droppedItems} dropped item${1===dd.droppedItems?" is":"s are"} on the ground nearby.`), Jd.join("\n")
      }({
        game: null !== (Jd = (0, Kd.d)().gameNameWithVariation) && void 0 !== Jd ? Jd : null,
        position: Nd,
        health: null !== (kd = Cd.b.get("_health")) && void 0 !== kd ? kd : null,
        maxHealth: null !== (pd = Cd.b.get("_totalMaxHealth")) && void 0 !== pd ? pd : null,
        creative: !0 === Cd.b.get("creative"),
        heldSlot: ld,
        slots: od,
        nearby: dd.nearby(),
        droppedItems: dd.droppedItems()
      })
    }
  },
  39150: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      h: () => gd,
      k: () => Cd
    });
    var pd = kd(1245),
      Nd = kd(1013),
      Wd = kd(37041),
      Pd = kd(29);

    function Zd(dd) {
      let {
        lobbyName: Jd,
        gameNameWithVariation: kd
      } = dd;
      return !(0, pd.M)(Jd) || null !== kd && (kd.startsWith("testGym") || (0, Nd.i)(kd))
    }

    function gd(dd) {
      return dd.SJ === Wd.c.Leave || dd.SJ === Wd.c.Cursor
    }

    function Cd(dd) {
      Pd.j.nO("codeCollab", {
        type: dd.SJ,
        docKey: dd.jJ,
        version: dd.XJ,
        editorCount: dd.fJ,
        peers: dd.nJ,
        updates: dd.UJ,
        playerId: dd.yJ,
        playerName: dd.DJ,
        colour: dd.TJ,
        anchor: dd.EJ,
        head: dd.cJ,
        existingCursors: dd.hJ,
        files: dd.rJ,
        engineSettings: dd.uJ
      })
    }
  },
  40692: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => Xd,
      G: () => jd,
      H: () => Hd,
      I: () => nd,
      K: () => md,
      N: () => fd,
      O: () => Yd,
      P: () => rd,
      T: () => hd,
      W: () => Sd,
      e: () => ud,
      f: () => yd,
      j: () => Md,
      m: () => td,
      o: () => Fd,
      s: () => ad,
      w: () => Ud,
      z: () => bd
    });
    var pd = kd(1404),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(2337),
      Zd = kd(4709),
      gd = kd(4666);
    let Cd, Kd = !1,
      od = !1,
      ld = !1,
      Qd = !1;
    const Ld = 1300,
      Od = 3e3;
    let ed = 0,
      Rd = !1,
      Id = !1,
      Gd = 0;
    const vd = 2;
    let xd = !1,
      qd = !1;
    const Bd = new Set,
      sd = new Set;

    function ad() {
      return Kd
    }

    function Md() {
      return Id
    }

    function Fd() {
      return qd
    }

    function Yd() {
      return (0, Wd.s)() && !qd
    }

    function md(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd !== qd) {
        qd = dd;
        for (const dd of [...sd]) dd(qd);
        Jd && hd()
      }
    }

    function bd(dd) {
      return sd.add(dd), () => {
        sd.delete(dd)
      }
    }

    function Sd() {
      (0, Zd.i)(Pd.y.Menu, (0, Wd.s)() ? 0 : Pd.y.Menu)
    }

    function jd() {
      Id = !1, Gd = 0, Sd(), hd()
    }

    function Xd(dd) {
      return Bd.add(dd), () => {
        Bd.delete(dd)
      }
    }

    function fd(dd) {
      od = !1, dd !== Kd && (Kd = dd, Qd = !1, clearTimeout(Cd), ld = !Kd && xd, Kd ? (Rd = !1, Id = !1, Gd = 0) : Yd() && !xd && (Id = !0), xd = !1, Kd && !Yd() && zd(), wd(), ld && hd())
    }

    function nd(dd) {
      dd !== Rd && (Rd = dd, dd || hd())
    }

    function Ud() {
      od = !1, Qd || !0 !== Ed() || (Qd = !0, clearTimeout(Cd), Cd = setTimeout(Dd, Ld))
    }

    function yd() {
      return (!od || performance.now() - ed > Od) && (od = (0, gd.P)().lockPointer(), ed = performance.now()), od
    }

    function Dd() {
      Td() && cd() && yd()
    }

    function Td() {
      return Yd() && !Kd && !Rd && !(0, pd.d)()
    }

    function Ed() {
      var dd;
      return "undefined" === typeof navigator || null === (dd = navigator.userActivation) || void 0 === dd ? void 0 : dd.isActive
    }

    function cd() {
      return ld && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Ed()
    }

    function hd() {
      Yd() ? Td() && !Id && cd() && yd() : Kd && !xd && zd()
    }

    function rd() {
      Id ? navigator.vendor.startsWith("Apple") ? Vd() : Gd = vd : hd()
    }

    function ud() {
      Gd > 0 && 0 === --Gd && Vd()
    }

    function td() {
      Gd = 0
    }

    function Vd() {
      Td() && !0 === Ed() && yd()
    }

    function zd() {
      xd = !0, (0, gd.P)().unlockPointer()
    }

    function Hd() {
      od = !1, ld = !1, Qd = !1, clearTimeout(Cd), Rd = !1, Id = !1, Gd = 0, xd = !1;
      const dd = Kd;
      Kd = !1, dd && wd()
    }

    function wd() {
      for (const dd of [...Bd]) dd(Kd);
      Nd.j.nO("pointerLockUpdate", Kd)
    }
  },
  40672: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ld,
      f: () => Zd,
      g: () => od,
      k: () => Cd,
      o: () => Pd,
      s: () => Kd,
      v: () => gd
    });
    let pd = null,
      Nd = null,
      Wd = null;

    function Pd(dd) {
      pd = dd
    }

    function Zd() {
      return pd
    }

    function gd(dd) {
      Nd = dd
    }

    function Cd() {
      return Nd
    }

    function Kd(dd) {
      Wd = dd
    }

    function od() {
      return Wd
    }

    function ld() {
      var dd, Jd;
      return !0 === (null === (dd = Nd) || void 0 === dd || null === (Jd = dd.currentViewer) || void 0 === Jd ? void 0 : Jd.inPlayback)
    }
  },
  40663: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      attachPlayGameSources: () => sp,
      playGameSources: () => Bp
    });
    var pd = kd(1932),
      Nd = kd(40672),
      Wd = kd(4666),
      Pd = kd(40575),
      Zd = kd(40676),
      gd = kd(39704),
      Cd = kd(29),
      Kd = kd(4688),
      od = kd(4680),
      ld = kd(40610),
      Qd = kd(40645),
      Ld = kd(40680),
      Od = kd(40624);
    (0, Od.l)(Kd.ac.Chat, (dd => {
      if (dd.payloadKind !== od.ic.Msgpack) return;
      const Jd = function(dd) {
        if (null === dd || "object" !== typeof dd || !("content" in dd)) return null;
        const {
          chatMsgId: Jd,
          content: kd,
          chatterEId: pd
        } = dd;
        return {
          serverChatMsgId: null !== Jd && void 0 !== Jd ? Jd : void 0,
          content: kd,
          chatterEId: void 0 === pd || null === pd ? void 0 : String(pd)
        }
      }((0, ld.c)(dd.payload));
      null !== Jd && Cd.j.nO("chat", Jd, !0)
    }));
    const ed = {
        chatReceived: (0, gd.m)((function(dd) {
          var Jd, kd, pd;
          return {
            id: dd,
            name: null !== (Jd = Ld.h.getName(dd)) && void 0 !== Jd ? Jd : null,
            local: (0, Qd.f)() === dd,
            profileEffect: null !== (kd = null === (pd = (0, Ld.l)(dd)) || void 0 === pd ? void 0 : pd.profileEffect) && void 0 !== kd ? kd : null
          }
        }))
      },
      Rd = {
        sendChatMessage(dd) {
          var Jd;
          let {
            IC: kd,
            channelName: pd
          } = dd;
          null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.clientApi.sendChat(kd, pd)
        }
      };
    var Id = kd(193),
      Gd = kd(1955),
      vd = kd(40569),
      xd = kd(39701);
    const qd = [0, 0, 0],
      Bd = {
        codeBlockClickable(dd) {
          var Jd;
          const kd = (0, Pd.k)();
          if (null === kd || void 0 === kd || !kd.isSessionLive) return !1;
          const pd = kd.api;
          if (0 !== (vd.u.playerFlags(pd.apiView, 0) & vd.Ud.Crouching)) return !1;
          const Nd = pd.queries.directorEntity(pd.localId) >= vd.vb.BYTES ? pd.memoryData(pd.scratch(), vd.vb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Nd) return !1;
          for (let Wd = 0; Wd < 3; Wd++) qd[Wd] = vd.vb.feet(Nd, 0, Wd);
          return qd[1] += vd.vb.eyeHeight(Nd, 0), (0, xd.e)(qd, dd, null !== (Jd = Gd.b.get("blockReach")) && void 0 !== Jd ? Jd : Id.g.pI)
        }
      },
      sd = {
        clickCodeBlock(dd) {
          var Jd;
          null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.clickCodeBlock(dd)
        }
      };
    var ad = kd(40580),
      Md = kd(40687),
      Fd = kd(1013),
      Yd = kd(39197),
      md = kd(4657),
      bd = kd(40592),
      Sd = kd(40578),
      jd = kd(40601);

    function Xd(dd) {
      if (null === dd) return null;
      const Jd = [];
      for (const kd of dd) {
        const dd = Object.keys(kd)[0];
        if ("Sk" === dd) {
          const {
            str: dd,
            style: pd,
            clickableUrl: Nd
          } = kd.Sk, Wd = Object.keys(dd)[0], Pd = dd[Wd];
          "string" !== Wd && "styledEntityName" !== Wd && "styledTranslatedText" !== Wd || Jd.push({
            str: Pd,
            style: pd,
            clickableUrl: Nd
          })
        } else Jd.push(kd[dd])
      }
      return Jd
    }
    const fd = {
      screenPos(dd) {
        var Jd, kd;
        return null !== (Jd = null === (kd = (0, Pd.k)()) || void 0 === kd ? void 0 : kd.renderFrame.projectWorldPosToScreenPos(dd)) && void 0 !== Jd ? Jd : {
          x: 0,
          y: 0
        }
      }
    };
    let nd = !1;

    function Ud() {
      nd || (nd = !0, (0, Od.l)(Kd.ac.ProgressBarUpdate, (dd => {
        const Jd = (0, jd.f)(dd);
        (0, jd.d)(Jd) && Cd.j.nO("progressBarUpdate", Jd, !0)
      })), (0, Od.l)(bd.D, (dd => {
        const Jd = (0, jd.e)(bd.D, dd);
        Jd && Cd.j.nO("middleScreenBarInitiate", {
          duration: Jd.LJ,
          OJ: Jd.OJ,
          horizBarRemOffset: Jd.eJ
        }, !0)
      })), (0, Od.l)(Kd.ac.RemoveMiddleScreenBar, (() => {
        Cd.j.nO("middleScreenBarRemove")
      })), (0, Od.l)(bd.mb, (dd => {
        const Jd = (0, jd.e)(bd.mb, dd);
        if (Jd) {
          var kd;
          const dd = Jd.Yd ? null === (kd = (0, Pd.k)()) || void 0 === kd ? void 0 : kd.renderFrame.projectDirectionToScreenPos(Jd.Yd) : void 0;
          Cd.j.nO("sendHitmarker", {
            Fd: Jd.Fd,
            screenPos: dd
          }, !0)
        }
      })), (0, Od.l)(bd.ub, (dd => {
        const Jd = (0, jd.e)(bd.ub, dd);
        if (Jd) {
          const {
            id: dd,
            position: kd,
            style: pd,
            Ip: Nd,
            vp: Wd
          } = Jd;
          Cd.j.nO("setDirectionArrow", {
            id: dd,
            position: kd,
            style: pd,
            text: Xd(Nd),
            vp: Wd
          }, !0)
        }
      })), (0, Od.l)(bd.g, (dd => {
        const Jd = (0, jd.e)(bd.g, dd);
        Jd && Cd.j.nO("clearDirectionArrow", {
          id: Jd.id
        }, !0)
      })), (0, Od.l)(bd.v, (dd => {
        const Jd = (0, jd.e)(bd.v, dd);
        Jd && Cd.j.nO("flyingMiddleMessage", {
          content: Xd(Jd.bk),
          Xk: Jd.Xk,
          fk: Jd.fk
        }, !0)
      })), (0, Od.l)(Kd.ac.WorldVariation, (dd => {
        const Jd = (0, jd.f)(dd);
        if ("string" === typeof Jd) {
          const dd = Jd === Fd.f ? null : {
            message: `Currently loaded as variation: ${Jd}`,
            type: "Warning"
          };
          Cd.j.nO("showPermanentBottomMessage", dd, !0)
        }
      })), (0, Od.l)(bd.Q, (dd => {
        const Jd = (0, jd.e)(bd.Q, dd);
        Jd && function(dd, Jd) {
          const {
            type: kd,
            params: pd
          } = (0, Yd.e)(Jd), Nd = {
            ...pd
          };
          for (const Wd of Yd.b) Nd[Wd] && (Nd[Wd] = Xd(Nd[Wd]));
          md.d.queueQTE(dd, kd, Nd).getResult().then((Jd => {
            var kd;
            "boolean" === typeof Jd && (null === (kd = (0, Pd.k)()) || void 0 === kd || kd.send(Sd.e.QteResponse, {
              qteId: dd,
              qteResponse: Jd
            }))
          }))
        }(Jd.id, Jd.yp)
      })), (0, Od.l)(bd.eb, (dd => {
        const Jd = (0, jd.e)(bd.eb, dd);
        "number" === typeof Jd && md.d.cancelQTE(Jd)
      })), (0, Od.f)((() => {
        md.d.reset(), Cd.j.nO("showPermanentBottomMessage", null, !0)
      })), (0, Od.h)((() => {
        md.d.reset()
      })), (0, Od.l)(Kd.ac.EditItemCraftingRecipes, (dd => {
        const Jd = (0, jd.f)(dd);
        (0, jd.d)(Jd) && Cd.j.nO("craftingRecipesEdited", {
          itemName: Jd.craftingRecipeItemName,
          recipesForItem: Jd.recipesForItem
        })
      })), (0, Od.l)(bd.ab, (dd => {
        const Jd = (0, jd.e)(bd.ab, dd);
        Jd && Cd.j.nO("craftingRecipesEdited", {
          itemName: Jd.nk,
          recipesForItem: []
        })
      })))
    }
    var yd = kd(22);
    const Dd = [{
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

    function Td(dd) {
      return vd.u.playerFlags(dd.api.apiView, 0)
    }
    const Ed = {
        freeCamera: (0, Qd.e)((dd => () => {
          const Jd = dd.isSessionLive && 0 !== (Td(dd) & vd.Ud.FreeCamMoves),
            kd = dd.freeCameraAllowed() && null === yd.d.get("scriptedCameraFacing");
          return Dd[(kd ? 2 : 0) + (Jd ? 1 : 0)]
        }), Dd[0], (dd => (0, Wd.z)(dd)))
      },
      cd = {
        setFreeCameraMovesFly: dd => {
          var Jd;
          null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.setFreeCameraMovesFly(dd)
        }
      },
      hd = {
        freeCameraPos: () => {
          const dd = (0, Pd.k)();
          return null !== dd && void 0 !== dd && dd.isSessionLive && dd.renderFrame.hasView && 0 !== (Td(dd) & vd.Ud.FreeCam) ? dd.renderFrame.cameraPosition : null
        }
      };
    var rd = kd(39314);
    let ud = !1,
      td = !1;

    function Vd() {
      const dd = (0, Pd.k)();
      if (null === dd || void 0 === dd || !dd.isSessionLive) return void(ud = !1);
      const Jd = 0 !== (vd.u.playerFlags(dd.api.apiView, 0) & vd.Ud.FreeCam);
      Jd !== ud && (ud = Jd, (0, rd.b)(Jd))
    }
    var zd = kd(313),
      Hd = kd(37195),
      wd = kd(1964);
    var Ad = kd(40689),
      dJ = kd(40636);
    const JJ = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let kJ = "off";

    function pJ(dd) {
      var Jd;
      return null === dd ? null : {
        label: null !== (Jd = (0, Ad.d)(dd, "interactionPrompt")) && void 0 !== Jd ? Jd : null
      }
    }
    const NJ = new Map([
      [vd.zc.Open, {
        label: gd.h.open
      }],
      [vd.zc.Close, {
        label: gd.h.close
      }],
      [vd.zc.Milk, {
        label: gd.h.milk
      }],
      [vd.zc.Shear, {
        label: gd.h.shear
      }],
      [vd.zc.Tame, {
        label: gd.h.tame
      }],
      [vd.zc.Feed, {
        label: gd.h.feed
      }],
      [vd.zc.Ride, {
        label: gd.h.ride
      }]
    ]);
    class WJ {
      constructor() {
        this.target = JJ, this.NC = vd.kd, this.optionName = null, this.pickaxe = new gd.e
      }
      read(dd) {
        var Jd;
        const kd = vd.u.targetBlockId(dd.api.apiView, 0);
        kd !== this.NC && (this.NC = kd, this.optionName = kd === vd.kd ? null : `${dd.tables.getMetaInfo(kd).rootName}CrosshairText`);
        const pd = null === this.optionName ? null : null !== (Jd = dd.tables.getClientOption(this.optionName)) && void 0 !== Jd ? Jd : null;
        this.pickaxe.update(function(dd, Jd) {
          var kd, pd, Nd;
          if (0 === (vd.u.playerFlags(dd.api.apiView, 0) & vd.Ud.Breaking) || Jd === vd.kd || 0 === Jd) return null;
          const {
            tables: Wd
          } = dd;
          if (!0 === Wd.getClientOption("creative")) return null;
          const Pd = Wd.nameOfId(Jd),
            Zd = null === (kd = dd.items.EC()) || void 0 === kd ? void 0 : kd.name,
            gd = null !== (pd = Wd.getItemStat(Pd, "harvestLevel")) && void 0 !== pd ? pd : 0;
          return (0, zd.Hc)({
            blockHarvestType: Wd.getDefaultItemStat(Pd, "harvestType"),
            blockHarvestLevel: Wd.getDefaultItemStat(Pd, "harvestLevel"),
            harvestLevel: gd,
            heldToolType: void 0 === Zd ? void 0 : Wd.getDefaultItemStat(Zd, "harvests"),
            heldToolLevel: void 0 === Zd ? void 0 : Wd.getDefaultItemStat(Zd, "level")
          }) && null !== (Nd = Hd.o[gd]) && void 0 !== Nd ? Nd : null
        }(dd, kd)), dd.watchPromptPick(kJ);
        const Nd = "touch" === kJ ? function(dd) {
          var Jd;
          const kd = dd.interactLabel;
          return kd === vd.zc.Entity ? pJ(dd.promptEntity) : kd === vd.zc.TameWith ? {
            label: (0, gd.u)(dd.tables.nameOfId(dd.interactIcon))
          } : null !== (Jd = NJ.get(kd)) && void 0 !== Jd ? Jd : null
        }(dd) : pJ(dd.promptEntity);
        return this.target = (0, wd.s)(this.target, {
          interactPrompt: Nd,
          blockText: pd,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let PJ = null;
    const ZJ = {
      current: () => {
        var dd, Jd;
        return null !== (dd = null === (Jd = PJ) || void 0 === Jd ? void 0 : Jd.target) && void 0 !== dd ? dd : JJ
      },
      watch: dd => {
        const Jd = new WJ;
        PJ = Jd;
        const kd = (0, Qd.h)((kd => {
          let pd = Jd.read(kd);
          dd(pd);
          const Nd = (0, Wd.D)((() => {
            const Nd = Jd.read(kd);
            Nd !== pd && (pd = Nd, dd(Nd))
          }));
          return () => {
            Nd(), kd.watchPromptPick("off")
          }
        }));
        return () => {
          kd(), PJ === Jd && (PJ = null)
        }
      }
    };
    let gJ = 0,
      CJ = 0;
    const KJ = {
        health: gd.q,
        aura: gd.j,
        hotbar: dJ.e.states.hotbar,
        heldItemAim: dJ.e.states.heldItemAim,
        crouching: (0, Qd.e)((dd => function(dd) {
          const Jd = () => 0 !== (vd.u.playerFlags(dd.apiView, 0) & vd.Ud.Crouching);
          return {
            current: Jd,
            watch(dd) {
              let kd = Jd();
              return (0, Wd.z)((() => {
                const pd = Jd();
                pd !== kd && (kd = pd, dd(pd))
              }))
            }
          }
        }(dd.api).current), !1, (dd => (0, Wd.z)(dd))),
        flight: (0, Qd.e)((dd => () => function(dd) {
          const Jd = vd.u.playerFlags(dd.apiView, 0);
          return (0, gd.n)(0 !== (Jd & vd.Ud.CanFly), 0 !== (Jd & vd.Ud.Flying))
        }(dd.api)), (0, gd.n)(!1, !1), (dd => (0, Wd.z)(dd))),
        gliderBoostFuel: (0, Qd.e)((dd => () => vd.u.gliderBoostFuel(dd.api.apiView, 0)), 0, (dd => (0, Wd.z)(dd))),
        crosshairTarget: ZJ
      },
      oJ = {
        hotbarSlotRequested: dJ.e.events.hotbarSlotRequested,
        hotbarScrolled: dJ.e.events.hotbarScrolled,
        numberKeyPressed: dJ.e.events.numberKeyPressed,
        shotDamageToShow: (0, gd.t)((dd => !0 === (0, Ad.d)(dd, "showDamageAmounts")))
      },
      lJ = {
        selectHotbarSlot: dJ.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: dd => {
          kJ = dd
        }
      },
      QJ = {
        momentumFrac: function() {
          var dd, Jd, kd;
          const pd = (0, Pd.k)(),
            Nd = performance.now(),
            Wd = null === pd || void 0 === pd || null === (dd = pd.items.EC()) || void 0 === dd || null === (Jd = dd.attributes) || void 0 === Jd || null === (kd = Jd.customAttributes) || void 0 === kd ? void 0 : kd.enchantments;
          return gJ = null !== pd && null !== Wd && void 0 !== Wd && Wd.Momentum ? 0 !== (vd.u.playerFlags(pd.api.apiView, 0) & vd.Ud.Breaking) ? Math.max(0, vd.u.momentumFrac(pd.api.apiView, 0)) : Math.max(0, gJ - (Nd - CJ) / 1500) : 0, CJ = Nd, gJ
        }
      };
    var LJ = kd(40571);
    const OJ = {
      lobbyManage(dd) {
        var Jd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.LobbyManage, dd)
      }
    };
    var eJ = kd(1260),
      RJ = kd(36660),
      IJ = kd(8706),
      GJ = kd(1670),
      vJ = kd(2337),
      xJ = kd(4696);
    let qJ = !1;

    function BJ(dd) {
      qJ = dd
    }

    function sJ() {
      "inGame" !== yd.d.get("gameState") || (0, GJ.q)() || Cd.j.nO("ctrlCrouchWithoutFullscreen")
    }
    let iJ = !1;
    const aJ = {
        OpenEmoteWheel: () => {
          BJ(!0), iJ = !0, queueMicrotask((() => {
            iJ && (iJ = !1, Cd.j.nO("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Cd.j.nO("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, RJ.e)() || Cd.j.nO("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, RJ.e)() || Cd.j.nO("XKeyPressed")
        },
        CtrlCrouch: sJ,
        "primary-fire": () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      MJ = {
        OpenEmoteWheel: () => {
          BJ(!1), iJ ? (iJ = !1, (0, IJ.c)() || Cd.j.nO("requestEmoteWheelHoldOpen")) : Cd.j.nO("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: sJ,
        "primary-fire": () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Cd.j.nO("mouseState", {
            iK: eJ.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let FJ = !1;

    function YJ() {
      FJ || (FJ = !0, (0, xJ.i)((dd => {
        if ((0, Nd.b)()) return;
        const Jd = (0, xJ.e)(dd) ? "primary-fire" : dd.action;
        var kd;
        if (dd.down) {
          if (0 === (dd.flags & vJ.d.Synthetic)) {
            var pd;
            null === (pd = aJ[Jd]) || void 0 === pd || pd.call(aJ)
          }
        } else null === (kd = MJ[Jd]) || void 0 === kd || kd.call(MJ)
      })))
    }
    var mJ = kd(300),
      bJ = kd(95),
      SJ = kd(33),
      jJ = kd(40692),
      XJ = kd(1348),
      fJ = kd(39150);
    let nJ = !1;
    const UJ = {
      sendCodeCollab(dd) {
        var Jd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.CodeCollab, (0, Sd.l)(dd), (0, fJ.h)(dd))
      }
    };
    var yJ = kd(39252);
    let DJ = null,
      TJ = !1,
      EJ = null;

    function cJ() {
      return "inGame" === yd.d.get("gameState") && !(0, RJ.e)()
    }
    const hJ = {
        OpenInventory: dd => {
          (0, GJ.x)(dd, "inventory", (0, LJ.n)())
        },
        OpenShop: dd => {
          DJ && cJ() && (0, GJ.t)(dd, mJ.s.SHOP, !DJ.shopIsEmpty(Gd.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: dd => {
          cJ() && (0, GJ.t)(dd, mJ.s.LOBBY_LEADERBOARD, (0, yJ.e)({
            lobbyLeaderboardInfo: Gd.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Gd.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: dd => {
          var Jd;
          const kd = null === (Jd = DJ) || void 0 === Jd ? void 0 : Jd.getClientGameMapKey();
          kd ? (0, GJ.y)(dd, !0, kd) : (0, GJ.x)(dd, "retentionFeatures", !(!Gd.b.get("_tasks") && !Gd.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: dd => {
          (0, GJ.x)(dd, "inviteLink", bJ.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: dd => {
          cJ() && function(dd) {
            var Jd;
            const kd = (0, Pd.k)(),
              pd = null !== kd && void 0 !== kd && kd.isSessionLive ? kd.api : null,
              Nd = pd ? pd.yI(pd.localId) : null,
              Wd = null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.map((dd => Math.floor(dd)))) && void 0 !== Jd ? Jd : null;
            (0, GJ.y)(dd, null !== Wd && (0, fJ.d)((0, XJ.d)()), (() => {
              Cd.j.nO("EditLobbyCode", Wd)
            }))
          }(dd)
        },
        HideUi: () => {
          Cd.j.nO("showUi", !1)
        }
      },
      rJ = {
        HideUi: () => {
          Cd.j.nO("showUi", !0)
        }
      };

    function uJ() {
      TJ || (TJ = !0, kd.e(153).then((() => kd(42522))).then((dd => {
        DJ = dd
      }), (dd => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", dd)
      })), (0, jJ.C)((dd => {
        dd || !(0, jJ.j)() || (0, bJ.isMobile)() || !SJ.i.getItem("disableFullscreen") || (0, GJ.n)() || yd.d.set({
          openEverythingMenuName: mJ.s.SETTINGS
        })
      })), (0, xJ.i)((dd => {
        let {
          action: Jd,
          down: kd,
          press: pd
        } = dd;
        var Wd, Pd;
        (0, Nd.b)() || (kd ? null === (Wd = hJ[Jd]) || void 0 === Wd || Wd.call(hJ, function(dd) {
          var Jd;
          if (0 === dd || (null === (Jd = EJ) || void 0 === Jd ? void 0 : Jd.press) !== dd) {
            const Jd = {
              press: dd,
              event: new Event("inputAction")
            };
            EJ = Jd, queueMicrotask((() => {
              EJ === Jd && (EJ = null)
            }))
          }
          return EJ.event
        }(pd)) : null === (Pd = rJ[Jd]) || void 0 === Pd || Pd.call(rJ))
      })))
    }
    var tJ = kd(39118),
      VJ = kd(39131),
      zJ = kd(39126);
    const HJ = {
      completeTask(dd) {
        var Jd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.CompleteTask, (0, Sd.p)(dd))
      },
      setServerCookie(dd) {
        var Jd;
        let {
          key: kd,
          value: pd
        } = dd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.GeneralCookieSet, (0, Sd.s)({
          Vg: kd,
          zg: pd
        }))
      },
      answerUiRequest(dd) {
        var Jd;
        let {
          id: kd,
          WK: pd
        } = dd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.UiRequestResp, (0, Sd.R)({
          RK: kd,
          IK: pd,
          GK: 5
        }))
      },
      chooseRewardedAd(dd) {
        var Jd;
        let {
          id: kd,
          WK: pd
        } = dd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.UiRequestResponded, (0, Sd.Q)({
          id: kd,
          WK: pd
        }))
      },
      requestLeaderboard(dd) {
        var Jd;
        let {
          category: kd,
          timeframe: pd,
          seeTop: Nd
        } = dd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.LeaderboardRequest, {
          category: kd,
          timeframe: pd,
          seeTop: Nd
        })
      }
    };
    let wJ = !1;
    const AJ = Id.g.yR / 2,
      dk = [AJ, -AJ, -AJ, -AJ, AJ, AJ, -AJ, AJ],
      Jk = [0, 0, 0];

    function kk(dd, Jd, kd) {
      for (let pd = 0; pd < dd.length; pd += 2)
        if (dd[pd] === Jd && dd[pd + 1] === kd) return !0;
      return !1
    }
    const pk = {
      blocksStandingOn: function() {
        const dd = (0, Pd.k)();
        if (null === dd) return [];
        const {
          api: Jd,
          chunks: kd,
          tables: pd
        } = dd;
        if (!Jd.readPosition(Jd.localId, Jk)) return [];
        const [Nd, Wd, Zd] = Jk, gd = Math.ceil(Wd) - 1, Cd = [], Kd = [];
        for (let Pd = 0; Pd < dk.length; Pd += 2) {
          const dd = Nd + dk[Pd],
            Jd = Zd + dk[Pd + 1];
          if (Number.isInteger(dd) || Number.isInteger(Jd)) continue;
          const Wd = Math.floor(dd),
            od = Math.floor(Jd);
          if (kk(Kd, Wd, od)) continue;
          const ld = kd.NC(Wd, gd, od);
          pd.isSolidBlockId(ld) && (Kd.push(Wd, od), Cd.push(pd.nameOfId(ld)))
        }
        return Cd
      },
      dropAhead: function() {
        const dd = (0, Pd.k)();
        return null !== dd && 0 !== (vd.u.playerFlags(dd.api.apiView, 0) & vd.Ud.DropAhead)
      }
    };
    var Nk = kd(37117),
      Wk = kd(39228),
      Pk = kd(1371),
      Zk = kd(40650);
    const gk = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Ck = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Kk() {
      const dd = new Set;
      return {
        add: Jd => (dd.add(Jd), () => {
          dd.delete(Jd)
        }),
        fire() {
          for (const Jd of dd) Jd()
        }
      }
    }
    const lk = Object.freeze([]);

    function Qk(dd, Jd) {
      let kd, {
        rereads: pd,
        followLocalId: Nd
      } = Jd;
      const Pd = () => (kd = (0, wd.s)(kd, dd()), kd);
      return {
        current: Pd,
        watch(dd) {
          const Jd = (0, Ld.e)((Jd => {
            pd(Jd) && dd(Pd())
          }));
          if (!Nd) return Jd;
          let kd = (0, Qd.f)();
          const Zd = (0, Wd.D)((() => {
            const Jd = (0, Qd.f)();
            Jd !== kd && (kd = Jd, dd(Pd()))
          }));
          return () => {
            Jd(), Zd()
          }
        }
      }
    }
    const Lk = {
        players: Qk((function() {
          const dd = Ld.h.ids(),
            Jd = {};
          for (const Wd of dd) {
            var kd, pd, Nd;
            Jd[Wd] = {
              name: null !== (kd = Ld.h.getName(Wd)) && void 0 !== kd ? kd : null,
              ranks: null !== (pd = Ld.h.getSetting(Wd, "ranks")) && void 0 !== pd ? pd : lk,
              cosmetics: null !== (Nd = (0, Ld.l)(Wd)) && void 0 !== Nd ? Nd : null
            }
          }
          return {
            ids: dd,
            byId: Jd,
            localId: (0, Qd.f)()
          }
        }), {
          rereads: dd => "roster" !== dd.kind || dd.members || dd.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Qk((function() {
          const dd = {};
          for (const Nd of Ld.h.ids()) {
            var Jd, kd, pd;
            dd[Nd] = {
              colour: null !== (Jd = Ld.h.getSetting(Nd, "colorInLobbyLeaderboard")) && void 0 !== Jd ? Jd : null,
              values: null !== (kd = Ld.h.getSetting(Nd, "lobbyLeaderboardValues")) && void 0 !== kd ? kd : null,
              tags: null !== (pd = Ld.h.getSetting(Nd, "lobbyLeaderboardTags")) && void 0 !== pd ? pd : null
            }
          }
          return dd
        }), {
          rereads: function(dd) {
            if ("roster" !== dd.kind) return "reset" === dd.kind;
            const {
              members: Jd,
              settings: kd
            } = dd;
            return Jd || kd.has("colorInLobbyLeaderboard") || kd.has("lobbyLeaderboardValues") || kd.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ok = {
        cosmeticsUpdated: {
          watch: dd => (0, Ld.e)((Jd => {
            if ("cosmetics" !== Jd.kind) return;
            const kd = (0, Qd.f)();
            dd(Jd.updates.map((dd => {
              let {
                Xp: Jd,
                np: pd,
                Up: Nd
              } = dd;
              return {
                local: Jd === kd,
                np: pd,
                Up: Nd
              }
            })))
          }))
        }
      };
    var ek = kd(2793),
      Rk = kd(1753),
      Ik = kd(645),
      Gk = kd(40698);
    let vk = !1,
      xk = null;
    const qk = {
      setShopOpen(dd) {
        var Jd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.ShopMenuChanged, (0, Sd.K)(dd))
      },
      buyShopItem(dd) {
        var Jd;
        let {
          categoryKey: kd,
          itemKey: pd,
          userInput: Nd
        } = dd;
        null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.send(Sd.e.ItemBought, {
          categoryKey: kd,
          itemKey: pd,
          shopVersion: Gd.b.get("_shopVersion"),
          userInput: Nd
        })
      }
    };
    let Bk = !1;
    var sk = kd(4709);
    const ik = vJ.y.LookFrozen | vJ.y.ClicksSuppressed;

    function ak(dd, Jd) {
      var kd;
      null !== (kd = (0, Pd.k)()) && void 0 !== kd && kd.send(dd, Jd) || console.warn(`[bloxd-wasm-client] message ${dd} not sent: no live game or the core's command ring is full`)
    }(0, Od.l)(bd.wb, (dd => {
      const Jd = (0, jd.e)(bd.wb, dd);
      void 0 !== Jd && Cd.j.nO("setDiscordReportKey", Jd)
    }));
    const Mk = {
      ignorePlayer(dd) {
        ak(Sd.e.IgnoreUser, (0, Sd.t)({
          xP: dd
        }))
      },
      reportPlayer(dd) {
        let {
          playerId: Jd,
          chatMsgId: kd,
          WC: pd,
          details: Nd
        } = dd;
        ak(Sd.e.UserReport, (0, Sd.$)({
          XC: Jd,
          fC: kd,
          WC: pd,
          PC: Nd
        }))
      },
      reportWorldCodeChat(dd) {
        let {
          chatMsgId: Jd,
          WC: kd,
          details: pd
        } = dd;
        ak(Sd.e.UserReport, (0, Sd.$)({
          XC: "",
          fC: Jd,
          WC: kd,
          PC: pd
        }))
      },
      requestDiscordReportKey(dd) {
        ak(Sd.e.ReqDiscordReportKey, (0, Sd.D)(dd))
      },
      reportLobbyOrGame(dd) {
        let {
          target: Jd,
          WC: kd,
          details: pd
        } = dd;
        "customGame" === Jd ? ak(Sd.e.CustomGameReport, (0, Sd.r)({
          WC: kd,
          PC: pd
        })) : ak(Sd.e.LobbyReport, (0, Sd.w)({
          WC: kd,
          PC: pd
        }))
      },
      updateMyCosmetic(dd) {
        ak(Sd.e.UpdateMyCosmetic, (0, Sd.Y)(dd))
      },
      holdEmoteWheel(dd) {
        !dd || qJ ? (0, sk.i)(ik, dd ? ik : 0) : Cd.j.nO("requestEmoteWheelHoldRelease")
      }
    };
    var Fk = kd(40705),
      Yk = kd(9331),
      mk = kd(39716);
    const bk = [0, 0, 0],
      Sk = [0, 0, 0],
      jk = [0, 0, 0],
      Xk = {
        blockAtViewPoint(dd) {
          let {
            x: Jd,
            y: kd
          } = dd;
          const pd = (0, Pd.k)();
          if (null === pd || void 0 === pd || !pd.renderFrame.hasView) return null;
          const {
            renderFrame: Nd,
            clientApi: Wd,
            api: Zd
          } = pd;
          let gd = 0;
          return (0, mk.g)(((dd, Jd, kd) => (gd = Wd.getBlockId(dd, Jd, kd), 0 !== gd)), Nd.cameraPosition, (0, mk.k)((dd => vd.u.viewProj(Zd.apiView, 0, dd)), Jd, kd, bk), mk.c, Sk, jk) ? {
            pos: [Sk[0], Sk[1], Sk[2]],
            normal: [jk[0], jk[1], jk[2]],
            name: (0, Yk.e)(gd)
          } : null
        }
      },
      fk = {
        setBlockHighlight(dd) {
          var Jd;
          null === (Jd = (0, Pd.k)()) || void 0 === Jd || Jd.setBlockHighlight(dd)
        }
      };
    var nk = kd(1942),
      Uk = kd(40707),
      yk = kd(40714),
      Dk = kd(4344),
      Tk = kd(4322),
      Ek = kd(40719),
      ck = kd(3130),
      hk = kd(3134);
    let rk = null,
      uk = null;

    function tk(dd) {
      const Jd = dd.startsWith(hk.l),
        [kd, pd = kd, Nd = kd] = (Jd ? dd.slice(hk.l.length) : dd).split(hk.i);
      return {
        top: kd,
        left: pd,
        right: Nd,
        half: Jd
      }
    }

    function Vk(dd) {
      const Jd = null === rk ? void 0 : (0, ck.c)(dd),
        kd = void 0 === Jd ? 0 : rk.codes[Jd];
      return 0 === kd ? void 0 : rk.pool[kd - 1]
    }
    var zk = kd(3123),
      Hk = kd(4309),
      wk = kd(4339),
      Ak = kd(40728),
      dp = kd(40733);
    const Jp = "item:";
    let kp = null,
      pp = null,
      Np = null,
      Wp = null,
      Pp = !1,
      Zp = !1;

    function gp() {
      return Zp || (Zp = !0, (0, wk.h)().then((dd => {
        dd && (0, nk.e)()
      }))), Np ??= Promise.all([(0, zk.e)(), (uk ??= kd.e(1).then((() => kd(42544))).then((dd => {
        let {
          BLOCK_FACE_RUNS: Jd,
          BLOCK_FACES: kd,
          MAX_FACE_ITEM_ID: pd
        } = dd;
        rk = {
          codes: (0, hk.B)(Jd, pd + 1),
          pool: kd.split(hk.r).map(tk)
        }
      }), (dd => {
        throw uk = null, dd
      })), uk), (0, dp.f)(), kd.e(190).then((() => kd(9252)))]).then((dd => {
        let [, , Jd, kd] = dd;
        Jd.followBundledTextures(), kp = Jd, pp = kd, (0, nk.e)()
      }), (dd => {
        Np = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", dd)
      })), Np
    }

    function Cp(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = (0, Ak.g)()) || void 0 === kd ? void 0 : kd.textureUrl(dd)) && void 0 !== Jd ? Jd : kp.itemSpriteUrl(dd)
    }

    function Kp(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = (0, Ak.g)()) || void 0 === kd ? void 0 : kd.textureUrl(dd)) && void 0 !== Jd ? Jd : kp.blockTextureUrl(dd)
    }

    function op(dd) {
      var Jd;
      return null !== (Jd = (0, zk.c)(dd)) && void 0 !== Jd ? Jd : dd
    }

    function lp(dd, Jd) {
      var kd, pd, Nd;
      return null !== (kd = null !== (pd = null !== (Nd = Kp(dd)) && void 0 !== Nd ? Nd : null === Jd || void 0 === Jd ? void 0 : Jd.rotated[dd]) && void 0 !== pd ? pd : null === Jd || void 0 === Jd ? void 0 : Jd.animated[dd]) && void 0 !== kd ? kd : kp.notFoundUrl()
    }

    function Qp(dd) {
      return void 0 !== (0, ck.c)(dd) ? dd : /^[1-9][0-9]*$/.test(dd) ? (0, ck.d)(Number(dd)) : void 0
    }

    function Lp(dd) {
      var Jd;
      if (dd.startsWith(Jp)) {
        var kd;
        const Jd = (0, zk.c)(dd.slice(5));
        return null !== (kd = void 0 === Jd ? null : Cp(Jd)) && void 0 !== kd ? kd : kp.notFoundUrl()
      }
      return null !== (Jd = kp.particleUrl(dd)) && void 0 !== Jd ? Jd : kp.notFoundUrl()
    }

    function Op(dd, Jd) {
      return "StairsBlock" === dd ? dd : Jd ? "SlabBlock" : "CubeBlock"
    }
    const ep = {
        async blockIcon(dd) {
          var Jd;
          let {
            name: pd,
            size: Nd,
            lineWidth: Wd
          } = dd;
          await gp();
          const Pd = null !== (Jd = Qp(pd)) && void 0 !== Jd ? Jd : pd,
            Zd = (0, wk.c)(Pd, Nd, Wd);
          if (null !== Zd) return Zd;
          const gd = Vk(Pd),
            Cd = (0, ck.c)(Pd),
            Kd = void 0 === Cd || null === pp ? void 0 : pp.itemTypeNameOf(Cd);
          if (null === kp || void 0 === gd) return "";
          const od = [gd.top, gd.left, gd.right].some((dd => null === Kp(dd))),
            ld = od ? await (Wp ??= kd.e(202).then((() => kd(34385))).then((dd => (Pp && (Pp = !1, (0, nk.e)()), {
              rotated: dd.rotatedBlockTextures,
              animated: dd.animatedBlockTextures
            })), (dd => (Wp = null, Pp = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", dd), null))), Wp) : null;
          if (od && null === ld) return "";
          const Qd = {
              top: lp(gd.top, ld),
              left: lp(gd.left, ld),
              right: lp(gd.right, ld),
              itemType: Op(Kd, gd.half)
            },
            Ld = (0, Ak.e)(),
            Od = 0 === Ld ? Pd : `${Pd}#${Ld}`;
          return (await (0, Hk.e)()).drawBlockIconUrl(Od, Nd, Wd, (() => Qd))
        }
      },
      Rp = {
        itemIcon: function(dd) {
          var Jd, kd, Nd, Wd;
          if (null === kp) return gp(), pd.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(dd);
          if ((0, Tk.j)(dd)) return {
            kind: "icon",
            url: null !== (kd = null !== (Nd = null === (Wd = (0, Ak.g)()) || void 0 === Wd ? void 0 : Wd.textureUrl(dd)) && void 0 !== Nd ? Nd : kp.ingameIconUrl(dd)) && void 0 !== kd ? kd : kp.notFoundUrl()
          };
          if (dd.startsWith(Tk.d)) return {
            kind: "icon",
            url: Lp(dd.slice(Tk.d.length))
          };
          if (0 === (0, ck.e)()) return (0, Ek.e)(), pd.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(dd);
          const Pd = null !== (Jd = Qp(dd)) && void 0 !== Jd ? Jd : dd,
            Zd = (0, ck.c)(Pd),
            gd = void 0 === Zd ? void 0 : pp.itemTypeNameOf(Zd);
          if (void 0 !== Vk(Pd)) return {
            kind: "drawnBlock"
          };
          const Cd = function(dd) {
            var Jd;
            return null !== (Jd = Cp(op(dd))) && void 0 !== Jd ? Jd : kp.notFoundUrl()
          }(Pd);
          if ((0, wk.f)(Pd) && ! function(dd) {
              const Jd = (0, Ak.g)();
              return null !== Jd && (null !== Jd.textureUrl(op(dd)) || null !== Jd.modelUrl(dd))
            }(Pd)) return {
            kind: "model",
            url: Cd
          };
          if ("Gun" === gd) return {
            kind: "gun",
            url: Cd
          };
          if (void 0 !== Zd && "GrayscaleArmour" === pp.itemTypeOf(Zd) || Object.hasOwn(Dk.c, Pd)) {
            var Kd;
            const Jd = null !== (Kd = (0, Dk.d)(dd)) && void 0 !== Kd ? Kd : (0, Dk.d)(Pd);
            if (Jd) return {
              kind: "item",
              url: Cd,
              tint: Jd
            }
          }
          return {
            kind: "item",
            url: Cd
          }
        },
        hasIcon: function(dd) {
          return void 0 !== Qp(dd) || (0, Tk.j)(dd) || dd.startsWith(Tk.d)
        },
        isItemName: function(dd) {
          return void 0 !== Qp(dd)
        }
      };
    var Ip = kd(597),
      Gp = kd(39725);

    function vp(dd) {
      if (null === dd || void 0 === dd || !dd.isCoreRunning) return null;
      const {
        api: Jd,
        chunks: kd,
        items: pd,
        tables: Nd
      } = dd;
      return {
        playerFeet() {
          const dd = Jd.yI(Jd.localId);
          return null !== dd && void 0 !== dd && dd.every(Number.isFinite) ? dd : null
        },
        chunkBlocks: dd => kd.isLoaded(dd[0], dd[1], dd[2]) ? (dd, Jd, pd) => kd.NC(dd, Jd, pd) : null,
        blockName: dd => Nd.nameOfId(dd),
        inventory: () => ({
          slots: pd.playerItems().map((dd => dd ? {
            name: dd.name,
            amount: dd.amount
          } : null)),
          heldSlot: pd.selectedSlot
        }),
        nearby() {
          const kd = [];
          for (let Nd = 0; Nd < Jd.idStr.length; Nd++) {
            var pd;
            const Wd = Jd.idStr[Nd],
              Pd = Jd.serverIds[Nd],
              Zd = Jd.kinds[Nd];
            if (null === Wd || Jd.isLocal(Pd) || Zd >>> vd.d !== vd.q.Lifeform) continue;
            const gd = Jd.yI(Pd),
              Cd = Ip.k[Zd & vd.f];
            gd && void 0 !== Cd && kd.push({
              kind: "Player" === Cd ? "player" : Cd,
              name: null !== (pd = dd.clientApi.getEntityName(Wd)) && void 0 !== pd ? pd : null,
              position: gd
            })
          }
          return kd
        },
        droppedItems() {
          let dd = 0;
          for (let kd = 0; kd < Jd.idStr.length; kd++) null !== Jd.idStr[kd] && Jd.kinds[kd] >>> vd.d === vd.q.Item && dd++;
          return dd
        }
      }
    }
    const xp = {
        worldCodeAiChunk: dd => Promise.resolve((0, Gp.e)(vp((0, Pd.k)()), dd)),
        worldCodeAiGameState: () => Promise.resolve((0, Gp.f)(vp((0, Pd.k)())))
      },
      qp = function(dd) {
        const Jd = Kk(),
          pd = Kk(),
          Nd = new Set,
          Wd = new Set,
          Pd = () => {
            var Jd, kd;
            return null !== (Jd = null === (kd = dd.runtime()) || void 0 === kd ? void 0 : kd.currentViewer) && void 0 !== Jd ? Jd : null
          };
        let Zd = null,
          gd = null;
        const Kd = (dd, Jd) => ({
            current: dd,
            watch(kd) {
              let pd = dd();
              return Jd.add((() => {
                const Jd = dd();
                Jd !== pd && (pd = Jd, kd(Jd))
              }))
            }
          }),
          ld = dd => ({
            watch: Jd => (dd.add(Jd), () => {
              dd.delete(Jd)
            })
          }),
          Qd = dd => {
            const Jd = Pd(),
              kd = null === Jd || void 0 === Jd ? void 0 : Jd.view;
            Jd && kd && Jd.seek(Math.max(0, Math.min(kd.totalTicks - 1, kd.Do + dd * od.Gd)))
          },
          Ld = {
            replay: Kd((() => {
              var dd;
              const Jd = Pd(),
                kd = null !== (dd = null === Jd || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null;
              return null === Jd || null === kd || kd.state === od.sd.None ? (Zd = null, null) : (Zd = (0, wd.s)(Zd, {
                id: Jd.id,
                Do: kd.Do,
                totalTicks: kd.totalTicks,
                AY: od.Gd,
                playing: kd.state === od.sd.Playing,
                speed: kd.speed,
                cameraMode: kd.cameraMode,
                freecam: "freecam" === kd.cameraMode
              }), Zd)
            }), Jd),
            replayEdits: Kd((() => {
              var dd;
              const Jd = Pd(),
                kd = null !== (dd = null === Jd || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null;
              return null === Jd || null === kd || kd.state === od.sd.None ? (gd = null, null) : (gd = (0, wd.s)(gd, {
                cameraKeyframes: [...Jd.keyframes],
                playbackMark: kd.mark,
                fileName: Jd.fileName,
                unsavedChanges: Jd.unsavedChanges,
                suggestSaveAs: Jd.suggestSaveAs
              }), gd)
            }), Jd),
            replayRecorder: Kd((() => {
              var Jd, kd;
              return null !== (Jd = null === (kd = dd.runtime()) || void 0 === kd ? void 0 : kd.recorder.current) && void 0 !== Jd ? Jd : Zk.e.states.replayRecorder.current()
            }), pd),
            replayVideoExporting: {
              current: Wk.d,
              watch: dd => (0, Cd.n)("replayViewer|videoExportChanged", (() => {
                dd((0, Wk.d)())
              }))
            }
          },
          Od = {
            replayUiActionRequested: ld(Wd),
            replayViewerRequested: ld(Nd)
          },
          ed = dd => {
            for (const Jd of Nd) Jd(dd)
          },
          Rd = () => {
            var pd;
            !0 === (null === (pd = Pd()) || void 0 === pd ? void 0 : pd.isOpen) && Promise.all([kd.e(95), kd.e(64)]).then((() => kd(42529))).then((kd => {
              let {
                startWasmReplayVideoExport: pd
              } = kd;
              return pd({
                viewer: Pd,
                canvas: () => {
                  var Jd, kd;
                  return null !== (Jd = null === (kd = dd.canvas) || void 0 === kd ? void 0 : kd.call(dd)) && void 0 !== Jd ? Jd : null
                },
                watchViewer: Jd.add,
                requestViewer: ed
              })
            }), (dd => {
              console.error("Couldn't load the video export", dd), Pk.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((dd => {
              console.error("The video export failed", dd)
            }))
          },
          Id = {
            replayAction(dd) {
              if ((0, Wk.d)()) return;
              const Jd = Pd();
              switch (dd) {
                case "replaySkipBack":
                  Qd(-1);
                  break;
                case "replaySkipForward":
                  Qd(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Jd && void 0 !== Jd && Jd.view && Jd.setSpeed((0, Nk.e)(Jd.view.speed, "replaySpeedUp" === dd ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Jd || void 0 === Jd || Jd.addKeyframe()
              }
            },
            setReplayPlaying(dd) {
              var Jd, kd;
              (0, Wk.d)() || (dd ? null === (Jd = Pd()) || void 0 === Jd || Jd.play() : null === (kd = Pd()) || void 0 === kd || kd.pause())
            },
            seekReplay(dd) {
              var Jd;
              let {
                Do: kd,
                ignorePlaybackMark: pd
              } = dd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.seek(kd, null !== pd && void 0 !== pd && pd)
            },
            setReplayCameraMode(dd) {
              var Jd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.setCameraMode(dd)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(dd) {
              var Jd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.setKeyframe(dd)
            },
            moveReplayCameraKeyframe(dd) {
              var Jd;
              let {
                from: kd,
                to: pd
              } = dd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.moveKeyframe(kd, pd)
            },
            deleteReplayCameraKeyframes(dd) {
              var Jd;
              let {
                start: kd,
                end: pd
              } = dd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.deleteKeyframes(kd, pd)
            },
            setReplayPlaybackMark(dd) {
              var Jd;
              null === (Jd = Pd()) || void 0 === Jd || Jd.setMark(dd)
            },
            cropReplay(dd) {
              var Jd, kd;
              let {
                start: pd,
                end: Nd
              } = dd;
              return !(0, Wk.d)() && (null !== (Jd = null === (kd = Pd()) || void 0 === kd ? void 0 : kd.crop(pd, Nd)) && void 0 !== Jd && Jd)
            },
            holdReplayForShaderPackFailure(dd) {
              const Jd = Pd();
              Jd && (Jd.holdForShaderPackFailure(), function(dd) {
                kd.e(130).then((() => kd(39347))).then((Jd => {
                  let {
                    shaderPackPage: kd
                  } = Jd;
                  kd.block(dd)
                })).catch((dd => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", dd)
                }))
              }(dd))
            },
            exportReplayVideo() {
              Rd()
            },
            toggleRecording() {
              var Jd;
              null === (Jd = dd.runtime()) || void 0 === Jd || Jd.recorder.toggleRecording()
            },
            saveClip() {
              var Jd;
              null === (Jd = dd.runtime()) || void 0 === Jd || Jd.recorder.saveClip()
            },
            setRecorderPrefs(Jd) {
              var kd;
              let {
                clipping: pd,
                clipSeconds: Nd
              } = Jd;
              null === (kd = dd.runtime()) || void 0 === kd || kd.recorder.setPrefs(pd, Nd)
            },
            setReplayViewerOpen(Jd) {
              var kd;
              (0, RJ.i)(Jd) && (null === (kd = dd.runtime()) || void 0 === kd || kd.recorder.viewerShown(Jd))
            },
            recordFlyingMiddleText(Jd) {
              var kd;
              let {
                content: pd,
                Xk: Nd,
                angle: Wd,
                fk: Pd
              } = Jd;
              null === (kd = dd.runtime()) || void 0 === kd || kd.recorder.recordFlyingText(JSON.stringify(pd), Nd, Wd, Pd)
            },
            dragReplayCamera(Jd) {
              var kd;
              let {
                dx: pd,
                dy: Nd
              } = Jd;
              null === (kd = dd.freecam()) || void 0 === kd || kd.drag(pd, Nd)
            },
            moveReplayFreecam(Jd) {
              var kd;
              null === (kd = dd.freecam()) || void 0 === kd || kd.move(Jd)
            },
            holdReplayFreecamVertical(Jd) {
              var kd;
              let {
                action: pd,
                EC: Nd
              } = Jd;
              null === (kd = dd.freecam()) || void 0 === kd || kd.holdVertical(pd, Nd)
            }
          },
          Gd = dd => {
            var Jd;
            const kd = Pd(),
              pd = null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.view) && void 0 !== Jd ? Jd : null;
            gk.has(dd) ? (dd => {
              for (const Jd of Wd) Jd(dd)
            })(dd) : Ck.has(dd) ? Id.replayAction(dd) : "replayPlayPause" === dd ? kd && pd && pd.state !== od.sd.None && Id.setReplayPlaying(pd.state !== od.sd.Playing) : "replayChangeCameraMode" === dd ? null === kd || void 0 === kd || kd.cycleCameraMode() : "replayExit" === dd ? !0 === (null === kd || void 0 === kd ? void 0 : kd.inPlayback) && (0, XJ.n)("/") : "replayExportVideo" === dd && Rd()
          };
        let vd = !1;
        return {
          states: Ld,
          events: Od,
          commands: Id,
          lookups: {
            replayCamera() {
              var Jd, kd, pd;
              return !0 !== (null === (Jd = Pd()) || void 0 === Jd ? void 0 : Jd.isOpen) ? null : null !== (kd = null === (pd = dd.cameraView) || void 0 === pd ? void 0 : pd.call(dd)) && void 0 !== kd ? kd : null
            },
            leaveGameReloadsPage() {
              var dd;
              return !0 === (null === (dd = Pd()) || void 0 === dd ? void 0 : dd.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var dd;
              const kd = !0 === (null === (dd = Pd()) || void 0 === dd ? void 0 : dd.inPlayback);
              kd !== vd && (vd = kd, Cd.j.nO("connectedGameChanged")), Jd.fire()
            },
            recorderChanged: pd.fire,
            keyDown: dd => {
              var Jd;
              switch (dd) {
                case "recordGame":
                  return void Id.toggleRecording();
                case "recordClip":
                  return void((0, RJ.e)() || Id.saveClip())
              }(0, Wk.d)() || ("replayViewerOpen" !== dd ? dd.startsWith("replay") && ((0, RJ.e)() || !0 === (null === (Jd = Pd()) || void 0 === Jd ? void 0 : Jd.inPlayback)) && Gd(dd) : ed("toggle"))
            }
          }
        }
      }({
        runtime: Nd.k,
        cameraView: () => {
          var dd;
          const Jd = null === (dd = (0, Pd.k)()) || void 0 === dd ? void 0 : dd.renderFrame;
          if (!Jd) return null;
          const [kd, pd, Nd] = Jd.cameraPosition, [Wd, Zd, gd] = Jd.cameraDirection;
          return {
            position: [kd, pd, Nd],
            direction: [Wd, Zd, gd]
          }
        },
        canvas: () => {
          var dd, Jd, kd;
          return null !== (dd = null === (Jd = (kd = (0, Wd.P)()).canvas) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : null
        },
        freecam: Nd.g
      }),
      Bp = {
        states: {
          ...KJ,
          ...LJ.k,
          ...qp.states,
          ...Lk,
          ...Ed
        },
        events: {
          ...oJ,
          ...ed,
          ...LJ.e,
          ...Md.d,
          ...Fk.g,
          ...qp.events,
          ...Ok,
          ...ad.i
        },
        commands: {
          ...sd,
          ...lJ,
          ...Rd,
          ...LJ.d,
          ...HJ,
          ...Mk,
          ...ad.e,
          ...UJ,
          ...qp.commands,
          ...qk,
          ...cd,
          ...fk,
          ...OJ
        },
        queries: {
          ...LJ.g,
          ...xp
        },
        lookups: {
          ...QJ,
          ...fd,
          ...Fk.k,
          ...qp.lookups,
          ...Bd,
          ...pk,
          ...Xk,
          ...hd
        }
      };

    function sp() {
      (0, Zd.e)(Od.n), (0, Nd.o)(qp.feed), (0, Md.g)(), wJ || (wJ = !0, (0, Od.l)(bd.n, (dd => {
        const Jd = (0, jd.e)(bd.n, dd);
        "string" === typeof Jd && Promise.resolve().then((() => kd(3538))).then((dd => {
          let {
            onCosmeticPackGranted: kd
          } = dd;
          kd(Jd)
        }))
      })), (0, Od.l)(bd.qb, (dd => {
        const Jd = (0, jd.e)(bd.qb, dd);
        "number" === typeof Jd && Cd.j.nO("serverUpdating", Date.now() + Jd, !0)
      })), (0, Od.l)(bd.P, (dd => {
        const Jd = (0, jd.e)(bd.P, dd);
        if ((0, jd.d)(Jd)) {
          const {
            Nd: dd,
            Wd: kd
          } = Jd;
          (0, VJ.c)({
            Nd: "string" === typeof dd ? dd : null,
            Wd: "string" === typeof kd ? kd : null
          })
        }
      })), (0, Od.l)(Kd.ac.NewUiRequest, (dd => {
        const Jd = (0, jd.f)(dd);
        (0, jd.d)(Jd) && "number" === typeof Jd.id && (0, jd.d)(Jd.clientParameters) && (0, zJ.e)(Jd.id, Jd.clientParameters)
      })), (0, Od.l)(bd.ib, (dd => {
        const Jd = (0, jd.e)(bd.ib, dd);
        "number" === typeof Jd && (0, zJ.h)(Jd)
      })), (0, Od.h)(zJ.c), (0, Od.l)(Kd.ac.UiRequestPopup, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd) && "number" === typeof Jd.id && "string" === typeof Jd.text) {
          const dd = Jd.id;
          (0, zJ.i)(dd, Jd.text, (Jd => {
            HJ.answerUiRequest({
              id: dd,
              WK: Jd
            })
          }))
        }
      })), (0, Od.l)(Kd.ac.TopRightHelper, (dd => {
        const Jd = (0, jd.f)(dd);
        void 0 !== Jd && Cd.j.nO("TopRightHelper", Jd, !0)
      })), (0, Od.l)(Kd.ac.TaskProgress, (dd => {
        const Jd = (0, jd.f)(dd);
        (0, jd.d)(Jd) && "string" === typeof Jd.taskId && "number" === typeof Jd.progress && (0, tJ.e)({
          taskId: Jd.taskId,
          progress: Jd.progress
        })
      }))), Bk || (Bk = !0, (0, Od.l)(bd.w, (dd => {
        const Jd = (0, jd.e)(bd.w, dd);
        (0, jd.d)(Jd) && Cd.j.nO("showShopFromServer", {
          toggle: Jd.Vk,
          zk: Jd.zk
        }, !0)
      })), (0, Od.l)(Kd.ac.OverShopInfo, (dd => {
        const Jd = (0, jd.f)(dd);
        (0, jd.d)(Jd) && Cd.j.nO("overShopInfo", Jd.info, !0)
      })), (0, Od.l)(Kd.ac.ShowShopTutorial, (() => {
        Cd.j.nO("showShopTutorial", null, !0)
      }))), vk || (vk = !0, (0, Od.f)((() => {
        var dd;
        (0, ek.A)(), null === (dd = xk) || void 0 === dd || dd(), xk = (0, Od.b)() ? (0, Ik.g)(Od.b) : null
      })), (0, Od.l)(Kd.ac.SetCookie, (dd => {
        const Jd = (0, jd.f)(dd),
          kd = (0, XJ.d)().gameNameWithVariation;
        (0, jd.d)(Jd) && "string" === typeof Jd.key && null !== kd && (0, Rk.setCookie)(kd, Jd.key, Jd.value)
      })), (0, Od.l)(Kd.ac.LeaveValues, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd) && "string" === typeof Jd.leaveEventType) {
          const {
            leaveEventType: dd,
            category: kd,
            subCategory: pd,
            value: Nd
          } = Jd;
          (0, ek.G)({
            leaveEventType: dd,
            category: kd,
            subCategory: pd,
            value: Nd
          })
        }
      })), (0, Od.l)(Kd.ac.CustomAnalyticsEvent, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd) && "string" === typeof Jd.cat1) {
          const {
            cat1: dd,
            cat2: kd,
            cat3: pd,
            value: Nd
          } = Jd;
          (0, ek.p)({
            cat1: dd,
            cat2: kd,
            cat3: pd,
            value: Nd
          })
        }
      })), (0, Od.l)(Kd.ac.ProgressionEvent, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd)) {
          const {
            type: dd,
            location1: kd,
            location2: pd,
            location3: Nd,
            score: Wd
          } = Jd;
          (0, ek.t)({
            type: dd,
            location1: kd,
            location2: pd,
            location3: Nd,
            score: Wd
          })
        }
      })), (0, Od.l)(Kd.ac.ResourceEvent, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd)) {
          const {
            type: dd,
            resourceType: kd,
            amount: pd,
            category: Nd,
            itemName: Wd
          } = Jd;
          (0, ek.v)({
            type: dd,
            resourceType: kd,
            amount: pd,
            category: Nd,
            itemName: Wd
          })
        }
      })), (0, Od.l)(Kd.ac.LeaderboardResponse, (dd => {
        const Jd = (0, jd.f)(dd);
        if ((0, jd.d)(Jd)) {
          const {
            category: dd,
            timeframe: kd,
            data: pd
          } = Jd;
          Cd.j.nO("leaderboardResponse", {
            category: dd,
            timeframe: kd,
            data: pd
          })
        }
      })), (0, Od.l)(bd.E, (dd => {
        const Jd = (0, jd.e)(bd.E, dd);
        "string" === typeof Jd && (0, Gk.c)(dd.conn, Jd)
      })), (0, Od.l)(bd.I, (dd => {
        const Jd = (0, jd.e)(bd.I, dd);
        "string" === typeof Jd && console.error(`[logErrorToConsole]: ${Jd}`)
      }))), Ud(), (0, Fk.c)(), nJ || (nJ = !0, (0, Od.l)(bd.k, (dd => {
        const Jd = (0, jd.e)(bd.k, dd);
        void 0 !== Jd && (0, fJ.k)(Jd)
      }))), uJ(), YJ(), td || (td = !0, (0, Wd.z)(Vd)), pd.gameBridge.attach(Bp), (0, pd.installPageSources)({
        commands: {
          ...pd.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Uk.j
        },
        queries: ep,
        lookups: {
          ...pd.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Rp,
          WG: Uk.c,
          drawCallStats: yk.k
        }
      }), (0, nk.e)(), gp()
    }
  },
  40728: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      e: () => gd,
      g: () => Zd,
      k: () => Cd
    });
    var pd = kd(1942);
    let Nd = null,
      Wd = 0;
    const Pd = new Set;

    function Zd() {
      return Nd
    }

    function gd() {
      return Wd
    }

    function Cd(dd) {
      Nd = dd, Wd++, (0, pd.e)();
      for (const Jd of Pd) Jd()
    }

    function Kd(dd) {
      Pd.add(dd)
    }
  },
  40733: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      f: () => Zd
    });
    var pd = kd(40735);
    let Nd = null,
      Wd = null;

    function Pd() {
      return Nd ??= kd.e(59).then((() => kd(42547))).catch((dd => {
        throw Nd = null, dd
      })), Nd
    }

    function Zd() {
      return Wd ??= Promise.all([Pd(), (0, pd.e)()]).then((dd => {
        let [Jd] = dd;
        return Jd
      }), (dd => {
        throw Wd = null, dd
      })), Wd
    }
  },
  37212: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    const pd = {
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
  37041: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      d: () => Wd,
      e: () => ld,
      f: () => Zd,
      j: () => gd,
      n: () => Cd,
      p: () => od,
      s: () => Kd,
      v: () => Pd
    });
    var pd = kd(1260);
    let Nd = function(dd) {
        return dd[dd.Join = 0] = "Join", dd[dd.Leave = 1] = "Leave", dd[dd.Push = 2] = "Push", dd[dd.Cursor = 3] = "Cursor", dd[dd.Submit = 4] = "Submit", dd[dd.ReloadAsVariation = 5] = "ReloadAsVariation", dd[dd.CreateFile = 6] = "CreateFile", dd[dd.RenameFile = 7] = "RenameFile", dd[dd.DeleteFile = 8] = "DeleteFile", dd[dd.SetEngine = 9] = "SetEngine", dd[dd.RenameFolder = 10] = "RenameFolder", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.Joined = 0] = "Joined", dd[dd.Updates = 1] = "Updates", dd[dd.Presence = 2] = "Presence", dd[dd.RemoteCursor = 3] = "RemoteCursor", dd[dd.ForceClose = 4] = "ForceClose", dd[dd.LobbyFilesChanged = 5] = "LobbyFilesChanged", dd[dd.EngineSettings = 6] = "EngineSettings", dd
      }({});

    function Pd(dd) {
      return "lobby" === dd.kind ? `lobby:${dd.path}` : `codeBlock:${dd.pos[0]},${dd.pos[1]},${dd.pos[2]}`
    }

    function Zd(dd) {
      if ("lobby" === dd) return {
        kind: "lobby",
        path: pd.h
      };
      if (dd.startsWith("lobby:")) {
        const Jd = dd.slice(6);
        return od(Jd) ? {
          kind: "lobby",
          path: Jd
        } : null
      }
      const Jd = dd.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Jd ? {
        kind: "codeBlock",
        pos: [parseInt(Jd[1]), parseInt(Jd[2]), parseInt(Jd[3])]
      } : null
    }

    function gd(dd) {
      return dd.endsWith(".d.ts")
    }

    function Cd(dd) {
      return dd.endsWith(".ts") && !gd(dd)
    }
    const Kd = 64;

    function od(dd) {
      if (!dd || dd !== dd.trim()) return !1;
      if (dd.length > Kd) return !1;
      if (dd.startsWith("/") || dd.includes("\\") || dd.includes("\0")) return !1;
      if (!gd(dd) && !Cd(dd) && ! function(dd) {
          return dd.endsWith(".js") && !dd.endsWith(".min.js") && !dd.endsWith(".bundle.js")
        }(dd)) return !1;
      const Jd = dd.split("/");
      for (const kd of Jd)
        if ("" === kd || "." === kd || ".." === kd) return !1;
      return !0
    }
    const ld = 14e3
  },
  39197: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      e: () => Nd
    });
    const pd = ["description", "label"];

    function Nd(dd) {
      const Jd = dd.type;
      return {
        type: Jd,
        params: dd[Jd]
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);