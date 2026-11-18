export const id = 43;
export const ids = [43];
export const modules = {
  38230: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      d: () => fy,
      f: () => hy
    });
    const Uy = 6e3;

    function hy(yb, bb) {
      return [Math.floor(yb[0] / bb) * bb, Math.floor(yb[1] / bb) * bb, Math.floor(yb[2] / bb) * bb]
    }

    function fy(yb) {
      const bb = (null !== yb && void 0 !== yb ? yb : "").match(/-?\d+(?:\.\d+)?/g);
      return bb && bb.length >= 3 ? [Number(bb[0]), Number(bb[1]), Number(bb[2])] : null
    }

    function Zy(yb, bb) {
      return yb === bb ? String(yb) : `${yb}-${bb}`
    }

    function cb(yb, bb, Wy, Uy) {
      const hy = [];
      let fy = new Map;
      for (let Zy = yb[2]; Zy < yb[2] + bb; Zy++) {
        const cb = new Map;
        let Py = yb[0];
        for (; Py < yb[0] + bb;) {
          const hy = Uy(Py, Wy, Zy);
          let oy = Py;
          for (; oy + 1 < yb[0] + bb && Uy(oy + 1, Wy, Zy) === hy;) oy++;
          if (null !== hy) {
            const yb = `${Py} ${oy} ${hy}`,
              bb = fy.get(yb);
            bb ? (bb.z1 = Zy, fy.delete(yb), cb.set(yb, bb)) : cb.set(yb, {
              x0: Py,
              x1: oy,
              z0: Zy,
              z1: Zy,
              name: hy
            })
          }
          Py = oy + 1
        }
        hy.push(...fy.values()), fy = cb
      }
      return hy.push(...fy.values()), hy.sort(((yb, bb) => yb.z0 - bb.z0 || yb.x0 - bb.x0)).map((yb => `x${Zy(yb.x0,yb.x1)} z${Zy(yb.z0,yb.z1)} ${yb.name}`))
    }

    function Py(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Uy;
      const Py = [yb[0] + bb - 1, yb[1] + bb - 1, yb[2] + bb - 1],
        oy = null !== hy && hy.every(((bb, Wy) => Math.floor(bb) >= yb[Wy] && Math.floor(bb) <= Py[Wy])),
        By = [`The chunk from ${yb.join(" ")} to ${Py.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== hy && By.push(`The player's feet are at ${hy.map(Math.floor).join(" ")}, ${oy?"in this chunk":"outside this chunk"}.`);
      const Ky = [];
      for (let Uy = yb[1]; Uy <= Py[1]; Uy++) {
        const hy = cb(yb, bb, Uy, Wy).join("; "),
          fy = Ky[Ky.length - 1];
        (null === fy || void 0 === fy ? void 0 : fy.boxes) === hy ? fy.to = Uy : Ky.push({
          from: Uy,
          to: Uy,
          boxes: hy
        })
      }
      const ey = Ky.filter((yb => "" !== yb.boxes));
      0 === ey.length && By.push("It is all air.");
      let qb = By.join("\n").length;
      for (const Uy of ey) {
        const yb = `y${Zy(Uy.from,Uy.to)}: ${Uy.boxes}`;
        if (qb += yb.length + 1, qb > fy) {
          By.push(`Cut short: the layers from y${Uy.from} up aren't shown, as there are too many blocks.`);
          break
        }
        By.push(yb)
      }
      return By.join("\n")
    }
  },
  7929: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(19);

    function hy() {
      return !Uy.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35669: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      d: () => fy,
      h: () => hy
    });
    const Uy = [.25, .5, 1, 2, 4, 8, 16];

    function hy(yb, bb) {
      const Wy = Uy;
      let hy = Wy.indexOf(yb);
      return -1 === hy && (hy = Wy.findIndex((bb => bb >= yb)), -1 === hy && (hy = Wy.length - 1)), "up" === bb ? Wy[Math.min(hy + 1, Wy.length - 1)] : Wy[Math.max(hy - 1, 0)]
    }

    function fy(yb) {
      return yb <= Uy[0]
    }

    function Zy(yb) {
      return yb >= Uy[Uy.length - 1]
    }
  },
  37639: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy
    });
    var Uy = Wy(23),
      hy = Wy(1595);

    function fy(yb) {
      let {
        taskId: bb,
        progress: Wy
      } = yb;
      const Uy = hy.c.get("_tasks");
      null !== Uy && void 0 !== Uy && Uy[bb] && hy.c.apply({
        _tasks: {
          ...Uy,
          [bb]: {
            ...Uy[bb],
            progress: Wy
          }
        }
      })
    }
    Uy.g.subscribe("clientTaskProgress", (yb => {
      fy(yb)
    }))
  },
  38204: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => sy,
      l: () => oy,
      n: () => Ky,
      p: () => Py,
      t: () => Zy,
      u: () => By,
      v: () => Sy
    });
    var Uy = Wy(1595),
      hy = Wy(23),
      fy = Wy(1606);
    const Zy = (0, fy.l)((function() {
        var yb, bb, Wy, hy;
        return {
          health: null !== (yb = Uy.c.get("_health")) && void 0 !== yb ? yb : null,
          maxHealth: null !== (bb = Uy.c.get("_totalMaxHealth")) && void 0 !== bb ? bb : null,
          shield: null !== (Wy = Uy.c.get("_shield")) && void 0 !== Wy ? Wy : null,
          maxShield: null !== (hy = Uy.c.get("maxShield")) && void 0 !== hy ? hy : null
        }
      }), [], (0, fy.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      cb = [{
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

    function Py(yb, bb) {
      return cb[(yb ? 2 : 0) + (bb ? 1 : 0)]
    }
    const oy = (0, fy.l)((function() {
      var yb;
      return null !== (yb = Uy.c.get("_aura")) && void 0 !== yb ? yb : null
    }), [], (0, fy.h)("_aura"));

    function By(yb) {
      return {
        watch: bb => (0, hy.h)("shotPlayer", (Wy => {
          let {
            playerId: Uy,
            damage: hy,
            wasCrit: fy,
            distance: Zy
          } = Wy;
          yb(Uy) && bb({
            damage: hy,
            wasCrit: fy,
            distance: Zy
          })
        }))
      }
    }

    function Ky(yb) {
      return (0, fy.b)("chat", (bb => {
        let {
          serverChatMsgId: Wy,
          content: Uy,
          chatterEId: hy
        } = bb;
        return {
          serverChatMsgId: null !== Wy && void 0 !== Wy ? Wy : null,
          content: Uy,
          author: hy ? yb(hy) : null
        }
      }))
    }
    class ey {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Wy = this.shown;
        return yb !== this.needed && (this.needed = yb, this.neededSince = bb, null === yb && (this.shown = null)), this.shown !== this.needed && bb - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Wy
      }
    }

    function qb(yb) {
      return [{
        translationKey: `touchKeys:${yb}`
      }]
    }
    const sy = {
      open: qb("open"),
      close: qb("close"),
      milk: qb("milk"),
      shear: qb("shear"),
      tame: qb("tame"),
      feed: qb("feed"),
      ride: qb("ride")
    };

    function Sy(yb) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: yb
      }]
    }
  },
  39258: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      g: () => Zy
    });
    var Uy = Wy(2604);
    let hy = null,
      fy = null;

    function Zy() {
      return fy ??= Wy.e(192).then((() => Wy(35150))).then((yb => {
        let {
          ITEM_SPRITES: bb,
          ITEM_SPRITES_WITHOUT_FILE: Wy,
          ITEM_FILES_WITHOUT_SPRITE: fy
        } = yb;
        hy = function(yb, bb, Wy) {
          const hy = new Set,
            fy = (0, Uy.y)(bb);
          let Zy = 0;
          for (const [Uy, cb] of yb.entries()) Uy === fy[Zy] ? Zy++ : hy.add(cb);
          if ("" !== Wy)
            for (const cb of Wy.split(Uy.r)) hy.add(cb);
          return hy
        }(bb.split(Uy.r), Wy, fy)
      }), (yb => {
        throw fy = null, yb
      })), fy
    }

    function cb(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = hy) || void 0 === Wy ? void 0 : Wy.has(yb)) && void 0 !== bb && bb
    }
  },
  38202: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      return Math.hypot(yb[0] - bb[0], yb[1] - bb[1], yb[2] - bb[2]) < Wy + .5
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  37655: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => By
    });
    var Uy = Wy(1080),
      hy = Wy(1185),
      fy = Wy(19),
      Zy = Wy(1162),
      cb = Wy(1177),
      Py = Wy(1356),
      oy = Wy(35272);

    function By(yb) {
      let {
        E1: bb,
        Y1: Wy
      } = yb;
      const By = null !== bb && void 0 !== bb ? bb : (0, cb.e)().gameNameWithVariation;
      (0, Uy.M)(By) && ((0, oy.m)(), (0, Zy.Y)((() => {
        console.log("Received matchmaking order from game server to game", bb), (0, fy.g)("inGameReplay"), (0, Py.navigatePreserveSearch)((0, hy.b)(By, null !== Wy && void 0 !== Wy ? Wy : void 0))
      }), "video_start"))
    }
  },
  37839: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy
    });
    var Uy = Wy(23),
      hy = Wy(1620);

    function fy(yb) {
      var bb, Wy;
      const fy = (0, hy.o)(null !== (bb = null === (Wy = hy.w.toggleFreeCam) || void 0 === Wy ? void 0 : Wy[0]) && void 0 !== bb ? bb : null);
      Uy.g.EZ("showBottomMessage", {
        message: `Free Camera ${yb?"Enabled":"Disabled"}${fy?` - Press ${fy} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37641: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      d: () => Zy,
      g: () => cb,
      i: () => oy
    });
    var Uy = Wy(23),
      hy = Wy(1207);
    const fy = new Map;

    function Zy(yb, bb) {
      Uy.g.EZ("newUiRequest", {
        id: yb,
        clientParameters: bb
      }, !0)
    }

    function cb(yb) {
      Uy.g.EZ("removeUiRequest", yb, !0);
      const bb = fy.get(yb);
      bb && (bb.tearDownNotification(), fy.delete(yb))
    }

    function Py() {
      Uy.g.EZ("clearUiRequests");
      for (const yb of fy.values()) yb.tearDownNotification();
      fy.clear()
    }

    function oy(yb, bb, Wy) {
      const Uy = hy.NotificationProvider.showPromptPopup({
        title: bb,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      fy.set(yb, Uy), Uy.getResult().then((bb => {
        fy.delete(yb), "notificationTornDown" !== bb && Wy(bb)
      }))
    }
  },
  38222: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky,
      h: () => ey
    });
    var Uy = Wy(167),
      hy = Wy(38230);
    const fy = 20;

    function Zy(yb) {
      return yb.map(Math.floor).join(" ")
    }

    function cb(yb) {
      return null === yb.amount || 1 === yb.amount ? yb.name : `${yb.amount} ${yb.name}`
    }
    var Py = Wy(38233),
      oy = Wy(1595),
      By = Wy(1177);

    function Ky(yb, bb) {
      if (!yb) return Py.b;
      const Wy = yb.playerFeet();
      if (!Wy) return "The player isn't in the world yet, so no blocks can be seen.";
      const fy = Uy.c.DU,
        Zy = (0, hy.f)(null !== bb && void 0 !== bb ? bb : Wy, fy),
        cb = yb.chunkBlocks(Zy);
      return cb ? (0, hy.b)(Zy, fy, ((bb, Wy, Uy) => {
        const hy = cb(bb, Wy, Uy);
        return 0 === hy ? null : yb.blockName(hy).split("|")[0]
      }), Wy) : `The chunk from ${Zy.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Wy.map(Math.floor).join(" ")}.`
    }

    function ey(yb) {
      var bb, Wy, Uy;
      if (!yb) return Py.e;
      const hy = yb.playerFeet();
      if (!hy) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Ky,
        heldSlot: ey
      } = yb.inventory();
      return function(yb) {
        const bb = [];
        null !== yb.game && bb.push(`Game: ${yb.game}.`);
        const Wy = null === yb.health ? "" : `, health ${Math.round(yb.health)}${null===yb.maxHealth?"":` of ${Math.round(yb.maxHealth)}`}`;
        bb.push(`The player (the creator) stands at ${Zy(yb.position)}${Wy}, ${yb.creative?"in":"not in"} creative mode.`);
        const Uy = yb.slots[yb.heldSlot];
        bb.push(Uy ? `Holding (slot ${yb.heldSlot}): ${cb(Uy)}.` : `Holding nothing (slot ${yb.heldSlot} is empty).`);
        const hy = yb.slots.flatMap(((yb, bb) => yb ? [`slot ${bb}: ${cb(yb)}`] : []));
        bb.push(hy.length > 0 ? `Inventory: ${hy.join(", ")}.` : "Inventory: empty.");
        const Py = bb => Math.hypot(bb.position[0] - yb.position[0], bb.position[1] - yb.position[1], bb.position[2] - yb.position[2]),
          oy = [...yb.nearby].sort(((yb, bb) => Py(yb) - Py(bb)));
        if (0 === oy.length) bb.push("No other players or mobs are near enough to see.");
        else {
          bb.push("Near them, nearest first:");
          for (const yb of oy.slice(0, fy)) {
            const Wy = "player" === yb.kind ? `player "${yb.name||"?"}"` : yb.name && yb.name !== yb.kind ? `${yb.kind} "${yb.name}"` : yb.kind,
              Uy = Math.round(Py(yb));
            bb.push(`- ${Wy} at ${Zy(yb.position)}, ${Uy} block${1===Uy?"":"s"} away`)
          }
          oy.length > fy && bb.push(`- and ${oy.length-fy} more further away`)
        }
        return yb.droppedItems > 0 && bb.push(`${yb.droppedItems} dropped item${1===yb.droppedItems?" is":"s are"} on the ground nearby.`), bb.join("\n")
      }({
        game: null !== (bb = (0, By.e)().gameNameWithVariation) && void 0 !== bb ? bb : null,
        position: hy,
        health: null !== (Wy = oy.c.get("_health")) && void 0 !== Wy ? Wy : null,
        maxHealth: null !== (Uy = oy.c.get("_totalMaxHealth")) && void 0 !== Uy ? Uy : null,
        creative: !0 === oy.c.get("creative"),
        heldSlot: ey,
        slots: Ky,
        nearby: yb.nearby(),
        droppedItems: yb.droppedItems()
      })
    }
  },
  37678: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      f: () => Py,
      h: () => oy
    });
    var Uy = Wy(1080),
      hy = Wy(865),
      fy = Wy(35604),
      Zy = Wy(23);

    function cb(yb) {
      let {
        lobbyName: bb,
        gameNameWithVariation: Wy
      } = yb;
      return !(0, Uy.P)(bb) || null !== Wy && (Wy.startsWith("testGym") || (0, hy.p)(Wy))
    }

    function Py(yb) {
      return yb.qY === fy.e.Leave || yb.qY === fy.e.Cursor
    }

    function oy(yb) {
      Zy.g.EZ("codeCollab", {
        type: yb.qY,
        docKey: yb.EM,
        version: yb.mY,
        editorCount: yb.gyy,
        peers: yb.R_,
        updates: yb.XM,
        playerId: yb.vyy,
        playerName: yb.iyy,
        colour: yb.M_,
        anchor: yb.rY,
        head: yb.aY,
        existingCursors: yb.n_,
        files: yb.ryy,
        engineSettings: yb.ayy
      })
    }
  },
  39219: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => Iy,
      D: () => Hy,
      E: () => My,
      H: () => rb,
      J: () => ib,
      K: () => tb,
      N: () => Dy,
      R: () => Xy,
      e: () => wy,
      g: () => Fy,
      j: () => Ry,
      k: () => kb,
      o: () => vb,
      r: () => Oy,
      s: () => ab,
      u: () => Yy,
      v: () => uy,
      y: () => ny
    });
    var Uy = Wy(1239),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(1977),
      cb = Wy(4022),
      Py = Wy(3991);
    let oy, By = !1,
      Ky = !1,
      ey = !1,
      qb = !1;
    const sy = 1300,
      Sy = 3e3;
    let Ey = 0,
      ly = !1,
      mb = !1,
      Cy = 0;
    const Ty = 2;
    let Vy = !1,
      Jy = !1;
    const gb = new Set,
      Gy = new Set;

    function Oy() {
      return By
    }

    function Ry() {
      return mb
    }

    function vb() {
      return Jy
    }

    function ib() {
      return (0, fy.l)() && !Jy
    }

    function My(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (yb !== Jy) {
        Jy = yb;
        for (const yb of [...Gy]) yb(Jy);
        bb && Dy()
      }
    }

    function Yy(yb) {
      return Gy.add(yb), () => {
        Gy.delete(yb)
      }
    }

    function Xy() {
      (0, cb.h)(Zy.v.Menu, (0, fy.l)() ? 0 : Zy.v.Menu)
    }

    function ny() {
      mb = !1, Cy = 0, Xy(), Dy()
    }

    function uy(yb) {
      return gb.add(yb), () => {
        gb.delete(yb)
      }
    }

    function rb(yb) {
      Ky = !1, yb !== By && (By = yb, qb = !1, clearTimeout(oy), ey = !By && Vy, By ? (ly = !1, mb = !1, Cy = 0) : ib() && !Vy && (mb = !0), Vy = !1, By && !ib() && zb(), xb(), ey && Dy())
    }

    function Hy(yb) {
      yb !== ly && (ly = yb, yb || Dy())
    }

    function ab() {
      Ky = !1, qb || !0 !== Qy() || (qb = !0, clearTimeout(oy), oy = setTimeout(py, sy))
    }

    function Fy() {
      return (!Ky || performance.now() - Ey > Sy) && (Ky = (0, Py.M)().lockPointer(), Ey = performance.now()), Ky
    }

    function py() {
      Ly() && jb() && Fy()
    }

    function Ly() {
      return ib() && !By && !ly && !(0, Uy.f)()
    }

    function Qy() {
      var yb;
      return "undefined" === typeof navigator || null === (yb = navigator.userActivation) || void 0 === yb ? void 0 : yb.isActive
    }

    function jb() {
      return ey && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Qy()
    }

    function Dy() {
      ib() ? Ly() && !mb && jb() && Fy() : By && !Vy && zb()
    }

    function tb() {
      mb ? navigator.vendor.startsWith("Apple") ? Ny() : Cy = Ty : Dy()
    }

    function wy() {
      Cy > 0 && 0 === --Cy && Ny()
    }

    function kb() {
      Cy = 0
    }

    function Ny() {
      Ly() && !0 === Qy() && Fy()
    }

    function zb() {
      Vy = !0, (0, Py.M)().unlockPointer()
    }

    function Iy() {
      Ky = !1, ey = !1, qb = !1, clearTimeout(oy), ly = !1, mb = !1, Cy = 0, Vy = !1;
      const yb = By;
      By = !1, yb && xb()
    }

    function xb() {
      for (const yb of [...gb]) yb(By);
      hy.g.EZ("pointerLockUpdate", By)
    }
  },
  39192: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      g: () => cb,
      h: () => Ky,
      l: () => oy,
      m: () => Zy,
      n: () => By,
      o: () => Py
    });
    let Uy = null,
      hy = null,
      fy = null;

    function Zy(yb) {
      Uy = yb
    }

    function cb() {
      return Uy
    }

    function Py(yb) {
      hy = yb
    }

    function oy() {
      return hy
    }

    function By(yb) {
      fy = yb
    }

    function Ky() {
      return fy
    }

    function ey() {
      var yb, bb;
      return !0 === (null === (yb = hy) || void 0 === yb || null === (bb = yb.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
    }
  },
  39241: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadIcons: () => vb,
      setIconFileOverrides: () => ib,
      wasmIconLookups: () => Fy,
      wasmIconQueries: () => ab
    });
    var Uy = Wy(3707),
      hy = Wy(3685),
      fy = Wy(39247),
      Zy = Wy(1583),
      cb = Wy(1572),
      Py = Wy(2597),
      oy = Wy(2604);
    let By = null,
      Ky = null;

    function ey(yb) {
      const bb = yb.startsWith(oy.k),
        [Wy, Uy = Wy, hy = Wy] = (bb ? yb.slice(oy.k.length) : yb).split(oy.j);
      return {
        top: Wy,
        left: Uy,
        right: hy,
        half: bb
      }
    }

    function qb(yb) {
      const bb = null === By ? void 0 : (0, Py.b)(yb),
        Wy = void 0 === bb ? 0 : By.codes[bb];
      return 0 === Wy ? void 0 : By.pool[Wy - 1]
    }
    var sy = Wy(2591),
      Sy = Wy(3676),
      Ey = Wy(3705),
      ly = Wy(39250);
    const mb = "item:";
    let Cy = null,
      Ty = null,
      Vy = null,
      Jy = null,
      gb = !1,
      Gy = !1,
      Oy = null,
      Ry = 0;

    function vb() {
      return Gy || (Gy = !0, (0, Ey.j)().then((yb => {
        yb && (0, Zy.b)()
      }))), Vy ??= Promise.all([(0, sy.d)(), (Ky ??= Wy.e(1).then((() => Wy(41111))).then((yb => {
        let {
          BLOCK_FACE_RUNS: bb,
          BLOCK_FACES: Wy,
          MAX_FACE_ITEM_ID: Uy
        } = yb;
        By = {
          codes: (0, oy.C)(bb, Uy + 1),
          pool: Wy.split(oy.r).map(ey)
        }
      }), (yb => {
        throw Ky = null, yb
      })), Ky), (0, ly.g)(), Wy.e(198).then((() => Wy(35464)))]).then((yb => {
        let [, , bb, Wy] = yb;
        bb.loadBundledTextures(), Cy = bb, Ty = Wy, (0, Zy.b)()
      }), (yb => {
        Vy = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", yb)
      })), Vy
    }

    function ib(yb) {
      Oy = yb, Ry++, (0, Zy.b)()
    }

    function My(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = Oy) || void 0 === Wy ? void 0 : Wy.itemSprite(yb)) && void 0 !== bb ? bb : Cy.itemSpriteUrl(yb)
    }

    function Yy(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = Oy) || void 0 === Wy ? void 0 : Wy.blockTexture(yb)) && void 0 !== bb ? bb : Cy.blockTextureUrl(yb)
    }

    function Xy(yb) {
      var bb;
      return null !== (bb = (0, sy.c)(yb)) && void 0 !== bb ? bb : yb
    }

    function ny(yb, bb) {
      var Wy, Uy, hy;
      return null !== (Wy = null !== (Uy = null !== (hy = Yy(yb)) && void 0 !== hy ? hy : null === bb || void 0 === bb ? void 0 : bb.rotated[yb]) && void 0 !== Uy ? Uy : null === bb || void 0 === bb ? void 0 : bb.animated[yb]) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
    }

    function uy(yb) {
      return void 0 !== (0, Py.b)(yb) ? yb : /^[1-9][0-9]*$/.test(yb) ? (0, Py.c)(Number(yb)) : void 0
    }

    function rb(yb) {
      var bb;
      if (yb.startsWith(mb)) {
        var Wy;
        const bb = (0, sy.c)(yb.slice(5));
        return null !== (Wy = void 0 === bb ? null : My(bb)) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
      }
      return null !== (bb = Cy.particleUrl(yb)) && void 0 !== bb ? bb : Cy.notFoundUrl()
    }

    function Hy(yb, bb) {
      return "StairsBlock" === yb ? yb : bb ? "SlabBlock" : "CubeBlock"
    }
    const ab = {
        async blockIcon(yb) {
          var bb;
          let {
            name: Uy,
            size: hy,
            lineWidth: fy
          } = yb;
          await vb();
          const cb = null !== (bb = uy(Uy)) && void 0 !== bb ? bb : Uy,
            oy = (0, Ey.d)(cb, hy, fy);
          if (null !== oy) return oy;
          const By = qb(cb),
            Ky = (0, Py.b)(cb),
            ey = void 0 === Ky || null === Ty ? void 0 : Ty.itemTypeNameOf(Ky);
          if (null === Cy || void 0 === By) return "";
          const sy = [By.top, By.left, By.right].some((yb => null === Yy(yb))),
            ly = sy ? await (Jy ??= Wy.e(186).then((() => Wy(33215))).then((yb => (gb && (gb = !1, (0, Zy.b)()), {
              rotated: yb.rotatedBlockTextures,
              animated: yb.animatedBlockTextures
            })), (yb => (Jy = null, gb = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", yb), null))), Jy) : null;
          if (sy && null === ly) return "";
          const mb = {
              top: ny(By.top, ly),
              left: ny(By.left, ly),
              right: ny(By.right, ly),
              itemType: Hy(ey, By.half)
            },
            Vy = 0 === Ry ? cb : `${cb}#${Ry}`;
          return (await (0, Sy.b)()).drawBlockIconUrl(Vy, hy, fy, (() => mb))
        }
      },
      Fy = {
        itemIcon: function(yb) {
          var bb, Wy;
          if (null === Cy) return vb(), cb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(yb);
          if ((0, hy.k)(yb)) return {
            kind: "icon",
            url: null !== (Wy = Cy.ingameIconUrl(yb)) && void 0 !== Wy ? Wy : Cy.notFoundUrl()
          };
          if (yb.startsWith(hy.e)) return {
            kind: "icon",
            url: rb(yb.slice(hy.e.length))
          };
          if (0 === (0, Py.e)()) return (0, fy.d)(), cb.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(yb);
          const Zy = null !== (bb = uy(yb)) && void 0 !== bb ? bb : yb,
            oy = (0, Py.b)(Zy),
            By = void 0 === oy ? void 0 : Ty.itemTypeNameOf(oy);
          if (void 0 !== qb(Zy)) return {
            kind: "drawnBlock"
          };
          const Ky = function(yb) {
            var bb;
            return null !== (bb = My(Xy(yb))) && void 0 !== bb ? bb : Cy.notFoundUrl()
          }(Zy);
          if ((0, Ey.f)(Zy) && ! function(yb) {
              return null !== Oy && (null !== Oy.itemSprite(Xy(yb)) || null !== Oy.model(yb))
            }(Zy)) return {
            kind: "model",
            url: Ky
          };
          if ("Gun" === By) return {
            kind: "gun",
            url: Ky
          };
          if (void 0 !== oy && "GrayscaleArmour" === Ty.itemTypeOf(oy) || Object.hasOwn(Uy.d, Zy)) {
            var ey;
            const bb = null !== (ey = (0, Uy.e)(yb)) && void 0 !== ey ? ey : (0, Uy.e)(Zy);
            if (bb) return {
              kind: "item",
              url: Ky,
              tint: bb
            }
          }
          return {
            kind: "item",
            url: Ky
          }
        },
        hasIcon: function(yb) {
          return void 0 !== uy(yb) || (0, hy.k)(yb) || yb.startsWith(hy.e)
        },
        isItemName: function(yb) {
          return void 0 !== uy(yb)
        }
      }
  },
  39184: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      attachPlayGameSources: () => YW,
      playGameSources: () => MW
    });
    var Uy = Wy(1572),
      hy = Wy(39192),
      fy = Wy(3991),
      Zy = Wy(39108),
      cb = Wy(39198),
      Py = Wy(38204),
      oy = Wy(23),
      By = Wy(4001),
      Ky = Wy(3996),
      ey = Wy(39139),
      qb = Wy(39168),
      sy = Wy(39204),
      Sy = Wy(39152);
    (0, Sy.j)(By.Tb.Chat, (yb => {
      if (yb.payloadKind !== Ky.Ub.Msgpack) return;
      const bb = function(yb) {
        if (null === yb || "object" !== typeof yb || !("content" in yb)) return null;
        const {
          chatMsgId: bb,
          content: Wy,
          chatterEId: Uy
        } = yb;
        return {
          serverChatMsgId: null !== bb && void 0 !== bb ? bb : void 0,
          content: Wy,
          chatterEId: void 0 === Uy || null === Uy ? void 0 : String(Uy)
        }
      }((0, ey.c)(yb.payload));
      null !== bb && oy.g.EZ("chat", bb, !0)
    }));
    const Ey = {
        chatReceived: (0, Py.n)((function(yb) {
          var bb, Wy, Uy;
          return {
            id: yb,
            name: null !== (bb = sy.f.getName(yb)) && void 0 !== bb ? bb : null,
            local: (0, qb.g)() === yb,
            profileEffect: null !== (Wy = null === (Uy = (0, sy.h)(yb)) || void 0 === Uy ? void 0 : Uy.profileEffect) && void 0 !== Wy ? Wy : null
          }
        }))
      },
      ly = {
        sendChatMessage(yb) {
          var bb;
          let {
            vc: Wy,
            channelName: Uy
          } = yb;
          null === (bb = (0, Zy.i)()) || void 0 === bb || bb.clientApi.sendChat(Wy, Uy)
        }
      };
    var mb = Wy(167),
      Cy = Wy(1595),
      Ty = Wy(39097),
      Vy = Wy(38202);
    const Jy = [0, 0, 0],
      gb = {
        codeBlockClickable(yb) {
          var bb;
          const Wy = (0, Zy.i)();
          if (null === Wy || void 0 === Wy || !Wy.isSessionLive) return !1;
          const Uy = Wy.api;
          if (0 !== (Ty.s.playerFlags(Uy.apiView, 0) & Ty.Od.Crouching)) return !1;
          const hy = Uy.queries.directorEntity(Uy.localId) >= Ty.tb.BYTES ? Uy.memoryData(Uy.scratch(), Ty.tb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === hy) return !1;
          for (let fy = 0; fy < 3; fy++) Jy[fy] = Ty.tb.feet(hy, 0, fy);
          return Jy[1] += Ty.tb.eyeHeight(hy, 0), (0, Vy.d)(Jy, yb, null !== (bb = Cy.c.get("blockReach")) && void 0 !== bb ? bb : mb.c.Jq)
        }
      },
      Gy = {
        clickCodeBlock(yb) {
          var bb;
          null === (bb = (0, Zy.i)()) || void 0 === bb || bb.clickCodeBlock(yb)
        }
      };
    var Oy = Wy(39119),
      Ry = Wy(39210),
      vb = Wy(865),
      ib = Wy(37714),
      My = Wy(3983),
      Yy = Wy(39130),
      Xy = Wy(39113),
      ny = Wy(39136);

    function uy(yb) {
      if (null === yb) return null;
      const bb = [];
      for (const Wy of yb) {
        const yb = Object.keys(Wy)[0];
        if ("LO" === yb) {
          const {
            str: yb,
            style: Uy,
            clickableUrl: hy
          } = Wy.LO, fy = Object.keys(yb)[0], Zy = yb[fy];
          "string" !== fy && "styledEntityName" !== fy && "styledTranslatedText" !== fy || bb.push({
            str: Zy,
            style: Uy,
            clickableUrl: hy
          })
        } else bb.push(Wy[yb])
      }
      return bb
    }
    const rb = {
      screenPos(yb) {
        var bb, Wy;
        return null !== (bb = null === (Wy = (0, Zy.i)()) || void 0 === Wy ? void 0 : Wy.renderFrame.projectWorldPosToScreenPos(yb)) && void 0 !== bb ? bb : {
          x: 0,
          y: 0
        }
      }
    };
    let Hy = !1;

    function ab() {
      Hy || (Hy = !0, (0, Sy.j)(By.Tb.ProgressBarUpdate, (yb => {
        const bb = (0, ny.g)(yb);
        (0, ny.c)(bb) && oy.g.EZ("progressBarUpdate", bb, !0)
      })), (0, Sy.j)(Yy.x, (yb => {
        const bb = (0, ny.e)(Yy.x, yb);
        bb && oy.g.EZ("middleScreenBarInitiate", {
          duration: bb.E9,
          J9: bb.J9,
          horizBarRemOffset: bb.i4
        }, !0)
      })), (0, Sy.j)(By.Tb.RemoveMiddleScreenBar, (() => {
        oy.g.EZ("middleScreenBarRemove")
      })), (0, Sy.j)(Yy.eb, (yb => {
        const bb = (0, ny.e)(Yy.eb, yb);
        if (bb) {
          var Wy;
          const yb = bb.Av ? null === (Wy = (0, Zy.i)()) || void 0 === Wy ? void 0 : Wy.renderFrame.projectDirectionToScreenPos(bb.Av) : void 0;
          oy.g.EZ("sendHitmarker", {
            oN: bb.oN,
            screenPos: yb
          }, !0)
        }
      })), (0, Sy.j)(Yy.jb, (yb => {
        const bb = (0, ny.e)(Yy.jb, yb);
        if (bb) {
          const {
            id: yb,
            position: Wy,
            style: Uy,
            text: hy,
            aby: fy
          } = bb;
          oy.g.EZ("setDirectionArrow", {
            id: yb,
            position: Wy,
            style: Uy,
            text: uy(hy),
            aby: fy
          }, !0)
        }
      })), (0, Sy.j)(Yy.h, (yb => {
        const bb = (0, ny.e)(Yy.h, yb);
        bb && oy.g.EZ("clearDirectionArrow", {
          id: bb.id
        }, !0)
      })), (0, Sy.j)(Yy.r, (yb => {
        const bb = (0, ny.e)(Yy.r, yb);
        bb && oy.g.EZ("flyingMiddleMessage", {
          content: uy(bb.m_),
          v_: bb.v_,
          i_: bb.i_
        }, !0)
      })), (0, Sy.j)(By.Tb.WorldVariation, (yb => {
        const bb = (0, ny.g)(yb);
        if ("string" === typeof bb) {
          const yb = bb === vb.h ? null : {
            message: `Currently loaded as variation: ${bb}`,
            type: "Warning"
          };
          oy.g.EZ("showPermanentBottomMessage", yb, !0)
        }
      })), (0, Sy.j)(Yy.J, (yb => {
        const bb = (0, ny.e)(Yy.J, yb);
        bb && function(yb, bb) {
          const {
            type: Wy,
            params: Uy
          } = (0, ib.g)(bb), hy = {
            ...Uy
          };
          for (const fy of ib.e) hy[fy] && (hy[fy] = uy(hy[fy]));
          My.e.queueQTE(yb, Wy, hy).getResult().then((bb => {
            var Wy;
            "boolean" === typeof bb && (null === (Wy = (0, Zy.i)()) || void 0 === Wy || Wy.send(Xy.d.QteResponse, {
              qteId: yb,
              qteResponse: bb
            }))
          }))
        }(bb.id, bb.J7)
      })), (0, Sy.j)(Yy.V, (yb => {
        const bb = (0, ny.e)(Yy.V, yb);
        "number" === typeof bb && My.e.cancelQTE(bb)
      })), (0, Sy.f)((() => {
        My.e.reset(), oy.g.EZ("showPermanentBottomMessage", null, !0)
      })), (0, Sy.g)((() => {
        My.e.reset()
      })), (0, Sy.j)(By.Tb.EditItemCraftingRecipes, (yb => {
        const bb = (0, ny.g)(yb);
        (0, ny.c)(bb) && oy.g.EZ("craftingRecipesEdited", {
          itemName: bb.craftingRecipeItemName,
          recipesForItem: bb.recipesForItem
        })
      })), (0, Sy.j)(Yy.T, (yb => {
        const bb = (0, ny.e)(Yy.T, yb);
        bb && oy.g.EZ("craftingRecipesEdited", {
          itemName: bb.E8,
          recipesForItem: []
        })
      })))
    }
    var Fy = Wy(37839);
    let py = !1,
      Ly = !1;

    function Qy() {
      const yb = (0, Zy.i)();
      if (null === yb || void 0 === yb || !yb.isSessionLive) return void(py = !1);
      const bb = 0 !== (Ty.s.playerFlags(yb.api.apiView, 0) & Ty.Od.FreeCam);
      bb !== py && (py = bb, (0, Fy.c)(bb))
    }
    var jb = Wy(258),
      Dy = Wy(35746),
      tb = Wy(1606);
    var wy = Wy(39217),
      kb = Wy(39165);
    const Ny = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let zb = "off";

    function Iy(yb) {
      var bb;
      return null === yb ? null : {
        label: null !== (bb = (0, wy.e)(yb, "interactionPrompt")) && void 0 !== bb ? bb : null
      }
    }
    const xb = new Map([
      [Ty.Dc.Open, {
        label: Py.h.open
      }],
      [Ty.Dc.Close, {
        label: Py.h.close
      }],
      [Ty.Dc.Milk, {
        label: Py.h.milk
      }],
      [Ty.Dc.Shear, {
        label: Py.h.shear
      }],
      [Ty.Dc.Tame, {
        label: Py.h.tame
      }],
      [Ty.Dc.Feed, {
        label: Py.h.feed
      }],
      [Ty.Dc.Ride, {
        label: Py.h.ride
      }]
    ]);
    class Ay {
      constructor() {
        this.target = Ny, this.Df = Ty.kd, this.optionName = null, this.pickaxe = new Py.e
      }
      read(yb) {
        var bb;
        const Wy = Ty.s.targetBlockId(yb.api.apiView, 0);
        Wy !== this.Df && (this.Df = Wy, this.optionName = Wy === Ty.kd ? null : `${yb.tables.getMetaInfo(Wy).rootName}CrosshairText`);
        const Uy = null === this.optionName ? null : null !== (bb = yb.tables.getClientOption(this.optionName)) && void 0 !== bb ? bb : null;
        this.pickaxe.update(function(yb, bb) {
          var Wy, Uy, hy;
          if (0 === (Ty.s.playerFlags(yb.api.apiView, 0) & Ty.Od.Breaking) || bb === Ty.kd || 0 === bb) return null;
          const {
            tables: fy
          } = yb;
          if (!0 === fy.getClientOption("creative")) return null;
          const Zy = fy.nameOfId(bb),
            cb = null === (Wy = yb.items.kW()) || void 0 === Wy ? void 0 : Wy.name,
            Py = null !== (Uy = fy.getItemStat(Zy, "harvestLevel")) && void 0 !== Uy ? Uy : 0;
          return (0, jb.vc)({
            blockHarvestType: fy.getDefaultItemStat(Zy, "harvestType"),
            blockHarvestLevel: fy.getDefaultItemStat(Zy, "harvestLevel"),
            harvestLevel: Py,
            heldToolType: void 0 === cb ? void 0 : fy.getDefaultItemStat(cb, "harvests"),
            heldToolLevel: void 0 === cb ? void 0 : fy.getDefaultItemStat(cb, "level")
          }) && null !== (hy = Dy.p[Py]) && void 0 !== hy ? hy : null
        }(yb, Wy)), yb.watchPromptPick(zb);
        const hy = "touch" === zb ? function(yb) {
          var bb;
          const Wy = yb.interactLabel;
          return Wy === Ty.Dc.Entity ? Iy(yb.promptEntity) : Wy === Ty.Dc.TameWith ? {
            label: (0, Py.v)(yb.tables.nameOfId(yb.interactIcon))
          } : null !== (bb = xb.get(Wy)) && void 0 !== bb ? bb : null
        }(yb) : Iy(yb.promptEntity);
        return this.target = (0, tb.n)(this.target, {
          interactPrompt: hy,
          blockText: Uy,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let dy = null;
    const yW = {
      current: () => {
        var yb, bb;
        return null !== (yb = null === (bb = dy) || void 0 === bb ? void 0 : bb.target) && void 0 !== yb ? yb : Ny
      },
      watch: yb => {
        const bb = new Ay;
        dy = bb;
        const Wy = (0, qb.i)((Wy => {
          let Uy = bb.read(Wy);
          yb(Uy);
          const hy = (0, fy.z)((() => {
            const hy = bb.read(Wy);
            hy !== Uy && (Uy = hy, yb(hy))
          }));
          return () => {
            hy(), Wy.watchPromptPick("off")
          }
        }));
        return () => {
          Wy(), dy === bb && (dy = null)
        }
      }
    };
    let bW = 0,
      Wb = 0;
    const Ub = {
        health: Py.t,
        aura: Py.l,
        hotbar: kb.d.states.hotbar,
        heldItemAim: kb.d.states.heldItemAim,
        crouching: (0, qb.c)((yb => function(yb) {
          const bb = () => 0 !== (Ty.s.playerFlags(yb.apiView, 0) & Ty.Od.Crouching);
          return {
            current: bb,
            watch(yb) {
              let Wy = bb();
              return (0, fy.w)((() => {
                const Uy = bb();
                Uy !== Wy && (Wy = Uy, yb(Uy))
              }))
            }
          }
        }(yb.api).current), !1, (yb => (0, fy.w)(yb))),
        flight: (0, qb.c)((yb => () => function(yb) {
          const bb = Ty.s.playerFlags(yb.apiView, 0);
          return (0, Py.p)(0 !== (bb & Ty.Od.CanFly), 0 !== (bb & Ty.Od.Flying))
        }(yb.api)), (0, Py.p)(!1, !1), (yb => (0, fy.w)(yb))),
        gliderBoostFuel: (0, qb.c)((yb => () => Ty.s.gliderBoostFuel(yb.api.apiView, 0)), 0, (yb => (0, fy.w)(yb))),
        crosshairTarget: yW
      },
      hb = {
        hotbarSlotRequested: kb.d.events.hotbarSlotRequested,
        hotbarScrolled: kb.d.events.hotbarScrolled,
        numberKeyPressed: kb.d.events.numberKeyPressed,
        shotDamageToShow: (0, Py.u)((yb => !0 === (0, wy.e)(yb, "showDamageAmounts")))
      },
      fb = {
        selectHotbarSlot: kb.d.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: yb => {
          zb = yb
        }
      },
      Zb = {
        momentumFrac: function() {
          var yb, bb, Wy;
          const Uy = (0, Zy.i)(),
            hy = performance.now(),
            fy = null === Uy || void 0 === Uy || null === (yb = Uy.items.kW()) || void 0 === yb || null === (bb = yb.attributes) || void 0 === bb || null === (Wy = bb.customAttributes) || void 0 === Wy ? void 0 : Wy.enchantments;
          return bW = null !== Uy && null !== fy && void 0 !== fy && fy.Momentum ? 0 !== (Ty.s.playerFlags(Uy.api.apiView, 0) & Ty.Od.Breaking) ? Math.max(0, Ty.s.momentumFrac(Uy.api.apiView, 0)) : Math.max(0, bW - (hy - Wb) / 1500) : 0, Wb = hy, bW
        }
      };
    var cW = Wy(39102),
      Pb = Wy(1102),
      ob = Wy(19),
      Bb = Wy(35279),
      Kb = Wy(7929),
      eb = Wy(1458),
      qW = Wy(1977),
      sb = Wy(4006);
    let Sb = !1;

    function Eb(yb) {
      Sb = yb
    }

    function lb() {
      "inGame" !== ob.d.get("gameState") || (0, eb.q)() || oy.g.EZ("ctrlCrouchWithoutFullscreen")
    }
    let mW = !1;
    const Cb = {
        OpenEmoteWheel: () => {
          Eb(!0), mW = !0, queueMicrotask((() => {
            mW && (mW = !1, oy.g.EZ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          oy.g.EZ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Bb.e)() || oy.g.EZ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Bb.e)() || oy.g.EZ("XKeyPressed")
        },
        CtrlCrouch: lb,
        "primary-fire": () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      Tb = {
        OpenEmoteWheel: () => {
          Eb(!1), mW ? (mW = !1, (0, Kb.d)() || oy.g.EZ("requestEmoteWheelHoldOpen")) : oy.g.EZ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: lb,
        "primary-fire": () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          oy.g.EZ("mouseState", {
            uL: Pb.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Vb = !1;

    function Jb() {
      Vb || (Vb = !0, (0, sb.k)((yb => {
        if ((0, hy.e)()) return;
        const bb = (0, sb.h)(yb) ? "primary-fire" : yb.action;
        var Wy;
        if (yb.down) {
          if (0 === (yb.flags & qW.b.Synthetic)) {
            var Uy;
            null === (Uy = Cb[bb]) || void 0 === Uy || Uy.call(Cb)
          }
        } else null === (Wy = Tb[bb]) || void 0 === Wy || Wy.call(Tb)
      })))
    }
    var gW = Wy(248),
      Gb = Wy(94),
      Ob = Wy(33),
      Rb = Wy(39219),
      vW = Wy(1177),
      iW = Wy(37678);
    let Mb = !1;
    const Yb = {
      sendCodeCollab(yb) {
        var bb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.CodeCollab, (0, Xy.p)(yb), (0, iW.f)(yb))
      }
    };
    let Xb = null,
      nb = !1,
      ub = null;

    function rW() {
      return "inGame" === ob.d.get("gameState") && !(0, Bb.e)()
    }
    const Hb = {
        OpenInventory: yb => {
          (0, eb.u)(yb, "inventory", (0, cW.k)())
        },
        OpenShop: yb => {
          Xb && rW() && (0, eb.r)(yb, gW.o.SHOP, !Xb.shopIsEmpty(Cy.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: yb => {
          rW() && (0, eb.r)(yb, gW.o.LOBBY_LEADERBOARD, !!Cy.c.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: yb => {
          var bb;
          const Wy = null === (bb = Xb) || void 0 === bb ? void 0 : bb.getClientGameMapKey();
          Wy ? (0, eb.v)(yb, !0, Wy) : (0, eb.u)(yb, "retentionFeatures", !(!Cy.c.get("_tasks") && !Cy.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: yb => {
          (0, eb.u)(yb, "inviteLink", Gb.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: yb => {
          rW() && function(yb) {
            var bb;
            const Wy = (0, Zy.i)(),
              Uy = null !== Wy && void 0 !== Wy && Wy.isSessionLive ? Wy.api : null,
              hy = Uy ? Uy.Tl(Uy.localId) : null,
              fy = null !== (bb = null === hy || void 0 === hy ? void 0 : hy.map((yb => Math.floor(yb)))) && void 0 !== bb ? bb : null;
            (0, eb.v)(yb, null !== fy && (0, iW.e)((0, vW.e)()), (() => {
              oy.g.EZ("EditLobbyCode", fy)
            }))
          }(yb)
        },
        HideUi: () => {
          oy.g.EZ("showUi", !1)
        }
      },
      aW = {
        HideUi: () => {
          oy.g.EZ("showUi", !0)
        }
      };

    function Fb() {
      nb || (nb = !0, Wy.e(144).then((() => Wy(41092))).then((yb => {
        Xb = yb
      }), (yb => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", yb)
      })), (0, Rb.v)((yb => {
        yb || !(0, Rb.j)() || (0, Gb.isMobile)() || !Ob.e.getItem("disableFullscreen") || (0, eb.n)() || ob.d.set({
          openEverythingMenuName: gW.o.SETTINGS
        })
      })), (0, sb.k)((yb => {
        let {
          action: bb,
          down: Wy,
          press: Uy
        } = yb;
        var fy, Zy;
        (0, hy.e)() || (Wy ? null === (fy = Hb[bb]) || void 0 === fy || fy.call(Hb, function(yb) {
          var bb;
          if (0 === yb || (null === (bb = ub) || void 0 === bb ? void 0 : bb.press) !== yb) {
            const bb = {
              press: yb,
              event: new Event("inputAction")
            };
            ub = bb, queueMicrotask((() => {
              ub === bb && (ub = null)
            }))
          }
          return ub.event
        }(Uy)) : null === (Zy = aW[bb]) || void 0 === Zy || Zy.call(aW))
      })))
    }
    var pb = Wy(37639),
      Lb = Wy(37655),
      Qb = Wy(37641);
    const jW = {
      completeTask(yb) {
        var bb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.CompleteTask, (0, Xy.t)(yb))
      },
      setServerCookie(yb) {
        var bb;
        let {
          key: Wy,
          value: Uy
        } = yb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.GeneralCookieSet, (0, Xy.v)({
          HL: Wy,
          wL: Uy
        }))
      },
      answerUiRequest(yb) {
        var bb;
        let {
          id: Wy,
          Ul: Uy
        } = yb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.UiRequestResp, (0, Xy.U)({
          xG: Wy,
          WG: Uy,
          hG: 5
        }))
      },
      chooseRewardedAd(yb) {
        var bb;
        let {
          id: Wy,
          Ul: Uy
        } = yb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.UiRequestResponded, (0, Xy.Q)({
          id: Wy,
          Ul: Uy
        }))
      },
      requestLeaderboard(yb) {
        var bb;
        let {
          category: Wy,
          timeframe: Uy,
          seeTop: hy
        } = yb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.LeaderboardRequest, {
          category: Wy,
          timeframe: Uy,
          seeTop: hy
        })
      }
    };
    let Db = !1;
    const tW = mb.c.hq / 2,
      wb = [tW, -tW, -tW, -tW, tW, tW, -tW, tW],
      kW = [0, 0, 0];

    function Nb(yb, bb, Wy) {
      for (let Uy = 0; Uy < yb.length; Uy += 2)
        if (yb[Uy] === bb && yb[Uy + 1] === Wy) return !0;
      return !1
    }
    const zW = {
      blocksStandingOn: function() {
        const yb = (0, Zy.i)();
        if (null === yb) return [];
        const {
          api: bb,
          chunks: Wy,
          tables: Uy
        } = yb;
        if (!bb.readPosition(bb.localId, kW)) return [];
        const [hy, fy, cb] = kW, Py = Math.ceil(fy) - 1, oy = [], By = [];
        for (let Zy = 0; Zy < wb.length; Zy += 2) {
          const yb = hy + wb[Zy],
            bb = cb + wb[Zy + 1];
          if (Number.isInteger(yb) || Number.isInteger(bb)) continue;
          const fy = Math.floor(yb),
            Ky = Math.floor(bb);
          if (Nb(By, fy, Ky)) continue;
          const ey = Wy.Df(fy, Py, Ky);
          Uy.isSolidBlockId(ey) && (By.push(fy, Ky), oy.push(Uy.nameOfId(ey)))
        }
        return oy
      },
      dropAhead: function() {
        const yb = (0, Zy.i)();
        return null !== yb && 0 !== (Ty.s.playerFlags(yb.api.apiView, 0) & Ty.Od.DropAhead)
      }
    };
    var Ib = Wy(35669),
      xW = Wy(37752),
      Ab = Wy(1207),
      db = Wy(39177);
    const yU = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      bU = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function WW() {
      const yb = new Set;
      return {
        add: bb => (yb.add(bb), () => {
          yb.delete(bb)
        }),
        fire() {
          for (const bb of yb) bb()
        }
      }
    }
    const UW = Object.freeze([]);

    function hW(yb, bb) {
      let Wy, {
        rereads: Uy,
        followLocalId: hy
      } = bb;
      const Zy = () => (Wy = (0, tb.n)(Wy, yb()), Wy);
      return {
        current: Zy,
        watch(yb) {
          const bb = (0, sy.c)((bb => {
            Uy(bb) && yb(Zy())
          }));
          if (!hy) return bb;
          let Wy = (0, qb.g)();
          const cb = (0, fy.z)((() => {
            const bb = (0, qb.g)();
            bb !== Wy && (Wy = bb, yb(Zy()))
          }));
          return () => {
            bb(), cb()
          }
        }
      }
    }
    const fW = {
        players: hW((function() {
          const yb = sy.f.ids(),
            bb = {};
          for (const fy of yb) {
            var Wy, Uy, hy;
            bb[fy] = {
              name: null !== (Wy = sy.f.getName(fy)) && void 0 !== Wy ? Wy : null,
              ranks: null !== (Uy = sy.f.getSetting(fy, "ranks")) && void 0 !== Uy ? Uy : UW,
              cosmetics: null !== (hy = (0, sy.h)(fy)) && void 0 !== hy ? hy : null
            }
          }
          return {
            ids: yb,
            byId: bb,
            localId: (0, qb.g)()
          }
        }), {
          rereads: yb => "roster" !== yb.kind || yb.members || yb.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: hW((function() {
          const yb = {};
          for (const hy of sy.f.ids()) {
            var bb, Wy, Uy;
            yb[hy] = {
              colour: null !== (bb = sy.f.getSetting(hy, "colorInLobbyLeaderboard")) && void 0 !== bb ? bb : null,
              values: null !== (Wy = sy.f.getSetting(hy, "lobbyLeaderboardValues")) && void 0 !== Wy ? Wy : null,
              tags: null !== (Uy = sy.f.getSetting(hy, "lobbyLeaderboardTags")) && void 0 !== Uy ? Uy : null
            }
          }
          return yb
        }), {
          rereads: function(yb) {
            if ("roster" !== yb.kind) return "reset" === yb.kind;
            const {
              members: bb,
              settings: Wy
            } = yb;
            return bb || Wy.has("colorInLobbyLeaderboard") || Wy.has("lobbyLeaderboardValues") || Wy.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      ZW = {
        cosmeticsUpdated: {
          watch: yb => (0, sy.c)((bb => {
            if ("cosmetics" !== bb.kind) return;
            const Wy = (0, qb.g)();
            yb(bb.updates.map((yb => {
              let {
                lyy: bb,
                Kl: Uy,
                qm: hy
              } = yb;
              return {
                local: bb === Wy,
                Kl: Uy,
                qm: hy
              }
            })))
          }))
        }
      };
    var cU = Wy(2293),
      PW = Wy(1496),
      oW = Wy(942),
      BW = Wy(39226);
    let KW = !1,
      eW = null;
    const qU = {
      setShopOpen(yb) {
        var bb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.ShopMenuChanged, (0, Xy.N)(yb))
      },
      buyShopItem(yb) {
        var bb;
        let {
          categoryKey: Wy,
          itemKey: Uy,
          userInput: hy
        } = yb;
        null === (bb = (0, Zy.i)()) || void 0 === bb || bb.send(Xy.d.ItemBought, {
          categoryKey: Wy,
          itemKey: Uy,
          shopVersion: Cy.c.get("_shopVersion"),
          userInput: hy
        })
      }
    };
    let sW = !1;
    var SW = Wy(4022);
    const EW = qW.v.LookFrozen | qW.v.ClicksSuppressed;

    function lW(yb, bb) {
      var Wy;
      null !== (Wy = (0, Zy.i)()) && void 0 !== Wy && Wy.send(yb, bb) || console.warn(`[bloxd-wasm-client] message ${yb} not sent: no live game or the core's command ring is full`)
    }(0, Sy.j)(Yy.kb, (yb => {
      const bb = (0, ny.e)(Yy.kb, yb);
      void 0 !== bb && oy.g.EZ("setDiscordReportKey", bb)
    }));
    const mU = {
      ignorePlayer(yb) {
        lW(Xy.d.IgnoreUser, (0, Xy.x)({
          JY: yb
        }))
      },
      reportPlayer(yb) {
        let {
          playerId: bb,
          chatMsgId: Wy,
          CU: Uy,
          details: hy
        } = yb;
        lW(Xy.d.UserReport, (0, Xy.db)({
          QF: bb,
          kp: Wy,
          CU: Uy,
          pR: hy
        }))
      },
      reportWorldCodeChat(yb) {
        let {
          chatMsgId: bb,
          CU: Wy,
          details: Uy
        } = yb;
        lW(Xy.d.UserReport, (0, Xy.db)({
          QF: "",
          kp: bb,
          CU: Wy,
          pR: Uy
        }))
      },
      requestDiscordReportKey(yb) {
        lW(Xy.d.ReqDiscordReportKey, (0, Xy.H)(yb))
      },
      reportLobbyOrGame(yb) {
        let {
          target: bb,
          CU: Wy,
          details: Uy
        } = yb;
        "customGame" === bb ? lW(Xy.d.CustomGameReport, (0, Xy.u)({
          CU: Wy,
          pR: Uy
        })) : lW(Xy.d.LobbyReport, (0, Xy.z)({
          CU: Wy,
          pR: Uy
        }))
      },
      updateMyCosmetic(yb) {
        lW(Xy.d.UpdateMyCosmetic, (0, Xy.ab)(yb))
      },
      holdEmoteWheel(yb) {
        !yb || Sb ? (0, SW.h)(EW, yb ? EW : 0) : oy.g.EZ("requestEmoteWheelHoldRelease")
      }
    };
    var CW = Wy(39231),
      TW = Wy(1583),
      VW = Wy(39233);

    function JW() {
      const yb = (0, Zy.i)();
      return !0 === (null === yb || void 0 === yb ? void 0 : yb.isCoreRunning) ? function(yb) {
        if (yb.queries.drawCensus() < Ty.Cb.BYTES) return [];
        const bb = yb.memoryData(yb.scratch(), Ty.Cb.BYTES, 4, "the draw census");
        if (null === bb) return [];
        const Wy = Ty.Cb.terrainOpaque(bb, 0),
          Uy = Ty.Cb.terrainTransparent(bb, 0),
          hy = Ty.Cb.earthSky(bb, 0),
          fy = Ty.Cb.skyMeshes(bb, 0),
          Zy = Ty.Cb.regular(bb, 0),
          cb = Ty.Cb.thin(bb, 0),
          Py = Ty.Cb.line(bb, 0),
          oy = Ty.Cb.text(bb, 0),
          By = Ty.Cb.particles(bb, 0);
        return [{
          label: "Drawn",
          value: `${Wy+Uy+hy+fy+Zy+cb+Py+oy+By}`
        }, {
          label: "Terrain",
          value: `${Wy} opaque / ${Uy} transparent (${Ty.Cb.terrainPack(bb,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Zy} / ${cb}`
        }, {
          label: "Text / Lines",
          value: `${oy} / ${Py}`
        }, {
          label: "Sky / Particles",
          value: `${hy+fy} / ${By}`
        }]
      }(yb.api) : []
    }
    var gU = Wy(39241);
    var GW = Wy(535),
      OW = Wy(38222);

    function RW(yb) {
      if (null === yb || void 0 === yb || !yb.isCoreRunning) return null;
      const {
        api: bb,
        chunks: Wy,
        items: Uy,
        tables: hy
      } = yb;
      return {
        playerFeet() {
          const yb = bb.Tl(bb.localId);
          return null !== yb && void 0 !== yb && yb.every(Number.isFinite) ? yb : null
        },
        chunkBlocks: yb => Wy.isLoaded(yb[0], yb[1], yb[2]) ? (yb, bb, Uy) => Wy.Df(yb, bb, Uy) : null,
        blockName: yb => hy.nameOfId(yb),
        inventory: () => ({
          slots: Uy.playerItems().map((yb => yb ? {
            name: yb.name,
            amount: yb.amount
          } : null)),
          heldSlot: Uy.selectedSlot
        }),
        nearby() {
          const Wy = [];
          for (let hy = 0; hy < bb.idStr.length; hy++) {
            var Uy;
            const fy = bb.idStr[hy],
              Zy = bb.serverIds[hy],
              cb = bb.kinds[hy];
            if (null === fy || bb.isLocal(Zy) || cb >>> Ty.b !== Ty.p.Lifeform) continue;
            const Py = bb.Tl(Zy),
              oy = GW.h[cb & Ty.e];
            Py && void 0 !== oy && Wy.push({
              kind: "Player" === oy ? "player" : oy,
              name: null !== (Uy = yb.clientApi.getEntityName(fy)) && void 0 !== Uy ? Uy : null,
              position: Py
            })
          }
          return Wy
        },
        droppedItems() {
          let yb = 0;
          for (let Wy = 0; Wy < bb.idStr.length; Wy++) null !== bb.idStr[Wy] && bb.kinds[Wy] >>> Ty.b === Ty.p.Item && yb++;
          return yb
        }
      }
    }
    const vU = {
        worldCodeAiChunk: yb => Promise.resolve((0, OW.d)(RW((0, Zy.i)()), yb)),
        worldCodeAiGameState: () => Promise.resolve((0, OW.h)(RW((0, Zy.i)())))
      },
      iU = function(yb) {
        const bb = WW(),
          Uy = WW(),
          hy = new Set,
          fy = new Set,
          Zy = () => {
            var bb, Wy;
            return null !== (bb = null === (Wy = yb.runtime()) || void 0 === Wy ? void 0 : Wy.currentViewer) && void 0 !== bb ? bb : null
          };
        let cb = null,
          Py = null;
        const By = (yb, bb) => ({
            current: yb,
            watch(Wy) {
              let Uy = yb();
              return bb.add((() => {
                const bb = yb();
                bb !== Uy && (Uy = bb, Wy(bb))
              }))
            }
          }),
          ey = yb => ({
            watch: bb => (yb.add(bb), () => {
              yb.delete(bb)
            })
          }),
          qb = yb => {
            const bb = Zy(),
              Wy = null === bb || void 0 === bb ? void 0 : bb.view;
            bb && Wy && bb.seek(Math.max(0, Math.min(Wy.totalTicks - 1, Wy.Zb + yb * Ky.ed)))
          },
          sy = {
            replay: By((() => {
              var yb;
              const bb = Zy(),
                Wy = null !== (yb = null === bb || void 0 === bb ? void 0 : bb.view) && void 0 !== yb ? yb : null;
              return null === bb || null === Wy || Wy.state === Ky.Sc.None ? (cb = null, null) : (cb = (0, tb.n)(cb, {
                id: bb.id,
                Zb: Wy.Zb,
                totalTicks: Wy.totalTicks,
                tWy: Ky.ed,
                playing: Wy.state === Ky.Sc.Playing,
                speed: Wy.speed,
                cameraMode: Wy.cameraMode,
                freecam: "freecam" === Wy.cameraMode
              }), cb)
            }), bb),
            replayEdits: By((() => {
              var yb;
              const bb = Zy(),
                Wy = null !== (yb = null === bb || void 0 === bb ? void 0 : bb.view) && void 0 !== yb ? yb : null;
              return null === bb || null === Wy || Wy.state === Ky.Sc.None ? (Py = null, null) : (Py = (0, tb.n)(Py, {
                cameraKeyframes: [...bb.keyframes],
                playbackMark: Wy.mark,
                fileName: bb.fileName,
                unsavedChanges: bb.unsavedChanges,
                suggestSaveAs: bb.suggestSaveAs
              }), Py)
            }), bb),
            replayRecorder: By((() => {
              var bb, Wy;
              return null !== (bb = null === (Wy = yb.runtime()) || void 0 === Wy ? void 0 : Wy.recorder.current) && void 0 !== bb ? bb : db.b.states.replayRecorder.current()
            }), Uy),
            replayVideoExporting: {
              current: xW.c,
              watch: yb => (0, oy.h)("replayViewer|videoExportChanged", (() => {
                yb((0, xW.c)())
              }))
            }
          },
          Sy = {
            replayUiActionRequested: ey(fy),
            replayViewerRequested: ey(hy)
          },
          Ey = yb => {
            for (const bb of hy) bb(yb)
          },
          ly = () => {
            var Uy;
            !0 === (null === (Uy = Zy()) || void 0 === Uy ? void 0 : Uy.isOpen) && Promise.all([Wy.e(84), Wy.e(59)]).then((() => Wy(41099))).then((Wy => {
              let {
                startWasmReplayVideoExport: Uy
              } = Wy;
              return Uy({
                viewer: Zy,
                canvas: () => {
                  var bb, Wy;
                  return null !== (bb = null === (Wy = yb.canvas) || void 0 === Wy ? void 0 : Wy.call(yb)) && void 0 !== bb ? bb : null
                },
                watchViewer: bb.add,
                requestViewer: Ey
              })
            }), (yb => {
              console.error("Couldn't load the video export", yb), Ab.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((yb => {
              console.error("The video export failed", yb)
            }))
          },
          mb = {
            replayAction(yb) {
              if ((0, xW.c)()) return;
              const bb = Zy();
              switch (yb) {
                case "replaySkipBack":
                  qb(-1);
                  break;
                case "replaySkipForward":
                  qb(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== bb && void 0 !== bb && bb.view && bb.setSpeed((0, Ib.h)(bb.view.speed, "replaySpeedUp" === yb ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === bb || void 0 === bb || bb.addKeyframe()
              }
            },
            setReplayPlaying(yb) {
              var bb, Wy;
              (0, xW.c)() || (yb ? null === (bb = Zy()) || void 0 === bb || bb.play() : null === (Wy = Zy()) || void 0 === Wy || Wy.pause())
            },
            seekReplay(yb) {
              var bb;
              let {
                Zb: Wy,
                ignorePlaybackMark: Uy
              } = yb;
              null === (bb = Zy()) || void 0 === bb || bb.seek(Wy, null !== Uy && void 0 !== Uy && Uy)
            },
            setReplayCameraMode(yb) {
              var bb;
              null === (bb = Zy()) || void 0 === bb || bb.setCameraMode(yb)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(yb) {
              var bb;
              null === (bb = Zy()) || void 0 === bb || bb.setKeyframe(yb)
            },
            moveReplayCameraKeyframe(yb) {
              var bb;
              let {
                from: Wy,
                to: Uy
              } = yb;
              null === (bb = Zy()) || void 0 === bb || bb.moveKeyframe(Wy, Uy)
            },
            deleteReplayCameraKeyframes(yb) {
              var bb;
              let {
                start: Wy,
                end: Uy
              } = yb;
              null === (bb = Zy()) || void 0 === bb || bb.deleteKeyframes(Wy, Uy)
            },
            setReplayPlaybackMark(yb) {
              var bb;
              null === (bb = Zy()) || void 0 === bb || bb.setMark(yb)
            },
            cropReplay(yb) {
              var bb, Wy;
              let {
                start: Uy,
                end: hy
              } = yb;
              return !(0, xW.c)() && (null !== (bb = null === (Wy = Zy()) || void 0 === Wy ? void 0 : Wy.crop(Uy, hy)) && void 0 !== bb && bb)
            },
            holdReplayForShaderPackFailure(yb) {
              const bb = Zy();
              bb && (bb.holdForShaderPackFailure(), function(yb) {
                Wy.e(121).then((() => Wy(37862))).then((bb => {
                  let {
                    shaderPackPage: Wy
                  } = bb;
                  Wy.block(yb)
                })).catch((yb => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", yb)
                }))
              }(yb))
            },
            exportReplayVideo() {
              ly()
            },
            toggleRecording() {
              var bb;
              null === (bb = yb.runtime()) || void 0 === bb || bb.recorder.toggleRecording()
            },
            saveClip() {
              var bb;
              null === (bb = yb.runtime()) || void 0 === bb || bb.recorder.saveClip()
            },
            setRecorderPrefs(bb) {
              var Wy;
              let {
                clipping: Uy,
                clipSeconds: hy
              } = bb;
              null === (Wy = yb.runtime()) || void 0 === Wy || Wy.recorder.setPrefs(Uy, hy)
            },
            setReplayViewerOpen(bb) {
              var Wy;
              (0, Bb.h)(bb) && (null === (Wy = yb.runtime()) || void 0 === Wy || Wy.recorder.viewerShown(bb))
            },
            recordFlyingMiddleText(bb) {
              var Wy;
              let {
                content: Uy,
                v_: hy,
                angle: fy,
                i_: Zy
              } = bb;
              null === (Wy = yb.runtime()) || void 0 === Wy || Wy.recorder.recordFlyingText(JSON.stringify(Uy), hy, fy, Zy)
            },
            dragReplayCamera(bb) {
              var Wy;
              let {
                dx: Uy,
                dy: hy
              } = bb;
              null === (Wy = yb.freecam()) || void 0 === Wy || Wy.drag(Uy, hy)
            },
            moveReplayFreecam(bb) {
              var Wy;
              null === (Wy = yb.freecam()) || void 0 === Wy || Wy.move(bb)
            },
            holdReplayFreecamVertical(bb) {
              var Wy;
              let {
                action: Uy,
                kW: hy
              } = bb;
              null === (Wy = yb.freecam()) || void 0 === Wy || Wy.holdVertical(Uy, hy)
            }
          },
          Cy = yb => {
            var bb;
            const Wy = Zy(),
              Uy = null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.view) && void 0 !== bb ? bb : null;
            yU.has(yb) ? (yb => {
              for (const bb of fy) bb(yb)
            })(yb) : bU.has(yb) ? mb.replayAction(yb) : "replayPlayPause" === yb ? Wy && Uy && Uy.state !== Ky.Sc.None && mb.setReplayPlaying(Uy.state !== Ky.Sc.Playing) : "replayChangeCameraMode" === yb ? null === Wy || void 0 === Wy || Wy.cycleCameraMode() : "replayExit" === yb ? !0 === (null === Wy || void 0 === Wy ? void 0 : Wy.inPlayback) && (0, vW.l)("/") : "replayExportVideo" === yb && ly()
          };
        let Ty = !1;
        return {
          states: sy,
          events: Sy,
          commands: mb,
          lookups: {
            replayCamera() {
              var bb, Wy, Uy;
              return !0 !== (null === (bb = Zy()) || void 0 === bb ? void 0 : bb.isOpen) ? null : null !== (Wy = null === (Uy = yb.cameraView) || void 0 === Uy ? void 0 : Uy.call(yb)) && void 0 !== Wy ? Wy : null
            },
            leaveGameReloadsPage() {
              var yb;
              return !0 === (null === (yb = Zy()) || void 0 === yb ? void 0 : yb.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var yb;
              const Wy = !0 === (null === (yb = Zy()) || void 0 === yb ? void 0 : yb.inPlayback);
              Wy !== Ty && (Ty = Wy, oy.g.EZ("connectedGameChanged")), bb.fire()
            },
            recorderChanged: Uy.fire,
            keyDown: yb => {
              var bb;
              switch (yb) {
                case "recordGame":
                  return void mb.toggleRecording();
                case "recordClip":
                  return void((0, Bb.e)() || mb.saveClip())
              }(0, xW.c)() || ("replayViewerOpen" !== yb ? yb.startsWith("replay") && ((0, Bb.e)() || !0 === (null === (bb = Zy()) || void 0 === bb ? void 0 : bb.inPlayback)) && Cy(yb) : Ey("toggle"))
            }
          }
        }
      }({
        runtime: hy.l,
        cameraView: () => {
          var yb;
          const bb = null === (yb = (0, Zy.i)()) || void 0 === yb ? void 0 : yb.renderFrame;
          if (!bb) return null;
          const [Wy, Uy, hy] = bb.cameraPosition, [fy, cb, Py] = bb.cameraDirection;
          return {
            position: [Wy, Uy, hy],
            direction: [fy, cb, Py]
          }
        },
        canvas: () => {
          var yb, bb, Wy;
          return null !== (yb = null === (bb = (Wy = (0, fy.M)()).canvas) || void 0 === bb ? void 0 : bb.call(Wy)) && void 0 !== yb ? yb : null
        },
        freecam: hy.h
      }),
      MW = {
        states: {
          ...Ub,
          ...cW.i,
          ...iU.states,
          ...fW
        },
        events: {
          ...hb,
          ...Ey,
          ...cW.g,
          ...Ry.b,
          ...CW.g,
          ...iU.events,
          ...ZW,
          ...Oy.j
        },
        commands: {
          ...Gy,
          ...fb,
          ...ly,
          ...cW.e,
          ...jW,
          ...mU,
          ...Oy.g,
          ...Yb,
          ...iU.commands,
          ...qU
        },
        queries: {
          ...cW.h,
          ...vU
        },
        lookups: {
          ...Zb,
          ...rb,
          ...CW.j,
          ...iU.lookups,
          ...gb,
          ...zW
        }
      };

    function YW() {
      (0, cb.d)(Sy.k), (0, hy.m)(iU.feed), (0, Ry.e)(), Db || (Db = !0, (0, Sy.j)(Yy.m, (yb => {
        const bb = (0, ny.e)(Yy.m, yb);
        "string" === typeof bb && Promise.resolve().then((() => Wy(2946))).then((yb => {
          let {
            onCosmeticPackGranted: Wy
          } = yb;
          Wy(bb)
        }))
      })), (0, Sy.j)(Yy.ib, (yb => {
        const bb = (0, ny.e)(Yy.ib, yb);
        "number" === typeof bb && oy.g.EZ("serverUpdating", Date.now() + bb, !0)
      })), (0, Sy.j)(Yy.H, (yb => {
        const bb = (0, ny.e)(Yy.H, yb);
        if ((0, ny.c)(bb)) {
          const {
            E1: yb,
            Y1: Wy
          } = bb;
          (0, Lb.c)({
            E1: "string" === typeof yb ? yb : null,
            Y1: "string" === typeof Wy ? Wy : null
          })
        }
      })), (0, Sy.j)(By.Tb.NewUiRequest, (yb => {
        const bb = (0, ny.g)(yb);
        (0, ny.c)(bb) && "number" === typeof bb.id && (0, ny.c)(bb.clientParameters) && (0, Qb.d)(bb.id, bb.clientParameters)
      })), (0, Sy.j)(Yy.Z, (yb => {
        const bb = (0, ny.e)(Yy.Z, yb);
        "number" === typeof bb && (0, Qb.g)(bb)
      })), (0, Sy.g)(Qb.c), (0, Sy.j)(By.Tb.UiRequestPopup, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb) && "number" === typeof bb.id && "string" === typeof bb.text) {
          const yb = bb.id;
          (0, Qb.i)(yb, bb.text, (bb => {
            jW.answerUiRequest({
              id: yb,
              Ul: bb
            })
          }))
        }
      })), (0, Sy.j)(By.Tb.TopRightHelper, (yb => {
        const bb = (0, ny.g)(yb);
        void 0 !== bb && oy.g.EZ("TopRightHelper", bb, !0)
      })), (0, Sy.j)(By.Tb.TaskProgress, (yb => {
        const bb = (0, ny.g)(yb);
        (0, ny.c)(bb) && "string" === typeof bb.taskId && "number" === typeof bb.progress && (0, pb.c)({
          taskId: bb.taskId,
          progress: bb.progress
        })
      }))), sW || (sW = !0, (0, Sy.j)(Yy.t, (yb => {
        const bb = (0, ny.e)(Yy.t, yb);
        (0, ny.c)(bb) && oy.g.EZ("showShopFromServer", {
          toggle: bb.zN,
          hN: bb.hN
        }, !0)
      })), (0, Sy.j)(By.Tb.OverShopInfo, (yb => {
        const bb = (0, ny.g)(yb);
        (0, ny.c)(bb) && oy.g.EZ("overShopInfo", bb.info, !0)
      })), (0, Sy.j)(By.Tb.ShowShopTutorial, (() => {
        oy.g.EZ("showShopTutorial", null, !0)
      }))), KW || (KW = !0, (0, Sy.f)((() => {
        var yb;
        (0, cU.B)(), null === (yb = eW) || void 0 === yb || yb(), eW = (0, Sy.b)() ? (0, oW.e)(Sy.b) : null
      })), (0, Sy.j)(By.Tb.SetCookie, (yb => {
        const bb = (0, ny.g)(yb),
          Wy = (0, vW.e)().gameNameWithVariation;
        (0, ny.c)(bb) && "string" === typeof bb.key && null !== Wy && (0, PW.setCookie)(Wy, bb.key, bb.value)
      })), (0, Sy.j)(By.Tb.LeaveValues, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb) && "string" === typeof bb.leaveEventType) {
          const {
            leaveEventType: yb,
            category: Wy,
            subCategory: Uy,
            value: hy
          } = bb;
          (0, cU.H)({
            leaveEventType: yb,
            category: Wy,
            subCategory: Uy,
            value: hy
          })
        }
      })), (0, Sy.j)(By.Tb.CustomAnalyticsEvent, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb) && "string" === typeof bb.cat1) {
          const {
            cat1: yb,
            cat2: Wy,
            cat3: Uy,
            value: hy
          } = bb;
          (0, cU.p)({
            cat1: yb,
            cat2: Wy,
            cat3: Uy,
            value: hy
          })
        }
      })), (0, Sy.j)(By.Tb.ProgressionEvent, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb)) {
          const {
            type: yb,
            location1: Wy,
            location2: Uy,
            location3: hy,
            score: fy
          } = bb;
          (0, cU.t)({
            type: yb,
            location1: Wy,
            location2: Uy,
            location3: hy,
            score: fy
          })
        }
      })), (0, Sy.j)(By.Tb.ResourceEvent, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb)) {
          const {
            type: yb,
            resourceType: Wy,
            amount: Uy,
            category: hy,
            itemName: fy
          } = bb;
          (0, cU.x)({
            type: yb,
            resourceType: Wy,
            amount: Uy,
            category: hy,
            itemName: fy
          })
        }
      })), (0, Sy.j)(By.Tb.LeaderboardResponse, (yb => {
        const bb = (0, ny.g)(yb);
        if ((0, ny.c)(bb)) {
          const {
            category: yb,
            timeframe: Wy,
            data: Uy
          } = bb;
          oy.g.EZ("leaderboardResponse", {
            category: yb,
            timeframe: Wy,
            data: Uy
          })
        }
      })), (0, Sy.j)(Yy.A, (yb => {
        const bb = (0, ny.e)(Yy.A, yb);
        "string" === typeof bb && (0, BW.d)(yb.conn, bb)
      })), (0, Sy.j)(Yy.B, (yb => {
        const bb = (0, ny.e)(Yy.B, yb);
        "string" === typeof bb && console.error(`[logErrorToConsole]: ${bb}`)
      }))), ab(), (0, CW.c)(), Mb || (Mb = !0, (0, Sy.j)(Yy.i, (yb => {
        const bb = (0, ny.e)(Yy.i, yb);
        void 0 !== bb && (0, iW.h)(bb)
      }))), Fb(), Jb(), Ly || (Ly = !0, (0, fy.w)(Qy)), Uy.gameBridge.attach(MW), (0, Uy.installPageSources)({
        commands: {
          ...Uy.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: VW.j
        },
        queries: gU.wasmIconQueries,
        lookups: {
          ...Uy.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...gU.wasmIconLookups,
          yC: VW.e,
          drawCallStats: JW
        }
      }), (0, TW.b)(), (0, gU.loadIcons)()
    }
  },
  39250: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => cb
    });
    var Uy = Wy(39258);
    let hy = null,
      fy = null;

    function Zy() {
      return hy ??= Wy.e(54).then((() => Wy(41118))).catch((yb => {
        throw hy = null, yb
      })), hy
    }

    function cb() {
      return fy ??= Promise.all([Zy(), (0, Uy.g)()]).then((yb => {
        let [bb] = yb;
        return bb
      }), (yb => {
        throw fy = null, yb
      })), fy
    }
  },
  35770: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
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
  37714: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      g: () => hy
    });
    const Uy = ["description", "label"];

    function hy(yb) {
      const bb = yb.type;
      return {
        type: bb,
        params: yb[bb]
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);