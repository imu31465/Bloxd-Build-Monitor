export const id = 46;
export const ids = [46];
export const modules = {
  39083: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      g: () => ev,
      i: () => Sv
    });
    const hv = 6e3;

    function Sv(vv, zv) {
      return [Math.floor(vv[0] / zv) * zv, Math.floor(vv[1] / zv) * zv, Math.floor(vv[2] / zv) * zv]
    }

    function ev(vv) {
      const zv = (null !== vv && void 0 !== vv ? vv : "").match(/-?\d+(?:\.\d+)?/g);
      return zv && zv.length >= 3 ? [Number(zv[0]), Number(zv[1]), Number(zv[2])] : null
    }

    function gv(vv, zv) {
      return vv === zv ? String(vv) : `${vv}-${zv}`
    }

    function pv(vv, zv, Pv, hv) {
      const Sv = [];
      let ev = new Map;
      for (let gv = vv[2]; gv < vv[2] + zv; gv++) {
        const pv = new Map;
        let dv = vv[0];
        for (; dv < vv[0] + zv;) {
          const Sv = hv(dv, Pv, gv);
          let Nv = dv;
          for (; Nv + 1 < vv[0] + zv && hv(Nv + 1, Pv, gv) === Sv;) Nv++;
          if (null !== Sv) {
            const vv = `${dv} ${Nv} ${Sv}`,
              zv = ev.get(vv);
            zv ? (zv.z1 = gv, ev.delete(vv), pv.set(vv, zv)) : pv.set(vv, {
              x0: dv,
              x1: Nv,
              z0: gv,
              z1: gv,
              name: Sv
            })
          }
          dv = Nv + 1
        }
        Sv.push(...ev.values()), ev = pv
      }
      return Sv.push(...ev.values()), Sv.sort(((vv, zv) => vv.z0 - zv.z0 || vv.x0 - zv.x0)).map((vv => `x${gv(vv.x0,vv.x1)} z${gv(vv.z0,vv.z1)} ${vv.name}`))
    }

    function dv(vv, zv, Pv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : hv;
      const dv = [vv[0] + zv - 1, vv[1] + zv - 1, vv[2] + zv - 1],
        Nv = null !== Sv && Sv.every(((zv, Pv) => Math.floor(zv) >= vv[Pv] && Math.floor(zv) <= dv[Pv])),
        lv = [`The chunk from ${vv.join(" ")} to ${dv.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Sv && lv.push(`The player's feet are at ${Sv.map(Math.floor).join(" ")}, ${Nv?"in this chunk":"outside this chunk"}.`);
      const Tv = [];
      for (let hv = vv[1]; hv <= dv[1]; hv++) {
        const Sv = pv(vv, zv, hv, Pv).join("; "),
          ev = Tv[Tv.length - 1];
        (null === ev || void 0 === ev ? void 0 : ev.boxes) === Sv ? ev.to = hv : Tv.push({
          from: hv,
          to: hv,
          boxes: Sv
        })
      }
      const Wv = Tv.filter((vv => "" !== vv.boxes));
      0 === Wv.length && lv.push("It is all air.");
      let wv = lv.join("\n").length;
      for (const hv of Wv) {
        const vv = `y${gv(hv.from,hv.to)}: ${hv.boxes}`;
        if (wv += vv.length + 1, wv > ev) {
          lv.push(`Cut short: the layers from y${hv.from} up aren't shown, as there are too many blocks.`);
          break
        }
        lv.push(vv)
      }
      return lv.join("\n")
    }
  },
  8487: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(22);

    function Sv() {
      return !hv.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36456: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      j: () => Sv
    });
    const hv = [.25, .5, 1, 2, 4, 8, 16];

    function Sv(vv, zv) {
      const Pv = hv;
      let Sv = Pv.indexOf(vv);
      return -1 === Sv && (Sv = Pv.findIndex((zv => zv >= vv)), -1 === Sv && (Sv = Pv.length - 1)), "up" === zv ? Pv[Math.min(Sv + 1, Pv.length - 1)] : Pv[Math.max(Sv - 1, 0)]
    }

    function ev(vv) {
      return vv <= hv[0]
    }

    function gv(vv) {
      return vv >= hv[hv.length - 1]
    }
  },
  36031: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => ev
    });
    let hv = !1;

    function Sv() {
      return hv
    }

    function ev(vv) {
      return hv !== vv && (hv = vv, !0)
    }
  },
  38489: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(26),
      Sv = Pv(1903);

    function ev(vv) {
      let {
        taskId: zv,
        progress: Pv
      } = vv;
      const hv = Sv.c.get("_tasks");
      null !== hv && void 0 !== hv && hv[zv] && Sv.c.apply({
        _tasks: {
          ...hv,
          [zv]: {
            ...hv[zv],
            progress: Pv
          }
        }
      })
    }
    hv.j.subscribe("clientTaskProgress", (vv => {
      ev(vv)
    }))
  },
  39061: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      i: () => av,
      l: () => Nv,
      o: () => Tv,
      q: () => dv,
      s: () => gv,
      t: () => lv,
      w: () => sv
    });
    var hv = Pv(1903),
      Sv = Pv(26),
      ev = Pv(1915);
    const gv = (0, ev.o)((function() {
        var vv, zv, Pv, Sv;
        return {
          health: null !== (vv = hv.c.get("_health")) && void 0 !== vv ? vv : null,
          maxHealth: null !== (zv = hv.c.get("_totalMaxHealth")) && void 0 !== zv ? zv : null,
          shield: null !== (Pv = hv.c.get("_shield")) && void 0 !== Pv ? Pv : null,
          maxShield: null !== (Sv = hv.c.get("maxShield")) && void 0 !== Sv ? Sv : null
        }
      }), [], (0, ev.m)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      pv = [{
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

    function dv(vv, zv) {
      return pv[(vv ? 2 : 0) + (zv ? 1 : 0)]
    }
    const Nv = (0, ev.o)((function() {
      var vv;
      return null !== (vv = hv.c.get("_aura")) && void 0 !== vv ? vv : null
    }), [], (0, ev.m)("_aura"));

    function lv(vv) {
      return {
        watch: zv => (0, Sv.l)("shotPlayer", (Pv => {
          let {
            playerId: hv,
            damage: Sv,
            wasCrit: ev,
            distance: gv
          } = Pv;
          vv(hv) && zv({
            damage: Sv,
            wasCrit: ev,
            distance: gv
          })
        }))
      }
    }

    function Tv(vv) {
      return (0, ev.c)("chat", (zv => {
        let {
          serverChatMsgId: Pv,
          content: hv,
          chatterEId: Sv
        } = zv;
        return {
          serverChatMsgId: null !== Pv && void 0 !== Pv ? Pv : null,
          content: hv,
          author: Sv ? vv(Sv) : null
        }
      }))
    }
    class Wv {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Pv = this.shown;
        return vv !== this.needed && (this.needed = vv, this.neededSince = zv, null === vv && (this.shown = null)), this.shown !== this.needed && zv - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Pv
      }
    }

    function wv(vv) {
      return [{
        translationKey: `touchKeys:${vv}`
      }]
    }
    const av = {
      open: wv("open"),
      close: wv("close"),
      milk: wv("milk"),
      shear: wv("shear"),
      tame: wv("tame"),
      feed: wv("feed"),
      ride: wv("ride")
    };

    function sv(vv) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: vv
      }]
    }
  },
  40054: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      h: () => gv
    });
    var hv = Pv(3039);
    let Sv = null,
      ev = null;

    function gv() {
      return ev ??= Pv.e(208).then((() => Pv(35890))).then((vv => {
        let {
          ITEM_SPRITES: zv,
          ITEM_SPRITES_WITHOUT_FILE: Pv,
          ITEM_FILES_WITHOUT_SPRITE: ev
        } = vv;
        Sv = function(vv, zv, Pv) {
          const Sv = new Set,
            ev = (0, hv.q)(zv);
          let gv = 0;
          for (const [hv, pv] of vv.entries()) hv === ev[gv] ? gv++ : Sv.add(pv);
          if ("" !== Pv)
            for (const pv of Pv.split(hv.n)) Sv.add(pv);
          return Sv
        }(zv.split(hv.n), Pv, ev)
      }), (vv => {
        throw ev = null, vv
      })), ev
    }

    function pv(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = Sv) || void 0 === Pv ? void 0 : Pv.has(vv)) && void 0 !== zv && zv
    }
  },
  39074: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      g: () => ev,
      i: () => Sv
    });
    const hv = 128;

    function Sv(vv, zv, Pv, hv) {
      const Sv = 2 * zv - 1,
        ev = 1 - 2 * Pv,
        gv = vv(0) - Sv * vv(3),
        pv = vv(4) - Sv * vv(7),
        dv = vv(8) - Sv * vv(11),
        Nv = vv(1) - ev * vv(3),
        lv = vv(5) - ev * vv(7),
        Tv = vv(9) - ev * vv(11);
      hv[0] = pv * Tv - dv * lv, hv[1] = dv * Nv - gv * Tv, hv[2] = gv * lv - pv * Nv;
      const Wv = hv[0] * vv(3) + hv[1] * vv(7) + hv[2] * vv(11) < 0 ? -1 : 1,
        wv = Math.hypot(hv[0], hv[1], hv[2]) * Wv;
      return hv[0] /= wv, hv[1] /= wv, hv[2] /= wv, hv
    }

    function ev(vv, zv, Pv, hv, Sv, ev) {
      const gv = [Math.floor(zv[0]), Math.floor(zv[1]), Math.floor(zv[2])],
        pv = [0, 0, 0],
        dv = [1 / 0, 1 / 0, 1 / 0],
        Nv = [1 / 0, 1 / 0, 1 / 0];
      for (let Wv = 0; Wv < 3; Wv++) pv[Wv] = Math.sign(Pv[Wv]), 0 !== pv[Wv] && (Nv[Wv] = Math.abs(1 / Pv[Wv]), dv[Wv] = (gv[Wv] + (pv[Wv] > 0 ? 1 : 0) - zv[Wv]) / Pv[Wv]);
      let lv = 0,
        Tv = Math.abs(Pv[0]) > Math.abs(Pv[1]) ? 0 : 1;
      for (Math.abs(Pv[2]) > Math.abs(Pv[Tv]) && (Tv = 2); lv <= hv;) {
        if (vv(gv[0], gv[1], gv[2])) return Sv[0] = gv[0], Sv[1] = gv[1], Sv[2] = gv[2], ev[0] = 0, ev[1] = 0, ev[2] = 0, ev[Tv] = -pv[Tv], !0;
        Tv = dv[0] < dv[1] ? 0 : 1, dv[2] < dv[Tv] && (Tv = 2), lv = dv[Tv], gv[Tv] += pv[Tv], dv[Tv] += Nv[Tv]
      }
      return !1
    }
  },
  39054: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      return Math.hypot(vv[0] - zv[0], vv[1] - zv[1], vv[2] - zv[2]) < Pv + .5
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  38505: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv
    });
    var hv = Pv(1209),
      Sv = Pv(1311),
      ev = Pv(22),
      gv = Pv(1295),
      pv = Pv(1306),
      dv = Pv(1492),
      Nv = Pv(36010);

    function lv(vv) {
      let {
        CP: zv,
        iP: Pv
      } = vv;
      const lv = null !== zv && void 0 !== zv ? zv : (0, pv.c)().gameNameWithVariation;
      (0, hv.P)(lv) && ((0, Nv.m)(), (0, gv.eb)((() => {
        console.log("Received matchmaking order from game server to game", zv), (0, ev.g)("inGameReplay"), (0, dv.navigatePreserveSearch)((0, Sv.e)(lv, null !== Pv && void 0 !== Pv ? Pv : void 0))
      }), "video_start"))
    }
  },
  38685: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(26),
      Sv = Pv(1934);

    function ev(vv) {
      var zv, Pv;
      const ev = (0, Sv.p)(null !== (zv = null === (Pv = Sv.z.toggleFreeCam) || void 0 === Pv ? void 0 : Pv[0]) && void 0 !== zv ? zv : null);
      hv.j.zC("showBottomMessage", {
        message: `Free Camera ${vv?"Enabled":"Disabled"}${ev?` - Press ${ev} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38496: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      d: () => gv,
      g: () => pv,
      k: () => Nv
    });
    var hv = Pv(26),
      Sv = Pv(1336);
    const ev = new Map;

    function gv(vv, zv) {
      hv.j.zC("newUiRequest", {
        id: vv,
        clientParameters: zv
      }, !0)
    }

    function pv(vv) {
      hv.j.zC("removeUiRequest", vv, !0);
      const zv = ev.get(vv);
      zv && (zv.tearDownNotification(), ev.delete(vv))
    }

    function dv() {
      hv.j.zC("clearUiRequests");
      for (const vv of ev.values()) vv.tearDownNotification();
      ev.clear()
    }

    function Nv(vv, zv, Pv) {
      const hv = Sv.NotificationProvider.showPromptPopup({
        title: zv,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ev.set(vv, hv), hv.getResult().then((zv => {
        ev.delete(vv), "notificationTornDown" !== zv && Pv(zv)
      }))
    }
  },
  39079: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Tv,
      g: () => Wv
    });
    var hv = Pv(185),
      Sv = Pv(39083);
    const ev = 20;

    function gv(vv) {
      return vv.map(Math.floor).join(" ")
    }

    function pv(vv) {
      return null === vv.amount || 1 === vv.amount ? vv.name : `${vv.amount} ${vv.name}`
    }
    var dv = Pv(39088),
      Nv = Pv(1903),
      lv = Pv(1306);

    function Tv(vv, zv) {
      if (!vv) return dv.e;
      const Pv = vv.playerFeet();
      if (!Pv) return "The player isn't in the world yet, so no blocks can be seen.";
      const ev = hv.f.aa,
        gv = (0, Sv.i)(null !== zv && void 0 !== zv ? zv : Pv, ev),
        pv = vv.chunkBlocks(gv);
      return pv ? (0, Sv.c)(gv, ev, ((zv, Pv, hv) => {
        const Sv = pv(zv, Pv, hv);
        return 0 === Sv ? null : vv.blockName(Sv).split("|")[0]
      }), Pv) : `The chunk from ${gv.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Pv.map(Math.floor).join(" ")}.`
    }

    function Wv(vv) {
      var zv, Pv, hv;
      if (!vv) return dv.g;
      const Sv = vv.playerFeet();
      if (!Sv) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Tv,
        heldSlot: Wv
      } = vv.inventory();
      return function(vv) {
        const zv = [];
        null !== vv.game && zv.push(`Game: ${vv.game}.`);
        const Pv = null === vv.health ? "" : `, health ${Math.round(vv.health)}${null===vv.maxHealth?"":` of ${Math.round(vv.maxHealth)}`}`;
        zv.push(`The player (the creator) stands at ${gv(vv.position)}${Pv}, ${vv.creative?"in":"not in"} creative mode.`);
        const hv = vv.slots[vv.heldSlot];
        zv.push(hv ? `Holding (slot ${vv.heldSlot}): ${pv(hv)}.` : `Holding nothing (slot ${vv.heldSlot} is empty).`);
        const Sv = vv.slots.flatMap(((vv, zv) => vv ? [`slot ${zv}: ${pv(vv)}`] : []));
        zv.push(Sv.length > 0 ? `Inventory: ${Sv.join(", ")}.` : "Inventory: empty.");
        const dv = zv => Math.hypot(zv.position[0] - vv.position[0], zv.position[1] - vv.position[1], zv.position[2] - vv.position[2]),
          Nv = [...vv.nearby].sort(((vv, zv) => dv(vv) - dv(zv)));
        if (0 === Nv.length) zv.push("No other players or mobs are near enough to see.");
        else {
          zv.push("Near them, nearest first:");
          for (const vv of Nv.slice(0, ev)) {
            const Pv = "player" === vv.kind ? `player "${vv.name||"?"}"` : vv.name && vv.name !== vv.kind ? `${vv.kind} "${vv.name}"` : vv.kind,
              hv = Math.round(dv(vv));
            zv.push(`- ${Pv} at ${gv(vv.position)}, ${hv} block${1===hv?"":"s"} away`)
          }
          Nv.length > ev && zv.push(`- and ${Nv.length-ev} more further away`)
        }
        return vv.droppedItems > 0 && zv.push(`${vv.droppedItems} dropped item${1===vv.droppedItems?" is":"s are"} on the ground nearby.`), zv.join("\n")
      }({
        game: null !== (zv = (0, lv.c)().gameNameWithVariation) && void 0 !== zv ? zv : null,
        position: Sv,
        health: null !== (Pv = Nv.c.get("_health")) && void 0 !== Pv ? Pv : null,
        maxHealth: null !== (hv = Nv.c.get("_totalMaxHealth")) && void 0 !== hv ? hv : null,
        creative: !0 === Nv.c.get("creative"),
        heldSlot: Wv,
        slots: Tv,
        nearby: vv.nearby(),
        droppedItems: vv.droppedItems()
      })
    }
  },
  38515: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      g: () => dv,
      h: () => Nv
    });
    var hv = Pv(1209),
      Sv = Pv(1002),
      ev = Pv(36372),
      gv = Pv(26);

    function pv(vv) {
      let {
        lobbyName: zv,
        gameNameWithVariation: Pv
      } = vv;
      return !(0, hv.S)(zv) || null !== Pv && (Pv.startsWith("testGym") || (0, Sv.l)(Pv))
    }

    function dv(vv) {
      return vv.ah === ev.b.Leave || vv.ah === ev.b.Cursor
    }

    function Nv(vv) {
      gv.j.zC("codeCollab", {
        type: vv.ah,
        docKey: vv.sh,
        version: vv.Ch,
        editorCount: vv.ih,
        peers: vv.Gh,
        updates: vv.mh,
        playerId: vv.jh,
        playerName: vv.fh,
        colour: vv.Fh,
        anchor: vv.Yh,
        head: vv.nh,
        existingCursors: vv.Oh,
        files: vv.Dh,
        engineSettings: vv.Kh
      })
    }
  },
  40019: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => rv,
      E: () => Iv,
      F: () => Vv,
      H: () => qv,
      J: () => Kv,
      K: () => Bv,
      O: () => yv,
      R: () => Rv,
      d: () => Jv,
      g: () => Zv,
      i: () => Ov,
      j: () => Ev,
      m: () => Dv,
      n: () => nv,
      q: () => Qv,
      t: () => Uv,
      x: () => tv,
      y: () => xv
    });
    var hv = Pv(1374),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(2304),
      pv = Pv(4561),
      dv = Pv(4529);
    let Nv, lv = !1,
      Tv = !1,
      Wv = !1,
      wv = !1;
    const av = 1300,
      sv = 3e3;
    let Cv = 0,
      iv = !1,
      cv = !1,
      Gv = 0;
    const mv = 2;
    let jv = !1,
      fv = !1;
    const Fv = new Set,
      Yv = new Set;

    function nv() {
      return lv
    }

    function Ov() {
      return cv
    }

    function Dv() {
      return fv
    }

    function Kv() {
      return (0, ev.u)() && !fv
    }

    function Vv(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (vv !== fv) {
        fv = vv;
        for (const vv of [...Yv]) vv(fv);
        zv && yv()
      }
    }

    function Uv(vv) {
      return Yv.add(vv), () => {
        Yv.delete(vv)
      }
    }

    function Rv() {
      (0, pv.g)(gv.u.Menu, (0, ev.u)() ? 0 : gv.u.Menu)
    }

    function xv() {
      cv = !1, Gv = 0, Rv(), yv()
    }

    function tv(vv) {
      return Fv.add(vv), () => {
        Fv.delete(vv)
      }
    }

    function qv(vv) {
      Tv = !1, vv !== lv && (lv = vv, wv = !1, clearTimeout(Nv), Wv = !lv && jv, lv ? (iv = !1, cv = !1, Gv = 0) : Kv() && !jv && (cv = !0), jv = !1, lv && !Kv() && bv(), kv(), Wv && yv())
    }

    function Iv(vv) {
      vv !== iv && (iv = vv, vv || yv())
    }

    function Qv() {
      Tv = !1, wv || !0 !== Hv() || (wv = !0, clearTimeout(Nv), Nv = setTimeout(Av, av))
    }

    function Zv() {
      return (!Tv || performance.now() - Cv > sv) && (Tv = (0, dv.B)().lockPointer(), Cv = performance.now()), Tv
    }

    function Av() {
      Lv() && Mv() && Zv()
    }

    function Lv() {
      return Kv() && !lv && !iv && !(0, hv.d)()
    }

    function Hv() {
      var vv;
      return "undefined" === typeof navigator || null === (vv = navigator.userActivation) || void 0 === vv ? void 0 : vv.isActive
    }

    function Mv() {
      return Wv && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Hv()
    }

    function yv() {
      Kv() ? Lv() && !cv && Mv() && Zv() : lv && !jv && bv()
    }

    function Bv() {
      cv ? navigator.vendor.startsWith("Apple") ? ov() : Gv = mv : yv()
    }

    function Jv() {
      Gv > 0 && 0 === --Gv && ov()
    }

    function Ev() {
      Gv = 0
    }

    function ov() {
      Lv() && !0 === Hv() && Zv()
    }

    function bv() {
      jv = !0, (0, dv.B)().unlockPointer()
    }

    function rv() {
      Tv = !1, Wv = !1, wv = !1, clearTimeout(Nv), iv = !1, cv = !1, Gv = 0, jv = !1;
      const vv = lv;
      lv = !1, vv && kv()
    }

    function kv() {
      for (const vv of [...Fv]) vv(lv);
      Sv.j.zC("pointerLockUpdate", lv)
    }
  },
  39993: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      g: () => pv,
      k: () => Tv,
      o: () => Nv,
      p: () => gv,
      t: () => lv,
      v: () => dv
    });
    let hv = null,
      Sv = null,
      ev = null;

    function gv(vv) {
      hv = vv
    }

    function pv() {
      return hv
    }

    function dv(vv) {
      Sv = vv
    }

    function Nv() {
      return Sv
    }

    function lv(vv) {
      ev = vv
    }

    function Tv() {
      return ev
    }

    function Wv() {
      var vv, zv;
      return !0 === (null === (vv = Sv) || void 0 === vv || null === (zv = vv.currentViewer) || void 0 === zv ? void 0 : zv.inPlayback)
    }
  },
  39984: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      attachPlayGameSources: () => fh,
      playGameSources: () => jh
    });
    var hv = Pv(1876),
      Sv = Pv(39993),
      ev = Pv(4529),
      gv = Pv(39898),
      pv = Pv(39996),
      dv = Pv(39061),
      Nv = Pv(26),
      lv = Pv(4542),
      Tv = Pv(4535),
      Wv = Pv(39940),
      wv = Pv(39970),
      av = Pv(40002),
      sv = Pv(39949);
    (0, sv.m)(lv.Xb.Chat, (vv => {
      if (vv.payloadKind !== Tv.pc.Msgpack) return;
      const zv = function(vv) {
        if (null === vv || "object" !== typeof vv || !("content" in vv)) return null;
        const {
          chatMsgId: zv,
          content: Pv,
          chatterEId: hv
        } = vv;
        return {
          serverChatMsgId: null !== zv && void 0 !== zv ? zv : void 0,
          content: Pv,
          chatterEId: void 0 === hv || null === hv ? void 0 : String(hv)
        }
      }((0, Wv.d)(vv.payload));
      null !== zv && Nv.j.zC("chat", zv, !0)
    }));
    const Cv = {
        chatReceived: (0, dv.o)((function(vv) {
          var zv, Pv, hv;
          return {
            id: vv,
            name: null !== (zv = av.e.getName(vv)) && void 0 !== zv ? zv : null,
            local: (0, wv.c)() === vv,
            profileEffect: null !== (Pv = null === (hv = (0, av.i)(vv)) || void 0 === hv ? void 0 : hv.profileEffect) && void 0 !== Pv ? Pv : null
          }
        }))
      },
      iv = {
        sendChatMessage(vv) {
          var zv;
          let {
            al: Pv,
            channelName: hv
          } = vv;
          null === (zv = (0, gv.h)()) || void 0 === zv || zv.clientApi.sendChat(Pv, hv)
        }
      };
    var cv = Pv(185),
      Gv = Pv(1903),
      mv = Pv(39889),
      jv = Pv(39054);
    const fv = [0, 0, 0],
      Fv = {
        codeBlockClickable(vv) {
          var zv;
          const Pv = (0, gv.h)();
          if (null === Pv || void 0 === Pv || !Pv.isSessionLive) return !1;
          const hv = Pv.api;
          if (0 !== (mv.t.playerFlags(hv.apiView, 0) & mv.Gd.Crouching)) return !1;
          const Sv = hv.queries.directorEntity(hv.localId) >= mv.pb.BYTES ? hv.memoryData(hv.scratch(), mv.pb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Sv) return !1;
          for (let ev = 0; ev < 3; ev++) fv[ev] = mv.pb.feet(Sv, 0, ev);
          return fv[1] += mv.pb.eyeHeight(Sv, 0), (0, jv.e)(fv, vv, null !== (zv = Gv.c.get("blockReach")) && void 0 !== zv ? zv : cv.f.aG)
        }
      },
      Yv = {
        clickCodeBlock(vv) {
          var zv;
          null === (zv = (0, gv.h)()) || void 0 === zv || zv.clickCodeBlock(vv)
        }
      };
    var nv = Pv(39911),
      Ov = Pv(40007),
      Dv = Pv(1002),
      Kv = Pv(38566),
      Vv = Pv(4525),
      Uv = Pv(39927),
      Rv = Pv(39907),
      xv = Pv(39933);

    function tv(vv) {
      if (null === vv) return null;
      const zv = [];
      for (const Pv of vv) {
        const vv = Object.keys(Pv)[0];
        if ("Wv" === vv) {
          const {
            str: vv,
            style: hv,
            clickableUrl: Sv
          } = Pv.Wv, ev = Object.keys(vv)[0], gv = vv[ev];
          "string" !== ev && "styledEntityName" !== ev && "styledTranslatedText" !== ev || zv.push({
            str: gv,
            style: hv,
            clickableUrl: Sv
          })
        } else zv.push(Pv[vv])
      }
      return zv
    }
    const qv = {
      screenPos(vv) {
        var zv, Pv;
        return null !== (zv = null === (Pv = (0, gv.h)()) || void 0 === Pv ? void 0 : Pv.renderFrame.projectWorldPosToScreenPos(vv)) && void 0 !== zv ? zv : {
          x: 0,
          y: 0
        }
      }
    };
    let Iv = !1;

    function Qv() {
      Iv || (Iv = !0, (0, sv.m)(lv.Xb.ProgressBarUpdate, (vv => {
        const zv = (0, xv.j)(vv);
        (0, xv.d)(zv) && Nv.j.zC("progressBarUpdate", zv, !0)
      })), (0, sv.m)(Uv.D, (vv => {
        const zv = (0, xv.f)(Uv.D, vv);
        zv && Nv.j.zC("middleScreenBarInitiate", {
          duration: zv.Rv,
          xv: zv.xv,
          horizBarRemOffset: zv.tv
        }, !0)
      })), (0, sv.m)(lv.Xb.RemoveMiddleScreenBar, (() => {
        Nv.j.zC("middleScreenBarRemove")
      })), (0, sv.m)(Uv.mb, (vv => {
        const zv = (0, xv.f)(Uv.mb, vv);
        if (zv) {
          var Pv;
          const vv = zv.nv ? null === (Pv = (0, gv.h)()) || void 0 === Pv ? void 0 : Pv.renderFrame.projectDirectionToScreenPos(zv.nv) : void 0;
          Nv.j.zC("sendHitmarker", {
            WP: zv.WP,
            screenPos: vv
          }, !0)
        }
      })), (0, sv.m)(Uv.tb, (vv => {
        const zv = (0, xv.f)(Uv.tb, vv);
        if (zv) {
          const {
            id: vv,
            position: Pv,
            style: hv,
            Tv: Sv,
            sv: ev
          } = zv;
          Nv.j.zC("setDirectionArrow", {
            id: vv,
            position: Pv,
            style: hv,
            text: tv(Sv),
            sv: ev
          }, !0)
        }
      })), (0, sv.m)(Uv.g, (vv => {
        const zv = (0, xv.f)(Uv.g, vv);
        zv && Nv.j.zC("clearDirectionArrow", {
          id: zv.id
        }, !0)
      })), (0, sv.m)(Uv.t, (vv => {
        const zv = (0, xv.f)(Uv.t, vv);
        zv && Nv.j.zC("flyingMiddleMessage", {
          content: tv(zv.wP),
          aP: zv.aP,
          sP: zv.sP
        }, !0)
      })), (0, sv.m)(lv.Xb.WorldVariation, (vv => {
        const zv = (0, xv.j)(vv);
        if ("string" === typeof zv) {
          const vv = zv === Dv.g ? null : {
            message: `Currently loaded as variation: ${zv}`,
            type: "Warning"
          };
          Nv.j.zC("showPermanentBottomMessage", vv, !0)
        }
      })), (0, sv.m)(Uv.U, (vv => {
        const zv = (0, xv.f)(Uv.U, vv);
        zv && function(vv, zv) {
          const {
            type: Pv,
            params: hv
          } = (0, Kv.f)(zv), Sv = {
            ...hv
          };
          for (const ev of Kv.c) Sv[ev] && (Sv[ev] = tv(Sv[ev]));
          Vv.d.queueQTE(vv, Pv, Sv).getResult().then((zv => {
            var Pv;
            "boolean" === typeof zv && (null === (Pv = (0, gv.h)()) || void 0 === Pv || Pv.send(Rv.d.QteResponse, {
              qteId: vv,
              qteResponse: zv
            }))
          }))
        }(zv.id, zv.qz)
      })), (0, sv.m)(Uv.gb, (vv => {
        const zv = (0, xv.f)(Uv.gb, vv);
        "number" === typeof zv && Vv.d.cancelQTE(zv)
      })), (0, sv.i)((() => {
        Vv.d.reset(), Nv.j.zC("showPermanentBottomMessage", null, !0)
      })), (0, sv.l)((() => {
        Vv.d.reset()
      })), (0, sv.m)(lv.Xb.EditItemCraftingRecipes, (vv => {
        const zv = (0, xv.j)(vv);
        (0, xv.d)(zv) && Nv.j.zC("craftingRecipesEdited", {
          itemName: zv.craftingRecipeItemName,
          recipesForItem: zv.recipesForItem
        })
      })), (0, sv.m)(Uv.cb, (vv => {
        const zv = (0, xv.f)(Uv.cb, vv);
        zv && Nv.j.zC("craftingRecipesEdited", {
          itemName: zv.DP,
          recipesForItem: []
        })
      })))
    }
    var Zv = Pv(22);
    const Av = [{
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

    function Lv(vv) {
      return mv.t.playerFlags(vv.api.apiView, 0)
    }
    const Hv = {
        freeCamera: (0, wv.b)((vv => () => {
          const zv = vv.isSessionLive && 0 !== (Lv(vv) & mv.Gd.FreeCamMoves),
            Pv = vv.freeCameraAllowed() && null === Zv.c.get("scriptedCameraFacing");
          return Av[(Pv ? 2 : 0) + (zv ? 1 : 0)]
        }), Av[0], (vv => (0, ev.o)(vv)))
      },
      Mv = {
        setFreeCameraMovesFly: vv => {
          var zv;
          null === (zv = (0, gv.h)()) || void 0 === zv || zv.setFreeCameraMovesFly(vv)
        }
      },
      yv = {
        freeCameraPos: () => {
          const vv = (0, gv.h)();
          return null !== vv && void 0 !== vv && vv.isSessionLive && vv.renderFrame.hasView && 0 !== (Lv(vv) & mv.Gd.FreeCam) ? vv.renderFrame.cameraPosition : null
        }
      };
    var Bv = Pv(38685);
    let Jv = !1,
      Ev = !1;

    function ov() {
      const vv = (0, gv.h)();
      if (null === vv || void 0 === vv || !vv.isSessionLive) return void(Jv = !1);
      const zv = 0 !== (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.FreeCam);
      zv !== Jv && (Jv = zv, (0, Bv.b)(zv))
    }
    var bv = Pv(312),
      rv = Pv(36542),
      kv = Pv(1915);
    var Xv = Pv(40015),
      uv = Pv(39961);
    const vz = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let zz = "off";

    function Pz(vv) {
      var zv;
      return null === vv ? null : {
        label: null !== (zv = (0, Xv.e)(vv, "interactionPrompt")) && void 0 !== zv ? zv : null
      }
    }
    const hz = new Map([
      [mv.vc.Open, {
        label: dv.i.open
      }],
      [mv.vc.Close, {
        label: dv.i.close
      }],
      [mv.vc.Milk, {
        label: dv.i.milk
      }],
      [mv.vc.Shear, {
        label: dv.i.shear
      }],
      [mv.vc.Tame, {
        label: dv.i.tame
      }],
      [mv.vc.Feed, {
        label: dv.i.feed
      }],
      [mv.vc.Ride, {
        label: dv.i.ride
      }]
    ]);
    class Sz {
      constructor() {
        this.target = vz, this.yN = mv.dd, this.optionName = null, this.pickaxe = new dv.e
      }
      read(vv) {
        var zv;
        const Pv = mv.t.targetBlockId(vv.api.apiView, 0);
        Pv !== this.yN && (this.yN = Pv, this.optionName = Pv === mv.dd ? null : `${vv.tables.getMetaInfo(Pv).rootName}CrosshairText`);
        const hv = null === this.optionName ? null : null !== (zv = vv.tables.getClientOption(this.optionName)) && void 0 !== zv ? zv : null;
        this.pickaxe.update(function(vv, zv) {
          var Pv, hv, Sv;
          if (0 === (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.Breaking) || zv === mv.dd || 0 === zv) return null;
          const {
            tables: ev
          } = vv;
          if (!0 === ev.getClientOption("creative")) return null;
          const gv = ev.nameOfId(zv),
            pv = null === (Pv = vv.items.Vp()) || void 0 === Pv ? void 0 : Pv.name,
            dv = null !== (hv = ev.getItemStat(gv, "harvestLevel")) && void 0 !== hv ? hv : 0;
          return (0, bv.tc)({
            blockHarvestType: ev.getDefaultItemStat(gv, "harvestType"),
            blockHarvestLevel: ev.getDefaultItemStat(gv, "harvestLevel"),
            harvestLevel: dv,
            heldToolType: void 0 === pv ? void 0 : ev.getDefaultItemStat(pv, "harvests"),
            heldToolLevel: void 0 === pv ? void 0 : ev.getDefaultItemStat(pv, "level")
          }) && null !== (Sv = rv.t[dv]) && void 0 !== Sv ? Sv : null
        }(vv, Pv)), vv.watchPromptPick(zz);
        const Sv = "touch" === zz ? function(vv) {
          var zv;
          const Pv = vv.interactLabel;
          return Pv === mv.vc.Entity ? Pz(vv.promptEntity) : Pv === mv.vc.TameWith ? {
            label: (0, dv.w)(vv.tables.nameOfId(vv.interactIcon))
          } : null !== (zv = hz.get(Pv)) && void 0 !== zv ? zv : null
        }(vv) : Pz(vv.promptEntity);
        return this.target = (0, kv.p)(this.target, {
          interactPrompt: Sv,
          blockText: hv,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let ez = null;
    const gz = {
      current: () => {
        var vv, zv;
        return null !== (vv = null === (zv = ez) || void 0 === zv ? void 0 : zv.target) && void 0 !== vv ? vv : vz
      },
      watch: vv => {
        const zv = new Sz;
        ez = zv;
        const Pv = (0, wv.f)((Pv => {
          let hv = zv.read(Pv);
          vv(hv);
          const Sv = (0, ev.q)((() => {
            const Sv = zv.read(Pv);
            Sv !== hv && (hv = Sv, vv(Sv))
          }));
          return () => {
            Sv(), Pv.watchPromptPick("off")
          }
        }));
        return () => {
          Pv(), ez === zv && (ez = null)
        }
      }
    };
    let pz = 0,
      dz = 0;
    const Nz = {
        health: dv.s,
        aura: dv.l,
        hotbar: uv.e.states.hotbar,
        heldItemAim: uv.e.states.heldItemAim,
        crouching: (0, wv.b)((vv => function(vv) {
          const zv = () => 0 !== (mv.t.playerFlags(vv.apiView, 0) & mv.Gd.Crouching);
          return {
            current: zv,
            watch(vv) {
              let Pv = zv();
              return (0, ev.o)((() => {
                const hv = zv();
                hv !== Pv && (Pv = hv, vv(hv))
              }))
            }
          }
        }(vv.api).current), !1, (vv => (0, ev.o)(vv))),
        flight: (0, wv.b)((vv => () => function(vv) {
          const zv = mv.t.playerFlags(vv.apiView, 0);
          return (0, dv.q)(0 !== (zv & mv.Gd.CanFly), 0 !== (zv & mv.Gd.Flying))
        }(vv.api)), (0, dv.q)(!1, !1), (vv => (0, ev.o)(vv))),
        gliderBoostFuel: (0, wv.b)((vv => () => mv.t.gliderBoostFuel(vv.api.apiView, 0)), 0, (vv => (0, ev.o)(vv))),
        crosshairTarget: gz
      },
      lz = {
        hotbarSlotRequested: uv.e.events.hotbarSlotRequested,
        hotbarScrolled: uv.e.events.hotbarScrolled,
        numberKeyPressed: uv.e.events.numberKeyPressed,
        shotDamageToShow: (0, dv.t)((vv => !0 === (0, Xv.e)(vv, "showDamageAmounts")))
      },
      Tz = {
        selectHotbarSlot: uv.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: vv => {
          zz = vv
        }
      },
      Wz = {
        momentumFrac: function() {
          var vv, zv, Pv;
          const hv = (0, gv.h)(),
            Sv = performance.now(),
            ev = null === hv || void 0 === hv || null === (vv = hv.items.Vp()) || void 0 === vv || null === (zv = vv.attributes) || void 0 === zv || null === (Pv = zv.customAttributes) || void 0 === Pv ? void 0 : Pv.enchantments;
          return pz = null !== hv && null !== ev && void 0 !== ev && ev.Momentum ? 0 !== (mv.t.playerFlags(hv.api.apiView, 0) & mv.Gd.Breaking) ? Math.max(0, mv.t.momentumFrac(hv.api.apiView, 0)) : Math.max(0, pz - (Sv - dz) / 1500) : 0, dz = Sv, pz
        }
      };
    var wz = Pv(39894);
    const az = {
      lobbyManage(vv) {
        var zv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.LobbyManage, vv)
      }
    };
    var sz = Pv(1226),
      Cz = Pv(36031),
      iz = Pv(8487),
      cz = Pv(1610),
      Gz = Pv(2304),
      mz = Pv(4550);
    let jz = !1;

    function fz(vv) {
      jz = vv
    }

    function Fz() {
      "inGame" !== Zv.c.get("gameState") || (0, cz.p)() || Nv.j.zC("ctrlCrouchWithoutFullscreen")
    }
    let Yz = !1;
    const nz = {
        OpenEmoteWheel: () => {
          fz(!0), Yz = !0, queueMicrotask((() => {
            Yz && (Yz = !1, Nv.j.zC("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Nv.j.zC("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Cz.b)() || Nv.j.zC("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Cz.b)() || Nv.j.zC("XKeyPressed")
        },
        CtrlCrouch: Fz,
        "primary-fire": () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      Oz = {
        OpenEmoteWheel: () => {
          fz(!1), Yz ? (Yz = !1, (0, iz.c)() || Nv.j.zC("requestEmoteWheelHoldOpen")) : Nv.j.zC("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Fz,
        "primary-fire": () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Nv.j.zC("mouseState", {
            Gp: sz.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Dz = !1;

    function Kz() {
      Dz || (Dz = !0, (0, mz.h)((vv => {
        if ((0, Sv.e)()) return;
        const zv = (0, mz.g)(vv) ? "primary-fire" : vv.action;
        var Pv;
        if (vv.down) {
          if (0 === (vv.flags & Gz.c.Synthetic)) {
            var hv;
            null === (hv = nz[zv]) || void 0 === hv || hv.call(nz)
          }
        } else null === (Pv = Oz[zv]) || void 0 === Pv || Pv.call(Oz)
      })))
    }
    var Vz = Pv(302),
      Uz = Pv(73),
      Rz = Pv(39),
      xz = Pv(40019),
      tz = Pv(1306),
      qz = Pv(38515);
    let Iz = !1;
    const Qz = {
      sendCodeCollab(vv) {
        var zv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.CodeCollab, (0, Rv.k)(vv), (0, qz.g)(vv))
      }
    };
    var Zz = Pv(38629);
    let Az = null,
      Lz = !1,
      Hz = null;

    function Mz() {
      return "inGame" === Zv.c.get("gameState") && !(0, Cz.b)()
    }
    const yz = {
        OpenInventory: vv => {
          (0, cz.v)(vv, "inventory", (0, wz.n)())
        },
        OpenShop: vv => {
          Az && Mz() && (0, cz.u)(vv, Vz.o.SHOP, !Az.shopIsEmpty(Gv.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: vv => {
          Mz() && (0, cz.u)(vv, Vz.o.LOBBY_LEADERBOARD, (0, Zz.d)({
            lobbyLeaderboardInfo: Gv.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Gv.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: vv => {
          var zv;
          const Pv = null === (zv = Az) || void 0 === zv ? void 0 : zv.getClientGameMapKey();
          Pv ? (0, cz.w)(vv, !0, Pv) : (0, cz.v)(vv, "retentionFeatures", !(!Gv.c.get("_tasks") && !Gv.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: vv => {
          (0, cz.v)(vv, "inviteLink", Uz.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: vv => {
          Mz() && function(vv) {
            var zv;
            const Pv = (0, gv.h)(),
              hv = null !== Pv && void 0 !== Pv && Pv.isSessionLive ? Pv.api : null,
              Sv = hv ? hv.yG(hv.localId) : null,
              ev = null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.map((vv => Math.floor(vv)))) && void 0 !== zv ? zv : null;
            (0, cz.w)(vv, null !== ev && (0, qz.c)((0, tz.c)()), (() => {
              Nv.j.zC("EditLobbyCode", ev)
            }))
          }(vv)
        },
        HideUi: () => {
          Nv.j.zC("showUi", !1)
        }
      },
      Bz = {
        HideUi: () => {
          Nv.j.zC("showUi", !0)
        }
      };

    function Jz() {
      Lz || (Lz = !0, Pv.e(152).then((() => Pv(41931))).then((vv => {
        Az = vv
      }), (vv => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", vv)
      })), (0, xz.x)((vv => {
        vv || !(0, xz.i)() || (0, Uz.isMobile)() || !Rz.h.getItem("disableFullscreen") || (0, cz.o)() || Zv.c.set({
          openEverythingMenuName: Vz.o.SETTINGS
        })
      })), (0, mz.h)((vv => {
        let {
          action: zv,
          down: Pv,
          press: hv
        } = vv;
        var ev, gv;
        (0, Sv.e)() || (Pv ? null === (ev = yz[zv]) || void 0 === ev || ev.call(yz, function(vv) {
          var zv;
          if (0 === vv || (null === (zv = Hz) || void 0 === zv ? void 0 : zv.press) !== vv) {
            const zv = {
              press: vv,
              event: new Event("inputAction")
            };
            Hz = zv, queueMicrotask((() => {
              Hz === zv && (Hz = null)
            }))
          }
          return Hz.event
        }(hv)) : null === (gv = Bz[zv]) || void 0 === gv || gv.call(Bz))
      })))
    }
    var Ez = Pv(38489),
      oz = Pv(38505),
      bz = Pv(38496);
    const rz = {
      completeTask(vv) {
        var zv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.CompleteTask, (0, Rv.m)(vv))
      },
      setServerCookie(vv) {
        var zv;
        let {
          key: Pv,
          value: hv
        } = vv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.GeneralCookieSet, (0, Rv.q)({
          Pl: Pv,
          hl: hv
        }))
      },
      answerUiRequest(vv) {
        var zv;
        let {
          id: Pv,
          Nl: hv
        } = vv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.UiRequestResp, (0, Rv.K)({
          Al: Pv,
          Ll: hv,
          Hl: 5
        }))
      },
      chooseRewardedAd(vv) {
        var zv;
        let {
          id: Pv,
          Nl: hv
        } = vv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.UiRequestResponded, (0, Rv.J)({
          id: Pv,
          Nl: hv
        }))
      },
      requestLeaderboard(vv) {
        var zv;
        let {
          category: Pv,
          timeframe: hv,
          seeTop: Sv
        } = vv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.LeaderboardRequest, {
          category: Pv,
          timeframe: hv,
          seeTop: Sv
        })
      }
    };
    let kz = !1;
    const Xz = cv.f.pG / 2,
      uz = [Xz, -Xz, -Xz, -Xz, Xz, Xz, -Xz, Xz],
      vP = [0, 0, 0];

    function zP(vv, zv, Pv) {
      for (let hv = 0; hv < vv.length; hv += 2)
        if (vv[hv] === zv && vv[hv + 1] === Pv) return !0;
      return !1
    }
    const PP = {
      blocksStandingOn: function() {
        const vv = (0, gv.h)();
        if (null === vv) return [];
        const {
          api: zv,
          chunks: Pv,
          tables: hv
        } = vv;
        if (!zv.readPosition(zv.localId, vP)) return [];
        const [Sv, ev, pv] = vP, dv = Math.ceil(ev) - 1, Nv = [], lv = [];
        for (let gv = 0; gv < uz.length; gv += 2) {
          const vv = Sv + uz[gv],
            zv = pv + uz[gv + 1];
          if (Number.isInteger(vv) || Number.isInteger(zv)) continue;
          const ev = Math.floor(vv),
            Tv = Math.floor(zv);
          if (zP(lv, ev, Tv)) continue;
          const Wv = Pv.yN(ev, dv, Tv);
          hv.isSolidBlockId(Wv) && (lv.push(ev, Tv), Nv.push(hv.nameOfId(Wv)))
        }
        return Nv
      },
      dropAhead: function() {
        const vv = (0, gv.h)();
        return null !== vv && 0 !== (mv.t.playerFlags(vv.api.apiView, 0) & mv.Gd.DropAhead)
      }
    };
    var hP = Pv(36456),
      SP = Pv(38613),
      eP = Pv(1336),
      gP = Pv(39973);
    const pP = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      dP = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function NP() {
      const vv = new Set;
      return {
        add: zv => (vv.add(zv), () => {
          vv.delete(zv)
        }),
        fire() {
          for (const zv of vv) zv()
        }
      }
    }
    const lP = Object.freeze([]);

    function TP(vv, zv) {
      let Pv, {
        rereads: hv,
        followLocalId: Sv
      } = zv;
      const gv = () => (Pv = (0, kv.p)(Pv, vv()), Pv);
      return {
        current: gv,
        watch(vv) {
          const zv = (0, av.b)((zv => {
            hv(zv) && vv(gv())
          }));
          if (!Sv) return zv;
          let Pv = (0, wv.c)();
          const pv = (0, ev.q)((() => {
            const zv = (0, wv.c)();
            zv !== Pv && (Pv = zv, vv(gv()))
          }));
          return () => {
            zv(), pv()
          }
        }
      }
    }
    const WP = {
        players: TP((function() {
          const vv = av.e.ids(),
            zv = {};
          for (const ev of vv) {
            var Pv, hv, Sv;
            zv[ev] = {
              name: null !== (Pv = av.e.getName(ev)) && void 0 !== Pv ? Pv : null,
              ranks: null !== (hv = av.e.getSetting(ev, "ranks")) && void 0 !== hv ? hv : lP,
              cosmetics: null !== (Sv = (0, av.i)(ev)) && void 0 !== Sv ? Sv : null
            }
          }
          return {
            ids: vv,
            byId: zv,
            localId: (0, wv.c)()
          }
        }), {
          rereads: vv => "roster" !== vv.kind || vv.members || vv.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: TP((function() {
          const vv = {};
          for (const Sv of av.e.ids()) {
            var zv, Pv, hv;
            vv[Sv] = {
              colour: null !== (zv = av.e.getSetting(Sv, "colorInLobbyLeaderboard")) && void 0 !== zv ? zv : null,
              values: null !== (Pv = av.e.getSetting(Sv, "lobbyLeaderboardValues")) && void 0 !== Pv ? Pv : null,
              tags: null !== (hv = av.e.getSetting(Sv, "lobbyLeaderboardTags")) && void 0 !== hv ? hv : null
            }
          }
          return vv
        }), {
          rereads: function(vv) {
            if ("roster" !== vv.kind) return "reset" === vv.kind;
            const {
              members: zv,
              settings: Pv
            } = vv;
            return zv || Pv.has("colorInLobbyLeaderboard") || Pv.has("lobbyLeaderboardValues") || Pv.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      wP = {
        cosmeticsUpdated: {
          watch: vv => (0, av.b)((zv => {
            if ("cosmetics" !== zv.kind) return;
            const Pv = (0, wv.c)();
            vv(zv.updates.map((vv => {
              let {
                cP: zv,
                GP: hv,
                mP: Sv
              } = vv;
              return {
                local: zv === Pv,
                GP: hv,
                mP: Sv
              }
            })))
          }))
        }
      };
    var aP = Pv(2702),
      sP = Pv(1692),
      CP = Pv(650),
      iP = Pv(40021);
    let cP = !1,
      GP = null;
    const mP = {
      setShopOpen(vv) {
        var zv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.ShopMenuChanged, (0, Rv.H)(vv))
      },
      buyShopItem(vv) {
        var zv;
        let {
          categoryKey: Pv,
          itemKey: hv,
          userInput: Sv
        } = vv;
        null === (zv = (0, gv.h)()) || void 0 === zv || zv.send(Rv.d.ItemBought, {
          categoryKey: Pv,
          itemKey: hv,
          shopVersion: Gv.c.get("_shopVersion"),
          userInput: Sv
        })
      }
    };
    let jP = !1;
    var fP = Pv(4561);
    const FP = Gz.u.LookFrozen | Gz.u.ClicksSuppressed;

    function YP(vv, zv) {
      var Pv;
      null !== (Pv = (0, gv.h)()) && void 0 !== Pv && Pv.send(vv, zv) || console.warn(`[bloxd-wasm-client] message ${vv} not sent: no live game or the core's command ring is full`)
    }(0, sv.m)(Uv.vb, (vv => {
      const zv = (0, xv.f)(Uv.vb, vv);
      void 0 !== zv && Nv.j.zC("setDiscordReportKey", zv)
    }));
    const nP = {
      ignorePlayer(vv) {
        YP(Rv.d.IgnoreUser, (0, Rv.r)({
          Zl: vv
        }))
      },
      reportPlayer(vv) {
        let {
          playerId: zv,
          chatMsgId: Pv,
          ug: hv,
          details: Sv
        } = vv;
        YP(Rv.d.UserReport, (0, Rv.V)({
          kg: zv,
          Xg: Pv,
          ug: hv,
          vp: Sv
        }))
      },
      reportWorldCodeChat(vv) {
        let {
          chatMsgId: zv,
          ug: Pv,
          details: hv
        } = vv;
        YP(Rv.d.UserReport, (0, Rv.V)({
          kg: "",
          Xg: zv,
          ug: Pv,
          vp: hv
        }))
      },
      requestDiscordReportKey(vv) {
        YP(Rv.d.ReqDiscordReportKey, (0, Rv.E)(vv))
      },
      reportLobbyOrGame(vv) {
        let {
          target: zv,
          ug: Pv,
          details: hv
        } = vv;
        "customGame" === zv ? YP(Rv.d.CustomGameReport, (0, Rv.o)({
          ug: Pv,
          vp: hv
        })) : YP(Rv.d.LobbyReport, (0, Rv.u)({
          ug: Pv,
          vp: hv
        }))
      },
      updateMyCosmetic(vv) {
        YP(Rv.d.UpdateMyCosmetic, (0, Rv.T)(vv))
      },
      holdEmoteWheel(vv) {
        !vv || jz ? (0, fP.g)(FP, vv ? FP : 0) : Nv.j.zC("requestEmoteWheelHoldRelease")
      }
    };
    var OP = Pv(40025),
      DP = Pv(9101),
      KP = Pv(39074);
    const VP = [0, 0, 0],
      UP = [0, 0, 0],
      RP = [0, 0, 0],
      xP = {
        blockAtViewPoint(vv) {
          let {
            x: zv,
            y: Pv
          } = vv;
          const hv = (0, gv.h)();
          if (null === hv || void 0 === hv || !hv.renderFrame.hasView) return null;
          const {
            renderFrame: Sv,
            clientApi: ev,
            api: pv
          } = hv;
          let dv = 0;
          return (0, KP.g)(((vv, zv, Pv) => (dv = ev.getBlockId(vv, zv, Pv), 0 !== dv)), Sv.cameraPosition, (0, KP.i)((vv => mv.t.viewProj(pv.apiView, 0, vv)), zv, Pv, VP), KP.c, UP, RP) ? {
            pos: [UP[0], UP[1], UP[2]],
            normal: [RP[0], RP[1], RP[2]],
            name: (0, DP.d)(dv)
          } : null
        }
      },
      tP = {
        setBlockHighlight(vv) {
          var zv;
          null === (zv = (0, gv.h)()) || void 0 === zv || zv.setBlockHighlight(vv)
        }
      };
    var qP = Pv(1889),
      IP = Pv(40029),
      QP = Pv(40038),
      ZP = Pv(4247),
      AP = Pv(4217),
      LP = Pv(40040),
      HP = Pv(3037),
      MP = Pv(3039);
    let yP = null,
      BP = null;

    function JP(vv) {
      const zv = vv.startsWith(MP.j),
        [Pv, hv = Pv, Sv = Pv] = (zv ? vv.slice(MP.j.length) : vv).split(MP.f);
      return {
        top: Pv,
        left: hv,
        right: Sv,
        half: zv
      }
    }

    function EP(vv) {
      const zv = null === yP ? void 0 : (0, HP.c)(vv),
        Pv = void 0 === zv ? 0 : yP.codes[zv];
      return 0 === Pv ? void 0 : yP.pool[Pv - 1]
    }
    var oP = Pv(3033),
      bP = Pv(4206),
      rP = Pv(4242),
      kP = Pv(40042),
      XP = Pv(40047);
    const uP = "item:";
    let vh = null,
      zh = null,
      Ph = null,
      hh = null,
      Sh = !1,
      eh = !1;

    function gh() {
      return eh || (eh = !0, (0, rP.g)().then((vv => {
        vv && (0, qP.e)()
      }))), Ph ??= Promise.all([(0, oP.i)(), (BP ??= Pv.e(1).then((() => Pv(41950))).then((vv => {
        let {
          BLOCK_FACE_RUNS: zv,
          BLOCK_FACES: Pv,
          MAX_FACE_ITEM_ID: hv
        } = vv;
        yP = {
          codes: (0, MP.t)(zv, hv + 1),
          pool: Pv.split(MP.n).map(JP)
        }
      }), (vv => {
        throw BP = null, vv
      })), BP), (0, XP.e)(), Pv.e(189).then((() => Pv(9019)))]).then((vv => {
        let [, , zv, Pv] = vv;
        zv.followBundledTextures(), vh = zv, zh = Pv, (0, qP.e)()
      }), (vv => {
        Ph = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", vv)
      })), Ph
    }

    function ph(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = (0, kP.d)()) || void 0 === Pv ? void 0 : Pv.textureUrl(vv)) && void 0 !== zv ? zv : vh.itemSpriteUrl(vv)
    }

    function dh(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = (0, kP.d)()) || void 0 === Pv ? void 0 : Pv.textureUrl(vv)) && void 0 !== zv ? zv : vh.blockTextureUrl(vv)
    }

    function Nh(vv) {
      var zv;
      return null !== (zv = (0, oP.e)(vv)) && void 0 !== zv ? zv : vv
    }

    function lh(vv, zv) {
      var Pv, hv, Sv;
      return null !== (Pv = null !== (hv = null !== (Sv = dh(vv)) && void 0 !== Sv ? Sv : null === zv || void 0 === zv ? void 0 : zv.rotated[vv]) && void 0 !== hv ? hv : null === zv || void 0 === zv ? void 0 : zv.animated[vv]) && void 0 !== Pv ? Pv : vh.notFoundUrl()
    }

    function Th(vv) {
      return void 0 !== (0, HP.c)(vv) ? vv : /^[1-9][0-9]*$/.test(vv) ? (0, HP.e)(Number(vv)) : void 0
    }

    function Wh(vv) {
      var zv;
      if (vv.startsWith(uP)) {
        var Pv;
        const zv = (0, oP.e)(vv.slice(5));
        return null !== (Pv = void 0 === zv ? null : ph(zv)) && void 0 !== Pv ? Pv : vh.notFoundUrl()
      }
      return null !== (zv = vh.particleUrl(vv)) && void 0 !== zv ? zv : vh.notFoundUrl()
    }

    function wh(vv, zv) {
      return "StairsBlock" === vv ? vv : zv ? "SlabBlock" : "CubeBlock"
    }
    const ah = {
        async blockIcon(vv) {
          var zv;
          let {
            name: hv,
            size: Sv,
            lineWidth: ev
          } = vv;
          await gh();
          const gv = null !== (zv = Th(hv)) && void 0 !== zv ? zv : hv,
            pv = (0, rP.b)(gv, Sv, ev);
          if (null !== pv) return pv;
          const dv = EP(gv),
            Nv = (0, HP.c)(gv),
            lv = void 0 === Nv || null === zh ? void 0 : zh.itemTypeNameOf(Nv);
          if (null === vh || void 0 === dv) return "";
          const Tv = [dv.top, dv.left, dv.right].some((vv => null === dh(vv))),
            Wv = Tv ? await (hh ??= Pv.e(201).then((() => Pv(33871))).then((vv => (Sh && (Sh = !1, (0, qP.e)()), {
              rotated: vv.rotatedBlockTextures,
              animated: vv.animatedBlockTextures
            })), (vv => (hh = null, Sh = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", vv), null))), hh) : null;
          if (Tv && null === Wv) return "";
          const wv = {
              top: lh(dv.top, Wv),
              left: lh(dv.left, Wv),
              right: lh(dv.right, Wv),
              itemType: wh(lv, dv.half)
            },
            av = (0, kP.c)(),
            sv = 0 === av ? gv : `${gv}#${av}`;
          return (await (0, bP.b)()).drawBlockIconUrl(sv, Sv, ev, (() => wv))
        }
      },
      sh = {
        itemIcon: function(vv) {
          var zv, Pv, Sv, ev;
          if (null === vh) return gh(), hv.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(vv);
          if ((0, AP.m)(vv)) return {
            kind: "icon",
            url: null !== (Pv = null !== (Sv = null === (ev = (0, kP.d)()) || void 0 === ev ? void 0 : ev.textureUrl(vv)) && void 0 !== Sv ? Sv : vh.ingameIconUrl(vv)) && void 0 !== Pv ? Pv : vh.notFoundUrl()
          };
          if (vv.startsWith(AP.e)) return {
            kind: "icon",
            url: Wh(vv.slice(AP.e.length))
          };
          if (0 === (0, HP.f)()) return (0, LP.e)(), hv.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(vv);
          const gv = null !== (zv = Th(vv)) && void 0 !== zv ? zv : vv,
            pv = (0, HP.c)(gv),
            dv = void 0 === pv ? void 0 : zh.itemTypeNameOf(pv);
          if (void 0 !== EP(gv)) return {
            kind: "drawnBlock"
          };
          const Nv = function(vv) {
            var zv;
            return null !== (zv = ph(Nh(vv))) && void 0 !== zv ? zv : vh.notFoundUrl()
          }(gv);
          if ((0, rP.c)(gv) && ! function(vv) {
              const zv = (0, kP.d)();
              return null !== zv && (null !== zv.textureUrl(Nh(vv)) || null !== zv.modelUrl(vv))
            }(gv)) return {
            kind: "model",
            url: Nv
          };
          if ("Gun" === dv) return {
            kind: "gun",
            url: Nv
          };
          if (void 0 !== pv && "GrayscaleArmour" === zh.itemTypeOf(pv) || Object.hasOwn(ZP.c, gv)) {
            var lv;
            const zv = null !== (lv = (0, ZP.g)(vv)) && void 0 !== lv ? lv : (0, ZP.g)(gv);
            if (zv) return {
              kind: "item",
              url: Nv,
              tint: zv
            }
          }
          return {
            kind: "item",
            url: Nv
          }
        },
        hasIcon: function(vv) {
          return void 0 !== Th(vv) || (0, AP.m)(vv) || vv.startsWith(AP.e)
        },
        isItemName: function(vv) {
          return void 0 !== Th(vv)
        }
      };
    var Ch = Pv(609),
      ih = Pv(39079);

    function ch(vv) {
      if (null === vv || void 0 === vv || !vv.isCoreRunning) return null;
      const {
        api: zv,
        chunks: Pv,
        items: hv,
        tables: Sv
      } = vv;
      return {
        playerFeet() {
          const vv = zv.yG(zv.localId);
          return null !== vv && void 0 !== vv && vv.every(Number.isFinite) ? vv : null
        },
        chunkBlocks: vv => Pv.isLoaded(vv[0], vv[1], vv[2]) ? (vv, zv, hv) => Pv.yN(vv, zv, hv) : null,
        blockName: vv => Sv.nameOfId(vv),
        inventory: () => ({
          slots: hv.playerItems().map((vv => vv ? {
            name: vv.name,
            amount: vv.amount
          } : null)),
          heldSlot: hv.selectedSlot
        }),
        nearby() {
          const Pv = [];
          for (let Sv = 0; Sv < zv.idStr.length; Sv++) {
            var hv;
            const ev = zv.idStr[Sv],
              gv = zv.serverIds[Sv],
              pv = zv.kinds[Sv];
            if (null === ev || zv.isLocal(gv) || pv >>> mv.b !== mv.s.Lifeform) continue;
            const dv = zv.yG(gv),
              Nv = Ch.i[pv & mv.c];
            dv && void 0 !== Nv && Pv.push({
              kind: "Player" === Nv ? "player" : Nv,
              name: null !== (hv = vv.clientApi.getEntityName(ev)) && void 0 !== hv ? hv : null,
              position: dv
            })
          }
          return Pv
        },
        droppedItems() {
          let vv = 0;
          for (let Pv = 0; Pv < zv.idStr.length; Pv++) null !== zv.idStr[Pv] && zv.kinds[Pv] >>> mv.b === mv.s.Item && vv++;
          return vv
        }
      }
    }
    const Gh = {
        worldCodeAiChunk: vv => Promise.resolve((0, ih.e)(ch((0, gv.h)()), vv)),
        worldCodeAiGameState: () => Promise.resolve((0, ih.g)(ch((0, gv.h)())))
      },
      mh = function(vv) {
        const zv = NP(),
          hv = NP(),
          Sv = new Set,
          ev = new Set,
          gv = () => {
            var zv, Pv;
            return null !== (zv = null === (Pv = vv.runtime()) || void 0 === Pv ? void 0 : Pv.currentViewer) && void 0 !== zv ? zv : null
          };
        let pv = null,
          dv = null;
        const lv = (vv, zv) => ({
            current: vv,
            watch(Pv) {
              let hv = vv();
              return zv.add((() => {
                const zv = vv();
                zv !== hv && (hv = zv, Pv(zv))
              }))
            }
          }),
          Wv = vv => ({
            watch: zv => (vv.add(zv), () => {
              vv.delete(zv)
            })
          }),
          wv = vv => {
            const zv = gv(),
              Pv = null === zv || void 0 === zv ? void 0 : zv.view;
            zv && Pv && zv.seek(Math.max(0, Math.min(Pv.totalTicks - 1, Pv.MT + vv * Tv.Rd)))
          },
          av = {
            replay: lv((() => {
              var vv;
              const zv = gv(),
                Pv = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null;
              return null === zv || null === Pv || Pv.state === Tv.Cd.None ? (pv = null, null) : (pv = (0, kv.p)(pv, {
                id: zv.id,
                MT: Pv.MT,
                totalTicks: Pv.totalTicks,
                ZD: Tv.Rd,
                playing: Pv.state === Tv.Cd.Playing,
                speed: Pv.speed,
                cameraMode: Pv.cameraMode,
                freecam: "freecam" === Pv.cameraMode
              }), pv)
            }), zv),
            replayEdits: lv((() => {
              var vv;
              const zv = gv(),
                Pv = null !== (vv = null === zv || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null;
              return null === zv || null === Pv || Pv.state === Tv.Cd.None ? (dv = null, null) : (dv = (0, kv.p)(dv, {
                cameraKeyframes: [...zv.keyframes],
                playbackMark: Pv.mark,
                fileName: zv.fileName,
                unsavedChanges: zv.unsavedChanges,
                suggestSaveAs: zv.suggestSaveAs
              }), dv)
            }), zv),
            replayRecorder: lv((() => {
              var zv, Pv;
              return null !== (zv = null === (Pv = vv.runtime()) || void 0 === Pv ? void 0 : Pv.recorder.current) && void 0 !== zv ? zv : gP.c.states.replayRecorder.current()
            }), hv),
            replayVideoExporting: {
              current: SP.c,
              watch: vv => (0, Nv.l)("replayViewer|videoExportChanged", (() => {
                vv((0, SP.c)())
              }))
            }
          },
          sv = {
            replayUiActionRequested: Wv(ev),
            replayViewerRequested: Wv(Sv)
          },
          Cv = vv => {
            for (const zv of Sv) zv(vv)
          },
          iv = () => {
            var hv;
            !0 === (null === (hv = gv()) || void 0 === hv ? void 0 : hv.isOpen) && Promise.all([Pv.e(95), Pv.e(64)]).then((() => Pv(41937))).then((Pv => {
              let {
                startWasmReplayVideoExport: hv
              } = Pv;
              return hv({
                viewer: gv,
                canvas: () => {
                  var zv, Pv;
                  return null !== (zv = null === (Pv = vv.canvas) || void 0 === Pv ? void 0 : Pv.call(vv)) && void 0 !== zv ? zv : null
                },
                watchViewer: zv.add,
                requestViewer: Cv
              })
            }), (vv => {
              console.error("Couldn't load the video export", vv), eP.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((vv => {
              console.error("The video export failed", vv)
            }))
          },
          cv = {
            replayAction(vv) {
              if ((0, SP.c)()) return;
              const zv = gv();
              switch (vv) {
                case "replaySkipBack":
                  wv(-1);
                  break;
                case "replaySkipForward":
                  wv(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== zv && void 0 !== zv && zv.view && zv.setSpeed((0, hP.j)(zv.view.speed, "replaySpeedUp" === vv ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === zv || void 0 === zv || zv.addKeyframe()
              }
            },
            setReplayPlaying(vv) {
              var zv, Pv;
              (0, SP.c)() || (vv ? null === (zv = gv()) || void 0 === zv || zv.play() : null === (Pv = gv()) || void 0 === Pv || Pv.pause())
            },
            seekReplay(vv) {
              var zv;
              let {
                MT: Pv,
                ignorePlaybackMark: hv
              } = vv;
              null === (zv = gv()) || void 0 === zv || zv.seek(Pv, null !== hv && void 0 !== hv && hv)
            },
            setReplayCameraMode(vv) {
              var zv;
              null === (zv = gv()) || void 0 === zv || zv.setCameraMode(vv)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(vv) {
              var zv;
              null === (zv = gv()) || void 0 === zv || zv.setKeyframe(vv)
            },
            moveReplayCameraKeyframe(vv) {
              var zv;
              let {
                from: Pv,
                to: hv
              } = vv;
              null === (zv = gv()) || void 0 === zv || zv.moveKeyframe(Pv, hv)
            },
            deleteReplayCameraKeyframes(vv) {
              var zv;
              let {
                start: Pv,
                end: hv
              } = vv;
              null === (zv = gv()) || void 0 === zv || zv.deleteKeyframes(Pv, hv)
            },
            setReplayPlaybackMark(vv) {
              var zv;
              null === (zv = gv()) || void 0 === zv || zv.setMark(vv)
            },
            cropReplay(vv) {
              var zv, Pv;
              let {
                start: hv,
                end: Sv
              } = vv;
              return !(0, SP.c)() && (null !== (zv = null === (Pv = gv()) || void 0 === Pv ? void 0 : Pv.crop(hv, Sv)) && void 0 !== zv && zv)
            },
            holdReplayForShaderPackFailure(vv) {
              const zv = gv();
              zv && (zv.holdForShaderPackFailure(), function(vv) {
                Pv.e(129).then((() => Pv(38715))).then((zv => {
                  let {
                    shaderPackPage: Pv
                  } = zv;
                  Pv.block(vv)
                })).catch((vv => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", vv)
                }))
              }(vv))
            },
            exportReplayVideo() {
              iv()
            },
            toggleRecording() {
              var zv;
              null === (zv = vv.runtime()) || void 0 === zv || zv.recorder.toggleRecording()
            },
            saveClip() {
              var zv;
              null === (zv = vv.runtime()) || void 0 === zv || zv.recorder.saveClip()
            },
            setRecorderPrefs(zv) {
              var Pv;
              let {
                clipping: hv,
                clipSeconds: Sv
              } = zv;
              null === (Pv = vv.runtime()) || void 0 === Pv || Pv.recorder.setPrefs(hv, Sv)
            },
            setReplayViewerOpen(zv) {
              var Pv;
              (0, Cz.d)(zv) && (null === (Pv = vv.runtime()) || void 0 === Pv || Pv.recorder.viewerShown(zv))
            },
            recordFlyingMiddleText(zv) {
              var Pv;
              let {
                content: hv,
                aP: Sv,
                angle: ev,
                sP: gv
              } = zv;
              null === (Pv = vv.runtime()) || void 0 === Pv || Pv.recorder.recordFlyingText(JSON.stringify(hv), Sv, ev, gv)
            },
            dragReplayCamera(zv) {
              var Pv;
              let {
                dx: hv,
                dy: Sv
              } = zv;
              null === (Pv = vv.freecam()) || void 0 === Pv || Pv.drag(hv, Sv)
            },
            moveReplayFreecam(zv) {
              var Pv;
              null === (Pv = vv.freecam()) || void 0 === Pv || Pv.move(zv)
            },
            holdReplayFreecamVertical(zv) {
              var Pv;
              let {
                action: hv,
                Vp: Sv
              } = zv;
              null === (Pv = vv.freecam()) || void 0 === Pv || Pv.holdVertical(hv, Sv)
            }
          },
          Gv = vv => {
            var zv;
            const Pv = gv(),
              hv = null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.view) && void 0 !== zv ? zv : null;
            pP.has(vv) ? (vv => {
              for (const zv of ev) zv(vv)
            })(vv) : dP.has(vv) ? cv.replayAction(vv) : "replayPlayPause" === vv ? Pv && hv && hv.state !== Tv.Cd.None && cv.setReplayPlaying(hv.state !== Tv.Cd.Playing) : "replayChangeCameraMode" === vv ? null === Pv || void 0 === Pv || Pv.cycleCameraMode() : "replayExit" === vv ? !0 === (null === Pv || void 0 === Pv ? void 0 : Pv.inPlayback) && (0, tz.i)("/") : "replayExportVideo" === vv && iv()
          };
        let mv = !1;
        return {
          states: av,
          events: sv,
          commands: cv,
          lookups: {
            replayCamera() {
              var zv, Pv, hv;
              return !0 !== (null === (zv = gv()) || void 0 === zv ? void 0 : zv.isOpen) ? null : null !== (Pv = null === (hv = vv.cameraView) || void 0 === hv ? void 0 : hv.call(vv)) && void 0 !== Pv ? Pv : null
            },
            leaveGameReloadsPage() {
              var vv;
              return !0 === (null === (vv = gv()) || void 0 === vv ? void 0 : vv.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var vv;
              const Pv = !0 === (null === (vv = gv()) || void 0 === vv ? void 0 : vv.inPlayback);
              Pv !== mv && (mv = Pv, Nv.j.zC("connectedGameChanged")), zv.fire()
            },
            recorderChanged: hv.fire,
            keyDown: vv => {
              var zv;
              switch (vv) {
                case "recordGame":
                  return void cv.toggleRecording();
                case "recordClip":
                  return void((0, Cz.b)() || cv.saveClip())
              }(0, SP.c)() || ("replayViewerOpen" !== vv ? vv.startsWith("replay") && ((0, Cz.b)() || !0 === (null === (zv = gv()) || void 0 === zv ? void 0 : zv.inPlayback)) && Gv(vv) : Cv("toggle"))
            }
          }
        }
      }({
        runtime: Sv.o,
        cameraView: () => {
          var vv;
          const zv = null === (vv = (0, gv.h)()) || void 0 === vv ? void 0 : vv.renderFrame;
          if (!zv) return null;
          const [Pv, hv, Sv] = zv.cameraPosition, [ev, pv, dv] = zv.cameraDirection;
          return {
            position: [Pv, hv, Sv],
            direction: [ev, pv, dv]
          }
        },
        canvas: () => {
          var vv, zv, Pv;
          return null !== (vv = null === (zv = (Pv = (0, ev.B)()).canvas) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : null
        },
        freecam: Sv.k
      }),
      jh = {
        states: {
          ...Nz,
          ...wz.l,
          ...mh.states,
          ...WP,
          ...Hv
        },
        events: {
          ...lz,
          ...Cv,
          ...wz.h,
          ...Ov.e,
          ...OP.g,
          ...mh.events,
          ...wP,
          ...nv.h
        },
        commands: {
          ...Yv,
          ...Tz,
          ...iv,
          ...wz.e,
          ...rz,
          ...nP,
          ...nv.f,
          ...Qz,
          ...mh.commands,
          ...mP,
          ...Mv,
          ...tP,
          ...az
        },
        queries: {
          ...wz.j,
          ...Gh
        },
        lookups: {
          ...Wz,
          ...qv,
          ...OP.k,
          ...mh.lookups,
          ...Fv,
          ...PP,
          ...xP,
          ...yv
        }
      };

    function fh() {
      (0, pv.i)(sv.o), (0, Sv.p)(mh.feed), (0, Ov.h)(), kz || (kz = !0, (0, sv.m)(Uv.l, (vv => {
        const zv = (0, xv.f)(Uv.l, vv);
        "string" === typeof zv && Promise.resolve().then((() => Pv(3407))).then((vv => {
          let {
            onCosmeticPackGranted: Pv
          } = vv;
          Pv(zv)
        }))
      })), (0, sv.m)(Uv.pb, (vv => {
        const zv = (0, xv.f)(Uv.pb, vv);
        "number" === typeof zv && Nv.j.zC("serverUpdating", Date.now() + zv, !0)
      })), (0, sv.m)(Uv.Q, (vv => {
        const zv = (0, xv.f)(Uv.Q, vv);
        if ((0, xv.d)(zv)) {
          const {
            CP: vv,
            iP: Pv
          } = zv;
          (0, oz.c)({
            CP: "string" === typeof vv ? vv : null,
            iP: "string" === typeof Pv ? Pv : null
          })
        }
      })), (0, sv.m)(lv.Xb.NewUiRequest, (vv => {
        const zv = (0, xv.j)(vv);
        (0, xv.d)(zv) && "number" === typeof zv.id && (0, xv.d)(zv.clientParameters) && (0, bz.d)(zv.id, zv.clientParameters)
      })), (0, sv.m)(Uv.hb, (vv => {
        const zv = (0, xv.f)(Uv.hb, vv);
        "number" === typeof zv && (0, bz.g)(zv)
      })), (0, sv.l)(bz.b), (0, sv.m)(lv.Xb.UiRequestPopup, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv) && "number" === typeof zv.id && "string" === typeof zv.text) {
          const vv = zv.id;
          (0, bz.k)(vv, zv.text, (zv => {
            rz.answerUiRequest({
              id: vv,
              Nl: zv
            })
          }))
        }
      })), (0, sv.m)(lv.Xb.TopRightHelper, (vv => {
        const zv = (0, xv.j)(vv);
        void 0 !== zv && Nv.j.zC("TopRightHelper", zv, !0)
      })), (0, sv.m)(lv.Xb.TaskProgress, (vv => {
        const zv = (0, xv.j)(vv);
        (0, xv.d)(zv) && "string" === typeof zv.taskId && "number" === typeof zv.progress && (0, Ez.b)({
          taskId: zv.taskId,
          progress: zv.progress
        })
      }))), jP || (jP = !0, (0, sv.m)(Uv.w, (vv => {
        const zv = (0, xv.f)(Uv.w, vv);
        (0, xv.d)(zv) && Nv.j.zC("showShopFromServer", {
          toggle: zv.gz,
          pz: zv.pz
        }, !0)
      })), (0, sv.m)(lv.Xb.OverShopInfo, (vv => {
        const zv = (0, xv.j)(vv);
        (0, xv.d)(zv) && Nv.j.zC("overShopInfo", zv.info, !0)
      })), (0, sv.m)(lv.Xb.ShowShopTutorial, (() => {
        Nv.j.zC("showShopTutorial", null, !0)
      }))), cP || (cP = !0, (0, sv.i)((() => {
        var vv;
        (0, aP.J)(), null === (vv = GP) || void 0 === vv || vv(), GP = (0, sv.e)() ? (0, CP.h)(sv.e) : null
      })), (0, sv.m)(lv.Xb.SetCookie, (vv => {
        const zv = (0, xv.j)(vv),
          Pv = (0, tz.c)().gameNameWithVariation;
        (0, xv.d)(zv) && "string" === typeof zv.key && null !== Pv && (0, sP.setCookie)(Pv, zv.key, zv.value)
      })), (0, sv.m)(lv.Xb.LeaveValues, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv) && "string" === typeof zv.leaveEventType) {
          const {
            leaveEventType: vv,
            category: Pv,
            subCategory: hv,
            value: Sv
          } = zv;
          (0, aP.M)({
            leaveEventType: vv,
            category: Pv,
            subCategory: hv,
            value: Sv
          })
        }
      })), (0, sv.m)(lv.Xb.CustomAnalyticsEvent, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv) && "string" === typeof zv.cat1) {
          const {
            cat1: vv,
            cat2: Pv,
            cat3: hv,
            value: Sv
          } = zv;
          (0, aP.t)({
            cat1: vv,
            cat2: Pv,
            cat3: hv,
            value: Sv
          })
        }
      })), (0, sv.m)(lv.Xb.ProgressionEvent, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv)) {
          const {
            type: vv,
            location1: Pv,
            location2: hv,
            location3: Sv,
            score: ev
          } = zv;
          (0, aP.z)({
            type: vv,
            location1: Pv,
            location2: hv,
            location3: Sv,
            score: ev
          })
        }
      })), (0, sv.m)(lv.Xb.ResourceEvent, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv)) {
          const {
            type: vv,
            resourceType: Pv,
            amount: hv,
            category: Sv,
            itemName: ev
          } = zv;
          (0, aP.D)({
            type: vv,
            resourceType: Pv,
            amount: hv,
            category: Sv,
            itemName: ev
          })
        }
      })), (0, sv.m)(lv.Xb.LeaderboardResponse, (vv => {
        const zv = (0, xv.j)(vv);
        if ((0, xv.d)(zv)) {
          const {
            category: vv,
            timeframe: Pv,
            data: hv
          } = zv;
          Nv.j.zC("leaderboardResponse", {
            category: vv,
            timeframe: Pv,
            data: hv
          })
        }
      })), (0, sv.m)(Uv.G, (vv => {
        const zv = (0, xv.f)(Uv.G, vv);
        "string" === typeof zv && (0, iP.c)(vv.conn, zv)
      })), (0, sv.m)(Uv.I, (vv => {
        const zv = (0, xv.f)(Uv.I, vv);
        "string" === typeof zv && console.error(`[logErrorToConsole]: ${zv}`)
      }))), Qv(), (0, OP.b)(), Iz || (Iz = !0, (0, sv.m)(Uv.h, (vv => {
        const zv = (0, xv.f)(Uv.h, vv);
        void 0 !== zv && (0, qz.h)(zv)
      }))), Jz(), Kz(), Ev || (Ev = !0, (0, ev.o)(ov)), hv.gameBridge.attach(jh), (0, hv.installPageSources)({
        commands: {
          ...hv.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: IP.g
        },
        queries: ah,
        lookups: {
          ...hv.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...sh,
          Wm: IP.e,
          drawCallStats: QP.g
        }
      }), (0, qP.e)(), gh()
    }
  },
  40042: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => dv,
      d: () => pv,
      g: () => Nv
    });
    var hv = Pv(1889);
    let Sv = null,
      ev = 0;
    const gv = new Set;

    function pv() {
      return Sv
    }

    function dv() {
      return ev
    }

    function Nv(vv) {
      Sv = vv, ev++, (0, hv.e)();
      for (const zv of gv) zv()
    }

    function lv(vv) {
      gv.add(vv)
    }
  },
  40047: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      e: () => pv
    });
    var hv = Pv(40054);
    let Sv = null,
      ev = null;

    function gv() {
      return Sv ??= Pv.e(59).then((() => Pv(41959))).catch((vv => {
        throw Sv = null, vv
      })), Sv
    }

    function pv() {
      return ev ??= Promise.all([gv(), (0, hv.h)()]).then((vv => {
        let [zv] = vv;
        return zv
      }), (vv => {
        throw ev = null, vv
      })), ev
    }
  },
  36568: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    const hv = {
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
  36372: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      c: () => ev,
      d: () => Wv,
      g: () => pv,
      j: () => dv,
      n: () => Nv,
      r: () => Tv,
      s: () => lv,
      v: () => gv
    });
    var hv = Pv(1226);
    let Sv = function(vv) {
        return vv[vv.Join = 0] = "Join", vv[vv.Leave = 1] = "Leave", vv[vv.Push = 2] = "Push", vv[vv.Cursor = 3] = "Cursor", vv[vv.Submit = 4] = "Submit", vv[vv.ReloadAsVariation = 5] = "ReloadAsVariation", vv[vv.CreateFile = 6] = "CreateFile", vv[vv.RenameFile = 7] = "RenameFile", vv[vv.DeleteFile = 8] = "DeleteFile", vv[vv.SetEngine = 9] = "SetEngine", vv[vv.RenameFolder = 10] = "RenameFolder", vv
      }({}),
      ev = function(vv) {
        return vv[vv.Joined = 0] = "Joined", vv[vv.Updates = 1] = "Updates", vv[vv.Presence = 2] = "Presence", vv[vv.RemoteCursor = 3] = "RemoteCursor", vv[vv.ForceClose = 4] = "ForceClose", vv[vv.LobbyFilesChanged = 5] = "LobbyFilesChanged", vv[vv.EngineSettings = 6] = "EngineSettings", vv
      }({});

    function gv(vv) {
      return "lobby" === vv.kind ? `lobby:${vv.path}` : `codeBlock:${vv.pos[0]},${vv.pos[1]},${vv.pos[2]}`
    }

    function pv(vv) {
      if ("lobby" === vv) return {
        kind: "lobby",
        path: hv.i
      };
      if (vv.startsWith("lobby:")) {
        const zv = vv.slice(6);
        return Tv(zv) ? {
          kind: "lobby",
          path: zv
        } : null
      }
      const zv = vv.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zv ? {
        kind: "codeBlock",
        pos: [parseInt(zv[1]), parseInt(zv[2]), parseInt(zv[3])]
      } : null
    }

    function dv(vv) {
      return vv.endsWith(".d.ts")
    }

    function Nv(vv) {
      return vv.endsWith(".ts") && !dv(vv)
    }
    const lv = 64;

    function Tv(vv) {
      if (!vv || vv !== vv.trim()) return !1;
      if (vv.length > lv) return !1;
      if (vv.startsWith("/") || vv.includes("\\") || vv.includes("\0")) return !1;
      if (!dv(vv) && !Nv(vv) && ! function(vv) {
          return vv.endsWith(".js") && !vv.endsWith(".min.js") && !vv.endsWith(".bundle.js")
        }(vv)) return !1;
      const zv = vv.split("/");
      for (const Pv of zv)
        if ("" === Pv || "." === Pv || ".." === Pv) return !1;
      return !0
    }
    const Wv = 14e3
  },
  38566: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      f: () => Sv
    });
    const hv = ["description", "label"];

    function Sv(vv) {
      const zv = vv.type;
      return {
        type: zv,
        params: vv[zv]
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);