export const id = 87;
export const ids = [87];
export const modules = {
  38902: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      f: () => Cd,
      h: () => Kd,
      i: () => od,
      k: () => gd,
      l: () => Zd
    });
    const pd = "A valid external Instance reference no longer exists.",
      Nd = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      Wd = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Pd = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Zd(dd, Jd) {
      return dd ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(dd) {
        var Jd;
        const kd = null !== (Jd = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(dd)) && void 0 !== Jd ? Jd : /failed with ([A-Z][A-Z0-9_]+)/.exec(dd);
        return kd ? kd[1] : dd.includes(pd) ? "gpu_process_lost" : "other"
      }(Jd)
    }

    function gd(dd) {
      return `${(null===dd||void 0===dd?void 0:dd.vendor)||"unknown vendor"} ${(null===dd||void 0===dd?void 0:dd.architecture)||"unknown architecture"}`
    }

    function Cd(dd) {
      return ld(dd)[1]
    }

    function Kd(dd) {
      return ld(dd)[2]
    }

    function od(dd) {
      return Qd(Wd, dd)[1]
    }

    function ld(dd) {
      return Qd(Nd, dd)
    }

    function Qd(dd, Jd) {
      var kd;
      return null !== (kd = dd.find((dd => {
        let [kd] = dd;
        return Jd < kd
      }))) && void 0 !== kd ? kd : dd[dd.length - 1]
    }
  },
  39222: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      g: () => Nd
    });
    const pd = 45e3;
    class Nd extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36453: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      f: () => Nd,
      j: () => Wd,
      l: () => Pd
    });
    const pd = 1024,
      Nd = 1024 * pd;

    function Wd(dd) {
      return 2 ** Math.floor(Math.log2(Math.max(1, dd / Nd)))
    }

    function Pd(dd) {
      return (dd / Nd).toFixed(1)
    }
  },
  36651: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      e: () => Zd,
      h: () => Pd,
      j: () => gd,
      l: () => Cd,
      m: () => Kd
    });
    var pd = kd(193);
    const Nd = 32 * kd(36453).f,
      Wd = 6144,
      Pd = 4608,
      Zd = 512;

    function gd(dd) {
      return Math.floor(Nd * dd / Wd)
    }

    function Cd(dd) {
      const Jd = dd - Math.floor(dd / 6);
      let kd = pd.g.maxChunkHorizAddDistance,
        Nd = pd.g.maxChunkVertAddDistance;
      if (Kd(kd + 1, Nd + 1) <= Jd) return null;
      for (; Kd(kd + 1, Nd + 1) > Jd && (kd > 0 || Nd > 0);) kd > Nd ? kd-- : Nd--;
      return {
        horizontal: kd,
        vertical: Nd
      }
    }

    function Kd(dd, Jd) {
      const kd = Math.max(dd, Jd);
      let pd = 0;
      for (let Nd = -kd; Nd <= kd; Nd++)
        for (let Wd = -kd; Wd <= kd; Wd++)
          for (let Pd = -kd; Pd <= kd; Pd++) od(dd, Jd, Nd, Wd, Pd) && pd++;
      return pd
    }

    function od(dd, Jd, kd, pd, Nd) {
      const Wd = kd * kd + Nd * Nd;
      return dd === Jd ? Wd + pd * pd <= dd * dd : dd > Jd ? Math.abs(pd) <= Jd && Wd + pd * pd <= dd * dd : Wd <= dd * dd && Wd + pd * pd <= Jd * Jd
    }
  },
  40860: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      h: () => Wd,
      j: () => Zd,
      k: () => Kd,
      m: () => gd,
      p: () => Pd
    });
    var pd = kd(193);
    const Nd = 3e3,
      Wd = 15e3;

    function Pd(dd) {
      const Jd = dd.endsWith(pd.k);
      return {
        text: (Jd ? dd.slice(0, -pd.k.length) : dd) || null,
        dropsCache: Jd
      }
    }
    const Zd = "Either your internet isn't working or this is a bug.";

    function gd(dd, Jd) {
      const kd = Kd(dd);
      return null !== kd.name && "" === pd.e[kd.name].text && null !== Jd ? Jd : kd.reason
    }
    const Cd = "You were removed from the game.";

    function Kd(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Nd = null !== (Jd = Object.keys(pd.e).find((Jd => pd.e[Jd].code === dd))) && void 0 !== Jd ? Jd : null;
      if (null === Nd) return {
        code: dd,
        name: Nd,
        reason: null !== kd && void 0 !== kd ? kd : `${Zd}\nCode: ${dd}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Wd,
        canReconnect: Pd = !1
      } = pd.e[Nd], gd = dd === pd.e.outdatedVersion.code || dd === pd.e.loadRecaptchaError.code;
      return {
        code: dd,
        name: Nd,
        reason: "" !== Wd ? Wd : null !== kd && void 0 !== kd ? kd : dd === pd.e.gameOrPluginKick.code ? Cd : `Code: ${dd}`,
        canReconnect: Pd,
        automaticallyReconnect: dd === pd.e.customGameUpdated.code || dd === pd.e.duplicateLobbyNameError.code,
        requiresRefresh: gd
      }
    }
  },
  4680: (dd, Jd, kd) => {
    kd.d(Jd, {
      $b: () => xd,
      A: () => Pd,
      Ab: () => JJ,
      B: () => Sd,
      Bc: () => pd.ib,
      Bd: () => pd.Tb,
      C: () => LJ,
      Cc: () => pd.jb,
      Eb: () => pJ,
      F: () => wd,
      Fc: () => pd.sb,
      Fd: () => pd.Yb,
      G: () => pd.d,
      Gd: () => Wd,
      Hc: () => OJ,
      Ib: () => pd.M,
      Id: () => ed,
      J: () => Cd,
      Kc: () => oJ,
      L: () => pd.h,
      Lb: () => Nd.g,
      Ld: () => CJ,
      Md: () => Dd,
      Nb: () => sd,
      Nc: () => WJ,
      O: () => dJ,
      Pd: () => Ed,
      Qc: () => pd.tb,
      Rb: () => Ud,
      S: () => pd.l,
      Sd: () => yd,
      U: () => zd,
      Uc: () => pd.vb,
      Vb: () => md,
      Wc: () => pd.xb,
      Wd: () => rd,
      X: () => pd.q,
      Xb: () => Fd,
      Zb: () => pd.T,
      _: () => pd.u,
      _b: () => bd,
      _c: () => Ad,
      ab: () => pd.w,
      b: () => kJ,
      bd: () => pd.Db,
      be: () => cd,
      c: () => Od,
      cc: () => ZJ,
      db: () => od,
      de: () => td,
      ed: () => pd.Eb,
      fe: () => ud,
      g: () => Ld,
      gb: () => Id,
      gc: () => Gd,
      ge: () => gJ,
      h: () => KJ,
      ib: () => pd.y,
      ic: () => lJ,
      id: () => pd.Gb,
      ie: () => eJ,
      j: () => ad,
      jb: () => pd.B,
      ke: () => vd,
      lc: () => Nd.l,
      ld: () => pd.Lb,
      m: () => Bd,
      nb: () => Td,
      ne: () => Vd,
      oe: () => fd,
      pc: () => Rd,
      pd: () => pd.Ob,
      q: () => pd.b,
      qe: () => Xd,
      rb: () => PJ,
      rc: () => NJ,
      sd: () => pd.Qb,
      tb: () => Kd,
      td: () => Md,
      te: () => jd,
      u: () => QJ,
      ub: () => pd.F,
      uc: () => pd.bb,
      vb: () => hd,
      ve: () => gd,
      w: () => Yd,
      xb: () => Hd,
      xc: () => pd.eb,
      xd: () => pd.Sb,
      xe: () => nd,
      yb: () => pd.L,
      ye: () => RJ,
      zc: () => pd.gb,
      ze: () => Qd
    });
    var pd = kd(4688),
      Nd = kd(2337);
    const Wd = Math.round(1e3 / pd.Yb),
      Pd = 4,
      Zd = 2;

    function gd() {
      return crypto.getRandomValues(new Uint32Array(Zd))
    }
    const Cd = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kd = 16,
      od = {
        Draws: 1,
        NetAll: 2
      },
      ld = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Qd(dd) {
      return (dd.nametagsHidden ? qd.NametagsHidden : 0) | (dd.crouchToggle ? qd.CrouchToggle : 0) | (dd.bhopDisabled ? qd.BhopDisabled : 0) | (dd.disableBobbing ? qd.DisableBobbing : 0) | (dd.ezTowering ? qd.EzTowering : 0) | (dd.ezBridging ? qd.EzBridging : 0) | (dd.showChunkBorders ? qd.ShowChunkBorders : 0)
    }
    const Ld = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Od = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      ed = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Rd = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Id = 5,
      Gd = 4294967295;

    function vd(dd) {
      return (dd.showFog ? ld.ShowFog : 0) | (dd.lighting ? ld.Lighting : 0) | (dd.chunkFade ? ld.ChunkFade : 0)
    }
    const xd = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      qd = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Bd = {
        Release: 1,
        KeepTouches: 2
      },
      sd = {
        Point: 1,
        Stamped: 2
      },
      ad = {
        Add: 1,
        Clear: 2
      },
      Md = 1,
      Fd = 8,
      Yd = 16777215,
      md = 4,
      bd = {
        Resume: 1
      },
      Sd = {
        Held: 1
      };

    function jd(dd, Jd) {
      return (dd | Jd << 8) >>> 0
    }

    function Xd(dd) {
      return 255 & dd
    }

    function fd(dd) {
      return dd >>> 8
    }

    function nd(dd) {
      return dd + 3 & -4
    }
    const Ud = 16777216,
      yd = 20;
    const Dd = 8,
      Td = 8,
      Ed = 16777216,
      cd = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hd = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      rd = 16,
      ud = {
        Lost: 0,
        Gone: 1
      },
      td = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vd(dd) {
      return dd === td.WorldgenSeed || dd === td.Generate
    }
    const zd = 4,
      Hd = 99,
      wd = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Ad = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dJ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      JJ = 12,
      kJ = 16,
      pJ = 4,
      NJ = 12,
      WJ = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      PJ = 4,
      ZJ = 8,
      gJ = 8,
      CJ = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      KJ = {
        Crit: 1,
        HitSelf: 2
      },
      oJ = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      lJ = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      QJ = 12,
      LJ = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OJ = 67108864;

    function eJ(dd) {
      for (const [Jd, kd] of Object.entries(pd.d))
        if (kd === dd) return Jd;
      return `Unknown${dd}`
    }

    function RJ(dd) {
      return {
        status: dd[pd.B.Status],
        lastError: dd[pd.B.LastError],
        lastErrorDetail: dd[pd.B.LastErrorDetail],
        errorCount: dd[pd.B.ErrorCount],
        frameIndex: dd[pd.B.FrameIndex],
        tickIndex: dd[pd.B.TickIndex],
        renderPending: dd[pd.B.RenderPending],
        firstView: dd[pd.B.FirstView],
        chunksCancelled: dd[pd.B.ChunksCancelled]
      }
    }
  },
  40629: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => od,
      j: () => Zd,
      n: () => Wd,
      o: () => Nd,
      p: () => gd,
      t: () => Kd
    });
    class pd extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Nd(dd) {
      return dd instanceof RangeError && /call stack/i.test(dd.message) || dd instanceof Error && "InternalError" === dd.name && /recursion/i.test(dd.message)
    }

    function Wd(dd) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(dd))
    }
    const Pd = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Zd(dd) {
      var Jd;
      return dd instanceof WebAssembly.RuntimeError || dd instanceof pd || Nd(dd) && Pd.test(null !== (Jd = dd.stack) && void 0 !== Jd ? Jd : "")
    }

    function gd(dd, Jd) {
      if (Zd(dd)) throw dd;
      console.error(Jd, dd)
    }

    function Cd(dd, Jd, kd, Nd, Wd) {
      if (Jd % Nd !== 0 || Jd + kd > dd.byteLength) throw new pd(`${Wd}: ${kd} bytes at ${Jd}, ${Nd}-aligned, outside ${dd.byteLength} bytes of memory`)
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      return 0 === kd ? null : (Cd(Jd, kd, pd * dd.BYTES_PER_ELEMENT, dd.BYTES_PER_ELEMENT, Nd), new dd(Jd, kd, pd))
    }

    function od(dd, Jd, kd, pd, Nd) {
      return 0 === Jd ? null : (Cd(dd, Jd, kd, pd, Nd), new DataView(dd, Jd, kd))
    }
  },
  40991: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    const pd = {
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
  40946: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Ld,
      i: () => Od,
      k: () => ld,
      l: () => od
    });
    const pd = 2e3,
      Nd = "unavailable";
    let Wd = () => Promise.resolve().then((() => kd(2814))),
      Pd = null,
      Zd = null,
      gd = Cd();

    function Cd() {
      let dd = () => {};
      return {
        promise: new Promise((Jd => {
          dd = () => {
            Jd(null)
          }
        })),
        resolve: dd
      }
    }

    function Kd() {
      if (null === Pd) {
        const dd = Wd();
        Pd = dd, dd.then((Jd => {
          Pd === dd && (Zd = Jd)
        }), (() => {
          Pd === dd && (Pd = null)
        }))
      }
      return Pd
    }

    function od() {
      Kd().catch((() => {}))
    }

    function ld() {
      gd.resolve()
    }

    function Qd(dd, Jd, kd, pd) {
      if (null === dd) return {
        errorKind: Jd,
        fingerprint: Nd,
        dedupe: `${Jd}|${pd}`
      };
      const {
        fingerprint: Wd
      } = dd.clientErrorKey(Jd, kd, pd);
      return {
        errorKind: Jd,
        fingerprint: Wd,
        dedupe: Wd
      }
    }

    function Ld(dd, Jd, kd, pd) {
      return null === Zd ? pd ? (od(), Qd(null, dd, Jd, kd)) : null : Qd(Zd, dd, Jd, kd)
    }
    async function Od(dd, Jd, kd) {
      let Nd;
      const Wd = new Promise((dd => {
        Nd = setTimeout((() => {
          dd(null)
        }), pd)
      }));
      try {
        return Qd(await Promise.race([Kd(), Wd, gd.promise]), dd, Jd, kd)
      } catch {
        return Qd(null, dd, Jd, kd)
      } finally {
        clearTimeout(Nd)
      }
    }
  },
  40940: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BUILT_IN_ANIMATIONS_SITE: () => rd,
      CORE_ERRORS_SITE: () => Xd,
      EVENT_OVERFLOW_SITE: () => hd,
      FIRST_VIEW_SITE: () => td,
      JOIN_SITE: () => nd,
      LEAVE_SITE: () => Ud,
      MAIN_THREAD_SITE: () => Vd,
      MODEL_FEED_SITE: () => yd,
      MODEL_POOL_SITE: () => Dd,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Hd,
      NON_FATAL_REPORTS_PER_SESSION: () => QJ,
      PREVIEW_ANIMATIONS_SITE: () => cd,
      RENDER_RELOAD_SITE: () => Ed,
      TEXTURE_NAMES_SITE: () => Td,
      TEXTURE_PACK_FEED_SITE: () => ud,
      TurnstilePageError: () => cJ,
      WASM_LOAD_SITE: () => fd,
      crashError: () => IJ,
      crashReportsSettled: () => sJ,
      flushCrashReports: () => qJ,
      joinFailureCode: () => hJ,
      lokiTransport: () => dJ,
      modelFailureCode: () => wJ,
      readTrap: () => YJ,
      renderLossDetail: () => Ik,
      renderReloadMessage: () => ek,
      reportCoreErrors: () => aJ,
      reportCountedLoadFallback: () => TJ,
      reportCrash: () => GJ,
      reportDataLoadFailure: () => Bk,
      reportDisconnect: () => zJ,
      reportDracoDecoderFailure: () => kk,
      reportEventOverflow: () => Wk,
      reportFirstViewNoTerrain: () => Kk,
      reportGpuFallback: () => yJ,
      reportGpuWasmPopulation: () => DJ,
      reportLightFault: () => Zk,
      reportMainStall: () => lk,
      reportMemoryShed: () => Ck,
      reportModelFailure: () => AJ,
      reportModelPoolFailure: () => dk,
      reportModelsModuleRetry: () => Jk,
      reportPageJoinFailure: () => uJ,
      reportReconnectGaveUp: () => HJ,
      reportRenderReload: () => vk,
      reportReplayFault: () => Lk,
      reportStaleBuildReload: () => ik,
      reportStoppedCore: () => jJ,
      reportTerrainTextureFailure: () => xk,
      reportTexturePackFeedLoadFailure: () => Nk,
      reportUnstreamedCoreLoad: () => EJ,
      reportUnsupportedFallback: () => nJ,
      reportUnusedSeat: () => VJ,
      reportWorkerLost: () => Pk,
      reportWorkerStartTimeout: () => Qk,
      reportWorldgenGaveUp: () => gk,
      reportWorldgenLoadFailure: () => pk,
      resetCrashReports: () => iJ,
      setCrashBackend: () => ZJ,
      setCrashScreen: () => WJ,
      setCrashTransport: () => pJ,
      showCrash: () => SJ,
      showJoinFailure: () => rJ,
      showUnsupported: () => fJ
    });
    var pd = kd(1078),
      Nd = kd(271),
      Wd = kd(2822),
      Pd = kd(40946),
      Zd = kd(4680),
      gd = kd(40952),
      Cd = kd(3308),
      Kd = kd(38902),
      od = kd(126),
      ld = kd(681),
      Qd = kd(119),
      Ld = kd(3316),
      Od = kd(39222),
      ed = kd(1797),
      Rd = kd(40906),
      Id = kd(40575),
      Gd = kd(40868),
      vd = kd(40870),
      xd = kd(39257),
      qd = kd(2761),
      Bd = kd(2770),
      sd = kd(40954),
      ad = kd(40980),
      Md = kd(40986),
      Fd = kd(37023),
      Yd = kd(3084),
      md = kd(36448),
      bd = kd(40778),
      Sd = kd(36458);
    const jd = "[bloxd-wasm-client]",
      Xd = "coreErrors",
      fd = "wasmLoad",
      nd = "join",
      Ud = "leave",
      yd = "modelFeed",
      Dd = "modelWorkerPool",
      Td = "textureNames",
      Ed = "renderReload",
      cd = "previewAnimations",
      hd = "eventOverflow",
      rd = "builtInAnimations",
      ud = "texturePackFeed",
      td = "firstView",
      Vd = "mainThread",
      zd = 300,
      Hd = 8;
    let wd = 0;
    const Ad = new Set,
      dJ = (dd, Jd) => {
        const kd = gJ[dd.kind];
        if (null === kd) return void JJ(dd, Jd, PJ, null);
        const pd = (0, Pd.e)(kd, dd.message, dd.code, dd.fatal);
        if (null !== pd) return void JJ(dd, Jd, PJ, pd);
        const Nd = PJ;
        xJ("Loki", (async () => {
          JJ(dd, Jd, Nd, await (0, Pd.i)(kd, dd.message, dd.code))
        }))
      };

    function JJ(dd, Jd, kd, Nd) {
      const {
        kind: Pd,
        code: Zd,
        site: gd,
        fatal: Cd,
        details: Kd
      } = dd;
      if (!Cd)
        if (null === Nd || (0, Wd.b)(Nd.errorKind) || Ad.has(Nd.dedupe)) {
          if (wd >= Hd) return;
          wd++
        } else Ad.add(Nd.dedupe);
      const od = {
        ...Kd,
        kind: Pd,
        code: Zd,
        site: gd,
        fatal: String(Cd),
        backend: kd
      };
      null !== Nd && (od.errorKind = Nd.errorKind, od.fingerprint = Nd.fingerprint), Jd instanceof Error && "string" === typeof Jd.stack && (od.causeStack = Jd.stack.slice(0, 2e3)), (0, pd.ZO)(IJ(dd, Jd), od)
    }
    let kJ = dJ;

    function pJ(dd) {
      const Jd = kJ;
      return kJ = dd, Jd
    }
    let NJ = () => {};

    function WJ(dd) {
      const Jd = NJ;
      return NJ = dd, Jd
    }
    let PJ = "unpicked";

    function ZJ(dd) {
      PJ = dd
    }
    const gJ = {
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
      CJ = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load"
      },
      KJ = new Set(["unstreamedLoad"]),
      oJ = new Set(["linkCensus"]);
    let lJ = !1;
    const QJ = 20,
      LJ = new Map;
    let OJ = 0,
      eJ = 0;
    const RJ = new Set;

    function IJ(dd, Jd) {
      const kd = Object.assign(new Error(`${dd.code}: ${dd.message}`), {
        name: "WasmClientCrash",
        cause: null !== Jd && void 0 !== Jd ? Jd : void 0
      });
      return Jd instanceof Error && Jd.stack && (kd.stack = Jd.stack), kd
    }

    function GJ(dd) {
      var Jd, pd;
      const {
        kind: Nd,
        code: Wd,
        site: Pd,
        fatal: Zd,
        message: gd,
        error: Cd
      } = dd, Kd = !1 !== dd.toTransport && !KJ.has(Nd), od = !Zd && Kd && !oJ.has(Nd), ld = {
        kind: Nd,
        code: Wd,
        site: Pd,
        fatal: Zd,
        message: gd,
        details: null !== (Jd = dd.details) && void 0 !== Jd ? Jd : {}
      }, Qd = `${Wd}@${Pd}${void 0===dd.instance?"":`#${dd.instance}`}${Zd?"!":""}`, Ld = (null !== (pd = LJ.get(Qd)) && void 0 !== pd ? pd : 0) + 1;
      if (LJ.set(Qd, Ld), Ld > 1 ? 0 === (Ld & Ld - 1) && vJ((() => {
          console.warn(`${jd} ${Wd} at ${Pd} reported ${Ld} times`)
        })) : od && OJ >= QJ ? vJ((() => {
          console.warn(`${jd} ${Nd} ${Wd} at ${Pd}: ${gd} (not sent: the session's ${QJ} went)`, ld.details, null !== Cd && void 0 !== Cd ? Cd : "")
        })) : (od && OJ++, function(dd, Jd, pd) {
          var Nd, Wd;
          const {
            kind: Pd,
            code: Zd,
            site: gd,
            fatal: Cd,
            message: Kd,
            details: od
          } = dd;
          vJ((() => {
            (Cd ? console.error : console.warn)(`${jd} ${Pd} ${Zd} at ${gd}: ${Kd}`, od, null !== Jd && void 0 !== Jd ? Jd : "")
          }));
          const ld = CJ[Pd],
            Qd = null !== (Nd = null !== (Wd = gJ[Pd]) && void 0 !== Wd ? Wd : ld) && void 0 !== Nd ? Nd : null;
          null !== Qd && xJ("counts", (async () => {
            const {
              peekVisitSessionId: dd
            } = await Promise.resolve().then((() => kd(645)));
            if (null !== dd()) {
              const {
                reportCappedWasmFailure: dd,
                reportUncappedWasmFailure: Jd,
                reportWasmFailure: pd
              } = await kd.e(208).then((() => kd(36446)));
              (oJ.has(Pd) ? Jd : void 0 === ld ? pd : dd)(Qd, Kd, Zd), lJ = !0
            }
          }));
          pd && vJ((() => {
            kJ(dd, Jd)
          }))
        }(ld, Cd, Kd)), Zd) {
        var Od;
        const Jd = null !== (Od = dd.screen) && void 0 !== Od ? Od : {
          text: (0, Fd.f)(ld, !0),
          reload: !0
        };
        vJ((() => {
          NJ(Jd)
        }))
      }
      return ld
    }

    function vJ(dd) {
      try {
        dd()
      } catch (Jd) {
        try {
          console.warn(`${jd} could not send a report`, Jd)
        } catch {}
      }
    }

    function xJ(dd, Jd) {
      try {
        const kd = Jd().catch((Jd => {
          console.warn(`${jd} could not send the report to ${dd}`, Jd)
        })).finally((() => {
          RJ.delete(kd)
        }));
        RJ.add(kd)
      } catch (kd) {
        console.warn(`${jd} could not send the report to ${dd}`, kd)
      }
    }
    async function qJ(dd) {
      let Jd;
      (0, Pd.k)();
      const kd = new Promise((kd => {
        Jd = setTimeout(kd, dd)
      }));
      await Promise.race([BJ(), kd]), clearTimeout(Jd)
    }
    async function BJ() {
      if (await Promise.allSettled([...RJ]), lJ) try {
        const {
          flushClientAnalyticsEvents: dd
        } = await Promise.resolve().then((() => kd(1515)));
        await dd()
      } catch (dd) {
        console.warn(`${jd} could not send the counts`, dd)
      }
    }
    async function sJ() {
      for (; RJ.size > 0;) await Promise.allSettled([...RJ])
    }

    function iJ() {
      LJ.clear(), OJ = 0, lJ = !1, wd = 0, Ad.clear(), eJ = 0, (0, gd.p)()
    }

    function aJ(dd, Jd, kd, pd) {
      eJ += Jd;
      for (const {
          code: Cd,
          detail: Kd
        }
        of dd) {
        var Nd, Wd, Pd;
        const dd = (0, Zd.ie)(Cd),
          Jd = (0, gd.c)(Cd, Kd),
          od = null === pd || void 0 === pd ? void 0 : pd(Cd, Kd),
          ld = void 0 !== (null === Jd || void 0 === Jd ? void 0 : Jd.gpuDetails),
          Ld = ld ? null === (Nd = (0, Qd.q)()) || void 0 === Nd ? void 0 : Nd.renderer : void 0,
          Od = ld ? ` ${(0,gd.g)()}` : "",
          ed = Array.from([Ld && `gpu ${(0,gd.t)(Ld)}`, od].filter(Boolean).join("; ")).slice(0, zd).join(""),
          Rd = `core error ${dd}${null!==(Wd=null===Jd||void 0===Jd?void 0:Jd.words)&&void 0!==Wd?Wd:""}${Od}${ed?`: ${ed}`:""}`,
          Id = {
            errorCode: String(Cd),
            detail: String(Kd),
            droppedBefore: String(eJ),
            wasmBuild: kd.wasm,
            clientVersion: kd.client,
            ...null === Jd || void 0 === Jd ? void 0 : Jd.gpuDetails
          };
        null !== Jd && (0, gd.l)(Jd) ? vJ((() => {
          console.warn(`${jd} coreError CORE-${dd}: ${Rd} (not sent: the session's render warnings of its kind went)`, Id)
        })) : GJ({
          kind: FJ(Cd, Kd),
          code: `CORE-${dd}`,
          site: Xd,
          fatal: !1,
          message: Rd,
          details: Id,
          instance: null !== (Pd = null === Jd || void 0 === Jd ? void 0 : Jd.instance) && void 0 !== Pd ? Pd : MJ(Cd, Kd)
        })
      }
    }

    function MJ(dd, Jd) {
      return dd === Zd.G.RenderDeviceLost && 0 !== (Jd & Zd.O.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function FJ(dd, Jd) {
      return dd === Zd.G.JobsHeapGaveUp ? "meshHeap" : (0, gd.e)(dd, Jd) ? "linkCensus" : "coreError"
    }

    function YJ(dd) {
      return (0, md.h)(dd instanceof bd.e ? dd.trap : dd, qd.B, qd.Y)
    }
    const mJ = "declined=js";

    function bJ(dd) {
      return dd ? {
        labels: [mJ],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function SJ(dd, Jd, kd) {
      return XJ(dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function jJ(dd, Jd, kd) {
      return XJ(dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function XJ(dd, Jd, kd, pd, Nd) {
      let {
        memoryDetails: Wd = {},
        declined: Pd = !1
      } = pd;
      const {
        code: Zd,
        details: gd,
        message: Cd
      } = (0, Rd.O)(dd, Jd), Kd = [];
      Object.assign(gd, (0, Sd.f)(dd.error)), null !== kd && (gd.trapKind = kd.kind, null !== kd.panic && (gd.panic = (0, md.g)(kd.panic)), kd.refusedBytes > 0 && (gd.refusedAllocation = String(kd.refusedBytes)), Kd.push((0, md.k)(kd.kind, kd.refusedBytes)));
      const od = bJ(Pd);
      return GJ({
        kind: "crash",
        code: Zd,
        site: dd.site,
        fatal: Nd,
        message: [...Kd, ...od.labels, Cd].join("; "),
        details: {
          ...gd,
          ...od.details,
          ...Wd
        },
        error: dd.error
      })
    }

    function fJ(dd, Jd, kd) {
      return GJ({
        kind: "unsupported",
        code: Jd,
        site: fd,
        fatal: !0,
        message: kd,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: dd,
          status: Jd
        },
        screen: {
          text: (0, Fd.m)(dd),
          reload: "download" === dd
        }
      })
    }

    function nJ(dd, Jd, kd) {
      return GJ({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Jd ? "blocked_after_loss" : "unsupported_js_fallback",
        site: fd,
        fatal: !1,
        message: kd,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: dd,
          status: "unsupported",
          decline: Jd,
          fallback: "js"
        }
      })
    }
    const UJ = "misdrawn_gpu_js_fallback";

    function yJ(dd, Jd) {
      return GJ({
        kind: "gpuFallback",
        code: UJ,
        site: fd,
        fatal: !1,
        message: `the renderer plays ${dd} on ${Jd} worse than the JS client`,
        details: {
          gpuFamily: dd,
          backend: Jd,
          fallback: "js"
        }
      })
    }

    function DJ(dd) {
      xJ("counts", (async () => {
        await (0, ld.c)(dd), lJ = !0
      }))
    }

    function TJ(dd, Jd, kd, pd) {
      const Nd = bJ(pd);
      return GJ({
        kind: "unsupported",
        code: Jd,
        site: fd,
        fatal: !1,
        message: [...Nd.labels, kd].join("; "),
        details: {
          cause: dd,
          status: Jd,
          fallback: "js",
          ...Nd.details
        }
      })
    }

    function EJ() {
      const {
        code: dd,
        message: Jd
      } = Yd.c;
      return GJ({
        kind: "unstreamedLoad",
        code: dd,
        site: fd,
        fatal: !1,
        message: Jd
      })
    }
    class cJ extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function hJ(dd) {
      return dd instanceof Gd.m ? 0 === dd.code ? "JOIN-matchmake" : `JOIN-${dd.code}` : dd instanceof Gd.d ? 0 === dd.code ? `JOIN-${dd.stage}` : `JOIN-${dd.stage}-${dd.code}` : dd instanceof Id.e ? "JOIN-gameCode" : dd instanceof cJ ? "JOIN-turnstilePage" : dd instanceof Gd.z ? "JOIN-trafficCheck" : dd instanceof Od.g ? "JOIN-timeout" : "JOIN-network"
    }

    function rJ(dd, Jd) {
      const kd = (0, Sd.j)(dd),
        pd = {
          wasmBuild: Jd.wasm,
          clientVersion: Jd.client
        },
        Nd = dd instanceof cJ ? {
          text: (0, Fd.i)(),
          reload: !1
        } : void 0,
        Wd = (0, vd.h)(dd),
        Pd = "expected" !== Wd;
      return GJ({
        kind: "join",
        code: hJ(dd),
        site: nd,
        fatal: !0,
        message: kd,
        details: pd,
        error: dd,
        screen: Nd,
        toTransport: Pd,
        instance: Wd
      })
    }

    function uJ(dd, Jd, kd) {
      var pd;
      const Nd = (0, vd.h)(dd),
        Wd = {
          cause: (dd instanceof Gd.d || dd instanceof Gd.m) && null !== (pd = dd.serverText) && void 0 !== pd ? pd : "",
          sinceJoinStart: (0, Ld.d)(kd.sinceJoinStartMs),
          game: kd.game,
          ...(0, Ld.o)(),
          wasmBuild: Jd.wasm,
          clientVersion: Jd.client
        };
      return GJ({
        kind: "pageJoin",
        code: hJ(dd),
        site: nd,
        fatal: !1,
        message: (0, Sd.j)(dd),
        details: Wd,
        error: dd,
        toTransport: "unrecognised" === Nd,
        instance: Nd
      })
    }
    const tJ = {
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

    function VJ(dd, Jd) {
      let {
        unused: kd,
        answered: pd,
        heldMs: Nd
      } = dd;
      const {
        code: Wd,
        message: Pd
      } = tJ[kd], Zd = {
        unused: kd,
        answered: String(pd),
        heldMs: String(Nd),
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "seat",
        code: Wd,
        site: nd,
        fatal: !1,
        message: Pd,
        details: Zd
      })
    }

    function zJ(dd, Jd, kd) {
      var pd;
      let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (pd = dd.name) && void 0 !== pd ? pd : String(dd.code);
      const Wd = {
          closeCode: String(dd.code),
          recognised: String(null !== dd.name),
          closeReason: kd.closeReason,
          sinceJoined: (0, Ld.d)(kd.sinceJoinedMs),
          game: kd.game,
          ...(0, Ld.o)(),
          wasmBuild: Jd.wasm,
          clientVersion: Jd.client
        },
        Pd = null === dd.name && !(0, Ld.h)(dd.code);
      return GJ({
        kind: "disconnect",
        code: Nd,
        site: Ud,
        fatal: !1,
        message: "Left room",
        details: Wd,
        toTransport: Pd
      })
    }

    function HJ(dd, Jd) {
      const kd = {
        ...(0, Cd.h)(dd),
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "disconnect",
        code: `reconnect-${dd.reason}`,
        site: nd,
        fatal: !1,
        message: "Reconnect failed",
        details: kd
      })
    }

    function wJ(dd) {
      return dd.error instanceof Bd.e ? `MODEL-${dd.error.status}` : dd.error instanceof sd.q ? "MODEL-ring" : "MODEL-network"
    }

    function AJ(dd, Jd) {
      const kd = wJ(dd),
        pd = `model file ${dd.file} ${dd.startup?"(startup) ":""}could not load`,
        Nd = {
          file: String(dd.file),
          url: dd.url,
          wasmBuild: Jd.wasm,
          clientVersion: Jd.client
        };
      return GJ({
        kind: dd.startup ? "model" : "modelLate",
        code: kd,
        site: yd,
        fatal: dd.startup,
        message: pd,
        details: Nd,
        error: dd.error
      })
    }

    function dk(dd, Jd) {
      const kd = {
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Dd,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: kd,
        error: dd
      })
    }

    function Jk(dd, Jd, kd) {
      const pd = {
        delayMs: String(Jd),
        wasmBuild: kd.wasm,
        clientVersion: kd.client
      };
      dd instanceof Bd.e && (pd.status = String(dd.status));
      return GJ({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Dd,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: pd,
        error: dd
      })
    }

    function kk(dd, Jd) {
      const kd = {
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Dd,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: kd,
        error: dd
      })
    }

    function pk(dd, Jd) {
      const kd = {
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Rd.G,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: kd,
        error: dd
      })
    }

    function Nk(dd, Jd) {
      const kd = {
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: ud,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: kd,
        error: dd
      })
    }

    function Wk(dd, Jd) {
      const {
        frames: kd,
        acks: pd,
        mask: Nd,
        outcome: Wd
      } = dd, Pd = {
        frames: String(kd),
        acks: String(pd),
        mask: String(Nd),
        outcome: null !== Wd && void 0 !== Wd ? Wd : "resynced",
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "recovered",
        code: "rejoined" === Wd ? "CORE-eventOverflowRejoin" : "failed" === Wd ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: hd,
        fatal: !1,
        message: `the event buffer refused records in ${kd} frames`,
        details: Pd
      })
    }

    function Pk(dd, Jd, kd) {
      return GJ({
        kind: "recovered",
        code: "CORE-workerLost",
        site: dd,
        fatal: !1,
        message: `a ${dd} worker was lost`,
        details: {
          reason: Jd,
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        }
      })
    }

    function Zk(dd, Jd, kd) {
      const pd = {
        wasmBuild: kd.wasm,
        clientVersion: kd.client
      };
      return GJ({
        kind: "recovered",
        code: dd,
        site: Rd.p,
        fatal: !1,
        message: Jd,
        details: pd
      })
    }

    function gk(dd, Jd) {
      const kd = {
        lastReason: dd,
        wasmBuild: Jd.wasm,
        clientVersion: Jd.client
      };
      return GJ({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Rd.G,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: kd
      })
    }

    function Ck(dd, Jd, kd) {
      return GJ({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Rd.l,
        fatal: !1,
        message: (0, xd.p)(dd) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: dd,
          ...Jd,
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        }
      })
    }

    function Kk(dd, Jd, kd, pd) {
      var Nd, Wd;
      const Pd = (0, gd.h)(),
        Zd = {
          game: dd,
          cause: Jd,
          census: null === kd ? "none" : JSON.stringify(kd),
          gpu: null !== (Nd = null === (Wd = (0, Qd.q)()) || void 0 === Wd ? void 0 : Wd.renderer) && void 0 !== Nd ? Nd : "",
          renderWarned: String(Pd),
          browser: (0, gd.g)(),
          wasmBuild: pd.wasm,
          clientVersion: pd.client
        },
        Cd = `first view drew no whole terrain in ${ad.h/1e3} s, ${Jd}${Pd?", render warned":""}`;
      return GJ({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: td,
        fatal: !1,
        message: Cd,
        details: Zd
      })
    }

    function lk(dd, Jd, kd) {
      var pd, Wd, Pd;
      const Zd = null !== (pd = (0, Nd.l)(null !== (Wd = null === (Pd = (0, Qd.i)()) || void 0 === Pd ? void 0 : Pd.renderer) && void 0 !== Wd ? Wd : null, (0, Qd.h)())) && void 0 !== pd ? pd : "unknown",
        Cd = null === Jd ? "untimed" : `${Math.round(Jd)} ms`,
        Kd = `frames stalled, gpu ${(0,gd.t)(Zd)}, blocking ${Cd}, drawn ${Math.round(dd)} ms apart`,
        od = {
          gpuModel: Zd,
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        };
      return GJ({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: Vd,
        fatal: !1,
        message: Kd,
        details: od
      })
    }

    function Qk(dd, Jd, kd) {
      return GJ({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: dd,
        fatal: !1,
        message: `a ${dd} worker did not start`,
        details: {
          waitedMs: String(Math.round(Jd)),
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        }
      })
    }

    function Lk(dd, Jd, kd) {
      return GJ({
        kind: "recovered",
        code: "CORE-replayFault",
        site: dd,
        fatal: !1,
        message: `the replay's ${dd} failed`,
        details: {
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        },
        error: Jd
      })
    }
    const Ok = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function ek(dd, Jd, kd) {
      const pd = "lost" === Jd && void 0 !== kd ? ` (${kd})` : "";
      return `the ${dd} ${Ok[Jd]}${pd}`
    }
    const Rk = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Ik(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Nd = null === kd.boundAtMs ? "unbound" : `up${(0,Kd.f)(pd-kd.boundAtMs)}`,
        Wd = null === kd.adapter ? "no adapter" : (0, Kd.k)(kd.adapter),
        Pd = `${(0,ed.k)()?"hidden":"visible"} ${Nd} ${Wd}${!0===kd.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === dd) return `${dd} ${Pd}`;
      const Zd = null === Jd || void 0 === Jd ? void 0 : Jd.message;
      return `${Jd instanceof ed.i?"timeout":(0,Kd.l)("frames_refused"===dd,"string"===typeof Zd?Zd:"")} ${Pd}`
    }
    const Gk = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function vk(dd, Jd, pd) {
      var Wd, Pd, Zd, Cd, ld;
      let {
        cause: Qd = "lost",
        error: Ld,
        context: Od = Rk,
        session: ed = Gk
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Rd = Ik(Qd, Ld, Od),
        Id = {
          losses: String(Jd),
          cause: Qd,
          detail: Rd,
          vendor: null !== (Wd = null === (Pd = Od.adapter) || void 0 === Pd ? void 0 : Pd.vendor) && void 0 !== Wd ? Wd : "",
          architecture: null !== (Zd = null === (Cd = Od.adapter) || void 0 === Cd ? void 0 : Cd.architecture) && void 0 !== Zd ? Zd : "",
          indirectHangs: String(Od.indirectHangs),
          samples: String(ed.samples),
          sunShadows: String(ed.sunShadows),
          renderDistance: String(ed.renderDistance),
          gpuFamily: null !== (ld = (0, Nd.c)()) && void 0 !== ld ? ld : "",
          browser: (0, gd.g)(),
          siteUsed: od.t,
          wasmBuild: pd.wasm,
          clientVersion: pd.client
        },
        Gd = ek(dd, Qd),
        vd = GJ({
          kind: "recovered",
          code: "CORE-renderLost",
          site: Ed,
          fatal: !1,
          message: Gd,
          details: Id,
          error: Ld
        });
      return xJ("ga", (async () => {
        const {
          logError: Jd
        } = await Promise.resolve().then((() => kd(2793))), pd = `${Kd.d["webgpu"===dd?"WebGPU":"WebGL2"]}\n Error: ${Rd}`;
        Jd("warning", pd), Jd("error", pd)
      })), vd
    }

    function xk(dd, Jd) {
      var kd, pd;
      const Nd = null === dd.name ? "TEXTURE-sources" : null === dd.url ? "TEXTURE-nourl" : dd.error instanceof Md.b ? `TEXTURE-${dd.error.status}` : "TEXTURE-network",
        Wd = null === dd.name ? "terrain textures could not load" : `terrain texture ${dd.name} could not load`,
        Pd = {
          texture: null !== (kd = dd.name) && void 0 !== kd ? kd : "",
          url: null !== (pd = dd.url) && void 0 !== pd ? pd : "",
          wasmBuild: Jd.wasm,
          clientVersion: Jd.client
        };
      return GJ({
        kind: "terrainTexture",
        code: Nd,
        site: Rd.C,
        fatal: !1,
        message: Wd,
        details: Pd,
        error: dd.error
      })
    }
    const qk = {
      previewAnimations: {
        site: cd,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: rd,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Bk(dd, Jd, kd, pd) {
      const {
        site: Nd,
        prefix: Wd,
        name: Pd
      } = qk[dd], {
        stage: Zd,
        error: gd
      } = kd;
      return GJ({
        kind: dd,
        code: "decode" === Zd ? null === gd ? `${Wd}-decode` : `${Wd}-trap` : gd instanceof Bd.e ? `${Wd}-${gd.status}` : `${Wd}-network`,
        site: Nd,
        fatal: !1,
        message: "decode" === Zd ? `${Pd} did not decode` : `${Pd} could not load`,
        details: {
          url: Jd,
          wasmBuild: pd.wasm,
          clientVersion: pd.client
        },
        error: gd
      })
    }
    const sk = "staleBuild";

    function ik(dd, Jd, kd) {
      const pd = {
          failedSite: dd.site,
          url: dd.url,
          from: dd.from,
          sameBuild: String(dd.from === Jd),
          reloadMs: String(Math.max(0, Date.now() - dd.at)),
          wasmBuild: kd.wasm,
          clientVersion: kd.client
        },
        Nd = `reloaded into a newer build after ${dd.site} failed to load: ${dd.error}`;
      return GJ({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: sk,
        fatal: !1,
        message: Nd,
        details: pd
      })
    }
  },
  40980: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd,
      l: () => Pd
    });
    var pd = kd(4688);
    const Nd = 3e4;
    class Wd {
      constructor(dd) {
        this.TQ = dd, this.waitedMs = 0, this.lastMs = null
      }
      frame(dd, Jd) {
        if (Jd) return !0;
        const kd = null === this.lastMs ? 0 : dd - this.lastMs;
        return this.lastMs = dd, kd <= 900 && (this.waitedMs += kd), !(this.waitedMs < Nd) && (this.TQ(), !0)
      }
    }

    function Pd(dd, Jd) {
      return 0 === (dd & pd.P.ChunkRequested) ? "no_chunk_request" : 0 === (dd & pd.P.ChunkStored) ? "chunk_not_stored" : 0 === (dd & pd.P.MeshLanded) ? "not_meshed" : null === Jd ? "no_frame_drawn" : 0 === Jd.terrainParts ? "no_terrain_parts" : Jd.terrainCompiling > 0 ? "terrain_compiling" : Jd.terrainOpaque + Jd.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  4673: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd,
      h: () => Nd
    });
    var pd = kd(4680);

    function Nd(dd) {
      return "none" !== dd
    }

    function Wd(dd, Jd) {
      if (!dd) return "none";
      switch (Jd) {
        case pd.ab.Drawn:
          return "drawn";
        case pd.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Pd(dd) {
      return "drawn" === dd
    }
  },
  40575: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => od,
      B: () => Ld,
      e: () => pd,
      i: () => Rd,
      k: () => Od,
      o: () => ed,
      s: () => ld,
      v: () => Qd,
      w: () => Kd
    });
    class pd extends Error {
      constructor(dd) {
        super(`the join's code did not load: ${dd instanceof Error?dd.message:String(dd)}`, {
          cause: dd
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === dd || void 0 === dd ? void 0 : dd.request
      }
    }
    let Nd = null,
      Wd = null,
      Pd = null;
    const Zd = [];
    let gd = null;

    function Cd(dd, Jd) {
      try {
        dd(Jd)
      } catch (kd) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", kd)
      }
    }

    function Kd() {
      return gd
    }

    function od(dd) {
      Zd.push(dd), null !== gd && Cd(dd, gd)
    }

    function ld(dd) {
      return Nd ??= Promise.all([kd.e(70), kd.e(95), kd.e(216), kd.e(75), kd.e(217), kd.e(190), kd.e(94), kd.e(235), kd.e(261), kd.e(188), kd.e(263), kd.e(200), kd.e(187), kd.e(201), kd.e(137), kd.e(86), kd.e(115), kd.e(239), kd.e(54)]).then((() => kd(42489))).then((Jd => {
        Jd.loadAudio(dd), gd = Jd;
        for (const dd of Zd) Cd(dd, Jd);
        return Jd
      })).catch((dd => {
        throw Nd = null, dd
      })), Nd
    }
    async function Qd(dd, Jd) {
      try {
        const kd = await ld(dd);
        await kd.loadClientGame(Jd)
      } catch (kd) {
        throw new pd(kd)
      }
    }

    function Ld(dd, Jd) {
      Wd = {
        running: dd,
        shell: Jd
      }
    }

    function Od() {
      return Pd
    }
    async function ed(dd) {
      const Jd = Wd;
      if ((null === Jd || void 0 === Jd ? void 0 : Jd.running) !== dd) throw new Error("the core's session has ended");
      const kd = await ld(Jd.shell.audio).catch((dd => {
        throw new pd(dd)
      }));
      if (null !== Pd) return Pd;
      if (Wd !== Jd || dd.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Pd = kd.startGameHost(dd, Jd.shell), null === Pd) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Pd
    }

    function Rd() {
      null !== Pd && (null !== gd ? gd.endGameHost(Pd) : Pd.closeGame()), Pd = null, Wd = null
    }
  },
  40868: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Zd,
      d: () => Cd,
      g: () => Wd,
      i: () => Pd,
      l: () => Nd,
      m: () => Qd,
      q: () => Kd,
      u: () => gd,
      x: () => ld,
      z: () => od
    });
    var pd = kd(1800);
    const Nd = new Uint8Array([12]),
      Wd = 2e3,
      Pd = 257;

    function Zd(dd) {
      const Jd = new Uint8Array(4);
      return new DataView(Jd.buffer).setUint32(0, dd, !0), Jd
    }
    class gd extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Cd extends Error {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(dd), this.stage = Jd, this.code = kd, this.serverText = pd, this.name = "JoinError"
      }
    }
    class Kd extends Error {
      constructor(dd) {
        super(dd), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class od extends Error {
      constructor(dd) {
        super((0, pd.c)(dd), {
          cause: dd
        }), this.name = "TrafficCheckError"
      }
    }
    class ld extends Error {
      constructor(dd, Jd, kd) {
        super(dd, {
          cause: kd
        }), this.networkLost = Jd, this.name = "SeatRequestError"
      }
    }
    class Qd extends Error {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(dd), this.code = Jd, this.serverText = kd, this.name = "MatchmakeError"
      }
    }
  },
  40870: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld,
      h: () => od
    });
    var pd = kd(2502),
      Nd = kd(3316),
      Wd = kd(39222),
      Pd = kd(40860),
      Zd = kd(40868),
      gd = kd(40874);
    const Cd = "seat reservation expired.",
      Kd = "early_leave";

    function od(dd) {
      if (dd instanceof Wd.g) return "expected";
      if (dd instanceof Zd.x) return dd.networkLost ? "expected" : "unrecognised";
      if (dd instanceof Zd.d) {
        if ("closed" === dd.stage && (0 === dd.code || (0, Nd.h)(dd.code))) return "expected";
        if ("roomError" === dd.stage && (dd.serverText === Cd || dd.serverText === Kd)) return "expected"
      }
      return dd instanceof Zd.d || dd instanceof Zd.m ? null === (0, Pd.k)(dd.code).name ? "unrecognised" : "known" : (0, pd.e)(dd) ? "expected" : dd instanceof Zd.z || dd instanceof gd.f ? "known" : "unrecognised"
    }

    function ld(dd) {
      return dd instanceof Wd.g ? "timedOut" : "expected" !== od(dd) || (0, pd.e)(dd) || dd instanceof Zd.d && 1001 === dd.code ? void 0 : "failed"
    }
  },
  39257: (dd, Jd, kd) => {
    kd.d(Jd, {
      G: () => ad,
      e: () => Md,
      m: () => xd,
      p: () => od,
      r: () => qd,
      v: () => Rd,
      z: () => sd
    });
    var pd = kd(36453),
      Nd = kd(36651);
    const Wd = 64 * pd.d,
      Pd = 40 * pd.f,
      Zd = 36 * pd.f,
      gd = 20 * pd.f,
      Cd = 2 * pd.f,
      Kd = 5 * pd.f;

    function od(dd) {
      return "footprint" !== dd
    }
    const ld = 2 * pd.f,
      Qd = 4 * pd.f,
      Ld = 35 * pd.f + ld + Qd,
      Od = 6.5 * pd.f,
      ed = 132.5 * pd.d;

    function Rd(dd) {
      const Jd = Od + (0, Nd.j)(dd) + dd * ed;
      return Math.ceil((2 * Ld + Jd) / Wd) * Wd
    }
    const Id = Rd(Nd.d),
      Gd = (pd.f, pd.f, pd.f, {
        targetBytes: Pd,
        leastBytes: gd
      }),
      vd = {
        targetBytes: Zd,
        leastBytes: gd
      };

    function xd(dd) {
      return {
        targetBytes: dd,
        leastBytes: 0
      }
    }

    function qd(dd) {
      return dd >= Nd.d ? Gd : vd
    }
    const Bd = 2 * Wd;

    function sd(dd, Jd, kd) {
      return dd + Jd + Bd > (null !== kd && void 0 !== kd ? kd : Id)
    }
    const ad = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? dd => {
        requestIdleCallback(dd)
      } : null
    };
    class Md {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ad;
        this.memory = dd, this.readPeakStoredChunks = Jd, this.onError = kd, this.clock = pd, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(dd, Jd, kd) {
        this.shedding = {
          shed: dd,
          TQ: Jd,
          readDistanceInUse: kd
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(dd) {
        this.footprint = dd
      }
      setCeiling(dd) {
        this.ceilingBytes = dd, this.call((() => {
          this.memory.setCeiling(dd)
        }), void 0)
      }
      ceilingMayRefuse(dd) {
        return sd(this.memory.memoryBytes(), dd, this.ceilingBytes)
      }
      reserveAtJoin(dd) {
        let {
          targetBytes: Jd,
          leastBytes: kd
        } = dd;
        const pd = this.memory.memoryBytes(),
          Nd = pd + kd,
          Wd = Math.max(Jd + (this.ballastOn() ? Kd : 0), Nd),
          Pd = this.call((() => this.memory.reserveUpFront(Wd) ? "target" : Wd > Nd && this.memory.reserveUpFront(Nd) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Pd) {
          const dd = "least" === Pd ? `took ${Nd} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Wd} bytes was refused at ${pd} bytes; ${dd}`)
        }
        return this.joinReserveTaken = Pd, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Pd && this.shedFor("joinReserve"), "none" !== Pd
      }
      afterFrame() {
        if (this.stopped) return;
        const dd = this.clock.now(),
          Jd = null !== this.stepsHeldUntil && dd >= this.stepsHeldUntil;
        if (Jd && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && dd >= this.ballastCheckAt && (this.takeBallast(dd), this.stopped)) return;
        const kd = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          pd = Jd && "now" === kd ? "none" : kd,
          {
            requestIdle: Nd
          } = this.clock;
        "now" === pd || null !== this.pendingSince && dd - this.pendingSince >= 500 ? this.step() : "idle" === pd && null === this.pendingSince && (null === Nd ? this.step() : (this.pendingSince = dd, Nd((() => {
          null !== this.pendingSince && this.step()
        })))), dd - this.statsAt >= 1e3 && (this.statsAt = dd, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var dd, Jd;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Jd = this.shedding.readDistanceInUse()) && void 0 !== Jd ? Jd : this.distanceInUse);
          null === (dd = this.footprint) || void 0 === dd || dd.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(dd, Jd) {
        this.noteWorker(`Mesh${dd}`, Jd)
      }
      meshWorkerGone(dd) {
        this.workerGone(`Mesh${dd}`)
      }
      noteWorldgen(dd) {
        this.noteWorker("Worldgen", dd)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(dd, Jd) {
        const kd = this.workers.get(dd);
        null !== kd && void 0 !== kd && kd.gone && (this.replacedRefusals.reserves += kd.stats.reservesRefused, this.replacedRefusals.allocations += kd.stats.allocationsRefused), this.workers.set(dd, {
          stats: Jd,
          gone: !1
        })
      }
      workerGone(dd) {
        const Jd = this.workers.get(dd);
        Jd && (Jd.gone = !0)
      }
      details() {
        var dd, Jd;
        const kd = {
          wasmMemoryNow: `${(0,pd.l)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (kd.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (kd.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Nd = this.main;
        if (Nd) {
          kd.wasmMemoryMain = Fd(Nd);
          const dd = Math.max(0, Nd.peakLiveBytes - this.ballastPeakBytes),
            Jd = 0 === this.peakStoredChunks ? "-" : (dd / this.peakStoredChunks / pd.d).toFixed(1);
          kd.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Jd} KiB`
        }
        for (const [pd, {
            stats: Pd,
            gone: Zd
          }] of this.workers) kd[`wasmMemory${pd}`] = Fd(Pd) + (Zd ? " (gone)" : "");
        const Wd = null !== (dd = null === (Jd = this.footprint) || void 0 === Jd ? void 0 : Jd.describe()) && void 0 !== dd ? dd : null;
        return null !== Wd && (kd.wasmMemoryFootprint = Wd), kd
      }
      pageKillSnapshot() {
        var dd, Jd, kd, Nd, Wd;
        let Pd = (null !== (dd = null === (Jd = this.main) || void 0 === Jd ? void 0 : Jd.reservesRefused) && void 0 !== dd ? dd : 0) + this.replacedRefusals.reserves,
          Zd = (null !== (kd = null === (Nd = this.main) || void 0 === Nd ? void 0 : Nd.allocationsRefused) && void 0 !== kd ? kd : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: pd
          }
          of this.workers.values()) Pd += pd.reservesRefused, Zd += pd.allocationsRefused;
        return {
          wasmMainMiB: Number((0, pd.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, pd.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Pd,
          refusedAllocations: Zd,
          sheds: this.sheds,
          ...null === (Wd = this.footprint) || void 0 === Wd ? void 0 : Wd.snapshot()
        }
      }
      workersMemoryBytes() {
        let dd = 0;
        for (const {
            stats: Jd,
            gone: kd
          }
          of this.workers.values()) dd += kd ? 0 : Jd.memoryBytes;
        return dd
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Cd)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(dd) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = dd + 1e3;
        const Jd = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Jd)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(dd) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${dd}: frames grow on demand from here`)
      }
      shedFor(dd) {
        const {
          shedding: Jd
        } = this;
        if (null === Jd) return;
        this.pendingSince = null;
        const kd = this.call((() => Jd.shed(dd)), null);
        this.stopped || (null !== kd ? (this.sheds++, this.shedCap = kd, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Jd.TQ(dd, this.sheds, this.details())) : od(dd) && this.stopSteps("nothing is left to shed"))
      }
      call(dd, Jd) {
        if (this.stopped) return Jd;
        try {
          return dd()
        } catch (kd) {
          return this.stop(), this.onError(kd), Jd
        }
      }
    }

    function Fd(dd) {
      const Jd = (dd, Jd) => `${dd}/${(0,pd.l)(Jd)}`;
      return `memory ${(0,pd.l)(dd.memoryBytes)} live ${(0,pd.l)(dd.liveBytes)} peak ${(0,pd.l)(dd.peakLiveBytes)} unused ${(0,pd.l)(dd.unusedBytes)} ceiling ${(0,pd.l)(dd.ceilingBytes)} MiB; grows upFront ${Jd(dd.grows.upFront,dd.grownBytes.upFront)} ahead ${Jd(dd.grows.ahead,dd.grownBytes.ahead)} inFrame ${Jd(dd.grows.onDemandInFrame,dd.grownBytes.onDemandInFrame)} other ${Jd(dd.grows.onDemand,dd.grownBytes.onDemand)}; refused reserves ${dd.reservesRefused} allocations ${dd.allocationsRefused}`
    }
  },
  40954: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd,
      i: () => Cd,
      m: () => Qd,
      q: () => od
    });
    var pd = kd(2770),
      Nd = kd(4680),
      Wd = kd(40963),
      Pd = kd(40972),
      Zd = kd(36458);
    const gd = 395,
      Cd = 2147483648,
      Kd = new Uint8Array(0);
    class od extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class ld extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Qd {
      constructor(dd, Jd, kd) {
        var pd, Nd, Pd, Zd;
        let gd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = dd, this.build = Jd, this.onFailure = kd, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.qQ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (pd = gd.fetchFile) && void 0 !== pd ? pd : dd => (0, Wd.h)(dd), this.onWritten = null !== (Nd = gd.onWritten) && void 0 !== Nd ? Nd : null, this.onTaken = null !== (Pd = gd.onTaken) && void 0 !== Pd ? Pd : null, this.onPackFileFailed = null !== (Zd = gd.onPackFileFailed) && void 0 !== Zd ? Zd : null, this.startupLeft = new Set(dd.startup);
        for (const Wd of dd.startup) this.request(Wd)
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
      drawnUrl(dd) {
        return this.drawn.get(dd)
      }
      request(dd) {
        const Jd = this.pending.get(dd);
        if (!0 === (null === Jd || void 0 === Jd ? void 0 : Jd.ask)) return;
        const kd = this.ZQ(dd, !0);
        kd.recheck = void 0 !== Jd;
        const pd = this.drawn.get(dd);
        if (void 0 !== pd) return kd.EC = !0, kd.recheck = !0, void this.fetch(dd, kd, pd);
        this.fetchWanted(dd, kd)
      }
      async refresh() {
        const dd = ++this.refreshes,
          Jd = new Set;
        for (const Pd of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const dd of Pd) 0 === (dd & Wd.f) && Jd.add(dd);
        const kd = [...Jd];
        let pd;
        try {
          pd = await Promise.all(kd.map((dd => this.wanted(dd))))
        } catch {
          return null
        }
        if (dd !== this.refreshes) return null;
        const Nd = {
          resent: 0,
          refetched: 0,
          delivered: kd.filter((dd => this.drawn.has(dd))).length
        };
        return kd.forEach(((dd, Jd) => {
          const {
            url: kd,
            inPlaceOf: Wd
          } = pd[Jd], Pd = this.pending.get(dd);
          if (void 0 !== Pd) {
            if (Pd.EC || void 0 === Pd.url) return void(Pd.recheck = !0);
            if (Pd.url === kd) return;
            Nd.refetched++;
            const Jd = this.ZQ(dd, Pd.ask);
            return Jd.recheck = Pd.recheck, void this.fetch(dd, Jd, kd, Wd)
          }
          const Zd = this.written.get(dd);
          void 0 === Zd ? this.drawn.get(dd) !== (null !== kd && void 0 !== kd ? kd : void 0) && (Nd.resent++, this.fetch(dd, this.ZQ(dd, !1), kd, Wd)) : Zd.url !== (null !== kd && void 0 !== kd ? kd : "") && (Zd.attempt.recheck = !0)
        })), Nd
      }
      taken(dd, Jd) {
        const kd = new Set,
          pd = new Set;
        for (const Nd of Array.from(Jd)) 0 === (Nd & Cd) ? kd.add(Nd) : pd.add((Nd & ~Cd) >>> 0);
        for (const [Nd, Wd] of this.written) Wd.seq > dd || (this.written.delete(Nd), kd.has(Wd.seq) ? this.refusedFile(Nd, Wd) : this.takenFile(Nd, Wd, !Wd.empty && !pd.has(Wd.seq)))
      }
      takenFile(dd, Jd, kd) {
        const {
          attempt: pd
        } = Jd;
        if (kd) {
          var Nd;
          this.drawn.set(dd, Jd.url), this.undrawn.delete(dd), void 0 !== pd.inPlaceOf ? this.refusedPack.set(dd, pd.inPlaceOf) : pd.EC || this.refusedPack.delete(dd), null === (Nd = this.onTaken) || void 0 === Nd || Nd.call(this, dd, !0);
          const kd = this.pending.get(dd);
          if (!0 === (null === kd || void 0 === kd ? void 0 : kd.EC) && kd.url !== Jd.url) {
            const kd = this.ZQ(dd, !0);
            kd.EC = !0, kd.recheck = !0, this.fetch(dd, kd, Jd.url)
          }
        } else {
          var Wd;
          this.drawn.has(dd) || this.undrawn.add(dd), null === (Wd = this.onTaken) || void 0 === Wd || Wd.call(this, dd, !1)
        }
        pd.recheck && this.resendIfChanged(dd)
      }
      refusedFile(dd, Jd) {
        var kd, pd;
        if (null === (kd = this.onTaken) || void 0 === kd || kd.call(this, dd, !1), this.refusedPack.set(dd, Jd.url), this.pending.has(dd)) return void(null === (pd = this.onPackFileFailed) || void 0 === pd || pd.call(this, dd, Ld(Jd.url)));
        const Nd = this.ZQ(dd, Jd.attempt.ask);
        Nd.recheck = Jd.attempt.recheck, this.afterRefusal(dd, Nd, Jd.url)
      }
      async afterRefusal(dd, Jd, kd) {
        var pd;
        let Nd;
        try {
          Nd = await this.wanted(dd)
        } catch (Wd) {
          return void(this.pending.get(dd) === Jd && this.giveUp(dd, Jd, kd, Wd))
        }
        this.pending.get(dd) === Jd && (Nd.inPlaceOf !== kd ? Jd.ask || (null !== (pd = Nd.url) && void 0 !== pd ? pd : void 0) !== this.drawn.get(dd) ? this.fetch(dd, Jd, Nd.url, Nd.inPlaceOf) : this.pending.delete(dd) : this.fallBack(dd, Jd, kd, Ld(kd)))
      }
      ZQ(dd, Jd) {
        const kd = {
          url: void 0,
          ask: Jd,
          EC: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(dd, kd);
        for (let pd = this.ready.length - 1; pd >= 0; pd--) this.ready[pd].file === dd && this.ready.splice(pd, 1);
        return kd
      }
      async wanted(dd) {
        const Jd = await this.files.url(dd);
        return null !== Jd && this.refusedPack.get(dd) === Jd ? {
          url: await this.files.shippedUrl(dd),
          inPlaceOf: Jd
        } : {
          url: Jd,
          inPlaceOf: void 0
        }
      }
      fetchWanted(dd, Jd) {
        const kd = this.files.url(dd);
        kd instanceof Promise ? kd.then((kd => {
          this.fetchFound(dd, Jd, kd)
        }), (kd => {
          this.pending.get(dd) === Jd && this.giveUp(dd, Jd, "", kd)
        })) : this.fetchFound(dd, Jd, kd)
      }
      fetchFound(dd, Jd, kd) {
        null !== kd && this.refusedPack.get(dd) === kd ? Promise.resolve(this.files.shippedUrl(dd)).then((pd => {
          this.fetch(dd, Jd, pd, kd)
        }), (pd => {
          this.pending.get(dd) === Jd && this.giveUp(dd, Jd, kd, pd)
        })) : this.fetch(dd, Jd, kd)
      }
      fetch(dd, Jd, kd, pd) {
        this.pending.get(dd) === Jd && (Jd.url = kd, Jd.inPlaceOf = pd, null !== kd ? this.load(dd, Jd, kd) : this.buildFile(dd, Jd, "", Kd))
      }
      load(dd, Jd, kd) {
        const pd = this.qQ.get(dd);
        (null === pd || void 0 === pd ? void 0 : pd.url) !== kd ? this.fetchFile(kd).then((pd => {
          var Nd, Wd;
          this.pending.get(dd) === Jd && (this.keptTotal += pd.byteLength - (null !== (Nd = null === (Wd = this.qQ.get(dd)) || void 0 === Wd ? void 0 : Wd.glb.byteLength) && void 0 !== Nd ? Nd : 0), this.qQ.set(dd, {
            url: kd,
            glb: pd
          }), this.buildFile(dd, Jd, kd, pd))
        }), (pd => {
          this.pending.get(dd) === Jd && this.fallBack(dd, Jd, kd, pd)
        })) : this.buildFile(dd, Jd, kd, pd.glb)
      }
      buildFile(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Pd = pd.byteLength > 0 && (0, Wd.j)(kd) ? (dd | Wd.e) >>> 0 : dd;
        this.queueRecord(dd, Jd, kd, pd, this.build(Pd, pd), Nd)
      }
      queueRecord(dd, Jd, kd, pd, Wd, Zd) {
        Wd.then((Wd => {
          if (this.pending.get(dd) !== Jd) return;
          if (Nd.q + (0, Nd.xe)(Wd.byteLength) > Nd.Hc) return void this.ringRefused(dd, Jd, kd, new od(`${Od(kd)}'s record is ${Wd.byteLength-Pd.b} bytes, past the cmd ring's ${Nd.Hc}`), Zd);
          const gd = {
            file: dd,
            url: kd,
            payload: Wd,
            glb: pd,
            attempt: Jd
          };
          Zd ? this.ready.unshift(gd) : this.ready.push(gd)
        }))
      }
      async fallBack(dd, Jd, kd, pd) {
        var Nd;
        let Wd = null,
          Pd = pd;
        try {
          Wd = await this.files.shippedUrl(dd)
        } catch (Zd) {
          Pd = Zd
        }
        this.pending.get(dd) === Jd && (null !== Wd && Wd !== kd ? (null === (Nd = this.onPackFileFailed) || void 0 === Nd || Nd.call(this, dd, pd), Jd.ask || this.drawn.get(dd) !== Wd ? (Jd.url = Wd, Jd.inPlaceOf = kd, this.load(dd, Jd, Wd)) : this.pending.delete(dd)) : this.giveUp(dd, Jd, kd, Pd))
      }
      ringRefused(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Wd.j)(kd) ? this.fallBack(dd, Jd, kd, pd): this.giveUp(dd, Jd, kd, pd, Nd)
      }
      giveUp(dd, Jd, kd, Nd) {
        let Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: dd,
          url: Od(kd),
          error: Nd,
          startup: this.startupLeft.has(dd)
        }), Jd.ask || !this.drawn.has(dd) ? (0, pd.R)(Nd) ? this.queueRecord(dd, Jd, kd, Kd, Promise.resolve((0, Pd.l)(dd, (0, Zd.j)(Nd))), Wd) : this.buildFile(dd, Jd, kd, Kd, Wd) : this.pending.delete(dd)
      }
      async resendIfChanged(dd) {
        var Jd;
        if (0 !== (dd & Wd.f)) return;
        let kd;
        try {
          kd = await this.wanted(dd)
        } catch {
          return
        }(null !== (Jd = kd.url) && void 0 !== Jd ? Jd : void 0) === this.drawn.get(dd) || this.pending.has(dd) || this.written.has(dd) || this.fetch(dd, this.ZQ(dd, !1), kd.url, kd.inPlaceOf)
      }
      drain(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === dd) return;
        let kd = 0,
          pd = 0;
        for (; pd < this.ready.length && kd < 262144;) {
          const Zd = this.ready[pd];
          if (this.written.has(Zd.file)) {
            pd++;
            continue
          }
          const Kd = this.nextSeq;
          new DataView(Zd.payload.buffer, Zd.payload.byteOffset, Zd.payload.byteLength).setUint32(Pd.d, Kd, !0);
          const ld = Zd.attempt.EC && Zd.glb.byteLength > 0 && this.drawn.get(Zd.file) === Zd.url;
          if (dd(gd, ld ? 1 : 0, Zd.payload)) {
            if (this.nextSeq = Kd >= Cd - 1 ? 1 : Kd + 1, this.ready.splice(pd, 1), kd += Zd.payload.byteLength, this.pending.delete(Zd.file), this.startupLeft.delete(Zd.file), this.written.set(Zd.file, {
                seq: Kd,
                url: Zd.url,
                empty: 0 === Zd.glb.byteLength,
                attempt: Zd.attempt
              }), Zd.glb.byteLength > 0) try {
              var Nd;
              null === (Nd = this.onWritten) || void 0 === Nd || Nd.call(this, Zd.file, Zd.glb)
            } catch (Wd) {
              console.warn("ModelFeed: reading the file's images failed", Wd)
            }
          } else {
            if (null === Jd || 0 === Zd.glb.byteLength || Jd(Zd.payload.byteLength)) return;
            this.ready.splice(pd, 1);
            const dd = new od(`${Od(Zd.url)}'s record is ${Zd.payload.byteLength-Pd.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Zd.file, Zd.attempt, Zd.url, dd, !0)
          }
        }
      }
    }

    function Ld(dd) {
      return new ld(`presentation refused ${Od(dd)}`)
    }

    function Od(dd) {
      return dd.startsWith("data:") ? `${dd.slice(0,Math.min(Math.max(dd.indexOf(","),5),64))},...` : dd
    }
  },
  40963: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      f: () => Wd,
      h: () => Kd,
      j: () => Zd,
      l: () => Cd,
      n: () => gd
    });
    var pd = kd(2770),
      Nd = kd(3062);
    const Wd = 2147483648,
      Pd = 1073741824;

    function Zd(dd) {
      return dd.startsWith("data:")
    }

    function gd(dd) {
      let {
        onTableFailed: Jd,
        packUrl: kd
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const pd = Cd();
      pd.catch((dd => {
        null === Jd || void 0 === Jd || Jd(dd)
      }));
      const Nd = async Jd => (await pd).fileUrl((Jd & ~Wd) >>> 0, dd);
      return {
        startup: [],
        url: async dd => {
          if (kd && 0 === (dd & Wd)) {
            const Jd = await pd,
              Nd = Jd.filePackName(dd),
              Wd = null === Nd || "lifeform" === Jd.fileSource(dd) ? null : kd(Nd);
            if (null !== Wd) return Wd
          }
          return Nd(dd)
        },
        shippedUrl: Nd
      }
    }

    function Cd() {
      return kd.e(41).then((() => kd(43290)))
    }
    async function Kd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return dd.startsWith("data:") ? (0, Nd.e)(dd.slice(dd.indexOf(",") + 1), Jd) : (0, pd.D)(dd, {
        spare: Jd
      })
    }
  },
  40972: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      d: () => Kd,
      f: () => Qd,
      i: () => ed,
      l: () => Ld,
      p: () => ld,
      r: () => Od
    });
    const pd = 826427981,
      Nd = 1,
      Wd = 2,
      Pd = 44,
      Zd = 46,
      gd = 58,
      Cd = 8,
      Kd = 4;

    function od(dd, Jd, kd) {
      const Nd = (new TextEncoder).encode(kd),
        Wd = Cd + 4 * (Jd.length + 2),
        Pd = new Uint8Array(Wd + (Nd.byteLength + 3 & -4)),
        Zd = new DataView(Pd.buffer);
      return Zd.setUint32(0, dd, !0), Zd.setUint32(Cd, pd, !0), Jd.forEach(((dd, Jd) => {
        Zd.setUint32(Cd + 4 * (Jd + 1), dd, !0)
      })), Zd.setUint32(Wd - 4, Nd.byteLength, !0), Pd.set(Nd, Wd), Pd
    }

    function ld(dd, Jd) {
      return od(dd, [Wd], Jd)
    }

    function Qd(dd, Jd) {
      return od(dd, [Nd, Zd], Jd)
    }

    function Ld(dd, Jd) {
      return od(dd, [Nd, gd], Jd)
    }

    function Od(dd, Jd) {
      return od(dd, [Nd, Pd], Jd)
    }

    function ed(dd) {
      const Jd = Cd;
      if (dd.byteLength < Jd + 12) return !1;
      const kd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      return kd.getUint32(Jd, !0) === pd && kd.getUint32(Jd + 4, !0) === Nd && kd.getUint32(Jd + 8, !0) === Pd
    }
  },
  40952: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => xd,
      e: () => ed,
      g: () => vd,
      h: () => ad,
      l: () => sd,
      p: () => Md,
      t: () => Id
    });
    var pd = kd(4688),
      Nd = kd(40818);
    const Wd = 1,
      Pd = 18,
      Zd = 19,
      gd = 20,
      Cd = {
        [Wd]: "link",
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
        [Pd]: "retry linked",
        [Zd]: "fallback linked",
        [gd]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Kd(dd, Jd, kd) {
      return dd === Pd ? "program retry" : dd === Wd ? "program link" : dd === Zd || dd === gd ? `program ${Jd} ${kd}` : "program"
    }
    const od = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      ld = {
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
      Qd = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Ld = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      Od = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function ed(dd, Jd) {
      return dd === pd.d.RenderSerialLinks && void 0 !== Od[15 & Jd]
    }
    const Rd = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Id(dd) {
      return String(dd).replace(/\d/g, (dd => String.fromCharCode(97 + Number(dd))))
    }

    function Gd(dd, Jd) {
      var kd;
      return null !== (kd = dd[Jd]) && void 0 !== kd ? kd : Id(Jd)
    }

    function vd() {
      return Id((0, Nd.e)())
    }

    function xd(dd, Jd) {
      switch (dd) {
        case pd.d.RenderSceneRowNotDrawn:
          return {
            words: ` ${Gd(ld,Jd)}`, instance: String(Jd), group: String(dd)
          };
        case pd.d.RenderChunkMeshNotDrawn: {
          const kd = 0 === (128 & Jd) ? "" : " shortage",
            pd = Jd >>> 8;
          return {
            words: ` ${Gd(Qd,127&Jd)}${kd}${0===pd?"":` kind ${Id(pd)}`}`,
            instance: String(Jd),
            group: String(dd)
          }
        }
        case pd.d.RenderInternal: {
          const kd = Gd(od, 255 & Jd),
            pd = Jd >>> 8 & 255;
          if (0 === pd) return {
            words: ` ${kd}`,
            instance: String(Jd),
            group: String(dd)
          };
          const Nd = Gd(Cd, pd),
            Wd = Jd >>> 16;
          return {
            words: ` ${kd} ${Nd} program ${Id(Wd)}`,
            instance: `${kd} ${Nd} ${Wd}`,
            group: Kd(pd, Nd, kd),
            gpuDetails: {
              programFailure: Nd,
              program: String(Wd)
            }
          }
        }
        case pd.d.RenderSerialLinks: {
          if (ed(dd, Jd)) {
            const dd = function(dd) {
              const Jd = (Jd, kd) => Id(dd >>> Jd & (1 << kd) - 1),
                kd = dd >>> 30 & 1 ? " restored" : "";
              return `link census ${Od[15&dd]} linked ${Jd(22,8)} failed ${Jd(4,6)} retried ${Jd(10,6)} fallback ${Jd(16,6)}${kd}`
            }(Jd);
            return {
              words: ` ${dd}`,
              instance: String(15 & Jd),
              group: "link census",
              gpuDetails: {
                linkCensus: dd
              }
            }
          }
          const kd = Gd(Ld, Jd);
          return {
            words: ` ${kd}`,
            instance: String(Jd),
            group: String(dd),
            gpuDetails: {
              serialLinks: kd
            }
          }
        }
        case pd.d.RenderGlErrorAfterRestore: {
          const kd = Gd(Rd, 65535 & Jd),
            pd = Jd >>> 16,
            Nd = 65535 !== pd;
          return {
            words: ` ${kd}${Nd?` program ${Id(pd)}`:""}`,
            instance: String(Jd),
            group: String(dd),
            gpuDetails: Nd ? {
              glError: kd,
              program: String(pd)
            } : {
              glError: kd
            }
          }
        }
        default:
          return null
      }
    }
    const qd = 2,
      Bd = new Map;

    function sd(dd) {
      let {
        group: Jd,
        instance: kd
      } = dd, pd = Bd.get(Jd);
      return void 0 === pd && (pd = [], Bd.set(Jd, pd)), !pd.includes(kd) && (pd.length >= qd || (pd.push(kd), !1))
    }

    function ad() {
      return Bd.size > 0
    }

    function Md() {
      Bd.clear()
    }
  },
  40874: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Rd,
      f: () => Id,
      j: () => ed,
      l: () => qd
    });
    var pd = kd(6514),
      Nd = kd(29),
      Wd = kd(4155),
      Pd = kd(4688),
      Zd = kd(6505),
      gd = kd(40880);

    function Cd(dd, Jd) {
      const kd = (0, Zd.d)(Jd.variants);
      return dd.setShaderPack(kd.variantFlags, kd.hooks, kd.moduleCodes, (0, gd.A)(Jd.layers), gd.q[Jd.WC], Jd.keepCircleShadows)
    }
    const Kd = 0,
      od = 1,
      ld = 2,
      Qd = "shaderPack:failedToCompile",
      Ld = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Od = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function ed(dd, Jd) {
      var kd;
      const pd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.reason) && void 0 !== kd ? kd : "none";
      return Ld.has(pd) ? {
        messageKey: Jd ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === pd && "override" === (null === dd || void 0 === dd ? void 0 : dd.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Od.has(pd) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const Rd = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Id extends Error {
      constructor(dd) {
        super(`the shader pack can't run in this game: ${dd}`), this.messageKey = dd, this.name = "ShaderPackJoinError"
      }
    }
    const Gd = "strict";
    class vd {
      constructor(dd) {
        this.deps = dd, this.pagePack = void 0, this.loaded = null, this.WC = Gd, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = dd.load().catch((Jd => (dd.warn("the shader pack could not load: the game draws without it", Jd), {
          status: "none"
        }))).then((dd => (this.loaded = dd, "active" === dd.status && (this.handOverToPreviews(dd), null !== dd.harnessPolicy && (this.WC = dd.harnessPolicy, this.handOver())), dd)))
      }
      async join(dd) {
        this.leave();
        const Jd = this.game,
          [kd, Nd] = await Promise.all([this.pagePack, this.policyOf(dd)]);
        if (Jd !== this.game || "none" === kd.status) return null;
        const Wd = "active" === kd.status ? kd.pack.variants : kd.variants,
          Pd = (0, pd.i)(Wd, Nd);
        if (Pd && "active" === kd.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Pd) {
          const dd = this.cantRun(kd, Nd);
          if (null !== dd) return dd
        } else if ("blocked" === kd.status || null === this.deps.core) return null;
        return this.WC = Nd, this.handOver(), Pd && this.refused ? Qd : (this.joined = !0, this.offInThisGame = !Pd, null)
      }
      async replay(dd) {
        const Jd = await this.join(dd);
        null === Jd ? this.playable() : this.deps.failInGame(Jd)
      }
      cantRun(dd, Jd) {
        const {
          core: kd,
          noWebGpu: pd
        } = this.deps;
        if ("blocked" === dd.status) {
          return "shaderPack:failedUnchecked" === dd.messageKey && null === kd && pd.noAdapter ? pd.messageKey : dd.messageKey
        }
        return this.refused || this.failedPolicies.has(Jd) ? Qd : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var dd;
        return this.runsInJoinedGame() && "active" === (null === (dd = this.loaded) || void 0 === dd ? void 0 : dd.status) ? function(dd, Jd) {
          const kd = dd.filter((dd => (0, pd.i)([dd], Jd))),
            Nd = dd => kd.some((Jd => Jd[dd]));
          return {
            sceneDepth: Nd("sceneDepth"),
            sunShadow: Nd("sunShadow"),
            airShadow: Nd("airShadow")
          }
        }(this.loaded.pack.variants, this.WC) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Qd) : (null !== this.couldntRun ? this.notify(Wd.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.WC) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(dd) {
        for (const {
            code: Jd,
            detail: kd
          }
          of dd)
          if (Jd === Pd.d.RenderShaderPackNotRun) switch (255 & kd) {
            case Kd:
              this.refused = !0, this.failed();
              break;
            case od:
              this.failedPolicies.add(this.WC), this.failed();
              break;
            case ld:
              this.failedModelPolicies.add(this.WC), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Qd) : this.failedWhileJoining = !0)
      }
      fail(dd) {
        this.leave(), this.deps.failInGame(dd)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(dd, Jd) {
        const kd = this.game;
        this.deps.notify(dd, (() => kd === this.game && this.joined), Jd)
      }
      handOver() {
        var dd;
        const {
          core: Jd
        } = this.deps;
        null !== Jd && "active" === (null === (dd = this.loaded) || void 0 === dd ? void 0 : dd.status) && (Cd(Jd, {
          ...this.loaded.pack,
          WC: this.WC
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(dd) {
        let {
          pack: Jd,
          harnessPolicy: kd
        } = dd;
        const {
          previews: pd
        } = this.deps;
        null !== pd && Cd(pd, {
          ...Jd,
          WC: null !== kd && void 0 !== kd ? kd : Gd
        })
      }
      policyOf(dd) {
        return this.deps.policyOf(dd).catch((dd => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", dd), Gd)))
      }
    }
    const xd = "wasmShaderPackNotice";

    function qd(dd, Jd, kd, pd) {
      return Nd.j.subscribe(xd, (dd => {
        let {
          translationKey: Jd,
          stillCurrent: kd,
          reasonKey: pd
        } = dd;
        kd() && Nd.j.nO("chat", (0, Wd.h)(Jd, pd))
      })), new vd({
        load: Bd,
        policyOf: sd,
        core: dd,
        previews: Jd,
        noWebGpu: kd,
        notify: (dd, Jd, kd) => {
          const pd = {
            translationKey: dd,
            stillCurrent: Jd,
            reasonKey: kd
          };
          Nd.j.nO(xd, pd, !0)
        },
        failInGame: dd => {
          Nd.j.nO(Wd.g, dd)
        },
        warn: pd
      })
    }
    async function Bd() {
      const [{
        shaderPackPage: dd,
        harnessShaderPackMode: Jd
      }, {
        shaderPackTextures: pd
      }] = await Promise.all([kd.e(130).then((() => kd(39347))), kd.e(131).then((() => kd(6496)))]), Nd = await dd.load();
      return "active" !== Nd.status ? Nd : {
        status: "active",
        pack: {
          variants: Nd.pack.variants,
          layers: pd().layers,
          keepCircleShadows: Nd.pack.keepCircleShadows
        },
        harnessPolicy: Jd()
      }
    }
    async function sd(dd) {
      var Jd;
      const [{
        harnessShaderPackMode: pd
      }, {
        getShaderPackPolicy: Nd
      }] = await Promise.all([kd.e(130).then((() => kd(39347))), kd.e(90).then((() => kd(41237)))]);
      return null !== (Jd = pd()) && void 0 !== Jd ? Jd : Nd(dd)
    }
  },
  40986: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      e: () => ed,
      i: () => gd,
      m: () => Cd,
      q: () => Kd,
      s: () => ld
    });
    var pd = kd(40988),
      Nd = kd(40991);
    const Wd = "atlas:",
      Pd = 3e4;
    class Zd extends Error {
      constructor(dd, Jd) {
        super(`fetching ${dd} answered HTTP ${Jd}`), this.url = dd, this.status = Jd, this.name = "TerrainTextureFetchError"
      }
    }

    function gd(dd) {
      if (!dd.startsWith(Wd)) return null;
      const Jd = Number(dd.slice(Wd.length));
      return Number.isInteger(Jd) && Jd >= 0 ? Jd : null
    }
    async function Cd() {
      const dd = await kd.e(202).then((() => kd(34385)));
      return {
        atlasSheets: dd.blockAtlasUrls,
        texture: Jd => {
          var kd, pd, Wd;
          return null !== (kd = null !== (pd = null !== (Wd = dd.animatedBlockTextures[Jd]) && void 0 !== Wd ? Wd : dd.rotatedBlockTextures[Jd]) && void 0 !== pd ? pd : Nd.b[Jd]) && void 0 !== kd ? kd : null
        }
      }
    }
    async function Kd(dd) {
      const Jd = new AbortController,
        kd = setTimeout((() => {
          Jd.abort(new DOMException(`${dd} took over ${Pd} ms`, "TimeoutError"))
        }), Pd);
      let pd;
      try {
        const kd = await fetch(dd, {
          signal: Jd.signal
        });
        if (!kd.ok) throw new Zd(dd, kd.status);
        pd = await kd.blob()
      } finally {
        clearTimeout(kd)
      }
      const Nd = await createImageBitmap(pd, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return ld(Nd)
      } finally {
        Nd.close()
      }
    }
    const od = 8192;

    function ld(dd) {
      const {
        width: Jd,
        height: kd
      } = dd, Nd = Math.max(1, Math.min(kd, od)), Wd = (0, pd.g)(Jd, Nd, {
        willReadFrequently: !0
      });
      if (!Wd) throw new Error("no 2D context to read the texture back");
      Wd.globalCompositeOperation = "copy";
      const Pd = new Uint8Array(Jd * kd * 4);
      for (let pd = 0; pd < kd; pd += Nd) {
        const Zd = Math.min(Nd, kd - pd);
        Wd.drawImage(dd, 0, pd, Jd, Zd, 0, 0, Jd, Zd), Pd.set(Wd.getImageData(0, 0, Jd, Zd).data, pd * Jd * 4)
      }
      return {
        width: Jd,
        height: kd,
        pixels: Pd
      }
    }
    async function Qd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kd;
      const pd = [],
        Nd = await Promise.all(dd.map((async dd => {
          var Nd, Pd;
          const Zd = null !== (Nd = null === (Pd = Jd.decoded) || void 0 === Pd ? void 0 : Pd.call(Jd, dd)) && void 0 !== Nd ? Nd : null,
            Cd = null === Zd ? function(dd, Jd) {
              if (dd.startsWith(Wd)) {
                var kd;
                const pd = gd(dd);
                return null === pd ? null : null !== (kd = Jd.atlasSheets[pd]) && void 0 !== kd ? kd : null
              }
              return Jd.texture(dd)
            }(dd, Jd) : null,
            Kd = null !== Zd && void 0 !== Zd ? Zd : null === Cd ? null : kd(Cd);
          if (null === Kd) return pd.push({
            name: dd,
            url: Cd,
            error: new Error(`no URL for terrain texture ${dd}`)
          }), null;
          try {
            const Jd = await Kd;
            if (Jd.pixels.byteLength !== Jd.width * Jd.height * 4) throw new Error(`decoded ${Jd.pixels.byteLength} bytes for ${Jd.width}x${Jd.height} texels`);
            return {
              name: dd,
              texture: Jd
            }
          } catch (od) {
            return pd.push({
              name: dd,
              url: Cd,
              error: od
            }), null
          }
        }))),
        Pd = Nd.filter((dd => null !== dd)),
        Zd = new Uint32Array(2 * Pd.length);
      Pd.forEach(((dd, Jd) => {
        let {
          texture: kd
        } = dd;
        Zd[2 * Jd] = kd.width, Zd[2 * Jd + 1] = kd.height
      }));
      return {
        handOver: {
          names: Pd.map((dd => {
            let {
              name: Jd
            } = dd;
            return Jd
          })),
          textures: Pd.map((dd => {
            let {
              texture: Jd
            } = dd;
            return Jd.pixels
          })),
          sizes: Zd
        },
        failures: pd
      }
    }
    const Ld = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Od() {}
    class ed {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ld,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = dd, this.retryMs = Jd, this.keepBelow = kd, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cd,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const pd = ++this.started,
          Nd = {
            decode: kd.decode,
            wholeAtlas: kd.wholeAtlas
          };
        return this.loadAndHandOver(Jd, Nd, dd, (() => {
          var dd;
          return pd < this.landed || !1 === (null === (dd = kd.wanted) || void 0 === dd ? void 0 : dd.call(kd))
        }), {
          onTaken: (dd, kd) => {
            this.landed = pd, this.current = {
              mine: pd,
              sources: Jd,
              load: Nd,
              qQ: dd,
              failed: kd
            }
          }
        })
      }
      restore(dd) {
        var Jd;
        const kd = this.current;
        if (null === kd) return Promise.resolve(null);
        if ((null === (Jd = this.restoring) || void 0 === Jd ? void 0 : Jd.mine) === kd.mine) return this.restoring.done;
        const pd = {
          mine: kd.mine,
          done: this.restoreLanded(kd, dd).finally((() => {
            this.restoring === pd && (this.restoring = null)
          }))
        };
        return this.restoring = pd, pd.done
      }
      async restoreLanded(dd, Jd) {
        const kd = () => this.landed !== dd.mine,
          {
            qQ: pd
          } = dd;
        if (null !== pd) return this.stopped() ? null : this.core.setTerrainTextures(pd.names, pd.textures, pd.sizes);
        let Nd = Jd;
        for (let Wd = 0;; Wd++) {
          const Jd = this.retryMs.at(Wd),
            pd = {
              allOrNothingExcept: void 0 === Jd ? void 0 : dd.failed
            },
            Pd = await this.loadAndHandOver(dd.sources, dd.load, Nd, kd, pd);
          if (!1 !== Pd || void 0 === Jd || this.stopped()) return Pd;
          if (Nd = Od, await new Promise((dd => {
              setTimeout(dd, Jd)
            })), kd()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Wd = this.core.terrainTextureNames();
        var Pd;
        if (0 === Wd.length) return null === (Pd = Nd.onTaken) || void 0 === Pd || Pd.call(Nd, null, new Set), !0;
        let Zd, Cd;
        try {
          Zd = await dd(), Cd = await Qd(Wd, Zd, Jd.decode)
        } catch (ed) {
          return pd() ? null : (kd({
            name: null,
            url: null,
            error: ed
          }), !1)
        }
        if (pd() || this.stopped()) return null;
        for (const gd of Cd.failures) kd(gd);
        const Kd = Nd.allOrNothingExcept;
        if (void 0 !== Kd && Cd.failures.some((dd => {
            let {
              name: Jd
            } = dd;
            return null === Jd || !Kd.has(Jd)
          })) || !0 === Jd.wholeAtlas && Cd.failures.some((dd => {
            let {
              name: Jd
            } = dd;
            return null === Jd || null !== gd(Jd)
          }))) return !1;
        const {
          handOver: od
        } = Cd, ld = function(dd) {
          return dd.textures.reduce(((dd, Jd) => dd + Jd.byteLength), 0)
        }(od) < this.keepBelow, Ld = this.core.setTerrainTextures(od.names, od.textures, od.sizes, ld ? void 0 : () => {
          !async function(dd, Jd) {
            await Jd;
            for (const {
                buffer: pd
              }
              of dd) {
              const dd = pd;
              var kd;
              if (!dd.detached) null === (kd = dd.transfer) || void 0 === kd || kd.call(dd, 0)
            }
          }(od.textures, Zd.heldUntil)
        });
        if (Ld) {
          var Od;
          const dd = new Set(Cd.failures.flatMap((dd => {
            let {
              name: Jd
            } = dd;
            return null === Jd ? [] : [Jd]
          })));
          null === (Od = Nd.onTaken) || void 0 === Od || Od.call(Nd, ld ? od : null, dd)
        }
        return Ld
      }
    }
  },
  37023: (dd, Jd, kd) => {
    function pd(dd) {
      return "fetch" === dd || "timeout" === dd || "integrity" === dd ? "download" : "browser"
    }
    kd.d(Jd, {
      d: () => Nd,
      f: () => Pd,
      g: () => gd,
      i: () => Zd,
      k: () => pd,
      m: () => Wd
    });
    const Nd = "https://discord.gg/playbloxd";

    function Wd(dd) {
      return "download" === dd ? {
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

    function Pd(dd, Jd) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Jd ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: dd.code
        },
        discordLink: Jd,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Zd() {
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

    function gd(dd, Jd, kd) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: kd ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: dd.reason
        },
        discordLink: null === dd.name,
        confirm: Jd ? "general:reconnect" : dd.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6505: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => vd,
      f: () => xd,
      h: () => Id,
      l: () => Rd
    });
    var pd = kd(6514);
    const Nd = 6,
      Wd = 3,
      Pd = 1,
      Zd = 2,
      gd = 4,
      Cd = 8,
      Kd = 16,
      od = 32,
      ld = 64,
      Qd = 128,
      Ld = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Od(dd) {
      if (!dd) return 0;
      const Jd = Ld.indexOf(dd);
      if (Jd <= 0) throw new Error(`"${dd}" is not a shader pack hook function`);
      return Jd
    }

    function ed(dd) {
      if (0 === dd) return null;
      const Jd = Ld[dd];
      if (void 0 === Jd) throw new Error(`${dd} is not a shader pack hook function id`);
      return Jd
    }

    function Rd(dd) {
      const Jd = pd.c.length;
      return {
        strict: dd >= Jd,
        program: pd.c[dd % Jd]
      }
    }

    function Id(dd) {
      return Number(dd.strict) * pd.c.length + pd.c.indexOf(dd.program)
    }

    function Gd(dd) {
      return "" === dd ? [] : dd.split(" ")
    }

    function vd(dd) {
      const Jd = {
        variantFlags: new Uint8Array(Nd),
        hooks: new Uint8Array(Nd * Wd),
        moduleCodes: Array(Nd).fill(""),
        reads: Array(2 * Nd).fill("")
      };
      for (const kd of dd) {
        const dd = Id(kd.key),
          pd = (dd, Jd) => null === kd.hooks.surface || kd.reads.fragment.includes(dd) ? 0 : Jd;
        Jd.variantFlags[dd] = (kd.sceneDepth ? Pd : 0) | (kd.movesVertices ? Zd : 0) | (kd.sunShadow ? gd : 0) | (kd.airShadow ? Cd : 0) | (kd.discards ? Kd : 0) | pd("localPosition", od) | pd("enchantSpeed", ld) | pd("enchantTier", Qd), Jd.hooks[dd * Wd] = Od(kd.hooks.vertex), Jd.hooks[dd * Wd + 1] = Od(kd.hooks.surface), Jd.hooks[dd * Wd + 2] = Od(kd.hooks.light), Jd.moduleCodes[dd] = kd.moduleCode, Jd.reads[2 * dd] = kd.reads.vertex.join(" "), Jd.reads[2 * dd + 1] = kd.reads.fragment.join(" ")
      }
      return Jd
    }

    function xd(dd) {
      const {
        hooks: Jd,
        moduleCodes: kd,
        reads: pd
      } = dd;
      return Array.from(dd.variantFlags, ((dd, Nd) => {
        const od = Nd * Wd;
        return {
          key: Rd(Nd),
          hooks: {
            vertex: ed(Jd[od]),
            surface: ed(Jd[od + 1]),
            light: ed(Jd[od + 2])
          },
          moduleCode: kd[Nd],
          sceneDepth: 0 !== (dd & Pd),
          sunShadow: 0 !== (dd & gd),
          airShadow: 0 !== (dd & Cd),
          movesVertices: 0 !== (dd & Zd),
          discards: 0 !== (dd & Kd),
          reads: {
            vertex: Gd(pd[2 * Nd]),
            fragment: Gd(pd[2 * Nd + 1])
          }
        }
      }))
    }
  },
  40880: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Od,
      E: () => Qd,
      H: () => Ld,
      b: () => Nd,
      f: () => pd,
      j: () => ld,
      m: () => Kd,
      q: () => ed,
      s: () => Wd,
      t: () => Zd,
      w: () => gd,
      x: () => Pd
    });
    const pd = 3,
      Nd = 0,
      Wd = 1,
      Pd = 2,
      Zd = {
        uniform: 3,
        ql: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gd = 10,
      Cd = "BloxdPackInputs",
      Kd = "bloxdPackInputs",
      od = [{
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
      ld = 80;

    function Qd() {
      const dd = od.map((dd => {
        let {
          name: Jd,
          type: kd
        } = dd;
        return `    ${Jd}: ${kd},\n`
      })).join("");
      return `struct ${Cd} {\n${dd}}\n@group(${pd}) @binding(${Nd}) var<uniform> ${Kd}: ${Cd};\n`
    }

    function Ld(dd, Jd) {
      const kd = new DataView(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ld),
        [pd, Nd, Wd, Pd, Zd, gd] = od;
      kd.setFloat32(pd.offset, Jd.seconds, !0), kd.setUint32(Nd.offset, Jd.lit ? 1 : 0, !0);
      for (let Cd = 0; Cd < 3; Cd++) kd.setInt32(Wd.offset + 4 * Cd, Jd.renderOffset[Cd], !0), kd.setFloat32(Pd.offset + 4 * Cd, Jd.Qdd[Cd], !0), kd.setFloat32(Zd.offset + 4 * Cd, Jd.eyePosition[Cd], !0), kd.setFloat32(gd.offset + 4 * Cd, Jd.shadowDirection[Cd], !0)
    }

    function Od(dd) {
      const Jd = new Uint32Array(Math.max(1, dd.length));
      return dd.forEach(((dd, kd) => {
        let {
          id: pd,
          rotation: Nd
        } = dd;
        Jd[kd] = 65535 & pd | (3 & Nd) << 16
      })), Jd
    }
    const ed = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6514: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Pd,
      i: () => Zd,
      j: () => Nd,
      n: () => Wd
    });
    const pd = ["terrain", "liquid", "model"];

    function Nd() {
      const dd = [];
      for (const Jd of [!1, !0])
        for (const kd of pd) dd.push({
          strict: Jd,
          program: kd
        });
      return dd
    }

    function Wd(dd) {
      return `${dd.strict?"strict":"allow"}.${dd.program}`
    }

    function Pd(dd) {
      return !dd.hooks.vertex && !dd.hooks.surface && !dd.hooks.light
    }

    function Zd(dd, Jd) {
      return "off" !== Jd && (null === dd || dd.some((dd => dd.key.strict === ("strict" === Jd) && !Pd(dd))))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);