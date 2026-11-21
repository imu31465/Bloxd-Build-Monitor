export const id = 296;
export const ids = [296];
export const modules = {
  41101: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => bQ,
      f: () => eQ,
      j: () => YQ,
      m: () => xQ,
      q: () => GQ,
      r: () => MQ
    });
    var LQ = wQ(41061);
    var qQ = "Babylon Lite v1.32.0",
      oQ = wQ(41108);

    function DQ(QQ) {
      return "clientWidth" in QQ
    }
    var kQ = 1;

    function vQ(QQ, FQ, wQ) {
      const vQ = FQ.getContext("webgpu");
      vQ || (0, LQ.e)(54), DQ(FQ) && FQ.setAttribute("data-engine", qQ);
      const mQ = wQ?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        uQ = wQ?.srgb ? (HQ = mQ).endsWith("-srgb") ? HQ : `${HQ}-srgb` : mQ;
      var HQ;
      const bQ = wQ?.alphaMode ?? "opaque";
      vQ.configure({
        device: QQ._device,
        format: mQ,
        alphaMode: bQ,
        viewFormats: [uQ]
      });
      const YQ = 1 === wQ?.msaaSamples ? 1 : 4,
        xQ = (0, oQ.c)({
          lbl: "swapchain",
          format: uQ,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return xQ._eager = !0, {
        engine: QQ,
        canvas: FQ,
        format: uQ,
        msaaSamples: YQ,
        scRT: xQ,
        maxDevicePixelRatio: wQ?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: kQ++,
        _context: vQ,
        _configureFormat: mQ,
        _alphaMode: bQ,
        _renderingContexts: []
      }
    }

    function mQ(QQ) {
      const FQ = QQ._context.getCurrentTexture(),
        wQ = QQ.scRT;
      wQ._colorTexture = FQ, wQ._colorView = FQ.createView({
        format: QQ.format
      }), wQ._width = FQ.width, wQ._height = FQ.height
    }

    function uQ(QQ) {
      const FQ = QQ.canvas;
      if (!DQ(FQ)) return;
      const wQ = QQ._w ?? FQ.clientWidth,
        LQ = QQ._h ?? FQ.clientHeight;
      if (!(wQ > 0 && LQ > 0)) return;
      const qQ = Math.min(globalThis.devicePixelRatio || 1, QQ.maxDevicePixelRatio);
      HQ(QQ, wQ * qQ | 0, LQ * qQ | 0)
    }

    function HQ(QQ, FQ, wQ) {
      const LQ = QQ.canvas,
        qQ = 0 | FQ,
        oQ = 0 | wQ;
      if (qQ > 0 && oQ > 0 && (qQ !== LQ.width || oQ !== LQ.height)) {
        LQ.width = qQ, LQ.height = oQ, QQ.scRT._width = qQ, QQ.scRT._height = oQ;
        for (const FQ of QQ._renderingContexts) FQ._resize?.()
      }
    }
    var bQ = 0;

    function YQ(QQ, FQ) {
      return -1 !== QQ._renderingContexts.indexOf(FQ)
    }

    function xQ(QQ, FQ) {
      return -1 === QQ._renderingContexts.indexOf(FQ) && (QQ._renderingContexts.push(FQ), !0)
    }
    var AQ = null;
    var tQ = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function eQ(QQ, FQ) {
      const oQ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...AQ ? AQ() : {}
      });
      oQ || (0, LQ.e)(47);
      const DQ = AQ?.deviceFeatures?.(oQ, FQ) ?? function(QQ) {
          return tQ.filter((FQ => QQ.features.has(FQ)))
        }(oQ),
        kQ = await oQ.requestDevice({
          requiredFeatures: DQ,
          requiredLimits: FQ?.requiredLimits
        });
      console.log(`${qQ} - WebGPU engine`);
      const HQ = !!FQ?.useHighPrecisionMatrix,
        bQ = !!FQ?.useFloatingOrigin;
      if (bQ && !HQ && (0, LQ.e)(48), HQ) {
        const {
          allocateF64Mat4: QQ
        } = await wQ.e(350).then((() => wQ(60716)));
        0
      }
      let YQ, xQ, eQ, MQ;
      if (bQ) {
        const [{
          wrapRenderableForFO: QQ,
          lightFoVersion: FQ,
          applyLightFoOffset: LQ
        }, {
          makePackMeshWorld: qQ
        }] = await Promise.all([wQ.e(351).then((() => wQ(60719))), wQ.e(352).then((() => wQ(60724)))]);
        YQ = QQ, xQ = qQ, eQ = FQ, MQ = LQ
      }
      const GQ = {
          _device: kQ
        },
        pQ = [GQ];
      return Object.assign(GQ, {
        engine: GQ,
        surfaces: pQ,
        _surfaces: pQ,
        _device: kQ,
        _options: FQ,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: HQ,
        useFloatingOrigin: bQ,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: YQ,
        _makePackMeshWorld: xQ,
        _lightFoVersion: eQ,
        _applyLightFoOffset: MQ
      }, vQ(GQ, QQ, FQ)), uQ(GQ), mQ(GQ), GQ
    }

    function MQ(QQ, FQ, wQ) {
      HQ(QQ, FQ, wQ)
    }

    function GQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.surfaces;
      if (wQ !== QQ.surfaces)
        for (let qQ = wQ.length; qQ--;) wQ[qQ].engine !== QQ && (0, LQ.e)(49);
      pQ(QQ, FQ, wQ)
    }

    function pQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ._surfaces,
        LQ = 0;
      for (let oQ = wQ.length; oQ--;) LQ += wQ[oQ]._renderingContexts.length;
      if (!LQ) return QQ.drawCallCount = 0, QQ._flushGpuRetirements?.(QQ);
      const qQ = QQ._device.createCommandEncoder({
        label: "frame"
      });
      QQ._currentEncoder = qQ, QQ._currentDelta = FQ;
      try {
        QQ._gpuTimerBegin?.(qQ), LQ = 0;
        for (let QQ = 0; QQ < wQ.length; QQ++) {
          const FQ = wQ[QQ];
          FQ._capturePreFrame?.(FQ), mQ(FQ);
          const qQ = FQ._renderingContexts;
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const FQ = qQ[QQ];
            FQ._update(), LQ += FQ._drawCallsPre + FQ._record()
          }
        }
        const FQ = QQ._currentEncoder;
        for (let QQ = 0; QQ < wQ.length; QQ++) {
          const LQ = wQ[QQ];
          LQ._captureService?.(LQ, FQ)
        }
        QQ._gpuTimerEnd?.(FQ), QQ._cbs[0] = FQ.finish(), QQ._device.queue.submit(QQ._cbs), QQ._flushGpuRetirements?.(QQ), QQ.drawCallCount = LQ, QQ._gpuTimerResolve?.()
      } finally {
        QQ._currentEncoder = void 0
      }
    }
  },
  41067: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => oQ,
      g: () => LQ
    });
    var LQ = globalThis.GPUTextureUsage,
      qQ = globalThis.GPUBufferUsage,
      oQ = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41129: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      qQ(QQ.splice(0))
    }

    function qQ(QQ) {
      for (const wQ of QQ) try {
        wQ()
      } catch (FQ) {
        console.error("GPU resource retirement failed.", FQ)
      }
    }

    function oQ(QQ, FQ) {
      QQ._flushGpuRetirements ??= DQ, (QQ._retirements ??= []).push(FQ)
    }

    function DQ(QQ) {
      const FQ = QQ._retirements;
      if (!FQ) return;
      QQ._retirements = null;
      const wQ = QQ._retiring ??= new Set;
      wQ.add(FQ), queueMicrotask((() => {
        QQ._device.queue.onSubmittedWorkDone().then((() => {
          wQ.delete(FQ), LQ(FQ)
        })).catch((() => {}))
      }))
    }
    wQ.d(FQ, {
      e: () => oQ
    })
  },
  41108: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      e: () => DQ,
      h: () => kQ
    });
    var LQ = wQ(41067);

    function qQ(QQ) {
      const FQ = QQ.size;
      return "canvas" in FQ ? FQ.canvas : FQ
    }

    function oQ(QQ) {
      return {
        _descriptor: QQ,
        _resolveSize: qQ,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function DQ(QQ, FQ) {
      if (QQ._eager) return void QQ._syncEager?.(FQ);
      kQ(QQ);
      const wQ = QQ._descriptor,
        {
          width: oQ,
          height: DQ
        } = (QQ._resolveSize ?? qQ)(wQ);
      QQ._width = oQ, QQ._height = DQ;
      const vQ = FQ._device;
      wQ.format && (QQ._colorTexture = vQ.createTexture({
        label: wQ.lbl,
        size: {
          width: oQ,
          height: DQ
        },
        format: wQ.format,
        sampleCount: wQ.samples,
        usage: LQ.g.RENDER_ATTACHMENT | LQ.g.TEXTURE_BINDING | LQ.g.COPY_SRC | LQ.g.COPY_DST
      }), QQ._colorView = QQ._colorTexture.createView()), wQ.dFormat && (QQ._depthTexture = vQ.createTexture({
        label: wQ.lbl,
        size: {
          width: oQ,
          height: DQ
        },
        format: wQ.dFormat,
        sampleCount: wQ.samples,
        usage: LQ.g.RENDER_ATTACHMENT | LQ.g.TEXTURE_BINDING
      }), QQ._depthView = QQ._depthTexture.createView())
    }

    function kQ(QQ) {
      if (!QQ || QQ._eager && !QQ._disposeAttachments) return;
      const FQ = QQ._colorTexture,
        wQ = QQ._depthTexture;
      if (QQ._colorTexture = QQ._depthTexture = null, QQ._colorView = QQ._depthView = null, QQ._width = QQ._height = 0, QQ._disposeAttachments) QQ._disposeAttachments(FQ, wQ);
      else try {
        FQ?.destroy()
      } finally {
        !1 !== QQ._ownsDepthTexture && wQ?.destroy()
      }
    }
  },
  41122: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      f: () => qQ,
      i: () => oQ
    });
    var LQ = Float32Array,
      qQ = Float64Array,
      oQ = Uint32Array
  },
  41137: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    var LQ = 16
  },
  41061: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = null;

    function qQ(QQ) {
      for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), qQ = 1; qQ < FQ; qQ++) wQ[qQ - 1] = arguments[qQ];
      const oQ = new Error(LQ?.(QQ, wQ) ?? `#${QQ}`);
      throw oQ.lite = wQ, oQ
    }
  },
  41086: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ
    });
    var LQ = wQ(41075);

    function qQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wQ = FQ.compare,
        qQ = FQ.lodMinClamp ?? 0,
        oQ = FQ.lodMaxClamp ?? 32,
        DQ = void 0 !== wQ || 0 !== qQ || 32 !== oQ ? `${wQ??""}:${qQ}:${oQ}` : "";
      return (0, LQ.e)(QQ, FQ, DQ)
    }
  },
  41073: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = null;

    function qQ(QQ) {
      const FQ = LQ ??= new WeakMap;
      FQ.set(QQ, (FQ.get(QQ) ?? 0) + 1)
    }

    function oQ(QQ) {
      qQ(QQ.texture)
    }
  },
  41075: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    var LQ = null,
      qQ = "nearest",
      oQ = "clamp-to-edge",
      DQ = {
        minFilter: qQ,
        magFilter: qQ,
        mipmapFilter: qQ,
        addressModeU: oQ,
        addressModeV: oQ,
        addressModeW: oQ,
        maxAnisotropy: 1
      };

    function kQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const qQ = QQ._device,
        oQ = LQ ??= new WeakMap;
      let kQ = oQ.get(qQ);
      kQ || oQ.set(qQ, kQ = new Map);
      let vQ = wQ;
      for (const LQ in DQ) {
        const QQ = LQ;
        vQ += `:${FQ[QQ]??DQ[QQ]}`
      }
      let mQ = kQ.get(vQ);
      return mQ || kQ.set(vQ, mQ = qQ.createSampler(FQ)), mQ
    }
  },
  41117: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => lQ,
      h: () => XQ
    });
    var LQ = wQ(41108),
      qQ = wQ(41101);

    function oQ(QQ, FQ) {
      FQ._passes.length = 0, QQ._currentProcessedTask = FQ;
      try {
        FQ.record()
      } finally {
        QQ._currentProcessedTask = null
      }
    }
    var DQ = wQ(41122);

    function kQ(QQ) {
      const FQ = QQ.worldMatrixVersion;
      if (QQ._viewVer === FQ) return QQ._viewCache;
      const wQ = QQ._viewCache,
        LQ = QQ.worldMatrix,
        qQ = QQ._useFloatingOrigin,
        oQ = qQ ? 0 : LQ[12],
        DQ = qQ ? 0 : LQ[13],
        kQ = qQ ? 0 : LQ[14];
      return wQ[0] = LQ[0], wQ[1] = LQ[4], wQ[2] = LQ[8], wQ[3] = 0, wQ[4] = LQ[1], wQ[5] = LQ[5], wQ[6] = LQ[9], wQ[7] = 0, wQ[8] = LQ[2], wQ[9] = LQ[6], wQ[10] = LQ[10], wQ[11] = 0, wQ[12] = -(LQ[0] * oQ + LQ[1] * DQ + LQ[2] * kQ), wQ[13] = -(LQ[4] * oQ + LQ[5] * DQ + LQ[6] * kQ), wQ[14] = -(LQ[8] * oQ + LQ[9] * DQ + LQ[10] * kQ), wQ[15] = 1, QQ._viewVer = FQ, wQ
    }
    var vQ = null;

    function mQ(QQ) {
      return QQ._projFov === QQ.fov && QQ._projNear === QQ.nearPlane && QQ._projFar === QQ.farPlane || (QQ._projFov = QQ.fov, QQ._projNear = QQ.nearPlane, QQ._projFar = QQ.farPlane, QQ._projRev = (QQ._projRev ?? 0) + 1), QQ.worldMatrixVersion + (QQ._projRev ?? 0)
    }

    function uQ(QQ, FQ) {
      const wQ = mQ(QQ);
      if (QQ._projVer === wQ && QQ._projAspect === FQ) return QQ._projCache;
      const LQ = QQ._projCache;
      return null !== vQ && QQ.ortho ? vQ(QQ, FQ, LQ) : function(QQ, FQ, wQ, LQ, qQ) {
        const oQ = 1 / Math.tan(.5 * FQ),
          DQ = qQ - LQ;
        QQ[0] = oQ / wQ, QQ[5] = oQ, QQ[10] = -LQ / DQ, QQ[11] = 1, QQ[14] = qQ * LQ / DQ
      }(LQ, QQ.fov, FQ, QQ.nearPlane, QQ.farPlane), QQ._projVer = wQ, QQ._projAspect = FQ, LQ
    }
    var HQ = wQ(41067);

    function bQ(QQ, FQ, wQ) {
      return QQ._device.createBuffer({
        label: wQ,
        size: (LQ = FQ, qQ = 16, Math.ceil(LQ / qQ) * qQ),
        usage: HQ.d.UNIFORM | HQ.d.COPY_DST
      });
      var LQ, qQ
    }
    var YQ = wQ(41129),
      xQ = null;

    function AQ(QQ) {
      const FQ = QQ._device,
        wQ = xQ ??= new WeakMap;
      let LQ = wQ.get(FQ);
      return LQ || (LQ = FQ.createBindGroupLayout({
        label: "lA",
        entries: [{
          binding: 0,
          visibility: HQ.e.VERTEX | HQ.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: HQ.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), wQ.set(FQ, LQ)), LQ
    }

    function tQ(QQ, FQ, wQ) {
      const LQ = QQ._device,
        qQ = bQ(QQ, FQ.byteLength, wQ);
      try {
        LQ.queue.writeBuffer(qQ, 0, FQ.buffer, FQ.byteOffset, FQ.byteLength)
      } catch (oQ) {
        throw qQ.destroy(), oQ
      }
      return qQ
    }
    var eQ = wQ(41137),
      MQ = new DQ.i(1),
      GQ = new DQ.b(MQ.buffer);

    function pQ(QQ) {
      let FQ = 0;
      for (const wQ of QQ) FQ += wQ._lightVersion ?? 0;
      return FQ
    }

    function cQ(QQ, FQ) {
      QQ.fill(0);
      let wQ = 0;
      for (const LQ of FQ) {
        if (wQ >= eQ.c) break;
        LQ._writeLightUbo && (LQ._writeLightUbo(QQ, 4 + 16 * wQ), wQ++)
      }
      MQ[0] = wQ, QQ[0] = GQ[0]
    }

    function CQ(QQ, FQ) {
      let wQ = FQ._lightGpuState;
      const LQ = 16 + 16 * eQ.c * 4;
      if (wQ && wQ._byteSize === LQ) return wQ;
      const qQ = !wQ;
      wQ?._buffer.destroy();
      const oQ = new DQ.b(LQ / 4);
      return cQ(oQ, FQ.lights), QQ._applyLightFoOffset?.(oQ, FQ), wQ = {
        _buffer: tQ(QQ, oQ),
        _scratch: oQ,
        cV: pQ(FQ.lights) + (QQ._lightFoVersion?.(FQ) ?? 0),
        _listVersion: FQ._lightListVersion ?? 0,
        _lightCount: FQ.lights.length,
        _byteSize: LQ
      }, FQ._lightGpuState = wQ, qQ && FQ._disposables.push((() => {
        FQ._lightGpuState?._buffer.destroy(), FQ._lightGpuState = void 0
      })), wQ
    }

    function SQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qQ = FQ;
      if (0 === LQ && 16 === qQ.length) return void QQ.set(qQ, wQ);
      const oQ = LQ,
        DQ = wQ;
      QQ[DQ + 0] = qQ[oQ + 0], QQ[DQ + 1] = qQ[oQ + 1], QQ[DQ + 2] = qQ[oQ + 2], QQ[DQ + 3] = qQ[oQ + 3], QQ[DQ + 4] = qQ[oQ + 4], QQ[DQ + 5] = qQ[oQ + 5], QQ[DQ + 6] = qQ[oQ + 6], QQ[DQ + 7] = qQ[oQ + 7], QQ[DQ + 8] = qQ[oQ + 8], QQ[DQ + 9] = qQ[oQ + 9], QQ[DQ + 10] = qQ[oQ + 10], QQ[DQ + 11] = qQ[oQ + 11], QQ[DQ + 12] = qQ[oQ + 12], QQ[DQ + 13] = qQ[oQ + 13], QQ[DQ + 14] = qQ[oQ + 14], QQ[DQ + 15] = qQ[oQ + 15]
    }

    function iQ(QQ, FQ, wQ, LQ, qQ) {
      QQ.fill(0);
      const oQ = function(QQ, FQ) {
          const wQ = mQ(QQ);
          if (QQ._vpVer === wQ && QQ._vpAspect === FQ) return QQ._vpCache;
          const LQ = QQ._vpCache;
          return function(QQ, FQ, wQ, LQ, qQ, oQ) {
            const DQ = wQ[LQ],
              kQ = wQ[LQ + 1],
              vQ = wQ[LQ + 2],
              mQ = wQ[LQ + 3],
              uQ = wQ[LQ + 4],
              HQ = wQ[LQ + 5],
              bQ = wQ[LQ + 6],
              YQ = wQ[LQ + 7],
              xQ = wQ[LQ + 8],
              AQ = wQ[LQ + 9],
              tQ = wQ[LQ + 10],
              eQ = wQ[LQ + 11],
              MQ = wQ[LQ + 12],
              GQ = wQ[LQ + 13],
              pQ = wQ[LQ + 14],
              cQ = wQ[LQ + 15];
            let CQ = qQ[oQ],
              SQ = qQ[oQ + 1],
              iQ = qQ[oQ + 2],
              WQ = qQ[oQ + 3];
            QQ[FQ] = DQ * CQ + uQ * SQ + xQ * iQ + MQ * WQ, QQ[FQ + 1] = kQ * CQ + HQ * SQ + AQ * iQ + GQ * WQ, QQ[FQ + 2] = vQ * CQ + bQ * SQ + tQ * iQ + pQ * WQ, QQ[FQ + 3] = mQ * CQ + YQ * SQ + eQ * iQ + cQ * WQ, CQ = qQ[oQ + 4], SQ = qQ[oQ + 5], iQ = qQ[oQ + 6], WQ = qQ[oQ + 7], QQ[FQ + 4] = DQ * CQ + uQ * SQ + xQ * iQ + MQ * WQ, QQ[FQ + 5] = kQ * CQ + HQ * SQ + AQ * iQ + GQ * WQ, QQ[FQ + 6] = vQ * CQ + bQ * SQ + tQ * iQ + pQ * WQ, QQ[FQ + 7] = mQ * CQ + YQ * SQ + eQ * iQ + cQ * WQ, CQ = qQ[oQ + 8], SQ = qQ[oQ + 9], iQ = qQ[oQ + 10], WQ = qQ[oQ + 11], QQ[FQ + 8] = DQ * CQ + uQ * SQ + xQ * iQ + MQ * WQ, QQ[FQ + 9] = kQ * CQ + HQ * SQ + AQ * iQ + GQ * WQ, QQ[FQ + 10] = vQ * CQ + bQ * SQ + tQ * iQ + pQ * WQ, QQ[FQ + 11] = mQ * CQ + YQ * SQ + eQ * iQ + cQ * WQ, CQ = qQ[oQ + 12], SQ = qQ[oQ + 13], iQ = qQ[oQ + 14], WQ = qQ[oQ + 15], QQ[FQ + 12] = DQ * CQ + uQ * SQ + xQ * iQ + MQ * WQ, QQ[FQ + 13] = kQ * CQ + HQ * SQ + AQ * iQ + GQ * WQ, QQ[FQ + 14] = vQ * CQ + bQ * SQ + tQ * iQ + pQ * WQ, QQ[FQ + 15] = mQ * CQ + YQ * SQ + eQ * iQ + cQ * WQ
          }(LQ, 0, uQ(QQ, FQ), 0, kQ(QQ), 0), QQ._vpVer = wQ, QQ._vpAspect = FQ, LQ
        }(LQ, qQ),
        DQ = kQ(LQ),
        vQ = LQ.worldMatrix;
      SQ(QQ, oQ, 0), SQ(QQ, DQ, 16), FQ.useFloatingOrigin ? (QQ[32] = 0, QQ[33] = 0, QQ[34] = 0) : (QQ[32] = vQ[12], QQ[33] = vQ[13], QQ[34] = vQ[14]), QQ[87] = FQ.canvas.width;
      const HQ = wQ.imageProcessing;
      QQ[76] = HQ.exposure, QQ[77] = HQ.contrast, QQ[78] = wQ._envTextures?.lodGenerationScale ?? .8, QQ[79] = +HQ.toneMappingEnabled, QQ[37] = FQ.canvas.height
    }

    function WQ(QQ, FQ) {
      return {
        _renderables: QQ,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: FQ
      }
    }

    function RQ(QQ, FQ, wQ) {
      QQ.clr ??= !0;
      const qQ = QQ.rt._descriptor,
        oQ = QQ.depth?._descriptor,
        vQ = {
          _colorFormat: qQ.format,
          _depthStencilFormat: oQ?.dFormat ?? qQ.dFormat,
          _depthCompare: qQ.depthCompare ?? oQ?.depthCompare,
          _sampleCount: qQ.samples
        },
        uQ = {
          loadOp: "clear",
          storeOp: "store"
        },
        HQ = {
          ...WQ([], -1),
          name: QQ.name,
          _config: QQ,
          _ownsTargets: !QQ.sharedRt,
          engine: FQ,
          lA: wQ,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [uQ]
          },
          _colorAttachment: uQ,
          _sceneUBO: bQ(FQ, 368),
          _suData: new DQ.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: vQ,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (HQ._disposed) throw new Error("RenderTask has been disposed.");
            HQ._recordExplicit ? HQ._recordExplicit(HQ, !0) : rQ(HQ, !1 !== QQ.autoMirror ? wQ._renderables.slice() : HQ._renderables, !0)
          },
          execute: () => function(QQ, FQ, wQ) {
            if (!1 === QQ.enabled) return 0;
            const LQ = QQ.lA;
            ! function(QQ, FQ, wQ) {
              const LQ = QQ.lA;
              !1 !== QQ._config.autoMirror && QQ._lastVersion !== LQ._renderableVersion && rQ(QQ, LQ._renderables.slice());
              UQ(QQ, FQ);
              const qQ = QQ._updateContext,
                oQ = QQ._config.cam ?? LQ.camera;
              wQ._colorFormat && (QQ._config._skipClusteredLights || LQ._clusteredLightUpdater?.(oQ, qQ.targetWidth, qQ.targetHeight), function(QQ, FQ) {
                const wQ = CQ(QQ, FQ),
                  LQ = pQ(FQ.lights) + (QQ._lightFoVersion?.(FQ) ?? 0),
                  qQ = FQ._lightListVersion ?? 0;
                LQ === wQ.cV && qQ === wQ._listVersion && FQ.lights.length === wQ._lightCount || (wQ.cV = LQ, wQ._listVersion = qQ, wQ._lightCount = FQ.lights.length, cQ(wQ._scratch, FQ.lights), QQ._applyLightFoOffset?.(wQ._scratch, FQ), QQ._device.queue.writeBuffer(wQ._buffer, 0, wQ._scratch)), wQ._buffer
              }(FQ, LQ));
              (function(QQ, FQ, wQ, LQ) {
                if (!LQ) return;
                const qQ = LQ.viewport,
                  oQ = QQ._config.rt,
                  DQ = (QQ._config.cs ? FQ.canvas.width / FQ.canvas.height : oQ._width / oQ._height) * (qQ ? qQ.width / qQ.height : 1),
                  kQ = wQ.fog,
                  vQ = wQ.imageProcessing,
                  uQ = mQ(LQ),
                  HQ = wQ._envTextures,
                  bQ = QQ._sceneUboCacheKey;
                if (bQ[0] === LQ && bQ[1] === kQ && bQ[2] === uQ && bQ[3] === DQ && bQ[4] === vQ.exposure && bQ[5] === vQ.contrast && bQ[6] === HQ) return;
                bQ[0] = LQ, bQ[1] = kQ, bQ[2] = uQ, bQ[3] = DQ, bQ[4] = vQ.exposure, bQ[5] = vQ.contrast, bQ[6] = HQ;
                const YQ = QQ._suData;
                iQ(YQ, FQ, wQ, LQ, DQ);
                const xQ = wQ._sceneUboContributors;
                if (xQ)
                  for (const mQ of xQ) mQ(YQ, wQ);
                FQ._device.queue.writeBuffer(QQ._sceneUBO, 0, YQ)
              })(QQ, FQ, LQ, oQ), qQ.W8 = oQ, QQ._batchState?._reset(), NQ(QQ._opaqueBindings, qQ), NQ(QQ._directBindings, qQ), NQ(QQ._transparentBindings, qQ), QQ._batchState?._flush(FQ),
                function(QQ, FQ) {
                  const wQ = QQ._transparentBindings;
                  if (wQ.length <= 1 || !FQ) return;
                  const LQ = kQ(FQ);
                  for (const qQ of wQ) {
                    const QQ = qQ.renderable._worldCenter;
                    qQ._sortDistance = QQ ? QQ[0] * LQ[2] + QQ[1] * LQ[6] + QQ[2] * LQ[10] + LQ[14] : 0
                  }
                  wQ.sort(OQ)
                }(QQ, oQ)
            }(QQ, FQ, wQ);
            const qQ = QQ._colorAttachment,
              oQ = QQ._config;
            oQ.rt._colorView && (oQ.rt === LQ.surface.scRT && (qQ.view = oQ.rt._colorView), qQ.resolveTarget = oQ.rst?._colorView ?? void 0, qQ.clearValue = oQ.clrColor ?? LQ.clearColor, qQ.loadOp = oQ.clr ? "clear" : "load");
            if (QQ._executeWithTransmission) return QQ._executeWithTransmission(wQ._sampleCount);
            const DQ = FQ._currentEncoder.beginRenderPass(QQ._renderPassDescriptor),
              vQ = IQ(QQ, DQ);
            return DQ.end(), vQ
          }(HQ, FQ, vQ),
          dispose() {
            if (HQ._disposed) return;
            HQ._disposed = !0;
            const FQ = HQ._pendingMeshes;
            FQ && (FQ.length = 0);
            for (const QQ of HQ._renderables) HQ._retireRenderable?.(HQ.engine, QQ);
            HQ._passes.length = HQ._opaqueBindings.length = HQ._directBindings.length = 0, HQ._transparentBindings.length = HQ._renderables.length = HQ._ob.length = 0, HQ._ownsTargets && ((0, LQ.h)(QQ.rt), (0, LQ.h)(QQ.rst)), QQ.depth?._eager || (0, LQ.h)(QQ.depth);
            const wQ = HQ._sceneUBO;
            (0, YQ.e)(HQ.engine, (() => wQ.destroy())), HQ._batchState?._release(HQ.engine), HQ._batchState = void 0
          }
        };
      return HQ
    }

    function OQ(QQ, FQ) {
      return FQ._sortDistance - QQ._sortDistance || QQ.renderable.order - FQ.renderable.order
    }

    function sQ(QQ, FQ) {
      return QQ.renderable.order - FQ.renderable.order
    }

    function rQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ._renderables,
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        oQ = arguments.length > 4 ? arguments[4] : void 0;
      const DQ = QQ._config,
        kQ = DQ.rt,
        vQ = QQ._batchState,
        mQ = WQ(FQ, QQ.lA._renderableVersion);
      if (wQ) {
        const FQ = (FQ, wQ) => {
          FQ && (wQ || QQ._ownsTargets || FQ._eager) && (0, LQ.e)(FQ, QQ.engine)
        };
        FQ(kQ), kQ._descriptor.samples > 1 && FQ(DQ.rst), FQ(DQ.depth, !0)
      }
      const {
        _opaqueBindings: uQ,
        _directBindings: HQ,
        _transparentBindings: bQ
      } = mQ;
      try {
        for (const wQ of FQ) {
          const FQ = wQ.bind(QQ.engine, QQ._targetSignature);
          mQ._batchState = QQ._targetSignature._collectBatches?.(mQ._batchState, FQ), wQ.isTransparent || wQ._transmissive ? bQ.push(FQ) : wQ._direct ? HQ.push(FQ) : uQ.push(FQ)
        }
        uQ.sort(sQ), HQ.sort(sQ), wQ && UQ(QQ, QQ.engine, !1)
      } catch (YQ) {
        throw mQ._batchState?._release(void 0, oQ ?? [vQ]), YQ
      }
      return wQ && (! function(QQ, FQ) {
        const wQ = QQ._config,
          LQ = QQ._colorAttachment;
        LQ.view = FQ._colorView, QQ._renderPassDescriptor.colorAttachments = FQ._colorView ? [LQ] : [];
        const qQ = wQ.depth ?? FQ,
          oQ = qQ._depthView;
        let DQ;
        if (oQ) {
          const QQ = qQ._descriptor,
            FQ = (wQ.depth ? qQ._eager : !1 === wQ.depthClear) ? "load" : "clear";
          DQ = {
            view: oQ,
            depthClearValue: QQ.depthClearValue ?? 0,
            depthLoadOp: FQ,
            depthStoreOp: "store"
          }, QQ.dFormat?.includes("stencil") && (DQ.stencilClearValue = 0, DQ.stencilLoadOp = FQ, DQ.stencilStoreOp = "store")
        }
        QQ._renderPassDescriptor.depthStencilAttachment = DQ
      }(QQ, kQ), QQ._updateContext.targetWidth = kQ._width, QQ._updateContext.targetHeight = kQ._height), qQ && (Object.assign(QQ, mQ), vQ?._release(QQ.engine, [mQ._batchState])), mQ
    }

    function IQ(QQ, FQ) {
      const wQ = QQ.engine,
        LQ = QQ._config,
        oQ = LQ.rt,
        DQ = QQ.lA,
        kQ = QQ._opaqueBindings,
        vQ = QQ._ob,
        mQ = QQ._sceneBG;
      if (function(QQ, FQ, wQ, LQ) {
          const qQ = FQ?.viewport;
          if (!qQ) return;
          const oQ = Math.floor(qQ.x * wQ),
            DQ = Math.floor((1 - qQ.y - qQ.height) * LQ),
            kQ = Math.ceil((qQ.x + qQ.width) * wQ) - oQ,
            vQ = Math.ceil((1 - qQ.y) * LQ) - DQ;
          QQ.setViewport(oQ, DQ, kQ, vQ, 0, 1), QQ.setScissorRect(oQ, DQ, kQ, vQ)
        }(FQ, LQ.cam ?? DQ.camera, oQ._width, oQ._height), FQ.setBindGroup(0, mQ), QQ._lastVis !== qQ.b || !vQ.length) {
        const FQ = oQ._descriptor,
          LQ = wQ._device.createRenderBundleEncoder({
            colorFormats: FQ.format ? [FQ.format] : [],
            depthStencilFormat: QQ._targetSignature._depthStencilFormat,
            sampleCount: FQ.samples
          });
        LQ.setBindGroup(0, mQ), TQ(LQ, kQ, wQ), vQ[0] = LQ.finish(), QQ._lastVis = qQ.b
      }
      let uQ = kQ.length;
      return FQ.executeBundles(vQ), FQ.setBindGroup(0, mQ), uQ += TQ(FQ, QQ._directBindings, wQ), uQ += TQ(FQ, QQ._transparentBindings, wQ), uQ
    }

    function UQ(QQ, FQ) {
      let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const LQ = CQ(FQ, QQ.lA)._buffer;
      if (LQ === QQ._lightsUBO) return;
      const qQ = FQ._device.createBindGroup({
        layout: AQ(FQ),
        entries: [{
          binding: 0,
          resource: {
            buffer: QQ._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: LQ
          }
        }]
      });
      QQ._lightsUBO = LQ, QQ._sceneBG = qQ, wQ && (QQ._ob = [])
    }

    function NQ(QQ, FQ) {
      for (const wQ of QQ) wQ.update?.(FQ)
    }

    function TQ(QQ, FQ, wQ) {
      let LQ = null,
        qQ = 0;
      for (const oQ of FQ) {
        const FQ = oQ.renderable.mesh;
        FQ && !1 === FQ.visible || (oQ.pipeline !== LQ && (QQ.setPipeline(oQ.pipeline), LQ = oQ.pipeline), qQ += oQ.draw(QQ, wQ))
      }
      return qQ
    }

    function KQ(QQ) {
      const FQ = QQ._materialSwapQueue;
      if (!FQ[0] || QQ._runtimeBuilds?.w) return;
      let LQ, qQ, oQ;
      const DQ = QQ._renderables;
      for (const wQ of FQ) {
        const FQ = wQ.material;
        if (!FQ) continue;
        const kQ = wQ._runtimeThinBuild;
        if (kQ) {
          qQ = kQ(QQ, wQ, qQ);
          continue
        }
        const vQ = QQ._groups.get(FQ._buildGroup),
          mQ = vQ?.r;
        if (!mQ) {
          (oQ ??= []).push(wQ);
          continue
        }
        if (vQ._w?.(wQ)) {
          (oQ ??= []).push([wQ, FQ]);
          continue
        }
        const uQ = QQ._meshDisposables.get(wQ);
        uQ && (QQ._meshDisposables.delete(wQ), (0, YQ.e)(QQ.surface.engine, (() => uQ.forEach((QQ => QQ())))));
        const HQ = vQ.o;
        let bQ;
        for (let QQ = DQ.length; QQ--;) DQ[QQ].mesh === wQ && (bQ = DQ.splice(QQ, 1)[0]);
        FQ._csmGen = -~FQ._csmGen;
        const xQ = mQ(QQ, wQ);
        if (HQ) {
          const QQ = HQ.indexOf(bQ);
          QQ < 0 ? HQ.push(xQ) : HQ[QQ] = xQ
        }
        LQ = DQ.push(xQ)
      }
      if (LQ && (DQ.sort(((QQ, FQ) => QQ.order - FQ.order)), QQ._renderableVersion++, QQ._materialEpoch++), FQ.length = 0, !oQ) return qQ;
      const kQ = oQ;
      return wQ.e(356).then((() => wQ(60749))).then((FQ => {
        let {
          C: wQ
        } = FQ;
        return wQ(QQ, kQ, qQ)
      }), (FQ => {
        const wQ = QQ._runtimeBuilds;
        wQ ? wQ._x(FQ) : console.error(FQ)
      }))
    }
    var zQ = null;

    function lQ(QQ, FQ) {
      const wQ = QQ.engine,
        qQ = {
          _kind: "lA",
          surface: QQ,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            wQ.useFloatingOrigin && qQ.camera && !qQ.camera._useFloatingOrigin && (qQ.camera._useFloatingOrigin = !0, qQ.camera._viewVer = -1, qQ.camera._vpVer = -1);
            const QQ = qQ.fixedDeltaMs > 0 ? qQ.fixedDeltaMs : wQ._currentDelta,
              FQ = wQ._currentEncoder;
            let LQ = 0;
            for (const wQ of qQ._beforeRender) wQ(QQ);
            qQ._materialSwapQueue.length && KQ(qQ);
            for (const oQ of qQ._prePasses) LQ += oQ.execute(FQ, wQ);
            for (const oQ of qQ._uniformUpdaters) oQ.update(wQ);
            qQ._drawCallsPre = LQ
          },
          _record: () => qQ._frameGraph.execute(),
          _resize() {
            qQ._frameGraph.build()
          }
        },
        DQ = function() {
          const QQ = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let FQ = 0; FQ < QQ._tasks.length; FQ++) oQ(QQ, QQ._tasks[FQ]);
              for (const FQ of QQ._tasks)
                for (const QQ of FQ._passes) QQ._initialize()
            },
            execute() {
              let FQ = 0;
              for (const wQ of QQ._tasks)
                if (!1 !== wQ.executionEnabled)
                  if (wQ.execute) FQ += wQ.execute();
                  else
                    for (const QQ of wQ._passes) FQ += QQ._execute();
              return FQ
            },
            dispose() {
              for (const FQ of QQ._tasks) FQ.dispose();
              QQ._tasks.length = 0, QQ._currentProcessedTask = null
            }
          };
          return QQ
        }();
      if (qQ._frameGraph = DQ, !1 !== FQ?.defaultRenderTask) {
        const FQ = QQ.msaaSamples > 1,
          oQ = FQ ? (0, LQ.c)({
            lbl: "scene-color",
            format: QQ.format,
            dFormat: "depth24plus-stencil8",
            samples: QQ.msaaSamples,
            size: QQ
          }) : QQ.scRT,
          kQ = FQ ? void 0 : (0, LQ.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: QQ
          });
        ! function(QQ, FQ) {
          QQ._tasks.push(FQ)
        }(DQ, RQ({
          name: "lA",
          rt: oQ,
          rst: FQ ? QQ.scRT : void 0,
          depth: kQ
        }, wQ, qQ))
      }
      return qQ._disposables.push((() => DQ.dispose())), qQ
    }
    async function jQ(QQ) {
      const FQ = QQ;
      for (FQ._built || (FQ._materialSwapQueue.length = 0); FQ._deferredBuilders.length;) {
        const QQ = FQ._deferredBuilders.splice(0);
        await Promise.all(QQ.map((QQ => QQ())))
      }
      await KQ(FQ), zQ?.get(FQ)?.() || (FQ._runtimeBuilds?._e(), FQ._renderableVersion++, FQ._built = !0), await (FQ._rebuildHook?.(FQ))
    }
    var aQ = null;
    async function XQ(QQ) {
      const FQ = QQ,
        LQ = FQ.surface;
      (0, qQ.j)(LQ, FQ) || (await jQ(QQ), FQ._renderables.sort(fQ), await Promise.all(FQ._frameGraph._tasks.map((QQ => QQ._preload?.()))), aQ && await aQ(FQ), FQ._frameGraph.build(), LQ._renderingContexts[0] && (await wQ.e(354).then((() => wQ(60738)))).configureSwapchainOverlayScene(LQ, FQ), zQ?.get(FQ)?.() || (0, qQ.m)(LQ, FQ))
    }
    var fQ = (QQ, FQ) => QQ.order - FQ.order
  },
  41093: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ,
      i: () => uQ
    });
    var LQ = wQ(41061),
      qQ = wQ(41067),
      oQ = wQ(41073),
      DQ = wQ(41075),
      kQ = wQ(41080),
      vQ = wQ(41082);

    function mQ(QQ, FQ, wQ) {
      let kQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (FQ < 1 || wQ < 1) && (0, LQ.e)(676, FQ, wQ);
      const mQ = QQ._device,
        uQ = kQ.mipMaps ?? !1,
        HQ = kQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        bQ = uQ ? (0, vQ.c)(FQ, wQ) : 1,
        YQ = mQ.createTexture({
          size: {
            width: FQ,
            height: wQ
          },
          format: HQ,
          mipLevelCount: bQ,
          usage: qQ.g.TEXTURE_BINDING | qQ.g.COPY_DST | qQ.g.RENDER_ATTACHMENT
        }),
        xQ = {
          addressModeU: kQ.addressModeU ?? "clamp-to-edge",
          addressModeV: kQ.addressModeV ?? "clamp-to-edge",
          minFilter: kQ.minFilter ?? "linear",
          magFilter: kQ.magFilter ?? "linear",
          mipmapFilter: uQ ? "linear" : "nearest"
        },
        AQ = (0, DQ.e)(QQ, xQ),
        tQ = {
          texture: YQ,
          view: YQ.createView(),
          sampler: AQ,
          width: FQ,
          height: wQ
        };
      return (0, oQ.e)(tQ), QQ._dlr && QQ._dlr.t(tQ, {
        kind: "dynamic",
        width: FQ,
        height: wQ,
        format: HQ,
        levels: bQ,
        samplerDesc: xQ,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), tQ
    }

    function uQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const qQ = LQ.invertY ?? !0,
        oQ = LQ.premultiplyAlpha ?? !1;
      QQ._device.queue.copyExternalImageToTexture({
        source: wQ,
        flipY: qQ
      }, {
        texture: FQ.texture,
        premultipliedAlpha: oQ
      }, [FQ.width, FQ.height]);
      const DQ = FQ._recoverySource;
      DQ && "dynamic" === DQ.kind && (DQ.source = wQ, DQ.flipY = qQ, DQ.premultipliedAlpha = oQ), FQ.texture.mipLevelCount > 1 && (0, kQ.generateMipmaps)(QQ, FQ.texture)
    }
  },
  41089: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ
    });
    var LQ = wQ(41061),
      qQ = wQ(41067),
      oQ = wQ(41073),
      DQ = wQ(41075),
      kQ = wQ(41082);
    async function vQ(QQ, FQ) {
      let vQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [mQ, uQ] = function(QQ) {
        const FQ = QQ,
          wQ = [
            [FQ.displayWidth, FQ.displayHeight],
            [FQ.videoWidth, FQ.videoHeight],
            [FQ.naturalWidth, FQ.naturalHeight],
            [FQ.width, FQ.height]
          ];
        for (const [LQ, qQ] of wQ)
          if (void 0 !== LQ && void 0 !== qQ && Number.isInteger(LQ) && Number.isInteger(qQ) && LQ > 0 && qQ > 0) return [LQ, qQ];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(FQ), [HQ, bQ] = function(QQ, FQ, wQ) {
        if (void 0 === wQ) return [QQ, FQ];
        if (!Number.isInteger(wQ) || wQ < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${wQ})`);
        if (Math.max(QQ, FQ) <= wQ) return [QQ, FQ];
        const LQ = wQ / Math.max(QQ, FQ);
        return QQ >= FQ ? [wQ, Math.max(1, Math.round(FQ * LQ))] : [Math.max(1, Math.round(QQ * LQ)), wQ]
      }(mQ, uQ, vQ.maxDimension), YQ = vQ.mipMaps ?? !0, xQ = vQ.premultiplyAlpha ?? !1;
      let AQ = FQ,
        tQ = null;
      const eQ = {
        texture: null
      };
      try {
        HQ === mQ && bQ === uQ || (tQ = await createImageBitmap(FQ, {
          resizeWidth: HQ,
          resizeHeight: bQ,
          resizeQuality: "high",
          premultiplyAlpha: xQ ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), AQ = tQ);
        const MQ = QQ._device,
          GQ = vQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          pQ = YQ ? (0, kQ.c)(HQ, bQ) : 1,
          cQ = pQ > 1 ? (await Promise.resolve().then((() => wQ(41080)))).generateMipmaps : null,
          CQ = {
            addressModeU: vQ.addressModeU ?? "repeat",
            addressModeV: vQ.addressModeV ?? "repeat",
            minFilter: vQ.minFilter ?? "linear",
            magFilter: vQ.magFilter ?? "linear",
            mipmapFilter: YQ ? "linear" : "nearest"
          };
        CQ.maxAnisotropy = "linear" === CQ.minFilter && "linear" === CQ.magFilter && "linear" === CQ.mipmapFilter ? 4 : 1;
        const SQ = vQ.invertY ?? !0,
          iQ = async FQ => {
            let wQ;
            MQ.pushErrorScope("validation"), MQ.pushErrorScope("out-of-memory");
            let oQ = null;
            try {
              const wQ = eQ.texture = MQ.createTexture({
                size: {
                  width: HQ,
                  height: bQ
                },
                format: GQ,
                mipLevelCount: pQ,
                usage: qQ.g.TEXTURE_BINDING | qQ.g.COPY_DST | qQ.g.RENDER_ATTACHMENT
              });
              MQ.queue.copyExternalImageToTexture({
                source: FQ,
                flipY: SQ
              }, {
                texture: wQ,
                premultipliedAlpha: xQ
              }, {
                width: HQ,
                height: bQ
              }), cQ && cQ(QQ, wQ), oQ = (0, DQ.e)(QQ, CQ)
            } catch (YQ) {
              wQ = YQ
            }
            const [kQ, vQ] = await Promise.all([MQ.popErrorScope(), MQ.popErrorScope()]);
            if (wQ) throw wQ;
            const mQ = vQ ?? kQ;
            if (mQ) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${mQ.message}`, {
              cause: mQ
            });
            const uQ = eQ.texture;
            return uQ && oQ || (0, LQ.e)(677), {
              texture: uQ,
              view: uQ.createView(),
              sampler: oQ,
              width: HQ,
              height: bQ
            }
          }, WQ = await (QQ._dlr?.x(AQ, HQ, bQ, GQ, pQ, CQ, SQ, xQ, iQ)) ?? await iQ(AQ);
        return (0, oQ.e)(WQ), WQ
      } catch (MQ) {
        throw eQ.texture?.destroy(), MQ
      } finally {
        tQ?.close()
      }
    }
  },
  41080: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      generateMipmaps: () => YQ,
      recordMipmaps: () => xQ
    });
    var LQ = wQ(41067),
      qQ = wQ(41075),
      oQ = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var DQ = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      kQ = null,
      vQ = null,
      mQ = null,
      uQ = null,
      HQ = null;

    function bQ(QQ) {
      const FQ = QQ._device;
      FQ !== HQ && (kQ?.clear(), kQ = null, vQ = null, mQ = null, uQ = null, HQ = null, HQ = FQ), vQ ??= FQ.createShaderModule({
        code: DQ
      }), mQ ??= function(QQ) {
        return (0, qQ.e)(QQ, oQ)
      }(QQ), uQ ??= FQ.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: LQ.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: LQ.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function YQ(QQ, FQ, wQ) {
      const LQ = QQ._device,
        qQ = LQ.createCommandEncoder();
      xQ(QQ, FQ, qQ, wQ), LQ.queue.submit([qQ.finish()])
    }

    function xQ(QQ, FQ, wQ, LQ) {
      if (FQ.mipLevelCount <= 1) return;
      const qQ = QQ._device,
        oQ = function(QQ, FQ) {
          const wQ = QQ._device;
          bQ(QQ), kQ ??= new Map;
          let LQ = kQ.get(FQ);
          return LQ || (LQ = wQ.createRenderPipeline({
            layout: wQ.createPipelineLayout({
              bindGroupLayouts: [uQ]
            }),
            vertex: {
              module: vQ,
              entryPoint: "vs"
            },
            fragment: {
              module: vQ,
              entryPoint: "fs",
              targets: [{
                format: FQ
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), kQ.set(FQ, LQ)), LQ
        }(QQ, FQ.format),
        DQ = null != LQ ? {
          dimension: "2d",
          baseArrayLayer: LQ,
          arrayLayerCount: 1
        } : {};
      for (let kQ = 1; kQ < FQ.mipLevelCount; kQ++) {
        const QQ = FQ.createView({
            baseMipLevel: kQ - 1,
            mipLevelCount: 1,
            ...DQ
          }),
          LQ = FQ.createView({
            baseMipLevel: kQ,
            mipLevelCount: 1,
            ...DQ
          }),
          vQ = qQ.createBindGroup({
            layout: uQ,
            entries: [{
              binding: 0,
              resource: QQ
            }, {
              binding: 1,
              resource: mQ
            }]
          }),
          HQ = wQ.beginRenderPass({
            colorAttachments: [{
              view: LQ,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        HQ.setPipeline(oQ), HQ.setBindGroup(0, vQ), HQ.draw(3), HQ.end()
      }
    }
  },
  41082: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return Math.floor(Math.log2(Math.max(QQ, FQ))) + 1
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  41059: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ,
      e: () => uQ
    });
    var LQ = wQ(41061),
      qQ = wQ(41067),
      oQ = wQ(41073),
      DQ = wQ(41075),
      kQ = wQ(41080),
      vQ = wQ(41082);

    function mQ(QQ, FQ, wQ, kQ) {
      let mQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (FQ < 1 || wQ < 1 || kQ < 1) && (0, LQ.e)(722, FQ, wQ, kQ);
      const uQ = QQ._device,
        HQ = mQ.mipMaps ?? !0,
        bQ = mQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        YQ = uQ.createTexture({
          size: {
            width: FQ,
            height: wQ,
            depthOrArrayLayers: kQ
          },
          dimension: "2d",
          format: bQ,
          mipLevelCount: HQ ? (0, vQ.c)(FQ, wQ) : 1,
          usage: qQ.g.TEXTURE_BINDING | qQ.g.COPY_DST | qQ.g.RENDER_ATTACHMENT
        }),
        xQ = (0, DQ.e)(QQ, {
          addressModeU: mQ.addressModeU ?? "repeat",
          addressModeV: mQ.addressModeV ?? "repeat",
          minFilter: mQ.minFilter ?? "linear",
          magFilter: mQ.magFilter ?? "linear",
          mipmapFilter: HQ ? "linear" : "nearest"
        }),
        AQ = {
          texture: YQ,
          view: YQ.createView({
            dimension: "2d-array"
          }),
          sampler: xQ,
          width: FQ,
          height: wQ,
          layers: kQ
        };
      return (0, oQ.e)(AQ), AQ
    }

    function uQ(QQ, FQ, wQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (wQ < 0 || wQ >= FQ.layers || (0 | wQ) !== wQ) && (0, LQ.e)(723, FQ.layers, wQ);
      const DQ = oQ.invertY ?? !0,
        vQ = oQ.premultiplyAlpha ?? !1;
      QQ._device.queue.copyExternalImageToTexture({
        source: qQ,
        flipY: DQ
      }, {
        texture: FQ.texture,
        origin: [0, 0, wQ],
        premultipliedAlpha: vQ
      }, [FQ.width, FQ.height, 1]), FQ.texture.mipLevelCount > 1 && (0, kQ.generateMipmaps)(QQ, FQ.texture, wQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);