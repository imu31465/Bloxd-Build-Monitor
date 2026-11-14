export const id = 241;
export const ids = [241];
export const modules = {
  38838: (FF, WF, SF) => {
    function CF(FF, WF, SF) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(FF, WF).getContext("2d", SF);
      const CF = document.createElement("canvas");
      return CF.width = FF, CF.height = WF, CF.getContext("2d", SF)
    }

    function AF(FF, WF) {
      return FF.getContext("2d", WF)
    }
    SF.d(WF, {
      d: () => AF,
      h: () => CF
    })
  },
  38778: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    const CF = {
      stop: () => CF,
      fade: () => CF,
      rate: () => CF,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => CF,
      setPannerAttr: () => CF,
      setPosition: () => CF
    }
  },
  38792: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => TF,
      f: () => EF,
      j: () => HF,
      l: () => mW,
      p: () => xW,
      q: () => ZF,
      t: () => tW,
      v: () => rW,
      w: () => gW,
      y: () => LF,
      A: () => fF,
      D: () => qW,
      G: () => GF,
      I: () => nF,
      M: () => oF,
      P: () => MF
    });
    var CF = SF(3786),
      AF = SF(38585),
      uF = SF(5);
    class hF {
      constructor(FF, WF) {
        this.memory = FF, this.access = WF, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.ZF = 0, this.u32 = new uF.k(0), this.f32 = new uF.f(0), this.u8 = new uF.e(0), this.dataView = new uF.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.ZF = this.access.ZF(), this.buffer = (0, uF.B)(this.memory()), this.u32 = new uF.k(this.buffer, this.ptr, this.ZF >>> 2), this.f32 = new uF.f(this.buffer, this.ptr, this.ZF >>> 2), this.u8 = new uF.e(this.buffer, this.ptr, this.ZF), this.dataView = new uF.i(this.buffer, this.ptr, this.ZF)
      }
      ensureViews() {
        (0, uF.B)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(FF) {
        return !!this.fits(FF) || (this.dropped++, !1)
      }
      fits(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const SF = WF + FF;
        return SF <= this.ZF || SF <= CF.ic && 0 !== this.access.reserve(SF) && (this.refresh(), SF <= this.ZF)
      }
      consume(FF) {
        const WF = this.cursor - FF;
        WF > 0 && FF > 0 && (this.ensureViews(), this.u8.copyWithin(0, FF, this.cursor)), this.cursor = WF > 0 ? WF : 0
      }
      writeRecord(FF, WF, SF, AF, uF) {
        if (!this.room(CF.gb)) return !1;
        const hF = this.cursor >>> 2;
        return this.u32[hF] = 65535 & FF | (65535 & WF) << 16, this.f32[hF + 1] = SF, this.f32[hF + 2] = AF, this.u32[hF + 3] = uF >>> 0, this.cursor += CF.gb, !0
      }
      writeOptions(FF, WF) {
        const SF = WF.byteLength,
          AF = CF.gb + (0, CF.$d)(SF);
        if (!this.fits(AF)) return !1;
        const uF = this.cursor,
          hF = uF >>> 2;
        this.u32[hF] = CF.hb.Options, this.u32[hF + 1] = SF, this.u32[hF + 2] = 0, this.u32[hF + 3] = FF >>> 0;
        const bW = uF + CF.gb;
        return this.u8.set(WF, bW), this.u8.fill(0, bW + SF, uF + AF), this.cursor += AF, !0
      }
      writeWorkerRecord(FF, WF, SF, AF, uF) {
        const hF = uF.byteLength,
          bW = CF.hd + (0, CF.$d)(hF);
        if (hF > CF.dd) return this.dropped++, !1;
        if (!this.room(bW)) return !1;
        const dF = this.cursor,
          PF = dF >>> 2;
        this.u32[PF] = FF >>> 0, this.u32[PF + 1] = 65535 & WF | (65535 & SF) << 16, this.u32[PF + 2] = AF >>> 0, this.u32[PF + 3] = hF;
        const RF = dF + CF.hd;
        return this.u8.set(uF, RF), this.u8.fill(0, RF + hF, dF + bW), this.cursor += bW, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(FF, WF) {
        return this.writeNet(CF.Gb.Frame, FF, WF)
      }
      writeOpen(FF) {
        return this.writeNet(CF.Gb.Open, FF, bW)
      }
      writeClose(FF) {
        return this.writeNet(CF.Gb.Close, FF, bW)
      }
      writeNet(FF, WF, SF) {
        const AF = SF.byteLength,
          uF = CF.Cb + (0, CF.$d)(AF);
        if (AF > CF.yb) return this.dropped++, !1;
        if (!this.room(uF)) return !1;
        const hF = this.cursor;
        this.u32[hF >>> 2] = AF, this.u32[1 + (hF >>> 2)] = (0, CF.Vd)(FF, WF);
        const bW = hF + CF.Cb;
        return this.u8.set(SF, bW), this.u8.fill(0, bW + AF, hF + uF), this.cursor += uF, !0
      }
      aC(FF, WF, SF) {
        const AF = CF.u + (0, CF.$d)(SF);
        if (!this.room(AF)) return -1;
        const uF = this.cursor;
        this.u32[uF >>> 2] = 65535 & FF | (65535 & WF) << 16, this.u32[1 + (uF >>> 2)] = SF;
        const hF = uF + CF.u;
        return this.u8.fill(0, hF, uF + AF), this.cursor += AF, hF
      }
      growForCmd(FF) {
        return this.fits(CF.u + (0, CF.$d)(FF), 0)
      }
      writeCmd(FF, WF, SF) {
        const CF = this.aC(FF, WF, SF.byteLength);
        return !(CF < 0) && (this.u8.set(SF, CF), !0)
      }
      copyWritten(FF, WF) {
        return this.ensureViews(), this.u8.slice(FF, FF + WF)
      }
    }
    const bW = new uF.e(0);
    class dF {
      constructor(FF, WF) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new hF(WF, {
          ptr: () => FF.KF(),
          ZF: () => FF.niF(),
          reserve: WF => FF.WeF(WF)
        }), this.net = new hF(WF, {
          ptr: () => FF.JiF(),
          ZF: () => FF.veF(),
          reserve: WF => FF.SeF(WF)
        }), this.worker = new hF(WF, {
          ptr: () => FF.qEF(),
          ZF: () => FF.kEF(),
          reserve: WF => FF.CeF(WF)
        }), this.cmd = new hF(WF, {
          ptr: () => FF.YiF(),
          ZF: () => FF.ZiF(),
          reserve: WF => FF.oiF(WF)
        })
      }
      reset(FF) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(FF)
      }
    }
    var PF = SF(38700),
      RF = SF(1943),
      iW = SF(3780),
      eF = SF(38798);
    const EF = "coreFrame",
      QF = "fatalStatus",
      rW = "otherCall",
      gW = "coreRings",
      tW = "netIn",
      TF = "abi",
      aW = "netOut",
      kW = "workerOut",
      qW = "worldgenHost",
      VF = "eventWalker",
      NF = "netEvent",
      DF = "envEvent",
      LF = "sharedTables",
      mW = "inputAction",
      OF = new Set([VF, NF, DF, mW, LF]),
      xW = "wasmMemory",
      ZF = "meshHost";

    function oF(FF, WF) {
      FF.forEachWorkerOut(((SF, AF, uF) => {
        if ((0, CF.Md)(SF)) try {
          var hF;
          null === (hF = WF.worldgen) || void 0 === hF || hF.take(SF, uF)
        } catch (dF) {
          FF.crash(qW, dF)
        } else try {
          var bW;
          null === (bW = WF.mesh) || void 0 === bW || bW.take(SF, AF, uF)
        } catch (dF) {
          FF.crash(ZF, dF)
        }
      }))
    }
    const YF = 1048576;

    function MF(FF, WF) {
      let SF = !1;
      const CF = () => {
        SF = !1, WF()
      };
      return () => {
        !SF && FF.cursor >= YF && (SF = !0, queueMicrotask(CF))
      }
    }
    const cW = new Set([QF, rW, qW, ZF]);

    function GF(FF) {
      return OF.has(FF.site) ? FF.error instanceof WebAssembly.RuntimeError || (0, AF.m)(FF.error) : !cW.has(FF.site) && FF.error instanceof Error
    }
    const zW = "events",
      IF = [],
      fF = "terrainTextures",
      yW = "sunShadowTextures",
      sF = new TextDecoder;

    function nF(FF, WF) {
      const {
        site: SF,
        error: AF,
        header: uF
      } = FF, hF = uF ? (0, CF.Jd)(uF.lastError) : "noFrame", bW = `CORE-${SF===QF?hF:SF}`, dF = null === AF || void 0 === AF ? "" : ` ${(0,PF.e)(AF)}`, RF = {
        site: SF,
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return uF && (RF.status = String(uF.status), RF.lastError = hF, RF.lastErrorCode = String(uF.lastError), RF.lastErrorDetail = String(uF.lastErrorDetail), RF.errorCount = String(uF.errorCount), RF.frameIndex = String(uF.frameIndex), RF.tickIndex = String(uF.tickIndex)), {
        code: bW,
        message: `core ${SF}, last error ${hF};${dF}`,
        details: RF
      }
    }
    class HF {
      constructor(FF, WF, SF) {
        this.core = FF, this.memory = WF, this.handlers = SF, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: IF,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new dF(FF, WF)
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
      framePaces(FF) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.fiF(FF)
        } catch (WF) {
          return this.crash(EF, WF), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(FF, WF) {
        var SF;
        let uF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: hF,
          net: bW,
          worker: dF,
          cmd: PF
        } = this.rings, RF = bW.cursor, rW = WF && !this.drawsHeld;
        let gW = CF.J.Fatal;
        const TF = PF.cursor;
        let aW = null;
        try {
          const WF = (rW ? CF.W.Draws : 0) | (uF ? CF.W.NetAll : 0);
          gW = (0, eF.c)((() => this.core.frame(FF, hF.cursor, bW.cursor, dF.cursor, WF, TF)))
        } catch (cW) {
          aW = {
            error: cW
          }
        }
        const kW = null === (SF = this.gameHost) || void 0 === SF ? void 0 : SF.takeFault();
        this.rings.reset(this.stopped || null !== aW || void 0 !== kW ? PF.cursor : TF);
        const qW = null === aW && void 0 === kW ? this.headerView() : null,
          DF = null === qW ? null : (0, CF.de)(qW);
        null !== DF && (this.lastHeader = DF);
        const LF = null !== DF && gW !== CF.J.Fatal,
          mW = LF && null !== qW ? qW[CF.cb.NetInKept] : 0,
          OF = LF && mW <= RF && mW % 4 === 0 ? mW : null;
        var xW, ZF;
        null !== DF && null !== OF && gW === CF.J.Errors && (null === (xW = (ZF = this.handlers).onErrors) || void 0 === xW || xW.call(ZF, DF));
        const oF = null === OF ? IF : this.readEvents(RF);
        if (bW.consume(RF - (null !== OF && void 0 !== OF ? OF : 0)), this.netKept = null !== OF && void 0 !== OF ? OF : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== aW) return this.crash(EF, void 0 === kW || kW instanceof AF.c ? aW.error : kW), !1;
        if (void 0 !== kW || null === DF) return this.crashOn(EF, kW), !1;
        if (this.lastFrameKind = (0, iW.g)(rW, this.headerView()[CF.cb.FrameDraw]), gW === CF.J.Fatal) return this.crash(QF, null), !1;
        if (null === OF) return this.crash(tW, `the core kept ${mW} of ${RF} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const FF = this.frameEvents,
            WF = this.headerView();
          FF.ptr = WF[CF.cb.EventsPtr], FF.len = WF[CF.cb.EventsLen], FF.net = oF, FF.kind = this.lastFrameKind;
          try {
            this.eventWalker(FF)
          } catch (cW) {
            return this.crashOn(VF, cW), !1
          }
          return this.handEnvEvents()
        }
        for (const CF of oF) {
          if (this.stopped) return !1;
          try {
            var YF, MF;
            null === (YF = (MF = this.handlers).onNetEvent) || void 0 === YF || YF.call(MF, CF)
          } catch (cW) {
            return this.crashOn(NF, cW), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const CF of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var FF, WF;
            null === (FF = (WF = this.handlers).onEnvEvent) || void 0 === FF || FF.call(WF, CF)
          } catch (SF) {
            return this.crashOn(DF, SF), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(FF) {
        this.eventWalker = FF
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: FF
        } = this.rings;
        try {
          const WF = this.unsentUiPrefs;
          WF && FF.writeRecord(CF.hb.UiPrefs, 0, WF.nametagCutDistance, 0, (0, CF.he)(WF)) && (this.unsentUiPrefs = null);
          const SF = this.unsentEnvPrefs;
          SF && FF.writeRecord(CF.hb.EnvPrefs, (0, CF.Ld)(SF), SF.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const AF = this.unsentLookPrefs;
          AF && FF.writeRecord(CF.hb.Sensitivity, 0, AF.mouse, AF.touch, (0, RF.m)(AF.fovPercent)) && (this.unsentLookPrefs = null);
          let uF = 0;
          for (const {
              aux: CF,
              payload: hF
            }
            of this.unsentOptions) {
            if (!FF.writeOptions(CF, hF)) {
              if (FF.cursor > 0) break;
              this.optionsDropped++
            }
            uF++
          }
          uF > 0 && this.unsentOptions.splice(0, uF)
        } catch (WF) {
          return this.crash(gW, WF), !1
        }
        return !0
      }
      setHoldDraws(FF) {
        this.drawsHeld = FF
      }
      setUiPrefs(FF) {
        this.unsentUiPrefs = {
          ...FF
        }
      }
      setEnvPrefs(FF) {
        this.unsentEnvPrefs = {
          ...FF
        }
      }
      setLookPrefs(FF) {
        this.unsentLookPrefs = {
          ...FF
        }
      }
      queueOptions(FF, WF) {
        WF.byteLength > CF.Ib.PayloadMaxBytes ? this.optionsDropped++ : this.unsentOptions.push({
          aux: FF,
          payload: WF
        })
      }
      setChunkCap(FF) {
        return this.callCore("setChunkCap", null, (WF => WF.PeF(FF)))
      }
      shedMemory(FF) {
        const WF = this.callCore("shedMemory", null, (WF => WF.rEF(FF)));
        return 0 === WF ? null : WF
      }
      addDistanceInUse() {
        const FF = this.callCore("addDistanceInUse", null, (FF => FF.NiF()));
        return 0 === FF ? null : FF
      }
      setChunkAddDistance(FF, WF) {
        return this.callCore("setChunkAddDistance", !1, (SF => SF.deF(FF, WF)))
      }
      setGameHost(FF) {
        return this.callCore("setGameHost", !1, (WF => (WF.IiF(FF), this.gameHost = FF, !0)))
      }
      setAntiCheatProbes(FF) {
        return this.callCore("setAntiCheatProbes", !1, (WF => WF.heF(FF)))
      }
      setAmbientOcclusion(FF) {
        this.callCore("setAmbientOcclusion", void 0, (WF => {
          WF.ueF(FF)
        }))
      }
      setPoseLod(FF) {
        this.callCore("setPoseLod", void 0, (WF => {
          WF.iEF(FF)
        }))
      }
      setTextureLayers(FF) {
        return this.callCore("setTextureLayers", !1, (WF => WF.QeF(FF)))
      }
      setBlockColours(FF) {
        let {
          blocks: WF,
          counts: SF,
          values: CF
        } = FF;
        return this.callCore("setBlockColours", !1, (FF => FF.PPF(WF, SF, CF)))
      }
      terrainTextureNames() {
        return this.callCore(fF, [], (FF => FF.aEF()))
      }
      setTerrainTextures(FF, WF, SF) {
        return this.callCore(fF, !1, (CF => CF.dPF(FF, WF, SF)))
      }
      setShaderPack(FF, WF, SF, CF, AF, uF) {
        return this.callCore("setShaderPack", !1, (hF => {
          var bW, dF;
          return null !== (bW = null === (dF = hF.EPF) || void 0 === dF ? void 0 : dF.call(hF, FF, WF, SF, CF, AF, uF)) && void 0 !== bW && bW
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(yW, null, (FF => {
          var WF, SF;
          return null !== (WF = null === (SF = FF.gEF) || void 0 === SF ? void 0 : SF.call(FF)) && void 0 !== WF ? WF : null
        }))
      }
      setSunShadowTexture(FF, WF, SF, CF, AF) {
        this.callCore(yW, void 0, (uF => {
          var hF;
          null === (hF = uF.EeF) || void 0 === hF || hF.call(uF, FF, WF, SF, CF, AF)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(yW, [], (FF => {
          var WF, SF;
          return null !== (WF = null === (SF = FF.tEF) || void 0 === SF ? void 0 : SF.call(FF)) && void 0 !== WF ? WF : []
        }))
      }
      callCore(FF, WF, SF) {
        if (this.stopped) return WF;
        try {
          return SF(this.core)
        } catch (CF) {
          return this.crash(FF, CF), WF
        }
      }
      readEvents(FF) {
        this.netOffsets.length = 0;
        const WF = this.headerView(),
          SF = WF[CF.cb.EventsPtr],
          AF = WF[CF.cb.EventsLen];
        if (this.envEvents.length = 0, 0 === AF) return IF;
        const uF = [],
          hF = this.memory().buffer;
        if (SF % 4 !== 0 || SF + AF > hF.byteLength) return this.crash(zW, `events of ${AF} bytes at ${SF} outside ${hF.byteLength} bytes of memory`), IF;
        const bW = new DataView(hF, SF, AF),
          dF = this.rings.net,
          PF = (WF, SF) => WF + SF <= FF ? dF.copyWritten(WF, SF) : null;
        let RF = 0;
        for (; RF < AF;) {
          const FF = RF + CF.Q,
            WF = FF <= AF ? bW.getUint32(RF, !0) : -1,
            dF = WF >>> 16;
          if (WF < 0 || dF > AF - FF) return this.crash(zW, `event record at ${RF} overruns its ${AF} bytes`), IF;
          const LF = 65535 & WF,
            mW = WF => bW.getUint32(FF + 4 * WF, !0);
          if (LF === CF.R.RawMessage) {
            const FF = dF >= CF.lc.BYTES ? 65535 & mW(1) : -1,
              WF = FF === CF.lc.STRING_TYPE,
              SF = dF === (WF ? CF.lc.STRING_TYPE_BYTES : CF.lc.BYTES) ? PF(mW(2), mW(3)) : null,
              AF = WF && SF ? PF(mW(4), mW(5)) : null;
            if (!SF || WF && !AF) return this.crash(zW, `RawMessage at ${RF} of ${dF} bytes names bytes outside net-in`), IF;
            this.netOffsets.push(RF), uF.push({
              type: "message",
              conn: mW(0),
              rb: FF,
              payloadKind: mW(1) >>> 16,
              payload: SF,
              stringType: AF ? sF.decode(AF) : null
            })
          } else if (LF === CF.R.CoreErrors) {
            var iW, eF;
            const FF = dF >= 4 ? mW(0) : -1;
            if (FF < 0 || FF > CF.H.PAIRS_MAX || dF !== 4 * (CF.H.FIXED_WORDS + CF.H.PAIR_WORDS * FF)) return this.crash(zW, `CoreErrors at ${RF} of ${dF} bytes`), IF;
            const WF = [];
            for (let SF = 0; SF < FF; SF++) WF.push({
              code: mW(1 + 2 * SF),
              detail: mW(2 + 2 * SF)
            });
            null === (iW = (eF = this.handlers).onCoreErrors) || void 0 === iW || iW.call(eF, WF, mW(1 + 2 * FF))
          } else if (LF === CF.R.RenderReload) {
            var EF, QF;
            if (dF !== CF.tc.BYTES) return this.crash(zW, `RenderReload at ${RF} of ${dF} bytes`), IF;
            null === (EF = (QF = this.handlers).onRenderReload) || void 0 === EF || EF.call(QF, mW(0), mW(1))
          } else if (LF === CF.R.Images) {
            var rW, gW;
            null === (rW = (gW = this.handlers).onImages) || void 0 === rW || rW.call(gW, new Uint8Array(hF.slice(SF + FF, SF + FF + dF)))
          } else if (LF === CF.R.ModelRequests)
            for (let SF = 0; SF < dF >>> 2; SF++) {
              var tW, TF;
              null === (tW = (TF = this.handlers).onModelRequest) || void 0 === tW || tW.call(TF, mW(SF))
            } else if (LF === CF.R.ModelTaken) {
              var aW, kW;
              if (dF < 4) return this.crash(zW, `ModelTaken at ${RF} of ${dF} bytes`), IF;
              const FF = new Uint32Array((dF >>> 2) - 1);
              for (let WF = 0; WF < FF.length; WF++) FF[WF] = mW(1 + WF);
              null === (aW = (kW = this.handlers).onModelTaken) || void 0 === aW || aW.call(kW, mW(0), FF)
            } else if (LF === CF.R.TerrainTexturesWanted) {
            var qW, VF;
            if (0 !== dF) return this.crash(zW, `TerrainTexturesWanted at ${RF} of ${dF} bytes`), IF;
            null === (qW = (VF = this.handlers).onTerrainTexturesWanted) || void 0 === qW || qW.call(VF)
          } else if (LF === CF.R.KeepAliveDue) {
            var NF, DF;
            if (dF > CF.lb) return this.crash(zW, `KeepAliveDue at ${RF} of ${dF} bytes`), IF;
            null === (NF = (DF = this.handlers).onKeepAlive) || void 0 === NF || NF.call(DF, new Uint8Array(hF, SF + FF, dF).slice())
          } else if (LF === CF.R.ConnectionState) {
            if (dF !== CF.y) return this.crash(zW, `ConnectionState at ${RF} of ${dF} bytes`), IF;
            this.netOffsets.push(RF), uF.push({
              type: "connection",
              conn: mW(0),
              phase: mW(1),
              code: 0 | mW(2)
            })
          } else if (LF === CF.R.EnvLighting || LF === CF.R.SkyImages) {
            if (dF !== (LF === CF.R.EnvLighting ? CF.M : CF.Oc)) return this.crash(zW, `event ${LF} at ${RF} of ${dF} bytes`), IF;
            this.envEvents.push({
              kind: LF,
              payload: new Uint8Array(hF.slice(SF + FF, SF + FF + dF))
            })
          }
          RF = FF + (0, CF.$d)(dF)
        }
        return uF
      }
      forEachNetOut(FF) {
        this.forEachOut(aW, "net-out", CF.cb.NetOutPtr, CF.cb.NetOutLen, CF.Cb, 0, ((WF, SF, AF, uF) => {
          const hF = (0, CF.Sd)(SF);
          hF === CF.Gb.Frame ? FF((0, CF.Od)(SF), AF) : this.crash(aW, `net-out record at ${uF} is kind ${hF}, not a frame`)
        }))
      }
      forEachWorkerOut(FF) {
        this.forEachOut(kW, "worker-out", CF.cb.WorkerOutPtr, CF.cb.WorkerOutLen, CF.cd, 4, ((WF, SF, AF, uF) => {
          const hF = 255 & WF,
            bW = hF === CF.yd.Init ? this.initOf(AF, uF) : AF;
          null !== bW && FF(hF, WF >>> 8 & 16777215, bW)
        }))
      }
      initOf(FF, WF) {
        const SF = this.memory().buffer;
        if (FF.byteLength !== CF.db) return this.crash(kW, `worker-out Init record at ${WF} is ${FF.byteLength} bytes, not a view`), null;
        const AF = new DataView(FF.buffer, FF.byteOffset, CF.db),
          uF = AF.getUint32(0, !0),
          hF = AF.getUint32(4, !0);
        return uF + hF > SF.byteLength ? (this.crash(kW, `worker-out Init record at ${WF} names ${hF} bytes at ${uF} outside ${SF.byteLength} bytes of memory`), null) : new Uint8Array(SF, uF, hF)
      }
      forEachOut(FF, WF, SF, AF, uF, hF, bW) {
        if (this.stopped || null === this.lastHeader) return;
        const dF = this.headerView(),
          PF = dF[SF],
          RF = dF[AF];
        if (0 === RF) return;
        const iW = this.memory().buffer;
        if (PF % 4 !== 0 || PF + RF > iW.byteLength) return void this.crash(FF, `${WF} of ${RF} bytes at ${PF} outside ${iW.byteLength} bytes of memory`);
        const eF = new DataView(iW, PF, RF);
        let EF = 0;
        for (; EF < RF;) {
          const SF = EF + uF,
            AF = SF <= RF ? eF.getUint32(EF + hF, !0) : -1;
          if (AF < 0 || AF > RF - SF) return void this.crash(FF, `${WF} record at ${EF} overruns its ${RF} bytes`);
          if (bW(eF.getUint32(EF, !0), eF.getUint32(EF + 4, !0), new Uint8Array(iW, PF + SF, AF), EF), this.stopped) return;
          EF = SF + (0, CF.$d)(AF)
        }
      }
      forEachEvent(FF) {
        if (this.stopped || null === this.lastHeader) return;
        const WF = this.headerView(),
          SF = WF[CF.cb.EventsPtr],
          AF = WF[CF.cb.EventsLen];
        if (0 === AF) return;
        const uF = this.memory().buffer;
        if (SF % 4 !== 0 || SF + AF > uF.byteLength) return void this.crash(zW, `events of ${AF} bytes at ${SF} outside ${uF.byteLength} bytes of memory`);
        const hF = new DataView(uF, SF, AF);
        let bW = 0;
        for (; bW < AF;) {
          const WF = bW + CF.Q,
            SF = WF <= AF ? hF.getUint32(bW, !0) : -1,
            uF = SF >>> 16;
          if (SF < 0 || uF > AF - WF) return void this.crash(zW, `event record at ${bW} overruns its ${AF} bytes`);
          FF(65535 & SF, hF, WF, uF), bW = WF + (0, CF.$d)(uF)
        }
      }
      crashOn(FF, WF) {
        WF instanceof AF.c ? this.crash(zW, WF.message) : this.crash(FF, WF)
      }
      crash(FF, WF) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: FF,
          error: WF,
          header: this.lastHeader
        }))
      }
      headerWord(FF) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[FF]
      }
      headerView() {
        const FF = this.memory().buffer;
        return FF !== this.headerBuffer && (this.headerBuffer = FF, this.header = new Uint32Array(FF, this.core.kC(), CF._)), this.header
      }
    }
  },
  38860: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      e: () => PF,
      f: () => dF
    });
    var CF = SF(3793),
      AF = SF(1939),
      uF = SF(3812);
    let hF = !1,
      bW = !1;

    function dF(FF) {
      hF = !0;
      try {
        FF()
      } finally {
        hF = !1
      }
    }

    function PF(FF, WF) {
      if (hF) return !1;
      switch (FF) {
        case CF.D.MouseDown:
        case CF.D.MouseUp:
        case CF.D.TouchStart:
        case CF.D.TouchEnd:
        case CF.D.TouchCancel:
        case CF.D.TouchButton:
          return !0;
        case CF.D.KeyDown:
        case CF.D.KeyUp:
          return 0 === (WF & AF.h.Repeat) && !(0, uF.d)(document.activeElement);
        default:
          return !1
      }
    }

    function RF(FF) {
      bW || (bW = !0, queueMicrotask((() => {
        bW = !1, FF()
      })))
    }
  },
  38902: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    const CF = 2e3
  },
  38798: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      c: () => uF
    });
    var CF = SF(5597);
    let AF = null;

    function uF(FF) {
      AF = {
        scanned: !1
      };
      try {
        return FF()
      } finally {
        AF = null
      }
    }

    function hF() {
      const FF = AF;
      if (null === FF) return (0, CF.g)();
      const WF = (0, CF.g)(!FF.scanned);
      return FF.scanned = !0, WF
    }
  },
  38853: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      f: () => bW,
      h: () => iW,
      l: () => eF,
      n: () => QF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(2205),
      hF = SF(8178);

    function bW() {
      var FF;
      const WF = (SF = CF.b.get("clientEscMenuOptions"), AF = (0, uF.l)(), {
        sampleCount: SF.antiAliasing ? 4 : 1,
        n: (0, uF.w)(SF.pixelScale, AF),
        pixelated: (0, uF.t)(SF.pixelSmoothing)
      });
      var SF, AF;
      return WF.sampleCount > 1 && (0, hF.c)() && (WF.sampleCount = 1), WF.n = null !== (FF = (0, hF.l)()) && void 0 !== FF ? FF : WF.n, WF
    }
    let dF = null;
    const PF = new Set;

    function RF() {
      if (null === dF) {
        const FF = document.createElement("div");
        FF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", FF.setAttribute("aria-hidden", "true"), document.body.append(FF), dF = new uF.c(FF, (() => {
          for (const FF of PF) FF()
        }))
      }
      return dF
    }

    function iW(FF) {
      const WF = (0, uF.l)(),
        [SF, CF] = RF().size(WF);
      return (0, uF.i)(SF, CF, WF, FF.n)
    }

    function eF(FF) {
      const WF = (0, uF.l)(),
        [SF, CF] = RF().size(WF);
      if (SF <= 0 || CF <= 0) return null;
      const AF = (0, uF.i)(SF, CF, WF, bW().n);
      return (0, uF.g)(FF, AF), AF
    }

    function EF(FF, WF) {
      FF.style.imageRendering = (0, uF.G)(WF.pixelated)
    }

    function QF(FF, WF) {
      const SF = (0, AF.l)("appManagerUpdated|clientEscMenuOptions", (() => {
          EF(FF, bW()), WF()
        })),
        CF = (0, hF.w)(WF);
      return RF(), PF.add(WF), () => {
        SF(), CF(), PF.delete(WF)
      }
    }
  },
  38911: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      h: () => uF,
      i: () => AF
    });
    let CF = null;

    function AF(FF) {
      CF = FF
    }

    function uF(FF) {
      CF === FF && (CF = null)
    }

    function hF() {
      var FF;
      null === (FF = CF) || void 0 === FF || FF()
    }
  },
  38883: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => PF,
      i: () => uF,
      k: () => iW,
      o: () => RF,
      q: () => eF
    });
    var CF = SF(2906);
    class AF extends Error {
      constructor(FF, WF, SF) {
        super(`${"fetch"===FF?"fetching":"decoding"} ${WF} failed`, SF), this.stage = FF, this.source = WF, this.name = "ShellImageError"
      }
    }
    async function uF(FF) {
      let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.A,
        uF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof FF) try {
        WF = await SF(FF)
      } catch (hF) {
        throw new AF("fetch", FF, {
          cause: hF
        })
      } else WF = FF;
      try {
        const FF = new Blob([WF.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(FF, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: uF
        })
      } catch (hF) {
        throw new AF("decode", "string" === typeof FF ? FF : `${WF.byteLength} bytes`, {
          cause: hF
        })
      }
    }
    let hF = null;
    const bW = new Map;
    let dF = 1;

    function PF(FF) {
      if (hF = FF, null !== FF) {
        for (const [WF, SF] of bW) FF.uPF(WF, SF);
        bW.clear()
      }
    }

    function RF(FF) {
      const WF = dF++;
      return hF ? hF.uPF(WF, FF) : bW.set(WF, FF), WF
    }
    async function iW(FF, WF, SF) {
      const CF = await uF(FF, WF, SF);
      return {
        id: RF(CF),
        width: CF.width,
        height: CF.height
      }
    }

    function eF(FF) {
      var WF;
      const SF = bW.get(FF);
      if (SF) return SF.close(), void bW.delete(FF);
      null === (WF = hF) || void 0 === WF || WF.hPF(FF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);