export const id = 41;
export const ids = [41];
export const modules = {
  37843: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc,
      h: () => rB,
      l: () => Ic
    });
    const Vc = 6e3;

    function Ic(cB, Bc) {
      return [Math.floor(cB[0] / Bc) * Bc, Math.floor(cB[1] / Bc) * Bc, Math.floor(cB[2] / Bc) * Bc]
    }

    function rB(cB) {
      const Bc = (null !== cB && void 0 !== cB ? cB : "").match(/-?\d+(?:\.\d+)?/g);
      return Bc && Bc.length >= 3 ? [Number(Bc[0]), Number(Bc[1]), Number(Bc[2])] : null
    }

    function uc(cB, Bc) {
      return cB === Bc ? String(cB) : `${cB}-${Bc}`
    }

    function sc(cB, Bc, nc, Vc) {
      const Ic = [];
      let rB = new Map;
      for (let uc = cB[2]; uc < cB[2] + Bc; uc++) {
        const sc = new Map;
        let Mc = cB[0];
        for (; Mc < cB[0] + Bc;) {
          const Ic = Vc(Mc, nc, uc);
          let Pc = Mc;
          for (; Pc + 1 < cB[0] + Bc && Vc(Pc + 1, nc, uc) === Ic;) Pc++;
          if (null !== Ic) {
            const cB = `${Mc} ${Pc} ${Ic}`,
              Bc = rB.get(cB);
            Bc ? (Bc.z1 = uc, rB.delete(cB), sc.set(cB, Bc)) : sc.set(cB, {
              x0: Mc,
              x1: Pc,
              z0: uc,
              z1: uc,
              name: Ic
            })
          }
          Mc = Pc + 1
        }
        Ic.push(...rB.values()), rB = sc
      }
      return Ic.push(...rB.values()), Ic.sort(((cB, Bc) => cB.z0 - Bc.z0 || cB.x0 - Bc.x0)).map((cB => `x${uc(cB.x0,cB.x1)} z${uc(cB.z0,cB.z1)} ${cB.name}`))
    }

    function Mc(cB, Bc, nc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Vc;
      const Mc = [cB[0] + Bc - 1, cB[1] + Bc - 1, cB[2] + Bc - 1],
        Pc = null !== Ic && Ic.every(((Bc, nc) => Math.floor(Bc) >= cB[nc] && Math.floor(Bc) <= Mc[nc])),
        qB = [`The chunk from ${cB.join(" ")} to ${Mc.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Ic && qB.push(`The player's feet are at ${Ic.map(Math.floor).join(" ")}, ${Pc?"in this chunk":"outside this chunk"}.`);
      const Oc = [];
      for (let Vc = cB[1]; Vc <= Mc[1]; Vc++) {
        const Ic = sc(cB, Bc, Vc, nc).join("; "),
          rB = Oc[Oc.length - 1];
        (null === rB || void 0 === rB ? void 0 : rB.boxes) === Ic ? rB.to = Vc : Oc.push({
          from: Vc,
          to: Vc,
          boxes: Ic
        })
      }
      const Tc = Oc.filter((cB => "" !== cB.boxes));
      0 === Tc.length && qB.push("It is all air.");
      let fc = qB.join("\n").length;
      for (const Vc of Tc) {
        const cB = `y${uc(Vc.from,Vc.to)}: ${Vc.boxes}`;
        if (fc += cB.length + 1, fc > rB) {
          qB.push(`Cut short: the layers from y${Vc.from} up aren't shown, as there are too many blocks.`);
          break
        }
        qB.push(cB)
      }
      return qB.join("\n")
    }
  },
  7702: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(27);

    function Ic() {
      return !Vc.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35554: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      f: () => rB,
      h: () => Ic
    });
    const Vc = [.25, .5, 1, 2, 4, 8, 16];

    function Ic(cB, Bc) {
      const nc = Vc;
      let Ic = nc.indexOf(cB);
      return -1 === Ic && (Ic = nc.findIndex((Bc => Bc >= cB)), -1 === Ic && (Ic = nc.length - 1)), "up" === Bc ? nc[Math.min(Ic + 1, nc.length - 1)] : nc[Math.max(Ic - 1, 0)]
    }

    function rB(cB) {
      return cB <= Vc[0]
    }

    function uc(cB) {
      return cB >= Vc[Vc.length - 1]
    }
  },
  37463: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(35),
      Ic = nc(1594);

    function rB(cB) {
      let {
        taskId: Bc,
        progress: nc
      } = cB;
      const Vc = Ic.d.get("_tasks");
      null !== Vc && void 0 !== Vc && Vc[Bc] && Ic.d.apply({
        _tasks: {
          ...Vc,
          [Bc]: {
            ...Vc[Bc],
            progress: nc
          }
        }
      })
    }
    Vc.i.subscribe("clientTaskProgress", (cB => {
      rB(cB)
    }))
  },
  37818: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc,
      f: () => Pc,
      i: () => Oc,
      m: () => Mc,
      q: () => uc,
      s: () => qB
    });
    var Vc = nc(1594),
      Ic = nc(35),
      rB = nc(1602);
    const uc = (0, rB.p)((function() {
        var cB, Bc, nc, Ic;
        return {
          health: null !== (cB = Vc.d.get("_health")) && void 0 !== cB ? cB : null,
          maxHealth: null !== (Bc = Vc.d.get("_totalMaxHealth")) && void 0 !== Bc ? Bc : null,
          shield: null !== (nc = Vc.d.get("_shield")) && void 0 !== nc ? nc : null,
          maxShield: null !== (Ic = Vc.d.get("maxShield")) && void 0 !== Ic ? Ic : null
        }
      }), [], (0, rB.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      sc = [{
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

    function Mc(cB, Bc) {
      return sc[(cB ? 2 : 0) + (Bc ? 1 : 0)]
    }
    const Pc = (0, rB.p)((function() {
      var cB;
      return null !== (cB = Vc.d.get("_aura")) && void 0 !== cB ? cB : null
    }), [], (0, rB.l)("_aura"));

    function qB(cB) {
      return {
        watch: Bc => (0, Ic.m)("shotPlayer", (nc => {
          let {
            playerId: Vc,
            damage: Ic,
            wasCrit: rB,
            distance: uc
          } = nc;
          cB(Vc) && Bc({
            damage: Ic,
            wasCrit: rB,
            distance: uc
          })
        }))
      }
    }

    function Oc(cB) {
      return (0, rB.e)("chat", (Bc => {
        let {
          serverChatMsgId: nc,
          content: Vc,
          chatterEId: Ic
        } = Bc;
        return {
          serverChatMsgId: null !== nc && void 0 !== nc ? nc : null,
          content: Vc,
          author: Ic ? cB(Ic) : null
        }
      }))
    }
    class Tc {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const nc = this.shown;
        return cB !== this.needed && (this.needed = cB, this.neededSince = Bc, null === cB && (this.shown = null)), this.shown !== this.needed && Bc - this.neededSince > 200 && (this.shown = this.needed), this.shown !== nc
      }
    }
  },
  38765: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      i: () => uc
    });
    var Vc = nc(2451);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= nc.e(191).then((() => nc(35055))).then((cB => {
        let {
          ITEM_SPRITES: Bc,
          ITEM_SPRITES_WITHOUT_FILE: nc,
          ITEM_FILES_WITHOUT_SPRITE: rB
        } = cB;
        Ic = function(cB, Bc, nc) {
          const Ic = new Set,
            rB = (0, Vc.B)(Bc);
          let uc = 0;
          for (const [Vc, sc] of cB.entries()) Vc === rB[uc] ? uc++ : Ic.add(sc);
          if ("" !== nc)
            for (const sc of nc.split(Vc.t)) Ic.add(sc);
          return Ic
        }(Bc.split(Vc.t), nc, rB)
      }), (cB => {
        throw rB = null, cB
      })), rB
    }

    function sc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Ic) || void 0 === nc ? void 0 : nc.has(cB)) && void 0 !== Bc && Bc
    }
  },
  37812: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      return Math.hypot(cB[0] - Bc[0], cB[1] - Bc[1], cB[2] - Bc[2]) < nc + .5
    }
    nc.d(Bc, {
      b: () => Vc
    })
  },
  37479: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB
    });
    var Vc = nc(1090),
      Ic = nc(1373),
      rB = nc(27),
      uc = nc(1164),
      sc = nc(1177),
      Mc = nc(1330),
      Pc = nc(35124);

    function qB(cB) {
      let {
        B7: Bc,
        g6: nc
      } = cB;
      const qB = null !== Bc && void 0 !== Bc ? Bc : (0, sc.d)().gameNameWithVariation;
      (0, Vc.B)(qB) && ((0, Pc.n)(), (0, uc.cb)((() => {
        console.log("Received matchmaking order from game server to game", Bc), (0, rB.h)("inGameReplay"), (0, Mc.navigatePreserveSearch)((0, Ic.e)(qB, null !== nc && void 0 !== nc ? nc : void 0))
      }), "video_start"))
    }
  },
  37617: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(35),
      Ic = nc(1613);

    function rB(cB) {
      var Bc, nc;
      const rB = (0, Ic.n)(null !== (Bc = null === (nc = Ic.v.toggleFreeCam) || void 0 === nc ? void 0 : nc[0]) && void 0 !== Bc ? Bc : null);
      Vc.i.Vu("showBottomMessage", {
        message: `Free Camera ${cB?"Enabled":"Disabled"}${rB?` - Press ${rB} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37470: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      h: () => sc,
      j: () => Mc
    });
    var Vc = nc(35),
      Ic = nc(1194);
    const rB = new Map;

    function uc(cB, Bc) {
      Vc.i.Vu("newUiRequest", {
        id: cB,
        clientParameters: Bc
      }, !0)
    }

    function sc(cB) {
      Vc.i.Vu("removeUiRequest", cB, !0);
      const Bc = rB.get(cB);
      Bc && (Bc.tearDownNotification(), rB.delete(cB))
    }

    function Mc(cB, Bc, nc) {
      const Vc = Ic.NotificationProvider.showPromptPopup({
        title: Bc,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      rB.set(cB, Vc), Vc.getResult().then((Bc => {
        rB.delete(cB), "notificationTornDown" !== Bc && nc(Bc)
      }))
    }
  },
  37835: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc,
      d: () => Tc
    });
    var Vc = nc(174),
      Ic = nc(37843);
    const rB = 20;

    function uc(cB) {
      return cB.map(Math.floor).join(" ")
    }

    function sc(cB) {
      return null === cB.amount || 1 === cB.amount ? cB.name : `${cB.amount} ${cB.name}`
    }
    var Mc = nc(37845),
      Pc = nc(1594),
      qB = nc(1177);

    function Oc(cB, Bc) {
      if (!cB) return Mc.d;
      const nc = cB.playerFeet();
      if (!nc) return "The player isn't in the world yet, so no blocks can be seen.";
      const rB = Vc.e.kI,
        uc = (0, Ic.l)(null !== Bc && void 0 !== Bc ? Bc : nc, rB),
        sc = cB.chunkBlocks(uc);
      return sc ? (0, Ic.e)(uc, rB, ((Bc, nc, Vc) => {
        const Ic = sc(Bc, nc, Vc);
        return 0 === Ic ? null : cB.blockName(Ic).split("|")[0]
      }), nc) : `The chunk from ${uc.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${nc.map(Math.floor).join(" ")}.`
    }

    function Tc(cB) {
      var Bc, nc, Vc;
      if (!cB) return Mc.f;
      const Ic = cB.playerFeet();
      if (!Ic) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Oc,
        heldSlot: Tc
      } = cB.inventory();
      return function(cB) {
        const Bc = [];
        null !== cB.game && Bc.push(`Game: ${cB.game}.`);
        const nc = null === cB.health ? "" : `, health ${Math.round(cB.health)}${null===cB.maxHealth?"":` of ${Math.round(cB.maxHealth)}`}`;
        Bc.push(`The player (the creator) stands at ${uc(cB.position)}${nc}, ${cB.creative?"in":"not in"} creative mode.`);
        const Vc = cB.slots[cB.heldSlot];
        Bc.push(Vc ? `Holding (slot ${cB.heldSlot}): ${sc(Vc)}.` : `Holding nothing (slot ${cB.heldSlot} is empty).`);
        const Ic = cB.slots.flatMap(((cB, Bc) => cB ? [`slot ${Bc}: ${sc(cB)}`] : []));
        Bc.push(Ic.length > 0 ? `Inventory: ${Ic.join(", ")}.` : "Inventory: empty.");
        const Mc = Bc => Math.hypot(Bc.position[0] - cB.position[0], Bc.position[1] - cB.position[1], Bc.position[2] - cB.position[2]),
          Pc = [...cB.nearby].sort(((cB, Bc) => Mc(cB) - Mc(Bc)));
        if (0 === Pc.length) Bc.push("No other players or mobs are near enough to see.");
        else {
          Bc.push("Near them, nearest first:");
          for (const cB of Pc.slice(0, rB)) {
            const nc = "player" === cB.kind ? `player "${cB.name||"?"}"` : cB.name && cB.name !== cB.kind ? `${cB.kind} "${cB.name}"` : cB.kind,
              Vc = Math.round(Mc(cB));
            Bc.push(`- ${nc} at ${uc(cB.position)}, ${Vc} block${1===Vc?"":"s"} away`)
          }
          Pc.length > rB && Bc.push(`- and ${Pc.length-rB} more further away`)
        }
        return cB.droppedItems > 0 && Bc.push(`${cB.droppedItems} dropped item${1===cB.droppedItems?" is":"s are"} on the ground nearby.`), Bc.join("\n")
      }({
        game: null !== (Bc = (0, qB.d)().gameNameWithVariation) && void 0 !== Bc ? Bc : null,
        position: Ic,
        health: null !== (nc = Pc.d.get("_health")) && void 0 !== nc ? nc : null,
        maxHealth: null !== (Vc = Pc.d.get("_totalMaxHealth")) && void 0 !== Vc ? Vc : null,
        creative: !0 === Pc.d.get("creative"),
        heldSlot: Tc,
        slots: Oc,
        nearby: cB.nearby(),
        droppedItems: cB.droppedItems()
      })
    }
  },
  37494: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => Mc,
      i: () => Pc
    });
    var Vc = nc(1090),
      Ic = nc(867),
      rB = nc(35484),
      uc = nc(35);

    function sc(cB) {
      let {
        lobbyName: Bc,
        gameNameWithVariation: nc
      } = cB;
      return !(0, Vc.F)(Bc) || null !== nc && (nc.startsWith("testGym") || (0, Ic.k)(nc))
    }

    function Mc(cB) {
      return cB.oN === rB.b.Leave || cB.oN === rB.b.Cursor
    }

    function Pc(cB) {
      uc.i.Vu("codeCollab", {
        type: cB.oN,
        docKey: cB.kE,
        version: cB.XN,
        editorCount: cB.cBc,
        peers: cB.Bcc,
        updates: cB.uE,
        playerId: cB.ncc,
        playerName: cB.Vcc,
        colour: cB.Icc,
        anchor: cB.sE,
        head: cB.OE,
        existingCursors: cB.rBc,
        files: cB.ucc,
        engineSettings: cB.scc
      })
    }
  },
  38733: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => Dc,
      B: () => vB,
      E: () => xB,
      I: () => Ec,
      K: () => Zc,
      O: () => Nc,
      Q: () => bB,
      T: () => Jc,
      W: () => Fc,
      Y: () => Cc,
      e: () => jB,
      f: () => Wc,
      i: () => gB,
      l: () => Rc,
      o: () => Uc,
      p: () => Lc,
      t: () => oc,
      w: () => Qc
    });
    var Vc = nc(1226),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(1927),
      sc = nc(3866),
      Mc = nc(3828);
    let Pc, qB = !1,
      Oc = !1,
      Tc = !1,
      fc = !1;
    const mB = 1300,
      ec = 3e3;
    let tB = 0,
      Sc = !1,
      yB = !1,
      zB = 0;
    const pc = 2;
    let hc = !1,
      aB = !1;
    const lc = new Set,
      Yc = new Set;

    function Lc() {
      return qB
    }

    function gB() {
      return yB
    }

    function Uc() {
      return aB
    }

    function bB() {
      return (0, rB.r)() && !aB
    }

    function Zc(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (cB !== aB) {
        aB = cB;
        for (const cB of [...Yc]) cB(aB);
        Bc && Fc()
      }
    }

    function Qc(cB) {
      return Yc.add(cB), () => {
        Yc.delete(cB)
      }
    }

    function Cc() {
      (0, sc.h)(uc.x.Menu, (0, rB.r)() ? 0 : uc.x.Menu)
    }

    function vB() {
      yB = !1, zB = 0, Cc(), Fc()
    }

    function Dc(cB) {
      return lc.add(cB), () => {
        lc.delete(cB)
      }
    }

    function Nc(cB) {
      Oc = !1, cB !== qB && (qB = cB, fc = !1, clearTimeout(Pc), Tc = !qB && hc, qB ? (Sc = !1, yB = !1, zB = 0) : bB() && !hc && (yB = !0), hc = !1, qB && !bB() && Kc(), dc(), Tc && Fc())
    }

    function Ec(cB) {
      cB !== Sc && (Sc = cB, cB || Fc())
    }

    function oc() {
      Oc = !1, fc || !0 !== Xc() || (fc = !0, clearTimeout(Pc), Pc = setTimeout(wc, mB))
    }

    function Wc() {
      return (!Oc || performance.now() - tB > ec) && (Oc = (0, Mc.M)().lockPointer(), tB = performance.now()), Oc
    }

    function wc() {
      kB() && Hc() && Wc()
    }

    function kB() {
      return bB() && !qB && !Sc && !(0, Vc.f)()
    }

    function Xc() {
      var cB;
      return "undefined" === typeof navigator || null === (cB = navigator.userActivation) || void 0 === cB ? void 0 : cB.isActive
    }

    function Hc() {
      return Tc && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Xc()
    }

    function Fc() {
      bB() ? kB() && !yB && Hc() && Wc() : qB && !hc && Kc()
    }

    function Jc() {
      yB ? navigator.vendor.startsWith("Apple") ? iB() : zB = pc : Fc()
    }

    function jB() {
      zB > 0 && 0 === --zB && iB()
    }

    function Rc() {
      zB = 0
    }

    function iB() {
      kB() && !0 === Xc() && Wc()
    }

    function Kc() {
      hc = !0, (0, Mc.M)().unlockPointer()
    }

    function xB() {
      Oc = !1, Tc = !1, fc = !1, clearTimeout(Pc), Sc = !1, yB = !1, zB = 0, hc = !1;
      const cB = qB;
      qB = !1, cB && dc()
    }

    function dc() {
      for (const cB of [...lc]) cB(qB);
      Ic.i.Vu("pointerLockUpdate", qB)
    }
  },
  38696: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc,
      d: () => sc,
      h: () => Oc,
      k: () => Pc,
      o: () => uc,
      q: () => qB,
      r: () => Mc
    });
    let Vc = null,
      Ic = null,
      rB = null;

    function uc(cB) {
      Vc = cB
    }

    function sc() {
      return Vc
    }

    function Mc(cB) {
      Ic = cB
    }

    function Pc() {
      return Ic
    }

    function qB(cB) {
      rB = cB
    }

    function Oc() {
      return rB
    }

    function Tc() {
      var cB, Bc;
      return !0 === (null === (cB = Ic) || void 0 === cB || null === (Bc = cB.currentViewer) || void 0 === Bc ? void 0 : Bc.inPlayback)
    }
  },
  38746: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadIcons: () => Uc,
      setIconFileOverrides: () => bB,
      wasmIconLookups: () => Wc,
      wasmIconQueries: () => oc
    });
    var Vc = nc(3615),
      Ic = nc(3588),
      rB = nc(38754),
      uc = nc(1579),
      sc = nc(1566),
      Mc = nc(2444),
      Pc = nc(2451);
    let qB = null,
      Oc = null;

    function Tc(cB) {
      const Bc = cB.startsWith(Pc.k),
        [nc, Vc = nc, Ic = nc] = (Bc ? cB.slice(Pc.k.length) : cB).split(Pc.i);
      return {
        top: nc,
        left: Vc,
        right: Ic,
        half: Bc
      }
    }

    function fc(cB) {
      const Bc = null === qB ? void 0 : (0, Mc.e)(cB),
        nc = void 0 === Bc ? 0 : qB.codes[Bc];
      return 0 === nc ? void 0 : qB.pool[nc - 1]
    }
    var mB = nc(2438),
      ec = nc(3579),
      tB = nc(3609),
      Sc = nc(38763);
    const yB = "item:";
    let zB = null,
      pc = null,
      hc = null,
      aB = null,
      lc = !1,
      Yc = !1,
      Lc = null,
      gB = 0;

    function Uc() {
      return Yc || (Yc = !0, (0, tB.i)().then((cB => {
        cB && (0, uc.c)()
      }))), hc ??= Promise.all([(0, mB.g)(), (Oc ??= nc.e(1).then((() => nc(40580))).then((cB => {
        let {
          BLOCK_FACE_RUNS: Bc,
          BLOCK_FACES: nc,
          MAX_FACE_ITEM_ID: Vc
        } = cB;
        qB = {
          codes: (0, Pc.D)(Bc, Vc + 1),
          pool: nc.split(Pc.t).map(Tc)
        }
      }), (cB => {
        throw Oc = null, cB
      })), Oc), (0, Sc.c)(), nc.e(197).then((() => nc(35325)))]).then((cB => {
        let [, , Bc, nc] = cB;
        Bc.loadBundledTextures(), zB = Bc, pc = nc, (0, uc.c)()
      }), (cB => {
        hc = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", cB)
      })), hc
    }

    function bB(cB) {
      Lc = cB, gB++, (0, uc.c)()
    }

    function Zc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Lc) || void 0 === nc ? void 0 : nc.itemSprite(cB)) && void 0 !== Bc ? Bc : zB.itemSpriteUrl(cB)
    }

    function Qc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Lc) || void 0 === nc ? void 0 : nc.blockTexture(cB)) && void 0 !== Bc ? Bc : zB.blockTextureUrl(cB)
    }

    function Cc(cB) {
      var Bc;
      return null !== (Bc = (0, mB.d)(cB)) && void 0 !== Bc ? Bc : cB
    }

    function vB(cB, Bc) {
      var nc, Vc, Ic;
      return null !== (nc = null !== (Vc = null !== (Ic = Qc(cB)) && void 0 !== Ic ? Ic : null === Bc || void 0 === Bc ? void 0 : Bc.rotated[cB]) && void 0 !== Vc ? Vc : null === Bc || void 0 === Bc ? void 0 : Bc.animated[cB]) && void 0 !== nc ? nc : zB.notFoundUrl()
    }

    function Dc(cB) {
      return void 0 !== (0, Mc.e)(cB) ? cB : /^[1-9][0-9]*$/.test(cB) ? (0, Mc.f)(Number(cB)) : void 0
    }

    function Nc(cB) {
      var Bc;
      if (cB.startsWith(yB)) {
        var nc;
        const Bc = (0, mB.d)(cB.slice(5));
        return null !== (nc = void 0 === Bc ? null : Zc(Bc)) && void 0 !== nc ? nc : zB.notFoundUrl()
      }
      return null !== (Bc = zB.particleUrl(cB)) && void 0 !== Bc ? Bc : zB.notFoundUrl()
    }

    function Ec(cB, Bc) {
      return "StairsBlock" === cB ? cB : Bc ? "SlabBlock" : "CubeBlock"
    }
    const oc = {
        async blockIcon(cB) {
          var Bc;
          let {
            name: Vc,
            size: Ic,
            lineWidth: rB
          } = cB;
          await Uc();
          const sc = null !== (Bc = Dc(Vc)) && void 0 !== Bc ? Bc : Vc,
            Pc = (0, tB.b)(sc, Ic, rB);
          if (null !== Pc) return Pc;
          const qB = fc(sc),
            Oc = (0, Mc.e)(sc),
            Tc = void 0 === Oc || null === pc ? void 0 : pc.itemTypeNameOf(Oc);
          if (null === zB || void 0 === qB) return "";
          const mB = [qB.top, qB.left, qB.right].some((cB => null === Qc(cB))),
            Sc = mB ? await (aB ??= nc.e(185).then((() => nc(33054))).then((cB => (lc && (lc = !1, (0, uc.c)()), {
              rotated: cB.rotatedBlockTextures,
              animated: cB.animatedBlockTextures
            })), (cB => (aB = null, lc = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", cB), null))), aB) : null;
          if (mB && null === Sc) return "";
          const yB = {
              top: vB(qB.top, Sc),
              left: vB(qB.left, Sc),
              right: vB(qB.right, Sc),
              itemType: Ec(Tc, qB.half)
            },
            hc = 0 === gB ? sc : `${sc}#${gB}`;
          return (await (0, ec.c)()).drawBlockIconUrl(hc, Ic, rB, (() => yB))
        }
      },
      Wc = {
        itemIcon: function(cB) {
          var Bc, nc;
          if (null === zB) return Uc(), sc.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(cB);
          if ((0, Ic.j)(cB)) return {
            kind: "icon",
            url: null !== (nc = zB.ingameIconUrl(cB)) && void 0 !== nc ? nc : zB.notFoundUrl()
          };
          if (cB.startsWith(Ic.e)) return {
            kind: "icon",
            url: Nc(cB.slice(Ic.e.length))
          };
          if (0 === (0, Mc.i)()) return (0, rB.b)(), sc.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(cB);
          const uc = null !== (Bc = Dc(cB)) && void 0 !== Bc ? Bc : cB,
            Pc = (0, Mc.e)(uc),
            qB = void 0 === Pc ? void 0 : pc.itemTypeNameOf(Pc);
          if (void 0 !== fc(uc)) return {
            kind: "drawnBlock"
          };
          const Oc = function(cB) {
            var Bc;
            return null !== (Bc = Zc(Cc(cB))) && void 0 !== Bc ? Bc : zB.notFoundUrl()
          }(uc);
          if ((0, tB.e)(uc) && ! function(cB) {
              return null !== Lc && (null !== Lc.itemSprite(Cc(cB)) || null !== Lc.model(cB))
            }(uc)) return {
            kind: "model",
            url: Oc
          };
          if ("Gun" === qB) return {
            kind: "gun",
            url: Oc
          };
          if (void 0 !== Pc && "GrayscaleArmour" === pc.itemTypeOf(Pc) || Object.hasOwn(Vc.e, uc)) {
            var Tc;
            const Bc = null !== (Tc = (0, Vc.f)(cB)) && void 0 !== Tc ? Tc : (0, Vc.f)(uc);
            if (Bc) return {
              kind: "item",
              url: Oc,
              tint: Bc
            }
          }
          return {
            kind: "item",
            url: Oc
          }
        },
        hasIcon: function(cB) {
          return void 0 !== Dc(cB) || (0, Ic.j)(cB) || cB.startsWith(Ic.e)
        },
        isItemName: function(cB) {
          return void 0 !== Dc(cB)
        }
      }
  },
  38690: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      attachPlayGameSources: () => Zn,
      playGameSources: () => bV
    });
    var Vc = nc(1566),
      Ic = nc(38696),
      rB = nc(3828),
      uc = nc(38598),
      sc = nc(38701),
      Mc = nc(37818),
      Pc = nc(35),
      qB = nc(3846),
      Oc = nc(3838),
      Tc = nc(38629),
      fc = nc(38659),
      mB = nc(38709),
      ec = nc(38642);
    (0, ec.l)(qB.Nb.Chat, (cB => {
      if (cB.payloadKind !== Oc.Mb.Msgpack) return;
      const Bc = function(cB) {
        if (null === cB || "object" !== typeof cB || !("content" in cB)) return null;
        const {
          chatMsgId: Bc,
          content: nc,
          chatterEId: Vc
        } = cB;
        return {
          serverChatMsgId: null !== Bc && void 0 !== Bc ? Bc : void 0,
          content: nc,
          chatterEId: void 0 === Vc || null === Vc ? void 0 : String(Vc)
        }
      }((0, Tc.c)(cB.payload));
      null !== Bc && Pc.i.Vu("chat", Bc, !0)
    }));
    const tB = {
        chatReceived: (0, Mc.i)((function(cB) {
          var Bc, nc, Vc;
          return {
            id: cB,
            name: null !== (Bc = mB.g.getName(cB)) && void 0 !== Bc ? Bc : null,
            local: (0, fc.d)() === cB,
            profileEffect: null !== (nc = null === (Vc = (0, mB.j)(cB)) || void 0 === Vc ? void 0 : Vc.profileEffect) && void 0 !== nc ? nc : null
          }
        }))
      },
      Sc = {
        sendChatMessage(cB) {
          var Bc;
          let {
            Uu: nc,
            channelName: Vc
          } = cB;
          null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.clientApi.sendChat(nc, Vc)
        }
      };
    var yB = nc(174),
      zB = nc(1594),
      pc = nc(38582),
      hc = nc(37812);
    const aB = [0, 0, 0],
      lc = {
        codeBlockClickable(cB) {
          var Bc;
          const nc = (0, uc.e)();
          if (null === nc || void 0 === nc || !nc.isSessionLive) return !1;
          const Vc = nc.api;
          if (0 !== (pc.v.playerFlags(Vc.apiView, 0) & pc.vd.Crouching)) return !1;
          const Ic = Vc.queries.directorEntity(Vc.localId) >= pc.lb.BYTES ? Vc.memoryData(Vc.scratch(), pc.lb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Ic) return !1;
          for (let rB = 0; rB < 3; rB++) aB[rB] = pc.lb.feet(Ic, 0, rB);
          return aB[1] += pc.lb.eyeHeight(Ic, 0), (0, hc.b)(aB, cB, null !== (Bc = zB.d.get("blockReach")) && void 0 !== Bc ? Bc : yB.e.JY)
        }
      },
      Yc = {
        clickCodeBlock(cB) {
          var Bc;
          null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.clickCodeBlock(cB)
        }
      };
    var Lc = nc(38607),
      gB = nc(38718),
      Uc = nc(867),
      bB = nc(37528),
      Zc = nc(3823),
      Qc = nc(38623),
      Cc = nc(38601),
      vB = nc(38626);

    function Dc(cB) {
      if (null === cB) return null;
      const Bc = [];
      for (const nc of cB) {
        const cB = Object.keys(nc)[0];
        if ("yN" === cB) {
          const {
            str: cB,
            style: Vc,
            clickableUrl: Ic
          } = nc.yN, rB = Object.keys(cB)[0], uc = cB[rB];
          "string" !== rB && "styledEntityName" !== rB && "styledTranslatedText" !== rB || Bc.push({
            str: uc,
            style: Vc,
            clickableUrl: Ic
          })
        } else Bc.push(nc[cB])
      }
      return Bc
    }
    const Nc = {
      screenPos(cB) {
        var Bc, nc;
        return null !== (Bc = null === (nc = (0, uc.e)()) || void 0 === nc ? void 0 : nc.renderFrame.projectWorldPosToScreenPos(cB)) && void 0 !== Bc ? Bc : {
          x: 0,
          y: 0
        }
      }
    };
    let Ec = !1;

    function oc() {
      Ec || (Ec = !0, (0, ec.l)(qB.Nb.ProgressBarUpdate, (cB => {
        const Bc = (0, vB.i)(cB);
        (0, vB.d)(Bc) && Pc.i.Vu("progressBarUpdate", Bc, !0)
      })), (0, ec.l)(Qc.B, (cB => {
        const Bc = (0, vB.f)(Qc.B, cB);
        Bc && Pc.i.Vu("middleScreenBarInitiate", {
          duration: Bc.I3,
          U3: Bc.U3,
          horizBarRemOffset: Bc.o3
        }, !0)
      })), (0, ec.l)(qB.Nb.RemoveMiddleScreenBar, (() => {
        Pc.i.Vu("middleScreenBarRemove")
      })), (0, ec.l)(Qc.ib, (cB => {
        const Bc = (0, vB.f)(Qc.ib, cB);
        if (Bc) {
          var nc;
          const cB = Bc.ZN ? null === (nc = (0, uc.e)()) || void 0 === nc ? void 0 : nc.renderFrame.projectDirectionToScreenPos(Bc.ZN) : void 0;
          Pc.i.Vu("sendHitmarker", {
            y_: Bc.y_,
            screenPos: cB
          }, !0)
        }
      })), (0, ec.l)(Qc.nb, (cB => {
        const Bc = (0, vB.f)(Qc.nb, cB);
        if (Bc) {
          const {
            id: cB,
            position: nc,
            style: Vc,
            text: Ic,
            l_: rB
          } = Bc;
          Pc.i.Vu("setDirectionArrow", {
            id: cB,
            position: nc,
            style: Vc,
            text: Dc(Ic),
            l_: rB
          }, !0)
        }
      })), (0, ec.l)(Qc.i, (cB => {
        const Bc = (0, vB.f)(Qc.i, cB);
        Bc && Pc.i.Vu("clearDirectionArrow", {
          id: Bc.id
        }, !0)
      })), (0, ec.l)(Qc.s, (cB => {
        const Bc = (0, vB.f)(Qc.s, cB);
        Bc && Pc.i.Vu("flyingMiddleMessage", {
          content: Dc(Bc.W8),
          K8: Bc.K8,
          Z2: Bc.Z2
        }, !0)
      })), (0, ec.l)(qB.Nb.WorldVariation, (cB => {
        const Bc = (0, vB.i)(cB);
        if ("string" === typeof Bc) {
          const cB = Bc === Uc.f ? null : {
            message: `Currently loaded as variation: ${Bc}`,
            type: "Warning"
          };
          Pc.i.Vu("showPermanentBottomMessage", cB, !0)
        }
      })), (0, ec.l)(Qc.O, (cB => {
        const Bc = (0, vB.f)(Qc.O, cB);
        Bc && function(cB, Bc) {
          const {
            type: nc,
            params: Vc
          } = (0, bB.f)(Bc), Ic = {
            ...Vc
          };
          for (const rB of bB.e) Ic[rB] && (Ic[rB] = Dc(Ic[rB]));
          Zc.e.queueQTE(cB, nc, Ic).getResult().then((Bc => {
            var nc;
            "boolean" === typeof Bc && (null === (nc = (0, uc.e)()) || void 0 === nc || nc.send(Cc.e.QteResponse, {
              qteId: cB,
              qteResponse: Bc
            }))
          }))
        }(Bc.id, Bc.Ix)
      })), (0, ec.l)(Qc.$, (cB => {
        const Bc = (0, vB.f)(Qc.$, cB);
        "number" === typeof Bc && Zc.e.cancelQTE(Bc)
      })), (0, ec.i)((() => {
        Zc.e.reset(), Pc.i.Vu("showPermanentBottomMessage", null, !0)
      })), (0, ec.l)(qB.Nb.EditItemCraftingRecipes, (cB => {
        const Bc = (0, vB.i)(cB);
        (0, vB.d)(Bc) && Pc.i.Vu("craftingRecipesEdited", {
          itemName: Bc.craftingRecipeItemName,
          recipesForItem: Bc.recipesForItem
        })
      })), (0, ec.l)(Qc.X, (cB => {
        const Bc = (0, vB.f)(Qc.X, cB);
        Bc && Pc.i.Vu("craftingRecipesEdited", {
          itemName: Bc.b_,
          recipesForItem: []
        })
      })))
    }
    var Wc = nc(37617);
    let wc = !1,
      kB = !1;

    function Xc() {
      const cB = (0, uc.e)();
      if (null === cB || void 0 === cB || !cB.isSessionLive) return void(wc = !1);
      const Bc = 0 !== (pc.v.playerFlags(cB.api.apiView, 0) & pc.vd.FreeCam);
      Bc !== wc && (wc = Bc, (0, Wc.d)(Bc))
    }
    var Hc = nc(302),
      Fc = nc(35628),
      Jc = nc(1602);
    var jB = nc(38724),
      Rc = nc(38653);
    const iB = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let Kc = !1;
    class xB {
      constructor() {
        this.target = iB, this.Zr = pc.Sc, this.optionName = null, this.pickaxe = new Mc.b
      }
      read(cB) {
        var Bc, nc;
        const Vc = pc.v.targetBlockId(cB.api.apiView, 0);
        Vc !== this.Zr && (this.Zr = Vc, this.optionName = Vc === pc.Sc ? null : `${cB.tables.getMetaInfo(Vc).rootName}CrosshairText`);
        const Ic = null === this.optionName ? null : null !== (Bc = cB.tables.getClientOption(this.optionName)) && void 0 !== Bc ? Bc : null;
        this.pickaxe.update(function(cB, Bc) {
          var nc, Vc, Ic;
          if (0 === (pc.v.playerFlags(cB.api.apiView, 0) & pc.vd.Breaking) || Bc === pc.Sc || 0 === Bc) return null;
          const {
            tables: rB
          } = cB;
          if (!0 === rB.getClientOption("creative")) return null;
          const uc = rB.nameOfId(Bc),
            sc = null === (nc = cB.items.XB()) || void 0 === nc ? void 0 : nc.name,
            Mc = null !== (Vc = rB.getItemStat(uc, "harvestLevel")) && void 0 !== Vc ? Vc : 0;
          return (0, Hc.ec)({
            blockHarvestType: rB.getDefaultItemStat(uc, "harvestType"),
            blockHarvestLevel: rB.getDefaultItemStat(uc, "harvestLevel"),
            harvestLevel: Mc,
            heldToolType: void 0 === sc ? void 0 : rB.getDefaultItemStat(sc, "harvests"),
            heldToolLevel: void 0 === sc ? void 0 : rB.getDefaultItemStat(sc, "level")
          }) && null !== (Ic = Fc.p[Mc]) && void 0 !== Ic ? Ic : null
        }(cB, Vc)), cB.watchPromptPick(Kc);
        const rB = cB.promptEntity,
          uc = null === rB ? null : {
            label: null !== (nc = (0, jB.d)(rB, "interactionPrompt")) && void 0 !== nc ? nc : null
          };
        return this.target = (0, Jc.q)(this.target, {
          interactPrompt: uc,
          blockText: Ic,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let dc = null;
    const Ac = {
      current: () => {
        var cB, Bc;
        return null !== (cB = null === (Bc = dc) || void 0 === Bc ? void 0 : Bc.target) && void 0 !== cB ? cB : iB
      },
      watch: cB => {
        const Bc = new xB;
        dc = Bc;
        const nc = (0, fc.g)((nc => {
          let Vc = Bc.read(nc);
          cB(Vc);
          const Ic = (0, rB.v)((() => {
            const Ic = Bc.read(nc);
            Ic !== Vc && (Vc = Ic, cB(Ic))
          }));
          return () => {
            Ic(), nc.watchPromptPick(!1)
          }
        }));
        return () => {
          nc(), dc === Bc && (dc = null)
        }
      }
    };
    let Gc = 0,
      cn = 0;
    const BB = {
        health: Mc.q,
        aura: Mc.f,
        hotbar: Rc.c.states.hotbar,
        heldItemAim: Rc.c.states.heldItemAim,
        crouching: (0, fc.b)((cB => function(cB) {
          const Bc = () => 0 !== (pc.v.playerFlags(cB.apiView, 0) & pc.vd.Crouching);
          return {
            current: Bc,
            watch(cB) {
              let nc = Bc();
              return (0, rB.r)((() => {
                const Vc = Bc();
                Vc !== nc && (nc = Vc, cB(Vc))
              }))
            }
          }
        }(cB.api).current), !1, (cB => (0, rB.r)(cB))),
        flight: (0, fc.b)((cB => () => function(cB) {
          const Bc = pc.v.playerFlags(cB.apiView, 0);
          return (0, Mc.m)(0 !== (Bc & pc.vd.CanFly), 0 !== (Bc & pc.vd.Flying))
        }(cB.api)), (0, Mc.m)(!1, !1), (cB => (0, rB.r)(cB))),
        crosshairTarget: Ac
      },
      nB = {
        hotbarSlotRequested: Rc.c.events.hotbarSlotRequested,
        hotbarScrolled: Rc.c.events.hotbarScrolled,
        numberKeyPressed: Rc.c.events.numberKeyPressed,
        shotDamageToShow: (0, Mc.s)((cB => !0 === (0, jB.d)(cB, "showDamageAmounts")))
      },
      VB = {
        selectHotbarSlot: Rc.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: cB => {
          Kc = "off" !== cB
        }
      },
      IB = {
        momentumFrac: function() {
          var cB, Bc, nc;
          const Vc = (0, uc.e)(),
            Ic = performance.now(),
            rB = null === Vc || void 0 === Vc || null === (cB = Vc.items.XB()) || void 0 === cB || null === (Bc = cB.attributes) || void 0 === Bc || null === (nc = Bc.customAttributes) || void 0 === nc ? void 0 : nc.enchantments;
          return Gc = null !== Vc && null !== rB && void 0 !== rB && rB.Momentum ? 0 !== (pc.v.playerFlags(Vc.api.apiView, 0) & pc.vd.Breaking) ? Math.max(0, pc.v.momentumFrac(Vc.api.apiView, 0)) : Math.max(0, Gc - (Ic - cn) / 1500) : 0, cn = Ic, Gc
        }
      };
    var rn = nc(38590),
      uB = nc(1108),
      sB = nc(27),
      MB = nc(35136),
      PB = nc(7702),
      qn = nc(1464),
      OB = nc(1927),
      TB = nc(3855);
    let fB = !1;

    function mn(cB) {
      fB = cB
    }

    function eB() {
      "inGame" !== sB.d.get("gameState") || (0, qn.s)() || Pc.i.Vu("ctrlCrouchWithoutFullscreen")
    }
    let tn = !1;
    const SB = {
        OpenEmoteWheel: () => {
          mn(!0), tn = !0, queueMicrotask((() => {
            tn && (tn = !1, Pc.i.Vu("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Pc.i.Vu("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, MB.b)() || Pc.i.Vu("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, MB.b)() || Pc.i.Vu("XKeyPressed")
        },
        CtrlCrouch: eB,
        "primary-fire": () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      yn = {
        OpenEmoteWheel: () => {
          mn(!1), tn ? (tn = !1, (0, PB.b)() || Pc.i.Vu("requestEmoteWheelHoldOpen")) : Pc.i.Vu("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: eB,
        "primary-fire": () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Pc.i.Vu("mouseState", {
            vR: uB.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let zn = !1;

    function pB() {
      zn || (zn = !0, (0, TB.j)((cB => {
        if ((0, Ic.c)()) return;
        const Bc = (0, TB.f)(cB) ? "primary-fire" : cB.action;
        var nc;
        if (cB.down) {
          if (0 === (cB.flags & OB.d.Synthetic)) {
            var Vc;
            null === (Vc = SB[Bc]) || void 0 === Vc || Vc.call(SB)
          }
        } else null === (nc = yn[Bc]) || void 0 === nc || nc.call(yn)
      })))
    }
    var hB = nc(244),
      an = nc(107),
      lB = nc(51),
      YB = nc(38733),
      LB = nc(1177),
      gn = nc(37494);
    let UB = !1;
    const bn = {
      sendCodeCollab(cB) {
        var Bc;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.CodeCollab, (0, Cc.m)(cB), (0, gn.f)(cB))
      }
    };
    let ZB = null,
      QB = !1,
      CB = null;

    function vn() {
      return "inGame" === sB.d.get("gameState") && !(0, MB.b)()
    }
    const DB = {
        OpenInventory: cB => {
          (0, qn.z)(cB, "inventory", (0, rn.m)())
        },
        OpenShop: cB => {
          ZB && vn() && (0, qn.w)(cB, hB.i.SHOP, !ZB.shopIsEmpty(zB.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: cB => {
          vn() && (0, qn.w)(cB, hB.i.LOBBY_LEADERBOARD, !!zB.d.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: cB => {
          var Bc;
          const nc = null === (Bc = ZB) || void 0 === Bc ? void 0 : Bc.getClientGameMapKey();
          nc ? (0, qn.C)(cB, !0, nc) : (0, qn.z)(cB, "retentionFeatures", !(!zB.d.get("_tasks") && !zB.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: cB => {
          (0, qn.z)(cB, "inviteLink", an.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: cB => {
          vn() && function(cB) {
            var Bc;
            const nc = (0, uc.e)(),
              Vc = null !== nc && void 0 !== nc && nc.isSessionLive ? nc.api : null,
              Ic = Vc ? Vc.rC(Vc.localId) : null,
              rB = null !== (Bc = null === Ic || void 0 === Ic ? void 0 : Ic.map((cB => Math.floor(cB)))) && void 0 !== Bc ? Bc : null;
            (0, qn.C)(cB, null !== rB && (0, gn.d)((0, LB.d)()), (() => {
              Pc.i.Vu("EditLobbyCode", rB)
            }))
          }(cB)
        },
        HideUi: () => {
          Pc.i.Vu("showUi", !1)
        }
      },
      NB = {
        HideUi: () => {
          Pc.i.Vu("showUi", !0)
        }
      };

    function EB() {
      QB || (QB = !0, nc.e(143).then((() => nc(40556))).then((cB => {
        ZB = cB
      }), (cB => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", cB)
      })), (0, YB.A)((cB => {
        cB || !(0, YB.i)() || (0, an.isMobile)() || !lB.h.getItem("disableFullscreen") || (0, qn.p)() || sB.d.set({
          openEverythingMenuName: hB.i.SETTINGS
        })
      })), (0, TB.j)((cB => {
        let {
          action: Bc,
          down: nc,
          press: Vc
        } = cB;
        var rB, uc;
        (0, Ic.c)() || (nc ? null === (rB = DB[Bc]) || void 0 === rB || rB.call(DB, function(cB) {
          var Bc;
          if (0 === cB || (null === (Bc = CB) || void 0 === Bc ? void 0 : Bc.press) !== cB) {
            const Bc = {
              press: cB,
              event: new Event("inputAction")
            };
            CB = Bc, queueMicrotask((() => {
              CB === Bc && (CB = null)
            }))
          }
          return CB.event
        }(Vc)) : null === (uc = NB[Bc]) || void 0 === uc || uc.call(NB))
      })))
    }
    var oB = nc(37463),
      WB = nc(37479),
      wB = nc(37470);
    const kn = {
      completeTask(cB) {
        var Bc;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.CompleteTask, (0, Cc.n)(cB))
      },
      setServerCookie(cB) {
        var Bc;
        let {
          key: nc,
          value: Vc
        } = cB;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.GeneralCookieSet, (0, Cc.s)({
          SF: nc,
          yJ: Vc
        }))
      },
      answerUiRequest(cB) {
        var Bc;
        let {
          id: nc,
          HZ: Vc
        } = cB;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.UiRequestResp, (0, Cc.U)({
          Qv: nc,
          Dv: Vc,
          Fv: 5
        }))
      },
      chooseRewardedAd(cB) {
        var Bc;
        let {
          id: nc,
          HZ: Vc
        } = cB;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.UiRequestResponded, (0, Cc.S)({
          id: nc,
          HZ: Vc
        }))
      },
      requestLeaderboard(cB) {
        var Bc;
        let {
          category: nc,
          timeframe: Vc,
          seeTop: Ic
        } = cB;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.LeaderboardRequest, {
          category: nc,
          timeframe: Vc,
          seeTop: Ic
        })
      }
    };
    let XB = !1;
    const HB = yB.e.EY / 2,
      FB = [HB, -HB, -HB, -HB, HB, HB, -HB, HB],
      JB = [0, 0, 0];

    function jn(cB, Bc, nc) {
      for (let Vc = 0; Vc < cB.length; Vc += 2)
        if (cB[Vc] === Bc && cB[Vc + 1] === nc) return !0;
      return !1
    }
    const RB = {
      blocksStandingOn: function() {
        const cB = (0, uc.e)();
        if (null === cB) return [];
        const {
          api: Bc,
          chunks: nc,
          tables: Vc
        } = cB;
        if (!Bc.readPosition(Bc.localId, JB)) return [];
        const [Ic, rB, sc] = JB, Mc = Math.ceil(rB) - 1, Pc = [], qB = [];
        for (let uc = 0; uc < FB.length; uc += 2) {
          const cB = Ic + FB[uc],
            Bc = sc + FB[uc + 1];
          if (Number.isInteger(cB) || Number.isInteger(Bc)) continue;
          const rB = Math.floor(cB),
            Oc = Math.floor(Bc);
          if (jn(qB, rB, Oc)) continue;
          const Tc = nc.Zr(rB, Mc, Oc);
          Vc.isSolidBlockId(Tc) && (qB.push(rB, Oc), Pc.push(Vc.nameOfId(Tc)))
        }
        return Pc
      }
    };
    var KB = nc(35554),
      xn = nc(37554),
      dB = nc(1194),
      AB = nc(38666);
    const GB = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      cV = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Bn() {
      const cB = new Set;
      return {
        add: Bc => (cB.add(Bc), () => {
          cB.delete(Bc)
        }),
        fire() {
          for (const Bc of cB) Bc()
        }
      }
    }
    const nn = Object.freeze([]);

    function Vn(cB, Bc) {
      let nc, {
        rereads: Vc,
        followLocalId: Ic
      } = Bc;
      const uc = () => (nc = (0, Jc.q)(nc, cB()), nc);
      return {
        current: uc,
        watch(cB) {
          const Bc = (0, mB.e)((Bc => {
            Vc(Bc) && cB(uc())
          }));
          if (!Ic) return Bc;
          let nc = (0, fc.d)();
          const sc = (0, rB.v)((() => {
            const Bc = (0, fc.d)();
            Bc !== nc && (nc = Bc, cB(uc()))
          }));
          return () => {
            Bc(), sc()
          }
        }
      }
    }
    const In = {
        players: Vn((function() {
          const cB = mB.g.ids(),
            Bc = {};
          for (const rB of cB) {
            var nc, Vc, Ic;
            Bc[rB] = {
              name: null !== (nc = mB.g.getName(rB)) && void 0 !== nc ? nc : null,
              ranks: null !== (Vc = mB.g.getSetting(rB, "ranks")) && void 0 !== Vc ? Vc : nn,
              cosmetics: null !== (Ic = (0, mB.j)(rB)) && void 0 !== Ic ? Ic : null
            }
          }
          return {
            ids: cB,
            byId: Bc,
            localId: (0, fc.d)()
          }
        }), {
          rereads: cB => "roster" !== cB.kind || cB.members || cB.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Vn((function() {
          const cB = {};
          for (const Ic of mB.g.ids()) {
            var Bc, nc, Vc;
            cB[Ic] = {
              colour: null !== (Bc = mB.g.getSetting(Ic, "colorInLobbyLeaderboard")) && void 0 !== Bc ? Bc : null,
              values: null !== (nc = mB.g.getSetting(Ic, "lobbyLeaderboardValues")) && void 0 !== nc ? nc : null,
              tags: null !== (Vc = mB.g.getSetting(Ic, "lobbyLeaderboardTags")) && void 0 !== Vc ? Vc : null
            }
          }
          return cB
        }), {
          rereads: function(cB) {
            if ("roster" !== cB.kind) return "reset" === cB.kind;
            const {
              members: Bc,
              settings: nc
            } = cB;
            return Bc || nc.has("colorInLobbyLeaderboard") || nc.has("lobbyLeaderboardValues") || nc.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      rV = {
        cosmeticsUpdated: {
          watch: cB => (0, mB.e)((Bc => {
            if ("cosmetics" !== Bc.kind) return;
            const nc = (0, fc.d)();
            cB(Bc.updates.map((cB => {
              let {
                A3: Bc,
                RZ: Vc,
                cC: Ic
              } = cB;
              return {
                local: Bc === nc,
                RZ: Vc,
                cC: Ic
              }
            })))
          }))
        }
      };
    var un = nc(2230),
      sn = nc(1495),
      Mn = nc(946),
      Pn = nc(38738);
    let qV = !1,
      On = null;
    const Tn = {
      setShopOpen(cB) {
        var Bc;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.ShopMenuChanged, (0, Cc.K)(cB))
      },
      buyShopItem(cB) {
        var Bc;
        let {
          categoryKey: nc,
          itemKey: Vc,
          userInput: Ic
        } = cB;
        null === (Bc = (0, uc.e)()) || void 0 === Bc || Bc.send(Cc.e.ItemBought, {
          categoryKey: nc,
          itemKey: Vc,
          shopVersion: zB.d.get("_shopVersion"),
          userInput: Ic
        })
      }
    };
    let fn = !1;
    var mV = nc(3866);
    const en = OB.x.LookFrozen | OB.x.ClicksSuppressed;

    function tV(cB, Bc) {
      var nc;
      null !== (nc = (0, uc.e)()) && void 0 !== nc && nc.send(cB, Bc) || console.warn(`[bloxd-wasm-client] message ${cB} not sent: no live game or the core's command ring is full`)
    }(0, ec.l)(Qc.ob, (cB => {
      const Bc = (0, vB.f)(Qc.ob, cB);
      void 0 !== Bc && Pc.i.Vu("setDiscordReportKey", Bc)
    }));
    const Sn = {
      ignorePlayer(cB) {
        tV(Cc.e.IgnoreUser, (0, Cc.v)({
          EX: cB
        }))
      },
      reportPlayer(cB) {
        let {
          playerId: Bc,
          chatMsgId: nc,
          SV: Vc,
          details: Ic
        } = cB;
        tV(Cc.e.UserReport, (0, Cc.bb)({
          VJ: Bc,
          MJ: nc,
          SV: Vc,
          ND: Ic
        }))
      },
      reportWorldCodeChat(cB) {
        let {
          chatMsgId: Bc,
          SV: nc,
          details: Vc
        } = cB;
        tV(Cc.e.UserReport, (0, Cc.bb)({
          VJ: "",
          MJ: Bc,
          SV: nc,
          ND: Vc
        }))
      },
      requestDiscordReportKey(cB) {
        tV(Cc.e.ReqDiscordReportKey, (0, Cc.F)(cB))
      },
      reportLobbyOrGame(cB) {
        let {
          target: Bc,
          SV: nc,
          details: Vc
        } = cB;
        "customGame" === Bc ? tV(Cc.e.CustomGameReport, (0, Cc.q)({
          SV: nc,
          ND: Vc
        })) : tV(Cc.e.LobbyReport, (0, Cc.y)({
          SV: nc,
          ND: Vc
        }))
      },
      updateMyCosmetic(cB) {
        tV(Cc.e.UpdateMyCosmetic, (0, Cc.ab)(cB))
      },
      holdEmoteWheel(cB) {
        !cB || fB ? (0, mV.h)(en, cB ? en : 0) : Pc.i.Vu("requestEmoteWheelHoldRelease")
      }
    };
    var yV = nc(38740),
      zV = nc(1579),
      pn = nc(38742);

    function hn() {
      const cB = (0, uc.e)();
      return !0 === (null === cB || void 0 === cB ? void 0 : cB.isCoreRunning) ? function(cB) {
        if (cB.queries.drawCensus() < pc.sb.BYTES) return [];
        const Bc = cB.memoryData(cB.scratch(), pc.sb.BYTES, 4, "the draw census");
        if (null === Bc) return [];
        const nc = pc.sb.terrainOpaque(Bc, 0),
          Vc = pc.sb.terrainTransparent(Bc, 0),
          Ic = pc.sb.earthSky(Bc, 0),
          rB = pc.sb.skyMeshes(Bc, 0),
          uc = pc.sb.regular(Bc, 0),
          sc = pc.sb.thin(Bc, 0),
          Mc = pc.sb.line(Bc, 0),
          Pc = pc.sb.text(Bc, 0),
          qB = pc.sb.particles(Bc, 0);
        return [{
          label: "Drawn",
          value: `${nc+Vc+Ic+rB+uc+sc+Mc+Pc+qB}`
        }, {
          label: "Terrain",
          value: `${nc} opaque / ${Vc} transparent (${pc.sb.terrainPack(Bc,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${uc} / ${sc}`
        }, {
          label: "Text / Lines",
          value: `${Pc} / ${Mc}`
        }, {
          label: "Sky / Particles",
          value: `${Ic+rB} / ${qB}`
        }]
      }(cB.api) : []
    }
    var aV = nc(38746);
    var lnc = nc(556),
      Yn = nc(37835);

    function Ln(cB) {
      if (null === cB || void 0 === cB || !cB.isCoreRunning) return null;
      const {
        api: Bc,
        chunks: nc,
        items: Vc,
        tables: Ic
      } = cB;
      return {
        playerFeet() {
          const cB = Bc.rC(Bc.localId);
          return null !== cB && void 0 !== cB && cB.every(Number.isFinite) ? cB : null
        },
        chunkBlocks: cB => nc.isLoaded(cB[0], cB[1], cB[2]) ? (cB, Bc, Vc) => nc.Zr(cB, Bc, Vc) : null,
        blockName: cB => Ic.nameOfId(cB),
        inventory: () => ({
          slots: Vc.playerItems().map((cB => cB ? {
            name: cB.name,
            amount: cB.amount
          } : null)),
          heldSlot: Vc.selectedSlot
        }),
        nearby() {
          const nc = [];
          for (let Ic = 0; Ic < Bc.idStr.length; Ic++) {
            var Vc;
            const rB = Bc.idStr[Ic],
              uc = Bc.serverIds[Ic],
              sc = Bc.kinds[Ic];
            if (null === rB || Bc.isLocal(uc) || sc >>> pc.e !== pc.u.Lifeform) continue;
            const Mc = Bc.rC(uc),
              Pc = lnc.i[sc & pc.i];
            Mc && void 0 !== Pc && nc.push({
              kind: "Player" === Pc ? "player" : Pc,
              name: null !== (Vc = cB.clientApi.getEntityName(rB)) && void 0 !== Vc ? Vc : null,
              position: Mc
            })
          }
          return nc
        },
        droppedItems() {
          let cB = 0;
          for (let nc = 0; nc < Bc.idStr.length; nc++) null !== Bc.idStr[nc] && Bc.kinds[nc] >>> pc.e === pc.u.Item && cB++;
          return cB
        }
      }
    }
    const gV = {
        worldCodeAiChunk: cB => Promise.resolve((0, Yn.b)(Ln((0, uc.e)()), cB)),
        worldCodeAiGameState: () => Promise.resolve((0, Yn.d)(Ln((0, uc.e)())))
      },
      Un = function(cB) {
        const Bc = Bn(),
          Vc = Bn(),
          Ic = new Set,
          rB = new Set,
          uc = () => {
            var Bc, nc;
            return null !== (Bc = null === (nc = cB.runtime()) || void 0 === nc ? void 0 : nc.currentViewer) && void 0 !== Bc ? Bc : null
          };
        let sc = null,
          Mc = null;
        const qB = (cB, Bc) => ({
            current: cB,
            watch(nc) {
              let Vc = cB();
              return Bc.add((() => {
                const Bc = cB();
                Bc !== Vc && (Vc = Bc, nc(Bc))
              }))
            }
          }),
          Tc = cB => ({
            watch: Bc => (cB.add(Bc), () => {
              cB.delete(Bc)
            })
          }),
          fc = cB => {
            const Bc = uc(),
              nc = null === Bc || void 0 === Bc ? void 0 : Bc.view;
            Bc && nc && Bc.seek(Math.max(0, Math.min(nc.totalTicks - 1, nc.cn + cB * Oc.Mc)))
          },
          mB = {
            replay: qB((() => {
              var cB;
              const Bc = uc(),
                nc = null !== (cB = null === Bc || void 0 === Bc ? void 0 : Bc.view) && void 0 !== cB ? cB : null;
              return null === Bc || null === nc || nc.state === Oc.Ac.None ? (sc = null, null) : (sc = (0, Jc.q)(sc, {
                id: Bc.id,
                cn: nc.cn,
                totalTicks: nc.totalTicks,
                WBc: Oc.Mc,
                playing: nc.state === Oc.Ac.Playing,
                speed: nc.speed,
                cameraMode: nc.cameraMode,
                freecam: "freecam" === nc.cameraMode
              }), sc)
            }), Bc),
            replayEdits: qB((() => {
              var cB;
              const Bc = uc(),
                nc = null !== (cB = null === Bc || void 0 === Bc ? void 0 : Bc.view) && void 0 !== cB ? cB : null;
              return null === Bc || null === nc || nc.state === Oc.Ac.None ? (Mc = null, null) : (Mc = (0, Jc.q)(Mc, {
                cameraKeyframes: [...Bc.keyframes],
                playbackMark: nc.mark,
                fileName: Bc.fileName,
                unsavedChanges: Bc.unsavedChanges,
                suggestSaveAs: Bc.suggestSaveAs
              }), Mc)
            }), Bc),
            replayRecorder: qB((() => {
              var Bc, nc;
              return null !== (Bc = null === (nc = cB.runtime()) || void 0 === nc ? void 0 : nc.recorder.current) && void 0 !== Bc ? Bc : AB.c.states.replayRecorder.current()
            }), Vc),
            replayVideoExporting: {
              current: xn.c,
              watch: cB => (0, Pc.m)("replayViewer|videoExportChanged", (() => {
                cB((0, xn.c)())
              }))
            }
          },
          ec = {
            replayUiActionRequested: Tc(rB),
            replayViewerRequested: Tc(Ic)
          },
          tB = cB => {
            for (const Bc of Ic) Bc(cB)
          },
          Sc = () => {
            var Vc;
            !0 === (null === (Vc = uc()) || void 0 === Vc ? void 0 : Vc.isOpen) && Promise.all([nc.e(81), nc.e(56)]).then((() => nc(40565))).then((nc => {
              let {
                startWasmReplayVideoExport: Vc
              } = nc;
              return Vc({
                viewer: uc,
                canvas: () => {
                  var Bc, nc;
                  return null !== (Bc = null === (nc = cB.canvas) || void 0 === nc ? void 0 : nc.call(cB)) && void 0 !== Bc ? Bc : null
                },
                watchViewer: Bc.add,
                requestViewer: tB
              })
            }), (cB => {
              console.error("Couldn't load the video export", cB), dB.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((cB => {
              console.error("The video export failed", cB)
            }))
          },
          yB = {
            replayAction(cB) {
              if ((0, xn.c)()) return;
              const Bc = uc();
              switch (cB) {
                case "replaySkipBack":
                  fc(-1);
                  break;
                case "replaySkipForward":
                  fc(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Bc && void 0 !== Bc && Bc.view && Bc.setSpeed((0, KB.h)(Bc.view.speed, "replaySpeedUp" === cB ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Bc || void 0 === Bc || Bc.addKeyframe()
              }
            },
            setReplayPlaying(cB) {
              var Bc, nc;
              (0, xn.c)() || (cB ? null === (Bc = uc()) || void 0 === Bc || Bc.play() : null === (nc = uc()) || void 0 === nc || nc.pause())
            },
            seekReplay(cB) {
              var Bc;
              let {
                cn: nc,
                ignorePlaybackMark: Vc
              } = cB;
              null === (Bc = uc()) || void 0 === Bc || Bc.seek(nc, null !== Vc && void 0 !== Vc && Vc)
            },
            setReplayCameraMode(cB) {
              var Bc;
              null === (Bc = uc()) || void 0 === Bc || Bc.setCameraMode(cB)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(cB) {
              var Bc;
              null === (Bc = uc()) || void 0 === Bc || Bc.setKeyframe(cB)
            },
            moveReplayCameraKeyframe(cB) {
              var Bc;
              let {
                from: nc,
                to: Vc
              } = cB;
              null === (Bc = uc()) || void 0 === Bc || Bc.moveKeyframe(nc, Vc)
            },
            deleteReplayCameraKeyframes(cB) {
              var Bc;
              let {
                start: nc,
                end: Vc
              } = cB;
              null === (Bc = uc()) || void 0 === Bc || Bc.deleteKeyframes(nc, Vc)
            },
            setReplayPlaybackMark(cB) {
              var Bc;
              null === (Bc = uc()) || void 0 === Bc || Bc.setMark(cB)
            },
            cropReplay(cB) {
              var Bc, nc;
              let {
                start: Vc,
                end: Ic
              } = cB;
              return !(0, xn.c)() && (null !== (Bc = null === (nc = uc()) || void 0 === nc ? void 0 : nc.crop(Vc, Ic)) && void 0 !== Bc && Bc)
            },
            holdReplayForShaderPackFailure(cB) {
              const Bc = uc();
              Bc && (Bc.holdForShaderPackFailure(), function(cB) {
                Promise.all([nc.e(118), nc.e(125)]).then((() => nc(37643))).then((Bc => {
                  let {
                    shaderPackPage: nc
                  } = Bc;
                  nc.block(cB)
                })).catch((cB => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", cB)
                }))
              }(cB))
            },
            exportReplayVideo() {
              Sc()
            },
            toggleRecording() {
              var Bc;
              null === (Bc = cB.runtime()) || void 0 === Bc || Bc.recorder.toggleRecording()
            },
            saveClip() {
              var Bc;
              null === (Bc = cB.runtime()) || void 0 === Bc || Bc.recorder.saveClip()
            },
            setRecorderPrefs(Bc) {
              var nc;
              let {
                clipping: Vc,
                clipSeconds: Ic
              } = Bc;
              null === (nc = cB.runtime()) || void 0 === nc || nc.recorder.setPrefs(Vc, Ic)
            },
            setReplayViewerOpen(Bc) {
              var nc;
              (0, MB.e)(Bc) && (null === (nc = cB.runtime()) || void 0 === nc || nc.recorder.viewerShown(Bc))
            },
            recordFlyingMiddleText(Bc) {
              var nc;
              let {
                content: Vc,
                K8: Ic,
                angle: rB,
                Z2: uc
              } = Bc;
              null === (nc = cB.runtime()) || void 0 === nc || nc.recorder.recordFlyingText(JSON.stringify(Vc), Ic, rB, uc)
            },
            dragReplayCamera(Bc) {
              var nc;
              let {
                dx: Vc,
                dy: Ic
              } = Bc;
              null === (nc = cB.freecam()) || void 0 === nc || nc.drag(Vc, Ic)
            },
            moveReplayFreecam(Bc) {
              var nc;
              null === (nc = cB.freecam()) || void 0 === nc || nc.move(Bc)
            },
            holdReplayFreecamVertical(Bc) {
              var nc;
              let {
                action: Vc,
                XB: Ic
              } = Bc;
              null === (nc = cB.freecam()) || void 0 === nc || nc.holdVertical(Vc, Ic)
            }
          },
          zB = cB => {
            var Bc;
            const nc = uc(),
              Vc = null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.view) && void 0 !== Bc ? Bc : null;
            GB.has(cB) ? (cB => {
              for (const Bc of rB) Bc(cB)
            })(cB) : cV.has(cB) ? yB.replayAction(cB) : "replayPlayPause" === cB ? nc && Vc && Vc.state !== Oc.Ac.None && yB.setReplayPlaying(Vc.state !== Oc.Ac.Playing) : "replayChangeCameraMode" === cB ? null === nc || void 0 === nc || nc.cycleCameraMode() : "replayExit" === cB ? !0 === (null === nc || void 0 === nc ? void 0 : nc.inPlayback) && (0, LB.m)("/") : "replayExportVideo" === cB && Sc()
          };
        let pc = !1;
        return {
          states: mB,
          events: ec,
          commands: yB,
          lookups: {
            replayCamera() {
              var Bc, nc, Vc;
              return !0 !== (null === (Bc = uc()) || void 0 === Bc ? void 0 : Bc.isOpen) ? null : null !== (nc = null === (Vc = cB.cameraView) || void 0 === Vc ? void 0 : Vc.call(cB)) && void 0 !== nc ? nc : null
            },
            leaveGameReloadsPage() {
              var cB;
              return !0 === (null === (cB = uc()) || void 0 === cB ? void 0 : cB.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var cB;
              const nc = !0 === (null === (cB = uc()) || void 0 === cB ? void 0 : cB.inPlayback);
              nc !== pc && (pc = nc, Pc.i.Vu("connectedGameChanged")), Bc.fire()
            },
            recorderChanged: Vc.fire,
            keyDown: cB => {
              var Bc;
              switch (cB) {
                case "recordGame":
                  return void yB.toggleRecording();
                case "recordClip":
                  return void((0, MB.b)() || yB.saveClip())
              }(0, xn.c)() || ("replayViewerOpen" !== cB ? cB.startsWith("replay") && ((0, MB.b)() || !0 === (null === (Bc = uc()) || void 0 === Bc ? void 0 : Bc.inPlayback)) && zB(cB) : tB("toggle"))
            }
          }
        }
      }({
        runtime: Ic.k,
        cameraView: () => {
          var cB;
          const Bc = null === (cB = (0, uc.e)()) || void 0 === cB ? void 0 : cB.renderFrame;
          if (!Bc) return null;
          const [nc, Vc, Ic] = Bc.cameraPosition, [rB, sc, Mc] = Bc.cameraDirection;
          return {
            position: [nc, Vc, Ic],
            direction: [rB, sc, Mc]
          }
        },
        canvas: () => {
          var cB, Bc, nc;
          return null !== (cB = null === (Bc = (nc = (0, rB.M)()).canvas) || void 0 === Bc ? void 0 : Bc.call(nc)) && void 0 !== cB ? cB : null
        },
        freecam: Ic.h
      }),
      bV = {
        states: {
          ...BB,
          ...rn.k,
          ...Un.states,
          ...In
        },
        events: {
          ...nB,
          ...tB,
          ...rn.e,
          ...gB.c,
          ...yV.k,
          ...Un.events,
          ...rV,
          ...Lc.h
        },
        commands: {
          ...Yc,
          ...VB,
          ...Sc,
          ...rn.b,
          ...kn,
          ...Sn,
          ...Lc.g,
          ...bn,
          ...Un.commands,
          ...Tn
        },
        queries: {
          ...rn.g,
          ...gV
        },
        lookups: {
          ...IB,
          ...Nc,
          ...yV.m,
          ...Un.lookups,
          ...lc,
          ...RB
        }
      };

    function Zn() {
      (0, sc.e)(ec.o), (0, Ic.o)(Un.feed), (0, gB.d)(), XB || (XB = !0, (0, ec.l)(Qc.o, (cB => {
        const Bc = (0, vB.f)(Qc.o, cB);
        "string" === typeof Bc && Promise.resolve().then((() => nc(2819))).then((cB => {
          let {
            onCosmeticPackGranted: nc
          } = cB;
          nc(Bc)
        }))
      })), (0, ec.l)(Qc.mb, (cB => {
        const Bc = (0, vB.f)(Qc.mb, cB);
        "number" === typeof Bc && Pc.i.Vu("serverUpdating", Date.now() + Bc, !0)
      })), (0, ec.l)(Qc.N, (cB => {
        const Bc = (0, vB.f)(Qc.N, cB);
        if ((0, vB.d)(Bc)) {
          const {
            B7: cB,
            g6: nc
          } = Bc;
          (0, WB.e)({
            B7: "string" === typeof cB ? cB : null,
            g6: "string" === typeof nc ? nc : null
          })
        }
      })), (0, ec.l)(qB.Nb.NewUiRequest, (cB => {
        const Bc = (0, vB.i)(cB);
        (0, vB.d)(Bc) && "number" === typeof Bc.id && (0, vB.d)(Bc.clientParameters) && (0, wB.e)(Bc.id, Bc.clientParameters)
      })), (0, ec.l)(Qc.db, (cB => {
        const Bc = (0, vB.f)(Qc.db, cB);
        "number" === typeof Bc && (0, wB.h)(Bc)
      })), (0, ec.l)(qB.Nb.UiRequestPopup, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc) && "number" === typeof Bc.id && "string" === typeof Bc.text) {
          const cB = Bc.id;
          (0, wB.j)(cB, Bc.text, (Bc => {
            kn.answerUiRequest({
              id: cB,
              HZ: Bc
            })
          }))
        }
      })), (0, ec.l)(qB.Nb.TopRightHelper, (cB => {
        const Bc = (0, vB.i)(cB);
        void 0 !== Bc && Pc.i.Vu("TopRightHelper", Bc, !0)
      })), (0, ec.l)(qB.Nb.TaskProgress, (cB => {
        const Bc = (0, vB.i)(cB);
        (0, vB.d)(Bc) && "string" === typeof Bc.taskId && "number" === typeof Bc.progress && (0, oB.d)({
          taskId: Bc.taskId,
          progress: Bc.progress
        })
      }))), fn || (fn = !0, (0, ec.l)(Qc.w, (cB => {
        const Bc = (0, vB.f)(Qc.w, cB);
        (0, vB.d)(Bc) && Pc.i.Vu("showShopFromServer", {
          toggle: Bc.Z4,
          v_: Bc.v_
        }, !0)
      })), (0, ec.l)(qB.Nb.OverShopInfo, (cB => {
        const Bc = (0, vB.i)(cB);
        (0, vB.d)(Bc) && Pc.i.Vu("overShopInfo", Bc.info, !0)
      })), (0, ec.l)(qB.Nb.ShowShopTutorial, (() => {
        Pc.i.Vu("showShopTutorial", null, !0)
      }))), qV || (qV = !0, (0, ec.i)((() => {
        var cB;
        (0, un.F)(), null === (cB = On) || void 0 === cB || cB(), On = (0, ec.e)() ? (0, Mn.g)(ec.e) : null
      })), (0, ec.l)(qB.Nb.SetCookie, (cB => {
        const Bc = (0, vB.i)(cB),
          nc = (0, LB.d)().gameNameWithVariation;
        (0, vB.d)(Bc) && "string" === typeof Bc.key && null !== nc && (0, sn.setCookie)(nc, Bc.key, Bc.value)
      })), (0, ec.l)(qB.Nb.LeaveValues, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc) && "string" === typeof Bc.leaveEventType) {
          const {
            leaveEventType: cB,
            category: nc,
            subCategory: Vc,
            value: Ic
          } = Bc;
          (0, un.L)({
            leaveEventType: cB,
            category: nc,
            subCategory: Vc,
            value: Ic
          })
        }
      })), (0, ec.l)(qB.Nb.CustomAnalyticsEvent, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc) && "string" === typeof Bc.cat1) {
          const {
            cat1: cB,
            cat2: nc,
            cat3: Vc,
            value: Ic
          } = Bc;
          (0, un.w)({
            cat1: cB,
            cat2: nc,
            cat3: Vc,
            value: Ic
          })
        }
      })), (0, ec.l)(qB.Nb.ProgressionEvent, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc)) {
          const {
            type: cB,
            location1: nc,
            location2: Vc,
            location3: Ic,
            score: rB
          } = Bc;
          (0, un.C)({
            type: cB,
            location1: nc,
            location2: Vc,
            location3: Ic,
            score: rB
          })
        }
      })), (0, ec.l)(qB.Nb.ResourceEvent, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc)) {
          const {
            type: cB,
            resourceType: nc,
            amount: Vc,
            category: Ic,
            itemName: rB
          } = Bc;
          (0, un.D)({
            type: cB,
            resourceType: nc,
            amount: Vc,
            category: Ic,
            itemName: rB
          })
        }
      })), (0, ec.l)(qB.Nb.LeaderboardResponse, (cB => {
        const Bc = (0, vB.i)(cB);
        if ((0, vB.d)(Bc)) {
          const {
            category: cB,
            timeframe: nc,
            data: Vc
          } = Bc;
          Pc.i.Vu("leaderboardResponse", {
            category: cB,
            timeframe: nc,
            data: Vc
          })
        }
      })), (0, ec.l)(Qc.E, (cB => {
        const Bc = (0, vB.f)(Qc.E, cB);
        "string" === typeof Bc && (0, Pn.d)(cB.conn, Bc)
      })), (0, ec.l)(Qc.G, (cB => {
        const Bc = (0, vB.f)(Qc.G, cB);
        "string" === typeof Bc && console.error(`[logErrorToConsole]: ${Bc}`)
      }))), oc(), (0, yV.e)(), UB || (UB = !0, (0, ec.l)(Qc.l, (cB => {
        const Bc = (0, vB.f)(Qc.l, cB);
        void 0 !== Bc && (0, gn.i)(Bc)
      }))), EB(), pB(), kB || (kB = !0, (0, rB.r)(Xc)), Vc.gameBridge.attach(bV), (0, Vc.installPageSources)({
        commands: {
          ...Vc.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: pn.h
        },
        queries: aV.wasmIconQueries,
        lookups: {
          ...Vc.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...aV.wasmIconLookups,
          zC: pn.e,
          drawCallStats: hn
        }
      }), (0, zV.c)(), (0, aV.loadIcons)()
    }
  },
  38763: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      c: () => sc
    });
    var Vc = nc(38765);
    let Ic = null,
      rB = null;

    function uc() {
      return Ic ??= nc.e(51).then((() => nc(40586))).catch((cB => {
        throw Ic = null, cB
      })), Ic
    }

    function sc() {
      return rB ??= Promise.all([uc(), (0, Vc.i)()]).then((cB => {
        let [Bc] = cB;
        return Bc
      }), (cB => {
        throw rB = null, cB
      })), rB
    }
  },
  35651: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
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
  37528: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      f: () => Ic
    });
    const Vc = ["description", "label"];

    function Ic(cB) {
      const Bc = cB.type;
      return {
        type: Bc,
        params: cB[Bc]
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);