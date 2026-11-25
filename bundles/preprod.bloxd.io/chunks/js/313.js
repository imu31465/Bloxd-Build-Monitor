export const id = 313;
export const ids = [313];
export const modules = {
  41957: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    var wQ = XQ(41945),
      qQ = XQ(41963);

    function TQ(QQ) {
      (0, qQ.e)(QQ), (0, wQ.p)(QQ);
      const WQ = QQ._surfaces;
      for (const XQ of WQ) XQ._renderingContexts.length = 0, XQ._ro?.disconnect(), XQ._context.unconfigure();
      WQ.length = 0;
      try {
        QQ._disposeManagedResources?.(), QQ._disposeStorageBuffers?.()
      } finally {
        QQ._device.destroy()
      }
    }
  },
  41945: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      d: () => VQ,
      f: () => IQ,
      i: () => jQ,
      j: () => GQ,
      n: () => DQ,
      p: () => pQ
    });
    var wQ = XQ(41893);
    var qQ = "Babylon Lite v1.32.0",
      TQ = XQ(41952);

    function zQ(QQ) {
      return "clientWidth" in QQ
    }
    var sQ = 1;

    function FQ(QQ, WQ, XQ) {
      const FQ = WQ.getContext("webgpu");
      FQ || (0, wQ.e)(54), zQ(WQ) && WQ.setAttribute("data-engine", qQ);
      const PQ = XQ?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        gQ = XQ?.srgb ? (JQ = PQ).endsWith("-srgb") ? JQ : `${JQ}-srgb` : PQ;
      var JQ;
      const rQ = XQ?.alphaMode ?? "opaque";
      FQ.configure({
        device: QQ._device,
        format: PQ,
        alphaMode: rQ,
        viewFormats: [gQ]
      });
      const IQ = 1 === XQ?.msaaSamples ? 1 : 4,
        jQ = (0, TQ.d)({
          lbl: "swapchain",
          format: gQ,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return jQ._eager = !0, {
        engine: QQ,
        canvas: WQ,
        format: gQ,
        msaaSamples: IQ,
        scRT: jQ,
        maxDevicePixelRatio: XQ?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: sQ++,
        _context: FQ,
        _configureFormat: PQ,
        _alphaMode: rQ,
        _renderingContexts: []
      }
    }

    function PQ(QQ) {
      const WQ = QQ._context.getCurrentTexture(),
        XQ = QQ.scRT;
      XQ._colorTexture = WQ, XQ._colorView = WQ.createView({
        format: QQ.format
      }), XQ._width = WQ.width, XQ._height = WQ.height
    }

    function gQ(QQ) {
      const WQ = QQ.canvas;
      if (!zQ(WQ)) return;
      const XQ = QQ._w ?? WQ.clientWidth,
        wQ = QQ._h ?? WQ.clientHeight;
      if (!(XQ > 0 && wQ > 0)) return;
      const qQ = Math.min(globalThis.devicePixelRatio || 1, QQ.maxDevicePixelRatio);
      JQ(QQ, XQ * qQ | 0, wQ * qQ | 0)
    }

    function JQ(QQ, WQ, XQ) {
      const wQ = QQ.canvas,
        qQ = 0 | WQ,
        TQ = 0 | XQ;
      if (qQ > 0 && TQ > 0 && (qQ !== wQ.width || TQ !== wQ.height)) {
        wQ.width = qQ, wQ.height = TQ, QQ.scRT._width = qQ, QQ.scRT._height = TQ;
        for (const WQ of QQ._renderingContexts) WQ._resize?.()
      }
    }
    var rQ = 0;

    function IQ(QQ, WQ) {
      return -1 !== QQ._renderingContexts.indexOf(WQ)
    }

    function jQ(QQ, WQ) {
      return -1 === QQ._renderingContexts.indexOf(WQ) && (QQ._renderingContexts.push(WQ), !0)
    }
    var BQ = null;
    var yQ = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function VQ(QQ, WQ) {
      const TQ = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...BQ ? BQ() : {}
      });
      TQ || (0, wQ.e)(47);
      const zQ = BQ?.deviceFeatures?.(TQ, WQ) ?? function(QQ) {
          return yQ.filter((WQ => QQ.features.has(WQ)))
        }(TQ),
        sQ = await TQ.requestDevice({
          requiredFeatures: zQ,
          requiredLimits: WQ?.requiredLimits
        });
      console.log(`${qQ} - WebGPU engine`);
      const JQ = !!WQ?.useHighPrecisionMatrix,
        rQ = !!WQ?.useFloatingOrigin;
      if (rQ && !JQ && (0, wQ.e)(48), JQ) {
        const {
          allocateF64Mat4: QQ
        } = await XQ.e(365).then((() => XQ(61610)));
        0
      }
      let IQ, jQ, VQ, DQ;
      if (rQ) {
        const [{
          wrapRenderableForFO: QQ,
          lightFoVersion: WQ,
          applyLightFoOffset: wQ
        }, {
          makePackMeshWorld: qQ
        }] = await Promise.all([XQ.e(366).then((() => XQ(61618))), XQ.e(367).then((() => XQ(61627)))]);
        IQ = QQ, jQ = qQ, VQ = WQ, DQ = wQ
      }
      const pQ = {
          _device: sQ
        },
        GQ = [pQ];
      return Object.assign(pQ, {
        engine: pQ,
        surfaces: GQ,
        _surfaces: GQ,
        _device: sQ,
        _options: WQ,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: JQ,
        useFloatingOrigin: rQ,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: IQ,
        _makePackMeshWorld: jQ,
        _lightFoVersion: VQ,
        _applyLightFoOffset: DQ
      }, FQ(pQ, QQ, WQ)), gQ(pQ), PQ(pQ), pQ
    }

    function DQ(QQ, WQ, XQ) {
      JQ(QQ, WQ, XQ)
    }

    function pQ(QQ) {
      QQ._animFrameId && cancelAnimationFrame(QQ._animFrameId), QQ._animFrameId = 0, QQ._renderFn = null, QQ._flushGpuRetirements?.(QQ)
    }

    function GQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.surfaces;
      if (XQ !== QQ.surfaces)
        for (let qQ = XQ.length; qQ--;) XQ[qQ].engine !== QQ && (0, wQ.e)(49);
      UQ(QQ, WQ, XQ)
    }

    function UQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ._surfaces,
        wQ = 0;
      for (let TQ = XQ.length; TQ--;) wQ += XQ[TQ]._renderingContexts.length;
      if (!wQ) return QQ.drawCallCount = 0, QQ._flushGpuRetirements?.(QQ);
      const qQ = QQ._device.createCommandEncoder({
        label: "frame"
      });
      QQ._currentEncoder = qQ, QQ._currentDelta = WQ;
      try {
        QQ._gpuTimerBegin?.(qQ), wQ = 0;
        for (let QQ = 0; QQ < XQ.length; QQ++) {
          const WQ = XQ[QQ];
          WQ._capturePreFrame?.(WQ), PQ(WQ);
          const qQ = WQ._renderingContexts;
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const WQ = qQ[QQ];
            WQ._update(), wQ += WQ._drawCallsPre + WQ._record()
          }
        }
        const WQ = QQ._currentEncoder;
        for (let QQ = 0; QQ < XQ.length; QQ++) {
          const wQ = XQ[QQ];
          wQ._captureService?.(wQ, WQ)
        }
        QQ._gpuTimerEnd?.(WQ), QQ._cbs[0] = WQ.finish(), QQ._device.queue.submit(QQ._cbs), QQ._flushGpuRetirements?.(QQ), QQ.drawCallCount = wQ, QQ._gpuTimerResolve?.()
      } finally {
        QQ._currentEncoder = void 0
      }
    }
  },
  41901: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      e: () => TQ,
      h: () => wQ
    });
    var wQ = globalThis.GPUTextureUsage,
      qQ = globalThis.GPUBufferUsage,
      TQ = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41963: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      qQ(QQ.splice(0))
    }

    function qQ(QQ) {
      for (const XQ of QQ) try {
        XQ()
      } catch (WQ) {
        console.error("GPU resource retirement failed.", WQ)
      }
    }

    function TQ(QQ, WQ) {
      QQ._flushGpuRetirements ??= zQ, (QQ._retirements ??= []).push(WQ)
    }

    function zQ(QQ) {
      const WQ = QQ._retirements;
      if (!WQ) return;
      QQ._retirements = null;
      const XQ = QQ._retiring ??= new Set;
      XQ.add(WQ), queueMicrotask((() => {
        QQ._device.queue.onSubmittedWorkDone().then((() => {
          XQ.delete(WQ), wQ(WQ)
        })).catch((() => {}))
      }))
    }

    function sQ(QQ) {
      const WQ = QQ._retirements,
        XQ = QQ._retiring;
      QQ._retirements = null, QQ._retiring = null, WQ && wQ(WQ), XQ?.forEach(wQ)
    }
    XQ.d(WQ, {
      e: () => sQ,
      g: () => TQ
    })
  },
  41952: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      g: () => zQ,
      h: () => sQ
    });
    var wQ = XQ(41901);

    function qQ(QQ) {
      const WQ = QQ.size;
      return "canvas" in WQ ? WQ.canvas : WQ
    }

    function TQ(QQ) {
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

    function zQ(QQ, WQ) {
      if (QQ._eager) return void QQ._syncEager?.(WQ);
      sQ(QQ);
      const XQ = QQ._descriptor,
        {
          width: TQ,
          height: zQ
        } = (QQ._resolveSize ?? qQ)(XQ);
      QQ._width = TQ, QQ._height = zQ;
      const FQ = WQ._device;
      XQ.format && (QQ._colorTexture = FQ.createTexture({
        label: XQ.lbl,
        size: {
          width: TQ,
          height: zQ
        },
        format: XQ.format,
        sampleCount: XQ.samples,
        usage: wQ.h.RENDER_ATTACHMENT | wQ.h.TEXTURE_BINDING | wQ.h.COPY_SRC | wQ.h.COPY_DST
      }), QQ._colorView = QQ._colorTexture.createView()), XQ.dFormat && (QQ._depthTexture = FQ.createTexture({
        label: XQ.lbl,
        size: {
          width: TQ,
          height: zQ
        },
        format: XQ.dFormat,
        sampleCount: XQ.samples,
        usage: wQ.h.RENDER_ATTACHMENT | wQ.h.TEXTURE_BINDING
      }), QQ._depthView = QQ._depthTexture.createView())
    }

    function sQ(QQ) {
      if (!QQ || QQ._eager && !QQ._disposeAttachments) return;
      const WQ = QQ._colorTexture,
        XQ = QQ._depthTexture;
      if (QQ._colorTexture = QQ._depthTexture = null, QQ._colorView = QQ._depthView = null, QQ._width = QQ._height = 0, QQ._disposeAttachments) QQ._disposeAttachments(WQ, XQ);
      else try {
        WQ?.destroy()
      } finally {
        !1 !== QQ._ownsDepthTexture && XQ?.destroy()
      }
    }
  },
  41975: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      f: () => qQ,
      i: () => TQ
    });
    var wQ = Float32Array,
      qQ = Float64Array,
      TQ = Uint32Array
  },
  41977: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    var wQ = 16
  },
  41893: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = null;

    function qQ(QQ) {
      for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), qQ = 1; qQ < WQ; qQ++) XQ[qQ - 1] = arguments[qQ];
      const TQ = new Error(wQ?.(QQ, XQ) ?? `#${QQ}`);
      throw TQ.lite = XQ, TQ
    }
  },
  41929: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ
    });
    var wQ = XQ(41914);

    function qQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const XQ = WQ.compare,
        qQ = WQ.lodMinClamp ?? 0,
        TQ = WQ.lodMaxClamp ?? 32,
        zQ = void 0 !== XQ || 0 !== qQ || 32 !== TQ ? `${XQ??""}:${qQ}:${TQ}` : "";
      return (0, wQ.c)(QQ, WQ, zQ)
    }
  },
  41906: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = null;

    function qQ(QQ) {
      const WQ = wQ ??= new WeakMap;
      WQ.set(QQ, (WQ.get(QQ) ?? 0) + 1)
    }

    function TQ(QQ) {
      qQ(QQ.texture)
    }
  },
  41914: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = null,
      qQ = "nearest",
      TQ = "clamp-to-edge",
      zQ = {
        minFilter: qQ,
        magFilter: qQ,
        mipmapFilter: qQ,
        addressModeU: TQ,
        addressModeV: TQ,
        addressModeW: TQ,
        maxAnisotropy: 1
      };

    function sQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const qQ = QQ._device,
        TQ = wQ ??= new WeakMap;
      let sQ = TQ.get(qQ);
      sQ || TQ.set(qQ, sQ = new Map);
      let FQ = XQ;
      for (const wQ in zQ) {
        const QQ = wQ;
        FQ += `:${WQ[QQ]??zQ[QQ]}`
      }
      let PQ = sQ.get(FQ);
      return PQ || sQ.set(FQ, PQ = qQ.createSampler(WQ)), PQ
    }
  },
  41970: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => LQ,
      g: () => SQ
    });
    var wQ = XQ(41952),
      qQ = XQ(41945);

    function TQ(QQ, WQ) {
      WQ._passes.length = 0, QQ._currentProcessedTask = WQ;
      try {
        WQ.record()
      } finally {
        QQ._currentProcessedTask = null
      }
    }
    var zQ = XQ(41975);

    function sQ(QQ) {
      const WQ = QQ.worldMatrixVersion;
      if (QQ._viewVer === WQ) return QQ._viewCache;
      const XQ = QQ._viewCache,
        wQ = QQ.worldMatrix,
        qQ = QQ._useFloatingOrigin,
        TQ = qQ ? 0 : wQ[12],
        zQ = qQ ? 0 : wQ[13],
        sQ = qQ ? 0 : wQ[14];
      return XQ[0] = wQ[0], XQ[1] = wQ[4], XQ[2] = wQ[8], XQ[3] = 0, XQ[4] = wQ[1], XQ[5] = wQ[5], XQ[6] = wQ[9], XQ[7] = 0, XQ[8] = wQ[2], XQ[9] = wQ[6], XQ[10] = wQ[10], XQ[11] = 0, XQ[12] = -(wQ[0] * TQ + wQ[1] * zQ + wQ[2] * sQ), XQ[13] = -(wQ[4] * TQ + wQ[5] * zQ + wQ[6] * sQ), XQ[14] = -(wQ[8] * TQ + wQ[9] * zQ + wQ[10] * sQ), XQ[15] = 1, QQ._viewVer = WQ, XQ
    }
    var FQ = null;

    function PQ(QQ) {
      return QQ._projFov === QQ.fov && QQ._projNear === QQ.nearPlane && QQ._projFar === QQ.farPlane || (QQ._projFov = QQ.fov, QQ._projNear = QQ.nearPlane, QQ._projFar = QQ.farPlane, QQ._projRev = (QQ._projRev ?? 0) + 1), QQ.worldMatrixVersion + (QQ._projRev ?? 0)
    }

    function gQ(QQ, WQ) {
      const XQ = PQ(QQ);
      if (QQ._projVer === XQ && QQ._projAspect === WQ) return QQ._projCache;
      const wQ = QQ._projCache;
      return null !== FQ && QQ.ortho ? FQ(QQ, WQ, wQ) : function(QQ, WQ, XQ, wQ, qQ) {
        const TQ = 1 / Math.tan(.5 * WQ),
          zQ = qQ - wQ;
        QQ[0] = TQ / XQ, QQ[5] = TQ, QQ[10] = -wQ / zQ, QQ[11] = 1, QQ[14] = qQ * wQ / zQ
      }(wQ, QQ.fov, WQ, QQ.nearPlane, QQ.farPlane), QQ._projVer = XQ, QQ._projAspect = WQ, wQ
    }
    var JQ = XQ(41901);

    function rQ(QQ, WQ, XQ) {
      return QQ._device.createBuffer({
        label: XQ,
        size: (wQ = WQ, qQ = 16, Math.ceil(wQ / qQ) * qQ),
        usage: JQ.c.UNIFORM | JQ.c.COPY_DST
      });
      var wQ, qQ
    }
    var IQ = XQ(41963),
      jQ = null;

    function BQ(QQ) {
      const WQ = QQ._device,
        XQ = jQ ??= new WeakMap;
      let wQ = XQ.get(WQ);
      return wQ || (wQ = WQ.createBindGroupLayout({
        label: "cB",
        entries: [{
          binding: 0,
          visibility: JQ.e.VERTEX | JQ.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: JQ.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), XQ.set(WQ, wQ)), wQ
    }

    function yQ(QQ, WQ, XQ) {
      const wQ = QQ._device,
        qQ = rQ(QQ, WQ.byteLength, XQ);
      try {
        wQ.queue.writeBuffer(qQ, 0, WQ.buffer, WQ.byteOffset, WQ.byteLength)
      } catch (TQ) {
        throw qQ.destroy(), TQ
      }
      return qQ
    }
    var VQ = XQ(41977),
      DQ = new zQ.i(1),
      pQ = new zQ.e(DQ.buffer);

    function GQ(QQ) {
      let WQ = 0;
      for (const XQ of QQ) WQ += XQ._lightVersion ?? 0;
      return WQ
    }

    function UQ(QQ, WQ) {
      QQ.fill(0);
      let XQ = 0;
      for (const wQ of WQ) {
        if (XQ >= VQ.c) break;
        wQ._writeLightUbo && (wQ._writeLightUbo(QQ, 4 + 16 * XQ), XQ++)
      }
      DQ[0] = XQ, QQ[0] = pQ[0]
    }

    function bQ(QQ, WQ) {
      let XQ = WQ._lightGpuState;
      const wQ = 16 + 16 * VQ.c * 4;
      if (XQ && XQ._byteSize === wQ) return XQ;
      const qQ = !XQ;
      XQ?._buffer.destroy();
      const TQ = new zQ.e(wQ / 4);
      return UQ(TQ, WQ.lights), QQ._applyLightFoOffset?.(TQ, WQ), XQ = {
        _buffer: yQ(QQ, TQ),
        _scratch: TQ,
        kS: GQ(WQ.lights) + (QQ._lightFoVersion?.(WQ) ?? 0),
        _listVersion: WQ._lightListVersion ?? 0,
        _lightCount: WQ.lights.length,
        _byteSize: wQ
      }, WQ._lightGpuState = XQ, qQ && WQ._disposables.push((() => {
        WQ._lightGpuState?._buffer.destroy(), WQ._lightGpuState = void 0
      })), XQ
    }

    function vQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qQ = WQ;
      if (0 === wQ && 16 === qQ.length) return void QQ.set(qQ, XQ);
      const TQ = wQ,
        zQ = XQ;
      QQ[zQ + 0] = qQ[TQ + 0], QQ[zQ + 1] = qQ[TQ + 1], QQ[zQ + 2] = qQ[TQ + 2], QQ[zQ + 3] = qQ[TQ + 3], QQ[zQ + 4] = qQ[TQ + 4], QQ[zQ + 5] = qQ[TQ + 5], QQ[zQ + 6] = qQ[TQ + 6], QQ[zQ + 7] = qQ[TQ + 7], QQ[zQ + 8] = qQ[TQ + 8], QQ[zQ + 9] = qQ[TQ + 9], QQ[zQ + 10] = qQ[TQ + 10], QQ[zQ + 11] = qQ[TQ + 11], QQ[zQ + 12] = qQ[TQ + 12], QQ[zQ + 13] = qQ[TQ + 13], QQ[zQ + 14] = qQ[TQ + 14], QQ[zQ + 15] = qQ[TQ + 15]
    }

    function dQ(QQ, WQ, XQ, wQ, qQ) {
      QQ.fill(0);
      const TQ = function(QQ, WQ) {
          const XQ = PQ(QQ);
          if (QQ._vpVer === XQ && QQ._vpAspect === WQ) return QQ._vpCache;
          const wQ = QQ._vpCache;
          return function(QQ, WQ, XQ, wQ, qQ, TQ) {
            const zQ = XQ[wQ],
              sQ = XQ[wQ + 1],
              FQ = XQ[wQ + 2],
              PQ = XQ[wQ + 3],
              gQ = XQ[wQ + 4],
              JQ = XQ[wQ + 5],
              rQ = XQ[wQ + 6],
              IQ = XQ[wQ + 7],
              jQ = XQ[wQ + 8],
              BQ = XQ[wQ + 9],
              yQ = XQ[wQ + 10],
              VQ = XQ[wQ + 11],
              DQ = XQ[wQ + 12],
              pQ = XQ[wQ + 13],
              GQ = XQ[wQ + 14],
              UQ = XQ[wQ + 15];
            let bQ = qQ[TQ],
              vQ = qQ[TQ + 1],
              dQ = qQ[TQ + 2],
              HQ = qQ[TQ + 3];
            QQ[WQ] = zQ * bQ + gQ * vQ + jQ * dQ + DQ * HQ, QQ[WQ + 1] = sQ * bQ + JQ * vQ + BQ * dQ + pQ * HQ, QQ[WQ + 2] = FQ * bQ + rQ * vQ + yQ * dQ + GQ * HQ, QQ[WQ + 3] = PQ * bQ + IQ * vQ + VQ * dQ + UQ * HQ, bQ = qQ[TQ + 4], vQ = qQ[TQ + 5], dQ = qQ[TQ + 6], HQ = qQ[TQ + 7], QQ[WQ + 4] = zQ * bQ + gQ * vQ + jQ * dQ + DQ * HQ, QQ[WQ + 5] = sQ * bQ + JQ * vQ + BQ * dQ + pQ * HQ, QQ[WQ + 6] = FQ * bQ + rQ * vQ + yQ * dQ + GQ * HQ, QQ[WQ + 7] = PQ * bQ + IQ * vQ + VQ * dQ + UQ * HQ, bQ = qQ[TQ + 8], vQ = qQ[TQ + 9], dQ = qQ[TQ + 10], HQ = qQ[TQ + 11], QQ[WQ + 8] = zQ * bQ + gQ * vQ + jQ * dQ + DQ * HQ, QQ[WQ + 9] = sQ * bQ + JQ * vQ + BQ * dQ + pQ * HQ, QQ[WQ + 10] = FQ * bQ + rQ * vQ + yQ * dQ + GQ * HQ, QQ[WQ + 11] = PQ * bQ + IQ * vQ + VQ * dQ + UQ * HQ, bQ = qQ[TQ + 12], vQ = qQ[TQ + 13], dQ = qQ[TQ + 14], HQ = qQ[TQ + 15], QQ[WQ + 12] = zQ * bQ + gQ * vQ + jQ * dQ + DQ * HQ, QQ[WQ + 13] = sQ * bQ + JQ * vQ + BQ * dQ + pQ * HQ, QQ[WQ + 14] = FQ * bQ + rQ * vQ + yQ * dQ + GQ * HQ, QQ[WQ + 15] = PQ * bQ + IQ * vQ + VQ * dQ + UQ * HQ
          }(wQ, 0, gQ(QQ, WQ), 0, sQ(QQ), 0), QQ._vpVer = XQ, QQ._vpAspect = WQ, wQ
        }(wQ, qQ),
        zQ = sQ(wQ),
        FQ = wQ.worldMatrix;
      vQ(QQ, TQ, 0), vQ(QQ, zQ, 16), WQ.useFloatingOrigin ? (QQ[32] = 0, QQ[33] = 0, QQ[34] = 0) : (QQ[32] = FQ[12], QQ[33] = FQ[13], QQ[34] = FQ[14]), QQ[87] = WQ.canvas.width;
      const JQ = XQ.imageProcessing;
      QQ[76] = JQ.exposure, QQ[77] = JQ.contrast, QQ[78] = XQ._envTextures?.lodGenerationScale ?? .8, QQ[79] = +JQ.toneMappingEnabled, QQ[37] = WQ.canvas.height
    }

    function HQ(QQ, WQ) {
      return {
        _renderables: QQ,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: WQ
      }
    }

    function aQ(QQ, WQ, XQ) {
      QQ.clr ??= !0;
      const qQ = QQ.rt._descriptor,
        TQ = QQ.depth?._descriptor,
        FQ = {
          _colorFormat: qQ.format,
          _depthStencilFormat: TQ?.dFormat ?? qQ.dFormat,
          _depthCompare: qQ.depthCompare ?? TQ?.depthCompare,
          _sampleCount: qQ.samples
        },
        gQ = {
          loadOp: "clear",
          storeOp: "store"
        },
        JQ = {
          ...HQ([], -1),
          name: QQ.name,
          _config: QQ,
          _ownsTargets: !QQ.sharedRt,
          engine: WQ,
          cB: XQ,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [gQ]
          },
          _colorAttachment: gQ,
          _sceneUBO: rQ(WQ, 368),
          _suData: new zQ.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: FQ,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (JQ._disposed) throw new Error("RenderTask has been disposed.");
            JQ._recordExplicit ? JQ._recordExplicit(JQ, !0) : iQ(JQ, !1 !== QQ.autoMirror ? XQ._renderables.slice() : JQ._renderables, !0)
          },
          execute: () => function(QQ, WQ, XQ) {
            if (!1 === QQ.enabled) return 0;
            const wQ = QQ.cB;
            ! function(QQ, WQ, XQ) {
              const wQ = QQ.cB;
              !1 !== QQ._config.autoMirror && QQ._lastVersion !== wQ._renderableVersion && iQ(QQ, wQ._renderables.slice());
              AQ(QQ, WQ);
              const qQ = QQ._updateContext,
                TQ = QQ._config.cam ?? wQ.camera;
              XQ._colorFormat && (QQ._config._skipClusteredLights || wQ._clusteredLightUpdater?.(TQ, qQ.targetWidth, qQ.targetHeight), function(QQ, WQ) {
                const XQ = bQ(QQ, WQ),
                  wQ = GQ(WQ.lights) + (QQ._lightFoVersion?.(WQ) ?? 0),
                  qQ = WQ._lightListVersion ?? 0;
                wQ === XQ.kS && qQ === XQ._listVersion && WQ.lights.length === XQ._lightCount || (XQ.kS = wQ, XQ._listVersion = qQ, XQ._lightCount = WQ.lights.length, UQ(XQ._scratch, WQ.lights), QQ._applyLightFoOffset?.(XQ._scratch, WQ), QQ._device.queue.writeBuffer(XQ._buffer, 0, XQ._scratch)), XQ._buffer
              }(WQ, wQ));
              (function(QQ, WQ, XQ, wQ) {
                if (!wQ) return;
                const qQ = wQ.viewport,
                  TQ = QQ._config.rt,
                  zQ = (QQ._config.cs ? WQ.canvas.width / WQ.canvas.height : TQ._width / TQ._height) * (qQ ? qQ.width / qQ.height : 1),
                  sQ = XQ.fog,
                  FQ = XQ.imageProcessing,
                  gQ = PQ(wQ),
                  JQ = XQ._envTextures,
                  rQ = QQ._sceneUboCacheKey;
                if (rQ[0] === wQ && rQ[1] === sQ && rQ[2] === gQ && rQ[3] === zQ && rQ[4] === FQ.exposure && rQ[5] === FQ.contrast && rQ[6] === JQ) return;
                rQ[0] = wQ, rQ[1] = sQ, rQ[2] = gQ, rQ[3] = zQ, rQ[4] = FQ.exposure, rQ[5] = FQ.contrast, rQ[6] = JQ;
                const IQ = QQ._suData;
                dQ(IQ, WQ, XQ, wQ, zQ);
                const jQ = XQ._sceneUboContributors;
                if (jQ)
                  for (const PQ of jQ) PQ(IQ, XQ);
                WQ._device.queue.writeBuffer(QQ._sceneUBO, 0, IQ)
              })(QQ, WQ, wQ, TQ), qQ.XM = TQ, QQ._batchState?._reset(), RQ(QQ._opaqueBindings, qQ), RQ(QQ._directBindings, qQ), RQ(QQ._transparentBindings, qQ), QQ._batchState?._flush(WQ),
                function(QQ, WQ) {
                  const XQ = QQ._transparentBindings;
                  if (XQ.length <= 1 || !WQ) return;
                  const wQ = sQ(WQ);
                  for (const qQ of XQ) {
                    const QQ = qQ.renderable._worldCenter;
                    qQ._sortDistance = QQ ? QQ[0] * wQ[2] + QQ[1] * wQ[6] + QQ[2] * wQ[10] + wQ[14] : 0
                  }
                  XQ.sort(lQ)
                }(QQ, TQ)
            }(QQ, WQ, XQ);
            const qQ = QQ._colorAttachment,
              TQ = QQ._config;
            TQ.rt._colorView && (TQ.rt === wQ.surface.scRT && (qQ.view = TQ.rt._colorView), qQ.resolveTarget = TQ.rst?._colorView ?? void 0, qQ.clearValue = TQ.clrColor ?? wQ.clearColor, qQ.loadOp = TQ.clr ? "clear" : "load");
            if (QQ._executeWithTransmission) return QQ._executeWithTransmission(XQ._sampleCount);
            const zQ = WQ._currentEncoder.beginRenderPass(QQ._renderPassDescriptor),
              FQ = cQ(QQ, zQ);
            return zQ.end(), FQ
          }(JQ, WQ, FQ),
          dispose() {
            if (JQ._disposed) return;
            JQ._disposed = !0;
            const WQ = JQ._pendingMeshes;
            WQ && (WQ.length = 0);
            for (const QQ of JQ._renderables) JQ._retireRenderable?.(JQ.engine, QQ);
            JQ._passes.length = JQ._opaqueBindings.length = JQ._directBindings.length = 0, JQ._transparentBindings.length = JQ._renderables.length = JQ._ob.length = 0, JQ._ownsTargets && ((0, wQ.h)(QQ.rt), (0, wQ.h)(QQ.rst)), QQ.depth?._eager || (0, wQ.h)(QQ.depth);
            const XQ = JQ._sceneUBO;
            (0, IQ.g)(JQ.engine, (() => XQ.destroy())), JQ._batchState?._release(JQ.engine), JQ._batchState = void 0
          }
        };
      return JQ
    }

    function lQ(QQ, WQ) {
      return WQ._sortDistance - QQ._sortDistance || QQ.renderable.order - WQ.renderable.order
    }

    function hQ(QQ, WQ) {
      return QQ.renderable.order - WQ.renderable.order
    }

    function iQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ._renderables,
        XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        qQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        TQ = arguments.length > 4 ? arguments[4] : void 0;
      const zQ = QQ._config,
        sQ = zQ.rt,
        FQ = QQ._batchState,
        PQ = HQ(WQ, QQ.cB._renderableVersion);
      if (XQ) {
        const WQ = (WQ, XQ) => {
          WQ && (XQ || QQ._ownsTargets || WQ._eager) && (0, wQ.g)(WQ, QQ.engine)
        };
        WQ(sQ), sQ._descriptor.samples > 1 && WQ(zQ.rst), WQ(zQ.depth, !0)
      }
      const {
        _opaqueBindings: gQ,
        _directBindings: JQ,
        _transparentBindings: rQ
      } = PQ;
      try {
        for (const XQ of WQ) {
          const WQ = XQ.bind(QQ.engine, QQ._targetSignature);
          PQ._batchState = QQ._targetSignature._collectBatches?.(PQ._batchState, WQ), XQ.isTransparent || XQ._transmissive ? rQ.push(WQ) : XQ._direct ? JQ.push(WQ) : gQ.push(WQ)
        }
        gQ.sort(hQ), JQ.sort(hQ), XQ && AQ(QQ, QQ.engine, !1)
      } catch (IQ) {
        throw PQ._batchState?._release(void 0, TQ ?? [FQ]), IQ
      }
      return XQ && (! function(QQ, WQ) {
        const XQ = QQ._config,
          wQ = QQ._colorAttachment;
        wQ.view = WQ._colorView, QQ._renderPassDescriptor.colorAttachments = WQ._colorView ? [wQ] : [];
        const qQ = XQ.depth ?? WQ,
          TQ = qQ._depthView;
        let zQ;
        if (TQ) {
          const QQ = qQ._descriptor,
            WQ = (XQ.depth ? qQ._eager : !1 === XQ.depthClear) ? "load" : "clear";
          zQ = {
            view: TQ,
            depthClearValue: QQ.depthClearValue ?? 0,
            depthLoadOp: WQ,
            depthStoreOp: "store"
          }, QQ.dFormat?.includes("stencil") && (zQ.stencilClearValue = 0, zQ.stencilLoadOp = WQ, zQ.stencilStoreOp = "store")
        }
        QQ._renderPassDescriptor.depthStencilAttachment = zQ
      }(QQ, sQ), QQ._updateContext.targetWidth = sQ._width, QQ._updateContext.targetHeight = sQ._height), qQ && (Object.assign(QQ, PQ), FQ?._release(QQ.engine, [PQ._batchState])), PQ
    }

    function cQ(QQ, WQ) {
      const XQ = QQ.engine,
        wQ = QQ._config,
        TQ = wQ.rt,
        zQ = QQ.cB,
        sQ = QQ._opaqueBindings,
        FQ = QQ._ob,
        PQ = QQ._sceneBG;
      if (function(QQ, WQ, XQ, wQ) {
          const qQ = WQ?.viewport;
          if (!qQ) return;
          const TQ = Math.floor(qQ.x * XQ),
            zQ = Math.floor((1 - qQ.y - qQ.height) * wQ),
            sQ = Math.ceil((qQ.x + qQ.width) * XQ) - TQ,
            FQ = Math.ceil((1 - qQ.y) * wQ) - zQ;
          QQ.setViewport(TQ, zQ, sQ, FQ, 0, 1), QQ.setScissorRect(TQ, zQ, sQ, FQ)
        }(WQ, wQ.cam ?? zQ.camera, TQ._width, TQ._height), WQ.setBindGroup(0, PQ), QQ._lastVis !== qQ.c || !FQ.length) {
        const WQ = TQ._descriptor,
          wQ = XQ._device.createRenderBundleEncoder({
            colorFormats: WQ.format ? [WQ.format] : [],
            depthStencilFormat: QQ._targetSignature._depthStencilFormat,
            sampleCount: WQ.samples
          });
        wQ.setBindGroup(0, PQ), EQ(wQ, sQ, XQ), FQ[0] = wQ.finish(), QQ._lastVis = qQ.c
      }
      let gQ = sQ.length;
      return WQ.executeBundles(FQ), WQ.setBindGroup(0, PQ), gQ += EQ(WQ, QQ._directBindings, XQ), gQ += EQ(WQ, QQ._transparentBindings, XQ), gQ
    }

    function AQ(QQ, WQ) {
      let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wQ = bQ(WQ, QQ.cB)._buffer;
      if (wQ === QQ._lightsUBO) return;
      const qQ = WQ._device.createBindGroup({
        layout: BQ(WQ),
        entries: [{
          binding: 0,
          resource: {
            buffer: QQ._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: wQ
          }
        }]
      });
      QQ._lightsUBO = wQ, QQ._sceneBG = qQ, XQ && (QQ._ob = [])
    }

    function RQ(QQ, WQ) {
      for (const XQ of QQ) XQ.update?.(WQ)
    }

    function EQ(QQ, WQ, XQ) {
      let wQ = null,
        qQ = 0;
      for (const TQ of WQ) {
        const WQ = TQ.renderable.mesh;
        WQ && !1 === WQ.visible || (TQ.pipeline !== wQ && (QQ.setPipeline(TQ.pipeline), wQ = TQ.pipeline), qQ += TQ.draw(QQ, XQ))
      }
      return qQ
    }

    function CQ(QQ) {
      const WQ = QQ._materialSwapQueue;
      if (!WQ[0] || QQ._runtimeBuilds?.w) return;
      let wQ, qQ, TQ;
      const zQ = QQ._renderables;
      for (const XQ of WQ) {
        const WQ = XQ.material;
        if (!WQ) continue;
        const sQ = XQ._runtimeThinBuild;
        if (sQ) {
          qQ = sQ(QQ, XQ, qQ);
          continue
        }
        const FQ = QQ._groups.get(WQ._buildGroup),
          PQ = FQ?.r;
        if (!PQ) {
          (TQ ??= []).push(XQ);
          continue
        }
        if (FQ._w?.(XQ)) {
          (TQ ??= []).push([XQ, WQ]);
          continue
        }
        const gQ = QQ._meshDisposables.get(XQ);
        gQ && (QQ._meshDisposables.delete(XQ), (0, IQ.g)(QQ.surface.engine, (() => gQ.forEach((QQ => QQ())))));
        const JQ = FQ.o;
        let rQ;
        for (let QQ = zQ.length; QQ--;) zQ[QQ].mesh === XQ && (rQ = zQ.splice(QQ, 1)[0]);
        WQ._csmGen = -~WQ._csmGen;
        const jQ = PQ(QQ, XQ);
        if (JQ) {
          const QQ = JQ.indexOf(rQ);
          QQ < 0 ? JQ.push(jQ) : JQ[QQ] = jQ
        }
        wQ = zQ.push(jQ)
      }
      if (wQ && (zQ.sort(((QQ, WQ) => QQ.order - WQ.order)), QQ._renderableVersion++, QQ._materialEpoch++), WQ.length = 0, !TQ) return qQ;
      const sQ = TQ;
      return XQ.e(371).then((() => XQ(61644))).then((WQ => {
        let {
          C: XQ
        } = WQ;
        return XQ(QQ, sQ, qQ)
      }), (WQ => {
        const XQ = QQ._runtimeBuilds;
        XQ ? XQ._x(WQ) : console.error(WQ)
      }))
    }
    var uQ = null;

    function LQ(QQ, WQ) {
      const XQ = QQ.engine,
        qQ = {
          _kind: "cB",
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
            XQ.useFloatingOrigin && qQ.camera && !qQ.camera._useFloatingOrigin && (qQ.camera._useFloatingOrigin = !0, qQ.camera._viewVer = -1, qQ.camera._vpVer = -1);
            const QQ = qQ.fixedDeltaMs > 0 ? qQ.fixedDeltaMs : XQ._currentDelta,
              WQ = XQ._currentEncoder;
            let wQ = 0;
            for (const XQ of qQ._beforeRender) XQ(QQ);
            qQ._materialSwapQueue.length && CQ(qQ);
            for (const TQ of qQ._prePasses) wQ += TQ.execute(WQ, XQ);
            for (const TQ of qQ._uniformUpdaters) TQ.update(XQ);
            qQ._drawCallsPre = wQ
          },
          _record: () => qQ._frameGraph.execute(),
          _resize() {
            qQ._frameGraph.build()
          }
        },
        zQ = function() {
          const QQ = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let WQ = 0; WQ < QQ._tasks.length; WQ++) TQ(QQ, QQ._tasks[WQ]);
              for (const WQ of QQ._tasks)
                for (const QQ of WQ._passes) QQ._initialize()
            },
            execute() {
              let WQ = 0;
              for (const XQ of QQ._tasks)
                if (!1 !== XQ.executionEnabled)
                  if (XQ.execute) WQ += XQ.execute();
                  else
                    for (const QQ of XQ._passes) WQ += QQ._execute();
              return WQ
            },
            dispose() {
              for (const WQ of QQ._tasks) WQ.dispose();
              QQ._tasks.length = 0, QQ._currentProcessedTask = null
            }
          };
          return QQ
        }();
      if (qQ._frameGraph = zQ, !1 !== WQ?.defaultRenderTask) {
        const WQ = QQ.msaaSamples > 1,
          TQ = WQ ? (0, wQ.d)({
            lbl: "scene-color",
            format: QQ.format,
            dFormat: "depth24plus-stencil8",
            samples: QQ.msaaSamples,
            size: QQ
          }) : QQ.scRT,
          sQ = WQ ? void 0 : (0, wQ.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: QQ
          });
        ! function(QQ, WQ) {
          QQ._tasks.push(WQ)
        }(zQ, aQ({
          name: "cB",
          rt: TQ,
          rst: WQ ? QQ.scRT : void 0,
          depth: sQ
        }, XQ, qQ))
      }
      return qQ._disposables.push((() => zQ.dispose())), qQ
    }
    async function kQ(QQ) {
      const WQ = QQ;
      for (WQ._built || (WQ._materialSwapQueue.length = 0); WQ._deferredBuilders.length;) {
        const QQ = WQ._deferredBuilders.splice(0);
        await Promise.all(QQ.map((QQ => QQ())))
      }
      await CQ(WQ), uQ?.get(WQ)?.() || (WQ._runtimeBuilds?._e(), WQ._renderableVersion++, WQ._built = !0), await (WQ._rebuildHook?.(WQ))
    }
    var fQ = null;
    async function SQ(QQ) {
      const WQ = QQ,
        wQ = WQ.surface;
      (0, qQ.f)(wQ, WQ) || (await kQ(QQ), WQ._renderables.sort(tQ), await Promise.all(WQ._frameGraph._tasks.map((QQ => QQ._preload?.()))), fQ && await fQ(WQ), WQ._frameGraph.build(), wQ._renderingContexts[0] && (await XQ.e(369).then((() => XQ(61633)))).configureSwapchainOverlayScene(wQ, WQ), uQ?.get(WQ)?.() || (0, qQ.i)(wQ, WQ))
    }
    var tQ = (QQ, WQ) => QQ.order - WQ.order
  },
  41940: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ,
      e: () => gQ
    });
    var wQ = XQ(41893),
      qQ = XQ(41901),
      TQ = XQ(41906),
      zQ = XQ(41914),
      sQ = XQ(41920),
      FQ = XQ(41927);

    function PQ(QQ, WQ, XQ) {
      let sQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (WQ < 1 || XQ < 1) && (0, wQ.e)(676, WQ, XQ);
      const PQ = QQ._device,
        gQ = sQ.mipMaps ?? !1,
        JQ = sQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        rQ = gQ ? (0, FQ.e)(WQ, XQ) : 1,
        IQ = PQ.createTexture({
          size: {
            width: WQ,
            height: XQ
          },
          format: JQ,
          mipLevelCount: rQ,
          usage: qQ.h.TEXTURE_BINDING | qQ.h.COPY_DST | qQ.h.RENDER_ATTACHMENT
        }),
        jQ = {
          addressModeU: sQ.addressModeU ?? "clamp-to-edge",
          addressModeV: sQ.addressModeV ?? "clamp-to-edge",
          minFilter: sQ.minFilter ?? "linear",
          magFilter: sQ.magFilter ?? "linear",
          mipmapFilter: gQ ? "linear" : "nearest"
        },
        BQ = (0, zQ.c)(QQ, jQ),
        yQ = {
          texture: IQ,
          view: IQ.createView(),
          sampler: BQ,
          width: WQ,
          height: XQ
        };
      return (0, TQ.d)(yQ), QQ._dlr && QQ._dlr.t(yQ, {
        kind: "dynamic",
        width: WQ,
        height: XQ,
        format: JQ,
        levels: rQ,
        samplerDesc: jQ,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), yQ
    }

    function gQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const qQ = wQ.invertY ?? !0,
        TQ = wQ.premultiplyAlpha ?? !1;
      QQ._device.queue.copyExternalImageToTexture({
        source: XQ,
        flipY: qQ
      }, {
        texture: WQ.texture,
        premultipliedAlpha: TQ
      }, [WQ.width, WQ.height]);
      const zQ = WQ._recoverySource;
      zQ && "dynamic" === zQ.kind && (zQ.source = XQ, zQ.flipY = qQ, zQ.premultipliedAlpha = TQ), WQ.texture.mipLevelCount > 1 && (0, sQ.generateMipmaps)(QQ, WQ.texture)
    }
  },
  41932: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(41893),
      qQ = XQ(41901),
      TQ = XQ(41906),
      zQ = XQ(41914),
      sQ = XQ(41927);
    async function FQ(QQ, WQ) {
      let FQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [PQ, gQ] = function(QQ) {
        const WQ = QQ,
          XQ = [
            [WQ.displayWidth, WQ.displayHeight],
            [WQ.videoWidth, WQ.videoHeight],
            [WQ.naturalWidth, WQ.naturalHeight],
            [WQ.width, WQ.height]
          ];
        for (const [wQ, qQ] of XQ)
          if (void 0 !== wQ && void 0 !== qQ && Number.isInteger(wQ) && Number.isInteger(qQ) && wQ > 0 && qQ > 0) return [wQ, qQ];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(WQ), [JQ, rQ] = function(QQ, WQ, XQ) {
        if (void 0 === XQ) return [QQ, WQ];
        if (!Number.isInteger(XQ) || XQ < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${XQ})`);
        if (Math.max(QQ, WQ) <= XQ) return [QQ, WQ];
        const wQ = XQ / Math.max(QQ, WQ);
        return QQ >= WQ ? [XQ, Math.max(1, Math.round(WQ * wQ))] : [Math.max(1, Math.round(QQ * wQ)), XQ]
      }(PQ, gQ, FQ.maxDimension), IQ = FQ.mipMaps ?? !0, jQ = FQ.premultiplyAlpha ?? !1;
      let BQ = WQ,
        yQ = null;
      const VQ = {
        texture: null
      };
      try {
        JQ === PQ && rQ === gQ || (yQ = await createImageBitmap(WQ, {
          resizeWidth: JQ,
          resizeHeight: rQ,
          resizeQuality: "high",
          premultiplyAlpha: jQ ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), BQ = yQ);
        const DQ = QQ._device,
          pQ = FQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          GQ = IQ ? (0, sQ.e)(JQ, rQ) : 1,
          UQ = GQ > 1 ? (await Promise.resolve().then((() => XQ(41920)))).generateMipmaps : null,
          bQ = {
            addressModeU: FQ.addressModeU ?? "repeat",
            addressModeV: FQ.addressModeV ?? "repeat",
            minFilter: FQ.minFilter ?? "linear",
            magFilter: FQ.magFilter ?? "linear",
            mipmapFilter: IQ ? "linear" : "nearest"
          };
        bQ.maxAnisotropy = "linear" === bQ.minFilter && "linear" === bQ.magFilter && "linear" === bQ.mipmapFilter ? 4 : 1;
        const vQ = FQ.invertY ?? !0,
          dQ = async WQ => {
            let XQ;
            DQ.pushErrorScope("validation"), DQ.pushErrorScope("out-of-memory");
            let TQ = null;
            try {
              const XQ = VQ.texture = DQ.createTexture({
                size: {
                  width: JQ,
                  height: rQ
                },
                format: pQ,
                mipLevelCount: GQ,
                usage: qQ.h.TEXTURE_BINDING | qQ.h.COPY_DST | qQ.h.RENDER_ATTACHMENT
              });
              DQ.queue.copyExternalImageToTexture({
                source: WQ,
                flipY: vQ
              }, {
                texture: XQ,
                premultipliedAlpha: jQ
              }, {
                width: JQ,
                height: rQ
              }), UQ && UQ(QQ, XQ), TQ = (0, zQ.c)(QQ, bQ)
            } catch (IQ) {
              XQ = IQ
            }
            const [sQ, FQ] = await Promise.all([DQ.popErrorScope(), DQ.popErrorScope()]);
            if (XQ) throw XQ;
            const PQ = FQ ?? sQ;
            if (PQ) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${PQ.message}`, {
              cause: PQ
            });
            const gQ = VQ.texture;
            return gQ && TQ || (0, wQ.e)(677), {
              texture: gQ,
              view: gQ.createView(),
              sampler: TQ,
              width: JQ,
              height: rQ
            }
          }, HQ = await (QQ._dlr?.x(BQ, JQ, rQ, pQ, GQ, bQ, vQ, jQ, dQ)) ?? await dQ(BQ);
        return (0, TQ.d)(HQ), HQ
      } catch (DQ) {
        throw VQ.texture?.destroy(), DQ
      } finally {
        yQ?.close()
      }
    }
  },
  41920: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      generateMipmaps: () => IQ,
      recordMipmaps: () => jQ
    });
    var wQ = XQ(41901),
      qQ = XQ(41914),
      TQ = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var zQ = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      sQ = null,
      FQ = null,
      PQ = null,
      gQ = null,
      JQ = null;

    function rQ(QQ) {
      const WQ = QQ._device;
      WQ !== JQ && (sQ?.clear(), sQ = null, FQ = null, PQ = null, gQ = null, JQ = null, JQ = WQ), FQ ??= WQ.createShaderModule({
        code: zQ
      }), PQ ??= function(QQ) {
        return (0, qQ.c)(QQ, TQ)
      }(QQ), gQ ??= WQ.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: wQ.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: wQ.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function IQ(QQ, WQ, XQ) {
      const wQ = QQ._device,
        qQ = wQ.createCommandEncoder();
      jQ(QQ, WQ, qQ, XQ), wQ.queue.submit([qQ.finish()])
    }

    function jQ(QQ, WQ, XQ, wQ) {
      if (WQ.mipLevelCount <= 1) return;
      const qQ = QQ._device,
        TQ = function(QQ, WQ) {
          const XQ = QQ._device;
          rQ(QQ), sQ ??= new Map;
          let wQ = sQ.get(WQ);
          return wQ || (wQ = XQ.createRenderPipeline({
            layout: XQ.createPipelineLayout({
              bindGroupLayouts: [gQ]
            }),
            vertex: {
              module: FQ,
              entryPoint: "vs"
            },
            fragment: {
              module: FQ,
              entryPoint: "fs",
              targets: [{
                format: WQ
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), sQ.set(WQ, wQ)), wQ
        }(QQ, WQ.format),
        zQ = null != wQ ? {
          dimension: "2d",
          baseArrayLayer: wQ,
          arrayLayerCount: 1
        } : {};
      for (let sQ = 1; sQ < WQ.mipLevelCount; sQ++) {
        const QQ = WQ.createView({
            baseMipLevel: sQ - 1,
            mipLevelCount: 1,
            ...zQ
          }),
          wQ = WQ.createView({
            baseMipLevel: sQ,
            mipLevelCount: 1,
            ...zQ
          }),
          FQ = qQ.createBindGroup({
            layout: gQ,
            entries: [{
              binding: 0,
              resource: QQ
            }, {
              binding: 1,
              resource: PQ
            }]
          }),
          JQ = XQ.beginRenderPass({
            colorAttachments: [{
              view: wQ,
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
        JQ.setPipeline(TQ), JQ.setBindGroup(0, FQ), JQ.draw(3), JQ.end()
      }
    }
  },
  41927: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return Math.floor(Math.log2(Math.max(QQ, WQ))) + 1
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  41890: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      h: () => gQ
    });
    var wQ = XQ(41893),
      qQ = XQ(41901),
      TQ = XQ(41906),
      zQ = XQ(41914),
      sQ = XQ(41920),
      FQ = XQ(41927);

    function PQ(QQ, WQ, XQ, sQ) {
      let PQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (WQ < 1 || XQ < 1 || sQ < 1) && (0, wQ.e)(722, WQ, XQ, sQ);
      const gQ = QQ._device,
        JQ = PQ.mipMaps ?? !0,
        rQ = PQ.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        IQ = gQ.createTexture({
          size: {
            width: WQ,
            height: XQ,
            depthOrArrayLayers: sQ
          },
          dimension: "2d",
          format: rQ,
          mipLevelCount: JQ ? (0, FQ.e)(WQ, XQ) : 1,
          usage: qQ.h.TEXTURE_BINDING | qQ.h.COPY_DST | qQ.h.RENDER_ATTACHMENT
        }),
        jQ = (0, zQ.c)(QQ, {
          addressModeU: PQ.addressModeU ?? "repeat",
          addressModeV: PQ.addressModeV ?? "repeat",
          minFilter: PQ.minFilter ?? "linear",
          magFilter: PQ.magFilter ?? "linear",
          mipmapFilter: JQ ? "linear" : "nearest"
        }),
        BQ = {
          texture: IQ,
          view: IQ.createView({
            dimension: "2d-array"
          }),
          sampler: jQ,
          width: WQ,
          height: XQ,
          layers: sQ
        };
      return (0, TQ.d)(BQ), BQ
    }

    function gQ(QQ, WQ, XQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (XQ < 0 || XQ >= WQ.layers || (0 | XQ) !== XQ) && (0, wQ.e)(723, WQ.layers, XQ);
      const zQ = TQ.invertY ?? !0,
        FQ = TQ.premultiplyAlpha ?? !1;
      QQ._device.queue.copyExternalImageToTexture({
        source: qQ,
        flipY: zQ
      }, {
        texture: WQ.texture,
        origin: [0, 0, XQ],
        premultipliedAlpha: FQ
      }, [WQ.width, WQ.height, 1]), WQ.texture.mipLevelCount > 1 && (0, sQ.generateMipmaps)(QQ, WQ.texture, XQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);