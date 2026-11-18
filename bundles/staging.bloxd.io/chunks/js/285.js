export const id = 285;
export const ids = [285];
export const modules = {
  40420: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => EB,
      g: () => OB,
      h: () => DB,
      k: () => mB,
      m: () => vB
    });
    var VB = dB(40369);
    var yB = "Babylon Lite v1.32.0",
      pB = dB(40425);

    function lB(BB) {
      return "clientWidth" in BB
    }
    var JB = 1;

    function YB(BB, TB, dB) {
      const YB = TB.getContext("webgpu");
      YB || (0, VB.c)(54), lB(TB) && TB.setAttribute("data-engine", yB);
      const gB = dB?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        oB = dB?.srgb ? (kB = gB).endsWith("-srgb") ? kB : `${kB}-srgb` : gB;
      var kB;
      const LB = dB?.alphaMode ?? "opaque";
      YB.configure({
        device: BB._device,
        format: gB,
        alphaMode: LB,
        viewFormats: [oB]
      });
      const OB = 1 === dB?.msaaSamples ? 1 : 4,
        DB = (0, pB.e)({
          lbl: "swapchain",
          format: oB,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return DB._eager = !0, {
        engine: BB,
        canvas: TB,
        format: oB,
        msaaSamples: OB,
        scRT: DB,
        maxDevicePixelRatio: dB?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: JB++,
        _context: YB,
        _configureFormat: gB,
        _alphaMode: LB,
        _renderingContexts: []
      }
    }

    function gB(BB) {
      const TB = BB._context.getCurrentTexture(),
        dB = BB.scRT;
      dB._colorTexture = TB, dB._colorView = TB.createView({
        format: BB.format
      }), dB._width = TB.width, dB._height = TB.height
    }

    function oB(BB) {
      const TB = BB.canvas;
      if (!lB(TB)) return;
      const dB = BB._w ?? TB.clientWidth,
        VB = BB._h ?? TB.clientHeight;
      if (!(dB > 0 && VB > 0)) return;
      const yB = Math.min(globalThis.devicePixelRatio || 1, BB.maxDevicePixelRatio);
      kB(BB, dB * yB | 0, VB * yB | 0)
    }

    function kB(BB, TB, dB) {
      const VB = BB.canvas,
        yB = 0 | TB,
        pB = 0 | dB;
      if (yB > 0 && pB > 0 && (yB !== VB.width || pB !== VB.height)) {
        VB.width = yB, VB.height = pB, BB.scRT._width = yB, BB.scRT._height = pB;
        for (const TB of BB._renderingContexts) TB._resize?.()
      }
    }
    var LB = 0;

    function OB(BB, TB) {
      return -1 !== BB._renderingContexts.indexOf(TB)
    }

    function DB(BB, TB) {
      return -1 === BB._renderingContexts.indexOf(TB) && (BB._renderingContexts.push(TB), !0)
    }
    var uB = null;
    var HB = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function EB(BB, TB) {
      const pB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...uB ? uB() : {}
      });
      pB || (0, VB.c)(47);
      const lB = uB?.deviceFeatures?.(pB, TB) ?? function(BB) {
          return HB.filter((TB => BB.features.has(TB)))
        }(pB),
        JB = await pB.requestDevice({
          requiredFeatures: lB,
          requiredLimits: TB?.requiredLimits
        });
      console.log(`${yB} - WebGPU engine`);
      const kB = !!TB?.useHighPrecisionMatrix,
        LB = !!TB?.useFloatingOrigin;
      if (LB && !kB && (0, VB.c)(48), kB) {
        const {
          allocateF64Mat4: BB
        } = await dB.e(339).then((() => dB(59792)));
        0
      }
      let OB, DB, EB, vB;
      if (LB) {
        const [{
          wrapRenderableForFO: BB,
          lightFoVersion: TB,
          applyLightFoOffset: VB
        }, {
          makePackMeshWorld: yB
        }] = await Promise.all([dB.e(340).then((() => dB(59794))), dB.e(341).then((() => dB(59798)))]);
        OB = BB, DB = yB, EB = TB, vB = VB
      }
      const mB = {
          _device: JB
        },
        iB = [mB];
      return Object.assign(mB, {
        engine: mB,
        surfaces: iB,
        _surfaces: iB,
        _device: JB,
        _options: TB,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: kB,
        useFloatingOrigin: LB,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: OB,
        _makePackMeshWorld: DB,
        _lightFoVersion: EB,
        _applyLightFoOffset: vB
      }, YB(mB, BB, TB)), oB(mB), gB(mB), mB
    }

    function vB(BB, TB, dB) {
      kB(BB, TB, dB)
    }

    function mB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.surfaces;
      if (dB !== BB.surfaces)
        for (let yB = dB.length; yB--;) dB[yB].engine !== BB && (0, VB.c)(49);
      iB(BB, TB, dB)
    }

    function iB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB._surfaces,
        VB = 0;
      for (let pB = dB.length; pB--;) VB += dB[pB]._renderingContexts.length;
      if (!VB) return BB.drawCallCount = 0, BB._flushGpuRetirements?.(BB);
      const yB = BB._device.createCommandEncoder({
        label: "frame"
      });
      BB._currentEncoder = yB, BB._currentDelta = TB;
      try {
        BB._gpuTimerBegin?.(yB), VB = 0;
        for (let BB = 0; BB < dB.length; BB++) {
          const TB = dB[BB];
          TB._capturePreFrame?.(TB), gB(TB);
          const yB = TB._renderingContexts;
          for (let BB = 0; BB < yB.length; BB++) {
            const TB = yB[BB];
            TB._update(), VB += TB._drawCallsPre + TB._record()
          }
        }
        const TB = BB._currentEncoder;
        for (let BB = 0; BB < dB.length; BB++) {
          const VB = dB[BB];
          VB._captureService?.(VB, TB)
        }
        BB._gpuTimerEnd?.(TB), BB._cbs[0] = TB.finish(), BB._device.queue.submit(BB._cbs), BB._flushGpuRetirements?.(BB), BB.drawCallCount = VB, BB._gpuTimerResolve?.()
      } finally {
        BB._currentEncoder = void 0
      }
    }
  },
  40375: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => pB,
      g: () => VB
    });
    var VB = globalThis.GPUTextureUsage,
      yB = globalThis.GPUBufferUsage,
      pB = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40438: (BB, TB, dB) => {
    function VB(BB) {
      yB(BB.splice(0))
    }

    function yB(BB) {
      for (const dB of BB) try {
        dB()
      } catch (TB) {
        console.error("GPU resource retirement failed.", TB)
      }
    }

    function pB(BB, TB) {
      BB._flushGpuRetirements ??= lB, (BB._retirements ??= []).push(TB)
    }

    function lB(BB) {
      const TB = BB._retirements;
      if (!TB) return;
      BB._retirements = null;
      const dB = BB._retiring ??= new Set;
      dB.add(TB), queueMicrotask((() => {
        BB._device.queue.onSubmittedWorkDone().then((() => {
          dB.delete(TB), VB(TB)
        })).catch((() => {}))
      }))
    }
    dB.d(TB, {
      b: () => pB
    })
  },
  40425: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      g: () => lB,
      j: () => JB
    });
    var VB = dB(40375);

    function yB(BB) {
      const TB = BB.size;
      return "canvas" in TB ? TB.canvas : TB
    }

    function pB(BB) {
      return {
        _descriptor: BB,
        _resolveSize: yB,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function lB(BB, TB) {
      if (BB._eager) return void BB._syncEager?.(TB);
      JB(BB);
      const dB = BB._descriptor,
        {
          width: pB,
          height: lB
        } = (BB._resolveSize ?? yB)(dB);
      BB._width = pB, BB._height = lB;
      const YB = TB._device;
      dB.format && (BB._colorTexture = YB.createTexture({
        label: dB.lbl,
        size: {
          width: pB,
          height: lB
        },
        format: dB.format,
        sampleCount: dB.samples,
        usage: VB.g.RENDER_ATTACHMENT | VB.g.TEXTURE_BINDING | VB.g.COPY_SRC | VB.g.COPY_DST
      }), BB._colorView = BB._colorTexture.createView()), dB.dFormat && (BB._depthTexture = YB.createTexture({
        label: dB.lbl,
        size: {
          width: pB,
          height: lB
        },
        format: dB.dFormat,
        sampleCount: dB.samples,
        usage: VB.g.RENDER_ATTACHMENT | VB.g.TEXTURE_BINDING
      }), BB._depthView = BB._depthTexture.createView())
    }

    function JB(BB) {
      if (!BB || BB._eager && !BB._disposeAttachments) return;
      const TB = BB._colorTexture,
        dB = BB._depthTexture;
      if (BB._colorTexture = BB._depthTexture = null, BB._colorView = BB._depthView = null, BB._width = BB._height = 0, BB._disposeAttachments) BB._disposeAttachments(TB, dB);
      else try {
        TB?.destroy()
      } finally {
        !1 !== BB._ownsDepthTexture && dB?.destroy()
      }
    }
  },
  40432: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      f: () => yB,
      j: () => pB
    });
    var VB = Float32Array,
      yB = Float64Array,
      pB = Uint32Array
  },
  40446: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    var VB = 16
  },
  40369: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = null;

    function yB(BB) {
      for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), yB = 1; yB < TB; yB++) dB[yB - 1] = arguments[yB];
      const pB = new Error(VB?.(BB, dB) ?? `#${BB}`);
      throw pB.lite = dB, pB
    }
  },
  40397: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(40381);

    function yB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const dB = TB.compare,
        yB = TB.lodMinClamp ?? 0,
        pB = TB.lodMaxClamp ?? 32,
        lB = void 0 !== dB || 0 !== yB || 32 !== pB ? `${dB??""}:${yB}:${pB}` : "";
      return (0, VB.d)(BB, TB, lB)
    }
  },
  40377: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = null;

    function yB(BB) {
      const TB = VB ??= new WeakMap;
      TB.set(BB, (TB.get(BB) ?? 0) + 1)
    }

    function pB(BB) {
      yB(BB.texture)
    }
  },
  40381: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = null,
      yB = "nearest",
      pB = "clamp-to-edge",
      lB = {
        minFilter: yB,
        magFilter: yB,
        mipmapFilter: yB,
        addressModeU: pB,
        addressModeV: pB,
        addressModeW: pB,
        maxAnisotropy: 1
      };

    function JB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const yB = BB._device,
        pB = VB ??= new WeakMap;
      let JB = pB.get(yB);
      JB || pB.set(yB, JB = new Map);
      let YB = dB;
      for (const VB in lB) {
        const BB = VB;
        YB += `:${TB[BB]??lB[BB]}`
      }
      let gB = JB.get(YB);
      return gB || JB.set(YB, gB = yB.createSampler(TB)), gB
    }
  },
  40429: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => QB,
      e: () => ZB
    });
    var VB = dB(40425),
      yB = dB(40420);

    function pB(BB, TB) {
      TB._passes.length = 0, BB._currentProcessedTask = TB;
      try {
        TB.record()
      } finally {
        BB._currentProcessedTask = null
      }
    }
    var lB = dB(40432);

    function JB(BB) {
      const TB = BB.worldMatrixVersion;
      if (BB._viewVer === TB) return BB._viewCache;
      const dB = BB._viewCache,
        VB = BB.worldMatrix,
        yB = BB._useFloatingOrigin,
        pB = yB ? 0 : VB[12],
        lB = yB ? 0 : VB[13],
        JB = yB ? 0 : VB[14];
      return dB[0] = VB[0], dB[1] = VB[4], dB[2] = VB[8], dB[3] = 0, dB[4] = VB[1], dB[5] = VB[5], dB[6] = VB[9], dB[7] = 0, dB[8] = VB[2], dB[9] = VB[6], dB[10] = VB[10], dB[11] = 0, dB[12] = -(VB[0] * pB + VB[1] * lB + VB[2] * JB), dB[13] = -(VB[4] * pB + VB[5] * lB + VB[6] * JB), dB[14] = -(VB[8] * pB + VB[9] * lB + VB[10] * JB), dB[15] = 1, BB._viewVer = TB, dB
    }
    var YB = null;

    function gB(BB) {
      return BB._projFov === BB.fov && BB._projNear === BB.nearPlane && BB._projFar === BB.farPlane || (BB._projFov = BB.fov, BB._projNear = BB.nearPlane, BB._projFar = BB.farPlane, BB._projRev = (BB._projRev ?? 0) + 1), BB.worldMatrixVersion + (BB._projRev ?? 0)
    }

    function oB(BB, TB) {
      const dB = gB(BB);
      if (BB._projVer === dB && BB._projAspect === TB) return BB._projCache;
      const VB = BB._projCache;
      return null !== YB && BB.ortho ? YB(BB, TB, VB) : function(BB, TB, dB, VB, yB) {
        const pB = 1 / Math.tan(.5 * TB),
          lB = yB - VB;
        BB[0] = pB / dB, BB[5] = pB, BB[10] = -VB / lB, BB[11] = 1, BB[14] = yB * VB / lB
      }(VB, BB.fov, TB, BB.nearPlane, BB.farPlane), BB._projVer = dB, BB._projAspect = TB, VB
    }
    var kB = dB(40375);

    function LB(BB, TB, dB) {
      return BB._device.createBuffer({
        label: dB,
        size: (VB = TB, yB = 16, Math.ceil(VB / yB) * yB),
        usage: kB.c.UNIFORM | kB.c.COPY_DST
      });
      var VB, yB
    }
    var OB = dB(40438),
      DB = null;

    function uB(BB) {
      const TB = BB._device,
        dB = DB ??= new WeakMap;
      let VB = dB.get(TB);
      return VB || (VB = TB.createBindGroupLayout({
        label: "Gu",
        entries: [{
          binding: 0,
          visibility: kB.e.VERTEX | kB.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: kB.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), dB.set(TB, VB)), VB
    }

    function HB(BB, TB, dB) {
      const VB = BB._device,
        yB = LB(BB, TB.byteLength, dB);
      try {
        VB.queue.writeBuffer(yB, 0, TB.buffer, TB.byteOffset, TB.byteLength)
      } catch (pB) {
        throw yB.destroy(), pB
      }
      return yB
    }
    var EB = dB(40446),
      vB = new lB.j(1),
      mB = new lB.e(vB.buffer);

    function iB(BB) {
      let TB = 0;
      for (const dB of BB) TB += dB._lightVersion ?? 0;
      return TB
    }

    function NB(BB, TB) {
      BB.fill(0);
      let dB = 0;
      for (const VB of TB) {
        if (dB >= EB.e) break;
        VB._writeLightUbo && (VB._writeLightUbo(BB, 4 + 16 * dB), dB++)
      }
      vB[0] = dB, BB[0] = mB[0]
    }

    function tB(BB, TB) {
      let dB = TB._lightGpuState;
      const VB = 16 + 16 * EB.e * 4;
      if (dB && dB._byteSize === VB) return dB;
      const yB = !dB;
      dB?._buffer.destroy();
      const pB = new lB.e(VB / 4);
      return NB(pB, TB.lights), BB._applyLightFoOffset?.(pB, TB), dB = {
        _buffer: HB(BB, pB),
        _scratch: pB,
        jR: iB(TB.lights) + (BB._lightFoVersion?.(TB) ?? 0),
        _listVersion: TB._lightListVersion ?? 0,
        _lightCount: TB.lights.length,
        _byteSize: VB
      }, TB._lightGpuState = dB, yB && TB._disposables.push((() => {
        TB._lightGpuState?._buffer.destroy(), TB._lightGpuState = void 0
      })), dB
    }

    function fB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const yB = TB;
      if (0 === VB && 16 === yB.length) return void BB.set(yB, dB);
      const pB = VB,
        lB = dB;
      BB[lB + 0] = yB[pB + 0], BB[lB + 1] = yB[pB + 1], BB[lB + 2] = yB[pB + 2], BB[lB + 3] = yB[pB + 3], BB[lB + 4] = yB[pB + 4], BB[lB + 5] = yB[pB + 5], BB[lB + 6] = yB[pB + 6], BB[lB + 7] = yB[pB + 7], BB[lB + 8] = yB[pB + 8], BB[lB + 9] = yB[pB + 9], BB[lB + 10] = yB[pB + 10], BB[lB + 11] = yB[pB + 11], BB[lB + 12] = yB[pB + 12], BB[lB + 13] = yB[pB + 13], BB[lB + 14] = yB[pB + 14], BB[lB + 15] = yB[pB + 15]
    }

    function sB(BB, TB, dB, VB, yB) {
      BB.fill(0);
      const pB = function(BB, TB) {
          const dB = gB(BB);
          if (BB._vpVer === dB && BB._vpAspect === TB) return BB._vpCache;
          const VB = BB._vpCache;
          return function(BB, TB, dB, VB, yB, pB) {
            const lB = dB[VB],
              JB = dB[VB + 1],
              YB = dB[VB + 2],
              gB = dB[VB + 3],
              oB = dB[VB + 4],
              kB = dB[VB + 5],
              LB = dB[VB + 6],
              OB = dB[VB + 7],
              DB = dB[VB + 8],
              uB = dB[VB + 9],
              HB = dB[VB + 10],
              EB = dB[VB + 11],
              vB = dB[VB + 12],
              mB = dB[VB + 13],
              iB = dB[VB + 14],
              NB = dB[VB + 15];
            let tB = yB[pB],
              fB = yB[pB + 1],
              sB = yB[pB + 2],
              MB = yB[pB + 3];
            BB[TB] = lB * tB + oB * fB + DB * sB + vB * MB, BB[TB + 1] = JB * tB + kB * fB + uB * sB + mB * MB, BB[TB + 2] = YB * tB + LB * fB + HB * sB + iB * MB, BB[TB + 3] = gB * tB + OB * fB + EB * sB + NB * MB, tB = yB[pB + 4], fB = yB[pB + 5], sB = yB[pB + 6], MB = yB[pB + 7], BB[TB + 4] = lB * tB + oB * fB + DB * sB + vB * MB, BB[TB + 5] = JB * tB + kB * fB + uB * sB + mB * MB, BB[TB + 6] = YB * tB + LB * fB + HB * sB + iB * MB, BB[TB + 7] = gB * tB + OB * fB + EB * sB + NB * MB, tB = yB[pB + 8], fB = yB[pB + 9], sB = yB[pB + 10], MB = yB[pB + 11], BB[TB + 8] = lB * tB + oB * fB + DB * sB + vB * MB, BB[TB + 9] = JB * tB + kB * fB + uB * sB + mB * MB, BB[TB + 10] = YB * tB + LB * fB + HB * sB + iB * MB, BB[TB + 11] = gB * tB + OB * fB + EB * sB + NB * MB, tB = yB[pB + 12], fB = yB[pB + 13], sB = yB[pB + 14], MB = yB[pB + 15], BB[TB + 12] = lB * tB + oB * fB + DB * sB + vB * MB, BB[TB + 13] = JB * tB + kB * fB + uB * sB + mB * MB, BB[TB + 14] = YB * tB + LB * fB + HB * sB + iB * MB, BB[TB + 15] = gB * tB + OB * fB + EB * sB + NB * MB
          }(VB, 0, oB(BB, TB), 0, JB(BB), 0), BB._vpVer = dB, BB._vpAspect = TB, VB
        }(VB, yB),
        lB = JB(VB),
        YB = VB.worldMatrix;
      fB(BB, pB, 0), fB(BB, lB, 16), TB.useFloatingOrigin ? (BB[32] = 0, BB[33] = 0, BB[34] = 0) : (BB[32] = YB[12], BB[33] = YB[13], BB[34] = YB[14]), BB[87] = TB.canvas.width;
      const kB = dB.imageProcessing;
      BB[76] = kB.exposure, BB[77] = kB.contrast, BB[78] = dB._envTextures?.lodGenerationScale ?? .8, BB[79] = +kB.toneMappingEnabled, BB[37] = TB.canvas.height
    }

    function MB(BB, TB) {
      return {
        _renderables: BB,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: TB
      }
    }

    function zB(BB, TB, dB) {
      BB.clr ??= !0;
      const yB = BB.rt._descriptor,
        pB = BB.depth?._descriptor,
        YB = {
          _colorFormat: yB.format,
          _depthStencilFormat: pB?.dFormat ?? yB.dFormat,
          _depthCompare: yB.depthCompare ?? pB?.depthCompare,
          _sampleCount: yB.samples
        },
        oB = {
          loadOp: "clear",
          storeOp: "store"
        },
        kB = {
          ...MB([], -1),
          name: BB.name,
          _config: BB,
          _ownsTargets: !BB.sharedRt,
          engine: TB,
          Gu: dB,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [oB]
          },
          _colorAttachment: oB,
          _sceneUBO: LB(TB, 368),
          _suData: new lB.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: YB,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (kB._disposed) throw new Error("RenderTask has been disposed.");
            kB._recordExplicit ? kB._recordExplicit(kB, !0) : FB(kB, !1 !== BB.autoMirror ? dB._renderables.slice() : kB._renderables, !0)
          },
          execute: () => function(BB, TB, dB) {
            if (!1 === BB.enabled) return 0;
            const VB = BB.Gu;
            ! function(BB, TB, dB) {
              const VB = BB.Gu;
              !1 !== BB._config.autoMirror && BB._lastVersion !== VB._renderableVersion && FB(BB, VB._renderables.slice());
              rB(BB, TB);
              const yB = BB._updateContext,
                pB = BB._config.cam ?? VB.camera;
              dB._colorFormat && (BB._config._skipClusteredLights || VB._clusteredLightUpdater?.(pB, yB.targetWidth, yB.targetHeight), function(BB, TB) {
                const dB = tB(BB, TB),
                  VB = iB(TB.lights) + (BB._lightFoVersion?.(TB) ?? 0),
                  yB = TB._lightListVersion ?? 0;
                VB === dB.jR && yB === dB._listVersion && TB.lights.length === dB._lightCount || (dB.jR = VB, dB._listVersion = yB, dB._lightCount = TB.lights.length, NB(dB._scratch, TB.lights), BB._applyLightFoOffset?.(dB._scratch, TB), BB._device.queue.writeBuffer(dB._buffer, 0, dB._scratch)), dB._buffer
              }(TB, VB));
              (function(BB, TB, dB, VB) {
                if (!VB) return;
                const yB = VB.viewport,
                  pB = BB._config.rt,
                  lB = (BB._config.cs ? TB.canvas.width / TB.canvas.height : pB._width / pB._height) * (yB ? yB.width / yB.height : 1),
                  JB = dB.fog,
                  YB = dB.imageProcessing,
                  oB = gB(VB),
                  kB = dB._envTextures,
                  LB = BB._sceneUboCacheKey;
                if (LB[0] === VB && LB[1] === JB && LB[2] === oB && LB[3] === lB && LB[4] === YB.exposure && LB[5] === YB.contrast && LB[6] === kB) return;
                LB[0] = VB, LB[1] = JB, LB[2] = oB, LB[3] = lB, LB[4] = YB.exposure, LB[5] = YB.contrast, LB[6] = kB;
                const OB = BB._suData;
                sB(OB, TB, dB, VB, lB);
                const DB = dB._sceneUboContributors;
                if (DB)
                  for (const gB of DB) gB(OB, dB);
                TB._device.queue.writeBuffer(BB._sceneUBO, 0, OB)
              })(BB, TB, VB, pB), yB.K8 = pB, BB._batchState?._reset(), IB(BB._opaqueBindings, yB), IB(BB._directBindings, yB), IB(BB._transparentBindings, yB), BB._batchState?._flush(TB),
                function(BB, TB) {
                  const dB = BB._transparentBindings;
                  if (dB.length <= 1 || !TB) return;
                  const VB = JB(TB);
                  for (const yB of dB) {
                    const BB = yB.renderable._worldCenter;
                    yB._sortDistance = BB ? BB[0] * VB[2] + BB[1] * VB[6] + BB[2] * VB[10] + VB[14] : 0
                  }
                  dB.sort(wB)
                }(BB, pB)
            }(BB, TB, dB);
            const yB = BB._colorAttachment,
              pB = BB._config;
            pB.rt._colorView && (pB.rt === VB.surface.scRT && (yB.view = pB.rt._colorView), yB.resolveTarget = pB.rst?._colorView ?? void 0, yB.clearValue = pB.clrColor ?? VB.clearColor, yB.loadOp = pB.clr ? "clear" : "load");
            if (BB._executeWithTransmission) return BB._executeWithTransmission(dB._sampleCount);
            const lB = TB._currentEncoder.beginRenderPass(BB._renderPassDescriptor),
              YB = KB(BB, lB);
            return lB.end(), YB
          }(kB, TB, YB),
          dispose() {
            if (kB._disposed) return;
            kB._disposed = !0;
            const TB = kB._pendingMeshes;
            TB && (TB.length = 0);
            for (const BB of kB._renderables) kB._retireRenderable?.(kB.engine, BB);
            kB._passes.length = kB._opaqueBindings.length = kB._directBindings.length = 0, kB._transparentBindings.length = kB._renderables.length = kB._ob.length = 0, kB._ownsTargets && ((0, VB.j)(BB.rt), (0, VB.j)(BB.rst)), BB.depth?._eager || (0, VB.j)(BB.depth);
            const dB = kB._sceneUBO;
            (0, OB.b)(kB.engine, (() => dB.destroy())), kB._batchState?._release(kB.engine), kB._batchState = void 0
          }
        };
      return kB
    }

    function wB(BB, TB) {
      return TB._sortDistance - BB._sortDistance || BB.renderable.order - TB.renderable.order
    }

    function UB(BB, TB) {
      return BB.renderable.order - TB.renderable.order
    }

    function FB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB._renderables,
        dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        pB = arguments.length > 4 ? arguments[4] : void 0;
      const lB = BB._config,
        JB = lB.rt,
        YB = BB._batchState,
        gB = MB(TB, BB.Gu._renderableVersion);
      if (dB) {
        const TB = (TB, dB) => {
          TB && (dB || BB._ownsTargets || TB._eager) && (0, VB.g)(TB, BB.engine)
        };
        TB(JB), JB._descriptor.samples > 1 && TB(lB.rst), TB(lB.depth, !0)
      }
      const {
        _opaqueBindings: oB,
        _directBindings: kB,
        _transparentBindings: LB
      } = gB;
      try {
        for (const dB of TB) {
          const TB = dB.bind(BB.engine, BB._targetSignature);
          gB._batchState = BB._targetSignature._collectBatches?.(gB._batchState, TB), dB.isTransparent || dB._transmissive ? LB.push(TB) : dB._direct ? kB.push(TB) : oB.push(TB)
        }
        oB.sort(UB), kB.sort(UB), dB && rB(BB, BB.engine, !1)
      } catch (OB) {
        throw gB._batchState?._release(void 0, pB ?? [YB]), OB
      }
      return dB && (! function(BB, TB) {
        const dB = BB._config,
          VB = BB._colorAttachment;
        VB.view = TB._colorView, BB._renderPassDescriptor.colorAttachments = TB._colorView ? [VB] : [];
        const yB = dB.depth ?? TB,
          pB = yB._depthView;
        let lB;
        if (pB) {
          const BB = yB._descriptor,
            TB = (dB.depth ? yB._eager : !1 === dB.depthClear) ? "load" : "clear";
          lB = {
            view: pB,
            depthClearValue: BB.depthClearValue ?? 0,
            depthLoadOp: TB,
            depthStoreOp: "store"
          }, BB.dFormat?.includes("stencil") && (lB.stencilClearValue = 0, lB.stencilLoadOp = TB, lB.stencilStoreOp = "store")
        }
        BB._renderPassDescriptor.depthStencilAttachment = lB
      }(BB, JB), BB._updateContext.targetWidth = JB._width, BB._updateContext.targetHeight = JB._height), yB && (Object.assign(BB, gB), YB?._release(BB.engine, [gB._batchState])), gB
    }

    function KB(BB, TB) {
      const dB = BB.engine,
        VB = BB._config,
        pB = VB.rt,
        lB = BB.Gu,
        JB = BB._opaqueBindings,
        YB = BB._ob,
        gB = BB._sceneBG;
      if (function(BB, TB, dB, VB) {
          const yB = TB?.viewport;
          if (!yB) return;
          const pB = Math.floor(yB.x * dB),
            lB = Math.floor((1 - yB.y - yB.height) * VB),
            JB = Math.ceil((yB.x + yB.width) * dB) - pB,
            YB = Math.ceil((1 - yB.y) * VB) - lB;
          BB.setViewport(pB, lB, JB, YB, 0, 1), BB.setScissorRect(pB, lB, JB, YB)
        }(TB, VB.cam ?? lB.camera, pB._width, pB._height), TB.setBindGroup(0, gB), BB._lastVis !== yB.b || !YB.length) {
        const TB = pB._descriptor,
          VB = dB._device.createRenderBundleEncoder({
            colorFormats: TB.format ? [TB.format] : [],
            depthStencilFormat: BB._targetSignature._depthStencilFormat,
            sampleCount: TB.samples
          });
        VB.setBindGroup(0, gB), cB(VB, JB, dB), YB[0] = VB.finish(), BB._lastVis = yB.b
      }
      let oB = JB.length;
      return TB.executeBundles(YB), TB.setBindGroup(0, gB), oB += cB(TB, BB._directBindings, dB), oB += cB(TB, BB._transparentBindings, dB), oB
    }

    function rB(BB, TB) {
      let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const VB = tB(TB, BB.Gu)._buffer;
      if (VB === BB._lightsUBO) return;
      const yB = TB._device.createBindGroup({
        layout: uB(TB),
        entries: [{
          binding: 0,
          resource: {
            buffer: BB._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: VB
          }
        }]
      });
      BB._lightsUBO = VB, BB._sceneBG = yB, dB && (BB._ob = [])
    }

    function IB(BB, TB) {
      for (const dB of BB) dB.update?.(TB)
    }

    function cB(BB, TB, dB) {
      let VB = null,
        yB = 0;
      for (const pB of TB) {
        const TB = pB.renderable.mesh;
        TB && !1 === TB.visible || (pB.pipeline !== VB && (BB.setPipeline(pB.pipeline), VB = pB.pipeline), yB += pB.draw(BB, dB))
      }
      return yB
    }

    function SB(BB) {
      const TB = BB._materialSwapQueue;
      if (!TB[0] || BB._runtimeBuilds?.w) return;
      let VB, yB, pB;
      const lB = BB._renderables;
      for (const dB of TB) {
        const TB = dB.material;
        if (!TB) continue;
        const JB = dB._runtimeThinBuild;
        if (JB) {
          yB = JB(BB, dB, yB);
          continue
        }
        const YB = BB._groups.get(TB._buildGroup),
          gB = YB?.r;
        if (!gB) {
          (pB ??= []).push(dB);
          continue
        }
        if (YB._w?.(dB)) {
          (pB ??= []).push([dB, TB]);
          continue
        }
        const oB = BB._meshDisposables.get(dB);
        oB && (BB._meshDisposables.delete(dB), (0, OB.b)(BB.surface.engine, (() => oB.forEach((BB => BB())))));
        const kB = YB.o;
        let LB;
        for (let BB = lB.length; BB--;) lB[BB].mesh === dB && (LB = lB.splice(BB, 1)[0]);
        TB._csmGen = -~TB._csmGen;
        const DB = gB(BB, dB);
        if (kB) {
          const BB = kB.indexOf(LB);
          BB < 0 ? kB.push(DB) : kB[BB] = DB
        }
        VB = lB.push(DB)
      }
      if (VB && (lB.sort(((BB, TB) => BB.order - TB.order)), BB._renderableVersion++, BB._materialEpoch++), TB.length = 0, !pB) return yB;
      const JB = pB;
      return dB.e(345).then((() => dB(59823))).then((TB => {
        let {
          C: dB
        } = TB;
        return dB(BB, JB, yB)
      }), (TB => {
        const dB = BB._runtimeBuilds;
        dB ? dB._x(TB) : console.error(TB)
      }))
    }
    var PB = null;

    function QB(BB, TB) {
      const dB = BB.engine,
        yB = {
          _kind: "Gu",
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
            dB.useFloatingOrigin && yB.camera && !yB.camera._useFloatingOrigin && (yB.camera._useFloatingOrigin = !0, yB.camera._viewVer = -1, yB.camera._vpVer = -1);
            const BB = yB.fixedDeltaMs > 0 ? yB.fixedDeltaMs : dB._currentDelta,
              TB = dB._currentEncoder;
            let VB = 0;
            for (const dB of yB._beforeRender) dB(BB);
            yB._materialSwapQueue.length && SB(yB);
            for (const pB of yB._prePasses) VB += pB.execute(TB, dB);
            for (const pB of yB._uniformUpdaters) pB.update(dB);
            yB._drawCallsPre = VB
          },
          _record: () => yB._frameGraph.execute(),
          _resize() {
            yB._frameGraph.build()
          }
        },
        lB = function() {
          const BB = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let TB = 0; TB < BB._tasks.length; TB++) pB(BB, BB._tasks[TB]);
              for (const TB of BB._tasks)
                for (const BB of TB._passes) BB._initialize()
            },
            execute() {
              let TB = 0;
              for (const dB of BB._tasks)
                if (!1 !== dB.executionEnabled)
                  if (dB.execute) TB += dB.execute();
                  else
                    for (const BB of dB._passes) TB += BB._execute();
              return TB
            },
            dispose() {
              for (const TB of BB._tasks) TB.dispose();
              BB._tasks.length = 0, BB._currentProcessedTask = null
            }
          };
          return BB
        }();
      if (yB._frameGraph = lB, !1 !== TB?.defaultRenderTask) {
        const TB = BB.msaaSamples > 1,
          pB = TB ? (0, VB.e)({
            lbl: "scene-color",
            format: BB.format,
            dFormat: "depth24plus-stencil8",
            samples: BB.msaaSamples,
            size: BB
          }) : BB.scRT,
          JB = TB ? void 0 : (0, VB.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: BB
          });
        ! function(BB, TB) {
          BB._tasks.push(TB)
        }(lB, zB({
          name: "Gu",
          rt: pB,
          rst: TB ? BB.scRT : void 0,
          depth: JB
        }, dB, yB))
      }
      return yB._disposables.push((() => lB.dispose())), yB
    }
    async function RB(BB) {
      const TB = BB;
      for (TB._built || (TB._materialSwapQueue.length = 0); TB._deferredBuilders.length;) {
        const BB = TB._deferredBuilders.splice(0);
        await Promise.all(BB.map((BB => BB())))
      }
      await SB(TB), PB?.get(TB)?.() || (TB._runtimeBuilds?._e(), TB._renderableVersion++, TB._built = !0), await (TB._rebuildHook?.(TB))
    }
    var aB = null;
    async function ZB(BB) {
      const TB = BB,
        VB = TB.surface;
      (0, yB.g)(VB, TB) || (await RB(BB), TB._renderables.sort(XB), await Promise.all(TB._frameGraph._tasks.map((BB => BB._preload?.()))), aB && await aB(TB), TB._frameGraph.build(), VB._renderingContexts[0] && (await dB.e(343).then((() => dB(59813)))).configureSwapchainOverlayScene(VB, TB), PB?.get(TB)?.() || (0, yB.h)(VB, TB))
    }
    var XB = (BB, TB) => BB.order - TB.order
  },
  40412: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      d: () => oB
    });
    var VB = dB(40369),
      yB = dB(40375),
      pB = dB(40377),
      lB = dB(40381),
      JB = dB(40385),
      YB = dB(40388);

    function gB(BB, TB, dB) {
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (TB < 1 || dB < 1) && (0, VB.c)(676, TB, dB);
      const gB = BB._device,
        oB = JB.mipMaps ?? !1,
        kB = JB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        LB = oB ? (0, YB.d)(TB, dB) : 1,
        OB = gB.createTexture({
          size: {
            width: TB,
            height: dB
          },
          format: kB,
          mipLevelCount: LB,
          usage: yB.g.TEXTURE_BINDING | yB.g.COPY_DST | yB.g.RENDER_ATTACHMENT
        }),
        DB = {
          addressModeU: JB.addressModeU ?? "clamp-to-edge",
          addressModeV: JB.addressModeV ?? "clamp-to-edge",
          minFilter: JB.minFilter ?? "linear",
          magFilter: JB.magFilter ?? "linear",
          mipmapFilter: oB ? "linear" : "nearest"
        },
        uB = (0, lB.d)(BB, DB),
        HB = {
          texture: OB,
          view: OB.createView(),
          sampler: uB,
          width: TB,
          height: dB
        };
      return (0, pB.d)(HB), BB._dlr && BB._dlr.t(HB, {
        kind: "dynamic",
        width: TB,
        height: dB,
        format: kB,
        levels: LB,
        samplerDesc: DB,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), HB
    }

    function oB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yB = VB.invertY ?? !0,
        pB = VB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: dB,
        flipY: yB
      }, {
        texture: TB.texture,
        premultipliedAlpha: pB
      }, [TB.width, TB.height]);
      const lB = TB._recoverySource;
      lB && "dynamic" === lB.kind && (lB.source = dB, lB.flipY = yB, lB.premultipliedAlpha = pB), TB.texture.mipLevelCount > 1 && (0, JB.generateMipmaps)(BB, TB.texture)
    }
  },
  40405: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB
    });
    var VB = dB(40369),
      yB = dB(40375),
      pB = dB(40377),
      lB = dB(40381),
      JB = dB(40388);
    async function YB(BB, TB) {
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [gB, oB] = function(BB) {
        const TB = BB,
          dB = [
            [TB.displayWidth, TB.displayHeight],
            [TB.videoWidth, TB.videoHeight],
            [TB.naturalWidth, TB.naturalHeight],
            [TB.width, TB.height]
          ];
        for (const [VB, yB] of dB)
          if (void 0 !== VB && void 0 !== yB && Number.isInteger(VB) && Number.isInteger(yB) && VB > 0 && yB > 0) return [VB, yB];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(TB), [kB, LB] = function(BB, TB, dB) {
        if (void 0 === dB) return [BB, TB];
        if (!Number.isInteger(dB) || dB < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${dB})`);
        if (Math.max(BB, TB) <= dB) return [BB, TB];
        const VB = dB / Math.max(BB, TB);
        return BB >= TB ? [dB, Math.max(1, Math.round(TB * VB))] : [Math.max(1, Math.round(BB * VB)), dB]
      }(gB, oB, YB.maxDimension), OB = YB.mipMaps ?? !0, DB = YB.premultiplyAlpha ?? !1;
      let uB = TB,
        HB = null;
      const EB = {
        texture: null
      };
      try {
        kB === gB && LB === oB || (HB = await createImageBitmap(TB, {
          resizeWidth: kB,
          resizeHeight: LB,
          resizeQuality: "high",
          premultiplyAlpha: DB ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), uB = HB);
        const vB = BB._device,
          mB = YB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          iB = OB ? (0, JB.d)(kB, LB) : 1,
          NB = iB > 1 ? (await Promise.resolve().then((() => dB(40385)))).generateMipmaps : null,
          tB = {
            addressModeU: YB.addressModeU ?? "repeat",
            addressModeV: YB.addressModeV ?? "repeat",
            minFilter: YB.minFilter ?? "linear",
            magFilter: YB.magFilter ?? "linear",
            mipmapFilter: OB ? "linear" : "nearest"
          };
        tB.maxAnisotropy = "linear" === tB.minFilter && "linear" === tB.magFilter && "linear" === tB.mipmapFilter ? 4 : 1;
        const fB = YB.invertY ?? !0,
          sB = async TB => {
            let dB;
            vB.pushErrorScope("validation"), vB.pushErrorScope("out-of-memory");
            let pB = null;
            try {
              const dB = EB.texture = vB.createTexture({
                size: {
                  width: kB,
                  height: LB
                },
                format: mB,
                mipLevelCount: iB,
                usage: yB.g.TEXTURE_BINDING | yB.g.COPY_DST | yB.g.RENDER_ATTACHMENT
              });
              vB.queue.copyExternalImageToTexture({
                source: TB,
                flipY: fB
              }, {
                texture: dB,
                premultipliedAlpha: DB
              }, {
                width: kB,
                height: LB
              }), NB && NB(BB, dB), pB = (0, lB.d)(BB, tB)
            } catch (OB) {
              dB = OB
            }
            const [JB, YB] = await Promise.all([vB.popErrorScope(), vB.popErrorScope()]);
            if (dB) throw dB;
            const gB = YB ?? JB;
            if (gB) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${gB.message}`, {
              cause: gB
            });
            const oB = EB.texture;
            return oB && pB || (0, VB.c)(677), {
              texture: oB,
              view: oB.createView(),
              sampler: pB,
              width: kB,
              height: LB
            }
          }, MB = await (BB._dlr?.x(uB, kB, LB, mB, iB, tB, fB, DB, sB)) ?? await sB(uB);
        return (0, pB.d)(MB), MB
      } catch (vB) {
        throw EB.texture?.destroy(), vB
      } finally {
        HB?.close()
      }
    }
  },
  40385: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      generateMipmaps: () => OB,
      recordMipmaps: () => DB
    });
    var VB = dB(40375),
      yB = dB(40381),
      pB = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var lB = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      JB = null,
      YB = null,
      gB = null,
      oB = null,
      kB = null;

    function LB(BB) {
      const TB = BB._device;
      TB !== kB && (JB?.clear(), JB = null, YB = null, gB = null, oB = null, kB = null, kB = TB), YB ??= TB.createShaderModule({
        code: lB
      }), gB ??= function(BB) {
        return (0, yB.d)(BB, pB)
      }(BB), oB ??= TB.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: VB.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: VB.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function OB(BB, TB, dB) {
      const VB = BB._device,
        yB = VB.createCommandEncoder();
      DB(BB, TB, yB, dB), VB.queue.submit([yB.finish()])
    }

    function DB(BB, TB, dB, VB) {
      if (TB.mipLevelCount <= 1) return;
      const yB = BB._device,
        pB = function(BB, TB) {
          const dB = BB._device;
          LB(BB), JB ??= new Map;
          let VB = JB.get(TB);
          return VB || (VB = dB.createRenderPipeline({
            layout: dB.createPipelineLayout({
              bindGroupLayouts: [oB]
            }),
            vertex: {
              module: YB,
              entryPoint: "vs"
            },
            fragment: {
              module: YB,
              entryPoint: "fs",
              targets: [{
                format: TB
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), JB.set(TB, VB)), VB
        }(BB, TB.format),
        lB = null != VB ? {
          dimension: "2d",
          baseArrayLayer: VB,
          arrayLayerCount: 1
        } : {};
      for (let JB = 1; JB < TB.mipLevelCount; JB++) {
        const BB = TB.createView({
            baseMipLevel: JB - 1,
            mipLevelCount: 1,
            ...lB
          }),
          VB = TB.createView({
            baseMipLevel: JB,
            mipLevelCount: 1,
            ...lB
          }),
          YB = yB.createBindGroup({
            layout: oB,
            entries: [{
              binding: 0,
              resource: BB
            }, {
              binding: 1,
              resource: gB
            }]
          }),
          kB = dB.beginRenderPass({
            colorAttachments: [{
              view: VB,
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
        kB.setPipeline(pB), kB.setBindGroup(0, YB), kB.draw(3), kB.end()
      }
    }
  },
  40388: (BB, TB, dB) => {
    function VB(BB, TB) {
      return Math.floor(Math.log2(Math.max(BB, TB))) + 1
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  40362: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      e: () => oB
    });
    var VB = dB(40369),
      yB = dB(40375),
      pB = dB(40377),
      lB = dB(40381),
      JB = dB(40385),
      YB = dB(40388);

    function gB(BB, TB, dB, JB) {
      let gB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (TB < 1 || dB < 1 || JB < 1) && (0, VB.c)(722, TB, dB, JB);
      const oB = BB._device,
        kB = gB.mipMaps ?? !0,
        LB = gB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        OB = oB.createTexture({
          size: {
            width: TB,
            height: dB,
            depthOrArrayLayers: JB
          },
          dimension: "2d",
          format: LB,
          mipLevelCount: kB ? (0, YB.d)(TB, dB) : 1,
          usage: yB.g.TEXTURE_BINDING | yB.g.COPY_DST | yB.g.RENDER_ATTACHMENT
        }),
        DB = (0, lB.d)(BB, {
          addressModeU: gB.addressModeU ?? "repeat",
          addressModeV: gB.addressModeV ?? "repeat",
          minFilter: gB.minFilter ?? "linear",
          magFilter: gB.magFilter ?? "linear",
          mipmapFilter: kB ? "linear" : "nearest"
        }),
        uB = {
          texture: OB,
          view: OB.createView({
            dimension: "2d-array"
          }),
          sampler: DB,
          width: TB,
          height: dB,
          layers: JB
        };
      return (0, pB.d)(uB), uB
    }

    function oB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (dB < 0 || dB >= TB.layers || (0 | dB) !== dB) && (0, VB.c)(723, TB.layers, dB);
      const lB = pB.invertY ?? !0,
        YB = pB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: yB,
        flipY: lB
      }, {
        texture: TB.texture,
        origin: [0, 0, dB],
        premultipliedAlpha: YB
      }, [TB.width, TB.height, 1]), TB.texture.mipLevelCount > 1 && (0, JB.generateMipmaps)(BB, TB.texture, dB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);