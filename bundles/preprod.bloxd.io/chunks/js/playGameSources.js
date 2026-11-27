export const id = 55;
export const ids = [55];
export const modules = {
  40976: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      e: () => NW,
      i: () => EW
    });
    const mW = 6e3;

    function EW(WW, iW) {
      return [Math.floor(WW[0] / iW) * iW, Math.floor(WW[1] / iW) * iW, Math.floor(WW[2] / iW) * iW]
    }

    function NW(WW) {
      const iW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
      return iW && iW.length >= 3 ? [Number(iW[0]), Number(iW[1]), Number(iW[2])] : null
    }

    function PW(WW, iW) {
      return WW === iW ? String(WW) : `${WW}-${iW}`
    }

    function LW(WW, iW, OW, mW) {
      const EW = [];
      let NW = new Map;
      for (let PW = WW[2]; PW < WW[2] + iW; PW++) {
        const LW = new Map;
        let cW = WW[0];
        for (; cW < WW[0] + iW;) {
          const EW = mW(cW, OW, PW);
          let wW = cW;
          for (; wW + 1 < WW[0] + iW && mW(wW + 1, OW, PW) === EW;) wW++;
          if (null !== EW) {
            const WW = `${cW} ${wW} ${EW}`,
              iW = NW.get(WW);
            iW ? (iW.z1 = PW, NW.delete(WW), LW.set(WW, iW)) : LW.set(WW, {
              x0: cW,
              x1: wW,
              z0: PW,
              z1: PW,
              name: EW
            })
          }
          cW = wW + 1
        }
        EW.push(...NW.values()), NW = LW
      }
      return EW.push(...NW.values()), EW.sort(((WW, iW) => WW.z0 - iW.z0 || WW.x0 - iW.x0)).map((WW => `x${PW(WW.x0,WW.x1)} z${PW(WW.z0,WW.z1)} ${WW.name}`))
    }

    function cW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mW;
      const cW = [WW[0] + iW - 1, WW[1] + iW - 1, WW[2] + iW - 1],
        wW = null !== EW && EW.every(((iW, OW) => Math.floor(iW) >= WW[OW] && Math.floor(iW) <= cW[OW])),
        tW = [`The chunk from ${WW.join(" ")} to ${cW.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== EW && tW.push(`The player's feet are at ${EW.map(Math.floor).join(" ")}, ${wW?"in this chunk":"outside this chunk"}.`);
      const ZW = [];
      for (let mW = WW[1]; mW <= cW[1]; mW++) {
        const EW = LW(WW, iW, mW, OW).join("; "),
          NW = ZW[ZW.length - 1];
        (null === NW || void 0 === NW ? void 0 : NW.boxes) === EW ? NW.to = mW : ZW.push({
          from: mW,
          to: mW,
          boxes: EW
        })
      }
      const xW = ZW.filter((WW => "" !== WW.boxes));
      0 === xW.length && tW.push("It is all air.");
      let lW = tW.join("\n").length;
      for (const mW of xW) {
        const WW = `y${PW(mW.from,mW.to)}: ${mW.boxes}`;
        if (lW += WW.length + 1, lW > NW) {
          tW.push(`Cut short: the layers from y${mW.from} up aren't shown, as there are too many blocks.`);
          break
        }
        tW.push(WW)
      }
      return tW.join("\n")
    }
  },
  10027: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(25);

    function EW() {
      return !mW.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  38107: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      h: () => NW,
      k: () => EW
    });
    const mW = [.25, .5, 1, 2, 4, 8, 16];

    function EW(WW, iW) {
      const OW = mW;
      let EW = OW.indexOf(WW);
      return -1 === EW && (EW = OW.findIndex((iW => iW >= WW)), -1 === EW && (EW = OW.length - 1)), "up" === iW ? OW[Math.min(EW + 1, OW.length - 1)] : OW[Math.max(EW - 1, 0)]
    }

    function NW(WW) {
      return WW <= mW[0]
    }

    function PW(WW) {
      return WW >= mW[mW.length - 1]
    }
  },
  37735: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => NW
    });
    let mW = !1;

    function EW() {
      return mW
    }

    function NW(WW) {
      return mW !== WW && (mW = WW, !0)
    }
  },
  40229: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(27),
      EW = OW(2061);

    function NW(WW) {
      let {
        taskId: iW,
        progress: OW
      } = WW;
      const mW = EW.d.get("_tasks");
      null !== mW && void 0 !== mW && mW[iW] && EW.d.apply({
        _tasks: {
          ...mW,
          [iW]: {
            ...mW[iW],
            progress: OW
          }
        }
      })
    }
    mW.l.subscribe("clientTaskProgress", (WW => {
      NW(WW)
    }))
  },
  40951: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => lW,
      h: () => bW,
      i: () => wW,
      k: () => ZW,
      o: () => xW,
      p: () => cW,
      r: () => PW,
      t: () => tW,
      v: () => jW
    });
    var mW = OW(2061),
      EW = OW(27),
      NW = OW(2072);
    const PW = (0, NW.r)((function() {
        var WW, iW, OW, EW;
        return {
          health: null !== (WW = mW.d.get("_health")) && void 0 !== WW ? WW : null,
          maxHealth: null !== (iW = mW.d.get("_totalMaxHealth")) && void 0 !== iW ? iW : null,
          shield: null !== (OW = mW.d.get("_shield")) && void 0 !== OW ? OW : null,
          maxShield: null !== (EW = mW.d.get("maxShield")) && void 0 !== EW ? EW : null
        }
      }), [], (0, NW.o)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      LW = [{
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

    function cW(WW, iW) {
      return LW[(WW ? 2 : 0) + (iW ? 1 : 0)]
    }
    const wW = (0, NW.r)((function() {
      var WW;
      return null !== (WW = mW.d.get("_aura")) && void 0 !== WW ? WW : null
    }), [], (0, NW.o)("_aura"));

    function tW(WW) {
      return {
        watch: iW => (0, EW.n)("shotPlayer", (OW => {
          let {
            playerId: mW,
            damage: EW,
            wasCrit: NW,
            distance: PW
          } = OW;
          WW(mW) && iW({
            damage: EW,
            wasCrit: NW,
            distance: PW
          })
        }))
      }
    }

    function ZW(WW) {
      return (0, NW.d)("chat", (iW => {
        let {
          serverChatMsgId: OW,
          worldCodeLineId: mW,
          content: EW,
          chatterEId: NW,
          chatterObjectsToReplay: PW
        } = iW;
        return {
          serverChatMsgId: null !== OW && void 0 !== OW ? OW : null,
          worldCodeLineId: null !== mW && void 0 !== mW ? mW : null,
          content: EW,
          author: NW ? WW(NW) : null,
          hiddenFromReplay: !0 === PW
        }
      }))
    }
    const xW = (0, NW.d)("chatRemoved");
    class lW {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const OW = this.shown;
        return WW !== this.needed && (this.needed = WW, this.neededSince = iW, null === WW && (this.shown = null)), this.shown !== this.needed && iW - this.neededSince > 200 && (this.shown = this.needed), this.shown !== OW
      }
    }

    function AW(WW) {
      return [{
        translationKey: `touchKeys:${WW}`
      }]
    }
    const bW = {
      open: AW("open"),
      close: AW("close"),
      milk: AW("milk"),
      shear: AW("shear"),
      tame: AW("tame"),
      feed: AW("feed"),
      ride: AW("ride")
    };

    function jW(WW) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: WW
      }]
    }
  },
  37444: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => PW
    });
    var mW = OW(4459);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= OW.e(241).then((() => OW(37314))).then((WW => {
        let {
          ITEM_SPRITES: iW,
          ITEM_SPRITES_WITHOUT_FILE: OW,
          ITEM_FILES_WITHOUT_SPRITE: NW
        } = WW;
        EW = function(WW, iW, OW) {
          const EW = new Set,
            NW = (0, mW.w)(iW);
          let PW = 0;
          for (const [mW, LW] of WW.entries()) mW === NW[PW] ? PW++ : EW.add(LW);
          if ("" !== OW)
            for (const LW of OW.split(mW.s)) EW.add(LW);
          return EW
        }(iW.split(mW.s), OW, NW)
      }), (WW => {
        throw NW = null, WW
      })), NW
    }

    function LW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = EW) || void 0 === OW ? void 0 : OW.has(WW)) && void 0 !== iW && iW
    }
  },
  40960: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      h: () => NW,
      k: () => EW
    });
    const mW = 128;

    function EW(WW, iW, OW, mW) {
      const EW = 2 * iW - 1,
        NW = 1 - 2 * OW,
        PW = WW(0) - EW * WW(3),
        LW = WW(4) - EW * WW(7),
        cW = WW(8) - EW * WW(11),
        wW = WW(1) - NW * WW(3),
        tW = WW(5) - NW * WW(7),
        ZW = WW(9) - NW * WW(11);
      mW[0] = LW * ZW - cW * tW, mW[1] = cW * wW - PW * ZW, mW[2] = PW * tW - LW * wW;
      const xW = mW[0] * WW(3) + mW[1] * WW(7) + mW[2] * WW(11) < 0 ? -1 : 1,
        lW = Math.hypot(mW[0], mW[1], mW[2]) * xW;
      return mW[0] /= lW, mW[1] /= lW, mW[2] /= lW, mW
    }

    function NW(WW, iW, OW, mW, EW, NW) {
      const PW = [Math.floor(iW[0]), Math.floor(iW[1]), Math.floor(iW[2])],
        LW = [0, 0, 0],
        cW = [1 / 0, 1 / 0, 1 / 0],
        wW = [1 / 0, 1 / 0, 1 / 0];
      for (let xW = 0; xW < 3; xW++) LW[xW] = Math.sign(OW[xW]), 0 !== LW[xW] && (wW[xW] = Math.abs(1 / OW[xW]), cW[xW] = (PW[xW] + (LW[xW] > 0 ? 1 : 0) - iW[xW]) / OW[xW]);
      let tW = 0,
        ZW = Math.abs(OW[0]) > Math.abs(OW[1]) ? 0 : 1;
      for (Math.abs(OW[2]) > Math.abs(OW[ZW]) && (ZW = 2); tW <= mW;) {
        if (WW(PW[0], PW[1], PW[2])) return EW[0] = PW[0], EW[1] = PW[1], EW[2] = PW[2], NW[0] = 0, NW[1] = 0, NW[2] = 0, NW[ZW] = -LW[ZW], !0;
        ZW = cW[0] < cW[1] ? 0 : 1, cW[2] < cW[ZW] && (ZW = 2), tW = cW[ZW], PW[ZW] += LW[ZW], cW[ZW] += wW[ZW]
      }
      return !1
    }
  },
  37640: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => hW,
      c: () => HW,
      f: () => KW,
      g: () => sW,
      h: () => SW
    });
    var mW = OW(259),
      EW = OW(100);
    const NW = new(OW(37646).e)(new URL(OW.p + OW.u(3), OW.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var PW = OW(1755),
      LW = OW(2289);
    const cW = 1e4,
      wW = 3e4;
    let tW = null,
      ZW = null,
      xW = null,
      lW = !1,
      AW = 0;
    const bW = new Map;
    let jW = null;
    const UW = new Map,
      kW = new Map;

    function sW(WW) {
      const iW = new Promise(((iW, OW) => {
        const mW = new Image;
        mW.crossOrigin = "anonymous", mW.fetchPriority = "high", mW.onload = () => {
          iW(mW)
        }, mW.onerror = () => {
          OW(new Error(`A block icon's texture did not load: ${WW.slice(0,100)}`))
        }, mW.src = WW
      }));
      return (0, LW.f)(iW)
    }

    function MW(WW) {
      var iW, OW;
      lW || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${WW}`), lW = !0, null === (iW = tW) || void 0 === iW || iW.terminate(), tW = null, ZW = null, UW.clear(), kW.clear();
      for (const mW of bW.values()) mW(null);
      bW.clear(), null === (OW = jW) || void 0 === OW || OW()
    }

    function KW() {
      return null !== ZW
    }

    function SW() {
      return xW ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === mW.d.ios_icon_worker_v1 && (0, EW.isWebKit)()) return;
        try {
          tW = await async function() {
            return await NW.ready(), NW.start()
          }()
        } catch (LW) {
          return void MW(`did not start (${String(LW)})`)
        }
        let WW = () => {};
        const iW = new Promise((iW => {
          WW = iW
        }));
        tW.onmessage = iW => {
          let {
            data: OW
          } = iW;
          if ("started" === OW.type) ZW = tW, WW();
          else if ("failed" === OW.type) MW(`failed a draw (${OW.message})`);
          else {
            var mW, EW;
            null === (mW = bW.get(OW.id)) || void 0 === mW || mW(OW.url), bW.delete(OW.id), null === (EW = jW) || void 0 === EW || EW()
          }
        }, tW.onerror = iW => {
          iW.preventDefault(), MW(`stopped (${iW.message||"its script did not load or run"})`), WW()
        };
        const OW = `did not start in ${wW/1e3} s`;
        await (0, PW.o)(iW, wW, OW).catch((() => {
          MW(OW)
        }))
      }(), xW
    }

    function YW() {
      if (null !== jW || 0 === bW.size) return;
      const WW = new Promise((WW => {
          jW = WW
        })),
        iW = `did not answer in ${cW/1e3} s`;
      (0, PW.o)(WW, cW, iW).then((() => {
        jW = null, YW()
      }), (() => {
        jW = null, MW(iW)
      }))
    }

    function yW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      WW.postMessage(iW, OW)
    }

    function TW(WW, iW, OW, mW) {
      let EW = iW.get(OW);
      return void 0 === EW && (EW = mW().then((async iW => {
        let {
          image: OW,
          request: mW
        } = iW;
        try {
          const iW = await createImageBitmap(OW);
          yW(WW, mW(iW), [iW])
        } catch (EW) {
          MW(`could not take an image (${String(EW)})`)
        }
      })), EW.catch((() => {
        iW.get(OW) === EW && iW.delete(OW)
      })), iW.set(OW, EW)), EW
    }
    async function JW(WW, iW) {
      SW();
      const OW = ZW;
      if (null === OW) return null;
      if (await WW(OW), ZW !== OW) return null;
      const mW = ++AW;
      return new Promise((WW => {
        bW.set(mW, WW), yW(OW, iW(mW)), YW()
      }))
    }

    function hW(WW, iW, OW) {
      return JW((iW => Promise.all([WW.top, WW.left, WW.right].map((WW => function(WW, iW) {
        return TW(WW, UW, iW, (async () => ({
          image: await sW(iW),
          request: WW => ({
            type: "texture",
            url: iW,
            bitmap: WW
          })
        })))
      }(iW, WW))))), (mW => ({
        type: "draw",
        id: mW,
        ...WW,
        size: iW,
        outlineWidth: OW
      })))
    }

    function HW(WW, iW, OW, mW) {
      return JW((OW => function(WW, iW, OW) {
        return TW(WW, kW, iW, (async () => {
          const {
            texture: WW,
            ...mW
          } = await OW();
          return {
            image: await sW(WW),
            request: WW => ({
              type: "model",
              name: iW,
              bitmap: WW,
              geometry: mW
            })
          }
        }))
      }(OW, WW, iW)), (iW => ({
        type: "drawModel",
        id: iW,
        name: WW,
        size: OW,
        outlineWidth: mW
      })))
    }
  },
  40943: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(2012);

    function EW(WW, iW, OW) {
      return (0, mW.l)(WW, iW) < OW
    }
  },
  9957: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(1250);

    function EW(WW, iW) {
      var OW, EW;
      try {
        const OW = (0, mW.e)();
        if ("function" === typeof OW) {
          const mW = new OW(WW, iW);
          if (mW.type === WW) return mW
        }
      } catch {}
      const NW = document.createEvent("Event");
      return NW.initEvent(WW, null !== (OW = null === iW || void 0 === iW ? void 0 : iW.bubbles) && void 0 !== OW && OW, null !== (EW = null === iW || void 0 === iW ? void 0 : iW.cancelable) && void 0 !== EW && EW), NW
    }
  },
  40216: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW
    });
    var mW = OW(1217),
      EW = OW(1365),
      NW = OW(25),
      PW = OW(1339),
      LW = OW(1351),
      cW = OW(1605),
      wW = OW(37709);

    function tW(WW) {
      let {
        cN: iW,
        wN: OW
      } = WW;
      const tW = null !== iW && void 0 !== iW ? iW : (0, LW.d)().gameNameWithVariation;
      (0, mW.N)(tW) && ((0, wW.j)(), (0, PW.$)((() => {
        console.log("Received matchmaking order from game server to game", iW), (0, NW.l)("inGameReplay"), (0, cW.navigatePreserveSearch)((0, EW.e)(tW, null !== OW && void 0 !== OW ? OW : void 0))
      }), "video_start"))
    }
  },
  40416: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(27),
      EW = OW(2085);

    function NW(WW) {
      var iW, OW;
      const NW = (0, EW.m)(null !== (iW = null === (OW = EW.v.toggleFreeCam) || void 0 === OW ? void 0 : OW[0]) && void 0 !== iW ? iW : null);
      mW.l.iZ("showBottomMessage", {
        message: `Free Camera ${WW?"Enabled":"Disabled"}${NW?` - Press ${NW} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  40213: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      f: () => cW,
      h: () => wW,
      j: () => ZW
    });
    var mW = OW(2037),
      EW = OW(27),
      NW = OW(1422),
      PW = OW(1255);
    const LW = new Map;

    function cW(WW, iW) {
      EW.l.iZ("newUiRequest", {
        id: WW,
        clientParameters: iW
      }, !0)
    }

    function wW(WW) {
      EW.l.iZ("removeUiRequest", WW, !0);
      const iW = LW.get(WW);
      iW && (iW.tearDownNotification(), LW.delete(WW))
    }

    function tW() {
      EW.l.iZ("clearUiRequests");
      for (const WW of LW.values()) WW.tearDownNotification();
      LW.clear()
    }

    function ZW(WW, iW, OW, EW) {
      const cW = "string" === typeof iW ? {
          translationKey: iW
        } : iW,
        wW = NW.NotificationProvider.showPromptPopup({
          title: cW.translationKey,
          textOpts: {
            title: (0, PW.j)(cW.params, mW.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: OW,
          unlockPointerKey: "uiRequestPopup"
        });
      LW.set(WW, wW), wW.getResult().then((iW => {
        LW.delete(WW), "notificationTornDown" !== iW && EW(iW)
      }))
    }
  },
  40969: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW,
      e: () => xW
    });
    var mW = OW(182),
      EW = OW(40976);
    const NW = 20;

    function PW(WW) {
      return WW.map(Math.floor).join(" ")
    }

    function LW(WW) {
      return null === WW.amount || 1 === WW.amount ? WW.name : `${WW.amount} ${WW.name}`
    }
    var cW = OW(40980),
      wW = OW(2061),
      tW = OW(1351);

    function ZW(WW, iW) {
      if (!WW) return cW.c;
      const OW = WW.playerFeet();
      if (!OW) return "The player isn't in the world yet, so no blocks can be seen.";
      const NW = mW.f.jZ,
        PW = (0, EW.i)(null !== iW && void 0 !== iW ? iW : OW, NW),
        LW = WW.chunkBlocks(PW);
      return LW ? (0, EW.b)(PW, NW, ((iW, OW, mW) => {
        const EW = LW(iW, OW, mW);
        return 0 === EW ? null : WW.blockName(EW).split("|")[0]
      }), OW) : `The chunk from ${PW.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${OW.map(Math.floor).join(" ")}.`
    }

    function xW(WW) {
      var iW, OW, mW;
      if (!WW) return cW.e;
      const EW = WW.playerFeet();
      if (!EW) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: ZW,
        heldSlot: xW
      } = WW.inventory();
      return function(WW) {
        const iW = [];
        null !== WW.game && iW.push(`Game: ${WW.game}.`);
        const OW = null === WW.health ? "" : `, health ${Math.round(WW.health)}${null===WW.maxHealth?"":` of ${Math.round(WW.maxHealth)}`}`;
        iW.push(`The player (the creator) stands at ${PW(WW.position)}${OW}, ${WW.creative?"in":"not in"} creative mode.`);
        const mW = WW.slots[WW.heldSlot];
        iW.push(mW ? `Holding (slot ${WW.heldSlot}): ${LW(mW)}.` : `Holding nothing (slot ${WW.heldSlot} is empty).`);
        const EW = WW.slots.flatMap(((WW, iW) => WW ? [`slot ${iW}: ${LW(WW)}`] : []));
        iW.push(EW.length > 0 ? `Inventory: ${EW.join(", ")}.` : "Inventory: empty.");
        const cW = iW => Math.hypot(iW.position[0] - WW.position[0], iW.position[1] - WW.position[1], iW.position[2] - WW.position[2]),
          wW = [...WW.nearby].sort(((WW, iW) => cW(WW) - cW(iW)));
        if (0 === wW.length) iW.push("No other players or mobs are near enough to see.");
        else {
          iW.push("Near them, nearest first:");
          for (const WW of wW.slice(0, NW)) {
            const OW = "player" === WW.kind ? `player "${WW.name||"?"}"` : WW.name && WW.name !== WW.kind ? `${WW.kind} "${WW.name}"` : WW.kind,
              mW = Math.round(cW(WW));
            iW.push(`- ${OW} at ${PW(WW.position)}, ${mW} block${1===mW?"":"s"} away`)
          }
          wW.length > NW && iW.push(`- and ${wW.length-NW} more further away`)
        }
        return WW.droppedItems > 0 && iW.push(`${WW.droppedItems} dropped item${1===WW.droppedItems?" is":"s are"} on the ground nearby.`), iW.join("\n")
      }({
        game: null !== (iW = (0, tW.d)().gameNameWithVariation) && void 0 !== iW ? iW : null,
        position: EW,
        health: null !== (OW = wW.d.get("_health")) && void 0 !== OW ? OW : null,
        maxHealth: null !== (mW = wW.d.get("_totalMaxHealth")) && void 0 !== mW ? mW : null,
        creative: !0 === wW.d.get("creative"),
        heldSlot: xW,
        slots: ZW,
        nearby: WW.nearby(),
        droppedItems: WW.droppedItems()
      })
    }
  },
  42495: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      attachPlayGameSources: () => am,
      playGameSources: () => Im
    });
    var mW = OW(2037),
      EW = OW(42373),
      NW = OW(5533),
      PW = OW(42109),
      LW = OW(42479),
      cW = OW(40951),
      wW = OW(27),
      tW = OW(5551),
      ZW = OW(5546),
      xW = OW(42137),
      lW = OW(42174),
      AW = OW(42502),
      bW = OW(42149);
    (0, bW.j)(tW.uc.Chat, (WW => {
      if (WW.payloadKind !== ZW.hc.Msgpack) return;
      const iW = function(WW) {
        if (null === WW || "object" !== typeof WW || !("content" in WW)) return null;
        const {
          chatMsgId: iW,
          worldCodeLineId: OW,
          content: mW,
          chatterEId: EW,
          chatterObjectsToReplay: NW
        } = WW;
        return {
          serverChatMsgId: null !== iW && void 0 !== iW ? iW : void 0,
          worldCodeLineId: null !== OW && void 0 !== OW ? OW : void 0,
          content: mW,
          chatterEId: void 0 === EW || null === EW ? void 0 : String(EW),
          chatterObjectsToReplay: NW
        }
      }((0, xW.d)(WW.payload));
      null !== iW && wW.l.iZ("chat", iW, !0)
    })), (0, bW.j)(tW.uc.ChatRemoved, (WW => {
      if (WW.payloadKind === ZW.hc.Msgpack) {
        const {
          chatMsgId: iW
        } = (0, xW.d)(WW.payload);
        wW.l.iZ("chatRemoved", iW, !0)
      }
    }));
    const jW = {
        chatReceived: (0, cW.k)((function(WW) {
          var iW, OW, mW;
          return {
            id: WW,
            name: null !== (iW = AW.i.getName(WW)) && void 0 !== iW ? iW : null,
            local: (0, lW.g)() === WW,
            profileEffect: null !== (OW = null === (mW = (0, AW.m)(WW)) || void 0 === mW ? void 0 : mW.profileEffect) && void 0 !== OW ? OW : null
          }
        })),
        chatRemoved: cW.o
      },
      UW = {
        sendChatMessage(WW) {
          var iW, OW;
          let {
            tP: mW,
            channelName: EW
          } = WW;
          return null !== (iW = null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.clientApi.sendChat(mW, EW)) && void 0 !== iW && iW
        }
      };
    var kW = OW(182),
      sW = OW(2061),
      MW = OW(42094),
      KW = OW(40943);
    const SW = [0, 0, 0],
      YW = {
        codeBlockClickable(WW) {
          var iW;
          const OW = (0, PW.f)();
          if (null === OW || void 0 === OW || !OW.isSessionLive) return !1;
          const mW = OW.api;
          if (0 !== (MW.z.playerFlags(mW.apiView, 0) & MW.Ud.Crouching)) return !1;
          const EW = mW.queries.directorEntity(mW.localId) >= MW.zb.BYTES ? mW.memoryData(mW.scratch(), MW.zb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === EW) return !1;
          for (let NW = 0; NW < 3; NW++) SW[NW] = MW.zb.feet(EW, 0, NW);
          return SW[1] += MW.zb.eyeHeight(EW, 0), (0, KW.b)(SW, WW, null !== (iW = sW.d.get("blockReach")) && void 0 !== iW ? iW : kW.f.lU)
        }
      },
      yW = {
        clickCodeBlock(WW) {
          var iW;
          null === (iW = (0, PW.f)()) || void 0 === iW || iW.clickCodeBlock(WW)
        }
      };
    var TW = OW(42118),
      JW = OW(42508),
      hW = OW(1052),
      HW = OW(40242),
      nW = OW(5525),
      uW = OW(42131),
      oW = OW(42116),
      dW = OW(42134);

    function eW(WW) {
      if (null === WW) return null;
      const iW = [];
      for (const OW of WW) {
        const WW = Object.keys(OW)[0];
        if ("Ii" === WW) {
          const {
            str: WW,
            style: mW,
            clickableUrl: EW
          } = OW.Ii, NW = Object.keys(WW)[0], PW = WW[NW];
          "string" !== NW && "styledEntityName" !== NW && "styledTranslatedText" !== NW || iW.push({
            str: PW,
            style: mW,
            clickableUrl: EW
          })
        } else iW.push(OW[WW])
      }
      return iW
    }
    const vW = {
      screenPos(WW) {
        var iW, OW;
        return null !== (iW = null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.renderFrame.projectWorldPosToScreenPos(WW)) && void 0 !== iW ? iW : {
          x: 0,
          y: 0
        }
      }
    };
    let gW = !1;

    function DW() {
      gW || (gW = !0, (0, bW.j)(tW.uc.ProgressBarUpdate, (WW => {
        const iW = (0, dW.j)(WW);
        (0, dW.d)(iW) && wW.l.iZ("progressBarUpdate", iW, !0)
      })), (0, bW.j)(uW.v, (WW => {
        const iW = (0, dW.g)(uW.v, WW);
        iW && wW.l.iZ("middleScreenBarInitiate", {
          duration: iW.xN,
          lN: iW.lN,
          horizBarRemOffset: iW.bN
        }, !0)
      })), (0, bW.j)(tW.uc.RemoveMiddleScreenBar, (() => {
        wW.l.iZ("middleScreenBarRemove")
      })), (0, bW.j)(uW.hb, (WW => {
        const iW = (0, dW.g)(uW.hb, WW);
        if (iW) {
          var OW;
          const WW = iW.oi ? null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.renderFrame.projectDirectionToScreenPos(iW.oi) : void 0;
          wW.l.iZ("sendHitmarker", {
            ui: iW.ui,
            screenPos: WW
          }, !0)
        }
      })), (0, bW.j)(uW.mb, (WW => {
        const iW = (0, dW.g)(uW.mb, WW);
        if (iW) {
          const {
            id: WW,
            position: OW,
            style: mW,
            Gi: EW,
            zi: NW
          } = iW;
          wW.l.iZ("setDirectionArrow", {
            id: WW,
            position: OW,
            style: mW,
            text: eW(EW),
            zi: NW
          }, !0)
        }
      })), (0, bW.j)(uW.d, (WW => {
        const iW = (0, dW.g)(uW.d, WW);
        iW && wW.l.iZ("clearDirectionArrow", {
          id: iW.id
        }, !0)
      })), (0, bW.j)(uW.n, (WW => {
        const iW = (0, dW.g)(uW.n, WW);
        iW && wW.l.iZ("flyingMiddleMessage", {
          content: eW(iW.qN),
          RN: iW.RN,
          GN: iW.GN
        }, !0)
      })), (0, bW.j)(tW.uc.WorldVariation, (WW => {
        const iW = (0, dW.j)(WW);
        if ("string" === typeof iW) {
          const WW = iW === hW.e ? null : {
            message: `Currently loaded as variation: ${iW}`,
            type: "Warning"
          };
          wW.l.iZ("showPermanentBottomMessage", WW, !0)
        }
      })), (0, bW.j)(uW.J, (WW => {
        const iW = (0, dW.g)(uW.J, WW);
        iW && function(WW, iW) {
          const {
            type: OW,
            params: mW
          } = (0, HW.f)(iW), EW = {
            ...mW
          };
          for (const NW of HW.c) EW[NW] && (EW[NW] = eW(EW[NW]));
          nW.d.queueQTE(WW, OW, EW).getResult().then((iW => {
            var OW;
            "boolean" === typeof iW && (null === (OW = (0, PW.f)()) || void 0 === OW || OW.send(oW.e.QteResponse, {
              qteId: WW,
              qteResponse: iW
            }))
          }))
        }(iW.id, iW.jN)
      })), (0, bW.j)(uW.Y, (WW => {
        const iW = (0, dW.g)(uW.Y, WW);
        "number" === typeof iW && nW.d.cancelQTE(iW)
      })), (0, bW.e)((() => {
        nW.d.reset()
      })), (0, bW.i)((() => {
        nW.d.reset()
      })), (0, bW.j)(tW.uc.EditItemCraftingRecipes, (WW => {
        const iW = (0, dW.j)(WW);
        (0, dW.d)(iW) && wW.l.iZ("craftingRecipesEdited", {
          itemName: iW.craftingRecipeItemName,
          recipesForItem: iW.recipesForItem
        })
      })), (0, bW.j)(uW.V, (WW => {
        const iW = (0, dW.g)(uW.V, WW);
        iW && wW.l.iZ("craftingRecipesEdited", {
          itemName: iW.Oi,
          recipesForItem: []
        })
      })))
    }
    var VW = OW(25);
    const pW = [{
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

    function fW(WW) {
      return MW.z.playerFlags(WW.api.apiView, 0)
    }
    const CW = {
        freeCamera: (0, lW.e)((WW => () => {
          const iW = WW.isSessionLive && 0 !== (fW(WW) & MW.Ud.FreeCamMoves),
            OW = WW.freeCameraAllowed() && null === VW.d.get("scriptedCameraFacing");
          return pW[(OW ? 2 : 0) + (iW ? 1 : 0)]
        }), pW[0], (WW => (0, NW.v)(WW)))
      },
      XW = {
        setFreeCameraMovesFly: WW => {
          var iW;
          null === (iW = (0, PW.f)()) || void 0 === iW || iW.setFreeCameraMovesFly(WW)
        }
      },
      BW = {
        freeCameraPos: () => {
          const WW = (0, PW.f)();
          return null !== WW && void 0 !== WW && WW.isSessionLive && WW.renderFrame.hasView && 0 !== (fW(WW) & MW.Ud.FreeCam) ? WW.renderFrame.cameraPosition : null
        }
      };
    var qW = OW(40416);
    let RW = !1,
      GW = !1;

    function IW() {
      const WW = (0, PW.f)();
      if (null === WW || void 0 === WW || !WW.isSessionLive) return void(RW = !1);
      const iW = 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.FreeCam);
      iW !== RW && (RW = iW, (0, qW.e)(iW))
    }
    var aW = OW(344),
      rW = OW(38195),
      zW = OW(2072);
    var FW = OW(42513),
      QW = OW(42165);
    const Wi = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let ii = "off";

    function Oi(WW) {
      var iW;
      return null === WW ? null : {
        label: null !== (iW = (0, FW.c)(WW, "interactionPrompt")) && void 0 !== iW ? iW : null
      }
    }
    const mi = new Map([
      [MW.Jc.Open, {
        label: cW.h.open
      }],
      [MW.Jc.Close, {
        label: cW.h.close
      }],
      [MW.Jc.Milk, {
        label: cW.h.milk
      }],
      [MW.Jc.Shear, {
        label: cW.h.shear
      }],
      [MW.Jc.Tame, {
        label: cW.h.tame
      }],
      [MW.Jc.Feed, {
        label: cW.h.feed
      }],
      [MW.Jc.Ride, {
        label: cW.h.ride
      }]
    ]);
    class Ei {
      constructor() {
        this.target = Wi, this.NL = MW.nd, this.optionName = null, this.pickaxe = new cW.d
      }
      read(WW) {
        var iW;
        const OW = MW.z.targetBlockId(WW.api.apiView, 0);
        OW !== this.NL && (this.NL = OW, this.optionName = OW === MW.nd ? null : `${WW.tables.getMetaInfo(OW).rootName}CrosshairText`);
        const mW = null === this.optionName ? null : null !== (iW = WW.tables.getClientOption(this.optionName)) && void 0 !== iW ? iW : null;
        this.pickaxe.update(function(WW, iW) {
          var OW, mW, EW;
          if (0 === (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.Breaking) || iW === MW.nd || 0 === iW) return null;
          const {
            tables: NW
          } = WW;
          if (!0 === NW.getClientOption("creative")) return null;
          const PW = NW.nameOfId(iW),
            LW = null === (OW = WW.items.BL()) || void 0 === OW ? void 0 : OW.name,
            cW = null !== (mW = NW.getItemStat(PW, "harvestLevel")) && void 0 !== mW ? mW : 0;
          return (0, aW.uc)({
            blockHarvestType: NW.getDefaultItemStat(PW, "harvestType"),
            blockHarvestLevel: NW.getDefaultItemStat(PW, "harvestLevel"),
            harvestLevel: cW,
            heldToolType: void 0 === LW ? void 0 : NW.getDefaultItemStat(LW, "harvests"),
            heldToolLevel: void 0 === LW ? void 0 : NW.getDefaultItemStat(LW, "level")
          }) && null !== (EW = rW.p[cW]) && void 0 !== EW ? EW : null
        }(WW, OW)), WW.watchPromptPick(ii);
        const EW = "touch" === ii ? function(WW) {
          var iW;
          const OW = WW.interactLabel;
          return OW === MW.Jc.Entity ? Oi(WW.promptEntity) : OW === MW.Jc.TameWith ? {
            label: (0, cW.v)(WW.tables.nameOfId(WW.interactIcon))
          } : null !== (iW = mi.get(OW)) && void 0 !== iW ? iW : null
        }(WW) : Oi(WW.promptEntity);
        return this.target = (0, zW.t)(this.target, {
          interactPrompt: EW,
          blockText: mW,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Ni = null;
    const Pi = {
      current: () => {
        var WW, iW;
        return null !== (WW = null === (iW = Ni) || void 0 === iW ? void 0 : iW.target) && void 0 !== WW ? WW : Wi
      },
      watch: WW => {
        const iW = new Ei;
        Ni = iW;
        const OW = (0, lW.k)((OW => {
          let mW = iW.read(OW);
          WW(mW);
          const EW = (0, NW.x)((() => {
            const EW = iW.read(OW);
            EW !== mW && (mW = EW, WW(EW))
          }));
          return () => {
            EW(), OW.watchPromptPick("off")
          }
        }));
        return () => {
          OW(), Ni === iW && (Ni = null)
        }
      }
    };
    let Li = 0,
      ci = 0;
    const wi = {
        health: cW.r,
        aura: cW.i,
        hotbar: QW.c.states.hotbar,
        heldItemAim: QW.c.states.heldItemAim,
        crouching: (0, lW.e)((WW => function(WW) {
          const iW = () => 0 !== (MW.z.playerFlags(WW.apiView, 0) & MW.Ud.Crouching);
          return {
            current: iW,
            watch(WW) {
              let OW = iW();
              return (0, NW.v)((() => {
                const mW = iW();
                mW !== OW && (OW = mW, WW(mW))
              }))
            }
          }
        }(WW.api).current), !1, (WW => (0, NW.v)(WW))),
        flight: (0, lW.e)((WW => () => function(WW) {
          const iW = MW.z.playerFlags(WW.apiView, 0);
          return (0, cW.p)(0 !== (iW & MW.Ud.CanFly), 0 !== (iW & MW.Ud.Flying))
        }(WW.api)), (0, cW.p)(!1, !1), (WW => (0, NW.v)(WW))),
        gliderBoostFuel: (0, lW.e)((WW => () => MW.z.gliderBoostFuel(WW.api.apiView, 0)), 0, (WW => (0, NW.v)(WW))),
        crosshairTarget: Pi
      },
      ti = {
        hotbarSlotRequested: QW.c.events.hotbarSlotRequested,
        hotbarScrolled: QW.c.events.hotbarScrolled,
        numberKeyPressed: QW.c.events.numberKeyPressed,
        shotDamageToShow: (0, cW.t)((WW => !0 === (0, FW.c)(WW, "showDamageAmounts")))
      },
      Zi = {
        selectHotbarSlot: QW.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: WW => {
          ii = WW
        }
      },
      xi = {
        momentumFrac: function() {
          var WW, iW, OW;
          const mW = (0, PW.f)(),
            EW = performance.now(),
            NW = null === mW || void 0 === mW || null === (WW = mW.items.BL()) || void 0 === WW || null === (iW = WW.attributes) || void 0 === iW || null === (OW = iW.customAttributes) || void 0 === OW ? void 0 : OW.enchantments;
          return Li = null !== mW && null !== NW && void 0 !== NW && NW.Momentum ? 0 !== (MW.z.playerFlags(mW.api.apiView, 0) & MW.Ud.Breaking) ? Math.max(0, MW.z.momentumFrac(mW.api.apiView, 0)) : Math.max(0, Li - (EW - ci) / 1500) : 0, ci = EW, Li
        }
      };
    var li = OW(42103);
    const Ai = {
      lobbyManage(WW) {
        var iW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LobbyManage, WW)
      }
    };
    var bi = OW(1230),
      ji = OW(37735),
      Ui = OW(10027),
      ki = OW(1729),
      si = OW(3305),
      Mi = OW(5560);
    let Ki = !1;

    function Si(WW) {
      Ki = WW
    }

    function Yi() {
      "inGame" !== VW.d.get("gameState") || (0, ki.m)() || wW.l.iZ("ctrlCrouchWithoutFullscreen")
    }
    let yi = !1;
    const Ti = {
        OpenEmoteWheel: () => {
          Si(!0), yi = !0, queueMicrotask((() => {
            yi && (yi = !1, wW.l.iZ("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          wW.l.iZ("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, ji.e)() || wW.l.iZ("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, ji.e)() || wW.l.iZ("XKeyPressed")
        },
        CtrlCrouch: Yi,
        "primary-fire": () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      Ji = {
        OpenEmoteWheel: () => {
          Si(!1), yi ? (yi = !1, (0, Ui.d)() || wW.l.iZ("requestEmoteWheelHoldOpen")) : wW.l.iZ("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Yi,
        "primary-fire": () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          wW.l.iZ("mouseState", {
            IL: bi.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Hi = !1;

    function ni() {
      Hi || (Hi = !0, (0, Mi.g)((WW => {
        if ((0, EW.d)()) return;
        const iW = (0, Mi.f)(WW) ? "primary-fire" : WW.action;
        var OW;
        if (WW.down) {
          if (0 === (WW.flags & si.e.Synthetic)) {
            var mW;
            null === (mW = Ti[iW]) || void 0 === mW || mW.call(Ti)
          }
        } else null === (OW = Ji[iW]) || void 0 === OW || OW.call(Ji)
      })))
    }
    var ui = OW(327),
      oi = OW(100),
      di = OW(39),
      ei = OW(42394),
      vi = OW(1351),
      gi = OW(3323);
    let Di = !1;
    const Vi = {
      sendCodeCollab(WW) {
        var iW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CodeCollab, (0, oW.r)(WW), (0, gi.h)(WW))
      }
    };
    var fi = OW(40305),
      Ci = OW(9957);
    let Xi = null,
      Bi = !1,
      qi = null;

    function Ri() {
      return "inGame" === VW.d.get("gameState") && !(0, ji.e)()
    }
    const Gi = {
        OpenInventory: WW => {
          (0, ki.t)(WW, "inventory", (0, li.h)())
        },
        OpenShop: WW => {
          Xi && Ri() && (0, ki.s)(WW, ui.m.SHOP, !Xi.shopIsEmpty(sW.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: WW => {
          var iW, OW;
          Ri() && (0, ki.x)(WW, (0, fi.d)({
            lobbyLeaderboardInfo: sW.d.get("lobbyLeaderboardInfo"),
            lobbyManage: sW.d.get("lobbyManage")
          }), null !== (iW = null === (OW = Xi) || void 0 === OW ? void 0 : OW.getClientGameLeaderboardKey()) && void 0 !== iW ? iW : null)
        },
        OpenTasksAndLeaderboard: WW => {
          var iW;
          const OW = null === (iW = Xi) || void 0 === iW ? void 0 : iW.getClientGameMapKey();
          OW ? (0, ki.A)(WW, !0, OW) : (0, ki.t)(WW, "retentionFeatures", !(!sW.d.get("_tasks") && !sW.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: WW => {
          (0, ki.t)(WW, "inviteLink", oi.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: WW => {
          Ri() && function(WW) {
            const iW = (0, PW.f)(),
              OW = null !== iW && void 0 !== iW && iW.isSessionLive ? iW.api : null,
              mW = OW ? OW.Vk(OW.localId) : null;
            (0, ki.A)(WW, null !== mW && (0, gi.d)((0, vi.d)()), (() => {
              (0, gi.i)(mW)
            }))
          }(WW)
        },
        HideUi: () => {
          wW.l.iZ("showUi", !1)
        }
      },
      Ii = {
        HideUi: () => {
          wW.l.iZ("showUi", !0)
        }
      };

    function ai() {
      Bi || (Bi = !0, OW.e(183).then((() => OW(64355))).then((WW => {
        Xi = WW
      }), (WW => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", WW)
      })), (0, ei.z)((WW => {
        WW || !(0, ei.i)() || (0, oi.isMobile)() || !di.i.getItem("disableFullscreen") || (0, ki.l)() || VW.d.set({
          openEverythingMenuName: ui.m.SETTINGS
        })
      })), (0, Mi.g)((WW => {
        let {
          action: iW,
          down: OW,
          press: mW
        } = WW;
        var NW, PW;
        (0, EW.d)() || (OW ? null === (NW = Gi[iW]) || void 0 === NW || NW.call(Gi, function(WW) {
          var iW;
          if (0 === WW || (null === (iW = qi) || void 0 === iW ? void 0 : iW.press) !== WW) {
            const iW = {
              press: WW,
              event: (0, Ci.e)("inputAction")
            };
            qi = iW, queueMicrotask((() => {
              qi === iW && (qi = null)
            }))
          }
          return qi.event
        }(mW)) : null === (PW = Ii[iW]) || void 0 === PW || PW.call(Ii))
      })))
    }
    var ri = OW(40229),
      zi = OW(40216),
      Fi = OW(40213);
    const Qi = {
      completeTask(WW) {
        var iW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CompleteTask, (0, oW.s)(WW))
      },
      setServerCookie(WW) {
        var iW;
        let {
          key: OW,
          value: mW
        } = WW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.GeneralCookieSet, (0, oW.A)({
          bt: OW,
          jt: mW
        }))
      },
      answerUiRequest(WW) {
        var iW;
        let {
          id: OW,
          ct: mW
        } = WW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResp, (0, oW.V)({
          jP: OW,
          UP: mW,
          kP: 5
        }))
      },
      chooseRewardedAd(WW) {
        var iW;
        let {
          id: OW,
          ct: mW
        } = WW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResponded, (0, oW.U)({
          id: OW,
          ct: mW
        }))
      },
      requestLeaderboard(WW) {
        var iW;
        let {
          category: OW,
          timeframe: mW,
          seeTop: EW
        } = WW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LeaderboardRequest, {
          category: OW,
          timeframe: mW,
          seeTop: EW
        })
      }
    };
    let WO = !1;
    const iO = kW.f.tU / 2,
      OO = [iO, -iO, -iO, -iO, iO, iO, -iO, iO],
      mO = [0, 0, 0];

    function EO(WW, iW, OW) {
      for (let mW = 0; mW < WW.length; mW += 2)
        if (WW[mW] === iW && WW[mW + 1] === OW) return !0;
      return !1
    }
    const NO = {
      blocksStandingOn: function() {
        const WW = (0, PW.f)();
        if (null === WW) return [];
        const {
          api: iW,
          chunks: OW,
          tables: mW
        } = WW;
        if (!iW.readPosition(iW.localId, mO)) return [];
        const [EW, NW, LW] = mO, cW = Math.ceil(NW) - 1, wW = [], tW = [];
        for (let PW = 0; PW < OO.length; PW += 2) {
          const WW = EW + OO[PW],
            iW = LW + OO[PW + 1];
          if (Number.isInteger(WW) || Number.isInteger(iW)) continue;
          const NW = Math.floor(WW),
            ZW = Math.floor(iW);
          if (EO(tW, NW, ZW)) continue;
          const xW = OW.NL(NW, cW, ZW);
          mW.isSolidBlockId(xW) && (tW.push(NW, ZW), wW.push(mW.nameOfId(xW)))
        }
        return wW
      },
      dropAhead: function() {
        const WW = (0, PW.f)();
        return null !== WW && 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.DropAhead)
      }
    };
    var PO = OW(38107),
      LO = OW(40287),
      cO = OW(1422),
      wO = OW(42176);
    const tO = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      ZO = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function xO() {
      const WW = new Set;
      return {
        add: iW => (WW.add(iW), () => {
          WW.delete(iW)
        }),
        fire() {
          for (const iW of WW) iW()
        }
      }
    }
    const lO = Object.freeze([]);

    function AO(WW, iW) {
      let OW, {
        rereads: mW,
        followLocalId: EW
      } = iW;
      const PW = () => (OW = (0, zW.t)(OW, WW()), OW);
      return {
        current: PW,
        watch(WW) {
          const iW = (0, AW.e)((iW => {
            mW(iW) && WW(PW())
          }));
          if (!EW) return iW;
          let OW = (0, lW.g)();
          const LW = (0, NW.x)((() => {
            const iW = (0, lW.g)();
            iW !== OW && (OW = iW, WW(PW()))
          }));
          return () => {
            iW(), LW()
          }
        }
      }
    }
    const bO = {
        players: AO((function() {
          const WW = AW.i.ids(),
            iW = {};
          for (const NW of WW) {
            var OW, mW, EW;
            iW[NW] = {
              name: null !== (OW = AW.i.getName(NW)) && void 0 !== OW ? OW : null,
              ranks: null !== (mW = AW.i.getSetting(NW, "ranks")) && void 0 !== mW ? mW : lO,
              cosmetics: null !== (EW = (0, AW.m)(NW)) && void 0 !== EW ? EW : null
            }
          }
          return {
            ids: WW,
            byId: iW,
            localId: (0, lW.g)()
          }
        }), {
          rereads: WW => "roster" !== WW.kind || WW.members || WW.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: AO((function() {
          const WW = {};
          for (const EW of AW.i.ids()) {
            var iW, OW, mW;
            WW[EW] = {
              colour: null !== (iW = AW.i.getSetting(EW, "colorInLobbyLeaderboard")) && void 0 !== iW ? iW : null,
              values: null !== (OW = AW.i.getSetting(EW, "lobbyLeaderboardValues")) && void 0 !== OW ? OW : null,
              tags: null !== (mW = AW.i.getSetting(EW, "lobbyLeaderboardTags")) && void 0 !== mW ? mW : null
            }
          }
          return WW
        }), {
          rereads: function(WW) {
            if ("roster" !== WW.kind) return "reset" === WW.kind;
            const {
              members: iW,
              settings: OW
            } = WW;
            return iW || OW.has("colorInLobbyLeaderboard") || OW.has("lobbyLeaderboardValues") || OW.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      jO = {
        cosmeticsUpdated: {
          watch: WW => (0, AW.e)((iW => {
            if ("cosmetics" !== iW.kind) return;
            const OW = (0, lW.g)();
            WW(iW.updates.map((WW => {
              let {
                EE: iW,
                NE: mW,
                PE: EW
              } = WW;
              return {
                local: iW === OW,
                NE: mW,
                PE: EW
              }
            })))
          }))
        }
      };
    var UO = OW(3960),
      kO = OW(1856),
      sO = OW(683),
      MO = OW(42432);
    let KO = !1,
      SO = null;
    const YO = {
      setShopOpen(WW) {
        var iW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ShopMenuChanged, (0, oW.P)(WW))
      },
      buyShopItem(WW) {
        var iW;
        let {
          categoryKey: OW,
          itemKey: mW,
          userInput: EW
        } = WW;
        null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ItemBought, {
          categoryKey: OW,
          itemKey: mW,
          shopVersion: sW.d.get("_shopVersion"),
          userInput: EW
        })
      }
    };
    let yO = !1;
    var TO = OW(5575);
    const JO = si.y.LookFrozen | si.y.ClicksSuppressed;

    function hO(WW, iW) {
      var OW;
      null !== (OW = (0, PW.f)()) && void 0 !== OW && OW.send(WW, iW) || console.warn(`[bloxd-wasm-client] message ${WW} not sent: no live game or the core's command ring is full`)
    }(0, bW.j)(uW.pb, (WW => {
      const iW = (0, dW.g)(uW.pb, WW);
      void 0 !== iW && wW.l.iZ("setDiscordReportKey", iW)
    }));
    const HO = {
      ignorePlayer(WW) {
        hO(oW.e.IgnoreUser, (0, oW.B)({
          Nt: WW
        }))
      },
      reportPlayer(WW) {
        let {
          playerId: iW,
          chatMsgId: OW,
          contextChatMsgIds: mW,
          policy: EW,
          details: NW
        } = WW;
        hO(oW.e.UserReport, (0, oW.gb)({
          et: iW,
          vt: OW,
          policy: EW,
          PL: NW,
          gt: mW
        }))
      },
      reportWorldCodeChat(WW) {
        let {
          chatMsgId: iW,
          policy: OW,
          details: mW
        } = WW;
        hO(oW.e.UserReport, (0, oW.gb)({
          et: "",
          vt: iW,
          policy: OW,
          PL: mW,
          gt: []
        }))
      },
      requestDiscordReportKey(WW) {
        hO(oW.e.ReqDiscordReportKey, (0, oW.L)(WW))
      },
      reportLobbyOrGame(WW) {
        let {
          target: iW,
          policy: OW,
          details: mW
        } = WW;
        "customGame" === iW ? hO(oW.e.CustomGameReport, (0, oW.w)({
          policy: OW,
          PL: mW
        })) : hO(oW.e.LobbyReport, (0, oW.E)({
          policy: OW,
          PL: mW
        }))
      },
      updateMyCosmetic(WW) {
        hO(oW.e.UpdateMyCosmetic, (0, oW.db)(WW))
      },
      holdEmoteWheel(WW) {
        !WW || Ki ? (0, TO.j)(JO, WW ? JO : 0) : wW.l.iZ("requestEmoteWheelHoldRelease")
      }
    };
    var nO = OW(42519),
      uO = OW(5725),
      oO = OW(40960);
    const dO = [0, 0, 0],
      eO = [0, 0, 0],
      vO = [0, 0, 0],
      gO = {
        blockAtViewPoint(WW) {
          let {
            x: iW,
            y: OW
          } = WW;
          const mW = (0, PW.f)();
          if (null === mW || void 0 === mW || !mW.renderFrame.hasView) return null;
          const {
            renderFrame: EW,
            clientApi: NW,
            api: LW
          } = mW;
          let cW = 0;
          return (0, oO.h)(((WW, iW, OW) => (cW = NW.getBlockId(WW, iW, OW), 0 !== cW)), EW.cameraPosition, (0, oO.k)((WW => MW.z.viewProj(LW.apiView, 0, WW)), iW, OW, dO), oO.d, eO, vO) ? {
            pos: [eO[0], eO[1], eO[2]],
            normal: [vO[0], vO[1], vO[2]],
            name: (0, uO.f)(cW)
          } : null
        }
      },
      DO = {
        setBlockHighlight(WW) {
          var iW;
          null === (iW = (0, PW.f)()) || void 0 === iW || iW.setBlockHighlight(WW)
        }
      };
    var VO = OW(2047),
      pO = OW(42427),
      fO = OW(42528),
      CO = OW(2077),
      XO = OW(37640),
      BO = OW(232);
    const qO = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      RO = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * qO.fallbackRem,
        asked: new Set
      },
      GO = 2e3,
      IO = 4;
    let aO = [],
      rO = !1,
      zO = !1,
      FO = !1;
    const QO = new Set,
      Wm = [];
    let im = 0,
      Om = null;

    function mm() {
      return rO && (0, XO.f)()
    }

    function Em() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.gameBridge.latest("inventory");
      if (FO && !zO) {
        for (const OW of WW.player) {
          var iW;
          if (null !== OW) Nm(null !== (iW = OW.icon) && void 0 !== iW ? iW : OW.name, qO)
        }
        for (const WW of [...MW.P, ...aO]) Nm(WW, RO);
        Lm()
      }
    }

    function Nm(WW, iW) {
      iW.asked.has(WW) || QO.has(WW) || ("model" === mW.gameBridge.lookup("itemIcon", WW).kind ? (iW.asked.add(WW), Wm.push({
        name: WW,
        slot: iW
      })) : QO.add(WW))
    }

    function Pm(WW) {
      aO = WW, Em()
    }

    function Lm() {
      !FO || zO || null !== Om || 0 === Wm.length || im >= IO || (Om = (0, BO.d)((() => {
        Om = null;
        const WW = Wm.shift();
        void 0 !== WW && FO && (im++, async function(WW, iW) {
          var OW, EW;
          if (await (0, XO.h)(), !FO) return void iW.asked.delete(WW);
          if (!(0, XO.f)()) return void(zO = !0);
          const NW = window.devicePixelRatio,
            PW = null !== (OW = null === (EW = document.querySelector(iW.icon)) || void 0 === EW ? void 0 : EW.getBoundingClientRect().width) && void 0 !== OW ? OW : 0,
            LW = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            cW = Math.round((PW > 0 ? PW : iW.fallbackRem * LW) * NW);
          try {
            await mW.gameBridge.query("blockIcon", {
              name: WW,
              size: cW,
              lineWidth: (0, CO.d)(NW)
            }) || iW.asked.delete(WW)
          } catch {
            iW.asked.delete(WW)
          }
        }(WW.name, WW.slot).finally((() => {
          im--, Lm()
        })), Lm())
      }), {
        timeoutMs: GO
      }))
    }
    var cm = OW(5199),
      wm = OW(5178),
      tm = OW(42533),
      Zm = OW(4454),
      xm = OW(4459);
    let lm = null,
      Am = null;

    function bm(WW) {
      const iW = WW.startsWith(xm.k),
        [OW, mW = OW, EW = OW] = (iW ? WW.slice(xm.k.length) : WW).split(xm.i);
      return {
        top: OW,
        left: mW,
        right: EW,
        half: iW
      }
    }

    function jm(WW) {
      const iW = null === lm ? void 0 : (0, Zm.b)(WW),
        OW = void 0 === iW ? 0 : lm.codes[iW];
      return 0 === OW ? void 0 : lm.pool[OW - 1]
    }
    var Um = OW(4448),
      km = OW(5166),
      sm = OW(5195),
      Mm = OW(37436),
      Km = OW(37441);
    const Sm = "item:";
    let Ym = null,
      ym = null,
      Tm = null,
      Jm = null,
      hm = !1,
      Hm = !1;

    function nm() {
      return Hm || (Hm = !0, (0, sm.n)().then((WW => {
        WW && (0, VO.b)()
      }))), Tm ??= Promise.all([(0, Um.f)(), (Am ??= OW.e(1).then((() => OW(64378))).then((WW => {
        let {
          BLOCK_FACE_RUNS: iW,
          BLOCK_FACES: OW,
          MAX_FACE_ITEM_ID: mW
        } = WW;
        lm = {
          codes: (0, xm.y)(iW, mW + 1),
          pool: OW.split(xm.s).map(bm)
        }
      }), (WW => {
        throw Am = null, WW
      })), Am), (0, Km.d)(), OW.e(224).then((() => OW(35231)))]).then((WW => {
        let [, , iW, OW] = WW;
        iW.followBundledTextures(), Ym = iW, ym = OW, (0, VO.b)()
      }), (WW => {
        Tm = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", WW)
      })), Tm
    }

    function um(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.itemSpriteUrl(WW)
    }

    function om(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.blockTextureUrl(WW)
    }

    function dm(WW) {
      var iW;
      return null !== (iW = (0, Um.b)(WW)) && void 0 !== iW ? iW : WW
    }

    function em(WW, iW) {
      var OW, mW, EW;
      return null !== (OW = null !== (mW = null !== (EW = om(WW)) && void 0 !== EW ? EW : null === iW || void 0 === iW ? void 0 : iW.rotated[WW]) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.animated[WW]) && void 0 !== OW ? OW : Ym.notFoundUrl()
    }

    function gm(WW) {
      return void 0 !== (0, Zm.b)(WW) ? WW : /^[1-9][0-9]*$/.test(WW) ? (0, Zm.d)(Number(WW)) : void 0
    }

    function Dm(WW) {
      var iW;
      if (WW.startsWith(Sm)) {
        var OW;
        const iW = (0, Um.b)(WW.slice(5));
        return null !== (OW = void 0 === iW ? null : um(iW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
      }
      return null !== (iW = Ym.particleUrl(WW)) && void 0 !== iW ? iW : Ym.notFoundUrl()
    }

    function Vm(WW, iW) {
      return "StairsBlock" === WW ? WW : iW ? "SlabBlock" : "CubeBlock"
    }
    const pm = {
        async blockIcon(WW) {
          var iW;
          let {
            name: mW,
            size: EW,
            lineWidth: NW
          } = WW;
          await nm();
          const PW = null !== (iW = gm(mW)) && void 0 !== iW ? iW : mW,
            LW = (0, sm.e)(PW, EW, NW);
          if (null !== LW) return LW;
          const cW = jm(PW),
            wW = (0, Zm.b)(PW),
            tW = void 0 === wW || null === ym ? void 0 : ym.itemTypeNameOf(wW);
          if (null === Ym || void 0 === cW) return "";
          const ZW = [cW.top, cW.left, cW.right].some((WW => null === om(WW))),
            xW = ZW ? await (Jm ??= OW.e(234).then((() => OW(35332))).then((WW => (hm && (hm = !1, (0, VO.b)()), {
              rotated: WW.rotatedBlockTextures,
              animated: WW.animatedBlockTextures
            })), (WW => (Jm = null, hm = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", WW), null))), Jm) : null;
          if (ZW && null === xW) return "";
          const lW = {
              top: em(cW.top, xW),
              left: em(cW.left, xW),
              right: em(cW.right, xW),
              itemType: Vm(tW, cW.half)
            },
            AW = (0, Mm.d)(),
            bW = 0 === AW ? PW : `${PW}#${AW}`;
          return (await (0, km.e)()).drawBlockIconUrl(bW, EW, NW, (() => lW))
        }
      },
      fm = {
        itemIcon: function(WW) {
          var iW, OW, EW, NW;
          if (null === Ym) return nm(), mW.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          if ((0, wm.h)(WW)) return {
            kind: "icon",
            url: null !== (OW = null !== (EW = null === (NW = (0, Mm.f)()) || void 0 === NW ? void 0 : NW.textureUrl(WW)) && void 0 !== EW ? EW : Ym.ingameIconUrl(WW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
          };
          if (WW.startsWith(wm.d)) return {
            kind: "icon",
            url: Dm(WW.slice(wm.d.length))
          };
          if (0 === (0, Zm.f)()) return (0, tm.e)(), mW.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
          const PW = null !== (iW = gm(WW)) && void 0 !== iW ? iW : WW,
            LW = (0, Zm.b)(PW),
            cW = void 0 === LW ? void 0 : ym.itemTypeNameOf(LW);
          if (void 0 !== jm(PW)) return {
            kind: "drawnBlock"
          };
          const wW = function(WW) {
            var iW;
            return null !== (iW = um(dm(WW))) && void 0 !== iW ? iW : Ym.notFoundUrl()
          }(PW);
          if ((0, sm.k)(PW) && ! function(WW) {
              const iW = (0, Mm.f)();
              return null !== iW && (null !== iW.textureUrl(dm(WW)) || (0, sm.d)(WW).some((WW => null !== iW.modelUrl(WW))))
            }(PW)) return {
            kind: "model",
            url: wW,
            drawn: (0, sm.h)(PW)
          };
          if ("Gun" === cW) return {
            kind: "gun",
            url: wW
          };
          if (void 0 !== LW && "GrayscaleArmour" === ym.itemTypeOf(LW) || Object.hasOwn(cm.b, PW)) {
            var tW;
            const iW = null !== (tW = (0, cm.c)(WW)) && void 0 !== tW ? tW : (0, cm.c)(PW);
            if (iW) return {
              kind: "item",
              url: wW,
              tint: iW
            }
          }
          return {
            kind: "item",
            url: wW
          }
        },
        hasIcon: function(WW) {
          return void 0 !== gm(WW) || (0, wm.h)(WW) || WW.startsWith(wm.d)
        },
        isItemName: function(WW) {
          return void 0 !== gm(WW)
        }
      };

    function Cm() {
      (0, mW.installPageSources)({
        commands: {
          ...mW.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: pO.m,
          prewarmCreativeIcons: Pm
        },
        queries: pm,
        lookups: {
          ...mW.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...fm,
          YM: pO.f,
          drawCallStats: fO.f,
          iconsDrawAhead: mm
        }
      }), (0, VO.b)(), nm(), rO || (rO = !0, wW.l.subscribe("gameJoined", (() => {
        var WW;
        FO = !1, null === (WW = Om) || void 0 === WW || WW(), Om = null;
        for (const {
            name: iW,
            slot: OW
          }
          of Wm.splice(0)) OW.asked.delete(iW)
      })), wW.l.subscribe("gamePlayable", (() => {
        FO = !0, Em()
      })), mW.gameBridge.subscribe("inventory", Em), mW.gameBridge.subscribe("itemIconsVersion", (() => {
        QO.clear(), Em()
      })))
    }
    var Xm = OW(632),
      Bm = OW(40969);

    function qm(WW) {
      if (null === WW || void 0 === WW || !WW.isCoreRunning) return null;
      const {
        api: iW,
        chunks: OW,
        items: mW,
        tables: EW
      } = WW;
      return {
        playerFeet() {
          const WW = iW.Vk(iW.localId);
          return null !== WW && void 0 !== WW && WW.every(Number.isFinite) ? WW : null
        },
        chunkBlocks: WW => OW.isLoaded(WW[0], WW[1], WW[2]) ? (WW, iW, mW) => OW.NL(WW, iW, mW) : null,
        blockName: WW => EW.nameOfId(WW),
        inventory: () => ({
          slots: mW.playerItems().map((WW => WW ? {
            name: WW.name,
            amount: WW.amount
          } : null)),
          heldSlot: mW.selectedSlot
        }),
        nearby() {
          const OW = [];
          for (let EW = 0; EW < iW.idStr.length; EW++) {
            var mW;
            const NW = iW.idStr[EW],
              PW = iW.serverIds[EW],
              LW = iW.kinds[EW];
            if (null === NW || iW.isLocal(PW) || LW >>> MW.e !== MW.v.Lifeform) continue;
            const cW = iW.Vk(PW),
              wW = Xm.i[LW & MW.g];
            cW && void 0 !== wW && OW.push({
              kind: "Player" === wW ? "player" : wW,
              name: null !== (mW = WW.clientApi.getEntityName(NW)) && void 0 !== mW ? mW : null,
              position: cW
            })
          }
          return OW
        },
        droppedItems() {
          let WW = 0;
          for (let OW = 0; OW < iW.idStr.length; OW++) null !== iW.idStr[OW] && iW.kinds[OW] >>> MW.e === MW.v.Item && WW++;
          return WW
        }
      }
    }
    const Rm = {
        worldCodeAiChunk: WW => Promise.resolve((0, Bm.d)(qm((0, PW.f)()), WW)),
        worldCodeAiGameState: () => Promise.resolve((0, Bm.e)(qm((0, PW.f)())))
      },
      Gm = function(WW) {
        const iW = xO(),
          mW = xO(),
          EW = new Set,
          NW = new Set,
          PW = () => {
            var iW, OW;
            return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.currentViewer) && void 0 !== iW ? iW : null
          };
        let LW = null,
          cW = null;
        const tW = (WW, iW) => ({
            current: WW,
            watch(OW) {
              let mW = WW();
              return iW.add((() => {
                const iW = WW();
                iW !== mW && (mW = iW, OW(iW))
              }))
            }
          }),
          xW = WW => ({
            watch: iW => (WW.add(iW), () => {
              WW.delete(iW)
            })
          }),
          lW = WW => {
            const iW = PW(),
              OW = null === iW || void 0 === iW ? void 0 : iW.view;
            iW && OW && iW.seek(Math.max(0, Math.min(OW.totalTicks - 1, OW.hZ + WW * ZW.Jd)))
          },
          AW = {
            replay: tW((() => {
              var WW;
              const iW = PW(),
                OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
              return null === iW || null === OW || OW.state === ZW.td.None ? (LW = null, null) : (LW = (0, zW.t)(LW, {
                id: iW.id,
                hZ: OW.hZ,
                totalTicks: OW.totalTicks,
                Fv: ZW.Jd,
                playing: OW.state === ZW.td.Playing,
                speed: OW.speed,
                cameraMode: OW.cameraMode,
                freecam: "freecam" === OW.cameraMode
              }), LW)
            }), iW),
            replayEdits: tW((() => {
              var WW;
              const iW = PW(),
                OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
              return null === iW || null === OW || OW.state === ZW.td.None ? (cW = null, null) : (cW = (0, zW.t)(cW, {
                cameraKeyframes: [...iW.keyframes],
                playbackMark: OW.mark,
                fileName: iW.fileName,
                unsavedChanges: iW.unsavedChanges,
                suggestSaveAs: iW.suggestSaveAs
              }), cW)
            }), iW),
            replayRecorder: tW((() => {
              var iW, OW;
              return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.recorder.current) && void 0 !== iW ? iW : wO.c.states.replayRecorder.current()
            }), mW),
            replayVideoExporting: {
              current: LO.b,
              watch: WW => (0, wW.n)("replayViewer|videoExportChanged", (() => {
                WW((0, LO.b)())
              }))
            }
          },
          bW = {
            replayUiActionRequested: xW(NW),
            replayViewerRequested: xW(EW)
          },
          jW = WW => {
            for (const iW of EW) iW(WW)
          },
          UW = () => {
            var mW;
            !0 === (null === (mW = PW()) || void 0 === mW ? void 0 : mW.isOpen) && Promise.all([OW.e(113), OW.e(79)]).then((() => OW(64363))).then((OW => {
              let {
                startWasmReplayVideoExport: mW
              } = OW;
              return mW({
                viewer: PW,
                canvas: () => {
                  var iW, OW;
                  return null !== (iW = null === (OW = WW.canvas) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
                },
                watchViewer: iW.add,
                requestViewer: jW
              })
            }), (WW => {
              console.error("Couldn't load the video export", WW), cO.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((WW => {
              console.error("The video export failed", WW)
            }))
          },
          kW = {
            replayAction(WW) {
              if ((0, LO.b)()) return;
              const iW = PW();
              switch (WW) {
                case "replaySkipBack":
                  lW(-1);
                  break;
                case "replaySkipForward":
                  lW(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== iW && void 0 !== iW && iW.view && iW.setSpeed((0, PO.k)(iW.view.speed, "replaySpeedUp" === WW ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === iW || void 0 === iW || iW.addKeyframe()
              }
            },
            setReplayPlaying(WW) {
              var iW, OW;
              (0, LO.b)() || (WW ? null === (iW = PW()) || void 0 === iW || iW.play() : null === (OW = PW()) || void 0 === OW || OW.pause())
            },
            seekReplay(WW) {
              var iW;
              let {
                hZ: OW,
                ignorePlaybackMark: mW
              } = WW;
              null === (iW = PW()) || void 0 === iW || iW.seek(OW, null !== mW && void 0 !== mW && mW)
            },
            setReplayCameraMode(WW) {
              var iW;
              null === (iW = PW()) || void 0 === iW || iW.setCameraMode(WW)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(WW) {
              var iW;
              null === (iW = PW()) || void 0 === iW || iW.setKeyframe(WW)
            },
            moveReplayCameraKeyframe(WW) {
              var iW;
              let {
                from: OW,
                to: mW
              } = WW;
              null === (iW = PW()) || void 0 === iW || iW.moveKeyframe(OW, mW)
            },
            deleteReplayCameraKeyframes(WW) {
              var iW;
              let {
                start: OW,
                end: mW
              } = WW;
              null === (iW = PW()) || void 0 === iW || iW.deleteKeyframes(OW, mW)
            },
            setReplayPlaybackMark(WW) {
              var iW;
              null === (iW = PW()) || void 0 === iW || iW.setMark(WW)
            },
            cropReplay(WW) {
              var iW, OW;
              let {
                start: mW,
                end: EW
              } = WW;
              return !(0, LO.b)() && (null !== (iW = null === (OW = PW()) || void 0 === OW ? void 0 : OW.crop(mW, EW)) && void 0 !== iW && iW)
            },
            holdReplayForShaderPackFailure(WW) {
              const iW = PW();
              iW && (iW.holdForShaderPackFailure(), function(WW) {
                OW.e(138).then((() => OW(40448))).then((iW => {
                  let {
                    shaderPackPage: OW
                  } = iW;
                  OW.block(WW)
                })).catch((WW => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", WW)
                }))
              }(WW))
            },
            exportReplayVideo() {
              UW()
            },
            toggleRecording() {
              var iW;
              null === (iW = WW.runtime()) || void 0 === iW || iW.recorder.toggleRecording()
            },
            saveClip() {
              var iW;
              null === (iW = WW.runtime()) || void 0 === iW || iW.recorder.saveClip()
            },
            setRecorderPrefs(iW) {
              var OW;
              let {
                clipping: mW,
                clipSeconds: EW
              } = iW;
              null === (OW = WW.runtime()) || void 0 === OW || OW.recorder.setPrefs(mW, EW)
            },
            setReplayViewerOpen(iW) {
              var OW;
              (0, ji.g)(iW) && (null === (OW = WW.runtime()) || void 0 === OW || OW.recorder.viewerShown(iW))
            },
            recordFlyingMiddleText(iW) {
              var OW;
              let {
                content: mW,
                RN: EW,
                angle: NW,
                GN: PW
              } = iW;
              null === (OW = WW.runtime()) || void 0 === OW || OW.recorder.recordFlyingText(JSON.stringify(mW), EW, NW, PW)
            },
            dragReplayCamera(iW) {
              var OW;
              let {
                dx: mW,
                dy: EW
              } = iW;
              null === (OW = WW.freecam()) || void 0 === OW || OW.drag(mW, EW)
            },
            moveReplayFreecam(iW) {
              var OW;
              null === (OW = WW.freecam()) || void 0 === OW || OW.move(iW)
            },
            holdReplayFreecamVertical(iW) {
              var OW;
              let {
                action: mW,
                BL: EW
              } = iW;
              null === (OW = WW.freecam()) || void 0 === OW || OW.holdVertical(mW, EW)
            }
          },
          sW = WW => {
            var iW;
            const OW = PW(),
              mW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.view) && void 0 !== iW ? iW : null;
            tO.has(WW) ? (WW => {
              for (const iW of NW) iW(WW)
            })(WW) : ZO.has(WW) ? kW.replayAction(WW) : "replayPlayPause" === WW ? OW && mW && mW.state !== ZW.td.None && kW.setReplayPlaying(mW.state !== ZW.td.Playing) : "replayChangeCameraMode" === WW ? null === OW || void 0 === OW || OW.cycleCameraMode() : "replayExit" === WW ? !0 === (null === OW || void 0 === OW ? void 0 : OW.inPlayback) && (0, vi.k)("/") : "replayExportVideo" === WW && UW()
          };
        let MW = !1;
        return {
          states: AW,
          events: bW,
          commands: kW,
          lookups: {
            replayCamera() {
              var iW, OW, mW;
              return !0 !== (null === (iW = PW()) || void 0 === iW ? void 0 : iW.isOpen) ? null : null !== (OW = null === (mW = WW.cameraView) || void 0 === mW ? void 0 : mW.call(WW)) && void 0 !== OW ? OW : null
            },
            leaveGameReloadsPage() {
              var WW;
              return !0 === (null === (WW = PW()) || void 0 === WW ? void 0 : WW.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var WW;
              const OW = !0 === (null === (WW = PW()) || void 0 === WW ? void 0 : WW.inPlayback);
              OW !== MW && (MW = OW, wW.l.iZ("connectedGameChanged")), iW.fire()
            },
            recorderChanged: mW.fire,
            keyDown: WW => {
              var iW;
              switch (WW) {
                case "recordGame":
                  return void kW.toggleRecording();
                case "recordClip":
                  return void((0, ji.e)() || kW.saveClip())
              }(0, LO.b)() || ("replayViewerOpen" !== WW ? WW.startsWith("replay") && ((0, ji.e)() || !0 === (null === (iW = PW()) || void 0 === iW ? void 0 : iW.inPlayback)) && sW(WW) : jW("toggle"))
            }
          }
        }
      }({
        runtime: EW.n,
        cameraView: () => {
          var WW;
          const iW = null === (WW = (0, PW.f)()) || void 0 === WW ? void 0 : WW.renderFrame;
          if (!iW) return null;
          const [OW, mW, EW] = iW.cameraPosition, [NW, LW, cW] = iW.cameraDirection;
          return {
            position: [OW, mW, EW],
            direction: [NW, LW, cW]
          }
        },
        canvas: () => {
          var WW, iW, OW;
          return null !== (WW = null === (iW = (OW = (0, NW.K)()).canvas) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : null
        },
        freecam: EW.j
      }),
      Im = {
        states: {
          ...wi,
          ...li.f,
          ...Gm.states,
          ...bO,
          ...CW
        },
        events: {
          ...ti,
          ...jW,
          ...li.d,
          ...JW.b,
          ...nO.k,
          ...Gm.events,
          ...jO,
          ...TW.k
        },
        commands: {
          ...yW,
          ...Zi,
          ...UW,
          ...li.b,
          ...Qi,
          ...HO,
          ...TW.g,
          ...Vi,
          ...Gm.commands,
          ...YO,
          ...XW,
          ...DO,
          ...Ai
        },
        queries: {
          ...li.e,
          ...Rm
        },
        lookups: {
          ...xi,
          ...vW,
          ...nO.l,
          ...Gm.lookups,
          ...YW,
          ...NO,
          ...gO,
          ...BW
        }
      };

    function am() {
      (0, LW.e)(bW.k), (0, EW.q)(Gm.feed), (0, JW.c)(), WO || (WO = !0, (0, bW.j)(uW.g, (WW => {
        const iW = (0, dW.g)(uW.g, WW);
        "string" === typeof iW && Promise.resolve().then((() => OW(4866))).then((WW => {
          let {
            onCosmeticPackGranted: OW
          } = WW;
          OW(iW)
        }))
      })), (0, bW.j)(uW.kb, (WW => {
        const iW = (0, dW.g)(uW.kb, WW);
        "number" === typeof iW && wW.l.iZ("serverUpdating", Date.now() + iW, !0)
      })), (0, bW.j)(uW.F, (WW => {
        const iW = (0, dW.g)(uW.F, WW);
        if ((0, dW.d)(iW)) {
          const {
            cN: WW,
            wN: OW
          } = iW;
          (0, zi.d)({
            cN: "string" === typeof WW ? WW : null,
            wN: "string" === typeof OW ? OW : null
          })
        }
      })), (0, bW.j)(tW.uc.NewUiRequest, (WW => {
        const iW = (0, dW.j)(WW);
        (0, dW.d)(iW) && "number" === typeof iW.id && (0, dW.d)(iW.clientParameters) && (0, Fi.f)(iW.id, iW.clientParameters)
      })), (0, bW.j)(uW.ab, (WW => {
        const iW = (0, dW.g)(uW.ab, WW);
        "number" === typeof iW && (0, Fi.h)(iW)
      })), (0, bW.i)(Fi.c), (0, bW.j)(tW.uc.UiRequestPopup, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW) && "number" === typeof iW.id && ("string" === typeof iW.text || (0, dW.d)(iW.text) && "string" === typeof iW.text.translationKey)) {
          const WW = iW.id;
          (0, Fi.j)(WW, iW.text, !0 === iW.destructive, (iW => {
            Qi.answerUiRequest({
              id: WW,
              ct: iW
            })
          }))
        }
      })), (0, bW.j)(tW.uc.TopRightHelper, (WW => {
        const iW = (0, dW.j)(WW);
        void 0 !== iW && wW.l.iZ("TopRightHelper", iW, !0)
      })), (0, bW.j)(tW.uc.TaskProgress, (WW => {
        const iW = (0, dW.j)(WW);
        (0, dW.d)(iW) && "string" === typeof iW.taskId && "number" === typeof iW.progress && (0, ri.d)({
          taskId: iW.taskId,
          progress: iW.progress
        })
      }))), yO || (yO = !0, (0, bW.j)(uW.o, (WW => {
        const iW = (0, dW.g)(uW.o, WW);
        (0, dW.d)(iW) && wW.l.iZ("showShopFromServer", {
          toggle: iW.Hi,
          ni: iW.ni
        }, !0)
      })), (0, bW.j)(tW.uc.OverShopInfo, (WW => {
        const iW = (0, dW.j)(WW);
        (0, dW.d)(iW) && wW.l.iZ("overShopInfo", iW.info, !0)
      })), (0, bW.j)(tW.uc.ShowShopTutorial, (() => {
        wW.l.iZ("showShopTutorial", null, !0)
      }))), KO || (KO = !0, (0, bW.e)((() => {
        var WW;
        (0, UO.resetLeaveEvents)(), null === (WW = SO) || void 0 === WW || WW(), SO = (0, bW.c)() ? (0, sO.onVisitSessionGameServerConnected)(bW.c) : null, (0, bW.c)() || wW.l.pU()
      })), (0, bW.j)(tW.uc.SetCookie, (WW => {
        const iW = (0, dW.j)(WW),
          OW = (0, vi.d)().gameNameWithVariation;
        (0, dW.d)(iW) && "string" === typeof iW.key && null !== OW && (0, kO.setCookie)(OW, iW.key, iW.value)
      })), (0, bW.j)(tW.uc.LeaveValues, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW) && "string" === typeof iW.leaveEventType) {
          const {
            leaveEventType: WW,
            category: OW,
            subCategory: mW,
            value: EW
          } = iW;
          (0, UO.updateLeaveValue)({
            leaveEventType: WW,
            category: OW,
            subCategory: mW,
            value: EW
          })
        }
      })), (0, bW.j)(tW.uc.CustomAnalyticsEvent, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW) && "string" === typeof iW.cat1) {
          const {
            cat1: WW,
            cat2: OW,
            cat3: mW,
            value: EW
          } = iW;
          (0, UO.logCustomAnalyticsEvent)({
            cat1: WW,
            cat2: OW,
            cat3: mW,
            value: EW
          })
        }
      })), (0, bW.j)(tW.uc.ProgressionEvent, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW)) {
          const {
            type: WW,
            location1: OW,
            location2: mW,
            location3: EW,
            score: NW
          } = iW;
          (0, UO.logProgressionEvent)({
            type: WW,
            location1: OW,
            location2: mW,
            location3: EW,
            score: NW
          })
        }
      })), (0, bW.j)(tW.uc.ResourceEvent, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW)) {
          const {
            type: WW,
            resourceType: OW,
            amount: mW,
            category: EW,
            itemName: NW
          } = iW;
          (0, UO.logResourceEvent)({
            type: WW,
            resourceType: OW,
            amount: mW,
            category: EW,
            itemName: NW
          })
        }
      })), (0, bW.j)(tW.uc.LeaderboardResponse, (WW => {
        const iW = (0, dW.j)(WW);
        if ((0, dW.d)(iW)) {
          const {
            category: WW,
            timeframe: OW,
            data: mW
          } = iW;
          wW.l.iZ("leaderboardResponse", {
            category: WW,
            timeframe: OW,
            data: mW
          })
        }
      })), (0, bW.j)(uW.z, (WW => {
        const iW = (0, dW.g)(uW.z, WW);
        "string" === typeof iW && (0, MO.b)(WW.conn, iW)
      })), (0, bW.j)(uW.C, (WW => {
        const iW = (0, dW.g)(uW.C, WW);
        "string" === typeof iW && console.error(`[logErrorToConsole]: ${iW}`)
      }))), DW(), (0, nO.c)(), Di || (Di = !0, (0, bW.j)(uW.f, (WW => {
        const iW = (0, dW.g)(uW.f, WW);
        void 0 !== iW && (0, gi.k)(iW)
      }))), ai(), ni(), GW || (GW = !0, (0, NW.v)(IW)), mW.gameBridge.attach(Im), Cm()
    }
  },
  37441: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => LW
    });
    var mW = OW(37444);
    let EW = null,
      NW = null;

    function PW() {
      return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
        throw EW = null, WW
      })), EW
    }

    function LW() {
      return NW ??= Promise.all([PW(), (0, mW.e)()]).then((WW => {
        let [iW] = WW;
        return iW
      }), (WW => {
        throw NW = null, WW
      })), NW
    }
  },
  37646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = {
      wait: function(WW) {
        return new Promise((iW => {
          setTimeout(iW, WW)
        }))
      },
      stallMs: 2e4
    };
    class EW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mW;
        this.url = WW, this.options = iW, this.timing = OW, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = WW
      }
      ready() {
        if (null === this.fetched) {
          const WW = new AbortController;
          this.fetchAbort = WW, this.fetched = this.fetchWithRetries(WW.signal).then((iW => (this.fetchAbort === WW && (this.fetchAbort = null), iW)))
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
      async fetchWithRetries(WW) {
        for (let iW = 0;; iW++) {
          const OW = new URL(this.url);
          if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
          if (iW >= 3 || WW.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** iW), WW.aborted) return !1
        }
      }
      async fetchWhole(WW, iW) {
        const OW = new AbortController;
        let mW;
        const EW = () => {
            clearTimeout(mW), mW = setTimeout((() => {
              OW.abort()
            }), this.timing.stallMs)
          },
          NW = () => {
            OW.abort()
          };
        iW.addEventListener("abort", NW, {
          once: !0
        }), EW();
        try {
          var PW;
          const iW = await fetch(WW, {
            signal: OW.signal
          });
          if (!iW.ok) return !1;
          const mW = null === (PW = iW.body) || void 0 === PW ? void 0 : PW.getReader();
          if (!mW) return !1;
          for (;;) {
            const {
              done: WW
            } = await mW.read();
            if (WW) return !0;
            EW()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(mW), iW.removeEventListener("abort", NW)
        }
      }
    }
  },
  38214: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = {
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
  40242: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      f: () => EW
    });
    const mW = ["description", "label"];

    function EW(WW) {
      const iW = WW.type;
      return {
        type: iW,
        params: WW[iW]
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);