export const id = 622;
export const ids = [622];
export const modules = {
  53728: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(53716),
      tR = GR(53735);

    function uR(RR) {
      (0, tR.d)(RR), (0, yR.u)(RR);
      const JR = RR._surfaces;
      for (const GR of JR) GR._renderingContexts.length = 0, GR._ro?.disconnect(), GR._context.unconfigure();
      JR.length = 0;
      try {
        RR._disposeManagedResources?.(), RR._disposeStorageBuffers?.()
      } finally {
        RR._device.destroy()
      }
    }
  },
  53716: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => wR,
      h: () => nR,
      l: () => rR,
      n: () => eR,
      o: () => AR,
      q: () => UR,
      u: () => WR
    });
    var yR = GR(53654);
    var tR = "Babylon Lite v1.32.0",
      uR = GR(53720);

    function ZR(RR) {
      return "clientWidth" in RR
    }
    var qR = 1;

    function iR(RR, JR, GR) {
      const iR = JR.getContext("webgpu");
      iR || (0, yR.c)(54), ZR(JR) && JR.setAttribute("data-engine", tR);
      const fR = GR?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        VR = GR?.srgb ? (KR = fR).endsWith("-srgb") ? KR : `${KR}-srgb` : fR;
      var KR;
      const wR = GR?.alphaMode ?? "opaque";
      iR.configure({
        device: RR._device,
        format: fR,
        alphaMode: wR,
        viewFormats: [VR]
      });
      const rR = 1 === GR?.msaaSamples ? 1 : 4,
        eR = (0, uR.e)({
          lbl: "swapchain",
          format: VR,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return eR._eager = !0, {
        engine: RR,
        canvas: JR,
        format: VR,
        msaaSamples: rR,
        scRT: eR,
        maxDevicePixelRatio: GR?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: qR++,
        _context: iR,
        _configureFormat: fR,
        _alphaMode: wR,
        _renderingContexts: []
      }
    }

    function fR(RR) {
      const JR = RR._context.getCurrentTexture(),
        GR = RR.scRT;
      GR._colorTexture = JR, GR._colorView = JR.createView({
        format: RR.format
      }), GR._width = JR.width, GR._height = JR.height
    }

    function VR(RR) {
      const JR = RR.canvas;
      if (!ZR(JR)) return;
      const GR = RR._w ?? JR.clientWidth,
        yR = RR._h ?? JR.clientHeight;
      if (!(GR > 0 && yR > 0)) return;
      const tR = Math.min(globalThis.devicePixelRatio || 1, RR.maxDevicePixelRatio);
      KR(RR, GR * tR | 0, yR * tR | 0)
    }

    function KR(RR, JR, GR) {
      const yR = RR.canvas,
        tR = 0 | JR,
        uR = 0 | GR;
      if (tR > 0 && uR > 0 && (tR !== yR.width || uR !== yR.height)) {
        yR.width = tR, yR.height = uR, RR.scRT._width = tR, RR.scRT._height = uR;
        for (const JR of RR._renderingContexts) JR._resize?.()
      }
    }
    var wR = 0;

    function rR(RR, JR) {
      return -1 !== RR._renderingContexts.indexOf(JR)
    }

    function eR(RR, JR) {
      return -1 === RR._renderingContexts.indexOf(JR) && (RR._renderingContexts.push(JR), !0)
    }
    var aR = null;
    var LR = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function nR(RR, JR) {
      const uR = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...aR ? aR() : {}
      });
      uR || (0, yR.c)(47);
      const ZR = aR?.deviceFeatures?.(uR, JR) ?? function(RR) {
          return LR.filter((JR => RR.features.has(JR)))
        }(uR),
        qR = await uR.requestDevice({
          requiredFeatures: ZR,
          requiredLimits: JR?.requiredLimits
        });
      console.log(`${tR} - WebGPU engine`);
      const KR = !!JR?.useHighPrecisionMatrix,
        wR = !!JR?.useFloatingOrigin;
      if (wR && !KR && (0, yR.c)(48), KR) {
        const {
          allocateF64Mat4: RR
        } = await GR.e(674).then((() => GR(64208)));
        0
      }
      let rR, eR, nR, UR;
      if (wR) {
        const [{
          wrapRenderableForFO: RR,
          lightFoVersion: JR,
          applyLightFoOffset: yR
        }, {
          makePackMeshWorld: tR
        }] = await Promise.all([GR.e(675).then((() => GR(64212))), GR.e(676).then((() => GR(64219)))]);
        rR = RR, eR = tR, nR = JR, UR = yR
      }
      const WR = {
          _device: qR
        },
        AR = [WR];
      return Object.assign(WR, {
        engine: WR,
        surfaces: AR,
        _surfaces: AR,
        _device: qR,
        _options: JR,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: KR,
        useFloatingOrigin: wR,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: rR,
        _makePackMeshWorld: eR,
        _lightFoVersion: nR,
        _applyLightFoOffset: UR
      }, iR(WR, RR, JR)), VR(WR), fR(WR), WR
    }

    function UR(RR, JR, GR) {
      KR(RR, JR, GR)
    }

    function WR(RR) {
      RR._animFrameId && cancelAnimationFrame(RR._animFrameId), RR._animFrameId = 0, RR._renderFn = null, RR._flushGpuRetirements?.(RR)
    }

    function AR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR.surfaces;
      if (GR !== RR.surfaces)
        for (let tR = GR.length; tR--;) GR[tR].engine !== RR && (0, yR.c)(49);
      CR(RR, JR, GR)
    }

    function CR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR._surfaces,
        yR = 0;
      for (let uR = GR.length; uR--;) yR += GR[uR]._renderingContexts.length;
      if (!yR) return RR.drawCallCount = 0, RR._flushGpuRetirements?.(RR);
      const tR = RR._device.createCommandEncoder({
        label: "frame"
      });
      RR._currentEncoder = tR, RR._currentDelta = JR;
      try {
        RR._gpuTimerBegin?.(tR), yR = 0;
        for (let RR = 0; RR < GR.length; RR++) {
          const JR = GR[RR];
          JR._capturePreFrame?.(JR), fR(JR);
          const tR = JR._renderingContexts;
          for (let RR = 0; RR < tR.length; RR++) {
            const JR = tR[RR];
            JR._update(), yR += JR._drawCallsPre + JR._record()
          }
        }
        const JR = RR._currentEncoder;
        for (let RR = 0; RR < GR.length; RR++) {
          const yR = GR[RR];
          yR._captureService?.(yR, JR)
        }
        RR._gpuTimerEnd?.(JR), RR._cbs[0] = JR.finish(), RR._device.queue.submit(RR._cbs), RR._flushGpuRetirements?.(RR), RR.drawCallCount = yR, RR._gpuTimerResolve?.()
      } finally {
        RR._currentEncoder = void 0
      }
    }
  },
  53658: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => uR,
      j: () => yR
    });
    var yR = globalThis.GPUTextureUsage,
      tR = globalThis.GPUBufferUsage,
      uR = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  53735: (RR, JR, GR) => {
    function yR(RR) {
      tR(RR.splice(0))
    }

    function tR(RR) {
      for (const GR of RR) try {
        GR()
      } catch (JR) {
        console.error("GPU resource retirement failed.", JR)
      }
    }

    function uR(RR, JR) {
      RR._flushGpuRetirements ??= ZR, (RR._retirements ??= []).push(JR)
    }

    function ZR(RR) {
      const JR = RR._retirements;
      if (!JR) return;
      RR._retirements = null;
      const GR = RR._retiring ??= new Set;
      GR.add(JR), queueMicrotask((() => {
        RR._device.queue.onSubmittedWorkDone().then((() => {
          GR.delete(JR), yR(JR)
        })).catch((() => {}))
      }))
    }

    function qR(RR) {
      const JR = RR._retirements,
        GR = RR._retiring;
      RR._retirements = null, RR._retiring = null, JR && yR(JR), GR?.forEach(yR)
    }
    GR.d(JR, {
      d: () => qR,
      e: () => uR
    })
  },
  53720: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      h: () => ZR,
      k: () => qR
    });
    var yR = GR(53658);

    function tR(RR) {
      const JR = RR.size;
      return "canvas" in JR ? JR.canvas : JR
    }

    function uR(RR) {
      return {
        _descriptor: RR,
        _resolveSize: tR,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function ZR(RR, JR) {
      if (RR._eager) return void RR._syncEager?.(JR);
      qR(RR);
      const GR = RR._descriptor,
        {
          width: uR,
          height: ZR
        } = (RR._resolveSize ?? tR)(GR);
      RR._width = uR, RR._height = ZR;
      const iR = JR._device;
      GR.format && (RR._colorTexture = iR.createTexture({
        label: GR.lbl,
        size: {
          width: uR,
          height: ZR
        },
        format: GR.format,
        sampleCount: GR.samples,
        usage: yR.j.RENDER_ATTACHMENT | yR.j.TEXTURE_BINDING | yR.j.COPY_SRC | yR.j.COPY_DST
      }), RR._colorView = RR._colorTexture.createView()), GR.dFormat && (RR._depthTexture = iR.createTexture({
        label: GR.lbl,
        size: {
          width: uR,
          height: ZR
        },
        format: GR.dFormat,
        sampleCount: GR.samples,
        usage: yR.j.RENDER_ATTACHMENT | yR.j.TEXTURE_BINDING
      }), RR._depthView = RR._depthTexture.createView())
    }

    function qR(RR) {
      if (!RR || RR._eager && !RR._disposeAttachments) return;
      const JR = RR._colorTexture,
        GR = RR._depthTexture;
      if (RR._colorTexture = RR._depthTexture = null, RR._colorView = RR._depthView = null, RR._width = RR._height = 0, RR._disposeAttachments) RR._disposeAttachments(JR, GR);
      else try {
        JR?.destroy()
      } finally {
        !1 !== RR._ownsDepthTexture && GR?.destroy()
      }
    }
  },
  53742: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      f: () => tR,
      h: () => uR
    });
    var yR = Float32Array,
      tR = Float64Array,
      uR = Uint32Array
  },
  53745: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    var yR = 16
  },
  53654: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = null;

    function tR(RR) {
      for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), tR = 1; tR < JR; tR++) GR[tR - 1] = arguments[tR];
      const uR = new Error(yR?.(RR, GR) ?? `#${RR}`);
      throw uR.lite = GR, uR
    }
  },
  53689: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(53670);

    function tR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GR = JR.compare,
        tR = JR.lodMinClamp ?? 0,
        uR = JR.lodMaxClamp ?? 32,
        ZR = void 0 !== GR || 0 !== tR || 32 !== uR ? `${GR??""}:${tR}:${uR}` : "";
      return (0, yR.b)(RR, JR, ZR)
    }
  },
  53664: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = null;

    function tR(RR) {
      const JR = yR ??= new WeakMap;
      JR.set(RR, (JR.get(RR) ?? 0) + 1)
    }

    function uR(RR) {
      tR(RR.texture)
    }
  },
  53670: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR
    });
    var yR = null,
      tR = "nearest",
      uR = "clamp-to-edge",
      ZR = {
        minFilter: tR,
        magFilter: tR,
        mipmapFilter: tR,
        addressModeU: uR,
        addressModeV: uR,
        addressModeW: uR,
        maxAnisotropy: 1
      };

    function qR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const tR = RR._device,
        uR = yR ??= new WeakMap;
      let qR = uR.get(tR);
      qR || uR.set(tR, qR = new Map);
      let iR = GR;
      for (const yR in ZR) {
        const RR = yR;
        iR += `:${JR[RR]??ZR[RR]}`
      }
      let fR = qR.get(iR);
      return fR || qR.set(iR, fR = tR.createSampler(JR)), fR
    }
  },
  53737: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => cR,
      e: () => mR
    });
    var yR = GR(53720),
      tR = GR(53716);

    function uR(RR, JR) {
      JR._passes.length = 0, RR._currentProcessedTask = JR;
      try {
        JR.record()
      } finally {
        RR._currentProcessedTask = null
      }
    }
    var ZR = GR(53742);

    function qR(RR) {
      const JR = RR.worldMatrixVersion;
      if (RR._viewVer === JR) return RR._viewCache;
      const GR = RR._viewCache,
        yR = RR.worldMatrix,
        tR = RR._useFloatingOrigin,
        uR = tR ? 0 : yR[12],
        ZR = tR ? 0 : yR[13],
        qR = tR ? 0 : yR[14];
      return GR[0] = yR[0], GR[1] = yR[4], GR[2] = yR[8], GR[3] = 0, GR[4] = yR[1], GR[5] = yR[5], GR[6] = yR[9], GR[7] = 0, GR[8] = yR[2], GR[9] = yR[6], GR[10] = yR[10], GR[11] = 0, GR[12] = -(yR[0] * uR + yR[1] * ZR + yR[2] * qR), GR[13] = -(yR[4] * uR + yR[5] * ZR + yR[6] * qR), GR[14] = -(yR[8] * uR + yR[9] * ZR + yR[10] * qR), GR[15] = 1, RR._viewVer = JR, GR
    }
    var iR = null;

    function fR(RR) {
      return RR._projFov === RR.fov && RR._projNear === RR.nearPlane && RR._projFar === RR.farPlane || (RR._projFov = RR.fov, RR._projNear = RR.nearPlane, RR._projFar = RR.farPlane, RR._projRev = (RR._projRev ?? 0) + 1), RR.worldMatrixVersion + (RR._projRev ?? 0)
    }

    function VR(RR, JR) {
      const GR = fR(RR);
      if (RR._projVer === GR && RR._projAspect === JR) return RR._projCache;
      const yR = RR._projCache;
      return null !== iR && RR.ortho ? iR(RR, JR, yR) : function(RR, JR, GR, yR, tR) {
        const uR = 1 / Math.tan(.5 * JR),
          ZR = tR - yR;
        RR[0] = uR / GR, RR[5] = uR, RR[10] = -yR / ZR, RR[11] = 1, RR[14] = tR * yR / ZR
      }(yR, RR.fov, JR, RR.nearPlane, RR.farPlane), RR._projVer = GR, RR._projAspect = JR, yR
    }
    var KR = GR(53658);

    function wR(RR, JR, GR) {
      return RR._device.createBuffer({
        label: GR,
        size: (yR = JR, tR = 16, Math.ceil(yR / tR) * tR),
        usage: KR.e.UNIFORM | KR.e.COPY_DST
      });
      var yR, tR
    }
    var rR = GR(53735),
      eR = null;

    function aR(RR) {
      const JR = RR._device,
        GR = eR ??= new WeakMap;
      let yR = GR.get(JR);
      return yR || (yR = JR.createBindGroupLayout({
        label: "tL",
        entries: [{
          binding: 0,
          visibility: KR.f.VERTEX | KR.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: KR.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), GR.set(JR, yR)), yR
    }

    function LR(RR, JR, GR) {
      const yR = RR._device,
        tR = wR(RR, JR.byteLength, GR);
      try {
        yR.queue.writeBuffer(tR, 0, JR.buffer, JR.byteOffset, JR.byteLength)
      } catch (uR) {
        throw tR.destroy(), uR
      }
      return tR
    }
    var nR = GR(53745),
      UR = new ZR.h(1),
      WR = new ZR.b(UR.buffer);

    function AR(RR) {
      let JR = 0;
      for (const GR of RR) JR += GR._lightVersion ?? 0;
      return JR
    }

    function CR(RR, JR) {
      RR.fill(0);
      let GR = 0;
      for (const yR of JR) {
        if (GR >= nR.d) break;
        yR._writeLightUbo && (yR._writeLightUbo(RR, 4 + 16 * GR), GR++)
      }
      UR[0] = GR, RR[0] = WR[0]
    }

    function XR(RR, JR) {
      let GR = JR._lightGpuState;
      const yR = 16 + 16 * nR.d * 4;
      if (GR && GR._byteSize === yR) return GR;
      const tR = !GR;
      GR?._buffer.destroy();
      const uR = new ZR.b(yR / 4);
      return CR(uR, JR.lights), RR._applyLightFoOffset?.(uR, JR), GR = {
        _buffer: LR(RR, uR),
        _scratch: uR,
        FY: AR(JR.lights) + (RR._lightFoVersion?.(JR) ?? 0),
        _listVersion: JR._lightListVersion ?? 0,
        _lightCount: JR.lights.length,
        _byteSize: yR
      }, JR._lightGpuState = GR, tR && JR._disposables.push((() => {
        JR._lightGpuState?._buffer.destroy(), JR._lightGpuState = void 0
      })), GR
    }

    function MR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const tR = JR;
      if (0 === yR && 16 === tR.length) return void RR.set(tR, GR);
      const uR = yR,
        ZR = GR;
      RR[ZR + 0] = tR[uR + 0], RR[ZR + 1] = tR[uR + 1], RR[ZR + 2] = tR[uR + 2], RR[ZR + 3] = tR[uR + 3], RR[ZR + 4] = tR[uR + 4], RR[ZR + 5] = tR[uR + 5], RR[ZR + 6] = tR[uR + 6], RR[ZR + 7] = tR[uR + 7], RR[ZR + 8] = tR[uR + 8], RR[ZR + 9] = tR[uR + 9], RR[ZR + 10] = tR[uR + 10], RR[ZR + 11] = tR[uR + 11], RR[ZR + 12] = tR[uR + 12], RR[ZR + 13] = tR[uR + 13], RR[ZR + 14] = tR[uR + 14], RR[ZR + 15] = tR[uR + 15]
    }

    function BR(RR, JR, GR, yR, tR) {
      RR.fill(0);
      const uR = function(RR, JR) {
          const GR = fR(RR);
          if (RR._vpVer === GR && RR._vpAspect === JR) return RR._vpCache;
          const yR = RR._vpCache;
          return function(RR, JR, GR, yR, tR, uR) {
            const ZR = GR[yR],
              qR = GR[yR + 1],
              iR = GR[yR + 2],
              fR = GR[yR + 3],
              VR = GR[yR + 4],
              KR = GR[yR + 5],
              wR = GR[yR + 6],
              rR = GR[yR + 7],
              eR = GR[yR + 8],
              aR = GR[yR + 9],
              LR = GR[yR + 10],
              nR = GR[yR + 11],
              UR = GR[yR + 12],
              WR = GR[yR + 13],
              AR = GR[yR + 14],
              CR = GR[yR + 15];
            let XR = tR[uR],
              MR = tR[uR + 1],
              BR = tR[uR + 2],
              lR = tR[uR + 3];
            RR[JR] = ZR * XR + VR * MR + eR * BR + UR * lR, RR[JR + 1] = qR * XR + KR * MR + aR * BR + WR * lR, RR[JR + 2] = iR * XR + wR * MR + LR * BR + AR * lR, RR[JR + 3] = fR * XR + rR * MR + nR * BR + CR * lR, XR = tR[uR + 4], MR = tR[uR + 5], BR = tR[uR + 6], lR = tR[uR + 7], RR[JR + 4] = ZR * XR + VR * MR + eR * BR + UR * lR, RR[JR + 5] = qR * XR + KR * MR + aR * BR + WR * lR, RR[JR + 6] = iR * XR + wR * MR + LR * BR + AR * lR, RR[JR + 7] = fR * XR + rR * MR + nR * BR + CR * lR, XR = tR[uR + 8], MR = tR[uR + 9], BR = tR[uR + 10], lR = tR[uR + 11], RR[JR + 8] = ZR * XR + VR * MR + eR * BR + UR * lR, RR[JR + 9] = qR * XR + KR * MR + aR * BR + WR * lR, RR[JR + 10] = iR * XR + wR * MR + LR * BR + AR * lR, RR[JR + 11] = fR * XR + rR * MR + nR * BR + CR * lR, XR = tR[uR + 12], MR = tR[uR + 13], BR = tR[uR + 14], lR = tR[uR + 15], RR[JR + 12] = ZR * XR + VR * MR + eR * BR + UR * lR, RR[JR + 13] = qR * XR + KR * MR + aR * BR + WR * lR, RR[JR + 14] = iR * XR + wR * MR + LR * BR + AR * lR, RR[JR + 15] = fR * XR + rR * MR + nR * BR + CR * lR
          }(yR, 0, VR(RR, JR), 0, qR(RR), 0), RR._vpVer = GR, RR._vpAspect = JR, yR
        }(yR, tR),
        ZR = qR(yR),
        iR = yR.worldMatrix;
      MR(RR, uR, 0), MR(RR, ZR, 16), JR.useFloatingOrigin ? (RR[32] = 0, RR[33] = 0, RR[34] = 0) : (RR[32] = iR[12], RR[33] = iR[13], RR[34] = iR[14]), RR[87] = JR.canvas.width;
      const KR = GR.imageProcessing;
      RR[76] = KR.exposure, RR[77] = KR.contrast, RR[78] = GR._envTextures?.lodGenerationScale ?? .8, RR[79] = +KR.toneMappingEnabled, RR[37] = JR.canvas.height
    }

    function lR(RR, JR) {
      return {
        _renderables: RR,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: JR
      }
    }

    function pR(RR, JR, GR) {
      RR.clr ??= !0;
      const tR = RR.rt._descriptor,
        uR = RR.depth?._descriptor,
        iR = {
          _colorFormat: tR.format,
          _depthStencilFormat: uR?.dFormat ?? tR.dFormat,
          _depthCompare: tR.depthCompare ?? uR?.depthCompare,
          _sampleCount: tR.samples
        },
        VR = {
          loadOp: "clear",
          storeOp: "store"
        },
        KR = {
          ...lR([], -1),
          name: RR.name,
          _config: RR,
          _ownsTargets: !RR.sharedRt,
          engine: JR,
          tL: GR,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [VR]
          },
          _colorAttachment: VR,
          _sceneUBO: wR(JR, 368),
          _suData: new ZR.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: iR,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (KR._disposed) throw new Error("RenderTask has been disposed.");
            KR._recordExplicit ? KR._recordExplicit(KR, !0) : vR(KR, !1 !== RR.autoMirror ? GR._renderables.slice() : KR._renderables, !0)
          },
          execute: () => function(RR, JR, GR) {
            if (!1 === RR.enabled) return 0;
            const yR = RR.tL;
            ! function(RR, JR, GR) {
              const yR = RR.tL;
              !1 !== RR._config.autoMirror && RR._lastVersion !== yR._renderableVersion && vR(RR, yR._renderables.slice());
              xR(RR, JR);
              const tR = RR._updateContext,
                uR = RR._config.cam ?? yR.camera;
              GR._colorFormat && (RR._config._skipClusteredLights || yR._clusteredLightUpdater?.(uR, tR.targetWidth, tR.targetHeight), function(RR, JR) {
                const GR = XR(RR, JR),
                  yR = AR(JR.lights) + (RR._lightFoVersion?.(JR) ?? 0),
                  tR = JR._lightListVersion ?? 0;
                yR === GR.FY && tR === GR._listVersion && JR.lights.length === GR._lightCount || (GR.FY = yR, GR._listVersion = tR, GR._lightCount = JR.lights.length, CR(GR._scratch, JR.lights), RR._applyLightFoOffset?.(GR._scratch, JR), RR._device.queue.writeBuffer(GR._buffer, 0, GR._scratch)), GR._buffer
              }(JR, yR));
              (function(RR, JR, GR, yR) {
                if (!yR) return;
                const tR = yR.viewport,
                  uR = RR._config.rt,
                  ZR = (RR._config.cs ? JR.canvas.width / JR.canvas.height : uR._width / uR._height) * (tR ? tR.width / tR.height : 1),
                  qR = GR.fog,
                  iR = GR.imageProcessing,
                  VR = fR(yR),
                  KR = GR._envTextures,
                  wR = RR._sceneUboCacheKey;
                if (wR[0] === yR && wR[1] === qR && wR[2] === VR && wR[3] === ZR && wR[4] === iR.exposure && wR[5] === iR.contrast && wR[6] === KR) return;
                wR[0] = yR, wR[1] = qR, wR[2] = VR, wR[3] = ZR, wR[4] = iR.exposure, wR[5] = iR.contrast, wR[6] = KR;
                const rR = RR._suData;
                BR(rR, JR, GR, yR, ZR);
                const eR = GR._sceneUboContributors;
                if (eR)
                  for (const fR of eR) fR(rR, GR);
                JR._device.queue.writeBuffer(RR._sceneUBO, 0, rR)
              })(RR, JR, yR, uR), tR.Z5 = uR, RR._batchState?._reset(), NR(RR._opaqueBindings, tR), NR(RR._directBindings, tR), NR(RR._transparentBindings, tR), RR._batchState?._flush(JR),
                function(RR, JR) {
                  const GR = RR._transparentBindings;
                  if (GR.length <= 1 || !JR) return;
                  const yR = qR(JR);
                  for (const tR of GR) {
                    const RR = tR.renderable._worldCenter;
                    tR._sortDistance = RR ? RR[0] * yR[2] + RR[1] * yR[6] + RR[2] * yR[10] + yR[14] : 0
                  }
                  GR.sort(gR)
                }(RR, uR)
            }(RR, JR, GR);
            const tR = RR._colorAttachment,
              uR = RR._config;
            uR.rt._colorView && (uR.rt === yR.surface.scRT && (tR.view = uR.rt._colorView), tR.resolveTarget = uR.rst?._colorView ?? void 0, tR.clearValue = uR.clrColor ?? yR.clearColor, tR.loadOp = uR.clr ? "clear" : "load");
            if (RR._executeWithTransmission) return RR._executeWithTransmission(GR._sampleCount);
            const ZR = JR._currentEncoder.beginRenderPass(RR._renderPassDescriptor),
              iR = OR(RR, ZR);
            return ZR.end(), iR
          }(KR, JR, iR),
          dispose() {
            if (KR._disposed) return;
            KR._disposed = !0;
            const JR = KR._pendingMeshes;
            JR && (JR.length = 0);
            for (const RR of KR._renderables) KR._retireRenderable?.(KR.engine, RR);
            KR._passes.length = KR._opaqueBindings.length = KR._directBindings.length = 0, KR._transparentBindings.length = KR._renderables.length = KR._ob.length = 0, KR._ownsTargets && ((0, yR.k)(RR.rt), (0, yR.k)(RR.rst)), RR.depth?._eager || (0, yR.k)(RR.depth);
            const GR = KR._sceneUBO;
            (0, rR.e)(KR.engine, (() => GR.destroy())), KR._batchState?._release(KR.engine), KR._batchState = void 0
          }
        };
      return KR
    }

    function gR(RR, JR) {
      return JR._sortDistance - RR._sortDistance || RR.renderable.order - JR.renderable.order
    }

    function bR(RR, JR) {
      return RR.renderable.order - JR.renderable.order
    }

    function vR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR._renderables,
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        uR = arguments.length > 4 ? arguments[4] : void 0;
      const ZR = RR._config,
        qR = ZR.rt,
        iR = RR._batchState,
        fR = lR(JR, RR.tL._renderableVersion);
      if (GR) {
        const JR = (JR, GR) => {
          JR && (GR || RR._ownsTargets || JR._eager) && (0, yR.h)(JR, RR.engine)
        };
        JR(qR), qR._descriptor.samples > 1 && JR(ZR.rst), JR(ZR.depth, !0)
      }
      const {
        _opaqueBindings: VR,
        _directBindings: KR,
        _transparentBindings: wR
      } = fR;
      try {
        for (const GR of JR) {
          const JR = GR.bind(RR.engine, RR._targetSignature);
          fR._batchState = RR._targetSignature._collectBatches?.(fR._batchState, JR), GR.isTransparent || GR._transmissive ? wR.push(JR) : GR._direct ? KR.push(JR) : VR.push(JR)
        }
        VR.sort(bR), KR.sort(bR), GR && xR(RR, RR.engine, !1)
      } catch (rR) {
        throw fR._batchState?._release(void 0, uR ?? [iR]), rR
      }
      return GR && (! function(RR, JR) {
        const GR = RR._config,
          yR = RR._colorAttachment;
        yR.view = JR._colorView, RR._renderPassDescriptor.colorAttachments = JR._colorView ? [yR] : [];
        const tR = GR.depth ?? JR,
          uR = tR._depthView;
        let ZR;
        if (uR) {
          const RR = tR._descriptor,
            JR = (GR.depth ? tR._eager : !1 === GR.depthClear) ? "load" : "clear";
          ZR = {
            view: uR,
            depthClearValue: RR.depthClearValue ?? 0,
            depthLoadOp: JR,
            depthStoreOp: "store"
          }, RR.dFormat?.includes("stencil") && (ZR.stencilClearValue = 0, ZR.stencilLoadOp = JR, ZR.stencilStoreOp = "store")
        }
        RR._renderPassDescriptor.depthStencilAttachment = ZR
      }(RR, qR), RR._updateContext.targetWidth = qR._width, RR._updateContext.targetHeight = qR._height), tR && (Object.assign(RR, fR), iR?._release(RR.engine, [fR._batchState])), fR
    }

    function OR(RR, JR) {
      const GR = RR.engine,
        yR = RR._config,
        uR = yR.rt,
        ZR = RR.tL,
        qR = RR._opaqueBindings,
        iR = RR._ob,
        fR = RR._sceneBG;
      if (function(RR, JR, GR, yR) {
          const tR = JR?.viewport;
          if (!tR) return;
          const uR = Math.floor(tR.x * GR),
            ZR = Math.floor((1 - tR.y - tR.height) * yR),
            qR = Math.ceil((tR.x + tR.width) * GR) - uR,
            iR = Math.ceil((1 - tR.y) * yR) - ZR;
          RR.setViewport(uR, ZR, qR, iR, 0, 1), RR.setScissorRect(uR, ZR, qR, iR)
        }(JR, yR.cam ?? ZR.camera, uR._width, uR._height), JR.setBindGroup(0, fR), RR._lastVis !== tR.d || !iR.length) {
        const JR = uR._descriptor,
          yR = GR._device.createRenderBundleEncoder({
            colorFormats: JR.format ? [JR.format] : [],
            depthStencilFormat: RR._targetSignature._depthStencilFormat,
            sampleCount: JR.samples
          });
        yR.setBindGroup(0, fR), DR(yR, qR, GR), iR[0] = yR.finish(), RR._lastVis = tR.d
      }
      let VR = qR.length;
      return JR.executeBundles(iR), JR.setBindGroup(0, fR), VR += DR(JR, RR._directBindings, GR), VR += DR(JR, RR._transparentBindings, GR), VR
    }

    function xR(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const yR = XR(JR, RR.tL)._buffer;
      if (yR === RR._lightsUBO) return;
      const tR = JR._device.createBindGroup({
        layout: aR(JR),
        entries: [{
          binding: 0,
          resource: {
            buffer: RR._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: yR
          }
        }]
      });
      RR._lightsUBO = yR, RR._sceneBG = tR, GR && (RR._ob = [])
    }

    function NR(RR, JR) {
      for (const GR of RR) GR.update?.(JR)
    }

    function DR(RR, JR, GR) {
      let yR = null,
        tR = 0;
      for (const uR of JR) {
        const JR = uR.renderable.mesh;
        JR && !1 === JR.visible || (uR.pipeline !== yR && (RR.setPipeline(uR.pipeline), yR = uR.pipeline), tR += uR.draw(RR, GR))
      }
      return tR
    }

    function HR(RR) {
      const JR = RR._materialSwapQueue;
      if (!JR[0] || RR._runtimeBuilds?.w) return;
      let yR, tR, uR;
      const ZR = RR._renderables;
      for (const GR of JR) {
        const JR = GR.material;
        if (!JR) continue;
        const qR = GR._runtimeThinBuild;
        if (qR) {
          tR = qR(RR, GR, tR);
          continue
        }
        const iR = RR._groups.get(JR._buildGroup),
          fR = iR?.r;
        if (!fR) {
          (uR ??= []).push(GR);
          continue
        }
        if (iR._w?.(GR)) {
          (uR ??= []).push([GR, JR]);
          continue
        }
        const VR = RR._meshDisposables.get(GR);
        VR && (RR._meshDisposables.delete(GR), (0, rR.e)(RR.surface.engine, (() => VR.forEach((RR => RR())))));
        const KR = iR.o;
        let wR;
        for (let RR = ZR.length; RR--;) ZR[RR].mesh === GR && (wR = ZR.splice(RR, 1)[0]);
        JR._csmGen = -~JR._csmGen;
        const eR = fR(RR, GR);
        if (KR) {
          const RR = KR.indexOf(wR);
          RR < 0 ? KR.push(eR) : KR[RR] = eR
        }
        yR = ZR.push(eR)
      }
      if (yR && (ZR.sort(((RR, JR) => RR.order - JR.order)), RR._renderableVersion++, RR._materialEpoch++), JR.length = 0, !uR) return tR;
      const qR = uR;
      return GR.e(680).then((() => GR(64244))).then((JR => {
        let {
          C: GR
        } = JR;
        return GR(RR, qR, tR)
      }), (JR => {
        const GR = RR._runtimeBuilds;
        GR ? GR._x(JR) : console.error(JR)
      }))
    }
    var oR = null;

    function cR(RR, JR) {
      const GR = RR.engine,
        tR = {
          _kind: "tL",
          surface: RR,
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
            GR.useFloatingOrigin && tR.camera && !tR.camera._useFloatingOrigin && (tR.camera._useFloatingOrigin = !0, tR.camera._viewVer = -1, tR.camera._vpVer = -1);
            const RR = tR.fixedDeltaMs > 0 ? tR.fixedDeltaMs : GR._currentDelta,
              JR = GR._currentEncoder;
            let yR = 0;
            for (const GR of tR._beforeRender) GR(RR);
            tR._materialSwapQueue.length && HR(tR);
            for (const uR of tR._prePasses) yR += uR.execute(JR, GR);
            for (const uR of tR._uniformUpdaters) uR.update(GR);
            tR._drawCallsPre = yR
          },
          _record: () => tR._frameGraph.execute(),
          _resize() {
            tR._frameGraph.build()
          }
        },
        ZR = function() {
          const RR = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let JR = 0; JR < RR._tasks.length; JR++) uR(RR, RR._tasks[JR]);
              for (const JR of RR._tasks)
                for (const RR of JR._passes) RR._initialize()
            },
            execute() {
              let JR = 0;
              for (const GR of RR._tasks)
                if (!1 !== GR.executionEnabled)
                  if (GR.execute) JR += GR.execute();
                  else
                    for (const RR of GR._passes) JR += RR._execute();
              return JR
            },
            dispose() {
              for (const JR of RR._tasks) JR.dispose();
              RR._tasks.length = 0, RR._currentProcessedTask = null
            }
          };
          return RR
        }();
      if (tR._frameGraph = ZR, !1 !== JR?.defaultRenderTask) {
        const JR = RR.msaaSamples > 1,
          uR = JR ? (0, yR.e)({
            lbl: "scene-color",
            format: RR.format,
            dFormat: "depth24plus-stencil8",
            samples: RR.msaaSamples,
            size: RR
          }) : RR.scRT,
          qR = JR ? void 0 : (0, yR.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: RR
          });
        ! function(RR, JR) {
          RR._tasks.push(JR)
        }(ZR, pR({
          name: "tL",
          rt: uR,
          rst: JR ? RR.scRT : void 0,
          depth: qR
        }, GR, tR))
      }
      return tR._disposables.push((() => ZR.dispose())), tR
    }
    async function PR(RR) {
      const JR = RR;
      for (JR._built || (JR._materialSwapQueue.length = 0); JR._deferredBuilders.length;) {
        const RR = JR._deferredBuilders.splice(0);
        await Promise.all(RR.map((RR => RR())))
      }
      await HR(JR), oR?.get(JR)?.() || (JR._runtimeBuilds?._e(), JR._renderableVersion++, JR._built = !0), await (JR._rebuildHook?.(JR))
    }
    var IR = null;
    async function mR(RR) {
      const JR = RR,
        yR = JR.surface;
      (0, tR.l)(yR, JR) || (await PR(RR), JR._renderables.sort(zR), await Promise.all(JR._frameGraph._tasks.map((RR => RR._preload?.()))), IR && await IR(JR), JR._frameGraph.build(), yR._renderingContexts[0] && (await GR.e(678).then((() => GR(64230)))).configureSwapchainOverlayScene(yR, JR), oR?.get(JR)?.() || (0, tR.n)(yR, JR))
    }
    var zR = (RR, JR) => RR.order - JR.order
  },
  53707: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      g: () => VR
    });
    var yR = GR(53654),
      tR = GR(53658),
      uR = GR(53664),
      ZR = GR(53670),
      qR = GR(53672),
      iR = GR(53680);

    function fR(RR, JR, GR) {
      let qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (JR < 1 || GR < 1) && (0, yR.c)(676, JR, GR);
      const fR = RR._device,
        VR = qR.mipMaps ?? !1,
        KR = qR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        wR = VR ? (0, iR.e)(JR, GR) : 1,
        rR = fR.createTexture({
          size: {
            width: JR,
            height: GR
          },
          format: KR,
          mipLevelCount: wR,
          usage: tR.j.TEXTURE_BINDING | tR.j.COPY_DST | tR.j.RENDER_ATTACHMENT
        }),
        eR = {
          addressModeU: qR.addressModeU ?? "clamp-to-edge",
          addressModeV: qR.addressModeV ?? "clamp-to-edge",
          minFilter: qR.minFilter ?? "linear",
          magFilter: qR.magFilter ?? "linear",
          mipmapFilter: VR ? "linear" : "nearest"
        },
        aR = (0, ZR.b)(RR, eR),
        LR = {
          texture: rR,
          view: rR.createView(),
          sampler: aR,
          width: JR,
          height: GR
        };
      return (0, uR.d)(LR), RR._dlr && RR._dlr.t(LR, {
        kind: "dynamic",
        width: JR,
        height: GR,
        format: KR,
        levels: wR,
        samplerDesc: eR,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), LR
    }

    function VR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const tR = yR.invertY ?? !0,
        uR = yR.premultiplyAlpha ?? !1;
      RR._device.queue.copyExternalImageToTexture({
        source: GR,
        flipY: tR
      }, {
        texture: JR.texture,
        premultipliedAlpha: uR
      }, [JR.width, JR.height]);
      const ZR = JR._recoverySource;
      ZR && "dynamic" === ZR.kind && (ZR.source = GR, ZR.flipY = tR, ZR.premultipliedAlpha = uR), JR.texture.mipLevelCount > 1 && (0, qR.generateMipmaps)(RR, JR.texture)
    }
  },
  53698: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR
    });
    var yR = GR(53654),
      tR = GR(53658),
      uR = GR(53664),
      ZR = GR(53670),
      qR = GR(53680);
    async function iR(RR, JR) {
      let iR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [fR, VR] = function(RR) {
        const JR = RR,
          GR = [
            [JR.displayWidth, JR.displayHeight],
            [JR.videoWidth, JR.videoHeight],
            [JR.naturalWidth, JR.naturalHeight],
            [JR.width, JR.height]
          ];
        for (const [yR, tR] of GR)
          if (void 0 !== yR && void 0 !== tR && Number.isInteger(yR) && Number.isInteger(tR) && yR > 0 && tR > 0) return [yR, tR];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(JR), [KR, wR] = function(RR, JR, GR) {
        if (void 0 === GR) return [RR, JR];
        if (!Number.isInteger(GR) || GR < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${GR})`);
        if (Math.max(RR, JR) <= GR) return [RR, JR];
        const yR = GR / Math.max(RR, JR);
        return RR >= JR ? [GR, Math.max(1, Math.round(JR * yR))] : [Math.max(1, Math.round(RR * yR)), GR]
      }(fR, VR, iR.maxDimension), rR = iR.mipMaps ?? !0, eR = iR.premultiplyAlpha ?? !1;
      let aR = JR,
        LR = null;
      const nR = {
        texture: null
      };
      try {
        KR === fR && wR === VR || (LR = await createImageBitmap(JR, {
          resizeWidth: KR,
          resizeHeight: wR,
          resizeQuality: "high",
          premultiplyAlpha: eR ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), aR = LR);
        const UR = RR._device,
          WR = iR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          AR = rR ? (0, qR.e)(KR, wR) : 1,
          CR = AR > 1 ? (await Promise.resolve().then((() => GR(53672)))).generateMipmaps : null,
          XR = {
            addressModeU: iR.addressModeU ?? "repeat",
            addressModeV: iR.addressModeV ?? "repeat",
            minFilter: iR.minFilter ?? "linear",
            magFilter: iR.magFilter ?? "linear",
            mipmapFilter: rR ? "linear" : "nearest"
          };
        XR.maxAnisotropy = "linear" === XR.minFilter && "linear" === XR.magFilter && "linear" === XR.mipmapFilter ? 4 : 1;
        const MR = iR.invertY ?? !0,
          BR = async JR => {
            let GR;
            UR.pushErrorScope("validation"), UR.pushErrorScope("out-of-memory");
            let uR = null;
            try {
              const GR = nR.texture = UR.createTexture({
                size: {
                  width: KR,
                  height: wR
                },
                format: WR,
                mipLevelCount: AR,
                usage: tR.j.TEXTURE_BINDING | tR.j.COPY_DST | tR.j.RENDER_ATTACHMENT
              });
              UR.queue.copyExternalImageToTexture({
                source: JR,
                flipY: MR
              }, {
                texture: GR,
                premultipliedAlpha: eR
              }, {
                width: KR,
                height: wR
              }), CR && CR(RR, GR), uR = (0, ZR.b)(RR, XR)
            } catch (rR) {
              GR = rR
            }
            const [qR, iR] = await Promise.all([UR.popErrorScope(), UR.popErrorScope()]);
            if (GR) throw GR;
            const fR = iR ?? qR;
            if (fR) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${fR.message}`, {
              cause: fR
            });
            const VR = nR.texture;
            return VR && uR || (0, yR.c)(677), {
              texture: VR,
              view: VR.createView(),
              sampler: uR,
              width: KR,
              height: wR
            }
          }, lR = await (RR._dlr?.x(aR, KR, wR, WR, AR, XR, MR, eR, BR)) ?? await BR(aR);
        return (0, uR.d)(lR), lR
      } catch (UR) {
        throw nR.texture?.destroy(), UR
      } finally {
        LR?.close()
      }
    }
  },
  53672: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      generateMipmaps: () => rR,
      recordMipmaps: () => eR
    });
    var yR = GR(53658),
      tR = GR(53670),
      uR = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var ZR = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      qR = null,
      iR = null,
      fR = null,
      VR = null,
      KR = null;

    function wR(RR) {
      const JR = RR._device;
      JR !== KR && (qR?.clear(), qR = null, iR = null, fR = null, VR = null, KR = null, KR = JR), iR ??= JR.createShaderModule({
        code: ZR
      }), fR ??= function(RR) {
        return (0, tR.b)(RR, uR)
      }(RR), VR ??= JR.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: yR.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: yR.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function rR(RR, JR, GR) {
      const yR = RR._device,
        tR = yR.createCommandEncoder();
      eR(RR, JR, tR, GR), yR.queue.submit([tR.finish()])
    }

    function eR(RR, JR, GR, yR) {
      if (JR.mipLevelCount <= 1) return;
      const tR = RR._device,
        uR = function(RR, JR) {
          const GR = RR._device;
          wR(RR), qR ??= new Map;
          let yR = qR.get(JR);
          return yR || (yR = GR.createRenderPipeline({
            layout: GR.createPipelineLayout({
              bindGroupLayouts: [VR]
            }),
            vertex: {
              module: iR,
              entryPoint: "vs"
            },
            fragment: {
              module: iR,
              entryPoint: "fs",
              targets: [{
                format: JR
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), qR.set(JR, yR)), yR
        }(RR, JR.format),
        ZR = null != yR ? {
          dimension: "2d",
          baseArrayLayer: yR,
          arrayLayerCount: 1
        } : {};
      for (let qR = 1; qR < JR.mipLevelCount; qR++) {
        const RR = JR.createView({
            baseMipLevel: qR - 1,
            mipLevelCount: 1,
            ...ZR
          }),
          yR = JR.createView({
            baseMipLevel: qR,
            mipLevelCount: 1,
            ...ZR
          }),
          iR = tR.createBindGroup({
            layout: VR,
            entries: [{
              binding: 0,
              resource: RR
            }, {
              binding: 1,
              resource: fR
            }]
          }),
          KR = GR.beginRenderPass({
            colorAttachments: [{
              view: yR,
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
        KR.setPipeline(uR), KR.setBindGroup(0, iR), KR.draw(3), KR.end()
      }
    }
  },
  53680: (RR, JR, GR) => {
    function yR(RR, JR) {
      return Math.floor(Math.log2(Math.max(RR, JR))) + 1
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  53651: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR,
      e: () => VR
    });
    var yR = GR(53654),
      tR = GR(53658),
      uR = GR(53664),
      ZR = GR(53670),
      qR = GR(53672),
      iR = GR(53680);

    function fR(RR, JR, GR, qR) {
      let fR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (JR < 1 || GR < 1 || qR < 1) && (0, yR.c)(722, JR, GR, qR);
      const VR = RR._device,
        KR = fR.mipMaps ?? !0,
        wR = fR.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        rR = VR.createTexture({
          size: {
            width: JR,
            height: GR,
            depthOrArrayLayers: qR
          },
          dimension: "2d",
          format: wR,
          mipLevelCount: KR ? (0, iR.e)(JR, GR) : 1,
          usage: tR.j.TEXTURE_BINDING | tR.j.COPY_DST | tR.j.RENDER_ATTACHMENT
        }),
        eR = (0, ZR.b)(RR, {
          addressModeU: fR.addressModeU ?? "repeat",
          addressModeV: fR.addressModeV ?? "repeat",
          minFilter: fR.minFilter ?? "linear",
          magFilter: fR.magFilter ?? "linear",
          mipmapFilter: KR ? "linear" : "nearest"
        }),
        aR = {
          texture: rR,
          view: rR.createView({
            dimension: "2d-array"
          }),
          sampler: eR,
          width: JR,
          height: GR,
          layers: qR
        };
      return (0, uR.d)(aR), aR
    }

    function VR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (GR < 0 || GR >= JR.layers || (0 | GR) !== GR) && (0, yR.c)(723, JR.layers, GR);
      const ZR = uR.invertY ?? !0,
        iR = uR.premultiplyAlpha ?? !1;
      RR._device.queue.copyExternalImageToTexture({
        source: tR,
        flipY: ZR
      }, {
        texture: JR.texture,
        origin: [0, 0, GR],
        premultipliedAlpha: iR
      }, [JR.width, JR.height, 1]), JR.texture.mipLevelCount > 1 && (0, qR.generateMipmaps)(RR, JR.texture, GR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);