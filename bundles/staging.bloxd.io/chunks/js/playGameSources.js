export const id = 55;
export const ids = [55];
export const modules = {
  40978: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      f: () => uR,
      i: () => tR
    });
    const yR = 6e3;

    function tR(RR, JR) {
      return [Math.floor(RR[0] / JR) * JR, Math.floor(RR[1] / JR) * JR, Math.floor(RR[2] / JR) * JR]
    }

    function uR(RR) {
      const JR = (null !== RR && void 0 !== RR ? RR : "").match(/-?\d+(?:\.\d+)?/g);
      return JR && JR.length >= 3 ? [Number(JR[0]), Number(JR[1]), Number(JR[2])] : null
    }

    function ZR(RR, JR) {
      return RR === JR ? String(RR) : `${RR}-${JR}`
    }

    function qR(RR, JR, GR, yR) {
      const tR = [];
      let uR = new Map;
      for (let ZR = RR[2]; ZR < RR[2] + JR; ZR++) {
        const qR = new Map;
        let iR = RR[0];
        for (; iR < RR[0] + JR;) {
          const tR = yR(iR, GR, ZR);
          let fR = iR;
          for (; fR + 1 < RR[0] + JR && yR(fR + 1, GR, ZR) === tR;) fR++;
          if (null !== tR) {
            const RR = `${iR} ${fR} ${tR}`,
              JR = uR.get(RR);
            JR ? (JR.z1 = ZR, uR.delete(RR), qR.set(RR, JR)) : qR.set(RR, {
              x0: iR,
              x1: fR,
              z0: ZR,
              z1: ZR,
              name: tR
            })
          }
          iR = fR + 1
        }
        tR.push(...uR.values()), uR = qR
      }
      return tR.push(...uR.values()), tR.sort(((RR, JR) => RR.z0 - JR.z0 || RR.x0 - JR.x0)).map((RR => `x${ZR(RR.x0,RR.x1)} z${ZR(RR.z0,RR.z1)} ${RR.name}`))
    }

    function iR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yR;
      const iR = [RR[0] + JR - 1, RR[1] + JR - 1, RR[2] + JR - 1],
        fR = null !== tR && tR.every(((JR, GR) => Math.floor(JR) >= RR[GR] && Math.floor(JR) <= iR[GR])),
        VR = [`The chunk from ${RR.join(" ")} to ${iR.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== tR && VR.push(`The player's feet are at ${tR.map(Math.floor).join(" ")}, ${fR?"in this chunk":"outside this chunk"}.`);
      const KR = [];
      for (let yR = RR[1]; yR <= iR[1]; yR++) {
        const tR = qR(RR, JR, yR, GR).join("; "),
          uR = KR[KR.length - 1];
        (null === uR || void 0 === uR ? void 0 : uR.boxes) === tR ? uR.to = yR : KR.push({
          from: yR,
          to: yR,
          boxes: tR
        })
      }
      const wR = KR.filter((RR => "" !== RR.boxes));
      0 === wR.length && VR.push("It is all air.");
      let rR = VR.join("\n").length;
      for (const yR of wR) {
        const RR = `y${ZR(yR.from,yR.to)}: ${yR.boxes}`;
        if (rR += RR.length + 1, rR > uR) {
          VR.push(`Cut short: the layers from y${yR.from} up aren't shown, as there are too many blocks.`);
          break
        }
        VR.push(RR)
      }
      return VR.join("\n")
    }
  },
  10149: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    var yR = GR(25);

    function tR() {
      return !yR.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38060: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      g: () => uR,
      i: () => tR
    });
    const yR = [.25, .5, 1, 2, 4, 8, 16];

    function tR(RR, JR) {
      const GR = yR;
      let tR = GR.indexOf(RR);
      return -1 === tR && (tR = GR.findIndex((JR => JR >= RR)), -1 === tR && (tR = GR.length - 1)), "up" === JR ? GR[Math.min(tR + 1, GR.length - 1)] : GR[Math.max(tR - 1, 0)]
    }

    function uR(RR) {
      return RR <= yR[0]
    }

    function ZR(RR) {
      return RR >= yR[yR.length - 1]
    }
  },
  37651: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => uR
    });
    let yR = !1;

    function tR() {
      return yR
    }

    function uR(RR) {
      return yR !== RR && (yR = RR, !0)
    }
  },
  40270: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(32),
      tR = GR(2163);

    function uR(RR) {
      let {
        taskId: JR,
        progress: GR
      } = RR;
      const yR = tR.c.get("_tasks");
      null !== yR && void 0 !== yR && yR[JR] && tR.c.apply({
        _tasks: {
          ...yR,
          [JR]: {
            ...yR[JR],
            progress: GR
          }
        }
      })
    }
    yR.n.subscribe("clientTaskProgress", (RR => {
      uR(RR)
    }))
  },
  40951: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => rR,
      h: () => aR,
      l: () => fR,
      n: () => KR,
      q: () => wR,
      s: () => iR,
      t: () => ZR,
      v: () => VR,
      z: () => LR
    });
    var yR = GR(2163),
      tR = GR(32),
      uR = GR(2170);
    const ZR = (0, uR.l)((function() {
        var RR, JR, GR, tR;
        return {
          health: null !== (RR = yR.c.get("_health")) && void 0 !== RR ? RR : null,
          maxHealth: null !== (JR = yR.c.get("_totalMaxHealth")) && void 0 !== JR ? JR : null,
          shield: null !== (GR = yR.c.get("_shield")) && void 0 !== GR ? GR : null,
          maxShield: null !== (tR = yR.c.get("maxShield")) && void 0 !== tR ? tR : null
        }
      }), [], (0, uR.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      qR = [{
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

    function iR(RR, JR) {
      return qR[(RR ? 2 : 0) + (JR ? 1 : 0)]
    }
    const fR = (0, uR.l)((function() {
      var RR;
      return null !== (RR = yR.c.get("_aura")) && void 0 !== RR ? RR : null
    }), [], (0, uR.j)("_aura"));

    function VR(RR) {
      return {
        watch: JR => (0, tR.q)("shotPlayer", (GR => {
          let {
            playerId: yR,
            damage: tR,
            wasCrit: uR,
            distance: ZR
          } = GR;
          RR(yR) && JR({
            damage: tR,
            wasCrit: uR,
            distance: ZR
          })
        }))
      }
    }

    function KR(RR) {
      return (0, uR.d)("chat", (JR => {
        let {
          serverChatMsgId: GR,
          worldCodeLineId: yR,
          content: tR,
          chatterEId: uR,
          chatterObjectsToReplay: ZR
        } = JR;
        return {
          serverChatMsgId: null !== GR && void 0 !== GR ? GR : null,
          worldCodeLineId: null !== yR && void 0 !== yR ? yR : null,
          content: tR,
          author: uR ? RR(uR) : null,
          hiddenFromReplay: !0 === ZR
        }
      }))
    }
    const wR = (0, uR.d)("chatRemoved");
    class rR {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const GR = this.shown;
        return RR !== this.needed && (this.needed = RR, this.neededSince = JR, null === RR && (this.shown = null)), this.shown !== this.needed && JR - this.neededSince > 200 && (this.shown = this.needed), this.shown !== GR
      }
    }

    function eR(RR) {
      return [{
        translationKey: `touchKeys:${RR}`
      }]
    }
    const aR = {
      open: eR("open"),
      close: eR("close"),
      milk: eR("milk"),
      shear: eR("shear"),
      tame: eR("tame"),
      feed: eR("feed"),
      ride: eR("ride")
    };

    function LR(RR) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: RR
      }]
    }
  },
  37357: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR
    });
    var yR = GR(4563);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= GR.e(241).then((() => GR(37221))).then((RR => {
        let {
          ITEM_SPRITES: JR,
          ITEM_SPRITES_WITHOUT_FILE: GR,
          ITEM_FILES_WITHOUT_SPRITE: uR
        } = RR;
        tR = function(RR, JR, GR) {
          const tR = new Set,
            uR = (0, yR.u)(JR);
          let ZR = 0;
          for (const [yR, qR] of RR.entries()) yR === uR[ZR] ? ZR++ : tR.add(qR);
          if ("" !== GR)
            for (const qR of GR.split(yR.r)) tR.add(qR);
          return tR
        }(JR.split(yR.r), GR, uR)
      }), (RR => {
        throw uR = null, RR
      })), uR
    }

    function qR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = tR) || void 0 === GR ? void 0 : GR.has(RR)) && void 0 !== JR && JR
    }
  },
  40965: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      e: () => uR,
      f: () => tR
    });
    const yR = 128;

    function tR(RR, JR, GR, yR) {
      const tR = 2 * JR - 1,
        uR = 1 - 2 * GR,
        ZR = RR(0) - tR * RR(3),
        qR = RR(4) - tR * RR(7),
        iR = RR(8) - tR * RR(11),
        fR = RR(1) - uR * RR(3),
        VR = RR(5) - uR * RR(7),
        KR = RR(9) - uR * RR(11);
      yR[0] = qR * KR - iR * VR, yR[1] = iR * fR - ZR * KR, yR[2] = ZR * VR - qR * fR;
      const wR = yR[0] * RR(3) + yR[1] * RR(7) + yR[2] * RR(11) < 0 ? -1 : 1,
        rR = Math.hypot(yR[0], yR[1], yR[2]) * wR;
      return yR[0] /= rR, yR[1] /= rR, yR[2] /= rR, yR
    }

    function uR(RR, JR, GR, yR, tR, uR) {
      const ZR = [Math.floor(JR[0]), Math.floor(JR[1]), Math.floor(JR[2])],
        qR = [0, 0, 0],
        iR = [1 / 0, 1 / 0, 1 / 0],
        fR = [1 / 0, 1 / 0, 1 / 0];
      for (let wR = 0; wR < 3; wR++) qR[wR] = Math.sign(GR[wR]), 0 !== qR[wR] && (fR[wR] = Math.abs(1 / GR[wR]), iR[wR] = (ZR[wR] + (qR[wR] > 0 ? 1 : 0) - JR[wR]) / GR[wR]);
      let VR = 0,
        KR = Math.abs(GR[0]) > Math.abs(GR[1]) ? 0 : 1;
      for (Math.abs(GR[2]) > Math.abs(GR[KR]) && (KR = 2); VR <= yR;) {
        if (RR(ZR[0], ZR[1], ZR[2])) return tR[0] = ZR[0], tR[1] = ZR[1], tR[2] = ZR[2], uR[0] = 0, uR[1] = 0, uR[2] = 0, uR[KR] = -qR[KR], !0;
        KR = iR[0] < iR[1] ? 0 : 1, iR[2] < iR[KR] && (KR = 2), VR = iR[KR], ZR[KR] += qR[KR], iR[KR] += fR[KR]
      }
      return !1
    }
  },
  37558: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => gR,
      i: () => bR,
      m: () => CR,
      o: () => WR,
      r: () => XR
    });
    var yR = GR(289),
      tR = GR(103);
    const uR = new(GR(37561).b)(new URL(GR.p + GR.u(3), GR.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var ZR = GR(1825),
      qR = GR(2366);
    const iR = 1e4,
      fR = 3e4;
    let VR = null,
      KR = null,
      wR = null,
      rR = !1,
      eR = 0;
    const aR = new Map;
    let LR = null;
    const nR = new Map,
      UR = new Map;

    function WR(RR) {
      const JR = new Promise(((JR, GR) => {
        const yR = new Image;
        yR.crossOrigin = "anonymous", yR.fetchPriority = "high", yR.onload = () => {
          JR(yR)
        }, yR.onerror = () => {
          GR(new Error(`A block icon's texture did not load: ${RR.slice(0,100)}`))
        }, yR.src = RR
      }));
      return (0, qR.h)(JR)
    }

    function AR(RR) {
      var JR, GR;
      rR || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${RR}`), rR = !0, null === (JR = VR) || void 0 === JR || JR.terminate(), VR = null, KR = null, nR.clear(), UR.clear();
      for (const yR of aR.values()) yR(null);
      aR.clear(), null === (GR = LR) || void 0 === GR || GR()
    }

    function CR() {
      return null !== KR
    }

    function XR() {
      return wR ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === yR.c.ios_icon_worker_v1 && (0, tR.isWebKit)()) return;
        try {
          VR = await async function() {
            return await uR.ready(), uR.start()
          }()
        } catch (qR) {
          return void AR(`did not start (${String(qR)})`)
        }
        let RR = () => {};
        const JR = new Promise((JR => {
          RR = JR
        }));
        VR.onmessage = JR => {
          let {
            data: GR
          } = JR;
          if ("started" === GR.type) KR = VR, RR();
          else if ("failed" === GR.type) AR(`failed a draw (${GR.message})`);
          else {
            var yR, tR;
            null === (yR = aR.get(GR.id)) || void 0 === yR || yR(GR.url), aR.delete(GR.id), null === (tR = LR) || void 0 === tR || tR()
          }
        }, VR.onerror = JR => {
          JR.preventDefault(), AR(`stopped (${JR.message||"its script did not load or run"})`), RR()
        };
        const GR = `did not start in ${fR/1e3} s`;
        await (0, ZR.k)(JR, fR, GR).catch((() => {
          AR(GR)
        }))
      }(), wR
    }

    function MR() {
      if (null !== LR || 0 === aR.size) return;
      const RR = new Promise((RR => {
          LR = RR
        })),
        JR = `did not answer in ${iR/1e3} s`;
      (0, ZR.k)(RR, iR, JR).then((() => {
        LR = null, MR()
      }), (() => {
        LR = null, AR(JR)
      }))
    }

    function BR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      RR.postMessage(JR, GR)
    }

    function lR(RR, JR, GR, yR) {
      let tR = JR.get(GR);
      return void 0 === tR && (tR = yR().then((async JR => {
        let {
          image: GR,
          request: yR
        } = JR;
        try {
          const JR = await createImageBitmap(GR);
          BR(RR, yR(JR), [JR])
        } catch (tR) {
          AR(`could not take an image (${String(tR)})`)
        }
      })), tR.catch((() => {
        JR.get(GR) === tR && JR.delete(GR)
      })), JR.set(GR, tR)), tR
    }
    async function pR(RR, JR) {
      XR();
      const GR = KR;
      if (null === GR) return null;
      if (await RR(GR), KR !== GR) return null;
      const yR = ++eR;
      return new Promise((RR => {
        aR.set(yR, RR), BR(GR, JR(yR)), MR()
      }))
    }

    function gR(RR, JR, GR) {
      return pR((JR => Promise.all([RR.top, RR.left, RR.right].map((RR => function(RR, JR) {
        return lR(RR, nR, JR, (async () => ({
          image: await WR(JR),
          request: RR => ({
            type: "texture",
            url: JR,
            bitmap: RR
          })
        })))
      }(JR, RR))))), (yR => ({
        type: "draw",
        id: yR,
        ...RR,
        size: JR,
        outlineWidth: GR
      })))
    }

    function bR(RR, JR, GR, yR) {
      return pR((GR => function(RR, JR, GR) {
        return lR(RR, UR, JR, (async () => {
          const {
            texture: RR,
            ...yR
          } = await GR();
          return {
            image: await WR(RR),
            request: RR => ({
              type: "model",
              name: JR,
              bitmap: RR,
              geometry: yR
            })
          }
        }))
      }(GR, RR, JR)), (JR => ({
        type: "drawModel",
        id: JR,
        name: RR,
        size: GR,
        outlineWidth: yR
      })))
    }
  },
  40942: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(2102);

    function tR(RR, JR, GR) {
      return (0, yR.h)(RR, JR) < GR
    }
  },
  10057: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(1349);

    function tR(RR, JR) {
      var GR, tR;
      try {
        const GR = (0, yR.d)();
        if ("function" === typeof GR) {
          const yR = new GR(RR, JR);
          if (yR.type === RR) return yR
        }
      } catch {}
      const uR = document.createEvent("Event");
      return uR.initEvent(RR, null !== (GR = null === JR || void 0 === JR ? void 0 : JR.bubbles) && void 0 !== GR && GR, null !== (tR = null === JR || void 0 === JR ? void 0 : JR.cancelable) && void 0 !== tR && tR), uR
    }
  },
  40258: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR
    });
    var yR = GR(1317),
      tR = GR(1459),
      uR = GR(25),
      ZR = GR(1444),
      qR = GR(1449),
      iR = GR(1663),
      fR = GR(37620);

    function VR(RR) {
      let {
        au: JR,
        Lu: GR
      } = RR;
      const VR = null !== JR && void 0 !== JR ? JR : (0, qR.d)().gameNameWithVariation;
      (0, yR.D)(VR) && ((0, fR.i)(), (0, ZR.ib)((() => {
        console.log("Received matchmaking order from game server to game", JR), (0, uR.k)("inGameReplay"), (0, iR.navigatePreserveSearch)((0, tR.e)(VR, null !== GR && void 0 !== GR ? GR : void 0))
      }), "video_start"))
    }
  },
  40464: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(32),
      tR = GR(2194);

    function uR(RR) {
      var JR, GR;
      const uR = (0, tR.m)(null !== (JR = null === (GR = tR.t.toggleFreeCam) || void 0 === GR ? void 0 : GR[0]) && void 0 !== JR ? JR : null);
      yR.n.JK("showBottomMessage", {
        message: `Free Camera ${RR?"Enabled":"Disabled"}${uR?` - Press ${uR} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40256: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      f: () => iR,
      g: () => fR,
      i: () => KR
    });
    var yR = GR(2134),
      tR = GR(32),
      uR = GR(1493),
      ZR = GR(1351);
    const qR = new Map;

    function iR(RR, JR) {
      tR.n.JK("newUiRequest", {
        id: RR,
        clientParameters: JR
      }, !0)
    }

    function fR(RR) {
      tR.n.JK("removeUiRequest", RR, !0);
      const JR = qR.get(RR);
      JR && (JR.tearDownNotification(), qR.delete(RR))
    }

    function VR() {
      tR.n.JK("clearUiRequests");
      for (const RR of qR.values()) RR.tearDownNotification();
      qR.clear()
    }

    function KR(RR, JR, GR, tR) {
      const iR = "string" === typeof JR ? {
          translationKey: JR
        } : JR,
        fR = uR.NotificationProvider.showPromptPopup({
          title: iR.translationKey,
          textOpts: {
            title: (0, ZR.f)(iR.params, yR.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: GR,
          unlockPointerKey: "uiRequestPopup"
        });
      qR.set(RR, fR), fR.getResult().then((JR => {
        qR.delete(RR), "notificationTornDown" !== JR && tR(JR)
      }))
    }
  },
  40974: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => KR,
      d: () => wR
    });
    var yR = GR(203),
      tR = GR(40978);
    const uR = 20;

    function ZR(RR) {
      return RR.map(Math.floor).join(" ")
    }

    function qR(RR) {
      return null === RR.amount || 1 === RR.amount ? RR.name : `${RR.amount} ${RR.name}`
    }
    var iR = GR(40983),
      fR = GR(2163),
      VR = GR(1449);

    function KR(RR, JR) {
      if (!RR) return iR.b;
      const GR = RR.playerFeet();
      if (!GR) return "The player isn't in the world yet, so no blocks can be seen.";
      const uR = yR.g.LK,
        ZR = (0, tR.i)(null !== JR && void 0 !== JR ? JR : GR, uR),
        qR = RR.chunkBlocks(ZR);
      return qR ? (0, tR.c)(ZR, uR, ((JR, GR, yR) => {
        const tR = qR(JR, GR, yR);
        return 0 === tR ? null : RR.blockName(tR).split("|")[0]
      }), GR) : `The chunk from ${ZR.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${GR.map(Math.floor).join(" ")}.`
    }

    function wR(RR) {
      var JR, GR, yR;
      if (!RR) return iR.e;
      const tR = RR.playerFeet();
      if (!tR) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: KR,
        heldSlot: wR
      } = RR.inventory();
      return function(RR) {
        const JR = [];
        null !== RR.game && JR.push(`Game: ${RR.game}.`);
        const GR = null === RR.health ? "" : `, health ${Math.round(RR.health)}${null===RR.maxHealth?"":` of ${Math.round(RR.maxHealth)}`}`;
        JR.push(`The player (the creator) stands at ${ZR(RR.position)}${GR}, ${RR.creative?"in":"not in"} creative mode.`);
        const yR = RR.slots[RR.heldSlot];
        JR.push(yR ? `Holding (slot ${RR.heldSlot}): ${qR(yR)}.` : `Holding nothing (slot ${RR.heldSlot} is empty).`);
        const tR = RR.slots.flatMap(((RR, JR) => RR ? [`slot ${JR}: ${qR(RR)}`] : []));
        JR.push(tR.length > 0 ? `Inventory: ${tR.join(", ")}.` : "Inventory: empty.");
        const iR = JR => Math.hypot(JR.position[0] - RR.position[0], JR.position[1] - RR.position[1], JR.position[2] - RR.position[2]),
          fR = [...RR.nearby].sort(((RR, JR) => iR(RR) - iR(JR)));
        if (0 === fR.length) JR.push("No other players or mobs are near enough to see.");
        else {
          JR.push("Near them, nearest first:");
          for (const RR of fR.slice(0, uR)) {
            const GR = "player" === RR.kind ? `player "${RR.name||"?"}"` : RR.name && RR.name !== RR.kind ? `${RR.kind} "${RR.name}"` : RR.kind,
              yR = Math.round(iR(RR));
            JR.push(`- ${GR} at ${ZR(RR.position)}, ${yR} block${1===yR?"":"s"} away`)
          }
          fR.length > uR && JR.push(`- and ${fR.length-uR} more further away`)
        }
        return RR.droppedItems > 0 && JR.push(`${RR.droppedItems} dropped item${1===RR.droppedItems?" is":"s are"} on the ground nearby.`), JR.join("\n")
      }({
        game: null !== (JR = (0, VR.d)().gameNameWithVariation) && void 0 !== JR ? JR : null,
        position: tR,
        health: null !== (GR = fR.c.get("_health")) && void 0 !== GR ? GR : null,
        maxHealth: null !== (yR = fR.c.get("_totalMaxHealth")) && void 0 !== yR ? yR : null,
        creative: !0 === fR.c.get("creative"),
        heldSlot: wR,
        slots: KR,
        nearby: RR.nearby(),
        droppedItems: RR.droppedItems()
      })
    }
  },
  42538: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      attachPlayGameSources: () => Ey,
      playGameSources: () => dy
    });
    var yR = GR(2134),
      tR = GR(42394),
      uR = GR(5665),
      ZR = GR(42118),
      qR = GR(42523),
      iR = GR(40951),
      fR = GR(32),
      VR = GR(5685),
      KR = GR(5676),
      wR = GR(42154),
      rR = GR(42185),
      eR = GR(42543),
      aR = GR(42164);
    (0, aR.l)(VR.sc.Chat, (RR => {
      if (RR.payloadKind !== KR.gc.Msgpack) return;
      const JR = function(RR) {
        if (null === RR || "object" !== typeof RR || !("content" in RR)) return null;
        const {
          chatMsgId: JR,
          worldCodeLineId: GR,
          content: yR,
          chatterEId: tR,
          chatterObjectsToReplay: uR
        } = RR;
        return {
          serverChatMsgId: null !== JR && void 0 !== JR ? JR : void 0,
          worldCodeLineId: null !== GR && void 0 !== GR ? GR : void 0,
          content: yR,
          chatterEId: void 0 === tR || null === tR ? void 0 : String(tR),
          chatterObjectsToReplay: uR
        }
      }((0, wR.e)(RR.payload));
      null !== JR && fR.n.JK("chat", JR, !0)
    })), (0, aR.l)(VR.sc.ChatRemoved, (RR => {
      if (RR.payloadKind === KR.gc.Msgpack) {
        const {
          chatMsgId: JR
        } = (0, wR.e)(RR.payload);
        fR.n.JK("chatRemoved", JR, !0)
      }
    }));
    const LR = {
        chatReceived: (0, iR.n)((function(RR) {
          var JR, GR, yR;
          return {
            id: RR,
            name: null !== (JR = eR.f.getName(RR)) && void 0 !== JR ? JR : null,
            local: (0, rR.e)() === RR,
            profileEffect: null !== (GR = null === (yR = (0, eR.i)(RR)) || void 0 === yR ? void 0 : yR.profileEffect) && void 0 !== GR ? GR : null
          }
        })),
        chatRemoved: iR.q
      },
      nR = {
        sendChatMessage(RR) {
          var JR, GR;
          let {
            LZ: yR,
            channelName: tR
          } = RR;
          return null !== (JR = null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.clientApi.sendChat(yR, tR)) && void 0 !== JR && JR
        }
      };
    var UR = GR(203),
      WR = GR(2163),
      AR = GR(42106),
      CR = GR(40942);
    const XR = [0, 0, 0],
      MR = {
        codeBlockClickable(RR) {
          var JR;
          const GR = (0, ZR.l)();
          if (null === GR || void 0 === GR || !GR.isSessionLive) return !1;
          const yR = GR.api;
          if (0 !== (AR.s.playerFlags(yR.apiView, 0) & AR.xd.Crouching)) return !1;
          const tR = yR.queries.directorEntity(yR.localId) >= AR.pb.BYTES ? yR.memoryData(yR.scratch(), AR.pb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === tR) return !1;
          for (let uR = 0; uR < 3; uR++) XR[uR] = AR.pb.feet(tR, 0, uR);
          return XR[1] += AR.pb.eyeHeight(tR, 0), (0, CR.e)(XR, RR, null !== (JR = WR.c.get("blockReach")) && void 0 !== JR ? JR : UR.g.Ln)
        }
      },
      BR = {
        clickCodeBlock(RR) {
          var JR;
          null === (JR = (0, ZR.l)()) || void 0 === JR || JR.clickCodeBlock(RR)
        }
      };
    var lR = GR(42130),
      pR = GR(42552),
      gR = GR(1127),
      bR = GR(40283),
      vR = GR(5658),
      OR = GR(42137),
      xR = GR(42126),
      NR = GR(42145);

    function DR(RR) {
      if (null === RR) return null;
      const JR = [];
      for (const GR of RR) {
        const RR = Object.keys(GR)[0];
        if ("EJ" === RR) {
          const {
            str: RR,
            style: yR,
            clickableUrl: tR
          } = GR.EJ, uR = Object.keys(RR)[0], ZR = RR[uR];
          "string" !== uR && "styledEntityName" !== uR && "styledTranslatedText" !== uR || JR.push({
            str: ZR,
            style: yR,
            clickableUrl: tR
          })
        } else JR.push(GR[RR])
      }
      return JR
    }
    const HR = {
      screenPos(RR) {
        var JR, GR;
        return null !== (JR = null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.renderFrame.projectWorldPosToScreenPos(RR)) && void 0 !== JR ? JR : {
          x: 0,
          y: 0
        }
      }
    };
    let oR = !1;

    function cR() {
      oR || (oR = !0, (0, aR.l)(VR.sc.ProgressBarUpdate, (RR => {
        const JR = (0, NR.k)(RR);
        (0, NR.e)(JR) && fR.n.JK("progressBarUpdate", JR, !0)
      })), (0, aR.l)(OR.s, (RR => {
        const JR = (0, NR.i)(OR.s, RR);
        JR && fR.n.JK("middleScreenBarInitiate", {
          duration: JR.Wu,
          Au: JR.Au,
          horizBarRemOffset: JR.Cu
        }, !0)
      })), (0, aR.l)(VR.sc.RemoveMiddleScreenBar, (() => {
        fR.n.JK("middleScreenBarRemove")
      })), (0, aR.l)(OR.fb, (RR => {
        const JR = (0, NR.i)(OR.fb, RR);
        if (JR) {
          var GR;
          const RR = JR.NJ ? null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.renderFrame.projectDirectionToScreenPos(JR.NJ) : void 0;
          fR.n.JK("sendHitmarker", {
            xJ: JR.xJ,
            screenPos: RR
          }, !0)
        }
      })), (0, aR.l)(OR.kb, (RR => {
        const JR = (0, NR.i)(OR.kb, RR);
        if (JR) {
          const {
            id: RR,
            position: GR,
            style: yR,
            dJ: tR,
            QJ: uR
          } = JR;
          fR.n.JK("setDirectionArrow", {
            id: RR,
            position: GR,
            style: yR,
            text: DR(tR),
            QJ: uR
          }, !0)
        }
      })), (0, aR.l)(OR.d, (RR => {
        const JR = (0, NR.i)(OR.d, RR);
        JR && fR.n.JK("clearDirectionArrow", {
          id: JR.id
        }, !0)
      })), (0, aR.l)(OR.l, (RR => {
        const JR = (0, NR.i)(OR.l, RR);
        JR && fR.n.JK("flyingMiddleMessage", {
          content: DR(JR.su),
          hu: JR.hu,
          RZ: JR.RZ
        }, !0)
      })), (0, aR.l)(VR.sc.WorldVariation, (RR => {
        const JR = (0, NR.k)(RR);
        if ("string" === typeof JR) {
          const RR = JR === gR.i ? null : {
            message: `Currently loaded as variation: ${JR}`,
            type: "Warning"
          };
          fR.n.JK("showPermanentBottomMessage", RR, !0)
        }
      })), (0, aR.l)(OR.I, (RR => {
        const JR = (0, NR.i)(OR.I, RR);
        JR && function(RR, JR) {
          const {
            type: GR,
            params: yR
          } = (0, bR.g)(JR), tR = {
            ...yR
          };
          for (const uR of bR.e) tR[uR] && (tR[uR] = DR(tR[uR]));
          vR.d.queueQTE(RR, GR, tR).getResult().then((JR => {
            var GR;
            "boolean" === typeof JR && (null === (GR = (0, ZR.l)()) || void 0 === GR || GR.send(xR.d.QteResponse, {
              qteId: RR,
              qteResponse: JR
            }))
          }))
        }(JR.id, JR.Xu)
      })), (0, aR.l)(OR.Y, (RR => {
        const JR = (0, NR.i)(OR.Y, RR);
        "number" === typeof JR && vR.d.cancelQTE(JR)
      })), (0, aR.f)((() => {
        vR.d.reset()
      })), (0, aR.i)((() => {
        vR.d.reset()
      })), (0, aR.l)(VR.sc.EditItemCraftingRecipes, (RR => {
        const JR = (0, NR.k)(RR);
        (0, NR.e)(JR) && fR.n.JK("craftingRecipesEdited", {
          itemName: JR.craftingRecipeItemName,
          recipesForItem: JR.recipesForItem
        })
      })), (0, aR.l)(OR.V, (RR => {
        const JR = (0, NR.i)(OR.V, RR);
        JR && fR.n.JK("craftingRecipesEdited", {
          itemName: JR.tJ,
          recipesForItem: []
        })
      })))
    }
    var PR = GR(25);
    const IR = [{
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

    function mR(RR) {
      return AR.s.playerFlags(RR.api.apiView, 0)
    }
    const zR = {
        freeCamera: (0, rR.c)((RR => () => {
          const JR = RR.isSessionLive && 0 !== (mR(RR) & AR.xd.FreeCamMoves),
            GR = RR.freeCameraAllowed() && null === PR.d.get("scriptedCameraFacing");
          return IR[(GR ? 2 : 0) + (JR ? 1 : 0)]
        }), IR[0], (RR => (0, uR.n)(RR)))
      },
      SR = {
        setFreeCameraMovesFly: RR => {
          var JR;
          null === (JR = (0, ZR.l)()) || void 0 === JR || JR.setFreeCameraMovesFly(RR)
        }
      },
      jR = {
        freeCameraPos: () => {
          const RR = (0, ZR.l)();
          return null !== RR && void 0 !== RR && RR.isSessionLive && RR.renderFrame.hasView && 0 !== (mR(RR) & AR.xd.FreeCam) ? RR.renderFrame.cameraPosition : null
        }
      };
    var dR = GR(40464);
    let ER = !1,
      YR = !1;

    function kR() {
      const RR = (0, ZR.l)();
      if (null === RR || void 0 === RR || !RR.isSessionLive) return void(ER = !1);
      const JR = 0 !== (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.FreeCam);
      JR !== ER && (ER = JR, (0, dR.e)(JR))
    }
    var QR = GR(377),
      FR = GR(38150),
      TR = GR(2170);
    var sR = GR(42555),
      hR = GR(42177);
    const RJ = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let JJ = "off";

    function GJ(RR) {
      var JR;
      return null === RR ? null : {
        label: null !== (JR = (0, sR.b)(RR, "interactionPrompt")) && void 0 !== JR ? JR : null
      }
    }
    const yJ = new Map([
      [AR.qc.Open, {
        label: iR.h.open
      }],
      [AR.qc.Close, {
        label: iR.h.close
      }],
      [AR.qc.Milk, {
        label: iR.h.milk
      }],
      [AR.qc.Shear, {
        label: iR.h.shear
      }],
      [AR.qc.Tame, {
        label: iR.h.tame
      }],
      [AR.qc.Feed, {
        label: iR.h.feed
      }],
      [AR.qc.Ride, {
        label: iR.h.ride
      }]
    ]);
    class tJ {
      constructor() {
        this.target = RJ, this.Vq = AR.Yc, this.optionName = null, this.pickaxe = new iR.e
      }
      read(RR) {
        var JR;
        const GR = AR.s.targetBlockId(RR.api.apiView, 0);
        GR !== this.Vq && (this.Vq = GR, this.optionName = GR === AR.Yc ? null : `${RR.tables.getMetaInfo(GR).rootName}CrosshairText`);
        const yR = null === this.optionName ? null : null !== (JR = RR.tables.getClientOption(this.optionName)) && void 0 !== JR ? JR : null;
        this.pickaxe.update(function(RR, JR) {
          var GR, yR, tR;
          if (0 === (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.Breaking) || JR === AR.Yc || 0 === JR) return null;
          const {
            tables: uR
          } = RR;
          if (!0 === uR.getClientOption("creative")) return null;
          const ZR = uR.nameOfId(JR),
            qR = null === (GR = RR.items.Qq()) || void 0 === GR ? void 0 : GR.name,
            iR = null !== (yR = uR.getItemStat(ZR, "harvestLevel")) && void 0 !== yR ? yR : 0;
          return (0, QR.yc)({
            blockHarvestType: uR.getDefaultItemStat(ZR, "harvestType"),
            blockHarvestLevel: uR.getDefaultItemStat(ZR, "harvestLevel"),
            harvestLevel: iR,
            heldToolType: void 0 === qR ? void 0 : uR.getDefaultItemStat(qR, "harvests"),
            heldToolLevel: void 0 === qR ? void 0 : uR.getDefaultItemStat(qR, "level")
          }) && null !== (tR = FR.p[iR]) && void 0 !== tR ? tR : null
        }(RR, GR)), RR.watchPromptPick(JJ);
        const tR = "touch" === JJ ? function(RR) {
          var JR;
          const GR = RR.interactLabel;
          return GR === AR.qc.Entity ? GJ(RR.promptEntity) : GR === AR.qc.TameWith ? {
            label: (0, iR.z)(RR.tables.nameOfId(RR.interactIcon))
          } : null !== (JR = yJ.get(GR)) && void 0 !== JR ? JR : null
        }(RR) : GJ(RR.promptEntity);
        return this.target = (0, TR.m)(this.target, {
          interactPrompt: tR,
          blockText: yR,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let uJ = null;
    const ZJ = {
      current: () => {
        var RR, JR;
        return null !== (RR = null === (JR = uJ) || void 0 === JR ? void 0 : JR.target) && void 0 !== RR ? RR : RJ
      },
      watch: RR => {
        const JR = new tJ;
        uJ = JR;
        const GR = (0, rR.g)((GR => {
          let yR = JR.read(GR);
          RR(yR);
          const tR = (0, uR.r)((() => {
            const tR = JR.read(GR);
            tR !== yR && (yR = tR, RR(tR))
          }));
          return () => {
            tR(), GR.watchPromptPick("off")
          }
        }));
        return () => {
          GR(), uJ === JR && (uJ = null)
        }
      }
    };
    let qJ = 0,
      iJ = 0;
    const fJ = {
        health: iR.t,
        aura: iR.l,
        hotbar: hR.e.states.hotbar,
        heldItemAim: hR.e.states.heldItemAim,
        crouching: (0, rR.c)((RR => function(RR) {
          const JR = () => 0 !== (AR.s.playerFlags(RR.apiView, 0) & AR.xd.Crouching);
          return {
            current: JR,
            watch(RR) {
              let GR = JR();
              return (0, uR.n)((() => {
                const yR = JR();
                yR !== GR && (GR = yR, RR(yR))
              }))
            }
          }
        }(RR.api).current), !1, (RR => (0, uR.n)(RR))),
        flight: (0, rR.c)((RR => () => function(RR) {
          const JR = AR.s.playerFlags(RR.apiView, 0);
          return (0, iR.s)(0 !== (JR & AR.xd.CanFly), 0 !== (JR & AR.xd.Flying))
        }(RR.api)), (0, iR.s)(!1, !1), (RR => (0, uR.n)(RR))),
        gliderBoostFuel: (0, rR.c)((RR => () => AR.s.gliderBoostFuel(RR.api.apiView, 0)), 0, (RR => (0, uR.n)(RR))),
        crosshairTarget: ZJ
      },
      VJ = {
        hotbarSlotRequested: hR.e.events.hotbarSlotRequested,
        hotbarScrolled: hR.e.events.hotbarScrolled,
        numberKeyPressed: hR.e.events.numberKeyPressed,
        shotDamageToShow: (0, iR.v)((RR => !0 === (0, sR.b)(RR, "showDamageAmounts")))
      },
      KJ = {
        selectHotbarSlot: hR.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: RR => {
          JJ = RR
        }
      },
      wJ = {
        momentumFrac: function() {
          var RR, JR, GR;
          const yR = (0, ZR.l)(),
            tR = performance.now(),
            uR = null === yR || void 0 === yR || null === (RR = yR.items.Qq()) || void 0 === RR || null === (JR = RR.attributes) || void 0 === JR || null === (GR = JR.customAttributes) || void 0 === GR ? void 0 : GR.enchantments;
          return qJ = null !== yR && null !== uR && void 0 !== uR && uR.Momentum ? 0 !== (AR.s.playerFlags(yR.api.apiView, 0) & AR.xd.Breaking) ? Math.max(0, AR.s.momentumFrac(yR.api.apiView, 0)) : Math.max(0, qJ - (tR - iJ) / 1500) : 0, iJ = tR, qJ
        }
      };
    var rJ = GR(42114);
    const eJ = {
      lobbyManage(RR) {
        var JR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.LobbyManage, RR)
      }
    };
    var aJ = GR(1336),
      LJ = GR(37651),
      nJ = GR(10149),
      UJ = GR(1800),
      WJ = GR(3428),
      AJ = GR(5692);
    let CJ = !1;

    function XJ(RR) {
      CJ = RR
    }

    function MJ() {
      "inGame" !== PR.d.get("gameState") || (0, UJ.r)() || fR.n.JK("ctrlCrouchWithoutFullscreen")
    }
    let BJ = !1;
    const lJ = {
        OpenEmoteWheel: () => {
          XJ(!0), BJ = !0, queueMicrotask((() => {
            BJ && (BJ = !1, fR.n.JK("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          fR.n.JK("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, LJ.e)() || fR.n.JK("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, LJ.e)() || fR.n.JK("XKeyPressed")
        },
        CtrlCrouch: MJ,
        "primary-fire": () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      pJ = {
        OpenEmoteWheel: () => {
          XJ(!1), BJ ? (BJ = !1, (0, nJ.b)() || fR.n.JK("requestEmoteWheelHoldOpen")) : fR.n.JK("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: MJ,
        "primary-fire": () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          fR.n.JK("mouseState", {
            hq: aJ.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let gJ = !1;

    function bJ() {
      gJ || (gJ = !0, (0, AJ.f)((RR => {
        if ((0, tR.b)()) return;
        const JR = (0, AJ.d)(RR) ? "primary-fire" : RR.action;
        var GR;
        if (RR.down) {
          if (0 === (RR.flags & WJ.b.Synthetic)) {
            var yR;
            null === (yR = lJ[JR]) || void 0 === yR || yR.call(lJ)
          }
        } else null === (GR = pJ[JR]) || void 0 === GR || GR.call(pJ)
      })))
    }
    var vJ = GR(359),
      OJ = GR(103),
      xJ = GR(46),
      NJ = GR(42423),
      DJ = GR(1449),
      HJ = GR(3452);
    let oJ = !1;
    const cJ = {
      sendCodeCollab(RR) {
        var JR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.CodeCollab, (0, xR.q)(RR), (0, HJ.e)(RR))
      }
    };
    var PJ = GR(40356),
      IJ = GR(10057);
    let mJ = null,
      zJ = !1,
      SJ = null;

    function jJ() {
      return "inGame" === PR.d.get("gameState") && !(0, LJ.e)()
    }
    const dJ = {
        OpenInventory: RR => {
          (0, UJ.y)(RR, "inventory", (0, rJ.p)())
        },
        OpenShop: RR => {
          mJ && jJ() && (0, UJ.v)(RR, vJ.o.SHOP, !mJ.shopIsEmpty(WR.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: RR => {
          var JR, GR;
          jJ() && (0, UJ.A)(RR, (0, PJ.b)({
            lobbyLeaderboardInfo: WR.c.get("lobbyLeaderboardInfo"),
            lobbyManage: WR.c.get("lobbyManage")
          }), null !== (JR = null === (GR = mJ) || void 0 === GR ? void 0 : GR.getClientGameLeaderboardKey()) && void 0 !== JR ? JR : null)
        },
        OpenTasksAndLeaderboard: RR => {
          var JR;
          const GR = null === (JR = mJ) || void 0 === JR ? void 0 : JR.getClientGameMapKey();
          GR ? (0, UJ.B)(RR, !0, GR) : (0, UJ.y)(RR, "retentionFeatures", !(!WR.c.get("_tasks") && !WR.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: RR => {
          (0, UJ.y)(RR, "inviteLink", OJ.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: RR => {
          jJ() && function(RR) {
            const JR = (0, ZR.l)(),
              GR = null !== JR && void 0 !== JR && JR.isSessionLive ? JR.api : null,
              yR = GR ? GR.vW(GR.localId) : null;
            (0, UJ.B)(RR, null !== yR && (0, HJ.b)((0, DJ.d)()), (() => {
              (0, HJ.i)(yR)
            }))
          }(RR)
        },
        HideUi: () => {
          fR.n.JK("showUi", !1)
        }
      },
      EJ = {
        HideUi: () => {
          fR.n.JK("showUi", !0)
        }
      };

    function YJ() {
      zJ || (zJ = !0, GR.e(183).then((() => GR(64110))).then((RR => {
        mJ = RR
      }), (RR => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", RR)
      })), (0, NJ.A)((RR => {
        RR || !(0, NJ.k)() || (0, OJ.isMobile)() || !xJ.i.getItem("disableFullscreen") || (0, UJ.o)() || PR.d.set({
          openEverythingMenuName: vJ.o.SETTINGS
        })
      })), (0, AJ.f)((RR => {
        let {
          action: JR,
          down: GR,
          press: yR
        } = RR;
        var uR, ZR;
        (0, tR.b)() || (GR ? null === (uR = dJ[JR]) || void 0 === uR || uR.call(dJ, function(RR) {
          var JR;
          if (0 === RR || (null === (JR = SJ) || void 0 === JR ? void 0 : JR.press) !== RR) {
            const JR = {
              press: RR,
              event: (0, IJ.e)("inputAction")
            };
            SJ = JR, queueMicrotask((() => {
              SJ === JR && (SJ = null)
            }))
          }
          return SJ.event
        }(yR)) : null === (ZR = EJ[JR]) || void 0 === ZR || ZR.call(EJ))
      })))
    }
    var kJ = GR(40270),
      QJ = GR(40258),
      FJ = GR(40256);
    const TJ = {
      completeTask(RR) {
        var JR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.CompleteTask, (0, xR.s)(RR))
      },
      setServerCookie(RR) {
        var JR;
        let {
          key: GR,
          value: yR
        } = RR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.GeneralCookieSet, (0, xR.y)({
          WV: GR,
          AV: yR
        }))
      },
      answerUiRequest(RR) {
        var JR;
        let {
          id: GR,
          wV: yR
        } = RR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.UiRequestResp, (0, xR.U)({
          XZ: GR,
          MZ: yR,
          BZ: 5
        }))
      },
      chooseRewardedAd(RR) {
        var JR;
        let {
          id: GR,
          wV: yR
        } = RR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.UiRequestResponded, (0, xR.T)({
          id: GR,
          wV: yR
        }))
      },
      requestLeaderboard(RR) {
        var JR;
        let {
          category: GR,
          timeframe: yR,
          seeTop: tR
        } = RR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.LeaderboardRequest, {
          category: GR,
          timeframe: yR,
          seeTop: tR
        })
      }
    };
    let sJ = !1;
    const hJ = UR.g.Vn / 2,
      RG = [hJ, -hJ, -hJ, -hJ, hJ, hJ, -hJ, hJ],
      JG = [0, 0, 0];

    function GG(RR, JR, GR) {
      for (let yR = 0; yR < RR.length; yR += 2)
        if (RR[yR] === JR && RR[yR + 1] === GR) return !0;
      return !1
    }
    const yG = {
      blocksStandingOn: function() {
        const RR = (0, ZR.l)();
        if (null === RR) return [];
        const {
          api: JR,
          chunks: GR,
          tables: yR
        } = RR;
        if (!JR.readPosition(JR.localId, JG)) return [];
        const [tR, uR, qR] = JG, iR = Math.ceil(uR) - 1, fR = [], VR = [];
        for (let ZR = 0; ZR < RG.length; ZR += 2) {
          const RR = tR + RG[ZR],
            JR = qR + RG[ZR + 1];
          if (Number.isInteger(RR) || Number.isInteger(JR)) continue;
          const uR = Math.floor(RR),
            KR = Math.floor(JR);
          if (GG(VR, uR, KR)) continue;
          const wR = GR.Vq(uR, iR, KR);
          yR.isSolidBlockId(wR) && (VR.push(uR, KR), fR.push(yR.nameOfId(wR)))
        }
        return fR
      },
      dropAhead: function() {
        const RR = (0, ZR.l)();
        return null !== RR && 0 !== (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.DropAhead)
      }
    };
    var tG = GR(38060),
      uG = GR(40333),
      ZG = GR(1493),
      qG = GR(42188);
    const iG = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      fG = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function VG() {
      const RR = new Set;
      return {
        add: JR => (RR.add(JR), () => {
          RR.delete(JR)
        }),
        fire() {
          for (const JR of RR) JR()
        }
      }
    }
    const KG = Object.freeze([]);

    function wG(RR, JR) {
      let GR, {
        rereads: yR,
        followLocalId: tR
      } = JR;
      const ZR = () => (GR = (0, TR.m)(GR, RR()), GR);
      return {
        current: ZR,
        watch(RR) {
          const JR = (0, eR.e)((JR => {
            yR(JR) && RR(ZR())
          }));
          if (!tR) return JR;
          let GR = (0, rR.e)();
          const qR = (0, uR.r)((() => {
            const JR = (0, rR.e)();
            JR !== GR && (GR = JR, RR(ZR()))
          }));
          return () => {
            JR(), qR()
          }
        }
      }
    }
    const rG = {
        players: wG((function() {
          const RR = eR.f.ids(),
            JR = {};
          for (const uR of RR) {
            var GR, yR, tR;
            JR[uR] = {
              name: null !== (GR = eR.f.getName(uR)) && void 0 !== GR ? GR : null,
              ranks: null !== (yR = eR.f.getSetting(uR, "ranks")) && void 0 !== yR ? yR : KG,
              cosmetics: null !== (tR = (0, eR.i)(uR)) && void 0 !== tR ? tR : null
            }
          }
          return {
            ids: RR,
            byId: JR,
            localId: (0, rR.e)()
          }
        }), {
          rereads: RR => "roster" !== RR.kind || RR.members || RR.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: wG((function() {
          const RR = {};
          for (const tR of eR.f.ids()) {
            var JR, GR, yR;
            RR[tR] = {
              colour: null !== (JR = eR.f.getSetting(tR, "colorInLobbyLeaderboard")) && void 0 !== JR ? JR : null,
              values: null !== (GR = eR.f.getSetting(tR, "lobbyLeaderboardValues")) && void 0 !== GR ? GR : null,
              tags: null !== (yR = eR.f.getSetting(tR, "lobbyLeaderboardTags")) && void 0 !== yR ? yR : null
            }
          }
          return RR
        }), {
          rereads: function(RR) {
            if ("roster" !== RR.kind) return "reset" === RR.kind;
            const {
              members: JR,
              settings: GR
            } = RR;
            return JR || GR.has("colorInLobbyLeaderboard") || GR.has("lobbyLeaderboardValues") || GR.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      eG = {
        cosmeticsUpdated: {
          watch: RR => (0, eR.e)((JR => {
            if ("cosmetics" !== JR.kind) return;
            const GR = (0, rR.e)();
            RR(JR.updates.map((RR => {
              let {
                Zt: JR,
                ft: yR,
                Vt: tR
              } = RR;
              return {
                local: JR === GR,
                ft: yR,
                Vt: tR
              }
            })))
          }))
        }
      };
    var aG = GR(4053),
      LG = GR(1943),
      nG = GR(726),
      UG = GR(42463);
    let WG = !1,
      AG = null;
    const CG = {
      setShopOpen(RR) {
        var JR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.ShopMenuChanged, (0, xR.O)(RR))
      },
      buyShopItem(RR) {
        var JR;
        let {
          categoryKey: GR,
          itemKey: yR,
          userInput: tR
        } = RR;
        null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.ItemBought, {
          categoryKey: GR,
          itemKey: yR,
          shopVersion: WR.c.get("_shopVersion"),
          userInput: tR
        })
      }
    };
    let XG = !1;
    var MG = GR(5699);
    const BG = WJ.C.LookFrozen | WJ.C.ClicksSuppressed;

    function lG(RR, JR) {
      var GR;
      null !== (GR = (0, ZR.l)()) && void 0 !== GR && GR.send(RR, JR) || console.warn(`[bloxd-wasm-client] message ${RR} not sent: no live game or the core's command ring is full`)
    }(0, aR.l)(OR.ob, (RR => {
      const JR = (0, NR.i)(OR.ob, RR);
      void 0 !== JR && fR.n.JK("setDiscordReportKey", JR)
    }));
    const pG = {
      ignorePlayer(RR) {
        lG(xR.d.IgnoreUser, (0, xR.z)({
          fV: RR
        }))
      },
      reportPlayer(RR) {
        let {
          playerId: JR,
          chatMsgId: GR,
          contextChatMsgIds: yR,
          policy: tR,
          details: uR
        } = RR;
        lG(xR.d.UserReport, (0, xR.cb)({
          PV: JR,
          IV: GR,
          policy: tR,
          Kq: uR,
          mV: yR
        }))
      },
      reportWorldCodeChat(RR) {
        let {
          chatMsgId: JR,
          policy: GR,
          details: yR
        } = RR;
        lG(xR.d.UserReport, (0, xR.cb)({
          PV: "",
          IV: JR,
          policy: GR,
          Kq: yR,
          mV: []
        }))
      },
      requestDiscordReportKey(RR) {
        lG(xR.d.ReqDiscordReportKey, (0, xR.M)(RR))
      },
      reportLobbyOrGame(RR) {
        let {
          target: JR,
          policy: GR,
          details: yR
        } = RR;
        "customGame" === JR ? lG(xR.d.CustomGameReport, (0, xR.w)({
          policy: GR,
          Kq: yR
        })) : lG(xR.d.LobbyReport, (0, xR.D)({
          policy: GR,
          Kq: yR
        }))
      },
      updateMyCosmetic(RR) {
        lG(xR.d.UpdateMyCosmetic, (0, xR.bb)(RR))
      },
      holdEmoteWheel(RR) {
        !RR || CJ ? (0, MG.i)(BG, RR ? BG : 0) : fR.n.JK("requestEmoteWheelHoldRelease")
      }
    };
    var gG = GR(42563),
      bG = GR(5844),
      vG = GR(40965);
    const OG = [0, 0, 0],
      xG = [0, 0, 0],
      NG = [0, 0, 0],
      DG = {
        blockAtViewPoint(RR) {
          let {
            x: JR,
            y: GR
          } = RR;
          const yR = (0, ZR.l)();
          if (null === yR || void 0 === yR || !yR.renderFrame.hasView) return null;
          const {
            renderFrame: tR,
            clientApi: uR,
            api: qR
          } = yR;
          let iR = 0;
          return (0, vG.e)(((RR, JR, GR) => (iR = uR.getBlockId(RR, JR, GR), 0 !== iR)), tR.cameraPosition, (0, vG.f)((RR => AR.s.viewProj(qR.apiView, 0, RR)), JR, GR, OG), vG.d, xG, NG) ? {
            pos: [xG[0], xG[1], xG[2]],
            normal: [NG[0], NG[1], NG[2]],
            name: (0, bG.h)(iR)
          } : null
        }
      },
      HG = {
        setBlockHighlight(RR) {
          var JR;
          null === (JR = (0, ZR.l)()) || void 0 === JR || JR.setBlockHighlight(RR)
        }
      };
    var oG = GR(2144),
      cG = GR(42454),
      PG = GR(42568),
      IG = GR(2177),
      mG = GR(37558),
      zG = GR(271);
    const SG = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      jG = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * SG.fallbackRem,
        asked: new Set
      },
      dG = 2e3,
      EG = 4;
    let YG = [],
      kG = !1,
      QG = !1,
      FG = !1;
    const TG = new Set,
      sG = [];
    let hG = 0,
      Ry = null;

    function Jy() {
      return kG && (0, mG.m)()
    }

    function Gy() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yR.gameBridge.latest("inventory");
      if (FG && !QG) {
        for (const GR of RR.player) {
          var JR;
          if (null !== GR) yy(null !== (JR = GR.icon) && void 0 !== JR ? JR : GR.name, SG)
        }
        for (const RR of [...AR.I, ...YG]) yy(RR, jG);
        uy()
      }
    }

    function yy(RR, JR) {
      JR.asked.has(RR) || TG.has(RR) || ("model" === yR.gameBridge.lookup("itemIcon", RR).kind ? (JR.asked.add(RR), sG.push({
        name: RR,
        slot: JR
      })) : TG.add(RR))
    }

    function ty(RR) {
      YG = RR, Gy()
    }

    function uy() {
      !FG || QG || null !== Ry || 0 === sG.length || hG >= EG || (Ry = (0, zG.e)((() => {
        Ry = null;
        const RR = sG.shift();
        void 0 !== RR && FG && (hG++, async function(RR, JR) {
          var GR, tR;
          if (await (0, mG.r)(), !FG) return void JR.asked.delete(RR);
          if (!(0, mG.m)()) return void(QG = !0);
          const uR = window.devicePixelRatio,
            ZR = null !== (GR = null === (tR = document.querySelector(JR.icon)) || void 0 === tR ? void 0 : tR.getBoundingClientRect().width) && void 0 !== GR ? GR : 0,
            qR = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            iR = Math.round((ZR > 0 ? ZR : JR.fallbackRem * qR) * uR);
          try {
            await yR.gameBridge.query("blockIcon", {
              name: RR,
              size: iR,
              lineWidth: (0, IG.e)(uR)
            }) || JR.asked.delete(RR)
          } catch {
            JR.asked.delete(RR)
          }
        }(RR.name, RR.slot).finally((() => {
          hG--, uy()
        })), uy())
      }), {
        timeoutMs: dG
      }))
    }
    var Zy = GR(5303),
      qy = GR(5276),
      iy = GR(42577),
      fy = GR(4555),
      Vy = GR(4563);
    let Ky = null,
      wy = null;

    function ry(RR) {
      const JR = RR.startsWith(Vy.h),
        [GR, yR = GR, tR = GR] = (JR ? RR.slice(Vy.h.length) : RR).split(Vy.e);
      return {
        top: GR,
        left: yR,
        right: tR,
        half: JR
      }
    }

    function ey(RR) {
      const JR = null === Ky ? void 0 : (0, fy.b)(RR),
        GR = void 0 === JR ? 0 : Ky.codes[JR];
      return 0 === GR ? void 0 : Ky.pool[GR - 1]
    }
    var ay = GR(4546),
      Ly = GR(5263),
      ny = GR(5299),
      Uy = GR(37346),
      Wy = GR(37353);
    const Ay = "item:";
    let Cy = null,
      Xy = null,
      My = null,
      By = null,
      ly = !1,
      py = !1;

    function gy() {
      return py || (py = !0, (0, ny.m)().then((RR => {
        RR && (0, oG.e)()
      }))), My ??= Promise.all([(0, ay.d)(), (wy ??= GR.e(1).then((() => GR(64123))).then((RR => {
        let {
          BLOCK_FACE_RUNS: JR,
          BLOCK_FACES: GR,
          MAX_FACE_ITEM_ID: yR
        } = RR;
        Ky = {
          codes: (0, Vy.y)(JR, yR + 1),
          pool: GR.split(Vy.r).map(ry)
        }
      }), (RR => {
        throw wy = null, RR
      })), wy), (0, Wy.e)(), GR.e(224).then((() => GR(35162)))]).then((RR => {
        let [, , JR, GR] = RR;
        JR.followBundledTextures(), Cy = JR, Xy = GR, (0, oG.e)()
      }), (RR => {
        My = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", RR)
      })), My
    }

    function by(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = (0, Uy.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : Cy.itemSpriteUrl(RR)
    }

    function vy(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = (0, Uy.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : Cy.blockTextureUrl(RR)
    }

    function Oy(RR) {
      var JR;
      return null !== (JR = (0, ay.c)(RR)) && void 0 !== JR ? JR : RR
    }

    function xy(RR, JR) {
      var GR, yR, tR;
      return null !== (GR = null !== (yR = null !== (tR = vy(RR)) && void 0 !== tR ? tR : null === JR || void 0 === JR ? void 0 : JR.rotated[RR]) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.animated[RR]) && void 0 !== GR ? GR : Cy.notFoundUrl()
    }

    function Ny(RR) {
      return void 0 !== (0, fy.b)(RR) ? RR : /^[1-9][0-9]*$/.test(RR) ? (0, fy.c)(Number(RR)) : void 0
    }

    function Dy(RR) {
      var JR;
      if (RR.startsWith(Ay)) {
        var GR;
        const JR = (0, ay.c)(RR.slice(5));
        return null !== (GR = void 0 === JR ? null : by(JR)) && void 0 !== GR ? GR : Cy.notFoundUrl()
      }
      return null !== (JR = Cy.particleUrl(RR)) && void 0 !== JR ? JR : Cy.notFoundUrl()
    }

    function Hy(RR, JR) {
      return "StairsBlock" === RR ? RR : JR ? "SlabBlock" : "CubeBlock"
    }
    const oy = {
        async blockIcon(RR) {
          var JR;
          let {
            name: yR,
            size: tR,
            lineWidth: uR
          } = RR;
          await gy();
          const ZR = null !== (JR = Ny(yR)) && void 0 !== JR ? JR : yR,
            qR = (0, ny.g)(ZR, tR, uR);
          if (null !== qR) return qR;
          const iR = ey(ZR),
            fR = (0, fy.b)(ZR),
            VR = void 0 === fR || null === Xy ? void 0 : Xy.itemTypeNameOf(fR);
          if (null === Cy || void 0 === iR) return "";
          const KR = [iR.top, iR.left, iR.right].some((RR => null === vy(RR))),
            wR = KR ? await (By ??= GR.e(234).then((() => GR(35257))).then((RR => (ly && (ly = !1, (0, oG.e)()), {
              rotated: RR.rotatedBlockTextures,
              animated: RR.animatedBlockTextures
            })), (RR => (By = null, ly = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", RR), null))), By) : null;
          if (KR && null === wR) return "";
          const rR = {
              top: xy(iR.top, wR),
              left: xy(iR.left, wR),
              right: xy(iR.right, wR),
              itemType: Hy(VR, iR.half)
            },
            eR = (0, Uy.f)(),
            aR = 0 === eR ? ZR : `${ZR}#${eR}`;
          return (await (0, Ly.d)()).drawBlockIconUrl(aR, tR, uR, (() => rR))
        }
      },
      cy = {
        itemIcon: function(RR) {
          var JR, GR, tR, uR;
          if (null === Cy) return gy(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(RR);
          if ((0, qy.l)(RR)) return {
            kind: "icon",
            url: null !== (GR = null !== (tR = null === (uR = (0, Uy.g)()) || void 0 === uR ? void 0 : uR.textureUrl(RR)) && void 0 !== tR ? tR : Cy.ingameIconUrl(RR)) && void 0 !== GR ? GR : Cy.notFoundUrl()
          };
          if (RR.startsWith(qy.d)) return {
            kind: "icon",
            url: Dy(RR.slice(qy.d.length))
          };
          if (0 === (0, fy.f)()) return (0, iy.c)(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(RR);
          const ZR = null !== (JR = Ny(RR)) && void 0 !== JR ? JR : RR,
            qR = (0, fy.b)(ZR),
            iR = void 0 === qR ? void 0 : Xy.itemTypeNameOf(qR);
          if (void 0 !== ey(ZR)) return {
            kind: "drawnBlock"
          };
          const fR = function(RR) {
            var JR;
            return null !== (JR = by(Oy(RR))) && void 0 !== JR ? JR : Cy.notFoundUrl()
          }(ZR);
          if ((0, ny.l)(ZR) && ! function(RR) {
              const JR = (0, Uy.g)();
              return null !== JR && (null !== JR.textureUrl(Oy(RR)) || (0, ny.c)(RR).some((RR => null !== JR.modelUrl(RR))))
            }(ZR)) return {
            kind: "model",
            url: fR,
            drawn: (0, ny.i)(ZR)
          };
          if ("Gun" === iR) return {
            kind: "gun",
            url: fR
          };
          if (void 0 !== qR && "GrayscaleArmour" === Xy.itemTypeOf(qR) || Object.hasOwn(Zy.d, ZR)) {
            var VR;
            const JR = null !== (VR = (0, Zy.f)(RR)) && void 0 !== VR ? VR : (0, Zy.f)(ZR);
            if (JR) return {
              kind: "item",
              url: fR,
              tint: JR
            }
          }
          return {
            kind: "item",
            url: fR
          }
        },
        hasIcon: function(RR) {
          return void 0 !== Ny(RR) || (0, qy.l)(RR) || RR.startsWith(qy.d)
        },
        isItemName: function(RR) {
          return void 0 !== Ny(RR)
        }
      };

    function Py() {
      (0, yR.installPageSources)({
        commands: {
          ...yR.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: cG.o,
          prewarmCreativeIcons: ty
        },
        queries: oy,
        lookups: {
          ...yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...cy,
          zW: cG.g,
          drawCallStats: PG.g,
          iconsDrawAhead: Jy
        }
      }), (0, oG.e)(), gy(), kG || (kG = !0, fR.n.subscribe("gameJoined", (() => {
        var RR;
        FG = !1, null === (RR = Ry) || void 0 === RR || RR(), Ry = null;
        for (const {
            name: JR,
            slot: GR
          }
          of sG.splice(0)) GR.asked.delete(JR)
      })), fR.n.subscribe("gamePlayable", (() => {
        FG = !0, Gy()
      })), yR.gameBridge.subscribe("inventory", Gy), yR.gameBridge.subscribe("itemIconsVersion", (() => {
        TG.clear(), Gy()
      })))
    }
    var Iy = GR(664),
      my = GR(40974);

    function zy(RR) {
      if (null === RR || void 0 === RR || !RR.isCoreRunning) return null;
      const {
        api: JR,
        chunks: GR,
        items: yR,
        tables: tR
      } = RR;
      return {
        playerFeet() {
          const RR = JR.vW(JR.localId);
          return null !== RR && void 0 !== RR && RR.every(Number.isFinite) ? RR : null
        },
        chunkBlocks: RR => GR.isLoaded(RR[0], RR[1], RR[2]) ? (RR, JR, yR) => GR.Vq(RR, JR, yR) : null,
        blockName: RR => tR.nameOfId(RR),
        inventory: () => ({
          slots: yR.playerItems().map((RR => RR ? {
            name: RR.name,
            amount: RR.amount
          } : null)),
          heldSlot: yR.selectedSlot
        }),
        nearby() {
          const GR = [];
          for (let tR = 0; tR < JR.idStr.length; tR++) {
            var yR;
            const uR = JR.idStr[tR],
              ZR = JR.serverIds[tR],
              qR = JR.kinds[tR];
            if (null === uR || JR.isLocal(ZR) || qR >>> AR.d !== AR.q.Lifeform) continue;
            const iR = JR.vW(ZR),
              fR = Iy.k[qR & AR.e];
            iR && void 0 !== fR && GR.push({
              kind: "Player" === fR ? "player" : fR,
              name: null !== (yR = RR.clientApi.getEntityName(uR)) && void 0 !== yR ? yR : null,
              position: iR
            })
          }
          return GR
        },
        droppedItems() {
          let RR = 0;
          for (let GR = 0; GR < JR.idStr.length; GR++) null !== JR.idStr[GR] && JR.kinds[GR] >>> AR.d === AR.q.Item && RR++;
          return RR
        }
      }
    }
    const Sy = {
        worldCodeAiChunk: RR => Promise.resolve((0, my.b)(zy((0, ZR.l)()), RR)),
        worldCodeAiGameState: () => Promise.resolve((0, my.d)(zy((0, ZR.l)())))
      },
      jy = function(RR) {
        const JR = VG(),
          yR = VG(),
          tR = new Set,
          uR = new Set,
          ZR = () => {
            var JR, GR;
            return null !== (JR = null === (GR = RR.runtime()) || void 0 === GR ? void 0 : GR.currentViewer) && void 0 !== JR ? JR : null
          };
        let qR = null,
          iR = null;
        const VR = (RR, JR) => ({
            current: RR,
            watch(GR) {
              let yR = RR();
              return JR.add((() => {
                const JR = RR();
                JR !== yR && (yR = JR, GR(JR))
              }))
            }
          }),
          wR = RR => ({
            watch: JR => (RR.add(JR), () => {
              RR.delete(JR)
            })
          }),
          rR = RR => {
            const JR = ZR(),
              GR = null === JR || void 0 === JR ? void 0 : JR.view;
            JR && GR && JR.seek(Math.max(0, Math.min(GR.totalTicks - 1, GR.gK + RR * KR.Bd)))
          },
          eR = {
            replay: VR((() => {
              var RR;
              const JR = ZR(),
                GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null;
              return null === JR || null === GR || GR.state === KR.ld.None ? (qR = null, null) : (qR = (0, TR.m)(qR, {
                id: JR.id,
                gK: GR.gK,
                totalTicks: GR.totalTicks,
                lH: KR.Bd,
                playing: GR.state === KR.ld.Playing,
                speed: GR.speed,
                cameraMode: GR.cameraMode,
                freecam: "freecam" === GR.cameraMode
              }), qR)
            }), JR),
            replayEdits: VR((() => {
              var RR;
              const JR = ZR(),
                GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null;
              return null === JR || null === GR || GR.state === KR.ld.None ? (iR = null, null) : (iR = (0, TR.m)(iR, {
                cameraKeyframes: [...JR.keyframes],
                playbackMark: GR.mark,
                fileName: JR.fileName,
                unsavedChanges: JR.unsavedChanges,
                suggestSaveAs: JR.suggestSaveAs
              }), iR)
            }), JR),
            replayRecorder: VR((() => {
              var JR, GR;
              return null !== (JR = null === (GR = RR.runtime()) || void 0 === GR ? void 0 : GR.recorder.current) && void 0 !== JR ? JR : qG.c.states.replayRecorder.current()
            }), yR),
            replayVideoExporting: {
              current: uG.b,
              watch: RR => (0, fR.q)("replayViewer|videoExportChanged", (() => {
                RR((0, uG.b)())
              }))
            }
          },
          aR = {
            replayUiActionRequested: wR(uR),
            replayViewerRequested: wR(tR)
          },
          LR = RR => {
            for (const JR of tR) JR(RR)
          },
          nR = () => {
            var yR;
            !0 === (null === (yR = ZR()) || void 0 === yR ? void 0 : yR.isOpen) && Promise.all([GR.e(113), GR.e(79)]).then((() => GR(64117))).then((GR => {
              let {
                startWasmReplayVideoExport: yR
              } = GR;
              return yR({
                viewer: ZR,
                canvas: () => {
                  var JR, GR;
                  return null !== (JR = null === (GR = RR.canvas) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
                },
                watchViewer: JR.add,
                requestViewer: LR
              })
            }), (RR => {
              console.error("Couldn't load the video export", RR), ZG.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((RR => {
              console.error("The video export failed", RR)
            }))
          },
          UR = {
            replayAction(RR) {
              if ((0, uG.b)()) return;
              const JR = ZR();
              switch (RR) {
                case "replaySkipBack":
                  rR(-1);
                  break;
                case "replaySkipForward":
                  rR(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== JR && void 0 !== JR && JR.view && JR.setSpeed((0, tG.i)(JR.view.speed, "replaySpeedUp" === RR ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === JR || void 0 === JR || JR.addKeyframe()
              }
            },
            setReplayPlaying(RR) {
              var JR, GR;
              (0, uG.b)() || (RR ? null === (JR = ZR()) || void 0 === JR || JR.play() : null === (GR = ZR()) || void 0 === GR || GR.pause())
            },
            seekReplay(RR) {
              var JR;
              let {
                gK: GR,
                ignorePlaybackMark: yR
              } = RR;
              null === (JR = ZR()) || void 0 === JR || JR.seek(GR, null !== yR && void 0 !== yR && yR)
            },
            setReplayCameraMode(RR) {
              var JR;
              null === (JR = ZR()) || void 0 === JR || JR.setCameraMode(RR)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(RR) {
              var JR;
              null === (JR = ZR()) || void 0 === JR || JR.setKeyframe(RR)
            },
            moveReplayCameraKeyframe(RR) {
              var JR;
              let {
                from: GR,
                to: yR
              } = RR;
              null === (JR = ZR()) || void 0 === JR || JR.moveKeyframe(GR, yR)
            },
            deleteReplayCameraKeyframes(RR) {
              var JR;
              let {
                start: GR,
                end: yR
              } = RR;
              null === (JR = ZR()) || void 0 === JR || JR.deleteKeyframes(GR, yR)
            },
            setReplayPlaybackMark(RR) {
              var JR;
              null === (JR = ZR()) || void 0 === JR || JR.setMark(RR)
            },
            cropReplay(RR) {
              var JR, GR;
              let {
                start: yR,
                end: tR
              } = RR;
              return !(0, uG.b)() && (null !== (JR = null === (GR = ZR()) || void 0 === GR ? void 0 : GR.crop(yR, tR)) && void 0 !== JR && JR)
            },
            holdReplayForShaderPackFailure(RR) {
              const JR = ZR();
              JR && (JR.holdForShaderPackFailure(), function(RR) {
                GR.e(138).then((() => GR(40495))).then((JR => {
                  let {
                    shaderPackPage: GR
                  } = JR;
                  GR.block(RR)
                })).catch((RR => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", RR)
                }))
              }(RR))
            },
            exportReplayVideo() {
              nR()
            },
            toggleRecording() {
              var JR;
              null === (JR = RR.runtime()) || void 0 === JR || JR.recorder.toggleRecording()
            },
            saveClip() {
              var JR;
              null === (JR = RR.runtime()) || void 0 === JR || JR.recorder.saveClip()
            },
            setRecorderPrefs(JR) {
              var GR;
              let {
                clipping: yR,
                clipSeconds: tR
              } = JR;
              null === (GR = RR.runtime()) || void 0 === GR || GR.recorder.setPrefs(yR, tR)
            },
            setReplayViewerOpen(JR) {
              var GR;
              (0, LJ.i)(JR) && (null === (GR = RR.runtime()) || void 0 === GR || GR.recorder.viewerShown(JR))
            },
            recordFlyingMiddleText(JR) {
              var GR;
              let {
                content: yR,
                hu: tR,
                angle: uR,
                RZ: ZR
              } = JR;
              null === (GR = RR.runtime()) || void 0 === GR || GR.recorder.recordFlyingText(JSON.stringify(yR), tR, uR, ZR)
            },
            dragReplayCamera(JR) {
              var GR;
              let {
                dx: yR,
                dy: tR
              } = JR;
              null === (GR = RR.freecam()) || void 0 === GR || GR.drag(yR, tR)
            },
            moveReplayFreecam(JR) {
              var GR;
              null === (GR = RR.freecam()) || void 0 === GR || GR.move(JR)
            },
            holdReplayFreecamVertical(JR) {
              var GR;
              let {
                action: yR,
                Qq: tR
              } = JR;
              null === (GR = RR.freecam()) || void 0 === GR || GR.holdVertical(yR, tR)
            }
          },
          WR = RR => {
            var JR;
            const GR = ZR(),
              yR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.view) && void 0 !== JR ? JR : null;
            iG.has(RR) ? (RR => {
              for (const JR of uR) JR(RR)
            })(RR) : fG.has(RR) ? UR.replayAction(RR) : "replayPlayPause" === RR ? GR && yR && yR.state !== KR.ld.None && UR.setReplayPlaying(yR.state !== KR.ld.Playing) : "replayChangeCameraMode" === RR ? null === GR || void 0 === GR || GR.cycleCameraMode() : "replayExit" === RR ? !0 === (null === GR || void 0 === GR ? void 0 : GR.inPlayback) && (0, DJ.m)("/") : "replayExportVideo" === RR && nR()
          };
        let AR = !1;
        return {
          states: eR,
          events: aR,
          commands: UR,
          lookups: {
            replayCamera() {
              var JR, GR, yR;
              return !0 !== (null === (JR = ZR()) || void 0 === JR ? void 0 : JR.isOpen) ? null : null !== (GR = null === (yR = RR.cameraView) || void 0 === yR ? void 0 : yR.call(RR)) && void 0 !== GR ? GR : null
            },
            leaveGameReloadsPage() {
              var RR;
              return !0 === (null === (RR = ZR()) || void 0 === RR ? void 0 : RR.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var RR;
              const GR = !0 === (null === (RR = ZR()) || void 0 === RR ? void 0 : RR.inPlayback);
              GR !== AR && (AR = GR, fR.n.JK("connectedGameChanged")), JR.fire()
            },
            recorderChanged: yR.fire,
            keyDown: RR => {
              var JR;
              switch (RR) {
                case "recordGame":
                  return void UR.toggleRecording();
                case "recordClip":
                  return void((0, LJ.e)() || UR.saveClip())
              }(0, uG.b)() || ("replayViewerOpen" !== RR ? RR.startsWith("replay") && ((0, LJ.e)() || !0 === (null === (JR = ZR()) || void 0 === JR ? void 0 : JR.inPlayback)) && WR(RR) : LR("toggle"))
            }
          }
        }
      }({
        runtime: tR.l,
        cameraView: () => {
          var RR;
          const JR = null === (RR = (0, ZR.l)()) || void 0 === RR ? void 0 : RR.renderFrame;
          if (!JR) return null;
          const [GR, yR, tR] = JR.cameraPosition, [uR, qR, iR] = JR.cameraDirection;
          return {
            position: [GR, yR, tR],
            direction: [uR, qR, iR]
          }
        },
        canvas: () => {
          var RR, JR, GR;
          return null !== (RR = null === (JR = (GR = (0, uR.E)()).canvas) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : null
        },
        freecam: tR.i
      }),
      dy = {
        states: {
          ...fJ,
          ...rJ.l,
          ...jy.states,
          ...rG,
          ...zR
        },
        events: {
          ...VJ,
          ...LR,
          ...rJ.e,
          ...pR.c,
          ...gG.j,
          ...jy.events,
          ...eG,
          ...lR.j
        },
        commands: {
          ...BR,
          ...KJ,
          ...nR,
          ...rJ.b,
          ...TJ,
          ...pG,
          ...lR.f,
          ...cJ,
          ...jy.commands,
          ...CG,
          ...SR,
          ...HG,
          ...eJ
        },
        queries: {
          ...rJ.i,
          ...Sy
        },
        lookups: {
          ...wJ,
          ...HR,
          ...gG.l,
          ...jy.lookups,
          ...MR,
          ...yG,
          ...DG,
          ...jR
        }
      };

    function Ey() {
      (0, qR.g)(aR.o), (0, tR.n)(jy.feed), (0, pR.g)(), sJ || (sJ = !0, (0, aR.l)(OR.h, (RR => {
        const JR = (0, NR.i)(OR.h, RR);
        "string" === typeof JR && Promise.resolve().then((() => GR(4983))).then((RR => {
          let {
            onCosmeticPackGranted: GR
          } = RR;
          GR(JR)
        }))
      })), (0, aR.l)(OR.jb, (RR => {
        const JR = (0, NR.i)(OR.jb, RR);
        "number" === typeof JR && fR.n.JK("serverUpdating", Date.now() + JR, !0)
      })), (0, aR.l)(OR.F, (RR => {
        const JR = (0, NR.i)(OR.F, RR);
        if ((0, NR.e)(JR)) {
          const {
            au: RR,
            Lu: GR
          } = JR;
          (0, QJ.d)({
            au: "string" === typeof RR ? RR : null,
            Lu: "string" === typeof GR ? GR : null
          })
        }
      })), (0, aR.l)(VR.sc.NewUiRequest, (RR => {
        const JR = (0, NR.k)(RR);
        (0, NR.e)(JR) && "number" === typeof JR.id && (0, NR.e)(JR.clientParameters) && (0, FJ.f)(JR.id, JR.clientParameters)
      })), (0, aR.l)(OR._, (RR => {
        const JR = (0, NR.i)(OR._, RR);
        "number" === typeof JR && (0, FJ.g)(JR)
      })), (0, aR.i)(FJ.c), (0, aR.l)(VR.sc.UiRequestPopup, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR) && "number" === typeof JR.id && ("string" === typeof JR.text || (0, NR.e)(JR.text) && "string" === typeof JR.text.translationKey)) {
          const RR = JR.id;
          (0, FJ.i)(RR, JR.text, !0 === JR.destructive, (JR => {
            TJ.answerUiRequest({
              id: RR,
              wV: JR
            })
          }))
        }
      })), (0, aR.l)(VR.sc.TopRightHelper, (RR => {
        const JR = (0, NR.k)(RR);
        void 0 !== JR && fR.n.JK("TopRightHelper", JR, !0)
      })), (0, aR.l)(VR.sc.TaskProgress, (RR => {
        const JR = (0, NR.k)(RR);
        (0, NR.e)(JR) && "string" === typeof JR.taskId && "number" === typeof JR.progress && (0, kJ.e)({
          taskId: JR.taskId,
          progress: JR.progress
        })
      }))), XG || (XG = !0, (0, aR.l)(OR.n, (RR => {
        const JR = (0, NR.i)(OR.n, RR);
        (0, NR.e)(JR) && fR.n.JK("showShopFromServer", {
          toggle: JR.vJ,
          OJ: JR.OJ
        }, !0)
      })), (0, aR.l)(VR.sc.OverShopInfo, (RR => {
        const JR = (0, NR.k)(RR);
        (0, NR.e)(JR) && fR.n.JK("overShopInfo", JR.info, !0)
      })), (0, aR.l)(VR.sc.ShowShopTutorial, (() => {
        fR.n.JK("showShopTutorial", null, !0)
      }))), WG || (WG = !0, (0, aR.f)((() => {
        var RR;
        (0, aG.resetLeaveEvents)(), null === (RR = AG) || void 0 === RR || RR(), AG = (0, aR.c)() ? (0, nG.onVisitSessionGameServerConnected)(aR.c) : null, (0, aR.c)() || fR.n.PU()
      })), (0, aR.l)(VR.sc.SetCookie, (RR => {
        const JR = (0, NR.k)(RR),
          GR = (0, DJ.d)().gameNameWithVariation;
        (0, NR.e)(JR) && "string" === typeof JR.key && null !== GR && (0, LG.setCookie)(GR, JR.key, JR.value)
      })), (0, aR.l)(VR.sc.LeaveValues, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR) && "string" === typeof JR.leaveEventType) {
          const {
            leaveEventType: RR,
            category: GR,
            subCategory: yR,
            value: tR
          } = JR;
          (0, aG.updateLeaveValue)({
            leaveEventType: RR,
            category: GR,
            subCategory: yR,
            value: tR
          })
        }
      })), (0, aR.l)(VR.sc.CustomAnalyticsEvent, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR) && "string" === typeof JR.cat1) {
          const {
            cat1: RR,
            cat2: GR,
            cat3: yR,
            value: tR
          } = JR;
          (0, aG.logCustomAnalyticsEvent)({
            cat1: RR,
            cat2: GR,
            cat3: yR,
            value: tR
          })
        }
      })), (0, aR.l)(VR.sc.ProgressionEvent, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR)) {
          const {
            type: RR,
            location1: GR,
            location2: yR,
            location3: tR,
            score: uR
          } = JR;
          (0, aG.logProgressionEvent)({
            type: RR,
            location1: GR,
            location2: yR,
            location3: tR,
            score: uR
          })
        }
      })), (0, aR.l)(VR.sc.ResourceEvent, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR)) {
          const {
            type: RR,
            resourceType: GR,
            amount: yR,
            category: tR,
            itemName: uR
          } = JR;
          (0, aG.logResourceEvent)({
            type: RR,
            resourceType: GR,
            amount: yR,
            category: tR,
            itemName: uR
          })
        }
      })), (0, aR.l)(VR.sc.LeaderboardResponse, (RR => {
        const JR = (0, NR.k)(RR);
        if ((0, NR.e)(JR)) {
          const {
            category: RR,
            timeframe: GR,
            data: yR
          } = JR;
          fR.n.JK("leaderboardResponse", {
            category: RR,
            timeframe: GR,
            data: yR
          })
        }
      })), (0, aR.l)(OR.w, (RR => {
        const JR = (0, NR.i)(OR.w, RR);
        "string" === typeof JR && (0, UG.e)(RR.conn, JR)
      })), (0, aR.l)(OR.z, (RR => {
        const JR = (0, NR.i)(OR.z, RR);
        "string" === typeof JR && console.error(`[logErrorToConsole]: ${JR}`)
      }))), cR(), (0, gG.c)(), oJ || (oJ = !0, (0, aR.l)(OR.g, (RR => {
        const JR = (0, NR.i)(OR.g, RR);
        void 0 !== JR && (0, HJ.m)(JR)
      }))), YJ(), bJ(), YR || (YR = !0, (0, uR.n)(kR)), yR.gameBridge.attach(dy), Py()
    }
  },
  37353: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => qR
    });
    var yR = GR(37357);
    let tR = null,
      uR = null;

    function ZR() {
      return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
        throw tR = null, RR
      })), tR
    }

    function qR() {
      return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
        let [JR] = RR;
        return JR
      }), (RR => {
        throw uR = null, RR
      })), uR
    }
  },
  37561: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    const yR = {
      wait: function(RR) {
        return new Promise((JR => {
          setTimeout(JR, RR)
        }))
      },
      stallMs: 2e4
    };
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yR;
        this.url = RR, this.options = JR, this.timing = GR, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = RR
      }
      ready() {
        if (null === this.fetched) {
          const RR = new AbortController;
          this.fetchAbort = RR, this.fetched = this.fetchWithRetries(RR.signal).then((JR => (this.fetchAbort === RR && (this.fetchAbort = null), JR)))
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
      async fetchWithRetries(RR) {
        for (let JR = 0;; JR++) {
          const GR = new URL(this.url);
          if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
          if (JR >= 3 || RR.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** JR), RR.aborted) return !1
        }
      }
      async fetchWhole(RR, JR) {
        const GR = new AbortController;
        let yR;
        const tR = () => {
            clearTimeout(yR), yR = setTimeout((() => {
              GR.abort()
            }), this.timing.stallMs)
          },
          uR = () => {
            GR.abort()
          };
        JR.addEventListener("abort", uR, {
          once: !0
        }), tR();
        try {
          var ZR;
          const JR = await fetch(RR, {
            signal: GR.signal
          });
          if (!JR.ok) return !1;
          const yR = null === (ZR = JR.body) || void 0 === ZR ? void 0 : ZR.getReader();
          if (!yR) return !1;
          for (;;) {
            const {
              done: RR
            } = await yR.read();
            if (RR) return !0;
            tR()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(yR), JR.removeEventListener("abort", uR)
        }
      }
    }
  },
  38176: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = {
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
  40283: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      g: () => tR
    });
    const yR = ["description", "label"];

    function tR(RR) {
      const JR = RR.type;
      return {
        type: JR,
        params: RR[JR]
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);