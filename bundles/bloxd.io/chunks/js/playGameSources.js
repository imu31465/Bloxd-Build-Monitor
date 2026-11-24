export const id = 46;
export const ids = [46];
export const modules = {
  39753: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Dm,
      g: () => am,
      j: () => Am
    });
    const hm = 6e3;

    function Am(mm, Tm) {
      return [Math.floor(mm[0] / Tm) * Tm, Math.floor(mm[1] / Tm) * Tm, Math.floor(mm[2] / Tm) * Tm]
    }

    function am(mm) {
      const Tm = (null !== mm && void 0 !== mm ? mm : "").match(/-?\d+(?:\.\d+)?/g);
      return Tm && Tm.length >= 3 ? [Number(Tm[0]), Number(Tm[1]), Number(Tm[2])] : null
    }

    function xm(mm, Tm) {
      return mm === Tm ? String(mm) : `${mm}-${Tm}`
    }

    function wm(mm, Tm, fm, hm) {
      const Am = [];
      let am = new Map;
      for (let xm = mm[2]; xm < mm[2] + Tm; xm++) {
        const wm = new Map;
        let Dm = mm[0];
        for (; Dm < mm[0] + Tm;) {
          const Am = hm(Dm, fm, xm);
          let im = Dm;
          for (; im + 1 < mm[0] + Tm && hm(im + 1, fm, xm) === Am;) im++;
          if (null !== Am) {
            const mm = `${Dm} ${im} ${Am}`,
              Tm = am.get(mm);
            Tm ? (Tm.z1 = xm, am.delete(mm), wm.set(mm, Tm)) : wm.set(mm, {
              x0: Dm,
              x1: im,
              z0: xm,
              z1: xm,
              name: Am
            })
          }
          Dm = im + 1
        }
        Am.push(...am.values()), am = wm
      }
      return Am.push(...am.values()), Am.sort(((mm, Tm) => mm.z0 - Tm.z0 || mm.x0 - Tm.x0)).map((mm => `x${xm(mm.x0,mm.x1)} z${xm(mm.z0,mm.z1)} ${mm.name}`))
    }

    function Dm(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : hm;
      const Dm = [mm[0] + Tm - 1, mm[1] + Tm - 1, mm[2] + Tm - 1],
        im = null !== Am && Am.every(((Tm, fm) => Math.floor(Tm) >= mm[fm] && Math.floor(Tm) <= Dm[fm])),
        Rm = [`The chunk from ${mm.join(" ")} to ${Dm.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Am && Rm.push(`The player's feet are at ${Am.map(Math.floor).join(" ")}, ${im?"in this chunk":"outside this chunk"}.`);
      const pm = [];
      for (let hm = mm[1]; hm <= Dm[1]; hm++) {
        const Am = wm(mm, Tm, hm, fm).join("; "),
          am = pm[pm.length - 1];
        (null === am || void 0 === am ? void 0 : am.boxes) === Am ? am.to = hm : pm.push({
          from: hm,
          to: hm,
          boxes: Am
        })
      }
      const Em = pm.filter((mm => "" !== mm.boxes));
      0 === Em.length && Rm.push("It is all air.");
      let om = Rm.join("\n").length;
      for (const hm of Em) {
        const mm = `y${xm(hm.from,hm.to)}: ${hm.boxes}`;
        if (om += mm.length + 1, om > am) {
          Rm.push(`Cut short: the layers from y${hm.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Rm.push(mm)
      }
      return Rm.join("\n")
    }
  },
  8730: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(23);

    function Am() {
      return !hm.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37050: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      c: () => am,
      e: () => Am
    });
    const hm = [.25, .5, 1, 2, 4, 8, 16];

    function Am(mm, Tm) {
      const fm = hm;
      let Am = fm.indexOf(mm);
      return -1 === Am && (Am = fm.findIndex((Tm => Tm >= mm)), -1 === Am && (Am = fm.length - 1)), "up" === Tm ? fm[Math.min(Am + 1, fm.length - 1)] : fm[Math.max(Am - 1, 0)]
    }

    function am(mm) {
      return mm <= hm[0]
    }

    function xm(mm) {
      return mm >= hm[hm.length - 1]
    }
  },
  36582: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      e: () => am
    });
    let hm = !1;

    function Am() {
      return hm
    }

    function am(mm) {
      return hm !== mm && (hm = mm, !0)
    }
  },
  39140: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(31),
      Am = fm(1928);

    function am(mm) {
      let {
        taskId: Tm,
        progress: fm
      } = mm;
      const hm = Am.b.get("_tasks");
      null !== hm && void 0 !== hm && hm[Tm] && Am.b.apply({
        _tasks: {
          ...hm,
          [Tm]: {
            ...hm[Tm],
            progress: fm
          }
        }
      })
    }
    hm.j.subscribe("clientTaskProgress", (mm => {
      am(mm)
    }))
  },
  39719: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em,
      g: () => Om,
      h: () => im,
      k: () => pm,
      l: () => Dm,
      n: () => xm,
      o: () => Rm,
      r: () => Ym
    });
    var hm = fm(1928),
      Am = fm(31),
      am = fm(1937);
    const xm = (0, am.m)((function() {
        var mm, Tm, fm, Am;
        return {
          health: null !== (mm = hm.b.get("_health")) && void 0 !== mm ? mm : null,
          maxHealth: null !== (Tm = hm.b.get("_totalMaxHealth")) && void 0 !== Tm ? Tm : null,
          shield: null !== (fm = hm.b.get("_shield")) && void 0 !== fm ? fm : null,
          maxShield: null !== (Am = hm.b.get("maxShield")) && void 0 !== Am ? Am : null
        }
      }), [], (0, am.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      wm = [{
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

    function Dm(mm, Tm) {
      return wm[(mm ? 2 : 0) + (Tm ? 1 : 0)]
    }
    const im = (0, am.m)((function() {
      var mm;
      return null !== (mm = hm.b.get("_aura")) && void 0 !== mm ? mm : null
    }), [], (0, am.j)("_aura"));

    function Rm(mm) {
      return {
        watch: Tm => (0, Am.m)("shotPlayer", (fm => {
          let {
            playerId: hm,
            damage: Am,
            wasCrit: am,
            distance: xm
          } = fm;
          mm(hm) && Tm({
            damage: Am,
            wasCrit: am,
            distance: xm
          })
        }))
      }
    }

    function pm(mm) {
      return (0, am.d)("chat", (Tm => {
        let {
          serverChatMsgId: fm,
          content: hm,
          chatterEId: Am
        } = Tm;
        return {
          serverChatMsgId: null !== fm && void 0 !== fm ? fm : null,
          content: hm,
          author: Am ? mm(Am) : null
        }
      }))
    }
    class Em {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const fm = this.shown;
        return mm !== this.needed && (this.needed = mm, this.neededSince = Tm, null === mm && (this.shown = null)), this.shown !== this.needed && Tm - this.neededSince > 200 && (this.shown = this.needed), this.shown !== fm
      }
    }

    function om(mm) {
      return [{
        translationKey: `touchKeys:${mm}`
      }]
    }
    const Om = {
      open: om("open"),
      close: om("close"),
      milk: om("milk"),
      shear: om("shear"),
      tame: om("tame"),
      feed: om("feed"),
      ride: om("ride")
    };

    function Ym(mm) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: mm
      }]
    }
  },
  41113: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      e: () => xm
    });
    var hm = fm(3306);
    let Am = null,
      am = null;

    function xm() {
      return am ??= fm.e(212).then((() => fm(36406))).then((mm => {
        let {
          ITEM_SPRITES: Tm,
          ITEM_SPRITES_WITHOUT_FILE: fm,
          ITEM_FILES_WITHOUT_SPRITE: am
        } = mm;
        Am = function(mm, Tm, fm) {
          const Am = new Set,
            am = (0, hm.w)(Tm);
          let xm = 0;
          for (const [hm, wm] of mm.entries()) hm === am[xm] ? xm++ : Am.add(wm);
          if ("" !== fm)
            for (const wm of fm.split(hm.q)) Am.add(wm);
          return Am
        }(Tm.split(hm.q), fm, am)
      }), (mm => {
        throw am = null, mm
      })), am
    }

    function wm(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = Am) || void 0 === fm ? void 0 : fm.has(mm)) && void 0 !== Tm && Tm
    }
  },
  39739: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      f: () => am,
      h: () => Am
    });
    const hm = 128;

    function Am(mm, Tm, fm, hm) {
      const Am = 2 * Tm - 1,
        am = 1 - 2 * fm,
        xm = mm(0) - Am * mm(3),
        wm = mm(4) - Am * mm(7),
        Dm = mm(8) - Am * mm(11),
        im = mm(1) - am * mm(3),
        Rm = mm(5) - am * mm(7),
        pm = mm(9) - am * mm(11);
      hm[0] = wm * pm - Dm * Rm, hm[1] = Dm * im - xm * pm, hm[2] = xm * Rm - wm * im;
      const Em = hm[0] * mm(3) + hm[1] * mm(7) + hm[2] * mm(11) < 0 ? -1 : 1,
        om = Math.hypot(hm[0], hm[1], hm[2]) * Em;
      return hm[0] /= om, hm[1] /= om, hm[2] /= om, hm
    }

    function am(mm, Tm, fm, hm, Am, am) {
      const xm = [Math.floor(Tm[0]), Math.floor(Tm[1]), Math.floor(Tm[2])],
        wm = [0, 0, 0],
        Dm = [1 / 0, 1 / 0, 1 / 0],
        im = [1 / 0, 1 / 0, 1 / 0];
      for (let Em = 0; Em < 3; Em++) wm[Em] = Math.sign(fm[Em]), 0 !== wm[Em] && (im[Em] = Math.abs(1 / fm[Em]), Dm[Em] = (xm[Em] + (wm[Em] > 0 ? 1 : 0) - Tm[Em]) / fm[Em]);
      let Rm = 0,
        pm = Math.abs(fm[0]) > Math.abs(fm[1]) ? 0 : 1;
      for (Math.abs(fm[2]) > Math.abs(fm[pm]) && (pm = 2); Rm <= hm;) {
        if (mm(xm[0], xm[1], xm[2])) return Am[0] = xm[0], Am[1] = xm[1], Am[2] = xm[2], am[0] = 0, am[1] = 0, am[2] = 0, am[pm] = -wm[pm], !0;
        pm = Dm[0] < Dm[1] ? 0 : 1, Dm[2] < Dm[pm] && (pm = 2), Rm = Dm[pm], xm[pm] += wm[pm], Dm[pm] += im[pm]
      }
      return !1
    }
  },
  39716: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    var hm = fm(1877);

    function Am(mm, Tm, fm) {
      return (0, hm.n)(mm, Tm) < fm
    }
  },
  8663: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    var hm = fm(1266);

    function Am(mm, Tm) {
      var fm, Am;
      try {
        const fm = (0, hm.d)();
        if ("function" === typeof fm) {
          const hm = new fm(mm, Tm);
          if (hm.type === mm) return hm
        }
      } catch {}
      const am = document.createEvent("Event");
      return am.initEvent(mm, null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.bubbles) && void 0 !== fm && fm, null !== (Am = null === Tm || void 0 === Tm ? void 0 : Tm.cancelable) && void 0 !== Am && Am), am
    }
  },
  39133: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm
    });
    var hm = fm(1235),
      Am = fm(1329),
      am = fm(23),
      xm = fm(1309),
      wm = fm(1321),
      Dm = fm(1519),
      im = fm(36549);

    function Rm(mm) {
      let {
        rA: Tm,
        sA: fm
      } = mm;
      const Rm = null !== Tm && void 0 !== Tm ? Tm : (0, wm.d)().gameNameWithVariation;
      (0, hm.C)(Rm) && ((0, im.l)(), (0, xm.ab)((() => {
        console.log("Received matchmaking order from game server to game", Tm), (0, am.l)("inGameReplay"), (0, Dm.navigatePreserveSearch)((0, Am.e)(Rm, null !== fm && void 0 !== fm ? fm : void 0))
      }), "video_start"))
    }
  },
  39305: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(31),
      Am = fm(1957);

    function am(mm) {
      var Tm, fm;
      const am = (0, Am.k)(null !== (Tm = null === (fm = Am.r.toggleFreeCam) || void 0 === fm ? void 0 : fm[0]) && void 0 !== Tm ? Tm : null);
      hm.j.gp("showBottomMessage", {
        message: `Free Camera ${mm?"Enabled":"Disabled"}${am?` - Press ${am} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39129: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      d: () => xm,
      g: () => wm,
      k: () => im
    });
    var hm = fm(31),
      Am = fm(1354);
    const am = new Map;

    function xm(mm, Tm) {
      hm.j.gp("newUiRequest", {
        id: mm,
        clientParameters: Tm
      }, !0)
    }

    function wm(mm) {
      hm.j.gp("removeUiRequest", mm, !0);
      const Tm = am.get(mm);
      Tm && (Tm.tearDownNotification(), am.delete(mm))
    }

    function Dm() {
      hm.j.gp("clearUiRequests");
      for (const mm of am.values()) mm.tearDownNotification();
      am.clear()
    }

    function im(mm, Tm, fm, hm) {
      const xm = Am.NotificationProvider.showPromptPopup({
        title: Tm,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: fm,
        unlockPointerKey: "uiRequestPopup"
      });
      am.set(mm, xm), xm.getResult().then((Tm => {
        am.delete(mm), "notificationTornDown" !== Tm && hm(Tm)
      }))
    }
  },
  39748: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm,
      e: () => Em
    });
    var hm = fm(198),
      Am = fm(39753);
    const am = 20;

    function xm(mm) {
      return mm.map(Math.floor).join(" ")
    }

    function wm(mm) {
      return null === mm.amount || 1 === mm.amount ? mm.name : `${mm.amount} ${mm.name}`
    }
    var Dm = fm(39757),
      im = fm(1928),
      Rm = fm(1321);

    function pm(mm, Tm) {
      if (!mm) return Dm.b;
      const fm = mm.playerFeet();
      if (!fm) return "The player isn't in the world yet, so no blocks can be seen.";
      const am = hm.f.MO,
        xm = (0, Am.j)(null !== Tm && void 0 !== Tm ? Tm : fm, am),
        wm = mm.chunkBlocks(xm);
      return wm ? (0, Am.d)(xm, am, ((Tm, fm, hm) => {
        const Am = wm(Tm, fm, hm);
        return 0 === Am ? null : mm.blockName(Am).split("|")[0]
      }), fm) : `The chunk from ${xm.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${fm.map(Math.floor).join(" ")}.`
    }

    function Em(mm) {
      var Tm, fm, hm;
      if (!mm) return Dm.f;
      const Am = mm.playerFeet();
      if (!Am) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: pm,
        heldSlot: Em
      } = mm.inventory();
      return function(mm) {
        const Tm = [];
        null !== mm.game && Tm.push(`Game: ${mm.game}.`);
        const fm = null === mm.health ? "" : `, health ${Math.round(mm.health)}${null===mm.maxHealth?"":` of ${Math.round(mm.maxHealth)}`}`;
        Tm.push(`The player (the creator) stands at ${xm(mm.position)}${fm}, ${mm.creative?"in":"not in"} creative mode.`);
        const hm = mm.slots[mm.heldSlot];
        Tm.push(hm ? `Holding (slot ${mm.heldSlot}): ${wm(hm)}.` : `Holding nothing (slot ${mm.heldSlot} is empty).`);
        const Am = mm.slots.flatMap(((mm, Tm) => mm ? [`slot ${Tm}: ${wm(mm)}`] : []));
        Tm.push(Am.length > 0 ? `Inventory: ${Am.join(", ")}.` : "Inventory: empty.");
        const Dm = Tm => Math.hypot(Tm.position[0] - mm.position[0], Tm.position[1] - mm.position[1], Tm.position[2] - mm.position[2]),
          im = [...mm.nearby].sort(((mm, Tm) => Dm(mm) - Dm(Tm)));
        if (0 === im.length) Tm.push("No other players or mobs are near enough to see.");
        else {
          Tm.push("Near them, nearest first:");
          for (const mm of im.slice(0, am)) {
            const fm = "player" === mm.kind ? `player "${mm.name||"?"}"` : mm.name && mm.name !== mm.kind ? `${mm.kind} "${mm.name}"` : mm.kind,
              hm = Math.round(Dm(mm));
            Tm.push(`- ${fm} at ${xm(mm.position)}, ${hm} block${1===hm?"":"s"} away`)
          }
          im.length > am && Tm.push(`- and ${im.length-am} more further away`)
        }
        return mm.droppedItems > 0 && Tm.push(`${mm.droppedItems} dropped item${1===mm.droppedItems?" is":"s are"} on the ground nearby.`), Tm.join("\n")
      }({
        game: null !== (Tm = (0, Rm.d)().gameNameWithVariation) && void 0 !== Tm ? Tm : null,
        position: Am,
        health: null !== (fm = im.b.get("_health")) && void 0 !== fm ? fm : null,
        maxHealth: null !== (hm = im.b.get("_totalMaxHealth")) && void 0 !== hm ? hm : null,
        creative: !0 === im.b.get("creative"),
        heldSlot: Em,
        slots: pm,
        nearby: mm.nearby(),
        droppedItems: mm.droppedItems()
      })
    }
  },
  39147: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      d: () => Dm,
      e: () => im
    });
    var hm = fm(1235),
      Am = fm(1041),
      am = fm(36964),
      xm = fm(31);

    function wm(mm) {
      let {
        lobbyName: Tm,
        gameNameWithVariation: fm
      } = mm;
      return !(0, hm.D)(Tm) || null !== fm && (fm.startsWith("testGym") || (0, Am.k)(fm))
    }

    function Dm(mm) {
      return mm.va === am.b.Leave || mm.va === am.b.Cursor
    }

    function im(mm) {
      xm.j.gp("codeCollab", {
        type: mm.va,
        docKey: mm.Ua,
        version: mm.da,
        editorCount: mm.ga,
        peers: mm.Wa,
        updates: mm.Fa,
        playerId: mm.mx,
        playerName: mm.Tx,
        colour: mm.hx,
        anchor: mm.Ax,
        head: mm.wx,
        existingCursors: mm.Dx,
        files: mm.ix,
        engineSettings: mm.Rx
      })
    }
  },
  40962: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => Gm,
      C: () => gm,
      E: () => Hm,
      F: () => Sm,
      J: () => Pm,
      K: () => bm,
      N: () => Bm,
      R: () => um,
      V: () => Nm,
      b: () => Lm,
      d: () => Cm,
      e: () => Zm,
      i: () => tm,
      l: () => km,
      p: () => zm,
      t: () => ym,
      w: () => em,
      z: () => Xm
    });
    var hm = fm(1389),
      Am = fm(31),
      am = fm(1286),
      xm = fm(2364),
      wm = fm(4763),
      Dm = fm(4722);
    let im, Rm = !1,
      pm = !1,
      Em = !1,
      om = !1;
    const Om = 1300,
      Ym = 3e3;
    let qm = 0,
      jm = !1,
      Vm = !1,
      Im = 0;
    const Km = 2;
    let Qm = !1,
      nm = !1;
    const Jm = new Set,
      cm = new Set;

    function zm() {
      return Rm
    }

    function Zm() {
      return Vm
    }

    function km() {
      return nm
    }

    function bm() {
      return (0, am.r)() && !nm
    }

    function Sm(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (mm !== nm) {
        nm = mm;
        for (const mm of [...cm]) mm(nm);
        Tm && um()
      }
    }

    function em(mm) {
      return cm.add(mm), () => {
        cm.delete(mm)
      }
    }

    function Nm() {
      (0, wm.h)(xm.w.Menu, (0, am.r)() ? 0 : xm.w.Menu)
    }

    function Gm() {
      Vm = !1, Im = 0, Nm(), um()
    }

    function Xm(mm) {
      return Jm.add(mm), () => {
        Jm.delete(mm)
      }
    }

    function Pm(mm) {
      pm = !1, mm !== Rm && (Rm = mm, om = !1, clearTimeout(im), Em = !Rm && Qm, Rm ? (jm = !1, Vm = !1, Im = 0) : bm() && !Qm && (Vm = !0), Qm = !1, Rm && !bm() && dm(), Wm(), Em && um())
    }

    function Hm(mm) {
      mm !== jm && (jm = mm, mm || um())
    }

    function ym() {
      pm = !1, om || !0 !== lm() || (om = !0, clearTimeout(im), im = setTimeout(rm, Om))
    }

    function Cm() {
      return (!pm || performance.now() - qm > Ym) && (pm = (0, Dm.J)().lockPointer(), qm = performance.now()), pm
    }

    function rm() {
      sm() && Mm() && Cm()
    }

    function sm() {
      return bm() && !Rm && !jm && !(0, hm.h)()
    }

    function lm() {
      var mm;
      return "undefined" === typeof navigator || null === (mm = navigator.userActivation) || void 0 === mm ? void 0 : mm.isActive
    }

    function Mm() {
      return Em && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lm()
    }

    function um() {
      bm() ? sm() && !Vm && Mm() && Cm() : Rm && !Qm && dm()
    }

    function Bm() {
      Vm ? navigator.vendor.startsWith("Apple") ? Um() : Im = Km : um()
    }

    function Lm() {
      Im > 0 && 0 === --Im && Um()
    }

    function tm() {
      Im = 0
    }

    function Um() {
      sm() && !0 === lm() && Cm()
    }

    function dm() {
      Qm = !0, (0, Dm.J)().unlockPointer()
    }

    function gm() {
      pm = !1, Em = !1, om = !1, clearTimeout(im), jm = !1, Vm = !1, Im = 0, Qm = !1;
      const mm = Rm;
      Rm = !1, mm && Wm()
    }

    function Wm() {
      for (const mm of [...Jm]) mm(Rm);
      Am.j.gp("pointerLockUpdate", Rm)
    }
  },
  40761: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Em,
      f: () => wm,
      i: () => pm,
      j: () => im,
      n: () => xm,
      p: () => Rm,
      r: () => Dm
    });
    let hm = null,
      Am = null,
      am = null;

    function xm(mm) {
      hm = mm
    }

    function wm() {
      return hm
    }

    function Dm(mm) {
      Am = mm
    }

    function im() {
      return Am
    }

    function Rm(mm) {
      am = mm
    }

    function pm() {
      return am
    }

    function Em() {
      var mm, Tm;
      return !0 === (null === (mm = Am) || void 0 === mm || null === (Tm = mm.currentViewer) || void 0 === Tm ? void 0 : Tm.inPlayback)
    }
  },
  41069: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      attachPlayGameSources: () => Zh,
      playGameSources: () => zh
    });
    var hm = fm(1905),
      Am = fm(40761),
      am = fm(4722),
      xm = fm(40669),
      wm = fm(41057),
      Dm = fm(39719),
      im = fm(31),
      Rm = fm(4741),
      pm = fm(4732),
      Em = fm(40695),
      om = fm(40733),
      Om = fm(41073),
      Ym = fm(40709);
    (0, Ym.g)(Rm.gc.Chat, (mm => {
      if (mm.payloadKind !== pm.gc.Msgpack) return;
      const Tm = function(mm) {
        if (null === mm || "object" !== typeof mm || !("content" in mm)) return null;
        const {
          chatMsgId: Tm,
          content: fm,
          chatterEId: hm
        } = mm;
        return {
          serverChatMsgId: null !== Tm && void 0 !== Tm ? Tm : void 0,
          content: fm,
          chatterEId: void 0 === hm || null === hm ? void 0 : String(hm)
        }
      }((0, Em.e)(mm.payload));
      null !== Tm && im.j.gp("chat", Tm, !0)
    }));
    const qm = {
        chatReceived: (0, Dm.k)((function(mm) {
          var Tm, fm, hm;
          return {
            id: mm,
            name: null !== (Tm = Om.f.getName(mm)) && void 0 !== Tm ? Tm : null,
            local: (0, om.h)() === mm,
            profileEffect: null !== (fm = null === (hm = (0, Om.h)(mm)) || void 0 === hm ? void 0 : hm.profileEffect) && void 0 !== fm ? fm : null
          }
        }))
      },
      jm = {
        sendChatMessage(mm) {
          var Tm;
          let {
            Hi: fm,
            channelName: hm
          } = mm;
          null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.clientApi.sendChat(fm, hm)
        }
      };
    var Vm = fm(198),
      Im = fm(1928),
      Km = fm(40663),
      Qm = fm(39716);
    const nm = [0, 0, 0],
      Jm = {
        codeBlockClickable(mm) {
          var Tm;
          const fm = (0, xm.i)();
          if (null === fm || void 0 === fm || !fm.isSessionLive) return !1;
          const hm = fm.api;
          if (0 !== (Km.x.playerFlags(hm.apiView, 0) & Km.Od.Crouching)) return !1;
          const Am = hm.queries.directorEntity(hm.localId) >= Km.Bb.BYTES ? hm.memoryData(hm.scratch(), Km.Bb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Am) return !1;
          for (let am = 0; am < 3; am++) nm[am] = Km.Bb.feet(Am, 0, am);
          return nm[1] += Km.Bb.eyeHeight(Am, 0), (0, Qm.b)(nm, mm, null !== (Tm = Im.b.get("blockReach")) && void 0 !== Tm ? Tm : Vm.f.Fq)
        }
      },
      cm = {
        clickCodeBlock(mm) {
          var Tm;
          null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.clickCodeBlock(mm)
        }
      };
    var zm = fm(40677),
      Zm = fm(41079),
      km = fm(1041),
      bm = fm(39150),
      Sm = fm(4717),
      em = fm(40684),
      Nm = fm(40675),
      Gm = fm(40692);

    function Xm(mm) {
      if (null === mm) return null;
      const Tm = [];
      for (const fm of mm) {
        const mm = Object.keys(fm)[0];
        if ("Xf" === mm) {
          const {
            str: mm,
            style: hm,
            clickableUrl: Am
          } = fm.Xf, am = Object.keys(mm)[0], xm = mm[am];
          "string" !== am && "styledEntityName" !== am && "styledTranslatedText" !== am || Tm.push({
            str: xm,
            style: hm,
            clickableUrl: Am
          })
        } else Tm.push(fm[mm])
      }
      return Tm
    }
    const Pm = {
      screenPos(mm) {
        var Tm, fm;
        return null !== (Tm = null === (fm = (0, xm.i)()) || void 0 === fm ? void 0 : fm.renderFrame.projectWorldPosToScreenPos(mm)) && void 0 !== Tm ? Tm : {
          x: 0,
          y: 0
        }
      }
    };
    let Hm = !1;

    function ym() {
      Hm || (Hm = !0, (0, Ym.g)(Rm.gc.ProgressBarUpdate, (mm => {
        const Tm = (0, Gm.j)(mm);
        (0, Gm.b)(Tm) && im.j.gp("progressBarUpdate", Tm, !0)
      })), (0, Ym.g)(em.y, (mm => {
        const Tm = (0, Gm.f)(em.y, mm);
        Tm && im.j.gp("middleScreenBarInitiate", {
          duration: Tm.dh,
          gh: Tm.gh,
          horizBarRemOffset: Tm.Wh
        }, !0)
      })), (0, Ym.g)(Rm.gc.RemoveMiddleScreenBar, (() => {
        im.j.gp("middleScreenBarRemove")
      })), (0, Ym.g)(em.eb, (mm => {
        const Tm = (0, Gm.f)(em.eb, mm);
        if (Tm) {
          var fm;
          const mm = Tm.kh ? null === (fm = (0, xm.i)()) || void 0 === fm ? void 0 : fm.renderFrame.projectDirectionToScreenPos(Tm.kh) : void 0;
          im.j.gp("sendHitmarker", {
            Zh: Tm.Zh,
            screenPos: mm
          }, !0)
        }
      })), (0, Ym.g)(em.lb, (mm => {
        const Tm = (0, Gm.f)(em.lb, mm);
        if (Tm) {
          const {
            id: mm,
            position: fm,
            style: hm,
            jh: Am,
            Ih: am
          } = Tm;
          im.j.gp("setDirectionArrow", {
            id: mm,
            position: fm,
            style: hm,
            text: Xm(Am),
            Ih: am
          }, !0)
        }
      })), (0, Ym.g)(em.i, (mm => {
        const Tm = (0, Gm.f)(em.i, mm);
        Tm && im.j.gp("clearDirectionArrow", {
          id: Tm.id
        }, !0)
      })), (0, Ym.g)(em.r, (mm => {
        const Tm = (0, Gm.f)(em.r, mm);
        Tm && im.j.gp("flyingMiddleMessage", {
          content: Xm(Tm.Na),
          Ga: Tm.Ga,
          Xa: Tm.Xa
        }, !0)
      })), (0, Ym.g)(Rm.gc.WorldVariation, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ("string" === typeof Tm) {
          const mm = Tm === km.f ? null : {
            message: `Currently loaded as variation: ${Tm}`,
            type: "Warning"
          };
          im.j.gp("showPermanentBottomMessage", mm, !0)
        }
      })), (0, Ym.g)(em.L, (mm => {
        const Tm = (0, Gm.f)(em.L, mm);
        Tm && function(mm, Tm) {
          const {
            type: fm,
            params: hm
          } = (0, bm.e)(Tm), Am = {
            ...hm
          };
          for (const am of bm.d) Am[am] && (Am[am] = Xm(Am[am]));
          Sm.d.queueQTE(mm, fm, Am).getResult().then((Tm => {
            var fm;
            "boolean" === typeof Tm && (null === (fm = (0, xm.i)()) || void 0 === fm || fm.send(Nm.e.QteResponse, {
              qteId: mm,
              qteResponse: Tm
            }))
          }))
        }(Tm.id, Tm.zf)
      })), (0, Ym.g)(em.X, (mm => {
        const Tm = (0, Gm.f)(em.X, mm);
        "number" === typeof Tm && Sm.d.cancelQTE(Tm)
      })), (0, Ym.c)((() => {
        Sm.d.reset()
      })), (0, Ym.e)((() => {
        Sm.d.reset()
      })), (0, Ym.g)(Rm.gc.EditItemCraftingRecipes, (mm => {
        const Tm = (0, Gm.j)(mm);
        (0, Gm.b)(Tm) && im.j.gp("craftingRecipesEdited", {
          itemName: Tm.craftingRecipeItemName,
          recipesForItem: Tm.recipesForItem
        })
      })), (0, Ym.g)(em.V, (mm => {
        const Tm = (0, Gm.f)(em.V, mm);
        Tm && im.j.gp("craftingRecipesEdited", {
          itemName: Tm.ba,
          recipesForItem: []
        })
      })))
    }
    var Cm = fm(23);
    const rm = [{
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

    function sm(mm) {
      return Km.x.playerFlags(mm.api.apiView, 0)
    }
    const lm = {
        freeCamera: (0, om.e)((mm => () => {
          const Tm = mm.isSessionLive && 0 !== (sm(mm) & Km.Od.FreeCamMoves),
            fm = mm.freeCameraAllowed() && null === Cm.c.get("scriptedCameraFacing");
          return rm[(fm ? 2 : 0) + (Tm ? 1 : 0)]
        }), rm[0], (mm => (0, am.u)(mm)))
      },
      Mm = {
        setFreeCameraMovesFly: mm => {
          var Tm;
          null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.setFreeCameraMovesFly(mm)
        }
      },
      um = {
        freeCameraPos: () => {
          const mm = (0, xm.i)();
          return null !== mm && void 0 !== mm && mm.isSessionLive && mm.renderFrame.hasView && 0 !== (sm(mm) & Km.Od.FreeCam) ? mm.renderFrame.cameraPosition : null
        }
      };
    var Bm = fm(39305);
    let Lm = !1,
      tm = !1;

    function Um() {
      const mm = (0, xm.i)();
      if (null === mm || void 0 === mm || !mm.isSessionLive) return void(Lm = !1);
      const Tm = 0 !== (Km.x.playerFlags(mm.api.apiView, 0) & Km.Od.FreeCam);
      Tm !== Lm && (Lm = Tm, (0, Bm.c)(Tm))
    }
    var dm = fm(354),
      gm = fm(37131),
      Wm = fm(1937);
    var Fm = fm(41084),
      mT = fm(40724);
    const TT = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let fT = "off";

    function hT(mm) {
      var Tm;
      return null === mm ? null : {
        label: null !== (Tm = (0, Fm.e)(mm, "interactionPrompt")) && void 0 !== Tm ? Tm : null
      }
    }
    const AT = new Map([
      [Km.Dc.Open, {
        label: Dm.g.open
      }],
      [Km.Dc.Close, {
        label: Dm.g.close
      }],
      [Km.Dc.Milk, {
        label: Dm.g.milk
      }],
      [Km.Dc.Shear, {
        label: Dm.g.shear
      }],
      [Km.Dc.Tame, {
        label: Dm.g.tame
      }],
      [Km.Dc.Feed, {
        label: Dm.g.feed
      }],
      [Km.Dc.Ride, {
        label: Dm.g.ride
      }]
    ]);
    class aT {
      constructor() {
        this.target = TT, this.jR = Km.md, this.optionName = null, this.pickaxe = new Dm.c
      }
      read(mm) {
        var Tm;
        const fm = Km.x.targetBlockId(mm.api.apiView, 0);
        fm !== this.jR && (this.jR = fm, this.optionName = fm === Km.md ? null : `${mm.tables.getMetaInfo(fm).rootName}CrosshairText`);
        const hm = null === this.optionName ? null : null !== (Tm = mm.tables.getClientOption(this.optionName)) && void 0 !== Tm ? Tm : null;
        this.pickaxe.update(function(mm, Tm) {
          var fm, hm, Am;
          if (0 === (Km.x.playerFlags(mm.api.apiView, 0) & Km.Od.Breaking) || Tm === Km.md || 0 === Tm) return null;
          const {
            tables: am
          } = mm;
          if (!0 === am.getClientOption("creative")) return null;
          const xm = am.nameOfId(Tm),
            wm = null === (fm = mm.items.ni()) || void 0 === fm ? void 0 : fm.name,
            Dm = null !== (hm = am.getItemStat(xm, "harvestLevel")) && void 0 !== hm ? hm : 0;
          return (0, dm.yc)({
            blockHarvestType: am.getDefaultItemStat(xm, "harvestType"),
            blockHarvestLevel: am.getDefaultItemStat(xm, "harvestLevel"),
            harvestLevel: Dm,
            heldToolType: void 0 === wm ? void 0 : am.getDefaultItemStat(wm, "harvests"),
            heldToolLevel: void 0 === wm ? void 0 : am.getDefaultItemStat(wm, "level")
          }) && null !== (Am = gm.s[Dm]) && void 0 !== Am ? Am : null
        }(mm, fm)), mm.watchPromptPick(fT);
        const Am = "touch" === fT ? function(mm) {
          var Tm;
          const fm = mm.interactLabel;
          return fm === Km.Dc.Entity ? hT(mm.promptEntity) : fm === Km.Dc.TameWith ? {
            label: (0, Dm.r)(mm.tables.nameOfId(mm.interactIcon))
          } : null !== (Tm = AT.get(fm)) && void 0 !== Tm ? Tm : null
        }(mm) : hT(mm.promptEntity);
        return this.target = (0, Wm.o)(this.target, {
          interactPrompt: Am,
          blockText: hm,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let xT = null;
    const wT = {
      current: () => {
        var mm, Tm;
        return null !== (mm = null === (Tm = xT) || void 0 === Tm ? void 0 : Tm.target) && void 0 !== mm ? mm : TT
      },
      watch: mm => {
        const Tm = new aT;
        xT = Tm;
        const fm = (0, om.j)((fm => {
          let hm = Tm.read(fm);
          mm(hm);
          const Am = (0, am.y)((() => {
            const Am = Tm.read(fm);
            Am !== hm && (hm = Am, mm(Am))
          }));
          return () => {
            Am(), fm.watchPromptPick("off")
          }
        }));
        return () => {
          fm(), xT === Tm && (xT = null)
        }
      }
    };
    let DT = 0,
      iT = 0;
    const RT = {
        health: Dm.n,
        aura: Dm.h,
        hotbar: mT.e.states.hotbar,
        heldItemAim: mT.e.states.heldItemAim,
        crouching: (0, om.e)((mm => function(mm) {
          const Tm = () => 0 !== (Km.x.playerFlags(mm.apiView, 0) & Km.Od.Crouching);
          return {
            current: Tm,
            watch(mm) {
              let fm = Tm();
              return (0, am.u)((() => {
                const hm = Tm();
                hm !== fm && (fm = hm, mm(hm))
              }))
            }
          }
        }(mm.api).current), !1, (mm => (0, am.u)(mm))),
        flight: (0, om.e)((mm => () => function(mm) {
          const Tm = Km.x.playerFlags(mm.apiView, 0);
          return (0, Dm.l)(0 !== (Tm & Km.Od.CanFly), 0 !== (Tm & Km.Od.Flying))
        }(mm.api)), (0, Dm.l)(!1, !1), (mm => (0, am.u)(mm))),
        gliderBoostFuel: (0, om.e)((mm => () => Km.x.gliderBoostFuel(mm.api.apiView, 0)), 0, (mm => (0, am.u)(mm))),
        crosshairTarget: wT
      },
      pT = {
        hotbarSlotRequested: mT.e.events.hotbarSlotRequested,
        hotbarScrolled: mT.e.events.hotbarScrolled,
        numberKeyPressed: mT.e.events.numberKeyPressed,
        shotDamageToShow: (0, Dm.o)((mm => !0 === (0, Fm.e)(mm, "showDamageAmounts")))
      },
      ET = {
        selectHotbarSlot: mT.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: mm => {
          fT = mm
        }
      },
      oT = {
        momentumFrac: function() {
          var mm, Tm, fm;
          const hm = (0, xm.i)(),
            Am = performance.now(),
            am = null === hm || void 0 === hm || null === (mm = hm.items.ni()) || void 0 === mm || null === (Tm = mm.attributes) || void 0 === Tm || null === (fm = Tm.customAttributes) || void 0 === fm ? void 0 : fm.enchantments;
          return DT = null !== hm && null !== am && void 0 !== am && am.Momentum ? 0 !== (Km.x.playerFlags(hm.api.apiView, 0) & Km.Od.Breaking) ? Math.max(0, Km.x.momentumFrac(hm.api.apiView, 0)) : Math.max(0, DT - (Am - iT) / 1500) : 0, iT = Am, DT
        }
      };
    var OT = fm(40665);
    const YT = {
      lobbyManage(mm) {
        var Tm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.LobbyManage, mm)
      }
    };
    var qT = fm(1247),
      jT = fm(36582),
      VT = fm(8730),
      IT = fm(1635),
      KT = fm(2364),
      QT = fm(4747);
    let nT = !1;

    function JT(mm) {
      nT = mm
    }

    function cT() {
      "inGame" !== Cm.c.get("gameState") || (0, IT.o)() || im.j.gp("ctrlCrouchWithoutFullscreen")
    }
    let zT = !1;
    const ZT = {
        OpenEmoteWheel: () => {
          JT(!0), zT = !0, queueMicrotask((() => {
            zT && (zT = !1, im.j.gp("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          im.j.gp("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, jT.d)() || im.j.gp("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, jT.d)() || im.j.gp("XKeyPressed")
        },
        CtrlCrouch: cT,
        "primary-fire": () => {
          im.j.gp("mouseState", {
            VR: qT.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          im.j.gp("mouseState", {
            VR: qT.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          im.j.gp("mouseState", {
            VR: qT.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      kT = {
        OpenEmoteWheel: () => {
          JT(!1), zT ? (zT = !1, (0, VT.d)() || im.j.gp("requestEmoteWheelHoldOpen")) : im.j.gp("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: cT,
        "primary-fire": () => {
          im.j.gp("mouseState", {
            VR: qT.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          im.j.gp("mouseState", {
            VR: qT.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          im.j.gp("mouseState", {
            VR: qT.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let bT = !1;

    function ST() {
      bT || (bT = !0, (0, QT.g)((mm => {
        if ((0, Am.b)()) return;
        const Tm = (0, QT.e)(mm) ? "primary-fire" : mm.action;
        var fm;
        if (mm.down) {
          if (0 === (mm.flags & KT.e.Synthetic)) {
            var hm;
            null === (hm = ZT[Tm]) || void 0 === hm || hm.call(ZT)
          }
        } else null === (fm = kT[Tm]) || void 0 === fm || fm.call(kT)
      })))
    }
    var eT = fm(339),
      NT = fm(105),
      GT = fm(37),
      XT = fm(40962),
      PT = fm(1321),
      HT = fm(39147);
    let yT = !1;
    const CT = {
      sendCodeCollab(mm) {
        var Tm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.CodeCollab, (0, Nm.n)(mm), (0, HT.d)(mm))
      }
    };
    var rT = fm(39237),
      sT = fm(8663);
    let lT = null,
      MT = !1,
      uT = null;

    function BT() {
      return "inGame" === Cm.c.get("gameState") && !(0, jT.d)()
    }
    const LT = {
        OpenInventory: mm => {
          (0, IT.v)(mm, "inventory", (0, OT.n)())
        },
        OpenShop: mm => {
          lT && BT() && (0, IT.t)(mm, eT.n.SHOP, !lT.shopIsEmpty(Im.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: mm => {
          BT() && (0, IT.t)(mm, eT.n.LOBBY_LEADERBOARD, (0, rT.c)({
            lobbyLeaderboardInfo: Im.b.get("lobbyLeaderboardInfo"),
            lobbyManage: Im.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: mm => {
          var Tm;
          const fm = null === (Tm = lT) || void 0 === Tm ? void 0 : Tm.getClientGameMapKey();
          fm ? (0, IT.w)(mm, !0, fm) : (0, IT.v)(mm, "retentionFeatures", !(!Im.b.get("_tasks") && !Im.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: mm => {
          (0, IT.v)(mm, "inviteLink", NT.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: mm => {
          BT() && function(mm) {
            var Tm;
            const fm = (0, xm.i)(),
              hm = null !== fm && void 0 !== fm && fm.isSessionLive ? fm.api : null,
              Am = hm ? hm.rV(hm.localId) : null,
              am = null !== (Tm = null === Am || void 0 === Am ? void 0 : Am.map((mm => Math.floor(mm)))) && void 0 !== Tm ? Tm : null;
            (0, IT.w)(mm, null !== am && (0, HT.c)((0, PT.d)()), (() => {
              im.j.gp("EditLobbyCode", am)
            }))
          }(mm)
        },
        HideUi: () => {
          im.j.gp("showUi", !1)
        }
      },
      vT = {
        HideUi: () => {
          im.j.gp("showUi", !0)
        }
      };

    function tT() {
      MT || (MT = !0, fm.e(157).then((() => fm(60672))).then((mm => {
        lT = mm
      }), (mm => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", mm)
      })), (0, XT.z)((mm => {
        mm || !(0, XT.e)() || (0, NT.isMobile)() || !GT.g.getItem("disableFullscreen") || (0, IT.n)() || Cm.c.set({
          openEverythingMenuName: eT.n.SETTINGS
        })
      })), (0, QT.g)((mm => {
        let {
          action: Tm,
          down: fm,
          press: hm
        } = mm;
        var am, xm;
        (0, Am.b)() || (fm ? null === (am = LT[Tm]) || void 0 === am || am.call(LT, function(mm) {
          var Tm;
          if (0 === mm || (null === (Tm = uT) || void 0 === Tm ? void 0 : Tm.press) !== mm) {
            const Tm = {
              press: mm,
              event: (0, sT.b)("inputAction")
            };
            uT = Tm, queueMicrotask((() => {
              uT === Tm && (uT = null)
            }))
          }
          return uT.event
        }(hm)) : null === (xm = vT[Tm]) || void 0 === xm || xm.call(vT))
      })))
    }
    var UT = fm(39140),
      dT = fm(39133),
      gT = fm(39129);
    const WT = {
      completeTask(mm) {
        var Tm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.CompleteTask, (0, Nm.q)(mm))
      },
      setServerCookie(mm) {
        var Tm;
        let {
          key: fm,
          value: hm
        } = mm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.GeneralCookieSet, (0, Nm.w)({
          Hx: fm,
          yx: hm
        }))
      },
      answerUiRequest(mm) {
        var Tm;
        let {
          id: fm,
          bR: hm
        } = mm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.UiRequestResp, (0, Nm.W)({
          Li: fm,
          Ui: hm,
          gi: 5
        }))
      },
      chooseRewardedAd(mm) {
        var Tm;
        let {
          id: fm,
          bR: hm
        } = mm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.UiRequestResponded, (0, Nm.S)({
          id: fm,
          bR: hm
        }))
      },
      requestLeaderboard(mm) {
        var Tm;
        let {
          category: fm,
          timeframe: hm,
          seeTop: Am
        } = mm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.LeaderboardRequest, {
          category: fm,
          timeframe: hm,
          seeTop: Am
        })
      }
    };
    let FT = !1;
    const mf = Vm.f.dq / 2,
      Tf = [mf, -mf, -mf, -mf, mf, mf, -mf, mf],
      ff = [0, 0, 0];

    function hf(mm, Tm, fm) {
      for (let hm = 0; hm < mm.length; hm += 2)
        if (mm[hm] === Tm && mm[hm + 1] === fm) return !0;
      return !1
    }
    const Af = {
      blocksStandingOn: function() {
        const mm = (0, xm.i)();
        if (null === mm) return [];
        const {
          api: Tm,
          chunks: fm,
          tables: hm
        } = mm;
        if (!Tm.readPosition(Tm.localId, ff)) return [];
        const [Am, am, wm] = ff, Dm = Math.ceil(am) - 1, im = [], Rm = [];
        for (let xm = 0; xm < Tf.length; xm += 2) {
          const mm = Am + Tf[xm],
            Tm = wm + Tf[xm + 1];
          if (Number.isInteger(mm) || Number.isInteger(Tm)) continue;
          const am = Math.floor(mm),
            pm = Math.floor(Tm);
          if (hf(Rm, am, pm)) continue;
          const Em = fm.jR(am, Dm, pm);
          hm.isSolidBlockId(Em) && (Rm.push(am, pm), im.push(hm.nameOfId(Em)))
        }
        return im
      },
      dropAhead: function() {
        const mm = (0, xm.i)();
        return null !== mm && 0 !== (Km.x.playerFlags(mm.api.apiView, 0) & Km.Od.DropAhead)
      }
    };
    var af = fm(37050),
      xf = fm(39209),
      wf = fm(1354),
      Df = fm(40740);
    const Rf = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      pf = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Ef() {
      const mm = new Set;
      return {
        add: Tm => (mm.add(Tm), () => {
          mm.delete(Tm)
        }),
        fire() {
          for (const Tm of mm) Tm()
        }
      }
    }
    const of = Object.freeze([]);

    function Of(mm, Tm) {
      let fm, {
        rereads: hm,
        followLocalId: Am
      } = Tm;
      const xm = () => (fm = (0, Wm.o)(fm, mm()), fm);
      return {
        current: xm,
        watch(mm) {
          const Tm = (0, Om.b)((Tm => {
            hm(Tm) && mm(xm())
          }));
          if (!Am) return Tm;
          let fm = (0, om.h)();
          const wm = (0, am.y)((() => {
            const Tm = (0, om.h)();
            Tm !== fm && (fm = Tm, mm(xm()))
          }));
          return () => {
            Tm(), wm()
          }
        }
      }
    }
    const Yf = {
        players: Of((function() {
          const mm = Om.f.ids(),
            Tm = {};
          for (const am of mm) {
            var fm, hm, Am;
            Tm[am] = {
              name: null !== (fm = Om.f.getName(am)) && void 0 !== fm ? fm : null,
              ranks: null !== (hm = Om.f.getSetting(am, "ranks")) && void 0 !== hm ? hm : of,
              cosmetics: null !== (Am = (0, Om.h)(am)) && void 0 !== Am ? Am : null
            }
          }
          return {
            ids: mm,
            byId: Tm,
            localId: (0, om.h)()
          }
        }), {
          rereads: mm => "roster" !== mm.kind || mm.members || mm.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Of((function() {
          const mm = {};
          for (const Am of Om.f.ids()) {
            var Tm, fm, hm;
            mm[Am] = {
              colour: null !== (Tm = Om.f.getSetting(Am, "colorInLobbyLeaderboard")) && void 0 !== Tm ? Tm : null,
              values: null !== (fm = Om.f.getSetting(Am, "lobbyLeaderboardValues")) && void 0 !== fm ? fm : null,
              tags: null !== (hm = Om.f.getSetting(Am, "lobbyLeaderboardTags")) && void 0 !== hm ? hm : null
            }
          }
          return mm
        }), {
          rereads: function(mm) {
            if ("roster" !== mm.kind) return "reset" === mm.kind;
            const {
              members: Tm,
              settings: fm
            } = mm;
            return Tm || fm.has("colorInLobbyLeaderboard") || fm.has("lobbyLeaderboardValues") || fm.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      qf = {
        cosmeticsUpdated: {
          watch: mm => (0, Om.b)((Tm => {
            if ("cosmetics" !== Tm.kind) return;
            const fm = (0, om.h)();
            mm(Tm.updates.map((mm => {
              let {
                bh: Tm,
                Sh: hm,
                eh: Am
              } = mm;
              return {
                local: Tm === fm,
                Sh: hm,
                eh: Am
              }
            })))
          }))
        }
      };
    var jf = fm(2903),
      Vf = fm(1713),
      If = fm(690),
      Kf = fm(41009);
    let Qf = !1,
      nf = null;
    const Jf = {
      setShopOpen(mm) {
        var Tm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.ShopMenuChanged, (0, Nm.M)(mm))
      },
      buyShopItem(mm) {
        var Tm;
        let {
          categoryKey: fm,
          itemKey: hm,
          userInput: Am
        } = mm;
        null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.send(Nm.e.ItemBought, {
          categoryKey: fm,
          itemKey: hm,
          shopVersion: Im.b.get("_shopVersion"),
          userInput: Am
        })
      }
    };
    let zf = !1;
    var Zf = fm(4763);
    const kf = KT.w.LookFrozen | KT.w.ClicksSuppressed;

    function bf(mm, Tm) {
      var fm;
      null !== (fm = (0, xm.i)()) && void 0 !== fm && fm.send(mm, Tm) || console.warn(`[bloxd-wasm-client] message ${mm} not sent: no live game or the core's command ring is full`)
    }(0, Ym.g)(em.pb, (mm => {
      const Tm = (0, Gm.f)(em.pb, mm);
      void 0 !== Tm && im.j.gp("setDiscordReportKey", Tm)
    }));
    const Sf = {
      ignorePlayer(mm) {
        bf(Nm.e.IgnoreUser, (0, Nm.y)({
          Ex: mm
        }))
      },
      reportPlayer(mm) {
        let {
          playerId: Tm,
          chatMsgId: fm,
          dD: hm,
          details: Am
        } = mm;
        bf(Nm.e.UserReport, (0, Nm.cb)({
          hR: Tm,
          AR: fm,
          dD: hm,
          gD: Am
        }))
      },
      reportWorldCodeChat(mm) {
        let {
          chatMsgId: Tm,
          dD: fm,
          details: hm
        } = mm;
        bf(Nm.e.UserReport, (0, Nm.cb)({
          hR: "",
          AR: Tm,
          dD: fm,
          gD: hm
        }))
      },
      requestDiscordReportKey(mm) {
        bf(Nm.e.ReqDiscordReportKey, (0, Nm.G)(mm))
      },
      reportLobbyOrGame(mm) {
        let {
          target: Tm,
          dD: fm,
          details: hm
        } = mm;
        "customGame" === Tm ? bf(Nm.e.CustomGameReport, (0, Nm.t)({
          dD: fm,
          gD: hm
        })) : bf(Nm.e.LobbyReport, (0, Nm.A)({
          dD: fm,
          gD: hm
        }))
      },
      updateMyCosmetic(mm) {
        bf(Nm.e.UpdateMyCosmetic, (0, Nm.bb)(mm))
      },
      holdEmoteWheel(mm) {
        !mm || nT ? (0, Zf.h)(kf, mm ? kf : 0) : im.j.gp("requestEmoteWheelHoldRelease")
      }
    };
    var ef = fm(41088),
      Nf = fm(9141),
      Gf = fm(39739);
    const Xf = [0, 0, 0],
      Pf = [0, 0, 0],
      Hf = [0, 0, 0],
      yf = {
        blockAtViewPoint(mm) {
          let {
            x: Tm,
            y: fm
          } = mm;
          const hm = (0, xm.i)();
          if (null === hm || void 0 === hm || !hm.renderFrame.hasView) return null;
          const {
            renderFrame: Am,
            clientApi: am,
            api: wm
          } = hm;
          let Dm = 0;
          return (0, Gf.f)(((mm, Tm, fm) => (Dm = am.getBlockId(mm, Tm, fm), 0 !== Dm)), Am.cameraPosition, (0, Gf.h)((mm => Km.x.viewProj(wm.apiView, 0, mm)), Tm, fm, Xf), Gf.e, Pf, Hf) ? {
            pos: [Pf[0], Pf[1], Pf[2]],
            normal: [Hf[0], Hf[1], Hf[2]],
            name: (0, Nf.f)(Dm)
          } : null
        }
      },
      Cf = {
        setBlockHighlight(mm) {
          var Tm;
          null === (Tm = (0, xm.i)()) || void 0 === Tm || Tm.setBlockHighlight(mm)
        }
      };
    var rf = fm(1919),
      sf = fm(40992),
      lf = fm(41094),
      Mf = fm(4427),
      uf = fm(4403),
      Bf = fm(41102),
      Lf = fm(3301),
      vf = fm(3306);
    let tf = null,
      Uf = null;

    function df(mm) {
      const Tm = mm.startsWith(vf.l),
        [fm, hm = fm, Am = fm] = (Tm ? mm.slice(vf.l.length) : mm).split(vf.h);
      return {
        top: fm,
        left: hm,
        right: Am,
        half: Tm
      }
    }

    function gf(mm) {
      const Tm = null === tf ? void 0 : (0, Lf.c)(mm),
        fm = void 0 === Tm ? 0 : tf.codes[Tm];
      return 0 === fm ? void 0 : tf.pool[fm - 1]
    }
    var Wf = fm(3293),
      Ff = fm(4394),
      mh = fm(4424),
      Th = fm(41028),
      fh = fm(41104);
    const hh = "item:";
    let Ah = null,
      ah = null,
      xh = null,
      wh = null,
      Dh = !1,
      ih = !1;

    function Rh() {
      return ih || (ih = !0, (0, mh.k)().then((mm => {
        mm && (0, rf.d)()
      }))), xh ??= Promise.all([(0, Wf.f)(), (Uf ??= fm.e(1).then((() => fm(60690))).then((mm => {
        let {
          BLOCK_FACE_RUNS: Tm,
          BLOCK_FACES: fm,
          MAX_FACE_ITEM_ID: hm
        } = mm;
        tf = {
          codes: (0, vf.z)(Tm, hm + 1),
          pool: fm.split(vf.q).map(df)
        }
      }), (mm => {
        throw Uf = null, mm
      })), Uf), (0, fh.f)(), fm.e(198).then((() => fm(34308)))]).then((mm => {
        let [, , Tm, fm] = mm;
        Tm.followBundledTextures(), Ah = Tm, ah = fm, (0, rf.d)()
      }), (mm => {
        xh = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", mm)
      })), xh
    }

    function ph(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = (0, Th.h)()) || void 0 === fm ? void 0 : fm.textureUrl(mm)) && void 0 !== Tm ? Tm : Ah.itemSpriteUrl(mm)
    }

    function Eh(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = (0, Th.h)()) || void 0 === fm ? void 0 : fm.textureUrl(mm)) && void 0 !== Tm ? Tm : Ah.blockTextureUrl(mm)
    }

    function oh(mm) {
      var Tm;
      return null !== (Tm = (0, Wf.e)(mm)) && void 0 !== Tm ? Tm : mm
    }

    function Oh(mm, Tm) {
      var fm, hm, Am;
      return null !== (fm = null !== (hm = null !== (Am = Eh(mm)) && void 0 !== Am ? Am : null === Tm || void 0 === Tm ? void 0 : Tm.rotated[mm]) && void 0 !== hm ? hm : null === Tm || void 0 === Tm ? void 0 : Tm.animated[mm]) && void 0 !== fm ? fm : Ah.notFoundUrl()
    }

    function Yh(mm) {
      return void 0 !== (0, Lf.c)(mm) ? mm : /^[1-9][0-9]*$/.test(mm) ? (0, Lf.e)(Number(mm)) : void 0
    }

    function qh(mm) {
      var Tm;
      if (mm.startsWith(hh)) {
        var fm;
        const Tm = (0, Wf.e)(mm.slice(5));
        return null !== (fm = void 0 === Tm ? null : ph(Tm)) && void 0 !== fm ? fm : Ah.notFoundUrl()
      }
      return null !== (Tm = Ah.particleUrl(mm)) && void 0 !== Tm ? Tm : Ah.notFoundUrl()
    }

    function jh(mm, Tm) {
      return "StairsBlock" === mm ? mm : Tm ? "SlabBlock" : "CubeBlock"
    }
    const Vh = {
        async blockIcon(mm) {
          var Tm;
          let {
            name: hm,
            size: Am,
            lineWidth: am
          } = mm;
          await Rh();
          const xm = null !== (Tm = Yh(hm)) && void 0 !== Tm ? Tm : hm,
            wm = (0, mh.d)(xm, Am, am);
          if (null !== wm) return wm;
          const Dm = gf(xm),
            im = (0, Lf.c)(xm),
            Rm = void 0 === im || null === ah ? void 0 : ah.itemTypeNameOf(im);
          if (null === Ah || void 0 === Dm) return "";
          const pm = [Dm.top, Dm.left, Dm.right].some((mm => null === Eh(mm))),
            Em = pm ? await (wh ??= fm.e(204).then((() => fm(34376))).then((mm => (Dh && (Dh = !1, (0, rf.d)()), {
              rotated: mm.rotatedBlockTextures,
              animated: mm.animatedBlockTextures
            })), (mm => (wh = null, Dh = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", mm), null))), wh) : null;
          if (pm && null === Em) return "";
          const om = {
              top: Oh(Dm.top, Em),
              left: Oh(Dm.left, Em),
              right: Oh(Dm.right, Em),
              itemType: jh(Rm, Dm.half)
            },
            Om = (0, Th.d)(),
            Ym = 0 === Om ? xm : `${xm}#${Om}`;
          return (await (0, Ff.c)()).drawBlockIconUrl(Ym, Am, am, (() => om))
        }
      },
      Ih = {
        itemIcon: function(mm) {
          var Tm, fm, Am, am;
          if (null === Ah) return Rh(), hm.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(mm);
          if ((0, uf.h)(mm)) return {
            kind: "icon",
            url: null !== (fm = null !== (Am = null === (am = (0, Th.h)()) || void 0 === am ? void 0 : am.textureUrl(mm)) && void 0 !== Am ? Am : Ah.ingameIconUrl(mm)) && void 0 !== fm ? fm : Ah.notFoundUrl()
          };
          if (mm.startsWith(uf.c)) return {
            kind: "icon",
            url: qh(mm.slice(uf.c.length))
          };
          if (0 === (0, Lf.g)()) return (0, Bf.c)(), hm.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(mm);
          const xm = null !== (Tm = Yh(mm)) && void 0 !== Tm ? Tm : mm,
            wm = (0, Lf.c)(xm),
            Dm = void 0 === wm ? void 0 : ah.itemTypeNameOf(wm);
          if (void 0 !== gf(xm)) return {
            kind: "drawnBlock"
          };
          const im = function(mm) {
            var Tm;
            return null !== (Tm = ph(oh(mm))) && void 0 !== Tm ? Tm : Ah.notFoundUrl()
          }(xm);
          if ((0, mh.g)(xm) && ! function(mm) {
              const Tm = (0, Th.h)();
              return null !== Tm && (null !== Tm.textureUrl(oh(mm)) || null !== Tm.modelUrl(mm))
            }(xm)) return {
            kind: "model",
            url: im
          };
          if ("Gun" === Dm) return {
            kind: "gun",
            url: im
          };
          if (void 0 !== wm && "GrayscaleArmour" === ah.itemTypeOf(wm) || Object.hasOwn(Mf.e, xm)) {
            var Rm;
            const Tm = null !== (Rm = (0, Mf.h)(mm)) && void 0 !== Rm ? Rm : (0, Mf.h)(xm);
            if (Tm) return {
              kind: "item",
              url: im,
              tint: Tm
            }
          }
          return {
            kind: "item",
            url: im
          }
        },
        hasIcon: function(mm) {
          return void 0 !== Yh(mm) || (0, uf.h)(mm) || mm.startsWith(uf.c)
        },
        isItemName: function(mm) {
          return void 0 !== Yh(mm)
        }
      };
    var Kh = fm(645),
      Qh = fm(39748);

    function nh(mm) {
      if (null === mm || void 0 === mm || !mm.isCoreRunning) return null;
      const {
        api: Tm,
        chunks: fm,
        items: hm,
        tables: Am
      } = mm;
      return {
        playerFeet() {
          const mm = Tm.rV(Tm.localId);
          return null !== mm && void 0 !== mm && mm.every(Number.isFinite) ? mm : null
        },
        chunkBlocks: mm => fm.isLoaded(mm[0], mm[1], mm[2]) ? (mm, Tm, hm) => fm.jR(mm, Tm, hm) : null,
        blockName: mm => Am.nameOfId(mm),
        inventory: () => ({
          slots: hm.playerItems().map((mm => mm ? {
            name: mm.name,
            amount: mm.amount
          } : null)),
          heldSlot: hm.selectedSlot
        }),
        nearby() {
          const fm = [];
          for (let Am = 0; Am < Tm.idStr.length; Am++) {
            var hm;
            const am = Tm.idStr[Am],
              xm = Tm.serverIds[Am],
              wm = Tm.kinds[Am];
            if (null === am || Tm.isLocal(xm) || wm >>> Km.c !== Km.w.Lifeform) continue;
            const Dm = Tm.rV(xm),
              im = Kh.n[wm & Km.f];
            Dm && void 0 !== im && fm.push({
              kind: "Player" === im ? "player" : im,
              name: null !== (hm = mm.clientApi.getEntityName(am)) && void 0 !== hm ? hm : null,
              position: Dm
            })
          }
          return fm
        },
        droppedItems() {
          let mm = 0;
          for (let fm = 0; fm < Tm.idStr.length; fm++) null !== Tm.idStr[fm] && Tm.kinds[fm] >>> Km.c === Km.w.Item && mm++;
          return mm
        }
      }
    }
    const Jh = {
        worldCodeAiChunk: mm => Promise.resolve((0, Qh.b)(nh((0, xm.i)()), mm)),
        worldCodeAiGameState: () => Promise.resolve((0, Qh.e)(nh((0, xm.i)())))
      },
      ch = function(mm) {
        const Tm = Ef(),
          hm = Ef(),
          Am = new Set,
          am = new Set,
          xm = () => {
            var Tm, fm;
            return null !== (Tm = null === (fm = mm.runtime()) || void 0 === fm ? void 0 : fm.currentViewer) && void 0 !== Tm ? Tm : null
          };
        let wm = null,
          Dm = null;
        const Rm = (mm, Tm) => ({
            current: mm,
            watch(fm) {
              let hm = mm();
              return Tm.add((() => {
                const Tm = mm();
                Tm !== hm && (hm = Tm, fm(Tm))
              }))
            }
          }),
          Em = mm => ({
            watch: Tm => (mm.add(Tm), () => {
              mm.delete(Tm)
            })
          }),
          om = mm => {
            const Tm = xm(),
              fm = null === Tm || void 0 === Tm ? void 0 : Tm.view;
            Tm && fm && Tm.seek(Math.max(0, Math.min(fm.totalTicks - 1, fm.DE + mm * pm.Bd)))
          },
          Om = {
            replay: Rm((() => {
              var mm;
              const Tm = xm(),
                fm = null !== (mm = null === Tm || void 0 === Tm ? void 0 : Tm.view) && void 0 !== mm ? mm : null;
              return null === Tm || null === fm || fm.state === pm.ld.None ? (wm = null, null) : (wm = (0, Wm.o)(wm, {
                id: Tm.id,
                DE: fm.DE,
                totalTicks: fm.totalTicks,
                aG: pm.Bd,
                playing: fm.state === pm.ld.Playing,
                speed: fm.speed,
                cameraMode: fm.cameraMode,
                freecam: "freecam" === fm.cameraMode
              }), wm)
            }), Tm),
            replayEdits: Rm((() => {
              var mm;
              const Tm = xm(),
                fm = null !== (mm = null === Tm || void 0 === Tm ? void 0 : Tm.view) && void 0 !== mm ? mm : null;
              return null === Tm || null === fm || fm.state === pm.ld.None ? (Dm = null, null) : (Dm = (0, Wm.o)(Dm, {
                cameraKeyframes: [...Tm.keyframes],
                playbackMark: fm.mark,
                fileName: Tm.fileName,
                unsavedChanges: Tm.unsavedChanges,
                suggestSaveAs: Tm.suggestSaveAs
              }), Dm)
            }), Tm),
            replayRecorder: Rm((() => {
              var Tm, fm;
              return null !== (Tm = null === (fm = mm.runtime()) || void 0 === fm ? void 0 : fm.recorder.current) && void 0 !== Tm ? Tm : Df.b.states.replayRecorder.current()
            }), hm),
            replayVideoExporting: {
              current: xf.b,
              watch: mm => (0, im.m)("replayViewer|videoExportChanged", (() => {
                mm((0, xf.b)())
              }))
            }
          },
          Ym = {
            replayUiActionRequested: Em(am),
            replayViewerRequested: Em(Am)
          },
          qm = mm => {
            for (const Tm of Am) Tm(mm)
          },
          jm = () => {
            var hm;
            !0 === (null === (hm = xm()) || void 0 === hm ? void 0 : hm.isOpen) && Promise.all([fm.e(96), fm.e(66)]).then((() => fm(60677))).then((fm => {
              let {
                startWasmReplayVideoExport: hm
              } = fm;
              return hm({
                viewer: xm,
                canvas: () => {
                  var Tm, fm;
                  return null !== (Tm = null === (fm = mm.canvas) || void 0 === fm ? void 0 : fm.call(mm)) && void 0 !== Tm ? Tm : null
                },
                watchViewer: Tm.add,
                requestViewer: qm
              })
            }), (mm => {
              console.error("Couldn't load the video export", mm), wf.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((mm => {
              console.error("The video export failed", mm)
            }))
          },
          Vm = {
            replayAction(mm) {
              if ((0, xf.b)()) return;
              const Tm = xm();
              switch (mm) {
                case "replaySkipBack":
                  om(-1);
                  break;
                case "replaySkipForward":
                  om(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Tm && void 0 !== Tm && Tm.view && Tm.setSpeed((0, af.e)(Tm.view.speed, "replaySpeedUp" === mm ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Tm || void 0 === Tm || Tm.addKeyframe()
              }
            },
            setReplayPlaying(mm) {
              var Tm, fm;
              (0, xf.b)() || (mm ? null === (Tm = xm()) || void 0 === Tm || Tm.play() : null === (fm = xm()) || void 0 === fm || fm.pause())
            },
            seekReplay(mm) {
              var Tm;
              let {
                DE: fm,
                ignorePlaybackMark: hm
              } = mm;
              null === (Tm = xm()) || void 0 === Tm || Tm.seek(fm, null !== hm && void 0 !== hm && hm)
            },
            setReplayCameraMode(mm) {
              var Tm;
              null === (Tm = xm()) || void 0 === Tm || Tm.setCameraMode(mm)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(mm) {
              var Tm;
              null === (Tm = xm()) || void 0 === Tm || Tm.setKeyframe(mm)
            },
            moveReplayCameraKeyframe(mm) {
              var Tm;
              let {
                from: fm,
                to: hm
              } = mm;
              null === (Tm = xm()) || void 0 === Tm || Tm.moveKeyframe(fm, hm)
            },
            deleteReplayCameraKeyframes(mm) {
              var Tm;
              let {
                start: fm,
                end: hm
              } = mm;
              null === (Tm = xm()) || void 0 === Tm || Tm.deleteKeyframes(fm, hm)
            },
            setReplayPlaybackMark(mm) {
              var Tm;
              null === (Tm = xm()) || void 0 === Tm || Tm.setMark(mm)
            },
            cropReplay(mm) {
              var Tm, fm;
              let {
                start: hm,
                end: Am
              } = mm;
              return !(0, xf.b)() && (null !== (Tm = null === (fm = xm()) || void 0 === fm ? void 0 : fm.crop(hm, Am)) && void 0 !== Tm && Tm)
            },
            holdReplayForShaderPackFailure(mm) {
              const Tm = xm();
              Tm && (Tm.holdForShaderPackFailure(), function(mm) {
                fm.e(115).then((() => fm(39342))).then((Tm => {
                  let {
                    shaderPackPage: fm
                  } = Tm;
                  fm.block(mm)
                })).catch((mm => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", mm)
                }))
              }(mm))
            },
            exportReplayVideo() {
              jm()
            },
            toggleRecording() {
              var Tm;
              null === (Tm = mm.runtime()) || void 0 === Tm || Tm.recorder.toggleRecording()
            },
            saveClip() {
              var Tm;
              null === (Tm = mm.runtime()) || void 0 === Tm || Tm.recorder.saveClip()
            },
            setRecorderPrefs(Tm) {
              var fm;
              let {
                clipping: hm,
                clipSeconds: Am
              } = Tm;
              null === (fm = mm.runtime()) || void 0 === fm || fm.recorder.setPrefs(hm, Am)
            },
            setReplayViewerOpen(Tm) {
              var fm;
              (0, jT.e)(Tm) && (null === (fm = mm.runtime()) || void 0 === fm || fm.recorder.viewerShown(Tm))
            },
            recordFlyingMiddleText(Tm) {
              var fm;
              let {
                content: hm,
                Ga: Am,
                angle: am,
                Xa: xm
              } = Tm;
              null === (fm = mm.runtime()) || void 0 === fm || fm.recorder.recordFlyingText(JSON.stringify(hm), Am, am, xm)
            },
            dragReplayCamera(Tm) {
              var fm;
              let {
                dx: hm,
                dy: Am
              } = Tm;
              null === (fm = mm.freecam()) || void 0 === fm || fm.drag(hm, Am)
            },
            moveReplayFreecam(Tm) {
              var fm;
              null === (fm = mm.freecam()) || void 0 === fm || fm.move(Tm)
            },
            holdReplayFreecamVertical(Tm) {
              var fm;
              let {
                action: hm,
                ni: Am
              } = Tm;
              null === (fm = mm.freecam()) || void 0 === fm || fm.holdVertical(hm, Am)
            }
          },
          Im = mm => {
            var Tm;
            const fm = xm(),
              hm = null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.view) && void 0 !== Tm ? Tm : null;
            Rf.has(mm) ? (mm => {
              for (const Tm of am) Tm(mm)
            })(mm) : pf.has(mm) ? Vm.replayAction(mm) : "replayPlayPause" === mm ? fm && hm && hm.state !== pm.ld.None && Vm.setReplayPlaying(hm.state !== pm.ld.Playing) : "replayChangeCameraMode" === mm ? null === fm || void 0 === fm || fm.cycleCameraMode() : "replayExit" === mm ? !0 === (null === fm || void 0 === fm ? void 0 : fm.inPlayback) && (0, PT.k)("/") : "replayExportVideo" === mm && jm()
          };
        let Km = !1;
        return {
          states: Om,
          events: Ym,
          commands: Vm,
          lookups: {
            replayCamera() {
              var Tm, fm, hm;
              return !0 !== (null === (Tm = xm()) || void 0 === Tm ? void 0 : Tm.isOpen) ? null : null !== (fm = null === (hm = mm.cameraView) || void 0 === hm ? void 0 : hm.call(mm)) && void 0 !== fm ? fm : null
            },
            leaveGameReloadsPage() {
              var mm;
              return !0 === (null === (mm = xm()) || void 0 === mm ? void 0 : mm.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var mm;
              const fm = !0 === (null === (mm = xm()) || void 0 === mm ? void 0 : mm.inPlayback);
              fm !== Km && (Km = fm, im.j.gp("connectedGameChanged")), Tm.fire()
            },
            recorderChanged: hm.fire,
            keyDown: mm => {
              var Tm;
              switch (mm) {
                case "recordGame":
                  return void Vm.toggleRecording();
                case "recordClip":
                  return void((0, jT.d)() || Vm.saveClip())
              }(0, xf.b)() || ("replayViewerOpen" !== mm ? mm.startsWith("replay") && ((0, jT.d)() || !0 === (null === (Tm = xm()) || void 0 === Tm ? void 0 : Tm.inPlayback)) && Im(mm) : qm("toggle"))
            }
          }
        }
      }({
        runtime: Am.j,
        cameraView: () => {
          var mm;
          const Tm = null === (mm = (0, xm.i)()) || void 0 === mm ? void 0 : mm.renderFrame;
          if (!Tm) return null;
          const [fm, hm, Am] = Tm.cameraPosition, [am, wm, Dm] = Tm.cameraDirection;
          return {
            position: [fm, hm, Am],
            direction: [am, wm, Dm]
          }
        },
        canvas: () => {
          var mm, Tm, fm;
          return null !== (mm = null === (Tm = (fm = (0, am.J)()).canvas) || void 0 === Tm ? void 0 : Tm.call(fm)) && void 0 !== mm ? mm : null
        },
        freecam: Am.i
      }),
      zh = {
        states: {
          ...RT,
          ...OT.j,
          ...ch.states,
          ...Yf,
          ...lm
        },
        events: {
          ...pT,
          ...qm,
          ...OT.f,
          ...Zm.d,
          ...ef.g,
          ...ch.events,
          ...qf,
          ...zm.i
        },
        commands: {
          ...cm,
          ...ET,
          ...jm,
          ...OT.e,
          ...WT,
          ...Sf,
          ...zm.e,
          ...CT,
          ...ch.commands,
          ...Jf,
          ...Mm,
          ...Cf,
          ...YT
        },
        queries: {
          ...OT.i,
          ...Jh
        },
        lookups: {
          ...oT,
          ...Pm,
          ...ef.k,
          ...ch.lookups,
          ...Jm,
          ...Af,
          ...yf,
          ...um
        }
      };

    function Zh() {
      (0, wm.d)(Ym.k), (0, Am.n)(ch.feed), (0, Zm.e)(), FT || (FT = !0, (0, Ym.g)(em.l, (mm => {
        const Tm = (0, Gm.f)(em.l, mm);
        "string" === typeof Tm && Promise.resolve().then((() => fm(3634))).then((mm => {
          let {
            onCosmeticPackGranted: fm
          } = mm;
          fm(Tm)
        }))
      })), (0, Ym.g)(em.hb, (mm => {
        const Tm = (0, Gm.f)(em.hb, mm);
        "number" === typeof Tm && im.j.gp("serverUpdating", Date.now() + Tm, !0)
      })), (0, Ym.g)(em.I, (mm => {
        const Tm = (0, Gm.f)(em.I, mm);
        if ((0, Gm.b)(Tm)) {
          const {
            rA: mm,
            sA: fm
          } = Tm;
          (0, dT.d)({
            rA: "string" === typeof mm ? mm : null,
            sA: "string" === typeof fm ? fm : null
          })
        }
      })), (0, Ym.g)(Rm.gc.NewUiRequest, (mm => {
        const Tm = (0, Gm.j)(mm);
        (0, Gm.b)(Tm) && "number" === typeof Tm.id && (0, Gm.b)(Tm.clientParameters) && (0, gT.d)(Tm.id, Tm.clientParameters)
      })), (0, Ym.g)(em.$, (mm => {
        const Tm = (0, Gm.f)(em.$, mm);
        "number" === typeof Tm && (0, gT.g)(Tm)
      })), (0, Ym.e)(gT.c), (0, Ym.g)(Rm.gc.UiRequestPopup, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm) && "number" === typeof Tm.id && "string" === typeof Tm.text) {
          const mm = Tm.id;
          (0, gT.k)(mm, Tm.text, !0 === Tm.destructive, (Tm => {
            WT.answerUiRequest({
              id: mm,
              bR: Tm
            })
          }))
        }
      })), (0, Ym.g)(Rm.gc.TopRightHelper, (mm => {
        const Tm = (0, Gm.j)(mm);
        void 0 !== Tm && im.j.gp("TopRightHelper", Tm, !0)
      })), (0, Ym.g)(Rm.gc.TaskProgress, (mm => {
        const Tm = (0, Gm.j)(mm);
        (0, Gm.b)(Tm) && "string" === typeof Tm.taskId && "number" === typeof Tm.progress && (0, UT.c)({
          taskId: Tm.taskId,
          progress: Tm.progress
        })
      }))), zf || (zf = !0, (0, Ym.g)(em.u, (mm => {
        const Tm = (0, Gm.f)(em.u, mm);
        (0, Gm.b)(Tm) && im.j.gp("showShopFromServer", {
          toggle: Tm.yA,
          CA: Tm.CA
        }, !0)
      })), (0, Ym.g)(Rm.gc.OverShopInfo, (mm => {
        const Tm = (0, Gm.j)(mm);
        (0, Gm.b)(Tm) && im.j.gp("overShopInfo", Tm.info, !0)
      })), (0, Ym.g)(Rm.gc.ShowShopTutorial, (() => {
        im.j.gp("showShopTutorial", null, !0)
      }))), Qf || (Qf = !0, (0, Ym.c)((() => {
        var mm;
        (0, jf.J)(), null === (mm = nf) || void 0 === mm || mm(), nf = (0, Ym.b)() ? (0, If.j)(Ym.b) : null, (0, Ym.b)() || im.j.oV()
      })), (0, Ym.g)(Rm.gc.SetCookie, (mm => {
        const Tm = (0, Gm.j)(mm),
          fm = (0, PT.d)().gameNameWithVariation;
        (0, Gm.b)(Tm) && "string" === typeof Tm.key && null !== fm && (0, Vf.setCookie)(fm, Tm.key, Tm.value)
      })), (0, Ym.g)(Rm.gc.LeaveValues, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm) && "string" === typeof Tm.leaveEventType) {
          const {
            leaveEventType: mm,
            category: fm,
            subCategory: hm,
            value: Am
          } = Tm;
          (0, jf.P)({
            leaveEventType: mm,
            category: fm,
            subCategory: hm,
            value: Am
          })
        }
      })), (0, Ym.g)(Rm.gc.CustomAnalyticsEvent, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm) && "string" === typeof Tm.cat1) {
          const {
            cat1: mm,
            cat2: fm,
            cat3: hm,
            value: Am
          } = Tm;
          (0, jf.w)({
            cat1: mm,
            cat2: fm,
            cat3: hm,
            value: Am
          })
        }
      })), (0, Ym.g)(Rm.gc.ProgressionEvent, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm)) {
          const {
            type: mm,
            location1: fm,
            location2: hm,
            location3: Am,
            score: am
          } = Tm;
          (0, jf.z)({
            type: mm,
            location1: fm,
            location2: hm,
            location3: Am,
            score: am
          })
        }
      })), (0, Ym.g)(Rm.gc.ResourceEvent, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm)) {
          const {
            type: mm,
            resourceType: fm,
            amount: hm,
            category: Am,
            itemName: am
          } = Tm;
          (0, jf.D)({
            type: mm,
            resourceType: fm,
            amount: hm,
            category: Am,
            itemName: am
          })
        }
      })), (0, Ym.g)(Rm.gc.LeaderboardResponse, (mm => {
        const Tm = (0, Gm.j)(mm);
        if ((0, Gm.b)(Tm)) {
          const {
            category: mm,
            timeframe: fm,
            data: hm
          } = Tm;
          im.j.gp("leaderboardResponse", {
            category: mm,
            timeframe: fm,
            data: hm
          })
        }
      })), (0, Ym.g)(em.A, (mm => {
        const Tm = (0, Gm.f)(em.A, mm);
        "string" === typeof Tm && (0, Kf.e)(mm.conn, Tm)
      })), (0, Ym.g)(em.D, (mm => {
        const Tm = (0, Gm.f)(em.D, mm);
        "string" === typeof Tm && console.error(`[logErrorToConsole]: ${Tm}`)
      }))), ym(), (0, ef.b)(), yT || (yT = !0, (0, Ym.g)(em.k, (mm => {
        const Tm = (0, Gm.f)(em.k, mm);
        void 0 !== Tm && (0, HT.e)(Tm)
      }))), tT(), ST(), tm || (tm = !0, (0, am.u)(Um)), hm.gameBridge.attach(zh), (0, hm.installPageSources)({
        commands: {
          ...hm.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: sf.i
        },
        queries: Vh,
        lookups: {
          ...hm.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Ih,
          mI: sf.e,
          drawCallStats: lf.l
        }
      }), (0, rf.d)(), Rh()
    }
  },
  41028: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm,
      d: () => Dm,
      h: () => wm,
      j: () => im
    });
    var hm = fm(1919);
    let Am = null,
      am = 0;
    const xm = new Set;

    function wm() {
      return Am
    }

    function Dm() {
      return am
    }

    function im(mm) {
      Am = mm, am++, (0, hm.d)();
      for (const Tm of xm) Tm()
    }

    function Rm(mm) {
      xm.add(mm)
    }
  },
  41104: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      f: () => wm
    });
    var hm = fm(41113);
    let Am = null,
      am = null;

    function xm() {
      return Am ??= fm.e(61).then((() => fm(60699))).catch((mm => {
        throw Am = null, mm
      })), Am
    }

    function wm() {
      return am ??= Promise.all([xm(), (0, hm.e)()]).then((mm => {
        let [Tm] = mm;
        return Tm
      }), (mm => {
        throw am = null, mm
      })), am
    }
  },
  37164: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = {
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
  36964: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      f: () => am,
      h: () => Em,
      k: () => wm,
      m: () => Dm,
      o: () => im,
      s: () => pm,
      t: () => Rm,
      u: () => xm
    });
    var hm = fm(1247);
    let Am = function(mm) {
        return mm[mm.Join = 0] = "Join", mm[mm.Leave = 1] = "Leave", mm[mm.Push = 2] = "Push", mm[mm.Cursor = 3] = "Cursor", mm[mm.Submit = 4] = "Submit", mm[mm.ReloadAsVariation = 5] = "ReloadAsVariation", mm[mm.CreateFile = 6] = "CreateFile", mm[mm.RenameFile = 7] = "RenameFile", mm[mm.DeleteFile = 8] = "DeleteFile", mm[mm.SetEngine = 9] = "SetEngine", mm[mm.RenameFolder = 10] = "RenameFolder", mm
      }({}),
      am = function(mm) {
        return mm[mm.Joined = 0] = "Joined", mm[mm.Updates = 1] = "Updates", mm[mm.Presence = 2] = "Presence", mm[mm.RemoteCursor = 3] = "RemoteCursor", mm[mm.ForceClose = 4] = "ForceClose", mm[mm.LobbyFilesChanged = 5] = "LobbyFilesChanged", mm[mm.EngineSettings = 6] = "EngineSettings", mm
      }({});

    function xm(mm) {
      return "lobby" === mm.kind ? `lobby:${mm.path}` : `codeBlock:${mm.pos[0]},${mm.pos[1]},${mm.pos[2]}`
    }

    function wm(mm) {
      if ("lobby" === mm) return {
        kind: "lobby",
        path: hm.i
      };
      if (mm.startsWith("lobby:")) {
        const Tm = mm.slice(6);
        return pm(Tm) ? {
          kind: "lobby",
          path: Tm
        } : null
      }
      const Tm = mm.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Tm ? {
        kind: "codeBlock",
        pos: [parseInt(Tm[1]), parseInt(Tm[2]), parseInt(Tm[3])]
      } : null
    }

    function Dm(mm) {
      return mm.endsWith(".d.ts")
    }

    function im(mm) {
      return mm.endsWith(".ts") && !Dm(mm)
    }
    const Rm = 64;

    function pm(mm) {
      if (!mm || mm !== mm.trim()) return !1;
      if (mm.length > Rm) return !1;
      if (mm.startsWith("/") || mm.includes("\\") || mm.includes("\0")) return !1;
      if (!Dm(mm) && !im(mm) && ! function(mm) {
          return mm.endsWith(".js") && !mm.endsWith(".min.js") && !mm.endsWith(".bundle.js")
        }(mm)) return !1;
      const Tm = mm.split("/");
      for (const fm of Tm)
        if ("" === fm || "." === fm || ".." === fm) return !1;
      return !0
    }
    const Em = 14e3
  },
  39150: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      e: () => Am
    });
    const hm = ["description", "label"];

    function Am(mm) {
      const Tm = mm.type;
      return {
        type: Tm,
        params: mm[Tm]
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);