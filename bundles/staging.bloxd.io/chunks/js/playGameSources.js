export const id = 47;
export const ids = [47];
export const modules = {
  39744: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      f: () => MT,
      i: () => zT
    });
    const WT = 6e3;

    function zT(TT, UT) {
      return [Math.floor(TT[0] / UT) * UT, Math.floor(TT[1] / UT) * UT, Math.floor(TT[2] / UT) * UT]
    }

    function MT(TT) {
      const UT = (null !== TT && void 0 !== TT ? TT : "").match(/-?\d+(?:\.\d+)?/g);
      return UT && UT.length >= 3 ? [Number(UT[0]), Number(UT[1]), Number(UT[2])] : null
    }

    function gT(TT, UT) {
      return TT === UT ? String(TT) : `${TT}-${UT}`
    }

    function nT(TT, UT, mT, WT) {
      const zT = [];
      let MT = new Map;
      for (let gT = TT[2]; gT < TT[2] + UT; gT++) {
        const nT = new Map;
        let HT = TT[0];
        for (; HT < TT[0] + UT;) {
          const zT = WT(HT, mT, gT);
          let kT = HT;
          for (; kT + 1 < TT[0] + UT && WT(kT + 1, mT, gT) === zT;) kT++;
          if (null !== zT) {
            const TT = `${HT} ${kT} ${zT}`,
              UT = MT.get(TT);
            UT ? (UT.z1 = gT, MT.delete(TT), nT.set(TT, UT)) : nT.set(TT, {
              x0: HT,
              x1: kT,
              z0: gT,
              z1: gT,
              name: zT
            })
          }
          HT = kT + 1
        }
        zT.push(...MT.values()), MT = nT
      }
      return zT.push(...MT.values()), zT.sort(((TT, UT) => TT.z0 - UT.z0 || TT.x0 - UT.x0)).map((TT => `x${gT(TT.x0,TT.x1)} z${gT(TT.z0,TT.z1)} ${TT.name}`))
    }

    function HT(TT, UT, mT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WT;
      const HT = [TT[0] + UT - 1, TT[1] + UT - 1, TT[2] + UT - 1],
        kT = null !== zT && zT.every(((UT, mT) => Math.floor(UT) >= TT[mT] && Math.floor(UT) <= HT[mT])),
        jT = [`The chunk from ${TT.join(" ")} to ${HT.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== zT && jT.push(`The player's feet are at ${zT.map(Math.floor).join(" ")}, ${kT?"in this chunk":"outside this chunk"}.`);
      const lT = [];
      for (let WT = TT[1]; WT <= HT[1]; WT++) {
        const zT = nT(TT, UT, WT, mT).join("; "),
          MT = lT[lT.length - 1];
        (null === MT || void 0 === MT ? void 0 : MT.boxes) === zT ? MT.to = WT : lT.push({
          from: WT,
          to: WT,
          boxes: zT
        })
      }
      const LT = lT.filter((TT => "" !== TT.boxes));
      0 === LT.length && jT.push("It is all air.");
      let pT = jT.join("\n").length;
      for (const WT of LT) {
        const TT = `y${gT(WT.from,WT.to)}: ${WT.boxes}`;
        if (pT += TT.length + 1, pT > MT) {
          jT.push(`Cut short: the layers from y${WT.from} up aren't shown, as there are too many blocks.`);
          break
        }
        jT.push(TT)
      }
      return jT.join("\n")
    }
  },
  8912: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(25);

    function zT() {
      return !WT.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37045: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      e: () => MT,
      i: () => zT
    });
    const WT = [.25, .5, 1, 2, 4, 8, 16];

    function zT(TT, UT) {
      const mT = WT;
      let zT = mT.indexOf(TT);
      return -1 === zT && (zT = mT.findIndex((UT => UT >= TT)), -1 === zT && (zT = mT.length - 1)), "up" === UT ? mT[Math.min(zT + 1, mT.length - 1)] : mT[Math.max(zT - 1, 0)]
    }

    function MT(TT) {
      return TT <= WT[0]
    }

    function gT(TT) {
      return TT >= WT[WT.length - 1]
    }
  },
  39233: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      f: () => gT
    });
    var WT = mT(31);
    let zT = !1;

    function MT() {
      return zT
    }

    function gT(TT) {
      zT !== TT && (zT = TT, WT.j.EZ("replayViewer|videoExportChanged"))
    }
  },
  36579: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      f: () => MT
    });
    let WT = !1;

    function zT() {
      return WT
    }

    function MT(TT) {
      return WT !== TT && (WT = TT, !0)
    }
  },
  39159: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(31),
      zT = mT(2067);

    function MT(TT) {
      let {
        taskId: UT,
        progress: mT
      } = TT;
      const WT = zT.d.get("_tasks");
      null !== WT && void 0 !== WT && WT[UT] && zT.d.apply({
        _tasks: {
          ...WT,
          [UT]: {
            ...WT[UT],
            progress: mT
          }
        }
      })
    }
    WT.j.subscribe("clientTaskProgress", (TT => {
      MT(TT)
    }))
  },
  39720: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      g: () => BT,
      i: () => kT,
      l: () => lT,
      n: () => HT,
      r: () => gT,
      v: () => jT,
      x: () => ZT
    });
    var WT = mT(2067),
      zT = mT(31),
      MT = mT(2085);
    const gT = (0, MT.n)((function() {
        var TT, UT, mT, zT;
        return {
          health: null !== (TT = WT.d.get("_health")) && void 0 !== TT ? TT : null,
          maxHealth: null !== (UT = WT.d.get("_totalMaxHealth")) && void 0 !== UT ? UT : null,
          shield: null !== (mT = WT.d.get("_shield")) && void 0 !== mT ? mT : null,
          maxShield: null !== (zT = WT.d.get("maxShield")) && void 0 !== zT ? zT : null
        }
      }), [], (0, MT.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      nT = [{
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

    function HT(TT, UT) {
      return nT[(TT ? 2 : 0) + (UT ? 1 : 0)]
    }
    const kT = (0, MT.n)((function() {
      var TT;
      return null !== (TT = WT.d.get("_aura")) && void 0 !== TT ? TT : null
    }), [], (0, MT.l)("_aura"));

    function jT(TT) {
      return {
        watch: UT => (0, zT.k)("shotPlayer", (mT => {
          let {
            playerId: WT,
            damage: zT,
            wasCrit: MT,
            distance: gT
          } = mT;
          TT(WT) && UT({
            damage: zT,
            wasCrit: MT,
            distance: gT
          })
        }))
      }
    }

    function lT(TT) {
      return (0, MT.e)("chat", (UT => {
        let {
          serverChatMsgId: mT,
          content: WT,
          chatterEId: zT
        } = UT;
        return {
          serverChatMsgId: null !== mT && void 0 !== mT ? mT : null,
          content: WT,
          author: zT ? TT(zT) : null
        }
      }))
    }
    class LT {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const mT = this.shown;
        return TT !== this.needed && (this.needed = TT, this.neededSince = UT, null === TT && (this.shown = null)), this.shown !== this.needed && UT - this.neededSince > 200 && (this.shown = this.needed), this.shown !== mT
      }
    }

    function pT(TT) {
      return [{
        translationKey: `touchKeys:${TT}`
      }]
    }
    const BT = {
      open: pT("open"),
      close: pT("close"),
      milk: pT("milk"),
      shear: pT("shear"),
      tame: pT("tame"),
      feed: pT("feed"),
      ride: pT("ride")
    };

    function ZT(TT) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: TT
      }]
    }
  },
  41182: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      c: () => gT
    });
    var WT = mT(3413);
    let zT = null,
      MT = null;

    function gT() {
      return MT ??= mT.e(216).then((() => mT(36408))).then((TT => {
        let {
          ITEM_SPRITES: UT,
          ITEM_SPRITES_WITHOUT_FILE: mT,
          ITEM_FILES_WITHOUT_SPRITE: MT
        } = TT;
        zT = function(TT, UT, mT) {
          const zT = new Set,
            MT = (0, WT.s)(UT);
          let gT = 0;
          for (const [WT, nT] of TT.entries()) WT === MT[gT] ? gT++ : zT.add(nT);
          if ("" !== mT)
            for (const nT of mT.split(WT.o)) zT.add(nT);
          return zT
        }(UT.split(WT.o), mT, MT)
      }), (TT => {
        throw MT = null, TT
      })), MT
    }

    function nT(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = zT) || void 0 === mT ? void 0 : mT.has(TT)) && void 0 !== UT && UT
    }
  },
  39737: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      d: () => MT,
      h: () => zT
    });
    const WT = 128;

    function zT(TT, UT, mT, WT) {
      const zT = 2 * UT - 1,
        MT = 1 - 2 * mT,
        gT = TT(0) - zT * TT(3),
        nT = TT(4) - zT * TT(7),
        HT = TT(8) - zT * TT(11),
        kT = TT(1) - MT * TT(3),
        jT = TT(5) - MT * TT(7),
        lT = TT(9) - MT * TT(11);
      WT[0] = nT * lT - HT * jT, WT[1] = HT * kT - gT * lT, WT[2] = gT * jT - nT * kT;
      const LT = WT[0] * TT(3) + WT[1] * TT(7) + WT[2] * TT(11) < 0 ? -1 : 1,
        pT = Math.hypot(WT[0], WT[1], WT[2]) * LT;
      return WT[0] /= pT, WT[1] /= pT, WT[2] /= pT, WT
    }

    function MT(TT, UT, mT, WT, zT, MT) {
      const gT = [Math.floor(UT[0]), Math.floor(UT[1]), Math.floor(UT[2])],
        nT = [0, 0, 0],
        HT = [1 / 0, 1 / 0, 1 / 0],
        kT = [1 / 0, 1 / 0, 1 / 0];
      for (let LT = 0; LT < 3; LT++) nT[LT] = Math.sign(mT[LT]), 0 !== nT[LT] && (kT[LT] = Math.abs(1 / mT[LT]), HT[LT] = (gT[LT] + (nT[LT] > 0 ? 1 : 0) - UT[LT]) / mT[LT]);
      let jT = 0,
        lT = Math.abs(mT[0]) > Math.abs(mT[1]) ? 0 : 1;
      for (Math.abs(mT[2]) > Math.abs(mT[lT]) && (lT = 2); jT <= WT;) {
        if (TT(gT[0], gT[1], gT[2])) return zT[0] = gT[0], zT[1] = gT[1], zT[2] = gT[2], MT[0] = 0, MT[1] = 0, MT[2] = 0, MT[lT] = -nT[lT], !0;
        lT = HT[0] < HT[1] ? 0 : 1, HT[2] < HT[lT] && (lT = 2), jT = HT[lT], gT[lT] += nT[lT], HT[lT] += kT[lT]
      }
      return !1
    }
  },
  39717: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(2014);

    function zT(TT, UT, mT) {
      return (0, WT.n)(TT, UT) < mT
    }
  },
  8856: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(1354);

    function zT(TT, UT) {
      var mT, zT;
      try {
        const mT = (0, WT.c)();
        if ("function" === typeof mT) {
          const WT = new mT(TT, UT);
          if (WT.type === TT) return WT
        }
      } catch {}
      const MT = document.createEvent("Event");
      return MT.initEvent(TT, null !== (mT = null === UT || void 0 === UT ? void 0 : UT.bubbles) && void 0 !== mT && mT, null !== (zT = null === UT || void 0 === UT ? void 0 : UT.cancelable) && void 0 !== zT && zT), MT
    }
  },
  36539: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      f: () => jT,
      i: () => pT,
      m: () => lT
    });
    var WT = mT(366),
      zT = mT(691),
      MT = mT(703),
      gT = mT(44);
    const nT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      HT = "playSessionGameNameWithVariation",
      kT = "wasMatchmakePlayer";

    function jT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      (0, MT.h)(TT, nT)
    }

    function lT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).setItem(kT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      return (0, MT.b)(TT, nT)
    }

    function pT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT.m;
      const mT = (0, MT.b)(UT, nT),
        jT = function(TT) {
          const UT = TT.getItem(HT);
          return "string" !== typeof UT ? null : UT
        }(UT),
        lT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).getItem(kT)
        }(UT);
      let LT;
      return LT = null !== mT && null !== jT && (0, MT.d)(UT, nT) && function(TT, UT, mT) {
          const zT = (0, WT.dc)(TT),
            MT = (0, WT.dc)(UT),
            gT = (0, WT._b)(TT),
            nT = (0, WT._b)(UT);
          return !(zT !== MT || !mT) || zT === MT && gT === nT
        }(jT, TT, lT) ? mT : (0, zT.b)(), (0, MT.l)(UT, nT, LT), UT.setItem(HT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).removeItem(kT)
        }(UT), LT
    }
  },
  39150: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT
    });
    var WT = mT(1321),
      zT = mT(1437),
      MT = mT(25),
      gT = mT(1416),
      nT = mT(1429),
      HT = mT(1633),
      kT = mT(36539);

    function jT(TT) {
      let {
        Fz: UT,
        Pz: mT
      } = TT;
      const jT = null !== UT && void 0 !== UT ? UT : (0, nT.c)().gameNameWithVariation;
      (0, WT.O)(jT) && ((0, kT.m)(), (0, gT.cb)((() => {
        console.log("Received matchmaking order from game server to game", UT), (0, MT.e)("inGameReplay"), (0, HT.navigatePreserveSearch)((0, zT.d)(jT, null !== mT && void 0 !== mT ? mT : void 0))
      }), "video_start"))
    }
  },
  39306: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(31),
      zT = mT(2104);

    function MT(TT) {
      var UT, mT;
      const MT = (0, zT.n)(null !== (UT = null === (mT = zT.v.toggleFreeCam) || void 0 === mT ? void 0 : mT[0]) && void 0 !== UT ? UT : null);
      WT.j.EZ("showBottomMessage", {
        message: `Free Camera ${TT?"Enabled":"Disabled"}${MT?` - Press ${MT} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39146: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT,
      c: () => gT,
      g: () => nT,
      j: () => kT
    });
    var WT = mT(31),
      zT = mT(1457);
    const MT = new Map;

    function gT(TT, UT) {
      WT.j.EZ("newUiRequest", {
        id: TT,
        clientParameters: UT
      }, !0)
    }

    function nT(TT) {
      WT.j.EZ("removeUiRequest", TT, !0);
      const UT = MT.get(TT);
      UT && (UT.tearDownNotification(), MT.delete(TT))
    }

    function HT() {
      WT.j.EZ("clearUiRequests");
      for (const TT of MT.values()) TT.tearDownNotification();
      MT.clear()
    }

    function kT(TT, UT, mT, WT) {
      const gT = zT.NotificationProvider.showPromptPopup({
        title: UT,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: mT,
        unlockPointerKey: "uiRequestPopup"
      });
      MT.set(TT, gT), gT.getResult().then((UT => {
        MT.delete(TT), "notificationTornDown" !== UT && WT(UT)
      }))
    }
  },
  39739: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      f: () => LT
    });
    var WT = mT(208),
      zT = mT(39744);
    const MT = 20;

    function gT(TT) {
      return TT.map(Math.floor).join(" ")
    }

    function nT(TT) {
      return null === TT.amount || 1 === TT.amount ? TT.name : `${TT.amount} ${TT.name}`
    }
    var HT = mT(39752),
      kT = mT(2067),
      jT = mT(1429);

    function lT(TT, UT) {
      if (!TT) return HT.b;
      const mT = TT.playerFeet();
      if (!mT) return "The player isn't in the world yet, so no blocks can be seen.";
      const MT = WT.f.cB,
        gT = (0, zT.i)(null !== UT && void 0 !== UT ? UT : mT, MT),
        nT = TT.chunkBlocks(gT);
      return nT ? (0, zT.d)(gT, MT, ((UT, mT, WT) => {
        const zT = nT(UT, mT, WT);
        return 0 === zT ? null : TT.blockName(zT).split("|")[0]
      }), mT) : `The chunk from ${gT.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${mT.map(Math.floor).join(" ")}.`
    }

    function LT(TT) {
      var UT, mT, WT;
      if (!TT) return HT.f;
      const zT = TT.playerFeet();
      if (!zT) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: lT,
        heldSlot: LT
      } = TT.inventory();
      return function(TT) {
        const UT = [];
        null !== TT.game && UT.push(`Game: ${TT.game}.`);
        const mT = null === TT.health ? "" : `, health ${Math.round(TT.health)}${null===TT.maxHealth?"":` of ${Math.round(TT.maxHealth)}`}`;
        UT.push(`The player (the creator) stands at ${gT(TT.position)}${mT}, ${TT.creative?"in":"not in"} creative mode.`);
        const WT = TT.slots[TT.heldSlot];
        UT.push(WT ? `Holding (slot ${TT.heldSlot}): ${nT(WT)}.` : `Holding nothing (slot ${TT.heldSlot} is empty).`);
        const zT = TT.slots.flatMap(((TT, UT) => TT ? [`slot ${UT}: ${nT(TT)}`] : []));
        UT.push(zT.length > 0 ? `Inventory: ${zT.join(", ")}.` : "Inventory: empty.");
        const HT = UT => Math.hypot(UT.position[0] - TT.position[0], UT.position[1] - TT.position[1], UT.position[2] - TT.position[2]),
          kT = [...TT.nearby].sort(((TT, UT) => HT(TT) - HT(UT)));
        if (0 === kT.length) UT.push("No other players or mobs are near enough to see.");
        else {
          UT.push("Near them, nearest first:");
          for (const TT of kT.slice(0, MT)) {
            const mT = "player" === TT.kind ? `player "${TT.name||"?"}"` : TT.name && TT.name !== TT.kind ? `${TT.kind} "${TT.name}"` : TT.kind,
              WT = Math.round(HT(TT));
            UT.push(`- ${mT} at ${gT(TT.position)}, ${WT} block${1===WT?"":"s"} away`)
          }
          kT.length > MT && UT.push(`- and ${kT.length-MT} more further away`)
        }
        return TT.droppedItems > 0 && UT.push(`${TT.droppedItems} dropped item${1===TT.droppedItems?" is":"s are"} on the ground nearby.`), UT.join("\n")
      }({
        game: null !== (UT = (0, jT.c)().gameNameWithVariation) && void 0 !== UT ? UT : null,
        position: zT,
        health: null !== (mT = kT.d.get("_health")) && void 0 !== mT ? mT : null,
        maxHealth: null !== (WT = kT.d.get("_totalMaxHealth")) && void 0 !== WT ? WT : null,
        creative: !0 === kT.d.get("creative"),
        heldSlot: LT,
        slots: lT,
        nearby: TT.nearby(),
        droppedItems: TT.droppedItems()
      })
    }
  },
  41023: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => XT,
      B: () => DT,
      E: () => sT,
      H: () => tT,
      J: () => QT,
      L: () => wT,
      N: () => ST,
      Q: () => KT,
      T: () => yT,
      e: () => GT,
      f: () => PT,
      h: () => xT,
      l: () => NT,
      p: () => dT,
      s: () => JT,
      v: () => FT,
      w: () => aT,
      y: () => IT
    });
    var WT = mT(1513),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(2522),
      nT = mT(4915),
      HT = mT(4883);
    let kT, jT = !1,
      lT = !1,
      LT = !1,
      pT = !1;
    const BT = 1300,
      ZT = 3e3;
    let cT = 0,
      vT = !1,
      fT = !1,
      qT = 0;
    const iT = 2;
    let bT = !1,
      OT = !1;
    const eT = new Set,
      YT = new Set;

    function JT() {
      return jT
    }

    function xT() {
      return fT
    }

    function dT() {
      return OT
    }

    function wT() {
      return (0, MT.u)() && !OT
    }

    function tT(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== OT) {
        OT = TT;
        for (const TT of [...YT]) TT(OT);
        UT && KT()
      }
    }

    function aT(TT) {
      return YT.add(TT), () => {
        YT.delete(TT)
      }
    }

    function yT() {
      (0, nT.g)(gT.y.Menu, (0, MT.u)() ? 0 : gT.y.Menu)
    }

    function XT() {
      fT = !1, qT = 0, yT(), KT()
    }

    function IT(TT) {
      return eT.add(TT), () => {
        eT.delete(TT)
      }
    }

    function QT(TT) {
      lT = !1, TT !== jT && (jT = TT, pT = !1, clearTimeout(kT), LT = !jT && bT, jT ? (vT = !1, fT = !1, qT = 0) : wT() && !bT && (fT = !0), bT = !1, jT && !wT() && hT(), oT(), LT && KT())
    }

    function sT(TT) {
      TT !== vT && (vT = TT, TT || KT())
    }

    function FT() {
      lT = !1, pT || !0 !== CT() || (pT = !0, clearTimeout(kT), kT = setTimeout(VT, BT))
    }

    function PT() {
      return (!lT || performance.now() - cT > ZT) && (lT = (0, HT.N)().lockPointer(), cT = performance.now()), lT
    }

    function VT() {
      uT() && rT() && PT()
    }

    function uT() {
      return wT() && !jT && !vT && !(0, WT.k)()
    }

    function CT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function rT() {
      return LT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CT()
    }

    function KT() {
      wT() ? uT() && !fT && rT() && PT() : jT && !bT && hT()
    }

    function ST() {
      fT ? navigator.vendor.startsWith("Apple") ? ET() : qT = iT : KT()
    }

    function GT() {
      qT > 0 && 0 === --qT && ET()
    }

    function NT() {
      qT = 0
    }

    function ET() {
      uT() && !0 === CT() && PT()
    }

    function hT() {
      bT = !0, (0, HT.N)().unlockPointer()
    }

    function DT() {
      lT = !1, LT = !1, pT = !1, clearTimeout(kT), vT = !1, fT = !1, qT = 0, bT = !1;
      const TT = jT;
      jT = !1, TT && oT()
    }

    function oT() {
      for (const TT of [...eT]) TT(jT);
      zT.j.EZ("pointerLockUpdate", jT)
    }
  },
  40820: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      i: () => nT,
      m: () => lT,
      p: () => kT,
      s: () => gT,
      v: () => jT,
      y: () => HT
    });
    let WT = null,
      zT = null,
      MT = null;

    function gT(TT) {
      WT = TT
    }

    function nT() {
      return WT
    }

    function HT(TT) {
      zT = TT
    }

    function kT() {
      return zT
    }

    function jT(TT) {
      MT = TT
    }

    function lT() {
      return MT
    }

    function LT() {
      var TT, UT;
      return !0 === (null === (TT = zT) || void 0 === TT || null === (UT = TT.currentViewer) || void 0 === UT ? void 0 : UT.inPlayback)
    }
  },
  41136: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      attachPlayGameSources: () => YW,
      playGameSources: () => eW
    });
    var WT = mT(2046),
      zT = mT(40820),
      MT = mT(4883),
      gT = mT(40724),
      nT = mT(41121),
      HT = mT(39720),
      kT = mT(31),
      jT = mT(4904),
      lT = mT(4895),
      LT = mT(40765),
      pT = mT(40793),
      BT = mT(41145),
      ZT = mT(40780);
    (0, ZT.m)(jT.$b.Chat, (TT => {
      if (TT.payloadKind !== lT.lc.Msgpack) return;
      const UT = function(TT) {
        if (null === TT || "object" !== typeof TT || !("content" in TT)) return null;
        const {
          chatMsgId: UT,
          content: mT,
          chatterEId: WT
        } = TT;
        return {
          serverChatMsgId: null !== UT && void 0 !== UT ? UT : void 0,
          content: mT,
          chatterEId: void 0 === WT || null === WT ? void 0 : String(WT)
        }
      }((0, LT.c)(TT.payload));
      null !== UT && kT.j.EZ("chat", UT, !0)
    }));
    const cT = {
        chatReceived: (0, HT.l)((function(TT) {
          var UT, mT, WT;
          return {
            id: TT,
            name: null !== (UT = BT.h.getName(TT)) && void 0 !== UT ? UT : null,
            local: (0, pT.f)() === TT,
            profileEffect: null !== (mT = null === (WT = (0, BT.k)(TT)) || void 0 === WT ? void 0 : WT.profileEffect) && void 0 !== mT ? mT : null
          }
        }))
      },
      vT = {
        sendChatMessage(TT) {
          var UT;
          let {
            Xj: mT,
            channelName: WT
          } = TT;
          null === (UT = (0, gT.i)()) || void 0 === UT || UT.clientApi.sendChat(mT, WT)
        }
      };
    var fT = mT(208),
      qT = mT(2067),
      iT = mT(40709),
      bT = mT(39717);
    const OT = [0, 0, 0],
      eT = {
        codeBlockClickable(TT) {
          var UT;
          const mT = (0, gT.i)();
          if (null === mT || void 0 === mT || !mT.isSessionLive) return !1;
          const WT = mT.api;
          if (0 !== (iT.x.playerFlags(WT.apiView, 0) & iT.Cd.Crouching)) return !1;
          const zT = WT.queries.directorEntity(WT.localId) >= iT.yb.BYTES ? WT.memoryData(WT.scratch(), iT.yb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === zT) return !1;
          for (let MT = 0; MT < 3; MT++) OT[MT] = iT.yb.feet(zT, 0, MT);
          return OT[1] += iT.yb.eyeHeight(zT, 0), (0, bT.c)(OT, TT, null !== (UT = qT.d.get("blockReach")) && void 0 !== UT ? UT : fT.f.Vc)
        }
      },
      YT = {
        clickCodeBlock(TT) {
          var UT;
          null === (UT = (0, gT.i)()) || void 0 === UT || UT.clickCodeBlock(TT)
        }
      };
    var JT = mT(40734),
      xT = mT(41153),
      dT = mT(1089),
      wT = mT(39172),
      tT = mT(4879),
      aT = mT(40752),
      yT = mT(40731),
      XT = mT(40756);

    function IT(TT) {
      if (null === TT) return null;
      const UT = [];
      for (const mT of TT) {
        const TT = Object.keys(mT)[0];
        if ("RT" === TT) {
          const {
            str: TT,
            style: WT,
            clickableUrl: zT
          } = mT.RT, MT = Object.keys(TT)[0], gT = TT[MT];
          "string" !== MT && "styledEntityName" !== MT && "styledTranslatedText" !== MT || UT.push({
            str: gT,
            style: WT,
            clickableUrl: zT
          })
        } else UT.push(mT[TT])
      }
      return UT
    }
    const QT = {
      screenPos(TT) {
        var UT, mT;
        return null !== (UT = null === (mT = (0, gT.i)()) || void 0 === mT ? void 0 : mT.renderFrame.projectWorldPosToScreenPos(TT)) && void 0 !== UT ? UT : {
          x: 0,
          y: 0
        }
      }
    };
    let sT = !1;

    function FT() {
      sT || (sT = !0, (0, ZT.m)(jT.$b.ProgressBarUpdate, (TT => {
        const UT = (0, XT.k)(TT);
        (0, XT.d)(UT) && kT.j.EZ("progressBarUpdate", UT, !0)
      })), (0, ZT.m)(aT.x, (TT => {
        const UT = (0, XT.h)(aT.x, TT);
        UT && kT.j.EZ("middleScreenBarInitiate", {
          duration: UT.yz,
          Xz: UT.Xz,
          horizBarRemOffset: UT.Iz
        }, !0)
      })), (0, ZT.m)(jT.$b.RemoveMiddleScreenBar, (() => {
        kT.j.EZ("middleScreenBarRemove")
      })), (0, ZT.m)(aT.fb, (TT => {
        const UT = (0, XT.h)(aT.fb, TT);
        if (UT) {
          var mT;
          const TT = UT.xT ? null === (mT = (0, gT.i)()) || void 0 === mT ? void 0 : mT.renderFrame.projectDirectionToScreenPos(UT.xT) : void 0;
          kT.j.EZ("sendHitmarker", {
            PU: UT.PU,
            screenPos: TT
          }, !0)
        }
      })), (0, ZT.m)(aT.ib, (TT => {
        const UT = (0, XT.h)(aT.ib, TT);
        if (UT) {
          const {
            id: TT,
            position: mT,
            style: WT,
            tU: zT,
            yU: MT
          } = UT;
          kT.j.EZ("setDirectionArrow", {
            id: TT,
            position: mT,
            style: WT,
            text: IT(zT),
            yU: MT
          }, !0)
        }
      })), (0, ZT.m)(aT.h, (TT => {
        const UT = (0, XT.h)(aT.h, TT);
        UT && kT.j.EZ("clearDirectionArrow", {
          id: UT.id
        }, !0)
      })), (0, ZT.m)(aT.p, (TT => {
        const UT = (0, XT.h)(aT.p, TT);
        UT && kT.j.EZ("flyingMiddleMessage", {
          content: IT(UT.aM),
          yM: UT.yM,
          XM: UT.XM
        }, !0)
      })), (0, ZT.m)(jT.$b.WorldVariation, (TT => {
        const UT = (0, XT.k)(TT);
        if ("string" === typeof UT) {
          const TT = UT === dT.f ? null : {
            message: `Currently loaded as variation: ${UT}`,
            type: "Warning"
          };
          kT.j.EZ("showPermanentBottomMessage", TT, !0)
        }
      })), (0, ZT.m)(aT.L, (TT => {
        const UT = (0, XT.h)(aT.L, TT);
        UT && function(TT, UT) {
          const {
            type: mT,
            params: WT
          } = (0, wT.g)(UT), zT = {
            ...WT
          };
          for (const MT of wT.c) zT[MT] && (zT[MT] = IT(zT[MT]));
          tT.b.queueQTE(TT, mT, zT).getResult().then((UT => {
            var mT;
            "boolean" === typeof UT && (null === (mT = (0, gT.i)()) || void 0 === mT || mT.send(yT.e.QteResponse, {
              qteId: TT,
              qteResponse: UT
            }))
          }))
        }(UT.id, UT.ST)
      })), (0, ZT.m)(aT.Y, (TT => {
        const UT = (0, XT.h)(aT.Y, TT);
        "number" === typeof UT && tT.b.cancelQTE(UT)
      })), (0, ZT.h)((() => {
        tT.b.reset()
      })), (0, ZT.l)((() => {
        tT.b.reset()
      })), (0, ZT.m)(jT.$b.EditItemCraftingRecipes, (TT => {
        const UT = (0, XT.k)(TT);
        (0, XT.d)(UT) && kT.j.EZ("craftingRecipesEdited", {
          itemName: UT.craftingRecipeItemName,
          recipesForItem: UT.recipesForItem
        })
      })), (0, ZT.m)(aT.X, (TT => {
        const UT = (0, XT.h)(aT.X, TT);
        UT && kT.j.EZ("craftingRecipesEdited", {
          itemName: UT.az,
          recipesForItem: []
        })
      })))
    }
    var PT = mT(25);
    const VT = [{
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

    function uT(TT) {
      return iT.x.playerFlags(TT.api.apiView, 0)
    }
    const CT = {
        freeCamera: (0, pT.d)((TT => () => {
          const UT = TT.isSessionLive && 0 !== (uT(TT) & iT.Cd.FreeCamMoves),
            mT = TT.freeCameraAllowed() && null === PT.b.get("scriptedCameraFacing");
          return VT[(mT ? 2 : 0) + (UT ? 1 : 0)]
        }), VT[0], (TT => (0, MT.A)(TT)))
      },
      rT = {
        setFreeCameraMovesFly: TT => {
          var UT;
          null === (UT = (0, gT.i)()) || void 0 === UT || UT.setFreeCameraMovesFly(TT)
        }
      },
      KT = {
        freeCameraPos: () => {
          const TT = (0, gT.i)();
          return null !== TT && void 0 !== TT && TT.isSessionLive && TT.renderFrame.hasView && 0 !== (uT(TT) & iT.Cd.FreeCam) ? TT.renderFrame.cameraPosition : null
        }
      };
    var ST = mT(39306);
    let GT = !1,
      NT = !1;

    function ET() {
      const TT = (0, gT.i)();
      if (null === TT || void 0 === TT || !TT.isSessionLive) return void(GT = !1);
      const UT = 0 !== (iT.x.playerFlags(TT.api.apiView, 0) & iT.Cd.FreeCam);
      UT !== GT && (GT = UT, (0, ST.e)(UT))
    }
    var hT = mT(366),
      DT = mT(37125),
      oT = mT(2085);
    var AT = mT(41156),
      RT = mT(40790);
    const TU = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let UU = "off";

    function mU(TT) {
      var UT;
      return null === TT ? null : {
        label: null !== (UT = (0, AT.e)(TT, "interactionPrompt")) && void 0 !== UT ? UT : null
      }
    }
    const WU = new Map([
      [iT.pc.Open, {
        label: HT.g.open
      }],
      [iT.pc.Close, {
        label: HT.g.close
      }],
      [iT.pc.Milk, {
        label: HT.g.milk
      }],
      [iT.pc.Shear, {
        label: HT.g.shear
      }],
      [iT.pc.Tame, {
        label: HT.g.tame
      }],
      [iT.pc.Feed, {
        label: HT.g.feed
      }],
      [iT.pc.Ride, {
        label: HT.g.ride
      }]
    ]);
    class zU {
      constructor() {
        this.target = TU, this.Gg = iT.Wc, this.optionName = null, this.pickaxe = new HT.d
      }
      read(TT) {
        var UT;
        const mT = iT.x.targetBlockId(TT.api.apiView, 0);
        mT !== this.Gg && (this.Gg = mT, this.optionName = mT === iT.Wc ? null : `${TT.tables.getMetaInfo(mT).rootName}CrosshairText`);
        const WT = null === this.optionName ? null : null !== (UT = TT.tables.getClientOption(this.optionName)) && void 0 !== UT ? UT : null;
        this.pickaxe.update(function(TT, UT) {
          var mT, WT, zT;
          if (0 === (iT.x.playerFlags(TT.api.apiView, 0) & iT.Cd.Breaking) || UT === iT.Wc || 0 === UT) return null;
          const {
            tables: MT
          } = TT;
          if (!0 === MT.getClientOption("creative")) return null;
          const gT = MT.nameOfId(UT),
            nT = null === (mT = TT.items.fn()) || void 0 === mT ? void 0 : mT.name,
            HT = null !== (WT = MT.getItemStat(gT, "harvestLevel")) && void 0 !== WT ? WT : 0;
          return (0, hT.Vc)({
            blockHarvestType: MT.getDefaultItemStat(gT, "harvestType"),
            blockHarvestLevel: MT.getDefaultItemStat(gT, "harvestLevel"),
            harvestLevel: HT,
            heldToolType: void 0 === nT ? void 0 : MT.getDefaultItemStat(nT, "harvests"),
            heldToolLevel: void 0 === nT ? void 0 : MT.getDefaultItemStat(nT, "level")
          }) && null !== (zT = DT.o[HT]) && void 0 !== zT ? zT : null
        }(TT, mT)), TT.watchPromptPick(UU);
        const zT = "touch" === UU ? function(TT) {
          var UT;
          const mT = TT.interactLabel;
          return mT === iT.pc.Entity ? mU(TT.promptEntity) : mT === iT.pc.TameWith ? {
            label: (0, HT.x)(TT.tables.nameOfId(TT.interactIcon))
          } : null !== (UT = WU.get(mT)) && void 0 !== UT ? UT : null
        }(TT) : mU(TT.promptEntity);
        return this.target = (0, oT.o)(this.target, {
          interactPrompt: zT,
          blockText: WT,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let MU = null;
    const gU = {
      current: () => {
        var TT, UT;
        return null !== (TT = null === (UT = MU) || void 0 === UT ? void 0 : UT.target) && void 0 !== TT ? TT : TU
      },
      watch: TT => {
        const UT = new zU;
        MU = UT;
        const mT = (0, pT.h)((mT => {
          let WT = UT.read(mT);
          TT(WT);
          const zT = (0, MT.C)((() => {
            const zT = UT.read(mT);
            zT !== WT && (WT = zT, TT(zT))
          }));
          return () => {
            zT(), mT.watchPromptPick("off")
          }
        }));
        return () => {
          mT(), MU === UT && (MU = null)
        }
      }
    };
    let nU = 0,
      HU = 0;
    const kU = {
        health: HT.r,
        aura: HT.i,
        hotbar: RT.b.states.hotbar,
        heldItemAim: RT.b.states.heldItemAim,
        crouching: (0, pT.d)((TT => function(TT) {
          const UT = () => 0 !== (iT.x.playerFlags(TT.apiView, 0) & iT.Cd.Crouching);
          return {
            current: UT,
            watch(TT) {
              let mT = UT();
              return (0, MT.A)((() => {
                const WT = UT();
                WT !== mT && (mT = WT, TT(WT))
              }))
            }
          }
        }(TT.api).current), !1, (TT => (0, MT.A)(TT))),
        flight: (0, pT.d)((TT => () => function(TT) {
          const UT = iT.x.playerFlags(TT.apiView, 0);
          return (0, HT.n)(0 !== (UT & iT.Cd.CanFly), 0 !== (UT & iT.Cd.Flying))
        }(TT.api)), (0, HT.n)(!1, !1), (TT => (0, MT.A)(TT))),
        gliderBoostFuel: (0, pT.d)((TT => () => iT.x.gliderBoostFuel(TT.api.apiView, 0)), 0, (TT => (0, MT.A)(TT))),
        crosshairTarget: gU
      },
      jU = {
        hotbarSlotRequested: RT.b.events.hotbarSlotRequested,
        hotbarScrolled: RT.b.events.hotbarScrolled,
        numberKeyPressed: RT.b.events.numberKeyPressed,
        shotDamageToShow: (0, HT.v)((TT => !0 === (0, AT.e)(TT, "showDamageAmounts")))
      },
      lU = {
        selectHotbarSlot: RT.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: TT => {
          UU = TT
        }
      },
      LU = {
        momentumFrac: function() {
          var TT, UT, mT;
          const WT = (0, gT.i)(),
            zT = performance.now(),
            MT = null === WT || void 0 === WT || null === (TT = WT.items.fn()) || void 0 === TT || null === (UT = TT.attributes) || void 0 === UT || null === (mT = UT.customAttributes) || void 0 === mT ? void 0 : mT.enchantments;
          return nU = null !== WT && null !== MT && void 0 !== MT && MT.Momentum ? 0 !== (iT.x.playerFlags(WT.api.apiView, 0) & iT.Cd.Breaking) ? Math.max(0, iT.x.momentumFrac(WT.api.apiView, 0)) : Math.max(0, nU - (zT - HU) / 1500) : 0, HU = zT, nU
        }
      };
    var pU = mT(40717);
    const BU = {
      lobbyManage(TT) {
        var UT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.LobbyManage, TT)
      }
    };
    var ZU = mT(1336),
      cU = mT(36579),
      vU = mT(8912),
      fU = mT(1752),
      qU = mT(2522),
      iU = mT(4906);
    let bU = !1;

    function OU(TT) {
      bU = TT
    }

    function eU() {
      "inGame" !== PT.b.get("gameState") || (0, fU.m)() || kT.j.EZ("ctrlCrouchWithoutFullscreen")
    }
    let YU = !1;
    const JU = {
        OpenEmoteWheel: () => {
          OU(!0), YU = !0, queueMicrotask((() => {
            YU && (YU = !1, kT.j.EZ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          kT.j.EZ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, cU.c)() || kT.j.EZ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, cU.c)() || kT.j.EZ("XKeyPressed")
        },
        CtrlCrouch: eU,
        "primary-fire": () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      xU = {
        OpenEmoteWheel: () => {
          OU(!1), YU ? (YU = !1, (0, vU.e)() || kT.j.EZ("requestEmoteWheelHoldOpen")) : kT.j.EZ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: eU,
        "primary-fire": () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          kT.j.EZ("mouseState", {
            uj: ZU.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let dU = !1;

    function wU() {
      dU || (dU = !0, (0, iU.h)((TT => {
        if ((0, zT.e)()) return;
        const UT = (0, iU.f)(TT) ? "primary-fire" : TT.action;
        var mT;
        if (TT.down) {
          if (0 === (TT.flags & qU.b.Synthetic)) {
            var WT;
            null === (WT = JU[UT]) || void 0 === WT || WT.call(JU)
          }
        } else null === (mT = xU[UT]) || void 0 === mT || mT.call(xU)
      })))
    }
    var tU = mT(351),
      aU = mT(102),
      yU = mT(44),
      XU = mT(41023),
      IU = mT(1429),
      QU = mT(2545);
    let sU = !1;
    const FU = {
      sendCodeCollab(TT) {
        var UT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.CodeCollab, (0, yT.p)(TT), (0, QU.d)(TT))
      }
    };
    var PU = mT(39251),
      VU = mT(8856);
    let uU = null,
      CU = !1,
      rU = null;

    function KU() {
      return "inGame" === PT.b.get("gameState") && !(0, cU.c)()
    }
    const SU = {
        OpenInventory: TT => {
          (0, fU.v)(TT, "inventory", (0, pU.n)())
        },
        OpenShop: TT => {
          uU && KU() && (0, fU.s)(TT, tU.k.SHOP, !uU.shopIsEmpty(qT.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: TT => {
          KU() && (0, fU.s)(TT, tU.k.LOBBY_LEADERBOARD, (0, PU.b)({
            lobbyLeaderboardInfo: qT.d.get("lobbyLeaderboardInfo"),
            lobbyManage: qT.d.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: TT => {
          var UT;
          const mT = null === (UT = uU) || void 0 === UT ? void 0 : UT.getClientGameMapKey();
          mT ? (0, fU.y)(TT, !0, mT) : (0, fU.v)(TT, "retentionFeatures", !(!qT.d.get("_tasks") && !qT.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: TT => {
          (0, fU.v)(TT, "inviteLink", aU.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: TT => {
          KU() && function(TT) {
            const UT = (0, gT.i)(),
              mT = null !== UT && void 0 !== UT && UT.isSessionLive ? UT.api : null,
              WT = mT ? mT.Aq(mT.localId) : null;
            (0, fU.y)(TT, null !== WT && (0, QU.b)((0, IU.c)()), (() => {
              (0, QU.h)(WT)
            }))
          }(TT)
        },
        HideUi: () => {
          kT.j.EZ("showUi", !1)
        }
      },
      GU = {
        HideUi: () => {
          kT.j.EZ("showUi", !0)
        }
      };

    function NU() {
      CU || (CU = !0, mT.e(159).then((() => mT(60481))).then((TT => {
        uU = TT
      }), (TT => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", TT)
      })), (0, XU.y)((TT => {
        TT || !(0, XU.h)() || (0, aU.isMobile)() || !yU.l.getItem("disableFullscreen") || (0, fU.l)() || PT.b.set({
          openEverythingMenuName: tU.k.SETTINGS
        })
      })), (0, iU.h)((TT => {
        let {
          action: UT,
          down: mT,
          press: WT
        } = TT;
        var MT, gT;
        (0, zT.e)() || (mT ? null === (MT = SU[UT]) || void 0 === MT || MT.call(SU, function(TT) {
          var UT;
          if (0 === TT || (null === (UT = rU) || void 0 === UT ? void 0 : UT.press) !== TT) {
            const UT = {
              press: TT,
              event: (0, VU.e)("inputAction")
            };
            rU = UT, queueMicrotask((() => {
              rU === UT && (rU = null)
            }))
          }
          return rU.event
        }(WT)) : null === (gT = GU[UT]) || void 0 === gT || gT.call(GU))
      })))
    }
    var EU = mT(39159),
      hU = mT(39150),
      DU = mT(39146);
    const oU = {
      completeTask(TT) {
        var UT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.CompleteTask, (0, yT.t)(TT))
      },
      setServerCookie(TT) {
        var UT;
        let {
          key: mT,
          value: WT
        } = TT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.GeneralCookieSet, (0, yT.w)({
          Ag: mT,
          Rg: WT
        }))
      },
      answerUiRequest(TT) {
        var UT;
        let {
          id: mT,
          qj: WT
        } = TT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.UiRequestResp, (0, yT.$)({
          HH: mT,
          kH: WT,
          jH: 5
        }))
      },
      chooseRewardedAd(TT) {
        var UT;
        let {
          id: mT,
          qj: WT
        } = TT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.UiRequestResponded, (0, yT.Z)({
          id: mT,
          qj: WT
        }))
      },
      requestLeaderboard(TT) {
        var UT;
        let {
          category: mT,
          timeframe: WT,
          seeTop: zT
        } = TT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.LeaderboardRequest, {
          category: mT,
          timeframe: WT,
          seeTop: zT
        })
      }
    };
    let AU = !1;
    const RU = fT.f.sc / 2,
      Tm = [RU, -RU, -RU, -RU, RU, RU, -RU, RU],
      Um = [0, 0, 0];

    function mm(TT, UT, mT) {
      for (let WT = 0; WT < TT.length; WT += 2)
        if (TT[WT] === UT && TT[WT + 1] === mT) return !0;
      return !1
    }
    const Wm = {
      blocksStandingOn: function() {
        const TT = (0, gT.i)();
        if (null === TT) return [];
        const {
          api: UT,
          chunks: mT,
          tables: WT
        } = TT;
        if (!UT.readPosition(UT.localId, Um)) return [];
        const [zT, MT, nT] = Um, HT = Math.ceil(MT) - 1, kT = [], jT = [];
        for (let gT = 0; gT < Tm.length; gT += 2) {
          const TT = zT + Tm[gT],
            UT = nT + Tm[gT + 1];
          if (Number.isInteger(TT) || Number.isInteger(UT)) continue;
          const MT = Math.floor(TT),
            lT = Math.floor(UT);
          if (mm(jT, MT, lT)) continue;
          const LT = mT.Gg(MT, HT, lT);
          WT.isSolidBlockId(LT) && (jT.push(MT, lT), kT.push(WT.nameOfId(LT)))
        }
        return kT
      },
      dropAhead: function() {
        const TT = (0, gT.i)();
        return null !== TT && 0 !== (iT.x.playerFlags(TT.api.apiView, 0) & iT.Cd.DropAhead)
      }
    };
    var zm = mT(37045),
      Mm = mT(39233),
      gm = mT(1457),
      nm = mT(40798);
    const Hm = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      km = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function jm() {
      const TT = new Set;
      return {
        add: UT => (TT.add(UT), () => {
          TT.delete(UT)
        }),
        fire() {
          for (const UT of TT) UT()
        }
      }
    }
    const lm = Object.freeze([]);

    function Lm(TT, UT) {
      let mT, {
        rereads: WT,
        followLocalId: zT
      } = UT;
      const gT = () => (mT = (0, oT.o)(mT, TT()), mT);
      return {
        current: gT,
        watch(TT) {
          const UT = (0, BT.e)((UT => {
            WT(UT) && TT(gT())
          }));
          if (!zT) return UT;
          let mT = (0, pT.f)();
          const nT = (0, MT.C)((() => {
            const UT = (0, pT.f)();
            UT !== mT && (mT = UT, TT(gT()))
          }));
          return () => {
            UT(), nT()
          }
        }
      }
    }
    const pm = {
        players: Lm((function() {
          const TT = BT.h.ids(),
            UT = {};
          for (const MT of TT) {
            var mT, WT, zT;
            UT[MT] = {
              name: null !== (mT = BT.h.getName(MT)) && void 0 !== mT ? mT : null,
              ranks: null !== (WT = BT.h.getSetting(MT, "ranks")) && void 0 !== WT ? WT : lm,
              cosmetics: null !== (zT = (0, BT.k)(MT)) && void 0 !== zT ? zT : null
            }
          }
          return {
            ids: TT,
            byId: UT,
            localId: (0, pT.f)()
          }
        }), {
          rereads: TT => "roster" !== TT.kind || TT.members || TT.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Lm((function() {
          const TT = {};
          for (const zT of BT.h.ids()) {
            var UT, mT, WT;
            TT[zT] = {
              colour: null !== (UT = BT.h.getSetting(zT, "colorInLobbyLeaderboard")) && void 0 !== UT ? UT : null,
              values: null !== (mT = BT.h.getSetting(zT, "lobbyLeaderboardValues")) && void 0 !== mT ? mT : null,
              tags: null !== (WT = BT.h.getSetting(zT, "lobbyLeaderboardTags")) && void 0 !== WT ? WT : null
            }
          }
          return TT
        }), {
          rereads: function(TT) {
            if ("roster" !== TT.kind) return "reset" === TT.kind;
            const {
              members: UT,
              settings: mT
            } = TT;
            return UT || mT.has("colorInLobbyLeaderboard") || mT.has("lobbyLeaderboardValues") || mT.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Bm = {
        cosmeticsUpdated: {
          watch: TT => (0, BT.e)((UT => {
            if ("cosmetics" !== UT.kind) return;
            const mT = (0, pT.f)();
            TT(UT.updates.map((TT => {
              let {
                dM: UT,
                wM: WT,
                tM: zT
              } = TT;
              return {
                local: UT === mT,
                wM: WT,
                tM: zT
              }
            })))
          }))
        }
      };
    var Zm = mT(3047),
      cm = mT(1863),
      fm = mT(696),
      qm = mT(41061);
    let im = !1,
      bm = null;
    const Om = {
      setShopOpen(TT) {
        var UT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.ShopMenuChanged, (0, yT.S)(TT))
      },
      buyShopItem(TT) {
        var UT;
        let {
          categoryKey: mT,
          itemKey: WT,
          userInput: zT
        } = TT;
        null === (UT = (0, gT.i)()) || void 0 === UT || UT.send(yT.e.ItemBought, {
          categoryKey: mT,
          itemKey: WT,
          shopVersion: qT.d.get("_shopVersion"),
          userInput: zT
        })
      }
    };
    let em = !1;
    var Ym = mT(4915);
    const Jm = qU.y.LookFrozen | qU.y.ClicksSuppressed;

    function xm(TT, UT) {
      var mT;
      null !== (mT = (0, gT.i)()) && void 0 !== mT && mT.send(TT, UT) || console.warn(`[bloxd-wasm-client] message ${TT} not sent: no live game or the core's command ring is full`)
    }(0, ZT.m)(aT.jb, (TT => {
      const UT = (0, XT.h)(aT.jb, TT);
      void 0 !== UT && kT.j.EZ("setDiscordReportKey", UT)
    }));
    const dm = {
      ignorePlayer(TT) {
        xm(yT.e.IgnoreUser, (0, yT.A)({
          lH: TT
        }))
      },
      reportPlayer(TT) {
        let {
          playerId: UT,
          chatMsgId: mT,
          Tn: WT,
          details: zT
        } = TT;
        xm(yT.e.UserReport, (0, yT.mb)({
          Zj: UT,
          vj: mT,
          Tn: WT,
          Un: zT
        }))
      },
      reportWorldCodeChat(TT) {
        let {
          chatMsgId: UT,
          Tn: mT,
          details: WT
        } = TT;
        xm(yT.e.UserReport, (0, yT.mb)({
          Zj: "",
          vj: UT,
          Tn: mT,
          Un: WT
        }))
      },
      requestDiscordReportKey(TT) {
        xm(yT.e.ReqDiscordReportKey, (0, yT.N)(TT))
      },
      reportLobbyOrGame(TT) {
        let {
          target: UT,
          Tn: mT,
          details: WT
        } = TT;
        "customGame" === UT ? xm(yT.e.CustomGameReport, (0, yT.u)({
          Tn: mT,
          Un: WT
        })) : xm(yT.e.LobbyReport, (0, yT.D)({
          Tn: mT,
          Un: WT
        }))
      },
      updateMyCosmetic(TT) {
        xm(yT.e.UpdateMyCosmetic, (0, yT.ib)(TT))
      },
      holdEmoteWheel(TT) {
        !TT || bU ? (0, Ym.g)(Jm, TT ? Jm : 0) : kT.j.EZ("requestEmoteWheelHoldRelease")
      }
    };
    var wm = mT(41160),
      tm = mT(9330),
      am = mT(39737);
    const ym = [0, 0, 0],
      Xm = [0, 0, 0],
      Im = [0, 0, 0],
      Qm = {
        blockAtViewPoint(TT) {
          let {
            x: UT,
            y: mT
          } = TT;
          const WT = (0, gT.i)();
          if (null === WT || void 0 === WT || !WT.renderFrame.hasView) return null;
          const {
            renderFrame: zT,
            clientApi: MT,
            api: nT
          } = WT;
          let HT = 0;
          return (0, am.d)(((TT, UT, mT) => (HT = MT.getBlockId(TT, UT, mT), 0 !== HT)), zT.cameraPosition, (0, am.h)((TT => iT.x.viewProj(nT.apiView, 0, TT)), UT, mT, ym), am.b, Xm, Im) ? {
            pos: [Xm[0], Xm[1], Xm[2]],
            normal: [Im[0], Im[1], Im[2]],
            name: (0, tm.e)(HT)
          } : null
        }
      },
      sm = {
        setBlockHighlight(TT) {
          var UT;
          null === (UT = (0, gT.i)()) || void 0 === UT || UT.setBlockHighlight(TT)
        }
      };
    var Fm = mT(2057),
      Pm = mT(41049),
      Vm = mT(41163),
      um = mT(4602),
      Cm = mT(4584),
      rm = mT(41169),
      Km = mT(3411),
      Sm = mT(3413);
    let Gm = null,
      Nm = null;

    function Em(TT) {
      const UT = TT.startsWith(Sm.k),
        [mT, WT = mT, zT = mT] = (UT ? TT.slice(Sm.k.length) : TT).split(Sm.h);
      return {
        top: mT,
        left: WT,
        right: zT,
        half: UT
      }
    }

    function hm(TT) {
      const UT = null === Gm ? void 0 : (0, Km.c)(TT),
        mT = void 0 === UT ? 0 : Gm.codes[UT];
      return 0 === mT ? void 0 : Gm.pool[mT - 1]
    }
    var Dm = mT(3406),
      om = mT(4576),
      Am = mT(4600),
      Rm = mT(41085),
      TW = mT(41178);
    const UW = "item:";
    let mW = null,
      WW = null,
      zW = null,
      MW = null,
      gW = !1,
      nW = !1;

    function HW() {
      return nW || (nW = !0, (0, Am.k)().then((TT => {
        TT && (0, Fm.c)()
      }))), zW ??= Promise.all([(0, Dm.f)(), (Nm ??= mT.e(1).then((() => mT(60492))).then((TT => {
        let {
          BLOCK_FACE_RUNS: UT,
          BLOCK_FACES: mT,
          MAX_FACE_ITEM_ID: WT
        } = TT;
        Gm = {
          codes: (0, Sm.t)(UT, WT + 1),
          pool: mT.split(Sm.o).map(Em)
        }
      }), (TT => {
        throw Nm = null, TT
      })), Nm), (0, TW.f)(), mT.e(201).then((() => mT(34291)))]).then((TT => {
        let [, , UT, mT] = TT;
        UT.followBundledTextures(), mW = UT, WW = mT, (0, Fm.c)()
      }), (TT => {
        zW = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", TT)
      })), zW
    }

    function kW(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = (0, Rm.k)()) || void 0 === mT ? void 0 : mT.textureUrl(TT)) && void 0 !== UT ? UT : mW.itemSpriteUrl(TT)
    }

    function jW(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = (0, Rm.k)()) || void 0 === mT ? void 0 : mT.textureUrl(TT)) && void 0 !== UT ? UT : mW.blockTextureUrl(TT)
    }

    function lW(TT) {
      var UT;
      return null !== (UT = (0, Dm.c)(TT)) && void 0 !== UT ? UT : TT
    }

    function LW(TT, UT) {
      var mT, WT, zT;
      return null !== (mT = null !== (WT = null !== (zT = jW(TT)) && void 0 !== zT ? zT : null === UT || void 0 === UT ? void 0 : UT.rotated[TT]) && void 0 !== WT ? WT : null === UT || void 0 === UT ? void 0 : UT.animated[TT]) && void 0 !== mT ? mT : mW.notFoundUrl()
    }

    function pW(TT) {
      return void 0 !== (0, Km.c)(TT) ? TT : /^[1-9][0-9]*$/.test(TT) ? (0, Km.f)(Number(TT)) : void 0
    }

    function BW(TT) {
      var UT;
      if (TT.startsWith(UW)) {
        var mT;
        const UT = (0, Dm.c)(TT.slice(5));
        return null !== (mT = void 0 === UT ? null : kW(UT)) && void 0 !== mT ? mT : mW.notFoundUrl()
      }
      return null !== (UT = mW.particleUrl(TT)) && void 0 !== UT ? UT : mW.notFoundUrl()
    }

    function ZW(TT, UT) {
      return "StairsBlock" === TT ? TT : UT ? "SlabBlock" : "CubeBlock"
    }
    const cW = {
        async blockIcon(TT) {
          var UT;
          let {
            name: WT,
            size: zT,
            lineWidth: MT
          } = TT;
          await HW();
          const gT = null !== (UT = pW(WT)) && void 0 !== UT ? UT : WT,
            nT = (0, Am.e)(gT, zT, MT);
          if (null !== nT) return nT;
          const HT = hm(gT),
            kT = (0, Km.c)(gT),
            jT = void 0 === kT || null === WW ? void 0 : WW.itemTypeNameOf(kT);
          if (null === mW || void 0 === HT) return "";
          const lT = [HT.top, HT.left, HT.right].some((TT => null === jW(TT))),
            LT = lT ? await (MW ??= mT.e(207).then((() => mT(34366))).then((TT => (gW && (gW = !1, (0, Fm.c)()), {
              rotated: TT.rotatedBlockTextures,
              animated: TT.animatedBlockTextures
            })), (TT => (MW = null, gW = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", TT), null))), MW) : null;
          if (lT && null === LT) return "";
          const pT = {
              top: LW(HT.top, LT),
              left: LW(HT.left, LT),
              right: LW(HT.right, LT),
              itemType: ZW(jT, HT.half)
            },
            BT = (0, Rm.g)(),
            ZT = 0 === BT ? gT : `${gT}#${BT}`;
          return (await (0, om.c)()).drawBlockIconUrl(ZT, zT, MT, (() => pT))
        }
      },
      vW = {
        itemIcon: function(TT) {
          var UT, mT, zT, MT;
          if (null === mW) return HW(), WT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          if ((0, Cm.f)(TT)) return {
            kind: "icon",
            url: null !== (mT = null !== (zT = null === (MT = (0, Rm.k)()) || void 0 === MT ? void 0 : MT.textureUrl(TT)) && void 0 !== zT ? zT : mW.ingameIconUrl(TT)) && void 0 !== mT ? mT : mW.notFoundUrl()
          };
          if (TT.startsWith(Cm.c)) return {
            kind: "icon",
            url: BW(TT.slice(Cm.c.length))
          };
          if (0 === (0, Km.h)()) return (0, rm.c)(), WT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          const gT = null !== (UT = pW(TT)) && void 0 !== UT ? UT : TT,
            nT = (0, Km.c)(gT),
            HT = void 0 === nT ? void 0 : WW.itemTypeNameOf(nT);
          if (void 0 !== hm(gT)) return {
            kind: "drawnBlock"
          };
          const kT = function(TT) {
            var UT;
            return null !== (UT = kW(lW(TT))) && void 0 !== UT ? UT : mW.notFoundUrl()
          }(gT);
          if ((0, Am.g)(gT) && ! function(TT) {
              const UT = (0, Rm.k)();
              return null !== UT && (null !== UT.textureUrl(lW(TT)) || null !== UT.modelUrl(TT))
            }(gT)) return {
            kind: "model",
            url: kT
          };
          if ("Gun" === HT) return {
            kind: "gun",
            url: kT
          };
          if (void 0 !== nT && "GrayscaleArmour" === WW.itemTypeOf(nT) || Object.hasOwn(um.c, gT)) {
            var jT;
            const UT = null !== (jT = (0, um.d)(TT)) && void 0 !== jT ? jT : (0, um.d)(gT);
            if (UT) return {
              kind: "item",
              url: kT,
              tint: UT
            }
          }
          return {
            kind: "item",
            url: kT
          }
        },
        hasIcon: function(TT) {
          return void 0 !== pW(TT) || (0, Cm.f)(TT) || TT.startsWith(Cm.c)
        },
        isItemName: function(TT) {
          return void 0 !== pW(TT)
        }
      };
    var fW = mT(643),
      qW = mT(39739);

    function iW(TT) {
      if (null === TT || void 0 === TT || !TT.isCoreRunning) return null;
      const {
        api: UT,
        chunks: mT,
        items: WT,
        tables: zT
      } = TT;
      return {
        playerFeet() {
          const TT = UT.Aq(UT.localId);
          return null !== TT && void 0 !== TT && TT.every(Number.isFinite) ? TT : null
        },
        chunkBlocks: TT => mT.isLoaded(TT[0], TT[1], TT[2]) ? (TT, UT, WT) => mT.Gg(TT, UT, WT) : null,
        blockName: TT => zT.nameOfId(TT),
        inventory: () => ({
          slots: WT.playerItems().map((TT => TT ? {
            name: TT.name,
            amount: TT.amount
          } : null)),
          heldSlot: WT.selectedSlot
        }),
        nearby() {
          const mT = [];
          for (let zT = 0; zT < UT.idStr.length; zT++) {
            var WT;
            const MT = UT.idStr[zT],
              gT = UT.serverIds[zT],
              nT = UT.kinds[zT];
            if (null === MT || UT.isLocal(gT) || nT >>> iT.e !== iT.u.Lifeform) continue;
            const HT = UT.Aq(gT),
              kT = fW.j[nT & iT.h];
            HT && void 0 !== kT && mT.push({
              kind: "Player" === kT ? "player" : kT,
              name: null !== (WT = TT.clientApi.getEntityName(MT)) && void 0 !== WT ? WT : null,
              position: HT
            })
          }
          return mT
        },
        droppedItems() {
          let TT = 0;
          for (let mT = 0; mT < UT.idStr.length; mT++) null !== UT.idStr[mT] && UT.kinds[mT] >>> iT.e === iT.u.Item && TT++;
          return TT
        }
      }
    }
    const bW = {
        worldCodeAiChunk: TT => Promise.resolve((0, qW.d)(iW((0, gT.i)()), TT)),
        worldCodeAiGameState: () => Promise.resolve((0, qW.f)(iW((0, gT.i)())))
      },
      OW = function(TT) {
        const UT = jm(),
          WT = jm(),
          zT = new Set,
          MT = new Set,
          gT = () => {
            var UT, mT;
            return null !== (UT = null === (mT = TT.runtime()) || void 0 === mT ? void 0 : mT.currentViewer) && void 0 !== UT ? UT : null
          };
        let nT = null,
          HT = null;
        const jT = (TT, UT) => ({
            current: TT,
            watch(mT) {
              let WT = TT();
              return UT.add((() => {
                const UT = TT();
                UT !== WT && (WT = UT, mT(UT))
              }))
            }
          }),
          LT = TT => ({
            watch: UT => (TT.add(UT), () => {
              TT.delete(UT)
            })
          }),
          pT = TT => {
            const UT = gT(),
              mT = null === UT || void 0 === UT ? void 0 : UT.view;
            UT && mT && UT.seek(Math.max(0, Math.min(mT.totalTicks - 1, mT.Cl + TT * lT.Md)))
          },
          BT = {
            replay: jT((() => {
              var TT;
              const UT = gT(),
                mT = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null;
              return null === UT || null === mT || mT.state === lT.qd.None ? (nT = null, null) : (nT = (0, oT.o)(nT, {
                id: UT.id,
                Cl: mT.Cl,
                totalTicks: mT.totalTicks,
                sF: lT.Md,
                playing: mT.state === lT.qd.Playing,
                speed: mT.speed,
                cameraMode: mT.cameraMode,
                freecam: "freecam" === mT.cameraMode
              }), nT)
            }), UT),
            replayEdits: jT((() => {
              var TT;
              const UT = gT(),
                mT = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null;
              return null === UT || null === mT || mT.state === lT.qd.None ? (HT = null, null) : (HT = (0, oT.o)(HT, {
                cameraKeyframes: [...UT.keyframes],
                playbackMark: mT.mark,
                fileName: UT.fileName,
                unsavedChanges: UT.unsavedChanges,
                suggestSaveAs: UT.suggestSaveAs
              }), HT)
            }), UT),
            replayRecorder: jT((() => {
              var UT, mT;
              return null !== (UT = null === (mT = TT.runtime()) || void 0 === mT ? void 0 : mT.recorder.current) && void 0 !== UT ? UT : nm.e.states.replayRecorder.current()
            }), WT),
            replayVideoExporting: {
              current: Mm.d,
              watch: TT => (0, kT.k)("replayViewer|videoExportChanged", (() => {
                TT((0, Mm.d)())
              }))
            }
          },
          ZT = {
            replayUiActionRequested: LT(MT),
            replayViewerRequested: LT(zT)
          },
          cT = TT => {
            for (const UT of zT) UT(TT)
          },
          vT = () => {
            var WT;
            !0 === (null === (WT = gT()) || void 0 === WT ? void 0 : WT.isOpen) && Promise.all([mT.e(98), mT.e(67)]).then((() => mT(60488))).then((mT => {
              let {
                startWasmReplayVideoExport: WT
              } = mT;
              return WT({
                viewer: gT,
                canvas: () => {
                  var UT, mT;
                  return null !== (UT = null === (mT = TT.canvas) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : null
                },
                watchViewer: UT.add,
                requestViewer: cT
              })
            }), (TT => {
              console.error("Couldn't load the video export", TT), gm.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((TT => {
              console.error("The video export failed", TT)
            }))
          },
          fT = {
            replayAction(TT) {
              if ((0, Mm.d)()) return;
              const UT = gT();
              switch (TT) {
                case "replaySkipBack":
                  pT(-1);
                  break;
                case "replaySkipForward":
                  pT(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== UT && void 0 !== UT && UT.view && UT.setSpeed((0, zm.i)(UT.view.speed, "replaySpeedUp" === TT ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === UT || void 0 === UT || UT.addKeyframe()
              }
            },
            setReplayPlaying(TT) {
              var UT, mT;
              (0, Mm.d)() || (TT ? null === (UT = gT()) || void 0 === UT || UT.play() : null === (mT = gT()) || void 0 === mT || mT.pause())
            },
            seekReplay(TT) {
              var UT;
              let {
                Cl: mT,
                ignorePlaybackMark: WT
              } = TT;
              null === (UT = gT()) || void 0 === UT || UT.seek(mT, null !== WT && void 0 !== WT && WT)
            },
            setReplayCameraMode(TT) {
              var UT;
              null === (UT = gT()) || void 0 === UT || UT.setCameraMode(TT)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(TT) {
              var UT;
              null === (UT = gT()) || void 0 === UT || UT.setKeyframe(TT)
            },
            moveReplayCameraKeyframe(TT) {
              var UT;
              let {
                from: mT,
                to: WT
              } = TT;
              null === (UT = gT()) || void 0 === UT || UT.moveKeyframe(mT, WT)
            },
            deleteReplayCameraKeyframes(TT) {
              var UT;
              let {
                start: mT,
                end: WT
              } = TT;
              null === (UT = gT()) || void 0 === UT || UT.deleteKeyframes(mT, WT)
            },
            setReplayPlaybackMark(TT) {
              var UT;
              null === (UT = gT()) || void 0 === UT || UT.setMark(TT)
            },
            cropReplay(TT) {
              var UT, mT;
              let {
                start: WT,
                end: zT
              } = TT;
              return !(0, Mm.d)() && (null !== (UT = null === (mT = gT()) || void 0 === mT ? void 0 : mT.crop(WT, zT)) && void 0 !== UT && UT)
            },
            holdReplayForShaderPackFailure(TT) {
              const UT = gT();
              UT && (UT.holdForShaderPackFailure(), function(TT) {
                mT.e(117).then((() => mT(39343))).then((UT => {
                  let {
                    shaderPackPage: mT
                  } = UT;
                  mT.block(TT)
                })).catch((TT => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", TT)
                }))
              }(TT))
            },
            exportReplayVideo() {
              vT()
            },
            toggleRecording() {
              var UT;
              null === (UT = TT.runtime()) || void 0 === UT || UT.recorder.toggleRecording()
            },
            saveClip() {
              var UT;
              null === (UT = TT.runtime()) || void 0 === UT || UT.recorder.saveClip()
            },
            setRecorderPrefs(UT) {
              var mT;
              let {
                clipping: WT,
                clipSeconds: zT
              } = UT;
              null === (mT = TT.runtime()) || void 0 === mT || mT.recorder.setPrefs(WT, zT)
            },
            setReplayViewerOpen(UT) {
              var mT;
              (0, cU.f)(UT) && (null === (mT = TT.runtime()) || void 0 === mT || mT.recorder.viewerShown(UT))
            },
            recordFlyingMiddleText(UT) {
              var mT;
              let {
                content: WT,
                yM: zT,
                angle: MT,
                XM: gT
              } = UT;
              null === (mT = TT.runtime()) || void 0 === mT || mT.recorder.recordFlyingText(JSON.stringify(WT), zT, MT, gT)
            },
            dragReplayCamera(UT) {
              var mT;
              let {
                dx: WT,
                dy: zT
              } = UT;
              null === (mT = TT.freecam()) || void 0 === mT || mT.drag(WT, zT)
            },
            moveReplayFreecam(UT) {
              var mT;
              null === (mT = TT.freecam()) || void 0 === mT || mT.move(UT)
            },
            holdReplayFreecamVertical(UT) {
              var mT;
              let {
                action: WT,
                fn: zT
              } = UT;
              null === (mT = TT.freecam()) || void 0 === mT || mT.holdVertical(WT, zT)
            }
          },
          qT = TT => {
            var UT;
            const mT = gT(),
              WT = null !== (UT = null === mT || void 0 === mT ? void 0 : mT.view) && void 0 !== UT ? UT : null;
            Hm.has(TT) ? (TT => {
              for (const UT of MT) UT(TT)
            })(TT) : km.has(TT) ? fT.replayAction(TT) : "replayPlayPause" === TT ? mT && WT && WT.state !== lT.qd.None && fT.setReplayPlaying(WT.state !== lT.qd.Playing) : "replayChangeCameraMode" === TT ? null === mT || void 0 === mT || mT.cycleCameraMode() : "replayExit" === TT ? !0 === (null === mT || void 0 === mT ? void 0 : mT.inPlayback) && (0, IU.j)("/") : "replayExportVideo" === TT && vT()
          };
        let iT = !1;
        return {
          states: BT,
          events: ZT,
          commands: fT,
          lookups: {
            replayCamera() {
              var UT, mT, WT;
              return !0 !== (null === (UT = gT()) || void 0 === UT ? void 0 : UT.isOpen) ? null : null !== (mT = null === (WT = TT.cameraView) || void 0 === WT ? void 0 : WT.call(TT)) && void 0 !== mT ? mT : null
            },
            leaveGameReloadsPage() {
              var TT;
              return !0 === (null === (TT = gT()) || void 0 === TT ? void 0 : TT.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var TT;
              const mT = !0 === (null === (TT = gT()) || void 0 === TT ? void 0 : TT.inPlayback);
              mT !== iT && (iT = mT, kT.j.EZ("connectedGameChanged")), UT.fire()
            },
            recorderChanged: WT.fire,
            keyDown: TT => {
              var UT;
              switch (TT) {
                case "recordGame":
                  return void fT.toggleRecording();
                case "recordClip":
                  return void((0, cU.c)() || fT.saveClip())
              }(0, Mm.d)() || ("replayViewerOpen" !== TT ? TT.startsWith("replay") && ((0, cU.c)() || !0 === (null === (UT = gT()) || void 0 === UT ? void 0 : UT.inPlayback)) && qT(TT) : cT("toggle"))
            }
          }
        }
      }({
        runtime: zT.p,
        cameraView: () => {
          var TT;
          const UT = null === (TT = (0, gT.i)()) || void 0 === TT ? void 0 : TT.renderFrame;
          if (!UT) return null;
          const [mT, WT, zT] = UT.cameraPosition, [MT, nT, HT] = UT.cameraDirection;
          return {
            position: [mT, WT, zT],
            direction: [MT, nT, HT]
          }
        },
        canvas: () => {
          var TT, UT, mT;
          return null !== (TT = null === (UT = (mT = (0, MT.N)()).canvas) || void 0 === UT ? void 0 : UT.call(mT)) && void 0 !== TT ? TT : null
        },
        freecam: zT.m
      }),
      eW = {
        states: {
          ...kU,
          ...pU.j,
          ...OW.states,
          ...pm,
          ...CT
        },
        events: {
          ...jU,
          ...cT,
          ...pU.f,
          ...xT.d,
          ...wm.f,
          ...OW.events,
          ...Bm,
          ...JT.i
        },
        commands: {
          ...YT,
          ...lU,
          ...vT,
          ...pU.b,
          ...oU,
          ...dm,
          ...JT.h,
          ...FU,
          ...OW.commands,
          ...Om,
          ...rT,
          ...sm,
          ...BU
        },
        queries: {
          ...pU.h,
          ...bW
        },
        lookups: {
          ...LU,
          ...QT,
          ...wm.i,
          ...OW.lookups,
          ...eT,
          ...Wm,
          ...Qm,
          ...KT
        }
      };

    function YW() {
      (0, nT.d)(ZT.q), (0, zT.s)(OW.feed), (0, xT.f)(), AU || (AU = !0, (0, ZT.m)(aT.l, (TT => {
        const UT = (0, XT.h)(aT.l, TT);
        "string" === typeof UT && Promise.resolve().then((() => mT(3755))).then((TT => {
          let {
            onCosmeticPackGranted: mT
          } = TT;
          mT(UT)
        }))
      })), (0, ZT.m)(aT.gb, (TT => {
        const UT = (0, XT.h)(aT.gb, TT);
        "number" === typeof UT && kT.j.EZ("serverUpdating", Date.now() + UT, !0)
      })), (0, ZT.m)(aT.H, (TT => {
        const UT = (0, XT.h)(aT.H, TT);
        if ((0, XT.d)(UT)) {
          const {
            Fz: TT,
            Pz: mT
          } = UT;
          (0, hU.c)({
            Fz: "string" === typeof TT ? TT : null,
            Pz: "string" === typeof mT ? mT : null
          })
        }
      })), (0, ZT.m)(jT.$b.NewUiRequest, (TT => {
        const UT = (0, XT.k)(TT);
        (0, XT.d)(UT) && "number" === typeof UT.id && (0, XT.d)(UT.clientParameters) && (0, DU.c)(UT.id, UT.clientParameters)
      })), (0, ZT.m)(aT.ab, (TT => {
        const UT = (0, XT.h)(aT.ab, TT);
        "number" === typeof UT && (0, DU.g)(UT)
      })), (0, ZT.l)(DU.b), (0, ZT.m)(jT.$b.UiRequestPopup, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT) && "number" === typeof UT.id && "string" === typeof UT.text) {
          const TT = UT.id;
          (0, DU.j)(TT, UT.text, !0 === UT.destructive, (UT => {
            oU.answerUiRequest({
              id: TT,
              qj: UT
            })
          }))
        }
      })), (0, ZT.m)(jT.$b.TopRightHelper, (TT => {
        const UT = (0, XT.k)(TT);
        void 0 !== UT && kT.j.EZ("TopRightHelper", UT, !0)
      })), (0, ZT.m)(jT.$b.TaskProgress, (TT => {
        const UT = (0, XT.k)(TT);
        (0, XT.d)(UT) && "string" === typeof UT.taskId && "number" === typeof UT.progress && (0, EU.b)({
          taskId: UT.taskId,
          progress: UT.progress
        })
      }))), em || (em = !0, (0, ZT.m)(aT.r, (TT => {
        const UT = (0, XT.h)(aT.r, TT);
        (0, XT.d)(UT) && kT.j.EZ("showShopFromServer", {
          toggle: UT.nT,
          HT: UT.HT
        }, !0)
      })), (0, ZT.m)(jT.$b.OverShopInfo, (TT => {
        const UT = (0, XT.k)(TT);
        (0, XT.d)(UT) && kT.j.EZ("overShopInfo", UT.info, !0)
      })), (0, ZT.m)(jT.$b.ShowShopTutorial, (() => {
        kT.j.EZ("showShopTutorial", null, !0)
      }))), im || (im = !0, (0, ZT.h)((() => {
        var TT;
        (0, Zm.resetLeaveEvents)(), null === (TT = bm) || void 0 === TT || TT(), bm = (0, ZT.d)() ? (0, fm.f)(ZT.d) : null, (0, ZT.d)() || kT.j.Mq()
      })), (0, ZT.m)(jT.$b.SetCookie, (TT => {
        const UT = (0, XT.k)(TT),
          mT = (0, IU.c)().gameNameWithVariation;
        (0, XT.d)(UT) && "string" === typeof UT.key && null !== mT && (0, cm.setCookie)(mT, UT.key, UT.value)
      })), (0, ZT.m)(jT.$b.LeaveValues, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT) && "string" === typeof UT.leaveEventType) {
          const {
            leaveEventType: TT,
            category: mT,
            subCategory: WT,
            value: zT
          } = UT;
          (0, Zm.updateLeaveValue)({
            leaveEventType: TT,
            category: mT,
            subCategory: WT,
            value: zT
          })
        }
      })), (0, ZT.m)(jT.$b.CustomAnalyticsEvent, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT) && "string" === typeof UT.cat1) {
          const {
            cat1: TT,
            cat2: mT,
            cat3: WT,
            value: zT
          } = UT;
          (0, Zm.logCustomAnalyticsEvent)({
            cat1: TT,
            cat2: mT,
            cat3: WT,
            value: zT
          })
        }
      })), (0, ZT.m)(jT.$b.ProgressionEvent, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT)) {
          const {
            type: TT,
            location1: mT,
            location2: WT,
            location3: zT,
            score: MT
          } = UT;
          (0, Zm.logProgressionEvent)({
            type: TT,
            location1: mT,
            location2: WT,
            location3: zT,
            score: MT
          })
        }
      })), (0, ZT.m)(jT.$b.ResourceEvent, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT)) {
          const {
            type: TT,
            resourceType: mT,
            amount: WT,
            category: zT,
            itemName: MT
          } = UT;
          (0, Zm.logResourceEvent)({
            type: TT,
            resourceType: mT,
            amount: WT,
            category: zT,
            itemName: MT
          })
        }
      })), (0, ZT.m)(jT.$b.LeaderboardResponse, (TT => {
        const UT = (0, XT.k)(TT);
        if ((0, XT.d)(UT)) {
          const {
            category: TT,
            timeframe: mT,
            data: WT
          } = UT;
          kT.j.EZ("leaderboardResponse", {
            category: TT,
            timeframe: mT,
            data: WT
          })
        }
      })), (0, ZT.m)(aT.y, (TT => {
        const UT = (0, XT.h)(aT.y, TT);
        "string" === typeof UT && (0, qm.e)(TT.conn, UT)
      })), (0, ZT.m)(aT.B, (TT => {
        const UT = (0, XT.h)(aT.B, TT);
        "string" === typeof UT && console.error(`[logErrorToConsole]: ${UT}`)
      }))), FT(), (0, wm.b)(), sU || (sU = !0, (0, ZT.m)(aT.j, (TT => {
        const UT = (0, XT.h)(aT.j, TT);
        void 0 !== UT && (0, QU.j)(UT)
      }))), NU(), wU(), NT || (NT = !0, (0, MT.A)(ET)), WT.gameBridge.attach(eW), (0, WT.installPageSources)({
        commands: {
          ...WT.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Pm.g
        },
        queries: cW,
        lookups: {
          ...WT.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...vW,
          mY: Pm.b,
          drawCallStats: Vm.f
        }
      }), (0, Fm.c)(), HW()
    }
  },
  41085: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT,
      g: () => HT,
      k: () => nT,
      m: () => kT
    });
    var WT = mT(2057);
    let zT = null,
      MT = 0;
    const gT = new Set;

    function nT() {
      return zT
    }

    function HT() {
      return MT
    }

    function kT(TT) {
      zT = TT, MT++, (0, WT.c)();
      for (const UT of gT) UT()
    }

    function jT(TT) {
      gT.add(TT)
    }
  },
  41178: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => nT
    });
    var WT = mT(41182);
    let zT = null,
      MT = null;

    function gT() {
      return zT ??= mT.e(62).then((() => mT(60497))).catch((TT => {
        throw zT = null, TT
      })), zT
    }

    function nT() {
      return MT ??= Promise.all([gT(), (0, WT.c)()]).then((TT => {
        let [UT] = TT;
        return UT
      }), (TT => {
        throw MT = null, TT
      })), MT
    }
  },
  37162: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    const WT = {
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
  39172: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      g: () => zT
    });
    const WT = ["description", "label"];

    function zT(TT) {
      const UT = TT.type;
      return {
        type: UT,
        params: TT[UT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);