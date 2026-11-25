export const id = 309;
export const ids = [309];
export const modules = {
  41736: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(41728),
      JB = ZB(41742);

    function oB(BB) {
      (0, JB.d)(BB), (0, TB.o)(BB);
      const IB = BB._surfaces;
      for (const ZB of IB) ZB._renderingContexts.length = 0, ZB._ro?.disconnect(), ZB._context.unconfigure();
      IB.length = 0;
      try {
        BB._disposeManagedResources?.(), BB._disposeStorageBuffers?.()
      } finally {
        BB._device.destroy()
      }
    }
  },
  41728: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      f: () => yB,
      h: () => FB,
      k: () => NB,
      m: () => dB,
      n: () => UB,
      o: () => WB
    });
    var TB = ZB(41681);
    var JB = "Babylon Lite v1.32.0",
      oB = ZB(41730);

    function GB(BB) {
      return "clientWidth" in BB
    }
    var vB = 1;

    function kB(BB, IB, ZB) {
      const kB = IB.getContext("webgpu");
      kB || (0, TB.d)(54), GB(IB) && IB.setAttribute("data-engine", JB);
      const cB = ZB?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        nB = ZB?.srgb ? (hB = cB).endsWith("-srgb") ? hB : `${hB}-srgb` : cB;
      var hB;
      const zB = ZB?.alphaMode ?? "opaque";
      kB.configure({
        device: BB._device,
        format: cB,
        alphaMode: zB,
        viewFormats: [nB]
      });
      const FB = 1 === ZB?.msaaSamples ? 1 : 4,
        NB = (0, oB.b)({
          lbl: "swapchain",
          format: nB,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return NB._eager = !0, {
        engine: BB,
        canvas: IB,
        format: nB,
        msaaSamples: FB,
        scRT: NB,
        maxDevicePixelRatio: ZB?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: vB++,
        _context: kB,
        _configureFormat: cB,
        _alphaMode: zB,
        _renderingContexts: []
      }
    }

    function cB(BB) {
      const IB = BB._context.getCurrentTexture(),
        ZB = BB.scRT;
      ZB._colorTexture = IB, ZB._colorView = IB.createView({
        format: BB.format
      }), ZB._width = IB.width, ZB._height = IB.height
    }

    function nB(BB) {
      const IB = BB.canvas;
      if (!GB(IB)) return;
      const ZB = BB._w ?? IB.clientWidth,
        TB = BB._h ?? IB.clientHeight;
      if (!(ZB > 0 && TB > 0)) return;
      const JB = Math.min(globalThis.devicePixelRatio || 1, BB.maxDevicePixelRatio);
      hB(BB, ZB * JB | 0, TB * JB | 0)
    }

    function hB(BB, IB, ZB) {
      const TB = BB.canvas,
        JB = 0 | IB,
        oB = 0 | ZB;
      if (JB > 0 && oB > 0 && (JB !== TB.width || oB !== TB.height)) {
        TB.width = JB, TB.height = oB, BB.scRT._width = JB, BB.scRT._height = oB;
        for (const IB of BB._renderingContexts) IB._resize?.()
      }
    }
    var zB = 0;

    function FB(BB, IB) {
      return -1 !== BB._renderingContexts.indexOf(IB)
    }

    function NB(BB, IB) {
      return -1 === BB._renderingContexts.indexOf(IB) && (BB._renderingContexts.push(IB), !0)
    }
    var gB = null;
    var qB = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function yB(BB, IB) {
      const oB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...gB ? gB() : {}
      });
      oB || (0, TB.d)(47);
      const GB = gB?.deviceFeatures?.(oB, IB) ?? function(BB) {
          return qB.filter((IB => BB.features.has(IB)))
        }(oB),
        vB = await oB.requestDevice({
          requiredFeatures: GB,
          requiredLimits: IB?.requiredLimits
        });
      console.log(`${JB} - WebGPU engine`);
      const hB = !!IB?.useHighPrecisionMatrix,
        zB = !!IB?.useFloatingOrigin;
      if (zB && !hB && (0, TB.d)(48), hB) {
        const {
          allocateF64Mat4: BB
        } = await ZB.e(361).then((() => ZB(61385)));
        0
      }
      let FB, NB, yB, UB;
      if (zB) {
        const [{
          wrapRenderableForFO: BB,
          lightFoVersion: IB,
          applyLightFoOffset: TB
        }, {
          makePackMeshWorld: JB
        }] = await Promise.all([ZB.e(362).then((() => ZB(61389))), ZB.e(363).then((() => ZB(61398)))]);
        FB = BB, NB = JB, yB = IB, UB = TB
      }
      const WB = {
          _device: vB
        },
        dB = [WB];
      return Object.assign(WB, {
        engine: WB,
        surfaces: dB,
        _surfaces: dB,
        _device: vB,
        _options: IB,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: hB,
        useFloatingOrigin: zB,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: FB,
        _makePackMeshWorld: NB,
        _lightFoVersion: yB,
        _applyLightFoOffset: UB
      }, kB(WB, BB, IB)), nB(WB), cB(WB), WB
    }

    function UB(BB, IB, ZB) {
      hB(BB, IB, ZB)
    }

    function WB(BB) {
      BB._animFrameId && cancelAnimationFrame(BB._animFrameId), BB._animFrameId = 0, BB._renderFn = null, BB._flushGpuRetirements?.(BB)
    }

    function dB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.surfaces;
      if (ZB !== BB.surfaces)
        for (let JB = ZB.length; JB--;) ZB[JB].engine !== BB && (0, TB.d)(49);
      CB(BB, IB, ZB)
    }

    function CB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB._surfaces,
        TB = 0;
      for (let oB = ZB.length; oB--;) TB += ZB[oB]._renderingContexts.length;
      if (!TB) return BB.drawCallCount = 0, BB._flushGpuRetirements?.(BB);
      const JB = BB._device.createCommandEncoder({
        label: "frame"
      });
      BB._currentEncoder = JB, BB._currentDelta = IB;
      try {
        BB._gpuTimerBegin?.(JB), TB = 0;
        for (let BB = 0; BB < ZB.length; BB++) {
          const IB = ZB[BB];
          IB._capturePreFrame?.(IB), cB(IB);
          const JB = IB._renderingContexts;
          for (let BB = 0; BB < JB.length; BB++) {
            const IB = JB[BB];
            IB._update(), TB += IB._drawCallsPre + IB._record()
          }
        }
        const IB = BB._currentEncoder;
        for (let BB = 0; BB < ZB.length; BB++) {
          const TB = ZB[BB];
          TB._captureService?.(TB, IB)
        }
        BB._gpuTimerEnd?.(IB), BB._cbs[0] = IB.finish(), BB._device.queue.submit(BB._cbs), BB._flushGpuRetirements?.(BB), BB.drawCallCount = TB, BB._gpuTimerResolve?.()
      } finally {
        BB._currentEncoder = void 0
      }
    }
  },
  41687: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => oB,
      k: () => TB
    });
    var TB = globalThis.GPUTextureUsage,
      JB = globalThis.GPUBufferUsage,
      oB = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41742: (BB, IB, ZB) => {
    function TB(BB) {
      JB(BB.splice(0))
    }

    function JB(BB) {
      for (const ZB of BB) try {
        ZB()
      } catch (IB) {
        console.error("GPU resource retirement failed.", IB)
      }
    }

    function oB(BB, IB) {
      BB._flushGpuRetirements ??= GB, (BB._retirements ??= []).push(IB)
    }

    function GB(BB) {
      const IB = BB._retirements;
      if (!IB) return;
      BB._retirements = null;
      const ZB = BB._retiring ??= new Set;
      ZB.add(IB), queueMicrotask((() => {
        BB._device.queue.onSubmittedWorkDone().then((() => {
          ZB.delete(IB), TB(IB)
        })).catch((() => {}))
      }))
    }

    function vB(BB) {
      const IB = BB._retirements,
        ZB = BB._retiring;
      BB._retirements = null, BB._retiring = null, IB && TB(IB), ZB?.forEach(TB)
    }
    ZB.d(IB, {
      d: () => vB,
      f: () => oB
    })
  },
  41730: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => GB,
      e: () => vB
    });
    var TB = ZB(41687);

    function JB(BB) {
      const IB = BB.size;
      return "canvas" in IB ? IB.canvas : IB
    }

    function oB(BB) {
      return {
        _descriptor: BB,
        _resolveSize: JB,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function GB(BB, IB) {
      if (BB._eager) return void BB._syncEager?.(IB);
      vB(BB);
      const ZB = BB._descriptor,
        {
          width: oB,
          height: GB
        } = (BB._resolveSize ?? JB)(ZB);
      BB._width = oB, BB._height = GB;
      const kB = IB._device;
      ZB.format && (BB._colorTexture = kB.createTexture({
        label: ZB.lbl,
        size: {
          width: oB,
          height: GB
        },
        format: ZB.format,
        sampleCount: ZB.samples,
        usage: TB.k.RENDER_ATTACHMENT | TB.k.TEXTURE_BINDING | TB.k.COPY_SRC | TB.k.COPY_DST
      }), BB._colorView = BB._colorTexture.createView()), ZB.dFormat && (BB._depthTexture = kB.createTexture({
        label: ZB.lbl,
        size: {
          width: oB,
          height: GB
        },
        format: ZB.dFormat,
        sampleCount: ZB.samples,
        usage: TB.k.RENDER_ATTACHMENT | TB.k.TEXTURE_BINDING
      }), BB._depthView = BB._depthTexture.createView())
    }

    function vB(BB) {
      if (!BB || BB._eager && !BB._disposeAttachments) return;
      const IB = BB._colorTexture,
        ZB = BB._depthTexture;
      if (BB._colorTexture = BB._depthTexture = null, BB._colorView = BB._depthView = null, BB._width = BB._height = 0, BB._disposeAttachments) BB._disposeAttachments(IB, ZB);
      else try {
        IB?.destroy()
      } finally {
        !1 !== BB._ownsDepthTexture && ZB?.destroy()
      }
    }
  },
  41754: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      f: () => JB,
      h: () => oB
    });
    var TB = Float32Array,
      JB = Float64Array,
      oB = Uint32Array
  },
  41757: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    var TB = 16
  },
  41681: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = null;

    function JB(BB) {
      for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), JB = 1; JB < IB; JB++) ZB[JB - 1] = arguments[JB];
      const oB = new Error(TB?.(BB, ZB) ?? `#${BB}`);
      throw oB.lite = ZB, oB
    }
  },
  41712: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    var TB = ZB(41696);

    function JB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZB = IB.compare,
        JB = IB.lodMinClamp ?? 0,
        oB = IB.lodMaxClamp ?? 32,
        GB = void 0 !== ZB || 0 !== JB || 32 !== oB ? `${ZB??""}:${JB}:${oB}` : "";
      return (0, TB.c)(BB, IB, GB)
    }
  },
  41694: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = null;

    function JB(BB) {
      const IB = TB ??= new WeakMap;
      IB.set(BB, (IB.get(BB) ?? 0) + 1)
    }

    function oB(BB) {
      JB(BB.texture)
    }
  },
  41696: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = null,
      JB = "nearest",
      oB = "clamp-to-edge",
      GB = {
        minFilter: JB,
        magFilter: JB,
        mipmapFilter: JB,
        addressModeU: oB,
        addressModeV: oB,
        addressModeW: oB,
        maxAnisotropy: 1
      };

    function vB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const JB = BB._device,
        oB = TB ??= new WeakMap;
      let vB = oB.get(JB);
      vB || oB.set(JB, vB = new Map);
      let kB = ZB;
      for (const TB in GB) {
        const BB = TB;
        kB += `:${IB[BB]??GB[BB]}`
      }
      let cB = vB.get(kB);
      return cB || vB.set(kB, cB = JB.createSampler(IB)), cB
    }
  },
  41745: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => mB,
      d: () => eB
    });
    var TB = ZB(41730),
      JB = ZB(41728);

    function oB(BB, IB) {
      IB._passes.length = 0, BB._currentProcessedTask = IB;
      try {
        IB.record()
      } finally {
        BB._currentProcessedTask = null
      }
    }
    var GB = ZB(41754);

    function vB(BB) {
      const IB = BB.worldMatrixVersion;
      if (BB._viewVer === IB) return BB._viewCache;
      const ZB = BB._viewCache,
        TB = BB.worldMatrix,
        JB = BB._useFloatingOrigin,
        oB = JB ? 0 : TB[12],
        GB = JB ? 0 : TB[13],
        vB = JB ? 0 : TB[14];
      return ZB[0] = TB[0], ZB[1] = TB[4], ZB[2] = TB[8], ZB[3] = 0, ZB[4] = TB[1], ZB[5] = TB[5], ZB[6] = TB[9], ZB[7] = 0, ZB[8] = TB[2], ZB[9] = TB[6], ZB[10] = TB[10], ZB[11] = 0, ZB[12] = -(TB[0] * oB + TB[1] * GB + TB[2] * vB), ZB[13] = -(TB[4] * oB + TB[5] * GB + TB[6] * vB), ZB[14] = -(TB[8] * oB + TB[9] * GB + TB[10] * vB), ZB[15] = 1, BB._viewVer = IB, ZB
    }
    var kB = null;

    function cB(BB) {
      return BB._projFov === BB.fov && BB._projNear === BB.nearPlane && BB._projFar === BB.farPlane || (BB._projFov = BB.fov, BB._projNear = BB.nearPlane, BB._projFar = BB.farPlane, BB._projRev = (BB._projRev ?? 0) + 1), BB.worldMatrixVersion + (BB._projRev ?? 0)
    }

    function nB(BB, IB) {
      const ZB = cB(BB);
      if (BB._projVer === ZB && BB._projAspect === IB) return BB._projCache;
      const TB = BB._projCache;
      return null !== kB && BB.ortho ? kB(BB, IB, TB) : function(BB, IB, ZB, TB, JB) {
        const oB = 1 / Math.tan(.5 * IB),
          GB = JB - TB;
        BB[0] = oB / ZB, BB[5] = oB, BB[10] = -TB / GB, BB[11] = 1, BB[14] = JB * TB / GB
      }(TB, BB.fov, IB, BB.nearPlane, BB.farPlane), BB._projVer = ZB, BB._projAspect = IB, TB
    }
    var hB = ZB(41687);

    function zB(BB, IB, ZB) {
      return BB._device.createBuffer({
        label: ZB,
        size: (TB = IB, JB = 16, Math.ceil(TB / JB) * JB),
        usage: hB.d.UNIFORM | hB.d.COPY_DST
      });
      var TB, JB
    }
    var FB = ZB(41742),
      NB = null;

    function gB(BB) {
      const IB = BB._device,
        ZB = NB ??= new WeakMap;
      let TB = ZB.get(IB);
      return TB || (TB = IB.createBindGroupLayout({
        label: "lg",
        entries: [{
          binding: 0,
          visibility: hB.h.VERTEX | hB.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: hB.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ZB.set(IB, TB)), TB
    }

    function qB(BB, IB, ZB) {
      const TB = BB._device,
        JB = zB(BB, IB.byteLength, ZB);
      try {
        TB.queue.writeBuffer(JB, 0, IB.buffer, IB.byteOffset, IB.byteLength)
      } catch (oB) {
        throw JB.destroy(), oB
      }
      return JB
    }
    var yB = ZB(41757),
      UB = new GB.h(1),
      WB = new GB.e(UB.buffer);

    function dB(BB) {
      let IB = 0;
      for (const ZB of BB) IB += ZB._lightVersion ?? 0;
      return IB
    }

    function CB(BB, IB) {
      BB.fill(0);
      let ZB = 0;
      for (const TB of IB) {
        if (ZB >= yB.b) break;
        TB._writeLightUbo && (TB._writeLightUbo(BB, 4 + 16 * ZB), ZB++)
      }
      UB[0] = ZB, BB[0] = WB[0]
    }

    function QB(BB, IB) {
      let ZB = IB._lightGpuState;
      const TB = 16 + 16 * yB.b * 4;
      if (ZB && ZB._byteSize === TB) return ZB;
      const JB = !ZB;
      ZB?._buffer.destroy();
      const oB = new GB.e(TB / 4);
      return CB(oB, IB.lights), BB._applyLightFoOffset?.(oB, IB), ZB = {
        _buffer: qB(BB, oB),
        _scratch: oB,
        hA: dB(IB.lights) + (BB._lightFoVersion?.(IB) ?? 0),
        _listVersion: IB._lightListVersion ?? 0,
        _lightCount: IB.lights.length,
        _byteSize: TB
      }, IB._lightGpuState = ZB, JB && IB._disposables.push((() => {
        IB._lightGpuState?._buffer.destroy(), IB._lightGpuState = void 0
      })), ZB
    }

    function sB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const JB = IB;
      if (0 === TB && 16 === JB.length) return void BB.set(JB, ZB);
      const oB = TB,
        GB = ZB;
      BB[GB + 0] = JB[oB + 0], BB[GB + 1] = JB[oB + 1], BB[GB + 2] = JB[oB + 2], BB[GB + 3] = JB[oB + 3], BB[GB + 4] = JB[oB + 4], BB[GB + 5] = JB[oB + 5], BB[GB + 6] = JB[oB + 6], BB[GB + 7] = JB[oB + 7], BB[GB + 8] = JB[oB + 8], BB[GB + 9] = JB[oB + 9], BB[GB + 10] = JB[oB + 10], BB[GB + 11] = JB[oB + 11], BB[GB + 12] = JB[oB + 12], BB[GB + 13] = JB[oB + 13], BB[GB + 14] = JB[oB + 14], BB[GB + 15] = JB[oB + 15]
    }

    function wB(BB, IB, ZB, TB, JB) {
      BB.fill(0);
      const oB = function(BB, IB) {
          const ZB = cB(BB);
          if (BB._vpVer === ZB && BB._vpAspect === IB) return BB._vpCache;
          const TB = BB._vpCache;
          return function(BB, IB, ZB, TB, JB, oB) {
            const GB = ZB[TB],
              vB = ZB[TB + 1],
              kB = ZB[TB + 2],
              cB = ZB[TB + 3],
              nB = ZB[TB + 4],
              hB = ZB[TB + 5],
              zB = ZB[TB + 6],
              FB = ZB[TB + 7],
              NB = ZB[TB + 8],
              gB = ZB[TB + 9],
              qB = ZB[TB + 10],
              yB = ZB[TB + 11],
              UB = ZB[TB + 12],
              WB = ZB[TB + 13],
              dB = ZB[TB + 14],
              CB = ZB[TB + 15];
            let QB = JB[oB],
              sB = JB[oB + 1],
              wB = JB[oB + 2],
              OB = JB[oB + 3];
            BB[IB] = GB * QB + nB * sB + NB * wB + UB * OB, BB[IB + 1] = vB * QB + hB * sB + gB * wB + WB * OB, BB[IB + 2] = kB * QB + zB * sB + qB * wB + dB * OB, BB[IB + 3] = cB * QB + FB * sB + yB * wB + CB * OB, QB = JB[oB + 4], sB = JB[oB + 5], wB = JB[oB + 6], OB = JB[oB + 7], BB[IB + 4] = GB * QB + nB * sB + NB * wB + UB * OB, BB[IB + 5] = vB * QB + hB * sB + gB * wB + WB * OB, BB[IB + 6] = kB * QB + zB * sB + qB * wB + dB * OB, BB[IB + 7] = cB * QB + FB * sB + yB * wB + CB * OB, QB = JB[oB + 8], sB = JB[oB + 9], wB = JB[oB + 10], OB = JB[oB + 11], BB[IB + 8] = GB * QB + nB * sB + NB * wB + UB * OB, BB[IB + 9] = vB * QB + hB * sB + gB * wB + WB * OB, BB[IB + 10] = kB * QB + zB * sB + qB * wB + dB * OB, BB[IB + 11] = cB * QB + FB * sB + yB * wB + CB * OB, QB = JB[oB + 12], sB = JB[oB + 13], wB = JB[oB + 14], OB = JB[oB + 15], BB[IB + 12] = GB * QB + nB * sB + NB * wB + UB * OB, BB[IB + 13] = vB * QB + hB * sB + gB * wB + WB * OB, BB[IB + 14] = kB * QB + zB * sB + qB * wB + dB * OB, BB[IB + 15] = cB * QB + FB * sB + yB * wB + CB * OB
          }(TB, 0, nB(BB, IB), 0, vB(BB), 0), BB._vpVer = ZB, BB._vpAspect = IB, TB
        }(TB, JB),
        GB = vB(TB),
        kB = TB.worldMatrix;
      sB(BB, oB, 0), sB(BB, GB, 16), IB.useFloatingOrigin ? (BB[32] = 0, BB[33] = 0, BB[34] = 0) : (BB[32] = kB[12], BB[33] = kB[13], BB[34] = kB[14]), BB[87] = IB.canvas.width;
      const hB = ZB.imageProcessing;
      BB[76] = hB.exposure, BB[77] = hB.contrast, BB[78] = ZB._envTextures?.lodGenerationScale ?? .8, BB[79] = +hB.toneMappingEnabled, BB[37] = IB.canvas.height
    }

    function OB(BB, IB) {
      return {
        _renderables: BB,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: IB
      }
    }

    function YB(BB, IB, ZB) {
      BB.clr ??= !0;
      const JB = BB.rt._descriptor,
        oB = BB.depth?._descriptor,
        kB = {
          _colorFormat: JB.format,
          _depthStencilFormat: oB?.dFormat ?? JB.dFormat,
          _depthCompare: JB.depthCompare ?? oB?.depthCompare,
          _sampleCount: JB.samples
        },
        nB = {
          loadOp: "clear",
          storeOp: "store"
        },
        hB = {
          ...OB([], -1),
          name: BB.name,
          _config: BB,
          _ownsTargets: !BB.sharedRt,
          engine: IB,
          lg: ZB,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [nB]
          },
          _colorAttachment: nB,
          _sceneUBO: zB(IB, 368),
          _suData: new GB.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: kB,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (hB._disposed) throw new Error("RenderTask has been disposed.");
            hB._recordExplicit ? hB._recordExplicit(hB, !0) : aB(hB, !1 !== BB.autoMirror ? ZB._renderables.slice() : hB._renderables, !0)
          },
          execute: () => function(BB, IB, ZB) {
            if (!1 === BB.enabled) return 0;
            const TB = BB.lg;
            ! function(BB, IB, ZB) {
              const TB = BB.lg;
              !1 !== BB._config.autoMirror && BB._lastVersion !== TB._renderableVersion && aB(BB, TB._renderables.slice());
              MB(BB, IB);
              const JB = BB._updateContext,
                oB = BB._config.cam ?? TB.camera;
              ZB._colorFormat && (BB._config._skipClusteredLights || TB._clusteredLightUpdater?.(oB, JB.targetWidth, JB.targetHeight), function(BB, IB) {
                const ZB = QB(BB, IB),
                  TB = dB(IB.lights) + (BB._lightFoVersion?.(IB) ?? 0),
                  JB = IB._lightListVersion ?? 0;
                TB === ZB.hA && JB === ZB._listVersion && IB.lights.length === ZB._lightCount || (ZB.hA = TB, ZB._listVersion = JB, ZB._lightCount = IB.lights.length, CB(ZB._scratch, IB.lights), BB._applyLightFoOffset?.(ZB._scratch, IB), BB._device.queue.writeBuffer(ZB._buffer, 0, ZB._scratch)), ZB._buffer
              }(IB, TB));
              (function(BB, IB, ZB, TB) {
                if (!TB) return;
                const JB = TB.viewport,
                  oB = BB._config.rt,
                  GB = (BB._config.cs ? IB.canvas.width / IB.canvas.height : oB._width / oB._height) * (JB ? JB.width / JB.height : 1),
                  vB = ZB.fog,
                  kB = ZB.imageProcessing,
                  nB = cB(TB),
                  hB = ZB._envTextures,
                  zB = BB._sceneUboCacheKey;
                if (zB[0] === TB && zB[1] === vB && zB[2] === nB && zB[3] === GB && zB[4] === kB.exposure && zB[5] === kB.contrast && zB[6] === hB) return;
                zB[0] = TB, zB[1] = vB, zB[2] = nB, zB[3] = GB, zB[4] = kB.exposure, zB[5] = kB.contrast, zB[6] = hB;
                const FB = BB._suData;
                wB(FB, IB, ZB, TB, GB);
                const NB = ZB._sceneUboContributors;
                if (NB)
                  for (const cB of NB) cB(FB, ZB);
                IB._device.queue.writeBuffer(BB._sceneUBO, 0, FB)
              })(BB, IB, TB, oB), JB.Z2 = oB, BB._batchState?._reset(), jB(BB._opaqueBindings, JB), jB(BB._directBindings, JB), jB(BB._transparentBindings, JB), BB._batchState?._flush(IB),
                function(BB, IB) {
                  const ZB = BB._transparentBindings;
                  if (ZB.length <= 1 || !IB) return;
                  const TB = vB(IB);
                  for (const JB of ZB) {
                    const BB = JB.renderable._worldCenter;
                    JB._sortDistance = BB ? BB[0] * TB[2] + BB[1] * TB[6] + BB[2] * TB[10] + TB[14] : 0
                  }
                  ZB.sort(iB)
                }(BB, oB)
            }(BB, IB, ZB);
            const JB = BB._colorAttachment,
              oB = BB._config;
            oB.rt._colorView && (oB.rt === TB.surface.scRT && (JB.view = oB.rt._colorView), JB.resolveTarget = oB.rst?._colorView ?? void 0, JB.clearValue = oB.clrColor ?? TB.clearColor, JB.loadOp = oB.clr ? "clear" : "load");
            if (BB._executeWithTransmission) return BB._executeWithTransmission(ZB._sampleCount);
            const GB = IB._currentEncoder.beginRenderPass(BB._renderPassDescriptor),
              kB = HB(BB, GB);
            return GB.end(), kB
          }(hB, IB, kB),
          dispose() {
            if (hB._disposed) return;
            hB._disposed = !0;
            const IB = hB._pendingMeshes;
            IB && (IB.length = 0);
            for (const BB of hB._renderables) hB._retireRenderable?.(hB.engine, BB);
            hB._passes.length = hB._opaqueBindings.length = hB._directBindings.length = 0, hB._transparentBindings.length = hB._renderables.length = hB._ob.length = 0, hB._ownsTargets && ((0, TB.e)(BB.rt), (0, TB.e)(BB.rst)), BB.depth?._eager || (0, TB.e)(BB.depth);
            const ZB = hB._sceneUBO;
            (0, FB.f)(hB.engine, (() => ZB.destroy())), hB._batchState?._release(hB.engine), hB._batchState = void 0
          }
        };
      return hB
    }

    function iB(BB, IB) {
      return IB._sortDistance - BB._sortDistance || BB.renderable.order - IB.renderable.order
    }

    function pB(BB, IB) {
      return BB.renderable.order - IB.renderable.order
    }

    function aB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB._renderables,
        ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        oB = arguments.length > 4 ? arguments[4] : void 0;
      const GB = BB._config,
        vB = GB.rt,
        kB = BB._batchState,
        cB = OB(IB, BB.lg._renderableVersion);
      if (ZB) {
        const IB = (IB, ZB) => {
          IB && (ZB || BB._ownsTargets || IB._eager) && (0, TB.c)(IB, BB.engine)
        };
        IB(vB), vB._descriptor.samples > 1 && IB(GB.rst), IB(GB.depth, !0)
      }
      const {
        _opaqueBindings: nB,
        _directBindings: hB,
        _transparentBindings: zB
      } = cB;
      try {
        for (const ZB of IB) {
          const IB = ZB.bind(BB.engine, BB._targetSignature);
          cB._batchState = BB._targetSignature._collectBatches?.(cB._batchState, IB), ZB.isTransparent || ZB._transmissive ? zB.push(IB) : ZB._direct ? hB.push(IB) : nB.push(IB)
        }
        nB.sort(pB), hB.sort(pB), ZB && MB(BB, BB.engine, !1)
      } catch (FB) {
        throw cB._batchState?._release(void 0, oB ?? [kB]), FB
      }
      return ZB && (! function(BB, IB) {
        const ZB = BB._config,
          TB = BB._colorAttachment;
        TB.view = IB._colorView, BB._renderPassDescriptor.colorAttachments = IB._colorView ? [TB] : [];
        const JB = ZB.depth ?? IB,
          oB = JB._depthView;
        let GB;
        if (oB) {
          const BB = JB._descriptor,
            IB = (ZB.depth ? JB._eager : !1 === ZB.depthClear) ? "load" : "clear";
          GB = {
            view: oB,
            depthClearValue: BB.depthClearValue ?? 0,
            depthLoadOp: IB,
            depthStoreOp: "store"
          }, BB.dFormat?.includes("stencil") && (GB.stencilClearValue = 0, GB.stencilLoadOp = IB, GB.stencilStoreOp = "store")
        }
        BB._renderPassDescriptor.depthStencilAttachment = GB
      }(BB, vB), BB._updateContext.targetWidth = vB._width, BB._updateContext.targetHeight = vB._height), JB && (Object.assign(BB, cB), kB?._release(BB.engine, [cB._batchState])), cB
    }

    function HB(BB, IB) {
      const ZB = BB.engine,
        TB = BB._config,
        oB = TB.rt,
        GB = BB.lg,
        vB = BB._opaqueBindings,
        kB = BB._ob,
        cB = BB._sceneBG;
      if (function(BB, IB, ZB, TB) {
          const JB = IB?.viewport;
          if (!JB) return;
          const oB = Math.floor(JB.x * ZB),
            GB = Math.floor((1 - JB.y - JB.height) * TB),
            vB = Math.ceil((JB.x + JB.width) * ZB) - oB,
            kB = Math.ceil((1 - JB.y) * TB) - GB;
          BB.setViewport(oB, GB, vB, kB, 0, 1), BB.setScissorRect(oB, GB, vB, kB)
        }(IB, TB.cam ?? GB.camera, oB._width, oB._height), IB.setBindGroup(0, cB), BB._lastVis !== JB.e || !kB.length) {
        const IB = oB._descriptor,
          TB = ZB._device.createRenderBundleEncoder({
            colorFormats: IB.format ? [IB.format] : [],
            depthStencilFormat: BB._targetSignature._depthStencilFormat,
            sampleCount: IB.samples
          });
        TB.setBindGroup(0, cB), PB(TB, vB, ZB), kB[0] = TB.finish(), BB._lastVis = JB.e
      }
      let nB = vB.length;
      return IB.executeBundles(kB), IB.setBindGroup(0, cB), nB += PB(IB, BB._directBindings, ZB), nB += PB(IB, BB._transparentBindings, ZB), nB
    }

    function MB(BB, IB) {
      let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const TB = QB(IB, BB.lg)._buffer;
      if (TB === BB._lightsUBO) return;
      const JB = IB._device.createBindGroup({
        layout: gB(IB),
        entries: [{
          binding: 0,
          resource: {
            buffer: BB._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: TB
          }
        }]
      });
      BB._lightsUBO = TB, BB._sceneBG = JB, ZB && (BB._ob = [])
    }

    function jB(BB, IB) {
      for (const ZB of BB) ZB.update?.(IB)
    }

    function PB(BB, IB, ZB) {
      let TB = null,
        JB = 0;
      for (const oB of IB) {
        const IB = oB.renderable.mesh;
        IB && !1 === IB.visible || (oB.pipeline !== TB && (BB.setPipeline(oB.pipeline), TB = oB.pipeline), JB += oB.draw(BB, ZB))
      }
      return JB
    }

    function RB(BB) {
      const IB = BB._materialSwapQueue;
      if (!IB[0] || BB._runtimeBuilds?.w) return;
      let TB, JB, oB;
      const GB = BB._renderables;
      for (const ZB of IB) {
        const IB = ZB.material;
        if (!IB) continue;
        const vB = ZB._runtimeThinBuild;
        if (vB) {
          JB = vB(BB, ZB, JB);
          continue
        }
        const kB = BB._groups.get(IB._buildGroup),
          cB = kB?.r;
        if (!cB) {
          (oB ??= []).push(ZB);
          continue
        }
        if (kB._w?.(ZB)) {
          (oB ??= []).push([ZB, IB]);
          continue
        }
        const nB = BB._meshDisposables.get(ZB);
        nB && (BB._meshDisposables.delete(ZB), (0, FB.f)(BB.surface.engine, (() => nB.forEach((BB => BB())))));
        const hB = kB.o;
        let zB;
        for (let BB = GB.length; BB--;) GB[BB].mesh === ZB && (zB = GB.splice(BB, 1)[0]);
        IB._csmGen = -~IB._csmGen;
        const NB = cB(BB, ZB);
        if (hB) {
          const BB = hB.indexOf(zB);
          BB < 0 ? hB.push(NB) : hB[BB] = NB
        }
        TB = GB.push(NB)
      }
      if (TB && (GB.sort(((BB, IB) => BB.order - IB.order)), BB._renderableVersion++, BB._materialEpoch++), IB.length = 0, !oB) return JB;
      const vB = oB;
      return ZB.e(367).then((() => ZB(61420))).then((IB => {
        let {
          C: ZB
        } = IB;
        return ZB(BB, vB, JB)
      }), (IB => {
        const ZB = BB._runtimeBuilds;
        ZB ? ZB._x(IB) : console.error(IB)
      }))
    }
    var rB = null;

    function mB(BB, IB) {
      const ZB = BB.engine,
        JB = {
          _kind: "lg",
          surface: BB,
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
            ZB.useFloatingOrigin && JB.camera && !JB.camera._useFloatingOrigin && (JB.camera._useFloatingOrigin = !0, JB.camera._viewVer = -1, JB.camera._vpVer = -1);
            const BB = JB.fixedDeltaMs > 0 ? JB.fixedDeltaMs : ZB._currentDelta,
              IB = ZB._currentEncoder;
            let TB = 0;
            for (const ZB of JB._beforeRender) ZB(BB);
            JB._materialSwapQueue.length && RB(JB);
            for (const oB of JB._prePasses) TB += oB.execute(IB, ZB);
            for (const oB of JB._uniformUpdaters) oB.update(ZB);
            JB._drawCallsPre = TB
          },
          _record: () => JB._frameGraph.execute(),
          _resize() {
            JB._frameGraph.build()
          }
        },
        GB = function() {
          const BB = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let IB = 0; IB < BB._tasks.length; IB++) oB(BB, BB._tasks[IB]);
              for (const IB of BB._tasks)
                for (const BB of IB._passes) BB._initialize()
            },
            execute() {
              let IB = 0;
              for (const ZB of BB._tasks)
                if (!1 !== ZB.executionEnabled)
                  if (ZB.execute) IB += ZB.execute();
                  else
                    for (const BB of ZB._passes) IB += BB._execute();
              return IB
            },
            dispose() {
              for (const IB of BB._tasks) IB.dispose();
              BB._tasks.length = 0, BB._currentProcessedTask = null
            }
          };
          return BB
        }();
      if (JB._frameGraph = GB, !1 !== IB?.defaultRenderTask) {
        const IB = BB.msaaSamples > 1,
          oB = IB ? (0, TB.b)({
            lbl: "scene-color",
            format: BB.format,
            dFormat: "depth24plus-stencil8",
            samples: BB.msaaSamples,
            size: BB
          }) : BB.scRT,
          vB = IB ? void 0 : (0, TB.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: BB
          });
        ! function(BB, IB) {
          BB._tasks.push(IB)
        }(GB, YB({
          name: "lg",
          rt: oB,
          rst: IB ? BB.scRT : void 0,
          depth: vB
        }, ZB, JB))
      }
      return JB._disposables.push((() => GB.dispose())), JB
    }
    async function XB(BB) {
      const IB = BB;
      for (IB._built || (IB._materialSwapQueue.length = 0); IB._deferredBuilders.length;) {
        const BB = IB._deferredBuilders.splice(0);
        await Promise.all(BB.map((BB => BB())))
      }
      await RB(IB), rB?.get(IB)?.() || (IB._runtimeBuilds?._e(), IB._renderableVersion++, IB._built = !0), await (IB._rebuildHook?.(IB))
    }
    var LB = null;
    async function eB(BB) {
      const IB = BB,
        TB = IB.surface;
      (0, JB.h)(TB, IB) || (await XB(BB), IB._renderables.sort(uB), await Promise.all(IB._frameGraph._tasks.map((BB => BB._preload?.()))), LB && await LB(IB), IB._frameGraph.build(), TB._renderingContexts[0] && (await ZB.e(365).then((() => ZB(61408)))).configureSwapchainOverlayScene(TB, IB), rB?.get(IB)?.() || (0, JB.k)(TB, IB))
    }
    var uB = (BB, IB) => BB.order - IB.order
  },
  41722: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      c: () => nB
    });
    var TB = ZB(41681),
      JB = ZB(41687),
      oB = ZB(41694),
      GB = ZB(41696),
      vB = ZB(41701),
      kB = ZB(41710);

    function cB(BB, IB, ZB) {
      let vB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (IB < 1 || ZB < 1) && (0, TB.d)(676, IB, ZB);
      const cB = BB._device,
        nB = vB.mipMaps ?? !1,
        hB = vB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        zB = nB ? (0, kB.d)(IB, ZB) : 1,
        FB = cB.createTexture({
          size: {
            width: IB,
            height: ZB
          },
          format: hB,
          mipLevelCount: zB,
          usage: JB.k.TEXTURE_BINDING | JB.k.COPY_DST | JB.k.RENDER_ATTACHMENT
        }),
        NB = {
          addressModeU: vB.addressModeU ?? "clamp-to-edge",
          addressModeV: vB.addressModeV ?? "clamp-to-edge",
          minFilter: vB.minFilter ?? "linear",
          magFilter: vB.magFilter ?? "linear",
          mipmapFilter: nB ? "linear" : "nearest"
        },
        gB = (0, GB.c)(BB, NB),
        qB = {
          texture: FB,
          view: FB.createView(),
          sampler: gB,
          width: IB,
          height: ZB
        };
      return (0, oB.e)(qB), BB._dlr && BB._dlr.t(qB, {
        kind: "dynamic",
        width: IB,
        height: ZB,
        format: hB,
        levels: zB,
        samplerDesc: NB,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), qB
    }

    function nB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const JB = TB.invertY ?? !0,
        oB = TB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: ZB,
        flipY: JB
      }, {
        texture: IB.texture,
        premultipliedAlpha: oB
      }, [IB.width, IB.height]);
      const GB = IB._recoverySource;
      GB && "dynamic" === GB.kind && (GB.source = ZB, GB.flipY = JB, GB.premultipliedAlpha = oB), IB.texture.mipLevelCount > 1 && (0, vB.generateMipmaps)(BB, IB.texture)
    }
  },
  41715: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB
    });
    var TB = ZB(41681),
      JB = ZB(41687),
      oB = ZB(41694),
      GB = ZB(41696),
      vB = ZB(41710);
    async function kB(BB, IB) {
      let kB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [cB, nB] = function(BB) {
        const IB = BB,
          ZB = [
            [IB.displayWidth, IB.displayHeight],
            [IB.videoWidth, IB.videoHeight],
            [IB.naturalWidth, IB.naturalHeight],
            [IB.width, IB.height]
          ];
        for (const [TB, JB] of ZB)
          if (void 0 !== TB && void 0 !== JB && Number.isInteger(TB) && Number.isInteger(JB) && TB > 0 && JB > 0) return [TB, JB];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(IB), [hB, zB] = function(BB, IB, ZB) {
        if (void 0 === ZB) return [BB, IB];
        if (!Number.isInteger(ZB) || ZB < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ZB})`);
        if (Math.max(BB, IB) <= ZB) return [BB, IB];
        const TB = ZB / Math.max(BB, IB);
        return BB >= IB ? [ZB, Math.max(1, Math.round(IB * TB))] : [Math.max(1, Math.round(BB * TB)), ZB]
      }(cB, nB, kB.maxDimension), FB = kB.mipMaps ?? !0, NB = kB.premultiplyAlpha ?? !1;
      let gB = IB,
        qB = null;
      const yB = {
        texture: null
      };
      try {
        hB === cB && zB === nB || (qB = await createImageBitmap(IB, {
          resizeWidth: hB,
          resizeHeight: zB,
          resizeQuality: "high",
          premultiplyAlpha: NB ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), gB = qB);
        const UB = BB._device,
          WB = kB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          dB = FB ? (0, vB.d)(hB, zB) : 1,
          CB = dB > 1 ? (await Promise.resolve().then((() => ZB(41701)))).generateMipmaps : null,
          QB = {
            addressModeU: kB.addressModeU ?? "repeat",
            addressModeV: kB.addressModeV ?? "repeat",
            minFilter: kB.minFilter ?? "linear",
            magFilter: kB.magFilter ?? "linear",
            mipmapFilter: FB ? "linear" : "nearest"
          };
        QB.maxAnisotropy = "linear" === QB.minFilter && "linear" === QB.magFilter && "linear" === QB.mipmapFilter ? 4 : 1;
        const sB = kB.invertY ?? !0,
          wB = async IB => {
            let ZB;
            UB.pushErrorScope("validation"), UB.pushErrorScope("out-of-memory");
            let oB = null;
            try {
              const ZB = yB.texture = UB.createTexture({
                size: {
                  width: hB,
                  height: zB
                },
                format: WB,
                mipLevelCount: dB,
                usage: JB.k.TEXTURE_BINDING | JB.k.COPY_DST | JB.k.RENDER_ATTACHMENT
              });
              UB.queue.copyExternalImageToTexture({
                source: IB,
                flipY: sB
              }, {
                texture: ZB,
                premultipliedAlpha: NB
              }, {
                width: hB,
                height: zB
              }), CB && CB(BB, ZB), oB = (0, GB.c)(BB, QB)
            } catch (FB) {
              ZB = FB
            }
            const [vB, kB] = await Promise.all([UB.popErrorScope(), UB.popErrorScope()]);
            if (ZB) throw ZB;
            const cB = kB ?? vB;
            if (cB) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${cB.message}`, {
              cause: cB
            });
            const nB = yB.texture;
            return nB && oB || (0, TB.d)(677), {
              texture: nB,
              view: nB.createView(),
              sampler: oB,
              width: hB,
              height: zB
            }
          }, OB = await (BB._dlr?.x(gB, hB, zB, WB, dB, QB, sB, NB, wB)) ?? await wB(gB);
        return (0, oB.e)(OB), OB
      } catch (UB) {
        throw yB.texture?.destroy(), UB
      } finally {
        qB?.close()
      }
    }
  },
  41701: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      generateMipmaps: () => FB,
      recordMipmaps: () => NB
    });
    var TB = ZB(41687),
      JB = ZB(41696),
      oB = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var GB = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      vB = null,
      kB = null,
      cB = null,
      nB = null,
      hB = null;

    function zB(BB) {
      const IB = BB._device;
      IB !== hB && (vB?.clear(), vB = null, kB = null, cB = null, nB = null, hB = null, hB = IB), kB ??= IB.createShaderModule({
        code: GB
      }), cB ??= function(BB) {
        return (0, JB.c)(BB, oB)
      }(BB), nB ??= IB.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: TB.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: TB.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function FB(BB, IB, ZB) {
      const TB = BB._device,
        JB = TB.createCommandEncoder();
      NB(BB, IB, JB, ZB), TB.queue.submit([JB.finish()])
    }

    function NB(BB, IB, ZB, TB) {
      if (IB.mipLevelCount <= 1) return;
      const JB = BB._device,
        oB = function(BB, IB) {
          const ZB = BB._device;
          zB(BB), vB ??= new Map;
          let TB = vB.get(IB);
          return TB || (TB = ZB.createRenderPipeline({
            layout: ZB.createPipelineLayout({
              bindGroupLayouts: [nB]
            }),
            vertex: {
              module: kB,
              entryPoint: "vs"
            },
            fragment: {
              module: kB,
              entryPoint: "fs",
              targets: [{
                format: IB
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), vB.set(IB, TB)), TB
        }(BB, IB.format),
        GB = null != TB ? {
          dimension: "2d",
          baseArrayLayer: TB,
          arrayLayerCount: 1
        } : {};
      for (let vB = 1; vB < IB.mipLevelCount; vB++) {
        const BB = IB.createView({
            baseMipLevel: vB - 1,
            mipLevelCount: 1,
            ...GB
          }),
          TB = IB.createView({
            baseMipLevel: vB,
            mipLevelCount: 1,
            ...GB
          }),
          kB = JB.createBindGroup({
            layout: nB,
            entries: [{
              binding: 0,
              resource: BB
            }, {
              binding: 1,
              resource: cB
            }]
          }),
          hB = ZB.beginRenderPass({
            colorAttachments: [{
              view: TB,
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
        hB.setPipeline(oB), hB.setBindGroup(0, kB), hB.draw(3), hB.end()
      }
    }
  },
  41710: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return Math.floor(Math.log2(Math.max(BB, IB))) + 1
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  41672: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      f: () => nB
    });
    var TB = ZB(41681),
      JB = ZB(41687),
      oB = ZB(41694),
      GB = ZB(41696),
      vB = ZB(41701),
      kB = ZB(41710);

    function cB(BB, IB, ZB, vB) {
      let cB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (IB < 1 || ZB < 1 || vB < 1) && (0, TB.d)(722, IB, ZB, vB);
      const nB = BB._device,
        hB = cB.mipMaps ?? !0,
        zB = cB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        FB = nB.createTexture({
          size: {
            width: IB,
            height: ZB,
            depthOrArrayLayers: vB
          },
          dimension: "2d",
          format: zB,
          mipLevelCount: hB ? (0, kB.d)(IB, ZB) : 1,
          usage: JB.k.TEXTURE_BINDING | JB.k.COPY_DST | JB.k.RENDER_ATTACHMENT
        }),
        NB = (0, GB.c)(BB, {
          addressModeU: cB.addressModeU ?? "repeat",
          addressModeV: cB.addressModeV ?? "repeat",
          minFilter: cB.minFilter ?? "linear",
          magFilter: cB.magFilter ?? "linear",
          mipmapFilter: hB ? "linear" : "nearest"
        }),
        gB = {
          texture: FB,
          view: FB.createView({
            dimension: "2d-array"
          }),
          sampler: NB,
          width: IB,
          height: ZB,
          layers: vB
        };
      return (0, oB.e)(gB), gB
    }

    function nB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ZB < 0 || ZB >= IB.layers || (0 | ZB) !== ZB) && (0, TB.d)(723, IB.layers, ZB);
      const GB = oB.invertY ?? !0,
        kB = oB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: JB,
        flipY: GB
      }, {
        texture: IB.texture,
        origin: [0, 0, ZB],
        premultipliedAlpha: kB
      }, [IB.width, IB.height, 1]), IB.texture.mipLevelCount > 1 && (0, vB.generateMipmaps)(BB, IB.texture, ZB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);