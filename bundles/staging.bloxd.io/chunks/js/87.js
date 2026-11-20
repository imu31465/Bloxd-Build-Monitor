export const id = 87;
export const ids = [87];
export const modules = {
  38385: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      f: () => Sb,
      j: () => ab,
      l: () => Hb,
      n: () => Yb,
      r: () => Lb
    });
    const Bb = "A valid external Instance reference no longer exists.",
      Ob = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      Gb = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Ub = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Lb(bb, ub) {
      return bb ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(bb) {
        var ub;
        const hb = null !== (ub = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(bb)) && void 0 !== ub ? ub : /failed with ([A-Z][A-Z0-9_]+)/.exec(bb);
        return hb ? hb[1] : bb.includes(Bb) ? "gpu_process_lost" : "other"
      }(ub)
    }

    function Yb(bb) {
      return `${(null===bb||void 0===bb?void 0:bb.vendor)||"unknown vendor"} ${(null===bb||void 0===bb?void 0:bb.architecture)||"unknown architecture"}`
    }

    function Sb(bb) {
      return wb(bb)[1]
    }

    function ab(bb) {
      return wb(bb)[2]
    }

    function Hb(bb) {
      return Zb(Gb, bb)[1]
    }

    function wb(bb) {
      return Zb(Ob, bb)
    }

    function Zb(bb, ub) {
      var hb;
      return null !== (hb = bb.find((bb => {
        let [hb] = bb;
        return ub < hb
      }))) && void 0 !== hb ? hb : bb[bb.length - 1]
    }
  },
  38699: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Ob
    });
    const Bb = 45e3;
    class Ob extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35920: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      f: () => Ob,
      g: () => Gb,
      i: () => Ub
    });
    const Bb = 1024,
      Ob = 1024 * Bb;

    function Gb(bb) {
      return 2 ** Math.floor(Math.log2(Math.max(1, bb / Ob)))
    }

    function Ub(bb) {
      return (bb / Ob).toFixed(1)
    }
  },
  36095: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      g: () => Lb,
      k: () => Ub,
      l: () => Yb,
      m: () => Sb,
      q: () => ab
    });
    var Bb = hb(191);
    const Ob = 32 * hb(35920).f,
      Gb = 6144,
      Ub = 4608,
      Lb = 512;

    function Yb(bb) {
      return Math.floor(Ob * bb / Gb)
    }

    function Sb(bb) {
      const ub = bb - Math.floor(bb / 6);
      let hb = Bb.e.maxChunkHorizAddDistance,
        Ob = Bb.e.maxChunkVertAddDistance;
      if (ab(hb + 1, Ob + 1) <= ub) return null;
      for (; ab(hb + 1, Ob + 1) > ub && (hb > 0 || Ob > 0);) hb > Ob ? hb-- : Ob--;
      return {
        horizontal: hb,
        vertical: Ob
      }
    }

    function ab(bb, ub) {
      const hb = Math.max(bb, ub);
      let Bb = 0;
      for (let Ob = -hb; Ob <= hb; Ob++)
        for (let Gb = -hb; Gb <= hb; Gb++)
          for (let Ub = -hb; Ub <= hb; Ub++) Hb(bb, ub, Ob, Gb, Ub) && Bb++;
      return Bb
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      const Gb = hb * hb + Ob * Ob;
      return bb === ub ? Gb + Bb * Bb <= bb * bb : bb > ub ? Math.abs(Bb) <= ub && Gb + Bb * Bb <= bb * bb : Gb <= bb * bb && Gb + Bb * Bb <= ub * ub
    }
  },
  40293: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Gb,
      k: () => Lb,
      m: () => ab,
      o: () => Yb,
      r: () => Ub
    });
    var Bb = hb(191);
    const Ob = 3e3,
      Gb = 15e3;

    function Ub(bb) {
      const ub = bb.endsWith(Bb.i);
      return {
        text: (ub ? bb.slice(0, -Bb.i.length) : bb) || null,
        dropsCache: ub
      }
    }
    const Lb = "Either your internet isn't working or this is a bug.";

    function Yb(bb, ub) {
      const hb = ab(bb);
      return null !== hb.name && "" === Bb.d[hb.name].text && null !== ub ? ub : hb.reason
    }
    const Sb = "You were removed from the game.";

    function ab(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Ob = null !== (ub = Object.keys(Bb.d).find((ub => Bb.d[ub].code === bb))) && void 0 !== ub ? ub : null;
      if (null === Ob) return {
        code: bb,
        name: Ob,
        reason: null !== hb && void 0 !== hb ? hb : `${Lb}\nCode: ${bb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Gb,
        canReconnect: Ub = !1
      } = Bb.d[Ob], Yb = bb === Bb.d.outdatedVersion.code || bb === Bb.d.loadRecaptchaError.code;
      return {
        code: bb,
        name: Ob,
        reason: "" !== Gb ? Gb : null !== hb && void 0 !== hb ? hb : bb === Bb.d.gameOrPluginKick.code ? Sb : `Code: ${bb}`,
        canReconnect: Ub,
        automaticallyReconnect: bb === Bb.d.customGameUpdated.code || bb === Bb.d.duplicateLobbyNameError.code,
        requiresRefresh: Yb
      }
    }
  },
  4555: (bb, ub, hb) => {
    hb.d(ub, {
      $c: () => Bb.Vb,
      A: () => Ub,
      Ab: () => Bb.L,
      Bb: () => Ob.e,
      Cb: () => jb,
      Cc: () => Bb.vb,
      Cd: () => qb,
      D: () => vb,
      Db: () => sb,
      E: () => Zu,
      Fb: () => gb,
      Fc: () => Bb.xb,
      Gd: () => Fb,
      H: () => cb,
      Hc: () => Bb.Ab,
      I: () => Bb.f,
      Ib: () => xb,
      Jc: () => Qb,
      Jd: () => Vb,
      Kc: () => Bb.Eb,
      Ld: () => Lu,
      M: () => Sb,
      Mb: () => Bb.Q,
      Mc: () => Bb.Gb,
      Md: () => pu,
      N: () => Bb.i,
      Nd: () => Wb,
      Oc: () => Bb.Kb,
      Od: () => fb,
      Pb: () => ib,
      Pc: () => Bb.Mb,
      Q: () => Rb,
      Qb: () => Cb,
      Rd: () => eb,
      S: () => Bb.l,
      Tc: () => Bb.Qb,
      Td: () => Jb,
      U: () => kb,
      Ub: () => Uu,
      Ud: () => tb,
      V: () => Bb.r,
      Vb: () => Kb,
      Vd: () => Yb,
      W: () => Bb.s,
      Xc: () => Bb.Tb,
      Xd: () => Nb,
      Y: () => Bb.v,
      Yc: () => Db,
      Zb: () => Hu,
      _: () => Hb,
      _d: () => ou,
      ab: () => lb,
      bb: () => Bb.x,
      bc: () => Ob.j,
      c: () => uu,
      ce: () => Zb,
      d: () => pb,
      dd: () => Bb.Wb,
      eb: () => Bb.B,
      ec: () => Ab,
      ed: () => Bb.cc,
      fb: () => Ib,
      h: () => Xb,
      hc: () => Bu,
      hd: () => Gb,
      jb: () => Gu,
      k: () => Su,
      kb: () => ab,
      lc: () => Bb.ab,
      ld: () => ob,
      mb: () => Bb.C,
      n: () => nb,
      nc: () => Bb.eb,
      o: () => rb,
      oc: () => Bb.fb,
      od: () => Yu,
      q: () => Bb.b,
      qb: () => Eb,
      qc: () => Bb.hb,
      qd: () => mb,
      s: () => wu,
      tb: () => Tb,
      tc: () => Bb.ib,
      td: () => Pb,
      uc: () => Bb.sb,
      vc: () => Xu,
      vd: () => Mb,
      w: () => zb,
      wb: () => Bb.H,
      wc: () => au,
      xd: () => yb,
      yb: () => bu,
      zb: () => hu,
      zc: () => Ou
    });
    var Bb = hb(4564),
      Ob = hb(2273);
    const Gb = Math.round(1e3 / Bb.cc),
      Ub = 4,
      Lb = 2;

    function Yb() {
      return crypto.getRandomValues(new Uint32Array(Lb))
    }
    const Sb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      ab = 16,
      Hb = {
        Draws: 1,
        NetAll: 2
      },
      wb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Zb(bb) {
      return (bb.nametagsHidden ? db.NametagsHidden : 0) | (bb.crouchToggle ? db.CrouchToggle : 0) | (bb.bhopDisabled ? db.BhopDisabled : 0) | (bb.disableBobbing ? db.DisableBobbing : 0) | (bb.ezTowering ? db.EzTowering : 0) | (bb.ezBridging ? db.EzBridging : 0) | (bb.showChunkBorders ? db.ShowChunkBorders : 0)
    }
    const Xb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ob = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Ab = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      lb = 5,
      Kb = 4294967295;

    function Wb(bb) {
      return (bb.showFog ? wb.ShowFog : 0) | (bb.lighting ? wb.Lighting : 0) | (bb.chunkFade ? wb.ChunkFade : 0)
    }
    const Cb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      db = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      rb = {
        Release: 1,
        KeepTouches: 2
      },
      jb = {
        Point: 1,
        Stamped: 2
      },
      nb = {
        Add: 1,
        Clear: 2
      },
      Db = 1,
      xb = 8,
      zb = 16777215,
      gb = 4,
      ib = {
        Resume: 1
      },
      vb = {
        Held: 1
      };

    function tb(bb, ub) {
      return (bb | ub << 8) >>> 0
    }

    function Jb(bb) {
      return 255 & bb
    }

    function eb(bb) {
      return bb >>> 8
    }

    function Nb(bb) {
      return bb + 3 & -4
    }
    const sb = 16777216,
      Mb = 20;
    const mb = 8,
      Ib = 8,
      Pb = 16777216,
      qb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Eb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      yb = 16,
      Vb = {
        Lost: 0,
        Gone: 1
      },
      Fb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function fb(bb) {
      return bb === Fb.WorldgenSeed || bb === Fb.Generate
    }
    const kb = 4,
      Tb = 99,
      cb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Rb = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      bu = 12,
      uu = 16,
      hu = 4,
      Bu = 12,
      Ou = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Gu = 4,
      Uu = 8,
      Lu = 8,
      Yu = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Su = {
        Crit: 1,
        HitSelf: 2
      },
      au = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Hu = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      wu = 12,
      Zu = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xu = 67108864;

    function pu(bb) {
      for (const [ub, hb] of Object.entries(Bb.f))
        if (hb === bb) return ub;
      return `Unknown${bb}`
    }

    function ou(bb) {
      return {
        status: bb[Bb.B.Status],
        lastError: bb[Bb.B.LastError],
        lastErrorDetail: bb[Bb.B.LastErrorDetail],
        errorCount: bb[Bb.B.ErrorCount],
        frameIndex: bb[Bb.B.FrameIndex],
        tickIndex: bb[Bb.B.TickIndex],
        renderPending: bb[Bb.B.RenderPending],
        firstView: bb[Bb.B.FirstView],
        chunksCancelled: bb[Bb.B.ChunksCancelled]
      }
    }
  },
  40095: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      e: () => Hb,
      h: () => Lb,
      l: () => Gb,
      m: () => Ob,
      q: () => Yb,
      t: () => ab
    });
    class Bb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ob(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function Gb(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Ub = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Lb(bb) {
      var ub;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof Bb || Ob(bb) && Ub.test(null !== (ub = bb.stack) && void 0 !== ub ? ub : "")
    }

    function Yb(bb, ub) {
      if (Lb(bb)) throw bb;
      console.error(ub, bb)
    }

    function Sb(bb, ub, hb, Ob, Gb) {
      if (ub % Ob !== 0 || ub + hb > bb.byteLength) throw new Bb(`${Gb}: ${hb} bytes at ${ub}, ${Ob}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function ab(bb, ub, hb, Bb, Ob) {
      return 0 === hb ? null : (Sb(ub, hb, Bb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Ob), new bb(ub, hb, Bb))
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      return 0 === ub ? null : (Sb(bb, ub, hb, Bb, Ob), new DataView(bb, ub, hb))
    }
  },
  40421: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    const Bb = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  40372: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Xb,
      e: () => pb,
      g: () => wb,
      h: () => Hb
    });
    const Bb = 2e3,
      Ob = "unavailable";
    let Gb = () => Promise.resolve().then((() => hb(2745))),
      Ub = null,
      Lb = null,
      Yb = Sb();

    function Sb() {
      let bb = () => {};
      return {
        promise: new Promise((ub => {
          bb = () => {
            ub(null)
          }
        })),
        resolve: bb
      }
    }

    function ab() {
      if (null === Ub) {
        const bb = Gb();
        Ub = bb, bb.then((ub => {
          Ub === bb && (Lb = ub)
        }), (() => {
          Ub === bb && (Ub = null)
        }))
      }
      return Ub
    }

    function Hb() {
      ab().catch((() => {}))
    }

    function wb() {
      Yb.resolve()
    }

    function Zb(bb, ub, hb, Bb) {
      if (null === bb) return {
        errorKind: ub,
        fingerprint: Ob,
        dedupe: `${ub}|${Bb}`
      };
      const {
        fingerprint: Gb
      } = bb.clientErrorKey(ub, hb, Bb);
      return {
        errorKind: ub,
        fingerprint: Gb,
        dedupe: Gb
      }
    }

    function Xb(bb, ub, hb, Bb) {
      return null === Lb ? Bb ? (Hb(), Zb(null, bb, ub, hb)) : null : Zb(Lb, bb, ub, hb)
    }
    async function pb(bb, ub, hb) {
      let Ob;
      const Gb = new Promise((bb => {
        Ob = setTimeout((() => {
          bb(null)
        }), Bb)
      }));
      try {
        return Zb(await Promise.race([ab(), Gb, Yb.promise]), bb, ub, hb)
      } catch {
        return Zb(null, bb, ub, hb)
      } finally {
        clearTimeout(Ob)
      }
    }
  },
  40369: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BUILT_IN_ANIMATIONS_SITE: () => yb,
      CORE_ERRORS_SITE: () => Jb,
      EVENT_OVERFLOW_SITE: () => Eb,
      FIRST_VIEW_SITE: () => Fb,
      JOIN_SITE: () => Nb,
      LEAVE_SITE: () => sb,
      MAIN_THREAD_SITE: () => fb,
      MODEL_FEED_SITE: () => Mb,
      MODEL_POOL_SITE: () => mb,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Tb,
      NON_FATAL_REPORTS_PER_SESSION: () => wu,
      PREVIEW_ANIMATIONS_SITE: () => qb,
      RENDER_RELOAD_SITE: () => Pb,
      TEXTURE_NAMES_SITE: () => Ib,
      TEXTURE_PACK_FEED_SITE: () => Vb,
      TurnstilePageError: () => qu,
      WASM_LOAD_SITE: () => eb,
      crashError: () => Au,
      crashReportsSettled: () => ru,
      flushCrashReports: () => Cu,
      joinFailureCode: () => Eu,
      lokiTransport: () => Rb,
      modelFailureCode: () => cu,
      readTrap: () => zu,
      renderLossDetail: () => oh,
      renderReloadMessage: () => Xh,
      reportCoreErrors: () => nu,
      reportCountedLoadFallback: () => Iu,
      reportCrash: () => lu,
      reportDataLoadFailure: () => Ch,
      reportDisconnect: () => ku,
      reportDracoDecoderFailure: () => uh,
      reportEventOverflow: () => Oh,
      reportFirstViewNoTerrain: () => Sh,
      reportGpuFallback: () => Mu,
      reportGpuWasmPopulation: () => mu,
      reportLightFault: () => Uh,
      reportMainStall: () => ah,
      reportMemoryShed: () => Yh,
      reportModelFailure: () => Qu,
      reportModelPoolFailure: () => Ru,
      reportModelsModuleRetry: () => bh,
      reportPageJoinFailure: () => Vu,
      reportReconnectGaveUp: () => Tu,
      reportRenderReload: () => lh,
      reportReplayFault: () => wh,
      reportStaleBuildReload: () => rh,
      reportStoppedCore: () => tu,
      reportTerrainTextureFailure: () => Kh,
      reportTexturePackFeedLoadFailure: () => Bh,
      reportUnstreamedCoreLoad: () => Pu,
      reportUnsupportedFallback: () => Nu,
      reportUnusedSeat: () => fu,
      reportWorkerLost: () => Gh,
      reportWorkerStartTimeout: () => Hh,
      reportWorldgenGaveUp: () => Lh,
      reportWorldgenLoadFailure: () => hh,
      resetCrashReports: () => ju,
      setCrashBackend: () => Uu,
      setCrashScreen: () => Ou,
      setCrashTransport: () => hu,
      showCrash: () => vu,
      showJoinFailure: () => yu,
      showUnsupported: () => eu
    });
    var Bb = hb(981),
      Ob = hb(263),
      Gb = hb(2752),
      Ub = hb(40372),
      Lb = hb(4555),
      Yb = hb(40378),
      Sb = hb(3256),
      ab = hb(38385),
      Hb = hb(115),
      wb = hb(645),
      Zb = hb(113),
      Xb = hb(3259),
      pb = hb(38699),
      ob = hb(1672),
      Ab = hb(40351),
      lb = hb(40049),
      Kb = hb(40301),
      Wb = hb(40305),
      Cb = hb(38743),
      db = hb(2683),
      rb = hb(2688),
      jb = hb(40385),
      nb = hb(40407),
      Db = hb(40413),
      xb = hb(36489),
      zb = hb(3028),
      gb = hb(35912),
      ib = hb(40230),
      vb = hb(35925);
    const tb = "[bloxd-wasm-client]",
      Jb = "coreErrors",
      eb = "wasmLoad",
      Nb = "join",
      sb = "leave",
      Mb = "modelFeed",
      mb = "modelWorkerPool",
      Ib = "textureNames",
      Pb = "renderReload",
      qb = "previewAnimations",
      Eb = "eventOverflow",
      yb = "builtInAnimations",
      Vb = "texturePackFeed",
      Fb = "firstView",
      fb = "mainThread",
      kb = 300,
      Tb = 8;
    let cb = 0;
    const Qb = new Set,
      Rb = (bb, ub) => {
        const hb = Lu[bb.kind];
        if (null === hb) return void bu(bb, ub, Gu, null);
        const Bb = (0, Ub.d)(hb, bb.message, bb.code, bb.fatal);
        if (null !== Bb) return void bu(bb, ub, Gu, Bb);
        const Ob = Gu;
        Wu("Loki", (async () => {
          bu(bb, ub, Ob, await (0, Ub.e)(hb, bb.message, bb.code))
        }))
      };

    function bu(bb, ub, hb, Ob) {
      const {
        kind: Ub,
        code: Lb,
        site: Yb,
        fatal: Sb,
        details: ab
      } = bb;
      if (!Sb)
        if (null === Ob || (0, Gb.d)(Ob.errorKind) || Qb.has(Ob.dedupe)) {
          if (cb >= Tb) return;
          cb++
        } else Qb.add(Ob.dedupe);
      const Hb = {
        ...ab,
        kind: Ub,
        code: Lb,
        site: Yb,
        fatal: String(Sb),
        backend: hb
      };
      null !== Ob && (Hb.errorKind = Ob.errorKind, Hb.fingerprint = Ob.fingerprint), ub instanceof Error && "string" === typeof ub.stack && (Hb.causeStack = ub.stack.slice(0, 2e3)), (0, Bb.cX)(Au(bb, ub), Hb)
    }
    let uu = Rb;

    function hu(bb) {
      const ub = uu;
      return uu = bb, ub
    }
    let Bu = () => {};

    function Ou(bb) {
      const ub = Bu;
      return Bu = bb, ub
    }
    let Gu = "unpicked";

    function Uu(bb) {
      Gu = bb
    }
    const Lu = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: "wasm_load",
        gpuFallback: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        noTerrain: null,
        mainStall: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load"
      },
      Yu = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load"
      },
      Su = new Set(["unstreamedLoad"]),
      au = new Set(["linkCensus"]);
    let Hu = !1;
    const wu = 20,
      Zu = new Map;
    let Xu = 0,
      pu = 0;
    const ou = new Set;

    function Au(bb, ub) {
      const hb = Object.assign(new Error(`${bb.code}: ${bb.message}`), {
        name: "WasmClientCrash",
        cause: null !== ub && void 0 !== ub ? ub : void 0
      });
      return ub instanceof Error && ub.stack && (hb.stack = ub.stack), hb
    }

    function lu(bb) {
      var ub, Bb;
      const {
        kind: Ob,
        code: Gb,
        site: Ub,
        fatal: Lb,
        message: Yb,
        error: Sb
      } = bb, ab = !1 !== bb.toTransport && !Su.has(Ob), Hb = !Lb && ab && !au.has(Ob), wb = {
        kind: Ob,
        code: Gb,
        site: Ub,
        fatal: Lb,
        message: Yb,
        details: null !== (ub = bb.details) && void 0 !== ub ? ub : {}
      }, Zb = `${Gb}@${Ub}${void 0===bb.instance?"":`#${bb.instance}`}${Lb?"!":""}`, Xb = (null !== (Bb = Zu.get(Zb)) && void 0 !== Bb ? Bb : 0) + 1;
      if (Zu.set(Zb, Xb), Xb > 1 ? 0 === (Xb & Xb - 1) && Ku((() => {
          console.warn(`${tb} ${Gb} at ${Ub} reported ${Xb} times`)
        })) : Hb && Xu >= wu ? Ku((() => {
          console.warn(`${tb} ${Ob} ${Gb} at ${Ub}: ${Yb} (not sent: the session's ${wu} went)`, wb.details, null !== Sb && void 0 !== Sb ? Sb : "")
        })) : (Hb && Xu++, function(bb, ub, Bb) {
          var Ob, Gb;
          const {
            kind: Ub,
            code: Lb,
            site: Yb,
            fatal: Sb,
            message: ab,
            details: Hb
          } = bb;
          Ku((() => {
            (Sb ? console.error : console.warn)(`${tb} ${Ub} ${Lb} at ${Yb}: ${ab}`, Hb, null !== ub && void 0 !== ub ? ub : "")
          }));
          const wb = Yu[Ub],
            Zb = null !== (Ob = null !== (Gb = Lu[Ub]) && void 0 !== Gb ? Gb : wb) && void 0 !== Ob ? Ob : null;
          null !== Zb && Wu("counts", (async () => {
            const {
              peekVisitSessionId: bb
            } = await Promise.resolve().then((() => hb(612)));
            if (null !== bb()) {
              const {
                reportCappedWasmFailure: bb,
                reportUncappedWasmFailure: ub,
                reportWasmFailure: Bb
              } = await hb.e(208).then((() => hb(35906)));
              (au.has(Ub) ? ub : void 0 === wb ? Bb : bb)(Zb, ab, Lb), Hu = !0
            }
          }));
          Bb && Ku((() => {
            uu(bb, ub)
          }))
        }(wb, Sb, ab)), Lb) {
        var pb;
        const ub = null !== (pb = bb.screen) && void 0 !== pb ? pb : {
          text: (0, xb.f)(wb, !0),
          reload: !0
        };
        Ku((() => {
          Bu(ub)
        }))
      }
      return wb
    }

    function Ku(bb) {
      try {
        bb()
      } catch (ub) {
        try {
          console.warn(`${tb} could not send a report`, ub)
        } catch {}
      }
    }

    function Wu(bb, ub) {
      try {
        const hb = ub().catch((ub => {
          console.warn(`${tb} could not send the report to ${bb}`, ub)
        })).finally((() => {
          ou.delete(hb)
        }));
        ou.add(hb)
      } catch (hb) {
        console.warn(`${tb} could not send the report to ${bb}`, hb)
      }
    }
    async function Cu(bb) {
      let ub;
      (0, Ub.g)();
      const hb = new Promise((hb => {
        ub = setTimeout(hb, bb)
      }));
      await Promise.race([du(), hb]), clearTimeout(ub)
    }
    async function du() {
      if (await Promise.allSettled([...ou]), Hu) try {
        const {
          flushClientAnalyticsEvents: bb
        } = await Promise.resolve().then((() => hb(1392)));
        await bb()
      } catch (bb) {
        console.warn(`${tb} could not send the counts`, bb)
      }
    }
    async function ru() {
      for (; ou.size > 0;) await Promise.allSettled([...ou])
    }

    function ju() {
      Zu.clear(), Xu = 0, Hu = !1, cb = 0, Qb.clear(), pu = 0, (0, Yb.k)()
    }

    function nu(bb, ub, hb, Bb) {
      pu += ub;
      for (const {
          code: Sb,
          detail: ab
        }
        of bb) {
        var Ob, Gb, Ub;
        const bb = (0, Lb.Md)(Sb),
          ub = (0, Yb.c)(Sb, ab),
          Hb = null === Bb || void 0 === Bb ? void 0 : Bb(Sb, ab),
          wb = void 0 !== (null === ub || void 0 === ub ? void 0 : ub.gpuDetails),
          Xb = wb ? null === (Ob = (0, Zb.o)()) || void 0 === Ob ? void 0 : Ob.renderer : void 0,
          pb = wb ? ` ${(0,Yb.f)()}` : "",
          ob = Array.from([Xb && `gpu ${(0,Yb.l)(Xb)}`, Hb].filter(Boolean).join("; ")).slice(0, kb).join(""),
          Ab = `core error ${bb}${null!==(Gb=null===ub||void 0===ub?void 0:ub.words)&&void 0!==Gb?Gb:""}${pb}${ob?`: ${ob}`:""}`,
          lb = {
            errorCode: String(Sb),
            detail: String(ab),
            droppedBefore: String(pu),
            wasmBuild: hb.wasm,
            clientVersion: hb.client,
            ...null === ub || void 0 === ub ? void 0 : ub.gpuDetails
          };
        null !== ub && (0, Yb.j)(ub) ? Ku((() => {
          console.warn(`${tb} coreError CORE-${bb}: ${Ab} (not sent: the session's render warnings of its kind went)`, lb)
        })) : lu({
          kind: xu(Sb, ab),
          code: `CORE-${bb}`,
          site: Jb,
          fatal: !1,
          message: Ab,
          details: lb,
          instance: null !== (Ub = null === ub || void 0 === ub ? void 0 : ub.instance) && void 0 !== Ub ? Ub : Du(Sb, ab)
        })
      }
    }

    function Du(bb, ub) {
      return bb === Lb.I.RenderDeviceLost && 0 !== (ub & Lb.Q.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function xu(bb, ub) {
      return bb === Lb.I.JobsHeapGaveUp ? "meshHeap" : (0, Yb.d)(bb, ub) ? "linkCensus" : "coreError"
    }

    function zu(bb) {
      return (0, gb.j)(bb instanceof ib.c ? bb.trap : bb, db.D, db.T)
    }
    const gu = "declined=js";

    function iu(bb) {
      return bb ? {
        labels: [gu],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function vu(bb, ub, hb) {
      return Ju(bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function tu(bb, ub, hb) {
      return Ju(bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Ju(bb, ub, hb, Bb, Ob) {
      let {
        memoryDetails: Gb = {},
        declined: Ub = !1
      } = Bb;
      const {
        code: Lb,
        details: Yb,
        message: Sb
      } = (0, Ab.E)(bb, ub), ab = [];
      Object.assign(Yb, (0, vb.f)(bb.error)), null !== hb && (Yb.trapKind = hb.kind, null !== hb.panic && (Yb.panic = (0, gb.f)(hb.panic)), hb.refusedBytes > 0 && (Yb.refusedAllocation = String(hb.refusedBytes)), ab.push((0, gb.l)(hb.kind, hb.refusedBytes)));
      const Hb = iu(Ub);
      return lu({
        kind: "crash",
        code: Lb,
        site: bb.site,
        fatal: Ob,
        message: [...ab, ...Hb.labels, Sb].join("; "),
        details: {
          ...Yb,
          ...Hb.details,
          ...Gb
        },
        error: bb.error
      })
    }

    function eu(bb, ub, hb) {
      return lu({
        kind: "unsupported",
        code: ub,
        site: eb,
        fatal: !0,
        message: hb,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: ub
        },
        screen: {
          text: (0, xb.q)(bb),
          reload: "download" === bb
        }
      })
    }

    function Nu(bb, ub, hb) {
      return lu({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === ub ? "blocked_after_loss" : "unsupported_js_fallback",
        site: eb,
        fatal: !1,
        message: hb,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: "unsupported",
          decline: ub,
          fallback: "js"
        }
      })
    }
    const su = "misdrawn_gpu_js_fallback";

    function Mu(bb, ub) {
      return lu({
        kind: "gpuFallback",
        code: su,
        site: eb,
        fatal: !1,
        message: `the renderer plays ${bb} on ${ub} worse than the JS client`,
        details: {
          gpuFamily: bb,
          backend: ub,
          fallback: "js"
        }
      })
    }

    function mu(bb) {
      Wu("counts", (async () => {
        await (0, wb.b)(bb), Hu = !0
      }))
    }

    function Iu(bb, ub, hb, Bb) {
      const Ob = iu(Bb);
      return lu({
        kind: "unsupported",
        code: ub,
        site: eb,
        fatal: !1,
        message: [...Ob.labels, hb].join("; "),
        details: {
          cause: bb,
          status: ub,
          fallback: "js",
          ...Ob.details
        }
      })
    }

    function Pu() {
      const {
        code: bb,
        message: ub
      } = zb.d;
      return lu({
        kind: "unstreamedLoad",
        code: bb,
        site: eb,
        fatal: !1,
        message: ub
      })
    }
    class qu extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Eu(bb) {
      return bb instanceof Kb.m ? 0 === bb.code ? "JOIN-matchmake" : `JOIN-${bb.code}` : bb instanceof Kb.e ? 0 === bb.code ? `JOIN-${bb.stage}` : `JOIN-${bb.stage}-${bb.code}` : bb instanceof lb.d ? "JOIN-gameCode" : bb instanceof qu ? "JOIN-turnstilePage" : bb instanceof Kb.y ? "JOIN-trafficCheck" : bb instanceof pb.c ? "JOIN-timeout" : "JOIN-network"
    }

    function yu(bb, ub) {
      const hb = (0, vb.l)(bb),
        Bb = {
          wasmBuild: ub.wasm,
          clientVersion: ub.client
        },
        Ob = bb instanceof qu ? {
          text: (0, xb.j)(),
          reload: !1
        } : void 0,
        Gb = (0, Wb.g)(bb),
        Ub = "expected" !== Gb;
      return lu({
        kind: "join",
        code: Eu(bb),
        site: Nb,
        fatal: !0,
        message: hb,
        details: Bb,
        error: bb,
        screen: Ob,
        toTransport: Ub,
        instance: Gb
      })
    }

    function Vu(bb, ub, hb) {
      var Bb;
      const Ob = (0, Wb.g)(bb),
        Gb = {
          cause: (bb instanceof Kb.e || bb instanceof Kb.m) && null !== (Bb = bb.serverText) && void 0 !== Bb ? Bb : "",
          sinceJoinStart: (0, Xb.c)(hb.sinceJoinStartMs),
          game: hb.game,
          ...(0, Xb.j)(),
          wasmBuild: ub.wasm,
          clientVersion: ub.client
        };
      return lu({
        kind: "pageJoin",
        code: Eu(bb),
        site: Nb,
        fatal: !1,
        message: (0, vb.l)(bb),
        details: Gb,
        error: bb,
        toTransport: "unrecognised" === Ob,
        instance: Ob
      })
    }
    const Fu = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function fu(bb, ub) {
      let {
        unused: hb,
        answered: Bb,
        heldMs: Ob
      } = bb;
      const {
        code: Gb,
        message: Ub
      } = Fu[hb], Lb = {
        unused: hb,
        answered: String(Bb),
        heldMs: String(Ob),
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "seat",
        code: Gb,
        site: Nb,
        fatal: !1,
        message: Ub,
        details: Lb
      })
    }

    function ku(bb, ub, hb) {
      var Bb;
      let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Bb = bb.name) && void 0 !== Bb ? Bb : String(bb.code);
      const Gb = {
          closeCode: String(bb.code),
          recognised: String(null !== bb.name),
          closeReason: hb.closeReason,
          sinceJoined: (0, Xb.c)(hb.sinceJoinedMs),
          game: hb.game,
          ...(0, Xb.j)(),
          wasmBuild: ub.wasm,
          clientVersion: ub.client
        },
        Ub = null === bb.name && !(0, Xb.e)(bb.code);
      return lu({
        kind: "disconnect",
        code: Ob,
        site: sb,
        fatal: !1,
        message: "Left room",
        details: Gb,
        toTransport: Ub
      })
    }

    function Tu(bb, ub) {
      const hb = {
        ...(0, Sb.j)(bb),
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "disconnect",
        code: `reconnect-${bb.reason}`,
        site: Nb,
        fatal: !1,
        message: "Reconnect failed",
        details: hb
      })
    }

    function cu(bb) {
      return bb.error instanceof rb.g ? `MODEL-${bb.error.status}` : bb.error instanceof jb.h ? "MODEL-ring" : "MODEL-network"
    }

    function Qu(bb, ub) {
      const hb = cu(bb),
        Bb = `model file ${bb.file} ${bb.startup?"(startup) ":""}could not load`,
        Ob = {
          file: String(bb.file),
          url: bb.url,
          wasmBuild: ub.wasm,
          clientVersion: ub.client
        };
      return lu({
        kind: bb.startup ? "model" : "modelLate",
        code: hb,
        site: Mb,
        fatal: bb.startup,
        message: Bb,
        details: Ob,
        error: bb.error
      })
    }

    function Ru(bb, ub) {
      const hb = {
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: mb,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: hb,
        error: bb
      })
    }

    function bh(bb, ub, hb) {
      const Bb = {
        delayMs: String(ub),
        wasmBuild: hb.wasm,
        clientVersion: hb.client
      };
      bb instanceof rb.g && (Bb.status = String(bb.status));
      return lu({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: mb,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Bb,
        error: bb
      })
    }

    function uh(bb, ub) {
      const hb = {
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: mb,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: hb,
        error: bb
      })
    }

    function hh(bb, ub) {
      const hb = {
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Ab.z,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: hb,
        error: bb
      })
    }

    function Bh(bb, ub) {
      const hb = {
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Vb,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: hb,
        error: bb
      })
    }

    function Oh(bb, ub) {
      const {
        frames: hb,
        acks: Bb,
        mask: Ob,
        outcome: Gb
      } = bb, Ub = {
        frames: String(hb),
        acks: String(Bb),
        mask: String(Ob),
        outcome: null !== Gb && void 0 !== Gb ? Gb : "resynced",
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "recovered",
        code: "rejoined" === Gb ? "CORE-eventOverflowRejoin" : "failed" === Gb ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Eb,
        fatal: !1,
        message: `the event buffer refused records in ${hb} frames`,
        details: Ub
      })
    }

    function Gh(bb, ub, hb) {
      return lu({
        kind: "recovered",
        code: "CORE-workerLost",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker was lost`,
        details: {
          reason: ub,
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        }
      })
    }

    function Uh(bb, ub, hb) {
      const Bb = {
        wasmBuild: hb.wasm,
        clientVersion: hb.client
      };
      return lu({
        kind: "recovered",
        code: bb,
        site: Ab.o,
        fatal: !1,
        message: ub,
        details: Bb
      })
    }

    function Lh(bb, ub) {
      const hb = {
        lastReason: bb,
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return lu({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Ab.z,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: hb
      })
    }

    function Yh(bb, ub, hb) {
      return lu({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Ab.m,
        fatal: !1,
        message: (0, Cb.k)(bb) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: bb,
          ...ub,
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        }
      })
    }

    function Sh(bb, ub, hb, Bb) {
      var Ob, Gb;
      const Ub = (0, Yb.h)(),
        Lb = {
          game: bb,
          cause: ub,
          census: null === hb ? "none" : JSON.stringify(hb),
          gpu: null !== (Ob = null === (Gb = (0, Zb.o)()) || void 0 === Gb ? void 0 : Gb.renderer) && void 0 !== Ob ? Ob : "",
          renderWarned: String(Ub),
          browser: (0, Yb.f)(),
          wasmBuild: Bb.wasm,
          clientVersion: Bb.client
        },
        Sb = `first view drew no whole terrain in ${nb.d/1e3} s, ${ub}${Ub?", render warned":""}`;
      return lu({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Fb,
        fatal: !1,
        message: Sb,
        details: Lb
      })
    }

    function ah(bb, ub, hb) {
      var Bb, Gb, Ub;
      const Lb = null !== (Bb = (0, Ob.o)(null !== (Gb = null === (Ub = (0, Zb.j)()) || void 0 === Ub ? void 0 : Ub.renderer) && void 0 !== Gb ? Gb : null, (0, Zb.h)())) && void 0 !== Bb ? Bb : "unknown",
        Sb = null === ub ? "untimed" : `${Math.round(ub)} ms`,
        ab = `frames stalled, gpu ${(0,Yb.l)(Lb)}, blocking ${Sb}, drawn ${Math.round(bb)} ms apart`,
        Hb = {
          gpuModel: Lb,
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        };
      return lu({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: fb,
        fatal: !1,
        message: ab,
        details: Hb
      })
    }

    function Hh(bb, ub, hb) {
      return lu({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker did not start`,
        details: {
          waitedMs: String(Math.round(ub)),
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        }
      })
    }

    function wh(bb, ub, hb) {
      return lu({
        kind: "recovered",
        code: "CORE-replayFault",
        site: bb,
        fatal: !1,
        message: `the replay's ${bb} failed`,
        details: {
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        },
        error: ub
      })
    }
    const Zh = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Xh(bb, ub, hb) {
      const Bb = "lost" === ub && void 0 !== hb ? ` (${hb})` : "";
      return `the ${bb} ${Zh[ub]}${Bb}`
    }
    const ph = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function oh(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Ob = null === hb.boundAtMs ? "unbound" : `up${(0,ab.f)(Bb-hb.boundAtMs)}`,
        Gb = null === hb.adapter ? "no adapter" : (0, ab.n)(hb.adapter),
        Ub = `${(0,ob.m)()?"hidden":"visible"} ${Ob} ${Gb}${!0===hb.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === bb) return `${bb} ${Ub}`;
      const Lb = null === ub || void 0 === ub ? void 0 : ub.message;
      return `${ub instanceof ob.i?"timeout":(0,ab.r)("frames_refused"===bb,"string"===typeof Lb?Lb:"")} ${Ub}`
    }
    const Ah = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function lh(bb, ub, Bb) {
      var Gb, Ub, Lb, Sb, wb;
      let {
        cause: Zb = "lost",
        error: Xb,
        context: pb = ph,
        session: ob = Ah
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ab = oh(Zb, Xb, pb),
        lb = {
          losses: String(ub),
          cause: Zb,
          detail: Ab,
          vendor: null !== (Gb = null === (Ub = pb.adapter) || void 0 === Ub ? void 0 : Ub.vendor) && void 0 !== Gb ? Gb : "",
          architecture: null !== (Lb = null === (Sb = pb.adapter) || void 0 === Sb ? void 0 : Sb.architecture) && void 0 !== Lb ? Lb : "",
          indirectHangs: String(pb.indirectHangs),
          samples: String(ob.samples),
          sunShadows: String(ob.sunShadows),
          renderDistance: String(ob.renderDistance),
          gpuFamily: null !== (wb = (0, Ob.d)()) && void 0 !== wb ? wb : "",
          browser: (0, Yb.f)(),
          siteUsed: Hb.s,
          wasmBuild: Bb.wasm,
          clientVersion: Bb.client
        },
        Kb = Xh(bb, Zb),
        Wb = lu({
          kind: "recovered",
          code: "CORE-renderLost",
          site: Pb,
          fatal: !1,
          message: Kb,
          details: lb,
          error: Xb
        });
      return Wu("ga", (async () => {
        const {
          logError: ub
        } = await Promise.resolve().then((() => hb(2712))), Bb = `${ab.c["webgpu"===bb?"WebGPU":"WebGL2"]}\n Error: ${Ab}`;
        ub("warning", Bb), ub("error", Bb)
      })), Wb
    }

    function Kh(bb, ub) {
      var hb, Bb;
      const Ob = null === bb.name ? "TEXTURE-sources" : null === bb.url ? "TEXTURE-nourl" : bb.error instanceof Db.d ? `TEXTURE-${bb.error.status}` : "TEXTURE-network",
        Gb = null === bb.name ? "terrain textures could not load" : `terrain texture ${bb.name} could not load`,
        Ub = {
          texture: null !== (hb = bb.name) && void 0 !== hb ? hb : "",
          url: null !== (Bb = bb.url) && void 0 !== Bb ? Bb : "",
          wasmBuild: ub.wasm,
          clientVersion: ub.client
        };
      return lu({
        kind: "terrainTexture",
        code: Ob,
        site: Ab.y,
        fatal: !1,
        message: Gb,
        details: Ub,
        error: bb.error
      })
    }
    const Wh = {
      previewAnimations: {
        site: qb,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: yb,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Ch(bb, ub, hb, Bb) {
      const {
        site: Ob,
        prefix: Gb,
        name: Ub
      } = Wh[bb], {
        stage: Lb,
        error: Yb
      } = hb;
      return lu({
        kind: bb,
        code: "decode" === Lb ? null === Yb ? `${Gb}-decode` : `${Gb}-trap` : Yb instanceof rb.g ? `${Gb}-${Yb.status}` : `${Gb}-network`,
        site: Ob,
        fatal: !1,
        message: "decode" === Lb ? `${Ub} did not decode` : `${Ub} could not load`,
        details: {
          url: ub,
          wasmBuild: Bb.wasm,
          clientVersion: Bb.client
        },
        error: Yb
      })
    }
    const dh = "staleBuild";

    function rh(bb, ub, hb) {
      const Bb = {
          failedSite: bb.site,
          url: bb.url,
          from: bb.from,
          sameBuild: String(bb.from === ub),
          reloadMs: String(Math.max(0, Date.now() - bb.at)),
          wasmBuild: hb.wasm,
          clientVersion: hb.client
        },
        Ob = `reloaded into a newer build after ${bb.site} failed to load: ${bb.error}`;
      return lu({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: dh,
        fatal: !1,
        message: Ob,
        details: Bb
      })
    }
  },
  40407: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Ob,
      f: () => Ub
    });
    var Bb = hb(4564);
    const Ob = 3e4;
    class Gb {
      constructor(bb) {
        this.iZ = bb, this.waitedMs = 0, this.lastMs = null
      }
      frame(bb, ub) {
        if (ub) return !0;
        const hb = null === this.lastMs ? 0 : bb - this.lastMs;
        return this.lastMs = bb, hb <= 900 && (this.waitedMs += hb), !(this.waitedMs < Ob) && (this.iZ(), !0)
      }
    }

    function Ub(bb, ub) {
      return 0 === (bb & Bb.N.ChunkRequested) ? "no_chunk_request" : 0 === (bb & Bb.N.ChunkStored) ? "chunk_not_stored" : 0 === (bb & Bb.N.MeshLanded) ? "not_meshed" : null === ub ? "no_frame_drawn" : 0 === ub.terrainParts ? "no_terrain_parts" : ub.terrainCompiling > 0 ? "terrain_compiling" : ub.terrainOpaque + ub.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  4547: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      k: () => Ob
    });
    var Bb = hb(4555);

    function Ob(bb) {
      return "none" !== bb
    }

    function Gb(bb, ub) {
      if (!bb) return "none";
      switch (ub) {
        case Bb.Y.Drawn:
          return "drawn";
        case Bb.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Ub(bb) {
      return "drawn" === bb
    }
  },
  40049: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      h: () => Ab,
      l: () => pb,
      n: () => ob,
      p: () => wb,
      s: () => Zb,
      t: () => ab,
      u: () => Hb,
      x: () => Xb
    });
    class Bb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Ob = null,
      Gb = null,
      Ub = null;
    const Lb = [];
    let Yb = null;

    function Sb(bb, ub) {
      try {
        bb(ub)
      } catch (hb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", hb)
      }
    }

    function ab() {
      return Yb
    }

    function Hb(bb) {
      Lb.push(bb), null !== Yb && Sb(bb, Yb)
    }

    function wb(bb) {
      return Ob ??= Promise.all([hb.e(70), hb.e(95), hb.e(216), hb.e(75), hb.e(217), hb.e(190), hb.e(94), hb.e(235), hb.e(261), hb.e(188), hb.e(263), hb.e(200), hb.e(187), hb.e(201), hb.e(137), hb.e(86), hb.e(115), hb.e(239), hb.e(54)]).then((() => hb(41994))).then((ub => {
        ub.loadAudio(bb), Yb = ub;
        for (const bb of Lb) Sb(bb, ub);
        return ub
      })).catch((bb => {
        throw Ob = null, bb
      })), Ob
    }
    async function Zb(bb, ub) {
      try {
        const hb = await wb(bb);
        await hb.loadClientGame(ub)
      } catch (hb) {
        throw new Bb(hb)
      }
    }

    function Xb(bb, ub) {
      Gb = {
        running: bb,
        shell: ub
      }
    }

    function pb() {
      return Ub
    }
    async function ob(bb) {
      const ub = Gb;
      if ((null === ub || void 0 === ub ? void 0 : ub.running) !== bb) throw new Error("the core's session has ended");
      const hb = await wb(ub.shell.audio).catch((bb => {
        throw new Bb(bb)
      }));
      if (null !== Ub) return Ub;
      if (Gb !== ub || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Ub = hb.startGameHost(bb, ub.shell), null === Ub) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Ub
    }

    function Ab() {
      null !== Ub && (null !== Yb ? Yb.endGameHost(Ub) : Ub.closeGame()), Ub = null, Gb = null
    }
  },
  40301: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => Lb,
      e: () => Sb,
      h: () => Gb,
      j: () => Ub,
      l: () => Ob,
      m: () => Zb,
      p: () => ab,
      s: () => Yb,
      w: () => wb,
      y: () => Hb
    });
    var Bb = hb(1681);
    const Ob = new Uint8Array([12]),
      Gb = 2e3,
      Ub = 257;

    function Lb(bb) {
      const ub = new Uint8Array(4);
      return new DataView(ub.buffer).setUint32(0, bb, !0), ub
    }
    class Yb extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Sb extends Error {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb), this.stage = ub, this.code = hb, this.serverText = Bb, this.name = "JoinError"
      }
    }
    class ab extends Error {
      constructor(bb) {
        super(bb), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Hb extends Error {
      constructor(bb) {
        super((0, Bb.g)(bb), {
          cause: bb
        }), this.name = "TrafficCheckError"
      }
    }
    class wb extends Error {
      constructor(bb, ub, hb) {
        super(bb, {
          cause: hb
        }), this.networkLost = ub, this.name = "SeatRequestError"
      }
    }
    class Zb extends Error {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(bb), this.code = ub, this.serverText = hb, this.name = "MatchmakeError"
      }
    }
  },
  40305: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      g: () => Hb
    });
    var Bb = hb(2440),
      Ob = hb(3259),
      Gb = hb(38699),
      Ub = hb(40293),
      Lb = hb(40301),
      Yb = hb(40310);
    const Sb = "seat reservation expired.",
      ab = "early_leave";

    function Hb(bb) {
      if (bb instanceof Gb.c) return "expected";
      if (bb instanceof Lb.w) return bb.networkLost ? "expected" : "unrecognised";
      if (bb instanceof Lb.e) {
        if ("closed" === bb.stage && (0 === bb.code || (0, Ob.e)(bb.code))) return "expected";
        if ("roomError" === bb.stage && (bb.serverText === Sb || bb.serverText === ab)) return "expected"
      }
      return bb instanceof Lb.e || bb instanceof Lb.m ? null === (0, Ub.m)(bb.code).name ? "unrecognised" : "known" : (0, Bb.f)(bb) ? "expected" : bb instanceof Lb.y || bb instanceof Yb.h ? "known" : "unrecognised"
    }

    function wb(bb) {
      return bb instanceof Gb.c ? "timedOut" : "expected" !== Hb(bb) || (0, Bb.f)(bb) || bb instanceof Lb.e && 1001 === bb.code ? void 0 : "failed"
    }
  },
  38743: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Db,
      i: () => Cb,
      k: () => Hb,
      m: () => db,
      p: () => Ab,
      r: () => jb,
      w: () => nb
    });
    var Bb = hb(35920),
      Ob = hb(36095);
    const Gb = 64 * Bb.c,
      Ub = 40 * Bb.f,
      Lb = 36 * Bb.f,
      Yb = 20 * Bb.f,
      Sb = 2 * Bb.f,
      ab = 5 * Bb.f;

    function Hb(bb) {
      return "footprint" !== bb
    }
    const wb = 2 * Bb.f,
      Zb = 4 * Bb.f,
      Xb = 35 * Bb.f + wb + Zb,
      pb = 6.5 * Bb.f,
      ob = 132.5 * Bb.c;

    function Ab(bb) {
      const ub = pb + (0, Ob.l)(bb) + bb * ob;
      return Math.ceil((2 * Xb + ub) / Gb) * Gb
    }
    const lb = Ab(Ob.e),
      Kb = (Bb.f, Bb.f, Bb.f, {
        targetBytes: Ub,
        leastBytes: Yb
      }),
      Wb = {
        targetBytes: Lb,
        leastBytes: Yb
      };

    function Cb(bb) {
      return {
        targetBytes: bb,
        leastBytes: 0
      }
    }

    function db(bb) {
      return bb >= Ob.e ? Kb : Wb
    }
    const rb = 2 * Gb;

    function jb(bb, ub, hb) {
      return bb + ub + rb > (null !== hb && void 0 !== hb ? hb : lb)
    }
    const nb = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? bb => {
        requestIdleCallback(bb)
      } : null
    };
    class Db {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nb;
        this.memory = bb, this.readPeakStoredChunks = ub, this.onError = hb, this.clock = Bb, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(bb, ub, hb) {
        this.shedding = {
          shed: bb,
          iZ: ub,
          readDistanceInUse: hb
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(bb) {
        this.footprint = bb
      }
      setCeiling(bb) {
        this.ceilingBytes = bb, this.call((() => {
          this.memory.setCeiling(bb)
        }), void 0)
      }
      ceilingMayRefuse(bb) {
        return jb(this.memory.memoryBytes(), bb, this.ceilingBytes)
      }
      reserveAtJoin(bb) {
        let {
          targetBytes: ub,
          leastBytes: hb
        } = bb;
        const Bb = this.memory.memoryBytes(),
          Ob = Bb + hb,
          Gb = Math.max(ub + (this.ballastOn() ? ab : 0), Ob),
          Ub = this.call((() => this.memory.reserveUpFront(Gb) ? "target" : Gb > Ob && this.memory.reserveUpFront(Ob) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Ub) {
          const bb = "least" === Ub ? `took ${Ob} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Gb} bytes was refused at ${Bb} bytes; ${bb}`)
        }
        return this.joinReserveTaken = Ub, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Ub && this.shedFor("joinReserve"), "none" !== Ub
      }
      afterFrame() {
        if (this.stopped) return;
        const bb = this.clock.now(),
          ub = null !== this.stepsHeldUntil && bb >= this.stepsHeldUntil;
        if (ub && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && bb >= this.ballastCheckAt && (this.takeBallast(bb), this.stopped)) return;
        const hb = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Bb = ub && "now" === hb ? "none" : hb,
          {
            requestIdle: Ob
          } = this.clock;
        "now" === Bb || null !== this.pendingSince && bb - this.pendingSince >= 500 ? this.step() : "idle" === Bb && null === this.pendingSince && (null === Ob ? this.step() : (this.pendingSince = bb, Ob((() => {
          null !== this.pendingSince && this.step()
        })))), bb - this.statsAt >= 1e3 && (this.statsAt = bb, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var bb, ub;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ub = this.shedding.readDistanceInUse()) && void 0 !== ub ? ub : this.distanceInUse);
          null === (bb = this.footprint) || void 0 === bb || bb.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(bb, ub) {
        this.noteWorker(`Mesh${bb}`, ub)
      }
      meshWorkerGone(bb) {
        this.workerGone(`Mesh${bb}`)
      }
      noteWorldgen(bb) {
        this.noteWorker("Worldgen", bb)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(bb, ub) {
        const hb = this.workers.get(bb);
        null !== hb && void 0 !== hb && hb.gone && (this.replacedRefusals.reserves += hb.stats.reservesRefused, this.replacedRefusals.allocations += hb.stats.allocationsRefused), this.workers.set(bb, {
          stats: ub,
          gone: !1
        })
      }
      workerGone(bb) {
        const ub = this.workers.get(bb);
        ub && (ub.gone = !0)
      }
      details() {
        var bb, ub;
        const hb = {
          wasmMemoryNow: `${(0,Bb.i)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (hb.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (hb.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Ob = this.main;
        if (Ob) {
          hb.wasmMemoryMain = xb(Ob);
          const bb = Math.max(0, Ob.peakLiveBytes - this.ballastPeakBytes),
            ub = 0 === this.peakStoredChunks ? "-" : (bb / this.peakStoredChunks / Bb.c).toFixed(1);
          hb.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ub} KiB`
        }
        for (const [Bb, {
            stats: Ub,
            gone: Lb
          }] of this.workers) hb[`wasmMemory${Bb}`] = xb(Ub) + (Lb ? " (gone)" : "");
        const Gb = null !== (bb = null === (ub = this.footprint) || void 0 === ub ? void 0 : ub.describe()) && void 0 !== bb ? bb : null;
        return null !== Gb && (hb.wasmMemoryFootprint = Gb), hb
      }
      pageKillSnapshot() {
        var bb, ub, hb, Ob, Gb;
        let Ub = (null !== (bb = null === (ub = this.main) || void 0 === ub ? void 0 : ub.reservesRefused) && void 0 !== bb ? bb : 0) + this.replacedRefusals.reserves,
          Lb = (null !== (hb = null === (Ob = this.main) || void 0 === Ob ? void 0 : Ob.allocationsRefused) && void 0 !== hb ? hb : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Bb
          }
          of this.workers.values()) Ub += Bb.reservesRefused, Lb += Bb.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Bb.i)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Bb.i)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Ub,
          refusedAllocations: Lb,
          sheds: this.sheds,
          ...null === (Gb = this.footprint) || void 0 === Gb ? void 0 : Gb.snapshot()
        }
      }
      workersMemoryBytes() {
        let bb = 0;
        for (const {
            stats: ub,
            gone: hb
          }
          of this.workers.values()) bb += hb ? 0 : ub.memoryBytes;
        return bb
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Sb)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(bb) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = bb + 1e3;
        const ub = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ub)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(bb) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${bb}: frames grow on demand from here`)
      }
      shedFor(bb) {
        const {
          shedding: ub
        } = this;
        if (null === ub) return;
        this.pendingSince = null;
        const hb = this.call((() => ub.shed(bb)), null);
        this.stopped || (null !== hb ? (this.sheds++, this.shedCap = hb, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ub.iZ(bb, this.sheds, this.details())) : Hb(bb) && this.stopSteps("nothing is left to shed"))
      }
      call(bb, ub) {
        if (this.stopped) return ub;
        try {
          return bb()
        } catch (hb) {
          return this.stop(), this.onError(hb), ub
        }
      }
    }

    function xb(bb) {
      const ub = (bb, ub) => `${bb}/${(0,Bb.i)(ub)}`;
      return `memory ${(0,Bb.i)(bb.memoryBytes)} live ${(0,Bb.i)(bb.liveBytes)} peak ${(0,Bb.i)(bb.peakLiveBytes)} unused ${(0,Bb.i)(bb.unusedBytes)} ceiling ${(0,Bb.i)(bb.ceilingBytes)} MiB; grows upFront ${ub(bb.grows.upFront,bb.grownBytes.upFront)} ahead ${ub(bb.grows.ahead,bb.grownBytes.ahead)} inFrame ${ub(bb.grows.onDemandInFrame,bb.grownBytes.onDemandInFrame)} other ${ub(bb.grows.onDemand,bb.grownBytes.onDemand)}; refused reserves ${bb.reservesRefused} allocations ${bb.allocationsRefused}`
    }
  },
  40385: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      d: () => Sb,
      e: () => Zb,
      h: () => Hb
    });
    var Bb = hb(2688),
      Ob = hb(4555),
      Gb = hb(40391),
      Ub = hb(40398),
      Lb = hb(35925);
    const Yb = 395,
      Sb = 2147483648,
      ab = new Uint8Array(0);
    class Hb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class wb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Zb {
      constructor(bb, ub, hb) {
        var Bb, Ob, Ub, Lb;
        let Yb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = bb, this.build = ub, this.onFailure = hb, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.HZ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Bb = Yb.fetchFile) && void 0 !== Bb ? Bb : bb => (0, Gb.j)(bb), this.onWritten = null !== (Ob = Yb.onWritten) && void 0 !== Ob ? Ob : null, this.onTaken = null !== (Ub = Yb.onTaken) && void 0 !== Ub ? Ub : null, this.onPackFileFailed = null !== (Lb = Yb.onPackFileFailed) && void 0 !== Lb ? Lb : null, this.startupLeft = new Set(bb.startup);
        for (const Gb of bb.startup) this.request(Gb)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(bb) {
        return this.drawn.get(bb)
      }
      request(bb) {
        const ub = this.pending.get(bb);
        if (!0 === (null === ub || void 0 === ub ? void 0 : ub.ask)) return;
        const hb = this.kw(bb, !0);
        hb.recheck = void 0 !== ub;
        const Bb = this.drawn.get(bb);
        if (void 0 !== Bb) return hb.MS = !0, hb.recheck = !0, void this.fetch(bb, hb, Bb);
        this.fetchWanted(bb, hb)
      }
      async refresh() {
        const bb = ++this.refreshes,
          ub = new Set;
        for (const Ub of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const bb of Ub) 0 === (bb & Gb.f) && ub.add(bb);
        const hb = [...ub];
        let Bb;
        try {
          Bb = await Promise.all(hb.map((bb => this.wanted(bb))))
        } catch {
          return null
        }
        if (bb !== this.refreshes) return null;
        const Ob = {
          resent: 0,
          refetched: 0,
          delivered: hb.filter((bb => this.drawn.has(bb))).length
        };
        return hb.forEach(((bb, ub) => {
          const {
            url: hb,
            inPlaceOf: Gb
          } = Bb[ub], Ub = this.pending.get(bb);
          if (void 0 !== Ub) {
            if (Ub.MS || void 0 === Ub.url) return void(Ub.recheck = !0);
            if (Ub.url === hb) return;
            Ob.refetched++;
            const ub = this.kw(bb, Ub.ask);
            return ub.recheck = Ub.recheck, void this.fetch(bb, ub, hb, Gb)
          }
          const Lb = this.written.get(bb);
          void 0 === Lb ? this.drawn.get(bb) !== (null !== hb && void 0 !== hb ? hb : void 0) && (Ob.resent++, this.fetch(bb, this.kw(bb, !1), hb, Gb)) : Lb.url !== (null !== hb && void 0 !== hb ? hb : "") && (Lb.attempt.recheck = !0)
        })), Ob
      }
      taken(bb, ub) {
        const hb = new Set,
          Bb = new Set;
        for (const Ob of Array.from(ub)) 0 === (Ob & Sb) ? hb.add(Ob) : Bb.add((Ob & ~Sb) >>> 0);
        for (const [Ob, Gb] of this.written) Gb.seq > bb || (this.written.delete(Ob), hb.has(Gb.seq) ? this.refusedFile(Ob, Gb) : this.takenFile(Ob, Gb, !Gb.empty && !Bb.has(Gb.seq)))
      }
      takenFile(bb, ub, hb) {
        const {
          attempt: Bb
        } = ub;
        if (hb) {
          var Ob;
          this.drawn.set(bb, ub.url), this.undrawn.delete(bb), void 0 !== Bb.inPlaceOf ? this.refusedPack.set(bb, Bb.inPlaceOf) : Bb.MS || this.refusedPack.delete(bb), null === (Ob = this.onTaken) || void 0 === Ob || Ob.call(this, bb, !0);
          const hb = this.pending.get(bb);
          if (!0 === (null === hb || void 0 === hb ? void 0 : hb.MS) && hb.url !== ub.url) {
            const hb = this.kw(bb, !0);
            hb.MS = !0, hb.recheck = !0, this.fetch(bb, hb, ub.url)
          }
        } else {
          var Gb;
          this.drawn.has(bb) || this.undrawn.add(bb), null === (Gb = this.onTaken) || void 0 === Gb || Gb.call(this, bb, !1)
        }
        Bb.recheck && this.resendIfChanged(bb)
      }
      refusedFile(bb, ub) {
        var hb, Bb;
        if (null === (hb = this.onTaken) || void 0 === hb || hb.call(this, bb, !1), this.refusedPack.set(bb, ub.url), this.pending.has(bb)) return void(null === (Bb = this.onPackFileFailed) || void 0 === Bb || Bb.call(this, bb, Xb(ub.url)));
        const Ob = this.kw(bb, ub.attempt.ask);
        Ob.recheck = ub.attempt.recheck, this.afterRefusal(bb, Ob, ub.url)
      }
      async afterRefusal(bb, ub, hb) {
        var Bb;
        let Ob;
        try {
          Ob = await this.wanted(bb)
        } catch (Gb) {
          return void(this.pending.get(bb) === ub && this.giveUp(bb, ub, hb, Gb))
        }
        this.pending.get(bb) === ub && (Ob.inPlaceOf !== hb ? ub.ask || (null !== (Bb = Ob.url) && void 0 !== Bb ? Bb : void 0) !== this.drawn.get(bb) ? this.fetch(bb, ub, Ob.url, Ob.inPlaceOf) : this.pending.delete(bb) : this.fallBack(bb, ub, hb, Xb(hb)))
      }
      kw(bb, ub) {
        const hb = {
          url: void 0,
          ask: ub,
          MS: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(bb, hb);
        for (let Bb = this.ready.length - 1; Bb >= 0; Bb--) this.ready[Bb].file === bb && this.ready.splice(Bb, 1);
        return hb
      }
      async wanted(bb) {
        const ub = await this.files.url(bb);
        return null !== ub && this.refusedPack.get(bb) === ub ? {
          url: await this.files.shippedUrl(bb),
          inPlaceOf: ub
        } : {
          url: ub,
          inPlaceOf: void 0
        }
      }
      fetchWanted(bb, ub) {
        const hb = this.files.url(bb);
        hb instanceof Promise ? hb.then((hb => {
          this.fetchFound(bb, ub, hb)
        }), (hb => {
          this.pending.get(bb) === ub && this.giveUp(bb, ub, "", hb)
        })) : this.fetchFound(bb, ub, hb)
      }
      fetchFound(bb, ub, hb) {
        null !== hb && this.refusedPack.get(bb) === hb ? Promise.resolve(this.files.shippedUrl(bb)).then((Bb => {
          this.fetch(bb, ub, Bb, hb)
        }), (Bb => {
          this.pending.get(bb) === ub && this.giveUp(bb, ub, hb, Bb)
        })) : this.fetch(bb, ub, hb)
      }
      fetch(bb, ub, hb, Bb) {
        this.pending.get(bb) === ub && (ub.url = hb, ub.inPlaceOf = Bb, null !== hb ? this.load(bb, ub, hb) : this.buildFile(bb, ub, "", ab))
      }
      load(bb, ub, hb) {
        const Bb = this.HZ.get(bb);
        (null === Bb || void 0 === Bb ? void 0 : Bb.url) !== hb ? this.fetchFile(hb).then((Bb => {
          var Ob, Gb;
          this.pending.get(bb) === ub && (this.keptTotal += Bb.byteLength - (null !== (Ob = null === (Gb = this.HZ.get(bb)) || void 0 === Gb ? void 0 : Gb.glb.byteLength) && void 0 !== Ob ? Ob : 0), this.HZ.set(bb, {
            url: hb,
            glb: Bb
          }), this.buildFile(bb, ub, hb, Bb))
        }), (Bb => {
          this.pending.get(bb) === ub && this.fallBack(bb, ub, hb, Bb)
        })) : this.buildFile(bb, ub, hb, Bb.glb)
      }
      buildFile(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = Bb.byteLength > 0 && (0, Gb.n)(hb) ? (bb | Gb.c) >>> 0 : bb;
        this.queueRecord(bb, ub, hb, Bb, this.build(Ub, Bb), Ob)
      }
      queueRecord(bb, ub, hb, Bb, Gb, Lb) {
        Gb.then((Gb => {
          if (this.pending.get(bb) !== ub) return;
          if (Ob.q + (0, Ob.Xd)(Gb.byteLength) > Ob.vc) return void this.ringRefused(bb, ub, hb, new Hb(`${pb(hb)}'s record is ${Gb.byteLength-Ub.b} bytes, past the cmd ring's ${Ob.vc}`), Lb);
          const Yb = {
            file: bb,
            url: hb,
            payload: Gb,
            glb: Bb,
            attempt: ub
          };
          Lb ? this.ready.unshift(Yb) : this.ready.push(Yb)
        }))
      }
      async fallBack(bb, ub, hb, Bb) {
        var Ob;
        let Gb = null,
          Ub = Bb;
        try {
          Gb = await this.files.shippedUrl(bb)
        } catch (Lb) {
          Ub = Lb
        }
        this.pending.get(bb) === ub && (null !== Gb && Gb !== hb ? (null === (Ob = this.onPackFileFailed) || void 0 === Ob || Ob.call(this, bb, Bb), ub.ask || this.drawn.get(bb) !== Gb ? (ub.url = Gb, ub.inPlaceOf = hb, this.load(bb, ub, Gb)) : this.pending.delete(bb)) : this.giveUp(bb, ub, hb, Ub))
      }
      ringRefused(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Gb.n)(hb) ? this.fallBack(bb, ub, hb, Bb): this.giveUp(bb, ub, hb, Bb, Ob)
      }
      giveUp(bb, ub, hb, Ob) {
        let Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: bb,
          url: pb(hb),
          error: Ob,
          startup: this.startupLeft.has(bb)
        }), ub.ask || !this.drawn.has(bb) ? (0, Bb.U)(Ob) ? this.queueRecord(bb, ub, hb, ab, Promise.resolve((0, Ub.n)(bb, (0, Lb.l)(Ob))), Gb) : this.buildFile(bb, ub, hb, ab, Gb) : this.pending.delete(bb)
      }
      async resendIfChanged(bb) {
        var ub;
        if (0 !== (bb & Gb.f)) return;
        let hb;
        try {
          hb = await this.wanted(bb)
        } catch {
          return
        }(null !== (ub = hb.url) && void 0 !== ub ? ub : void 0) === this.drawn.get(bb) || this.pending.has(bb) || this.written.has(bb) || this.fetch(bb, this.kw(bb, !1), hb.url, hb.inPlaceOf)
      }
      drain(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === bb) return;
        let hb = 0,
          Bb = 0;
        for (; Bb < this.ready.length && hb < 262144;) {
          const Lb = this.ready[Bb];
          if (this.written.has(Lb.file)) {
            Bb++;
            continue
          }
          const ab = this.nextSeq;
          new DataView(Lb.payload.buffer, Lb.payload.byteOffset, Lb.payload.byteLength).setUint32(Ub.f, ab, !0);
          const wb = Lb.attempt.MS && Lb.glb.byteLength > 0 && this.drawn.get(Lb.file) === Lb.url;
          if (bb(Yb, wb ? 1 : 0, Lb.payload)) {
            if (this.nextSeq = ab >= Sb - 1 ? 1 : ab + 1, this.ready.splice(Bb, 1), hb += Lb.payload.byteLength, this.pending.delete(Lb.file), this.startupLeft.delete(Lb.file), this.written.set(Lb.file, {
                seq: ab,
                url: Lb.url,
                empty: 0 === Lb.glb.byteLength,
                attempt: Lb.attempt
              }), Lb.glb.byteLength > 0) try {
              var Ob;
              null === (Ob = this.onWritten) || void 0 === Ob || Ob.call(this, Lb.file, Lb.glb)
            } catch (Gb) {
              console.warn("ModelFeed: reading the file's images failed", Gb)
            }
          } else {
            if (null === ub || 0 === Lb.glb.byteLength || ub(Lb.payload.byteLength)) return;
            this.ready.splice(Bb, 1);
            const bb = new Hb(`${pb(Lb.url)}'s record is ${Lb.payload.byteLength-Ub.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Lb.file, Lb.attempt, Lb.url, bb, !0)
          }
        }
      }
    }

    function Xb(bb) {
      return new wb(`presentation refused ${pb(bb)}`)
    }

    function pb(bb) {
      return bb.startsWith("data:") ? `${bb.slice(0,Math.min(Math.max(bb.indexOf(","),5),64))},...` : bb
    }
  },
  40391: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      f: () => Gb,
      j: () => ab,
      n: () => Lb,
      q: () => Sb,
      u: () => Yb
    });
    var Bb = hb(2688),
      Ob = hb(3005);
    const Gb = 2147483648,
      Ub = 1073741824;

    function Lb(bb) {
      return bb.startsWith("data:")
    }

    function Yb(bb) {
      let {
        onTableFailed: ub,
        packUrl: hb
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Bb = Sb();
      Bb.catch((bb => {
        null === ub || void 0 === ub || ub(bb)
      }));
      const Ob = async ub => (await Bb).fileUrl((ub & ~Gb) >>> 0, bb);
      return {
        startup: [],
        url: async bb => {
          if (hb && 0 === (bb & Gb)) {
            const ub = await Bb,
              Ob = ub.filePackName(bb),
              Gb = null === Ob || "lifeform" === ub.fileSource(bb) ? null : hb(Ob);
            if (null !== Gb) return Gb
          }
          return Ob(bb)
        },
        shippedUrl: Ob
      }
    }

    function Sb() {
      return hb.e(41).then((() => hb(42772)))
    }
    async function ab(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return bb.startsWith("data:") ? (0, Ob.b)(bb.slice(bb.indexOf(",") + 1), ub) : (0, Bb.G)(bb, {
        spare: ub
      })
    }
  },
  40398: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      f: () => ab,
      h: () => Zb,
      k: () => ob,
      n: () => Xb,
      q: () => wb,
      r: () => pb
    });
    const Bb = 826427981,
      Ob = 1,
      Gb = 2,
      Ub = 44,
      Lb = 46,
      Yb = 58,
      Sb = 8,
      ab = 4;

    function Hb(bb, ub, hb) {
      const Ob = (new TextEncoder).encode(hb),
        Gb = Sb + 4 * (ub.length + 2),
        Ub = new Uint8Array(Gb + (Ob.byteLength + 3 & -4)),
        Lb = new DataView(Ub.buffer);
      return Lb.setUint32(0, bb, !0), Lb.setUint32(Sb, Bb, !0), ub.forEach(((bb, ub) => {
        Lb.setUint32(Sb + 4 * (ub + 1), bb, !0)
      })), Lb.setUint32(Gb - 4, Ob.byteLength, !0), Ub.set(Ob, Gb), Ub
    }

    function wb(bb, ub) {
      return Hb(bb, [Gb], ub)
    }

    function Zb(bb, ub) {
      return Hb(bb, [Ob, Lb], ub)
    }

    function Xb(bb, ub) {
      return Hb(bb, [Ob, Yb], ub)
    }

    function pb(bb, ub) {
      return Hb(bb, [Ob, Ub], ub)
    }

    function ob(bb) {
      const ub = Sb;
      if (bb.byteLength < ub + 12) return !1;
      const hb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      return hb.getUint32(ub, !0) === Bb && hb.getUint32(ub + 4, !0) === Ob && hb.getUint32(ub + 8, !0) === Ub
    }
  },
  40378: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Cb,
      d: () => ob,
      f: () => Wb,
      h: () => nb,
      j: () => jb,
      k: () => Db,
      l: () => lb
    });
    var Bb = hb(4564),
      Ob = hb(40272);
    const Gb = 1,
      Ub = 18,
      Lb = 19,
      Yb = 20,
      Sb = {
        [Gb]: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer",
        16: "draw feedback loop",
        [Ub]: "retry linked",
        [Lb]: "fallback linked",
        [Yb]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function ab(bb, ub, hb) {
      return bb === Ub ? "program retry" : bb === Gb ? "program link" : bb === Lb || bb === Yb ? `program ${ub} ${hb}` : "program"
    }
    const Hb = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      wb = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      Zb = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Xb = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      pb = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function ob(bb, ub) {
      return bb === Bb.f.RenderSerialLinks && void 0 !== pb[15 & ub]
    }
    const Ab = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function lb(bb) {
      return String(bb).replace(/\d/g, (bb => String.fromCharCode(97 + Number(bb))))
    }

    function Kb(bb, ub) {
      var hb;
      return null !== (hb = bb[ub]) && void 0 !== hb ? hb : lb(ub)
    }

    function Wb() {
      return lb((0, Ob.c)())
    }

    function Cb(bb, ub) {
      switch (bb) {
        case Bb.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${Kb(wb,ub)}`, instance: String(ub), group: String(bb)
          };
        case Bb.f.RenderChunkMeshNotDrawn: {
          const hb = 0 === (128 & ub) ? "" : " shortage",
            Bb = ub >>> 8;
          return {
            words: ` ${Kb(Zb,127&ub)}${hb}${0===Bb?"":` kind ${lb(Bb)}`}`,
            instance: String(ub),
            group: String(bb)
          }
        }
        case Bb.f.RenderInternal: {
          const hb = Kb(Hb, 255 & ub),
            Bb = ub >>> 8 & 255;
          if (0 === Bb) return {
            words: ` ${hb}`,
            instance: String(ub),
            group: String(bb)
          };
          const Ob = Kb(Sb, Bb),
            Gb = ub >>> 16;
          return {
            words: ` ${hb} ${Ob} program ${lb(Gb)}`,
            instance: `${hb} ${Ob} ${Gb}`,
            group: ab(Bb, Ob, hb),
            gpuDetails: {
              programFailure: Ob,
              program: String(Gb)
            }
          }
        }
        case Bb.f.RenderSerialLinks: {
          if (ob(bb, ub)) {
            const bb = function(bb) {
              const ub = (ub, hb) => lb(bb >>> ub & (1 << hb) - 1),
                hb = bb >>> 30 & 1 ? " restored" : "";
              return `link census ${pb[15&bb]} linked ${ub(22,8)} failed ${ub(4,6)} retried ${ub(10,6)} fallback ${ub(16,6)}${hb}`
            }(ub);
            return {
              words: ` ${bb}`,
              instance: String(15 & ub),
              group: "link census",
              gpuDetails: {
                linkCensus: bb
              }
            }
          }
          const hb = Kb(Xb, ub);
          return {
            words: ` ${hb}`,
            instance: String(ub),
            group: String(bb),
            gpuDetails: {
              serialLinks: hb
            }
          }
        }
        case Bb.f.RenderGlErrorAfterRestore: {
          const hb = Kb(Ab, 65535 & ub),
            Bb = ub >>> 16,
            Ob = 65535 !== Bb;
          return {
            words: ` ${hb}${Ob?` program ${lb(Bb)}`:""}`,
            instance: String(ub),
            group: String(bb),
            gpuDetails: Ob ? {
              glError: hb,
              program: String(Bb)
            } : {
              glError: hb
            }
          }
        }
        default:
          return null
      }
    }
    const db = 2,
      rb = new Map;

    function jb(bb) {
      let {
        group: ub,
        instance: hb
      } = bb, Bb = rb.get(ub);
      return void 0 === Bb && (Bb = [], rb.set(ub, Bb)), !Bb.includes(hb) && (Bb.length >= db || (Bb.push(hb), !1))
    }

    function nb() {
      return rb.size > 0
    }

    function Db() {
      rb.clear()
    }
  },
  40310: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ab,
      h: () => lb,
      k: () => ob,
      n: () => db
    });
    var Bb = hb(6375),
      Ob = hb(16),
      Gb = hb(4077),
      Ub = hb(4564),
      Lb = hb(6367),
      Yb = hb(40318);

    function Sb(bb, ub) {
      const hb = (0, Lb.d)(ub.variants);
      return bb.setShaderPack(hb.variantFlags, hb.hooks, hb.moduleCodes, (0, Yb.z)(ub.layers), Yb.i[ub.uS], ub.keepCircleShadows)
    }
    const ab = 0,
      Hb = 1,
      wb = 2,
      Zb = "shaderPack:failedToCompile",
      Xb = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      pb = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function ob(bb, ub) {
      var hb;
      const Bb = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.reason) && void 0 !== hb ? hb : "none";
      return Xb.has(Bb) ? {
        messageKey: ub ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Bb && "override" === (null === bb || void 0 === bb ? void 0 : bb.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: pb.has(Bb) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const Ab = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class lb extends Error {
      constructor(bb) {
        super(`the shader pack can't run in this game: ${bb}`), this.messageKey = bb, this.name = "ShaderPackJoinError"
      }
    }
    const Kb = "strict";
    class Wb {
      constructor(bb) {
        this.deps = bb, this.pagePack = void 0, this.loaded = null, this.uS = Kb, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = bb.load().catch((ub => (bb.warn("the shader pack could not load: the game draws without it", ub), {
          status: "none"
        }))).then((bb => (this.loaded = bb, "active" === bb.status && (this.handOverToPreviews(bb), null !== bb.harnessPolicy && (this.uS = bb.harnessPolicy, this.handOver())), bb)))
      }
      async join(bb) {
        this.leave();
        const ub = this.game,
          [hb, Ob] = await Promise.all([this.pagePack, this.policyOf(bb)]);
        if (ub !== this.game || "none" === hb.status) return null;
        const Gb = "active" === hb.status ? hb.pack.variants : hb.variants,
          Ub = (0, Bb.i)(Gb, Ob);
        if (Ub && "active" === hb.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Ub) {
          const bb = this.cantRun(hb, Ob);
          if (null !== bb) return bb
        } else if ("blocked" === hb.status || null === this.deps.core) return null;
        return this.uS = Ob, this.handOver(), Ub && this.refused ? Zb : (this.joined = !0, this.offInThisGame = !Ub, null)
      }
      async replay(bb) {
        const ub = await this.join(bb);
        null === ub ? this.playable() : this.deps.failInGame(ub)
      }
      cantRun(bb, ub) {
        const {
          core: hb,
          noWebGpu: Bb
        } = this.deps;
        if ("blocked" === bb.status) {
          return "shaderPack:failedUnchecked" === bb.messageKey && null === hb && Bb.noAdapter ? Bb.messageKey : bb.messageKey
        }
        return this.refused || this.failedPolicies.has(ub) ? Zb : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var bb;
        return this.runsInJoinedGame() && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) ? function(bb, ub) {
          const hb = bb.filter((bb => (0, Bb.i)([bb], ub))),
            Ob = bb => hb.some((ub => ub[bb]));
          return {
            sceneDepth: Ob("sceneDepth"),
            sunShadow: Ob("sunShadow"),
            airShadow: Ob("airShadow")
          }
        }(this.loaded.pack.variants, this.uS) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Zb) : (null !== this.couldntRun ? this.notify(Gb.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.uS) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(bb) {
        for (const {
            code: ub,
            detail: hb
          }
          of bb)
          if (ub === Ub.f.RenderShaderPackNotRun) switch (255 & hb) {
            case ab:
              this.refused = !0, this.failed();
              break;
            case Hb:
              this.failedPolicies.add(this.uS), this.failed();
              break;
            case wb:
              this.failedModelPolicies.add(this.uS), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Zb) : this.failedWhileJoining = !0)
      }
      fail(bb) {
        this.leave(), this.deps.failInGame(bb)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(bb, ub) {
        const hb = this.game;
        this.deps.notify(bb, (() => hb === this.game && this.joined), ub)
      }
      handOver() {
        var bb;
        const {
          core: ub
        } = this.deps;
        null !== ub && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) && (Sb(ub, {
          ...this.loaded.pack,
          uS: this.uS
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(bb) {
        let {
          pack: ub,
          harnessPolicy: hb
        } = bb;
        const {
          previews: Bb
        } = this.deps;
        null !== Bb && Sb(Bb, {
          ...ub,
          uS: null !== hb && void 0 !== hb ? hb : Kb
        })
      }
      policyOf(bb) {
        return this.deps.policyOf(bb).catch((bb => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", bb), Kb)))
      }
    }
    const Cb = "wasmShaderPackNotice";

    function db(bb, ub, hb, Bb) {
      return Ob.i.subscribe(Cb, (bb => {
        let {
          translationKey: ub,
          stillCurrent: hb,
          reasonKey: Bb
        } = bb;
        hb() && Ob.i.vp("chat", (0, Gb.h)(ub, Bb))
      })), new Wb({
        load: rb,
        policyOf: jb,
        core: bb,
        previews: ub,
        noWebGpu: hb,
        notify: (bb, ub, hb) => {
          const Bb = {
            translationKey: bb,
            stillCurrent: ub,
            reasonKey: hb
          };
          Ob.i.vp(Cb, Bb, !0)
        },
        failInGame: bb => {
          Ob.i.vp(Gb.g, bb)
        },
        warn: Bb
      })
    }
    async function rb() {
      const [{
        shaderPackPage: bb,
        harnessShaderPackMode: ub
      }, {
        shaderPackTextures: Bb
      }] = await Promise.all([hb.e(130).then((() => hb(38833))), hb.e(131).then((() => hb(6365)))]), Ob = await bb.load();
      return "active" !== Ob.status ? Ob : {
        status: "active",
        pack: {
          variants: Ob.pack.variants,
          layers: Bb().layers,
          keepCircleShadows: Ob.pack.keepCircleShadows
        },
        harnessPolicy: ub()
      }
    }
    async function jb(bb) {
      var ub;
      const [{
        harnessShaderPackMode: Bb
      }, {
        getShaderPackPolicy: Ob
      }] = await Promise.all([hb.e(130).then((() => hb(38833))), hb.e(90).then((() => hb(40720)))]);
      return null !== (ub = Bb()) && void 0 !== ub ? ub : Ob(bb)
    }
  },
  40413: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      h: () => ob,
      j: () => Yb,
      l: () => Sb,
      m: () => ab,
      n: () => wb
    });
    var Bb = hb(40417),
      Ob = hb(40421);
    const Gb = "atlas:",
      Ub = 3e4;
    class Lb extends Error {
      constructor(bb, ub) {
        super(`fetching ${bb} answered HTTP ${ub}`), this.url = bb, this.status = ub, this.name = "TerrainTextureFetchError"
      }
    }

    function Yb(bb) {
      if (!bb.startsWith(Gb)) return null;
      const ub = Number(bb.slice(Gb.length));
      return Number.isInteger(ub) && ub >= 0 ? ub : null
    }
    async function Sb() {
      const bb = await hb.e(202).then((() => hb(33950)));
      return {
        atlasSheets: bb.blockAtlasUrls,
        texture: ub => {
          var hb, Bb, Gb;
          return null !== (hb = null !== (Bb = null !== (Gb = bb.animatedBlockTextures[ub]) && void 0 !== Gb ? Gb : bb.rotatedBlockTextures[ub]) && void 0 !== Bb ? Bb : Ob.c[ub]) && void 0 !== hb ? hb : null
        }
      }
    }
    async function ab(bb) {
      const ub = new AbortController,
        hb = setTimeout((() => {
          ub.abort(new DOMException(`${bb} took over ${Ub} ms`, "TimeoutError"))
        }), Ub);
      let Bb;
      try {
        const hb = await fetch(bb, {
          signal: ub.signal
        });
        if (!hb.ok) throw new Lb(bb, hb.status);
        Bb = await hb.blob()
      } finally {
        clearTimeout(hb)
      }
      const Ob = await createImageBitmap(Bb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return wb(Ob)
      } finally {
        Ob.close()
      }
    }
    const Hb = 8192;

    function wb(bb) {
      const {
        width: ub,
        height: hb
      } = bb, Ob = Math.max(1, Math.min(hb, Hb)), Gb = (0, Bb.g)(ub, Ob, {
        willReadFrequently: !0
      });
      if (!Gb) throw new Error("no 2D context to read the texture back");
      Gb.globalCompositeOperation = "copy";
      const Ub = new Uint8Array(ub * hb * 4);
      for (let Bb = 0; Bb < hb; Bb += Ob) {
        const Lb = Math.min(Ob, hb - Bb);
        Gb.drawImage(bb, 0, Bb, ub, Lb, 0, 0, ub, Lb), Ub.set(Gb.getImageData(0, 0, ub, Lb).data, Bb * ub * 4)
      }
      return {
        width: ub,
        height: hb,
        pixels: Ub
      }
    }
    async function Zb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab;
      const Bb = [],
        Ob = await Promise.all(bb.map((async bb => {
          var Ob, Ub;
          const Lb = null !== (Ob = null === (Ub = ub.decoded) || void 0 === Ub ? void 0 : Ub.call(ub, bb)) && void 0 !== Ob ? Ob : null,
            Sb = null === Lb ? function(bb, ub) {
              if (bb.startsWith(Gb)) {
                var hb;
                const Bb = Yb(bb);
                return null === Bb ? null : null !== (hb = ub.atlasSheets[Bb]) && void 0 !== hb ? hb : null
              }
              return ub.texture(bb)
            }(bb, ub) : null,
            ab = null !== Lb && void 0 !== Lb ? Lb : null === Sb ? null : hb(Sb);
          if (null === ab) return Bb.push({
            name: bb,
            url: Sb,
            error: new Error(`no URL for terrain texture ${bb}`)
          }), null;
          try {
            const ub = await ab;
            if (ub.pixels.byteLength !== ub.width * ub.height * 4) throw new Error(`decoded ${ub.pixels.byteLength} bytes for ${ub.width}x${ub.height} texels`);
            return {
              name: bb,
              texture: ub
            }
          } catch (Hb) {
            return Bb.push({
              name: bb,
              url: Sb,
              error: Hb
            }), null
          }
        }))),
        Ub = Ob.filter((bb => null !== bb)),
        Lb = new Uint32Array(2 * Ub.length);
      Ub.forEach(((bb, ub) => {
        let {
          texture: hb
        } = bb;
        Lb[2 * ub] = hb.width, Lb[2 * ub + 1] = hb.height
      }));
      return {
        handOver: {
          names: Ub.map((bb => {
            let {
              name: ub
            } = bb;
            return ub
          })),
          textures: Ub.map((bb => {
            let {
              texture: ub
            } = bb;
            return ub.pixels
          })),
          sizes: Lb
        },
        failures: Bb
      }
    }
    const Xb = [2e3, 1e4, 3e4, 6e4, 12e4];

    function pb() {}
    class ob {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xb,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = bb, this.retryMs = ub, this.keepBelow = hb, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sb,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Bb = ++this.started,
          Ob = {
            decode: hb.decode,
            wholeAtlas: hb.wholeAtlas
          };
        return this.loadAndHandOver(ub, Ob, bb, (() => {
          var bb;
          return Bb < this.landed || !1 === (null === (bb = hb.wanted) || void 0 === bb ? void 0 : bb.call(hb))
        }), {
          onTaken: (bb, hb) => {
            this.landed = Bb, this.current = {
              mine: Bb,
              sources: ub,
              load: Ob,
              HZ: bb,
              failed: hb
            }
          }
        })
      }
      restore(bb) {
        var ub;
        const hb = this.current;
        if (null === hb) return Promise.resolve(null);
        if ((null === (ub = this.restoring) || void 0 === ub ? void 0 : ub.mine) === hb.mine) return this.restoring.done;
        const Bb = {
          mine: hb.mine,
          done: this.restoreLanded(hb, bb).finally((() => {
            this.restoring === Bb && (this.restoring = null)
          }))
        };
        return this.restoring = Bb, Bb.done
      }
      async restoreLanded(bb, ub) {
        const hb = () => this.landed !== bb.mine,
          {
            HZ: Bb
          } = bb;
        if (null !== Bb) return this.stopped() ? null : this.core.setTerrainTextures(Bb.names, Bb.textures, Bb.sizes);
        let Ob = ub;
        for (let Gb = 0;; Gb++) {
          const ub = this.retryMs.at(Gb),
            Bb = {
              allOrNothingExcept: void 0 === ub ? void 0 : bb.failed
            },
            Ub = await this.loadAndHandOver(bb.sources, bb.load, Ob, hb, Bb);
          if (!1 !== Ub || void 0 === ub || this.stopped()) return Ub;
          if (Ob = pb, await new Promise((bb => {
              setTimeout(bb, ub)
            })), hb()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Gb = this.core.terrainTextureNames();
        var Ub;
        if (0 === Gb.length) return null === (Ub = Ob.onTaken) || void 0 === Ub || Ub.call(Ob, null, new Set), !0;
        let Lb, Sb;
        try {
          Lb = await bb(), Sb = await Zb(Gb, Lb, ub.decode)
        } catch (ob) {
          return Bb() ? null : (hb({
            name: null,
            url: null,
            error: ob
          }), !1)
        }
        if (Bb() || this.stopped()) return null;
        for (const Yb of Sb.failures) hb(Yb);
        const ab = Ob.allOrNothingExcept;
        if (void 0 !== ab && Sb.failures.some((bb => {
            let {
              name: ub
            } = bb;
            return null === ub || !ab.has(ub)
          })) || !0 === ub.wholeAtlas && Sb.failures.some((bb => {
            let {
              name: ub
            } = bb;
            return null === ub || null !== Yb(ub)
          }))) return !1;
        const {
          handOver: Hb
        } = Sb, wb = function(bb) {
          return bb.textures.reduce(((bb, ub) => bb + ub.byteLength), 0)
        }(Hb) < this.keepBelow, Xb = this.core.setTerrainTextures(Hb.names, Hb.textures, Hb.sizes, wb ? void 0 : () => {
          !async function(bb, ub) {
            await ub;
            for (const {
                buffer: Bb
              }
              of bb) {
              const bb = Bb;
              var hb;
              if (!bb.detached) null === (hb = bb.transfer) || void 0 === hb || hb.call(bb, 0)
            }
          }(Hb.textures, Lb.heldUntil)
        });
        if (Xb) {
          var pb;
          const bb = new Set(Sb.failures.flatMap((bb => {
            let {
              name: ub
            } = bb;
            return null === ub ? [] : [ub]
          })));
          null === (pb = Ob.onTaken) || void 0 === pb || pb.call(Ob, wb ? Hb : null, bb)
        }
        return Xb
      }
    }
  },
  36489: (bb, ub, hb) => {
    function Bb(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    hb.d(ub, {
      e: () => Ob,
      f: () => Ub,
      i: () => Yb,
      j: () => Lb,
      m: () => Bb,
      q: () => Gb
    });
    const Ob = "https://discord.gg/playbloxd";

    function Gb(bb) {
      return "download" === bb ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Ub(bb, ub) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ub ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: ub,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Lb() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Yb(bb, ub, hb) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: hb ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: ub ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6367: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Wb,
      h: () => Cb,
      l: () => lb,
      m: () => Ab
    });
    var Bb = hb(6375);
    const Ob = 6,
      Gb = 3,
      Ub = 1,
      Lb = 2,
      Yb = 4,
      Sb = 8,
      ab = 16,
      Hb = 32,
      wb = 64,
      Zb = 128,
      Xb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pb(bb) {
      if (!bb) return 0;
      const ub = Xb.indexOf(bb);
      if (ub <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ub
    }

    function ob(bb) {
      if (0 === bb) return null;
      const ub = Xb[bb];
      if (void 0 === ub) throw new Error(`${bb} is not a shader pack hook function id`);
      return ub
    }

    function Ab(bb) {
      const ub = Bb.b.length;
      return {
        strict: bb >= ub,
        program: Bb.b[bb % ub]
      }
    }

    function lb(bb) {
      return Number(bb.strict) * Bb.b.length + Bb.b.indexOf(bb.program)
    }

    function Kb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Wb(bb) {
      const ub = {
        variantFlags: new Uint8Array(Ob),
        hooks: new Uint8Array(Ob * Gb),
        moduleCodes: Array(Ob).fill(""),
        reads: Array(2 * Ob).fill("")
      };
      for (const hb of bb) {
        const bb = lb(hb.key),
          Bb = (bb, ub) => null === hb.hooks.surface || hb.reads.fragment.includes(bb) ? 0 : ub;
        ub.variantFlags[bb] = (hb.sceneDepth ? Ub : 0) | (hb.movesVertices ? Lb : 0) | (hb.sunShadow ? Yb : 0) | (hb.airShadow ? Sb : 0) | (hb.discards ? ab : 0) | Bb("localPosition", Hb) | Bb("enchantSpeed", wb) | Bb("enchantTier", Zb), ub.hooks[bb * Gb] = pb(hb.hooks.vertex), ub.hooks[bb * Gb + 1] = pb(hb.hooks.surface), ub.hooks[bb * Gb + 2] = pb(hb.hooks.light), ub.moduleCodes[bb] = hb.moduleCode, ub.reads[2 * bb] = hb.reads.vertex.join(" "), ub.reads[2 * bb + 1] = hb.reads.fragment.join(" ")
      }
      return ub
    }

    function Cb(bb) {
      const {
        hooks: ub,
        moduleCodes: hb,
        reads: Bb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Ob) => {
        const Hb = Ob * Gb;
        return {
          key: Ab(Ob),
          hooks: {
            vertex: ob(ub[Hb]),
            surface: ob(ub[Hb + 1]),
            light: ob(ub[Hb + 2])
          },
          moduleCode: hb[Ob],
          sceneDepth: 0 !== (bb & Ub),
          sunShadow: 0 !== (bb & Yb),
          airShadow: 0 !== (bb & Sb),
          movesVertices: 0 !== (bb & Lb),
          discards: 0 !== (bb & ab),
          reads: {
            vertex: Kb(Bb[2 * Ob]),
            fragment: Kb(Bb[2 * Ob + 1])
          }
        }
      }))
    }
  },
  40318: (bb, ub, hb) => {
    hb.d(ub, {
      D: () => Zb,
      E: () => Xb,
      b: () => Ob,
      d: () => Bb,
      e: () => wb,
      h: () => ab,
      i: () => ob,
      m: () => Gb,
      p: () => Lb,
      t: () => Yb,
      v: () => Ub,
      z: () => pb
    });
    const Bb = 3,
      Ob = 0,
      Gb = 1,
      Ub = 2,
      Lb = {
        uniform: 3,
        Sw: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Yb = 10,
      Sb = "BloxdPackInputs",
      ab = "bloxdPackInputs",
      Hb = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      wb = 80;

    function Zb() {
      const bb = Hb.map((bb => {
        let {
          name: ub,
          type: hb
        } = bb;
        return `    ${ub}: ${hb},\n`
      })).join("");
      return `struct ${Sb} {\n${bb}}\n@group(${Bb}) @binding(${Ob}) var<uniform> ${ab}: ${Sb};\n`
    }

    function Xb(bb, ub) {
      const hb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, wb),
        [Bb, Ob, Gb, Ub, Lb, Yb] = Hb;
      hb.setFloat32(Bb.offset, ub.seconds, !0), hb.setUint32(Ob.offset, ub.lit ? 1 : 0, !0);
      for (let Sb = 0; Sb < 3; Sb++) hb.setInt32(Gb.offset + 4 * Sb, ub.renderOffset[Sb], !0), hb.setFloat32(Ub.offset + 4 * Sb, ub.Q_[Sb], !0), hb.setFloat32(Lb.offset + 4 * Sb, ub.eyePosition[Sb], !0), hb.setFloat32(Yb.offset + 4 * Sb, ub.shadowDirection[Sb], !0)
    }

    function pb(bb) {
      const ub = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, hb) => {
        let {
          id: Bb,
          rotation: Ob
        } = bb;
        ub[hb] = 65535 & Bb | (3 & Ob) << 16
      })), ub
    }
    const ob = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6375: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      f: () => Ub,
      i: () => Lb,
      k: () => Ob,
      o: () => Gb
    });
    const Bb = ["terrain", "liquid", "model"];

    function Ob() {
      const bb = [];
      for (const ub of [!1, !0])
        for (const hb of Bb) bb.push({
          strict: ub,
          program: hb
        });
      return bb
    }

    function Gb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Ub(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Lb(bb, ub) {
      return "off" !== ub && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ub) && !Ub(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);