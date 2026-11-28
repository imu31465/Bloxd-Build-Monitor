export const id = 55;
export const ids = [55];
export const modules = {
  41335: (dd, Od, md) => {
    md.d(Od, {
      d: () => hd,
      e: () => Rd,
      h: () => Fd
    });
    const Wd = 6e3;

    function Fd(dd, Od) {
      return [Math.floor(dd[0] / Od) * Od, Math.floor(dd[1] / Od) * Od, Math.floor(dd[2] / Od) * Od]
    }

    function Rd(dd) {
      const Od = (null !== dd && void 0 !== dd ? dd : "").match(/-?\d+(?:\.\d+)?/g);
      return Od && Od.length >= 3 ? [Number(Od[0]), Number(Od[1]), Number(Od[2])] : null
    }

    function Xd(dd, Od) {
      return dd === Od ? String(dd) : `${dd}-${Od}`
    }

    function Kd(dd, Od, md, Wd) {
      const Fd = [];
      let Rd = new Map;
      for (let Xd = dd[2]; Xd < dd[2] + Od; Xd++) {
        const Kd = new Map;
        let hd = dd[0];
        for (; hd < dd[0] + Od;) {
          const Fd = Wd(hd, md, Xd);
          let vd = hd;
          for (; vd + 1 < dd[0] + Od && Wd(vd + 1, md, Xd) === Fd;) vd++;
          if (null !== Fd) {
            const dd = `${hd} ${vd} ${Fd}`,
              Od = Rd.get(dd);
            Od ? (Od.z1 = Xd, Rd.delete(dd), Kd.set(dd, Od)) : Kd.set(dd, {
              x0: hd,
              x1: vd,
              z0: Xd,
              z1: Xd,
              name: Fd
            })
          }
          hd = vd + 1
        }
        Fd.push(...Rd.values()), Rd = Kd
      }
      return Fd.push(...Rd.values()), Fd.sort(((dd, Od) => dd.z0 - Od.z0 || dd.x0 - Od.x0)).map((dd => `x${Xd(dd.x0,dd.x1)} z${Xd(dd.z0,dd.z1)} ${dd.name}`))
    }

    function hd(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Wd;
      const hd = [dd[0] + Od - 1, dd[1] + Od - 1, dd[2] + Od - 1],
        vd = null !== Fd && Fd.every(((Od, md) => Math.floor(Od) >= dd[md] && Math.floor(Od) <= hd[md])),
        Qd = [`The chunk from ${dd.join(" ")} to ${hd.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Fd && Qd.push(`The player's feet are at ${Fd.map(Math.floor).join(" ")}, ${vd?"in this chunk":"outside this chunk"}.`);
      const td = [];
      for (let Wd = dd[1]; Wd <= hd[1]; Wd++) {
        const Fd = Kd(dd, Od, Wd, md).join("; "),
          Rd = td[td.length - 1];
        (null === Rd || void 0 === Rd ? void 0 : Rd.boxes) === Fd ? Rd.to = Wd : td.push({
          from: Wd,
          to: Wd,
          boxes: Fd
        })
      }
      const od = td.filter((dd => "" !== dd.boxes));
      0 === od.length && Qd.push("It is all air.");
      let Nd = Qd.join("\n").length;
      for (const Wd of od) {
        const dd = `y${Xd(Wd.from,Wd.to)}: ${Wd.boxes}`;
        if (Nd += dd.length + 1, Nd > Rd) {
          Qd.push(`Cut short: the layers from y${Wd.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Qd.push(dd)
      }
      return Qd.join("\n")
    }
  },
  9938: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(29);

    function Fd() {
      return !Wd.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38486: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      h: () => Rd,
      i: () => Fd
    });
    const Wd = [.25, .5, 1, 2, 4, 8, 16];

    function Fd(dd, Od) {
      const md = Wd;
      let Fd = md.indexOf(dd);
      return -1 === Fd && (Fd = md.findIndex((Od => Od >= dd)), -1 === Fd && (Fd = md.length - 1)), "up" === Od ? md[Math.min(Fd + 1, md.length - 1)] : md[Math.max(Fd - 1, 0)]
    }

    function Rd(dd) {
      return dd <= Wd[0]
    }

    function Xd(dd) {
      return dd >= Wd[Wd.length - 1]
    }
  },
  38121: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      d: () => Rd
    });
    let Wd = !1;

    function Fd() {
      return Wd
    }

    function Rd(dd) {
      return Wd !== dd && (Wd = dd, !0)
    }
  },
  40584: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(32),
      Fd = md(2116);

    function Rd(dd) {
      let {
        taskId: Od,
        progress: md
      } = dd;
      const Wd = Fd.e.get("_tasks");
      null !== Wd && void 0 !== Wd && Wd[Od] && Fd.e.apply({
        _tasks: {
          ...Wd,
          [Od]: {
            ...Wd[Od],
            progress: md
          }
        }
      })
    }
    Wd.j.subscribe("clientTaskProgress", (dd => {
      Rd(dd)
    }))
  },
  41304: (dd, Od, md) => {
    md.d(Od, {
      e: () => Nd,
      h: () => Hd,
      l: () => vd,
      o: () => td,
      p: () => od,
      q: () => hd,
      s: () => Xd,
      v: () => Qd,
      w: () => yd
    });
    var Wd = md(2116),
      Fd = md(32),
      Rd = md(2121);
    const Xd = (0, Rd.k)((function() {
        var dd, Od, md, Fd;
        return {
          health: null !== (dd = Wd.e.get("_health")) && void 0 !== dd ? dd : null,
          maxHealth: null !== (Od = Wd.e.get("_totalMaxHealth")) && void 0 !== Od ? Od : null,
          shield: null !== (md = Wd.e.get("_shield")) && void 0 !== md ? md : null,
          maxShield: null !== (Fd = Wd.e.get("maxShield")) && void 0 !== Fd ? Fd : null
        }
      }), [], (0, Rd.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Kd = [{
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

    function hd(dd, Od) {
      return Kd[(dd ? 2 : 0) + (Od ? 1 : 0)]
    }
    const vd = (0, Rd.k)((function() {
      var dd;
      return null !== (dd = Wd.e.get("_aura")) && void 0 !== dd ? dd : null
    }), [], (0, Rd.h)("_aura"));

    function Qd(dd) {
      return {
        watch: Od => (0, Fd.l)("shotPlayer", (md => {
          let {
            playerId: Wd,
            damage: Fd,
            wasCrit: Rd,
            distance: Xd
          } = md;
          dd(Wd) && Od({
            damage: Fd,
            wasCrit: Rd,
            distance: Xd
          })
        }))
      }
    }

    function td(dd) {
      return (0, Rd.c)("chat", (Od => {
        let {
          serverChatMsgId: md,
          worldCodeLineId: Wd,
          content: Fd,
          chatterEId: Rd,
          chatterObjectsToReplay: Xd
        } = Od;
        return {
          serverChatMsgId: null !== md && void 0 !== md ? md : null,
          worldCodeLineId: null !== Wd && void 0 !== Wd ? Wd : null,
          content: Fd,
          author: Rd ? dd(Rd) : null,
          hiddenFromReplay: !0 === Xd
        }
      }))
    }
    const od = (0, Rd.c)("chatRemoved");
    class Nd {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const md = this.shown;
        return dd !== this.needed && (this.needed = dd, this.neededSince = Od, null === dd && (this.shown = null)), this.shown !== this.needed && Od - this.neededSince > 200 && (this.shown = this.needed), this.shown !== md
      }
    }

    function qd(dd) {
      return [{
        translationKey: `touchKeys:${dd}`
      }]
    }
    const Hd = {
      open: qd("open"),
      close: qd("close"),
      milk: qd("milk"),
      shear: qd("shear"),
      tame: qd("tame"),
      feed: qd("feed"),
      ride: qd("ride")
    };

    function yd(dd) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: dd
      }]
    }
  },
  37846: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Xd
    });
    var Wd = md(4515);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= md.e(242).then((() => md(37698))).then((dd => {
        let {
          ITEM_SPRITES: Od,
          ITEM_SPRITES_WITHOUT_FILE: md,
          ITEM_FILES_WITHOUT_SPRITE: Rd
        } = dd;
        Fd = function(dd, Od, md) {
          const Fd = new Set,
            Rd = (0, Wd.C)(Od);
          let Xd = 0;
          for (const [Wd, Kd] of dd.entries()) Wd === Rd[Xd] ? Xd++ : Fd.add(Kd);
          if ("" !== md)
            for (const Kd of md.split(Wd.v)) Fd.add(Kd);
          return Fd
        }(Od.split(Wd.v), md, Rd)
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }

    function Kd(dd) {
      var Od, md;
      return null !== (Od = null === (md = Fd) || void 0 === md ? void 0 : md.has(dd)) && void 0 !== Od && Od
    }
  },
  41319: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Rd,
      f: () => Fd
    });
    const Wd = 128;

    function Fd(dd, Od, md, Wd) {
      const Fd = 2 * Od - 1,
        Rd = 1 - 2 * md,
        Xd = dd(0) - Fd * dd(3),
        Kd = dd(4) - Fd * dd(7),
        hd = dd(8) - Fd * dd(11),
        vd = dd(1) - Rd * dd(3),
        Qd = dd(5) - Rd * dd(7),
        td = dd(9) - Rd * dd(11);
      Wd[0] = Kd * td - hd * Qd, Wd[1] = hd * vd - Xd * td, Wd[2] = Xd * Qd - Kd * vd;
      const od = Wd[0] * dd(3) + Wd[1] * dd(7) + Wd[2] * dd(11) < 0 ? -1 : 1,
        Nd = Math.hypot(Wd[0], Wd[1], Wd[2]) * od;
      return Wd[0] /= Nd, Wd[1] /= Nd, Wd[2] /= Nd, Wd
    }

    function Rd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = [Math.floor(Od[0]), Math.floor(Od[1]), Math.floor(Od[2])],
        Kd = [0, 0, 0],
        hd = [1 / 0, 1 / 0, 1 / 0],
        vd = [1 / 0, 1 / 0, 1 / 0];
      for (let od = 0; od < 3; od++) Kd[od] = Math.sign(md[od]), 0 !== Kd[od] && (vd[od] = Math.abs(1 / md[od]), hd[od] = (Xd[od] + (Kd[od] > 0 ? 1 : 0) - Od[od]) / md[od]);
      let Qd = 0,
        td = Math.abs(md[0]) > Math.abs(md[1]) ? 0 : 1;
      for (Math.abs(md[2]) > Math.abs(md[td]) && (td = 2); Qd <= Wd;) {
        if (dd(Xd[0], Xd[1], Xd[2])) return Fd[0] = Xd[0], Fd[1] = Xd[1], Fd[2] = Xd[2], Rd[0] = 0, Rd[1] = 0, Rd[2] = 0, Rd[td] = -Kd[td], !0;
        td = hd[0] < hd[1] ? 0 : 1, hd[2] < hd[td] && (td = 2), Qd = hd[td], Xd[td] += Kd[td], hd[td] += vd[td]
      }
      return !1
    }
  },
  38020: (dd, Od, md) => {
    md.d(Od, {
      b: () => Bd,
      c: () => Sd,
      f: () => gd,
      j: () => pd,
      l: () => wd
    });
    var Wd = md(320),
      Fd = md(107);
    const Rd = new(md(38022).c)(new URL(md.p + md.u(3), md.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Xd = md(1786),
      Kd = md(2324);
    const hd = 1e4,
      vd = 3e4;
    let Qd = null,
      td = null,
      od = null,
      Nd = !1,
      qd = 0;
    const Hd = new Map;
    let yd = null;
    const bd = new Map,
      Td = new Map;

    function pd(dd) {
      const Od = new Promise(((Od, md) => {
        const Wd = new Image;
        Wd.crossOrigin = "anonymous", Wd.fetchPriority = "high", Wd.onload = () => {
          Od(Wd)
        }, Wd.onerror = () => {
          md(new Error(`A block icon's texture did not load: ${dd.slice(0,100)}`))
        }, Wd.src = dd
      }));
      return (0, Kd.g)(Od)
    }

    function Yd(dd) {
      var Od, md;
      Nd || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${dd}`), Nd = !0, null === (Od = Qd) || void 0 === Od || Od.terminate(), Qd = null, td = null, bd.clear(), Td.clear();
      for (const Wd of Hd.values()) Wd(null);
      Hd.clear(), null === (md = yd) || void 0 === md || md()
    }

    function gd() {
      return null !== td
    }

    function wd() {
      return od ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Wd.d.ios_icon_worker_v1 && (0, Fd.isWebKit)()) return;
        try {
          Qd = await async function() {
            return await Rd.ready(), Rd.start()
          }()
        } catch (Kd) {
          return void Yd(`did not start (${String(Kd)})`)
        }
        let dd = () => {};
        const Od = new Promise((Od => {
          dd = Od
        }));
        Qd.onmessage = Od => {
          let {
            data: md
          } = Od;
          if ("started" === md.type) td = Qd, dd();
          else if ("failed" === md.type) Yd(`failed a draw (${md.message})`);
          else {
            var Wd, Fd;
            null === (Wd = Hd.get(md.id)) || void 0 === Wd || Wd(md.url), Hd.delete(md.id), null === (Fd = yd) || void 0 === Fd || Fd()
          }
        }, Qd.onerror = Od => {
          Od.preventDefault(), Yd(`stopped (${Od.message||"its script did not load or run"})`), dd()
        };
        const md = `did not start in ${vd/1e3} s`;
        await (0, Xd.k)(Od, vd, md).catch((() => {
          Yd(md)
        }))
      }(), od
    }

    function Ed() {
      if (null !== yd || 0 === Hd.size) return;
      const dd = new Promise((dd => {
          yd = dd
        })),
        Od = `did not answer in ${hd/1e3} s`;
      (0, Xd.k)(dd, hd, Od).then((() => {
        yd = null, Ed()
      }), (() => {
        yd = null, Yd(Od)
      }))
    }

    function Jd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      dd.postMessage(Od, md)
    }

    function Ud(dd, Od, md, Wd) {
      let Fd = Od.get(md);
      return void 0 === Fd && (Fd = Wd().then((async Od => {
        let {
          image: md,
          request: Wd
        } = Od;
        try {
          const Od = await createImageBitmap(md);
          Jd(dd, Wd(Od), [Od])
        } catch (Fd) {
          Yd(`could not take an image (${String(Fd)})`)
        }
      })), Fd.catch((() => {
        Od.get(md) === Fd && Od.delete(md)
      })), Od.set(md, Fd)), Fd
    }
    async function xd(dd, Od) {
      wd();
      const md = td;
      if (null === md) return null;
      if (await dd(md), td !== md) return null;
      const Wd = ++qd;
      return new Promise((dd => {
        Hd.set(Wd, dd), Jd(md, Od(Wd)), Ed()
      }))
    }

    function Bd(dd, Od, md) {
      return xd((Od => Promise.all([dd.top, dd.left, dd.right].map((dd => function(dd, Od) {
        return Ud(dd, bd, Od, (async () => ({
          image: await pd(Od),
          request: dd => ({
            type: "texture",
            url: Od,
            bitmap: dd
          })
        })))
      }(Od, dd))))), (Wd => ({
        type: "draw",
        id: Wd,
        ...dd,
        size: Od,
        outlineWidth: md
      })))
    }

    function Sd(dd, Od, md, Wd) {
      return xd((md => function(dd, Od, md) {
        return Ud(dd, Td, Od, (async () => {
          const {
            texture: dd,
            ...Wd
          } = await md();
          return {
            image: await pd(dd),
            request: dd => ({
              type: "model",
              name: Od,
              bitmap: dd,
              geometry: Wd
            })
          }
        }))
      }(md, dd, Od)), (Od => ({
        type: "drawModel",
        id: Od,
        name: dd,
        size: md,
        outlineWidth: Wd
      })))
    }
  },
  41301: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(2057);

    function Fd(dd, Od, md) {
      return (0, Wd.p)(dd, Od) < md
    }
  },
  9854: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1313);

    function Fd(dd, Od) {
      var md, Fd;
      try {
        const md = (0, Wd.d)();
        if ("function" === typeof md) {
          const Wd = new md(dd, Od);
          if (Wd.type === dd) return Wd
        }
      } catch {}
      const Rd = document.createEvent("Event");
      return Rd.initEvent(dd, null !== (md = null === Od || void 0 === Od ? void 0 : Od.bubbles) && void 0 !== md && md, null !== (Fd = null === Od || void 0 === Od ? void 0 : Od.cancelable) && void 0 !== Fd && Fd), Rd
    }
  },
  40575: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd
    });
    var Wd = md(1286),
      Fd = md(1424),
      Rd = md(29),
      Xd = md(1406),
      Kd = md(1415),
      hd = md(1641),
      vd = md(38082);

    function Qd(dd) {
      let {
        vR: Od,
        QR: md
      } = dd;
      const Qd = null !== Od && void 0 !== Od ? Od : (0, Kd.b)().gameNameWithVariation;
      (0, Wd.H)(Qd) && ((0, vd.i)(), (0, Xd.nb)((() => {
        console.log("Received matchmaking order from game server to game", Od), (0, Rd.l)("inGameReplay"), (0, hd.navigatePreserveSearch)((0, Fd.c)(Qd, null !== md && void 0 !== md ? md : void 0))
      }), "video_start"))
    }
  },
  40782: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(32),
      Fd = md(2134);

    function Rd(dd) {
      var Od, md;
      const Rd = (0, Fd.r)(null !== (Od = null === (md = Fd.y.toggleFreeCam) || void 0 === md ? void 0 : md[0]) && void 0 !== Od ? Od : null);
      Wd.j.lQ("showBottomMessage", {
        message: `Free Camera ${dd?"Enabled":"Disabled"}${Rd?` - Press ${Rd} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40573: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      i: () => hd,
      m: () => vd,
      o: () => td
    });
    var Wd = md(2092),
      Fd = md(32),
      Rd = md(1462),
      Xd = md(1315);
    const Kd = new Map;

    function hd(dd, Od) {
      Fd.j.lQ("newUiRequest", {
        id: dd,
        clientParameters: Od
      }, !0)
    }

    function vd(dd) {
      Fd.j.lQ("removeUiRequest", dd, !0);
      const Od = Kd.get(dd);
      Od && (Od.tearDownNotification(), Kd.delete(dd))
    }

    function Qd() {
      Fd.j.lQ("clearUiRequests");
      for (const dd of Kd.values()) dd.tearDownNotification();
      Kd.clear()
    }

    function td(dd, Od, md, Fd) {
      const hd = "string" === typeof Od ? {
          translationKey: Od
        } : Od,
        vd = Rd.NotificationProvider.showPromptPopup({
          title: hd.translationKey,
          textOpts: {
            title: (0, Xd.g)(hd.params, Wd.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: md,
          unlockPointerKey: "uiRequestPopup"
        });
      Kd.set(dd, vd), vd.getResult().then((Od => {
        Kd.delete(dd), "notificationTornDown" !== Od && Fd(Od)
      }))
    }
  },
  41328: (dd, Od, md) => {
    md.d(Od, {
      d: () => td,
      e: () => od
    });
    var Wd = md(218),
      Fd = md(41335);
    const Rd = 20;

    function Xd(dd) {
      return dd.map(Math.floor).join(" ")
    }

    function Kd(dd) {
      return null === dd.amount || 1 === dd.amount ? dd.name : `${dd.amount} ${dd.name}`
    }
    var hd = md(41340),
      vd = md(2116),
      Qd = md(1415);

    function td(dd, Od) {
      if (!dd) return hd.e;
      const md = dd.playerFeet();
      if (!md) return "The player isn't in the world yet, so no blocks can be seen.";
      const Rd = Wd.i.Qt,
        Xd = (0, Fd.h)(null !== Od && void 0 !== Od ? Od : md, Rd),
        Kd = dd.chunkBlocks(Xd);
      return Kd ? (0, Fd.d)(Xd, Rd, ((Od, md, Wd) => {
        const Fd = Kd(Od, md, Wd);
        return 0 === Fd ? null : dd.blockName(Fd).split("|")[0]
      }), md) : `The chunk from ${Xd.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${md.map(Math.floor).join(" ")}.`
    }

    function od(dd) {
      var Od, md, Wd;
      if (!dd) return hd.f;
      const Fd = dd.playerFeet();
      if (!Fd) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: td,
        heldSlot: od
      } = dd.inventory();
      return function(dd) {
        const Od = [];
        null !== dd.game && Od.push(`Game: ${dd.game}.`);
        const md = null === dd.health ? "" : `, health ${Math.round(dd.health)}${null===dd.maxHealth?"":` of ${Math.round(dd.maxHealth)}`}`;
        Od.push(`The player (the creator) stands at ${Xd(dd.position)}${md}, ${dd.creative?"in":"not in"} creative mode.`);
        const Wd = dd.slots[dd.heldSlot];
        Od.push(Wd ? `Holding (slot ${dd.heldSlot}): ${Kd(Wd)}.` : `Holding nothing (slot ${dd.heldSlot} is empty).`);
        const Fd = dd.slots.flatMap(((dd, Od) => dd ? [`slot ${Od}: ${Kd(dd)}`] : []));
        Od.push(Fd.length > 0 ? `Inventory: ${Fd.join(", ")}.` : "Inventory: empty.");
        const hd = Od => Math.hypot(Od.position[0] - dd.position[0], Od.position[1] - dd.position[1], Od.position[2] - dd.position[2]),
          vd = [...dd.nearby].sort(((dd, Od) => hd(dd) - hd(Od)));
        if (0 === vd.length) Od.push("No other players or mobs are near enough to see.");
        else {
          Od.push("Near them, nearest first:");
          for (const dd of vd.slice(0, Rd)) {
            const md = "player" === dd.kind ? `player "${dd.name||"?"}"` : dd.name && dd.name !== dd.kind ? `${dd.kind} "${dd.name}"` : dd.kind,
              Wd = Math.round(hd(dd));
            Od.push(`- ${md} at ${Xd(dd.position)}, ${Wd} block${1===Wd?"":"s"} away`)
          }
          vd.length > Rd && Od.push(`- and ${vd.length-Rd} more further away`)
        }
        return dd.droppedItems > 0 && Od.push(`${dd.droppedItems} dropped item${1===dd.droppedItems?" is":"s are"} on the ground nearby.`), Od.join("\n")
      }({
        game: null !== (Od = (0, Qd.b)().gameNameWithVariation) && void 0 !== Od ? Od : null,
        position: Fd,
        health: null !== (md = vd.e.get("_health")) && void 0 !== md ? md : null,
        maxHealth: null !== (Wd = vd.e.get("_totalMaxHealth")) && void 0 !== Wd ? Wd : null,
        creative: !0 === vd.e.get("creative"),
        heldSlot: od,
        slots: td,
        nearby: dd.nearby(),
        droppedItems: dd.droppedItems()
      })
    }
  },
  42968: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      attachPlayGameSources: () => CW,
      playGameSources: () => lW
    });
    var Wd = md(2092),
      Fd = md(42827),
      Rd = md(5558),
      Xd = md(42552),
      Kd = md(42961),
      hd = md(41304),
      vd = md(32),
      Qd = md(5571),
      td = md(5568),
      od = md(42587),
      Nd = md(42614),
      qd = md(42972),
      Hd = md(42602);
    (0, Hd.k)(Qd.hc.Chat, (dd => {
      if (dd.payloadKind !== td.mc.Msgpack) return;
      const Od = function(dd) {
        if (null === dd || "object" !== typeof dd || !("content" in dd)) return null;
        const {
          chatMsgId: Od,
          worldCodeLineId: md,
          content: Wd,
          chatterEId: Fd,
          chatterObjectsToReplay: Rd
        } = dd;
        return {
          serverChatMsgId: null !== Od && void 0 !== Od ? Od : void 0,
          worldCodeLineId: null !== md && void 0 !== md ? md : void 0,
          content: Wd,
          chatterEId: void 0 === Fd || null === Fd ? void 0 : String(Fd),
          chatterObjectsToReplay: Rd
        }
      }((0, od.b)(dd.payload));
      null !== Od && vd.j.lQ("chat", Od, !0)
    })), (0, Hd.k)(Qd.hc.ChatRemoved, (dd => {
      if (dd.payloadKind === td.mc.Msgpack) {
        const {
          chatMsgId: Od
        } = (0, od.b)(dd.payload);
        vd.j.lQ("chatRemoved", Od, !0)
      }
    }));
    const yd = {
        chatReceived: (0, hd.o)((function(dd) {
          var Od, md, Wd;
          return {
            id: dd,
            name: null !== (Od = qd.f.getName(dd)) && void 0 !== Od ? Od : null,
            local: (0, Nd.h)() === dd,
            profileEffect: null !== (md = null === (Wd = (0, qd.i)(dd)) || void 0 === Wd ? void 0 : Wd.profileEffect) && void 0 !== md ? md : null
          }
        })),
        chatRemoved: hd.p
      },
      bd = {
        sendChatMessage(dd) {
          var Od, md;
          let {
            tX: Wd,
            channelName: Fd
          } = dd;
          return null !== (Od = null === (md = (0, Xd.l)()) || void 0 === md ? void 0 : md.clientApi.sendChat(Wd, Fd)) && void 0 !== Od && Od
        }
      };
    var Td = md(218),
      pd = md(2116),
      Yd = md(42540),
      gd = md(41301);
    const wd = [0, 0, 0],
      Ed = {
        codeBlockClickable(dd) {
          var Od;
          const md = (0, Xd.l)();
          if (null === md || void 0 === md || !md.isSessionLive) return !1;
          const Wd = md.api;
          if (0 !== (Yd.q.playerFlags(Wd.apiView, 0) & Yd.Md.Crouching)) return !1;
          const Fd = Wd.queries.directorEntity(Wd.localId) >= Yd.vb.BYTES ? Wd.memoryData(Wd.scratch(), Yd.vb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Fd) return !1;
          for (let Rd = 0; Rd < 3; Rd++) wd[Rd] = Yd.vb.feet(Fd, 0, Rd);
          return wd[1] += Yd.vb.eyeHeight(Fd, 0), (0, gd.d)(wd, dd, null !== (Od = pd.e.get("blockReach")) && void 0 !== Od ? Od : Td.i.Tb)
        }
      },
      Jd = {
        clickCodeBlock(dd) {
          var Od;
          null === (Od = (0, Xd.l)()) || void 0 === Od || Od.clickCodeBlock(dd)
        }
      };
    var Ud = md(42560),
      xd = md(42977),
      Bd = md(1122),
      Sd = md(40596),
      sd = md(5550),
      ud = md(42573),
      Vd = md(42555),
      Ad = md(42578);

    function rd(dd) {
      if (null === dd) return null;
      const Od = [];
      for (const md of dd) {
        const dd = Object.keys(md)[0];
        if ("ZO" === dd) {
          const {
            str: dd,
            style: Wd,
            clickableUrl: Fd
          } = md.ZO, Rd = Object.keys(dd)[0], Xd = dd[Rd];
          "string" !== Rd && "styledEntityName" !== Rd && "styledTranslatedText" !== Rd || Od.push({
            str: Xd,
            style: Wd,
            clickableUrl: Fd
          })
        } else Od.push(md[dd])
      }
      return Od
    }
    const Gd = {
      screenPos(dd) {
        var Od, md;
        return null !== (Od = null === (md = (0, Xd.l)()) || void 0 === md ? void 0 : md.renderFrame.projectWorldPosToScreenPos(dd)) && void 0 !== Od ? Od : {
          x: 0,
          y: 0
        }
      }
    };
    let nd = !1;

    function Ld() {
      nd || (nd = !0, (0, Hd.k)(Qd.hc.ProgressBarUpdate, (dd => {
        const Od = (0, Ad.k)(dd);
        (0, Ad.d)(Od) && vd.j.lQ("progressBarUpdate", Od, !0)
      })), (0, Hd.k)(ud.w, (dd => {
        const Od = (0, Ad.h)(ud.w, dd);
        Od && vd.j.lQ("middleScreenBarInitiate", {
          duration: Od.NR,
          qR: Od.qR,
          horizBarRemOffset: Od.HR
        }, !0)
      })), (0, Hd.k)(Qd.hc.RemoveMiddleScreenBar, (() => {
        vd.j.lQ("middleScreenBarRemove")
      })), (0, Hd.k)(ud.ab, (dd => {
        const Od = (0, Ad.h)(ud.ab, dd);
        if (Od) {
          var md;
          const dd = Od.GO ? null === (md = (0, Xd.l)()) || void 0 === md ? void 0 : md.renderFrame.projectDirectionToScreenPos(Od.GO) : void 0;
          vd.j.lQ("sendHitmarker", {
            rO: Od.rO,
            screenPos: dd
          }, !0)
        }
      })), (0, Hd.k)(ud.eb, (dd => {
        const Od = (0, Ad.h)(ud.eb, dd);
        if (Od) {
          const {
            id: dd,
            position: md,
            style: Wd,
            CO: Fd,
            MO: Rd
          } = Od;
          vd.j.lQ("setDirectionArrow", {
            id: dd,
            position: md,
            style: Wd,
            text: rd(Fd),
            MO: Rd
          }, !0)
        }
      })), (0, Hd.k)(ud.f, (dd => {
        const Od = (0, Ad.h)(ud.f, dd);
        Od && vd.j.lQ("clearDirectionArrow", {
          id: Od.id
        }, !0)
      })), (0, Hd.k)(ud.n, (dd => {
        const Od = (0, Ad.h)(ud.n, dd);
        Od && vd.j.lQ("flyingMiddleMessage", {
          content: rd(Od.IR),
          lR: Od.lR,
          CR: Od.CR
        }, !0)
      })), (0, Hd.k)(Qd.hc.WorldVariation, (dd => {
        const Od = (0, Ad.k)(dd);
        if ("string" === typeof Od) {
          const dd = Od === Bd.h ? null : {
            message: `Currently loaded as variation: ${Od}`,
            type: "Warning"
          };
          vd.j.lQ("showPermanentBottomMessage", dd, !0)
        }
      })), (0, Hd.k)(ud.K, (dd => {
        const Od = (0, Ad.h)(ud.K, dd);
        Od && function(dd, Od) {
          const {
            type: md,
            params: Wd
          } = (0, Sd.d)(Od), Fd = {
            ...Wd
          };
          for (const Rd of Sd.b) Fd[Rd] && (Fd[Rd] = rd(Fd[Rd]));
          sd.e.queueQTE(dd, md, Fd).getResult().then((Od => {
            var md;
            "boolean" === typeof Od && (null === (md = (0, Xd.l)()) || void 0 === md || md.send(Vd.c.QteResponse, {
              qteId: dd,
              qteResponse: Od
            }))
          }))
        }(Od.id, Od.yR)
      })), (0, Hd.k)(ud.X, (dd => {
        const Od = (0, Ad.h)(ud.X, dd);
        "number" === typeof Od && sd.e.cancelQTE(Od)
      })), (0, Hd.g)((() => {
        sd.e.reset()
      })), (0, Hd.i)((() => {
        sd.e.reset()
      })), (0, Hd.k)(Qd.hc.EditItemCraftingRecipes, (dd => {
        const Od = (0, Ad.k)(dd);
        (0, Ad.d)(Od) && vd.j.lQ("craftingRecipesEdited", {
          itemName: Od.craftingRecipeItemName,
          recipesForItem: Od.recipesForItem
        })
      })), (0, Hd.k)(ud.U, (dd => {
        const Od = (0, Ad.h)(ud.U, dd);
        Od && vd.j.lQ("craftingRecipesEdited", {
          itemName: Od.XO,
          recipesForItem: []
        })
      })))
    }
    var Pd = md(29);
    const zd = [{
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

    function cd(dd) {
      return Yd.q.playerFlags(dd.api.apiView, 0)
    }
    const jd = {
        freeCamera: (0, Nd.d)((dd => () => {
          const Od = dd.isSessionLive && 0 !== (cd(dd) & Yd.Md.FreeCamMoves),
            md = dd.freeCameraAllowed() && null === Pd.e.get("scriptedCameraFacing");
          return zd[(md ? 2 : 0) + (Od ? 1 : 0)]
        }), zd[0], (dd => (0, Rd.x)(dd)))
      },
      Dd = {
        setFreeCameraMovesFly: dd => {
          var Od;
          null === (Od = (0, Xd.l)()) || void 0 === Od || Od.setFreeCameraMovesFly(dd)
        }
      },
      ed = {
        freeCameraPos: () => {
          const dd = (0, Xd.l)();
          return null !== dd && void 0 !== dd && dd.isSessionLive && dd.renderFrame.hasView && 0 !== (cd(dd) & Yd.Md.FreeCam) ? dd.renderFrame.cameraPosition : null
        }
      };
    var Id = md(40782);
    let ld = !1,
      Cd = !1;

    function Zd() {
      const dd = (0, Xd.l)();
      if (null === dd || void 0 === dd || !dd.isSessionLive) return void(ld = !1);
      const Od = 0 !== (Yd.q.playerFlags(dd.api.apiView, 0) & Yd.Md.FreeCam);
      Od !== ld && (ld = Od, (0, Id.d)(Od))
    }
    var kd = md(405),
      fd = md(38573),
      Md = md(2121);
    var dO = md(42983),
      OO = md(42612);
    const mO = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let WO = "off";

    function FO(dd) {
      var Od;
      return null === dd ? null : {
        label: null !== (Od = (0, dO.d)(dd, "interactionPrompt")) && void 0 !== Od ? Od : null
      }
    }
    const RO = new Map([
      [Yd.xc.Open, {
        label: hd.h.open
      }],
      [Yd.xc.Close, {
        label: hd.h.close
      }],
      [Yd.xc.Milk, {
        label: hd.h.milk
      }],
      [Yd.xc.Shear, {
        label: hd.h.shear
      }],
      [Yd.xc.Tame, {
        label: hd.h.tame
      }],
      [Yd.xc.Feed, {
        label: hd.h.feed
      }],
      [Yd.xc.Ride, {
        label: hd.h.ride
      }]
    ]);
    class XO {
      constructor() {
        this.target = mO, this.XK = Yd.dd, this.optionName = null, this.pickaxe = new hd.e
      }
      read(dd) {
        var Od;
        const md = Yd.q.targetBlockId(dd.api.apiView, 0);
        md !== this.XK && (this.XK = md, this.optionName = md === Yd.dd ? null : `${dd.tables.getMetaInfo(md).rootName}CrosshairText`);
        const Wd = null === this.optionName ? null : null !== (Od = dd.tables.getClientOption(this.optionName)) && void 0 !== Od ? Od : null;
        this.pickaxe.update(function(dd, Od) {
          var md, Wd, Fd;
          if (0 === (Yd.q.playerFlags(dd.api.apiView, 0) & Yd.Md.Breaking) || Od === Yd.dd || 0 === Od) return null;
          const {
            tables: Rd
          } = dd;
          if (!0 === Rd.getClientOption("creative")) return null;
          const Xd = Rd.nameOfId(Od),
            Kd = null === (md = dd.items.jK()) || void 0 === md ? void 0 : md.name,
            hd = null !== (Wd = Rd.getItemStat(Xd, "harvestLevel")) && void 0 !== Wd ? Wd : 0;
          return (0, kd.uc)({
            blockHarvestType: Rd.getDefaultItemStat(Xd, "harvestType"),
            blockHarvestLevel: Rd.getDefaultItemStat(Xd, "harvestLevel"),
            harvestLevel: hd,
            heldToolType: void 0 === Kd ? void 0 : Rd.getDefaultItemStat(Kd, "harvests"),
            heldToolLevel: void 0 === Kd ? void 0 : Rd.getDefaultItemStat(Kd, "level")
          }) && null !== (Fd = fd.u[hd]) && void 0 !== Fd ? Fd : null
        }(dd, md)), dd.watchPromptPick(WO);
        const Fd = "touch" === WO ? function(dd) {
          var Od;
          const md = dd.interactLabel;
          return md === Yd.xc.Entity ? FO(dd.promptEntity) : md === Yd.xc.TameWith ? {
            label: (0, hd.w)(dd.tables.nameOfId(dd.interactIcon))
          } : null !== (Od = RO.get(md)) && void 0 !== Od ? Od : null
        }(dd) : FO(dd.promptEntity);
        return this.target = (0, Md.l)(this.target, {
          interactPrompt: Fd,
          blockText: Wd,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let KO = null;
    const hO = {
      current: () => {
        var dd, Od;
        return null !== (dd = null === (Od = KO) || void 0 === Od ? void 0 : Od.target) && void 0 !== dd ? dd : mO
      },
      watch: dd => {
        const Od = new XO;
        KO = Od;
        const md = (0, Nd.l)((md => {
          let Wd = Od.read(md);
          dd(Wd);
          const Fd = (0, Rd.A)((() => {
            const Fd = Od.read(md);
            Fd !== Wd && (Wd = Fd, dd(Fd))
          }));
          return () => {
            Fd(), md.watchPromptPick("off")
          }
        }));
        return () => {
          md(), KO === Od && (KO = null)
        }
      }
    };
    let vO = 0,
      QO = 0;
    const tO = {
        health: hd.s,
        aura: hd.l,
        hotbar: OO.e.states.hotbar,
        heldItemAim: OO.e.states.heldItemAim,
        crouching: (0, Nd.d)((dd => function(dd) {
          const Od = () => 0 !== (Yd.q.playerFlags(dd.apiView, 0) & Yd.Md.Crouching);
          return {
            current: Od,
            watch(dd) {
              let md = Od();
              return (0, Rd.x)((() => {
                const Wd = Od();
                Wd !== md && (md = Wd, dd(Wd))
              }))
            }
          }
        }(dd.api).current), !1, (dd => (0, Rd.x)(dd))),
        flight: (0, Nd.d)((dd => () => function(dd) {
          const Od = Yd.q.playerFlags(dd.apiView, 0);
          return (0, hd.q)(0 !== (Od & Yd.Md.CanFly), 0 !== (Od & Yd.Md.Flying))
        }(dd.api)), (0, hd.q)(!1, !1), (dd => (0, Rd.x)(dd))),
        gliderBoostFuel: (0, Nd.d)((dd => () => Yd.q.gliderBoostFuel(dd.api.apiView, 0)), 0, (dd => (0, Rd.x)(dd))),
        crosshairTarget: hO
      },
      oO = {
        hotbarSlotRequested: OO.e.events.hotbarSlotRequested,
        hotbarScrolled: OO.e.events.hotbarScrolled,
        numberKeyPressed: OO.e.events.numberKeyPressed,
        shotDamageToShow: (0, hd.v)((dd => !0 === (0, dO.d)(dd, "showDamageAmounts")))
      },
      NO = {
        selectHotbarSlot: OO.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: dd => {
          WO = dd
        }
      },
      qO = {
        momentumFrac: function() {
          var dd, Od, md;
          const Wd = (0, Xd.l)(),
            Fd = performance.now(),
            Rd = null === Wd || void 0 === Wd || null === (dd = Wd.items.jK()) || void 0 === dd || null === (Od = dd.attributes) || void 0 === Od || null === (md = Od.customAttributes) || void 0 === md ? void 0 : md.enchantments;
          return vO = null !== Wd && null !== Rd && void 0 !== Rd && Rd.Momentum ? 0 !== (Yd.q.playerFlags(Wd.api.apiView, 0) & Yd.Md.Breaking) ? Math.max(0, Yd.q.momentumFrac(Wd.api.apiView, 0)) : Math.max(0, vO - (Fd - QO) / 1500) : 0, QO = Fd, vO
        }
      };
    var HO = md(42544);
    const yO = {
      lobbyManage(dd) {
        var Od;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.LobbyManage, dd)
      }
    };
    var bO = md(1300),
      TO = md(38121),
      pO = md(9938),
      YO = md(1765),
      gO = md(3372),
      wO = md(5580);
    let aO = !1;

    function EO(dd) {
      aO = dd
    }

    function JO() {
      "inGame" !== Pd.e.get("gameState") || (0, YO.q)() || vd.j.lQ("ctrlCrouchWithoutFullscreen")
    }
    let UO = !1;
    const xO = {
        OpenEmoteWheel: () => {
          EO(!0), UO = !0, queueMicrotask((() => {
            UO && (UO = !1, vd.j.lQ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          vd.j.lQ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, TO.b)() || vd.j.lQ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, TO.b)() || vd.j.lQ("XKeyPressed")
        },
        CtrlCrouch: JO,
        "primary-fire": () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      BO = {
        OpenEmoteWheel: () => {
          EO(!1), UO ? (UO = !1, (0, pO.e)() || vd.j.lQ("requestEmoteWheelHoldOpen")) : vd.j.lQ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: JO,
        "primary-fire": () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          vd.j.lQ("mouseState", {
            lK: bO.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let SO = !1;

    function sO() {
      SO || (SO = !0, (0, wO.h)((dd => {
        if ((0, Fd.e)()) return;
        const Od = (0, wO.e)(dd) ? "primary-fire" : dd.action;
        var md;
        if (dd.down) {
          if (0 === (dd.flags & gO.c.Synthetic)) {
            var Wd;
            null === (Wd = xO[Od]) || void 0 === Wd || Wd.call(xO)
          }
        } else null === (md = BO[Od]) || void 0 === md || md.call(BO)
      })))
    }
    var uO = md(387),
      VO = md(107),
      iO = md(46),
      AO = md(42856),
      rO = md(1415),
      GO = md(3394);
    let nO = !1;
    const LO = {
      sendCodeCollab(dd) {
        var Od;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.CodeCollab, (0, Vd.o)(dd), (0, GO.f)(dd))
      }
    };
    var PO = md(40676),
      zO = md(9854);
    let cO = null,
      jO = !1,
      DO = null;

    function eO() {
      return "inGame" === Pd.e.get("gameState") && !(0, TO.b)()
    }
    const IO = {
        OpenInventory: dd => {
          (0, YO.v)(dd, "inventory", (0, HO.l)())
        },
        OpenShop: dd => {
          cO && eO() && (0, YO.s)(dd, uO.m.SHOP, !cO.shopIsEmpty(pd.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: dd => {
          var Od, md;
          eO() && (0, YO.x)(dd, (0, PO.b)({
            lobbyLeaderboardInfo: pd.e.get("lobbyLeaderboardInfo"),
            lobbyManage: pd.e.get("lobbyManage")
          }), null !== (Od = null === (md = cO) || void 0 === md ? void 0 : md.getClientGameLeaderboardKey()) && void 0 !== Od ? Od : null)
        },
        OpenTasksAndLeaderboard: dd => {
          var Od;
          const md = null === (Od = cO) || void 0 === Od ? void 0 : Od.getClientGameMapKey();
          md ? (0, YO.A)(dd, !0, md) : (0, YO.v)(dd, "retentionFeatures", !(!pd.e.get("_tasks") && !pd.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: dd => {
          (0, YO.v)(dd, "inviteLink", VO.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: dd => {
          eO() && function(dd) {
            const Od = (0, Xd.l)(),
              md = null !== Od && void 0 !== Od && Od.isSessionLive ? Od.api : null,
              Wd = md ? md.hY(md.localId) : null;
            (0, YO.A)(dd, null !== Wd && (0, GO.b)((0, rO.b)()), (() => {
              (0, GO.h)(Wd)
            }))
          }(dd)
        },
        HideUi: () => {
          vd.j.lQ("showUi", !1)
        }
      },
      lO = {
        HideUi: () => {
          vd.j.lQ("showUi", !0)
        }
      };

    function CO() {
      jO || (jO = !0, md.e(183).then((() => md(64743))).then((dd => {
        cO = dd
      }), (dd => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", dd)
      })), (0, AO.v)((dd => {
        dd || !(0, AO.l)() || (0, VO.isMobile)() || !iO.k.getItem("disableFullscreen") || (0, YO.m)() || Pd.e.set({
          openEverythingMenuName: uO.m.SETTINGS
        })
      })), (0, wO.h)((dd => {
        let {
          action: Od,
          down: md,
          press: Wd
        } = dd;
        var Rd, Xd;
        (0, Fd.e)() || (md ? null === (Rd = IO[Od]) || void 0 === Rd || Rd.call(IO, function(dd) {
          var Od;
          if (0 === dd || (null === (Od = DO) || void 0 === Od ? void 0 : Od.press) !== dd) {
            const Od = {
              press: dd,
              event: (0, zO.b)("inputAction")
            };
            DO = Od, queueMicrotask((() => {
              DO === Od && (DO = null)
            }))
          }
          return DO.event
        }(Wd)) : null === (Xd = lO[Od]) || void 0 === Xd || Xd.call(lO))
      })))
    }
    var ZO = md(40584),
      kO = md(40575),
      fO = md(40573);
    const MO = {
      completeTask(dd) {
        var Od;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.CompleteTask, (0, Vd.q)(dd))
      },
      setServerCookie(dd) {
        var Od;
        let {
          key: md,
          value: Wd
        } = dd;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.GeneralCookieSet, (0, Vd.w)({
          QQ: md,
          tQ: Wd
        }))
      },
      answerUiRequest(dd) {
        var Od;
        let {
          id: md,
          WQ: Wd
        } = dd;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.UiRequestResp, (0, Vd.X)({
          bX: md,
          TX: Wd,
          pX: 5
        }))
      },
      chooseRewardedAd(dd) {
        var Od;
        let {
          id: md,
          WQ: Wd
        } = dd;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.UiRequestResponded, (0, Vd.T)({
          id: md,
          WQ: Wd
        }))
      },
      requestLeaderboard(dd) {
        var Od;
        let {
          category: md,
          timeframe: Wd,
          seeTop: Fd
        } = dd;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.LeaderboardRequest, {
          category: md,
          timeframe: Wd,
          seeTop: Fd
        })
      }
    };
    let dm = !1;
    const Om = Td.i.Hb / 2,
      mm = [Om, -Om, -Om, -Om, Om, Om, -Om, Om],
      Wm = [0, 0, 0];

    function Fm(dd, Od, md) {
      for (let Wd = 0; Wd < dd.length; Wd += 2)
        if (dd[Wd] === Od && dd[Wd + 1] === md) return !0;
      return !1
    }
    const Rm = {
      blocksStandingOn: function() {
        const dd = (0, Xd.l)();
        if (null === dd) return [];
        const {
          api: Od,
          chunks: md,
          tables: Wd
        } = dd;
        if (!Od.readPosition(Od.localId, Wm)) return [];
        const [Fd, Rd, Kd] = Wm, hd = Math.ceil(Rd) - 1, vd = [], Qd = [];
        for (let Xd = 0; Xd < mm.length; Xd += 2) {
          const dd = Fd + mm[Xd],
            Od = Kd + mm[Xd + 1];
          if (Number.isInteger(dd) || Number.isInteger(Od)) continue;
          const Rd = Math.floor(dd),
            td = Math.floor(Od);
          if (Fm(Qd, Rd, td)) continue;
          const od = md.XK(Rd, hd, td);
          Wd.isSolidBlockId(od) && (Qd.push(Rd, td), vd.push(Wd.nameOfId(od)))
        }
        return vd
      },
      dropAhead: function() {
        const dd = (0, Xd.l)();
        return null !== dd && 0 !== (Yd.q.playerFlags(dd.api.apiView, 0) & Yd.Md.DropAhead)
      }
    };
    var Xm = md(38486),
      Km = md(40652),
      hm = md(1462),
      Qm = md(42623);
    const tm = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      om = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Nm() {
      const dd = new Set;
      return {
        add: Od => (dd.add(Od), () => {
          dd.delete(Od)
        }),
        fire() {
          for (const Od of dd) Od()
        }
      }
    }
    const qm = Object.freeze([]);

    function Hm(dd, Od) {
      let md, {
        rereads: Wd,
        followLocalId: Fd
      } = Od;
      const Xd = () => (md = (0, Md.l)(md, dd()), md);
      return {
        current: Xd,
        watch(dd) {
          const Od = (0, qd.d)((Od => {
            Wd(Od) && dd(Xd())
          }));
          if (!Fd) return Od;
          let md = (0, Nd.h)();
          const Kd = (0, Rd.A)((() => {
            const Od = (0, Nd.h)();
            Od !== md && (md = Od, dd(Xd()))
          }));
          return () => {
            Od(), Kd()
          }
        }
      }
    }
    const ym = {
        players: Hm((function() {
          const dd = qd.f.ids(),
            Od = {};
          for (const Rd of dd) {
            var md, Wd, Fd;
            Od[Rd] = {
              name: null !== (md = qd.f.getName(Rd)) && void 0 !== md ? md : null,
              ranks: null !== (Wd = qd.f.getSetting(Rd, "ranks")) && void 0 !== Wd ? Wd : qm,
              cosmetics: null !== (Fd = (0, qd.i)(Rd)) && void 0 !== Fd ? Fd : null
            }
          }
          return {
            ids: dd,
            byId: Od,
            localId: (0, Nd.h)()
          }
        }), {
          rereads: dd => "roster" !== dd.kind || dd.members || dd.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Hm((function() {
          const dd = {};
          for (const Fd of qd.f.ids()) {
            var Od, md, Wd;
            dd[Fd] = {
              colour: null !== (Od = qd.f.getSetting(Fd, "colorInLobbyLeaderboard")) && void 0 !== Od ? Od : null,
              values: null !== (md = qd.f.getSetting(Fd, "lobbyLeaderboardValues")) && void 0 !== md ? md : null,
              tags: null !== (Wd = qd.f.getSetting(Fd, "lobbyLeaderboardTags")) && void 0 !== Wd ? Wd : null
            }
          }
          return dd
        }), {
          rereads: function(dd) {
            if ("roster" !== dd.kind) return "reset" === dd.kind;
            const {
              members: Od,
              settings: md
            } = dd;
            return Od || md.has("colorInLobbyLeaderboard") || md.has("lobbyLeaderboardValues") || md.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      bm = {
        cosmeticsUpdated: {
          watch: dd => (0, qd.d)((Od => {
            if ("cosmetics" !== Od.kind) return;
            const md = (0, Nd.h)();
            dd(Od.updates.map((dd => {
              let {
                XF: Od,
                KF: Wd,
                hF: Fd
              } = dd;
              return {
                local: Od === md,
                KF: Wd,
                hF: Fd
              }
            })))
          }))
        }
      };
    var Tm = md(3986),
      pm = md(1890),
      Ym = md(747),
      gm = md(42910);
    let wm = !1,
      am = null;
    const Em = {
      setShopOpen(dd) {
        var Od;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.ShopMenuChanged, (0, Vd.O)(dd))
      },
      buyShopItem(dd) {
        var Od;
        let {
          categoryKey: md,
          itemKey: Wd,
          userInput: Fd
        } = dd;
        null === (Od = (0, Xd.l)()) || void 0 === Od || Od.send(Vd.c.ItemBought, {
          categoryKey: md,
          itemKey: Wd,
          shopVersion: pd.e.get("_shopVersion"),
          userInput: Fd
        })
      }
    };
    let Jm = !1;
    var Um = md(5590);
    const xm = gO.w.LookFrozen | gO.w.ClicksSuppressed;

    function Bm(dd, Od) {
      var md;
      null !== (md = (0, Xd.l)()) && void 0 !== md && md.send(dd, Od) || console.warn(`[bloxd-wasm-client] message ${dd} not sent: no live game or the core's command ring is full`)
    }(0, Hd.k)(ud.gb, (dd => {
      const Od = (0, Ad.h)(ud.gb, dd);
      void 0 !== Od && vd.j.lQ("setDiscordReportKey", Od)
    }));
    const Sm = {
      ignorePlayer(dd) {
        Bm(Vd.c.IgnoreUser, (0, Vd.y)({
          dQ: dd
        }))
      },
      reportPlayer(dd) {
        let {
          playerId: Od,
          chatMsgId: md,
          contextChatMsgIds: Wd,
          policy: Fd,
          details: Rd
        } = dd;
        Bm(Vd.c.UserReport, (0, Vd.cb)({
          SQ: Od,
          sQ: md,
          policy: Fd,
          KK: Rd,
          uQ: Wd
        }))
      },
      reportWorldCodeChat(dd) {
        let {
          chatMsgId: Od,
          policy: md,
          details: Wd
        } = dd;
        Bm(Vd.c.UserReport, (0, Vd.cb)({
          SQ: "",
          sQ: Od,
          policy: md,
          KK: Wd,
          uQ: []
        }))
      },
      requestDiscordReportKey(dd) {
        Bm(Vd.c.ReqDiscordReportKey, (0, Vd.K)(dd))
      },
      reportLobbyOrGame(dd) {
        let {
          target: Od,
          policy: md,
          details: Wd
        } = dd;
        "customGame" === Od ? Bm(Vd.c.CustomGameReport, (0, Vd.u)({
          policy: md,
          KK: Wd
        })) : Bm(Vd.c.LobbyReport, (0, Vd.C)({
          policy: md,
          KK: Wd
        }))
      },
      updateMyCosmetic(dd) {
        Bm(Vd.c.UpdateMyCosmetic, (0, Vd.ab)(dd))
      },
      holdEmoteWheel(dd) {
        !dd || aO ? (0, Um.i)(xm, dd ? xm : 0) : vd.j.lQ("requestEmoteWheelHoldRelease")
      }
    };
    var sm = md(42986),
      um = md(5733),
      Vm = md(41319);
    const im = [0, 0, 0],
      Am = [0, 0, 0],
      rm = [0, 0, 0],
      Gm = {
        blockAtViewPoint(dd) {
          let {
            x: Od,
            y: md
          } = dd;
          const Wd = (0, Xd.l)();
          if (null === Wd || void 0 === Wd || !Wd.renderFrame.hasView) return null;
          const {
            renderFrame: Fd,
            clientApi: Rd,
            api: Kd
          } = Wd;
          let hd = 0;
          return (0, Vm.d)(((dd, Od, md) => (hd = Rd.getBlockId(dd, Od, md), 0 !== hd)), Fd.cameraPosition, (0, Vm.f)((dd => Yd.q.viewProj(Kd.apiView, 0, dd)), Od, md, im), Vm.b, Am, rm) ? {
            pos: [Am[0], Am[1], Am[2]],
            normal: [rm[0], rm[1], rm[2]],
            name: (0, um.g)(hd)
          } : null
        }
      },
      nm = {
        setBlockHighlight(dd) {
          var Od;
          null === (Od = (0, Xd.l)()) || void 0 === Od || Od.setBlockHighlight(dd)
        }
      };
    var Lm = md(2100),
      Pm = md(42899),
      zm = md(42991),
      cm = md(2127),
      jm = md(38020),
      Dm = md(285);
    const em = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      Im = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * em.fallbackRem,
        asked: new Set
      },
      lm = 2e3,
      Cm = 4;
    let Zm = [],
      km = !1,
      fm = !1,
      Mm = !1;
    const dW = new Set,
      OW = [];
    let mW = 0,
      WW = null;

    function FW() {
      return km && (0, jm.f)()
    }

    function RW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wd.gameBridge.latest("inventory");
      if (Mm && !fm) {
        for (const md of dd.player) {
          var Od;
          if (null !== md) XW(null !== (Od = md.icon) && void 0 !== Od ? Od : md.name, em)
        }
        for (const dd of [...Yd.L, ...Zm]) XW(dd, Im);
        hW()
      }
    }

    function XW(dd, Od) {
      Od.asked.has(dd) || dW.has(dd) || ("model" === Wd.gameBridge.lookup("itemIcon", dd).kind ? (Od.asked.add(dd), OW.push({
        name: dd,
        slot: Od
      })) : dW.add(dd))
    }

    function KW(dd) {
      Zm = dd, RW()
    }

    function hW() {
      !Mm || fm || null !== WW || 0 === OW.length || mW >= Cm || (WW = (0, Dm.e)((() => {
        WW = null;
        const dd = OW.shift();
        void 0 !== dd && Mm && (mW++, async function(dd, Od) {
          var md, Fd;
          if (await (0, jm.l)(), !Mm) return void Od.asked.delete(dd);
          if (!(0, jm.f)()) return void(fm = !0);
          const Rd = window.devicePixelRatio,
            Xd = null !== (md = null === (Fd = document.querySelector(Od.icon)) || void 0 === Fd ? void 0 : Fd.getBoundingClientRect().width) && void 0 !== md ? md : 0,
            Kd = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            hd = Math.round((Xd > 0 ? Xd : Od.fallbackRem * Kd) * Rd);
          try {
            await Wd.gameBridge.query("blockIcon", {
              name: dd,
              size: hd,
              lineWidth: (0, cm.c)(Rd)
            }) || Od.asked.delete(dd)
          } catch {
            Od.asked.delete(dd)
          }
        }(dd.name, dd.slot).finally((() => {
          mW--, hW()
        })), hW())
      }), {
        timeoutMs: lm
      }))
    }
    var vW = md(5155),
      QW = md(5132),
      tW = md(42993),
      oW = md(4509),
      NW = md(4515);
    let qW = null,
      HW = null;

    function yW(dd) {
      const Od = dd.startsWith(NW.l),
        [md, Wd = md, Fd = md] = (Od ? dd.slice(NW.l.length) : dd).split(NW.h);
      return {
        top: md,
        left: Wd,
        right: Fd,
        half: Od
      }
    }

    function bW(dd) {
      const Od = null === qW ? void 0 : (0, oW.d)(dd),
        md = void 0 === Od ? 0 : qW.codes[Od];
      return 0 === md ? void 0 : qW.pool[md - 1]
    }
    var TW = md(4502),
      pW = md(5126),
      YW = md(5151),
      gW = md(37837),
      wW = md(37839);
    const aW = "item:";
    let EW = null,
      JW = null,
      UW = null,
      xW = null,
      BW = !1,
      SW = !1;

    function sW() {
      return SW || (SW = !0, (0, YW.n)().then((dd => {
        dd && (0, Lm.d)()
      }))), UW ??= Promise.all([(0, TW.d)(), (HW ??= md.e(1).then((() => md(64758))).then((dd => {
        let {
          BLOCK_FACE_RUNS: Od,
          BLOCK_FACES: md,
          MAX_FACE_ITEM_ID: Wd
        } = dd;
        qW = {
          codes: (0, NW.G)(Od, Wd + 1),
          pool: md.split(NW.v).map(yW)
        }
      }), (dd => {
        throw HW = null, dd
      })), HW), (0, wW.d)(), md.e(225).then((() => md(35549)))]).then((dd => {
        let [, , Od, md] = dd;
        Od.followBundledTextures(), EW = Od, JW = md, (0, Lm.d)()
      }), (dd => {
        UW = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", dd)
      })), UW
    }

    function uW(dd) {
      var Od, md;
      return null !== (Od = null === (md = (0, gW.i)()) || void 0 === md ? void 0 : md.textureUrl(dd)) && void 0 !== Od ? Od : EW.itemSpriteUrl(dd)
    }

    function VW(dd) {
      var Od, md;
      return null !== (Od = null === (md = (0, gW.i)()) || void 0 === md ? void 0 : md.textureUrl(dd)) && void 0 !== Od ? Od : EW.blockTextureUrl(dd)
    }

    function iW(dd) {
      var Od;
      return null !== (Od = (0, TW.c)(dd)) && void 0 !== Od ? Od : dd
    }

    function AW(dd, Od) {
      var md, Wd, Fd;
      return null !== (md = null !== (Wd = null !== (Fd = VW(dd)) && void 0 !== Fd ? Fd : null === Od || void 0 === Od ? void 0 : Od.rotated[dd]) && void 0 !== Wd ? Wd : null === Od || void 0 === Od ? void 0 : Od.animated[dd]) && void 0 !== md ? md : EW.notFoundUrl()
    }

    function rW(dd) {
      return void 0 !== (0, oW.d)(dd) ? dd : /^[1-9][0-9]*$/.test(dd) ? (0, oW.h)(Number(dd)) : void 0
    }

    function GW(dd) {
      var Od;
      if (dd.startsWith(aW)) {
        var md;
        const Od = (0, TW.c)(dd.slice(5));
        return null !== (md = void 0 === Od ? null : uW(Od)) && void 0 !== md ? md : EW.notFoundUrl()
      }
      return null !== (Od = EW.particleUrl(dd)) && void 0 !== Od ? Od : EW.notFoundUrl()
    }

    function nW(dd, Od) {
      return "StairsBlock" === dd ? dd : Od ? "SlabBlock" : "CubeBlock"
    }
    const LW = {
        async blockIcon(dd) {
          var Od;
          let {
            name: Wd,
            size: Fd,
            lineWidth: Rd
          } = dd;
          await sW();
          const Xd = null !== (Od = rW(Wd)) && void 0 !== Od ? Od : Wd,
            Kd = (0, YW.f)(Xd, Fd, Rd);
          if (null !== Kd) return Kd;
          const hd = bW(Xd),
            vd = (0, oW.d)(Xd),
            Qd = void 0 === vd || null === JW ? void 0 : JW.itemTypeNameOf(vd);
          if (null === EW || void 0 === hd) return "";
          const td = [hd.top, hd.left, hd.right].some((dd => null === VW(dd))),
            od = td ? await (xW ??= md.e(235).then((() => md(35669))).then((dd => (BW && (BW = !1, (0, Lm.d)()), {
              rotated: dd.rotatedBlockTextures,
              animated: dd.animatedBlockTextures
            })), (dd => (xW = null, BW = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", dd), null))), xW) : null;
          if (td && null === od) return "";
          const Nd = {
              top: AW(hd.top, od),
              left: AW(hd.left, od),
              right: AW(hd.right, od),
              itemType: nW(Qd, hd.half)
            },
            qd = (0, gW.e)(),
            Hd = 0 === qd ? Xd : `${Xd}#${qd}`;
          return (await (0, pW.e)()).drawBlockIconUrl(Hd, Fd, Rd, (() => Nd))
        }
      },
      PW = {
        itemIcon: function(dd) {
          var Od, md, Fd, Rd;
          if (null === EW) return sW(), Wd.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(dd);
          if ((0, QW.h)(dd)) return {
            kind: "icon",
            url: null !== (md = null !== (Fd = null === (Rd = (0, gW.i)()) || void 0 === Rd ? void 0 : Rd.textureUrl(dd)) && void 0 !== Fd ? Fd : EW.ingameIconUrl(dd)) && void 0 !== md ? md : EW.notFoundUrl()
          };
          if (dd.startsWith(QW.d)) return {
            kind: "icon",
            url: GW(dd.slice(QW.d.length))
          };
          if (0 === (0, oW.i)()) return (0, tW.b)(), Wd.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(dd);
          const Xd = null !== (Od = rW(dd)) && void 0 !== Od ? Od : dd,
            Kd = (0, oW.d)(Xd),
            hd = void 0 === Kd ? void 0 : JW.itemTypeNameOf(Kd);
          if (void 0 !== bW(Xd)) return {
            kind: "drawnBlock"
          };
          const vd = function(dd) {
            var Od;
            return null !== (Od = uW(iW(dd))) && void 0 !== Od ? Od : EW.notFoundUrl()
          }(Xd);
          if ((0, YW.k)(Xd) && ! function(dd) {
              const Od = (0, gW.i)();
              return null !== Od && (null !== Od.textureUrl(iW(dd)) || (0, YW.e)(dd).some((dd => null !== Od.modelUrl(dd))))
            }(Xd)) return {
            kind: "model",
            url: vd,
            drawn: (0, YW.h)(Xd)
          };
          if ("Gun" === hd) return {
            kind: "gun",
            url: vd
          };
          if (void 0 !== Kd && "GrayscaleArmour" === JW.itemTypeOf(Kd) || Object.hasOwn(vW.b, Xd)) {
            var Qd;
            const Od = null !== (Qd = (0, vW.c)(dd)) && void 0 !== Qd ? Qd : (0, vW.c)(Xd);
            if (Od) return {
              kind: "item",
              url: vd,
              tint: Od
            }
          }
          return {
            kind: "item",
            url: vd
          }
        },
        hasIcon: function(dd) {
          return void 0 !== rW(dd) || (0, QW.h)(dd) || dd.startsWith(QW.d)
        },
        isItemName: function(dd) {
          return void 0 !== rW(dd)
        }
      };

    function zW() {
      (0, Wd.installPageSources)({
        commands: {
          ...Wd.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Pm.i,
          prewarmCreativeIcons: KW
        },
        queries: LW,
        lookups: {
          ...Wd.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...PW,
          aY: Pm.f,
          drawCallStats: zm.h,
          iconsDrawAhead: FW
        }
      }), (0, Lm.d)(), sW(), km || (km = !0, vd.j.subscribe("gameJoined", (() => {
        var dd;
        Mm = !1, null === (dd = WW) || void 0 === dd || dd(), WW = null;
        for (const {
            name: Od,
            slot: md
          }
          of OW.splice(0)) md.asked.delete(Od)
      })), vd.j.subscribe("gamePlayable", (() => {
        Mm = !0, RW()
      })), Wd.gameBridge.subscribe("inventory", RW), Wd.gameBridge.subscribe("itemIconsVersion", (() => {
        dW.clear(), RW()
      })))
    }
    var cW = md(693),
      jW = md(41328);

    function DW(dd) {
      if (null === dd || void 0 === dd || !dd.isCoreRunning) return null;
      const {
        api: Od,
        chunks: md,
        items: Wd,
        tables: Fd
      } = dd;
      return {
        playerFeet() {
          const dd = Od.hY(Od.localId);
          return null !== dd && void 0 !== dd && dd.every(Number.isFinite) ? dd : null
        },
        chunkBlocks: dd => md.isLoaded(dd[0], dd[1], dd[2]) ? (dd, Od, Wd) => md.XK(dd, Od, Wd) : null,
        blockName: dd => Fd.nameOfId(dd),
        inventory: () => ({
          slots: Wd.playerItems().map((dd => dd ? {
            name: dd.name,
            amount: dd.amount
          } : null)),
          heldSlot: Wd.selectedSlot
        }),
        nearby() {
          const md = [];
          for (let Fd = 0; Fd < Od.idStr.length; Fd++) {
            var Wd;
            const Rd = Od.idStr[Fd],
              Xd = Od.serverIds[Fd],
              Kd = Od.kinds[Fd];
            if (null === Rd || Od.isLocal(Xd) || Kd >>> Yd.c !== Yd.o.Lifeform) continue;
            const hd = Od.hY(Xd),
              vd = cW.h[Kd & Yd.f];
            hd && void 0 !== vd && md.push({
              kind: "Player" === vd ? "player" : vd,
              name: null !== (Wd = dd.clientApi.getEntityName(Rd)) && void 0 !== Wd ? Wd : null,
              position: hd
            })
          }
          return md
        },
        droppedItems() {
          let dd = 0;
          for (let md = 0; md < Od.idStr.length; md++) null !== Od.idStr[md] && Od.kinds[md] >>> Yd.c === Yd.o.Item && dd++;
          return dd
        }
      }
    }
    const eW = {
        worldCodeAiChunk: dd => Promise.resolve((0, jW.d)(DW((0, Xd.l)()), dd)),
        worldCodeAiGameState: () => Promise.resolve((0, jW.e)(DW((0, Xd.l)())))
      },
      IW = function(dd) {
        const Od = Nm(),
          Wd = Nm(),
          Fd = new Set,
          Rd = new Set,
          Xd = () => {
            var Od, md;
            return null !== (Od = null === (md = dd.runtime()) || void 0 === md ? void 0 : md.currentViewer) && void 0 !== Od ? Od : null
          };
        let Kd = null,
          hd = null;
        const Qd = (dd, Od) => ({
            current: dd,
            watch(md) {
              let Wd = dd();
              return Od.add((() => {
                const Od = dd();
                Od !== Wd && (Wd = Od, md(Od))
              }))
            }
          }),
          od = dd => ({
            watch: Od => (dd.add(Od), () => {
              dd.delete(Od)
            })
          }),
          Nd = dd => {
            const Od = Xd(),
              md = null === Od || void 0 === Od ? void 0 : Od.view;
            Od && md && Od.seek(Math.max(0, Math.min(md.totalTicks - 1, md.Et + dd * td.zd)))
          },
          qd = {
            replay: Qd((() => {
              var dd;
              const Od = Xd(),
                md = null !== (dd = null === Od || void 0 === Od ? void 0 : Od.view) && void 0 !== dd ? dd : null;
              return null === Od || null === md || md.state === td.ld.None ? (Kd = null, null) : (Kd = (0, Md.l)(Kd, {
                id: Od.id,
                Et: md.Et,
                totalTicks: md.totalTicks,
                wV: td.zd,
                playing: md.state === td.ld.Playing,
                speed: md.speed,
                cameraMode: md.cameraMode,
                freecam: "freecam" === md.cameraMode
              }), Kd)
            }), Od),
            replayEdits: Qd((() => {
              var dd;
              const Od = Xd(),
                md = null !== (dd = null === Od || void 0 === Od ? void 0 : Od.view) && void 0 !== dd ? dd : null;
              return null === Od || null === md || md.state === td.ld.None ? (hd = null, null) : (hd = (0, Md.l)(hd, {
                cameraKeyframes: [...Od.keyframes],
                playbackMark: md.mark,
                fileName: Od.fileName,
                unsavedChanges: Od.unsavedChanges,
                suggestSaveAs: Od.suggestSaveAs
              }), hd)
            }), Od),
            replayRecorder: Qd((() => {
              var Od, md;
              return null !== (Od = null === (md = dd.runtime()) || void 0 === md ? void 0 : md.recorder.current) && void 0 !== Od ? Od : Qm.b.states.replayRecorder.current()
            }), Wd),
            replayVideoExporting: {
              current: Km.d,
              watch: dd => (0, vd.l)("replayViewer|videoExportChanged", (() => {
                dd((0, Km.d)())
              }))
            }
          },
          Hd = {
            replayUiActionRequested: od(Rd),
            replayViewerRequested: od(Fd)
          },
          yd = dd => {
            for (const Od of Fd) Od(dd)
          },
          bd = () => {
            var Wd;
            !0 === (null === (Wd = Xd()) || void 0 === Wd ? void 0 : Wd.isOpen) && Promise.all([md.e(113), md.e(79)]).then((() => md(64747))).then((md => {
              let {
                startWasmReplayVideoExport: Wd
              } = md;
              return Wd({
                viewer: Xd,
                canvas: () => {
                  var Od, md;
                  return null !== (Od = null === (md = dd.canvas) || void 0 === md ? void 0 : md.call(dd)) && void 0 !== Od ? Od : null
                },
                watchViewer: Od.add,
                requestViewer: yd
              })
            }), (dd => {
              console.error("Couldn't load the video export", dd), hm.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((dd => {
              console.error("The video export failed", dd)
            }))
          },
          Td = {
            replayAction(dd) {
              if ((0, Km.d)()) return;
              const Od = Xd();
              switch (dd) {
                case "replaySkipBack":
                  Nd(-1);
                  break;
                case "replaySkipForward":
                  Nd(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Od && void 0 !== Od && Od.view && Od.setSpeed((0, Xm.i)(Od.view.speed, "replaySpeedUp" === dd ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Od || void 0 === Od || Od.addKeyframe()
              }
            },
            setReplayPlaying(dd) {
              var Od, md;
              (0, Km.d)() || (dd ? null === (Od = Xd()) || void 0 === Od || Od.play() : null === (md = Xd()) || void 0 === md || md.pause())
            },
            seekReplay(dd) {
              var Od;
              let {
                Et: md,
                ignorePlaybackMark: Wd
              } = dd;
              null === (Od = Xd()) || void 0 === Od || Od.seek(md, null !== Wd && void 0 !== Wd && Wd)
            },
            setReplayCameraMode(dd) {
              var Od;
              null === (Od = Xd()) || void 0 === Od || Od.setCameraMode(dd)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(dd) {
              var Od;
              null === (Od = Xd()) || void 0 === Od || Od.setKeyframe(dd)
            },
            moveReplayCameraKeyframe(dd) {
              var Od;
              let {
                from: md,
                to: Wd
              } = dd;
              null === (Od = Xd()) || void 0 === Od || Od.moveKeyframe(md, Wd)
            },
            deleteReplayCameraKeyframes(dd) {
              var Od;
              let {
                start: md,
                end: Wd
              } = dd;
              null === (Od = Xd()) || void 0 === Od || Od.deleteKeyframes(md, Wd)
            },
            setReplayPlaybackMark(dd) {
              var Od;
              null === (Od = Xd()) || void 0 === Od || Od.setMark(dd)
            },
            cropReplay(dd) {
              var Od, md;
              let {
                start: Wd,
                end: Fd
              } = dd;
              return !(0, Km.d)() && (null !== (Od = null === (md = Xd()) || void 0 === md ? void 0 : md.crop(Wd, Fd)) && void 0 !== Od && Od)
            },
            holdReplayForShaderPackFailure(dd) {
              const Od = Xd();
              Od && (Od.holdForShaderPackFailure(), function(dd) {
                md.e(138).then((() => md(40819))).then((Od => {
                  let {
                    shaderPackPage: md
                  } = Od;
                  md.block(dd)
                })).catch((dd => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", dd)
                }))
              }(dd))
            },
            exportReplayVideo() {
              bd()
            },
            toggleRecording() {
              var Od;
              null === (Od = dd.runtime()) || void 0 === Od || Od.recorder.toggleRecording()
            },
            saveClip() {
              var Od;
              null === (Od = dd.runtime()) || void 0 === Od || Od.recorder.saveClip()
            },
            setRecorderPrefs(Od) {
              var md;
              let {
                clipping: Wd,
                clipSeconds: Fd
              } = Od;
              null === (md = dd.runtime()) || void 0 === md || md.recorder.setPrefs(Wd, Fd)
            },
            setReplayViewerOpen(Od) {
              var md;
              (0, TO.d)(Od) && (null === (md = dd.runtime()) || void 0 === md || md.recorder.viewerShown(Od))
            },
            recordFlyingMiddleText(Od) {
              var md;
              let {
                content: Wd,
                lR: Fd,
                angle: Rd,
                CR: Xd
              } = Od;
              null === (md = dd.runtime()) || void 0 === md || md.recorder.recordFlyingText(JSON.stringify(Wd), Fd, Rd, Xd)
            },
            dragReplayCamera(Od) {
              var md;
              let {
                dx: Wd,
                dy: Fd
              } = Od;
              null === (md = dd.freecam()) || void 0 === md || md.drag(Wd, Fd)
            },
            moveReplayFreecam(Od) {
              var md;
              null === (md = dd.freecam()) || void 0 === md || md.move(Od)
            },
            holdReplayFreecamVertical(Od) {
              var md;
              let {
                action: Wd,
                jK: Fd
              } = Od;
              null === (md = dd.freecam()) || void 0 === md || md.holdVertical(Wd, Fd)
            }
          },
          pd = dd => {
            var Od;
            const md = Xd(),
              Wd = null !== (Od = null === md || void 0 === md ? void 0 : md.view) && void 0 !== Od ? Od : null;
            tm.has(dd) ? (dd => {
              for (const Od of Rd) Od(dd)
            })(dd) : om.has(dd) ? Td.replayAction(dd) : "replayPlayPause" === dd ? md && Wd && Wd.state !== td.ld.None && Td.setReplayPlaying(Wd.state !== td.ld.Playing) : "replayChangeCameraMode" === dd ? null === md || void 0 === md || md.cycleCameraMode() : "replayExit" === dd ? !0 === (null === md || void 0 === md ? void 0 : md.inPlayback) && (0, rO.i)("/") : "replayExportVideo" === dd && bd()
          };
        let Yd = !1;
        return {
          states: qd,
          events: Hd,
          commands: Td,
          lookups: {
            replayCamera() {
              var Od, md, Wd;
              return !0 !== (null === (Od = Xd()) || void 0 === Od ? void 0 : Od.isOpen) ? null : null !== (md = null === (Wd = dd.cameraView) || void 0 === Wd ? void 0 : Wd.call(dd)) && void 0 !== md ? md : null
            },
            leaveGameReloadsPage() {
              var dd;
              return !0 === (null === (dd = Xd()) || void 0 === dd ? void 0 : dd.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var dd;
              const md = !0 === (null === (dd = Xd()) || void 0 === dd ? void 0 : dd.inPlayback);
              md !== Yd && (Yd = md, vd.j.lQ("connectedGameChanged")), Od.fire()
            },
            recorderChanged: Wd.fire,
            keyDown: dd => {
              var Od;
              switch (dd) {
                case "recordGame":
                  return void Td.toggleRecording();
                case "recordClip":
                  return void((0, TO.b)() || Td.saveClip())
              }(0, Km.d)() || ("replayViewerOpen" !== dd ? dd.startsWith("replay") && ((0, TO.b)() || !0 === (null === (Od = Xd()) || void 0 === Od ? void 0 : Od.inPlayback)) && pd(dd) : yd("toggle"))
            }
          }
        }
      }({
        runtime: Fd.m,
        cameraView: () => {
          var dd;
          const Od = null === (dd = (0, Xd.l)()) || void 0 === dd ? void 0 : dd.renderFrame;
          if (!Od) return null;
          const [md, Wd, Fd] = Od.cameraPosition, [Rd, Kd, hd] = Od.cameraDirection;
          return {
            position: [md, Wd, Fd],
            direction: [Rd, Kd, hd]
          }
        },
        canvas: () => {
          var dd, Od, md;
          return null !== (dd = null === (Od = (md = (0, Rd.O)()).canvas) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : null
        },
        freecam: Fd.j
      }),
      lW = {
        states: {
          ...tO,
          ...HO.i,
          ...IW.states,
          ...ym,
          ...jd
        },
        events: {
          ...oO,
          ...yd,
          ...HO.f,
          ...xd.d,
          ...sm.l,
          ...IW.events,
          ...bm,
          ...Ud.h
        },
        commands: {
          ...Jd,
          ...NO,
          ...bd,
          ...HO.e,
          ...MO,
          ...Sm,
          ...Ud.e,
          ...LO,
          ...IW.commands,
          ...Em,
          ...Dd,
          ...nm,
          ...yO
        },
        queries: {
          ...HO.h,
          ...eW
        },
        lookups: {
          ...qO,
          ...Gd,
          ...sm.n,
          ...IW.lookups,
          ...Ed,
          ...Rm,
          ...Gm,
          ...ed
        }
      };

    function CW() {
      (0, Kd.g)(Hd.m), (0, Fd.q)(IW.feed), (0, xd.h)(), dm || (dm = !0, (0, Hd.k)(ud.k, (dd => {
        const Od = (0, Ad.h)(ud.k, dd);
        "string" === typeof Od && Promise.resolve().then((() => md(4869))).then((dd => {
          let {
            onCosmeticPackGranted: md
          } = dd;
          md(Od)
        }))
      })), (0, Hd.k)(ud.bb, (dd => {
        const Od = (0, Ad.h)(ud.bb, dd);
        "number" === typeof Od && vd.j.lQ("serverUpdating", Date.now() + Od, !0)
      })), (0, Hd.k)(ud.H, (dd => {
        const Od = (0, Ad.h)(ud.H, dd);
        if ((0, Ad.d)(Od)) {
          const {
            vR: dd,
            QR: md
          } = Od;
          (0, kO.c)({
            vR: "string" === typeof dd ? dd : null,
            QR: "string" === typeof md ? md : null
          })
        }
      })), (0, Hd.k)(Qd.hc.NewUiRequest, (dd => {
        const Od = (0, Ad.k)(dd);
        (0, Ad.d)(Od) && "number" === typeof Od.id && (0, Ad.d)(Od.clientParameters) && (0, fO.i)(Od.id, Od.clientParameters)
      })), (0, Hd.k)(ud.Z, (dd => {
        const Od = (0, Ad.h)(ud.Z, dd);
        "number" === typeof Od && (0, fO.m)(Od)
      })), (0, Hd.i)(fO.e), (0, Hd.k)(Qd.hc.UiRequestPopup, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od) && "number" === typeof Od.id && ("string" === typeof Od.text || (0, Ad.d)(Od.text) && "string" === typeof Od.text.translationKey)) {
          const dd = Od.id;
          (0, fO.o)(dd, Od.text, !0 === Od.destructive, (Od => {
            MO.answerUiRequest({
              id: dd,
              WQ: Od
            })
          }))
        }
      })), (0, Hd.k)(Qd.hc.TopRightHelper, (dd => {
        const Od = (0, Ad.k)(dd);
        void 0 !== Od && vd.j.lQ("TopRightHelper", Od, !0)
      })), (0, Hd.k)(Qd.hc.TaskProgress, (dd => {
        const Od = (0, Ad.k)(dd);
        (0, Ad.d)(Od) && "string" === typeof Od.taskId && "number" === typeof Od.progress && (0, ZO.e)({
          taskId: Od.taskId,
          progress: Od.progress
        })
      }))), Jm || (Jm = !0, (0, Hd.k)(ud.r, (dd => {
        const Od = (0, Ad.h)(ud.r, dd);
        (0, Ad.d)(Od) && vd.j.lQ("showShopFromServer", {
          toggle: Od.iO,
          AO: Od.AO
        }, !0)
      })), (0, Hd.k)(Qd.hc.OverShopInfo, (dd => {
        const Od = (0, Ad.k)(dd);
        (0, Ad.d)(Od) && vd.j.lQ("overShopInfo", Od.info, !0)
      })), (0, Hd.k)(Qd.hc.ShowShopTutorial, (() => {
        vd.j.lQ("showShopTutorial", null, !0)
      }))), wm || (wm = !0, (0, Hd.g)((() => {
        var dd;
        (0, Tm.resetLeaveEvents)(), null === (dd = am) || void 0 === dd || dd(), am = (0, Hd.c)() ? (0, Ym.onVisitSessionGameServerConnected)(Hd.c) : null, (0, Hd.c)() || vd.j.jT()
      })), (0, Hd.k)(Qd.hc.SetCookie, (dd => {
        const Od = (0, Ad.k)(dd),
          md = (0, rO.b)().gameNameWithVariation;
        (0, Ad.d)(Od) && "string" === typeof Od.key && null !== md && (0, pm.setCookie)(md, Od.key, Od.value)
      })), (0, Hd.k)(Qd.hc.LeaveValues, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od) && "string" === typeof Od.leaveEventType) {
          const {
            leaveEventType: dd,
            category: md,
            subCategory: Wd,
            value: Fd
          } = Od;
          (0, Tm.updateLeaveValue)({
            leaveEventType: dd,
            category: md,
            subCategory: Wd,
            value: Fd
          })
        }
      })), (0, Hd.k)(Qd.hc.CustomAnalyticsEvent, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od) && "string" === typeof Od.cat1) {
          const {
            cat1: dd,
            cat2: md,
            cat3: Wd,
            value: Fd
          } = Od;
          (0, Tm.logCustomAnalyticsEvent)({
            cat1: dd,
            cat2: md,
            cat3: Wd,
            value: Fd
          })
        }
      })), (0, Hd.k)(Qd.hc.ProgressionEvent, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od)) {
          const {
            type: dd,
            location1: md,
            location2: Wd,
            location3: Fd,
            score: Rd
          } = Od;
          (0, Tm.logProgressionEvent)({
            type: dd,
            location1: md,
            location2: Wd,
            location3: Fd,
            score: Rd
          })
        }
      })), (0, Hd.k)(Qd.hc.ResourceEvent, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od)) {
          const {
            type: dd,
            resourceType: md,
            amount: Wd,
            category: Fd,
            itemName: Rd
          } = Od;
          (0, Tm.logResourceEvent)({
            type: dd,
            resourceType: md,
            amount: Wd,
            category: Fd,
            itemName: Rd
          })
        }
      })), (0, Hd.k)(Qd.hc.LeaderboardResponse, (dd => {
        const Od = (0, Ad.k)(dd);
        if ((0, Ad.d)(Od)) {
          const {
            category: dd,
            timeframe: md,
            data: Wd
          } = Od;
          vd.j.lQ("leaderboardResponse", {
            category: dd,
            timeframe: md,
            data: Wd
          })
        }
      })), (0, Hd.k)(ud.A, (dd => {
        const Od = (0, Ad.h)(ud.A, dd);
        "string" === typeof Od && (0, gm.c)(dd.conn, Od)
      })), (0, Hd.k)(ud.C, (dd => {
        const Od = (0, Ad.h)(ud.C, dd);
        "string" === typeof Od && console.error(`[logErrorToConsole]: ${Od}`)
      }))), Ld(), (0, sm.d)(), nO || (nO = !0, (0, Hd.k)(ud.j, (dd => {
        const Od = (0, Ad.h)(ud.j, dd);
        void 0 !== Od && (0, GO.l)(Od)
      }))), CO(), sO(), Cd || (Cd = !0, (0, Rd.x)(Zd)), Wd.gameBridge.attach(lW), zW()
    }
  },
  37839: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(37846);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Fd ??= md.e(74).then((() => md(43159))).catch((dd => {
        throw Fd = null, dd
      })), Fd
    }

    function Kd() {
      return Rd ??= Promise.all([Xd(), (0, Wd.e)()]).then((dd => {
        let [Od] = dd;
        return Od
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }
  },
  38022: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = {
      wait: function(dd) {
        return new Promise((Od => {
          setTimeout(Od, dd)
        }))
      },
      stallMs: 2e4
    };
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wd;
        this.url = dd, this.options = Od, this.timing = md, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = dd
      }
      ready() {
        if (null === this.fetched) {
          const dd = new AbortController;
          this.fetchAbort = dd, this.fetched = this.fetchWithRetries(dd.signal).then((Od => (this.fetchAbort === dd && (this.fetchAbort = null), Od)))
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
      async fetchWithRetries(dd) {
        for (let Od = 0;; Od++) {
          const md = new URL(this.url);
          if (Od > 0 && md.searchParams.set("cache-bust", `${Date.now()}-${Od}`), await this.fetchWhole(md, dd)) return this.scriptUrl = md, !0;
          if (Od >= 3 || dd.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Od), dd.aborted) return !1
        }
      }
      async fetchWhole(dd, Od) {
        const md = new AbortController;
        let Wd;
        const Fd = () => {
            clearTimeout(Wd), Wd = setTimeout((() => {
              md.abort()
            }), this.timing.stallMs)
          },
          Rd = () => {
            md.abort()
          };
        Od.addEventListener("abort", Rd, {
          once: !0
        }), Fd();
        try {
          var Xd;
          const Od = await fetch(dd, {
            signal: md.signal
          });
          if (!Od.ok) return !1;
          const Wd = null === (Xd = Od.body) || void 0 === Xd ? void 0 : Xd.getReader();
          if (!Wd) return !1;
          for (;;) {
            const {
              done: dd
            } = await Wd.read();
            if (dd) return !0;
            Fd()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Wd), Od.removeEventListener("abort", Rd)
        }
      }
    }
  },
  38603: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
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
  40596: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      d: () => Fd
    });
    const Wd = ["description", "label"];

    function Fd(dd) {
      const Od = dd.type;
      return {
        type: Od,
        params: dd[Od]
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);