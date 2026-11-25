export const id = 47;
export const ids = [47];
export const modules = {
  39693: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => oB,
      d: () => JB
    });
    const TB = 6e3;

    function JB(BB, IB) {
      return [Math.floor(BB[0] / IB) * IB, Math.floor(BB[1] / IB) * IB, Math.floor(BB[2] / IB) * IB]
    }

    function oB(BB) {
      const IB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
      return IB && IB.length >= 3 ? [Number(IB[0]), Number(IB[1]), Number(IB[2])] : null
    }

    function GB(BB, IB) {
      return BB === IB ? String(BB) : `${BB}-${IB}`
    }

    function vB(BB, IB, ZB, TB) {
      const JB = [];
      let oB = new Map;
      for (let GB = BB[2]; GB < BB[2] + IB; GB++) {
        const vB = new Map;
        let kB = BB[0];
        for (; kB < BB[0] + IB;) {
          const JB = TB(kB, ZB, GB);
          let cB = kB;
          for (; cB + 1 < BB[0] + IB && TB(cB + 1, ZB, GB) === JB;) cB++;
          if (null !== JB) {
            const BB = `${kB} ${cB} ${JB}`,
              IB = oB.get(BB);
            IB ? (IB.z1 = GB, oB.delete(BB), vB.set(BB, IB)) : vB.set(BB, {
              x0: kB,
              x1: cB,
              z0: GB,
              z1: GB,
              name: JB
            })
          }
          kB = cB + 1
        }
        JB.push(...oB.values()), oB = vB
      }
      return JB.push(...oB.values()), JB.sort(((BB, IB) => BB.z0 - IB.z0 || BB.x0 - IB.x0)).map((BB => `x${GB(BB.x0,BB.x1)} z${GB(BB.z0,BB.z1)} ${BB.name}`))
    }

    function kB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TB;
      const kB = [BB[0] + IB - 1, BB[1] + IB - 1, BB[2] + IB - 1],
        cB = null !== JB && JB.every(((IB, ZB) => Math.floor(IB) >= BB[ZB] && Math.floor(IB) <= kB[ZB])),
        nB = [`The chunk from ${BB.join(" ")} to ${kB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== JB && nB.push(`The player's feet are at ${JB.map(Math.floor).join(" ")}, ${cB?"in this chunk":"outside this chunk"}.`);
      const hB = [];
      for (let TB = BB[1]; TB <= kB[1]; TB++) {
        const JB = vB(BB, IB, TB, ZB).join("; "),
          oB = hB[hB.length - 1];
        (null === oB || void 0 === oB ? void 0 : oB.boxes) === JB ? oB.to = TB : hB.push({
          from: TB,
          to: TB,
          boxes: JB
        })
      }
      const zB = hB.filter((BB => "" !== BB.boxes));
      0 === zB.length && nB.push("It is all air.");
      let FB = nB.join("\n").length;
      for (const TB of zB) {
        const BB = `y${GB(TB.from,TB.to)}: ${TB.boxes}`;
        if (FB += BB.length + 1, FB > oB) {
          nB.push(`Cut short: the layers from y${TB.from} up aren't shown, as there are too many blocks.`);
          break
        }
        nB.push(BB)
      }
      return nB.join("\n")
    }
  },
  8904: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(20);

    function JB() {
      return !TB.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36976: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      i: () => JB
    });
    const TB = [.25, .5, 1, 2, 4, 8, 16];

    function JB(BB, IB) {
      const ZB = TB;
      let JB = ZB.indexOf(BB);
      return -1 === JB && (JB = ZB.findIndex((IB => IB >= BB)), -1 === JB && (JB = ZB.length - 1)), "up" === IB ? ZB[Math.min(JB + 1, ZB.length - 1)] : ZB[Math.max(JB - 1, 0)]
    }

    function oB(BB) {
      return BB <= TB[0]
    }

    function GB(BB) {
      return BB >= TB[TB.length - 1]
    }
  },
  39152: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      e: () => GB
    });
    var TB = ZB(24);
    let JB = !1;

    function oB() {
      return JB
    }

    function GB(BB) {
      JB !== BB && (JB = BB, TB.l.Gq("replayViewer|videoExportChanged"))
    }
  },
  36529: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => oB
    });
    let TB = !1;

    function JB() {
      return TB
    }

    function oB(BB) {
      return TB !== BB && (TB = BB, !0)
    }
  },
  39082: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(24),
      JB = ZB(2029);

    function oB(BB) {
      let {
        taskId: IB,
        progress: ZB
      } = BB;
      const TB = JB.c.get("_tasks");
      null !== TB && void 0 !== TB && TB[IB] && JB.c.apply({
        _tasks: {
          ...TB,
          [IB]: {
            ...TB[IB],
            progress: ZB
          }
        }
      })
    }
    TB.l.subscribe("clientTaskProgress", (BB => {
      oB(BB)
    }))
  },
  39671: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      d: () => NB,
      e: () => cB,
      h: () => hB,
      l: () => kB,
      m: () => GB,
      o: () => nB,
      s: () => gB
    });
    var TB = ZB(2029),
      JB = ZB(24),
      oB = ZB(2046);
    const GB = (0, oB.h)((function() {
        var BB, IB, ZB, JB;
        return {
          health: null !== (BB = TB.c.get("_health")) && void 0 !== BB ? BB : null,
          maxHealth: null !== (IB = TB.c.get("_totalMaxHealth")) && void 0 !== IB ? IB : null,
          shield: null !== (ZB = TB.c.get("_shield")) && void 0 !== ZB ? ZB : null,
          maxShield: null !== (JB = TB.c.get("maxShield")) && void 0 !== JB ? JB : null
        }
      }), [], (0, oB.f)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      vB = [{
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

    function kB(BB, IB) {
      return vB[(BB ? 2 : 0) + (IB ? 1 : 0)]
    }
    const cB = (0, oB.h)((function() {
      var BB;
      return null !== (BB = TB.c.get("_aura")) && void 0 !== BB ? BB : null
    }), [], (0, oB.f)("_aura"));

    function nB(BB) {
      return {
        watch: IB => (0, JB.p)("shotPlayer", (ZB => {
          let {
            playerId: TB,
            damage: JB,
            wasCrit: oB,
            distance: GB
          } = ZB;
          BB(TB) && IB({
            damage: JB,
            wasCrit: oB,
            distance: GB
          })
        }))
      }
    }

    function hB(BB) {
      return (0, oB.b)("chat", (IB => {
        let {
          serverChatMsgId: ZB,
          content: TB,
          chatterEId: JB
        } = IB;
        return {
          serverChatMsgId: null !== ZB && void 0 !== ZB ? ZB : null,
          content: TB,
          author: JB ? BB(JB) : null
        }
      }))
    }
    class zB {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ZB = this.shown;
        return BB !== this.needed && (this.needed = BB, this.neededSince = IB, null === BB && (this.shown = null)), this.shown !== this.needed && IB - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ZB
      }
    }

    function FB(BB) {
      return [{
        translationKey: `touchKeys:${BB}`
      }]
    }
    const NB = {
      open: FB("open"),
      close: FB("close"),
      milk: FB("milk"),
      shear: FB("shear"),
      tame: FB("tame"),
      feed: FB("feed"),
      ride: FB("ride")
    };

    function gB(BB) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: BB
      }]
    }
  },
  41071: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => GB
    });
    var TB = ZB(3470);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= ZB.e(216).then((() => ZB(36340))).then((BB => {
        let {
          ITEM_SPRITES: IB,
          ITEM_SPRITES_WITHOUT_FILE: ZB,
          ITEM_FILES_WITHOUT_SPRITE: oB
        } = BB;
        JB = function(BB, IB, ZB) {
          const JB = new Set,
            oB = (0, TB.t)(IB);
          let GB = 0;
          for (const [TB, vB] of BB.entries()) TB === oB[GB] ? GB++ : JB.add(vB);
          if ("" !== ZB)
            for (const vB of ZB.split(TB.o)) JB.add(vB);
          return JB
        }(IB.split(TB.o), ZB, oB)
      }), (BB => {
        throw oB = null, BB
      })), oB
    }

    function vB(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = JB) || void 0 === ZB ? void 0 : ZB.has(BB)) && void 0 !== IB && IB
    }
  },
  39683: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      g: () => oB,
      k: () => JB
    });
    const TB = 128;

    function JB(BB, IB, ZB, TB) {
      const JB = 2 * IB - 1,
        oB = 1 - 2 * ZB,
        GB = BB(0) - JB * BB(3),
        vB = BB(4) - JB * BB(7),
        kB = BB(8) - JB * BB(11),
        cB = BB(1) - oB * BB(3),
        nB = BB(5) - oB * BB(7),
        hB = BB(9) - oB * BB(11);
      TB[0] = vB * hB - kB * nB, TB[1] = kB * cB - GB * hB, TB[2] = GB * nB - vB * cB;
      const zB = TB[0] * BB(3) + TB[1] * BB(7) + TB[2] * BB(11) < 0 ? -1 : 1,
        FB = Math.hypot(TB[0], TB[1], TB[2]) * zB;
      return TB[0] /= FB, TB[1] /= FB, TB[2] /= FB, TB
    }

    function oB(BB, IB, ZB, TB, JB, oB) {
      const GB = [Math.floor(IB[0]), Math.floor(IB[1]), Math.floor(IB[2])],
        vB = [0, 0, 0],
        kB = [1 / 0, 1 / 0, 1 / 0],
        cB = [1 / 0, 1 / 0, 1 / 0];
      for (let zB = 0; zB < 3; zB++) vB[zB] = Math.sign(ZB[zB]), 0 !== vB[zB] && (cB[zB] = Math.abs(1 / ZB[zB]), kB[zB] = (GB[zB] + (vB[zB] > 0 ? 1 : 0) - IB[zB]) / ZB[zB]);
      let nB = 0,
        hB = Math.abs(ZB[0]) > Math.abs(ZB[1]) ? 0 : 1;
      for (Math.abs(ZB[2]) > Math.abs(ZB[hB]) && (hB = 2); nB <= TB;) {
        if (BB(GB[0], GB[1], GB[2])) return JB[0] = GB[0], JB[1] = GB[1], JB[2] = GB[2], oB[0] = 0, oB[1] = 0, oB[2] = 0, oB[hB] = -vB[hB], !0;
        hB = kB[0] < kB[1] ? 0 : 1, kB[2] < kB[hB] && (hB = 2), nB = kB[hB], GB[hB] += vB[hB], kB[hB] += cB[hB]
      }
      return !1
    }
  },
  39668: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(1956);

    function JB(BB, IB, ZB) {
      return (0, TB.p)(BB, IB) < ZB
    }
  },
  8843: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(1317);

    function JB(BB, IB) {
      var ZB, JB;
      try {
        const ZB = (0, TB.d)();
        if ("function" === typeof ZB) {
          const TB = new ZB(BB, IB);
          if (TB.type === BB) return TB
        }
      } catch {}
      const oB = document.createEvent("Event");
      return oB.initEvent(BB, null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.bubbles) && void 0 !== ZB && ZB, null !== (JB = null === IB || void 0 === IB ? void 0 : IB.cancelable) && void 0 !== JB && JB), oB
    }
  },
  36492: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      f: () => nB,
      h: () => FB,
      l: () => hB
    });
    var TB = ZB(360),
      JB = ZB(694),
      oB = ZB(700),
      GB = ZB(36);
    const vB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      kB = "playSessionGameNameWithVariation",
      cB = "wasMatchmakePlayer";

    function nB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      (0, oB.i)(BB, vB)
    }

    function hB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).setItem(cB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      return (0, oB.c)(BB, vB)
    }

    function FB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB.n;
      const ZB = (0, oB.c)(IB, vB),
        nB = function(BB) {
          const IB = BB.getItem(kB);
          return "string" !== typeof IB ? null : IB
        }(IB),
        hB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).getItem(cB)
        }(IB);
      let zB;
      return zB = null !== ZB && null !== nB && (0, oB.e)(IB, vB) && function(BB, IB, ZB) {
          const JB = (0, TB.Vb)(BB),
            oB = (0, TB.Vb)(IB),
            GB = (0, TB.Pb)(BB),
            vB = (0, TB.Pb)(IB);
          return !(JB !== oB || !ZB) || JB === oB && GB === vB
        }(nB, BB, hB) ? ZB : (0, JB.d)(), (0, oB.l)(IB, vB, zB), IB.setItem(kB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).removeItem(cB)
        }(IB), zB
    }
  },
  39076: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB = ZB(1281),
      JB = ZB(1385),
      oB = ZB(20),
      GB = ZB(1370),
      vB = ZB(1382),
      kB = ZB(1579),
      cB = ZB(36492);

    function nB(BB) {
      let {
        jJ: IB,
        PJ: ZB
      } = BB;
      const nB = null !== IB && void 0 !== IB ? IB : (0, vB.c)().gameNameWithVariation;
      (0, TB.D)(nB) && ((0, cB.l)(), (0, GB.$)((() => {
        console.log("Received matchmaking order from game server to game", IB), (0, oB.m)("inGameReplay"), (0, kB.navigatePreserveSearch)((0, JB.b)(nB, null !== ZB && void 0 !== ZB ? ZB : void 0))
      }), "video_start"))
    }
  },
  39247: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(24),
      JB = ZB(2066);

    function oB(BB) {
      var IB, ZB;
      const oB = (0, JB.n)(null !== (IB = null === (ZB = JB.u.toggleFreeCam) || void 0 === ZB ? void 0 : ZB[0]) && void 0 !== IB ? IB : null);
      TB.l.Gq("showBottomMessage", {
        message: `Free Camera ${BB?"Enabled":"Disabled"}${oB?` - Press ${oB} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39067: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      f: () => GB,
      j: () => vB,
      k: () => cB
    });
    var TB = ZB(24),
      JB = ZB(1403);
    const oB = new Map;

    function GB(BB, IB) {
      TB.l.Gq("newUiRequest", {
        id: BB,
        clientParameters: IB
      }, !0)
    }

    function vB(BB) {
      TB.l.Gq("removeUiRequest", BB, !0);
      const IB = oB.get(BB);
      IB && (IB.tearDownNotification(), oB.delete(BB))
    }

    function kB() {
      TB.l.Gq("clearUiRequests");
      for (const BB of oB.values()) BB.tearDownNotification();
      oB.clear()
    }

    function cB(BB, IB, ZB, TB) {
      const GB = JB.NotificationProvider.showPromptPopup({
        title: IB,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZB,
        unlockPointerKey: "uiRequestPopup"
      });
      oB.set(BB, GB), GB.getResult().then((IB => {
        oB.delete(BB), "notificationTornDown" !== IB && TB(IB)
      }))
    }
  },
  39689: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB,
      d: () => zB
    });
    var TB = ZB(201),
      JB = ZB(39693);
    const oB = 20;

    function GB(BB) {
      return BB.map(Math.floor).join(" ")
    }

    function vB(BB) {
      return null === BB.amount || 1 === BB.amount ? BB.name : `${BB.amount} ${BB.name}`
    }
    var kB = ZB(39701),
      cB = ZB(2029),
      nB = ZB(1382);

    function hB(BB, IB) {
      if (!BB) return kB.d;
      const ZB = BB.playerFeet();
      if (!ZB) return "The player isn't in the world yet, so no blocks can be seen.";
      const oB = TB.f.YN,
        GB = (0, JB.d)(null !== IB && void 0 !== IB ? IB : ZB, oB),
        vB = BB.chunkBlocks(GB);
      return vB ? (0, JB.b)(GB, oB, ((IB, ZB, TB) => {
        const JB = vB(IB, ZB, TB);
        return 0 === JB ? null : BB.blockName(JB).split("|")[0]
      }), ZB) : `The chunk from ${GB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZB.map(Math.floor).join(" ")}.`
    }

    function zB(BB) {
      var IB, ZB, TB;
      if (!BB) return kB.g;
      const JB = BB.playerFeet();
      if (!JB) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: hB,
        heldSlot: zB
      } = BB.inventory();
      return function(BB) {
        const IB = [];
        null !== BB.game && IB.push(`Game: ${BB.game}.`);
        const ZB = null === BB.health ? "" : `, health ${Math.round(BB.health)}${null===BB.maxHealth?"":` of ${Math.round(BB.maxHealth)}`}`;
        IB.push(`The player (the creator) stands at ${GB(BB.position)}${ZB}, ${BB.creative?"in":"not in"} creative mode.`);
        const TB = BB.slots[BB.heldSlot];
        IB.push(TB ? `Holding (slot ${BB.heldSlot}): ${vB(TB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
        const JB = BB.slots.flatMap(((BB, IB) => BB ? [`slot ${IB}: ${vB(BB)}`] : []));
        IB.push(JB.length > 0 ? `Inventory: ${JB.join(", ")}.` : "Inventory: empty.");
        const kB = IB => Math.hypot(IB.position[0] - BB.position[0], IB.position[1] - BB.position[1], IB.position[2] - BB.position[2]),
          cB = [...BB.nearby].sort(((BB, IB) => kB(BB) - kB(IB)));
        if (0 === cB.length) IB.push("No other players or mobs are near enough to see.");
        else {
          IB.push("Near them, nearest first:");
          for (const BB of cB.slice(0, oB)) {
            const ZB = "player" === BB.kind ? `player "${BB.name||"?"}"` : BB.name && BB.name !== BB.kind ? `${BB.kind} "${BB.name}"` : BB.kind,
              TB = Math.round(kB(BB));
            IB.push(`- ${ZB} at ${GB(BB.position)}, ${TB} block${1===TB?"":"s"} away`)
          }
          cB.length > oB && IB.push(`- and ${cB.length-oB} more further away`)
        }
        return BB.droppedItems > 0 && IB.push(`${BB.droppedItems} dropped item${1===BB.droppedItems?" is":"s are"} on the ground nearby.`), IB.join("\n")
      }({
        game: null !== (IB = (0, nB.c)().gameNameWithVariation) && void 0 !== IB ? IB : null,
        position: JB,
        health: null !== (ZB = cB.c.get("_health")) && void 0 !== ZB ? ZB : null,
        maxHealth: null !== (TB = cB.c.get("_totalMaxHealth")) && void 0 !== TB ? TB : null,
        creative: !0 === cB.c.get("creative"),
        heldSlot: zB,
        slots: hB,
        nearby: BB.nearby(),
        droppedItems: BB.droppedItems()
      })
    }
  },
  40901: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => PB,
      C: () => jB,
      D: () => DB,
      G: () => rB,
      K: () => aB,
      L: () => RB,
      P: () => pB,
      S: () => AB,
      T: () => lB,
      U: () => MB,
      c: () => tB,
      e: () => XB,
      h: () => YB,
      l: () => bB,
      p: () => iB,
      t: () => OB,
      v: () => mB,
      z: () => HB
    });
    var TB = ZB(1454),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(2481),
      vB = ZB(4990),
      kB = ZB(4958);
    let cB, nB = !1,
      hB = !1,
      zB = !1,
      FB = !1;
    const NB = 1300,
      gB = 3e3;
    let qB = 0,
      yB = !1,
      UB = !1,
      WB = 0;
    const dB = 2;
    let CB = !1,
      QB = !1;
    const sB = new Set,
      wB = new Set;

    function OB() {
      return nB
    }

    function YB() {
      return UB
    }

    function iB() {
      return QB
    }

    function pB() {
      return (0, oB.w)() && !QB
    }

    function aB(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== QB) {
        QB = BB;
        for (const BB of [...wB]) BB(QB);
        IB && lB()
      }
    }

    function HB(BB) {
      return wB.add(BB), () => {
        wB.delete(BB)
      }
    }

    function MB() {
      (0, vB.f)(GB.o.Menu, (0, oB.w)() ? 0 : GB.o.Menu)
    }

    function jB() {
      UB = !1, WB = 0, MB(), lB()
    }

    function PB(BB) {
      return sB.add(BB), () => {
        sB.delete(BB)
      }
    }

    function RB(BB) {
      hB = !1, BB !== nB && (nB = BB, FB = !1, clearTimeout(cB), zB = !nB && CB, nB ? (yB = !1, UB = !1, WB = 0) : pB() && !CB && (UB = !0), CB = !1, nB && !pB() && EB(), KB(), zB && lB())
    }

    function rB(BB) {
      BB !== yB && (yB = BB, BB || lB())
    }

    function mB() {
      hB = !1, FB || !0 !== uB() || (FB = !0, clearTimeout(cB), cB = setTimeout(LB, NB))
    }

    function XB() {
      return (!hB || performance.now() - qB > gB) && (hB = (0, kB.H)().lockPointer(), qB = performance.now()), hB
    }

    function LB() {
      eB() && fB() && XB()
    }

    function eB() {
      return pB() && !nB && !yB && !(0, TB.j)()
    }

    function uB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function fB() {
      return zB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== uB()
    }

    function lB() {
      pB() ? eB() && !UB && fB() && XB() : nB && !CB && EB()
    }

    function AB() {
      UB ? navigator.vendor.startsWith("Apple") ? xB() : WB = dB : lB()
    }

    function tB() {
      WB > 0 && 0 === --WB && xB()
    }

    function bB() {
      WB = 0
    }

    function xB() {
      eB() && !0 === uB() && XB()
    }

    function EB() {
      CB = !0, (0, kB.H)().unlockPointer()
    }

    function DB() {
      hB = !1, zB = !1, FB = !1, clearTimeout(cB), yB = !1, UB = !1, WB = 0, CB = !1;
      const BB = nB;
      nB = !1, BB && KB()
    }

    function KB() {
      for (const BB of [...sB]) BB(nB);
      JB.l.Gq("pointerLockUpdate", nB)
    }
  },
  40729: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      f: () => vB,
      h: () => hB,
      k: () => cB,
      l: () => GB,
      o: () => nB,
      p: () => kB
    });
    let TB = null,
      JB = null,
      oB = null;

    function GB(BB) {
      TB = BB
    }

    function vB() {
      return TB
    }

    function kB(BB) {
      JB = BB
    }

    function cB() {
      return JB
    }

    function nB(BB) {
      oB = BB
    }

    function hB() {
      return oB
    }

    function zB() {
      var BB, IB;
      return !0 === (null === (BB = JB) || void 0 === BB || null === (IB = BB.currentViewer) || void 0 === IB ? void 0 : IB.inPlayback)
    }
  },
  41032: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      attachPlayGameSources: () => sT,
      playGameSources: () => QT
    });
    var TB = ZB(1995),
      JB = ZB(40729),
      oB = ZB(4958),
      GB = ZB(40643),
      vB = ZB(41017),
      kB = ZB(39671),
      cB = ZB(24),
      nB = ZB(4975),
      hB = ZB(4969),
      zB = ZB(40682),
      FB = ZB(40710),
      NB = ZB(41037),
      gB = ZB(40692);
    (0, gB.l)(nB.nc.Chat, (BB => {
      if (BB.payloadKind !== hB.nc.Msgpack) return;
      const IB = function(BB) {
        if (null === BB || "object" !== typeof BB || !("content" in BB)) return null;
        const {
          chatMsgId: IB,
          content: ZB,
          chatterEId: TB
        } = BB;
        return {
          serverChatMsgId: null !== IB && void 0 !== IB ? IB : void 0,
          content: ZB,
          chatterEId: void 0 === TB || null === TB ? void 0 : String(TB)
        }
      }((0, zB.e)(BB.payload));
      null !== IB && cB.l.Gq("chat", IB, !0)
    }));
    const qB = {
        chatReceived: (0, kB.h)((function(BB) {
          var IB, ZB, TB;
          return {
            id: BB,
            name: null !== (IB = NB.f.getName(BB)) && void 0 !== IB ? IB : null,
            local: (0, FB.h)() === BB,
            profileEffect: null !== (ZB = null === (TB = (0, NB.j)(BB)) || void 0 === TB ? void 0 : TB.profileEffect) && void 0 !== ZB ? ZB : null
          }
        }))
      },
      yB = {
        sendChatMessage(BB) {
          var IB;
          let {
            Xn: ZB,
            channelName: TB
          } = BB;
          null === (IB = (0, GB.j)()) || void 0 === IB || IB.clientApi.sendChat(ZB, TB)
        }
      };
    var UB = ZB(201),
      WB = ZB(2029),
      dB = ZB(40633),
      CB = ZB(39668);
    const QB = [0, 0, 0],
      sB = {
        codeBlockClickable(BB) {
          var IB;
          const ZB = (0, GB.j)();
          if (null === ZB || void 0 === ZB || !ZB.isSessionLive) return !1;
          const TB = ZB.api;
          if (0 !== (dB.p.playerFlags(TB.apiView, 0) & dB.Bd.Crouching)) return !1;
          const JB = TB.queries.directorEntity(TB.localId) >= dB.gb.BYTES ? TB.memoryData(TB.scratch(), dB.gb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === JB) return !1;
          for (let oB = 0; oB < 3; oB++) QB[oB] = dB.gb.feet(JB, 0, oB);
          return QB[1] += dB.gb.eyeHeight(JB, 0), (0, CB.e)(QB, BB, null !== (IB = WB.c.get("blockReach")) && void 0 !== IB ? IB : UB.f.Aq)
        }
      },
      wB = {
        clickCodeBlock(BB) {
          var IB;
          null === (IB = (0, GB.j)()) || void 0 === IB || IB.clickCodeBlock(BB)
        }
      };
    var OB = ZB(40658),
      YB = ZB(41045),
      iB = ZB(1058),
      pB = ZB(39094),
      aB = ZB(4952),
      HB = ZB(40666),
      MB = ZB(40649),
      jB = ZB(40675);

    function PB(BB) {
      if (null === BB) return null;
      const IB = [];
      for (const ZB of BB) {
        const BB = Object.keys(ZB)[0];
        if ("II" === BB) {
          const {
            str: BB,
            style: TB,
            clickableUrl: JB
          } = ZB.II, oB = Object.keys(BB)[0], GB = BB[oB];
          "string" !== oB && "styledEntityName" !== oB && "styledTranslatedText" !== oB || IB.push({
            str: GB,
            style: TB,
            clickableUrl: JB
          })
        } else IB.push(ZB[BB])
      }
      return IB
    }
    const RB = {
      screenPos(BB) {
        var IB, ZB;
        return null !== (IB = null === (ZB = (0, GB.j)()) || void 0 === ZB ? void 0 : ZB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== IB ? IB : {
          x: 0,
          y: 0
        }
      }
    };
    let rB = !1;

    function mB() {
      rB || (rB = !0, (0, gB.l)(nB.nc.ProgressBarUpdate, (BB => {
        const IB = (0, jB.f)(BB);
        (0, jB.d)(IB) && cB.l.Gq("progressBarUpdate", IB, !0)
      })), (0, gB.l)(HB.t, (BB => {
        const IB = (0, jB.e)(HB.t, BB);
        IB && cB.l.Gq("middleScreenBarInitiate", {
          duration: IB.iJ,
          pJ: IB.pJ,
          horizBarRemOffset: IB.aJ
        }, !0)
      })), (0, gB.l)(nB.nc.RemoveMiddleScreenBar, (() => {
        cB.l.Gq("middleScreenBarRemove")
      })), (0, gB.l)(HB.R, (BB => {
        const IB = (0, jB.e)(HB.R, BB);
        if (IB) {
          var ZB;
          const BB = IB.YB ? null === (ZB = (0, GB.j)()) || void 0 === ZB ? void 0 : ZB.renderFrame.projectDirectionToScreenPos(IB.YB) : void 0;
          cB.l.Gq("sendHitmarker", {
            uI: IB.uI,
            screenPos: BB
          }, !0)
        }
      })), (0, gB.l)(HB.W, (BB => {
        const IB = (0, jB.e)(HB.W, BB);
        if (IB) {
          const {
            id: BB,
            position: ZB,
            style: TB,
            MI: JB,
            RI: oB
          } = IB;
          cB.l.Gq("setDirectionArrow", {
            id: BB,
            position: ZB,
            style: TB,
            text: PB(JB),
            RI: oB
          }, !0)
        }
      })), (0, gB.l)(HB.f, (BB => {
        const IB = (0, jB.e)(HB.f, BB);
        IB && cB.l.Gq("clearDirectionArrow", {
          id: IB.id
        }, !0)
      })), (0, gB.l)(HB.o, (BB => {
        const IB = (0, jB.e)(HB.o, BB);
        IB && cB.l.Gq("flyingMiddleMessage", {
          content: PB(IB.jo),
          Po: IB.Po,
          Ro: IB.Ro
        }, !0)
      })), (0, gB.l)(nB.nc.WorldVariation, (BB => {
        const IB = (0, jB.f)(BB);
        if ("string" === typeof IB) {
          const BB = IB === iB.f ? null : {
            message: `Currently loaded as variation: ${IB}`,
            type: "Warning"
          };
          cB.l.Gq("showPermanentBottomMessage", BB, !0)
        }
      })), (0, gB.l)(HB.C, (BB => {
        const IB = (0, jB.e)(HB.C, BB);
        IB && function(BB, IB) {
          const {
            type: ZB,
            params: TB
          } = (0, pB.i)(IB), JB = {
            ...TB
          };
          for (const oB of pB.e) JB[oB] && (JB[oB] = PB(JB[oB]));
          aB.d.queueQTE(BB, ZB, JB).getResult().then((IB => {
            var ZB;
            "boolean" === typeof IB && (null === (ZB = (0, GB.j)()) || void 0 === ZB || ZB.send(MB.e.QteResponse, {
              qteId: BB,
              qteResponse: IB
            }))
          }))
        }(IB.id, IB.tB)
      })), (0, gB.l)(HB.J, (BB => {
        const IB = (0, jB.e)(HB.J, BB);
        "number" === typeof IB && aB.d.cancelQTE(IB)
      })), (0, gB.g)((() => {
        aB.d.reset()
      })), (0, gB.j)((() => {
        aB.d.reset()
      })), (0, gB.l)(nB.nc.EditItemCraftingRecipes, (BB => {
        const IB = (0, jB.f)(BB);
        (0, jB.d)(IB) && cB.l.Gq("craftingRecipesEdited", {
          itemName: IB.craftingRecipeItemName,
          recipesForItem: IB.recipesForItem
        })
      })), (0, gB.l)(HB.I, (BB => {
        const IB = (0, jB.e)(HB.I, BB);
        IB && cB.l.Gq("craftingRecipesEdited", {
          itemName: IB.YJ,
          recipesForItem: []
        })
      })))
    }
    var XB = ZB(20);
    const LB = [{
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

    function eB(BB) {
      return dB.p.playerFlags(BB.api.apiView, 0)
    }
    const uB = {
        freeCamera: (0, FB.e)((BB => () => {
          const IB = BB.isSessionLive && 0 !== (eB(BB) & dB.Bd.FreeCamMoves),
            ZB = BB.freeCameraAllowed() && null === XB.d.get("scriptedCameraFacing");
          return LB[(ZB ? 2 : 0) + (IB ? 1 : 0)]
        }), LB[0], (BB => (0, oB.s)(BB)))
      },
      fB = {
        setFreeCameraMovesFly: BB => {
          var IB;
          null === (IB = (0, GB.j)()) || void 0 === IB || IB.setFreeCameraMovesFly(BB)
        }
      },
      lB = {
        freeCameraPos: () => {
          const BB = (0, GB.j)();
          return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (eB(BB) & dB.Bd.FreeCam) ? BB.renderFrame.cameraPosition : null
        }
      };
    var AB = ZB(39247);
    let tB = !1,
      bB = !1;

    function xB() {
      const BB = (0, GB.j)();
      if (null === BB || void 0 === BB || !BB.isSessionLive) return void(tB = !1);
      const IB = 0 !== (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.FreeCam);
      IB !== tB && (tB = IB, (0, AB.c)(IB))
    }
    var EB = ZB(360),
      DB = ZB(37060),
      KB = ZB(2046);
    var VB = ZB(41047),
      SB = ZB(40705);
    const BI = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let II = "off";

    function ZI(BB) {
      var IB;
      return null === BB ? null : {
        label: null !== (IB = (0, VB.b)(BB, "interactionPrompt")) && void 0 !== IB ? IB : null
      }
    }
    const TI = new Map([
      [dB.kc.Open, {
        label: kB.d.open
      }],
      [dB.kc.Close, {
        label: kB.d.close
      }],
      [dB.kc.Milk, {
        label: kB.d.milk
      }],
      [dB.kc.Shear, {
        label: kB.d.shear
      }],
      [dB.kc.Tame, {
        label: kB.d.tame
      }],
      [dB.kc.Feed, {
        label: kB.d.feed
      }],
      [dB.kc.Ride, {
        label: kB.d.ride
      }]
    ]);
    class JI {
      constructor() {
        this.target = BI, this.KG = dB.Tc, this.optionName = null, this.pickaxe = new kB.c
      }
      read(BB) {
        var IB;
        const ZB = dB.p.targetBlockId(BB.api.apiView, 0);
        ZB !== this.KG && (this.KG = ZB, this.optionName = ZB === dB.Tc ? null : `${BB.tables.getMetaInfo(ZB).rootName}CrosshairText`);
        const TB = null === this.optionName ? null : null !== (IB = BB.tables.getClientOption(this.optionName)) && void 0 !== IB ? IB : null;
        this.pickaxe.update(function(BB, IB) {
          var ZB, TB, JB;
          if (0 === (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.Breaking) || IB === dB.Tc || 0 === IB) return null;
          const {
            tables: oB
          } = BB;
          if (!0 === oB.getClientOption("creative")) return null;
          const GB = oB.nameOfId(IB),
            vB = null === (ZB = BB.items.sv()) || void 0 === ZB ? void 0 : ZB.name,
            kB = null !== (TB = oB.getItemStat(GB, "harvestLevel")) && void 0 !== TB ? TB : 0;
          return (0, EB.Dc)({
            blockHarvestType: oB.getDefaultItemStat(GB, "harvestType"),
            blockHarvestLevel: oB.getDefaultItemStat(GB, "harvestLevel"),
            harvestLevel: kB,
            heldToolType: void 0 === vB ? void 0 : oB.getDefaultItemStat(vB, "harvests"),
            heldToolLevel: void 0 === vB ? void 0 : oB.getDefaultItemStat(vB, "level")
          }) && null !== (JB = DB.m[kB]) && void 0 !== JB ? JB : null
        }(BB, ZB)), BB.watchPromptPick(II);
        const JB = "touch" === II ? function(BB) {
          var IB;
          const ZB = BB.interactLabel;
          return ZB === dB.kc.Entity ? ZI(BB.promptEntity) : ZB === dB.kc.TameWith ? {
            label: (0, kB.s)(BB.tables.nameOfId(BB.interactIcon))
          } : null !== (IB = TI.get(ZB)) && void 0 !== IB ? IB : null
        }(BB) : ZI(BB.promptEntity);
        return this.target = (0, KB.l)(this.target, {
          interactPrompt: JB,
          blockText: TB,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let oI = null;
    const GI = {
      current: () => {
        var BB, IB;
        return null !== (BB = null === (IB = oI) || void 0 === IB ? void 0 : IB.target) && void 0 !== BB ? BB : BI
      },
      watch: BB => {
        const IB = new JI;
        oI = IB;
        const ZB = (0, FB.k)((ZB => {
          let TB = IB.read(ZB);
          BB(TB);
          const JB = (0, oB.u)((() => {
            const JB = IB.read(ZB);
            JB !== TB && (TB = JB, BB(JB))
          }));
          return () => {
            JB(), ZB.watchPromptPick("off")
          }
        }));
        return () => {
          ZB(), oI === IB && (oI = null)
        }
      }
    };
    let vI = 0,
      kI = 0;
    const cI = {
        health: kB.m,
        aura: kB.e,
        hotbar: SB.c.states.hotbar,
        heldItemAim: SB.c.states.heldItemAim,
        crouching: (0, FB.e)((BB => function(BB) {
          const IB = () => 0 !== (dB.p.playerFlags(BB.apiView, 0) & dB.Bd.Crouching);
          return {
            current: IB,
            watch(BB) {
              let ZB = IB();
              return (0, oB.s)((() => {
                const TB = IB();
                TB !== ZB && (ZB = TB, BB(TB))
              }))
            }
          }
        }(BB.api).current), !1, (BB => (0, oB.s)(BB))),
        flight: (0, FB.e)((BB => () => function(BB) {
          const IB = dB.p.playerFlags(BB.apiView, 0);
          return (0, kB.l)(0 !== (IB & dB.Bd.CanFly), 0 !== (IB & dB.Bd.Flying))
        }(BB.api)), (0, kB.l)(!1, !1), (BB => (0, oB.s)(BB))),
        gliderBoostFuel: (0, FB.e)((BB => () => dB.p.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, oB.s)(BB))),
        crosshairTarget: GI
      },
      nI = {
        hotbarSlotRequested: SB.c.events.hotbarSlotRequested,
        hotbarScrolled: SB.c.events.hotbarScrolled,
        numberKeyPressed: SB.c.events.numberKeyPressed,
        shotDamageToShow: (0, kB.o)((BB => !0 === (0, VB.b)(BB, "showDamageAmounts")))
      },
      hI = {
        selectHotbarSlot: SB.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: BB => {
          II = BB
        }
      },
      zI = {
        momentumFrac: function() {
          var BB, IB, ZB;
          const TB = (0, GB.j)(),
            JB = performance.now(),
            oB = null === TB || void 0 === TB || null === (BB = TB.items.sv()) || void 0 === BB || null === (IB = BB.attributes) || void 0 === IB || null === (ZB = IB.customAttributes) || void 0 === ZB ? void 0 : ZB.enchantments;
          return vI = null !== TB && null !== oB && void 0 !== oB && oB.Momentum ? 0 !== (dB.p.playerFlags(TB.api.apiView, 0) & dB.Bd.Breaking) ? Math.max(0, dB.p.momentumFrac(TB.api.apiView, 0)) : Math.max(0, vI - (JB - kI) / 1500) : 0, kI = JB, vI
        }
      };
    var FI = ZB(40640);
    const NI = {
      lobbyManage(BB) {
        var IB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.LobbyManage, BB)
      }
    };
    var gI = ZB(1300),
      qI = ZB(36529),
      yI = ZB(8904),
      UI = ZB(1711),
      WI = ZB(2481),
      dI = ZB(4978);
    let CI = !1;

    function QI(BB) {
      CI = BB
    }

    function sI() {
      "inGame" !== XB.d.get("gameState") || (0, UI.p)() || cB.l.Gq("ctrlCrouchWithoutFullscreen")
    }
    let wI = !1;
    const OI = {
        OpenEmoteWheel: () => {
          QI(!0), wI = !0, queueMicrotask((() => {
            wI && (wI = !1, cB.l.Gq("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          cB.l.Gq("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, qI.d)() || cB.l.Gq("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, qI.d)() || cB.l.Gq("XKeyPressed")
        },
        CtrlCrouch: sI,
        "primary-fire": () => {
          cB.l.Gq("mouseState", {
            En: gI.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          cB.l.Gq("mouseState", {
            En: gI.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          cB.l.Gq("mouseState", {
            En: gI.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      YI = {
        OpenEmoteWheel: () => {
          QI(!1), wI ? (wI = !1, (0, yI.e)() || cB.l.Gq("requestEmoteWheelHoldOpen")) : cB.l.Gq("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: sI,
        "primary-fire": () => {
          cB.l.Gq("mouseState", {
            En: gI.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          cB.l.Gq("mouseState", {
            En: gI.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          cB.l.Gq("mouseState", {
            En: gI.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let iI = !1;

    function pI() {
      iI || (iI = !0, (0, dI.e)((BB => {
        if ((0, JB.d)()) return;
        const IB = (0, dI.c)(BB) ? "primary-fire" : BB.action;
        var ZB;
        if (BB.down) {
          if (0 === (BB.flags & WI.b.Synthetic)) {
            var TB;
            null === (TB = OI[IB]) || void 0 === TB || TB.call(OI)
          }
        } else null === (ZB = YI[IB]) || void 0 === ZB || ZB.call(YI)
      })))
    }
    var aI = ZB(342),
      HI = ZB(105),
      MI = ZB(36),
      jI = ZB(40901),
      PI = ZB(1382),
      RI = ZB(2510);
    let rI = !1;
    const mI = {
      sendCodeCollab(BB) {
        var IB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.CodeCollab, (0, MB.m)(BB), (0, RI.h)(BB))
      }
    };
    var XI = ZB(39175),
      LI = ZB(8843);
    let eI = null,
      uI = !1,
      fI = null;

    function lI() {
      return "inGame" === XB.d.get("gameState") && !(0, qI.d)()
    }
    const AI = {
        OpenInventory: BB => {
          (0, UI.A)(BB, "inventory", (0, FI.p)())
        },
        OpenShop: BB => {
          eI && lI() && (0, UI.x)(BB, aI.q.SHOP, !eI.shopIsEmpty(WB.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: BB => {
          lI() && (0, UI.x)(BB, aI.q.LOBBY_LEADERBOARD, (0, XI.d)({
            lobbyLeaderboardInfo: WB.c.get("lobbyLeaderboardInfo"),
            lobbyManage: WB.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: BB => {
          var IB;
          const ZB = null === (IB = eI) || void 0 === IB ? void 0 : IB.getClientGameMapKey();
          ZB ? (0, UI.C)(BB, !0, ZB) : (0, UI.A)(BB, "retentionFeatures", !(!WB.c.get("_tasks") && !WB.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: BB => {
          (0, UI.A)(BB, "inviteLink", HI.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: BB => {
          lI() && function(BB) {
            const IB = (0, GB.j)(),
              ZB = null !== IB && void 0 !== IB && IB.isSessionLive ? IB.api : null,
              TB = ZB ? ZB.aU(ZB.localId) : null;
            (0, UI.C)(BB, null !== TB && (0, RI.e)((0, PI.c)()), (() => {
              (0, RI.l)(TB)
            }))
          }(BB)
        },
        HideUi: () => {
          cB.l.Gq("showUi", !1)
        }
      },
      tI = {
        HideUi: () => {
          cB.l.Gq("showUi", !0)
        }
      };

    function bI() {
      uI || (uI = !0, ZB.e(159).then((() => ZB(60666))).then((BB => {
        eI = BB
      }), (BB => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", BB)
      })), (0, jI.A)((BB => {
        BB || !(0, jI.h)() || (0, HI.isMobile)() || !MI.m.getItem("disableFullscreen") || (0, UI.n)() || XB.d.set({
          openEverythingMenuName: aI.q.SETTINGS
        })
      })), (0, dI.e)((BB => {
        let {
          action: IB,
          down: ZB,
          press: TB
        } = BB;
        var oB, GB;
        (0, JB.d)() || (ZB ? null === (oB = AI[IB]) || void 0 === oB || oB.call(AI, function(BB) {
          var IB;
          if (0 === BB || (null === (IB = fI) || void 0 === IB ? void 0 : IB.press) !== BB) {
            const IB = {
              press: BB,
              event: (0, LI.e)("inputAction")
            };
            fI = IB, queueMicrotask((() => {
              fI === IB && (fI = null)
            }))
          }
          return fI.event
        }(TB)) : null === (GB = tI[IB]) || void 0 === GB || GB.call(tI))
      })))
    }
    var xI = ZB(39082),
      EI = ZB(39076),
      DI = ZB(39067);
    const KI = {
      completeTask(BB) {
        var IB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.CompleteTask, (0, MB.o)(BB))
      },
      setServerCookie(BB) {
        var IB;
        let {
          key: ZB,
          value: TB
        } = BB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.GeneralCookieSet, (0, MB.s)({
          Tv: ZB,
          Jv: TB
        }))
      },
      answerUiRequest(BB) {
        var IB;
        let {
          id: ZB,
          Cn: TB
        } = BB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.UiRequestResp, (0, MB.L)({
          vk: ZB,
          kk: TB,
          nk: 5
        }))
      },
      chooseRewardedAd(BB) {
        var IB;
        let {
          id: ZB,
          Cn: TB
        } = BB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.UiRequestResponded, (0, MB.K)({
          id: ZB,
          Cn: TB
        }))
      },
      requestLeaderboard(BB) {
        var IB;
        let {
          category: ZB,
          timeframe: TB,
          seeTop: JB
        } = BB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.LeaderboardRequest, {
          category: ZB,
          timeframe: TB,
          seeTop: JB
        })
      }
    };
    let VI = !1;
    const SI = UB.f.uq / 2,
      BZ = [SI, -SI, -SI, -SI, SI, SI, -SI, SI],
      IZ = [0, 0, 0];

    function ZZ(BB, IB, ZB) {
      for (let TB = 0; TB < BB.length; TB += 2)
        if (BB[TB] === IB && BB[TB + 1] === ZB) return !0;
      return !1
    }
    const TZ = {
      blocksStandingOn: function() {
        const BB = (0, GB.j)();
        if (null === BB) return [];
        const {
          api: IB,
          chunks: ZB,
          tables: TB
        } = BB;
        if (!IB.readPosition(IB.localId, IZ)) return [];
        const [JB, oB, vB] = IZ, kB = Math.ceil(oB) - 1, cB = [], nB = [];
        for (let GB = 0; GB < BZ.length; GB += 2) {
          const BB = JB + BZ[GB],
            IB = vB + BZ[GB + 1];
          if (Number.isInteger(BB) || Number.isInteger(IB)) continue;
          const oB = Math.floor(BB),
            hB = Math.floor(IB);
          if (ZZ(nB, oB, hB)) continue;
          const zB = ZB.KG(oB, kB, hB);
          TB.isSolidBlockId(zB) && (nB.push(oB, hB), cB.push(TB.nameOfId(zB)))
        }
        return cB
      },
      dropAhead: function() {
        const BB = (0, GB.j)();
        return null !== BB && 0 !== (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.DropAhead)
      }
    };
    var JZ = ZB(36976),
      oZ = ZB(39152),
      GZ = ZB(1403),
      vZ = ZB(40715);
    const kZ = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      cZ = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function nZ() {
      const BB = new Set;
      return {
        add: IB => (BB.add(IB), () => {
          BB.delete(IB)
        }),
        fire() {
          for (const IB of BB) IB()
        }
      }
    }
    const hZ = Object.freeze([]);

    function zZ(BB, IB) {
      let ZB, {
        rereads: TB,
        followLocalId: JB
      } = IB;
      const GB = () => (ZB = (0, KB.l)(ZB, BB()), ZB);
      return {
        current: GB,
        watch(BB) {
          const IB = (0, NB.d)((IB => {
            TB(IB) && BB(GB())
          }));
          if (!JB) return IB;
          let ZB = (0, FB.h)();
          const vB = (0, oB.u)((() => {
            const IB = (0, FB.h)();
            IB !== ZB && (ZB = IB, BB(GB()))
          }));
          return () => {
            IB(), vB()
          }
        }
      }
    }
    const FZ = {
        players: zZ((function() {
          const BB = NB.f.ids(),
            IB = {};
          for (const oB of BB) {
            var ZB, TB, JB;
            IB[oB] = {
              name: null !== (ZB = NB.f.getName(oB)) && void 0 !== ZB ? ZB : null,
              ranks: null !== (TB = NB.f.getSetting(oB, "ranks")) && void 0 !== TB ? TB : hZ,
              cosmetics: null !== (JB = (0, NB.j)(oB)) && void 0 !== JB ? JB : null
            }
          }
          return {
            ids: BB,
            byId: IB,
            localId: (0, FB.h)()
          }
        }), {
          rereads: BB => "roster" !== BB.kind || BB.members || BB.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: zZ((function() {
          const BB = {};
          for (const JB of NB.f.ids()) {
            var IB, ZB, TB;
            BB[JB] = {
              colour: null !== (IB = NB.f.getSetting(JB, "colorInLobbyLeaderboard")) && void 0 !== IB ? IB : null,
              values: null !== (ZB = NB.f.getSetting(JB, "lobbyLeaderboardValues")) && void 0 !== ZB ? ZB : null,
              tags: null !== (TB = NB.f.getSetting(JB, "lobbyLeaderboardTags")) && void 0 !== TB ? TB : null
            }
          }
          return BB
        }), {
          rereads: function(BB) {
            if ("roster" !== BB.kind) return "reset" === BB.kind;
            const {
              members: IB,
              settings: ZB
            } = BB;
            return IB || ZB.has("colorInLobbyLeaderboard") || ZB.has("lobbyLeaderboardValues") || ZB.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      NZ = {
        cosmeticsUpdated: {
          watch: BB => (0, NB.d)((IB => {
            if ("cosmetics" !== IB.kind) return;
            const ZB = (0, FB.h)();
            BB(IB.updates.map((BB => {
              let {
                ao: IB,
                Ho: TB,
                Mo: JB
              } = BB;
              return {
                local: IB === ZB,
                Ho: TB,
                Mo: JB
              }
            })))
          }))
        }
      };
    var gZ = ZB(3088),
      qZ = ZB(1805),
      yZ = ZB(696),
      UZ = ZB(40954);
    let WZ = !1,
      dZ = null;
    const CZ = {
      setShopOpen(BB) {
        var IB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.ShopMenuChanged, (0, MB.G)(BB))
      },
      buyShopItem(BB) {
        var IB;
        let {
          categoryKey: ZB,
          itemKey: TB,
          userInput: JB
        } = BB;
        null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.ItemBought, {
          categoryKey: ZB,
          itemKey: TB,
          shopVersion: WB.c.get("_shopVersion"),
          userInput: JB
        })
      }
    };
    let QZ = !1;
    var sZ = ZB(4990);
    const wZ = WI.o.LookFrozen | WI.o.ClicksSuppressed;

    function OZ(BB, IB) {
      var ZB;
      null !== (ZB = (0, GB.j)()) && void 0 !== ZB && ZB.send(BB, IB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
    }(0, gB.l)(HB.Z, (BB => {
      const IB = (0, jB.e)(HB.Z, BB);
      void 0 !== IB && cB.l.Gq("setDiscordReportKey", IB)
    }));
    const YZ = {
      ignorePlayer(BB) {
        OZ(MB.e.IgnoreUser, (0, MB.t)({
          hk: BB
        }))
      },
      reportPlayer(BB) {
        let {
          playerId: IB,
          chatMsgId: ZB,
          ov: TB,
          details: JB
        } = BB;
        OZ(MB.e.UserReport, (0, MB.T)({
          Un: IB,
          Wn: ZB,
          ov: TB,
          Gv: JB
        }))
      },
      reportWorldCodeChat(BB) {
        let {
          chatMsgId: IB,
          ov: ZB,
          details: TB
        } = BB;
        OZ(MB.e.UserReport, (0, MB.T)({
          Un: "",
          Wn: IB,
          ov: ZB,
          Gv: TB
        }))
      },
      requestDiscordReportKey(BB) {
        OZ(MB.e.ReqDiscordReportKey, (0, MB.B)(BB))
      },
      reportLobbyOrGame(BB) {
        let {
          target: IB,
          ov: ZB,
          details: TB
        } = BB;
        "customGame" === IB ? OZ(MB.e.CustomGameReport, (0, MB.q)({
          ov: ZB,
          Gv: TB
        })) : OZ(MB.e.LobbyReport, (0, MB.v)({
          ov: ZB,
          Gv: TB
        }))
      },
      updateMyCosmetic(BB) {
        OZ(MB.e.UpdateMyCosmetic, (0, MB.R)(BB))
      },
      holdEmoteWheel(BB) {
        !BB || CI ? (0, sZ.f)(wZ, BB ? wZ : 0) : cB.l.Gq("requestEmoteWheelHoldRelease")
      }
    };
    var iZ = ZB(41049),
      pZ = ZB(9296),
      aZ = ZB(39683);
    const HZ = [0, 0, 0],
      MZ = [0, 0, 0],
      jZ = [0, 0, 0],
      PZ = {
        blockAtViewPoint(BB) {
          let {
            x: IB,
            y: ZB
          } = BB;
          const TB = (0, GB.j)();
          if (null === TB || void 0 === TB || !TB.renderFrame.hasView) return null;
          const {
            renderFrame: JB,
            clientApi: oB,
            api: vB
          } = TB;
          let kB = 0;
          return (0, aZ.g)(((BB, IB, ZB) => (kB = oB.getBlockId(BB, IB, ZB), 0 !== kB)), JB.cameraPosition, (0, aZ.k)((BB => dB.p.viewProj(vB.apiView, 0, BB)), IB, ZB, HZ), aZ.e, MZ, jZ) ? {
            pos: [MZ[0], MZ[1], MZ[2]],
            normal: [jZ[0], jZ[1], jZ[2]],
            name: (0, pZ.e)(kB)
          } : null
        }
      },
      RZ = {
        setBlockHighlight(BB) {
          var IB;
          null === (IB = (0, GB.j)()) || void 0 === IB || IB.setBlockHighlight(BB)
        }
      };
    var rZ = ZB(2012),
      mZ = ZB(40944),
      XZ = ZB(41052),
      LZ = ZB(4680),
      eZ = ZB(4649),
      uZ = ZB(41058),
      fZ = ZB(3461),
      lZ = ZB(3470);
    let AZ = null,
      tZ = null;

    function bZ(BB) {
      const IB = BB.startsWith(lZ.l),
        [ZB, TB = ZB, JB = ZB] = (IB ? BB.slice(lZ.l.length) : BB).split(lZ.i);
      return {
        top: ZB,
        left: TB,
        right: JB,
        half: IB
      }
    }

    function xZ(BB) {
      const IB = null === AZ ? void 0 : (0, fZ.c)(BB),
        ZB = void 0 === IB ? 0 : AZ.codes[IB];
      return 0 === ZB ? void 0 : AZ.pool[ZB - 1]
    }
    var EZ = ZB(3452),
      DZ = ZB(4639),
      KZ = ZB(4672),
      VZ = ZB(40974),
      SZ = ZB(41064);
    const BT = "item:";
    let IT = null,
      ZT = null,
      TT = null,
      JT = null,
      oT = !1,
      GT = !1;

    function vT() {
      return GT || (GT = !0, (0, KZ.h)().then((BB => {
        BB && (0, rZ.d)()
      }))), TT ??= Promise.all([(0, EZ.g)(), (tZ ??= ZB.e(1).then((() => ZB(60686))).then((BB => {
        let {
          BLOCK_FACE_RUNS: IB,
          BLOCK_FACES: ZB,
          MAX_FACE_ITEM_ID: TB
        } = BB;
        AZ = {
          codes: (0, lZ.u)(IB, TB + 1),
          pool: ZB.split(lZ.o).map(bZ)
        }
      }), (BB => {
        throw tZ = null, BB
      })), tZ), (0, SZ.d)(), ZB.e(201).then((() => ZB(34211)))]).then((BB => {
        let [, , IB, ZB] = BB;
        IB.followBundledTextures(), IT = IB, ZT = ZB, (0, rZ.d)()
      }), (BB => {
        TT = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", BB)
      })), TT
    }

    function kT(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = (0, VZ.h)()) || void 0 === ZB ? void 0 : ZB.textureUrl(BB)) && void 0 !== IB ? IB : IT.itemSpriteUrl(BB)
    }

    function cT(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = (0, VZ.h)()) || void 0 === ZB ? void 0 : ZB.textureUrl(BB)) && void 0 !== IB ? IB : IT.blockTextureUrl(BB)
    }

    function nT(BB) {
      var IB;
      return null !== (IB = (0, EZ.e)(BB)) && void 0 !== IB ? IB : BB
    }

    function hT(BB, IB) {
      var ZB, TB, JB;
      return null !== (ZB = null !== (TB = null !== (JB = cT(BB)) && void 0 !== JB ? JB : null === IB || void 0 === IB ? void 0 : IB.rotated[BB]) && void 0 !== TB ? TB : null === IB || void 0 === IB ? void 0 : IB.animated[BB]) && void 0 !== ZB ? ZB : IT.notFoundUrl()
    }

    function zT(BB) {
      return void 0 !== (0, fZ.c)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, fZ.e)(Number(BB)) : void 0
    }

    function FT(BB) {
      var IB;
      if (BB.startsWith(BT)) {
        var ZB;
        const IB = (0, EZ.e)(BB.slice(5));
        return null !== (ZB = void 0 === IB ? null : kT(IB)) && void 0 !== ZB ? ZB : IT.notFoundUrl()
      }
      return null !== (IB = IT.particleUrl(BB)) && void 0 !== IB ? IB : IT.notFoundUrl()
    }

    function NT(BB, IB) {
      return "StairsBlock" === BB ? BB : IB ? "SlabBlock" : "CubeBlock"
    }
    const gT = {
        async blockIcon(BB) {
          var IB;
          let {
            name: TB,
            size: JB,
            lineWidth: oB
          } = BB;
          await vT();
          const GB = null !== (IB = zT(TB)) && void 0 !== IB ? IB : TB,
            vB = (0, KZ.d)(GB, JB, oB);
          if (null !== vB) return vB;
          const kB = xZ(GB),
            cB = (0, fZ.c)(GB),
            nB = void 0 === cB || null === ZT ? void 0 : ZT.itemTypeNameOf(cB);
          if (null === IT || void 0 === kB) return "";
          const hB = [kB.top, kB.left, kB.right].some((BB => null === cT(BB))),
            zB = hB ? await (JT ??= ZB.e(207).then((() => ZB(34276))).then((BB => (oT && (oT = !1, (0, rZ.d)()), {
              rotated: BB.rotatedBlockTextures,
              animated: BB.animatedBlockTextures
            })), (BB => (JT = null, oT = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", BB), null))), JT) : null;
          if (hB && null === zB) return "";
          const FB = {
              top: hT(kB.top, zB),
              left: hT(kB.left, zB),
              right: hT(kB.right, zB),
              itemType: NT(nB, kB.half)
            },
            NB = (0, VZ.d)(),
            gB = 0 === NB ? GB : `${GB}#${NB}`;
          return (await (0, DZ.b)()).drawBlockIconUrl(gB, JB, oB, (() => FB))
        }
      },
      qT = {
        itemIcon: function(BB) {
          var IB, ZB, JB, oB;
          if (null === IT) return vT(), TB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          if ((0, eZ.g)(BB)) return {
            kind: "icon",
            url: null !== (ZB = null !== (JB = null === (oB = (0, VZ.h)()) || void 0 === oB ? void 0 : oB.textureUrl(BB)) && void 0 !== JB ? JB : IT.ingameIconUrl(BB)) && void 0 !== ZB ? ZB : IT.notFoundUrl()
          };
          if (BB.startsWith(eZ.d)) return {
            kind: "icon",
            url: FT(BB.slice(eZ.d.length))
          };
          if (0 === (0, fZ.g)()) return (0, uZ.b)(), TB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          const GB = null !== (IB = zT(BB)) && void 0 !== IB ? IB : BB,
            vB = (0, fZ.c)(GB),
            kB = void 0 === vB ? void 0 : ZT.itemTypeNameOf(vB);
          if (void 0 !== xZ(GB)) return {
            kind: "drawnBlock"
          };
          const cB = function(BB) {
            var IB;
            return null !== (IB = kT(nT(BB))) && void 0 !== IB ? IB : IT.notFoundUrl()
          }(GB);
          if ((0, KZ.f)(GB) && ! function(BB) {
              const IB = (0, VZ.h)();
              return null !== IB && (null !== IB.textureUrl(nT(BB)) || null !== IB.modelUrl(BB))
            }(GB)) return {
            kind: "model",
            url: cB
          };
          if ("Gun" === kB) return {
            kind: "gun",
            url: cB
          };
          if (void 0 !== vB && "GrayscaleArmour" === ZT.itemTypeOf(vB) || Object.hasOwn(LZ.e, GB)) {
            var nB;
            const IB = null !== (nB = (0, LZ.g)(BB)) && void 0 !== nB ? nB : (0, LZ.g)(GB);
            if (IB) return {
              kind: "item",
              url: cB,
              tint: IB
            }
          }
          return {
            kind: "item",
            url: cB
          }
        },
        hasIcon: function(BB) {
          return void 0 !== zT(BB) || (0, eZ.g)(BB) || BB.startsWith(eZ.d)
        },
        isItemName: function(BB) {
          return void 0 !== zT(BB)
        }
      };
    var yT = ZB(655),
      UT = ZB(39689);

    function WT(BB) {
      if (null === BB || void 0 === BB || !BB.isCoreRunning) return null;
      const {
        api: IB,
        chunks: ZB,
        items: TB,
        tables: JB
      } = BB;
      return {
        playerFeet() {
          const BB = IB.aU(IB.localId);
          return null !== BB && void 0 !== BB && BB.every(Number.isFinite) ? BB : null
        },
        chunkBlocks: BB => ZB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, IB, TB) => ZB.KG(BB, IB, TB) : null,
        blockName: BB => JB.nameOfId(BB),
        inventory: () => ({
          slots: TB.playerItems().map((BB => BB ? {
            name: BB.name,
            amount: BB.amount
          } : null)),
          heldSlot: TB.selectedSlot
        }),
        nearby() {
          const ZB = [];
          for (let JB = 0; JB < IB.idStr.length; JB++) {
            var TB;
            const oB = IB.idStr[JB],
              GB = IB.serverIds[JB],
              vB = IB.kinds[JB];
            if (null === oB || IB.isLocal(GB) || vB >>> dB.c !== dB.o.Lifeform) continue;
            const kB = IB.aU(GB),
              cB = yT.i[vB & dB.d];
            kB && void 0 !== cB && ZB.push({
              kind: "Player" === cB ? "player" : cB,
              name: null !== (TB = BB.clientApi.getEntityName(oB)) && void 0 !== TB ? TB : null,
              position: kB
            })
          }
          return ZB
        },
        droppedItems() {
          let BB = 0;
          for (let ZB = 0; ZB < IB.idStr.length; ZB++) null !== IB.idStr[ZB] && IB.kinds[ZB] >>> dB.c === dB.o.Item && BB++;
          return BB
        }
      }
    }
    const dT = {
        worldCodeAiChunk: BB => Promise.resolve((0, UT.c)(WT((0, GB.j)()), BB)),
        worldCodeAiGameState: () => Promise.resolve((0, UT.d)(WT((0, GB.j)())))
      },
      CT = function(BB) {
        const IB = nZ(),
          TB = nZ(),
          JB = new Set,
          oB = new Set,
          GB = () => {
            var IB, ZB;
            return null !== (IB = null === (ZB = BB.runtime()) || void 0 === ZB ? void 0 : ZB.currentViewer) && void 0 !== IB ? IB : null
          };
        let vB = null,
          kB = null;
        const nB = (BB, IB) => ({
            current: BB,
            watch(ZB) {
              let TB = BB();
              return IB.add((() => {
                const IB = BB();
                IB !== TB && (TB = IB, ZB(IB))
              }))
            }
          }),
          zB = BB => ({
            watch: IB => (BB.add(IB), () => {
              BB.delete(IB)
            })
          }),
          FB = BB => {
            const IB = GB(),
              ZB = null === IB || void 0 === IB ? void 0 : IB.view;
            IB && ZB && IB.seek(Math.max(0, Math.min(ZB.totalTicks - 1, ZB.Iz + BB * hB.Dd)))
          },
          NB = {
            replay: nB((() => {
              var BB;
              const IB = GB(),
                ZB = null !== (BB = null === IB || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null;
              return null === IB || null === ZB || ZB.state === hB.sd.None ? (vB = null, null) : (vB = (0, KB.l)(vB, {
                id: IB.id,
                Iz: ZB.Iz,
                totalTicks: ZB.totalTicks,
                bM: hB.Dd,
                playing: ZB.state === hB.sd.Playing,
                speed: ZB.speed,
                cameraMode: ZB.cameraMode,
                freecam: "freecam" === ZB.cameraMode
              }), vB)
            }), IB),
            replayEdits: nB((() => {
              var BB;
              const IB = GB(),
                ZB = null !== (BB = null === IB || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null;
              return null === IB || null === ZB || ZB.state === hB.sd.None ? (kB = null, null) : (kB = (0, KB.l)(kB, {
                cameraKeyframes: [...IB.keyframes],
                playbackMark: ZB.mark,
                fileName: IB.fileName,
                unsavedChanges: IB.unsavedChanges,
                suggestSaveAs: IB.suggestSaveAs
              }), kB)
            }), IB),
            replayRecorder: nB((() => {
              var IB, ZB;
              return null !== (IB = null === (ZB = BB.runtime()) || void 0 === ZB ? void 0 : ZB.recorder.current) && void 0 !== IB ? IB : vZ.b.states.replayRecorder.current()
            }), TB),
            replayVideoExporting: {
              current: oZ.d,
              watch: BB => (0, cB.p)("replayViewer|videoExportChanged", (() => {
                BB((0, oZ.d)())
              }))
            }
          },
          gB = {
            replayUiActionRequested: zB(oB),
            replayViewerRequested: zB(JB)
          },
          qB = BB => {
            for (const IB of JB) IB(BB)
          },
          yB = () => {
            var TB;
            !0 === (null === (TB = GB()) || void 0 === TB ? void 0 : TB.isOpen) && Promise.all([ZB.e(98), ZB.e(67)]).then((() => ZB(60674))).then((ZB => {
              let {
                startWasmReplayVideoExport: TB
              } = ZB;
              return TB({
                viewer: GB,
                canvas: () => {
                  var IB, ZB;
                  return null !== (IB = null === (ZB = BB.canvas) || void 0 === ZB ? void 0 : ZB.call(BB)) && void 0 !== IB ? IB : null
                },
                watchViewer: IB.add,
                requestViewer: qB
              })
            }), (BB => {
              console.error("Couldn't load the video export", BB), GZ.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((BB => {
              console.error("The video export failed", BB)
            }))
          },
          UB = {
            replayAction(BB) {
              if ((0, oZ.d)()) return;
              const IB = GB();
              switch (BB) {
                case "replaySkipBack":
                  FB(-1);
                  break;
                case "replaySkipForward":
                  FB(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== IB && void 0 !== IB && IB.view && IB.setSpeed((0, JZ.i)(IB.view.speed, "replaySpeedUp" === BB ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === IB || void 0 === IB || IB.addKeyframe()
              }
            },
            setReplayPlaying(BB) {
              var IB, ZB;
              (0, oZ.d)() || (BB ? null === (IB = GB()) || void 0 === IB || IB.play() : null === (ZB = GB()) || void 0 === ZB || ZB.pause())
            },
            seekReplay(BB) {
              var IB;
              let {
                Iz: ZB,
                ignorePlaybackMark: TB
              } = BB;
              null === (IB = GB()) || void 0 === IB || IB.seek(ZB, null !== TB && void 0 !== TB && TB)
            },
            setReplayCameraMode(BB) {
              var IB;
              null === (IB = GB()) || void 0 === IB || IB.setCameraMode(BB)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(BB) {
              var IB;
              null === (IB = GB()) || void 0 === IB || IB.setKeyframe(BB)
            },
            moveReplayCameraKeyframe(BB) {
              var IB;
              let {
                from: ZB,
                to: TB
              } = BB;
              null === (IB = GB()) || void 0 === IB || IB.moveKeyframe(ZB, TB)
            },
            deleteReplayCameraKeyframes(BB) {
              var IB;
              let {
                start: ZB,
                end: TB
              } = BB;
              null === (IB = GB()) || void 0 === IB || IB.deleteKeyframes(ZB, TB)
            },
            setReplayPlaybackMark(BB) {
              var IB;
              null === (IB = GB()) || void 0 === IB || IB.setMark(BB)
            },
            cropReplay(BB) {
              var IB, ZB;
              let {
                start: TB,
                end: JB
              } = BB;
              return !(0, oZ.d)() && (null !== (IB = null === (ZB = GB()) || void 0 === ZB ? void 0 : ZB.crop(TB, JB)) && void 0 !== IB && IB)
            },
            holdReplayForShaderPackFailure(BB) {
              const IB = GB();
              IB && (IB.holdForShaderPackFailure(), function(BB) {
                ZB.e(117).then((() => ZB(39281))).then((IB => {
                  let {
                    shaderPackPage: ZB
                  } = IB;
                  ZB.block(BB)
                })).catch((BB => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", BB)
                }))
              }(BB))
            },
            exportReplayVideo() {
              yB()
            },
            toggleRecording() {
              var IB;
              null === (IB = BB.runtime()) || void 0 === IB || IB.recorder.toggleRecording()
            },
            saveClip() {
              var IB;
              null === (IB = BB.runtime()) || void 0 === IB || IB.recorder.saveClip()
            },
            setRecorderPrefs(IB) {
              var ZB;
              let {
                clipping: TB,
                clipSeconds: JB
              } = IB;
              null === (ZB = BB.runtime()) || void 0 === ZB || ZB.recorder.setPrefs(TB, JB)
            },
            setReplayViewerOpen(IB) {
              var ZB;
              (0, qI.h)(IB) && (null === (ZB = BB.runtime()) || void 0 === ZB || ZB.recorder.viewerShown(IB))
            },
            recordFlyingMiddleText(IB) {
              var ZB;
              let {
                content: TB,
                Po: JB,
                angle: oB,
                Ro: GB
              } = IB;
              null === (ZB = BB.runtime()) || void 0 === ZB || ZB.recorder.recordFlyingText(JSON.stringify(TB), JB, oB, GB)
            },
            dragReplayCamera(IB) {
              var ZB;
              let {
                dx: TB,
                dy: JB
              } = IB;
              null === (ZB = BB.freecam()) || void 0 === ZB || ZB.drag(TB, JB)
            },
            moveReplayFreecam(IB) {
              var ZB;
              null === (ZB = BB.freecam()) || void 0 === ZB || ZB.move(IB)
            },
            holdReplayFreecamVertical(IB) {
              var ZB;
              let {
                action: TB,
                sv: JB
              } = IB;
              null === (ZB = BB.freecam()) || void 0 === ZB || ZB.holdVertical(TB, JB)
            }
          },
          WB = BB => {
            var IB;
            const ZB = GB(),
              TB = null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.view) && void 0 !== IB ? IB : null;
            kZ.has(BB) ? (BB => {
              for (const IB of oB) IB(BB)
            })(BB) : cZ.has(BB) ? UB.replayAction(BB) : "replayPlayPause" === BB ? ZB && TB && TB.state !== hB.sd.None && UB.setReplayPlaying(TB.state !== hB.sd.Playing) : "replayChangeCameraMode" === BB ? null === ZB || void 0 === ZB || ZB.cycleCameraMode() : "replayExit" === BB ? !0 === (null === ZB || void 0 === ZB ? void 0 : ZB.inPlayback) && (0, PI.i)("/") : "replayExportVideo" === BB && yB()
          };
        let dB = !1;
        return {
          states: NB,
          events: gB,
          commands: UB,
          lookups: {
            replayCamera() {
              var IB, ZB, TB;
              return !0 !== (null === (IB = GB()) || void 0 === IB ? void 0 : IB.isOpen) ? null : null !== (ZB = null === (TB = BB.cameraView) || void 0 === TB ? void 0 : TB.call(BB)) && void 0 !== ZB ? ZB : null
            },
            leaveGameReloadsPage() {
              var BB;
              return !0 === (null === (BB = GB()) || void 0 === BB ? void 0 : BB.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var BB;
              const ZB = !0 === (null === (BB = GB()) || void 0 === BB ? void 0 : BB.inPlayback);
              ZB !== dB && (dB = ZB, cB.l.Gq("connectedGameChanged")), IB.fire()
            },
            recorderChanged: TB.fire,
            keyDown: BB => {
              var IB;
              switch (BB) {
                case "recordGame":
                  return void UB.toggleRecording();
                case "recordClip":
                  return void((0, qI.d)() || UB.saveClip())
              }(0, oZ.d)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, qI.d)() || !0 === (null === (IB = GB()) || void 0 === IB ? void 0 : IB.inPlayback)) && WB(BB) : qB("toggle"))
            }
          }
        }
      }({
        runtime: JB.k,
        cameraView: () => {
          var BB;
          const IB = null === (BB = (0, GB.j)()) || void 0 === BB ? void 0 : BB.renderFrame;
          if (!IB) return null;
          const [ZB, TB, JB] = IB.cameraPosition, [oB, vB, kB] = IB.cameraDirection;
          return {
            position: [ZB, TB, JB],
            direction: [oB, vB, kB]
          }
        },
        canvas: () => {
          var BB, IB, ZB;
          return null !== (BB = null === (IB = (ZB = (0, oB.H)()).canvas) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : null
        },
        freecam: JB.h
      }),
      QT = {
        states: {
          ...cI,
          ...FI.n,
          ...CT.states,
          ...FZ,
          ...uB
        },
        events: {
          ...nI,
          ...qB,
          ...FI.g,
          ...YB.d,
          ...iZ.f,
          ...CT.events,
          ...NZ,
          ...OB.h
        },
        commands: {
          ...wB,
          ...hI,
          ...yB,
          ...FI.d,
          ...KI,
          ...YZ,
          ...OB.f,
          ...mI,
          ...CT.commands,
          ...CZ,
          ...fB,
          ...RZ,
          ...NI
        },
        queries: {
          ...FI.j,
          ...dT
        },
        lookups: {
          ...zI,
          ...RB,
          ...iZ.g,
          ...CT.lookups,
          ...sB,
          ...TZ,
          ...PZ,
          ...lB
        }
      };

    function sT() {
      (0, vB.f)(gB.p), (0, JB.l)(CT.feed), (0, YB.e)(), VI || (VI = !0, (0, gB.l)(HB.k, (BB => {
        const IB = (0, jB.e)(HB.k, BB);
        "string" === typeof IB && Promise.resolve().then((() => ZB(3820))).then((BB => {
          let {
            onCosmeticPackGranted: ZB
          } = BB;
          ZB(IB)
        }))
      })), (0, gB.l)(HB.U, (BB => {
        const IB = (0, jB.e)(HB.U, BB);
        "number" === typeof IB && cB.l.Gq("serverUpdating", Date.now() + IB, !0)
      })), (0, gB.l)(HB.A, (BB => {
        const IB = (0, jB.e)(HB.A, BB);
        if ((0, jB.d)(IB)) {
          const {
            jJ: BB,
            PJ: ZB
          } = IB;
          (0, EI.e)({
            jJ: "string" === typeof BB ? BB : null,
            PJ: "string" === typeof ZB ? ZB : null
          })
        }
      })), (0, gB.l)(nB.nc.NewUiRequest, (BB => {
        const IB = (0, jB.f)(BB);
        (0, jB.d)(IB) && "number" === typeof IB.id && (0, jB.d)(IB.clientParameters) && (0, DI.f)(IB.id, IB.clientParameters)
      })), (0, gB.l)(HB.L, (BB => {
        const IB = (0, jB.e)(HB.L, BB);
        "number" === typeof IB && (0, DI.j)(IB)
      })), (0, gB.j)(DI.b), (0, gB.l)(nB.nc.UiRequestPopup, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB) && "number" === typeof IB.id && "string" === typeof IB.text) {
          const BB = IB.id;
          (0, DI.k)(BB, IB.text, !0 === IB.destructive, (IB => {
            KI.answerUiRequest({
              id: BB,
              Cn: IB
            })
          }))
        }
      })), (0, gB.l)(nB.nc.TopRightHelper, (BB => {
        const IB = (0, jB.f)(BB);
        void 0 !== IB && cB.l.Gq("TopRightHelper", IB, !0)
      })), (0, gB.l)(nB.nc.TaskProgress, (BB => {
        const IB = (0, jB.f)(BB);
        (0, jB.d)(IB) && "string" === typeof IB.taskId && "number" === typeof IB.progress && (0, xI.d)({
          taskId: IB.taskId,
          progress: IB.progress
        })
      }))), QZ || (QZ = !0, (0, gB.l)(HB.p, (BB => {
        const IB = (0, jB.e)(HB.p, BB);
        (0, jB.d)(IB) && cB.l.Gq("showShopFromServer", {
          toggle: IB.vB,
          kB: IB.kB
        }, !0)
      })), (0, gB.l)(nB.nc.OverShopInfo, (BB => {
        const IB = (0, jB.f)(BB);
        (0, jB.d)(IB) && cB.l.Gq("overShopInfo", IB.info, !0)
      })), (0, gB.l)(nB.nc.ShowShopTutorial, (() => {
        cB.l.Gq("showShopTutorial", null, !0)
      }))), WZ || (WZ = !0, (0, gB.g)((() => {
        var BB;
        (0, gZ.resetLeaveEvents)(), null === (BB = dZ) || void 0 === BB || BB(), dZ = (0, gB.e)() ? (0, yZ.k)(gB.e) : null, (0, gB.e)() || cB.l.Qy()
      })), (0, gB.l)(nB.nc.SetCookie, (BB => {
        const IB = (0, jB.f)(BB),
          ZB = (0, PI.c)().gameNameWithVariation;
        (0, jB.d)(IB) && "string" === typeof IB.key && null !== ZB && (0, qZ.setCookie)(ZB, IB.key, IB.value)
      })), (0, gB.l)(nB.nc.LeaveValues, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB) && "string" === typeof IB.leaveEventType) {
          const {
            leaveEventType: BB,
            category: ZB,
            subCategory: TB,
            value: JB
          } = IB;
          (0, gZ.updateLeaveValue)({
            leaveEventType: BB,
            category: ZB,
            subCategory: TB,
            value: JB
          })
        }
      })), (0, gB.l)(nB.nc.CustomAnalyticsEvent, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB) && "string" === typeof IB.cat1) {
          const {
            cat1: BB,
            cat2: ZB,
            cat3: TB,
            value: JB
          } = IB;
          (0, gZ.logCustomAnalyticsEvent)({
            cat1: BB,
            cat2: ZB,
            cat3: TB,
            value: JB
          })
        }
      })), (0, gB.l)(nB.nc.ProgressionEvent, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB)) {
          const {
            type: BB,
            location1: ZB,
            location2: TB,
            location3: JB,
            score: oB
          } = IB;
          (0, gZ.logProgressionEvent)({
            type: BB,
            location1: ZB,
            location2: TB,
            location3: JB,
            score: oB
          })
        }
      })), (0, gB.l)(nB.nc.ResourceEvent, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB)) {
          const {
            type: BB,
            resourceType: ZB,
            amount: TB,
            category: JB,
            itemName: oB
          } = IB;
          (0, gZ.logResourceEvent)({
            type: BB,
            resourceType: ZB,
            amount: TB,
            category: JB,
            itemName: oB
          })
        }
      })), (0, gB.l)(nB.nc.LeaderboardResponse, (BB => {
        const IB = (0, jB.f)(BB);
        if ((0, jB.d)(IB)) {
          const {
            category: BB,
            timeframe: ZB,
            data: TB
          } = IB;
          cB.l.Gq("leaderboardResponse", {
            category: BB,
            timeframe: ZB,
            data: TB
          })
        }
      })), (0, gB.l)(HB.u, (BB => {
        const IB = (0, jB.e)(HB.u, BB);
        "string" === typeof IB && (0, UZ.e)(BB.conn, IB)
      })), (0, gB.l)(HB.v, (BB => {
        const IB = (0, jB.e)(HB.v, BB);
        "string" === typeof IB && console.error(`[logErrorToConsole]: ${IB}`)
      }))), mB(), (0, iZ.b)(), rI || (rI = !0, (0, gB.l)(HB.h, (BB => {
        const IB = (0, jB.e)(HB.h, BB);
        void 0 !== IB && (0, RI.o)(IB)
      }))), bI(), pI(), bB || (bB = !0, (0, oB.s)(xB)), TB.gameBridge.attach(QT), (0, TB.installPageSources)({
        commands: {
          ...TB.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: mZ.j
        },
        queries: gT,
        lookups: {
          ...TB.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...qT,
          oW: mZ.d,
          drawCallStats: XZ.h
        }
      }), (0, rZ.d)(), vT()
    }
  },
  40974: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => kB,
      h: () => vB,
      j: () => cB
    });
    var TB = ZB(2012);
    let JB = null,
      oB = 0;
    const GB = new Set;

    function vB() {
      return JB
    }

    function kB() {
      return oB
    }

    function cB(BB) {
      JB = BB, oB++, (0, TB.d)();
      for (const IB of GB) IB()
    }

    function nB(BB) {
      GB.add(BB)
    }
  },
  41064: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      d: () => vB
    });
    var TB = ZB(41071);
    let JB = null,
      oB = null;

    function GB() {
      return JB ??= ZB.e(62).then((() => ZB(60688))).catch((BB => {
        throw JB = null, BB
      })), JB
    }

    function vB() {
      return oB ??= Promise.all([GB(), (0, TB.h)()]).then((BB => {
        let [IB] = BB;
        return IB
      }), (BB => {
        throw oB = null, BB
      })), oB
    }
  },
  37093: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
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
  39094: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => JB
    });
    const TB = ["description", "label"];

    function JB(BB) {
      const IB = BB.type;
      return {
        type: IB,
        params: BB[IB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);