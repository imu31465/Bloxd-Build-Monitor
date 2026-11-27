export const id = 68;
export const ids = [68];
export const modules = {
  39826: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    var ye = He(27);

    function be(ee) {
      return "refetchCode" === ee || "devDownloadJson" === ee || ee.startsWith("Plugin")
    }

    function Me(ee, ie) {
      "refetchCode" !== ee ? "Plugin|MobAiPlugin|ShowPetUi" !== ee ? Promise.all([He.e(120), He.e(121), He.e(116), He.e(118), He.e(240)]).then((() => He(44929))).then((He => {
        let {
          runClientGameMessage: ye
        } = He;
        ye(ee, ie)
      })).catch((ie => {
        console.error(`Game message ${ee} failed`, ie)
      })) : ye.h.yR("showPetUi", ie) : ye.h.yR("refetchCode")
    }
  },
  54196: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      e: () => be
    });
    const ye = ["recording", "freecam", "keyframe"];

    function be() {
      const ee = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(ee[1]) << 32n | BigInt(ee[0])
    }
  },
  34790: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      f: () => Fe
    });
    var ye = He(18);
    const be = 24,
      Me = "farNametags",
      Ke = 1e5;

    function Ue() {
      var ee;
      return null === (ee = ye.e.get("showDistantNametags")) || void 0 === ee || ee
    }

    function Fe() {
      var ee;
      return null !== (ee = function() {
        const ee = new URLSearchParams(window.location.search).get(Me),
          ie = null === ee || "" === ee ? NaN : Number(ee);
        return Number.isFinite(ie) && ie >= 0 ? Math.min(ie, Ke) : null
      }()) && void 0 !== ee ? ee : Ue() ? 0 : be
    }
  },
  45791: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      blockIdOf: () => FJ.b,
      clearWasmCameraScreen: () => zb,
      creativeItemIds: () => Xy.creativeItemIds,
      decodeMapSettings: () => RJ,
      drainTextRerasters: () => iF.b,
      enchantmentPerksOf: () => Xy.enchantmentPerksOf,
      endGameHost: () => OJ,
      followCursorAim: () => oJ,
      followMenuPrefs: () => XM,
      loadAudio: () => XJ,
      loadClientGame: () => pJ,
      loadTextIcons: () => iF.e,
      rasterText: () => eF.f,
      readBoardToEdit: () => UJ,
      readDrawCensus: () => kJ.d,
      setTextHost: () => iF.l,
      setTextLocalPlayer: () => iF.m,
      showInCreativeInvenOf: () => Xy.showInCreativeInvenOf,
      startGameHost: () => gJ,
      startShellAnalytics: () => bJ,
      startSkyFeed: () => dF,
      textChanged: () => iF.t,
      warmText: () => eF.m,
      wasmCameraScreen: () => Xb
    });
    He(37314);
    var ye = He(18),
      be = He(37639),
      Me = He(39992),
      Ke = He(27),
      Ue = He(3752),
      Fe = He(37637),
      Je = He(1246),
      oe = He(604),
      Re = He(39037),
      ke = He(5271),
      qe = He(41743),
      fe = He(41694);
    const Te = fe.zb / 4,
      pe = fe.p.PlaySound,
      Xe = fe.p.SoundReset,
      ze = ke.U.ReplayFailed,
      Be = ke.U.RecorderEvent;
    class Ee {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.core = ee, this.memory = ie, this.audio = He, this.serverIds = new Int32Array(256).fill(fe.$c), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.view = new DataView(new ArrayBuffer(fe.v.BYTES)), this.renderPtr = 0, this.bk = 0, this.renderCapacity = 0, this.render = new Float32Array(0), this.visPtr = 0, this.vis = new Uint8Array(0), this.renderBuffer = null, this.eventsBuffer = null, this.eventsPtr = 0, this.eventsLen = 0, this.events = new DataView(new ArrayBuffer(0)), this.audioView = null, this.scratchPtr = -1, this.scratchView = null, this.corruption = null, this.replay = null, this.queries = new fe.Y(ee, (() => {
          this.scratchPtr = -1, this.ensureViews()
        }))
      }
      scratch() {
        return this.scratchPtr < 0 && (this.scratchPtr = this.core.MKe(), this.ensureViews()), this.scratchPtr
      }
      eventBytes(ee, ie) {
        const He = this.eventView();
        return new Uint8Array(He.buffer, He.byteOffset + ee, ie)
      }
      get apiView() {
        return this.ensureViews(), this.view
      }
      ensureViews() {
        this.memory().buffer !== this.buffer && this.reView()
      }
      get localId() {
        return fe.v.localId(this.apiView, 0)
      }
      localDeaths() {
        return fe.v.localDeaths(this.apiView, 0)
      }
      rereadDirectory() {
        const ee = this.apiView,
          ie = fe.v.entRenderPtr(ee, 0),
          He = fe.v.entVisPtr(ee, 0),
          ye = fe.v.entCapacity(ee, 0);
        if (ie !== this.renderPtr || He !== this.visPtr || ye !== this.bk || this.renderBuffer !== this.buffer) {
          this.renderPtr = ie, this.visPtr = He, this.bk = ye, this.renderBuffer = this.buffer;
          const ee = this.memoryView(Float32Array, ie, ye * Te, "the render array"),
            be = this.memoryView(Uint8Array, He, ye, "the visibility array");
          this.renderCapacity = ee && be ? ye : 0, this.render = ee && be ? ee : new Float32Array(0), this.vis = ee && be ? be : new Uint8Array(0)
        }
      }
      memoryView(ee, ie, He, ye) {
        try {
          return (0, qe.k)(ee, this.memory().buffer, ie, He, ye)
        } catch (be) {
          return this.keepCorruption(be), null
        }
      }
      memoryData(ee, ie, He, ye) {
        try {
          return (0, qe.d)(this.memory().buffer, ee, ie, He, ye)
        } catch (be) {
          return this.keepCorruption(be), null
        }
      }
      scratchData(ee, ie) {
        const He = this.scratch(),
          ye = this.scratchView;
        return (null === ye || void 0 === ye ? void 0 : ye.buffer) === this.memory().buffer && ye.byteOffset === He && ye.byteLength >= ee ? ye : (this.scratchView = this.memoryData(He, ee, 8, ie), this.scratchView)
      }
      reportCorruption(ee) {
        this.keepCorruption(new qe.c(ee))
      }
      keepCorruption(ee) {
        if (!(ee instanceof qe.c)) throw ee;
        this.corruption ??= ee
      }
      throwCorruption() {
        if (this.corruption) throw this.corruption
      }
      walk(ee, ie, He) {
        this.rereadDirectory(), this.throwCorruption();
        const {
          ptr: ye,
          len: be
        } = ee;
        this.eventsPtr = ye, this.eventsLen = be, this.eventsBuffer = null;
        const Me = this.eventView();
        for (let Je = 0; Je < be;) {
          const ee = Me.getUint32(Je, !0),
            He = 65535 & ee,
            ye = ee >>> 16,
            be = Je + ke.S;
          if (He === fe.p.EntitySpawned) {
            var Ke;
            if (ye !== fe.Hb.BYTES) throw te(He, Je, ye);
            const ee = fe.Hb.serverId(Me, be);
            this.spawned(ee, fe.Hb.index(Me, be), fe.Hb.kind(Me, be)), null === (Ke = ie.entityAdded) || void 0 === Ke || Ke.call(ie, ee)
          } else if ((He === fe.p.ChunkSlot || He === fe.p.EntityInfoChanged) && !(0, fe.oe)(He, Me, be, ye, ie)) throw te(He, Je, ye);
          Je = be + (0, ke.le)(ye)
        }
        try {
          var Ue;
          null === (Ue = ie.afterPrescan) || void 0 === Ue || Ue.call(ie), this.throwCorruption(), !He() && this.dispatch(ee, ie, He) && (this.throwCorruption(), this.applyListener(), ie.afterWalk(ee.kind)), this.throwCorruption()
        } catch (Fe) {
          throw Fe instanceof qe.c && (this.corruption ??= Fe), Fe
        } finally {
          He() || null !== this.corruption || this.applyDespawns(be, ie)
        }
      }
      applyDespawns(ee, ie) {
        const He = this.eventView();
        for (let be = 0; be < ee;) {
          const ee = He.getUint32(be, !0),
            Me = be + ke.S;
          if ((65535 & ee) === fe.p.EntityDespawned && ee >>> 16 === fe.Hb.BYTES) {
            const ee = fe.Hb.serverId(He, Me);
            var ye;
            if (this.despawned(ee, fe.Hb.index(He, Me))) null === (ye = ie.entityRemoved) || void 0 === ye || ye.call(ie, ee)
          }
          be = Me + (0, ke.le)(ee >>> 16)
        }
        this.rereadDirectory()
      }
      dispatch(ee, ie, He) {
        const {
          len: ye,
          net: be,
          netOffsets: Me
        } = ee;
        let Ke = this.eventView(),
          Ue = 0;
        for (let de = 0; de < ye;) {
          const ee = Ke.getUint32(de, !0),
            ye = 65535 & ee,
            Ze = ee >>> 16,
            we = de + ke.S;
          let De = !1;
          if (Ue < be.length && Me[Ue] === de) ie.netEvent(be[Ue]), Ue++, De = !0;
          else if (ye === ke.U.LocalPlayerBound) {
            var Fe;
            if (Ze !== ke.Bb) throw te(ye, de, Ze);
            null === (Fe = ie.localPlayerBound) || void 0 === Fe || Fe.call(ie, Ke.getInt32(we, !0)), De = !0
          } else if (ye === ke.U.LocalHurt) {
            var Je;
            if (Ze !== ke.zb) throw te(ye, de, Ze);
            null === (Je = ie.localHurt) || void 0 === Je || Je.call(ie, Ke.getInt32(we, !0), Ke.getFloat32(we + 4, !0), Ke.getUint32(we + 8, !0)), De = !0
          } else if (ye === ke.U.AttackHit) {
            var oe;
            if (Ze !== ke.b) throw te(ye, de, Ze);
            const ee = Ke.getFloat32(we, !0),
              He = Ke.getFloat32(we + 4, !0),
              be = Ke.getFloat32(we + 8, !0),
              Me = Ke.getUint32(we + 12, !0);
            null === (oe = ie.attackHit) || void 0 === oe || oe.call(ie, ee, He, be, 0 !== (Me & ke.h.Crit), 0 !== (Me & ke.h.HitSelf))
          } else if (ye === ke.U.PhysicsType) {
            var Re;
            if (Ze !== ke._b) throw te(ye, de, Ze);
            null === (Re = ie.physicsType) || void 0 === Re || Re.call(ie, Ke.getUint32(we, !0), Ke.getInt32(we + 4, !0)), De = !0
          } else if (ye === ke.U.VehicleEffect) {
            var qe;
            const ee = We(Ke, we, Ze);
            if (null === ee) throw te(ye, de, Ze);
            null === (qe = ie.vehicleEffect) || void 0 === qe || qe.call(ie, ee.op, ee.name, ee.icon, ee.level, ee.durationMs), De = !0
          } else if (ye === ke.U.ZoomChanged) {
            var Te;
            if (Ze !== ke.Td) throw te(ye, de, Ze);
            null === (Te = ie.zoomChanged) || void 0 === Te || Te.call(ie, Ke.getFloat32(we, !0), Ke.getUint8(we + 4)), De = !0
          } else if (ye === ke.U.ZoomDisabled) {
            var Ee;
            if (0 !== Ze) throw te(ye, de, Ze);
            null === (Ee = ie.zoomDisabled) || void 0 === Ee || Ee.call(ie), De = !0
          } else if (ye === ke.U.BhopDisabled) {
            var ge;
            if (0 !== Ze) throw te(ye, de, Ze);
            null === (ge = ie.bhopDisabled) || void 0 === ge || ge.call(ie), De = !0
          } else if (ye === ke.U.GameCamera) {
            var Oe;
            null === (Oe = ie.gameCamera) || void 0 === Oe || Oe.call(ie, new Uint8Array(Ke.buffer, Ke.byteOffset + we, Ze).slice()), De = !0
          } else if (ye === fe.p.ChunkSlot || ye === fe.p.EntityInfoChanged);
          else if (ye >= pe && ye <= Xe) {
            if (this.audio && !this.audio.onAudioEvent(ye, Ke, we, Ze)) throw te(ye, de, Ze)
          } else if (ye >= ze && ye <= Be) {
            if (this.replay) {
              if (!this.replay.onReplayEvent(ye, Ke, we, Ze)) throw te(ye, de, Ze);
              De = !0
            }
          } else if (ye >= fe.rd && ye <= fe.ud && ye !== ke.U.EnvLighting) {
            if (!(0, fe.oe)(ye, Ke, we, Ze, ie)) throw te(ye, de, Ze);
            De = !0
          }
          if (De) {
            if (He()) return !1;
            Ke = this.eventView()
          }
          de = we + (0, ke.le)(Ze)
        }
        return !He()
      }
      applyListener() {
        var ee;
        if (!this.audio) return;
        const ie = fe.v.audioViewPtr(this.apiView, 0),
          He = this.memory().buffer;
        let ye = this.audioView;
        (null === (ee = ye) || void 0 === ee ? void 0 : ee.buffer) === He && ye.byteOffset === ie || (ye = (0, qe.d)(He, ie, fe.w.BYTES, 8, "the audio view"), this.audioView = ye), ye && this.audio.applyListener(ye)
      }
      indexOf(ee) {
        return this.indexById.get("number" === typeof ee ? ee : +ee)
      }
      isLocal(ee) {
        return ee !== fe.$c && ee === fe.v.localId(this.apiView, 0)
      }
      pE(ee) {
        const ie = [0, 0, 0];
        return this.readPosition("number" === typeof ee ? ee : +ee, ie) ? ie : null
      }
      readPosition(ee, ie) {
        const He = this.apiView;
        if (void 0 !== this.indexById.get(ee) && this.isLocal(ee)) {
          for (let ee = 0; ee < 3; ee++) ie[ee] = fe.v.localPos(He, 0, ee);
          return !0
        }
        return this.readDrawnPosition(ee, ie)
      }
      readDrawnPosition(ee, ie) {
        const He = this.apiView,
          ye = this.indexById.get(ee);
        if (void 0 === ye || ye >= this.renderCapacity) return ie[0] = ie[1] = ie[2] = NaN, !1;
        const be = ye * Te;
        for (let Me = 0; Me < 3; Me++) ie[Me] = this.render[be + Me] + fe.v.origin(He, 0, Me);
        return !0
      }
      checkValid(ee) {
        return void 0 !== this.indexOf(ee)
      }
      isAlive(ee) {
        const ie = this.indexOf(ee);
        if (void 0 === ie) return null;
        if (this.ensureViews(), ie >= this.renderCapacity) return null;
        const He = this.vis[ie];
        return 0 === He ? null : 0 !== (He & fe.ne.Alive)
      }
      getEntityType(ee) {
        const ie = this.indexOf(ee);
        return void 0 === ie ? this.isLocal("number" === typeof ee ? ee : +ee) ? "Player" : null : Oe(this.kinds[ie])
      }
      spawned(ee, ie, He) {
        if (ie >= 1048576) throw new qe.c(`entity ${ee} spawned at index ${ie}`);
        this.ensureIndex(ie), this.serverIds[ie] === ee && null !== this.idStr[ie] || (this.idStr[ie] = String(ee)), this.serverIds[ie] = ee, this.kinds[ie] = He, this.indexById.set(ee, ie)
      }
      despawned(ee, ie) {
        let He = !1;
        return this.indexById.get(ee) === ie && (this.indexById.delete(ee), He = !0), ie < this.serverIds.length && this.serverIds[ie] === ee && (this.serverIds[ie] = fe.$c, this.kinds[ie] = 0, this.idStr[ie] = null), He
      }
      ensureIndex(ee) {
        const ie = this.serverIds.length;
        if (ee < ie) return;
        let He = 2 * ie;
        for (; He <= ee;) He *= 2;
        const ye = new Int32Array(He).fill(fe.$c);
        ye.set(this.serverIds), this.serverIds = ye;
        const be = new Uint16Array(He);
        be.set(this.kinds), this.kinds = be;
        for (let Me = ie; Me < He; Me++) this.idStr.push(null)
      }
      eventView() {
        const ee = this.memory().buffer;
        return ee !== this.eventsBuffer && (this.eventsBuffer = ee, this.events = new DataView(ee, this.eventsPtr, this.eventsLen)), this.events
      }
      reView() {
        const ee = this.memory().buffer;
        this.buffer = ee, this.viewPtr < 0 && (this.viewPtr = this.core.KKe()), this.view = new DataView(ee, this.viewPtr, fe.v.BYTES), this.rereadDirectory()
      }
    }

    function ge(ee) {
      return ee >>> fe.c === fe.s.Item
    }

    function Oe(ee) {
      var ie, He;
      const ye = ee & fe.e;
      switch (ee >>> fe.c) {
        case fe.s.Lifeform:
          return null !== (ie = oe.j[ye]) && void 0 !== ie ? ie : null;
        case fe.s.Throwable:
          return null !== (He = Re.l[ye]) && void 0 !== He ? He : null;
        case fe.s.Mesh:
          return "Mesh";
        case fe.s.Audio:
          return "AudioEntity";
        case fe.s.Item:
          return "Item";
        default:
          return null
      }
    }
    const de = new TextDecoder;

    function We(ee, ie, He) {
      if (He < ke.sd.HEAD_BYTES) return null;
      const ye = ee.getUint32(ie, !0),
        be = ee.getUint32(ie + 20, !0),
        Me = ee.getUint32(ie + 24, !0),
        Ke = ke.sd.HEAD_BYTES + (0, ke.le)(be);
      if (ye !== ke.sd.UPDATE && ye !== ke.sd.REMOVE || be > He || Ke + Me > He) return null;
      const Ue = (He, ye) => de.decode(new Uint8Array(ee.buffer, ee.byteOffset + ie + He, ye)),
        Fe = ee.getFloat64(ie + 12, !0);
      return {
        op: ye,
        level: ee.getFloat64(ie + 4, !0),
        durationMs: Number.isNaN(Fe) ? null : Fe,
        name: Ue(ke.sd.HEAD_BYTES, be),
        icon: Ue(Ke, Me)
      }
    }

    function te(ee, ie, He) {
      return new qe.c(`event ${ee} at ${ie} of ${He} bytes`)
    }
    var Ze = He(7083),
      we = He(347),
      De = He(1169),
      Pe = He(39983),
      Ae = He(39826),
      Ye = He(2e3),
      Ve = He(42105),
      ae = He(1952),
      ce = He(40009),
      xe = He(40046),
      Le = He(40019),
      Ce = He(40005),
      ve = He(41734),
      ue = He(2495),
      me = He(40037);

    function le(ee) {
      if (!(0, me.h)(ee)) return null;
      const ie = Number(ee);
      return (0 | ie) === ie ? ie : null
    }
    class Se {
      constructor(ee) {
        this.api = ee, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Ce.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.XH = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], this.entityHeading = 0, this.entityPitch = null, this.entityLookHeading = null, this.localId = fe.$c, this.localName = String(fe.$c)
      }
      readView() {
        this.defaultPoseRead = !1, this.XH = null;
        const ee = this.api.queries.directorView() >= fe.ub.BYTES ? this.api.scratchData(fe.ub.BYTES, "the director's view") : null;
        null !== ee && (this.defaultFov = (0, ae.B)(fe.ub.fov(ee, 0)), this.baseFov = (0, ae.B)(fe.ub.baseFov(ee, 0)), this.aspect = fe.ub.aspect(ee, 0), this.bodyHeading = fe.ub.bodyHeading(ee, 0))
      }
      getViewHeading() {
        return this.viewHeading
      }
      setViewHeading(ee) {
        this.viewHeading = ee
      }
      get localPlayerId() {
        const ee = fe.v.localId(this.api.apiView, 0);
        return ee !== this.localId && (this.localId = ee, this.localName = String(ee)), this.localName
      }
      getEntityPosition(ee) {
        return this.readEntity(ee) ? this.entityFeet : null
      }
      getEntityAimPoint(ee) {
        return this.readEntity(ee) ? this.entityAim : null
      }
      getEntityHeading(ee) {
        const ie = le(ee);
        if (null === ie) return null;
        const He = fe.v.localId(this.api.apiView, 0);
        return ie === He && He !== fe.$c ? this.viewHeading : this.readEntity(ee) ? this.entityHeading : null
      }
      getEntityPitch(ee) {
        return this.readEntity(ee) ? this.entityPitch : null
      }
      getEntityLookHeading(ee) {
        return this.readEntity(ee) ? this.entityLookHeading : null
      }
      raycastTerrain(ee, ie, He) {
        const ye = this.api.queries.cameraSweep(ee[0], ee[1], ee[2], ie[0], ie[1], ie[2], He);
        return ye < He - 1e-6 ? ye : null
      }
      getDefaultPose() {
        if (this.defaultPoseRead) return this.defaultPose;
        this.defaultPoseRead = !0;
        const ee = this.defaultPose;
        ee.fov = this.defaultFov;
        const ie = this.api.queries.directorDefaultPose() >= fe.mb.BYTES ? this.api.scratchData(fe.mb.BYTES, "the director's default pose") : null;
        if (null === ie) return ee;
        for (let He = 0; He < 3; He++) ee.position[He] = fe.mb.eye(ie, 0, He);
        return ee.heading = fe.mb.heading(ie, 0), ee.pitch = fe.mb.pitch(ie, 0), ee
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
      readEntity(ee) {
        const ie = le(ee);
        if (null === ie) return !1;
        if (ie === this.XH) return this.entityLive;
        this.XH = ie;
        const He = this.api.queries.directorEntity(ie) >= fe.pb.BYTES ? this.api.scratchData(fe.pb.BYTES, "the director's entity") : null;
        if (this.entityLive = null !== He, null === He) return !1;
        for (let Me = 0; Me < 3; Me++) this.entityFeet[Me] = fe.pb.feet(He, 0, Me), this.entityAim[Me] = this.entityFeet[Me];
        this.entityAim[1] += fe.pb.eyeHeight(He, 0), this.entityHeading = fe.pb.heading(He, 0);
        const ye = fe.pb.pitch(He, 0);
        this.entityPitch = Number.isNaN(ye) ? null : ye;
        const be = fe.pb.lookHeading(He, 0);
        return this.entityLookHeading = Number.isNaN(be) ? null : be, !0
      }
    }
    const ne = {
        mode: "default"
      },
      je = {
        show: () => {},
        clear: () => {}
      };

    function se() {
      return "undefined" !== typeof document && "hidden" === document.visibilityState
    }
    class Ie {
      constructor(ee) {
        this.options = ee, this.xR = void 0, this.director = void 0, this.latest = ne, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
          XV: 0,
          zV: 0
        }, this.pointedAt = {
          heading: 0,
          pitch: 0
        }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastPose = {
          position: [0, 0, 0],
          heading: 0,
          pitch: 0,
          fovRadians: 0
        }, this.lastAnswer = fe.kb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.nf = new Int32Array(3 * fe.$d), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * fe.$d), this.xR = new Se(ee.api), this.director = new Le.d(this.xR)
      }
      settingsChanged(ee) {
        let ie = ne;
        if (ee.length > 0) try {
          ie = (0, ve.b)(ee)
        } catch {}
        this.latest = ie, this.pending = ie
      }
      call(ee, ie, He, ye, be, Me) {
        var Ke, Ue;
        this.holding = !1;
        const Fe = this.answeredPose && 0 === (ye & fe.tb.Held);
        let Je;
        try {
          Je = this.answer(ee, ie, He, ye, be, Me), this.threw = !1
        } catch (oe) {
          this.options.reportError(oe);
          Je = !this.threw && this.answeredPose && !Fe ? this.sendLastPose() : fe.kb.None, this.threw = !0
        }
        return this.answeredPose = Je !== fe.kb.None, this.holding = this.answeredPose && !Fe, null === (Ke = (Ue = this.options).showFacing) || void 0 === Ke || Ke.call(Ue, this.holding ? this.facing : null), Je
      }
      holdsView() {
        return this.holding
      }
      answer(ee, ie, He, ye, be, Me) {
        this.calledThisFrame = !0, this.engaged = !0, this.lastCallMs = this.now();
        const {
          xR: Ke
        } = this;
        Ke.readView();
        if (0 !== (ye & fe.tb.Held) || Ke.setViewHeading((0, ce.x)(Ke.bodyHeading)), void 0 !== this.pending) {
          const ee = this.pending;
          this.pending = void 0, this.director.setSettings(ee), this.syncShownSettings()
        }
        this.readLook((0, ue.d)(ie), (0, ue.d)(He), ye, (0, ue.d)(be), (0, ue.d)(Me));
        const Ue = this.director.update(ee / 1e3, this.look);
        if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Ue) return fe.kb.None;
        const Fe = this.lastPose;
        return (0, Ce.j)(Ue.position, Fe.position), Fe.heading = (0, ce.x)(Ue.heading), Fe.pitch = (0, ce.i)(Ue.pitch), Fe.fovRadians = (0, ae.f)(Ue.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
      }
      facingAnswer() {
        if ("default" === this.director.getSettings().mode) return fe.kb.Pose;
        switch (this.facing) {
          case "camera":
            return fe.kb.FaceCamera;
          case "cursor":
            return fe.kb.FaceCursor;
          default:
            return fe.kb.FaceMovement
        }
      }
      sendLastPose() {
        const {
          position: ee,
          heading: ie,
          pitch: He,
          fovRadians: ye
        } = this.lastPose;
        return 0 === this.options.api.queries.directorPose(ee[0], ee[1], ee[2], ie, He, ye) ? fe.kb.None : this.lastAnswer
      }
      afterFrame(ee) {
        ee ? (this.calledThisFrame || (this.holding = !1, this.engaged && this.idle()), this.calledThisFrame = !1) : this.centresLen > 0 && this.hidden() && this.now() - this.lastCallMs > 1e3 && this.setCentres(0), this.centresUnsent && this.sendCentres()
      }
      reset() {
        this.latest = ne, this.idle()
      }
      restart() {
        const ee = this.holding;
        this.idle(), this.holding = ee
      }
      idle() {
        var ee, ie;
        this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Le.d(this.xR), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (ee = (ie = this.options).showFacing) || void 0 === ee || ee.call(ie, null), this.setCentres(0)
      }
      syncShownSettings() {
        const ee = this.director.getSettings();
        if (ee === this.shownSettings) return;
        this.shownSettings = ee;
        const ie = (0, xe.h)(ee);
        this.facing = ie.facing, this.mouseTurns = ie.mouseTurns
      }
      readLook(ee, ie, He, ye, be) {
        const Me = this.look,
          Ke = 0 !== (He & fe.tb.LookPointed);
        if (null === this.mouseTurns && !Ke) return Me.XV = 0, Me.zV = 0, void(Me.pointedAt = void 0);
        let Ue;
        Ke && (this.pointedAt.heading = ye, this.pointedAt.pitch = be, Ue = this.pointedAt);
        const {
          xR: Fe
        } = this;
        Fe.setViewHeading((0, xe.e)(Fe.getViewHeading(), ee, ie, Ue, "look" === this.mouseTurns, Me))
      }
      writeCentres(ee) {
        const ie = this.next,
          He = Math.min(ee.length, fe.$d);
        for (let ye = 0; ye < He; ye++)
          for (let He = 0; He < 3; He++) ie[3 * ye + He] = Math.floor(ee[ye][He] / fe.E);
        this.setCentres(He)
      }
      setCentres(ee) {
        const {
          nf: ie,
          next: He
        } = this;
        let ye = ee === this.centresLen;
        for (let be = 0; ye && be < 3 * ee; be++) ye = ie[be] === He[be];
        ye || (ie.fill(0), ie.set(He.subarray(0, 3 * ee)), this.centresLen = ee, this.centresUnsent = !0, this.sendCentres())
      }
      sendCentres() {
        const ee = this.options.cmd();
        null !== ee && (0, fe.Hf)(ee, 0, this.nf, this.centresLen) && (this.centresUnsent = !1)
      }
      screen() {
        var ee, ie, He;
        return null !== (ee = null === (ie = (He = this.options).screen) || void 0 === ie ? void 0 : ie.call(He)) && void 0 !== ee ? ee : je
      }
      hidden() {
        var ee;
        return (null !== (ee = this.options.isPageHidden) && void 0 !== ee ? ee : se)()
      }
      now() {
        var ee, ie, He;
        return null !== (ee = null === (ie = (He = this.options).now) || void 0 === ie ? void 0 : ie.call(He)) && void 0 !== ee ? ee : performance.now()
      }
    }
    var he = He(39916),
      Ne = He(41899);
    const Ge = fe.E * fe.E * fe.E,
      re = Math.log2(fe.E),
      Qe = fe.E - 1,
      ei = 65535,
      ii = fe.Q.BYTES / 4,
      Hi = new Uint16Array(Ge);

    function yi(ee, ie, He) {
      return ee * fe.E * fe.E + ie * fe.E + He
    }
    class bi {
      constructor(ee) {
        this.chunk = ee
      }
      get data() {
        return this.chunk.gameVoxels()
      }
      index(ee, ie, He) {
        return yi(ee, ie, He)
      }
    }
    class Mi {
      constructor() {
        this.ids = new Map, this.cleared = new Set, this.layers = 0, this.patched = null, this.from = null
      }
    }
    class Ki {
      constructor(ee, ie, He, ye) {
        this.table = ee, this.slot = ie, this.generation = He, this.epoch = ye, this.Uq = new bi(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Hi, this.dataPtr = 0, this.dataBuffer = null, this.dataStamp = -1, this.version = 0, this.layers = null, this.layersVersion = -1, this.layersPtr = -1, this.staleLayers = 0
      }
      get kT() {
        return this.voxelData(), this.version === this.shownCore && this.writeCount === this.shownWrites || (this.shownCore = this.version, this.shownWrites = this.writeCount, this.shownVersion = this.table.nextVersion()), this.shownVersion
      }
      get yf() {
        const ee = this.gameVoxels(),
          ie = this.layers ??= new Uint16Array(fe.E);
        this.layersVersion === this.version && this.layersPtr === this.dataPtr || (this.layersVersion = this.version, this.layersPtr = this.dataPtr, this.staleLayers = -1);
        for (let He = 0; 0 !== this.staleLayers; He++) {
          const ye = 1 << He;
          0 !== (this.staleLayers & ye) && (this.staleLayers &= ~ye, ie[He] = Ui(ee, He))
        }
        return ie
      }
      voxelData() {
        return this.dataStamp === this.table.stamp && 0 !== this.data.length ? this.data : this.reread()
      }
      gameVoxels() {
        const ee = this.voxelData(),
          ie = this.writes;
        if (null === ie || 0 === ie.ids.size) return ee;
        if (ie.from !== ee) {
          const He = ie.patched ??= new Uint16Array(Ge);
          He.set(ee);
          for (const [ee, ye] of ie.ids) He[ee] = ye;
          ie.from = ee
        }
        return ie.patched
      }
      written(ee) {
        var ie;
        return null === (ie = this.writes) || void 0 === ie ? void 0 : ie.ids.get(ee)
      }
      hasWrites() {
        return null !== this.writes && 0 !== this.writes.ids.size
      }
      write(ee, ie, He) {
        const ye = this.writes ??= new Mi;
        ye.ids.set(ee, ie), He && ye.cleared.add(ee), null !== ye.from && (ye.patched[ee] = ie);
        const be = 1 << (ee >> re & Qe);
        ye.layers |= be, this.staleLayers |= be, this.writeCount++
      }
      clearWrites() {
        const ee = this.writes;
        null !== ee && (this.staleLayers |= ee.layers, ee.ids.clear(), ee.cleared.clear(), ee.layers = 0, ee.from = null)
      }
      dataCleared(ee) {
        var ie;
        return !0 === (null === (ie = this.writes) || void 0 === ie ? void 0 : ie.cleared.has(ee))
      }
      reread() {
        this.dataStamp = this.table.stamp;
        const ee = this.table.slotWords(),
          ie = this.slot * ii;
        if (this.epoch !== this.table.epoch || ie + ii > ee.length || 0 === ee[ie + 3] || ee[ie + 2] !== this.generation) return this.data = Hi, this.dataPtr = 0, Hi;
        this.version = ee[ie + 1];
        const He = ee[ie + 0],
          ye = ee.buffer;
        return He === this.dataPtr && ye === this.dataBuffer || (this.dataPtr = He, this.dataBuffer = ye, this.data = this.table.voxelsAt(ye, He)), this.data
      }
    }

    function Ui(ee, ie) {
      const He = ee[ie * fe.E];
      for (let ye = 0; ye < fe.E; ye++) {
        const be = yi(ye, ie, 0);
        for (let ie = 0; ie < fe.E; ie++)
          if (ee[be + ie] !== He) return ei
      }
      return He
    }
    const Fi = new Uint32Array(0);

    function Ji(ee, ie, He) {
      return yi(ee & Qe, ie & Qe, He & Qe)
    }
    class oi {
      constructor(ee, ie) {
        this.memory = ee, this.apiView = ie, this.chunks = new Map, this.written = [], this.lastKey = -1, this.lastChunk = void 0, this.slotsPtr = 0, this.slotsLen = 0, this.slotsBuffer = null, this.slots = Fi, this.walkPtr = 0, this.walkLen = 0, this.walkBuffer = null, this.walk = Fi, this.epoch = 0, this.stamp = 0, this.versions = 0, this.corruption = null
      }
      apply(ee, ie, He, ye, be, Me) {
        if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Me === fe.R.ResetAll) return this.chunks.clear(), void this.epoch++;
        if (Me !== fe.R.Stored && Me !== fe.R.Unloaded) throw new qe.c(`ChunkSlot flags ${Me}`);
        const Ke = (0, Ne.c)(ee, ie, He);
        if (Ke < 0) return;
        if (Me === fe.R.Unloaded) return void this.chunks.delete(Ke);
        const Ue = this.chunks.get(Ke);
        (null === Ue || void 0 === Ue ? void 0 : Ue.slot) === ye && Ue.generation === be || this.chunks.set(Ke, new Ki(this, ye, be, this.epoch))
      }
      touch() {
        this.stamp++, this.clearOverlay(), this.viewWalkThrough()
      }
      refresh() {
        if (this.stamp++, this.corruption) throw this.corruption;
        const ee = this.apiView(),
          ie = fe.v.chunkSlotsPtr(ee, 0),
          He = fe.v.chunkSlotsLen(ee, 0);
        ie === this.slotsPtr && He === this.slotsLen || (this.slotsPtr = ie, this.slotsLen = He, this.slotsBuffer = null, this.slotWords()), this.viewWalkThrough(), this.clearOverlay()
      }
      viewWalkThrough() {
        const ee = this.apiView(),
          ie = fe.v.walkThroughPtr(ee, 0),
          He = fe.v.walkThroughLen(ee, 0);
        ie === this.walkPtr && He === this.walkLen || (this.walkPtr = ie, this.walkLen = He, this.walkBuffer = null, this.walkWords())
      }
      clearOverlay() {
        for (const ee of this.written) ee.clearWrites();
        this.written.length = 0
      }
      nextVersion() {
        return ++this.versions
      }
      slotWords() {
        const ee = this.memory().buffer;
        var ie;
        ee !== this.slotsBuffer && (this.slotsBuffer = ee, this.slots = null !== (ie = (0, qe.k)(Uint32Array, ee, this.slotsPtr, this.slotsLen * ii, "the chunk directory")) && void 0 !== ie ? ie : Fi);
        return this.slots
      }
      voxelsAt(ee, ie) {
        try {
          var He;
          return null !== (He = (0, qe.k)(Uint16Array, ee, ie, Ge, "a chunk's voxels")) && void 0 !== He ? He : Hi
        } catch (ye) {
          if (!(ye instanceof qe.c)) throw ye;
          return this.corruption ??= ye, Hi
        }
      }
      chunk(ee, ie, He) {
        var ye;
        return null !== (ye = this.chunks.get((0, Ne.c)(ee, ie, He))) && void 0 !== ye ? ye : null
      }
      isLoaded(ee, ie, He) {
        return void 0 !== this.chunkAt(Math.floor(ee), Math.floor(ie), Math.floor(He))
      }
      po(ee, ie, He) {
        var ye;
        const be = Math.floor(ee),
          Me = Math.floor(ie),
          Ke = Math.floor(He),
          Ue = this.chunkAt(be, Me, Ke);
        if (!Ue) return 0;
        const Fe = Ji(be, Me, Ke);
        return null !== (ye = Ue.written(Fe)) && void 0 !== ye ? ye : Ue.voxelData()[Fe]
      }
      setOverlay(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Me = this.chunkAt(ee, ie, He);
        return !!Me && (Me.hasWrites() || this.written.push(Me), Me.write(Ji(ee, ie, He), ye, be), !0)
      }
      version(ee, ie, He) {
        var ye, be;
        return null !== (ye = null === (be = this.chunks.get((0, Ne.c)(ee, ie, He))) || void 0 === be ? void 0 : be.kT) && void 0 !== ye ? ye : null
      }
      scan(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = fe.E;
        let Je = 0;
        for (let oe = Math.floor(ie / Fe); oe * Fe < be; oe++) {
          const Re = oe * Fe,
            ke = Math.min(be - Re, Fe);
          for (let be = Math.floor(ee / Fe); be * Fe < ye; be++) {
            const qe = be * Fe,
              fe = Math.min(ye - qe, Fe);
            for (let ye = Math.floor(He / Fe); ye * Fe < Me; ye++) {
              const Te = this.chunks.get((0, Ne.c)(be, oe, ye));
              if (!Te) continue;
              const pe = ye * Fe,
                Xe = Math.max(He - pe, 0),
                ze = Math.min(Me - pe, Fe),
                Be = Te.yf,
                Ee = Te.gameVoxels();
              for (let He = Math.max(ie - Re, 0); He < ke; He++) {
                const ie = Be[He];
                if (ie === ei || 0 !== Ke[ie]) {
                  Je++;
                  for (let ie = Math.max(ee - qe, 0); ie < fe; ie++) {
                    const ee = yi(ie, He, 0);
                    for (let ye = Xe; ye < ze; ye++) {
                      const be = Ee[ee + ye];
                      0 !== Ke[be] && Ue.push(qe + ie, Re + He, pe + ye, be)
                    }
                  }
                }
              }
            }
          }
        }
        return Je
      }
      columnTops(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        (0, he.c)(((ee, ie, He) => {
          var ye;
          return null !== (ye = this.chunks.get((0, Ne.c)(ee, ie, He))) && void 0 !== ye ? ye : null
        }), ei, ee, ie, He, ye, be, Me, Ke, Ue, Fe)
      }
      dataCleared(ee, ie, He) {
        var ye;
        const be = Math.floor(ee),
          Me = Math.floor(ie),
          Ke = Math.floor(He);
        return !0 === (null === (ye = this.chunkAt(be, Me, Ke)) || void 0 === ye ? void 0 : ye.dataCleared(Ji(be, Me, Ke)))
      }
      isWalkThrough(ee) {
        if (!Number.isInteger(ee) || ee < 0 || ee > 65535) return !1;
        const ie = this.walkWords(),
          He = ee >>> 5;
        return He < ie.length && 1 === (ie[He] >>> (31 & ee) & 1)
      }
      walkWords() {
        const ee = this.memory().buffer;
        var ie;
        ee !== this.walkBuffer && (this.walkBuffer = ee, this.walk = null !== (ie = (0, qe.k)(Uint32Array, ee, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ie ? ie : Fi);
        return this.walk
      }
      chunkAt(ee, ie, He) {
        if ((0 | ee) !== ee || (0 | ie) !== ie || (0 | He) !== He) return;
        const ye = (0, Ne.c)(ee >> re, ie >> re, He >> re);
        return ye !== this.lastKey && (this.lastKey = ye, this.lastChunk = this.chunks.get(ye)), this.lastChunk
      }
    }
    var Ri = He(39305),
      ki = He(38639),
      qi = He(39015),
      fi = He(37620),
      Ti = He(37440),
      Xi = He(34824),
      zi = He(39919),
      Bi = He(186);
    const Ei = ["ambient", "cars", "crowd", "customGame_horror", "dig", "fire", "fishing", "gameStart", "gunMisc", "gunPistol", "gunRifle", "gunSemiAutomatic", "gunShotgun", "gunSubmachineGun", "mobBear", "mobCat", "mobCow", "mobCrone", "mobDeer", "mobDog", "mobFennec", "mobGolem", "mobGorilla", "mobHorse", "mobKnight", "mobPig", "mobReaver", "mobSheep", "mobSkeleton", "mobStag", "mobStalker", "mobWarper", "mobWraith", "mobZombie", "note", "phoneAndMoney", "police", "randomBeep", "randomCannon", "randomCash", "randomExp", "randomFallsmall", "randomFire", "randomFirecracker", "randomItems", "randomLaugh", "randomMagic", "randomSplash", "rpg", "step", "survivalFactory", "town"],
      gi = [
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
      Oi = gi.map((ee => {
        let [ie] = ee;
        return ie
      })),
      di = Uint8Array.from(gi, (ee => {
        let [, ie] = ee;
        return ie
      })),
      Wi = {
        semi_automatic: 11,
        submachine: 13,
        rifle: 10,
        pistol: 9,
        shotgun: 12
      },
      ti = 8,
      Zi = [
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
    var wi = He(37584),
      Di = He(37601),
      Pi = He(37596),
      Ai = He(242);
    class Yi {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ai.e;
        this.sound = ee, this.onError = ie, this.idle = He, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = ee => {
          this.cancelIdle = null;
          try {
            if (ee.timeRemaining() >= 1) {
              let ee = this.queue.shift();
              for (; void 0 !== ee && !this.load(ee);) ee = this.queue.shift()
            }
          } catch (ie) {
            this.onError(ie)
          } finally {
            this.schedule()
          }
        }
      }
      preload(ee) {
        const ie = [...ee].sort(((ee, ie) => ee - ie));
        for (const He of ie) this.asked.has(He) || (this.asked.add(He), this.queue.push(He));
        this.schedule()
      }
      cancel() {
        var ee;
        this.queue.length = 0, this.asked.clear(), this.gen++, null === (ee = this.cancelIdle) || void 0 === ee || ee.call(this), this.cancelIdle = null
      }
      schedule() {
        null === this.cancelIdle && this.queue.length > 0 && (this.cancelIdle = this.idle(this.onIdle))
      }
      load(ee) {
        const ie = this.sound(ee, !1),
          He = this.sound(ee, !0),
          [ye, be] = "unloaded" === ie.state() && "unloaded" !== He.state() ? [He, ie] : [ie, He],
          Me = this.gen,
          Ke = () => {
            try {
              Me === this.gen && "unloaded" === be.state() && be.load()
            } catch (ee) {
              this.onError(ee)
            }
          },
          Ue = ye.state();
        return "unloaded" === Ue ? (ye.once("load", Ke), ye.load(), !0) : "unloaded" === be.state() && ("loading" === Ue ? (ye.once("load", Ke), !1) : (be.load(), !0))
      }
    }
    var Vi = He(41985);

    function ai(ee) {
      var ie;
      const He = function(ee) {
        let ie = 0,
          He = Oi.length;
        for (; ie < He;) {
          const ye = ie + He >>> 1;
          Oi[ye] < ee ? ie = ye + 1 : He = ye
        }
        return ie
      }(ee);
      if ("" === ee || null === (ie = Oi[He]) || void 0 === ie || !ie.startsWith(ee)) return null;
      if (Oi[He] === ee) return [He, 1];
      let ye = He + 1;
      for (; ye < Oi.length && Oi[ye].startsWith(ee);) ye++;
      return [He, ye - He]
    }

    function ci(ee) {
      let [ie, He] = ee, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
      return 1 === He ? ie : ie + Math.floor(ye() * He)
    }

    function xi(ee) {
      for (const ie of Zi)
        if (ie[0] <= ee && ee < ie[0] + ie[1]) return ie;
      return null
    }

    function Li(ee) {
      const ie = [];
      for (let He = 0; He < di.length; He++) di[He] === ee && ie.push(He);
      return ie
    }
    const Ci = {
        coneInnerAngle: 360,
        coneOuterAngle: 360,
        coneOuterGain: 0,
        distanceModel: "inverse",
        maxDistance: 1e3,
        panningModel: "HRTF",
        rolloffFactor: 1
      },
      vi = Bi.g.UX * Bi.g.playerEyeToHeightRatio,
      ui = [0, 0, -1, 0, 1, 0],
      mi = Ei.indexOf("note");

    function li(ee) {
      return ee >= 0 ? Math.min(1, ee) : 0
    }
    class Si {
      constructor(ee, ie, He, ye, be) {
        this.group = ee, this.loudness = ie, this.startMs = He, this.howl = ye, this.host = be, this.id = 0, this.direct = !1
      }
      getDurationMs() {
        const ee = this.host.alive(this.id);
        return ee ? 1e3 * this.howl.duration(this.id) / ee.rate : 0
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
    class ni {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          ye = arguments.length > 3 ? arguments[3] : void 0;
        this.createHowl = ee, this.listener = ie, this.now = He, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader = void 0, this.voices = new Pi.c, this.failed = new Set, this.started = new Set, this.voiceHost = {
          alive: ee => this.aliveVoice(ee),
          started: ee => this.started.has(ee),
          drop: ee => {
            var ie;
            null === (ie = this.live.get(ee)) || void 0 === ie || ie.howl.stop(ee), this.forget(ee)
          }
        }, this.handlers = {
          playSound: (ee, ie, He, ye, be, Me, Ke, Ue, Fe) => {
            if (ye >= Oi.length) return;
            const Je = 0 !== (be & fe.he.Loop);
            be & fe.he.TwoD ? this.start(ye, !1, Ke, Me, Ue, Je, xi(ye)) : this.startSpatial(ye, Ke, Me, Ue, Je, ee, ie, He, Fe, this.earDistSq(ee, ie, He), xi(ye))
          },
          soundPos: (ee, ie, He, ye) => {
            const be = this.core.get(ye);
            var Me;
            void 0 !== be && (null === (Me = this.live.get(be)) || void 0 === Me || Me.howl.pos(He, ie, ee, be))
          },
          soundSet: (ee, ie, He, ye) => {
            const be = this.core.get(ee),
              Me = void 0 === be ? void 0 : this.live.get(be);
            void 0 !== be && Me && (this.setRel(be, ie), Me.rate = He, Me.howl.rate(He, be), Me.spatial && Me.howl.pannerAttr({
              refDistance: ye
            }, be))
          },
          soundFade: (ee, ie, He, ye) => {
            const be = this.core.get(ee);
            void 0 !== be && this.fade(be, ie, He, 0 !== (ye & fe.ge.StopAfter))
          },
          soundStop: ee => {
            const ie = this.core.get(ee);
            var He;
            void 0 !== ie && (null === (He = this.live.get(ie)) || void 0 === He || He.howl.stop(ie), this.forget(ie))
          },
          soundReset: () => {
            this.stopCore()
          }
        }, this.loader = new Yi(((ee, ie) => this.howl(ee, ie)), (ee => {
          this.errors++, console.error("Audio preload failed", ee)
        }), ye)
      }
      preload(ee) {
        this.loader.preload(ee)
      }
      cancelPreload() {
        this.loader.cancel()
      }
      freeSoundsAfterGame() {
        for (let ee = 0; ee < Oi.length; ee++) {
          if (Di.b.has(Ei[di[ee]])) continue;
          const ie = [];
          for (const He of [!1, !0]) {
            const ye = ji(ee, He),
              be = this.howls.get(ye);
            void 0 !== be && "loading" !== be.state() && ie.push({
              key: ye,
              howl: be
            })
          }
          if (ie.some((ee => {
              let {
                howl: ie
              } = ee;
              return "loaded" === ie.state()
            })))
            for (const {
                key: ee,
                howl: He
              }
              of ie) this.howls.delete(ee), "loaded" === He.state() ? (0, wi.f)(He) : He.unload()
        }
      }
      onAudioEvent(ee, ie, He, ye) {
        if (ee < fe.p.PlaySound || ee > fe.p.SoundReset) return !1;
        try {
          return (0, fe.oe)(ee, ie, He, ye, this.handlers)
        } catch (be) {
          return this.errors++, console.error("Audio event failed", be), !0
        }
      }
      applyListener(ee) {
        const ie = this.nextPose;
        for (let ye = 0; ye < 3; ye++) ie[2 - ye] = fe.w.listener(ee, 0, ye), ie[5 - ye] = fe.w.forward(ee, 0, ye), ie[8 - ye] = fe.w.up(ee, 0, ye);
        0 === ie[3] && 0 === ie[4] && 0 === ie[5] && ie.set(this.posed ? this.pose.subarray(3) : ui, 3);
        for (let ye = 0; ye < 9; ye++)
          if (!Number.isFinite(ie[ye])) return;
        const He = this.pose;
        if (this.posed) {
          let ee = !0;
          for (let ye = 0; ye < 9 && ee; ye++) ee = ie[ye] === He[ye];
          if (ee) return
        }
        this.listener.apply(ie) && (He.set(ie), this.posed = !0)
      }
      playGame(ee, ie, He, ye, be, Me, Ke) {
        const Ue = ai(ee);
        if (null === Ue) return Vi.c;
        const Fe = ci(Ue),
          Je = Ue[1] > 1 ? Ue : null;
        if (!He) {
          const {
            howl: ee,
            id: He
          } = this.start(Fe, !1, ie, 0, 1, Ke, Je);
          return this.gameSound(ee, He, !1)
        }
        const oe = He[0],
          Re = He[1] + vi,
          ke = He[2];
        if (!Number.isFinite(oe) || !Number.isFinite(Re) || !Number.isFinite(ke)) return Vi.c;
        let qe;
        if (ye) {
          const ee = oe - ye[0],
            ie = Re - ye[1],
            He = ke - ye[2];
          if (qe = ee * ee + ie * ie + He * He, qe > be * be) return Vi.c
        } else qe = this.earDistSq(oe, Re, ke);
        const fe = this.startSpatial(Fe, ie, 0, 1, Ke, oe, Re, ke, Me, qe, Je);
        return fe ? this.gameSound(fe.howl, fe.id, !0) : Vi.c
      }
      setMaster(ee, ie) {
        this.level = li(ee);
        const He = ie ? this.level : 0;
        if (He !== this.master) {
          this.master = He;
          for (const [ee, ie] of this.live) ie.fadeMs = 0, ie.gain = ie.rel * this.master, ie.howl.volume(ie.gain, ee)
        }
      }
      stopCore() {
        for (const ie of [...this.core.values()]) {
          var ee;
          null === (ee = this.live.get(ie)) || void 0 === ee || ee.howl.stop(ie)
        }
        this.core.clear()
      }
      stopAll() {
        this.cancelPreload();
        for (const [ee, ie] of [...this.live]) ie.howl.stop(ee), this.forget(ee);
        this.core.clear()
      }
      gameSound(ee, ie, He) {
        const ye = {
          stop: () => (this.live.has(ie) && ee.stop(ie), ye),
          fade: (ee, He, be) => {
            var Me, Ke;
            const Ue = this.level > 0 ? He / this.level : He > 0 && null !== (Me = null === (Ke = this.live.get(ie)) || void 0 === Ke ? void 0 : Ke.rel) && void 0 !== Me ? Me : 0;
            return this.fade(ie, Ue, be, !1), ye
          },
          rate: He => {
            const be = this.live.get(ie);
            return be && (be.rate = function(ee) {
              return ee > 0 && ee < 1 / 0 ? ee : 1
            }(He), ee.rate(be.rate, ie)), ye
          },
          getVolume: () => {
            var ee, He;
            return (null !== (ee = null === (He = this.live.get(ie)) || void 0 === He ? void 0 : He.rel) && void 0 !== ee ? ee : 0) * this.level
          },
          getRelativeVolume: () => {
            var ee, He;
            return null !== (ee = null === (He = this.live.get(ie)) || void 0 === He ? void 0 : He.rel) && void 0 !== ee ? ee : 0
          },
          setRelativeVolume: ee => (this.setRel(ie, ee), ye),
          setPannerAttr: be => {
            if (He && this.live.has(ie)) {
              const He = {
                ...Ci,
                refDistance: fi.j
              };
              for (const [ee, ie] of Object.entries(be)) "number" !== typeof ie && "string" !== typeof ie || (He[ee] = ie);
              ee.pannerAttr({
                coneOuterAngle: He.coneOuterAngle
              }, ie), ee.pannerAttr(He, ie)
            }
            return ye
          },
          setPosition: be => (He && this.live.has(ie) && Number.isFinite(be[0] + be[1] + be[2]) && ee.pos(be[2], be[1], be[0], ie), ye)
        };
        return ye
      }
      startSpatial(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        const Re = this.howl(ee, !0);
        let ke = null;
        if (!be) {
          if (this.failed.has(Re)) return null;
          const He = di[ee] === mi ? null : (0, Pi.i)(Oi[ee]),
            ye = (0, Pi.f)(li(ie), Math.sqrt(Je), Fe);
          if (ke = new Si(He, ye, this.now(), Re, this.voiceHost), !this.voices.admit(ke)) return null
        }
        const qe = this.start(ee, !0, ie, He, ye, be, oe);
        return ke && (ke.id = qe.id, ke.direct = "loaded" === Re.state() && !Re._playLock), Re.pannerAttr({
          coneOuterAngle: 360
        }, qe.id), Re.pannerAttr({
          ...Ci,
          refDistance: Fe
        }, qe.id), Re.pos(Ue, Ke, Me, qe.id), qe
      }
      aliveVoice(ee) {
        const ie = this.live.get(ee);
        if (!ie) return;
        const He = ie.howl._soundById(ee);
        if (He && !He._ended) return ie;
        this.forget(ee)
      }
      earDistSq(ee, ie, He) {
        if (!this.posed) return 0;
        const ye = ee - this.pose[2],
          be = ie - this.pose[1],
          Me = He - this.pose[0];
        return ye * ye + be * be + Me * Me
      }
      start(ee, ie, He, ye, be, Me, Ke) {
        const Ue = li(He),
          Fe = this.howl(ee, ie);
        "unloaded" === Fe.state() && (Fe.load(), null !== Ke && this.loadPick(Ke, ie));
        const Je = Fe.play(wi.b),
          oe = Ue * this.master;
        return Fe.volume(oe, Je), this.live.set(Je, {
          howl: Fe,
          rel: Ue,
          gain: oe,
          fadeFrom: oe,
          fadeAt: 0,
          fadeMs: 0,
          rate: be,
          handle: ye,
          spatial: ie,
          stopTimer: void 0
        }), 0 !== ye && this.core.set(ye, Je), 1 !== be && Fe.rate(be, Je), Me && Fe.loop(!0, Je), {
          howl: Fe,
          id: Je
        }
      }
      loadPick(ee, ie) {
        let [He, ye] = ee;
        for (let Me = He; Me < He + ye; Me++) {
          var be;
          const ee = this.howl(Me, ie);
          "unloaded" === ee.state() && "loading" !== (null === (be = this.howls.get(ji(Me, !ie))) || void 0 === be ? void 0 : be.state()) && ee.load()
        }
      }
      howl(ee, ie) {
        const He = ji(ee, ie);
        let ye = this.howls.get(He);
        if (!ye) {
          const be = this.createHowl(Oi[ee], ie);
          be.on("end", (ee => {
            be.loop(ee) || this.forget(ee)
          })), be.on("stop", (ee => {
            this.forget(ee)
          })), be.on("play", (ee => {
            this.live.has(ee) && this.started.add(ee)
          })), be.on("loaderror", (ee => {
            if ("loaded" !== be.state()) {
              this.failed.add(be);
              for (const [ee, ie] of this.live) ie.howl === be && this.forget(ee)
            } else "number" === typeof ee && this.forget(ee)
          })), this.howls.set(He, be), ye = be
        }
        return ye
      }
      setRel(ee, ie) {
        const He = this.live.get(ee);
        He && (si(He), He.fadeMs = 0, He.rel = li(ie), He.gain = He.rel * this.master, He.howl.volume(He.gain, ee))
      }
      fade(ee, ie, He, ye) {
        const be = this.live.get(ee);
        if (!be) return;
        si(be);
        const {
          howl: Me
        } = be, Ke = this.gainNow(be);
        be.rel = li(ie), be.gain = be.rel * this.master;
        const Ue = He > 0 ? Math.min(He, 65535) : 0,
          Fe = 0 === Ue || Ke === be.gain;
        be.fadeMs = Fe ? 0 : Ue, Fe ? Me.volume(be.gain, ee) : (be.fadeFrom = Ke, be.fadeAt = this.now(), Me.fade(Ke, be.gain, Ue, ee)), ye && (Fe ? Me.stop(ee) : be.stopTimer = setTimeout((() => {
          be.stopTimer = void 0, Me.stop(ee)
        }), Ue))
      }
      gainNow(ee) {
        if (ee.fadeMs > 0) {
          const ie = (this.now() - ee.fadeAt) / ee.fadeMs;
          if (ie < 1) return ee.fadeFrom + (ee.gain - ee.fadeFrom) * Math.max(0, ie);
          ee.fadeMs = 0
        }
        return ee.gain
      }
      forget(ee) {
        this.started.delete(ee);
        const ie = this.live.get(ee);
        ie && (si(ie), this.live.delete(ee), 0 !== ie.handle && this.core.get(ie.handle) === ee && this.core.delete(ie.handle))
      }
    }

    function ji(ee, ie) {
      return 2 * ee + (ie ? 1 : 0)
    }

    function si(ee) {
      void 0 !== ee.stopTimer && (clearTimeout(ee.stopTimer), ee.stopTimer = void 0)
    }
    var Ii = He(41721),
      Ni = He(39922);
    class Gi {
      constructor(ee, ie, He, ye) {
        this.key = ee, this.model = ie, this.host = ye, this.bk = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.kKe = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, this.tailView = void 0, this.tailCut = new Uint8Array(0), this.made = !1, this.xf = !1, this.bk = Math.max(1, Math.ceil(He)), this.records = new Float32Array(this.bk * Ri.e), this.isDirty = new Uint8Array(this.bk), this.tail = new Uint8Array(this.bk * fe.qc.Bytes), this.tailView = new DataView(this.tail.buffer), this.make(ye.cmd())
      }
      setOrigin(ee, ie, He) {
        this.origin[0] = ee, this.origin[1] = ie, this.origin[2] = He
      }
      markDirty(ee) {
        !this.xf && ee >= 0 && ee < this.bk && ee < fe.qc.Max && this.yT(ee, ee + 1)
      }
      commit(ee) {
        if (this.xf) return;
        (ee = Math.min(Math.max(Math.floor(ee), 0), this.bk, fe.qc.Max)) > this.count && this.yT(this.count, ee), this.count = ee;
        const {
          origin: ie,
          sentOrigin: He,
          dirtyList: ye
        } = this, be = this.kKe !== ee, Me = He[0] !== ie[0] || He[1] !== ie[1] || He[2] !== ie[2];
        if (0 === ye.length && !be && !Me) return;
        const Ke = this.host.cmd();
        if (!Ke || !this.make(Ke)) return;
        const Ue = ye.length,
          {
            records: Fe,
            tailView: Je
          } = this;
        for (let oe = 0; oe < Ue; oe++) {
          const ee = ye[oe],
            ie = ee * Ri.e,
            He = oe * fe.qc.Bytes,
            be = 0 !== Fe[ie + Ri.i] ? fe.qc.Hidden : 0;
          Je.setUint32(He, (ee | be) >>> 0, !0), Je.setFloat32(He + 4, Fe[ie], !0), Je.setFloat32(He + 8, Fe[ie + 1], !0), Je.setFloat32(He + 12, Fe[ie + 2], !0)
        }
        if ((0, fe.Te)(Ke, 0, this.key, ee, ie, Ue, this.tailOf(Ue))) {
          for (let ee = 0; ee < Ue; ee++) this.isDirty[ye[ee]] = 0;
          ye.length = 0, this.kKe = ee, He[0] = ie[0], He[1] = ie[1], He[2] = ie[2]
        }
      }
      grow(ee) {
        (ee = Math.ceil(ee)) <= this.bk || this.xf || (this.records = (0, Ni.c)(this.records, new Float32Array(ee * Ri.e)), this.isDirty = (0, Ni.c)(this.isDirty, new Uint8Array(ee)), this.tail = new Uint8Array(ee * fe.qc.Bytes), this.tailView = new DataView(this.tail.buffer), this.bk = ee)
      }
      dispose() {
        this.xf || (this.xf = !0, this.host.xf(this, this.made ? this.key : null))
      }
      make(ee) {
        if (!this.made && ee) {
          const {
            item: ie,
            scale: He,
            yaw: ye
          } = this.model;
          this.made = (0, fe.Ye)(ee, 0, this.key, ie, He, ye)
        }
        return this.made
      }
      tailOf(ee) {
        const ie = ee * fe.qc.Bytes;
        return this.tailCut.buffer === this.tail.buffer && this.tailCut.length === ie || (this.tailCut = this.tail.subarray(0, ie)), this.tailCut
      }
      yT(ee, ie) {
        const {
          dirtyList: He,
          isDirty: ye
        } = this;
        for (let be = ee; be < ie; be++) 0 === ye[be] && (ye[be] = 1, He.push(be))
      }
    }
    var ri = He(608),
      Qi = He(45796);
    const eH = new TextEncoder,
      iH = new Uint8Array(0),
      HH = [0, 0, 0];
    class yH {
      constructor(ee, ie) {
        this.keys = 0, this.live = new Set, this.owing = new Set, this.host = void 0, this.host = {
          cmd: ee,
          serverId: ie,
          owes: ee => {
            this.owing.add(ee)
          },
          settled: (ee, ie) => {
            this.owing.delete(ee), ie && this.live.delete(ee)
          }
        }
      }
      create(ee, ie) {
        return He = ee, ri.k.includes(He) ? this.add({
          lifeform: oe.j.indexOf(ee)
        }, ie) : null;
        var He
      }
      createCosmetic(ee, ie) {
        const He = Qi.COSMETIC_MODEL_KEYS.get(ee);
        return void 0 === He ? null : this.add({
          attachment: He
        }, ie)
      }
      add(ee, ie) {
        const He = new bH(++this.keys, ee, ie, this.host);
        return this.live.add(He), He
      }
      disposeAll() {
        for (const ee of [...this.live]) ee.dispose()
      }
      flush() {
        if (0 === this.owing.size) return;
        const ee = this.host.cmd();
        for (const ie of this.owing)
          if (!ie.sync(ee)) return
      }
    }
    class bH {
      constructor(ee, ie, He, ye) {
        this.key = ee, this.source = ie, this.scale = He, this.host = ye, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = iH, this.perch = null, this.owed = 1, this.xf = !1, this.sync()
      }
      setPose(ee, ie) {
        this.xf || (this.feet[0] = ee[0], this.feet[1] = ee[1], this.feet[2] = ee[2], this.yaw = ie, this.owed |= 2, this.sync())
      }
      setVisible(ee) {
        this.xf || ee === this.visible || (this.visible = ee, this.owed |= 4, this.sync())
      }
      setClip(ee) {
        this.xf || ee === this.clip || (this.clip = ee, this.clipBytes = null === ee ? iH : eH.encode(ee), this.owed |= 16, this.sync())
      }
      setPerch(ee) {
        this.xf || (this.perch = ee, this.owed |= 32, this.sync())
      }
      dispose() {
        this.xf || (this.xf = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
      }
      sync() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.host.cmd();
        return this.write(ee) ? (this.host.settled(this, this.xf), !0) : (this.host.owes(this), !1)
      }
      write(ee) {
        if (!ee) return this.owed = 0, !0;
        if (1 & this.owed) {
          if (!("lifeform" in this.source ? (0, fe.$e)(ee, 0, this.key, this.source.lifeform, this.scale) : (0, fe.ze)(ee, 0, this.key, this.source.attachment, this.scale))) return !1;
          this.owed &= -2
        }
        const {
          owed: ie,
          perch: He
        } = this, ye = (2 & ie ? fe.Rc.Pose : 0) | (4 & ie ? fe.Rc.Visible : 0) | (16 & ie ? fe.Rc.Clip : 0) | (32 & ie ? fe.Rc.Perch : 0);
        if (0 !== ye) {
          var be, Me;
          if (!(0, fe._e)(ee, 0, this.key, ye, this.visible ? 1 : 0, He ? 1 : 0, this.feet, this.yaw, He ? this.host.serverId(He.XH) : 0, null !== (be = null === He || void 0 === He ? void 0 : He.offset) && void 0 !== be ? be : HH, null !== (Me = null === He || void 0 === He ? void 0 : He.yaw) && void 0 !== Me ? Me : 0, 16 & ie ? this.clipBytes : iH)) return !1;
          this.owed &= -55
        }
        if (8 & this.owed) {
          if (!(0, fe.Ze)(ee, 0, this.key)) return !1;
          this.owed = 0
        }
        return !0
      }
    }
    var MH = He(42091);

    function KH(ee, ie, He, ye) {
      return (0, MH.e)(), (0, fe.If)(ee, ie, He, ye)
    }
    var UH = He(39943),
      FH = He(41712),
      JH = He(42103);
    const oH = [0, 0, 0],
      RH = [0, 0, 0],
      kH = [0, 0, 0],
      qH = [0, 0, 0],
      fH = {
        origin: [0, 0, 0],
        direction: [0, 0, 1]
      },
      TH = [0, 0, 0],
      pH = [0, 0],
      XH = [1, 1, 1],
      zH = 1 / 3;
    const BH = ki.g;

    function EH(ee) {
      const ie = ki.d[ee],
        He = ie && ki.g[ie.mainMultiblock];
      return He && {
        main: He,
        x: ie.compX,
        y: ie.compY,
        z: ie.compZ
      }
    }

    function gH(ee) {
      if (null === ee || void 0 === ee) return fe.$c;
      const ie = +ee;
      return Number.isInteger(ie) && ie >= -2147483648 && ie <= 2147483647 && String(ie) === String(ee) ? ie : fe.$c
    }

    function OH(ee, ie, He) {
      return (0, fe.Qf)(ee, 0, ie, null !== He && void 0 !== He ? He : Number.NaN)
    }
    class dH {
      constructor(ee) {
        this.deps = ee, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new UH.e((() => this.tables.getClientOption("forcedCameraDirectionTransitionMs")), (ee => {
          var ie, He;
          null === (ie = (He = this.deps).setLocalOptions) || void 0 === ie || ie.call(He, ee)
        })), this.mobModels = new yH((() => this.deps.cmd()), gH), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
          uvOffset: [0, 0]
        }, this.poolHost = {
          cmd: () => this.deps.cmd(),
          xf: (ee, ie) => {
            this.livePools.delete(ee), null !== ie && (this.owedFrees.push(ie), this.flushOwed())
          }
        }, this.api = ee.api, this.live = ee.live, this.chunks = ee.chunks, this.items = ee.items, this.tables = ee.tables
      }
      isLocal(ee) {
        return null !== ee && void 0 !== ee && +ee === this.api.localId
      }
      assertLocal(ee, ie) {
        if (!this.isLocal(ee)) throw new Error(`Attempted to ${ie} for a player that is not the local player`)
      }
      pE(ee) {
        const ie = this.api.pE(ee);
        if (!ie) throw new Error(`Entity ${ee} has no replicated position`);
        return ie
      }
      checkValid(ee) {
        return !!this.deps.isSessionLive() && (null === ee || void 0 === ee || this.api.checkValid(ee))
      }
      isAlive(ee) {
        return !1 !== this.api.isAlive(ee)
      }
      getItemStat(ee, ie, He) {
        return this.isLocal(ee) || null !== ee && "Player" === this.api.getEntityType(ee) ? this.tables.getItemStat(ie, He) : this.tables.getDefaultItemStat(ie, He)
      }
      getClientOption(ee, ie) {
        return this.assertLocal(ee, "get a client option"), this.tables.getClientOption(ie)
      }
      openShop(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0;
        this.assertLocal(ee, "open shop"), Ke.h.yR("showShopFromServer", {
          toggle: ie,
          Vi: He
        }, !0)
      }
      sendMessage(ee, ie, He) {
        this.assertLocal(ee, "send a message");
        const ye = "string" === typeof ie ? [{
          str: ie,
          style: He
        }] : ie;
        Ke.h.yR("chat", {
          content: ye
        }, !0)
      }
      getEntityType(ee) {
        return this.api.getEntityType(ee)
      }
      getEntityName(ee) {
        const ie = gH(ee);
        return ie === fe.$c ? void 0 : (0, Ii.i)(this.api, ie)
      }
      hasEffect(ee, ie) {
        const He = gH(ee);
        return He !== fe.$c && (0, Ii.e)(this.api, He, ie)
      }
      getMetaInfo(ee) {
        return this.tables.getMetaInfo(ee)
      }
      getPlayerDbId(ee) {
        return this.assertLocal(ee, "get a DB ID"), this.deps.playerDbId()
      }
      getBlockData(ee, ie, He) {
        if (!this.chunks.dataCleared(ee, ie, He)) return (0, Ii.c)(this.api, ee, ie, He)
      }
      RV(ee, ie, He, ye) {
        this.setBlockId(ee, ie, He, this.tables.getItemId(ye))
      }
      setOtherEntitySetting(ee, ie, He, ye) {
        if (!this.isLocal(ee)) throw new Error("Attempted to set an other-entity setting for a player that is not the local player");
        if (!Object.hasOwn(fe.od, He)) throw new Error(`Unknown other-entity setting ${He}`);
        const be = fe.od[He],
          Me = gH(ie);
        if (Me === fe.$c || !this.deps.beforeWrite()) return;
        const Ke = (0, ve.f)(ye);
        if (Ke.length > 16384) throw new Error(`The other-entity setting ${He}'s value is over 16384 bytes`);
        const Ue = this.api.memoryView(Uint8Array, this.api.scratch(), Ke.length, "set_other_entity_setting's value");
        Ue && (Ue.set(Ke), this.api.queries.setOtherEntitySetting(Me, be, Ke.length))
      }
      getPositionView(ee) {
        return this.live.position(+ee)
      }
      readDrawnPosition(ee, ie) {
        return this.api.readDrawnPosition(gH(ee), ie)
      }
      getDrawnHeading(ee) {
        const ie = this.drawnEntity(ee);
        if (!ie) return null;
        if (1 === fe.pb.headingIsDrawn(ie, 0)) return fe.pb.heading(ie, 0);
        const He = this.api.apiView;
        return this.isLocal(ee) && 0 === (fe.v.playerFlags(He, 0) & fe.Pd.FreeCam) ? fe.v.heading(He, 0) : null
      }
      getDrawnEyeHeight(ee) {
        const ie = this.drawnEntity(ee),
          He = ie ? fe.pb.eyeHeight(ie, 0) : 0;
        return He > 0 ? He : null
      }
      drawnEntity(ee) {
        const ie = gH(ee);
        return ie === fe.$c || this.api.queries.directorEntity(ie) < fe.pb.BYTES ? null : this.api.scratchData(fe.pb.BYTES, "the drawn DirectorEntity")
      }
      isEntityDrawn(ee) {
        const ie = gH(ee);
        return ie !== fe.$c && 1 === this.api.queries.entityDrawn(ie)
      }
      getPlayerIds() {
        return JH.f.ids()
      }
      getPlayerCosmetics(ee) {
        var ie;
        return null !== (ie = (0, JH.h)(ee)) && void 0 !== ie ? ie : null
      }
      getLocalPlayerMovement() {
        const ee = fe.v.playerFlags(this.api.apiView, 0);
        return 0 === (ee & fe.Pd.Replay) && this.api.readDrawnPosition(this.api.localId, kH) ? {
          onGround: 0 !== (ee & fe.Pd.OnGround),
          jumpHeld: 0 !== (ee & fe.Pd.JumpHeld)
        } : null
      }
      isLocalPlayerInVehicle() {
        return (0, qi.x)(this.deps.localPhysicsType())
      }
      Vye(ee) {
        return this.isLocal(ee) ? this.items.lJ() : null
      }
      getInventoryItems() {
        return this.items.playerItems()
      }
      getHeldGunInaccuracy() {
        var ee, ie;
        return "Gun" === (null === (ee = this.aliveHeld()) || void 0 === ee || null === (ie = ee.typeObj) || void 0 === ie ? void 0 : ie.type) ? this.items.inaccuracy : null
      }
      aliveHeld() {
        return !1 === this.api.isAlive(this.api.localId) ? null : this.items.lJ()
      }
      isCrosshairShown() {
        var ee, ie;
        const He = (0, Ti.b)(ye.e.get("crosshairGameView"), ye.e.get("crosshairShownOverride"));
        if (null !== He) return He;
        const be = null === (ee = this.aliveHeld()) || void 0 === ee ? void 0 : ee.typeObj,
          Me = "Gun" === (null === be || void 0 === be ? void 0 : be.type),
          Ke = Me || !0 === (null === be || void 0 === be ? void 0 : be.showsAimingUi),
          Ue = 0 === (fe.v.playerFlags(this.api.apiView, 0) & fe.Pd.ZoomFirstPerson),
          Fe = null !== (ie = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ie ? ie : null;
        return (0, Ti.e)({
          gun: Me,
          aimable: Ke
        }, Ue, (0, Xi.b)(), Fe)
      }
      setCrosshairShown(ee) {
        ye.e.set({
          crosshairShownOverride: ee
        })
      }
      getInventoryFreeSlotCount(ee) {
        return this.isLocal(ee) ? this.items.freeSlots() : null
      }
      getSelectedInventorySlotI(ee) {
        return this.isLocal(ee) ? this.items.selectedSlot : null
      }
      getItemSlot(ee, ie) {
        return this.isLocal(ee) ? this.items.slot(ie) : null
      }
      swapInventorySlots(ee, ie) {
        return this.items.swap(ee, ie)
      }
      isPlayerCrouching(ee) {
        if (this.isLocal(ee)) return 0 !== (fe.v.playerFlags(this.api.apiView, 0) & fe.Pd.Crouching);
        const ie = gH(ee);
        return ie !== fe.$c && 1 === this.api.queries.entityCrouching(ie)
      }
      getMiningBlock() {
        return this.live.breakingPosition()
      }
      isMining() {
        return 0 !== (fe.v.playerFlags(this.api.apiView, 0) & fe.Pd.AttemptingBreak)
      }
      getTargetedBlock() {
        return this.live.FHe()
      }
      getActionRay() {
        const ee = this.api.apiView;
        for (let ie = 0; ie < 3; ie++) fH.origin[ie] = fe.v.WHe(ee, 0, ie), fH.direction[ie] = fe.v.actionDir(ee, 0, ie);
        return fH
      }
      canModifyBlockAt(ee, ie, He) {
        return 1 === this.api.queries.canModify(ee, ie, He)
      }
      isSolidToPlayerBlockId(ee) {
        return this.tables.isSolidBlockId(ee) && !this.chunks.isWalkThrough(ee)
      }
      blockNameToBlockId(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.tables.blockNameToBlockId(ee, ie)
      }
      blockIdToBlockName(ee) {
        return this.tables.nameOfId(ee)
      }
      hHe(ee, ie, He, ye, be) {
        return 1 === this.api.queries.terrainBlocked(ye, ee, ie, He, gH(null !== be && void 0 !== be ? be : null))
      }
      getChunkVersion(ee, ie, He) {
        return this.chunks.version(ee, ie, He)
      }
      scanBlocks(ee, ie, He, ye, be, Me, Ke, Ue) {
        return this.chunks.scan(ee, ie, He, ye, be, Me, Ke, Ue)
      }
      readColumnTops(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        this.chunks.columnTops(ee, ie, He, ye, be, Me, Ke, Ue, Fe)
      }
      isBlockInLoadedChunk(ee, ie, He) {
        return this.chunks.isLoaded(ee, ie, He)
      }
      getBlockId(ee, ie, He) {
        return this.chunks.po(ee, ie, He)
      }
      playSound(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!this.isLocal(ee)) return null;
        const Ke = this.playSoundFrom(ie, He, be, Me);
        return 1 === ye ? Ke : Ke.rate(ye)
      }
      preloadSounds(ee) {
        var ie, He;
        null === (ie = (He = this.deps).preloadSounds) || void 0 === ie || ie.call(He, ee)
      }
      playSoundFrom(ee, ie, He, ye) {
        var be, Me;
        const Ke = this.deps.playSound;
        if (!Ke) return Vi.c;
        const Ue = null === He || void 0 === He ? void 0 : He.mb,
          Fe = null !== (be = null === He || void 0 === He ? void 0 : He.maxHearDist) && void 0 !== be ? be : fi.f,
          Je = null !== (Me = null === He || void 0 === He ? void 0 : He.refDistance) && void 0 !== Me ? Me : fi.j;
        let oe = null;
        if (Array.isArray(Ue)) oH[0] = Ue[0], oH[1] = Ue[1], oH[2] = Ue[2], oe = oH;
        else if (void 0 !== Ue && null !== Ue) {
          const ee = gH(Ue);
          if (!this.api.isLocal(ee)) {
            if (!this.api.readPosition(ee, oH)) return Vi.c;
            oe = oH
          }
        }
        return Ke(ee, ie, oe, oe && this.ear(), Fe, Je, ye)
      }
      ear() {
        if (this.api.readPosition(this.api.localId, RH)) RH[1] += vi;
        else {
          const ee = this.api.apiView;
          if (0 === fe.v.viewProj(ee, 0, 3) && 0 === fe.v.viewProj(ee, 0, 7) && 0 === fe.v.viewProj(ee, 0, 11)) return null;
          for (let ie = 0; ie < 3; ie++) RH[ie] = fe.v.eye(ee, 0, ie)
        }
        return Number.isFinite(RH[0] + RH[1] + RH[2]) ? RH : null
      }
      setBlockId(ee, ie, He, ye) {
        if (!Number.isInteger(ye) || ye < 0 || ye > 65535) throw new Error(`Invalid block id ${ye}`);
        if (!this.deps.beforeWrite() || !this.chunks.isLoaded(ee, ie, He)) return;
        const be = Math.floor(ee),
          Me = Math.floor(ie),
          Ke = Math.floor(He),
          Ue = this.predictedCells(be, Me, Ke, ye);
        if (1 === this.api.queries.RV(be, Me, Ke, ye)) {
          for (let ee = 0; ee < Ue.length; ee += 5) this.chunks.setOverlay(Ue[ee], Ue[ee + 1], Ue[ee + 2], Ue[ee + 3], 1 === Ue[ee + 4]);
          this.live.refreshTarget()
        }
      }
      particlesEnabled() {
        return this.deps.particles.enabled()
      }
      createParticles(ee, ie) {
        return this.deps.particles.create(ee, ie)
      }
      playParticleEffect(ee) {
        this.deps.particles.playEffect(ee)
      }
      burstParticlePreset(ee, ie, He) {
        this.deps.particles.burstPreset(ee, ie, He)
      }
      createGameMesh(ee, ie, He) {
        const ye = ++this.meshKeys,
          be = this.deps.cmd();
        if (!be) return ye;
        const {
          look: Me,
          colour: Ke
        } = function(ee) {
          switch (ee.kind) {
            case void 0:
            case "flatEmissive":
              return ee.onTop ? {
                look: fe.Vb.FlatOnTop,
                colour: [...ee.rgb, ee.alpha]
              } : ee.opaque ? {
                look: fe.Vb.FlatOpaque,
                colour: [...ee.rgb, 1]
              } : {
                look: fe.Vb.Flat,
                colour: [...ee.rgb, ee.alpha]
              };
            case "chevronPath":
              return {
                look: fe.Vb.Chevrons, colour: [...(0, zi.c)(ee.colour), ee.alpha]
              };
            case "furnaceFire":
              return {
                look: fe.Vb.FurnaceFire, colour: [1, 1, 1, 1]
              }
          }
        }(ie), Ue = Math.floor(ee.positions.length / 3), Fe = function(ee, ie) {
          const He = Math.floor(ee.positions.length / 3),
            ye = ee.indices.length,
            be = He * (ie ? 5 : 3),
            Me = new Uint8Array(4 * (be + ye)),
            Ke = new DataView(Me.buffer);
          for (let Je = 0; Je < 3 * He; Je++) Ke.setFloat32(4 * Je, ee.positions[Je], !0);
          if (ie) {
            var Ue;
            const ie = null !== (Ue = ee.uvs) && void 0 !== Ue ? Ue : [];
            for (let ee = 0; ee < 2 * He; ee++) {
              var Fe;
              Ke.setFloat32(4 * (3 * He + ee), null !== (Fe = ie[ee]) && void 0 !== Fe ? Fe : 0, !0)
            }
          }
          for (let Je = 0; Je < ye; Je++) Ke.setUint32(4 * (be + Je), ee.indices[Je], !0);
          return Me
        }(ee, (0, Ri.l)(ie));
        return (0, fe.Ie)(be, 0, ye, Me, Ke, He, Ue, ee.indices.length, Fe) && this.liveMeshes.add(ye), ye
      }
      setGameMesh(ee, ie) {
        var He;
        const ye = this.deps.cmd();
        if (!ye) return;
        let be = 0;
        ie.anchor && (be |= fe.Wb.Anchor, TH[0] = ie.anchor[0], TH[1] = ie.anchor[1], TH[2] = ie.anchor[2]), void 0 !== ie.visible && (be |= fe.Wb.Visible), ie.uvOffset && (be |= fe.Wb.UvOffset, pH[0] = ie.uvOffset[0], pH[1] = ie.uvOffset[1]);
        const Me = null !== (He = ie.visibility) && void 0 !== He ? He : 1;
        void 0 !== ie.visibility && (be |= fe.Wb.Visibility), ie.scale && (be |= fe.Wb.Scale, XH[0] = ie.scale[0], XH[1] = ie.scale[1], XH[2] = ie.scale[2]), 0 !== be && (0, fe.Oe)(ye, 0, ee, be, ie.visible ? 1 : 0, TH, pH, Me, XH)
      }
      disposeGameMesh(ee) {
        const ie = this.deps.cmd();
        ie && !(0, fe.Le)(ie, 0, ee) || this.liveMeshes.delete(ee)
      }
      hasPackModel(ee) {
        var ie, He, ye;
        return null !== (ie = null === (He = (ye = this.deps).hasPackModel) || void 0 === He ? void 0 : He.call(ye, ee)) && void 0 !== ie && ie
      }
      disposeGameOutput() {
        const ee = ee => {
          try {
            ee()
          } catch (ie) {
            console.error("Error freeing client game output", ie)
          }
        };
        for (const ie of [...this.liveMeshes]) ee((() => {
          this.disposeGameMesh(ie)
        }));
        for (const ie of [...this.livePools]) ee((() => {
          ie.dispose()
        }));
        ee((() => {
          this.mobModels.disposeAll()
        })), ee((() => {
          this.setGroundArrowStyle(null)
        })), ee((() => {
          this.setRouteChevrons(null), this.routeOffset = 0, this.routeLook = ""
        })), ee((() => {
          this.setCrosshairShown(null)
        })), ee((() => {
          this.cameraTurn.dispose()
        })), ee((() => {
          this.farSet && (this.farSet = !1, this.setCameraFar(null))
        }))
      }
      createInstancePool(ee, ie) {
        const He = this.tables.idOf(ee.item);
        if (void 0 === He) return null;
        const ye = new Gi(++this.poolKeys, {
          item: He,
          scale: ee.scale,
          yaw: ee.yaw
        }, ie, this.poolHost);
        return this.livePools.add(ye), ye
      }
      createMobModel(ee, ie) {
        return this.mobModels.create(ee, ie)
      }
      createCosmeticModel(ee, ie) {
        return this.mobModels.createCosmetic(ee, ie)
      }
      setRouteChevrons(ee) {
        if (0 !== this.routeMesh && (this.disposeGameMesh(this.routeMesh), this.routeMesh = 0), !ee || 0 === ee.cells.length) return;
        const ie = `${ee.colour} ${ee.alpha}`;
        ie !== this.routeLook && (this.routeLook = ie, this.routeOffset = 0), this.routeMesh = this.createGameMesh(function(ee) {
          const [ie, He, ye] = ee[0].pos, be = [], Me = [], Ke = [];
          return ee.forEach(((ee, Ue) => {
            let {
              pos: Fe,
              way: [Je, oe]
            } = ee;
            const Re = Fe[0] - ie + .5,
              ke = Fe[1] - He + .04,
              qe = Fe[2] - ye + .5,
              [fe, Te] = [.35 * -oe, .35 * Je],
              [pe, Xe] = [Ue * zH, (Ue + 1) * zH],
              ze = be.length / 3;
            be.push(Re - .5 * Je + fe, ke, qe - .5 * oe + Te), be.push(Re - .5 * Je - fe, ke, qe - .5 * oe - Te), be.push(Re + .5 * Je + fe, ke, qe + .5 * oe + Te), be.push(Re + .5 * Je - fe, ke, qe + .5 * oe - Te), Me.push(0, pe, 1, pe, 0, Xe, 1, Xe), Ke.push(ze, ze + 1, ze + 2, ze + 1, ze + 3, ze + 2)
          })), {
            positions: be,
            uvs: Me,
            indices: Ke
          }
        }(ee.cells), {
          kind: "chevronPath",
          colour: ee.colour,
          alpha: ee.alpha
        }, ee.cells[0].pos), this.setRouteSlide()
      }
      slideRoute(ee) {
        0 !== this.routeMesh && (this.routeOffset = (this.routeOffset + Math.min(ee, 250) / 1e3 * 1.2 * zH) % 1, this.setRouteSlide())
      }
      setRouteSlide() {
        this.routeSlide.uvOffset[1] = -this.routeOffset, this.setGameMesh(this.routeMesh, this.routeSlide)
      }
      setGroundArrowStyle(ee) {
        this.pendingStyle = ee, this.flushOwed()
      }
      flushOwed() {
        this.mobModels.flush();
        const ee = this.owedFrees;
        if (0 === ee.length && void 0 === this.pendingStyle && void 0 === this.pendingFar) return;
        const ie = this.deps.cmd();
        if (!ie) return ee.length = 0, void(this.pendingFar = void 0);
        let He = 0;
        for (; He < ee.length && (0, fe.Ve)(ie, 0, ee[He]);) He++;
        ee.splice(0, He);
        const ye = this.pendingStyle;
        if (void 0 !== ye) {
          (ye ? (0, fe.Rf)(ie, 0, ye.width, ye.alpha, 1, ye.endAtSolidFace ? 1 : 0) : (0, fe.Rf)(ie, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
        }
        const be = this.pendingFar;
        void 0 !== be && (0, fe.Nf)(ie, 0, null !== be && void 0 !== be ? be : 0, null === be ? 1 : 0) && (this.pendingFar = void 0)
      }
      setNametagOffset(ee, ie) {
        const He = this.deps.cmd(),
          ye = gH(ee);
        He && ye !== fe.$c && (0, fe.Vf)(He, 0, ye, ie)
      }
      setFacingTolerance(ee, ie) {
        const He = this.deps.cmd(),
          ye = gH(ee);
        He && ye !== fe.$c && OH(He, ye, ie)
      }
      forEachEntity(ee) {
        const {
          api: ie
        } = this;
        for (let He = 0; He < ie.idStr.length; He++) {
          const ye = ie.idStr[He];
          null === ye || ge(ie.kinds[He]) || ee(ye)
        }
      }
      getEntityInfo(ee) {
        return this.deps.entityInfo.get(ee)
      }
      isEntityInteractable(ee) {
        const ie = gH(ee);
        return ie !== fe.$c && 1 === this.api.queries.entityInteractable(ie)
      }
      isLocalPlayer(ee) {
        return this.isLocal(ee)
      }
      getLineOwner(ee) {
        var ie;
        const He = null === (ie = this.deps.entityInfo.get(ee)) || void 0 === ie ? void 0 : ie.meshOpts;
        if (!He) return null;
        try {
          const {
            lineToEId: ee
          } = JSON.parse(He);
          return null !== ee && void 0 !== ee ? ee : null
        } catch {
          return null
        }
      }
      getCameraPosition() {
        const ee = this.api.apiView;
        return qH[0] = fe.v.eye(ee, 0, 0), qH[1] = fe.v.eye(ee, 0, 1), qH[2] = fe.v.eye(ee, 0, 2), qH
      }
      getCameraFar() {
        return fe.v.cameraFar(this.api.apiView, 0)
      }
      setCameraFar(ee) {
        null !== ee && (this.farSet = !0), this.pendingFar = ee, this.flushOwed()
      }
      turnCamera(ee, ie) {
        this.cameraTurn.turn(ee, ie)
      }
      clearPickupDelay(ee) {
        const ie = this.deps.cmd(),
          He = gH(ee);
        ie && He !== fe.$c && (0, fe.ue)(ie, 0, He)
      }
      sendChat(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = this.deps.sendCmd();
        return null !== He && KH(He, 0, FH.e.Chat, (0, ve.f)((0, FH.j)({
          nF: ee,
          jF: ie
        })))
      }
      sendCommand(ee) {
        ee.length <= 119 && this.sendChat(`/${ee}`)
      }
      predictedCells(ee, ie, He, ye) {
        const be = this.chunks,
          Me = [],
          Ke = (ee, ie, He, ye, be) => {
            Me.push(ee, ie, He, ye, this.tables.blockRootId(be) === this.tables.blockRootId(ye) ? 0 : 1)
          },
          Ue = be.po(ee, ie, He),
          Fe = EH(Ue);
        if (Fe) {
          const [ye, Me, Je] = [ee - Fe.x, ie - Fe.y, He - Fe.z], oe = BH[be.po(ye, Me, Je)], Re = null === oe || void 0 === oe ? void 0 : oe.positions.some((ee => ee.id === Ue && ee.x === Fe.x && ee.y === Fe.y && ee.z === Fe.z));
          for (const ee of (Re && oe ? oe : Fe.main).positions) be.po(ye + ee.x, Me + ee.y, Je + ee.z) === ee.id && Ke(ye + ee.x, Me + ee.y, Je + ee.z, 0, ee.id)
        }
        const Je = EH(ye);
        if (Je)
          for (const Re of Je.main.positions) {
            const [ye, Me, Ue] = [ee + Re.x - Je.x, ie + Re.y - Je.y, He + Re.z - Je.z];
            Ke(ye, Me, Ue, Re.id, be.po(ye, Me, Ue))
          } else Ke(ee, ie, He, ye, Ue);
        const oe = this.tables;
        if ((0 !== oe.attachedTopOf(Ue) || 0 !== oe.attachedTopOf(ye)) && be.isLoaded(ee, ie + 1, He)) {
          let Fe = be.po(ee, ie + 1, He);
          for (let ye = 0; ye < Me.length; ye += 5) Me[ye] === ee && Me[ye + 1] === ie + 1 && Me[ye + 2] === He && (Fe = Me[ye + 3]);
          const Je = this.attachedTopWrite(Ue, ye, Fe);
          void 0 !== Je && Ke(ee, ie + 1, He, Je, Fe)
        }
        return Me
      }
      attachedTopWrite(ee, ie, He) {
        const ye = this.tables,
          be = ye.attachedTopOf(ee),
          Me = ye.attachedTopOf(ie),
          Ke = 0 !== be && 0 !== He && ye.blockRootId(He) === ye.blockRootId(be);
        return 0 !== be && 0 !== Me && ye.blockRootId(ee) === ye.blockRootId(ie) ? Ke && He !== Me ? Me : void 0 : 0 === Me || !Ke && 0 !== He ? Ke ? 0 : void 0 : Me
      }
    }
    const WH = fe.ic + fe.mc * fe.xc.BYTES,
      tH = 2147483647,
      ZH = new TextDecoder,
      wH = new TextEncoder,
      DH = Object.freeze({
        eR: 0,
        RJ: null,
        amountAddedToSlot: 0
      }),
      PH = new Proxy({}, {
        get: () => () => fe.kd
      });

    function AH(ee) {
      return Number.isInteger(ee) && ee >= 0 && ee <= 65535
    }

    function YH(ee) {
      return Number.isInteger(ee) && ee >= 0 && ee <= 4294967295
    }
    class VH {
      constructor(ee) {
        this.deps = ee, this.di = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(fe.mc), this.ids = new Uint16Array(fe.mc), this.amounts = new Uint16Array(fe.mc), this.attrRead = new Float64Array(fe.mc).fill(-1), this.stale = new Uint16Array(fe.mc), this.staleVersion = new Uint32Array(fe.mc), this.instances = new Uint32Array(fe.mc), this.viewPtr = 0, this.viewVersion = -1, this.len = 0, this.selected = 0, this.slotIconId = 0, this.stopped = !1, this.listeners = new Set
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
      slot(ee) {
        var ie;
        return Number.isInteger(ee) && ee >= 0 && ee < this.len && 0 !== this.ids[ee] && null !== (ie = this.facades[ee]) && void 0 !== ie ? ie : null
      }
      lJ() {
        return this.slot(this.selected)
      }
      playerItems() {
        const ee = [];
        for (let ie = 0; ie < Math.min(fe.yd, this.len); ie++) ee.push(this.slot(ie));
        return ee
      }
      freeSlots() {
        let ee = 0;
        for (let ie = 0; ie < Math.min(fe.yd - fe.g, this.len); ie++) 0 === this.ids[ie] && ee++;
        return ee
      }
      amountOf(ee) {
        let ie = 0;
        for (let ye = 0; ye < Math.min(fe.yd, this.len); ye++) {
          const be = this.slot(ye);
          var He;
          if ((null === be || void 0 === be ? void 0 : be.name) === ee) ie += null !== (He = be.amount) && void 0 !== He ? He : 1
        }
        return ie
      }
      instance(ee) {
        var ie;
        return null !== (ie = this.instances[ee]) && void 0 !== ie ? ie : 0
      }
      watch(ee) {
        return this.listeners.add(ee), () => {
          this.listeners.delete(ee)
        }
      }
      touch() {
        this.version++
      }
      flush(ee) {
        if (this.version !== this.notified || this.iconChanged) {
          this.notified = this.version, this.iconChanged = !1;
          for (const He of [...this.listeners]) try {
            He()
          } catch (ie) {
            ee(ie)
          }
        }
      }
      chestOpened(ee, ie, He) {
        this.di[0] = ee, this.di[1] = ie, this.di[2] = He, this.version++
      }
      refresh() {
        const ee = this.deps.api.apiView,
          ie = fe.v.inventoryViewPtr(ee, 0),
          He = fe.v.inventoryVersion(ee, 0),
          ye = fe.v.selectedSlot(ee, 0);
        ye !== this.selected && (this.selected = ye, this.version++);
        const be = fe.v.slotIcon(ee, 0);
        if (be !== this.slotIconId && (this.slotIconId = be, this.iconChanged = !0), ie === this.viewPtr && He === this.viewVersion) return;
        this.viewPtr = ie, this.viewVersion = He;
        const Me = this.deps.api.memoryData(ie, WH, 4, "the inventory view"),
          Ke = Me ? Math.min(Me.getUint32(0, !0), fe.mc) : 0;
        Ke !== this.len && (this.len = Ke, this.version++);
        let Ue = 0;
        for (let Fe = 0; Fe < fe.mc; Fe++) {
          const ee = fe.ic + Fe * fe.xc.BYTES,
            ie = null !== Me && Fe < Ke ? fe.xc.item(Me, ee) : 0;
          if (0 === ie || null === Me) {
            0 !== this.ids[Fe] && (this.ids[Fe] = 0, this.attrRead[Fe] = -1, this.instances[Fe]++, this.version++);
            continue
          }
          const He = fe.xc.amount(Me, ee),
            ye = fe.xc.attrVersion(Me, ee);
          ie === this.ids[Fe] && He === this.amounts[Fe] || this.fill(Fe, ie, He), ye !== this.attrRead[Fe] && (this.stale[Ue] = Fe, this.staleVersion[Ue] = ye, Ue++)
        }
        Ue > 0 && this.fetchAttributes(Ue)
      }
      fill(ee, ie, He) {
        const {
          tables: ye
        } = this.deps, be = ie !== this.ids[ee];
        let Me = this.facades[ee];
        Me || (Me = {
          name: "",
          amount: null,
          attributes: {
            customAttributes: {}
          },
          typeObj: null
        }, this.facades[ee] = Me), be && (Me.name = ye.nameOfId(ie), Me.typeObj = ye.itemType(ie), Me.attributes = {
          customAttributes: {}
        }, this.attrRead[ee] = -1, this.instances[ee]++), Me.amount = 0 === He ? null : He, this.ids[ee] = ie, this.amounts[ee] = He, this.version++
      }
      fetchAttributes(ee) {
        const {
          api: ie,
          onError: He
        } = this.deps, ye = ie.memoryView(Uint16Array, ie.scratch(), ee, "item_attributes_batch's slots");
        if (!ye) return void this.markRead(ee);
        ye.set(this.stale.subarray(0, ee));
        const be = ie.queries.itemAttributesBatch(ee),
          Me = 4294967295 === be ? null : ie.memoryData(ie.scratch(), be, 4, "item_attributes_batch's answer");
        if (!Me) return void this.markRead(ee);
        const Ke = new Uint8Array(Me.buffer, Me.byteOffset, be);
        for (let Fe = 0; Fe + 8 <= be;) {
          const ee = Me.getUint16(Fe, !0),
            ie = Me.getUint32(Fe + 4, !0),
            ye = Ke.subarray(Fe + 8, Fe + 8 + ie);
          Fe += 8 + (0, ke.le)(ie);
          const be = this.facades[ee];
          if (be && 0 !== this.ids[ee] && 0 !== ie) {
            try {
              be.attributes = JSON.parse(ZH.decode(ye))
            } catch (Ue) {
              He(Ue)
            }
            this.version++
          }
        }
        this.markRead(ee)
      }
      markRead(ee) {
        for (let ie = 0; ie < ee; ie++) this.attrRead[this.stale[ie]] = this.staleVersion[ie]
      }
      swap(ee, ie) {
        return AH(ee) && AH(ie) && this.settle(this.queries().invSwap(ee, ie))
      }
      move(ee, ie, He) {
        return AH(ee) && AH(ie) && YH(He) && this.settle(this.queries().invMove(ee, ie, He))
      }
      quickMove(ee, ie, He, ye) {
        var be, Me;
        if (!AH(ee) || !AH(ie) || !AH(He) || null !== ye && !YH(ye)) return null;
        const Ke = this.queries().invQuickMove(ee, ie, He, null === ye ? -1 : Math.min(ye, tH)),
          Ue = Ke === fe.kd ? fe.Db : null !== (be = null === (Me = this.extras()) || void 0 === Me ? void 0 : Me[1]) && void 0 !== be ? be : fe.Db;
        return this.settle(Ke), Ue === fe.Db ? null : Ue
      }
      remove(ee, ie, He) {
        return AH(ee) && YH(ie) && this.settle(this.queries().invRemove(ee, ie, He ? 1 : 0))
      }
      selectSlot(ee) {
        return AH(ee) && this.settle(this.queries().selectSlot(ee))
      }
      closeChest() {
        return this.settle(this.queries().closeChest())
      }
      enchant(ee, ie, He) {
        if (!AH(ee) || !Number.isInteger(ie)) return !1;
        const [ye, be, Me] = He;
        return this.settle(this.queries().invEnchant(ee, ie, Math.floor(ye), Math.floor(be), Math.floor(Me)))
      }
      craft(ee, ie, He) {
        let ye;
        try {
          ye = this.deps.tables.getItemId(ee)
        } catch {
          return DH
        }
        if (!AH(ie) || null !== He && (Number.isNaN(He) || He < 0)) return DH;
        const be = null === He || He > tH ? -1 : Math.floor(He),
          Me = this.queries().craft(ye, ie, be);
        let Ke = DH;
        const Ue = Me === fe.kd ? null : this.extras();
        if (Ue) {
          const [ee, ie, He] = Ue;
          Ke = {
            eR: ee,
            RJ: ie === fe.Db ? null : ie,
            amountAddedToSlot: He
          }
        }
        return this.settle(Me), Ke
      }
      salvage(ee, ie, He) {
        let ye;
        try {
          ye = this.deps.tables.getItemId(ie)
        } catch {
          return !1
        }
        return AH(ee) && Number.isInteger(He) && this.settle(this.queries().salvage(ee, ye, Math.max(Math.min(He, tH), -tH)))
      }
      craftingView(ee, ie, He) {
        var ye;
        if (this.stopped) return null;
        const {
          api: be,
          onError: Me
        } = this.deps, Ke = ee ? wH.encode(ee) : null;
        if (null !== Ke) {
          if (Ke.length > 1024) return Me(new Error(`The crafting station ${ee}'s name is over 1024 bytes`)), null;
          const ie = be.memoryView(Uint8Array, be.scratch(), Ke.length, "crafting_view's station");
          if (!ie) return null;
          ie.set(Ke)
        }
        const Ue = AH(ie) && AH(He),
          Fe = be.queries.craftingView(null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.length) && void 0 !== ye ? ye : 0, Ue ? ie : 0, Ue ? He : 0);
        return Fe < fe.hb.BYTES ? (be.reportCorruption(`crafting_view's answer of ${Fe} bytes`), null) : be.memoryData(be.scratch(), Fe, 1, "crafting_view's answer")
      }
      queries() {
        var ee, ie;
        return !1 === (null === (ee = (ie = this.deps).beforeOp) || void 0 === ee ? void 0 : ee.call(ie)) ? (this.stopped = !0, PH) : this.deps.api.queries
      }
      extras() {
        const {
          api: ee
        } = this.deps;
        return ee.memoryView(Uint32Array, ee.scratch(), 3, "a sync query's extra words")
      }
      settle(ee) {
        if (ee === fe.id)(0, MH.e)();
        else if (ee !== fe.kd) {
          const ie = this.deps.cmd();
          ie && function(ee, ie, He) {
            return (0, MH.e)(), (0, fe.ag)(ee, ie, He)
          }(ie, 0, ee) || this.deps.onError(new Error(`Sync op ${ee}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
        }
        return this.stopped || this.refresh(), ee !== fe.kd
      }
    }
    const aH = 1 / .6,
      cH = [0, 1, 0],
      xH = [0, 0, 0],
      LH = new Uint8Array(0),
      CH = 1.2 * Bi.g.KX,
      vH = new TextEncoder,
      uH = [0, 0, 0],
      mH = [0, 0, 0],
      lH = new Map;

    function SH(ee) {
      let ie = lH.get(ee);
      return ie || (lH.size >= 64 && lH.clear(), ie = vH.encode(`{"emitRate":${ee}}`), lH.set(ee, ie)), ie
    }

    function nH(ee) {
      return Number.isFinite(ee) && ee > 0 ? ee : 0
    }

    function jH(ee, ie) {
      for (let He = 0; He < 3; He++) {
        const ye = Math.abs(ie[He]);
        uH[He] = ee[He] - ye, mH[He] = 2 * ye
      }
      return Number.isFinite(uH[0] + uH[1] + uH[2] + mH[0] + mH[1] + mH[2])
    }

    function sH(ee, ie) {
      return "pos1" === ee || "pos2" === ee ? void 0 : ie
    }

    function IH(ee, ie, He) {
      return ee.length > fe.Od.MaxOpts ? (He(new Error(`${ie}'s particle opts are over ${fe.Od.MaxOpts} bytes of JSON`)), null) : ee
    }
    const hH = {
      moveTo() {},
      setEmitRate() {},
      emit() {},
      emitPoints() {},
      setDirections() {},
      stop() {},
      dispose() {}
    };
    class NH {
      constructor(ee) {
        this.deps = ee, this.session = 0, this.nextKey = 1, this.live = 0, this.started = !1
      }
      enabled() {
        return null !== this.sink()
      }
      sink() {
        return this.deps.isSessionLive() ? this.deps.cmd() : null
      }
      create(ee, ie) {
        var He;
        const ye = this.sink(),
          be = null !== (He = ie.half) && void 0 !== He ? He : xH;
        if (!ye || this.live >= fe.Od.MaxLiveKeys || this.nextKey > fe.Od.MaxKey || !jH(ie.pos, be)) return hH;
        const Me = this.nextKey,
          Ke = IH(function(ee) {
            var ie, He, ye;
            const be = JSON.stringify({
              texture: "string" === typeof ee.texture ? ee.texture : "smokePuff",
              bk: ee.bk,
              minLifeTime: ee.minLifeTime,
              maxLifeTime: ee.maxLifeTime,
              minSize: ee.minSize,
              maxSize: ee.maxSize,
              minEmitPower: ee.minEmitPower,
              maxEmitPower: ee.maxEmitPower,
              emitRate: nH(ee.emitRate),
              gravity: null !== (ie = ee.gravity) && void 0 !== ie ? ie : xH,
              dir1: null !== (He = ee.dir1) && void 0 !== He ? He : cH,
              dir2: null !== (ye = ee.dir2) && void 0 !== ye ? ye : cH,
              colorGradients: ee.colorGradients,
              blendMode: ee.blendMode
            });
            return vH.encode(be)
          }(ee), "createParticles", this.deps.onError);
        return Ke && (0, fe.if)(ye, 0, Me, 0, fe.Od.PresetNone, 0, uH, mH, Ke) ? (this.nextKey++, this.live++, this.started = !0, new GH(this, this.session, Me, ee, be)) : hH
      }
      playEffect(ee) {
        const ie = this.sink(),
          {
            pos1: He,
            pos2: ye
          } = ee;
        if (!ie || !He || !ye) return;
        for (let Me = 0; Me < 3; Me++) uH[Me] = Math.min(He[Me], ye[Me]), mH[Me] = Math.abs(ye[Me] - He[Me]);
        if (!Number.isFinite(uH[0] + uH[1] + uH[2] + mH[0] + mH[1] + mH[2])) return;
        const be = IH(vH.encode(JSON.stringify(ee, sH)), "playParticleEffect", this.deps.onError);
        be && (0, fe.df)(ie, 0, 0, fe.Od.PresetNone, fe.Od.HasBox, 0, uH, mH, be)
      }
      burstPreset(ee, ie, He) {
        const ye = this.sink(),
          be = Math.min(Math.floor(He), fe.Od.MaxBurst);
        if (!ye || !Object.hasOwn(fe.Xb, ee) || !(be > 0)) return;
        const Me = CH;
        for (let Ke = 0; Ke < 3; Ke++) uH[Ke] = ie[Ke] - Me / 2, mH[Ke] = Me;
        Number.isFinite(uH[0] + uH[1] + uH[2]) && (0, fe.df)(ye, 0, 0, fe.Xb[ee], fe.Od.HasBox, be, uH, mH, LH)
      }
      sessionEnded() {
        this.session++;
        const ee = this.started ? this.deps.cmd() : null;
        return this.started = !1, this.nextKey = 1, this.live = 0, !ee || (0, fe.jf)(ee, 0)
      }
      sinkFor(ee) {
        return ee === this.session ? this.deps.cmd() : null
      }
      stop(ee, ie) {
        const He = this.sinkFor(ee);
        He && (0, fe.kf)(He, 0, ie) && this.live--
      }
    }
    class GH {
      constructor(ee, ie, He, ye, be) {
        this.owner = ee, this.session = ie, this.key = He, this.half = void 0, this.rate = void 0, this.stopDelayMs = void 0, this.emitted = void 0, this.stopped = !1, this.freed = !1, this.half = [Math.abs(be[0]), Math.abs(be[1]), Math.abs(be[2])], this.rate = nH(ye.emitRate), this.emitted = this.rate > 0;
        const Me = ye.maxLifeTime * aH * 1e3 + 250;
        this.stopDelayMs = Me >= 0 ? Math.min(Me, 2147483647) : 250
      }
      sink() {
        return this.stopped ? null : this.owner.sinkFor(this.session)
      }
      moveTo(ee, ie) {
        const He = this.sink();
        if (He) {
          if (ie)
            for (let ee = 0; ee < 3; ee++) this.half[ee] = Math.abs(ie[ee]);
          jH(ee, this.half) && (0, fe.lf)(He, 0, this.key, fe.Od.HasBox, uH, mH, LH)
        }
      }
      setEmitRate(ee) {
        const ie = this.sink(),
          He = nH(ee);
        ie && He !== this.rate && (0, fe.lf)(ie, 0, this.key, 0, xH, xH, SH(He)) && (this.rate = He, this.emitted ||= He > 0)
      }
      emit(ee) {
        const ie = this.sink(),
          He = Math.min(Math.floor(ee), fe.Od.MaxBurst);
        ie && He > 0 && (0, fe.df)(ie, 0, this.key, fe.Od.PresetNone, 0, He, xH, xH, LH) && (this.emitted = !0)
      }
      emitPoints(ee, ie, He) {
        const ye = this.sink(),
          be = Math.min(Math.floor(He), fe.Od.MaxPoints, Math.floor(ie.length / 4));
        if (!ye || !(be > 0) || !Number.isFinite(ee[0] + ee[1] + ee[2])) return;
        const Me = new Uint8Array(ie.buffer, ie.byteOffset, be * fe.Od.PointBytes);
        (0, fe.ff)(ye, 0, this.key, be, ee, Me) && (this.emitted = !0)
      }
      setDirections(ee, ie) {
        const He = this.sink();
        if (!He || !Number.isFinite(ee[0] + ee[1] + ee[2] + ie[0] + ie[1] + ie[2])) return;
        const ye = vH.encode(JSON.stringify({
          dir1: [ee[0], ee[1], ee[2]],
          dir2: [ie[0], ie[1], ie[2]]
        }));
        (0, fe.lf)(He, 0, this.key, 0, xH, xH, ye)
      }
      stop() {
        const ee = this.sink();
        this.stopped = !0, ee && (this.emitted ? (this.rate > 0 && (0, fe.lf)(ee, 0, this.key, 0, xH, xH, SH(0)), setTimeout((() => {
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
    const rH = ri.m,
      QH = new TextDecoder;

    function ey(ee, ie) {
      const {
        serverIds: He,
        kinds: ye
      } = ee;
      let be = 0;
      for (let Me = 0; Me < He.length; Me++) {
        const ee = He[Me];
        if (ee !== fe.$c && !ge(ye[Me])) {
          if (be === ie.length) {
            const ee = new Int32Array(Math.max(64, 2 * be));
            ee.set(ie), ie = ee
          }
          ie[be++] = ee
        }
      }
      return {
        ids: ie,
        count: be
      }
    }

    function iy(ee, ie) {
      return ee.length >= ie ? ee : new Int32Array(Math.max(ie, 2 * ee.length))
    }

    function Hy(ee, ie, He, ye) {
      for (let be = 0; be < He; be += 4096) {
        const Me = Math.min(4096, He - be),
          Ke = ee.memoryView(Int32Array, ee.scratch(), Me, "entity_info_batch's ids");
        if (!Ke) return !1;
        Ke.set(ie.subarray(be, be + Me));
        const Ue = ee.queries.entityInfoBatch(Me),
          Fe = 4294967295 === Ue ? null : ee.memoryData(ee.scratch(), Ue, 4, "entity_info_batch's records");
        if (!Fe) return !1;
        for (let ee = 0; ee + fe.Ob.BYTES <= Ue;) {
          const ie = fe.Ob.len(Fe, ee);
          ye(fe.Ob.serverId(Fe, ee), yy(Fe, ee, ie)), ee += fe.Ob.BYTES + (0, ke.le)(ie)
        }
      }
      return !0
    }

    function yy(ee, ie, He) {
      var ye, be, Me;
      const Ke = fe.Ob.kind(ee, ie),
        Ue = 0 === Ke ? null : Oe(Ke);
      if (null === Ue) return null;
      const Fe = fe.Ob.variation(ee, ie),
        Je = fe.Ob.pose(ee, ie),
        oe = fe.Ob.meta(ee, ie),
        Re = fe.Ob.mesh(ee, ie),
        ke = 0 !== (fe.Ob.flags(ee, ie) & fe.Kb.HasOpts),
        qe = rH[Ue];
      return Object.freeze({
        type: Ue,
        variation: Fe === fe.ed ? void 0 : null !== (ye = null !== (be = null === qe || void 0 === qe ? void 0 : qe[Fe]) && void 0 !== be ? be : null === qe || void 0 === qe ? void 0 : qe[0]) && void 0 !== ye ? ye : "default",
        pose: Je === fe.gc ? void 0 : null !== (Me = fe.yb[Je]) && void 0 !== Me ? Me : fe.yb[0],
        metaInfo: oe === fe.gc ? void 0 : fe.Qc[oe],
        meshKind: Re === fe.gc ? void 0 : fe.Mc[Re],
        meshOpts: ke ? QH.decode(new Uint8Array(ee.buffer, ee.byteOffset + ie + fe.Ob.BYTES, He)) : void 0
      })
    }
    const by = 1,
      My = 2;
    class Ky {
      constructor(ee) {
        this.deps = ee, this.wanted = 0, this.lJ = !1, this.refused = !1
      }
      get on() {
        return this.lJ
      }
      want(ee, ie) {
        this.wanted = ie ? this.wanted | ee : this.wanted & ~ee;
        const He = 0 !== this.wanted;
        if (He === this.lJ) return;
        const ye = this.deps.cmd();
        null !== ye ? (0, fe.fg)(ye, 0, He ? 1 : 0) ? (this.lJ = He, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.lJ = !1
      }
    }
    class Uy {
      constructor(ee) {
        this.deps = ee, this.entries = new Map, this.complete = !1, this.refill = !1, this.midFrame = !1, this.pending = new Int32Array(64), this.pendingCount = 0, this.ids = new Int32Array(64)
      }
      get(ee) {
        var ie;
        return this.complete || this.fill(), null !== (ie = this.entries.get("string" === typeof ee ? ee : String(ee))) && void 0 !== ie ? ie : null
      }
      inCoreCall() {
        this.midFrame = !0
      }
      stale(ee) {
        if (this.complete) {
          if (this.pendingCount === this.pending.length) {
            const ee = new Int32Array(2 * this.pending.length);
            ee.set(this.pending), this.pending = ee
          }
          this.pending[this.pendingCount++] = ee
        }
      }
      removed(ee) {
        this.entries.size > 0 && this.entries.delete(String(ee))
      }
      refresh() {
        const ee = this.pendingCount;
        if (this.pendingCount = 0, this.midFrame = !1, !this.deps.watch.on || this.refill) return this.complete = !1, void(this.refill = !1);
        if (ee > 0 && this.complete) {
          const {
            api: ie
          } = this.deps;
          let He = 0;
          const ye = this.ids = iy(this.ids, ee);
          for (let be = 0; be < ee; be++) {
            const ee = this.pending[be],
              Me = ie.indexById.get(ee);
            void 0 === Me || ge(ie.kinds[Me]) ? this.entries.delete(String(ee)) : ye[He++] = ee
          }
          He > 0 && !this.batch(ye, He) && (this.complete = !1)
        }
      }
      sessionEnded() {
        this.entries.clear(), this.complete = !1, this.refill = !1, this.midFrame = !1, this.pendingCount = 0, this.deps.watch.want(by, !1)
      }
      fill() {
        const {
          api: ee
        } = this.deps;
        if (this.complete = !0, this.pendingCount = 0, this.entries.clear(), this.deps.isSessionLive()) {
          const {
            watch: ee
          } = this.deps, ie = ee.on;
          ee.want(by, !0), !ie && ee.on && (this.refill = this.midFrame)
        }
        const {
          ids: ie,
          count: He
        } = ey(ee, this.ids);
        this.ids = ie, He > 0 && !this.batch(ie, He) && (this.refill = !0)
      }
      batch(ee, ie) {
        return Hy(this.deps.api, ee, ie, ((ee, ie) => {
          null === ie ? this.entries.delete(String(ee)) : this.entries.set(String(ee), ie)
        }))
      }
    }
    var Fy = He(5279);

    function Jy(ee) {
      if ("message" !== ee.type || ee.nF !== Fy.ic.NewClientOptions || ee.payloadKind !== ke.dc.Msgpack) return null;
      const ie = (0, ve.b)(ee.payload);
      if (null === ie || "object" !== typeof ie || Array.isArray(ie)) throw new Error("NewClientOptions whose body isn't an object of options");
      return ie
    }
    var oy = He(1189),
      Ry = He(37447);

    function ky(ee, ie, He, ye, be, Me, Ue) {
      var Fe, Je, oe;
      switch (ee) {
        case fe.ie.ToggleMenu: {
          const ee = fe.J[ie];
          Ke.h.yR("toggleMenu", void 0 === ee ? "inventory" : `inventory|${ee}`);
          break
        }
        case fe.ie.EditBoard:
          Ke.h.yR("EditBoard", {
            pos: 0 === ie ? null : He
          });
          break;
        case fe.ie.EditCodeBlock:
        case fe.ie.ViewCodeBlock:
          Ke.h.yR("EditCodeBlock", {
            pos: He,
            canChangePos: ee === fe.ie.EditCodeBlock
          });
          break;
        case fe.ie.EditCustomLobbyBlock:
          Ke.h.yR("EditCustomLobbyBlock", {
            pos: He
          });
          break;
        case fe.ie.OpenIronChest:
          Ke.h.yR("OpenIronChest", {
            pos: He
          });
          break;
        case fe.ie.EditNameTag:
          Ke.h.yR("EditNameTag", null !== (Fe = null === (Je = be.lJ()) || void 0 === Je || null === (oe = Je.attributes.customAttributes) || void 0 === oe ? void 0 : oe.text) && void 0 !== Fe ? Fe : "");
          break;
        case fe.ie.EditBook: {
          var Re, ke, Te;
          const ee = null === (Re = be.lJ()) || void 0 === Re ? void 0 : Re.attributes;
          Ke.h.yR("EditBook", {
            pages: (0, oy.U)(null === ee || void 0 === ee || null === (ke = ee.customAttributes) || void 0 === ke ? void 0 : ke.pages),
            title: null !== (Te = null === ee || void 0 === ee ? void 0 : ee.customDisplayName) && void 0 !== Te ? Te : "Title",
            isPublished: !(null === ee || void 0 === ee || !ee.customDescription)
          });
          break
        }
        case fe.ie.CantChangeBlock:
          ! function(ee, ie) {
            const He = ie.getClientOption("cantChangeError"),
              ye = ie.getClientOption(ee ? "cantBuildError" : "cantBreakError"),
              be = ee ? He : ye;
            (ie.getClientOption("canChange") || be || "You cannot modify this block" !== He) && Ke.h.yR("showBottomMessage", {
              message: ye || He,
              type: "Error"
            })
          }(1 === ie, Me);
          break;
        case fe.ie.MiddleBarStart:
          Ke.h.yR("middleScreenBarInitiate", {
            duration: ye,
            Uy: 1 === He[0],
            horizBarRemOffset: ie
          });
          break;
        case fe.ie.MiddleBarStop:
          Ke.h.yR("middleScreenBarRemove");
          break;
        case fe.ie.Hitmarker:
          Ke.h.yR("localGunHitmarker", {
            Tb: 1 === ie
          });
          break;
        case fe.ie.ShotsLeft:
          Ke.h.yR("localPlayerNewShotsLeft", ye);
          break;
        case fe.ie.AimingOverlay:
          Ke.h.yR("aimingOverlay", 3 === (3 & ie) ? "sniper" : "none");
          break;
        case fe.ie.BottomMessage:
          Ke.h.yR("showBottomMessage", JSON.parse(Ue()));
          break;
        case fe.ie.Crosshair:
          be.inaccuracy = (0, ue.d)(ye), (0, Ry.c)().crosshairAccuracy(be.inaccuracy);
          break;
        case fe.ie.ChargeStage:
          break;
        case fe.ie.EmoteWheelClose:
          Ke.h.yR("requestEmoteWheelClose");
          break;
        case fe.ie.BlockMined:
          Ke.h.yR("localBlockMined");
          break;
        default:
          throw new qe.c(`UiEvent of no kind: what ${ee}`)
      }
    }
    var qy = He(38835),
      fy = He(34880),
      Ty = He(2022),
      py = He(37629),
      Xy = He(34897),
      zy = He(5262);
    const By = 10,
      Ey = {
        player: [],
        chestOrCreative: [],
        chest: null,
        creative: !1,
        selectedSlot: 0,
        freeSlots: 0
      },
      gy = {
        items: [],
        ammo: 0,
        selectedSlot: 0
      },
      Oy = {
        gun: !1,
        aimable: !1,
        chargeName: null
      };

    function dy(ee, ie) {
      let He, ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      const Me = () => (He = (0, Ty.j)(He, ie()), He);
      return {
        current: Me,
        watch(ie) {
          const He = () => {
              ie(Me())
            },
            Ke = [ee.watch(He)];
          return null !== ye && Ke.push((0, Ty.l)((ee => {
            ee.some(ye) && He()
          }))), null !== be && Ke.push(be(He)), () => {
            for (const ee of Ke) ee()
          }
        }
      }
    }

    function Wy(ee) {
      return ee && {
        name: ee.name,
        amount: ee.amount,
        attributes: ee.attributes
      }
    }
    const ty = new WeakMap;

    function Zy(ee) {
      let ie = ty.get(ee);
      return void 0 === ie && (ie = (0, Xy.creativeItemIds)().map((ie => ({
        name: ee.nameOfId(ie),
        amount: ee.isStackableId(ie) ? 1 : null,
        attributes: (0, qy.d)("Gun" === (0, Xy.itemTypeOf)(ie) ? {
          type: "Gun",
          clipSize: (0, Xy.clipSizeOf)(ie)
        } : void 0)
      }))), ty.set(ee, ie)), ie
    }

    function wy(ee, ie, He, ye) {
      const be = ie => (ee.flush(ye), ie),
        Me = He => {
          var ye, be, Me, Ke, Ue, Fe, Je;
          const oe = ee.slot(He);
          if (!oe) return null;
          const {
            rootName: Re,
            metaStr: ke
          } = ie.getMetaInfo(oe.name);
          return {
            name: oe.name,
            amount: oe.amount,
            attributes: oe.attributes,
            instance: ee.instance(He),
            displayName: null !== (ye = oe.attributes.customDisplayName) && void 0 !== ye ? ye : ie.getDisplayName(Re),
            requiresAmmo: "RequiresAmmo" === ke,
            clipSize: null !== (be = null !== (Me = null === (Ke = oe.attributes.customAttributes) || void 0 === Ke || null === (Ue = Ke.gunStats) || void 0 === Ue ? void 0 : Ue.clipSize) && void 0 !== Me ? Me : null === (Fe = ie.getGunStats(Re)) || void 0 === Fe ? void 0 : Fe.clipSize) && void 0 !== be ? be : null === (Je = oe.typeObj) || void 0 === Je ? void 0 : Je.clipSize
          }
        },
        Ue = function(ee, ie) {
          let He = null,
            ye = {
              focus: null,
              recipes: [],
              detail: null
            },
            be = -1;
          const Me = new Set;
          return {
            read() {
              var Me, Ke;
              if (null === He) return null !== ye.focus && (ye = {
                ...ye,
                focus: null
              }), ye;
              if (ye.focus === He && be === ee.changes) return ye;
              if (be = ee.changes, 0 === ee.length) return ye = {
                focus: He,
                recipes: [],
                detail: null
              }, ye;
              let Ue = 0;
              if (null !== He.recipe) try {
                Ue = ie.getItemId(He.recipe.name)
              } catch {}
              const Fe = ee.craftingView(He.station, Ue, null !== (Me = null === (Ke = He.recipe) || void 0 === Ke ? void 0 : Ke.Qo) && void 0 !== Me ? Me : 0);
              return ye = null === Fe ? {
                focus: He,
                recipes: [],
                detail: null
              } : function(ee, ie, He) {
                let ye = fe.hb.BYTES;
                const be = [];
                for (let oe = fe.hb.recipes(ee, 0); oe > 0; oe--) {
                  const He = fe.cb.flags(ee, ye),
                    Me = {
                      name: ie.nameOfId(fe.cb.item(ee, ye)),
                      Qo: fe.cb.recipe(ee, ye),
                      requires: [],
                      produces: fe.cb.produces(ee, ye),
                      haveIngredients: 0 !== (He & fe.bb.HaveIngredients),
                      listed: 0 !== (He & fe.bb.Listed)
                    };
                  let Ke = fe.cb.requires(ee, ye);
                  for (ye += fe.cb.BYTES; Ke > 0; Ke--) {
                    const He = fe.eb.items(ee, ye);
                    Me.requires.push({
                      items: Ay(ee, ye + fe.eb.BYTES, He, ie),
                      amt: fe.eb.amount(ee, ye)
                    }), ye += fe.eb.BYTES + 2 * He
                  }
                  be.push(Me)
                }
                const Me = fe.hb.flags(ee, 0);
                if (null === He.recipe || 0 === (Me & fe.gb.Detail)) return {
                  focus: He,
                  recipes: be,
                  detail: null
                };
                const Ke = {},
                  Ue = {};
                for (let oe = fe.hb.ingredients(ee, 0); oe > 0; oe--) {
                  const He = fe.$.item(ee, ye),
                    be = fe.$.from(ee, ye),
                    Me = fe.$.amount(ee, ye);
                  ye += fe.$.BYTES;
                  const Fe = be === fe.F ? null : Ay(ee, ye, be, ie);
                  if (null !== Fe && (ye += 2 * be), 0 === He) continue;
                  const Je = ie.nameOfId(He);
                  Ke[Je] = Me, null !== Fe && (Ue[Je] = Fe)
                }
                const {
                  name: Fe,
                  Qo: Je
                } = He.recipe;
                return {
                  focus: He,
                  recipes: be,
                  detail: {
                    name: Fe,
                    Qo: Je,
                    craftAllTimes: fe.hb.craftAllTimes(ee, 0),
                    roomForOne: 0 !== (Me & fe.gb.RoomForOne),
                    resultStackable: Boolean(ie.getItemStat(Fe, "stackable")),
                    amounts: Ke,
                    ingredientsCraftedFrom: Ue
                  }
                }
              }(Fe, ie, He), ye
            },
            setFocus(ee) {
              He = ee;
              for (const ie of [...Me]) ie()
            },
            watchFocus: ee => (Me.add(ee), () => {
              Me.delete(ee)
            })
          }
        }(ee, ie);
      return {
        states: {
          inventory: dy(ee, (() => {
            const He = ee.length;
            if (0 === He) return Ey;
            const ye = [];
            for (let ie = 0; ie < fe.yd; ie++) ye.push(Wy(ee.slot(ie)));
            const be = ee.slotIcon,
              Me = ye[ee.selectedSlot];
            0 !== be && Me && (ye[ee.selectedSlot] = {
              ...Me,
              icon: ie.nameOfId(be)
            });
            const Ke = !0 === ie.getClientOption("creative");
            let Ue = [],
              Fe = null;
            if (He > fe.yd) {
              for (let ie = fe.yd; ie < He; ie++) Ue.push(Wy(ee.slot(ie)));
              Fe = {
                type: null,
                pos: [...ee.di],
                numSlots: He - fe.yd,
                ironChest: null
              }
            } else Ke && (Ue = Zy(ie));
            return {
              player: ye,
              chestOrCreative: Ue,
              chest: Fe,
              creative: Ke,
              selectedSlot: ee.selectedSlot,
              freeSlots: ee.freeSlots()
            }
          }), (0, Ty.h)("creative")),
          hotbar: dy(ee, (() => {
            if (0 === ee.length) return gy;
            const ie = [];
            for (let ee = 0; ee < By; ee++) ie.push(Me(ee));
            return {
              items: ie,
              ammo: ee.amountOf("Ammo"),
              selectedSlot: ee.selectedSlot
            }
          }), (0, Ty.d)("DisplayName", "GunStats")),
          crafting: dy(ee, Ue.read, null, Ue.watchFocus),
          heldItemAim: dy(ee, (() => {
            var ie;
            if (!He()) return Oy;
            const ye = null === (ie = ee.lJ()) || void 0 === ie ? void 0 : ie.typeObj,
              be = "Gun" === (null === ye || void 0 === ye ? void 0 : ye.type);
            return {
              gun: be,
              aimable: be || !0 === (null === ye || void 0 === ye ? void 0 : ye.showsAimingUi),
              chargeName: "Chargeable" === (null === ye || void 0 === ye ? void 0 : ye.type) ? ye.name : null
            }
          }), null, (ee => function(ee, ie) {
            let He = ee();
            return (0, zy.w)((() => {
              const ye = ee();
              ye !== He && (He = ye, ie(ye))
            }))
          }(He, ee)))
        },
        events: {
          hotbarSlotRequested: (0, Ty.b)("setSelectedInventorySlotI"),
          hotbarScrolled: (0, Ty.b)("ScrollInventorySlot"),
          numberKeyPressed: (0, Ty.b)("numkeyPressed"),
          inventoryDropRequested: (0, Ty.b)("DropInvenItem"),
          chestToggled: (0, Ty.b)("chestToggleFromServer"),
          chestRefreshed: (0, Ty.b)("chestRefreshedFromServer", Py),
          inventorySynced: (0, Ty.b)("syncedInvenFromServer", Py),
          enchantingTableOpened: (0, Ty.b)("enchantingTable", (ee => {
            let {
              position: He,
              po: ye
            } = ee;
            return {
              position: [...He],
              blockName: ie.getMetaInfo(ye).rootName
            }
          }))
        },
        commands: {
          selectHotbarSlot(ie) {
            ee.selectSlot(ie), ee.flush(ye)
          },
          removeInventoryItem(ie) {
            let {
              slot: He,
              amount: ye,
              drop: Me
            } = ie;
            return be(ee.remove(He, ye, Me))
          },
          swapInventorySlots(ie) {
            let {
              a: He,
              b: ye
            } = ie;
            return be(ee.swap(He, ye))
          },
          moveInventoryItem(ie) {
            let {
              from: He,
              to: ye,
              amount: Me
            } = ie;
            return be(ee.move(He, ye, Me))
          },
          quickMoveInventoryItem(ie) {
            let {
              slot: He,
              start: ye,
              end: Me,
              amount: Ke
            } = ie;
            return be(ee.quickMove(He, ye, Me, Ke))
          },
          closeChest() {
            ee.closeChest(), ee.flush(ye), Ke.h.yR("chestClosedByPlayer")
          },
          focusCrafting(ee) {
            Ue.setFocus(ee)
          },
          craftRecipe(ie) {
            let {
              name: He,
              Qo: ye,
              times: Me
            } = ie;
            return be(ee.craft(He, ye, Me))
          },
          salvageItem(ie) {
            let {
              slot: He,
              name: ye,
              amount: Me
            } = ie;
            return be(ee.salvage(He, ye, Me))
          },
          enchantItem(ie) {
            let {
              slot: He,
              level: ye,
              tablePos: be
            } = ie;
            ee.enchant(He, ye, be)
          }
        },
        queries: {
          enchantingOffer(He) {
            let {
              slot: ye,
              blockName: be
            } = He;
            return function(ee, ie, He, ye) {
              const be = ee.slot(He);
              if (!be || !ie.getClientOption("canCraft") || !(0, fy.w)(ye) || (0, fy.s)(be.attributes)) return Dy;
              const Me = (0, Xy.enchantmentPerksOf)(ie.getItemId(be.name));
              if (0 === Me.length) return Dy;
              const Ke = [];
              for (let Ue = 0; Ue < py.d; Ue++) {
                const {
                  commonProb: ee,
                  uncommonProb: ie,
                  rareProb: He,
                  epicProb: be,
                  legendaryProb: Me,
                  level: Fe
                } = (0, fy.i)(ye, Ue);
                Ke.push({
                  level: Fe,
                  odds: [ee, ie, He, be, Me].map((ee => 100 * ee))
                })
              }
              return {
                perks: [...Me],
                options: Ke
              }
            }(ee, ie, ye, be)
          }
        }
      }
    }
    const Dy = Object.freeze({
      perks: [],
      options: []
    });

    function Py() {
      return null
    }

    function Ay(ee, ie, He, ye) {
      const be = [];
      for (let Me = 0; Me < He; Me++) {
        const He = ee.getUint16(ie + 2 * Me, !0);
        0 !== He && be.push(ye.nameOfId(He))
      }
      return be
    }
    class Yy {
      constructor(ee) {
        this.api = ee, this.positions = new Map, this.targeted = {
          w6: 0,
          position: [0, 0, 0],
          normal: [0, 0, 0],
          Xp: [0, 0, 0]
        }, this.hasTarget = !1, this.breaking = [0, 0, 0], this.isBreaking = !1
      }
      position(ee) {
        let ie = this.positions.get(ee);
        return ie || (this.api.checkValid(ee) || this.api.isLocal(ee) ? (ie = [NaN, NaN, NaN], this.api.readPosition(ee, ie), this.positions.set(ee, ie), ie) : null)
      }
      FHe() {
        return this.hasTarget ? this.targeted : null
      }
      breakingPosition() {
        return this.isBreaking ? this.breaking : null
      }
      refresh() {
        for (const [ie, He] of this.positions) this.api.readPosition(ie, He) || this.api.checkValid(ie) || this.api.isLocal(ie) || this.positions.delete(ie);
        const ee = this.api.apiView;
        if (this.refreshTarget(), this.isBreaking = 0 !== (fe.v.playerFlags(ee, 0) & fe.Pd.Breaking) && fe.v.breakingProgress(ee, 0) >= 0, this.isBreaking)
          for (let ie = 0; ie < 3; ie++) this.breaking[ie] = fe.v.breakingPos(ee, 0, ie)
      }
      refreshTarget() {
        const ee = this.api.apiView,
          ie = fe.v.targetBlockId(ee, 0);
        if (this.hasTarget = ie !== fe.ad, this.hasTarget) {
          const He = this.targeted;
          He.w6 = ie;
          for (let ie = 0; ie < 3; ie++) He.position[ie] = fe.v.targetBlock(ee, 0, ie), He.normal[ie] = fe.v.targetNormal(ee, 0, ie), He.Xp[ie] = fe.v.targetAdjacent(ee, 0, ie)
        }
      }
      despawned(ee) {
        const ie = this.positions.get(ee);
        ie && !this.api.isLocal(ee) && (ie.fill(NaN), this.positions.delete(ee))
      }
    }
    var Vy = He(41736),
      ay = He(41725),
      cy = He(37163),
      xy = He(37627);
    const Ly = 1,
      Cy = 2;
    class vy {
      constructor() {
        this.game = new xy.e, this.client = new xy.e, this.lJ = 0, this.movesFly = null
      }
      setGame(ee) {
        if (null === ee || "object" !== typeof ee) return !1;
        const {
          key: ie,
          value: He
        } = ee;
        return "string" === typeof ie && (this.game.setBooleanType(ie, Boolean(He)), !0)
      }
      setClient(ee, ie) {
        this.client.setBooleanType(ee, ie)
      }
      clearGame() {
        this.game = new xy.e, this.movesFly = null
      }
      setMovesFly(ee) {
        this.movesFly = ee
      }
      perms() {
        return (this.game._getTotalBooleanVal() ? Ly : 0) | (this.client._getTotalBooleanVal() ? Cy : 0)
      }
      write(ee) {
        const ie = this.perms(),
          {
            movesFly: He
          } = this;
        if (ie === this.lJ && null === He) return !0;
        let ye = fe.Sb.Keep;
        return null !== He && (ye = He ? fe.Sb.On : fe.Sb.Off), !(!ee || !(0, fe.Ee)(ee, 0, ye, ie, He ? 1 : 0)) && (this.lJ = ie, this.movesFly = null, !0)
      }
    }
    class uy {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => 35;
        this.api = ee, this.screenBandPct = void 0, this.clipX = 0, this.clipY = 0, this.clipW = 0, this.eye = [0, 0, 0], this.forward = [0, 0, 1], this.along = [0, 0, 0], this.screenBandPct = {
          x: Ue.b,
          get y() {
            return ie()
          }
        }
      }
      get hasView() {
        const ee = this.api.apiView,
          ie = fe.v.viewProj;
        return 0 !== ie(ee, 0, 3) || 0 !== ie(ee, 0, 7) || 0 !== ie(ee, 0, 11) || 0 !== ie(ee, 0, 15)
      }
      get cameraPosition() {
        const ee = this.api.apiView,
          {
            eye: ie
          } = this;
        for (let He = 0; He < 3; He++) ie[He] = fe.v.eye(ee, 0, He);
        return ie
      }
      get cameraDirection() {
        const ee = this.api.apiView,
          ie = fe.v.viewProj,
          He = ie(ee, 0, 3),
          ye = ie(ee, 0, 7),
          be = ie(ee, 0, 11),
          Me = Math.hypot(He, ye, be),
          {
            forward: Ke
          } = this;
        return Me > 0 && (Ke[0] = He / Me, Ke[1] = ye / Me, Ke[2] = be / Me), Ke
      }
      get cameraHeading() {
        return fe.v.heading(this.api.apiView, 0)
      }
      get cameraPitch() {
        return fe.v.pitch(this.api.apiView, 0)
      }
      get tanHalfFovX() {
        return fe.v.tanHalfFovX(this.api.apiView, 0)
      }
      get tanHalfFovY() {
        return fe.v.tanHalfFovY(this.api.apiView, 0)
      }
      projectWorldPosToScreenPos(ee) {
        this.clip(ee);
        const {
          clipX: ie,
          clipY: He,
          clipW: ye
        } = this;
        if (ye > 0) {
          const ee = ie / ye * 50,
            be = -He / ye * 50;
          return Math.abs(ee) <= this.screenBandPct.x && Math.abs(be) <= this.screenBandPct.y ? {
            x: 50 + ee,
            y: 50 + be
          } : this.clampToBand(ee, be)
        }
        const be = this.cameraPosition,
          Me = Math.hypot(ee[0] - be[0], ee[1] - be[1], ee[2] - be[2]),
          Ke = this.api.apiView,
          Ue = fe.v.viewProj,
          Fe = Me > 0 ? ie / Me : 0,
          Je = Me > 0 ? -He / Me : 0,
          oe = Math.hypot(Ue(Ke, 0, 1), Ue(Ke, 0, 5), Ue(Ke, 0, 9)),
          Re = Fe / Math.hypot(Ue(Ke, 0, 0), Ue(Ke, 0, 4), Ue(Ke, 0, 8)),
          ke = Je / oe,
          qe = !(Math.abs(Re) >= .001 || Math.abs(ke) >= .001);
        return this.clampToBand(Fe, qe ? -(oe || 1) : Je)
      }
      projectDirectionToScreenPos(ee) {
        if (!this.hasView) return;
        const ie = this.cameraPosition,
          He = this.along;
        for (let ye = 0; ye < 3; ye++) He[ye] = ie[ye] + 10 * ee[ye];
        return this.projectWorldPosToScreenPos(He)
      }
      projectWorldPosToViewport(ee) {
        this.clip(ee);
        const {
          clipX: ie,
          clipY: He,
          clipW: ye
        } = this;
        return ye > 0 ? {
          x: 50 + ie / ye * 50,
          y: 50 - He / ye * 50
        } : null
      }
      clip(ee) {
        const ie = this.api.apiView,
          He = ee[0] - fe.v.origin(ie, 0, 0),
          ye = ee[1] - fe.v.origin(ie, 0, 1),
          be = ee[2] - fe.v.origin(ie, 0, 2),
          Me = fe.v.viewProj;
        this.clipX = Me(ie, 0, 0) * He + Me(ie, 0, 4) * ye + Me(ie, 0, 8) * be + Me(ie, 0, 12), this.clipY = Me(ie, 0, 1) * He + Me(ie, 0, 5) * ye + Me(ie, 0, 9) * be + Me(ie, 0, 13), this.clipW = Me(ie, 0, 3) * He + Me(ie, 0, 7) * ye + Me(ie, 0, 11) * be + Me(ie, 0, 15)
      }
      clampToBand(ee, ie) {
        return (0, Ue.c)(ee, ie, this.screenBandPct.x, this.screenBandPct.y)
      }
    }
    var my = He(5286);
    const ly = new TextEncoder,
      Sy = new Uint8Array(fe.O * fe.L);
    class ny {
      constructor() {
        this.buttons = [], this.lJ = !0
      }
      set(ee) {
        this.buttons = ee, this.lJ = !1
      }
      attached() {
        this.lJ = 0 === this.buttons.length
      }
      write(ee) {
        if (this.lJ) return;
        const ie = new Uint8Array(fe.O),
          He = new Uint8Array(fe.O);
        let ye = 0,
          be = 0;
        for (const {
            id: Me,
            keycode: Ke
          }
          of this.buttons) {
          if (ye === fe.O) break;
          const {
            read: ee,
            written: Ue
          } = ly.encodeInto(Me, Sy.subarray(be, be + fe.L));
          if (ee < Me.length) continue;
          const Fe = my.p[Ke];
          ie[ye] = "number" === typeof Fe ? Fe : 0, He[ye] = Ue, ye++, be += Ue
        }
        this.lJ = (0, fe.se)(ee, 0, ye, ie, He, Sy.subarray(0, be))
      }
    }

    function jy(ee, ie, He) {
      const ye = ly.encode(ie);
      return ye.length <= fe.L && function(ee, ie, He, ye) {
        return (0, MH.e)(), (0, fe.pf)(ee, ie, He, ye)
      }(ee, 0, He ? 1 : 0, ye)
    }
    var sy = He(40073);
    const Iy = new TextDecoder,
      hy = new TextEncoder,
      Ny = new Uint8Array(0),
      Gy = [0, 0, 0],
      ry = {
        off: fe.Sd.Off,
        key: fe.Sd.Key,
        touch: fe.Sd.Touch
      };
    class Qy {
      constructor(ee) {
        var ie;
        this.options = ee, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tickers = [], this.renderers = [], this.receivers = [], this.failures = [], this.vetoSet = !1, this.hooksSet = !1, this.writtenPublicLobby = !1, this.promptWatch = "off", this.promptWatchSent = "off", this.customButtons = new ny, this.generation = 0, this.sessionLive = !1, this.boundId = 0, this.session = null, this.activeConn = 0, this.closedThrough = 0, this.openSocket = 0, this.socketLeftSinceAttach = !1, this.ticks = 0, this.zoomUnshown = !1, this.zoomHeld = !1, this.overflowGen = 0, this.resyncOwed = !1, this.zoom = 0, this.localPhysicsType = Ze.s.DEFAULT, this.pendingZoom = null, this.highlight = null, this.highlightOwed = !1, this.cmd = null, this.freeCam = new vy, this.stopped = () => !1, this.onError = void 0, this.api = void 0, this.tables = void 0, this.itemSources = null, this.fault = void 0, this.RR = ee => {
          if ((0, qe.g)(ee)) throw ee;
          this.onError(ee)
        }, this.api = ee.api, this.tables = ee.tables, this.onError = null !== (ie = ee.onError) && void 0 !== ie ? ie : ee => {
          console.error("Error in client game callback", ee)
        }, this.renderFrame = new uy(this.api, ee.screenBandY), this.live = new Yy(this.api), this.chunks = new oi(this.api.memory, (() => this.api.apiView)), this.items = new VH({
          api: this.api,
          tables: ee.tables,
          cmd: () => this.cmd,
          onError: this.onError,
          beforeOp: ee.beforeOp
        });
        const He = () => this.stopped() ? null : this.cmd,
          ye = () => this.sessionLive;
        this.entityInfoWatch = new Ky({
          cmd: He,
          onError: this.onError
        }), this.entityInfo = new Uy({
          api: this.api,
          watch: this.entityInfoWatch,
          isSessionLive: ye
        }), this.particles = new NH({
          cmd: He,
          isSessionLive: ye,
          onError: this.onError
        }), this.clientApi = new dH({
          api: this.api,
          live: this.live,
          chunks: this.chunks,
          items: this.items,
          entityInfo: this.entityInfo,
          particles: this.particles,
          tables: ee.tables,
          cmd: He,
          sendCmd: () => this.sendCmd(),
          isSessionLive: ye,
          beforeWrite: () => {
            var ie;
            if (this.stopped()) return !1;
            const He = this.generation;
            return !1 !== (null === (ie = ee.beforeWrite) || void 0 === ie ? void 0 : ie.call(ee)) && He === this.generation
          },
          playerDbId: () => {
            const ee = this.session;
            if (null === ee) throw new Error("No game session has started, so the local player has no DB id");
            return ee.playerDbId
          },
          playSound: ee.playSound,
          preloadSounds: ee.preloadSounds,
          setLocalOptions: ee.setLocalOptions,
          hasPackModel: ee.hasPackModel,
          localPhysicsType: () => this.localPhysicsType
        }), this.scriptedCamera = new Ie({
          api: this.api,
          reportError: ie => {
            var He;
            this.RR(ie), null === (He = ee.reportCameraFault) || void 0 === He || He.call(ee, ie)
          },
          cmd: () => this.stopped() ? null : this.cmd,
          screen: ee.cameraScreen,
          showFacing: ee.showCameraFacing
        })
      }
      get itemBridgeSources() {
        return this.itemSources ??= wy(this.items, this.tables, (() => this.localPlayerAlive()), this.RR), this.itemSources
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
      clickCodeBlock(ee) {
        const ie = this.sessionLive ? this.sendCmd() : null;
        return null !== ie && (He = ie, ye = 0, be = ee[0], Me = ee[1], Ke = ee[2], (0, MH.e)(), (0, fe.ye)(He, ye, be, Me, Ke));
        var He, ye, be, Me, Ke
      }
      cameraZoom() {
        return this.zoom
      }
      setCameraZoom(ee) {
        const ie = this.liveCmd();
        return null === ie ? (this.pendingZoom = ee, !1) : (this.pendingZoom = null, (0, fe.$f)(ie, 0, ee, 1))
      }
      vY(ee) {
        const ie = this.stopped() ? null : this.cmd;
        return null !== ie && (0, fe.Wf)(ie, 0, ee ? 1 : 0)
      }
      respawn() {
        const ee = this.sessionLive ? this.sendCmd() : null;
        return null !== ee && (ie = ee, He = 0, (0, MH.e)(), (0, fe.Ff)(ie, He));
        var ie, He
      }
      bindCustomButtonKeys(ee) {
        this.customButtons.set(ee)
      }
      pressCustomButton(ee, ie) {
        const He = this.sessionLive ? this.sendCmd() : null;
        return null !== He && jy(He, ee, ie)
      }
      padMove(ee, ie, He, ye, be, Me) {
        const Ke = this.liveCmd();
        return null !== Ke && (0, fe.cf)(Ke, 0, ee, ie, He, ye, be, Me)
      }
      thirdPersonFor(ee) {
        const ie = this.liveCmd();
        return null !== ie && (0, fe.bg)(ie, 0, null !== ee && void 0 !== ee ? ee : 1 / 0)
      }
      send(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = 0 !== this.openSocket || this.sessionLive ? this.sendCmd() : null;
        return null !== ye && KH(ye, He ? ke.ad : 0, ee, (0, ve.f)(ie))
      }
      socketAttached(ee) {
        this.openSocket = ee, this.socketLeftSinceAttach = !1
      }
      socketDetached(ee) {
        this.openSocket === ee && (this.openSocket = 0)
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
      attach(ee) {
        const ie = () => ee.isStopped;
        this.stopped = ie, this.cmd = ee.rings.cmd, this.promptWatchSent = "off", this.writePromptWatch(), this.customButtons.attached(), this.writeCustomButtons();
        const He = this.api.apiView;
        this.overflowGen = fe.v.eventOverflowGen(He, 0), this.resyncOwed = 0 !== fe.v.eventOverflowMask(He, 0), ee.setGameHost(this), ee.setEventWalker((ee => {
          this.api.walk(ee, this, ie)
        }))
      }
      watchPromptPick(ee) {
        this.promptWatch = ee, this.writePromptWatch()
      }
      get promptEntity() {
        return "off" === this.promptWatch || this.stopped() ? null : eb(fe.v.promptEntity(this.api.apiView, 0))
      }
      get interactLabel() {
        return "touch" !== this.promptWatch || this.stopped() ? fe.tc.None : fe.v.interactLabel(this.api.apiView, 0)
      }
      get interactIcon() {
        return "touch" !== this.promptWatch || this.stopped() ? 0 : fe.v.interactIcon(this.api.apiView, 0)
      }
      closeGame() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (0 === ee || ee >= this.openSocket) && (this.openSocket = 0), this.closedThrough = Math.max(this.closedThrough, ee, this.activeConn), this.activeConn = 0, this.endSession(), this.endGameGrants(), this.dropGameCamera()
      }
      gameCamera(ee) {
        0 !== this.activeConn && this.scriptedCamera.settingsChanged(ee)
      }
      netEvent(ee) {
        "connection" === ee.type ? ee.phase === ke.x.Activated && ee.conn !== this.activeConn && ee.conn > this.closedThrough ? (this.endSession(), this.activeConn = ee.conn, this.endGameGrants(), this.dropGameCamera()) : ee.phase !== ke.x.Left && ee.phase !== ke.x.Closed || ee.conn !== this.activeConn ? ee.phase === ke.x.Resumed && 0 !== this.activeConn && ee.conn > this.closedThrough && (this.activeConn = ee.conn) : this.closeGame() : ee.conn === this.activeConn && 0 !== ee.conn && (ee.nF === ay.t ? this.gunHit(ee.payload) : ee.nF === Fy.ic.EditItemCraftingRecipes || ee.nF === ay.Q ? this.items.touch() : (this.serverOptions(ee), this.gameMessage(ee)));
        const ie = this.options.onNetEvent;
        ie && this.guard((() => {
          ie(ee)
        }))
      }
      serverOptions(ee) {
        const ie = this.options.serverOptions,
          He = ie ? this.decoded(Jy, ee) : null;
        ie && He && this.guard((() => {
          ie.applyNewClientOptions(He)
        }))
      }
      gameMessage(ee) {
        let ie = null;
        try {
          ie = function(ee) {
            if ("message" !== ee.type || ee.nF !== Fy.ic.GameCodeMessage || ee.payloadKind !== ke.dc.Msgpack) return null;
            const ie = (0, ve.b)(ee.payload);
            if (null === ie || "object" !== typeof ie || "string" !== typeof ie.messageType) throw new Error("GameCodeMessage without a messageType");
            return ie
          }(ee)
        } catch (He) {
          this.sessionLive && this.onError(He)
        }
        if (ie) {
          const {
            messageType: ee,
            data: He
          } = ie;
          if ((0, Ae.g)(ee)) return void this.guard((() => {
            (0, Ae.c)(ee, He)
          }));
          "freeCamPerms" === ee && this.freeCam.setGame(He) && this.writeFreeCam(), this.sessionLive && this.round(this.receivers, (ie => {
            ie.onReceivedMessageFromServer(ee, He)
          }))
        }
      }
      decoded(ee, ie) {
        try {
          return ee(ie)
        } catch (He) {
          return this.onError(He), null
        }
      }
      setClientFreeCameraGrant(ee, ie) {
        this.freeCam.setClient(ee, ie), this.writeFreeCam()
      }
      freeCameraAllowed() {
        return 0 !== this.freeCam.perms()
      }
      setFreeCameraMovesFly(ee) {
        this.freeCam.setMovesFly(ee), this.writeFreeCam()
      }
      setBlockHighlight(ee) {
        this.highlight = ee, this.highlightOwed = !0, this.writeOwedHighlight()
      }
      writeOwedHighlight() {
        const ee = this.liveCmd();
        if (null === ee || !this.highlightOwed) return;
        const ie = this.highlight;
        this.highlightOwed = null === ie ? !(0, fe.Se)(ee, 0, Gy, Gy, 0) : !(0, fe.Se)(ee, 0, ie.pos, ie.normal, 1)
      }
      localPlayerBound(ee) {
        var ie, He;
        if (0 === this.activeConn || this.sessionLive && ee === this.boundId) return;
        const ye = this.sessionLive;
        let be, Me, Ke, Ue;
        this.endSession(), ye && this.restartGameCamera();
        try {
          var Fe;
          this.session = null;
          const ee = this.options.sessionInfo(this.activeConn);
          if (this.session = ee, !ee) return;
          be = ee.gameNameWithVariation, Me = null !== (Fe = (0, we.Qb)(be)) && void 0 !== Fe ? Fe : void 0, Ke = (0, De.z)(ee.lobbyName), Ue = (0, De.K)(ee.lobbyName)
        } catch (ze) {
          return void this.onError(ze)
        }
        const Je = {
          localPlayerId: String(ee)
        };
        let oe = {},
          Re = [];
        try {
          var ke, qe;
          oe = null !== (ke = null === (qe = this.options.gameFactory((0, we.Xb)(be))) || void 0 === qe ? void 0 : qe(Ue, Ke, Me, Je)) && void 0 !== ke ? ke : {}
        } catch (ze) {
          this.RR(ze)
        }
        try {
          var fe, Te;
          Re = (0, Pe.b)(null === (fe = (Te = this.options).defaultPlugins) || void 0 === fe ? void 0 : fe.call(Te, Ue, Ke, Me, Je), oe.plugins)
        } catch (ze) {
          this.RR(ze)
        }
        const pe = [oe, ...Re];
        this.owners = pe, this.tickers = pe.filter((ee => void 0 !== ee.YR)), this.renderers = pe.filter((ee => void 0 !== ee.onAfterRender)), this.receivers = pe.filter((ee => void 0 !== ee.onReceivedMessageFromServer)), this.writeAltVeto(pe), this.writeHooks(pe), this.writePublicLobby(Ue), this.writeLocalDbId(null !== (ie = null === (He = this.session) || void 0 === He ? void 0 : He.playerDbId) && void 0 !== ie ? ie : null), this.boundId = ee, this.sessionLive = !0, this.generation++, null !== this.pendingZoom && this.setCameraZoom(this.pendingZoom), this.highlightOwed ||= null !== this.highlight, this.writeOwedHighlight(), this.round(pe, (ee => {
          var ie;
          null === (ie = ee.onCreate) || void 0 === ie || ie.call(ee, this.clientApi)
        }));
        const Xe = this.generation;
        setTimeout((() => {
          Xe === this.generation && !0 === this.tables.getClientOption("creative") && Zy(this.tables)
        }), 0)
      }
      chunkSlot(ee, ie, He, ye, be, Me) {
        this.chunks.apply(ee, ie, He, ye, be, Me)
      }
      entityAdded(ee) {
        var ie;
        this.entityInfo.stale(ee), null === (ie = this.options.replayEntities) || void 0 === ie || ie.entityAdded(ee)
      }
      entityInfoChanged(ee) {
        var ie;
        this.entityInfo.stale(ee), null === (ie = this.options.replayEntities) || void 0 === ie || ie.entityInfoChanged(ee)
      }
      afterPrescan() {
        this.items.refresh(), this.entityInfo.refresh(), this.api.rereadDirectory(), this.chunks.refresh(), this.live.refresh()
      }
      tickEnd() {
        if (this.ticks++, this.tickers.length > 0) {
          const ee = performance.now();
          this.round(this.tickers, ib), (0, zy.c)(performance.now() - ee)
        }
      }
      afterWalk(ee) {
        this.ackEventOverflow(), this.clientApi.flushOwed(), this.writeOwedHighlight();
        const ie = this.options.replayEntities;
        ie && this.guard((() => {
          this.entityInfoWatch.want(My, ie.wantsWatch), ie.flush(this.entityInfoWatch.on)
        }));
        const He = this.api.apiView,
          ye = fe.v.frameMs(He, 0);
        cy.p.frame(ye, fe.v.heading(He, 0), fe.v.pitch(He, 0), cy.i[ee]);
        const be = (0, zy.g)(ee, ye);
        if (null !== be) {
          const ee = this.renderFrame;
          this.guard((() => {
            (0, Ry.c)().turnDamageIndicators(ee.cameraHeading)
          })), this.guard((() => {
            this.clientApi.slideRoute(be)
          })), this.round(this.renderers, (ie => {
            ie.onAfterRender(be, ee)
          }))
        }
        this.writeFreeCam();
        try {
          this.scriptedCamera.afterFrame(null !== be)
        } catch (Ke) {
          this.RR(Ke)
        }
        this.showZoom(), this.items.flush(this.RR), this.writePromptWatch(), this.writeCustomButtons();
        const Me = this.ticks;
        this.ticks = 0, (0, zy.e)(Me, ee, be, this.RR)
      }
      entityRemoved(ee) {
        this.live.despawned(ee), this.entityInfo.removed(ee)
      }
      ackEventOverflow() {
        const ee = this.api.apiView,
          ie = fe.v.eventOverflowGen(ee, 0),
          He = ie - this.overflowGen >>> 0;
        if (0 === He && !this.resyncOwed) return;
        this.overflowGen = ie;
        const ye = fe.v.eventOverflowMask(ee, 0),
          be = this.cmd;
        0 === ye || null === be || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, fe.Ae)(be, 0, ye);
        const Me = this.options.onEventOverflow;
        0 !== He && Me && this.guard((() => {
          Me(ye, He)
        }))
      }
      gameCall(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        if (ee === fe.cc.Director) try {
          return this.scriptedCamera.call(ie, He, ye, be, Me, Ke)
        } catch (Je) {
          return this.RR(Je), fe.kb.None
        }
        if (!this.sessionLive || void 0 !== this.fault) return ee === fe.cc.AltVeto ? fe.k.Allow : 0;
        try {
          return this.callGames(ee, ie, He, ye, be, Me, Ke, Ue)
        } catch (Je) {
          throw (0, qe.g)(Je) && (this.fault = Je), Je
        }
      }
      takeFault() {
        const ee = this.fault;
        return this.fault = void 0, ee
      }
      callGames(ee, ie, He, ye, be, Me, Ke, Ue) {
        this.api.rereadDirectory(), this.chunks.touch(), this.items.refresh(), this.live.refresh(), this.entityInfo.inCoreCall();
        const {
          tables: Fe
        } = this.options, Je = String(this.boundId);
        switch (ee) {
          case fe.cc.AltVeto:
          case fe.cc.AltAction: {
            const Ue = 0 !== Ke,
              [oe, Re, ke] = Ue ? [ie, He, ye] : [void 0, void 0, void 0],
              qe = Ue ? Fe.nameOfId(be) : "Air",
              Te = eb(Me);
            if (ee === fe.cc.AltAction) return this.first((ee => {
              var ie;
              return null === (ie = ee.onPlayerAltAction) || void 0 === ie ? void 0 : ie.call(ee, Je, oe, Re, ke, qe, Te)
            })), 0;
            const pe = this.first((ee => {
              var ie;
              return null === (ie = ee.onPlayerAttemptAltAction) || void 0 === ie ? void 0 : ie.call(ee, Je, oe, Re, ke, qe, Te)
            }));
            return "preventAction" === pe ? fe.k.Prevent : "preventPlacement" === pe ? fe.k.PreventPlacement : fe.k.Allow
          }
          case fe.cc.Click: {
            const ee = Ue,
              oe = 0 !== (ee & fe.V.Alt),
              Re = 0 !== (ee & fe.V.HasPos),
              ke = Re ? Fe.nameOfId(be) : "Air",
              [qe, Te, pe] = Re ? [ie, He, ye] : [null, null, null],
              Xe = eb(Me),
              ze = 0 !== (ee & fe.V.Up),
              Be = eb(Ke);
            if (0 === (ee & fe.V.AttackOnly) && this.first((ee => {
                var ie, He;
                return ze ? null === (ie = ee.onPlayerClickUp) || void 0 === ie ? void 0 : ie.call(ee, Je, oe, qe, Te, pe, ke, Xe) : null === (He = ee.onPlayerClick) || void 0 === He ? void 0 : He.call(ee, Je, oe, qe, Te, pe, ke, Xe)
              })), !ze && !oe && null !== Be) {
              const ee = this.clientApi.getPositionView(Be),
                ie = ee ? [ee[0], ee[1], ee[2]] : [0, 0, 0];
              this.first((ee => {
                var He;
                return null === (He = ee.onPlayerAttackEntity) || void 0 === He ? void 0 : He.call(ee, Je, Be, ie)
              }))
            }
            return 0
          }
          case fe.cc.ChangeBlock: {
            const ee = Fe.nameOfId(be),
              Ke = Fe.nameOfId(Me);
            return this.first((be => {
              var Me;
              return null === (Me = be.onPlayerChangeBlock) || void 0 === Me ? void 0 : Me.call(be, Je, ie, He, ye, ee, Ke)
            })), 0
          }
          case fe.cc.DropItem: {
            const ee = Fe.nameOfId(ie);
            return this.first((ie => {
              var be;
              return null === (be = ie.onPlayerDropItem) || void 0 === be ? void 0 : be.call(ie, Je, ee, He, ye)
            })), 0
          }
          default:
            return this.onError(new Error(`Unknown game call kind ${ee}`)), 0
        }
      }
      changeBlockFail(ee, ie, He, ye, be, Me, Ke) {
        const Ue = be === fe.Vc ? null : Iy.decode(this.api.eventBytes(Me, Math.min(be, Ke)));
        this.failures.push({
          NM: [ee, ie, He],
          GM: ye,
          rM: Ue
        })
      }
      changeBlockFailEnd() {
        const ee = this.failures;
        this.failures = [], this.sessionLive && this.round(this.owners, (ie => {
          var He;
          null === (He = ie.onChangeBlockFail) || void 0 === He || He.call(ie, ee)
        })), this.yR("blockChangeRefused", null), this.yR("EditBoard", {
          pos: null
        }), this.yR("EditCodeBlock", {
          pos: null,
          canChangePos: null
        })
      }
      inventoryEvent(ee, ie, He, ye, be, Me) {
        ee === fe.zc.ChestOpened ? this.items.chestOpened(He, ye, be) : ee !== fe.zc.Synced && ee !== fe.zc.ChestClosed && ee !== fe.zc.ChestRefreshed || this.items.touch(), this.guard((() => {
          ! function(ee, ie, He, ye) {
            switch (ee) {
              case fe.zc.Synced:
                Ke.h.yR("syncedInvenFromServer");
                break;
              case fe.zc.ChestOpened:
              case fe.zc.ChestClosed:
                Ke.h.yR("chestToggleFromServer", ee === fe.zc.ChestOpened, !0);
                break;
              case fe.zc.ChestRefreshed:
                Ke.h.yR("chestRefreshedFromServer");
                break;
              case fe.zc.EnchantingTable:
                Ke.h.yR("enchantingTable", {
                  po: ye,
                  position: He
                });
                break;
              case fe.zc.HotbarRequest:
                Ke.h.yR("setSelectedInventorySlotI", ie, !0);
                break;
              case fe.zc.Scrolled:
                Ke.h.yR("ScrollInventorySlot", ie);
                break;
              case fe.zc.NumberKey:
                Ke.h.yR("numkeyPressed", ie + 1);
                break;
              case fe.zc.DropRequested:
                Ke.h.yR("DropInvenItem", 0 !== ie);
                break;
              default:
                throw new qe.c(`InventoryEvent of no kind: what ${ee}`)
            }
          }(ee, ie, [He, ye, be], Me)
        }))
      }
      heldItemChanged() {
        this.items.touch()
      }
      shotDamage(ee, ie, He, ye) {
        this.yR("shotPlayer", {
          playerId: String(ee),
          damage: ie,
          wasCrit: 0 !== ye,
          distance: He
        })
      }
      localHurt(ee, ie) {
        this.yR("closeShopOnDamaged", null), this.guard((() => {
          Ke.h.yR("damagedByOtherPlayer", {
            Cy: null,
            direction: Number.isNaN(ie) ? null : ie,
            Hy: ee
          })
        }))
      }
      attackHit(ee, ie, He, ye, be) {
        this.guard((() => {
          Ke.h.yR("yourAttackHit", {
            Tb: ye,
            screenPos: this.renderFrame.projectDirectionToScreenPos([ee, ie, He]),
            hitSelf: be
          })
        }))
      }
      physicsType(ee) {
        this.localPhysicsType = ee, this.yR("PlayerPhysicsTypeUpdate", ee)
      }
      vehicleEffect(ee, ie, He, ye, be) {
        this.guard((() => {
          ee === ke.sd.UPDATE ? (0, Ve.l)(ie, {
            icon: He,
            level: ye,
            displayName: null,
            durationMs: be
          }) : Ye.b.remove(ie)
        }))
      }
      zoomChanged(ee) {
        this.zoom = ee, this.zoomUnshown = !0
      }
      zoomDisabled() {
        this.yR("showBottomMessage", {
          message: "Zoom is disabled",
          timeoutLength: 2e3,
          type: "Error"
        })
      }
      bhopDisabled() {
        this.yR("showBottomMessage", sy.c)
      }
      showZoom() {
        const ee = this.scriptedCamera.holdsView();
        !this.zoomUnshown || ee && this.zoomHeld || (this.zoomUnshown = !1, this.yR("cameraZoomSet", this.zoom)), this.zoomHeld = ee
      }
      gunHit(ee) {
        this.guard((() => {
          const {
            Cy: ie,
            vy: He
          } = (0, Vy.d)(ay.t, ee);
          Ke.h.yR("damagedByOtherPlayer", {
            Cy: ie,
            direction: He
          })
        }))
      }
      uiEvent(ee, ie, He, ye, be, Me, Ke, Ue) {
        this.guard((() => {
          ky(ee, ie, [He, ye, be], Me, this.items, this.options.tables, (() => Iy.decode(this.api.eventBytes(Ke, Ue))))
        }))
      }
      writeAltVeto(ee) {
        const ie = this.cmd;
        if (!ie) return;
        let He;
        try {
          He = function(ee, ie) {
            const He = new Set;
            let ye = !1;
            for (const be of ee)
              if (be.onPlayerAttemptAltAction) {
                if (ye = !0, !be.altVetoBlocks) return {
                  mode: fe.ke.All,
                  roots: []
                };
                for (const ee of be.altVetoBlocks) He.add(ie.getMetaInfo(ee).rootId)
              } return ye ? He.size > fe.Jc ? {
              mode: fe.ke.All,
              roots: []
            } : {
              mode: fe.ke.Filter,
              roots: [...He]
            } : {
              mode: fe.ke.Off,
              roots: []
            }
          }(ee, this.options.tables)
        } catch (be) {
          this.onError(be), He = {
            mode: fe.ke.All,
            roots: []
          }
        }
        if (He.mode === fe.ke.Off && !this.vetoSet) return;
        const ye = new Uint8Array(new Uint32Array(He.roots).buffer);
        (0, fe.Kf)(ie, 0, He.mode, He.roots.length, ye) ? this.vetoSet = He.mode !== fe.ke.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
      }
      endGameGrants() {
        this.freeCam.clearGame(), this.writeFreeCam()
      }
      writeFreeCam() {
        this.stopped() || this.freeCam.write(this.cmd)
      }
      writeHooks(ee) {
        const ie = this.cmd;
        if (!ie) return;
        const He = function(ee) {
          let ie = 0;
          for (const He of ee) He.onPlayerAltAction && (ie |= 1 << fe.cc.AltAction), (He.onPlayerClick || He.onPlayerClickUp || He.onPlayerAttackEntity) && (ie |= 1 << fe.cc.Click), He.onPlayerChangeBlock && (ie |= 1 << fe.cc.ChangeBlock), He.onPlayerDropItem && (ie |= 1 << fe.cc.DropItem);
          return ie
        }(ee);
        (0 !== He || this.hooksSet) && ((0, fe.Tf)(ie, 0, He) ? this.hooksSet = 0 !== He : this.onError(new Error("SetHooks didn't fit the command ring")))
      }
      writeCustomButtons() {
        const ee = this.cmd;
        ee && !this.stopped() && this.customButtons.write(ee)
      }
      writePromptWatch() {
        const ee = this.cmd,
          ie = this.promptWatch;
        ie !== this.promptWatchSent && ee && !this.stopped() && (0, fe.gg)(ee, 0, ry[ie]) && (this.promptWatchSent = ie)
      }
      writePublicLobby(ee) {
        const ie = this.cmd;
        ie && ee !== this.writtenPublicLobby && ((0, fe._f)(ie, 0, ee ? 1 : 0) ? this.writtenPublicLobby = ee : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
      }
      writeLocalDbId(ee) {
        const ie = this.cmd;
        ie && ((0, fe.Uf)(ie, 0, null === ee ? 0 : 1, null === ee ? Ny : hy.encode(ee)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
      }
      first(ee) {
        const ie = this.generation;
        for (const ye of this.owners) {
          if (ie !== this.generation) break;
          try {
            const ie = ee(ye);
            if (void 0 !== ie) return ie
          } catch (He) {
            this.RR(He)
          }
        }
      }
      yR(ee, ie) {
        this.guard((() => {
          Ke.h.yR(ee, ie)
        }))
      }
      dropGameCamera() {
        try {
          this.scriptedCamera.reset()
        } catch (ee) {
          this.RR(ee)
        }
      }
      restartGameCamera() {
        try {
          this.scriptedCamera.restart()
        } catch (ee) {
          this.RR(ee)
        }
      }
      endSession() {
        if (!this.sessionLive) return;
        this.sessionLive = !1, this.localPhysicsType = Ze.s.DEFAULT;
        const ee = this.owners;
        let ie;
        if (this.owners = this.tickers = this.renderers = this.receivers = [], this.generation++, !this.stopped()) try {
          this.writeAltVeto([]), this.writeHooks([]), this.writePublicLobby(!1), this.writeLocalDbId(null)
        } catch (ye) {
          ie = ye
        }
        try {
          this.entityInfo.sessionEnded()
        } catch (ye) {
          ie ??= ye
        }
        this.round(ee, Hb, !0);
        try {
          this.particles.sessionEnded() || this.onError(new Error("ParticleStopAll didn't fit the command ring"))
        } catch (ye) {
          ie ??= ye
        }
        try {
          this.clientApi.disposeGameOutput()
        } catch (ye) {
          ie ??= ye
        }
        const He = this.options.onSessionEnd;
        if (He) try {
          He()
        } catch (ye) {
          this.onError(ye)
        }
        void 0 !== ie && this.RR(ie)
      }
      round(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this.generation;
        for (const Me of ee) {
          if (ye !== this.generation) break;
          try {
            ie(Me)
          } catch (be) {
            He ? this.onError(be) : this.RR(be)
          }
        }
      }
      guard(ee) {
        try {
          ee()
        } catch (ie) {
          this.RR(ie)
        }
      }
    }

    function eb(ee) {
      return ee === fe.Zc ? null : String(ee)
    }

    function ib(ee) {
      ee.YR(ke.id)
    }

    function Hb(ee) {
      var ie;
      null === (ie = ee.onClose) || void 0 === ie || ie.call(ee)
    }

    function yb(ee, ie) {
      ee.watch((() => {
        const He = function(ee) {
          const ie = [],
            He = Math.min(By, ee.length);
          for (let be = 0; be < He; be++) {
            var ye;
            const He = null === (ye = ee.slot(be)) || void 0 === ye ? void 0 : ye.typeObj,
              Me = He ? (0, Xy.gunTypeOf)(He.id) : void 0;
            void 0 !== Me && ie.push(Wi[Me])
          }
          return ie
        }(ee);
        He.length > 0 && (ie.preload(He.flatMap((ee => Li(ee)))), ie.preload(Li(ti)))
      }))
    }
    var bb = He(37224),
      Mb = He(5338),
      Kb = He(37578),
      Ub = He(37612);

    function Fb(ee) {
      const ie = (0, bb.countDecodesAs)(new Mb.Howl({
          src: [...(0, Kb.s)(ee).src],
          pool: 15,
          preload: !1
        }), "sound"),
        He = ie.load.bind(ie);
      return ie.load = () => (ie._preload = !0, (0, Ub.h)(ee), He()), ie
    }

    function Jb(ee, ie, He) {
      const ye = ee.listener;
      if (ye.positionX) ob(ye.positionX, ie, He, 0), ob(ye.positionY, ie, He, 1), ob(ye.positionZ, ie, He, 2), ob(ye.forwardX, ie, He, 3), ob(ye.forwardY, ie, He, 4), ob(ye.forwardZ, ie, He, 5), ob(ye.upX, ie, He, 6), ob(ye.upY, ie, He, 7), ob(ye.upZ, ie, He, 8);
      else {
        let ee = !1;
        for (let ye = 0; ye < 9; ye++) ee ||= ie[ye] !== He[ye];
        ee && (ye.setPosition(ie[0], ie[1], ie[2]), ye.setOrientation(ie[3], ie[4], ie[5], ie[6], ie[7], ie[8]), He.set(ie))
      }
    }

    function ob(ee, ie, He, ye) {
      ie[ye] !== He[ye] && (ee.value = ie[ye], He[ye] = ie[ye])
    }
    class Rb {
      constructor() {
        this.pose = new Float64Array(9), this.written = new Float64Array(9).fill(Number.NaN), this.watchedCtx = void 0
      }
      apply(ee) {
        this.pose.set(ee);
        const ie = Mb.Howler.ctx;
        return !!ie && (ie !== this.watchedCtx && (this.watchedCtx = ie, this.written.fill(Number.NaN), ie.addEventListener("statechange", (() => {
          "running" === ie.state && Jb(ie, this.pose, this.written)
        }))), "running" === ie.state && Jb(ie, ee, this.written), !0)
      }
    }
    var kb = He(37383),
      qb = He(40048);
    let fb = null,
      Tb = null;

    function pb() {
      return null === fb && (fb = document.createElement("div"), fb.className = "WasmCameraLayer", fb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none", document.body.append(fb)), fb
    }

    function Xb() {
      return Tb ??= new qb.b(new kb.g(pb)), Tb
    }

    function zb() {
      var ee;
      null === (ee = Tb) || void 0 === ee || ee.clear(), Bb(null)
    }

    function Bb(ee) {
      ye.e.get("scriptedCameraFacing") !== ee && ye.e.set({
        scriptedCameraFacing: ee
      })
    }
    var Eb = He(10063),
      gb = He(10008),
      Ob = He(40091),
      db = He(42120),
      Wb = He(3608);
    const tb = Object.entries(fe._b).reduce(((ee, ie) => {
      let [He, ye] = ie;
      return ee[ye] = He, ee
    }), []);

    function Zb(ee, ie) {
      var He;
      return 0 !== ((null !== (He = ee.itemFlags[ie]) && void 0 !== He ? He : 0) & fe.Dc.Stackable)
    }
    const wb = /^(0|[1-9][0-9]*)$/,
      Db = {
        displayName: (ee, ie) => (0, Xy.displayNameOf)(ie),
        description: (ee, ie) => (0, Xy.descriptionOf)(ie),
        type: (ee, ie) => (0, Xy.itemTypeOf)(ie),
        clipSize: (ee, ie) => (0, Xy.clipSizeOf)(ie),
        armourReduction: (ee, ie) => (0, Xy.armourReductionOf)(ie),
        scopeType: (ee, ie) => (0, Xy.scopeTypeOf)(ie),
        stackable: Zb,
        harvestType: (ee, ie) => tb[ee.blockHarvestTypes[ie]],
        harvestLevel: (ee, ie) => {
          const He = ee.blockHarvestLevels[ie];
          return He === fe.Hc ? void 0 : He
        },
        harvests: (ee, ie) => {
          var He;
          const ye = null !== (He = ee.itemHarvests[ie]) && void 0 !== He ? He : 0;
          return 0 !== ye ? tb[ye] : void 0 === (0, Xy.harvestsNullLevelOf)(ie) ? void 0 : null
        },
        level: (ee, ie) => {
          var He, ye;
          const be = null !== (He = ee.itemLevels[ie]) && void 0 !== He ? He : fe.Hc;
          return be !== fe.Hc ? be : null !== (ye = (0, Xy.harvestsNullLevelOf)(ie)) && void 0 !== ye ? ye : void 0
        }
      };

    function Pb(ee, ie, He) {
      return Yb(new Uint8Array(Math.floor(ee.length / ie)), ee, ie, He)
    }

    function Ab(ee, ie, He) {
      return Yb(new Uint16Array(Math.floor(ee.length / ie)), ee, ie, He)
    }

    function Yb(ee, ie, He, ye) {
      const be = new DataView(ie.buffer, ie.byteOffset, ie.byteLength);
      for (let Me = 0; Me < ee.length; Me++) ee[Me] = ye(be, Me * He);
      return ee
    }
    class Vb {
      constructor(ee, ie) {
        this.options = ie, this.metas = [], this.types = new Map, this.props = void 0, this.rootIdOf = ee => {
          const ie = this.idOf(ee);
          if (void 0 === ie) throw new Error(`No item is named ${ee}, an item's root`);
          return ie
        };
        const He = ie => {
            const He = ie();
            return new Uint8Array(ee.memory().buffer, ee.scratch(), He).slice()
          },
          ye = (new TextDecoder).decode(He((() => ee.queries.itemNames()))).split("\n"),
          be = He((() => ee.queries.blockProps())),
          Me = He((() => ee.queries.itemProps()));
        this.props = {
          blockFlags: Pb(be, fe.A.BYTES, fe.A.flags),
          blockHarvestTypes: Pb(be, fe.A.BYTES, fe.A.harvestType),
          blockHarvestLevels: Pb(be, fe.A.BYTES, fe.A.harvestLevel),
          blockAttachedTops: Ab(be, fe.A.BYTES, fe.A.attachedTop),
          itemFlags: Pb(Me, fe.Ec.BYTES, fe.Ec.flags),
          itemHarvests: Pb(Me, fe.Ec.BYTES, fe.Ec.harvests),
          itemLevels: Pb(Me, fe.Ec.BYTES, fe.Ec.level)
        }, (0, Wb.n)(Object.freeze(ye)), (0, db.f)()
      }
      idOf(ee) {
        if ("number" === typeof ee) return void 0 === (0, Wb.g)(ee) ? void 0 : ee;
        const ie = (0, Wb.c)(ee);
        return void 0 === ie && wb.test(ee) ? void 0 === (0, Wb.g)(+ee) ? void 0 : +ee : ie
      }
      getMetaInfo(ee) {
        if (!ee || ee === Eb.e) return Eb.f;
        const ie = this.idOf(ee);
        if (void 0 === ie) throw new Error(`Item ${ee} not found in registry`);
        return this.metaOf(ie)
      }
      blockRootId(ee) {
        return 0 !== ee && void 0 !== (0, Wb.g)(ee) ? this.metaOf(ee).rootId : ee
      }
      metaOf(ee) {
        return this.metas[ee] ??= (0, gb.j)((0, Wb.g)(ee), ee, this.rootIdOf, (0, Xy.rootMetaDescOf)(ee))
      }
      getItemId(ee) {
        if (!ee || ee === Eb.e) return 0;
        const ie = this.idOf(ee);
        if (void 0 === ie) throw new Error(`Invalid block name. You sent ${ee}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
        return ie
      }
      getItemName(ee) {
        if (!ee || ee === Eb.e) return Eb.e;
        const ie = this.idOf(ee);
        if (void 0 === ie) throw new Error(`Item ${ee} not found in registry`);
        return (0, Wb.g)(ie)
      }
      blockNameToBlockId(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (ee === Eb.e) return 0;
        let He = this.idOf(ee);
        if (void 0 === He || !this.isBlockId(He)) {
          const ie = ee.indexOf("|"),
            ye = ie > 0 ? (0, Wb.c)(ee.slice(0, ie)) : void 0;
          He = void 0 !== ye && this.isBlockId(ye) && (0, Xy.rootMetaDescOf)(ye) === ee ? ye : void 0
        }
        if (void 0 !== He) return He;
        if (!ie) throw new Error(`Invalid block name. You sent ${ee}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
        return null
      }
      isBlockId(ee) {
        return ee > 0 && ee < this.props.blockFlags.length
      }
      nameOfId(ee) {
        return 0 !== ee && (0, Wb.g)(ee) || Eb.e
      }
      itemType(ee) {
        const ie = ee ? this.idOf(ee) : void 0;
        if (!ie) return null;
        let He = this.types.get(ie);
        return void 0 === He && (He = Object.freeze({
          id: ie,
          name: (0, Wb.g)(ie),
          meta: this.getMetaInfo(ie),
          stackable: Zb(this.props, ie),
          type: (0, Xy.itemTypeNameOf)(ie),
          clipSize: (0, Xy.clipSizeOf)(ie),
          scopeType: (0, Xy.scopeTypeOf)(ie),
          showsAimingUi: (0, Xy.showsAimingUi)(ie)
        }), this.types.set(ie, He)), He
      }
      getItemStat(ee, ie) {
        if (Ob.e.has(ie)) {
          const He = "minChargeStateToUse" === ie ? this.getMetaInfo(ee).rootName : this.getItemName(ee),
            ye = this.options.get((0, Ob.h)(He, ie));
          if (null !== ye && void 0 !== ye) return ye
        }
        return this.defaultStat(ee, ie, this.statOf(ie))
      }
      getDisplayName(ee) {
        return this.getItemStat(ee, "displayName")
      }
      getDefaultItemStat(ee, ie) {
        return this.defaultStat(ee, ie, this.statOf(ie))
      }
      statOf(ee) {
        const ie = Db[ee];
        return void 0 === ie && function(ee, ie) {
          throw new Error(`ClientApi.${ee} is not available yet in the wasm client (${ie})`)
        }(`getItemStat("${ee}")`, `a table of the stat: the wasm client answers ${Object.keys(Db).join(", ")}`), ie
      }
      defaultStat(ee, ie, He) {
        const ye = this.idOf(ee),
          be = void 0 === ye ? void 0 : He(this.props, ye);
        return null !== be && void 0 !== be || "displayName" !== ie ? be : this.getItemName(ee)
      }
      getClientOption(ee) {
        return this.options.get(ee)
      }
      getGunStats(ee) {
        return this.getClientOption(`${ee}GunStats`)
      }
      watchClientOption(ee, ie) {
        return this.options.subscribe(ee, ie)
      }
      isSolidBlockId(ee) {
        var ie;
        return 0 !== ((null !== (ie = this.props.blockFlags[ee]) && void 0 !== ie ? ie : 0) & fe.x.Solid)
      }
      isStackableId(ee) {
        return Zb(this.props, ee)
      }
      isFluidBlockId(ee) {
        var ie;
        return 0 !== ((null !== (ie = this.props.blockFlags[ee]) && void 0 !== ie ? ie : 0) & fe.x.Fluid)
      }
      canPlaceOverBlockId(ee) {
        var ie;
        return 0 !== ((null !== (ie = this.props.blockFlags[ee]) && void 0 !== ie ? ie : 0) & fe.x.PlaceOver)
      }
      attachedTopOf(ee) {
        var ie;
        return null !== (ie = this.props.blockAttachedTops[ee]) && void 0 !== ie ? ie : 0
      }
      isDroplessBlockId(ee) {
        return (0, Xy.dropsNothing)(ee)
      }
    }

    function ab(ee, ie) {
      const He = new Map;
      return (ye, be) => {
        const Me = ie.idOf(ye),
          Ke = void 0 === Me ? null : (ye => {
            let be = He.get(ye);
            if (void 0 === be) {
              const Me = ee.queries.salvageRecipe(ye),
                Ke = new DataView(ee.memory().buffer, ee.scratch(), Me),
                Ue = [];
              for (let ee = 0; ee + fe.ee.BYTES <= Me; ee += fe.ee.BYTES) Ue.push(Object.freeze({
                item: ie.nameOfId(fe.ee.item(Ke, ee)),
                amt: fe.ee.amount(Ke, ee)
              }));
              be = 0 === Ue.length ? null : Object.freeze(Ue), He.set(ye, be)
            }
            return be
          })(Me);
        if (null === Ke || void 0 === be) return Ke;
        const Ue = be <= 0 ? 1 : be;
        return Ke.map((ee => {
          let {
            item: ie,
            amt: He
          } = ee;
          return {
            item: ie,
            amt: He * Ue
          }
        }))
      }
    }
    var cb = He(41887),
      xb = He(37786),
      Lb = He(37772),
      Cb = He(37775),
      vb = He(37301),
      ub = He(41780),
      mb = He(54196);
    const lb = -1,
      Sb = new Uint8Array(0),
      nb = new TextEncoder;

    function jb(ee) {
      if (null === ee) return null;
      const ie = nb.encode(ee);
      return ie.byteLength < ke.zc ? ie : ie.subarray(0, ke.zc - 1)
    }
    class sb {
      constructor(ee) {
        this.deps = ee, this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = lb, this.keyframesSettled = !1, this.reloadFrom = lb
      }
      reloadKeyframes() {
        var ee, ie;
        this.keyframesVersion = lb, this.reloadFrom = null !== (ee = null === (ie = this.view()) || void 0 === ie ? void 0 : ie.version) && void 0 !== ee ? ee : lb
      }
      setPlayback(ee) {
        const ie = 1 === this.deps.core.EKe(ee);
        return ie && (this.lastView = null, this.lastKeyframes = [], this.keyframesVersion = lb, this.reloadFrom = lb), ie
      }
      async open(ee, ie) {
        const He = await this.deps.replay.open(ee, ie);
        return "opening" === He && (this.reloadKeyframes(), this.deps.recorder.prefetch()), He
      }
      play() {
        this.deps.replay.play()
      }
      pause() {
        this.deps.replay.pause()
      }
      seek(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.deps.replay.seek(Math.max(0, Math.floor(ee)), ie)
      }
      setSpeed(ee) {
        this.deps.replay.setSpeed(ee)
      }
      setCameraMode(ee) {
        this.deps.replay.setCameraMode(mb.b.indexOf(ee))
      }
      view() {
        var ee;
        const ie = fe.v.replayViewPtr(this.deps.apiView(), 0);
        if (0 === ie) return this.lastView = null, null;
        const He = new DataView(this.deps.buffer(), ie, fe.Yd.BYTES),
          ye = fe.Yd.version(He, 0),
          be = this.lastView;
        if (null !== be && be.version === ye) return be;
        const Me = fe.Yd.markIn(He, 0),
          Ke = {
            version: ye,
            state: fe.Yd.state(He, 0),
            cameraMode: null !== (ee = mb.b[fe.Yd.cameraMode(He, 0)]) && void 0 !== ee ? ee : "recording",
            YR: fe.Yd.YR(He, 0),
            totalTicks: fe.Yd.totalTicks(He, 0),
            speed: fe.Yd.speed(He, 0),
            mark: Me === fe.Wd ? null : {
              inTick: Me,
              outTick: fe.Yd.markOut(He, 0)
            },
            editVersion: fe.Yd.editVersion(He, 0)
          };
        return this.lastView = Ke, Ke
      }
      keyframes() {
        const ee = this.view();
        if (null === ee) return [];
        ee.version !== this.reloadFrom && (this.reloadFrom = lb);
        const ie = this.reloadFrom === lb && ee.state !== ke.Yc.Cropping && ee.state !== ke.Yc.None,
          He = ie ? ee.editVersion : ee.version;
        if (He === this.keyframesVersion && ie === this.keyframesSettled) return this.lastKeyframes;
        const {
          core: ye
        } = this.deps, be = ye.gKe(), Me = ye.eX(), Ke = [];
        if (0 !== Me && be > 0) {
          const ee = new DataView(this.deps.buffer(), Me, be * ke.nc);
          for (let ie = 0; ie < be; ie++) {
            const He = ie * ke.nc,
              ye = ie => ee.getFloat64(He + ie, !0);
            Ke.push({
              YR: ee.getUint32(He + ke.yc, !0),
              position: [ye(ke.vc), ye(ke.vc + 8), ye(ke.vc + 16)],
              direction: [ye(ke.pc), ye(ke.pc + 8), ye(ke.pc + 16)],
              easing: [ye(ke.sc), ye(ke.sc + 8), ye(ke.sc + 16), ye(ke.sc + 24)]
            })
          }
        }
        return this.keyframesVersion = He, this.keyframesSettled = ie, this.lastKeyframes = Ke, Ke
      }
      addKeyframe() {
        const ee = this.deps.apiView(),
          ie = [fe.v.eye(ee, 0, 0), fe.v.eye(ee, 0, 1), fe.v.eye(ee, 0, 2)];
        return this.deps.replay.addKeyframe(ie, function(ee, ie) {
          const He = Math.cos(ie);
          return [He * Math.sin(ee), -Math.sin(ie), He * Math.cos(ee)]
        }(fe.v.heading(ee, 0), fe.v.pitch(ee, 0)))
      }
      setKeyframe(ee) {
        return this.deps.replay.setKeyframe(ee.YR, Float64Array.from([...ee.position, ...ee.direction, ...ee.easing]))
      }
      moveKeyframe(ee, ie) {
        return this.deps.replay.moveKeyframe(ee, ie)
      }
      deleteKeyframes(ee, ie) {
        return this.deps.replay.deleteKeyframes(ee, ie)
      }
      setMark(ee) {
        var ie, He;
        return this.deps.replay.setMark(null !== (ie = null === ee || void 0 === ee ? void 0 : ee.inTick) && void 0 !== ie ? ie : -1, null !== (He = null === ee || void 0 === ee ? void 0 : ee.outTick) && void 0 !== He ? He : -1)
      }
      crop(ee, ie) {
        const He = this.deps.replay.crop(ee, ie);
        return He && this.reloadKeyframes(), He
      }
      save(ee) {
        return this.deps.replay.askSave(), this.deps.recorder.saveEdited(ee)
      }
      recorderControl(ee) {
        this.deps.recorder.control(ee)
      }
      recorderPrefs(ee, ie) {
        this.deps.recorder.prefs(ee, ie)
      }
      recorderOption(ee, ie) {
        const He = this.deps.cmd();
        return null !== He && (0, fe.zf)(He, 0, ee, null === ie ? Sb : nb.encode(ie))
      }
      recordFlyingText(ee, ie, He, ye) {
        const be = this.deps.cmd(),
          Me = Math.max(0, Math.min(4294967295, Math.round(ye)));
        return null !== be && (0, fe.sf)(be, 0, ie, He, Me, nb.encode(ee))
      }
      recordPlayerKilled(ee, ie, He, ye) {
        const be = this.deps.cmd();
        return null !== be && (0, fe.Df)(be, 0, ee, ie, Math.max(0, He), nb.encode(ye))
      }
      recordKillfeed(ee, ie, He) {
        var ye, be;
        const Me = this.deps.cmd(),
          Ke = function(ee) {
            const ie = ee.reduce(((ee, ie) => {
                var He;
                return ee + Fy.sb + (null !== (He = null === ie || void 0 === ie ? void 0 : ie.byteLength) && void 0 !== He ? He : 0)
              }), 0),
              He = new Uint8Array(ie),
              ye = new DataView(He.buffer);
            let be = 0;
            for (const Ke of ee) {
              var Me;
              ye.setUint16(be, null !== (Me = null === Ke || void 0 === Ke ? void 0 : Ke.byteLength) && void 0 !== Me ? Me : ke.zc, !0), be += Fy.sb, null !== Ke && (He.set(Ke, be), be += Ke.byteLength)
            }
            return He
          }([jb(ee.name), jb(ee.colour), jb(ie.name), jb(ie.colour), jb(He)]);
        return null !== Me && (0, fe.wf)(Me, 0, null !== (ye = ee.id) && void 0 !== ye ? ye : fe.$c, null !== (be = ie.id) && void 0 !== be ? be : fe.$c, Ke)
      }
      recorderSession(ee, ie) {
        this.deps.recorder.session({
          session: ie,
          lobbyType: ee.lobbyType,
          game: ee.gameNameWithVariation,
          lobby: ee.lobbyName
        })
      }
      recorderClose() {
        this.deps.core.OKe()
      }
      filePartDone(ee, ie) {
        this.deps.recorder.filePartDone(ee, ie)
      }
      fileDone(ee) {
        this.deps.recorder.fileDone(ee)
      }
    }
    const Ib = -2147483648;
    class hb {
      constructor(ee) {
        var ie;
        this.deps = ee, this.state = py.b, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (ie = ee.now) && void 0 !== ie ? ie : () => performance.now()
      }
      get current() {
        return this.state
      }
      get live() {
        var ee, ie, He;
        return null === (ee = null === (ie = (He = this.deps).live) || void 0 === ie ? void 0 : ie.call(He)) || void 0 === ee || ee
      }
      activated(ee) {
        var ie, He;
        this.live && (this.viewerShown(!0 === (null === (ie = (He = this.deps).viewerOpen) || void 0 === ie ? void 0 : ie.call(He))), this.deps.client.recorderSession(ee, (0, mb.e)()))
      }
      closed() {
        this.deps.client.recorderClose()
      }
      toggleRecording() {
        var ee, ie;
        this.live && (this.state.recording || !0 !== (null === (ee = (ie = this.deps).viewerOpen) || void 0 === ee ? void 0 : ee.call(ie))) ? this.deps.client.recorderControl(ke.Nc.ToggleRecording) : this.deps.notify(Cb.d.closeViewerFirst)
      }
      saveClip() {
        this.live ? this.deps.client.recorderControl(ke.Nc.SaveClip) : this.deps.notify(Cb.d.clippingNotOn)
      }
      viewerShown(ee) {
        this.live && this.deps.client.recorderControl(ee ? ke.Nc.ViewerOpened : ke.Nc.ViewerClosed)
      }
      setPrefs(ee, ie) {
        this.live && this.deps.client.recorderPrefs(ee, ie)
      }
      setOption(ee, ie) {
        this.live && this.deps.client.recorderOption(ee, ie)
      }
      recordFlyingText(ee, ie, He, ye) {
        this.live && this.deps.client.recordFlyingText(ee, ie, He, ye)
      }
      recordPlayerKilled(ee, ie, He, ye) {
        this.live && this.deps.client.recordPlayerKilled(ee, ie, He, ye)
      }
      recordKillfeed(ee, ie, He) {
        this.live && this.deps.client.recordKillfeed(ee, ie, He)
      }
      YR() {
        let ee = this.state;
        if (this.clipTickPending && (this.clipTickPending = !1, ee = {
            ...ee,
            hasClipBuffer: !0
          }), null !== this.recordingSince) {
          const ie = Math.floor((this.now() - this.recordingSince) / 1e3);
          ie !== ee.seconds && (ee = {
            ...ee,
            seconds: ie
          })
        }
        this.set(ee)
      }
      onEvent(ee) {
        var ie, He;
        const {
          notify: ye
        } = this.deps, be = Cb.d;
        switch (ee.what) {
          case ke.Jc.RecordingStarted:
            this.recordingSince = this.now(), this.set({
              ...this.state,
              recording: !0,
              seconds: 0
            }), ye(be.recordingStarted);
            break;
          case ke.Jc.RecordingStopped:
            this.stopRecording(), ye(be.recordingStopped), this.saveState(ke.Sc.Recording, "saving");
            break;
          case ke.Jc.RecordingDiscarded:
            this.stopRecording(), ye(be.recordingDiscarded);
            break;
          case ke.Jc.RecordingTurnedOff:
            this.stopRecording(), ye(be.recordingTurnedOff);
            break;
          case ke.Jc.LimitReached:
            ye(be.limitReached);
            break;
          case ke.Jc.ClipSaved:
            this.saveState(ke.Sc.Clip, "saving");
            break;
          case ke.Jc.ClipEmpty:
            ye(be.clipEmpty);
            break;
          case ke.Jc.ClippingNotOn:
            ye(be.clippingNotOn);
            break;
          case ke.Jc.Disallowed:
            ye(be.disallowed);
            break;
          case ke.Jc.ClippingOn:
            this.clipTickPending = !0, this.set({
              ...this.state,
              clipping: !0,
              hasClipBuffer: !1
            });
            break;
          case ke.Jc.ClippingOff:
            this.clipTickPending = !1, this.set({
              ...this.state,
              clipping: !1,
              hasClipBuffer: !1
            });
            break;
          case ke.Jc.ClipSettingsChanged:
            this.clipTickPending = this.state.clipping, this.set({
              ...this.state,
              hasClipBuffer: !1
            });
            break;
          case ke.Jc.SaveBusy:
            null === (ie = (He = this.deps).onSaveState) || void 0 === ie || ie.call(He, ee.kind, "busy"), ye(be.saveBusy);
            break;
          case ke.Jc.CloseViewerFirst:
            ye(be.closeViewerFirst)
        }
      }
      fileReady(ee, ie) {
        this.deps.download(ie), this.saveState(ee, "done"), this.deps.notify(ee === ke.Sc.Clip ? Cb.d.clipSaved : Cb.d.recordingSaved)
      }
      failed(ee) {
        this.saveState(ee, "failed"), this.deps.notify(ee === ke.Sc.Clip ? Cb.d.clipFailed : Cb.d.recordingFailed)
      }
      stopped() {
        this.recordingSince = null, this.clipTickPending = !1, this.set(py.b)
      }
      stopRecording() {
        this.recordingSince = null, this.set({
          ...this.state,
          recording: !1,
          seconds: 0
        })
      }
      saveState(ee, ie) {
        var He, ye;
        null === (He = (ye = this.deps).onSaveState) || void 0 === He || He.call(ye, ee, ie)
      }
      set(ee) {
        ee !== this.state && (this.state = ee, this.deps.onState(ee))
      }
    }
    const Nb = new TextDecoder;

    function Gb(ee, ie, He, ye) {
      const be = [];
      for (let Me = 0; Me < ye; Me++) {
        if (ie + Fy.sb > He) return null;
        const ye = ee.getUint16(ie, !0);
        if (ie += Fy.sb, ye !== ke.zc) {
          if (ie + ye > He) return null;
          be.push(Nb.decode(new Uint8Array(ee.buffer, ee.byteOffset + ie, ye))), ie += ye
        } else be.push(null)
      }
      return ie === He ? be : null
    }

    function rb(ee, ie) {
      let He = new DataView(new ArrayBuffer(0)),
        ye = !0;
      const be = {
        replayFailed: (ie, He, ye) => {
          ee.replayFailed({
            reason: ie,
            code: He,
            version: ye
          })
        },
        replayOption: (ie, be, Me, Ke) => {
          const Ue = function(ee, ie, He, ye) {
            switch (ie) {
              case ke.Uc.Cleared:
                return 0 === ye ? null : void 0;
              case ke.Uc.Text:
                return Nb.decode(new Uint8Array(ee.buffer, ee.byteOffset + He, ye));
              case ke.Uc.Int:
                return ye === Int32Array.BYTES_PER_ELEMENT ? ee.getInt32(He, !0) : void 0;
              case ke.Uc.Double:
                return ye === Float64Array.BYTES_PER_ELEMENT ? ee.getFloat64(He, !0) : void 0;
              default:
                return
            }
          }(He, be, Me, Ke);
          void 0 !== Ue ? ee.replayOption({
            key: ie,
            value: Ue
          }) : ye = !1
        },
        replayUiEvent: (ie, be, Me, Ke, Ue, Fe) => {
          const Je = function(ee, ie, He, ye, be, Me, Ke) {
            const Ue = Me + Ke;
            switch (ie) {
              case ke.Wc.FlyingText: {
                const Ke = Gb(ee, Me, Ue, 1);
                return null !== Ke && null !== Ke[0] ? {
                  what: ie,
                  Oe: He,
                  ge: ye,
                  angle: be,
                  contentJson: Ke[0]
                } : null
              }
              case ke.Wc.PlayerKilled: {
                const ye = Gb(ee, Me, Ue, 3);
                return ye ? {
                  what: ie,
                  killstreak: He,
                  dead: ye[0],
                  killer: ye[1],
                  withItem: ye[2]
                } : null
              }
              case ke.Wc.Killfeed: {
                const He = Gb(ee, Me, Ue, 7);
                return He ? {
                  what: ie,
                  killerId: He[0],
                  killerName: He[1],
                  killerColour: He[2],
                  victimId: He[3],
                  victimName: He[4],
                  victimColour: He[5],
                  withItem: He[6]
                } : null
              }
              default:
                return null
            }
          }(He, ie, be, Me, Ke, Ue, Fe);
          null !== Je ? ee.replayUiEvent(Je) : ye = !1
        },
        replayFilePart: (He, be, Me, Ke) => {
          const Ue = ie();
          Me + Ke > Ue.byteLength ? ye = !1 : ee.filePart(He, be, new Uint8Array(Ue, Me, Ke).slice())
        },
        replayFileReady: (ie, He, ye, be) => {
          ee.fileReady({
            save: ie,
            kind: He,
            parts: ye,
            bytes: be
          })
        },
        recorderEvent: (ie, He, ye) => {
          ee.recorderEvent({
            what: ie,
            kind: He,
            save: ye
          })
        },
        replayOpened: (ie, ye, be) => {
          ee.replayOpened(Nb.decode(new Uint8Array(He.buffer, He.byteOffset + ye, be)))
        }
      };
      return (ee, ie, Me, Ke) => !(ee < ke.U.ReplayFailed || ee > ke.U.RecorderEvent) && (He = ie, ye = !0, (0, fe.oe)(ee, ie, Me, Ke, be) && ye)
    }

    function Qb(ee) {
      let ie = null;
      const He = rb(ee, (() => {
        if (null === ie) throw new Error("a recorder event read outside recorderEventReader's call");
        return ie.buffer
      }));
      return (ee, ye) => {
        ie = ye;
        try {
          ! function(ee, ie) {
            const He = ee.slice(),
              ye = new DataView(He.buffer);
            for (let be = 0; be < He.byteLength;) {
              if (be + ke.S > He.byteLength) throw new Error(`the recorder module's events end mid-head at ${be}`);
              const ee = ye.getUint32(be, !0),
                Me = 65535 & ee,
                Ke = ee >>> 16,
                Ue = be + ke.S;
              if (Ue + Ke > He.byteLength || !ie(Me, ye, Ue, Ke)) throw new Error(`the recorder module wrote a malformed event ${Me} (${Ke} bytes) at ${be}`);
              be = Ue + (0, ke.le)(Ke)
            }
          }(ee, He)
        } finally {
          ie = null
        }
      }
    }
    class eM {
      constructor(ee, ie) {
        this.acks = ee, this.handlers = ie, this.parts = new Map
      }
      onPart(ee, ie, He) {
        let ye = this.parts.get(ee);
        ye || (ye = [], this.parts.set(ee, ye)), ye[ie] = He, this.acks.filePartDone(ee, ie)
      }
      onReady(ee) {
        var ie;
        const He = null !== (ie = this.parts.get(ee.save)) && void 0 !== ie ? ie : [];
        this.parts.delete(ee.save);
        const ye = function(ee, ie, He) {
          if (ee.length !== ie) return null;
          let ye = 0;
          for (let Ke = 0; Ke < ie; Ke++) {
            if (void 0 === ee[Ke]) return null;
            ye += ee[Ke].byteLength
          }
          if (ye !== He) return null;
          if (1 === ie) return ee[0];
          const be = new Uint8Array(He);
          let Me = 0;
          for (const Ke of ee) be.set(Ke, Me), Me += Ke.byteLength;
          return be
        }(He, ee.parts, ee.bytes);
        this.acks.fileDone(ee.save), null === ye ? this.handlers.fileIncomplete(ee.save, ee.kind) : this.handlers.fileReady(ee.save, ee.kind, ye)
      }
      onDiscarded(ee) {
        this.parts.delete(ee)
      }
    }

    function iM() {
      return He.e(72).then((() => He(63791)))
    }
    class HM {
      constructor(ee) {
        this.deps = ee, this.sink = void 0, this.recorder = void 0, this.recorderEvents = void 0, this.parts = void 0, this.viewerChunk = null, this.viewer = null;
        const {
          client: ie
        } = ee;
        this.recorder = new hb({
          client: ie,
          live: () => {
            var ee;
            return !0 !== (null === (ee = this.viewer) || void 0 === ee ? void 0 : ee.inPlayback)
          },
          viewerOpen: ee.viewerOpen,
          notify: ee.notify,
          download: ie => {
            var He;
            null === (He = ee.download) || void 0 === He || He.call(ee, ie)
          },
          onState: ee.onRecorderState,
          onSaveState: ee.onSaveState
        }), this.parts = new eM(ie, {
          fileReady: (ee, ie, He) => {
            var ye;
            ie === ke.Sc.Edited ? null === (ye = this.viewer) || void 0 === ye || ye.saveDone(He) : this.recorder.fileReady(ie, He)
          },
          fileIncomplete: (ee, ie) => {
            this.saveFailed(ie)
          }
        });
        const He = {
          replayFailed: ee => {
            var ie;
            null === (ie = this.viewer) || void 0 === ie || ie.onFailed(ee)
          },
          replayOption: ie => {
            var He;
            null === (He = ee.onReplayOption) || void 0 === He || He.call(ee, ie)
          },
          replayUiEvent: ie => {
            var He;
            null === (He = ee.onReplayUiEvent) || void 0 === He || He.call(ee, ie)
          },
          filePart: (ee, ie, He) => {
            this.parts.onPart(ee, ie, He)
          },
          fileReady: ee => {
            this.parts.onReady(ee)
          },
          replayOpened: ie => {
            var He;
            null === (He = ee.onReplayOpened) || void 0 === He || He.call(ee, ie)
          },
          recorderEvent: ee => {
            var ie;
            switch (ee.what) {
              case ke.Jc.FileDiscarded:
                this.parts.onDiscarded(ee.save);
                break;
              case ke.Jc.SaveFailed:
                this.saveFailed(ee.kind);
                break;
              case ke.Jc.SaveBusy:
                if (null !== (ie = this.viewer) && void 0 !== ie && ie.savePending) {
                  this.viewer.saveFailed(!0);
                  break
                }
                this.recorder.onEvent(ee);
                break;
              default:
                this.recorder.onEvent(ee)
            }
          }
        };
        this.sink = function(ee, ie) {
          return {
            onReplayEvent: rb(ee, ie)
          }
        }(He, ee.buffer), this.recorderEvents = Qb(He)
      }
      get currentViewer() {
        return this.viewer
      }
      loadViewer() {
        var ee;
        return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (ee = this.deps.loadViewer) && void 0 !== ee ? ee : iM)().catch((ee => {
          throw this.viewerChunk = null, ee
        })), this.viewerChunk.then((ee => (this.viewer ??= new ee.ReplayViewer({
          client: this.deps.client,
          setHoldDraws: this.deps.setHoldDraws,
          meshPending: this.deps.meshPending,
          notify: this.deps.notify,
          onChange: () => {
            var ee, ie;
            null === (ee = (ie = this.deps).onViewerChange) || void 0 === ee || ee.call(ie)
          }
        }), this.viewer))))
      }
      activated(ee) {
        this.recorder.activated(ee)
      }
      afterFrame(ee) {
        try {
          ee > 0 && this.recorder.YR()
        } finally {
          var ie;
          null === (ie = this.viewer) || void 0 === ie || ie.afterFrame()
        }
      }
      end() {
        var ee;
        null === (ee = this.viewer) || void 0 === ee || ee.end()
      }
      saveFailed(ee) {
        var ie;
        ee === ke.Sc.Edited ? null === (ie = this.viewer) || void 0 === ie || ie.saveFailed(!1) : this.recorder.failed(ee)
      }
    }
    var yM = He(41728),
      bM = He(41739),
      MM = He(5282),
      KM = He(42008);
    class UM {
      constructor(ee) {
        this.deps = ee, this.analogue = [0, 0], this.keys = 0, this.unsent = !1
      }
      drag(ee, ie) {
        if (!this.deps.live() || 0 === ee && 0 === ie) return;
        const He = (0, ue.s)(0, performance.now()),
          ye = this.deps.dragScale();
        (0, KM.i)((() => {
          (0, ue.y)(ke.qb.MouseDown, 0, 0, 0, He), (0, ue.y)(ke.qb.MouseMove, 0, ee * ye, ie * ye, 0), (0, ue.y)(ke.qb.MouseUp, 0, 0, 0, He)
        }))
      }
      move(ee) {
        var ie, He;
        this.analogue[0] = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.x) && void 0 !== ie ? ie : 0, this.analogue[1] = null !== (He = null === ee || void 0 === ee ? void 0 : ee.y) && void 0 !== He ? He : 0, this.send()
      }
      holdVertical(ee, ie) {
        const He = "freeCamUp" === ee ? fe.Ub.Up : fe.Ub.Down;
        this.keys = ie ? this.keys | He : this.keys & ~He, this.send()
      }
      flush() {
        this.unsent && this.send()
      }
      send() {
        const ee = this.deps.live() ? this.deps.cmd() : null;
        this.unsent = null !== ee && !(0, fe.Ge)(ee, 0, this.analogue, this.keys)
      }
    }
    var FM = He(3962),
      JM = He(732),
      oM = He(272),
      RM = He(97),
      kM = He(34790),
      qM = He(710),
      fM = He(37415);

    function TM() {
      const ee = ye.e.get("clientEscMenuOptions"),
        ie = (0, JM.u)(ee);
      return {
        mouse: (0, RM.isMobile)() ? ie : ee.mouseSensitivity,
        touch: ie,
        fovPercent: ee.cameraFOV
      }
    }

    function pM() {
      const ee = ye.e.get("clientEscMenuOptions"),
        ie = ye.e.get("isTouchScreen") ? (0, JM.u)(ee) : ee.mouseSensitivity,
        He = TM().mouse;
      return He > 0 ? ie / He : 1
    }

    function XM(ee) {
      const ie = () => {
        ee.setSoundPrefs(ye.e.get("soundVolume"), ye.e.get("soundOnFromAd"))
      };
      let He = null;
      const be = () => {
        const {
          showFog: ie,
          enableLighting: be,
          fogChunkDistance: Me,
          chunkFadeIn: Ke
        } = ye.e.get("clientEscMenuOptions"), Ue = {
          showFog: ie,
          lighting: be,
          fogChunks: Me,
          chunkFade: Ke,
          cellLight: (0, FM.l)("cellLight") ? (0, FM.l)("cellLightUnlit") ? "all" : "lit" : "off"
        };
        He && (0, ke.Yd)(He) === (0, ke.Yd)(Ue) && He.fogChunks === Me || (He = Ue, ee.setEnvPrefs(He))
      };
      let Me = null;
      const Ue = () => {
        const ie = function() {
          const ee = ye.e.get("clientEscMenuOptions");
          return {
            nametagsHidden: ye.e.get("areNametagsHidden"),
            crouchToggle: ee.crouchIsToggle,
            bhopDisabled: ee.disableBunnyHopping,
            disableBobbing: ee.disableBobbing,
            ezTowering: ee.ezTowering ? (0, oM.d)() : null,
            ezBridging: ee.ezBridging,
            showChunkBorders: ee.showChunkBorders,
            touchWalk: !(0, fM.f)(),
            edgeGuard: ee.touchEdgeGuard,
            edgeGuardLong: (0, qM.e)(),
            nametagCutDistance: (0, kM.f)()
          }
        }();
        (0, we.ee)(Me, ie) || (Me = ie, ee.setUiPrefs(ie))
      };
      let Fe = null;
      const Je = () => {
        const ie = TM();
        (0, we.ee)(Fe, ie) || (Fe = ie, ee.setLookPrefs(ie))
      };
      ie(), be(), Ue(), Je();
      const oe = [(0, Ke.j)("appManagerUpdated|soundVolume", ie), (0, Ke.j)("appManagerUpdated|soundOnFromAd", ie), (0, Ke.j)("appManagerUpdated|clientEscMenuOptions", (() => {
        be(), Ue(), Je()
      })), (0, Ke.j)(fM.e, Ue), (0, Ke.j)("appManagerUpdated|enabledDebugFeatures", be), (0, Ke.j)("appManagerUpdated|areNametagsHidden", Ue), (0, Ke.j)("appManagerUpdated|showDistantNametags", Ue)];
      return () => {
        for (const ee of oe) ee()
      }
    }
    var zM = He(41992),
      BM = He(41995);
    var EM = (0, BM.b)("lend"),
      gM = (0, BM.b)("starting"),
      OM = (0, BM.b)("generation"),
      dM = (0, BM.b)("end");
    class WM {
      constructor(ee) {
        this.deps = ee, Object.defineProperty(this, dM, {
          value: tM
        }), Object.defineProperty(this, EM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, gM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, OM, {
          writable: !0,
          value: 0
        })
      }
      get active() {
        return null !== (0, zM.d)(this, EM)[EM] || (0, zM.d)(this, gM)[gM]
      }
      async start(ee) {
        if (this.active) return "busy";
        const ie = (0, zM.d)(this, OM)[OM];
        (0, zM.d)(this, gM)[gM] = !0;
        try {
          if (!await this.deps.ensureLoaded()) return "refused"
        } finally {
          (0, zM.d)(this, gM)[gM] = !1
        }
        if (ie !== (0, zM.d)(this, OM)[OM]) return "refused";
        const He = this.deps.beginSave();
        if (!He) return "refused";
        const ye = Number(BigInt.asUintN(32, ee)),
          be = Number(BigInt.asUintN(32, ee >> 32n));
        let Me = "refused";
        return this.deps.recorderCall(((ee, ie) => {
          const Ke = He.editState,
            Ue = ee.stage(Ke.length);
          0 !== Ue ? (new Uint8Array(ie.buffer, Ue, Ke.length).set(Ke), ee.dKe(He.headLen, ye, be) && (Me = "sealing")) : Me = "tooLarge"
        }), !0), "sealing" !== Me ? (He.end(), Me) : ((0, zM.d)(this, EM)[EM] = He, "sealing")
      }
      beforeRecorderStep() {
        const ee = (0, zM.d)(this, EM)[EM];
        if (!ee) return null;
        let ie = -1,
          He = 0;
        if (!this.deps.recorderCall((ee => {
            ie = ee.WKe(), ie > 0 && (He = ee.tKe())
          }))) return (0, zM.d)(this, dM)[dM](ee, "stopped");
        if (ie < 0) return (0, zM.d)(this, dM)[dM](ee, "read");
        if (0 === ie) return null;
        const ye = ee.head(He, ie);
        let be = !1;
        if (ye && this.deps.recorderCall(((ee, He) => {
            const Me = ee.stage(ie);
            0 !== Me && (new Uint8Array(He.buffer, Me, ie).set(ye), be = !0)
          }), !0), be) return null;
        const Me = ee.givenUp();
        this.deps.recorderCall((ee => {
          ee.ZKe()
        }));
        const Ke = (0, zM.d)(this, dM)[dM](ee, Me ? "givenUp" : "stopped");
        return Me && this.deps.givenUp("Reopen the replay you were editing to make your edits again, as they weren't saved when another replay opened."), Ke
      }
      stop() {
        (0, zM.d)(this, OM)[OM]++;
        const ee = (0, zM.d)(this, EM)[EM];
        ee && (this.deps.recorderCall((ee => {
          ee.ZKe()
        })), (0, zM.d)(this, dM)[dM](ee, "stopped"))
      }
    }

    function tM(ee, ie) {
      return (0, zM.d)(this, EM)[EM] = null, ee.end(), ie
    }

    function ZM(ee, ie) {
      const He = new Uint8Array(4),
        ye = new DataView(He.buffer);
      return ye.setUint8(0, ee ? 1 : 0), ye.setUint16(2, Math.max(0, Math.min(65535, Math.round(ie))), !0), He
    }

    function wM(ee, ie) {
      return ee > function(ee) {
        return 16777216 + 314572.8 * Math.max(0, ee)
      }(ie) + 33554432
    }
    let DM = null;

    function PM(ee) {
      return DM ??= async function(ee) {
        const ie = ee.loadInFlight();
        ie && await ie.catch((() => {}));
        if (ee.trapped()) return "trapped";
        if (ee.busy() || !wM(ee.memoryBytes(), ee.clipSeconds())) return "KR";
        ee.unload();
        let He = !1;
        try {
          He = await ee.load()
        } catch {
          He = !1
        }
        if (!He) return ee.trapped() ? "trapped" : ee.xf() ? "xf" : "failed";
        return "recycled"
      }(ee).finally((() => {
        DM = null
      })), DM
    }
    const AM = "Replay recording couldn't load, so try again.",
      YM = "Replay recording stopped working, so reload the page to record replays again.",
      VM = new Set([ke.Nc.ToggleRecording, ke.Nc.SaveClip]);
    var aM = (0, BM.b)("bindings"),
      cM = (0, BM.b)("module"),
      xM = (0, BM.b)("memory"),
      LM = (0, BM.b)("trapped"),
      CM = (0, BM.b)("xf"),
      vM = (0, BM.b)("recycleDue"),
      uM = (0, BM.b)("loading"),
      mM = (0, BM.b)("generation"),
      lM = (0, BM.b)("viewDrawn"),
      SM = (0, BM.b)("clip"),
      nM = (0, BM.b)("session"),
      jM = (0, BM.b)("control"),
      sM = (0, BM.b)("deferred"),
      IM = (0, BM.b)("coreU8"),
      hM = (0, BM.b)("coreU32"),
      NM = (0, BM.b)("moduleU8"),
      GM = (0, BM.b)("edited"),
      rM = (0, BM.b)("sendSession"),
      QM = (0, BM.b)("checkNotInEvents"),
      eK = (0, BM.b)("clipping"),
      iK = (0, BM.b)("busy"),
      HK = (0, BM.b)("use"),
      yK = (0, BM.b)("ensureLoaded"),
      bK = (0, BM.b)("loadOnce"),
      MK = (0, BM.b)("recycleAfterStep"),
      KK = (0, BM.b)("settleRecycle"),
      UK = (0, BM.b)("load"),
      FK = (0, BM.b)("attach"),
      JK = (0, BM.b)("resendHeld"),
      oK = (0, BM.b)("recycle"),
      RK = (0, BM.b)("send"),
      kK = (0, BM.b)("unload"),
      qK = (0, BM.b)("dropModule"),
      fK = (0, BM.b)("coreBytes"),
      TK = (0, BM.b)("coreWords"),
      pK = (0, BM.b)("moduleBytes"),
      XK = (0, BM.b)("loadFailed"),
      zK = (0, BM.b)("call"),
      BK = (0, BM.b)("guard"),
      EK = (0, BM.b)("trapOn");
    class gK {
      constructor(ee) {
        this.deps = ee, Object.defineProperty(this, EK, {
          value: jK
        }), Object.defineProperty(this, BK, {
          value: nK
        }), Object.defineProperty(this, zK, {
          value: SK
        }), Object.defineProperty(this, XK, {
          value: lK
        }), Object.defineProperty(this, pK, {
          value: mK
        }), Object.defineProperty(this, TK, {
          value: uK
        }), Object.defineProperty(this, fK, {
          value: vK
        }), Object.defineProperty(this, qK, {
          value: CK
        }), Object.defineProperty(this, kK, {
          value: LK
        }), Object.defineProperty(this, RK, {
          value: xK
        }), Object.defineProperty(this, oK, {
          value: cK
        }), Object.defineProperty(this, JK, {
          value: aK
        }), Object.defineProperty(this, FK, {
          value: VK
        }), Object.defineProperty(this, UK, {
          value: YK
        }), Object.defineProperty(this, KK, {
          value: AK
        }), Object.defineProperty(this, MK, {
          value: PK
        }), Object.defineProperty(this, bK, {
          value: DK
        }), Object.defineProperty(this, yK, {
          value: wK
        }), Object.defineProperty(this, HK, {
          value: ZK
        }), Object.defineProperty(this, iK, {
          value: tK
        }), Object.defineProperty(this, eK, {
          value: WK
        }), Object.defineProperty(this, QM, {
          value: dK
        }), Object.defineProperty(this, rM, {
          value: OK
        }), Object.defineProperty(this, aM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, cM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, xM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, LM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, CM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, vM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, uM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, mM, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, lM, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, SM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, nM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, jM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, sM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, IM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, hM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, NM, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, GM, {
          writable: !0,
          value: void 0
        }), (0, zM.d)(this, GM)[GM] = new WM({
          ensureLoaded: () => (0, zM.d)(this, yK)[yK](),
          recorderCall: (ee, ie) => {
            ie && (0, zM.d)(this, QM)[QM]("an edited save's stage");
            const He = (0, zM.d)(this, zK)[zK](((ie, He) => (ee(ie, He), !0)));
            return null !== He && void 0 !== He && He
          },
          beginSave: ee.beginSave,
          givenUp: ee.givenUp
        })
      }
      get active() {
        return null !== (0, zM.d)(this, cM)[cM]
      }
      get trapped() {
        return (0, zM.d)(this, LM)[LM]
      }
      get loading() {
        return null !== (0, zM.d)(this, uM)[uM]
      }
      prefetch() {
        (0, zM.d)(this, CM)[CM] || (0, zM.d)(this, LM)[LM] || (0, zM.d)(this, cM)[cM] || (0, zM.d)(this, uM)[uM] || this.deps.prefetch()
      }
      viewDrawn() {
        (0, zM.d)(this, lM)[lM] = !0, (0, zM.d)(this, eK)[eK]() && (0, zM.d)(this, HK)[HK]()
      }
      prefs(ee, ie) {
        (0, zM.d)(this, SM)[SM] = {
          on: ee,
          seconds: ie
        }, (0, zM.d)(this, RK)[RK](ke.Fc.Prefs, ZM(ee, ie)), ee && (0, zM.d)(this, lM)[lM] && (0, zM.d)(this, HK)[HK]()
      }
      control(ee) {
        const ie = function(ee) {
          return new Uint8Array([ee, 0, 0, 0])
        }(ee);
        if (VM.has(ee)) {
          if (!(0, zM.d)(this, LM)[LM]) return (0, zM.d)(this, cM)[cM] ? void(0, zM.d)(this, RK)[RK](ke.Fc.Control, ie) : ((0, zM.d)(this, jM)[jM] = ie, void(0, zM.d)(this, HK)[HK]());
          this.deps.failed(YM)
        } else(0, zM.d)(this, CM)[CM] || this.deps.coreCommand(ke.Fc.Control, ie)
      }
      session(ee) {
        (0, zM.d)(this, nM)[nM] = ee, (0, zM.d)(this, rM)[rM](ee)
      }
      filePartDone(ee, ie) {
        (0, zM.d)(this, RK)[RK](ke.Fc.FilePartDone, function(ee, ie) {
          const He = new Uint8Array(8),
            ye = new DataView(He.buffer);
          return ye.setUint32(0, ee, !0), ye.setUint32(4, ie, !0), He
        }(ee, ie))
      }
      fileDone(ee) {
        return (0, zM.d)(this, RK)[RK](ke.Fc.FileDone, function(ee) {
          const ie = new Uint8Array(4);
          return new DataView(ie.buffer).setUint32(0, ee, !0), ie
        }(ee)), (0, zM.d)(this, MK)[MK]()
      }
      saveEdited(ee) {
        return (0, zM.d)(this, QM)[QM]("saveEdited"), (0, zM.d)(this, GM)[GM].start(ee)
      }
      afterFrame() {
        if (!(0, zM.d)(this, cM)[cM]) return;
        "read" === (0, zM.d)(this, GM)[GM].beforeRecorderStep() && (0, zM.d)(this, MK)[MK]();
        const ee = (0, zM.d)(this, vM)[vM];
        (0, zM.d)(this, vM)[vM] = null;
        const ie = (0, zM.d)(this, cM)[cM],
          He = (0, zM.d)(this, xM)[xM];
        if (!ie || !He) return void(null === ee || void 0 === ee || ee.resolve((0, zM.d)(this, LM)[LM] ? "trapped" : "KR"));
        const {
          core: ye
        } = this.deps, be = ye.PKe(2);
        let Me, Ke, Ue, Fe, Je = 0,
          oe = 0;
        if (0 !== be) {
          var Re, ke;
          const ee = (0, zM.d)(this, TK)[TK]();
          Je = null !== (Re = ee[be >>> 2]) && void 0 !== Re ? Re : 0, oe = null !== (ke = ee[1 + (be >>> 2)]) && void 0 !== ke ? ke : 0
        }
        try {
          if (oe > 0) {
            const ee = ie.feed(oe);
            0 !== ee && (0, zM.d)(this, pK)[pK](He).set((0, zM.d)(this, fK)[fK]().subarray(Je, Je + oe), ee)
          }
          Me = ie.step(), Ke = ie.AKe(), Ue = ie.YKe(), Fe = ie.VKe()
        } catch (qe) {
          if (!(0, zM.d)(this, EK)[EK](qe)) throw null === ee || void 0 === ee || ee.resolve("KR"), qe;
          return void(null === ee || void 0 === ee || ee.resolve("trapped"))
        }
        if (Me > 0) {
          const ee = ye.aKe(2, Me);
          0 !== ee && (0, zM.d)(this, fK)[fK]().set((0, zM.d)(this, pK)[pK](He).subarray(Ke, Ke + Me), ee)
        }
        if (Ue > 0) {
          (0, zM.d)(this, sM)[sM] = [];
          try {
            this.deps.events(new Uint8Array(He.buffer, Fe, Ue), He)
          } catch (qe) {
            throw null === ee || void 0 === ee || ee.resolve("KR"), qe
          } finally {
            const ee = (0, zM.d)(this, sM)[sM];
            (0, zM.d)(this, sM)[sM] = null;
            for (const [ie, He] of ee)(0, zM.d)(this, RK)[RK](ie, He)
          }
        }
        if (!(0, zM.d)(this, eK)[eK]() && !(0, zM.d)(this, iK)[iK]()) return (0, zM.d)(this, kK)[kK](), void(null === ee || void 0 === ee || ee.resolve("KR"));
        null === ee || void 0 === ee || ee.resolve((0, zM.d)(this, oK)[oK]())
      }
      dispose() {
        (0, zM.d)(this, CM)[CM] = !0, (0, zM.d)(this, kK)[kK]()
      }
    }

    function OK(ee) {
      (0, zM.d)(this, RK)[RK](ke.Fc.Session, function(ee) {
        const ie = new TextEncoder,
          He = ie.encode(ee.game).subarray(0, 65535),
          ye = ie.encode(ee.lobby).subarray(0, 65535),
          be = new Uint8Array(22 + He.length + 2 + ye.length),
          Me = new DataView(be.buffer);
        Me.setFloat64(0, ee.unixMs, !0), Me.setBigUint64(8, BigInt.asUintN(64, ee.session), !0), Me.setUint8(16, ee.lobbyType);
        let Ke = 20;
        for (const Ue of [He, ye]) Me.setUint16(Ke, Ue.length, !0), be.set(Ue, Ke + 2), Ke += 2 + Ue.length;
        return be
      }({
        ...ee,
        unixMs: this.deps.unixNow()
      }))
    }

    function dK(ee) {
      false
    }

    function WK() {
      var ee, ie;
      return null !== (ee = null === (ie = (0, zM.d)(this, SM)[SM]) || void 0 === ie ? void 0 : ie.on) && void 0 !== ee && ee
    }

    function tK() {
      const ee = (0, zM.d)(this, cM)[cM];
      let ie = !0;
      if (ee) try {
        ie = ee.busy()
      } catch (He) {
        if (!(0, zM.d)(this, EK)[EK](He)) throw He
      }
      return ie || (0, zM.d)(this, GM)[GM].active
    }
    async function ZK() {
      !(0, zM.d)(this, CM)[CM] && this.deps.allowed() ? await (0, zM.d)(this, yK)[yK]() : (0, zM.d)(this, jM)[jM] = null
    }

    function wK() {
      return (0, zM.d)(this, LM)[LM] || (0, zM.d)(this, CM)[CM] ? Promise.resolve(!1) : (0, zM.d)(this, cM)[cM] ? Promise.resolve(!0) : ((0, zM.d)(this, uM)[uM] ??= (0, zM.d)(this, bK)[bK](), (0, zM.d)(this, uM)[uM])
    }
    async function DK() {
      let ee = !1;
      try {
        return ee = await (0, zM.d)(this, UK)[UK](), ee
      } finally {
        ee || ((0, zM.d)(this, jM)[jM] = null), (0, zM.d)(this, uM)[uM] = null
      }
    }

    function PK() {
      if (!(0, zM.d)(this, cM)[cM]) return Promise.resolve((0, zM.d)(this, LM)[LM] ? "trapped" : "KR");
      if (!(0, zM.d)(this, vM)[vM]) {
        let ee = () => {};
        const ie = new Promise((ie => {
          ee = ie
        }));
        (0, zM.d)(this, vM)[vM] = {
          promise: ie,
          resolve: ee
        }
      }
      return (0, zM.d)(this, vM)[vM].promise
    }

    function AK(ee) {
      const ie = (0, zM.d)(this, vM)[vM];
      (0, zM.d)(this, vM)[vM] = null, null === ie || void 0 === ie || ie.resolve(ee)
    }
    async function YK() {
      let ee = (0, zM.d)(this, aM)[aM];
      if (!ee) {
        const ie = (0, zM.d)(this, mM)[mM];
        try {
          ee = await this.deps.load()
        } catch (He) {
          return ie === (0, zM.d)(this, mM)[mM] && await (0, zM.d)(this, XK)[XK](He), !1
        }
        if (ie !== (0, zM.d)(this, mM)[mM]) return this.deps.unload(), !1;
        const ye = ee,
          be = (0, zM.d)(this, BK)[BK]((() => ye.cKe()));
        if (void 0 === be) return !1;
        const Me = this.deps.core.xKe();
        if (be !== Me) return await (0, zM.d)(this, XK)[XK](new Error(`recorder port version ${be}, the core's ${Me}`)), !1;
        (0, zM.d)(this, aM)[aM] = ee
      }
      const ie = ee;
      try {
        if (!(0, zM.d)(this, BK)[BK]((() => ((0, zM.d)(this, cM)[cM] = new ie.LKe, (0, zM.d)(this, xM)[xM] = ie.wKe(), !0)))) return !1;
        (0, zM.d)(this, JK)[JK]();
        const ee = (0, zM.d)(this, jM)[jM];
        return (0, zM.d)(this, jM)[jM] = null, ee && (0, zM.d)(this, RK)[RK](ke.Fc.Control, ee), (0, zM.d)(this, FK)[FK]()
      } catch (He) {
        return (0, zM.d)(this, kK)[kK](), await (0, zM.d)(this, XK)[XK](He), !1
      }
    }

    function VK() {
      return this.deps.core.CKe(0), 1 === this.deps.core.CKe(1) || ((0, zM.d)(this, kK)[kK](), this.deps.failed(AM), !1)
    }

    function aK() {
      (0, zM.d)(this, SM)[SM] && (0, zM.d)(this, RK)[RK](ke.Fc.Prefs, ZM((0, zM.d)(this, SM)[SM].on, (0, zM.d)(this, SM)[SM].seconds)), (0, zM.d)(this, nM)[nM] && (0, zM.d)(this, rM)[rM]((0, zM.d)(this, nM)[nM])
    }

    function cK() {
      return PM({
        memoryBytes: this.deps.memoryBytes,
        clipSeconds: () => {
          var ee, ie;
          return null !== (ee = null === (ie = (0, zM.d)(this, SM)[SM]) || void 0 === ie ? void 0 : ie.seconds) && void 0 !== ee ? ee : 0
        },
        trapped: () => (0, zM.d)(this, LM)[LM],
        busy: () => (0, zM.d)(this, iK)[iK](),
        loadInFlight: () => (0, zM.d)(this, uM)[uM],
        xf: () => (0, zM.d)(this, CM)[CM],
        unload: () => {
          (0, zM.d)(this, kK)[kK]()
        },
        load: () => (0, zM.d)(this, yK)[yK]()
      })
    }

    function xK(ee, ie) {
      (0, zM.d)(this, sM)[sM] ? (0, zM.d)(this, sM)[sM].push([ee, ie]): (0, zM.d)(this, zK)[zK](((He, ye) => {
        const be = He.DKe(ie.length);
        0 !== be && (new Uint8Array(ye.buffer, be, ie.length).set(ie), He.command(ee, ie.length))
      }))
    }

    function LK() {
      (0, zM.d)(this, mM)[mM]++, (0, zM.d)(this, KK)[KK]("KR"), (0, zM.d)(this, GM)[GM].stop(), this.deps.core.CKe(0), (0, zM.d)(this, qK)[qK](), (0, zM.d)(this, LM)[LM] || ((0, zM.d)(this, aM)[aM] = null, this.deps.unload())
    }

    function CK() {
      (0, zM.d)(this, zK)[zK]((ee => {
        ee.free()
      })), (0, zM.d)(this, cM)[cM] = null, (0, zM.d)(this, xM)[xM] = null, (0, zM.d)(this, NM)[NM] = null
    }

    function vK() {
      var ee;
      const ie = this.deps.coreBuffer();
      return (null === (ee = (0, zM.d)(this, IM)[IM]) || void 0 === ee ? void 0 : ee.buffer) !== ie && ((0, zM.d)(this, IM)[IM] = new Uint8Array(ie)), (0, zM.d)(this, IM)[IM]
    }

    function uK() {
      var ee;
      const ie = this.deps.coreBuffer();
      return (null === (ee = (0, zM.d)(this, hM)[hM]) || void 0 === ee ? void 0 : ee.buffer) !== ie && ((0, zM.d)(this, hM)[hM] = new Uint32Array(ie, 0, ie.byteLength >>> 2)), (0, zM.d)(this, hM)[hM]
    }

    function mK(ee) {
      var ie;
      const He = ee.buffer;
      return (null === (ie = (0, zM.d)(this, NM)[NM]) || void 0 === ie ? void 0 : ie.buffer) !== He && ((0, zM.d)(this, NM)[NM] = new Uint8Array(He)), (0, zM.d)(this, NM)[NM]
    }
    async function lK(ee) {
      await this.deps.staleOr(ee, (() => {
        this.deps.failed(AM)
      }))
    }

    function SK(ee) {
      const ie = (0, zM.d)(this, cM)[cM],
        He = (0, zM.d)(this, xM)[xM];
      if (ie && He) return (0, zM.d)(this, BK)[BK]((() => ee(ie, He)))
    }

    function nK(ee) {
      if (!(0, zM.d)(this, LM)[LM]) try {
        return ee()
      } catch (ie) {
        if (!(0, zM.d)(this, EK)[EK](ie)) throw ie;
        return
      }
    }

    function jK(ee) {
      return ee instanceof WebAssembly.RuntimeError && ((0, zM.d)(this, LM)[LM] = !0, (0, zM.d)(this, cM)[cM] = null, (0, zM.d)(this, xM)[xM] = null, (0, zM.d)(this, NM)[NM] = null, (0, zM.d)(this, aM)[aM] = null, (0, zM.d)(this, jM)[jM] = null, (0, zM.d)(this, KK)[KK]("trapped"), this.deps.core.CKe(0), (0, zM.d)(this, GM)[GM].stop(), this.deps.crash(this.deps.markTrapped(ee)), this.deps.failed(YM), !0)
    }
    var sK = He(39452);
    const IK = new Map([
      ["skyblock", () => He.e(59).then((() => He(39446)))]
    ]);

    function hK(ee) {
      const ie = IK.get(ee);
      return ie ? ie().then((() => {
        const ie = (0, sK.c)(ee);
        if (!ie) throw new Error(`${ee}'s replay hook module registered no hook`);
        return ie
      })) : null
    }
    class NK {
      constructor(ee) {
        this.deps = ee, this.game = null, this.hook = null, this.generation = 0, this.all = !1, this.pending = new Map, this.ids = new Int32Array(64)
      }
      get wantsWatch() {
        return null !== this.hook
      }
      opened(ee) {
        if (this.pending.clear(), ee === this.game && null !== this.hook) return void(this.all = !0);
        const ie = ++this.generation;
        this.game = ee, this.hook = null, this.all = !1;
        const He = this.deps.loadHook(ee);
        null === He || void 0 === He || He.then((ee => {
          ie === this.generation && (this.hook = ee, this.all = !0)
        }), (ee => {
          ie === this.generation && this.deps.onError(ee)
        }))
      }
      ended() {
        this.generation++, this.game = null, this.hook = null, this.all = !1, this.pending.clear()
      }
      entityAdded(ee) {
        null === this.hook || this.all || this.pending.set(ee, !0)
      }
      entityInfoChanged(ee) {
        null === this.hook || this.all || this.pending.has(ee) || this.pending.set(ee, !1)
      }
      flush(ee) {
        const {
          hook: ie
        } = this;
        if (null === ie || !ee || !this.all && 0 === this.pending.size) return;
        const He = this.deps.cmd();
        if (null === He) return;
        const {
          api: ye
        } = this.deps;
        if (this.all) {
          this.all = !1, this.pending.clear();
          const {
            ids: ee,
            count: ie
          } = ey(ye, this.ids);
          this.ids = ee;
          for (let He = 0; He < ie; He++) this.pending.set(ee[He], !0)
        }
        const be = this.ids = iy(this.ids, this.pending.size);
        let Me = 0;
        for (const Je of this.pending.keys()) be[Me++] = Je;
        const Ke = [],
          Ue = Hy(ye, be, Me, ((ee, ie) => {
            null !== ie && Ke.push({
              serverId: ee,
              info: ie,
              spawned: !0 === this.pending.get(ee)
            })
          }));
        if (Ue) {
          this.pending.clear();
          for (const {
              serverId: ee,
              info: ye,
              spawned: be
            }
            of Ke) try {
            ie(ye, {
              setFacingTolerance: ie => {
                null === ie && be || OH(He, ee, ie) || this.pending.set(ee, be)
              }
            })
          } catch (Fe) {
            this.deps.onError(Fe)
          }
        }
      }
    }
    var GK = (0, BM.b)("bindings"),
      rK = (0, BM.b)("module"),
      QK = (0, BM.b)("memory"),
      eU = (0, BM.b)("trapped"),
      iU = (0, BM.b)("generation"),
      HU = (0, BM.b)("loading"),
      yU = (0, BM.b)("lend"),
      bU = (0, BM.b)("givenUp"),
      MU = (0, BM.b)("afterSave"),
      KU = (0, BM.b)("opens"),
      UU = (0, BM.b)("saveAskedAt"),
      FU = (0, BM.b)("unload"),
      JU = (0, BM.b)("dropModule"),
      oU = (0, BM.b)("loadFailed"),
      RU = (0, BM.b)("saveReadsBody"),
      kU = (0, BM.b)("command"),
      qU = (0, BM.b)("call"),
      fU = (0, BM.b)("guard"),
      TU = (0, BM.b)("trapOn");
    class pU {
      constructor(ee) {
        this.deps = ee, Object.defineProperty(this, TU, {
          value: WU
        }), Object.defineProperty(this, fU, {
          value: dU
        }), Object.defineProperty(this, qU, {
          value: OU
        }), Object.defineProperty(this, kU, {
          value: gU
        }), Object.defineProperty(this, RU, {
          get: EU,
          set: void 0
        }), Object.defineProperty(this, oU, {
          value: BU
        }), Object.defineProperty(this, JU, {
          value: zU
        }), Object.defineProperty(this, FU, {
          value: XU
        }), Object.defineProperty(this, GK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, rK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, QK, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, eU, {
          writable: !0,
          value: !1
        }), Object.defineProperty(this, iU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, HU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, yU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, bU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, MU, {
          writable: !0,
          value: null
        }), Object.defineProperty(this, KU, {
          writable: !0,
          value: 0
        }), Object.defineProperty(this, UU, {
          writable: !0,
          value: null
        })
      }
      get active() {
        return null !== (0, zM.d)(this, rK)[rK] && null === (0, zM.d)(this, MU)[MU]
      }
      async open(ee, ie) {
        if ((0, zM.d)(this, eU)[eU]) return ke.Rc.ModuleTrap;
        let He = (0, zM.d)(this, GK)[GK];
        if (!He) {
          const ee = (0, zM.d)(this, iU)[iU];
          (0, zM.d)(this, HU)[HU]++;
          try {
            He = await this.deps.load()
          } catch (be) {
            return (0, zM.d)(this, HU)[HU]--, ee !== (0, zM.d)(this, iU)[iU] ? "stopped" : (0, zM.d)(this, oU)[oU](be, ie)
          }
          if ((0, zM.d)(this, HU)[HU]--, ee !== (0, zM.d)(this, iU)[iU]) return (0, zM.d)(this, GK)[GK] || 0 !== (0, zM.d)(this, HU)[HU] || (0, zM.d)(this, eU)[eU] || this.deps.unload(), "stopped";
          if ((0, zM.d)(this, eU)[eU]) return ke.Rc.ModuleTrap;
          const ye = He.cKe(),
            Me = this.deps.core.xKe();
          if (ye !== Me) return (0, zM.d)(this, oU)[oU](new Error(`replay port version ${ye}, the core's ${Me}`), ie);
          (0, zM.d)(this, GK)[GK] = He
        }
        if (!(0, zM.d)(this, rK)[rK]) {
          const ee = He;
          if (!(0, zM.d)(this, fU)[fU]((() => {
              (0, zM.d)(this, rK)[rK] = new ee.vKe, (0, zM.d)(this, QK)[QK] = ee.uKe()
            }))) return ke.Rc.ModuleTrap
        }
        let ye = !1;
        return (0, zM.d)(this, qU)[qU](((ie, He) => {
          null !== (0, zM.d)(this, MU)[MU] && ie.step(0, 0);
          const be = ie.stage(ee.length);
          0 !== be && (new Uint8Array(He.buffer, be, ee.length).set(ee), ie.open(), (0, zM.d)(this, bU)[bU] = (0, zM.d)(this, yU)[yU], (0, zM.d)(this, MU)[MU] = null, (0, zM.d)(this, KU)[KU]++, ye = !0)
        })) ? ye ? "opening" : ke.Rc.TooLarge : ke.Rc.ModuleTrap
      }
      beforeFrame(ee) {
        const ie = (0, zM.d)(this, rK)[rK],
          He = (0, zM.d)(this, QK)[QK];
        if (!ie || !He || null !== (0, zM.d)(this, MU)[MU]) return;
        const {
          core: ye
        } = this.deps, be = ye.mKe(ee);
        if (be < 0) return;
        const Me = Math.floor(be);
        let Ke, Ue;
        try {
          Ke = ie.step(Me, be - Me), Ue = ie.AKe()
        } catch (Je) {
          return void(0, zM.d)(this, TU)[TU](Je)
        }
        const Fe = ye.aKe(1, Ke);
        if (0 === Fe) {
          const ee = (0, zM.d)(this, qU)[qU]((ee => {
            ee.close()
          }));
          if (!ee) return;
          return (0, zM.d)(this, RU)[RU] ? (0, zM.d)(this, MU)[MU] = "drop" : (0, zM.d)(this, JU)[JU](), void ye.lKe(ke.Rc.Port)
        }
        new Uint8Array(this.deps.coreBuffer(), Fe, Ke).set(new Uint8Array(He.buffer, Ue, Ke))
      }
      play() {
        (0, zM.d)(this, kU)[kU]((ee => {
          ee.play()
        }))
      }
      pause() {
        (0, zM.d)(this, kU)[kU]((ee => {
          ee.pause()
        }))
      }
      seek(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (0, zM.d)(this, kU)[kU]((He => {
          He.seek(ee, ie)
        }))
      }
      setMark(ee, ie) {
        return (0, zM.d)(this, kU)[kU]((He => {
          He.nKe(ee, ie)
        }))
      }
      addKeyframe(ee, ie) {
        return (0, zM.d)(this, kU)[kU]((He => {
          He.jKe(ee[0], ee[1], ee[2], ie[0], ie[1], ie[2])
        }))
      }
      setKeyframe(ee, ie) {
        return (0, zM.d)(this, kU)[kU]((He => {
          He.sKe(ee, ie)
        }))
      }
      moveKeyframe(ee, ie) {
        return (0, zM.d)(this, kU)[kU]((He => {
          He.IKe(ee, ie)
        }))
      }
      deleteKeyframes(ee, ie) {
        return (0, zM.d)(this, kU)[kU]((He => {
          He.hKe(ee, ie)
        }))
      }
      crop(ee, ie) {
        return null === (0, zM.d)(this, yU)[yU] && (0, zM.d)(this, kU)[kU]((He => {
          He.crop(ee, ie)
        }))
      }
      beginSave() {
        const ee = (0, zM.d)(this, UU)[UU];
        if ((0, zM.d)(this, UU)[UU] = null, null !== ee && ee !== (0, zM.d)(this, KU)[KU]) return null;
        let ie = 0,
          He = null;
        if ((0, zM.d)(this, qU)[qU](((ee, ye) => {
            ie = ee.save(), 0 !== ie && (He = new Uint8Array(ye.buffer, ee.NKe(), ee.GKe()).slice())
          })), 0 === ie || !He) return null;
        const ye = {
          headLen: ie,
          editState: He,
          givenUp: () => (0, zM.d)(this, bU)[bU] === ye,
          head: (ee, ie) => {
            if ((0, zM.d)(this, yU)[yU] !== ye || !(0, zM.d)(this, RU)[RU]) return null;
            let He = null;
            return (0, zM.d)(this, qU)[qU](((ye, be) => {
              const Me = ye.rKe();
              0 !== Me && ee >= 0 && ie >= 0 && ee + ie <= Me && (He = new Uint8Array(be.buffer, ye.QKe() + ee, ie))
            })), He
          },
          end: () => {
            if ((0, zM.d)(this, yU)[yU] !== ye) return;
            (0, zM.d)(this, yU)[yU] = null, (0, zM.d)(this, bU)[bU] = null, (0, zM.d)(this, qU)[qU]((ee => {
              ee.eUe()
            }));
            const ee = (0, zM.d)(this, MU)[MU];
            (0, zM.d)(this, MU)[MU] = null, "unload" === ee ? (0, zM.d)(this, FU)[FU]() : "drop" === ee && (0, zM.d)(this, JU)[JU]()
          }
        };
        return (0, zM.d)(this, yU)[yU] = ye, ye
      }
      askSave() {
        (0, zM.d)(this, UU)[UU] = (0, zM.d)(this, KU)[KU]
      }
      setSpeed(ee) {
        (0, zM.d)(this, kU)[kU]((ie => {
          ie.iUe(ee)
        }))
      }
      setCameraMode(ee) {
        (0, zM.d)(this, kU)[kU]((ie => {
          ie.HUe(ee)
        }))
      }
      close() {
        (0, zM.d)(this, kU)[kU]((ee => {
          ee.close()
        }))
      }
      stop() {
        (0, zM.d)(this, iU)[iU]++, (0, zM.d)(this, RU)[RU] && ((0, zM.d)(this, qU)[qU]((ee => {
          ee.close()
        })), (0, zM.d)(this, rK)[rK]) ? (0, zM.d)(this, MU)[MU] = "unload" : (0, zM.d)(this, FU)[FU]()
      }
    }

    function XU() {
      (0, zM.d)(this, JU)[JU](), (0, zM.d)(this, eU)[eU] || ((0, zM.d)(this, GK)[GK] = null, this.deps.unload())
    }

    function zU() {
      (0, zM.d)(this, qU)[qU]((ee => {
        ee.free()
      })), (0, zM.d)(this, rK)[rK] = null, (0, zM.d)(this, QK)[QK] = null
    }
    async function BU(ee, ie) {
      return await this.deps.staleOr(ee, (() => {}), {
        beforeReload: ie
      }) ? "reloading" : ke.Rc.ModuleLoad
    }

    function EU() {
      return null !== (0, zM.d)(this, yU)[yU] && (0, zM.d)(this, bU)[bU] !== (0, zM.d)(this, yU)[yU]
    }

    function gU(ee) {
      return null === (0, zM.d)(this, MU)[MU] && (0, zM.d)(this, qU)[qU](ee)
    }

    function OU(ee) {
      const ie = (0, zM.d)(this, rK)[rK],
        He = (0, zM.d)(this, QK)[QK];
      return !(!ie || !He) && (0, zM.d)(this, fU)[fU]((() => {
        ee(ie, He)
      }))
    }

    function dU(ee) {
      if ((0, zM.d)(this, eU)[eU]) return !1;
      try {
        return ee(), !0
      } catch (ie) {
        return (0, zM.d)(this, TU)[TU](ie), !1
      }
    }

    function WU(ee) {
      if (!(ee instanceof WebAssembly.RuntimeError)) throw ee;
      (0, zM.d)(this, eU)[eU] = !0, (0, zM.d)(this, rK)[rK] = null, (0, zM.d)(this, QK)[QK] = null, (0, zM.d)(this, GK)[GK] = null, this.deps.crash(this.deps.markTrapped(ee)), this.deps.core.lKe(ke.Rc.ModuleTrap)
    }
    var tU = He(7088),
      ZU = He(42113);
    const wU = "[bloxd-wasm-client]";
    const DU = String(Ib);

    function PU(ee) {
      return null === ee || ee === DU ? void 0 : ee
    }

    function AU(ee) {
      var ie, He, ye, be, Me, Ue, Fe;
      switch (ee.what) {
        case ke.Wc.FlyingText: {
          let ie;
          try {
            ie = JSON.parse(ee.contentJson)
          } catch (Je) {
            return void console.warn(`${wU} a replay's flying text isn't JSON`, Je)
          }
          Ke.h.yR("forceFlyingMiddleMessage", {
            content: ie,
            ge: ee.ge,
            angle: ee.angle,
            Oe: ee.Oe
          });
          break
        }
        case ke.Wc.PlayerKilled:
          (0, ZU.f)({
            kind: "killed",
            body: {
              deadEId: null !== (ie = PU(ee.dead)) && void 0 !== ie ? ie : "",
              killerEId: PU(ee.killer),
              withItem: null !== (He = ee.withItem) && void 0 !== He ? He : "",
              killstreak: ee.killstreak
            }
          });
          break;
        case ke.Wc.Killfeed:
          (0, ZU.f)({
            kind: "custom",
            body: {
              killer: {
                eId: PU(ee.killerId),
                name: null !== (ye = ee.killerName) && void 0 !== ye ? ye : void 0,
                colour: null !== (be = ee.killerColour) && void 0 !== be ? be : void 0
              },
              victim: {
                eId: PU(ee.victimId),
                name: null !== (Me = ee.victimName) && void 0 !== Me ? Me : void 0,
                colour: null !== (Ue = ee.victimColour) && void 0 !== Ue ? Ue : void 0
              },
              withItem: null !== (Fe = ee.withItem) && void 0 !== Fe ? Fe : ""
            }
          })
      }
    }
    const YU = "[bloxd-wasm-client]";

    function VU(ee) {
      if (void 0 === ee || null === ee || "" === ee) return null;
      const ie = Number(ee);
      return Number.isInteger(ie) && ie > Ib && ie <= 2147483647 ? ie : null
    }

    function aU(ee) {
      return {
        id: VU(ee.eId),
        name: "string" === typeof ee.name ? ee.name : null,
        colour: "string" === typeof ee.colour ? ee.colour : null
      }
    }

    function cU(ee) {
      const ie = (0, bM.j)(Fy.ic.PlayerKilled, (ie => {
          var He, ye;
          const be = (0, yM.h)(ie);
          if (!(0, yM.c)(be)) return;
          const {
            deadEId: Me,
            killerEId: Ke,
            withItem: Ue,
            killstreak: Fe
          } = be;
          ee.recordPlayerKilled(null !== (He = VU(Me)) && void 0 !== He ? He : Ib, null !== (ye = VU(Ke)) && void 0 !== ye ? ye : Ib, "number" === typeof Fe ? Fe : 0, "string" === typeof Ue ? Ue : "")
        })),
        He = (0, bM.j)(Fy.ic.CustomKillfeed, (ie => {
          const He = (0, yM.h)(ie);
          if (!(0, yM.c)(He) || !(0, yM.c)(He.killer) || !(0, yM.c)(He.victim)) return;
          const {
            killer: ye,
            victim: be,
            withItem: Me
          } = He;
          ee.recordKillfeed(aU(ye), aU(be), "string" === typeof Me ? Me : null)
        }));
      return () => {
        ie(), He()
      }
    }

    function xU(ee) {
      var ie;
      return void 0 === ee || null === ee ? null : null !== (ie = JSON.stringify(ee)) && void 0 !== ie ? ie : null
    }

    function LU(ee) {
      let ie = null;
      const He = () => {
        const {
          enableClipping: He,
          clipDurationSeconds: be
        } = ye.e.get("clientEscMenuOptions"), Me = `${He}:${be}`;
        Me !== ie && (ie = Me, ee.recorder.setPrefs(He, be))
      };
      return He(), (0, Ke.j)("appManagerUpdated|clientEscMenuOptions", He)
    }
    const CU = "replayModule",
      vU = "recorderModule";

    function uU(ee, ie, He) {
      return function() {
        return ee.isStopped ? He : ie(...arguments)
      }
    }
    const mU = {
      open: () => Promise.reject(new Error(Cb.d.coreStopped.text)),
      replayKey: () => null,
      encode: () => Promise.resolve(null),
      fileHandle: () => null,
      markSaved: () => {}
    };

    function lU() {
      return He.e(76).then((() => He(64027)))
    }

    function SU(ee) {
      (0, Cb.g)({
        text: ee,
        type: "Error"
      })
    }
    class nU {
      constructor(ee) {
        this.deps = ee, this.runtime = void 0, this.entityHooks = void 0, this.recordedOptions = void 0, this.stops = void 0, this.activeConn = 0, this.stopped = !1, this.bench = null, this.replay = void 0, this.recorder = void 0, this.freecam = void 0, this.drawn = !1;
        const {
          running: ie,
          api: ye,
          core: be
        } = ee, Me = () => ee.memory().buffer, Ke = () => ie.isStopped ? null : ie.rings.cmd, Ue = uU(ie, ((ee, ie) => be.aKe(ee, ie)), 0), Fe = () => be.xKe();
        let Je = null;
        this.replay = new pU({
          core: {
            mKe: uU(ie, (ee => be.mKe(ee)), -1),
            aKe: Ue,
            xKe: Fe,
            lKe: uU(ie, (ee => {
              be.lKe(ee)
            }), void 0)
          },
          coreBuffer: Me,
          load: async () => (Je = await He.e(77).then((() => He(64036))), Je.loadReplayModule()),
          unload: () => {
            var ee;
            null === (ee = Je) || void 0 === ee || ee.unloadReplayModule()
          },
          markTrapped: ee => Je ? Je.markReplayTrapped(ee) : new Error(String(ee)),
          staleOr: (ie, He, ye) => ee.staleOr(CU, ie, He, ye),
          crash: ie => {
            ee.reportFault(CU, ie)
          }
        });
        let oe = null;
        this.recorder = new gK({
          core: {
            CKe: uU(ie, (ee => be.CKe(ee)), 0),
            PKe: uU(ie, (ee => be.PKe(ee)), 0),
            aKe: Ue,
            xKe: Fe
          },
          coreCommand: (ee, ie) => {
            var He, ye;
            return null !== (He = null === (ye = Ke()) || void 0 === ye ? void 0 : ye.writeCmd(ee, 0, ie)) && void 0 !== He && He
          },
          coreBuffer: Me,
          load: async () => (oe = await lU(), oe.loadRecorderModule()),
          prefetch: () => {
            lU().then((ee => ee.prefetchRecorderModule())).catch((ee => {
              console.warn(`${YU} the recorder module didn't prefetch, so a save loads it:`, ee)
            }))
          },
          unload: () => {
            var ee;
            null === (ee = oe) || void 0 === ee || ee.unloadRecorderModule()
          },
          markTrapped: ee => oe ? oe.markRecorderTrapped(ee) : new Error(String(ee)),
          memoryBytes: () => {
            var ee, ie;
            return null !== (ee = null === (ie = oe) || void 0 === ie ? void 0 : ie.recorderMemoryBytes()) && void 0 !== ee ? ee : 0
          },
          staleOr: (ie, He) => ee.staleOr(vU, ie, He),
          crash: ie => {
            ee.reportFault(vU, ie)
          },
          allowed: () => !0 === ee.options.get("canRecordReplays"),
          failed: ee => {
            this.runtime.recorder.stopped(), SU(ee)
          },
          events: (ee, ie) => {
            this.runtime.recorderEvents(ee, ie)
          },
          beginSave: () => this.replay.beginSave(),
          givenUp: SU,
          unixNow: () => Date.now()
        });
        const Re = new sb({
          core: {
            EKe: uU(ie, (ee => be.EKe(ee)), 0),
            OKe: uU(ie, (() => {
              be.OKe()
            }), void 0),
            eX: uU(ie, (() => be.eX()), 0),
            gKe: uU(ie, (() => be.gKe()), 0)
          },
          buffer: Me,
          apiView: () => ye.apiView,
          cmd: Ke,
          replay: this.replay,
          recorder: this.recorder
        });
        this.entityHooks = new NK({
          api: ye,
          cmd: Ke,
          loadHook: hK,
          onError: ee => {
            console.warn(`${YU} the recorded game's replay hooks:`, ee)
          }
        });
        const ke = new HM({
          client: Re,
          buffer: Me,
          setHoldDraws: ee => {
            ie.setHoldDraws(ee)
          },
          notify: Cb.g,
          onRecorderState: () => {
            var ee;
            null === (ee = (0, ub.d)()) || void 0 === ee || ee.recorderChanged()
          },
          onViewerChange: () => {
            var ee;
            null === (ee = (0, ub.d)()) || void 0 === ee || ee.viewerChanged()
          },
          onReplayOption: ie => {
            ! function(ee, ie) {
              var He, ye;
              const be = Fy.pb[ie.key];
              if (void 0 === be) return;
              let Me = null !== (He = ie.value) && void 0 !== He ? He : JSON.parse(JSON.stringify(null !== (ye = tU.b[be]) && void 0 !== ye ? ye : null));
              if (null !== ie.value && ie.key < Fy.Mb.Environment && "string" === typeof Me) try {
                Me = JSON.parse(Me)
              } catch (Ke) {
                return void console.warn(`${wU} a replay's ${be} isn't JSON`, Ke)
              }
              ee.applyNewClientOptions({
                [be]: Me
              })
            }(ee.options, ie)
          },
          onReplayUiEvent: AU,
          onReplayOpened: ie => {
            this.entityHooks.opened((0, we.Xb)(ie)), ee.replayShaderPack(ie)
          },
          meshPending: () => {
            var ee, He;
            return null !== (ee = null === (He = ie.lastHeader) || void 0 === He ? void 0 : He.renderPending) && void 0 !== ee ? ee : 0
          },
          viewerOpen: vb.e,
          download: ee => {
            (0, xb.f)(ee)
          }
        });
        this.runtime = ke, ye.replay = ke.sink, (0, ub.p)(ke);
        const qe = new UM({
          live: () => {
            var ee;
            return !ie.isStopped && !0 === (null === (ee = ke.currentViewer) || void 0 === ee ? void 0 : ee.inPlayback)
          },
          cmd: Ke,
          dragScale: pM
        });
        this.freecam = qe, (0, ub.l)(qe), this.recordedOptions = function(ee, ie) {
          const He = Fy.pb,
            ye = He.map(((He, ye) => ie.subscribe(He, (ie => {
              ee.setOption(ye, xU(ie))
            }))));
          return {
            sendAll() {
              He.forEach(((He, ye) => {
                ee.setOption(ye, xU(ie.get(He)))
              }))
            },
            stop() {
              for (const ee of ye) ee()
            }
          }
        }(ke.recorder, ee.options), this.stops = [(0, zy.k)((ee => {
          qe.flush();
          try {
            this.replay.beforeFrame(ee)
          } catch (ie) {
            this.deps.reportFault("replayFrame", ie)
          }
        })), (0, zy.A)(((ee, ie) => {
          try {
            this.recorder.afterFrame(), ie && !this.drawn && (this.drawn = !0, this.recorder.viewDrawn())
          } catch (He) {
            this.deps.reportFault("recorderFrame", He)
          }
          try {
            ke.afterFrame(ee)
          } catch (He) {
            this.deps.reportFault("replayRuntime", He)
          }
        })), LU(ke), () => {
          this.recordedOptions.stop()
        }, cU(ke.recorder), (0, MM.j)((ee => {
          let {
            action: ie,
            down: He
          } = ee;
          var ye;
          He && (null === (ye = (0, ub.d)()) || void 0 === ye || ye.keyDown(ie))
        }))];
        const fe = () => {
          const ee = ke.currentViewer;
          return !0 === (null === ee || void 0 === ee ? void 0 : ee.isOpen) ? ee : null
        };
        (0, Lb.e)({
          open: (ee, ie) => this.open(ee, ie),
          replayKey: () => {
            var ee, ie;
            return null !== (ee = null === (ie = fe()) || void 0 === ie ? void 0 : ie.id) && void 0 !== ee ? ee : null
          },
          saveRefusal: () => {
            var ee, ie;
            return null !== (ee = null === (ie = fe()) || void 0 === ie ? void 0 : ie.saveRefusal) && void 0 !== ee ? ee : null
          },
          encode: () => {
            var ee, ie;
            return null !== (ee = null === (ie = fe()) || void 0 === ie ? void 0 : ie.save()) && void 0 !== ee ? ee : Promise.resolve(null)
          },
          fileHandle: () => {
            var ee, ie;
            return null !== (ee = null === (ie = ke.currentViewer) || void 0 === ie ? void 0 : ie.fileHandle) && void 0 !== ee ? ee : null
          },
          markSaved: (ee, ie) => {
            var He;
            null === (He = ke.currentViewer) || void 0 === He || He.markSaved(ee, ie)
          }
        })
      }
      netEvent(ee) {
        if ("connection" === ee.type)
          if (ee.phase === ke.x.Activated) {
            this.activeConn = ee.conn;
            const ie = this.deps.sessionInfo(ee.conn);
            null !== ie && (this.runtime.activated({
              lobbyType: (0, De.z)(ie.lobbyName),
              gameNameWithVariation: ie.gameNameWithVariation,
              lobbyName: ie.lobbyName
            }), this.recordedOptions.sendAll())
          } else ee.phase !== ke.x.Left && ee.phase !== ke.x.Closed || ee.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
      }
      stop() {
        if (!this.stopped) {
          this.stopped = !0;
          for (const ee of this.stops) ee();
          this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, ub.i)() === this.runtime && (0, ub.p)(null), (0, ub.g)() === this.freecam && (0, ub.l)(null), (0, Lb.e)(mU), null !== this.bench && window.wasmReplayBench === this.bench && (window.wasmReplayBench = void 0)
        }
      }
      async open(ee, ie) {
        const {
          running: He
        } = this.deps;
        if (He.isStopped) throw new Error(Cb.d.coreStopped.text);
        if (ee.byteLength > 67108864) throw new Error(Cb.d.cantOpen.text);
        let ye;
        try {
          ye = await async function(ee) {
            const ie = await ee.loadViewer();
            return ie.inPlayback || (0, zy.O)().leaveGame(null), ie
          }(this.runtime)
        } catch (be) {
          throw console.warn(`${YU} the replay viewer didn't load`, be), new Error(Cb.d.viewerLoadFailed.text)
        }
        if (He.isStopped) throw new Error(Cb.d.coreStopped.text);
        await ye.open(ee, ie)
      }
    }
    var jU = He(2018);

    function sU(ee, ie) {
      const {
        aux: He,
        payload: ye
      } = function(ee) {
        return {
          aux: ee.reset ? ke.Yb.ResetFirst : 0,
          payload: hU(ee.changes)
        }
      }(ie);
      ee.queueOptions(He, ye) && (ie.reset && jU.c.reset(), jU.c.apply(ie.changes))
    }
    const IU = new TextEncoder;

    function hU(ee) {
      const ie = new NU;
      return rU(ie, ee), ie.bytes()
    }
    class NU {
      constructor() {
        this.buf = new Uint8Array(256), this.view = new DataView(this.buf.buffer), this.len = 0
      }
      room(ee) {
        if (this.len + ee <= this.buf.length) return;
        const ie = new Uint8Array(Math.max(2 * this.buf.length, this.len + ee));
        ie.set(this.buf.subarray(0, this.len)), this.buf = ie, this.view = new DataView(ie.buffer)
      }
      u8(ee) {
        this.room(1), this.buf[this.len++] = ee
      }
      tagged(ee, ie, He) {
        this.room(1 + ie), this.buf[this.len++] = ee, 1 === ie ? this.view.setUint8(this.len, He) : 2 === ie ? this.view.setUint16(this.len, He) : this.view.setUint32(this.len, He), this.len += ie
      }
      signed(ee, ie, He) {
        this.room(1 + ie), this.buf[this.len++] = ee, 1 === ie ? this.view.setInt8(this.len, He) : 2 === ie ? this.view.setInt16(this.len, He) : this.view.setInt32(this.len, He), this.len += ie
      }
      f64(ee) {
        this.room(9), this.buf[this.len++] = 203, this.view.setFloat64(this.len, ee), this.len += 8
      }
      raw(ee) {
        this.room(ee.length), this.buf.set(ee, this.len), this.len += ee.length
      }
      bytes() {
        return this.buf.slice(0, this.len)
      }
    }

    function GU(ee, ie, He, ye, be, Me, Ke) {
      ie < ye ? ee.u8(He | ie) : null !== be && ie < 256 ? ee.tagged(be, 1, ie) : ie < 65536 ? ee.tagged(Me, 2, ie) : ee.tagged(Ke, 4, ie)
    }

    function rU(ee, ie) {
      switch (typeof ie) {
        case "undefined":
          return void ee.raw(QU);
        case "boolean":
          return void ee.u8(ie ? 195 : 194);
        case "number":
          return void
          function(ee, ie) {
            ie >>> 0 === ie ? ie < 128 ? ee.u8(ie) : ie < 256 ? ee.tagged(204, 1, ie) : ie < 65536 ? ee.tagged(205, 2, ie) : ee.tagged(206, 4, ie) : (ie | 0) === ie ? ie >= -32 ? ee.u8(255 & ie) : ie >= -128 ? ee.signed(208, 1, ie) : ie >= -32768 ? ee.signed(209, 2, ie) : ee.signed(210, 4, ie) : ee.f64(ie)
          }(ee, ie);
        case "string": {
          const He = IU.encode(ie);
          return GU(ee, He.length, 160, 32, 217, 218, 219), void ee.raw(He)
        }
        case "object":
          break;
        default:
          return void ee.u8(192)
      }
      if (null === ie) ee.u8(192);
      else if (Array.isArray(ie)) {
        GU(ee, ie.length, 144, 16, null, 220, 221);
        for (const He of ie) rU(ee, He)
      } else if (ie instanceof Uint8Array) GU(ee, ie.length, 0, 0, 196, 197, 198), ee.raw(ie);
      else {
        const He = Object.keys(ie);
        GU(ee, He.length, 128, 0, null, 222, 223);
        for (const ye of He) rU(ee, ye), rU(ee, ie[ye])
      }
    }
    const QU = new Uint8Array([212, 0, 0]);
    var eF = He(37043),
      iF = He(37081),
      HF = He(42039),
      yF = He(42086),
      bF = He(3101);
    const MF = [1e3, 3e3, 9e3];
    class KF {
      constructor(ee) {
        this.host = ee, this.sets = new Map, this.table = [], this.generation = 0, this.xf = !1
      }
      onEvent(ee) {
        const ie = function(ee) {
          if (ee.byteLength !== ke.bd) return null;
          const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
          return {
            want: ie.getUint16(0, !0),
            release: ie.getUint16(2, !0)
          }
        }(ee);
        ie && !this.xf && (ie.release !== ke.fd && this.release(ie.release), ie.want !== ke.fd && this.want(ie.want))
      }
      reset(ee) {
        if (!this.xf) {
          for (const [ee, ie] of this.sets) "ready" === ie.state && this.releaseAll(ie.distinct), this.sets.delete(ee);
          this.table = ee, this.generation++
        }
      }
      dispose() {
        if (this.xf) return;
        this.xf = !0, this.generation++, this.table = [];
        const ee = [...this.sets.values()];
        this.sets.clear();
        let ie = null;
        for (const ye of ee)
          for (const ee of "ready" === ye.state ? ye.distinct : []) try {
            this.host.lbe(ee)
          } catch (He) {
            ie ??= {
              error: He
            }
          }
        if (ie) throw ie.error
      }
      isReady(ee) {
        var ie;
        return "ready" === (null === (ie = this.sets.get(ee)) || void 0 === ie ? void 0 : ie.state)
      }
      want(ee) {
        const ie = this.sets.get(ee);
        if ("loading" === (null === ie || void 0 === ie ? void 0 : ie.state)) return ie.wanted = !0, void this.capAnswer(ee, ie);
        if ("ready" === (null === ie || void 0 === ie ? void 0 : ie.state)) return void this.host.sendReady(FF(ee, ie.images, ie.size));
        const He = this.table[ee];
        if (!He || 1 !== He.urls.length && He.urls.length !== Fy.ec.CubeFaces) return this.host.sendReady(JF(ee)), void this.host.onLoadFailed(ee, "", new Error(`no image set ${ee}`));
        const ye = {
          state: "loading",
          wanted: !0
        };
        this.sets.set(ee, ye), this.load(ee, He, ye, this.generation, 0), this.capAnswer(ee, ye)
      }
      capAnswer(ee, ie) {
        this.host.wait(4e3, (() => {
          this.sets.get(ee) === ie && ie.wanted && this.host.sendReady(JF(ee))
        }))
      }
      load(ee, ie, He, ye, be) {
        const Me = [...new Set(ie.urls)];
        Promise.allSettled(Me.map((ee => this.host.loadImage(ee, ie.orientation)))).then((Ke => {
          const Ue = Ke.flatMap((ee => "fulfilled" === ee.status ? [ee.value] : [])),
            Fe = ye === this.generation && this.sets.get(ee) === He,
            Je = Ke.findIndex((ee => "rejected" === ee.status));
          if (!Fe || !He.wanted) return this.xf ? void this.releaseAfterDispose(Ue.map(UF)) : (this.releaseAll(Ue.map(UF)), void(Fe && this.sets.delete(ee)));
          Je < 0 ? this.loaded(ee, ie, Me, Ue) : (this.releaseAll(Ue.map(UF)), this.host.sendReady(JF(ee)), be < MF.length ? this.host.wait(MF[be], (() => {
            ye === this.generation && this.sets.get(ee) === He && (He.wanted ? this.load(ee, ie, He, ye, be + 1) : this.sets.delete(ee))
          })) : (this.sets.delete(ee), this.host.onLoadFailed(ee, Me[Je], Ke[Je].reason)))
        }))
      }
      loaded(ee, ie, He, ye) {
        const [be] = ye, Me = [be.width, be.height], Ke = ye.every((ee => ee.width === Me[0] && ee.height === Me[1])), Ue = ie.urls.length === Fy.ec.CubeFaces;
        if (!Ke || Me[0] <= 0 || Me[1] <= 0 || Me[0] > 65535 || Me[1] > 65535 || Ue && Me[0] !== Me[1]) {
          this.releaseAll(ye.map(UF)), this.sets.delete(ee), this.host.sendReady(JF(ee));
          const He = ye.map((ee => `${ee.width}x${ee.height}`));
          return void this.host.onLoadFailed(ee, ie.urls[0], new Error(`set ${ee}'s images can't make its texture: ${He.join(", ")}`))
        }
        const Fe = ie.urls.map((ee => ye[He.indexOf(ee)].id)),
          Je = ye.map(UF);
        this.sets.set(ee, {
          state: "ready",
          images: Fe,
          distinct: Je,
          size: Me
        }), this.host.sendReady(FF(ee, Fe, Me))
      }
      release(ee) {
        const ie = this.sets.get(ee);
        "loading" === (null === ie || void 0 === ie ? void 0 : ie.state) ? ie.wanted = !1: "ready" === (null === ie || void 0 === ie ? void 0 : ie.state) && (this.releaseAll(ie.distinct), this.sets.delete(ee))
      }
      releaseAll(ee) {
        for (const ie of ee) this.host.lbe(ie)
      }
      releaseAfterDispose(ee) {
        for (const ie of ee) try {
          this.host.lbe(ie)
        } catch {}
      }
    }

    function UF(ee) {
      return ee.id
    }

    function FF(ee, ie, He) {
      const ye = new Uint8Array(Fy.ec.SkyImagesReadyBytes),
        be = new DataView(ye.buffer);
      return be.setUint16(0, ee, !0), be.setUint16(2, ie.length, !0), be.setUint16(4, He[0], !0), be.setUint16(6, He[1], !0), ie.slice(0, Fy.ec.CubeFaces).forEach(((ee, ie) => {
        be.setUint32(8 + 4 * ie, ee, !0)
      })), ye
    }

    function JF(ee) {
      const ie = new Uint8Array(Fy.ec.SkyImagesReadyBytes),
        He = new DataView(ie.buffer);
      return He.setUint16(0, ee, !0), He.setUint16(2, Fy.ec.Failed, !0), ie
    }
    let oF = Promise.resolve();
    async function RF(ee, ie) {
      let He;
      try {
        He = await (0, bF.F)(ee)
      } catch (Me) {
        throw new HF.e("fetch", ee, {
          cause: Me
        })
      }
      const ye = oF.then((() => async function(ee, ie) {
        const He = new Blob([ee.slice()]);
        let ye = await createImageBitmap(He, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: ie
        });
        const be = 1024 / Math.max(ye.width, ye.height);
        if (be < 1) {
          const ee = ye;
          try {
            ye = await createImageBitmap(ee, {
              resizeWidth: Math.max(1, Math.round(ee.width * be)),
              resizeHeight: Math.max(1, Math.round(ee.height * be)),
              resizeQuality: "high",
              premultiplyAlpha: "none",
              colorSpaceConversion: "none"
            })
          } finally {
            ee.close()
          }
        }
        return ye
      }(He, ie)));
      let be;
      oF = ye.catch((() => {}));
      try {
        be = await ye
      } catch (Me) {
        throw new HF.e("decode", ee, {
          cause: Me
        })
      }
      return {
        id: (0, HF.r)(be),
        width: be.width,
        height: be.height
      }
    }
    var kF = He(2181),
      qF = He(34679),
      fF = He(40065);
    const TF = kF.f.length,
      pF = new Set([...kF.f, "earth"]);

    function XF(ee) {
      const ie = [],
        He = [],
        ye = (ee, ye) => {
          if ("custom" === ye.type) {
            He.push({
              id: ee,
              kind: Fy.ec.KindCustom,
              set: ie.length,
              earth: null
            });
            const be = [ye.px, ye.py, ye.pz, ye.nx, ye.ny, ye.nz];
            ie.push({
              urls: (0, fF.f)(be),
              orientation: "none"
            })
          } else He.push({
            id: ee,
            kind: Fy.ec.KindEarth,
            set: 0,
            earth: ye
          })
        };
      kF.f.forEach(((ie, He) => {
        var be;
        ye(He, null !== (be = zF(ee[ie])) && void 0 !== be ? be : qF.n[ie])
      }));
      const be = zF(ee.earth);
      "earth" === (null === be || void 0 === be ? void 0 : be.type) && ye(TF, be);
      const Me = new TextEncoder,
        Ke = [],
        Ue = [];
      for (const [qe, fe] of Object.entries(ee)) {
        const ee = pF.has(qe) ? null : zF(fe);
        if (null === ee) continue;
        const ie = Me.encode(qe);
        ie.length > 255 ? Ue.push(`Ignoring texture pack skybox ${qe}, whose name is over 255 bytes`) : Ke.length === Fy.ec.MaxAdded ? Ue.push(`Ignoring texture pack skybox ${qe}, past the ${Fy.ec.MaxAdded} skies a pack can add`) : (Ke.push(ie), ye(Fy.ec.AddedId, ee))
      }
      const Fe = ie.length;
      ie.push({
        urls: qF.g.map((ee => qF.j + ee)),
        orientation: "none"
      }), ie.push({
        urls: [qF.m],
        orientation: "flipY"
      }), ie.push({
        urls: [qF.e],
        orientation: "flipY"
      });
      const Je = Fy.ec.SkyTableHeaderBytes + He.length * Fy.ec.SkyTableEntryBytes,
        oe = new Uint8Array(Je + Ke.reduce(((ee, ie) => ee + 1 + ie.length), 0)),
        Re = new DataView(oe.buffer);
      Re.setUint16(0, Fe, !0), Re.setUint16(2, Fe + 1, !0), Re.setUint16(4, Fe + 2, !0), Re.setUint16(6, He.length, !0), He.forEach(((ee, ie) => {
        const He = Fy.ec.SkyTableHeaderBytes + ie * Fy.ec.SkyTableEntryBytes;
        Re.setUint16(He, ee.id, !0), Re.setUint8(He + 2, ee.kind);
        const ye = He + 4;
        ee.earth ? function(ee, ie, He) {
          const ye = ee;
          let be = 0,
            Me = 0;
          for (const [Ke, Ue] of BF) {
            const ee = ye[Ke];
            "number" === typeof ee && Number.isFinite(ee) && (ie.setFloat32(He + 4 * Ue, ee, !0), be |= 1 << Ue)
          }
          for (const [Ke, Ue, Fe] of EF) {
            const ee = ye[Ke];
            Array.isArray(ee) && 3 === ee.length && ee.every((ee => "number" === typeof ee && Number.isFinite(ee))) && (ee.forEach(((ee, ye) => {
              ie.setFloat32(He + Fe + 4 * ye, ee, !0)
            })), be |= Ue)
          }
          gF.forEach(((ee, Me) => {
            let [Ke, Ue] = ee;
            const Fe = ye[Ke];
            "number" === typeof Fe && Number.isFinite(Fe) && (ie.setFloat32(He + Fy.s.CameraOffsetAt + 4 * Me, Fe, !0), be |= Ue)
          }));
          for (const [Ke, Ue] of OF) {
            const ee = ye[Ke];
            null !== ee && void 0 !== ee && (be |= Ue, ee && (Me |= Ue >>> 14))
          }
          ie.setUint32(He + Fy.s.PresentAt, be, !0), ie.setUint8(He + Fy.s.FlagsAt, Me)
        }(ee.earth, Re, ye) : Re.setUint16(ye, ee.set, !0)
      }));
      let ke = Je;
      for (const qe of Ke) oe[ke] = qe.length, oe.set(qe, ke + 1), ke += 1 + qe.length;
      return {
        payload: oe,
        sets: ie,
        leftOut: Ue
      }
    }

    function zF(ee) {
      if ("object" !== typeof ee || null === ee) return null;
      const ie = ee;
      if ("earth" === ie.type) return ee;
      return "custom" === ie.type && ["px", "py", "pz", "nx", "ny", "nz"].every((ee => {
        const He = ie[ee];
        return "string" === typeof He && He.length > 0
      })) ? ee : null
    }
    const BF = [
        ["inclination", Fy.s.Inclination],
        ["turbidity", Fy.s.Turbidity],
        ["luminance", Fy.s.Luminance],
        ["rayleigh", Fy.s.Rayleigh],
        ["mieCoefficient", Fy.s.MieCoefficient],
        ["mieDirectionalG", Fy.s.MieDirectionalG],
        ["distance", Fy.s.Distance],
        ["azimuth", Fy.s.Azimuth]
      ],
      EF = [
        ["sunPosition", Fy.s.SunPosition, Fy.s.SunPositionAt],
        ["up", Fy.s.Up, Fy.s.UpAt],
        ["vertexTint", Fy.s.VertexTint, Fy.s.VertexTintAt]
      ],
      gF = [
        ["xCameraOffset", Fy.s.CameraOffsetX],
        ["yCameraOffset", Fy.s.CameraOffsetY],
        ["zCameraOffset", Fy.s.CameraOffsetZ]
      ],
      OF = [
        ["useSunPosition", Fy.s.UseSunPosition],
        ["dithering", Fy.s.Dithering],
        ["infiniteDistance", Fy.s.InfiniteDistance]
      ];

    function dF(ee, ie, He) {
      const ye = new tF({
        writeCmd: ee,
        warn: ie,
        followPack: WF(He, ie)
      });
      return ye.start(), ye
    }

    function WF(ee, ie) {
      return He => {
        let ye = () => {};
        const be = ee((ee => {
          ye(), ye = () => {}, null !== ee ? ye = ee.subscribe((ee => {
            He(function(ee, ie, He) {
              if ("object" !== typeof ee || null === ee) return null;
              const ye = ee.skyBoxes;
              if ("object" !== typeof ye || null === ye) return null;
              if ("player" === ie) return ye;
              return Object.fromEntries(Object.entries(ye).filter((ee => {
                let [ie, ye] = ee;
                return !! function(ee) {
                  if ("object" !== typeof ee || null === ee) return !1;
                  return "earth" === ee.type || Object.entries(ee).every((ee => {
                    let [ie, He] = ee;
                    return "type" === ie || ("" === (ye = He) || null !== function(ee) {
                      var ie, He, ye;
                      return "string" !== typeof ee ? null : null !== (ie = null === (He = ZF.exec(ee)) || void 0 === He || null === (ye = He.groups) || void 0 === ye ? void 0 : ye.base64) && void 0 !== ie ? ie : null
                    }(ye));
                    var ye
                  }))
                }(ye) || (He(`Ignoring texture pack skybox ${ie}, whose faces are not all data URLs`, null), !1)
              })))
            }(ee.pack, null === ee.gameSource ? "player" : "customGame", ie))
          })) : He(null)
        }));
        return () => {
          be(), ye()
        }
      }
    }
    class tF {
      constructor(ee) {
        var ie, He, ye;
        this.host = ee, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.xf = !1, this.wait = null !== (ie = ee.wait) && void 0 !== ie ? ie : (ee, ie) => {
          setTimeout(ie, ee)
        }, this.loader = new KF({
          loadImage: null !== (He = ee.loadImage) && void 0 !== He ? He : RF,
          lbe: null !== (ye = ee.lbe) && void 0 !== ye ? ye : HF.t,
          sendReady: ee => {
            this.queue.push({
              kind: Fy.ec.SkyImagesReady,
              payload: ee
            })
          },
          onLoadFailed: (ie, He, ye) => {
            ee.warn(`sky image set ${ie} (${He}) didn't load: the last sky stays`, ye)
          },
          wait: this.wait
        })
      }
      start() {
        this.wait(yF.e, (() => {
          null === this.written && this.write({})
        })), this.stopFollowing = this.host.followPack((ee => {
          this.write(null !== ee && void 0 !== ee ? ee : {})
        }))
      }
      onEvent(ee) {
        this.loader.onEvent(ee)
      }
      drain() {
        if (0 === this.queue.length) return;
        let ee = 0;
        for (; ee < this.queue.length && this.host.writeCmd(this.queue[ee].kind, 0, this.queue[ee].payload);) ee++;
        ee > 0 && this.queue.splice(0, ee)
      }
      dispose() {
        this.xf = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
      }
      write(ee) {
        if (this.xf) return;
        const ie = XF(ee);
        if (!(this.written && (He = this.written, ye = ie, He.payload.length === ye.payload.length && He.payload.every(((ee, ie) => ee === ye.payload[ie])) && He.sets.length === ye.sets.length && He.sets.every(((ee, ie) => {
            const He = ye.sets[ie];
            return ee.orientation === He.orientation && ee.urls.length === He.urls.length && ee.urls.every(((ee, ie) => ee === He.urls[ie]))
          }))))) {
          var He, ye;
          for (const ee of ie.leftOut) this.host.warn(ee, null);
          this.written = ie, this.loader.reset(ie.sets), this.queue = this.queue.filter((ee => ee.kind !== Fy.ec.SkyImagesReady)), this.queue.push({
            kind: Fy.ec.SkyTable,
            payload: ie.payload
          })
        }
      }
    }
    const ZF = /^data:[\w.+/-]*;base64,(?<base64>[A-Za-z0-9+/]*={0,2})$/;
    var wF = He(3002),
      DF = He(3246),
      PF = He(282),
      AF = He(173),
      YF = He(3010),
      VF = He(3021),
      aF = He(253),
      cF = He(260),
      xF = He(3123),
      LF = He(3156),
      CF = He(3163),
      vF = He(107),
      uF = He(3221),
      mF = He(3214),
      lF = He(325),
      SF = He(41948);
    class nF {
      constructor() {
        this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, bM.j)(ay.H, (ee => {
          this.onReply((0, yM.g)(ay.H, ee), performance.now())
        }))
      }
      onFrame(ee, ie) {
        null === this.id ? this.id = ee : ee !== this.id && (this.id = ee, this.sentMs = document.hidden ? null : ie)
      }
      onVisibilityChange() {
        this.sentMs = null
      }
      onReply(ee, ie) {
        ee === this.id && null !== this.sentMs && (this.roundTripMs = Math.round(ie - this.sentMs), this.sentMs = null)
      }
      take() {
        const ee = this.roundTripMs;
        return this.roundTripMs = null, ee
      }
      stop() {
        this.stopReplies()
      }
    }
    class jF {
      constructor() {
        this.sampled = 0, this.timed = 0, this.frameUs = 0, this.primed = !1, this.windowTimed = 0, this.windowUs = 0
      }
      onFrame(ee, ie, He, ye) {
        const be = ee - this.sampled >>> 0,
          Me = ie - this.timed >>> 0,
          Ke = He - this.frameUs >>> 0,
          Ue = this.primed;
        return this.sampled = ee, this.timed = ie, this.frameUs = He, this.primed = !0, !(!Ue || be > 64 || Me > 64) && (ye && Ke <= 1e6 * Me && (this.windowTimed += Me, this.windowUs += Ke), ye && be > 0)
      }
      reset() {}
      snapshotAndReset() {
        const ee = this.windowTimed > 0 ? this.windowUs / this.windowTimed / 1e3 : null;
        return this.windowTimed = 0, this.windowUs = 0, {
          passMs: ee,
          submitToDoneMs: null
        }
      }
    }
    const sF = {
      lagP50Ms: null,
      lagP90Ms: null
    };
    class IF {
      constructor() {
        this.samples = new Float64Array(4096), this.count = 0
      }
      add(ee, ie) {
        const He = Math.min(4096, this.count + ie);
        this.samples.fill(ee, this.count, He), this.count = He
      }
      clear() {
        this.count = 0
      }
      take() {
        const ee = this.count;
        if (this.count = 0, ee < 30) return sF;
        const ie = this.samples.subarray(0, ee).sort(),
          He = He => ie[Math.min(ee - 1, Math.floor(He * ee))];
        return {
          lagP50Ms: He(.5),
          lagP90Ms: He(.9)
        }
      }
    }
    class hF {
      constructor() {
        this.word = 0, this.lagUs = 0, this.primed = !1, this.lags = new IF
      }
      onFrame(ee, ie) {
        const He = ee.headerWord(Fy.F.Pacing),
          ye = ee.headerWord(Fy.F.PacingLagUs),
          be = (He >>> Fy.Y.LagsShift) - (this.word >>> Fy.Y.LagsShift) & Fy.Y.CountMask,
          Me = be > 0 ? (ye - this.lagUs >>> 0) / be / 1e3 : 0,
          Ke = this.primed && be <= 64 && Me <= 6e4;
        this.word = He, this.lagUs = ye, this.primed = !0, Ke && ie && be > 0 && 0 !== (He & Fy.Y.Defaulted) && this.lags.add(Me, be)
      }
      onJoin() {
        this.lags.clear()
      }
      snapshotAndReset(ee) {
        return ee ? this.lags.take() : (this.lags.clear(), sF)
      }
    }
    var NF = He(3117),
      GF = He(34802),
      rF = He(3128),
      QF = He(41981),
      eJ = He(34798),
      iJ = He(3029),
      HJ = He(3134);
    const yJ = {
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

    function bJ(ee) {
      return new MJ(ee)
    }
    class MJ {
      constructor(ee) {
        this.shell = ee, this.tracker = new VF.d, this.gpu = new jF, this.pacing = new hF, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.fpsOverTime = null, this.firstSpanFps = null, this.initialFps = null, this.ping = new nF, this.pacedCpuMs = 0, this.sendsStartMs = -1, this.sendsEndMs = -1, this.frameDebug = null, this.mainStall = new NF.c(this.tracker, ((ee, ie, He, ye) => {
          this.shell.mainStalled(ee, ie, He, ye)
        }), (ee => this.shell.RP(ee))), this.onVisibility = () => {
          this.tracker.onVisibilityChange(), this.ping.onVisibilityChange(), this.mainStall.reset(), !document.hidden && this.fpsSpanStartMs >= 0 && (this.fpsFrames = 0, this.fpsSpanStartMs = performance.now())
        }, this.onBeforeUnload = () => {
          this.mainStall.unloading()
        }, (0, GF.d)(ee.backend, ee.canvas, ee.adapterVendor), this.tracker.start((() => !ee.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, iJ.c)("wasm", (() => {
          const {
            n: ie,
            sampleCount: He
          } = (0, QF.f)();
          return `${ee.backend}, quality steps aim at up to ${HJ.e.target.maxFps} fps, pixel n ${ie}, msaa ${He}`
        }), (ie => {
          ie.setLoadCounts(ee.readLoadCounts), this.frameDebug = ie
        })), this.timers.push(setInterval((() => {
          this.flush(), this.fpsOverTime = null, this.initialFps = null
        }), 1e4), setInterval((() => {
          this.followGame() && this.shell.canSend() && (this.hasFlushedSinceConnect || (this.flush(), this.hasFlushedSinceConnect = !0))
        }), 250))
      }
      animationFrame(ee) {
        var ie;
        this.mainStall.animationFrame(), this.tracker.onAnimationFrame(ee), null === (ie = this.frameDebug) || void 0 === ie || ie.animationFrame()
      }
      sendsWent(ee, ie, He) {
        this.ping.onFrame(ee.headerWord(Fy.F.PingSent), ie), this.sendsStartMs = ie, this.sendsEndMs = He
      }
      frameRan(ee, ie, He, ye) {
        var be;
        this.ping.onFrame(ee.headerWord(Fy.F.PingSent), He);
        const Me = this.tracker;
        this.pacing.onFrame(ee, Me.isSampling());
        const Ke = ee.headerWord(Fy.F.TickUs) / 1e3 + (0, zy.Q)();
        var Ue;
        (Me.qE(Ke), null === (be = this.frameDebug) || void 0 === be || be.wasmFrame(ee, ie, He, ye, Me.isSampling(), Ke), null !== this.game) && (null === (Ue = this.frameDebug) || void 0 === Ue || Ue.inGame());
        const Fe = this.sendsStartMs >= ie ? this.sendsEndMs - this.sendsStartMs : 0,
          Je = Math.max(0, He - ie - Ke - Fe);
        if ("drawn" !== ye) return void("paced" === ye ? (this.pacedCpuMs += Je, this.mainStall.paced()) : "skipped" === ye && this.mainStall.reset());
        this.followGame(), this.mainStall.drawn(ie), Me.onFrameStart(ie);
        this.gpu.onFrame(ee.headerWord(Fy.F.GpuSampled), ee.headerWord(Fy.F.GpuTimed), ee.headerWord(Fy.F.GpuFrameUs), Me.isSampling()) && Me.onGpuSampleStarted(), Me.onFrameCpu(Je + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(ie)
      }
      framePaced() {
        var ee;
        this.mainStall.paced(), null === (ee = this.frameDebug) || void 0 === ee || ee.wasmPeekPaced(this.tracker.isSampling())
      }
      stop() {
        for (const ee of this.timers) clearInterval(ee);
        this.timers.length = 0, document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("beforeunload", this.onBeforeUnload), this.mainStall.stop(), this.ping.stop(), this.tracker.limiterTelemetry.stop()
      }
      followGame() {
        const ee = this.shell.joinedGame();
        if (ee !== this.game) {
          var ie;
          if (this.game = ee, null !== ee) null === (ie = this.frameDebug) || void 0 === ie || ie.joined();
          this.tracker.snapshotAndReset(), this.pacing.onJoin(), this.hasFlushedSinceConnect = !1, this.inGameAtLastFlush = !1, this.fpsSpanStartMs = -1, this.fpsFrames = 0, this.pacedCpuMs = 0, this.firstSpanFps = null, this.fpsOverTime = null, this.initialFps = null, this.mainStall.reset()
        }
        return null !== ee
      }
      countFpsFrame(ee) {
        if (this.fpsSpanStartMs < 0) {
          if (!this.shell.inGame()) return;
          this.fpsSpanStartMs = ee
        }
        this.fpsFrames++;
        const ie = ee - this.fpsSpanStartMs;
        if (!(ie < CF.b)) {
          if (!document.hidden) {
            const ee = 1e3 * this.fpsFrames / ie;
            this.firstSpanFps ??= ee, this.initialFps = this.firstSpanFps, this.fpsOverTime = ee
          }
          this.fpsFrames = 0, this.fpsSpanStartMs = ee
        }
      }
      flush() {
        const ee = this.followGame(),
          {
            cpuFrameMs: ie,
            refreshHz: He,
            cpuBottleneck: be,
            frameIntervalCv: Me,
            ...Ke
          } = this.tracker.snapshotAndReset(),
          Ue = this.shell.inGame(),
          Fe = Ue && this.inGameAtLastFlush,
          Je = Fe ? Ke : (0, YF.f)(Ke),
          oe = this.pacing.snapshotAndReset(Fe);
        if (this.inGameAtLastFlush = Ue, this.pendingLightFailures += this.shell.takeFailedMeshJobs(), !ee || !this.shell.canSend()) return;
        const Re = performance.now(),
          qe = (0, LF.t)((0, LF.r)(Re), this.unsentPage),
          Te = function(ee, ie, He, be, Me, Ke, Ue, Fe) {
            var Je, oe, Re, ke, qe;
            const fe = {},
              {
                canvas: Te
              } = ee,
              pe = (0, xF.j)({
                refreshHz: ie.refreshHz,
                msaa: ee.msaa(),
                autoMsaaOff: (0, eJ.b)()
              });
            for (const Xe of (0, DF.f)()) {
              const ze = Xe.name;
              let Be;
              if ((0, PF.C)(ze)) Be = (0, LF.c)(ze);
              else if ((0, LF.h)(ze)) Be = Fe[ze];
              else if ((0, xF.n)(ze)) Be = pe[ze];
              else switch (ze) {
                case "fps":
                  Be = be;
                  break;
                case "TK":
                  Be = Me;
                  break;
                case "EK":
                  Be = (0, rF.B)((0, QF.f)().n);
                  break;
                case "gK":
                  Be = Math.max(Te.width, Te.height);
                  break;
                case "dK":
                  Be = Math.min(Te.width, Te.height);
                  break;
                case "WK":
                  Be = navigator.hardwareConcurrency || null;
                  break;
                case "tK":
                  Be = (0, RM.getWebGpuSupported)();
                  break;
                case "ZK":
                  Be = null === ee.fallbackReason ? null : yJ[ee.fallbackReason];
                  break;
                case "wK":
                  Be = ie.cpuFrameMs;
                  break;
                case "DK":
                  Be = ie.refreshHz;
                  break;
                case "PK":
                  Be = ie.cpuBottleneck;
                  break;
                case "AK":
                  Be = ie.frameIntervalCv;
                  break;
                case "YK":
                  Be = ie.frameMs;
                  break;
                case "VK":
                  Be = ie.tickMs;
                  break;
                case "vK":
                  Be = ie.mainBusyShare;
                  break;
                case "uK":
                  Be = ie.mainProbeDelayMs;
                  break;
                case "aK":
                  Be = ie.longAnimationFramesPerMin;
                  break;
                case "cK":
                  Be = ie.longAnimationFrameTimeShare;
                  break;
                case "xK":
                  Be = ie.longAnimationFrameScriptShare;
                  break;
                case "LK":
                  Be = ie.framesOver50msPerMin;
                  break;
                case "CK":
                  Be = ie.framesOver100msPerMin;
                  break;
                case "mK":
                  Be = ie.gpuPassMs;
                  break;
                case "lK":
                  Be = ie.gpuSubmitToDoneMs;
                  break;
                case "SK":
                  Be = He.lagP50Ms;
                  break;
                case "nK":
                  Be = He.lagP90Ms;
                  break;
                case "yU":
                  Be = (0, wF.j)(Ke);
                  break;
                case "BK":
                  Be = Ue;
                  break;
                case "jK":
                case "sK":
                case "IK":
                case "hK":
                case "NK":
                case "GK":
                case "rK":
                case "QK":
                case "eU":
                case "iU":
                case "HU":
                case "bU":
                case "MU":
                case "KU":
                case "UU":
                  Be = null;
                  break;
                case "gU":
                  Be = (0, RM.getPlatformType)();
                  break;
                case "OU":
                  Be = (0, RM.getGpuVendor)();
                  break;
                case "dU":
                  Be = SF.e[ee.backend];
                  break;
                case "WU":
                  Be = (0, vF.b)();
                  break;
                case "tU":
                  Be = (0, RM.getOperatingSystem)();
                  break;
                case "ZU":
                  Be = (0, RM.getTrafficSource)();
                  break;
                case "wU":
                  Be = null !== (Je = ye.e.get("gameEntrySource")) && void 0 !== Je ? Je : AF.d;
                  break;
                case "DU":
                  Be = null !== (oe = ie.frameLimiter) && void 0 !== oe ? oe : AF.d;
                  break;
                case "PU":
                  Be = (0, aF.h)();
                  break;
                case "AU":
                  Be = null !== (Re = (0, cF.b)()) && void 0 !== Re ? Re : AF.d;
                  break;
                case "YU":
                  Be = (0, aF.b)(Te.width, Te.height);
                  break;
                case "VU":
                  Be = (0, DF.h)(-(new Date).getTimezoneOffset());
                  break;
                case "vU":
                  Be = null !== (ke = ee.fallbackReason) && void 0 !== ke ? ke : AF.d;
                  break;
                case "lU":
                  Be = "ready";
                  break;
                case "SU":
                  Be = (0, RM.getSoftwareRenderer)();
                  break;
                case "cU":
                  Be = (0, uF.e)();
                  break;
                case "xU":
                  Be = (0, mF.f)().replayState;
                  break;
                case "LU":
                  Be = (0, mF.f)().replaySelection;
                  break;
                case "CU":
                  Be = null !== ee.shaderPackReach() ? "true" : "false";
                  break;
                case "nU":
                  Be = null !== (qe = ee.shaderPackReach()) && void 0 !== qe && qe.sceneDepth ? "true" : "false";
                  break;
                case "jU": {
                  const ie = ee.shaderPackReach();
                  Be = null !== ie && void 0 !== ie && ie.sunShadow ? "all" : null !== ie && void 0 !== ie && ie.airShadow ? "air" : "none";
                  break
                }
                case "sU":
                  Be = lF.D;
                  break;
                case "eF":
                  Be = (0, LF.k)();
                  break;
                case "aU": {
                  const ie = ee.GT();
                  Be = null === ie ? AF.d : String(ie);
                  break
                }
                case "uU":
                case "mU":
                  Be = AF.d;
                  break;
                default:
                  throw new Error(`Unhandled field name: ${ze}`)
              }
              if (void 0 === Be) throw new Error(`Metric ${ze} has no value`);
              fe[ze] = Be
            }
            return fe
          }(this.shell, {
            cpuFrameMs: ie,
            refreshHz: He,
            cpuBottleneck: be,
            frameIntervalCv: Me,
            ...Je
          }, oe, this.fpsOverTime, this.initialFps, this.pendingLightFailures, this.ping.take(), qe);
        if (! function(ee, ie, He) {
            return (0, MH.e)(), ee(fe.o.Send, ie, He)
          }(this.shell.writeCmd, ke.ad, function(ee) {
            const ie = (0, ve.f)((0, FH.g)(ee)),
              He = new Uint8Array(fe.fe.BYTES + ie.length);
            return new DataView(He.buffer).setUint16(0, FH.e.AnalyticsUpdate, !0), He.set(ie, fe.fe.BYTES), He
          }(Te))) return this.unsentPage = qe, void(0 === this.sendsDropped++ && console.warn("[wasm-client] an analytics update found the cmd ring full: dropped"));
        this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, wF.f), (0, LF.p)(Te, "wasm", Re)
      }
    }
    var KJ = He(40499);

    function UJ(ee, ie, He) {
      const ye = new Map;
      return (0, KJ.b)(((ee, He, ye) => ie.po(ee, He, ye)), ((ie, He, be) => {
        const Me = `${ie},${He},${be}`;
        return ye.has(Me) || ye.set(Me, (0, Ii.c)(ee, ie, He, be)), ye.get(Me)
      }), He)
    }
    var FJ = He(40502),
      JJ = He(41977);

    function oJ(ee) {
      const ie = null !== ee && 0 !== (fe.v.playerFlags(ee.api.apiView, 0) & fe.Pd.CursorAim);
      ie !== (0, JJ.p)() && (0, JJ.O)(ie, null !== ee)
    }

    function RJ(ee) {
      return (0, Vy.d)(ay.A, ee)
    }
    var kJ = He(42116);
    const qJ = new Me.f((ee => He(54199)(`./${ee}/${ee}Client`)));
    let fJ = null,
      TJ = null;
    async function pJ(ee) {
      fJ ??= He.e(32).then((() => He(39956))).then((ee => {
        TJ = ee.createDefaultClientPlugins
      }), (ee => {
        throw fJ = null, ee
      })), await Promise.all([qJ.load(ee), fJ])
    }

    function XJ(ee) {
      ee.load(new ni(Fb, new Rb))
    }
    let zJ = !1;
    const BJ = new WeakMap;

    function EJ(ee) {
      try {
        ee()
      } catch (ie) {
        console.error("[bloxd-wasm-client] a session-end step failed", ie)
      }
    }

    function gJ(ee, ie) {
      ! function() {
        var ee, ie;
        Mb.Howler.volume();
        const He = Mb.Howler;
        null === (ee = He._autoResume) || void 0 === ee || ee.call(He), null === (ie = He._autoSuspend) || void 0 === ie || ie.call(He)
      }();
      const He = new Ee(ie.core, ie.memory, ie.audio);
      let Me;
      try {
        Me = new Vb(He, ie.options)
      } catch (ke) {
        return ee.crash(cb.v, ke), null
      }(0, Fe.e)(ab(He, Me));
      const oe = new nU({
        running: ee,
        api: He,
        core: ie.core,
        memory: ie.memory,
        staleOr: ie.staleOr,
        reportFault: ie.reportReplayFault,
        options: ie.options,
        sessionInfo: ie.sessionInfo,
        replayShaderPack: ie.replayShaderPack
      });
      (0, zy.E)();
      const Re = new Qy({
        api: He,
        tables: Me,
        sessionInfo: ie.sessionInfo,
        gameFactory: ee => qJ.loadedFactory(ee),
        defaultPlugins: (ee, ie, He, ye) => {
          if (null === TJ) throw new Error("The default plugins started before they loaded");
          return TJ(ee, ie, He, ye)
        },
        serverOptions: ie.options,
        onNetEvent: ee => {
          oe.netEvent(ee), ie.onNetEvent(ee)
        },
        setLocalOptions: ie => {
          sU(ee, {
            changes: ie,
            reset: !1
          })
        },
        playSound: (ee, He, ye, be, Me, Ke, Ue) => ie.audio.playGame(ee, He, ye, be, Me, Ke, Ue),
        preloadSounds: ee => {
          ie.audio.preload(function(ee) {
            const ie = [];
            for (const He of ee) {
              const ee = ai(He);
              if (null !== ee)
                for (let He = ee[0]; He < ee[0] + ee[1]; He++) ie.push(He)
            }
            return ie
          }(ee))
        },
        onSessionEnd: () => {
          EJ(be.m), EJ(zb), EJ((() => {
            ye.e.set({
              openInGameMenuName: null
            })
          })), EJ((() => {
            ie.audio.endSession()
          }))
        },
        beforeWrite: ie.beforeWrite,
        beforeOp: ie.beforeOp,
        cameraScreen: Xb,
        showCameraFacing: Bb,
        reportCameraFault: ie.reportCameraFault,
        onEventOverflow: ie.onEventOverflow,
        screenBandY: Ue.h,
        replayEntities: oe.entityHooks,
        hasPackModel: ie.hasPackModel
      });
      return Re.attach(ee), BJ.set(Re, oe), yb(Re.items, ie.audio),
        function(ee) {
          ee.setClientFreeCameraGrant("isDev", !1);
          const ie = ie => {
            ee.setClientFreeCameraGrant("hasDeveloperRank", ie.playerHasRank("developer"))
          };
          (0, Ke.j)("userContextUpdated", ie)
        }(Re), zJ || (zJ = !0, (0, Ke.j)("appManagerUpdated|openInGameMenuName", (ee => {
          !ee && (0, Je.s)().includes(Je.c) && (0, Je.v)(Je.c)
        }))), Re
    }

    function OJ(ee) {
      try {
        ee.closeGame()
      } finally {
        var ie;
        null === (ie = BJ.get(ee)) || void 0 === ie || ie.stop(), BJ.delete(ee)
      }
    }
  },
  37043: (ee, ie, He) => {
    He.d(ie, {
      e: () => pe,
      f: () => ue,
      i: () => Pe,
      m: () => Ve
    });
    var ye = He(37068),
      be = He(37049),
      Me = He(37058),
      Ke = He(37062);

    function Ue(ee, ie, He) {
      const ye = "object" === typeof ee && null !== ee ? ee : {},
        be = function(ee, ie, He) {
          if (!Array.isArray(ee) || 0 === ee.length) return [];
          const ye = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const Ue of (0, Ke.k)(ee, Ke.d.DEFAULT_FONT_SIZE, He)) {
            if ("text" !== Ue.kind) {
              ye[ye.length - 1].items.push({
                content: Ue,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === Ue.text.length) continue;
            const ee = ye[ye.length - 1].items.reduce(((ee, ie) => ee + ("text" === ie.content.kind ? (0, Me.e)(ie.content.text) : ie.chars)), 0);
            (0, Me.i)(Ue.text, ee).forEach(((ee, ie) => {
              ie > 0 && ye.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), ee.length > 0 && ye[ye.length - 1].items.push({
                content: {
                  ...Ue,
                  text: ee
                },
                chars: ee.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let be = Ke.d.VERTICAL_PADDING / 2;
          for (const Me of ye) {
            if (0 === Me.items.length) continue;
            const {
              width: ee,
              height: ye,
              sizes: Ue
            } = (0, Ke.g)(Me.items.map((ee => ee.content)), ie, He);
            Me.items.forEach(((ee, ie) => {
              ee.size = Ue[ie]
            })), Me.width = ee, Me.height = ye, Me.y = be, be += ye + Ke.d.LINE_SPACING
          }
          return ye
        }(ye.content, ie, He);
      let Ue = 0,
        Fe = Ke.d.VERTICAL_PADDING,
        Je = 0;
      for (const Me of be) {
        Ue = Math.max(Ue, Me.width + 2 * Ke.d.HORIZONTAL_PADDING), Fe += Me.height + Ke.d.LINE_SPACING;
        for (const ee of Me.items) Je += ee.chars
      }
      const oe = "string" === typeof ye.backgroundColor ? ye.backgroundColor : "#22283b";
      return {
        width: Ue,
        height: Fe,
        chars: Je,
        draw: (ee, ie) => {
          const ye = [];
          if (ee.fillStyle = oe, ee.fillRect(0, 0, Ue, Fe), null === ie)
            for (const Me of be) Me.items.length > 0 && (0, Ke.o)(Me.items.map((ee => ee.content)), 0, Me.y, Me.height, ee, He, ye);
          else {
            let Me = 0;
            for (const Ue of be)
              for (const be of Ue.items) {
                if (Me >= ie) break;
                const Fe = "text" === be.content.kind ? {
                  ...be.content,
                  text: be.content.text.substring(0, ie - Me)
                } : be.content;
                (0, Ke.n)(Fe, be.size.x, Ue.y, Ue.height, ee, He, ye, be.size.width), Me += be.chars
              }
          }(0, Ke.l)(ye, ee)
        }
      }
    }
    var Fe = He(37064),
      Je = He(37066);
    const oe = 256,
      Re = 1024,
      ke = {
        width: 1,
        height: 7 / 8
      };
    var qe = He(37076);
    const fe = {
      leaderboard: ""
    };
    var Te = He(37081);
    const pe = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      Xe = 2048,
      ze = 256,
      Be = 10,
      Ee = 4,
      ge = 65536,
      Oe = new TextDecoder;
    let de = Te.q,
      We = -1;
    const te = new Map,
      Ze = new Map;
    let we = 0;
    const De = new TextEncoder;

    function Pe(ee, ie) {
      const He = De.encode(JSON.stringify(ie)),
        ye = new Uint8Array(He.length + 1);
      return ye[0] = ee, ye.set(He, 1), ye
    }
    const Ae = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Po: null,
        hideNameSeed: null
      },
      Ye = [Pe(pe.Nametag, Ae), Pe(pe.Nametag, {
        ...Ae,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), Pe(pe.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...ye.d.map(((ee, ie) => Pe(pe.Board, {
        shared: {
          text: "Ag",
          textSize: ie
        },
        w: 0,
        h: 0
      })))];

    function Ve(ee) {
      Te.j.load().then((() => {
        if (ee()) return;
        const ie = (0, be.f)(1, 1, {
          willReadFrequently: !0
        });
        var He;
        ie && (He = ie.canvas, Ye.map((ee => ue(ee, He))))
      }))
    }
    let ae = Te.w;

    function ce() {
      te.clear(), Ze.clear()
    }

    function xe(ee, ie) {
      const He = ee.get(ie);
      return void 0 !== He && (ee.delete(ie), ee.set(ie, He)), He
    }

    function Le(ee, ie, He) {
      ee.set(ie, He), ee.size > ze && ee.delete(ee.keys().next().value)
    }

    function Ce(ee, ie, He) {
      if (ee === pe.Nametag) {
        let ee = xe(te, ie);
        return void 0 === ee && (ee = (0, Fe.e)(JSON.parse(ie), He, de), Le(te, ie, ee)), ee
      }
      if (ee === pe.MultilineText) {
        var be;
        const ee = JSON.parse(ie),
          ye = JSON.stringify(null !== (be = ee.box) && void 0 !== be ? be : null),
          Me = "number" === typeof ee.shown ? ee.shown : null;
        let Ke = xe(Ze, ye);
        void 0 === Ke && (Ke = Ue(ee.box, He, de), Le(Ze, ye, Ke));
        const Fe = null === Me ? null : Math.min(Math.max(0, Math.floor(Me)), Ke.chars),
          Je = Ke;
        return {
          width: Je.width,
          height: Je.height,
          draw: ee => {
            Je.draw(ee, Fe)
          }
        }
      }
      if (ee === pe.Board) return function(ee, ie) {
        var He;
        if (!ie.canSeePlayerWrittenText) return null;
        const {
          shared: be,
          w: Me = 0,
          h: Ke = 0
        } = ee, Ue = !Me;
        let Fe;
        if (Ue) {
          var qe, fe;
          Fe = null !== (qe = null === be || void 0 === be || null === (fe = be.text) || void 0 === fe ? void 0 : fe.toString()) && void 0 !== qe ? qe : ""
        } else {
          if ("string" !== typeof(null === be || void 0 === be ? void 0 : be.text)) return null;
          Fe = be.text
        }
        if ("" === Fe.trim()) return null;
        const Te = null !== (He = null === be || void 0 === be ? void 0 : be.textSize) && void 0 !== He ? He : 0,
          pe = ye.d[Te].ingameFontSize;
        let Xe = ke,
          ze = oe;
        Ue || (Fe = (0, ye.n)(Fe, Te, Me, Ke), Xe = (0, ye.v)(Me, Ke), ze = Math.min(oe, Re / Math.max(Xe.width, Xe.height)));
        const Be = Math.round(ze * Xe.width),
          Ee = Math.round(ze * Xe.height),
          ge = ze / oe;
        return {
          width: Be,
          height: Ee,
          draw: ee => {
            Je.b.fontSize = pe * ge, Je.b.fontWeight = "bold", Je.b.font = "'Jetbrains Mono', monospace", Je.b.drawText(ee, Fe, 0, (-10 - 7 * Te) * ge, Be, Ee)
          }
        }
      }(JSON.parse(ie), de);
      if (ee === pe.Leaderboard) return function(ee, ie, He) {
        var ye;
        const be = (0, qe.k)(ee.opts, fe),
          Me = (0, qe.f)(be, He),
          Ke = {
            top: (0, qe.g)(be, (0, qe.m)(ee.top)),
            around: null !== (ye = ee.around) && void 0 !== ye ? ye : null,
            showPlayerText: ie.canSeePlayerWrittenText,
            localPlayerDbId: ie.localPlayerDbId
          };
        return {
          width: Me.pixelWidth,
          height: Me.pixelHeight,
          draw: ee => {
            const {
              a: ie,
              d: He
            } = ee.getTransform();
            (0, qe.d)(ee, Math.round(Me.pixelWidth * ie), Math.round(Me.pixelHeight * He), Me, be, Ke)
          }
        }
      }(JSON.parse(ie), de, Xe);
      throw new Error(`unknown text plane kind ${ee}`)
    }
    const ve = 2 ** Math.floor(Math.log2(Xe));

    function ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (ee.length < 2) return [0, 0];
        const Me = (0, be.c)(ie);
        if (!Me) return [0, 0];
        const Ke = ae();
        Ke !== We && (We = Ke, ce());
        const [Ue] = ee, Fe = Oe.decode(ee.subarray(1));
        let Je;
        Ue !== pe.Board && Ue !== pe.Leaderboard || !de.canSeePlayerWrittenText || de.glyphsShown(Fe), Me.save();
        try {
          Je = Ce(Ue, Fe, Me)
        } finally {
          Me.restore()
        }
        if (null === Je || !(Je.width > 0 && Je.height > 0)) return [0, 0];
        const oe = Math.min(1, Xe / Je.width, Xe / Je.height),
          Re = ee => ye ? function(ee) {
            const ie = 2 ** Math.ceil(Math.log2(ee));
            return Math.min(ve, ie - ee > ee - ie / 2 ? ie / 2 : ie)
          }(ee) : Math.min(Xe, Math.ceil(ee * oe)),
          [ke, qe] = [Re(Je.width), Re(Je.height)];
        ! function(ee, ie, He, ye, be) {
          const Me = Math.max(ee.width, He),
            Ke = Math.max(ee.height, ye),
            Ue = be || Me * Ke > Math.max(Ee * He * ye, ge),
            [Fe, Je] = Ue ? [He, ye] : [Me, Ke];
          Fe === ee.width && Je === ee.height ? ie.clearRect(0, 0, Fe, Je) : (ee.width = Fe, ee.height = Je)
        }(ie, Me, ke, qe, He), Me.save();
        try {
          const [ee, ie] = ye ? [ke / Je.width, qe / Je.height] : [oe, oe];
          1 === ee && 1 === ie || Me.scale(ee, ie), Je.draw(Me)
        } finally {
          Me.restore()
        }
        return [ke, qe]
      } catch (Me) {
        ! function(ee, ie) {
          we < Be && (we++, console.warn(`[bloxd-wasm-client] ${ee}`, ie))
        }("could not raster a text plane", Me);
        try {
          ie.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  54199: (ee, ie, He) => {
    var ye = {
      "./bedwars/bedwarsClient": [40119, 9],
      "./bridgeBattle/bridgeBattleClient": [40121, 10],
      "./buildAFactory2/buildAFactory2Client": [39281, 87, 85, 252, 270, 11],
      "./classic/classicClient": [40123, 12],
      "./classic/smp2Client": [40128, 13],
      "./clutch/clutchClient": [40131, 14],
      "./containmentBreach/containmentBreachClient": [40133, 247, 15],
      "./cooking/cookingClient": [40265, 16],
      "./defusal/defusalClient": [40273, 17],
      "./frontline/frontlineClient": [40276, 87, 85, 18],
      "./goalRush/goalRushClient": [40295, 19],
      "./greenville/greenvilleClient": [40299, 172, 275, 20],
      "./hideseek/hideseekClient": [40326, 21],
      "./luckyBedwars/luckyBedwarsClient": [40330, 22],
      "./murderMystery/murderMysteryClient": [40332, 23],
      "./ninetyNineNights/ninetyNineNightsClient": [40340, 24],
      "./oneBlock/oneBlockClient": [40342, 25],
      "./plots/plotsClient": [40346, 269, 247, 26],
      "./pvpCiv/pvpCivClient": [40420, 27],
      "./secretSanta/secretSantaClient": [40422, 28],
      "./skyIslands/skyIslandsClient": [40430, 29],
      "./skyblock/skyblockClient": [39318, 87, 261, 252, 172, 241, 30],
      "./tsunami/tsunamiClient": [40439, 31]
    };

    function be(ee) {
      if (!He.o(ye, ee)) return Promise.resolve().then((() => {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }));
      var ie = ye[ee],
        be = ie[0];
      return Promise.all(ie.slice(1).map(He.e)).then((() => He(be)))
    }
    be.keys = () => Object.keys(ye), be.id = 54199, ee.exports = be
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);