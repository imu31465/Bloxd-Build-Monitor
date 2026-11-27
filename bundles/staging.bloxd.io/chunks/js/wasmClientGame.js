export const id = 69;
export const ids = [69];
export const modules = {
  40593: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    var Zr = Qr(34);

    function Wr(rr) {
      return "refetchCode" === rr || "devDownloadJson" === rr || rr.startsWith("Plugin")
    }

    function ar(rr, Sr) {
      "refetchCode" !== rr ? "Plugin|MobAiPlugin|ShowPetUi" !== rr ? Promise.all([Qr.e(128), Qr.e(129), Qr.e(118), Qr.e(120), Qr.e(248)]).then((() => Qr(54268))).then((Qr => {
        let {
          runClientGameMessage: Zr
        } = Qr;
        Zr(rr, Sr)
      })).catch((Sr => {
        console.error(`Game message ${rr} failed`, Sr)
      })) : Zr.i.Jp("showPetUi", Sr) : Zr.i.Jp("refetchCode")
    }
  },
  9996: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => jr,
      i: () => Ir,
      j: () => fr
    });
    var Zr = Qr(34);
    const Wr = "touchSprintChanged";
    let ar = !0;

    function jr() {
      return ar
    }

    function Ir(rr) {
      rr !== ar && (ar = rr, Zr.i.Jp(Wr, rr))
    }

    function fr(rr, Sr) {
      return null !== rr && null !== Sr && rr > Sr
    }
  },
  55093: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      d: () => Wr
    });
    const Zr = ["recording", "freecam", "keyframe"];

    function Wr() {
      const rr = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(rr[1]) << 32n | BigInt(rr[0])
    }
  },
  35381: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => fr
    });
    var Zr = Qr(26);
    const Wr = 24,
      ar = "farNametags",
      jr = 1e5;

    function Ir() {
      var rr;
      return null === (rr = Zr.c.get("showDistantNametags")) || void 0 === rr || rr
    }

    function fr() {
      var rr;
      return null !== (rr = function() {
        const rr = new URLSearchParams(window.location.search).get(ar),
          Sr = null === rr || "" === rr ? NaN : Number(rr);
        return Number.isFinite(Sr) && Sr >= 0 ? Math.min(Sr, jr) : null
      }()) && void 0 !== rr ? rr : Ir() ? 0 : Wr
    }
  },
  55089: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      blockIdOf: () => fE.d,
      clearWasmCameraScreen: () => zW,
      creativeItemIds: () => hZ.creativeItemIds,
      decodeMapSettings: () => xE,
      drainTextRerasters: () => uI.b,
      enchantmentPerksOf: () => hZ.enchantmentPerksOf,
      endGameHost: () => yE,
      followCursorAim: () => pE,
      followMenuPrefs: () => ha,
      loadAudio: () => zE,
      loadClientGame: () => hE,
      loadTextIcons: () => uI.e,
      rasterText: () => sI.i,
      readBoardToEdit: () => IE,
      readDrawCensus: () => mE.f,
      setTextHost: () => uI.k,
      setTextLocalPlayer: () => uI.l,
      showInCreativeInvenOf: () => hZ.showInCreativeInvenOf,
      startGameHost: () => KE,
      startShellAnalytics: () => WE,
      startSkyFeed: () => Kf,
      textChanged: () => uI.t,
      warmText: () => sI.k,
      wasmCameraScreen: () => hW
    });
    Qr(38045);
    var Zr = Qr(26),
      Wr = Qr(38287),
      ar = Qr(40739),
      jr = Qr(34),
      Ir = Qr(4637),
      fr = Qr(38280),
      Er = Qr(1353),
      pr = Qr(679),
      xr = Qr(39720),
      mr = Qr(5610),
      Nr = Qr(42500),
      Ur = Qr(42438);
    const tr = Ur.vb / 4,
      hr = Ur.m.PlaySound,
      zr = Ur.m.SoundReset,
      Yr = mr.$.ReplayFailed,
      nr = mr.$.RecorderEvent;
    class er {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = rr, this.memory = Sr, this.audio = Qr, this.serverIds = new Int32Array(256).fill(Ur.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Ur.p.BYTES)), this.renderPtr = 0, this.sx = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new Ur.V(rr, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.Zjr(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(rr, Sr) {
        const Qr = this.eventView();
        return new Uint8Array(Qr.buffer, Qr.byteOffset + rr, Sr)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Ur.p.localId(this.apiView, 0)
      }
      localDeaths() {
        return Ur.p.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const rr = this.apiView,
          Sr = Ur.p.entRenderPtr(rr, 0),
          Qr = Ur.p.entVisPtr(rr, 0),
          Zr = Ur.p.entCapacity(rr, 0);
        if (Sr !== this.renderPtr || Qr !== this.visPtr || Zr !== this.sx || this.renderBuffer !== this.buffer) {
          this.renderPtr = Sr, this.visPtr = Qr, this.sx = Zr, this.renderBuffer = this.buffer;
          const rr = this.memoryView(Float32Array, Sr, Zr * tr, "the render array"),
            Wr = this.memoryView(Uint8Array, Qr, Zr, "the visibility array");
          this.renderCapacity = rr && Wr ? Zr : 0, this.render = rr && Wr ? rr : new Float32Array(0), this.vis = rr && Wr ? Wr : new Uint8Array(0)
        }
      }
      memoryView(rr, Sr, Qr, Zr) {
        try {
          return (0, Nr.n)(rr, this.memory().buffer, Sr, Qr, Zr)
        } catch (Wr) {
          return this.keepCorruption(Wr), null
        }
      }
      memoryData(rr, Sr, Qr, Zr) {
        try {
          return (0, Nr.e)(this.memory().buffer, rr, Sr, Qr, Zr)
        } catch (Wr) {
          return this.keepCorruption(Wr), null
        }
      }
      scratchData(rr, Sr) {
        const Qr = this.scratch(),
          Zr = this.scratchView;
        return (null === Zr || void 0 === Zr ? void 0 : Zr.buffer) === this.memory().buffer && Zr.byteOffset === Qr && Zr.byteLength >= rr ? Zr : (this.scratchView = this.memoryData(Qr, rr, 8, Sr), this.scratchView)
      }
      reportCorruption(rr) {
        this.keepCorruption(new Nr.d(rr))
      }
      keepCorruption(rr) {
        if (!(rr instanceof Nr.d)) throw rr;
        this.corruption ??= rr
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(rr, Sr, Qr) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: Zr,
          len: Wr
        } = rr;
        this.eventsPtr = Zr, this.eventsLen = Wr, this.eventsBuffer = null;
        const ar = this.eventView();
        for (let Er = 0; Er < Wr;) {
          const rr = ar.getUint32(Er, !0),
            Qr = 65535 & rr,
            Zr = rr >>> 16,
            Wr = Er + mr.Y;
          if (Qr === Ur.m.EntitySpawned) {
            var jr;
            if (Zr !== Ur.Ab.BYTES) throw vr(Qr, Er, Zr);
            const rr = Ur.Ab.serverId(ar, Wr);
            this.spawned(rr, Ur.Ab.index(ar, Wr), Ur.Ab.kind(ar, Wr)), null === (jr = Sr.entityAdded) || void 0 === jr || jr.call(Sr, rr)
          } else if ((Qr === Ur.m.ChunkSlot || Qr === Ur.m.EntityInfoChanged) && !(0, Ur.de)(Qr, ar, Wr, Zr, Sr)) throw vr(Qr, Er, Zr);
          Er = Wr + (0, mr.Ke)(Zr)
        }
        try {
          var Ir;
          null === (Ir = Sr.afterPrescan) || void 0 === Ir || Ir.call(Sr), this.throwCorruption(), !Qr() && this.dispatch(rr, Sr, Qr) && (this.throwCorruption(), this.applyListener(), Sr.afterWalk(rr.kind)), this.throwCorruption()
        } catch (fr) {
          throw fr instanceof Nr.d && (this.corruption ??= fr), fr
        } finally {
          Qr() || null !== this.corruption || this.applyDespawns(Wr, Sr)
        }
      }
      applyDespawns(rr, Sr) {
        const Qr = this.eventView();
        for (let Wr = 0; Wr < rr;) {
          const rr = Qr.getUint32(Wr, !0),
            ar = Wr + mr.Y;
          if ((65535 & rr) === Ur.m.EntityDespawned && rr >>> 16 === Ur.Ab.BYTES) {
            const rr = Ur.Ab.serverId(Qr, ar);
            var Zr;
            if (this.despawned(rr, Ur.Ab.index(Qr, ar))) null === (Zr = Sr.entityRemoved) || void 0 === Zr || Zr.call(Sr, rr)
          }
          Wr = ar + (0, mr.Ke)(rr >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(rr, Sr, Qr) {
        const {
          len: Zr,
          net: Wr,
          netOffsets: ar
        } = rr;
        let jr = this.eventView(),
          Ir = 0;
        for (let Br = 0; Br < Zr;) {
          const rr = jr.getUint32(Br, !0),
            Zr = 65535 & rr,
            Or = rr >>> 16,
            Lr = Br + mr.Y;
          let lr = !1;
          if (Ir < Wr.length && ar[Ir] === Br) Sr.netEvent(Wr[Ir]), Ir++, lr = !0;
          else if (Zr === mr.$.LocalPlayerBound) {
            var fr;
            if (Or !== mr.Kb) throw vr(Zr, Br, Or);
            null === (fr = Sr.localPlayerBound) || void 0 === fr || fr.call(Sr, jr.getInt32(Lr, !0)), lr = !0
          } else if (Zr === mr.$.LocalHurt) {
            var Er;
            if (Or !== mr.Gb) throw vr(Zr, Br, Or);
            null === (Er = Sr.localHurt) || void 0 === Er || Er.call(Sr, jr.getInt32(Lr, !0), jr.getFloat32(Lr + 4, !0), jr.getUint32(Lr + 8, !0)), lr = !0
          } else if (Zr === mr.$.AttackHit) {
            var pr;
            if (Or !== mr.e) throw vr(Zr, Br, Or);
            const rr = jr.getFloat32(Lr, !0),
              Qr = jr.getFloat32(Lr + 4, !0),
              Wr = jr.getFloat32(Lr + 8, !0),
              ar = jr.getUint32(Lr + 12, !0);
            null === (pr = Sr.attackHit) || void 0 === pr || pr.call(Sr, rr, Qr, Wr, 0 !== (ar & mr.m.Crit), 0 !== (ar & mr.m.HitSelf))
          } else if (Zr === mr.$.PhysicsType) {
            var xr;
            if (Or !== mr.lc) throw vr(Zr, Br, Or);
            null === (xr = Sr.physicsType) || void 0 === xr || xr.call(Sr, jr.getUint32(Lr, !0), jr.getInt32(Lr + 4, !0)), lr = !0
          } else if (Zr === mr.$.VehicleEffect) {
            var Nr;
            const rr = Tr(jr, Lr, Or);
            if (null === rr) throw vr(Zr, Br, Or);
            null === (Nr = Sr.vehicleEffect) || void 0 === Nr || Nr.call(Sr, rr.op, rr.name, rr.icon, rr.level, rr.durationMs), lr = !0
          } else if (Zr === mr.$.ZoomChanged) {
            var tr;
            if (Or !== mr.se) throw vr(Zr, Br, Or);
            null === (tr = Sr.zoomChanged) || void 0 === tr || tr.call(Sr, jr.getFloat32(Lr, !0), jr.getUint8(Lr + 4)), lr = !0
          } else if (Zr === mr.$.ZoomDisabled) {
            var er;
            if (0 !== Or) throw vr(Zr, Br, Or);
            null === (er = Sr.zoomDisabled) || void 0 === er || er.call(Sr), lr = !0
          } else if (Zr === mr.$.BhopDisabled) {
            var Kr;
            if (0 !== Or) throw vr(Zr, Br, Or);
            null === (Kr = Sr.bhopDisabled) || void 0 === Kr || Kr.call(Sr), lr = !0
          } else if (Zr === mr.$.GameCamera) {
            var yr;
            null === (yr = Sr.gameCamera) || void 0 === yr || yr.call(Sr, new Uint8Array(jr.buffer, jr.byteOffset + Lr, Or).slice()), lr = !0
          } else if (Zr === Ur.m.ChunkSlot || Zr === Ur.m.EntityInfoChanged);
          else if (Zr >= hr && Zr <= zr) {
            if (this.audio && !this.audio.onAudioEvent(Zr, jr, Lr, Or)) throw vr(Zr, Br, Or)
          } else if (Zr >= Yr && Zr <= nr) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(Zr, jr, Lr, Or)) throw vr(Zr, Br, Or);
              lr = !0
            }
          } else if (Zr >= Ur.Yc && Zr <= Ur.Zc && Zr !== mr.$.EnvLighting) {
            if (!(0, Ur.de)(Zr, jr, Lr, Or, Sr)) throw vr(Zr, Br, Or);
            lr = !0
          }
          if (lr) {
            if (Qr()) return !1;
            jr = this.eventView()
          }
          Br = Lr + (0, mr.Ke)(Or)
        }
        return !Qr()
      }
      applyListener() {
        var rr;
        if (!this.audio) return;
        const Sr = Ur.p.audioViewPtr(this.apiView, 0),
          Qr = this.memory().buffer;
        let Zr = this.audioView;
        (null === (rr = Zr) || void 0 === rr ? void 0 : rr.buffer) === Qr && Zr.byteOffset === Sr || (Zr = (0, Nr.e)(Qr, Sr, Ur.t.BYTES, 8, "the audio view"), this.audioView = Zr), Zr && this.audio.applyListener(Zr)
      }
      indexOf(rr) {
        return this.indexById.get("number" === typeof rr ? rr : +rr)
      }
      isLocal(rr) {
        return rr !== Ur.Nc && rr === Ur.p.localId(this.apiView, 0)
      }
      JY(rr) {
        const Sr = [0, 0, 0];
        return this.readPosition("number" === typeof rr ? rr : +rr, Sr) ? Sr : null
      }
      readPosition(rr, Sr) {
        const Qr = this.apiView;
        if (void 0 !== this.indexById.get(rr) && this.isLocal(rr)) {
          for (let rr = 0; rr < 3; rr++) Sr[rr] = Ur.p.localPos(Qr, 0, rr);
          return !0
        }
        return this.readDrawnPosition(rr, Sr)
      }
      readDrawnPosition(rr, Sr) {
        const Qr = this.apiView,
          Zr = this.indexById.get(rr);
        if (void 0 === Zr || Zr >= this.renderCapacity) return Sr[0] = Sr[1] = Sr[2] = NaN, !1;
        const Wr = Zr * tr;
        for (let ar = 0; ar < 3; ar++) Sr[ar] = this.render[Wr + ar] + Ur.p.origin(Qr, 0, ar);
        return !0
      }
      checkValid(rr) {
        return void 0 !== this.indexOf(rr)
      }
      isAlive(rr) {
        const Sr = this.indexOf(rr);
        if (void 0 === Sr) return null;
        if (this.ensureViews(), Sr >= this.renderCapacity) return null;
        const Qr = this.vis[Sr];
        return 0 === Qr ? null : 0 !== (Qr & Ur.$d.Alive)
      }
      getEntityType(rr) {
        const Sr = this.indexOf(rr);
        return void 0 === Sr ? this.isLocal("number" === typeof rr ? rr : +rr) ? "Player" : null : yr(this.kinds[Sr])
      }
      spawned(rr, Sr, Qr) {
        if (Sr >= 1048576) throw new Nr.d(`entity ${rr} spawned at index ${Sr}`);
        this.ensureIndex(Sr), this.serverIds[Sr] === rr && null !== this.idStr[Sr] || (this.idStr[Sr] = String(rr)), this.serverIds[Sr] = rr, this.kinds[Sr] = Qr, this.indexById.set(rr, Sr)
      }
      despawned(rr, Sr) {
        let Qr = !1;
        return this.indexById.get(rr) === Sr && (this.indexById.delete(rr), Qr = !0), Sr < this.serverIds.length && this.serverIds[Sr] === rr && (this.serverIds[Sr] = Ur.Nc, this.kinds[Sr] = 0, this.idStr[Sr] = null), Qr
      }
      ensureIndex(rr) {
        const Sr = this.serverIds.length;
        if (rr < Sr) return;
        let Qr = 2 * Sr;
        for (; Qr <= rr;) Qr *= 2;
        const Zr = new Int32Array(Qr).fill(Ur.Nc);
        Zr.set(this.serverIds), this.serverIds = Zr;
        const Wr = new Uint16Array(Qr);
        Wr.set(this.kinds), this.kinds = Wr;
        for (let ar = Sr; ar < Qr; ar++) this.idStr.push(null)
      }
      eventView() {
        const rr = this.memory().buffer;
        return rr !== this.eventsBuffer && (this.eventsBuffer = rr, this.events = new DataView(rr, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const rr = this.memory().buffer;
        this.buffer = rr, this.viewPtr < 0 && (this.viewPtr = this.core.Wjr()), this.view = new DataView(rr, this.viewPtr, Ur.p.BYTES), this.rereadDirectory()
      }
    }

    function Kr(rr) {
      return rr >>> Ur.c === Ur.n.Item
    }

    function yr(rr) {
      var Sr, Qr;
      const Zr = rr & Ur.d;
      switch (rr >>> Ur.c) {
        case Ur.n.Lifeform:
          return null !== (Sr = pr.n[Zr]) && void 0 !== Sr ? Sr : null;
        case Ur.n.Throwable:
          return null !== (Qr = xr.o[Zr]) && void 0 !== Qr ? Qr : null;
        case Ur.n.Mesh:
          return "Mesh";
        case Ur.n.Audio:
          return "AudioEntity";
        case Ur.n.Item:
          return "Item";
        default:
          return null
      }
    }
    const Br = new TextDecoder;

    function Tr(rr, Sr, Qr) {
      if (Qr < mr.Sd.HEAD_BYTES) return null;
      const Zr = rr.getUint32(Sr, !0),
        Wr = rr.getUint32(Sr + 20, !0),
        ar = rr.getUint32(Sr + 24, !0),
        jr = mr.Sd.HEAD_BYTES + (0, mr.Ke)(Wr);
      if (Zr !== mr.Sd.UPDATE && Zr !== mr.Sd.REMOVE || Wr > Qr || jr + ar > Qr) return null;
      const Ir = (Qr, Zr) => Br.decode(new Uint8Array(rr.buffer, rr.byteOffset + Sr + Qr, Zr)),
        fr = rr.getFloat64(Sr + 12, !0);
      return {
        op: Zr,
        level: rr.getFloat64(Sr + 4, !0),
        durationMs: Number.isNaN(fr) ? null : fr,
        name: Ir(mr.Sd.HEAD_BYTES, Wr),
        icon: Ir(jr, ar)
      }
    }

    function vr(rr, Sr, Qr) {
      return new Nr.d(`event ${rr} at ${Sr} of ${Qr} bytes`)
    }
    var Or = Qr(7424),
      Lr = Qr(379),
      lr = Qr(1279),
      Xr = Qr(40736),
      Pr = Qr(40593),
      Hr = Qr(2103),
      qr = Qr(42880),
      Rr = Qr(2049),
      gr = Qr(38207),
      Cr = Qr(40781),
      Mr = Qr(40761),
      Gr = Qr(40748),
      kr = Qr(42485),
      Ar = Qr(3378),
      Vr = Qr(40775);

    function ir(rr) {
      if (!(0, Vr.e)(rr)) return null;
      const Sr = Number(rr);
      return (0 | Sr) === Sr ? Sr : null
    }
    class wr {
      constructor(rr) {
        this.api = rr, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Gr.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.hQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = Ur.Nc, this.localName = String(Ur.Nc)
      }
      readView() {
        this.defaultPoseRead = !1, this.hQ = null;
        const rr = this.api.queries.directorView() >= Ur.jb.BYTES ? this.api.scratchData(Ur.jb.BYTES, "the director's view") : null;
        null !== rr && (this.defaultFov = (0, Rr.B)(Ur.jb.fov(rr, 0)), this.baseFov = (0, Rr.B)(Ur.jb.baseFov(rr, 0)), this.aspect = Ur.jb.aspect(rr, 0), this.bodyHeading = Ur.jb.bodyHeading(rr, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(rr) {
        this.viewHeading = rr
      }
      get localPlayerId() {
        const rr = Ur.p.localId(this.api.apiView, 0);
        return rr !== this.localId && (this.localId = rr, this.localName = String(rr)), this.localName
      }
      getEntityPosition(rr) {
        return this.readEntity(rr) ? this.entityFeet : null
      }
      getEntityAimPoint(rr) {
        return this.readEntity(rr) ? this.entityAim : null
      }
      getEntityHeading(rr) {
        const Sr = ir(rr);
        if (null === Sr) return null;
        const Qr = Ur.p.localId(this.api.apiView, 0);
        return Sr === Qr && Qr !== Ur.Nc ? this.viewHeading : this.readEntity(rr) ? this.entityHeading : null
      }
      getEntityPitch(rr) {
        return this.readEntity(rr) ? this.entityPitch : null
      }
      getEntityLookHeading(rr) {
        return this.readEntity(rr) ? this.entityLookHeading : null
      }
      raycastTerrain(rr, Sr, Qr) {
        const Zr = this.api.queries.cameraSweep(rr[0], rr[1], rr[2], Sr[0], Sr[1], Sr[2], Qr);
        return Zr < Qr - 1e-6 ? Zr : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const rr = this.defaultPose;
        rr.fov = this.defaultFov;
        const Sr = this.api.queries.directorDefaultPose() >= Ur.fb.BYTES ? this.api.scratchData(Ur.fb.BYTES, "the director's default pose") : null;
        if (null === Sr) return rr;
        for (let Qr = 0; Qr < 3; Qr++) rr.position[Qr] = Ur.fb.eye(Sr, 0, Qr);
        return rr.heading = Ur.fb.heading(Sr, 0), rr.pitch = Ur.fb.pitch(Sr, 0), rr
      }
      getDefaultFov() {
        return this.defaultFov
      }
      getBaseFov() {
        return this.baseFov
      }
      getAspectRatio() {
        return this.aspect
      }
      readEntity(rr) {
        const Sr = ir(rr);
        if (null === Sr) return !1;
        if (Sr === this.hQ) return this.entityLive;
        this.hQ = Sr;
        const Qr = this.api.queries.directorEntity(Sr) >= Ur.gb.BYTES ? this.api.scratchData(Ur.gb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== Qr, null === Qr) return !1;
        for (let ar = 0; ar < 3; ar++) this.entityFeet[ar] = Ur.gb.feet(Qr, 0, ar), this.entityAim[ar] = this.entityFeet[ar];
        this.entityAim[1] += Ur.gb.eyeHeight(Qr, 0), this.entityHeading = Ur.gb.heading(Qr, 0);
        const Zr = Ur.gb.pitch(Qr, 0);
        this.entityPitch = Number.isNaN(Zr) ? null : Zr;
        const Wr = Ur.gb.lookHeading(Qr, 0);
        return this.entityLookHeading = Number.isNaN(Wr) ? null : Wr, !0
      }
    }
    const cr = {
        mode: "default"
      },
      Fr = {
        show: () => {},
        clear: () => {}
      };

    function or() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class br {
      constructor(rr) {
        this.options = rr, this.qx = void 0, this.director = void 0, this.latest = cr, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          xR: 0,
          yR: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = Ur.eb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Uh = new Int32Array(3 * Ur.Fd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ur.Fd), this.qx = new wr(rr.api), this.director = new Mr.b(this.qx)
      }
      settingsChanged(rr) {
        let Sr = cr;
        if (rr.length > 0) try {
          Sr = (0, kr.d)(rr)
        } catch {}
        this.latest = Sr, this.pending = Sr
      }
      call(rr, Sr, Qr, Zr, Wr, ar) {
        var jr, Ir;
        this.holding = !1;
        const fr = this.answeredPose && 0 === (Zr & Ur.hb.Held);
        let Er;
        try {
          Er = this.answer(rr, Sr, Qr, Zr, Wr, ar), this.threw = !1
        } catch (pr) {
          this.options.reportError(pr);
          Er = !this.threw && this.answeredPose && !fr ? this.sendLastPose() : Ur.eb.None, this.threw = !0
        }
        return this.answeredPose = Er !== Ur.eb.None, this.holding = this.answeredPose && !fr, null === (jr = (Ir = this.options).showFacing) || void 0 === jr || jr.call(Ir, this.holding ? this.facing : null), Er
      }
      holdsView() {
        return this.holding
      }
      answer(rr, Sr, Qr, Zr, Wr, ar) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          qx: jr
        } = this;
        jr.readView();
        if (0 !== (Zr & Ur.hb.Held) || jr.setViewHeading((0, gr.q)(jr.bodyHeading)), void 0 !== this.pending) {
          const rr = this.pending;
          this.pending = void 0, this.director.setSettings(rr), this.syncShownSettings()
        }
        this.readLook((0, Ar.f)(Sr), (0, Ar.f)(Qr), Zr, (0, Ar.f)(Wr), (0, Ar.f)(ar));
        const Ir = this.director.update(rr / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ir) return Ur.eb.None;
        const fr = this.lastPose;
        return (0, Gr.i)(Ir.position, fr.position), fr.heading = (0, gr.q)(Ir.heading), fr.pitch = (0, gr.i)(Ir.pitch), fr.fovRadians = (0, Rr.k)(Ir.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return Ur.eb.Pose;
        switch (this.facing) {
          case "camera":
            return Ur.eb.FaceCamera;
          case "cursor":
            return Ur.eb.FaceCursor;
          default:
            return Ur.eb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: rr,
          heading: Sr,
          pitch: Qr,
          fovRadians: Zr
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(rr[0], rr[1], rr[2], Sr, Qr, Zr) ? Ur.eb.None : this.lastAnswer
      }
      afterFrame(rr) {
        rr ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = cr, this.idle()
      }
      restart() {
        const rr = this.holding;
        this.idle(), this.holding = rr
      }
      idle() {
        var rr, Sr;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Mr.b(this.qx), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (rr = (Sr = this.options).showFacing) || void 0 === rr || rr.call(Sr, null), this.setCentres(0)
      }
      syncShownSettings() {
        const rr = this.director.getSettings();
        if (rr === this.shownSettings) return;
        this.shownSettings = rr;
        const Sr = (0, Cr.c)(rr);
        this.facing = Sr.facing, this.mouseTurns = Sr.mouseTurns
      }
      readLook(rr, Sr, Qr, Zr, Wr) {
        const ar = this.look,
          jr = 0 !== (Qr & Ur.hb.LookPointed);
        if (null === this.mouseTurns && !jr) return ar.xR = 0, ar.yR = 0, void(ar.pointedAt = void 0);
        let Ir;
        jr && (this.pointedAt.heading = Zr, this.pointedAt.pitch = Wr, Ir = this.pointedAt);
        const {
          qx: fr
        } = this;
        fr.setViewHeading((0, Cr.b)(fr.getViewHeading(), rr, Sr, Ir, "look" === this.mouseTurns, ar))
      }
      writeCentres(rr) {
        const Sr = this.next,
          Qr = Math.min(rr.length, Ur.Fd);
        for (let Zr = 0; Zr < Qr; Zr++)
          for (let Qr = 0; Qr < 3; Qr++) Sr[3 * Zr + Qr] = Math.floor(rr[Zr][Qr] / Ur.x);
        this.setCentres(Qr)
      }
      setCentres(rr) {
        const {
          Uh: Sr,
          next: Qr
        } = this;
        let Zr = rr === this.centresLen;
        for (let Wr = 0; Zr && Wr < 3 * rr; Wr++) Zr = Sr[Wr] === Qr[Wr];
        Zr || (Sr.fill(0), Sr.set(Qr.subarray(0, 3 * rr)), this.centresLen = rr, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const rr = this.options.cmd();
        null !== rr && (0, Ur.Ef)(rr, 0, this.Uh, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var rr, Sr, Qr;
        return null !== (rr = null === (Sr = (Qr = this.options).screen) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : Fr
      }
      hidden() {
        var rr;
        return (null !== (rr = this.options.isPageHidden) && void 0 !== rr ? rr : or)()
      }
      now() {
        var rr, Sr, Qr;
        return null !== (rr = null === (Sr = (Qr = this.options).now) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : performance.now()
      }
    }
    var Jr = Qr(40686),
      Dr = Qr(42593);
    const dr = Ur.x * Ur.x * Ur.x,
      sr = Math.log2(Ur.x),
      ur = Ur.x - 1,
      rS = 65535,
      SS = Ur.M.BYTES / 4,
      QS = new Uint16Array(dr);

    function ZS(rr, Sr, Qr) {
      return rr * Ur.x * Ur.x + Sr * Ur.x + Qr
    }
    class WS {
      constructor(rr) {
        this.chunk = rr
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(rr, Sr, Qr) {
        return ZS(rr, Sr, Qr)
      }
    }
    class aS {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class jS {
      constructor(rr, Sr, Qr, Zr) {
        this.table = rr, this.slot = Sr, this.generation = Qr, this.epoch = Zr, this.ZN = new WS(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = QS, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get rt() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get DN() {
        const rr = this.gameVoxels(),
          Sr = this.layers ??= new Uint16Array(Ur.x);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let Qr = 0; 0 !== this.staleLayers; Qr++) {
          const Zr = 1 << Qr;
          0 !== (this.staleLayers & Zr) && (this.staleLayers &= ~Zr, Sr[Qr] = IS(rr, Qr))
        }
        return Sr
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const rr = this.voxelData(),
          Sr = this.writes;
        if (null === Sr || 0 === Sr.ids.size) return rr;
        if (Sr.from !== rr) {
          const Qr = Sr.patched ??= new Uint16Array(dr);
          Qr.set(rr);
          for (const [rr, Zr] of Sr.ids) Qr[rr] = Zr;
          Sr.from = rr
        }
        return Sr.patched
      }
      written(rr) {
        var Sr;
        return null === (Sr = this.writes) || void 0 === Sr ? void 0 : Sr.ids.get(rr)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(rr, Sr, Qr) {
        const Zr = this.writes ??= new aS;
        Zr.ids.set(rr, Sr), Qr && Zr.cleared.add(rr), null !== Zr.from && (Zr.patched[rr] = Sr);
        const Wr = 1 << (rr >> sr & ur);
        Zr.layers |= Wr, this.staleLayers |= Wr, this.writeCount++
      }
      clearWrites() {
        const rr = this.writes;
        null !== rr && (this.staleLayers |= rr.layers, rr.ids.clear(), rr.cleared.clear(), rr.layers = 0, rr.from = null)
      }
      dataCleared(rr) {
        var Sr;
        return !0 === (null === (Sr = this.writes) || void 0 === Sr ? void 0 : Sr.cleared.has(rr))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const rr = this.table.slotWords(),
          Sr = this.slot * SS;
        if (this.epoch !== this.table.epoch || Sr + SS > rr.length || 0 === rr[Sr + 3] || rr[Sr + 2] !== this.generation) return this.data = QS, this.dataPtr = 0, QS;
        this.version = rr[Sr + 1];
        const Qr = rr[Sr + 0],
          Zr = rr.buffer;
        return Qr === this.dataPtr && Zr === this.dataBuffer || (this.dataPtr = Qr, this.dataBuffer = Zr, this.data = this.table.voxelsAt(Zr, Qr)), this.data
      }
    }

    function IS(rr, Sr) {
      const Qr = rr[Sr * Ur.x];
      for (let Zr = 0; Zr < Ur.x; Zr++) {
        const Wr = ZS(Zr, Sr, 0);
        for (let Sr = 0; Sr < Ur.x; Sr++)
          if (rr[Wr + Sr] !== Qr) return rS
      }
      return Qr
    }
    const fS = new Uint32Array(0);

    function ES(rr, Sr, Qr) {
      return ZS(rr & ur, Sr & ur, Qr & ur)
    }
    class pS {
      constructor(rr, Sr) {
        this.memory = rr, this.apiView = Sr, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = fS, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = fS, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(rr, Sr, Qr, Zr, Wr, ar) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, ar === Ur.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (ar !== Ur.Q.Stored && ar !== Ur.Q.Unloaded) throw new Nr.d(`ChunkSlot flags ${ar}`);
        const jr = (0, Dr.d)(rr, Sr, Qr);
        if (jr < 0) return;
        if (ar === Ur.Q.Unloaded) return void this.chunks.delete(jr);
        const Ir = this.chunks.get(jr);
        (null === Ir || void 0 === Ir ? void 0 : Ir.slot) === Zr && Ir.generation === Wr || this.chunks.set(jr, new jS(this, Zr, Wr, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const rr = this.apiView(),
          Sr = Ur.p.chunkSlotsPtr(rr, 0),
          Qr = Ur.p.chunkSlotsLen(rr, 0);
        Sr === this.slotsPtr && Qr === this.slotsLen || (this.slotsPtr = Sr, this.slotsLen = Qr, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const rr = this.apiView(),
          Sr = Ur.p.walkThroughPtr(rr, 0),
          Qr = Ur.p.walkThroughLen(rr, 0);
        Sr === this.walkPtr && Qr === this.walkLen || (this.walkPtr = Sr, this.walkLen = Qr, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const rr of this.written) rr.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const rr = this.memory().buffer;
        var Sr;
        rr !== this.slotsBuffer && (this.slotsBuffer = rr, this.slots = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.slotsPtr, this.slotsLen * SS, "the chunk directory")) && void 0 !== Sr ? Sr : fS);
        return this.slots
      }
      voxelsAt(rr, Sr) {
        try {
          var Qr;
          return null !== (Qr = (0, Nr.n)(Uint16Array, rr, Sr, dr, "a chunk's voxels")) && void 0 !== Qr ? Qr : QS
        } catch (Zr) {
          if (!(Zr instanceof Nr.d)) throw Zr;
          return this.corruption ??= Zr, QS
        }
      }
      chunk(rr, Sr, Qr) {
        var Zr;
        return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
      }
      isLoaded(rr, Sr, Qr) {
        return void 0 !== this.chunkAt(Math.floor(rr), Math.floor(Sr), Math.floor(Qr))
      }
      aI(rr, Sr, Qr) {
        var Zr;
        const Wr = Math.floor(rr),
          ar = Math.floor(Sr),
          jr = Math.floor(Qr),
          Ir = this.chunkAt(Wr, ar, jr);
        if (!Ir) return 0;
        const fr = ES(Wr, ar, jr);
        return null !== (Zr = Ir.written(fr)) && void 0 !== Zr ? Zr : Ir.voxelData()[fr]
      }
      setOverlay(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ar = this.chunkAt(rr, Sr, Qr);
        return !!ar && (ar.hasWrites() || this.written.push(ar), ar.write(ES(rr, Sr, Qr), Zr, Wr), !0)
      }
      version(rr, Sr, Qr) {
        var Zr, Wr;
        return null !== (Zr = null === (Wr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) || void 0 === Wr ? void 0 : Wr.rt) && void 0 !== Zr ? Zr : null
      }
      scan(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = Ur.x;
        let Er = 0;
        for (let pr = Math.floor(Sr / fr); pr * fr < Wr; pr++) {
          const xr = pr * fr,
            mr = Math.min(Wr - xr, fr);
          for (let Wr = Math.floor(rr / fr); Wr * fr < Zr; Wr++) {
            const Nr = Wr * fr,
              Ur = Math.min(Zr - Nr, fr);
            for (let Zr = Math.floor(Qr / fr); Zr * fr < ar; Zr++) {
              const tr = this.chunks.get((0, Dr.d)(Wr, pr, Zr));
              if (!tr) continue;
              const hr = Zr * fr,
                zr = Math.max(Qr - hr, 0),
                Yr = Math.min(ar - hr, fr),
                nr = tr.DN,
                er = tr.gameVoxels();
              for (let Qr = Math.max(Sr - xr, 0); Qr < mr; Qr++) {
                const Sr = nr[Qr];
                if (Sr === rS || 0 !== jr[Sr]) {
                  Er++;
                  for (let Sr = Math.max(rr - Nr, 0); Sr < Ur; Sr++) {
                    const rr = ZS(Sr, Qr, 0);
                    for (let Zr = zr; Zr < Yr; Zr++) {
                      const Wr = er[rr + Zr];
                      0 !== jr[Wr] && Ir.push(Nr + Sr, xr + Qr, hr + Zr, Wr)
                    }
                  }
                }
              }
            }
          }
        }
        return Er
      }
      columnTops(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        (0, Jr.d)(((rr, Sr, Qr) => {
          var Zr;
          return null !== (Zr = this.chunks.get((0, Dr.d)(rr, Sr, Qr))) && void 0 !== Zr ? Zr : null
        }), rS, rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr)
      }
      dataCleared(rr, Sr, Qr) {
        var Zr;
        const Wr = Math.floor(rr),
          ar = Math.floor(Sr),
          jr = Math.floor(Qr);
        return !0 === (null === (Zr = this.chunkAt(Wr, ar, jr)) || void 0 === Zr ? void 0 : Zr.dataCleared(ES(Wr, ar, jr)))
      }
      isWalkThrough(rr) {
        if (!Number.isInteger(rr) || rr < 0 || rr > 65535) return !1;
        const Sr = this.walkWords(),
          Qr = rr >>> 5;
        return Qr < Sr.length && 1 === (Sr[Qr] >>> (31 & rr) & 1)
      }
      walkWords() {
        const rr = this.memory().buffer;
        var Sr;
        rr !== this.walkBuffer && (this.walkBuffer = rr, this.walk = null !== (Sr = (0, Nr.n)(Uint32Array, rr, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Sr ? Sr : fS);
        return this.walk
      }
      chunkAt(rr, Sr, Qr) {
        if ((0 | rr) !== rr || (0 | Sr) !== Sr || (0 | Qr) !== Qr) return;
        const Zr = (0, Dr.d)(rr >> sr, Sr >> sr, Qr >> sr);
        return Zr !== this.lastKey && (this.lastKey = Zr, this.lastChunk = this.chunks.get(Zr)), this.lastChunk
      }
    }
    var xS = Qr(40031),
      mS = Qr(39311),
      NS = Qr(39711),
      US = Qr(37924),
      tS = Qr(38191),
      hS = Qr(35416),
      zS = Qr(40694),
      YS = Qr(208);
    const nS = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      eS = [
        ["ZombieGrunt1", 33],
        ["ZombieGrunt2", 33],
        ["ZombieGrunt3", 33],
        ["ZombieHurt1", 33],
        ["ZombieHurt2", 33],
        ["ZombieHurt3", 33],
        ["ZombieHurt4", 33],
        ["bass", 34],
        ["bassattack", 34],
        ["bd", 34],
        ["bearRoar1", 14],
        ["bearRoar2", 14],
        ["bearRoar3", 14],
        ["bearRoar4", 14],
        ["bearRoar5", 14],
        ["beep", 37],
        ["bigDrumSwish1", 34],
        ["bigDrumSwish2", 34],
        ["bigDrumSwish3", 34],
        ["bow", 44],
        ["bucketEmpty1", 44],
        ["bucketEmpty2", 44],
        ["bucketEmpty3", 44],
        ["bucketFill1", 44],
        ["bucketFill2", 44],
        ["bucketFill3", 44],
        ["bullet_shell_bounce_general_07", 8],
        ["bullet_shell_bounce_general_08", 8],
        ["burp", 44],
        ["cameraShutter", 35],
        ["cannonFire1", 38],
        ["cannonFire2", 38],
        ["cannonFire3", 38],
        ["carCrash", 1],
        ["carDoorClose", 1],
        ["carDoorOpen", 1],
        ["carDriveLoop", 1],
        ["carEngineStart", 1],
        ["carHorn", 1],
        ["carIdleLoop", 1],
        ["carLockChirp", 1],
        ["cashRegister", 39],
        ["catHiss1", 15],
        ["catHiss2", 15],
        ["catHiss3", 15],
        ["catHiss4", 15],
        ["catHurt1", 15],
        ["catHurt2", 15],
        ["catHurt3", 15],
        ["catMeow1", 15],
        ["catMeow2", 15],
        ["catMeow3", 15],
        ["catMeow4", 15],
        ["catMeow5", 15],
        ["caughtFish", 6],
        ["chestClose", 44],
        ["chestOpen", 44],
        ["cloth1", 4],
        ["cloth2", 4],
        ["cloth3", 4],
        ["cloth4", 4],
        ["coinsDrop", 35],
        ["cowHurt1", 16],
        ["cowMoo1", 16],
        ["cowMoo2", 16],
        ["cowMoo3", 16],
        ["croneAttack1", 17],
        ["croneHurt1", 17],
        ["croneIdle1", 17],
        ["crowdAmbience", 2],
        ["crowdCheer", 2],
        ["crowdMurmur", 51],
        ["cryptWhoosh", 3],
        ["deerGrunt1", 18],
        ["deerHurt1", 18],
        ["dogBark1", 19],
        ["dogBark2", 19],
        ["dogBark3", 19],
        ["dogGrowl1", 19],
        ["dogGrowl2", 19],
        ["dogGrowl3", 19],
        ["dogHurt1", 19],
        ["dogHurt2", 19],
        ["doorClose", 44],
        ["doorClose2", 44],
        ["doorKnock", 3],
        ["doorOpen-bloxd1", 44],
        ["doorOpen-bloxd2", 44],
        ["doorbell", 51],
        ["drink", 44],
        ["drumSwish1", 34],
        ["drumSwish2", 34],
        ["eat1", 44],
        ["equip_leather1", 44],
        ["exp_collect", 40],
        ["exp_levelup", 40],
        ["extinguisherSpray", 5],
        ["fallsmall", 41],
        ["fennecYip1", 20],
        ["fennecYip2", 20],
        ["fennecYip3", 20],
        ["fireAlarmBell", 5],
        ["fireBurn", 42],
        ["fireCrackle", 5],
        ["fireTruckHorn", 5],
        ["firecracker1", 43],
        ["firecracker2", 43],
        ["firecracker3", 43],
        ["firecracker4", 43],
        ["futureStrangePulse", 3],
        ["game_start_countdown_01", 7],
        ["game_start_countdown_02", 7],
        ["game_start_countdown_03", 7],
        ["game_start_countdown_final", 7],
        ["gateCreak", 51],
        ["glass1", 4],
        ["glass2", 4],
        ["glass3", 4],
        ["golemGrunt1", 21],
        ["golemGrunt2", 21],
        ["gorillaIdle1", 22],
        ["gorillaIdle2", 22],
        ["gorillaIdle3", 22],
        ["gorillaIdle4", 22],
        ["gorillaRoar1", 22],
        ["grass1", 4],
        ["grass2", 4],
        ["grass3", 4],
        ["grass4", 4],
        ["gravel1", 4],
        ["gravel2", 4],
        ["gravel3", 4],
        ["gravel4", 4],
        ["handcuffsLock", 36],
        ["harp_pling", 34],
        ["hat", 34],
        ["hauntedHorrorImpact", 3],
        ["headshot_04", 8],
        ["headshot_06", 8],
        ["headshot_08", 8],
        ["headshot_11", 8],
        ["hit1", 49],
        ["hit2", 49],
        ["hit3", 49],
        ["hoeTill1", 44],
        ["hoeTill2", 44],
        ["hoeTill3", 44],
        ["hoeTill4", 44],
        ["horrorAccent1", 3],
        ["horrorFright", 3],
        ["horrorMaleDrone", 3],
        ["horseHurt1", 23],
        ["horseHurt2", 23],
        ["horseIdle1", 23],
        ["horseIdle2", 23],
        ["horseIdle3", 23],
        ["indicatorTick", 1],
        ["intensiveRainLoop", 3],
        ["jobComplete", 35],
        ["keysJingle", 51],
        ["kidsPlaying", 51],
        ["knightGrunt1", 24],
        ["knightGrunt2", 24],
        ["knightGrunt3", 24],
        ["laugh1", 45],
        ["laugh2", 45],
        ["laugh3", 45],
        ["lavaFlow", 0],
        ["levelup", 34],
        ["lowDrum1", 34],
        ["lowDrum2", 34],
        ["lowDrum3", 34],
        ["magicAccent1", 46],
        ["magicAccent2", 46],
        ["magicAccent3", 46],
        ["magicAccent4", 46],
        ["messageReceive", 35],
        ["metalDoorKnock", 3],
        ["ominousBellHit", 3],
        ["parkBirds", 51],
        ["phoneNotify", 35],
        ["phoneTap", 35],
        ["phoneVibrate", 35],
        ["pickUp", 4],
        ["pigHurt1", 25],
        ["pigHurt2", 25],
        ["pigHurt3", 25],
        ["pigOink1", 25],
        ["pigOink2", 25],
        ["pigOink3", 25],
        ["pigOink4", 25],
        ["pigOink5", 25],
        ["pistol_cock_01", 9],
        ["pistol_cock_02", 9],
        ["pistol_cock_03", 9],
        ["pistol_cock_06", 9],
        ["pistol_magazine_load_01", 9],
        ["pistol_magazine_load_02", 9],
        ["pistol_magazine_load_03", 9],
        ["pistol_magazine_unload_01", 9],
        ["pistol_magazine_unload_02", 9],
        ["pistol_magazine_unload_03", 9],
        ["pistol_shot_01", 9],
        ["pistol_shot_02", 9],
        ["pistol_shot_03", 9],
        ["pistol_shot_04", 9],
        ["pistol_shot_05", 9],
        ["pulseFromTheDark", 3],
        ["radioBeep", 36],
        ["radioChatter", 36],
        ["reaverAttack1", 26],
        ["reaverAttack2", 26],
        ["reaverAttack3", 26],
        ["reaverGrunt1", 26],
        ["reaverGrunt2", 26],
        ["reaverGrunt3", 26],
        ["reel", 6],
        ["refereeWhistle", 2],
        ["reverseBeep", 1],
        ["rifle_cock_01", 10],
        ["rifle_cock_02", 10],
        ["rifle_magazine_load_01", 10],
        ["rifle_magazine_load_02", 10],
        ["rifle_magazine_load_03", 10],
        ["rifle_magazine_unload_01", 10],
        ["rifle_magazine_unload_02", 10],
        ["rifle_magazine_unload_04", 10],
        ["rifle_shot_01", 10],
        ["rifle_shot_02", 10],
        ["rifle_shot_03", 10],
        ["rifle_shot_04", 10],
        ["rocketEngineLoop", 50],
        ["rpgBeltCloth1", 48],
        ["rpgBeltCloth2", 48],
        ["rpgBeltHandle1", 48],
        ["rpgBeltHandle2", 48],
        ["rpgBookClose", 48],
        ["rpgBookFlip1", 48],
        ["rpgBookFlip2", 48],
        ["rpgBookFlip3", 48],
        ["rpgBookOpen", 48],
        ["rpgBookPlace1", 48],
        ["rpgBookPlace2", 48],
        ["rpgBookPlace3", 48],
        ["rpgChop", 48],
        ["rpgCloth1", 48],
        ["rpgCloth2", 48],
        ["rpgCloth3", 48],
        ["rpgCloth4", 48],
        ["rpgCreak1", 48],
        ["rpgCreak2", 48],
        ["rpgCreak3", 48],
        ["rpgDoorClose1", 48],
        ["rpgDoorClose2", 48],
        ["rpgDoorClose3", 48],
        ["rpgDoorClose4", 48],
        ["rpgDoorOpen1", 48],
        ["rpgDoorOpen2", 48],
        ["rpgDrawKnife1", 48],
        ["rpgDrawKnife2", 48],
        ["rpgDrawKnife3", 48],
        ["rpgDropLeather", 48],
        ["rpgFootstep00", 48],
        ["rpgFootstep01", 48],
        ["rpgFootstep02", 48],
        ["rpgFootstep03", 48],
        ["rpgFootstep04", 48],
        ["rpgFootstep05", 48],
        ["rpgFootstep06", 48],
        ["rpgFootstep07", 48],
        ["rpgFootstep08", 48],
        ["rpgFootstep09", 48],
        ["rpgHandleCoins1", 48],
        ["rpgHandleCoins2", 48],
        ["rpgHandleSmallLeather1", 48],
        ["rpgHandleSmallLeather2", 48],
        ["rpgKnifeSlice1", 48],
        ["rpgKnifeSlice2", 48],
        ["rpgMetalClick", 48],
        ["rpgMetalLatch", 48],
        ["rpgMetalPot1", 48],
        ["rpgMetalPot2", 48],
        ["rpgMetalPot3", 48],
        ["runningSteps", 36],
        ["sand1", 4],
        ["sand2", 4],
        ["sand3", 4],
        ["sand4", 4],
        ["seatbeltClick", 1],
        ["semiAuto_cock_01", 11],
        ["semiAuto_cock_02", 11],
        ["semiAuto_cock_03", 11],
        ["semiAuto_cock_04", 11],
        ["semiAuto_cock_05", 11],
        ["semiAuto_first_shot_01", 11],
        ["semiAuto_magazine_load_01", 11],
        ["semiAuto_magazine_load_02", 11],
        ["semiAuto_magazine_load_03", 11],
        ["semiAuto_magazine_load_04", 11],
        ["semiAuto_magazine_load_05", 11],
        ["semiAuto_magazine_unload_01", 11],
        ["semiAuto_magazine_unload_02", 11],
        ["semiAuto_magazine_unload_03", 11],
        ["semiAuto_magazine_unload_04", 11],
        ["semiAuto_shot_01", 11],
        ["semiAuto_shot_02", 11],
        ["semiAuto_shot_03", 11],
        ["semiAuto_shot_04", 11],
        ["semiAuto_shot_05", 11],
        ["semiAuto_shot_06", 11],
        ["semiAuto_shot_07", 11],
        ["semiAuto_shot_08", 11],
        ["semiAuto_tail_only_shot_01", 11],
        ["sheepBaa1", 27],
        ["sheepBaa2", 27],
        ["sheepBaa3", 27],
        ["sheepBaa4", 27],
        ["sheepHurt1", 27],
        ["shopDoorbell", 51],
        ["shotgun_cock_01", 12],
        ["shotgun_cock_02", 12],
        ["shotgun_cock_03", 12],
        ["shotgun_cock_04", 12],
        ["shotgun_cock_05", 12],
        ["shotgun_load_bullet_01", 12],
        ["shotgun_load_bullet_02", 12],
        ["shotgun_load_bullet_03", 12],
        ["shotgun_load_bullet_04", 12],
        ["shotgun_load_bullet_05", 12],
        ["shotgun_load_bullet_06", 12],
        ["shotgun_load_bullet_07", 12],
        ["shotgun_load_bullet_08", 12],
        ["shotgun_shot_01", 12],
        ["shotgun_shot_02", 12],
        ["shotgun_shot_03", 12],
        ["shotgun_shot_04", 12],
        ["sirenChirp", 36],
        ["sirenWail", 36],
        ["sirenYelp", 36],
        ["skeletonRattle1", 28],
        ["skeletonRattle2", 28],
        ["skeletonRattle3", 28],
        ["skeletonRattle4", 28],
        ["snare", 34],
        ["snow1", 4],
        ["snow2", 4],
        ["snow3", 4],
        ["snow4", 4],
        ["sonarBeep", 34],
        ["splash1", 47],
        ["stagGrunt1", 29],
        ["stagHurt1", 29],
        ["stalkerAttack1", 30],
        ["stalkerIdle1", 30],
        ["step_cloth1", 49],
        ["step_cloth2", 49],
        ["step_cloth3", 49],
        ["step_cloth4", 49],
        ["step_grass1", 49],
        ["step_grass2", 49],
        ["step_grass3", 49],
        ["step_grass4", 49],
        ["step_grass5", 49],
        ["step_gravel1", 49],
        ["step_gravel2", 49],
        ["step_gravel3", 49],
        ["step_gravel4", 49],
        ["step_sand2", 49],
        ["step_sand3", 49],
        ["step_sand4", 49],
        ["step_sand5", 49],
        ["step_snow1", 49],
        ["step_snow2", 49],
        ["step_snow3", 49],
        ["step_snow4", 49],
        ["step_stone1", 49],
        ["step_stone2", 49],
        ["step_stone3", 49],
        ["step_stone4", 49],
        ["step_stone5", 49],
        ["step_stone6", 49],
        ["step_wood1", 49],
        ["step_wood2", 49],
        ["step_wood3", 49],
        ["step_wood4", 49],
        ["step_wood5", 49],
        ["step_wood6", 49],
        ["stone1", 4],
        ["stone2", 4],
        ["stone3", 4],
        ["stone4", 4],
        ["stunZap", 36],
        ["submachine_cock_01", 13],
        ["submachine_cock_02", 13],
        ["submachine_cock_03", 13],
        ["submachine_cock_04", 13],
        ["submachine_first_shot_01", 13],
        ["submachine_magazine_load_01", 13],
        ["submachine_magazine_load_02", 13],
        ["submachine_magazine_load_03", 13],
        ["submachine_magazine_load_04", 13],
        ["submachine_magazine_unload_01", 13],
        ["submachine_magazine_unload_02", 13],
        ["submachine_magazine_unload_03", 13],
        ["submachine_shot_01", 13],
        ["submachine_shot_02", 13],
        ["submachine_shot_03", 13],
        ["submachine_shot_04", 13],
        ["submachine_shot_05", 13],
        ["submachine_shot_06", 13],
        ["submachine_shot_07", 13],
        ["submachine_shot_08", 13],
        ["submachine_shot_09", 13],
        ["submachine_tail_only_shot_01", 13],
        ["successfulBowHit", 44],
        ["suspenseRiser", 3],
        ["sweep6", 49],
        ["thunderRain", 3],
        ["tillPurchase", 35],
        ["trapdoorOpen", 44],
        ["trumpetFlare", 34],
        ["trumpetNote1", 34],
        ["trumpetNote2", 34],
        ["trumpetNote3", 34],
        ["tyreScreech", 1],
        ["vanIdleLoop", 1],
        ["warperGrunt1", 31],
        ["warperGrunt2", 31],
        ["warperGrunt3", 31],
        ["warperGrunt4", 31],
        ["warperGrunt5", 31],
        ["warperPhase1", 31],
        ["warperPhase2", 31],
        ["whistle", 36],
        ["wood1", 4],
        ["wood2", 4],
        ["wood3", 4],
        ["wood4", 4],
        ["wraithGrunt1", 32],
        ["wraithGrunt2", 32],
        ["wraithHurt", 32],
        ["zapAccent1", 3],
        ["zapAccent2", 3]
      ],
      KS = eS.map((rr => {
        let [Sr] = rr;
        return Sr
      })),
      yS = Uint8Array.from(eS, (rr => {
        let [, Sr] = rr;
        return Sr
      })),
      BS = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      TS = 8,
      vS = [
        [20, 3],
        [23, 3],
        [26, 2],
        [30, 3],
        [57, 4],
        [83, 2],
        [86, 2],
        [115, 3],
        [125, 4],
        [129, 4],
        [137, 4],
        [192, 4],
        [196, 3],
        [199, 3],
        [202, 5],
        [219, 2],
        [221, 3],
        [224, 3],
        [227, 4],
        [284, 4],
        [289, 5],
        [295, 5],
        [300, 4],
        [304, 8],
        [319, 5],
        [324, 8],
        [332, 4],
        [344, 4],
        [354, 4],
        [358, 5],
        [363, 4],
        [367, 4],
        [371, 4],
        [375, 6],
        [381, 6],
        [387, 4],
        [392, 4],
        [397, 4],
        [401, 3],
        [404, 9],
        [434, 4]
      ];
    var OS = Qr(37853),
      LS = Qr(37884),
      lS = Qr(37915),
      XS = Qr(37875),
      PS = Qr(272);
    class HS {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PS.c;
        this.sound = rr, this.onError = Sr, this.idle = Qr, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = rr => {
          this.cancelIdle = null;
          try {
            if (rr.timeRemaining() >= 1) {
              let rr = this.queue.shift();
              for (; void 0 !== rr && !this.load(rr);) rr = this.queue.shift()
            }
          } catch (Sr) {
            this.onError(Sr)
          } finally {
            this.schedule()
          }
        }
      }
      preload(rr) {
        const Sr = [...rr].sort(((rr, Sr) => rr - Sr));
        for (const Qr of Sr) this.asked.has(Qr) || (this.asked.add(Qr), this.queue.push(Qr));
        this.schedule()
      }
      cancel() {
        var rr;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (rr = this.cancelIdle) || void 0 === rr || rr.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(rr) {
        const Sr = this.sound(rr, !1),
          Qr = this.sound(rr, !0),
          [Zr, Wr] = "unloaded" === Sr.state() && "unloaded" !== Qr.state() ? [Qr, Sr] : [Sr, Qr],
          ar = this.gen,
          jr = () => {
            try {
              ar === this.gen && "unloaded" === Wr.state() && Wr.load()
            } catch (rr) {
              this.onError(rr)
            }
          },
          Ir = Zr.state();
        return "unloaded" === Ir ? (Zr.once("load", jr), Zr.load(), !0) : "unloaded" === Wr.state() && ("loading" === Ir ? (Zr.once("load", jr), !1) : (Wr.load(), !0))
      }
    }
    var qS = Qr(42756);

    function RS(rr) {
      var Sr;
      const Qr = function(rr) {
        let Sr = 0,
          Qr = KS.length;
        for (; Sr < Qr;) {
          const Zr = Sr + Qr >>> 1;
          KS[Zr] < rr ? Sr = Zr + 1 : Qr = Zr
        }
        return Sr
      }(rr);
      if ("" === rr || null === (Sr = KS[Qr]) || void 0 === Sr || !Sr.startsWith(rr)) return null;
      if (KS[Qr] === rr) return [Qr, 1];
      let Zr = Qr + 1;
      for (; Zr < KS.length && KS[Zr].startsWith(rr);) Zr++;
      return [Qr, Zr - Qr]
    }

    function gS(rr) {
      let [Sr, Qr] = rr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === Qr ? Sr : Sr + Math.floor(Zr() * Qr)
    }

    function CS(rr) {
      for (const Sr of vS)
        if (Sr[0] <= rr && rr < Sr[0] + Sr[1]) return Sr;
      return null
    }

    function MS(rr) {
      const Sr = [];
      for (let Qr = 0; Qr < yS.length; Qr++) yS[Qr] === rr && Sr.push(Qr);
      return Sr
    }
    const GS = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      kS = YS.i.Uz * YS.i.playerEyeToHeightRatio,
      AS = [0, 0, -1, 0, 1, 0],
      VS = nS.indexOf("note");

    function iS(rr) {
      return rr >= 0 ? Math.min(1, rr) : 0
    }
    class wS {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.group = rr, this.loudness = Sr, this.startMs = Qr, this.howl = Zr, this.host = Wr, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const rr = this.host.alive(this.id);
        return rr ? 1e3 * this.howl.duration(this.id) / rr.rate : 0
      }
      isAlive() {
        return void 0 !== this.host.alive(this.id)
      }
      canStop() {
        return this.isAlive() && (this.direct || this.host.started(this.id)) && this.howl.playing(this.id) && !this.howl._playLock
      }
      stop() {
        this.host.drop(this.id)
      }
    }
    class cS {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = rr, this.listener = Sr, this.now = Qr, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new XS.d, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: rr => this.aliveVoice(rr),
          started: rr => this.started.has(rr),
          drop: rr => {
            var Sr;
            null === (Sr = this.live.get(rr)) || void 0 === Sr || Sr.howl.stop(rr), this.forget(rr)
          }
        }, this.handlers = {
          playSound: (rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) => {
            if (Zr >= KS.length) return;
            const Er = 0 !== (Wr & Ur.Td.Loop);
            Wr & Ur.Td.TwoD ? this.start(Zr, !1, jr, ar, Ir, Er, CS(Zr)) : this.startSpatial(Zr, jr, ar, Ir, Er, rr, Sr, Qr, fr, this.earDistSq(rr, Sr, Qr), CS(Zr))
          },
          soundPos: (rr, Sr, Qr, Zr) => {
            const Wr = this.core.get(Zr);
            var ar;
            void 0 !== Wr && (null === (ar = this.live.get(Wr)) || void 0 === ar || ar.howl.pos(Qr, Sr, rr, Wr))
          },
          soundSet: (rr, Sr, Qr, Zr) => {
            const Wr = this.core.get(rr),
              ar = void 0 === Wr ? void 0 : this.live.get(Wr);
            void 0 !== Wr && ar && (this.setRel(Wr, Sr), ar.rate = Qr, ar.howl.rate(Qr, Wr), ar.spatial && ar.howl.pannerAttr({
              refDistance: Zr
            }, Wr))
          },
          soundFade: (rr, Sr, Qr, Zr) => {
            const Wr = this.core.get(rr);
            void 0 !== Wr && this.fade(Wr, Sr, Qr, 0 !== (Zr & Ur.Qd.StopAfter))
          },
          soundStop: rr => {
            const Sr = this.core.get(rr);
            var Qr;
            void 0 !== Sr && (null === (Qr = this.live.get(Sr)) || void 0 === Qr || Qr.howl.stop(Sr), this.forget(Sr))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new HS(((rr, Sr) => this.howl(rr, Sr)), (rr => {
          this.errors++, console.error("Audio preload failed", rr)
        }), Zr)
      }
      preload(rr) {
        this.loader.preload(rr)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let rr = 0; rr < KS.length; rr++) {
          if (LS.b.has(nS[yS[rr]])) continue;
          const Sr = [];
          for (const Qr of [!1, !0]) {
            const Zr = FS(rr, Qr),
              Wr = this.howls.get(Zr);
            void 0 !== Wr && "loading" !== Wr.state() && Sr.push({
              key: Zr,
              howl: Wr
            })
          }
          if (Sr.some((rr => {
              let {
                howl: Sr
              } = rr;
              return "loaded" === Sr.state()
            })))
            for (const {
                key: rr,
                howl: Qr
              }
              of Sr) this.howls.delete(rr), "loaded" === Qr.state() ? (0, OS.g)(Qr) : Qr.unload()
        }
      }
      onAudioEvent(rr, Sr, Qr, Zr) {
        if (rr < Ur.m.PlaySound || rr > Ur.m.SoundReset) return !1;
        try {
          return (0, Ur.de)(rr, Sr, Qr, Zr, this.handlers)
        } catch (Wr) {
          return this.errors++, console.error("Audio event failed", Wr), !0
        }
      }
      applyListener(rr) {
        const Sr = this.nextPose;
        for (let Zr = 0; Zr < 3; Zr++) Sr[2 - Zr] = Ur.t.listener(rr, 0, Zr), Sr[5 - Zr] = Ur.t.forward(rr, 0, Zr), Sr[8 - Zr] = Ur.t.up(rr, 0, Zr);
        0 === Sr[3] && 0 === Sr[4] && 0 === Sr[5] && Sr.set(this.posed ? this.pose.subarray(3) : AS, 3);
        for (let Zr = 0; Zr < 9; Zr++)
          if (!Number.isFinite(Sr[Zr])) return;
        const Qr = this.pose;
        if (this.posed) {
          let rr = !0;
          for (let Zr = 0; Zr < 9 && rr; Zr++) rr = Sr[Zr] === Qr[Zr];
          if (rr) return
        }
        this.listener.apply(Sr) && (Qr.set(Sr), this.posed = !0)
      }
      playGame(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = RS(rr);
        if (null === Ir) return qS.e;
        const fr = gS(Ir),
          Er = Ir[1] > 1 ? Ir : null;
        if (!Qr) {
          const {
            howl: rr,
            id: Qr
          } = this.start(fr, !1, Sr, 0, 1, jr, Er);
          return this.gameSound(rr, Qr, !1)
        }
        const pr = Qr[0],
          xr = Qr[1] + kS,
          mr = Qr[2];
        if (!Number.isFinite(pr) || !Number.isFinite(xr) || !Number.isFinite(mr)) return qS.e;
        let Nr;
        if (Zr) {
          const rr = pr - Zr[0],
            Sr = xr - Zr[1],
            Qr = mr - Zr[2];
          if (Nr = rr * rr + Sr * Sr + Qr * Qr, Nr > Wr * Wr) return qS.e
        } else Nr = this.earDistSq(pr, xr, mr);
        const Ur = this.startSpatial(fr, Sr, 0, 1, jr, pr, xr, mr, ar, Nr, Er);
        return Ur ? this.gameSound(Ur.howl, Ur.id, !0) : qS.e
      }
      setMaster(rr, Sr) {
        this.level = iS(rr);
        const Qr = Sr ? this.level : 0;
        if (Qr !== this.master) {
          this.master = Qr;
          for (const [rr, Sr] of this.live) Sr.fadeMs = 0, Sr.gain = Sr.rel * this.master, Sr.howl.volume(Sr.gain, rr)
        }
      }
      stopCore() {
        for (const Sr of [...this.core.values()]) {
          var rr;
          null === (rr = this.live.get(Sr)) || void 0 === rr || rr.howl.stop(Sr)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [rr, Sr] of [...this.live]) Sr.howl.stop(rr), this.forget(rr);
        this.core.clear()
      }
      gameSound(rr, Sr, Qr) {
        const Zr = {
          stop: () => (this.live.has(Sr) && rr.stop(Sr), Zr),
          fade: (rr, Qr, Wr) => {
            var ar, jr;
            const Ir = this.level > 0 ? Qr / this.level : Qr > 0 && null !== (ar = null === (jr = this.live.get(Sr)) || void 0 === jr ? void 0 : jr.rel) && void 0 !== ar ? ar : 0;
            return this.fade(Sr, Ir, Wr, !1), Zr
          },
          rate: Qr => {
            const Wr = this.live.get(Sr);
            return Wr && (Wr.rate = function(rr) {
              return rr > 0 && rr < 1 / 0 ? rr : 1
            }(Qr), rr.rate(Wr.rate, Sr)), Zr
          },
          getVolume: () => {
            var rr, Qr;
            return (null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0) * this.level
          },
          getRelativeVolume: () => {
            var rr, Qr;
            return null !== (rr = null === (Qr = this.live.get(Sr)) || void 0 === Qr ? void 0 : Qr.rel) && void 0 !== rr ? rr : 0
          },
          setRelativeVolume: rr => (this.setRel(Sr, rr), Zr),
          setPannerAttr: Wr => {
            if (Qr && this.live.has(Sr)) {
              const Qr = {
                ...GS,
                refDistance: US.h
              };
              for (const [rr, Sr] of Object.entries(Wr)) "number" !== typeof Sr && "string" !== typeof Sr || (Qr[rr] = Sr);
              rr.pannerAttr({
                coneOuterAngle: Qr.coneOuterAngle
              }, Sr), rr.pannerAttr(Qr, Sr)
            }
            return Zr
          },
          setPosition: Wr => (Qr && this.live.has(Sr) && Number.isFinite(Wr[0] + Wr[1] + Wr[2]) && rr.pos(Wr[2], Wr[1], Wr[0], Sr), Zr)
        };
        return Zr
      }
      startSpatial(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        const xr = this.howl(rr, !0);
        let mr = null;
        if (!Wr) {
          if (this.failed.has(xr)) return null;
          const Qr = yS[rr] === VS ? null : (0, XS.l)(KS[rr]),
            Zr = (0, XS.h)(iS(Sr), Math.sqrt(Er), fr);
          if (mr = new wS(Qr, Zr, this.now(), xr, this.voiceHost), !this.voices.admit(mr)) return null
        }
        const Nr = this.start(rr, !0, Sr, Qr, Zr, Wr, pr);
        return mr && (mr.id = Nr.id, mr.direct = "loaded" === xr.state() && !xr._playLock), xr.pannerAttr({
          coneOuterAngle: 360
        }, Nr.id), xr.pannerAttr({
          ...GS,
          refDistance: fr
        }, Nr.id), xr.pos(Ir, jr, ar, Nr.id), !Wr && this.posed && (0, lS.l)() && (0, lS.i)(nS[yS[rr]], KS[rr], ar - this.pose[2], Ir - this.pose[0]), Nr
      }
      aliveVoice(rr) {
        const Sr = this.live.get(rr);
        if (!Sr) return;
        const Qr = Sr.howl._soundById(rr);
        if (Qr && !Qr._ended) return Sr;
        this.forget(rr)
      }
      earDistSq(rr, Sr, Qr) {
        if (!this.posed) return 0;
        const Zr = rr - this.pose[2],
          Wr = Sr - this.pose[1],
          ar = Qr - this.pose[0];
        return Zr * Zr + Wr * Wr + ar * ar
      }
      start(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = iS(Qr),
          fr = this.howl(rr, Sr);
        "unloaded" === fr.state() && (fr.load(), null !== jr && this.loadPick(jr, Sr));
        const Er = fr.play(OS.e),
          pr = Ir * this.master;
        return fr.volume(pr, Er), this.live.set(Er, {
          howl: fr,
          rel: Ir,
          gain: pr,
          fadeFrom: pr,
          fadeAt: 0,
          fadeMs: 0,
          rate: Wr,
          handle: Zr,
          spatial: Sr,
          stopTimer: void 0
        }), 0 !== Zr && this.core.set(Zr, Er), 1 !== Wr && fr.rate(Wr, Er), ar && fr.loop(!0, Er), {
          howl: fr,
          id: Er
        }
      }
      loadPick(rr, Sr) {
        let [Qr, Zr] = rr;
        for (let ar = Qr; ar < Qr + Zr; ar++) {
          var Wr;
          const rr = this.howl(ar, Sr);
          "unloaded" === rr.state() && "loading" !== (null === (Wr = this.howls.get(FS(ar, !Sr))) || void 0 === Wr ? void 0 : Wr.state()) && rr.load()
        }
      }
      howl(rr, Sr) {
        const Qr = FS(rr, Sr);
        let Zr = this.howls.get(Qr);
        if (!Zr) {
          const Wr = this.createHowl(KS[rr], Sr);
          Wr.on("end", (rr => {
            Wr.loop(rr) || this.forget(rr)
          })), Wr.on("stop", (rr => {
            this.forget(rr)
          })), Wr.on("play", (rr => {
            this.live.has(rr) && this.started.add(rr)
          })), Wr.on("loaderror", (rr => {
            if ("loaded" !== Wr.state()) {
              this.failed.add(Wr);
              for (const [rr, Sr] of this.live) Sr.howl === Wr && this.forget(rr)
            } else "number" === typeof rr && this.forget(rr)
          })), this.howls.set(Qr, Wr), Zr = Wr
        }
        return Zr
      }
      setRel(rr, Sr) {
        const Qr = this.live.get(rr);
        Qr && (oS(Qr), Qr.fadeMs = 0, Qr.rel = iS(Sr), Qr.gain = Qr.rel * this.master, Qr.howl.volume(Qr.gain, rr))
      }
      fade(rr, Sr, Qr, Zr) {
        const Wr = this.live.get(rr);
        if (!Wr) return;
        oS(Wr);
        const {
          howl: ar
        } = Wr, jr = this.gainNow(Wr);
        Wr.rel = iS(Sr), Wr.gain = Wr.rel * this.master;
        const Ir = Qr > 0 ? Math.min(Qr, 65535) : 0,
          fr = 0 === Ir || jr === Wr.gain;
        Wr.fadeMs = fr ? 0 : Ir, fr ? ar.volume(Wr.gain, rr) : (Wr.fadeFrom = jr, Wr.fadeAt = this.now(), ar.fade(jr, Wr.gain, Ir, rr)), Zr && (fr ? ar.stop(rr) : Wr.stopTimer = setTimeout((() => {
          Wr.stopTimer = void 0, ar.stop(rr)
        }), Ir))
      }
      gainNow(rr) {
        if (rr.fadeMs > 0) {
          const Sr = (this.now() - rr.fadeAt) / rr.fadeMs;
          if (Sr < 1) return rr.fadeFrom + (rr.gain - rr.fadeFrom) * Math.max(0, Sr);
          rr.fadeMs = 0
        }
        return rr.gain
      }
      forget(rr) {
        this.started.delete(rr);
        const Sr = this.live.get(rr);
        Sr && (oS(Sr), this.live.delete(rr), 0 !== Sr.handle && this.core.get(Sr.handle) === rr && this.core.delete(Sr.handle))
      }
    }

    function FS(rr, Sr) {
      return 2 * rr + (Sr ? 1 : 0)
    }

    function oS(rr) {
      void 0 !== rr.stopTimer && (clearTimeout(rr.stopTimer), rr.stopTimer = void 0)
    }
    var bS = Qr(42472),
      JS = Qr(40696);
    class DS {
      constructor(rr, Sr, Qr, Zr) {
        this.key = rr, this.model = Sr, this.host = Zr, this.sx = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.pjr = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.vU = !1, this.sx = Math.max(1, Math.ceil(Qr)), this.records = new Float32Array(this.sx * xS.b), this.isDirty = new Uint8Array(this.sx), this.tail = new Uint8Array(this.sx * Ur.cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(Zr.cmd())
      }
      setOrigin(rr, Sr, Qr) {
        this.origin[0] = rr, this.origin[1] = Sr, this.origin[2] = Qr
      }
      markDirty(rr) {
        !this.vU && rr >= 0 && rr < this.sx && rr < Ur.cc.Max && this.cU(rr, rr + 1)
      }
      commit(rr) {
        if (this.vU) return;
        (rr = Math.min(Math.max(Math.floor(rr), 0), this.sx, Ur.cc.Max)) > this.count && this.cU(this.count, rr), this.count = rr;
        const {
          origin: Sr,
          sentOrigin: Qr,
          dirtyList: Zr
        } = this, Wr = this.pjr !== rr, ar = Qr[0] !== Sr[0] || Qr[1] !== Sr[1] || Qr[2] !== Sr[2];
        if (0 === Zr.length && !Wr && !ar) return;
        const jr = this.host.cmd();
        if (!jr || !this.make(jr)) return;
        const Ir = Zr.length,
          {
            records: fr,
            tailView: Er
          } = this;
        for (let pr = 0; pr < Ir; pr++) {
          const rr = Zr[pr],
            Sr = rr * xS.b,
            Qr = pr * Ur.cc.Bytes,
            Wr = 0 !== fr[Sr + xS.c] ? Ur.cc.Hidden : 0;
          Er.setUint32(Qr, (rr | Wr) >>> 0, !0), Er.setFloat32(Qr + 4, fr[Sr], !0), Er.setFloat32(Qr + 8, fr[Sr + 1], !0), Er.setFloat32(Qr + 12, fr[Sr + 2], !0)
        }
        if ((0, Ur.Je)(jr, 0, this.key, rr, Sr, Ir, this.tailOf(Ir))) {
          for (let rr = 0; rr < Ir; rr++) this.isDirty[Zr[rr]] = 0;
          Zr.length = 0, this.pjr = rr, Qr[0] = Sr[0], Qr[1] = Sr[1], Qr[2] = Sr[2]
        }
      }
      grow(rr) {
        (rr = Math.ceil(rr)) <= this.sx || this.vU || (this.records = (0, JS.c)(this.records, new Float32Array(rr * xS.b)), this.isDirty = (0, JS.c)(this.isDirty, new Uint8Array(rr)), this.tail = new Uint8Array(rr * Ur.cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.sx = rr)
      }
      dispose() {
        this.vU || (this.vU = !0, this.host.vU(this, this.made ? this.key : null))
      }
      make(rr) {
        if (!this.made && rr) {
          const {
            item: Sr,
            scale: Qr,
            yaw: Zr
          } = this.model;
          this.made = (0, Ur.Oe)(rr, 0, this.key, Sr, Qr, Zr)
        }
        return this.made
      }
      tailOf(rr) {
        const Sr = rr * Ur.cc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Sr || (this.tailCut = this.tail.subarray(0, Sr)), this.tailCut
      }
      cU(rr, Sr) {
        const {
          dirtyList: Qr,
          isDirty: Zr
        } = this;
        for (let Wr = rr; Wr < Sr; Wr++) 0 === Zr[Wr] && (Zr[Wr] = 1, Qr.push(Wr))
      }
    }
    var dS = Qr(683),
      sS = Qr(45329);
    const uS = new TextEncoder,
      rQ = new Uint8Array(0),
      SQ = [0, 0, 0];
    class QQ {
      constructor(rr, Sr) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: rr,
          serverId: Sr,
          owes: rr => {
            this.owing.add(rr)
          },
          settled: (rr, Sr) => {
            this.owing.delete(rr), Sr && this.live.delete(rr)
          }
        }
      }
      create(rr, Sr) {
        return Qr = rr, dS.n.includes(Qr) ? this.add({
          lifeform: pr.n.indexOf(rr)
        }, Sr) : null;
        var Qr
      }
      createCosmetic(rr, Sr) {
        const Qr = sS.COSMETIC_MODEL_KEYS.get(rr);
        return void 0 === Qr ? null : this.add({
          attachment: Qr
        }, Sr)
      }
      add(rr, Sr) {
        const Qr = new ZQ(++this.keys, rr, Sr, this.host);
        return this.live.add(Qr), Qr
      }
      disposeAll() {
        for (const rr of [...this.live]) rr.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const rr = this.host.cmd();
        for (const Sr of this.owing)
          if (!Sr.sync(rr)) return
      }
    }
    class ZQ {
      constructor(rr, Sr, Qr, Zr) {
        this.key = rr, this.source = Sr, this.scale = Qr, this.host = Zr, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = rQ, this.perch = null, this.owed = 1, this.vU = !1, this.sync()
      }
      setPose(rr, Sr) {
        this.vU || (this.feet[0] = rr[0], this.feet[1] = rr[1], this.feet[2] = rr[2], this.yaw = Sr, this.owed |= 2, this.sync())
      }
      setVisible(rr) {
        this.vU || rr === this.visible || (this.visible = rr, this.owed |= 4, this.sync())
      }
      setClip(rr) {
        this.vU || rr === this.clip || (this.clip = rr, this.clipBytes = null === rr ? rQ : uS.encode(rr), this.owed |= 16, this.sync())
      }
      setPerch(rr) {
        this.vU || (this.perch = rr, this.owed |= 32, this.sync())
      }
      dispose() {
        this.vU || (this.vU = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(rr) ? (this.host.settled(this, this.vU), !0) : (this.host.owes(this), !1)
      }
      write(rr) {
        if (!rr) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, Ur.We)(rr, 0, this.key, this.source.lifeform, this.scale) : (0, Ur.ne)(rr, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: Sr,
          perch: Qr
        } = this, Zr = (2 & Sr ? Ur.Ec.Pose : 0) | (4 & Sr ? Ur.Ec.Visible : 0) | (16 & Sr ? Ur.Ec.Clip : 0) | (32 & Sr ? Ur.Ec.Perch : 0);
        if (0 !== Zr) {
          var Wr, ar;
          if (!(0, Ur.Ue)(rr, 0, this.key, Zr, this.visible ? 1 : 0, Qr ? 1 : 0, this.feet, this.yaw, Qr ? this.host.serverId(Qr.hQ) : 0, null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.offset) && void 0 !== Wr ? Wr : SQ, null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.yaw) && void 0 !== ar ? ar : 0, 16 & Sr ? this.clipBytes : rQ)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, Ur.Qe)(rr, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var WQ = Qr(42862);

    function aQ(rr, Sr, Qr, Zr) {
      return (0, WQ.b)(), (0, Ur.Gf)(rr, Sr, Qr, Zr)
    }
    var jQ = Qr(40710),
      IQ = Qr(42456),
      fQ = Qr(42876);
    const EQ = [0, 0, 0],
      pQ = [0, 0, 0],
      xQ = [0, 0, 0],
      mQ = [0, 0, 0],
      NQ = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      UQ = [0, 0, 0],
      tQ = [0, 0],
      hQ = [1, 1, 1],
      zQ = 1 / 3;
    const YQ = mS.g;

    function nQ(rr) {
      const Sr = mS.d[rr],
        Qr = Sr && mS.g[Sr.mainMultiblock];
      return Qr && {
        main: Qr,
        x: Sr.compX,
        y: Sr.compY,
        z: Sr.compZ
      }
    }

    function eQ(rr) {
      if (null === rr || void 0 === rr) return Ur.Nc;
      const Sr = +rr;
      return Number.isInteger(Sr) && Sr >= -2147483648 && Sr <= 2147483647 && String(Sr) === String(rr) ? Sr : Ur.Nc
    }

    function KQ(rr, Sr, Qr) {
      return (0, Ur.Kf)(rr, 0, Sr, null !== Qr && void 0 !== Qr ? Qr : Number.NaN)
    }
    class yQ {
      constructor(rr) {
        this.deps = rr, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new jQ.b((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (rr => {
          var Sr, Qr;
          null === (Sr = (Qr = this.deps).setLocalOptions) || void 0 === Sr || Sr.call(Qr, rr)
        })), this.mobModels = new QQ((() => this.deps.cmd()), eQ), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          vU: (rr, Sr) => {
            this.livePools.delete(rr), null !== Sr && (this.owedFrees.push(Sr), this.flushOwed())
          }
        }, this.api = rr.api, this.live = rr.live, this.chunks = rr.chunks, this.items = rr.items, this.tables = rr.tables
      }
      isLocal(rr) {
        return null !== rr && void 0 !== rr && +rr === this.api.localId
      }
      assertLocal(rr, Sr) {
        if (!this.isLocal(rr)) throw new Error(`Attempted to ${Sr} for a player that is not the local player`)
      }
      JY(rr) {
        const Sr = this.api.JY(rr);
        if (!Sr) throw new Error(`Entity ${rr} has no replicated position`);
        return Sr
      }
      checkValid(rr) {
        return !!this.deps.isSessionLive() && (null === rr || void 0 === rr || this.api.checkValid(rr))
      }
      isAlive(rr) {
        return !1 !== this.api.isAlive(rr)
      }
      getItemStat(rr, Sr, Qr) {
        return this.isLocal(rr) || null !== rr && "Player" === this.api.getEntityType(rr) ? this.tables.getItemStat(Sr, Qr) : this.tables.getDefaultItemStat(Sr, Qr)
      }
      getClientOption(rr, Sr) {
        return this.assertLocal(rr, "get a client option"), this.tables.getClientOption(Sr)
      }
      openShop(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(rr, "open shop"), jr.i.Jp("showShopFromServer", {
          toggle: Sr,
          MS: Qr
        }, !0)
      }
      sendMessage(rr, Sr, Qr) {
        this.assertLocal(rr, "send a message");
        const Zr = "string" === typeof Sr ? [{
          str: Sr,
          style: Qr
        }] : Sr;
        jr.i.Jp("chat", {
          content: Zr
        }, !0)
      }
      getEntityType(rr) {
        return this.api.getEntityType(rr)
      }
      getEntityName(rr) {
        const Sr = eQ(rr);
        return Sr === Ur.Nc ? void 0 : (0, bS.j)(this.api, Sr)
      }
      hasEffect(rr, Sr) {
        const Qr = eQ(rr);
        return Qr !== Ur.Nc && (0, bS.g)(this.api, Qr, Sr)
      }
      getMetaInfo(rr) {
        return this.tables.getMetaInfo(rr)
      }
      getPlayerDbId(rr) {
        return this.assertLocal(rr, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(rr, Sr, Qr) {
        if (!this.chunks.dataCleared(rr, Sr, Qr)) return (0, bS.c)(this.api, rr, Sr, Qr)
      }
      fR(rr, Sr, Qr, Zr) {
        this.setBlockId(rr, Sr, Qr, this.tables.getItemId(Zr))
      }
      setOtherEntitySetting(rr, Sr, Qr, Zr) {
        if (!this.isLocal(rr)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Ur.Xc, Qr)) throw new Error(`Unknown other-entity setting ${Qr}`);
        const Wr = Ur.Xc[Qr],
          ar = eQ(Sr);
        if (ar === Ur.Nc || !this.deps.beforeWrite()) return;
        const jr = (0, kr.e)(Zr);
        if (jr.length > 16384) throw new Error(`The other-entity setting ${Qr}'s value is over 16384 bytes`);
        const Ir = this.api.memoryView(Uint8Array, this.api.scratch(), jr.length, "set_other_entity_setting's value");
        Ir && (Ir.set(jr), this.api.queries.setOtherEntitySetting(ar, Wr, jr.length))
      }
      getPositionView(rr) {
        return this.live.position(+rr)
      }
      readDrawnPosition(rr, Sr) {
        return this.api.readDrawnPosition(eQ(rr), Sr)
      }
      getDrawnHeading(rr) {
        const Sr = this.drawnEntity(rr);
        if (!Sr) return null;
        if (1 === Ur.gb.headingIsDrawn(Sr, 0)) return Ur.gb.heading(Sr, 0);
        const Qr = this.api.apiView;
        return this.isLocal(rr) && 0 === (Ur.p.playerFlags(Qr, 0) & Ur.ud.FreeCam) ? Ur.p.heading(Qr, 0) : null
      }
      getDrawnEyeHeight(rr) {
        const Sr = this.drawnEntity(rr),
          Qr = Sr ? Ur.gb.eyeHeight(Sr, 0) : 0;
        return Qr > 0 ? Qr : null
      }
      drawnEntity(rr) {
        const Sr = eQ(rr);
        return Sr === Ur.Nc || this.api.queries.directorEntity(Sr) < Ur.gb.BYTES ? null : this.api.scratchData(Ur.gb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(rr) {
        const Sr = eQ(rr);
        return Sr !== Ur.Nc && 1 === this.api.queries.entityDrawn(Sr)
      }
      getPlayerIds() {
        return fQ.g.ids()
      }
      getPlayerCosmetics(rr) {
        var Sr;
        return null !== (Sr = (0, fQ.j)(rr)) && void 0 !== Sr ? Sr : null
      }
      getLocalPlayerMovement() {
        const rr = Ur.p.playerFlags(this.api.apiView, 0);
        return 0 === (rr & Ur.ud.Replay) && this.api.readDrawnPosition(this.api.localId, xQ) ? {
          onGround: 0 !== (rr & Ur.ud.OnGround),
          jumpHeld: 0 !== (rr & Ur.ud.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, NS.z)(this.deps.localPhysicsType())
      }
      XQr(rr) {
        return this.isLocal(rr) ? this.items.wI() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var rr, Sr;
        return "Gun" === (null === (rr = this.aliveHeld()) || void 0 === rr || null === (Sr = rr.typeObj) || void 0 === Sr ? void 0 : Sr.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.wI()
      }
      isCrosshairShown() {
        var rr, Sr;
        const Qr = (0, tS.c)(Zr.c.get("crosshairGameView"), Zr.c.get("crosshairShownOverride"));
        if (null !== Qr) return Qr;
        const Wr = null === (rr = this.aliveHeld()) || void 0 === rr ? void 0 : rr.typeObj,
          ar = "Gun" === (null === Wr || void 0 === Wr ? void 0 : Wr.type),
          jr = ar || !0 === (null === Wr || void 0 === Wr ? void 0 : Wr.showsAimingUi),
          Ir = 0 === (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.ZoomFirstPerson),
          fr = null !== (Sr = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Sr ? Sr : null;
        return (0, tS.g)({
          gun: ar,
          aimable: jr
        }, Ir, (0, hS.b)(), fr)
      }
      setCrosshairShown(rr) {
        Zr.c.set({
          crosshairShownOverride: rr
        })
      }
      getInventoryFreeSlotCount(rr) {
        return this.isLocal(rr) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(rr) {
        return this.isLocal(rr) ? this.items.selectedSlot : null
      }
      getItemSlot(rr, Sr) {
        return this.isLocal(rr) ? this.items.slot(Sr) : null
      }
      swapInventorySlots(rr, Sr) {
        return this.items.swap(rr, Sr)
      }
      isPlayerCrouching(rr) {
        if (this.isLocal(rr)) return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.Crouching);
        const Sr = eQ(rr);
        return Sr !== Ur.Nc && 1 === this.api.queries.entityCrouching(Sr)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Ur.p.playerFlags(this.api.apiView, 0) & Ur.ud.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.xSr()
      }
      getActionRay() {
        const rr = this.api.apiView;
        for (let Sr = 0; Sr < 3; Sr++) NQ.origin[Sr] = Ur.p.OSr(rr, 0, Sr), NQ.direction[Sr] = Ur.p.actionDir(rr, 0, Sr);
        return NQ
      }
      canModifyBlockAt(rr, Sr, Qr) {
        return 1 === this.api.queries.canModify(rr, Sr, Qr)
      }
      isSolidToPlayerBlockId(rr) {
        return this.tables.isSolidBlockId(rr) && !this.chunks.isWalkThrough(rr)
      }
      blockNameToBlockId(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(rr, Sr)
      }
      blockIdToBlockName(rr) {
        return this.tables.nameOfId(rr)
      }
      dSr(rr, Sr, Qr, Zr, Wr) {
        return 1 === this.api.queries.terrainBlocked(Zr, rr, Sr, Qr, eQ(null !== Wr && void 0 !== Wr ? Wr : null))
      }
      getChunkVersion(rr, Sr, Qr) {
        return this.chunks.version(rr, Sr, Qr)
      }
      scanBlocks(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        return this.chunks.scan(rr, Sr, Qr, Zr, Wr, ar, jr, Ir)
      }
      readColumnTops(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        this.chunks.columnTops(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr)
      }
      isBlockInLoadedChunk(rr, Sr, Qr) {
        return this.chunks.isLoaded(rr, Sr, Qr)
      }
      getBlockId(rr, Sr, Qr) {
        return this.chunks.aI(rr, Sr, Qr)
      }
      playSound(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(rr)) return null;
        const jr = this.playSoundFrom(Sr, Qr, Wr, ar);
        return 1 === Zr ? jr : jr.rate(Zr)
      }
      preloadSounds(rr) {
        var Sr, Qr;
        null === (Sr = (Qr = this.deps).preloadSounds) || void 0 === Sr || Sr.call(Qr, rr)
      }
      playSoundFrom(rr, Sr, Qr, Zr) {
        var Wr, ar;
        const jr = this.deps.playSound;
        if (!jr) return qS.e;
        const Ir = null === Qr || void 0 === Qr ? void 0 : Qr.aZ,
          fr = null !== (Wr = null === Qr || void 0 === Qr ? void 0 : Qr.maxHearDist) && void 0 !== Wr ? Wr : US.e,
          Er = null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr.refDistance) && void 0 !== ar ? ar : US.h;
        let pr = null;
        if (Array.isArray(Ir)) EQ[0] = Ir[0], EQ[1] = Ir[1], EQ[2] = Ir[2], pr = EQ;
        else if (void 0 !== Ir && null !== Ir) {
          const rr = eQ(Ir);
          if (!this.api.isLocal(rr)) {
            if (!this.api.readPosition(rr, EQ)) return qS.e;
            pr = EQ
          }
        }
        return jr(rr, Sr, pr, pr && this.ear(), fr, Er, Zr)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, pQ)) pQ[1] += kS;
        else {
          const rr = this.api.apiView;
          if (0 === Ur.p.viewProj(rr, 0, 3) && 0 === Ur.p.viewProj(rr, 0, 7) && 0 === Ur.p.viewProj(rr, 0, 11)) return null;
          for (let Sr = 0; Sr < 3; Sr++) pQ[Sr] = Ur.p.eye(rr, 0, Sr)
        }
        return Number.isFinite(pQ[0] + pQ[1] + pQ[2]) ? pQ : null
      }
      setBlockId(rr, Sr, Qr, Zr) {
        if (!Number.isInteger(Zr) || Zr < 0 || Zr > 65535) throw new Error(`Invalid block id ${Zr}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(rr, Sr, Qr)) return;
        const Wr = Math.floor(rr),
          ar = Math.floor(Sr),
          jr = Math.floor(Qr),
          Ir = this.predictedCells(Wr, ar, jr, Zr);
        if (1 === this.api.queries.fR(Wr, ar, jr, Zr)) {
          for (let rr = 0; rr < Ir.length; rr += 5) this.chunks.setOverlay(Ir[rr], Ir[rr + 1], Ir[rr + 2], Ir[rr + 3], 1 === Ir[rr + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(rr, Sr) {
        return this.deps.particles.create(rr, Sr)
      }
      playParticleEffect(rr) {
        this.deps.particles.playEffect(rr)
      }
      burstParticlePreset(rr, Sr, Qr) {
        this.deps.particles.burstPreset(rr, Sr, Qr)
      }
      createGameMesh(rr, Sr, Qr) {
        const Zr = ++this.meshKeys,
          Wr = this.deps.cmd();
        if (!Wr) return Zr;
        const {
          look: ar,
          colour: jr
        } = function(rr) {
          switch (rr.kind) {
            case void 0:
            case "flatEmissive":
              return rr.onTop ? {
                look: Ur.Ob.FlatOnTop,
                colour: [...rr.rgb, rr.alpha]
              } : rr.opaque ? {
                look: Ur.Ob.FlatOpaque,
                colour: [...rr.rgb, 1]
              } : {
                look: Ur.Ob.Flat,
                colour: [...rr.rgb, rr.alpha]
              };
            case "chevronPath":
              return {
                look: Ur.Ob.Chevrons, colour: [...(0, zS.d)(rr.colour), rr.alpha]
              };
            case "furnaceFire":
              return {
                look: Ur.Ob.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Sr), Ir = Math.floor(rr.positions.length / 3), fr = function(rr, Sr) {
          const Qr = Math.floor(rr.positions.length / 3),
            Zr = rr.indices.length,
            Wr = Qr * (Sr ? 5 : 3),
            ar = new Uint8Array(4 * (Wr + Zr)),
            jr = new DataView(ar.buffer);
          for (let Er = 0; Er < 3 * Qr; Er++) jr.setFloat32(4 * Er, rr.positions[Er], !0);
          if (Sr) {
            var Ir;
            const Sr = null !== (Ir = rr.uvs) && void 0 !== Ir ? Ir : [];
            for (let rr = 0; rr < 2 * Qr; rr++) {
              var fr;
              jr.setFloat32(4 * (3 * Qr + rr), null !== (fr = Sr[rr]) && void 0 !== fr ? fr : 0, !0)
            }
          }
          for (let Er = 0; Er < Zr; Er++) jr.setUint32(4 * (Wr + Er), rr.indices[Er], !0);
          return ar
        }(rr, (0, xS.f)(Sr));
        return (0, Ur.Be)(Wr, 0, Zr, ar, jr, Qr, Ir, rr.indices.length, fr) && this.liveMeshes.add(Zr), Zr
      }
      setGameMesh(rr, Sr) {
        var Qr;
        const Zr = this.deps.cmd();
        if (!Zr) return;
        let Wr = 0;
        Sr.anchor && (Wr |= Ur.Pb.Anchor, UQ[0] = Sr.anchor[0], UQ[1] = Sr.anchor[1], UQ[2] = Sr.anchor[2]), void 0 !== Sr.visible && (Wr |= Ur.Pb.Visible), Sr.uvOffset && (Wr |= Ur.Pb.UvOffset, tQ[0] = Sr.uvOffset[0], tQ[1] = Sr.uvOffset[1]);
        const ar = null !== (Qr = Sr.visibility) && void 0 !== Qr ? Qr : 1;
        void 0 !== Sr.visibility && (Wr |= Ur.Pb.Visibility), Sr.scale && (Wr |= Ur.Pb.Scale, hQ[0] = Sr.scale[0], hQ[1] = Sr.scale[1], hQ[2] = Sr.scale[2]), 0 !== Wr && (0, Ur.Fe)(Zr, 0, rr, Wr, Sr.visible ? 1 : 0, UQ, tQ, ar, hQ)
      }
      disposeGameMesh(rr) {
        const Sr = this.deps.cmd();
        Sr && !(0, Ur.Ee)(Sr, 0, rr) || this.liveMeshes.delete(rr)
      }
      hasPackModel(rr) {
        var Sr, Qr, Zr;
        return null !== (Sr = null === (Qr = (Zr = this.deps).hasPackModel) || void 0 === Qr ? void 0 : Qr.call(Zr, rr)) && void 0 !== Sr && Sr
      }
      disposeGameOutput() {
        const rr = rr => {
          try {
            rr()
          } catch (Sr) {
            console.error("Error freeing client game output", Sr)
          }
        };
        for (const Sr of [...this.liveMeshes]) rr((() => {
          this.disposeGameMesh(Sr)
        }));
        for (const Sr of [...this.livePools]) rr((() => {
          Sr.dispose()
        }));
        rr((() => {
          this.mobModels.disposeAll()
        })), rr((() => {
          this.setGroundArrowStyle(null)
        })), rr((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), rr((() => {
          this.setCrosshairShown(null)
        })), rr((() => {
          this.cameraTurn.dispose()
        })), rr((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(rr, Sr) {
        const Qr = this.tables.idOf(rr.item);
        if (void 0 === Qr) return null;
        const Zr = new DS(++this.poolKeys, {
          item: Qr,
          scale: rr.scale,
          yaw: rr.yaw
        }, Sr, this.poolHost);
        return this.livePools.add(Zr), Zr
      }
      createMobModel(rr, Sr) {
        return this.mobModels.create(rr, Sr)
      }
      createCosmeticModel(rr, Sr) {
        return this.mobModels.createCosmetic(rr, Sr)
      }
      setRouteChevrons(rr) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !rr || 0 === rr.cells.length) return;
        const Sr = `${rr.colour} ${rr.alpha}`;
        Sr !== this.routeLook && (this.routeLook = Sr, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(rr) {
          const [Sr, Qr, Zr] = rr[0].pos, Wr = [], ar = [], jr = [];
          return rr.forEach(((rr, Ir) => {
            let {
              pos: fr,
              way: [Er, pr]
            } = rr;
            const xr = fr[0] - Sr + .5,
              mr = fr[1] - Qr + .04,
              Nr = fr[2] - Zr + .5,
              [Ur, tr] = [.35 * -pr, .35 * Er],
              [hr, zr] = [Ir * zQ, (Ir + 1) * zQ],
              Yr = Wr.length / 3;
            Wr.push(xr - .5 * Er + Ur, mr, Nr - .5 * pr + tr), Wr.push(xr - .5 * Er - Ur, mr, Nr - .5 * pr - tr), Wr.push(xr + .5 * Er + Ur, mr, Nr + .5 * pr + tr), Wr.push(xr + .5 * Er - Ur, mr, Nr + .5 * pr - tr), ar.push(0, hr, 1, hr, 0, zr, 1, zr), jr.push(Yr, Yr + 1, Yr + 2, Yr + 1, Yr + 3, Yr + 2)
          })), {
            positions: Wr,
            uvs: ar,
            indices: jr
          }
        }(rr.cells), {
          kind: "chevronPath",
          colour: rr.colour,
          alpha: rr.alpha
        }, rr.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(rr) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(rr, 250) / 1e3 * 1.2 * zQ) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(rr) {
        this.pendingStyle = rr, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const rr = this.owedFrees;
        if (0 === rr.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Sr = this.deps.cmd();
        if (!Sr) return rr.length = 0, void(this.pendingFar = void 0);
        let Qr = 0;
        for (; Qr < rr.length && (0, Ur.Le)(Sr, 0, rr[Qr]);) Qr++;
        rr.splice(0, Qr);
        const Zr = this.pendingStyle;
        if (void 0 !== Zr) {
          (Zr ? (0, Ur.Nf)(Sr, 0, Zr.width, Zr.alpha, 1, Zr.endAtSolidFace ? 1 : 0) : (0, Ur.Nf)(Sr, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Wr = this.pendingFar;
        void 0 !== Wr && (0, Ur.If)(Sr, 0, null !== Wr && void 0 !== Wr ? Wr : 0, null === Wr ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(rr, Sr) {
        const Qr = this.deps.cmd(),
          Zr = eQ(rr);
        Qr && Zr !== Ur.Nc && (0, Ur.Xf)(Qr, 0, Zr, Sr)
      }
      setFacingTolerance(rr, Sr) {
        const Qr = this.deps.cmd(),
          Zr = eQ(rr);
        Qr && Zr !== Ur.Nc && KQ(Qr, Zr, Sr)
      }
      forEachEntity(rr) {
        const {
          api: Sr
        } = this;
        for (let Qr = 0; Qr < Sr.idStr.length; Qr++) {
          const Zr = Sr.idStr[Qr];
          null === Zr || Kr(Sr.kinds[Qr]) || rr(Zr)
        }
      }
      getEntityInfo(rr) {
        return this.deps.entityInfo.get(rr)
      }
      isEntityInteractable(rr) {
        const Sr = eQ(rr);
        return Sr !== Ur.Nc && 1 === this.api.queries.entityInteractable(Sr)
      }
      isLocalPlayer(rr) {
        return this.isLocal(rr)
      }
      getLineOwner(rr) {
        var Sr;
        const Qr = null === (Sr = this.deps.entityInfo.get(rr)) || void 0 === Sr ? void 0 : Sr.meshOpts;
        if (!Qr) return null;
        try {
          const {
            lineToEId: rr
          } = JSON.parse(Qr);
          return null !== rr && void 0 !== rr ? rr : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const rr = this.api.apiView;
        return mQ[0] = Ur.p.eye(rr, 0, 0), mQ[1] = Ur.p.eye(rr, 0, 1), mQ[2] = Ur.p.eye(rr, 0, 2), mQ
      }
      getCameraFar() {
        return Ur.p.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(rr) {
        null !== rr && (this.farSet = !0), this.pendingFar = rr, this.flushOwed()
      }
      turnCamera(rr, Sr) {
        this.cameraTurn.turn(rr, Sr)
      }
      clearPickupDelay(rr) {
        const Sr = this.deps.cmd(),
          Qr = eQ(rr);
        Sr && Qr !== Ur.Nc && (0, Ur.ie)(Sr, 0, Qr)
      }
      sendChat(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = this.deps.sendCmd();
        return null !== Qr && aQ(Qr, 0, IQ.b.Chat, (0, kr.e)((0, IQ.h)({
          xj: rr,
          mj: Sr
        })))
      }
      sendCommand(rr) {
        rr.length <= 119 && this.sendChat(`/${rr}`)
      }
      predictedCells(rr, Sr, Qr, Zr) {
        const Wr = this.chunks,
          ar = [],
          jr = (rr, Sr, Qr, Zr, Wr) => {
            ar.push(rr, Sr, Qr, Zr, this.tables.blockRootId(Wr) === this.tables.blockRootId(Zr) ? 0 : 1)
          },
          Ir = Wr.aI(rr, Sr, Qr),
          fr = nQ(Ir);
        if (fr) {
          const [Zr, ar, Er] = [rr - fr.x, Sr - fr.y, Qr - fr.z], pr = YQ[Wr.aI(Zr, ar, Er)], xr = null === pr || void 0 === pr ? void 0 : pr.positions.some((rr => rr.id === Ir && rr.x === fr.x && rr.y === fr.y && rr.z === fr.z));
          for (const rr of (xr && pr ? pr : fr.main).positions) Wr.aI(Zr + rr.x, ar + rr.y, Er + rr.z) === rr.id && jr(Zr + rr.x, ar + rr.y, Er + rr.z, 0, rr.id)
        }
        const Er = nQ(Zr);
        if (Er)
          for (const xr of Er.main.positions) {
            const [Zr, ar, Ir] = [rr + xr.x - Er.x, Sr + xr.y - Er.y, Qr + xr.z - Er.z];
            jr(Zr, ar, Ir, xr.id, Wr.aI(Zr, ar, Ir))
          } else jr(rr, Sr, Qr, Zr, Ir);
        const pr = this.tables;
        if ((0 !== pr.attachedTopOf(Ir) || 0 !== pr.attachedTopOf(Zr)) && Wr.isLoaded(rr, Sr + 1, Qr)) {
          let fr = Wr.aI(rr, Sr + 1, Qr);
          for (let Zr = 0; Zr < ar.length; Zr += 5) ar[Zr] === rr && ar[Zr + 1] === Sr + 1 && ar[Zr + 2] === Qr && (fr = ar[Zr + 3]);
          const Er = this.attachedTopWrite(Ir, Zr, fr);
          void 0 !== Er && jr(rr, Sr + 1, Qr, Er, fr)
        }
        return ar
      }
      attachedTopWrite(rr, Sr, Qr) {
        const Zr = this.tables,
          Wr = Zr.attachedTopOf(rr),
          ar = Zr.attachedTopOf(Sr),
          jr = 0 !== Wr && 0 !== Qr && Zr.blockRootId(Qr) === Zr.blockRootId(Wr);
        return 0 !== Wr && 0 !== ar && Zr.blockRootId(rr) === Zr.blockRootId(Sr) ? jr && Qr !== ar ? ar : void 0 : 0 === ar || !jr && 0 !== Qr ? jr ? 0 : void 0 : ar
      }
    }
    const BQ = Ur.Xb + Ur._b * Ur.gc.BYTES,
      TQ = 2147483647,
      vQ = new TextDecoder,
      OQ = new TextEncoder,
      LQ = Object.freeze({
        NI: 0,
        bp: null,
        amountAddedToSlot: 0
      }),
      lQ = new Proxy({}, {
        get: () => () => Ur.Wc
      });

    function XQ(rr) {
      return Number.isInteger(rr) && rr >= 0 && rr <= 65535
    }

    function PQ(rr) {
      return Number.isInteger(rr) && rr >= 0 && rr <= 4294967295
    }
    class HQ {
      constructor(rr) {
        this.deps = rr, this.cW = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Ur._b), this.ids = new Uint16Array(Ur._b), this.amounts = new Uint16Array(Ur._b), this.attrRead = new Float64Array(Ur._b).fill(-1), this.stale = new Uint16Array(Ur._b), this.staleVersion = new Uint32Array(Ur._b), this.instances = new Uint32Array(Ur._b), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
      }
      get length() {
        return this.len
      }
      get selectedSlot() {
        return this.selected
      }
      get slotIcon() {
        return this.slotIconId
      }
      get changes() {
        return this.version
      }
      slot(rr) {
        var Sr;
        return Number.isInteger(rr) && rr >= 0 && rr < this.len && 0 !== this.ids[rr] && null !== (Sr = this.facades[rr]) && void 0 !== Sr ? Sr : null
      }
      wI() {
        return this.slot(this.selected)
      }
      playerItems() {
        const rr = [];
        for (let Sr = 0; Sr < Math.min(Ur.bd, this.len); Sr++) rr.push(this.slot(Sr));
        return rr
      }
      freeSlots() {
        let rr = 0;
        for (let Sr = 0; Sr < Math.min(Ur.bd - Ur.f, this.len); Sr++) 0 === this.ids[Sr] && rr++;
        return rr
      }
      amountOf(rr) {
        let Sr = 0;
        for (let Zr = 0; Zr < Math.min(Ur.bd, this.len); Zr++) {
          const Wr = this.slot(Zr);
          var Qr;
          if ((null === Wr || void 0 === Wr ? void 0 : Wr.name) === rr) Sr += null !== (Qr = Wr.amount) && void 0 !== Qr ? Qr : 1
        }
        return Sr
      }
      instance(rr) {
        var Sr;
        return null !== (Sr = this.instances[rr]) && void 0 !== Sr ? Sr : 0
      }
      watch(rr) {
        return this.listeners.add(rr), () => {
          this.listeners.delete(rr)
        }
      }
      touch() {
        this.version++
      }
      flush(rr) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const Qr of [...this.listeners]) try {
            Qr()
          } catch (Sr) {
            rr(Sr)
          }
        }
      }
      chestOpened(rr, Sr, Qr) {
        this.cW[0] = rr, this.cW[1] = Sr, this.cW[2] = Qr, this.version++
      }
      refresh() {
        const rr = this.deps.api.apiView,
          Sr = Ur.p.inventoryViewPtr(rr, 0),
          Qr = Ur.p.inventoryVersion(rr, 0),
          Zr = Ur.p.selectedSlot(rr, 0);
        Zr !== this.selected && (this.selected = Zr, this.version++);
        const Wr = Ur.p.slotIcon(rr, 0);
        if (Wr !== this.slotIconId && (this.slotIconId = Wr, this.iconChanged = !0), Sr === this.viewPtr && Qr === this.viewVersion) return;
        this.viewPtr = Sr, this.viewVersion = Qr;
        const ar = this.deps.api.memoryData(Sr, BQ, 4, "the inventory view"),
          jr = ar ? Math.min(ar.getUint32(0, !0), Ur._b) : 0;
        jr !== this.len && (this.len = jr, this.version++);
        let Ir = 0;
        for (let fr = 0; fr < Ur._b; fr++) {
          const rr = Ur.Xb + fr * Ur.gc.BYTES,
            Sr = null !== ar && fr < jr ? Ur.gc.item(ar, rr) : 0;
          if (0 === Sr || null === ar) {
            0 !== this.ids[fr] && (this.ids[fr] = 0, this.attrRead[fr] = -1, this.instances[fr]++, this.version++);
            continue
          }
          const Qr = Ur.gc.amount(ar, rr),
            Zr = Ur.gc.attrVersion(ar, rr);
          Sr === this.ids[fr] && Qr === this.amounts[fr] || this.fill(fr, Sr, Qr), Zr !== this.attrRead[fr] && (this.stale[Ir] = fr, this.staleVersion[Ir] = Zr, Ir++)
        }
        Ir > 0 && this.fetchAttributes(Ir)
      }
      fill(rr, Sr, Qr) {
        const {
          tables: Zr
        } = this.deps, Wr = Sr !== this.ids[rr];
        let ar = this.facades[rr];
        ar || (ar = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[rr] = ar), Wr && (ar.name = Zr.nameOfId(Sr), ar.typeObj = Zr.itemType(Sr), ar.attributes = {
          customAttributes: {}
        }, this.attrRead[rr] = -1, this.instances[rr]++), ar.amount = 0 === Qr ? null : Qr, this.ids[rr] = Sr, this.amounts[rr] = Qr, this.version++
      }
      fetchAttributes(rr) {
        const {
          api: Sr,
          onError: Qr
        } = this.deps, Zr = Sr.memoryView(Uint16Array, Sr.scratch(), rr, "item_attributes_batch's slots");
        if (!Zr) return void this.markRead(rr);
        Zr.set(this.stale.subarray(0, rr));
        const Wr = Sr.queries.itemAttributesBatch(rr),
          ar = 4294967295 === Wr ? null : Sr.memoryData(Sr.scratch(), Wr, 4, "item_attributes_batch's answer");
        if (!ar) return void this.markRead(rr);
        const jr = new Uint8Array(ar.buffer, ar.byteOffset, Wr);
        for (let fr = 0; fr + 8 <= Wr;) {
          const rr = ar.getUint16(fr, !0),
            Sr = ar.getUint32(fr + 4, !0),
            Zr = jr.subarray(fr + 8, fr + 8 + Sr);
          fr += 8 + (0, mr.Ke)(Sr);
          const Wr = this.facades[rr];
          if (Wr && 0 !== this.ids[rr] && 0 !== Sr) {
            try {
              Wr.attributes = JSON.parse(vQ.decode(Zr))
            } catch (Ir) {
              Qr(Ir)
            }
            this.version++
          }
        }
        this.markRead(rr)
      }
      markRead(rr) {
        for (let Sr = 0; Sr < rr; Sr++) this.attrRead[this.stale[Sr]] = this.staleVersion[Sr]
      }
      swap(rr, Sr) {
        return XQ(rr) && XQ(Sr) && this.settle(this.queries().invSwap(rr, Sr))
      }
      move(rr, Sr, Qr) {
        return XQ(rr) && XQ(Sr) && PQ(Qr) && this.settle(this.queries().invMove(rr, Sr, Qr))
      }
      quickMove(rr, Sr, Qr, Zr) {
        var Wr, ar;
        if (!XQ(rr) || !XQ(Sr) || !XQ(Qr) || null !== Zr && !PQ(Zr)) return null;
        const jr = this.queries().invQuickMove(rr, Sr, Qr, null === Zr ? -1 : Math.min(Zr, TQ)),
          Ir = jr === Ur.Wc ? Ur.zb : null !== (Wr = null === (ar = this.extras()) || void 0 === ar ? void 0 : ar[1]) && void 0 !== Wr ? Wr : Ur.zb;
        return this.settle(jr), Ir === Ur.zb ? null : Ir
      }
      remove(rr, Sr, Qr) {
        return XQ(rr) && PQ(Sr) && this.settle(this.queries().invRemove(rr, Sr, Qr ? 1 : 0))
      }
      selectSlot(rr) {
        return XQ(rr) && this.settle(this.queries().selectSlot(rr))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(rr, Sr, Qr) {
        if (!XQ(rr) || !Number.isInteger(Sr)) return !1;
        const [Zr, Wr, ar] = Qr;
        return this.settle(this.queries().invEnchant(rr, Sr, Math.floor(Zr), Math.floor(Wr), Math.floor(ar)))
      }
      craft(rr, Sr, Qr) {
        let Zr;
        try {
          Zr = this.deps.tables.getItemId(rr)
        } catch {
          return LQ
        }
        if (!XQ(Sr) || null !== Qr && (Number.isNaN(Qr) || Qr < 0)) return LQ;
        const Wr = null === Qr || Qr > TQ ? -1 : Math.floor(Qr),
          ar = this.queries().craft(Zr, Sr, Wr);
        let jr = LQ;
        const Ir = ar === Ur.Wc ? null : this.extras();
        if (Ir) {
          const [rr, Sr, Qr] = Ir;
          jr = {
            NI: rr,
            bp: Sr === Ur.zb ? null : Sr,
            amountAddedToSlot: Qr
          }
        }
        return this.settle(ar), jr
      }
      salvage(rr, Sr, Qr) {
        let Zr;
        try {
          Zr = this.deps.tables.getItemId(Sr)
        } catch {
          return !1
        }
        return XQ(rr) && Number.isInteger(Qr) && this.settle(this.queries().salvage(rr, Zr, Math.max(Math.min(Qr, TQ), -TQ)))
      }
      craftingView(rr, Sr, Qr) {
        var Zr;
        if (this.stopped) return null;
        const {
          api: Wr,
          onError: ar
        } = this.deps, jr = rr ? OQ.encode(rr) : null;
        if (null !== jr) {
          if (jr.length > 1024) return ar(new Error(`The crafting station ${rr}'s name is over 1024 bytes`)), null;
          const Sr = Wr.memoryView(Uint8Array, Wr.scratch(), jr.length, "crafting_view's station");
          if (!Sr) return null;
          Sr.set(jr)
        }
        const Ir = XQ(Sr) && XQ(Qr),
          fr = Wr.queries.craftingView(null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.length) && void 0 !== Zr ? Zr : 0, Ir ? Sr : 0, Ir ? Qr : 0);
        return fr < Ur.db.BYTES ? (Wr.reportCorruption(`crafting_view's answer of ${fr} bytes`), null) : Wr.memoryData(Wr.scratch(), fr, 1, "crafting_view's answer")
      }
      queries() {
        var rr, Sr;
        return !1 === (null === (rr = (Sr = this.deps).beforeOp) || void 0 === rr ? void 0 : rr.call(Sr)) ? (this.stopped = !0, lQ) : this.deps.api.queries
      }
      extras() {
        const {
          api: rr
        } = this.deps;
        return rr.memoryView(Uint32Array, rr.scratch(), 3, "a sync query's extra words")
      }
      settle(rr) {
        if (rr === Ur.Tc)(0, WQ.b)();
        else if (rr !== Ur.Wc) {
          const Sr = this.deps.cmd();
          Sr && function(rr, Sr, Qr) {
            return (0, WQ.b)(), (0, Ur.dg)(rr, Sr, Qr)
          }(Sr, 0, rr) || this.deps.onError(new Error(`Sync op ${rr}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), rr !== Ur.Wc
      }
    }
    const qQ = 1 / .6,
      RQ = [0, 1, 0],
      gQ = [0, 0, 0],
      CQ = new Uint8Array(0),
      MQ = 1.2 * YS.i.Nz,
      GQ = new TextEncoder,
      kQ = [0, 0, 0],
      AQ = [0, 0, 0],
      VQ = new Map;

    function iQ(rr) {
      let Sr = VQ.get(rr);
      return Sr || (VQ.size >= 64 && VQ.clear(), Sr = GQ.encode(`{"emitRate":${rr}}`), VQ.set(rr, Sr)), Sr
    }

    function wQ(rr) {
      return Number.isFinite(rr) && rr > 0 ? rr : 0
    }

    function cQ(rr, Sr) {
      for (let Qr = 0; Qr < 3; Qr++) {
        const Zr = Math.abs(Sr[Qr]);
        kQ[Qr] = rr[Qr] - Zr, AQ[Qr] = 2 * Zr
      }
      return Number.isFinite(kQ[0] + kQ[1] + kQ[2] + AQ[0] + AQ[1] + AQ[2])
    }

    function FQ(rr, Sr) {
      return "pos1" === rr || "pos2" === rr ? void 0 : Sr
    }

    function oQ(rr, Sr, Qr) {
      return rr.length > Ur.qd.MaxOpts ? (Qr(new Error(`${Sr}'s particle opts are over ${Ur.qd.MaxOpts} bytes of JSON`)), null) : rr
    }
    const bQ = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class JQ {
      constructor(rr) {
        this.deps = rr, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(rr, Sr) {
        var Qr;
        const Zr = this.sink(),
          Wr = null !== (Qr = Sr.half) && void 0 !== Qr ? Qr : gQ;
        if (!Zr || this.live >= Ur.qd.MaxLiveKeys || this.nextKey > Ur.qd.MaxKey || !cQ(Sr.pos, Wr)) return bQ;
        const ar = this.nextKey,
          jr = oQ(function(rr) {
            var Sr, Qr, Zr;
            const Wr = JSON.stringify({
              texture: "string" === typeof rr.texture ? rr.texture : "smokePuff",
              sx: rr.sx,
              minLifeTime: rr.minLifeTime,
              maxLifeTime: rr.maxLifeTime,
              minSize: rr.minSize,
              maxSize: rr.maxSize,
              minEmitPower: rr.minEmitPower,
              maxEmitPower: rr.maxEmitPower,
              emitRate: wQ(rr.emitRate),
              gravity: null !== (Sr = rr.gravity) && void 0 !== Sr ? Sr : gQ,
              dir1: null !== (Qr = rr.dir1) && void 0 !== Qr ? Qr : RQ,
              dir2: null !== (Zr = rr.dir2) && void 0 !== Zr ? Zr : RQ,
              colorGradients: rr.colorGradients,
              blendMode: rr.blendMode
            });
            return GQ.encode(Wr)
          }(rr), "createParticles", this.deps.onError);
        return jr && (0, Ur.ef)(Zr, 0, ar, 0, Ur.qd.PresetNone, 0, kQ, AQ, jr) ? (this.nextKey++, this.live++, this.started = !0, new DQ(this, this.session, ar, rr, Wr)) : bQ
      }
      playEffect(rr) {
        const Sr = this.sink(),
          {
            pos1: Qr,
            pos2: Zr
          } = rr;
        if (!Sr || !Qr || !Zr) return;
        for (let ar = 0; ar < 3; ar++) kQ[ar] = Math.min(Qr[ar], Zr[ar]), AQ[ar] = Math.abs(Zr[ar] - Qr[ar]);
        if (!Number.isFinite(kQ[0] + kQ[1] + kQ[2] + AQ[0] + AQ[1] + AQ[2])) return;
        const Wr = oQ(GQ.encode(JSON.stringify(rr, FQ)), "playParticleEffect", this.deps.onError);
        Wr && (0, Ur._e)(Sr, 0, 0, Ur.qd.PresetNone, Ur.qd.HasBox, 0, kQ, AQ, Wr)
      }
      burstPreset(rr, Sr, Qr) {
        const Zr = this.sink(),
          Wr = Math.min(Math.floor(Qr), Ur.qd.MaxBurst);
        if (!Zr || !Object.hasOwn(Ur.Qb, rr) || !(Wr > 0)) return;
        const ar = MQ;
        for (let jr = 0; jr < 3; jr++) kQ[jr] = Sr[jr] - ar / 2, AQ[jr] = ar;
        Number.isFinite(kQ[0] + kQ[1] + kQ[2]) && (0, Ur._e)(Zr, 0, 0, Ur.Qb[rr], Ur.qd.HasBox, Wr, kQ, AQ, CQ)
      }
      sessionEnded() {
        this.session++;
        const rr = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !rr || (0, Ur.gf)(rr, 0)
      }
      sinkFor(rr) {
        return rr === this.session ? this.deps.cmd() : null
      }
      stop(rr, Sr) {
        const Qr = this.sinkFor(rr);
        Qr && (0, Ur.jf)(Qr, 0, Sr) && this.live--
      }
    }
    class DQ {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.owner = rr, this.session = Sr, this.key = Qr, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Wr[0]), Math.abs(Wr[1]), Math.abs(Wr[2])], this.rate = wQ(Zr.emitRate), this.emitted = this.rate > 0;
        const ar = Zr.maxLifeTime * qQ * 1e3 + 250;
        this.stopDelayMs = ar >= 0 ? Math.min(ar, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(rr, Sr) {
        const Qr = this.sink();
        if (Qr) {
          if (Sr)
            for (let rr = 0; rr < 3; rr++) this.half[rr] = Math.abs(Sr[rr]);
          cQ(rr, this.half) && (0, Ur.nf)(Qr, 0, this.key, Ur.qd.HasBox, kQ, AQ, CQ)
        }
      }
      setEmitRate(rr) {
        const Sr = this.sink(),
          Qr = wQ(rr);
        Sr && Qr !== this.rate && (0, Ur.nf)(Sr, 0, this.key, 0, gQ, gQ, iQ(Qr)) && (this.rate = Qr, this.emitted ||= Qr > 0)
      }
      emit(rr) {
        const Sr = this.sink(),
          Qr = Math.min(Math.floor(rr), Ur.qd.MaxBurst);
        Sr && Qr > 0 && (0, Ur._e)(Sr, 0, this.key, Ur.qd.PresetNone, 0, Qr, gQ, gQ, CQ) && (this.emitted = !0)
      }
      emitPoints(rr, Sr, Qr) {
        const Zr = this.sink(),
          Wr = Math.min(Math.floor(Qr), Ur.qd.MaxPoints, Math.floor(Sr.length / 4));
        if (!Zr || !(Wr > 0) || !Number.isFinite(rr[0] + rr[1] + rr[2])) return;
        const ar = new Uint8Array(Sr.buffer, Sr.byteOffset, Wr * Ur.qd.PointBytes);
        (0, Ur.af)(Zr, 0, this.key, Wr, rr, ar) && (this.emitted = !0)
      }
      setDirections(rr, Sr) {
        const Qr = this.sink();
        if (!Qr || !Number.isFinite(rr[0] + rr[1] + rr[2] + Sr[0] + Sr[1] + Sr[2])) return;
        const Zr = GQ.encode(JSON.stringify({
          dir1: [rr[0], rr[1], rr[2]],
          dir2: [Sr[0], Sr[1], Sr[2]]
        }));
        (0, Ur.nf)(Qr, 0, this.key, 0, gQ, gQ, Zr)
      }
      stop() {
        const rr = this.sink();
        this.stopped = !0, rr && (this.emitted ? (this.rate > 0 && (0, Ur.nf)(rr, 0, this.key, 0, gQ, gQ, iQ(0)), setTimeout((() => {
          this.free()
        }), this.stopDelayMs)) : this.free())
      }
      dispose() {
        this.stopped = !0, this.free()
      }
      free() {
        this.freed || (this.freed = !0, this.owner.stop(this.session, this.key))
      }
    }
    const dQ = dS.o,
      sQ = new TextDecoder;

    function uQ(rr, Sr) {
      const {
        serverIds: Qr,
        kinds: Zr
      } = rr;
      let Wr = 0;
      for (let ar = 0; ar < Qr.length; ar++) {
        const rr = Qr[ar];
        if (rr !== Ur.Nc && !Kr(Zr[ar])) {
          if (Wr === Sr.length) {
            const rr = new Int32Array(Math.max(64, 2 * Wr));
            rr.set(Sr), Sr = rr
          }
          Sr[Wr++] = rr
        }
      }
      return {
        ids: Sr,
        count: Wr
      }
    }

    function rZ(rr, Sr) {
      return rr.length >= Sr ? rr : new Int32Array(Math.max(Sr, 2 * rr.length))
    }

    function SZ(rr, Sr, Qr, Zr) {
      for (let Wr = 0; Wr < Qr; Wr += 4096) {
        const ar = Math.min(4096, Qr - Wr),
          jr = rr.memoryView(Int32Array, rr.scratch(), ar, "entity_info_batch's ids");
        if (!jr) return !1;
        jr.set(Sr.subarray(Wr, Wr + ar));
        const Ir = rr.queries.entityInfoBatch(ar),
          fr = 4294967295 === Ir ? null : rr.memoryData(rr.scratch(), Ir, 4, "entity_info_batch's records");
        if (!fr) return !1;
        for (let rr = 0; rr + Ur.Gb.BYTES <= Ir;) {
          const Sr = Ur.Gb.len(fr, rr);
          Zr(Ur.Gb.serverId(fr, rr), QZ(fr, rr, Sr)), rr += Ur.Gb.BYTES + (0, mr.Ke)(Sr)
        }
      }
      return !0
    }

    function QZ(rr, Sr, Qr) {
      var Zr, Wr, ar;
      const jr = Ur.Gb.kind(rr, Sr),
        Ir = 0 === jr ? null : yr(jr);
      if (null === Ir) return null;
      const fr = Ur.Gb.variation(rr, Sr),
        Er = Ur.Gb.pose(rr, Sr),
        pr = Ur.Gb.meta(rr, Sr),
        xr = Ur.Gb.mesh(rr, Sr),
        mr = 0 !== (Ur.Gb.flags(rr, Sr) & Ur.Db.HasOpts),
        Nr = dQ[Ir];
      return Object.freeze({
        type: Ir,
        variation: fr === Ur.Sc ? void 0 : null !== (Zr = null !== (Wr = null === Nr || void 0 === Nr ? void 0 : Nr[fr]) && void 0 !== Wr ? Wr : null === Nr || void 0 === Nr ? void 0 : Nr[0]) && void 0 !== Zr ? Zr : "default",
        pose: Er === Ur.Vb ? void 0 : null !== (ar = Ur.rb[Er]) && void 0 !== ar ? ar : Ur.rb[0],
        metaInfo: pr === Ur.Vb ? void 0 : Ur.Ac[pr],
        meshKind: xr === Ur.Vb ? void 0 : Ur.xc[xr],
        meshOpts: mr ? sQ.decode(new Uint8Array(rr.buffer, rr.byteOffset + Sr + Ur.Gb.BYTES, Qr)) : void 0
      })
    }
    const ZZ = 1,
      WZ = 2;
    class aZ {
      constructor(rr) {
        this.deps = rr, this.wanted = 0, this.wI = !1, this.refused = !1
      }
      get on() {
        return this.wI
      }
      want(rr, Sr) {
        this.wanted = Sr ? this.wanted | rr : this.wanted & ~rr;
        const Qr = 0 !== this.wanted;
        if (Qr === this.wI) return;
        const Zr = this.deps.cmd();
        null !== Zr ? (0, Ur.kg)(Zr, 0, Qr ? 1 : 0) ? (this.wI = Qr, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.wI = !1
      }
    }
    class jZ {
      constructor(rr) {
        this.deps = rr, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(rr) {
        var Sr;
        return this.complete || this.fill(), null !== (Sr = this.entries.get("string" === typeof rr ? rr : String(rr))) && void 0 !== Sr ? Sr : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(rr) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const rr = new Int32Array(2 * this.pending.length);
            rr.set(this.pending), this.pending = rr
          }
          this.pending[this.pendingCount++] = rr
        }
      }
      removed(rr) {
        this.entries.size > 0 && this.entries.delete(String(rr))
      }
      refresh() {
        const rr = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (rr > 0 && this.complete) {
          const {
            api: Sr
          } = this.deps;
          let Qr = 0;
          const Zr = this.ids = rZ(this.ids, rr);
          for (let Wr = 0; Wr < rr; Wr++) {
            const rr = this.pending[Wr],
              ar = Sr.indexById.get(rr);
            void 0 === ar || Kr(Sr.kinds[ar]) ? this.entries.delete(String(rr)) : Zr[Qr++] = rr
          }
          Qr > 0 && !this.batch(Zr, Qr) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(ZZ, !1)
      }
      fill() {
        const {
          api: rr
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: rr
          } = this.deps, Sr = rr.on;
          rr.want(ZZ, !0), !Sr && rr.on && (this.refill = this.midFrame)
        }
        const {
          ids: Sr,
          count: Qr
        } = uQ(rr, this.ids);
        this.ids = Sr, Qr > 0 && !this.batch(Sr, Qr) && (this.refill = !0)
      }
      batch(rr, Sr) {
        return SZ(this.deps.api, rr, Sr, ((rr, Sr) => {
          null === Sr ? this.entries.delete(String(rr)) : this.entries.set(String(rr), Sr)
        }))
      }
    }
    var IZ = Qr(5617);

    function fZ(rr) {
      if ("message" !== rr.type || rr.xj !== IZ.pc.NewClientOptions || rr.payloadKind !== mr.nc.Msgpack) return null;
      const Sr = (0, kr.d)(rr.payload);
      if (null === Sr || "object" !== typeof Sr || Array.isArray(Sr)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Sr
    }
    var EZ = Qr(1287),
      pZ = Qr(38193);

    function xZ(rr, Sr, Qr, Zr, Wr, ar, Ir) {
      var fr, Er, pr;
      switch (rr) {
        case Ur.Vd.ToggleMenu: {
          const rr = Ur.C[Sr];
          jr.i.Jp("toggleMenu", void 0 === rr ? "inventory" : `inventory|${rr}`);
          break
        }
        case Ur.Vd.EditBoard:
          jr.i.Jp("EditBoard", {
            pos: 0 === Sr ? null : Qr
          });
          break;
        case Ur.Vd.EditCodeBlock:
        case Ur.Vd.ViewCodeBlock:
          jr.i.Jp("EditCodeBlock", {
            pos: Qr,
            canChangePos: rr === Ur.Vd.EditCodeBlock
          });
          break;
        case Ur.Vd.EditCustomLobbyBlock:
          jr.i.Jp("EditCustomLobbyBlock", {
            pos: Qr
          });
          break;
        case Ur.Vd.OpenIronChest:
          jr.i.Jp("OpenIronChest", {
            pos: Qr
          });
          break;
        case Ur.Vd.EditNameTag:
          jr.i.Jp("EditNameTag", null !== (fr = null === (Er = Wr.wI()) || void 0 === Er || null === (pr = Er.attributes.customAttributes) || void 0 === pr ? void 0 : pr.text) && void 0 !== fr ? fr : "");
          break;
        case Ur.Vd.EditBook: {
          var xr, mr, tr;
          const rr = null === (xr = Wr.wI()) || void 0 === xr ? void 0 : xr.attributes;
          jr.i.Jp("EditBook", {
            pages: (0, EZ.Y)(null === rr || void 0 === rr || null === (mr = rr.customAttributes) || void 0 === mr ? void 0 : mr.pages),
            title: null !== (tr = null === rr || void 0 === rr ? void 0 : rr.customDisplayName) && void 0 !== tr ? tr : "Title",
            isPublished: !(null === rr || void 0 === rr || !rr.customDescription)
          });
          break
        }
        case Ur.Vd.CantChangeBlock:
          ! function(rr, Sr) {
            const Qr = Sr.getClientOption("cantChangeError"),
              Zr = Sr.getClientOption(rr ? "cantBuildError" : "cantBreakError"),
              Wr = rr ? Qr : Zr;
            (Sr.getClientOption("canChange") || Wr || "You cannot modify this block" !== Qr) && jr.i.Jp("showBottomMessage", {
              message: Zr || Qr,
              type: "Error"
            })
          }(1 === Sr, ar);
          break;
        case Ur.Vd.MiddleBarStart:
          jr.i.Jp("middleScreenBarInitiate", {
            duration: Zr,
            ha: 1 === Qr[0],
            horizBarRemOffset: Sr
          });
          break;
        case Ur.Vd.MiddleBarStop:
          jr.i.Jp("middleScreenBarRemove");
          break;
        case Ur.Vd.Hitmarker:
          jr.i.Jp("localGunHitmarker", {
            GS: 1 === Sr
          });
          break;
        case Ur.Vd.ShotsLeft:
          jr.i.Jp("localPlayerNewShotsLeft", Zr);
          break;
        case Ur.Vd.AimingOverlay:
          jr.i.Jp("aimingOverlay", 3 === (3 & Sr) ? "sniper" : "none");
          break;
        case Ur.Vd.BottomMessage:
          jr.i.Jp("showBottomMessage", JSON.parse(Ir()));
          break;
        case Ur.Vd.Crosshair:
          Wr.inaccuracy = (0, Ar.f)(Zr), (0, pZ.b)().crosshairAccuracy(Wr.inaccuracy);
          break;
        case Ur.Vd.ChargeStage:
          break;
        case Ur.Vd.EmoteWheelClose:
          jr.i.Jp("requestEmoteWheelClose");
          break;
        case Ur.Vd.BlockMined:
          jr.i.Jp("localBlockMined");
          break;
        default:
          throw new Nr.d(`UiEvent of no kind: what ${rr}`)
      }
    }
    var mZ = Qr(39496),
      NZ = Qr(35459),
      UZ = Qr(2119),
      tZ = Qr(38278),
      hZ = Qr(35472),
      zZ = Qr(5602);
    const YZ = 10,
      nZ = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      eZ = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      KZ = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function yZ(rr, Sr) {
      let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const ar = () => (Qr = (0, UZ.n)(Qr, Sr()), Qr);
      return {
        current: ar,
        watch(Sr) {
          const Qr = () => {
              Sr(ar())
            },
            jr = [rr.watch(Qr)];
          return null !== Zr && jr.push((0, UZ.p)((rr => {
            rr.some(Zr) && Qr()
          }))), null !== Wr && jr.push(Wr(Qr)), () => {
            for (const rr of jr) rr()
          }
        }
      }
    }

    function BZ(rr) {
      return rr && {
        name: rr.name,
        amount: rr.amount,
        attributes: rr.attributes
      }
    }
    const TZ = new WeakMap;

    function vZ(rr) {
      let Sr = TZ.get(rr);
      return void 0 === Sr && (Sr = (0, hZ.creativeItemIds)().map((Sr => ({
        name: rr.nameOfId(Sr),
        amount: rr.isStackableId(Sr) ? 1 : null,
        attributes: (0, mZ.d)("Gun" === (0, hZ.itemTypeOf)(Sr) ? {
          type: "Gun",
          clipSize: (0, hZ.clipSizeOf)(Sr)
        } : void 0)
      }))), TZ.set(rr, Sr)), Sr
    }

    function OZ(rr, Sr, Qr, Zr) {
      const Wr = Sr => (rr.flush(Zr), Sr),
        ar = Qr => {
          var Zr, Wr, ar, jr, Ir, fr, Er;
          const pr = rr.slot(Qr);
          if (!pr) return null;
          const {
            rootName: xr,
            metaStr: mr
          } = Sr.getMetaInfo(pr.name);
          return {
            name: pr.name,
            amount: pr.amount,
            attributes: pr.attributes,
            instance: rr.instance(Qr),
            displayName: null !== (Zr = pr.attributes.customDisplayName) && void 0 !== Zr ? Zr : Sr.getDisplayName(xr),
            requiresAmmo: "RequiresAmmo" === mr,
            clipSize: null !== (Wr = null !== (ar = null === (jr = pr.attributes.customAttributes) || void 0 === jr || null === (Ir = jr.gunStats) || void 0 === Ir ? void 0 : Ir.clipSize) && void 0 !== ar ? ar : null === (fr = Sr.getGunStats(xr)) || void 0 === fr ? void 0 : fr.clipSize) && void 0 !== Wr ? Wr : null === (Er = pr.typeObj) || void 0 === Er ? void 0 : Er.clipSize
          }
        },
        Ir = function(rr, Sr) {
          let Qr = null,
            Zr = {
              focus: null,
              recipes: [],
              detail: null
            },
            Wr = -1;
          const ar = new Set;
          return {
            read() {
              var ar, jr;
              if (null === Qr) return null !== Zr.focus && (Zr = {
                ...Zr,
                focus: null
              }), Zr;
              if (Zr.focus === Qr && Wr === rr.changes) return Zr;
              if (Wr = rr.changes, 0 === rr.length) return Zr = {
                focus: Qr,
                recipes: [],
                detail: null
              }, Zr;
              let Ir = 0;
              if (null !== Qr.recipe) try {
                Ir = Sr.getItemId(Qr.recipe.name)
              } catch {}
              const fr = rr.craftingView(Qr.station, Ir, null !== (ar = null === (jr = Qr.recipe) || void 0 === jr ? void 0 : jr.mI) && void 0 !== ar ? ar : 0);
              return Zr = null === fr ? {
                focus: Qr,
                recipes: [],
                detail: null
              } : function(rr, Sr, Qr) {
                let Zr = Ur.db.BYTES;
                const Wr = [];
                for (let pr = Ur.db.recipes(rr, 0); pr > 0; pr--) {
                  const Qr = Ur.Z.flags(rr, Zr),
                    ar = {
                      name: Sr.nameOfId(Ur.Z.item(rr, Zr)),
                      mI: Ur.Z.recipe(rr, Zr),
                      requires: [],
                      produces: Ur.Z.produces(rr, Zr),
                      haveIngredients: 0 !== (Qr & Ur.Y.HaveIngredients),
                      listed: 0 !== (Qr & Ur.Y.Listed)
                    };
                  let jr = Ur.Z.requires(rr, Zr);
                  for (Zr += Ur.Z.BYTES; jr > 0; jr--) {
                    const Qr = Ur.ab.items(rr, Zr);
                    ar.requires.push({
                      items: XZ(rr, Zr + Ur.ab.BYTES, Qr, Sr),
                      amt: Ur.ab.amount(rr, Zr)
                    }), Zr += Ur.ab.BYTES + 2 * Qr
                  }
                  Wr.push(ar)
                }
                const ar = Ur.db.flags(rr, 0);
                if (null === Qr.recipe || 0 === (ar & Ur.bb.Detail)) return {
                  focus: Qr,
                  recipes: Wr,
                  detail: null
                };
                const jr = {},
                  Ir = {};
                for (let pr = Ur.db.ingredients(rr, 0); pr > 0; pr--) {
                  const Qr = Ur.X.item(rr, Zr),
                    Wr = Ur.X.from(rr, Zr),
                    ar = Ur.X.amount(rr, Zr);
                  Zr += Ur.X.BYTES;
                  const fr = Wr === Ur.A ? null : XZ(rr, Zr, Wr, Sr);
                  if (null !== fr && (Zr += 2 * Wr), 0 === Qr) continue;
                  const Er = Sr.nameOfId(Qr);
                  jr[Er] = ar, null !== fr && (Ir[Er] = fr)
                }
                const {
                  name: fr,
                  mI: Er
                } = Qr.recipe;
                return {
                  focus: Qr,
                  recipes: Wr,
                  detail: {
                    name: fr,
                    mI: Er,
                    craftAllTimes: Ur.db.craftAllTimes(rr, 0),
                    roomForOne: 0 !== (ar & Ur.bb.RoomForOne),
                    resultStackable: Boolean(Sr.getItemStat(fr, "stackable")),
                    amounts: jr,
                    ingredientsCraftedFrom: Ir
                  }
                }
              }(fr, Sr, Qr), Zr
            },
            setFocus(rr) {
              Qr = rr;
              for (const Sr of [...ar]) Sr()
            },
            watchFocus: rr => (ar.add(rr), () => {
              ar.delete(rr)
            })
          }
        }(rr, Sr);
      return {
        states: {
          inventory: yZ(rr, (() => {
            const Qr = rr.length;
            if (0 === Qr) return nZ;
            const Zr = [];
            for (let Sr = 0; Sr < Ur.bd; Sr++) Zr.push(BZ(rr.slot(Sr)));
            const Wr = rr.slotIcon,
              ar = Zr[rr.selectedSlot];
            0 !== Wr && ar && (Zr[rr.selectedSlot] = {
              ...ar,
              icon: Sr.nameOfId(Wr)
            });
            const jr = !0 === Sr.getClientOption("creative");
            let Ir = [],
              fr = null;
            if (Qr > Ur.bd) {
              for (let Sr = Ur.bd; Sr < Qr; Sr++) Ir.push(BZ(rr.slot(Sr)));
              fr = {
                type: null,
                pos: [...rr.cW],
                numSlots: Qr - Ur.bd,
                ironChest: null
              }
            } else jr && (Ir = vZ(Sr));
            return {
              player: Zr,
              chestOrCreative: Ir,
              chest: fr,
              creative: jr,
              selectedSlot: rr.selectedSlot,
              freeSlots: rr.freeSlots()
            }
          }), (0, UZ.j)("creative")),
          hotbar: yZ(rr, (() => {
            if (0 === rr.length) return eZ;
            const Sr = [];
            for (let rr = 0; rr < YZ; rr++) Sr.push(ar(rr));
            return {
              items: Sr,
              ammo: rr.amountOf("Ammo"),
              selectedSlot: rr.selectedSlot
            }
          }), (0, UZ.h)("DisplayName", "GunStats")),
          crafting: yZ(rr, Ir.read, null, Ir.watchFocus),
          heldItemAim: yZ(rr, (() => {
            var Sr;
            if (!Qr()) return KZ;
            const Zr = null === (Sr = rr.wI()) || void 0 === Sr ? void 0 : Sr.typeObj,
              Wr = "Gun" === (null === Zr || void 0 === Zr ? void 0 : Zr.type);
            return {
              gun: Wr,
              aimable: Wr || !0 === (null === Zr || void 0 === Zr ? void 0 : Zr.showsAimingUi),
              chargeName: "Chargeable" === (null === Zr || void 0 === Zr ? void 0 : Zr.type) ? Zr.name : null
            }
          }), null, (rr => function(rr, Sr) {
            let Qr = rr();
            return (0, zZ.z)((() => {
              const Zr = rr();
              Zr !== Qr && (Qr = Zr, Sr(Zr))
            }))
          }(Qr, rr)))
        },
        events: {
          hotbarSlotRequested: (0, UZ.c)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, UZ.c)("ScrollInventorySlot"),
          numberKeyPressed: (0, UZ.c)("numkeyPressed"),
          inventoryDropRequested: (0, UZ.c)("DropInvenItem"),
          chestToggled: (0, UZ.c)("chestToggleFromServer"),
          chestRefreshed: (0, UZ.c)("chestRefreshedFromServer", lZ),
          inventorySynced: (0, UZ.c)("syncedInvenFromServer", lZ),
          enchantingTableOpened: (0, UZ.c)("enchantingTable", (rr => {
            let {
              position: Qr,
              aI: Zr
            } = rr;
            return {
              position: [...Qr],
              blockName: Sr.getMetaInfo(Zr).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Sr) {
            rr.selectSlot(Sr), rr.flush(Zr)
          },
          removeInventoryItem(Sr) {
            let {
              slot: Qr,
              amount: Zr,
              drop: ar
            } = Sr;
            return Wr(rr.remove(Qr, Zr, ar))
          },
          swapInventorySlots(Sr) {
            let {
              a: Qr,
              b: Zr
            } = Sr;
            return Wr(rr.swap(Qr, Zr))
          },
          moveInventoryItem(Sr) {
            let {
              from: Qr,
              to: Zr,
              amount: ar
            } = Sr;
            return Wr(rr.move(Qr, Zr, ar))
          },
          quickMoveInventoryItem(Sr) {
            let {
              slot: Qr,
              start: Zr,
              end: ar,
              amount: jr
            } = Sr;
            return Wr(rr.quickMove(Qr, Zr, ar, jr))
          },
          closeChest() {
            rr.closeChest(), rr.flush(Zr), jr.i.Jp("chestClosedByPlayer")
          },
          focusCrafting(rr) {
            Ir.setFocus(rr)
          },
          craftRecipe(Sr) {
            let {
              name: Qr,
              mI: Zr,
              times: ar
            } = Sr;
            return Wr(rr.craft(Qr, Zr, ar))
          },
          salvageItem(Sr) {
            let {
              slot: Qr,
              name: Zr,
              amount: ar
            } = Sr;
            return Wr(rr.salvage(Qr, Zr, ar))
          },
          enchantItem(Sr) {
            let {
              slot: Qr,
              level: Zr,
              tablePos: Wr
            } = Sr;
            rr.enchant(Qr, Zr, Wr)
          }
        },
        queries: {
          enchantingOffer(Qr) {
            let {
              slot: Zr,
              blockName: Wr
            } = Qr;
            return function(rr, Sr, Qr, Zr) {
              const Wr = rr.slot(Qr);
              if (!Wr || !Sr.getClientOption("canCraft") || !(0, NZ.p)(Zr) || (0, NZ.l)(Wr.attributes)) return LZ;
              const ar = (0, hZ.enchantmentPerksOf)(Sr.getItemId(Wr.name));
              if (0 === ar.length) return LZ;
              const jr = [];
              for (let Ir = 0; Ir < tZ.d; Ir++) {
                const {
                  commonProb: rr,
                  uncommonProb: Sr,
                  rareProb: Qr,
                  epicProb: Wr,
                  legendaryProb: ar,
                  level: fr
                } = (0, NZ.f)(Zr, Ir);
                jr.push({
                  level: fr,
                  odds: [rr, Sr, Qr, Wr, ar].map((rr => 100 * rr))
                })
              }
              return {
                perks: [...ar],
                options: jr
              }
            }(rr, Sr, Zr, Wr)
          }
        }
      }
    }
    const LZ = Object.freeze({
      perks: [],
      options: []
    });

    function lZ() {
      return null
    }

    function XZ(rr, Sr, Qr, Zr) {
      const Wr = [];
      for (let ar = 0; ar < Qr; ar++) {
        const Qr = rr.getUint16(Sr + 2 * ar, !0);
        0 !== Qr && Wr.push(Zr.nameOfId(Qr))
      }
      return Wr
    }
    class PZ {
      constructor(rr) {
        this.api = rr, this.positions = new Map, this.targeted = {
          e_: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Kh: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(rr) {
        let Sr = this.positions.get(rr);
        return Sr || (this.api.checkValid(rr) || this.api.isLocal(rr) ? (Sr = [NaN, NaN, NaN], this.api.readPosition(rr, Sr), this.positions.set(rr, Sr), Sr) : null)
      }
      xSr() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Sr, Qr] of this.positions) this.api.readPosition(Sr, Qr) || this.api.checkValid(Sr) || this.api.isLocal(Sr) || this.positions.delete(Sr);
        const rr = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Ur.p.playerFlags(rr, 0) & Ur.ud.Breaking) && Ur.p.breakingProgress(rr, 0) >= 0, this.isBreaking)
          for (let Sr = 0; Sr < 3; Sr++) this.breaking[Sr] = Ur.p.breakingPos(rr, 0, Sr)
      }
      refreshTarget() {
        const rr = this.api.apiView,
          Sr = Ur.p.targetBlockId(rr, 0);
        if (this.hasTarget = Sr !== Ur.Oc, this.hasTarget) {
          const Qr = this.targeted;
          Qr.e_ = Sr;
          for (let Sr = 0; Sr < 3; Sr++) Qr.position[Sr] = Ur.p.targetBlock(rr, 0, Sr), Qr.normal[Sr] = Ur.p.targetNormal(rr, 0, Sr), Qr.Kh[Sr] = Ur.p.targetAdjacent(rr, 0, Sr)
        }
      }
      despawned(rr) {
        const Sr = this.positions.get(rr);
        Sr && !this.api.isLocal(rr) && (Sr.fill(NaN), this.positions.delete(rr))
      }
    }
    var HZ = Qr(42491),
      qZ = Qr(42477),
      RZ = Qr(37815),
      gZ = Qr(37927);
    const CZ = 1,
      MZ = 2;
    class GZ {
      constructor() {
        this.game = new gZ.g, this.client = new gZ.g, this.wI = 0, this.movesFly = null
      }
      setGame(rr) {
        if (null === rr || "object" !== typeof rr) return !1;
        const {
          key: Sr,
          value: Qr
        } = rr;
        return "string" === typeof Sr && (this.game.setBooleanType(Sr, Boolean(Qr)), !0)
      }
      setClient(rr, Sr) {
        this.client.setBooleanType(rr, Sr)
      }
      clearGame() {
        this.game = new gZ.g, this.movesFly = null
      }
      setMovesFly(rr) {
        this.movesFly = rr
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? CZ : 0) | (this.client._getTotalBooleanVal() ? MZ : 0)
      }
      write(rr) {
        const Sr = this.perms(),
          {
            movesFly: Qr
          } = this;
        if (Sr === this.wI && null === Qr) return !0;
        let Zr = Ur.Jb.Keep;
        return null !== Qr && (Zr = Qr ? Ur.Jb.On : Ur.Jb.Off), !(!rr || !(0, Ur.ue)(rr, 0, Zr, Sr, Qr ? 1 : 0)) && (this.wI = Sr, this.movesFly = null, !0)
      }
    }
    class kZ {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = rr, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Ir.c,
          get y() {
            return Sr()
          }
        }
      }
      get hasView() {
        const rr = this.api.apiView,
          Sr = Ur.p.viewProj;
        return 0 !== Sr(rr, 0, 3) || 0 !== Sr(rr, 0, 7) || 0 !== Sr(rr, 0, 11) || 0 !== Sr(rr, 0, 15)
      }
      get cameraPosition() {
        const rr = this.api.apiView,
          {
            eye: Sr
          } = this;
        for (let Qr = 0; Qr < 3; Qr++) Sr[Qr] = Ur.p.eye(rr, 0, Qr);
        return Sr
      }
      get cameraDirection() {
        const rr = this.api.apiView,
          Sr = Ur.p.viewProj,
          Qr = Sr(rr, 0, 3),
          Zr = Sr(rr, 0, 7),
          Wr = Sr(rr, 0, 11),
          ar = Math.hypot(Qr, Zr, Wr),
          {
            forward: jr
          } = this;
        return ar > 0 && (jr[0] = Qr / ar, jr[1] = Zr / ar, jr[2] = Wr / ar), jr
      }
      get cameraHeading() {
        return Ur.p.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Ur.p.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Ur.p.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Ur.p.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(rr) {
        this.clip(rr);
        const {
          clipX: Sr,
          clipY: Qr,
          clipW: Zr
        } = this;
        if (Zr > 0) {
          const rr = Sr / Zr * 50,
            Wr = -Qr / Zr * 50;
          return Math.abs(rr) <= this.screenBandPct.x && Math.abs(Wr) <= this.screenBandPct.y ? {
            x: 50 + rr,
            y: 50 + Wr
          } : this.clampToBand(rr, Wr)
        }
        const Wr = this.cameraPosition,
          ar = Math.hypot(rr[0] - Wr[0], rr[1] - Wr[1], rr[2] - Wr[2]),
          jr = this.api.apiView,
          Ir = Ur.p.viewProj,
          fr = ar > 0 ? Sr / ar : 0,
          Er = ar > 0 ? -Qr / ar : 0,
          pr = Math.hypot(Ir(jr, 0, 1), Ir(jr, 0, 5), Ir(jr, 0, 9)),
          xr = fr / Math.hypot(Ir(jr, 0, 0), Ir(jr, 0, 4), Ir(jr, 0, 8)),
          mr = Er / pr,
          Nr = !(Math.abs(xr) >= .001 || Math.abs(mr) >= .001);
        return this.clampToBand(fr, Nr ? -(pr || 1) : Er)
      }
      projectDirectionToScreenPos(rr) {
        if (!this.hasView) return;
        const Sr = this.cameraPosition,
          Qr = this.along;
        for (let Zr = 0; Zr < 3; Zr++) Qr[Zr] = Sr[Zr] + 10 * rr[Zr];
        return this.projectWorldPosToScreenPos(Qr)
      }
      projectWorldPosToViewport(rr) {
        this.clip(rr);
        const {
          clipX: Sr,
          clipY: Qr,
          clipW: Zr
        } = this;
        return Zr > 0 ? {
          x: 50 + Sr / Zr * 50,
          y: 50 - Qr / Zr * 50
        } : null
      }
      clip(rr) {
        const Sr = this.api.apiView,
          Qr = rr[0] - Ur.p.origin(Sr, 0, 0),
          Zr = rr[1] - Ur.p.origin(Sr, 0, 1),
          Wr = rr[2] - Ur.p.origin(Sr, 0, 2),
          ar = Ur.p.viewProj;
        this.clipX = ar(Sr, 0, 0) * Qr + ar(Sr, 0, 4) * Zr + ar(Sr, 0, 8) * Wr + ar(Sr, 0, 12), this.clipY = ar(Sr, 0, 1) * Qr + ar(Sr, 0, 5) * Zr + ar(Sr, 0, 9) * Wr + ar(Sr, 0, 13), this.clipW = ar(Sr, 0, 3) * Qr + ar(Sr, 0, 7) * Zr + ar(Sr, 0, 11) * Wr + ar(Sr, 0, 15)
      }
      clampToBand(rr, Sr) {
        return (0, Ir.d)(rr, Sr, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var AZ = Qr(5623);
    const VZ = new TextEncoder,
      iZ = new Uint8Array(Ur.I * Ur.G);
    class wZ {
      constructor() {
        this.buttons = [], this.wI = !0
      }
      set(rr) {
        this.buttons = rr, this.wI = !1
      }
      attached() {
        this.wI = 0 === this.buttons.length
      }
      write(rr) {
        if (this.wI) return;
        const Sr = new Uint8Array(Ur.I),
          Qr = new Uint8Array(Ur.I);
        let Zr = 0,
          Wr = 0;
        for (const {
            id: ar,
            keycode: jr
          }
          of this.buttons) {
          if (Zr === Ur.I) break;
          const {
            read: rr,
            written: Ir
          } = VZ.encodeInto(ar, iZ.subarray(Wr, Wr + Ur.G));
          if (rr < ar.length) continue;
          const fr = AZ.i[jr];
          Sr[Zr] = "number" === typeof fr ? fr : 0, Qr[Zr] = Ir, Zr++, Wr += Ir
        }
        this.wI = (0, Ur.fe)(rr, 0, Zr, Sr, Qr, iZ.subarray(0, Wr))
      }
    }

    function cZ(rr, Sr, Qr) {
      const Zr = VZ.encode(Sr);
      return Zr.length <= Ur.G && function(rr, Sr, Qr, Zr) {
        return (0, WQ.b)(), (0, Ur.qf)(rr, Sr, Qr, Zr)
      }(rr, 0, Qr ? 1 : 0, Zr)
    }
    var FZ = Qr(40808);
    const oZ = new TextDecoder,
      bZ = new TextEncoder,
      JZ = new Uint8Array(0),
      DZ = [0, 0, 0],
      dZ = {
        off: Ur.yd.Off,
        key: Ur.yd.Key,
        touch: Ur.yd.Touch
      };
    class sZ {
      constructor(rr) {
        var Sr;
        this.options = rr, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new wZ, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = Or.n.DEFAULT, this.pendingZoom = null, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new GZ, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.jx = rr => {
          if ((0, Nr.g)(rr)) throw rr;
          this.onError(rr)
        }, this.api = rr.api, this.tables = rr.tables, this.onError = null !== (Sr = rr.onError) && void 0 !== Sr ? Sr : rr => {
          console.error("Error in client game callback", rr)
        }, this.renderFrame = new kZ(this.api, rr.screenBandY), this.live = new PZ(this.api), this.chunks = new pS(this.api.memory, (() => this.api.apiView)), this.items = new HQ({
          api: this.api,
          tables: rr.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: rr.beforeOp
        });
        const Qr = () => this.stopped() ? null : this.cmd,
          Zr = () => this.sessionLive;
        this.entityInfoWatch = new aZ({
          cmd: Qr,
          onError: this.onError
        }), this.entityInfo = new jZ({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: Zr
        }), this.particles = new JQ({
          cmd: Qr,
          isSessionLive: Zr,
          onError: this.onError
        }), this.clientApi = new yQ({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: rr.tables,
          cmd: Qr,
          sendCmd: () => this.sendCmd(),
          isSessionLive: Zr,
          beforeWrite: () => {
            var Sr;
            if (this.stopped()) return !1;
            const Qr = this.generation;
            return !1 !== (null === (Sr = rr.beforeWrite) || void 0 === Sr ? void 0 : Sr.call(rr)) && Qr === this.generation
          },
          playerDbId: () => {
            const rr = this.session;
            if (null === rr) throw new Error("No game session has started, so the local player has no DB id");
            return rr.playerDbId
          },
          playSound: rr.playSound,
          preloadSounds: rr.preloadSounds,
          setLocalOptions: rr.setLocalOptions,
          hasPackModel: rr.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new br({
          api: this.api,
          reportError: Sr => {
            var Qr;
            this.jx(Sr), null === (Qr = rr.reportCameraFault) || void 0 === Qr || Qr.call(rr, Sr)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: rr.cameraScreen,
          showFacing: rr.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= OZ(this.items, this.tables, (() => this.localPlayerAlive()), this.jx), this.itemSources
      }
      get isSessionLive() {
        return this.sessionLive
      }
      get isCoreRunning() {
        return this.sessionLive && !this.stopped()
      }
      localPlayerAlive() {
        return !this.sessionLive || this.stopped() || !1 !== this.api.isAlive(this.boundId)
      }
      localDeaths() {
        return this.isCoreRunning ? this.api.localDeaths() : null
      }
      clickCodeBlock(rr) {
        const Sr = this.sessionLive ? this.sendCmd() : null;
        return null !== Sr && (Qr = Sr, Zr = 0, Wr = rr[0], ar = rr[1], jr = rr[2], (0, WQ.b)(), (0, Ur.ke)(Qr, Zr, Wr, ar, jr));
        var Qr, Zr, Wr, ar, jr
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(rr) {
        const Sr = this.liveCmd();
        return null === Sr ? (this.pendingZoom = rr, !1) : (this.pendingZoom = null, (0, Ur.bg)(Sr, 0, rr, 1))
      }
      Qq(rr) {
        const Sr = this.stopped() ? null : this.cmd;
        return null !== Sr && (0, Ur.Yf)(Sr, 0, rr ? 1 : 0)
      }
      respawn() {
        const rr = this.sessionLive ? this.sendCmd() : null;
        return null !== rr && (Sr = rr, Qr = 0, (0, WQ.b)(), (0, Ur.Cf)(Sr, Qr));
        var Sr, Qr
      }
      bindCustomButtonKeys(rr) {
        this.customButtons.set(rr)
      }
      pressCustomButton(rr, Sr) {
        const Qr = this.sessionLive ? this.sendCmd() : null;
        return null !== Qr && cZ(Qr, rr, Sr)
      }
      padMove(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this.liveCmd();
        return null !== jr && (0, Ur.Xe)(jr, 0, rr, Sr, Qr, Zr, Wr, ar)
      }
      thirdPersonFor(rr) {
        const Sr = this.liveCmd();
        return null !== Sr && (0, Ur.hg)(Sr, 0, null !== rr && void 0 !== rr ? rr : 1 / 0)
      }
      send(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== Zr && aQ(Zr, Qr ? mr.Dd : 0, rr, (0, kr.e)(Sr))
      }
      socketAttached(rr) {
        this.openSocket = rr, this.socketLeftSinceAttach = !1
      }
      socketDetached(rr) {
        this.openSocket === rr && (this.openSocket = 0)
      }
      socketLeft() {
        this.openSocket = 0, this.socketLeftSinceAttach = !0
      }
      sendCmd() {
        return this.socketLeftSinceAttach || this.stopped() ? null : this.cmd
      }
      liveCmd() {
        return this.isCoreRunning ? this.cmd : null
      }
      attach(rr) {
        const Sr = () => rr.isStopped;
        this.stopped = Sr, this.cmd = rr.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const Qr = this.api.apiView;
        this.overflowGen = Ur.p.eventOverflowGen(Qr, 0), this.resyncOwed = 0 !== Ur.p.eventOverflowMask(Qr, 0), rr.setGameHost(this), rr.setEventWalker((rr => {
          this.api.walk(rr, this, Sr)
        }))
      }
      watchPromptPick(rr) {
        this.promptWatch = rr, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : uZ(Ur.p.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Ur.dc.None : Ur.p.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Ur.p.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === rr || rr >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, rr, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(rr) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(rr)
      }
      netEvent(rr) {
        "connection" === rr.type ? rr.phase === mr.G.Activated && rr.conn !== this.activeConn && rr.conn > this.closedThrough ? (this.endSession(), this.activeConn = rr.conn, this.endGameGrants(), this.dropGameCamera()) : rr.phase !== mr.G.Left && rr.phase !== mr.G.Closed || rr.conn !== this.activeConn ? rr.phase === mr.G.Resumed && 0 !== this.activeConn && rr.conn > this.closedThrough && (this.activeConn = rr.conn) : this.closeGame() : rr.conn === this.activeConn && 0 !== rr.conn && (rr.xj === qZ.s ? this.gunHit(rr.payload) : rr.xj === IZ.pc.EditItemCraftingRecipes || rr.xj === qZ.R ? this.items.touch() : (this.serverOptions(rr), this.gameMessage(rr)));
        const Sr = this.options.onNetEvent;
        Sr && this.guard((() => {
          Sr(rr)
        }))
      }
      serverOptions(rr) {
        const Sr = this.options.serverOptions,
          Qr = Sr ? this.decoded(fZ, rr) : null;
        if (Sr && Qr) {
          this.guard((() => {
            Sr.applyNewClientOptions(Qr)
          }));
          const rr = Qr.holdThirdPerson;
          void 0 !== rr && (this.thirdPersonWanted = rr, this.writeOwedThirdPerson())
        }
      }
      gameMessage(rr) {
        let Sr = null;
        try {
          Sr = function(rr) {
            if ("message" !== rr.type || rr.xj !== IZ.pc.GameCodeMessage || rr.payloadKind !== mr.nc.Msgpack) return null;
            const Sr = (0, kr.d)(rr.payload);
            if (null === Sr || "object" !== typeof Sr || "string" !== typeof Sr.messageType) throw new Error("GameCodeMessage without a messageType");
            return Sr
          }(rr)
        } catch (Qr) {
          this.sessionLive && this.onError(Qr)
        }
        if (Sr) {
          const {
            messageType: rr,
            data: Qr
          } = Sr;
          if ((0, Pr.e)(rr)) return void this.guard((() => {
            (0, Pr.b)(rr, Qr)
          }));
          "freeCamPerms" === rr && this.freeCam.setGame(Qr) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Sr => {
            Sr.onReceivedMessageFromServer(rr, Qr)
          }))
        }
      }
      decoded(rr, Sr) {
        try {
          return rr(Sr)
        } catch (Qr) {
          return this.onError(Qr), null
        }
      }
      setClientFreeCameraGrant(rr, Sr) {
        this.freeCam.setClient(rr, Sr), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(rr) {
        this.freeCam.setMovesFly(rr), this.writeFreeCam()
      }
      setBlockHighlight(rr) {
        this.highlight = rr, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedThirdPerson() {
        const rr = this.thirdPersonWanted;
        rr !== this.thirdPersonHeld && this.thirdPersonFor(rr ? void 0 : 0) && (this.thirdPersonHeld = rr)
      }
      writeOwedHighlight() {
        const rr = this.liveCmd();
        if (null === rr || !this.highlightOwed) return;
        const Sr = this.highlight;
        this.highlightOwed = null === Sr ? !(0, Ur.Ge)(rr, 0, DZ, DZ, 0) : !(0, Ur.Ge)(rr, 0, Sr.pos, Sr.normal, 1)
      }
      localPlayerBound(rr) {
        var Sr, Qr;
        if (0 === this.activeConn || this.sessionLive && rr === this.boundId) return;
        const Zr = this.sessionLive;
        let Wr, ar, jr, Ir;
        this.endSession(), Zr && this.restartGameCamera();
        try {
          var fr;
          this.session = null;
          const rr = this.options.sessionInfo(this.activeConn);
          if (this.session = rr, !rr) return;
          Wr = rr.gameNameWithVariation, ar = null !== (fr = (0, Lr.Hb)(Wr)) && void 0 !== fr ? fr : void 0, jr = (0, lr.w)(rr.lobbyName), Ir = (0, lr.M)(rr.lobbyName)
        } catch (Yr) {
          return void this.onError(Yr)
        }
        const Er = {
          localPlayerId: String(rr)
        };
        let pr = {},
          xr = [];
        try {
          var mr, Nr;
          pr = null !== (mr = null === (Nr = this.options.gameFactory((0, Lr.Mb)(Wr))) || void 0 === Nr ? void 0 : Nr(Ir, jr, ar, Er)) && void 0 !== mr ? mr : {}
        } catch (Yr) {
          this.jx(Yr)
        }
        try {
          var Ur, tr;
          xr = (0, Xr.c)(null === (Ur = (tr = this.options).defaultPlugins) || void 0 === Ur ? void 0 : Ur.call(tr, Ir, jr, ar, Er), pr.plugins)
        } catch (Yr) {
          this.jx(Yr)
        }
        const hr = [pr, ...xr];
        this.owners = hr, this.tickers = hr.filter((rr => void 0 !== rr.lx)), this.renderers = hr.filter((rr => void 0 !== rr.onAfterRender)), this.receivers = hr.filter((rr => void 0 !== rr.onReceivedMessageFromServer)), this.writeAltVeto(hr), this.writeHooks(hr), this.writePublicLobby(Ir), this.writeLocalDbId(null !== (Sr = null === (Qr = this.session) || void 0 === Qr ? void 0 : Qr.playerDbId) && void 0 !== Sr ? Sr : null), this.boundId = rr, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(hr, (rr => {
          var Sr;
          null === (Sr = rr.onCreate) || void 0 === Sr || Sr.call(rr, this.clientApi)
        }));
        const zr = this.generation;
        setTimeout((() => {
          zr === this.generation && !0 === this.tables.getClientOption("creative") && vZ(this.tables)
        }), 0)
      }
      chunkSlot(rr, Sr, Qr, Zr, Wr, ar) {
        this.chunks.apply(rr, Sr, Qr, Zr, Wr, ar)
      }
      entityAdded(rr) {
        var Sr;
        this.entityInfo.stale(rr), null === (Sr = this.options.replayEntities) || void 0 === Sr || Sr.entityAdded(rr)
      }
      entityInfoChanged(rr) {
        var Sr;
        this.entityInfo.stale(rr), null === (Sr = this.options.replayEntities) || void 0 === Sr || Sr.entityInfoChanged(rr)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const rr = performance.now();
          this.round(this.tickers, rW), (0, zZ.e)(performance.now() - rr)
        }
      }
      afterWalk(rr) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight(), this.writeOwedThirdPerson();
        const Sr = this.options.replayEntities;
        Sr && this.guard((() => {
          this.entityInfoWatch.want(WZ, Sr.wantsWatch), Sr.flush(this.entityInfoWatch.on)
        }));
        const Qr = this.api.apiView,
          Zr = Ur.p.frameMs(Qr, 0);
        RZ.k.frame(Zr, Ur.p.heading(Qr, 0), Ur.p.pitch(Qr, 0), RZ.f[rr]);
        const Wr = (0, zZ.p)(rr, Zr);
        if (null !== Wr) {
          const rr = this.renderFrame;
          this.guard((() => {
            (0, pZ.b)().turnDamageIndicators(rr.cameraHeading), (0, pZ.b)().turnSoundCues(rr.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(Wr)
          })), this.round(this.renderers, (Sr => {
            Sr.onAfterRender(Wr, rr)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== Wr)
        } catch (jr) {
          this.jx(jr)
        }
        this.showZoom(), this.items.flush(this.jx), this.writePromptWatch(), this.writeCustomButtons();
        const ar = this.ticks;
        this.ticks = 0, (0, zZ.m)(ar, rr, Wr, this.jx)
      }
      entityRemoved(rr) {
        this.live.despawned(rr), this.entityInfo.removed(rr)
      }
      ackEventOverflow() {
        const rr = this.api.apiView,
          Sr = Ur.p.eventOverflowGen(rr, 0),
          Qr = Sr - this.overflowGen >>> 0;
        if (0 === Qr && !this.resyncOwed) return;
        this.overflowGen = Sr;
        const Zr = Ur.p.eventOverflowMask(rr, 0),
          Wr = this.cmd;
        0 === Zr || null === Wr || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Ur.re)(Wr, 0, Zr);
        const ar = this.options.onEventOverflow;
        0 !== Qr && ar && this.guard((() => {
          ar(Zr, Qr)
        }))
      }
      gameCall(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        if (rr === Ur.Tb.Director) try {
          return this.scriptedCamera.call(Sr, Qr, Zr, Wr, ar, jr)
        } catch (Er) {
          return this.jx(Er), Ur.eb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return rr === Ur.Tb.AltVeto ? Ur.g.Allow : 0;
        try {
          return this.callGames(rr, Sr, Qr, Zr, Wr, ar, jr, Ir)
        } catch (Er) {
          throw (0, Nr.g)(Er) && (this.fault = Er), Er
        }
      }
      takeFault() {
        const rr = this.fault;
        return this.fault = void 0, rr
      }
      callGames(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: fr
        } = this.options, Er = String(this.boundId);
        switch (rr) {
          case Ur.Tb.AltVeto:
          case Ur.Tb.AltAction: {
            const Ir = 0 !== jr,
              [pr, xr, mr] = Ir ? [Sr, Qr, Zr] : [void 0, void 0, void 0],
              Nr = Ir ? fr.nameOfId(Wr) : "Air",
              tr = uZ(ar);
            if (rr === Ur.Tb.AltAction) return this.first((rr => {
              var Sr;
              return null === (Sr = rr.onPlayerAltAction) || void 0 === Sr ? void 0 : Sr.call(rr, Er, pr, xr, mr, Nr, tr)
            })), 0;
            const hr = this.first((rr => {
              var Sr;
              return null === (Sr = rr.onPlayerAttemptAltAction) || void 0 === Sr ? void 0 : Sr.call(rr, Er, pr, xr, mr, Nr, tr)
            }));
            return "preventAction" === hr ? Ur.g.Prevent : "preventPlacement" === hr ? Ur.g.PreventPlacement : Ur.g.Allow
          }
          case Ur.Tb.Click: {
            const rr = Ir,
              pr = 0 !== (rr & Ur.T.Alt),
              xr = 0 !== (rr & Ur.T.HasPos),
              mr = xr ? fr.nameOfId(Wr) : "Air",
              [Nr, tr, hr] = xr ? [Sr, Qr, Zr] : [null, null, null],
              zr = uZ(ar),
              Yr = 0 !== (rr & Ur.T.Up),
              nr = uZ(jr);
            if (0 === (rr & Ur.T.AttackOnly) && this.first((rr => {
                var Sr, Qr;
                return Yr ? null === (Sr = rr.onPlayerClickUp) || void 0 === Sr ? void 0 : Sr.call(rr, Er, pr, Nr, tr, hr, mr, zr) : null === (Qr = rr.onPlayerClick) || void 0 === Qr ? void 0 : Qr.call(rr, Er, pr, Nr, tr, hr, mr, zr)
              })), !Yr && !pr && null !== nr) {
              const rr = this.clientApi.getPositionView(nr),
                Sr = rr ? [rr[0], rr[1], rr[2]] : [0, 0, 0];
              this.first((rr => {
                var Qr;
                return null === (Qr = rr.onPlayerAttackEntity) || void 0 === Qr ? void 0 : Qr.call(rr, Er, nr, Sr)
              }))
            }
            return 0
          }
          case Ur.Tb.ChangeBlock: {
            const rr = fr.nameOfId(Wr),
              jr = fr.nameOfId(ar);
            return this.first((Wr => {
              var ar;
              return null === (ar = Wr.onPlayerChangeBlock) || void 0 === ar ? void 0 : ar.call(Wr, Er, Sr, Qr, Zr, rr, jr)
            })), 0
          }
          case Ur.Tb.DropItem: {
            const rr = fr.nameOfId(Sr);
            return this.first((Sr => {
              var Wr;
              return null === (Wr = Sr.onPlayerDropItem) || void 0 === Wr ? void 0 : Wr.call(Sr, Er, rr, Qr, Zr)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${rr}`)), 0
        }
      }
      changeBlockFail(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = Wr === Ur.Gc ? null : oZ.decode(this.api.eventBytes(ar, Math.min(Wr, jr)));
        this.failures.push({
          zS: [rr, Sr, Qr],
          YS: Zr,
          nS: Ir
        })
      }
      changeBlockFailEnd() {
        const rr = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Sr => {
          var Qr;
          null === (Qr = Sr.onChangeBlockFail) || void 0 === Qr || Qr.call(Sr, rr)
        })), this.Jp("blockChangeRefused", null), this.Jp("EditBoard", {
          pos: null
        }), this.Jp("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(rr, Sr, Qr, Zr, Wr, ar) {
        rr === Ur.kc.ChestOpened ? this.items.chestOpened(Qr, Zr, Wr) : rr !== Ur.kc.Synced && rr !== Ur.kc.ChestClosed && rr !== Ur.kc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(rr, Sr, Qr, Zr) {
            switch (rr) {
              case Ur.kc.Synced:
                jr.i.Jp("syncedInvenFromServer");
                break;
              case Ur.kc.ChestOpened:
              case Ur.kc.ChestClosed:
                jr.i.Jp("chestToggleFromServer", rr === Ur.kc.ChestOpened, !0);
                break;
              case Ur.kc.ChestRefreshed:
                jr.i.Jp("chestRefreshedFromServer");
                break;
              case Ur.kc.EnchantingTable:
                jr.i.Jp("enchantingTable", {
                  aI: Zr,
                  position: Qr
                });
                break;
              case Ur.kc.HotbarRequest:
                jr.i.Jp("setSelectedInventorySlotI", Sr, !0);
                break;
              case Ur.kc.Scrolled:
                jr.i.Jp("ScrollInventorySlot", Sr);
                break;
              case Ur.kc.NumberKey:
                jr.i.Jp("numkeyPressed", Sr + 1);
                break;
              case Ur.kc.DropRequested:
                jr.i.Jp("DropInvenItem", 0 !== Sr);
                break;
              default:
                throw new Nr.d(`InventoryEvent of no kind: what ${rr}`)
            }
          }(rr, Sr, [Qr, Zr, Wr], ar)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(rr, Sr, Qr, Zr) {
        this.Jp("shotPlayer", {
          playerId: String(rr),
          damage: Sr,
          wasCrit: 0 !== Zr,
          distance: Qr
        })
      }
      localHurt(rr, Sr) {
        this.Jp("closeShopOnDamaged", null), this.guard((() => {
          jr.i.Jp("damagedByOtherPlayer", {
            BW: null,
            direction: Number.isNaN(Sr) ? null : Sr,
            GW: rr
          })
        }))
      }
      attackHit(rr, Sr, Qr, Zr, Wr) {
        this.guard((() => {
          jr.i.Jp("yourAttackHit", {
            GS: Zr,
            screenPos: this.renderFrame.projectDirectionToScreenPos([rr, Sr, Qr]),
            hitSelf: Wr
          })
        }))
      }
      physicsType(rr) {
        this.localPhysicsType = rr, this.Jp("PlayerPhysicsTypeUpdate", rr)
      }
      vehicleEffect(rr, Sr, Qr, Zr, Wr) {
        this.guard((() => {
          rr === mr.Sd.UPDATE ? (0, qr.i)(Sr, {
            icon: Qr,
            level: Zr,
            displayName: null,
            durationMs: Wr
          }) : Hr.b.remove(Sr)
        }))
      }
      zoomChanged(rr) {
        this.zoom = rr, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.Jp("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.Jp("showBottomMessage", FZ.c)
      }
      showZoom() {
        const rr = this.scriptedCamera.holdsView();
        !this.zoomUnshown || rr && this.zoomHeld || (this.zoomUnshown = !1, this.Jp("cameraZoomSet", this.zoom)), this.zoomHeld = rr
      }
      gunHit(rr) {
        this.guard((() => {
          const {
            BW: Sr,
            TW: Qr
          } = (0, HZ.b)(qZ.s, rr);
          jr.i.Jp("damagedByOtherPlayer", {
            BW: Sr,
            direction: Qr
          })
        }))
      }
      uiEvent(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        this.guard((() => {
          xZ(rr, Sr, [Qr, Zr, Wr], ar, this.items, this.options.tables, (() => oZ.decode(this.api.eventBytes(jr, Ir))))
        }))
      }
      writeAltVeto(rr) {
        const Sr = this.cmd;
        if (!Sr) return;
        let Qr;
        try {
          Qr = function(rr, Sr) {
            const Qr = new Set;
            let Zr = !1;
            for (const Wr of rr)
              if (Wr.onPlayerAttemptAltAction) {
                if (Zr = !0, !Wr.altVetoBlocks) return {
                  mode: Ur.Xd.All,
                  roots: []
                };
                for (const rr of Wr.altVetoBlocks) Qr.add(Sr.getMetaInfo(rr).rootId)
              } return Zr ? Qr.size > Ur.wc ? {
              mode: Ur.Xd.All,
              roots: []
            } : {
              mode: Ur.Xd.Filter,
              roots: [...Qr]
            } : {
              mode: Ur.Xd.Off,
              roots: []
            }
          }(rr, this.options.tables)
        } catch (Wr) {
          this.onError(Wr), Qr = {
            mode: Ur.Xd.All,
            roots: []
          }
        }
        if (Qr.mode === Ur.Xd.Off && !this.vetoSet) return;
        const Zr = new Uint8Array(new Uint32Array(Qr.roots).buffer);
        (0, Ur.Hf)(Sr, 0, Qr.mode, Qr.roots.length, Zr) ? this.vetoSet = Qr.mode !== Ur.Xd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(rr) {
        const Sr = this.cmd;
        if (!Sr) return;
        const Qr = function(rr) {
          let Sr = 0;
          for (const Qr of rr) Qr.onPlayerAltAction && (Sr |= 1 << Ur.Tb.AltAction), (Qr.onPlayerClick || Qr.onPlayerClickUp || Qr.onPlayerAttackEntity) && (Sr |= 1 << Ur.Tb.Click), Qr.onPlayerChangeBlock && (Sr |= 1 << Ur.Tb.ChangeBlock), Qr.onPlayerDropItem && (Sr |= 1 << Ur.Tb.DropItem);
          return Sr
        }(rr);
        (0 !== Qr || this.hooksSet) && ((0, Ur.Qf)(Sr, 0, Qr) ? this.hooksSet = 0 !== Qr : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const rr = this.cmd;
        rr && !this.stopped() && this.customButtons.write(rr)
      }
      writePromptWatch() {
        const rr = this.cmd,
          Sr = this.promptWatch;
        Sr !== this.promptWatchSent && rr && !this.stopped() && (0, Ur.ng)(rr, 0, dZ[Sr]) && (this.promptWatchSent = Sr)
      }
      writePublicLobby(rr) {
        const Sr = this.cmd;
        Sr && rr !== this.writtenPublicLobby && ((0, Ur.Zf)(Sr, 0, rr ? 1 : 0) ? this.writtenPublicLobby = rr : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(rr) {
        const Sr = this.cmd;
        Sr && ((0, Ur.Tf)(Sr, 0, null === rr ? 0 : 1, null === rr ? JZ : bZ.encode(rr)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(rr) {
        const Sr = this.generation;
        for (const Zr of this.owners) {
          if (Sr !== this.generation) break;
          try {
            const Sr = rr(Zr);
            if (void 0 !== Sr) return Sr
          } catch (Qr) {
            this.jx(Qr)
          }
        }
      }
      Jp(rr, Sr) {
        this.guard((() => {
          jr.i.Jp(rr, Sr)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (rr) {
          this.jx(rr)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (rr) {
          this.jx(rr)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = Or.n.DEFAULT, this.thirdPersonWanted = !1, this.thirdPersonHeld = !1;
        const rr = this.owners;
        let Sr;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (Zr) {
          Sr = Zr
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (Zr) {
          Sr ??= Zr
        }
        this.round(rr, SW, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (Zr) {
          Sr ??= Zr
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (Zr) {
          Sr ??= Zr
        }
        const Qr = this.options.onSessionEnd;
        if (Qr) try {
          Qr()
        } catch (Zr) {
          this.onError(Zr)
        }
        void 0 !== Sr && this.jx(Sr)
      }
      round(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this.generation;
        for (const ar of rr) {
          if (Zr !== this.generation) break;
          try {
            Sr(ar)
          } catch (Wr) {
            Qr ? this.onError(Wr) : this.jx(Wr)
          }
        }
      }
      guard(rr) {
        try {
          rr()
        } catch (Sr) {
          this.jx(Sr)
        }
      }
    }

    function uZ(rr) {
      return rr === Ur.Kc ? null : String(rr)
    }

    function rW(rr) {
      rr.lx(mr.Ld)
    }

    function SW(rr) {
      var Sr;
      null === (Sr = rr.onClose) || void 0 === Sr || Sr.call(rr)
    }

    function QW(rr, Sr) {
      rr.watch((() => {
        const Qr = function(rr) {
          const Sr = [],
            Qr = Math.min(YZ, rr.length);
          for (let Wr = 0; Wr < Qr; Wr++) {
            var Zr;
            const Qr = null === (Zr = rr.slot(Wr)) || void 0 === Zr ? void 0 : Zr.typeObj,
              ar = Qr ? (0, hZ.gunTypeOf)(Qr.id) : void 0;
            void 0 !== ar && Sr.push(BS[ar])
          }
          return Sr
        }(rr);
        Qr.length > 0 && (Sr.preload(Qr.flatMap((rr => MS(rr)))), Sr.preload(MS(TS)))
      }))
    }
    var ZW = Qr(37859),
      WW = Qr(5681),
      aW = Qr(37851),
      jW = Qr(37902);

    function IW(rr) {
      const Sr = (0, ZW.countDecodesAs)(new WW.Howl({
          src: [...(0, aW.r)(rr).src],
          pool: 15,
          preload: !1
        }), "sound"),
        Qr = Sr.load.bind(Sr);
      return Sr.load = () => (Sr._preload = !0, (0, jW.f)(rr), Qr()), Sr
    }

    function fW(rr, Sr, Qr) {
      const Zr = rr.listener;
      if (Zr.positionX) EW(Zr.positionX, Sr, Qr, 0), EW(Zr.positionY, Sr, Qr, 1), EW(Zr.positionZ, Sr, Qr, 2), EW(Zr.forwardX, Sr, Qr, 3), EW(Zr.forwardY, Sr, Qr, 4), EW(Zr.forwardZ, Sr, Qr, 5), EW(Zr.upX, Sr, Qr, 6), EW(Zr.upY, Sr, Qr, 7), EW(Zr.upZ, Sr, Qr, 8);
      else {
        let rr = !1;
        for (let Zr = 0; Zr < 9; Zr++) rr ||= Sr[Zr] !== Qr[Zr];
        rr && (Zr.setPosition(Sr[0], Sr[1], Sr[2]), Zr.setOrientation(Sr[3], Sr[4], Sr[5], Sr[6], Sr[7], Sr[8]), Qr.set(Sr))
      }
    }

    function EW(rr, Sr, Qr, Zr) {
      Sr[Zr] !== Qr[Zr] && (rr.value = Sr[Zr], Qr[Zr] = Sr[Zr])
    }
    class pW {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(rr) {
        this.pose.set(rr);
        const Sr = WW.Howler.ctx;
        return !!Sr && (Sr !== this.watchedCtx && (this.watchedCtx = Sr, this.written.fill(Number.NaN), Sr.addEventListener("statechange", (() => {
          "running" === Sr.state && fW(Sr, this.pose, this.written)
        }))), "running" === Sr.state && fW(Sr, rr, this.written), !0)
      }
    }
    var xW = Qr(38124),
      mW = Qr(40789);
    let NW = null,
      UW = null;

    function tW() {
      return null === NW && (NW = document.createElement("div"), NW.className = "WasmCameraLayer", NW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(NW)), NW
    }

    function hW() {
      return UW ??= new mW.d(new xW.g(tW)), UW
    }

    function zW() {
      var rr;
      null === (rr = UW) || void 0 === rr || rr.clear(), YW(null)
    }

    function YW(rr) {
      Zr.c.get("scriptedCameraFacing") !== rr && Zr.c.set({
        scriptedCameraFacing: rr
      })
    }
    var nW = Qr(5878),
      eW = Qr(5830),
      KW = Qr(40818),
      yW = Qr(42904),
      BW = Qr(4489);
    const TW = Object.entries(Ur.Rb).reduce(((rr, Sr) => {
      let [Qr, Zr] = Sr;
      return rr[Zr] = Qr, rr
    }), []);

    function vW(rr, Sr) {
      var Qr;
      return 0 !== ((null !== (Qr = rr.itemFlags[Sr]) && void 0 !== Qr ? Qr : 0) & Ur.mc.Stackable)
    }
    const OW = /^(0|[1-9][0-9]*)$/,
      LW = {
        displayName: (rr, Sr) => (0, hZ.displayNameOf)(Sr),
        description: (rr, Sr) => (0, hZ.descriptionOf)(Sr),
        type: (rr, Sr) => (0, hZ.itemTypeOf)(Sr),
        clipSize: (rr, Sr) => (0, hZ.clipSizeOf)(Sr),
        armourReduction: (rr, Sr) => (0, hZ.armourReductionOf)(Sr),
        scopeType: (rr, Sr) => (0, hZ.scopeTypeOf)(Sr),
        stackable: vW,
        harvestType: (rr, Sr) => TW[rr.blockHarvestTypes[Sr]],
        harvestLevel: (rr, Sr) => {
          const Qr = rr.blockHarvestLevels[Sr];
          return Qr === Ur.qc ? void 0 : Qr
        },
        harvests: (rr, Sr) => {
          var Qr;
          const Zr = null !== (Qr = rr.itemHarvests[Sr]) && void 0 !== Qr ? Qr : 0;
          return 0 !== Zr ? TW[Zr] : void 0 === (0, hZ.harvestsNullLevelOf)(Sr) ? void 0 : null
        },
        level: (rr, Sr) => {
          var Qr, Zr;
          const Wr = null !== (Qr = rr.itemLevels[Sr]) && void 0 !== Qr ? Qr : Ur.qc;
          return Wr !== Ur.qc ? Wr : null !== (Zr = (0, hZ.harvestsNullLevelOf)(Sr)) && void 0 !== Zr ? Zr : void 0
        }
      };

    function lW(rr, Sr, Qr) {
      return PW(new Uint8Array(Math.floor(rr.length / Sr)), rr, Sr, Qr)
    }

    function XW(rr, Sr, Qr) {
      return PW(new Uint16Array(Math.floor(rr.length / Sr)), rr, Sr, Qr)
    }

    function PW(rr, Sr, Qr, Zr) {
      const Wr = new DataView(Sr.buffer, Sr.byteOffset, Sr.byteLength);
      for (let ar = 0; ar < rr.length; ar++) rr[ar] = Zr(Wr, ar * Qr);
      return rr
    }
    class HW {
      constructor(rr, Sr) {
        this.options = Sr, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = rr => {
          const Sr = this.idOf(rr);
          if (void 0 === Sr) throw new Error(`No item is named ${rr}, an item's root`);
          return Sr
        };
        const Qr = Sr => {
            const Qr = Sr();
            return new Uint8Array(rr.memory().buffer, rr.scratch(), Qr).slice()
          },
          Zr = (new TextDecoder).decode(Qr((() => rr.queries.itemNames()))).split("\n"),
          Wr = Qr((() => rr.queries.blockProps())),
          ar = Qr((() => rr.queries.itemProps()));
        this.props = {
          blockFlags: lW(Wr, Ur.w.BYTES, Ur.w.flags),
          blockHarvestTypes: lW(Wr, Ur.w.BYTES, Ur.w.harvestType),
          blockHarvestLevels: lW(Wr, Ur.w.BYTES, Ur.w.harvestLevel),
          blockAttachedTops: XW(Wr, Ur.w.BYTES, Ur.w.attachedTop),
          itemFlags: lW(ar, Ur.nc.BYTES, Ur.nc.flags),
          itemHarvests: lW(ar, Ur.nc.BYTES, Ur.nc.harvests),
          itemLevels: lW(ar, Ur.nc.BYTES, Ur.nc.level)
        }, (0, BW.m)(Object.freeze(Zr)), (0, yW.d)()
      }
      idOf(rr) {
        if ("number" === typeof rr) return void 0 === (0, BW.g)(rr) ? void 0 : rr;
        const Sr = (0, BW.e)(rr);
        return void 0 === Sr && OW.test(rr) ? void 0 === (0, BW.g)(+rr) ? void 0 : +rr : Sr
      }
      getMetaInfo(rr) {
        if (!rr || rr === nW.e) return nW.h;
        const Sr = this.idOf(rr);
        if (void 0 === Sr) throw new Error(`Item ${rr} not found in registry`);
        return this.metaOf(Sr)
      }
      blockRootId(rr) {
        return 0 !== rr && void 0 !== (0, BW.g)(rr) ? this.metaOf(rr).rootId : rr
      }
      metaOf(rr) {
        return this.metas[rr] ??= (0, eW.i)((0, BW.g)(rr), rr, this.rootIdOf, (0, hZ.rootMetaDescOf)(rr))
      }
      getItemId(rr) {
        if (!rr || rr === nW.e) return 0;
        const Sr = this.idOf(rr);
        if (void 0 === Sr) throw new Error(`Invalid block name. You sent ${rr}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Sr
      }
      getItemName(rr) {
        if (!rr || rr === nW.e) return nW.e;
        const Sr = this.idOf(rr);
        if (void 0 === Sr) throw new Error(`Item ${rr} not found in registry`);
        return (0, BW.g)(Sr)
      }
      blockNameToBlockId(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (rr === nW.e) return 0;
        let Qr = this.idOf(rr);
        if (void 0 === Qr || !this.isBlockId(Qr)) {
          const Sr = rr.indexOf("|"),
            Zr = Sr > 0 ? (0, BW.e)(rr.slice(0, Sr)) : void 0;
          Qr = void 0 !== Zr && this.isBlockId(Zr) && (0, hZ.rootMetaDescOf)(Zr) === rr ? Zr : void 0
        }
        if (void 0 !== Qr) return Qr;
        if (!Sr) throw new Error(`Invalid block name. You sent ${rr}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(rr) {
        return rr > 0 && rr < this.props.blockFlags.length
      }
      nameOfId(rr) {
        return 0 !== rr && (0, BW.g)(rr) || nW.e
      }
      itemType(rr) {
        const Sr = rr ? this.idOf(rr) : void 0;
        if (!Sr) return null;
        let Qr = this.types.get(Sr);
        return void 0 === Qr && (Qr = Object.freeze({
          id: Sr,
          name: (0, BW.g)(Sr),
          meta: this.getMetaInfo(Sr),
          stackable: vW(this.props, Sr),
          type: (0, hZ.itemTypeNameOf)(Sr),
          clipSize: (0, hZ.clipSizeOf)(Sr),
          scopeType: (0, hZ.scopeTypeOf)(Sr),
          showsAimingUi: (0, hZ.showsAimingUi)(Sr)
        }), this.types.set(Sr, Qr)), Qr
      }
      getItemStat(rr, Sr) {
        if (KW.e.has(Sr)) {
          const Qr = "minChargeStateToUse" === Sr ? this.getMetaInfo(rr).rootName : this.getItemName(rr),
            Zr = this.options.get((0, KW.f)(Qr, Sr));
          if (null !== Zr && void 0 !== Zr) return Zr
        }
        return this.defaultStat(rr, Sr, this.statOf(Sr))
      }
      getDisplayName(rr) {
        return this.getItemStat(rr, "displayName")
      }
      getDefaultItemStat(rr, Sr) {
        return this.defaultStat(rr, Sr, this.statOf(Sr))
      }
      statOf(rr) {
        const Sr = LW[rr];
        return void 0 === Sr && function(rr, Sr) {
          throw new Error(`ClientApi.${rr} is not available yet in the wasm client (${Sr})`)
        }(`getItemStat("${rr}")`, `a table of the stat: the wasm client answers ${Object.keys(LW).join(", ")}`), Sr
      }
      defaultStat(rr, Sr, Qr) {
        const Zr = this.idOf(rr),
          Wr = void 0 === Zr ? void 0 : Qr(this.props, Zr);
        return null !== Wr && void 0 !== Wr || "displayName" !== Sr ? Wr : this.getItemName(rr)
      }
      getClientOption(rr) {
        return this.options.get(rr)
      }
      getGunStats(rr) {
        return this.getClientOption(`${rr}GunStats`)
      }
      watchClientOption(rr, Sr) {
        return this.options.subscribe(rr, Sr)
      }
      isSolidBlockId(rr) {
        var Sr;
        return 0 !== ((null !== (Sr = this.props.blockFlags[rr]) && void 0 !== Sr ? Sr : 0) & Ur.v.Solid)
      }
      isStackableId(rr) {
        return vW(this.props, rr)
      }
      isFluidBlockId(rr) {
        var Sr;
        return 0 !== ((null !== (Sr = this.props.blockFlags[rr]) && void 0 !== Sr ? Sr : 0) & Ur.v.Fluid)
      }
      canPlaceOverBlockId(rr) {
        var Sr;
        return 0 !== ((null !== (Sr = this.props.blockFlags[rr]) && void 0 !== Sr ? Sr : 0) & Ur.v.PlaceOver)
      }
      attachedTopOf(rr) {
        var Sr;
        return null !== (Sr = this.props.blockAttachedTops[rr]) && void 0 !== Sr ? Sr : 0
      }
      isDroplessBlockId(rr) {
        return (0, hZ.dropsNothing)(rr)
      }
    }

    function qW(rr, Sr) {
      const Qr = new Map;
      return (Zr, Wr) => {
        const ar = Sr.idOf(Zr),
          jr = void 0 === ar ? null : (Zr => {
            let Wr = Qr.get(Zr);
            if (void 0 === Wr) {
              const ar = rr.queries.salvageRecipe(Zr),
                jr = new DataView(rr.memory().buffer, rr.scratch(), ar),
                Ir = [];
              for (let rr = 0; rr + Ur.Id.BYTES <= ar; rr += Ur.Id.BYTES) Ir.push(Object.freeze({
                item: Sr.nameOfId(Ur.Id.item(jr, rr)),
                amt: Ur.Id.amount(jr, rr)
              }));
              Wr = 0 === Ir.length ? null : Object.freeze(Ir), Qr.set(Zr, Wr)
            }
            return Wr
          })(ar);
        if (null === jr || void 0 === Wr) return jr;
        const Ir = Wr <= 0 ? 1 : Wr;
        return jr.map((rr => {
          let {
            item: Sr,
            amt: Qr
          } = rr;
          return {
            item: Sr,
            amt: Qr * Ir
          }
        }))
      }
    }
    var RW = Qr(42627),
      gW = Qr(38419),
      CW = Qr(38405),
      MW = Qr(38411),
      GW = Qr(38031),
      kW = Qr(42726),
      AW = Qr(55093);
    const VW = -1,
      iW = new Uint8Array(0),
      wW = new TextEncoder;

    function cW(rr) {
      if (null === rr) return null;
      const Sr = wW.encode(rr);
      return Sr.byteLength < mr.Mc ? Sr : Sr.subarray(0, mr.Mc - 1)
    }
    class FW {
      constructor(rr) {
        this.deps = rr, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = VW, this.keyframesSettled = !1, this.reloadFrom = VW
      }
      reloadKeyframes() {
        var rr, Sr;
        this.keyframesVersion = VW, this.reloadFrom = null !== (rr = null === (Sr = this.view()) || void 0 === Sr ? void 0 : Sr.version) && void 0 !== rr ? rr : VW
      }
      setPlayback(rr) {
        const Sr = 1 === this.deps.core.Yjr(rr);
        return Sr && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = VW, this.reloadFrom = VW), Sr
      }
      async open(rr, Sr) {
        const Qr = await this.deps.replay.open(rr, Sr);
        return "opening" === Qr && (this.reloadKeyframes(), this.deps.recorder.prefetch()), Qr
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(rr)), Sr)
      }
      setSpeed(rr) {
        this.deps.replay.setSpeed(rr)
      }
      setCameraMode(rr) {
        this.deps.replay.setCameraMode(AW.c.indexOf(rr))
      }
      view() {
        var rr;
        const Sr = Ur.p.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Sr) return this.lastView = null, null;
        const Qr = new DataView(this.deps.buffer(), Sr, Ur.Ed.BYTES),
          Zr = Ur.Ed.version(Qr, 0),
          Wr = this.lastView;
        if (null !== Wr && Wr.version === Zr) return Wr;
        const ar = Ur.Ed.markIn(Qr, 0),
          jr = {
            version: Zr,
            state: Ur.Ed.state(Qr, 0),
            cameraMode: null !== (rr = AW.c[Ur.Ed.cameraMode(Qr, 0)]) && void 0 !== rr ? rr : "recording",
            lx: Ur.Ed.lx(Qr, 0),
            totalTicks: Ur.Ed.totalTicks(Qr, 0),
            speed: Ur.Ed.speed(Qr, 0),
            mark: ar === Ur.Bd ? null : {
              inTick: ar,
              outTick: Ur.Ed.markOut(Qr, 0)
            },
            editVersion: Ur.Ed.editVersion(Qr, 0)
          };
        return this.lastView = jr, jr
      }
      keyframes() {
        const rr = this.view();
        if (null === rr) return [];
        rr.version !== this.reloadFrom && (this.reloadFrom = VW);
        const Sr = this.reloadFrom === VW && rr.state !== mr.yd.Cropping && rr.state !== mr.yd.None,
          Qr = Sr ? rr.editVersion : rr.version;
        if (Qr === this.keyframesVersion && Sr === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: Zr
        } = this.deps, Wr = Zr.njr(), ar = Zr.Iz(), jr = [];
        if (0 !== ar && Wr > 0) {
          const rr = new DataView(this.deps.buffer(), ar, Wr * mr.zc);
          for (let Sr = 0; Sr < Wr; Sr++) {
            const Qr = Sr * mr.zc,
              Zr = Sr => rr.getFloat64(Qr + Sr, !0);
            jr.push({
              lx: rr.getUint32(Qr + mr.Kc, !0),
              position: [Zr(mr.Hc), Zr(mr.Hc + 8), Zr(mr.Hc + 16)],
              direction: [Zr(mr.Cc), Zr(mr.Cc + 8), Zr(mr.Cc + 16)],
              easing: [Zr(mr.Fc), Zr(mr.Fc + 8), Zr(mr.Fc + 16), Zr(mr.Fc + 24)]
            })
          }
        }
        return this.keyframesVersion = Qr, this.keyframesSettled = Sr, this.lastKeyframes = jr, jr
      }
      addKeyframe() {
        const rr = this.deps.apiView(),
          Sr = [Ur.p.eye(rr, 0, 0), Ur.p.eye(rr, 0, 1), Ur.p.eye(rr, 0, 2)];
        return this.deps.replay.addKeyframe(Sr, function(rr, Sr) {
          const Qr = Math.cos(Sr);
          return [Qr * Math.sin(rr), -Math.sin(Sr), Qr * Math.cos(rr)]
        }(Ur.p.heading(rr, 0), Ur.p.pitch(rr, 0)))
      }
      setKeyframe(rr) {
        return this.deps.replay.setKeyframe(rr.lx, Float64Array.from([...rr.position, ...rr.direction, ...rr.easing]))
      }
      moveKeyframe(rr, Sr) {
        return this.deps.replay.moveKeyframe(rr, Sr)
      }
      deleteKeyframes(rr, Sr) {
        return this.deps.replay.deleteKeyframes(rr, Sr)
      }
      setMark(rr) {
        var Sr, Qr;
        return this.deps.replay.setMark(null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.inTick) && void 0 !== Sr ? Sr : -1, null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.outTick) && void 0 !== Qr ? Qr : -1)
      }
      crop(rr, Sr) {
        const Qr = this.deps.replay.crop(rr, Sr);
        return Qr && this.reloadKeyframes(), Qr
      }
      save(rr) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(rr)
      }
      recorderControl(rr) {
        this.deps.recorder.control(rr)
      }
      recorderPrefs(rr, Sr) {
        this.deps.recorder.prefs(rr, Sr)
      }
      recorderOption(rr, Sr) {
        const Qr = this.deps.cmd();
        return null !== Qr && (0, Ur.yf)(Qr, 0, rr, null === Sr ? iW : wW.encode(Sr))
      }
      recordFlyingText(rr, Sr, Qr, Zr) {
        const Wr = this.deps.cmd(),
          ar = Math.max(0, Math.min(4294967295, Math.round(Zr)));
        return null !== Wr && (0, Ur.uf)(Wr, 0, Sr, Qr, ar, wW.encode(rr))
      }
      recordPlayerKilled(rr, Sr, Qr, Zr) {
        const Wr = this.deps.cmd();
        return null !== Wr && (0, Ur.zf)(Wr, 0, rr, Sr, Math.max(0, Qr), wW.encode(Zr))
      }
      recordKillfeed(rr, Sr, Qr) {
        var Zr, Wr;
        const ar = this.deps.cmd(),
          jr = function(rr) {
            const Sr = rr.reduce(((rr, Sr) => {
                var Qr;
                return rr + IZ.Ab + (null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.byteLength) && void 0 !== Qr ? Qr : 0)
              }), 0),
              Qr = new Uint8Array(Sr),
              Zr = new DataView(Qr.buffer);
            let Wr = 0;
            for (const jr of rr) {
              var ar;
              Zr.setUint16(Wr, null !== (ar = null === jr || void 0 === jr ? void 0 : jr.byteLength) && void 0 !== ar ? ar : mr.Mc, !0), Wr += IZ.Ab, null !== jr && (Qr.set(jr, Wr), Wr += jr.byteLength)
            }
            return Qr
          }([cW(rr.name), cW(rr.colour), cW(Sr.name), cW(Sr.colour), cW(Qr)]);
        return null !== ar && (0, Ur.wf)(ar, 0, null !== (Zr = rr.id) && void 0 !== Zr ? Zr : Ur.Nc, null !== (Wr = Sr.id) && void 0 !== Wr ? Wr : Ur.Nc, jr)
      }
      recorderSession(rr, Sr) {
        this.deps.recorder.session({
          session: Sr,
          lobbyType: rr.lobbyType,
          game: rr.gameNameWithVariation,
          lobby: rr.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.ejr()
      }
      filePartDone(rr, Sr) {
        this.deps.recorder.filePartDone(rr, Sr)
      }
      fileDone(rr) {
        this.deps.recorder.fileDone(rr)
      }
    }
    const oW = -2147483648;
    class bW {
      constructor(rr) {
        var Sr;
        this.deps = rr, this.state = tZ.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.heldOptions = new Map, this.now = null !== (Sr = rr.now) && void 0 !== Sr ? Sr : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var rr, Sr, Qr;
        return null === (rr = null === (Sr = (Qr = this.deps).live) || void 0 === Sr ? void 0 : Sr.call(Qr)) || void 0 === rr || rr
      }
      activated(rr) {
        var Sr, Qr;
        this.live && (this.viewerShown(!0 === (null === (Sr = (Qr = this.deps).viewerOpen) || void 0 === Sr ? void 0 : Sr.call(Qr))), this.deps.client.recorderSession(rr, (0, AW.d)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var rr, Sr;
        this.live && (this.state.recording || !0 !== (null === (rr = (Sr = this.deps).viewerOpen) || void 0 === rr ? void 0 : rr.call(Sr))) ? (this.releaseOptions(), this.deps.client.recorderControl(mr.bd.ToggleRecording)) : this.deps.notify(MW.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(mr.bd.SaveClip) : this.deps.notify(MW.d.clippingNotOn)
      }
      viewerShown(rr) {
        this.live && this.deps.client.recorderControl(rr ? mr.bd.ViewerOpened : mr.bd.ViewerClosed)
      }
      setPrefs(rr, Sr) {
        this.live && (rr && this.releaseOptions(), this.deps.client.recorderPrefs(rr, Sr))
      }
      setAllOptions(rr) {
        var Sr;
        this.live && (null === (Sr = this.heldOptions) || void 0 === Sr || Sr.clear(), rr.forEach(((rr, Sr) => {
          this.sendOption(Sr, rr)
        })))
      }
      setOption(rr, Sr) {
        this.live && (this.heldOptions ? this.heldOptions.set(rr, Sr) : this.sendOption(rr, Sr))
      }
      releaseOptions() {
        const rr = this.heldOptions;
        if (rr) {
          this.heldOptions = null;
          for (const [Sr, Qr] of rr) this.sendOption(Sr, Qr)
        }
      }
      sendOption(rr, Sr) {
        var Qr;
        this.deps.client.recorderOption(rr, void 0 === Sr || null === Sr ? null : null !== (Qr = JSON.stringify(Sr)) && void 0 !== Qr ? Qr : null)
      }
      recordFlyingText(rr, Sr, Qr, Zr) {
        this.live && this.deps.client.recordFlyingText(rr, Sr, Qr, Zr)
      }
      recordPlayerKilled(rr, Sr, Qr, Zr) {
        this.live && this.deps.client.recordPlayerKilled(rr, Sr, Qr, Zr)
      }
      recordKillfeed(rr, Sr, Qr) {
        this.live && this.deps.client.recordKillfeed(rr, Sr, Qr)
      }
      lx() {
        let rr = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, rr = {
            ...rr,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Sr = Math.floor((this.now() - this.recordingSince) / 1e3);
          Sr !== rr.seconds && (rr = {
            ...rr,
            seconds: Sr
          })
        }
        this.set(rr)
      }
      onEvent(rr) {
        var Sr, Qr;
        const {
          notify: Zr
        } = this.deps, Wr = MW.d;
        switch (rr.what) {
          case mr._c.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), Zr(Wr.recordingStarted);
            break;
          case mr._c.RecordingStopped:
            this.stopRecording(), Zr(Wr.recordingStopped), this.saveState(mr.od.Recording, "saving");
            break;
          case mr._c.RecordingDiscarded:
            this.stopRecording(), Zr(Wr.recordingDiscarded);
            break;
          case mr._c.RecordingTurnedOff:
            this.stopRecording(), Zr(Wr.recordingTurnedOff);
            break;
          case mr._c.LimitReached:
            Zr(Wr.limitReached);
            break;
          case mr._c.ClipSaved:
            this.saveState(mr.od.Clip, "saving");
            break;
          case mr._c.ClipEmpty:
            Zr(Wr.clipEmpty);
            break;
          case mr._c.ClippingNotOn:
            Zr(Wr.clippingNotOn);
            break;
          case mr._c.Disallowed:
            Zr(Wr.disallowed);
            break;
          case mr._c.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case mr._c.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case mr._c.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case mr._c.SaveBusy:
            null === (Sr = (Qr = this.deps).onSaveState) || void 0 === Sr || Sr.call(Qr, rr.kind, "busy"), Zr(Wr.saveBusy);
            break;
          case mr._c.CloseViewerFirst:
            Zr(Wr.closeViewerFirst)
        }
      }
      fileReady(rr, Sr) {
        this.deps.download(Sr), this.saveState(rr, "done"), this.deps.notify(rr === mr.od.Clip ? MW.d.clipSaved : MW.d.recordingSaved)
      }
      failed(rr) {
        this.saveState(rr, "failed"), this.deps.notify(rr === mr.od.Clip ? MW.d.clipFailed : MW.d.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(tZ.c)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(rr, Sr) {
        var Qr, Zr;
        null === (Qr = (Zr = this.deps).onSaveState) || void 0 === Qr || Qr.call(Zr, rr, Sr)
      }
      set(rr) {
        rr !== this.state && (this.state = rr, this.deps.onState(rr))
      }
    }
    const JW = new TextDecoder;

    function DW(rr, Sr, Qr, Zr) {
      const Wr = [];
      for (let ar = 0; ar < Zr; ar++) {
        if (Sr + IZ.Ab > Qr) return null;
        const Zr = rr.getUint16(Sr, !0);
        if (Sr += IZ.Ab, Zr !== mr.Mc) {
          if (Sr + Zr > Qr) return null;
          Wr.push(JW.decode(new Uint8Array(rr.buffer, rr.byteOffset + Sr, Zr))), Sr += Zr
        } else Wr.push(null)
      }
      return Sr === Qr ? Wr : null
    }

    function dW(rr, Sr) {
      let Qr = new DataView(new ArrayBuffer(0)),
        Zr = !0;
      const Wr = {
        replayFailed: (Sr, Qr, Zr) => {
          rr.replayFailed({
            reason: Sr,
            code: Qr,
            version: Zr
          })
        },
        replayOption: (Sr, Wr, ar, jr) => {
          const Ir = function(rr, Sr, Qr, Zr) {
            switch (Sr) {
              case mr.rd.Cleared:
                return 0 === Zr ? null : void 0;
              case mr.rd.Text:
                return JW.decode(new Uint8Array(rr.buffer, rr.byteOffset + Qr, Zr));
              case mr.rd.Int:
                return Zr === Int32Array.BYTES_PER_ELEMENT ? rr.getInt32(Qr, !0) : void 0;
              case mr.rd.Double:
                return Zr === Float64Array.BYTES_PER_ELEMENT ? rr.getFloat64(Qr, !0) : void 0;
              default:
                return
            }
          }(Qr, Wr, ar, jr);
          void 0 !== Ir ? rr.replayOption({
            key: Sr,
            value: Ir
          }) : Zr = !1
        },
        replayUiEvent: (Sr, Wr, ar, jr, Ir, fr) => {
          const Er = function(rr, Sr, Qr, Zr, Wr, ar, jr) {
            const Ir = ar + jr;
            switch (Sr) {
              case mr.vd.FlyingText: {
                const jr = DW(rr, ar, Ir, 1);
                return null !== jr && null !== jr[0] ? {
                  what: Sr,
                  Ja: Qr,
                  ba: Zr,
                  angle: Wr,
                  contentJson: jr[0]
                } : null
              }
              case mr.vd.PlayerKilled: {
                const Zr = DW(rr, ar, Ir, 3);
                return Zr ? {
                  what: Sr,
                  killstreak: Qr,
                  dead: Zr[0],
                  killer: Zr[1],
                  withItem: Zr[2]
                } : null
              }
              case mr.vd.Killfeed: {
                const Qr = DW(rr, ar, Ir, 7);
                return Qr ? {
                  what: Sr,
                  killerId: Qr[0],
                  killerName: Qr[1],
                  killerColour: Qr[2],
                  victimId: Qr[3],
                  victimName: Qr[4],
                  victimColour: Qr[5],
                  withItem: Qr[6]
                } : null
              }
              default:
                return null
            }
          }(Qr, Sr, Wr, ar, jr, Ir, fr);
          null !== Er ? rr.replayUiEvent(Er) : Zr = !1
        },
        replayFilePart: (Qr, Wr, ar, jr) => {
          const Ir = Sr();
          ar + jr > Ir.byteLength ? Zr = !1 : rr.filePart(Qr, Wr, new Uint8Array(Ir, ar, jr).slice())
        },
        replayFileReady: (Sr, Qr, Zr, Wr) => {
          rr.fileReady({
            save: Sr,
            kind: Qr,
            parts: Zr,
            bytes: Wr
          })
        },
        recorderEvent: (Sr, Qr, Zr) => {
          rr.recorderEvent({
            what: Sr,
            kind: Qr,
            save: Zr
          })
        },
        replayOpened: (Sr, Zr, Wr) => {
          rr.replayOpened(JW.decode(new Uint8Array(Qr.buffer, Qr.byteOffset + Zr, Wr)))
        }
      };
      return (rr, Sr, ar, jr) => !(rr < mr.$.ReplayFailed || rr > mr.$.RecorderEvent) && (Qr = Sr, Zr = !0, (0, Ur.de)(rr, Sr, ar, jr, Wr) && Zr)
    }

    function sW(rr) {
      let Sr = null;
      const Qr = dW(rr, (() => {
        if (null === Sr) throw new Error("a recorder event read outside recorderEventReader's call");
        return Sr.buffer
      }));
      return (rr, Zr) => {
        Sr = Zr;
        try {
          ! function(rr, Sr) {
            const Qr = rr.slice(),
              Zr = new DataView(Qr.buffer);
            for (let Wr = 0; Wr < Qr.byteLength;) {
              if (Wr + mr.Y > Qr.byteLength) throw new Error(`the recorder module's events end mid-head at ${Wr}`);
              const rr = Zr.getUint32(Wr, !0),
                ar = 65535 & rr,
                jr = rr >>> 16,
                Ir = Wr + mr.Y;
              if (Ir + jr > Qr.byteLength || !Sr(ar, Zr, Ir, jr)) throw new Error(`the recorder module wrote a malformed event ${ar} (${jr} bytes) at ${Wr}`);
              Wr = Ir + (0, mr.Ke)(jr)
            }
          }(rr, Qr)
        } finally {
          Sr = null
        }
      }
    }
    class uW {
      constructor(rr, Sr) {
        this.acks = rr, this.handlers = Sr, this.parts = new Map
      }
      onPart(rr, Sr, Qr) {
        let Zr = this.parts.get(rr);
        Zr || (Zr = [], this.parts.set(rr, Zr)), Zr[Sr] = Qr, this.acks.filePartDone(rr, Sr)
      }
      onReady(rr) {
        var Sr;
        const Qr = null !== (Sr = this.parts.get(rr.save)) && void 0 !== Sr ? Sr : [];
        this.parts.delete(rr.save);
        const Zr = function(rr, Sr, Qr) {
          if (rr.length !== Sr) return null;
          let Zr = 0;
          for (let jr = 0; jr < Sr; jr++) {
            if (void 0 === rr[jr]) return null;
            Zr += rr[jr].byteLength
          }
          if (Zr !== Qr) return null;
          if (1 === Sr) return rr[0];
          const Wr = new Uint8Array(Qr);
          let ar = 0;
          for (const jr of rr) Wr.set(jr, ar), ar += jr.byteLength;
          return Wr
        }(Qr, rr.parts, rr.bytes);
        this.acks.fileDone(rr.save), null === Zr ? this.handlers.fileIncomplete(rr.save, rr.kind) : this.handlers.fileReady(rr.save, rr.kind, Zr)
      }
      onDiscarded(rr) {
        this.parts.delete(rr)
      }
    }

    function ra() {
      return Qr.e(73).then((() => Qr(64584)))
    }
    class Sa {
      constructor(rr) {
        this.deps = rr, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Sr
        } = rr;
        this.recorder = new bW({
          client: Sr,
          live: () => {
            var rr;
            return !0 !== (null === (rr = this.viewer) || void 0 === rr ? void 0 : rr.inPlayback)
          },
          viewerOpen: rr.viewerOpen,
          notify: rr.notify,
          download: Sr => {
            var Qr;
            null === (Qr = rr.download) || void 0 === Qr || Qr.call(rr, Sr)
          },
          onState: rr.onRecorderState,
          onSaveState: rr.onSaveState
        }), this.parts = new uW(Sr, {
          fileReady: (rr, Sr, Qr) => {
            var Zr;
            Sr === mr.od.Edited ? null === (Zr = this.viewer) || void 0 === Zr || Zr.saveDone(Qr) : this.recorder.fileReady(Sr, Qr)
          },
          fileIncomplete: (rr, Sr) => {
            this.saveFailed(Sr)
          }
        });
        const Qr = {
          replayFailed: rr => {
            var Sr;
            null === (Sr = this.viewer) || void 0 === Sr || Sr.onFailed(rr)
          },
          replayOption: Sr => {
            var Qr;
            null === (Qr = rr.onReplayOption) || void 0 === Qr || Qr.call(rr, Sr)
          },
          replayUiEvent: Sr => {
            var Qr;
            null === (Qr = rr.onReplayUiEvent) || void 0 === Qr || Qr.call(rr, Sr)
          },
          filePart: (rr, Sr, Qr) => {
            this.parts.onPart(rr, Sr, Qr)
          },
          fileReady: rr => {
            this.parts.onReady(rr)
          },
          replayOpened: Sr => {
            var Qr;
            null === (Qr = rr.onReplayOpened) || void 0 === Qr || Qr.call(rr, Sr)
          },
          recorderEvent: rr => {
            var Sr;
            switch (rr.what) {
              case mr._c.FileDiscarded:
                this.parts.onDiscarded(rr.save);
                break;
              case mr._c.SaveFailed:
                this.saveFailed(rr.kind);
                break;
              case mr._c.SaveBusy:
                if (null !== (Sr = this.viewer) && void 0 !== Sr && Sr.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(rr);
                break;
              default:
                this.recorder.onEvent(rr)
            }
          }
        };
        this.sink = function(rr, Sr) {
          return {
            onReplayEvent: dW(rr, Sr)
          }
        }(Qr, rr.buffer), this.recorderEvents = sW(Qr)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var rr;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (rr = this.deps.loadViewer) && void 0 !== rr ? rr : ra)().catch((rr => {
          throw this.viewerChunk = null, rr
        })), this.viewerChunk.then((rr => (this.viewer ??= new rr.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var rr, Sr;
            null === (rr = (Sr = this.deps).onViewerChange) || void 0 === rr || rr.call(Sr)
          }
        }), this.viewer))))
      }
      activated(rr) {
        this.recorder.activated(rr)
      }
      afterFrame(rr) {
        try {
          rr > 0 && this.recorder.lx()
        } finally {
          var Sr;
          null === (Sr = this.viewer) || void 0 === Sr || Sr.afterFrame()
        }
      }
      end() {
        var rr;
        null === (rr = this.viewer) || void 0 === rr || rr.end()
      }
      saveFailed(rr) {
        var Sr;
        rr === mr.od.Edited ? null === (Sr = this.viewer) || void 0 === Sr || Sr.saveFailed(!1) : this.recorder.failed(rr)
      }
    }
    var Qa = Qr(42479),
      Za = Qr(42495),
      Wa = Qr(5619),
      aa = Qr(42784);
    class ja {
      constructor(rr) {
        this.deps = rr, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(rr, Sr) {
        if (!this.deps.live() || 0 === rr && 0 === Sr) return;
        const Qr = (0, Ar.s)(0, performance.now()),
          Zr = this.deps.dragScale();
        (0, aa.h)((() => {
          (0, Ar.x)(mr.xb.MouseDown, 0, 0, 0, Qr), (0, Ar.x)(mr.xb.MouseMove, 0, rr * Zr, Sr * Zr, 0), (0, Ar.x)(mr.xb.MouseUp, 0, 0, 0, Qr)
        }))
      }
      move(rr) {
        var Sr, Qr;
        this.analogue[0] = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.x) && void 0 !== Sr ? Sr : 0, this.analogue[1] = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.y) && void 0 !== Qr ? Qr : 0, this.send()
      }
      holdVertical(rr, Sr) {
        const Qr = "freeCamUp" === rr ? Ur.Lb.Up : Ur.Lb.Down;
        this.keys = Sr ? this.keys | Qr : this.keys & ~Qr, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const rr = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== rr && !(0, Ur.ye)(rr, 0, this.analogue, this.keys)
      }
    }
    var Ia = Qr(4820),
      fa = Qr(804),
      Ea = Qr(300),
      pa = Qr(109),
      xa = Qr(35381),
      ma = Qr(789),
      Na = Qr(9996);

    function Ua() {
      const rr = Zr.c.get("clientEscMenuOptions"),
        Sr = (0, fa.u)(rr);
      return {
        mouse: (0, pa.isMobile)() ? Sr : rr.mouseSensitivity,
        touch: Sr,
        fovPercent: rr.cameraFOV
      }
    }

    function ta() {
      const rr = Zr.c.get("clientEscMenuOptions"),
        Sr = Zr.c.get("isTouchScreen") ? (0, fa.u)(rr) : rr.mouseSensitivity,
        Qr = Ua().mouse;
      return Qr > 0 ? Sr / Qr : 1
    }

    function ha(rr) {
      const Sr = () => {
        rr.setSoundPrefs(Zr.c.get("soundVolume"), Zr.c.get("soundOnFromAd"))
      };
      let Qr = null;
      const Wr = () => {
        const {
          showFog: Sr,
          enableLighting: Wr,
          fogChunkDistance: ar,
          chunkFadeIn: jr
        } = Zr.c.get("clientEscMenuOptions"), Ir = {
          showFog: Sr,
          lighting: Wr,
          fogChunks: ar,
          chunkFade: jr,
          cellLight: (0, Ia.i)("cellLight") ? (0, Ia.i)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        Qr && (0, mr.xe)(Qr) === (0, mr.xe)(Ir) && Qr.fogChunks === ar || (Qr = Ir, rr.setEnvPrefs(Qr))
      };
      let ar = null;
      const Ir = () => {
        const Sr = function() {
          const rr = Zr.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: Zr.c.get("areNametagsHidden"),
            crouchToggle: rr.crouchIsToggle,
            bhopDisabled: rr.disableBunnyHopping,
            disableBobbing: rr.disableBobbing,
            ezTowering: rr.ezTowering ? (0, Ea.g)() : null,
            ezBridging: rr.ezBridging,
            showChunkBorders: rr.showChunkBorders,
            touchWalk: !(0, Na.g)(),
            edgeGuard: rr.touchEdgeGuard,
            edgeGuardLong: (0, ma.e)(),
            nametagCutDistance: (0, xa.g)()
          }
        }();
        (0, Lr.Yd)(ar, Sr) || (ar = Sr, rr.setUiPrefs(Sr))
      };
      let fr = null;
      const Er = () => {
        const Sr = Ua();
        (0, Lr.Yd)(fr, Sr) || (fr = Sr, rr.setLookPrefs(Sr))
      };
      Sr(), Wr(), Ir(), Er();
      const pr = [(0, jr.j)("appManagerUpdated|soundVolume", Sr), (0, jr.j)("appManagerUpdated|soundOnFromAd", Sr), (0, jr.j)("appManagerUpdated|clientEscMenuOptions", (() => {
        Wr(), Ir(), Er()
      })), (0, jr.j)(Na.c, Ir), (0, jr.j)("appManagerUpdated|enabledDebugFeatures", Wr), (0, jr.j)("appManagerUpdated|areNametagsHidden", Ir), (0, jr.j)("appManagerUpdated|showDistantNametags", Ir)];
      return () => {
        for (const rr of pr) rr()
      }
    }
    var za = Qr(42758),
      Ya = Qr(42767);
    var na = (0, Ya.d)("lend"),
      ea = (0, Ya.d)("starting"),
      Ka = (0, Ya.d)("generation"),
      ya = (0, Ya.d)("end");
    class Ba {
      constructor(rr) {
        this.deps = rr, Object.defineProperty(this, ya, {
          value: Ta
        }), Object.defineProperty(this, na, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ea, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ka, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, za.e)(this, na)[na] || (0, za.e)(this, ea)[ea]
      }
      async start(rr) {
        if (this.active) return "busy";
        const Sr = (0, za.e)(this, Ka)[Ka];
        (0, za.e)(this, ea)[ea] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, za.e)(this, ea)[ea] = !1
        }
        if (Sr !== (0, za.e)(this, Ka)[Ka]) return "refused";
        const Qr = this.deps.beginSave();
        if (!Qr) return "refused";
        const Zr = Number(BigInt.asUintN(32, rr)),
          Wr = Number(BigInt.asUintN(32, rr >> 32n));
        let ar = "refused";
        return this.deps.recorderCall(((rr, Sr) => {
          const jr = Qr.editState,
            Ir = rr.stage(jr.length);
          0 !== Ir ? (new Uint8Array(Sr.buffer, Ir, jr.length).set(jr), rr.Kjr(Qr.headLen, Zr, Wr) && (ar = "sealing")) : ar = "tooLarge"
        }), !0), "sealing" !== ar ? (Qr.end(), ar) : ((0, za.e)(this, na)[na] = Qr, "sealing")
      }
      beforeRecorderStep() {
        const rr = (0, za.e)(this, na)[na];
        if (!rr) return null;
        let Sr = -1,
          Qr = 0;
        if (!this.deps.recorderCall((rr => {
            Sr = rr.yjr(), Sr > 0 && (Qr = rr.Tjr())
          }))) return (0, za.e)(this, ya)[ya](rr, "stopped");
        if (Sr < 0) return (0, za.e)(this, ya)[ya](rr, "read");
        if (0 === Sr) return null;
        const Zr = rr.head(Qr, Sr);
        let Wr = !1;
        if (Zr && this.deps.recorderCall(((rr, Qr) => {
            const ar = rr.stage(Sr);
            0 !== ar && (new Uint8Array(Qr.buffer, ar, Sr).set(Zr), Wr = !0)
          }), !0), Wr) return null;
        const ar = rr.givenUp();
        this.deps.recorderCall((rr => {
          rr.vjr()
        }));
        const jr = (0, za.e)(this, ya)[ya](rr, ar ? "givenUp" : "stopped");
        return ar && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), jr
      }
      stop() {
        (0, za.e)(this, Ka)[Ka]++;
        const rr = (0, za.e)(this, na)[na];
        rr && (this.deps.recorderCall((rr => {
          rr.vjr()
        })), (0, za.e)(this, ya)[ya](rr, "stopped"))
      }
    }

    function Ta(rr, Sr) {
      return (0, za.e)(this, na)[na] = null, rr.end(), Sr
    }

    function va(rr, Sr) {
      const Qr = new Uint8Array(4),
        Zr = new DataView(Qr.buffer);
      return Zr.setUint8(0, rr ? 1 : 0), Zr.setUint16(2, Math.max(0, Math.min(65535, Math.round(Sr))), !0), Qr
    }

    function Oa(rr, Sr) {
      return rr > function(rr) {
        return 16777216 + 314572.8 * Math.max(0, rr)
      }(Sr) + 33554432
    }
    let La = null;

    function la(rr) {
      return La ??= async function(rr) {
        const Sr = rr.loadInFlight();
        Sr && await Sr.catch((() => {}));
        if (rr.trapped()) return "trapped";
        if (rr.busy() || !Oa(rr.memoryBytes(), rr.clipSeconds())) return "sp";
        rr.unload();
        let Qr = !1;
        try {
          Qr = await rr.load()
        } catch {
          Qr = !1
        }
        if (!Qr) return rr.trapped() ? "trapped" : rr.vU() ? "vU" : "failed";
        return "recycled"
      }(rr).finally((() => {
        La = null
      })), La
    }
    const Xa = "Replay recording couldn't load, so try again.",
      Pa = "Replay recording stopped working, so reload the page to record replays again.",
      Ha = new Set([mr.bd.ToggleRecording, mr.bd.SaveClip]);
    var qa = (0, Ya.d)("bindings"),
      Ra = (0, Ya.d)("module"),
      ga = (0, Ya.d)("memory"),
      Ca = (0, Ya.d)("trapped"),
      Ma = (0, Ya.d)("vU"),
      Ga = (0, Ya.d)("recycleDue"),
      ka = (0, Ya.d)("loading"),
      Aa = (0, Ya.d)("generation"),
      Va = (0, Ya.d)("viewDrawn"),
      ia = (0, Ya.d)("clip"),
      wa = (0, Ya.d)("session"),
      ca = (0, Ya.d)("control"),
      Fa = (0, Ya.d)("deferred"),
      oa = (0, Ya.d)("coreU8"),
      ba = (0, Ya.d)("coreU32"),
      Ja = (0, Ya.d)("moduleU8"),
      Da = (0, Ya.d)("edited"),
      da = (0, Ya.d)("sendSession"),
      sa = (0, Ya.d)("checkNotInEvents"),
      ua = (0, Ya.d)("clipping"),
      rj = (0, Ya.d)("busy"),
      Sj = (0, Ya.d)("use"),
      Qj = (0, Ya.d)("ensureLoaded"),
      Zj = (0, Ya.d)("loadOnce"),
      Wj = (0, Ya.d)("recycleAfterStep"),
      aj = (0, Ya.d)("settleRecycle"),
      jj = (0, Ya.d)("load"),
      Ij = (0, Ya.d)("attach"),
      fj = (0, Ya.d)("resendHeld"),
      Ej = (0, Ya.d)("recycle"),
      pj = (0, Ya.d)("send"),
      xj = (0, Ya.d)("unload"),
      mj = (0, Ya.d)("dropModule"),
      Nj = (0, Ya.d)("coreBytes"),
      Uj = (0, Ya.d)("coreWords"),
      tj = (0, Ya.d)("moduleBytes"),
      hj = (0, Ya.d)("loadFailed"),
      zj = (0, Ya.d)("call"),
      Yj = (0, Ya.d)("guard"),
      nj = (0, Ya.d)("trapOn");
    class ej {
      constructor(rr) {
        this.deps = rr, Object.defineProperty(this, nj, {
          value: cj
        }), Object.defineProperty(this, Yj, {
          value: wj
        }), Object.defineProperty(this, zj, {
          value: ij
        }), Object.defineProperty(this, hj, {
          value: Vj
        }), Object.defineProperty(this, tj, {
          value: Aj
        }), Object.defineProperty(this, Uj, {
          value: kj
        }), Object.defineProperty(this, Nj, {
          value: Gj
        }), Object.defineProperty(this, mj, {
          value: Mj
        }), Object.defineProperty(this, xj, {
          value: Cj
        }), Object.defineProperty(this, pj, {
          value: gj
        }), Object.defineProperty(this, Ej, {
          value: Rj
        }), Object.defineProperty(this, fj, {
          value: qj
        }), Object.defineProperty(this, Ij, {
          value: Hj
        }), Object.defineProperty(this, jj, {
          value: Pj
        }), Object.defineProperty(this, aj, {
          value: Xj
        }), Object.defineProperty(this, Wj, {
          value: lj
        }), Object.defineProperty(this, Zj, {
          value: Lj
        }), Object.defineProperty(this, Qj, {
          value: Oj
        }), Object.defineProperty(this, Sj, {
          value: vj
        }), Object.defineProperty(this, rj, {
          value: Tj
        }), Object.defineProperty(this, ua, {
          value: Bj
        }), Object.defineProperty(this, sa, {
          value: yj
        }), Object.defineProperty(this, da, {
          value: Kj
        }), Object.defineProperty(this, qa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ra, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ga, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ca, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ma, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ga, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ka, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Aa, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Va, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, ia, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, wa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ca, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Fa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, oa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ba, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ja, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Da, {
          writable: !0,
          value: void 0
        }), (0, za.e)(this, Da)[Da] = new Ba({
          ensureLoaded: () => (0, za.e)(this, Qj)[Qj](),
          recorderCall: (rr, Sr) => {
            Sr && (0, za.e)(this, sa)[sa]("an edited save's stage");
            const Qr = (0, za.e)(this, zj)[zj](((Sr, Qr) => (rr(Sr, Qr), !0)));
            return null !== Qr && void 0 !== Qr && Qr
          },
          beginSave: rr.beginSave,
          givenUp: rr.givenUp
        })
      }
      get active() {
        return null !== (0, za.e)(this, Ra)[Ra]
      }
      get trapped() {
        return (0, za.e)(this, Ca)[Ca]
      }
      get loading() {
        return null !== (0, za.e)(this, ka)[ka]
      }
      prefetch() {
        (0, za.e)(this, Ma)[Ma] || (0, za.e)(this, Ca)[Ca] || (0, za.e)(this, Ra)[Ra] || (0, za.e)(this, ka)[ka] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, za.e)(this, Va)[Va] = !0, (0, za.e)(this, ua)[ua]() && (0, za.e)(this, Sj)[Sj]()
      }
      prefs(rr, Sr) {
        (0, za.e)(this, ia)[ia] = {
          on: rr,
          seconds: Sr
        }, (0, za.e)(this, pj)[pj](mr.Zc.Prefs, va(rr, Sr)), rr && (0, za.e)(this, Va)[Va] && (0, za.e)(this, Sj)[Sj]()
      }
      control(rr) {
        const Sr = function(rr) {
          return new Uint8Array([rr, 0, 0, 0])
        }(rr);
        if (Ha.has(rr)) {
          if (!(0, za.e)(this, Ca)[Ca]) return (0, za.e)(this, Ra)[Ra] ? void(0, za.e)(this, pj)[pj](mr.Zc.Control, Sr) : ((0, za.e)(this, ca)[ca] = Sr, void(0, za.e)(this, Sj)[Sj]());
          this.deps.failed(Pa)
        } else(0, za.e)(this, Ma)[Ma] || this.deps.coreCommand(mr.Zc.Control, Sr)
      }
      session(rr) {
        (0, za.e)(this, wa)[wa] = rr, (0, za.e)(this, da)[da](rr)
      }
      filePartDone(rr, Sr) {
        (0, za.e)(this, pj)[pj](mr.Zc.FilePartDone, function(rr, Sr) {
          const Qr = new Uint8Array(8),
            Zr = new DataView(Qr.buffer);
          return Zr.setUint32(0, rr, !0), Zr.setUint32(4, Sr, !0), Qr
        }(rr, Sr))
      }
      fileDone(rr) {
        return (0, za.e)(this, pj)[pj](mr.Zc.FileDone, function(rr) {
          const Sr = new Uint8Array(4);
          return new DataView(Sr.buffer).setUint32(0, rr, !0), Sr
        }(rr)), (0, za.e)(this, Wj)[Wj]()
      }
      saveEdited(rr) {
        return (0, za.e)(this, sa)[sa]("saveEdited"), (0, za.e)(this, Da)[Da].start(rr)
      }
      afterFrame() {
        if (!(0, za.e)(this, Ra)[Ra]) return;
        "read" === (0, za.e)(this, Da)[Da].beforeRecorderStep() && (0, za.e)(this, Wj)[Wj]();
        const rr = (0, za.e)(this, Ga)[Ga];
        (0, za.e)(this, Ga)[Ga] = null;
        const Sr = (0, za.e)(this, Ra)[Ra],
          Qr = (0, za.e)(this, ga)[ga];
        if (!Sr || !Qr) return void(null === rr || void 0 === rr || rr.resolve((0, za.e)(this, Ca)[Ca] ? "trapped" : "sp"));
        const {
          core: Zr
        } = this.deps, Wr = Zr.ljr(2);
        let ar, jr, Ir, fr, Er = 0,
          pr = 0;
        if (0 !== Wr) {
          var xr, mr;
          const rr = (0, za.e)(this, Uj)[Uj]();
          Er = null !== (xr = rr[Wr >>> 2]) && void 0 !== xr ? xr : 0, pr = null !== (mr = rr[1 + (Wr >>> 2)]) && void 0 !== mr ? mr : 0
        }
        try {
          if (pr > 0) {
            const rr = Sr.feed(pr);
            0 !== rr && (0, za.e)(this, tj)[tj](Qr).set((0, za.e)(this, Nj)[Nj]().subarray(Er, Er + pr), rr)
          }
          ar = Sr.step(), jr = Sr.Xjr(), Ir = Sr.Pjr(), fr = Sr.Hjr()
        } catch (Nr) {
          if (!(0, za.e)(this, nj)[nj](Nr)) throw null === rr || void 0 === rr || rr.resolve("sp"), Nr;
          return void(null === rr || void 0 === rr || rr.resolve("trapped"))
        }
        if (ar > 0) {
          const rr = Zr.qjr(2, ar);
          0 !== rr && (0, za.e)(this, Nj)[Nj]().set((0, za.e)(this, tj)[tj](Qr).subarray(jr, jr + ar), rr)
        }
        if (Ir > 0) {
          (0, za.e)(this, Fa)[Fa] = [];
          try {
            this.deps.events(new Uint8Array(Qr.buffer, fr, Ir), Qr)
          } catch (Nr) {
            throw null === rr || void 0 === rr || rr.resolve("sp"), Nr
          } finally {
            const rr = (0, za.e)(this, Fa)[Fa];
            (0, za.e)(this, Fa)[Fa] = null;
            for (const [Sr, Qr] of rr)(0, za.e)(this, pj)[pj](Sr, Qr)
          }
        }
        if (!(0, za.e)(this, ua)[ua]() && !(0, za.e)(this, rj)[rj]()) return (0, za.e)(this, xj)[xj](), void(null === rr || void 0 === rr || rr.resolve("sp"));
        null === rr || void 0 === rr || rr.resolve((0, za.e)(this, Ej)[Ej]())
      }
      dispose() {
        (0, za.e)(this, Ma)[Ma] = !0, (0, za.e)(this, xj)[xj]()
      }
    }

    function Kj(rr) {
      (0, za.e)(this, pj)[pj](mr.Zc.Session, function(rr) {
        const Sr = new TextEncoder,
          Qr = Sr.encode(rr.game).subarray(0, 65535),
          Zr = Sr.encode(rr.lobby).subarray(0, 65535),
          Wr = new Uint8Array(22 + Qr.length + 2 + Zr.length),
          ar = new DataView(Wr.buffer);
        ar.setFloat64(0, rr.unixMs, !0), ar.setBigUint64(8, BigInt.asUintN(64, rr.session), !0), ar.setUint8(16, rr.lobbyType);
        let jr = 20;
        for (const Ir of [Qr, Zr]) ar.setUint16(jr, Ir.length, !0), Wr.set(Ir, jr + 2), jr += 2 + Ir.length;
        return Wr
      }({
        ...rr,
        unixMs: this.deps.unixNow()
      }))
    }

    function yj(rr) {
      false
    }

    function Bj() {
      var rr, Sr;
      return null !== (rr = null === (Sr = (0, za.e)(this, ia)[ia]) || void 0 === Sr ? void 0 : Sr.on) && void 0 !== rr && rr
    }

    function Tj() {
      const rr = (0, za.e)(this, Ra)[Ra];
      let Sr = !0;
      if (rr) try {
        Sr = rr.busy()
      } catch (Qr) {
        if (!(0, za.e)(this, nj)[nj](Qr)) throw Qr
      }
      return Sr || (0, za.e)(this, Da)[Da].active
    }
    async function vj() {
      !(0, za.e)(this, Ma)[Ma] && this.deps.allowed() ? await (0, za.e)(this, Qj)[Qj]() : (0, za.e)(this, ca)[ca] = null
    }

    function Oj() {
      return (0, za.e)(this, Ca)[Ca] || (0, za.e)(this, Ma)[Ma] ? Promise.resolve(!1) : (0, za.e)(this, Ra)[Ra] ? Promise.resolve(!0) : ((0, za.e)(this, ka)[ka] ??= (0, za.e)(this, Zj)[Zj](), (0, za.e)(this, ka)[ka])
    }
    async function Lj() {
      let rr = !1;
      try {
        return rr = await (0, za.e)(this, jj)[jj](), rr
      } finally {
        rr || ((0, za.e)(this, ca)[ca] = null), (0, za.e)(this, ka)[ka] = null
      }
    }

    function lj() {
      if (!(0, za.e)(this, Ra)[Ra]) return Promise.resolve((0, za.e)(this, Ca)[Ca] ? "trapped" : "sp");
      if (!(0, za.e)(this, Ga)[Ga]) {
        let rr = () => {};
        const Sr = new Promise((Sr => {
          rr = Sr
        }));
        (0, za.e)(this, Ga)[Ga] = {
          promise: Sr,
          resolve: rr
        }
      }
      return (0, za.e)(this, Ga)[Ga].promise
    }

    function Xj(rr) {
      const Sr = (0, za.e)(this, Ga)[Ga];
      (0, za.e)(this, Ga)[Ga] = null, null === Sr || void 0 === Sr || Sr.resolve(rr)
    }
    async function Pj() {
      let rr = (0, za.e)(this, qa)[qa];
      if (!rr) {
        const Sr = (0, za.e)(this, Aa)[Aa];
        try {
          rr = await this.deps.load()
        } catch (Qr) {
          return Sr === (0, za.e)(this, Aa)[Aa] && await (0, za.e)(this, hj)[hj](Qr), !1
        }
        if (Sr !== (0, za.e)(this, Aa)[Aa]) return this.deps.unload(), !1;
        const Zr = rr,
          Wr = (0, za.e)(this, Yj)[Yj]((() => Zr.Rjr()));
        if (void 0 === Wr) return !1;
        const ar = this.deps.core.gjr();
        if (Wr !== ar) return await (0, za.e)(this, hj)[hj](new Error(`recorder port version ${Wr}, the core's ${ar}`)), !1;
        (0, za.e)(this, qa)[qa] = rr
      }
      const Sr = rr;
      try {
        if (!(0, za.e)(this, Yj)[Yj]((() => ((0, za.e)(this, Ra)[Ra] = new Sr.Cjr, (0, za.e)(this, ga)[ga] = Sr.Ojr(), !0)))) return !1;
        (0, za.e)(this, fj)[fj]();
        const rr = (0, za.e)(this, ca)[ca];
        return (0, za.e)(this, ca)[ca] = null, rr && (0, za.e)(this, pj)[pj](mr.Zc.Control, rr), (0, za.e)(this, Ij)[Ij]()
      } catch (Qr) {
        return (0, za.e)(this, xj)[xj](), await (0, za.e)(this, hj)[hj](Qr), !1
      }
    }

    function Hj() {
      return this.deps.core.Mjr(0), 1 === this.deps.core.Mjr(1) || ((0, za.e)(this, xj)[xj](), this.deps.failed(Xa), !1)
    }

    function qj() {
      (0, za.e)(this, ia)[ia] && (0, za.e)(this, pj)[pj](mr.Zc.Prefs, va((0, za.e)(this, ia)[ia].on, (0, za.e)(this, ia)[ia].seconds)), (0, za.e)(this, wa)[wa] && (0, za.e)(this, da)[da]((0, za.e)(this, wa)[wa])
    }

    function Rj() {
      return la({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var rr, Sr;
          return null !== (rr = null === (Sr = (0, za.e)(this, ia)[ia]) || void 0 === Sr ? void 0 : Sr.seconds) && void 0 !== rr ? rr : 0
        },
        trapped: () => (0, za.e)(this, Ca)[Ca],
        busy: () => (0, za.e)(this, rj)[rj](),
        loadInFlight: () => (0, za.e)(this, ka)[ka],
        vU: () => (0, za.e)(this, Ma)[Ma],
        unload: () => {
          (0, za.e)(this, xj)[xj]()
        },
        load: () => (0, za.e)(this, Qj)[Qj]()
      })
    }

    function gj(rr, Sr) {
      (0, za.e)(this, Fa)[Fa] ? (0, za.e)(this, Fa)[Fa].push([rr, Sr]): (0, za.e)(this, zj)[zj](((Qr, Zr) => {
        const Wr = Qr.Ljr(Sr.length);
        0 !== Wr && (new Uint8Array(Zr.buffer, Wr, Sr.length).set(Sr), Qr.command(rr, Sr.length))
      }))
    }

    function Cj() {
      (0, za.e)(this, Aa)[Aa]++, (0, za.e)(this, aj)[aj]("sp"), (0, za.e)(this, Da)[Da].stop(), this.deps.core.Mjr(0), (0, za.e)(this, mj)[mj](), (0, za.e)(this, Ca)[Ca] || ((0, za.e)(this, qa)[qa] = null, this.deps.unload())
    }

    function Mj() {
      (0, za.e)(this, zj)[zj]((rr => {
        rr.free()
      })), (0, za.e)(this, Ra)[Ra] = null, (0, za.e)(this, ga)[ga] = null, (0, za.e)(this, Ja)[Ja] = null
    }

    function Gj() {
      var rr;
      const Sr = this.deps.coreBuffer();
      return (null === (rr = (0, za.e)(this, oa)[oa]) || void 0 === rr ? void 0 : rr.buffer) !== Sr && ((0, za.e)(this, oa)[oa] = new Uint8Array(Sr)), (0, za.e)(this, oa)[oa]
    }

    function kj() {
      var rr;
      const Sr = this.deps.coreBuffer();
      return (null === (rr = (0, za.e)(this, ba)[ba]) || void 0 === rr ? void 0 : rr.buffer) !== Sr && ((0, za.e)(this, ba)[ba] = new Uint32Array(Sr, 0, Sr.byteLength >>> 2)), (0, za.e)(this, ba)[ba]
    }

    function Aj(rr) {
      var Sr;
      const Qr = rr.buffer;
      return (null === (Sr = (0, za.e)(this, Ja)[Ja]) || void 0 === Sr ? void 0 : Sr.buffer) !== Qr && ((0, za.e)(this, Ja)[Ja] = new Uint8Array(Qr)), (0, za.e)(this, Ja)[Ja]
    }
    async function Vj(rr) {
      await this.deps.staleOr(rr, (() => {
        this.deps.failed(Xa)
      }))
    }

    function ij(rr) {
      const Sr = (0, za.e)(this, Ra)[Ra],
        Qr = (0, za.e)(this, ga)[ga];
      if (Sr && Qr) return (0, za.e)(this, Yj)[Yj]((() => rr(Sr, Qr)))
    }

    function wj(rr) {
      if (!(0, za.e)(this, Ca)[Ca]) try {
        return rr()
      } catch (Sr) {
        if (!(0, za.e)(this, nj)[nj](Sr)) throw Sr;
        return
      }
    }

    function cj(rr) {
      return rr instanceof WebAssembly.RuntimeError && ((0, za.e)(this, Ca)[Ca] = !0, (0, za.e)(this, Ra)[Ra] = null, (0, za.e)(this, ga)[ga] = null, (0, za.e)(this, Ja)[Ja] = null, (0, za.e)(this, qa)[qa] = null, (0, za.e)(this, ca)[ca] = null, (0, za.e)(this, aj)[aj]("trapped"), this.deps.core.Mjr(0), (0, za.e)(this, Da)[Da].stop(), this.deps.crash(this.deps.markTrapped(rr)), this.deps.failed(Pa), !0)
    }
    var Fj = Qr(40221);
    const oj = new Map([
      ["skyblock", () => Qr.e(60).then((() => Qr(40218)))]
    ]);

    function bj(rr) {
      const Sr = oj.get(rr);
      return Sr ? Sr().then((() => {
        const Sr = (0, Fj.e)(rr);
        if (!Sr) throw new Error(`${rr}'s replay hook module registered no hook`);
        return Sr
      })) : null
    }
    class Jj {
      constructor(rr) {
        this.deps = rr, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(rr) {
        if (this.pending.clear(), rr === this.game && null !== this.hook) return void(this.all = !0);
        const Sr = ++this.generation;
        this.game = rr, this.hook = null, this.all = !1;
        const Qr = this.deps.loadHook(rr);
        null === Qr || void 0 === Qr || Qr.then((rr => {
          Sr === this.generation && (this.hook = rr, this.all = !0)
        }), (rr => {
          Sr === this.generation && this.deps.onError(rr)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(rr) {
        null === this.hook || this.all || this.pending.set(rr, !0)
      }
      entityInfoChanged(rr) {
        null === this.hook || this.all || this.pending.has(rr) || this.pending.set(rr, !1)
      }
      flush(rr) {
        const {
          hook: Sr
        } = this;
        if (null === Sr || !rr || !this.all && 0 === this.pending.size) return;
        const Qr = this.deps.cmd();
        if (null === Qr) return;
        const {
          api: Zr
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: rr,
            count: Sr
          } = uQ(Zr, this.ids);
          this.ids = rr;
          for (let Qr = 0; Qr < Sr; Qr++) this.pending.set(rr[Qr], !0)
        }
        const Wr = this.ids = rZ(this.ids, this.pending.size);
        let ar = 0;
        for (const Er of this.pending.keys()) Wr[ar++] = Er;
        const jr = [],
          Ir = SZ(Zr, Wr, ar, ((rr, Sr) => {
            null !== Sr && jr.push({
              serverId: rr,
              info: Sr,
              spawned: !0 === this.pending.get(rr)
            })
          }));
        if (Ir) {
          this.pending.clear();
          for (const {
              serverId: rr,
              info: Zr,
              spawned: Wr
            }
            of jr) try {
            Sr(Zr, {
              setFacingTolerance: Sr => {
                null === Sr && Wr || KQ(Qr, rr, Sr) || this.pending.set(rr, Wr)
              }
            })
          } catch (fr) {
            this.deps.onError(fr)
          }
        }
      }
    }
    var Dj = (0, Ya.d)("bindings"),
      dj = (0, Ya.d)("module"),
      sj = (0, Ya.d)("memory"),
      uj = (0, Ya.d)("trapped"),
      rI = (0, Ya.d)("generation"),
      SI = (0, Ya.d)("loading"),
      QI = (0, Ya.d)("lend"),
      ZI = (0, Ya.d)("givenUp"),
      WI = (0, Ya.d)("afterSave"),
      aI = (0, Ya.d)("opens"),
      jI = (0, Ya.d)("saveAskedAt"),
      II = (0, Ya.d)("unload"),
      fI = (0, Ya.d)("dropModule"),
      EI = (0, Ya.d)("loadFailed"),
      pI = (0, Ya.d)("saveReadsBody"),
      xI = (0, Ya.d)("command"),
      mI = (0, Ya.d)("call"),
      NI = (0, Ya.d)("guard"),
      UI = (0, Ya.d)("trapOn");
    class tI {
      constructor(rr) {
        this.deps = rr, Object.defineProperty(this, UI, {
          value: BI
        }), Object.defineProperty(this, NI, {
          value: yI
        }), Object.defineProperty(this, mI, {
          value: KI
        }), Object.defineProperty(this, xI, {
          value: eI
        }), Object.defineProperty(this, pI, {
          get: nI,
          set: void 0
        }), Object.defineProperty(this, EI, {
          value: YI
        }), Object.defineProperty(this, fI, {
          value: zI
        }), Object.defineProperty(this, II, {
          value: hI
        }), Object.defineProperty(this, Dj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, dj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sj, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uj, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, rI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, SI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, QI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ZI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, WI, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aI, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, jI, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, za.e)(this, dj)[dj] && null === (0, za.e)(this, WI)[WI]
      }
      async open(rr, Sr) {
        if ((0, za.e)(this, uj)[uj]) return mr.kd.ModuleTrap;
        let Qr = (0, za.e)(this, Dj)[Dj];
        if (!Qr) {
          const rr = (0, za.e)(this, rI)[rI];
          (0, za.e)(this, SI)[SI]++;
          try {
            Qr = await this.deps.load()
          } catch (Wr) {
            return (0, za.e)(this, SI)[SI]--, rr !== (0, za.e)(this, rI)[rI] ? "stopped" : (0, za.e)(this, EI)[EI](Wr, Sr)
          }
          if ((0, za.e)(this, SI)[SI]--, rr !== (0, za.e)(this, rI)[rI]) return (0, za.e)(this, Dj)[Dj] || 0 !== (0, za.e)(this, SI)[SI] || (0, za.e)(this, uj)[uj] || this.deps.unload(), "stopped";
          if ((0, za.e)(this, uj)[uj]) return mr.kd.ModuleTrap;
          const Zr = Qr.Rjr(),
            ar = this.deps.core.gjr();
          if (Zr !== ar) return (0, za.e)(this, EI)[EI](new Error(`replay port version ${Zr}, the core's ${ar}`), Sr);
          (0, za.e)(this, Dj)[Dj] = Qr
        }
        if (!(0, za.e)(this, dj)[dj]) {
          const rr = Qr;
          if (!(0, za.e)(this, NI)[NI]((() => {
              (0, za.e)(this, dj)[dj] = new rr.Gjr, (0, za.e)(this, sj)[sj] = rr.kjr()
            }))) return mr.kd.ModuleTrap
        }
        let Zr = !1;
        return (0, za.e)(this, mI)[mI](((Sr, Qr) => {
          null !== (0, za.e)(this, WI)[WI] && Sr.step(0, 0);
          const Wr = Sr.stage(rr.length);
          0 !== Wr && (new Uint8Array(Qr.buffer, Wr, rr.length).set(rr), Sr.open(), (0, za.e)(this, ZI)[ZI] = (0, za.e)(this, QI)[QI], (0, za.e)(this, WI)[WI] = null, (0, za.e)(this, aI)[aI]++, Zr = !0)
        })) ? Zr ? "opening" : mr.kd.TooLarge : mr.kd.ModuleTrap
      }
      beforeFrame(rr) {
        const Sr = (0, za.e)(this, dj)[dj],
          Qr = (0, za.e)(this, sj)[sj];
        if (!Sr || !Qr || null !== (0, za.e)(this, WI)[WI]) return;
        const {
          core: Zr
        } = this.deps, Wr = Zr.Ajr(rr);
        if (Wr < 0) return;
        const ar = Math.floor(Wr);
        let jr, Ir;
        try {
          jr = Sr.step(ar, Wr - ar), Ir = Sr.Xjr()
        } catch (Er) {
          return void(0, za.e)(this, UI)[UI](Er)
        }
        const fr = Zr.qjr(1, jr);
        if (0 === fr) {
          const rr = (0, za.e)(this, mI)[mI]((rr => {
            rr.close()
          }));
          if (!rr) return;
          return (0, za.e)(this, pI)[pI] ? (0, za.e)(this, WI)[WI] = "drop" : (0, za.e)(this, fI)[fI](), void Zr.Vjr(mr.kd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), fr, jr).set(new Uint8Array(Qr.buffer, Ir, jr))
      }
      play() {
        (0, za.e)(this, xI)[xI]((rr => {
          rr.play()
        }))
      }
      pause() {
        (0, za.e)(this, xI)[xI]((rr => {
          rr.pause()
        }))
      }
      seek(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, za.e)(this, xI)[xI]((Qr => {
          Qr.seek(rr, Sr)
        }))
      }
      setMark(rr, Sr) {
        return (0, za.e)(this, xI)[xI]((Qr => {
          Qr.ijr(rr, Sr)
        }))
      }
      addKeyframe(rr, Sr) {
        return (0, za.e)(this, xI)[xI]((Qr => {
          Qr.wjr(rr[0], rr[1], rr[2], Sr[0], Sr[1], Sr[2])
        }))
      }
      setKeyframe(rr, Sr) {
        return (0, za.e)(this, xI)[xI]((Qr => {
          Qr.cjr(rr, Sr)
        }))
      }
      moveKeyframe(rr, Sr) {
        return (0, za.e)(this, xI)[xI]((Qr => {
          Qr.ojr(rr, Sr)
        }))
      }
      deleteKeyframes(rr, Sr) {
        return (0, za.e)(this, xI)[xI]((Qr => {
          Qr.bjr(rr, Sr)
        }))
      }
      crop(rr, Sr) {
        return null === (0, za.e)(this, QI)[QI] && (0, za.e)(this, xI)[xI]((Qr => {
          Qr.crop(rr, Sr)
        }))
      }
      beginSave() {
        const rr = (0, za.e)(this, jI)[jI];
        if ((0, za.e)(this, jI)[jI] = null, null !== rr && rr !== (0, za.e)(this, aI)[aI]) return null;
        let Sr = 0,
          Qr = null;
        if ((0, za.e)(this, mI)[mI](((rr, Zr) => {
            Sr = rr.save(), 0 !== Sr && (Qr = new Uint8Array(Zr.buffer, rr.Jjr(), rr.Djr()).slice())
          })), 0 === Sr || !Qr) return null;
        const Zr = {
          headLen: Sr,
          editState: Qr,
          givenUp: () => (0, za.e)(this, ZI)[ZI] === Zr,
          head: (rr, Sr) => {
            if ((0, za.e)(this, QI)[QI] !== Zr || !(0, za.e)(this, pI)[pI]) return null;
            let Qr = null;
            return (0, za.e)(this, mI)[mI](((Zr, Wr) => {
              const ar = Zr.djr();
              0 !== ar && rr >= 0 && Sr >= 0 && rr + Sr <= ar && (Qr = new Uint8Array(Wr.buffer, Zr.ujr() + rr, Sr))
            })), Qr
          },
          end: () => {
            if ((0, za.e)(this, QI)[QI] !== Zr) return;
            (0, za.e)(this, QI)[QI] = null, (0, za.e)(this, ZI)[ZI] = null, (0, za.e)(this, mI)[mI]((rr => {
              rr.rIr()
            }));
            const rr = (0, za.e)(this, WI)[WI];
            (0, za.e)(this, WI)[WI] = null, "unload" === rr ? (0, za.e)(this, II)[II]() : "drop" === rr && (0, za.e)(this, fI)[fI]()
          }
        };
        return (0, za.e)(this, QI)[QI] = Zr, Zr
      }
      askSave() {
        (0, za.e)(this, jI)[jI] = (0, za.e)(this, aI)[aI]
      }
      setSpeed(rr) {
        (0, za.e)(this, xI)[xI]((Sr => {
          Sr.SIr(rr)
        }))
      }
      setCameraMode(rr) {
        (0, za.e)(this, xI)[xI]((Sr => {
          Sr.QIr(rr)
        }))
      }
      close() {
        (0, za.e)(this, xI)[xI]((rr => {
          rr.close()
        }))
      }
      stop() {
        (0, za.e)(this, rI)[rI]++, (0, za.e)(this, pI)[pI] && ((0, za.e)(this, mI)[mI]((rr => {
          rr.close()
        })), (0, za.e)(this, dj)[dj]) ? (0, za.e)(this, WI)[WI] = "unload" : (0, za.e)(this, II)[II]()
      }
    }

    function hI() {
      (0, za.e)(this, fI)[fI](), (0, za.e)(this, uj)[uj] || ((0, za.e)(this, Dj)[Dj] = null, this.deps.unload())
    }

    function zI() {
      (0, za.e)(this, mI)[mI]((rr => {
        rr.free()
      })), (0, za.e)(this, dj)[dj] = null, (0, za.e)(this, sj)[sj] = null
    }
    async function YI(rr, Sr) {
      return await this.deps.staleOr(rr, (() => {}), {
        beforeReload: Sr
      }) ? "reloading" : mr.kd.ModuleLoad
    }

    function nI() {
      return null !== (0, za.e)(this, QI)[QI] && (0, za.e)(this, ZI)[ZI] !== (0, za.e)(this, QI)[QI]
    }

    function eI(rr) {
      return null === (0, za.e)(this, WI)[WI] && (0, za.e)(this, mI)[mI](rr)
    }

    function KI(rr) {
      const Sr = (0, za.e)(this, dj)[dj],
        Qr = (0, za.e)(this, sj)[sj];
      return !(!Sr || !Qr) && (0, za.e)(this, NI)[NI]((() => {
        rr(Sr, Qr)
      }))
    }

    function yI(rr) {
      if ((0, za.e)(this, uj)[uj]) return !1;
      try {
        return rr(), !0
      } catch (Sr) {
        return (0, za.e)(this, UI)[UI](Sr), !1
      }
    }

    function BI(rr) {
      if (!(rr instanceof WebAssembly.RuntimeError)) throw rr;
      (0, za.e)(this, uj)[uj] = !0, (0, za.e)(this, dj)[dj] = null, (0, za.e)(this, sj)[sj] = null, (0, za.e)(this, Dj)[Dj] = null, this.deps.crash(this.deps.markTrapped(rr)), this.deps.core.Vjr(mr.kd.ModuleTrap)
    }
    var TI = Qr(7432),
      vI = Qr(42890);
    const OI = "[bloxd-wasm-client]";
    const LI = String(oW);

    function lI(rr) {
      return null === rr || rr === LI ? void 0 : rr
    }

    function XI(rr) {
      var Sr, Qr, Zr, Wr, ar, Ir, fr;
      switch (rr.what) {
        case mr.vd.FlyingText: {
          let Sr;
          try {
            Sr = JSON.parse(rr.contentJson)
          } catch (Er) {
            return void console.warn(`${OI} a replay's flying text isn't JSON`, Er)
          }
          jr.i.Jp("forceFlyingMiddleMessage", {
            content: Sr,
            ba: rr.ba,
            angle: rr.angle,
            Ja: rr.Ja
          });
          break
        }
        case mr.vd.PlayerKilled:
          (0, vI.f)({
            kind: "killed",
            body: {
              deadEId: null !== (Sr = lI(rr.dead)) && void 0 !== Sr ? Sr : "",
              killerEId: lI(rr.killer),
              withItem: null !== (Qr = rr.withItem) && void 0 !== Qr ? Qr : "",
              killstreak: rr.killstreak
            }
          });
          break;
        case mr.vd.Killfeed:
          (0, vI.f)({
            kind: "custom",
            body: {
              killer: {
                eId: lI(rr.killerId),
                name: null !== (Zr = rr.killerName) && void 0 !== Zr ? Zr : void 0,
                colour: null !== (Wr = rr.killerColour) && void 0 !== Wr ? Wr : void 0
              },
              victim: {
                eId: lI(rr.victimId),
                name: null !== (ar = rr.victimName) && void 0 !== ar ? ar : void 0,
                colour: null !== (Ir = rr.victimColour) && void 0 !== Ir ? Ir : void 0
              },
              withItem: null !== (fr = rr.withItem) && void 0 !== fr ? fr : ""
            }
          })
      }
    }
    const PI = "[bloxd-wasm-client]";

    function HI(rr) {
      if (void 0 === rr || null === rr || "" === rr) return null;
      const Sr = Number(rr);
      return Number.isInteger(Sr) && Sr > oW && Sr <= 2147483647 ? Sr : null
    }

    function qI(rr) {
      return {
        id: HI(rr.eId),
        name: "string" === typeof rr.name ? rr.name : null,
        colour: "string" === typeof rr.colour ? rr.colour : null
      }
    }

    function RI(rr) {
      const Sr = (0, Za.j)(IZ.pc.PlayerKilled, (Sr => {
          var Qr, Zr;
          const Wr = (0, Qa.f)(Sr);
          if (!(0, Qa.b)(Wr)) return;
          const {
            deadEId: ar,
            killerEId: jr,
            withItem: Ir,
            killstreak: fr
          } = Wr;
          rr.recordPlayerKilled(null !== (Qr = HI(ar)) && void 0 !== Qr ? Qr : oW, null !== (Zr = HI(jr)) && void 0 !== Zr ? Zr : oW, "number" === typeof fr ? fr : 0, "string" === typeof Ir ? Ir : "")
        })),
        Qr = (0, Za.j)(IZ.pc.CustomKillfeed, (Sr => {
          const Qr = (0, Qa.f)(Sr);
          if (!(0, Qa.b)(Qr) || !(0, Qa.b)(Qr.killer) || !(0, Qa.b)(Qr.victim)) return;
          const {
            killer: Zr,
            victim: Wr,
            withItem: ar
          } = Qr;
          rr.recordKillfeed(qI(Zr), qI(Wr), "string" === typeof ar ? ar : null)
        }));
      return () => {
        Sr(), Qr()
      }
    }

    function gI(rr) {
      let Sr = null;
      const Qr = () => {
        const {
          enableClipping: Qr,
          clipDurationSeconds: Wr
        } = Zr.c.get("clientEscMenuOptions"), ar = `${Qr}:${Wr}`;
        ar !== Sr && (Sr = ar, rr.recorder.setPrefs(Qr, Wr))
      };
      return Qr(), (0, jr.j)("appManagerUpdated|clientEscMenuOptions", Qr)
    }
    const CI = "replayModule",
      MI = "recorderModule";

    function GI(rr, Sr, Qr) {
      return function() {
        return rr.isStopped ? Qr : Sr(...arguments)
      }
    }
    const kI = {
      open: () => Promise.reject(new Error(MW.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function AI() {
      return Qr.e(77).then((() => Qr(64808)))
    }

    function VI(rr) {
      (0, MW.f)({
        text: rr,
        type: "Error"
      })
    }
    class iI {
      constructor(rr) {
        this.deps = rr, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Sr,
          api: Zr,
          core: Wr
        } = rr, ar = () => rr.memory().buffer, jr = () => Sr.isStopped ? null : Sr.rings.cmd, Ir = GI(Sr, ((rr, Sr) => Wr.qjr(rr, Sr)), 0), fr = () => Wr.gjr();
        let Er = null;
        this.replay = new tI({
          core: {
            Ajr: GI(Sr, (rr => Wr.Ajr(rr)), -1),
            qjr: Ir,
            gjr: fr,
            Vjr: GI(Sr, (rr => {
              Wr.Vjr(rr)
            }), void 0)
          },
          coreBuffer: ar,
          load: async () => (Er = await Qr.e(78).then((() => Qr(64824))), Er.loadReplayModule()),
          unload: () => {
            var rr;
            null === (rr = Er) || void 0 === rr || rr.unloadReplayModule()
          },
          markTrapped: rr => Er ? Er.markReplayTrapped(rr) : new Error(String(rr)),
          staleOr: (Sr, Qr, Zr) => rr.staleOr(CI, Sr, Qr, Zr),
          crash: Sr => {
            rr.reportFault(CI, Sr)
          }
        });
        let pr = null;
        this.recorder = new ej({
          core: {
            Mjr: GI(Sr, (rr => Wr.Mjr(rr)), 0),
            ljr: GI(Sr, (rr => Wr.ljr(rr)), 0),
            qjr: Ir,
            gjr: fr
          },
          coreCommand: (rr, Sr) => {
            var Qr, Zr;
            return null !== (Qr = null === (Zr = jr()) || void 0 === Zr ? void 0 : Zr.writeCmd(rr, 0, Sr)) && void 0 !== Qr && Qr
          },
          coreBuffer: ar,
          load: async () => (pr = await AI(), pr.loadRecorderModule()),
          prefetch: () => {
            AI().then((rr => rr.prefetchRecorderModule())).catch((rr => {
              console.warn(`${PI} the recorder module didn't prefetch, so a save loads it:`, rr)
            }))
          },
          unload: () => {
            var rr;
            null === (rr = pr) || void 0 === rr || rr.unloadRecorderModule()
          },
          markTrapped: rr => pr ? pr.markRecorderTrapped(rr) : new Error(String(rr)),
          memoryBytes: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = pr) || void 0 === Sr ? void 0 : Sr.recorderMemoryBytes()) && void 0 !== rr ? rr : 0
          },
          staleOr: (Sr, Qr) => rr.staleOr(MI, Sr, Qr),
          crash: Sr => {
            rr.reportFault(MI, Sr)
          },
          allowed: () => !0 === rr.options.get("canRecordReplays"),
          failed: rr => {
            this.runtime.recorder.stopped(), VI(rr)
          },
          events: (rr, Sr) => {
            this.runtime.recorderEvents(rr, Sr)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: VI,
          unixNow: () => Date.now()
        });
        const xr = new FW({
          core: {
            Yjr: GI(Sr, (rr => Wr.Yjr(rr)), 0),
            ejr: GI(Sr, (() => {
              Wr.ejr()
            }), void 0),
            Iz: GI(Sr, (() => Wr.Iz()), 0),
            njr: GI(Sr, (() => Wr.njr()), 0)
          },
          buffer: ar,
          apiView: () => Zr.apiView,
          cmd: jr,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Jj({
          api: Zr,
          cmd: jr,
          loadHook: bj,
          onError: rr => {
            console.warn(`${PI} the recorded game's replay hooks:`, rr)
          }
        });
        const mr = new Sa({
          client: xr,
          buffer: ar,
          setHoldDraws: rr => {
            Sr.setHoldDraws(rr)
          },
          notify: MW.f,
          onRecorderState: () => {
            var rr;
            null === (rr = (0, kW.h)()) || void 0 === rr || rr.recorderChanged()
          },
          onViewerChange: () => {
            var rr;
            null === (rr = (0, kW.h)()) || void 0 === rr || rr.viewerChanged()
          },
          onReplayOption: Sr => {
            ! function(rr, Sr) {
              var Qr, Zr;
              const Wr = IZ.xb[Sr.key];
              if (void 0 === Wr) return;
              let ar = null !== (Qr = Sr.value) && void 0 !== Qr ? Qr : JSON.parse(JSON.stringify(null !== (Zr = TI.e[Wr]) && void 0 !== Zr ? Zr : null));
              if (null !== Sr.value && Sr.key < IZ.Wb.Environment && "string" === typeof ar) try {
                ar = JSON.parse(ar)
              } catch (jr) {
                return void console.warn(`${OI} a replay's ${Wr} isn't JSON`, jr)
              }
              rr.applyNewClientOptions({
                [Wr]: ar
              })
            }(rr.options, Sr)
          },
          onReplayUiEvent: XI,
          onReplayOpened: Sr => {
            this.entityHooks.opened((0, Lr.Mb)(Sr)), rr.replayShaderPack(Sr)
          },
          meshPending: () => {
            var rr, Qr;
            return null !== (rr = null === (Qr = Sr.lastHeader) || void 0 === Qr ? void 0 : Qr.renderPending) && void 0 !== rr ? rr : 0
          },
          viewerOpen: GW.e,
          download: rr => {
            (0, gW.k)(rr)
          }
        });
        this.runtime = mr, Zr.replay = mr.sink, (0, kW.t)(mr);
        const Nr = new ja({
          live: () => {
            var rr;
            return !Sr.isStopped && !0 === (null === (rr = mr.currentViewer) || void 0 === rr ? void 0 : rr.inPlayback)
          },
          cmd: jr,
          dragScale: ta
        });
        this.freecam = Nr, (0, kW.r)(Nr), this.recordedOptions = function(rr, Sr) {
          const Qr = IZ.xb,
            Zr = Qr.map(((Qr, Zr) => Sr.subscribe(Qr, (Sr => {
              rr.setOption(Zr, Sr)
            }))));
          return {
            sendAll() {
              rr.setAllOptions(Qr.map((rr => Sr.get(rr))))
            },
            stop() {
              for (const rr of Zr) rr()
            }
          }
        }(mr.recorder, rr.options), this.stops = [(0, zZ.r)((rr => {
          Nr.flush();
          try {
            this.replay.beforeFrame(rr)
          } catch (Sr) {
            this.deps.reportFault("replayFrame", Sr)
          }
        })), (0, zZ.A)(((rr, Sr) => {
          try {
            this.recorder.afterFrame(), Sr && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (Qr) {
            this.deps.reportFault("recorderFrame", Qr)
          }
          try {
            mr.afterFrame(rr)
          } catch (Qr) {
            this.deps.reportFault("replayRuntime", Qr)
          }
        })), gI(mr), () => {
          this.recordedOptions.stop()
        }, RI(mr.recorder), (0, Wa.l)((rr => {
          let {
            action: Sr,
            down: Qr
          } = rr;
          var Zr;
          Qr && (null === (Zr = (0, kW.h)()) || void 0 === Zr || Zr.keyDown(Sr))
        }))];
        const Ur = () => {
          const rr = mr.currentViewer;
          return !0 === (null === rr || void 0 === rr ? void 0 : rr.isOpen) ? rr : null
        };
        (0, CW.e)({
          open: (rr, Sr) => this.open(rr, Sr),
          replayKey: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = Ur()) || void 0 === Sr ? void 0 : Sr.id) && void 0 !== rr ? rr : null
          },
          saveRefusal: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = Ur()) || void 0 === Sr ? void 0 : Sr.saveRefusal) && void 0 !== rr ? rr : null
          },
          encode: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = Ur()) || void 0 === Sr ? void 0 : Sr.save()) && void 0 !== rr ? rr : Promise.resolve(null)
          },
          fileHandle: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = mr.currentViewer) || void 0 === Sr ? void 0 : Sr.fileHandle) && void 0 !== rr ? rr : null
          },
          markSaved: (rr, Sr) => {
            var Qr;
            null === (Qr = mr.currentViewer) || void 0 === Qr || Qr.markSaved(rr, Sr)
          }
        })
      }
      netEvent(rr) {
        if ("connection" === rr.type)
          if (rr.phase === mr.G.Activated) {
            this.activeConn = rr.conn;
            const Sr = this.deps.sessionInfo(rr.conn);
            null !== Sr && (this.runtime.activated({
              lobbyType: (0, lr.w)(Sr.lobbyName),
              gameNameWithVariation: Sr.gameNameWithVariation,
              lobbyName: Sr.lobbyName
            }), this.recordedOptions.sendAll())
          } else rr.phase !== mr.G.Left && rr.phase !== mr.G.Closed || rr.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const rr of this.stops) rr();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, kW.l)() === this.runtime && (0, kW.t)(null), (0, kW.i)() === this.freecam && (0, kW.r)(null), (0, CW.e)(kI), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(rr, Sr) {
        const {
          running: Qr
        } = this.deps;
        if (Qr.isStopped) throw new Error(MW.d.coreStopped.text);
        if (rr.byteLength > 67108864) throw new Error(MW.d.cantOpen.text);
        let Zr;
        try {
          Zr = await async function(rr) {
            const Sr = await rr.loadViewer();
            return Sr.inPlayback || (0, zZ.N)().leaveGame(null), Sr
          }(this.runtime)
        } catch (Wr) {
          throw console.warn(`${PI} the replay viewer didn't load`, Wr), new Error(MW.d.viewerLoadFailed.text)
        }
        if (Qr.isStopped) throw new Error(MW.d.coreStopped.text);
        await Zr.open(rr, Sr)
      }
    }
    var wI = Qr(2114);

    function cI(rr, Sr) {
      const {
        aux: Qr,
        payload: Zr
      } = function(rr) {
        return {
          aux: rr.reset ? mr.jc.ResetFirst : 0,
          payload: oI(rr.changes)
        }
      }(Sr);
      rr.queueOptions(Qr, Zr) && (Sr.reset && wI.d.reset(), wI.d.apply(Sr.changes))
    }
    const FI = new TextEncoder;

    function oI(rr) {
      const Sr = new bI;
      return DI(Sr, rr), Sr.bytes()
    }
    class bI {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(rr) {
        if (this.len + rr <= this.buf.length) return;
        const Sr = new Uint8Array(Math.max(2 * this.buf.length, this.len + rr));
        Sr.set(this.buf.subarray(0, this.len)), this.buf = Sr, this.view = new DataView(Sr.buffer)
      }
      u8(rr) {
        this.room(1), this.buf[this.len++] = rr
      }
      tagged(rr, Sr, Qr) {
        this.room(1 + Sr), this.buf[this.len++] = rr, 1 === Sr ? this.view.setUint8(this.len, Qr) : 2 === Sr ? this.view.setUint16(this.len, Qr) : this.view.setUint32(this.len, Qr), this.len += Sr
      }
      signed(rr, Sr, Qr) {
        this.room(1 + Sr), this.buf[this.len++] = rr, 1 === Sr ? this.view.setInt8(this.len, Qr) : 2 === Sr ? this.view.setInt16(this.len, Qr) : this.view.setInt32(this.len, Qr), this.len += Sr
      }
      f64(rr) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, rr), this.len += 8
      }
      raw(rr) {
        this.room(rr.length), this.buf.set(rr, this.len), this.len += rr.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function JI(rr, Sr, Qr, Zr, Wr, ar, jr) {
      Sr < Zr ? rr.u8(Qr | Sr) : null !== Wr && Sr < 256 ? rr.tagged(Wr, 1, Sr) : Sr < 65536 ? rr.tagged(ar, 2, Sr) : rr.tagged(jr, 4, Sr)
    }

    function DI(rr, Sr) {
      switch (typeof Sr) {
        case "undefined":
          return void rr.raw(dI);
        case "boolean":
          return void rr.u8(Sr ? 195 : 194);
        case "number":
          return void
          function(rr, Sr) {
            Sr >>> 0 === Sr ? Sr < 128 ? rr.u8(Sr) : Sr < 256 ? rr.tagged(204, 1, Sr) : Sr < 65536 ? rr.tagged(205, 2, Sr) : rr.tagged(206, 4, Sr) : (Sr | 0) === Sr ? Sr >= -32 ? rr.u8(255 & Sr) : Sr >= -128 ? rr.signed(208, 1, Sr) : Sr >= -32768 ? rr.signed(209, 2, Sr) : rr.signed(210, 4, Sr) : rr.f64(Sr)
          }(rr, Sr);
        case "string": {
          const Qr = FI.encode(Sr);
          return JI(rr, Qr.length, 160, 32, 217, 218, 219), void rr.raw(Qr)
        }
        case "object":
          break;
        default:
          return void rr.u8(192)
      }
      if (null === Sr) rr.u8(192);
      else if (Array.isArray(Sr)) {
        JI(rr, Sr.length, 144, 16, null, 220, 221);
        for (const Qr of Sr) DI(rr, Qr)
      } else if (Sr instanceof Uint8Array) JI(rr, Sr.length, 0, 0, 196, 197, 198), rr.raw(Sr);
      else {
        const Qr = Object.keys(Sr);
        JI(rr, Qr.length, 128, 0, null, 222, 223);
        for (const Zr of Qr) DI(rr, Zr), DI(rr, Sr[Zr])
      }
    }
    const dI = new Uint8Array([212, 0, 0]);
    var sI = Qr(37604),
      uI = Qr(37718),
      rf = Qr(42816),
      Sf = Qr(42853),
      Qf = Qr(2398);
    const Zf = [1e3, 3e3, 9e3];
    class Wf {
      constructor(rr) {
        this.host = rr, this.sets = new Map, this.table = [], this.generation = 0, this.vU = !1
      }
      onEvent(rr) {
        const Sr = function(rr) {
          if (rr.byteLength !== mr.Hd) return null;
          const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
          return {
            want: Sr.getUint16(0, !0),
            release: Sr.getUint16(2, !0)
          }
        }(rr);
        Sr && !this.vU && (Sr.release !== mr.Kd && this.release(Sr.release), Sr.want !== mr.Kd && this.want(Sr.want))
      }
      reset(rr) {
        if (!this.vU) {
          for (const [rr, Sr] of this.sets) "ready" === Sr.state && this.releaseAll(Sr.distinct), this.sets.delete(rr);
          this.table = rr, this.generation++
        }
      }
      dispose() {
        if (this.vU) return;
        this.vU = !0, this.generation++, this.table = [];
        const rr = [...this.sets.values()];
        this.sets.clear();
        let Sr = null;
        for (const Zr of rr)
          for (const rr of "ready" === Zr.state ? Zr.distinct : []) try {
            this.host.KWr(rr)
          } catch (Qr) {
            Sr ??= {
              error: Qr
            }
          }
        if (Sr) throw Sr.error
      }
      isReady(rr) {
        var Sr;
        return "ready" === (null === (Sr = this.sets.get(rr)) || void 0 === Sr ? void 0 : Sr.state)
      }
      want(rr) {
        const Sr = this.sets.get(rr);
        if ("loading" === (null === Sr || void 0 === Sr ? void 0 : Sr.state)) return Sr.wanted = !0, void this.capAnswer(rr, Sr);
        if ("ready" === (null === Sr || void 0 === Sr ? void 0 : Sr.state)) return void this.host.sendReady(jf(rr, Sr.images, Sr.size));
        const Qr = this.table[rr];
        if (!Qr || 1 !== Qr.urls.length && Qr.urls.length !== IZ.kc.CubeFaces) return this.host.sendReady(If(rr)), void this.host.onLoadFailed(rr, "", new Error(`no image set ${rr}`));
        const Zr = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(rr, Zr), this.load(rr, Qr, Zr, this.generation, 0), this.capAnswer(rr, Zr)
      }
      capAnswer(rr, Sr) {
        this.host.wait(4e3, (() => {
          this.sets.get(rr) === Sr && Sr.wanted && this.host.sendReady(If(rr))
        }))
      }
      load(rr, Sr, Qr, Zr, Wr) {
        const ar = [...new Set(Sr.urls)];
        Promise.allSettled(ar.map((rr => this.host.loadImage(rr, Sr.orientation)))).then((jr => {
          const Ir = jr.flatMap((rr => "fulfilled" === rr.status ? [rr.value] : [])),
            fr = Zr === this.generation && this.sets.get(rr) === Qr,
            Er = jr.findIndex((rr => "rejected" === rr.status));
          if (!fr || !Qr.wanted) return this.vU ? void this.releaseAfterDispose(Ir.map(af)) : (this.releaseAll(Ir.map(af)), void(fr && this.sets.delete(rr)));
          Er < 0 ? this.loaded(rr, Sr, ar, Ir) : (this.releaseAll(Ir.map(af)), this.host.sendReady(If(rr)), Wr < Zf.length ? this.host.wait(Zf[Wr], (() => {
            Zr === this.generation && this.sets.get(rr) === Qr && (Qr.wanted ? this.load(rr, Sr, Qr, Zr, Wr + 1) : this.sets.delete(rr))
          })) : (this.sets.delete(rr), this.host.onLoadFailed(rr, ar[Er], jr[Er].reason)))
        }))
      }
      loaded(rr, Sr, Qr, Zr) {
        const [Wr] = Zr, ar = [Wr.width, Wr.height], jr = Zr.every((rr => rr.width === ar[0] && rr.height === ar[1])), Ir = Sr.urls.length === IZ.kc.CubeFaces;
        if (!jr || ar[0] <= 0 || ar[1] <= 0 || ar[0] > 65535 || ar[1] > 65535 || Ir && ar[0] !== ar[1]) {
          this.releaseAll(Zr.map(af)), this.sets.delete(rr), this.host.sendReady(If(rr));
          const Qr = Zr.map((rr => `${rr.width}x${rr.height}`));
          return void this.host.onLoadFailed(rr, Sr.urls[0], new Error(`set ${rr}'s images can't make its texture: ${Qr.join(", ")}`))
        }
        const fr = Sr.urls.map((rr => Zr[Qr.indexOf(rr)].id)),
          Er = Zr.map(af);
        this.sets.set(rr, {
          state: "ready",
          images: fr,
          distinct: Er,
          size: ar
        }), this.host.sendReady(jf(rr, fr, ar))
      }
      release(rr) {
        const Sr = this.sets.get(rr);
        "loading" === (null === Sr || void 0 === Sr ? void 0 : Sr.state) ? Sr.wanted = !1: "ready" === (null === Sr || void 0 === Sr ? void 0 : Sr.state) && (this.releaseAll(Sr.distinct), this.sets.delete(rr))
      }
      releaseAll(rr) {
        for (const Sr of rr) this.host.KWr(Sr)
      }
      releaseAfterDispose(rr) {
        for (const Sr of rr) try {
          this.host.KWr(Sr)
        } catch {}
      }
    }

    function af(rr) {
      return rr.id
    }

    function jf(rr, Sr, Qr) {
      const Zr = new Uint8Array(IZ.kc.SkyImagesReadyBytes),
        Wr = new DataView(Zr.buffer);
      return Wr.setUint16(0, rr, !0), Wr.setUint16(2, Sr.length, !0), Wr.setUint16(4, Qr[0], !0), Wr.setUint16(6, Qr[1], !0), Sr.slice(0, IZ.kc.CubeFaces).forEach(((rr, Sr) => {
        Wr.setUint32(8 + 4 * Sr, rr, !0)
      })), Zr
    }

    function If(rr) {
      const Sr = new Uint8Array(IZ.kc.SkyImagesReadyBytes),
        Qr = new DataView(Sr.buffer);
      return Qr.setUint16(0, rr, !0), Qr.setUint16(2, IZ.kc.Failed, !0), Sr
    }
    let ff = Promise.resolve();
    async function Ef(rr, Sr) {
      let Qr;
      try {
        Qr = await (0, Qf.K)(rr)
      } catch (ar) {
        throw new rf.e("fetch", rr, {
          cause: ar
        })
      }
      const Zr = ff.then((() => async function(rr, Sr) {
        const Qr = new Blob([rr.slice()]);
        let Zr = await createImageBitmap(Qr, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Sr
        });
        const Wr = 1024 / Math.max(Zr.width, Zr.height);
        if (Wr < 1) {
          const rr = Zr;
          try {
            Zr = await createImageBitmap(rr, {
              resizeWidth: Math.max(1, Math.round(rr.width * Wr)),
              resizeHeight: Math.max(1, Math.round(rr.height * Wr)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            rr.close()
          }
        }
        return Zr
      }(Qr, Sr)));
      let Wr;
      ff = Zr.catch((() => {}));
      try {
        Wr = await Zr
      } catch (ar) {
        throw new rf.e("decode", rr, {
          cause: ar
        })
      }
      return {
        id: (0, rf.k)(Wr),
        width: Wr.width,
        height: Wr.height
      }
    }
    var pf = Qr(2325),
      xf = Qr(35261),
      mf = Qr(40801);
    const Nf = pf.h.length,
      Uf = new Set([...pf.h, "earth"]);

    function tf(rr) {
      const Sr = [],
        Qr = [],
        Zr = (rr, Zr) => {
          if ("custom" === Zr.type) {
            Qr.push({
              id: rr,
              kind: IZ.kc.KindCustom,
              set: Sr.length,
              earth: null
            });
            const Wr = [Zr.px, Zr.py, Zr.pz, Zr.nx, Zr.ny, Zr.nz];
            Sr.push({
              urls: (0, mf.f)(Wr),
              orientation: "none"
            })
          } else Qr.push({
            id: rr,
            kind: IZ.kc.KindEarth,
            set: 0,
            earth: Zr
          })
        };
      pf.h.forEach(((Sr, Qr) => {
        var Wr;
        Zr(Qr, null !== (Wr = hf(rr[Sr])) && void 0 !== Wr ? Wr : xf.o[Sr])
      }));
      const Wr = hf(rr.earth);
      "earth" === (null === Wr || void 0 === Wr ? void 0 : Wr.type) && Zr(Nf, Wr);
      const ar = new TextEncoder,
        jr = [],
        Ir = [];
      for (const [Nr, Ur] of Object.entries(rr)) {
        const rr = Uf.has(Nr) ? null : hf(Ur);
        if (null === rr) continue;
        const Sr = ar.encode(Nr);
        Sr.length > 255 ? Ir.push(`Ignoring texture pack skybox ${Nr}, whose name is over 255 bytes`) : jr.length === IZ.kc.MaxAdded ? Ir.push(`Ignoring texture pack skybox ${Nr}, past the ${IZ.kc.MaxAdded} skies a pack can add`) : (jr.push(Sr), Zr(IZ.kc.AddedId, rr))
      }
      const fr = Sr.length;
      Sr.push({
        urls: xf.g.map((rr => xf.h + rr)),
        orientation: "none"
      }), Sr.push({
        urls: [xf.l],
        orientation: "flipY"
      }), Sr.push({
        urls: [xf.e],
        orientation: "flipY"
      });
      const Er = IZ.kc.SkyTableHeaderBytes + Qr.length * IZ.kc.SkyTableEntryBytes,
        pr = new Uint8Array(Er + jr.reduce(((rr, Sr) => rr + 1 + Sr.length), 0)),
        xr = new DataView(pr.buffer);
      xr.setUint16(0, fr, !0), xr.setUint16(2, fr + 1, !0), xr.setUint16(4, fr + 2, !0), xr.setUint16(6, Qr.length, !0), Qr.forEach(((rr, Sr) => {
        const Qr = IZ.kc.SkyTableHeaderBytes + Sr * IZ.kc.SkyTableEntryBytes;
        xr.setUint16(Qr, rr.id, !0), xr.setUint8(Qr + 2, rr.kind);
        const Zr = Qr + 4;
        rr.earth ? function(rr, Sr, Qr) {
          const Zr = rr;
          let Wr = 0,
            ar = 0;
          for (const [jr, Ir] of zf) {
            const rr = Zr[jr];
            "number" === typeof rr && Number.isFinite(rr) && (Sr.setFloat32(Qr + 4 * Ir, rr, !0), Wr |= 1 << Ir)
          }
          for (const [jr, Ir, fr] of Yf) {
            const rr = Zr[jr];
            Array.isArray(rr) && 3 === rr.length && rr.every((rr => "number" === typeof rr && Number.isFinite(rr))) && (rr.forEach(((rr, Zr) => {
              Sr.setFloat32(Qr + fr + 4 * Zr, rr, !0)
            })), Wr |= Ir)
          }
          nf.forEach(((rr, ar) => {
            let [jr, Ir] = rr;
            const fr = Zr[jr];
            "number" === typeof fr && Number.isFinite(fr) && (Sr.setFloat32(Qr + IZ.x.CameraOffsetAt + 4 * ar, fr, !0), Wr |= Ir)
          }));
          for (const [jr, Ir] of ef) {
            const rr = Zr[jr];
            null !== rr && void 0 !== rr && (Wr |= Ir, rr && (ar |= Ir >>> 14))
          }
          Sr.setUint32(Qr + IZ.x.PresentAt, Wr, !0), Sr.setUint8(Qr + IZ.x.FlagsAt, ar)
        }(rr.earth, xr, Zr) : xr.setUint16(Zr, rr.set, !0)
      }));
      let mr = Er;
      for (const Nr of jr) pr[mr] = Nr.length, pr.set(Nr, mr + 1), mr += 1 + Nr.length;
      return {
        payload: pr,
        sets: Sr,
        leftOut: Ir
      }
    }

    function hf(rr) {
      if ("object" !== typeof rr || null === rr) return null;
      const Sr = rr;
      if ("earth" === Sr.type) return rr;
      return "custom" === Sr.type && ["px", "py", "pz", "nx", "ny", "nz"].every((rr => {
        const Qr = Sr[rr];
        return "string" === typeof Qr && Qr.length > 0
      })) ? rr : null
    }
    const zf = [
        ["inclination", IZ.x.Inclination],
        ["turbidity", IZ.x.Turbidity],
        ["luminance", IZ.x.Luminance],
        ["rayleigh", IZ.x.Rayleigh],
        ["mieCoefficient", IZ.x.MieCoefficient],
        ["mieDirectionalG", IZ.x.MieDirectionalG],
        ["distance", IZ.x.Distance],
        ["azimuth", IZ.x.Azimuth]
      ],
      Yf = [
        ["sunPosition", IZ.x.SunPosition, IZ.x.SunPositionAt],
        ["up", IZ.x.Up, IZ.x.UpAt],
        ["vertexTint", IZ.x.VertexTint, IZ.x.VertexTintAt]
      ],
      nf = [
        ["xCameraOffset", IZ.x.CameraOffsetX],
        ["yCameraOffset", IZ.x.CameraOffsetY],
        ["zCameraOffset", IZ.x.CameraOffsetZ]
      ],
      ef = [
        ["useSunPosition", IZ.x.UseSunPosition],
        ["dithering", IZ.x.Dithering],
        ["infiniteDistance", IZ.x.InfiniteDistance]
      ];

    function Kf(rr, Sr, Qr) {
      const Zr = new Bf({
        writeCmd: rr,
        warn: Sr,
        followPack: yf(Qr, Sr)
      });
      return Zr.start(), Zr
    }

    function yf(rr, Sr) {
      return Qr => {
        let Zr = () => {};
        const Wr = rr((rr => {
          Zr(), Zr = () => {}, null !== rr ? Zr = rr.subscribe((rr => {
            Qr(function(rr, Sr, Qr) {
              if ("object" !== typeof rr || null === rr) return null;
              const Zr = rr.skyBoxes;
              if ("object" !== typeof Zr || null === Zr) return null;
              if ("player" === Sr) return Zr;
              return Object.fromEntries(Object.entries(Zr).filter((rr => {
                let [Sr, Zr] = rr;
                return !! function(rr) {
                  if ("object" !== typeof rr || null === rr) return !1;
                  return "earth" === rr.type || Object.entries(rr).every((rr => {
                    let [Sr, Qr] = rr;
                    return "type" === Sr || ("" === (Zr = Qr) || null !== function(rr) {
                      var Sr, Qr, Zr;
                      return "string" !== typeof rr ? null : null !== (Sr = null === (Qr = Tf.exec(rr)) || void 0 === Qr || null === (Zr = Qr.groups) || void 0 === Zr ? void 0 : Zr.base64) && void 0 !== Sr ? Sr : null
                    }(Zr));
                    var Zr
                  }))
                }(Zr) || (Qr(`Ignoring texture pack skybox ${Sr}, whose faces are not all data URLs`, null), !1)
              })))
            }(rr.pack, null === rr.gameSource ? "player" : "customGame", Sr))
          })) : Qr(null)
        }));
        return () => {
          Wr(), Zr()
        }
      }
    }
    class Bf {
      constructor(rr) {
        var Sr, Qr, Zr;
        this.host = rr, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.vU = !1, this.wait = null !== (Sr = rr.wait) && void 0 !== Sr ? Sr : (rr, Sr) => {
          setTimeout(Sr, rr)
        }, this.loader = new Wf({
          loadImage: null !== (Qr = rr.loadImage) && void 0 !== Qr ? Qr : Ef,
          KWr: null !== (Zr = rr.KWr) && void 0 !== Zr ? Zr : rf.m,
          sendReady: rr => {
            this.queue.push({
              kind: IZ.kc.SkyImagesReady,
              payload: rr
            })
          },
          onLoadFailed: (Sr, Qr, Zr) => {
            rr.warn(`sky image set ${Sr} (${Qr}) didn't load: the last sky stays`, Zr)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(Sf.b, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((rr => {
          this.write(null !== rr && void 0 !== rr ? rr : {})
        }))
      }
      onEvent(rr) {
        this.loader.onEvent(rr)
      }
      drain() {
        if (0 === this.queue.length) return;
        let rr = 0;
        for (; rr < this.queue.length && this.host.writeCmd(this.queue[rr].kind, 0, this.queue[rr].payload);) rr++;
        rr > 0 && this.queue.splice(0, rr)
      }
      dispose() {
        this.vU = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(rr) {
        if (this.vU) return;
        const Sr = tf(rr);
        if (!(this.written && (Qr = this.written, Zr = Sr, Qr.payload.length === Zr.payload.length && Qr.payload.every(((rr, Sr) => rr === Zr.payload[Sr])) && Qr.sets.length === Zr.sets.length && Qr.sets.every(((rr, Sr) => {
            const Qr = Zr.sets[Sr];
            return rr.orientation === Qr.orientation && rr.urls.length === Qr.urls.length && rr.urls.every(((rr, Sr) => rr === Qr.urls[Sr]))
          }))))) {
          var Qr, Zr;
          for (const rr of Sr.leftOut) this.host.warn(rr, null);
          this.written = Sr, this.loader.reset(Sr.sets), this.queue = this.queue.filter((rr => rr.kind !== IZ.kc.SkyImagesReady)), this.queue.push({
            kind: IZ.kc.SkyTable,
            payload: Sr.payload
          })
        }
      }
    }
    const Tf = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var vf = Qr(2963),
      Of = Qr(2961),
      Lf = Qr(308),
      lf = Qr(190),
      Xf = Qr(3891),
      Pf = Qr(3900),
      Hf = Qr(277),
      qf = Qr(285),
      Rf = Qr(3991),
      gf = Qr(4020),
      Cf = Qr(4032),
      Mf = Qr(124),
      Gf = Qr(4091),
      kf = Qr(4088),
      Af = Qr(345),
      Vf = Qr(42707);
    class wf {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Za.j)(qZ.I, (rr => {
          this.onReply((0, Qa.d)(qZ.I, rr), performance.now())
        }))
      }
      onFrame(rr, Sr) {
        null === this.id ? this.id = rr : rr !== this.id && (this.id = rr, this.sentMs = document.hidden ? null : Sr)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(rr, Sr) {
        rr === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Sr - this.sentMs), this.sentMs = null)
      }
      take() {
        const rr = this.roundTripMs;
        return this.roundTripMs = null, rr
      }
      stop() {
        this.stopReplies()
      }
    }
    class Ff {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(rr, Sr, Qr, Zr) {
        const Wr = rr - this.sampled >>> 0,
          ar = Sr - this.timed >>> 0,
          jr = Qr - this.frameUs >>> 0,
          Ir = this.primed;
        return this.sampled = rr, this.timed = Sr, this.frameUs = Qr, this.primed = !0, !(!Ir || Wr > 64 || ar > 64) && (Zr && jr <= 1e6 * ar && (this.windowTimed += ar, this.windowUs += jr), Zr && Wr > 0)
      }
      reset() {}
      snapshotAndReset() {
        const rr = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: rr,
          submitToDoneMs: null
        }
      }
    }
    const of = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class bf {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(rr, Sr) {
        const Qr = Math.min(4096, this.count + Sr);
        this.samples.fill(rr, this.count, Qr), this.count = Qr
      }
      clear() {
        this.count = 0
      }
      take() {
        const rr = this.count;
        if (this.count = 0, rr < 30) return of;
        const Sr = this.samples.subarray(0, rr).sort(),
          Qr = Qr => Sr[Math.min(rr - 1, Math.floor(Qr * rr))];
        return {
          lagP50Ms: Qr(.5),
          lagP90Ms: Qr(.9)
        }
      }
    }
    class Jf {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new bf
      }
      onFrame(rr, Sr) {
        const Qr = rr.headerWord(IZ.L.Pacing),
          Zr = rr.headerWord(IZ.L.PacingLagUs),
          Wr = (Qr >>> IZ._.LagsShift) - (this.word >>> IZ._.LagsShift) & IZ._.CountMask,
          ar = Wr > 0 ? (Zr - this.lagUs >>> 0) / Wr / 1e3 : 0,
          jr = this.primed && Wr <= 64 && ar <= 6e4;
        this.word = Qr, this.lagUs = Zr, this.primed = !0, jr && Sr && Wr > 0 && 0 !== (Qr & IZ._.Defaulted) && this.lags.add(ar, Wr)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(rr) {
        return rr ? this.lags.take() : (this.lags.clear(), of)
      }
    }
    var Df = Qr(3982),
      df = Qr(35392),
      sf = Qr(3995),
      uf = Qr(42753),
      rE = Qr(35386),
      SE = Qr(3906),
      QE = Qr(3998);
    const ZE = {
      none: !0,
      compatibility_mode: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
      gpu_wasm_arm: !1,
      safari_26: !1,
      safari_27: !1,
      few_wasm_memories: !1,
      no_webgpu_api: !1,
      no_adapter: !0,
      compatibility_held: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function WE(rr) {
      return new aE(rr)
    }
    class aE {
      constructor(rr) {
        this.shell = rr, this.tracker = new Pf.b, this.gpu = new Ff, this.pacing = new Jf, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new wf, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new Df.c(this.tracker, ((rr, Sr, Qr, Zr) => {
          this.shell.mainStalled(rr, Sr, Qr, Zr)
        }), (rr => this.shell.sH(rr))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, df.d)(rr.backend, rr.canvas, rr.adapterVendor), this.tracker.start((() => !rr.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, SE.c)("wasm", (() => {
          const {
            n: Sr,
            sampleCount: Qr
          } = (0, uf.g)();
          return `${rr.backend}, quality steps aim at up to ${QE.b.target.maxFps} fps, pixel n ${Sr}, msaa ${Qr}`
        }), (Sr => {
          Sr.setLoadCounts(rr.readLoadCounts), this.frameDebug = Sr
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(rr) {
        var Sr;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(rr), null === (Sr = this.frameDebug) || void 0 === Sr || Sr.animationFrame()
      }
      sendsWent(rr, Sr, Qr) {
        this.ping.onFrame(rr.headerWord(IZ.L.PingSent), Sr), this.sendsStartMs = Sr, this.sendsEndMs = Qr
      }
      frameRan(rr, Sr, Qr, Zr) {
        var Wr;
        this.ping.onFrame(rr.headerWord(IZ.L.PingSent), Qr);
        const ar = this.tracker;
        this.pacing.onFrame(rr, ar.isSampling());
        const jr = rr.headerWord(IZ.L.TickUs) / 1e3 + (0, zZ.Q)();
        var Ir;
        (ar.FY(jr), null === (Wr = this.frameDebug) || void 0 === Wr || Wr.wasmFrame(rr, Sr, Qr, Zr, ar.isSampling(), jr), null !== this.game) && (null === (Ir = this.frameDebug) || void 0 === Ir || Ir.inGame());
        const fr = this.sendsStartMs >= Sr ? this.sendsEndMs - this.sendsStartMs : 0,
          Er = Math.max(0, Qr - Sr - jr - fr);
        if ("drawn" !== Zr) return void("paced" === Zr ? (this.pacedCpuMs += Er, this.mainStall.paced()) : "skipped" === Zr && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(Sr), ar.onFrameStart(Sr);
        this.gpu.onFrame(rr.headerWord(IZ.L.GpuSampled), rr.headerWord(IZ.L.GpuTimed), rr.headerWord(IZ.L.GpuFrameUs), ar.isSampling()) && ar.onGpuSampleStarted(), ar.onFrameCpu(Er + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Sr)
      }
      framePaced() {
        var rr;
        this.mainStall.paced(), null === (rr = this.frameDebug) || void 0 === rr || rr.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const rr of this.timers) clearInterval(rr);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const rr = this.shell.joinedGame();
        if (rr !== this.game) {
          var Sr;
          if (this.game = rr, null !== rr) null === (Sr = this.frameDebug) || void 0 === Sr || Sr.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== rr
      }
      countFpsFrame(rr) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = rr
        }
        this.fpsFrames++;
        const Sr = rr - this.fpsSpanStartMs;
        if (!(Sr < Cf.d)) {
          if (!document.hidden) {
            const rr = 1e3 * this.fpsFrames / Sr;
            this.firstSpanFps ??= rr, this.initialFps = this.firstSpanFps, this.fpsOverTime = rr
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = rr
        }
      }
      flush() {
        const rr = this.followGame(),
          {
            cpuFrameMs: Sr,
            refreshHz: Qr,
            cpuBottleneck: Wr,
            frameIntervalCv: ar,
            ...jr
          } = this.tracker.snapshotAndReset(),
          Ir = this.shell.inGame(),
          fr = Ir && this.inGameAtLastFlush,
          Er = fr ? jr : (0, Xf.f)(jr),
          pr = this.pacing.snapshotAndReset(fr);
        if (this.inGameAtLastFlush = Ir, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !rr || !this.shell.canSend()) return;
        const xr = performance.now(),
          Nr = (0, gf.x)((0, gf.u)(xr), this.unsentPage),
          tr = function(rr, Sr, Qr, Wr, ar, jr, Ir, fr) {
            var Er, pr, xr, mr, Nr;
            const Ur = {},
              {
                canvas: tr
              } = rr,
              hr = (0, Rf.k)({
                refreshHz: Sr.refreshHz,
                msaa: rr.msaa(),
                autoMsaaOff: (0, rE.c)()
              });
            for (const zr of (0, Of.f)()) {
              const Yr = zr.name;
              let nr;
              if ((0, Lf.L)(Yr)) nr = (0, gf.e)(Yr);
              else if ((0, gf.m)(Yr)) nr = fr[Yr];
              else if ((0, Rf.n)(Yr)) nr = hr[Yr];
              else switch (Yr) {
                case "fps":
                  nr = Wr;
                  break;
                case "Zf":
                  nr = ar;
                  break;
                case "Ef":
                  nr = (0, sf.B)((0, uf.g)().n);
                  break;
                case "pf":
                  nr = Math.max(tr.width, tr.height);
                  break;
                case "mf":
                  nr = Math.min(tr.width, tr.height);
                  break;
                case "Nf":
                  nr = navigator.hardwareConcurrency || null;
                  break;
                case "Uf":
                  nr = (0, pa.getWebGpuSupported)();
                  break;
                case "tf":
                  nr = null === rr.fallbackReason ? null : ZE[rr.fallbackReason];
                  break;
                case "hf":
                  nr = Sr.cpuFrameMs;
                  break;
                case "zf":
                  nr = Sr.refreshHz;
                  break;
                case "Yf":
                  nr = Sr.cpuBottleneck;
                  break;
                case "nf":
                  nr = Sr.frameIntervalCv;
                  break;
                case "ef":
                  nr = Sr.frameMs;
                  break;
                case "Kf":
                  nr = Sr.tickMs;
                  break;
                case "Lf":
                  nr = Sr.mainBusyShare;
                  break;
                case "lf":
                  nr = Sr.mainProbeDelayMs;
                  break;
                case "yf":
                  nr = Sr.longAnimationFramesPerMin;
                  break;
                case "Bf":
                  nr = Sr.longAnimationFrameTimeShare;
                  break;
                case "Tf":
                  nr = Sr.longAnimationFrameScriptShare;
                  break;
                case "vf":
                  nr = Sr.framesOver50msPerMin;
                  break;
                case "Of":
                  nr = Sr.framesOver100msPerMin;
                  break;
                case "Xf":
                  nr = Sr.gpuPassMs;
                  break;
                case "Pf":
                  nr = Sr.gpuSubmitToDoneMs;
                  break;
                case "Hf":
                  nr = Qr.lagP50Ms;
                  break;
                case "qf":
                  nr = Qr.lagP90Ms;
                  break;
                case "Jf":
                  nr = (0, vf.i)(jr);
                  break;
                case "ff":
                  nr = Ir;
                  break;
                case "Rf":
                case "gf":
                case "Cf":
                case "Mf":
                case "Gf":
                case "kf":
                case "Af":
                case "Vf":
                case "wf":
                case "Ff":
                case "bf":
                case "Df":
                case "df":
                case "sf":
                case "uf":
                  nr = null;
                  break;
                case "NE":
                  nr = (0, pa.getPlatformType)();
                  break;
                case "UE":
                  nr = (0, pa.getGpuVendor)();
                  break;
                case "tE":
                  nr = Vf.c[rr.backend];
                  break;
                case "hE":
                  nr = (0, Mf.b)();
                  break;
                case "zE":
                  nr = (0, pa.getOperatingSystem)();
                  break;
                case "YE":
                  nr = (0, pa.getTrafficSource)();
                  break;
                case "nE":
                  nr = null !== (Er = Zr.c.get("gameEntrySource")) && void 0 !== Er ? Er : lf.e;
                  break;
                case "eE":
                  nr = null !== (pr = Sr.frameLimiter) && void 0 !== pr ? pr : lf.e;
                  break;
                case "KE":
                  nr = (0, Hf.j)();
                  break;
                case "yE":
                  nr = null !== (xr = (0, qf.b)()) && void 0 !== xr ? xr : lf.e;
                  break;
                case "TE":
                  nr = (0, Hf.d)(tr.width, tr.height);
                  break;
                case "vE":
                  nr = (0, Of.j)(-(new Date).getTimezoneOffset());
                  break;
                case "qE":
                  nr = null !== (mr = rr.fallbackReason) && void 0 !== mr ? mr : lf.e;
                  break;
                case "CE":
                  nr = "ready";
                  break;
                case "ME":
                  nr = (0, pa.getSoftwareRenderer)();
                  break;
                case "LE":
                  nr = (0, Gf.d)();
                  break;
                case "lE":
                  nr = (0, kf.h)().replayState;
                  break;
                case "XE":
                  nr = (0, kf.h)().replaySelection;
                  break;
                case "PE":
                  nr = null !== rr.shaderPackReach() ? "true" : "false";
                  break;
                case "GE":
                  nr = null !== (Nr = rr.shaderPackReach()) && void 0 !== Nr && Nr.sceneDepth ? "true" : "false";
                  break;
                case "kE": {
                  const Sr = rr.shaderPackReach();
                  nr = null !== Sr && void 0 !== Sr && Sr.sunShadow ? "all" : null !== Sr && void 0 !== Sr && Sr.airShadow ? "air" : "none";
                  break
                }
                case "AE":
                  nr = Af.z;
                  break;
                case "bE":
                  nr = (0, gf.q)();
                  break;
                case "OE": {
                  const Sr = rr.ct();
                  nr = null === Sr ? lf.e : String(Sr);
                  break
                }
                case "RE":
                case "gE":
                  nr = lf.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Yr}`)
              }
              if (void 0 === nr) throw new Error(`Metric ${Yr} has no value`);
              Ur[Yr] = nr
            }
            return Ur
          }(this.shell, {
            cpuFrameMs: Sr,
            refreshHz: Qr,
            cpuBottleneck: Wr,
            frameIntervalCv: ar,
            ...Er
          }, pr, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), Nr);
        if (! function(rr, Sr, Qr) {
            return (0, WQ.b)(), rr(Ur.k.Send, Sr, Qr)
          }(this.shell.writeCmd, mr.Dd, function(rr) {
            const Sr = (0, kr.e)((0, IQ.e)(rr)),
              Qr = new Uint8Array(Ur.Md.BYTES + Sr.length);
            return new DataView(Qr.buffer).setUint16(0, IQ.b.AnalyticsUpdate, !0), Qr.set(Sr, Ur.Md.BYTES), Qr
          }(tr))) return this.unsentPage = Nr, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, vf.h), (0, gf.s)(tr, "wasm", xr)
      }
    }
    var jE = Qr(41299);

    function IE(rr, Sr, Qr) {
      const Zr = new Map;
      return (0, jE.d)(((rr, Qr, Zr) => Sr.aI(rr, Qr, Zr)), ((Sr, Qr, Wr) => {
        const ar = `${Sr},${Qr},${Wr}`;
        return Zr.has(ar) || Zr.set(ar, (0, bS.c)(rr, Sr, Qr, Wr)), Zr.get(ar)
      }), Qr)
    }
    var fE = Qr(41303),
      EE = Qr(42751);

    function pE(rr) {
      const Sr = null !== rr && 0 !== (Ur.p.playerFlags(rr.api.apiView, 0) & Ur.ud.CursorAim);
      Sr !== (0, EE.m)() && (0, EE.G)(Sr, null !== rr)
    }

    function xE(rr) {
      return (0, HZ.b)(qZ.D, rr)
    }
    var mE = Qr(42895);
    const NE = new ar.f((rr => Qr(55099)(`./${rr}/${rr}Client`)));
    let UE = null,
      tE = null;
    async function hE(rr) {
      UE ??= Qr.e(33).then((() => Qr(40714))).then((rr => {
        tE = rr.createDefaultClientPlugins
      }), (rr => {
        throw UE = null, rr
      })), await Promise.all([NE.load(rr), UE])
    }

    function zE(rr) {
      rr.load(new cS(IW, new pW))
    }
    let YE = !1;
    const nE = new WeakMap;

    function eE(rr) {
      try {
        rr()
      } catch (Sr) {
        console.error("[bloxd-wasm-client] a session-end step failed", Sr)
      }
    }

    function KE(rr, Sr) {
      ! function() {
        var rr, Sr;
        WW.Howler.volume();
        const Qr = WW.Howler;
        null === (rr = Qr._autoResume) || void 0 === rr || rr.call(Qr), null === (Sr = Qr._autoSuspend) || void 0 === Sr || Sr.call(Qr)
      }();
      const Qr = new er(Sr.core, Sr.memory, Sr.audio);
      let ar;
      try {
        ar = new HW(Qr, Sr.options)
      } catch (mr) {
        return rr.crash(RW.G, mr), null
      }(0, fr.e)(qW(Qr, ar));
      const pr = new iI({
        running: rr,
        api: Qr,
        core: Sr.core,
        memory: Sr.memory,
        staleOr: Sr.staleOr,
        reportFault: Sr.reportReplayFault,
        options: Sr.options,
        sessionInfo: Sr.sessionInfo,
        replayShaderPack: Sr.replayShaderPack
      });
      (0, zZ.E)();
      const xr = new sZ({
        api: Qr,
        tables: ar,
        sessionInfo: Sr.sessionInfo,
        gameFactory: rr => NE.loadedFactory(rr),
        defaultPlugins: (rr, Sr, Qr, Zr) => {
          if (null === tE) throw new Error("The default plugins started before they loaded");
          return tE(rr, Sr, Qr, Zr)
        },
        serverOptions: Sr.options,
        onNetEvent: rr => {
          pr.netEvent(rr), Sr.onNetEvent(rr)
        },
        setLocalOptions: Sr => {
          cI(rr, {
            changes: Sr,
            reset: !1
          })
        },
        playSound: (rr, Qr, Zr, Wr, ar, jr, Ir) => Sr.audio.playGame(rr, Qr, Zr, Wr, ar, jr, Ir),
        preloadSounds: rr => {
          Sr.audio.preload(function(rr) {
            const Sr = [];
            for (const Qr of rr) {
              const rr = RS(Qr);
              if (null !== rr)
                for (let Qr = rr[0]; Qr < rr[0] + rr[1]; Qr++) Sr.push(Qr)
            }
            return Sr
          }(rr))
        },
        onSessionEnd: () => {
          eE(Wr.o), eE(zW), eE((() => {
            Zr.c.set({
              openInGameMenuName: null
            })
          })), eE((() => {
            Sr.audio.endSession()
          }))
        },
        beforeWrite: Sr.beforeWrite,
        beforeOp: Sr.beforeOp,
        cameraScreen: hW,
        showCameraFacing: YW,
        reportCameraFault: Sr.reportCameraFault,
        onEventOverflow: Sr.onEventOverflow,
        screenBandY: Ir.h,
        replayEntities: pr.entityHooks,
        hasPackModel: Sr.hasPackModel
      });
      return xr.attach(rr), nE.set(xr, pr), QW(xr.items, Sr.audio),
        function(rr) {
          rr.setClientFreeCameraGrant("isDev", !1);
          const Sr = Sr => {
            rr.setClientFreeCameraGrant("hasDeveloperRank", Sr.playerHasRank("developer"))
          };
          (0, jr.j)("userContextUpdated", Sr)
        }(xr), YE || (YE = !0, (0, jr.j)("appManagerUpdated|openInGameMenuName", (rr => {
          !rr && (0, Er.p)().includes(Er.e) && (0, Er.s)(Er.e)
        }))), xr
    }

    function yE(rr) {
      try {
        rr.closeGame()
      } finally {
        var Sr;
        null === (Sr = nE.get(rr)) || void 0 === Sr || Sr.stop(), nE.delete(rr)
      }
    }
  },
  42753: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => yr,
      g: () => mr,
      k: () => nr,
      n: () => Kr,
      q: () => er,
      s: () => Br
    });
    var Zr = Qr(181),
      Wr = Qr(26),
      ar = Qr(34),
      jr = Qr(3995),
      Ir = Qr(1364),
      fr = Qr(35386),
      Er = Qr(319),
      pr = Qr(109),
      xr = Qr(174);

    function mr() {
      var rr;
      const Sr = (0, jr.J)(),
        Qr = function(rr, Sr) {
          return {
            sampleCount: rr.antiAliasing ? 4 : 1,
            n: (0, jr.y)(rr.pixelScale, Sr),
            pixelated: (0, jr.v)(rr.pixelSmoothing)
          }
        }(Wr.c.get("clientEscMenuOptions"), Sr);
      return Qr.sampleCount > 1 && (0, fr.c)() && (Qr.sampleCount = 1), Qr.n = null !== (rr = (0, fr.n)()) && void 0 !== rr ? rr : Qr.n, Zr.i.includes((0, pr.getSoftwareRenderer)()) && (Qr.sampleCount = 1, Qr.n = Math.max(Qr.n, (0, jr.y)(xr.l.pixelScale, Sr))), Qr
    }
    let Nr = null,
      Ur = null;
    const tr = new Set;
    let hr = null;

    function zr() {
      for (const rr of tr) rr()
    }

    function Yr() {
      if (null === Nr) {
        const rr = document.createElement("div");
        rr.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", rr.setAttribute("aria-hidden", "true"), document.body.append(rr), Ur = rr, Nr = new jr.d(rr, zr)
      }
      return Nr
    }

    function nr(rr) {
      const Sr = (0, jr.m)(),
        [Qr, Zr] = Yr().size(Sr);
      return (0, jr.i)(Qr, Zr, Sr, rr.n)
    }

    function er(rr) {
      var Sr, Qr, Zr, Wr;
      const ar = (0, jr.m)(),
        [fr, Er] = Yr().size(ar);
      if (fr <= 0 || Er <= 0) return null;
      const pr = (0, jr.i)(fr, Er, ar, mr().n);
      return (0, jr.g)(rr, pr), rr.style.left = `${null!==(Sr=null===(Qr=hr)||void 0===Qr?void 0:Qr.rect.left)&&void 0!==Sr?Sr:0}px`, rr.style.top = `${null!==(Zr=null===(Wr=hr)||void 0===Wr?void 0:Wr.rect.top)&&void 0!==Zr?Zr:0}px`, (0, Ir.cb)(rr.style, hr), pr
    }

    function Kr(rr) {
      hr = rr, Yr(), (0, Ir.X)(Ur.style, rr, ""), zr()
    }

    function yr(rr, Sr) {
      rr.style.imageRendering = (0, jr.K)(Sr.pixelated)
    }

    function Br(rr, Sr) {
      const Qr = (0, ar.j)("appManagerUpdated|clientEscMenuOptions", (() => {
          yr(rr, mr()), Sr()
        })),
        Zr = (0, fr.A)(Sr),
        Wr = (0, Er.q)(Sr);
      return Yr(), tr.add(Sr), () => {
        Qr(), Zr(), Wr(), tr.delete(Sr)
      }
    }
  },
  42816: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => tr,
      i: () => fr,
      j: () => er,
      k: () => nr,
      m: () => Kr
    });
    var Zr = Qr(2398);
    const Wr = 8388608,
      ar = 1e3,
      jr = 3e4;
    class Ir extends Error {
      constructor(rr, Sr, Qr) {
        super(`${"fetch"===rr?"fetching":"decoding"} ${Sr} failed`, Qr), this.stage = rr, this.source = Sr, this.name = "ShellImageError"
      }
    }
    async function fr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      return pr(await Er(rr, Sr), "string" === typeof rr ? rr : null, Qr)
    }
    async function Er(rr, Sr) {
      if ("string" !== typeof rr) return rr;
      try {
        return await Sr(rr)
      } catch (Qr) {
        throw new Ir("fetch", rr, {
          cause: Qr
        })
      }
    }
    async function pr(rr, Sr, Qr) {
      try {
        const Sr = new Blob([rr.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(Sr, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Qr
        })
      } catch (Zr) {
        throw new Ir("decode", null !== Sr && void 0 !== Sr ? Sr : `${rr.byteLength} bytes`, {
          cause: Zr
        })
      }
    }
    let xr = null;
    const mr = new Map;
    let Nr = 1;
    const Ur = new Map;

    function tr(rr) {
      var Sr;
      if (xr = rr, null !== rr) {
        null === (Sr = rr.BWr) || void 0 === Sr || Sr.call(rr, Yr);
        for (const [Sr, Qr] of mr) hr(rr, Sr, Qr);
        mr.clear()
      }
    }

    function hr(rr, Sr, Qr) {
      Ur.has(Sr) && void 0 !== rr.yWr ? rr.yWr(Sr, Qr) : rr.eWr(Sr, Qr)
    }

    function zr(rr, Sr) {
      xr ? hr(xr, rr, Sr) : mr.set(rr, Sr)
    }

    function Yr(rr) {
      const Sr = Ur.get(rr);
      void 0 === Sr || Sr.decoding || (Sr.decoding = !0, pr(Sr.bytes, Sr.url, Sr.orientation).then((Qr => {
        Sr.decoding = !1, Ur.get(rr) === Sr ? (Sr.failures = 0, zr(rr, Qr)) : Qr.close()
      }), (Qr => {
        Sr.decoding = !1, Sr.failures++, 1 === Sr.failures && console.warn(`shellImages: decoding image ${rr} again failed; trying again until it decodes`, Qr), setTimeout((() => {
          Yr(rr)
        }), Math.min(ar * 2 ** (Sr.failures - 1), jr))
      })))
    }

    function nr(rr) {
      const Sr = Nr++;
      return zr(Sr, rr), Sr
    }
    async function er(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.K,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
        ar = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const jr = "string" === typeof rr ? rr : null,
        Ir = await Er(rr, Sr),
        fr = await pr(Ir, jr, Qr),
        {
          width: xr,
          height: mr
        } = fr,
        tr = Nr++;
      return ar && xr * mr * 4 >= Wr && Ur.set(tr, {
        bytes: Ir.slice(),
        url: jr,
        orientation: Qr,
        decoding: !1,
        failures: 0
      }), zr(tr, fr), {
        id: tr,
        width: xr,
        height: mr
      }
    }

    function Kr(rr) {
      var Sr;
      Ur.delete(rr);
      const Qr = mr.get(rr);
      if (Qr) return Qr.close(), void mr.delete(rr);
      null === (Sr = xr) || void 0 === Sr || Sr.KWr(rr)
    }
  },
  37529: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => Er,
      k: () => jr,
      l: () => xr
    });
    var Zr = Qr(37514),
      Wr = Qr(13);
    const ar = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function jr(rr) {
      if (rr instanceof WebAssembly.RuntimeError) return !0;
      const Sr = rr instanceof Error ? rr.stack : void 0;
      return "string" === typeof Sr && ar.test(Sr)
    }

    function Ir(rr, Sr, Qr) {
      var Wr;
      const jr = rr instanceof Error ? rr.name : "thrown",
        Ir = (rr instanceof Error && null !== (Wr = rr.stack) && void 0 !== Wr ? Wr : "").split("\n").filter((rr => ar.test(rr))).slice(0, 8).map((rr => rr.trim())),
        fr = null === Sr ? "wasm memory unknown" : `wasm memory ${Math.round(Sr/2**20)} MB`,
        Er = null === Qr.panic ? "" : `, panic: ${(0,Zr.i)(Qr.panic)}`,
        pr = `${jr}: ${rr instanceof Error?rr.message:String(rr)}`;
      return `${(0,Zr.l)(Qr.kind,Qr.refusedBytes)} ${pr} (${fr})${Er}${Ir.length>0?` | ${Ir.join(" < ")}`:""}`
    }
    const fr = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Er(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(rr instanceof Error) || !fr.test(rr.message)) return {};
      if (!("detached" in Qr)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Wr.V)(null === (Sr = (0, Wr.O)(Qr, "detached")) || void 0 === Sr ? void 0 : Sr.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const pr = 500;

    function xr(rr) {
      let Sr = "[object Object]";
      try {
        Sr = String(rr)
      } catch {}
      if ("[object Object]" !== Sr) return Sr;
      try {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = JSON.stringify(rr)) || void 0 === Zr ? void 0 : Zr.slice(0, pr)) && void 0 !== Qr ? Qr : Sr
      } catch {
        return Sr
      }
    }
  },
  55099: (rr, Sr, Qr) => {
    var Zr = {
      "./bedwars/bedwarsClient": [40850, 9],
      "./bridgeBattle/bridgeBattleClient": [40858, 10],
      "./buildAFactory2/buildAFactory2Client": [39989, 89, 86, 87, 258, 275, 11],
      "./classic/classicClient": [40862, 12],
      "./classic/smp2/smp2Client": [40866, 13],
      "./clutch/clutchClient": [40879, 14],
      "./containmentBreach/containmentBreachClient": [40888, 15],
      "./cooking/cookingClient": [41034, 16],
      "./defusal/defusalClient": [41036, 17],
      "./frontline/frontlineClient": [41040, 89, 86, 87, 18],
      "./goalRush/goalRushClient": [41071, 19],
      "./greenville/greenvilleClient": [41078, 181, 226, 20],
      "./hideseek/hideseekClient": [41117, 21],
      "./luckyBedwars/luckyBedwarsClient": [41123, 22],
      "./murderMystery/murderMysteryClient": [41126, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [41129, 24],
      "./oneBlock/oneBlockClient": [41136, 25],
      "./plots/plotsClient": [41151, 26],
      "./pvpCiv/pvpCivClient": [41221, 27],
      "./secretSanta/secretSantaClient": [41223, 28],
      "./shooting/shootingClient": [41228, 282, 29],
      "./skyIslands/skyIslandsClient": [41236, 30],
      "./skyblock/skyblockClient": [40037, 89, 267, 258, 181, 249, 31],
      "./tsunami/tsunamiClient": [41240, 32]
    };

    function Wr(rr) {
      if (!Qr.o(Zr, rr)) return Promise.resolve().then((() => {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }));
      var Sr = Zr[rr],
        Wr = Sr[0];
      return Promise.all(Sr.slice(1).map(Qr.e)).then((() => Qr(Wr)))
    }
    Wr.keys = () => Object.keys(Zr), Wr.id = 55099, rr.exports = Wr
  },
  37514: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => ar,
      i: () => fr,
      j: () => jr,
      l: () => Wr
    });
    const Zr = /^alloc_failed (\d+) bytes$/;

    function Wr(rr, Sr) {
      return ar(rr, Sr) ? `trap=alloc_failed ${Sr} bytes` : `trap=${rr}`
    }

    function ar(rr, Sr) {
      return "unreachable" === rr && Sr > 0
    }

    function jr(rr, Sr, Qr) {
      const Zr = function(rr) {
        return rr instanceof WebAssembly.RuntimeError ? /unreachable/i.test(rr.message) ? "unreachable" : /out of bounds/i.test(rr.message) ? "out_of_bounds" : "runtime_error" : (rr instanceof RangeError || rr instanceof Error && "InternalError" === rr.name) && /call stack|recursion/i.test(rr.message) ? "stack_overflow" : "js_error"
      }(rr);
      if ("unreachable" !== Zr) return {
        kind: Zr,
        panic: null,
        refusedBytes: 0
      };
      const Wr = Sr(),
        ar = Qr();
      return {
        kind: Zr,
        panic: ar > 0 ? null : Wr,
        refusedBytes: ar
      }
    }
    const Ir = 300;

    function fr(rr) {
      return rr.replace(/\s*\n\s*/g, " / ").slice(0, Ir)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);