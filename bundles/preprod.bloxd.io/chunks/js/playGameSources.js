export const id = 54;
export const ids = [54];
export const modules = {
  40414: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => yB,
      c: () => QB,
      d: () => DB
    });
    const YB = 6e3;

    function DB(BB, OB) {
      return [Math.floor(BB[0] / OB) * OB, Math.floor(BB[1] / OB) * OB, Math.floor(BB[2] / OB) * OB]
    }

    function QB(BB) {
      const OB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
      return OB && OB.length >= 3 ? [Number(OB[0]), Number(OB[1]), Number(OB[2])] : null
    }

    function oB(BB, OB) {
      return BB === OB ? String(BB) : `${BB}-${OB}`
    }

    function jB(BB, OB, GB, YB) {
      const DB = [];
      let QB = new Map;
      for (let oB = BB[2]; oB < BB[2] + OB; oB++) {
        const jB = new Map;
        let yB = BB[0];
        for (; yB < BB[0] + OB;) {
          const DB = YB(yB, GB, oB);
          let JB = yB;
          for (; JB + 1 < BB[0] + OB && YB(JB + 1, GB, oB) === DB;) JB++;
          if (null !== DB) {
            const BB = `${yB} ${JB} ${DB}`,
              OB = QB.get(BB);
            OB ? (OB.z1 = oB, QB.delete(BB), jB.set(BB, OB)) : jB.set(BB, {
              x0: yB,
              x1: JB,
              z0: oB,
              z1: oB,
              name: DB
            })
          }
          yB = JB + 1
        }
        DB.push(...QB.values()), QB = jB
      }
      return DB.push(...QB.values()), DB.sort(((BB, OB) => BB.z0 - OB.z0 || BB.x0 - OB.x0)).map((BB => `x${oB(BB.x0,BB.x1)} z${oB(BB.z0,BB.z1)} ${BB.name}`))
    }

    function yB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YB;
      const yB = [BB[0] + OB - 1, BB[1] + OB - 1, BB[2] + OB - 1],
        JB = null !== DB && DB.every(((OB, GB) => Math.floor(OB) >= BB[GB] && Math.floor(OB) <= yB[GB])),
        MB = [`The chunk from ${BB.join(" ")} to ${yB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== DB && MB.push(`The player's feet are at ${DB.map(Math.floor).join(" ")}, ${JB?"in this chunk":"outside this chunk"}.`);
      const PB = [];
      for (let YB = BB[1]; YB <= yB[1]; YB++) {
        const DB = jB(BB, OB, YB, GB).join("; "),
          QB = PB[PB.length - 1];
        (null === QB || void 0 === QB ? void 0 : QB.boxes) === DB ? QB.to = YB : PB.push({
          from: YB,
          to: YB,
          boxes: DB
        })
      }
      const zB = PB.filter((BB => "" !== BB.boxes));
      0 === zB.length && MB.push("It is all air.");
      let lB = MB.join("\n").length;
      for (const YB of zB) {
        const BB = `y${oB(YB.from,YB.to)}: ${YB.boxes}`;
        if (lB += BB.length + 1, lB > QB) {
          MB.push(`Cut short: the layers from y${YB.from} up aren't shown, as there are too many blocks.`);
          break
        }
        MB.push(BB)
      }
      return MB.join("\n")
    }
  },
  9460: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(16);

    function DB() {
      return !YB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37650: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      c: () => QB,
      d: () => DB
    });
    const YB = [.25, .5, 1, 2, 4, 8, 16];

    function DB(BB, OB) {
      const GB = YB;
      let DB = GB.indexOf(BB);
      return -1 === DB && (DB = GB.findIndex((OB => OB >= BB)), -1 === DB && (DB = GB.length - 1)), "up" === OB ? GB[Math.min(DB + 1, GB.length - 1)] : GB[Math.max(DB - 1, 0)]
    }

    function QB(BB) {
      return BB <= YB[0]
    }

    function oB(BB) {
      return BB >= YB[YB.length - 1]
    }
  },
  37166: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      f: () => QB
    });
    let YB = !1;

    function DB() {
      return YB
    }

    function QB(BB) {
      return YB !== BB && (YB = BB, !0)
    }
  },
  39730: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(25),
      DB = GB(2050);

    function QB(BB) {
      let {
        taskId: OB,
        progress: GB
      } = BB;
      const YB = DB.e.get("_tasks");
      null !== YB && void 0 !== YB && YB[OB] && DB.e.apply({
        _tasks: {
          ...YB,
          [OB]: {
            ...YB[OB],
            progress: GB
          }
        }
      })
    }
    YB.o.subscribe("clientTaskProgress", (BB => {
      QB(BB)
    }))
  },
  40381: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      e: () => qB,
      f: () => JB,
      h: () => PB,
      l: () => zB,
      o: () => yB,
      s: () => oB,
      u: () => MB,
      w: () => ZB
    });
    var YB = GB(2050),
      DB = GB(25),
      QB = GB(2059);
    const oB = (0, QB.i)((function() {
        var BB, OB, GB, DB;
        return {
          health: null !== (BB = YB.e.get("_health")) && void 0 !== BB ? BB : null,
          maxHealth: null !== (OB = YB.e.get("_totalMaxHealth")) && void 0 !== OB ? OB : null,
          shield: null !== (GB = YB.e.get("_shield")) && void 0 !== GB ? GB : null,
          maxShield: null !== (DB = YB.e.get("maxShield")) && void 0 !== DB ? DB : null
        }
      }), [], (0, QB.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      jB = [{
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

    function yB(BB, OB) {
      return jB[(BB ? 2 : 0) + (OB ? 1 : 0)]
    }
    const JB = (0, QB.i)((function() {
      var BB;
      return null !== (BB = YB.e.get("_aura")) && void 0 !== BB ? BB : null
    }), [], (0, QB.h)("_aura"));

    function MB(BB) {
      return {
        watch: OB => (0, DB.p)("shotPlayer", (GB => {
          let {
            playerId: YB,
            damage: DB,
            wasCrit: QB,
            distance: oB
          } = GB;
          BB(YB) && OB({
            damage: DB,
            wasCrit: QB,
            distance: oB
          })
        }))
      }
    }

    function PB(BB) {
      return (0, QB.b)("chat", (OB => {
        let {
          serverChatMsgId: GB,
          worldCodeLineId: YB,
          content: DB,
          chatterEId: QB,
          chatterObjectsToReplay: oB
        } = OB;
        return {
          serverChatMsgId: null !== GB && void 0 !== GB ? GB : null,
          worldCodeLineId: null !== YB && void 0 !== YB ? YB : null,
          content: DB,
          author: QB ? BB(QB) : null,
          hiddenFromReplay: !0 === oB
        }
      }))
    }
    const zB = (0, QB.b)("chatRemoved");
    class lB {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const GB = this.shown;
        return BB !== this.needed && (this.needed = BB, this.neededSince = OB, null === BB && (this.shown = null)), this.shown !== this.needed && OB - this.neededSince > 200 && (this.shown = this.needed), this.shown !== GB
      }
    }

    function pB(BB) {
      return [{
        translationKey: `touchKeys:${BB}`
      }]
    }
    const qB = {
      open: pB("open"),
      close: pB("close"),
      milk: pB("milk"),
      shear: pB("shear"),
      tame: pB("tame"),
      feed: pB("feed"),
      ride: pB("ride")
    };

    function ZB(BB) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: BB
      }]
    }
  },
  37004: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => oB
    });
    var YB = GB(3711);
    let DB = null,
      QB = null;

    function oB() {
      return QB ??= GB.e(235).then((() => GB(36925))).then((BB => {
        let {
          ITEM_SPRITES: OB,
          ITEM_SPRITES_WITHOUT_FILE: GB,
          ITEM_FILES_WITHOUT_SPRITE: QB
        } = BB;
        DB = function(BB, OB, GB) {
          const DB = new Set,
            QB = (0, YB.w)(OB);
          let oB = 0;
          for (const [YB, jB] of BB.entries()) YB === QB[oB] ? oB++ : DB.add(jB);
          if ("" !== GB)
            for (const jB of GB.split(YB.r)) DB.add(jB);
          return DB
        }(OB.split(YB.r), GB, QB)
      }), (BB => {
        throw QB = null, BB
      })), QB
    }

    function jB(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = DB) || void 0 === GB ? void 0 : GB.has(BB)) && void 0 !== OB && OB
    }
  },
  40400: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      e: () => QB,
      h: () => DB
    });
    const YB = 128;

    function DB(BB, OB, GB, YB) {
      const DB = 2 * OB - 1,
        QB = 1 - 2 * GB,
        oB = BB(0) - DB * BB(3),
        jB = BB(4) - DB * BB(7),
        yB = BB(8) - DB * BB(11),
        JB = BB(1) - QB * BB(3),
        MB = BB(5) - QB * BB(7),
        PB = BB(9) - QB * BB(11);
      YB[0] = jB * PB - yB * MB, YB[1] = yB * JB - oB * PB, YB[2] = oB * MB - jB * JB;
      const zB = YB[0] * BB(3) + YB[1] * BB(7) + YB[2] * BB(11) < 0 ? -1 : 1,
        lB = Math.hypot(YB[0], YB[1], YB[2]) * zB;
      return YB[0] /= lB, YB[1] /= lB, YB[2] /= lB, YB
    }

    function QB(BB, OB, GB, YB, DB, QB) {
      const oB = [Math.floor(OB[0]), Math.floor(OB[1]), Math.floor(OB[2])],
        jB = [0, 0, 0],
        yB = [1 / 0, 1 / 0, 1 / 0],
        JB = [1 / 0, 1 / 0, 1 / 0];
      for (let zB = 0; zB < 3; zB++) jB[zB] = Math.sign(GB[zB]), 0 !== jB[zB] && (JB[zB] = Math.abs(1 / GB[zB]), yB[zB] = (oB[zB] + (jB[zB] > 0 ? 1 : 0) - OB[zB]) / GB[zB]);
      let MB = 0,
        PB = Math.abs(GB[0]) > Math.abs(GB[1]) ? 0 : 1;
      for (Math.abs(GB[2]) > Math.abs(GB[PB]) && (PB = 2); MB <= YB;) {
        if (BB(oB[0], oB[1], oB[2])) return DB[0] = oB[0], DB[1] = oB[1], DB[2] = oB[2], QB[0] = 0, QB[1] = 0, QB[2] = 0, QB[PB] = -jB[PB], !0;
        PB = yB[0] < yB[1] ? 0 : 1, yB[2] < yB[PB] && (PB = 2), MB = yB[PB], oB[PB] += jB[PB], yB[PB] += JB[PB]
      }
      return !1
    }
  },
  37083: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => dB,
      i: () => KB,
      k: () => VB,
      n: () => WB,
      q: () => SB
    });
    var YB = GB(271),
      DB = GB(92);
    const QB = new(GB(37085).d)(new URL(GB.p + GB.u(3), GB.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var oB = GB(1896),
      jB = GB(2259);
    const yB = 1e4,
      JB = 3e4;
    let MB = null,
      PB = null,
      zB = null,
      lB = !1,
      pB = 0;
    const qB = new Map;
    let ZB = null;
    const NB = new Map,
      RB = new Map;

    function WB(BB) {
      const OB = new Promise(((OB, GB) => {
        const YB = new Image;
        YB.crossOrigin = "anonymous", YB.fetchPriority = "high", YB.onload = () => {
          OB(YB)
        }, YB.onerror = () => {
          GB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
        }, YB.src = BB
      }));
      return (0, jB.e)(OB)
    }

    function AB(BB) {
      var OB, GB;
      lB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), lB = !0, null === (OB = MB) || void 0 === OB || OB.terminate(), MB = null, PB = null, NB.clear(), RB.clear();
      for (const YB of qB.values()) YB(null);
      qB.clear(), null === (GB = ZB) || void 0 === GB || GB()
    }

    function VB() {
      return null !== PB
    }

    function SB() {
      return zB ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === YB.b.ios_icon_worker_v1 && (0, DB.isWebKit)()) return;
        try {
          MB = await async function() {
            return await QB.ready(), QB.start()
          }()
        } catch (jB) {
          return void AB(`did not start (${String(jB)})`)
        }
        let BB = () => {};
        const OB = new Promise((OB => {
          BB = OB
        }));
        MB.onmessage = OB => {
          let {
            data: GB
          } = OB;
          if ("started" === GB.type) PB = MB, BB();
          else if ("failed" === GB.type) AB(`failed a draw (${GB.message})`);
          else {
            var YB, DB;
            null === (YB = qB.get(GB.id)) || void 0 === YB || YB(GB.url), qB.delete(GB.id), null === (DB = ZB) || void 0 === DB || DB()
          }
        }, MB.onerror = OB => {
          OB.preventDefault(), AB(`stopped (${OB.message||"its script did not load or run"})`), BB()
        };
        const GB = `did not start in ${JB/1e3} s`;
        await (0, oB.h)(OB, JB, GB).catch((() => {
          AB(GB)
        }))
      }(), zB
    }

    function nB() {
      if (null !== ZB || 0 === qB.size) return;
      const BB = new Promise((BB => {
          ZB = BB
        })),
        OB = `did not answer in ${yB/1e3} s`;
      (0, oB.h)(BB, yB, OB).then((() => {
        ZB = null, nB()
      }), (() => {
        ZB = null, AB(OB)
      }))
    }

    function UB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      BB.postMessage(OB, GB)
    }

    function fB(BB, OB, GB, YB) {
      let DB = OB.get(GB);
      return void 0 === DB && (DB = YB().then((async OB => {
        let {
          image: GB,
          request: YB
        } = OB;
        try {
          const OB = await createImageBitmap(GB);
          UB(BB, YB(OB), [OB])
        } catch (DB) {
          AB(`could not take an image (${String(DB)})`)
        }
      })), DB.catch((() => {
        OB.get(GB) === DB && OB.delete(GB)
      })), OB.set(GB, DB)), DB
    }
    async function kB(BB, OB) {
      SB();
      const GB = PB;
      if (null === GB) return null;
      if (await BB(GB), PB !== GB) return null;
      const YB = ++pB;
      return new Promise((BB => {
        qB.set(YB, BB), UB(GB, OB(YB)), nB()
      }))
    }

    function dB(BB, OB, GB) {
      return kB((OB => Promise.all([BB.top, BB.left, BB.right].map((BB => function(BB, OB) {
        return fB(BB, NB, OB, (async () => ({
          image: await WB(OB),
          request: BB => ({
            type: "texture",
            url: OB,
            bitmap: BB
          })
        })))
      }(OB, BB))))), (YB => ({
        type: "draw",
        id: YB,
        ...BB,
        size: OB,
        outlineWidth: GB
      })))
    }

    function KB(BB, OB, GB, YB) {
      return kB((GB => function(BB, OB, GB) {
        return fB(BB, RB, OB, (async () => {
          const {
            texture: BB,
            ...YB
          } = await GB();
          return {
            image: await WB(BB),
            request: BB => ({
              type: "model",
              name: OB,
              bitmap: BB,
              geometry: YB
            })
          }
        }))
      }(GB, BB, OB)), (OB => ({
        type: "drawModel",
        id: OB,
        name: BB,
        size: GB,
        outlineWidth: YB
      })))
    }
  },
  40372: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(1998);

    function DB(BB, OB, GB) {
      return (0, YB.j)(BB, OB) < GB
    }
  },
  9394: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(1255);

    function DB(BB, OB) {
      var GB, DB;
      try {
        const GB = (0, YB.c)();
        if ("function" === typeof GB) {
          const YB = new GB(BB, OB);
          if (YB.type === BB) return YB
        }
      } catch {}
      const QB = document.createEvent("Event");
      return QB.initEvent(BB, null !== (GB = null === OB || void 0 === OB ? void 0 : OB.bubbles) && void 0 !== GB && GB, null !== (DB = null === OB || void 0 === OB ? void 0 : OB.cancelable) && void 0 !== DB && DB), QB
    }
  },
  39720: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB
    });
    var YB = GB(1217),
      DB = GB(1360),
      QB = GB(16),
      oB = GB(1338),
      jB = GB(1350),
      yB = GB(1560),
      JB = GB(37139);

    function MB(BB) {
      let {
        BB: OB,
        OB: GB
      } = BB;
      const MB = null !== OB && void 0 !== OB ? OB : (0, jB.c)().gameNameWithVariation;
      (0, YB.O)(MB) && ((0, JB.h)(), (0, oB.X)((() => {
        console.log("Received matchmaking order from game server to game", OB), (0, QB.m)("inGameReplay"), (0, yB.navigatePreserveSearch)((0, DB.c)(MB, null !== GB && void 0 !== GB ? GB : void 0))
      }), "video_start"))
    }
  },
  39896: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(25),
      DB = GB(2085);

    function QB(BB) {
      var OB, GB;
      const QB = (0, DB.l)(null !== (OB = null === (GB = DB.t.toggleFreeCam) || void 0 === GB ? void 0 : GB[0]) && void 0 !== OB ? OB : null);
      YB.o.tM("showBottomMessage", {
        message: `Free Camera ${BB?"Enabled":"Disabled"}${QB?` - Press ${QB} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39713: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => yB,
      f: () => JB,
      j: () => PB
    });
    var YB = GB(2023),
      DB = GB(25),
      QB = GB(1400),
      oB = GB(1260);
    const jB = new Map;

    function yB(BB, OB) {
      DB.o.tM("newUiRequest", {
        id: BB,
        clientParameters: OB
      }, !0)
    }

    function JB(BB) {
      DB.o.tM("removeUiRequest", BB, !0);
      const OB = jB.get(BB);
      OB && (OB.tearDownNotification(), jB.delete(BB))
    }

    function MB() {
      DB.o.tM("clearUiRequests");
      for (const BB of jB.values()) BB.tearDownNotification();
      jB.clear()
    }

    function PB(BB, OB, GB, DB) {
      const yB = "string" === typeof OB ? {
          translationKey: OB
        } : OB,
        JB = QB.NotificationProvider.showPromptPopup({
          title: yB.translationKey,
          textOpts: {
            title: (0, oB.j)(yB.params, YB.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: GB,
          unlockPointerKey: "uiRequestPopup"
        });
      jB.set(BB, JB), JB.getResult().then((OB => {
        jB.delete(BB), "notificationTornDown" !== OB && DB(OB)
      }))
    }
  },
  40406: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => PB,
      h: () => zB
    });
    var YB = GB(192),
      DB = GB(40414);
    const QB = 20;

    function oB(BB) {
      return BB.map(Math.floor).join(" ")
    }

    function jB(BB) {
      return null === BB.amount || 1 === BB.amount ? BB.name : `${BB.amount} ${BB.name}`
    }
    var yB = GB(40416),
      JB = GB(2050),
      MB = GB(1350);

    function PB(BB, OB) {
      if (!BB) return yB.d;
      const GB = BB.playerFeet();
      if (!GB) return "The player isn't in the world yet, so no blocks can be seen.";
      const QB = YB.f.pP,
        oB = (0, DB.d)(null !== OB && void 0 !== OB ? OB : GB, QB),
        jB = BB.chunkBlocks(oB);
      return jB ? (0, DB.b)(oB, QB, ((OB, GB, YB) => {
        const DB = jB(OB, GB, YB);
        return 0 === DB ? null : BB.blockName(DB).split("|")[0]
      }), GB) : `The chunk from ${oB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${GB.map(Math.floor).join(" ")}.`
    }

    function zB(BB) {
      var OB, GB, YB;
      if (!BB) return yB.e;
      const DB = BB.playerFeet();
      if (!DB) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: PB,
        heldSlot: zB
      } = BB.inventory();
      return function(BB) {
        const OB = [];
        null !== BB.game && OB.push(`Game: ${BB.game}.`);
        const GB = null === BB.health ? "" : `, health ${Math.round(BB.health)}${null===BB.maxHealth?"":` of ${Math.round(BB.maxHealth)}`}`;
        OB.push(`The player (the creator) stands at ${oB(BB.position)}${GB}, ${BB.creative?"in":"not in"} creative mode.`);
        const YB = BB.slots[BB.heldSlot];
        OB.push(YB ? `Holding (slot ${BB.heldSlot}): ${jB(YB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
        const DB = BB.slots.flatMap(((BB, OB) => BB ? [`slot ${OB}: ${jB(BB)}`] : []));
        OB.push(DB.length > 0 ? `Inventory: ${DB.join(", ")}.` : "Inventory: empty.");
        const yB = OB => Math.hypot(OB.position[0] - BB.position[0], OB.position[1] - BB.position[1], OB.position[2] - BB.position[2]),
          JB = [...BB.nearby].sort(((BB, OB) => yB(BB) - yB(OB)));
        if (0 === JB.length) OB.push("No other players or mobs are near enough to see.");
        else {
          OB.push("Near them, nearest first:");
          for (const BB of JB.slice(0, QB)) {
            const GB = "player" === BB.kind ? `player "${BB.name||"?"}"` : BB.name && BB.name !== BB.kind ? `${BB.kind} "${BB.name}"` : BB.kind,
              YB = Math.round(yB(BB));
            OB.push(`- ${GB} at ${oB(BB.position)}, ${YB} block${1===YB?"":"s"} away`)
          }
          JB.length > QB && OB.push(`- and ${JB.length-QB} more further away`)
        }
        return BB.droppedItems > 0 && OB.push(`${BB.droppedItems} dropped item${1===BB.droppedItems?" is":"s are"} on the ground nearby.`), OB.join("\n")
      }({
        game: null !== (OB = (0, MB.c)().gameNameWithVariation) && void 0 !== OB ? OB : null,
        position: DB,
        health: null !== (GB = JB.e.get("_health")) && void 0 !== GB ? GB : null,
        maxHealth: null !== (YB = JB.e.get("_totalMaxHealth")) && void 0 !== YB ? YB : null,
        creative: !0 === JB.e.get("creative"),
        heldSlot: zB,
        slots: PB,
        nearby: BB.nearby(),
        droppedItems: BB.droppedItems()
      })
    }
  },
  41897: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => gB,
      B: () => uB,
      E: () => LB,
      G: () => KB,
      I: () => eB,
      J: () => aB,
      L: () => IB,
      b: () => TB,
      e: () => XB,
      f: () => kB,
      j: () => bB,
      k: () => dB,
      n: () => fB,
      p: () => rB,
      s: () => mB,
      t: () => iB,
      v: () => FB,
      z: () => vB
    });
    var YB = GB(1434),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(2617),
      jB = GB(5313),
      yB = GB(5274);
    let JB, MB = !1,
      PB = !1,
      zB = !1,
      lB = !1;
    const pB = 1300,
      qB = 3e3;
    let ZB = 0,
      NB = !1,
      RB = !1,
      WB = 0;
    const AB = 2;
    let VB = !1,
      SB = !1;
    const nB = new Set,
      UB = new Set;

    function fB() {
      return MB
    }

    function kB() {
      return RB
    }

    function dB() {
      return SB
    }

    function KB() {
      return (0, QB.q)() && !SB
    }

    function uB(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB !== SB) {
        SB = BB;
        for (const BB of [...UB]) BB(SB);
        OB && aB()
      }
    }

    function mB(BB) {
      return UB.add(BB), () => {
        UB.delete(BB)
      }
    }

    function IB() {
      (0, jB.m)(oB.y.Menu, (0, QB.q)() ? 0 : oB.y.Menu)
    }

    function FB() {
      RB = !1, WB = 0, IB(), aB()
    }

    function iB(BB) {
      return nB.add(BB), () => {
        nB.delete(BB)
      }
    }

    function LB(BB) {
      PB = !1, BB !== MB && (MB = BB, lB = !1, clearTimeout(JB), zB = !MB && VB, MB ? (NB = !1, RB = !1, WB = 0) : KB() && !VB && (RB = !0), VB = !1, MB && !KB() && HB(), sB(), zB && aB())
    }

    function gB(BB) {
      BB !== NB && (NB = BB, BB || aB())
    }

    function rB() {
      PB = !1, lB || !0 !== cB() || (lB = !0, clearTimeout(JB), JB = setTimeout(wB, pB))
    }

    function XB() {
      return (!PB || performance.now() - ZB > qB) && (PB = (0, yB.O)().lockPointer(), ZB = performance.now()), PB
    }

    function wB() {
      EB() && hB() && XB()
    }

    function EB() {
      return KB() && !MB && !NB && !(0, YB.j)()
    }

    function cB() {
      var BB;
      return "undefined" === typeof navigator || null === (BB = navigator.userActivation) || void 0 === BB ? void 0 : BB.isActive
    }

    function hB() {
      return zB && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== cB()
    }

    function aB() {
      KB() ? EB() && !RB && hB() && XB() : MB && !VB && HB()
    }

    function eB() {
      RB ? navigator.vendor.startsWith("Apple") ? CB() : WB = AB : aB()
    }

    function TB() {
      WB > 0 && 0 === --WB && CB()
    }

    function bB() {
      WB = 0
    }

    function CB() {
      EB() && !0 === cB() && XB()
    }

    function HB() {
      VB = !0, (0, yB.O)().unlockPointer()
    }

    function vB() {
      PB = !1, zB = !1, lB = !1, clearTimeout(JB), NB = !1, RB = !1, WB = 0, VB = !1;
      const BB = MB;
      MB = !1, BB && sB()
    }

    function sB() {
      for (const BB of [...nB]) BB(MB);
      DB.o.tM("pointerLockUpdate", MB)
    }
  },
  41688: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => zB,
      g: () => jB,
      i: () => PB,
      l: () => JB,
      m: () => oB,
      p: () => MB,
      s: () => yB
    });
    let YB = null,
      DB = null,
      QB = null;

    function oB(BB) {
      YB = BB
    }

    function jB() {
      return YB
    }

    function yB(BB) {
      DB = BB
    }

    function JB() {
      return DB
    }

    function MB(BB) {
      QB = BB
    }

    function PB() {
      return QB
    }

    function zB() {
      var BB, OB;
      return !0 === (null === (BB = DB) || void 0 === BB || null === (OB = BB.currentViewer) || void 0 === OB ? void 0 : OB.inPlayback)
    }
  },
  42017: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      attachPlayGameSources: () => TY,
      playGameSources: () => eY
    });
    var YB = GB(2023),
      DB = GB(41688),
      QB = GB(5274),
      oB = GB(41593),
      jB = GB(42004),
      yB = GB(40381),
      JB = GB(25),
      MB = GB(5287),
      PB = GB(5281),
      zB = GB(41630),
      lB = GB(41661),
      pB = GB(42023),
      qB = GB(41637);
    (0, qB.g)(MB.oc.Chat, (BB => {
      if (BB.payloadKind !== PB.sc.Msgpack) return;
      const OB = function(BB) {
        if (null === BB || "object" !== typeof BB || !("content" in BB)) return null;
        const {
          chatMsgId: OB,
          worldCodeLineId: GB,
          content: YB,
          chatterEId: DB,
          chatterObjectsToReplay: QB
        } = BB;
        return {
          serverChatMsgId: null !== OB && void 0 !== OB ? OB : void 0,
          worldCodeLineId: null !== GB && void 0 !== GB ? GB : void 0,
          content: YB,
          chatterEId: void 0 === DB || null === DB ? void 0 : String(DB),
          chatterObjectsToReplay: QB
        }
      }((0, zB.b)(BB.payload));
      null !== OB && JB.o.tM("chat", OB, !0)
    })), (0, qB.g)(MB.oc.ChatRemoved, (BB => {
      if (BB.payloadKind === PB.sc.Msgpack) {
        const {
          chatMsgId: OB
        } = (0, zB.b)(BB.payload);
        JB.o.tM("chatRemoved", OB, !0)
      }
    }));
    const ZB = {
        chatReceived: (0, yB.h)((function(BB) {
          var OB, GB, YB;
          return {
            id: BB,
            name: null !== (OB = pB.d.getName(BB)) && void 0 !== OB ? OB : null,
            local: (0, lB.h)() === BB,
            profileEffect: null !== (GB = null === (YB = (0, pB.f)(BB)) || void 0 === YB ? void 0 : YB.profileEffect) && void 0 !== GB ? GB : null
          }
        })),
        chatRemoved: yB.l
      },
      NB = {
        sendChatMessage(BB) {
          var OB, GB;
          let {
            ty: YB,
            channelName: DB
          } = BB;
          return null !== (OB = null === (GB = (0, oB.j)()) || void 0 === GB ? void 0 : GB.clientApi.sendChat(YB, DB)) && void 0 !== OB && OB
        }
      };
    var RB = GB(192),
      WB = GB(2050),
      AB = GB(41579),
      VB = GB(40372);
    const SB = [0, 0, 0],
      nB = {
        codeBlockClickable(BB) {
          var OB;
          const GB = (0, oB.j)();
          if (null === GB || void 0 === GB || !GB.isSessionLive) return !1;
          const YB = GB.api;
          if (0 !== (AB.u.playerFlags(YB.apiView, 0) & AB.Id.Crouching)) return !1;
          const DB = YB.queries.directorEntity(YB.localId) >= AB.xb.BYTES ? YB.memoryData(YB.scratch(), AB.xb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === DB) return !1;
          for (let QB = 0; QB < 3; QB++) SB[QB] = AB.xb.feet(DB, 0, QB);
          return SB[1] += AB.xb.eyeHeight(DB, 0), (0, VB.e)(SB, BB, null !== (OB = WB.e.get("blockReach")) && void 0 !== OB ? OB : RB.f.BN)
        }
      },
      UB = {
        clickCodeBlock(BB) {
          var OB;
          null === (OB = (0, oB.j)()) || void 0 === OB || OB.clickCodeBlock(BB)
        }
      };
    var fB = GB(41602),
      kB = GB(42031),
      dB = GB(1049),
      KB = GB(39741),
      uB = GB(5269),
      mB = GB(41616),
      IB = GB(41600),
      FB = GB(41624);

    function iB(BB) {
      if (null === BB) return null;
      const OB = [];
      for (const GB of BB) {
        const BB = Object.keys(GB)[0];
        if ("WB" === BB) {
          const {
            str: BB,
            style: YB,
            clickableUrl: DB
          } = GB.WB, QB = Object.keys(BB)[0], oB = BB[QB];
          "string" !== QB && "styledEntityName" !== QB && "styledTranslatedText" !== QB || OB.push({
            str: oB,
            style: YB,
            clickableUrl: DB
          })
        } else OB.push(GB[BB])
      }
      return OB
    }
    const LB = {
      screenPos(BB) {
        var OB, GB;
        return null !== (OB = null === (GB = (0, oB.j)()) || void 0 === GB ? void 0 : GB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== OB ? OB : {
          x: 0,
          y: 0
        }
      }
    };
    let gB = !1;

    function rB() {
      gB || (gB = !0, (0, qB.g)(MB.oc.ProgressBarUpdate, (BB => {
        const OB = (0, FB.l)(BB);
        (0, FB.e)(OB) && JB.o.tM("progressBarUpdate", OB, !0)
      })), (0, qB.g)(mB.x, (BB => {
        const OB = (0, FB.h)(mB.x, BB);
        OB && JB.o.tM("middleScreenBarInitiate", {
          duration: OB.tG,
          BY: OB.BY,
          horizBarRemOffset: OB.OY
        }, !0)
      })), (0, qB.g)(MB.oc.RemoveMiddleScreenBar, (() => {
        JB.o.tM("middleScreenBarRemove")
      })), (0, qB.g)(mB.$, (BB => {
        const OB = (0, FB.h)(mB.$, BB);
        if (OB) {
          var GB;
          const BB = OB.bG ? null === (GB = (0, oB.j)()) || void 0 === GB ? void 0 : GB.renderFrame.projectDirectionToScreenPos(OB.bG) : void 0;
          JB.o.tM("sendHitmarker", {
            GD: OB.GD,
            screenPos: BB
          }, !0)
        }
      })), (0, qB.g)(mB.fb, (BB => {
        const OB = (0, FB.h)(mB.fb, BB);
        if (OB) {
          const {
            id: BB,
            position: GB,
            style: YB,
            DO: DB,
            oO: QB
          } = OB;
          JB.o.tM("setDirectionArrow", {
            id: BB,
            position: GB,
            style: YB,
            text: iB(DB),
            oO: QB
          }, !0)
        }
      })), (0, qB.g)(mB.g, (BB => {
        const OB = (0, FB.h)(mB.g, BB);
        OB && JB.o.tM("clearDirectionArrow", {
          id: OB.id
        }, !0)
      })), (0, qB.g)(mB.r, (BB => {
        const OB = (0, FB.h)(mB.r, BB);
        OB && JB.o.tM("flyingMiddleMessage", {
          content: iB(OB.RB),
          VB: OB.VB,
          SB: OB.SB
        }, !0)
      })), (0, qB.g)(MB.oc.WorldVariation, (BB => {
        const OB = (0, FB.l)(BB);
        if ("string" === typeof OB) {
          const BB = OB === dB.d ? null : {
            message: `Currently loaded as variation: ${OB}`,
            type: "Warning"
          };
          JB.o.tM("showPermanentBottomMessage", BB, !0)
        }
      })), (0, qB.g)(mB.F, (BB => {
        const OB = (0, FB.h)(mB.F, BB);
        OB && function(BB, OB) {
          const {
            type: GB,
            params: YB
          } = (0, KB.f)(OB), DB = {
            ...YB
          };
          for (const QB of KB.d) DB[QB] && (DB[QB] = iB(DB[QB]));
          uB.d.queueQTE(BB, GB, DB).getResult().then((OB => {
            var GB;
            "boolean" === typeof OB && (null === (GB = (0, oB.j)()) || void 0 === GB || GB.send(IB.c.QteResponse, {
              qteId: BB,
              qteResponse: OB
            }))
          }))
        }(OB.id, OB.IO)
      })), (0, qB.g)(mB.T, (BB => {
        const OB = (0, FB.h)(mB.T, BB);
        "number" === typeof OB && uB.d.cancelQTE(OB)
      })), (0, qB.d)((() => {
        uB.d.reset()
      })), (0, qB.e)((() => {
        uB.d.reset()
      })), (0, qB.g)(MB.oc.EditItemCraftingRecipes, (BB => {
        const OB = (0, FB.l)(BB);
        (0, FB.e)(OB) && JB.o.tM("craftingRecipesEdited", {
          itemName: OB.craftingRecipeItemName,
          recipesForItem: OB.recipesForItem
        })
      })), (0, qB.g)(mB.Q, (BB => {
        const OB = (0, FB.h)(mB.Q, BB);
        OB && JB.o.tM("craftingRecipesEdited", {
          itemName: OB.IQ,
          recipesForItem: []
        })
      })))
    }
    var XB = GB(16);
    const wB = [{
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

    function EB(BB) {
      return AB.u.playerFlags(BB.api.apiView, 0)
    }
    const cB = {
        freeCamera: (0, lB.e)((BB => () => {
          const OB = BB.isSessionLive && 0 !== (EB(BB) & AB.Id.FreeCamMoves),
            GB = BB.freeCameraAllowed() && null === XB.c.get("scriptedCameraFacing");
          return wB[(GB ? 2 : 0) + (OB ? 1 : 0)]
        }), wB[0], (BB => (0, QB.w)(BB)))
      },
      hB = {
        setFreeCameraMovesFly: BB => {
          var OB;
          null === (OB = (0, oB.j)()) || void 0 === OB || OB.setFreeCameraMovesFly(BB)
        }
      },
      aB = {
        freeCameraPos: () => {
          const BB = (0, oB.j)();
          return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (EB(BB) & AB.Id.FreeCam) ? BB.renderFrame.cameraPosition : null
        }
      };
    var eB = GB(39896);
    let TB = !1,
      bB = !1;

    function CB() {
      const BB = (0, oB.j)();
      if (null === BB || void 0 === BB || !BB.isSessionLive) return void(TB = !1);
      const OB = 0 !== (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.FreeCam);
      OB !== TB && (TB = OB, (0, eB.d)(OB))
    }
    var HB = GB(353),
      vB = GB(37723),
      sB = GB(2059);
    var xB = GB(42039),
      tB = GB(41652);
    const BO = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let OO = "off";

    function GO(BB) {
      var OB;
      return null === BB ? null : {
        label: null !== (OB = (0, xB.c)(BB, "interactionPrompt")) && void 0 !== OB ? OB : null
      }
    }
    const YO = new Map([
      [AB.vc.Open, {
        label: yB.e.open
      }],
      [AB.vc.Close, {
        label: yB.e.close
      }],
      [AB.vc.Milk, {
        label: yB.e.milk
      }],
      [AB.vc.Shear, {
        label: yB.e.shear
      }],
      [AB.vc.Tame, {
        label: yB.e.tame
      }],
      [AB.vc.Feed, {
        label: yB.e.feed
      }],
      [AB.vc.Ride, {
        label: yB.e.ride
      }]
    ]);
    class DO {
      constructor() {
        this.target = BO, this.SM = AB.fd, this.optionName = null, this.pickaxe = new yB.d
      }
      read(BB) {
        var OB;
        const GB = AB.u.targetBlockId(BB.api.apiView, 0);
        GB !== this.SM && (this.SM = GB, this.optionName = GB === AB.fd ? null : `${BB.tables.getMetaInfo(GB).rootName}CrosshairText`);
        const YB = null === this.optionName ? null : null !== (OB = BB.tables.getClientOption(this.optionName)) && void 0 !== OB ? OB : null;
        this.pickaxe.update(function(BB, OB) {
          var GB, YB, DB;
          if (0 === (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.Breaking) || OB === AB.fd || 0 === OB) return null;
          const {
            tables: QB
          } = BB;
          if (!0 === QB.getClientOption("creative")) return null;
          const oB = QB.nameOfId(OB),
            jB = null === (GB = BB.items.sJ()) || void 0 === GB ? void 0 : GB.name,
            yB = null !== (YB = QB.getItemStat(oB, "harvestLevel")) && void 0 !== YB ? YB : 0;
          return (0, HB.Pc)({
            blockHarvestType: QB.getDefaultItemStat(oB, "harvestType"),
            blockHarvestLevel: QB.getDefaultItemStat(oB, "harvestLevel"),
            harvestLevel: yB,
            heldToolType: void 0 === jB ? void 0 : QB.getDefaultItemStat(jB, "harvests"),
            heldToolLevel: void 0 === jB ? void 0 : QB.getDefaultItemStat(jB, "level")
          }) && null !== (DB = vB.s[yB]) && void 0 !== DB ? DB : null
        }(BB, GB)), BB.watchPromptPick(OO);
        const DB = "touch" === OO ? function(BB) {
          var OB;
          const GB = BB.interactLabel;
          return GB === AB.vc.Entity ? GO(BB.promptEntity) : GB === AB.vc.TameWith ? {
            label: (0, yB.w)(BB.tables.nameOfId(BB.interactIcon))
          } : null !== (OB = YO.get(GB)) && void 0 !== OB ? OB : null
        }(BB) : GO(BB.promptEntity);
        return this.target = (0, sB.k)(this.target, {
          interactPrompt: DB,
          blockText: YB,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let QO = null;
    const oO = {
      current: () => {
        var BB, OB;
        return null !== (BB = null === (OB = QO) || void 0 === OB ? void 0 : OB.target) && void 0 !== BB ? BB : BO
      },
      watch: BB => {
        const OB = new DO;
        QO = OB;
        const GB = (0, lB.l)((GB => {
          let YB = OB.read(GB);
          BB(YB);
          const DB = (0, QB.z)((() => {
            const DB = OB.read(GB);
            DB !== YB && (YB = DB, BB(DB))
          }));
          return () => {
            DB(), GB.watchPromptPick("off")
          }
        }));
        return () => {
          GB(), QO === OB && (QO = null)
        }
      }
    };
    let jO = 0,
      yO = 0;
    const JO = {
        health: yB.s,
        aura: yB.f,
        hotbar: tB.c.states.hotbar,
        heldItemAim: tB.c.states.heldItemAim,
        crouching: (0, lB.e)((BB => function(BB) {
          const OB = () => 0 !== (AB.u.playerFlags(BB.apiView, 0) & AB.Id.Crouching);
          return {
            current: OB,
            watch(BB) {
              let GB = OB();
              return (0, QB.w)((() => {
                const YB = OB();
                YB !== GB && (GB = YB, BB(YB))
              }))
            }
          }
        }(BB.api).current), !1, (BB => (0, QB.w)(BB))),
        flight: (0, lB.e)((BB => () => function(BB) {
          const OB = AB.u.playerFlags(BB.apiView, 0);
          return (0, yB.o)(0 !== (OB & AB.Id.CanFly), 0 !== (OB & AB.Id.Flying))
        }(BB.api)), (0, yB.o)(!1, !1), (BB => (0, QB.w)(BB))),
        gliderBoostFuel: (0, lB.e)((BB => () => AB.u.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, QB.w)(BB))),
        crosshairTarget: oO
      },
      MO = {
        hotbarSlotRequested: tB.c.events.hotbarSlotRequested,
        hotbarScrolled: tB.c.events.hotbarScrolled,
        numberKeyPressed: tB.c.events.numberKeyPressed,
        shotDamageToShow: (0, yB.u)((BB => !0 === (0, xB.c)(BB, "showDamageAmounts")))
      },
      PO = {
        selectHotbarSlot: tB.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: BB => {
          OO = BB
        }
      },
      zO = {
        momentumFrac: function() {
          var BB, OB, GB;
          const YB = (0, oB.j)(),
            DB = performance.now(),
            QB = null === YB || void 0 === YB || null === (BB = YB.items.sJ()) || void 0 === BB || null === (OB = BB.attributes) || void 0 === OB || null === (GB = OB.customAttributes) || void 0 === GB ? void 0 : GB.enchantments;
          return jO = null !== YB && null !== QB && void 0 !== QB && QB.Momentum ? 0 !== (AB.u.playerFlags(YB.api.apiView, 0) & AB.Id.Breaking) ? Math.max(0, AB.u.momentumFrac(YB.api.apiView, 0)) : Math.max(0, jO - (DB - yO) / 1500) : 0, yO = DB, jO
        }
      };
    var lO = GB(41587);
    const pO = {
      lobbyManage(BB) {
        var OB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.LobbyManage, BB)
      }
    };
    var qO = GB(1238),
      ZO = GB(37166),
      NO = GB(9460),
      RO = GB(1699),
      WO = GB(2617),
      AO = GB(5296);
    let VO = !1;

    function SO(BB) {
      VO = BB
    }

    function nO() {
      "inGame" !== XB.c.get("gameState") || (0, RO.u)() || JB.o.tM("ctrlCrouchWithoutFullscreen")
    }
    let UO = !1;
    const fO = {
        OpenEmoteWheel: () => {
          SO(!0), UO = !0, queueMicrotask((() => {
            UO && (UO = !1, JB.o.tM("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          JB.o.tM("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, ZO.b)() || JB.o.tM("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, ZO.b)() || JB.o.tM("XKeyPressed")
        },
        CtrlCrouch: nO,
        "primary-fire": () => {
          JB.o.tM("mouseState", {
            OM: qO.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          JB.o.tM("mouseState", {
            OM: qO.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          JB.o.tM("mouseState", {
            OM: qO.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      kO = {
        OpenEmoteWheel: () => {
          SO(!1), UO ? (UO = !1, (0, NO.b)() || JB.o.tM("requestEmoteWheelHoldOpen")) : JB.o.tM("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: nO,
        "primary-fire": () => {
          JB.o.tM("mouseState", {
            OM: qO.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          JB.o.tM("mouseState", {
            OM: qO.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          JB.o.tM("mouseState", {
            OM: qO.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let dO = !1;

    function KO() {
      dO || (dO = !0, (0, AO.g)((BB => {
        if ((0, DB.e)()) return;
        const OB = (0, AO.f)(BB) ? "primary-fire" : BB.action;
        var GB;
        if (BB.down) {
          if (0 === (BB.flags & WO.c.Synthetic)) {
            var YB;
            null === (YB = fO[OB]) || void 0 === YB || YB.call(fO)
          }
        } else null === (GB = kO[OB]) || void 0 === GB || GB.call(kO)
      })))
    }
    var uO = GB(331),
      mO = GB(92),
      IO = GB(31),
      FO = GB(41897),
      iO = GB(1350),
      LO = GB(2643);
    let gO = !1;
    const rO = {
      sendCodeCollab(BB) {
        var OB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.CodeCollab, (0, IB.j)(BB), (0, LO.e)(BB))
      }
    };
    var XO = GB(39804),
      wO = GB(9394);
    let EO = null,
      cO = !1,
      hO = null;

    function aO() {
      return "inGame" === XB.c.get("gameState") && !(0, ZO.b)()
    }
    const eO = {
        OpenInventory: BB => {
          (0, RO.D)(BB, "inventory", (0, lO.k)())
        },
        OpenShop: BB => {
          EO && aO() && (0, RO.A)(BB, uO.p.SHOP, !EO.shopIsEmpty(WB.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: BB => {
          aO() && (0, RO.A)(BB, uO.p.LOBBY_LEADERBOARD, (0, XO.b)({
            lobbyLeaderboardInfo: WB.e.get("lobbyLeaderboardInfo"),
            lobbyManage: WB.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: BB => {
          var OB;
          const GB = null === (OB = EO) || void 0 === OB ? void 0 : OB.getClientGameMapKey();
          GB ? (0, RO.E)(BB, !0, GB) : (0, RO.D)(BB, "retentionFeatures", !(!WB.e.get("_tasks") && !WB.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: BB => {
          (0, RO.D)(BB, "inviteLink", mO.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: BB => {
          aO() && function(BB) {
            const OB = (0, oB.j)(),
              GB = null !== OB && void 0 !== OB && OB.isSessionLive ? OB.api : null,
              YB = GB ? GB.pR(GB.localId) : null;
            (0, RO.E)(BB, null !== YB && (0, LO.c)((0, iO.c)()), (() => {
              (0, LO.h)(YB)
            }))
          }(BB)
        },
        HideUi: () => {
          JB.o.tM("showUi", !1)
        }
      },
      TO = {
        HideUi: () => {
          JB.o.tM("showUi", !0)
        }
      };

    function bO() {
      cO || (cO = !0, GB.e(173).then((() => GB(63844))).then((BB => {
        EO = BB
      }), (BB => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", BB)
      })), (0, FO.t)((BB => {
        BB || !(0, FO.f)() || (0, mO.isMobile)() || !IO.g.getItem("disableFullscreen") || (0, RO.r)() || XB.c.set({
          openEverythingMenuName: uO.p.SETTINGS
        })
      })), (0, AO.g)((BB => {
        let {
          action: OB,
          down: GB,
          press: YB
        } = BB;
        var QB, oB;
        (0, DB.e)() || (GB ? null === (QB = eO[OB]) || void 0 === QB || QB.call(eO, function(BB) {
          var OB;
          if (0 === BB || (null === (OB = hO) || void 0 === OB ? void 0 : OB.press) !== BB) {
            const OB = {
              press: BB,
              event: (0, wO.b)("inputAction")
            };
            hO = OB, queueMicrotask((() => {
              hO === OB && (hO = null)
            }))
          }
          return hO.event
        }(YB)) : null === (oB = TO[OB]) || void 0 === oB || oB.call(TO))
      })))
    }
    var CO = GB(39730),
      HO = GB(39720),
      vO = GB(39713);
    const sO = {
      completeTask(BB) {
        var OB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.CompleteTask, (0, IB.m)(BB))
      },
      setServerCookie(BB) {
        var OB;
        let {
          key: GB,
          value: YB
        } = BB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.GeneralCookieSet, (0, IB.p)({
          zJ: GB,
          lJ: YB
        }))
      },
      answerUiRequest(BB) {
        var OB;
        let {
          id: GB,
          UJ: YB
        } = BB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.UiRequestResp, (0, IB.O)({
          RM: GB,
          WM: YB,
          AM: 5
        }))
      },
      chooseRewardedAd(BB) {
        var OB;
        let {
          id: GB,
          UJ: YB
        } = BB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.UiRequestResponded, (0, IB.M)({
          id: GB,
          UJ: YB
        }))
      },
      requestLeaderboard(BB) {
        var OB;
        let {
          category: GB,
          timeframe: YB,
          seeTop: DB
        } = BB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.LeaderboardRequest, {
          category: GB,
          timeframe: YB,
          seeTop: DB
        })
      }
    };
    let xO = !1;
    const tO = RB.f.sZ / 2,
      BG = [tO, -tO, -tO, -tO, tO, tO, -tO, tO],
      OG = [0, 0, 0];

    function GG(BB, OB, GB) {
      for (let YB = 0; YB < BB.length; YB += 2)
        if (BB[YB] === OB && BB[YB + 1] === GB) return !0;
      return !1
    }
    const YG = {
      blocksStandingOn: function() {
        const BB = (0, oB.j)();
        if (null === BB) return [];
        const {
          api: OB,
          chunks: GB,
          tables: YB
        } = BB;
        if (!OB.readPosition(OB.localId, OG)) return [];
        const [DB, QB, jB] = OG, yB = Math.ceil(QB) - 1, JB = [], MB = [];
        for (let oB = 0; oB < BG.length; oB += 2) {
          const BB = DB + BG[oB],
            OB = jB + BG[oB + 1];
          if (Number.isInteger(BB) || Number.isInteger(OB)) continue;
          const QB = Math.floor(BB),
            PB = Math.floor(OB);
          if (GG(MB, QB, PB)) continue;
          const zB = GB.SM(QB, yB, PB);
          YB.isSolidBlockId(zB) && (MB.push(QB, PB), JB.push(YB.nameOfId(zB)))
        }
        return JB
      },
      dropAhead: function() {
        const BB = (0, oB.j)();
        return null !== BB && 0 !== (AB.u.playerFlags(BB.api.apiView, 0) & AB.Id.DropAhead)
      }
    };
    var DG = GB(37650),
      QG = GB(39782),
      oG = GB(1400),
      jG = GB(41667);
    const yG = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      JG = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function MG() {
      const BB = new Set;
      return {
        add: OB => (BB.add(OB), () => {
          BB.delete(OB)
        }),
        fire() {
          for (const OB of BB) OB()
        }
      }
    }
    const PG = Object.freeze([]);

    function zG(BB, OB) {
      let GB, {
        rereads: YB,
        followLocalId: DB
      } = OB;
      const oB = () => (GB = (0, sB.k)(GB, BB()), GB);
      return {
        current: oB,
        watch(BB) {
          const OB = (0, pB.b)((OB => {
            YB(OB) && BB(oB())
          }));
          if (!DB) return OB;
          let GB = (0, lB.h)();
          const jB = (0, QB.z)((() => {
            const OB = (0, lB.h)();
            OB !== GB && (GB = OB, BB(oB()))
          }));
          return () => {
            OB(), jB()
          }
        }
      }
    }
    const lG = {
        players: zG((function() {
          const BB = pB.d.ids(),
            OB = {};
          for (const QB of BB) {
            var GB, YB, DB;
            OB[QB] = {
              name: null !== (GB = pB.d.getName(QB)) && void 0 !== GB ? GB : null,
              ranks: null !== (YB = pB.d.getSetting(QB, "ranks")) && void 0 !== YB ? YB : PG,
              cosmetics: null !== (DB = (0, pB.f)(QB)) && void 0 !== DB ? DB : null
            }
          }
          return {
            ids: BB,
            byId: OB,
            localId: (0, lB.h)()
          }
        }), {
          rereads: BB => "roster" !== BB.kind || BB.members || BB.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: zG((function() {
          const BB = {};
          for (const DB of pB.d.ids()) {
            var OB, GB, YB;
            BB[DB] = {
              colour: null !== (OB = pB.d.getSetting(DB, "colorInLobbyLeaderboard")) && void 0 !== OB ? OB : null,
              values: null !== (GB = pB.d.getSetting(DB, "lobbyLeaderboardValues")) && void 0 !== GB ? GB : null,
              tags: null !== (YB = pB.d.getSetting(DB, "lobbyLeaderboardTags")) && void 0 !== YB ? YB : null
            }
          }
          return BB
        }), {
          rereads: function(BB) {
            if ("roster" !== BB.kind) return "reset" === BB.kind;
            const {
              members: OB,
              settings: GB
            } = BB;
            return OB || GB.has("colorInLobbyLeaderboard") || GB.has("lobbyLeaderboardValues") || GB.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      pG = {
        cosmeticsUpdated: {
          watch: BB => (0, pB.b)((OB => {
            if ("cosmetics" !== OB.kind) return;
            const GB = (0, lB.h)();
            BB(OB.updates.map((BB => {
              let {
                nB: OB,
                UB: YB,
                fB: DB
              } = BB;
              return {
                local: OB === GB,
                UB: YB,
                fB: DB
              }
            })))
          }))
        }
      };
    var qG = GB(3262),
      ZG = GB(1822),
      NG = GB(677),
      RG = GB(41935);
    let WG = !1,
      AG = null;
    const VG = {
      setShopOpen(BB) {
        var OB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.ShopMenuChanged, (0, IB.I)(BB))
      },
      buyShopItem(BB) {
        var OB;
        let {
          categoryKey: GB,
          itemKey: YB,
          userInput: DB
        } = BB;
        null === (OB = (0, oB.j)()) || void 0 === OB || OB.send(IB.c.ItemBought, {
          categoryKey: GB,
          itemKey: YB,
          shopVersion: WB.e.get("_shopVersion"),
          userInput: DB
        })
      }
    };
    let SG = !1;
    var nG = GB(5313);
    const UG = WO.y.LookFrozen | WO.y.ClicksSuppressed;

    function fG(BB, OB) {
      var GB;
      null !== (GB = (0, oB.j)()) && void 0 !== GB && GB.send(BB, OB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
    }(0, qB.g)(mB.hb, (BB => {
      const OB = (0, FB.h)(mB.hb, BB);
      void 0 !== OB && JB.o.tM("setDiscordReportKey", OB)
    }));
    const kG = {
      ignorePlayer(BB) {
        fG(IB.c.IgnoreUser, (0, IB.s)({
          nM: BB
        }))
      },
      reportPlayer(BB) {
        let {
          playerId: OB,
          chatMsgId: GB,
          policy: YB,
          details: DB
        } = BB;
        fG(IB.c.UserReport, (0, IB.$)({
          Hy: OB,
          vy: GB,
          policy: YB,
          Jy: DB
        }))
      },
      reportWorldCodeChat(BB) {
        let {
          chatMsgId: OB,
          policy: GB,
          details: YB
        } = BB;
        fG(IB.c.UserReport, (0, IB.$)({
          Hy: "",
          vy: OB,
          policy: GB,
          Jy: YB
        }))
      },
      requestDiscordReportKey(BB) {
        fG(IB.c.ReqDiscordReportKey, (0, IB.B)(BB))
      },
      reportLobbyOrGame(BB) {
        let {
          target: OB,
          policy: GB,
          details: YB
        } = BB;
        "customGame" === OB ? fG(IB.c.CustomGameReport, (0, IB.o)({
          policy: GB,
          Jy: YB
        })) : fG(IB.c.LobbyReport, (0, IB.u)({
          policy: GB,
          Jy: YB
        }))
      },
      updateMyCosmetic(BB) {
        fG(IB.c.UpdateMyCosmetic, (0, IB.Z)(BB))
      },
      holdEmoteWheel(BB) {
        !BB || VO ? (0, nG.m)(UG, BB ? UG : 0) : JB.o.tM("requestEmoteWheelHoldRelease")
      }
    };
    var dG = GB(42042),
      KG = GB(9927),
      uG = GB(40400);
    const mG = [0, 0, 0],
      IG = [0, 0, 0],
      FG = [0, 0, 0],
      iG = {
        blockAtViewPoint(BB) {
          let {
            x: OB,
            y: GB
          } = BB;
          const YB = (0, oB.j)();
          if (null === YB || void 0 === YB || !YB.renderFrame.hasView) return null;
          const {
            renderFrame: DB,
            clientApi: QB,
            api: jB
          } = YB;
          let yB = 0;
          return (0, uG.e)(((BB, OB, GB) => (yB = QB.getBlockId(BB, OB, GB), 0 !== yB)), DB.cameraPosition, (0, uG.h)((BB => AB.u.viewProj(jB.apiView, 0, BB)), OB, GB, mG), uG.b, IG, FG) ? {
            pos: [IG[0], IG[1], IG[2]],
            normal: [FG[0], FG[1], FG[2]],
            name: (0, KG.d)(yB)
          } : null
        }
      },
      LG = {
        setBlockHighlight(BB) {
          var OB;
          null === (OB = (0, oB.j)()) || void 0 === OB || OB.setBlockHighlight(BB)
        }
      };
    var gG = GB(2034),
      rG = GB(41924),
      XG = GB(42045),
      wG = GB(2072),
      EG = GB(37083),
      cG = GB(244);
    const hG = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      aG = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * hG.fallbackRem,
        asked: new Set
      },
      eG = 2e3,
      TG = 4;
    let bG = [],
      CG = !1,
      HG = !1,
      vG = !1;
    const sG = new Set,
      xG = [];
    let tG = 0,
      BY = null;

    function OY() {
      return CG && (0, EG.k)()
    }

    function GY() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YB.gameBridge.latest("inventory");
      if (vG && !HG) {
        for (const GB of BB.player) {
          var OB;
          if (null !== GB) YY(null !== (OB = GB.icon) && void 0 !== OB ? OB : GB.name, hG)
        }
        for (const BB of [...AB.H, ...bG]) YY(BB, aG);
        QY()
      }
    }

    function YY(BB, OB) {
      OB.asked.has(BB) || sG.has(BB) || ("model" === YB.gameBridge.lookup("itemIcon", BB).kind ? (OB.asked.add(BB), xG.push({
        name: BB,
        slot: OB
      })) : sG.add(BB))
    }

    function DY(BB) {
      bG = BB, GY()
    }

    function QY() {
      !vG || HG || null !== BY || 0 === xG.length || tG >= TG || (BY = (0, cG.b)((() => {
        BY = null;
        const BB = xG.shift();
        void 0 !== BB && vG && (tG++, async function(BB, OB) {
          var GB, DB;
          if (await (0, EG.q)(), !vG) return void OB.asked.delete(BB);
          if (!(0, EG.k)()) return void(HG = !0);
          const QB = window.devicePixelRatio,
            oB = null !== (GB = null === (DB = document.querySelector(OB.icon)) || void 0 === DB ? void 0 : DB.getBoundingClientRect().width) && void 0 !== GB ? GB : 0,
            jB = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            yB = Math.round((oB > 0 ? oB : OB.fallbackRem * jB) * QB);
          try {
            await YB.gameBridge.query("blockIcon", {
              name: BB,
              size: yB,
              lineWidth: (0, wG.b)(QB)
            }) || OB.asked.delete(BB)
          } catch {
            OB.asked.delete(BB)
          }
        }(BB.name, BB.slot).finally((() => {
          tG--, QY()
        })), QY())
      }), {
        timeoutMs: eG
      }))
    }
    var oY = GB(4908),
      jY = GB(4891),
      yY = GB(42048),
      JY = GB(3708),
      MY = GB(3711);
    let PY = null,
      zY = null;

    function lY(BB) {
      const OB = BB.startsWith(MY.k),
        [GB, YB = GB, DB = GB] = (OB ? BB.slice(MY.k.length) : BB).split(MY.i);
      return {
        top: GB,
        left: YB,
        right: DB,
        half: OB
      }
    }

    function pY(BB) {
      const OB = null === PY ? void 0 : (0, JY.c)(BB),
        GB = void 0 === OB ? 0 : PY.codes[OB];
      return 0 === GB ? void 0 : PY.pool[GB - 1]
    }
    var qY = GB(3705),
      ZY = GB(4882),
      NY = GB(4901),
      RY = GB(36997),
      WY = GB(37e3);
    const AY = "item:";
    let VY = null,
      SY = null,
      nY = null,
      UY = null,
      fY = !1,
      kY = !1;

    function dY() {
      return kY || (kY = !0, (0, NY.o)().then((BB => {
        BB && (0, gG.b)()
      }))), nY ??= Promise.all([(0, qY.d)(), (zY ??= GB.e(1).then((() => GB(63859))).then((BB => {
        let {
          BLOCK_FACE_RUNS: OB,
          BLOCK_FACES: GB,
          MAX_FACE_ITEM_ID: YB
        } = BB;
        PY = {
          codes: (0, MY.z)(OB, YB + 1),
          pool: GB.split(MY.r).map(lY)
        }
      }), (BB => {
        throw zY = null, BB
      })), zY), (0, WY.f)(), GB.e(220).then((() => GB(34813)))]).then((BB => {
        let [, , OB, GB] = BB;
        OB.followBundledTextures(), VY = OB, SY = GB, (0, gG.b)()
      }), (BB => {
        nY = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", BB)
      })), nY
    }

    function KY(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = (0, RY.k)()) || void 0 === GB ? void 0 : GB.textureUrl(BB)) && void 0 !== OB ? OB : VY.itemSpriteUrl(BB)
    }

    function uY(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = (0, RY.k)()) || void 0 === GB ? void 0 : GB.textureUrl(BB)) && void 0 !== OB ? OB : VY.blockTextureUrl(BB)
    }

    function mY(BB) {
      var OB;
      return null !== (OB = (0, qY.b)(BB)) && void 0 !== OB ? OB : BB
    }

    function IY(BB, OB) {
      var GB, YB, DB;
      return null !== (GB = null !== (YB = null !== (DB = uY(BB)) && void 0 !== DB ? DB : null === OB || void 0 === OB ? void 0 : OB.rotated[BB]) && void 0 !== YB ? YB : null === OB || void 0 === OB ? void 0 : OB.animated[BB]) && void 0 !== GB ? GB : VY.notFoundUrl()
    }

    function FY(BB) {
      return void 0 !== (0, JY.c)(BB) ? BB : /^[1-9][0-9]*$/.test(BB) ? (0, JY.g)(Number(BB)) : void 0
    }

    function iY(BB) {
      var OB;
      if (BB.startsWith(AY)) {
        var GB;
        const OB = (0, qY.b)(BB.slice(5));
        return null !== (GB = void 0 === OB ? null : KY(OB)) && void 0 !== GB ? GB : VY.notFoundUrl()
      }
      return null !== (OB = VY.particleUrl(BB)) && void 0 !== OB ? OB : VY.notFoundUrl()
    }

    function LY(BB, OB) {
      return "StairsBlock" === BB ? BB : OB ? "SlabBlock" : "CubeBlock"
    }
    const gY = {
        async blockIcon(BB) {
          var OB;
          let {
            name: YB,
            size: DB,
            lineWidth: QB
          } = BB;
          await dY();
          const oB = null !== (OB = FY(YB)) && void 0 !== OB ? OB : YB,
            jB = (0, NY.f)(oB, DB, QB);
          if (null !== jB) return jB;
          const yB = pY(oB),
            JB = (0, JY.c)(oB),
            MB = void 0 === JB || null === SY ? void 0 : SY.itemTypeNameOf(JB);
          if (null === VY || void 0 === yB) return "";
          const PB = [yB.top, yB.left, yB.right].some((BB => null === uY(BB))),
            zB = PB ? await (UY ??= GB.e(228).then((() => GB(34878))).then((BB => (fY && (fY = !1, (0, gG.b)()), {
              rotated: BB.rotatedBlockTextures,
              animated: BB.animatedBlockTextures
            })), (BB => (UY = null, fY = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", BB), null))), UY) : null;
          if (PB && null === zB) return "";
          const lB = {
              top: IY(yB.top, zB),
              left: IY(yB.left, zB),
              right: IY(yB.right, zB),
              itemType: LY(MB, yB.half)
            },
            pB = (0, RY.g)(),
            qB = 0 === pB ? oB : `${oB}#${pB}`;
          return (await (0, ZY.c)()).drawBlockIconUrl(qB, DB, QB, (() => lB))
        }
      },
      rY = {
        itemIcon: function(BB) {
          var OB, GB, DB, QB;
          if (null === VY) return dY(), YB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          if ((0, jY.j)(BB)) return {
            kind: "icon",
            url: null !== (GB = null !== (DB = null === (QB = (0, RY.k)()) || void 0 === QB ? void 0 : QB.textureUrl(BB)) && void 0 !== DB ? DB : VY.ingameIconUrl(BB)) && void 0 !== GB ? GB : VY.notFoundUrl()
          };
          if (BB.startsWith(jY.c)) return {
            kind: "icon",
            url: iY(BB.slice(jY.c.length))
          };
          if (0 === (0, JY.k)()) return (0, yY.b)(), YB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
          const oB = null !== (OB = FY(BB)) && void 0 !== OB ? OB : BB,
            jB = (0, JY.c)(oB),
            yB = void 0 === jB ? void 0 : SY.itemTypeNameOf(jB);
          if (void 0 !== pY(oB)) return {
            kind: "drawnBlock"
          };
          const JB = function(BB) {
            var OB;
            return null !== (OB = KY(mY(BB))) && void 0 !== OB ? OB : VY.notFoundUrl()
          }(oB);
          if ((0, NY.n)(oB) && ! function(BB) {
              const OB = (0, RY.k)();
              return null !== OB && (null !== OB.textureUrl(mY(BB)) || (0, NY.e)(BB).some((BB => null !== OB.modelUrl(BB))))
            }(oB)) return {
            kind: "model",
            url: JB,
            drawn: (0, NY.j)(oB)
          };
          if ("Gun" === yB) return {
            kind: "gun",
            url: JB
          };
          if (void 0 !== jB && "GrayscaleArmour" === SY.itemTypeOf(jB) || Object.hasOwn(oY.e, oB)) {
            var MB;
            const OB = null !== (MB = (0, oY.g)(BB)) && void 0 !== MB ? MB : (0, oY.g)(oB);
            if (OB) return {
              kind: "item",
              url: JB,
              tint: OB
            }
          }
          return {
            kind: "item",
            url: JB
          }
        },
        hasIcon: function(BB) {
          return void 0 !== FY(BB) || (0, jY.j)(BB) || BB.startsWith(jY.c)
        },
        isItemName: function(BB) {
          return void 0 !== FY(BB)
        }
      };

    function XY() {
      (0, YB.installPageSources)({
        commands: {
          ...YB.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: rG.o,
          prewarmCreativeIcons: DY
        },
        queries: gY,
        lookups: {
          ...YB.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...rY,
          bR: rG.h,
          drawCallStats: XG.i,
          iconsDrawAhead: OY
        }
      }), (0, gG.b)(), dY(), CG || (CG = !0, JB.o.subscribe("gameJoined", (() => {
        var BB;
        vG = !1, null === (BB = BY) || void 0 === BB || BB(), BY = null;
        for (const {
            name: OB,
            slot: GB
          }
          of xG.splice(0)) GB.asked.delete(OB)
      })), JB.o.subscribe("gamePlayable", (() => {
        vG = !0, GY()
      })), YB.gameBridge.subscribe("inventory", GY), YB.gameBridge.subscribe("itemIconsVersion", (() => {
        sG.clear(), GY()
      })))
    }
    var wY = GB(633),
      EY = GB(40406);

    function cY(BB) {
      if (null === BB || void 0 === BB || !BB.isCoreRunning) return null;
      const {
        api: OB,
        chunks: GB,
        items: YB,
        tables: DB
      } = BB;
      return {
        playerFeet() {
          const BB = OB.pR(OB.localId);
          return null !== BB && void 0 !== BB && BB.every(Number.isFinite) ? BB : null
        },
        chunkBlocks: BB => GB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, OB, YB) => GB.SM(BB, OB, YB) : null,
        blockName: BB => DB.nameOfId(BB),
        inventory: () => ({
          slots: YB.playerItems().map((BB => BB ? {
            name: BB.name,
            amount: BB.amount
          } : null)),
          heldSlot: YB.selectedSlot
        }),
        nearby() {
          const GB = [];
          for (let DB = 0; DB < OB.idStr.length; DB++) {
            var YB;
            const QB = OB.idStr[DB],
              oB = OB.serverIds[DB],
              jB = OB.kinds[DB];
            if (null === QB || OB.isLocal(oB) || jB >>> AB.c !== AB.t.Lifeform) continue;
            const yB = OB.pR(oB),
              JB = wY.j[jB & AB.g];
            yB && void 0 !== JB && GB.push({
              kind: "Player" === JB ? "player" : JB,
              name: null !== (YB = BB.clientApi.getEntityName(QB)) && void 0 !== YB ? YB : null,
              position: yB
            })
          }
          return GB
        },
        droppedItems() {
          let BB = 0;
          for (let GB = 0; GB < OB.idStr.length; GB++) null !== OB.idStr[GB] && OB.kinds[GB] >>> AB.c === AB.t.Item && BB++;
          return BB
        }
      }
    }
    const hY = {
        worldCodeAiChunk: BB => Promise.resolve((0, EY.d)(cY((0, oB.j)()), BB)),
        worldCodeAiGameState: () => Promise.resolve((0, EY.h)(cY((0, oB.j)())))
      },
      aY = function(BB) {
        const OB = MG(),
          YB = MG(),
          DB = new Set,
          QB = new Set,
          oB = () => {
            var OB, GB;
            return null !== (OB = null === (GB = BB.runtime()) || void 0 === GB ? void 0 : GB.currentViewer) && void 0 !== OB ? OB : null
          };
        let jB = null,
          yB = null;
        const MB = (BB, OB) => ({
            current: BB,
            watch(GB) {
              let YB = BB();
              return OB.add((() => {
                const OB = BB();
                OB !== YB && (YB = OB, GB(OB))
              }))
            }
          }),
          zB = BB => ({
            watch: OB => (BB.add(OB), () => {
              BB.delete(OB)
            })
          }),
          lB = BB => {
            const OB = oB(),
              GB = null === OB || void 0 === OB ? void 0 : OB.view;
            OB && GB && OB.seek(Math.max(0, Math.min(GB.totalTicks - 1, GB.kP + BB * PB.Cd)))
          },
          pB = {
            replay: MB((() => {
              var BB;
              const OB = oB(),
                GB = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null;
              return null === OB || null === GB || GB.state === PB.sd.None ? (jB = null, null) : (jB = (0, sB.k)(jB, {
                id: OB.id,
                kP: GB.kP,
                totalTicks: GB.totalTicks,
                pI: PB.Cd,
                playing: GB.state === PB.sd.Playing,
                speed: GB.speed,
                cameraMode: GB.cameraMode,
                freecam: "freecam" === GB.cameraMode
              }), jB)
            }), OB),
            replayEdits: MB((() => {
              var BB;
              const OB = oB(),
                GB = null !== (BB = null === OB || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null;
              return null === OB || null === GB || GB.state === PB.sd.None ? (yB = null, null) : (yB = (0, sB.k)(yB, {
                cameraKeyframes: [...OB.keyframes],
                playbackMark: GB.mark,
                fileName: OB.fileName,
                unsavedChanges: OB.unsavedChanges,
                suggestSaveAs: OB.suggestSaveAs
              }), yB)
            }), OB),
            replayRecorder: MB((() => {
              var OB, GB;
              return null !== (OB = null === (GB = BB.runtime()) || void 0 === GB ? void 0 : GB.recorder.current) && void 0 !== OB ? OB : jG.c.states.replayRecorder.current()
            }), YB),
            replayVideoExporting: {
              current: QG.b,
              watch: BB => (0, JB.p)("replayViewer|videoExportChanged", (() => {
                BB((0, QG.b)())
              }))
            }
          },
          qB = {
            replayUiActionRequested: zB(QB),
            replayViewerRequested: zB(DB)
          },
          ZB = BB => {
            for (const OB of DB) OB(BB)
          },
          NB = () => {
            var YB;
            !0 === (null === (YB = oB()) || void 0 === YB ? void 0 : YB.isOpen) && Promise.all([GB.e(111), GB.e(78)]).then((() => GB(63849))).then((GB => {
              let {
                startWasmReplayVideoExport: YB
              } = GB;
              return YB({
                viewer: oB,
                canvas: () => {
                  var OB, GB;
                  return null !== (OB = null === (GB = BB.canvas) || void 0 === GB ? void 0 : GB.call(BB)) && void 0 !== OB ? OB : null
                },
                watchViewer: OB.add,
                requestViewer: ZB
              })
            }), (BB => {
              console.error("Couldn't load the video export", BB), oG.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((BB => {
              console.error("The video export failed", BB)
            }))
          },
          RB = {
            replayAction(BB) {
              if ((0, QG.b)()) return;
              const OB = oB();
              switch (BB) {
                case "replaySkipBack":
                  lB(-1);
                  break;
                case "replaySkipForward":
                  lB(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== OB && void 0 !== OB && OB.view && OB.setSpeed((0, DG.d)(OB.view.speed, "replaySpeedUp" === BB ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === OB || void 0 === OB || OB.addKeyframe()
              }
            },
            setReplayPlaying(BB) {
              var OB, GB;
              (0, QG.b)() || (BB ? null === (OB = oB()) || void 0 === OB || OB.play() : null === (GB = oB()) || void 0 === GB || GB.pause())
            },
            seekReplay(BB) {
              var OB;
              let {
                kP: GB,
                ignorePlaybackMark: YB
              } = BB;
              null === (OB = oB()) || void 0 === OB || OB.seek(GB, null !== YB && void 0 !== YB && YB)
            },
            setReplayCameraMode(BB) {
              var OB;
              null === (OB = oB()) || void 0 === OB || OB.setCameraMode(BB)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(BB) {
              var OB;
              null === (OB = oB()) || void 0 === OB || OB.setKeyframe(BB)
            },
            moveReplayCameraKeyframe(BB) {
              var OB;
              let {
                from: GB,
                to: YB
              } = BB;
              null === (OB = oB()) || void 0 === OB || OB.moveKeyframe(GB, YB)
            },
            deleteReplayCameraKeyframes(BB) {
              var OB;
              let {
                start: GB,
                end: YB
              } = BB;
              null === (OB = oB()) || void 0 === OB || OB.deleteKeyframes(GB, YB)
            },
            setReplayPlaybackMark(BB) {
              var OB;
              null === (OB = oB()) || void 0 === OB || OB.setMark(BB)
            },
            cropReplay(BB) {
              var OB, GB;
              let {
                start: YB,
                end: DB
              } = BB;
              return !(0, QG.b)() && (null !== (OB = null === (GB = oB()) || void 0 === GB ? void 0 : GB.crop(YB, DB)) && void 0 !== OB && OB)
            },
            holdReplayForShaderPackFailure(BB) {
              const OB = oB();
              OB && (OB.holdForShaderPackFailure(), function(BB) {
                GB.e(130).then((() => GB(39925))).then((OB => {
                  let {
                    shaderPackPage: GB
                  } = OB;
                  GB.block(BB)
                })).catch((BB => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", BB)
                }))
              }(BB))
            },
            exportReplayVideo() {
              NB()
            },
            toggleRecording() {
              var OB;
              null === (OB = BB.runtime()) || void 0 === OB || OB.recorder.toggleRecording()
            },
            saveClip() {
              var OB;
              null === (OB = BB.runtime()) || void 0 === OB || OB.recorder.saveClip()
            },
            setRecorderPrefs(OB) {
              var GB;
              let {
                clipping: YB,
                clipSeconds: DB
              } = OB;
              null === (GB = BB.runtime()) || void 0 === GB || GB.recorder.setPrefs(YB, DB)
            },
            setReplayViewerOpen(OB) {
              var GB;
              (0, ZO.f)(OB) && (null === (GB = BB.runtime()) || void 0 === GB || GB.recorder.viewerShown(OB))
            },
            recordFlyingMiddleText(OB) {
              var GB;
              let {
                content: YB,
                VB: DB,
                angle: QB,
                SB: oB
              } = OB;
              null === (GB = BB.runtime()) || void 0 === GB || GB.recorder.recordFlyingText(JSON.stringify(YB), DB, QB, oB)
            },
            dragReplayCamera(OB) {
              var GB;
              let {
                dx: YB,
                dy: DB
              } = OB;
              null === (GB = BB.freecam()) || void 0 === GB || GB.drag(YB, DB)
            },
            moveReplayFreecam(OB) {
              var GB;
              null === (GB = BB.freecam()) || void 0 === GB || GB.move(OB)
            },
            holdReplayFreecamVertical(OB) {
              var GB;
              let {
                action: YB,
                sJ: DB
              } = OB;
              null === (GB = BB.freecam()) || void 0 === GB || GB.holdVertical(YB, DB)
            }
          },
          WB = BB => {
            var OB;
            const GB = oB(),
              YB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.view) && void 0 !== OB ? OB : null;
            yG.has(BB) ? (BB => {
              for (const OB of QB) OB(BB)
            })(BB) : JG.has(BB) ? RB.replayAction(BB) : "replayPlayPause" === BB ? GB && YB && YB.state !== PB.sd.None && RB.setReplayPlaying(YB.state !== PB.sd.Playing) : "replayChangeCameraMode" === BB ? null === GB || void 0 === GB || GB.cycleCameraMode() : "replayExit" === BB ? !0 === (null === GB || void 0 === GB ? void 0 : GB.inPlayback) && (0, iO.l)("/") : "replayExportVideo" === BB && NB()
          };
        let AB = !1;
        return {
          states: pB,
          events: qB,
          commands: RB,
          lookups: {
            replayCamera() {
              var OB, GB, YB;
              return !0 !== (null === (OB = oB()) || void 0 === OB ? void 0 : OB.isOpen) ? null : null !== (GB = null === (YB = BB.cameraView) || void 0 === YB ? void 0 : YB.call(BB)) && void 0 !== GB ? GB : null
            },
            leaveGameReloadsPage() {
              var BB;
              return !0 === (null === (BB = oB()) || void 0 === BB ? void 0 : BB.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var BB;
              const GB = !0 === (null === (BB = oB()) || void 0 === BB ? void 0 : BB.inPlayback);
              GB !== AB && (AB = GB, JB.o.tM("connectedGameChanged")), OB.fire()
            },
            recorderChanged: YB.fire,
            keyDown: BB => {
              var OB;
              switch (BB) {
                case "recordGame":
                  return void RB.toggleRecording();
                case "recordClip":
                  return void((0, ZO.b)() || RB.saveClip())
              }(0, QG.b)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, ZO.b)() || !0 === (null === (OB = oB()) || void 0 === OB ? void 0 : OB.inPlayback)) && WB(BB) : ZB("toggle"))
            }
          }
        }
      }({
        runtime: DB.l,
        cameraView: () => {
          var BB;
          const OB = null === (BB = (0, oB.j)()) || void 0 === BB ? void 0 : BB.renderFrame;
          if (!OB) return null;
          const [GB, YB, DB] = OB.cameraPosition, [QB, jB, yB] = OB.cameraDirection;
          return {
            position: [GB, YB, DB],
            direction: [QB, jB, yB]
          }
        },
        canvas: () => {
          var BB, OB, GB;
          return null !== (BB = null === (OB = (GB = (0, QB.O)()).canvas) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : null
        },
        freecam: DB.i
      }),
      eY = {
        states: {
          ...JO,
          ...lO.j,
          ...aY.states,
          ...lG,
          ...cB
        },
        events: {
          ...MO,
          ...ZB,
          ...lO.g,
          ...kB.d,
          ...dG.j,
          ...aY.events,
          ...pG,
          ...fB.h
        },
        commands: {
          ...UB,
          ...PO,
          ...NB,
          ...lO.c,
          ...sO,
          ...kG,
          ...fB.d,
          ...rO,
          ...aY.commands,
          ...VG,
          ...hB,
          ...LG,
          ...pO
        },
        queries: {
          ...lO.h,
          ...hY
        },
        lookups: {
          ...zO,
          ...LB,
          ...dG.n,
          ...aY.lookups,
          ...nB,
          ...YG,
          ...iG,
          ...aB
        }
      };

    function TY() {
      (0, jB.f)(qB.i), (0, DB.m)(aY.feed), (0, kB.h)(), xO || (xO = !0, (0, qB.g)(mB.k, (BB => {
        const OB = (0, FB.h)(mB.k, BB);
        "string" === typeof OB && Promise.resolve().then((() => GB(4073))).then((BB => {
          let {
            onCosmeticPackGranted: GB
          } = BB;
          GB(OB)
        }))
      })), (0, qB.g)(mB.bb, (BB => {
        const OB = (0, FB.h)(mB.bb, BB);
        "number" === typeof OB && JB.o.tM("serverUpdating", Date.now() + OB, !0)
      })), (0, qB.g)(mB.D, (BB => {
        const OB = (0, FB.h)(mB.D, BB);
        if ((0, FB.e)(OB)) {
          const {
            BB: BB,
            OB: GB
          } = OB;
          (0, HO.d)({
            BB: "string" === typeof BB ? BB : null,
            OB: "string" === typeof GB ? GB : null
          })
        }
      })), (0, qB.g)(MB.oc.NewUiRequest, (BB => {
        const OB = (0, FB.l)(BB);
        (0, FB.e)(OB) && "number" === typeof OB.id && (0, FB.e)(OB.clientParameters) && (0, vO.d)(OB.id, OB.clientParameters)
      })), (0, qB.g)(mB.V, (BB => {
        const OB = (0, FB.h)(mB.V, BB);
        "number" === typeof OB && (0, vO.f)(OB)
      })), (0, qB.e)(vO.c), (0, qB.g)(MB.oc.UiRequestPopup, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB) && "number" === typeof OB.id && ("string" === typeof OB.text || (0, FB.e)(OB.text) && "string" === typeof OB.text.translationKey)) {
          const BB = OB.id;
          (0, vO.j)(BB, OB.text, !0 === OB.destructive, (OB => {
            sO.answerUiRequest({
              id: BB,
              UJ: OB
            })
          }))
        }
      })), (0, qB.g)(MB.oc.TopRightHelper, (BB => {
        const OB = (0, FB.l)(BB);
        void 0 !== OB && JB.o.tM("TopRightHelper", OB, !0)
      })), (0, qB.g)(MB.oc.TaskProgress, (BB => {
        const OB = (0, FB.l)(BB);
        (0, FB.e)(OB) && "string" === typeof OB.taskId && "number" === typeof OB.progress && (0, CO.e)({
          taskId: OB.taskId,
          progress: OB.progress
        })
      }))), SG || (SG = !0, (0, qB.g)(mB.t, (BB => {
        const OB = (0, FB.h)(mB.t, BB);
        (0, FB.e)(OB) && JB.o.tM("showShopFromServer", {
          toggle: OB.fO,
          kO: OB.kO
        }, !0)
      })), (0, qB.g)(MB.oc.OverShopInfo, (BB => {
        const OB = (0, FB.l)(BB);
        (0, FB.e)(OB) && JB.o.tM("overShopInfo", OB.info, !0)
      })), (0, qB.g)(MB.oc.ShowShopTutorial, (() => {
        JB.o.tM("showShopTutorial", null, !0)
      }))), WG || (WG = !0, (0, qB.d)((() => {
        var BB;
        (0, qG.resetLeaveEvents)(), null === (BB = AG) || void 0 === BB || BB(), AG = (0, qB.b)() ? (0, NG.onVisitSessionGameServerConnected)(qB.b) : null, (0, qB.b)() || JB.o.kN()
      })), (0, qB.g)(MB.oc.SetCookie, (BB => {
        const OB = (0, FB.l)(BB),
          GB = (0, iO.c)().gameNameWithVariation;
        (0, FB.e)(OB) && "string" === typeof OB.key && null !== GB && (0, ZG.setCookie)(GB, OB.key, OB.value)
      })), (0, qB.g)(MB.oc.LeaveValues, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB) && "string" === typeof OB.leaveEventType) {
          const {
            leaveEventType: BB,
            category: GB,
            subCategory: YB,
            value: DB
          } = OB;
          (0, qG.updateLeaveValue)({
            leaveEventType: BB,
            category: GB,
            subCategory: YB,
            value: DB
          })
        }
      })), (0, qB.g)(MB.oc.CustomAnalyticsEvent, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB) && "string" === typeof OB.cat1) {
          const {
            cat1: BB,
            cat2: GB,
            cat3: YB,
            value: DB
          } = OB;
          (0, qG.logCustomAnalyticsEvent)({
            cat1: BB,
            cat2: GB,
            cat3: YB,
            value: DB
          })
        }
      })), (0, qB.g)(MB.oc.ProgressionEvent, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB)) {
          const {
            type: BB,
            location1: GB,
            location2: YB,
            location3: DB,
            score: QB
          } = OB;
          (0, qG.logProgressionEvent)({
            type: BB,
            location1: GB,
            location2: YB,
            location3: DB,
            score: QB
          })
        }
      })), (0, qB.g)(MB.oc.ResourceEvent, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB)) {
          const {
            type: BB,
            resourceType: GB,
            amount: YB,
            category: DB,
            itemName: QB
          } = OB;
          (0, qG.logResourceEvent)({
            type: BB,
            resourceType: GB,
            amount: YB,
            category: DB,
            itemName: QB
          })
        }
      })), (0, qB.g)(MB.oc.LeaderboardResponse, (BB => {
        const OB = (0, FB.l)(BB);
        if ((0, FB.e)(OB)) {
          const {
            category: BB,
            timeframe: GB,
            data: YB
          } = OB;
          JB.o.tM("leaderboardResponse", {
            category: BB,
            timeframe: GB,
            data: YB
          })
        }
      })), (0, qB.g)(mB.z, (BB => {
        const OB = (0, FB.h)(mB.z, BB);
        "string" === typeof OB && (0, RG.d)(BB.conn, OB)
      })), (0, qB.g)(mB.B, (BB => {
        const OB = (0, FB.h)(mB.B, BB);
        "string" === typeof OB && console.error(`[logErrorToConsole]: ${OB}`)
      }))), rB(), (0, dG.c)(), gO || (gO = !0, (0, qB.g)(mB.j, (BB => {
        const OB = (0, FB.h)(mB.j, BB);
        void 0 !== OB && (0, LO.i)(OB)
      }))), bO(), KO(), bB || (bB = !0, (0, QB.w)(CB)), YB.gameBridge.attach(eY), XY()
    }
  },
  36997: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => yB,
      k: () => jB,
      o: () => JB
    });
    var YB = GB(2034);
    let DB = null,
      QB = 0;
    const oB = new Set;

    function jB() {
      return DB
    }

    function yB() {
      return QB
    }

    function JB(BB) {
      DB = BB, QB++, (0, YB.b)();
      for (const OB of oB) OB()
    }

    function MB(BB) {
      oB.add(BB)
    }
  },
  37e3: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => jB
    });
    var YB = GB(37004);
    let DB = null,
      QB = null;

    function oB() {
      return DB ??= GB.e(73).then((() => GB(42193))).catch((BB => {
        throw DB = null, BB
      })), DB
    }

    function jB() {
      return QB ??= Promise.all([oB(), (0, YB.e)()]).then((BB => {
        let [OB] = BB;
        return OB
      }), (BB => {
        throw QB = null, BB
      })), QB
    }
  },
  37085: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    const YB = {
      wait: function(BB) {
        return new Promise((OB => {
          setTimeout(OB, BB)
        }))
      },
      stallMs: 2e4
    };
    class DB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YB;
        this.url = BB, this.options = OB, this.timing = GB, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = BB
      }
      ready() {
        if (null === this.fetched) {
          const BB = new AbortController;
          this.fetchAbort = BB, this.fetched = this.fetchWithRetries(BB.signal).then((OB => (this.fetchAbort === BB && (this.fetchAbort = null), OB)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(BB) {
        for (let OB = 0;; OB++) {
          const GB = new URL(this.url);
          if (OB > 0 && GB.searchParams.set("cache-bust", `${Date.now()}-${OB}`), await this.fetchWhole(GB, BB)) return this.scriptUrl = GB, !0;
          if (OB >= 3 || BB.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** OB), BB.aborted) return !1
        }
      }
      async fetchWhole(BB, OB) {
        const GB = new AbortController;
        let YB;
        const DB = () => {
            clearTimeout(YB), YB = setTimeout((() => {
              GB.abort()
            }), this.timing.stallMs)
          },
          QB = () => {
            GB.abort()
          };
        OB.addEventListener("abort", QB, {
          once: !0
        }), DB();
        try {
          var oB;
          const OB = await fetch(BB, {
            signal: GB.signal
          });
          if (!OB.ok) return !1;
          const YB = null === (oB = OB.body) || void 0 === oB ? void 0 : oB.getReader();
          if (!YB) return !1;
          for (;;) {
            const {
              done: BB
            } = await YB.read();
            if (BB) return !0;
            DB()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(YB), OB.removeEventListener("abort", QB)
        }
      }
    }
  },
  37753: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
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
  39741: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      f: () => DB
    });
    const YB = ["description", "label"];

    function DB(BB) {
      const OB = BB.type;
      return {
        type: OB,
        params: BB[OB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);