export const id = 53;
export const ids = [53];
export const modules = {
  40912: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => UV,
      g: () => YV
    });
    const JV = 6e3;

    function YV(VV, eV) {
      return [Math.floor(VV[0] / eV) * eV, Math.floor(VV[1] / eV) * eV, Math.floor(VV[2] / eV) * eV]
    }

    function UV(VV) {
      const eV = (null !== VV && void 0 !== VV ? VV : "").match(/-?\d+(?:\.\d+)?/g);
      return eV && eV.length >= 3 ? [Number(eV[0]), Number(eV[1]), Number(eV[2])] : null
    }

    function yV(VV, eV) {
      return VV === eV ? String(VV) : `${VV}-${eV}`
    }

    function pV(VV, eV, xV, JV) {
      const YV = [];
      let UV = new Map;
      for (let yV = VV[2]; yV < VV[2] + eV; yV++) {
        const pV = new Map;
        let QV = VV[0];
        for (; QV < VV[0] + eV;) {
          const YV = JV(QV, xV, yV);
          let nV = QV;
          for (; nV + 1 < VV[0] + eV && JV(nV + 1, xV, yV) === YV;) nV++;
          if (null !== YV) {
            const VV = `${QV} ${nV} ${YV}`,
              eV = UV.get(VV);
            eV ? (eV.z1 = yV, UV.delete(VV), pV.set(VV, eV)) : pV.set(VV, {
              x0: QV,
              x1: nV,
              z0: yV,
              z1: yV,
              name: YV
            })
          }
          QV = nV + 1
        }
        YV.push(...UV.values()), UV = pV
      }
      return YV.push(...UV.values()), YV.sort(((VV, eV) => VV.z0 - eV.z0 || VV.x0 - eV.x0)).map((VV => `x${yV(VV.x0,VV.x1)} z${yV(VV.z0,VV.z1)} ${VV.name}`))
    }

    function QV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JV;
      const QV = [VV[0] + eV - 1, VV[1] + eV - 1, VV[2] + eV - 1],
        nV = null !== YV && YV.every(((eV, xV) => Math.floor(eV) >= VV[xV] && Math.floor(eV) <= QV[xV])),
        wV = [`The chunk from ${VV.join(" ")} to ${QV.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== YV && wV.push(`The player's feet are at ${YV.map(Math.floor).join(" ")}, ${nV?"in this chunk":"outside this chunk"}.`);
      const ZV = [];
      for (let JV = VV[1]; JV <= QV[1]; JV++) {
        const YV = pV(VV, eV, JV, xV).join("; "),
          UV = ZV[ZV.length - 1];
        (null === UV || void 0 === UV ? void 0 : UV.boxes) === YV ? UV.to = JV : ZV.push({
          from: JV,
          to: JV,
          boxes: YV
        })
      }
      const vV = ZV.filter((VV => "" !== VV.boxes));
      0 === vV.length && wV.push("It is all air.");
      let rV = wV.join("\n").length;
      for (const JV of vV) {
        const VV = `y${yV(JV.from,JV.to)}: ${JV.boxes}`;
        if (rV += VV.length + 1, rV > UV) {
          wV.push(`Cut short: the layers from y${JV.from} up aren't shown, as there are too many blocks.`);
          break
        }
        wV.push(VV)
      }
      return wV.join("\n")
    }
  },
  9413: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(27);

    function YV() {
      return !JV.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38127: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      d: () => UV,
      e: () => YV
    });
    const JV = [.25, .5, 1, 2, 4, 8, 16];

    function YV(VV, eV) {
      const xV = JV;
      let YV = xV.indexOf(VV);
      return -1 === YV && (YV = xV.findIndex((eV => eV >= VV)), -1 === YV && (YV = xV.length - 1)), "up" === eV ? xV[Math.min(YV + 1, xV.length - 1)] : xV[Math.max(YV - 1, 0)]
    }

    function UV(VV) {
      return VV <= JV[0]
    }

    function yV(VV) {
      return VV >= JV[JV.length - 1]
    }
  },
  40285: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => yV
    });
    var JV = xV(32);
    let YV = !1;

    function UV() {
      return YV
    }

    function yV(VV) {
      YV !== VV && (YV = VV, JV.h.QZ("replayViewer|videoExportChanged"))
    }
  },
  35093: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => UV
    });
    let JV = !1;

    function YV() {
      return JV
    }

    function UV(VV) {
      return JV !== VV && (JV = VV, !0)
    }
  },
  40217: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(32),
      YV = xV(2080);

    function UV(VV) {
      let {
        taskId: eV,
        progress: xV
      } = VV;
      const JV = YV.c.get("_tasks");
      null !== JV && void 0 !== JV && JV[eV] && YV.c.apply({
        _tasks: {
          ...JV,
          [eV]: {
            ...JV[eV],
            progress: xV
          }
        }
      })
    }
    JV.h.subscribe("clientTaskProgress", (VV => {
      UV(VV)
    }))
  },
  40885: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => vV,
      e: () => kV,
      i: () => nV,
      k: () => ZV,
      m: () => QV,
      q: () => yV,
      u: () => wV,
      w: () => bV
    });
    var JV = xV(2080),
      YV = xV(32),
      UV = xV(2094);
    const yV = (0, UV.l)((function() {
        var VV, eV, xV, YV;
        return {
          health: null !== (VV = JV.c.get("_health")) && void 0 !== VV ? VV : null,
          maxHealth: null !== (eV = JV.c.get("_totalMaxHealth")) && void 0 !== eV ? eV : null,
          shield: null !== (xV = JV.c.get("_shield")) && void 0 !== xV ? xV : null,
          maxShield: null !== (YV = JV.c.get("maxShield")) && void 0 !== YV ? YV : null
        }
      }), [], (0, UV.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      pV = [{
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

    function QV(VV, eV) {
      return pV[(VV ? 2 : 0) + (eV ? 1 : 0)]
    }
    const nV = (0, UV.l)((function() {
      var VV;
      return null !== (VV = JV.c.get("_aura")) && void 0 !== VV ? VV : null
    }), [], (0, UV.i)("_aura"));

    function wV(VV) {
      return {
        watch: eV => (0, YV.i)("shotPlayer", (xV => {
          let {
            playerId: JV,
            damage: YV,
            wasCrit: UV,
            distance: yV
          } = xV;
          VV(JV) && eV({
            damage: YV,
            wasCrit: UV,
            distance: yV
          })
        }))
      }
    }

    function ZV(VV) {
      return (0, UV.c)("chat", (eV => {
        let {
          serverChatMsgId: xV,
          worldCodeLineId: JV,
          content: YV,
          chatterEId: UV,
          chatterObjectsToReplay: yV
        } = eV;
        const pV = UV ? VV(UV) : null;
        return {
          serverChatMsgId: null !== xV && void 0 !== xV ? xV : null,
          worldCodeLineId: null !== JV && void 0 !== JV ? JV : null,
          content: YV,
          author: pV,
          hiddenFromReplay: !0 === yV && !1 === (null === pV || void 0 === pV ? void 0 : pV.local)
        }
      }))
    }
    class vV {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const xV = this.shown;
        return VV !== this.needed && (this.needed = VV, this.neededSince = eV, null === VV && (this.shown = null)), this.shown !== this.needed && eV - this.neededSince > 200 && (this.shown = this.needed), this.shown !== xV
      }
    }

    function rV(VV) {
      return [{
        translationKey: `touchKeys:${VV}`
      }]
    }
    const kV = {
      open: rV("open"),
      close: rV("close"),
      milk: rV("milk"),
      shear: rV("shear"),
      tame: rV("tame"),
      feed: rV("feed"),
      ride: rV("ride")
    };

    function bV(VV) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: VV
      }]
    }
  },
  42359: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      d: () => yV
    });
    var JV = xV(3721);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= xV.e(234).then((() => xV(37478))).then((VV => {
        let {
          ITEM_SPRITES: eV,
          ITEM_SPRITES_WITHOUT_FILE: xV,
          ITEM_FILES_WITHOUT_SPRITE: UV
        } = VV;
        YV = function(VV, eV, xV) {
          const YV = new Set,
            UV = (0, JV.u)(eV);
          let yV = 0;
          for (const [JV, pV] of VV.entries()) JV === UV[yV] ? yV++ : YV.add(pV);
          if ("" !== xV)
            for (const pV of xV.split(JV.p)) YV.add(pV);
          return YV
        }(eV.split(JV.p), xV, UV)
      }), (VV => {
        throw UV = null, VV
      })), UV
    }

    function pV(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = YV) || void 0 === xV ? void 0 : xV.has(VV)) && void 0 !== eV && eV
    }
  },
  40902: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => UV,
      f: () => YV
    });
    const JV = 128;

    function YV(VV, eV, xV, JV) {
      const YV = 2 * eV - 1,
        UV = 1 - 2 * xV,
        yV = VV(0) - YV * VV(3),
        pV = VV(4) - YV * VV(7),
        QV = VV(8) - YV * VV(11),
        nV = VV(1) - UV * VV(3),
        wV = VV(5) - UV * VV(7),
        ZV = VV(9) - UV * VV(11);
      JV[0] = pV * ZV - QV * wV, JV[1] = QV * nV - yV * ZV, JV[2] = yV * wV - pV * nV;
      const vV = JV[0] * VV(3) + JV[1] * VV(7) + JV[2] * VV(11) < 0 ? -1 : 1,
        rV = Math.hypot(JV[0], JV[1], JV[2]) * vV;
      return JV[0] /= rV, JV[1] /= rV, JV[2] /= rV, JV
    }

    function UV(VV, eV, xV, JV, YV, UV) {
      const yV = [Math.floor(eV[0]), Math.floor(eV[1]), Math.floor(eV[2])],
        pV = [0, 0, 0],
        QV = [1 / 0, 1 / 0, 1 / 0],
        nV = [1 / 0, 1 / 0, 1 / 0];
      for (let vV = 0; vV < 3; vV++) pV[vV] = Math.sign(xV[vV]), 0 !== pV[vV] && (nV[vV] = Math.abs(1 / xV[vV]), QV[vV] = (yV[vV] + (pV[vV] > 0 ? 1 : 0) - eV[vV]) / xV[vV]);
      let wV = 0,
        ZV = Math.abs(xV[0]) > Math.abs(xV[1]) ? 0 : 1;
      for (Math.abs(xV[2]) > Math.abs(xV[ZV]) && (ZV = 2); wV <= JV;) {
        if (VV(yV[0], yV[1], yV[2])) return YV[0] = yV[0], YV[1] = yV[1], YV[2] = yV[2], UV[0] = 0, UV[1] = 0, UV[2] = 0, UV[ZV] = -pV[ZV], !0;
        ZV = QV[0] < QV[1] ? 0 : 1, QV[2] < QV[ZV] && (ZV = 2), wV = QV[ZV], yV[ZV] += pV[ZV], QV[ZV] += nV[ZV]
      }
      return !1
    }
  },
  40883: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(2014);

    function YV(VV, eV, xV) {
      return (0, JV.o)(VV, eV) < xV
    }
  },
  9338: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(1283);

    function YV(VV, eV) {
      var xV, YV;
      try {
        const xV = (0, JV.d)();
        if ("function" === typeof xV) {
          const JV = new xV(VV, eV);
          if (JV.type === VV) return JV
        }
      } catch {}
      const UV = document.createEvent("Event");
      return UV.initEvent(VV, null !== (xV = null === eV || void 0 === eV ? void 0 : eV.bubbles) && void 0 !== xV && xV, null !== (YV = null === eV || void 0 === eV ? void 0 : eV.cancelable) && void 0 !== YV && YV), UV
    }
  },
  37620: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      g: () => wV,
      k: () => rV,
      m: () => ZV
    });
    var JV = xV(375),
      YV = xV(698),
      UV = xV(705),
      yV = xV(40);
    const pV = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QV = "playSessionGameNameWithVariation",
      nV = "wasMatchmakePlayer";

    function wV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      (0, UV.h)(VV, pV)
    }

    function ZV() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).setItem(nV, !0)
    }

    function vV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      return (0, UV.e)(VV, pV)
    }

    function rV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.q;
      const xV = (0, UV.e)(eV, pV),
        wV = function(VV) {
          const eV = VV.getItem(QV);
          return "string" !== typeof eV ? null : eV
        }(eV),
        ZV = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).getItem(nV)
        }(eV);
      let vV;
      return vV = null !== xV && null !== wV && (0, UV.f)(eV, pV) && function(VV, eV, xV) {
          const YV = (0, JV.Pb)(VV),
            UV = (0, JV.Pb)(eV),
            yV = (0, JV.Lb)(VV),
            pV = (0, JV.Lb)(eV);
          return !(YV !== UV || !xV) || YV === UV && yV === pV
        }(wV, VV, ZV) ? xV : (0, YV.c)(), (0, UV.j)(eV, pV, vV), eV.setItem(QV, VV),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).removeItem(nV)
        }(eV), vV
    }
  },
  40209: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV
    });
    var JV = xV(1252),
      YV = xV(1397),
      UV = xV(27),
      yV = xV(1382),
      pV = xV(1391),
      QV = xV(1612),
      nV = xV(37620);

    function wV(VV) {
      let {
        ae: eV,
        oe: xV
      } = VV;
      const wV = null !== eV && void 0 !== eV ? eV : (0, pV.e)().gameNameWithVariation;
      (0, JV.H)(wV) && ((0, nV.m)(), (0, yV.db)((() => {
        console.log("Received matchmaking order from game server to game", eV), (0, UV.h)("inGameReplay"), (0, QV.navigatePreserveSearch)((0, YV.c)(wV, null !== xV && void 0 !== xV ? xV : void 0))
      }), "video_start"))
    }
  },
  40414: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(32),
      YV = xV(2116);

    function UV(VV) {
      var eV, xV;
      const UV = (0, YV.l)(null !== (eV = null === (xV = YV.t.toggleFreeCam) || void 0 === xV ? void 0 : xV[0]) && void 0 !== eV ? eV : null);
      JV.h.QZ("showBottomMessage", {
        message: `Free Camera ${VV?"Enabled":"Disabled"}${UV?` - Press ${UV} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40201: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => QV,
      k: () => nV,
      m: () => ZV
    });
    var JV = xV(2051),
      YV = xV(32),
      UV = xV(1439),
      yV = xV(1290);
    const pV = new Map;

    function QV(VV, eV) {
      YV.h.QZ("newUiRequest", {
        id: VV,
        clientParameters: eV
      }, !0)
    }

    function nV(VV) {
      YV.h.QZ("removeUiRequest", VV, !0);
      const eV = pV.get(VV);
      eV && (eV.tearDownNotification(), pV.delete(VV))
    }

    function wV() {
      YV.h.QZ("clearUiRequests");
      for (const VV of pV.values()) VV.tearDownNotification();
      pV.clear()
    }

    function ZV(VV, eV, xV, YV) {
      const QV = "string" === typeof eV ? {
          translationKey: eV
        } : eV,
        nV = UV.NotificationProvider.showPromptPopup({
          title: QV.translationKey,
          textOpts: {
            title: (0, yV.j)(QV.params, JV.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: xV,
          unlockPointerKey: "uiRequestPopup"
        });
      pV.set(VV, nV), nV.getResult().then((eV => {
        pV.delete(VV), "notificationTornDown" !== eV && YV(eV)
      }))
    }
  },
  40908: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => ZV,
      f: () => vV
    });
    var JV = xV(206),
      YV = xV(40912);
    const UV = 20;

    function yV(VV) {
      return VV.map(Math.floor).join(" ")
    }

    function pV(VV) {
      return null === VV.amount || 1 === VV.amount ? VV.name : `${VV.amount} ${VV.name}`
    }
    var QV = xV(40916),
      nV = xV(2080),
      wV = xV(1391);

    function ZV(VV, eV) {
      if (!VV) return QV.e;
      const xV = VV.playerFeet();
      if (!xV) return "The player isn't in the world yet, so no blocks can be seen.";
      const UV = JV.f.PZ,
        yV = (0, YV.g)(null !== eV && void 0 !== eV ? eV : xV, UV),
        pV = VV.chunkBlocks(yV);
      return pV ? (0, YV.d)(yV, UV, ((eV, xV, JV) => {
        const YV = pV(eV, xV, JV);
        return 0 === YV ? null : VV.blockName(YV).split("|")[0]
      }), xV) : `The chunk from ${yV.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${xV.map(Math.floor).join(" ")}.`
    }

    function vV(VV) {
      var eV, xV, JV;
      if (!VV) return QV.f;
      const YV = VV.playerFeet();
      if (!YV) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: ZV,
        heldSlot: vV
      } = VV.inventory();
      return function(VV) {
        const eV = [];
        null !== VV.game && eV.push(`Game: ${VV.game}.`);
        const xV = null === VV.health ? "" : `, health ${Math.round(VV.health)}${null===VV.maxHealth?"":` of ${Math.round(VV.maxHealth)}`}`;
        eV.push(`The player (the creator) stands at ${yV(VV.position)}${xV}, ${VV.creative?"in":"not in"} creative mode.`);
        const JV = VV.slots[VV.heldSlot];
        eV.push(JV ? `Holding (slot ${VV.heldSlot}): ${pV(JV)}.` : `Holding nothing (slot ${VV.heldSlot} is empty).`);
        const YV = VV.slots.flatMap(((VV, eV) => VV ? [`slot ${eV}: ${pV(VV)}`] : []));
        eV.push(YV.length > 0 ? `Inventory: ${YV.join(", ")}.` : "Inventory: empty.");
        const QV = eV => Math.hypot(eV.position[0] - VV.position[0], eV.position[1] - VV.position[1], eV.position[2] - VV.position[2]),
          nV = [...VV.nearby].sort(((VV, eV) => QV(VV) - QV(eV)));
        if (0 === nV.length) eV.push("No other players or mobs are near enough to see.");
        else {
          eV.push("Near them, nearest first:");
          for (const VV of nV.slice(0, UV)) {
            const xV = "player" === VV.kind ? `player "${VV.name||"?"}"` : VV.name && VV.name !== VV.kind ? `${VV.kind} "${VV.name}"` : VV.kind,
              JV = Math.round(QV(VV));
            eV.push(`- ${xV} at ${yV(VV.position)}, ${JV} block${1===JV?"":"s"} away`)
          }
          nV.length > UV && eV.push(`- and ${nV.length-UV} more further away`)
        }
        return VV.droppedItems > 0 && eV.push(`${VV.droppedItems} dropped item${1===VV.droppedItems?" is":"s are"} on the ground nearby.`), eV.join("\n")
      }({
        game: null !== (eV = (0, wV.e)().gameNameWithVariation) && void 0 !== eV ? eV : null,
        position: YV,
        health: null !== (xV = nV.c.get("_health")) && void 0 !== xV ? xV : null,
        maxHealth: null !== (JV = nV.c.get("_totalMaxHealth")) && void 0 !== JV ? JV : null,
        creative: !0 === nV.c.get("creative"),
        heldSlot: vV,
        slots: ZV,
        nearby: VV.nearby(),
        droppedItems: VV.droppedItems()
      })
    }
  },
  42171: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => SV,
      C: () => CV,
      D: () => GV,
      F: () => iV,
      H: () => zV,
      K: () => mV,
      N: () => fV,
      O: () => RV,
      d: () => KV,
      e: () => oV,
      h: () => XV,
      i: () => HV,
      l: () => MV,
      n: () => NV,
      p: () => aV,
      s: () => WV,
      v: () => DV,
      x: () => gV
    });
    var JV = xV(1473),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(2660),
      pV = xV(5319),
      QV = xV(5281);
    let nV, wV = !1,
      ZV = !1,
      vV = !1,
      rV = !1;
    const kV = 1300,
      bV = 3e3;
    let EV = 0,
      BV = !1,
      jV = !1,
      qV = 0;
    const tV = 2;
    let FV = !1,
      TV = !1;
    const PV = new Set,
      AV = new Set;

    function NV() {
      return wV
    }

    function XV() {
      return jV
    }

    function MV() {
      return TV
    }

    function zV() {
      return (0, UV.r)() && !TV
    }

    function GV(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (VV !== TV) {
        TV = VV;
        for (const VV of [...AV]) VV(TV);
        eV && fV()
      }
    }

    function WV(VV) {
      return AV.add(VV), () => {
        AV.delete(VV)
      }
    }

    function RV() {
      (0, pV.h)(yV.y.Menu, (0, UV.r)() ? 0 : yV.y.Menu)
    }

    function gV() {
      jV = !1, qV = 0, RV(), fV()
    }

    function DV(VV) {
      return PV.add(VV), () => {
        PV.delete(VV)
      }
    }

    function iV(VV) {
      ZV = !1, VV !== wV && (wV = VV, rV = !1, clearTimeout(nV), vV = !wV && FV, wV ? (BV = !1, jV = !1, qV = 0) : zV() && !FV && (jV = !0), FV = !1, wV && !zV() && sV(), IV(), vV && fV())
    }

    function CV(VV) {
      VV !== BV && (BV = VV, VV || fV())
    }

    function aV() {
      ZV = !1, rV || !0 !== lV() || (rV = !0, clearTimeout(nV), nV = setTimeout(cV, kV))
    }

    function oV() {
      return (!ZV || performance.now() - EV > bV) && (ZV = (0, QV.G)().lockPointer(), EV = performance.now()), ZV
    }

    function cV() {
      hV() && LV() && oV()
    }

    function hV() {
      return zV() && !wV && !BV && !(0, JV.m)()
    }

    function lV() {
      var VV;
      return "undefined" === typeof navigator || null === (VV = navigator.userActivation) || void 0 === VV ? void 0 : VV.isActive
    }

    function LV() {
      return vV && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== lV()
    }

    function fV() {
      zV() ? hV() && !jV && LV() && oV() : wV && !FV && sV()
    }

    function mV() {
      jV ? navigator.vendor.startsWith("Apple") ? uV() : qV = tV : fV()
    }

    function KV() {
      qV > 0 && 0 === --qV && uV()
    }

    function HV() {
      qV = 0
    }

    function uV() {
      hV() && !0 === lV() && oV()
    }

    function sV() {
      FV = !0, (0, QV.G)().unlockPointer()
    }

    function SV() {
      ZV = !1, vV = !1, rV = !1, clearTimeout(nV), BV = !1, jV = !1, qV = 0, FV = !1;
      const VV = wV;
      wV = !1, VV && IV()
    }

    function IV() {
      for (const VV of [...PV]) VV(wV);
      YV.h.QZ("pointerLockUpdate", wV)
    }
  },
  41955: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV,
      f: () => pV,
      h: () => ZV,
      l: () => nV,
      o: () => yV,
      q: () => wV,
      s: () => QV
    });
    let JV = null,
      YV = null,
      UV = null;

    function yV(VV) {
      JV = VV
    }

    function pV() {
      return JV
    }

    function QV(VV) {
      YV = VV
    }

    function nV() {
      return YV
    }

    function wV(VV) {
      UV = VV
    }

    function ZV() {
      return UV
    }

    function vV() {
      var VV, eV;
      return !0 === (null === (VV = YV) || void 0 === VV || null === (eV = VV.currentViewer) || void 0 === eV ? void 0 : eV.inPlayback)
    }
  },
  42308: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      attachPlayGameSources: () => PJ,
      playGameSources: () => TJ
    });
    var JV = xV(2051),
      YV = xV(41955),
      UV = xV(5281),
      yV = xV(41861),
      pV = xV(42297),
      QV = xV(40885),
      nV = xV(32),
      wV = xV(5301),
      ZV = xV(5297),
      vV = xV(41893),
      rV = xV(41932),
      kV = xV(42314),
      bV = xV(41909);
    (0, bV.l)(wV.mc.Chat, (VV => {
      if (VV.payloadKind !== ZV.sc.Msgpack) return;
      const eV = function(VV) {
        if (null === VV || "object" !== typeof VV || !("content" in VV)) return null;
        const {
          chatMsgId: eV,
          worldCodeLineId: xV,
          content: JV,
          chatterEId: YV,
          chatterObjectsToReplay: UV
        } = VV;
        return {
          serverChatMsgId: null !== eV && void 0 !== eV ? eV : void 0,
          worldCodeLineId: null !== xV && void 0 !== xV ? xV : void 0,
          content: JV,
          chatterEId: void 0 === YV || null === YV ? void 0 : String(YV),
          chatterObjectsToReplay: UV
        }
      }((0, vV.e)(VV.payload));
      null !== eV && nV.h.QZ("chat", eV, !0)
    }));
    const EV = {
        chatReceived: (0, QV.k)((function(VV) {
          var eV, xV, JV;
          return {
            id: VV,
            name: null !== (eV = kV.e.getName(VV)) && void 0 !== eV ? eV : null,
            local: (0, rV.f)() === VV,
            profileEffect: null !== (xV = null === (JV = (0, kV.f)(VV)) || void 0 === JV ? void 0 : JV.profileEffect) && void 0 !== xV ? xV : null
          }
        }))
      },
      BV = {
        sendChatMessage(VV) {
          var eV;
          let {
            yZ: xV,
            channelName: JV
          } = VV;
          null === (eV = (0, yV.k)()) || void 0 === eV || eV.clientApi.sendChat(xV, JV)
        }
      };
    var jV = xV(206),
      qV = xV(2080),
      tV = xV(41852),
      FV = xV(40883);
    const TV = [0, 0, 0],
      PV = {
        codeBlockClickable(VV) {
          var eV;
          const xV = (0, yV.k)();
          if (null === xV || void 0 === xV || !xV.isSessionLive) return !1;
          const JV = xV.api;
          if (0 !== (tV.s.playerFlags(JV.apiView, 0) & tV.Ld.Crouching)) return !1;
          const YV = JV.queries.directorEntity(JV.localId) >= tV.ob.BYTES ? JV.memoryData(JV.scratch(), tV.ob.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === YV) return !1;
          for (let UV = 0; UV < 3; UV++) TV[UV] = tV.ob.feet(YV, 0, UV);
          return TV[1] += tV.ob.eyeHeight(YV, 0), (0, FV.b)(TV, VV, null !== (eV = qV.c.get("blockReach")) && void 0 !== eV ? eV : jV.f.ZB)
        }
      },
      AV = {
        clickCodeBlock(VV) {
          var eV;
          null === (eV = (0, yV.k)()) || void 0 === eV || eV.clickCodeBlock(VV)
        }
      };
    var NV = xV(41872),
      XV = xV(42322),
      MV = xV(1099),
      zV = xV(40226),
      GV = xV(5273),
      WV = xV(41880),
      RV = xV(41867),
      gV = xV(41885);

    function DV(VV) {
      if (null === VV) return null;
      const eV = [];
      for (const xV of VV) {
        const VV = Object.keys(xV)[0];
        if ("Kx" === VV) {
          const {
            str: VV,
            style: JV,
            clickableUrl: YV
          } = xV.Kx, UV = Object.keys(VV)[0], yV = VV[UV];
          "string" !== UV && "styledEntityName" !== UV && "styledTranslatedText" !== UV || eV.push({
            str: yV,
            style: JV,
            clickableUrl: YV
          })
        } else eV.push(xV[VV])
      }
      return eV
    }
    const iV = {
      screenPos(VV) {
        var eV, xV;
        return null !== (eV = null === (xV = (0, yV.k)()) || void 0 === xV ? void 0 : xV.renderFrame.projectWorldPosToScreenPos(VV)) && void 0 !== eV ? eV : {
          x: 0,
          y: 0
        }
      }
    };
    let CV = !1;

    function aV() {
      CV || (CV = !0, (0, bV.l)(wV.mc.ProgressBarUpdate, (VV => {
        const eV = (0, gV.j)(VV);
        (0, gV.e)(eV) && nV.h.QZ("progressBarUpdate", eV, !0)
      })), (0, bV.l)(WV.w, (VV => {
        const eV = (0, gV.i)(WV.w, VV);
        eV && nV.h.QZ("middleScreenBarInitiate", {
          duration: eV.qJ,
          tJ: eV.tJ,
          horizBarRemOffset: eV.FJ
        }, !0)
      })), (0, bV.l)(wV.mc.RemoveMiddleScreenBar, (() => {
        nV.h.QZ("middleScreenBarRemove")
      })), (0, bV.l)(WV.Z, (VV => {
        const eV = (0, gV.i)(WV.Z, VV);
        if (eV) {
          var xV;
          const VV = eV.PJ ? null === (xV = (0, yV.k)()) || void 0 === xV ? void 0 : xV.renderFrame.projectDirectionToScreenPos(eV.PJ) : void 0;
          nV.h.QZ("sendHitmarker", {
            TJ: eV.TJ,
            screenPos: VV
          }, !0)
        }
      })), (0, bV.l)(WV.db, (VV => {
        const eV = (0, gV.i)(WV.db, VV);
        if (eV) {
          const {
            id: VV,
            position: xV,
            style: JV,
            AJ: YV,
            XJ: UV
          } = eV;
          nV.h.QZ("setDirectionArrow", {
            id: VV,
            position: xV,
            style: JV,
            text: DV(YV),
            XJ: UV
          }, !0)
        }
      })), (0, bV.l)(WV.d, (VV => {
        const eV = (0, gV.i)(WV.d, VV);
        eV && nV.h.QZ("clearDirectionArrow", {
          id: eV.id
        }, !0)
      })), (0, bV.l)(WV.s, (VV => {
        const eV = (0, gV.i)(WV.s, VV);
        eV && nV.h.QZ("flyingMiddleMessage", {
          content: DV(eV.mx),
          ux: eV.ux,
          Sx: eV.Sx
        }, !0)
      })), (0, bV.l)(wV.mc.WorldVariation, (VV => {
        const eV = (0, gV.j)(VV);
        if ("string" === typeof eV) {
          const VV = eV === MV.g ? null : {
            message: `Currently loaded as variation: ${eV}`,
            type: "Warning"
          };
          nV.h.QZ("showPermanentBottomMessage", VV, !0)
        }
      })), (0, bV.l)(WV.J, (VV => {
        const eV = (0, gV.i)(WV.J, VV);
        eV && function(VV, eV) {
          const {
            type: xV,
            params: JV
          } = (0, zV.g)(eV), YV = {
            ...JV
          };
          for (const UV of zV.e) YV[UV] && (YV[UV] = DV(YV[UV]));
          GV.d.queueQTE(VV, xV, YV).getResult().then((eV => {
            var xV;
            "boolean" === typeof eV && (null === (xV = (0, yV.k)()) || void 0 === xV || xV.send(RV.d.QteResponse, {
              qteId: VV,
              qteResponse: eV
            }))
          }))
        }(eV.id, eV.iJ)
      })), (0, bV.l)(WV.T, (VV => {
        const eV = (0, gV.i)(WV.T, VV);
        "number" === typeof eV && GV.d.cancelQTE(eV)
      })), (0, bV.f)((() => {
        GV.d.reset()
      })), (0, bV.h)((() => {
        GV.d.reset()
      })), (0, bV.l)(wV.mc.EditItemCraftingRecipes, (VV => {
        const eV = (0, gV.j)(VV);
        (0, gV.e)(eV) && nV.h.QZ("craftingRecipesEdited", {
          itemName: eV.craftingRecipeItemName,
          recipesForItem: eV.recipesForItem
        })
      })), (0, bV.l)(WV.Q, (VV => {
        const eV = (0, gV.i)(WV.Q, VV);
        eV && nV.h.QZ("craftingRecipesEdited", {
          itemName: eV.bY,
          recipesForItem: []
        })
      })))
    }
    var oV = xV(27);
    const cV = [{
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

    function hV(VV) {
      return tV.s.playerFlags(VV.api.apiView, 0)
    }
    const lV = {
        freeCamera: (0, rV.d)((VV => () => {
          const eV = VV.isSessionLive && 0 !== (hV(VV) & tV.Ld.FreeCamMoves),
            xV = VV.freeCameraAllowed() && null === oV.b.get("scriptedCameraFacing");
          return cV[(xV ? 2 : 0) + (eV ? 1 : 0)]
        }), cV[0], (VV => (0, UV.s)(VV)))
      },
      LV = {
        setFreeCameraMovesFly: VV => {
          var eV;
          null === (eV = (0, yV.k)()) || void 0 === eV || eV.setFreeCameraMovesFly(VV)
        }
      },
      fV = {
        freeCameraPos: () => {
          const VV = (0, yV.k)();
          return null !== VV && void 0 !== VV && VV.isSessionLive && VV.renderFrame.hasView && 0 !== (hV(VV) & tV.Ld.FreeCam) ? VV.renderFrame.cameraPosition : null
        }
      };
    var mV = xV(40414);
    let KV = !1,
      HV = !1;

    function uV() {
      const VV = (0, yV.k)();
      if (null === VV || void 0 === VV || !VV.isSessionLive) return void(KV = !1);
      const eV = 0 !== (tV.s.playerFlags(VV.api.apiView, 0) & tV.Ld.FreeCam);
      eV !== KV && (KV = eV, (0, mV.c)(eV))
    }
    var sV = xV(375),
      SV = xV(38212),
      IV = xV(2094);
    var dV = xV(42326),
      OV = xV(41923);
    const Ve = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let ee = "off";

    function xe(VV) {
      var eV;
      return null === VV ? null : {
        label: null !== (eV = (0, dV.d)(VV, "interactionPrompt")) && void 0 !== eV ? eV : null
      }
    }
    const Je = new Map([
      [tV.uc.Open, {
        label: QV.e.open
      }],
      [tV.uc.Close, {
        label: QV.e.close
      }],
      [tV.uc.Milk, {
        label: QV.e.milk
      }],
      [tV.uc.Shear, {
        label: QV.e.shear
      }],
      [tV.uc.Tame, {
        label: QV.e.tame
      }],
      [tV.uc.Feed, {
        label: QV.e.feed
      }],
      [tV.uc.Ride, {
        label: QV.e.ride
      }]
    ]);
    class Ye {
      constructor() {
        this.target = Ve, this.vp = tV.Yc, this.optionName = null, this.pickaxe = new QV.c
      }
      read(VV) {
        var eV;
        const xV = tV.s.targetBlockId(VV.api.apiView, 0);
        xV !== this.vp && (this.vp = xV, this.optionName = xV === tV.Yc ? null : `${VV.tables.getMetaInfo(xV).rootName}CrosshairText`);
        const JV = null === this.optionName ? null : null !== (eV = VV.tables.getClientOption(this.optionName)) && void 0 !== eV ? eV : null;
        this.pickaxe.update(function(VV, eV) {
          var xV, JV, YV;
          if (0 === (tV.s.playerFlags(VV.api.apiView, 0) & tV.Ld.Breaking) || eV === tV.Yc || 0 === eV) return null;
          const {
            tables: UV
          } = VV;
          if (!0 === UV.getClientOption("creative")) return null;
          const yV = UV.nameOfId(eV),
            pV = null === (xV = VV.items.hn()) || void 0 === xV ? void 0 : xV.name,
            QV = null !== (JV = UV.getItemStat(yV, "harvestLevel")) && void 0 !== JV ? JV : 0;
          return (0, sV.Ec)({
            blockHarvestType: UV.getDefaultItemStat(yV, "harvestType"),
            blockHarvestLevel: UV.getDefaultItemStat(yV, "harvestLevel"),
            harvestLevel: QV,
            heldToolType: void 0 === pV ? void 0 : UV.getDefaultItemStat(pV, "harvests"),
            heldToolLevel: void 0 === pV ? void 0 : UV.getDefaultItemStat(pV, "level")
          }) && null !== (YV = SV.l[QV]) && void 0 !== YV ? YV : null
        }(VV, xV)), VV.watchPromptPick(ee);
        const YV = "touch" === ee ? function(VV) {
          var eV;
          const xV = VV.interactLabel;
          return xV === tV.uc.Entity ? xe(VV.promptEntity) : xV === tV.uc.TameWith ? {
            label: (0, QV.w)(VV.tables.nameOfId(VV.interactIcon))
          } : null !== (eV = Je.get(xV)) && void 0 !== eV ? eV : null
        }(VV) : xe(VV.promptEntity);
        return this.target = (0, IV.m)(this.target, {
          interactPrompt: YV,
          blockText: JV,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Ue = null;
    const ye = {
      current: () => {
        var VV, eV;
        return null !== (VV = null === (eV = Ue) || void 0 === eV ? void 0 : eV.target) && void 0 !== VV ? VV : Ve
      },
      watch: VV => {
        const eV = new Ye;
        Ue = eV;
        const xV = (0, rV.i)((xV => {
          let JV = eV.read(xV);
          VV(JV);
          const YV = (0, UV.u)((() => {
            const YV = eV.read(xV);
            YV !== JV && (JV = YV, VV(YV))
          }));
          return () => {
            YV(), xV.watchPromptPick("off")
          }
        }));
        return () => {
          xV(), Ue === eV && (Ue = null)
        }
      }
    };
    let pe = 0,
      Qe = 0;
    const ne = {
        health: QV.q,
        aura: QV.i,
        hotbar: OV.b.states.hotbar,
        heldItemAim: OV.b.states.heldItemAim,
        crouching: (0, rV.d)((VV => function(VV) {
          const eV = () => 0 !== (tV.s.playerFlags(VV.apiView, 0) & tV.Ld.Crouching);
          return {
            current: eV,
            watch(VV) {
              let xV = eV();
              return (0, UV.s)((() => {
                const JV = eV();
                JV !== xV && (xV = JV, VV(JV))
              }))
            }
          }
        }(VV.api).current), !1, (VV => (0, UV.s)(VV))),
        flight: (0, rV.d)((VV => () => function(VV) {
          const eV = tV.s.playerFlags(VV.apiView, 0);
          return (0, QV.m)(0 !== (eV & tV.Ld.CanFly), 0 !== (eV & tV.Ld.Flying))
        }(VV.api)), (0, QV.m)(!1, !1), (VV => (0, UV.s)(VV))),
        gliderBoostFuel: (0, rV.d)((VV => () => tV.s.gliderBoostFuel(VV.api.apiView, 0)), 0, (VV => (0, UV.s)(VV))),
        crosshairTarget: ye
      },
      we = {
        hotbarSlotRequested: OV.b.events.hotbarSlotRequested,
        hotbarScrolled: OV.b.events.hotbarScrolled,
        numberKeyPressed: OV.b.events.numberKeyPressed,
        shotDamageToShow: (0, QV.u)((VV => !0 === (0, dV.d)(VV, "showDamageAmounts")))
      },
      Ze = {
        selectHotbarSlot: OV.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: VV => {
          ee = VV
        }
      },
      ve = {
        momentumFrac: function() {
          var VV, eV, xV;
          const JV = (0, yV.k)(),
            YV = performance.now(),
            UV = null === JV || void 0 === JV || null === (VV = JV.items.hn()) || void 0 === VV || null === (eV = VV.attributes) || void 0 === eV || null === (xV = eV.customAttributes) || void 0 === xV ? void 0 : xV.enchantments;
          return pe = null !== JV && null !== UV && void 0 !== UV && UV.Momentum ? 0 !== (tV.s.playerFlags(JV.api.apiView, 0) & tV.Ld.Breaking) ? Math.max(0, tV.s.momentumFrac(JV.api.apiView, 0)) : Math.max(0, pe - (YV - Qe) / 1500) : 0, Qe = YV, pe
        }
      };
    var re = xV(41856);
    const ke = {
      lobbyManage(VV) {
        var eV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.LobbyManage, VV)
      }
    };
    var be = xV(1269),
      Ee = xV(35093),
      Be = xV(9413),
      je = xV(1725),
      qe = xV(2660),
      te = xV(5307);
    let Fe = !1;

    function Te(VV) {
      Fe = VV
    }

    function Pe() {
      "inGame" !== oV.b.get("gameState") || (0, je.q)() || nV.h.QZ("ctrlCrouchWithoutFullscreen")
    }
    let Ae = !1;
    const Ne = {
        OpenEmoteWheel: () => {
          Te(!0), Ae = !0, queueMicrotask((() => {
            Ae && (Ae = !1, nV.h.QZ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          nV.h.QZ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Ee.e)() || nV.h.QZ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Ee.e)() || nV.h.QZ("XKeyPressed")
        },
        CtrlCrouch: Pe,
        "primary-fire": () => {
          nV.h.QZ("mouseState", {
            My: be.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          nV.h.QZ("mouseState", {
            My: be.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          nV.h.QZ("mouseState", {
            My: be.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      Xe = {
        OpenEmoteWheel: () => {
          Te(!1), Ae ? (Ae = !1, (0, Be.d)() || nV.h.QZ("requestEmoteWheelHoldOpen")) : nV.h.QZ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Pe,
        "primary-fire": () => {
          nV.h.QZ("mouseState", {
            My: be.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          nV.h.QZ("mouseState", {
            My: be.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          nV.h.QZ("mouseState", {
            My: be.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Me = !1;

    function ze() {
      Me || (Me = !0, (0, te.e)((VV => {
        if ((0, YV.b)()) return;
        const eV = (0, te.d)(VV) ? "primary-fire" : VV.action;
        var xV;
        if (VV.down) {
          if (0 === (VV.flags & qe.c.Synthetic)) {
            var JV;
            null === (JV = Ne[eV]) || void 0 === JV || JV.call(Ne)
          }
        } else null === (xV = Xe[eV]) || void 0 === xV || xV.call(Xe)
      })))
    }
    var Ge = xV(364),
      We = xV(99),
      Re = xV(40),
      ge = xV(42171),
      De = xV(1391),
      ie = xV(2681);
    let Ce = !1;
    const ae = {
      sendCodeCollab(VV) {
        var eV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.CodeCollab, (0, RV.o)(VV), (0, ie.d)(VV))
      }
    };
    var oe = xV(40310),
      ce = xV(9338);
    let he = null,
      le = !1,
      Le = null;

    function fe() {
      return "inGame" === oV.b.get("gameState") && !(0, Ee.e)()
    }
    const me = {
        OpenInventory: VV => {
          (0, je.w)(VV, "inventory", (0, re.j)())
        },
        OpenShop: VV => {
          he && fe() && (0, je.t)(VV, Ge.q.SHOP, !he.shopIsEmpty(qV.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: VV => {
          fe() && (0, je.t)(VV, Ge.q.LOBBY_LEADERBOARD, (0, oe.c)({
            lobbyLeaderboardInfo: qV.c.get("lobbyLeaderboardInfo"),
            lobbyManage: qV.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: VV => {
          var eV;
          const xV = null === (eV = he) || void 0 === eV ? void 0 : eV.getClientGameMapKey();
          xV ? (0, je.x)(VV, !0, xV) : (0, je.w)(VV, "retentionFeatures", !(!qV.c.get("_tasks") && !qV.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: VV => {
          (0, je.w)(VV, "inviteLink", We.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: VV => {
          fe() && function(VV) {
            const eV = (0, yV.k)(),
              xV = null !== eV && void 0 !== eV && eV.isSessionLive ? eV.api : null,
              JV = xV ? xV.YF(xV.localId) : null;
            (0, je.x)(VV, null !== JV && (0, ie.c)((0, De.e)()), (() => {
              (0, ie.e)(JV)
            }))
          }(VV)
        },
        HideUi: () => {
          nV.h.QZ("showUi", !1)
        }
      },
      Ke = {
        HideUi: () => {
          nV.h.QZ("showUi", !0)
        }
      };

    function He() {
      le || (le = !0, xV.e(173).then((() => xV(63628))).then((VV => {
        he = VV
      }), (VV => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", VV)
      })), (0, ge.v)((VV => {
        VV || !(0, ge.h)() || (0, We.isMobile)() || !Re.m.getItem("disableFullscreen") || (0, je.n)() || oV.b.set({
          openEverythingMenuName: Ge.q.SETTINGS
        })
      })), (0, te.e)((VV => {
        let {
          action: eV,
          down: xV,
          press: JV
        } = VV;
        var UV, yV;
        (0, YV.b)() || (xV ? null === (UV = me[eV]) || void 0 === UV || UV.call(me, function(VV) {
          var eV;
          if (0 === VV || (null === (eV = Le) || void 0 === eV ? void 0 : eV.press) !== VV) {
            const eV = {
              press: VV,
              event: (0, ce.c)("inputAction")
            };
            Le = eV, queueMicrotask((() => {
              Le === eV && (Le = null)
            }))
          }
          return Le.event
        }(JV)) : null === (yV = Ke[eV]) || void 0 === yV || yV.call(Ke))
      })))
    }
    var ue = xV(40217),
      se = xV(40209),
      Se = xV(40201);
    const Ie = {
      completeTask(VV) {
        var eV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.CompleteTask, (0, RV.p)(VV))
      },
      setServerCookie(VV) {
        var eV;
        let {
          key: xV,
          value: JV
        } = VV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.GeneralCookieSet, (0, RV.v)({
          jy: xV,
          qy: JV
        }))
      },
      answerUiRequest(VV) {
        var eV;
        let {
          id: xV,
          Jw: JV
        } = VV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.UiRequestResp, (0, RV.U)({
          Ly: xV,
          my: JV,
          Ky: 5
        }))
      },
      chooseRewardedAd(VV) {
        var eV;
        let {
          id: xV,
          Jw: JV
        } = VV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.UiRequestResponded, (0, RV.Q)({
          id: xV,
          Jw: JV
        }))
      },
      requestLeaderboard(VV) {
        var eV;
        let {
          category: xV,
          timeframe: JV,
          seeTop: YV
        } = VV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.LeaderboardRequest, {
          category: xV,
          timeframe: JV,
          seeTop: YV
        })
      }
    };
    let de = !1;
    const Oe = jV.f.QB / 2,
      Vx = [Oe, -Oe, -Oe, -Oe, Oe, Oe, -Oe, Oe],
      ex = [0, 0, 0];

    function xx(VV, eV, xV) {
      for (let JV = 0; JV < VV.length; JV += 2)
        if (VV[JV] === eV && VV[JV + 1] === xV) return !0;
      return !1
    }
    const Jx = {
      blocksStandingOn: function() {
        const VV = (0, yV.k)();
        if (null === VV) return [];
        const {
          api: eV,
          chunks: xV,
          tables: JV
        } = VV;
        if (!eV.readPosition(eV.localId, ex)) return [];
        const [YV, UV, pV] = ex, QV = Math.ceil(UV) - 1, nV = [], wV = [];
        for (let yV = 0; yV < Vx.length; yV += 2) {
          const VV = YV + Vx[yV],
            eV = pV + Vx[yV + 1];
          if (Number.isInteger(VV) || Number.isInteger(eV)) continue;
          const UV = Math.floor(VV),
            ZV = Math.floor(eV);
          if (xx(wV, UV, ZV)) continue;
          const vV = xV.vp(UV, QV, ZV);
          JV.isSolidBlockId(vV) && (wV.push(UV, ZV), nV.push(JV.nameOfId(vV)))
        }
        return nV
      },
      dropAhead: function() {
        const VV = (0, yV.k)();
        return null !== VV && 0 !== (tV.s.playerFlags(VV.api.apiView, 0) & tV.Ld.DropAhead)
      }
    };
    var Yx = xV(38127),
      Ux = xV(40285),
      yx = xV(1439),
      px = xV(41936);
    const Qx = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      nx = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function wx() {
      const VV = new Set;
      return {
        add: eV => (VV.add(eV), () => {
          VV.delete(eV)
        }),
        fire() {
          for (const eV of VV) eV()
        }
      }
    }
    const Zx = Object.freeze([]);

    function vx(VV, eV) {
      let xV, {
        rereads: JV,
        followLocalId: YV
      } = eV;
      const yV = () => (xV = (0, IV.m)(xV, VV()), xV);
      return {
        current: yV,
        watch(VV) {
          const eV = (0, kV.d)((eV => {
            JV(eV) && VV(yV())
          }));
          if (!YV) return eV;
          let xV = (0, rV.f)();
          const pV = (0, UV.u)((() => {
            const eV = (0, rV.f)();
            eV !== xV && (xV = eV, VV(yV()))
          }));
          return () => {
            eV(), pV()
          }
        }
      }
    }
    const rx = {
        players: vx((function() {
          const VV = kV.e.ids(),
            eV = {};
          for (const UV of VV) {
            var xV, JV, YV;
            eV[UV] = {
              name: null !== (xV = kV.e.getName(UV)) && void 0 !== xV ? xV : null,
              ranks: null !== (JV = kV.e.getSetting(UV, "ranks")) && void 0 !== JV ? JV : Zx,
              cosmetics: null !== (YV = (0, kV.f)(UV)) && void 0 !== YV ? YV : null
            }
          }
          return {
            ids: VV,
            byId: eV,
            localId: (0, rV.f)()
          }
        }), {
          rereads: VV => "roster" !== VV.kind || VV.members || VV.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: vx((function() {
          const VV = {};
          for (const YV of kV.e.ids()) {
            var eV, xV, JV;
            VV[YV] = {
              colour: null !== (eV = kV.e.getSetting(YV, "colorInLobbyLeaderboard")) && void 0 !== eV ? eV : null,
              values: null !== (xV = kV.e.getSetting(YV, "lobbyLeaderboardValues")) && void 0 !== xV ? xV : null,
              tags: null !== (JV = kV.e.getSetting(YV, "lobbyLeaderboardTags")) && void 0 !== JV ? JV : null
            }
          }
          return VV
        }), {
          rereads: function(VV) {
            if ("roster" !== VV.kind) return "reset" === VV.kind;
            const {
              members: eV,
              settings: xV
            } = VV;
            return eV || xV.has("colorInLobbyLeaderboard") || xV.has("lobbyLeaderboardValues") || xV.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      kx = {
        cosmeticsUpdated: {
          watch: VV => (0, kV.d)((eV => {
            if ("cosmetics" !== eV.kind) return;
            const xV = (0, rV.f)();
            VV(eV.updates.map((VV => {
              let {
                JJ: eV,
                YJ: JV,
                UJ: YV
              } = VV;
              return {
                local: eV === xV,
                YJ: JV,
                UJ: YV
              }
            })))
          }))
        }
      };
    var bx = xV(3245),
      Ex = xV(1838),
      Bx = xV(701),
      jx = xV(42217);
    let qx = !1,
      tx = null;
    const Fx = {
      setShopOpen(VV) {
        var eV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.ShopMenuChanged, (0, RV.K)(VV))
      },
      buyShopItem(VV) {
        var eV;
        let {
          categoryKey: xV,
          itemKey: JV,
          userInput: YV
        } = VV;
        null === (eV = (0, yV.k)()) || void 0 === eV || eV.send(RV.d.ItemBought, {
          categoryKey: xV,
          itemKey: JV,
          shopVersion: qV.c.get("_shopVersion"),
          userInput: YV
        })
      }
    };
    let Tx = !1;
    var Px = xV(5319);
    const Ax = qe.y.LookFrozen | qe.y.ClicksSuppressed;

    function Nx(VV, eV) {
      var xV;
      null !== (xV = (0, yV.k)()) && void 0 !== xV && xV.send(VV, eV) || console.warn(`[bloxd-wasm-client] message ${VV} not sent: no live game or the core's command ring is full`)
    }(0, bV.l)(WV.eb, (VV => {
      const eV = (0, gV.i)(WV.eb, VV);
      void 0 !== eV && nV.h.QZ("setDiscordReportKey", eV)
    }));
    const Xx = {
      ignorePlayer(VV) {
        Nx(RV.d.IgnoreUser, (0, RV.y)({
          Yw: VV
        }))
      },
      reportPlayer(VV) {
        let {
          playerId: eV,
          chatMsgId: xV,
          Fn: JV,
          details: YV
        } = VV;
        Nx(RV.d.UserReport, (0, RV.db)({
          qn: eV,
          tn: xV,
          Fn: JV,
          Tn: YV
        }))
      },
      reportWorldCodeChat(VV) {
        let {
          chatMsgId: eV,
          Fn: xV,
          details: JV
        } = VV;
        Nx(RV.d.UserReport, (0, RV.db)({
          qn: "",
          tn: eV,
          Fn: xV,
          Tn: JV
        }))
      },
      requestDiscordReportKey(VV) {
        Nx(RV.d.ReqDiscordReportKey, (0, RV.G)(VV))
      },
      reportLobbyOrGame(VV) {
        let {
          target: eV,
          Fn: xV,
          details: JV
        } = VV;
        "customGame" === eV ? Nx(RV.d.CustomGameReport, (0, RV.s)({
          Fn: xV,
          Tn: JV
        })) : Nx(RV.d.LobbyReport, (0, RV.A)({
          Fn: xV,
          Tn: JV
        }))
      },
      updateMyCosmetic(VV) {
        Nx(RV.d.UpdateMyCosmetic, (0, RV.$)(VV))
      },
      holdEmoteWheel(VV) {
        !VV || Fe ? (0, Px.h)(Ax, VV ? Ax : 0) : nV.h.QZ("requestEmoteWheelHoldRelease")
      }
    };
    var Mx = xV(42334),
      zx = xV(9820),
      Gx = xV(40902);
    const Wx = [0, 0, 0],
      Rx = [0, 0, 0],
      gx = [0, 0, 0],
      Dx = {
        blockAtViewPoint(VV) {
          let {
            x: eV,
            y: xV
          } = VV;
          const JV = (0, yV.k)();
          if (null === JV || void 0 === JV || !JV.renderFrame.hasView) return null;
          const {
            renderFrame: YV,
            clientApi: UV,
            api: pV
          } = JV;
          let QV = 0;
          return (0, Gx.c)(((VV, eV, xV) => (QV = UV.getBlockId(VV, eV, xV), 0 !== QV)), YV.cameraPosition, (0, Gx.f)((VV => tV.s.viewProj(pV.apiView, 0, VV)), eV, xV, Wx), Gx.b, Rx, gx) ? {
            pos: [Rx[0], Rx[1], Rx[2]],
            normal: [gx[0], gx[1], gx[2]],
            name: (0, zx.g)(QV)
          } : null
        }
      },
      ix = {
        setBlockHighlight(VV) {
          var eV;
          null === (eV = (0, yV.k)()) || void 0 === eV || eV.setBlockHighlight(VV)
        }
      };
    var Cx = xV(2066),
      ax = xV(42203),
      ox = xV(42341),
      cx = xV(4964),
      hx = xV(4943),
      lx = xV(42344),
      Lx = xV(3719),
      fx = xV(3721);
    let mx = null,
      Kx = null;

    function Hx(VV) {
      const eV = VV.startsWith(fx.l),
        [xV, JV = xV, YV = xV] = (eV ? VV.slice(fx.l.length) : VV).split(fx.j);
      return {
        top: xV,
        left: JV,
        right: YV,
        half: eV
      }
    }

    function ux(VV) {
      const eV = null === mx ? void 0 : (0, Lx.d)(VV),
        xV = void 0 === eV ? 0 : mx.codes[eV];
      return 0 === xV ? void 0 : mx.pool[xV - 1]
    }
    var sx = xV(3716),
      Sx = xV(4937),
      Ix = xV(4960),
      dx = xV(42259),
      Ox = xV(42351);
    const VJ = "item:";
    let eJ = null,
      xJ = null,
      JJ = null,
      YJ = null,
      UJ = !1,
      yJ = !1;

    function pJ() {
      return yJ || (yJ = !0, (0, Ix.k)().then((VV => {
        VV && (0, Cx.d)()
      }))), JJ ??= Promise.all([(0, sx.i)(), (Kx ??= xV.e(1).then((() => xV(63642))).then((VV => {
        let {
          BLOCK_FACE_RUNS: eV,
          BLOCK_FACES: xV,
          MAX_FACE_ITEM_ID: JV
        } = VV;
        mx = {
          codes: (0, fx.y)(eV, JV + 1),
          pool: xV.split(fx.p).map(Hx)
        }
      }), (VV => {
        throw Kx = null, VV
      })), Kx), (0, Ox.e)(), xV.e(224).then((() => xV(35319)))]).then((VV => {
        let [, , eV, xV] = VV;
        eV.followBundledTextures(), eJ = eV, xJ = xV, (0, Cx.d)()
      }), (VV => {
        JJ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", VV)
      })), JJ
    }

    function QJ(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = (0, dx.h)()) || void 0 === xV ? void 0 : xV.textureUrl(VV)) && void 0 !== eV ? eV : eJ.itemSpriteUrl(VV)
    }

    function nJ(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = (0, dx.h)()) || void 0 === xV ? void 0 : xV.textureUrl(VV)) && void 0 !== eV ? eV : eJ.blockTextureUrl(VV)
    }

    function wJ(VV) {
      var eV;
      return null !== (eV = (0, sx.e)(VV)) && void 0 !== eV ? eV : VV
    }

    function ZJ(VV, eV) {
      var xV, JV, YV;
      return null !== (xV = null !== (JV = null !== (YV = nJ(VV)) && void 0 !== YV ? YV : null === eV || void 0 === eV ? void 0 : eV.rotated[VV]) && void 0 !== JV ? JV : null === eV || void 0 === eV ? void 0 : eV.animated[VV]) && void 0 !== xV ? xV : eJ.notFoundUrl()
    }

    function vJ(VV) {
      return void 0 !== (0, Lx.d)(VV) ? VV : /^[1-9][0-9]*$/.test(VV) ? (0, Lx.g)(Number(VV)) : void 0
    }

    function rJ(VV) {
      var eV;
      if (VV.startsWith(VJ)) {
        var xV;
        const eV = (0, sx.e)(VV.slice(5));
        return null !== (xV = void 0 === eV ? null : QJ(eV)) && void 0 !== xV ? xV : eJ.notFoundUrl()
      }
      return null !== (eV = eJ.particleUrl(VV)) && void 0 !== eV ? eV : eJ.notFoundUrl()
    }

    function kJ(VV, eV) {
      return "StairsBlock" === VV ? VV : eV ? "SlabBlock" : "CubeBlock"
    }
    const bJ = {
        async blockIcon(VV) {
          var eV;
          let {
            name: JV,
            size: YV,
            lineWidth: UV
          } = VV;
          await pJ();
          const yV = null !== (eV = vJ(JV)) && void 0 !== eV ? eV : JV,
            pV = (0, Ix.e)(yV, YV, UV);
          if (null !== pV) return pV;
          const QV = ux(yV),
            nV = (0, Lx.d)(yV),
            wV = void 0 === nV || null === xJ ? void 0 : xJ.itemTypeNameOf(nV);
          if (null === eJ || void 0 === QV) return "";
          const ZV = [QV.top, QV.left, QV.right].some((VV => null === nJ(VV))),
            vV = ZV ? await (YJ ??= xV.e(231).then((() => xV(35423))).then((VV => (UJ && (UJ = !1, (0, Cx.d)()), {
              rotated: VV.rotatedBlockTextures,
              animated: VV.animatedBlockTextures
            })), (VV => (YJ = null, UJ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", VV), null))), YJ) : null;
          if (ZV && null === vV) return "";
          const rV = {
              top: ZJ(QV.top, vV),
              left: ZJ(QV.left, vV),
              right: ZJ(QV.right, vV),
              itemType: kJ(wV, QV.half)
            },
            kV = (0, dx.g)(),
            bV = 0 === kV ? yV : `${yV}#${kV}`;
          return (await (0, Sx.b)()).drawBlockIconUrl(bV, YV, UV, (() => rV))
        }
      },
      EJ = {
        itemIcon: function(VV) {
          var eV, xV, YV, UV;
          if (null === eJ) return pJ(), JV.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(VV);
          if ((0, hx.i)(VV)) return {
            kind: "icon",
            url: null !== (xV = null !== (YV = null === (UV = (0, dx.h)()) || void 0 === UV ? void 0 : UV.textureUrl(VV)) && void 0 !== YV ? YV : eJ.ingameIconUrl(VV)) && void 0 !== xV ? xV : eJ.notFoundUrl()
          };
          if (VV.startsWith(hx.c)) return {
            kind: "icon",
            url: rJ(VV.slice(hx.c.length))
          };
          if (0 === (0, Lx.k)()) return (0, lx.b)(), JV.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(VV);
          const yV = null !== (eV = vJ(VV)) && void 0 !== eV ? eV : VV,
            pV = (0, Lx.d)(yV),
            QV = void 0 === pV ? void 0 : xJ.itemTypeNameOf(pV);
          if (void 0 !== ux(yV)) return {
            kind: "drawnBlock"
          };
          const nV = function(VV) {
            var eV;
            return null !== (eV = QJ(wJ(VV))) && void 0 !== eV ? eV : eJ.notFoundUrl()
          }(yV);
          if ((0, Ix.i)(yV) && ! function(VV) {
              const eV = (0, dx.h)();
              return null !== eV && (null !== eV.textureUrl(wJ(VV)) || (0, Ix.d)(VV).some((VV => null !== eV.modelUrl(VV))))
            }(yV)) return {
            kind: "model",
            url: nV
          };
          if ("Gun" === QV) return {
            kind: "gun",
            url: nV
          };
          if (void 0 !== pV && "GrayscaleArmour" === xJ.itemTypeOf(pV) || Object.hasOwn(cx.e, yV)) {
            var wV;
            const eV = null !== (wV = (0, cx.h)(VV)) && void 0 !== wV ? wV : (0, cx.h)(yV);
            if (eV) return {
              kind: "item",
              url: nV,
              tint: eV
            }
          }
          return {
            kind: "item",
            url: nV
          }
        },
        hasIcon: function(VV) {
          return void 0 !== vJ(VV) || (0, hx.i)(VV) || VV.startsWith(hx.c)
        },
        isItemName: function(VV) {
          return void 0 !== vJ(VV)
        }
      };
    var BJ = xV(648),
      jJ = xV(40908);

    function qJ(VV) {
      if (null === VV || void 0 === VV || !VV.isCoreRunning) return null;
      const {
        api: eV,
        chunks: xV,
        items: JV,
        tables: YV
      } = VV;
      return {
        playerFeet() {
          const VV = eV.YF(eV.localId);
          return null !== VV && void 0 !== VV && VV.every(Number.isFinite) ? VV : null
        },
        chunkBlocks: VV => xV.isLoaded(VV[0], VV[1], VV[2]) ? (VV, eV, JV) => xV.vp(VV, eV, JV) : null,
        blockName: VV => YV.nameOfId(VV),
        inventory: () => ({
          slots: JV.playerItems().map((VV => VV ? {
            name: VV.name,
            amount: VV.amount
          } : null)),
          heldSlot: JV.selectedSlot
        }),
        nearby() {
          const xV = [];
          for (let YV = 0; YV < eV.idStr.length; YV++) {
            var JV;
            const UV = eV.idStr[YV],
              yV = eV.serverIds[YV],
              pV = eV.kinds[YV];
            if (null === UV || eV.isLocal(yV) || pV >>> tV.b !== tV.p.Lifeform) continue;
            const QV = eV.YF(yV),
              nV = BJ.m[pV & tV.e];
            QV && void 0 !== nV && xV.push({
              kind: "Player" === nV ? "player" : nV,
              name: null !== (JV = VV.clientApi.getEntityName(UV)) && void 0 !== JV ? JV : null,
              position: QV
            })
          }
          return xV
        },
        droppedItems() {
          let VV = 0;
          for (let xV = 0; xV < eV.idStr.length; xV++) null !== eV.idStr[xV] && eV.kinds[xV] >>> tV.b === tV.p.Item && VV++;
          return VV
        }
      }
    }
    const tJ = {
        worldCodeAiChunk: VV => Promise.resolve((0, jJ.c)(qJ((0, yV.k)()), VV)),
        worldCodeAiGameState: () => Promise.resolve((0, jJ.f)(qJ((0, yV.k)())))
      },
      FJ = function(VV) {
        const eV = wx(),
          JV = wx(),
          YV = new Set,
          UV = new Set,
          yV = () => {
            var eV, xV;
            return null !== (eV = null === (xV = VV.runtime()) || void 0 === xV ? void 0 : xV.currentViewer) && void 0 !== eV ? eV : null
          };
        let pV = null,
          QV = null;
        const wV = (VV, eV) => ({
            current: VV,
            watch(xV) {
              let JV = VV();
              return eV.add((() => {
                const eV = VV();
                eV !== JV && (JV = eV, xV(eV))
              }))
            }
          }),
          vV = VV => ({
            watch: eV => (VV.add(eV), () => {
              VV.delete(eV)
            })
          }),
          rV = VV => {
            const eV = yV(),
              xV = null === eV || void 0 === eV ? void 0 : eV.view;
            eV && xV && eV.seek(Math.max(0, Math.min(xV.totalTicks - 1, xV.iZ + VV * ZV.Cd)))
          },
          kV = {
            replay: wV((() => {
              var VV;
              const eV = yV(),
                xV = null !== (VV = null === eV || void 0 === eV ? void 0 : eV.view) && void 0 !== VV ? VV : null;
              return null === eV || null === xV || xV.state === ZV.qd.None ? (pV = null, null) : (pV = (0, IV.m)(pV, {
                id: eV.id,
                iZ: xV.iZ,
                totalTicks: xV.totalTicks,
                KD: ZV.Cd,
                playing: xV.state === ZV.qd.Playing,
                speed: xV.speed,
                cameraMode: xV.cameraMode,
                freecam: "freecam" === xV.cameraMode
              }), pV)
            }), eV),
            replayEdits: wV((() => {
              var VV;
              const eV = yV(),
                xV = null !== (VV = null === eV || void 0 === eV ? void 0 : eV.view) && void 0 !== VV ? VV : null;
              return null === eV || null === xV || xV.state === ZV.qd.None ? (QV = null, null) : (QV = (0, IV.m)(QV, {
                cameraKeyframes: [...eV.keyframes],
                playbackMark: xV.mark,
                fileName: eV.fileName,
                unsavedChanges: eV.unsavedChanges,
                suggestSaveAs: eV.suggestSaveAs
              }), QV)
            }), eV),
            replayRecorder: wV((() => {
              var eV, xV;
              return null !== (eV = null === (xV = VV.runtime()) || void 0 === xV ? void 0 : xV.recorder.current) && void 0 !== eV ? eV : px.e.states.replayRecorder.current()
            }), JV),
            replayVideoExporting: {
              current: Ux.c,
              watch: VV => (0, nV.i)("replayViewer|videoExportChanged", (() => {
                VV((0, Ux.c)())
              }))
            }
          },
          bV = {
            replayUiActionRequested: vV(UV),
            replayViewerRequested: vV(YV)
          },
          EV = VV => {
            for (const eV of YV) eV(VV)
          },
          BV = () => {
            var JV;
            !0 === (null === (JV = yV()) || void 0 === JV ? void 0 : JV.isOpen) && Promise.all([xV.e(111), xV.e(78)]).then((() => xV(63636))).then((xV => {
              let {
                startWasmReplayVideoExport: JV
              } = xV;
              return JV({
                viewer: yV,
                canvas: () => {
                  var eV, xV;
                  return null !== (eV = null === (xV = VV.canvas) || void 0 === xV ? void 0 : xV.call(VV)) && void 0 !== eV ? eV : null
                },
                watchViewer: eV.add,
                requestViewer: EV
              })
            }), (VV => {
              console.error("Couldn't load the video export", VV), yx.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((VV => {
              console.error("The video export failed", VV)
            }))
          },
          jV = {
            replayAction(VV) {
              if ((0, Ux.c)()) return;
              const eV = yV();
              switch (VV) {
                case "replaySkipBack":
                  rV(-1);
                  break;
                case "replaySkipForward":
                  rV(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== eV && void 0 !== eV && eV.view && eV.setSpeed((0, Yx.e)(eV.view.speed, "replaySpeedUp" === VV ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === eV || void 0 === eV || eV.addKeyframe()
              }
            },
            setReplayPlaying(VV) {
              var eV, xV;
              (0, Ux.c)() || (VV ? null === (eV = yV()) || void 0 === eV || eV.play() : null === (xV = yV()) || void 0 === xV || xV.pause())
            },
            seekReplay(VV) {
              var eV;
              let {
                iZ: xV,
                ignorePlaybackMark: JV
              } = VV;
              null === (eV = yV()) || void 0 === eV || eV.seek(xV, null !== JV && void 0 !== JV && JV)
            },
            setReplayCameraMode(VV) {
              var eV;
              null === (eV = yV()) || void 0 === eV || eV.setCameraMode(VV)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(VV) {
              var eV;
              null === (eV = yV()) || void 0 === eV || eV.setKeyframe(VV)
            },
            moveReplayCameraKeyframe(VV) {
              var eV;
              let {
                from: xV,
                to: JV
              } = VV;
              null === (eV = yV()) || void 0 === eV || eV.moveKeyframe(xV, JV)
            },
            deleteReplayCameraKeyframes(VV) {
              var eV;
              let {
                start: xV,
                end: JV
              } = VV;
              null === (eV = yV()) || void 0 === eV || eV.deleteKeyframes(xV, JV)
            },
            setReplayPlaybackMark(VV) {
              var eV;
              null === (eV = yV()) || void 0 === eV || eV.setMark(VV)
            },
            cropReplay(VV) {
              var eV, xV;
              let {
                start: JV,
                end: YV
              } = VV;
              return !(0, Ux.c)() && (null !== (eV = null === (xV = yV()) || void 0 === xV ? void 0 : xV.crop(JV, YV)) && void 0 !== eV && eV)
            },
            holdReplayForShaderPackFailure(VV) {
              const eV = yV();
              eV && (eV.holdForShaderPackFailure(), function(VV) {
                xV.e(129).then((() => xV(40443))).then((eV => {
                  let {
                    shaderPackPage: xV
                  } = eV;
                  xV.block(VV)
                })).catch((VV => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", VV)
                }))
              }(VV))
            },
            exportReplayVideo() {
              BV()
            },
            toggleRecording() {
              var eV;
              null === (eV = VV.runtime()) || void 0 === eV || eV.recorder.toggleRecording()
            },
            saveClip() {
              var eV;
              null === (eV = VV.runtime()) || void 0 === eV || eV.recorder.saveClip()
            },
            setRecorderPrefs(eV) {
              var xV;
              let {
                clipping: JV,
                clipSeconds: YV
              } = eV;
              null === (xV = VV.runtime()) || void 0 === xV || xV.recorder.setPrefs(JV, YV)
            },
            setReplayViewerOpen(eV) {
              var xV;
              (0, Ee.g)(eV) && (null === (xV = VV.runtime()) || void 0 === xV || xV.recorder.viewerShown(eV))
            },
            recordFlyingMiddleText(eV) {
              var xV;
              let {
                content: JV,
                ux: YV,
                angle: UV,
                Sx: yV
              } = eV;
              null === (xV = VV.runtime()) || void 0 === xV || xV.recorder.recordFlyingText(JSON.stringify(JV), YV, UV, yV)
            },
            dragReplayCamera(eV) {
              var xV;
              let {
                dx: JV,
                dy: YV
              } = eV;
              null === (xV = VV.freecam()) || void 0 === xV || xV.drag(JV, YV)
            },
            moveReplayFreecam(eV) {
              var xV;
              null === (xV = VV.freecam()) || void 0 === xV || xV.move(eV)
            },
            holdReplayFreecamVertical(eV) {
              var xV;
              let {
                action: JV,
                hn: YV
              } = eV;
              null === (xV = VV.freecam()) || void 0 === xV || xV.holdVertical(JV, YV)
            }
          },
          qV = VV => {
            var eV;
            const xV = yV(),
              JV = null !== (eV = null === xV || void 0 === xV ? void 0 : xV.view) && void 0 !== eV ? eV : null;
            Qx.has(VV) ? (VV => {
              for (const eV of UV) eV(VV)
            })(VV) : nx.has(VV) ? jV.replayAction(VV) : "replayPlayPause" === VV ? xV && JV && JV.state !== ZV.qd.None && jV.setReplayPlaying(JV.state !== ZV.qd.Playing) : "replayChangeCameraMode" === VV ? null === xV || void 0 === xV || xV.cycleCameraMode() : "replayExit" === VV ? !0 === (null === xV || void 0 === xV ? void 0 : xV.inPlayback) && (0, De.k)("/") : "replayExportVideo" === VV && BV()
          };
        let tV = !1;
        return {
          states: kV,
          events: bV,
          commands: jV,
          lookups: {
            replayCamera() {
              var eV, xV, JV;
              return !0 !== (null === (eV = yV()) || void 0 === eV ? void 0 : eV.isOpen) ? null : null !== (xV = null === (JV = VV.cameraView) || void 0 === JV ? void 0 : JV.call(VV)) && void 0 !== xV ? xV : null
            },
            leaveGameReloadsPage() {
              var VV;
              return !0 === (null === (VV = yV()) || void 0 === VV ? void 0 : VV.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var VV;
              const xV = !0 === (null === (VV = yV()) || void 0 === VV ? void 0 : VV.inPlayback);
              xV !== tV && (tV = xV, nV.h.QZ("connectedGameChanged")), eV.fire()
            },
            recorderChanged: JV.fire,
            keyDown: VV => {
              var eV;
              switch (VV) {
                case "recordGame":
                  return void jV.toggleRecording();
                case "recordClip":
                  return void((0, Ee.e)() || jV.saveClip())
              }(0, Ux.c)() || ("replayViewerOpen" !== VV ? VV.startsWith("replay") && ((0, Ee.e)() || !0 === (null === (eV = yV()) || void 0 === eV ? void 0 : eV.inPlayback)) && qV(VV) : EV("toggle"))
            }
          }
        }
      }({
        runtime: YV.l,
        cameraView: () => {
          var VV;
          const eV = null === (VV = (0, yV.k)()) || void 0 === VV ? void 0 : VV.renderFrame;
          if (!eV) return null;
          const [xV, JV, YV] = eV.cameraPosition, [UV, pV, QV] = eV.cameraDirection;
          return {
            position: [xV, JV, YV],
            direction: [UV, pV, QV]
          }
        },
        canvas: () => {
          var VV, eV, xV;
          return null !== (VV = null === (eV = (xV = (0, UV.G)()).canvas) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : null
        },
        freecam: YV.h
      }),
      TJ = {
        states: {
          ...ne,
          ...re.i,
          ...FJ.states,
          ...rx,
          ...lV
        },
        events: {
          ...we,
          ...EV,
          ...re.e,
          ...XV.c,
          ...Mx.k,
          ...FJ.events,
          ...kx,
          ...NV.l
        },
        commands: {
          ...AV,
          ...Ze,
          ...BV,
          ...re.d,
          ...Ie,
          ...Xx,
          ...NV.h,
          ...ae,
          ...FJ.commands,
          ...Fx,
          ...LV,
          ...ix,
          ...ke
        },
        queries: {
          ...re.f,
          ...tJ
        },
        lookups: {
          ...ve,
          ...iV,
          ...Mx.m,
          ...FJ.lookups,
          ...PV,
          ...Jx,
          ...Dx,
          ...fV
        }
      };

    function PJ() {
      (0, pV.d)(bV.m), (0, YV.o)(FJ.feed), (0, XV.f)(), de || (de = !0, (0, bV.l)(WV.k, (VV => {
        const eV = (0, gV.i)(WV.k, VV);
        "string" === typeof eV && Promise.resolve().then((() => xV(4038))).then((VV => {
          let {
            onCosmeticPackGranted: xV
          } = VV;
          xV(eV)
        }))
      })), (0, bV.l)(WV.$, (VV => {
        const eV = (0, gV.i)(WV.$, VV);
        "number" === typeof eV && nV.h.QZ("serverUpdating", Date.now() + eV, !0)
      })), (0, bV.l)(WV.G, (VV => {
        const eV = (0, gV.i)(WV.G, VV);
        if ((0, gV.e)(eV)) {
          const {
            ae: VV,
            oe: xV
          } = eV;
          (0, se.d)({
            ae: "string" === typeof VV ? VV : null,
            oe: "string" === typeof xV ? xV : null
          })
        }
      })), (0, bV.l)(wV.mc.NewUiRequest, (VV => {
        const eV = (0, gV.j)(VV);
        (0, gV.e)(eV) && "number" === typeof eV.id && (0, gV.e)(eV.clientParameters) && (0, Se.g)(eV.id, eV.clientParameters)
      })), (0, bV.l)(WV.U, (VV => {
        const eV = (0, gV.i)(WV.U, VV);
        "number" === typeof eV && (0, Se.k)(eV)
      })), (0, bV.h)(Se.e), (0, bV.l)(wV.mc.UiRequestPopup, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV) && "number" === typeof eV.id && ("string" === typeof eV.text || (0, gV.e)(eV.text) && "string" === typeof eV.text.translationKey)) {
          const VV = eV.id;
          (0, Se.m)(VV, eV.text, !0 === eV.destructive, (eV => {
            Ie.answerUiRequest({
              id: VV,
              Jw: eV
            })
          }))
        }
      })), (0, bV.l)(wV.mc.TopRightHelper, (VV => {
        const eV = (0, gV.j)(VV);
        void 0 !== eV && nV.h.QZ("TopRightHelper", eV, !0)
      })), (0, bV.l)(wV.mc.TaskProgress, (VV => {
        const eV = (0, gV.j)(VV);
        (0, gV.e)(eV) && "string" === typeof eV.taskId && "number" === typeof eV.progress && (0, ue.e)({
          taskId: eV.taskId,
          progress: eV.progress
        })
      }))), Tx || (Tx = !0, (0, bV.l)(WV.t, (VV => {
        const eV = (0, gV.i)(WV.t, VV);
        (0, gV.e)(eV) && nV.h.QZ("showShopFromServer", {
          toggle: eV.ZY,
          vY: eV.vY
        }, !0)
      })), (0, bV.l)(wV.mc.OverShopInfo, (VV => {
        const eV = (0, gV.j)(VV);
        (0, gV.e)(eV) && nV.h.QZ("overShopInfo", eV.info, !0)
      })), (0, bV.l)(wV.mc.ShowShopTutorial, (() => {
        nV.h.QZ("showShopTutorial", null, !0)
      }))), qx || (qx = !0, (0, bV.f)((() => {
        var VV;
        (0, bx.resetLeaveEvents)(), null === (VV = tx) || void 0 === VV || VV(), tx = (0, bV.e)() ? (0, Bx.j)(bV.e) : null, (0, bV.e)() || nV.h.Qq()
      })), (0, bV.l)(wV.mc.SetCookie, (VV => {
        const eV = (0, gV.j)(VV),
          xV = (0, De.e)().gameNameWithVariation;
        (0, gV.e)(eV) && "string" === typeof eV.key && null !== xV && (0, Ex.setCookie)(xV, eV.key, eV.value)
      })), (0, bV.l)(wV.mc.LeaveValues, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV) && "string" === typeof eV.leaveEventType) {
          const {
            leaveEventType: VV,
            category: xV,
            subCategory: JV,
            value: YV
          } = eV;
          (0, bx.updateLeaveValue)({
            leaveEventType: VV,
            category: xV,
            subCategory: JV,
            value: YV
          })
        }
      })), (0, bV.l)(wV.mc.CustomAnalyticsEvent, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV) && "string" === typeof eV.cat1) {
          const {
            cat1: VV,
            cat2: xV,
            cat3: JV,
            value: YV
          } = eV;
          (0, bx.logCustomAnalyticsEvent)({
            cat1: VV,
            cat2: xV,
            cat3: JV,
            value: YV
          })
        }
      })), (0, bV.l)(wV.mc.ProgressionEvent, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV)) {
          const {
            type: VV,
            location1: xV,
            location2: JV,
            location3: YV,
            score: UV
          } = eV;
          (0, bx.logProgressionEvent)({
            type: VV,
            location1: xV,
            location2: JV,
            location3: YV,
            score: UV
          })
        }
      })), (0, bV.l)(wV.mc.ResourceEvent, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV)) {
          const {
            type: VV,
            resourceType: xV,
            amount: JV,
            category: YV,
            itemName: UV
          } = eV;
          (0, bx.logResourceEvent)({
            type: VV,
            resourceType: xV,
            amount: JV,
            category: YV,
            itemName: UV
          })
        }
      })), (0, bV.l)(wV.mc.LeaderboardResponse, (VV => {
        const eV = (0, gV.j)(VV);
        if ((0, gV.e)(eV)) {
          const {
            category: VV,
            timeframe: xV,
            data: JV
          } = eV;
          nV.h.QZ("leaderboardResponse", {
            category: VV,
            timeframe: xV,
            data: JV
          })
        }
      })), (0, bV.l)(WV.y, (VV => {
        const eV = (0, gV.i)(WV.y, VV);
        "string" === typeof eV && (0, jx.c)(VV.conn, eV)
      })), (0, bV.l)(WV.B, (VV => {
        const eV = (0, gV.i)(WV.B, VV);
        "string" === typeof eV && console.error(`[logErrorToConsole]: ${eV}`)
      }))), aV(), (0, Mx.e)(), Ce || (Ce = !0, (0, bV.l)(WV.g, (VV => {
        const eV = (0, gV.i)(WV.g, VV);
        void 0 !== eV && (0, ie.i)(eV)
      }))), He(), ze(), HV || (HV = !0, (0, UV.s)(uV)), JV.gameBridge.attach(TJ), (0, JV.installPageSources)({
        commands: {
          ...JV.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: ax.h
        },
        queries: bJ,
        lookups: {
          ...JV.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...EJ,
          lF: ax.b,
          drawCallStats: ox.g
        }
      }), (0, Cx.d)(), pJ()
    }
  },
  42259: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => QV,
      h: () => pV,
      l: () => nV
    });
    var JV = xV(2066);
    let YV = null,
      UV = 0;
    const yV = new Set;

    function pV() {
      return YV
    }

    function QV() {
      return UV
    }

    function nV(VV) {
      YV = VV, UV++, (0, JV.d)();
      for (const eV of yV) eV()
    }

    function wV(VV) {
      yV.add(VV)
    }
  },
  42351: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      e: () => pV
    });
    var JV = xV(42359);
    let YV = null,
      UV = null;

    function yV() {
      return YV ??= xV.e(73).then((() => xV(63646))).catch((VV => {
        throw YV = null, VV
      })), YV
    }

    function pV() {
      return UV ??= Promise.all([yV(), (0, JV.d)()]).then((VV => {
        let [eV] = VV;
        return eV
      }), (VV => {
        throw UV = null, VV
      })), UV
    }
  },
  38245: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = {
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
  40226: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      g: () => YV
    });
    const JV = ["description", "label"];

    function YV(VV) {
      const eV = VV.type;
      return {
        type: eV,
        params: VV[eV]
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);