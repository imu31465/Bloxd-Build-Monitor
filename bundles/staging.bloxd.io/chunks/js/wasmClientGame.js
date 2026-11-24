export const id = 56;
export const ids = [56];
export const modules = {
  39143: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      f: () => Am
    });
    var hm = fm(31);

    function Am(mm) {
      return "refetchCode" === mm || "devDownloadJson" === mm || mm.startsWith("Plugin")
    }

    function am(mm, Tm) {
      "refetchCode" !== mm ? "Plugin|MobAiPlugin|ShowPetUi" !== mm ? Promise.all([fm.e(107), fm.e(108), fm.e(103), fm.e(105), fm.e(214)]).then((() => fm(41751))).then((fm => {
        let {
          runClientGameMessage: hm
        } = fm;
        hm(mm, Tm)
      })).catch((Tm => {
        console.error(`Game message ${mm} failed`, Tm)
      })) : hm.j.gp("showPetUi", Tm) : hm.j.gp("refetchCode")
    }
  },
  42628: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      c: () => Am
    });
    const hm = ["recording", "freecam", "keyframe"];

    function Am() {
      const mm = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(mm[1]) << 32n | BigInt(mm[0])
    }
  },
  34217: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      g: () => Dm
    });
    var hm = fm(23);
    const Am = 24,
      am = "farNametags",
      xm = 1e5;

    function wm() {
      var mm;
      return null === (mm = hm.c.get("showDistantNametags")) || void 0 === mm || mm
    }

    function Dm() {
      var mm;
      return null !== (mm = function() {
        const mm = new URLSearchParams(window.location.search).get(am),
          Tm = null === mm || "" === mm ? NaN : Number(mm);
        return Number.isFinite(Tm) && Tm >= 0 ? Math.min(Tm, xm) : null
      }()) && void 0 !== mm ? mm : wm() ? 0 : Am
    }
  },
  42622: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      blockIdOf: () => LD.e,
      clearWasmCameraScreen: () => AA,
      creativeItemIds: () => ah.creativeItemIds,
      decodeMapSettings: () => UD,
      drainTextRerasters: () => Cw.d,
      enchantmentPerksOf: () => ah.enchantmentPerksOf,
      endGameHost: () => wi,
      followCursorAim: () => tD,
      followMenuPrefs: () => Ta,
      loadAudio: () => Ti,
      loadClientGame: () => mi,
      loadTextIcons: () => Cw.f,
      rasterText: () => yw.e,
      readBoardToEdit: () => BD,
      readDrawCensus: () => dD.h,
      setTextHost: () => Cw.j,
      setTextLocalPlayer: () => Cw.l,
      showInCreativeInvenOf: () => ah.showInCreativeInvenOf,
      startGameHost: () => xi,
      startShellAnalytics: () => lD,
      startSkyFeed: () => wD,
      textChanged: () => Cw.o,
      warmText: () => yw.f,
      wasmCameraScreen: () => hA
    });
    fm(36588);
    var hm = fm(23),
      Am = fm(36912),
      am = fm(39278),
      xm = fm(31),
      wm = fm(3409),
      Dm = fm(36905),
      im = fm(1286),
      Rm = fm(645),
      pm = fm(38311),
      Em = fm(4732),
      om = fm(40716),
      Om = fm(40663);
    const Ym = Om.Rb / 4,
      qm = Om.t.PlaySound,
      jm = Om.t.SoundReset,
      Vm = Em.Z.ReplayFailed,
      Im = Em.Z.RecorderEvent;
    class Km {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = mm, this.memory = Tm, this.audio = fm, this.serverIds = new Int32Array(256).fill(Om.id), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(Om.x.BYTES)), this.renderPtr = 0, this.yp = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.corruption = null, this.replay = null, this.queries = new Om.gb(mm, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.oAm(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(mm, Tm) {
        const fm = this.eventView();
        return new Uint8Array(fm.buffer, fm.byteOffset + mm, Tm)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return Om.x.localId(this.apiView, 0)
      }
      localDeaths() {
        return Om.x.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const mm = this.apiView,
          Tm = Om.x.entRenderPtr(mm, 0),
          fm = Om.x.entVisPtr(mm, 0),
          hm = Om.x.entCapacity(mm, 0);
        if (Tm !== this.renderPtr || fm !== this.visPtr || hm !== this.yp || this.renderBuffer !== this.buffer) {
          this.renderPtr = Tm, this.visPtr = fm, this.yp = hm, this.renderBuffer = this.buffer;
          const mm = this.memoryView(Float32Array, Tm, hm * Ym, "the render array"),
            Am = this.memoryView(Uint8Array, fm, hm, "the visibility array");
          this.renderCapacity = mm && Am ? hm : 0, this.render = mm && Am ? mm : new Float32Array(0), this.vis = mm && Am ? Am : new Uint8Array(0)
        }
      }
      memoryView(mm, Tm, fm, hm) {
        try {
          return (0, om.o)(mm, this.memory().buffer, Tm, fm, hm)
        } catch (Am) {
          return this.keepCorruption(Am), null
        }
      }
      memoryData(mm, Tm, fm, hm) {
        try {
          return (0, om.i)(this.memory().buffer, mm, Tm, fm, hm)
        } catch (Am) {
          return this.keepCorruption(Am), null
        }
      }
      reportCorruption(mm) {
        this.keepCorruption(new om.e(mm))
      }
      keepCorruption(mm) {
        if (!(mm instanceof om.e)) throw mm;
        this.corruption ??= mm
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(mm, Tm, fm) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: hm,
          len: Am
        } = mm;
        this.eventsPtr = hm, this.eventsLen = Am, this.eventsBuffer = null;
        const am = this.eventView();
        for (let im = 0; im < Am;) {
          const mm = am.getUint32(im, !0),
            fm = 65535 & mm,
            hm = mm >>> 16,
            Am = im + Em.X;
          if (fm === Om.t.EntitySpawned) {
            var xm;
            if (hm !== Om.Zb.BYTES) throw zm(fm, im, hm);
            const mm = Om.Zb.serverId(am, Am);
            this.spawned(mm, Om.Zb.index(am, Am), Om.Zb.kind(am, Am)), null === (xm = Tm.entityAdded) || void 0 === xm || xm.call(Tm, mm)
          } else if ((fm === Om.t.ChunkSlot || fm === Om.t.EntityInfoChanged) && !(0, Om.se)(fm, am, Am, hm, Tm)) throw zm(fm, im, hm);
          im = Am + (0, Em.te)(hm)
        }
        try {
          var wm;
          null === (wm = Tm.afterPrescan) || void 0 === wm || wm.call(Tm), this.throwCorruption(), !fm() && this.dispatch(mm, Tm, fm) && (this.throwCorruption(), this.applyListener(), Tm.afterWalk(mm.kind)), this.throwCorruption()
        } catch (Dm) {
          throw Dm instanceof om.e && (this.corruption ??= Dm), Dm
        } finally {
          fm() || null !== this.corruption || this.applyDespawns(Am, Tm)
        }
      }
      applyDespawns(mm, Tm) {
        const fm = this.eventView();
        for (let Am = 0; Am < mm;) {
          const mm = fm.getUint32(Am, !0),
            am = Am + Em.X;
          if ((65535 & mm) === Om.t.EntityDespawned && mm >>> 16 === Om.Zb.BYTES) {
            const mm = Om.Zb.serverId(fm, am);
            var hm;
            if (this.despawned(mm, Om.Zb.index(fm, am))) null === (hm = Tm.entityRemoved) || void 0 === hm || hm.call(Tm, mm)
          }
          Am = am + (0, Em.te)(mm >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(mm, Tm, fm) {
        const {
          len: hm,
          net: Am,
          netOffsets: am
        } = mm;
        let xm = this.eventView(),
          wm = 0;
        for (let nm = 0; nm < hm;) {
          const mm = xm.getUint32(nm, !0),
            hm = 65535 & mm,
            Jm = mm >>> 16,
            Zm = nm + Em.X;
          let km = !1;
          if (wm < Am.length && am[wm] === nm) Tm.netEvent(Am[wm]), wm++, km = !0;
          else if (hm === Em.Z.LocalPlayerBound) {
            var Dm;
            if (Jm !== Em.Jb) throw zm(hm, nm, Jm);
            null === (Dm = Tm.localPlayerBound) || void 0 === Dm || Dm.call(Tm, xm.getInt32(Zm, !0)), km = !0
          } else if (hm === Em.Z.LocalHurt) {
            var im;
            if (Jm !== Em.Gb) throw zm(hm, nm, Jm);
            null === (im = Tm.localHurt) || void 0 === im || im.call(Tm, xm.getInt32(Zm, !0), xm.getFloat32(Zm + 4, !0), xm.getUint32(Zm + 8, !0)), km = !0
          } else if (hm === Em.Z.AttackHit) {
            var Rm;
            if (Jm !== Em.c) throw zm(hm, nm, Jm);
            const mm = xm.getFloat32(Zm, !0),
              fm = xm.getFloat32(Zm + 4, !0),
              Am = xm.getFloat32(Zm + 8, !0),
              am = xm.getUint32(Zm + 12, !0);
            null === (Rm = Tm.attackHit) || void 0 === Rm || Rm.call(Tm, mm, fm, Am, 0 !== (am & Em.l.Crit), 0 !== (am & Em.l.HitSelf))
          } else if (hm === Em.Z.PhysicsType) {
            var pm;
            if (Jm !== Em.ec) throw zm(hm, nm, Jm);
            null === (pm = Tm.physicsType) || void 0 === pm || pm.call(Tm, xm.getUint32(Zm, !0), xm.getInt32(Zm + 4, !0)), km = !0
          } else if (hm === Em.Z.VehicleEffect) {
            var om;
            const mm = cm(xm, Zm, Jm);
            if (null === mm) throw zm(hm, nm, Jm);
            null === (om = Tm.vehicleEffect) || void 0 === om || om.call(Tm, mm.op, mm.name, mm.icon, mm.level, mm.durationMs), km = !0
          } else if (hm === Em.Z.ZoomChanged) {
            var Ym;
            if (Jm !== Em.be) throw zm(hm, nm, Jm);
            null === (Ym = Tm.zoomChanged) || void 0 === Ym || Ym.call(Tm, xm.getFloat32(Zm, !0), xm.getUint8(Zm + 4)), km = !0
          } else if (hm === Em.Z.ZoomDisabled) {
            var Km;
            if (0 !== Jm) throw zm(hm, nm, Jm);
            null === (Km = Tm.zoomDisabled) || void 0 === Km || Km.call(Tm), km = !0
          } else if (hm === Em.Z.GameCamera) {
            var Qm;
            null === (Qm = Tm.gameCamera) || void 0 === Qm || Qm.call(Tm, new Uint8Array(xm.buffer, xm.byteOffset + Zm, Jm).slice()), km = !0
          } else if (hm === Om.t.ChunkSlot || hm === Om.t.EntityInfoChanged);
          else if (hm >= qm && hm <= jm) {
            if (this.audio && !this.audio.onAudioEvent(hm, xm, Zm, Jm)) throw zm(hm, nm, Jm)
          } else if (hm >= Vm && hm <= Im) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(hm, xm, Zm, Jm)) throw zm(hm, nm, Jm);
              km = !0
            }
          } else if (hm >= Om.td && hm <= Om.ud && hm !== Em.Z.EnvLighting) {
            if (!(0, Om.se)(hm, xm, Zm, Jm, Tm)) throw zm(hm, nm, Jm);
            km = !0
          }
          if (km) {
            if (fm()) return !1;
            xm = this.eventView()
          }
          nm = Zm + (0, Em.te)(Jm)
        }
        return !fm()
      }
      applyListener() {
        var mm;
        if (!this.audio) return;
        const Tm = Om.x.audioViewPtr(this.apiView, 0),
          fm = this.memory().buffer;
        let hm = this.audioView;
        (null === (mm = hm) || void 0 === mm ? void 0 : mm.buffer) === fm && hm.byteOffset === Tm || (hm = (0, om.i)(fm, Tm, Om.B.BYTES, 8, "the audio view"), this.audioView = hm), hm && this.audio.applyListener(hm)
      }
      indexOf(mm) {
        return this.indexById.get("number" === typeof mm ? mm : +mm)
      }
      isLocal(mm) {
        return mm !== Om.id && mm === Om.x.localId(this.apiView, 0)
      }
      rV(mm) {
        const Tm = [0, 0, 0];
        return this.readPosition("number" === typeof mm ? mm : +mm, Tm) ? Tm : null
      }
      readPosition(mm, Tm) {
        const fm = this.apiView;
        if (void 0 !== this.indexById.get(mm) && this.isLocal(mm)) {
          for (let mm = 0; mm < 3; mm++) Tm[mm] = Om.x.localPos(fm, 0, mm);
          return !0
        }
        return this.readDrawnPosition(mm, Tm)
      }
      readDrawnPosition(mm, Tm) {
        const fm = this.apiView,
          hm = this.indexById.get(mm);
        if (void 0 === hm || hm >= this.renderCapacity) return Tm[0] = Tm[1] = Tm[2] = NaN, !1;
        const Am = hm * Ym;
        for (let am = 0; am < 3; am++) Tm[am] = this.render[Am + am] + Om.x.origin(fm, 0, am);
        return !0
      }
      checkValid(mm) {
        return void 0 !== this.indexOf(mm)
      }
      isAlive(mm) {
        const Tm = this.indexOf(mm);
        if (void 0 === Tm) return null;
        if (this.ensureViews(), Tm >= this.renderCapacity) return null;
        const fm = this.vis[Tm];
        return 0 === fm ? null : 0 !== (fm & Om.qe.Alive)
      }
      getEntityType(mm) {
        const Tm = this.indexOf(mm);
        return void 0 === Tm ? this.isLocal("number" === typeof mm ? mm : +mm) ? "Player" : null : nm(this.kinds[Tm])
      }
      spawned(mm, Tm, fm) {
        if (Tm >= 1048576) throw new om.e(`entity ${mm} spawned at index ${Tm}`);
        this.ensureIndex(Tm), this.serverIds[Tm] === mm && null !== this.idStr[Tm] || (this.idStr[Tm] = String(mm)), this.serverIds[Tm] = mm, this.kinds[Tm] = fm, this.indexById.set(mm, Tm)
      }
      despawned(mm, Tm) {
        let fm = !1;
        return this.indexById.get(mm) === Tm && (this.indexById.delete(mm), fm = !0), Tm < this.serverIds.length && this.serverIds[Tm] === mm && (this.serverIds[Tm] = Om.id, this.kinds[Tm] = 0, this.idStr[Tm] = null), fm
      }
      ensureIndex(mm) {
        const Tm = this.serverIds.length;
        if (mm < Tm) return;
        let fm = 2 * Tm;
        for (; fm <= mm;) fm *= 2;
        const hm = new Int32Array(fm).fill(Om.id);
        hm.set(this.serverIds), this.serverIds = hm;
        const Am = new Uint16Array(fm);
        Am.set(this.kinds), this.kinds = Am;
        for (let am = Tm; am < fm; am++) this.idStr.push(null)
      }
      eventView() {
        const mm = this.memory().buffer;
        return mm !== this.eventsBuffer && (this.eventsBuffer = mm, this.events = new DataView(mm, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const mm = this.memory().buffer;
        this.buffer = mm, this.viewPtr < 0 && (this.viewPtr = this.core.OAm()), this.view = new DataView(mm, this.viewPtr, Om.x.BYTES), this.rereadDirectory()
      }
    }

    function Qm(mm) {
      return mm >>> Om.c === Om.w.Item
    }

    function nm(mm) {
      var Tm, fm;
      const hm = mm & Om.f;
      switch (mm >>> Om.c) {
        case Om.w.Lifeform:
          return null !== (Tm = Rm.n[hm]) && void 0 !== Tm ? Tm : null;
        case Om.w.Throwable:
          return null !== (fm = pm.j[hm]) && void 0 !== fm ? fm : null;
        case Om.w.Mesh:
          return "Mesh";
        case Om.w.Audio:
          return "AudioEntity";
        case Om.w.Item:
          return "Item";
        default:
          return null
      }
    }
    const Jm = new TextDecoder;

    function cm(mm, Tm, fm) {
      if (fm < Em.Hd.HEAD_BYTES) return null;
      const hm = mm.getUint32(Tm, !0),
        Am = mm.getUint32(Tm + 20, !0),
        am = mm.getUint32(Tm + 24, !0),
        xm = Em.Hd.HEAD_BYTES + (0, Em.te)(Am);
      if (hm !== Em.Hd.UPDATE && hm !== Em.Hd.REMOVE || Am > fm || xm + am > fm) return null;
      const wm = (fm, hm) => Jm.decode(new Uint8Array(mm.buffer, mm.byteOffset + Tm + fm, hm)),
        Dm = mm.getFloat64(Tm + 12, !0);
      return {
        op: hm,
        level: mm.getFloat64(Tm + 4, !0),
        durationMs: Number.isNaN(Dm) ? null : Dm,
        name: wm(Em.Hd.HEAD_BYTES, Am),
        icon: wm(xm, am)
      }
    }

    function zm(mm, Tm, fm) {
      return new om.e(`event ${mm} at ${Tm} of ${fm} bytes`)
    }
    var Zm = fm(354),
      km = fm(1235),
      bm = fm(39143),
      Sm = fm(1921),
      em = fm(41079),
      Nm = fm(1877),
      Gm = fm(39297),
      Xm = fm(39335),
      Pm = fm(39314),
      Hm = fm(40695),
      ym = fm(2373),
      Cm = fm(39288),
      rm = fm(39327);
    const sm = Math.max(Om.Gb.BYTES, Om.zb.BYTES, Om.Bb.BYTES);

    function lm(mm) {
      if (!(0, rm.e)(mm)) return null;
      const Tm = Number(mm);
      return (0 | Tm) === Tm ? Tm : null
    }
    class Mm {
      constructor(mm) {
        this.api = mm, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Cm.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.fa = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.localId = Om.id, this.localName = String(Om.id), this.scratch = null
      }
      readView() {
        this.defaultPoseRead = !1, this.fa = null;
        const mm = this.api.queries.directorView() >= Om.Gb.BYTES ? this.scratchView() : null;
        null !== mm && (this.defaultFov = (0, Nm.F)(Om.Gb.fov(mm, 0)), this.baseFov = (0, Nm.F)(Om.Gb.baseFov(mm, 0)), this.aspect = Om.Gb.aspect(mm, 0), this.bodyHeading = Om.Gb.bodyHeading(mm, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(mm) {
        this.viewHeading = mm
      }
      get localPlayerId() {
        const mm = Om.x.localId(this.api.apiView, 0);
        return mm !== this.localId && (this.localId = mm, this.localName = String(mm)), this.localName
      }
      getEntityPosition(mm) {
        return this.readEntity(mm) ? this.entityFeet : null
      }
      getEntityAimPoint(mm) {
        return this.readEntity(mm) ? this.entityAim : null
      }
      getEntityHeading(mm) {
        const Tm = lm(mm);
        if (null === Tm) return null;
        const fm = Om.x.localId(this.api.apiView, 0);
        return Tm === fm && fm !== Om.id ? this.viewHeading : this.readEntity(mm) ? this.entityHeading : null
      }
      raycastTerrain(mm, Tm, fm) {
        const hm = this.api.queries.cameraSweep(mm[0], mm[1], mm[2], Tm[0], Tm[1], Tm[2], fm);
        return hm < fm - 1e-6 ? hm : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const mm = this.defaultPose;
        mm.fov = this.defaultFov;
        const Tm = this.api.queries.directorDefaultPose() >= Om.zb.BYTES ? this.scratchView() : null;
        if (null === Tm) return mm;
        for (let fm = 0; fm < 3; fm++) mm.position[fm] = Om.zb.eye(Tm, 0, fm);
        return mm.heading = Om.zb.heading(Tm, 0), mm.pitch = Om.zb.pitch(Tm, 0), mm
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
      readEntity(mm) {
        const Tm = lm(mm);
        if (null === Tm) return !1;
        if (Tm === this.fa) return this.entityLive;
        this.fa = Tm;
        const fm = this.api.queries.directorEntity(Tm) >= Om.Bb.BYTES ? this.scratchView() : null;
        if (this.entityLive = null !== fm, null === fm) return !1;
        for (let hm = 0; hm < 3; hm++) this.entityFeet[hm] = Om.Bb.feet(fm, 0, hm), this.entityAim[hm] = this.entityFeet[hm];
        return this.entityAim[1] += Om.Bb.eyeHeight(fm, 0), this.entityHeading = Om.Bb.heading(fm, 0), !0
      }
      scratchView() {
        const mm = this.api.scratch(),
          Tm = this.api.memory().buffer,
          fm = this.scratch;
        return null !== fm && fm.buffer === Tm && fm.byteOffset === mm ? fm : (this.scratch = this.api.memoryData(mm, sm, 8, "the director's record"), this.scratch)
      }
    }
    const um = {
        mode: "default"
      },
      Bm = {
        show: () => {},
        clear: () => {}
      };

    function Lm() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class tm {
      constructor(mm) {
        this.options = mm, this.oE = void 0, this.director = void 0, this.latest = um, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          XN: 0,
          yN: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ci = new Int32Array(3 * Om.Zd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Om.Zd), this.oE = new Mm(mm.api), this.director = new Pm.b(this.oE)
      }
      settingsChanged(mm) {
        let Tm = um;
        if (mm.length > 0) try {
          Tm = (0, Hm.e)(mm)
        } catch {}
        this.latest = Tm, this.pending = Tm
      }
      call(mm, Tm, fm, hm, Am, am) {
        var xm, wm;
        let Dm;
        this.holding = !1;
        try {
          Dm = this.answer(mm, Tm, fm, hm, Am, am)
        } catch (Em) {
          var im, Rm;
          throw this.answeredPose = !1, null === (im = (Rm = this.options).showFacing) || void 0 === im || im.call(Rm, null), Em
        }
        const pm = this.answeredPose && 0 === (hm & Om.Fb.Held);
        return this.answeredPose = Dm !== Om.wb.None, this.holding = this.answeredPose && !pm, null === (xm = (wm = this.options).showFacing) || void 0 === xm || xm.call(wm, this.holding ? this.facing : null), Dm
      }
      holdsView() {
        return this.holding
      }
      answer(mm, Tm, fm, hm, Am, am) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          oE: xm
        } = this;
        xm.readView();
        if (0 !== (hm & Om.Fb.Held) || xm.setViewHeading((0, Gm.t)(xm.bodyHeading)), void 0 !== this.pending) {
          const mm = this.pending;
          this.pending = void 0, this.director.setSettings(mm), this.syncShownSettings()
        }
        this.readLook((0, ym.h)(Tm), (0, ym.h)(fm), hm, (0, ym.h)(Am), (0, ym.h)(am));
        const wm = this.director.update(mm / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !wm) return Om.wb.None;
        const [Dm, im, Rm] = wm.position;
        if (0 === this.options.api.queries.directorPose(Dm, im, Rm, (0, Gm.t)(wm.heading), (0, Gm.g)(wm.pitch), (0, Nm.j)(wm.fov))) return Om.wb.None;
        if ("default" === this.director.getSettings().mode) return Om.wb.Pose;
        switch (this.facing) {
          case "camera":
            return Om.wb.FaceCamera;
          case "cursor":
            return Om.wb.FaceCursor;
          default:
            return Om.wb.FaceMovement
        }
      }
      afterFrame(mm) {
        mm ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = um, this.idle()
      }
      restart() {
        const mm = this.holding;
        this.idle(), this.holding = mm
      }
      idle() {
        var mm, Tm;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Pm.b(this.oE), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (mm = (Tm = this.options).showFacing) || void 0 === mm || mm.call(Tm, null), this.setCentres(0)
      }
      syncShownSettings() {
        const mm = this.director.getSettings();
        if (mm === this.shownSettings) return;
        this.shownSettings = mm;
        const Tm = (0, Xm.g)(mm);
        this.facing = Tm.facing, this.mouseTurns = Tm.mouseTurns
      }
      readLook(mm, Tm, fm, hm, Am) {
        const am = this.look,
          xm = 0 !== (fm & Om.Fb.LookPointed);
        if (null === this.mouseTurns && !xm) return am.XN = 0, am.yN = 0, void(am.pointedAt = void 0);
        let wm;
        xm && (this.pointedAt.heading = hm, this.pointedAt.pitch = Am, wm = this.pointedAt);
        const {
          oE: Dm
        } = this;
        Dm.setViewHeading((0, Xm.c)(Dm.getViewHeading(), mm, Tm, wm, "look" === this.mouseTurns, am))
      }
      writeCentres(mm) {
        const Tm = this.next,
          fm = Math.min(mm.length, Om.Zd);
        for (let hm = 0; hm < fm; hm++)
          for (let fm = 0; fm < 3; fm++) Tm[3 * hm + fm] = Math.floor(mm[hm][fm] / Om.K);
        this.setCentres(fm)
      }
      setCentres(mm) {
        const {
          ci: Tm,
          next: fm
        } = this;
        let hm = mm === this.centresLen;
        for (let Am = 0; hm && Am < 3 * mm; Am++) hm = Tm[Am] === fm[Am];
        hm || (Tm.fill(0), Tm.set(fm.subarray(0, 3 * mm)), this.centresLen = mm, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const mm = this.options.cmd();
        null !== mm && (0, Om.Nf)(mm, 0, this.ci, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var mm, Tm, fm;
        return null !== (mm = null === (Tm = (fm = this.options).screen) || void 0 === Tm ? void 0 : Tm.call(fm)) && void 0 !== mm ? mm : Bm
      }
      hidden() {
        var mm;
        return (null !== (mm = this.options.isPageHidden) && void 0 !== mm ? mm : Lm)()
      }
      now() {
        var mm, Tm, fm;
        return null !== (mm = null === (Tm = (fm = this.options).now) || void 0 === Tm ? void 0 : Tm.call(fm)) && void 0 !== mm ? mm : performance.now()
      }
    }
    var Um = fm(40855);
    const dm = Om.K * Om.K * Om.K,
      gm = Math.log2(Om.K),
      Wm = Om.K - 1,
      Fm = Om._.BYTES / 4,
      mT = new Uint16Array(dm);

    function TT(mm, Tm, fm) {
      return mm * Om.K * Om.K + Tm * Om.K + fm
    }
    class fT {
      constructor(mm) {
        this.chunk = mm
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(mm, Tm, fm) {
        return TT(mm, Tm, fm)
      }
    }
    class hT {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class AT {
      constructor(mm, Tm, fm, hm) {
        this.table = mm, this.slot = Tm, this.generation = fm, this.epoch = hm, this.lE = new fT(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = mT, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get EY() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get vo() {
        const mm = this.gameVoxels(),
          Tm = this.layers ??= new Uint16Array(Om.K);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let fm = 0; 0 !== this.staleLayers; fm++) {
          const hm = 1 << fm;
          0 !== (this.staleLayers & hm) && (this.staleLayers &= ~hm, Tm[fm] = aT(mm, fm))
        }
        return Tm
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const mm = this.voxelData(),
          Tm = this.writes;
        if (null === Tm || 0 === Tm.ids.size) return mm;
        if (Tm.from !== mm) {
          const fm = Tm.patched ??= new Uint16Array(dm);
          fm.set(mm);
          for (const [mm, hm] of Tm.ids) fm[mm] = hm;
          Tm.from = mm
        }
        return Tm.patched
      }
      written(mm) {
        var Tm;
        return null === (Tm = this.writes) || void 0 === Tm ? void 0 : Tm.ids.get(mm)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(mm, Tm, fm) {
        const hm = this.writes ??= new hT;
        hm.ids.set(mm, Tm), fm && hm.cleared.add(mm), null !== hm.from && (hm.patched[mm] = Tm);
        const Am = 1 << (mm >> gm & Wm);
        hm.layers |= Am, this.staleLayers |= Am, this.writeCount++
      }
      clearWrites() {
        const mm = this.writes;
        null !== mm && (this.staleLayers |= mm.layers, mm.ids.clear(), mm.cleared.clear(), mm.layers = 0, mm.from = null)
      }
      dataCleared(mm) {
        var Tm;
        return !0 === (null === (Tm = this.writes) || void 0 === Tm ? void 0 : Tm.cleared.has(mm))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const mm = this.table.slotWords(),
          Tm = this.slot * Fm;
        if (this.epoch !== this.table.epoch || Tm + Fm > mm.length || 0 === mm[Tm + 3] || mm[Tm + 2] !== this.generation) return this.data = mT, this.dataPtr = 0, mT;
        this.version = mm[Tm + 1];
        const fm = mm[Tm + 0],
          hm = mm.buffer;
        return fm === this.dataPtr && hm === this.dataBuffer || (this.dataPtr = fm, this.dataBuffer = hm, this.data = this.table.voxelsAt(hm, fm)), this.data
      }
    }

    function aT(mm, Tm) {
      const fm = mm[Tm * Om.K];
      for (let hm = 0; hm < Om.K; hm++) {
        const Am = TT(hm, Tm, 0);
        for (let Tm = 0; Tm < Om.K; Tm++)
          if (mm[Am + Tm] !== fm) return 65535
      }
      return fm
    }
    const xT = new Uint32Array(0);

    function wT(mm, Tm, fm) {
      return TT(mm & Wm, Tm & Wm, fm & Wm)
    }
    class DT {
      constructor(mm, Tm) {
        this.memory = mm, this.apiView = Tm, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = xT, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = xT, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(mm, Tm, fm, hm, Am, am) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, am === Om.bb.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (am !== Om.bb.Stored && am !== Om.bb.Unloaded) throw new om.e(`ChunkSlot flags ${am}`);
        const xm = (0, Um.e)(mm, Tm, fm);
        if (xm < 0) return;
        if (am === Om.bb.Unloaded) return void this.chunks.delete(xm);
        const wm = this.chunks.get(xm);
        (null === wm || void 0 === wm ? void 0 : wm.slot) === hm && wm.generation === Am || this.chunks.set(xm, new AT(this, hm, Am, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const mm = this.apiView(),
          Tm = Om.x.chunkSlotsPtr(mm, 0),
          fm = Om.x.chunkSlotsLen(mm, 0);
        Tm === this.slotsPtr && fm === this.slotsLen || (this.slotsPtr = Tm, this.slotsLen = fm, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const mm = this.apiView(),
          Tm = Om.x.walkThroughPtr(mm, 0),
          fm = Om.x.walkThroughLen(mm, 0);
        Tm === this.walkPtr && fm === this.walkLen || (this.walkPtr = Tm, this.walkLen = fm, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const mm of this.written) mm.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const mm = this.memory().buffer;
        var Tm;
        mm !== this.slotsBuffer && (this.slotsBuffer = mm, this.slots = null !== (Tm = (0, om.o)(Uint32Array, mm, this.slotsPtr, this.slotsLen * Fm, "the chunk directory")) && void 0 !== Tm ? Tm : xT);
        return this.slots
      }
      voxelsAt(mm, Tm) {
        try {
          var fm;
          return null !== (fm = (0, om.o)(Uint16Array, mm, Tm, dm, "a chunk's voxels")) && void 0 !== fm ? fm : mT
        } catch (hm) {
          if (!(hm instanceof om.e)) throw hm;
          return this.corruption ??= hm, mT
        }
      }
      chunk(mm, Tm, fm) {
        var hm;
        return null !== (hm = this.chunks.get((0, Um.e)(mm, Tm, fm))) && void 0 !== hm ? hm : null
      }
      isLoaded(mm, Tm, fm) {
        return void 0 !== this.chunkAt(Math.floor(mm), Math.floor(Tm), Math.floor(fm))
      }
      jR(mm, Tm, fm) {
        var hm;
        const Am = Math.floor(mm),
          am = Math.floor(Tm),
          xm = Math.floor(fm),
          wm = this.chunkAt(Am, am, xm);
        if (!wm) return 0;
        const Dm = wT(Am, am, xm);
        return null !== (hm = wm.written(Dm)) && void 0 !== hm ? hm : wm.voxelData()[Dm]
      }
      setOverlay(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const am = this.chunkAt(mm, Tm, fm);
        return !!am && (am.hasWrites() || this.written.push(am), am.write(wT(mm, Tm, fm), hm, Am), !0)
      }
      version(mm, Tm, fm) {
        var hm, Am;
        return null !== (hm = null === (Am = this.chunks.get((0, Um.e)(mm, Tm, fm))) || void 0 === Am ? void 0 : Am.EY) && void 0 !== hm ? hm : null
      }
      scan(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = Om.K;
        let im = 0;
        for (let Rm = Math.floor(Tm / Dm); Rm * Dm < Am; Rm++) {
          const pm = Rm * Dm,
            Em = Math.min(Am - pm, Dm);
          for (let Am = Math.floor(mm / Dm); Am * Dm < hm; Am++) {
            const om = Am * Dm,
              Om = Math.min(hm - om, Dm);
            for (let hm = Math.floor(fm / Dm); hm * Dm < am; hm++) {
              const Ym = this.chunks.get((0, Um.e)(Am, Rm, hm));
              if (!Ym) continue;
              const qm = hm * Dm,
                jm = Math.max(fm - qm, 0),
                Vm = Math.min(am - qm, Dm),
                Im = Ym.vo,
                Km = Ym.gameVoxels();
              for (let fm = Math.max(Tm - pm, 0); fm < Em; fm++) {
                const Tm = Im[fm];
                if (65535 === Tm || 0 !== xm[Tm]) {
                  im++;
                  for (let Tm = Math.max(mm - om, 0); Tm < Om; Tm++) {
                    const mm = TT(Tm, fm, 0);
                    for (let hm = jm; hm < Vm; hm++) {
                      const Am = Km[mm + hm];
                      0 !== xm[Am] && wm.push(om + Tm, pm + fm, qm + hm, Am)
                    }
                  }
                }
              }
            }
          }
        }
        return im
      }
      dataCleared(mm, Tm, fm) {
        var hm;
        const Am = Math.floor(mm),
          am = Math.floor(Tm),
          xm = Math.floor(fm);
        return !0 === (null === (hm = this.chunkAt(Am, am, xm)) || void 0 === hm ? void 0 : hm.dataCleared(wT(Am, am, xm)))
      }
      isWalkThrough(mm) {
        if (!Number.isInteger(mm) || mm < 0 || mm > 65535) return !1;
        const Tm = this.walkWords(),
          fm = mm >>> 5;
        return fm < Tm.length && 1 === (Tm[fm] >>> (31 & mm) & 1)
      }
      walkWords() {
        const mm = this.memory().buffer;
        var Tm;
        mm !== this.walkBuffer && (this.walkBuffer = mm, this.walk = null !== (Tm = (0, om.o)(Uint32Array, mm, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Tm ? Tm : xT);
        return this.walk
      }
      chunkAt(mm, Tm, fm) {
        if ((0 | mm) !== mm || (0 | Tm) !== Tm || (0 | fm) !== fm) return;
        const hm = (0, Um.e)(mm >> gm, Tm >> gm, fm >> gm);
        return hm !== this.lastKey && (this.lastKey = hm, this.lastChunk = this.chunks.get(hm)), this.lastChunk
      }
    }
    var iT = fm(38606),
      RT = fm(37858),
      pT = fm(36886),
      ET = fm(36705),
      oT = fm(34245),
      OT = fm(39249),
      YT = fm(198);
    const qT = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      jT = [
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
      VT = jT.map((mm => {
        let [Tm] = mm;
        return Tm
      })),
      IT = Uint8Array.from(jT, (mm => {
        let [, Tm] = mm;
        return Tm
      })),
      KT = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      QT = 8;
    var nT = fm(36853),
      JT = fm(36868),
      cT = fm(36863),
      zT = fm(269);
    class ZT {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.e;
        this.sheet = mm, this.onError = Tm, this.idle = fm, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = mm => {
          this.cancelIdle = null;
          try {
            if (mm.timeRemaining() >= 1) {
              let mm = this.queue.shift();
              for (; void 0 !== mm && !this.load(mm);) mm = this.queue.shift()
            }
          } catch (Tm) {
            this.onError(Tm)
          } finally {
            this.schedule()
          }
        }
      }
      preload(mm) {
        const Tm = [...mm].sort(((mm, Tm) => mm - Tm));
        for (const fm of Tm) this.asked.has(fm) || (this.asked.add(fm), this.queue.push(fm));
        this.schedule()
      }
      cancel() {
        var mm;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (mm = this.cancelIdle) || void 0 === mm || mm.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(mm) {
        const Tm = this.sheet(mm, !1),
          fm = this.sheet(mm, !0),
          [hm, Am] = "unloaded" === Tm.state() && "unloaded" !== fm.state() ? [fm, Tm] : [Tm, fm],
          am = this.gen,
          xm = () => {
            try {
              am === this.gen && "unloaded" === Am.state() && Am.load()
            } catch (mm) {
              this.onError(mm)
            }
          },
          wm = hm.state();
        return "unloaded" === wm ? (hm.once("load", xm), hm.load(), !0) : "unloaded" === Am.state() && ("loading" === wm ? (hm.once("load", xm), !1) : (Am.load(), !0))
      }
    }
    var kT = fm(40973);
    const bT = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      ST = YT.f.gq * YT.f.playerEyeToHeightRatio,
      eT = [0, 0, -1, 0, 1, 0],
      NT = qT.indexOf("note");

    function GT(mm) {
      return mm >= 0 ? Math.min(1, mm) : 0
    }

    function XT(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      const hm = function(mm) {
        let Tm = 0,
          fm = VT.length;
        for (; Tm < fm;) {
          const hm = Tm + fm >>> 1;
          VT[hm] < mm ? Tm = hm + 1 : fm = hm
        }
        return Tm
      }(mm);
      if ("" === mm || null === (Tm = VT[hm]) || void 0 === Tm || !Tm.startsWith(mm)) return -1;
      if (VT[hm] === mm) return hm;
      let Am = hm + 1;
      for (; Am < VT.length && VT[Am].startsWith(mm);) Am++;
      return hm + Math.floor(fm() * (Am - hm))
    }
    class PT {
      constructor(mm, Tm, fm, hm, Am) {
        this.group = mm, this.loudness = Tm, this.startMs = fm, this.howl = hm, this.host = Am, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const mm = this.host.alive(this.id);
        return mm ? 1e3 * this.howl.duration(this.id) / mm.rate : 0
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
    class HT {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          hm = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = mm, this.listener = Tm, this.now = fm, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(qT.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new cT.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: mm => this.aliveVoice(mm),
          started: mm => this.started.has(mm),
          drop: mm => {
            var Tm;
            null === (Tm = this.live.get(mm)) || void 0 === Tm || Tm.howl.stop(mm), this.forget(mm)
          }
        }, this.handlers = {
          playSound: (mm, Tm, fm, hm, Am, am, xm, wm, Dm) => {
            if (hm >= VT.length) return;
            const im = 0 !== (Am & Om.ge.Loop);
            Am & Om.ge.TwoD ? this.start(hm, !1, xm, am, wm, im) : this.startSpatial(hm, xm, am, wm, im, mm, Tm, fm, Dm, this.earDistSq(mm, Tm, fm))
          },
          soundPos: (mm, Tm, fm, hm) => {
            const Am = this.core.get(hm);
            var am;
            void 0 !== Am && (null === (am = this.live.get(Am)) || void 0 === am || am.howl.pos(fm, Tm, mm, Am))
          },
          soundSet: (mm, Tm, fm, hm) => {
            const Am = this.core.get(mm),
              am = void 0 === Am ? void 0 : this.live.get(Am);
            void 0 !== Am && am && (this.setRel(Am, Tm), am.rate = fm, am.howl.rate(fm, Am), am.spatial && am.howl.pannerAttr({
              refDistance: hm
            }, Am))
          },
          soundFade: (mm, Tm, fm, hm) => {
            const Am = this.core.get(mm);
            void 0 !== Am && this.fade(Am, Tm, fm, 0 !== (hm & Om.de.StopAfter))
          },
          soundStop: mm => {
            const Tm = this.core.get(mm);
            var fm;
            void 0 !== Tm && (null === (fm = this.live.get(Tm)) || void 0 === fm || fm.howl.stop(Tm), this.forget(Tm))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new ZT(((mm, Tm) => this.sheet(mm, Tm)), (mm => {
          this.errors++, console.error("Audio preload failed", mm)
        }), hm)
      }
      prepare() {
        for (let mm = 0; mm < qT.length; mm++) this.prepareSheet(mm)
      }
      prepareSheet(mm) {
        this.sheet(mm, !1), this.sheet(mm, !0)
      }
      preload(mm) {
        this.loader.preload(mm)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSheetsAfterGame() {
        for (let mm = 0; mm < qT.length; mm++) {
          if (JT.c.has(qT[mm])) continue;
          const Tm = [];
          for (const hm of [!1, !0]) {
            const fm = yT(mm, hm),
              Am = this.sheets.get(fm);
            void 0 !== Am && "loading" !== Am.state() && Tm.push({
              key: fm,
              howl: Am
            })
          }
          if (!Tm.some((mm => {
              let {
                howl: Tm
              } = mm;
              return "loaded" === Tm.state()
            }))) continue;
          this.unloading[mm] += Tm.length;
          const fm = () => {
            this.unloading[mm]--, 0 === this.unloading[mm] && this.prepareSheet(mm)
          };
          for (const {
              key: mm,
              howl: hm
            }
            of Tm) this.sheets.delete(mm), "loaded" === hm.state() ? (0, nT.b)(hm, fm) : (hm.unload(), fm())
        }
      }
      onAudioEvent(mm, Tm, fm, hm) {
        if (mm < Om.t.PlaySound || mm > Om.t.SoundReset) return !1;
        try {
          return (0, Om.se)(mm, Tm, fm, hm, this.handlers)
        } catch (Am) {
          return this.errors++, console.error("Audio event failed", Am), !0
        }
      }
      applyListener(mm) {
        const Tm = this.nextPose;
        for (let hm = 0; hm < 3; hm++) Tm[2 - hm] = Om.B.listener(mm, 0, hm), Tm[5 - hm] = Om.B.forward(mm, 0, hm), Tm[8 - hm] = Om.B.up(mm, 0, hm);
        0 === Tm[3] && 0 === Tm[4] && 0 === Tm[5] && Tm.set(this.posed ? this.pose.subarray(3) : eT, 3);
        for (let hm = 0; hm < 9; hm++)
          if (!Number.isFinite(Tm[hm])) return;
        const fm = this.pose;
        if (this.posed) {
          let mm = !0;
          for (let hm = 0; hm < 9 && mm; hm++) mm = Tm[hm] === fm[hm];
          if (mm) return
        }
        this.listener.apply(Tm) && (fm.set(Tm), this.posed = !0)
      }
      playGame(mm, Tm, fm, hm, Am, am, xm) {
        const wm = XT(mm);
        if (wm < 0) return kT.b;
        if (!fm) {
          const {
            howl: mm,
            id: fm
          } = this.start(wm, !1, Tm, 0, 1, xm);
          return this.gameSound(mm, fm, !1)
        }
        const Dm = fm[0],
          im = fm[1] + ST,
          Rm = fm[2];
        if (!Number.isFinite(Dm) || !Number.isFinite(im) || !Number.isFinite(Rm)) return kT.b;
        let pm;
        if (hm) {
          const mm = Dm - hm[0],
            Tm = im - hm[1],
            fm = Rm - hm[2];
          if (pm = mm * mm + Tm * Tm + fm * fm, pm > Am * Am) return kT.b
        } else pm = this.earDistSq(Dm, im, Rm);
        const Em = this.startSpatial(wm, Tm, 0, 1, xm, Dm, im, Rm, am, pm);
        return Em ? this.gameSound(Em.howl, Em.id, !0) : kT.b
      }
      setMaster(mm, Tm) {
        this.level = GT(mm);
        const fm = Tm ? this.level : 0;
        if (fm !== this.master) {
          this.master = fm;
          for (const [mm, Tm] of this.live) Tm.fadeMs = 0, Tm.gain = Tm.rel * this.master, Tm.howl.volume(Tm.gain, mm)
        }
      }
      stopCore() {
        for (const Tm of [...this.core.values()]) {
          var mm;
          null === (mm = this.live.get(Tm)) || void 0 === mm || mm.howl.stop(Tm)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [mm, Tm] of [...this.live]) Tm.howl.stop(mm), this.forget(mm);
        this.core.clear()
      }
      gameSound(mm, Tm, fm) {
        const hm = {
          stop: () => (this.live.has(Tm) && mm.stop(Tm), hm),
          fade: (mm, fm, Am) => {
            var am, xm;
            const wm = this.level > 0 ? fm / this.level : fm > 0 && null !== (am = null === (xm = this.live.get(Tm)) || void 0 === xm ? void 0 : xm.rel) && void 0 !== am ? am : 0;
            return this.fade(Tm, wm, Am, !1), hm
          },
          rate: fm => {
            const Am = this.live.get(Tm);
            return Am && (Am.rate = function(mm) {
              return mm > 0 && mm < 1 / 0 ? mm : 1
            }(fm), mm.rate(Am.rate, Tm)), hm
          },
          getVolume: () => {
            var mm, fm;
            return (null !== (mm = null === (fm = this.live.get(Tm)) || void 0 === fm ? void 0 : fm.rel) && void 0 !== mm ? mm : 0) * this.level
          },
          getRelativeVolume: () => {
            var mm, fm;
            return null !== (mm = null === (fm = this.live.get(Tm)) || void 0 === fm ? void 0 : fm.rel) && void 0 !== mm ? mm : 0
          },
          setRelativeVolume: mm => (this.setRel(Tm, mm), hm),
          setPannerAttr: Am => {
            if (fm && this.live.has(Tm)) {
              const fm = {
                ...bT,
                refDistance: pT.f
              };
              for (const [mm, Tm] of Object.entries(Am)) "number" !== typeof Tm && "string" !== typeof Tm || (fm[mm] = Tm);
              mm.pannerAttr({
                coneOuterAngle: fm.coneOuterAngle
              }, Tm), mm.pannerAttr(fm, Tm)
            }
            return hm
          },
          setPosition: Am => (fm && this.live.has(Tm) && Number.isFinite(Am[0] + Am[1] + Am[2]) && mm.pos(Am[2], Am[1], Am[0], Tm), hm)
        };
        return hm
      }
      startSpatial(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        const Rm = this.sheet(IT[mm], !0);
        let pm = null;
        if (!Am) {
          if (this.failed.has(Rm)) return null;
          const fm = IT[mm] === NT ? null : (0, cT.h)(VT[mm]),
            hm = (0, cT.f)(GT(Tm), Math.sqrt(im), Dm);
          if (pm = new PT(fm, hm, this.now(), Rm, this.voiceHost), !this.voices.admit(pm)) return null
        }
        const Em = this.start(mm, !0, Tm, fm, hm, Am);
        return pm && (pm.id = Em.id, pm.direct = "loaded" === Rm.state() && !Rm._playLock), Rm.pannerAttr({
          coneOuterAngle: 360
        }, Em.id), Rm.pannerAttr({
          ...bT,
          refDistance: Dm
        }, Em.id), Rm.pos(wm, xm, am, Em.id), Em
      }
      aliveVoice(mm) {
        const Tm = this.live.get(mm);
        if (!Tm) return;
        const fm = Tm.howl._soundById(mm);
        if (fm && !fm._ended) return Tm;
        this.forget(mm)
      }
      earDistSq(mm, Tm, fm) {
        if (!this.posed) return 0;
        const hm = mm - this.pose[2],
          Am = Tm - this.pose[1],
          am = fm - this.pose[0];
        return hm * hm + Am * Am + am * am
      }
      start(mm, Tm, fm, hm, Am, am) {
        const xm = GT(fm),
          wm = this.sheet(IT[mm], Tm);
        "unloaded" === wm.state() && wm.load();
        const Dm = wm.play(VT[mm]),
          im = xm * this.master;
        return wm.volume(im, Dm), this.live.set(Dm, {
          howl: wm,
          rel: xm,
          gain: im,
          fadeFrom: im,
          fadeAt: 0,
          fadeMs: 0,
          rate: Am,
          handle: hm,
          spatial: Tm,
          stopTimer: void 0
        }), 0 !== hm && this.core.set(hm, Dm), 1 !== Am && wm.rate(Am, Dm), am && wm.loop(!0, Dm), {
          howl: wm,
          id: Dm
        }
      }
      sheet(mm, Tm) {
        const fm = yT(mm, Tm);
        let hm = this.sheets.get(fm);
        if (!hm) {
          const Am = this.createHowl(qT[mm], Tm);
          Am.on("end", (mm => {
            Am.loop(mm) || this.forget(mm)
          })), Am.on("stop", (mm => {
            this.forget(mm)
          })), Am.on("play", (mm => {
            this.live.has(mm) && this.started.add(mm)
          })), Am.on("loaderror", (mm => {
            if ("loaded" !== Am.state()) {
              this.failed.add(Am);
              for (const [mm, Tm] of this.live) Tm.howl === Am && this.forget(mm)
            } else "number" === typeof mm && this.forget(mm)
          })), this.sheets.set(fm, Am), hm = Am
        }
        return hm
      }
      setRel(mm, Tm) {
        const fm = this.live.get(mm);
        fm && (CT(fm), fm.fadeMs = 0, fm.rel = GT(Tm), fm.gain = fm.rel * this.master, fm.howl.volume(fm.gain, mm))
      }
      fade(mm, Tm, fm, hm) {
        const Am = this.live.get(mm);
        if (!Am) return;
        CT(Am);
        const {
          howl: am
        } = Am, xm = this.gainNow(Am);
        Am.rel = GT(Tm), Am.gain = Am.rel * this.master;
        const wm = fm > 0 ? Math.min(fm, 65535) : 0,
          Dm = 0 === wm || xm === Am.gain;
        Am.fadeMs = Dm ? 0 : wm, Dm ? am.volume(Am.gain, mm) : (Am.fadeFrom = xm, Am.fadeAt = this.now(), am.fade(xm, Am.gain, wm, mm)), hm && (Dm ? am.stop(mm) : Am.stopTimer = setTimeout((() => {
          Am.stopTimer = void 0, am.stop(mm)
        }), wm))
      }
      gainNow(mm) {
        if (mm.fadeMs > 0) {
          const Tm = (this.now() - mm.fadeAt) / mm.fadeMs;
          if (Tm < 1) return mm.fadeFrom + (mm.gain - mm.fadeFrom) * Math.max(0, Tm);
          mm.fadeMs = 0
        }
        return mm.gain
      }
      forget(mm) {
        this.started.delete(mm);
        const Tm = this.live.get(mm);
        Tm && (CT(Tm), this.live.delete(mm), 0 !== Tm.handle && this.core.get(Tm.handle) === mm && this.core.delete(Tm.handle))
      }
    }

    function yT(mm, Tm) {
      return 2 * mm + (Tm ? 1 : 0)
    }

    function CT(mm) {
      void 0 !== mm.stopTimer && (clearTimeout(mm.stopTimer), mm.stopTimer = void 0)
    }
    var rT = fm(40681),
      sT = fm(39252);
    class lT {
      constructor(mm, Tm, fm, hm) {
        this.key = mm, this.model = Tm, this.host = hm, this.yp = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.KAm = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.PO = !1, this.yp = Math.max(1, Math.ceil(fm)), this.records = new Float32Array(this.yp * iT.b), this.isDirty = new Uint8Array(this.yp), this.tail = new Uint8Array(this.yp * Om.Cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(hm.cmd())
      }
      setOrigin(mm, Tm, fm) {
        this.origin[0] = mm, this.origin[1] = Tm, this.origin[2] = fm
      }
      markDirty(mm) {
        !this.PO && mm >= 0 && mm < this.yp && mm < Om.Cc.Max && this.hY(mm, mm + 1)
      }
      commit(mm) {
        if (this.PO) return;
        (mm = Math.min(Math.max(Math.floor(mm), 0), this.yp, Om.Cc.Max)) > this.count && this.hY(this.count, mm), this.count = mm;
        const {
          origin: Tm,
          sentOrigin: fm,
          dirtyList: hm
        } = this, Am = this.KAm !== mm, am = fm[0] !== Tm[0] || fm[1] !== Tm[1] || fm[2] !== Tm[2];
        if (0 === hm.length && !Am && !am) return;
        const xm = this.host.cmd();
        if (!xm || !this.make(xm)) return;
        const wm = hm.length,
          {
            records: Dm,
            tailView: im
          } = this;
        for (let Rm = 0; Rm < wm; Rm++) {
          const mm = hm[Rm],
            Tm = mm * iT.b,
            fm = Rm * Om.Cc.Bytes,
            Am = 0 !== Dm[Tm + iT.d] ? Om.Cc.Hidden : 0;
          im.setUint32(fm, (mm | Am) >>> 0, !0), im.setFloat32(fm + 4, Dm[Tm], !0), im.setFloat32(fm + 8, Dm[Tm + 1], !0), im.setFloat32(fm + 12, Dm[Tm + 2], !0)
        }
        if ((0, Om.Ye)(xm, 0, this.key, mm, Tm, wm, this.tailOf(wm))) {
          for (let mm = 0; mm < wm; mm++) this.isDirty[hm[mm]] = 0;
          hm.length = 0, this.KAm = mm, fm[0] = Tm[0], fm[1] = Tm[1], fm[2] = Tm[2]
        }
      }
      grow(mm) {
        (mm = Math.ceil(mm)) <= this.yp || this.PO || (this.records = (0, sT.b)(this.records, new Float32Array(mm * iT.b)), this.isDirty = (0, sT.b)(this.isDirty, new Uint8Array(mm)), this.tail = new Uint8Array(mm * Om.Cc.Bytes), this.tailView = new DataView(this.tail.buffer), this.yp = mm)
      }
      dispose() {
        this.PO || (this.PO = !0, this.host.PO(this, this.made ? this.key : null))
      }
      make(mm) {
        if (!this.made && mm) {
          const {
            item: Tm,
            scale: fm,
            yaw: hm
          } = this.model;
          this.made = (0, Om._e)(mm, 0, this.key, Tm, fm, hm)
        }
        return this.made
      }
      tailOf(mm) {
        const Tm = mm * Om.Cc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === Tm || (this.tailCut = this.tail.subarray(0, Tm)), this.tailCut
      }
      hY(mm, Tm) {
        const {
          dirtyList: fm,
          isDirty: hm
        } = this;
        for (let Am = mm; Am < Tm; Am++) 0 === hm[Am] && (hm[Am] = 1, fm.push(Am))
      }
    }
    var MT = fm(649);
    class uT {
      constructor(mm) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: mm,
          owes: mm => {
            this.owing.add(mm)
          },
          settled: (mm, Tm) => {
            this.owing.delete(mm), Tm && this.live.delete(mm)
          }
        }
      }
      create(mm, Tm) {
        if (fm = mm, !MT.o.includes(fm)) return null;
        var fm;
        const hm = new BT(++this.keys, Rm.n.indexOf(mm), Tm, this.host);
        return this.live.add(hm), hm
      }
      disposeAll() {
        for (const mm of [...this.live]) mm.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const mm = this.host.cmd();
        for (const Tm of this.owing)
          if (!Tm.sync(mm)) return
      }
    }
    class BT {
      constructor(mm, Tm, fm, hm) {
        this.key = mm, this.lifeform = Tm, this.scale = fm, this.host = hm, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.PO = !1, this.sync()
      }
      setPose(mm, Tm) {
        this.PO || (this.feet[0] = mm[0], this.feet[1] = mm[1], this.feet[2] = mm[2], this.yaw = Tm, this.owed |= 2, this.sync())
      }
      setVisible(mm) {
        this.PO || mm === this.visible || (this.visible = mm, this.owed |= 4, this.sync())
      }
      dispose() {
        this.PO || (this.PO = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(mm) ? (this.host.settled(this, this.PO), !0) : (this.host.owes(this), !1)
      }
      write(mm) {
        if (!mm) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!(0, Om.hf)(mm, 0, this.key, this.lifeform, this.scale)) return !1;
          this.owed &= -2
        }
        const Tm = (2 & this.owed ? Om.bd.Pose : 0) | (4 & this.owed ? Om.bd.Visible : 0);
        if (0 !== Tm) {
          if (!(0, Om.ff)(mm, 0, this.key, Tm, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
          this.owed &= -7
        }
        if (8 & this.owed) {
          if (!(0, Om.bf)(mm, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var LT = fm(41065);

    function vT(mm, Tm, fm, hm) {
      return (0, LT.e)(), (0, Om.Qf)(mm, Tm, fm, hm)
    }
    var tT = fm(39261),
      UT = fm(40675);
    const dT = [0, 0, 0],
      gT = [0, 0, 0],
      WT = [0, 0, 0],
      FT = [0, 0, 0],
      mf = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      Tf = [0, 0, 0],
      ff = [0, 0],
      hf = [1, 1, 1],
      Af = 1 / 3;
    const af = RT.f;

    function xf(mm) {
      const Tm = RT.c[mm],
        fm = Tm && RT.f[Tm.mainMultiblock];
      return fm && {
        main: fm,
        x: Tm.compX,
        y: Tm.compY,
        z: Tm.compZ
      }
    }

    function wf(mm) {
      if (null === mm || void 0 === mm) return Om.id;
      const Tm = +mm;
      return Number.isInteger(Tm) && Tm >= -2147483648 && Tm <= 2147483647 && String(Tm) === String(mm) ? Tm : Om.id
    }

    function Df(mm, Tm, fm) {
      return (0, Om.Yf)(mm, 0, Tm, null !== fm && void 0 !== fm ? fm : Number.NaN)
    }
    class Rf {
      constructor(mm) {
        this.deps = mm, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new tT.d((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (mm => {
          var Tm, fm;
          null === (Tm = (fm = this.deps).setLocalOptions) || void 0 === Tm || Tm.call(fm, mm)
        })), this.mobModels = new uT((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          PO: (mm, Tm) => {
            this.livePools.delete(mm), null !== Tm && (this.owedFrees.push(Tm), this.flushOwed())
          }
        }, this.api = mm.api, this.live = mm.live, this.chunks = mm.chunks, this.items = mm.items, this.tables = mm.tables
      }
      isLocal(mm) {
        return null !== mm && void 0 !== mm && +mm === this.api.localId
      }
      assertLocal(mm, Tm) {
        if (!this.isLocal(mm)) throw new Error(`Attempted to ${Tm} for a player that is not the local player`)
      }
      rV(mm) {
        const Tm = this.api.rV(mm);
        if (!Tm) throw new Error(`Entity ${mm} has no replicated position`);
        return Tm
      }
      checkValid(mm) {
        return !!this.deps.isSessionLive() && (null === mm || void 0 === mm || this.api.checkValid(mm))
      }
      isAlive(mm) {
        return !1 !== this.api.isAlive(mm)
      }
      getItemStat(mm, Tm, fm) {
        return this.isLocal(mm) || null !== mm && "Player" === this.api.getEntityType(mm) ? this.tables.getItemStat(Tm, fm) : this.tables.getDefaultItemStat(Tm, fm)
      }
      getClientOption(mm, Tm) {
        return this.assertLocal(mm, "get a client option"), this.tables.getClientOption(Tm)
      }
      openShop(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(mm, "open shop"), xm.j.gp("showShopFromServer", {
          toggle: Tm,
          CA: fm
        }, !0)
      }
      sendMessage(mm, Tm, fm) {
        this.assertLocal(mm, "send a message");
        const hm = "string" === typeof Tm ? [{
          str: Tm,
          style: fm
        }] : Tm;
        xm.j.gp("chat", {
          content: hm
        }, !0)
      }
      getEntityType(mm) {
        return this.api.getEntityType(mm)
      }
      getEntityName(mm) {
        const Tm = wf(mm);
        return Tm === Om.id ? void 0 : (0, rT.k)(this.api, Tm)
      }
      hasEffect(mm, Tm) {
        const fm = wf(mm);
        return fm !== Om.id && (0, rT.h)(this.api, fm, Tm)
      }
      getMetaInfo(mm) {
        return this.tables.getMetaInfo(mm)
      }
      getPlayerDbId(mm) {
        return this.assertLocal(mm, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(mm, Tm, fm) {
        if (!this.chunks.dataCleared(mm, Tm, fm)) return (0, rT.d)(this.api, mm, Tm, fm)
      }
      zN(mm, Tm, fm, hm) {
        this.setBlockId(mm, Tm, fm, this.tables.getItemId(hm))
      }
      setOtherEntitySetting(mm, Tm, fm, hm) {
        if (!this.isLocal(mm)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(Om.rd, fm)) throw new Error(`Unknown other-entity setting ${fm}`);
        const Am = Om.rd[fm],
          am = wf(Tm);
        if (am === Om.id || !this.deps.beforeWrite()) return;
        const xm = (0, Hm.g)(hm);
        if (xm.length > 16384) throw new Error(`The other-entity setting ${fm}'s value is over 16384 bytes`);
        const wm = this.api.memoryView(Uint8Array, this.api.scratch(), xm.length, "set_other_entity_setting's value");
        wm && (wm.set(xm), this.api.queries.setOtherEntitySetting(am, Am, xm.length))
      }
      getPositionView(mm) {
        return this.live.position(+mm)
      }
      readDrawnPosition(mm, Tm) {
        return this.api.readDrawnPosition(wf(mm), Tm)
      }
      getDrawnHeading(mm) {
        const Tm = wf(mm),
          fm = (Tm === Om.id ? 0 : this.api.queries.directorEntity(Tm)) >= Om.Bb.BYTES ? this.api.memoryData(this.api.scratch(), Om.Bb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
        if (!fm) return null;
        if (1 === Om.Bb.headingIsDrawn(fm, 0)) return Om.Bb.heading(fm, 0);
        const hm = this.api.apiView;
        return this.isLocal(mm) && 0 === (Om.x.playerFlags(hm, 0) & Om.Od.FreeCam) ? Om.x.heading(hm, 0) : null
      }
      getLocalPlayerMovement() {
        const mm = Om.x.playerFlags(this.api.apiView, 0);
        return 0 === (mm & Om.Od.Replay) && this.api.readDrawnPosition(this.api.localId, WT) ? {
          onGround: 0 !== (mm & Om.Od.OnGround),
          jumpHeld: 0 !== (mm & Om.Od.JumpHeld)
        } : null
      }
      MTm(mm) {
        return this.isLocal(mm) ? this.items.ni() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var mm, Tm;
        return "Gun" === (null === (mm = this.aliveHeld()) || void 0 === mm || null === (Tm = mm.typeObj) || void 0 === Tm ? void 0 : Tm.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.ni()
      }
      isCrosshairShown() {
        var mm, Tm;
        const fm = (0, ET.e)(hm.c.get("crosshairGameView"), hm.c.get("crosshairShownOverride"));
        if (null !== fm) return fm;
        const Am = null === (mm = this.aliveHeld()) || void 0 === mm ? void 0 : mm.typeObj,
          am = "Gun" === (null === Am || void 0 === Am ? void 0 : Am.type),
          xm = am || !0 === (null === Am || void 0 === Am ? void 0 : Am.showsAimingUi),
          wm = 0 === (Om.x.playerFlags(this.api.apiView, 0) & Om.Od.ZoomFirstPerson),
          Dm = null !== (Tm = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Tm ? Tm : null;
        return (0, ET.h)({
          gun: am,
          aimable: xm
        }, wm, (0, oT.e)(), Dm)
      }
      setCrosshairShown(mm) {
        hm.c.set({
          crosshairShownOverride: mm
        })
      }
      getInventoryFreeSlotCount(mm) {
        return this.isLocal(mm) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(mm) {
        return this.isLocal(mm) ? this.items.selectedSlot : null
      }
      getItemSlot(mm, Tm) {
        return this.isLocal(mm) ? this.items.slot(Tm) : null
      }
      swapInventorySlots(mm, Tm) {
        return this.items.swap(mm, Tm)
      }
      isPlayerCrouching(mm) {
        if (this.isLocal(mm)) return 0 !== (Om.x.playerFlags(this.api.apiView, 0) & Om.Od.Crouching);
        const Tm = wf(mm);
        return Tm !== Om.id && 1 === this.api.queries.entityCrouching(Tm)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (Om.x.playerFlags(this.api.apiView, 0) & Om.Od.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.Qmm()
      }
      getActionRay() {
        const mm = this.api.apiView;
        for (let Tm = 0; Tm < 3; Tm++) mf.origin[Tm] = Om.x.rmm(mm, 0, Tm), mf.direction[Tm] = Om.x.actionDir(mm, 0, Tm);
        return mf
      }
      canModifyBlockAt(mm, Tm, fm) {
        return 1 === this.api.queries.canModify(mm, Tm, fm)
      }
      isSolidToPlayerBlockId(mm) {
        return this.tables.isSolidBlockId(mm) && !this.chunks.isWalkThrough(mm)
      }
      blockNameToBlockId(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(mm, Tm)
      }
      blockIdToBlockName(mm) {
        return this.tables.nameOfId(mm)
      }
      RTm(mm, Tm, fm, hm, Am) {
        return 1 === this.api.queries.terrainBlocked(hm, mm, Tm, fm, wf(null !== Am && void 0 !== Am ? Am : null))
      }
      getChunkVersion(mm, Tm, fm) {
        return this.chunks.version(mm, Tm, fm)
      }
      scanBlocks(mm, Tm, fm, hm, Am, am, xm, wm) {
        return this.chunks.scan(mm, Tm, fm, hm, Am, am, xm, wm)
      }
      isBlockInLoadedChunk(mm, Tm, fm) {
        return this.chunks.isLoaded(mm, Tm, fm)
      }
      getBlockId(mm, Tm, fm) {
        return this.chunks.jR(mm, Tm, fm)
      }
      playSound(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(mm)) return null;
        const xm = this.playSoundFrom(Tm, fm, Am, am);
        return 1 === hm ? xm : xm.rate(hm)
      }
      preloadSounds(mm) {
        var Tm, fm;
        null === (Tm = (fm = this.deps).preloadSounds) || void 0 === Tm || Tm.call(fm, mm)
      }
      playSoundFrom(mm, Tm, fm, hm) {
        var Am, am;
        const xm = this.deps.playSound;
        if (!xm) return kT.b;
        const wm = null === fm || void 0 === fm ? void 0 : fm.aA,
          Dm = null !== (Am = null === fm || void 0 === fm ? void 0 : fm.maxHearDist) && void 0 !== Am ? Am : pT.e,
          im = null !== (am = null === fm || void 0 === fm ? void 0 : fm.refDistance) && void 0 !== am ? am : pT.f;
        let Rm = null;
        if (Array.isArray(wm)) dT[0] = wm[0], dT[1] = wm[1], dT[2] = wm[2], Rm = dT;
        else if (void 0 !== wm && null !== wm) {
          const mm = wf(wm);
          if (!this.api.isLocal(mm)) {
            if (!this.api.readPosition(mm, dT)) return kT.b;
            Rm = dT
          }
        }
        return xm(mm, Tm, Rm, Rm && this.ear(), Dm, im, hm)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, gT)) gT[1] += ST;
        else {
          const mm = this.api.apiView;
          if (0 === Om.x.viewProj(mm, 0, 3) && 0 === Om.x.viewProj(mm, 0, 7) && 0 === Om.x.viewProj(mm, 0, 11)) return null;
          for (let Tm = 0; Tm < 3; Tm++) gT[Tm] = Om.x.eye(mm, 0, Tm)
        }
        return Number.isFinite(gT[0] + gT[1] + gT[2]) ? gT : null
      }
      setBlockId(mm, Tm, fm, hm) {
        if (!Number.isInteger(hm) || hm < 0 || hm > 65535) throw new Error(`Invalid block id ${hm}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(mm, Tm, fm)) return;
        const Am = Math.floor(mm),
          am = Math.floor(Tm),
          xm = Math.floor(fm),
          wm = this.predictedCells(Am, am, xm, hm);
        if (1 === this.api.queries.zN(Am, am, xm, hm)) {
          for (let mm = 0; mm < wm.length; mm += 5) this.chunks.setOverlay(wm[mm], wm[mm + 1], wm[mm + 2], wm[mm + 3], 1 === wm[mm + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(mm, Tm) {
        return this.deps.particles.create(mm, Tm)
      }
      playParticleEffect(mm) {
        this.deps.particles.playEffect(mm)
      }
      burstParticlePreset(mm, Tm, fm) {
        this.deps.particles.burstPreset(mm, Tm, fm)
      }
      createGameMesh(mm, Tm, fm) {
        const hm = ++this.meshKeys,
          Am = this.deps.cmd();
        if (!Am) return hm;
        const {
          look: am,
          colour: xm
        } = function(mm) {
          switch (mm.kind) {
            case void 0:
            case "flatEmissive":
              return mm.onTop ? {
                look: Om.jc.FlatOnTop,
                colour: [...mm.rgb, mm.alpha]
              } : mm.opaque ? {
                look: Om.jc.FlatOpaque,
                colour: [...mm.rgb, 1]
              } : {
                look: Om.jc.Flat,
                colour: [...mm.rgb, mm.alpha]
              };
            case "chevronPath":
              return {
                look: Om.jc.Chevrons, colour: [...(0, OT.b)(mm.colour), mm.alpha]
              };
            case "furnaceFire":
              return {
                look: Om.jc.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(Tm), wm = Math.floor(mm.positions.length / 3), Dm = function(mm, Tm) {
          const fm = Math.floor(mm.positions.length / 3),
            hm = mm.indices.length,
            Am = fm * (Tm ? 5 : 3),
            am = new Uint8Array(4 * (Am + hm)),
            xm = new DataView(am.buffer);
          for (let im = 0; im < 3 * fm; im++) xm.setFloat32(4 * im, mm.positions[im], !0);
          if (Tm) {
            var wm;
            const Tm = null !== (wm = mm.uvs) && void 0 !== wm ? wm : [];
            for (let mm = 0; mm < 2 * fm; mm++) {
              var Dm;
              xm.setFloat32(4 * (3 * fm + mm), null !== (Dm = Tm[mm]) && void 0 !== Dm ? Dm : 0, !0)
            }
          }
          for (let im = 0; im < hm; im++) xm.setUint32(4 * (Am + im), mm.indices[im], !0);
          return am
        }(mm, (0, iT.h)(Tm));
        return (0, Om.Me)(Am, 0, hm, am, xm, fm, wm, mm.indices.length, Dm) && this.liveMeshes.add(hm), hm
      }
      setGameMesh(mm, Tm) {
        var fm;
        const hm = this.deps.cmd();
        if (!hm) return;
        let Am = 0;
        Tm.anchor && (Am |= Om.kc.Anchor, Tf[0] = Tm.anchor[0], Tf[1] = Tm.anchor[1], Tf[2] = Tm.anchor[2]), void 0 !== Tm.visible && (Am |= Om.kc.Visible), Tm.uvOffset && (Am |= Om.kc.UvOffset, ff[0] = Tm.uvOffset[0], ff[1] = Tm.uvOffset[1]);
        const am = null !== (fm = Tm.visibility) && void 0 !== fm ? fm : 1;
        void 0 !== Tm.visibility && (Am |= Om.kc.Visibility), Tm.scale && (Am |= Om.kc.Scale, hf[0] = Tm.scale[0], hf[1] = Tm.scale[1], hf[2] = Tm.scale[2]), 0 !== Am && (0, Om.Te)(hm, 0, mm, Am, Tm.visible ? 1 : 0, Tf, ff, am, hf)
      }
      disposeGameMesh(mm) {
        const Tm = this.deps.cmd();
        Tm && !(0, Om.Pe)(Tm, 0, mm) || this.liveMeshes.delete(mm)
      }
      hasPackModel(mm) {
        var Tm, fm, hm;
        return null !== (Tm = null === (fm = (hm = this.deps).hasPackModel) || void 0 === fm ? void 0 : fm.call(hm, mm)) && void 0 !== Tm && Tm
      }
      disposeGameOutput() {
        const mm = mm => {
          try {
            mm()
          } catch (Tm) {
            console.error("Error freeing client game output", Tm)
          }
        };
        for (const Tm of [...this.liveMeshes]) mm((() => {
          this.disposeGameMesh(Tm)
        }));
        for (const Tm of [...this.livePools]) mm((() => {
          Tm.dispose()
        }));
        mm((() => {
          this.mobModels.disposeAll()
        })), mm((() => {
          this.setGroundArrowStyle(null)
        })), mm((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), mm((() => {
          this.setCrosshairShown(null)
        })), mm((() => {
          this.cameraTurn.dispose()
        })), mm((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(mm, Tm) {
        const fm = this.tables.idOf(mm.item);
        if (void 0 === fm) return null;
        const hm = new lT(++this.poolKeys, {
          item: fm,
          scale: mm.scale,
          yaw: mm.yaw
        }, Tm, this.poolHost);
        return this.livePools.add(hm), hm
      }
      createMobModel(mm, Tm) {
        return this.mobModels.create(mm, Tm)
      }
      setRouteChevrons(mm) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !mm || 0 === mm.cells.length) return;
        const Tm = `${mm.colour} ${mm.alpha}`;
        Tm !== this.routeLook && (this.routeLook = Tm, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(mm) {
          const [Tm, fm, hm] = mm[0].pos, Am = [], am = [], xm = [];
          return mm.forEach(((mm, wm) => {
            let {
              pos: Dm,
              way: [im, Rm]
            } = mm;
            const pm = Dm[0] - Tm + .5,
              Em = Dm[1] - fm + .04,
              om = Dm[2] - hm + .5,
              [Om, Ym] = [.35 * -Rm, .35 * im],
              [qm, jm] = [wm * Af, (wm + 1) * Af],
              Vm = Am.length / 3;
            Am.push(pm - .5 * im + Om, Em, om - .5 * Rm + Ym), Am.push(pm - .5 * im - Om, Em, om - .5 * Rm - Ym), Am.push(pm + .5 * im + Om, Em, om + .5 * Rm + Ym), Am.push(pm + .5 * im - Om, Em, om + .5 * Rm - Ym), am.push(0, qm, 1, qm, 0, jm, 1, jm), xm.push(Vm, Vm + 1, Vm + 2, Vm + 1, Vm + 3, Vm + 2)
          })), {
            positions: Am,
            uvs: am,
            indices: xm
          }
        }(mm.cells), {
          kind: "chevronPath",
          colour: mm.colour,
          alpha: mm.alpha
        }, mm.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(mm) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(mm, 250) / 1e3 * 1.2 * Af) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(mm) {
        this.pendingStyle = mm, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const mm = this.owedFrees;
        if (0 === mm.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const Tm = this.deps.cmd();
        if (!Tm) return mm.length = 0, void(this.pendingFar = void 0);
        let fm = 0;
        for (; fm < mm.length && (0, Om.Ze)(Tm, 0, mm[fm]);) fm++;
        mm.splice(0, fm);
        const hm = this.pendingStyle;
        if (void 0 !== hm) {
          (hm ? (0, Om.ag)(Tm, 0, hm.width, hm.alpha, 1, hm.endAtSolidFace ? 1 : 0) : (0, Om.ag)(Tm, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const Am = this.pendingFar;
        void 0 !== Am && (0, Om.Vf)(Tm, 0, null !== Am && void 0 !== Am ? Am : 0, null === Am ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(mm, Tm) {
        const fm = this.deps.cmd(),
          hm = wf(mm);
        fm && hm !== Om.id && (0, Om.fg)(fm, 0, hm, Tm)
      }
      setFacingTolerance(mm, Tm) {
        const fm = this.deps.cmd(),
          hm = wf(mm);
        fm && hm !== Om.id && Df(fm, hm, Tm)
      }
      forEachEntity(mm) {
        const {
          api: Tm
        } = this;
        for (let fm = 0; fm < Tm.idStr.length; fm++) {
          const hm = Tm.idStr[fm];
          null === hm || Qm(Tm.kinds[fm]) || mm(hm)
        }
      }
      getEntityInfo(mm) {
        return this.deps.entityInfo.get(mm)
      }
      isEntityInteractable(mm) {
        const Tm = wf(mm);
        return Tm !== Om.id && 1 === this.api.queries.entityInteractable(Tm)
      }
      isLocalPlayer(mm) {
        return this.isLocal(mm)
      }
      getLineOwner(mm) {
        var Tm;
        const fm = null === (Tm = this.deps.entityInfo.get(mm)) || void 0 === Tm ? void 0 : Tm.meshOpts;
        if (!fm) return null;
        try {
          const {
            lineToEId: mm
          } = JSON.parse(fm);
          return null !== mm && void 0 !== mm ? mm : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const mm = this.api.apiView;
        return FT[0] = Om.x.eye(mm, 0, 0), FT[1] = Om.x.eye(mm, 0, 1), FT[2] = Om.x.eye(mm, 0, 2), FT
      }
      getCameraFar() {
        return Om.x.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(mm) {
        null !== mm && (this.farSet = !0), this.pendingFar = mm, this.flushOwed()
      }
      turnCamera(mm, Tm) {
        this.cameraTurn.turn(mm, Tm)
      }
      clearPickupDelay(mm) {
        const Tm = this.deps.cmd(),
          fm = wf(mm);
        Tm && fm !== Om.id && (0, Om.ze)(Tm, 0, fm)
      }
      sendChat(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = this.deps.sendCmd();
        fm && vT(fm, 0, UT.e.Chat, (0, Hm.g)((0, UT.k)({
          Hi: mm,
          yi: Tm
        })))
      }
      sendCommand(mm) {
        mm.length <= 119 && this.sendChat(`/${mm}`)
      }
      predictedCells(mm, Tm, fm, hm) {
        const Am = this.chunks,
          am = [],
          xm = (mm, Tm, fm, hm, Am) => {
            am.push(mm, Tm, fm, hm, this.tables.blockRootId(Am) === this.tables.blockRootId(hm) ? 0 : 1)
          },
          wm = Am.jR(mm, Tm, fm),
          Dm = xf(wm);
        if (Dm) {
          const [hm, am, im] = [mm - Dm.x, Tm - Dm.y, fm - Dm.z], Rm = af[Am.jR(hm, am, im)], pm = null === Rm || void 0 === Rm ? void 0 : Rm.positions.some((mm => mm.id === wm && mm.x === Dm.x && mm.y === Dm.y && mm.z === Dm.z));
          for (const mm of (pm && Rm ? Rm : Dm.main).positions) Am.jR(hm + mm.x, am + mm.y, im + mm.z) === mm.id && xm(hm + mm.x, am + mm.y, im + mm.z, 0, mm.id)
        }
        const im = xf(hm);
        if (im)
          for (const pm of im.main.positions) {
            const [hm, am, wm] = [mm + pm.x - im.x, Tm + pm.y - im.y, fm + pm.z - im.z];
            xm(hm, am, wm, pm.id, Am.jR(hm, am, wm))
          } else xm(mm, Tm, fm, hm, wm);
        const Rm = this.tables;
        if ((0 !== Rm.attachedTopOf(wm) || 0 !== Rm.attachedTopOf(hm)) && Am.isLoaded(mm, Tm + 1, fm)) {
          let Dm = Am.jR(mm, Tm + 1, fm);
          for (let hm = 0; hm < am.length; hm += 5) am[hm] === mm && am[hm + 1] === Tm + 1 && am[hm + 2] === fm && (Dm = am[hm + 3]);
          const im = this.attachedTopWrite(wm, hm, Dm);
          void 0 !== im && xm(mm, Tm + 1, fm, im, Dm)
        }
        return am
      }
      attachedTopWrite(mm, Tm, fm) {
        const hm = this.tables,
          Am = hm.attachedTopOf(mm),
          am = hm.attachedTopOf(Tm),
          xm = 0 !== Am && 0 !== fm && hm.blockRootId(fm) === hm.blockRootId(Am);
        return 0 !== Am && 0 !== am && hm.blockRootId(mm) === hm.blockRootId(Tm) ? xm && fm !== am ? am : void 0 : 0 === am || !xm && 0 !== fm ? xm ? 0 : void 0 : am
      }
    }
    const pf = Om.uc + Om.yc * Om.Hc.BYTES,
      Ef = 2147483647,
      of = new TextDecoder,
      Of = new TextEncoder,
      Yf = Object.freeze({
        iw: 0,
        Kx: null,
        amountAddedToSlot: 0
      }),
      qf = new Proxy({}, {
        get: () => () => Om.qd
      });

    function jf(mm) {
      return Number.isInteger(mm) && mm >= 0 && mm <= 65535
    }

    function Vf(mm) {
      return Number.isInteger(mm) && mm >= 0 && mm <= 4294967295
    }
    class If {
      constructor(mm) {
        this.deps = mm, this.Ph = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Om.yc), this.ids = new Uint16Array(Om.yc), this.amounts = new Uint16Array(Om.yc), this.attrRead = new Float64Array(Om.yc).fill(-1), this.stale = new Uint16Array(Om.yc), this.staleVersion = new Uint32Array(Om.yc), this.instances = new Uint32Array(Om.yc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(mm) {
        var Tm;
        return Number.isInteger(mm) && mm >= 0 && mm < this.len && 0 !== this.ids[mm] && null !== (Tm = this.facades[mm]) && void 0 !== Tm ? Tm : null
      }
      ni() {
        return this.slot(this.selected)
      }
      playerItems() {
        const mm = [];
        for (let Tm = 0; Tm < Math.min(Om.xd, this.len); Tm++) mm.push(this.slot(Tm));
        return mm
      }
      freeSlots() {
        let mm = 0;
        for (let Tm = 0; Tm < Math.min(Om.xd - Om.j, this.len); Tm++) 0 === this.ids[Tm] && mm++;
        return mm
      }
      amountOf(mm) {
        let Tm = 0;
        for (let hm = 0; hm < Math.min(Om.xd, this.len); hm++) {
          const Am = this.slot(hm);
          var fm;
          if ((null === Am || void 0 === Am ? void 0 : Am.name) === mm) Tm += null !== (fm = Am.amount) && void 0 !== fm ? fm : 1
        }
        return Tm
      }
      instance(mm) {
        var Tm;
        return null !== (Tm = this.instances[mm]) && void 0 !== Tm ? Tm : 0
      }
      watch(mm) {
        return this.listeners.add(mm), () => {
          this.listeners.delete(mm)
        }
      }
      touch() {
        this.version++
      }
      flush(mm) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const fm of [...this.listeners]) try {
            fm()
          } catch (Tm) {
            mm(Tm)
          }
        }
      }
      chestOpened(mm, Tm, fm) {
        this.Ph[0] = mm, this.Ph[1] = Tm, this.Ph[2] = fm, this.version++
      }
      refresh() {
        const mm = this.deps.api.apiView,
          Tm = Om.x.inventoryViewPtr(mm, 0),
          fm = Om.x.inventoryVersion(mm, 0),
          hm = Om.x.selectedSlot(mm, 0);
        hm !== this.selected && (this.selected = hm, this.version++);
        const Am = Om.x.slotIcon(mm, 0);
        if (Am !== this.slotIconId && (this.slotIconId = Am, this.iconChanged = !0), Tm === this.viewPtr && fm === this.viewVersion) return;
        this.viewPtr = Tm, this.viewVersion = fm;
        const am = this.deps.api.memoryData(Tm, pf, 4, "the inventory view"),
          xm = am ? Math.min(am.getUint32(0, !0), Om.yc) : 0;
        xm !== this.len && (this.len = xm, this.version++);
        let wm = 0;
        for (let Dm = 0; Dm < Om.yc; Dm++) {
          const mm = Om.uc + Dm * Om.Hc.BYTES,
            Tm = null !== am && Dm < xm ? Om.Hc.item(am, mm) : 0;
          if (0 === Tm || null === am) {
            0 !== this.ids[Dm] && (this.ids[Dm] = 0, this.attrRead[Dm] = -1, this.instances[Dm]++, this.version++);
            continue
          }
          const fm = Om.Hc.amount(am, mm),
            hm = Om.Hc.attrVersion(am, mm);
          Tm === this.ids[Dm] && fm === this.amounts[Dm] || this.fill(Dm, Tm, fm), hm !== this.attrRead[Dm] && (this.stale[wm] = Dm, this.staleVersion[wm] = hm, wm++)
        }
        wm > 0 && this.fetchAttributes(wm)
      }
      fill(mm, Tm, fm) {
        const {
          tables: hm
        } = this.deps, Am = Tm !== this.ids[mm];
        let am = this.facades[mm];
        am || (am = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[mm] = am), Am && (am.name = hm.nameOfId(Tm), am.typeObj = hm.itemType(Tm), am.attributes = {
          customAttributes: {}
        }, this.attrRead[mm] = -1, this.instances[mm]++), am.amount = 0 === fm ? null : fm, this.ids[mm] = Tm, this.amounts[mm] = fm, this.version++
      }
      fetchAttributes(mm) {
        const {
          api: Tm,
          onError: fm
        } = this.deps, hm = Tm.memoryView(Uint16Array, Tm.scratch(), mm, "item_attributes_batch's slots");
        if (!hm) return void this.markRead(mm);
        hm.set(this.stale.subarray(0, mm));
        const Am = Tm.queries.itemAttributesBatch(mm),
          am = 4294967295 === Am ? null : Tm.memoryData(Tm.scratch(), Am, 4, "item_attributes_batch's answer");
        if (!am) return void this.markRead(mm);
        const xm = new Uint8Array(am.buffer, am.byteOffset, Am);
        for (let Dm = 0; Dm + 8 <= Am;) {
          const mm = am.getUint16(Dm, !0),
            Tm = am.getUint32(Dm + 4, !0),
            hm = xm.subarray(Dm + 8, Dm + 8 + Tm);
          Dm += 8 + (0, Em.te)(Tm);
          const Am = this.facades[mm];
          if (Am && 0 !== this.ids[mm] && 0 !== Tm) {
            try {
              Am.attributes = JSON.parse(of.decode(hm))
            } catch (wm) {
              fm(wm)
            }
            this.version++
          }
        }
        this.markRead(mm)
      }
      markRead(mm) {
        for (let Tm = 0; Tm < mm; Tm++) this.attrRead[this.stale[Tm]] = this.staleVersion[Tm]
      }
      swap(mm, Tm) {
        return jf(mm) && jf(Tm) && this.settle(this.queries().invSwap(mm, Tm))
      }
      move(mm, Tm, fm) {
        return jf(mm) && jf(Tm) && Vf(fm) && this.settle(this.queries().invMove(mm, Tm, fm))
      }
      quickMove(mm, Tm, fm, hm) {
        var Am, am;
        if (!jf(mm) || !jf(Tm) || !jf(fm) || null !== hm && !Vf(hm)) return null;
        const xm = this.queries().invQuickMove(mm, Tm, fm, null === hm ? -1 : Math.min(hm, Ef)),
          wm = xm === Om.qd ? Om.Vb : null !== (Am = null === (am = this.extras()) || void 0 === am ? void 0 : am[1]) && void 0 !== Am ? Am : Om.Vb;
        return this.settle(xm), wm === Om.Vb ? null : wm
      }
      remove(mm, Tm, fm) {
        return jf(mm) && Vf(Tm) && this.settle(this.queries().invRemove(mm, Tm, fm ? 1 : 0))
      }
      selectSlot(mm) {
        return jf(mm) && this.settle(this.queries().selectSlot(mm))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(mm, Tm, fm) {
        if (!jf(mm) || !Number.isInteger(Tm)) return !1;
        const [hm, Am, am] = fm;
        return this.settle(this.queries().invEnchant(mm, Tm, Math.floor(hm), Math.floor(Am), Math.floor(am)))
      }
      craft(mm, Tm, fm) {
        let hm;
        try {
          hm = this.deps.tables.getItemId(mm)
        } catch {
          return Yf
        }
        if (!jf(Tm) || null !== fm && (Number.isNaN(fm) || fm < 0)) return Yf;
        const Am = null === fm || fm > Ef ? -1 : Math.floor(fm),
          am = this.queries().craft(hm, Tm, Am);
        let xm = Yf;
        const wm = am === Om.qd ? null : this.extras();
        if (wm) {
          const [mm, Tm, fm] = wm;
          xm = {
            iw: mm,
            Kx: Tm === Om.Vb ? null : Tm,
            amountAddedToSlot: fm
          }
        }
        return this.settle(am), xm
      }
      salvage(mm, Tm, fm) {
        let hm;
        try {
          hm = this.deps.tables.getItemId(Tm)
        } catch {
          return !1
        }
        return jf(mm) && Number.isInteger(fm) && this.settle(this.queries().salvage(mm, hm, Math.max(Math.min(fm, Ef), -Ef)))
      }
      craftingView(mm, Tm, fm) {
        var hm;
        if (this.stopped) return null;
        const {
          api: Am,
          onError: am
        } = this.deps, xm = mm ? Of.encode(mm) : null;
        if (null !== xm) {
          if (xm.length > 1024) return am(new Error(`The crafting station ${mm}'s name is over 1024 bytes`)), null;
          const Tm = Am.memoryView(Uint8Array, Am.scratch(), xm.length, "crafting_view's station");
          if (!Tm) return null;
          Tm.set(xm)
        }
        const wm = jf(Tm) && jf(fm),
          Dm = Am.queries.craftingView(null !== (hm = null === xm || void 0 === xm ? void 0 : xm.length) && void 0 !== hm ? hm : 0, wm ? Tm : 0, wm ? fm : 0);
        return Dm < Om.sb.BYTES ? (Am.reportCorruption(`crafting_view's answer of ${Dm} bytes`), null) : Am.memoryData(Am.scratch(), Dm, 1, "crafting_view's answer")
      }
      queries() {
        var mm, Tm;
        return !1 === (null === (mm = (Tm = this.deps).beforeOp) || void 0 === mm ? void 0 : mm.call(Tm)) ? (this.stopped = !0, qf) : this.deps.api.queries
      }
      extras() {
        const {
          api: mm
        } = this.deps;
        return mm.memoryView(Uint32Array, mm.scratch(), 3, "a sync query's extra words")
      }
      settle(mm) {
        if (mm === Om.pd)(0, LT.e)();
        else if (mm !== Om.qd) {
          const Tm = this.deps.cmd();
          Tm && function(mm, Tm, fm) {
            return (0, LT.e)(), (0, Om.tg)(mm, Tm, fm)
          }(Tm, 0, mm) || this.deps.onError(new Error(`Sync op ${mm}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), mm !== Om.qd
      }
    }
    const Kf = 1 / .6,
      Qf = [0, 1, 0],
      nf = [0, 0, 0],
      Jf = new Uint8Array(0),
      zf = 1.2 * YT.f.dq,
      Zf = new TextEncoder,
      kf = [0, 0, 0],
      bf = [0, 0, 0],
      Sf = new Map;

    function ef(mm) {
      let Tm = Sf.get(mm);
      return Tm || (Sf.size >= 64 && Sf.clear(), Tm = Zf.encode(`{"emitRate":${mm}}`), Sf.set(mm, Tm)), Tm
    }

    function Nf(mm) {
      return Number.isFinite(mm) && mm > 0 ? mm : 0
    }

    function Gf(mm, Tm) {
      for (let fm = 0; fm < 3; fm++) {
        const hm = Math.abs(Tm[fm]);
        kf[fm] = mm[fm] - hm, bf[fm] = 2 * hm
      }
      return Number.isFinite(kf[0] + kf[1] + kf[2] + bf[0] + bf[1] + bf[2])
    }

    function Xf(mm, Tm) {
      return "pos1" === mm || "pos2" === mm ? void 0 : Tm
    }

    function Pf(mm, Tm, fm) {
      return mm.length > Om.Md.MaxOpts ? (fm(new Error(`${Tm}'s particle opts are over ${Om.Md.MaxOpts} bytes of JSON`)), null) : mm
    }
    const Hf = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class yf {
      constructor(mm) {
        this.deps = mm, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(mm, Tm) {
        var fm;
        const hm = this.sink(),
          Am = null !== (fm = Tm.half) && void 0 !== fm ? fm : nf;
        if (!hm || this.live >= Om.Md.MaxLiveKeys || this.nextKey > Om.Md.MaxKey || !Gf(Tm.pos, Am)) return Hf;
        const am = this.nextKey,
          xm = Pf(function(mm) {
            var Tm, fm, hm;
            const Am = JSON.stringify({
              texture: "string" === typeof mm.texture ? mm.texture : "smokePuff",
              yp: mm.yp,
              minLifeTime: mm.minLifeTime,
              maxLifeTime: mm.maxLifeTime,
              minSize: mm.minSize,
              maxSize: mm.maxSize,
              minEmitPower: mm.minEmitPower,
              maxEmitPower: mm.maxEmitPower,
              emitRate: Nf(mm.emitRate),
              gravity: null !== (Tm = mm.gravity) && void 0 !== Tm ? Tm : nf,
              dir1: null !== (fm = mm.dir1) && void 0 !== fm ? fm : Qf,
              dir2: null !== (hm = mm.dir2) && void 0 !== hm ? hm : Qf,
              colorGradients: mm.colorGradients,
              blendMode: mm.blendMode
            });
            return Zf.encode(Am)
          }(mm), "createParticles", this.deps.onError);
        return xm && (0, Om.rf)(hm, 0, am, 0, Om.Md.PresetNone, 0, kf, bf, xm) ? (this.nextKey++, this.live++, this.started = !0, new Cf(this, this.session, am, mm, Am)) : Hf
      }
      playEffect(mm) {
        const Tm = this.sink(),
          {
            pos1: fm,
            pos2: hm
          } = mm;
        if (!Tm || !fm || !hm) return;
        for (let am = 0; am < 3; am++) kf[am] = Math.min(fm[am], hm[am]), bf[am] = Math.abs(hm[am] - fm[am]);
        if (!Number.isFinite(kf[0] + kf[1] + kf[2] + bf[0] + bf[1] + bf[2])) return;
        const Am = Pf(Zf.encode(JSON.stringify(mm, Xf)), "playParticleEffect", this.deps.onError);
        Am && (0, Om.lf)(Tm, 0, 0, Om.Md.PresetNone, Om.Md.HasBox, 0, kf, bf, Am)
      }
      burstPreset(mm, Tm, fm) {
        const hm = this.sink(),
          Am = Math.min(Math.floor(fm), Om.Md.MaxBurst);
        if (!hm || !Object.hasOwn(Om.mc, mm) || !(Am > 0)) return;
        const am = zf;
        for (let xm = 0; xm < 3; xm++) kf[xm] = Tm[xm] - am / 2, bf[xm] = am;
        Number.isFinite(kf[0] + kf[1] + kf[2]) && (0, Om.lf)(hm, 0, 0, Om.mc[mm], Om.Md.HasBox, Am, kf, bf, Jf)
      }
      sessionEnded() {
        this.session++;
        const mm = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !mm || (0, Om.sf)(mm, 0)
      }
      sinkFor(mm) {
        return mm === this.session ? this.deps.cmd() : null
      }
      stop(mm, Tm) {
        const fm = this.sinkFor(mm);
        fm && (0, Om.vf)(fm, 0, Tm) && this.live--
      }
    }
    class Cf {
      constructor(mm, Tm, fm, hm, Am) {
        this.owner = mm, this.session = Tm, this.key = fm, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(Am[0]), Math.abs(Am[1]), Math.abs(Am[2])], this.rate = Nf(hm.emitRate), this.emitted = this.rate > 0;
        const am = hm.maxLifeTime * Kf * 1e3 + 250;
        this.stopDelayMs = am >= 0 ? Math.min(am, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(mm, Tm) {
        const fm = this.sink();
        if (fm) {
          if (Tm)
            for (let mm = 0; mm < 3; mm++) this.half[mm] = Math.abs(Tm[mm]);
          Gf(mm, this.half) && (0, Om.wf)(fm, 0, this.key, Om.Md.HasBox, kf, bf, Jf)
        }
      }
      setEmitRate(mm) {
        const Tm = this.sink(),
          fm = Nf(mm);
        Tm && fm !== this.rate && (0, Om.wf)(Tm, 0, this.key, 0, nf, nf, ef(fm)) && (this.rate = fm, this.emitted ||= fm > 0)
      }
      emit(mm) {
        const Tm = this.sink(),
          fm = Math.min(Math.floor(mm), Om.Md.MaxBurst);
        Tm && fm > 0 && (0, Om.lf)(Tm, 0, this.key, Om.Md.PresetNone, 0, fm, nf, nf, Jf) && (this.emitted = !0)
      }
      emitPoints(mm, Tm, fm) {
        const hm = this.sink(),
          Am = Math.min(Math.floor(fm), Om.Md.MaxPoints, Math.floor(Tm.length / 4));
        if (!hm || !(Am > 0) || !Number.isFinite(mm[0] + mm[1] + mm[2])) return;
        const am = new Uint8Array(Tm.buffer, Tm.byteOffset, Am * Om.Md.PointBytes);
        (0, Om.pf)(hm, 0, this.key, Am, mm, am) && (this.emitted = !0)
      }
      setDirections(mm, Tm) {
        const fm = this.sink();
        if (!fm || !Number.isFinite(mm[0] + mm[1] + mm[2] + Tm[0] + Tm[1] + Tm[2])) return;
        const hm = Zf.encode(JSON.stringify({
          dir1: [mm[0], mm[1], mm[2]],
          dir2: [Tm[0], Tm[1], Tm[2]]
        }));
        (0, Om.wf)(fm, 0, this.key, 0, nf, nf, hm)
      }
      stop() {
        const mm = this.sink();
        this.stopped = !0, mm && (this.emitted ? (this.rate > 0 && (0, Om.wf)(mm, 0, this.key, 0, nf, nf, ef(0)), setTimeout((() => {
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
    const rf = MT.p,
      sf = new TextDecoder;

    function lf(mm, Tm) {
      const {
        serverIds: fm,
        kinds: hm
      } = mm;
      let Am = 0;
      for (let am = 0; am < fm.length; am++) {
        const mm = fm[am];
        if (mm !== Om.id && !Qm(hm[am])) {
          if (Am === Tm.length) {
            const mm = new Int32Array(Math.max(64, 2 * Am));
            mm.set(Tm), Tm = mm
          }
          Tm[Am++] = mm
        }
      }
      return {
        ids: Tm,
        count: Am
      }
    }

    function Mf(mm, Tm) {
      return mm.length >= Tm ? mm : new Int32Array(Math.max(Tm, 2 * mm.length))
    }

    function uf(mm, Tm, fm, hm) {
      for (let Am = 0; Am < fm; Am += 4096) {
        const am = Math.min(4096, fm - Am),
          xm = mm.memoryView(Int32Array, mm.scratch(), am, "entity_info_batch's ids");
        if (!xm) return !1;
        xm.set(Tm.subarray(Am, Am + am));
        const wm = mm.queries.entityInfoBatch(am),
          Dm = 4294967295 === wm ? null : mm.memoryData(mm.scratch(), wm, 4, "entity_info_batch's records");
        if (!Dm) return !1;
        for (let mm = 0; mm + Om.bc.BYTES <= wm;) {
          const Tm = Om.bc.len(Dm, mm);
          hm(Om.bc.serverId(Dm, mm), Bf(Dm, mm, Tm)), mm += Om.bc.BYTES + (0, Em.te)(Tm)
        }
      }
      return !0
    }

    function Bf(mm, Tm, fm) {
      var hm, Am, am;
      const xm = Om.bc.kind(mm, Tm),
        wm = 0 === xm ? null : nm(xm);
      if (null === wm) return null;
      const Dm = Om.bc.variation(mm, Tm),
        im = Om.bc.pose(mm, Tm),
        Rm = Om.bc.meta(mm, Tm),
        pm = Om.bc.mesh(mm, Tm),
        Em = 0 !== (Om.bc.flags(mm, Tm) & Om.$b.HasOpts),
        om = rf[wm];
      return Object.freeze({
        type: wm,
        variation: Dm === Om.od ? void 0 : null !== (hm = null !== (Am = null === om || void 0 === om ? void 0 : om[Dm]) && void 0 !== Am ? Am : null === om || void 0 === om ? void 0 : om[0]) && void 0 !== hm ? hm : "default",
        pose: im === Om.tc ? void 0 : null !== (am = Om.Ob[im]) && void 0 !== am ? am : Om.Ob[0],
        metaInfo: Rm === Om.tc ? void 0 : Om.ad[Rm],
        meshKind: pm === Om.tc ? void 0 : Om.$c[pm],
        meshOpts: Em ? sf.decode(new Uint8Array(mm.buffer, mm.byteOffset + Tm + Om.bc.BYTES, fm)) : void 0
      })
    }
    const Lf = 1,
      vf = 2;
    class tf {
      constructor(mm) {
        this.deps = mm, this.wanted = 0, this.ni = !1, this.refused = !1
      }
      get on() {
        return this.ni
      }
      want(mm, Tm) {
        this.wanted = Tm ? this.wanted | mm : this.wanted & ~mm;
        const fm = 0 !== this.wanted;
        if (fm === this.ni) return;
        const hm = this.deps.cmd();
        null !== hm ? (0, Om.yg)(hm, 0, fm ? 1 : 0) ? (this.ni = fm, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.ni = !1
      }
    }
    class Uf {
      constructor(mm) {
        this.deps = mm, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(mm) {
        var Tm;
        return this.complete || this.fill(), null !== (Tm = this.entries.get("string" === typeof mm ? mm : String(mm))) && void 0 !== Tm ? Tm : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(mm) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const mm = new Int32Array(2 * this.pending.length);
            mm.set(this.pending), this.pending = mm
          }
          this.pending[this.pendingCount++] = mm
        }
      }
      removed(mm) {
        this.entries.size > 0 && this.entries.delete(String(mm))
      }
      refresh() {
        const mm = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (mm > 0 && this.complete) {
          const {
            api: Tm
          } = this.deps;
          let fm = 0;
          const hm = this.ids = Mf(this.ids, mm);
          for (let Am = 0; Am < mm; Am++) {
            const mm = this.pending[Am],
              am = Tm.indexById.get(mm);
            void 0 === am || Qm(Tm.kinds[am]) ? this.entries.delete(String(mm)) : hm[fm++] = mm
          }
          fm > 0 && !this.batch(hm, fm) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(Lf, !1)
      }
      fill() {
        const {
          api: mm
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: mm
          } = this.deps, Tm = mm.on;
          mm.want(Lf, !0), !Tm && mm.on && (this.refill = this.midFrame)
        }
        const {
          ids: Tm,
          count: fm
        } = lf(mm, this.ids);
        this.ids = Tm, fm > 0 && !this.batch(Tm, fm) && (this.refill = !0)
      }
      batch(mm, Tm) {
        return uf(this.deps.api, mm, Tm, ((mm, Tm) => {
          null === Tm ? this.entries.delete(String(mm)) : this.entries.set(String(mm), Tm)
        }))
      }
    }
    var df = fm(4741);

    function gf(mm) {
      if ("message" !== mm.type || mm.Hi !== df.gc.NewClientOptions || mm.payloadKind !== Em.gc.Msgpack) return null;
      const Tm = (0, Hm.e)(mm.payload);
      if (null === Tm || "object" !== typeof Tm || Array.isArray(Tm)) throw new Error("NewClientOptions whose body isn't an object of options");
      return Tm
    }
    var Wf = fm(1247),
      Ff = fm(36708);

    function mh(mm, Tm, fm, hm, Am, am, wm) {
      var Dm, im, Rm;
      switch (mm) {
        case Om.je.ToggleMenu: {
          const mm = Om.S[Tm];
          xm.j.gp("toggleMenu", void 0 === mm ? "inventory" : `inventory|${mm}`);
          break
        }
        case Om.je.EditBoard:
          xm.j.gp("EditBoard", {
            pos: 0 === Tm ? null : fm
          });
          break;
        case Om.je.EditCodeBlock:
        case Om.je.ViewCodeBlock:
          xm.j.gp("EditCodeBlock", {
            pos: fm,
            canChangePos: mm === Om.je.EditCodeBlock
          });
          break;
        case Om.je.EditCustomLobbyBlock:
          xm.j.gp("EditCustomLobbyBlock", {
            pos: fm
          });
          break;
        case Om.je.OpenIronChest:
          xm.j.gp("OpenIronChest", {
            pos: fm
          });
          break;
        case Om.je.EditNameTag:
          xm.j.gp("EditNameTag", null !== (Dm = null === (im = Am.ni()) || void 0 === im || null === (Rm = im.attributes.customAttributes) || void 0 === Rm ? void 0 : Rm.text) && void 0 !== Dm ? Dm : "");
          break;
        case Om.je.EditBook: {
          var pm, Em, Ym;
          const mm = null === (pm = Am.ni()) || void 0 === pm ? void 0 : pm.attributes;
          xm.j.gp("EditBook", {
            pages: (0, Wf.E)(null === mm || void 0 === mm || null === (Em = mm.customAttributes) || void 0 === Em ? void 0 : Em.pages),
            title: null !== (Ym = null === mm || void 0 === mm ? void 0 : mm.customDisplayName) && void 0 !== Ym ? Ym : "Title",
            isPublished: !(null === mm || void 0 === mm || !mm.customDescription)
          });
          break
        }
        case Om.je.CantChangeBlock:
          ! function(mm, Tm) {
            const fm = Tm.getClientOption("cantChangeError"),
              hm = Tm.getClientOption(mm ? "cantBuildError" : "cantBreakError"),
              Am = mm ? fm : hm;
            (Tm.getClientOption("canChange") || Am || "You cannot modify this block" !== fm) && xm.j.gp("showBottomMessage", {
              message: hm || fm,
              type: "Error"
            })
          }(1 === Tm, am);
          break;
        case Om.je.MiddleBarStart:
          xm.j.gp("middleScreenBarInitiate", {
            duration: hm,
            gh: 1 === fm[0],
            horizBarRemOffset: Tm
          });
          break;
        case Om.je.MiddleBarStop:
          xm.j.gp("middleScreenBarRemove");
          break;
        case Om.je.Hitmarker:
          xm.j.gp("localGunHitmarker", {
            Zh: 1 === Tm
          });
          break;
        case Om.je.ShotsLeft:
          xm.j.gp("localPlayerNewShotsLeft", hm);
          break;
        case Om.je.AimingOverlay:
          xm.j.gp("aimingOverlay", 3 === (3 & Tm) ? "sniper" : "none");
          break;
        case Om.je.BottomMessage:
          xm.j.gp("showBottomMessage", JSON.parse(wm()));
          break;
        case Om.je.Crosshair:
          Am.inaccuracy = (0, ym.h)(hm), (0, Ff.b)().crosshairAccuracy(Am.inaccuracy);
          break;
        case Om.je.ChargeStage:
          break;
        case Om.je.EmoteWheelClose:
          xm.j.gp("requestEmoteWheelClose");
          break;
        case Om.je.BlockMined:
          xm.j.gp("localBlockMined");
          break;
        default:
          throw new om.e(`UiEvent of no kind: what ${mm}`)
      }
    }
    var Th = fm(38058),
      fh = fm(34299),
      hh = fm(1937),
      Ah = fm(36900),
      ah = fm(34308),
      xh = fm(4722);
    const wh = 10,
      Dh = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      ih = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Rh = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function ph(mm, Tm) {
      let fm, hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const am = () => (fm = (0, hh.o)(fm, Tm()), fm);
      return {
        current: am,
        watch(Tm) {
          const fm = () => {
              Tm(am())
            },
            xm = [mm.watch(fm)];
          return null !== hm && xm.push((0, hh.q)((mm => {
            mm.some(hm) && fm()
          }))), null !== Am && xm.push(Am(fm)), () => {
            for (const mm of xm) mm()
          }
        }
      }
    }

    function Eh(mm) {
      return mm && {
        name: mm.name,
        amount: mm.amount,
        attributes: mm.attributes
      }
    }
    const oh = new WeakMap;

    function Oh(mm) {
      let Tm = oh.get(mm);
      return void 0 === Tm && (Tm = (0, ah.creativeItemIds)().map((Tm => ({
        name: mm.nameOfId(Tm),
        amount: mm.isStackableId(Tm) ? 1 : null,
        attributes: (0, Th.c)("Gun" === (0, ah.itemTypeOf)(Tm) ? {
          type: "Gun",
          clipSize: (0, ah.clipSizeOf)(Tm)
        } : void 0)
      }))), oh.set(mm, Tm)), Tm
    }

    function Yh(mm, Tm, fm, hm) {
      const Am = Tm => (mm.flush(hm), Tm),
        am = fm => {
          var hm, Am, am, xm, wm, Dm, im;
          const Rm = mm.slot(fm);
          if (!Rm) return null;
          const {
            rootName: pm,
            metaStr: Em
          } = Tm.getMetaInfo(Rm.name);
          return {
            name: Rm.name,
            amount: Rm.amount,
            attributes: Rm.attributes,
            instance: mm.instance(fm),
            displayName: null !== (hm = Rm.attributes.customDisplayName) && void 0 !== hm ? hm : Tm.getDisplayName(pm),
            requiresAmmo: "RequiresAmmo" === Em,
            clipSize: null !== (Am = null !== (am = null === (xm = Rm.attributes.customAttributes) || void 0 === xm || null === (wm = xm.gunStats) || void 0 === wm ? void 0 : wm.clipSize) && void 0 !== am ? am : null === (Dm = Tm.getGunStats(pm)) || void 0 === Dm ? void 0 : Dm.clipSize) && void 0 !== Am ? Am : null === (im = Rm.typeObj) || void 0 === im ? void 0 : im.clipSize
          }
        },
        wm = function(mm, Tm) {
          let fm = null,
            hm = {
              focus: null,
              recipes: [],
              detail: null
            },
            Am = -1;
          const am = new Set;
          return {
            read() {
              var am, xm;
              if (null === fm) return null !== hm.focus && (hm = {
                ...hm,
                focus: null
              }), hm;
              if (hm.focus === fm && Am === mm.changes) return hm;
              if (Am = mm.changes, 0 === mm.length) return hm = {
                focus: fm,
                recipes: [],
                detail: null
              }, hm;
              let wm = 0;
              if (null !== fm.recipe) try {
                wm = Tm.getItemId(fm.recipe.name)
              } catch {}
              const Dm = mm.craftingView(fm.station, wm, null !== (am = null === (xm = fm.recipe) || void 0 === xm ? void 0 : xm.Dw) && void 0 !== am ? am : 0);
              return hm = null === Dm ? {
                focus: fm,
                recipes: [],
                detail: null
              } : function(mm, Tm, fm) {
                let hm = Om.sb.BYTES;
                const Am = [];
                for (let Rm = Om.sb.recipes(mm, 0); Rm > 0; Rm--) {
                  const fm = Om.mb.flags(mm, hm),
                    am = {
                      name: Tm.nameOfId(Om.mb.item(mm, hm)),
                      Dw: Om.mb.recipe(mm, hm),
                      requires: [],
                      produces: Om.mb.produces(mm, hm),
                      haveIngredients: 0 !== (fm & Om.kb.HaveIngredients),
                      listed: 0 !== (fm & Om.kb.Listed)
                    };
                  let xm = Om.mb.requires(mm, hm);
                  for (hm += Om.mb.BYTES; xm > 0; xm--) {
                    const fm = Om.qb.items(mm, hm);
                    am.requires.push({
                      items: Vh(mm, hm + Om.qb.BYTES, fm, Tm),
                      amt: Om.qb.amount(mm, hm)
                    }), hm += Om.qb.BYTES + 2 * fm
                  }
                  Am.push(am)
                }
                const am = Om.sb.flags(mm, 0);
                if (null === fm.recipe || 0 === (am & Om.rb.Detail)) return {
                  focus: fm,
                  recipes: Am,
                  detail: null
                };
                const xm = {},
                  wm = {};
                for (let Rm = Om.sb.ingredients(mm, 0); Rm > 0; Rm--) {
                  const fm = Om.jb.item(mm, hm),
                    Am = Om.jb.from(mm, hm),
                    am = Om.jb.amount(mm, hm);
                  hm += Om.jb.BYTES;
                  const Dm = Am === Om.O ? null : Vh(mm, hm, Am, Tm);
                  if (null !== Dm && (hm += 2 * Am), 0 === fm) continue;
                  const im = Tm.nameOfId(fm);
                  xm[im] = am, null !== Dm && (wm[im] = Dm)
                }
                const {
                  name: Dm,
                  Dw: im
                } = fm.recipe;
                return {
                  focus: fm,
                  recipes: Am,
                  detail: {
                    name: Dm,
                    Dw: im,
                    craftAllTimes: Om.sb.craftAllTimes(mm, 0),
                    roomForOne: 0 !== (am & Om.rb.RoomForOne),
                    resultStackable: Boolean(Tm.getItemStat(Dm, "stackable")),
                    amounts: xm,
                    ingredientsCraftedFrom: wm
                  }
                }
              }(Dm, Tm, fm), hm
            },
            setFocus(mm) {
              fm = mm;
              for (const Tm of [...am]) Tm()
            },
            watchFocus: mm => (am.add(mm), () => {
              am.delete(mm)
            })
          }
        }(mm, Tm);
      return {
        states: {
          inventory: ph(mm, (() => {
            const fm = mm.length;
            if (0 === fm) return Dh;
            const hm = [];
            for (let Tm = 0; Tm < Om.xd; Tm++) hm.push(Eh(mm.slot(Tm)));
            const Am = mm.slotIcon,
              am = hm[mm.selectedSlot];
            0 !== Am && am && (hm[mm.selectedSlot] = {
              ...am,
              icon: Tm.nameOfId(Am)
            });
            const xm = !0 === Tm.getClientOption("creative");
            let wm = [],
              Dm = null;
            if (fm > Om.xd) {
              for (let Tm = Om.xd; Tm < fm; Tm++) wm.push(Eh(mm.slot(Tm)));
              Dm = {
                type: null,
                pos: [...mm.Ph],
                numSlots: fm - Om.xd,
                ironChest: null
              }
            } else xm && (wm = Oh(Tm));
            return {
              player: hm,
              chestOrCreative: wm,
              chest: Dm,
              creative: xm,
              selectedSlot: mm.selectedSlot,
              freeSlots: mm.freeSlots()
            }
          }), (0, hh.j)("creative")),
          hotbar: ph(mm, (() => {
            if (0 === mm.length) return ih;
            const Tm = [];
            for (let mm = 0; mm < wh; mm++) Tm.push(am(mm));
            return {
              items: Tm,
              ammo: mm.amountOf("Ammo"),
              selectedSlot: mm.selectedSlot
            }
          }), (0, hh.i)("DisplayName", "GunStats")),
          crafting: ph(mm, wm.read, null, wm.watchFocus),
          heldItemAim: ph(mm, (() => {
            var Tm;
            if (!fm()) return Rh;
            const hm = null === (Tm = mm.ni()) || void 0 === Tm ? void 0 : Tm.typeObj,
              Am = "Gun" === (null === hm || void 0 === hm ? void 0 : hm.type);
            return {
              gun: Am,
              aimable: Am || !0 === (null === hm || void 0 === hm ? void 0 : hm.showsAimingUi),
              chargeName: "Chargeable" === (null === hm || void 0 === hm ? void 0 : hm.type) ? hm.name : null
            }
          }), null, (mm => function(mm, Tm) {
            let fm = mm();
            return (0, xh.y)((() => {
              const hm = mm();
              hm !== fm && (fm = hm, Tm(hm))
            }))
          }(fm, mm)))
        },
        events: {
          hotbarSlotRequested: (0, hh.d)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, hh.d)("ScrollInventorySlot"),
          numberKeyPressed: (0, hh.d)("numkeyPressed"),
          inventoryDropRequested: (0, hh.d)("DropInvenItem"),
          chestToggled: (0, hh.d)("chestToggleFromServer"),
          chestRefreshed: (0, hh.d)("chestRefreshedFromServer", jh),
          inventorySynced: (0, hh.d)("syncedInvenFromServer", jh),
          enchantingTableOpened: (0, hh.d)("enchantingTable", (mm => {
            let {
              position: fm,
              jR: hm
            } = mm;
            return {
              position: [...fm],
              blockName: Tm.getMetaInfo(hm).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(Tm) {
            mm.selectSlot(Tm), mm.flush(hm)
          },
          removeInventoryItem(Tm) {
            let {
              slot: fm,
              amount: hm,
              drop: am
            } = Tm;
            return Am(mm.remove(fm, hm, am))
          },
          swapInventorySlots(Tm) {
            let {
              a: fm,
              b: hm
            } = Tm;
            return Am(mm.swap(fm, hm))
          },
          moveInventoryItem(Tm) {
            let {
              from: fm,
              to: hm,
              amount: am
            } = Tm;
            return Am(mm.move(fm, hm, am))
          },
          quickMoveInventoryItem(Tm) {
            let {
              slot: fm,
              start: hm,
              end: am,
              amount: xm
            } = Tm;
            return Am(mm.quickMove(fm, hm, am, xm))
          },
          closeChest() {
            mm.closeChest(), mm.flush(hm), xm.j.gp("chestClosedByPlayer")
          },
          focusCrafting(mm) {
            wm.setFocus(mm)
          },
          craftRecipe(Tm) {
            let {
              name: fm,
              Dw: hm,
              times: am
            } = Tm;
            return Am(mm.craft(fm, hm, am))
          },
          salvageItem(Tm) {
            let {
              slot: fm,
              name: hm,
              amount: am
            } = Tm;
            return Am(mm.salvage(fm, hm, am))
          },
          enchantItem(Tm) {
            let {
              slot: fm,
              level: hm,
              tablePos: Am
            } = Tm;
            mm.enchant(fm, hm, Am)
          }
        },
        queries: {
          enchantingOffer(fm) {
            let {
              slot: hm,
              blockName: Am
            } = fm;
            return function(mm, Tm, fm, hm) {
              const Am = mm.slot(fm);
              if (!Am || !Tm.getClientOption("canCraft") || !(0, fh.p)(hm) || (0, fh.l)(Am.attributes)) return qh;
              const am = (0, ah.enchantmentPerksOf)(Tm.getItemId(Am.name));
              if (0 === am.length) return qh;
              const xm = [];
              for (let wm = 0; wm < Ah.c; wm++) {
                const {
                  commonProb: mm,
                  uncommonProb: Tm,
                  rareProb: fm,
                  epicProb: Am,
                  legendaryProb: am,
                  level: Dm
                } = (0, fh.g)(hm, wm);
                xm.push({
                  level: Dm,
                  odds: [mm, Tm, fm, Am, am].map((mm => 100 * mm))
                })
              }
              return {
                perks: [...am],
                options: xm
              }
            }(mm, Tm, hm, Am)
          }
        }
      }
    }
    const qh = Object.freeze({
      perks: [],
      options: []
    });

    function jh() {
      return null
    }

    function Vh(mm, Tm, fm, hm) {
      const Am = [];
      for (let am = 0; am < fm; am++) {
        const fm = mm.getUint16(Tm + 2 * am, !0);
        0 !== fm && Am.push(hm.nameOfId(fm))
      }
      return Am
    }
    class Ih {
      constructor(mm) {
        this.api = mm, this.positions = new Map, this.targeted = {
          XF: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          ep: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(mm) {
        let Tm = this.positions.get(mm);
        return Tm || (this.api.checkValid(mm) || this.api.isLocal(mm) ? (Tm = [NaN, NaN, NaN], this.api.readPosition(mm, Tm), this.positions.set(mm, Tm), Tm) : null)
      }
      Qmm() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [Tm, fm] of this.positions) this.api.readPosition(Tm, fm) || this.api.checkValid(Tm) || this.api.isLocal(Tm) || this.positions.delete(Tm);
        const mm = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (Om.x.playerFlags(mm, 0) & Om.Od.Breaking) && Om.x.breakingProgress(mm, 0) >= 0, this.isBreaking)
          for (let Tm = 0; Tm < 3; Tm++) this.breaking[Tm] = Om.x.breakingPos(mm, 0, Tm)
      }
      refreshTarget() {
        const mm = this.api.apiView,
          Tm = Om.x.targetBlockId(mm, 0);
        if (this.hasTarget = Tm !== Om.md, this.hasTarget) {
          const fm = this.targeted;
          fm.XF = Tm;
          for (let Tm = 0; Tm < 3; Tm++) fm.position[Tm] = Om.x.targetBlock(mm, 0, Tm), fm.normal[Tm] = Om.x.targetNormal(mm, 0, Tm), fm.ep[Tm] = Om.x.targetAdjacent(mm, 0, Tm)
        }
      }
      despawned(mm) {
        const Tm = this.positions.get(mm);
        Tm && !this.api.isLocal(mm) && (Tm.fill(NaN), this.positions.delete(mm))
      }
    }
    var Kh = fm(40701),
      Qh = fm(40684),
      nh = fm(36895);
    const Jh = 1,
      ch = 2;
    class zh {
      constructor() {
        this.game = new nh.g, this.client = new nh.g, this.ni = 0, this.movesFly = null
      }
      setGame(mm) {
        if (null === mm || "object" !== typeof mm) return !1;
        const {
          key: Tm,
          value: fm
        } = mm;
        return "string" === typeof Tm && (this.game.setBooleanType(Tm, Boolean(fm)), !0)
      }
      setClient(mm, Tm) {
        this.client.setBooleanType(mm, Tm)
      }
      clearGame() {
        this.game = new nh.g, this.movesFly = null
      }
      setMovesFly(mm) {
        this.movesFly = mm
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Jh : 0) | (this.client._getTotalBooleanVal() ? ch : 0)
      }
      write(mm) {
        const Tm = this.perms(),
          {
            movesFly: fm
          } = this;
        if (Tm === this.ni && null === fm) return !0;
        let hm = Om.ec.Keep;
        return null !== fm && (hm = fm ? Om.ec.On : Om.ec.Off), !(!mm || !(0, Om.He)(mm, 0, hm, Tm, fm ? 1 : 0)) && (this.ni = Tm, this.movesFly = null, !0)
      }
    }
    class Zh {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = mm, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: wm.e,
          get y() {
            return Tm()
          }
        }
      }
      get hasView() {
        const mm = this.api.apiView,
          Tm = Om.x.viewProj;
        return 0 !== Tm(mm, 0, 3) || 0 !== Tm(mm, 0, 7) || 0 !== Tm(mm, 0, 11) || 0 !== Tm(mm, 0, 15)
      }
      get cameraPosition() {
        const mm = this.api.apiView,
          {
            eye: Tm
          } = this;
        for (let fm = 0; fm < 3; fm++) Tm[fm] = Om.x.eye(mm, 0, fm);
        return Tm
      }
      get cameraDirection() {
        const mm = this.api.apiView,
          Tm = Om.x.viewProj,
          fm = Tm(mm, 0, 3),
          hm = Tm(mm, 0, 7),
          Am = Tm(mm, 0, 11),
          am = Math.hypot(fm, hm, Am),
          {
            forward: xm
          } = this;
        return am > 0 && (xm[0] = fm / am, xm[1] = hm / am, xm[2] = Am / am), xm
      }
      get cameraHeading() {
        return Om.x.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return Om.x.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return Om.x.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return Om.x.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(mm) {
        this.clip(mm);
        const {
          clipX: Tm,
          clipY: fm,
          clipW: hm
        } = this;
        if (hm > 0) {
          const mm = Tm / hm * 50,
            Am = -fm / hm * 50;
          return Math.abs(mm) <= this.screenBandPct.x && Math.abs(Am) <= this.screenBandPct.y ? {
            x: 50 + mm,
            y: 50 + Am
          } : this.clampToBand(mm, Am)
        }
        const Am = this.cameraPosition,
          am = Math.hypot(mm[0] - Am[0], mm[1] - Am[1], mm[2] - Am[2]),
          xm = this.api.apiView,
          wm = Om.x.viewProj,
          Dm = am > 0 ? Tm / am : 0,
          im = am > 0 ? -fm / am : 0,
          Rm = Math.hypot(wm(xm, 0, 1), wm(xm, 0, 5), wm(xm, 0, 9)),
          pm = Dm / Math.hypot(wm(xm, 0, 0), wm(xm, 0, 4), wm(xm, 0, 8)),
          Em = im / Rm,
          om = !(Math.abs(pm) >= .001 || Math.abs(Em) >= .001);
        return this.clampToBand(Dm, om ? -(Rm || 1) : im)
      }
      projectDirectionToScreenPos(mm) {
        if (!this.hasView) return;
        const Tm = this.cameraPosition,
          fm = this.along;
        for (let hm = 0; hm < 3; hm++) fm[hm] = Tm[hm] + 10 * mm[hm];
        return this.projectWorldPosToScreenPos(fm)
      }
      projectWorldPosToViewport(mm) {
        this.clip(mm);
        const {
          clipX: Tm,
          clipY: fm,
          clipW: hm
        } = this;
        return hm > 0 ? {
          x: 50 + Tm / hm * 50,
          y: 50 - fm / hm * 50
        } : null
      }
      clip(mm) {
        const Tm = this.api.apiView,
          fm = mm[0] - Om.x.origin(Tm, 0, 0),
          hm = mm[1] - Om.x.origin(Tm, 0, 1),
          Am = mm[2] - Om.x.origin(Tm, 0, 2),
          am = Om.x.viewProj;
        this.clipX = am(Tm, 0, 0) * fm + am(Tm, 0, 4) * hm + am(Tm, 0, 8) * Am + am(Tm, 0, 12), this.clipY = am(Tm, 0, 1) * fm + am(Tm, 0, 5) * hm + am(Tm, 0, 9) * Am + am(Tm, 0, 13), this.clipW = am(Tm, 0, 3) * fm + am(Tm, 0, 7) * hm + am(Tm, 0, 11) * Am + am(Tm, 0, 15)
      }
      clampToBand(mm, Tm) {
        return (0, wm.f)(mm, Tm, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var kh = fm(4755);
    const bh = new TextEncoder,
      Sh = new Uint8Array(Om.Y * Om.W);
    class eh {
      constructor() {
        this.buttons = [], this.ni = !0
      }
      set(mm) {
        this.buttons = mm, this.ni = !1
      }
      attached() {
        this.ni = 0 === this.buttons.length
      }
      write(mm) {
        if (this.ni) return;
        const Tm = new Uint8Array(Om.Y),
          fm = new Uint8Array(Om.Y);
        let hm = 0,
          Am = 0;
        for (const {
            id: am,
            keycode: xm
          }
          of this.buttons) {
          if (hm === Om.Y) break;
          const {
            read: mm,
            written: wm
          } = bh.encodeInto(am, Sh.subarray(Am, Am + Om.W));
          if (mm < am.length) continue;
          const Dm = kh.i[xm];
          Tm[hm] = "number" === typeof Dm ? Dm : 0, fm[hm] = wm, hm++, Am += wm
        }
        this.ni = (0, Om.ve)(mm, 0, hm, Tm, fm, Sh.subarray(0, Am))
      }
    }

    function Nh(mm, Tm, fm) {
      const hm = bh.encode(Tm);
      return hm.length <= Om.W && function(mm, Tm, fm, hm) {
        return (0, LT.e)(), (0, Om.xf)(mm, Tm, fm, hm)
      }(mm, 0, fm ? 1 : 0, hm)
    }
    const Gh = new TextDecoder,
      Xh = new TextEncoder,
      Ph = new Uint8Array(0),
      Hh = [0, 0, 0],
      yh = {
        off: Om.Sd.Off,
        key: Om.Sd.Key,
        touch: Om.Sd.Touch
      };
    class Ch {
      constructor(mm) {
        var Tm;
        this.options = mm, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new eh, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new zh, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.IO = mm => {
          if ((0, om.k)(mm)) throw mm;
          this.onError(mm)
        }, this.api = mm.api, this.tables = mm.tables, this.onError = null !== (Tm = mm.onError) && void 0 !== Tm ? Tm : mm => {
          console.error("Error in client game callback", mm)
        }, this.renderFrame = new Zh(this.api, mm.screenBandY), this.live = new Ih(this.api), this.chunks = new DT(this.api.memory, (() => this.api.apiView)), this.items = new If({
          api: this.api,
          tables: mm.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: mm.beforeOp
        });
        const fm = () => this.stopped() ? null : this.cmd,
          hm = () => this.sessionLive;
        this.entityInfoWatch = new tf({
          cmd: fm,
          onError: this.onError
        }), this.entityInfo = new Uf({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: hm
        }), this.particles = new yf({
          cmd: fm,
          isSessionLive: hm,
          onError: this.onError
        }), this.clientApi = new Rf({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: mm.tables,
          cmd: fm,
          sendCmd: () => this.sendCmd(),
          isSessionLive: hm,
          beforeWrite: () => {
            var Tm;
            if (this.stopped()) return !1;
            const fm = this.generation;
            return !1 !== (null === (Tm = mm.beforeWrite) || void 0 === Tm ? void 0 : Tm.call(mm)) && fm === this.generation
          },
          playerDbId: () => {
            const mm = this.session;
            if (null === mm) throw new Error("No game session has started, so the local player has no DB id");
            return mm.playerDbId
          },
          playSound: mm.playSound,
          preloadSounds: mm.preloadSounds,
          setLocalOptions: mm.setLocalOptions,
          hasPackModel: mm.hasPackModel
        }), this.scriptedCamera = new tm({
          api: this.api,
          cmd: () => this.stopped() ? null : this.cmd,
          screen: mm.cameraScreen,
          showFacing: mm.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= Yh(this.items, this.tables, (() => this.localPlayerAlive()), this.IO), this.itemSources
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
      clickCodeBlock(mm) {
        const Tm = this.sessionLive ? this.sendCmd() : null;
        return null !== Tm && (fm = Tm, hm = 0, Am = mm[0], am = mm[1], xm = mm[2], (0, LT.e)(), (0, Om.Be)(fm, hm, Am, am, xm));
        var fm, hm, Am, am, xm
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(mm) {
        const Tm = this.liveCmd();
        return null === Tm ? (this.pendingZoom = mm, !1) : (this.pendingZoom = null, (0, Om.qg)(Tm, 0, mm, 1))
      }
      nS(mm) {
        const Tm = this.stopped() ? null : this.cmd;
        return null !== Tm && (0, Om.jg)(Tm, 0, mm ? 1 : 0)
      }
      respawn() {
        const mm = this.sessionLive ? this.sendCmd() : null;
        return null !== mm && (Tm = mm, fm = 0, (0, LT.e)(), (0, Om.Kf)(Tm, fm));
        var Tm, fm
      }
      bindCustomButtonKeys(mm) {
        this.customButtons.set(mm)
      }
      pressCustomButton(mm, Tm) {
        const fm = this.sessionLive ? this.sendCmd() : null;
        return null !== fm && Nh(fm, mm, Tm)
      }
      padMove(mm, Tm, fm, hm, Am, am) {
        const xm = this.liveCmd();
        return null !== xm && (0, Om.jf)(xm, 0, mm, Tm, fm, hm, Am, am)
      }
      thirdPersonFor(mm) {
        const Tm = this.liveCmd();
        return null !== Tm && (0, Om.ug)(Tm, 0, null !== mm && void 0 !== mm ? mm : 1 / 0)
      }
      send(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== hm && vT(hm, fm ? Em.qd : 0, mm, (0, Hm.g)(Tm))
      }
      socketAttached(mm) {
        this.openSocket = mm, this.socketLeftSinceAttach = !1
      }
      socketDetached(mm) {
        this.openSocket === mm && (this.openSocket = 0)
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
      attach(mm) {
        const Tm = () => mm.isStopped;
        this.stopped = Tm, this.cmd = mm.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const fm = this.api.apiView;
        this.overflowGen = Om.x.eventOverflowGen(fm, 0), this.resyncOwed = 0 !== Om.x.eventOverflowMask(fm, 0), mm.setGameHost(this), mm.setEventWalker((mm => {
          this.api.walk(mm, this, Tm)
        }))
      }
      watchPromptPick(mm) {
        this.promptWatch = mm, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : rh(Om.x.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? Om.Dc.None : Om.x.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : Om.x.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === mm || mm >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, mm, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(mm) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(mm)
      }
      netEvent(mm) {
        "connection" === mm.type ? mm.phase === Em.L.Activated && mm.conn !== this.activeConn && mm.conn > this.closedThrough ? (this.endSession(), this.activeConn = mm.conn, this.endGameGrants(), this.dropGameCamera()) : mm.phase !== Em.L.Left && mm.phase !== Em.L.Closed || mm.conn !== this.activeConn ? mm.phase === Em.L.Resumed && 0 !== this.activeConn && mm.conn > this.closedThrough && (this.activeConn = mm.conn) : this.closeGame() : mm.conn === this.activeConn && 0 !== mm.conn && (mm.Hi === Qh.x ? this.gunHit(mm.payload) : mm.Hi === df.gc.EditItemCraftingRecipes || mm.Hi === Qh.V ? this.items.touch() : (this.serverOptions(mm), this.gameMessage(mm)));
        const Tm = this.options.onNetEvent;
        Tm && this.guard((() => {
          Tm(mm)
        }))
      }
      serverOptions(mm) {
        const Tm = this.options.serverOptions,
          fm = Tm ? this.decoded(gf, mm) : null;
        Tm && fm && this.guard((() => {
          Tm.applyNewClientOptions(fm)
        }))
      }
      gameMessage(mm) {
        let Tm = null;
        try {
          Tm = function(mm) {
            if ("message" !== mm.type || mm.Hi !== df.gc.GameCodeMessage || mm.payloadKind !== Em.gc.Msgpack) return null;
            const Tm = (0, Hm.e)(mm.payload);
            if (null === Tm || "object" !== typeof Tm || "string" !== typeof Tm.messageType) throw new Error("GameCodeMessage without a messageType");
            return Tm
          }(mm)
        } catch (fm) {
          this.sessionLive && this.onError(fm)
        }
        if (Tm) {
          const {
            messageType: mm,
            data: fm
          } = Tm;
          if ((0, bm.f)(mm)) return void this.guard((() => {
            (0, bm.e)(mm, fm)
          }));
          "freeCamPerms" === mm && this.freeCam.setGame(fm) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (Tm => {
            Tm.onReceivedMessageFromServer(mm, fm)
          }))
        }
      }
      decoded(mm, Tm) {
        try {
          return mm(Tm)
        } catch (fm) {
          return this.onError(fm), null
        }
      }
      setClientFreeCameraGrant(mm, Tm) {
        this.freeCam.setClient(mm, Tm), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(mm) {
        this.freeCam.setMovesFly(mm), this.writeFreeCam()
      }
      setBlockHighlight(mm) {
        this.highlight = mm, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const mm = this.liveCmd();
        if (null === mm || !this.highlightOwed) return;
        const Tm = this.highlight;
        this.highlightOwed = null === Tm ? !(0, Om.Xe)(mm, 0, Hh, Hh, 0) : !(0, Om.Xe)(mm, 0, Tm.pos, Tm.normal, 1)
      }
      localPlayerBound(mm) {
        var Tm, fm;
        if (0 === this.activeConn || this.sessionLive && mm === this.boundId) return;
        const hm = this.sessionLive;
        let Am, am, xm, wm;
        this.endSession(), hm && this.restartGameCamera();
        try {
          var Dm;
          this.session = null;
          const mm = this.options.sessionInfo(this.activeConn);
          if (this.session = mm, !mm) return;
          Am = mm.gameNameWithVariation, am = null !== (Dm = (0, Zm.Jb)(Am)) && void 0 !== Dm ? Dm : void 0, xm = (0, km.r)(mm.lobbyName), wm = (0, km.D)(mm.lobbyName)
        } catch (Vm) {
          return void this.onError(Vm)
        }
        const im = {
          localPlayerId: String(mm)
        };
        let Rm = {},
          pm = {};
        try {
          var Em, om;
          Rm = null !== (Em = null === (om = this.options.gameFactory((0, Zm.Pb)(Am))) || void 0 === om ? void 0 : om(wm, xm, am, im)) && void 0 !== Em ? Em : {}
        } catch (Vm) {
          this.IO(Vm)
        }
        try {
          var Om, Ym;
          pm = {
            ...null === (Om = (Ym = this.options).defaultPlugins) || void 0 === Om ? void 0 : Om.call(Ym, wm, xm, am, im),
            ...Rm.plugins
          }
        } catch (Vm) {
          this.IO(Vm)
        }
        const qm = [Rm, ...Object.values(pm)];
        this.owners = qm, this.tickers = qm.filter((mm => void 0 !== mm.DE)), this.renderers = qm.filter((mm => void 0 !== mm.onAfterRender)), this.receivers = qm.filter((mm => void 0 !== mm.onReceivedMessageFromServer)), this.writeAltVeto(qm), this.writeHooks(qm), this.writePublicLobby(wm), this.writeLocalDbId(null !== (Tm = null === (fm = this.session) || void 0 === fm ? void 0 : fm.playerDbId) && void 0 !== Tm ? Tm : null), this.boundId = mm, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(qm, (mm => {
          var Tm;
          null === (Tm = mm.onCreate) || void 0 === Tm || Tm.call(mm, this.clientApi)
        }));
        const jm = this.generation;
        setTimeout((() => {
          jm === this.generation && !0 === this.tables.getClientOption("creative") && Oh(this.tables)
        }), 0)
      }
      chunkSlot(mm, Tm, fm, hm, Am, am) {
        this.chunks.apply(mm, Tm, fm, hm, Am, am)
      }
      entityAdded(mm) {
        var Tm;
        this.entityInfo.stale(mm), null === (Tm = this.options.replayEntities) || void 0 === Tm || Tm.entityAdded(mm)
      }
      entityInfoChanged(mm) {
        var Tm;
        this.entityInfo.stale(mm), null === (Tm = this.options.replayEntities) || void 0 === Tm || Tm.entityInfoChanged(mm)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const mm = performance.now();
          this.round(this.tickers, sh), (0, xh.d)(performance.now() - mm)
        }
      }
      afterWalk(mm) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const Tm = this.options.replayEntities;
        Tm && this.guard((() => {
          this.entityInfoWatch.want(vf, Tm.wantsWatch), Tm.flush(this.entityInfoWatch.on)
        }));
        const fm = (0, xh.m)(mm, Om.x.frameMs(this.api.apiView, 0));
        if (null !== fm) {
          const mm = this.renderFrame;
          this.guard((() => {
            (0, Ff.b)().turnDamageIndicators(mm.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(fm)
          })), this.round(this.renderers, (Tm => {
            Tm.onAfterRender(fm, mm)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== fm)
        } catch (Am) {
          this.IO(Am)
        }
        this.showZoom(), this.items.flush(this.IO), this.writePromptWatch(), this.writeCustomButtons();
        const hm = this.ticks;
        this.ticks = 0, (0, xh.j)(hm, mm, fm, this.IO)
      }
      entityRemoved(mm) {
        this.live.despawned(mm), this.entityInfo.removed(mm)
      }
      ackEventOverflow() {
        const mm = this.api.apiView,
          Tm = Om.x.eventOverflowGen(mm, 0),
          fm = Tm - this.overflowGen >>> 0;
        if (0 === fm && !this.resyncOwed) return;
        this.overflowGen = Tm;
        const hm = Om.x.eventOverflowMask(mm, 0),
          Am = this.cmd;
        0 === hm || null === Am || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, Om.De)(Am, 0, hm);
        const am = this.options.onEventOverflow;
        0 !== fm && am && this.guard((() => {
          am(hm, fm)
        }))
      }
      gameCall(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        if (mm === Om.rc.Director) try {
          return this.scriptedCamera.call(Tm, fm, hm, Am, am, xm)
        } catch (im) {
          return this.IO(im), Om.wb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return mm === Om.rc.AltVeto ? Om.n.Allow : 0;
        try {
          return this.callGames(mm, Tm, fm, hm, Am, am, xm, wm)
        } catch (im) {
          throw (0, om.k)(im) && (this.fault = im), im
        }
      }
      takeFault() {
        const mm = this.fault;
        return this.fault = void 0, mm
      }
      callGames(mm, Tm, fm, hm, Am, am, xm, wm) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Dm
        } = this.options, im = String(this.boundId);
        switch (mm) {
          case Om.rc.AltVeto:
          case Om.rc.AltAction: {
            const wm = 0 !== xm,
              [Rm, pm, Em] = wm ? [Tm, fm, hm] : [void 0, void 0, void 0],
              om = wm ? Dm.nameOfId(Am) : "Air",
              Ym = rh(am);
            if (mm === Om.rc.AltAction) return this.first((mm => {
              var Tm;
              return null === (Tm = mm.onPlayerAltAction) || void 0 === Tm ? void 0 : Tm.call(mm, im, Rm, pm, Em, om, Ym)
            })), 0;
            const qm = this.first((mm => {
              var Tm;
              return null === (Tm = mm.onPlayerAttemptAltAction) || void 0 === Tm ? void 0 : Tm.call(mm, im, Rm, pm, Em, om, Ym)
            }));
            return "preventAction" === qm ? Om.n.Prevent : "preventPlacement" === qm ? Om.n.PreventPlacement : Om.n.Allow
          }
          case Om.rc.Click: {
            const mm = wm,
              Rm = 0 !== (mm & Om.fb.Alt),
              pm = 0 !== (mm & Om.fb.HasPos),
              Em = pm ? Dm.nameOfId(Am) : "Air",
              [om, Ym, qm] = pm ? [Tm, fm, hm] : [null, null, null],
              jm = rh(am),
              Vm = 0 !== (mm & Om.fb.Up),
              Im = rh(xm);
            if (0 === (mm & Om.fb.AttackOnly) && this.first((mm => {
                var Tm, fm;
                return Vm ? null === (Tm = mm.onPlayerClickUp) || void 0 === Tm ? void 0 : Tm.call(mm, im, Rm, om, Ym, qm, Em, jm) : null === (fm = mm.onPlayerClick) || void 0 === fm ? void 0 : fm.call(mm, im, Rm, om, Ym, qm, Em, jm)
              })), !Vm && !Rm && null !== Im) {
              const mm = this.clientApi.getPositionView(Im),
                Tm = mm ? [mm[0], mm[1], mm[2]] : [0, 0, 0];
              this.first((mm => {
                var fm;
                return null === (fm = mm.onPlayerAttackEntity) || void 0 === fm ? void 0 : fm.call(mm, im, Im, Tm)
              }))
            }
            return 0
          }
          case Om.rc.ChangeBlock: {
            const mm = Dm.nameOfId(Am),
              xm = Dm.nameOfId(am);
            return this.first((Am => {
              var am;
              return null === (am = Am.onPlayerChangeBlock) || void 0 === am ? void 0 : am.call(Am, im, Tm, fm, hm, mm, xm)
            })), 0
          }
          case Om.rc.DropItem: {
            const mm = Dm.nameOfId(Tm);
            return this.first((Tm => {
              var Am;
              return null === (Am = Tm.onPlayerDropItem) || void 0 === Am ? void 0 : Am.call(Tm, im, mm, fm, hm)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${mm}`)), 0
        }
      }
      changeBlockFail(mm, Tm, fm, hm, Am, am, xm) {
        const wm = Am === Om.dd ? null : Gh.decode(this.api.eventBytes(am, Math.min(Am, xm)));
        this.failures.push({
          ua: [mm, Tm, fm],
          Ba: hm,
          La: wm
        })
      }
      changeBlockFailEnd() {
        const mm = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (Tm => {
          var fm;
          null === (fm = Tm.onChangeBlockFail) || void 0 === fm || fm.call(Tm, mm)
        })), this.gp("EditBoard", {
          pos: null
        }), this.gp("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(mm, Tm, fm, hm, Am, am) {
        mm === Om.Kc.ChestOpened ? this.items.chestOpened(fm, hm, Am) : mm !== Om.Kc.Synced && mm !== Om.Kc.ChestClosed && mm !== Om.Kc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(mm, Tm, fm, hm) {
            switch (mm) {
              case Om.Kc.Synced:
                xm.j.gp("syncedInvenFromServer");
                break;
              case Om.Kc.ChestOpened:
              case Om.Kc.ChestClosed:
                xm.j.gp("chestToggleFromServer", mm === Om.Kc.ChestOpened, !0);
                break;
              case Om.Kc.ChestRefreshed:
                xm.j.gp("chestRefreshedFromServer");
                break;
              case Om.Kc.EnchantingTable:
                xm.j.gp("enchantingTable", {
                  jR: hm,
                  position: fm
                });
                break;
              case Om.Kc.HotbarRequest:
                xm.j.gp("setSelectedInventorySlotI", Tm, !0);
                break;
              case Om.Kc.Scrolled:
                xm.j.gp("ScrollInventorySlot", Tm);
                break;
              case Om.Kc.NumberKey:
                xm.j.gp("numkeyPressed", Tm + 1);
                break;
              case Om.Kc.DropRequested:
                xm.j.gp("DropInvenItem", 0 !== Tm);
                break;
              default:
                throw new om.e(`InventoryEvent of no kind: what ${mm}`)
            }
          }(mm, Tm, [fm, hm, Am], am)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(mm, Tm, fm, hm) {
        this.gp("shotPlayer", {
          playerId: String(mm),
          damage: Tm,
          wasCrit: 0 !== hm,
          distance: fm
        })
      }
      localHurt(mm, Tm) {
        this.gp("closeShopOnDamaged", null), this.guard((() => {
          xm.j.gp("damagedByOtherPlayer", {
            Fm: null,
            direction: Number.isNaN(Tm) ? null : Tm,
            sa: mm
          })
        }))
      }
      attackHit(mm, Tm, fm, hm, Am) {
        this.guard((() => {
          xm.j.gp("yourAttackHit", {
            Zh: hm,
            screenPos: this.renderFrame.projectDirectionToScreenPos([mm, Tm, fm]),
            hitSelf: Am
          })
        }))
      }
      physicsType(mm) {
        this.gp("PlayerPhysicsTypeUpdate", mm)
      }
      vehicleEffect(mm, Tm, fm, hm, Am) {
        this.guard((() => {
          mm === Em.Hd.UPDATE ? (0, em.f)(Tm, {
            icon: fm,
            level: hm,
            displayName: null,
            durationMs: Am
          }) : Sm.b.remove(Tm)
        }))
      }
      zoomChanged(mm) {
        this.zoom = mm, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.gp("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      showZoom() {
        const mm = this.scriptedCamera.holdsView();
        !this.zoomUnshown || mm && this.zoomHeld || (this.zoomUnshown = !1, this.gp("cameraZoomSet", this.zoom)), this.zoomHeld = mm
      }
      gunHit(mm) {
        this.guard((() => {
          const {
            Fm: Tm,
            mT: fm
          } = (0, Kh.d)(Qh.x, mm);
          xm.j.gp("damagedByOtherPlayer", {
            Fm: Tm,
            direction: fm
          })
        }))
      }
      uiEvent(mm, Tm, fm, hm, Am, am, xm, wm) {
        this.guard((() => {
          mh(mm, Tm, [fm, hm, Am], am, this.items, this.options.tables, (() => Gh.decode(this.api.eventBytes(xm, wm))))
        }))
      }
      writeAltVeto(mm) {
        const Tm = this.cmd;
        if (!Tm) return;
        let fm;
        try {
          fm = function(mm, Tm) {
            const fm = new Set;
            let hm = !1;
            for (const Am of mm)
              if (Am.onPlayerAttemptAltAction) {
                if (hm = !0, !Am.altVetoBlocks) return {
                  mode: Om.me.All,
                  roots: []
                };
                for (const mm of Am.altVetoBlocks) fm.add(Tm.getMetaInfo(mm).rootId)
              } return hm ? fm.size > Om.Zc ? {
              mode: Om.me.All,
              roots: []
            } : {
              mode: Om.me.Filter,
              roots: [...fm]
            } : {
              mode: Om.me.Off,
              roots: []
            }
          }(mm, this.options.tables)
        } catch (Am) {
          this.onError(Am), fm = {
            mode: Om.me.All,
            roots: []
          }
        }
        if (fm.mode === Om.me.Off && !this.vetoSet) return;
        const hm = new Uint8Array(new Uint32Array(fm.roots).buffer);
        (0, Om.Tf)(Tm, 0, fm.mode, fm.roots.length, hm) ? this.vetoSet = fm.mode !== Om.me.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(mm) {
        const Tm = this.cmd;
        if (!Tm) return;
        const fm = function(mm) {
          let Tm = 0;
          for (const fm of mm) fm.onPlayerAltAction && (Tm |= 1 << Om.rc.AltAction), (fm.onPlayerClick || fm.onPlayerClickUp || fm.onPlayerAttackEntity) && (Tm |= 1 << Om.rc.Click), fm.onPlayerChangeBlock && (Tm |= 1 << Om.rc.ChangeBlock), fm.onPlayerDropItem && (Tm |= 1 << Om.rc.DropItem);
          return Tm
        }(mm);
        (0 !== fm || this.hooksSet) && ((0, Om.bg)(Tm, 0, fm) ? this.hooksSet = 0 !== fm : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const mm = this.cmd;
        mm && !this.stopped() && this.customButtons.write(mm)
      }
      writePromptWatch() {
        const mm = this.cmd,
          Tm = this.promptWatch;
        Tm !== this.promptWatchSent && mm && !this.stopped() && (0, Om.Cg)(mm, 0, yh[Tm]) && (this.promptWatchSent = Tm)
      }
      writePublicLobby(mm) {
        const Tm = this.cmd;
        Tm && mm !== this.writtenPublicLobby && ((0, Om.mg)(Tm, 0, mm ? 1 : 0) ? this.writtenPublicLobby = mm : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(mm) {
        const Tm = this.cmd;
        Tm && ((0, Om.eg)(Tm, 0, null === mm ? 0 : 1, null === mm ? Ph : Xh.encode(mm)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(mm) {
        const Tm = this.generation;
        for (const hm of this.owners) {
          if (Tm !== this.generation) break;
          try {
            const Tm = mm(hm);
            if (void 0 !== Tm) return Tm
          } catch (fm) {
            this.IO(fm)
          }
        }
      }
      gp(mm, Tm) {
        this.guard((() => {
          xm.j.gp(mm, Tm)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (mm) {
          this.IO(mm)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (mm) {
          this.IO(mm)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1;
        const mm = this.owners;
        let Tm;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (hm) {
          Tm = hm
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (hm) {
          Tm ??= hm
        }
        this.round(mm, lh, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (hm) {
          Tm ??= hm
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (hm) {
          Tm ??= hm
        }
        const fm = this.options.onSessionEnd;
        if (fm) try {
          fm()
        } catch (hm) {
          this.onError(hm)
        }
        void 0 !== Tm && this.IO(Tm)
      }
      round(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this.generation;
        for (const am of mm) {
          if (hm !== this.generation) break;
          try {
            Tm(am)
          } catch (Am) {
            fm ? this.onError(Am) : this.IO(Am)
          }
        }
      }
      guard(mm) {
        try {
          mm()
        } catch (Tm) {
          this.IO(Tm)
        }
      }
    }

    function rh(mm) {
      return mm === Om.gd ? null : String(mm)
    }

    function sh(mm) {
      mm.DE(Em.zd)
    }

    function lh(mm) {
      var Tm;
      null === (Tm = mm.onClose) || void 0 === Tm || Tm.call(mm)
    }

    function Mh(mm, Tm) {
      mm.watch((() => {
        const fm = function(mm) {
          const Tm = [],
            fm = Math.min(wh, mm.length);
          for (let Am = 0; Am < fm; Am++) {
            var hm;
            const fm = null === (hm = mm.slot(Am)) || void 0 === hm ? void 0 : hm.typeObj,
              am = fm ? (0, ah.gunTypeOf)(fm.id) : void 0;
            void 0 !== am && Tm.push(KT[am])
          }
          return Tm
        }(mm);
        fm.length > 0 && (Tm.preload(fm), Tm.preload([QT]))
      }))
    }
    var uh = fm(36516),
      Bh = fm(4800),
      Lh = fm(36846),
      vh = fm(36871);

    function th(mm) {
      const Tm = (0, uh.countDecodesAs)(new Bh.Howl({
          ...(0, Lh.h)(mm),
          pool: 15,
          preload: !1
        }), "sheet"),
        fm = Tm.load.bind(Tm);
      return Tm.load = () => (Tm._preload = !0, (0, vh.e)(mm), fm()), Tm
    }

    function Uh(mm, Tm, fm) {
      const hm = mm.listener;
      if (hm.positionX) dh(hm.positionX, Tm, fm, 0), dh(hm.positionY, Tm, fm, 1), dh(hm.positionZ, Tm, fm, 2), dh(hm.forwardX, Tm, fm, 3), dh(hm.forwardY, Tm, fm, 4), dh(hm.forwardZ, Tm, fm, 5), dh(hm.upX, Tm, fm, 6), dh(hm.upY, Tm, fm, 7), dh(hm.upZ, Tm, fm, 8);
      else {
        let mm = !1;
        for (let hm = 0; hm < 9; hm++) mm ||= Tm[hm] !== fm[hm];
        mm && (hm.setPosition(Tm[0], Tm[1], Tm[2]), hm.setOrientation(Tm[3], Tm[4], Tm[5], Tm[6], Tm[7], Tm[8]), fm.set(Tm))
      }
    }

    function dh(mm, Tm, fm, hm) {
      Tm[hm] !== fm[hm] && (mm.value = Tm[hm], fm[hm] = Tm[hm])
    }
    class gh {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(mm) {
        this.pose.set(mm);
        const Tm = Bh.Howler.ctx;
        return !!Tm && (Tm !== this.watchedCtx && (this.watchedCtx = Tm, this.written.fill(Number.NaN), Tm.addEventListener("statechange", (() => {
          "running" === Tm.state && Uh(Tm, this.pose, this.written)
        }))), "running" === Tm.state && Uh(Tm, mm, this.written), !0)
      }
    }
    var Wh = fm(36653),
      Fh = fm(39340);
    let mA = null,
      TA = null;

    function fA() {
      return null === mA && (mA = document.createElement("div"), mA.className = "WasmCameraLayer", mA.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(mA)), mA
    }

    function hA() {
      return TA ??= new Fh.c(new Wh.b(fA)), TA
    }

    function AA() {
      var mm;
      null === (mm = TA) || void 0 === mm || mm.clear(), aA(null)
    }

    function aA(mm) {
      hm.c.get("scriptedCameraFacing") !== mm && hm.c.set({
        scriptedCameraFacing: mm
      })
    }
    var xA = fm(9240),
      wA = fm(9184),
      DA = fm(39366),
      iA = fm(41102),
      RA = fm(3301);
    const pA = Object.entries(Om.oc).reduce(((mm, Tm) => {
      let [fm, hm] = Tm;
      return mm[hm] = fm, mm
    }), []);

    function EA(mm, Tm) {
      var fm;
      return 0 !== ((null !== (fm = mm.itemFlags[Tm]) && void 0 !== fm ? fm : 0) & Om.Nc.Stackable)
    }
    const oA = /^(0|[1-9][0-9]*)$/,
      OA = {
        displayName: (mm, Tm) => (0, ah.displayNameOf)(Tm),
        description: (mm, Tm) => (0, ah.descriptionOf)(Tm),
        type: (mm, Tm) => (0, ah.itemTypeOf)(Tm),
        clipSize: (mm, Tm) => (0, ah.clipSizeOf)(Tm),
        armourReduction: (mm, Tm) => (0, ah.armourReductionOf)(Tm),
        scopeType: (mm, Tm) => (0, ah.scopeTypeOf)(Tm),
        stackable: EA,
        harvestType: (mm, Tm) => pA[mm.blockHarvestTypes[Tm]],
        harvestLevel: (mm, Tm) => {
          const fm = mm.blockHarvestLevels[Tm];
          return fm === Om.Sc ? void 0 : fm
        },
        harvests: (mm, Tm) => {
          var fm;
          const hm = null !== (fm = mm.itemHarvests[Tm]) && void 0 !== fm ? fm : 0;
          return 0 !== hm ? pA[hm] : void 0 === (0, ah.harvestsNullLevelOf)(Tm) ? void 0 : null
        },
        level: (mm, Tm) => {
          var fm, hm;
          const Am = null !== (fm = mm.itemLevels[Tm]) && void 0 !== fm ? fm : Om.Sc;
          return Am !== Om.Sc ? Am : null !== (hm = (0, ah.harvestsNullLevelOf)(Tm)) && void 0 !== hm ? hm : void 0
        }
      };

    function YA(mm, Tm, fm) {
      return jA(new Uint8Array(Math.floor(mm.length / Tm)), mm, Tm, fm)
    }

    function qA(mm, Tm, fm) {
      return jA(new Uint16Array(Math.floor(mm.length / Tm)), mm, Tm, fm)
    }

    function jA(mm, Tm, fm, hm) {
      const Am = new DataView(Tm.buffer, Tm.byteOffset, Tm.byteLength);
      for (let am = 0; am < mm.length; am++) mm[am] = hm(Am, am * fm);
      return mm
    }
    class VA {
      constructor(mm, Tm) {
        this.options = Tm, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = mm => {
          const Tm = this.idOf(mm);
          if (void 0 === Tm) throw new Error(`No item is named ${mm}, an item's root`);
          return Tm
        };
        const fm = Tm => {
            const fm = Tm();
            return new Uint8Array(mm.memory().buffer, mm.scratch(), fm).slice()
          },
          hm = (new TextDecoder).decode(fm((() => mm.queries.itemNames()))).split("\n"),
          Am = fm((() => mm.queries.blockProps())),
          am = fm((() => mm.queries.itemProps()));
        this.props = {
          blockFlags: YA(Am, Om.J.BYTES, Om.J.flags),
          blockHarvestTypes: YA(Am, Om.J.BYTES, Om.J.harvestType),
          blockHarvestLevels: YA(Am, Om.J.BYTES, Om.J.harvestLevel),
          blockAttachedTops: qA(Am, Om.J.BYTES, Om.J.attachedTop),
          itemFlags: YA(am, Om.Rc.BYTES, Om.Rc.flags),
          itemHarvests: YA(am, Om.Rc.BYTES, Om.Rc.harvests),
          itemLevels: YA(am, Om.Rc.BYTES, Om.Rc.level)
        }, (0, RA.k)(Object.freeze(hm)), (0, iA.f)()
      }
      idOf(mm) {
        if ("number" === typeof mm) return void 0 === (0, RA.e)(mm) ? void 0 : mm;
        const Tm = (0, RA.c)(mm);
        return void 0 === Tm && oA.test(mm) ? void 0 === (0, RA.e)(+mm) ? void 0 : +mm : Tm
      }
      getMetaInfo(mm) {
        if (!mm || mm === xA.c) return xA.e;
        const Tm = this.idOf(mm);
        if (void 0 === Tm) throw new Error(`Item ${mm} not found in registry`);
        return this.metaOf(Tm)
      }
      blockRootId(mm) {
        return 0 !== mm && void 0 !== (0, RA.e)(mm) ? this.metaOf(mm).rootId : mm
      }
      metaOf(mm) {
        return this.metas[mm] ??= (0, wA.k)((0, RA.e)(mm), mm, this.rootIdOf, (0, ah.rootMetaDescOf)(mm))
      }
      getItemId(mm) {
        if (!mm || mm === xA.c) return 0;
        const Tm = this.idOf(mm);
        if (void 0 === Tm) throw new Error(`Invalid block name. You sent ${mm}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return Tm
      }
      getItemName(mm) {
        if (!mm || mm === xA.c) return xA.c;
        const Tm = this.idOf(mm);
        if (void 0 === Tm) throw new Error(`Item ${mm} not found in registry`);
        return (0, RA.e)(Tm)
      }
      blockNameToBlockId(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (mm === xA.c) return 0;
        let fm = this.idOf(mm);
        if (void 0 === fm || !this.isBlockId(fm)) {
          const Tm = mm.indexOf("|"),
            hm = Tm > 0 ? (0, RA.c)(mm.slice(0, Tm)) : void 0;
          fm = void 0 !== hm && this.isBlockId(hm) && (0, ah.rootMetaDescOf)(hm) === mm ? hm : void 0
        }
        if (void 0 !== fm) return fm;
        if (!Tm) throw new Error(`Invalid block name. You sent ${mm}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(mm) {
        return mm > 0 && mm < this.props.blockFlags.length
      }
      nameOfId(mm) {
        return 0 !== mm && (0, RA.e)(mm) || xA.c
      }
      itemType(mm) {
        const Tm = mm ? this.idOf(mm) : void 0;
        if (!Tm) return null;
        let fm = this.types.get(Tm);
        return void 0 === fm && (fm = Object.freeze({
          id: Tm,
          name: (0, RA.e)(Tm),
          meta: this.getMetaInfo(Tm),
          stackable: EA(this.props, Tm),
          type: (0, ah.itemTypeNameOf)(Tm),
          clipSize: (0, ah.clipSizeOf)(Tm),
          scopeType: (0, ah.scopeTypeOf)(Tm),
          showsAimingUi: (0, ah.showsAimingUi)(Tm)
        }), this.types.set(Tm, fm)), fm
      }
      getItemStat(mm, Tm) {
        if (DA.c.has(Tm)) {
          const fm = "minChargeStateToUse" === Tm ? this.getMetaInfo(mm).rootName : this.getItemName(mm),
            hm = this.options.get((0, DA.f)(fm, Tm));
          if (null !== hm && void 0 !== hm) return hm
        }
        return this.defaultStat(mm, Tm, this.statOf(Tm))
      }
      getDisplayName(mm) {
        return this.getItemStat(mm, "displayName")
      }
      getDefaultItemStat(mm, Tm) {
        return this.defaultStat(mm, Tm, this.statOf(Tm))
      }
      statOf(mm) {
        const Tm = OA[mm];
        return void 0 === Tm && function(mm, Tm) {
          throw new Error(`ClientApi.${mm} is not available yet in the wasm client (${Tm})`)
        }(`getItemStat("${mm}")`, `a table of the stat: the wasm client answers ${Object.keys(OA).join(", ")}`), Tm
      }
      defaultStat(mm, Tm, fm) {
        const hm = this.idOf(mm),
          Am = void 0 === hm ? void 0 : fm(this.props, hm);
        return null !== Am && void 0 !== Am || "displayName" !== Tm ? Am : this.getItemName(mm)
      }
      getClientOption(mm) {
        return this.options.get(mm)
      }
      getGunStats(mm) {
        return this.getClientOption(`${mm}GunStats`)
      }
      watchClientOption(mm, Tm) {
        return this.options.subscribe(mm, Tm)
      }
      isSolidBlockId(mm) {
        var Tm;
        return 0 !== ((null !== (Tm = this.props.blockFlags[mm]) && void 0 !== Tm ? Tm : 0) & Om.F.Solid)
      }
      isStackableId(mm) {
        return EA(this.props, mm)
      }
      isFluidBlockId(mm) {
        var Tm;
        return 0 !== ((null !== (Tm = this.props.blockFlags[mm]) && void 0 !== Tm ? Tm : 0) & Om.F.Fluid)
      }
      canPlaceOverBlockId(mm) {
        var Tm;
        return 0 !== ((null !== (Tm = this.props.blockFlags[mm]) && void 0 !== Tm ? Tm : 0) & Om.F.PlaceOver)
      }
      attachedTopOf(mm) {
        var Tm;
        return null !== (Tm = this.props.blockAttachedTops[mm]) && void 0 !== Tm ? Tm : 0
      }
      isDroplessBlockId(mm) {
        return (0, ah.dropsNothing)(mm)
      }
    }

    function IA(mm, Tm) {
      const fm = new Map;
      return (hm, Am) => {
        const am = Tm.idOf(hm),
          xm = void 0 === am ? null : (hm => {
            let Am = fm.get(hm);
            if (void 0 === Am) {
              const am = mm.queries.salvageRecipe(hm),
                xm = new DataView(mm.memory().buffer, mm.scratch(), am),
                wm = [];
              for (let mm = 0; mm + Om.ae.BYTES <= am; mm += Om.ae.BYTES) wm.push(Object.freeze({
                item: Tm.nameOfId(Om.ae.item(xm, mm)),
                amt: Om.ae.amount(xm, mm)
              }));
              Am = 0 === wm.length ? null : Object.freeze(wm), fm.set(hm, Am)
            }
            return Am
          })(am);
        if (null === xm || void 0 === Am) return xm;
        const wm = Am <= 0 ? 1 : Am;
        return xm.map((mm => {
          let {
            item: Tm,
            amt: fm
          } = mm;
          return {
            item: Tm,
            amt: fm * wm
          }
        }))
      }
    }
    var KA = fm(40841),
      QA = fm(37056),
      nA = fm(37043),
      JA = fm(37048),
      cA = fm(36582),
      zA = fm(40761),
      ZA = fm(42628);
    const kA = -1,
      bA = new Uint8Array(0),
      SA = new TextEncoder;

    function eA(mm) {
      if (null === mm) return null;
      const Tm = SA.encode(mm);
      return Tm.byteLength < Em.Cc ? Tm : Tm.subarray(0, Em.Cc - 1)
    }
    class NA {
      constructor(mm) {
        this.deps = mm, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = kA, this.keyframesSettled = !1, this.reloadFrom = kA
      }
      reloadKeyframes() {
        var mm, Tm;
        this.keyframesVersion = kA, this.reloadFrom = null !== (mm = null === (Tm = this.view()) || void 0 === Tm ? void 0 : Tm.version) && void 0 !== mm ? mm : kA
      }
      setPlayback(mm) {
        const Tm = 1 === this.deps.core.bAm(mm);
        return Tm && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = kA, this.reloadFrom = kA), Tm
      }
      async open(mm, Tm) {
        const fm = await this.deps.replay.open(mm, Tm);
        return "opening" === fm && (this.reloadKeyframes(), this.deps.recorder.prefetch()), fm
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(mm)), Tm)
      }
      setSpeed(mm) {
        this.deps.replay.setSpeed(mm)
      }
      setCameraMode(mm) {
        this.deps.replay.setCameraMode(ZA.b.indexOf(mm))
      }
      view() {
        var mm;
        const Tm = Om.x.replayViewPtr(this.deps.apiView(), 0);
        if (0 === Tm) return this.lastView = null, null;
        const fm = new DataView(this.deps.buffer(), Tm, Om.Yd.BYTES),
          hm = Om.Yd.version(fm, 0),
          Am = this.lastView;
        if (null !== Am && Am.version === hm) return Am;
        const am = Om.Yd.markIn(fm, 0),
          xm = {
            version: hm,
            state: Om.Yd.state(fm, 0),
            cameraMode: null !== (mm = ZA.b[Om.Yd.cameraMode(fm, 0)]) && void 0 !== mm ? mm : "recording",
            DE: Om.Yd.DE(fm, 0),
            totalTicks: Om.Yd.totalTicks(fm, 0),
            speed: Om.Yd.speed(fm, 0),
            mark: am === Om.Wd ? null : {
              inTick: am,
              outTick: Om.Yd.markOut(fm, 0)
            },
            editVersion: Om.Yd.editVersion(fm, 0)
          };
        return this.lastView = xm, xm
      }
      keyframes() {
        const mm = this.view();
        if (null === mm) return [];
        mm.version !== this.reloadFrom && (this.reloadFrom = kA);
        const Tm = this.reloadFrom === kA && mm.state !== Em.ld.Cropping && mm.state !== Em.ld.None,
          fm = Tm ? mm.editVersion : mm.version;
        if (fm === this.keyframesVersion && Tm === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: hm
        } = this.deps, Am = hm.SAm(), am = hm.uq(), xm = [];
        if (0 !== am && Am > 0) {
          const mm = new DataView(this.deps.buffer(), am, Am * Em.pc);
          for (let Tm = 0; Tm < Am; Tm++) {
            const fm = Tm * Em.pc,
              hm = Tm => mm.getFloat64(fm + Tm, !0);
            xm.push({
              DE: mm.getUint32(fm + Em.zc, !0),
              position: [hm(Em.vc), hm(Em.vc + 8), hm(Em.vc + 16)],
              direction: [hm(Em.qc), hm(Em.qc + 8), hm(Em.qc + 16)],
              easing: [hm(Em.tc), hm(Em.tc + 8), hm(Em.tc + 16), hm(Em.tc + 24)]
            })
          }
        }
        return this.keyframesVersion = fm, this.keyframesSettled = Tm, this.lastKeyframes = xm, xm
      }
      addKeyframe() {
        const mm = this.deps.apiView(),
          Tm = [Om.x.eye(mm, 0, 0), Om.x.eye(mm, 0, 1), Om.x.eye(mm, 0, 2)];
        return this.deps.replay.addKeyframe(Tm, function(mm, Tm) {
          const fm = Math.cos(Tm);
          return [fm * Math.sin(mm), -Math.sin(Tm), fm * Math.cos(mm)]
        }(Om.x.heading(mm, 0), Om.x.pitch(mm, 0)))
      }
      setKeyframe(mm) {
        return this.deps.replay.setKeyframe(mm.DE, Float64Array.from([...mm.position, ...mm.direction, ...mm.easing]))
      }
      moveKeyframe(mm, Tm) {
        return this.deps.replay.moveKeyframe(mm, Tm)
      }
      deleteKeyframes(mm, Tm) {
        return this.deps.replay.deleteKeyframes(mm, Tm)
      }
      setMark(mm) {
        var Tm, fm;
        return this.deps.replay.setMark(null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.inTick) && void 0 !== Tm ? Tm : -1, null !== (fm = null === mm || void 0 === mm ? void 0 : mm.outTick) && void 0 !== fm ? fm : -1)
      }
      crop(mm, Tm) {
        const fm = this.deps.replay.crop(mm, Tm);
        return fm && this.reloadKeyframes(), fm
      }
      save(mm) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(mm)
      }
      recorderControl(mm) {
        this.deps.recorder.control(mm)
      }
      recorderPrefs(mm, Tm) {
        this.deps.recorder.prefs(mm, Tm)
      }
      recorderOption(mm, Tm) {
        const fm = this.deps.cmd();
        return null !== fm && (0, Om.Gf)(fm, 0, mm, null === Tm ? bA : SA.encode(Tm))
      }
      recordFlyingText(mm, Tm, fm, hm) {
        const Am = this.deps.cmd(),
          am = Math.max(0, Math.min(4294967295, Math.round(hm)));
        return null !== Am && (0, Om.Af)(Am, 0, Tm, fm, am, SA.encode(mm))
      }
      recordPlayerKilled(mm, Tm, fm, hm) {
        const Am = this.deps.cmd();
        return null !== Am && (0, Om.Jf)(Am, 0, mm, Tm, Math.max(0, fm), SA.encode(hm))
      }
      recordKillfeed(mm, Tm, fm) {
        var hm, Am;
        const am = this.deps.cmd(),
          xm = function(mm) {
            const Tm = mm.reduce(((mm, Tm) => {
                var fm;
                return mm + df.ub + (null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.byteLength) && void 0 !== fm ? fm : 0)
              }), 0),
              fm = new Uint8Array(Tm),
              hm = new DataView(fm.buffer);
            let Am = 0;
            for (const xm of mm) {
              var am;
              hm.setUint16(Am, null !== (am = null === xm || void 0 === xm ? void 0 : xm.byteLength) && void 0 !== am ? am : Em.Cc, !0), Am += df.ub, null !== xm && (fm.set(xm, Am), Am += xm.byteLength)
            }
            return fm
          }([eA(mm.name), eA(mm.colour), eA(Tm.name), eA(Tm.colour), eA(fm)]);
        return null !== am && (0, Om.Cf)(am, 0, null !== (hm = mm.id) && void 0 !== hm ? hm : Om.id, null !== (Am = Tm.id) && void 0 !== Am ? Am : Om.id, xm)
      }
      recorderSession(mm, Tm) {
        this.deps.recorder.session({
          session: Tm,
          lobbyType: mm.lobbyType,
          game: mm.gameNameWithVariation,
          lobby: mm.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.eAm()
      }
      filePartDone(mm, Tm) {
        this.deps.recorder.filePartDone(mm, Tm)
      }
      fileDone(mm) {
        this.deps.recorder.fileDone(mm)
      }
    }
    const GA = -2147483648;
    class XA {
      constructor(mm) {
        var Tm;
        this.deps = mm, this.state = {
          recording: !1,
          clipping: !1,
          hasClipBuffer: !1,
          seconds: 0
        }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (Tm = mm.now) && void 0 !== Tm ? Tm : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var mm, Tm, fm;
        return null === (mm = null === (Tm = (fm = this.deps).live) || void 0 === Tm ? void 0 : Tm.call(fm)) || void 0 === mm || mm
      }
      activated(mm) {
        var Tm, fm;
        this.live && (this.viewerShown(!0 === (null === (Tm = (fm = this.deps).viewerOpen) || void 0 === Tm ? void 0 : Tm.call(fm))), this.deps.client.recorderSession(mm, (0, ZA.c)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var mm, Tm;
        this.live && (this.state.recording || !0 !== (null === (mm = (Tm = this.deps).viewerOpen) || void 0 === mm ? void 0 : mm.call(Tm))) ? this.deps.client.recorderControl(Em.Tc.ToggleRecording) : this.deps.notify(JA.e.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(Em.Tc.SaveClip) : this.deps.notify(JA.e.clippingNotOn)
      }
      viewerShown(mm) {
        this.live && this.deps.client.recorderControl(mm ? Em.Tc.ViewerOpened : Em.Tc.ViewerClosed)
      }
      setPrefs(mm, Tm) {
        this.live && this.deps.client.recorderPrefs(mm, Tm)
      }
      setOption(mm, Tm) {
        this.live && this.deps.client.recorderOption(mm, Tm)
      }
      recordFlyingText(mm, Tm, fm, hm) {
        this.live && this.deps.client.recordFlyingText(mm, Tm, fm, hm)
      }
      recordPlayerKilled(mm, Tm, fm, hm) {
        this.live && this.deps.client.recordPlayerKilled(mm, Tm, fm, hm)
      }
      recordKillfeed(mm, Tm, fm) {
        this.live && this.deps.client.recordKillfeed(mm, Tm, fm)
      }
      DE() {
        let mm = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, mm = {
            ...mm,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const Tm = Math.floor((this.now() - this.recordingSince) / 1e3);
          Tm !== mm.seconds && (mm = {
            ...mm,
            seconds: Tm
          })
        }
        this.set(mm)
      }
      onEvent(mm) {
        var Tm, fm;
        const {
          notify: hm
        } = this.deps, Am = JA.e;
        switch (mm.what) {
          case Em.Pc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), hm(Am.recordingStarted);
            break;
          case Em.Pc.RecordingStopped:
            this.stopRecording(), hm(Am.recordingStopped), this.saveState(Em.fd.Recording, "saving");
            break;
          case Em.Pc.RecordingDiscarded:
            this.stopRecording(), hm(Am.recordingDiscarded);
            break;
          case Em.Pc.RecordingTurnedOff:
            this.stopRecording(), hm(Am.recordingTurnedOff);
            break;
          case Em.Pc.LimitReached:
            hm(Am.limitReached);
            break;
          case Em.Pc.ClipSaved:
            this.saveState(Em.fd.Clip, "saving");
            break;
          case Em.Pc.ClipEmpty:
            hm(Am.clipEmpty);
            break;
          case Em.Pc.ClippingNotOn:
            hm(Am.clippingNotOn);
            break;
          case Em.Pc.Disallowed:
            hm(Am.disallowed);
            break;
          case Em.Pc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case Em.Pc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case Em.Pc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case Em.Pc.SaveBusy:
            null === (Tm = (fm = this.deps).onSaveState) || void 0 === Tm || Tm.call(fm, mm.kind, "busy"), hm(Am.saveBusy);
            break;
          case Em.Pc.CloseViewerFirst:
            hm(Am.closeViewerFirst)
        }
      }
      fileReady(mm, Tm) {
        this.deps.download(Tm), this.saveState(mm, "done"), this.deps.notify(mm === Em.fd.Clip ? JA.e.clipSaved : JA.e.recordingSaved)
      }
      failed(mm) {
        this.saveState(mm, "failed"), this.deps.notify(mm === Em.fd.Clip ? JA.e.clipFailed : JA.e.recordingFailed)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(mm, Tm) {
        var fm, hm;
        null === (fm = (hm = this.deps).onSaveState) || void 0 === fm || fm.call(hm, mm, Tm)
      }
      set(mm) {
        mm !== this.state && (this.state = mm, this.deps.onState(mm))
      }
    }
    const PA = new TextDecoder;

    function HA(mm, Tm, fm, hm) {
      const Am = [];
      for (let am = 0; am < hm; am++) {
        if (Tm + df.ub > fm) return null;
        const hm = mm.getUint16(Tm, !0);
        if (Tm += df.ub, hm !== Em.Cc) {
          if (Tm + hm > fm) return null;
          Am.push(PA.decode(new Uint8Array(mm.buffer, mm.byteOffset + Tm, hm))), Tm += hm
        } else Am.push(null)
      }
      return Tm === fm ? Am : null
    }

    function yA(mm, Tm) {
      let fm = new DataView(new ArrayBuffer(0)),
        hm = !0;
      const Am = {
        replayFailed: (Tm, fm, hm) => {
          mm.replayFailed({
            reason: Tm,
            code: fm,
            version: hm
          })
        },
        replayOption: (Tm, Am, am, xm) => {
          const wm = function(mm, Tm, fm, hm) {
            switch (Tm) {
              case Em.gd.Cleared:
                return 0 === hm ? null : void 0;
              case Em.gd.Text:
                return PA.decode(new Uint8Array(mm.buffer, mm.byteOffset + fm, hm));
              case Em.gd.Int:
                return hm === Int32Array.BYTES_PER_ELEMENT ? mm.getInt32(fm, !0) : void 0;
              case Em.gd.Double:
                return hm === Float64Array.BYTES_PER_ELEMENT ? mm.getFloat64(fm, !0) : void 0;
              default:
                return
            }
          }(fm, Am, am, xm);
          void 0 !== wm ? mm.replayOption({
            key: Tm,
            value: wm
          }) : hm = !1
        },
        replayUiEvent: (Tm, Am, am, xm, wm, Dm) => {
          const im = function(mm, Tm, fm, hm, Am, am, xm) {
            const wm = am + xm;
            switch (Tm) {
              case Em.hd.FlyingText: {
                const xm = HA(mm, am, wm, 1);
                return null !== xm && null !== xm[0] ? {
                  what: Tm,
                  Xa: fm,
                  Ga: hm,
                  angle: Am,
                  contentJson: xm[0]
                } : null
              }
              case Em.hd.PlayerKilled: {
                const hm = HA(mm, am, wm, 3);
                return hm ? {
                  what: Tm,
                  killstreak: fm,
                  dead: hm[0],
                  killer: hm[1],
                  withItem: hm[2]
                } : null
              }
              case Em.hd.Killfeed: {
                const fm = HA(mm, am, wm, 7);
                return fm ? {
                  what: Tm,
                  killerId: fm[0],
                  killerName: fm[1],
                  killerColour: fm[2],
                  victimId: fm[3],
                  victimName: fm[4],
                  victimColour: fm[5],
                  withItem: fm[6]
                } : null
              }
              default:
                return null
            }
          }(fm, Tm, Am, am, xm, wm, Dm);
          null !== im ? mm.replayUiEvent(im) : hm = !1
        },
        replayFilePart: (fm, Am, am, xm) => {
          const wm = Tm();
          am + xm > wm.byteLength ? hm = !1 : mm.filePart(fm, Am, new Uint8Array(wm, am, xm).slice())
        },
        replayFileReady: (Tm, fm, hm, Am) => {
          mm.fileReady({
            save: Tm,
            kind: fm,
            parts: hm,
            bytes: Am
          })
        },
        recorderEvent: (Tm, fm, hm) => {
          mm.recorderEvent({
            what: Tm,
            kind: fm,
            save: hm
          })
        },
        replayOpened: (Tm, hm, Am) => {
          mm.replayOpened(PA.decode(new Uint8Array(fm.buffer, fm.byteOffset + hm, Am)))
        }
      };
      return (mm, Tm, am, xm) => !(mm < Em.Z.ReplayFailed || mm > Em.Z.RecorderEvent) && (fm = Tm, hm = !0, (0, Om.se)(mm, Tm, am, xm, Am) && hm)
    }

    function CA(mm) {
      let Tm = null;
      const fm = yA(mm, (() => {
        if (null === Tm) throw new Error("a recorder event read outside recorderEventReader's call");
        return Tm.buffer
      }));
      return (mm, hm) => {
        Tm = hm;
        try {
          ! function(mm, Tm) {
            const fm = mm.slice(),
              hm = new DataView(fm.buffer);
            for (let Am = 0; Am < fm.byteLength;) {
              if (Am + Em.X > fm.byteLength) throw new Error(`the recorder module's events end mid-head at ${Am}`);
              const mm = hm.getUint32(Am, !0),
                am = 65535 & mm,
                xm = mm >>> 16,
                wm = Am + Em.X;
              if (wm + xm > fm.byteLength || !Tm(am, hm, wm, xm)) throw new Error(`the recorder module wrote a malformed event ${am} (${xm} bytes) at ${Am}`);
              Am = wm + (0, Em.te)(xm)
            }
          }(mm, fm)
        } finally {
          Tm = null
        }
      }
    }
    class rA {
      constructor(mm, Tm) {
        this.acks = mm, this.handlers = Tm, this.parts = new Map
      }
      onPart(mm, Tm, fm) {
        let hm = this.parts.get(mm);
        hm || (hm = [], this.parts.set(mm, hm)), hm[Tm] = fm, this.acks.filePartDone(mm, Tm)
      }
      onReady(mm) {
        var Tm;
        const fm = null !== (Tm = this.parts.get(mm.save)) && void 0 !== Tm ? Tm : [];
        this.parts.delete(mm.save);
        const hm = function(mm, Tm, fm) {
          if (mm.length !== Tm) return null;
          let hm = 0;
          for (let xm = 0; xm < Tm; xm++) {
            if (void 0 === mm[xm]) return null;
            hm += mm[xm].byteLength
          }
          if (hm !== fm) return null;
          if (1 === Tm) return mm[0];
          const Am = new Uint8Array(fm);
          let am = 0;
          for (const xm of mm) Am.set(xm, am), am += xm.byteLength;
          return Am
        }(fm, mm.parts, mm.bytes);
        this.acks.fileDone(mm.save), null === hm ? this.handlers.fileIncomplete(mm.save, mm.kind) : this.handlers.fileReady(mm.save, mm.kind, hm)
      }
      onDiscarded(mm) {
        this.parts.delete(mm)
      }
    }

    function sA() {
      return fm.e(60).then((() => fm(60682)))
    }
    class lA {
      constructor(mm) {
        this.deps = mm, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: Tm
        } = mm;
        this.recorder = new XA({
          client: Tm,
          live: () => {
            var mm;
            return !0 !== (null === (mm = this.viewer) || void 0 === mm ? void 0 : mm.inPlayback)
          },
          viewerOpen: mm.viewerOpen,
          notify: mm.notify,
          download: Tm => {
            var fm;
            null === (fm = mm.download) || void 0 === fm || fm.call(mm, Tm)
          },
          onState: mm.onRecorderState,
          onSaveState: mm.onSaveState
        }), this.parts = new rA(Tm, {
          fileReady: (mm, Tm, fm) => {
            var hm;
            Tm === Em.fd.Edited ? null === (hm = this.viewer) || void 0 === hm || hm.saveDone(fm) : this.recorder.fileReady(Tm, fm)
          },
          fileIncomplete: (mm, Tm) => {
            this.saveFailed(Tm)
          }
        });
        const fm = {
          replayFailed: mm => {
            var Tm;
            null === (Tm = this.viewer) || void 0 === Tm || Tm.onFailed(mm)
          },
          replayOption: Tm => {
            var fm;
            null === (fm = mm.onReplayOption) || void 0 === fm || fm.call(mm, Tm)
          },
          replayUiEvent: Tm => {
            var fm;
            null === (fm = mm.onReplayUiEvent) || void 0 === fm || fm.call(mm, Tm)
          },
          filePart: (mm, Tm, fm) => {
            this.parts.onPart(mm, Tm, fm)
          },
          fileReady: mm => {
            this.parts.onReady(mm)
          },
          replayOpened: Tm => {
            var fm;
            null === (fm = mm.onReplayOpened) || void 0 === fm || fm.call(mm, Tm)
          },
          recorderEvent: mm => {
            var Tm;
            switch (mm.what) {
              case Em.Pc.FileDiscarded:
                this.parts.onDiscarded(mm.save);
                break;
              case Em.Pc.SaveFailed:
                this.saveFailed(mm.kind);
                break;
              case Em.Pc.SaveBusy:
                if (null !== (Tm = this.viewer) && void 0 !== Tm && Tm.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(mm);
                break;
              default:
                this.recorder.onEvent(mm)
            }
          }
        };
        this.sink = function(mm, Tm) {
          return {
            onReplayEvent: yA(mm, Tm)
          }
        }(fm, mm.buffer), this.recorderEvents = CA(fm)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var mm;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (mm = this.deps.loadViewer) && void 0 !== mm ? mm : sA)().catch((mm => {
          throw this.viewerChunk = null, mm
        })), this.viewerChunk.then((mm => (this.viewer ??= new mm.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var mm, Tm;
            null === (mm = (Tm = this.deps).onViewerChange) || void 0 === mm || mm.call(Tm)
          }
        }), this.viewer))))
      }
      activated(mm) {
        this.recorder.activated(mm)
      }
      afterFrame(mm) {
        try {
          mm > 0 && this.recorder.DE()
        } finally {
          var Tm;
          null === (Tm = this.viewer) || void 0 === Tm || Tm.afterFrame()
        }
      }
      end() {
        var mm;
        null === (mm = this.viewer) || void 0 === mm || mm.end()
      }
      saveFailed(mm) {
        var Tm;
        mm === Em.fd.Edited ? null === (Tm = this.viewer) || void 0 === Tm || Tm.saveFailed(!1) : this.recorder.failed(mm)
      }
    }
    var MA = fm(40692),
      uA = fm(40709),
      BA = fm(4747),
      LA = fm(41e3);
    class vA {
      constructor(mm) {
        this.deps = mm, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(mm, Tm) {
        if (!this.deps.live() || 0 === mm && 0 === Tm) return;
        const fm = (0, ym.t)(0, performance.now()),
          hm = this.deps.dragScale();
        (0, LA.g)((() => {
          (0, ym.y)(Em.wb.MouseDown, 0, 0, 0, fm), (0, ym.y)(Em.wb.MouseMove, 0, mm * hm, Tm * hm, 0), (0, ym.y)(Em.wb.MouseUp, 0, 0, 0, fm)
        }))
      }
      move(mm) {
        var Tm, fm;
        this.analogue[0] = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.x) && void 0 !== Tm ? Tm : 0, this.analogue[1] = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.y) && void 0 !== fm ? fm : 0, this.send()
      }
      holdVertical(mm, Tm) {
        const fm = "freeCamUp" === mm ? Om.fc.Up : Om.fc.Down;
        this.keys = Tm ? this.keys | fm : this.keys & ~fm, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const mm = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== mm && !(0, Om.Le)(mm, 0, this.analogue, this.keys)
      }
    }
    var tA = fm(3571),
      UA = fm(763),
      dA = fm(294),
      gA = fm(105),
      WA = fm(34217);

    function FA() {
      const mm = hm.c.get("clientEscMenuOptions"),
        Tm = (0, UA.m)(mm);
      return {
        mouse: (0, gA.isMobile)() ? Tm : mm.mouseSensitivity,
        touch: Tm,
        fovPercent: mm.cameraFOV
      }
    }

    function ma() {
      const mm = hm.c.get("clientEscMenuOptions"),
        Tm = hm.c.get("isTouchScreen") ? (0, UA.m)(mm) : mm.mouseSensitivity,
        fm = FA().mouse;
      return fm > 0 ? Tm / fm : 1
    }

    function Ta(mm) {
      const Tm = () => {
        mm.setSoundPrefs(hm.c.get("soundVolume"), hm.c.get("soundOnFromAd"))
      };
      let fm = null;
      const Am = () => {
        const {
          showFog: Tm,
          enableLighting: Am,
          fogChunkDistance: am,
          chunkFadeIn: xm
        } = hm.c.get("clientEscMenuOptions"), wm = {
          showFog: Tm,
          lighting: Am,
          fogChunks: am,
          chunkFade: xm,
          cellLight: (0, tA.l)("cellLight") ? (0, tA.l)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        fm && (0, Em.fe)(fm) === (0, Em.fe)(wm) && fm.fogChunks === am || (fm = wm, mm.setEnvPrefs(fm))
      };
      let am = null;
      const wm = () => {
        const Tm = function() {
          const mm = hm.c.get("clientEscMenuOptions");
          return {
            nametagsHidden: hm.c.get("areNametagsHidden"),
            crouchToggle: mm.crouchIsToggle,
            bhopDisabled: mm.disableBunnyHopping,
            disableBobbing: mm.disableBobbing,
            ezTowering: mm.ezTowering && (0, dA.g)(),
            ezBridging: mm.ezBridging,
            showChunkBorders: mm.showChunkBorders,
            nametagCutDistance: (0, WA.g)()
          }
        }();
        (0, Zm.Zd)(am, Tm) || (am = Tm, mm.setUiPrefs(Tm))
      };
      let Dm = null;
      const im = () => {
        const Tm = FA();
        (0, Zm.Zd)(Dm, Tm) || (Dm = Tm, mm.setLookPrefs(Tm))
      };
      Tm(), Am(), wm(), im();
      const Rm = [(0, xm.m)("appManagerUpdated|soundVolume", Tm), (0, xm.m)("appManagerUpdated|soundOnFromAd", Tm), (0, xm.m)("appManagerUpdated|clientEscMenuOptions", (() => {
        Am(), wm(), im()
      })), (0, xm.m)("appManagerUpdated|enabledDebugFeatures", Am), (0, xm.m)("appManagerUpdated|areNametagsHidden", wm), (0, xm.m)("appManagerUpdated|showDistantNametags", wm)];
      return () => {
        for (const mm of Rm) mm()
      }
    }
    var fa = fm(40975),
      ha = fm(40983);
    var Aa = (0, ha.c)("lend"),
      aa = (0, ha.c)("starting"),
      xa = (0, ha.c)("generation"),
      wa = (0, ha.c)("end");
    class Da {
      constructor(mm) {
        this.deps = mm, Object.defineProperty(this, wa, {
          value: ia
        }), Object.defineProperty(this, Aa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, aa, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, xa, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, fa.e)(this, Aa)[Aa] || (0, fa.e)(this, aa)[aa]
      }
      async start(mm) {
        if (this.active) return "busy";
        const Tm = (0, fa.e)(this, xa)[xa];
        (0, fa.e)(this, aa)[aa] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, fa.e)(this, aa)[aa] = !1
        }
        if (Tm !== (0, fa.e)(this, xa)[xa]) return "refused";
        const fm = this.deps.beginSave();
        if (!fm) return "refused";
        const hm = Number(BigInt.asUintN(32, mm)),
          Am = Number(BigInt.asUintN(32, mm >> 32n));
        let am = "refused";
        return this.deps.recorderCall(((mm, Tm) => {
          const xm = fm.editState,
            wm = mm.stage(xm.length);
          0 !== wm ? (new Uint8Array(Tm.buffer, wm, xm.length).set(xm), mm.NAm(fm.headLen, hm, Am) && (am = "sealing")) : am = "tooLarge"
        }), !0), "sealing" !== am ? (fm.end(), am) : ((0, fa.e)(this, Aa)[Aa] = fm, "sealing")
      }
      beforeRecorderStep() {
        const mm = (0, fa.e)(this, Aa)[Aa];
        if (!mm) return null;
        let Tm = -1,
          fm = 0;
        if (!this.deps.recorderCall((mm => {
            Tm = mm.GAm(), Tm > 0 && (fm = mm.XAm())
          }))) return (0, fa.e)(this, wa)[wa](mm, "stopped");
        if (Tm < 0) return (0, fa.e)(this, wa)[wa](mm, "read");
        if (0 === Tm) return null;
        const hm = mm.head(fm, Tm);
        let Am = !1;
        if (hm && this.deps.recorderCall(((mm, fm) => {
            const am = mm.stage(Tm);
            0 !== am && (new Uint8Array(fm.buffer, am, Tm).set(hm), Am = !0)
          }), !0), Am) return null;
        const am = mm.givenUp();
        this.deps.recorderCall((mm => {
          mm.PAm()
        }));
        const xm = (0, fa.e)(this, wa)[wa](mm, am ? "givenUp" : "stopped");
        return am && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), xm
      }
      stop() {
        (0, fa.e)(this, xa)[xa]++;
        const mm = (0, fa.e)(this, Aa)[Aa];
        mm && (this.deps.recorderCall((mm => {
          mm.PAm()
        })), (0, fa.e)(this, wa)[wa](mm, "stopped"))
      }
    }

    function ia(mm, Tm) {
      return (0, fa.e)(this, Aa)[Aa] = null, mm.end(), Tm
    }

    function Ra(mm, Tm) {
      const fm = new Uint8Array(4),
        hm = new DataView(fm.buffer);
      return hm.setUint8(0, mm ? 1 : 0), hm.setUint16(2, Math.max(0, Math.min(65535, Math.round(Tm))), !0), fm
    }

    function pa(mm, Tm) {
      return mm > function(mm) {
        return 16777216 + 314572.8 * Math.max(0, mm)
      }(Tm) + 33554432
    }
    let Ea = null;

    function oa(mm) {
      return Ea ??= async function(mm) {
        const Tm = mm.loadInFlight();
        Tm && await Tm.catch((() => {}));
        if (mm.trapped()) return "trapped";
        if (mm.busy() || !pa(mm.memoryBytes(), mm.clipSeconds())) return "mO";
        mm.unload();
        let fm = !1;
        try {
          fm = await mm.load()
        } catch {
          fm = !1
        }
        if (!fm) return mm.trapped() ? "trapped" : mm.PO() ? "PO" : "failed";
        return "recycled"
      }(mm).finally((() => {
        Ea = null
      })), Ea
    }
    const Oa = "Replay recording couldn't load, so try again.",
      Ya = new Set([Em.Tc.ToggleRecording, Em.Tc.SaveClip]);
    var qa = (0, ha.c)("bindings"),
      ja = (0, ha.c)("module"),
      Va = (0, ha.c)("memory"),
      Ia = (0, ha.c)("trapped"),
      Ka = (0, ha.c)("PO"),
      Qa = (0, ha.c)("recycleDue"),
      na = (0, ha.c)("loading"),
      Ja = (0, ha.c)("generation"),
      ca = (0, ha.c)("viewDrawn"),
      za = (0, ha.c)("clip"),
      Za = (0, ha.c)("session"),
      ka = (0, ha.c)("control"),
      ba = (0, ha.c)("deferred"),
      Sa = (0, ha.c)("coreU8"),
      ea = (0, ha.c)("coreU32"),
      Na = (0, ha.c)("moduleU8"),
      Ga = (0, ha.c)("edited"),
      Xa = (0, ha.c)("sendSession"),
      Pa = (0, ha.c)("checkNotInEvents"),
      Ha = (0, ha.c)("clipping"),
      ya = (0, ha.c)("busy"),
      Ca = (0, ha.c)("use"),
      ra = (0, ha.c)("ensureLoaded"),
      sa = (0, ha.c)("loadOnce"),
      la = (0, ha.c)("recycleAfterStep"),
      Ma = (0, ha.c)("settleRecycle"),
      ua = (0, ha.c)("load"),
      Ba = (0, ha.c)("attach"),
      La = (0, ha.c)("resendHeld"),
      va = (0, ha.c)("recycle"),
      ta = (0, ha.c)("send"),
      Ua = (0, ha.c)("unload"),
      da = (0, ha.c)("dropModule"),
      ga = (0, ha.c)("coreBytes"),
      Wa = (0, ha.c)("coreWords"),
      Fa = (0, ha.c)("moduleBytes"),
      mx = (0, ha.c)("loadFailed"),
      Tx = (0, ha.c)("call"),
      fx = (0, ha.c)("guard"),
      hx = (0, ha.c)("trapOn");
    class Ax {
      constructor(mm) {
        this.deps = mm, Object.defineProperty(this, hx, {
          value: kx
        }), Object.defineProperty(this, fx, {
          value: Zx
        }), Object.defineProperty(this, Tx, {
          value: zx
        }), Object.defineProperty(this, mx, {
          value: cx
        }), Object.defineProperty(this, Fa, {
          value: Jx
        }), Object.defineProperty(this, Wa, {
          value: nx
        }), Object.defineProperty(this, ga, {
          value: Qx
        }), Object.defineProperty(this, da, {
          value: Kx
        }), Object.defineProperty(this, Ua, {
          value: Ix
        }), Object.defineProperty(this, ta, {
          value: Vx
        }), Object.defineProperty(this, va, {
          value: jx
        }), Object.defineProperty(this, La, {
          value: qx
        }), Object.defineProperty(this, Ba, {
          value: Yx
        }), Object.defineProperty(this, ua, {
          value: Ox
        }), Object.defineProperty(this, Ma, {
          value: ox
        }), Object.defineProperty(this, la, {
          value: Ex
        }), Object.defineProperty(this, sa, {
          value: px
        }), Object.defineProperty(this, ra, {
          value: Rx
        }), Object.defineProperty(this, Ca, {
          value: ix
        }), Object.defineProperty(this, ya, {
          value: Dx
        }), Object.defineProperty(this, Ha, {
          value: wx
        }), Object.defineProperty(this, Pa, {
          value: xx
        }), Object.defineProperty(this, Xa, {
          value: ax
        }), Object.defineProperty(this, qa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ja, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Va, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ia, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Ka, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, Qa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, na, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ja, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ca, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, za, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Za, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ka, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ba, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Sa, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, ea, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Na, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Ga, {
          writable: !0,
          value: void 0
        }), (0, fa.e)(this, Ga)[Ga] = new Da({
          ensureLoaded: () => (0, fa.e)(this, ra)[ra](),
          recorderCall: (mm, Tm) => {
            Tm && (0, fa.e)(this, Pa)[Pa]("an edited save's stage");
            const fm = (0, fa.e)(this, Tx)[Tx](((Tm, fm) => (mm(Tm, fm), !0)));
            return null !== fm && void 0 !== fm && fm
          },
          beginSave: mm.beginSave,
          givenUp: mm.givenUp
        })
      }
      get active() {
        return null !== (0, fa.e)(this, ja)[ja]
      }
      get trapped() {
        return (0, fa.e)(this, Ia)[Ia]
      }
      get loading() {
        return null !== (0, fa.e)(this, na)[na]
      }
      prefetch() {
        (0, fa.e)(this, Ka)[Ka] || (0, fa.e)(this, Ia)[Ia] || (0, fa.e)(this, ja)[ja] || (0, fa.e)(this, na)[na] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, fa.e)(this, ca)[ca] = !0, (0, fa.e)(this, Ha)[Ha]() && (0, fa.e)(this, Ca)[Ca]()
      }
      prefs(mm, Tm) {
        (0, fa.e)(this, za)[za] = {
          on: mm,
          seconds: Tm
        }, (0, fa.e)(this, ta)[ta](Em.Lc.Prefs, Ra(mm, Tm)), mm && (0, fa.e)(this, ca)[ca] && (0, fa.e)(this, Ca)[Ca]()
      }
      control(mm) {
        const Tm = function(mm) {
          return new Uint8Array([mm, 0, 0, 0])
        }(mm);
        if (Ya.has(mm)) return (0, fa.e)(this, ja)[ja] ? void(0, fa.e)(this, ta)[ta](Em.Lc.Control, Tm) : ((0, fa.e)(this, ka)[ka] = Tm, void(0, fa.e)(this, Ca)[Ca]());
        (0, fa.e)(this, Ka)[Ka] || this.deps.coreCommand(Em.Lc.Control, Tm)
      }
      session(mm) {
        (0, fa.e)(this, Za)[Za] = mm, (0, fa.e)(this, Xa)[Xa](mm)
      }
      filePartDone(mm, Tm) {
        (0, fa.e)(this, ta)[ta](Em.Lc.FilePartDone, function(mm, Tm) {
          const fm = new Uint8Array(8),
            hm = new DataView(fm.buffer);
          return hm.setUint32(0, mm, !0), hm.setUint32(4, Tm, !0), fm
        }(mm, Tm))
      }
      fileDone(mm) {
        return (0, fa.e)(this, ta)[ta](Em.Lc.FileDone, function(mm) {
          const Tm = new Uint8Array(4);
          return new DataView(Tm.buffer).setUint32(0, mm, !0), Tm
        }(mm)), (0, fa.e)(this, la)[la]()
      }
      saveEdited(mm) {
        return (0, fa.e)(this, Pa)[Pa]("saveEdited"), (0, fa.e)(this, Ga)[Ga].start(mm)
      }
      afterFrame() {
        if (!(0, fa.e)(this, ja)[ja]) return;
        "read" === (0, fa.e)(this, Ga)[Ga].beforeRecorderStep() && (0, fa.e)(this, la)[la]();
        const mm = (0, fa.e)(this, Qa)[Qa];
        (0, fa.e)(this, Qa)[Qa] = null;
        const Tm = (0, fa.e)(this, ja)[ja],
          fm = (0, fa.e)(this, Va)[Va];
        if (!Tm || !fm) return void(null === mm || void 0 === mm || mm.resolve((0, fa.e)(this, Ia)[Ia] ? "trapped" : "mO"));
        const {
          core: hm
        } = this.deps, Am = hm.CAm(2);
        let am, xm, wm, Dm, im = 0,
          Rm = 0;
        if (0 !== Am) {
          var pm, Em;
          const mm = (0, fa.e)(this, Wa)[Wa]();
          im = null !== (pm = mm[Am >>> 2]) && void 0 !== pm ? pm : 0, Rm = null !== (Em = mm[1 + (Am >>> 2)]) && void 0 !== Em ? Em : 0
        }
        try {
          if (Rm > 0) {
            const mm = Tm.feed(Rm);
            0 !== mm && (0, fa.e)(this, Fa)[Fa](fm).set((0, fa.e)(this, ga)[ga]().subarray(im, im + Rm), mm)
          }
          am = Tm.step(), xm = Tm.rAm(), wm = Tm.sAm(), Dm = Tm.lAm()
        } catch (om) {
          if (!(0, fa.e)(this, hx)[hx](om)) throw null === mm || void 0 === mm || mm.resolve("mO"), om;
          return void(null === mm || void 0 === mm || mm.resolve("trapped"))
        }
        if (am > 0) {
          const mm = hm.MAm(2, am);
          0 !== mm && (0, fa.e)(this, ga)[ga]().set((0, fa.e)(this, Fa)[Fa](fm).subarray(xm, xm + am), mm)
        }
        if (wm > 0) {
          (0, fa.e)(this, ba)[ba] = [];
          try {
            this.deps.events(new Uint8Array(fm.buffer, Dm, wm), fm)
          } catch (om) {
            throw null === mm || void 0 === mm || mm.resolve("mO"), om
          } finally {
            const mm = (0, fa.e)(this, ba)[ba];
            (0, fa.e)(this, ba)[ba] = null;
            for (const [Tm, fm] of mm)(0, fa.e)(this, ta)[ta](Tm, fm)
          }
        }
        if (!(0, fa.e)(this, Ha)[Ha]() && !(0, fa.e)(this, ya)[ya]()) return (0, fa.e)(this, Ua)[Ua](), void(null === mm || void 0 === mm || mm.resolve("mO"));
        null === mm || void 0 === mm || mm.resolve((0, fa.e)(this, va)[va]())
      }
      dispose() {
        (0, fa.e)(this, Ka)[Ka] = !0, (0, fa.e)(this, Ua)[Ua]()
      }
    }

    function ax(mm) {
      (0, fa.e)(this, ta)[ta](Em.Lc.Session, function(mm) {
        const Tm = new TextEncoder,
          fm = Tm.encode(mm.game).subarray(0, 65535),
          hm = Tm.encode(mm.lobby).subarray(0, 65535),
          Am = new Uint8Array(22 + fm.length + 2 + hm.length),
          am = new DataView(Am.buffer);
        am.setFloat64(0, mm.unixMs, !0), am.setBigUint64(8, BigInt.asUintN(64, mm.session), !0), am.setUint8(16, mm.lobbyType);
        let xm = 20;
        for (const wm of [fm, hm]) am.setUint16(xm, wm.length, !0), Am.set(wm, xm + 2), xm += 2 + wm.length;
        return Am
      }({
        ...mm,
        unixMs: this.deps.unixNow()
      }))
    }

    function xx(mm) {
      false
    }

    function wx() {
      var mm, Tm;
      return null !== (mm = null === (Tm = (0, fa.e)(this, za)[za]) || void 0 === Tm ? void 0 : Tm.on) && void 0 !== mm && mm
    }

    function Dx() {
      const mm = (0, fa.e)(this, ja)[ja];
      let Tm = !0;
      if (mm) try {
        Tm = mm.busy()
      } catch (fm) {
        if (!(0, fa.e)(this, hx)[hx](fm)) throw fm
      }
      return Tm || (0, fa.e)(this, Ga)[Ga].active
    }
    async function ix() {
      !(0, fa.e)(this, Ka)[Ka] && this.deps.allowed() ? await (0, fa.e)(this, ra)[ra]() : (0, fa.e)(this, ka)[ka] = null
    }

    function Rx() {
      return (0, fa.e)(this, Ia)[Ia] || (0, fa.e)(this, Ka)[Ka] ? Promise.resolve(!1) : (0, fa.e)(this, ja)[ja] ? Promise.resolve(!0) : ((0, fa.e)(this, na)[na] ??= (0, fa.e)(this, sa)[sa](), (0, fa.e)(this, na)[na])
    }
    async function px() {
      let mm = !1;
      try {
        return mm = await (0, fa.e)(this, ua)[ua](), mm
      } finally {
        mm || ((0, fa.e)(this, ka)[ka] = null), (0, fa.e)(this, na)[na] = null
      }
    }

    function Ex() {
      if (!(0, fa.e)(this, ja)[ja]) return Promise.resolve((0, fa.e)(this, Ia)[Ia] ? "trapped" : "mO");
      if (!(0, fa.e)(this, Qa)[Qa]) {
        let mm = () => {};
        const Tm = new Promise((Tm => {
          mm = Tm
        }));
        (0, fa.e)(this, Qa)[Qa] = {
          promise: Tm,
          resolve: mm
        }
      }
      return (0, fa.e)(this, Qa)[Qa].promise
    }

    function ox(mm) {
      const Tm = (0, fa.e)(this, Qa)[Qa];
      (0, fa.e)(this, Qa)[Qa] = null, null === Tm || void 0 === Tm || Tm.resolve(mm)
    }
    async function Ox() {
      let mm = (0, fa.e)(this, qa)[qa];
      if (!mm) {
        const Tm = (0, fa.e)(this, Ja)[Ja];
        try {
          mm = await this.deps.load()
        } catch (fm) {
          return Tm === (0, fa.e)(this, Ja)[Ja] && await (0, fa.e)(this, mx)[mx](fm), !1
        }
        if (Tm !== (0, fa.e)(this, Ja)[Ja]) return this.deps.unload(), !1;
        const hm = mm,
          Am = (0, fa.e)(this, fx)[fx]((() => hm.uAm()));
        if (void 0 === Am) return !1;
        const am = this.deps.core.BAm();
        if (Am !== am) return await (0, fa.e)(this, mx)[mx](new Error(`recorder port version ${Am}, the core's ${am}`)), !1;
        (0, fa.e)(this, qa)[qa] = mm
      }
      const Tm = mm;
      try {
        if (!(0, fa.e)(this, fx)[fx]((() => ((0, fa.e)(this, ja)[ja] = new Tm.LAm, (0, fa.e)(this, Va)[Va] = Tm.HAm(), !0)))) return !1;
        (0, fa.e)(this, La)[La]();
        const mm = (0, fa.e)(this, ka)[ka];
        return (0, fa.e)(this, ka)[ka] = null, mm && (0, fa.e)(this, ta)[ta](Em.Lc.Control, mm), (0, fa.e)(this, Ba)[Ba]()
      } catch (fm) {
        return (0, fa.e)(this, Ua)[Ua](), await (0, fa.e)(this, mx)[mx](fm), !1
      }
    }

    function Yx() {
      return this.deps.core.vAm(0), 1 === this.deps.core.vAm(1) || ((0, fa.e)(this, Ua)[Ua](), this.deps.failed(Oa), !1)
    }

    function qx() {
      (0, fa.e)(this, za)[za] && (0, fa.e)(this, ta)[ta](Em.Lc.Prefs, Ra((0, fa.e)(this, za)[za].on, (0, fa.e)(this, za)[za].seconds)), (0, fa.e)(this, Za)[Za] && (0, fa.e)(this, Xa)[Xa]((0, fa.e)(this, Za)[Za])
    }

    function jx() {
      return oa({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var mm, Tm;
          return null !== (mm = null === (Tm = (0, fa.e)(this, za)[za]) || void 0 === Tm ? void 0 : Tm.seconds) && void 0 !== mm ? mm : 0
        },
        trapped: () => (0, fa.e)(this, Ia)[Ia],
        busy: () => (0, fa.e)(this, ya)[ya](),
        loadInFlight: () => (0, fa.e)(this, na)[na],
        PO: () => (0, fa.e)(this, Ka)[Ka],
        unload: () => {
          (0, fa.e)(this, Ua)[Ua]()
        },
        load: () => (0, fa.e)(this, ra)[ra]()
      })
    }

    function Vx(mm, Tm) {
      (0, fa.e)(this, ba)[ba] ? (0, fa.e)(this, ba)[ba].push([mm, Tm]): (0, fa.e)(this, Tx)[Tx](((fm, hm) => {
        const Am = fm.yAm(Tm.length);
        0 !== Am && (new Uint8Array(hm.buffer, Am, Tm.length).set(Tm), fm.command(mm, Tm.length))
      }))
    }

    function Ix() {
      (0, fa.e)(this, Ja)[Ja]++, (0, fa.e)(this, Ma)[Ma]("mO"), (0, fa.e)(this, Ga)[Ga].stop(), this.deps.core.vAm(0), (0, fa.e)(this, da)[da](), (0, fa.e)(this, Ia)[Ia] || ((0, fa.e)(this, qa)[qa] = null, this.deps.unload())
    }

    function Kx() {
      (0, fa.e)(this, Tx)[Tx]((mm => {
        mm.free()
      })), (0, fa.e)(this, ja)[ja] = null, (0, fa.e)(this, Va)[Va] = null, (0, fa.e)(this, Na)[Na] = null
    }

    function Qx() {
      var mm;
      const Tm = this.deps.coreBuffer();
      return (null === (mm = (0, fa.e)(this, Sa)[Sa]) || void 0 === mm ? void 0 : mm.buffer) !== Tm && ((0, fa.e)(this, Sa)[Sa] = new Uint8Array(Tm)), (0, fa.e)(this, Sa)[Sa]
    }

    function nx() {
      var mm;
      const Tm = this.deps.coreBuffer();
      return (null === (mm = (0, fa.e)(this, ea)[ea]) || void 0 === mm ? void 0 : mm.buffer) !== Tm && ((0, fa.e)(this, ea)[ea] = new Uint32Array(Tm, 0, Tm.byteLength >>> 2)), (0, fa.e)(this, ea)[ea]
    }

    function Jx(mm) {
      var Tm;
      const fm = mm.buffer;
      return (null === (Tm = (0, fa.e)(this, Na)[Na]) || void 0 === Tm ? void 0 : Tm.buffer) !== fm && ((0, fa.e)(this, Na)[Na] = new Uint8Array(fm)), (0, fa.e)(this, Na)[Na]
    }
    async function cx(mm) {
      await this.deps.staleOr(mm, (() => {
        this.deps.failed(Oa)
      }))
    }

    function zx(mm) {
      const Tm = (0, fa.e)(this, ja)[ja],
        fm = (0, fa.e)(this, Va)[Va];
      if (Tm && fm) return (0, fa.e)(this, fx)[fx]((() => mm(Tm, fm)))
    }

    function Zx(mm) {
      if (!(0, fa.e)(this, Ia)[Ia]) try {
        return mm()
      } catch (Tm) {
        if (!(0, fa.e)(this, hx)[hx](Tm)) throw Tm;
        return
      }
    }

    function kx(mm) {
      return mm instanceof WebAssembly.RuntimeError && ((0, fa.e)(this, Ia)[Ia] = !0, (0, fa.e)(this, ja)[ja] = null, (0, fa.e)(this, Va)[Va] = null, (0, fa.e)(this, Na)[Na] = null, (0, fa.e)(this, qa)[qa] = null, (0, fa.e)(this, ka)[ka] = null, (0, fa.e)(this, Ma)[Ma]("trapped"), this.deps.core.vAm(0), (0, fa.e)(this, Ga)[Ga].stop(), this.deps.crash(this.deps.markTrapped(mm)), this.deps.failed("Replay recording stopped working, so reload the page to record replays again."), !0)
    }
    var bx = fm(38743);
    const Sx = new Map([
      ["skyblock", () => fm.e(51).then((() => fm(38739)))]
    ]);

    function ex(mm) {
      const Tm = Sx.get(mm);
      return Tm ? Tm().then((() => {
        const Tm = (0, bx.e)(mm);
        if (!Tm) throw new Error(`${mm}'s replay hook module registered no hook`);
        return Tm
      })) : null
    }
    class Nx {
      constructor(mm) {
        this.deps = mm, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(mm) {
        if (this.pending.clear(), mm === this.game && null !== this.hook) return void(this.all = !0);
        const Tm = ++this.generation;
        this.game = mm, this.hook = null, this.all = !1;
        const fm = this.deps.loadHook(mm);
        null === fm || void 0 === fm || fm.then((mm => {
          Tm === this.generation && (this.hook = mm, this.all = !0)
        }), (mm => {
          Tm === this.generation && this.deps.onError(mm)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(mm) {
        null === this.hook || this.all || this.pending.set(mm, !0)
      }
      entityInfoChanged(mm) {
        null === this.hook || this.all || this.pending.has(mm) || this.pending.set(mm, !1)
      }
      flush(mm) {
        const {
          hook: Tm
        } = this;
        if (null === Tm || !mm || !this.all && 0 === this.pending.size) return;
        const fm = this.deps.cmd();
        if (null === fm) return;
        const {
          api: hm
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: mm,
            count: Tm
          } = lf(hm, this.ids);
          this.ids = mm;
          for (let fm = 0; fm < Tm; fm++) this.pending.set(mm[fm], !0)
        }
        const Am = this.ids = Mf(this.ids, this.pending.size);
        let am = 0;
        for (const im of this.pending.keys()) Am[am++] = im;
        const xm = [],
          wm = uf(hm, Am, am, ((mm, Tm) => {
            null !== Tm && xm.push({
              serverId: mm,
              info: Tm,
              spawned: !0 === this.pending.get(mm)
            })
          }));
        if (wm) {
          this.pending.clear();
          for (const {
              serverId: mm,
              info: hm,
              spawned: Am
            }
            of xm) try {
            Tm(hm, {
              setFacingTolerance: Tm => {
                null === Tm && Am || Df(fm, mm, Tm) || this.pending.set(mm, Am)
              }
            })
          } catch (Dm) {
            this.deps.onError(Dm)
          }
        }
      }
    }
    var Gx = (0, ha.c)("bindings"),
      Xx = (0, ha.c)("module"),
      Px = (0, ha.c)("memory"),
      Hx = (0, ha.c)("trapped"),
      yx = (0, ha.c)("generation"),
      Cx = (0, ha.c)("loading"),
      rx = (0, ha.c)("lend"),
      sx = (0, ha.c)("givenUp"),
      lx = (0, ha.c)("afterSave"),
      Mx = (0, ha.c)("opens"),
      ux = (0, ha.c)("saveAskedAt"),
      Bx = (0, ha.c)("unload"),
      Lx = (0, ha.c)("dropModule"),
      vx = (0, ha.c)("loadFailed"),
      tx = (0, ha.c)("saveReadsBody"),
      Ux = (0, ha.c)("command"),
      dx = (0, ha.c)("call"),
      gx = (0, ha.c)("guard"),
      Wx = (0, ha.c)("trapOn");
    class Fx {
      constructor(mm) {
        this.deps = mm, Object.defineProperty(this, Wx, {
          value: ww
        }), Object.defineProperty(this, gx, {
          value: xw
        }), Object.defineProperty(this, dx, {
          value: aw
        }), Object.defineProperty(this, Ux, {
          value: Aw
        }), Object.defineProperty(this, tx, {
          get: hw,
          set: void 0
        }), Object.defineProperty(this, vx, {
          value: fw
        }), Object.defineProperty(this, Lx, {
          value: Tw
        }), Object.defineProperty(this, Bx, {
          value: mw
        }), Object.defineProperty(this, Gx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Xx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Px, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Hx, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, yx, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, Cx, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, rx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, lx, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, Mx, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, ux, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, fa.e)(this, Xx)[Xx] && null === (0, fa.e)(this, lx)[lx]
      }
      async open(mm, Tm) {
        if ((0, fa.e)(this, Hx)[Hx]) return Em.bd.ModuleTrap;
        let fm = (0, fa.e)(this, Gx)[Gx];
        if (!fm) {
          const mm = (0, fa.e)(this, yx)[yx];
          (0, fa.e)(this, Cx)[Cx]++;
          try {
            fm = await this.deps.load()
          } catch (Am) {
            return (0, fa.e)(this, Cx)[Cx]--, mm !== (0, fa.e)(this, yx)[yx] ? "stopped" : (0, fa.e)(this, vx)[vx](Am, Tm)
          }
          if ((0, fa.e)(this, Cx)[Cx]--, mm !== (0, fa.e)(this, yx)[yx]) return (0, fa.e)(this, Gx)[Gx] || 0 !== (0, fa.e)(this, Cx)[Cx] || (0, fa.e)(this, Hx)[Hx] || this.deps.unload(), "stopped";
          if ((0, fa.e)(this, Hx)[Hx]) return Em.bd.ModuleTrap;
          const hm = fm.uAm(),
            am = this.deps.core.BAm();
          if (hm !== am) return (0, fa.e)(this, vx)[vx](new Error(`replay port version ${hm}, the core's ${am}`), Tm);
          (0, fa.e)(this, Gx)[Gx] = fm
        }
        if (!(0, fa.e)(this, Xx)[Xx]) {
          const mm = fm;
          if (!(0, fa.e)(this, gx)[gx]((() => {
              (0, fa.e)(this, Xx)[Xx] = new mm.tAm, (0, fa.e)(this, Px)[Px] = mm.UAm()
            }))) return Em.bd.ModuleTrap
        }
        let hm = !1;
        return (0, fa.e)(this, dx)[dx](((Tm, fm) => {
          null !== (0, fa.e)(this, lx)[lx] && Tm.step(0, 0);
          const Am = Tm.stage(mm.length);
          0 !== Am && (new Uint8Array(fm.buffer, Am, mm.length).set(mm), Tm.open(), (0, fa.e)(this, sx)[sx] = (0, fa.e)(this, rx)[rx], (0, fa.e)(this, lx)[lx] = null, (0, fa.e)(this, Mx)[Mx]++, hm = !0)
        })) ? hm ? "opening" : Em.bd.TooLarge : Em.bd.ModuleTrap
      }
      beforeFrame(mm) {
        const Tm = (0, fa.e)(this, Xx)[Xx],
          fm = (0, fa.e)(this, Px)[Px];
        if (!Tm || !fm || null !== (0, fa.e)(this, lx)[lx]) return;
        const {
          core: hm
        } = this.deps, Am = hm.dAm(mm);
        if (Am < 0) return;
        const am = Math.floor(Am);
        let xm, wm;
        try {
          xm = Tm.step(am, Am - am), wm = Tm.rAm()
        } catch (im) {
          return void(0, fa.e)(this, Wx)[Wx](im)
        }
        const Dm = hm.MAm(1, xm);
        if (0 === Dm) {
          const mm = (0, fa.e)(this, dx)[dx]((mm => {
            mm.close()
          }));
          if (!mm) return;
          return (0, fa.e)(this, tx)[tx] ? (0, fa.e)(this, lx)[lx] = "drop" : (0, fa.e)(this, Lx)[Lx](), void hm.gAm(Em.bd.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Dm, xm).set(new Uint8Array(fm.buffer, wm, xm))
      }
      play() {
        (0, fa.e)(this, Ux)[Ux]((mm => {
          mm.play()
        }))
      }
      pause() {
        (0, fa.e)(this, Ux)[Ux]((mm => {
          mm.pause()
        }))
      }
      seek(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.seek(mm, Tm)
        }))
      }
      setMark(mm, Tm) {
        return (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.WAm(mm, Tm)
        }))
      }
      addKeyframe(mm, Tm) {
        return (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.FAm(mm[0], mm[1], mm[2], Tm[0], Tm[1], Tm[2])
        }))
      }
      setKeyframe(mm, Tm) {
        return (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.mam(mm, Tm)
        }))
      }
      moveKeyframe(mm, Tm) {
        return (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.Tam(mm, Tm)
        }))
      }
      deleteKeyframes(mm, Tm) {
        return (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.fam(mm, Tm)
        }))
      }
      crop(mm, Tm) {
        return null === (0, fa.e)(this, rx)[rx] && (0, fa.e)(this, Ux)[Ux]((fm => {
          fm.crop(mm, Tm)
        }))
      }
      beginSave() {
        const mm = (0, fa.e)(this, ux)[ux];
        if ((0, fa.e)(this, ux)[ux] = null, null !== mm && mm !== (0, fa.e)(this, Mx)[Mx]) return null;
        let Tm = 0,
          fm = null;
        if ((0, fa.e)(this, dx)[dx](((mm, hm) => {
            Tm = mm.save(), 0 !== Tm && (fm = new Uint8Array(hm.buffer, mm.ham(), mm.Aam()).slice())
          })), 0 === Tm || !fm) return null;
        const hm = {
          headLen: Tm,
          editState: fm,
          givenUp: () => (0, fa.e)(this, sx)[sx] === hm,
          head: (mm, Tm) => {
            if ((0, fa.e)(this, rx)[rx] !== hm || !(0, fa.e)(this, tx)[tx]) return null;
            let fm = null;
            return (0, fa.e)(this, dx)[dx](((hm, Am) => {
              const am = hm.aam();
              0 !== am && mm >= 0 && Tm >= 0 && mm + Tm <= am && (fm = new Uint8Array(Am.buffer, hm.xam() + mm, Tm))
            })), fm
          },
          end: () => {
            if ((0, fa.e)(this, rx)[rx] !== hm) return;
            (0, fa.e)(this, rx)[rx] = null, (0, fa.e)(this, sx)[sx] = null, (0, fa.e)(this, dx)[dx]((mm => {
              mm.wam()
            }));
            const mm = (0, fa.e)(this, lx)[lx];
            (0, fa.e)(this, lx)[lx] = null, "unload" === mm ? (0, fa.e)(this, Bx)[Bx]() : "drop" === mm && (0, fa.e)(this, Lx)[Lx]()
          }
        };
        return (0, fa.e)(this, rx)[rx] = hm, hm
      }
      askSave() {
        (0, fa.e)(this, ux)[ux] = (0, fa.e)(this, Mx)[Mx]
      }
      setSpeed(mm) {
        (0, fa.e)(this, Ux)[Ux]((Tm => {
          Tm.Dam(mm)
        }))
      }
      setCameraMode(mm) {
        (0, fa.e)(this, Ux)[Ux]((Tm => {
          Tm.iam(mm)
        }))
      }
      close() {
        (0, fa.e)(this, Ux)[Ux]((mm => {
          mm.close()
        }))
      }
      stop() {
        (0, fa.e)(this, yx)[yx]++, (0, fa.e)(this, tx)[tx] && ((0, fa.e)(this, dx)[dx]((mm => {
          mm.close()
        })), (0, fa.e)(this, Xx)[Xx]) ? (0, fa.e)(this, lx)[lx] = "unload" : (0, fa.e)(this, Bx)[Bx]()
      }
    }

    function mw() {
      (0, fa.e)(this, Lx)[Lx](), (0, fa.e)(this, Hx)[Hx] || ((0, fa.e)(this, Gx)[Gx] = null, this.deps.unload())
    }

    function Tw() {
      (0, fa.e)(this, dx)[dx]((mm => {
        mm.free()
      })), (0, fa.e)(this, Xx)[Xx] = null, (0, fa.e)(this, Px)[Px] = null
    }
    async function fw(mm, Tm) {
      return await this.deps.staleOr(mm, (() => {}), {
        beforeReload: Tm
      }) ? "reloading" : Em.bd.ModuleLoad
    }

    function hw() {
      return null !== (0, fa.e)(this, rx)[rx] && (0, fa.e)(this, sx)[sx] !== (0, fa.e)(this, rx)[rx]
    }

    function Aw(mm) {
      return null === (0, fa.e)(this, lx)[lx] && (0, fa.e)(this, dx)[dx](mm)
    }

    function aw(mm) {
      const Tm = (0, fa.e)(this, Xx)[Xx],
        fm = (0, fa.e)(this, Px)[Px];
      return !(!Tm || !fm) && (0, fa.e)(this, gx)[gx]((() => {
        mm(Tm, fm)
      }))
    }

    function xw(mm) {
      if ((0, fa.e)(this, Hx)[Hx]) return !1;
      try {
        return mm(), !0
      } catch (Tm) {
        return (0, fa.e)(this, Wx)[Wx](Tm), !1
      }
    }

    function ww(mm) {
      if (!(mm instanceof WebAssembly.RuntimeError)) throw mm;
      (0, fa.e)(this, Hx)[Hx] = !0, (0, fa.e)(this, Xx)[Xx] = null, (0, fa.e)(this, Px)[Px] = null, (0, fa.e)(this, Gx)[Gx] = null, this.deps.crash(this.deps.markTrapped(mm)), this.deps.core.gAm(Em.bd.ModuleTrap)
    }
    var Dw = fm(6454),
      iw = fm(41088);
    const Rw = "[bloxd-wasm-client]";
    const pw = String(GA);

    function Ew(mm) {
      return null === mm || mm === pw ? void 0 : mm
    }

    function ow(mm) {
      var Tm, fm, hm, Am, am, wm, Dm;
      switch (mm.what) {
        case Em.hd.FlyingText: {
          let Tm;
          try {
            Tm = JSON.parse(mm.contentJson)
          } catch (im) {
            return void console.warn(`${Rw} a replay's flying text isn't JSON`, im)
          }
          xm.j.gp("forceFlyingMiddleMessage", {
            content: Tm,
            Ga: mm.Ga,
            angle: mm.angle,
            Xa: mm.Xa
          });
          break
        }
        case Em.hd.PlayerKilled:
          (0, iw.e)({
            kind: "killed",
            body: {
              deadEId: null !== (Tm = Ew(mm.dead)) && void 0 !== Tm ? Tm : "",
              killerEId: Ew(mm.killer),
              withItem: null !== (fm = mm.withItem) && void 0 !== fm ? fm : "",
              killstreak: mm.killstreak
            }
          });
          break;
        case Em.hd.Killfeed:
          (0, iw.e)({
            kind: "custom",
            body: {
              killer: {
                eId: Ew(mm.killerId),
                name: null !== (hm = mm.killerName) && void 0 !== hm ? hm : void 0,
                colour: null !== (Am = mm.killerColour) && void 0 !== Am ? Am : void 0
              },
              victim: {
                eId: Ew(mm.victimId),
                name: null !== (am = mm.victimName) && void 0 !== am ? am : void 0,
                colour: null !== (wm = mm.victimColour) && void 0 !== wm ? wm : void 0
              },
              withItem: null !== (Dm = mm.withItem) && void 0 !== Dm ? Dm : ""
            }
          })
      }
    }
    const Ow = "[bloxd-wasm-client]";

    function Yw(mm) {
      if (void 0 === mm || null === mm || "" === mm) return null;
      const Tm = Number(mm);
      return Number.isInteger(Tm) && Tm > GA && Tm <= 2147483647 ? Tm : null
    }

    function qw(mm) {
      return {
        id: Yw(mm.eId),
        name: "string" === typeof mm.name ? mm.name : null,
        colour: "string" === typeof mm.colour ? mm.colour : null
      }
    }

    function jw(mm) {
      const Tm = (0, uA.g)(df.gc.PlayerKilled, (Tm => {
          var fm, hm;
          const Am = (0, MA.j)(Tm);
          if (!(0, MA.b)(Am)) return;
          const {
            deadEId: am,
            killerEId: xm,
            withItem: wm,
            killstreak: Dm
          } = Am;
          mm.recordPlayerKilled(null !== (fm = Yw(am)) && void 0 !== fm ? fm : GA, null !== (hm = Yw(xm)) && void 0 !== hm ? hm : GA, "number" === typeof Dm ? Dm : 0, "string" === typeof wm ? wm : "")
        })),
        fm = (0, uA.g)(df.gc.CustomKillfeed, (Tm => {
          const fm = (0, MA.j)(Tm);
          if (!(0, MA.b)(fm) || !(0, MA.b)(fm.killer) || !(0, MA.b)(fm.victim)) return;
          const {
            killer: hm,
            victim: Am,
            withItem: am
          } = fm;
          mm.recordKillfeed(qw(hm), qw(Am), "string" === typeof am ? am : null)
        }));
      return () => {
        Tm(), fm()
      }
    }

    function Vw(mm) {
      var Tm;
      return void 0 === mm || null === mm ? null : null !== (Tm = JSON.stringify(mm)) && void 0 !== Tm ? Tm : null
    }

    function Iw(mm) {
      let Tm = null;
      const fm = () => {
        const {
          enableClipping: fm,
          clipDurationSeconds: Am
        } = hm.c.get("clientEscMenuOptions"), am = `${fm}:${Am}`;
        am !== Tm && (Tm = am, mm.recorder.setPrefs(fm, Am))
      };
      return fm(), (0, xm.m)("appManagerUpdated|clientEscMenuOptions", fm)
    }
    const Kw = "replayModule",
      Qw = "recorderModule";

    function nw(mm, Tm, fm) {
      return function() {
        return mm.isStopped ? fm : Tm(...arguments)
      }
    }
    const Jw = {
      open: () => Promise.reject(new Error(JA.e.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function zw() {
      return fm.e(64).then((() => fm(61543)))
    }

    function Zw(mm) {
      (0, JA.i)({
        text: mm,
        type: "Error"
      })
    }
    class kw {
      constructor(mm) {
        this.deps = mm, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: Tm,
          api: hm,
          core: Am
        } = mm, am = () => mm.memory().buffer, xm = () => Tm.isStopped ? null : Tm.rings.cmd, wm = nw(Tm, ((mm, Tm) => Am.MAm(mm, Tm)), 0), Dm = () => Am.BAm();
        let im = null;
        this.replay = new Fx({
          core: {
            dAm: nw(Tm, (mm => Am.dAm(mm)), -1),
            MAm: wm,
            BAm: Dm,
            gAm: nw(Tm, (mm => {
              Am.gAm(mm)
            }), void 0)
          },
          coreBuffer: am,
          load: async () => (im = await fm.e(65).then((() => fm(61558))), im.loadReplayModule()),
          unload: () => {
            var mm;
            null === (mm = im) || void 0 === mm || mm.unloadReplayModule()
          },
          markTrapped: mm => im ? im.markReplayTrapped(mm) : new Error(String(mm)),
          staleOr: (Tm, fm, hm) => mm.staleOr(Kw, Tm, fm, hm),
          crash: Tm => {
            mm.reportFault(Kw, Tm)
          }
        });
        let Rm = null;
        this.recorder = new Ax({
          core: {
            vAm: nw(Tm, (mm => Am.vAm(mm)), 0),
            CAm: nw(Tm, (mm => Am.CAm(mm)), 0),
            MAm: wm,
            BAm: Dm
          },
          coreCommand: (mm, Tm) => {
            var fm, hm;
            return null !== (fm = null === (hm = xm()) || void 0 === hm ? void 0 : hm.writeCmd(mm, 0, Tm)) && void 0 !== fm && fm
          },
          coreBuffer: am,
          load: async () => (Rm = await zw(), Rm.loadRecorderModule()),
          prefetch: () => {
            zw().then((mm => mm.prefetchRecorderModule())).catch((mm => {
              console.warn(`${Ow} the recorder module didn't prefetch, so a save loads it:`, mm)
            }))
          },
          unload: () => {
            var mm;
            null === (mm = Rm) || void 0 === mm || mm.unloadRecorderModule()
          },
          markTrapped: mm => Rm ? Rm.markRecorderTrapped(mm) : new Error(String(mm)),
          memoryBytes: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Rm) || void 0 === Tm ? void 0 : Tm.recorderMemoryBytes()) && void 0 !== mm ? mm : 0
          },
          staleOr: (Tm, fm) => mm.staleOr(Qw, Tm, fm),
          crash: Tm => {
            mm.reportFault(Qw, Tm)
          },
          allowed: () => !0 === mm.options.get("canRecordReplays"),
          failed: Zw,
          events: (mm, Tm) => {
            this.runtime.recorderEvents(mm, Tm)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: Zw,
          unixNow: () => Date.now()
        });
        const pm = new NA({
          core: {
            bAm: nw(Tm, (mm => Am.bAm(mm)), 0),
            eAm: nw(Tm, (() => {
              Am.eAm()
            }), void 0),
            uq: nw(Tm, (() => Am.uq()), 0),
            SAm: nw(Tm, (() => Am.SAm()), 0)
          },
          buffer: am,
          apiView: () => hm.apiView,
          cmd: xm,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new Nx({
          api: hm,
          cmd: xm,
          loadHook: ex,
          onError: mm => {
            console.warn(`${Ow} the recorded game's replay hooks:`, mm)
          }
        });
        const Em = new lA({
          client: pm,
          buffer: am,
          setHoldDraws: mm => {
            Tm.setHoldDraws(mm)
          },
          notify: JA.i,
          onRecorderState: () => {
            var mm;
            null === (mm = (0, zA.f)()) || void 0 === mm || mm.recorderChanged()
          },
          onViewerChange: () => {
            var mm;
            null === (mm = (0, zA.f)()) || void 0 === mm || mm.viewerChanged()
          },
          onReplayOption: Tm => {
            ! function(mm, Tm) {
              var fm, hm;
              const Am = df.tb[Tm.key];
              if (void 0 === Am) return;
              let am = null !== (fm = Tm.value) && void 0 !== fm ? fm : JSON.parse(JSON.stringify(null !== (hm = Dw.e[Am]) && void 0 !== hm ? hm : null));
              if (null !== Tm.value && Tm.key < df.Qb.Environment && "string" === typeof am) try {
                am = JSON.parse(am)
              } catch (xm) {
                return void console.warn(`${Rw} a replay's ${Am} isn't JSON`, xm)
              }
              mm.applyNewClientOptions({
                [Am]: am
              })
            }(mm.options, Tm)
          },
          onReplayUiEvent: ow,
          onReplayOpened: Tm => {
            this.entityHooks.opened((0, Zm.Pb)(Tm)), mm.replayShaderPack(Tm)
          },
          meshPending: () => {
            var mm, fm;
            return null !== (mm = null === (fm = Tm.lastHeader) || void 0 === fm ? void 0 : fm.renderPending) && void 0 !== mm ? mm : 0
          },
          viewerOpen: cA.d,
          download: mm => {
            (0, QA.i)(mm)
          }
        });
        this.runtime = Em, hm.replay = Em.sink, (0, zA.r)(Em);
        const om = new vA({
          live: () => {
            var mm;
            return !Tm.isStopped && !0 === (null === (mm = Em.currentViewer) || void 0 === mm ? void 0 : mm.inPlayback)
          },
          cmd: xm,
          dragScale: ma
        });
        this.freecam = om, (0, zA.p)(om), this.recordedOptions = function(mm, Tm) {
          const fm = df.tb,
            hm = fm.map(((fm, hm) => Tm.subscribe(fm, (Tm => {
              mm.setOption(hm, Vw(Tm))
            }))));
          return {
            sendAll() {
              fm.forEach(((fm, hm) => {
                mm.setOption(hm, Vw(Tm.get(fm)))
              }))
            },
            stop() {
              for (const mm of hm) mm()
            }
          }
        }(Em.recorder, mm.options), this.stops = [(0, xh.p)((mm => {
          om.flush();
          try {
            this.replay.beforeFrame(mm)
          } catch (Tm) {
            this.deps.reportFault("replayFrame", Tm)
          }
        })), (0, xh.z)(((mm, Tm) => {
          try {
            this.recorder.afterFrame(), Tm && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (fm) {
            this.deps.reportFault("recorderFrame", fm)
          }
          try {
            Em.afterFrame(mm)
          } catch (fm) {
            this.deps.reportFault("replayRuntime", fm)
          }
        })), Iw(Em), () => {
          this.recordedOptions.stop()
        }, jw(Em.recorder), (0, BA.g)((mm => {
          let {
            action: Tm,
            down: fm
          } = mm;
          var hm;
          fm && (null === (hm = (0, zA.f)()) || void 0 === hm || hm.keyDown(Tm))
        }))];
        const Om = () => {
          const mm = Em.currentViewer;
          return !0 === (null === mm || void 0 === mm ? void 0 : mm.isOpen) ? mm : null
        };
        (0, nA.f)({
          open: (mm, Tm) => this.open(mm, Tm),
          replayKey: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Om()) || void 0 === Tm ? void 0 : Tm.id) && void 0 !== mm ? mm : null
          },
          saveRefusal: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Om()) || void 0 === Tm ? void 0 : Tm.saveRefusal) && void 0 !== mm ? mm : null
          },
          encode: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Om()) || void 0 === Tm ? void 0 : Tm.save()) && void 0 !== mm ? mm : Promise.resolve(null)
          },
          fileHandle: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Em.currentViewer) || void 0 === Tm ? void 0 : Tm.fileHandle) && void 0 !== mm ? mm : null
          },
          markSaved: (mm, Tm) => {
            var fm;
            null === (fm = Em.currentViewer) || void 0 === fm || fm.markSaved(mm, Tm)
          }
        })
      }
      netEvent(mm) {
        if ("connection" === mm.type)
          if (mm.phase === Em.L.Activated) {
            this.activeConn = mm.conn;
            const Tm = this.deps.sessionInfo(mm.conn);
            null !== Tm && (this.runtime.activated({
              lobbyType: (0, km.r)(Tm.lobbyName),
              gameNameWithVariation: Tm.gameNameWithVariation,
              lobbyName: Tm.lobbyName
            }), this.recordedOptions.sendAll())
          } else mm.phase !== Em.L.Left && mm.phase !== Em.L.Closed || mm.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const mm of this.stops) mm();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, zA.j)() === this.runtime && (0, zA.r)(null), (0, zA.i)() === this.freecam && (0, zA.p)(null), (0, nA.f)(Jw), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(mm, Tm) {
        const {
          running: fm
        } = this.deps;
        if (fm.isStopped) throw new Error(JA.e.coreStopped.text);
        if (mm.byteLength > 67108864) throw new Error(JA.e.cantOpen.text);
        let hm;
        try {
          hm = await async function(mm) {
            const Tm = await mm.loadViewer();
            return Tm.inPlayback || (0, xh.J)().leaveGame(null), Tm
          }(this.runtime)
        } catch (Am) {
          throw console.warn(`${Ow} the replay viewer didn't load`, Am), new Error(JA.e.viewerLoadFailed.text)
        }
        if (fm.isStopped) throw new Error(JA.e.coreStopped.text);
        await hm.open(mm, Tm)
      }
    }
    var bw = fm(1928);

    function Sw(mm, Tm) {
      const {
        aux: fm,
        payload: hm
      } = function(mm) {
        return {
          aux: mm.reset ? Em.cc.ResetFirst : 0,
          payload: Nw(mm.changes)
        }
      }(Tm);
      mm.queueOptions(fm, hm) && (Tm.reset && bw.b.reset(), bw.b.apply(Tm.changes))
    }
    const ew = new TextEncoder;

    function Nw(mm) {
      const Tm = new Gw;
      return Pw(Tm, mm), Tm.bytes()
    }
    class Gw {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(mm) {
        if (this.len + mm <= this.buf.length) return;
        const Tm = new Uint8Array(Math.max(2 * this.buf.length, this.len + mm));
        Tm.set(this.buf.subarray(0, this.len)), this.buf = Tm, this.view = new DataView(Tm.buffer)
      }
      u8(mm) {
        this.room(1), this.buf[this.len++] = mm
      }
      tagged(mm, Tm, fm) {
        this.room(1 + Tm), this.buf[this.len++] = mm, 1 === Tm ? this.view.setUint8(this.len, fm) : 2 === Tm ? this.view.setUint16(this.len, fm) : this.view.setUint32(this.len, fm), this.len += Tm
      }
      signed(mm, Tm, fm) {
        this.room(1 + Tm), this.buf[this.len++] = mm, 1 === Tm ? this.view.setInt8(this.len, fm) : 2 === Tm ? this.view.setInt16(this.len, fm) : this.view.setInt32(this.len, fm), this.len += Tm
      }
      f64(mm) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, mm), this.len += 8
      }
      raw(mm) {
        this.room(mm.length), this.buf.set(mm, this.len), this.len += mm.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function Xw(mm, Tm, fm, hm, Am, am, xm) {
      Tm < hm ? mm.u8(fm | Tm) : null !== Am && Tm < 256 ? mm.tagged(Am, 1, Tm) : Tm < 65536 ? mm.tagged(am, 2, Tm) : mm.tagged(xm, 4, Tm)
    }

    function Pw(mm, Tm) {
      switch (typeof Tm) {
        case "undefined":
          return void mm.raw(Hw);
        case "boolean":
          return void mm.u8(Tm ? 195 : 194);
        case "number":
          return void
          function(mm, Tm) {
            Tm >>> 0 === Tm ? Tm < 128 ? mm.u8(Tm) : Tm < 256 ? mm.tagged(204, 1, Tm) : Tm < 65536 ? mm.tagged(205, 2, Tm) : mm.tagged(206, 4, Tm) : (Tm | 0) === Tm ? Tm >= -32 ? mm.u8(255 & Tm) : Tm >= -128 ? mm.signed(208, 1, Tm) : Tm >= -32768 ? mm.signed(209, 2, Tm) : mm.signed(210, 4, Tm) : mm.f64(Tm)
          }(mm, Tm);
        case "string": {
          const fm = ew.encode(Tm);
          return Xw(mm, fm.length, 160, 32, 217, 218, 219), void mm.raw(fm)
        }
        case "object":
          break;
        default:
          return void mm.u8(192)
      }
      if (null === Tm) mm.u8(192);
      else if (Array.isArray(Tm)) {
        Xw(mm, Tm.length, 144, 16, null, 220, 221);
        for (const fm of Tm) Pw(mm, fm)
      } else if (Tm instanceof Uint8Array) Xw(mm, Tm.length, 0, 0, 196, 197, 198), mm.raw(Tm);
      else {
        const fm = Object.keys(Tm);
        Xw(mm, fm.length, 128, 0, null, 222, 223);
        for (const hm of fm) Pw(mm, hm), Pw(mm, Tm[hm])
      }
    }
    const Hw = new Uint8Array([212, 0, 0]);
    var yw = fm(42637),
      Cw = fm(42641),
      rw = fm(41024),
      sw = fm(41060),
      lw = fm(2876);
    const Mw = [1e3, 3e3, 9e3];
    class uw {
      constructor(mm) {
        this.host = mm, this.sets = new Map, this.table = [], this.generation = 0, this.PO = !1
      }
      onEvent(mm) {
        const Tm = function(mm) {
          if (mm.byteLength !== Em.sd) return null;
          const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
          return {
            want: Tm.getUint16(0, !0),
            release: Tm.getUint16(2, !0)
          }
        }(mm);
        Tm && !this.PO && (Tm.release !== Em.wd && this.release(Tm.release), Tm.want !== Em.wd && this.want(Tm.want))
      }
      reset(mm) {
        if (!this.PO) {
          for (const [mm, Tm] of this.sets) "ready" === Tm.state && this.releaseAll(Tm.distinct), this.sets.delete(mm);
          this.table = mm, this.generation++
        }
      }
      dispose() {
        if (this.PO) return;
        this.PO = !0, this.generation++, this.table = [];
        const mm = [...this.sets.values()];
        this.sets.clear();
        let Tm = null;
        for (const hm of mm)
          for (const mm of "ready" === hm.state ? hm.distinct : []) try {
            this.host.Ufm(mm)
          } catch (fm) {
            Tm ??= {
              error: fm
            }
          }
        if (Tm) throw Tm.error
      }
      isReady(mm) {
        var Tm;
        return "ready" === (null === (Tm = this.sets.get(mm)) || void 0 === Tm ? void 0 : Tm.state)
      }
      want(mm) {
        const Tm = this.sets.get(mm);
        if ("loading" === (null === Tm || void 0 === Tm ? void 0 : Tm.state)) return Tm.wanted = !0, void this.capAnswer(mm, Tm);
        if ("ready" === (null === Tm || void 0 === Tm ? void 0 : Tm.state)) return void this.host.sendReady(Lw(mm, Tm.images, Tm.size));
        const fm = this.table[mm];
        if (!fm || 1 !== fm.urls.length && fm.urls.length !== df.bc.CubeFaces) return this.host.sendReady(vw(mm)), void this.host.onLoadFailed(mm, "", new Error(`no image set ${mm}`));
        const hm = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(mm, hm), this.load(mm, fm, hm, this.generation, 0), this.capAnswer(mm, hm)
      }
      capAnswer(mm, Tm) {
        this.host.wait(4e3, (() => {
          this.sets.get(mm) === Tm && Tm.wanted && this.host.sendReady(vw(mm))
        }))
      }
      load(mm, Tm, fm, hm, Am) {
        const am = [...new Set(Tm.urls)];
        Promise.allSettled(am.map((mm => this.host.loadImage(mm, Tm.orientation)))).then((xm => {
          const wm = xm.flatMap((mm => "fulfilled" === mm.status ? [mm.value] : [])),
            Dm = hm === this.generation && this.sets.get(mm) === fm,
            im = xm.findIndex((mm => "rejected" === mm.status));
          if (!Dm || !fm.wanted) return this.PO ? void this.releaseAfterDispose(wm.map(Bw)) : (this.releaseAll(wm.map(Bw)), void(Dm && this.sets.delete(mm)));
          im < 0 ? this.loaded(mm, Tm, am, wm) : (this.releaseAll(wm.map(Bw)), this.host.sendReady(vw(mm)), Am < Mw.length ? this.host.wait(Mw[Am], (() => {
            hm === this.generation && this.sets.get(mm) === fm && (fm.wanted ? this.load(mm, Tm, fm, hm, Am + 1) : this.sets.delete(mm))
          })) : (this.sets.delete(mm), this.host.onLoadFailed(mm, am[im], xm[im].reason)))
        }))
      }
      loaded(mm, Tm, fm, hm) {
        const [Am] = hm, am = [Am.width, Am.height], xm = hm.every((mm => mm.width === am[0] && mm.height === am[1])), wm = Tm.urls.length === df.bc.CubeFaces;
        if (!xm || am[0] <= 0 || am[1] <= 0 || am[0] > 65535 || am[1] > 65535 || wm && am[0] !== am[1]) {
          this.releaseAll(hm.map(Bw)), this.sets.delete(mm), this.host.sendReady(vw(mm));
          const fm = hm.map((mm => `${mm.width}x${mm.height}`));
          return void this.host.onLoadFailed(mm, Tm.urls[0], new Error(`set ${mm}'s images can't make its texture: ${fm.join(", ")}`))
        }
        const Dm = Tm.urls.map((mm => hm[fm.indexOf(mm)].id)),
          im = hm.map(Bw);
        this.sets.set(mm, {
          state: "ready",
          images: Dm,
          distinct: im,
          size: am
        }), this.host.sendReady(Lw(mm, Dm, am))
      }
      release(mm) {
        const Tm = this.sets.get(mm);
        "loading" === (null === Tm || void 0 === Tm ? void 0 : Tm.state) ? Tm.wanted = !1: "ready" === (null === Tm || void 0 === Tm ? void 0 : Tm.state) && (this.releaseAll(Tm.distinct), this.sets.delete(mm))
      }
      releaseAll(mm) {
        for (const Tm of mm) this.host.Ufm(Tm)
      }
      releaseAfterDispose(mm) {
        for (const Tm of mm) try {
          this.host.Ufm(Tm)
        } catch {}
      }
    }

    function Bw(mm) {
      return mm.id
    }

    function Lw(mm, Tm, fm) {
      const hm = new Uint8Array(df.bc.SkyImagesReadyBytes),
        Am = new DataView(hm.buffer);
      return Am.setUint16(0, mm, !0), Am.setUint16(2, Tm.length, !0), Am.setUint16(4, fm[0], !0), Am.setUint16(6, fm[1], !0), Tm.slice(0, df.bc.CubeFaces).forEach(((mm, Tm) => {
        Am.setUint32(8 + 4 * Tm, mm, !0)
      })), hm
    }

    function vw(mm) {
      const Tm = new Uint8Array(df.bc.SkyImagesReadyBytes),
        fm = new DataView(Tm.buffer);
      return fm.setUint16(0, mm, !0), fm.setUint16(2, df.bc.Failed, !0), Tm
    }
    let tw = Promise.resolve();
    async function Uw(mm, Tm) {
      let fm;
      try {
        fm = await (0, lw.I)(mm)
      } catch (am) {
        throw new rw.c("fetch", mm, {
          cause: am
        })
      }
      const hm = tw.then((() => async function(mm, Tm) {
        const fm = new Blob([mm.slice()]);
        let hm = await createImageBitmap(fm, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: Tm
        });
        const Am = 1024 / Math.max(hm.width, hm.height);
        if (Am < 1) {
          const mm = hm;
          try {
            hm = await createImageBitmap(mm, {
              resizeWidth: Math.max(1, Math.round(mm.width * Am)),
              resizeHeight: Math.max(1, Math.round(mm.height * Am)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            mm.close()
          }
        }
        return hm
      }(fm, Tm)));
      let Am;
      tw = hm.catch((() => {}));
      try {
        Am = await hm
      } catch (am) {
        throw new rw.c("decode", mm, {
          cause: am
        })
      }
      return {
        id: (0, rw.l)(Am),
        width: Am.width,
        height: Am.height
      }
    }
    var dw = fm(2123),
      gw = fm(34122),
      Ww = fm(39345);
    const Fw = dw.d.length,
      mD = new Set([...dw.d, "earth"]);

    function TD(mm) {
      const Tm = [],
        fm = [],
        hm = (mm, hm) => {
          if ("custom" === hm.type) {
            fm.push({
              id: mm,
              kind: df.bc.KindCustom,
              set: Tm.length,
              earth: null
            });
            const Am = [hm.px, hm.py, hm.pz, hm.nx, hm.ny, hm.nz];
            Tm.push({
              urls: (0, Ww.f)(Am),
              orientation: "none"
            })
          } else fm.push({
            id: mm,
            kind: df.bc.KindEarth,
            set: 0,
            earth: hm
          })
        };
      dw.d.forEach(((Tm, fm) => {
        var Am;
        hm(fm, null !== (Am = fD(mm[Tm])) && void 0 !== Am ? Am : gw.t[Tm])
      }));
      const Am = fD(mm.earth);
      "earth" === (null === Am || void 0 === Am ? void 0 : Am.type) && hm(Fw, Am);
      const am = new TextEncoder,
        xm = [],
        wm = [];
      for (const [om, Om] of Object.entries(mm)) {
        const mm = mD.has(om) ? null : fD(Om);
        if (null === mm) continue;
        const Tm = am.encode(om);
        Tm.length > 255 ? wm.push(`Ignoring texture pack skybox ${om}, whose name is over 255 bytes`) : xm.length === df.bc.MaxAdded ? wm.push(`Ignoring texture pack skybox ${om}, past the ${df.bc.MaxAdded} skies a pack can add`) : (xm.push(Tm), hm(df.bc.AddedId, mm))
      }
      const Dm = Tm.length;
      Tm.push({
        urls: gw.i.map((mm => gw.m + mm)),
        orientation: "none"
      }), Tm.push({
        urls: [gw.p],
        orientation: "flipY"
      }), Tm.push({
        urls: [gw.e],
        orientation: "flipY"
      });
      const im = df.bc.SkyTableHeaderBytes + fm.length * df.bc.SkyTableEntryBytes,
        Rm = new Uint8Array(im + xm.reduce(((mm, Tm) => mm + 1 + Tm.length), 0)),
        pm = new DataView(Rm.buffer);
      pm.setUint16(0, Dm, !0), pm.setUint16(2, Dm + 1, !0), pm.setUint16(4, Dm + 2, !0), pm.setUint16(6, fm.length, !0), fm.forEach(((mm, Tm) => {
        const fm = df.bc.SkyTableHeaderBytes + Tm * df.bc.SkyTableEntryBytes;
        pm.setUint16(fm, mm.id, !0), pm.setUint8(fm + 2, mm.kind);
        const hm = fm + 4;
        mm.earth ? function(mm, Tm, fm) {
          const hm = mm;
          let Am = 0,
            am = 0;
          for (const [xm, wm] of hD) {
            const mm = hm[xm];
            "number" === typeof mm && Number.isFinite(mm) && (Tm.setFloat32(fm + 4 * wm, mm, !0), Am |= 1 << wm)
          }
          for (const [xm, wm, Dm] of AD) {
            const mm = hm[xm];
            Array.isArray(mm) && 3 === mm.length && mm.every((mm => "number" === typeof mm && Number.isFinite(mm))) && (mm.forEach(((mm, hm) => {
              Tm.setFloat32(fm + Dm + 4 * hm, mm, !0)
            })), Am |= wm)
          }
          aD.forEach(((mm, am) => {
            let [xm, wm] = mm;
            const Dm = hm[xm];
            "number" === typeof Dm && Number.isFinite(Dm) && (Tm.setFloat32(fm + df.w.CameraOffsetAt + 4 * am, Dm, !0), Am |= wm)
          }));
          for (const [xm, wm] of xD) {
            const mm = hm[xm];
            null !== mm && void 0 !== mm && (Am |= wm, mm && (am |= wm >>> 14))
          }
          Tm.setUint32(fm + df.w.PresentAt, Am, !0), Tm.setUint8(fm + df.w.FlagsAt, am)
        }(mm.earth, pm, hm) : pm.setUint16(hm, mm.set, !0)
      }));
      let Em = im;
      for (const om of xm) Rm[Em] = om.length, Rm.set(om, Em + 1), Em += 1 + om.length;
      return {
        payload: Rm,
        sets: Tm,
        leftOut: wm
      }
    }

    function fD(mm) {
      if ("object" !== typeof mm || null === mm) return null;
      const Tm = mm;
      if ("earth" === Tm.type) return mm;
      return "custom" === Tm.type && ["px", "py", "pz", "nx", "ny", "nz"].every((mm => {
        const fm = Tm[mm];
        return "string" === typeof fm && fm.length > 0
      })) ? mm : null
    }
    const hD = [
        ["inclination", df.w.Inclination],
        ["turbidity", df.w.Turbidity],
        ["luminance", df.w.Luminance],
        ["rayleigh", df.w.Rayleigh],
        ["mieCoefficient", df.w.MieCoefficient],
        ["mieDirectionalG", df.w.MieDirectionalG],
        ["distance", df.w.Distance],
        ["azimuth", df.w.Azimuth]
      ],
      AD = [
        ["sunPosition", df.w.SunPosition, df.w.SunPositionAt],
        ["up", df.w.Up, df.w.UpAt],
        ["vertexTint", df.w.VertexTint, df.w.VertexTintAt]
      ],
      aD = [
        ["xCameraOffset", df.w.CameraOffsetX],
        ["yCameraOffset", df.w.CameraOffsetY],
        ["zCameraOffset", df.w.CameraOffsetZ]
      ],
      xD = [
        ["useSunPosition", df.w.UseSunPosition],
        ["dithering", df.w.Dithering],
        ["infiniteDistance", df.w.InfiniteDistance]
      ];

    function wD(mm, Tm, fm) {
      const hm = new iD({
        writeCmd: mm,
        warn: Tm,
        followPack: DD(fm, Tm)
      });
      return hm.start(), hm
    }

    function DD(mm, Tm) {
      return fm => {
        let hm = () => {};
        const Am = mm((mm => {
          hm(), hm = () => {}, null !== mm ? hm = mm.subscribe((mm => {
            fm(function(mm, Tm, fm) {
              if ("object" !== typeof mm || null === mm) return null;
              const hm = mm.skyBoxes;
              if ("object" !== typeof hm || null === hm) return null;
              if ("player" === Tm) return hm;
              return Object.fromEntries(Object.entries(hm).filter((mm => {
                let [Tm, hm] = mm;
                return !! function(mm) {
                  if ("object" !== typeof mm || null === mm) return !1;
                  return "earth" === mm.type || Object.entries(mm).every((mm => {
                    let [Tm, fm] = mm;
                    return "type" === Tm || ("" === (hm = fm) || null !== function(mm) {
                      var Tm, fm, hm;
                      return "string" !== typeof mm ? null : null !== (Tm = null === (fm = RD.exec(mm)) || void 0 === fm || null === (hm = fm.groups) || void 0 === hm ? void 0 : hm.base64) && void 0 !== Tm ? Tm : null
                    }(hm));
                    var hm
                  }))
                }(hm) || (fm(`Ignoring texture pack skybox ${Tm}, whose faces are not all data URLs`, null), !1)
              })))
            }(mm.pack, null === mm.gameSource ? "player" : "customGame", Tm))
          })) : fm(null)
        }));
        return () => {
          Am(), hm()
        }
      }
    }
    class iD {
      constructor(mm) {
        var Tm, fm, hm;
        this.host = mm, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.PO = !1, this.wait = null !== (Tm = mm.wait) && void 0 !== Tm ? Tm : (mm, Tm) => {
          setTimeout(Tm, mm)
        }, this.loader = new uw({
          loadImage: null !== (fm = mm.loadImage) && void 0 !== fm ? fm : Uw,
          Ufm: null !== (hm = mm.Ufm) && void 0 !== hm ? hm : rw.o,
          sendReady: mm => {
            this.queue.push({
              kind: df.bc.SkyImagesReady,
              payload: mm
            })
          },
          onLoadFailed: (Tm, fm, hm) => {
            mm.warn(`sky image set ${Tm} (${fm}) didn't load: the last sky stays`, hm)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(sw.d, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((mm => {
          this.write(null !== mm && void 0 !== mm ? mm : {})
        }))
      }
      onEvent(mm) {
        this.loader.onEvent(mm)
      }
      drain() {
        if (0 === this.queue.length) return;
        let mm = 0;
        for (; mm < this.queue.length && this.host.writeCmd(this.queue[mm].kind, 0, this.queue[mm].payload);) mm++;
        mm > 0 && this.queue.splice(0, mm)
      }
      dispose() {
        this.PO = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(mm) {
        if (this.PO) return;
        const Tm = TD(mm);
        if (!(this.written && (fm = this.written, hm = Tm, fm.payload.length === hm.payload.length && fm.payload.every(((mm, Tm) => mm === hm.payload[Tm])) && fm.sets.length === hm.sets.length && fm.sets.every(((mm, Tm) => {
            const fm = hm.sets[Tm];
            return mm.orientation === fm.orientation && mm.urls.length === fm.urls.length && mm.urls.every(((mm, Tm) => mm === fm.urls[Tm]))
          }))))) {
          var fm, hm;
          for (const mm of Tm.leftOut) this.host.warn(mm, null);
          this.written = Tm, this.loader.reset(Tm.sets), this.queue = this.queue.filter((mm => mm.kind !== df.bc.SkyImagesReady)), this.queue.push({
            kind: df.bc.SkyTable,
            payload: Tm.payload
          })
        }
      }
    }
    const RD = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var pD = fm(2792),
      ED = fm(2987),
      oD = fm(298),
      OD = fm(190),
      YD = fm(2796),
      qD = fm(2803),
      jD = fm(281),
      VD = fm(284),
      ID = fm(2893),
      KD = fm(2907),
      QD = fm(2923),
      nD = fm(115),
      JD = fm(330),
      cD = fm(40913);
    class zD {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, uA.g)(Qh.P, (mm => {
          this.onReply((0, MA.f)(Qh.P, mm), performance.now())
        }))
      }
      onFrame(mm, Tm) {
        null === this.id ? this.id = mm : mm !== this.id && (this.id = mm, this.sentMs = document.hidden ? null : Tm)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(mm, Tm) {
        mm === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(Tm - this.sentMs), this.sentMs = null)
      }
      take() {
        const mm = this.roundTripMs;
        return this.roundTripMs = null, mm
      }
      stop() {
        this.stopReplies()
      }
    }
    class ZD {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(mm, Tm, fm, hm) {
        const Am = mm - this.sampled >>> 0,
          am = Tm - this.timed >>> 0,
          xm = fm - this.frameUs >>> 0,
          wm = this.primed;
        return this.sampled = mm, this.timed = Tm, this.frameUs = fm, this.primed = !0, !(!wm || Am > 64 || am > 64) && (hm && xm <= 1e6 * am && (this.windowTimed += am, this.windowUs += xm), hm && Am > 0)
      }
      reset() {}
      snapshotAndReset() {
        const mm = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: mm,
          submitToDoneMs: null
        }
      }
    }
    const kD = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class bD {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(mm, Tm) {
        const fm = Math.min(4096, this.count + Tm);
        this.samples.fill(mm, this.count, fm), this.count = fm
      }
      clear() {
        this.count = 0
      }
      take() {
        const mm = this.count;
        if (this.count = 0, mm < 30) return kD;
        const Tm = this.samples.subarray(0, mm).sort(),
          fm = fm => Tm[Math.min(mm - 1, Math.floor(fm * mm))];
        return {
          lagP50Ms: fm(.5),
          lagP90Ms: fm(.9)
        }
      }
    }
    class SD {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new bD
      }
      onFrame(mm, Tm) {
        const fm = mm.headerWord(df.L.Pacing),
          hm = mm.headerWord(df.L.PacingLagUs),
          Am = (fm >>> df.bb.LagsShift) - (this.word >>> df.bb.LagsShift) & df.bb.CountMask,
          am = Am > 0 ? (hm - this.lagUs >>> 0) / Am / 1e3 : 0,
          xm = this.primed && Am <= 64 && am <= 6e4;
        this.word = fm, this.lagUs = hm, this.primed = !0, xm && Tm && Am > 0 && 0 !== (fm & df.bb.Defaulted) && this.lags.add(am, Am)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(mm) {
        return mm ? this.lags.take() : (this.lags.clear(), kD)
      }
    }
    var eD = fm(315);

    function ND() {
      return Date.now() - performance.now()
    }
    class GD {
      constructor() {
        this.rafs = 0, this.ni = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = ND(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, eD.f)(), this.onBlur = () => {
          this.focused = !1, this.blurred = !0
        }, this.onFocus = () => {
          this.focused = !0
        }, this.onLifecycle = () => {
          this.resumed = !0
        }, window.addEventListener("blur", this.onBlur), window.addEventListener("focus", this.onFocus), document.addEventListener("freeze", this.onLifecycle), document.addEventListener("resume", this.onLifecycle)
      }
      animationFrame() {
        this.rafs++
      }
      paced() {
        (0 === this.ni || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.ni++, this.heldAtRaf = this.rafs
      }
      words(mm) {
        const Tm = mm ? this.rafs - 1 : this.rafs;
        return function(mm) {
          let Tm = 0 === mm.rafs ? "raf:none" : "raf:some";
          return mm.ni > 0 && (Tm += " pace:held"), mm.heldRunMs > 1e4 && (Tm += " pace:stalled"), mm.blurred && (Tm += " blur"), mm.resumed && (Tm += " resumed"), mm.embedded && (Tm += " embedded"), mm.clockGainMs > 2e3 && (Tm += " clockjump"), Tm
        }({
          clockGainMs: ND() - this.startClockOffsetMs,
          rafs: Tm,
          ni: this.ni,
          heldRunMs: this.ni > 0 && this.heldAtRaf === Tm ? performance.now() - this.heldRunStartMs : 0,
          blurred: this.blurred,
          resumed: this.resumed,
          embedded: this.embedded
        })
      }
      restart(mm) {
        this.rafs = 0, this.ni = 0, this.heldAtRaf = -1, this.startMs = mm, this.startClockOffsetMs = ND(), this.blurred = !this.focused, this.resumed = !1
      }
      stop() {
        window.removeEventListener("blur", this.onBlur), window.removeEventListener("focus", this.onFocus), document.removeEventListener("freeze", this.onLifecycle), document.removeEventListener("resume", this.onLifecycle)
      }
    }
    var XD = fm(34230),
      PD = fm(2898),
      HD = fm(40971),
      yD = fm(34225),
      CD = fm(2808),
      rD = fm(2900);
    const sD = {
      none: !0,
      not_requested: !1,
      webgl_holdback: !1,
      off_after_loss: !1,
      old_intel_driver: !1,
      intel_gen9: !1,
      gpu_class_webgl: !1,
      gpu_wasm_arm: !1,
      safari_26: !1,
      no_webgpu_api: !1,
      no_adapter: !0,
      software_adapter: !0,
      adapter_error: !0,
      load_failed: !0,
      start_no_adapter: !0,
      device_failed: !0,
      start_failed: !0,
      _unloaded: null
    };

    function lD(mm) {
      return new MD(mm)
    }
    class MD {
      constructor(mm) {
        this.shell = mm, this.tracker = new qD.c, this.gpu = new ZD, this.pacing = new SD, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new zD, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.lastDrawnMs = -1, this.stallPending = !1, this.stallGap = new GD, this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.lastDrawnMs = -1, !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.checkMainStall(performance.now(), !1), this.lastDrawnMs = -1
        }, (0, XD.d)(mm.backend, mm.canvas, mm.adapterVendor), this.tracker.start((() => !mm.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, CD.d)("wasm", (() => {
          const {
            n: Tm,
            sampleCount: fm
          } = (0, HD.e)();
          return `${mm.backend}, quality steps aim at up to ${rD.b.target.maxFps} fps, pixel n ${Tm}, msaa ${fm}`
        }), (Tm => {
          Tm.setLoadCounts(mm.readLoadCounts), this.frameDebug = Tm
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(mm) {
        var Tm;
        this.stallGap.animationFrame(), this.tracker.onAnimationFrame(mm), null === (Tm = this.frameDebug) || void 0 === Tm || Tm.animationFrame()
      }
      sendsWent(mm, Tm, fm) {
        this.ping.onFrame(mm.headerWord(df.L.PingSent), Tm), this.sendsStartMs = Tm, this.sendsEndMs = fm
      }
      frameRan(mm, Tm, fm, hm) {
        var Am;
        this.ping.onFrame(mm.headerWord(df.L.PingSent), fm);
        const am = this.tracker;
        this.pacing.onFrame(mm, am.isSampling());
        const xm = mm.headerWord(df.L.TickUs) / 1e3 + (0, xh.K)();
        var wm;
        (am.HV(xm), null === (Am = this.frameDebug) || void 0 === Am || Am.wasmFrame(mm, Tm, fm, hm, am.isSampling(), xm), null !== this.game) && (null === (wm = this.frameDebug) || void 0 === wm || wm.inGame());
        const Dm = this.sendsStartMs >= Tm ? this.sendsEndMs - this.sendsStartMs : 0,
          im = Math.max(0, fm - Tm - xm - Dm);
        if ("drawn" !== hm) return void("paced" === hm ? (this.pacedCpuMs += im, this.stallGap.paced()) : "skipped" === hm && (this.lastDrawnMs = -1));
        this.followGame(), this.checkMainStall(Tm, !0), am.onFrameStart(Tm);
        this.gpu.onFrame(mm.headerWord(df.L.GpuSampled), mm.headerWord(df.L.GpuTimed), mm.headerWord(df.L.GpuFrameUs), am.isSampling()) && am.onGpuSampleStarted(), am.onFrameCpu(im + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(Tm)
      }
      framePaced() {
        var mm;
        this.stallGap.paced(), null === (mm = this.frameDebug) || void 0 === mm || mm.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const mm of this.timers) clearInterval(mm);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.stallGap.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const mm = this.shell.joinedGame();
        if (mm !== this.game) {
          var Tm;
          if (this.game = mm, null !== mm) null === (Tm = this.frameDebug) || void 0 === Tm || Tm.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.lastDrawnMs = -1
        }
        return null !== mm
      }
      checkMainStall(mm, Tm) {
        if (!this.tracker.isSampling()) return void(this.lastDrawnMs = -1);
        const fm = this.tracker.limiterTelemetry.longAnimationFrameTracker,
          hm = this.lastDrawnMs < 0 ? 0 : mm - this.lastDrawnMs;
        this.lastDrawnMs = mm;
        const Am = !this.stallPending && hm > 5e3,
          am = Am ? this.stallGap.words(Tm) : "";
        this.stallGap.restart(mm), this.stallPending || (Am ? (this.stallPending = !0, setTimeout((() => {
          this.stallPending = !1, this.shell.mainStalled(hm, fm.blockingSinceMark(), am)
        }), 0)) : fm.markFrame(mm))
      }
      countFpsFrame(mm) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = mm
        }
        this.fpsFrames++;
        const Tm = mm - this.fpsSpanStartMs;
        if (!(Tm < QD.e)) {
          if (!document.hidden) {
            const mm = 1e3 * this.fpsFrames / Tm;
            this.firstSpanFps ??= mm, this.initialFps = this.firstSpanFps, this.fpsOverTime = mm
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = mm
        }
      }
      flush() {
        const mm = this.followGame(),
          {
            cpuFrameMs: Tm,
            refreshHz: fm,
            cpuBottleneck: Am,
            frameIntervalCv: am,
            ...xm
          } = this.tracker.snapshotAndReset(),
          wm = this.shell.inGame(),
          Dm = wm && this.inGameAtLastFlush,
          im = Dm ? xm : (0, YD.e)(xm),
          Rm = this.pacing.snapshotAndReset(Dm);
        if (this.inGameAtLastFlush = wm, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !mm) return;
        const pm = performance.now(),
          om = (0, KD.s)((0, KD.q)(pm), this.unsentPage),
          Ym = function(mm, Tm, fm, Am, am, xm, wm, Dm) {
            var im, Rm, pm, Em, om;
            const Om = {},
              {
                canvas: Ym
              } = mm,
              qm = (0, ID.h)({
                refreshHz: Tm.refreshHz,
                msaa: mm.msaa(),
                autoMsaaOff: (0, yD.d)()
              });
            for (const jm of (0, ED.h)()) {
              const Vm = jm.name;
              let Im;
              if ((0, oD.q)(Vm)) Im = (0, KD.c)(Vm);
              else if ((0, KD.g)(Vm)) Im = Dm[Vm];
              else if ((0, ID.l)(Vm)) Im = qm[Vm];
              else switch (Vm) {
                case "fps":
                  Im = Am;
                  break;
                case "Ow":
                  Im = am;
                  break;
                case "Iw":
                  Im = (0, PD.F)((0, HD.e)().n);
                  break;
                case "Kw":
                  Im = Math.max(Ym.width, Ym.height);
                  break;
                case "Qw":
                  Im = Math.min(Ym.width, Ym.height);
                  break;
                case "nw":
                  Im = navigator.hardwareConcurrency || null;
                  break;
                case "Jw":
                  Im = (0, gA.getWebGpuSupported)();
                  break;
                case "zw":
                  Im = null === mm.fallbackReason ? null : sD[mm.fallbackReason];
                  break;
                case "Zw":
                  Im = Tm.cpuFrameMs;
                  break;
                case "kw":
                  Im = Tm.refreshHz;
                  break;
                case "bw":
                  Im = Tm.cpuBottleneck;
                  break;
                case "Sw":
                  Im = Tm.frameIntervalCv;
                  break;
                case "ew":
                  Im = Tm.frameMs;
                  break;
                case "Nw":
                  Im = Tm.tickMs;
                  break;
                case "Hw":
                  Im = Tm.mainBusyShare;
                  break;
                case "yw":
                  Im = Tm.mainProbeDelayMs;
                  break;
                case "Gw":
                  Im = Tm.longAnimationFramesPerMin;
                  break;
                case "Xw":
                  Im = Tm.longAnimationFrameTimeShare;
                  break;
                case "Pw":
                  Im = Tm.longAnimationFrameScriptShare;
                  break;
                case "Cw":
                  Im = Tm.gpuPassMs;
                  break;
                case "rw":
                  Im = Tm.gpuSubmitToDoneMs;
                  break;
                case "sw":
                  Im = fm.lagP50Ms;
                  break;
                case "lw":
                  Im = fm.lagP90Ms;
                  break;
                case "TD":
                  Im = (0, pD.d)(xm);
                  break;
                case "Vw":
                  Im = wm;
                  break;
                case "Mw":
                case "uw":
                case "Bw":
                case "Lw":
                case "tw":
                case "Uw":
                case "dw":
                case "gw":
                case "Ww":
                case "Fw":
                case "mD":
                case "fD":
                case "hD":
                case "AD":
                case "aD":
                  Im = null;
                  break;
                case "KD":
                  Im = (0, gA.getPlatformType)();
                  break;
                case "QD":
                  Im = (0, gA.getGpuVendor)();
                  break;
                case "nD":
                  Im = cD.b[mm.backend];
                  break;
                case "JD":
                  Im = (0, nD.d)();
                  break;
                case "cD":
                  Im = (0, gA.getOperatingSystem)();
                  break;
                case "zD":
                  Im = (0, gA.getTrafficSource)();
                  break;
                case "ZD":
                  Im = null !== (im = hm.c.get("gameEntrySource")) && void 0 !== im ? im : OD.e;
                  break;
                case "kD":
                  Im = null !== (Rm = Tm.frameLimiter) && void 0 !== Rm ? Rm : OD.e;
                  break;
                case "bD":
                  Im = (0, jD.h)();
                  break;
                case "SD":
                  Im = null !== (pm = (0, VD.e)()) && void 0 !== pm ? pm : OD.e;
                  break;
                case "eD":
                  Im = (0, jD.d)(Ym.width, Ym.height);
                  break;
                case "ND":
                  Im = (0, ED.i)(-(new Date).getTimezoneOffset());
                  break;
                case "PD":
                  Im = null !== (Em = mm.fallbackReason) && void 0 !== Em ? Em : OD.e;
                  break;
                case "CD":
                  Im = "ready";
                  break;
                case "rD":
                  Im = (0, gA.getSoftwareRenderer)();
                  break;
                case "XD":
                  Im = null !== mm.shaderPackReach() ? "true" : "false";
                  break;
                case "sD":
                  Im = null !== (om = mm.shaderPackReach()) && void 0 !== om && om.sceneDepth ? "true" : "false";
                  break;
                case "lD": {
                  const Tm = mm.shaderPackReach();
                  Im = null !== Tm && void 0 !== Tm && Tm.sunShadow ? "all" : null !== Tm && void 0 !== Tm && Tm.airShadow ? "air" : "none";
                  break
                }
                case "MD":
                  Im = JD.z;
                  break;
                case "GD": {
                  const Tm = mm.FY();
                  Im = null === Tm ? OD.e : String(Tm);
                  break
                }
                case "HD":
                case "yD":
                  Im = OD.e;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${Vm}`)
              }
              if (void 0 === Im) throw new Error(`Metric ${Vm} has no value`);
              Om[Vm] = Im
            }
            return Om
          }(this.shell, {
            cpuFrameMs: Tm,
            refreshHz: fm,
            cpuBottleneck: Am,
            frameIntervalCv: am,
            ...im
          }, Rm, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), om);
        if (! function(mm, Tm, fm) {
            return (0, LT.e)(), mm(Om.q.Send, Tm, fm)
          }(this.shell.writeCmd, Em.qd, function(mm) {
            const Tm = (0, Hm.g)((0, UT.h)(mm)),
              fm = new Uint8Array(Om.ce.BYTES + Tm.length);
            return new DataView(fm.buffer).setUint16(0, UT.e.AnalyticsUpdate, !0), fm.set(Tm, Om.ce.BYTES), fm
          }(Ym))) return this.unsentPage = om, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, pD.c), (0, KD.n)(Ym, "wasm", pm)
      }
    }
    var uD = fm(39724);

    function BD(mm, Tm, fm) {
      const hm = new Map;
      return (0, uD.e)(((mm, fm, hm) => Tm.jR(mm, fm, hm)), ((Tm, fm, Am) => {
        const am = `${Tm},${fm},${Am}`;
        return hm.has(am) || hm.set(am, (0, rT.d)(mm, Tm, fm, Am)), hm.get(am)
      }), fm)
    }
    var LD = fm(39732),
      vD = fm(40962);

    function tD(mm) {
      const Tm = null !== mm && 0 !== (Om.x.playerFlags(mm.api.apiView, 0) & Om.Od.CursorAim);
      Tm !== (0, vD.l)() && (0, vD.F)(Tm, null !== mm)
    }

    function UD(mm) {
      return (0, Kh.d)(Qh.E, mm)
    }
    var dD = fm(41094);
    const gD = new am.f((mm => fm(42644)(`./${mm}/${mm}Client`)));
    let WD = null,
      FD = null;
    async function mi(mm) {
      WD ??= fm.e(27).then((() => fm(39273))).then((mm => {
        FD = mm.createDefaultClientPlugins
      }), (mm => {
        throw WD = null, mm
      })), await Promise.all([gD.load(mm), WD])
    }

    function Ti(mm) {
      mm.load(new HT(th, new gh))
    }
    let fi = !1;
    const Ai = new WeakMap;

    function ai(mm) {
      try {
        mm()
      } catch (Tm) {
        console.error("[bloxd-wasm-client] a session-end step failed", Tm)
      }
    }

    function xi(mm, Tm) {
      ! function() {
        var mm, Tm;
        Bh.Howler.volume();
        const fm = Bh.Howler;
        null === (mm = fm._autoResume) || void 0 === mm || mm.call(fm), null === (Tm = fm._autoSuspend) || void 0 === Tm || Tm.call(fm)
      }(), Tm.audio.prepare();
      const fm = new Km(Tm.core, Tm.memory, Tm.audio);
      let am;
      try {
        am = new VA(fm, Tm.options)
      } catch (Em) {
        return mm.crash(KA.w, Em), null
      }(0, Dm.f)(IA(fm, am));
      const Rm = new kw({
        running: mm,
        api: fm,
        core: Tm.core,
        memory: Tm.memory,
        staleOr: Tm.staleOr,
        reportFault: Tm.reportReplayFault,
        options: Tm.options,
        sessionInfo: Tm.sessionInfo,
        replayShaderPack: Tm.replayShaderPack
      });
      (0, xh.B)();
      const pm = new Ch({
        api: fm,
        tables: am,
        sessionInfo: Tm.sessionInfo,
        gameFactory: mm => gD.loadedFactory(mm),
        defaultPlugins: (mm, Tm, fm, hm) => {
          if (null === FD) throw new Error("The default plugins started before they loaded");
          return FD(mm, Tm, fm, hm)
        },
        serverOptions: Tm.options,
        onNetEvent: mm => {
          Rm.netEvent(mm), Tm.onNetEvent(mm)
        },
        setLocalOptions: Tm => {
          Sw(mm, {
            changes: Tm,
            reset: !1
          })
        },
        playSound: (mm, fm, hm, Am, am, xm, wm) => Tm.audio.playGame(mm, fm, hm, Am, am, xm, wm),
        preloadSounds: mm => {
          Tm.audio.preload(function(mm) {
            const Tm = [];
            for (const fm of mm) {
              const mm = XT(fm);
              mm >= 0 && Tm.push(IT[mm])
            }
            return Tm
          }(mm))
        },
        onSessionEnd: () => {
          ai(Am.q), ai(AA), ai((() => {
            hm.c.set({
              openInGameMenuName: null
            })
          })), ai((() => {
            Tm.audio.endSession()
          }))
        },
        beforeWrite: Tm.beforeWrite,
        beforeOp: Tm.beforeOp,
        cameraScreen: hA,
        showCameraFacing: aA,
        onEventOverflow: Tm.onEventOverflow,
        screenBandY: wm.i,
        replayEntities: Rm.entityHooks,
        hasPackModel: Tm.hasPackModel
      });
      return pm.attach(mm), Ai.set(pm, Rm), Mh(pm.items, Tm.audio),
        function(mm) {
          mm.setClientFreeCameraGrant("isDev", !1);
          const Tm = Tm => {
            mm.setClientFreeCameraGrant("hasDeveloperRank", Tm.playerHasRank("developer"))
          };
          (0, xm.m)("userContextUpdated", Tm)
        }(pm), fi || (fi = !0, (0, xm.m)("appManagerUpdated|openInGameMenuName", (mm => {
          !mm && (0, im.i)().includes(im.c) && (0, im.l)(im.c)
        }))), pm
    }

    function wi(mm) {
      try {
        mm.closeGame()
      } finally {
        var Tm;
        null === (Tm = Ai.get(mm)) || void 0 === Tm || Tm.stop(), Ai.delete(mm)
      }
    }
  },
  42644: (mm, Tm, fm) => {
    var hm = {
      "./bedwars/bedwarsClient": [39394, 9],
      "./bridgeBattle/bridgeBattleClient": [39402, 10],
      "./buildAFactory2/buildAFactory2Client": [38580, 75, 74, 73, 225, 243, 11],
      "./classic/classicClient": [39408, 12],
      "./clutch/clutchClient": [39417, 13],
      "./containmentBreach/containmentBreachClient": [39420, 14],
      "./cooking/cookingClient": [39551, 15],
      "./defusal/defusalClient": [39558, 16],
      "./frontline/frontlineClient": [39564, 75, 74, 73, 17],
      "./goalRush/goalRushClient": [39568, 18],
      "./luckyBedwars/luckyBedwarsClient": [39573, 19],
      "./ninetyNineNights/ninetyNineNightsClient": [39580, 20],
      "./oneBlock/oneBlockClient": [39589, 21],
      "./plots/plotsClient": [39594, 241, 248, 22],
      "./pvpCiv/pvpCivClient": [39661, 23],
      "./skyIslands/skyIslandsClient": [39667, 24],
      "./skyblock/skyblockClient": [38616, 75, 225, 190, 25],
      "./tsunami/tsunamiClient": [39675, 26]
    };

    function Am(mm) {
      if (!fm.o(hm, mm)) return Promise.resolve().then((() => {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }));
      var Tm = hm[mm],
        Am = Tm[0];
      return Promise.all(Tm.slice(1).map(fm.e)).then((() => fm(Am)))
    }
    Am.keys = () => Object.keys(hm), Am.id = 42644, mm.exports = Am
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);