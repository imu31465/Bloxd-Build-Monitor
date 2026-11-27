export const id = 55;
export const ids = [55];
export const modules = {
  41324: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      f: () => ar,
      j: () => Wr
    });
    const Zr = 6e3;

    function Wr(rr, Sr) {
      return [Math.floor(rr[0] / Sr) * Sr, Math.floor(rr[1] / Sr) * Sr, Math.floor(rr[2] / Sr) * Sr]
    }

    function ar(rr) {
      const Sr = (null !== rr && void 0 !== rr ? rr : "").match(/-?\d+(?:\.\d+)?/g);
      return Sr && Sr.length >= 3 ? [Number(Sr[0]), Number(Sr[1]), Number(Sr[2])] : null
    }

    function jr(rr, Sr) {
      return rr === Sr ? String(rr) : `${rr}-${Sr}`
    }

    function Ir(rr, Sr, Qr, Zr) {
      const Wr = [];
      let ar = new Map;
      for (let jr = rr[2]; jr < rr[2] + Sr; jr++) {
        const Ir = new Map;
        let fr = rr[0];
        for (; fr < rr[0] + Sr;) {
          const Wr = Zr(fr, Qr, jr);
          let Er = fr;
          for (; Er + 1 < rr[0] + Sr && Zr(Er + 1, Qr, jr) === Wr;) Er++;
          if (null !== Wr) {
            const rr = `${fr} ${Er} ${Wr}`,
              Sr = ar.get(rr);
            Sr ? (Sr.z1 = jr, ar.delete(rr), Ir.set(rr, Sr)) : Ir.set(rr, {
              x0: fr,
              x1: Er,
              z0: jr,
              z1: jr,
              name: Wr
            })
          }
          fr = Er + 1
        }
        Wr.push(...ar.values()), ar = Ir
      }
      return Wr.push(...ar.values()), Wr.sort(((rr, Sr) => rr.z0 - Sr.z0 || rr.x0 - Sr.x0)).map((rr => `x${jr(rr.x0,rr.x1)} z${jr(rr.z0,rr.z1)} ${rr.name}`))
    }

    function fr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Zr;
      const fr = [rr[0] + Sr - 1, rr[1] + Sr - 1, rr[2] + Sr - 1],
        Er = null !== Wr && Wr.every(((Sr, Qr) => Math.floor(Sr) >= rr[Qr] && Math.floor(Sr) <= fr[Qr])),
        pr = [`The chunk from ${rr.join(" ")} to ${fr.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Wr && pr.push(`The player's feet are at ${Wr.map(Math.floor).join(" ")}, ${Er?"in this chunk":"outside this chunk"}.`);
      const xr = [];
      for (let Zr = rr[1]; Zr <= fr[1]; Zr++) {
        const Wr = Ir(rr, Sr, Zr, Qr).join("; "),
          ar = xr[xr.length - 1];
        (null === ar || void 0 === ar ? void 0 : ar.boxes) === Wr ? ar.to = Zr : xr.push({
          from: Zr,
          to: Zr,
          boxes: Wr
        })
      }
      const mr = xr.filter((rr => "" !== rr.boxes));
      0 === mr.length && pr.push("It is all air.");
      let Nr = pr.join("\n").length;
      for (const Zr of mr) {
        const rr = `y${jr(Zr.from,Zr.to)}: ${Zr.boxes}`;
        if (Nr += rr.length + 1, Nr > ar) {
          pr.push(`Cut short: the layers from y${Zr.from} up aren't shown, as there are too many blocks.`);
          break
        }
        pr.push(rr)
      }
      return pr.join("\n")
    }
  },
  9904: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    var Zr = Qr(26);

    function Wr() {
      return !Zr.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38415: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr,
      d: () => ar,
      f: () => Wr
    });
    const Zr = [.25, .5, 1, 2, 4, 8, 16];

    function Wr(rr, Sr) {
      const Qr = Zr;
      let Wr = Qr.indexOf(rr);
      return -1 === Wr && (Wr = Qr.findIndex((Sr => Sr >= rr)), -1 === Wr && (Wr = Qr.length - 1)), "up" === Sr ? Qr[Math.min(Wr + 1, Qr.length - 1)] : Qr[Math.max(Wr - 1, 0)]
    }

    function ar(rr) {
      return rr <= Zr[0]
    }

    function jr(rr) {
      return rr >= Zr[Zr.length - 1]
    }
  },
  38031: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      f: () => ar
    });
    let Zr = !1;

    function Wr() {
      return Zr
    }

    function ar(rr) {
      return Zr !== rr && (Zr = rr, !0)
    }
  },
  40587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(34),
      Wr = Qr(2114);

    function ar(rr) {
      let {
        taskId: Sr,
        progress: Qr
      } = rr;
      const Zr = Wr.d.get("_tasks");
      null !== Zr && void 0 !== Zr && Zr[Sr] && Wr.d.apply({
        _tasks: {
          ...Zr,
          [Sr]: {
            ...Zr[Sr],
            progress: Qr
          }
        }
      })
    }
    Zr.i.subscribe("clientTaskProgress", (rr => {
      ar(rr)
    }))
  },
  41296: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Nr,
      f: () => tr,
      h: () => Er,
      j: () => xr,
      m: () => mr,
      q: () => fr,
      t: () => jr,
      u: () => pr,
      v: () => hr
    });
    var Zr = Qr(2114),
      Wr = Qr(34),
      ar = Qr(2119);
    const jr = (0, ar.l)((function() {
        var rr, Sr, Qr, Wr;
        return {
          health: null !== (rr = Zr.d.get("_health")) && void 0 !== rr ? rr : null,
          maxHealth: null !== (Sr = Zr.d.get("_totalMaxHealth")) && void 0 !== Sr ? Sr : null,
          shield: null !== (Qr = Zr.d.get("_shield")) && void 0 !== Qr ? Qr : null,
          maxShield: null !== (Wr = Zr.d.get("maxShield")) && void 0 !== Wr ? Wr : null
        }
      }), [], (0, ar.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Ir = [{
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

    function fr(rr, Sr) {
      return Ir[(rr ? 2 : 0) + (Sr ? 1 : 0)]
    }
    const Er = (0, ar.l)((function() {
      var rr;
      return null !== (rr = Zr.d.get("_aura")) && void 0 !== rr ? rr : null
    }), [], (0, ar.j)("_aura"));

    function pr(rr) {
      return {
        watch: Sr => (0, Wr.j)("shotPlayer", (Qr => {
          let {
            playerId: Zr,
            damage: Wr,
            wasCrit: ar,
            distance: jr
          } = Qr;
          rr(Zr) && Sr({
            damage: Wr,
            wasCrit: ar,
            distance: jr
          })
        }))
      }
    }

    function xr(rr) {
      return (0, ar.c)("chat", (Sr => {
        let {
          serverChatMsgId: Qr,
          worldCodeLineId: Zr,
          content: Wr,
          chatterEId: ar,
          chatterObjectsToReplay: jr
        } = Sr;
        return {
          serverChatMsgId: null !== Qr && void 0 !== Qr ? Qr : null,
          worldCodeLineId: null !== Zr && void 0 !== Zr ? Zr : null,
          content: Wr,
          author: ar ? rr(ar) : null,
          hiddenFromReplay: !0 === jr
        }
      }))
    }
    const mr = (0, ar.c)("chatRemoved");
    class Nr {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const Qr = this.shown;
        return rr !== this.needed && (this.needed = rr, this.neededSince = Sr, null === rr && (this.shown = null)), this.shown !== this.needed && Sr - this.neededSince > 200 && (this.shown = this.needed), this.shown !== Qr
      }
    }

    function Ur(rr) {
      return [{
        translationKey: `touchKeys:${rr}`
      }]
    }
    const tr = {
      open: Ur("open"),
      close: Ur("close"),
      milk: Ur("milk"),
      shear: Ur("shear"),
      tame: Ur("tame"),
      feed: Ur("feed"),
      ride: Ur("ride")
    };

    function hr(rr) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: rr
      }]
    }
  },
  37743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => jr
    });
    var Zr = Qr(4494);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Qr.e(242).then((() => Qr(37580))).then((rr => {
        let {
          ITEM_SPRITES: Sr,
          ITEM_SPRITES_WITHOUT_FILE: Qr,
          ITEM_FILES_WITHOUT_SPRITE: ar
        } = rr;
        Wr = function(rr, Sr, Qr) {
          const Wr = new Set,
            ar = (0, Zr.t)(Sr);
          let jr = 0;
          for (const [Zr, Ir] of rr.entries()) Zr === ar[jr] ? jr++ : Wr.add(Ir);
          if ("" !== Qr)
            for (const Ir of Qr.split(Zr.r)) Wr.add(Ir);
          return Wr
        }(Sr.split(Zr.r), Qr, ar)
      }), (rr => {
        throw ar = null, rr
      })), ar
    }

    function Ir(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Wr) || void 0 === Qr ? void 0 : Qr.has(rr)) && void 0 !== Sr && Sr
    }
  },
  41311: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      h: () => ar,
      k: () => Wr
    });
    const Zr = 128;

    function Wr(rr, Sr, Qr, Zr) {
      const Wr = 2 * Sr - 1,
        ar = 1 - 2 * Qr,
        jr = rr(0) - Wr * rr(3),
        Ir = rr(4) - Wr * rr(7),
        fr = rr(8) - Wr * rr(11),
        Er = rr(1) - ar * rr(3),
        pr = rr(5) - ar * rr(7),
        xr = rr(9) - ar * rr(11);
      Zr[0] = Ir * xr - fr * pr, Zr[1] = fr * Er - jr * xr, Zr[2] = jr * pr - Ir * Er;
      const mr = Zr[0] * rr(3) + Zr[1] * rr(7) + Zr[2] * rr(11) < 0 ? -1 : 1,
        Nr = Math.hypot(Zr[0], Zr[1], Zr[2]) * mr;
      return Zr[0] /= Nr, Zr[1] /= Nr, Zr[2] /= Nr, Zr
    }

    function ar(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = [Math.floor(Sr[0]), Math.floor(Sr[1]), Math.floor(Sr[2])],
        Ir = [0, 0, 0],
        fr = [1 / 0, 1 / 0, 1 / 0],
        Er = [1 / 0, 1 / 0, 1 / 0];
      for (let mr = 0; mr < 3; mr++) Ir[mr] = Math.sign(Qr[mr]), 0 !== Ir[mr] && (Er[mr] = Math.abs(1 / Qr[mr]), fr[mr] = (jr[mr] + (Ir[mr] > 0 ? 1 : 0) - Sr[mr]) / Qr[mr]);
      let pr = 0,
        xr = Math.abs(Qr[0]) > Math.abs(Qr[1]) ? 0 : 1;
      for (Math.abs(Qr[2]) > Math.abs(Qr[xr]) && (xr = 2); pr <= Zr;) {
        if (rr(jr[0], jr[1], jr[2])) return Wr[0] = jr[0], Wr[1] = jr[1], Wr[2] = jr[2], ar[0] = 0, ar[1] = 0, ar[2] = 0, ar[xr] = -Ir[xr], !0;
        xr = fr[0] < fr[1] ? 0 : 1, fr[2] < fr[xr] && (xr = 2), pr = fr[xr], jr[xr] += Ir[xr], fr[xr] += Er[xr]
      }
      return !1
    }
  },
  37942: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Lr,
      d: () => lr,
      f: () => Kr,
      g: () => nr,
      k: () => yr
    });
    var Zr = Qr(300),
      Wr = Qr(109);
    const ar = new(Qr(37945).d)(new URL(Qr.p + Qr.u(3), Qr.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var jr = Qr(1783),
      Ir = Qr(2311);
    const fr = 1e4,
      Er = 3e4;
    let pr = null,
      xr = null,
      mr = null,
      Nr = !1,
      Ur = 0;
    const tr = new Map;
    let hr = null;
    const zr = new Map,
      Yr = new Map;

    function nr(rr) {
      const Sr = new Promise(((Sr, Qr) => {
        const Zr = new Image;
        Zr.crossOrigin = "anonymous", Zr.fetchPriority = "high", Zr.onload = () => {
          Sr(Zr)
        }, Zr.onerror = () => {
          Qr(new Error(`A block icon's texture did not load: ${rr.slice(0,100)}`))
        }, Zr.src = rr
      }));
      return (0, Ir.g)(Sr)
    }

    function er(rr) {
      var Sr, Qr;
      Nr || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${rr}`), Nr = !0, null === (Sr = pr) || void 0 === Sr || Sr.terminate(), pr = null, xr = null, zr.clear(), Yr.clear();
      for (const Zr of tr.values()) Zr(null);
      tr.clear(), null === (Qr = hr) || void 0 === Qr || Qr()
    }

    function Kr() {
      return null !== xr
    }

    function yr() {
      return mr ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Zr.e.ios_icon_worker_v1 && (0, Wr.isWebKit)()) return;
        try {
          pr = await async function() {
            return await ar.ready(), ar.start()
          }()
        } catch (Ir) {
          return void er(`did not start (${String(Ir)})`)
        }
        let rr = () => {};
        const Sr = new Promise((Sr => {
          rr = Sr
        }));
        pr.onmessage = Sr => {
          let {
            data: Qr
          } = Sr;
          if ("started" === Qr.type) xr = pr, rr();
          else if ("failed" === Qr.type) er(`failed a draw (${Qr.message})`);
          else {
            var Zr, Wr;
            null === (Zr = tr.get(Qr.id)) || void 0 === Zr || Zr(Qr.url), tr.delete(Qr.id), null === (Wr = hr) || void 0 === Wr || Wr()
          }
        }, pr.onerror = Sr => {
          Sr.preventDefault(), er(`stopped (${Sr.message||"its script did not load or run"})`), rr()
        };
        const Qr = `did not start in ${Er/1e3} s`;
        await (0, jr.h)(Sr, Er, Qr).catch((() => {
          er(Qr)
        }))
      }(), mr
    }

    function Br() {
      if (null !== hr || 0 === tr.size) return;
      const rr = new Promise((rr => {
          hr = rr
        })),
        Sr = `did not answer in ${fr/1e3} s`;
      (0, jr.h)(rr, fr, Sr).then((() => {
        hr = null, Br()
      }), (() => {
        hr = null, er(Sr)
      }))
    }

    function Tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      rr.postMessage(Sr, Qr)
    }

    function vr(rr, Sr, Qr, Zr) {
      let Wr = Sr.get(Qr);
      return void 0 === Wr && (Wr = Zr().then((async Sr => {
        let {
          image: Qr,
          request: Zr
        } = Sr;
        try {
          const Sr = await createImageBitmap(Qr);
          Tr(rr, Zr(Sr), [Sr])
        } catch (Wr) {
          er(`could not take an image (${String(Wr)})`)
        }
      })), Wr.catch((() => {
        Sr.get(Qr) === Wr && Sr.delete(Qr)
      })), Sr.set(Qr, Wr)), Wr
    }
    async function Or(rr, Sr) {
      yr();
      const Qr = xr;
      if (null === Qr) return null;
      if (await rr(Qr), xr !== Qr) return null;
      const Zr = ++Ur;
      return new Promise((rr => {
        tr.set(Zr, rr), Tr(Qr, Sr(Zr)), Br()
      }))
    }

    function Lr(rr, Sr, Qr) {
      return Or((Sr => Promise.all([rr.top, rr.left, rr.right].map((rr => function(rr, Sr) {
        return vr(rr, zr, Sr, (async () => ({
          image: await nr(Sr),
          request: rr => ({
            type: "texture",
            url: Sr,
            bitmap: rr
          })
        })))
      }(Sr, rr))))), (Zr => ({
        type: "draw",
        id: Zr,
        ...rr,
        size: Sr,
        outlineWidth: Qr
      })))
    }

    function lr(rr, Sr, Qr, Zr) {
      return Or((Qr => function(rr, Sr, Qr) {
        return vr(rr, Yr, Sr, (async () => {
          const {
            texture: rr,
            ...Zr
          } = await Qr();
          return {
            image: await nr(rr),
            request: rr => ({
              type: "model",
              name: Sr,
              bitmap: rr,
              geometry: Zr
            })
          }
        }))
      }(Qr, rr, Sr)), (Sr => ({
        type: "drawModel",
        id: Sr,
        name: rr,
        size: Qr,
        outlineWidth: Zr
      })))
    }
  },
  41293: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(2049);

    function Wr(rr, Sr, Qr) {
      return (0, Zr.m)(rr, Sr) < Qr
    }
  },
  9827: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = Qr(1308);

    function Wr(rr, Sr) {
      var Qr, Wr;
      try {
        const Qr = (0, Zr.b)();
        if ("function" === typeof Qr) {
          const Zr = new Qr(rr, Sr);
          if (Zr.type === rr) return Zr
        }
      } catch {}
      const ar = document.createEvent("Event");
      return ar.initEvent(rr, null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.bubbles) && void 0 !== Qr && Qr, null !== (Wr = null === Sr || void 0 === Sr ? void 0 : Sr.cancelable) && void 0 !== Wr && Wr), ar
    }
  },
  40583: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr = Qr(1279),
      Wr = Qr(1433),
      ar = Qr(26),
      jr = Qr(1413),
      Ir = Qr(1422),
      fr = Qr(1644),
      Er = Qr(38001);

    function pr(rr) {
      let {
        xa: Sr,
        ma: Qr
      } = rr;
      const pr = null !== Sr && void 0 !== Sr ? Sr : (0, Ir.b)().gameNameWithVariation;
      (0, Zr.J)(pr) && ((0, Er.o)(), (0, jr.Y)((() => {
        console.log("Received matchmaking order from game server to game", Sr), (0, ar.m)("inGameReplay"), (0, fr.navigatePreserveSearch)((0, Wr.c)(pr, null !== Qr && void 0 !== Qr ? Qr : void 0))
      }), "video_start"))
    }
  },
  40754: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(34),
      Wr = Qr(2135);

    function ar(rr) {
      var Sr, Qr;
      const ar = (0, Wr.j)(null !== (Sr = null === (Qr = Wr.q.toggleFreeCam) || void 0 === Qr ? void 0 : Qr[0]) && void 0 !== Sr ? Sr : null);
      Zr.i.Jp("showBottomMessage", {
        message: `Free Camera ${rr?"Enabled":"Disabled"}${ar?` - Press ${ar} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40574: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr,
      e: () => fr,
      h: () => Er,
      j: () => xr
    });
    var Zr = Qr(2089),
      Wr = Qr(34),
      ar = Qr(1475),
      jr = Qr(1317);
    const Ir = new Map;

    function fr(rr, Sr) {
      Wr.i.Jp("newUiRequest", {
        id: rr,
        clientParameters: Sr
      }, !0)
    }

    function Er(rr) {
      Wr.i.Jp("removeUiRequest", rr, !0);
      const Sr = Ir.get(rr);
      Sr && (Sr.tearDownNotification(), Ir.delete(rr))
    }

    function pr() {
      Wr.i.Jp("clearUiRequests");
      for (const rr of Ir.values()) rr.tearDownNotification();
      Ir.clear()
    }

    function xr(rr, Sr, Qr, Wr) {
      const fr = "string" === typeof Sr ? {
          translationKey: Sr
        } : Sr,
        Er = ar.NotificationProvider.showPromptPopup({
          title: fr.translationKey,
          textOpts: {
            title: (0, jr.e)(fr.params, Zr.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: Qr,
          unlockPointerKey: "uiRequestPopup"
        });
      Ir.set(rr, Er), Er.getResult().then((Sr => {
        Ir.delete(rr), "notificationTornDown" !== Sr && Wr(Sr)
      }))
    }
  },
  41320: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr,
      g: () => mr
    });
    var Zr = Qr(208),
      Wr = Qr(41324);
    const ar = 20;

    function jr(rr) {
      return rr.map(Math.floor).join(" ")
    }

    function Ir(rr) {
      return null === rr.amount || 1 === rr.amount ? rr.name : `${rr.amount} ${rr.name}`
    }
    var fr = Qr(41333),
      Er = Qr(2114),
      pr = Qr(1422);

    function xr(rr, Sr) {
      if (!rr) return fr.e;
      const Qr = rr.playerFeet();
      if (!Qr) return "The player isn't in the world yet, so no blocks can be seen.";
      const ar = Zr.i.hx,
        jr = (0, Wr.j)(null !== Sr && void 0 !== Sr ? Sr : Qr, ar),
        Ir = rr.chunkBlocks(jr);
      return Ir ? (0, Wr.b)(jr, ar, ((Sr, Qr, Zr) => {
        const Wr = Ir(Sr, Qr, Zr);
        return 0 === Wr ? null : rr.blockName(Wr).split("|")[0]
      }), Qr) : `The chunk from ${jr.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Qr.map(Math.floor).join(" ")}.`
    }

    function mr(rr) {
      var Sr, Qr, Zr;
      if (!rr) return fr.f;
      const Wr = rr.playerFeet();
      if (!Wr) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: xr,
        heldSlot: mr
      } = rr.inventory();
      return function(rr) {
        const Sr = [];
        null !== rr.game && Sr.push(`Game: ${rr.game}.`);
        const Qr = null === rr.health ? "" : `, health ${Math.round(rr.health)}${null===rr.maxHealth?"":` of ${Math.round(rr.maxHealth)}`}`;
        Sr.push(`The player (the creator) stands at ${jr(rr.position)}${Qr}, ${rr.creative?"in":"not in"} creative mode.`);
        const Zr = rr.slots[rr.heldSlot];
        Sr.push(Zr ? `Holding (slot ${rr.heldSlot}): ${Ir(Zr)}.` : `Holding nothing (slot ${rr.heldSlot} is empty).`);
        const Wr = rr.slots.flatMap(((rr, Sr) => rr ? [`slot ${Sr}: ${Ir(rr)}`] : []));
        Sr.push(Wr.length > 0 ? `Inventory: ${Wr.join(", ")}.` : "Inventory: empty.");
        const fr = Sr => Math.hypot(Sr.position[0] - rr.position[0], Sr.position[1] - rr.position[1], Sr.position[2] - rr.position[2]),
          Er = [...rr.nearby].sort(((rr, Sr) => fr(rr) - fr(Sr)));
        if (0 === Er.length) Sr.push("No other players or mobs are near enough to see.");
        else {
          Sr.push("Near them, nearest first:");
          for (const rr of Er.slice(0, ar)) {
            const Qr = "player" === rr.kind ? `player "${rr.name||"?"}"` : rr.name && rr.name !== rr.kind ? `${rr.kind} "${rr.name}"` : rr.kind,
              Zr = Math.round(fr(rr));
            Sr.push(`- ${Qr} at ${jr(rr.position)}, ${Zr} block${1===Zr?"":"s"} away`)
          }
          Er.length > ar && Sr.push(`- and ${Er.length-ar} more further away`)
        }
        return rr.droppedItems > 0 && Sr.push(`${rr.droppedItems} dropped item${1===rr.droppedItems?" is":"s are"} on the ground nearby.`), Sr.join("\n")
      }({
        game: null !== (Sr = (0, pr.b)().gameNameWithVariation) && void 0 !== Sr ? Sr : null,
        position: Wr,
        health: null !== (Qr = Er.d.get("_health")) && void 0 !== Qr ? Qr : null,
        maxHealth: null !== (Zr = Er.d.get("_totalMaxHealth")) && void 0 !== Zr ? Zr : null,
        creative: !0 === Er.d.get("creative"),
        heldSlot: mr,
        slots: xr,
        nearby: rr.nearby(),
        droppedItems: rr.droppedItems()
      })
    }
  },
  42871: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      attachPlayGameSources: () => FZ,
      playGameSources: () => cZ
    });
    var Zr = Qr(2089),
      Wr = Qr(42726),
      ar = Qr(5602),
      jr = Qr(42451),
      Ir = Qr(42845),
      fr = Qr(41296),
      Er = Qr(34),
      pr = Qr(5617),
      xr = Qr(5610),
      mr = Qr(42485),
      Nr = Qr(42516),
      Ur = Qr(42876),
      tr = Qr(42495);
    (0, tr.j)(pr.pc.Chat, (rr => {
      if (rr.payloadKind !== xr.nc.Msgpack) return;
      const Sr = function(rr) {
        if (null === rr || "object" !== typeof rr || !("content" in rr)) return null;
        const {
          chatMsgId: Sr,
          worldCodeLineId: Qr,
          content: Zr,
          chatterEId: Wr,
          chatterObjectsToReplay: ar
        } = rr;
        return {
          serverChatMsgId: null !== Sr && void 0 !== Sr ? Sr : void 0,
          worldCodeLineId: null !== Qr && void 0 !== Qr ? Qr : void 0,
          content: Zr,
          chatterEId: void 0 === Wr || null === Wr ? void 0 : String(Wr),
          chatterObjectsToReplay: ar
        }
      }((0, mr.d)(rr.payload));
      null !== Sr && Er.i.Jp("chat", Sr, !0)
    })), (0, tr.j)(pr.pc.ChatRemoved, (rr => {
      if (rr.payloadKind === xr.nc.Msgpack) {
        const {
          chatMsgId: Sr
        } = (0, mr.d)(rr.payload);
        Er.i.Jp("chatRemoved", Sr, !0)
      }
    }));
    const hr = {
        chatReceived: (0, fr.j)((function(rr) {
          var Sr, Qr, Zr;
          return {
            id: rr,
            name: null !== (Sr = Ur.g.getName(rr)) && void 0 !== Sr ? Sr : null,
            local: (0, Nr.c)() === rr,
            profileEffect: null !== (Qr = null === (Zr = (0, Ur.j)(rr)) || void 0 === Zr ? void 0 : Zr.profileEffect) && void 0 !== Qr ? Qr : null
          }
        })),
        chatRemoved: fr.m
      },
      zr = {
        sendChatMessage(rr) {
          var Sr, Qr;
          let {
            xj: Zr,
            channelName: Wr
          } = rr;
          return null !== (Sr = null === (Qr = (0, jr.f)()) || void 0 === Qr ? void 0 : Qr.clientApi.sendChat(Zr, Wr)) && void 0 !== Sr && Sr
        }
      };
    var Yr = Qr(208),
      nr = Qr(2114),
      er = Qr(42438),
      Kr = Qr(41293);
    const yr = [0, 0, 0],
      Br = {
        codeBlockClickable(rr) {
          var Sr;
          const Qr = (0, jr.f)();
          if (null === Qr || void 0 === Qr || !Qr.isSessionLive) return !1;
          const Zr = Qr.api;
          if (0 !== (er.p.playerFlags(Zr.apiView, 0) & er.ud.Crouching)) return !1;
          const Wr = Zr.queries.directorEntity(Zr.localId) >= er.gb.BYTES ? Zr.memoryData(Zr.scratch(), er.gb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Wr) return !1;
          for (let ar = 0; ar < 3; ar++) yr[ar] = er.gb.feet(Wr, 0, ar);
          return yr[1] += er.gb.eyeHeight(Wr, 0), (0, Kr.d)(yr, rr, null !== (Sr = nr.d.get("blockReach")) && void 0 !== Sr ? Sr : Yr.i.hz)
        }
      },
      Tr = {
        clickCodeBlock(rr) {
          var Sr;
          null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.clickCodeBlock(rr)
        }
      };
    var vr = Qr(42463),
      Or = Qr(42880),
      Lr = Qr(1127),
      lr = Qr(40599),
      Xr = Qr(5594),
      Pr = Qr(42477),
      Hr = Qr(42456),
      qr = Qr(42479);

    function Rr(rr) {
      if (null === rr) return null;
      const Sr = [];
      for (const Qr of rr) {
        const rr = Object.keys(Qr)[0];
        if ("rQ" === rr) {
          const {
            str: rr,
            style: Zr,
            clickableUrl: Wr
          } = Qr.rQ, ar = Object.keys(rr)[0], jr = rr[ar];
          "string" !== ar && "styledEntityName" !== ar && "styledTranslatedText" !== ar || Sr.push({
            str: jr,
            style: Zr,
            clickableUrl: Wr
          })
        } else Sr.push(Qr[rr])
      }
      return Sr
    }
    const gr = {
      screenPos(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, jr.f)()) || void 0 === Qr ? void 0 : Qr.renderFrame.projectWorldPosToScreenPos(rr)) && void 0 !== Sr ? Sr : {
          x: 0,
          y: 0
        }
      }
    };
    let Cr = !1;

    function Mr() {
      Cr || (Cr = !0, (0, tr.j)(pr.pc.ProgressBarUpdate, (rr => {
        const Sr = (0, qr.f)(rr);
        (0, qr.b)(Sr) && Er.i.Jp("progressBarUpdate", Sr, !0)
      })), (0, tr.j)(Pr.w, (rr => {
        const Sr = (0, qr.d)(Pr.w, rr);
        Sr && Er.i.Jp("middleScreenBarInitiate", {
          duration: Sr.ta,
          ha: Sr.ha,
          horizBarRemOffset: Sr.za
        }, !0)
      })), (0, tr.j)(pr.pc.RemoveMiddleScreenBar, (() => {
        Er.i.Jp("middleScreenBarRemove")
      })), (0, tr.j)(Pr.cb, (rr => {
        const Sr = (0, qr.d)(Pr.cb, rr);
        if (Sr) {
          var Qr;
          const rr = Sr.kS ? null === (Qr = (0, jr.f)()) || void 0 === Qr ? void 0 : Qr.renderFrame.projectDirectionToScreenPos(Sr.kS) : void 0;
          Er.i.Jp("sendHitmarker", {
            GS: Sr.GS,
            screenPos: rr
          }, !0)
        }
      })), (0, tr.j)(Pr.gb, (rr => {
        const Sr = (0, qr.d)(Pr.gb, rr);
        if (Sr) {
          const {
            id: rr,
            position: Qr,
            style: Zr,
            uS: Wr,
            ZQ: ar
          } = Sr;
          Er.i.Jp("setDirectionArrow", {
            id: rr,
            position: Qr,
            style: Zr,
            text: Rr(Wr),
            ZQ: ar
          }, !0)
        }
      })), (0, tr.j)(Pr.f, (rr => {
        const Sr = (0, qr.d)(Pr.f, rr);
        Sr && Er.i.Jp("clearDirectionArrow", {
          id: Sr.id
        }, !0)
      })), (0, tr.j)(Pr.p, (rr => {
        const Sr = (0, qr.d)(Pr.p, rr);
        Sr && Er.i.Jp("flyingMiddleMessage", {
          content: Rr(Sr.oa),
          ba: Sr.ba,
          Ja: Sr.Ja
        }, !0)
      })), (0, tr.j)(pr.pc.WorldVariation, (rr => {
        const Sr = (0, qr.f)(rr);
        if ("string" === typeof Sr) {
          const rr = Sr === Lr.e ? null : {
            message: `Currently loaded as variation: ${Sr}`,
            type: "Warning"
          };
          Er.i.Jp("showPermanentBottomMessage", rr, !0)
        }
      })), (0, tr.j)(Pr.F, (rr => {
        const Sr = (0, qr.d)(Pr.F, rr);
        Sr && function(rr, Sr) {
          const {
            type: Qr,
            params: Zr
          } = (0, lr.g)(Sr), Wr = {
            ...Zr
          };
          for (const ar of lr.e) Wr[ar] && (Wr[ar] = Rr(Wr[ar]));
          Xr.e.queueQTE(rr, Qr, Wr).getResult().then((Sr => {
            var Qr;
            "boolean" === typeof Sr && (null === (Qr = (0, jr.f)()) || void 0 === Qr || Qr.send(Hr.b.QteResponse, {
              qteId: rr,
              qteResponse: Sr
            }))
          }))
        }(Sr.id, Sr.Ya)
      })), (0, tr.j)(Pr.V, (rr => {
        const Sr = (0, qr.d)(Pr.V, rr);
        "number" === typeof Sr && Xr.e.cancelQTE(Sr)
      })), (0, tr.d)((() => {
        Xr.e.reset()
      })), (0, tr.f)((() => {
        Xr.e.reset()
      })), (0, tr.j)(pr.pc.EditItemCraftingRecipes, (rr => {
        const Sr = (0, qr.f)(rr);
        (0, qr.b)(Sr) && Er.i.Jp("craftingRecipesEdited", {
          itemName: Sr.craftingRecipeItemName,
          recipesForItem: Sr.recipesForItem
        })
      })), (0, tr.j)(Pr.R, (rr => {
        const Sr = (0, qr.d)(Pr.R, rr);
        Sr && Er.i.Jp("craftingRecipesEdited", {
          itemName: Sr.aS,
          recipesForItem: []
        })
      })))
    }
    var Gr = Qr(26);
    const kr = [{
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

    function Ar(rr) {
      return er.p.playerFlags(rr.api.apiView, 0)
    }
    const Vr = {
        freeCamera: (0, Nr.b)((rr => () => {
          const Sr = rr.isSessionLive && 0 !== (Ar(rr) & er.ud.FreeCamMoves),
            Qr = rr.freeCameraAllowed() && null === Gr.c.get("scriptedCameraFacing");
          return kr[(Qr ? 2 : 0) + (Sr ? 1 : 0)]
        }), kr[0], (rr => (0, ar.w)(rr)))
      },
      ir = {
        setFreeCameraMovesFly: rr => {
          var Sr;
          null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.setFreeCameraMovesFly(rr)
        }
      },
      wr = {
        freeCameraPos: () => {
          const rr = (0, jr.f)();
          return null !== rr && void 0 !== rr && rr.isSessionLive && rr.renderFrame.hasView && 0 !== (Ar(rr) & er.ud.FreeCam) ? rr.renderFrame.cameraPosition : null
        }
      };
    var cr = Qr(40754);
    let Fr = !1,
      or = !1;

    function br() {
      const rr = (0, jr.f)();
      if (null === rr || void 0 === rr || !rr.isSessionLive) return void(Fr = !1);
      const Sr = 0 !== (er.p.playerFlags(rr.api.apiView, 0) & er.ud.FreeCam);
      Sr !== Fr && (Fr = Sr, (0, cr.b)(Sr))
    }
    var Jr = Qr(379),
      Dr = Qr(38509),
      dr = Qr(2119);
    var sr = Qr(42884),
      ur = Qr(42507);
    const rS = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let SS = "off";

    function QS(rr) {
      var Sr;
      return null === rr ? null : {
        label: null !== (Sr = (0, sr.b)(rr, "interactionPrompt")) && void 0 !== Sr ? Sr : null
      }
    }
    const ZS = new Map([
      [er.dc.Open, {
        label: fr.f.open
      }],
      [er.dc.Close, {
        label: fr.f.close
      }],
      [er.dc.Milk, {
        label: fr.f.milk
      }],
      [er.dc.Shear, {
        label: fr.f.shear
      }],
      [er.dc.Tame, {
        label: fr.f.tame
      }],
      [er.dc.Feed, {
        label: fr.f.feed
      }],
      [er.dc.Ride, {
        label: fr.f.ride
      }]
    ]);
    class WS {
      constructor() {
        this.target = rS, this.aI = er.Oc, this.optionName = null, this.pickaxe = new fr.d
      }
      read(rr) {
        var Sr;
        const Qr = er.p.targetBlockId(rr.api.apiView, 0);
        Qr !== this.aI && (this.aI = Qr, this.optionName = Qr === er.Oc ? null : `${rr.tables.getMetaInfo(Qr).rootName}CrosshairText`);
        const Zr = null === this.optionName ? null : null !== (Sr = rr.tables.getClientOption(this.optionName)) && void 0 !== Sr ? Sr : null;
        this.pickaxe.update(function(rr, Sr) {
          var Qr, Zr, Wr;
          if (0 === (er.p.playerFlags(rr.api.apiView, 0) & er.ud.Breaking) || Sr === er.Oc || 0 === Sr) return null;
          const {
            tables: ar
          } = rr;
          if (!0 === ar.getClientOption("creative")) return null;
          const jr = ar.nameOfId(Sr),
            Ir = null === (Qr = rr.items.wI()) || void 0 === Qr ? void 0 : Qr.name,
            fr = null !== (Zr = ar.getItemStat(jr, "harvestLevel")) && void 0 !== Zr ? Zr : 0;
          return (0, Jr.wc)({
            blockHarvestType: ar.getDefaultItemStat(jr, "harvestType"),
            blockHarvestLevel: ar.getDefaultItemStat(jr, "harvestLevel"),
            harvestLevel: fr,
            heldToolType: void 0 === Ir ? void 0 : ar.getDefaultItemStat(Ir, "harvests"),
            heldToolLevel: void 0 === Ir ? void 0 : ar.getDefaultItemStat(Ir, "level")
          }) && null !== (Wr = Dr.p[fr]) && void 0 !== Wr ? Wr : null
        }(rr, Qr)), rr.watchPromptPick(SS);
        const Wr = "touch" === SS ? function(rr) {
          var Sr;
          const Qr = rr.interactLabel;
          return Qr === er.dc.Entity ? QS(rr.promptEntity) : Qr === er.dc.TameWith ? {
            label: (0, fr.v)(rr.tables.nameOfId(rr.interactIcon))
          } : null !== (Sr = ZS.get(Qr)) && void 0 !== Sr ? Sr : null
        }(rr) : QS(rr.promptEntity);
        return this.target = (0, dr.n)(this.target, {
          interactPrompt: Wr,
          blockText: Zr,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let aS = null;
    const jS = {
      current: () => {
        var rr, Sr;
        return null !== (rr = null === (Sr = aS) || void 0 === Sr ? void 0 : Sr.target) && void 0 !== rr ? rr : rS
      },
      watch: rr => {
        const Sr = new WS;
        aS = Sr;
        const Qr = (0, Nr.f)((Qr => {
          let Zr = Sr.read(Qr);
          rr(Zr);
          const Wr = (0, ar.z)((() => {
            const Wr = Sr.read(Qr);
            Wr !== Zr && (Zr = Wr, rr(Wr))
          }));
          return () => {
            Wr(), Qr.watchPromptPick("off")
          }
        }));
        return () => {
          Qr(), aS === Sr && (aS = null)
        }
      }
    };
    let IS = 0,
      fS = 0;
    const ES = {
        health: fr.t,
        aura: fr.h,
        hotbar: ur.b.states.hotbar,
        heldItemAim: ur.b.states.heldItemAim,
        crouching: (0, Nr.b)((rr => function(rr) {
          const Sr = () => 0 !== (er.p.playerFlags(rr.apiView, 0) & er.ud.Crouching);
          return {
            current: Sr,
            watch(rr) {
              let Qr = Sr();
              return (0, ar.w)((() => {
                const Zr = Sr();
                Zr !== Qr && (Qr = Zr, rr(Zr))
              }))
            }
          }
        }(rr.api).current), !1, (rr => (0, ar.w)(rr))),
        flight: (0, Nr.b)((rr => () => function(rr) {
          const Sr = er.p.playerFlags(rr.apiView, 0);
          return (0, fr.q)(0 !== (Sr & er.ud.CanFly), 0 !== (Sr & er.ud.Flying))
        }(rr.api)), (0, fr.q)(!1, !1), (rr => (0, ar.w)(rr))),
        gliderBoostFuel: (0, Nr.b)((rr => () => er.p.gliderBoostFuel(rr.api.apiView, 0)), 0, (rr => (0, ar.w)(rr))),
        crosshairTarget: jS
      },
      pS = {
        hotbarSlotRequested: ur.b.events.hotbarSlotRequested,
        hotbarScrolled: ur.b.events.hotbarScrolled,
        numberKeyPressed: ur.b.events.numberKeyPressed,
        shotDamageToShow: (0, fr.u)((rr => !0 === (0, sr.b)(rr, "showDamageAmounts")))
      },
      xS = {
        selectHotbarSlot: ur.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: rr => {
          SS = rr
        }
      },
      mS = {
        momentumFrac: function() {
          var rr, Sr, Qr;
          const Zr = (0, jr.f)(),
            Wr = performance.now(),
            ar = null === Zr || void 0 === Zr || null === (rr = Zr.items.wI()) || void 0 === rr || null === (Sr = rr.attributes) || void 0 === Sr || null === (Qr = Sr.customAttributes) || void 0 === Qr ? void 0 : Qr.enchantments;
          return IS = null !== Zr && null !== ar && void 0 !== ar && ar.Momentum ? 0 !== (er.p.playerFlags(Zr.api.apiView, 0) & er.ud.Breaking) ? Math.max(0, er.p.momentumFrac(Zr.api.apiView, 0)) : Math.max(0, IS - (Wr - fS) / 1500) : 0, fS = Wr, IS
        }
      };
    var NS = Qr(42445);
    const US = {
      lobbyManage(rr) {
        var Sr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.LobbyManage, rr)
      }
    };
    var tS = Qr(1287),
      hS = Qr(38031),
      zS = Qr(9904),
      YS = Qr(1758),
      nS = Qr(3372),
      eS = Qr(5619);
    let KS = !1;

    function yS(rr) {
      KS = rr
    }

    function BS() {
      "inGame" !== Gr.c.get("gameState") || (0, YS.p)() || Er.i.Jp("ctrlCrouchWithoutFullscreen")
    }
    let TS = !1;
    const vS = {
        OpenEmoteWheel: () => {
          yS(!0), TS = !0, queueMicrotask((() => {
            TS && (TS = !1, Er.i.Jp("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Er.i.Jp("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, hS.e)() || Er.i.Jp("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, hS.e)() || Er.i.Jp("XKeyPressed")
        },
        CtrlCrouch: BS,
        "primary-fire": () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      OS = {
        OpenEmoteWheel: () => {
          yS(!1), TS ? (TS = !1, (0, zS.c)() || Er.i.Jp("requestEmoteWheelHoldOpen")) : Er.i.Jp("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: BS,
        "primary-fire": () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Er.i.Jp("mouseState", {
            bI: tS.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let LS = !1;

    function lS() {
      LS || (LS = !0, (0, eS.l)((rr => {
        if ((0, Wr.d)()) return;
        const Sr = (0, eS.i)(rr) ? "primary-fire" : rr.action;
        var Qr;
        if (rr.down) {
          if (0 === (rr.flags & nS.e.Synthetic)) {
            var Zr;
            null === (Zr = vS[Sr]) || void 0 === Zr || Zr.call(vS)
          }
        } else null === (Qr = OS[Sr]) || void 0 === Qr || Qr.call(OS)
      })))
    }
    var XS = Qr(360),
      PS = Qr(109),
      HS = Qr(43),
      qS = Qr(42751),
      RS = Qr(1422),
      gS = Qr(3394);
    let CS = !1;
    const MS = {
      sendCodeCollab(rr) {
        var Sr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.CodeCollab, (0, Hr.l)(rr), (0, gS.f)(rr))
      }
    };
    var GS = Qr(40670),
      kS = Qr(9827);
    let AS = null,
      VS = !1,
      iS = null;

    function wS() {
      return "inGame" === Gr.c.get("gameState") && !(0, hS.e)()
    }
    const cS = {
        OpenInventory: rr => {
          (0, YS.v)(rr, "inventory", (0, NS.o)())
        },
        OpenShop: rr => {
          AS && wS() && (0, YS.s)(rr, XS.q.SHOP, !AS.shopIsEmpty(nr.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: rr => {
          var Sr, Qr;
          wS() && (0, YS.w)(rr, (0, GS.c)({
            lobbyLeaderboardInfo: nr.d.get("lobbyLeaderboardInfo"),
            lobbyManage: nr.d.get("lobbyManage")
          }), null !== (Sr = null === (Qr = AS) || void 0 === Qr ? void 0 : Qr.getClientGameLeaderboardKey()) && void 0 !== Sr ? Sr : null)
        },
        OpenTasksAndLeaderboard: rr => {
          var Sr;
          const Qr = null === (Sr = AS) || void 0 === Sr ? void 0 : Sr.getClientGameMapKey();
          Qr ? (0, YS.y)(rr, !0, Qr) : (0, YS.v)(rr, "retentionFeatures", !(!nr.d.get("_tasks") && !nr.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: rr => {
          (0, YS.v)(rr, "inviteLink", PS.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: rr => {
          wS() && function(rr) {
            const Sr = (0, jr.f)(),
              Qr = null !== Sr && void 0 !== Sr && Sr.isSessionLive ? Sr.api : null,
              Zr = Qr ? Qr.JY(Qr.localId) : null;
            (0, YS.y)(rr, null !== Zr && (0, gS.e)((0, RS.b)()), (() => {
              (0, gS.h)(Zr)
            }))
          }(rr)
        },
        HideUi: () => {
          Er.i.Jp("showUi", !1)
        }
      },
      FS = {
        HideUi: () => {
          Er.i.Jp("showUi", !0)
        }
      };

    function oS() {
      VS || (VS = !0, Qr.e(183).then((() => Qr(64569))).then((rr => {
        AS = rr
      }), (rr => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", rr)
      })), (0, qS.v)((rr => {
        rr || !(0, qS.g)() || (0, PS.isMobile)() || !HS.j.getItem("disableFullscreen") || (0, YS.l)() || Gr.c.set({
          openEverythingMenuName: XS.q.SETTINGS
        })
      })), (0, eS.l)((rr => {
        let {
          action: Sr,
          down: Qr,
          press: Zr
        } = rr;
        var ar, jr;
        (0, Wr.d)() || (Qr ? null === (ar = cS[Sr]) || void 0 === ar || ar.call(cS, function(rr) {
          var Sr;
          if (0 === rr || (null === (Sr = iS) || void 0 === Sr ? void 0 : Sr.press) !== rr) {
            const Sr = {
              press: rr,
              event: (0, kS.e)("inputAction")
            };
            iS = Sr, queueMicrotask((() => {
              iS === Sr && (iS = null)
            }))
          }
          return iS.event
        }(Zr)) : null === (jr = FS[Sr]) || void 0 === jr || jr.call(FS))
      })))
    }
    var bS = Qr(40587),
      JS = Qr(40583),
      DS = Qr(40574);
    const dS = {
      completeTask(rr) {
        var Sr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.CompleteTask, (0, Hr.p)(rr))
      },
      setServerCookie(rr) {
        var Sr;
        let {
          key: Qr,
          value: Zr
        } = rr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.GeneralCookieSet, (0, Hr.w)({
          xp: Qr,
          mp: Zr
        }))
      },
      answerUiRequest(rr) {
        var Sr;
        let {
          id: Qr,
          ap: Zr
        } = rr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.UiRequestResp, (0, Hr.R)({
          zj: Qr,
          Yj: Zr,
          nj: 5
        }))
      },
      chooseRewardedAd(rr) {
        var Sr;
        let {
          id: Qr,
          ap: Zr
        } = rr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.UiRequestResponded, (0, Hr.P)({
          id: Qr,
          ap: Zr
        }))
      },
      requestLeaderboard(rr) {
        var Sr;
        let {
          category: Qr,
          timeframe: Zr,
          seeTop: Wr
        } = rr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.LeaderboardRequest, {
          category: Qr,
          timeframe: Zr,
          seeTop: Wr
        })
      }
    };
    let sS = !1;
    const uS = Yr.i.Nz / 2,
      rQ = [uS, -uS, -uS, -uS, uS, uS, -uS, uS],
      SQ = [0, 0, 0];

    function QQ(rr, Sr, Qr) {
      for (let Zr = 0; Zr < rr.length; Zr += 2)
        if (rr[Zr] === Sr && rr[Zr + 1] === Qr) return !0;
      return !1
    }
    const ZQ = {
      blocksStandingOn: function() {
        const rr = (0, jr.f)();
        if (null === rr) return [];
        const {
          api: Sr,
          chunks: Qr,
          tables: Zr
        } = rr;
        if (!Sr.readPosition(Sr.localId, SQ)) return [];
        const [Wr, ar, Ir] = SQ, fr = Math.ceil(ar) - 1, Er = [], pr = [];
        for (let jr = 0; jr < rQ.length; jr += 2) {
          const rr = Wr + rQ[jr],
            Sr = Ir + rQ[jr + 1];
          if (Number.isInteger(rr) || Number.isInteger(Sr)) continue;
          const ar = Math.floor(rr),
            xr = Math.floor(Sr);
          if (QQ(pr, ar, xr)) continue;
          const mr = Qr.aI(ar, fr, xr);
          Zr.isSolidBlockId(mr) && (pr.push(ar, xr), Er.push(Zr.nameOfId(mr)))
        }
        return Er
      },
      dropAhead: function() {
        const rr = (0, jr.f)();
        return null !== rr && 0 !== (er.p.playerFlags(rr.api.apiView, 0) & er.ud.DropAhead)
      }
    };
    var WQ = Qr(38415),
      aQ = Qr(40646),
      jQ = Qr(1475),
      IQ = Qr(42519);
    const fQ = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      EQ = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function pQ() {
      const rr = new Set;
      return {
        add: Sr => (rr.add(Sr), () => {
          rr.delete(Sr)
        }),
        fire() {
          for (const Sr of rr) Sr()
        }
      }
    }
    const xQ = Object.freeze([]);

    function mQ(rr, Sr) {
      let Qr, {
        rereads: Zr,
        followLocalId: Wr
      } = Sr;
      const jr = () => (Qr = (0, dr.n)(Qr, rr()), Qr);
      return {
        current: jr,
        watch(rr) {
          const Sr = (0, Ur.e)((Sr => {
            Zr(Sr) && rr(jr())
          }));
          if (!Wr) return Sr;
          let Qr = (0, Nr.c)();
          const Ir = (0, ar.z)((() => {
            const Sr = (0, Nr.c)();
            Sr !== Qr && (Qr = Sr, rr(jr()))
          }));
          return () => {
            Sr(), Ir()
          }
        }
      }
    }
    const NQ = {
        players: mQ((function() {
          const rr = Ur.g.ids(),
            Sr = {};
          for (const ar of rr) {
            var Qr, Zr, Wr;
            Sr[ar] = {
              name: null !== (Qr = Ur.g.getName(ar)) && void 0 !== Qr ? Qr : null,
              ranks: null !== (Zr = Ur.g.getSetting(ar, "ranks")) && void 0 !== Zr ? Zr : xQ,
              cosmetics: null !== (Wr = (0, Ur.j)(ar)) && void 0 !== Wr ? Wr : null
            }
          }
          return {
            ids: rr,
            byId: Sr,
            localId: (0, Nr.c)()
          }
        }), {
          rereads: rr => "roster" !== rr.kind || rr.members || rr.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: mQ((function() {
          const rr = {};
          for (const Wr of Ur.g.ids()) {
            var Sr, Qr, Zr;
            rr[Wr] = {
              colour: null !== (Sr = Ur.g.getSetting(Wr, "colorInLobbyLeaderboard")) && void 0 !== Sr ? Sr : null,
              values: null !== (Qr = Ur.g.getSetting(Wr, "lobbyLeaderboardValues")) && void 0 !== Qr ? Qr : null,
              tags: null !== (Zr = Ur.g.getSetting(Wr, "lobbyLeaderboardTags")) && void 0 !== Zr ? Zr : null
            }
          }
          return rr
        }), {
          rereads: function(rr) {
            if ("roster" !== rr.kind) return "reset" === rr.kind;
            const {
              members: Sr,
              settings: Qr
            } = rr;
            return Sr || Qr.has("colorInLobbyLeaderboard") || Qr.has("lobbyLeaderboardValues") || Qr.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      UQ = {
        cosmeticsUpdated: {
          watch: rr => (0, Ur.e)((Sr => {
            if ("cosmetics" !== Sr.kind) return;
            const Qr = (0, Nr.c)();
            rr(Sr.updates.map((rr => {
              let {
                IW: Sr,
                fW: Zr,
                EW: Wr
              } = rr;
              return {
                local: Sr === Qr,
                fW: Zr,
                EW: Wr
              }
            })))
          }))
        }
      };
    var tQ = Qr(4010),
      hQ = Qr(1885),
      zQ = Qr(727),
      YQ = Qr(42787);
    let nQ = !1,
      eQ = null;
    const KQ = {
      setShopOpen(rr) {
        var Sr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.ShopMenuChanged, (0, Hr.M)(rr))
      },
      buyShopItem(rr) {
        var Sr;
        let {
          categoryKey: Qr,
          itemKey: Zr,
          userInput: Wr
        } = rr;
        null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.send(Hr.b.ItemBought, {
          categoryKey: Qr,
          itemKey: Zr,
          shopVersion: nr.d.get("_shopVersion"),
          userInput: Wr
        })
      }
    };
    let yQ = !1;
    var BQ = Qr(5628);
    const TQ = nS.y.LookFrozen | nS.y.ClicksSuppressed;

    function vQ(rr, Sr) {
      var Qr;
      null !== (Qr = (0, jr.f)()) && void 0 !== Qr && Qr.send(rr, Sr) || console.warn(`[bloxd-wasm-client] message ${rr} not sent: no live game or the core's command ring is full`)
    }(0, tr.j)(Pr.ib, (rr => {
      const Sr = (0, qr.d)(Pr.ib, rr);
      void 0 !== Sr && Er.i.Jp("setDiscordReportKey", Sr)
    }));
    const OQ = {
      ignorePlayer(rr) {
        vQ(Hr.b.IgnoreUser, (0, Hr.y)({
          Qp: rr
        }))
      },
      reportPlayer(rr) {
        let {
          playerId: Sr,
          chatMsgId: Qr,
          contextChatMsgIds: Zr,
          policy: Wr,
          details: ar
        } = rr;
        vQ(Hr.b.UserReport, (0, Hr._)({
          Xp: Sr,
          Pp: Qr,
          policy: Wr,
          jI: ar,
          Hp: Zr
        }))
      },
      reportWorldCodeChat(rr) {
        let {
          chatMsgId: Sr,
          policy: Qr,
          details: Zr
        } = rr;
        vQ(Hr.b.UserReport, (0, Hr._)({
          Xp: "",
          Pp: Sr,
          policy: Qr,
          jI: Zr,
          Hp: []
        }))
      },
      requestDiscordReportKey(rr) {
        vQ(Hr.b.ReqDiscordReportKey, (0, Hr.I)(rr))
      },
      reportLobbyOrGame(rr) {
        let {
          target: Sr,
          policy: Qr,
          details: Zr
        } = rr;
        "customGame" === Sr ? vQ(Hr.b.CustomGameReport, (0, Hr.t)({
          policy: Qr,
          jI: Zr
        })) : vQ(Hr.b.LobbyReport, (0, Hr.C)({
          policy: Qr,
          jI: Zr
        }))
      },
      updateMyCosmetic(rr) {
        vQ(Hr.b.UpdateMyCosmetic, (0, Hr.X)(rr))
      },
      holdEmoteWheel(rr) {
        !rr || KS ? (0, BQ.f)(TQ, rr ? TQ : 0) : Er.i.Jp("requestEmoteWheelHoldRelease")
      }
    };
    var LQ = Qr(42890),
      lQ = Qr(5779),
      XQ = Qr(41311);
    const PQ = [0, 0, 0],
      HQ = [0, 0, 0],
      qQ = [0, 0, 0],
      RQ = {
        blockAtViewPoint(rr) {
          let {
            x: Sr,
            y: Qr
          } = rr;
          const Zr = (0, jr.f)();
          if (null === Zr || void 0 === Zr || !Zr.renderFrame.hasView) return null;
          const {
            renderFrame: Wr,
            clientApi: ar,
            api: Ir
          } = Zr;
          let fr = 0;
          return (0, XQ.h)(((rr, Sr, Qr) => (fr = ar.getBlockId(rr, Sr, Qr), 0 !== fr)), Wr.cameraPosition, (0, XQ.k)((rr => er.p.viewProj(Ir.apiView, 0, rr)), Sr, Qr, PQ), XQ.e, HQ, qQ) ? {
            pos: [HQ[0], HQ[1], HQ[2]],
            normal: [qQ[0], qQ[1], qQ[2]],
            name: (0, lQ.g)(fr)
          } : null
        }
      },
      gQ = {
        setBlockHighlight(rr) {
          var Sr;
          null === (Sr = (0, jr.f)()) || void 0 === Sr || Sr.setBlockHighlight(rr)
        }
      };
    var CQ = Qr(2098),
      MQ = Qr(42776),
      GQ = Qr(42895),
      kQ = Qr(2130),
      AQ = Qr(37942),
      VQ = Qr(272);
    const iQ = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      wQ = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * iQ.fallbackRem,
        asked: new Set
      },
      cQ = 2e3,
      FQ = 4;
    let oQ = [],
      bQ = !1,
      JQ = !1,
      DQ = !1;
    const dQ = new Set,
      sQ = [];
    let uQ = 0,
      rZ = null;

    function SZ() {
      return bQ && (0, AQ.f)()
    }

    function QZ() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zr.gameBridge.latest("inventory");
      if (DQ && !JQ) {
        for (const Qr of rr.player) {
          var Sr;
          if (null !== Qr) ZZ(null !== (Sr = Qr.icon) && void 0 !== Sr ? Sr : Qr.name, iQ)
        }
        for (const rr of [...er.C, ...oQ]) ZZ(rr, wQ);
        aZ()
      }
    }

    function ZZ(rr, Sr) {
      Sr.asked.has(rr) || dQ.has(rr) || ("model" === Zr.gameBridge.lookup("itemIcon", rr).kind ? (Sr.asked.add(rr), sQ.push({
        name: rr,
        slot: Sr
      })) : dQ.add(rr))
    }

    function WZ(rr) {
      oQ = rr, QZ()
    }

    function aZ() {
      !DQ || JQ || null !== rZ || 0 === sQ.length || uQ >= FQ || (rZ = (0, VQ.c)((() => {
        rZ = null;
        const rr = sQ.shift();
        void 0 !== rr && DQ && (uQ++, async function(rr, Sr) {
          var Qr, Wr;
          if (await (0, AQ.k)(), !DQ) return void Sr.asked.delete(rr);
          if (!(0, AQ.f)()) return void(JQ = !0);
          const ar = window.devicePixelRatio,
            jr = null !== (Qr = null === (Wr = document.querySelector(Sr.icon)) || void 0 === Wr ? void 0 : Wr.getBoundingClientRect().width) && void 0 !== Qr ? Qr : 0,
            Ir = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            fr = Math.round((jr > 0 ? jr : Sr.fallbackRem * Ir) * ar);
          try {
            await Zr.gameBridge.query("blockIcon", {
              name: rr,
              size: fr,
              lineWidth: (0, kQ.b)(ar)
            }) || Sr.asked.delete(rr)
          } catch {
            Sr.asked.delete(rr)
          }
        }(rr.name, rr.slot).finally((() => {
          uQ--, aZ()
        })), aZ())
      }), {
        timeoutMs: cQ
      }))
    }
    var jZ = Qr(5249),
      IZ = Qr(5216),
      fZ = Qr(42904),
      EZ = Qr(4489),
      pZ = Qr(4494);
    let xZ = null,
      mZ = null;

    function NZ(rr) {
      const Sr = rr.startsWith(pZ.k),
        [Qr, Zr = Qr, Wr = Qr] = (Sr ? rr.slice(pZ.k.length) : rr).split(pZ.j);
      return {
        top: Qr,
        left: Zr,
        right: Wr,
        half: Sr
      }
    }

    function UZ(rr) {
      const Sr = null === xZ ? void 0 : (0, EZ.e)(rr),
        Qr = void 0 === Sr ? 0 : xZ.codes[Sr];
      return 0 === Qr ? void 0 : xZ.pool[Qr - 1]
    }
    var tZ = Qr(4485),
      hZ = Qr(5203),
      zZ = Qr(5240),
      YZ = Qr(37726),
      nZ = Qr(37734);
    const eZ = "item:";
    let KZ = null,
      yZ = null,
      BZ = null,
      TZ = null,
      vZ = !1,
      OZ = !1;

    function LZ() {
      return OZ || (OZ = !0, (0, zZ.p)().then((rr => {
        rr && (0, CQ.b)()
      }))), BZ ??= Promise.all([(0, tZ.h)(), (mZ ??= Qr.e(1).then((() => Qr(64587))).then((rr => {
        let {
          BLOCK_FACE_RUNS: Sr,
          BLOCK_FACES: Qr,
          MAX_FACE_ITEM_ID: Zr
        } = rr;
        xZ = {
          codes: (0, pZ.v)(Sr, Zr + 1),
          pool: Qr.split(pZ.r).map(NZ)
        }
      }), (rr => {
        throw mZ = null, rr
      })), mZ), (0, nZ.g)(), Qr.e(225).then((() => Qr(35472)))]).then((rr => {
        let [, , Sr, Qr] = rr;
        Sr.followBundledTextures(), KZ = Sr, yZ = Qr, (0, CQ.b)()
      }), (rr => {
        BZ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", rr)
      })), BZ
    }

    function lZ(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = (0, YZ.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : KZ.itemSpriteUrl(rr)
    }

    function XZ(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = (0, YZ.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : KZ.blockTextureUrl(rr)
    }

    function PZ(rr) {
      var Sr;
      return null !== (Sr = (0, tZ.d)(rr)) && void 0 !== Sr ? Sr : rr
    }

    function HZ(rr, Sr) {
      var Qr, Zr, Wr;
      return null !== (Qr = null !== (Zr = null !== (Wr = XZ(rr)) && void 0 !== Wr ? Wr : null === Sr || void 0 === Sr ? void 0 : Sr.rotated[rr]) && void 0 !== Zr ? Zr : null === Sr || void 0 === Sr ? void 0 : Sr.animated[rr]) && void 0 !== Qr ? Qr : KZ.notFoundUrl()
    }

    function qZ(rr) {
      return void 0 !== (0, EZ.e)(rr) ? rr : /^[1-9][0-9]*$/.test(rr) ? (0, EZ.g)(Number(rr)) : void 0
    }

    function RZ(rr) {
      var Sr;
      if (rr.startsWith(eZ)) {
        var Qr;
        const Sr = (0, tZ.d)(rr.slice(5));
        return null !== (Qr = void 0 === Sr ? null : lZ(Sr)) && void 0 !== Qr ? Qr : KZ.notFoundUrl()
      }
      return null !== (Sr = KZ.particleUrl(rr)) && void 0 !== Sr ? Sr : KZ.notFoundUrl()
    }

    function gZ(rr, Sr) {
      return "StairsBlock" === rr ? rr : Sr ? "SlabBlock" : "CubeBlock"
    }
    const CZ = {
        async blockIcon(rr) {
          var Sr;
          let {
            name: Zr,
            size: Wr,
            lineWidth: ar
          } = rr;
          await LZ();
          const jr = null !== (Sr = qZ(Zr)) && void 0 !== Sr ? Sr : Zr,
            Ir = (0, zZ.f)(jr, Wr, ar);
          if (null !== Ir) return Ir;
          const fr = UZ(jr),
            Er = (0, EZ.e)(jr),
            pr = void 0 === Er || null === yZ ? void 0 : yZ.itemTypeNameOf(Er);
          if (null === KZ || void 0 === fr) return "";
          const xr = [fr.top, fr.left, fr.right].some((rr => null === XZ(rr))),
            mr = xr ? await (TZ ??= Qr.e(235).then((() => Qr(35587))).then((rr => (vZ && (vZ = !1, (0, CQ.b)()), {
              rotated: rr.rotatedBlockTextures,
              animated: rr.animatedBlockTextures
            })), (rr => (TZ = null, vZ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", rr), null))), TZ) : null;
          if (xr && null === mr) return "";
          const Nr = {
              top: HZ(fr.top, mr),
              left: HZ(fr.left, mr),
              right: HZ(fr.right, mr),
              itemType: gZ(pr, fr.half)
            },
            Ur = (0, YZ.g)(),
            tr = 0 === Ur ? jr : `${jr}#${Ur}`;
          return (await (0, hZ.c)()).drawBlockIconUrl(tr, Wr, ar, (() => Nr))
        }
      },
      MZ = {
        itemIcon: function(rr) {
          var Sr, Qr, Wr, ar;
          if (null === KZ) return LZ(), Zr.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(rr);
          if ((0, IZ.i)(rr)) return {
            kind: "icon",
            url: null !== (Qr = null !== (Wr = null === (ar = (0, YZ.j)()) || void 0 === ar ? void 0 : ar.textureUrl(rr)) && void 0 !== Wr ? Wr : KZ.ingameIconUrl(rr)) && void 0 !== Qr ? Qr : KZ.notFoundUrl()
          };
          if (rr.startsWith(IZ.c)) return {
            kind: "icon",
            url: RZ(rr.slice(IZ.c.length))
          };
          if (0 === (0, EZ.k)()) return (0, fZ.c)(), Zr.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(rr);
          const jr = null !== (Sr = qZ(rr)) && void 0 !== Sr ? Sr : rr,
            Ir = (0, EZ.e)(jr),
            fr = void 0 === Ir ? void 0 : yZ.itemTypeNameOf(Ir);
          if (void 0 !== UZ(jr)) return {
            kind: "drawnBlock"
          };
          const Er = function(rr) {
            var Sr;
            return null !== (Sr = lZ(PZ(rr))) && void 0 !== Sr ? Sr : KZ.notFoundUrl()
          }(jr);
          if ((0, zZ.l)(jr) && ! function(rr) {
              const Sr = (0, YZ.j)();
              return null !== Sr && (null !== Sr.textureUrl(PZ(rr)) || (0, zZ.b)(rr).some((rr => null !== Sr.modelUrl(rr))))
            }(jr)) return {
            kind: "model",
            url: Er,
            drawn: (0, zZ.i)(jr)
          };
          if ("Gun" === fr) return {
            kind: "gun",
            url: Er
          };
          if (void 0 !== Ir && "GrayscaleArmour" === yZ.itemTypeOf(Ir) || Object.hasOwn(jZ.c, jr)) {
            var pr;
            const Sr = null !== (pr = (0, jZ.e)(rr)) && void 0 !== pr ? pr : (0, jZ.e)(jr);
            if (Sr) return {
              kind: "item",
              url: Er,
              tint: Sr
            }
          }
          return {
            kind: "item",
            url: Er
          }
        },
        hasIcon: function(rr) {
          return void 0 !== qZ(rr) || (0, IZ.i)(rr) || rr.startsWith(IZ.c)
        },
        isItemName: function(rr) {
          return void 0 !== qZ(rr)
        }
      };

    function GZ() {
      (0, Zr.installPageSources)({
        commands: {
          ...Zr.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: MQ.l,
          prewarmCreativeIcons: WZ
        },
        queries: CZ,
        lookups: {
          ...Zr.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...MZ,
          IK: MQ.d,
          drawCallStats: GQ.i,
          iconsDrawAhead: SZ
        }
      }), (0, CQ.b)(), LZ(), bQ || (bQ = !0, Er.i.subscribe("gameJoined", (() => {
        var rr;
        DQ = !1, null === (rr = rZ) || void 0 === rr || rr(), rZ = null;
        for (const {
            name: Sr,
            slot: Qr
          }
          of sQ.splice(0)) Qr.asked.delete(Sr)
      })), Er.i.subscribe("gamePlayable", (() => {
        DQ = !0, QZ()
      })), Zr.gameBridge.subscribe("inventory", QZ), Zr.gameBridge.subscribe("itemIconsVersion", (() => {
        dQ.clear(), QZ()
      })))
    }
    var kZ = Qr(679),
      AZ = Qr(41320);

    function VZ(rr) {
      if (null === rr || void 0 === rr || !rr.isCoreRunning) return null;
      const {
        api: Sr,
        chunks: Qr,
        items: Zr,
        tables: Wr
      } = rr;
      return {
        playerFeet() {
          const rr = Sr.JY(Sr.localId);
          return null !== rr && void 0 !== rr && rr.every(Number.isFinite) ? rr : null
        },
        chunkBlocks: rr => Qr.isLoaded(rr[0], rr[1], rr[2]) ? (rr, Sr, Zr) => Qr.aI(rr, Sr, Zr) : null,
        blockName: rr => Wr.nameOfId(rr),
        inventory: () => ({
          slots: Zr.playerItems().map((rr => rr ? {
            name: rr.name,
            amount: rr.amount
          } : null)),
          heldSlot: Zr.selectedSlot
        }),
        nearby() {
          const Qr = [];
          for (let Wr = 0; Wr < Sr.idStr.length; Wr++) {
            var Zr;
            const ar = Sr.idStr[Wr],
              jr = Sr.serverIds[Wr],
              Ir = Sr.kinds[Wr];
            if (null === ar || Sr.isLocal(jr) || Ir >>> er.c !== er.n.Lifeform) continue;
            const fr = Sr.JY(jr),
              Er = kZ.n[Ir & er.d];
            fr && void 0 !== Er && Qr.push({
              kind: "Player" === Er ? "player" : Er,
              name: null !== (Zr = rr.clientApi.getEntityName(ar)) && void 0 !== Zr ? Zr : null,
              position: fr
            })
          }
          return Qr
        },
        droppedItems() {
          let rr = 0;
          for (let Qr = 0; Qr < Sr.idStr.length; Qr++) null !== Sr.idStr[Qr] && Sr.kinds[Qr] >>> er.c === er.n.Item && rr++;
          return rr
        }
      }
    }
    const iZ = {
        worldCodeAiChunk: rr => Promise.resolve((0, AZ.e)(VZ((0, jr.f)()), rr)),
        worldCodeAiGameState: () => Promise.resolve((0, AZ.g)(VZ((0, jr.f)())))
      },
      wZ = function(rr) {
        const Sr = pQ(),
          Zr = pQ(),
          Wr = new Set,
          ar = new Set,
          jr = () => {
            var Sr, Qr;
            return null !== (Sr = null === (Qr = rr.runtime()) || void 0 === Qr ? void 0 : Qr.currentViewer) && void 0 !== Sr ? Sr : null
          };
        let Ir = null,
          fr = null;
        const pr = (rr, Sr) => ({
            current: rr,
            watch(Qr) {
              let Zr = rr();
              return Sr.add((() => {
                const Sr = rr();
                Sr !== Zr && (Zr = Sr, Qr(Sr))
              }))
            }
          }),
          mr = rr => ({
            watch: Sr => (rr.add(Sr), () => {
              rr.delete(Sr)
            })
          }),
          Nr = rr => {
            const Sr = jr(),
              Qr = null === Sr || void 0 === Sr ? void 0 : Sr.view;
            Sr && Qr && Sr.seek(Math.max(0, Math.min(Qr.totalTicks - 1, Qr.lx + rr * xr.Pd)))
          },
          Ur = {
            replay: pr((() => {
              var rr;
              const Sr = jr(),
                Qr = null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.view) && void 0 !== rr ? rr : null;
              return null === Sr || null === Qr || Qr.state === xr.yd.None ? (Ir = null, null) : (Ir = (0, dr.n)(Ir, {
                id: Sr.id,
                lx: Qr.lx,
                totalTicks: Qr.totalTicks,
                pC: xr.Pd,
                playing: Qr.state === xr.yd.Playing,
                speed: Qr.speed,
                cameraMode: Qr.cameraMode,
                freecam: "freecam" === Qr.cameraMode
              }), Ir)
            }), Sr),
            replayEdits: pr((() => {
              var rr;
              const Sr = jr(),
                Qr = null !== (rr = null === Sr || void 0 === Sr ? void 0 : Sr.view) && void 0 !== rr ? rr : null;
              return null === Sr || null === Qr || Qr.state === xr.yd.None ? (fr = null, null) : (fr = (0, dr.n)(fr, {
                cameraKeyframes: [...Sr.keyframes],
                playbackMark: Qr.mark,
                fileName: Sr.fileName,
                unsavedChanges: Sr.unsavedChanges,
                suggestSaveAs: Sr.suggestSaveAs
              }), fr)
            }), Sr),
            replayRecorder: pr((() => {
              var Sr, Qr;
              return null !== (Sr = null === (Qr = rr.runtime()) || void 0 === Qr ? void 0 : Qr.recorder.current) && void 0 !== Sr ? Sr : IQ.b.states.replayRecorder.current()
            }), Zr),
            replayVideoExporting: {
              current: aQ.e,
              watch: rr => (0, Er.j)("replayViewer|videoExportChanged", (() => {
                rr((0, aQ.e)())
              }))
            }
          },
          tr = {
            replayUiActionRequested: mr(ar),
            replayViewerRequested: mr(Wr)
          },
          hr = rr => {
            for (const Sr of Wr) Sr(rr)
          },
          zr = () => {
            var Zr;
            !0 === (null === (Zr = jr()) || void 0 === Zr ? void 0 : Zr.isOpen) && Promise.all([Qr.e(113), Qr.e(79)]).then((() => Qr(64578))).then((Qr => {
              let {
                startWasmReplayVideoExport: Zr
              } = Qr;
              return Zr({
                viewer: jr,
                canvas: () => {
                  var Sr, Qr;
                  return null !== (Sr = null === (Qr = rr.canvas) || void 0 === Qr ? void 0 : Qr.call(rr)) && void 0 !== Sr ? Sr : null
                },
                watchViewer: Sr.add,
                requestViewer: hr
              })
            }), (rr => {
              console.error("Couldn't load the video export", rr), jQ.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((rr => {
              console.error("The video export failed", rr)
            }))
          },
          Yr = {
            replayAction(rr) {
              if ((0, aQ.e)()) return;
              const Sr = jr();
              switch (rr) {
                case "replaySkipBack":
                  Nr(-1);
                  break;
                case "replaySkipForward":
                  Nr(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Sr && void 0 !== Sr && Sr.view && Sr.setSpeed((0, WQ.f)(Sr.view.speed, "replaySpeedUp" === rr ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Sr || void 0 === Sr || Sr.addKeyframe()
              }
            },
            setReplayPlaying(rr) {
              var Sr, Qr;
              (0, aQ.e)() || (rr ? null === (Sr = jr()) || void 0 === Sr || Sr.play() : null === (Qr = jr()) || void 0 === Qr || Qr.pause())
            },
            seekReplay(rr) {
              var Sr;
              let {
                lx: Qr,
                ignorePlaybackMark: Zr
              } = rr;
              null === (Sr = jr()) || void 0 === Sr || Sr.seek(Qr, null !== Zr && void 0 !== Zr && Zr)
            },
            setReplayCameraMode(rr) {
              var Sr;
              null === (Sr = jr()) || void 0 === Sr || Sr.setCameraMode(rr)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(rr) {
              var Sr;
              null === (Sr = jr()) || void 0 === Sr || Sr.setKeyframe(rr)
            },
            moveReplayCameraKeyframe(rr) {
              var Sr;
              let {
                from: Qr,
                to: Zr
              } = rr;
              null === (Sr = jr()) || void 0 === Sr || Sr.moveKeyframe(Qr, Zr)
            },
            deleteReplayCameraKeyframes(rr) {
              var Sr;
              let {
                start: Qr,
                end: Zr
              } = rr;
              null === (Sr = jr()) || void 0 === Sr || Sr.deleteKeyframes(Qr, Zr)
            },
            setReplayPlaybackMark(rr) {
              var Sr;
              null === (Sr = jr()) || void 0 === Sr || Sr.setMark(rr)
            },
            cropReplay(rr) {
              var Sr, Qr;
              let {
                start: Zr,
                end: Wr
              } = rr;
              return !(0, aQ.e)() && (null !== (Sr = null === (Qr = jr()) || void 0 === Qr ? void 0 : Qr.crop(Zr, Wr)) && void 0 !== Sr && Sr)
            },
            holdReplayForShaderPackFailure(rr) {
              const Sr = jr();
              Sr && (Sr.holdForShaderPackFailure(), function(rr) {
                Qr.e(138).then((() => Qr(40792))).then((Sr => {
                  let {
                    shaderPackPage: Qr
                  } = Sr;
                  Qr.block(rr)
                })).catch((rr => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", rr)
                }))
              }(rr))
            },
            exportReplayVideo() {
              zr()
            },
            toggleRecording() {
              var Sr;
              null === (Sr = rr.runtime()) || void 0 === Sr || Sr.recorder.toggleRecording()
            },
            saveClip() {
              var Sr;
              null === (Sr = rr.runtime()) || void 0 === Sr || Sr.recorder.saveClip()
            },
            setRecorderPrefs(Sr) {
              var Qr;
              let {
                clipping: Zr,
                clipSeconds: Wr
              } = Sr;
              null === (Qr = rr.runtime()) || void 0 === Qr || Qr.recorder.setPrefs(Zr, Wr)
            },
            setReplayViewerOpen(Sr) {
              var Qr;
              (0, hS.f)(Sr) && (null === (Qr = rr.runtime()) || void 0 === Qr || Qr.recorder.viewerShown(Sr))
            },
            recordFlyingMiddleText(Sr) {
              var Qr;
              let {
                content: Zr,
                ba: Wr,
                angle: ar,
                Ja: jr
              } = Sr;
              null === (Qr = rr.runtime()) || void 0 === Qr || Qr.recorder.recordFlyingText(JSON.stringify(Zr), Wr, ar, jr)
            },
            dragReplayCamera(Sr) {
              var Qr;
              let {
                dx: Zr,
                dy: Wr
              } = Sr;
              null === (Qr = rr.freecam()) || void 0 === Qr || Qr.drag(Zr, Wr)
            },
            moveReplayFreecam(Sr) {
              var Qr;
              null === (Qr = rr.freecam()) || void 0 === Qr || Qr.move(Sr)
            },
            holdReplayFreecamVertical(Sr) {
              var Qr;
              let {
                action: Zr,
                wI: Wr
              } = Sr;
              null === (Qr = rr.freecam()) || void 0 === Qr || Qr.holdVertical(Zr, Wr)
            }
          },
          nr = rr => {
            var Sr;
            const Qr = jr(),
              Zr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.view) && void 0 !== Sr ? Sr : null;
            fQ.has(rr) ? (rr => {
              for (const Sr of ar) Sr(rr)
            })(rr) : EQ.has(rr) ? Yr.replayAction(rr) : "replayPlayPause" === rr ? Qr && Zr && Zr.state !== xr.yd.None && Yr.setReplayPlaying(Zr.state !== xr.yd.Playing) : "replayChangeCameraMode" === rr ? null === Qr || void 0 === Qr || Qr.cycleCameraMode() : "replayExit" === rr ? !0 === (null === Qr || void 0 === Qr ? void 0 : Qr.inPlayback) && (0, RS.j)("/") : "replayExportVideo" === rr && zr()
          };
        let er = !1;
        return {
          states: Ur,
          events: tr,
          commands: Yr,
          lookups: {
            replayCamera() {
              var Sr, Qr, Zr;
              return !0 !== (null === (Sr = jr()) || void 0 === Sr ? void 0 : Sr.isOpen) ? null : null !== (Qr = null === (Zr = rr.cameraView) || void 0 === Zr ? void 0 : Zr.call(rr)) && void 0 !== Qr ? Qr : null
            },
            leaveGameReloadsPage() {
              var rr;
              return !0 === (null === (rr = jr()) || void 0 === rr ? void 0 : rr.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var rr;
              const Qr = !0 === (null === (rr = jr()) || void 0 === rr ? void 0 : rr.inPlayback);
              Qr !== er && (er = Qr, Er.i.Jp("connectedGameChanged")), Sr.fire()
            },
            recorderChanged: Zr.fire,
            keyDown: rr => {
              var Sr;
              switch (rr) {
                case "recordGame":
                  return void Yr.toggleRecording();
                case "recordClip":
                  return void((0, hS.e)() || Yr.saveClip())
              }(0, aQ.e)() || ("replayViewerOpen" !== rr ? rr.startsWith("replay") && ((0, hS.e)() || !0 === (null === (Sr = jr()) || void 0 === Sr ? void 0 : Sr.inPlayback)) && nr(rr) : hr("toggle"))
            }
          }
        }
      }({
        runtime: Wr.l,
        cameraView: () => {
          var rr;
          const Sr = null === (rr = (0, jr.f)()) || void 0 === rr ? void 0 : rr.renderFrame;
          if (!Sr) return null;
          const [Qr, Zr, Wr] = Sr.cameraPosition, [ar, Ir, fr] = Sr.cameraDirection;
          return {
            position: [Qr, Zr, Wr],
            direction: [ar, Ir, fr]
          }
        },
        canvas: () => {
          var rr, Sr, Qr;
          return null !== (rr = null === (Sr = (Qr = (0, ar.N)()).canvas) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : null
        },
        freecam: Wr.i
      }),
      cZ = {
        states: {
          ...ES,
          ...NS.l,
          ...wZ.states,
          ...NQ,
          ...Vr
        },
        events: {
          ...pS,
          ...hr,
          ...NS.e,
          ...Or.c,
          ...LQ.i,
          ...wZ.events,
          ...UQ,
          ...vr.k
        },
        commands: {
          ...Tr,
          ...xS,
          ...zr,
          ...NS.d,
          ...dS,
          ...OQ,
          ...vr.i,
          ...MS,
          ...wZ.commands,
          ...KQ,
          ...ir,
          ...gQ,
          ...US
        },
        queries: {
          ...NS.h,
          ...iZ
        },
        lookups: {
          ...mS,
          ...gr,
          ...LQ.l,
          ...wZ.lookups,
          ...Br,
          ...ZQ,
          ...RQ,
          ...wr
        }
      };

    function FZ() {
      (0, Ir.e)(tr.l), (0, Wr.o)(wZ.feed), (0, Or.g)(), sS || (sS = !0, (0, tr.j)(Pr.l, (rr => {
        const Sr = (0, qr.d)(Pr.l, rr);
        "string" === typeof Sr && Promise.resolve().then((() => Qr(4897))).then((rr => {
          let {
            onCosmeticPackGranted: Qr
          } = rr;
          Qr(Sr)
        }))
      })), (0, tr.j)(Pr.db, (rr => {
        const Sr = (0, qr.d)(Pr.db, rr);
        "number" === typeof Sr && Er.i.Jp("serverUpdating", Date.now() + Sr, !0)
      })), (0, tr.j)(Pr.E, (rr => {
        const Sr = (0, qr.d)(Pr.E, rr);
        if ((0, qr.b)(Sr)) {
          const {
            xa: rr,
            ma: Qr
          } = Sr;
          (0, JS.b)({
            xa: "string" === typeof rr ? rr : null,
            ma: "string" === typeof Qr ? Qr : null
          })
        }
      })), (0, tr.j)(pr.pc.NewUiRequest, (rr => {
        const Sr = (0, qr.f)(rr);
        (0, qr.b)(Sr) && "number" === typeof Sr.id && (0, qr.b)(Sr.clientParameters) && (0, DS.e)(Sr.id, Sr.clientParameters)
      })), (0, tr.j)(Pr.Z, (rr => {
        const Sr = (0, qr.d)(Pr.Z, rr);
        "number" === typeof Sr && (0, DS.h)(Sr)
      })), (0, tr.f)(DS.b), (0, tr.j)(pr.pc.UiRequestPopup, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr) && "number" === typeof Sr.id && ("string" === typeof Sr.text || (0, qr.b)(Sr.text) && "string" === typeof Sr.text.translationKey)) {
          const rr = Sr.id;
          (0, DS.j)(rr, Sr.text, !0 === Sr.destructive, (Sr => {
            dS.answerUiRequest({
              id: rr,
              ap: Sr
            })
          }))
        }
      })), (0, tr.j)(pr.pc.TopRightHelper, (rr => {
        const Sr = (0, qr.f)(rr);
        void 0 !== Sr && Er.i.Jp("TopRightHelper", Sr, !0)
      })), (0, tr.j)(pr.pc.TaskProgress, (rr => {
        const Sr = (0, qr.f)(rr);
        (0, qr.b)(Sr) && "string" === typeof Sr.taskId && "number" === typeof Sr.progress && (0, bS.d)({
          taskId: Sr.taskId,
          progress: Sr.progress
        })
      }))), yQ || (yQ = !0, (0, tr.j)(Pr.r, (rr => {
        const Sr = (0, qr.d)(Pr.r, rr);
        (0, qr.b)(Sr) && Er.i.Jp("showShopFromServer", {
          toggle: Sr.CS,
          MS: Sr.MS
        }, !0)
      })), (0, tr.j)(pr.pc.OverShopInfo, (rr => {
        const Sr = (0, qr.f)(rr);
        (0, qr.b)(Sr) && Er.i.Jp("overShopInfo", Sr.info, !0)
      })), (0, tr.j)(pr.pc.ShowShopTutorial, (() => {
        Er.i.Jp("showShopTutorial", null, !0)
      }))), nQ || (nQ = !0, (0, tr.d)((() => {
        var rr;
        (0, tQ.resetLeaveEvents)(), null === (rr = eQ) || void 0 === rr || rr(), eQ = (0, tr.c)() ? (0, zQ.onVisitSessionGameServerConnected)(tr.c) : null, (0, tr.c)() || Er.i.mY()
      })), (0, tr.j)(pr.pc.SetCookie, (rr => {
        const Sr = (0, qr.f)(rr),
          Qr = (0, RS.b)().gameNameWithVariation;
        (0, qr.b)(Sr) && "string" === typeof Sr.key && null !== Qr && (0, hQ.setCookie)(Qr, Sr.key, Sr.value)
      })), (0, tr.j)(pr.pc.LeaveValues, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr) && "string" === typeof Sr.leaveEventType) {
          const {
            leaveEventType: rr,
            category: Qr,
            subCategory: Zr,
            value: Wr
          } = Sr;
          (0, tQ.updateLeaveValue)({
            leaveEventType: rr,
            category: Qr,
            subCategory: Zr,
            value: Wr
          })
        }
      })), (0, tr.j)(pr.pc.CustomAnalyticsEvent, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr) && "string" === typeof Sr.cat1) {
          const {
            cat1: rr,
            cat2: Qr,
            cat3: Zr,
            value: Wr
          } = Sr;
          (0, tQ.logCustomAnalyticsEvent)({
            cat1: rr,
            cat2: Qr,
            cat3: Zr,
            value: Wr
          })
        }
      })), (0, tr.j)(pr.pc.ProgressionEvent, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr)) {
          const {
            type: rr,
            location1: Qr,
            location2: Zr,
            location3: Wr,
            score: ar
          } = Sr;
          (0, tQ.logProgressionEvent)({
            type: rr,
            location1: Qr,
            location2: Zr,
            location3: Wr,
            score: ar
          })
        }
      })), (0, tr.j)(pr.pc.ResourceEvent, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr)) {
          const {
            type: rr,
            resourceType: Qr,
            amount: Zr,
            category: Wr,
            itemName: ar
          } = Sr;
          (0, tQ.logResourceEvent)({
            type: rr,
            resourceType: Qr,
            amount: Zr,
            category: Wr,
            itemName: ar
          })
        }
      })), (0, tr.j)(pr.pc.LeaderboardResponse, (rr => {
        const Sr = (0, qr.f)(rr);
        if ((0, qr.b)(Sr)) {
          const {
            category: rr,
            timeframe: Qr,
            data: Zr
          } = Sr;
          Er.i.Jp("leaderboardResponse", {
            category: rr,
            timeframe: Qr,
            data: Zr
          })
        }
      })), (0, tr.j)(Pr.x, (rr => {
        const Sr = (0, qr.d)(Pr.x, rr);
        "string" === typeof Sr && (0, YQ.c)(rr.conn, Sr)
      })), (0, tr.j)(Pr.A, (rr => {
        const Sr = (0, qr.d)(Pr.A, rr);
        "string" === typeof Sr && console.error(`[logErrorToConsole]: ${Sr}`)
      }))), Mr(), (0, LQ.b)(), CS || (CS = !0, (0, tr.j)(Pr.i, (rr => {
        const Sr = (0, qr.d)(Pr.i, rr);
        void 0 !== Sr && (0, gS.l)(Sr)
      }))), oS(), lS(), or || (or = !0, (0, ar.w)(br)), Zr.gameBridge.attach(cZ), GZ()
    }
  },
  37734: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      g: () => Ir
    });
    var Zr = Qr(37743);
    let Wr = null,
      ar = null;

    function jr() {
      return Wr ??= Qr.e(74).then((() => Qr(43057))).catch((rr => {
        throw Wr = null, rr
      })), Wr
    }

    function Ir() {
      return ar ??= Promise.all([jr(), (0, Zr.e)()]).then((rr => {
        let [Sr] = rr;
        return Sr
      }), (rr => {
        throw ar = null, rr
      })), ar
    }
  },
  37945: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    const Zr = {
      wait: function(rr) {
        return new Promise((Sr => {
          setTimeout(Sr, rr)
        }))
      },
      stallMs: 2e4
    };
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zr;
        this.url = rr, this.options = Sr, this.timing = Qr, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = rr
      }
      ready() {
        if (null === this.fetched) {
          const rr = new AbortController;
          this.fetchAbort = rr, this.fetched = this.fetchWithRetries(rr.signal).then((Sr => (this.fetchAbort === rr && (this.fetchAbort = null), Sr)))
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
      async fetchWithRetries(rr) {
        for (let Sr = 0;; Sr++) {
          const Qr = new URL(this.url);
          if (Sr > 0 && Qr.searchParams.set("cache-bust", `${Date.now()}-${Sr}`), await this.fetchWhole(Qr, rr)) return this.scriptUrl = Qr, !0;
          if (Sr >= 3 || rr.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** Sr), rr.aborted) return !1
        }
      }
      async fetchWhole(rr, Sr) {
        const Qr = new AbortController;
        let Zr;
        const Wr = () => {
            clearTimeout(Zr), Zr = setTimeout((() => {
              Qr.abort()
            }), this.timing.stallMs)
          },
          ar = () => {
            Qr.abort()
          };
        Sr.addEventListener("abort", ar, {
          once: !0
        }), Wr();
        try {
          var jr;
          const Sr = await fetch(rr, {
            signal: Qr.signal
          });
          if (!Sr.ok) return !1;
          const Zr = null === (jr = Sr.body) || void 0 === jr ? void 0 : jr.getReader();
          if (!Zr) return !1;
          for (;;) {
            const {
              done: rr
            } = await Zr.read();
            if (rr) return !0;
            Wr()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Zr), Sr.removeEventListener("abort", ar)
        }
      }
    }
  },
  38538: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = {
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
  40599: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      g: () => Wr
    });
    const Zr = ["description", "label"];

    function Wr(rr) {
      const Sr = rr.type;
      return {
        type: Sr,
        params: rr[Sr]
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);