export const id = 262;
export const ids = [262];
export const modules = {
  40083: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(DD, CD).getContext("2d", cD);
      const ID = document.createElement("canvas");
      return ID.width = DD, ID.height = CD, ID.getContext("2d", cD)
    }

    function pD(DD, CD) {
      return DD.getContext("2d", CD)
    }
    cD.d(CD, {
      e: () => pD,
      h: () => ID
    })
  },
  40003: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD,
      e: () => tD,
      g: () => WD,
      k: () => xD,
      o: () => JD,
      p: () => KD,
      s: () => ND,
      w: () => oD,
      y: () => vD,
      A: () => UD,
      B: () => RD,
      C: () => nD,
      G: () => lD,
      H: () => YD,
      I: () => aD,
      M: () => zD
    });
    var ID = cD(4581),
      pD = cD(39730),
      iD = (cD(39875), cD(11));
    class fD {
      constructor(DD, CD) {
        this.memory = DD, this.access = CD, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.LB = 0, this.u32 = new iD.n(0), this.f32 = new iD.h(0), this.u8 = new iD.e(0), this.dataView = new iD.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.LB = this.access.LB(), this.buffer = (0, iD.I)(this.memory()), this.u32 = new iD.n(this.buffer, this.ptr, this.LB >>> 2), this.f32 = new iD.h(this.buffer, this.ptr, this.LB >>> 2), this.u8 = new iD.e(this.buffer, this.ptr, this.LB), this.dataView = new iD.j(this.buffer, this.ptr, this.LB)
      }
      ensureViews() {
        (0, iD.I)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(DD) {
        return !!this.fits(DD) || (this.dropped++, !1)
      }
      fits(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const cD = CD + DD;
        return cD <= this.LB || cD <= ID.Dc && 0 !== this.access.reserve(cD) && (this.refresh(), cD <= this.LB)
      }
      consume(DD) {
        const CD = this.cursor - DD;
        CD > 0 && DD > 0 && (this.ensureViews(), this.u8.copyWithin(0, DD, this.cursor)), this.cursor = CD > 0 ? CD : 0
      }
      writeRecord(DD, CD, cD, pD, iD) {
        if (!this.room(ID.pb)) return !1;
        const fD = this.cursor >>> 2;
        return this.u32[fD] = 65535 & DD | (65535 & CD) << 16, this.f32[fD + 1] = cD, this.f32[fD + 2] = pD, this.u32[fD + 3] = iD >>> 0, this.cursor += ID.pb, !0
      }
      writeOptions(DD, CD) {
        const cD = CD.byteLength,
          pD = ID.pb + (0, ID.je)(cD);
        if (!this.fits(pD)) return !1;
        const iD = this.cursor,
          fD = iD >>> 2;
        this.u32[fD] = ID.tb.Options, this.u32[fD + 1] = cD, this.u32[fD + 2] = 0, this.u32[fD + 3] = DD >>> 0;
        const bD = iD + ID.pb;
        return this.u8.set(CD, bD), this.u8.fill(0, bD + cD, iD + pD), this.cursor += pD, !0
      }
      writeWorkerRecord(DD, CD, cD, pD, iD, fD) {
        const bD = fD.byteLength,
          QD = ID.Bd + (0, ID.je)(bD);
        if (bD > ID.yd) return this.dropped++, !1;
        if (!this.room(QD)) return !1;
        const wD = this.cursor,
          SD = wD >>> 2;
        this.u32[SD] = DD >>> 0, this.u32[SD + 1] = 65535 & CD | (65535 & cD) << 16, this.u32[SD + 2] = pD >>> 0, this.u32[SD + 3] = iD >>> 0, this.u32[SD + 4] = bD;
        const BD = wD + ID.Bd;
        return this.u8.set(fD, BD), this.u8.fill(0, BD + bD, wD + QD), this.cursor += QD, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(DD, CD) {
        return this.writeNet(ID.Ub.Frame, DD, CD)
      }
      writeOpen(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(ID.Ub.Open, DD, QD(CD))
      }
      writeClose(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(ID.Ub.Close, DD, QD(CD))
      }
      writeNet(DD, CD, cD) {
        const pD = cD.byteLength,
          iD = ID.Rb + (0, ID.je)(pD);
        if (pD > ID.Lb) return this.dropped++, !1;
        if (!this.room(iD)) return !1;
        const fD = this.cursor;
        this.u32[fD >>> 2] = pD, this.u32[1 + (fD >>> 2)] = (0, ID.he)(DD, CD);
        const bD = fD + ID.Rb;
        return this.u8.set(cD, bD), this.u8.fill(0, bD + pD, fD + iD), this.cursor += iD, !0
      }
      VM(DD, CD, cD) {
        const pD = ID.w + (0, ID.je)(cD);
        if (!this.room(pD)) return -1;
        const iD = this.cursor;
        this.u32[iD >>> 2] = 65535 & DD | (65535 & CD) << 16, this.u32[1 + (iD >>> 2)] = cD;
        const fD = iD + ID.w;
        return this.u8.fill(0, fD, iD + pD), this.cursor += pD, fD
      }
      growForCmd(DD) {
        return this.fits(ID.w + (0, ID.je)(DD), 0)
      }
      writeCmd(DD, CD, cD) {
        const ID = this.VM(DD, CD, cD.byteLength);
        return !(ID < 0) && (this.u8.set(cD, ID), !0)
      }
      copyWritten(DD, CD) {
        return this.ensureViews(), this.u8.slice(DD, DD + CD)
      }
    }
    const bD = new iD.e(0);

    function QD(DD) {
      if (0 === DD) return bD;
      const CD = new iD.e(ID.Nb);
      for (let cD = 0; cD < ID.Nb; cD++) CD[cD] = DD >>> 8 * cD & 255;
      return CD
    }
    class wD {
      constructor(DD, CD) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new fD(CD, {
          ptr: () => DD.rB(),
          LB: () => DD.fiD(),
          reserve: CD => DD.NiD(CD)
        }), this.net = new fD(CD, {
          ptr: () => DD.ZiD(),
          LB: () => DD.tiD(),
          reserve: CD => DD.giD(CD)
        }), this.worker = new fD(CD, {
          ptr: () => DD.YiD(),
          LB: () => DD.diD(),
          reserve: CD => DD.miD(CD)
        }), this.cmd = new fD(CD, {
          ptr: () => DD.rpD(),
          LB: () => DD.upD(),
          reserve: CD => DD.hpD(CD)
        })
      }
      reset(DD) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(DD)
      }
    }
    var SD = cD(39872),
      BD = cD(2343),
      yD = cD(4575),
      MD = cD(40012);
    const tD = "coreFrame",
      ZD = "fatalStatus",
      oD = "otherCall",
      vD = "coreRings",
      ND = "netIn",
      gD = "abi",
      XD = "netOut",
      mD = "workerOut",
      nD = "worldgenHost",
      OD = "eventWalker",
      PD = "netEvent",
      HD = "envEvent",
      UD = "sharedTables",
      xD = "inputAction",
      qD = new Set([OD, PD, HD, xD, UD]),
      JD = "wasmMemory",
      KD = "meshHost";

    function aD(DD, CD) {
      DD.forEachWorkerOut(((cD, pD, iD) => {
        if ((0, ID.Yd)(cD)) try {
          var fD;
          null === (fD = CD.worldgen) || void 0 === fD || fD.take(cD, iD)
        } catch (QD) {
          DD.crash(nD, QD)
        } else try {
          var bD;
          null === (bD = CD.mesh) || void 0 === bD || bD.take(cD, pD, iD)
        } catch (QD) {
          DD.crash(KD, QD)
        }
      }))
    }
    const VD = 1048576;

    function zD(DD, CD) {
      let cD = !1;
      const ID = () => {
        cD = !1, CD()
      };
      return () => {
        !cD && DD.cursor >= VD && (cD = !0, queueMicrotask(ID))
      }
    }
    const jD = new Set([ZD, oD, nD, KD]);

    function lD(DD) {
      return qD.has(DD.site) ? DD.error instanceof WebAssembly.RuntimeError || (0, pD.n)(DD.error) : !jD.has(DD.site) && DD.error instanceof Error
    }
    const LD = "events",
      TD = [],
      GD = "debugLog",
      RD = "terrainTextures",
      kD = "sunShadowTextures",
      dD = new TextDecoder;

    function YD(DD, CD) {
      const {
        site: cD,
        error: pD,
        header: iD
      } = DD, fD = iD ? (0, ID.Sd)(iD.lastError) : "noFrame", bD = `CORE-${cD===ZD?fD:cD}`, QD = null === pD || void 0 === pD ? "" : ` ${(0,SD.h)(pD)}`, wD = {
        site: cD,
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return iD && (wD.status = String(iD.status), wD.lastError = fD, wD.lastErrorCode = String(iD.lastError), wD.lastErrorDetail = String(iD.lastErrorDetail), wD.errorCount = String(iD.errorCount), wD.frameIndex = String(iD.frameIndex), wD.tickIndex = String(iD.tickIndex)), {
        code: bD,
        message: `core ${cD}, last error ${fD};${QD}`,
        details: wD
      }
    }
    class WD {
      constructor(DD, CD, cD) {
        this.core = DD, this.memory = CD, this.handlers = cD, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: TD,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new wD(DD, CD)
      }
      get netKeptFrames() {
        return this.keptFrames
      }
      get netWrittenSinceFrame() {
        return this.rings.net.cursor - this.netKept
      }
      hasPendingCommands() {
        return this.rings.cmd.cursor > 0
      }
      framePaces(DD) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.IiD(DD)
        } catch (CD) {
          return this.crash(tD, CD), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(DD, CD) {
        var cD;
        let iD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: fD,
          net: bD,
          worker: QD,
          cmd: wD
        } = this.rings, SD = bD.cursor, BD = CD && !this.drawsHeld;
        let oD = ID.M.Fatal;
        const vD = wD.cursor;
        let gD = null;
        try {
          const CD = (BD ? ID.ab.Draws : 0) | (iD ? ID.ab.NetAll : 0);
          oD = (0, MD.g)((() => this.core.frame(DD, fD.cursor, bD.cursor, QD.cursor, CD, vD)))
        } catch (jD) {
          gD = {
            error: jD
          }
        }
        const XD = null === (cD = this.gameHost) || void 0 === cD ? void 0 : cD.takeFault();
        this.rings.reset(this.stopped || null !== gD || void 0 !== XD ? wD.cursor : vD);
        const mD = null === gD && void 0 === XD ? this.headerView() : null,
          nD = null === mD ? null : (0, ID.le)(mD);
        null !== nD && (this.lastHeader = nD);
        const HD = null !== nD && oD !== ID.M.Fatal,
          UD = HD && null !== mD ? mD[ID.hb.NetInKept] : 0,
          xD = HD && UD <= SD && UD % 4 === 0 ? UD : null;
        var qD, JD;
        null !== nD && null !== xD && oD === ID.M.Errors && (null === (qD = (JD = this.handlers).onErrors) || void 0 === qD || qD.call(JD, nD));
        const KD = null === xD ? TD : this.readEvents(SD);
        if (bD.consume(SD - (null !== xD && void 0 !== xD ? xD : 0)), this.netKept = null !== xD && void 0 !== xD ? xD : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== gD) return this.crash(tD, void 0 === XD || XD instanceof pD.e ? gD.error : XD), !1;
        if (void 0 !== XD || null === nD) return this.crashOn(tD, XD), !1;
        const aD = this.headerView()[ID.hb.FrameDraw];
        if (this.lastFrameKind = (0, yD.c)(BD, aD), oD === ID.M.Fatal) return this.crash(ZD, null), !1;
        if (null === xD) return this.crash(ND, `the core kept ${UD} of ${SD} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const DD = this.frameEvents,
            CD = this.headerView();
          DD.ptr = CD[ID.hb.EventsPtr], DD.len = CD[ID.hb.EventsLen], DD.net = KD, DD.kind = this.lastFrameKind;
          try {
            this.eventWalker(DD)
          } catch (jD) {
            return this.crashOn(OD, jD), !1
          }
          return this.handEnvEvents()
        }
        for (const ID of KD) {
          if (this.stopped) return !1;
          try {
            var VD, zD;
            null === (VD = (zD = this.handlers).onNetEvent) || void 0 === VD || VD.call(zD, ID)
          } catch (jD) {
            return this.crashOn(PD, jD), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const iD of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var DD, CD;
            null === (DD = (CD = this.handlers).onReconnectGrace) || void 0 === DD || DD.call(CD, iD)
          } catch (pD) {
            return this.crashOn(PD, pD), !1
          }
        }
        for (const iD of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var cD, ID;
            null === (cD = (ID = this.handlers).onEnvEvent) || void 0 === cD || cD.call(ID, iD)
          } catch (pD) {
            return this.crashOn(HD, pD), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(DD) {
        this.eventWalker = DD
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: DD
        } = this.rings;
        try {
          const CD = this.unsentUiPrefs;
          CD && DD.writeRecord(ID.tb.UiPrefs, 0, CD.nametagCutDistance, 0, (0, ID.oe)(CD)) && (this.unsentUiPrefs = null);
          const cD = this.unsentEnvPrefs;
          cD && DD.writeRecord(ID.tb.EnvPrefs, (0, ID.Wd)(cD), cD.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const pD = this.unsentLookPrefs;
          pD && DD.writeRecord(ID.tb.Sensitivity, 0, pD.mouse, pD.touch, (0, BD.k)(pD.fovPercent)) && (this.unsentLookPrefs = null);
          let iD = 0;
          for (const {
              aux: ID,
              payload: fD
            }
            of this.unsentOptions) {
            if (!DD.writeOptions(ID, fD)) {
              if (DD.cursor > 0) break;
              this.optionsDropped++
            }
            iD++
          }
          iD > 0 && this.unsentOptions.splice(0, iD)
        } catch (CD) {
          return this.crash(vD, CD), !1
        }
        return !0
      }
      setHoldDraws(DD) {
        this.drawsHeld = DD
      }
      setUiPrefs(DD) {
        this.unsentUiPrefs = {
          ...DD
        }
      }
      setEnvPrefs(DD) {
        this.unsentEnvPrefs = {
          ...DD
        }
      }
      setLookPrefs(DD) {
        this.unsentLookPrefs = {
          ...DD
        }
      }
      queueOptions(DD, CD) {
        return !this.isStopped && (CD.byteLength > ID.Zb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: DD,
          payload: CD
        }), !0))
      }
      setChunkCap(DD) {
        return this.callCore("setChunkCap", null, (CD => CD.qiD(DD)))
      }
      shedMemory(DD) {
        const CD = this.callCore("shedMemory", null, (CD => CD.liD(DD)));
        return 0 === CD ? null : CD
      }
      addDistanceInUse() {
        const DD = this.callCore("addDistanceInUse", null, (DD => DD.YpD()));
        return 0 === DD ? null : DD
      }
      setChunkAddDistance(DD, CD) {
        return this.callCore("setChunkAddDistance", !1, (cD => cD.xiD(DD, CD)))
      }
      setGameHost(DD) {
        return this.callCore("setGameHost", !1, (CD => (CD.ciD(DD), this.gameHost = DD, !0)))
      }
      setAntiCheatProbes(DD) {
        return this.callCore("setAntiCheatProbes", !1, (CD => CD.HiD(DD)))
      }
      setAmbientOcclusion(DD) {
        this.callCore("setAmbientOcclusion", void 0, (CD => {
          CD.OiD(DD)
        }))
      }
      setPoseLod(DD) {
        this.callCore("setPoseLod", void 0, (CD => {
          CD.KiD(DD)
        }))
      }
      setDebugLog(DD, CD) {
        this.callCore(GD, void 0, (cD => {
          cD.zo(DD, CD)
        }))
      }
      takeDebugLog(DD) {
        return this.callCore(GD, [], (CD => CD.jo(DD)))
      }
      setTextureLayers(DD) {
        return this.callCore("setTextureLayers", !1, (CD => CD.jiD(DD)))
      }
      setBlockColours(DD) {
        let {
          blocks: CD,
          counts: cD,
          values: ID
        } = DD;
        return this.callCore("setBlockColours", !1, (DD => DD.ScD(CD, cD, ID)))
      }
      terrainTextureNames() {
        return this.callCore(RD, [], (DD => DD.kiD()))
      }
      setTerrainTextures(DD, CD, cD, ID) {
        return this.callCore(RD, !1, (pD => pD.ziD(DD, cD, CD, ID)))
      }
      setShaderPack(DD, CD, cD, ID, pD, iD) {
        return this.callCore("setShaderPack", !1, (fD => {
          var bD, QD;
          return null !== (bD = null === (QD = fD.UcD) || void 0 === QD ? void 0 : QD.call(fD, DD, CD, cD, ID, pD, iD)) && void 0 !== bD && bD
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(kD, null, (DD => {
          var CD, cD;
          return null !== (CD = null === (cD = DD.LiD) || void 0 === cD ? void 0 : cD.call(DD)) && void 0 !== CD ? CD : null
        }))
      }
      setSunShadowTexture(DD, CD, cD, ID, pD) {
        this.callCore(kD, void 0, (iD => {
          var fD;
          null === (fD = iD.ViD) || void 0 === fD || fD.call(iD, DD, CD, cD, ID, pD)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(kD, [], (DD => {
          var CD, cD;
          return null !== (CD = null === (cD = DD.GiD) || void 0 === cD ? void 0 : cD.call(DD)) && void 0 !== CD ? CD : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(kD, null, (DD => {
          var CD, cD;
          return null !== (CD = null === (cD = DD.TiD) || void 0 === cD ? void 0 : cD.call(DD)) && void 0 !== CD ? CD : null
        }))
      }
      callCore(DD, CD, cD) {
        if (this.stopped) return CD;
        try {
          return cD(this.core)
        } catch (ID) {
          return this.crash(DD, ID), CD
        }
      }
      readEvents(DD) {
        this.netOffsets.length = 0;
        const CD = this.headerView(),
          cD = CD[ID.hb.EventsPtr],
          pD = CD[ID.hb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === pD) return TD;
        const iD = [],
          fD = this.memory().buffer;
        if (cD % 4 !== 0 || cD + pD > fD.byteLength) return this.crash(LD, `events of ${pD} bytes at ${cD} outside ${fD.byteLength} bytes of memory`), TD;
        const bD = new DataView(fD, cD, pD),
          QD = this.rings.net,
          wD = (CD, cD) => CD + cD <= DD ? QD.copyWritten(CD, cD) : null;
        let SD = 0;
        for (; SD < pD;) {
          const DD = SD + ID.R,
            CD = DD <= pD ? bD.getUint32(SD, !0) : -1,
            QD = CD >>> 16;
          if (CD < 0 || QD > pD - DD) return this.crash(LD, `event record at ${SD} overruns its ${pD} bytes`), TD;
          const HD = 65535 & CD,
            UD = CD => bD.getUint32(DD + 4 * CD, !0);
          if (HD === ID.U.RawMessage) {
            const DD = QD >= ID.Fc.BYTES ? 65535 & UD(1) : -1,
              CD = DD === ID.Fc.STRING_TYPE,
              cD = QD === (CD ? ID.Fc.STRING_TYPE_BYTES : ID.Fc.BYTES) ? wD(UD(2), UD(3)) : null,
              pD = CD && cD ? wD(UD(4), UD(5)) : null;
            if (!cD || CD && !pD) return this.crash(LD, `RawMessage at ${SD} of ${QD} bytes names bytes outside net-in`), TD;
            this.netOffsets.push(SD), iD.push({
              type: "message",
              conn: UD(0),
              Rf: DD,
              payloadKind: UD(1) >>> 16,
              payload: cD,
              stringType: pD ? dD.decode(pD) : null
            })
          } else if (HD === ID.U.CoreErrors) {
            var BD, yD;
            const DD = QD >= 4 ? UD(0) : -1;
            if (DD < 0 || DD > ID.H.PAIRS_MAX || QD !== 4 * (ID.H.FIXED_WORDS + ID.H.PAIR_WORDS * DD)) return this.crash(LD, `CoreErrors at ${SD} of ${QD} bytes`), TD;
            const CD = [];
            for (let cD = 0; cD < DD; cD++) CD.push({
              code: UD(1 + 2 * cD),
              detail: UD(2 + 2 * cD)
            });
            null === (BD = (yD = this.handlers).onCoreErrors) || void 0 === BD || BD.call(yD, CD, UD(1 + 2 * DD))
          } else if (HD === ID.U.RenderReload) {
            var MD, tD;
            if (QD !== ID.Pc.BYTES) return this.crash(LD, `RenderReload at ${SD} of ${QD} bytes`), TD;
            null === (MD = (tD = this.handlers).onRenderReload) || void 0 === MD || MD.call(tD, UD(0), UD(1), UD(2))
          } else if (HD === ID.U.Images) {
            var ZD, oD;
            null === (ZD = (oD = this.handlers).onImages) || void 0 === ZD || ZD.call(oD, new Uint8Array(fD.slice(cD + DD, cD + DD + QD)))
          } else if (HD === ID.U.ModelRequests)
            for (let cD = 0; cD < QD >>> 2; cD++) {
              var vD, ND;
              null === (vD = (ND = this.handlers).onModelRequest) || void 0 === vD || vD.call(ND, UD(cD))
            } else if (HD === ID.U.ModelTaken) {
              var gD, XD;
              if (QD < 4) return this.crash(LD, `ModelTaken at ${SD} of ${QD} bytes`), TD;
              const DD = new Uint32Array((QD >>> 2) - 1);
              for (let CD = 0; CD < DD.length; CD++) DD[CD] = UD(1 + CD);
              null === (gD = (XD = this.handlers).onModelTaken) || void 0 === gD || gD.call(XD, UD(0), DD)
            } else if (HD === ID.U.TerrainTexturesWanted) {
            var mD, nD;
            if (0 !== QD) return this.crash(LD, `TerrainTexturesWanted at ${SD} of ${QD} bytes`), TD;
            null === (mD = (nD = this.handlers).onTerrainTexturesWanted) || void 0 === mD || mD.call(nD)
          } else if (HD === ID.U.KeepAliveDue) {
            var OD, PD;
            if (QD > ID.xb) return this.crash(LD, `KeepAliveDue at ${SD} of ${QD} bytes`), TD;
            null === (OD = (PD = this.handlers).onKeepAlive) || void 0 === OD || OD.call(PD, new Uint8Array(fD, cD + DD, QD).slice())
          } else if (HD === ID.U.ConnectionState) {
            if (QD !== ID.x) return this.crash(LD, `ConnectionState at ${SD} of ${QD} bytes`), TD;
            this.netOffsets.push(SD), iD.push({
              type: "connection",
              conn: UD(0),
              phase: UD(1),
              code: 0 | UD(2)
            })
          } else if (HD === ID.U.EnvLighting || HD === ID.U.SkyImages) {
            if (QD !== (HD === ID.U.EnvLighting ? ID.Q : ID.hd)) return this.crash(LD, `event ${HD} at ${SD} of ${QD} bytes`), TD;
            this.envEvents.push({
              kind: HD,
              payload: new Uint8Array(fD.slice(cD + DD, cD + DD + QD))
            })
          } else if (HD === ID.U.ReconnectGrace) {
            if (QD !== ID.nc) return this.crash(LD, `ReconnectGrace at ${SD} of ${QD} bytes`), TD;
            const DD = UD(2);
            this.graceEvents.push({
              conn: UD(0),
              graceMs: UD(1),
              sessionBased: 0 !== (DD & ID.Gc.SessionBased),
              replayOffer: 0 !== (DD & ID.Gc.ReplayOffer)
            })
          }
          SD = DD + (0, ID.je)(QD)
        }
        return iD
      }
      forEachNetOut(DD) {
        this.forEachOut(XD, "net-out", ID.hb.NetOutPtr, ID.hb.NetOutLen, ID.Rb, 0, ((CD, cD, pD, iD) => {
          const fD = (0, ID.de)(cD);
          fD === ID.Ub.Frame ? DD((0, ID.$d)(cD), pD) : this.crash(XD, `net-out record at ${iD} is kind ${fD}, not a frame`)
        }))
      }
      forEachWorkerOut(DD) {
        this.forEachOut(mD, "worker-out", ID.hb.WorkerOutPtr, ID.hb.WorkerOutLen, ID.xd, 4, ((CD, cD, pD, iD) => {
          const fD = 255 & CD,
            bD = fD === ID.Kd.Init ? this.initOf(pD, iD) : pD;
          null !== bD && DD(fD, CD >>> 8 & 16777215, bD)
        }))
      }
      initOf(DD, CD) {
        const cD = this.memory().buffer;
        if (DD.byteLength !== ID.kb) return this.crash(mD, `worker-out Init record at ${CD} is ${DD.byteLength} bytes, not a view`), null;
        const pD = new DataView(DD.buffer, DD.byteOffset, ID.kb),
          iD = pD.getUint32(0, !0),
          fD = pD.getUint32(4, !0);
        return iD + fD > cD.byteLength ? (this.crash(mD, `worker-out Init record at ${CD} names ${fD} bytes at ${iD} outside ${cD.byteLength} bytes of memory`), null) : new Uint8Array(cD, iD, fD)
      }
      forEachOut(DD, CD, cD, pD, iD, fD, bD) {
        if (this.stopped || null === this.lastHeader) return;
        const QD = this.headerView(),
          wD = QD[cD],
          SD = QD[pD];
        if (0 === SD) return;
        const BD = this.memory().buffer;
        if (wD % 4 !== 0 || wD + SD > BD.byteLength) return void this.crash(DD, `${CD} of ${SD} bytes at ${wD} outside ${BD.byteLength} bytes of memory`);
        const yD = new DataView(BD, wD, SD);
        let MD = 0;
        for (; MD < SD;) {
          const cD = MD + iD,
            pD = cD <= SD ? yD.getUint32(MD + fD, !0) : -1;
          if (pD < 0 || pD > SD - cD) return void this.crash(DD, `${CD} record at ${MD} overruns its ${SD} bytes`);
          if (bD(yD.getUint32(MD, !0), yD.getUint32(MD + 4, !0), new Uint8Array(BD, wD + cD, pD), MD), this.stopped) return;
          MD = cD + (0, ID.je)(pD)
        }
      }
      forEachEvent(DD) {
        if (this.stopped || null === this.lastHeader) return;
        const CD = this.headerView(),
          cD = CD[ID.hb.EventsPtr],
          pD = CD[ID.hb.EventsLen];
        if (0 === pD) return;
        const iD = this.memory().buffer;
        if (cD % 4 !== 0 || cD + pD > iD.byteLength) return void this.crash(LD, `events of ${pD} bytes at ${cD} outside ${iD.byteLength} bytes of memory`);
        const fD = new DataView(iD, cD, pD);
        let bD = 0;
        for (; bD < pD;) {
          const CD = bD + ID.R,
            cD = CD <= pD ? fD.getUint32(bD, !0) : -1,
            iD = cD >>> 16;
          if (cD < 0 || iD > pD - CD) return void this.crash(LD, `event record at ${bD} overruns its ${pD} bytes`);
          DD(65535 & cD, fD, CD, iD), bD = CD + (0, ID.je)(iD)
        }
      }
      crashOn(DD, CD) {
        CD instanceof pD.e ? this.crash(LD, CD.message) : this.crash(DD, CD)
      }
      crash(DD, CD) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: DD,
          error: CD,
          header: this.lastHeader
        }))
      }
      headerWord(DD) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[DD]
      }
      headerView() {
        const DD = this.memory().buffer;
        return DD !== this.headerBuffer && (this.headerBuffer = DD, this.header = new Uint32Array(DD, this.core.zM(), ID.db)), this.header
      }
    }
  },
  40012: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => iD
    });
    var ID = cD(4495);
    let pD = null;

    function iD(DD) {
      pD = {
        scanned: !1
      };
      try {
        return DD()
      } finally {
        pD = null
      }
    }

    function fD() {
      const DD = pD;
      if (null === DD) return (0, ID.f)();
      const CD = (0, ID.f)(!DD.scanned);
      return DD.scanned = !0, CD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);