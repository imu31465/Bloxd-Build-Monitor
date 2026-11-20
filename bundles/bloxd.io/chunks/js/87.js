export const id = 87;
export const ids = [87];
export const modules = {
  38297: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      h: () => Nv,
      k: () => lv,
      o: () => Tv,
      s: () => dv,
      w: () => pv
    });
    const hv = "A valid external Instance reference no longer exists.",
      Sv = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      ev = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const gv = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function pv(vv, zv) {
      return vv ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(vv) {
        var zv;
        const Pv = null !== (zv = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(vv)) && void 0 !== zv ? zv : /failed with ([A-Z][A-Z0-9_]+)/.exec(vv);
        return Pv ? Pv[1] : vv.includes(hv) ? "gpu_process_lost" : "other"
      }(zv)
    }

    function dv(vv) {
      return `${(null===vv||void 0===vv?void 0:vv.vendor)||"unknown vendor"} ${(null===vv||void 0===vv?void 0:vv.architecture)||"unknown architecture"}`
    }

    function Nv(vv) {
      return Wv(vv)[1]
    }

    function lv(vv) {
      return Wv(vv)[2]
    }

    function Tv(vv) {
      return wv(ev, vv)[1]
    }

    function Wv(vv) {
      return wv(Sv, vv)
    }

    function wv(vv, zv) {
      var Pv;
      return null !== (Pv = vv.find((vv => {
        let [Pv] = vv;
        return zv < Pv
      }))) && void 0 !== Pv ? Pv : vv[vv.length - 1]
    }
  },
  38604: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      g: () => Sv
    });
    const hv = 45e3;
    class Sv extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35849: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv,
      f: () => ev,
      g: () => gv
    });
    const hv = 1024,
      Sv = 1024 * hv;

    function ev(vv) {
      return 2 ** Math.floor(Math.log2(Math.max(1, vv / Sv)))
    }

    function gv(vv) {
      return (vv / Sv).toFixed(1)
    }
  },
  36024: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => pv,
      k: () => gv,
      m: () => dv,
      o: () => Nv,
      q: () => lv
    });
    var hv = Pv(185);
    const Sv = 32 * Pv(35849).e,
      ev = 6144,
      gv = 4608,
      pv = 512;

    function dv(vv) {
      return Math.floor(Sv * vv / ev)
    }

    function Nv(vv) {
      const zv = vv - Math.floor(vv / 6);
      let Pv = hv.f.maxChunkHorizAddDistance,
        Sv = hv.f.maxChunkVertAddDistance;
      if (lv(Pv + 1, Sv + 1) <= zv) return null;
      for (; lv(Pv + 1, Sv + 1) > zv && (Pv > 0 || Sv > 0);) Pv > Sv ? Pv-- : Sv--;
      return {
        horizontal: Pv,
        vertical: Sv
      }
    }

    function lv(vv, zv) {
      const Pv = Math.max(vv, zv);
      let hv = 0;
      for (let Sv = -Pv; Sv <= Pv; Sv++)
        for (let ev = -Pv; ev <= Pv; ev++)
          for (let gv = -Pv; gv <= Pv; gv++) Tv(vv, zv, Sv, ev, gv) && hv++;
      return hv
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      const ev = Pv * Pv + Sv * Sv;
      return vv === zv ? ev + hv * hv <= vv * vv : vv > zv ? Math.abs(hv) <= zv && ev + hv * hv <= vv * vv : ev <= vv * vv && ev + hv * hv <= zv * zv
    }
  },
  40156: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      g: () => pv,
      h: () => lv,
      k: () => dv,
      l: () => gv
    });
    var hv = Pv(185);
    const Sv = 3e3,
      ev = 15e3;

    function gv(vv) {
      const zv = vv.endsWith(hv.l);
      return {
        text: (zv ? vv.slice(0, -hv.l.length) : vv) || null,
        dropsCache: zv
      }
    }
    const pv = "Either your internet isn't working or this is a bug.";

    function dv(vv, zv) {
      const Pv = lv(vv);
      return null !== Pv.name && "" === hv.b[Pv.name].text && null !== zv ? zv : Pv.reason
    }
    const Nv = "You were removed from the game.";

    function lv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Sv = null !== (zv = Object.keys(hv.b).find((zv => hv.b[zv].code === vv))) && void 0 !== zv ? zv : null;
      if (null === Sv) return {
        code: vv,
        name: Sv,
        reason: null !== Pv && void 0 !== Pv ? Pv : `${pv}\nCode: ${vv}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ev,
        canReconnect: gv = !1
      } = hv.b[Sv], dv = vv === hv.b.outdatedVersion.code || vv === hv.b.loadRecaptchaError.code;
      return {
        code: vv,
        name: Sv,
        reason: "" !== ev ? ev : null !== Pv && void 0 !== Pv ? Pv : vv === hv.b.gameOrPluginKick.code ? Nv : `Code: ${vv}`,
        canReconnect: gv,
        automaticallyReconnect: vv === hv.b.customGameUpdated.code || vv === hv.b.duplicateLobbyNameError.code,
        requiresRefresh: dv
      }
    }
  },
  4535: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => hv.q,
      $c: () => hv.pb,
      $d: () => Hv,
      Ab: () => lv,
      Bb: () => hv.C,
      Bc: () => hv.X,
      Cd: () => hv.Kb,
      Ce: () => tv,
      D: () => Rv,
      Db: () => yv,
      Ec: () => hv.$,
      Ee: () => xv,
      F: () => wz,
      Fb: () => rv,
      G: () => kv,
      Gd: () => Ov,
      Hc: () => hv.bb,
      He: () => dv,
      Ib: () => vz,
      Jd: () => hv.Mb,
      K: () => hv.f,
      Kc: () => hv.eb,
      Lb: () => Pz,
      Ld: () => hv.Ob,
      Le: () => Iv,
      M: () => Nv,
      Oc: () => hv.fb,
      Oe: () => Cz,
      P: () => hv.g,
      Pb: () => Sv.d,
      Pd: () => hv.Vb,
      Qc: () => hv.lb,
      Qe: () => wv,
      Rd: () => ev,
      S: () => uv,
      Sb: () => Yv,
      Sc: () => az,
      Sd: () => Cv,
      Td: () => dz,
      Vb: () => Qv,
      W: () => hv.h,
      Wc: () => lz,
      Xc: () => Sz,
      Xd: () => Av,
      Y: () => bv,
      Zb: () => Vv,
      ae: () => Zv,
      bc: () => Dv,
      be: () => Bv,
      cd: () => hv.qb,
      db: () => hv.t,
      e: () => zz,
      eb: () => hv.u,
      ec: () => hv.M,
      fc: () => Uv,
      fd: () => hv.sb,
      g: () => sv,
      gb: () => Tv,
      gd: () => Xv,
      ge: () => Mv,
      hc: () => jv,
      je: () => Ev,
      k: () => av,
      kb: () => cv,
      kc: () => gz,
      kd: () => hv.xb,
      le: () => Jv,
      md: () => hv.zb,
      n: () => Nz,
      nc: () => Gv,
      ne: () => pz,
      ob: () => hv.x,
      p: () => nv,
      pc: () => Tz,
      q: () => Fv,
      qd: () => hv.Cb,
      qe: () => sz,
      sb: () => hv.A,
      se: () => mv,
      t: () => hv.d,
      tb: () => Lv,
      tc: () => Sv.i,
      ud: () => hv.Hb,
      vc: () => iv,
      ve: () => ov,
      w: () => Wz,
      wb: () => ez,
      xc: () => hz,
      y: () => Kv,
      yd: () => hv.Jb,
      z: () => gv,
      ze: () => qv
    });
    var hv = Pv(4542),
      Sv = Pv(2304);
    const ev = Math.round(1e3 / hv.Vb),
      gv = 4,
      pv = 2;

    function dv() {
      return crypto.getRandomValues(new Uint32Array(pv))
    }
    const Nv = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      lv = 16,
      Tv = {
        Draws: 1,
        NetAll: 2
      },
      Wv = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function wv(vv) {
      return (vv.nametagsHidden ? fv.NametagsHidden : 0) | (vv.crouchToggle ? fv.CrouchToggle : 0) | (vv.bhopDisabled ? fv.BhopDisabled : 0) | (vv.disableBobbing ? fv.DisableBobbing : 0) | (vv.ezTowering ? fv.EzTowering : 0) | (vv.ezBridging ? fv.EzBridging : 0) | (vv.showChunkBorders ? fv.ShowChunkBorders : 0)
    }
    const av = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      sv = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Cv = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      iv = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      cv = 5,
      Gv = 4294967295;

    function mv(vv) {
      return (vv.showFog ? Wv.ShowFog : 0) | (vv.lighting ? Wv.Lighting : 0) | (vv.chunkFade ? Wv.ChunkFade : 0)
    }
    const jv = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      fv = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Fv = {
        Release: 1,
        KeepTouches: 2
      },
      Yv = {
        Point: 1,
        Stamped: 2
      },
      nv = {
        Add: 1,
        Clear: 2
      },
      Ov = 1,
      Dv = 8,
      Kv = 16777215,
      Vv = 4,
      Uv = {
        Resume: 1
      },
      Rv = {
        Held: 1
      };

    function xv(vv, zv) {
      return (vv | zv << 8) >>> 0
    }

    function tv(vv) {
      return 255 & vv
    }

    function qv(vv) {
      return vv >>> 8
    }

    function Iv(vv) {
      return vv + 3 & -4
    }
    const Qv = 16777216,
      Zv = 20;
    const Av = 8,
      Lv = 8,
      Hv = 16777216,
      Mv = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      yv = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Bv = 16,
      Jv = {
        Lost: 0,
        Gone: 1
      },
      Ev = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ov(vv) {
      return vv === Ev.WorldgenSeed || vv === Ev.Generate
    }
    const bv = 4,
      rv = 99,
      kv = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Xv = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      uv = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      vz = 12,
      zz = 16,
      Pz = 4,
      hz = 12,
      Sz = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      ez = 4,
      gz = 8,
      pz = 8,
      dz = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Nz = {
        Crit: 1,
        HitSelf: 2
      },
      lz = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Tz = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Wz = 12,
      wz = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      az = 67108864;

    function sz(vv) {
      for (const [zv, Pv] of Object.entries(hv.f))
        if (Pv === vv) return zv;
      return `Unknown${vv}`
    }

    function Cz(vv) {
      return {
        status: vv[hv.A.Status],
        lastError: vv[hv.A.LastError],
        lastErrorDetail: vv[hv.A.LastErrorDetail],
        errorCount: vv[hv.A.ErrorCount],
        frameIndex: vv[hv.A.FrameIndex],
        tickIndex: vv[hv.A.TickIndex],
        renderPending: vv[hv.A.RenderPending],
        firstView: vv[hv.A.FirstView],
        chunksCancelled: vv[hv.A.ChunksCancelled]
      }
    }
  },
  39956: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Tv,
      h: () => pv,
      l: () => ev,
      o: () => Sv,
      q: () => dv,
      u: () => lv
    });
    class hv extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Sv(vv) {
      return vv instanceof RangeError && /call stack/i.test(vv.message) || vv instanceof Error && "InternalError" === vv.name && /recursion/i.test(vv.message)
    }

    function ev(vv) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(vv))
    }
    const gv = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function pv(vv) {
      var zv;
      return vv instanceof WebAssembly.RuntimeError || vv instanceof hv || Sv(vv) && gv.test(null !== (zv = vv.stack) && void 0 !== zv ? zv : "")
    }

    function dv(vv, zv) {
      if (pv(vv)) throw vv;
      console.error(zv, vv)
    }

    function Nv(vv, zv, Pv, Sv, ev) {
      if (zv % Sv !== 0 || zv + Pv > vv.byteLength) throw new hv(`${ev}: ${Pv} bytes at ${zv}, ${Sv}-aligned, outside ${vv.byteLength} bytes of memory`)
    }

    function lv(vv, zv, Pv, hv, Sv) {
      return 0 === Pv ? null : (Nv(zv, Pv, hv * vv.BYTES_PER_ELEMENT, vv.BYTES_PER_ELEMENT, Sv), new vv(zv, Pv, hv))
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      return 0 === zv ? null : (Nv(vv, zv, Pv, hv, Sv), new DataView(vv, zv, Pv))
    }
  },
  40292: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    const hv = {
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
  40239: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => av,
      f: () => sv,
      j: () => Wv,
      m: () => Tv
    });
    const hv = 2e3,
      Sv = "unavailable";
    let ev = () => Promise.resolve().then((() => Pv(2724))),
      gv = null,
      pv = null,
      dv = Nv();

    function Nv() {
      let vv = () => {};
      return {
        promise: new Promise((zv => {
          vv = () => {
            zv(null)
          }
        })),
        resolve: vv
      }
    }

    function lv() {
      if (null === gv) {
        const vv = ev();
        gv = vv, vv.then((zv => {
          gv === vv && (pv = zv)
        }), (() => {
          gv === vv && (gv = null)
        }))
      }
      return gv
    }

    function Tv() {
      lv().catch((() => {}))
    }

    function Wv() {
      dv.resolve()
    }

    function wv(vv, zv, Pv, hv) {
      if (null === vv) return {
        errorKind: zv,
        fingerprint: Sv,
        dedupe: `${zv}|${hv}`
      };
      const {
        fingerprint: ev
      } = vv.clientErrorKey(zv, Pv, hv);
      return {
        errorKind: zv,
        fingerprint: ev,
        dedupe: ev
      }
    }

    function av(vv, zv, Pv, hv) {
      return null === pv ? hv ? (Tv(), wv(null, vv, zv, Pv)) : null : wv(pv, vv, zv, Pv)
    }
    async function sv(vv, zv, Pv) {
      let Sv;
      const ev = new Promise((vv => {
        Sv = setTimeout((() => {
          vv(null)
        }), hv)
      }));
      try {
        return wv(await Promise.race([lv(), ev, dv.promise]), vv, zv, Pv)
      } catch {
        return wv(null, vv, zv, Pv)
      } finally {
        clearTimeout(Sv)
      }
    }
  },
  40235: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BUILT_IN_ANIMATIONS_SITE: () => Bv,
      CORE_ERRORS_SITE: () => tv,
      EVENT_OVERFLOW_SITE: () => yv,
      FIRST_VIEW_SITE: () => Ev,
      JOIN_SITE: () => Iv,
      LEAVE_SITE: () => Qv,
      MODEL_FEED_SITE: () => Zv,
      MODEL_POOL_SITE: () => Av,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => bv,
      NON_FATAL_REPORTS_PER_SESSION: () => Tz,
      PREVIEW_ANIMATIONS_SITE: () => Mv,
      RENDER_RELOAD_SITE: () => Hv,
      TEXTURE_NAMES_SITE: () => Lv,
      TEXTURE_PACK_FEED_SITE: () => Jv,
      TurnstilePageError: () => Hz,
      WASM_LOAD_SITE: () => qv,
      crashError: () => Cz,
      crashReportsSettled: () => fz,
      flushCrashReports: () => mz,
      joinFailureCode: () => Mz,
      lokiTransport: () => Xv,
      modelFailureCode: () => rz,
      readTrap: () => Dz,
      renderLossDetail: () => aP,
      renderReloadMessage: () => WP,
      reportCoreErrors: () => Yz,
      reportCountedLoadFallback: () => Az,
      reportCrash: () => iz,
      reportDataLoadFailure: () => GP,
      reportDisconnect: () => oz,
      reportDracoDecoderFailure: () => vP,
      reportEventOverflow: () => hP,
      reportFirstViewNoTerrain: () => dP,
      reportGpuFallback: () => Qz,
      reportGpuWasmPopulation: () => Zz,
      reportLightFault: () => eP,
      reportMemoryShed: () => pP,
      reportModelFailure: () => kz,
      reportModelPoolFailure: () => Xz,
      reportModelsModuleRetry: () => uz,
      reportPageJoinFailure: () => Bz,
      reportReconnectGaveUp: () => bz,
      reportRenderReload: () => CP,
      reportReplayFault: () => lP,
      reportStaleBuildReload: () => jP,
      reportStoppedCore: () => Rz,
      reportTerrainTextureFailure: () => iP,
      reportTexturePackFeedLoadFailure: () => PP,
      reportUnstreamedCoreLoad: () => Lz,
      reportUnsupportedFallback: () => qz,
      reportUnusedSeat: () => Ez,
      reportWorkerLost: () => SP,
      reportWorkerStartTimeout: () => NP,
      reportWorldgenGaveUp: () => gP,
      reportWorldgenLoadFailure: () => zP,
      resetCrashReports: () => Fz,
      setCrashBackend: () => ez,
      setCrashScreen: () => hz,
      setCrashTransport: () => zz,
      showCrash: () => Uz,
      showJoinFailure: () => yz,
      showUnsupported: () => tz
    });
    var hv = Pv(1056),
      Sv = Pv(266),
      ev = Pv(2729),
      gv = Pv(40239),
      pv = Pv(4535),
      dv = Pv(40244),
      Nv = Pv(3218),
      lv = Pv(38297),
      Tv = Pv(108),
      Wv = Pv(686),
      wv = Pv(101),
      av = Pv(3224),
      sv = Pv(38604),
      Cv = Pv(1748),
      iv = Pv(40209),
      cv = Pv(39898),
      Gv = Pv(40161),
      mv = Pv(40166),
      jv = Pv(38634),
      fv = Pv(3466),
      Fv = Pv(3473),
      Yv = Pv(40250),
      nv = Pv(40273),
      Ov = Pv(40282),
      Dv = Pv(36360),
      Kv = Pv(3002),
      Vv = Pv(35847),
      Uv = Pv(40087),
      Rv = Pv(35852);
    const xv = "[bloxd-wasm-client]",
      tv = "coreErrors",
      qv = "wasmLoad",
      Iv = "join",
      Qv = "leave",
      Zv = "modelFeed",
      Av = "modelWorkerPool",
      Lv = "textureNames",
      Hv = "renderReload",
      Mv = "previewAnimations",
      yv = "eventOverflow",
      Bv = "builtInAnimations",
      Jv = "texturePackFeed",
      Ev = "firstView",
      ov = 300,
      bv = 8;
    let rv = 0;
    const kv = new Set,
      Xv = (vv, zv) => {
        const Pv = gz[vv.kind];
        if (null === Pv) return void uv(vv, zv, Sz, null);
        const hv = (0, gv.b)(Pv, vv.message, vv.code, vv.fatal);
        if (null !== hv) return void uv(vv, zv, Sz, hv);
        const Sv = Sz;
        Gz("Loki", (async () => {
          uv(vv, zv, Sv, await (0, gv.f)(Pv, vv.message, vv.code))
        }))
      };

    function uv(vv, zv, Pv, Sv) {
      const {
        kind: gv,
        code: pv,
        site: dv,
        fatal: Nv,
        details: lv
      } = vv;
      if (!Nv)
        if (null === Sv || (0, ev.d)(Sv.errorKind) || kv.has(Sv.dedupe)) {
          if (rv >= bv) return;
          rv++
        } else kv.add(Sv.dedupe);
      const Tv = {
        ...lv,
        kind: gv,
        code: pv,
        site: dv,
        fatal: String(Nv),
        backend: Pv
      };
      null !== Sv && (Tv.errorKind = Sv.errorKind, Tv.fingerprint = Sv.fingerprint), zv instanceof Error && "string" === typeof zv.stack && (Tv.causeStack = zv.stack.slice(0, 2e3)), (0, hv.ws)(Cz(vv, zv), Tv)
    }
    let vz = Xv;

    function zz(vv) {
      const zv = vz;
      return vz = vv, zv
    }
    let Pz = () => {};

    function hz(vv) {
      const zv = Pz;
      return Pz = vv, zv
    }
    let Sz = "unpicked";

    function ez(vv) {
      Sz = vv
    }
    const gz = {
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
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load"
      },
      pz = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      dz = new Set(["unstreamedLoad"]),
      Nz = new Set(["linkCensus"]);
    let lz = !1;
    const Tz = 20,
      Wz = new Map;
    let wz = 0,
      az = 0;
    const sz = new Set;

    function Cz(vv, zv) {
      const Pv = Object.assign(new Error(`${vv.code}: ${vv.message}`), {
        name: "WasmClientCrash",
        cause: null !== zv && void 0 !== zv ? zv : void 0
      });
      return zv instanceof Error && zv.stack && (Pv.stack = zv.stack), Pv
    }

    function iz(vv) {
      var zv, hv;
      const {
        kind: Sv,
        code: ev,
        site: gv,
        fatal: pv,
        message: dv,
        error: Nv
      } = vv, lv = !1 !== vv.toTransport && !dz.has(Sv), Tv = !pv && lv && !Nz.has(Sv), Wv = {
        kind: Sv,
        code: ev,
        site: gv,
        fatal: pv,
        message: dv,
        details: null !== (zv = vv.details) && void 0 !== zv ? zv : {}
      }, wv = `${ev}@${gv}${void 0===vv.instance?"":`#${vv.instance}`}${pv?"!":""}`, av = (null !== (hv = Wz.get(wv)) && void 0 !== hv ? hv : 0) + 1;
      if (Wz.set(wv, av), av > 1 ? 0 === (av & av - 1) && cz((() => {
          console.warn(`${xv} ${ev} at ${gv} reported ${av} times`)
        })) : Tv && wz >= Tz ? cz((() => {
          console.warn(`${xv} ${Sv} ${ev} at ${gv}: ${dv} (not sent: the session's ${Tz} went)`, Wv.details, null !== Nv && void 0 !== Nv ? Nv : "")
        })) : (Tv && wz++, function(vv, zv, hv) {
          var Sv, ev;
          const {
            kind: gv,
            code: pv,
            site: dv,
            fatal: Nv,
            message: lv,
            details: Tv
          } = vv;
          cz((() => {
            (Nv ? console.error : console.warn)(`${xv} ${gv} ${pv} at ${dv}: ${lv}`, Tv, null !== zv && void 0 !== zv ? zv : "")
          }));
          const Wv = pz[gv],
            wv = null !== (Sv = null !== (ev = gz[gv]) && void 0 !== ev ? ev : Wv) && void 0 !== Sv ? Sv : null;
          null !== wv && Gz("counts", (async () => {
            const {
              peekVisitSessionId: vv
            } = await Promise.resolve().then((() => Pv(650)));
            if (null !== vv()) {
              const {
                reportCappedWasmFailure: vv,
                reportUncappedWasmFailure: zv,
                reportWasmFailure: hv
              } = await Pv.e(207).then((() => Pv(35841)));
              (Nz.has(gv) ? zv : void 0 === Wv ? hv : vv)(wv, lv, pv), lz = !0
            }
          }));
          hv && cz((() => {
            vz(vv, zv)
          }))
        }(Wv, Nv, lv)), pv) {
        var sv;
        const zv = null !== (sv = vv.screen) && void 0 !== sv ? sv : {
          text: (0, Dv.g)(Wv, !0),
          reload: !0
        };
        cz((() => {
          Pz(zv)
        }))
      }
      return Wv
    }

    function cz(vv) {
      try {
        vv()
      } catch (zv) {
        try {
          console.warn(`${xv} could not send a report`, zv)
        } catch {}
      }
    }

    function Gz(vv, zv) {
      try {
        const Pv = zv().catch((zv => {
          console.warn(`${xv} could not send the report to ${vv}`, zv)
        })).finally((() => {
          sz.delete(Pv)
        }));
        sz.add(Pv)
      } catch (Pv) {
        console.warn(`${xv} could not send the report to ${vv}`, Pv)
      }
    }
    async function mz(vv) {
      let zv;
      (0, gv.j)();
      const Pv = new Promise((Pv => {
        zv = setTimeout(Pv, vv)
      }));
      await Promise.race([jz(), Pv]), clearTimeout(zv)
    }
    async function jz() {
      if (await Promise.allSettled([...sz]), lz) try {
        const {
          flushClientAnalyticsEvents: vv
        } = await Promise.resolve().then((() => Pv(1475)));
        await vv()
      } catch (vv) {
        console.warn(`${xv} could not send the counts`, vv)
      }
    }
    async function fz() {
      for (; sz.size > 0;) await Promise.allSettled([...sz])
    }

    function Fz() {
      Wz.clear(), wz = 0, lz = !1, rv = 0, kv.clear(), az = 0, (0, dv.l)()
    }

    function Yz(vv, zv, Pv, hv) {
      az += zv;
      for (const {
          code: Nv,
          detail: lv
        }
        of vv) {
        var Sv, ev, gv;
        const vv = (0, pv.qe)(Nv),
          zv = (0, dv.c)(Nv, lv),
          Tv = null === hv || void 0 === hv ? void 0 : hv(Nv, lv),
          Wv = void 0 !== (null === zv || void 0 === zv ? void 0 : zv.gpuDetails),
          av = Wv ? null === (Sv = (0, wv.s)()) || void 0 === Sv ? void 0 : Sv.renderer : void 0,
          sv = Wv ? ` ${(0,dv.g)()}` : "",
          Cv = Array.from([av && `gpu ${(0,dv.m)(av)}`, Tv].filter(Boolean).join("; ")).slice(0, ov).join(""),
          iv = `core error ${vv}${null!==(ev=null===zv||void 0===zv?void 0:zv.words)&&void 0!==ev?ev:""}${sv}${Cv?`: ${Cv}`:""}`,
          cv = {
            errorCode: String(Nv),
            detail: String(lv),
            droppedBefore: String(az),
            wasmBuild: Pv.wasm,
            clientVersion: Pv.client,
            ...null === zv || void 0 === zv ? void 0 : zv.gpuDetails
          };
        null !== zv && (0, dv.j)(zv) ? cz((() => {
          console.warn(`${xv} coreError CORE-${vv}: ${iv} (not sent: the session's render warnings of its kind went)`, cv)
        })) : iz({
          kind: Oz(Nv, lv),
          code: `CORE-${vv}`,
          site: tv,
          fatal: !1,
          message: iv,
          details: cv,
          instance: null !== (gv = null === zv || void 0 === zv ? void 0 : zv.instance) && void 0 !== gv ? gv : nz(Nv, lv)
        })
      }
    }

    function nz(vv, zv) {
      return vv === pv.K.RenderDeviceLost && 0 !== (zv & pv.S.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function Oz(vv, zv) {
      return vv === pv.K.JobsHeapGaveUp ? "meshHeap" : (0, dv.e)(vv, zv) ? "linkCensus" : "coreError"
    }

    function Dz(vv) {
      return (0, Vv.h)(vv instanceof Uv.d ? vv.trap : vv, fv.E, fv.X)
    }
    const Kz = "declined=js";

    function Vz(vv) {
      return vv ? {
        labels: [Kz],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Uz(vv, zv, Pv) {
      return xz(vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Rz(vv, zv, Pv) {
      return xz(vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function xz(vv, zv, Pv, hv, Sv) {
      let {
        memoryDetails: ev = {},
        declined: gv = !1
      } = hv;
      const {
        code: pv,
        details: dv,
        message: Nv
      } = (0, iv.N)(vv, zv), lv = [];
      Object.assign(dv, (0, Rv.g)(vv.error)), null !== Pv && (dv.trapKind = Pv.kind, null !== Pv.panic && (dv.panic = (0, Vv.f)(Pv.panic)), Pv.refusedBytes > 0 && (dv.refusedAllocation = String(Pv.refusedBytes)), lv.push((0, Vv.i)(Pv.kind, Pv.refusedBytes)));
      const Tv = Vz(gv);
      return iz({
        kind: "crash",
        code: pv,
        site: vv.site,
        fatal: Sv,
        message: [...lv, ...Tv.labels, Nv].join("; "),
        details: {
          ...dv,
          ...Tv.details,
          ...ev
        },
        error: vv.error
      })
    }

    function tz(vv, zv, Pv) {
      return iz({
        kind: "unsupported",
        code: zv,
        site: qv,
        fatal: !0,
        message: Pv,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: vv,
          status: zv
        },
        screen: {
          text: (0, Dv.p)(vv),
          reload: "download" === vv
        }
      })
    }

    function qz(vv, zv, Pv) {
      return iz({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === zv ? "blocked_after_loss" : "unsupported_js_fallback",
        site: qv,
        fatal: !1,
        message: Pv,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: vv,
          status: "unsupported",
          decline: zv,
          fallback: "js"
        }
      })
    }
    const Iz = "misdrawn_gpu_js_fallback";

    function Qz(vv, zv) {
      return iz({
        kind: "gpuFallback",
        code: Iz,
        site: qv,
        fatal: !1,
        message: `the renderer plays ${vv} on ${zv} worse than the JS client`,
        details: {
          gpuFamily: vv,
          backend: zv,
          fallback: "js"
        }
      })
    }

    function Zz(vv) {
      Gz("counts", (async () => {
        await (0, Wv.d)(vv), lz = !0
      }))
    }

    function Az(vv, zv, Pv, hv) {
      const Sv = Vz(hv);
      return iz({
        kind: "unsupported",
        code: zv,
        site: qv,
        fatal: !1,
        message: [...Sv.labels, Pv].join("; "),
        details: {
          cause: vv,
          status: zv,
          fallback: "js",
          ...Sv.details
        }
      })
    }

    function Lz() {
      const {
        code: vv,
        message: zv
      } = Kv.c;
      return iz({
        kind: "unstreamedLoad",
        code: vv,
        site: qv,
        fatal: !1,
        message: zv
      })
    }
    class Hz extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Mz(vv) {
      return vv instanceof Gv.k ? 0 === vv.code ? "JOIN-matchmake" : `JOIN-${vv.code}` : vv instanceof Gv.e ? 0 === vv.code ? `JOIN-${vv.stage}` : `JOIN-${vv.stage}-${vv.code}` : vv instanceof cv.d ? "JOIN-gameCode" : vv instanceof Hz ? "JOIN-turnstilePage" : vv instanceof Gv.u ? "JOIN-trafficCheck" : vv instanceof sv.g ? "JOIN-timeout" : "JOIN-network"
    }

    function yz(vv, zv) {
      const Pv = (0, Rv.j)(vv),
        hv = {
          wasmBuild: zv.wasm,
          clientVersion: zv.client
        },
        Sv = vv instanceof Hz ? {
          text: (0, Dv.k)(),
          reload: !1
        } : void 0,
        ev = (0, mv.d)(vv),
        gv = "expected" !== ev;
      return iz({
        kind: "join",
        code: Mz(vv),
        site: Iv,
        fatal: !0,
        message: Pv,
        details: hv,
        error: vv,
        screen: Sv,
        toTransport: gv,
        instance: ev
      })
    }

    function Bz(vv, zv, Pv) {
      var hv;
      const Sv = (0, mv.d)(vv),
        ev = {
          cause: (vv instanceof Gv.e || vv instanceof Gv.k) && null !== (hv = vv.serverText) && void 0 !== hv ? hv : "",
          sinceJoinStart: (0, av.d)(Pv.sinceJoinStartMs),
          game: Pv.game,
          ...(0, av.k)(),
          wasmBuild: zv.wasm,
          clientVersion: zv.client
        };
      return iz({
        kind: "pageJoin",
        code: Mz(vv),
        site: Iv,
        fatal: !1,
        message: (0, Rv.j)(vv),
        details: ev,
        error: vv,
        toTransport: "unrecognised" === Sv,
        instance: Sv
      })
    }
    const Jz = {
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

    function Ez(vv, zv) {
      let {
        unused: Pv,
        answered: hv,
        heldMs: Sv
      } = vv;
      const {
        code: ev,
        message: gv
      } = Jz[Pv], pv = {
        unused: Pv,
        answered: String(hv),
        heldMs: String(Sv),
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "seat",
        code: ev,
        site: Iv,
        fatal: !1,
        message: gv,
        details: pv
      })
    }

    function oz(vv, zv, Pv) {
      var hv;
      let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (hv = vv.name) && void 0 !== hv ? hv : String(vv.code);
      const ev = {
          closeCode: String(vv.code),
          recognised: String(null !== vv.name),
          closeReason: Pv.closeReason,
          sinceJoined: (0, av.d)(Pv.sinceJoinedMs),
          game: Pv.game,
          ...(0, av.k)(),
          wasmBuild: zv.wasm,
          clientVersion: zv.client
        },
        gv = null === vv.name && !(0, av.h)(vv.code);
      return iz({
        kind: "disconnect",
        code: Sv,
        site: Qv,
        fatal: !1,
        message: "Left room",
        details: ev,
        toTransport: gv
      })
    }

    function bz(vv, zv) {
      const Pv = {
        ...(0, Nv.m)(vv),
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "disconnect",
        code: `reconnect-${vv.reason}`,
        site: Iv,
        fatal: !1,
        message: "Reconnect failed",
        details: Pv
      })
    }

    function rz(vv) {
      return vv.error instanceof Fv.g ? `MODEL-${vv.error.status}` : vv.error instanceof Yv.k ? "MODEL-ring" : "MODEL-network"
    }

    function kz(vv, zv) {
      const Pv = rz(vv),
        hv = `model file ${vv.file} ${vv.startup?"(startup) ":""}could not load`,
        Sv = {
          file: String(vv.file),
          url: vv.url,
          wasmBuild: zv.wasm,
          clientVersion: zv.client
        };
      return iz({
        kind: vv.startup ? "model" : "modelLate",
        code: Pv,
        site: Zv,
        fatal: vv.startup,
        message: hv,
        details: Sv,
        error: vv.error
      })
    }

    function Xz(vv, zv) {
      const Pv = {
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Av,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Pv,
        error: vv
      })
    }

    function uz(vv, zv, Pv) {
      const hv = {
        delayMs: String(zv),
        wasmBuild: Pv.wasm,
        clientVersion: Pv.client
      };
      vv instanceof Fv.g && (hv.status = String(vv.status));
      return iz({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Av,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: hv,
        error: vv
      })
    }

    function vP(vv, zv) {
      const Pv = {
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Av,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Pv,
        error: vv
      })
    }

    function zP(vv, zv) {
      const Pv = {
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: iv.L,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Pv,
        error: vv
      })
    }

    function PP(vv, zv) {
      const Pv = {
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Jv,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Pv,
        error: vv
      })
    }

    function hP(vv, zv) {
      const {
        frames: Pv,
        acks: hv,
        mask: Sv,
        outcome: ev
      } = vv, gv = {
        frames: String(Pv),
        acks: String(hv),
        mask: String(Sv),
        outcome: null !== ev && void 0 !== ev ? ev : "resynced",
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "recovered",
        code: "rejoined" === ev ? "CORE-eventOverflowRejoin" : "failed" === ev ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: yv,
        fatal: !1,
        message: `the event buffer refused records in ${Pv} frames`,
        details: gv
      })
    }

    function SP(vv, zv, Pv) {
      return iz({
        kind: "recovered",
        code: "CORE-workerLost",
        site: vv,
        fatal: !1,
        message: `a ${vv} worker was lost`,
        details: {
          reason: zv,
          wasmBuild: Pv.wasm,
          clientVersion: Pv.client
        }
      })
    }

    function eP(vv, zv, Pv) {
      const hv = {
        wasmBuild: Pv.wasm,
        clientVersion: Pv.client
      };
      return iz({
        kind: "recovered",
        code: vv,
        site: iv.r,
        fatal: !1,
        message: zv,
        details: hv
      })
    }

    function gP(vv, zv) {
      const Pv = {
        lastReason: vv,
        wasmBuild: zv.wasm,
        clientVersion: zv.client
      };
      return iz({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: iv.L,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Pv
      })
    }

    function pP(vv, zv, Pv) {
      return iz({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: iv.o,
        fatal: !1,
        message: (0, jv.k)(vv) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: vv,
          ...zv,
          wasmBuild: Pv.wasm,
          clientVersion: Pv.client
        }
      })
    }

    function dP(vv, zv, Pv, hv) {
      var Sv, ev;
      const gv = (0, dv.i)(),
        pv = {
          game: vv,
          cause: zv,
          census: null === Pv ? "none" : JSON.stringify(Pv),
          gpu: null !== (Sv = null === (ev = (0, wv.s)()) || void 0 === ev ? void 0 : ev.renderer) && void 0 !== Sv ? Sv : "",
          renderWarned: String(gv),
          browser: (0, dv.g)(),
          wasmBuild: hv.wasm,
          clientVersion: hv.client
        },
        Nv = `first view drew no whole terrain in ${nv.d/1e3} s, ${zv}${gv?", render warned":""}`;
      return iz({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Ev,
        fatal: !1,
        message: Nv,
        details: pv
      })
    }

    function NP(vv, zv, Pv) {
      return iz({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: vv,
        fatal: !1,
        message: `a ${vv} worker did not start`,
        details: {
          waitedMs: String(Math.round(zv)),
          wasmBuild: Pv.wasm,
          clientVersion: Pv.client
        }
      })
    }

    function lP(vv, zv, Pv) {
      return iz({
        kind: "recovered",
        code: "CORE-replayFault",
        site: vv,
        fatal: !1,
        message: `the replay's ${vv} failed`,
        details: {
          wasmBuild: Pv.wasm,
          clientVersion: Pv.client
        },
        error: zv
      })
    }
    const TP = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function WP(vv, zv, Pv) {
      const hv = "lost" === zv && void 0 !== Pv ? ` (${Pv})` : "";
      return `the ${vv} ${TP[zv]}${hv}`
    }
    const wP = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function aP(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Sv = null === Pv.boundAtMs ? "unbound" : `up${(0,lv.h)(hv-Pv.boundAtMs)}`,
        ev = null === Pv.adapter ? "no adapter" : (0, lv.s)(Pv.adapter),
        gv = `${(0,Cv.i)()?"hidden":"visible"} ${Sv} ${ev}${!0===Pv.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === vv) return `${vv} ${gv}`;
      const pv = null === zv || void 0 === zv ? void 0 : zv.message;
      return `${zv instanceof Cv.h?"timeout":(0,lv.w)("frames_refused"===vv,"string"===typeof pv?pv:"")} ${gv}`
    }
    const sP = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function CP(vv, zv, hv) {
      var ev, gv, pv, Nv, Wv;
      let {
        cause: wv = "lost",
        error: av,
        context: sv = wP,
        session: Cv = sP
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const iv = aP(wv, av, sv),
        cv = {
          losses: String(zv),
          cause: wv,
          detail: iv,
          vendor: null !== (ev = null === (gv = sv.adapter) || void 0 === gv ? void 0 : gv.vendor) && void 0 !== ev ? ev : "",
          architecture: null !== (pv = null === (Nv = sv.adapter) || void 0 === Nv ? void 0 : Nv.architecture) && void 0 !== pv ? pv : "",
          indirectHangs: String(sv.indirectHangs),
          samples: String(Cv.samples),
          sunShadows: String(Cv.sunShadows),
          renderDistance: String(Cv.renderDistance),
          gpuFamily: null !== (Wv = (0, Sv.e)()) && void 0 !== Wv ? Wv : "",
          browser: (0, dv.g)(),
          siteUsed: Tv.o,
          wasmBuild: hv.wasm,
          clientVersion: hv.client
        },
        Gv = WP(vv, wv),
        mv = iz({
          kind: "recovered",
          code: "CORE-renderLost",
          site: Hv,
          fatal: !1,
          message: Gv,
          details: cv,
          error: av
        });
      return Gz("ga", (async () => {
        const {
          logError: zv
        } = await Promise.resolve().then((() => Pv(2702))), hv = `${lv.e["webgpu"===vv?"WebGPU":"WebGL2"]}\n Error: ${iv}`;
        zv("warning", hv), zv("error", hv)
      })), mv
    }

    function iP(vv, zv) {
      var Pv, hv;
      const Sv = null === vv.name ? "TEXTURE-sources" : null === vv.url ? "TEXTURE-nourl" : vv.error instanceof Ov.d ? `TEXTURE-${vv.error.status}` : "TEXTURE-network",
        ev = null === vv.name ? "terrain textures could not load" : `terrain texture ${vv.name} could not load`,
        gv = {
          texture: null !== (Pv = vv.name) && void 0 !== Pv ? Pv : "",
          url: null !== (hv = vv.url) && void 0 !== hv ? hv : "",
          wasmBuild: zv.wasm,
          clientVersion: zv.client
        };
      return iz({
        kind: "terrainTexture",
        code: Sv,
        site: iv.H,
        fatal: !1,
        message: ev,
        details: gv,
        error: vv.error
      })
    }
    const cP = {
      previewAnimations: {
        site: Mv,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Bv,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function GP(vv, zv, Pv, hv) {
      const {
        site: Sv,
        prefix: ev,
        name: gv
      } = cP[vv], {
        stage: pv,
        error: dv
      } = Pv;
      return iz({
        kind: vv,
        code: "decode" === pv ? null === dv ? `${ev}-decode` : `${ev}-trap` : dv instanceof Fv.g ? `${ev}-${dv.status}` : `${ev}-network`,
        site: Sv,
        fatal: !1,
        message: "decode" === pv ? `${gv} did not decode` : `${gv} could not load`,
        details: {
          url: zv,
          wasmBuild: hv.wasm,
          clientVersion: hv.client
        },
        error: dv
      })
    }
    const mP = "staleBuild";

    function jP(vv, zv, Pv) {
      const hv = {
          failedSite: vv.site,
          url: vv.url,
          from: vv.from,
          sameBuild: String(vv.from === zv),
          reloadMs: String(Math.max(0, Date.now() - vv.at)),
          wasmBuild: Pv.wasm,
          clientVersion: Pv.client
        },
        Sv = `reloaded into a newer build after ${vv.site} failed to load: ${vv.error}`;
      return iz({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: mP,
        fatal: !1,
        message: Sv,
        details: hv
      })
    }
  },
  40273: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      d: () => Sv,
      f: () => gv
    });
    var hv = Pv(4542);
    const Sv = 3e4;
    class ev {
      constructor(vv) {
        this.yw = vv, this.waitedMs = 0, this.lastMs = null
      }
      frame(vv, zv) {
        if (zv) return !0;
        const Pv = null === this.lastMs ? 0 : vv - this.lastMs;
        return this.lastMs = vv, Pv <= 900 && (this.waitedMs += Pv), !(this.waitedMs < Sv) && (this.yw(), !0)
      }
    }

    function gv(vv, zv) {
      return 0 === (vv & hv.I.ChunkStored) ? "no chunk stored" : null === zv ? "no frame drawn" : 0 === zv.terrainParts ? "no terrain parts" : zv.terrainCompiling > 0 ? "terrain compiling" : "parts not drawn"
    }
  },
  4531: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      i: () => Sv
    });
    var hv = Pv(4535);

    function Sv(vv) {
      return "none" !== vv
    }

    function ev(vv, zv) {
      if (!vv) return "none";
      switch (zv) {
        case hv.eb.Drawn:
          return "drawn";
        case hv.eb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function gv(vv) {
      return "drawn" === vv
    }
  },
  39898: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      f: () => iv,
      h: () => sv,
      j: () => Cv,
      n: () => Wv,
      q: () => wv,
      s: () => lv,
      w: () => Tv,
      y: () => av
    });
    class hv extends Error {
      constructor(vv) {
        super(`the join's code did not load: ${vv instanceof Error?vv.message:String(vv)}`, {
          cause: vv
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === vv || void 0 === vv ? void 0 : vv.request
      }
    }
    let Sv = null,
      ev = null,
      gv = null;
    const pv = [];
    let dv = null;

    function Nv(vv, zv) {
      try {
        vv(zv)
      } catch (Pv) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Pv)
      }
    }

    function lv() {
      return dv
    }

    function Tv(vv) {
      pv.push(vv), null !== dv && Nv(vv, dv)
    }

    function Wv(vv) {
      return Sv ??= Promise.all([Pv.e(70), Pv.e(95), Pv.e(215), Pv.e(75), Pv.e(216), Pv.e(189), Pv.e(94), Pv.e(235), Pv.e(261), Pv.e(187), Pv.e(263), Pv.e(199), Pv.e(186), Pv.e(200), Pv.e(136), Pv.e(86), Pv.e(114), Pv.e(239), Pv.e(54)]).then((() => Pv(41893))).then((zv => {
        zv.loadAudio(vv), dv = zv;
        for (const vv of pv) Nv(vv, zv);
        return zv
      })).catch((vv => {
        throw Sv = null, vv
      })), Sv
    }
    async function wv(vv, zv) {
      try {
        const Pv = await Wv(vv);
        await Pv.loadClientGame(zv)
      } catch (Pv) {
        throw new hv(Pv)
      }
    }

    function av(vv, zv) {
      ev = {
        running: vv,
        shell: zv
      }
    }

    function sv() {
      return gv
    }
    async function Cv(vv) {
      const zv = ev;
      if ((null === zv || void 0 === zv ? void 0 : zv.running) !== vv) throw new Error("the core's session has ended");
      const Pv = await Wv(zv.shell.audio).catch((vv => {
        throw new hv(vv)
      }));
      if (null !== gv) return gv;
      if (ev !== zv || vv.isStopped) throw new Error("the core stopped while the game code loaded");
      if (gv = Pv.startGameHost(vv, zv.shell), null === gv) throw new Error("the core's shared tables didn't read, so the game can't start");
      return gv
    }

    function iv() {
      null !== gv && (null !== dv ? dv.endGameHost(gv) : gv.closeGame()), gv = null, ev = null
    }
  },
  40161: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      f: () => ev,
      g: () => gv,
      h: () => Sv,
      k: () => wv,
      n: () => lv,
      p: () => dv,
      q: () => Wv,
      u: () => Tv,
      x: () => pv
    });
    var hv = Pv(1755);
    const Sv = new Uint8Array([12]),
      ev = 2e3,
      gv = 257;

    function pv(vv) {
      const zv = new Uint8Array(4);
      return new DataView(zv.buffer).setUint32(0, vv, !0), zv
    }
    class dv extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Nv extends Error {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(vv), this.stage = zv, this.code = Pv, this.serverText = hv, this.name = "JoinError"
      }
    }
    class lv extends Error {
      constructor(vv) {
        super(vv), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Tv extends Error {
      constructor(vv) {
        super((0, hv.g)(vv), {
          cause: vv
        }), this.name = "TrafficCheckError"
      }
    }
    class Wv extends Error {
      constructor(vv, zv, Pv) {
        super(vv, {
          cause: Pv
        }), this.networkLost = zv, this.name = "SeatRequestError"
      }
    }
    class wv extends Error {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(vv), this.code = zv, this.serverText = Pv, this.name = "MatchmakeError"
      }
    }
  },
  40166: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      d: () => Tv
    });
    var hv = Pv(2450),
      Sv = Pv(3224),
      ev = Pv(38604),
      gv = Pv(40156),
      pv = Pv(40161),
      dv = Pv(40171);
    const Nv = "seat reservation expired.",
      lv = "early_leave";

    function Tv(vv) {
      if (vv instanceof ev.g) return "expected";
      if (vv instanceof pv.q) return vv.networkLost ? "expected" : "unrecognised";
      if (vv instanceof pv.e) {
        if ("closed" === vv.stage && (0 === vv.code || (0, Sv.h)(vv.code))) return "expected";
        if ("roomError" === vv.stage && (vv.serverText === Nv || vv.serverText === lv)) return "expected"
      }
      return vv instanceof pv.e || vv instanceof pv.k ? null === (0, gv.h)(vv.code).name ? "unrecognised" : "known" : (0, hv.f)(vv) ? "expected" : vv instanceof pv.u || vv instanceof dv.d ? "known" : "unrecognised"
    }

    function Wv(vv) {
      return vv instanceof ev.g ? "timedOut" : "expected" !== Tv(vv) || (0, hv.f)(vv) || vv instanceof pv.e && 1001 === vv.code ? void 0 : "failed"
    }
  },
  38634: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Ov,
      g: () => jv,
      k: () => Tv,
      l: () => fv,
      o: () => iv,
      s: () => Yv,
      y: () => nv
    });
    var hv = Pv(35849),
      Sv = Pv(36024);
    const ev = 64 * hv.c,
      gv = 40 * hv.e,
      pv = 36 * hv.e,
      dv = 20 * hv.e,
      Nv = 2 * hv.e,
      lv = 5 * hv.e;

    function Tv(vv) {
      return "footprint" !== vv
    }
    const Wv = 2 * hv.e,
      wv = 4 * hv.e,
      av = 35 * hv.e + Wv + wv,
      sv = 6.5 * hv.e,
      Cv = 132.5 * hv.c;

    function iv(vv) {
      const zv = sv + (0, Sv.m)(vv) + vv * Cv;
      return Math.ceil((2 * av + zv) / ev) * ev
    }
    const cv = iv(Sv.e),
      Gv = (hv.e, hv.e, hv.e, {
        targetBytes: gv,
        leastBytes: dv
      }),
      mv = {
        targetBytes: pv,
        leastBytes: dv
      };

    function jv(vv) {
      return {
        targetBytes: vv,
        leastBytes: 0
      }
    }

    function fv(vv) {
      return vv >= Sv.e ? Gv : mv
    }
    const Fv = 2 * ev;

    function Yv(vv, zv, Pv) {
      return vv + zv + Fv > (null !== Pv && void 0 !== Pv ? Pv : cv)
    }
    const nv = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? vv => {
        requestIdleCallback(vv)
      } : null
    };
    class Ov {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nv;
        this.memory = vv, this.readPeakStoredChunks = zv, this.onError = Pv, this.clock = hv, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(vv, zv, Pv) {
        this.shedding = {
          shed: vv,
          yw: zv,
          readDistanceInUse: Pv
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(vv) {
        this.footprint = vv
      }
      setCeiling(vv) {
        this.ceilingBytes = vv, this.call((() => {
          this.memory.setCeiling(vv)
        }), void 0)
      }
      ceilingMayRefuse(vv) {
        return Yv(this.memory.memoryBytes(), vv, this.ceilingBytes)
      }
      reserveAtJoin(vv) {
        let {
          targetBytes: zv,
          leastBytes: Pv
        } = vv;
        const hv = this.memory.memoryBytes(),
          Sv = hv + Pv,
          ev = Math.max(zv + (this.ballastOn() ? lv : 0), Sv),
          gv = this.call((() => this.memory.reserveUpFront(ev) ? "target" : ev > Sv && this.memory.reserveUpFront(Sv) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== gv) {
          const vv = "least" === gv ? `took ${Sv} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${ev} bytes was refused at ${hv} bytes; ${vv}`)
        }
        return this.joinReserveTaken = gv, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== gv && this.shedFor("joinReserve"), "none" !== gv
      }
      afterFrame() {
        if (this.stopped) return;
        const vv = this.clock.now(),
          zv = null !== this.stepsHeldUntil && vv >= this.stepsHeldUntil;
        if (zv && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && vv >= this.ballastCheckAt && (this.takeBallast(vv), this.stopped)) return;
        const Pv = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          hv = zv && "now" === Pv ? "none" : Pv,
          {
            requestIdle: Sv
          } = this.clock;
        "now" === hv || null !== this.pendingSince && vv - this.pendingSince >= 500 ? this.step() : "idle" === hv && null === this.pendingSince && (null === Sv ? this.step() : (this.pendingSince = vv, Sv((() => {
          null !== this.pendingSince && this.step()
        })))), vv - this.statsAt >= 1e3 && (this.statsAt = vv, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var vv, zv;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (zv = this.shedding.readDistanceInUse()) && void 0 !== zv ? zv : this.distanceInUse);
          null === (vv = this.footprint) || void 0 === vv || vv.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(vv, zv) {
        this.noteWorker(`Mesh${vv}`, zv)
      }
      meshWorkerGone(vv) {
        this.workerGone(`Mesh${vv}`)
      }
      noteWorldgen(vv) {
        this.noteWorker("Worldgen", vv)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(vv, zv) {
        const Pv = this.workers.get(vv);
        null !== Pv && void 0 !== Pv && Pv.gone && (this.replacedRefusals.reserves += Pv.stats.reservesRefused, this.replacedRefusals.allocations += Pv.stats.allocationsRefused), this.workers.set(vv, {
          stats: zv,
          gone: !1
        })
      }
      workerGone(vv) {
        const zv = this.workers.get(vv);
        zv && (zv.gone = !0)
      }
      details() {
        var vv, zv;
        const Pv = {
          wasmMemoryNow: `${(0,hv.g)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Pv.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Pv.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Sv = this.main;
        if (Sv) {
          Pv.wasmMemoryMain = Dv(Sv);
          const vv = Math.max(0, Sv.peakLiveBytes - this.ballastPeakBytes),
            zv = 0 === this.peakStoredChunks ? "-" : (vv / this.peakStoredChunks / hv.c).toFixed(1);
          Pv.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${zv} KiB`
        }
        for (const [hv, {
            stats: gv,
            gone: pv
          }] of this.workers) Pv[`wasmMemory${hv}`] = Dv(gv) + (pv ? " (gone)" : "");
        const ev = null !== (vv = null === (zv = this.footprint) || void 0 === zv ? void 0 : zv.describe()) && void 0 !== vv ? vv : null;
        return null !== ev && (Pv.wasmMemoryFootprint = ev), Pv
      }
      pageKillSnapshot() {
        var vv, zv, Pv, Sv, ev;
        let gv = (null !== (vv = null === (zv = this.main) || void 0 === zv ? void 0 : zv.reservesRefused) && void 0 !== vv ? vv : 0) + this.replacedRefusals.reserves,
          pv = (null !== (Pv = null === (Sv = this.main) || void 0 === Sv ? void 0 : Sv.allocationsRefused) && void 0 !== Pv ? Pv : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: hv
          }
          of this.workers.values()) gv += hv.reservesRefused, pv += hv.allocationsRefused;
        return {
          wasmMainMiB: Number((0, hv.g)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, hv.g)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: gv,
          refusedAllocations: pv,
          sheds: this.sheds,
          ...null === (ev = this.footprint) || void 0 === ev ? void 0 : ev.snapshot()
        }
      }
      workersMemoryBytes() {
        let vv = 0;
        for (const {
            stats: zv,
            gone: Pv
          }
          of this.workers.values()) vv += Pv ? 0 : zv.memoryBytes;
        return vv
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Nv)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(vv) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = vv + 1e3;
        const zv = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, zv)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(vv) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${vv}: frames grow on demand from here`)
      }
      shedFor(vv) {
        const {
          shedding: zv
        } = this;
        if (null === zv) return;
        this.pendingSince = null;
        const Pv = this.call((() => zv.shed(vv)), null);
        this.stopped || (null !== Pv ? (this.sheds++, this.shedCap = Pv, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), zv.yw(vv, this.sheds, this.details())) : Tv(vv) && this.stopSteps("nothing is left to shed"))
      }
      call(vv, zv) {
        if (this.stopped) return zv;
        try {
          return vv()
        } catch (Pv) {
          return this.stop(), this.onError(Pv), zv
        }
      }
    }

    function Dv(vv) {
      const zv = (vv, zv) => `${vv}/${(0,hv.g)(zv)}`;
      return `memory ${(0,hv.g)(vv.memoryBytes)} live ${(0,hv.g)(vv.liveBytes)} peak ${(0,hv.g)(vv.peakLiveBytes)} unused ${(0,hv.g)(vv.unusedBytes)} ceiling ${(0,hv.g)(vv.ceilingBytes)} MiB; grows upFront ${zv(vv.grows.upFront,vv.grownBytes.upFront)} ahead ${zv(vv.grows.ahead,vv.grownBytes.ahead)} inFrame ${zv(vv.grows.onDemandInFrame,vv.grownBytes.onDemandInFrame)} other ${zv(vv.grows.onDemand,vv.grownBytes.onDemand)}; refused reserves ${vv.reservesRefused} allocations ${vv.allocationsRefused}`
    }
  },
  40250: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      f: () => Nv,
      i: () => wv,
      k: () => Tv
    });
    var hv = Pv(3473),
      Sv = Pv(4535),
      ev = Pv(40256),
      gv = Pv(40265),
      pv = Pv(35852);
    const dv = 395,
      Nv = 2147483648,
      lv = new Uint8Array(0);
    class Tv extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Wv extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class wv {
      constructor(vv, zv, Pv) {
        var hv, Sv, gv, pv;
        let dv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = vv, this.build = zv, this.onFailure = Pv, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Yw = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (hv = dv.fetchFile) && void 0 !== hv ? hv : vv => (0, ev.g)(vv), this.onWritten = null !== (Sv = dv.onWritten) && void 0 !== Sv ? Sv : null, this.onTaken = null !== (gv = dv.onTaken) && void 0 !== gv ? gv : null, this.onPackFileFailed = null !== (pv = dv.onPackFileFailed) && void 0 !== pv ? pv : null, this.startupLeft = new Set(vv.startup);
        for (const ev of vv.startup) this.request(ev)
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
      drawnUrl(vv) {
        return this.drawn.get(vv)
      }
      request(vv) {
        const zv = this.pending.get(vv);
        if (!0 === (null === zv || void 0 === zv ? void 0 : zv.ask)) return;
        const Pv = this.dw(vv, !0);
        Pv.recheck = void 0 !== zv;
        const hv = this.drawn.get(vv);
        if (void 0 !== hv) return Pv.Vp = !0, Pv.recheck = !0, void this.fetch(vv, Pv, hv);
        this.fetchWanted(vv, Pv)
      }
      async refresh() {
        const vv = ++this.refreshes,
          zv = new Set;
        for (const gv of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const vv of gv) 0 === (vv & ev.e) && zv.add(vv);
        const Pv = [...zv];
        let hv;
        try {
          hv = await Promise.all(Pv.map((vv => this.wanted(vv))))
        } catch {
          return null
        }
        if (vv !== this.refreshes) return null;
        const Sv = {
          resent: 0,
          refetched: 0,
          delivered: Pv.filter((vv => this.drawn.has(vv))).length
        };
        return Pv.forEach(((vv, zv) => {
          const {
            url: Pv,
            inPlaceOf: ev
          } = hv[zv], gv = this.pending.get(vv);
          if (void 0 !== gv) {
            if (gv.Vp || void 0 === gv.url) return void(gv.recheck = !0);
            if (gv.url === Pv) return;
            Sv.refetched++;
            const zv = this.dw(vv, gv.ask);
            return zv.recheck = gv.recheck, void this.fetch(vv, zv, Pv, ev)
          }
          const pv = this.written.get(vv);
          void 0 === pv ? this.drawn.get(vv) !== (null !== Pv && void 0 !== Pv ? Pv : void 0) && (Sv.resent++, this.fetch(vv, this.dw(vv, !1), Pv, ev)) : pv.url !== (null !== Pv && void 0 !== Pv ? Pv : "") && (pv.attempt.recheck = !0)
        })), Sv
      }
      taken(vv, zv) {
        const Pv = new Set,
          hv = new Set;
        for (const Sv of Array.from(zv)) 0 === (Sv & Nv) ? Pv.add(Sv) : hv.add((Sv & ~Nv) >>> 0);
        for (const [Sv, ev] of this.written) ev.seq > vv || (this.written.delete(Sv), Pv.has(ev.seq) ? this.refusedFile(Sv, ev) : this.takenFile(Sv, ev, !ev.empty && !hv.has(ev.seq)))
      }
      takenFile(vv, zv, Pv) {
        const {
          attempt: hv
        } = zv;
        if (Pv) {
          var Sv;
          this.drawn.set(vv, zv.url), this.undrawn.delete(vv), void 0 !== hv.inPlaceOf ? this.refusedPack.set(vv, hv.inPlaceOf) : hv.Vp || this.refusedPack.delete(vv), null === (Sv = this.onTaken) || void 0 === Sv || Sv.call(this, vv, !0);
          const Pv = this.pending.get(vv);
          if (!0 === (null === Pv || void 0 === Pv ? void 0 : Pv.Vp) && Pv.url !== zv.url) {
            const Pv = this.dw(vv, !0);
            Pv.Vp = !0, Pv.recheck = !0, this.fetch(vv, Pv, zv.url)
          }
        } else {
          var ev;
          this.drawn.has(vv) || this.undrawn.add(vv), null === (ev = this.onTaken) || void 0 === ev || ev.call(this, vv, !1)
        }
        hv.recheck && this.resendIfChanged(vv)
      }
      refusedFile(vv, zv) {
        var Pv, hv;
        if (null === (Pv = this.onTaken) || void 0 === Pv || Pv.call(this, vv, !1), this.refusedPack.set(vv, zv.url), this.pending.has(vv)) return void(null === (hv = this.onPackFileFailed) || void 0 === hv || hv.call(this, vv, av(zv.url)));
        const Sv = this.dw(vv, zv.attempt.ask);
        Sv.recheck = zv.attempt.recheck, this.afterRefusal(vv, Sv, zv.url)
      }
      async afterRefusal(vv, zv, Pv) {
        var hv;
        let Sv;
        try {
          Sv = await this.wanted(vv)
        } catch (ev) {
          return void(this.pending.get(vv) === zv && this.giveUp(vv, zv, Pv, ev))
        }
        this.pending.get(vv) === zv && (Sv.inPlaceOf !== Pv ? zv.ask || (null !== (hv = Sv.url) && void 0 !== hv ? hv : void 0) !== this.drawn.get(vv) ? this.fetch(vv, zv, Sv.url, Sv.inPlaceOf) : this.pending.delete(vv) : this.fallBack(vv, zv, Pv, av(Pv)))
      }
      dw(vv, zv) {
        const Pv = {
          url: void 0,
          ask: zv,
          Vp: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(vv, Pv);
        for (let hv = this.ready.length - 1; hv >= 0; hv--) this.ready[hv].file === vv && this.ready.splice(hv, 1);
        return Pv
      }
      async wanted(vv) {
        const zv = await this.files.url(vv);
        return null !== zv && this.refusedPack.get(vv) === zv ? {
          url: await this.files.shippedUrl(vv),
          inPlaceOf: zv
        } : {
          url: zv,
          inPlaceOf: void 0
        }
      }
      fetchWanted(vv, zv) {
        const Pv = this.files.url(vv);
        Pv instanceof Promise ? Pv.then((Pv => {
          this.fetchFound(vv, zv, Pv)
        }), (Pv => {
          this.pending.get(vv) === zv && this.giveUp(vv, zv, "", Pv)
        })) : this.fetchFound(vv, zv, Pv)
      }
      fetchFound(vv, zv, Pv) {
        null !== Pv && this.refusedPack.get(vv) === Pv ? Promise.resolve(this.files.shippedUrl(vv)).then((hv => {
          this.fetch(vv, zv, hv, Pv)
        }), (hv => {
          this.pending.get(vv) === zv && this.giveUp(vv, zv, Pv, hv)
        })) : this.fetch(vv, zv, Pv)
      }
      fetch(vv, zv, Pv, hv) {
        this.pending.get(vv) === zv && (zv.url = Pv, zv.inPlaceOf = hv, null !== Pv ? this.load(vv, zv, Pv) : this.buildFile(vv, zv, "", lv))
      }
      load(vv, zv, Pv) {
        const hv = this.Yw.get(vv);
        (null === hv || void 0 === hv ? void 0 : hv.url) !== Pv ? this.fetchFile(Pv).then((hv => {
          var Sv, ev;
          this.pending.get(vv) === zv && (this.keptTotal += hv.byteLength - (null !== (Sv = null === (ev = this.Yw.get(vv)) || void 0 === ev ? void 0 : ev.glb.byteLength) && void 0 !== Sv ? Sv : 0), this.Yw.set(vv, {
            url: Pv,
            glb: hv
          }), this.buildFile(vv, zv, Pv, hv))
        }), (hv => {
          this.pending.get(vv) === zv && this.fallBack(vv, zv, Pv, hv)
        })) : this.buildFile(vv, zv, Pv, hv.glb)
      }
      buildFile(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gv = hv.byteLength > 0 && (0, ev.k)(Pv) ? (vv | ev.b) >>> 0 : vv;
        this.queueRecord(vv, zv, Pv, hv, this.build(gv, hv), Sv)
      }
      queueRecord(vv, zv, Pv, hv, ev, pv) {
        ev.then((ev => {
          if (this.pending.get(vv) !== zv) return;
          if (Sv.t + (0, Sv.Le)(ev.byteLength) > Sv.Sc) return void this.ringRefused(vv, zv, Pv, new Tv(`${sv(Pv)}'s record is ${ev.byteLength-gv.c} bytes, past the cmd ring's ${Sv.Sc}`), pv);
          const dv = {
            file: vv,
            url: Pv,
            payload: ev,
            glb: hv,
            attempt: zv
          };
          pv ? this.ready.unshift(dv) : this.ready.push(dv)
        }))
      }
      async fallBack(vv, zv, Pv, hv) {
        var Sv;
        let ev = null,
          gv = hv;
        try {
          ev = await this.files.shippedUrl(vv)
        } catch (pv) {
          gv = pv
        }
        this.pending.get(vv) === zv && (null !== ev && ev !== Pv ? (null === (Sv = this.onPackFileFailed) || void 0 === Sv || Sv.call(this, vv, hv), zv.ask || this.drawn.get(vv) !== ev ? (zv.url = ev, zv.inPlaceOf = Pv, this.load(vv, zv, ev)) : this.pending.delete(vv)) : this.giveUp(vv, zv, Pv, gv))
      }
      ringRefused(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, ev.k)(Pv) ? this.fallBack(vv, zv, Pv, hv): this.giveUp(vv, zv, Pv, hv, Sv)
      }
      giveUp(vv, zv, Pv, Sv) {
        let ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: vv,
          url: sv(Pv),
          error: Sv,
          startup: this.startupLeft.has(vv)
        }), zv.ask || !this.drawn.has(vv) ? (0, hv.T)(Sv) ? this.queueRecord(vv, zv, Pv, lv, Promise.resolve((0, gv.m)(vv, (0, pv.j)(Sv))), ev) : this.buildFile(vv, zv, Pv, lv, ev) : this.pending.delete(vv)
      }
      async resendIfChanged(vv) {
        var zv;
        if (0 !== (vv & ev.e)) return;
        let Pv;
        try {
          Pv = await this.wanted(vv)
        } catch {
          return
        }(null !== (zv = Pv.url) && void 0 !== zv ? zv : void 0) === this.drawn.get(vv) || this.pending.has(vv) || this.written.has(vv) || this.fetch(vv, this.dw(vv, !1), Pv.url, Pv.inPlaceOf)
      }
      drain(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === vv) return;
        let Pv = 0,
          hv = 0;
        for (; hv < this.ready.length && Pv < 262144;) {
          const pv = this.ready[hv];
          if (this.written.has(pv.file)) {
            hv++;
            continue
          }
          const lv = this.nextSeq;
          new DataView(pv.payload.buffer, pv.payload.byteOffset, pv.payload.byteLength).setUint32(gv.f, lv, !0);
          const Wv = pv.attempt.Vp && pv.glb.byteLength > 0 && this.drawn.get(pv.file) === pv.url;
          if (vv(dv, Wv ? 1 : 0, pv.payload)) {
            if (this.nextSeq = lv >= Nv - 1 ? 1 : lv + 1, this.ready.splice(hv, 1), Pv += pv.payload.byteLength, this.pending.delete(pv.file), this.startupLeft.delete(pv.file), this.written.set(pv.file, {
                seq: lv,
                url: pv.url,
                empty: 0 === pv.glb.byteLength,
                attempt: pv.attempt
              }), pv.glb.byteLength > 0) try {
              var Sv;
              null === (Sv = this.onWritten) || void 0 === Sv || Sv.call(this, pv.file, pv.glb)
            } catch (ev) {
              console.warn("ModelFeed: reading the file's images failed", ev)
            }
          } else {
            if (null === zv || 0 === pv.glb.byteLength || zv(pv.payload.byteLength)) return;
            this.ready.splice(hv, 1);
            const vv = new Tv(`${sv(pv.url)}'s record is ${pv.payload.byteLength-gv.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(pv.file, pv.attempt, pv.url, vv, !0)
          }
        }
      }
    }

    function av(vv) {
      return new Wv(`presentation refused ${sv(vv)}`)
    }

    function sv(vv) {
      return vv.startsWith("data:") ? `${vv.slice(0,Math.min(Math.max(vv.indexOf(","),5),64))},...` : vv
    }
  },
  40256: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => ev,
      g: () => lv,
      k: () => pv,
      m: () => Nv,
      n: () => dv
    });
    var hv = Pv(3473),
      Sv = Pv(2982);
    const ev = 2147483648,
      gv = 1073741824;

    function pv(vv) {
      return vv.startsWith("data:")
    }

    function dv(vv) {
      let {
        onTableFailed: zv,
        packUrl: Pv
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const hv = Nv();
      hv.catch((vv => {
        null === zv || void 0 === zv || zv(vv)
      }));
      const Sv = async zv => (await hv).fileUrl((zv & ~ev) >>> 0, vv);
      return {
        startup: [],
        url: async vv => {
          if (Pv && 0 === (vv & ev)) {
            const zv = await hv,
              Sv = zv.filePackName(vv),
              ev = null === Sv || "lifeform" === zv.fileSource(vv) ? null : Pv(Sv);
            if (null !== ev) return ev
          }
          return Sv(vv)
        },
        shippedUrl: Sv
      }
    }

    function Nv() {
      return Pv.e(41).then((() => Pv(42771)))
    }
    async function lv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return vv.startsWith("data:") ? (0, Sv.e)(vv.slice(vv.indexOf(",") + 1), zv) : (0, hv.I)(vv, {
        spare: zv
      })
    }
  },
  40265: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      f: () => lv,
      j: () => wv,
      k: () => Cv,
      m: () => av,
      p: () => Wv,
      r: () => sv
    });
    const hv = 826427981,
      Sv = 1,
      ev = 2,
      gv = 44,
      pv = 46,
      dv = 58,
      Nv = 8,
      lv = 4;

    function Tv(vv, zv, Pv) {
      const Sv = (new TextEncoder).encode(Pv),
        ev = Nv + 4 * (zv.length + 2),
        gv = new Uint8Array(ev + (Sv.byteLength + 3 & -4)),
        pv = new DataView(gv.buffer);
      return pv.setUint32(0, vv, !0), pv.setUint32(Nv, hv, !0), zv.forEach(((vv, zv) => {
        pv.setUint32(Nv + 4 * (zv + 1), vv, !0)
      })), pv.setUint32(ev - 4, Sv.byteLength, !0), gv.set(Sv, ev), gv
    }

    function Wv(vv, zv) {
      return Tv(vv, [ev], zv)
    }

    function wv(vv, zv) {
      return Tv(vv, [Sv, pv], zv)
    }

    function av(vv, zv) {
      return Tv(vv, [Sv, dv], zv)
    }

    function sv(vv, zv) {
      return Tv(vv, [Sv, gv], zv)
    }

    function Cv(vv) {
      const zv = Nv;
      if (vv.byteLength < zv + 12) return !1;
      const Pv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      return Pv.getUint32(zv, !0) === hv && Pv.getUint32(zv + 4, !0) === Sv && Pv.getUint32(zv + 8, !0) === gv
    }
  },
  40244: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => jv,
      e: () => Cv,
      g: () => mv,
      i: () => nv,
      j: () => Yv,
      l: () => Ov,
      m: () => cv
    });
    var hv = Pv(4542),
      Sv = Pv(40125);
    const ev = 1,
      gv = 18,
      pv = 19,
      dv = 20,
      Nv = {
        [ev]: "link",
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
        [gv]: "retry linked",
        [pv]: "fallback linked",
        [dv]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function lv(vv, zv, Pv) {
      return vv === gv ? "program retry" : vv === ev ? "program link" : vv === pv || vv === dv ? `program ${zv} ${Pv}` : "program"
    }
    const Tv = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Wv = {
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
      wv = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      av = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      sv = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function Cv(vv, zv) {
      return vv === hv.f.RenderSerialLinks && void 0 !== sv[15 & zv]
    }
    const iv = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function cv(vv) {
      return String(vv).replace(/\d/g, (vv => String.fromCharCode(97 + Number(vv))))
    }

    function Gv(vv, zv) {
      var Pv;
      return null !== (Pv = vv[zv]) && void 0 !== Pv ? Pv : cv(zv)
    }

    function mv() {
      return cv((0, Sv.b)())
    }

    function jv(vv, zv) {
      switch (vv) {
        case hv.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${Gv(Wv,zv)}`, instance: String(zv), group: String(vv)
          };
        case hv.f.RenderChunkMeshNotDrawn: {
          const Pv = 0 === (128 & zv) ? "" : " shortage",
            hv = zv >>> 8;
          return {
            words: ` ${Gv(wv,127&zv)}${Pv}${0===hv?"":` kind ${cv(hv)}`}`,
            instance: String(zv),
            group: String(vv)
          }
        }
        case hv.f.RenderInternal: {
          const Pv = Gv(Tv, 255 & zv),
            hv = zv >>> 8 & 255;
          if (0 === hv) return {
            words: ` ${Pv}`,
            instance: String(zv),
            group: String(vv)
          };
          const Sv = Gv(Nv, hv),
            ev = zv >>> 16;
          return {
            words: ` ${Pv} ${Sv} program ${cv(ev)}`,
            instance: `${Pv} ${Sv} ${ev}`,
            group: lv(hv, Sv, Pv),
            gpuDetails: {
              programFailure: Sv,
              program: String(ev)
            }
          }
        }
        case hv.f.RenderSerialLinks: {
          if (Cv(vv, zv)) {
            const vv = function(vv) {
              const zv = (zv, Pv) => cv(vv >>> zv & (1 << Pv) - 1),
                Pv = vv >>> 30 & 1 ? " restored" : "";
              return `link census ${sv[15&vv]} linked ${zv(22,8)} failed ${zv(4,6)} retried ${zv(10,6)} fallback ${zv(16,6)}${Pv}`
            }(zv);
            return {
              words: ` ${vv}`,
              instance: String(15 & zv),
              group: "link census",
              gpuDetails: {
                linkCensus: vv
              }
            }
          }
          const Pv = Gv(av, zv);
          return {
            words: ` ${Pv}`,
            instance: String(zv),
            group: String(vv),
            gpuDetails: {
              serialLinks: Pv
            }
          }
        }
        case hv.f.RenderGlErrorAfterRestore: {
          const Pv = Gv(iv, 65535 & zv),
            hv = zv >>> 16,
            Sv = 65535 !== hv;
          return {
            words: ` ${Pv}${Sv?` program ${cv(hv)}`:""}`,
            instance: String(zv),
            group: String(vv),
            gpuDetails: Sv ? {
              glError: Pv,
              program: String(hv)
            } : {
              glError: Pv
            }
          }
        }
        default:
          return null
      }
    }
    const fv = 2,
      Fv = new Map;

    function Yv(vv) {
      let {
        group: zv,
        instance: Pv
      } = vv, hv = Fv.get(zv);
      return void 0 === hv && (hv = [], Fv.set(zv, hv)), !hv.includes(Pv) && (hv.length >= fv || (hv.push(Pv), !1))
    }

    function nv() {
      return Fv.size > 0
    }

    function Ov() {
      Fv.clear()
    }
  },
  40171: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => iv,
      d: () => cv,
      g: () => Cv,
      i: () => fv
    });
    var hv = Pv(6363),
      Sv = Pv(26),
      ev = Pv(4084),
      gv = Pv(4542),
      pv = Pv(6359),
      dv = Pv(40176);

    function Nv(vv, zv) {
      const Pv = (0, pv.c)(zv.variants);
      return vv.setShaderPack(Pv.variantFlags, Pv.hooks, Pv.moduleCodes, (0, dv.v)(zv.layers), dv.k[zv.ug], zv.keepCircleShadows)
    }
    const lv = 0,
      Tv = 1,
      Wv = 2,
      wv = "shaderPack:failedToCompile",
      av = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      sv = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function Cv(vv, zv) {
      var Pv;
      const hv = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.reason) && void 0 !== Pv ? Pv : "none";
      return av.has(hv) ? {
        messageKey: zv ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === hv && "override" === (null === vv || void 0 === vv ? void 0 : vv.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: sv.has(hv) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const iv = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class cv extends Error {
      constructor(vv) {
        super(`the shader pack can't run in this game: ${vv}`), this.messageKey = vv, this.name = "ShaderPackJoinError"
      }
    }
    const Gv = "strict";
    class mv {
      constructor(vv) {
        this.deps = vv, this.pagePack = void 0, this.loaded = null, this.ug = Gv, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = vv.load().catch((zv => (vv.warn("the shader pack could not load: the game draws without it", zv), {
          status: "none"
        }))).then((vv => (this.loaded = vv, "active" === vv.status && (this.handOverToPreviews(vv), null !== vv.harnessPolicy && (this.ug = vv.harnessPolicy, this.handOver())), vv)))
      }
      async join(vv) {
        this.leave();
        const zv = this.game,
          [Pv, Sv] = await Promise.all([this.pagePack, this.policyOf(vv)]);
        if (zv !== this.game || "none" === Pv.status) return null;
        const ev = "active" === Pv.status ? Pv.pack.variants : Pv.variants,
          gv = (0, hv.j)(ev, Sv);
        if (gv && "active" === Pv.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (gv) {
          const vv = this.cantRun(Pv, Sv);
          if (null !== vv) return vv
        } else if ("blocked" === Pv.status || null === this.deps.core) return null;
        return this.ug = Sv, this.handOver(), gv && this.refused ? wv : (this.joined = !0, this.offInThisGame = !gv, null)
      }
      async replay(vv) {
        const zv = await this.join(vv);
        null === zv ? this.playable() : this.deps.failInGame(zv)
      }
      cantRun(vv, zv) {
        const {
          core: Pv,
          noWebGpu: hv
        } = this.deps;
        if ("blocked" === vv.status) {
          return "shaderPack:failedUnchecked" === vv.messageKey && null === Pv && hv.noAdapter ? hv.messageKey : vv.messageKey
        }
        return this.refused || this.failedPolicies.has(zv) ? wv : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var vv;
        return this.runsInJoinedGame() && "active" === (null === (vv = this.loaded) || void 0 === vv ? void 0 : vv.status) ? function(vv, zv) {
          const Pv = vv.filter((vv => (0, hv.j)([vv], zv))),
            Sv = vv => Pv.some((zv => zv[vv]));
          return {
            sceneDepth: Sv("sceneDepth"),
            sunShadow: Sv("sunShadow"),
            airShadow: Sv("airShadow")
          }
        }(this.loaded.pack.variants, this.ug) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(wv) : (null !== this.couldntRun ? this.notify(ev.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.ug) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(vv) {
        for (const {
            code: zv,
            detail: Pv
          }
          of vv)
          if (zv === gv.f.RenderShaderPackNotRun) switch (255 & Pv) {
            case lv:
              this.refused = !0, this.failed();
              break;
            case Tv:
              this.failedPolicies.add(this.ug), this.failed();
              break;
            case Wv:
              this.failedModelPolicies.add(this.ug), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(wv) : this.failedWhileJoining = !0)
      }
      fail(vv) {
        this.leave(), this.deps.failInGame(vv)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(vv, zv) {
        const Pv = this.game;
        this.deps.notify(vv, (() => Pv === this.game && this.joined), zv)
      }
      handOver() {
        var vv;
        const {
          core: zv
        } = this.deps;
        null !== zv && "active" === (null === (vv = this.loaded) || void 0 === vv ? void 0 : vv.status) && (Nv(zv, {
          ...this.loaded.pack,
          ug: this.ug
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(vv) {
        let {
          pack: zv,
          harnessPolicy: Pv
        } = vv;
        const {
          previews: hv
        } = this.deps;
        null !== hv && Nv(hv, {
          ...zv,
          ug: null !== Pv && void 0 !== Pv ? Pv : Gv
        })
      }
      policyOf(vv) {
        return this.deps.policyOf(vv).catch((vv => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", vv), Gv)))
      }
    }
    const jv = "wasmShaderPackNotice";

    function fv(vv, zv, Pv, hv) {
      return Sv.j.subscribe(jv, (vv => {
        let {
          translationKey: zv,
          stillCurrent: Pv,
          reasonKey: hv
        } = vv;
        Pv() && Sv.j.zC("chat", (0, ev.k)(zv, hv))
      })), new mv({
        load: Fv,
        policyOf: Yv,
        core: vv,
        previews: zv,
        noWebGpu: Pv,
        notify: (vv, zv, Pv) => {
          const hv = {
            translationKey: vv,
            stillCurrent: zv,
            reasonKey: Pv
          };
          Sv.j.zC(jv, hv, !0)
        },
        failInGame: vv => {
          Sv.j.zC(ev.h, vv)
        },
        warn: hv
      })
    }
    async function Fv() {
      const [{
        shaderPackPage: vv,
        harnessShaderPackMode: zv
      }, {
        shaderPackTextures: hv
      }] = await Promise.all([Pv.e(129).then((() => Pv(38715))), Pv.e(130).then((() => Pv(6351)))]), Sv = await vv.load();
      return "active" !== Sv.status ? Sv : {
        status: "active",
        pack: {
          variants: Sv.pack.variants,
          layers: hv().layers,
          keepCircleShadows: Sv.pack.keepCircleShadows
        },
        harnessPolicy: zv()
      }
    }
    async function Yv(vv) {
      var zv;
      const [{
        harnessShaderPackMode: hv
      }, {
        getShaderPackPolicy: Sv
      }] = await Promise.all([Pv.e(129).then((() => Pv(38715))), Pv.e(90).then((() => Pv(40562)))]);
      return null !== (zv = hv()) && void 0 !== zv ? zv : Sv(vv)
    }
  },
  40282: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      e: () => Cv,
      i: () => dv,
      m: () => Nv,
      o: () => lv,
      r: () => Wv
    });
    var hv = Pv(40284),
      Sv = Pv(40292);
    const ev = "atlas:",
      gv = 3e4;
    class pv extends Error {
      constructor(vv, zv) {
        super(`fetching ${vv} answered HTTP ${zv}`), this.url = vv, this.status = zv, this.name = "TerrainTextureFetchError"
      }
    }

    function dv(vv) {
      if (!vv.startsWith(ev)) return null;
      const zv = Number(vv.slice(ev.length));
      return Number.isInteger(zv) && zv >= 0 ? zv : null
    }
    async function Nv() {
      const vv = await Pv.e(201).then((() => Pv(33871)));
      return {
        atlasSheets: vv.blockAtlasUrls,
        texture: zv => {
          var Pv, hv, ev;
          return null !== (Pv = null !== (hv = null !== (ev = vv.animatedBlockTextures[zv]) && void 0 !== ev ? ev : vv.rotatedBlockTextures[zv]) && void 0 !== hv ? hv : Sv.c[zv]) && void 0 !== Pv ? Pv : null
        }
      }
    }
    async function lv(vv) {
      const zv = new AbortController,
        Pv = setTimeout((() => {
          zv.abort(new DOMException(`${vv} took over ${gv} ms`, "TimeoutError"))
        }), gv);
      let hv;
      try {
        const Pv = await fetch(vv, {
          signal: zv.signal
        });
        if (!Pv.ok) throw new pv(vv, Pv.status);
        hv = await Pv.blob()
      } finally {
        clearTimeout(Pv)
      }
      const Sv = await createImageBitmap(hv, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Wv(Sv)
      } finally {
        Sv.close()
      }
    }
    const Tv = 8192;

    function Wv(vv) {
      const {
        width: zv,
        height: Pv
      } = vv, Sv = Math.max(1, Math.min(Pv, Tv)), ev = (0, hv.d)(zv, Sv, {
        willReadFrequently: !0
      });
      if (!ev) throw new Error("no 2D context to read the texture back");
      ev.globalCompositeOperation = "copy";
      const gv = new Uint8Array(zv * Pv * 4);
      for (let hv = 0; hv < Pv; hv += Sv) {
        const pv = Math.min(Sv, Pv - hv);
        ev.drawImage(vv, 0, hv, zv, pv, 0, 0, zv, pv), gv.set(ev.getImageData(0, 0, zv, pv).data, hv * zv * 4)
      }
      return {
        width: zv,
        height: Pv,
        pixels: gv
      }
    }
    async function wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lv;
      const hv = [],
        Sv = await Promise.all(vv.map((async vv => {
          var Sv, gv;
          const pv = null !== (Sv = null === (gv = zv.decoded) || void 0 === gv ? void 0 : gv.call(zv, vv)) && void 0 !== Sv ? Sv : null,
            Nv = null === pv ? function(vv, zv) {
              if (vv.startsWith(ev)) {
                var Pv;
                const hv = dv(vv);
                return null === hv ? null : null !== (Pv = zv.atlasSheets[hv]) && void 0 !== Pv ? Pv : null
              }
              return zv.texture(vv)
            }(vv, zv) : null,
            lv = null !== pv && void 0 !== pv ? pv : null === Nv ? null : Pv(Nv);
          if (null === lv) return hv.push({
            name: vv,
            url: Nv,
            error: new Error(`no URL for terrain texture ${vv}`)
          }), null;
          try {
            const zv = await lv;
            if (zv.pixels.byteLength !== zv.width * zv.height * 4) throw new Error(`decoded ${zv.pixels.byteLength} bytes for ${zv.width}x${zv.height} texels`);
            return {
              name: vv,
              texture: zv
            }
          } catch (Tv) {
            return hv.push({
              name: vv,
              url: Nv,
              error: Tv
            }), null
          }
        }))),
        gv = Sv.filter((vv => null !== vv)),
        pv = new Uint32Array(2 * gv.length);
      gv.forEach(((vv, zv) => {
        let {
          texture: Pv
        } = vv;
        pv[2 * zv] = Pv.width, pv[2 * zv + 1] = Pv.height
      }));
      return {
        handOver: {
          names: gv.map((vv => {
            let {
              name: zv
            } = vv;
            return zv
          })),
          textures: gv.map((vv => {
            let {
              texture: zv
            } = vv;
            return zv.pixels
          })),
          sizes: pv
        },
        failures: hv
      }
    }
    const av = [2e3, 1e4, 3e4, 6e4, 12e4];

    function sv() {}
    class Cv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : av,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = vv, this.retryMs = zv, this.keepBelow = Pv, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nv,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const hv = ++this.started,
          Sv = {
            decode: Pv.decode,
            wholeAtlas: Pv.wholeAtlas
          };
        return this.loadAndHandOver(zv, Sv, vv, (() => {
          var vv;
          return hv < this.landed || !1 === (null === (vv = Pv.wanted) || void 0 === vv ? void 0 : vv.call(Pv))
        }), {
          onTaken: (vv, Pv) => {
            this.landed = hv, this.current = {
              mine: hv,
              sources: zv,
              load: Sv,
              Yw: vv,
              failed: Pv
            }
          }
        })
      }
      restore(vv) {
        var zv;
        const Pv = this.current;
        if (null === Pv) return Promise.resolve(null);
        if ((null === (zv = this.restoring) || void 0 === zv ? void 0 : zv.mine) === Pv.mine) return this.restoring.done;
        const hv = {
          mine: Pv.mine,
          done: this.restoreLanded(Pv, vv).finally((() => {
            this.restoring === hv && (this.restoring = null)
          }))
        };
        return this.restoring = hv, hv.done
      }
      async restoreLanded(vv, zv) {
        const Pv = () => this.landed !== vv.mine,
          {
            Yw: hv
          } = vv;
        if (null !== hv) return this.stopped() ? null : this.core.setTerrainTextures(hv.names, hv.textures, hv.sizes);
        let Sv = zv;
        for (let ev = 0;; ev++) {
          const zv = this.retryMs.at(ev),
            hv = {
              allOrNothingExcept: void 0 === zv ? void 0 : vv.failed
            },
            gv = await this.loadAndHandOver(vv.sources, vv.load, Sv, Pv, hv);
          if (!1 !== gv || void 0 === zv || this.stopped()) return gv;
          if (Sv = sv, await new Promise((vv => {
              setTimeout(vv, zv)
            })), Pv()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const ev = this.core.terrainTextureNames();
        var gv;
        if (0 === ev.length) return null === (gv = Sv.onTaken) || void 0 === gv || gv.call(Sv, null, new Set), !0;
        let pv, Nv;
        try {
          pv = await vv(), Nv = await wv(ev, pv, zv.decode)
        } catch (Cv) {
          return hv() ? null : (Pv({
            name: null,
            url: null,
            error: Cv
          }), !1)
        }
        if (hv() || this.stopped()) return null;
        for (const dv of Nv.failures) Pv(dv);
        const lv = Sv.allOrNothingExcept;
        if (void 0 !== lv && Nv.failures.some((vv => {
            let {
              name: zv
            } = vv;
            return null === zv || !lv.has(zv)
          })) || !0 === zv.wholeAtlas && Nv.failures.some((vv => {
            let {
              name: zv
            } = vv;
            return null === zv || null !== dv(zv)
          }))) return !1;
        const {
          handOver: Tv
        } = Nv, Wv = function(vv) {
          return vv.textures.reduce(((vv, zv) => vv + zv.byteLength), 0)
        }(Tv) < this.keepBelow, av = this.core.setTerrainTextures(Tv.names, Tv.textures, Tv.sizes, Wv ? void 0 : () => {
          !async function(vv, zv) {
            await zv;
            for (const {
                buffer: hv
              }
              of vv) {
              const vv = hv;
              var Pv;
              if (!vv.detached) null === (Pv = vv.transfer) || void 0 === Pv || Pv.call(vv, 0)
            }
          }(Tv.textures, pv.heldUntil)
        });
        if (av) {
          var sv;
          const vv = new Set(Nv.failures.flatMap((vv => {
            let {
              name: zv
            } = vv;
            return null === zv ? [] : [zv]
          })));
          null === (sv = Sv.onTaken) || void 0 === sv || sv.call(Sv, Wv ? Tv : null, vv)
        }
        return av
      }
    }
  },
  36360: (vv, zv, Pv) => {
    function hv(vv) {
      return "fetch" === vv || "timeout" === vv || "integrity" === vv ? "download" : "browser"
    }
    Pv.d(zv, {
      d: () => Sv,
      g: () => gv,
      j: () => dv,
      k: () => pv,
      n: () => hv,
      p: () => ev
    });
    const Sv = "https://discord.gg/playbloxd";

    function ev(vv) {
      return "download" === vv ? {
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

    function gv(vv, zv) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zv ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: vv.code
        },
        discordLink: zv,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function pv() {
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

    function dv(vv, zv, Pv) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Pv ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: vv.reason
        },
        discordLink: null === vv.name,
        confirm: zv ? "general:reconnect" : vv.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6359: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => mv,
      f: () => jv,
      h: () => cv,
      k: () => iv
    });
    var hv = Pv(6363);
    const Sv = 6,
      ev = 3,
      gv = 1,
      pv = 2,
      dv = 4,
      Nv = 8,
      lv = 16,
      Tv = 32,
      Wv = 64,
      wv = 128,
      av = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function sv(vv) {
      if (!vv) return 0;
      const zv = av.indexOf(vv);
      if (zv <= 0) throw new Error(`"${vv}" is not a shader pack hook function`);
      return zv
    }

    function Cv(vv) {
      if (0 === vv) return null;
      const zv = av[vv];
      if (void 0 === zv) throw new Error(`${vv} is not a shader pack hook function id`);
      return zv
    }

    function iv(vv) {
      const zv = hv.d.length;
      return {
        strict: vv >= zv,
        program: hv.d[vv % zv]
      }
    }

    function cv(vv) {
      return Number(vv.strict) * hv.d.length + hv.d.indexOf(vv.program)
    }

    function Gv(vv) {
      return "" === vv ? [] : vv.split(" ")
    }

    function mv(vv) {
      const zv = {
        variantFlags: new Uint8Array(Sv),
        hooks: new Uint8Array(Sv * ev),
        moduleCodes: Array(Sv).fill(""),
        reads: Array(2 * Sv).fill("")
      };
      for (const Pv of vv) {
        const vv = cv(Pv.key),
          hv = (vv, zv) => null === Pv.hooks.surface || Pv.reads.fragment.includes(vv) ? 0 : zv;
        zv.variantFlags[vv] = (Pv.sceneDepth ? gv : 0) | (Pv.movesVertices ? pv : 0) | (Pv.sunShadow ? dv : 0) | (Pv.airShadow ? Nv : 0) | (Pv.discards ? lv : 0) | hv("localPosition", Tv) | hv("enchantSpeed", Wv) | hv("enchantTier", wv), zv.hooks[vv * ev] = sv(Pv.hooks.vertex), zv.hooks[vv * ev + 1] = sv(Pv.hooks.surface), zv.hooks[vv * ev + 2] = sv(Pv.hooks.light), zv.moduleCodes[vv] = Pv.moduleCode, zv.reads[2 * vv] = Pv.reads.vertex.join(" "), zv.reads[2 * vv + 1] = Pv.reads.fragment.join(" ")
      }
      return zv
    }

    function jv(vv) {
      const {
        hooks: zv,
        moduleCodes: Pv,
        reads: hv
      } = vv;
      return Array.from(vv.variantFlags, ((vv, Sv) => {
        const Tv = Sv * ev;
        return {
          key: iv(Sv),
          hooks: {
            vertex: Cv(zv[Tv]),
            surface: Cv(zv[Tv + 1]),
            light: Cv(zv[Tv + 2])
          },
          moduleCode: Pv[Sv],
          sceneDepth: 0 !== (vv & gv),
          sunShadow: 0 !== (vv & dv),
          airShadow: 0 !== (vv & Nv),
          movesVertices: 0 !== (vv & pv),
          discards: 0 !== (vv & lv),
          reads: {
            vertex: Gv(hv[2 * Sv]),
            fragment: Gv(hv[2 * Sv + 1])
          }
        }
      }))
    }
  },
  40176: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => av,
      b: () => Sv,
      d: () => hv,
      g: () => Wv,
      j: () => lv,
      k: () => Cv,
      n: () => ev,
      p: () => pv,
      r: () => dv,
      s: () => gv,
      v: () => sv,
      z: () => wv
    });
    const hv = 3,
      Sv = 0,
      ev = 1,
      gv = 2,
      pv = {
        uniform: 3,
        fW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      dv = 10,
      Nv = "BloxdPackInputs",
      lv = "bloxdPackInputs",
      Tv = [{
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
      Wv = 80;

    function wv() {
      const vv = Tv.map((vv => {
        let {
          name: zv,
          type: Pv
        } = vv;
        return `    ${zv}: ${Pv},\n`
      })).join("");
      return `struct ${Nv} {\n${vv}}\n@group(${hv}) @binding(${Sv}) var<uniform> ${lv}: ${Nv};\n`
    }

    function av(vv, zv) {
      const Pv = new DataView(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wv),
        [hv, Sv, ev, gv, pv, dv] = Tv;
      Pv.setFloat32(hv.offset, zv.seconds, !0), Pv.setUint32(Sv.offset, zv.lit ? 1 : 0, !0);
      for (let Nv = 0; Nv < 3; Nv++) Pv.setInt32(ev.offset + 4 * Nv, zv.renderOffset[Nv], !0), Pv.setFloat32(gv.offset + 4 * Nv, zv.y_[Nv], !0), Pv.setFloat32(pv.offset + 4 * Nv, zv.eyePosition[Nv], !0), Pv.setFloat32(dv.offset + 4 * Nv, zv.shadowDirection[Nv], !0)
    }

    function sv(vv) {
      const zv = new Uint32Array(Math.max(1, vv.length));
      return vv.forEach(((vv, Pv) => {
        let {
          id: hv,
          rotation: Sv
        } = vv;
        zv[Pv] = 65535 & hv | (3 & Sv) << 16
      })), zv
    }
    const Cv = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6363: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      h: () => gv,
      j: () => pv,
      k: () => Sv,
      l: () => ev
    });
    const hv = ["terrain", "liquid", "model"];

    function Sv() {
      const vv = [];
      for (const zv of [!1, !0])
        for (const Pv of hv) vv.push({
          strict: zv,
          program: Pv
        });
      return vv
    }

    function ev(vv) {
      return `${vv.strict?"strict":"allow"}.${vv.program}`
    }

    function gv(vv) {
      return !vv.hooks.vertex && !vv.hooks.surface && !vv.hooks.light
    }

    function pv(vv, zv) {
      return "off" !== zv && (null === vv || vv.some((vv => vv.key.strict === ("strict" === zv) && !gv(vv))))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);