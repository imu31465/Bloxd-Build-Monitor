export const id = 86;
export const ids = [86];
export const modules = {
  38174: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      g: () => vz,
      i: () => Uz,
      m: () => oz,
      o: () => Oz
    });
    const Fz = "A valid external Instance reference no longer exists.",
      Wz = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const Xz = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Oz(zz, tz) {
      return zz ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(zz) {
        var tz;
        const sz = null !== (tz = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(zz)) && void 0 !== tz ? tz : /failed with ([A-Z][A-Z0-9_]+)/.exec(zz);
        return sz ? sz[1] : zz.includes(Fz) ? "gpu_process_lost" : "other"
      }(tz)
    }

    function oz(zz) {
      return `${(null===zz||void 0===zz?void 0:zz.vendor)||"unknown vendor"} ${(null===zz||void 0===zz?void 0:zz.architecture)||"unknown architecture"}`
    }

    function vz(zz) {
      return Kz(zz)[1]
    }

    function Uz(zz) {
      return Kz(zz)[2]
    }

    function Kz(zz) {
      var tz;
      return null !== (tz = Wz.find((tz => {
        let [sz] = tz;
        return zz < sz
      }))) && void 0 !== tz ? tz : Wz[Wz.length - 1]
    }
  },
  38480: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      e: () => Wz
    });
    const Fz = 45e3;
    class Wz extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35800: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      e: () => Wz,
      i: () => Xz,
      j: () => Oz
    });
    const Fz = 1024,
      Wz = 1024 * Fz;

    function Xz(zz) {
      return 2 ** Math.floor(Math.log2(Math.max(1, zz / Wz)))
    }

    function Oz(zz) {
      return (zz / Wz).toFixed(1)
    }
  },
  35974: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => oz,
      j: () => Oz,
      n: () => vz,
      q: () => Uz,
      u: () => Kz
    });
    var Fz = sz(201);
    const Wz = 32 * sz(35800).e,
      Xz = 6144,
      Oz = 4608,
      oz = 512;

    function vz(zz) {
      return Math.floor(Wz * zz / Xz)
    }

    function Uz(zz) {
      const tz = zz - Math.floor(zz / 6);
      let sz = Fz.d.maxChunkHorizAddDistance,
        Wz = Fz.d.maxChunkVertAddDistance;
      if (Kz(sz + 1, Wz + 1) <= tz) return null;
      for (; Kz(sz + 1, Wz + 1) > tz && (sz > 0 || Wz > 0);) sz > Wz ? sz-- : Wz--;
      return {
        horizontal: sz,
        vertical: Wz
      }
    }

    function Kz(zz, tz) {
      const sz = Math.max(zz, tz);
      let Fz = 0;
      for (let Wz = -sz; Wz <= sz; Wz++)
        for (let Xz = -sz; Xz <= sz; Xz++)
          for (let Oz = -sz; Oz <= sz; Oz++) uz(zz, tz, Wz, Xz, Oz) && Fz++;
      return Fz
    }

    function uz(zz, tz, sz, Fz, Wz) {
      const Xz = sz * sz + Wz * Wz;
      return zz === tz ? Xz + Fz * Fz <= zz * zz : zz > tz ? Math.abs(Fz) <= tz && Xz + Fz * Fz <= zz * zz : Xz <= zz * zz && Xz + Fz * Fz <= tz * tz
    }
  },
  39955: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Xz,
      g: () => oz,
      j: () => Kz,
      m: () => vz,
      q: () => Oz
    });
    var Fz = sz(201);
    const Wz = 3e3,
      Xz = 15e3;

    function Oz(zz) {
      const tz = zz.endsWith(Fz.j);
      return {
        text: (tz ? zz.slice(0, -Fz.j.length) : zz) || null,
        dropsCache: tz
      }
    }
    const oz = "Either your internet isn't working or this is a bug.";

    function vz(zz, tz) {
      const sz = Kz(zz);
      return null !== sz.name && "" === Fz.b[sz.name].text && null !== tz ? tz : sz.reason
    }
    const Uz = "You were removed from the game.";

    function Kz(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wz = null !== (tz = Object.keys(Fz.b).find((tz => Fz.b[tz].code === zz))) && void 0 !== tz ? tz : null;
      if (null === Wz) return {
        code: zz,
        name: Wz,
        reason: null !== sz && void 0 !== sz ? sz : `${oz}\nCode: ${zz}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Xz,
        canReconnect: Oz = !1
      } = Fz.b[Wz], vz = zz === Fz.b.outdatedVersion.code || zz === Fz.b.loadRecaptchaError.code;
      return {
        code: zz,
        name: Wz,
        reason: "" !== Xz ? Xz : null !== sz && void 0 !== sz ? sz : zz === Fz.b.gameOrPluginKick.code ? Uz : `Code: ${zz}`,
        canReconnect: Oz,
        automaticallyReconnect: zz === Fz.b.customGameUpdated.code || zz === Fz.b.duplicateLobbyNameError.code,
        requiresRefresh: vz
      }
    }
  },
  4432: (zz, tz, sz) => {
    sz.d(tz, {
      $: () => Fz.x,
      $b: () => Hz,
      A: () => Oz,
      Ab: () => Jz,
      B: () => cz,
      Bb: () => dz,
      Cd: () => iz,
      Dc: () => Ft,
      Dd: () => hz,
      Eb: () => Gz,
      Ec: () => Fz.vb,
      F: () => Nt,
      Fd: () => nz,
      Gc: () => Fz.zb,
      Hb: () => ez,
      I: () => pz,
      Ib: () => Fz.O,
      Kb: () => Tz,
      Kc: () => Fz.Db,
      L: () => Fz.g,
      Lb: () => Yz,
      Lc: () => fz,
      M: () => Uz,
      Md: () => Lz,
      Ob: () => Xt,
      Oc: () => Fz.Hb,
      P: () => Fz.j,
      Pd: () => qz,
      Rc: () => Fz.Ib,
      S: () => Fz.n,
      Sb: () => Pz,
      Sd: () => az,
      Tc: () => Fz.Jb,
      Ud: () => Ot,
      V: () => Vz,
      Vc: () => Fz.Ob,
      Wb: () => Kt,
      Wd: () => wt,
      X: () => Fz.s,
      Y: () => Fz.v,
      Yc: () => Fz.Sb,
      Zb: () => Wz.m,
      _d: () => rz,
      ab: () => uz,
      ad: () => Fz.Wb,
      bc: () => st,
      be: () => Sz,
      cc: () => Fz.ab,
      ce: () => yz,
      d: () => zt,
      de: () => Az,
      e: () => Dz,
      eb: () => Bz,
      ec: () => Fz.cb,
      ed: () => Cz,
      h: () => wz,
      hb: () => Fz.z,
      he: () => jz,
      ib: () => Fz.D,
      ic: () => Fz.eb,
      id: () => Fz.Xb,
      je: () => vz,
      kb: () => kz,
      kd: () => Fz._b,
      ke: () => Mz,
      l: () => vt,
      lc: () => Fz.gb,
      mb: () => Wt,
      ne: () => Dt,
      o: () => Iz,
      od: () => Fz.dc,
      pb: () => Kz,
      pc: () => Fz.jb,
      pe: () => bz,
      qb: () => Fz.G,
      qd: () => Xz,
      rb: () => lz,
      s: () => mz,
      sb: () => Rz,
      sd: () => gz,
      tc: () => Fz.tb,
      ub: () => Ez,
      v: () => Fz.c,
      vb: () => tt,
      vd: () => ot,
      w: () => ut,
      wc: () => bt,
      xb: () => Wz.f,
      y: () => Zz,
      zc: () => Ut,
      zd: () => Qz
    });
    var Fz = sz(4436),
      Wz = sz(2273);
    const Xz = Math.round(1e3 / Fz.dc),
      Oz = 4,
      oz = 2;

    function vz() {
      return crypto.getRandomValues(new Uint32Array(oz))
    }
    const Uz = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Kz = 16,
      uz = {
        Draws: 1,
        NetAll: 2
      },
      Nz = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function bz(zz) {
      return (zz.nametagsHidden ? xz.NametagsHidden : 0) | (zz.crouchToggle ? xz.CrouchToggle : 0) | (zz.bhopDisabled ? xz.BhopDisabled : 0) | (zz.disableBobbing ? xz.DisableBobbing : 0) | (zz.ezTowering ? xz.EzTowering : 0) | (zz.ezBridging ? xz.EzBridging : 0) | (zz.showChunkBorders ? xz.ShowChunkBorders : 0)
    }
    const wz = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Dz = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      gz = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Hz = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Bz = 5,
      Pz = 4294967295;

    function rz(zz) {
      return (zz.showFog ? Nz.ShowFog : 0) | (zz.lighting ? Nz.Lighting : 0) | (zz.chunkFade ? Nz.ChunkFade : 0)
    }
    const Yz = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      xz = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      mz = {
        Release: 1,
        KeepTouches: 2
      },
      Jz = {
        Point: 1,
        Stamped: 2
      },
      Iz = {
        Add: 1,
        Clear: 2
      },
      Cz = 1,
      ez = 8,
      Zz = 16777215,
      Gz = 4,
      Tz = {
        Resume: 1
      },
      cz = {
        Held: 1
      };

    function jz(zz, tz) {
      return (zz | tz << 8) >>> 0
    }

    function Az(zz) {
      return 255 & zz
    }

    function yz(zz) {
      return zz >>> 8
    }

    function Mz(zz) {
      return zz + 3 & -4
    }
    const dz = 16777216,
      hz = 20;
    const Qz = 8,
      kz = 8,
      iz = 16777216,
      Lz = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      lz = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      nz = 16,
      az = {
        Lost: 0,
        Gone: 1
      },
      qz = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Sz(zz) {
      return zz === qz.WorldgenSeed || zz === qz.Generate
    }
    const Vz = 4,
      Rz = 99,
      pz = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      fz = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Ez = 12,
      zt = 16,
      tt = 4,
      st = 12,
      Ft = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Wt = 4,
      Xt = 8,
      Ot = 8,
      ot = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      vt = {
        Crit: 1,
        HitSelf: 2
      },
      Ut = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Kt = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ut = 12,
      Nt = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      bt = 67108864;

    function wt(zz) {
      for (const [tz, sz] of Object.entries(Fz.g))
        if (sz === zz) return tz;
      return `Unknown${zz}`
    }

    function Dt(zz) {
      return {
        status: zz[Fz.D.Status],
        lastError: zz[Fz.D.LastError],
        lastErrorDetail: zz[Fz.D.LastErrorDetail],
        errorCount: zz[Fz.D.ErrorCount],
        frameIndex: zz[Fz.D.FrameIndex],
        tickIndex: zz[Fz.D.TickIndex],
        renderPending: zz[Fz.D.RenderPending],
        firstView: zz[Fz.D.FirstView],
        chunksCancelled: zz[Fz.D.ChunksCancelled]
      }
    }
  },
  39773: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      i: () => uz,
      k: () => oz,
      n: () => Xz,
      o: () => Wz,
      q: () => vz,
      u: () => Kz
    });
    class Fz extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wz(zz) {
      return zz instanceof RangeError && /call stack/i.test(zz.message) || zz instanceof Error && "InternalError" === zz.name && /recursion/i.test(zz.message)
    }

    function Xz(zz) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(zz))
    }
    const Oz = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function oz(zz) {
      var tz;
      return zz instanceof WebAssembly.RuntimeError || zz instanceof Fz || Wz(zz) && Oz.test(null !== (tz = zz.stack) && void 0 !== tz ? tz : "")
    }

    function vz(zz, tz) {
      if (oz(zz)) throw zz;
      console.error(tz, zz)
    }

    function Uz(zz, tz, sz, Wz, Xz) {
      if (tz % Wz !== 0 || tz + sz > zz.byteLength) throw new Fz(`${Xz}: ${sz} bytes at ${tz}, ${Wz}-aligned, outside ${zz.byteLength} bytes of memory`)
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      return 0 === sz ? null : (Uz(tz, sz, Fz * zz.BYTES_PER_ELEMENT, zz.BYTES_PER_ELEMENT, Wz), new zz(tz, sz, Fz))
    }

    function uz(zz, tz, sz, Fz, Wz) {
      return 0 === tz ? null : (Uz(zz, tz, sz, Fz, Wz), new DataView(zz, tz, sz))
    }
  },
  40075: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    const Fz = {
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
  40040: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => wz,
      g: () => Dz,
      j: () => Nz,
      m: () => uz
    });
    const Fz = 2e3,
      Wz = "unavailable";
    let Xz = () => Promise.resolve().then((() => sz(2696))),
      Oz = null,
      oz = null,
      vz = Uz();

    function Uz() {
      let zz = () => {};
      return {
        promise: new Promise((tz => {
          zz = () => {
            tz(null)
          }
        })),
        resolve: zz
      }
    }

    function Kz() {
      if (null === Oz) {
        const zz = Xz();
        Oz = zz, zz.then((tz => {
          Oz === zz && (oz = tz)
        }), (() => {
          Oz === zz && (Oz = null)
        }))
      }
      return Oz
    }

    function uz() {
      Kz().catch((() => {}))
    }

    function Nz() {
      vz.resolve()
    }

    function bz(zz, tz, sz, Fz) {
      if (null === zz) return {
        errorKind: tz,
        fingerprint: Wz,
        dedupe: `${tz}|${Fz}`
      };
      const {
        fingerprint: Xz
      } = zz.clientErrorKey(tz, sz, Fz);
      return {
        errorKind: tz,
        fingerprint: Xz,
        dedupe: Xz
      }
    }

    function wz(zz, tz, sz, Fz) {
      return null === oz ? Fz ? (uz(), bz(null, zz, tz, sz)) : null : bz(oz, zz, tz, sz)
    }
    async function Dz(zz, tz, sz) {
      let Wz;
      const Xz = new Promise((zz => {
        Wz = setTimeout((() => {
          zz(null)
        }), Fz)
      }));
      try {
        return bz(await Promise.race([Kz(), Xz, vz.promise]), zz, tz, sz)
      } catch {
        return bz(null, zz, tz, sz)
      } finally {
        clearTimeout(Wz)
      }
    }
  },
  40033: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BUILT_IN_ANIMATIONS_SITE: () => nz,
      CORE_ERRORS_SITE: () => Az,
      EVENT_OVERFLOW_SITE: () => lz,
      FIRST_VIEW_SITE: () => qz,
      JOIN_SITE: () => Mz,
      LEAVE_SITE: () => dz,
      MODEL_FEED_SITE: () => hz,
      MODEL_POOL_SITE: () => Qz,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Vz,
      NON_FATAL_REPORTS_PER_SESSION: () => Kt,
      PREVIEW_ANIMATIONS_SITE: () => Lz,
      RENDER_RELOAD_SITE: () => iz,
      TEXTURE_NAMES_SITE: () => kz,
      TEXTURE_PACK_FEED_SITE: () => az,
      TurnstilePageError: () => ht,
      WASM_LOAD_SITE: () => yz,
      crashError: () => Dt,
      crashReportsSettled: () => Yt,
      flushCrashReports: () => Pt,
      joinFailureCode: () => Qt,
      lokiTransport: () => fz,
      modelFailureCode: () => St,
      readTrap: () => Jt,
      renderLossDetail: () => Ns,
      renderReloadMessage: () => Ks,
      reportCoreErrors: () => mt,
      reportCountedLoadFallback: () => Mt,
      reportCrash: () => gt,
      reportDataLoadFailure: () => Hs,
      reportDisconnect: () => nt,
      reportDracoDecoderFailure: () => ft,
      reportEventOverflow: () => ts,
      reportFirstViewNoTerrain: () => Os,
      reportGpuFallback: () => At,
      reportGpuWasmPopulation: () => yt,
      reportLightFault: () => Fs,
      reportMemoryShed: () => Xs,
      reportModelFailure: () => Vt,
      reportModelPoolFailure: () => Rt,
      reportModelsModuleRetry: () => pt,
      reportPageJoinFailure: () => it,
      reportReconnectGaveUp: () => qt,
      reportRenderReload: () => ws,
      reportReplayFault: () => vs,
      reportStaleBuildReload: () => Ps,
      reportStoppedCore: () => Zt,
      reportTerrainTextureFailure: () => Ds,
      reportTexturePackFeedLoadFailure: () => zs,
      reportUnstreamedCoreLoad: () => dt,
      reportUnsupportedFallback: () => ct,
      reportUnusedSeat: () => lt,
      reportWorkerLost: () => ss,
      reportWorkerStartTimeout: () => os,
      reportWorldgenGaveUp: () => Ws,
      reportWorldgenLoadFailure: () => Et,
      resetCrashReports: () => xt,
      setCrashBackend: () => Xt,
      setCrashScreen: () => Ft,
      setCrashTransport: () => tt,
      showCrash: () => et,
      showJoinFailure: () => kt,
      showUnsupported: () => Tt
    });
    var Fz = sz(1060),
      Wz = sz(277),
      Xz = sz(2699),
      Oz = sz(40040),
      oz = sz(4432),
      vz = sz(40046),
      Uz = sz(3145),
      Kz = sz(38174),
      uz = sz(133),
      Nz = sz(666),
      bz = sz(129),
      wz = sz(3149),
      Dz = sz(38480),
      gz = sz(1715),
      Hz = sz(40013),
      Bz = sz(39720),
      Pz = sz(39959),
      rz = sz(39967),
      Yz = sz(38530),
      xz = sz(3376),
      mz = sz(3378),
      Jz = sz(40049),
      Iz = sz(40057),
      Cz = sz(40063),
      ez = sz(36263),
      Zz = sz(2937),
      Gz = sz(35796),
      Tz = sz(39901),
      cz = sz(35805);
    const jz = "[bloxd-wasm-client]",
      Az = "coreErrors",
      yz = "wasmLoad",
      Mz = "join",
      dz = "leave",
      hz = "modelFeed",
      Qz = "modelWorkerPool",
      kz = "textureNames",
      iz = "renderReload",
      Lz = "previewAnimations",
      lz = "eventOverflow",
      nz = "builtInAnimations",
      az = "texturePackFeed",
      qz = "firstView",
      Sz = 300,
      Vz = 8;
    let Rz = 0;
    const pz = new Set,
      fz = (zz, tz) => {
        const sz = Ot[zz.kind];
        if (null === sz) return void Ez(zz, tz, Wt, null);
        const Fz = (0, Oz.d)(sz, zz.message, zz.code, zz.fatal);
        if (null !== Fz) return void Ez(zz, tz, Wt, Fz);
        const Wz = Wt;
        Bt("Loki", (async () => {
          Ez(zz, tz, Wz, await (0, Oz.g)(sz, zz.message, zz.code))
        }))
      };

    function Ez(zz, tz, sz, Wz) {
      const {
        kind: Oz,
        code: oz,
        site: vz,
        fatal: Uz,
        details: Kz
      } = zz;
      if (!Uz)
        if (null === Wz || (0, Xz.d)(Wz.errorKind) || pz.has(Wz.dedupe)) {
          if (Rz >= Vz) return;
          Rz++
        } else pz.add(Wz.dedupe);
      const uz = {
        ...Kz,
        kind: Oz,
        code: oz,
        site: vz,
        fatal: String(Uz),
        backend: sz
      };
      null !== Wz && (uz.errorKind = Wz.errorKind, uz.fingerprint = Wz.fingerprint), tz instanceof Error && "string" === typeof tz.stack && (uz.causeStack = tz.stack.slice(0, 2e3)), (0, Fz.SD)(Dt(zz, tz), uz)
    }
    let zt = fz;

    function tt(zz) {
      const tz = zt;
      return zt = zz, tz
    }
    let st = () => {};

    function Ft(zz) {
      const tz = st;
      return st = zz, tz
    }
    let Wt = "unpicked";

    function Xt(zz) {
      Wt = zz
    }
    const Ot = {
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
        disconnect: "disconnect"
      },
      ot = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      vt = new Set(["unstreamedLoad"]);
    let Ut = !1;
    const Kt = 20,
      ut = new Map;
    let Nt = 0,
      bt = 0;
    const wt = new Set;

    function Dt(zz, tz) {
      const sz = Object.assign(new Error(`${zz.code}: ${zz.message}`), {
        name: "WasmClientCrash",
        cause: null !== tz && void 0 !== tz ? tz : void 0
      });
      return tz instanceof Error && tz.stack && (sz.stack = tz.stack), sz
    }

    function gt(zz) {
      var tz, Fz;
      const {
        kind: Wz,
        code: Xz,
        site: Oz,
        fatal: oz,
        message: vz,
        error: Uz
      } = zz, Kz = !1 !== zz.toTransport && !vt.has(Wz), uz = !oz && Kz, Nz = {
        kind: Wz,
        code: Xz,
        site: Oz,
        fatal: oz,
        message: vz,
        details: null !== (tz = zz.details) && void 0 !== tz ? tz : {}
      }, bz = `${Xz}@${Oz}${void 0===zz.instance?"":`#${zz.instance}`}${oz?"!":""}`, wz = (null !== (Fz = ut.get(bz)) && void 0 !== Fz ? Fz : 0) + 1;
      if (ut.set(bz, wz), wz > 1 ? 0 === (wz & wz - 1) && Ht((() => {
          console.warn(`${jz} ${Xz} at ${Oz} reported ${wz} times`)
        })) : uz && Nt >= Kt ? Ht((() => {
          console.warn(`${jz} ${Wz} ${Xz} at ${Oz}: ${vz} (not sent: the session's ${Kt} went)`, Nz.details, null !== Uz && void 0 !== Uz ? Uz : "")
        })) : (uz && Nt++, function(zz, tz, Fz) {
          var Wz, Xz;
          const {
            kind: Oz,
            code: oz,
            site: vz,
            fatal: Uz,
            message: Kz,
            details: uz
          } = zz;
          Ht((() => {
            (Uz ? console.error : console.warn)(`${jz} ${Oz} ${oz} at ${vz}: ${Kz}`, uz, null !== tz && void 0 !== tz ? tz : "")
          }));
          const Nz = ot[Oz],
            bz = null !== (Wz = null !== (Xz = Ot[Oz]) && void 0 !== Xz ? Xz : Nz) && void 0 !== Wz ? Wz : null;
          null !== bz && Bt("counts", (async () => {
            const {
              peekVisitSessionId: zz
            } = await Promise.resolve().then((() => sz(624)));
            if (null !== zz()) {
              const {
                reportCappedWasmFailure: zz,
                reportWasmFailure: tz
              } = await sz.e(207).then((() => sz(35791)));
              (void 0 === Nz ? tz : zz)(bz, Kz, oz), Ut = !0
            }
          }));
          Fz && Ht((() => {
            zt(zz, tz)
          }))
        }(Nz, Uz, Kz)), oz) {
        var Dz;
        const tz = null !== (Dz = zz.screen) && void 0 !== Dz ? Dz : {
          text: (0, ez.d)(Nz, !0),
          reload: !0
        };
        Ht((() => {
          st(tz)
        }))
      }
      return Nz
    }

    function Ht(zz) {
      try {
        zz()
      } catch (tz) {
        try {
          console.warn(`${jz} could not send a report`, tz)
        } catch {}
      }
    }

    function Bt(zz, tz) {
      try {
        const sz = tz().catch((tz => {
          console.warn(`${jz} could not send the report to ${zz}`, tz)
        })).finally((() => {
          wt.delete(sz)
        }));
        wt.add(sz)
      } catch (sz) {
        console.warn(`${jz} could not send the report to ${zz}`, sz)
      }
    }
    async function Pt(zz) {
      let tz;
      (0, Oz.j)();
      const sz = new Promise((sz => {
        tz = setTimeout(sz, zz)
      }));
      await Promise.race([rt(), sz]), clearTimeout(tz)
    }
    async function rt() {
      if (await Promise.allSettled([...wt]), Ut) try {
        const {
          flushClientAnalyticsEvents: zz
        } = await Promise.resolve().then((() => sz(1464)));
        await zz()
      } catch (zz) {
        console.warn(`${jz} could not send the counts`, zz)
      }
    }
    async function Yt() {
      for (; wt.size > 0;) await Promise.allSettled([...wt])
    }

    function xt() {
      ut.clear(), Nt = 0, Ut = !1, Rz = 0, pz.clear(), bt = 0, (0, vz.k)()
    }

    function mt(zz, tz, sz, Fz) {
      bt += tz;
      for (const {
          code: Oz,
          detail: Uz
        }
        of zz) {
        var Wz, Xz;
        const zz = (0, oz.Wd)(Oz),
          tz = (0, vz.b)(Oz, Uz),
          Kz = null === Fz || void 0 === Fz ? void 0 : Fz(Oz, Uz),
          uz = void 0 !== (null === tz || void 0 === tz ? void 0 : tz.gpuDetails),
          Nz = uz ? null === (Wz = (0, bz.k)()) || void 0 === Wz ? void 0 : Wz.renderer : void 0,
          wz = uz ? ` ${(0,vz.c)()}` : "",
          Dz = Array.from([Nz && `gpu ${(0,vz.m)(Nz)}`, Kz].filter(Boolean).join("; ")).slice(0, Sz).join(""),
          gz = `core error ${zz}${null!==(Xz=null===tz||void 0===tz?void 0:tz.words)&&void 0!==Xz?Xz:""}${wz}${Dz?`: ${Dz}`:""}`,
          Hz = {
            errorCode: String(Oz),
            detail: String(Uz),
            droppedBefore: String(bt),
            wasmBuild: sz.wasm,
            clientVersion: sz.client,
            ...null === tz || void 0 === tz ? void 0 : tz.gpuDetails
          };
        null !== tz && (0, vz.h)(tz) ? Ht((() => {
          console.warn(`${jz} coreError CORE-${zz}: ${gz} (not sent: the session's render warnings of its kind went)`, Hz)
        })) : gt({
          kind: Oz === oz.L.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${zz}`,
          site: Az,
          fatal: !1,
          message: gz,
          details: Hz,
          instance: null === tz || void 0 === tz ? void 0 : tz.instance
        })
      }
    }

    function Jt(zz) {
      return (0, Gz.k)(zz instanceof Tz.c ? zz.trap : zz, xz.M, xz.kb)
    }
    const It = "declined=js";

    function Ct(zz) {
      return zz ? {
        labels: [It],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function et(zz, tz, sz) {
      return Gt(zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Zt(zz, tz, sz) {
      return Gt(zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Gt(zz, tz, sz, Fz, Wz) {
      let {
        memoryDetails: Xz = {},
        declined: Oz = !1
      } = Fz;
      const {
        code: oz,
        details: vz,
        message: Uz
      } = (0, Hz.I)(zz, tz), Kz = [];
      null !== sz && (vz.trapKind = sz.kind, null !== sz.panic && (vz.panic = (0, Gz.j)(sz.panic)), sz.refusedBytes > 0 && (vz.refusedAllocation = String(sz.refusedBytes)), Kz.push((0, Gz.m)(sz.kind, sz.refusedBytes)));
      const uz = Ct(Oz);
      return gt({
        kind: "crash",
        code: oz,
        site: zz.site,
        fatal: Wz,
        message: [...Kz, ...uz.labels, Uz].join("; "),
        details: {
          ...vz,
          ...uz.details,
          ...Xz
        },
        error: zz.error
      })
    }

    function Tt(zz, tz, sz) {
      return gt({
        kind: "unsupported",
        code: tz,
        site: yz,
        fatal: !0,
        message: sz,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: zz,
          status: tz
        },
        screen: {
          text: (0, ez.m)(zz),
          reload: "download" === zz
        }
      })
    }

    function ct(zz, tz, sz) {
      return gt({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === tz ? "blocked_after_loss" : "unsupported_js_fallback",
        site: yz,
        fatal: !1,
        message: sz,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: zz,
          status: "unsupported",
          decline: tz,
          fallback: "js"
        }
      })
    }
    const jt = "misdrawn_gpu_js_fallback";

    function At(zz, tz) {
      return gt({
        kind: "gpuFallback",
        code: jt,
        site: yz,
        fatal: !1,
        message: `the renderer plays ${zz} on ${tz} worse than the JS client`,
        details: {
          gpuFamily: zz,
          backend: tz,
          fallback: "js"
        }
      })
    }

    function yt(zz) {
      Bt("counts", (async () => {
        await (0, Nz.b)(zz), Ut = !0
      }))
    }

    function Mt(zz, tz, sz, Fz) {
      const Wz = Ct(Fz);
      return gt({
        kind: "unsupported",
        code: tz,
        site: yz,
        fatal: !1,
        message: [...Wz.labels, sz].join("; "),
        details: {
          cause: zz,
          status: tz,
          fallback: "js",
          ...Wz.details
        }
      })
    }

    function dt() {
      const {
        code: zz,
        message: tz
      } = Zz.d;
      return gt({
        kind: "unstreamedLoad",
        code: zz,
        site: yz,
        fatal: !1,
        message: tz
      })
    }
    class ht extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Qt(zz) {
      return zz instanceof Pz.m ? 0 === zz.code ? "JOIN-matchmake" : `JOIN-${zz.code}` : zz instanceof Pz.d ? 0 === zz.code ? `JOIN-${zz.stage}` : `JOIN-${zz.stage}-${zz.code}` : zz instanceof Bz.c ? "JOIN-gameCode" : zz instanceof ht ? "JOIN-turnstilePage" : zz instanceof Pz.x ? "JOIN-trafficCheck" : zz instanceof Dz.e ? "JOIN-timeout" : "JOIN-network"
    }

    function kt(zz, tz) {
      const sz = (0, cz.i)(zz),
        Fz = {
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        },
        Wz = zz instanceof ht ? {
          text: (0, ez.h)(),
          reload: !1
        } : void 0,
        Xz = (0, rz.d)(zz),
        Oz = "expected" !== Xz;
      return gt({
        kind: "join",
        code: Qt(zz),
        site: Mz,
        fatal: !0,
        message: sz,
        details: Fz,
        error: zz,
        screen: Wz,
        toTransport: Oz,
        instance: Xz
      })
    }

    function it(zz, tz, sz) {
      var Fz;
      const Wz = (0, rz.d)(zz),
        Xz = {
          cause: (zz instanceof Pz.d || zz instanceof Pz.m) && null !== (Fz = zz.serverText) && void 0 !== Fz ? Fz : "",
          sinceJoinStart: (0, wz.d)(sz.sinceJoinStartMs),
          game: sz.game,
          ...(0, wz.i)(),
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        };
      return gt({
        kind: "pageJoin",
        code: Qt(zz),
        site: Mz,
        fatal: !1,
        message: (0, cz.i)(zz),
        details: Xz,
        error: zz,
        toTransport: "unrecognised" === Wz,
        instance: Wz
      })
    }
    const Lt = {
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

    function lt(zz, tz) {
      let {
        unused: sz,
        answered: Fz,
        heldMs: Wz
      } = zz;
      const {
        code: Xz,
        message: Oz
      } = Lt[sz], oz = {
        unused: sz,
        answered: String(Fz),
        heldMs: String(Wz),
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "seat",
        code: Xz,
        site: Mz,
        fatal: !1,
        message: Oz,
        details: oz
      })
    }

    function nt(zz, tz, sz) {
      var Fz;
      let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Fz = zz.name) && void 0 !== Fz ? Fz : String(zz.code);
      const Xz = {
          closeCode: String(zz.code),
          recognised: String(null !== zz.name),
          closeReason: sz.closeReason,
          sinceJoined: (0, wz.d)(sz.sinceJoinedMs),
          game: sz.game,
          ...(0, wz.i)(),
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        },
        Oz = null === zz.name && !(0, wz.e)(zz.code);
      return gt({
        kind: "disconnect",
        code: Wz,
        site: dz,
        fatal: !1,
        message: "Left room",
        details: Xz,
        toTransport: Oz
      })
    }

    function qt(zz, tz) {
      const sz = {
        ...(0, Uz.k)(zz),
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "disconnect",
        code: `reconnect-${zz.reason}`,
        site: Mz,
        fatal: !1,
        message: "Reconnect failed",
        details: sz
      })
    }

    function St(zz) {
      return zz.error instanceof mz.h ? `MODEL-${zz.error.status}` : zz.error instanceof Jz.g ? "MODEL-ring" : "MODEL-network"
    }

    function Vt(zz, tz) {
      const sz = St(zz),
        Fz = `model file ${zz.file} ${zz.startup?"(startup) ":""}could not load`,
        Wz = {
          file: String(zz.file),
          url: zz.url,
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        };
      return gt({
        kind: zz.startup ? "model" : "modelLate",
        code: sz,
        site: hz,
        fatal: zz.startup,
        message: Fz,
        details: Wz,
        error: zz.error
      })
    }

    function Rt(zz, tz) {
      const sz = {
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Qz,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: sz,
        error: zz
      })
    }

    function pt(zz, tz, sz) {
      const Fz = {
        delayMs: String(tz),
        wasmBuild: sz.wasm,
        clientVersion: sz.client
      };
      zz instanceof mz.h && (Fz.status = String(zz.status));
      return gt({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Qz,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Fz,
        error: zz
      })
    }

    function ft(zz, tz) {
      const sz = {
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Qz,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: sz,
        error: zz
      })
    }

    function Et(zz, tz) {
      const sz = {
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Hz.D,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: sz,
        error: zz
      })
    }

    function zs(zz, tz) {
      const sz = {
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: az,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: sz,
        error: zz
      })
    }

    function ts(zz, tz) {
      const {
        frames: sz,
        acks: Fz,
        mask: Wz,
        outcome: Xz
      } = zz, Oz = {
        frames: String(sz),
        acks: String(Fz),
        mask: String(Wz),
        outcome: null !== Xz && void 0 !== Xz ? Xz : "resynced",
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "recovered",
        code: "rejoined" === Xz ? "CORE-eventOverflowRejoin" : "failed" === Xz ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: lz,
        fatal: !1,
        message: `the event buffer refused records in ${sz} frames`,
        details: Oz
      })
    }

    function ss(zz, tz, sz) {
      return gt({
        kind: "recovered",
        code: "CORE-workerLost",
        site: zz,
        fatal: !1,
        message: `a ${zz} worker was lost`,
        details: {
          reason: tz,
          wasmBuild: sz.wasm,
          clientVersion: sz.client
        }
      })
    }

    function Fs(zz, tz, sz) {
      const Fz = {
        wasmBuild: sz.wasm,
        clientVersion: sz.client
      };
      return gt({
        kind: "recovered",
        code: zz,
        site: Hz.q,
        fatal: !1,
        message: tz,
        details: Fz
      })
    }

    function Ws(zz, tz) {
      const sz = {
        lastReason: zz,
        wasmBuild: tz.wasm,
        clientVersion: tz.client
      };
      return gt({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Hz.D,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: sz
      })
    }

    function Xs(zz, tz, sz) {
      return gt({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Hz.n,
        fatal: !1,
        message: (0, Yz.l)(zz) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: zz,
          ...tz,
          wasmBuild: sz.wasm,
          clientVersion: sz.client
        }
      })
    }

    function Os(zz, tz) {
      const sz = (0, vz.e)(),
        Fz = {
          game: zz,
          renderWarned: String(sz),
          browser: (0, vz.c)(),
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        },
        Wz = `first view drew no whole terrain in ${Iz.g/1e3} s${sz?", render warned":""}`;
      return gt({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: qz,
        fatal: !1,
        message: Wz,
        details: Fz
      })
    }

    function os(zz, tz, sz) {
      return gt({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: zz,
        fatal: !1,
        message: `a ${zz} worker did not start`,
        details: {
          waitedMs: String(Math.round(tz)),
          wasmBuild: sz.wasm,
          clientVersion: sz.client
        }
      })
    }

    function vs(zz, tz, sz) {
      return gt({
        kind: "recovered",
        code: "CORE-replayFault",
        site: zz,
        fatal: !1,
        message: `the replay's ${zz} failed`,
        details: {
          wasmBuild: sz.wasm,
          clientVersion: sz.client
        },
        error: tz
      })
    }
    const Us = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Ks(zz, tz, sz) {
      const Fz = "lost" === tz && void 0 !== sz ? ` (${sz})` : "";
      return `the ${zz} ${Us[tz]}${Fz}`
    }
    const us = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Ns(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Wz = null === sz.boundAtMs ? "unbound" : `up${(0,Kz.g)(Fz-sz.boundAtMs)}`,
        Xz = null === sz.adapter ? "no adapter" : (0, Kz.m)(sz.adapter),
        Oz = `${(0,gz.e)()?"hidden":"visible"} ${Wz} ${Xz}${!0===sz.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === zz) return `${zz} ${Oz}`;
      const oz = null === tz || void 0 === tz ? void 0 : tz.message;
      return `${tz instanceof gz.d?"timeout":(0,Kz.o)("frames_refused"===zz,"string"===typeof oz?oz:"")} ${Oz}`
    }
    const bs = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function ws(zz, tz, Fz) {
      var Xz, Oz, oz, Uz, Nz;
      let {
        cause: bz = "lost",
        error: wz,
        context: Dz = us,
        session: gz = bs
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Hz = Ns(bz, wz, Dz),
        Bz = {
          losses: String(tz),
          cause: bz,
          detail: Hz,
          vendor: null !== (Xz = null === (Oz = Dz.adapter) || void 0 === Oz ? void 0 : Oz.vendor) && void 0 !== Xz ? Xz : "",
          architecture: null !== (oz = null === (Uz = Dz.adapter) || void 0 === Uz ? void 0 : Uz.architecture) && void 0 !== oz ? oz : "",
          indirectHangs: String(Dz.indirectHangs),
          samples: String(gz.samples),
          sunShadows: String(gz.sunShadows),
          renderDistance: String(gz.renderDistance),
          gpuFamily: null !== (Nz = (0, Wz.e)()) && void 0 !== Nz ? Nz : "",
          browser: (0, vz.c)(),
          siteUsed: uz.t,
          wasmBuild: Fz.wasm,
          clientVersion: Fz.client
        },
        Pz = Ks(zz, bz),
        rz = gt({
          kind: "recovered",
          code: "CORE-renderLost",
          site: iz,
          fatal: !1,
          message: Pz,
          details: Bz,
          error: wz
        });
      return Bt("ga", (async () => {
        const {
          logError: tz
        } = await Promise.resolve().then((() => sz(2662))), Fz = `${Kz.d["webgpu"===zz?"WebGPU":"WebGL2"]}\n Error: ${Hz}`;
        tz("warning", Fz), tz("error", Fz)
      })), rz
    }

    function Ds(zz, tz) {
      var sz, Fz;
      const Wz = null === zz.name ? "TEXTURE-sources" : null === zz.url ? "TEXTURE-nourl" : zz.error instanceof Cz.d ? `TEXTURE-${zz.error.status}` : "TEXTURE-network",
        Xz = null === zz.name ? "terrain textures could not load" : `terrain texture ${zz.name} could not load`,
        Oz = {
          texture: null !== (sz = zz.name) && void 0 !== sz ? sz : "",
          url: null !== (Fz = zz.url) && void 0 !== Fz ? Fz : "",
          wasmBuild: tz.wasm,
          clientVersion: tz.client
        };
      return gt({
        kind: "terrainTexture",
        code: Wz,
        site: Hz.z,
        fatal: !1,
        message: Xz,
        details: Oz,
        error: zz.error
      })
    }
    const gs = {
      previewAnimations: {
        site: Lz,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: nz,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Hs(zz, tz, sz, Fz) {
      const {
        site: Wz,
        prefix: Xz,
        name: Oz
      } = gs[zz], {
        stage: oz,
        error: vz
      } = sz;
      return gt({
        kind: zz,
        code: "decode" === oz ? null === vz ? `${Xz}-decode` : `${Xz}-trap` : vz instanceof mz.h ? `${Xz}-${vz.status}` : `${Xz}-network`,
        site: Wz,
        fatal: !1,
        message: "decode" === oz ? `${Oz} did not decode` : `${Oz} could not load`,
        details: {
          url: tz,
          wasmBuild: Fz.wasm,
          clientVersion: Fz.client
        },
        error: vz
      })
    }
    const Bs = "staleBuild";

    function Ps(zz, tz, sz) {
      const Fz = {
          failedSite: zz.site,
          url: zz.url,
          from: zz.from,
          sameBuild: String(zz.from === tz),
          reloadMs: String(Math.max(0, Date.now() - zz.at)),
          wasmBuild: sz.wasm,
          clientVersion: sz.client
        },
        Wz = `reloaded into a newer build after ${zz.site} failed to load: ${zz.error}`;
      return gt({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Bs,
        fatal: !1,
        message: Wz,
        details: Fz
      })
    }
  },
  40057: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      g: () => Fz
    });
    const Fz = 3e4;
    class Wz {
      constructor(zz) {
        this.Iw = zz, this.waitedMs = 0, this.lastMs = null
      }
      frame(zz, tz) {
        if (tz) return !0;
        const sz = null === this.lastMs ? 0 : zz - this.lastMs;
        return this.lastMs = zz, sz <= 900 && (this.waitedMs += sz), !(this.waitedMs < Fz) && (this.Iw(), !0)
      }
    }
  },
  4427: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      h: () => Xz,
      j: () => Wz
    });
    var Fz = sz(4432);

    function Wz(zz) {
      return "none" !== zz
    }

    function Xz(zz, tz) {
      if (!zz) return "none";
      switch (tz) {
        case Fz.$.Drawn:
          return "drawn";
        case Fz.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Oz(zz) {
      return "drawn" === zz
    }
  },
  39720: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      e: () => Hz,
      f: () => Dz,
      g: () => gz,
      i: () => Nz,
      m: () => bz,
      n: () => Kz,
      q: () => uz,
      r: () => wz
    });
    class Fz extends Error {
      constructor(zz) {
        super(`the join's code did not load: ${zz instanceof Error?zz.message:String(zz)}`, {
          cause: zz
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === zz || void 0 === zz ? void 0 : zz.request
      }
    }
    let Wz = null,
      Xz = null,
      Oz = null;
    const oz = [];
    let vz = null;

    function Uz(zz, tz) {
      try {
        zz(tz)
      } catch (sz) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", sz)
      }
    }

    function Kz() {
      return vz
    }

    function uz(zz) {
      oz.push(zz), null !== vz && Uz(zz, vz)
    }

    function Nz(zz) {
      return Wz ??= Promise.all([sz.e(69), sz.e(94), sz.e(214), sz.e(74), sz.e(215), sz.e(189), sz.e(93), sz.e(259), sz.e(187), sz.e(262), sz.e(199), sz.e(186), sz.e(200), sz.e(136), sz.e(85), sz.e(114), sz.e(237), sz.e(53)]).then((() => sz(41646))).then((tz => {
        tz.loadAudio(zz), vz = tz;
        for (const zz of oz) Uz(zz, tz);
        return tz
      })).catch((zz => {
        throw Wz = null, zz
      })), Wz
    }
    async function bz(zz, tz) {
      try {
        const sz = await Nz(zz);
        await sz.loadClientGame(tz)
      } catch (sz) {
        throw new Fz(sz)
      }
    }

    function wz(zz, tz) {
      Xz = {
        running: zz,
        shell: tz
      }
    }

    function Dz() {
      return Oz
    }
    async function gz(zz) {
      const tz = Xz;
      if ((null === tz || void 0 === tz ? void 0 : tz.running) !== zz) throw new Error("the core's session has ended");
      const sz = await Nz(tz.shell.audio).catch((zz => {
        throw new Fz(zz)
      }));
      if (null !== Oz) return Oz;
      if (Xz !== tz || zz.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Oz = sz.startGameHost(zz, tz.shell), null === Oz) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Oz
    }

    function Hz() {
      null !== Oz && (null !== vz ? vz.endGameHost(Oz) : Oz.closeGame()), Oz = null, Xz = null
    }
  },
  39959: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      g: () => Xz,
      h: () => Oz,
      i: () => Wz,
      m: () => bz,
      p: () => Kz,
      t: () => vz,
      u: () => Nz,
      x: () => uz,
      z: () => oz
    });
    var Fz = sz(1723);
    const Wz = new Uint8Array([12]),
      Xz = 2e3,
      Oz = 257;

    function oz(zz) {
      const tz = new Uint8Array(4);
      return new DataView(tz.buffer).setUint32(0, zz, !0), tz
    }
    class vz extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Uz extends Error {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(zz), this.stage = tz, this.code = sz, this.serverText = Fz, this.name = "JoinError"
      }
    }
    class Kz extends Error {
      constructor(zz) {
        super(zz), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class uz extends Error {
      constructor(zz) {
        super((0, Fz.g)(zz), {
          cause: zz
        }), this.name = "TrafficCheckError"
      }
    }
    class Nz extends Error {
      constructor(zz, tz, sz) {
        super(zz, {
          cause: sz
        }), this.networkLost = tz, this.name = "SeatRequestError"
      }
    }
    class bz extends Error {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(zz), this.code = tz, this.serverText = sz, this.name = "MatchmakeError"
      }
    }
  },
  39967: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz,
      d: () => uz
    });
    var Fz = sz(2414),
      Wz = sz(3149),
      Xz = sz(38480),
      Oz = sz(39955),
      oz = sz(39959),
      vz = sz(39969);
    const Uz = "seat reservation expired.",
      Kz = "early_leave";

    function uz(zz) {
      if (zz instanceof Xz.e) return "expected";
      if (zz instanceof oz.u) return zz.networkLost ? "expected" : "unrecognised";
      if (zz instanceof oz.d) {
        if ("closed" === zz.stage && (0 === zz.code || (0, Wz.e)(zz.code))) return "expected";
        if ("roomError" === zz.stage && (zz.serverText === Uz || zz.serverText === Kz)) return "expected"
      }
      return zz instanceof oz.d || zz instanceof oz.m ? null === (0, Oz.j)(zz.code).name ? "unrecognised" : "known" : (0, Fz.f)(zz) ? "expected" : zz instanceof oz.x || zz instanceof vz.f ? "known" : "unrecognised"
    }

    function Nz(zz) {
      return zz instanceof Xz.e ? "timedOut" : "expected" !== uz(zz) || (0, Fz.f)(zz) || zz instanceof oz.d && 1001 === zz.code ? void 0 : "failed"
    }
  },
  38530: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Cz,
      i: () => Yz,
      l: () => uz,
      o: () => xz,
      p: () => Hz,
      r: () => Jz,
      v: () => Iz
    });
    var Fz = sz(35800),
      Wz = sz(35974);
    const Xz = 64 * Fz.b,
      Oz = 40 * Fz.e,
      oz = 36 * Fz.e,
      vz = 20 * Fz.e,
      Uz = 2 * Fz.e,
      Kz = 5 * Fz.e;

    function uz(zz) {
      return "footprint" !== zz
    }
    const Nz = 2 * Fz.e,
      bz = 4 * Fz.e,
      wz = 35 * Fz.e + Nz + bz,
      Dz = 6.5 * Fz.e,
      gz = 132.5 * Fz.b;

    function Hz(zz) {
      const tz = Dz + (0, Wz.n)(zz) + zz * gz;
      return Math.ceil((2 * wz + tz) / Xz) * Xz
    }
    const Bz = Hz(Wz.e),
      Pz = (Fz.e, Fz.e, Fz.e, {
        targetBytes: Oz,
        leastBytes: vz
      }),
      rz = {
        targetBytes: oz,
        leastBytes: vz
      };

    function Yz(zz) {
      return {
        targetBytes: zz,
        leastBytes: 0
      }
    }

    function xz(zz) {
      return zz >= Wz.e ? Pz : rz
    }
    const mz = 2 * Xz;

    function Jz(zz, tz, sz) {
      return zz + tz + mz > (null !== sz && void 0 !== sz ? sz : Bz)
    }
    const Iz = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? zz => {
        requestIdleCallback(zz)
      } : null
    };
    class Cz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Iz;
        this.memory = zz, this.readPeakStoredChunks = tz, this.onError = sz, this.clock = Fz, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(zz, tz, sz) {
        this.shedding = {
          shed: zz,
          Iw: tz,
          readDistanceInUse: sz
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(zz) {
        this.footprint = zz
      }
      setCeiling(zz) {
        this.ceilingBytes = zz, this.call((() => {
          this.memory.setCeiling(zz)
        }), void 0)
      }
      ceilingMayRefuse(zz) {
        return Jz(this.memory.memoryBytes(), zz, this.ceilingBytes)
      }
      reserveAtJoin(zz) {
        let {
          targetBytes: tz,
          leastBytes: sz
        } = zz;
        const Fz = this.memory.memoryBytes(),
          Wz = Fz + sz,
          Xz = Math.max(tz + (this.ballastOn() ? Kz : 0), Wz),
          Oz = this.call((() => this.memory.reserveUpFront(Xz) ? "target" : Xz > Wz && this.memory.reserveUpFront(Wz) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Oz) {
          const zz = "least" === Oz ? `took ${Wz} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Xz} bytes was refused at ${Fz} bytes; ${zz}`)
        }
        return this.joinReserveTaken = Oz, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Oz && this.shedFor("joinReserve"), "none" !== Oz
      }
      afterFrame() {
        if (this.stopped) return;
        const zz = this.clock.now(),
          tz = null !== this.stepsHeldUntil && zz >= this.stepsHeldUntil;
        if (tz && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && zz >= this.ballastCheckAt && (this.takeBallast(zz), this.stopped)) return;
        const sz = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Fz = tz && "now" === sz ? "none" : sz,
          {
            requestIdle: Wz
          } = this.clock;
        "now" === Fz || null !== this.pendingSince && zz - this.pendingSince >= 500 ? this.step() : "idle" === Fz && null === this.pendingSince && (null === Wz ? this.step() : (this.pendingSince = zz, Wz((() => {
          null !== this.pendingSince && this.step()
        })))), zz - this.statsAt >= 1e3 && (this.statsAt = zz, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var zz, tz;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (tz = this.shedding.readDistanceInUse()) && void 0 !== tz ? tz : this.distanceInUse);
          null === (zz = this.footprint) || void 0 === zz || zz.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(zz, tz) {
        this.noteWorker(`Mesh${zz}`, tz)
      }
      meshWorkerGone(zz) {
        this.workerGone(`Mesh${zz}`)
      }
      noteWorldgen(zz) {
        this.noteWorker("Worldgen", zz)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(zz, tz) {
        const sz = this.workers.get(zz);
        null !== sz && void 0 !== sz && sz.gone && (this.replacedRefusals.reserves += sz.stats.reservesRefused, this.replacedRefusals.allocations += sz.stats.allocationsRefused), this.workers.set(zz, {
          stats: tz,
          gone: !1
        })
      }
      workerGone(zz) {
        const tz = this.workers.get(zz);
        tz && (tz.gone = !0)
      }
      details() {
        var zz, tz;
        const sz = {
          wasmMemoryNow: `${(0,Fz.j)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (sz.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (sz.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Wz = this.main;
        if (Wz) {
          sz.wasmMemoryMain = ez(Wz);
          const zz = Math.max(0, Wz.peakLiveBytes - this.ballastPeakBytes),
            tz = 0 === this.peakStoredChunks ? "-" : (zz / this.peakStoredChunks / Fz.b).toFixed(1);
          sz.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${tz} KiB`
        }
        for (const [Fz, {
            stats: Oz,
            gone: oz
          }] of this.workers) sz[`wasmMemory${Fz}`] = ez(Oz) + (oz ? " (gone)" : "");
        const Xz = null !== (zz = null === (tz = this.footprint) || void 0 === tz ? void 0 : tz.describe()) && void 0 !== zz ? zz : null;
        return null !== Xz && (sz.wasmMemoryFootprint = Xz), sz
      }
      pageKillSnapshot() {
        var zz, tz, sz, Wz, Xz;
        let Oz = (null !== (zz = null === (tz = this.main) || void 0 === tz ? void 0 : tz.reservesRefused) && void 0 !== zz ? zz : 0) + this.replacedRefusals.reserves,
          oz = (null !== (sz = null === (Wz = this.main) || void 0 === Wz ? void 0 : Wz.allocationsRefused) && void 0 !== sz ? sz : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Fz
          }
          of this.workers.values()) Oz += Fz.reservesRefused, oz += Fz.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Fz.j)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Fz.j)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Oz,
          refusedAllocations: oz,
          sheds: this.sheds,
          ...null === (Xz = this.footprint) || void 0 === Xz ? void 0 : Xz.snapshot()
        }
      }
      workersMemoryBytes() {
        let zz = 0;
        for (const {
            stats: tz,
            gone: sz
          }
          of this.workers.values()) zz += sz ? 0 : tz.memoryBytes;
        return zz
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Uz)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(zz) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = zz + 1e3;
        const tz = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, tz)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(zz) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${zz}: frames grow on demand from here`)
      }
      shedFor(zz) {
        const {
          shedding: tz
        } = this;
        if (null === tz) return;
        this.pendingSince = null;
        const sz = this.call((() => tz.shed(zz)), null);
        this.stopped || (null !== sz ? (this.sheds++, this.shedCap = sz, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), tz.Iw(zz, this.sheds, this.details())) : uz(zz) && this.stopSteps("nothing is left to shed"))
      }
      call(zz, tz) {
        if (this.stopped) return tz;
        try {
          return zz()
        } catch (sz) {
          return this.stop(), this.onError(sz), tz
        }
      }
    }

    function ez(zz) {
      const tz = (zz, tz) => `${zz}/${(0,Fz.j)(tz)}`;
      return `memory ${(0,Fz.j)(zz.memoryBytes)} live ${(0,Fz.j)(zz.liveBytes)} peak ${(0,Fz.j)(zz.peakLiveBytes)} unused ${(0,Fz.j)(zz.unusedBytes)} ceiling ${(0,Fz.j)(zz.ceilingBytes)} MiB; grows upFront ${tz(zz.grows.upFront,zz.grownBytes.upFront)} ahead ${tz(zz.grows.ahead,zz.grownBytes.ahead)} inFrame ${tz(zz.grows.onDemandInFrame,zz.grownBytes.onDemandInFrame)} other ${tz(zz.grows.onDemand,zz.grownBytes.onDemand)}; refused reserves ${zz.reservesRefused} allocations ${zz.allocationsRefused}`
    }
  },
  40049: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => vz,
      d: () => Uz,
      f: () => bz,
      g: () => uz
    });
    var Fz = sz(3378),
      Wz = sz(4432),
      Xz = sz(40052),
      Oz = sz(40055),
      oz = sz(35805);
    const vz = 395,
      Uz = 2147483648,
      Kz = new Uint8Array(0);
    class uz extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Nz extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class bz {
      constructor(zz, tz, sz) {
        var Fz, Wz, Oz, oz;
        let vz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = zz, this.build = tz, this.onFailure = sz, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Ow = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Fz = vz.fetchFile) && void 0 !== Fz ? Fz : zz => (0, Xz.i)(zz), this.onWritten = null !== (Wz = vz.onWritten) && void 0 !== Wz ? Wz : null, this.onTaken = null !== (Oz = vz.onTaken) && void 0 !== Oz ? Oz : null, this.onPackFileFailed = null !== (oz = vz.onPackFileFailed) && void 0 !== oz ? oz : null, this.startupLeft = new Set(zz.startup);
        for (const Xz of zz.startup) this.request(Xz)
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
      drawnUrl(zz) {
        return this.drawn.get(zz)
      }
      request(zz) {
        const tz = this.pending.get(zz);
        if (!0 === (null === tz || void 0 === tz ? void 0 : tz.ask)) return;
        const sz = this.ib(zz, !0);
        sz.recheck = void 0 !== tz;
        const Fz = this.drawn.get(zz);
        if (void 0 !== Fz) return sz.po = !0, sz.recheck = !0, void this.fetch(zz, sz, Fz);
        this.fetchWanted(zz, sz)
      }
      async refresh() {
        const zz = ++this.refreshes,
          tz = new Set;
        for (const Oz of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const zz of Oz) 0 === (zz & Xz.f) && tz.add(zz);
        const sz = [...tz];
        let Fz;
        try {
          Fz = await Promise.all(sz.map((zz => this.wanted(zz))))
        } catch {
          return null
        }
        if (zz !== this.refreshes) return null;
        const Wz = {
          resent: 0,
          refetched: 0,
          delivered: sz.filter((zz => this.drawn.has(zz))).length
        };
        return sz.forEach(((zz, tz) => {
          const {
            url: sz,
            inPlaceOf: Xz
          } = Fz[tz], Oz = this.pending.get(zz);
          if (void 0 !== Oz) {
            if (Oz.po || void 0 === Oz.url) return void(Oz.recheck = !0);
            if (Oz.url === sz) return;
            Wz.refetched++;
            const tz = this.ib(zz, Oz.ask);
            return tz.recheck = Oz.recheck, void this.fetch(zz, tz, sz, Xz)
          }
          const oz = this.written.get(zz);
          void 0 === oz ? this.drawn.get(zz) !== (null !== sz && void 0 !== sz ? sz : void 0) && (Wz.resent++, this.fetch(zz, this.ib(zz, !1), sz, Xz)) : oz.url !== (null !== sz && void 0 !== sz ? sz : "") && (oz.attempt.recheck = !0)
        })), Wz
      }
      taken(zz, tz) {
        const sz = new Set,
          Fz = new Set;
        for (const Wz of Array.from(tz)) 0 === (Wz & Uz) ? sz.add(Wz) : Fz.add((Wz & ~Uz) >>> 0);
        for (const [Wz, Xz] of this.written) Xz.seq > zz || (this.written.delete(Wz), sz.has(Xz.seq) ? this.refusedFile(Wz, Xz) : this.takenFile(Wz, Xz, !Xz.empty && !Fz.has(Xz.seq)))
      }
      takenFile(zz, tz, sz) {
        const {
          attempt: Fz
        } = tz;
        if (sz) {
          var Wz;
          this.drawn.set(zz, tz.url), this.undrawn.delete(zz), void 0 !== Fz.inPlaceOf ? this.refusedPack.set(zz, Fz.inPlaceOf) : Fz.po || this.refusedPack.delete(zz), null === (Wz = this.onTaken) || void 0 === Wz || Wz.call(this, zz, !0);
          const sz = this.pending.get(zz);
          if (!0 === (null === sz || void 0 === sz ? void 0 : sz.po) && sz.url !== tz.url) {
            const sz = this.ib(zz, !0);
            sz.po = !0, sz.recheck = !0, this.fetch(zz, sz, tz.url)
          }
        } else {
          var Xz;
          this.drawn.has(zz) || this.undrawn.add(zz), null === (Xz = this.onTaken) || void 0 === Xz || Xz.call(this, zz, !1)
        }
        Fz.recheck && this.resendIfChanged(zz)
      }
      refusedFile(zz, tz) {
        var sz, Fz;
        if (null === (sz = this.onTaken) || void 0 === sz || sz.call(this, zz, !1), this.refusedPack.set(zz, tz.url), this.pending.has(zz)) return void(null === (Fz = this.onPackFileFailed) || void 0 === Fz || Fz.call(this, zz, wz(tz.url)));
        const Wz = this.ib(zz, tz.attempt.ask);
        Wz.recheck = tz.attempt.recheck, this.afterRefusal(zz, Wz, tz.url)
      }
      async afterRefusal(zz, tz, sz) {
        var Fz;
        let Wz;
        try {
          Wz = await this.wanted(zz)
        } catch (Xz) {
          return void(this.pending.get(zz) === tz && this.giveUp(zz, tz, sz, Xz))
        }
        this.pending.get(zz) === tz && (Wz.inPlaceOf !== sz ? tz.ask || (null !== (Fz = Wz.url) && void 0 !== Fz ? Fz : void 0) !== this.drawn.get(zz) ? this.fetch(zz, tz, Wz.url, Wz.inPlaceOf) : this.pending.delete(zz) : this.fallBack(zz, tz, sz, wz(sz)))
      }
      ib(zz, tz) {
        const sz = {
          url: void 0,
          ask: tz,
          po: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(zz, sz);
        for (let Fz = this.ready.length - 1; Fz >= 0; Fz--) this.ready[Fz].file === zz && this.ready.splice(Fz, 1);
        return sz
      }
      async wanted(zz) {
        const tz = await this.files.url(zz);
        return null !== tz && this.refusedPack.get(zz) === tz ? {
          url: await this.files.shippedUrl(zz),
          inPlaceOf: tz
        } : {
          url: tz,
          inPlaceOf: void 0
        }
      }
      fetchWanted(zz, tz) {
        const sz = this.files.url(zz);
        sz instanceof Promise ? sz.then((sz => {
          this.fetchFound(zz, tz, sz)
        }), (sz => {
          this.pending.get(zz) === tz && this.giveUp(zz, tz, "", sz)
        })) : this.fetchFound(zz, tz, sz)
      }
      fetchFound(zz, tz, sz) {
        null !== sz && this.refusedPack.get(zz) === sz ? Promise.resolve(this.files.shippedUrl(zz)).then((Fz => {
          this.fetch(zz, tz, Fz, sz)
        }), (Fz => {
          this.pending.get(zz) === tz && this.giveUp(zz, tz, sz, Fz)
        })) : this.fetch(zz, tz, sz)
      }
      fetch(zz, tz, sz, Fz) {
        this.pending.get(zz) === tz && (tz.url = sz, tz.inPlaceOf = Fz, null !== sz ? this.load(zz, tz, sz) : this.buildFile(zz, tz, "", Kz))
      }
      load(zz, tz, sz) {
        const Fz = this.Ow.get(zz);
        (null === Fz || void 0 === Fz ? void 0 : Fz.url) !== sz ? this.fetchFile(sz).then((Fz => {
          var Wz, Xz;
          this.pending.get(zz) === tz && (this.keptTotal += Fz.byteLength - (null !== (Wz = null === (Xz = this.Ow.get(zz)) || void 0 === Xz ? void 0 : Xz.glb.byteLength) && void 0 !== Wz ? Wz : 0), this.Ow.set(zz, {
            url: sz,
            glb: Fz
          }), this.buildFile(zz, tz, sz, Fz))
        }), (Fz => {
          this.pending.get(zz) === tz && this.fallBack(zz, tz, sz, Fz)
        })) : this.buildFile(zz, tz, sz, Fz.glb)
      }
      buildFile(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Oz = Fz.byteLength > 0 && (0, Xz.j)(sz) ? (zz | Xz.b) >>> 0 : zz;
        this.queueRecord(zz, tz, sz, Fz, this.build(Oz, Fz), Wz)
      }
      queueRecord(zz, tz, sz, Fz, Xz, oz) {
        Xz.then((Xz => {
          if (this.pending.get(zz) !== tz) return;
          if (Wz.v + (0, Wz.ke)(Xz.byteLength) > Wz.wc) return void this.ringRefused(zz, tz, sz, new uz(`${Dz(sz)}'s record is ${Xz.byteLength-Oz.c} bytes, past the cmd ring's ${Wz.wc}`), oz);
          const vz = {
            file: zz,
            url: sz,
            payload: Xz,
            glb: Fz,
            attempt: tz
          };
          oz ? this.ready.unshift(vz) : this.ready.push(vz)
        }))
      }
      async fallBack(zz, tz, sz, Fz) {
        var Wz;
        let Xz = null,
          Oz = Fz;
        try {
          Xz = await this.files.shippedUrl(zz)
        } catch (oz) {
          Oz = oz
        }
        this.pending.get(zz) === tz && (null !== Xz && Xz !== sz ? (null === (Wz = this.onPackFileFailed) || void 0 === Wz || Wz.call(this, zz, Fz), tz.ask || this.drawn.get(zz) !== Xz ? (tz.url = Xz, tz.inPlaceOf = sz, this.load(zz, tz, Xz)) : this.pending.delete(zz)) : this.giveUp(zz, tz, sz, Oz))
      }
      ringRefused(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Xz.j)(sz) ? this.fallBack(zz, tz, sz, Fz): this.giveUp(zz, tz, sz, Fz, Wz)
      }
      giveUp(zz, tz, sz, Wz) {
        let Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: zz,
          url: Dz(sz),
          error: Wz,
          startup: this.startupLeft.has(zz)
        }), tz.ask || !this.drawn.has(zz) ? (0, Fz.P)(Wz) ? this.queueRecord(zz, tz, sz, Kz, Promise.resolve((0, Oz.m)(zz, (0, oz.i)(Wz))), Xz) : this.buildFile(zz, tz, sz, Kz, Xz) : this.pending.delete(zz)
      }
      async resendIfChanged(zz) {
        var tz;
        if (0 !== (zz & Xz.f)) return;
        let sz;
        try {
          sz = await this.wanted(zz)
        } catch {
          return
        }(null !== (tz = sz.url) && void 0 !== tz ? tz : void 0) === this.drawn.get(zz) || this.pending.has(zz) || this.written.has(zz) || this.fetch(zz, this.ib(zz, !1), sz.url, sz.inPlaceOf)
      }
      drain(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === zz) return;
        let sz = 0,
          Fz = 0;
        for (; Fz < this.ready.length && sz < 262144;) {
          const oz = this.ready[Fz];
          if (this.written.has(oz.file)) {
            Fz++;
            continue
          }
          const Kz = this.nextSeq;
          new DataView(oz.payload.buffer, oz.payload.byteOffset, oz.payload.byteLength).setUint32(Oz.e, Kz, !0);
          const Nz = oz.attempt.po && oz.glb.byteLength > 0 && this.drawn.get(oz.file) === oz.url;
          if (zz(vz, Nz ? 1 : 0, oz.payload)) {
            if (this.nextSeq = Kz >= Uz - 1 ? 1 : Kz + 1, this.ready.splice(Fz, 1), sz += oz.payload.byteLength, this.pending.delete(oz.file), this.startupLeft.delete(oz.file), this.written.set(oz.file, {
                seq: Kz,
                url: oz.url,
                empty: 0 === oz.glb.byteLength,
                attempt: oz.attempt
              }), oz.glb.byteLength > 0) try {
              var Wz;
              null === (Wz = this.onWritten) || void 0 === Wz || Wz.call(this, oz.file, oz.glb)
            } catch (Xz) {
              console.warn("ModelFeed: reading the file's images failed", Xz)
            }
          } else {
            if (null === tz || 0 === oz.glb.byteLength || tz(oz.payload.byteLength)) return;
            this.ready.splice(Fz, 1);
            const zz = new uz(`${Dz(oz.url)}'s record is ${oz.payload.byteLength-Oz.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(oz.file, oz.attempt, oz.url, zz, !0)
          }
        }
      }
    }

    function wz(zz) {
      return new Nz(`presentation refused ${Dz(zz)}`)
    }

    function Dz(zz) {
      return zz.startsWith("data:") ? `${zz.slice(0,Math.min(Math.max(zz.indexOf(","),5),64))},...` : zz
    }
  },
  40052: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      f: () => Xz,
      i: () => Kz,
      j: () => oz,
      n: () => Uz,
      q: () => vz
    });
    var Fz = sz(3378),
      Wz = sz(2920);
    const Xz = 2147483648,
      Oz = 1073741824;

    function oz(zz) {
      return zz.startsWith("data:")
    }

    function vz(zz) {
      let {
        onTableFailed: tz,
        packUrl: sz
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Fz = Uz();
      Fz.catch((zz => {
        null === tz || void 0 === tz || tz(zz)
      }));
      const Wz = async tz => (await Fz).fileUrl((tz & ~Xz) >>> 0, zz);
      return {
        startup: [],
        url: async zz => {
          if (sz && 0 === (zz & Xz)) {
            const tz = await Fz,
              Wz = tz.filePackName(zz),
              Xz = null === Wz || "lifeform" === tz.fileSource(zz) ? null : sz(Wz);
            if (null !== Xz) return Xz
          }
          return Wz(zz)
        },
        shippedUrl: Wz
      }
    }

    function Uz() {
      return sz.e(41).then((() => sz(42422)))
    }
    async function Kz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return zz.startsWith("data:") ? (0, Wz.b)(zz.slice(zz.indexOf(",") + 1), tz) : (0, Fz.G)(zz, {
        spare: tz
      })
    }
  },
  40055: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      e: () => Kz,
      g: () => bz,
      j: () => gz,
      m: () => wz,
      o: () => Nz,
      p: () => Dz
    });
    const Fz = 826427981,
      Wz = 1,
      Xz = 2,
      Oz = 44,
      oz = 46,
      vz = 58,
      Uz = 8,
      Kz = 4;

    function uz(zz, tz, sz) {
      const Wz = (new TextEncoder).encode(sz),
        Xz = Uz + 4 * (tz.length + 2),
        Oz = new Uint8Array(Xz + (Wz.byteLength + 3 & -4)),
        oz = new DataView(Oz.buffer);
      return oz.setUint32(0, zz, !0), oz.setUint32(Uz, Fz, !0), tz.forEach(((zz, tz) => {
        oz.setUint32(Uz + 4 * (tz + 1), zz, !0)
      })), oz.setUint32(Xz - 4, Wz.byteLength, !0), Oz.set(Wz, Xz), Oz
    }

    function Nz(zz, tz) {
      return uz(zz, [Xz], tz)
    }

    function bz(zz, tz) {
      return uz(zz, [Wz, oz], tz)
    }

    function wz(zz, tz) {
      return uz(zz, [Wz, vz], tz)
    }

    function Dz(zz, tz) {
      return uz(zz, [Wz, Oz], tz)
    }

    function gz(zz) {
      const tz = Uz;
      if (zz.byteLength < tz + 12) return !1;
      const sz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      return sz.getUint32(tz, !0) === Fz && sz.getUint32(tz + 4, !0) === Wz && sz.getUint32(tz + 8, !0) === Oz
    }
  },
  40046: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Bz,
      c: () => Hz,
      e: () => xz,
      h: () => Yz,
      k: () => mz,
      m: () => Dz
    });
    var Fz = sz(4436),
      Wz = sz(39931);
    const Xz = 18,
      Oz = 19,
      oz = 20,
      vz = {
        1: "link",
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
        [Xz]: "retry linked",
        [Oz]: "fallback linked",
        [oz]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Uz(zz, tz) {
      return zz === Xz ? "program retry" : zz === Oz || zz === oz ? `program fallback ${tz}` : "program"
    }
    const Kz = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      uz = {
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
      Nz = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      bz = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      wz = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function Dz(zz) {
      return String(zz).replace(/\d/g, (zz => String.fromCharCode(97 + Number(zz))))
    }

    function gz(zz, tz) {
      var sz;
      return null !== (sz = zz[tz]) && void 0 !== sz ? sz : Dz(tz)
    }

    function Hz() {
      return Dz((0, Wz.c)())
    }

    function Bz(zz, tz) {
      switch (zz) {
        case Fz.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${gz(uz,tz)}`, instance: String(tz), group: String(zz)
          };
        case Fz.g.RenderChunkMeshNotDrawn: {
          const sz = 0 === (128 & tz) ? "" : " shortage",
            Fz = tz >>> 8;
          return {
            words: ` ${gz(Nz,127&tz)}${sz}${0===Fz?"":` kind ${Dz(Fz)}`}`,
            instance: String(tz),
            group: String(zz)
          }
        }
        case Fz.g.RenderInternal: {
          const sz = gz(Kz, 255 & tz),
            Fz = tz >>> 8 & 255;
          if (0 === Fz) return {
            words: ` ${sz}`,
            instance: String(tz),
            group: String(zz)
          };
          const Wz = gz(vz, Fz),
            Xz = tz >>> 16;
          return {
            words: ` ${sz} ${Wz} program ${Dz(Xz)}`,
            instance: `${sz} ${Wz}`,
            group: Uz(Fz, sz),
            gpuDetails: {
              programFailure: Wz,
              program: String(Xz)
            }
          }
        }
        case Fz.g.RenderSerialLinks: {
          const sz = gz(bz, tz);
          return {
            words: ` ${sz}`,
            instance: String(tz),
            group: String(zz),
            gpuDetails: {
              serialLinks: sz
            }
          }
        }
        case Fz.g.RenderGlErrorAfterRestore: {
          const sz = gz(wz, 65535 & tz),
            Fz = tz >>> 16,
            Wz = 65535 !== Fz;
          return {
            words: ` ${sz}${Wz?` program ${Dz(Fz)}`:""}`,
            instance: String(tz),
            group: String(zz),
            gpuDetails: Wz ? {
              glError: sz,
              program: String(Fz)
            } : {
              glError: sz
            }
          }
        }
        default:
          return null
      }
    }
    const Pz = 2,
      rz = new Map;

    function Yz(zz) {
      let {
        group: tz,
        instance: sz
      } = zz, Fz = rz.get(tz);
      return void 0 === Fz && (Fz = [], rz.set(tz, Fz)), !Fz.includes(sz) && (Fz.length >= Pz || (Fz.push(sz), !1))
    }

    function xz() {
      return rz.size > 0
    }

    function mz() {
      rz.clear()
    }
  },
  39969: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Hz,
      f: () => Bz,
      h: () => gz,
      j: () => xz
    });
    var Fz = sz(6221),
      Wz = sz(34),
      Xz = sz(3987),
      Oz = sz(4436),
      oz = sz(6215),
      vz = sz(39971);

    function Uz(zz, tz) {
      const sz = (0, oz.c)(tz.variants);
      return zz.setShaderPack(sz.variantFlags, sz.hooks, sz.moduleCodes, (0, vz.E)(tz.layers), vz.q[tz.PO], tz.keepCircleShadows)
    }
    const Kz = 0,
      uz = 1,
      Nz = 2,
      bz = "shaderPack:failedToCompile",
      wz = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Dz = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function gz(zz, tz) {
      var sz;
      const Fz = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.reason) && void 0 !== sz ? sz : "none";
      return wz.has(Fz) ? {
        messageKey: tz ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Fz && "override" === (null === zz || void 0 === zz ? void 0 : zz.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Dz.has(Fz) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const Hz = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Bz extends Error {
      constructor(zz) {
        super(`the shader pack can't run in this game: ${zz}`), this.messageKey = zz, this.name = "ShaderPackJoinError"
      }
    }
    const Pz = "strict";
    class rz {
      constructor(zz) {
        this.deps = zz, this.pagePack = void 0, this.loaded = null, this.PO = Pz, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = zz.load().catch((tz => (zz.warn("the shader pack could not load: the game draws without it", tz), {
          status: "none"
        }))).then((zz => (this.loaded = zz, "active" === zz.status && (this.handOverToPreviews(zz), null !== zz.harnessPolicy && (this.PO = zz.harnessPolicy, this.handOver())), zz)))
      }
      async join(zz) {
        this.leave();
        const tz = this.game,
          [sz, Wz] = await Promise.all([this.pagePack, this.policyOf(zz)]);
        if (tz !== this.game || "none" === sz.status) return null;
        const Xz = "active" === sz.status ? sz.pack.variants : sz.variants,
          Oz = (0, Fz.k)(Xz, Wz);
        if (Oz && "active" === sz.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Oz) {
          const zz = this.cantRun(sz, Wz);
          if (null !== zz) return zz
        } else if ("blocked" === sz.status || null === this.deps.core) return null;
        return this.PO = Wz, this.handOver(), Oz && this.refused ? bz : (this.joined = !0, this.offInThisGame = !Oz, null)
      }
      async replay(zz) {
        const tz = await this.join(zz);
        null === tz ? this.playable() : this.deps.failInGame(tz)
      }
      cantRun(zz, tz) {
        const {
          core: sz,
          noWebGpu: Fz
        } = this.deps;
        if ("blocked" === zz.status) {
          return "shaderPack:failedUnchecked" === zz.messageKey && null === sz && Fz.noAdapter ? Fz.messageKey : zz.messageKey
        }
        return this.refused || this.failedPolicies.has(tz) ? bz : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var zz;
        return this.runsInJoinedGame() && "active" === (null === (zz = this.loaded) || void 0 === zz ? void 0 : zz.status) ? function(zz, tz) {
          const sz = zz.filter((zz => (0, Fz.k)([zz], tz))),
            Wz = zz => sz.some((tz => tz[zz]));
          return {
            sceneDepth: Wz("sceneDepth"),
            sunShadow: Wz("sunShadow"),
            airShadow: Wz("airShadow")
          }
        }(this.loaded.pack.variants, this.PO) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(bz) : (null !== this.couldntRun ? this.notify(Xz.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.PO) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(zz) {
        for (const {
            code: tz,
            detail: sz
          }
          of zz)
          if (tz === Oz.g.RenderShaderPackNotRun) switch (255 & sz) {
            case Kz:
              this.refused = !0, this.failed();
              break;
            case uz:
              this.failedPolicies.add(this.PO), this.failed();
              break;
            case Nz:
              this.failedModelPolicies.add(this.PO), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(bz) : this.failedWhileJoining = !0)
      }
      fail(zz) {
        this.leave(), this.deps.failInGame(zz)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(zz, tz) {
        const sz = this.game;
        this.deps.notify(zz, (() => sz === this.game && this.joined), tz)
      }
      handOver() {
        var zz;
        const {
          core: tz
        } = this.deps;
        null !== tz && "active" === (null === (zz = this.loaded) || void 0 === zz ? void 0 : zz.status) && (Uz(tz, {
          ...this.loaded.pack,
          PO: this.PO
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(zz) {
        let {
          pack: tz,
          harnessPolicy: sz
        } = zz;
        const {
          previews: Fz
        } = this.deps;
        null !== Fz && Uz(Fz, {
          ...tz,
          PO: null !== sz && void 0 !== sz ? sz : Pz
        })
      }
      policyOf(zz) {
        return this.deps.policyOf(zz).catch((zz => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", zz), Pz)))
      }
    }
    const Yz = "wasmShaderPackNotice";

    function xz(zz, tz, sz, Fz) {
      return Wz.o.subscribe(Yz, (zz => {
        let {
          translationKey: tz,
          stillCurrent: sz,
          reasonKey: Fz
        } = zz;
        sz() && Wz.o.Yg("chat", (0, Xz.g)(tz, Fz))
      })), new rz({
        load: mz,
        policyOf: Jz,
        core: zz,
        previews: tz,
        noWebGpu: sz,
        notify: (zz, tz, sz) => {
          const Fz = {
            translationKey: zz,
            stillCurrent: tz,
            reasonKey: sz
          };
          Wz.o.Yg(Yz, Fz, !0)
        },
        failInGame: zz => {
          Wz.o.Yg(Xz.f, zz)
        },
        warn: Fz
      })
    }
    async function mz() {
      const [{
        shaderPackPage: zz,
        harnessShaderPackMode: tz
      }, {
        shaderPackTextures: Fz
      }] = await Promise.all([sz.e(129).then((() => sz(38610))), sz.e(130).then((() => sz(6211)))]), Wz = await zz.load();
      return "active" !== Wz.status ? Wz : {
        status: "active",
        pack: {
          variants: Wz.pack.variants,
          layers: Fz().layers,
          keepCircleShadows: Wz.pack.keepCircleShadows
        },
        harnessPolicy: tz()
      }
    }
    async function Jz(zz) {
      var tz;
      const [{
        harnessShaderPackMode: Fz
      }, {
        getShaderPackPolicy: Wz
      }] = await Promise.all([sz.e(129).then((() => sz(38610))), sz.e(89).then((() => sz(40382)))]);
      return null !== (tz = Fz()) && void 0 !== tz ? tz : Wz(zz)
    }
  },
  40063: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      f: () => gz,
      h: () => vz,
      i: () => Uz,
      j: () => Kz,
      n: () => Nz
    });
    var Fz = sz(40068),
      Wz = sz(40075);
    const Xz = "atlas:",
      Oz = 3e4;
    class oz extends Error {
      constructor(zz, tz) {
        super(`fetching ${zz} answered HTTP ${tz}`), this.url = zz, this.status = tz, this.name = "TerrainTextureFetchError"
      }
    }

    function vz(zz) {
      if (!zz.startsWith(Xz)) return null;
      const tz = Number(zz.slice(Xz.length));
      return Number.isInteger(tz) && tz >= 0 ? tz : null
    }
    async function Uz() {
      const zz = await sz.e(201).then((() => sz(33845)));
      return {
        atlasSheets: zz.blockAtlasUrls,
        texture: tz => {
          var sz, Fz, Xz;
          return null !== (sz = null !== (Fz = null !== (Xz = zz.animatedBlockTextures[tz]) && void 0 !== Xz ? Xz : zz.rotatedBlockTextures[tz]) && void 0 !== Fz ? Fz : Wz.b[tz]) && void 0 !== sz ? sz : null
        }
      }
    }
    async function Kz(zz) {
      const tz = new AbortController,
        sz = setTimeout((() => {
          tz.abort(new DOMException(`${zz} took over ${Oz} ms`, "TimeoutError"))
        }), Oz);
      let Fz;
      try {
        const sz = await fetch(zz, {
          signal: tz.signal
        });
        if (!sz.ok) throw new oz(zz, sz.status);
        Fz = await sz.blob()
      } finally {
        clearTimeout(sz)
      }
      const Wz = await createImageBitmap(Fz, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Nz(Wz)
      } finally {
        Wz.close()
      }
    }
    const uz = 8192;

    function Nz(zz) {
      const {
        width: tz,
        height: sz
      } = zz, Wz = Math.max(1, Math.min(sz, uz)), Xz = (0, Fz.d)(tz, Wz, {
        willReadFrequently: !0
      });
      if (!Xz) throw new Error("no 2D context to read the texture back");
      Xz.globalCompositeOperation = "copy";
      const Oz = new Uint8Array(tz * sz * 4);
      for (let Fz = 0; Fz < sz; Fz += Wz) {
        const oz = Math.min(Wz, sz - Fz);
        Xz.drawImage(zz, 0, Fz, tz, oz, 0, 0, tz, oz), Oz.set(Xz.getImageData(0, 0, tz, oz).data, Fz * tz * 4)
      }
      return {
        width: tz,
        height: sz,
        pixels: Oz
      }
    }
    async function bz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kz;
      const Fz = [],
        Wz = await Promise.all(zz.map((async zz => {
          var Wz, Oz;
          const oz = null !== (Wz = null === (Oz = tz.decoded) || void 0 === Oz ? void 0 : Oz.call(tz, zz)) && void 0 !== Wz ? Wz : null,
            Uz = null === oz ? function(zz, tz) {
              if (zz.startsWith(Xz)) {
                var sz;
                const Fz = vz(zz);
                return null === Fz ? null : null !== (sz = tz.atlasSheets[Fz]) && void 0 !== sz ? sz : null
              }
              return tz.texture(zz)
            }(zz, tz) : null,
            Kz = null !== oz && void 0 !== oz ? oz : null === Uz ? null : sz(Uz);
          if (null === Kz) return Fz.push({
            name: zz,
            url: Uz,
            error: new Error(`no URL for terrain texture ${zz}`)
          }), null;
          try {
            const tz = await Kz;
            if (tz.pixels.byteLength !== tz.width * tz.height * 4) throw new Error(`decoded ${tz.pixels.byteLength} bytes for ${tz.width}x${tz.height} texels`);
            return {
              name: zz,
              texture: tz
            }
          } catch (uz) {
            return Fz.push({
              name: zz,
              url: Uz,
              error: uz
            }), null
          }
        }))),
        Oz = Wz.filter((zz => null !== zz)),
        oz = new Uint32Array(2 * Oz.length);
      Oz.forEach(((zz, tz) => {
        let {
          texture: sz
        } = zz;
        oz[2 * tz] = sz.width, oz[2 * tz + 1] = sz.height
      }));
      return {
        handOver: {
          names: Oz.map((zz => {
            let {
              name: tz
            } = zz;
            return tz
          })),
          textures: Oz.map((zz => {
            let {
              texture: tz
            } = zz;
            return tz.pixels
          })),
          sizes: oz
        },
        failures: Fz
      }
    }
    const wz = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Dz() {}
    class gz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wz,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = zz, this.retryMs = tz, this.keepBelow = sz, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uz,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Fz = ++this.started,
          Wz = {
            decode: sz.decode,
            wholeAtlas: sz.wholeAtlas
          };
        return this.loadAndHandOver(tz, Wz, zz, (() => {
          var zz;
          return Fz < this.landed || !1 === (null === (zz = sz.wanted) || void 0 === zz ? void 0 : zz.call(sz))
        }), {
          onTaken: (zz, sz) => {
            this.landed = Fz, this.current = {
              mine: Fz,
              sources: tz,
              load: Wz,
              Ow: zz,
              failed: sz
            }
          }
        })
      }
      restore(zz) {
        var tz;
        const sz = this.current;
        if (null === sz) return Promise.resolve(null);
        if ((null === (tz = this.restoring) || void 0 === tz ? void 0 : tz.mine) === sz.mine) return this.restoring.done;
        const Fz = {
          mine: sz.mine,
          done: this.restoreLanded(sz, zz).finally((() => {
            this.restoring === Fz && (this.restoring = null)
          }))
        };
        return this.restoring = Fz, Fz.done
      }
      async restoreLanded(zz, tz) {
        const sz = () => this.landed !== zz.mine,
          {
            Ow: Fz
          } = zz;
        if (null !== Fz) return this.stopped() ? null : this.core.setTerrainTextures(Fz.names, Fz.textures, Fz.sizes);
        let Wz = tz;
        for (let Xz = 0;; Xz++) {
          const tz = this.retryMs.at(Xz),
            Fz = {
              allOrNothingExcept: void 0 === tz ? void 0 : zz.failed
            },
            Oz = await this.loadAndHandOver(zz.sources, zz.load, Wz, sz, Fz);
          if (!1 !== Oz || void 0 === tz || this.stopped()) return Oz;
          if (Wz = Dz, await new Promise((zz => {
              setTimeout(zz, tz)
            })), sz()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Xz = this.core.terrainTextureNames();
        var Oz;
        if (0 === Xz.length) return null === (Oz = Wz.onTaken) || void 0 === Oz || Oz.call(Wz, null, new Set), !0;
        let oz, Uz;
        try {
          oz = await zz(), Uz = await bz(Xz, oz, tz.decode)
        } catch (gz) {
          return Fz() ? null : (sz({
            name: null,
            url: null,
            error: gz
          }), !1)
        }
        if (Fz() || this.stopped()) return null;
        for (const vz of Uz.failures) sz(vz);
        const Kz = Wz.allOrNothingExcept;
        if (void 0 !== Kz && Uz.failures.some((zz => {
            let {
              name: tz
            } = zz;
            return null === tz || !Kz.has(tz)
          })) || !0 === tz.wholeAtlas && Uz.failures.some((zz => {
            let {
              name: tz
            } = zz;
            return null === tz || null !== vz(tz)
          }))) return !1;
        const {
          handOver: uz
        } = Uz, Nz = function(zz) {
          return zz.textures.reduce(((zz, tz) => zz + tz.byteLength), 0)
        }(uz) < this.keepBelow, wz = this.core.setTerrainTextures(uz.names, uz.textures, uz.sizes, Nz ? void 0 : () => {
          !async function(zz, tz) {
            await tz;
            for (const {
                buffer: Fz
              }
              of zz) {
              const zz = Fz;
              var sz;
              if (!zz.detached) null === (sz = zz.transfer) || void 0 === sz || sz.call(zz, 0)
            }
          }(uz.textures, oz.heldUntil)
        });
        if (wz) {
          var Dz;
          const zz = new Set(Uz.failures.flatMap((zz => {
            let {
              name: tz
            } = zz;
            return null === tz ? [] : [tz]
          })));
          null === (Dz = Wz.onTaken) || void 0 === Dz || Dz.call(Wz, Nz ? uz : null, zz)
        }
        return wz
      }
    }
  },
  36263: (zz, tz, sz) => {
    function Fz(zz) {
      return "fetch" === zz || "timeout" === zz || "integrity" === zz ? "download" : "browser"
    }
    sz.d(tz, {
      c: () => Wz,
      d: () => Oz,
      f: () => vz,
      h: () => oz,
      j: () => Fz,
      m: () => Xz
    });
    const Wz = "https://discord.gg/playbloxd";

    function Xz(zz) {
      return "download" === zz ? {
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

    function Oz(zz, tz) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: tz ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: zz.code
        },
        discordLink: tz,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function oz() {
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

    function vz(zz, tz, sz) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: sz ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: zz.reason
        },
        discordLink: null === zz.name,
        confirm: tz ? "general:reconnect" : zz.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6215: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => rz,
      g: () => Yz,
      k: () => Bz,
      o: () => Hz
    });
    var Fz = sz(6221);
    const Wz = 6,
      Xz = 3,
      Oz = 1,
      oz = 2,
      vz = 4,
      Uz = 8,
      Kz = 16,
      uz = 32,
      Nz = 64,
      bz = 128,
      wz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Dz(zz) {
      if (!zz) return 0;
      const tz = wz.indexOf(zz);
      if (tz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return tz
    }

    function gz(zz) {
      if (0 === zz) return null;
      const tz = wz[zz];
      if (void 0 === tz) throw new Error(`${zz} is not a shader pack hook function id`);
      return tz
    }

    function Hz(zz) {
      const tz = Fz.c.length;
      return {
        strict: zz >= tz,
        program: Fz.c[zz % tz]
      }
    }

    function Bz(zz) {
      return Number(zz.strict) * Fz.c.length + Fz.c.indexOf(zz.program)
    }

    function Pz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function rz(zz) {
      const tz = {
        variantFlags: new Uint8Array(Wz),
        hooks: new Uint8Array(Wz * Xz),
        moduleCodes: Array(Wz).fill(""),
        reads: Array(2 * Wz).fill("")
      };
      for (const sz of zz) {
        const zz = Bz(sz.key),
          Fz = (zz, tz) => null === sz.hooks.surface || sz.reads.fragment.includes(zz) ? 0 : tz;
        tz.variantFlags[zz] = (sz.sceneDepth ? Oz : 0) | (sz.movesVertices ? oz : 0) | (sz.sunShadow ? vz : 0) | (sz.airShadow ? Uz : 0) | (sz.discards ? Kz : 0) | Fz("localPosition", uz) | Fz("enchantSpeed", Nz) | Fz("enchantTier", bz), tz.hooks[zz * Xz] = Dz(sz.hooks.vertex), tz.hooks[zz * Xz + 1] = Dz(sz.hooks.surface), tz.hooks[zz * Xz + 2] = Dz(sz.hooks.light), tz.moduleCodes[zz] = sz.moduleCode, tz.reads[2 * zz] = sz.reads.vertex.join(" "), tz.reads[2 * zz + 1] = sz.reads.fragment.join(" ")
      }
      return tz
    }

    function Yz(zz) {
      const {
        hooks: tz,
        moduleCodes: sz,
        reads: Fz
      } = zz;
      return Array.from(zz.variantFlags, ((zz, Wz) => {
        const uz = Wz * Xz;
        return {
          key: Hz(Wz),
          hooks: {
            vertex: gz(tz[uz]),
            surface: gz(tz[uz + 1]),
            light: gz(tz[uz + 2])
          },
          moduleCode: sz[Wz],
          sceneDepth: 0 !== (zz & Oz),
          sunShadow: 0 !== (zz & vz),
          airShadow: 0 !== (zz & Uz),
          movesVertices: 0 !== (zz & oz),
          discards: 0 !== (zz & Kz),
          reads: {
            vertex: Pz(Fz[2 * Wz]),
            fragment: Pz(Fz[2 * Wz + 1])
          }
        }
      }))
    }
  },
  39971: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Oz,
      E: () => Dz,
      F: () => bz,
      J: () => wz,
      e: () => Wz,
      i: () => Fz,
      k: () => Nz,
      m: () => Kz,
      q: () => gz,
      s: () => Xz,
      v: () => oz,
      x: () => vz
    });
    const Fz = 3,
      Wz = 0,
      Xz = 1,
      Oz = 2,
      oz = {
        uniform: 3,
        RN: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vz = 10,
      Uz = "BloxdPackInputs",
      Kz = "bloxdPackInputs",
      uz = [{
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
      Nz = 80;

    function bz() {
      const zz = uz.map((zz => {
        let {
          name: tz,
          type: sz
        } = zz;
        return `    ${tz}: ${sz},\n`
      })).join("");
      return `struct ${Uz} {\n${zz}}\n@group(${Fz}) @binding(${Wz}) var<uniform> ${Kz}: ${Uz};\n`
    }

    function wz(zz, tz) {
      const sz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Nz),
        [Fz, Wz, Xz, Oz, oz, vz] = uz;
      sz.setFloat32(Fz.offset, tz.seconds, !0), sz.setUint32(Wz.offset, tz.lit ? 1 : 0, !0);
      for (let Uz = 0; Uz < 3; Uz++) sz.setInt32(Xz.offset + 4 * Uz, tz.renderOffset[Uz], !0), sz.setFloat32(Oz.offset + 4 * Uz, tz.L_[Uz], !0), sz.setFloat32(oz.offset + 4 * Uz, tz.eyePosition[Uz], !0), sz.setFloat32(vz.offset + 4 * Uz, tz.shadowDirection[Uz], !0)
    }

    function Dz(zz) {
      const tz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, sz) => {
        let {
          id: Fz,
          rotation: Wz
        } = zz;
        tz[sz] = 65535 & Fz | (3 & Wz) << 16
      })), tz
    }
    const gz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6221: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      g: () => Oz,
      k: () => oz,
      l: () => Wz,
      o: () => Xz
    });
    const Fz = ["terrain", "liquid", "model"];

    function Wz() {
      const zz = [];
      for (const tz of [!1, !0])
        for (const sz of Fz) zz.push({
          strict: tz,
          program: sz
        });
      return zz
    }

    function Xz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function Oz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function oz(zz, tz) {
      return "off" !== tz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === tz) && !Oz(zz))))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);