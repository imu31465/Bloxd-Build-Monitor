export const id = 309;
export const ids = [309];
export const modules = {
  41804: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(41795),
      nB = zB(41807);

    function dB(BB) {
      (0, nB.c)(BB), (0, QB.n)(BB);
      const jB = BB._surfaces;
      for (const zB of jB) zB._renderingContexts.length = 0, zB._ro?.disconnect(), zB._context.unconfigure();
      jB.length = 0;
      try {
        BB._disposeManagedResources?.(), BB._disposeStorageBuffers?.()
      } finally {
        BB._device.destroy()
      }
    }
  },
  41795: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      d: () => kB,
      f: () => sB,
      h: () => JB,
      j: () => gB,
      l: () => GB,
      n: () => LB
    });
    var QB = zB(41739);
    var nB = "Babylon Lite v1.32.0",
      dB = zB(41798);

    function IB(BB) {
      return "clientWidth" in BB
    }
    var NB = 1;

    function uB(BB, jB, zB) {
      const uB = jB.getContext("webgpu");
      uB || (0, QB.d)(54), IB(jB) && jB.setAttribute("data-engine", nB);
      const UB = zB?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        aB = zB?.srgb ? (pB = UB).endsWith("-srgb") ? pB : `${pB}-srgb` : UB;
      var pB;
      const rB = zB?.alphaMode ?? "opaque";
      uB.configure({
        device: BB._device,
        format: UB,
        alphaMode: rB,
        viewFormats: [aB]
      });
      const sB = 1 === zB?.msaaSamples ? 1 : 4,
        JB = (0, dB.b)({
          lbl: "swapchain",
          format: aB,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return JB._eager = !0, {
        engine: BB,
        canvas: jB,
        format: aB,
        msaaSamples: sB,
        scRT: JB,
        maxDevicePixelRatio: zB?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: NB++,
        _context: uB,
        _configureFormat: UB,
        _alphaMode: rB,
        _renderingContexts: []
      }
    }

    function UB(BB) {
      const jB = BB._context.getCurrentTexture(),
        zB = BB.scRT;
      zB._colorTexture = jB, zB._colorView = jB.createView({
        format: BB.format
      }), zB._width = jB.width, zB._height = jB.height
    }

    function aB(BB) {
      const jB = BB.canvas;
      if (!IB(jB)) return;
      const zB = BB._w ?? jB.clientWidth,
        QB = BB._h ?? jB.clientHeight;
      if (!(zB > 0 && QB > 0)) return;
      const nB = Math.min(globalThis.devicePixelRatio || 1, BB.maxDevicePixelRatio);
      pB(BB, zB * nB | 0, QB * nB | 0)
    }

    function pB(BB, jB, zB) {
      const QB = BB.canvas,
        nB = 0 | jB,
        dB = 0 | zB;
      if (nB > 0 && dB > 0 && (nB !== QB.width || dB !== QB.height)) {
        QB.width = nB, QB.height = dB, BB.scRT._width = nB, BB.scRT._height = dB;
        for (const jB of BB._renderingContexts) jB._resize?.()
      }
    }
    var rB = 0;

    function sB(BB, jB) {
      return -1 !== BB._renderingContexts.indexOf(jB)
    }

    function JB(BB, jB) {
      return -1 === BB._renderingContexts.indexOf(jB) && (BB._renderingContexts.push(jB), !0)
    }
    var mB = null;
    var yB = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function kB(BB, jB) {
      const dB = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...mB ? mB() : {}
      });
      dB || (0, QB.d)(47);
      const IB = mB?.deviceFeatures?.(dB, jB) ?? function(BB) {
          return yB.filter((jB => BB.features.has(jB)))
        }(dB),
        NB = await dB.requestDevice({
          requiredFeatures: IB,
          requiredLimits: jB?.requiredLimits
        });
      console.log(`${nB} - WebGPU engine`);
      const pB = !!jB?.useHighPrecisionMatrix,
        rB = !!jB?.useFloatingOrigin;
      if (rB && !pB && (0, QB.d)(48), pB) {
        const {
          allocateF64Mat4: BB
        } = await zB.e(361).then((() => zB(61509)));
        0
      }
      let sB, JB, kB, GB;
      if (rB) {
        const [{
          wrapRenderableForFO: BB,
          lightFoVersion: jB,
          applyLightFoOffset: QB
        }, {
          makePackMeshWorld: nB
        }] = await Promise.all([zB.e(362).then((() => zB(61513))), zB.e(363).then((() => zB(61516)))]);
        sB = BB, JB = nB, kB = jB, GB = QB
      }
      const LB = {
          _device: NB
        },
        gB = [LB];
      return Object.assign(LB, {
        engine: LB,
        surfaces: gB,
        _surfaces: gB,
        _device: NB,
        _options: jB,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: pB,
        useFloatingOrigin: rB,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: sB,
        _makePackMeshWorld: JB,
        _lightFoVersion: kB,
        _applyLightFoOffset: GB
      }, uB(LB, BB, jB)), aB(LB), UB(LB), LB
    }

    function GB(BB, jB, zB) {
      pB(BB, jB, zB)
    }

    function LB(BB) {
      BB._animFrameId && cancelAnimationFrame(BB._animFrameId), BB._animFrameId = 0, BB._renderFn = null, BB._flushGpuRetirements?.(BB)
    }

    function gB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.surfaces;
      if (zB !== BB.surfaces)
        for (let nB = zB.length; nB--;) zB[nB].engine !== BB && (0, QB.d)(49);
      tB(BB, jB, zB)
    }

    function tB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB._surfaces,
        QB = 0;
      for (let dB = zB.length; dB--;) QB += zB[dB]._renderingContexts.length;
      if (!QB) return BB.drawCallCount = 0, BB._flushGpuRetirements?.(BB);
      const nB = BB._device.createCommandEncoder({
        label: "frame"
      });
      BB._currentEncoder = nB, BB._currentDelta = jB;
      try {
        BB._gpuTimerBegin?.(nB), QB = 0;
        for (let BB = 0; BB < zB.length; BB++) {
          const jB = zB[BB];
          jB._capturePreFrame?.(jB), UB(jB);
          const nB = jB._renderingContexts;
          for (let BB = 0; BB < nB.length; BB++) {
            const jB = nB[BB];
            jB._update(), QB += jB._drawCallsPre + jB._record()
          }
        }
        const jB = BB._currentEncoder;
        for (let BB = 0; BB < zB.length; BB++) {
          const QB = zB[BB];
          QB._captureService?.(QB, jB)
        }
        BB._gpuTimerEnd?.(jB), BB._cbs[0] = jB.finish(), BB._device.queue.submit(BB._cbs), BB._flushGpuRetirements?.(BB), BB.drawCallCount = QB, BB._gpuTimerResolve?.()
      } finally {
        BB._currentEncoder = void 0
      }
    }
  },
  41743: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      d: () => dB,
      f: () => QB
    });
    var QB = globalThis.GPUTextureUsage,
      nB = globalThis.GPUBufferUsage,
      dB = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41807: (BB, jB, zB) => {
    function QB(BB) {
      nB(BB.splice(0))
    }

    function nB(BB) {
      for (const zB of BB) try {
        zB()
      } catch (jB) {
        console.error("GPU resource retirement failed.", jB)
      }
    }

    function dB(BB, jB) {
      BB._flushGpuRetirements ??= IB, (BB._retirements ??= []).push(jB)
    }

    function IB(BB) {
      const jB = BB._retirements;
      if (!jB) return;
      BB._retirements = null;
      const zB = BB._retiring ??= new Set;
      zB.add(jB), queueMicrotask((() => {
        BB._device.queue.onSubmittedWorkDone().then((() => {
          zB.delete(jB), QB(jB)
        })).catch((() => {}))
      }))
    }

    function NB(BB) {
      const jB = BB._retirements,
        zB = BB._retiring;
      BB._retirements = null, BB._retiring = null, jB && QB(jB), zB?.forEach(QB)
    }
    zB.d(jB, {
      c: () => NB,
      f: () => dB
    })
  },
  41798: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => IB,
      h: () => NB
    });
    var QB = zB(41743);

    function nB(BB) {
      const jB = BB.size;
      return "canvas" in jB ? jB.canvas : jB
    }

    function dB(BB) {
      return {
        _descriptor: BB,
        _resolveSize: nB,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function IB(BB, jB) {
      if (BB._eager) return void BB._syncEager?.(jB);
      NB(BB);
      const zB = BB._descriptor,
        {
          width: dB,
          height: IB
        } = (BB._resolveSize ?? nB)(zB);
      BB._width = dB, BB._height = IB;
      const uB = jB._device;
      zB.format && (BB._colorTexture = uB.createTexture({
        label: zB.lbl,
        size: {
          width: dB,
          height: IB
        },
        format: zB.format,
        sampleCount: zB.samples,
        usage: QB.f.RENDER_ATTACHMENT | QB.f.TEXTURE_BINDING | QB.f.COPY_SRC | QB.f.COPY_DST
      }), BB._colorView = BB._colorTexture.createView()), zB.dFormat && (BB._depthTexture = uB.createTexture({
        label: zB.lbl,
        size: {
          width: dB,
          height: IB
        },
        format: zB.dFormat,
        sampleCount: zB.samples,
        usage: QB.f.RENDER_ATTACHMENT | QB.f.TEXTURE_BINDING
      }), BB._depthView = BB._depthTexture.createView())
    }

    function NB(BB) {
      if (!BB || BB._eager && !BB._disposeAttachments) return;
      const jB = BB._colorTexture,
        zB = BB._depthTexture;
      if (BB._colorTexture = BB._depthTexture = null, BB._colorView = BB._depthView = null, BB._width = BB._height = 0, BB._disposeAttachments) BB._disposeAttachments(jB, zB);
      else try {
        jB?.destroy()
      } finally {
        !1 !== BB._ownsDepthTexture && zB?.destroy()
      }
    }
  },
  41817: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      d: () => nB,
      h: () => dB
    });
    var QB = Float32Array,
      nB = Float64Array,
      dB = Uint32Array
  },
  41821: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    var QB = 16
  },
  41739: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = null;

    function nB(BB) {
      for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), nB = 1; nB < jB; nB++) zB[nB - 1] = arguments[nB];
      const dB = new Error(QB?.(BB, zB) ?? `#${BB}`);
      throw dB.lite = zB, dB
    }
  },
  41775: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(41756);

    function nB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zB = jB.compare,
        nB = jB.lodMinClamp ?? 0,
        dB = jB.lodMaxClamp ?? 32,
        IB = void 0 !== zB || 0 !== nB || 32 !== dB ? `${zB??""}:${nB}:${dB}` : "";
      return (0, QB.c)(BB, jB, IB)
    }
  },
  41750: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = null;

    function nB(BB) {
      const jB = QB ??= new WeakMap;
      jB.set(BB, (jB.get(BB) ?? 0) + 1)
    }

    function dB(BB) {
      nB(BB.texture)
    }
  },
  41756: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = null,
      nB = "nearest",
      dB = "clamp-to-edge",
      IB = {
        minFilter: nB,
        magFilter: nB,
        mipmapFilter: nB,
        addressModeU: dB,
        addressModeV: dB,
        addressModeW: dB,
        maxAnisotropy: 1
      };

    function NB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const nB = BB._device,
        dB = QB ??= new WeakMap;
      let NB = dB.get(nB);
      NB || dB.set(nB, NB = new Map);
      let uB = zB;
      for (const QB in IB) {
        const BB = QB;
        uB += `:${jB[BB]??IB[BB]}`
      }
      let UB = NB.get(uB);
      return UB || NB.set(uB, UB = nB.createSampler(jB)), UB
    }
  },
  41815: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => ZB,
      g: () => PB
    });
    var QB = zB(41798),
      nB = zB(41795);

    function dB(BB, jB) {
      jB._passes.length = 0, BB._currentProcessedTask = jB;
      try {
        jB.record()
      } finally {
        BB._currentProcessedTask = null
      }
    }
    var IB = zB(41817);

    function NB(BB) {
      const jB = BB.worldMatrixVersion;
      if (BB._viewVer === jB) return BB._viewCache;
      const zB = BB._viewCache,
        QB = BB.worldMatrix,
        nB = BB._useFloatingOrigin,
        dB = nB ? 0 : QB[12],
        IB = nB ? 0 : QB[13],
        NB = nB ? 0 : QB[14];
      return zB[0] = QB[0], zB[1] = QB[4], zB[2] = QB[8], zB[3] = 0, zB[4] = QB[1], zB[5] = QB[5], zB[6] = QB[9], zB[7] = 0, zB[8] = QB[2], zB[9] = QB[6], zB[10] = QB[10], zB[11] = 0, zB[12] = -(QB[0] * dB + QB[1] * IB + QB[2] * NB), zB[13] = -(QB[4] * dB + QB[5] * IB + QB[6] * NB), zB[14] = -(QB[8] * dB + QB[9] * IB + QB[10] * NB), zB[15] = 1, BB._viewVer = jB, zB
    }
    var uB = null;

    function UB(BB) {
      return BB._projFov === BB.fov && BB._projNear === BB.nearPlane && BB._projFar === BB.farPlane || (BB._projFov = BB.fov, BB._projNear = BB.nearPlane, BB._projFar = BB.farPlane, BB._projRev = (BB._projRev ?? 0) + 1), BB.worldMatrixVersion + (BB._projRev ?? 0)
    }

    function aB(BB, jB) {
      const zB = UB(BB);
      if (BB._projVer === zB && BB._projAspect === jB) return BB._projCache;
      const QB = BB._projCache;
      return null !== uB && BB.ortho ? uB(BB, jB, QB) : function(BB, jB, zB, QB, nB) {
        const dB = 1 / Math.tan(.5 * jB),
          IB = nB - QB;
        BB[0] = dB / zB, BB[5] = dB, BB[10] = -QB / IB, BB[11] = 1, BB[14] = nB * QB / IB
      }(QB, BB.fov, jB, BB.nearPlane, BB.farPlane), BB._projVer = zB, BB._projAspect = jB, QB
    }
    var pB = zB(41743);

    function rB(BB, jB, zB) {
      return BB._device.createBuffer({
        label: zB,
        size: (QB = jB, nB = 16, Math.ceil(QB / nB) * nB),
        usage: pB.c.UNIFORM | pB.c.COPY_DST
      });
      var QB, nB
    }
    var sB = zB(41807),
      JB = null;

    function mB(BB) {
      const jB = BB._device,
        zB = JB ??= new WeakMap;
      let QB = zB.get(jB);
      return QB || (QB = jB.createBindGroupLayout({
        label: "ny",
        entries: [{
          binding: 0,
          visibility: pB.d.VERTEX | pB.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: pB.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), zB.set(jB, QB)), QB
    }

    function yB(BB, jB, zB) {
      const QB = BB._device,
        nB = rB(BB, jB.byteLength, zB);
      try {
        QB.queue.writeBuffer(nB, 0, jB.buffer, jB.byteOffset, jB.byteLength)
      } catch (dB) {
        throw nB.destroy(), dB
      }
      return nB
    }
    var kB = zB(41821),
      GB = new IB.h(1),
      LB = new IB.c(GB.buffer);

    function gB(BB) {
      let jB = 0;
      for (const zB of BB) jB += zB._lightVersion ?? 0;
      return jB
    }

    function tB(BB, jB) {
      BB.fill(0);
      let zB = 0;
      for (const QB of jB) {
        if (zB >= kB.b) break;
        QB._writeLightUbo && (QB._writeLightUbo(BB, 4 + 16 * zB), zB++)
      }
      GB[0] = zB, BB[0] = LB[0]
    }

    function SB(BB, jB) {
      let zB = jB._lightGpuState;
      const QB = 16 + 16 * kB.b * 4;
      if (zB && zB._byteSize === QB) return zB;
      const nB = !zB;
      zB?._buffer.destroy();
      const dB = new IB.c(QB / 4);
      return tB(dB, jB.lights), BB._applyLightFoOffset?.(dB, jB), zB = {
        _buffer: yB(BB, dB),
        _scratch: dB,
        sA: gB(jB.lights) + (BB._lightFoVersion?.(jB) ?? 0),
        _listVersion: jB._lightListVersion ?? 0,
        _lightCount: jB.lights.length,
        _byteSize: QB
      }, jB._lightGpuState = zB, nB && jB._disposables.push((() => {
        jB._lightGpuState?._buffer.destroy(), jB._lightGpuState = void 0
      })), zB
    }

    function MB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const nB = jB;
      if (0 === QB && 16 === nB.length) return void BB.set(nB, zB);
      const dB = QB,
        IB = zB;
      BB[IB + 0] = nB[dB + 0], BB[IB + 1] = nB[dB + 1], BB[IB + 2] = nB[dB + 2], BB[IB + 3] = nB[dB + 3], BB[IB + 4] = nB[dB + 4], BB[IB + 5] = nB[dB + 5], BB[IB + 6] = nB[dB + 6], BB[IB + 7] = nB[dB + 7], BB[IB + 8] = nB[dB + 8], BB[IB + 9] = nB[dB + 9], BB[IB + 10] = nB[dB + 10], BB[IB + 11] = nB[dB + 11], BB[IB + 12] = nB[dB + 12], BB[IB + 13] = nB[dB + 13], BB[IB + 14] = nB[dB + 14], BB[IB + 15] = nB[dB + 15]
    }

    function EB(BB, jB, zB, QB, nB) {
      BB.fill(0);
      const dB = function(BB, jB) {
          const zB = UB(BB);
          if (BB._vpVer === zB && BB._vpAspect === jB) return BB._vpCache;
          const QB = BB._vpCache;
          return function(BB, jB, zB, QB, nB, dB) {
            const IB = zB[QB],
              NB = zB[QB + 1],
              uB = zB[QB + 2],
              UB = zB[QB + 3],
              aB = zB[QB + 4],
              pB = zB[QB + 5],
              rB = zB[QB + 6],
              sB = zB[QB + 7],
              JB = zB[QB + 8],
              mB = zB[QB + 9],
              yB = zB[QB + 10],
              kB = zB[QB + 11],
              GB = zB[QB + 12],
              LB = zB[QB + 13],
              gB = zB[QB + 14],
              tB = zB[QB + 15];
            let SB = nB[dB],
              MB = nB[dB + 1],
              EB = nB[dB + 2],
              iB = nB[dB + 3];
            BB[jB] = IB * SB + aB * MB + JB * EB + GB * iB, BB[jB + 1] = NB * SB + pB * MB + mB * EB + LB * iB, BB[jB + 2] = uB * SB + rB * MB + yB * EB + gB * iB, BB[jB + 3] = UB * SB + sB * MB + kB * EB + tB * iB, SB = nB[dB + 4], MB = nB[dB + 5], EB = nB[dB + 6], iB = nB[dB + 7], BB[jB + 4] = IB * SB + aB * MB + JB * EB + GB * iB, BB[jB + 5] = NB * SB + pB * MB + mB * EB + LB * iB, BB[jB + 6] = uB * SB + rB * MB + yB * EB + gB * iB, BB[jB + 7] = UB * SB + sB * MB + kB * EB + tB * iB, SB = nB[dB + 8], MB = nB[dB + 9], EB = nB[dB + 10], iB = nB[dB + 11], BB[jB + 8] = IB * SB + aB * MB + JB * EB + GB * iB, BB[jB + 9] = NB * SB + pB * MB + mB * EB + LB * iB, BB[jB + 10] = uB * SB + rB * MB + yB * EB + gB * iB, BB[jB + 11] = UB * SB + sB * MB + kB * EB + tB * iB, SB = nB[dB + 12], MB = nB[dB + 13], EB = nB[dB + 14], iB = nB[dB + 15], BB[jB + 12] = IB * SB + aB * MB + JB * EB + GB * iB, BB[jB + 13] = NB * SB + pB * MB + mB * EB + LB * iB, BB[jB + 14] = uB * SB + rB * MB + yB * EB + gB * iB, BB[jB + 15] = UB * SB + sB * MB + kB * EB + tB * iB
          }(QB, 0, aB(BB, jB), 0, NB(BB), 0), BB._vpVer = zB, BB._vpAspect = jB, QB
        }(QB, nB),
        IB = NB(QB),
        uB = QB.worldMatrix;
      MB(BB, dB, 0), MB(BB, IB, 16), jB.useFloatingOrigin ? (BB[32] = 0, BB[33] = 0, BB[34] = 0) : (BB[32] = uB[12], BB[33] = uB[13], BB[34] = uB[14]), BB[87] = jB.canvas.width;
      const pB = zB.imageProcessing;
      BB[76] = pB.exposure, BB[77] = pB.contrast, BB[78] = zB._envTextures?.lodGenerationScale ?? .8, BB[79] = +pB.toneMappingEnabled, BB[37] = jB.canvas.height
    }

    function iB(BB, jB) {
      return {
        _renderables: BB,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: jB
      }
    }

    function qB(BB, jB, zB) {
      BB.clr ??= !0;
      const nB = BB.rt._descriptor,
        dB = BB.depth?._descriptor,
        uB = {
          _colorFormat: nB.format,
          _depthStencilFormat: dB?.dFormat ?? nB.dFormat,
          _depthCompare: nB.depthCompare ?? dB?.depthCompare,
          _sampleCount: nB.samples
        },
        aB = {
          loadOp: "clear",
          storeOp: "store"
        },
        pB = {
          ...iB([], -1),
          name: BB.name,
          _config: BB,
          _ownsTargets: !BB.sharedRt,
          engine: jB,
          ny: zB,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [aB]
          },
          _colorAttachment: aB,
          _sceneUBO: rB(jB, 368),
          _suData: new IB.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: uB,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (pB._disposed) throw new Error("RenderTask has been disposed.");
            pB._recordExplicit ? pB._recordExplicit(pB, !0) : HB(pB, !1 !== BB.autoMirror ? zB._renderables.slice() : pB._renderables, !0)
          },
          execute: () => function(BB, jB, zB) {
            if (!1 === BB.enabled) return 0;
            const QB = BB.ny;
            ! function(BB, jB, zB) {
              const QB = BB.ny;
              !1 !== BB._config.autoMirror && BB._lastVersion !== QB._renderableVersion && HB(BB, QB._renderables.slice());
              FB(BB, jB);
              const nB = BB._updateContext,
                dB = BB._config.cam ?? QB.camera;
              zB._colorFormat && (BB._config._skipClusteredLights || QB._clusteredLightUpdater?.(dB, nB.targetWidth, nB.targetHeight), function(BB, jB) {
                const zB = SB(BB, jB),
                  QB = gB(jB.lights) + (BB._lightFoVersion?.(jB) ?? 0),
                  nB = jB._lightListVersion ?? 0;
                QB === zB.sA && nB === zB._listVersion && jB.lights.length === zB._lightCount || (zB.sA = QB, zB._listVersion = nB, zB._lightCount = jB.lights.length, tB(zB._scratch, jB.lights), BB._applyLightFoOffset?.(zB._scratch, jB), BB._device.queue.writeBuffer(zB._buffer, 0, zB._scratch)), zB._buffer
              }(jB, QB));
              (function(BB, jB, zB, QB) {
                if (!QB) return;
                const nB = QB.viewport,
                  dB = BB._config.rt,
                  IB = (BB._config.cs ? jB.canvas.width / jB.canvas.height : dB._width / dB._height) * (nB ? nB.width / nB.height : 1),
                  NB = zB.fog,
                  uB = zB.imageProcessing,
                  aB = UB(QB),
                  pB = zB._envTextures,
                  rB = BB._sceneUboCacheKey;
                if (rB[0] === QB && rB[1] === NB && rB[2] === aB && rB[3] === IB && rB[4] === uB.exposure && rB[5] === uB.contrast && rB[6] === pB) return;
                rB[0] = QB, rB[1] = NB, rB[2] = aB, rB[3] = IB, rB[4] = uB.exposure, rB[5] = uB.contrast, rB[6] = pB;
                const sB = BB._suData;
                EB(sB, jB, zB, QB, IB);
                const JB = zB._sceneUboContributors;
                if (JB)
                  for (const UB of JB) UB(sB, zB);
                jB._device.queue.writeBuffer(BB._sceneUBO, 0, sB)
              })(BB, jB, QB, dB), nB.ZC = dB, BB._batchState?._reset(), YB(BB._opaqueBindings, nB), YB(BB._directBindings, nB), YB(BB._transparentBindings, nB), BB._batchState?._flush(jB),
                function(BB, jB) {
                  const zB = BB._transparentBindings;
                  if (zB.length <= 1 || !jB) return;
                  const QB = NB(jB);
                  for (const nB of zB) {
                    const BB = nB.renderable._worldCenter;
                    nB._sortDistance = BB ? BB[0] * QB[2] + BB[1] * QB[6] + BB[2] * QB[10] + QB[14] : 0
                  }
                  zB.sort(fB)
                }(BB, dB)
            }(BB, jB, zB);
            const nB = BB._colorAttachment,
              dB = BB._config;
            dB.rt._colorView && (dB.rt === QB.surface.scRT && (nB.view = dB.rt._colorView), nB.resolveTarget = dB.rst?._colorView ?? void 0, nB.clearValue = dB.clrColor ?? QB.clearColor, nB.loadOp = dB.clr ? "clear" : "load");
            if (BB._executeWithTransmission) return BB._executeWithTransmission(zB._sampleCount);
            const IB = jB._currentEncoder.beginRenderPass(BB._renderPassDescriptor),
              uB = DB(BB, IB);
            return IB.end(), uB
          }(pB, jB, uB),
          dispose() {
            if (pB._disposed) return;
            pB._disposed = !0;
            const jB = pB._pendingMeshes;
            jB && (jB.length = 0);
            for (const BB of pB._renderables) pB._retireRenderable?.(pB.engine, BB);
            pB._passes.length = pB._opaqueBindings.length = pB._directBindings.length = 0, pB._transparentBindings.length = pB._renderables.length = pB._ob.length = 0, pB._ownsTargets && ((0, QB.h)(BB.rt), (0, QB.h)(BB.rst)), BB.depth?._eager || (0, QB.h)(BB.depth);
            const zB = pB._sceneUBO;
            (0, sB.f)(pB.engine, (() => zB.destroy())), pB._batchState?._release(pB.engine), pB._batchState = void 0
          }
        };
      return pB
    }

    function fB(BB, jB) {
      return jB._sortDistance - BB._sortDistance || BB.renderable.order - jB.renderable.order
    }

    function oB(BB, jB) {
      return BB.renderable.order - jB.renderable.order
    }

    function HB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB._renderables,
        zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        nB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        dB = arguments.length > 4 ? arguments[4] : void 0;
      const IB = BB._config,
        NB = IB.rt,
        uB = BB._batchState,
        UB = iB(jB, BB.ny._renderableVersion);
      if (zB) {
        const jB = (jB, zB) => {
          jB && (zB || BB._ownsTargets || jB._eager) && (0, QB.d)(jB, BB.engine)
        };
        jB(NB), NB._descriptor.samples > 1 && jB(IB.rst), jB(IB.depth, !0)
      }
      const {
        _opaqueBindings: aB,
        _directBindings: pB,
        _transparentBindings: rB
      } = UB;
      try {
        for (const zB of jB) {
          const jB = zB.bind(BB.engine, BB._targetSignature);
          UB._batchState = BB._targetSignature._collectBatches?.(UB._batchState, jB), zB.isTransparent || zB._transmissive ? rB.push(jB) : zB._direct ? pB.push(jB) : aB.push(jB)
        }
        aB.sort(oB), pB.sort(oB), zB && FB(BB, BB.engine, !1)
      } catch (sB) {
        throw UB._batchState?._release(void 0, dB ?? [uB]), sB
      }
      return zB && (! function(BB, jB) {
        const zB = BB._config,
          QB = BB._colorAttachment;
        QB.view = jB._colorView, BB._renderPassDescriptor.colorAttachments = jB._colorView ? [QB] : [];
        const nB = zB.depth ?? jB,
          dB = nB._depthView;
        let IB;
        if (dB) {
          const BB = nB._descriptor,
            jB = (zB.depth ? nB._eager : !1 === zB.depthClear) ? "load" : "clear";
          IB = {
            view: dB,
            depthClearValue: BB.depthClearValue ?? 0,
            depthLoadOp: jB,
            depthStoreOp: "store"
          }, BB.dFormat?.includes("stencil") && (IB.stencilClearValue = 0, IB.stencilLoadOp = jB, IB.stencilStoreOp = "store")
        }
        BB._renderPassDescriptor.depthStencilAttachment = IB
      }(BB, NB), BB._updateContext.targetWidth = NB._width, BB._updateContext.targetHeight = NB._height), nB && (Object.assign(BB, UB), uB?._release(BB.engine, [UB._batchState])), UB
    }

    function DB(BB, jB) {
      const zB = BB.engine,
        QB = BB._config,
        dB = QB.rt,
        IB = BB.ny,
        NB = BB._opaqueBindings,
        uB = BB._ob,
        UB = BB._sceneBG;
      if (function(BB, jB, zB, QB) {
          const nB = jB?.viewport;
          if (!nB) return;
          const dB = Math.floor(nB.x * zB),
            IB = Math.floor((1 - nB.y - nB.height) * QB),
            NB = Math.ceil((nB.x + nB.width) * zB) - dB,
            uB = Math.ceil((1 - nB.y) * QB) - IB;
          BB.setViewport(dB, IB, NB, uB, 0, 1), BB.setScissorRect(dB, IB, NB, uB)
        }(jB, QB.cam ?? IB.camera, dB._width, dB._height), jB.setBindGroup(0, UB), BB._lastVis !== nB.c || !uB.length) {
        const jB = dB._descriptor,
          QB = zB._device.createRenderBundleEncoder({
            colorFormats: jB.format ? [jB.format] : [],
            depthStencilFormat: BB._targetSignature._depthStencilFormat,
            sampleCount: jB.samples
          });
        QB.setBindGroup(0, UB), VB(QB, NB, zB), uB[0] = QB.finish(), BB._lastVis = nB.c
      }
      let aB = NB.length;
      return jB.executeBundles(uB), jB.setBindGroup(0, UB), aB += VB(jB, BB._directBindings, zB), aB += VB(jB, BB._transparentBindings, zB), aB
    }

    function FB(BB, jB) {
      let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const QB = SB(jB, BB.ny)._buffer;
      if (QB === BB._lightsUBO) return;
      const nB = jB._device.createBindGroup({
        layout: mB(jB),
        entries: [{
          binding: 0,
          resource: {
            buffer: BB._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: QB
          }
        }]
      });
      BB._lightsUBO = QB, BB._sceneBG = nB, zB && (BB._ob = [])
    }

    function YB(BB, jB) {
      for (const zB of BB) zB.update?.(jB)
    }

    function VB(BB, jB, zB) {
      let QB = null,
        nB = 0;
      for (const dB of jB) {
        const jB = dB.renderable.mesh;
        jB && !1 === jB.visible || (dB.pipeline !== QB && (BB.setPipeline(dB.pipeline), QB = dB.pipeline), nB += dB.draw(BB, zB))
      }
      return nB
    }

    function hB(BB) {
      const jB = BB._materialSwapQueue;
      if (!jB[0] || BB._runtimeBuilds?.w) return;
      let QB, nB, dB;
      const IB = BB._renderables;
      for (const zB of jB) {
        const jB = zB.material;
        if (!jB) continue;
        const NB = zB._runtimeThinBuild;
        if (NB) {
          nB = NB(BB, zB, nB);
          continue
        }
        const uB = BB._groups.get(jB._buildGroup),
          UB = uB?.r;
        if (!UB) {
          (dB ??= []).push(zB);
          continue
        }
        if (uB._w?.(zB)) {
          (dB ??= []).push([zB, jB]);
          continue
        }
        const aB = BB._meshDisposables.get(zB);
        aB && (BB._meshDisposables.delete(zB), (0, sB.f)(BB.surface.engine, (() => aB.forEach((BB => BB())))));
        const pB = uB.o;
        let rB;
        for (let BB = IB.length; BB--;) IB[BB].mesh === zB && (rB = IB.splice(BB, 1)[0]);
        jB._csmGen = -~jB._csmGen;
        const JB = UB(BB, zB);
        if (pB) {
          const BB = pB.indexOf(rB);
          BB < 0 ? pB.push(JB) : pB[BB] = JB
        }
        QB = IB.push(JB)
      }
      if (QB && (IB.sort(((BB, jB) => BB.order - jB.order)), BB._renderableVersion++, BB._materialEpoch++), jB.length = 0, !dB) return nB;
      const NB = dB;
      return zB.e(367).then((() => zB(61536))).then((jB => {
        let {
          C: zB
        } = jB;
        return zB(BB, NB, nB)
      }), (jB => {
        const zB = BB._runtimeBuilds;
        zB ? zB._x(jB) : console.error(jB)
      }))
    }
    var XB = null;

    function ZB(BB, jB) {
      const zB = BB.engine,
        nB = {
          _kind: "ny",
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
            zB.useFloatingOrigin && nB.camera && !nB.camera._useFloatingOrigin && (nB.camera._useFloatingOrigin = !0, nB.camera._viewVer = -1, nB.camera._vpVer = -1);
            const BB = nB.fixedDeltaMs > 0 ? nB.fixedDeltaMs : zB._currentDelta,
              jB = zB._currentEncoder;
            let QB = 0;
            for (const zB of nB._beforeRender) zB(BB);
            nB._materialSwapQueue.length && hB(nB);
            for (const dB of nB._prePasses) QB += dB.execute(jB, zB);
            for (const dB of nB._uniformUpdaters) dB.update(zB);
            nB._drawCallsPre = QB
          },
          _record: () => nB._frameGraph.execute(),
          _resize() {
            nB._frameGraph.build()
          }
        },
        IB = function() {
          const BB = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let jB = 0; jB < BB._tasks.length; jB++) dB(BB, BB._tasks[jB]);
              for (const jB of BB._tasks)
                for (const BB of jB._passes) BB._initialize()
            },
            execute() {
              let jB = 0;
              for (const zB of BB._tasks)
                if (!1 !== zB.executionEnabled)
                  if (zB.execute) jB += zB.execute();
                  else
                    for (const BB of zB._passes) jB += BB._execute();
              return jB
            },
            dispose() {
              for (const jB of BB._tasks) jB.dispose();
              BB._tasks.length = 0, BB._currentProcessedTask = null
            }
          };
          return BB
        }();
      if (nB._frameGraph = IB, !1 !== jB?.defaultRenderTask) {
        const jB = BB.msaaSamples > 1,
          dB = jB ? (0, QB.b)({
            lbl: "scene-color",
            format: BB.format,
            dFormat: "depth24plus-stencil8",
            samples: BB.msaaSamples,
            size: BB
          }) : BB.scRT,
          NB = jB ? void 0 : (0, QB.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: BB
          });
        ! function(BB, jB) {
          BB._tasks.push(jB)
        }(IB, qB({
          name: "ny",
          rt: dB,
          rst: jB ? BB.scRT : void 0,
          depth: NB
        }, zB, nB))
      }
      return nB._disposables.push((() => IB.dispose())), nB
    }
    async function AB(BB) {
      const jB = BB;
      for (jB._built || (jB._materialSwapQueue.length = 0); jB._deferredBuilders.length;) {
        const BB = jB._deferredBuilders.splice(0);
        await Promise.all(BB.map((BB => BB())))
      }
      await hB(jB), XB?.get(jB)?.() || (jB._runtimeBuilds?._e(), jB._renderableVersion++, jB._built = !0), await (jB._rebuildHook?.(jB))
    }
    var TB = null;
    async function PB(BB) {
      const jB = BB,
        QB = jB.surface;
      (0, nB.f)(QB, jB) || (await AB(BB), jB._renderables.sort(WB), await Promise.all(jB._frameGraph._tasks.map((BB => BB._preload?.()))), TB && await TB(jB), jB._frameGraph.build(), QB._renderingContexts[0] && (await zB.e(365).then((() => zB(61520)))).configureSwapchainOverlayScene(QB, jB), XB?.get(jB)?.() || (0, nB.h)(QB, jB))
    }
    var WB = (BB, jB) => BB.order - jB.order
  },
  41787: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      g: () => aB
    });
    var QB = zB(41739),
      nB = zB(41743),
      dB = zB(41750),
      IB = zB(41756),
      NB = zB(41765),
      uB = zB(41767);

    function UB(BB, jB, zB) {
      let NB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (jB < 1 || zB < 1) && (0, QB.d)(676, jB, zB);
      const UB = BB._device,
        aB = NB.mipMaps ?? !1,
        pB = NB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        rB = aB ? (0, uB.c)(jB, zB) : 1,
        sB = UB.createTexture({
          size: {
            width: jB,
            height: zB
          },
          format: pB,
          mipLevelCount: rB,
          usage: nB.f.TEXTURE_BINDING | nB.f.COPY_DST | nB.f.RENDER_ATTACHMENT
        }),
        JB = {
          addressModeU: NB.addressModeU ?? "clamp-to-edge",
          addressModeV: NB.addressModeV ?? "clamp-to-edge",
          minFilter: NB.minFilter ?? "linear",
          magFilter: NB.magFilter ?? "linear",
          mipmapFilter: aB ? "linear" : "nearest"
        },
        mB = (0, IB.c)(BB, JB),
        yB = {
          texture: sB,
          view: sB.createView(),
          sampler: mB,
          width: jB,
          height: zB
        };
      return (0, dB.e)(yB), BB._dlr && BB._dlr.t(yB, {
        kind: "dynamic",
        width: jB,
        height: zB,
        format: pB,
        levels: rB,
        samplerDesc: JB,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), yB
    }

    function aB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const nB = QB.invertY ?? !0,
        dB = QB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: zB,
        flipY: nB
      }, {
        texture: jB.texture,
        premultipliedAlpha: dB
      }, [jB.width, jB.height]);
      const IB = jB._recoverySource;
      IB && "dynamic" === IB.kind && (IB.source = zB, IB.flipY = nB, IB.premultipliedAlpha = dB), jB.texture.mipLevelCount > 1 && (0, NB.generateMipmaps)(BB, jB.texture)
    }
  },
  41782: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB
    });
    var QB = zB(41739),
      nB = zB(41743),
      dB = zB(41750),
      IB = zB(41756),
      NB = zB(41767);
    async function uB(BB, jB) {
      let uB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [UB, aB] = function(BB) {
        const jB = BB,
          zB = [
            [jB.displayWidth, jB.displayHeight],
            [jB.videoWidth, jB.videoHeight],
            [jB.naturalWidth, jB.naturalHeight],
            [jB.width, jB.height]
          ];
        for (const [QB, nB] of zB)
          if (void 0 !== QB && void 0 !== nB && Number.isInteger(QB) && Number.isInteger(nB) && QB > 0 && nB > 0) return [QB, nB];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(jB), [pB, rB] = function(BB, jB, zB) {
        if (void 0 === zB) return [BB, jB];
        if (!Number.isInteger(zB) || zB < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${zB})`);
        if (Math.max(BB, jB) <= zB) return [BB, jB];
        const QB = zB / Math.max(BB, jB);
        return BB >= jB ? [zB, Math.max(1, Math.round(jB * QB))] : [Math.max(1, Math.round(BB * QB)), zB]
      }(UB, aB, uB.maxDimension), sB = uB.mipMaps ?? !0, JB = uB.premultiplyAlpha ?? !1;
      let mB = jB,
        yB = null;
      const kB = {
        texture: null
      };
      try {
        pB === UB && rB === aB || (yB = await createImageBitmap(jB, {
          resizeWidth: pB,
          resizeHeight: rB,
          resizeQuality: "high",
          premultiplyAlpha: JB ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), mB = yB);
        const GB = BB._device,
          LB = uB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          gB = sB ? (0, NB.c)(pB, rB) : 1,
          tB = gB > 1 ? (await Promise.resolve().then((() => zB(41765)))).generateMipmaps : null,
          SB = {
            addressModeU: uB.addressModeU ?? "repeat",
            addressModeV: uB.addressModeV ?? "repeat",
            minFilter: uB.minFilter ?? "linear",
            magFilter: uB.magFilter ?? "linear",
            mipmapFilter: sB ? "linear" : "nearest"
          };
        SB.maxAnisotropy = "linear" === SB.minFilter && "linear" === SB.magFilter && "linear" === SB.mipmapFilter ? 4 : 1;
        const MB = uB.invertY ?? !0,
          EB = async jB => {
            let zB;
            GB.pushErrorScope("validation"), GB.pushErrorScope("out-of-memory");
            let dB = null;
            try {
              const zB = kB.texture = GB.createTexture({
                size: {
                  width: pB,
                  height: rB
                },
                format: LB,
                mipLevelCount: gB,
                usage: nB.f.TEXTURE_BINDING | nB.f.COPY_DST | nB.f.RENDER_ATTACHMENT
              });
              GB.queue.copyExternalImageToTexture({
                source: jB,
                flipY: MB
              }, {
                texture: zB,
                premultipliedAlpha: JB
              }, {
                width: pB,
                height: rB
              }), tB && tB(BB, zB), dB = (0, IB.c)(BB, SB)
            } catch (sB) {
              zB = sB
            }
            const [NB, uB] = await Promise.all([GB.popErrorScope(), GB.popErrorScope()]);
            if (zB) throw zB;
            const UB = uB ?? NB;
            if (UB) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${UB.message}`, {
              cause: UB
            });
            const aB = kB.texture;
            return aB && dB || (0, QB.d)(677), {
              texture: aB,
              view: aB.createView(),
              sampler: dB,
              width: pB,
              height: rB
            }
          }, iB = await (BB._dlr?.x(mB, pB, rB, LB, gB, SB, MB, JB, EB)) ?? await EB(mB);
        return (0, dB.e)(iB), iB
      } catch (GB) {
        throw kB.texture?.destroy(), GB
      } finally {
        yB?.close()
      }
    }
  },
  41765: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      generateMipmaps: () => sB,
      recordMipmaps: () => JB
    });
    var QB = zB(41743),
      nB = zB(41756),
      dB = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var IB = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      NB = null,
      uB = null,
      UB = null,
      aB = null,
      pB = null;

    function rB(BB) {
      const jB = BB._device;
      jB !== pB && (NB?.clear(), NB = null, uB = null, UB = null, aB = null, pB = null, pB = jB), uB ??= jB.createShaderModule({
        code: IB
      }), UB ??= function(BB) {
        return (0, nB.c)(BB, dB)
      }(BB), aB ??= jB.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: QB.d.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: QB.d.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function sB(BB, jB, zB) {
      const QB = BB._device,
        nB = QB.createCommandEncoder();
      JB(BB, jB, nB, zB), QB.queue.submit([nB.finish()])
    }

    function JB(BB, jB, zB, QB) {
      if (jB.mipLevelCount <= 1) return;
      const nB = BB._device,
        dB = function(BB, jB) {
          const zB = BB._device;
          rB(BB), NB ??= new Map;
          let QB = NB.get(jB);
          return QB || (QB = zB.createRenderPipeline({
            layout: zB.createPipelineLayout({
              bindGroupLayouts: [aB]
            }),
            vertex: {
              module: uB,
              entryPoint: "vs"
            },
            fragment: {
              module: uB,
              entryPoint: "fs",
              targets: [{
                format: jB
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), NB.set(jB, QB)), QB
        }(BB, jB.format),
        IB = null != QB ? {
          dimension: "2d",
          baseArrayLayer: QB,
          arrayLayerCount: 1
        } : {};
      for (let NB = 1; NB < jB.mipLevelCount; NB++) {
        const BB = jB.createView({
            baseMipLevel: NB - 1,
            mipLevelCount: 1,
            ...IB
          }),
          QB = jB.createView({
            baseMipLevel: NB,
            mipLevelCount: 1,
            ...IB
          }),
          uB = nB.createBindGroup({
            layout: aB,
            entries: [{
              binding: 0,
              resource: BB
            }, {
              binding: 1,
              resource: UB
            }]
          }),
          pB = zB.beginRenderPass({
            colorAttachments: [{
              view: QB,
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
        pB.setPipeline(dB), pB.setBindGroup(0, uB), pB.draw(3), pB.end()
      }
    }
  },
  41767: (BB, jB, zB) => {
    function QB(BB, jB) {
      return Math.floor(Math.log2(Math.max(BB, jB))) + 1
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  41731: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      g: () => aB
    });
    var QB = zB(41739),
      nB = zB(41743),
      dB = zB(41750),
      IB = zB(41756),
      NB = zB(41765),
      uB = zB(41767);

    function UB(BB, jB, zB, NB) {
      let UB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (jB < 1 || zB < 1 || NB < 1) && (0, QB.d)(722, jB, zB, NB);
      const aB = BB._device,
        pB = UB.mipMaps ?? !0,
        rB = UB.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        sB = aB.createTexture({
          size: {
            width: jB,
            height: zB,
            depthOrArrayLayers: NB
          },
          dimension: "2d",
          format: rB,
          mipLevelCount: pB ? (0, uB.c)(jB, zB) : 1,
          usage: nB.f.TEXTURE_BINDING | nB.f.COPY_DST | nB.f.RENDER_ATTACHMENT
        }),
        JB = (0, IB.c)(BB, {
          addressModeU: UB.addressModeU ?? "repeat",
          addressModeV: UB.addressModeV ?? "repeat",
          minFilter: UB.minFilter ?? "linear",
          magFilter: UB.magFilter ?? "linear",
          mipmapFilter: pB ? "linear" : "nearest"
        }),
        mB = {
          texture: sB,
          view: sB.createView({
            dimension: "2d-array"
          }),
          sampler: JB,
          width: jB,
          height: zB,
          layers: NB
        };
      return (0, dB.e)(mB), mB
    }

    function aB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (zB < 0 || zB >= jB.layers || (0 | zB) !== zB) && (0, QB.d)(723, jB.layers, zB);
      const IB = dB.invertY ?? !0,
        uB = dB.premultiplyAlpha ?? !1;
      BB._device.queue.copyExternalImageToTexture({
        source: nB,
        flipY: IB
      }, {
        texture: jB.texture,
        origin: [0, 0, zB],
        premultipliedAlpha: uB
      }, [jB.width, jB.height, 1]), jB.texture.mipLevelCount > 1 && (0, NB.generateMipmaps)(BB, jB.texture, zB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);