export const id = 43;
export const ids = [43];
export const modules = {
  38528: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB,
      g: () => pB,
      k: () => yB
    });
    const VB = 6e3;

    function yB(BB, TB) {
      return [Math.floor(BB[0] / TB) * TB, Math.floor(BB[1] / TB) * TB, Math.floor(BB[2] / TB) * TB]
    }

    function pB(BB) {
      const TB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
      return TB && TB.length >= 3 ? [Number(TB[0]), Number(TB[1]), Number(TB[2])] : null
    }

    function lB(BB, TB) {
      return BB === TB ? String(BB) : `${BB}-${TB}`
    }

    function JB(BB, TB, dB, VB) {
      const yB = [];
      let pB = new Map;
      for (let lB = BB[2]; lB < BB[2] + TB; lB++) {
        const JB = new Map;
        let YB = BB[0];
        for (; YB < BB[0] + TB;) {
          const yB = VB(YB, dB, lB);
          let gB = YB;
          for (; gB + 1 < BB[0] + TB && VB(gB + 1, dB, lB) === yB;) gB++;
          if (null !== yB) {
            const BB = `${YB} ${gB} ${yB}`,
              TB = pB.get(BB);
            TB ? (TB.z1 = lB, pB.delete(BB), JB.set(BB, TB)) : JB.set(BB, {
              x0: YB,
              x1: gB,
              z0: lB,
              z1: lB,
              name: yB
            })
          }
          YB = gB + 1
        }
        yB.push(...pB.values()), pB = JB
      }
      return yB.push(...pB.values()), yB.sort(((BB, TB) => BB.z0 - TB.z0 || BB.x0 - TB.x0)).map((BB => `x${lB(BB.x0,BB.x1)} z${lB(BB.z0,BB.z1)} ${BB.name}`))
    }

    function YB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VB;
      const YB = [BB[0] + TB - 1, BB[1] + TB - 1, BB[2] + TB - 1],
        gB = null !== yB && yB.every(((TB, dB) => Math.floor(TB) >= BB[dB] && Math.floor(TB) <= YB[dB])),
        oB = [`The chunk from ${BB.join(" ")} to ${YB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== yB && oB.push(`The player's feet are at ${yB.map(Math.floor).join(" ")}, ${gB?"in this chunk":"outside this chunk"}.`);
      const kB = [];
      for (let VB = BB[1]; VB <= YB[1]; VB++) {
        const yB = JB(BB, TB, VB, dB).join("; "),
          pB = kB[kB.length - 1];
        (null === pB || void 0 === pB ? void 0 : pB.boxes) === yB ? pB.to = VB : kB.push({
          from: VB,
          to: VB,
          boxes: yB
        })
      }
      const LB = kB.filter((BB => "" !== BB.boxes));
      0 === LB.length && oB.push("It is all air.");
      let OB = oB.join("\n").length;
      for (const VB of LB) {
        const BB = `y${lB(VB.from,VB.to)}: ${VB.boxes}`;
        if (OB += BB.length + 1, OB > pB) {
          oB.push(`Cut short: the layers from y${VB.from} up aren't shown, as there are too many blocks.`);
          break
        }
        oB.push(BB)
      }
      return oB.join("\n")
    }
  },
  8127: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB
    });
    var VB = dB(21);

    function yB() {
      return !VB.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35908: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      e: () => pB,
      h: () => yB
    });
    const VB = [.25, .5, 1, 2, 4, 8, 16];

    function yB(BB, TB) {
      const dB = VB;
      let yB = dB.indexOf(BB);
      return -1 === yB && (yB = dB.findIndex((TB => TB >= BB)), -1 === yB && (yB = dB.length - 1)), "up" === TB ? dB[Math.min(yB + 1, dB.length - 1)] : dB[Math.max(yB - 1, 0)]
    }

    function pB(BB) {
      return BB <= VB[0]
    }

    function lB(BB) {
      return BB >= VB[VB.length - 1]
    }
  },
  35497: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      g: () => pB
    });
    let VB = !1;

    function yB() {
      return VB
    }

    function pB(BB) {
      return VB !== BB && (VB = BB, !0)
    }
  },
  37912: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(24),
      yB = dB(1708);

    function pB(BB) {
      let {
        taskId: TB,
        progress: dB
      } = BB;
      const VB = yB.c.get("_tasks");
      null !== VB && void 0 !== VB && VB[TB] && yB.c.apply({
        _tasks: {
          ...VB,
          [TB]: {
            ...VB[TB],
            progress: dB
          }
        }
      })
    }
    VB.h.subscribe("clientTaskProgress", (BB => {
      pB(BB)
    }))
  },
  38504: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB,
      f: () => DB,
      j: () => gB,
      k: () => kB,
      m: () => YB,
      o: () => lB,
      s: () => oB,
      u: () => uB
    });
    var VB = dB(1708),
      yB = dB(24),
      pB = dB(1719);
    const lB = (0, pB.n)((function() {
        var BB, TB, dB, yB;
        return {
          health: null !== (BB = VB.c.get("_health")) && void 0 !== BB ? BB : null,
          maxHealth: null !== (TB = VB.c.get("_totalMaxHealth")) && void 0 !== TB ? TB : null,
          shield: null !== (dB = VB.c.get("_shield")) && void 0 !== dB ? dB : null,
          maxShield: null !== (yB = VB.c.get("maxShield")) && void 0 !== yB ? yB : null
        }
      }), [], (0, pB.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      JB = [{
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

    function YB(BB, TB) {
      return JB[(BB ? 2 : 0) + (TB ? 1 : 0)]
    }
    const gB = (0, pB.n)((function() {
      var BB;
      return null !== (BB = VB.c.get("_aura")) && void 0 !== BB ? BB : null
    }), [], (0, pB.j)("_aura"));

    function oB(BB) {
      return {
        watch: TB => (0, yB.i)("shotPlayer", (dB => {
          let {
            playerId: VB,
            damage: yB,
            wasCrit: pB,
            distance: lB
          } = dB;
          BB(VB) && TB({
            damage: yB,
            wasCrit: pB,
            distance: lB
          })
        }))
      }
    }

    function kB(BB) {
      return (0, pB.c)("chat", (TB => {
        let {
          serverChatMsgId: dB,
          content: VB,
          chatterEId: yB
        } = TB;
        return {
          serverChatMsgId: null !== dB && void 0 !== dB ? dB : null,
          content: VB,
          author: yB ? BB(yB) : null
        }
      }))
    }
    class LB {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const dB = this.shown;
        return BB !== this.needed && (this.needed = BB, this.neededSince = TB, null === BB && (this.shown = null)), this.shown !== this.needed && TB - this.neededSince > 200 && (this.shown = this.needed), this.shown !== dB
      }
    }

    function OB(BB) {
      return [{
        translationKey: `touchKeys:${BB}`
      }]
    }
    const DB = {
      open: OB("open"),
      close: OB("close"),
      milk: OB("milk"),
      shear: OB("shear"),
      tame: OB("tame"),
      feed: OB("feed"),
      ride: OB("ride")
    };

    function uB(BB) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: BB
      }]
    }
  },
  39470: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      f: () => lB
    });
    var VB = dB(2764);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= dB.e(193).then((() => dB(35362))).then((BB => {
        let {
          ITEM_SPRITES: TB,
          ITEM_SPRITES_WITHOUT_FILE: dB,
          ITEM_FILES_WITHOUT_SPRITE: pB
        } = BB;
        yB = function(BB, TB, dB) {
          const yB = new Set,
            pB = (0, VB.z)(TB);
          let lB = 0;
          for (const [VB, JB] of BB.entries()) VB === pB[lB] ? lB++ : yB.add(JB);
          if ("" !== dB)
            for (const JB of dB.split(VB.v)) yB.add(JB);
          return yB
        }(TB.split(VB.v), dB, pB)
      }), (BB => {
        throw pB = null, BB
      })), pB
    }

    function JB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = yB) || void 0 === dB ? void 0 : dB.has(BB)) && void 0 !== TB && TB
    }
  },
  38502: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      return Math.hypot(BB[0] - TB[0], BB[1] - TB[1], BB[2] - TB[2]) < dB + .5
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  37930: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB
    });
    var VB = dB(1105),
      yB = dB(1214),
      pB = dB(21),
      lB = dB(1201),
      JB = dB(1209),
      YB = dB(1407),
      gB = dB(35479);

    function oB(BB) {
      let {
        DB: TB,
        uB: dB
      } = BB;
      const oB = null !== TB && void 0 !== TB ? TB : (0, JB.e)().gameNameWithVariation;
      (0, VB.M)(oB) && ((0, gB.i)(), (0, lB.cb)((() => {
        console.log("Received matchmaking order from game server to game", TB), (0, pB.i)("inGameReplay"), (0, YB.navigatePreserveSearch)((0, yB.b)(oB, null !== dB && void 0 !== dB ? dB : void 0))
      }), "video_start"))
    }
  },
  38113: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(24),
      yB = dB(1738);

    function pB(BB) {
      var TB, dB;
      const pB = (0, yB.k)(null !== (TB = null === (dB = yB.r.toggleFreeCam) || void 0 === dB ? void 0 : dB[0]) && void 0 !== TB ? TB : null);
      VB.h.yH("showBottomMessage", {
        message: `Free Camera ${BB?"Enabled":"Disabled"}${pB?` - Press ${pB} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37918: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      c: () => lB,
      g: () => JB,
      i: () => gB
    });
    var VB = dB(24),
      yB = dB(1235);
    const pB = new Map;

    function lB(BB, TB) {
      VB.h.yH("newUiRequest", {
        id: BB,
        clientParameters: TB
      }, !0)
    }

    function JB(BB) {
      VB.h.yH("removeUiRequest", BB, !0);
      const TB = pB.get(BB);
      TB && (TB.tearDownNotification(), pB.delete(BB))
    }

    function YB() {
      VB.h.yH("clearUiRequests");
      for (const BB of pB.values()) BB.tearDownNotification();
      pB.clear()
    }

    function gB(BB, TB, dB) {
      const VB = yB.NotificationProvider.showPromptPopup({
        title: TB,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      pB.set(BB, VB), VB.getResult().then((TB => {
        pB.delete(BB), "notificationTornDown" !== TB && dB(TB)
      }))
    }
  },
  38521: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      h: () => LB
    });
    var VB = dB(184),
      yB = dB(38528);
    const pB = 20;

    function lB(BB) {
      return BB.map(Math.floor).join(" ")
    }

    function JB(BB) {
      return null === BB.amount || 1 === BB.amount ? BB.name : `${BB.amount} ${BB.name}`
    }
    var YB = dB(38530),
      gB = dB(1708),
      oB = dB(1209);

    function kB(BB, TB) {
      if (!BB) return YB.c;
      const dB = BB.playerFeet();
      if (!dB) return "The player isn't in the world yet, so no blocks can be seen.";
      const pB = VB.c.UD,
        lB = (0, yB.k)(null !== TB && void 0 !== TB ? TB : dB, pB),
        JB = BB.chunkBlocks(lB);
      return JB ? (0, yB.d)(lB, pB, ((TB, dB, VB) => {
        const yB = JB(TB, dB, VB);
        return 0 === yB ? null : BB.blockName(yB).split("|")[0]
      }), dB) : `The chunk from ${lB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${dB.map(Math.floor).join(" ")}.`
    }

    function LB(BB) {
      var TB, dB, VB;
      if (!BB) return YB.g;
      const yB = BB.playerFeet();
      if (!yB) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: kB,
        heldSlot: LB
      } = BB.inventory();
      return function(BB) {
        const TB = [];
        null !== BB.game && TB.push(`Game: ${BB.game}.`);
        const dB = null === BB.health ? "" : `, health ${Math.round(BB.health)}${null===BB.maxHealth?"":` of ${Math.round(BB.maxHealth)}`}`;
        TB.push(`The player (the creator) stands at ${lB(BB.position)}${dB}, ${BB.creative?"in":"not in"} creative mode.`);
        const VB = BB.slots[BB.heldSlot];
        TB.push(VB ? `Holding (slot ${BB.heldSlot}): ${JB(VB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
        const yB = BB.slots.flatMap(((BB, TB) => BB ? [`slot ${TB}: ${JB(BB)}`] : []));
        TB.push(yB.length > 0 ? `Inventory: ${yB.join(", ")}.` : "Inventory: empty.");
        const YB = TB => Math.hypot(TB.position[0] - BB.position[0], TB.position[1] - BB.position[1], TB.position[2] - BB.position[2]),
          gB = [...BB.nearby].sort(((BB, TB) => YB(BB) - YB(TB)));
        if (0 === gB.length) TB.push("No other players or mobs are near enough to see.");
        else {
          TB.push("Near them, nearest first:");
          for (const BB of gB.slice(0, pB)) {
            const dB = "player" === BB.kind ? `player "${BB.name||"?"}"` : BB.name && BB.name !== BB.kind ? `${BB.kind} "${BB.name}"` : BB.kind,
              VB = Math.round(YB(BB));
            TB.push(`- ${dB} at ${lB(BB.position)}, ${VB} block${1===VB?"":"s"} away`)
          }
          gB.length > pB && TB.push(`- and ${gB.length-pB} more further away`)
        }
        return BB.droppedItems > 0 && TB.push(`${BB.droppedItems} dropped item${1===BB.droppedItems?" is":"s are"} on the ground nearby.`), TB.join("\n")
      }({
        game: null !== (TB = (0, oB.e)().gameNameWithVariation) && void 0 !== TB ? TB : null,
        position: yB,
        health: null !== (dB = gB.c.get("_health")) && void 0 !== dB ? dB : null,
        maxHealth: null !== (VB = gB.c.get("_totalMaxHealth")) && void 0 !== VB ? VB : null,
        creative: !0 === gB.c.get("creative"),
        heldSlot: LB,
        slots: kB,
        nearby: BB.nearby(),
        droppedItems: BB.droppedItems()
      })
    }
  },
  37951: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      g: () => YB,
      i: () => gB
    });
    var VB = dB(1105),
      yB = dB(900),
      pB = dB(35832),
      lB = dB(24);

    function JB(BB) {
      let {
        lobbyName: TB,
        gameNameWithVariation: dB
      } = BB;
      return !(0, VB.O)(TB) || null !== dB && (dB.startsWith("testGym") || (0, yB.j)(dB))
    }

    function YB(BB) {
      return BB.Vp === pB.d.Leave || BB.Vp === pB.d.Cursor
    }

    function gB(BB) {
      lB.h.yH("codeCollab", {
        type: BB.Vp,
        docKey: BB.yp,
        version: BB.lp,
        editorCount: BB.Jp,
        peers: BB.Yp,
        updates: BB.kp,
        playerId: BB.Lp,
        playerName: BB.Op,
        colour: BB.Dp,
        anchor: BB.Hp,
        head: BB.Ep,
        existingCursors: BB.vp,
        files: BB.mp,
        engineSettings: BB.ip
      })
    }
  },
  39434: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => AB,
      G: () => PB,
      K: () => FB,
      M: () => SB,
      N: () => UB,
      Q: () => CB,
      U: () => hB,
      V: () => rB,
      b: () => GB,
      e: () => RB,
      h: () => zB,
      k: () => qB,
      l: () => wB,
      m: () => MB,
      n: () => QB,
      r: () => KB,
      v: () => cB,
      y: () => IB
    });
    var VB = dB(1275),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(2101),
      JB = dB(4209),
      YB = dB(4169);
    let gB, oB = !1,
      kB = !1,
      LB = !1,
      OB = !1;
    const DB = 1300,
      uB = 3e3;
    let HB = 0,
      EB = !1,
      vB = !1,
      mB = 0;
    const iB = 2;
    let NB = !1,
      tB = !1;
    const fB = new Set,
      sB = new Set;

    function MB() {
      return oB
    }

    function zB() {
      return vB
    }

    function wB() {
      return tB
    }

    function UB() {
      return (0, pB.r)() && !tB
    }

    function FB(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== tB) {
        tB = BB;
        for (const BB of [...sB]) BB(tB);
        TB && hB()
      }
    }

    function KB(BB) {
      return sB.add(BB), () => {
        sB.delete(BB)
      }
    }

    function rB() {
      (0, JB.f)(lB.A.Menu, (0, pB.r)() ? 0 : lB.A.Menu)
    }

    function IB() {
      vB = !1, mB = 0, rB(), hB()
    }

    function cB(BB) {
      return fB.add(BB), () => {
        fB.delete(BB)
      }
    }

    function SB(BB) {
      kB = !1, BB !== oB && (oB = BB, OB = !1, clearTimeout(gB), LB = !oB && NB, oB ? (EB = !1, vB = !1, mB = 0) : UB() && !NB && (vB = !0), NB = !1, oB && !UB() && jB(), bB(), LB && hB())
    }

    function PB(BB) {
      BB !== EB && (EB = BB, BB || hB())
    }

    function QB() {
      kB = !1, OB || !0 !== XB() || (OB = !0, clearTimeout(gB), gB = setTimeout(aB, DB))
    }

    function RB() {
      return (!kB || performance.now() - HB > uB) && (kB = (0, YB.N)().lockPointer(), HB = performance.now()), kB
    }

    function aB() {
      ZB() && WB() && RB()
    }

    function ZB() {
      return UB() && !oB && !EB && !(0, VB.i)()
    }

    function XB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function WB() {
      return LB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== XB()
    }

    function hB() {
      UB() ? ZB() && !vB && WB() && RB() : oB && !NB && jB()
    }

    function CB() {
      vB ? navigator.vendor.startsWith("Apple") ? xB() : mB = iB : hB()
    }

    function GB() {
      mB > 0 && 0 === --mB && xB()
    }

    function qB() {
      mB = 0
    }

    function xB() {
      ZB() && !0 === XB() && RB()
    }

    function jB() {
      NB = !0, (0, YB.N)().unlockPointer()
    }

    function AB() {
      kB = !1, LB = !1, OB = !1, clearTimeout(gB), EB = !1, vB = !1, mB = 0, NB = !1;
      const BB = oB;
      oB = !1, BB && bB()
    }

    function bB() {
      for (const BB of [...fB]) BB(oB);
      yB.h.yH("pointerLockUpdate", oB)
    }
  },
  39412: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      c: () => JB,
      e: () => kB,
      f: () => gB,
      i: () => lB,
      l: () => oB,
      o: () => YB
    });
    let VB = null,
      yB = null,
      pB = null;

    function lB(BB) {
      VB = BB
    }

    function JB() {
      return VB
    }

    function YB(BB) {
      yB = BB
    }

    function gB() {
      return yB
    }

    function oB(BB) {
      pB = BB
    }

    function kB() {
      return pB
    }

    function LB() {
      var BB, TB;
      return !0 === (null === (BB = yB) || void 0 === BB || null === (TB = BB.currentViewer) || void 0 === TB ? void 0 : TB.inPlayback)
    }
  },
  39454: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadIcons: () => wB,
      setIconFileOverrides: () => UB,
      wasmIconLookups: () => RB,
      wasmIconQueries: () => QB
    });
    var VB = dB(3916),
      yB = dB(3886),
      pB = dB(39459),
      lB = dB(1694),
      JB = dB(1679),
      YB = dB(2760),
      gB = dB(2764);
    let oB = null,
      kB = null;

    function LB(BB) {
      const TB = BB.startsWith(gB.n),
        [dB, VB = dB, yB = dB] = (TB ? BB.slice(gB.n.length) : BB).split(gB.j);
      return {
        top: dB,
        left: VB,
        right: yB,
        half: TB
      }
    }

    function OB(BB) {
      const TB = null === oB ? void 0 : (0, YB.b)(BB),
        dB = void 0 === TB ? 0 : oB.codes[TB];
      return 0 === dB ? void 0 : oB.pool[dB - 1]
    }
    var DB = dB(2751),
      uB = dB(3869),
      HB = dB(3909),
      EB = dB(39467);
    const vB = "item:";
    let mB = null,
      iB = null,
      NB = null,
      tB = null,
      fB = !1,
      sB = !1,
      MB = null,
      zB = 0;

    function wB() {
      return sB || (sB = !0, (0, HB.d)().then((BB => {
        BB && (0, lB.c)()
      }))), NB ??= Promise.all([(0, DB.g)(), (kB ??= dB.e(1).then((() => dB(41306))).then((BB => {
        let {
          BLOCK_FACE_RUNS: TB,
          BLOCK_FACES: dB,
          MAX_FACE_ITEM_ID: VB
        } = BB;
        oB = {
          codes: (0, gB.B)(TB, VB + 1),
          pool: dB.split(gB.v).map(LB)
        }
      }), (BB => {
        throw kB = null, BB
      })), kB), (0, EB.f)(), dB.e(200).then((() => dB(35681)))]).then((BB => {
        let [, , TB, dB] = BB;
        TB.followBundledTextures(), mB = TB, iB = dB, (0, lB.c)()
      }), (BB => {
        NB = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", BB)
      })), NB
    }

    function UB(BB) {
      MB = BB, zB++, (0, lB.c)()
    }

    function FB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = MB) || void 0 === dB ? void 0 : dB.itemSprite(BB)) && void 0 !== TB ? TB : mB.itemSpriteUrl(BB)
    }

    function KB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = MB) || void 0 === dB ? void 0 : dB.blockTexture(BB)) && void 0 !== TB ? TB : mB.blockTextureUrl(BB)
    }

    function rB(BB) {
      var TB;
      return null !== (TB = (0, DB.d)(BB)) && void 0 !== TB ? TB : BB
    }

    function IB(BB, TB) {
      var dB, VB, yB;
      return null !== (dB = null !== (VB = null !== (yB = KB(BB)) && void 0 !== yB ? yB : null === TB || void 0 === TB ? void 0 : TB.rotated[BB]) && void 0 !== VB ? VB : null === TB || void 0 === TB ? void 0 : TB.animated[BB]) && void 0 !== dB ? dB : mB.notFoundUrl()
    }

    function cB(BB) {
      return void 0 !== (0, YB.b)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, YB.c)(Number(BB)) : void 0
    }

    function SB(BB) {
      var TB;
      if (BB.startsWith(vB)) {
        var dB;
        const TB = (0, DB.d)(BB.slice(5));
        return null !== (dB = void 0 === TB ? null : FB(TB)) && void 0 !== dB ? dB : mB.notFoundUrl()
      }
      return null !== (TB = mB.particleUrl(BB)) && void 0 !== TB ? TB : mB.notFoundUrl()
    }

    function PB(BB, TB) {
      return "StairsBlock" === BB ? BB : TB ? "SlabBlock" : "CubeBlock"
    }
    const QB = {
        async blockIcon(BB) {
          var TB;
          let {
            name: VB,
            size: yB,
            lineWidth: pB
          } = BB;
          await wB();
          const JB = null !== (TB = cB(VB)) && void 0 !== TB ? TB : VB,
            gB = (0, HB.b)(JB, yB, pB);
          if (null !== gB) return gB;
          const oB = OB(JB),
            kB = (0, YB.b)(JB),
            LB = void 0 === kB || null === iB ? void 0 : iB.itemTypeNameOf(kB);
          if (null === mB || void 0 === oB) return "";
          const DB = [oB.top, oB.left, oB.right].some((BB => null === KB(BB))),
            EB = DB ? await (tB ??= dB.e(187).then((() => dB(33444))).then((BB => (fB && (fB = !1, (0, lB.c)()), {
              rotated: BB.rotatedBlockTextures,
              animated: BB.animatedBlockTextures
            })), (BB => (tB = null, fB = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", BB), null))), tB) : null;
          if (DB && null === EB) return "";
          const vB = {
              top: IB(oB.top, EB),
              left: IB(oB.left, EB),
              right: IB(oB.right, EB),
              itemType: PB(LB, oB.half)
            },
            NB = 0 === zB ? JB : `${JB}#${zB}`;
          return (await (0, uB.e)()).drawBlockIconUrl(NB, yB, pB, (() => vB))
        }
      },
      RB = {
        itemIcon: function(BB) {
          var TB, dB;
          if (null === mB) return wB(), JB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          if ((0, yB.l)(BB)) return {
            kind: "icon",
            url: null !== (dB = mB.ingameIconUrl(BB)) && void 0 !== dB ? dB : mB.notFoundUrl()
          };
          if (BB.startsWith(yB.e)) return {
            kind: "icon",
            url: SB(BB.slice(yB.e.length))
          };
          if (0 === (0, YB.d)()) return (0, pB.d)(), JB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          const lB = null !== (TB = cB(BB)) && void 0 !== TB ? TB : BB,
            gB = (0, YB.b)(lB),
            oB = void 0 === gB ? void 0 : iB.itemTypeNameOf(gB);
          if (void 0 !== OB(lB)) return {
            kind: "drawnBlock"
          };
          const kB = function(BB) {
            var TB;
            return null !== (TB = FB(rB(BB))) && void 0 !== TB ? TB : mB.notFoundUrl()
          }(lB);
          if ((0, HB.c)(lB) && ! function(BB) {
              return null !== MB && (null !== MB.itemSprite(rB(BB)) || null !== MB.model(BB))
            }(lB)) return {
            kind: "model",
            url: kB
          };
          if ("Gun" === oB) return {
            kind: "gun",
            url: kB
          };
          if (void 0 !== gB && "GrayscaleArmour" === iB.itemTypeOf(gB) || Object.hasOwn(VB.e, lB)) {
            var LB;
            const TB = null !== (LB = (0, VB.f)(BB)) && void 0 !== LB ? LB : (0, VB.f)(lB);
            if (TB) return {
              kind: "item",
              url: kB,
              tint: TB
            }
          }
          return {
            kind: "item",
            url: kB
          }
        },
        hasIcon: function(BB) {
          return void 0 !== cB(BB) || (0, yB.l)(BB) || BB.startsWith(yB.e)
        },
        isItemName: function(BB) {
          return void 0 !== cB(BB)
        }
      }
  },
  39407: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      attachPlayGameSources: () => rd,
      playGameSources: () => Kd
    });
    var VB = dB(1679),
      yB = dB(39412),
      pB = dB(4169),
      lB = dB(39322),
      JB = dB(39417),
      YB = dB(38504),
      gB = dB(24),
      oB = dB(4192),
      kB = dB(4186),
      LB = dB(39356),
      OB = dB(39385),
      DB = dB(39424),
      uB = dB(39372);
    (0, uB.n)(oB.Jb.Chat, (BB => {
      if (BB.payloadKind !== kB.ac.Msgpack) return;
      const TB = function(BB) {
        if (null === BB || "object" !== typeof BB || !("content" in BB)) return null;
        const {
          chatMsgId: TB,
          content: dB,
          chatterEId: VB
        } = BB;
        return {
          serverChatMsgId: null !== TB && void 0 !== TB ? TB : void 0,
          content: dB,
          chatterEId: void 0 === VB || null === VB ? void 0 : String(VB)
        }
      }((0, LB.c)(BB.payload));
      null !== TB && gB.h.yH("chat", TB, !0)
    }));
    const HB = {
        chatReceived: (0, YB.k)((function(BB) {
          var TB, dB, VB;
          return {
            id: BB,
            name: null !== (TB = DB.h.getName(BB)) && void 0 !== TB ? TB : null,
            local: (0, OB.e)() === BB,
            profileEffect: null !== (dB = null === (VB = (0, DB.i)(BB)) || void 0 === VB ? void 0 : VB.profileEffect) && void 0 !== dB ? dB : null
          }
        }))
      },
      EB = {
        sendChatMessage(BB) {
          var TB;
          let {
            Jo: dB,
            channelName: VB
          } = BB;
          null === (TB = (0, lB.i)()) || void 0 === TB || TB.clientApi.sendChat(dB, VB)
        }
      };
    var vB = dB(184),
      mB = dB(1708),
      iB = dB(39310),
      NB = dB(38502);
    const tB = [0, 0, 0],
      fB = {
        codeBlockClickable(BB) {
          var TB;
          const dB = (0, lB.i)();
          if (null === dB || void 0 === dB || !dB.isSessionLive) return !1;
          const VB = dB.api;
          if (0 !== (iB.B.playerFlags(VB.apiView, 0) & iB.Bd.Crouching)) return !1;
          const yB = VB.queries.directorEntity(VB.localId) >= iB.xb.BYTES ? VB.memoryData(VB.scratch(), iB.xb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === yB) return !1;
          for (let pB = 0; pB < 3; pB++) tB[pB] = iB.xb.feet(yB, 0, pB);
          return tB[1] += iB.xb.eyeHeight(yB, 0), (0, NB.d)(tB, BB, null !== (TB = mB.c.get("blockReach")) && void 0 !== TB ? TB : vB.c.uE)
        }
      },
      sB = {
        clickCodeBlock(BB) {
          var TB;
          null === (TB = (0, lB.i)()) || void 0 === TB || TB.clickCodeBlock(BB)
        }
      };
    var MB = dB(39338),
      zB = dB(39428),
      wB = dB(900),
      UB = dB(37983),
      FB = dB(4167),
      KB = dB(39346),
      rB = dB(39330),
      IB = dB(39348);

    function cB(BB) {
      if (null === BB) return null;
      const TB = [];
      for (const dB of BB) {
        const BB = Object.keys(dB)[0];
        if ("Ed" === BB) {
          const {
            str: BB,
            style: VB,
            clickableUrl: yB
          } = dB.Ed, pB = Object.keys(BB)[0], lB = BB[pB];
          "string" !== pB && "styledEntityName" !== pB && "styledTranslatedText" !== pB || TB.push({
            str: lB,
            style: VB,
            clickableUrl: yB
          })
        } else TB.push(dB[BB])
      }
      return TB
    }
    const SB = {
      screenPos(BB) {
        var TB, dB;
        return null !== (TB = null === (dB = (0, lB.i)()) || void 0 === dB ? void 0 : dB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== TB ? TB : {
          x: 0,
          y: 0
        }
      }
    };
    let PB = !1;

    function QB() {
      PB || (PB = !0, (0, uB.n)(oB.Jb.ProgressBarUpdate, (BB => {
        const TB = (0, IB.h)(BB);
        (0, IB.e)(TB) && gB.h.yH("progressBarUpdate", TB, !0)
      })), (0, uB.n)(KB.w, (BB => {
        const TB = (0, IB.f)(KB.w, BB);
        TB && gB.h.yH("middleScreenBarInitiate", {
          duration: TB.Zp,
          Xp: TB.Xp,
          horizBarRemOffset: TB.Wp
        }, !0)
      })), (0, uB.n)(oB.Jb.RemoveMiddleScreenBar, (() => {
        gB.h.yH("middleScreenBarRemove")
      })), (0, uB.n)(KB.db, (BB => {
        const TB = (0, IB.f)(KB.db, BB);
        if (TB) {
          var dB;
          const BB = TB.YB ? null === (dB = (0, lB.i)()) || void 0 === dB ? void 0 : dB.renderFrame.projectDirectionToScreenPos(TB.YB) : void 0;
          gB.h.yH("sendHitmarker", {
            jT: TB.jT,
            screenPos: BB
          }, !0)
        }
      })), (0, uB.n)(KB.hb, (BB => {
        const TB = (0, IB.f)(KB.hb, BB);
        if (TB) {
          const {
            id: BB,
            position: dB,
            style: VB,
            cp: yB,
            Pp: pB
          } = TB;
          gB.h.yH("setDirectionArrow", {
            id: BB,
            position: dB,
            style: VB,
            text: cB(yB),
            Pp: pB
          }, !0)
        }
      })), (0, uB.n)(KB.e, (BB => {
        const TB = (0, IB.f)(KB.e, BB);
        TB && gB.h.yH("clearDirectionArrow", {
          id: TB.id
        }, !0)
      })), (0, uB.n)(KB.q, (BB => {
        const TB = (0, IB.f)(KB.q, BB);
        TB && gB.h.yH("flyingMiddleMessage", {
          content: cB(TB.Hd),
          Nd: TB.Nd,
          td: TB.td
        }, !0)
      })), (0, uB.n)(oB.Jb.WorldVariation, (BB => {
        const TB = (0, IB.h)(BB);
        if ("string" === typeof TB) {
          const BB = TB === wB.f ? null : {
            message: `Currently loaded as variation: ${TB}`,
            type: "Warning"
          };
          gB.h.yH("showPermanentBottomMessage", BB, !0)
        }
      })), (0, uB.n)(KB.J, (BB => {
        const TB = (0, IB.f)(KB.J, BB);
        TB && function(BB, TB) {
          const {
            type: dB,
            params: VB
          } = (0, UB.i)(TB), yB = {
            ...VB
          };
          for (const pB of UB.e) yB[pB] && (yB[pB] = cB(yB[pB]));
          FB.c.queueQTE(BB, dB, yB).getResult().then((TB => {
            var dB;
            "boolean" === typeof TB && (null === (dB = (0, lB.i)()) || void 0 === dB || dB.send(rB.c.QteResponse, {
              qteId: BB,
              qteResponse: TB
            }))
          }))
        }(TB.id, TB.bd)
      })), (0, uB.n)(KB.W, (BB => {
        const TB = (0, IB.f)(KB.W, BB);
        "number" === typeof TB && FB.c.cancelQTE(TB)
      })), (0, uB.i)((() => {
        FB.c.reset(), gB.h.yH("showPermanentBottomMessage", null, !0)
      })), (0, uB.m)((() => {
        FB.c.reset()
      })), (0, uB.n)(oB.Jb.EditItemCraftingRecipes, (BB => {
        const TB = (0, IB.h)(BB);
        (0, IB.e)(TB) && gB.h.yH("craftingRecipesEdited", {
          itemName: TB.craftingRecipeItemName,
          recipesForItem: TB.recipesForItem
        })
      })), (0, uB.n)(KB.T, (BB => {
        const TB = (0, IB.f)(KB.T, BB);
        TB && gB.h.yH("craftingRecipesEdited", {
          itemName: TB.RT,
          recipesForItem: []
        })
      })))
    }
    var RB = dB(38113);
    let aB = !1,
      ZB = !1;

    function XB() {
      const BB = (0, lB.i)();
      if (null === BB || void 0 === BB || !BB.isSessionLive) return void(aB = !1);
      const TB = 0 !== (iB.B.playerFlags(BB.api.apiView, 0) & iB.Bd.FreeCam);
      TB !== aB && (aB = TB, (0, RB.b)(TB))
    }
    var WB = dB(279),
      hB = dB(35984),
      CB = dB(1719);
    var GB = dB(39431),
      qB = dB(39378);
    const xB = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let jB = "off";

    function AB(BB) {
      var TB;
      return null === BB ? null : {
        label: null !== (TB = (0, GB.b)(BB, "interactionPrompt")) && void 0 !== TB ? TB : null
      }
    }
    const bB = new Map([
      [iB.Bc.Open, {
        label: YB.f.open
      }],
      [iB.Bc.Close, {
        label: YB.f.close
      }],
      [iB.Bc.Milk, {
        label: YB.f.milk
      }],
      [iB.Bc.Shear, {
        label: YB.f.shear
      }],
      [iB.Bc.Tame, {
        label: YB.f.tame
      }],
      [iB.Bc.Feed, {
        label: YB.f.feed
      }],
      [iB.Bc.Ride, {
        label: YB.f.ride
      }]
    ]);
    class nB {
      constructor() {
        this.target = xB, this.rY = iB.dd, this.optionName = null, this.pickaxe = new YB.e
      }
      read(BB) {
        var TB;
        const dB = iB.B.targetBlockId(BB.api.apiView, 0);
        dB !== this.rY && (this.rY = dB, this.optionName = dB === iB.dd ? null : `${BB.tables.getMetaInfo(dB).rootName}CrosshairText`);
        const VB = null === this.optionName ? null : null !== (TB = BB.tables.getClientOption(this.optionName)) && void 0 !== TB ? TB : null;
        this.pickaxe.update(function(BB, TB) {
          var dB, VB, yB;
          if (0 === (iB.B.playerFlags(BB.api.apiView, 0) & iB.Bd.Breaking) || TB === iB.dd || 0 === TB) return null;
          const {
            tables: pB
          } = BB;
          if (!0 === pB.getClientOption("creative")) return null;
          const lB = pB.nameOfId(TB),
            JB = null === (dB = BB.items.Dg()) || void 0 === dB ? void 0 : dB.name,
            YB = null !== (VB = pB.getItemStat(lB, "harvestLevel")) && void 0 !== VB ? VB : 0;
          return (0, WB.Dc)({
            blockHarvestType: pB.getDefaultItemStat(lB, "harvestType"),
            blockHarvestLevel: pB.getDefaultItemStat(lB, "harvestLevel"),
            harvestLevel: YB,
            heldToolType: void 0 === JB ? void 0 : pB.getDefaultItemStat(JB, "harvests"),
            heldToolLevel: void 0 === JB ? void 0 : pB.getDefaultItemStat(JB, "level")
          }) && null !== (yB = hB.o[YB]) && void 0 !== yB ? yB : null
        }(BB, dB)), BB.watchPromptPick(jB);
        const yB = "touch" === jB ? function(BB) {
          var TB;
          const dB = BB.interactLabel;
          return dB === iB.Bc.Entity ? AB(BB.promptEntity) : dB === iB.Bc.TameWith ? {
            label: (0, YB.u)(BB.tables.nameOfId(BB.interactIcon))
          } : null !== (TB = bB.get(dB)) && void 0 !== TB ? TB : null
        }(BB) : AB(BB.promptEntity);
        return this.target = (0, CB.r)(this.target, {
          interactPrompt: yB,
          blockText: VB,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let eB = null;
    const BT = {
      current: () => {
        var BB, TB;
        return null !== (BB = null === (TB = eB) || void 0 === TB ? void 0 : TB.target) && void 0 !== BB ? BB : xB
      },
      watch: BB => {
        const TB = new nB;
        eB = TB;
        const dB = (0, OB.i)((dB => {
          let VB = TB.read(dB);
          BB(VB);
          const yB = (0, pB.w)((() => {
            const yB = TB.read(dB);
            yB !== VB && (VB = yB, BB(yB))
          }));
          return () => {
            yB(), dB.watchPromptPick("off")
          }
        }));
        return () => {
          dB(), eB === TB && (eB = null)
        }
      }
    };
    let TT = 0,
      dT = 0;
    const VT = {
        health: YB.o,
        aura: YB.j,
        hotbar: qB.b.states.hotbar,
        heldItemAim: qB.b.states.heldItemAim,
        crouching: (0, OB.c)((BB => function(BB) {
          const TB = () => 0 !== (iB.B.playerFlags(BB.apiView, 0) & iB.Bd.Crouching);
          return {
            current: TB,
            watch(BB) {
              let dB = TB();
              return (0, pB.v)((() => {
                const VB = TB();
                VB !== dB && (dB = VB, BB(VB))
              }))
            }
          }
        }(BB.api).current), !1, (BB => (0, pB.v)(BB))),
        flight: (0, OB.c)((BB => () => function(BB) {
          const TB = iB.B.playerFlags(BB.apiView, 0);
          return (0, YB.m)(0 !== (TB & iB.Bd.CanFly), 0 !== (TB & iB.Bd.Flying))
        }(BB.api)), (0, YB.m)(!1, !1), (BB => (0, pB.v)(BB))),
        gliderBoostFuel: (0, OB.c)((BB => () => iB.B.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, pB.v)(BB))),
        crosshairTarget: BT
      },
      yT = {
        hotbarSlotRequested: qB.b.events.hotbarSlotRequested,
        hotbarScrolled: qB.b.events.hotbarScrolled,
        numberKeyPressed: qB.b.events.numberKeyPressed,
        shotDamageToShow: (0, YB.s)((BB => !0 === (0, GB.b)(BB, "showDamageAmounts")))
      },
      pT = {
        selectHotbarSlot: qB.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: BB => {
          jB = BB
        }
      },
      lT = {
        momentumFrac: function() {
          var BB, TB, dB;
          const VB = (0, lB.i)(),
            yB = performance.now(),
            pB = null === VB || void 0 === VB || null === (BB = VB.items.Dg()) || void 0 === BB || null === (TB = BB.attributes) || void 0 === TB || null === (dB = TB.customAttributes) || void 0 === dB ? void 0 : dB.enchantments;
          return TT = null !== VB && null !== pB && void 0 !== pB && pB.Momentum ? 0 !== (iB.B.playerFlags(VB.api.apiView, 0) & iB.Bd.Breaking) ? Math.max(0, iB.B.momentumFrac(VB.api.apiView, 0)) : Math.max(0, TT - (yB - dT) / 1500) : 0, dT = yB, TT
        }
      };
    var JT = dB(39315),
      YT = dB(1117),
      gT = dB(21),
      oT = dB(35497),
      kT = dB(8127),
      LT = dB(1507),
      OT = dB(2101),
      DT = dB(4199);
    let uT = !1;

    function HT(BB) {
      uT = BB
    }

    function ET() {
      "inGame" !== gT.d.get("gameState") || (0, LT.o)() || gB.h.yH("ctrlCrouchWithoutFullscreen")
    }
    let vT = !1;
    const mT = {
        OpenEmoteWheel: () => {
          HT(!0), vT = !0, queueMicrotask((() => {
            vT && (vT = !1, gB.h.yH("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          gB.h.yH("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, oT.d)() || gB.h.yH("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, oT.d)() || gB.h.yH("XKeyPressed")
        },
        CtrlCrouch: ET,
        "primary-fire": () => {
          gB.h.yH("mouseState", {
            eg: YT.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          gB.h.yH("mouseState", {
            eg: YT.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          gB.h.yH("mouseState", {
            eg: YT.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      iT = {
        OpenEmoteWheel: () => {
          HT(!1), vT ? (vT = !1, (0, kT.e)() || gB.h.yH("requestEmoteWheelHoldOpen")) : gB.h.yH("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: ET,
        "primary-fire": () => {
          gB.h.yH("mouseState", {
            eg: YT.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          gB.h.yH("mouseState", {
            eg: YT.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          gB.h.yH("mouseState", {
            eg: YT.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let NT = !1;

    function tT() {
      NT || (NT = !0, (0, DT.f)((BB => {
        if ((0, yB.b)()) return;
        const TB = (0, DT.c)(BB) ? "primary-fire" : BB.action;
        var dB;
        if (BB.down) {
          if (0 === (BB.flags & OT.e.Synthetic)) {
            var VB;
            null === (VB = mT[TB]) || void 0 === VB || VB.call(mT)
          }
        } else null === (dB = iT[TB]) || void 0 === dB || dB.call(iT)
      })))
    }
    var fT = dB(270),
      sT = dB(95),
      MT = dB(33),
      zT = dB(39434),
      wT = dB(1209),
      UT = dB(37951);
    let FT = !1;
    const KT = {
      sendCodeCollab(BB) {
        var TB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.CodeCollab, (0, rB.l)(BB), (0, UT.g)(BB))
      }
    };
    let rT = null,
      IT = !1,
      cT = null;

    function ST() {
      return "inGame" === gT.d.get("gameState") && !(0, oT.d)()
    }
    const PT = {
        OpenInventory: BB => {
          (0, LT.u)(BB, "inventory", (0, JT.k)())
        },
        OpenShop: BB => {
          rT && ST() && (0, LT.s)(BB, fT.m.SHOP, !rT.shopIsEmpty(mB.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: BB => {
          ST() && (0, LT.s)(BB, fT.m.LOBBY_LEADERBOARD, !!mB.c.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: BB => {
          var TB;
          const dB = null === (TB = rT) || void 0 === TB ? void 0 : TB.getClientGameMapKey();
          dB ? (0, LT.v)(BB, !0, dB) : (0, LT.u)(BB, "retentionFeatures", !(!mB.c.get("_tasks") && !mB.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: BB => {
          (0, LT.u)(BB, "inviteLink", sT.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: BB => {
          ST() && function(BB) {
            var TB;
            const dB = (0, lB.i)(),
              VB = null !== dB && void 0 !== dB && dB.isSessionLive ? dB.api : null,
              yB = VB ? VB.Dv(VB.localId) : null,
              pB = null !== (TB = null === yB || void 0 === yB ? void 0 : yB.map((BB => Math.floor(BB)))) && void 0 !== TB ? TB : null;
            (0, LT.v)(BB, null !== pB && (0, UT.e)((0, wT.e)()), (() => {
              gB.h.yH("EditLobbyCode", pB)
            }))
          }(BB)
        },
        HideUi: () => {
          gB.h.yH("showUi", !1)
        }
      },
      QT = {
        HideUi: () => {
          gB.h.yH("showUi", !0)
        }
      };

    function RT() {
      IT || (IT = !0, dB.e(144).then((() => dB(41295))).then((BB => {
        rT = BB
      }), (BB => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", BB)
      })), (0, zT.v)((BB => {
        BB || !(0, zT.h)() || (0, sT.isMobile)() || !MT.j.getItem("disableFullscreen") || (0, LT.l)() || gT.d.set({
          openEverythingMenuName: fT.m.SETTINGS
        })
      })), (0, DT.f)((BB => {
        let {
          action: TB,
          down: dB,
          press: VB
        } = BB;
        var pB, lB;
        (0, yB.b)() || (dB ? null === (pB = PT[TB]) || void 0 === pB || pB.call(PT, function(BB) {
          var TB;
          if (0 === BB || (null === (TB = cT) || void 0 === TB ? void 0 : TB.press) !== BB) {
            const TB = {
              press: BB,
              event: new Event("inputAction")
            };
            cT = TB, queueMicrotask((() => {
              cT === TB && (cT = null)
            }))
          }
          return cT.event
        }(VB)) : null === (lB = QT[TB]) || void 0 === lB || lB.call(QT))
      })))
    }
    var aT = dB(37912),
      ZT = dB(37930),
      XT = dB(37918);
    const WT = {
      completeTask(BB) {
        var TB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.CompleteTask, (0, rB.n)(BB))
      },
      setServerCookie(BB) {
        var TB;
        let {
          key: dB,
          value: VB
        } = BB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.GeneralCookieSet, (0, rB.u)({
          Ng: dB,
          tg: VB
        }))
      },
      answerUiRequest(BB) {
        var TB;
        let {
          id: dB,
          po: VB
        } = BB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.UiRequestResp, (0, rB.T)({
          vo: dB,
          fo: VB,
          Mo: 5
        }))
      },
      chooseRewardedAd(BB) {
        var TB;
        let {
          id: dB,
          po: VB
        } = BB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.UiRequestResponded, (0, rB.S)({
          id: dB,
          po: VB
        }))
      },
      requestLeaderboard(BB) {
        var TB;
        let {
          category: dB,
          timeframe: VB,
          seeTop: yB
        } = BB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.LeaderboardRequest, {
          category: dB,
          timeframe: VB,
          seeTop: yB
        })
      }
    };
    let hT = !1;
    const CT = vB.c.lE / 2,
      GT = [CT, -CT, -CT, -CT, CT, CT, -CT, CT],
      qT = [0, 0, 0];

    function xT(BB, TB, dB) {
      for (let VB = 0; VB < BB.length; VB += 2)
        if (BB[VB] === TB && BB[VB + 1] === dB) return !0;
      return !1
    }
    const jT = {
      blocksStandingOn: function() {
        const BB = (0, lB.i)();
        if (null === BB) return [];
        const {
          api: TB,
          chunks: dB,
          tables: VB
        } = BB;
        if (!TB.readPosition(TB.localId, qT)) return [];
        const [yB, pB, JB] = qT, YB = Math.ceil(pB) - 1, gB = [], oB = [];
        for (let lB = 0; lB < GT.length; lB += 2) {
          const BB = yB + GT[lB],
            TB = JB + GT[lB + 1];
          if (Number.isInteger(BB) || Number.isInteger(TB)) continue;
          const pB = Math.floor(BB),
            kB = Math.floor(TB);
          if (xT(oB, pB, kB)) continue;
          const LB = dB.rY(pB, YB, kB);
          VB.isSolidBlockId(LB) && (oB.push(pB, kB), gB.push(VB.nameOfId(LB)))
        }
        return gB
      },
      dropAhead: function() {
        const BB = (0, lB.i)();
        return null !== BB && 0 !== (iB.B.playerFlags(BB.api.apiView, 0) & iB.Bd.DropAhead)
      }
    };
    var AT = dB(35908),
      bT = dB(38028),
      nT = dB(1235),
      eT = dB(39390);
    const Bd = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Td = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function dd() {
      const BB = new Set;
      return {
        add: TB => (BB.add(TB), () => {
          BB.delete(TB)
        }),
        fire() {
          for (const TB of BB) TB()
        }
      }
    }
    const Vd = Object.freeze([]);

    function yd(BB, TB) {
      let dB, {
        rereads: VB,
        followLocalId: yB
      } = TB;
      const lB = () => (dB = (0, CB.r)(dB, BB()), dB);
      return {
        current: lB,
        watch(BB) {
          const TB = (0, DB.d)((TB => {
            VB(TB) && BB(lB())
          }));
          if (!yB) return TB;
          let dB = (0, OB.e)();
          const JB = (0, pB.w)((() => {
            const TB = (0, OB.e)();
            TB !== dB && (dB = TB, BB(lB()))
          }));
          return () => {
            TB(), JB()
          }
        }
      }
    }
    const pd = {
        players: yd((function() {
          const BB = DB.h.ids(),
            TB = {};
          for (const pB of BB) {
            var dB, VB, yB;
            TB[pB] = {
              name: null !== (dB = DB.h.getName(pB)) && void 0 !== dB ? dB : null,
              ranks: null !== (VB = DB.h.getSetting(pB, "ranks")) && void 0 !== VB ? VB : Vd,
              cosmetics: null !== (yB = (0, DB.i)(pB)) && void 0 !== yB ? yB : null
            }
          }
          return {
            ids: BB,
            byId: TB,
            localId: (0, OB.e)()
          }
        }), {
          rereads: BB => "roster" !== BB.kind || BB.members || BB.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: yd((function() {
          const BB = {};
          for (const yB of DB.h.ids()) {
            var TB, dB, VB;
            BB[yB] = {
              colour: null !== (TB = DB.h.getSetting(yB, "colorInLobbyLeaderboard")) && void 0 !== TB ? TB : null,
              values: null !== (dB = DB.h.getSetting(yB, "lobbyLeaderboardValues")) && void 0 !== dB ? dB : null,
              tags: null !== (VB = DB.h.getSetting(yB, "lobbyLeaderboardTags")) && void 0 !== VB ? VB : null
            }
          }
          return BB
        }), {
          rereads: function(BB) {
            if ("roster" !== BB.kind) return "reset" === BB.kind;
            const {
              members: TB,
              settings: dB
            } = BB;
            return TB || dB.has("colorInLobbyLeaderboard") || dB.has("lobbyLeaderboardValues") || dB.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      ld = {
        cosmeticsUpdated: {
          watch: BB => (0, DB.d)((TB => {
            if ("cosmetics" !== TB.kind) return;
            const dB = (0, OB.e)();
            BB(TB.updates.map((BB => {
              let {
                Np: TB,
                tp: VB,
                sp: yB
              } = BB;
              return {
                local: TB === dB,
                tp: VB,
                sp: yB
              }
            })))
          }))
        }
      };
    var Jd = dB(2465),
      Yd = dB(1596),
      gd = dB(965),
      od = dB(39440);
    let kd = !1,
      Ld = null;
    const Od = {
      setShopOpen(BB) {
        var TB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.ShopMenuChanged, (0, rB.M)(BB))
      },
      buyShopItem(BB) {
        var TB;
        let {
          categoryKey: dB,
          itemKey: VB,
          userInput: yB
        } = BB;
        null === (TB = (0, lB.i)()) || void 0 === TB || TB.send(rB.c.ItemBought, {
          categoryKey: dB,
          itemKey: VB,
          shopVersion: mB.c.get("_shopVersion"),
          userInput: yB
        })
      }
    };
    let Dd = !1;
    var ud = dB(4209);
    const Hd = OT.A.LookFrozen | OT.A.ClicksSuppressed;

    function Ed(BB, TB) {
      var dB;
      null !== (dB = (0, lB.i)()) && void 0 !== dB && dB.send(BB, TB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
    }(0, uB.n)(KB.ib, (BB => {
      const TB = (0, IB.f)(KB.ib, BB);
      void 0 !== TB && gB.h.yH("setDiscordReportKey", TB)
    }));
    const vd = {
      ignorePlayer(BB) {
        Ed(rB.c.IgnoreUser, (0, rB.v)({
          zg: BB
        }))
      },
      reportPlayer(BB) {
        let {
          playerId: TB,
          chatMsgId: dB,
          yl: VB,
          details: yB
        } = BB;
        Ed(rB.c.UserReport, (0, rB.$)({
          cY: TB,
          SY: dB,
          yl: VB,
          pl: yB
        }))
      },
      reportWorldCodeChat(BB) {
        let {
          chatMsgId: TB,
          yl: dB,
          details: VB
        } = BB;
        Ed(rB.c.UserReport, (0, rB.$)({
          cY: "",
          SY: TB,
          yl: dB,
          pl: VB
        }))
      },
      requestDiscordReportKey(BB) {
        Ed(rB.c.ReqDiscordReportKey, (0, rB.H)(BB))
      },
      reportLobbyOrGame(BB) {
        let {
          target: TB,
          yl: dB,
          details: VB
        } = BB;
        "customGame" === TB ? Ed(rB.c.CustomGameReport, (0, rB.q)({
          yl: dB,
          pl: VB
        })) : Ed(rB.c.LobbyReport, (0, rB.z)({
          yl: dB,
          pl: VB
        }))
      },
      updateMyCosmetic(BB) {
        Ed(rB.c.UpdateMyCosmetic, (0, rB.Y)(BB))
      },
      holdEmoteWheel(BB) {
        !BB || uT ? (0, ud.f)(Hd, BB ? Hd : 0) : gB.h.yH("requestEmoteWheelHoldRelease")
      }
    };
    var md = dB(39445),
      Nd = dB(1694),
      td = dB(39448);

    function fd() {
      const BB = (0, lB.i)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        if (BB.queries.drawCensus() < iB.Fb.BYTES) return [];
        const TB = BB.memoryData(BB.scratch(), iB.Fb.BYTES, 4, "the draw census");
        if (null === TB) return [];
        const dB = iB.Fb.terrainOpaque(TB, 0),
          VB = iB.Fb.terrainTransparent(TB, 0),
          yB = iB.Fb.earthSky(TB, 0),
          pB = iB.Fb.skyMeshes(TB, 0),
          lB = iB.Fb.regular(TB, 0),
          JB = iB.Fb.thin(TB, 0),
          YB = iB.Fb.line(TB, 0),
          gB = iB.Fb.text(TB, 0),
          oB = iB.Fb.particles(TB, 0);
        return [{
          label: "Drawn",
          value: `${dB+VB+yB+pB+lB+JB+YB+gB+oB}`
        }, {
          label: "Terrain",
          value: `${dB} opaque / ${VB} transparent (${iB.Fb.terrainPack(TB,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${lB} / ${JB}`
        }, {
          label: "Text / Lines",
          value: `${gB} / ${YB}`
        }, {
          label: "Sky / Particles",
          value: `${yB+pB} / ${oB}`
        }]
      }(BB.api) : []
    }
    var sd = dB(39454);
    var Md = dB(560),
      zd = dB(38521);

    function wd(BB) {
      if (null === BB || void 0 === BB || !BB.isCoreRunning) return null;
      const {
        api: TB,
        chunks: dB,
        items: VB,
        tables: yB
      } = BB;
      return {
        playerFeet() {
          const BB = TB.Dv(TB.localId);
          return null !== BB && void 0 !== BB && BB.every(Number.isFinite) ? BB : null
        },
        chunkBlocks: BB => dB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, TB, VB) => dB.rY(BB, TB, VB) : null,
        blockName: BB => yB.nameOfId(BB),
        inventory: () => ({
          slots: VB.playerItems().map((BB => BB ? {
            name: BB.name,
            amount: BB.amount
          } : null)),
          heldSlot: VB.selectedSlot
        }),
        nearby() {
          const dB = [];
          for (let yB = 0; yB < TB.idStr.length; yB++) {
            var VB;
            const pB = TB.idStr[yB],
              lB = TB.serverIds[yB],
              JB = TB.kinds[yB];
            if (null === pB || TB.isLocal(lB) || JB >>> iB.c !== iB.y.Lifeform) continue;
            const YB = TB.Dv(lB),
              gB = Md.l[JB & iB.g];
            YB && void 0 !== gB && dB.push({
              kind: "Player" === gB ? "player" : gB,
              name: null !== (VB = BB.clientApi.getEntityName(pB)) && void 0 !== VB ? VB : null,
              position: YB
            })
          }
          return dB
        },
        droppedItems() {
          let BB = 0;
          for (let dB = 0; dB < TB.idStr.length; dB++) null !== TB.idStr[dB] && TB.kinds[dB] >>> iB.c === iB.y.Item && BB++;
          return BB
        }
      }
    }
    const Ud = {
        worldCodeAiChunk: BB => Promise.resolve((0, zd.d)(wd((0, lB.i)()), BB)),
        worldCodeAiGameState: () => Promise.resolve((0, zd.h)(wd((0, lB.i)())))
      },
      Fd = function(BB) {
        const TB = dd(),
          VB = dd(),
          yB = new Set,
          pB = new Set,
          lB = () => {
            var TB, dB;
            return null !== (TB = null === (dB = BB.runtime()) || void 0 === dB ? void 0 : dB.currentViewer) && void 0 !== TB ? TB : null
          };
        let JB = null,
          YB = null;
        const oB = (BB, TB) => ({
            current: BB,
            watch(dB) {
              let VB = BB();
              return TB.add((() => {
                const TB = BB();
                TB !== VB && (VB = TB, dB(TB))
              }))
            }
          }),
          LB = BB => ({
            watch: TB => (BB.add(TB), () => {
              BB.delete(TB)
            })
          }),
          OB = BB => {
            const TB = lB(),
              dB = null === TB || void 0 === TB ? void 0 : TB.view;
            TB && dB && TB.seek(Math.max(0, Math.min(dB.totalTicks - 1, dB.dL + BB * kB.ud)))
          },
          DB = {
            replay: oB((() => {
              var BB;
              const TB = lB(),
                dB = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.view) && void 0 !== BB ? BB : null;
              return null === TB || null === dB || dB.state === kB.hd.None ? (JB = null, null) : (JB = (0, CB.r)(JB, {
                id: TB.id,
                dL: dB.dL,
                totalTicks: dB.totalTicks,
                WU: kB.ud,
                playing: dB.state === kB.hd.Playing,
                speed: dB.speed,
                cameraMode: dB.cameraMode,
                freecam: "freecam" === dB.cameraMode
              }), JB)
            }), TB),
            replayEdits: oB((() => {
              var BB;
              const TB = lB(),
                dB = null !== (BB = null === TB || void 0 === TB ? void 0 : TB.view) && void 0 !== BB ? BB : null;
              return null === TB || null === dB || dB.state === kB.hd.None ? (YB = null, null) : (YB = (0, CB.r)(YB, {
                cameraKeyframes: [...TB.keyframes],
                playbackMark: dB.mark,
                fileName: TB.fileName,
                unsavedChanges: TB.unsavedChanges,
                suggestSaveAs: TB.suggestSaveAs
              }), YB)
            }), TB),
            replayRecorder: oB((() => {
              var TB, dB;
              return null !== (TB = null === (dB = BB.runtime()) || void 0 === dB ? void 0 : dB.recorder.current) && void 0 !== TB ? TB : eT.c.states.replayRecorder.current()
            }), VB),
            replayVideoExporting: {
              current: bT.c,
              watch: BB => (0, gB.i)("replayViewer|videoExportChanged", (() => {
                BB((0, bT.c)())
              }))
            }
          },
          uB = {
            replayUiActionRequested: LB(pB),
            replayViewerRequested: LB(yB)
          },
          HB = BB => {
            for (const TB of yB) TB(BB)
          },
          EB = () => {
            var VB;
            !0 === (null === (VB = lB()) || void 0 === VB ? void 0 : VB.isOpen) && Promise.all([dB.e(88), dB.e(59)]).then((() => dB(41299))).then((dB => {
              let {
                startWasmReplayVideoExport: VB
              } = dB;
              return VB({
                viewer: lB,
                canvas: () => {
                  var TB, dB;
                  return null !== (TB = null === (dB = BB.canvas) || void 0 === dB ? void 0 : dB.call(BB)) && void 0 !== TB ? TB : null
                },
                watchViewer: TB.add,
                requestViewer: HB
              })
            }), (BB => {
              console.error("Couldn't load the video export", BB), nT.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((BB => {
              console.error("The video export failed", BB)
            }))
          },
          vB = {
            replayAction(BB) {
              if ((0, bT.c)()) return;
              const TB = lB();
              switch (BB) {
                case "replaySkipBack":
                  OB(-1);
                  break;
                case "replaySkipForward":
                  OB(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== TB && void 0 !== TB && TB.view && TB.setSpeed((0, AT.h)(TB.view.speed, "replaySpeedUp" === BB ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === TB || void 0 === TB || TB.addKeyframe()
              }
            },
            setReplayPlaying(BB) {
              var TB, dB;
              (0, bT.c)() || (BB ? null === (TB = lB()) || void 0 === TB || TB.play() : null === (dB = lB()) || void 0 === dB || dB.pause())
            },
            seekReplay(BB) {
              var TB;
              let {
                dL: dB,
                ignorePlaybackMark: VB
              } = BB;
              null === (TB = lB()) || void 0 === TB || TB.seek(dB, null !== VB && void 0 !== VB && VB)
            },
            setReplayCameraMode(BB) {
              var TB;
              null === (TB = lB()) || void 0 === TB || TB.setCameraMode(BB)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(BB) {
              var TB;
              null === (TB = lB()) || void 0 === TB || TB.setKeyframe(BB)
            },
            moveReplayCameraKeyframe(BB) {
              var TB;
              let {
                from: dB,
                to: VB
              } = BB;
              null === (TB = lB()) || void 0 === TB || TB.moveKeyframe(dB, VB)
            },
            deleteReplayCameraKeyframes(BB) {
              var TB;
              let {
                start: dB,
                end: VB
              } = BB;
              null === (TB = lB()) || void 0 === TB || TB.deleteKeyframes(dB, VB)
            },
            setReplayPlaybackMark(BB) {
              var TB;
              null === (TB = lB()) || void 0 === TB || TB.setMark(BB)
            },
            cropReplay(BB) {
              var TB, dB;
              let {
                start: VB,
                end: yB
              } = BB;
              return !(0, bT.c)() && (null !== (TB = null === (dB = lB()) || void 0 === dB ? void 0 : dB.crop(VB, yB)) && void 0 !== TB && TB)
            },
            holdReplayForShaderPackFailure(BB) {
              const TB = lB();
              TB && (TB.holdForShaderPackFailure(), function(BB) {
                dB.e(122).then((() => dB(38153))).then((TB => {
                  let {
                    shaderPackPage: dB
                  } = TB;
                  dB.block(BB)
                })).catch((BB => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", BB)
                }))
              }(BB))
            },
            exportReplayVideo() {
              EB()
            },
            toggleRecording() {
              var TB;
              null === (TB = BB.runtime()) || void 0 === TB || TB.recorder.toggleRecording()
            },
            saveClip() {
              var TB;
              null === (TB = BB.runtime()) || void 0 === TB || TB.recorder.saveClip()
            },
            setRecorderPrefs(TB) {
              var dB;
              let {
                clipping: VB,
                clipSeconds: yB
              } = TB;
              null === (dB = BB.runtime()) || void 0 === dB || dB.recorder.setPrefs(VB, yB)
            },
            setReplayViewerOpen(TB) {
              var dB;
              (0, oT.g)(TB) && (null === (dB = BB.runtime()) || void 0 === dB || dB.recorder.viewerShown(TB))
            },
            recordFlyingMiddleText(TB) {
              var dB;
              let {
                content: VB,
                Nd: yB,
                angle: pB,
                td: lB
              } = TB;
              null === (dB = BB.runtime()) || void 0 === dB || dB.recorder.recordFlyingText(JSON.stringify(VB), yB, pB, lB)
            },
            dragReplayCamera(TB) {
              var dB;
              let {
                dx: VB,
                dy: yB
              } = TB;
              null === (dB = BB.freecam()) || void 0 === dB || dB.drag(VB, yB)
            },
            moveReplayFreecam(TB) {
              var dB;
              null === (dB = BB.freecam()) || void 0 === dB || dB.move(TB)
            },
            holdReplayFreecamVertical(TB) {
              var dB;
              let {
                action: VB,
                Dg: yB
              } = TB;
              null === (dB = BB.freecam()) || void 0 === dB || dB.holdVertical(VB, yB)
            }
          },
          mB = BB => {
            var TB;
            const dB = lB(),
              VB = null !== (TB = null === dB || void 0 === dB ? void 0 : dB.view) && void 0 !== TB ? TB : null;
            Bd.has(BB) ? (BB => {
              for (const TB of pB) TB(BB)
            })(BB) : Td.has(BB) ? vB.replayAction(BB) : "replayPlayPause" === BB ? dB && VB && VB.state !== kB.hd.None && vB.setReplayPlaying(VB.state !== kB.hd.Playing) : "replayChangeCameraMode" === BB ? null === dB || void 0 === dB || dB.cycleCameraMode() : "replayExit" === BB ? !0 === (null === dB || void 0 === dB ? void 0 : dB.inPlayback) && (0, wT.m)("/") : "replayExportVideo" === BB && EB()
          };
        let iB = !1;
        return {
          states: DB,
          events: uB,
          commands: vB,
          lookups: {
            replayCamera() {
              var TB, dB, VB;
              return !0 !== (null === (TB = lB()) || void 0 === TB ? void 0 : TB.isOpen) ? null : null !== (dB = null === (VB = BB.cameraView) || void 0 === VB ? void 0 : VB.call(BB)) && void 0 !== dB ? dB : null
            },
            leaveGameReloadsPage() {
              var BB;
              return !0 === (null === (BB = lB()) || void 0 === BB ? void 0 : BB.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var BB;
              const dB = !0 === (null === (BB = lB()) || void 0 === BB ? void 0 : BB.inPlayback);
              dB !== iB && (iB = dB, gB.h.yH("connectedGameChanged")), TB.fire()
            },
            recorderChanged: VB.fire,
            keyDown: BB => {
              var TB;
              switch (BB) {
                case "recordGame":
                  return void vB.toggleRecording();
                case "recordClip":
                  return void((0, oT.d)() || vB.saveClip())
              }(0, bT.c)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, oT.d)() || !0 === (null === (TB = lB()) || void 0 === TB ? void 0 : TB.inPlayback)) && mB(BB) : HB("toggle"))
            }
          }
        }
      }({
        runtime: yB.f,
        cameraView: () => {
          var BB;
          const TB = null === (BB = (0, lB.i)()) || void 0 === BB ? void 0 : BB.renderFrame;
          if (!TB) return null;
          const [dB, VB, yB] = TB.cameraPosition, [pB, JB, YB] = TB.cameraDirection;
          return {
            position: [dB, VB, yB],
            direction: [pB, JB, YB]
          }
        },
        canvas: () => {
          var BB, TB, dB;
          return null !== (BB = null === (TB = (dB = (0, pB.N)()).canvas) || void 0 === TB ? void 0 : TB.call(dB)) && void 0 !== BB ? BB : null
        },
        freecam: yB.e
      }),
      Kd = {
        states: {
          ...VT,
          ...JT.g,
          ...Fd.states,
          ...pd
        },
        events: {
          ...yT,
          ...HB,
          ...JT.c,
          ...zB.d,
          ...md.k,
          ...Fd.events,
          ...ld,
          ...MB.g
        },
        commands: {
          ...sB,
          ...pT,
          ...EB,
          ...JT.b,
          ...WT,
          ...vd,
          ...MB.e,
          ...KT,
          ...Fd.commands,
          ...Od
        },
        queries: {
          ...JT.d,
          ...Ud
        },
        lookups: {
          ...lT,
          ...SB,
          ...md.m,
          ...Fd.lookups,
          ...fB,
          ...jT
        }
      };

    function rd() {
      (0, JB.e)(uB.q), (0, yB.i)(Fd.feed), (0, zB.f)(), hT || (hT = !0, (0, uB.n)(KB.l, (BB => {
        const TB = (0, IB.f)(KB.l, BB);
        "string" === typeof TB && Promise.resolve().then((() => dB(3145))).then((BB => {
          let {
            onCosmeticPackGranted: dB
          } = BB;
          dB(TB)
        }))
      })), (0, uB.n)(KB.fb, (BB => {
        const TB = (0, IB.f)(KB.fb, BB);
        "number" === typeof TB && gB.h.yH("serverUpdating", Date.now() + TB, !0)
      })), (0, uB.n)(KB.F, (BB => {
        const TB = (0, IB.f)(KB.F, BB);
        if ((0, IB.e)(TB)) {
          const {
            DB: BB,
            uB: dB
          } = TB;
          (0, ZT.e)({
            DB: "string" === typeof BB ? BB : null,
            uB: "string" === typeof dB ? dB : null
          })
        }
      })), (0, uB.n)(oB.Jb.NewUiRequest, (BB => {
        const TB = (0, IB.h)(BB);
        (0, IB.e)(TB) && "number" === typeof TB.id && (0, IB.e)(TB.clientParameters) && (0, XT.c)(TB.id, TB.clientParameters)
      })), (0, uB.n)(KB.Y, (BB => {
        const TB = (0, IB.f)(KB.Y, BB);
        "number" === typeof TB && (0, XT.g)(TB)
      })), (0, uB.m)(XT.b), (0, uB.n)(oB.Jb.UiRequestPopup, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB) && "number" === typeof TB.id && "string" === typeof TB.text) {
          const BB = TB.id;
          (0, XT.i)(BB, TB.text, (TB => {
            WT.answerUiRequest({
              id: BB,
              po: TB
            })
          }))
        }
      })), (0, uB.n)(oB.Jb.TopRightHelper, (BB => {
        const TB = (0, IB.h)(BB);
        void 0 !== TB && gB.h.yH("TopRightHelper", TB, !0)
      })), (0, uB.n)(oB.Jb.TaskProgress, (BB => {
        const TB = (0, IB.h)(BB);
        (0, IB.e)(TB) && "string" === typeof TB.taskId && "number" === typeof TB.progress && (0, aT.d)({
          taskId: TB.taskId,
          progress: TB.progress
        })
      }))), Dd || (Dd = !0, (0, uB.n)(KB.r, (BB => {
        const TB = (0, IB.f)(KB.r, BB);
        (0, IB.e)(TB) && gB.h.yH("showShopFromServer", {
          toggle: TB.od,
          kd: TB.kd
        }, !0)
      })), (0, uB.n)(oB.Jb.OverShopInfo, (BB => {
        const TB = (0, IB.h)(BB);
        (0, IB.e)(TB) && gB.h.yH("overShopInfo", TB.info, !0)
      })), (0, uB.n)(oB.Jb.ShowShopTutorial, (() => {
        gB.h.yH("showShopTutorial", null, !0)
      }))), kd || (kd = !0, (0, uB.i)((() => {
        var BB;
        (0, Jd.y)(), null === (BB = Ld) || void 0 === BB || BB(), Ld = (0, uB.e)() ? (0, gd.c)(uB.e) : null
      })), (0, uB.n)(oB.Jb.SetCookie, (BB => {
        const TB = (0, IB.h)(BB),
          dB = (0, wT.e)().gameNameWithVariation;
        (0, IB.e)(TB) && "string" === typeof TB.key && null !== dB && (0, Yd.setCookie)(dB, TB.key, TB.value)
      })), (0, uB.n)(oB.Jb.LeaveValues, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB) && "string" === typeof TB.leaveEventType) {
          const {
            leaveEventType: BB,
            category: dB,
            subCategory: VB,
            value: yB
          } = TB;
          (0, Jd.C)({
            leaveEventType: BB,
            category: dB,
            subCategory: VB,
            value: yB
          })
        }
      })), (0, uB.n)(oB.Jb.CustomAnalyticsEvent, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB) && "string" === typeof TB.cat1) {
          const {
            cat1: BB,
            cat2: dB,
            cat3: VB,
            value: yB
          } = TB;
          (0, Jd.p)({
            cat1: BB,
            cat2: dB,
            cat3: VB,
            value: yB
          })
        }
      })), (0, uB.n)(oB.Jb.ProgressionEvent, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB)) {
          const {
            type: BB,
            location1: dB,
            location2: VB,
            location3: yB,
            score: pB
          } = TB;
          (0, Jd.t)({
            type: BB,
            location1: dB,
            location2: VB,
            location3: yB,
            score: pB
          })
        }
      })), (0, uB.n)(oB.Jb.ResourceEvent, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB)) {
          const {
            type: BB,
            resourceType: dB,
            amount: VB,
            category: yB,
            itemName: pB
          } = TB;
          (0, Jd.u)({
            type: BB,
            resourceType: dB,
            amount: VB,
            category: yB,
            itemName: pB
          })
        }
      })), (0, uB.n)(oB.Jb.LeaderboardResponse, (BB => {
        const TB = (0, IB.h)(BB);
        if ((0, IB.e)(TB)) {
          const {
            category: BB,
            timeframe: dB,
            data: VB
          } = TB;
          gB.h.yH("leaderboardResponse", {
            category: BB,
            timeframe: dB,
            data: VB
          })
        }
      })), (0, uB.n)(KB.y, (BB => {
        const TB = (0, IB.f)(KB.y, BB);
        "string" === typeof TB && (0, od.b)(BB.conn, TB)
      })), (0, uB.n)(KB.z, (BB => {
        const TB = (0, IB.f)(KB.z, BB);
        "string" === typeof TB && console.error(`[logErrorToConsole]: ${TB}`)
      }))), QB(), (0, md.d)(), FT || (FT = !0, (0, uB.n)(KB.i, (BB => {
        const TB = (0, IB.f)(KB.i, BB);
        void 0 !== TB && (0, UT.i)(TB)
      }))), RT(), tT(), ZB || (ZB = !0, (0, pB.v)(XB)), VB.gameBridge.attach(Kd), (0, VB.installPageSources)({
        commands: {
          ...VB.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: td.h
        },
        queries: sd.wasmIconQueries,
        lookups: {
          ...VB.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...sd.wasmIconLookups,
          Tm: td.e,
          drawCallStats: fd
        }
      }), (0, Nd.c)(), (0, sd.loadIcons)()
    }
  },
  39467: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => JB
    });
    var VB = dB(39470);
    let yB = null,
      pB = null;

    function lB() {
      return yB ??= dB.e(54).then((() => dB(41310))).catch((BB => {
        throw yB = null, BB
      })), yB
    }

    function JB() {
      return pB ??= Promise.all([lB(), (0, VB.f)()]).then((BB => {
        let [TB] = BB;
        return TB
      }), (BB => {
        throw pB = null, BB
      })), pB
    }
  },
  36e3: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
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
  8746: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      d: () => pB
    });
    var VB = dB(8698);
    const yB = "Air",
      pB = Object.freeze(new VB.h(yB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35832: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      d: () => yB,
      g: () => pB,
      i: () => LB,
      m: () => JB,
      p: () => YB,
      s: () => gB,
      v: () => kB,
      z: () => oB
    });
    var VB = dB(1117);
    let yB = function(BB) {
        return BB[BB.Join = 0] = "Join", BB[BB.Leave = 1] = "Leave", BB[BB.Push = 2] = "Push", BB[BB.Cursor = 3] = "Cursor", BB[BB.Submit = 4] = "Submit", BB[BB.ReloadAsVariation = 5] = "ReloadAsVariation", BB[BB.CreateFile = 6] = "CreateFile", BB[BB.RenameFile = 7] = "RenameFile", BB[BB.DeleteFile = 8] = "DeleteFile", BB[BB.SetEngine = 9] = "SetEngine", BB[BB.RenameFolder = 10] = "RenameFolder", BB
      }({}),
      pB = function(BB) {
        return BB[BB.Joined = 0] = "Joined", BB[BB.Updates = 1] = "Updates", BB[BB.Presence = 2] = "Presence", BB[BB.RemoteCursor = 3] = "RemoteCursor", BB[BB.ForceClose = 4] = "ForceClose", BB[BB.LobbyFilesChanged = 5] = "LobbyFilesChanged", BB[BB.EngineSettings = 6] = "EngineSettings", BB
      }({});

    function lB(BB) {
      return "lobby" === BB.kind ? `lobby:${BB.path}` : `codeBlock:${BB.pos[0]},${BB.pos[1]},${BB.pos[2]}`
    }

    function JB(BB) {
      if ("lobby" === BB) return {
        kind: "lobby",
        path: VB.f
      };
      if (BB.startsWith("lobby:")) {
        const TB = BB.slice(6);
        return kB(TB) ? {
          kind: "lobby",
          path: TB
        } : null
      }
      const TB = BB.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return TB ? {
        kind: "codeBlock",
        pos: [parseInt(TB[1]), parseInt(TB[2]), parseInt(TB[3])]
      } : null
    }

    function YB(BB) {
      return BB.endsWith(".d.ts")
    }

    function gB(BB) {
      return BB.endsWith(".ts") && !YB(BB)
    }
    const oB = 64;

    function kB(BB) {
      if (!BB || BB !== BB.trim()) return !1;
      if (BB.length > oB) return !1;
      if (BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) return !1;
      if (!YB(BB) && !gB(BB) && ! function(BB) {
          return BB.endsWith(".js") && !BB.endsWith(".min.js") && !BB.endsWith(".bundle.js")
        }(BB)) return !1;
      const TB = BB.split("/");
      for (const dB of TB)
        if ("" === dB || "." === dB || ".." === dB) return !1;
      return !0
    }
    const LB = 14e3
  },
  37983: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      i: () => yB
    });
    const VB = ["description", "label"];

    function yB(BB) {
      const TB = BB.type;
      return {
        type: TB,
        params: BB[TB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);